import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const dirs=['config','protected-core/config','tests/design6/certification'];
const failed=[];
let parsed=0;
for(const dir of dirs){
  for(const entry of await fs.readdir(path.join(root,dir),{withFileTypes:true})){
    if(entry.isFile()&&entry.name.endsWith('.json')){
      const p=path.join(root,dir,entry.name);
      try{JSON.parse(await fs.readFile(p,'utf8'));parsed++;}
      catch(error){failed.push({file:path.relative(root,p),message:error.message});}
    }
  }
}
console.log(JSON.stringify({suite:'config-parse',status:failed.length?'FAIL':'PASS',parsed,failed},null,2));
if(failed.length) process.exitCode=1;
