import { createWorkerPipelineClient } from '../../pipeline/worker-client.js';
const checks=[];const check=(id,ok,note='')=>checks.push({id,status:ok?'PASS':'FAIL',note});
class FakeWorker{
  static last=null;
  constructor(){this.terminated=false;FakeWorker.last=this;}
  postMessage(msg){this.lastMessage=msg;}
  terminate(){this.terminated=true;}
}
const client=createWorkerPipelineClient({WorkerCtor:FakeWorker,timeoutMs:5000});
const pending=client.getCapabilities();
FakeWorker.last.onerror({message:'boom',preventDefault(){}});
let rejected=false;try{await pending;}catch(e){rejected=/boom/.test(e.message);}
check('FATAL_ERROR_REJECTS_PENDING',rejected);
check('FATAL_ERROR_TERMINATES',FakeWorker.last.terminated===true);
let closedReject=false;try{await client.reset();}catch(e){closedReject=/closed/.test(e.message);}
check('FATAL_ERROR_CLOSES_CLIENT',closedReject);
const client2=createWorkerPipelineClient({WorkerCtor:FakeWorker,timeoutMs:5000});
const pending2=client2.getCapabilities();FakeWorker.last.onmessageerror({});let messageRejected=false;try{await pending2;}catch(e){messageRejected=/deserialized/.test(e.message);}check('MESSAGE_ERROR_FAILS_CLOSED',messageRejected&&FakeWorker.last.terminated===true);
const client3=createWorkerPipelineClient({WorkerCtor:FakeWorker,timeoutMs:5000});client3.terminate();let explicitClosed=false;try{await client3.reset();}catch(e){explicitClosed=/closed/.test(e.message);}check('EXPLICIT_TERMINATE_CLOSES',explicitClosed&&FakeWorker.last.terminated===true);

class ResponsiveWorker{
  static last=null;
  constructor(){this.terminated=false;ResponsiveWorker.last=this;}
  postMessage(msg){this.lastMessage=msg;queueMicrotask(()=>this.onmessage?.({data:{requestId:msg.requestId,status:'complete',payload:{ok:true}}}));}
  terminate(){this.terminated=true;}
}
const client4=createWorkerPipelineClient({WorkerCtor:ResponsiveWorker,timeoutMs:5000});
await client4.getMappingMetadata();check('WORKER_MAPPING_METADATA_COMMAND',ResponsiveWorker.last.lastMessage.command==='GET_MAPPING_METADATA');
await client4.updateSheetMapping('02_Structures','02_Structures');check('WORKER_UPDATE_SHEET_COMMAND',ResponsiveWorker.last.lastMessage.command==='UPDATE_SHEET_MAPPING');
await client4.confirmSheetMapping('02_Structures',true);check('WORKER_CONFIRM_SHEET_COMMAND',ResponsiveWorker.last.lastMessage.command==='CONFIRM_SHEET_MAPPING');
await client4.updateFieldMapping('STR-001','02_Structures',0);check('WORKER_UPDATE_FIELD_COMMAND',ResponsiveWorker.last.lastMessage.command==='UPDATE_FIELD_MAPPING'&&ResponsiveWorker.last.lastMessage.payload.fieldId==='STR-001');
await client4.confirmFieldMapping('STR-001',true);check('WORKER_CONFIRM_FIELD_COMMAND',ResponsiveWorker.last.lastMessage.command==='CONFIRM_FIELD_MAPPING');
await client4.confirmAllSuggested();check('WORKER_CONFIRM_ALL_COMMAND',ResponsiveWorker.last.lastMessage.command==='CONFIRM_ALL_SUGGESTED');
await client4.confirmMapping();check('WORKER_FINALIZE_NO_MAPPING_PAYLOAD',ResponsiveWorker.last.lastMessage.command==='CONFIRM_MAPPING'&&ResponsiveWorker.last.lastMessage.payload===null);
client4.terminate();

const failed=checks.filter(x=>x.status==='FAIL');console.log(JSON.stringify({suite:'worker-client-lifecycle',status:failed.length?'FAIL':'PASS',checks:checks.length,failed:failed.length,details:checks},null,2));if(failed.length)process.exitCode=1;
