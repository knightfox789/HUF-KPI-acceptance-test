import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {buildSourcePackage,sourcePackageEntries} from '../../tools/build-source-package.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const checks=[];const check=(id,ok,note='')=>checks.push({id,status:ok?'PASS':'FAIL',note});
const entries=await sourcePackageEntries();
check('NO_SITE_IN_SOURCE_PACKAGE',!entries.some(p=>p==='_site'||p.startsWith('_site/')));
check('NO_NODE_MODULES_IN_SOURCE_PACKAGE',!entries.some(p=>p==='node_modules'||p.startsWith('node_modules/')));
check('RELEASE_MANIFEST_INCLUDED',entries.includes('RELEASE_MANIFEST.json'));
const manifest=JSON.parse(await fs.readFile(path.join(root,'RELEASE_MANIFEST.json'),'utf8'));
check('MANIFEST_DRIVES_PACKAGE',entries.length===manifest.files.length+1);
const tmp=path.join(os.tmpdir(),`huf-source-package-${process.pid}.zip`);
try{
  const built=await buildSourcePackage({outputPath:tmp});
  check('BUILD_ENTRY_COUNT',built.entries===entries.length);
  const listed=spawnSync('unzip',['-Z1',tmp],{encoding:'utf8'});
  const zipEntries=listed.status===0?listed.stdout.trim().split(/\r?\n/).filter(Boolean).sort():[];
  check('ZIP_LIST_READABLE',listed.status===0,listed.stderr||'');
  check('ZIP_EXACT_COVERAGE',JSON.stringify(zipEntries)===JSON.stringify(entries),`zip=${zipEntries.length}, expected=${entries.length}`);
  check('ZIP_NO_SITE',!zipEntries.some(p=>p==='_site/'||p.startsWith('_site/')));
}finally{await fs.rm(tmp,{force:true});}
const failed=checks.filter(x=>x.status==='FAIL');console.log(JSON.stringify({suite:'source-package-governance',status:failed.length?'FAIL':'PASS',checks:checks.length,failed:failed.length,details:checks},null,2));if(failed.length)process.exitCode=1;
