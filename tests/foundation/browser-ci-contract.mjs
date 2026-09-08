import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const validate=await fs.readFile(path.join(root,'.github/workflows/validate.yml'),'utf8');
const pages=await fs.readFile(path.join(root,'.github/workflows/pages.yml'),'utf8');
const runner=await fs.readFile(path.join(root,'tests/browser/run-imp7b-browser-acceptance.mjs'),'utf8');
const checks=[];const check=(id,ok)=>checks.push({id,status:ok?'PASS':'FAIL'});
for(const [id,text] of [['VALIDATE',validate],['PAGES',pages]]){
  check(`${id}_PINNED_PLAYWRIGHT`,/playwright@1\.55\.0/.test(text));
  check(`${id}_CHROMIUM_INSTALL`,/playwright install --with-deps chromium/.test(text));
  check(`${id}_REAL_BROWSER_RUNNER`,/run-imp7b-browser-acceptance\.mjs/.test(text));
  check(`${id}_EVIDENCE_UPLOAD`,/phase7be-browser-acceptance\.json/.test(text));
}
check('RUNNER_REAL_XLSX',runner.includes('GOLDEN_E2E_NONLEAP_FY2024-25.xlsx')&&runner.includes('setInputFiles'));
check('RUNNER_PREFLIGHT',runner.includes('PREFLIGHT_READY')&&runner.includes('[data-preflight-root]'));
check('RUNNER_MAPPING',runner.includes('[data-mapping-root]')&&runner.includes('MANUAL_MAPPING_APPLIED'));
check('RUNNER_FINAL_SNAPSHOT',runner.includes('SNAPSHOT_HASH_VISIBLE')&&runner.includes('DATA_PREPARATION_EXECUTED')&&runner.includes('AUDIT_E01_TO_E09'));
check('PAGES_BROWSER_BEFORE_DEPLOY',/browser_acceptance:[\s\S]*needs:\s*validate[\s\S]*deploy:[\s\S]*needs:\s*browser_acceptance/.test(pages));
const failed=checks.filter(x=>x.status==='FAIL');console.log(JSON.stringify({suite:'browser-ci-contract',status:failed.length?'FAIL':'PASS',checks:checks.length,failed:failed.length,details:checks},null,2));if(failed.length)process.exitCode=1;
