import { CONTROLLED_TEMPLATE } from '../../services/template-service.js';

function formatBytes(bytes){
  if(!Number.isFinite(bytes))return 'Unknown size';
  if(bytes<1024)return `${bytes} B`;
  if(bytes<1024*1024)return `${(bytes/1024).toFixed(1)} KB`;
  return `${(bytes/(1024*1024)).toFixed(2)} MB`;
}
function shortHash(value){return value?`${value.slice(0,12)}…${value.slice(-8)}`:'Not calculated';}
function setBusy(root,busy,label='Working…'){
  root.querySelectorAll('button,input').forEach(el=>{if(el.dataset.keepEnabled!=='true')el.disabled=busy;});
  const status=root.querySelector('[data-upload-status]');if(status&&busy)status.textContent=label;
}

export function mountHomeUpload({main,controller,templateManifest=null,pipelineMode='unavailable',onReview=null}={}){
  if(!main||!controller)throw new Error('Home Upload requires main and controller.');
  main.innerHTML=`
  <div class="upload-page" data-upload-root>
    <section class="page-heading">
      <div><span class="eyebrow">Upload your workbook</span><h1>Start a controlled KPI run</h1><p class="lead">Choose the HUF supply-side input workbook. Your workbook stays in this browser; no project data is uploaded to an application server.</p></div>
      <div class="privacy-chip" aria-label="Privacy status">Local browser processing</div>
    </section>

    <section class="upload-grid" aria-label="Workbook selection">
      <div class="card upload-card">
        <h2>Choose workbook</h2>
        <p class="muted">Supported format: controlled <strong>.xlsx</strong> workbook.</p>
        <label class="drop-zone" data-drop-zone tabindex="0">
          <input class="sr-only" data-file-input type="file" accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
          <span class="drop-icon" aria-hidden="true">⇧</span>
          <strong>Drag & drop an HUF workbook</strong>
          <span>or choose a file from this device</span>
          <span class="button secondary">Choose workbook</span>
        </label>
        <div class="upload-status muted" data-upload-status aria-live="polite">No workbook selected.</div>
      </div>

      <div class="card template-card">
        <div class="card-heading"><div><span class="eyebrow">Controlled template</span><h2>${templateManifest?.templateVersion||CONTROLLED_TEMPLATE.version}</h2></div><span class="status-pill neutral">Input only</span></div>
        <p>Use the blank controlled workbook for a new project. It contains the governed sheet/header structure and controlled lookup values, but no project data or KPI calculation formulas.</p>
        <a class="button secondary" data-template-link download="${CONTROLLED_TEMPLATE.filename}">Download blank template</a>
        <dl class="compact-meta"><div><dt>Template</dt><dd>${templateManifest?.templateVersion||CONTROLLED_TEMPLATE.version}</dd></div><div><dt>SHA-256</dt><dd class="mono">${shortHash(templateManifest?.sha256)}</dd></div></dl>
      </div>
    </section>

    <section class="card sample-card">
      <div class="card-heading"><div><span class="eyebrow">Validation samples</span><h2>Try synthetic sample data</h2></div><span class="status-pill warning">Synthetic</span></div>
      <p class="muted">These files are controlled validation fixtures and are never project reporting data.</p>
      <div class="sample-actions"><button class="button secondary" data-sample="leap">Load leap-year sample</button><button class="button secondary" data-sample="nonleap">Load non-leap sample</button></div>
    </section>

    <section class="card selected-card" data-selected-card hidden aria-live="polite">
      <div class="card-heading"><div><span class="eyebrow">Selected workbook</span><h2 data-selected-name></h2></div><span class="status-pill" data-selected-kind></span></div>
      <div class="selected-file-grid">
        <dl class="compact-meta"><div><dt>Size</dt><dd data-selected-size></dd></div><div><dt>SHA-256</dt><dd class="mono" data-selected-hash></dd></div><div><dt>Source</dt><dd data-selected-source></dd></div><div><dt>Runtime</dt><dd>${pipelineMode}</dd></div></dl>
        <div class="selected-actions"><button class="button secondary" data-clear>Clear workbook</button><button class="button primary" data-review>Review workbook</button></div>
      </div>
      <p class="synthetic-notice" data-synthetic hidden><strong>Synthetic validation data.</strong> This workbook is for testing only and must not be used as project reporting data.</p>
    </section>

    <section class="privacy-panel" aria-label="Workbook privacy">
      <strong>Privacy boundary</strong><span>Workbook content remains browser-local and is not placed in the URL. Only explicit downloads leave the current in-browser session.</span>
    </section>
  </div>`;

  const root=main.querySelector('[data-upload-root]');
  const input=root.querySelector('[data-file-input]');
  const drop=root.querySelector('[data-drop-zone]');
  const status=root.querySelector('[data-upload-status]');
  const selectedCard=root.querySelector('[data-selected-card]');
  const templateLink=root.querySelector('[data-template-link]');
  templateLink.href=CONTROLLED_TEMPLATE.url.href;

  async function choose(file,options={}){
    if(!file)return;
    setBusy(root,true,'Preparing selected workbook…');
    status.classList.remove('error-text');
    try{await controller.selectWorkbook(file,options);status.textContent='Workbook selected. Review its sheets and template compatibility next.';}
    catch(error){status.textContent=error.message;status.classList.add('error-text');}
    finally{setBusy(root,false);}
  }
  input.addEventListener('change',()=>choose(input.files?.[0]));
  drop.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();input.click();}});
  for(const name of ['dragenter','dragover'])drop.addEventListener(name,event=>{event.preventDefault();drop.classList.add('drag-active');});
  for(const name of ['dragleave','drop'])drop.addEventListener(name,event=>{event.preventDefault();drop.classList.remove('drag-active');});
  drop.addEventListener('drop',event=>choose(event.dataTransfer?.files?.[0]));
  root.querySelectorAll('[data-sample]').forEach(button=>button.addEventListener('click',async()=>{
    setBusy(root,true,'Loading controlled synthetic sample…');status.classList.remove('error-text');
    try{await controller.loadSample(button.dataset.sample);status.textContent='Synthetic sample selected. Review it to open workbook preflight.';}
    catch(error){status.textContent=error.message;status.classList.add('error-text');}
    finally{setBusy(root,false);}
  }));
  root.querySelector('[data-clear]').addEventListener('click',async()=>{setBusy(root,true,'Clearing workbook…');await controller.clearWorkbook();status.textContent='No workbook selected.';input.value='';setBusy(root,false);});
  root.querySelector('[data-review]').addEventListener('click',async()=>{setBusy(root,true,'Running protected workbook intake…');status.classList.remove('error-text');try{await controller.reviewSelectedWorkbook();status.textContent='Workbook preflight complete.';onReview?.();}catch(error){status.textContent=error.message;status.classList.add('error-text');}finally{setBusy(root,false);}});

  const unsubscribe=controller.subscribe(state=>{
    const source=state.source||{};const selected=Boolean(source.name);
    selectedCard.hidden=!selected;
    if(!selected)return;
    root.querySelector('[data-selected-name]').textContent=source.name;
    root.querySelector('[data-selected-size]').textContent=formatBytes(source.size);
    root.querySelector('[data-selected-hash]').textContent=shortHash(source.sha256);
    root.querySelector('[data-selected-source]').textContent=source.synthetic?'Controlled synthetic sample':'Local workbook';
    const kind=root.querySelector('[data-selected-kind]');kind.textContent=source.synthetic?'Synthetic validation data':'Selected';kind.className=`status-pill ${source.synthetic?'warning':'ready'}`;
    root.querySelector('[data-synthetic]').hidden=!source.synthetic;
  });
  return ()=>unsubscribe?.();
}
