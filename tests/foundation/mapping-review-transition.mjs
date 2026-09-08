import { confirmMappingReview } from '../../ui/pages/mapping-review.js';
const checks=[];const check=(id,ok,note='')=>checks.push({id,status:ok?'PASS':'FAIL',note});
let calls=[];const final=Object.freeze({status:'mapping_confirmed',snapshotHash:'HASH-7BD'});
const controller={async confirmMapping(){calls.push('controller');return final;}};
let received=null;const result=await confirmMappingReview({controller,onConfirmed:value=>{calls.push('callback');received=value;}});
check('GOVERNED_FINALIZER_CALLED_ONCE',calls.filter(x=>x==='controller').length===1,JSON.stringify(calls));
check('CONFIRMED_CALLBACK_CALLED_ONCE',calls.filter(x=>x==='callback').length===1,JSON.stringify(calls));
check('CALLBACK_AFTER_FINALIZER',JSON.stringify(calls)===JSON.stringify(['controller','callback']),JSON.stringify(calls));
check('CALLBACK_RECEIVES_FROZEN_RESULT',received===final);
check('HELPER_RETURNS_FINAL_RESULT',result===final);
let threw=false;try{await confirmMappingReview({controller:{}});}catch(error){threw=/governed controller/.test(error.message);}
check('MISSING_CONTROLLER_BLOCKED',threw);
const failed=checks.filter(x=>x.status==='FAIL');console.log(JSON.stringify({suite:'mapping-review-transition',status:failed.length?'FAIL':'PASS',checks:checks.length,failed:failed.length,details:checks},null,2));if(failed.length)process.exitCode=1;
