import { ROUTES } from './routes.js';
import { createAppController } from './app-controller.js';
import { browserCapabilities } from '../adapters/browser-capabilities.js';
import { createPipelineClient } from '../pipeline/pipeline-client.js';
import { loadTemplateManifest } from '../services/template-service.js';
import { loadProductConfig,resolveSupportedTemplateVersion } from '../services/product-config-service.js';
import { mountHomeUpload } from '../ui/pages/home-upload.js';
import { mountWorkbookPreflight } from '../ui/pages/workbook-preflight.js';
import { mountMappingReview } from '../ui/pages/mapping-review.js';

const nav=document.querySelector('[data-nav]');const main=document.querySelector('main');
const navButtons=new Map();
for(const route of ROUTES){
  const item=document.createElement('button');item.type='button';item.className='nav-item';item.textContent=route.label;item.dataset.route=route.id;
  if(!['home','review'].includes(route.id)){item.disabled=true;item.setAttribute('aria-disabled','true');item.title='Available in a later governed implementation batch';}
  nav.append(item);navButtons.set(route.id,item);
}
const caps=browserCapabilities();
let pipelineClient=null;let pipelineError=null;
try{pipelineClient=await createPipelineClient();}catch(error){pipelineError=error;}
const mode=pipelineClient?.mode??'unavailable';
let templateManifest=null;let productConfig=null;let supportedTemplateVersion=null;let configError=null;
try{[templateManifest,productConfig]=await Promise.all([loadTemplateManifest(),loadProductConfig()]);supportedTemplateVersion=resolveSupportedTemplateVersion(productConfig,templateManifest);}catch(error){configError=error;}
if(configError&&!pipelineError)pipelineError=configError;
const controller=createAppController({adapter:supportedTemplateVersion?pipelineClient:null,supportedTemplateVersion});
let cleanup=null;
function activate(route){for(const [id,button] of navButtons){if(id===route)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');}}
function renderHome(){cleanup?.();controller.navigate('home');activate('home');cleanup=mountHomeUpload({main,controller,templateManifest,pipelineMode:mode,onReview:renderPreflight});main.focus();}
function renderPreflight(){cleanup?.();controller.navigate('review');activate('review');mountWorkbookPreflight({main,controller,onBack:renderHome,onContinue:renderMapping});cleanup=null;main.focus();}
async function renderMapping(){
  cleanup?.();controller.navigate('review');activate('review');main.innerHTML='<section class="card"><span class="eyebrow">IMP-7B-D · Mapping Review</span><h2>Building protected E02 mapping preview…</h2><p class="muted">The workbook is being mapped locally through the governed pipeline.</p></section>';
  try{cleanup=await mountMappingReview({main,controller,onBack:renderPreflight,onConfirmed:renderMappingConfirmed});}catch(error){main.innerHTML=`<section class="card"><span class="eyebrow">Mapping Review</span><h2>Mapping could not be opened</h2><p class="error-text">${String(error?.message||error)}</p><button class="button secondary" data-return-preflight>Return to Preflight</button></section>`;main.querySelector('[data-return-preflight]').addEventListener('click',renderPreflight);}main.focus();
}
function renderMappingConfirmed(mapping){
  controller.navigate('review');activate('review');main.innerHTML=`<div class="mapping-page"><section class="page-heading"><div><span class="eyebrow">IMP-7B-D · Mapping confirmed</span><h1>Mapping snapshot is frozen</h1><p class="lead">Protected E02 mapping confirmation is complete. Data Preparation remains the next governed implementation batch; this screen does not execute E03 yet.</p></div><span class="status-pill ready">Mapping confirmed</span></section><section class="card"><dl class="compact-meta"><div><dt>Status</dt><dd class="mono">${mapping?.status||'mapping_confirmed'}</dd></div><div><dt>Snapshot hash</dt><dd class="mono">${mapping?.snapshotHash||'Not available'}</dd></div></dl><div class="sample-actions" style="margin-top:16px"><button class="button secondary" data-review-mapping>Review mapping</button></div></section></div>`;main.querySelector('[data-review-mapping]').addEventListener('click',renderMapping);main.focus();
}
navButtons.get('home').addEventListener('click',renderHome);
navButtons.get('review').addEventListener('click',()=>{if(controller.getState().mapping?.snapshot)renderMapping();else if(controller.getState().source?.preflight)renderPreflight();});
const unsub=controller.subscribe(state=>{const review=navButtons.get('review');const enabled=Boolean(state.source?.preflight);review.disabled=!enabled;review.setAttribute('aria-disabled',String(!enabled));review.title=enabled?'Workbook Preflight':'Run workbook intake from Home / Upload first';});
renderHome();
const runtime=document.querySelector('[data-runtime-status]');if(runtime)runtime.textContent=`${mode}${pipelineError?` · ${pipelineError.message}`:''}`;
globalThis.__HUF_APP_PUBLIC__=Object.freeze({version:'0.1.5-mapping',phase:'IMP-7B-D',pipelineMode:supportedTemplateVersion?mode:'unavailable',workerAvailable:caps.worker,supportedTemplateVersion});
void unsub;
