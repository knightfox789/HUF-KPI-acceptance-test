import { deepFreeze,verifyProtectedHash } from '../../adapters/protected-config-adapter.js';
const checks=[];const check=(id,ok,note='')=>checks.push({id,status:ok?'PASS':'FAIL',note});
const original={schema_version:'v1',nested:{x:1},list:[{y:2}]};const frozen=deepFreeze(structuredClone(original));
check('ROOT_FROZEN',Object.isFrozen(frozen));check('NESTED_FROZEN',Object.isFrozen(frozen.nested));check('ARRAY_FROZEN',Object.isFrozen(frozen.list)&&Object.isFrozen(frozen.list[0]));
let mutated=false;try{frozen.nested.x=9;mutated=frozen.nested.x===9;}catch{}check('NESTED_MUTATION_BLOCKED',!mutated&&frozen.nested.x===1);
const manifest={protectedFiles:[{path:'protected-core/config/x.json',sha256:'abc'}]};check('HASH_ACCEPT',verifyProtectedHash('protected-core/config/x.json','abc',manifest)===true);
let rejected=false;try{verifyProtectedHash('protected-core/config/x.json','bad',manifest);}catch{rejected=true;}check('HASH_REJECT',rejected);
const failed=checks.filter(x=>x.status==='FAIL');console.log(JSON.stringify({suite:'controlled-config-hardening',status:failed.length?'FAIL':'PASS',checks:checks.length,failed:failed.length},null,2));if(failed.length)process.exitCode=1;
