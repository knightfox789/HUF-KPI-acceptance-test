import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
async function walk(dir){
  const out=[];
  for(const entry of await fs.readdir(dir,{withFileTypes:true})){
    if(entry.isDirectory()&&['_site','node_modules'].includes(entry.name)) continue;
    const p=path.join(dir,entry.name);
    if(entry.isDirectory()) out.push(...await walk(p));
    else out.push(p);
  }
  return out;
}

const files=(await walk(root)).filter(f=>(f.endsWith('.js')||f.endsWith('.mjs'))&&!f.includes(`${path.sep}vendor${path.sep}`));
const unresolved=[];
let imports=0;
for(const file of files){
  const text=await fs.readFile(file,'utf8');
  const regex=/(?:import\s+(?:[^'\"]+?\s+from\s+)?|export\s+[^'\"]+?\s+from\s+)[\'\"](\.[^\'\"]+)[\'\"]/g;
  for(const match of text.matchAll(regex)){
    imports++;
    let target=path.resolve(path.dirname(file),match[1]);
    try{await fs.access(target);continue;}catch{}
    if(!path.extname(target)){
      try{await fs.access(`${target}.js`);continue;}catch{}
    }
    unresolved.push({file:path.relative(root,file),specifier:match[1]});
  }
}
console.log(JSON.stringify({suite:'relative-imports',status:unresolved.length?'FAIL':'PASS',files:files.length,imports,unresolved},null,2));
if(unresolved.length) process.exitCode=1;
