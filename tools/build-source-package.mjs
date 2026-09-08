import fs from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath,pathToFileURL} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

export async function sourcePackageEntries(){
  const manifest=JSON.parse(await fs.readFile(path.join(root,'RELEASE_MANIFEST.json'),'utf8'));
  const entries=[...manifest.files.map(item=>item.path),'RELEASE_MANIFEST.json'].sort();
  const forbidden=entries.filter(p=>p==='_site'||p.startsWith('_site/')||p==='node_modules'||p.startsWith('node_modules/')||p==='.git'||p.startsWith('.git/'));
  if(forbidden.length)throw new Error(`Release manifest contains forbidden generated/package paths: ${forbidden.join(', ')}`);
  return entries;
}

export async function buildSourcePackage({outputPath=null}={}){
  const product=JSON.parse(await fs.readFile(path.join(root,'config/product-config.json'),'utf8'));
  const entries=await sourcePackageEntries();
  for(const rel of entries)await fs.access(path.join(root,rel));
  const out=path.resolve(outputPath||path.join(root,'..',`HUF_KPI_Rebuild_${product.implementationPhase}_${product.appVersion}.zip`));
  await fs.rm(out,{force:true});
  const result=spawnSync('zip',['-q','-X',out,...entries],{cwd:root,encoding:'utf8'});
  if(result.status!==0)throw new Error(`Source package build failed: ${result.stderr||result.stdout||`zip exit ${result.status}`}`);
  return Object.freeze({outputPath:out,entries:entries.length,version:product.appVersion,phase:product.implementationPhase});
}

if(import.meta.url===pathToFileURL(process.argv[1]).href){
  const result=await buildSourcePackage({outputPath:process.argv[2]||null});
  console.log(JSON.stringify({status:'PASS',...result},null,2));
}
