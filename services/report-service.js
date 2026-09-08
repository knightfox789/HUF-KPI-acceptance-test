import {normalFont,boldFont} from '../vendor/fonts/dejavu-sans.js';
import {selectResults,summarizeResults,scopeMetadata} from '../views/result-model.js';
export function reportData(model,filter,synthetic,mode='management'){
 const rows=selectResults(model,filter);return {title:'HUF Supply-Side KPI Calculator',mode,metadata:scopeMetadata(model,filter,synthetic),generatedAt:new Date().toISOString(),summary:summarizeResults(rows),records:rows.map(r=>({id:r.recordId,name:r.name,component:r.component,value:r.value,unit:r.unit,status:r.statusLabel,route:r.route,reason:r.assurance.statusReason,calculation:r.calculation,sourceBasis:r.sourceBasis,identity:r.identity,evidence:r.assurance.evidenceRequirements})),geography:model.scopes.filter(s=>s.parent===(filter.scope||model.defaultScope)).map(s=>({scope:s,summary:summarizeResults(rows.filter(r=>r.memberships.includes(s.key)))})).filter(s=>s.summary.length),issues:model.pack.audit.validationIssues.filter(i=>i.entityType==='workbook'||rows.some(r=>r.recordId===i.entityId||r.structureId===i.entityId)),audit:model.pack.audit};
}
export function makePdf(input){
 const reports=Array.isArray(input)?input:[input];if(!reports.length)throw new Error('No reports selected.');
 const doc=new globalThis.jspdf.jsPDF({unit:'mm',format:'a4',compress:true});doc.addFileToVFS('DejaVuSans.ttf',normalFont);doc.addFont('DejaVuSans.ttf','HUFReport','normal');doc.addFileToVFS('DejaVuSans-Bold.ttf',boldFont);doc.addFont('DejaVuSans-Bold.ttf','HUFReport','bold');let y=20;const pageScopes=[];
 const clean=v=>String(v??'Not available').replace(/[—–]/g,'-').replaceAll('³','3');
 const room=h=>{if(y+h>270){doc.addPage();y=24;}};
 const text=(value,size=9,bold=false)=>{doc.setFont('HUFReport',bold?'bold':'normal');doc.setFontSize(size);const lines=doc.splitTextToSize(clean(value),174);for(const line of lines){room(size*.45+2);doc.text(line,18,y);y+=size*.45+1.8;}y+=2;};
 const heading=(value)=>{room(18);doc.setTextColor(18,84,105);text(value,13,true);doc.setTextColor(28,45,53);};
 const rows=(columns,data,widths)=>{
  const measure=(cells,header=false)=>{doc.setFont('HUFReport',header?'bold':'normal');return cells.map((cell,i)=>{const value=clean(cell);doc.setFontSize(8);const numeric=/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(value);const size=numeric?Math.min(8,8*(widths[i]-4)/Math.max(1,doc.getTextWidth(value))):8;doc.setFontSize(size);return {lines:numeric?[value]:doc.splitTextToSize(value,widths[i]-4),size};});};
  const height=layout=>Math.max(...layout.map(c=>c.lines.length))*3.7+5;
  const draw=(cells,header=false)=>{const layout=measure(cells,header),h=height(layout);room(h);if(header){doc.setFillColor(231,241,242);doc.rect(18,y-3,174,h,'F');}let x=18;for(let i=0;i<layout.length;i++){doc.setFontSize(layout[i].size);doc.text(layout[i].lines,x+2,y+1);x+=widths[i];}doc.setDrawColor(216,228,231);doc.line(18,y+h-3,192,y+h-3);y+=h;};
  draw(columns,true);for(const row of data){if(y+height(measure(row))>270){doc.addPage();y=24;draw(columns,true);}draw(row);}y+=6;
 };
 const precise=v=>typeof v==='number'?String(v):'No value';
 for(const [index,data] of reports.entries()){
  if(index){doc.addPage();y=20;}const first=doc.getNumberOfPages();
  doc.setTextColor(18,84,105);text(data.title,18,true);doc.setTextColor(28,45,53);text(`${data.metadata.scope?.level||'Selected scope'} | ${data.metadata.scope?.label||'Results'}`,13,true);text(`${data.metadata.reportingStartDate} to ${data.metadata.reportingEndDate} | ${data.mode==='technical'?'Technical / M&E':'Management'} report`,9);
  if(data.metadata.synthetic){doc.setTextColor(133,69,13);text('SYNTHETIC VALIDATION DATA - NOT FOR PROJECT REPORTING',10,true);doc.setTextColor(28,45,53);}
  heading('Results and coverage');text('Calculated total = accepted + provisional + warning. Missing, HOLD and excluded results are not zero. Water components and person-days remain separate.');
  for(const s of data.summary){rows(['Component / unit','Calculated total','Accepted','Provisional','Warning'],[[s.component+' / '+s.unit,precise(s.calculatedTotal),precise(s.accepted),precise(s.provisional),precise(s.warning)]],[37,37,34,33,33]);text(`Coverage: ${s.records} records | ${s.calculated} calculated | ${s.notCalculated} not calculated / HOLD | ${s.excluded} excluded | ${s.pendingEvidence} evidence pending`,8);}
  text('Accepted means accepted under controlled methodology. Formal HUF confirmation: '+data.metadata.formalHufConfirmation,9);
  if(data.geography.length){heading('Geography comparison');rows(['Geography','Component','Calculated / unit','Accepted'],data.geography.flatMap(g=>g.summary.map(s=>[g.scope.label,s.component,precise(s.calculatedTotal)+' '+s.unit,precise(s.accepted)])),[42,30,55,47]);}
  heading('Included result records');rows(['Record / name','Component','Result / unit','Assurance'],data.records.map(r=>[r.id+' / '+r.name,r.component,precise(r.value)+' '+r.unit,r.status]),[48,27,48,51]);
  if(data.mode!=='technical'&&data.issues.length){heading('Validation and evidence disclosure');text(`${data.issues.length} scoped/workbook validation finding(s) remain visible. Evidence-pending and warning totals above are included only in their stated buckets.`,9);rows(['Finding','Severity','Scope'],data.issues.map(i=>[i.message,i.severity,i.entityId||'Workbook']),[96,38,40]);}
  if(data.mode==='technical'){
   heading('Technical calculation basis');
   for(const r of data.records){heading(r.id+' - '+r.route);text(r.reason,9);text(Object.values(r.identity||{}).filter(v=>typeof v==='string').join(' | '),8);
    if(r.unit==='m3'){const c=r.calculation;rows(['Controlled basis','Value'],[['Calculation period',`${c.calculationStartDate??'Not applicable'} to ${c.calculationEndDate??'Not applicable'}`],['Calculation days',c.calculationDays],...Object.entries(c.capacity||{}).filter(([k])=>k!=='formulaIds'),['Effective catchment ha',c.catchment?.effectiveHa],['Catchment method',c.catchment?.method],...['generatedRunoffM3','overflowM3','capturedRunoffM3','cumulativeEvaporationM3','cumulativeInfiltrationM3','finalClosingStorageM3','identityCrosscheckM3','identityDifferenceM3','maxMassResidualM3'].filter(k=>c[k]!==undefined).map(k=>[k,c[k]])],[85,89]);
     if(c.dailyTrace?.length){heading('Daily trace - closing storage');text(`${c.dailyTrace.length} daily rows. Full-precision CSV/JSON is available from structure detail.`,8);room(50);const max=Math.max(1,...c.dailyTrace.map(d=>d.closingStorageM3||0)),top=y;doc.setDrawColor(25,106,128);let px=18,py=top+35-(c.dailyTrace[0].closingStorageM3||0)/max*30;for(let i=1;i<c.dailyTrace.length;i++){const x=18+i/(c.dailyTrace.length-1)*174,v=top+35-(c.dailyTrace[i].closingStorageM3||0)/max*30;doc.line(px,py,x,v);px=x;py=v;}y+=41;text(`Scale: 0 to ${max} m3 | ${c.dailyTrace[0].date} to ${c.dailyTrace.at(-1).date}`,8);}
     text('Calculation QA: '+JSON.stringify(c.qa||{}),8);
    }else{rows(['Person-day source basis','Value'],Object.entries(r.sourceBasis||{}),[85,89]);}
    text('Formula IDs: '+(r.calculation.formulaIds||[]).join(', '),8);
    if(r.evidence?.length)rows(['Evidence requirement','Verified / pending','References'],r.evidence.map(e=>[e.name,`${e.verified?'Verified':'Not verified'} / ${e.pending?'Pending':'No pending'}`,(e.evidenceIds||[]).join(', ')]),[73,39,62]);
   }
   heading('Validation findings');rows(['Finding','Severity / scope','Record'],data.issues.map(i=>[i.message,i.severity+' / '+i.scopeEffect,i.entityId||'Workbook']),[80,58,36]);
  }
  heading('Run, scope and methodology');text('Run: '+data.metadata.runId,8);text('Generated: '+data.generatedAt,8);text('Source SHA-256: '+data.metadata.sourceWorkbookSha256,8);text('Active filters: '+JSON.stringify(data.metadata.filters),8);text('Result membership: '+data.metadata.includedResultIds.join(', '),7);rows(['Controlling method','Version'],Object.entries(data.audit.versionIds),[72,102]);text('This report is a presentation of prepared controlled results. The matching Standard Audit JSON retains the protected run manifest, events and hashes. DSC implementation context.',8);
  for(let page=first;page<=doc.getNumberOfPages();page++)pageScopes[page]=data.metadata.scope?.label||'Selected scope';
 }
 const n=doc.getNumberOfPages();for(let i=1;i<=n;i++){doc.setPage(i);doc.setDrawColor(25,106,128);doc.line(18,278,192,278);doc.setFont('HUFReport','normal');doc.setFontSize(7);doc.setTextColor(70,90,99);doc.text(clean('HUF Supply-Side | '+pageScopes[i]).slice(0,100),18,284);doc.text(`${i} / ${n}`,180,284);}
 doc.setProperties({title:reports[0].title,subject:'Prepared controlled KPI results',creator:'HUF Supply-Side KPI Calculator'});return doc;
}
