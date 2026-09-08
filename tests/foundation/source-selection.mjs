import { prepareSelectedWorkbook,loadSampleWorkbook } from '../../services/source-intake-service.js';
import { createAppController } from '../../app/app-controller.js';
import { createSnapshotRegistry } from '../../pipeline/snapshot-registry.js';

const checks=[];const check=(id,ok,note='')=>checks.push({id,status:ok?'PASS':'FAIL',note});
const bytes=new TextEncoder().encode('controlled-xlsx-test');
const file=new File([bytes],'project.xlsx',{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',lastModified:1234});
const prepared=await prepareSelectedWorkbook(file);
check('PREPARED_NAME',prepared.metadata.name==='project.xlsx');
check('PREPARED_SIZE',prepared.metadata.size===bytes.byteLength);
check('PREPARED_SHA256',/^[0-9a-f]{64}$/.test(prepared.metadata.sha256));
check('PREPARED_KIND',prepared.metadata.kind==='upload'&&!prepared.metadata.synthetic);
let invalidRejected=false;try{await prepareSelectedWorkbook(new File([bytes],'project.csv'));}catch{invalidRejected=true;}check('INVALID_EXTENSION_REJECTED',invalidRejected);

const sampleBytes=new TextEncoder().encode('sample');
const sampleFetch=async()=>new Response(new Blob([sampleBytes]),{status:200});
const sample=await loadSampleWorkbook('leap',{fetchImpl:sampleFetch,FileCtor:File});
check('SAMPLE_SYNTHETIC',sample.metadata.synthetic===true&&sample.metadata.sampleId==='leap');
check('SAMPLE_NAME',sample.metadata.name==='GOLDEN_E2E_LEAP_FY2023-24.xlsx');

let resetCount=0;const adapter={reset(){resetCount++;},async runIntake(f){return{summary:{engine:'E01',engineContractVersion:'E01-v0.1.0',sourceWorkbook:{fileName:f.name,byteLength:f.size,sha256:'f'.repeat(64)},controlMetadataHint:{'Template Version':'HUF-SS-INPUT-v1.1','Reporting Start Date':'2024-06-01','Reporting End Date':'2025-05-31'},templateHint:{status:'controlled-template-structure-match',expectedSheetCount:1,recognizedSheetCount:1,missingSheets:[],extraSheets:[]},sheetInventory:[{name:'02_Structures',rowCount:20,columnCount:5,formulaCellCount:0,previewRows:[['PRIVATE']]}],sourceSessionId:'SRC-1'}};},async buildMapping(){return{};},async confirmMapping(){return{};},async runStage(){return{};},async getPublicProtectedState(){return{};}};
const snapshots=createSnapshotRegistry();snapshots.replaceDraft('E01',{old:true});
const controller=createAppController({adapter,snapshots,sourcePreparer:prepareSelectedWorkbook,sampleLoader:async()=>sample,supportedTemplateVersion:'HUF-SS-INPUT-v1.1'});
await controller.selectWorkbook(file);
check('CONTROLLER_FILE_SELECTED',controller.getState().runState==='FILE_SELECTED');
check('CONTROLLER_SOURCE_METADATA',controller.getState().source.name==='project.xlsx'&&controller.getState().source.sha256===prepared.metadata.sha256);
check('CONTROLLER_FILE_PRIVATE',!('selectedWorkbook' in controller)&&!('getSelectedWorkbook' in controller));
const second=new File([new TextEncoder().encode('second')],'second.xlsx');await controller.selectWorkbook(second);
check('REPLACEMENT_RESETS_ADAPTER',resetCount===1,`resetCount=${resetCount}`);
check('REPLACEMENT_CLEARS_SNAPSHOTS',snapshots.list().length===0);
check('REPLACEMENT_MARKED',controller.getState().invalidatedReason==='Source workbook replaced');
await controller.clearWorkbook();check('CLEAR_RETURNS_EMPTY',controller.getState().runState==='EMPTY'&&!controller.getState().source.name);
await controller.loadSample('leap');check('CONTROLLER_SAMPLE_STATE',controller.getState().source.synthetic===true&&controller.getState().source.sampleId==='leap');
await controller.reviewSelectedWorkbook();check('REVIEW_HANDOFF_PRESERVES_SYNTHETIC',controller.getState().runState==='PREFLIGHT_COMPLETE'&&controller.getState().source.synthetic===true&&controller.getState().source.templateVersion==='HUF-SS-INPUT-v1.1');check('PREFLIGHT_STORED',controller.getState().source.preflight?.schema==='HUF-IMP7BC-PREFLIGHT-v1'&&controller.getState().source.preflight?.records?.structures===20);check('PREFLIGHT_FROZEN',Object.isFrozen(controller.getState().source.preflight)&&Object.isFrozen(controller.getState().source.preflight.sheets));check('RAW_PREVIEW_NOT_EXPOSED',!JSON.stringify(controller.getState().source.preflight).includes('PRIVATE'));

const failed=checks.filter(x=>x.status==='FAIL');console.log(JSON.stringify({suite:'source-selection',status:failed.length?'FAIL':'PASS',checks:checks.length,failed:failed.length,details:checks},null,2));if(failed.length)process.exitCode=1;
