"""Build release deliverables from clean source and successful retained gates."""
from pathlib import Path
import hashlib,json,os,subprocess,sys,zipfile
root=Path(__file__).resolve().parents[1]
evidence=Path(sys.argv[1]).resolve();out=Path(sys.argv[2]).resolve();out.mkdir(parents=True,exist_ok=True)
version=json.loads((root/'config/product-config.json').read_text())['appVersion']
commit=os.environ['GITHUB_SHA'];run=os.environ['GITHUB_RUN_ID'];repo='knightfox789/HUF-KPI-acceptance-test'
assert os.environ.get('GITHUB_REPOSITORY')==repo

def one(name):
 matches=list(evidence.rglob(name));assert matches,f'Missing evidence: {name}'
 return [(p,json.loads(p.read_text())) for p in matches]
for name in ['phase7be-test-result.json','product-flow.json','report-contract.json','export-reconciliation.json','protected-regression.json','design6-remaining80.json','browser-capacity.json','phase7be-browser-acceptance.json','deployed-files.runtime.json']:
 for p,j in one(name):assert j['status']=='PASS',f'Gate failed: {p}'
logical=one('design6-logical.json')[0][1];assert logical['logicalTests']['pass']==154 and logical['physicalFixtures']['pass']==15
live=one('deployed-files.runtime.json')[0][1];assert live['commit']==commit and all(r['status']=='PASS' for r in live['files'])
assert len(one('phase7be-browser-acceptance.json'))==2,'Require staged and live browser evidence'
subprocess.run(['node','tests/foundation/release-manifest.mjs'],cwd=root,check=True)
source=out/f'HUF_KPI_{version}_Source.zip'
subprocess.run(['node','tools/build-source-package.mjs',str(source)],cwd=root,check=True)

def archive(target,entries):
 with zipfile.ZipFile(target,'w',zipfile.ZIP_DEFLATED) as z:
  for p,name in entries:z.write(p,name)
site=evidence/'huf-phase7be-curated-site';assert (site/'index.html').exists()
archive(out/f'HUF_KPI_{version}_Deployable_Site.zip',[(p,p.relative_to(site).as_posix()) for p in sorted(site.rglob('*')) if p.is_file()])
retained=[p for p in sorted(evidence.rglob('*')) if p.is_file() and site not in p.parents]
archive(out/f'HUF_KPI_{version}_Acceptance_Evidence.zip',[(p,p.relative_to(evidence).as_posix()) for p in retained])
vault=[(root/'docs/continuity/master-plan.md','Master_Plan.md')]+[(p,'Frozen_Designs/'+p.name) for p in sorted((root/'docs/baselines').glob('*.md'))]+[(p,p.name) for p in sorted((root/'docs/release').glob('*.md'))]
archive(out/f'HUF_KPI_{version}_Obsidian_Vault.zip',vault)
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
certificate={'schema':'HUF-CLEAN-RELEASE-CERTIFICATE-v1','version':version,'status':'PASS','sourceCommit':commit,'workflowRun':int(run),'workflowUrl':f'https://github.com/{repo}/actions/runs/{run}','liveUrl':live['url'],'methodologyChanged':False,'logicalTests':154,'physicalFixtures':15,'deployedFiles':len(live['files']),'qualification':json.loads((root/'tests/performance/budget.json').read_text()),'formalHufConfirmation':'Separate governance; not claimed by this software release','sourceSnapshotQualification':'Source status files describe the gated build. This certificate records completed operational gates. Historical failures in continuity documents remain explicitly historical.','artifacts':[{'name':p.name,'bytes':p.stat().st_size,'sha256':sha(p)} for p in sorted(out.glob('*.zip'))],'evidenceFiles':[{'path':p.relative_to(evidence).as_posix(),'sha256':sha(p)} for p in retained]}
(out/'RELEASE_CERTIFICATE.json').write_text(json.dumps(certificate,indent=2)+'\n')
(out/'SHA256SUMS.txt').write_text(''.join(f'{sha(p)}  {p.name}\n' for p in sorted(out.iterdir()) if p.is_file() and p.name!='SHA256SUMS.txt'))
print(json.dumps({'status':'PASS','output':str(out),'sourceCommit':commit,'files':[p.name for p in sorted(out.iterdir())]}))
