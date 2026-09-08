import { createMappingState } from '../../state/mapping-state.js';
import { createAppController } from '../../app/app-controller.js';
import { createProtectedPipelineAdapter } from '../../pipeline/pipeline-adapter.js';

const checks=[];const check=(id,ok,note='')=>checks.push({id,status:ok?'PASS':'FAIL',note});
const original={status:'mapping_review',sheetMappings:[{expectedSheet:'02_Structures',sourceSheet:'02_Structures',confirmed:false}],fieldMappings:[{fieldId:'STR-001',requirementClass:'Core',sourceSheet:'02_Structures',sourceHeader:'Structure ID',sourceColumnIndex:0,confirmed:false,conflict:false}],stats:{mappedFields:1,unmappedFields:0}};
const state=createMappingState(original,'review');
check('WRAPPER_FROZEN',Object.isFrozen(state));
check('SNAPSHOT_FROZEN',Object.isFrozen(state.snapshot));
check('FIELD_ARRAY_FROZEN',Object.isFrozen(state.snapshot.fieldMappings));
check('FIELD_ENTRY_FROZEN',Object.isFrozen(state.snapshot.fieldMappings[0]));
check('CLONED_FROM_INPUT',state.snapshot!==original&&state.snapshot.fieldMappings!==original.fieldMappings);
let mutationBlocked=false;try{state.snapshot.fieldMappings[0].confirmed=true;}catch{mutationBlocked=true;}
check('NESTED_MUTATION_BLOCKED',mutationBlocked||state.snapshot.fieldMappings[0].confirmed===false);
check('ORIGINAL_NOT_REUSED',original.fieldMappings[0].confirmed===false);


const protectedAdapter=createProtectedPipelineAdapter({});
for(const method of ['getMappingMetadata','updateSheetMapping','confirmSheetMapping','updateFieldMapping','confirmFieldMapping','confirmAllSuggested','confirmMapping'])check(`ADAPTER_${method.toUpperCase()}_EXPOSED`,typeof protectedAdapter[method]==='function');

const calls=[];
const nextMapping=(tag)=>({status:'mapping_review',sheetMappings:[{expectedSheet:'02_Structures',sourceSheet:'02_Structures',confirmed:true}],fieldMappings:[{fieldId:'STR-001',requirementClass:'Core',sourceSheet:'02_Structures',sourceHeader:'Structure ID',sourceColumnIndex:0,confirmed:tag==='confirm-field'||tag==='confirm-all',conflict:false}],stats:{mappedFields:1,unmappedFields:0},tag});
const adapter={
  async getMappingMetadata(){return[];},
  async buildMapping(){calls.push(['build']);return nextMapping('build');},
  async updateSheetMapping(...a){calls.push(['update-sheet',...a]);return nextMapping('update-sheet');},
  async confirmSheetMapping(...a){calls.push(['confirm-sheet',...a]);return nextMapping('confirm-sheet');},
  async updateFieldMapping(...a){calls.push(['update-field',...a]);return nextMapping('update-field');},
  async confirmFieldMapping(...a){calls.push(['confirm-field',...a]);return nextMapping('confirm-field');},
  async confirmAllSuggested(){calls.push(['confirm-all']);return nextMapping('confirm-all');},
  async confirmMapping(){calls.push(['finalize']);return {...nextMapping('finalized'),status:'mapping_confirmed',snapshotHash:'abc'};},
  async runStage(){return{};},async getPublicProtectedState(){return{};},async reset(){}
};
const controller=createAppController({adapter,supportedTemplateVersion:'HUF-SS-INPUT-v1.1'});
await controller.mappingPreview();
await controller.updateSheetMapping('02_Structures','02_Structures');
await controller.confirmSheetMapping('02_Structures',true);
await controller.updateFieldMapping('STR-001','02_Structures',0);
await controller.confirmFieldMapping('STR-001',true);
await controller.confirmAllSuggested();
const finalized=await controller.confirmMapping();
check('GOVERNED_COMMAND_COUNT',calls.length===7,JSON.stringify(calls));
check('UPDATE_FIELD_ROUTED',calls.some(c=>c[0]==='update-field'&&c[1]==='STR-001'));
check('FINALIZE_HAS_NO_MAPPING_PAYLOAD',calls.at(-1)?.length===1,JSON.stringify(calls.at(-1)));
check('FINAL_STATE_CONFIRMED',controller.getState().runState==='MAPPING_CONFIRMED'&&controller.getState().mapping.status==='confirmed');
check('FINAL_MAPPING_FROZEN',Object.isFrozen(finalized)&&Object.isFrozen(finalized.fieldMappings)&&Object.isFrozen(finalized.fieldMappings[0]));
let finalMutation=false;try{finalized.fieldMappings[0].confirmed=false;}catch{finalMutation=true;}
check('FINAL_MAPPING_MUTATION_BLOCKED',finalMutation||finalized.fieldMappings[0].confirmed!==false);
check('CONTROLLER_NO_MUTABLE_STORE',!('appState' in controller)&&!('snapshots' in controller)&&!('orchestrator' in controller));
const failed=checks.filter(x=>x.status==='FAIL');console.log(JSON.stringify({suite:'mapping-state-governance',status:failed.length?'FAIL':'PASS',checks:checks.length,failed:failed.length,details:checks},null,2));if(failed.length)process.exitCode=1;
