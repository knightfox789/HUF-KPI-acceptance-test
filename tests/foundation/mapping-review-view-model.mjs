import { createMappingReviewViewModel } from '../../views/mapping-review-view-model.js';
const checks=[];const check=(id,ok,note='')=>checks.push({id,status:ok?'PASS':'FAIL',note});
const mapping={engine:'E02',engineContractVersion:'E02-v0.2.0',status:'mapping_review',schemaVersion:'HUF-SS-INPUT-v1.1',sourceCatalog:[{name:'S1',headers:[{header:'A',index:0},{header:'B',index:1}]}],sheetMappings:[{expectedSheet:'S1',sourceSheet:'S1',method:'exact-sheet-name',confidence:1,needsConfirmation:false,confirmed:true},{expectedSheet:'S2',sourceSheet:'Alt',method:'sheet-alias',confidence:.97,needsConfirmation:true,confirmed:false}],fieldMappings:[
 {fieldId:'F1',expectedSheet:'S1',expectedHeader:'Auto',requirementClass:'Core',dataType:'Text',sourceSheet:'S1',sourceHeader:'A',sourceColumnIndex:0,method:'exact-field-id',confidence:1,needsConfirmation:false,confirmed:true,userSelected:false,conflict:false,suggestions:[]},
 {fieldId:'F2',expectedSheet:'S1',expectedHeader:'Pending',requirementClass:'Core',dataType:'Text',sourceSheet:'S1',sourceHeader:'B',sourceColumnIndex:1,method:'fuzzy',confidence:.9,needsConfirmation:true,confirmed:false,userSelected:false,conflict:false,suggestions:[{header:'B',columnIndex:1,score:.9}]},
 {fieldId:'F3',expectedSheet:'S1',expectedHeader:'Conflict',requirementClass:'Conditional',dataType:'Decimal',sourceSheet:'S1',sourceHeader:'A',sourceColumnIndex:0,method:'alias',confidence:.97,needsConfirmation:false,confirmed:true,userSelected:false,conflict:true,suggestions:[]},
 {fieldId:'F4',expectedSheet:'S1',expectedHeader:'Required blank',requirementClass:'Core',dataType:'Text',sourceSheet:null,sourceHeader:null,sourceColumnIndex:null,method:'unmapped',confidence:0,needsConfirmation:false,confirmed:false,userSelected:false,conflict:false,suggestions:[]},
 {fieldId:'F5',expectedSheet:'S1',expectedHeader:'Optional blank',requirementClass:'Optional',dataType:'Text',sourceSheet:null,sourceHeader:null,sourceColumnIndex:null,method:'unmapped',confidence:0,needsConfirmation:false,confirmed:false,userSelected:false,conflict:false,suggestions:[]},
 {fieldId:'F6',expectedSheet:'S1',expectedHeader:'Manual',requirementClass:'Core',dataType:'Text',sourceSheet:'S1',sourceHeader:'B',sourceColumnIndex:1,method:'manual',confidence:1,needsConfirmation:false,confirmed:true,userSelected:true,conflict:false,suggestions:[]}
],notes:['note']};
const metadata=mapping.fieldMappings.map(x=>({fieldId:x.fieldId,controlledField:x.expectedHeader,unitFormat:x.dataType==='Decimal'?'m3':'',applicableWhen:'Always'}));
const vm=createMappingReviewViewModel(mapping,metadata,'attention');
check('SUMMARY_AUTO',vm.summary.mappedAutomatically===1,String(vm.summary.mappedAutomatically));
check('SUMMARY_CONFIRM',vm.summary.needsConfirmation===2,String(vm.summary.needsConfirmation));
check('SUMMARY_CONFLICT',vm.summary.conflicts===1);
check('SUMMARY_REQUIRED_UNMAPPED',vm.summary.unmappedRequired===1);
check('SUMMARY_OPTIONAL_UNMAPPED',vm.summary.unmappedOptional===1);
check('BLOCKING_TOTAL',vm.summary.blocking===4,String(vm.summary.blocking));
check('ATTENTION_EXCEPTION_FIRST',vm.rows.length===4&&vm.rows.every(r=>r.status.attention));
check('CONFIRMED_FILTER',createMappingReviewViewModel(mapping,metadata,'confirmed').rows.length===2);
check('ADVANCED_ALL_FIELDS',createMappingReviewViewModel(mapping,metadata,'advanced').rows.length===6);
check('UNIT_METADATA',vm.fields.find(x=>x.fieldId==='F3').unitFormat==='m3');
check('CANDIDATE_COUNT',vm.fields.find(x=>x.fieldId==='F2').candidateCount===1);
check('CANNOT_CONFIRM',vm.canConfirm===false);
const fixed=structuredClone(mapping);fixed.sheetMappings[1].needsConfirmation=false;fixed.sheetMappings[1].confirmed=true;for(const f of fixed.fieldMappings){f.conflict=false;if(f.fieldId==='F2'){f.needsConfirmation=false;f.confirmed=true;}if(f.fieldId==='F4'){f.sourceSheet='S1';f.sourceHeader='B';f.sourceColumnIndex=1;f.method='manual';f.confirmed=true;f.userSelected=true;}};
const ready=createMappingReviewViewModel(fixed,metadata,'attention');check('OPTIONAL_UNMAPPED_ALLOWED',ready.summary.unmappedOptional===1&&ready.summary.unmappedRequired===0);check('READY_TO_CONFIRM',ready.canConfirm===true);
const failed=checks.filter(x=>x.status==='FAIL');console.log(JSON.stringify({suite:'mapping-review-view-model',status:failed.length?'FAIL':'PASS',checks:checks.length,failed:failed.length,details:checks},null,2));if(failed.length)process.exitCode=1;
