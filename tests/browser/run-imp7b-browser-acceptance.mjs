import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const siteRoot=path.resolve(process.env.HUF_SITE_ROOT||path.join(root,'_site'));
const evidencePath=path.resolve(process.env.HUF_ACCEPTANCE_EVIDENCE_PATH||path.join(root,'phase7be-browser-acceptance.runtime.json'));
const samplePath=path.join(root,'samples/nonleap/GOLDEN_E2E_NONLEAP_FY2024-25.xlsx');
const startedAt=new Date().toISOString();
const checks=[];
const check=(id,ok,note='')=>{checks.push({id,status:ok?'PASS':'FAIL',note});if(!ok)throw new Error(`${id}${note?`: ${note}`:''}`);};
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon'};
function safePath(url){const pathname=decodeURIComponent(new URL(url,'http://127.0.0.1').pathname);const rel=pathname==='/'?'index.html':pathname.replace(/^\/+/, '');const resolved=path.resolve(siteRoot,rel);if(!resolved.startsWith(siteRoot+path.sep)&&resolved!==siteRoot)throw new Error('Unsafe static path');return resolved;}
const server=http.createServer(async(req,res)=>{try{const p=safePath(req.url||'/');const data=await fs.readFile(p);res.writeHead(200,{'content-type':mime[path.extname(p)]||'application/octet-stream','cache-control':'no-store'});res.end(data);}catch{res.writeHead(404,{'content-type':'text/plain'});res.end('Not found');}});
const evidence={schema:'HUF-IMP7BE-BROWSER-ACCEPTANCE-v1',phase:'IMP-7B-E',productVersion:'0.1.6-acceptance',startedAt,status:'RUNNING',applicationFailure:false,siteRoot,sample:path.relative(root,samplePath),checks,consoleErrors:[],pageErrors:[]};
let browser;
try{
  await fs.access(path.join(siteRoot,'index.html'));await fs.access(samplePath);
  await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});
  const address=server.address();const base=`http://127.0.0.1:${address.port}/`;
  browser=await chromium.launch({headless:true});
  const page=await browser.newPage();
  page.on('console',msg=>{if(msg.type()==='error')evidence.consoleErrors.push(msg.text());});
  page.on('pageerror',err=>evidence.pageErrors.push(err.message));
  await page.goto(base,{waitUntil:'domcontentloaded'});
  await page.locator('[data-upload-root]').waitFor();check('UPLOAD_SCREEN_RENDERED',true);
  await page.locator('[data-file-input]').setInputFiles(samplePath);
  await page.locator('[data-selected-card]').waitFor({state:'visible'});
  const selected=await page.locator('[data-selected-name]').textContent();check('REAL_XLSX_SELECTED',selected?.includes('GOLDEN_E2E_NONLEAP_FY2024-25.xlsx'),selected||'');
  const sourceHash=(await page.locator('[data-selected-hash]').textContent()||'').trim();check('SOURCE_FINGERPRINT_VISIBLE',sourceHash.length>=12,sourceHash);
  await page.locator('[data-review]').click();
  await page.locator('[data-preflight-root]').waitFor({state:'visible',timeout:30000});
  const preflightText=await page.locator('[data-preflight-root]').innerText();
  check('PREFLIGHT_READY',preflightText.includes('Ready for mapping'));
  check('PREFLIGHT_TEMPLATE_VERSION',preflightText.includes('HUF-SS-INPUT-v1.1'));
  check('PREFLIGHT_FORMULA_VISIBILITY',preflightText.includes('Formula'));
  await page.locator('[data-continue]').click();
  await page.locator('[data-mapping-root]').waitFor({state:'visible',timeout:30000});
  const mappingText=await page.locator('[data-mapping-root]').innerText();
  for(const label of ['Mapped automatically','Needs confirmation','Conflicts','Unmapped required'])check(`SUMMARY_${label.toUpperCase().replace(/[^A-Z]+/g,'_')}`,mappingText.includes(label));
  for(const label of ['Needs attention','Confirmed','All fields','Advanced'])check(`FILTER_${label.toUpperCase().replace(/[^A-Z]+/g,'_')}`,mappingText.includes(label));
  await page.locator('[data-filter="all"]').click();
  const reviewButtons=page.locator('[data-open-field]');check('MAPPING_ROWS_PRESENT',await reviewButtons.count()>0,String(await reviewButtons.count()));
  await reviewButtons.first().click();
  await page.locator('[data-mapping-drawer]').waitFor({state:'visible'});
  const select=page.locator('[data-field-source]');const currentValue=await select.inputValue();check('MANUAL_SOURCE_CURRENT_VALUE_AVAILABLE',Boolean(currentValue),currentValue);
  await page.locator('[data-apply-field]').click();
  await page.locator('[data-mapping-root]').waitFor({state:'visible'});
  const postManual=await page.locator('[data-mapping-root]').innerText();check('MANUAL_MAPPING_APPLIED',postManual.includes('Manual')||postManual.includes('manual'));
  const finalize=page.locator('[data-finalize-mapping]');check('FINALIZE_ENABLED',!(await finalize.isDisabled()));
  await finalize.click();
  await page.getByText('Mapping snapshot is frozen',{exact:true}).waitFor({state:'visible',timeout:30000});
  const confirmedText=await page.locator('main').innerText();check('MAPPING_CONFIRMED_SCREEN',confirmedText.includes('Mapping confirmed'));
  const hashMatches=confirmedText.match(/[a-f0-9]{64}/gi)||[];check('SNAPSHOT_HASH_VISIBLE',hashMatches.length>0,hashMatches[0]||'');
  check('DATA_PREPARATION_NOT_EXECUTED',confirmedText.includes('does not execute E03 yet'));
  check('NO_PAGE_ERRORS',evidence.pageErrors.length===0,evidence.pageErrors.join(' | '));
  evidence.status='PASS';
}catch(error){evidence.status='FAIL';evidence.applicationFailure=true;evidence.error={message:error.message,stack:error.stack};process.exitCode=1;}
finally{
  evidence.finishedAt=new Date().toISOString();
  await browser?.close().catch(()=>{});await new Promise(resolve=>server.close(()=>resolve()));
  await fs.mkdir(path.dirname(evidencePath),{recursive:true});await fs.writeFile(evidencePath,JSON.stringify(evidence,null,2)+'\n');
  console.log(JSON.stringify({status:evidence.status,evidencePath,checks:checks.length,failed:checks.filter(x=>x.status==='FAIL').length},null,2));
}
