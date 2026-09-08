let jsZipPromise=null;

export async function ensureLocalJsZip(){
  if(globalThis.JSZip)return globalThis.JSZip;
  jsZipPromise??=import('../vendor/jszip/jszip.min.js');
  await jsZipPromise;
  if(!globalThis.JSZip)throw new Error('Pinned local JSZip could not be initialized in the pipeline runtime.');
  return globalThis.JSZip;
}

export async function probePipelineRuntimeCapabilities(){
  let jszip=false;
  try{await ensureLocalJsZip();jszip=Boolean(globalThis.JSZip);}catch{jszip=false;}
  return Object.freeze({
    workerGlobal:typeof WorkerGlobalScope!=='undefined'&&globalThis instanceof WorkerGlobalScope,
    domParser:typeof DOMParser!=='undefined',
    jszip,
    fileApi:typeof File!=='undefined',
    crypto:Boolean(globalThis.crypto?.subtle),
    xlsxIntakeCompatible:jszip&&typeof DOMParser!=='undefined'&&typeof File!=='undefined'&&Boolean(globalThis.crypto?.subtle)
  });
}
