import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
import JSZip from 'jszip';
const root=path.resolve(new URL('../..',import.meta.url).pathname);
const temporary=await fs.mkdtemp(path.join(os.tmpdir(),'huf-protected-'));
const bytes=await fs.readFile(new URL('baseline-tests.zip',import.meta.url));
const archive=await JSZip.loadAsync(bytes);
const suites=[];
try{
 for(const item of Object.values(archive.files)){if(item.dir)continue;const target=path.join(temporary,item.name);if(!target.startsWith(temporary+path.sep))throw new Error('Invalid archive path');await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,await item.async('nodebuffer'));}
 await fs.writeFile(path.join(temporary,'package.json'),'{"type":"module"}');
 for(const [name,target] of [['js','protected-core/js'],['node_modules','node_modules']])await fs.symlink(path.join(root,target),path.join(temporary,name),'dir');
 for(const name of await fs.readdir(path.join(root,'protected-core/config')))await fs.symlink(path.join(root,'protected-core/config',name),path.join(temporary,'config',name));
 const files=(await fs.readdir(path.join(temporary,'tests'))).filter(n=>/^node-(engine\d+(-fixtures)?|design6-d5)\.mjs$/.test(n)).sort();
 for(const name of files){const result=spawnSync(process.execPath,['tests/'+name],{cwd:temporary,encoding:'utf8',maxBuffer:32*1024*1024});const outputName=name.replace('.mjs','-result.json');let evidence;try{evidence=JSON.parse(await fs.readFile(path.join(temporary,'tests',outputName),'utf8'));}catch{evidence={stdout:result.stdout,stderr:result.stderr};}suites.push({name,status:result.status===0?'PASS':'FAIL',evidence});console.log(name+': '+suites.at(-1).status);}
 const result={schema:'HUF-PROTECTED-REGRESSION-v1',status:suites.every(s=>s.status==='PASS')?'PASS':'FAIL',baselineTestArchiveSha256:crypto.createHash('sha256').update(bytes).digest('hex'),execution:'Unmodified archived tests against current protected-core symlinks; no archived result summaries consumed',suites};
 await fs.mkdir(path.join(root,'tests/evidence'),{recursive:true});await fs.writeFile(path.join(root,'tests/evidence/protected-regression.json'),JSON.stringify(result,null,2)+'\n');if(result.status!=='PASS')process.exitCode=1;
}finally{await fs.rm(temporary,{recursive:true,force:true});}
