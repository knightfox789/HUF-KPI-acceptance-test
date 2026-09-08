import assert from 'node:assert/strict';import fs from 'node:fs/promises';import {runFixture} from '../fixtures/runtime.mjs';
import {createResultModel,selectResults,summarizeResults} from '../../views/result-model.js';import {compactRows,toCsv,xlsxBlob,exportSheets} from '../../services/export-service.js';import {reportData} from '../../services/report-service.js';
const checks=[];const check=(id,fn)=>{fn();checks.push({id,status:'PASS'});};
for(const sample of ['nonleap/GOLDEN_E2E_NONLEAP_FY2024-25.xlsx','leap/GOLDEN_E2E_LEAP_FY2023-24.xlsx']){
 const a=await runFixture(sample),pack=a.getResultPackage(),model=createResultModel(pack);
 check(sample+' calendar',()=>assert.equal(pack.audit.runManifest.expectedCalendarDays,sample.startsWith('nonleap')?365:366));
 for(const summary of pack.aggregation.projectSummary){const product=summarizeResults(selectResults(model,{})).find(s=>s.component===summary.component);check(summary.component+' truth',()=>{assert.equal(product.calculatedTotal,summary.calculatedTotal);assert.equal(product.accepted,summary.acceptedCertifiedResult);assert.equal(product.excluded,summary.excludedCount);});}
 for(const scope of model.scopes){const f={scope:scope.key},rows=selectResults(model,f),csv=compactRows(model,f,true),report=reportData(model,f,true);check(scope.key+' scope membership',()=>{assert.deepEqual(csv.map(r=>r.resultId),rows.map(r=>r.id));assert.deepEqual(report.metadata.includedResultIds,rows.map(r=>r.id));});}
 check('Terminal null preservation',()=>assert.ok(model.rows.filter(r=>['excluded','not-calculated'].includes(r.status)).every(r=>r.value===null)));
 check('CSV injection',()=>assert.ok(toCsv([{name:'=1+1',zero:0,missing:null}]).includes("'=1+1")));
 const blob=await xlsxBlob(exportSheets(model,{},true,'technical'));await fs.writeFile(process.env.HUF_TEST_XLSX_PATH||'/tmp/huf-technical-test.xlsx',new Uint8Array(await blob.arrayBuffer()));
 const zip=await globalThis.JSZip.loadAsync(await blob.arrayBuffer());check('XLSX workbook',()=>assert.ok(zip.file('xl/workbook.xml')));
 const detail=a.getPreparationDetail();const row=detail.tables.find(t=>t.expectedSheet==='03_Technical').records[0],cell=row.cells['TEC-002'];const before=pack.audit.snapshotHashes.sourceWorkbookSha256;
 await a.applySourceCorrection({sourceSheet:row.sourceSheet,sourceRowNumber:row.sourceRowNumber,fieldId:'TEC-002',correctedValue:null,reason:'Regression: preserve blank'});check('Corrections invalidate completed audit',()=>assert.throws(()=>a.getResultPackage()));await a.runStage('E03');const after=a.getPreparationDetail();
 check('Correction blank preserved',()=>assert.equal(after.tables.find(t=>t.expectedSheet==='03_Technical').records[0].values['TEC-002'],null));
 check('Source SHA unchanged',()=>assert.equal(a.getPublicProtectedState().canonicalization.sourceWorkbookSha256,before));
 check('Correction history original',()=>assert.equal(after.corrections[0].originalValue,cell.sourceValue));
 check('Canonical content changes',()=>assert.notEqual(a.getPublicProtectedState().canonicalization.canonicalSnapshotHash,pack.audit.snapshotHashes.canonicalSnapshotHash));
}
await fs.writeFile('tests/evidence/product-flow.json',JSON.stringify({status:'PASS',checks:checks.length,failed:0,results:checks},null,2));console.log(JSON.stringify({status:'PASS',checks:checks.length,failed:0}));
