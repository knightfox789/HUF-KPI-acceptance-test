import { buildWorkbookPreflight } from '../../services/preflight-service.js';
import { createPreflightViewModel } from '../../views/preflight-view-model.js';

const checks=[];const check=(id,ok,note='')=>checks.push({id,status:ok?'PASS':'FAIL',note});
const sheets=['00_Instructions','01_Control','02_Structures','03_Technical','04_Catchments','05_Cascade_Links','06_Daily_Rainfall','07_Hydro_Params','08_Stage_Area_Optional','09_Silt_Assessment','10_Person_Days','11_Evidence','99_Lookups'];
function summary({version='HUF-SS-INPUT-v1.1',missing=[],extra=[],formulaCount=0,start='2024-06-01',end='2025-05-31'}={}){
  const present=sheets.filter(x=>!missing.includes(x));
  return {summary:{engine:'E01',engineContractVersion:'E01-v0.1.0',sourceSessionId:'SRC-TEST',sourceWorkbook:{fileName:'test.xlsx',byteLength:12345,sha256:'a'.repeat(64)},parser:{library:'xlsx-lite'},workbook:{sheetCount:present.length+extra.length},templateHint:{status:missing.length?'controlled-template-structure-partial':extra.length?'controlled-template-plus-extra-sheets':'controlled-template-structure-match',expectedSheetCount:sheets.length,recognizedSheetCount:present.length,missingSheets:missing,extraSheets:extra},controlMetadataHint:{'Template Version':version,'Reporting Start Date':start,'Reporting End Date':end},sheetInventory:[...present.map((name,i)=>({name,expectedRoleHint:i<2?'support/control':'data',rowCount:name==='02_Structures'?20:(name==='06_Daily_Rainfall'?366:1),columnCount:8,formulaCellCount:name==='03_Technical'?formulaCount:0,headers:['A'],previewRows:[['SECRET-RAW-VALUE']]})),...extra.map(name=>({name,rowCount:2,columnCount:2,formulaCellCount:0,previewRows:[['SECRET-EXTRA']]}))],intakeNotes:['Protected E01 intake complete.']}};
}
const good=buildWorkbookPreflight(summary(),{supportedTemplateVersion:'HUF-SS-INPUT-v1.1'});const vm=createPreflightViewModel(good);
check('GOOD_READY',good.overallStatus==='ready_for_mapping'&&good.canContinueToMapping);
check('TEMPLATE_SUPPORTED',good.template.compatibility==='supported'&&good.template.detectedVersion==='HUF-SS-INPUT-v1.1');
check('SHEET_COUNTS',good.sheets.recognizedCount===13&&good.sheets.expectedCount===13&&good.sheets.missingCount===0);
check('STRUCTURES',good.records.structures===20);
check('REPORTING_PERIOD',good.reportingPeriod.detected&&good.reportingPeriod.start==='2024-06-01');
check('SOURCE_FINGERPRINT',good.source.sha256==='a'.repeat(64)&&good.source.shortSha256.includes('…'));
check('NO_RAW_PREVIEW_LEAK',!JSON.stringify(good).includes('SECRET-RAW-VALUE'));
check('DEEP_FROZEN',Object.isFrozen(good)&&Object.isFrozen(good.sheets)&&Object.isFrozen(good.sheets.rows)&&Object.isFrozen(good.issues.ordered));
let mutationBlocked=false;try{good.sheets.rows[0].rowCount=999;}catch{mutationBlocked=true;}check('MUTATION_BLOCKED',mutationBlocked&&good.sheets.rows[0].rowCount!==999);
check('VIEW_CARDS',vm.cards.length===6&&vm.cards.at(-1).value==='Ready for mapping');

const formulas=buildWorkbookPreflight(summary({formulaCount:3}),{supportedTemplateVersion:'HUF-SS-INPUT-v1.1'});
check('FORMULA_WARNING',formulas.formulas.cellCount===3&&formulas.issues.warnings.some(x=>x.code==='PREFLIGHT_FORMULAS_PRESENT')&&formulas.canContinueToMapping);
const extra=buildWorkbookPreflight(summary({extra:['Scratch']}),{supportedTemplateVersion:'HUF-SS-INPUT-v1.1'});
check('EXTRA_WARNING',extra.sheets.extraCount===1&&extra.sheets.rows.some(x=>x.name==='Scratch'&&!x.controlled)&&extra.canContinueToMapping);
const missing=buildWorkbookPreflight(summary({missing:['11_Evidence']}),{supportedTemplateVersion:'HUF-SS-INPUT-v1.1'});
check('MISSING_BLOCKS',!missing.canContinueToMapping&&missing.issues.errors.some(x=>x.code==='PREFLIGHT_REQUIRED_SHEETS_MISSING')&&missing.sheets.rows.some(x=>x.name==='11_Evidence'&&x.missing));
const wrong=buildWorkbookPreflight(summary({version:'HUF-SS-INPUT-v0.9'}),{supportedTemplateVersion:'HUF-SS-INPUT-v1.1'});
check('UNSUPPORTED_VERSION_BLOCKS',!wrong.canContinueToMapping&&wrong.template.compatibility==='blocked'&&wrong.issues.errors.some(x=>x.code==='PREFLIGHT_TEMPLATE_VERSION_UNSUPPORTED'));
const unknown=buildWorkbookPreflight(summary({version:null}),{supportedTemplateVersion:'HUF-SS-INPUT-v1.1'});
check('MISSING_VERSION_BLOCKS',!unknown.canContinueToMapping&&unknown.issues.errors.some(x=>x.code==='PREFLIGHT_TEMPLATE_VERSION_MISSING'));
const period=buildWorkbookPreflight(summary({end:null}),{supportedTemplateVersion:'HUF-SS-INPUT-v1.1'});
check('PERIOD_WARNING',period.canContinueToMapping&&!period.reportingPeriod.detected&&period.issues.warnings.some(x=>x.code==='PREFLIGHT_REPORTING_PERIOD_INCOMPLETE'));
const ordered=missing.issues.ordered.map(x=>x.level);check('ERRORS_FIRST',ordered.indexOf('error')===0&&ordered.lastIndexOf('error')<Math.max(ordered.indexOf('warning'),ordered.indexOf('information')));
check('NOT_DESIGN4',good.boundaryNote.includes('not Design-4 validation'));

const failed=checks.filter(x=>x.status==='FAIL');console.log(JSON.stringify({suite:'preflight-service',status:failed.length?'FAIL':'PASS',checks:checks.length,failed:failed.length,details:checks},null,2));if(failed.length)process.exitCode=1;
