---
title: "HUF Supply-Side KPI Calculator — Master Audit, Recovery and Clean Rebuild Plan"
status: "active"
version: "0.56"
date: "2026-09-08"
purpose: "Standalone restart document in case the original ChatGPT conversation is unavailable."
---

> **Current checkpoint v0.55:** E7 closed. IMP-7C–G candidate implemented in the authorized repository. Candidate e42ed99834c614127eff3292166c832036be621b (tree cf680ed5373fb04f709631447c69b07ea39c8939), draft PR1. Fresh154/154 logical and15/15 physical checks PASS in CI34257867045; expanded browser79/79 PASS with zero console/page errors. Production performance workload/budget remains the one critical user decision; deployment and final release packaging have not been promoted. This current checkpoint governs over earlier historical “next step” entries.



# 0. Living Rebuild-Plan Governance — Mandatory From This Point Forward

## 0.1 Single source of project continuity

This Markdown file is the authoritative **living project record** for the HUF Supply-Side KPI Calculator recovery and rebuild.

From this point forward, every meaningful activity performed in the project must be documented here before that activity is considered complete.

This includes:

- historical or final-package audits;
- methodology findings;
- product decisions;
- requirement decisions;
- architecture decisions;
- UI/UX decisions;
- feature additions/removals;
- controlled-engine integration decisions;
- implementation batches;
- file/folder structure changes;
- dependency decisions;
- input-template decisions;
- validation/correction workflows;
- dashboard/filter/chart decisions;
- export/report decisions;
- test procedures and results;
- regression findings;
- bugs and fixes;
- release-candidate changes;
- browser/deployment acceptance;
- certification status;
- unresolved questions;
- user decisions and approvals;
- deviations from previously frozen plans;
- rollback/recovery instructions;
- release packaging and checksums.

## 0.2 Documentation-before-closure rule

A procedure is not considered finished until the rebuild plan records:

1. what was done;
2. why it was done;
3. evidence/source used;
4. files/components affected;
5. whether controlled methodology was affected;
6. result/status;
7. decisions made;
8. unresolved issues;
9. next step;
10. artifact/version/checksum where applicable.

For implementation work, the entry must additionally record:

- implementation batch;
- changed files;
- protected files deliberately not changed;
- tests run;
- pass/fail counts;
- regressions introduced/fixed;
- browser/deployment status where relevant.

## 0.3 Versioning rule

Do not overwrite the only copy of this plan.

After every meaningful project milestone:

- increment the plan version;
- preserve the previous version;
- create a new Markdown artifact;
- compute SHA-256;
- provide the new file in the conversation.

Example sequence:

`v0.22 → v0.23 → v0.24 ...`

When a major phase is formally frozen, create an explicit stable baseline such as:

- Product Requirements Baseline v1.0
- Architecture Baseline v1.0
- UI/UX Baseline v1.0
- Implementation Baseline v1.0
- Release Baseline v1.0

The living master plan continues even after individual baselines are frozen.

## 0.4 Procedure log format

Every future meaningful procedure should add or update an entry using this minimum structure:

### Procedure [ID] — [Name]

**Date:**  
**Phase:**  
**Status:** Planned / In Progress / Complete / Blocked  
**Purpose:**  
**Inputs / evidence:**  
**Actions performed:**  
**Findings / output:**  
**Controlled-methodology impact:** None / Reviewed / Versioned Change  
**Files affected:**  
**Tests / verification:**  
**Decision:**  
**Open issues:**  
**Next action:**  
**Artifacts / SHA-256:**  

The exact format may be expanded for complex procedures, but these fields must remain represented.

## 0.5 Decision register rule

Important user decisions must be recorded in this plan and not left only in chat history.

Each decision should include:

- Decision ID;
- date;
- question;
- options considered where relevant;
- selected decision;
- rationale;
- affected requirements/components;
- whether it changes a frozen baseline;
- follow-up action.

If a later decision supersedes it, preserve the old decision and mark it `SUPERSEDED`; do not silently delete historical reasoning.

## 0.6 Controlled-methodology protection in documentation

Every future product or implementation step must explicitly classify its effect as one of:

### GREEN — Product/presentation only
Examples:
- layout;
- labels;
- charts;
- filters over prepared results;
- report presentation;
- responsive behavior.

### AMBER — Workflow/state/data-handling
Examples:
- upload flow;
- mapping interaction;
- state/invalidation;
- export orchestration;
- template management;
- dependency/runtime behavior.

### RED — Controlled methodology
Examples:
- schema interpretation;
- canonicalization;
- validation rules;
- route logic;
- formulas;
- person-day logic;
- assurance;
- aggregation;
- audit semantics;
- frozen configs/goldens.

RED changes require:
- explicit user approval;
- a new controlled version;
- updated methodology documentation;
- updated goldens/fixtures;
- full regression;
- separate change record.

## 0.7 No undocumented coding rule

No production coding batch should begin without:
- a recorded objective;
- defined scope;
- protected-methodology boundary;
- expected files/modules;
- acceptance criteria.

No coding batch should be closed without:
- changed-file inventory;
- test evidence;
- result classification;
- master-plan update.

## 0.8 Recovery/restart requirement

This plan must remain sufficient for a new chat/session to answer:

- What has already been completed?
- What is frozen/protected?
- What changed most recently?
- What files are authoritative?
- What tests have passed/failed?
- What decisions are pending?
- What is the exact next procedure?
- What must not be modified?

The plan should therefore prefer explicit facts over assumptions or references such as “as discussed earlier.”

## 0.9 Current instruction from user

The user explicitly requested that **everything performed during the rebuild process continue to be documented in this rebuild-plan Markdown file and that the file be updated with every procedure carried out in this project.**

This instruction is now a permanent project-governance requirement unless the user later explicitly changes it.


# Procedure D6-CLOSE-001 — Design-6 Remaining 80 Scenario Certification Strategy

**Date:** 5 September 2026  
**Phase:** Pre-Rebuild Certification Closure  
**Status:** DECISION / STRATEGY FROZEN — EXECUTION NOT YET STARTED

## Purpose

Resolve the strict Design-6 certification gap before modifying the protected HUF calculation product.

The user identified that only 15 high-risk synthetic/negative physical XLSX variations had been supplied/executed while 80 of the 95 Design-4 rule-linked scenarios remained NOT VERIFIED.

This procedure verifies the cause and freezes the correct closure strategy.

## Inputs / evidence

Frozen Design-6 v1.0 contract:
- 154 logical tests total
- 95 Design-4 rule-linked cases
- 95 unique Scenario Builder IDs
- 15 physical high-risk XLSX fixtures
- 2 positive E2E workbooks
- 29 Design-2 formula cases
- 28 Design-5 output/audit assertions

Recorded implementation assessment:
- Design-4 rule-linked PASS: 15
- Design-4 rule-linked NOT VERIFIED: 80
- Design-4 FAIL: 0

The 15 passing Design-4 cases correspond exactly to the supplied high-risk physical XLSX fixtures.

The remaining 80 cases were recorded as:
`Scenario-builder mutation not implemented/executed`.

## Confirmed scenario execution-mode distribution

The frozen 95 Design-4 scenario builders are intentionally broader than physical Excel fixtures:

- 50 × `CANONICAL_NEGATIVE_MUTATION`
- 15 × `WORKBOOK_PHYSICAL`
- 14 × `POSITIVE_OR_ROUTE_ASSERTION`
- 10 × `CANONICAL_WARNING_MUTATION`
- 4 × `CALCULATION_STATE_INJECTION`
- 2 × `AGGREGATION_STATE_INJECTION`

Total:
**95**

Existing physical XLSX:
**15**

Remaining scenario-builder cases:
**80**

Therefore the certification gap is **not** that Design-6 expected 95 separate Excel workbooks.

The contract deliberately expected only 15 physical XLSX fixtures; the other 80 were to be generated/applied by the scenario-builder runner at the relevant pipeline stage.

## Decision

### Do not manually create 80 independent XLSX workbooks by default.

Instead:

1. preserve the existing 15 physical XLSX fixtures unchanged;
2. read the frozen Scenario Builder Registry and D4 Rule Cases;
3. generate/execute each of the remaining 80 variations according to its frozen execution mode and baseline;
4. use workbook mutation only where the frozen registry explicitly requires workbook-level mutation;
5. use canonical snapshot mutation for canonical negative/warning cases;
6. use controlled positive/route assertions for route/readiness cases;
7. use calculation-state injection only for rules owned at the calculation stage;
8. use aggregation-state injection only for aggregation QA cases;
9. compare actual results against the already-frozen expected assertions;
10. do not change expected outcomes merely to force PASS.

## Why this approach is preferred

Creating 80 full Excel files would:

- duplicate large amounts of unchanged workbook data;
- blur the intended distinction between workbook-level, canonical-level, calculation-level and aggregation-level tests;
- increase maintenance burden;
- make it harder to prove exactly which pipeline layer is being tested;
- diverge from the frozen Design-6 runner contract.

The frozen scenario-builder architecture already defines the cleaner and more auditable approach.

## Required next procedure

### D6-CLOSE-002 — Build the Remaining-80 Scenario Execution Inventory

Before writing any runner code:

Create one controlled inventory containing, for each of the 80 NOT VERIFIED cases:

- Case ID
- Rule ID
- Scenario Builder ID
- execution mode
- pipeline owner/stage
- baseline fixture/snapshot
- exact mutation
- expected rule result
- expected readiness/state
- expected scope-isolation effect
- expected downstream behavior
- numeric/null assertion where applicable
- cleanup/reset behavior
- current verification state

This inventory must be derived from the frozen Design-6 files, not reconstructed from memory.

## Planned execution groups

### Group A — Canonical negative mutations
**50 cases**

Expected approach:
- start from valid frozen canonical truth;
- mutate only the controlled field/state specified by the Scenario Builder;
- execute E04/downstream stages as required;
- assert blocker/readiness/scope behavior.

### Group B — Canonical warning mutations
**10 cases**

Expected approach:
- inject warning-only canonical condition;
- verify calculation continues where frozen contract permits;
- verify warning propagation and scope.

### Group C — Positive / route assertions
**14 cases**

Expected approach:
- use valid controlled inputs/state;
- exercise branch/route/readiness behavior;
- verify official route and downstream status without inventing invalid data.

### Group D — Calculation-state injections
**4 cases**

Expected approach:
- inject controlled calculation-state conditions exactly where the frozen runner contract specifies;
- verify calculation-QA suppression/reconciliation behavior;
- do not rewrite E06 formulas.

### Group E — Aggregation-state injections
**2 cases**

Expected approach:
- inject controlled aggregation corruption/state;
- verify `VAL-090` / `VAL-091` behavior and upstream immutability.

Existing Group F:
### Workbook physical
**15 cases — already PASS**

Keep unchanged as immutable high-risk end-to-end fixtures.

## Certification target

After the missing 80 are implemented/executed:

Design-4 rule-linked target:
- PASS: **95**
- FAIL: **0**
- NOT VERIFIED: **0**

Full frozen Design-6 logical target:
- E2E positive: 2/2 PASS
- Design-2 formula golden: 29/29 PASS
- Design-4 rule-linked: 95/95 PASS
- Design-5 output/audit: 28/28 PASS

Total:
**154/154 PASS**

Only after this target, plus required browser/deployment proof under the frozen gate, may the product be described as fully Design-6 certified.

## Controlled-methodology impact

**GREEN/AMBER TEST-INFRASTRUCTURE WORK ONLY**

Expected:
- no formula change;
- no route-policy change;
- no validation-rule change;
- no schema change;
- no assurance-policy change;
- no aggregation-policy change;
- no audit-policy change.

If a newly executed frozen scenario FAILS:

1. do not modify the expected test merely to obtain PASS;
2. investigate whether the problem is:
   - runner defect;
   - fixture/mutation defect;
   - implementation defect;
   - frozen-contract inconsistency;
3. document the finding;
4. only change protected methodology through an explicit RED governed change if genuinely required and approved.

## Files/components expected to remain protected

- E01–E09 engines
- Design-1 route registry
- Design-2 formula catalog
- Design-3 schema
- Design-4 validation rulebook
- E05 routing policy
- E07 assurance policy
- E08 aggregation policy
- E09 audit policy
- frozen Design-6 expected outcomes
- 15 physical high-risk fixtures

## Open issue

The exact 80-case inventory has not yet been extracted into a working certification register.

That is the next required action.

## Next action

**D6-CLOSE-002 — Extract and review the complete remaining-80 Scenario Builder Inventory before Product Requirements work begins.**

This certification closure is now inserted ahead of Phase 4 Product Requirements so that the future rebuild starts from a fully exercised protected methodology baseline wherever practicable.



# Procedure D6-CLOSE-002 / D6-CLOSE-003 — Build Master Scenario Workbook and Execute Remaining 80

**Date:** 5 September 2026  
**Phase:** Pre-Rebuild Certification Closure  
**Status:** PARTIALLY COMPLETE — 79/80 NEW PASS; VAL-027 OPEN

## Purpose

Build a single controlled synthetic test workbook containing the frozen 95 Design-4 rule-linked scenarios and execute the 80 scenario-builder cases that were previously NOT VERIFIED.

## Inputs / evidence

- `HUF_v1.1_Synthetic_All_Structures_Sample_Package.zip`
- leap positive golden workbook
- frozen non-leap positive golden workbook
- frozen Design-6 D4 Rule Cases v1.0
- frozen Design-6 Scenario Builder Registry v1.0
- frozen Design-6 Runner Contract v1.0
- protected HUF v1.0.0 E04–E08 engines/configs
- existing 15 frozen physical high-risk XLSX fixtures

## Actions performed

1. Retrieved and verified the exact synthetic all-structures package.
2. Preserved the original controlled input sheets and valid 20-structure baseline.
3. Added test-only sheets:
   - `12_D6_Scenarios`
   - `13_D6_Test_Results`
   - `14_D6_Mutation_Plan`
   - `15_D6_Summary`
4. Registered all 95 frozen Design-4 scenario cases in the workbook.
5. Marked the 15 physical XLSX fixtures separately from the 80 scenario-builder variations.
6. Constructed canonical test baselines from the frozen leap/non-leap workbooks using the controlled schema.
7. Verified that the protected E04→E08 pipeline reproduces the known positive golden portfolio.
8. Implemented an isolated remaining-80 scenario runner.
9. Executed all 80 previously NOT VERIFIED scenario-builder cases.
10. Corrected one runner-only baseline mistake for VAL-060 and reran.
11. Populated the tested workbook with the actual results.
12. Performed workbook integrity inspection and formula-error scan.

## Fresh execution result — remaining 80

- PASS: **79**
- FAIL / review: **1**
- NOT VERIFIED within the 80: **0**

Execution modes:

- CANONICAL_NEGATIVE_MUTATION: **49/50 PASS**
- CANONICAL_WARNING_MUTATION: **10/10 PASS**
- POSITIVE_OR_ROUTE_ASSERTION: **14/14 PASS**
- CALCULATION_STATE_INJECTION: **4/4 PASS**
- AGGREGATION_STATE_INJECTION: **2/2 PASS**

## Existing physical fixtures

The 15 frozen workbook-physical cases retain protected PASS evidence from the historical E04–E09 fixture suites.

They were **not freshly rerun in the current environment** because the protected Node XLSX harness requires:
- `jszip 3.10.1`
- `@xmldom/xmldom 0.9.8`

The final source package does not include installed `node_modules`, and those dependencies are unavailable to install offline in this environment.

This limitation is explicitly recorded rather than represented as a fresh PASS.

## Combined Design-4 evidence position

- Existing physical PASS evidence: **15/15**
- Newly executed scenario-builder PASS: **79/80**
- Combined PASS evidence: **94/95**
- Open: **VAL-027**

Do not claim 95/95 yet.

## VAL-060 correction

The first custom runner incorrectly tested for 29-Feb while using the frozen non-leap baseline.

The runner was corrected to verify:
- February dates use February evaporation;
- leap 29-Feb uses February evaporation;
- non-leap does not synthesize 29-Feb.

Final:
**VAL-060 PASS**

This was a test-runner correction only.

## Open finding — VAL-027

Frozen contract:
- `VAL-027 Timing alternatives mutually exclusive`
- expected SCOPED_ERROR
- expected RECORD_BLOCK
- expected not_ready

Protected E04 implementation:
- resolves exactly one timing value using `STR-019 || CTL-009`;
- valid resolved values are `Strict cutoff` or `Actual functional date - partial season`;
- contains no code path that emits `VAL-027`;
- an invalid combined value is caught by `VAL-011`.

Protected E05 also consumes one resolved timing value and rejects other strings as unresolved timing.

Current classification:

**FROZEN TEST-CONTRACT / IMPLEMENTATION MISMATCH — CONTROLLED REVIEW REQUIRED**

The negative condition described by VAL-027 is not naturally representable under the current override/default model.

### Recommended resolution

Prefer treating VAL-027 as a **positive invariant assertion that one and only one resolved timing method exists** rather than modifying protected E04 merely to manufacture a negative issue state.

Any change to frozen rule/test semantics requires an explicit documented decision before certification closure.

## Controlled-methodology impact

**GREEN/AMBER TEST-INFRASTRUCTURE ONLY**

Protected methodology changed:
**NO**

No E01–E09 engine or controlled methodology config was modified.

## Workbook verification

- 95 scenario rows present
- 15 protected physical-fixture cases identified
- 80 new scenario-builder cases identified
- execution results populated
- summary sheet populated
- formula-error scan: **0 matches**

## Artifacts

- `HUF_v1.1_Synthetic_All_Structures_95_Scenario_Master_TESTED.xlsx`
  - SHA-256 `17a702737d470c40119b8a4b3e90f61f5363661ec5f467723ea7e879da492855`
- `HUF_D6_Remaining80_Execution_Results.json`
  - SHA-256 `aee6ed51e430d32787bcef7cccd982b2999c854d5b836ad6f58a00aea58afd79`
- `HUF_D6_Remaining80_Run.log`
  - SHA-256 `78ffc84f97329ab1f792edb049f1e0c8542ef069b2ce838bf6471b6dc69e4750`
- `HUF_D6_95_Scenario_Test_Report_v1.0.md`
  - SHA-256 `e469ca00e29ec05cadf4645e15c3221771e5390cb80c4aa2ef9270ed8e30b022`

## Open issue

`VAL-027` must be resolved under controlled test governance before 95/95 Design-4 rule-linked certification can be claimed.

## Next action

**D6-CLOSE-004 — Decide and freeze the VAL-027 contract resolution.**

Product Requirements remain queued until the user decides whether to close this certification issue first or carry it explicitly as an open controlled issue.



# Procedure D6-CLOSE-004 / D6-CLOSE-005 — VAL-027 Positive-Invariant Decision and Logical Suite Closure

**Date:** 5 September 2026  
**Phase:** Pre-Rebuild Certification Closure  
**Status:** COMPLETE — DESIGN-4 95/95 LOGICAL PASS EVIDENCE

## User decision

The user explicitly selected:

**Positive invariant approach**

for `VAL-027 — Timing alternatives mutually exclusive`.

Decision ID:

`D6-DEC-VAL027-001`

## Controlled resolution

A versioned test-governance addendum was created:

`HUF-D6-VAL027-POSITIVE-INVARIANT-v1.1`

The original frozen v1.0 negative scenario is preserved historically and superseded only for VAL-027 test execution.

No production methodology or protected engine was changed.

## Effective VAL-027 invariant

For each structure/run:

**Exactly one resolved timing method is active.**

Resolution:

- structure timing override, if present, supersedes project default;
- otherwise project default applies;
- resolved method must be controlled;
- dual active timing state must not reach E05.

## Verification

Golden baseline structures checked:
**20**

Explicit timing override:
**1**

Default timing used:
**19**

Invariant result:
**20/20 PASS**

VAL-027:
**PASS under v1.1 positive-invariant semantics**

## Updated remaining-80 result

- PASS: **80/80**
- FAIL: **0**
- NOT VERIFIED: **0**

## Updated Design-4 result

- Existing physical fixture PASS evidence: **15/15**
- Scenario-builder PASS: **80/80**
- Combined Design-4 rule-linked: **95/95 PASS evidence**

## Updated logical Design-6 result

- E2E: **2/2**
- Design-2 formula: **29/29**
- Design-4 rule-linked: **95/95**
- Design-5 output/audit: **28/28**

Total logical suite:

**154/154 PASS evidence**

## Certification boundary

This closes the former 80-case logical verification gap.

Do **not yet** label the overall product “fully Design-6 certified” solely from this procedure.

Remaining closure:
- consolidate browser execution evidence;
- consolidate deployed GitHub Pages acceptance evidence;
- decide whether historical 15/15 physical fixture re-execution evidence is sufficient or whether a fresh dependency-complete rerun is required.

## Controlled-methodology impact

**AMBER — versioned test-governance change only**

Production methodology changed:
**NO**

E01–E09 changed:
**NO**

Validation rulebook changed:
**NO**

Formula/route/assurance/aggregation/audit policy changed:
**NO**

## Artifacts

- `HUF_Design6_VAL027_Positive_Invariant_Addendum_v1.1.json`
  - SHA-256 `088b67a63a19e94b1017f187483fb6e967b0e8b28279836f797ae019cc923c69`
- `HUF_D6_Remaining80_Execution_Results_v1.1.json`
  - SHA-256 `3e3333d807ad76a6539a57f87a264bde0086ef8dbdf34701321539b3c41cc0e6`
- `HUF_v1.1_Synthetic_All_Structures_95_Scenario_Master_CERTIFIED_LOGICAL_v1.1.xlsx`
  - SHA-256 `fcbfd405b5998acdf329146ec0254bc880aa88d1b263e226d62c38cff3338787`
- `HUF_D6_95_Scenario_Test_Report_v1.1.md`
  - SHA-256 `390a9dd516652aa2cfece703c42430179af0c9223e6ed5aae8ee1c1e1fe6e93f`

## Next action

**Phase 4 / PRD-001 — Product Requirements Specification initiation and scope freeze.**

Product Requirements remain queued until this final certification/evidence closure is completed or explicitly deferred by the user.



# Procedure D6-CLOSE-006 — Full Design-6 Evidence Consolidation and Release-Gate Assessment

**Date:** 5 September 2026  
**Phase:** Pre-Rebuild Certification Closure  
**Status:** COMPLETE — GO TO PRODUCT REQUIREMENTS

## Purpose

Consolidate the complete Design-6 logical, physical-fixture, browser and deployment evidence after closure of the former 80-case gap.

## Logical certification result

- E2E positive: **2/2 PASS**
- Design-2 formula golden: **29/29 PASS**
- Design-4 rule-linked: **95/95 PASS**
- Design-5 output/audit: **28/28 PASS**

Total:

**154/154 logical PASS**

FAIL:
**0**

NOT VERIFIED:
**0**

## Physical fixture evidence

- frozen high-risk XLSX fixtures: **15**
- fresh fixture SHA-256 integrity: **15/15 PASS**
- protected E04–E09 packaged fixture-result evidence: PASS
- E06/E07/E08/E09 packaged fixture suites explicitly record 15 cases / 0 failures

Fresh Node behavioral rerun was not possible because the source ZIP does not include installed `jszip` / `@xmldom` dependencies and the current environment cannot install them offline.

Classification:

**PASS evidence with historical protected execution + fresh fixture integrity**

## Fresh static architecture

Final v1.0.0 static architecture was rerun:

**PASS**

Evidence:
`HUF_D6_Static_Architecture_Fresh_Result.json`

## Fresh browser acceptance attempt

The packaged Playwright runner was executed against the final v1.0.0 package.

All local navigation attempts were blocked by:

`ERR_BLOCKED_BY_ADMINISTRATOR`

Result classification:

**ENVIRONMENT_BLOCKED — NOT APPLICATION FAIL**

This reproduces the historical environment limitation.

## rc.3 operational acceptance evidence

Final release records:
- GitHub validation workflow green;
- browser regression green;
- GitHub Pages deployment successful;
- live workflow exercised through Results.

Final release manifest classifies these as:
- browser: `PASS_REPORTED_ON_RC3`
- Pages: `PASS_REPORTED_ON_RC3`
- live workflow: `PASS_REPORTED_ON_RC3`

## Evidence-retention finding

Raw GitHub Actions browser-run artifact and raw GitHub Pages deployment/live-test artifact are not embedded in the reviewed rc.3/final packages.

Therefore Gate 07/08 are retained as:

**operational PASS reported, external raw artifact not embedded**

This is an evidence-retention qualification, not a methodology blocker.

## Gate status

- GATE-01: PASS
- GATE-02: PASS — 95/95
- GATE-03: PASS — 2/2
- GATE-04: PASS evidence — 15/15
- GATE-05: PASS — 29/29
- GATE-06: PASS — 28/28
- GATE-07: PASS reported on rc.3; fresh local environment blocked; raw CI artifact not embedded
- GATE-08: PASS reported on rc.3/live Results workflow; raw deployment artifact not embedded

## Frozen classification

**DESIGN6_LOGICAL_CERTIFIED_OPERATIONAL_BROWSER_PAGES_PASS_REPORTED_WITH_EVIDENCE_RETENTION_QUALIFICATION**

## Rebuild decision

**GO TO PHASE 4 — PRODUCT REQUIREMENTS / PRODUCT SPECIFICATION**

There is no remaining Design-6 methodology blocker to beginning product design.

## Mandatory future-release improvement

The rebuilt release must archive machine-readable CI/browser/deployment/live-acceptance evidence inside the release evidence package.

## Controlled-methodology impact

**NONE**

## Artifacts

- `HUF_Design6_Certification_Baseline_v1.0.md`
  - SHA-256 `385a7b0da320929ee5e94dc81c0d8a963647a39bbeaac9a24e67fd2000d34ac3`
- `HUF_Design6_Certification_Evidence_Manifest_v1.0.json`
  - SHA-256 `9052abc4f2ff5138f461323d5776a583e60c836e8641bc1ad11ec62e530b8028`
- `HUF_D6_Browser_Acceptance_Fresh_Result.json`
  - SHA-256 `9df5154d6544e05fe002771af277bf7d1329cf678aaae8386692a60ddbe940a8`
- `HUF_D6_Static_Architecture_Fresh_Result.json`
  - SHA-256 `bfdbc8faabea8b2aab46c6c8bdb8e6795c27e56c04d90563bdd9d12170e9e79a`

## Next action

**Phase 4 / PRD-001 — Product Requirements Specification initiation and scope freeze.**

The PRD must continue to protect E01–E09 and the frozen Design-6 certification baseline.



# Procedure GOV-CONT-001 — Chat-Loss Recovery and Library Continuity Protocol

**Date:** 5 September 2026  
**Phase:** Project Governance / Continuity  
**Status:** ACTIVE — PERMANENT PROJECT RULE

## User continuity requirement

The user explicitly stated that two continuity mechanisms are important:

1. continuous documentation in the living Master Audit / Recovery / Clean Rebuild Plan; and
2. preservation of important project artifacts so they can be retrieved from ChatGPT Library in a future chat.

The purpose is to ensure that loss of the current chat does not cause loss of project state, decisions, evidence, or the restart point.

## Continuity principle

**Chat history is not the authoritative project record.**

The durable restart system is:

**Latest Master Rebuild Plan + retrievable project artifacts + checksums + explicit next action**

The Master Rebuild Plan must remain sufficient to reconstruct the project state even in a new conversation with no access to the current chat transcript.

## Mandatory milestone procedure

After every meaningful project procedure or milestone:

1. update the Master Rebuild Plan;
2. increment its version;
3. preserve the previous version;
4. record exact artifact filenames;
5. record SHA-256 checksums for important frozen/generated artifacts;
6. record current status and unresolved issues;
7. record the exact next planned procedure;
8. keep important supporting artifacts available for future Library retrieval where the product/runtime permits;
9. never rely on chat-only decisions for critical project state.

## Artifact classes for continuity

### Tier 1 — Mandatory restart artifacts

These must always be named and tracked in the Master Rebuild Plan:

- latest Master Audit / Recovery / Clean Rebuild Plan;
- protected final HUF release identity/checksum;
- frozen methodology/design baselines;
- frozen Design-6 certification baseline;
- current controlled synthetic/golden test package;
- current Product Requirements baseline once created;
- current Technical Architecture baseline once created;
- current UI/UX baseline once created;
- latest implementation/release package once coding begins;
- final regression/UAT/certification evidence;
- release manifest/checksum/change guide.

### Tier 2 — Important supporting evidence

Track when relevant:

- test reports;
- scenario execution JSON;
- browser/static acceptance results;
- gap/recovery matrices;
- export/report specifications;
- schema/config comparisons;
- release-candidate evidence needed to explain a final decision.

### Tier 3 — Disposable/intermediate material

Temporary extraction folders, duplicated archives, scratch outputs and superseded non-authoritative working files do not need to be treated as restart-critical unless they contain unique evidence.

## New-chat recovery procedure

If this conversation is lost, the recovery sequence is:

1. locate the newest file matching:
   `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v*.md`
2. select the highest authoritative version;
3. verify its recorded SHA-256 where available;
4. read:
   - Current project state
   - Frozen/protected items
   - Latest completed procedure
   - Open issues
   - Next action
   - Artifact register
5. retrieve only the specific Library artifacts referenced by that plan and needed for the next procedure;
6. verify retrieved artifacts against their recorded checksums;
7. continue from the exact recorded next action;
8. do not repeat historical archaeology unless the plan identifies an unresolved evidence issue.

## Naming discipline

Important artifacts should use stable, descriptive names with explicit versions.

Examples:

- `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.27.md`
- `HUF_Design6_Certification_Baseline_v1.0.md`
- `HUF_KPI_Product_Requirements_Specification_v1.0.md`
- `HUF_KPI_Technical_Architecture_v1.0.md`
- `HUF_KPI_UI_UX_Specification_v1.0.md`

Do not use ambiguous final names such as:
- `final2`
- `latest`
- `new`
- `updated-final`

unless they are historical source filenames that must be preserved exactly.

## Superseded files

Superseded artifacts are not silently deleted from the historical record.

The Master Plan must identify:
- current authoritative artifact;
- previous/superseded artifact where relevant;
- reason for supersession.

## Checksum rule

For any frozen baseline, certification artifact, release package or other restart-critical file, record SHA-256.

A matching filename without a matching checksum is not sufficient proof of identity when exact provenance matters.

## Library retrieval rule

When a future task requires a prior artifact that is not attached in the current conversation:

- search ChatGPT Library first;
- retrieve the exact named/versioned artifact;
- verify identity/checksum;
- do not ask the user to upload it again before attempting Library retrieval;
- do not substitute a similarly named older/newer file.

## Current authoritative restart point

Latest living plan: HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.53.md

Authoritative reconciliation: IMP-7B-E7-R1, 2026-09-08. This block and the final R1 procedure supersede historical restart/status statements.

E7: COMPLETE / PASS. Full IMP-7B: CLOSED / FROZEN.

Sole authorized repository: knightfox789/HUF-KPI-acceptance-test. Existing user authorization remains valid. All other repositories remain out of scope; the former production repository is deleted/retired.

Frozen main SHA: fe54aa2dd80262a63788e09d236e53da782806b6
Canonical tree: 1cf274647cacdf84d60fe39c19c37b109afa7c32
Existing imp-7c-a-data-preparation branch: same SHA/tree at verification; no implementation divergence.

Main validation run 34234697249: 28/28 validation suites and 22/22 real-XLSX browser checks PASS.
Pages run 34234976076: validation, 22/22 browser checks and deployment PASS on the same SHA.
Live URL: https://knightfox789.github.io/HUF-KPI-acceptance-test/
Fresh live verification: 5/5 key file SHA-256 values match baseline release manifest.

Protected E01–E09: unchanged; no controlled-methodology change authorized.
Historical Design-6 logical evidence: 154/154 PASS; not rerun here. Phase-8 comprehensive acceptance is still later.

Current next procedure: IMP-7C-A — Data Preparation Summary / Protected E03 Integration. Unblocked, implementation not performed in this reconciliation. Document scope and acceptance criteria before coding; reuse existing branch after current-base inspection. Validation & Correction remains a later batch.

Evidence: HUF_KPI_IMP7BE7_Reconciliation_Evidence_v1.0.zip and HUF_KPI_IMP7BE7_Closure_Report_v1.0.md. Original GitHub artifact ZIP downloads were unavailable (HTTP 403); directly fetched full CI logs and extracted validation results are retained instead. See R1 for exact evidence limits.

## Governance effect

This continuity protocol is permanent unless explicitly changed by the user.




# Procedure PRD-001 — Product Requirements Specification and Scope Freeze

**Date:** 6 September 2026  
**Governed Phase:** Phase 4 — Product Requirements  
**Status:** COMPLETE / FROZEN v1.0

## Purpose

Convert the frozen historical audit, product gap matrix and Design-6 certification baseline into a formal Product Requirements Specification before any rebuild coding begins.

## Inputs / evidence

- `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.27.md`
- `HUF_KPI_Consolidated_Gap_Recovery_Productization_Matrix_v1.0.md`
- `HUF_KPI_Final_v1.0.0_Deep_Audit_and_VWB_Product_Comparison_v1.0.md`
- `HUF_KPI_Historical_Audit_Baseline_v1.0.md`
- `HUF_Design6_Certification_Baseline_v1.0.md`
- protected HUF v1.0.0 / E01–E09 methodology baseline
- frozen VAL-027 positive-invariant addendum

## Phase-numbering governance decision

The older planning section of this master document labelled Product Requirements as Phase 5.

Following completion of the certification-closure work, the current governed sequence is now:

- **Phase 4 — Product Requirements**
- **Phase 5 — Technical Architecture**
- **Phase 6 — Original HUF UI/UX**
- **Phase 7 — Controlled Implementation**
- **Phase 8 — Regression / Acceptance**
- **Phase 9 — Clean Release**

This current governed sequence supersedes the older phase-number labels for all future work. Historical text is retained for audit continuity.

## Product workflow frozen

**Upload → Workbook Preflight → Mapping Review → Data Preparation → Validation & Correction → Calculate → Results → Geography / Structure Analysis → Assurance & Evidence → Reports & Exports → Audit & Methodology**

The user-facing product is task-oriented.

The internal E01–E09 pipeline remains protected behind this workflow.

## Primary navigation frozen

1. Home / Upload
2. Review & Correct
3. Results
4. Structures
5. Assurance & Evidence
6. Reports & Exports
7. Audit & Methodology

Raw engine-strip navigation is not to be restored as the normal product interface.

## Product-user groups frozen

- Programme / Project Manager
- Technical / Soil & Water Engineer
- M&E / MIS / Data Manager
- Evidence / Assurance Reviewer
- Auditor / Methodology Reviewer

The initial rebuild remains a no-login static application; one person may perform multiple roles.

## Requirement inventory

Total frozen requirements:

**154**

Priority distribution:

- P0 / MUST: **134**
- P1 / SHOULD: **15**
- P2 / LATER: **5**

Requirement groups:

- Core governance
- Input/template/preflight
- Mapping
- Data preparation
- Validation & Correction
- Routing/calculation
- Results dashboard
- Geography Explorer
- Structure Intelligence
- Assurance & Evidence
- Exports
- PDF Report Centre
- Audit/methodology/help
- Template/version management
- Privacy/security
- Non-functional/deployment
- Acceptance/release
- Explicit future scope

## Major P0 product commitments

### Intake / correction
- controlled XLSX upload;
- active blank HUF-SS-INPUT template;
- sample golden workbooks;
- concise workbook preflight;
- exception-first mapping;
- plain-language Data Preparation;
- dedicated Validation & Correction Centre;
- scoped blocking/readiness.

### Results / analysis
- executive HUF results dashboard;
- governed geography drill-down;
- structure register and detail;
- route/timing explanation;
- structure calculation explanation;
- WTR-111 daily trace;
- assurance distribution;
- Evidence Review Centre;
- display-unit selection.

### Reporting
- Compact Result CSV/XLSX;
- Management/Reporting Summary XLSX;
- Technical/M&E XLSX;
- Daily Trace CSV/JSON;
- Standard Audit JSON;
- Project, District, Village and Structure PDFs;
- management versus technical reporting modes.

### Audit / release
- Run Summary;
- Audit & Methodology area;
- E01→E09 event/provenance lineage;
- privacy-reduced audit;
- 154/154 Design-6 logical acceptance;
- fresh 15/15 physical-fixture execution in release environment;
- retained browser/Pages/live-deployment machine-readable evidence.

## Frozen assurance terminology

Public accepted bucket:

**Accepted under controlled methodology**

Calculated Total:

**accepted + provisional + warning**

Do not use:

**Certified Total**

Formal HUF confirmation remains separate from controlled assurance.

## Frozen geography hierarchy

**Structure → Village → GP → Block → District → PIA → Project**

No VWB cluster hierarchy is to be imported.

## Frozen visual/reporting principle

Charts, exports and reports consume prepared E06–E09 / Design-5 truth.

They do not:
- reroute;
- resimulate;
- recalculate official KPI formulas;
- reinterpret assurance;
- replace null/HOLD/excluded with zero.

## VWB boundary retained

Allowed:
- product architecture inspiration;
- visual/reporting grammar patterns;
- prepared-view/service separation patterns.

Prohibited:
- VWB formulas;
- Water Security Index;
- Kobo schema;
- VWB cluster hierarchy;
- runtime-CDN dependency pattern for controlled core;
- production debug globals.

## Acceptance boundary

The clean rebuilt release cannot be accepted until all P0 acceptance requirements pass, including:

- E01–E09 protected regressions;
- 154/154 Design-6 logical tests;
- fresh 15/15 physical XLSX fixture execution;
- leap/non-leap goldens;
- dashboard reconciliation;
- export reconciliation;
- PDF reconciliation;
- privacy acceptance;
- browser UAT;
- deployed GitHub Pages acceptance;
- release evidence retention;
- release-manifest/hash integrity;
- final methodology drift check.

## Controlled-methodology impact

**GREEN — PRODUCT REQUIREMENTS ONLY**

E01–E09 changed:
**NO**

Controlled configs changed:
**NO**

Design-6 controlled logical truth changed:
**NO**

## Frozen PRD artifacts

1. `HUF_KPI_Product_Requirements_Specification_v1.0.md`
   - Requirements: **154**
   - SHA-256: `8f8569572845070d0757b90a53ec4c5e889ff26e0480c28c35e808434b726662`

2. `HUF_KPI_PRD_Traceability_Matrix_v1.0.md`
   - SHA-256: `1ea65b90d20279c756d40c2944fc6ecc11ee82093013c48e084a578d77c501aa`

## PRD freeze decision

**APPROVED AS THE WORKING PRODUCT BASELINE FOR THE NEXT ARCHITECTURE PHASE**

Any later P0 removal or controlled-meaning change must be explicitly documented.

P1 deferral requires a decision record.

P2 items are outside the initial release unless explicitly promoted.

## Next action

**Phase 5 / ARCH-001 — Technical Architecture Freeze and protected-core integration design**

The architecture phase must define:
- repository/module boundaries;
- protected E01–E09 integration;
- application state and invalidation graph;
- prepared product/view-model layer;
- dashboard/geography/structure services;
- export/report architecture;
- local dependency/vendor strategy;
- browser/privacy architecture;
- test/evidence architecture;
- static deployment/release structure.

**No production rebuild coding begins before Architecture v1.0 is frozen.**



# Procedure ARCH-001 — Technical Architecture Freeze and Protected-Core Integration Design

**Date:** 6 September 2026  
**Governed Phase:** Phase 5 — Technical Architecture  
**Status:** COMPLETE / FROZEN v1.0

## Purpose

Define the clean rebuild architecture around the protected E01–E09 methodology before any production coding begins.

The architecture translates all frozen PRD v1.0 requirements into module ownership, runtime boundaries, state/invalidation rules, prepared-result services, output services, testing and release-evidence architecture.

## Inputs

- `HUF_KPI_Product_Requirements_Specification_v1.0.md`
- `HUF_KPI_PRD_Traceability_Matrix_v1.0.md`
- protected HUF v1.0.0 E01–E09 baseline
- frozen Design-6 Certification Baseline v1.0
- frozen Gap/Recovery/Productization Matrix
- living Master Rebuild Plan v0.28

PRD requirements mapped:

**154/154**

## Architecture freeze decisions

### 1. Static browser/no-backend runtime

The calculator remains:
- static;
- GitHub Pages compatible;
- browser-local;
- no application database;
- no server-side workbook upload;
- no server-side KPI calculation.

### 2. Protected-core isolation

Audited E01–E09 engines and controlled configs live behind a dedicated `protected-core/` boundary.

Normal UI/product modules may not import individual protected engines directly.

Allowed path:

**UI / Product Service → Application Controller → Pipeline Orchestrator → Pipeline Adapter → Protected E01–E09**

### 3. Protected-core manifest

The rebuild shall include a machine-readable protected-core manifest with:
- path;
- controlled version;
- SHA-256;
- methodology classification;
- expected protected hash.

Ordinary product coding does not modify this core.

### 4. Single pipeline orchestrator

A single pipeline orchestrator controls:
- protected engine order;
- prerequisites;
- progress;
- immutable snapshots;
- invalidation;
- run finalization.

It contains no formulas or route logic.

### 5. Immutable stage snapshots

E01–E09 results remain immutable snapshots with controlled lineage/hashes.

Completed E09 runs are immutable.

Upstream correction creates a new draft lineage rather than mutating a completed run.

### 6. Original workbook preservation

Uploaded source workbook bytes remain immutable.

Product corrections use an auditable in-memory correction overlay.

The app never silently modifies original source values.

### 7. Dependency-based invalidation

Frozen behavior:

- workbook replacement → E01–E09 invalidated;
- mapping change → E03–E09 invalidated;
- source correction → dependency-defined affected stage through E09;
- validation/eligibility evidence change → E04–E09;
- genuinely assurance-only evidence verification → E07–E09 when safe;
- dashboard/chart/geography/display-unit filter → **no E01–E09 invalidation**.

Stale results are never presented as current.

### 8. Worker calculation boundary

The preferred implementation runs workbook/pipeline processing in a dedicated Web Worker.

A tested same-thread fallback may exist but must invoke the same pipeline API.

Purpose:
- responsive UI;
- clearer controlled execution boundary;
- no DOM dependence in methodology logic.

### 9. Prepared product/view-model layer

The product consumes controlled snapshots through dedicated prepared view models:

- Run Summary
- Dashboard
- Geography
- Structure
- Validation
- Assurance
- Audit
- Report

View models may group/filter/format/convert display units.

They may not:
- reroute;
- execute HUF formulas;
- alter assurance precedence;
- convert null/HOLD/excluded to zero.

### 10. Geography hierarchy

Frozen hierarchy:

**Structure → Village → GP → Block → District → PIA → Project**

UI may navigate Project → District → Block → GP → Village → Structure, with PIA as filter/context.

No VWB cluster hierarchy.

### 11. Structure Intelligence

Structure detail architecture includes:
- identity/geography;
- validation/readiness;
- route/timing;
- protected calculation explanation;
- E06 daily trace;
- assurance/evidence;
- person-day detail;
- technical export/report.

Daily trace charts visualize E06 truth and do not resimulate it.

### 12. Assurance/evidence

E07 remains authoritative.

Formal HUF confirmation is separate from controlled assurance.

Evidence-only refresh may start at E07 only where it cannot affect validation, eligibility, routing or numeric calculation.

### 13. Display units

Unit selection is presentation-only.

Canonical/result units remain controlled.

Null remains null.

### 14. Exports

Structured export architecture:

**Prepared Result → Export Request → Export Model → CSV/XLSX/JSON/ZIP adapter**

P0:
- Compact Result CSV/XLSX
- Management XLSX
- Technical/M&E XLSX
- Daily Trace CSV/JSON
- Standard Audit JSON

### 15. PDF/reporting

Structured report architecture:

**Prepared Result → Report Query → Report View Model → Layout Components → Text/Vector PDF Renderer**

No screenshot/DOM-capture reporting.

Dashboard, XLSX and PDF share prepared view-model definitions.

### 16. Dependency/vendor strategy

Controlled-path third-party libraries are:
- locally shipped/vendored;
- version-pinned;
- integrity-recorded;
- license-recorded;
- accessed only through adapters.

Runtime CDN fetching is prohibited for controlled calculation/export/report dependencies.

### 17. Privacy

- workbook/project data remains browser-local;
- no project data in URL;
- no core third-party data transmission;
- no production debug global exposing project state;
- E09 audit privacy remains protected.

### 18. Test architecture

Frozen layers:

A. E01–E09 protected regression  
B. Design-6 logical 154/154  
C. physical XLSX fixtures 15/15  
D. state/invalidation  
E. prepared-view reconciliation  
F. export reconciliation  
G. PDF reconciliation  
H. browser UAT  
I. deployed GitHub Pages UAT

### 19. Release-evidence architecture

Future rebuilt release must contain machine-readable:
- release manifest/hash;
- protected-core manifest;
- methodology version manifest;
- Design-6 logical result;
- physical fixture result;
- static architecture result;
- browser acceptance;
- Pages deployment acceptance;
- live workflow acceptance;
- export/PDF reconciliation;
- privacy result;
- evidence manifest.

This directly fixes the historical release-evidence retention gap.

### 20. GitHub Actions architecture

Validation workflow must block promotion unless required P0 gates pass.

Pages deployment occurs only from the validated static payload and is followed by deployed acceptance.

## Architecture Decision Records frozen

18 ADRs were frozen covering:

- static/no-backend architecture;
- protected-core isolation;
- single pipeline orchestrator;
- immutable snapshots;
- correction overlay;
- dependency-based invalidation;
- Worker boundary;
- prepared view-model layer;
- governed geography;
- shared screen/export/report truth;
- structured PDF;
- local pinned dependencies;
- no production debug global;
- separate certification/status concepts;
- first-class release evidence;
- no engine-strip UI;
- presentation-only display units;
- completed-run immutability.

## Repository/module architecture

Frozen component families:

- `protected-core/`
- `pipeline/`
- `state/`
- `adapters/`
- `views/`
- `services/`
- `reports/`
- `exports/`
- `ui/`
- `vendor/`
- `samples/`
- `tests/`
- `docs/`
- `.github/workflows/`

Exact filenames may only vary if responsibility remains equivalent and the change is documented in this living plan.

## Controlled-methodology impact

**NONE**

Classification:

**AMBER integration/product architecture around a RED protected methodology core**

E01–E09 changed:
**NO**

Controlled configs changed:
**NO**

Formulas/routing/assurance/aggregation/audit semantics changed:
**NO**

## Frozen architecture artifacts

1. `HUF_KPI_Technical_Architecture_v1.0.md`
   - SHA-256: `0684a25d425a1b80216818dc729cedf686d16cb1de5ddff688efd06176a09a7e`

2. `HUF_KPI_Architecture_Traceability_Matrix_v1.0.md`
   - PRD requirements mapped: **154/154**
   - SHA-256: `9cc10a270ac642ae95abc047e66a4237c8347905b636e8c5bbe11d31ab36429a`

PRD baseline retained:

`HUF_KPI_Product_Requirements_Specification_v1.0.md`

SHA-256:
`8f8569572845070d0757b90a53ec4c5e889ff26e0480c28c35e808434b726662`

## Architecture acceptance

**APPROVED / FROZEN v1.0**

There is no architecture blocker to beginning the UI/UX design phase.

## Next action

**Phase 6 / UX-001 — Original HUF UI/UX Design and screen-level specification**

The next phase shall define:
- screen inventory;
- navigation behavior;
- page wireframes;
- responsive layout;
- Review & Correct interactions;
- dashboard composition;
- geography/structure interaction;
- Assurance & Evidence workflows;
- Report Centre;
- Audit/Methodology presentation;
- HUF-specific visual grammar;
- accessibility behavior.

**No production rebuild coding begins until the UI/UX baseline is frozen.**



# Procedure UX-001 — Original HUF UI/UX Design and Screen-Level Specification

**Date:** 6 September 2026  
**Governed Phase:** Phase 6 — Original HUF UI/UX Design  
**Status:** COMPLETE / FROZEN v1.0

## Purpose

Define and freeze the user-facing experience before beginning production rebuild coding.

This phase translates PRD v1.0 and Technical Architecture v1.0 into:

- product navigation;
- screen inventory;
- page-level wireframes;
- interaction rules;
- responsive behavior;
- status terminology;
- validation/correction workflows;
- result analysis;
- geography and structure exploration;
- assurance/evidence review;
- reporting/export interactions;
- audit/methodology presentation;
- chart grammar;
- accessibility requirements.

## Inputs

- `HUF_KPI_Product_Requirements_Specification_v1.0.md`
- `HUF_KPI_Technical_Architecture_v1.0.md`
- `HUF_KPI_PRD_Traceability_Matrix_v1.0.md`
- `HUF_KPI_Architecture_Traceability_Matrix_v1.0.md`
- frozen Design-6 Certification Baseline
- living Master Rebuild Plan v0.29

PRD requirements mapped to UX:

**154/154**

## UX direction frozen

The interface is:

- original to HUF;
- task-oriented;
- clean and consulting/reporting-oriented;
- data-dense but restrained;
- plain-language first;
- technical IDs second;
- HUF/DSC purpose first;
- personal branding subtle/secondary;
- not a copy of Village Water Budget Intelligence.

VWB may inspire visual discipline only.

## Primary navigation frozen

1. **Home / Upload**
2. **Review & Correct**
3. **Results**
4. **Structures**
5. **Assurance & Evidence**
6. **Reports & Exports**
7. **Audit & Methodology**

Engine 1–9 navigation is not permitted as the normal primary UX.

## Screen inventory frozen

**21 product screens/states**

- UX-00 Global App Shell
- UX-01 Home / Upload
- UX-02 Workbook Preflight
- UX-03 Mapping Review
- UX-04 Data Preparation Summary
- UX-05 Validation & Correction Centre
- UX-06 Validation Issue Detail / Correction Drawer
- UX-07 Calculate / Processing Progress
- UX-08 Results Overview
- UX-09 Geography Explorer
- UX-10 Structure Register
- UX-11 Structure Detail
- UX-12 Daily Calculation Trace
- UX-13 Assurance & Evidence Centre
- UX-14 Evidence Detail / Review Drawer
- UX-15 Reports & Exports Centre
- UX-16 Report Setup / Generation
- UX-17 Audit & Methodology
- UX-18 Run Summary
- UX-19 Help / Terminology
- UX-20 Global Empty / Error / Invalidated States

## Public terminology frozen

Accepted assurance label:

**Accepted under controlled methodology**

Other controlled labels:

- Provisional — evidence pending
- Calculated — warning
- Not calculated
- Excluded
- HOLD — review required
- Formal HUF confirmation: [status]

Prohibited public wording:

- Certified Total
- HUF certified without explicit formal confirmation

## Upload / Preflight UX frozen

Home includes:

- drag/drop XLSX;
- choose workbook;
- sample data;
- active blank controlled template download;
- local-browser privacy disclosure;
- selected-file summary;
- template version.

Preflight includes:

- workbook/template version;
- reporting period;
- controlled sheet recognition;
- row counts;
- formula presence;
- errors/warnings;
- advanced detail disclosure.

## Mapping UX frozen

Mapping is exception-first.

Default summary:

- mapped automatically;
- needs confirmation;
- conflicts;
- unmapped required.

Blocking conflicts/unmapped required fields prevent final mapping confirmation.

Raw confidence/technical mapping detail moves under Advanced.

## Data Preparation UX frozen

Plain-language summary includes:

- records prepared;
- date normalization;
- unit conversion;
- blanks/null preservation;
- preparation warnings;
- no silent coercion.

Field-level canonical detail remains Advanced.

## Validation & Correction UX frozen

Dedicated Review & Correct workspace groups issues by:

- Workbook / Control
- Structure
- Technical
- Catchment / Rainfall / Hydro
- Cascade / Network
- Silt
- Person-days
- Evidence

Each issue shows:

- plain-language issue;
- affected entity;
- source location;
- severity;
- scope effect;
- readiness impact;
- correction action.

Correction drawer preserves:

- original value;
- corrected value;
- reason;
- downstream impact preview.

Original workbook remains unchanged.

## Calculation progress UX frozen

User-facing progress labels are task language:

- Preparing controlled data
- Validating readiness
- Determining official routes
- Calculating KPI results
- Applying assurance
- Building geography summaries
- Finalizing audit record

This is not presented as an engine strip.

## Results dashboard frozen

P0 content includes:

- KPI 1.1.1;
- KPI 1.1.2;
- lined farm-pond component where applicable;
- person-days;
- assurance-aware totals;
- coverage;
- geography ranking;
- calculated-vs-accepted analysis;
- structure/route/assurance analysis;
- review signals.

Calculated Total remains:

**accepted + provisional + warning**

Never “Certified Total.”

## Geography UX frozen

Governed hierarchy:

**Structure → Village → GP → Block → District → PIA → Project**

Navigation may present:

**Project → District → Block → GP → Village → Structure**

with PIA as explicit filter/context.

Breadcrumb is mandatory.

Selecting geography is presentation filtering only.

## Structure Intelligence UX frozen

Structure detail includes:

- identity/geography;
- readiness;
- official route;
- timing method;
- assurance;
- formal HUF status;
- KPI result;
- plain-language route explanation;
- protected calculation explanation;
- current validation;
- evidence;
- person-days where applicable;
- daily trace where applicable;
- technical report/export actions.

## Daily trace UX frozen

Daily trace uses E06 truth only.

Includes:

- chart;
- technical table;
- rainfall/input;
- storage;
- infiltration;
- evaporation;
- overflow;
- controlled available components.

The UI does not simulate/recalculate the trace.

## Assurance & Evidence UX frozen

Dedicated centre includes:

- five assurance states;
- evidence-pending structures;
- evidence requirements;
- assurance by geography/type/route;
- formal HUF confirmation separately.

Evidence review drawer explicitly tells the user whether an evidence change:

- refreshes only E07–E09; or
- affects validation/eligibility and therefore requires earlier controlled reprocessing.

## Reports & Exports UX frozen

Single Report Centre includes:

Quick exports:
- Compact Result
- Management XLSX
- Technical/M&E XLSX
- Audit JSON

Report setup:
- hierarchy level;
- scope;
- Management vs Technical/M&E mode;
- display unit;
- clear pre-generation scope summary.

No ambiguous report generation.

## Audit & Methodology UX frozen

Tabs:

- Run lineage
- Methodology versions
- Validation/routing/formula references
- Audit events
- Release evidence
- Privacy

Hashes and technical IDs are progressively disclosed.

## Chart grammar frozen

P0 analytical forms:

- ranked geography bar;
- calculated-vs-accepted dumbbell;
- assurance distribution;
- structure-type × assurance heatmap;
- route × assurance matrix;
- daily calculation trace.

P1:
- geography small multiples.

Charts always show scope/unit/coverage and do not become independent calculation engines.

## Responsive behavior frozen

### Desktop ≥1280 px
- persistent navigation rail;
- 4-card KPI row;
- multi-column analytics.

### 1024–1279 px
- compact rail;
- 2×2 KPI cards.

### Tablet 768–1023 px
- drawer/compact navigation;
- 2-column cards;
- scrolling tables.

### Mobile <768 px
- single-column;
- summary/status first;
- filter drawer;
- stacked table cards where practical;
- essential review/detail actions preserved.

Mobile priority:

1. run/status
2. KPI summary
3. blocking/warning
4. coverage
5. assurance
6. geography/structure
7. charts
8. advanced methodology

## Accessibility frozen

P0:

- keyboard operability;
- visible focus;
- semantic landmarks;
- labelled forms;
- accessible errors;
- adequate contrast;
- no colour-only status;
- chart text summaries;
- proper table headers;
- modal/drawer focus handling;
- reduced-motion support.

## Error/stale-state UX frozen

After upstream change:

**Results need recalculation**

Previous results may remain visible for reference but must be clearly marked stale/not current.

Runtime/application error remains distinct from methodology/readiness states.

## Synthetic-data UX frozen

Persistent label:

**Synthetic validation data**

Visible in:

- header;
- Results;
- Structure Detail;
- report setup;
- generated report metadata;
- Run Summary.

## Branding frozen

Priority:

1. HUF calculator / programme purpose
2. implementing organization
3. methodology/version
4. personal/author attribution only in subtle About/footer/report metadata

## UX non-regression rules

Implementation fails UX acceptance if it:

- restores engine-strip primary navigation;
- hides HOLD/excluded/not-calculated entities;
- uses certified wording incorrectly;
- recalculates on presentation filter;
- hides audit lineage;
- rewrites E06 from evidence-only review;
- uses screenshot reporting;
- requires runtime CDN for controlled core;
- exposes private project state globally;
- hides stale/invalidated status.

## Controlled-methodology impact

**NONE**

Classification:

**GREEN presentation design + AMBER workflow interaction design around protected E01–E09**

No formula, route, validation, assurance, aggregation or audit method changed.

## Frozen UX artifacts

1. `HUF_KPI_UI_UX_Specification_v1.0.md`
   - SHA-256: `e2008d1eeb9465a2238dd29ae483b4db89c5362a7ad6d58156785d35154cfac8`

2. `HUF_KPI_UI_UX_Screen_Traceability_v1.0.md`
   - Requirements mapped: **154/154**
   - SHA-256: `97b9265c21719ed63926cd2f5f91ad4410d3d447f3908381dcbbaaafaf0bb814`

Architecture baseline retained:

`HUF_KPI_Technical_Architecture_v1.0.md`

SHA-256:
`0684a25d425a1b80216818dc729cedf686d16cb1de5ddff688efd06176a09a7e`

PRD baseline retained:

`HUF_KPI_Product_Requirements_Specification_v1.0.md`

SHA-256:
`8f8569572845070d0757b90a53ec4c5e889ff26e0480c28c35e808434b726662`

## UI/UX acceptance

**APPROVED / FROZEN v1.0**

There is no design blocker to beginning controlled implementation.

## Next action

**Phase 7 / IMP-7A — Foundation implementation**

Initial implementation scope:

- repository shell;
- protected-core integration;
- protected-core manifest;
- app controller;
- state store;
- pipeline orchestrator;
- worker boundary;
- dependency/vendor adapters;
- initial test harness.

No dashboard/reporting feature work begins before the foundation boundary and protected-core regression are proven.

Every implementation batch must update this living Master Plan before closure.



# Procedure IMP-7A — Foundation Implementation

**Date:** 6 September 2026  
**Governed Phase:** Phase 7 — Controlled Implementation  
**Implementation Batch:** IMP-7A  
**Status:** COMPLETE / PASS / FROZEN FOUNDATION BASELINE

## Objective

Create the first clean-rebuild code baseline while preserving the audited HUF v1.0.0 E01–E09 methodology byte-for-byte.

This batch was intentionally limited to the application/repository foundation.

No production Upload/Preflight/Mapping, Validation, Dashboard, Export or PDF feature was implemented beyond placeholder architecture boundaries.

## Inputs

- Product Requirements Specification v1.0
- Technical Architecture v1.0
- UI/UX Specification v1.0
- protected `HUF_Supply_Side_KPI_Calculator_v1.0.0_FINAL(2).zip`
- frozen Design-6 Certification Baseline v1.0
- living Master Rebuild Plan v0.30

Protected source release SHA-256:

`6ff4a19f65e2bd36a38863c98289ad5e5b45870aabf3513574ee134285302392`

## Implementation completed

### Repository shell

Created clean static rebuild structure including:

- `app/`
- `state/`
- `pipeline/`
- `adapters/`
- `views/`
- `services/`
- `reports/`
- `exports/`
- `ui/`
- `vendor/`
- `samples/`
- `tests/`
- `docs/`
- `.github/workflows/`

### Protected-core integration

Created:

`protected-core/`

and copied the audited final-release methodology/runtime dependencies without modifying their bytes.

Protected files:

**27**

Includes:

- 10 protected engine/formula JavaScript files;
- controlled methodology/config files;
- protected runtime support required by the engines.

Fresh source-release parity:

**27/27 PASS**

### Protected-core manifest

Created machine-readable:

`PROTECTED_CORE_MANIFEST.json`

It records:

- path;
- SHA-256;
- role;
- source protected release;
- methodology-change policy;
- historical engine hash references.

Any future protected-core drift must fail foundation/release validation.

### Historical hash-reference correction

During the first manifest test, two earlier written historical hash strings were found to contain an extra trailing `b`.

The protected files themselves were not wrong and were not edited.

Authoritative final-release hashes are:

E01 Intake:

`3b4d4da740fc7d435ed267ee67a6328380ae5173612ed375c50c7d94afa63772`

E06 Calculation:

`8130d3fff6269dbc2a246f4a5cf8807790e11c5e2e7792892020f955c01cddf2`

These match the final v1.0.0 `RELEASE_MANIFEST.json`.

Classification:

**documentation/reference transcription correction only**

Controlled methodology impact:

**NONE**

### Application state foundation

Implemented new application state model with:

- governed run lifecycle;
- presentation state;
- stale/invalidated state;
- completed-run separation;
- draft revision tracking.

### Correction/invalidation foundation

Implemented architecture-level dependency policy.

Key rules:

- workbook replacement → E01 onward;
- mapping change → E03 onward;
- ordinary source-value correction → E03/dependency-defined downstream;
- validation/eligibility evidence → E04 onward;
- assurance-only evidence → E07 onward when explicitly safe;
- presentation filter → no E01–E09 invalidation.

### Immutable snapshot registry

Implemented an immutable snapshot registry for controlled stage/view lineage.

Duplicate frozen stage insertion is rejected unless explicitly treated as a new draft replacement.

### Protected pipeline adapter

Implemented the only normal new-product integration boundary to the protected E01–E09 modules.

Product/UI modules are not permitted to import individual protected engines directly.

### Pipeline orchestrator

Implemented foundation orchestration for:

- Intake;
- Mapping preview;
- Mapping confirmation;
- E03–E04 preparation/validation;
- E05–E09 calculation/finalization;
- controlled progress;
- error state;
- invalidation.

The orchestrator contains no formulas or route logic.

### Worker boundary

Created the versioned Web Worker contract foundation.

Heavy workbook/calculation execution remains designed for Worker execution where browser support permits.

### Dependency/vendor boundary

Vendored JSZip from the final protected release.

Vendor parity:

**PASS**

Runtime CDN requirement for controlled core:

**NO**

### Product config separation

Created a new product-level configuration for:

`0.1.0-foundation`

Methodology configs remain inside the protected-core boundary.

### GitHub workflows

Added foundation CI and GitHub Pages workflow skeletons.

Deployment is validation-gated.

## Changed/new file inventory

The exact complete payload inventory is recorded in:

`HUF_KPI_Phase7A_RELEASE_MANIFEST_v1.0.json`

Release payload files:

**117**

Manifest verification:

**117/117 PASS**

Major new implementation files include:

- `app/bootstrap.js`
- `app/app-controller.js`
- `app/routes.js`
- `app/event-bus.js`
- `state/app-state.js`
- `state/correction-state.js`
- `state/selectors.js`
- `pipeline/orchestrator.js`
- `pipeline/pipeline-adapter.js`
- `pipeline/dependency-policy.js`
- `pipeline/snapshot-registry.js`
- `pipeline/worker-entry.js`
- `adapters/protected-config-adapter.js`
- `adapters/workbook-adapter.js`
- `adapters/crypto-adapter.js`
- `adapters/browser-capabilities.js`
- `vendor/VENDOR_MANIFEST.json`
- `PROTECTED_CORE_MANIFEST.json`
- `FOUNDATION_VALIDATION_STATUS.json`
- foundation test harness files
- CI/Pages workflow files.

## Protected files deliberately NOT changed

- E01 Intake
- E02 Mapping
- E03 Canonicalisation
- E04 Validation
- E05 Routing
- E06 Formula Library
- E06 Calculation
- E07 Assurance
- E08 Aggregation
- E09 Audit
- route registry
- formula catalog
- input schema
- canonicalization policy
- validation rulebook
- routing policy
- assurance policy
- aggregation policy
- audit policy
- mapping aliases
- required-sheets contract
- engine contracts

## First test-run findings and corrections

Initial foundation test execution correctly failed for two test-infrastructure reasons:

1. historical E01/E06 reference hash strings had an extra trailing character in prior documentation;
2. the static architecture scanner scanned its own test source and falsely identified test-only protected-engine/debug strings.

Resolution:

- authoritative final-release hashes were used;
- scanner scope was corrected to exclude test files from product-runtime policy scanning.

No protected engine/config file was changed to obtain PASS.

## Final test results

### Foundation suite

**7/7 PASS**

1. Protected-core manifest  
   - **37/37 checks PASS**

2. Protected engine imports  
   - **10/10 PASS**

3. State / invalidation  
   - **9/9 checks PASS**

4. Pipeline orchestrator  
   - **4/4 checks PASS**

5. Static architecture  
   - **PASS**
   - violations: **0**

6. Relative imports  
   - imports checked: **40**
   - unresolved: **0**

7. JSON/config parsing  
   - parsed: **16**
   - failures: **0**

### Additional verification

JavaScript syntax:

**65/65 PASS**

Protected source-release byte parity:

**27/27 PASS**

JSZip vendor parity:

**PASS**

Release payload manifest:

**117/117 PASS**

### Browser/local HTTP note

A local HTTP/browser smoke attempt was blocked by the current execution environment.

Classification:

**ENVIRONMENT RESTRICTED — NOT PRODUCT FAILURE**

Full browser and deployed-site acceptance remain mandatory later release gates.

## Foundation release artifact

`HUF_KPI_Rebuild_Phase7A_Foundation_v0.1.0.zip`

SHA-256:

`e92f334873d5b0b081b4df3fa32f800f60abeaccd749ba5a1b1946c6d4267278`

Release checksum file:

`HUF_KPI_Rebuild_Phase7A_Foundation_v0.1.0.sha256.txt`

## Supporting artifacts

`HUF_KPI_Phase7A_Foundation_Implementation_Report_v1.0.md`

SHA-256:

`1d3db2e263dcb03007dde8ff2bfd1a2b64c31026ce76ffebc2c9d818bc692d96`

`HUF_KPI_Phase7A_Foundation_Validation_Status_v1.0.json`

SHA-256:

`57875467090a02b9ba77d9d790c5d7d80cb90e5aba9c49f27d0643c9c3ce2105`

`HUF_KPI_Phase7A_PROTECTED_CORE_MANIFEST_v1.0.json`

SHA-256:

`9d3a93c21d4a0f76a82ebfc707d55031845380b96401619b15b514a046f4e5cb`

`HUF_KPI_Phase7A_RELEASE_MANIFEST_v1.0.json`

SHA-256:

`bf7c166eb846f03bf1b959c91b3770f722316b2a4460664781251e97c9d2a657`

## Controlled-methodology impact

**NONE**

Implementation classification:

**AMBER integration/foundation work around protected RED methodology**

No controlled formula/routing/validation/assurance/aggregation/audit semantics changed.

## IMP-7A acceptance decision

**PASS / FROZEN FOUNDATION BASELINE**

The clean rebuild may proceed to the first user-workflow implementation batch.

## Exact next action

**Phase 7 / IMP-7B — Intake / Workbook Preflight / Mapping implementation**

Scope to implement next:

- UX-01 Home / Upload;
- controlled `.xlsx` selection;
- drag/drop;
- sample workbook loading;
- controlled blank-template action;
- selected-file summary;
- workbook preflight;
- E01 integration through the new orchestrator;
- exception-first Mapping Review;
- E02 mapping confirmation;
- source/mapping invalidation behavior;
- local-browser privacy;
- IMP-7B regression/static/browser-oriented tests where environment permits.

No Validation & Correction or Results Dashboard implementation begins until IMP-7B is closed.



# Procedure INS-7A-001 — Phase 7A Foundation Structure Inspection

**Date:** 6 September 2026  
**Phase:** Phase 7 — Controlled Implementation  
**Status:** COMPLETE / PASS — GO TO IMP-7B WITH RECORDED HARDENING ITEMS

## Purpose

Inspect the actual Phase 7A foundation ZIP structure before starting IMP-7B.

This procedure verifies the real repository, protected-core boundary, integration modules, state/orchestrator/worker foundations, test coverage, vendor structure and release manifest rather than relying only on the implementation summary.

## Artifact inspected

`HUF_KPI_Rebuild_Phase7A_Foundation_v0.1.0.zip`

SHA-256:

`e92f334873d5b0b081b4df3fa32f800f60abeaccd749ba5a1b1946c6d4267278`

## Key findings

### Protected methodology boundary

- protected files: **27**
- protected manifest tests: **37/37 PASS**
- source-release protected parity: **27/27 PASS**
- unexpected direct protected-engine imports: **0**
- only permitted product integration import path: `pipeline/pipeline-adapter.js`

### Independent test rerun

`npm test`:

**7/7 PASS**

### Release-manifest integrity

**117/117 PASS**

### Foundation placeholders

**17** explicit service/view-model placeholders remain.

This is intentional and confirms later product features were not prematurely implemented.

## Recorded hardening items

### H-7A-01 — completed-run snapshot lock

Snapshot registry must eventually enforce completed E09 lineage immutability more strongly.

Target:
**7B/7C**

### H-7A-02 — correction identity/history

Correction overlay is a minimal foundation and must gain governed unique identity/lineage before production correction UX.

Target:
**7C**

### H-7A-03 — E01/E02 common error handling

Intake and Mapping methods are not yet wrapped in the common orchestrator stage-failure handling used by E03–E09.

Target:
**7B — mandatory acceptance item**

### H-7A-04 — calculate readiness guard

Production calculation must not be invokable while validation readiness is blocking.

Target:
**7C**

### H-7A-05 — Worker/client integration

Worker contract exists but current commands are only RESET and GET_PUBLIC_STATE; no operational Worker client is wired.

Target:
**7B — mandatory acceptance item**

Preferred:
**Worker-first with tested same-thread fallback**

### H-7A-06 — controlled blank template

The foundation bundles leap/non-leap sample workbooks but not the blank controlled HUF-SS-INPUT-v1.1 template.

Target:
**7B — mandatory acceptance item**

## Go / no-go

**GO TO IMP-7B**

Mandatory 7B hardening/feature items from this inspection:

- H-7A-03 E01/E02 error-state integration;
- H-7A-05 Worker/client intake/mapping integration;
- H-7A-06 blank controlled template/download;
- UX-01/02/03 workflow implementation and E01/E02 regression.

No RED methodology issue was identified.

## Controlled-methodology impact

**NONE**

Protected files changed:

**0**

## Inspection artifact

`HUF_KPI_Phase7A_Structure_Inspection_Report_v1.0.md`

SHA-256:

`19542c266023533d5a402584c2de2214572261017408abbd4dfca1600acb810e`

## Next action

**Phase 7 / IMP-7B — Intake / Workbook Preflight / Mapping implementation**



# Procedure INS-7A-002 — Deep Protected-Core, State/Worker and CI/Release Audit

**Date:** 6 September 2026  
**Phase:** Phase 7 — Controlled Implementation  
**Status:** COMPLETE — CORE PASS / 7B-0 FOUNDATION HARDENING REQUIRED

## User-requested inspection order

1. Protected Core
2. State / Worker
3. CI / Release Structure

## Protected Core result

Protected final-source byte parity:

**27/27 PASS**

Protected methodology defect:

**0**

Controlled configuration coverage:

**PASS**

The final source has 12 controlled config files plus legacy product `app-config.json`; the rebuild protects all 12 controlled configs and correctly uses a new product config.

### Mandatory integration hardening

- PC-03: Worker must initialize pinned local JSZip before E01.
- PC-04: loaded controlled JSON must be deep-frozen/integrity-locked.
- PC-05: narrow protected adapter API; avoid exporting stage functions/raw protected store to product code.

No protected file itself should be changed.

## State / Worker result

Deep probes found:

- reset does not clear external snapshot registry;
- E01 failure does not enter governed FAILED/error state;
- E02 failure does not enter governed FAILED/error state;
- nested presentation state is mutable;
- completed E09 snapshot lineage is not hard-locked at registry level;
- controller exposes mutable appState/snapshot primitives;
- state slice placeholders are not yet wired;
- Worker implements only RESET/GET_PUBLIC_STATE and has no product Worker client.

These are foundation integration issues, not methodology issues.

### Mandatory 7B-0 state/Worker hardening

- ST-01 snapshot clearing on reset/workbook replacement;
- ST-02 E01/E02 normalized error boundary;
- ST-05 read-only/narrow controller API;
- ST-06 one authoritative state model;
- ST-07 operational Worker RPC + same-thread fallback.

ST-03/ST-04 also to be hardened before later correction/finalization flows.

## CI / Release result

Current package integrity:

**117/117 PASS**

Current foundation regression:

**7/7 PASS**

However, mutation sensitivity tests proved two gaps:

### CI-01 release manifest

A manifest-controlled product file was changed without updating `RELEASE_MANIFEST.json`.

`npm test` still passed.

Therefore CI does not currently verify release-manifest consistency.

### CI-02 JavaScript syntax

A syntax error was injected into an unused service module.

`npm test` still passed.

`node --check` correctly failed.

Therefore the previous 65/65 syntax check is not yet part of the actual CI gate.

### Other release hardening

- validation status must be regenerated/verified;
- CI should retain machine-readable evidence;
- Pages should move from repository-root deployment to curated runtime payload;
- browser CI should begin in 7B;
- deployed Pages acceptance remains a later required gate.

## Revised implementation decision

**IMP-7B remains next, but begins with IMP-7B-0 Foundation Hardening.**

Do not wire real UX-01/02/03 workbook data before 7B-0 passes.

### IMP-7B-0 mandatory sequence

1. controlled config deep-freeze/integrity lock;
2. protected adapter API narrowing;
3. Worker-local JSZip initialization;
4. Worker RPC + same-thread fallback;
5. snapshot clearing;
6. E01/E02 failure normalization;
7. controller mutation-boundary hardening;
8. state-authority consolidation;
9. full JS syntax CI gate;
10. release-manifest CI verification;
11. validation-evidence regeneration/verification;
12. then implement Upload / Preflight / Mapping.

## Controlled-methodology impact

**NONE**

Protected files changed by this audit:

**0**

## Audit artifacts

`HUF_KPI_Phase7A_Deep_Foundation_Audit_v1.0.md`

SHA-256:

`eef4f3589c8c3f50075c9f3ed00009159fecbff0ca03fc744c4d9a7976716324`

`HUF_KPI_Phase7A_Deep_Foundation_Findings_v1.0.json`

SHA-256:

`3da5e9f6261434c9445eacf494dc6cec54220f642e1747b11b7a5f0f657b011b`

## Next action

**Phase 7 / IMP-7B-0 — Foundation Hardening Gate, followed by IMP-7B Intake / Workbook Preflight / Mapping implementation.**



# Procedure IMP-7B-0 — Foundation Hardening Gate

**Date:** 6 September 2026  
**Governed Phase:** Phase 7 — Controlled Implementation  
**Implementation Batch:** IMP-7B-0  
**Status:** COMPLETE / PASS / HARDENED FOUNDATION FROZEN

## Purpose

Close the protected-integration, state/Worker and CI/release weaknesses found in `INS-7A-002` before connecting the real Upload / Workbook Preflight / Mapping UI to protected E01/E02.

This procedure does not implement the user-facing IMP-7B workbook workflow itself.

## Starting baseline

`HUF_KPI_Rebuild_Phase7A_Foundation_v0.1.0.zip`

SHA-256:

`e92f334873d5b0b081b4df3fa32f800f60abeaccd749ba5a1b1946c6d4267278`

Protected source release remains:

`HUF_Supply_Side_KPI_Calculator_v1.0.0_FINAL(2).zip`

SHA-256:

`6ff4a19f65e2bd36a38863c98289ad5e5b45870aabf3513574ee134285302392`

## Protected-core result

Fresh direct source-release byte comparison after all hardening:

**27/27 PASS**

Protected-core files changed:

**0**

Protected-core manifest SHA-256 remains:

`9d3a93c21d4a0f76a82ebfc707d55031845380b96401619b15b514a046f4e5cb`

Therefore the hardening is entirely outside the protected methodology core.

## PC-03 / Worker runtime resolution

The deep audit originally identified JSZip initialization as a Worker requirement.

Implementation exposed an additional protected-parser constraint:

`protected-core/js/services/xlsx-lite.js`

requires both:

- `globalThis.JSZip`; and
- `DOMParser`.

Standard Web Workers do not provide `DOMParser`.

### Governed resolution

The protected parser is **not modified** and no new XML parsing library is inserted into controlled methodology.

The new pipeline client:

1. probes Worker capabilities;
2. initializes pinned local JSZip in the Worker runtime;
3. uses Worker mode only if all controlled XLSX prerequisites are available;
4. otherwise terminates the incompatible Worker and uses the same protected pipeline through a tested same-thread fallback.

This is explicitly permitted by Technical Architecture v1.0.

Classification:

**AMBER runtime integration — methodology unchanged**

## PC-04 — controlled runtime config integrity

Implemented:

- runtime SHA-256 verification of each controlled JSON file against `PROTECTED_CORE_MANIFEST.json`;
- recursive/deep freezing of controlled config objects before engine use;
- nested mutation rejection tests.

Result:

**PASS**

No controlled config content changed.

## PC-05 — protected adapter boundary

Removed product-facing escape surfaces:

- protected store is no longer returned by the adapter;
- `getProtectedState()` raw-store access removed;
- protected stage-function map is internal rather than exported.

Product-facing state is privacy-safe/public protected state only.

Result:

**PASS**

## ST-01 — snapshot reset/replacement

Implemented:

- `clearAll()`;
- reset clears draft and completed snapshot registry state;
- workbook replacement can now start from a genuinely clean controlled lineage.

Result:

**PASS**

## ST-02 — E01/E02 governed error handling

E01 Intake and E02 Mapping now use the same normalized orchestrator failure boundary as downstream stages.

On failure the app records:

- `FAILED` run state;
- failed stage;
- error message;
- previous run state;
- failed pipeline status.

Direct failure probes:

**PASS**

## ST-03 — nested state immutability

App state is recursively frozen for plain application state structures.

Direct mutation of nested presentation filters through a retrieved state reference:

**blocked — PASS**

## ST-04 — completed-run immutability

Snapshot registry now:

- archives completed E09 lineage;
- locks the completed draft;
- rejects overwrite attempts;
- creates a new draft lineage on governed invalidation.

Completed archive remains intact.

Result:

**PASS**

## ST-05 — controller mutation boundary

`createAppController()` no longer exposes:

- mutable app-state store;
- snapshot registry;
- orchestrator primitive.

Product-facing API now exposes:

- read-only `getState()`;
- subscription;
- governed navigation/reset;
- governed pipeline commands.

Result:

**PASS**

## ST-06 — state authority consolidation

Decision frozen:

**one authoritative `app-state.js` store**

`source-state.js`, `mapping-state.js`, `pipeline-state.js` and `view-state.js` are used as state-slice factories, not independent competing stores.

Correction overlay remains separate until IMP-7C.

## ST-07 — operational Worker/RPC boundary

Implemented:

- Worker RPC client;
- `GET_CAPABILITIES`;
- `RUN_INTAKE`;
- `BUILD_MAPPING`;
- `CONFIRM_MAPPING`;
- `RUN_STAGE`;
- `GET_PUBLIC_STATE`;
- `RESET`;
- versioned Worker response envelope;
- timeout/error handling;
- automatic same-thread fallback when controlled XLSX Worker prerequisites are not available.

Result:

**PASS WITH GOVERNED FALLBACK**

## CI-01 — release-manifest integrity gate

Added `release-manifest.mjs` to the actual `npm test` path.

It verifies:

- exact file inventory;
- missing/unlisted files;
- SHA-256;
- file size;
- manifest payload count.

Final hardened release:

**132/132 payload files PASS**

### Adversarial proof

A copy of `app/bootstrap.js` was intentionally changed without regenerating `RELEASE_MANIFEST.json`.

Manifest gate result:

**FAIL as designed**

The changed SHA and size were identified.

Therefore the CI gap discovered in `INS-7A-002` is closed.

## CI-02 — full JavaScript syntax gate

Added full product/test/tool JavaScript syntax checking to the actual hardening test suite.

Final clean package:

**all checked JS modules PASS**

### Adversarial proof

An intentional syntax error was inserted into an otherwise unused service placeholder.

Syntax gate result:

**FAIL as designed**

The exact file/line was identified.

Therefore unused modules can no longer silently contain syntax errors while CI remains green.

## CI-03 — validation evidence regeneration

`tests/foundation/run-hardening.mjs` now generates deterministic machine-readable evidence from the actual executed suites:

`tests/evidence/phase7b0-test-result.json`

and:

`HARDENING_VALIDATION_STATUS.json`

These are regenerated before release-manifest verification.

Result:

**PASS**

## CI-04 — retained CI evidence

Validation and Pages workflows now retain machine-readable artifacts including:

- hardening test result;
- validation status;
- release manifest;
- protected-core manifest.

This begins implementation of the frozen release-evidence architecture.

## CI-05 — curated Pages payload

GitHub Pages workflow no longer uploads repository root.

A deterministic `_site` builder includes only the validated runtime payload.

Explicitly excluded from deployed site:

- tests;
- docs;
- samples;
- `.github`;
- tools;
- package metadata not needed at runtime.

Curated Pages payload test:

**PASS**

## Final hardening test result

### Non-manifest suites

**12/12 PASS**

- protected-core manifest: 37/37 checks
- protected imports: 10/10
- state/invalidation: 9/9
- state hardening: 6/6
- orchestrator/error handling: 10/10
- controlled config hardening: 6/6
- Worker runtime: 4/4
- static architecture: PASS / 0 violations
- relative imports: PASS / 0 unresolved
- config parse: PASS / 0 failures
- JavaScript syntax: PASS
- curated Pages payload: PASS

### Release-manifest gate

**PASS — 132/132 payloads**

### Protected final-source parity

**PASS — 27/27**

### Adversarial sensitivity probes

- release-manifest mutation detection: **PASS**
- unused-file syntax mutation detection: **PASS**

## File-change classification

Compared with Phase 7A:

- changed files: **24**
- new files: **16**
- deleted stale file: **1** (`FOUNDATION_VALIDATION_STATUS.json`)
- protected-core changed: **NO**

The stale Phase 7A summary was removed rather than retained as potentially contradictory authoritative evidence.

## Controlled-methodology impact

**NONE**

E01–E09 changed:

**NO**

Controlled config content changed:

**NO**

Design-6 expected outcomes changed:

**NO**

## Hardened foundation package

`HUF_KPI_Rebuild_Phase7B0_Hardened_v0.1.1.zip`

SHA-256:

`f6fc3d3949b4e4f2bbea4e67210db4b7fdb8871fb4b7b2eb08a5de50b527d711`

## Supporting artifacts

`HUF_KPI_Phase7B0_Foundation_Hardening_Report_v1.0.md`

SHA-256:

`fd1bfd129bd6402947e8cbe196927290628eb3192493bf47010661c3c1e8e8a9`

`HUF_KPI_Phase7B0_Foundation_Hardening_Validation_v1.0.json`

SHA-256:

`1461e43dd9b4e305c28328b4e1649e9a620ecc016f9d490e9419bf3a45fca163`

`HUF_KPI_Phase7B0_RELEASE_MANIFEST_v1.0.json`

SHA-256:

`81b9620e072c96c938e11cc3a39fdce95e31067eb8714399842ccf3192d33156`

`HUF_KPI_Phase7B0_PROTECTED_CORE_MANIFEST_v1.0.json`

SHA-256:

`9d3a93c21d4a0f76a82ebfc707d55031845380b96401619b15b514a046f4e5cb`

`HUF_KPI_Phase7B0_Changed_File_Inventory_v1.0.json`

SHA-256:

`17c8734a8e359a3211dc18b8759a5c61e1b49688e1be2dedb479ad9a59223960`

## Deferred items still governed

These were intentionally not pulled into the hardening gate:

- controlled blank HUF-SS-INPUT-v1.1 template/download → IMP-7B;
- full correction identity/history → IMP-7C;
- calculation readiness gate → IMP-7C;
- real Upload/Mapping browser UAT → IMP-7B;
- full Design-6/physical fixture/release certification → later acceptance/release phases.

## IMP-7B-0 decision

**PASS / CLOSED / HARDENED FOUNDATION FROZEN**

There is no remaining foundation-hardening blocker to implementing the governed Intake / Workbook Preflight / Mapping workflow.

## Exact next action

**Phase 7 / IMP-7B — Intake / Workbook Preflight / Mapping implementation**

Next scope:

- UX-01 Home / Upload;
- controlled `.xlsx` selection and drag/drop;
- sample workbook loading;
- controlled blank HUF-SS-INPUT-v1.1 template/download;
- selected-file summary;
- workbook preflight;
- real E01 integration through hardened controller/client;
- exception-first Mapping Review;
- real E02 mapping preview/confirmation;
- workbook/mapping reset/invalidation behavior;
- local-browser privacy messaging;
- 7B integration/browser-oriented regression.



# Procedure REV-7B0-001 — Hardened Code Changes Review

**Date:** 6 September 2026  
**Phase:** Phase 7 — Controlled Implementation  
**Status:** COMPLETE — PASS WITH PRE-MAPPING FIXES REQUIRED

## Purpose

Review the actual source-code delta from Phase 7A foundation to Phase 7B-0 hardened foundation before proceeding to real IMP-7B workbook workflow implementation.

## Artifacts compared

Baseline:

`HUF_KPI_Rebuild_Phase7A_Foundation_v0.1.0.zip`

Hardened:

`HUF_KPI_Rebuild_Phase7B0_Hardened_v0.1.1.zip`

Hardened SHA-256:

`f6fc3d3949b4e4f2bbea4e67210db4b7fdb8871fb4b7b2eb08a5de50b527d711`

## Delta inventory

- changed files: **24**
- new files: **109**
- removed/replaced files: **1**
- unchanged files: **93**
- protected-core change: **NO**

## Fresh re-run

`npm test`:

**PASS**

- hardening suites: **12/12 PASS**
- release-manifest payloads: **132/132 PASS**

## Hardening changes accepted as correct

- controlled JSON SHA verification;
- recursive controlled-config freeze;
- protected adapter narrowing;
- private state/snapshot mutation boundary;
- reset snapshot clearing;
- completed-run snapshot locking;
- E01/E02 normalized error handling;
- Worker capability probe and governed main-thread fallback;
- full JS syntax CI gate;
- release-manifest CI gate;
- curated `_site` Pages payload;
- machine-readable CI evidence upload.

## New code-review finding REV-7B0-01

**HIGH — Mapping snapshot remains mutable**

`mapping-state.js` freezes the outer mapping-state object but not the nested E02 mapping snapshot.

A direct review probe proved a caller can mutate a nested `fieldMappings` entry through the state returned by `getState()`.

This must be fixed before UX-03 Mapping Review is implemented.

Resolution requirement:

- deep-clone/deep-freeze product mapping snapshot;
- do not allow direct UI mutation.

## New code-review finding REV-7B0-02

**HIGH — governed mapping-edit commands not yet exposed**

Protected E02 already owns sheet/field mapping update and confirmation functions.

IMP-7B must expose these through the governed adapter/Worker/controller path.

Do not implement mapping-edit logic in product UI.

## REV-7B0-03

**MEDIUM — Worker fatal-error lifecycle**

Future Worker-compatible runtime should close/terminate on fatal worker/message errors, reject pending calls and reject later RPC calls.

Recommended early IMP-7B hardening.

## REV-7B0-04

**MEDIUM — GitHub Pages workflow alignment**

Current official GitHub Pages workflow guidance reviewed during this procedure uses:

- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v4`
- `actions/deploy-pages@v4`

Our current Pages workflow retains the curated `_site` payload but omits `configure-pages` and uses upload-pages-artifact v3.

Update before first actual Pages deployment.

## REV-7B0-05

**MEDIUM — final combined validation evidence**

The most complete final 7B-0 validation summary currently exists as a standalone artifact, not inside the ZIP.

Beginning with IMP-7B packaging, ship a final combined validation/evidence summary inside the package.

## REV-7B0-06

**LOW — curated deployment can later become dependency-minimal**

Current directory allow-list is acceptable but includes some placeholder runtime directories.

No immediate blocker.

## Review decision

**KEEP THE 7B-0 HARDENED BASELINE**

Do not reopen or rollback the hardening work.

Before Mapping Review is connected to real E02 data, close:

- REV-7B0-01
- REV-7B0-02

Recommended same early patch:

- REV-7B0-03
- REV-7B0-04

## Controlled-methodology impact

**NONE**

Protected files modified during review:

**0**

## Review artifacts

`HUF_KPI_Phase7B0_Hardened_Code_Review_v1.0.md`

SHA-256:

`adf756c214e99a271d6d4073b44d5d9a04af9ad373dc2dc83c88178f26f3036f`

`HUF_KPI_Phase7B0_Hardened_Code_Review_Findings_v1.0.json`

SHA-256:

`a917163a72b9e01fd6a2fcb8ea0bac8184f430fa97da305ba5d04d0c1663bc07`

## Revised IMP-7B sequence

1. **7B-A — Mapping-state and governed mapping-command hardening**
2. **7B-B — Upload / sample / controlled blank template**
3. **7B-C — Workbook Preflight**
4. **7B-D — Exception-first Mapping Review**
5. **7B-E — IMP-7B browser/CI/release acceptance**

No Validation & Correction or Results work begins until IMP-7B is closed.



# Procedure IMP-7B-A — Mapping-State and Governed E02 Mapping-Command Hardening

**Date:** 6 September 2026  
**Phase:** Phase 7 — Controlled Implementation  
**Implementation Batch:** IMP-7B-A  
**Status:** COMPLETE / PASS / FROZEN SUB-BASELINE

## Purpose

Close the two high-priority findings identified in the Phase 7B-0 hardened-code review before UX-03 Mapping Review is allowed to interact with real E02 mapping data.

Primary findings closed:

- `REV-7B0-01` — nested E02 mapping snapshot remained mutable in product state;
- `REV-7B0-02` — protected E02 manual mapping update/confirmation functions were not yet exposed through the governed integration boundary.

This batch also closes the recommended Worker fatal-error lifecycle issue and aligns the GitHub Pages workflow with the current official custom-workflow pattern while retaining the curated `_site` deployment.

## Input baseline

`HUF_KPI_Rebuild_Phase7B0_Hardened_v0.1.1.zip`

Protected methodology baseline:

**HUF final v1.0.0 E01–E09**

## Version

Product version:

`0.1.2-mapping-hardening`

Phase:

`IMP-7B-A`

## Protected methodology impact

**NONE**

Protected E01–E09/config files edited:

**0**

Fresh protected-file parity after implementation:

**27/27 PASS**

Packaged ZIP protected-file parity after fresh unzip:

**27/27 PASS**

## REV-7B0-01 closure — immutable product mapping state

`state/mapping-state.js` was changed so the product mapping state:

1. structured-clones the E02 mapping snapshot;
2. recursively freezes the cloned snapshot;
3. freezes the outer mapping-state wrapper.

Direct mutation is now blocked for:

- mapping snapshot;
- `sheetMappings`;
- `fieldMappings`;
- individual mapping entries;
- stats and nested plain-object structures.

The product state therefore no longer shares a mutable mapping object with the protected E02 store.

## REV-7B0-02 closure — governed E02 mapping command path

Protected E02 already owns the authoritative mapping operations.

The following existing protected operations are now exposed only through the governed integration path:

- update sheet mapping;
- confirm sheet mapping;
- update field mapping;
- confirm field mapping;
- confirm all suggested mappings;
- finalize mapping.

Integration path:

**UX → App Controller → Pipeline Orchestrator → Pipeline Client / Worker RPC → Protected Pipeline Adapter → Protected E02 operation**

No mapping algorithm was recreated in product code.

## Whole-mapping payload removal

Final mapping confirmation no longer accepts a complete mapping object from the UI/product layer.

`confirmMapping()` now finalizes the current protected-store E02 mapping.

This prevents the product from bypassing protected E02 by constructing or mutating a mapping object and submitting it for finalization.

## Protected adapter hardening

`pipeline/pipeline-adapter.js` now:

- imports the existing protected E02 update/confirm functions;
- stores mapping-review snapshots as frozen objects;
- uses the protected `raw` and controlled config inside the adapter;
- returns governed frozen mapping results;
- finalizes only the current protected-store mapping.

No protected E02 source file changed.

## Controller/orchestrator hardening

The product controller now exposes governed commands:

- `updateSheetMapping(...)`
- `confirmSheetMapping(...)`
- `updateFieldMapping(...)`
- `confirmFieldMapping(...)`
- `confirmAllSuggested()`
- `confirmMapping()`

The orchestrator:

- executes each mapping change as E02-controlled work;
- updates application mapping state only from returned E02 results;
- deep-freezes the product snapshot;
- keeps the run in `MAPPING_REVIEW` until finalization;
- moves to `MAPPING_CONFIRMED` only after protected E02 finalization.

## Worker RPC mapping contract

Worker contract version advanced to:

`HUF-WORKER-v1.2`

New governed commands:

- `UPDATE_SHEET_MAPPING`
- `CONFIRM_SHEET_MAPPING`
- `UPDATE_FIELD_MAPPING`
- `CONFIRM_FIELD_MAPPING`
- `CONFIRM_ALL_SUGGESTED`
- `CONFIRM_MAPPING`

`CONFIRM_MAPPING` carries no whole-mapping payload.

The same-thread fallback exposes the identical command semantics.

## Worker fatal-error lifecycle

The Worker client now fails closed on:

- `error`;
- `messageerror`;
- explicit terminate.

On fatal Worker failure it now:

- marks the client closed;
- terminates the Worker;
- rejects all pending RPC calls;
- rejects subsequent RPC attempts immediately.

This closes `REV-7B0-03`.

## GitHub Pages workflow alignment

The curated `_site` deployment remains.

The Pages workflow was updated to use the current official custom-workflow setup pattern verified during this procedure:

- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v4`
- `actions/deploy-pages@v4`

The deploy job remains dependent on the validated build job.

This closes `REV-7B0-04` before first live deployment.

## Evidence-file packaging improvement

This package contains:

- `VALIDATION_STATUS.json`
- `FINAL_VALIDATION_STATUS.json`
- `RELEASE_MANIFEST.json`
- `PROTECTED_CORE_MANIFEST.json`
- `tests/evidence/phase7ba-test-result.json`

The final validation summary is therefore available inside the ZIP rather than only as an external companion artifact.

This addresses the evidence clarity concern from `REV-7B0-05`.

## Validation suites

Final non-manifest suites:

**15/15 PASS**

Key specific results:

### Mapping-state governance

**20/20 PASS**

Includes:

- wrapper frozen;
- mapping snapshot frozen;
- field array frozen;
- field entry frozen;
- mapping state cloned from adapter result;
- direct nested mutation blocked;
- all six governed adapter mapping operations exposed;
- controller routes sheet/field changes through governed commands;
- finalization carries no whole-mapping payload;
- final confirmed mapping remains recursively frozen;
- mutable internal stores remain hidden from controller callers.

### Worker lifecycle and mapping RPC

**11/11 PASS**

Includes:

- fatal error rejects pending calls;
- fatal error terminates Worker;
- fatal error closes client;
- message-deserialization error fails closed;
- explicit termination closes client;
- sheet mapping update RPC;
- sheet confirmation RPC;
- field mapping update RPC;
- field confirmation RPC;
- confirm-all RPC;
- final mapping confirmation without whole-mapping payload.

### Existing foundation regression

- protected-core manifest: **37/37 PASS**
- protected engine imports: **10/10 PASS**
- state/invalidation: **9/9 PASS**
- state hardening: **6/6 PASS**
- orchestrator/error handling: **10/10 PASS**
- controlled config hardening: **6/6 PASS**
- Worker runtime capability: **4/4 PASS**
- static architecture: **PASS / 0 violations**
- relative imports: **64 checked / 0 unresolved**
- JSON/config parse: **16 / 0 failures**
- JavaScript syntax: **80 / 0 failures**
- curated Pages payload: **PASS**
- Pages workflow contract: **5/5 PASS**

## Release-manifest gate

Payload files governed by release manifest:

**136**

Manifest result:

**136/136 PASS**

- missing: 0
- unlisted: 0
- SHA/size mismatches: 0

ZIP entries:

**137**

Difference is the release manifest itself, which is intentionally excluded from its own payload hash list.

## Fresh packaged-artifact verification

The final ZIP was extracted into a new clean directory.

From the extracted ZIP:

`npm test`

Result:

**PASS**

Protected-core parity from the extracted ZIP:

**27/27 PASS**

Therefore the frozen/downloadable artifact itself—not only the working directory—passes the governed tests.

## File delta from Phase 7B-0

- added files: **7**
- removed/replaced obsolete Phase 7B-0 evidence files: **3**
- changed files: **17**
- unchanged files: **113**

Detailed inventory:

`HUF_KPI_Phase7BA_Changed_File_Inventory_v1.0.json`

## Frozen implementation artifact

`HUF_KPI_Rebuild_Phase7BA_Mapping_Hardening_v0.1.2.zip`

SHA-256:

`8e25d27eff056daab3d75f539a2ac797fa7e9cc2db985dd3188f9ecd79d9e3cb`

Checksum file:

`HUF_KPI_Rebuild_Phase7BA_Mapping_Hardening_v0.1.2.sha256.txt`

## Companion artifacts

`HUF_KPI_Phase7BA_Mapping_Hardening_Report_v1.0.md`

SHA-256:

`24b137703966a9aa6e1a8f9b6edf52494d83fe273d0c8f72591bb4ff2c663fd9`

`HUF_KPI_Phase7BA_Final_Validation_v1.0.json`

SHA-256:

`db33f3bcf32f62d3a26fcae91e4abe0fcf597f042a43e4cc7a95958d129d125d`

`HUF_KPI_Phase7BA_RELEASE_MANIFEST_v1.0.json`

SHA-256:

`d32b1e5b82733e83850e19ee05dd4e5cf707e9ff529c2b8b7d9574f325263599`

`HUF_KPI_Phase7BA_PROTECTED_CORE_MANIFEST_v1.0.json`

SHA-256:

`9d3a93c21d4a0f76a82ebfc707d55031845380b96401619b15b514a046f4e5cb`

`HUF_KPI_Phase7BA_Changed_File_Inventory_v1.0.json`

SHA-256:

`223136d8fcae092efcbe79d8e2a8b0c065a1e9150015a7ef84baad8cd54f7bb6`

## Acceptance decision

**IMP-7B-A PASS / CLOSED**

The product may now proceed to file-intake UX implementation without exposing mutable E02 mapping state.

## Exact next action

**Phase 7 / IMP-7B-B — Upload / sample workbook / controlled blank template implementation**

Scope:

- UX-01 Home / Upload;
- `.xlsx` file picker;
- drag/drop;
- selected-file state;
- replace/clear behavior;
- sample leap/non-leap workbook actions;
- controlled blank `HUF-SS-INPUT-v1.1` template creation/bundling/download;
- local-processing privacy disclosure;
- source-replacement invalidation;
- intake-entry/browser tests.

Workbook Preflight remains IMP-7B-C.

Exception-first Mapping Review remains IMP-7B-D.

No Validation & Correction or Results Dashboard implementation begins until full IMP-7B is closed.



# Procedure IMP-7B-B — Upload / Sample Workbook / Controlled Blank Template Implementation

**Date:** 6 September 2026  
**Phase:** Phase 7 — Controlled Implementation  
**Implementation Batch:** IMP-7B-B  
**Status:** COMPLETE / PASS / FROZEN SUB-BASELINE

## Purpose

Implement UX-01 Home / Upload on top of the frozen IMP-7B-A baseline, while keeping Workbook Preflight and Mapping Review in their separately governed later sub-batches.

## Product version

`0.1.3-upload`

## Implemented workflow

### Workbook selection

Implemented:

- `.xlsx` file picker;
- drag/drop;
- selected-file metadata;
- Replace;
- Clear;
- Review workbook.

The selected browser `File` is private to the controller and is not exposed in application public state.

### Controlled intake entry

`Review workbook` routes through:

**Home UI → Controller → Orchestrator → Pipeline Client / Worker fallback → Protected Adapter → E01 Intake**

No intake logic was recreated in the product layer.

### Source replacement behavior

Selecting a new source after an existing selection/run resets the protected adapter, snapshot registry and application state before accepting the replacement workbook.

### Synthetic sample actions

Bundled:

- leap-year golden sample;
- non-leap golden sample.

Both are explicitly marked:

**Synthetic validation data — not project reporting data.**

Synthetic origin/sample identity is retained through E01 source metadata.

### Controlled blank template

Created:

`HUF-SS-INPUT-v1.1_Blank_Controlled_Template.xlsx`

SHA-256:

`aca2859d6c6f1fc1570e10f6f0c024916c61ae4624b5011c91d95aa981e8d0d4`

The blank template was created from the protected leap golden workbook using `artifact_tool`, not by inventing a new workbook schema.

Preserved:

- 00_Instructions;
- controlled headers;
- formatting;
- validations;
- 99_Lookups;
- all 13 governed sheet names.

Removed:

- synthetic project identity;
- synthetic structure/technical/catchment/rainfall/silt/person-day/evidence rows.

Retained governed identifiers:

- `HUF-SS-INPUT-v1.1`;
- `HUF-DESIGN2-FORMULA-CATALOG-v1.1`;
- `legacy-capacity-v1`.

Formula cells:

**0**

Spreadsheet formula-error scan:

**0 matches**

### Privacy UX

Home explicitly states that the workbook is processed locally in the browser.

No backend workbook upload was introduced.

Project data is not placed in URLs.

## Curated Pages payload

Runtime deployment intentionally includes the controlled template, template manifest, two synthetic sample workbooks and sample manifest.

Development-only tests/docs/tools remain excluded from `_site`.

## Tests

Non-manifest suites:

**19/19 PASS**

New sub-batch suites:

- upload selection/source behavior: **9/9 PASS**;
- sample assets: **8/8 PASS**;
- controlled template: **21/21 PASS**;
- upload UI contract: **16/16 PASS**.

Existing protected/foundation/mapping-hardening suites remain PASS.

Release manifest:

**145/145 PASS**

## Evidence naming correction during closure

Before freezing the package, the current 7B-B test evidence filename was corrected from the inherited `phase7ba-test-result.json` name to:

`tests/evidence/phase7bb-test-result.json`

The package/manifests were regenerated after this correction.

## Packaged-artifact verification

Final ZIP was extracted into a clean directory.

From the extracted ZIP:

`npm test` → **PASS**

Packaged protected E01–E09/config parity versus final v1.0.0:

**27/27 PASS**

## Controlled-methodology impact

**NONE**

Protected methodology files changed:

**0**

## Frozen artifacts

`HUF_KPI_Rebuild_Phase7BB_Upload_v0.1.3.zip`

SHA-256:

`3eba36d7c9c2650812f017970ddfc5ae02ad3cda78dbed60686ffc6ea72ea5d0`

`HUF_KPI_Phase7BB_Upload_Sample_Template_Report_v1.0.md`

SHA-256:

`a13ebb2da0f4bbae6aea9f11509d0b9a7d6b086344e7d4c0e449eae4e31f6699`

`HUF_KPI_Phase7BB_Final_Validation_v1.0.json`

SHA-256:

`fd0cd393cf56e33a2b42a3197e9e10704ad2129aba74339cc19e3a9a9023c99e`

`HUF_KPI_Phase7BB_RELEASE_MANIFEST_v1.0.json`

SHA-256:

`ef9e03c3fe48caf9e36eb42e802f9e7d34388f51fd62dd673fc017b0d5d8aa66`

`HUF_KPI_Phase7BB_Changed_File_Inventory_v1.0.json`

SHA-256:

`4e92c3f19d934c9381f30ad387550d4a74adc820c58039eb7bbeafc6da8e80cb`

`HUF_KPI_Phase7BB_Packaged_Protected_Parity_v1.0.json`

SHA-256:

`19fe8faf654489864201e1a68485e91afcedbe871839e7635d947438929e0fd9`

Controlled blank template:

`HUF-SS-INPUT-v1.1_Blank_Controlled_Template.xlsx`

SHA-256:

`aca2859d6c6f1fc1570e10f6f0c024916c61ae4624b5011c91d95aa981e8d0d4`

## File delta from IMP-7B-A

- added: **10**
- removed: **1** (superseded current-phase test-evidence filename)
- changed: **18**
- unchanged: **118**

## Acceptance decision

**IMP-7B-B PASS / CLOSED**

## Exact next action

**Phase 7 / IMP-7B-C — Workbook Preflight implementation**

Scope:

- UX-02 Workbook Preflight;
- E01 summary/preflight view model;
- controlled sheet inventory;
- row counts;
- detected template version;
- reporting period;
- formula presence;
- preflight error/warning/information grouping;
- source fingerprint display;
- continue-to-Mapping action;
- preflight tests.

Exception-first Mapping Review remains IMP-7B-D.

No Validation & Correction or Results implementation begins until full IMP-7B closes.


## 0.10 Immediate project state after adopting this rule

Historical archaeology:
**FROZEN / COMPLETE at current audit baseline**

Consolidated Gap / Recovery / Productization Matrix:
**FROZEN v1.0**

Product Requirements:
**FROZEN v1.0 — 154 requirements (134 P0 / 15 P1 / 5 P2)**

Technical Architecture:
**FROZEN v1.0 — protected-core, state/invalidation, prepared-view, output and release-evidence architecture defined**

UI/UX redesign:
**FROZEN v1.0 — 21 screens/states, responsive behavior, visual grammar and interaction contracts defined**

Rebuild coding:
**IN PROGRESS — Phase 7 IMP-7B-E clean acceptance repository browser/Pages gates PASS; authoritative production promotion/final freeze pending.**

Current acceptance state:
**Real-XLSX browser acceptance PASS and browser-gated GitHub Pages deployment PASS in `knightfox789/HUF-KPI-acceptance-test`; REV-7BC-03 is closed. The authoritative production repository has not yet been promoted/revalidated.**

Next required action:
**Execute IMP-7B-E5: promote the exact accepted 0.1.6 tree to `knightfox789/HUF-water-potential-calculator`, rerun validation/browser/Pages there, retain production evidence, then freeze the production baseline and close full IMP-7B. Data Preparation remains blocked until that production freeze.**

Design-6 certification closure, PRD, Technical Architecture and UI/UX remain frozen. Protected E01–E09 remain unchanged.


# HUF Supply-Side KPI Calculator
## Master Audit, Recovery and Clean Rebuild Plan

> **START HERE IF THIS WORK IS RESUMED IN A NEW CHAT**
>
> This file is intended to make the entire audit/rebuild project restartable without relying on the original conversation.
> Upload this file together with the evidence packages listed below. Do **not** begin coding immediately. Reconstruct the audit state first, inspect remaining historical ZIPs, freeze the gap analysis, then design the next clean release.

---

# 1. Project Objective

Audit the current final HUF Supply-Side KPI Calculator release, recover useful work from historical development packages, and design a cleaner, more capable, GitHub-ready web tool without compromising the controlled HUF calculation methodology.

The target is **not merely a prettier calculator**.

The intended outcome is:

> **A clean, professional, auditable and maintainable HUF Supply-Side KPI Intelligence and Reporting Tool that preserves the controlled calculation methodology while making its results genuinely useful at structure, village, block, district and project levels.**

---

# 2. Core Rule

Keep the existing final `v1.0.0` release untouched as the protected baseline.

Future work must distinguish between:

## A. Controlled Methodology Layer

- workbook interpretation
- field mapping
- canonicalisation
- validation
- route assignment
- KPI formula calculations
- person-day calculations
- assurance
- aggregation
- audit/manifests
- controlled schemas and policies
- Design-6 evidence / fixtures / goldens

This layer should **not** be rewritten simply because the frontend is weak.

## B. Product / Analytics / Reporting Layer

- landing page
- navigation
- upload workflow
- validation presentation
- dashboard
- geography filters and drill-down
- structure analytics
- charting
- Excel/CSV exports
- PDF reports
- branding
- help/methodology/privacy pages
- responsive design

Current evidence indicates that many deficiencies are in this second layer.

**Principle:** Calculate truth once → preserve it → present it in multiple useful ways.

Dashboard filters, charts, exports and reports must not silently change route assignment or KPI calculations.

---

# 3. Evidence Packages to Keep Together

## Step 1 — Current Final Release

**File:** `HUF_Supply_Side_KPI_Calculator_v1.0.0_FINAL(2).zip`

Purpose:
- authoritative current implementation
- E01–E09 baseline
- current UI/output limitations
- deployment/release baseline

SHA-256:
`6ff4a19f65e2bd36a38863c98289ad5e5b45870aabf3513574ee134285302392`

## Existing Maintenance Guide

**File:** `HUF_Supply_Side_KPI_Calculator_v1.0.0_FUTURE_CHANGE_GUIDE(1).md`

Purpose:
- change governance
- risk classification
- versioning
- test expectations
- rollback rules

SHA-256:
`68af94b18dda240061e9a7f2b1fbdb64d314de4dbdb5269974d5aba46aeb91ec`

## Existing Obsidian Vault

**File:** `HUF_KPI_Calculator_v1.0.0_Obsidian_Vault(1).zip`

Purpose:
- architecture
- engine notes
- release baseline
- controlled configs
- testing/deployment
- change-management templates

SHA-256:
`0209537013ad8cb568cc24871597b51bb72f6e7c66e735a1d79a9b0f461b5635`

## Step 2 — Clean Product/Architecture Reference

**File:** `village-water-budget-intelligence-v1.1.0-final-github-release(4).zip`

Purpose:
- architectural reference only
- clean repo/module separation
- dashboard architecture
- export architecture
- PDF/report architecture
- branding configuration
- GitHub release discipline

**Important:** Do **not** copy this UI exactly.

SHA-256:
`ec530348939edddd51456ff01ac127cf33c3e7889e48c5aba7d0d2a525ad9239`

## Step 3A — Historical Design 1 Package

**File:** `HUF_Design1_KPI_Route_Registry_v0.1(4).zip`

Purpose:
- early routing/methodology lineage
- structure capacity map
- route matrix
- Design-1 methodology evidence

SHA-256:
`fa3d98c928d30bcc6c077bcecc35ba39badc77d04166a3261183e0988a32472b`

## Remaining Historical HUF ZIPs

Status:
- **NOT YET REVIEWED**
- to be supplied and audited one by one
- each must be fingerprinted and added to the evolution register

---

# 4. Findings from Step 1 — Current Final Release

## 4.1 Core engine is stronger than the frontend

The final release contains a substantial controlled pipeline:

**E01 → E02 → E03 → E04 → E05 → E06 → E07 → E08 → E09**

Observed internal capabilities include:
- structure-level results
- underlying water volumes in m³
- BL-related output
- person-days
- assurance status
- controlled aggregation
- audit/run manifests

Therefore, the working assumption is:

> **Protect the engine unless the audit finds a genuine methodology defect.**

## 4.2 Geography aggregation already exists

E08 supports:

**Structure → Village → Gram Panchayat → Block → District → PIA → Project**

Therefore, village/block/district reporting does **not necessarily require a new methodology**. It may mainly require a new analytics/presentation/export layer over existing controlled aggregation results.

## 4.3 Current public output is too limited

The frontend currently exposes only a small portion of what exists internally.

Observed weaknesses include:
- project-level summary emphasis
- insufficient geography drill-down
- insufficient structure-level analysis
- insufficient structure-type analysis
- very limited management reporting
- Audit JSON over-emphasised relative to user-oriented outputs
- insufficient Excel/PDF delivery

## 4.4 Units need a clearer presentation strategy

Current output emphasis on `K m³` is too restrictive.

Future presentation should evaluate:
- m³
- thousand m³
- million m³
- BL
- HUF-approved reporting units

Underlying canonical calculation values must remain unchanged.

## 4.5 Personal/professional branding is missing from active UI

The final active frontend does not properly expose professional branding.

Future design should consider subtle, appropriate identity such as:
- Kaushal Gadariya
- Soil and Water Conservation Engineer
- portfolio
- LinkedIn

Branding should remain secondary to the HUF/DSC tool purpose.

## 4.6 Frontend contains too much implementation/deployment language

Current UI exposes technical concepts such as:
- Engines 1–9
- browser-side methodology
- local processing
- no backend
- audit/deployment wording

These concepts may remain under:
**Methodology / Privacy / Technical Information**

but should not dominate the normal user journey.

## 4.7 Existing frozen output contracts are richer than the active frontend

The final design evidence anticipates richer exports such as:
- CSV
- XLSX
- JSON
- reporting summary exports
- audit packages
- daily trace exports

The active UI does not fully expose these capabilities.

## 4.8 Dormant/legacy UI styling exists

The final package contains CSS sections/classes suggesting unfinished or inherited work related to:
- hybrid dashboard
- filters
- village views
- charts
- export centre
- report centre
- PDF reporting
- flagship visualisations
- personal-brand chrome

These should be treated as **evidence to investigate**, not automatically reused.

## 4.9 Release documentation inconsistency

A release-status inconsistency was observed:
- one status source records GitHub Pages acceptance as reported PASS
- another Design-6 status source still records deployed acceptance as NOT VERIFIED / release-candidate style status

This should be reconciled in the future clean package.

## 4.10 Final-release integrity

The Step-1 release manifest was checked during audit:
- **195/195 listed file hashes matched**
- no manifest-integrity problem was identified

---

# 5. Findings from Step 2 — Village Water Budget Intelligence

This package should be treated as a **clean architecture/product reference, not a UI template**.

## 5.1 Strong ideas worth borrowing

### Separation of concerns

The project separates:
- core
- engines
- services
- UI
- exports
- PDF/reporting
- configuration

This is one of the strongest ideas for the future HUF tool.

### Dashboard consumes prepared results

The dashboard does not need to redefine calculation methodology.

Desired HUF principle:

**Controlled HUF E01–E09 → Result/Analytics Model → Dashboard / Export / Reports**

### Configuration-based presentation

Useful concept:
- branding config
- dashboard config
- export config
- reporting config
- visual grammar config

For HUF, presentation configuration must remain clearly separated from controlled methodology configuration.

### Export architecture

The Water Budget tool demonstrates:
- multi-sheet Excel output
- CSV
- management tables
- technical/M&E tables
- scope-aware exports

The HUF tool should create HUF-specific outputs rather than copy Water Budget tables.

### PDF/report architecture

The Water Budget tool demonstrates:
- multiple reporting levels
- management vs technical report modes
- single/combined/bulk PDFs
- ZIP packaging

This is highly relevant to HUF reporting architecture.

### Visual grammar

Charts should answer management/M&E questions rather than simply visualise every available field.

### Release discipline

The Step-2 package showed:
- clear GitHub structure
- release manifest
- strong hash integrity
- modular source layout
- documented deployment/privacy/architecture

## 5.2 Step-2 package integrity

During audit:
- 89 physical files observed
- 88 files tracked in the release manifest + the manifest itself
- **88/88 listed hashes matched**
- 0 JavaScript syntax failures identified
- 44/44 local ES-module imports resolved

## 5.3 Things NOT to copy blindly

Do not automatically copy:
- UI layout
- colour palette
- navigation design
- dashboard cards
- specific charts
- Water Budget terminology
- default MCM assumption

Technical issues observed that should be improved in the future HUF release:
- production debug exposure (`__VWB_DEBUG__`) should not be carried over
- runtime CDN dependencies should be evaluated for determinism
- browser acceptance harness should remain available in source repo
- accumulated CSS override layers should be avoided
- duplicated branding definitions should be reduced
- production deploy artifact should contain only intentionally public files
- public UI should not over-emphasise engine numbering

SHA-256 of reference ZIP:
`ec530348939edddd51456ff01ac127cf33c3e7889e48c5aba7d0d2a525ad9239`

---

# 6. Findings from Step 3A — Design 1 Route Registry v0.1

This is **methodology evidence**, not an old web UI.

Contents include:
- Design-1 methodology document
- route registry
- structure-capacity mapping
- water-route matrix

## 6.1 Route continuity

All 10 early water-route IDs survived into the final v1.0.0 architecture.

Examples include:
- WTR-111-NEW
- WTR-111-REJ-A
- WTR-111-REJ-B
- WTR-112-NEW
- WTR-112-REJ-A
- WTR-112-REJ-B
- WTR-LFP
- WTR-HOLD-PARTLY-LINED
- WTR-EXCL-GOV
- WTR-EXCL-SUB

## 6.2 Structure capacity continuity

The early package contains 17 structure-type capacity mappings that substantially survive into the final architecture.

## 6.3 Methodology became more explicit over time

Later route definitions refined details such as:
- infiltration treatment
- evaporation handling
- standard vs advanced area logic
- calendar-month evaporation selection
- separation of registry vs routing policy responsibilities

This suggests evolution/refinement rather than wholesale replacement of the original methodology.

## 6.4 Aggregation existed from early design stage

Design 1 already anticipated:

**Structure/Transaction → Village → Gram Panchayat → Block → District → PIA → Project**

This strengthens the conclusion that future geography-level reporting is aligned with the original controlled architecture.

## 6.5 Key early principles to preserve

- one official water route per structure/run
- new vs rejuvenation attribution must remain distinct
- rejuvenation alternatives must remain mutually exclusive
- do not claim pre-existing capacity as incremental rejuvenation benefit
- do not invent a method for partly lined structures
- excluded categories remain excluded unless methodology is formally changed
- null/blank must not silently become zero
- assurance must not silently rewrite valid calculation values
- Accepted / Provisional / Warning / Not Calculated / Excluded should remain distinguishable
- dashboard filters must not change route assignment or KPI numbers

SHA-256:
`fa3d98c928d30bcc6c077bcecc35ba39badc77d04166a3261183e0988a32472b`

Classification:
**METHODOLOGY EVIDENCE — KEEP**

---


## Step 3B — Design 1 FROZEN v1.0

**File:** `HUF_Design1_FROZEN_v1.0(3).zip`

Purpose:
- formal freeze wrapper for the earlier Design-1 v0.1 working baseline
- establishes a controlled baseline for Design 2 and later implementation
- adds explicit no-edit-in-place change control and cryptographic manifest

SHA-256:
`5a732772104af8e5616ff175e22bb3349bdd3239ee7b53c6e1f399d564087be1`

### Findings

- Package contains 6 files: the same 4 substantive Design-1 v0.1 artifacts plus `README_FROZEN.md` and `FROZEN_MANIFEST.json`.
- All 4 substantive files are **byte-for-byte identical** to the previously reviewed `HUF_Design1_KPI_Route_Registry_v0.1` package.
- All 4 hashes recorded in `FROZEN_MANIFEST.json` were independently verified and PASS.
- Frozen date recorded by the package: **2026-09-04**.
- Freeze rule: no baseline file should be edited in place; future route changes require a new Design-1 version and explicit migration/change-control note.
- Governance caveat remains explicit: expert-selected methodology positions are still a development baseline pending formal written HUF confirmation.
- Final calculator Design 1 v1.1 explicitly declares `depends_on: Design 1 v1.0`.
- Design 1 v1.1 keeps all 10 route IDs unchanged and introduces a field-method simplification:
  - verified base area = standard infiltration area;
  - stage-area curve = optional advanced method;
  - evaporation = 12 monthly mean daily evaporation values selected by calendar month;
  - standard evaporation area = proportional full surface area × daily fill fraction.
- The later v1.1 registry is therefore best understood as a controlled amendment/refinement of the frozen v1.0 baseline rather than a replacement of route architecture.

Classification:
**METHODOLOGY EVIDENCE / CONTROLLED FREEZE BASELINE — KEEP**



## Step 3C — Design 2 Formula Catalog v0.1

**File:** `HUF_Design2_Formula_Catalog_v0.1(3).zip`

Purpose:
- early Design-2 working formula specification
- converts frozen Design-1 route families into explicit browser-executable formula contracts
- establishes formula IDs, formula chains, numerical policy and golden/reference cases

SHA-256:
`67163ec692112c117b4516348be954bb8760a81a9585957aac1ad1c128910416`

### Package contents

- `HUF_Design2_Formula_Catalog_v0.1.md`
- `HUF_Design2_Formula_Catalog_v0.1.xlsx`
- `HUF_Design2_Formula_Catalog_v0.1.json`
- `HUF_Design2_Formula_Catalog_v0.1.csv`
- `HUF_Design2_Golden_Cases_v0.1.csv`

No frozen hash manifest is present in this working-design package.

### Status / dependency

- Version: `0.1`
- Depends on: `Design 1 FROZEN v1.0`
- SOP basis: `HUF Supply-Side SOP Version 2 (August 2025)`
- Status: **Working design for technical review; not yet frozen**

### Internal inventory

The package defines:
- **74 formula IDs**
- **25 golden/reference cases**
- **13 formula modules**
- route-to-formula chains for all active Design-1 routes
- 9 review gates

Cross-format consistency checks during this audit found:
- JSON formula count = 74
- CSV formula count = 74
- XLSX Formula Catalog rows = 74
- formula IDs are unique and aligned across JSON/CSV/XLSX
- JSON golden-case count = 25
- Golden CSV count = 25
- XLSX Golden Cases rows = 25
- golden-case IDs align across the supplied representations

### Formula modules

Design 2 v0.1 covers:
- Units
- Geometry
- Capacity
- Rejuvenation
- Siltation
- Catchment / Cascade
- Rainfall
- DDW / Runoff
- Stage / Area
- Daily Balance
- KPI
- Person-days
- Numerical Policy

### Core Design-2 rules

The working design explicitly establishes:
- formula logic is not stored in the field input workbook
- blank/null must never silently become zero
- fallback/alternative methods are explicit and non-additive
- full internal precision is retained
- rounding is presentation-only
- every result should carry formula IDs and formula-catalog version
- DDW/runoff legacy-v1 fallback remains provisional until calibrated/validated

### KPI 1.1.1 daily balance

Design 2 v0.1 defines the sequence:

`available = generated runoff + previous closing storage`

`opening = min(available, eligible capacity)`

`overflow = max(0, available - opening)`

`actual evaporation = min(opening, potential evaporation)`

`actual infiltration = min(opening - actual evaporation, potential infiltration)`

`closing = max(0, opening - actual evaporation - actual infiltration)`

Final KPI identity:

`KPI 1.1.1 = cumulative infiltration + final closing storage`

Mandatory independent cross-check:

`cumulative captured runoff - cumulative evaporation`

Both identities must reconcile within the numerical tolerance.

### KPI 1.1.2

`KPI 1.1.2 = eligible single-fill physical capacity`

For rejuvenation, exactly one incremental-capacity route applies. Daily rainfall simulation is not used for KPI 1.1.2.

### Important early Design-2 refinement

Design 2 v0.1 introduced stage/storage formulas:
- `STG-001` validate stage-area observations
- `STG-002` derive cumulative stage-storage by trapezoidal integration
- `STG-003` invert stored volume to current water depth
- `BAL-014` interpolate evaporation area
- `BAL-015` interpolate wetted-base/infiltration area

At v0.1 these were treated as part of the working KPI 1.1.1 route and still required technical review.

### Review-gate status at v0.1

PASS:
- D2-G01 Formula IDs unique
- D2-G02 Every active Design-1 route has formula chain
- D2-G03 Alternative/rejuvenation methods non-additive
- D2-G04 Null/zero/boundary behaviour explicit
- D2-G05 KPI 1.1.1 identity + mass-balance test defined

OPEN:
- D2-G06 DDW/runoff calibration or accepted fallback governance
- D2-G07 Stage-storage refinement technical acceptance
- D2-G08 Partly-lined physical method
- D2-G09 Formal HUF confirmation of expert-selected decisions

### Comparison with final calculator Design 2 v1.1

The final release uses `HUF-DESIGN2-FORMULA-CATALOG-v1.1` with **78 formulas**.

All **74 v0.1 formula IDs survive** in v1.1. No v0.1 formula ID was removed.

Four formulas were added later:

- `GEO-004` — full surface area source for standard evaporation
- `EVP-001` — daily evaporation rate from 12 monthly mean daily values
- `BAL-016` — verified base area as standard infiltration area
- `BAL-017` — infiltration-area method router

Golden/reference cases expanded from:
- **25 cases in v0.1**
to
- **29 cases in v1.1**

The four added cases specifically test:
- standard verified-base infiltration
- monthly mean daily evaporation lookup
- proportional evaporation
- leap-day monthly evaporation

### Major methodological evolution from v0.1 to v1.1

The v0.1 design made stage-area/stage-storage logic central to the KPI 1.1.1 working chain.

The final v1.1 design simplified the standard field method:

**Standard infiltration**
→ one verified base-area measurement (`BAL-016`)

**Advanced infiltration**
→ stage-area/wetted-base interpolation remains optional

**Standard evaporation rate**
→ 12 monthly mean daily evaporation values (`EVP-001`)

**Standard evaporation area**
→ full surface area × fill fraction (`GEO-004` + `BAL-005`)

**Advanced stage-area**
→ optional rather than compulsory

Thus the final release did not discard Design 2 v0.1. It preserved all 74 formula IDs and added four formulas to support a simpler, more practical standard field method.

### Final implementation traceability

The final `engine06-calculation.js` references the added v1.1 formula IDs and only includes `STG-001..003`, `BAL-014` and `BAL-015` when `Advanced stage-area` is selected. The final test evidence also references the added formulas in Design-6 validation and golden outputs.

### Governance continuity

The following concerns originate clearly in this early Design-2 package and remain important audit topics:
- formal HUF confirmation of expert-selected methodology positions
- DDW/runoff legacy fallback calibration/validation
- partly-lined structures remaining held until an approved physical method exists
- transparent capacity lineage and no silent substitutions
- no destructive rounding

Classification:
**METHODOLOGY EVIDENCE / FORMULA-LINEAGE BASELINE — KEEP**

This package is not a source of lost UI/dashboard/export functionality. Its value is formula lineage, golden-case history, governance flags, and understanding why the final v1.1 field method differs from the early working design.



## Step 3D — Design 2 FROZEN v1.0

**File:** `HUF_Design2_FROZEN_v1.0(3).zip`

Purpose:
- formal freeze of the Design-2 formula baseline
- converts the earlier Design 2 v0.1 working design into a controlled calculation-design baseline
- records accepted decisions for stage/storage refinement, DDW/runoff governance and partly-lined structures
- adds freeze governance and cryptographic manifest

SHA-256:
`2750aa1e4b1bc7a02a38b44cdc933a4f76336f94eeb3e2fe2ffdbfc3115777aa`

### Package contents

6 files:
- `HUF_Design2_Formula_Catalog_v1.0.csv`
- `HUF_Design2_Formula_Catalog_v1.0.xlsx`
- `HUF_Design2_Formula_Catalog_v1.0.json`
- `HUF_Design2_Golden_Cases_v1.0.csv`
- `README_FROZEN.md`
- `FROZEN_MANIFEST.json`

Frozen date:
**2026-09-04**

Depends on:
**Design 1 FROZEN v1.0**

SOP basis:
**HUF Supply-Side SOP Version 2 (August 2025)**

### Integrity

The manifest lists 5 payload files (excluding the manifest itself).

Independent verification during this audit:
- **5/5 listed SHA-256 hashes PASS**

### Formula/golden inventory

The freeze retains:
- **74 formula IDs**
- **25 golden/reference cases**
- the same route-to-formula map as Design 2 v0.1
- the same golden-case set as Design 2 v0.1

No formula ID was added or removed at freeze.

### What changed from Design 2 v0.1

The formula logic is effectively unchanged.

The freeze primarily changes governance/status:

1. `STG-001..003` stage/storage refinement is formally accepted into the frozen Design-2 baseline.
2. DDW/runoff adopts a **calibration-first policy**; recovered legacy-v1 equations remain only a versioned provisional fallback until calibration/approved-case validation is completed.
3. Partly-lined structures remain on **HOLD**; no guessed infiltration formula is introduced and the compliant automatic result remains `not-calculated`.
4. The catalog becomes a frozen controlled baseline and future formula/numerical-policy changes require a new Design-2 version.

### Review-gate evolution

The earlier v0.1 review gates had four OPEN items:
- DDW/runoff governance
- stage/storage technical acceptance
- partly-lined method
- formal HUF confirmation

At frozen v1.0:
- D2-G06 becomes **ACCEPTED POLICY** — calibration-first with provisional fallback
- D2-G07 becomes **ACCEPTED** — STG-001..003 frozen
- D2-G08 becomes **ACCEPTED HOLD** — partly-lined remains intentionally not-calculated
- D2-G09 remains **OPEN external governance** — formal HUF confirmation pending

### Cross-format consistency issue discovered

A small but important documentation inconsistency exists inside the frozen package:

- JSON and CSV correctly mark `STG-001`, `STG-002`, `STG-003` as `FROZEN_DESIGN_BASELINE` and add freeze-acceptance notes.
- `README_FROZEN.md` and the XLSX Review Gates also state that STG-001..003 were accepted/frozen.
- However, the XLSX **01_Formula_Catalog** sheet still carries the old v0.1 status `DESIGN2_REFINEMENT_HUF_PENDING` for those three rows and does not include the acceptance notes.

This appears to be a stale workbook-status/documentation issue rather than a formula-logic difference. It should be recorded as an example of why future release generation should enforce cross-format consistency automatically.

A second stale metadata issue exists in the frozen JSON:
`remaining_governance_flags` still includes a sentence saying the new stage-storage refinement requires technical review before Design 2 freeze, even though the same file's `freeze_approvals` explicitly records the refinement as accepted.

Again, this is a documentation/status inconsistency, not a calculation change.

### Evolution into final Design 2 v1.1

Final v1.1 expands the catalog from:
- **74 → 78 formulas**
- **25 → 29 golden/reference cases**

No frozen v1.0 formula ID is removed.

Added in v1.1:
- `GEO-004`
- `EVP-001`
- `BAL-016`
- `BAL-017`

The later amendment also changes the standard field method:
- monthly mean daily evaporation becomes the standard evaporation input
- proportional full-surface-area evaporation becomes standard
- verified base area becomes the standard infiltration area
- STG-001..003 and stage-area interpolation become an optional advanced method

Substantive changes to existing v1.0 formulas in v1.1 are concentrated in:
- `UNT-004`
- `STG-001`
- `STG-002`
- `STG-003`
- `BAL-014`
- `BAL-015`
- `BAL-005`
- `BAL-008`

All other shared formula IDs mainly receive the new formula-version label while retaining their underlying logic.

### Governance significance

This package is the true controlled formula baseline immediately before the later v1.1 field-method amendment.

It confirms:
- historical formula version must remain traceable
- formula logic must not be edited in place
- partly-lined HOLD was intentional
- DDW/runoff fallback was intentionally provisional
- stage/storage was accepted at v1.0, then later demoted to an optional advanced method in v1.1

Classification:
**METHODOLOGY EVIDENCE / CONTROLLED FORMULA FREEZE BASELINE — KEEP**

No lost UI/dashboard/export feature is present in this package.



## Step 3E — Design 3 FROZEN v1.0

**File:** `HUF_Design3_FROZEN_v1.0(3).zip`

Purpose:
- formal controlled-input workbook/schema baseline
- converts frozen Design 1 routing and frozen Design 2 formula dependencies into a user-entered workbook contract
- defines sheet grain, field IDs, route-specific requiredness, missing-value rules and browser import schema
- explicitly keeps calculation logic out of the workbook

SHA-256:
`4bbe15a76cd8b997edb96fb6a444bd611fa109b0da8d7cde1716d6315e8651cd`

### Package contents

9 files:
- `FROZEN_MANIFEST.json`
- `HUF_Design3_Data_Dictionary_v1.0.csv`
- `HUF_Design3_Route_Requiredness_v1.0.csv`
- `HUF_Design3_Route_Requiredness_v1.0.json`
- `HUF_Design3_Validation_Report_v1.0.xlsx`
- `HUF_Design3_Validation_Summary_v1.0.md`
- `HUF_Design3_Web_Import_Schema_v1.0.json`
- `HUF_Supply_Side_Controlled_Input_Template_v1.0.xlsx`
- `README_FROZEN.md`

Frozen date:
**2026-09-04**

Depends on:
- Design 1 FROZEN v1.0
- Design 2 FROZEN v1.0

### Integrity

The frozen manifest lists 8 payload files (excluding the manifest itself).

Independent verification during this audit:
- **8/8 listed SHA-256 hashes PASS**

### Frozen workbook/schema inventory

Design 3 v1.0 defines:
- **135 unique controlled field IDs**
- **11 working input sheets**
- **2 support sheets** (`00_Instructions`, `99_Lookups`)
- **13 workbook sheets total**
- **10/10 Design-1 water routes audited PASS**
- **KPI 1.2.1 person-day route PASS**
- **74/74 Design-2 formula dependencies covered**
- **official workbook formula cells = 0**

The formula-free workbook rule was independently checked during this audit: no formula records were found in the controlled input template.

### Workbook contract

Key frozen rules:
- exactly one reporting run per workbook
- header row = 1; first data row = 2
- formulas are not allowed in controlled input cells
- calculations belong in the versioned browser engine
- blank/null = unknown and must never silently become zero
- foreign keys must resolve to controlled parent/group records
- unknown columns must be explicitly mapped or excluded, never silently interpreted

### Major corrections made before Design 3 freeze

The validation report records 21 field/schema changes. High-impact corrections include:

**Removed duplicate/unsafe inputs**
- Surface Class
- Original Construction Year
- Measured Surface Area
- Measured Base Area
- duplicated Reporting Year fields
- Rainfall Unit selector
- Water Parameter Valid From / Valid To
- manual Monsoon Number
- manual Silt Loss Method

Reason:
these values were either derived, canonically fixed, unsupported by frozen methodology, or could contradict routing/calculation logic.

**Added missing dependencies**
- State
- Structure Hydrological / Administrative Zone
- Eligibility Approval Evidence ID
- Person-Day Work Scope / Activity

**Structural correction**
The earlier 43-column Structures sheet was split into:
- `02_Structures` — identity, geography and routing controls
- `03_Technical` — geometry, capacity/rejuvenation inputs and hydrology links

**Reporting-run correction**
The workbook was restricted to exactly one reporting run because downstream sheets did not contain a run foreign key.

**Rainfall correction**
Daily rainfall was fixed to canonical `mm/day`.

**Silt correction**
- first-monsoon zero-silt is derived
- monsoon number is derived
- silt-loss family is derived from assessment/data
- block/type sample population is derived from the Structures population

**Person-day correction**
Work Scope / Activity became core so participant/date/structure deduplication can be combined with work-scope/category exclusivity.

### Stage-area rule in frozen v1.0

Because Design 2 v1.0 had no approved simple infiltration-area fallback:
- `08_Stage_Area` was mandatory for every unlined KPI 1.1.1 route
- stage-specific wetted-base infiltration was therefore a compulsory input path

This is historically important because it was later changed by Design 1/2/3 v1.1.

### Rainfall source rules

Design 3 v1.0 explicitly requires:
- nearest station → structure + station coordinates
- same-zone source → structure + station hydrological/administrative zone
- expert selection → rationale

This is useful evidence for future validation/help text.

### Comparison with final calculator Design 3 v1.1

The final release uses:
`HUF-SS-INPUT-v1.1`

and the final validation rulebook explicitly depends on:
`HUF Design 3 FROZEN v1.1`.

The final v1.1 schema contains:
- **147 fields**, versus 135 in v1.0

Field-family evolution:
- 9 old `PAR-*` fields from `07_Water_Params` are removed
- 18 new `HYP-*` fields are introduced in `07_Hydro_Params`
- `CTL-014` becomes **Default Area Calculation Method**
- Prepared By / Run Notes shift to `CTL-015` / `CTL-016`
- `TEC-020` becomes **Full Surface Area**
- `TEC-021` becomes **Verified Base Area**
- `TEC-022` becomes **Hydro Parameter Group ID**
- `TEC-023` is added as **Area Method Override**
- `TEC-024` becomes **Stage-Area Group ID**

Sheet evolution:
- `07_Water_Params` → `07_Hydro_Params`
- `08_Stage_Area` → `08_Stage_Area_Optional`

The final v1.1 workbook contract changes hydrology to:
- one Hydro Parameter Group row
- one infiltration rate
- Jan–Dec mean daily evaporation values
- standard simple area method by default
- optional advanced stage-area method

This is consistent with the already-observed Design 1/2 v1.1 field-method simplification.

### Important design lineage

Design 3 v1.0:
`stage-area mandatory for unlined KPI 1.1.1`

→ Design 1/2 v1.1 amendment:
`verified base area = standard infiltration; monthly evaporation; proportional surface-area evaporation`

→ Design 3 v1.1:
`07_Hydro_Params + verified base/full-surface fields + optional 08_Stage_Area_Optional`

So the final input schema was materially simplified for field practicality while preserving an advanced stage-area option.

### New product/audit finding — active template availability

In the examined final `v1.0.0` release package:
- the active schema is `HUF-SS-INPUT-v1.1`
- many test/fixture XLSX files are included
- but no blank user-facing `HUF-SS-INPUT-v1.1` controlled input template was found
- no obvious frontend “Download input template” action was found

This should remain an **INVESTIGATE / likely ADD** item until all historical packages are reviewed.

Likely future requirement:
> The production tool should provide a clearly version-matched, downloadable controlled input template (or equivalent template-generation function) whose version exactly matches the active schema and validation rules.

A stale v1.0 template must not be distributed with a v1.1 engine without explicit migration/version handling.

### Future product implications

Design 3 shows that the input experience deserves its own product layer.

Potential future improvements, while preserving controlled field IDs:
- downloadable active template
- clearer sheet/field guidance
- route-aware “what fields are required?” help
- schema version visibility
- mapping assistance for aliases
- explicit unknown-column mapping/exclusion
- validation messages linked to field/sheet requirements
- clear separation between workbook data entry and browser-side calculation

Classification:
**METHODOLOGY EVIDENCE / CONTROLLED INPUT-SCHEMA FREEZE BASELINE — KEEP**

No historical dashboard/export UI is present here, but this package is directly relevant to future upload, mapping, validation and template UX.



## Step 3F — Designs 1, 2 and 3 REASSESSED & FROZEN v1.1

**File:** `HUF_Designs_1_2_3_REASSESSED_FROZEN_v1.1(3).zip`

Purpose:
- controlled consolidated reassessment of Design 1 routing, Design 2 formulas and Design 3 input schema
- formally implements the simplified standard KPI 1.1.1 field method
- provides the exact v1.1 controlled design baselines subsequently used by the final web application
- validates readiness to proceed to Design 4

SHA-256:
`616450eae76f8bfefabaa90dc955b5a46b3515fabdad74ea16b8867c42f42205`

Frozen date:
**2026-09-04**

### Package structure

The package contains three separately frozen design subpackages plus consolidated validation material:

**Design 1 FROZEN v1.1**
- Route Registry v1.1 JSON
- Structure Capacity Map v1.1 CSV
- Water Route Matrix v1.1 CSV
- README
- Frozen manifest

**Design 2 FROZEN v1.1**
- Formula Catalog v1.1 JSON / CSV / XLSX
- Golden Cases v1.1 CSV
- README
- Frozen manifest

**Design 3 FROZEN v1.1**
- Data Dictionary v1.1 CSV
- Route Requiredness v1.1 JSON
- Web Import Schema v1.1 JSON
- Controlled Input Template v1.1 XLSX
- Designs 1–3 Validation Report v1.1 XLSX
- README
- Frozen manifest

**Package-level**
- `README.md`
- `VALIDATION_STATUS.json`
- two preview PNGs illustrating the v1.1 template instructions and Hydro Parameters sheet

### Integrity

Independent manifest verification during this audit:

- Design 1 manifest: **4/4 PASS**
- Design 2 manifest: **5/5 PASS**
- Design 3 manifest: **6/6 PASS**

Total frozen payload hashes verified:
**15/15 PASS**

### Consolidated validation status

`VALIDATION_STATUS.json` records overall **PASS** and `ready_for_design4: true`.

Validated state:
- Design 1 routes: **10/10 PASS**
- Design 2 formula sources: **78/78 PASS**
- Design 2 golden cases: **29 defined**
- simplification-specific cases G-026..G-029: PASS
- Design 3 standard stage-area: **NOT REQUIRED**
- Design 3 standard base area: **Verified Base Area**
- evaporation: **12 monthly mean daily values in mm/day**
- leap-day evaporation: **PASS — February value applies to 29-Feb**
- daily rainfall calendar completeness is delegated to Design 4, which must use actual calendar 365/366-day logic and must not hard-code 365

### Validation workbook evidence

The consolidated validation report records:

**Overall**
- Designs 1–3 reassessment: PASS
- ready to proceed to Design 4

**Numerical tests**
- Verified base infiltration: PASS
- July monthly evaporation lookup: PASS
- proportional evaporation: PASS
- leap-day evaporation: PASS

**Route audit**
- 10 water routes: PASS
- KPI 1.2.1 person-day route: PASS

**Formula coverage**
- 78/78 Design-2 formula dependency sources resolved

**Workbook**
- 147 fields
- 0 official calculation formula cells

### Exact relationship to the final v1.0.0 calculator

This is the strongest lineage finding so far.

The following files from this historical package are **byte-for-byte identical** to the active controlled configuration files in the protected final `v1.0.0` calculator:

1. `HUF_Design1_Route_Registry_v1.1.json`
   = final `config/route-registry-v1.1.json`

   SHA-256:
   `52aed51b993c496385be9b3f549b944d73a070a5fbe50752f80d6046316b75de`

2. `HUF_Design2_Formula_Catalog_v1.1.json`
   = final `config/formula-catalog-v1.1.json`

   SHA-256:
   `f573d5480493e8d13daab4be3d6e41e1b2d0d180c21cf995657cbbe279618cdc`

3. `HUF_Design3_Web_Import_Schema_v1.1.json`
   = final `config/input-schema-v1.1.json`

   SHA-256:
   `5a7aefcf3732f233157f3b96f3952329fe36883cdd90b29f4104ef2b23e810d1`

All:
- 10 route IDs align exactly
- 78 formula IDs align exactly
- 147 controlled field IDs align exactly

Therefore:

> **This reassessed/frozen v1.1 package is the direct controlled Design 1–3 source baseline for the final web calculator, not merely a historical approximation.**

The final application's `app-config.json` explicitly references:
- `HUF-DESIGN1-ROUTE-REGISTRY-v1.1`
- `HUF-DESIGN2-FORMULA-CATALOG-v1.1`
- `HUF-SS-INPUT-v1.1`

which correspond directly to this package.

### Final v1.1 standard field method

The consolidated package freezes the simplified KPI 1.1.1 standard field workflow:

- one Verified Base Area (m²)
- one infiltration rate (mm/hour)
- 12 monthly mean daily evaporation values, Jan–Dec (mm/day)
- daily rainfall
- normal structure/catchment inputs

Daily use:
- evaporation rate = value for that calendar month
- evaporation area = Full Surface Area × daily Fill Fraction
- potential infiltration = Verified Base Area × infiltration rate × 24 / 1000
- actual evaporation and infiltration remain capped by available stored water
- stage-area is optional advanced only

Leap year:
- 29 February uses the February monthly evaporation value
- rainfall completeness must follow the actual calendar period

### Definitive recovery finding — v1.1 controlled input template

A major recoverable artifact has now been found:

`HUF_Supply_Side_Controlled_Input_Template_v1.1.xlsx`

This is the exact schema generation corresponding to:
`HUF-SS-INPUT-v1.1`

The protected final release uses this exact v1.1 schema but does **not** include a blank user-facing v1.1 input template or an obvious Download Template action.

Therefore the earlier Step-3E item:
**INVESTIGATE / likely ADD**

is now upgraded to:

> **RECOVER / ADD TO FUTURE PRODUCT — authoritative v1.1 blank controlled input template exists in this historical package.**

Before inclusion in a future production release, the template should still be regression-checked against the active E01–E04 import/mapping/validation pipeline. However, it should be treated as the authoritative historical candidate rather than recreated from memory.

### Template UX evidence

The v1.1 template contains a useful `00_Instructions` sheet explaining:
- template version
- verified base area requirement
- infiltration rate
- Jan–Dec evaporation
- leap-day behaviour
- standard evaporation area
- optional stage-area
- rainfall
- blank/null rule
- no-formula rule
- route-level required sheets and simple field requirements

The `07_Hydro_Params` sheet presents:
- Hydro Parameter Group ID
- Infiltration Rate
- Infiltration Source
- Soil Texture
- Jan–Dec Mean Daily Evaporation
- Evaporation Source
- Notes

These are useful evidence for future template/help UX. They should inform a cleaner product experience, not be copied blindly as UI design.

### Design evolution now firmly established

**Frozen v1.0**
- stage-area mandatory for unlined KPI 1.1.1
- 74 formulas
- 25 golden cases
- 135 input fields

→ **Reassessed/Frozen v1.1**
- verified base area standard
- stage-area optional advanced
- monthly mean daily evaporation
- proportional surface-area evaporation
- 78 formulas
- 29 golden cases
- 147 input fields

→ **Final web calculator v1.0.0**
- embeds the exact v1.1 Design 1 route registry
- embeds the exact v1.1 Design 2 formula catalog
- embeds the exact v1.1 Design 3 input schema

This provides strong provenance for the final calculation/input core.

### Product implications

**KEEP / PROTECT**
- v1.1 route registry
- v1.1 formula catalog
- v1.1 input schema
- simplified standard field method
- optional advanced stage-area method
- leap-year-safe monthly evaporation logic
- formula-free controlled workbook philosophy

**RECOVER**
- `HUF_Supply_Side_Controlled_Input_Template_v1.1.xlsx`
- useful template instruction content / route-level field guidance

**ADD / IMPROVE in future product**
- visible “Download Current Input Template” action
- active schema version displayed beside the download
- template/version compatibility validation
- user-friendly route-specific field guidance in the application
- clear leap-year/rainfall completeness feedback
- help text derived from the controlled schema rather than duplicated manually

**DO NOT treat as lost UI**
This package contains no historical analytical dashboard, PDF reporting centre, or Excel results-export interface. Its principal value is controlled design provenance and the recoverable v1.1 input template.

Classification:
**DIRECT FINAL-DESIGN BASELINE / METHODOLOGY EVIDENCE — KEEP**
with
**CONTROLLED INPUT TEMPLATE — RECOVER**



## Step 3G — HUF v1.1 Synthetic All-Structures Sample Package

**File:** `HUF_v1.1_Synthetic_All_Structures_Sample_Package(3).zip`

Purpose:
- populated v1.1 synthetic controlled-input workbook
- end-to-end reference calculation report
- all-structure / all-route validation evidence
- leap-year positive golden fixture used later in Design-6 test contracts

SHA-256:
`f64bbd4f14b88f01d96d293e233db1fce22b9a1143fb07705f3328bf36254731`

### Package contents

3 files:
- `HUF_v1.1_Synthetic_All_Structures_Input.xlsx`
- `HUF_v1.1_Synthetic_All_Structures_Calculation_Report.xlsx`
- `HUF_v1.1_Synthetic_All_Structures_README.md`

The README explicitly states that this is **synthetic validation only, not certified HUF reporting data**.

### Input-workbook coverage

The synthetic workbook represents:
- Project: `SYN-ALL-STRUCT-001`
- Gujarat / Mehsana / Kheralu
- FY 2023-04-01 to 2024-03-31
- **366 calendar dates including 29-Feb-2024**
- **17/17 controlled structure types**
- **20 structure/intervention records**
- **10/10 water routes**
- one shared daily rainfall series
- one shared infiltration rate = **5.0 mm/hour**
- one shared 12-month mean-daily evaporation profile
- standard Verified Base Area method
- no Stage-Area data required

The workbook also contains person-day examples across the four controlled person-day methods:
- Paid labour
- Community contribution
- Volume-based estimate
- Machinery-support labour

### Exact relationship to the authoritative v1.1 input template

The synthetic input workbook was compared with the authoritative recovered:
`HUF_Supply_Side_Controlled_Input_Template_v1.1.xlsx`

Results:
- all **13 sheet names align exactly**
- all sheet headers align exactly
- `00_Instructions` is identical
- `99_Lookups` is identical
- workbook contains **0 formula cells**

Therefore this is a populated instance of the authoritative v1.1 controlled template, not a parallel or divergent sample schema.

### Calculation-report structure

The synthetic calculation report contains 11 sheets:

1. `00_Summary`
2. `01_Structure_Results`
3. `02_Route_Coverage`
4. `03_Shared_Environment`
5. `04_Capacity_Silt`
6. `05_Common_Rain_DDW`
7. `06_Daily_Balance_Detail`
8. `07_Person_Days`
9. `08_Validation_Checks`
10. `09_Formula_Notes`
11. `10_Chart_Data`

The report contains **0 Excel formula cells**. Values are materialized outputs/reference results rather than an alternative spreadsheet calculation engine.

A single basic bar chart exists on `10_Chart_Data`:
**Synthetic Water Result by Structure (m³)**.

This chart is test/reference material, not a model for the future management dashboard.

### Reference-result coverage

The calculation report demonstrates status segregation:
- 11 `calculated-warning`
- 6 `accepted-certified`
- 1 `not-calculated`
- 2 `excluded`

It covers all 10 water routes and retains the intentional:
- partly-lined HOLD
- subsurface exclusion
- governance exclusion

Water outputs are shown at structure level in:
- **m³**
- **BL**

This is useful evidence that the underlying reporting model is not limited to the current frontend's K m³ presentation.

Person-day results are produced independently, including for structures whose water route is excluded, which is consistent with the design principle that KPI 1.2.1 is parallel to the water-potential KPI.

### Validation checks in the sample report

The report records PASS for:
- all 17 controlled structure types present
- all 10 water routes covered
- one common project/district/block
- one common rainfall station for all KPI 1.1.1 structures
- 366 rainfall dates
- leap day present
- shared infiltration rate
- 12 monthly evaporation values
- no standard stage-area requirement
- mass-balance tolerance
- KPI identity tolerance

Maximum reported mass-balance residual:
approximately `7.46e-14 m³`

Maximum KPI identity difference:
approximately `9.09e-13 m³`

Both are far below the report's `1e-6` tolerance.

### Critical lineage finding — these files became frozen Design-6 evidence

The sample package's two Excel files are already present **byte-for-byte** in the protected final `v1.0.0` release under the Design-6 frozen test evidence.

Synthetic input SHA-256:
`e1a592ce49e3a308b8d402ca65a090f5d5f0e39b7bda3484be6e653ddc015f56`

Exact final-release matches:
- `tests/fixtures/GOLDEN_E2E_LEAP_FY2023-24.xlsx`
- `tests/design6/frozen/fixtures/positive/GOLDEN_E2E_LEAP_FY2023-24.xlsx`

Synthetic calculation report SHA-256:
`4c0e6b3cb3649b5e3e7c95f1db4e804a40aca258b282a4317b7a644c7fec8f2f`

Exact final-release match:
- `tests/design6/frozen/expected/GOLDEN_E2E_LEAP_Calculation_Report.xlsx`

The Design-6 UAT catalog formally identifies this workbook as:
`E2E-POS-LEAP-001`

with assertions including:
- no workbook blocker
- mass-balance PASS
- KPI identity PASS
- 29-Feb required and present
- 17/17 structure types
- 10/10 water routes

Therefore this sample package is not just an informal demonstration. Its core Excel artifacts were incorporated into the frozen end-to-end test contract used by the final application.

### Product/export significance

This package provides the clearest concrete evidence so far that a **rich multi-sheet Excel calculation report** had already been designed as an expected output/reference artifact.

This supports the future product requirement for a real XLSX Export/Report Centre.

However, this historical workbook should **not simply be exposed unchanged** as the final management report because:
- it is synthetic/reference oriented
- it is structure/technical-detail heavy
- it does not provide the desired village/block/district management aggregation sheets
- it contains only one basic chart
- its sheet organization predates the future clean dashboard/reporting requirements

It should instead be used as a **controlled technical-report blueprint/reference** when the future export engine is designed.

Potential reusable sheet concepts:
- Structure Results
- Route Coverage
- Capacity/Silt
- Daily Balance Detail
- Person-Days
- Validation Checks
- Formula Notes

Potential future additions beyond this reference:
- Project Summary
- District Summary
- Block Summary
- Gram Panchayat Summary
- Village Summary
- Structure-Type Summary
- Assurance Summary
- status-segregated aggregation
- management-ready charts
- run/audit metadata
- configurable display units

### Relationship to Design-5 export contracts

The protected final repository also contains Design-5 export contracts supporting:
- Compact Result Export: CSV/XLSX/JSON
- Reporting Summary Export: CSV/XLSX/JSON
- Audit Package
- Daily Trace Export

The synthetic calculation report therefore provides physical reference evidence alongside an already-defined controlled export-contract direction.

### Classification

**TEST / ACCEPTANCE EVIDENCE — KEEP**

For the populated synthetic input:
**KEEP AS GOLDEN REGRESSION FIXTURE**

For the calculation-report structure:
**REFERENCE / RECOVER AS TECHNICAL XLSX EXPORT BLUEPRINT**

Do not distribute synthetic values as project reporting data and do not copy the report layout blindly into the future management UI.



## Step 3H — HUF v1.1 Synthetic All-Structures Non-Leap Sample Package

**File:** `HUF_v1.1_Synthetic_All_Structures_NonLeap_Sample_Package(3).zip`

Purpose:
- non-leap companion to the leap-year golden sample
- validates actual-calendar handling for a 365-day reporting year
- provides an end-to-end reference workbook and expected calculation report
- became part of the frozen Design-6 positive acceptance contract used by the final application

SHA-256:
`c420e8a87c63cb85e08ac2a9ccaac27ad400c94dfcbaab92509f1bbd4857090b`

### Package contents

3 files:
- `HUF_v1.1_Synthetic_All_Structures_Input_NonLeap_FY2024-25.xlsx`
- `HUF_v1.1_Synthetic_All_Structures_Calculation_Report_NonLeap_FY2024-25.xlsx`
- `HUF_v1.1_Synthetic_All_Structures_NonLeap_README.md`

The README identifies the sample as synthetic validation data, not certified project reporting.

### Input-workbook coverage

The workbook represents:
- Project: `SYN-ALL-STRUCT-001`
- Gujarat / Mehsana / Kheralu
- FY 2024-04-01 to 2025-03-31
- **365 calendar dates**
- **no 29-Feb date**
- **17/17 controlled structure types**
- **20 structure/intervention records**
- **10/10 water routes**
- one common rainfall station
- infiltration rate = **5.0 mm/hour**
- one 12-month mean-daily evaporation profile
- standard Verified Base Area method
- no Stage-Area data required

### Exact schema relationship

The non-leap input workbook was compared with:
- the leap-year synthetic input workbook
- the authoritative recovered `HUF_Supply_Side_Controlled_Input_Template_v1.1.xlsx`

Results:
- all **13 sheet names align**
- all sheet headers align
- workbook contains **0 formula cells**

Therefore the non-leap sample is another populated instance of the same authoritative v1.1 controlled input contract.

### Calculation-report structure

The non-leap report contains 12 sheets:

1. `00_Summary`
2. `01_Structure_Results`
3. `02_Route_Coverage`
4. `03_Shared_Environment`
5. `04_Capacity_Silt`
6. `05_Common_Rain_DDW`
7. `06_Daily_Balance_Detail`
8. `07_Person_Days`
9. `08_Validation_Checks`
10. `09_Leap_vs_NonLeap`
11. `10_Formula_Notes`
12. `11_Chart_Data`

The report contains **0 Excel formula cells**.

The additional `09_Leap_vs_NonLeap` sheet explicitly compares the prior 366-day leap sample with this 365-day sample.

### Calendar-behaviour evidence

Validation checks record PASS for:
- all 17 controlled structure types
- all 10 water routes
- same project/district/block
- same rainfall station for all KPI 1.1.1 structures
- exactly **365 non-leap rainfall dates**
- **0 incorrectly-present 29-Feb dates**
- common infiltration rate
- 12 monthly evaporation values
- no standard stage-area requirement
- mass-balance tolerance
- KPI identity tolerance

Maximum reported mass-balance residual:
approximately `7.46e-14 m³`

Maximum KPI identity difference:
approximately `9.09e-13 m³`

Both remain far below the `1e-6` tolerance.

### Leap vs non-leap comparison

For this synthetic pair, calculated water results remain unchanged between the 366-day and 365-day workbooks.

The comparison report explains why:
- the removed leap day was a zero-rain / no-storage period for the simulated routes
- therefore removing 29-Feb changes calendar length but does not change the numerical water result for this particular synthetic case

The important test is **calendar correctness**, not a forced expectation that leap and non-leap results must differ.

For one partial-season structure, the calculation window changes from 256 days to 255 days while the result remains unchanged for the same zero-effect reason.

### Critical lineage finding — frozen Design-6 evidence

The two Excel files are already present **byte-for-byte** inside the protected final `v1.0.0` release.

Non-leap input SHA-256:
`7c6ba9498f8c87790503331f848cf4a83db577ab95c056473e202efd22fdddeb`

Exact final-release matches:
- `tests/fixtures/GOLDEN_E2E_NONLEAP_FY2024-25.xlsx`
- `tests/design6/frozen/fixtures/positive/GOLDEN_E2E_NONLEAP_FY2024-25.xlsx`

Non-leap calculation report SHA-256:
`c7d75f08899c95b8ba052f1f90daf41f1dd10bc33b1df41f6f45ead13dfac2cd`

Exact final-release match:
- `tests/design6/frozen/expected/GOLDEN_E2E_NONLEAP_Calculation_Report.xlsx`

The frozen Design-6 UAT catalog formally identifies this positive case as:

`E2E-POS-NONLEAP-001`

Expected assertions include:
- no workbook blocker
- mass-balance PASS
- KPI identity PASS
- **365 expected calendar days**
- **no 29-Feb expected**
- 17/17 structure types
- 10/10 water routes

### Broader Design-6 role

The non-leap workbook is also used as a baseline workbook for multiple downstream Design-4/Design-6 QA scenarios including:
- nonnegative daily states
- mass-balance residual tolerance
- KPI 1.1.1 identity
- no internal rounding
- aggregation status segregation
- aggregation coverage reconciliation
- structure readiness
- rainfall-series scope isolation
- cascade-network scope isolation
- supporting-evidence scope isolation

So this workbook is not only a positive smoke-test fixture; it is a central baseline for broader controlled QA scenarios.

### Existing frontend demo linkage

The protected final application's upload UI already exposes two test/demo actions:
- `Load non-leap sample`
- `Load leap-year sample`

and `js/app.js` loads the frozen fixtures:
- `GOLDEN_E2E_NONLEAP_FY2024-25.xlsx`
- `GOLDEN_E2E_LEAP_FY2023-24.xlsx`

Therefore the synthetic fixtures are both:
- formal frozen test evidence
- user-accessible demo workbooks in the current application

Future UX implication:
- **KEEP** a safe sample/demo capability because it is useful for onboarding and smoke testing
- **IMPROVE** its public presentation so technical leap/non-leap test terminology does not clutter the primary upload experience
- consider one simple “Try sample data” action for ordinary users, with technical leap/non-leap fixtures retained under Testing / Methodology / Advanced examples
- keep the frozen fixture files unchanged for regression purposes

### Product/export significance

The non-leap report reinforces the Step-3G conclusion that a multi-sheet technical XLSX reporting model already exists in the frozen evidence.

The `Leap_vs_NonLeap` comparison sheet is useful technical QA evidence, but it should not automatically become a normal management-report sheet.

It belongs more naturally in:
- technical/audit exports
- validation reports
- regression/reference material

rather than the standard village/block/district management workbook.

### Classification

**TEST / ACCEPTANCE EVIDENCE — KEEP**

For the input workbook:
**KEEP AS FROZEN GOLDEN REGRESSION FIXTURE**

For the calculation report:
**REFERENCE / KEEP AS NON-LEAP TECHNICAL EXPECTED OUTPUT**

For current demo functionality:
**KEEP CONCEPT / IMPROVE UX PRESENTATION**



## Step 3I — Design 4 Validation & Readiness FROZEN v1.0

**File:** `HUF_Design4_FROZEN_v1.0(3).zip`

Purpose:
- formal frozen validation/readiness contract following Designs 1–3 v1.1
- defines whether a workbook, structure, rainfall series, cascade network or person-day claim is sufficiently valid to proceed
- defines exact blocking scope and readiness states
- freezes calendar, rainfall, null/missing-data and scope-isolation behaviour without changing KPI formulas
- provides the validation baseline subsequently consumed by Engine 4 and downstream controlled engines

SHA-256:
`7e71f1ece6ec469662b0115da7560d2427fbb007341ef285d26caf094300b093`

Frozen date:
**2026-09-04**

Depends on:
- Design 1 FROZEN v1.1
- Design 2 FROZEN v1.1
- Design 3 FROZEN v1.1

### Package contents

7 files:
- `FROZEN_MANIFEST.json`
- `HUF_Design4_Test_Matrix_v1.0.csv`
- `HUF_Design4_Validation_Readiness_Rulebook_v1.0.json`
- `HUF_Design4_Validation_Readiness_Rulebook_v1.0.xlsx`
- `HUF_Design4_Validation_Report_v1.0.xlsx`
- `HUF_Design4_Validation_Rules_v1.0.csv`
- `README_FROZEN.md`

### Integrity

The frozen manifest tracks 6 payload files, excluding the manifest itself.

Independent verification during this audit:
- **6/6 listed SHA-256 hashes PASS**
- ZIP fingerprint independently calculated and recorded above
- no manifest-integrity issue identified

### Frozen rulebook inventory

Design 4 v1.0 defines:
- **95 unique validation/readiness rules**
- **95 rule-linked test specifications**
- **6 controlled readiness states**
- route-aware, record-aware and module-aware scope isolation
- leap/non-leap calendar controls
- numerical QA controls and warning thresholds

The six readiness states are:
- `workbook_not_ready`
- `not_ready`
- `ready`
- `ready_with_warning`
- `hold`
- `excluded`

Rule severity distribution observed in the frozen JSON:
- 16 `BLOCKING_ERROR`
- 56 `SCOPED_ERROR`
- 11 `WARNING`
- 9 `ROUTE_CONTROL`
- 3 `QA_CONTROL`

The rulebook therefore formalizes the earlier non-blocking design principle: a defect should stop only the workbook, record, rainfall series, network or claim whose calculation truth is affected, rather than suppress unrelated valid results.

### Cross-format consistency

The package is internally strong:
- JSON rule count = **95**
- CSV rule count = **95**
- JSON and CSV rule records align exactly in the audited fields
- JSON test-matrix count = **95**
- CSV test-matrix count = **95**
- JSON and CSV test definitions align exactly
- the Rulebook XLSX contains **0 formula cells**
- the Validation Report XLSX contains **0 formula cells**

This supports treating the spreadsheets as controlled documentation/reporting representations, not parallel calculation engines.

### Scope-isolation model

Key frozen behaviours include:
- workbook configuration/schema failure may block the workbook
- structure/technical failure blocks only the affected structure
- rainfall-series failure blocks only linked KPI 1.1.1 simulation windows
- cascade failure blocks only the affected connected network/component
- person-day failure blocks only the affected person-day claim/work scope
- ordinary evidence gaps may downgrade assurance without deleting valid numeric calculation truth
- HOLD and excluded routes remain controlled terminal states rather than generic errors
- water-readiness failures do not automatically suppress independent person-day claims, and person-day failures do not automatically suppress independent water calculations

This is an important methodology boundary to preserve in any future validation UX.

### Calendar and missing-data controls

Design 4 converts the earlier leap-year requirement into an explicit validation contract:
- standard reporting year = **01-Apr to 31-Mar**
- expected dates are generated from the actual inclusive calendar
- FY 2023-24 = **366 dates**, including 29-Feb-2024
- FY 2024-25 = **365 dates**, with no 29-Feb
- rainfall completeness is checked against expected dates
- explicit rainfall `0` is a genuine zero-rain observation
- blank/missing rainfall remains unknown and is never silently converted to zero
- monthly evaporation is selected by calendar month; 29-Feb uses the February value
- partial-season routes are validated only for the relevant simulation window

This directly connects Step 3G and Step 3H golden calendar evidence to the controlled validation layer.

### Coverage and positive-reference validation

The Design 4 validation report records:
- Design 1 routes: **10/10 PASS**
- Design 2 formula contracts: **78/78 PASS**
- Design 3 working sheets: **11/11 PASS**
- controlled structure types: **17/17 PASS**
- water routes exercised: **10/10 PASS**
- leap reference: PASS
- non-leap reference: PASS

Reference numerical checks remain within tolerance:
- maximum mass-balance residual ≈ `7.46e-14 m³`
- maximum KPI identity difference ≈ `9.09e-13 m³`
- frozen absolute tolerance = `1e-6 m³`

### Direct implementation lineage

A decisive lineage finding is established:

`HUF_Design4_Validation_Readiness_Rulebook_v1.0.json`

SHA-256:
`f8d15a04cac853ad8fa10fedcbb2678e96c8787be1a1281465b6369d7b04182f`

is carried into the implemented calculator as:

`config/validation-rulebook-v1.0.json`

with the **same SHA-256**.

The Engine 4 contract explicitly identifies:
`HUF-D4-VALIDATION-READINESS-v1.0`

as its frozen rulebook.

Therefore this package is not merely historical methodology evidence. It is the direct controlled validation/readiness source baseline used by the implementation lineage.

### Engine 4 ownership versus downstream QA

The final Engine 4 contract loads all **95 Design-4 rules** but evaluates **87** directly.

Eight rules are intentionally deferred because the required calculation/aggregation state does not yet exist at E04:
- `VAL-063` — proportional evaporation-area bounds → E06
- `VAL-066` — advanced stage extrapolation → E06
- `VAL-086` — nonnegative daily states → E06
- `VAL-087` — mass-balance residual → E06
- `VAL-088` — KPI 1.1.1 identity → E06
- `VAL-089` — no internal rounding → E06 implementation QA
- `VAL-090` — aggregation status segregation → E08
- `VAL-091` — aggregation coverage reconciliation → E08

**Important:** deferred does not mean PASS. Ownership is intentionally assigned to the downstream engine that has the necessary state.

This confirms that Design 4 is a cross-engine validation contract, not merely an E04-only checklist.

### Design-6 execution-status finding

The frozen Design-6 contract later represents **95/95 Design-4 rules**, but the recorded v1.0.0-rc.1 assessment is incomplete:
- Design-4 rule-linked cases defined: **95**
- verified/PASS: **15**
- not verified: **80**

The same assessment records:
- Design-6 gate: **NOT PASSED**
- browser execution: environment blocked / not fully verified in that assessment
- deployed GitHub Pages acceptance: not verified in that assessment
- remaining 80 scenario-builder mutations must be executed before strict frozen-contract certification

This is **not evidence that Design 4 is defective**. It is evidence that the frozen validation contract had broader test coverage requirements than had been executed at that release-candidate assessment point.

This should remain a release/certification gap until later historical packages prove that the 80 scenarios and browser/deployment gates were completed.

Do **not** change frozen Design-4 rules or expected outputs merely to force a release gate to PASS.

### Product / UX implications

**KEEP / PROTECT**
- `HUF-D4-VALIDATION-READINESS-v1.0`
- all 95 rule IDs and their controlled semantics unless a governed methodology change is approved
- six readiness states
- exact blocker scopes
- rainfall/cascade/person-day isolation
- null/missing-is-not-zero policy
- leap-aware actual-calendar logic
- warning vs blocking distinction
- separation of validation readiness from official E05 routing and E06 calculation truth
- version/hash lineage

**IMPROVE in future product presentation**
- translate technical rule IDs into clear user-facing issue messages
- show affected sheet, field, record/series/network and remediation
- show whether an issue blocks the workbook, one record, one rainfall series, one network or only downgrades assurance
- retain rule IDs/version in expandable technical/audit detail instead of making the 95-rule catalog dominate the normal user journey
- present `ready_with_warning`, HOLD, excluded and not-calculated states distinctly

**INVESTIGATE / COMPLETE BEFORE CERTIFICATION**
- determine whether later packages executed the remaining 80 Design-4/Design-6 rule-linked scenarios
- reconcile browser and deployed GitHub Pages acceptance evidence
- reconcile these results with the final-release status documentation already found to be inconsistent

**DO NOT treat as lost UI/export functionality**

This package contains no historical analytical dashboard, management reporting centre or PDF/Excel export UI to recover. Its value is controlled validation methodology, readiness semantics, QA coverage and exact implementation provenance.

### Classification

**DIRECT FINAL VALIDATION BASELINE / CONTROLLED METHODOLOGY EVIDENCE — KEEP / PROTECT**

with

**DESIGN-6 EXECUTION / CERTIFICATION GAP — INVESTIGATE UNTIL LATER EVIDENCE CLOSES IT**



## Step 3J — Design 5 Result, Audit & Reporting Schema FROZEN v1.0

**File:** `HUF_Design5_FROZEN_v1.0(3).zip`

Purpose:
- freezes the stable result/output contract between calculation, assurance, aggregation, audit, dashboard and exports
- defines how E06 calculation truth is represented without allowing E07 assurance or E08 aggregation to rewrite it
- defines the controlled reporting hierarchy, assurance-status segregation, null policy, privacy boundary and export contracts
- provides synthetic reference outputs for water results, person-days, assurance, aggregates, reporting summaries, validation issues, audit events, daily trace and run-manifest provenance
- becomes the direct result/audit/reporting baseline consumed by later E07, E08, E09 and Design 6

SHA-256:
`6cabe3d5e07ffead4c48a09ea82430629267175907e3e0b06254a055a35a51ef`

Frozen date:
**2026-09-04**

Depends on:
- Design 1 FROZEN v1.1
- Design 2 FROZEN v1.1
- Design 3 FROZEN v1.1
- Design 4 FROZEN v1.0

### Package contents

17 files total:
- `FROZEN_MANIFEST.json`
- `HUF_Design5_Export_Contracts_v1.0.csv`
- `HUF_Design5_Field_Dictionary_v1.0.csv`
- `HUF_Design5_Reference_Aggregates_v1.0.csv`
- `HUF_Design5_Reference_Assurance_v1.0.csv`
- `HUF_Design5_Reference_Audit_Events_v1.0.csv`
- `HUF_Design5_Reference_Daily_Trace_Sample_v1.0.csv`
- `HUF_Design5_Reference_Output_NonLeap_v1.0.json`
- `HUF_Design5_Reference_Reporting_Summary_v1.0.csv`
- `HUF_Design5_Reference_RunManifest_Leap_v1.0.json`
- `HUF_Design5_Reference_Validation_Issues_v1.0.csv`
- `HUF_Design5_Reference_Water_Results_v1.0.csv`
- `HUF_Design5_Result_Audit_Reporting_Schema_v1.0.json`
- `HUF_Design5_Result_Audit_Reporting_Schema_v1.0.xlsx`
- `HUF_Design5_Status_Mapping_v1.0.csv`
- `HUF_Design5_Validation_Report_v1.0.xlsx`
- `README_FROZEN.md`

### Integrity

The frozen manifest tracks 16 payload files, excluding the manifest itself.

Independent verification during this audit:
- **16/16 listed SHA-256 hashes PASS**
- ZIP fingerprint independently calculated and recorded above
- no manifest-integrity failure identified

### Frozen result-model inventory

Design 5 v1.0 defines **9 controlled internal entities / 230 controlled fields**:

| Entity | Controlled fields | Purpose |
|---|---:|---|
| `run_manifest` | 36 | run identity, source fingerprint, versions, privacy and provenance |
| `water_result` | 43 | structure-level water/KPI calculation result and formula lineage |
| `daily_balance_trace` | 26 | reproducible daily rainfall/DDW/runoff/storage/evaporation/infiltration trace |
| `person_day_result` | 20 | KPI 1.2.1 result with source/work-scope lineage |
| `assurance_record` | 18 | evidence/method status without changing calculation truth |
| `aggregate_result` | 27 | hierarchy + KPI/component + assurance-status bucket aggregation |
| `reporting_summary` | 26 | management/reporting-ready segregated totals and coverage |
| `validation_issue` | 18 | controlled issue, scope, readiness and resolution record |
| `audit_event` | 16 | append-only observable E01→E09 operational/provenance events |

The CSV field dictionary contains the same **230 unique field IDs** as the JSON schema, with the same entity counts. The XLSX schema representation exposes the same entity model plus reporting, export, privacy and validation sheets.

### Core frozen principles

Design 5 makes several project-wide boundaries explicit:

- **E06 calculation truth is immutable.**
- E07 assurance references the calculation result but does not rewrite its numeric value.
- `not-calculated` and `excluded` numeric results remain **null**, never placeholder zero.
- aggregation remains status-segregated.
- `accepted-certified` totals never silently include provisional or warning values.
- `Calculated Total` may equal accepted + provisional + warning, but must never be labelled `Certified Total`.
- full internal numerical precision is retained; rounding is presentation/export formatting only.
- raw participant names do not enter result/reporting schemas.
- project data is not placed in the URL.
- run manifests preserve source SHA-256, mapping/canonicalization lineage and all controlling design/version identifiers.

This is the most explicit historical evidence so far for the principle already adopted in the rebuild plan:

> **Calculate truth once → preserve it → present it in multiple useful ways.**

### Assurance-state mapping

Design 5 freezes five downstream assurance outcomes:

- `accepted-certified`
- `provisional-evidence-pending`
- `calculated-warning`
- `not-calculated`
- `excluded`

Precedence is deliberate:
1. excluded
2. HOLD/not-ready → not-calculated
3. calculation/method warning → calculated-warning
4. ready + ordinary evidence pending → provisional-evidence-pending
5. ready + required evidence complete/not-required → accepted-certified

A calculation warning takes precedence over ordinary evidence-pending status while evidence flags/counts remain separately visible.

Formal external HUF confirmation is not implied by `accepted-certified`; external governance status remains a separate field.

### Reporting hierarchy

The frozen reporting hierarchy is:

**Structure → Village → Gram Panchayat → Block → District → PIA → Project**

This is direct evidence that village/block/district/project reporting belongs in the controlled result model rather than requiring a new calculation methodology.

The future product should therefore consume these prepared results/aggregates rather than recompute KPI truth inside dashboard filters.

### Export contracts

Design 5 freezes four export families:

**EXP-001 — Compact Result Export**
- formats: CSV / XLSX / JSON
- entities: water result + assurance record + person-day result
- default export
- PII excluded
- intended for structure/claim-level calculation and assurance results

**EXP-002 — Reporting Summary Export**
- formats: CSV / XLSX / JSON
- entities: reporting summary + aggregate result
- default export
- PII excluded
- intended for village-to-project dashboard/report data with status segregation

**EXP-003 — Audit Package**
- formats: ZIP / JSON / CSV
- entities: run manifest + validation issues + audit events + water results + assurance + aggregates
- optional
- redacted/restricted privacy handling
- daily trace optional
- intended for reproducibility and review

**EXP-004 — Daily Trace Export**
- formats: CSV / JSON
- entity: daily balance trace
- not a default export
- intended for technical audit/debug because of potentially large volume

This is stronger evidence than a generic “future export idea”: a controlled export contract already exists and should inform the clean rebuild.

### Reference-output evidence

The package includes concrete synthetic output artifacts:
- 20 structure-level water results
- 40 assurance records
- 24 aggregate rows
- project-level reporting summaries
- validation issues
- daily-trace sample
- 9 E01→E09 audit events
- non-leap reference output JSON
- leap-year run-manifest reference

The reference water results preserve:
- route IDs
- KPI/component
- geography
- capacity/silt/catchment
- runoff/overflow/captured runoff
- evaporation/infiltration/closing storage
- result in m³ and BL
- formula IDs
- formula/version lineage
- input fingerprint
- calculation-trace hash

This is an important blueprint for future structure-level analytics and technical exports.

### Privacy/default-export model

The 230-field schema contains:
- 221 `non-sensitive` fields
- 7 `potentially-sensitive` fields
- 1 `restricted-PII` field
- 1 `sensitive-demographic` field

Default-export policy:
- 159 fields are default-export enabled
- 71 fields are excluded by default

Important examples:
- participant token = restricted PII and not default-exported
- gender = sensitive demographic and not default-exported
- observed validation value = potentially sensitive and not default-exported
- raw participant name is intentionally absent from the result/reporting schema

One field deserves future privacy/presentation review:
- `PDR-005 Work Scope / Activity` is tagged potentially sensitive but remains default-export enabled, with a note to review public wording.

This is not automatically a defect, but the clean rebuild should keep a configurable/report-specific privacy projection rather than blindly export every default-enabled text field into every public-facing report.

### Validation status

The Design 5 validation report records **28/28 PASS**, including:
- 230/230 unique fields
- 9/9 entities
- exact five assurance states
- all Design 4 readiness states mapped
- all 10 water routes represented
- formula IDs resolve to Design 2
- validation Rule IDs resolve to Design 4
- HOLD/excluded values remain null
- m³↔BL identity
- water-result grain uniqueness
- assurance foreign-key integrity
- project aggregate reconciliation
- calculated-total reconciliation
- accepted-certified separation
- raw participant name absent
- restricted PII excluded from default export
- reporting summary sensitive-field check
- project data absent from URL
- run lineage metadata present
- leap 366 / non-leap 365 manifest correctness
- presentation-only rounding
- audit E01–E09 coverage
- daily-trace date/mass-balance checks
- HOLD/excluded reporting display remains null

### Direct implementation lineage

Design 5 is not merely a historical reporting concept.

Later implemented releases explicitly reference:

`HUF-D5-RESULT-AUDIT-REPORTING-v1.0`

as their controlled result schema.

Observed lineage:
- E07 implements assurance over Design-5-compatible status/result concepts.
- E08 explicitly consumes the Design 5 result/aggregation contract and preserves the exact seven-level reporting hierarchy and five assurance buckets.
- E09 explicitly identifies Design 5 as its result/audit schema and emits the **36-field Design 5 run manifest**, validation issue registry and E01→E09 audit events.
- Engine release manifests continue to list `resultSchema: HUF-D5-RESULT-AUDIT-REPORTING-v1.0`.

Therefore:

> **Design 5 v1.0 is the direct controlled Result / Assurance / Aggregation / Reporting / Audit contract for the implemented final engine lineage.**

### Design 6 relationship

Design 6 freezes **28 Design-5 output/audit assertions**.

The later Design-6 implementation assessment records:
- Design 5 output-schema suite: **28 PASS / 0 NOT VERIFIED / 28 total**

This differs importantly from the outstanding Design-4 scenario issue:
- Design 4 rule-linked suite still had 80 not-verified scenarios at the recorded release-candidate assessment
- Design 5 output-schema assertions were already fully re-executed and passing

Therefore no Design-5-specific certification gap comparable to the Design-4 80-scenario gap was identified.

### Reference metadata inconsistency discovered

A small lineage/documentation inconsistency exists in the synthetic Design-5 reference outputs:

- `HUF_Design5_Reference_Audit_Events_v1.0.csv` records `result_schema:"v0.1"` inside its version-ID JSON
- the reference aggregates use `Aggregation Rule Version = D5-AGG-v0.1`
- reference run manifests identify the app as `REFERENCE-SCHEMA-GENERATOR-v0.1`

These appear to be **reference-generator/pre-freeze labels**, because:
- the frozen schema itself is `HUF-D5-RESULT-AUDIT-REPORTING-v1.0`
- later engine manifests explicitly use that v1.0 schema ID
- later E08 uses `HUF-E08-STATUS-SEGREGATED-AGGREGATION-v1.0`
- Design-5 validation remains 28/28 PASS and Design-6 output-schema execution passes 28/28

Classification of this issue:

**REFERENCE METADATA / VERSION-LABEL CLEANUP — FIX IN FUTURE CLEAN REFERENCE GENERATION**

Do not reinterpret it as evidence that the frozen Design-5 result contract is v0.1.

### Product significance

This package materially strengthens the clean-rebuild architecture.

The future tool should **not invent a second analytics truth model** if the controlled Design-5 entities can be projected into user-facing views.

Recommended conceptual separation:

```text
E01–E06 Calculation Truth
        ↓
E07 Assurance
        ↓
E08 Status-Segregated Aggregates
        ↓
E09 Provenance / Audit
        ↓
DESIGN-5 CONTROLLED RESULT MODEL
        ↓
┌────────────────┬────────────────┬────────────────┬────────────────┐
│                │                │                │
Dashboard      XLSX/CSV         PDF/Reports      Audit/Trace
```

Future dashboard filters should query/project prepared Design-5/E08 results rather than alter formulas, route assignment, readiness or assurance.

### Lost-feature / recovery assessment

No historical production UI, charting implementation or PDF layout is contained in this package.

However, it contains **controlled product capabilities that are under-exposed in the current frontend**:
- hierarchy-aware reporting summaries
- status-segregated aggregates
- compact result export contract
- reporting summary export contract
- audit package contract
- daily trace export contract
- richer structure-level result fields
- privacy/default-export definitions

These should not be treated as “lost code” to merge.

They should be treated as:

**CONTROLLED CAPABILITIES TO FULLY EXPOSE THROUGH A NEW PRODUCT/REPORTING LAYER**

### Classification

For the frozen schema/status/aggregation/privacy contract:

**DIRECT FINAL RESULT / AUDIT / REPORTING BASELINE — KEEP / PROTECT**

For the four export contracts:

**CONTROLLED PRODUCT CONTRACT — KEEP / FULLY EXPOSE IN FUTURE PRODUCT**

For the synthetic reference outputs:

**REFERENCE / TEST EVIDENCE — KEEP AS BLUEPRINT, NOT AS CERTIFIED PROJECT DATA**

For the `v0.1` labels inside reference-generator artifacts:

**FIX / NORMALIZE IN FUTURE CLEAN REFERENCE GENERATION**

For UI/dashboard/PDF code:

**NO LOST IMPLEMENTATION IDENTIFIED IN THIS PACKAGE**



## Step 3K — Design 6 Golden UAT Dataset & Executable Test Specification FROZEN v1.0

**File:** `HUF_Design6_FROZEN_v1.0(3).zip`

Purpose:
- freezes the controlled end-to-end regression/UAT contract before application implementation
- ties together Design 1 routing, Design 2 formulas, Design 3 input contract, Design 4 validation/readiness and Design 5 result/audit/reporting behavior
- provides positive leap/non-leap golden portfolios, expected calculation outputs, Design-5 reference outputs, 15 real high-risk negative XLSX fixtures, 95 machine-readable Design-4 scenario builders and the runner contract
- prevents implementation from redefining expected behavior after coding
- defines what must be executed before a true Design-6 release/UAT gate can be claimed

ZIP SHA-256:
`075b8cdf5b1def4a37edb1db2e49ce11d1c09a4785960a11107740a3c97db67c`

Frozen date:
**2026-09-04**

Depends on:
- Design 1 v1.1
- Design 2 v1.1
- Design 3 v1.1
- Design 4 v1.0
- Design 5 v1.0

### Package contents

30 files total:
- `FROZEN_MANIFEST.json`
- `HUF_Design6_D4_Rule_Cases_v1.0.csv`
- `HUF_Design6_Golden_UAT_Test_Specification_v1.0.xlsx`
- `HUF_Design6_Physical_Fixture_Manifest_v1.0.json`
- `HUF_Design6_Runner_Contract_v1.0.json`
- `HUF_Design6_Scenario_Builder_Registry_v1.0.json`
- `HUF_Design6_UAT_Test_Catalog_v1.0.json`
- `HUF_Design6_Validation_Report_v1.0.xlsx`
- `README_FROZEN.md`
- 4 frozen expected-output artifacts
- 15 negative high-risk XLSX fixtures
- 2 positive golden XLSX portfolios

The manifest tracks **29 payload files**, excluding the manifest itself.

### Integrity

Independent package verification during Step 3K:
- ZIP SHA-256 recorded above
- **29/29 frozen-manifest payload SHA-256 hashes PASS**
- **0 manifest hash failures**
- all 15 physical fixture files exist
- all 15 physical fixture target Rule IDs are unique
- all physical target Rule IDs resolve to the 95 Design-4 rule cases
- all 95 Design-4 case IDs are unique
- all 95 Design-4 Rule IDs are unique
- all 95 Scenario Builder IDs are unique
- Scenario Builder IDs exactly equal the 95 Design-4 Rule IDs
- scenario registry runner stage / execution mode / baseline / physical-fixture references align with the corresponding Design-4 cases

No frozen-package integrity failure was found.

### Frozen logical test contract

Design 6 v1.0 freezes **154 logical tests**:

| Suite | Tests | Primary scope |
|---|---:|---|
| E2E positive golden portfolios | 2 | Full workbook through E01→E09 |
| Design 2 formula golden/reference | 29 | Formula/canonical calculation behavior |
| Design 4 rule-linked cases | 95 | Validation, readiness, scope isolation and downstream QA |
| Design 5 output/audit/reporting assertions | 28 | Result structure, assurance, aggregation, privacy and audit |
| **Total** | **154** | Controlled regression/UAT contract |

In addition, **15 high-risk failures are supplied as actual XLSX fixtures** rather than only abstract scenario definitions.

### Design-4 scenario-builder coverage

All **95 Design-4 rules** have machine-readable test/setup contracts.

Observed execution-mode distribution:
- 50 `CANONICAL_NEGATIVE_MUTATION`
- 15 `WORKBOOK_PHYSICAL`
- 14 `POSITIVE_OR_ROUTE_ASSERTION`
- 10 `CANONICAL_WARNING_MUTATION`
- 4 `CALCULATION_STATE_INJECTION`
- 2 `AGGREGATION_STATE_INJECTION`

This is important because the Design-6 contract was deliberately broader than the 15 physical workbooks.

The 15 physical fixtures cover the highest-risk examples, while the remaining rules still have a frozen scenario-builder contract that an executable runner is expected to apply at the appropriate pipeline stage.

### Physical high-risk fixture set

The 15 real XLSX mutations test:

1. missing leap day
2. duplicate rainfall date
3. negative rainfall
4. missing Verified Base Area
5. Base Area greater than Full Surface Area
6. missing February evaporation
7. Advanced stage-area selected without Stage-Area Group
8. cascade cycle
9. rejuvenation Route A missing baseline input
10. rejuvenation Route B missing desilted input
11. lined farm pond inlet failure
12. Other surface structure missing approval
13. duplicate person-day claim
14. rainfall date outside FY
15. partial-season route missing Functional Date

The physical-fixture manifest does not merely identify an error. It also freezes the intended **scope behavior**.

Examples:
- missing leap-day rainfall blocks only linked WTR-111 simulations whose calculation window includes the missing date
- duplicate/negative rainfall blocks the dependent rainfall series, not unrelated KPI 1.1.2/person-day routes
- missing Verified Base Area blocks the affected structure only
- cascade-cycle failure is network-scoped
- a date outside the reporting FY is a warning/exclusion from the active series, not a blanket failure

This is direct regression evidence for the project principle:
> one defective record/series/network must not corrupt unrelated valid calculations.

### Runner contract

Design 6 freezes an implementation-neutral runner interface with the following capabilities:

- load workbook locally without server upload
- run E01 through a requested target stage
- apply a scenario mutation at workbook/canonical/config/calculation/aggregation state
- continue the controlled pipeline
- collect issues, routes, readiness, results, assurance, aggregates, manifest and audit events
- compare actual outputs against frozen golden expectations

Frozen execution order:
1. E2E golden
2. Design-2 formula golden
3. Design-4 rule cases
4. Design-5 output schema

Allowed runner result states:
- `PASS`
- `FAIL`
- `NOT_VERIFIED`
- `SKIPPED`

Numerical comparison uses full-precision values and the frozen Design-2 tolerance.

`null` is explicitly distinct from numeric zero.

The runner also freezes assertion precedence:
- workbook blockers stop official calculation but still produce issues/manifest
- record/series/network failures remain scope-isolated
- HOLD/excluded are legitimate controlled terminal outcomes
- calculation QA failure suppresses only the affected official result
- assurance cannot rewrite E06 numeric truth
- aggregation must remain status-segregated

### Positive golden portfolios

Design 6 reuses the two previously reviewed all-structure workbooks:

**Leap**
- FY 2023-04-01 to 2024-03-31
- 366 expected dates
- includes 29-Feb-2024
- 17/17 structure types
- 10/10 water routes

**Non-leap**
- FY 2024-04-01 to 2025-03-31
- 365 expected dates
- no 29-Feb
- 17/17 structure types
- 10/10 water routes

These are not new alternative methodology samples.

They are the same controlled positive portfolios already identified in Steps 3G and 3H.

Confirmed byte lineage:
- Design-6 `fixtures/positive/GOLDEN_E2E_NONLEAP_FY2024-25.xlsx`
  = Step-3H non-leap populated input
  SHA-256 `7c6ba9498f8c87790503331f848cf4a83db577ab95c056473e202efd22fdddeb`
- Design-6 `expected/GOLDEN_E2E_NONLEAP_Calculation_Report.xlsx`
  = Step-3H non-leap calculation report
  SHA-256 `c7d75f08899c95b8ba052f1f90daf41f1dd10bc33b1df41f6f45ead13dfac2cd`
- Design-6 leap positive workbook SHA-256
  `e1a592ce49e3a308b8d402ca65a090f5d5f0e39b7bda3484be6e653ddc015f56`
- Design-6 leap expected calculation report SHA-256
  `4c0e6b3cb3649b5e3e7c95f1db4e804a40aca258b282a4317b7a644c7fec8f2f`

Therefore the earlier synthetic packages were not side examples; they became direct frozen Design-6 acceptance artifacts.

### Exact Design-5 reference lineage

Design 6 also embeds the Step-3J reference outputs byte-for-byte:

`expected/GOLDEN_D5_Reference_Output_NonLeap.json`
=
`HUF_Design5_Reference_Output_NonLeap_v1.0.json`

SHA-256:
`becea1875bc0cedc06f80631c8cabe84af8f5cf7851e97d4fb89fbbefc89174f`

`expected/GOLDEN_D5_RunManifest_Leap.json`
=
`HUF_Design5_Reference_RunManifest_Leap_v1.0.json`

SHA-256:
`d2f24d6158b1bc2d886a38f4dea6da0c724335f722438be512026feeafe6d22e`

The non-leap Design-5 expected reference contains:
- 36 run-manifest fields
- 20 water results
- 20 person-day results
- 40 assurance records
- 24 aggregate rows
- 6 reporting-summary rows
- 12 daily-balance trace sample rows
- 11 validation issues
- 9 E01→E09 audit events

This confirms Design 6 is the formal test layer that joins the previously frozen methodology and result-model designs.

### Design-6 specification validation

`HUF_Design6_Validation_Report_v1.0.xlsx` records **28/28 PASS**.

Important interpretation:

This **does not mean 154 application tests executed and passed**.

It means the **test contract itself is structurally valid and complete enough to freeze**.

The validation checks confirm:
- 154 logical definitions exist
- 95/95 Design-4 rule cases are represented
- 95 unique Design-4 Rule IDs
- 29 Design-2 formula cases
- 28 Design-5 output/audit assertions
- 2 positive E2E portfolios
- 15 physical high-risk workbooks
- 15 unique physical target rules
- physical fixture files exist
- physical fixture hashes pass
- leap and non-leap golden workbooks exist
- 2 expected calculation reports exist
- 95 scenario builders exist and IDs are unique
- runner result states are controlled
- null ≠ zero
- scope-isolation assertion exists on all 95 Design-4 cases
- leap/non-leap day counts are correct
- selected physical mutations are structurally verified

The same validation report explicitly records:
**Browser UAT execution = NOT VERIFIED.**

### Acceptance gates frozen by Design 6

The frozen acceptance workbook separates test-contract completeness from application acceptance.

GATE-01 through GATE-06:
- specification completeness
- Design-4 rule coverage
- positive calendar coverage
- physical fixture coverage
- Design-2 formula case coverage
- Design-5 output/audit coverage

These pass for the **frozen test contract**.

But:
- **GATE-07 Browser execution** = required before release; not verified at freeze
- **GATE-08 GitHub Pages browser proof** = required before GitHub-ready claim; not verified at freeze

Therefore:

> **“Design 6 validation PASS” must never be used as shorthand for “application UAT PASS.”**

### Later implementation assessment — critical execution gap

The later `v1.0.0-rc.1` Design-6 implementation assessment is directly traceable to this frozen contract.

Recorded execution at that assessment:

| Suite | Frozen | PASS | NOT VERIFIED |
|---|---:|---:|---:|
| E2E positive | 2 | 2 | 0 |
| Design 2 formula golden | 29 | 29 | 0 |
| Design 4 rule-linked | 95 | 15 | **80** |
| Design 5 output/audit | 28 | 28 | 0 |
| **Total** | **154** | **74** | **80** |

Failures:
**0**

This is an important distinction:
- no executed frozen test was recorded as failing
- but **80 Design-4 scenario-builder cases were still unexecuted/not verified**
- therefore absence of failures does not equal full Design-6 completion

The 15 passing Design-4 cases were exactly the supplied high-risk physical XLSX fixtures.

The other 80 frozen rule scenarios required the scenario-builder/mutation runner and had not been implemented/executed at that recorded release-candidate assessment.

### Browser/deployment status at recorded assessment

The later assessment records:
- static architecture: PASS
- frozen integrity: PASS
- 29 frozen hash checks: PASS
- browser execution: **ENVIRONMENT_BLOCKED**
- deployed GitHub Pages acceptance: **NOT VERIFIED**
- Design-6 gate: **NOT PASSED**
- release classification: GitHub-upload-ready release candidate, **not production approved**

The browser limitation was environmental rather than a recorded application FAIL:
- localhost Chromium navigation was blocked
- `file://` Chromium navigation was blocked
- a portable browser runner was retained for execution in GitHub Actions or another allowed environment

Required closure items were:
1. execute the remaining 80 Design-4 scenario-builder cases
2. execute browser UAT in a permitted environment and retain machine-readable results
3. execute deployed GitHub Pages acceptance and record the result

### Relationship to the protected final v1.0.0 release

This package materially clarifies the release-status inconsistency already noted in Step 1.

Design 6 itself says:
- contract/specification freeze = PASS
- browser application execution = NOT VERIFIED at freeze
- release claim requires browser and deployed proof

The later rc.1 assessment says:
- 74/154 logical tests passed
- 80/154 remained not verified
- Design-6 gate not passed

Therefore a later document or release label that says “final”, “GitHub-ready” or similar **cannot by itself prove that the frozen Design-6 gate was closed**.

The audit must look for later, explicit evidence of:
- remaining 80 scenario execution
- browser suite result
- deployed GitHub Pages acceptance
- machine-readable final Design-6 gate status

Until such evidence is found, retain this as an **open release-certification reconciliation item**, not as a calculation defect.

Do not downgrade the protected final release merely because the rc.1 assessment was incomplete; a later package may have closed the gate. The correct audit position is:
**closure not yet evidenced in the historical packages reviewed through Step 3K.**

### Product / rebuild significance

Design 6 is a controlled test/release asset, not a public UX design.

No dashboard, chart, PDF layout, branding system or user workflow implementation is contained here.

Its future value is different:

**KEEP IMMUTABLE**
- frozen positive workbooks
- frozen expected outputs
- frozen D4 rule-case catalog
- physical fixtures
- physical fixture hashes
- scenario-builder registry
- Design-5 output assertions
- runner contract
- acceptance gates

**REUSE AS REGRESSION CONTRACT**
- execute against protected methodology during the clean rebuild
- use in CI where practical
- preserve exact expected results unless a governed upstream methodology version changes
- add new test-contract versions rather than editing v1.0 in place

**DO NOT**
- modify golden expected outputs merely to make a new implementation pass
- remove negative scenarios because implementation does not support them
- treat `NOT_VERIFIED` as `PASS`
- treat `SKIPPED` as `PASS`
- collapse null into zero
- weaken scope-isolation assertions
- expose all technical fixtures in the primary public workflow

For user-facing onboarding:
- a simple sample/demo entry remains useful
- technical leap/non-leap/negative fixtures should live under Testing / Methodology / Advanced QA rather than cluttering ordinary upload workflow

### Key clean-rebuild test requirement

The future clean rebuild should start from the protected engine and then prove compatibility against this frozen contract.

Minimum regression target before a new controlled release:
- 2/2 E2E positive portfolios
- 29/29 Design-2 formula cases
- 95/95 Design-4 rule-linked scenarios
- 28/28 Design-5 output/audit assertions
- 15/15 physical high-risk XLSX fixtures
- permitted-browser UAT
- deployed GitHub Pages acceptance
- frozen-hash integrity
- no unexpected modifications to controlled goldens

If methodology changes legitimately:
1. version the upstream Design 1/2/3/4/5 contract
2. create a new Design-6 contract version
3. document migration/impact
4. retain v1.0 historical goldens for reproducibility

### Classification

For the frozen Design-6 contract:

**DIRECT FINAL TEST / ACCEPTANCE BASELINE — KEEP / PROTECT**

For golden workbooks, expected outputs and physical fixtures:

**IMMUTABLE REGRESSION EVIDENCE — KEEP**

For the 95 scenario-builder registry and runner contract:

**CONTROLLED TEST-HARNESS CONTRACT — KEEP / IMPLEMENT FULLY IN FUTURE REGRESSION**

For the recorded 80 unverified scenarios + browser/deployment gates:

**RELEASE-CERTIFICATION GAP — INVESTIGATE / CLOSE WITH EXPLICIT LATER EVIDENCE**

For UI/dashboard/PDF/branding code:

**NO LOST PRODUCT IMPLEMENTATION IDENTIFIED IN THIS PACKAGE**

For historical test terminology in primary user workflow:

**KEEP TECHNICALLY / DE-EMPHASIZE IN PUBLIC UX**



## Step 3L — HUF Supply-Side KPI Calculator Engine 01 v0.1.0

**File:** `HUF_Supply_Side_KPI_Calculator_Engine01_v0.1.0(3).zip`

Purpose:
- first staged browser implementation of the already-frozen Designs 1–6 methodology
- implements E01 Workbook Intake only
- establishes browser-local source preservation, workbook fingerprinting, controlled `.xlsx` parsing, sheet inventory and the E01→E02 handoff boundary
- proves the no-backend/no-runtime-CDN static deployment pattern before later engines are added
- provides the first implementation-level regression harness for the protected engine sequence

ZIP SHA-256:
`ac52a6dc06e8d76b334c80dba59895d3feeecbc61ddedfad4a111cab76507f74`

Package timestamp evidence:
**4 September 2026**

Version/status:
- product version: `0.1.0`
- implementation: `Engine 1 — Workbook Intake`
- status: `ENGINE01_IMPLEMENTED`
- only E01 is intentionally implemented in this package
- E02–E09 are explicitly outside scope, not accidentally missing

### Package contents

37 files total:
- 1 release manifest
- 36 controlled payload files

Major groups:
- GitHub Pages/static deployment:
  - `.github/workflows/pages.yml`
  - `.nojekyll`
  - `404.html`
  - `index.html`
- release/config:
  - `RELEASE_MANIFEST.json`
  - `ENGINE01_VALIDATION_STATUS.json`
  - `VERSION`
  - `config/app-config.json`
  - `config/engine-contracts-v1.json`
  - `config/input-schema-v1.1.json`
  - `config/required-sheets-v1.1.json`
- implementation:
  - `js/engines/engine01-intake.js`
  - `js/services/xlsx-lite.js`
  - core store/events/hash/id/config loader
  - `js/ui/render.js`
- documentation:
  - `README.md`
  - `docs/ENGINE01_CONTRACT.md`
  - `docs/ENGINE01_VALIDATION_REPORT.md`
  - `docs/PRIVACY.md`
  - `docs/DEPLOYMENT.md`
- tests:
  - two golden E2E fixture workbooks
  - Node E01 harness + machine-readable result
  - browser E01 harness
  - static architecture check + result
- local dependency:
  - vendored JSZip + licence

### Integrity

Independent release-manifest verification during this audit:

**36/36 payload hashes and byte counts PASS**

No manifest integrity failure was found.

### Frozen design dependency alignment

The early implementation already declares:
- Design 1 v1.1
- Design 2 v1.1
- Design 3 v1.1
- Design 4 v1.0
- Design 5 v1.0
- Design 6 v1.0

Its active input schema is already:
`HUF-SS-INPUT-v1.1`

The exact `config/input-schema-v1.1.json` SHA-256 is:

`5a7aefcf3732f233157f3b96f3952329fe36883cdd90b29f4104ef2b23e810d1`

Therefore this package is not an older alternative calculation methodology. It is the first implementation step against the already-frozen controlled design stack.

### E01 responsibility

Engine 1 accepts one browser `File` with `.xlsx` extension and creates:
- source session ID
- source workbook filename
- byte length
- last-modified metadata
- source SHA-256 fingerprint
- parser identity
- workbook sheet count/names/date system
- controlled-template structure hint
- `01_Control` metadata hint
- detailed sheet inventory
- private immutable source snapshot for E02

Private runtime truth contains:
- exact workbook-byte copy
- source SHA-256
- parsed sheet headers
- parsed row values
- original Excel row numbers

The public state intentionally excludes the raw workbook object.

### Important intake boundary

E01 is intentionally non-validating.

It may recognize source structure but may not:
- map non-exact fields
- normalize units
- perform Design-4 readiness validation
- assign water routes
- calculate KPI values
- assign assurance status
- aggregate results
- generate the Design-5 run manifest

This separation is important and should remain protected in the clean rebuild.

A sheet-name/template match at E01 is only an intake hint. It must never be presented to the user as a validation PASS.

### Null-versus-zero preservation

The E01 contract explicitly preserves:
- blank cell → `null`
- actual numeric zero → `0`

E01 never replaces missing values with zero.

This policy was tested directly and is consistent with the later controlled methodology.

### Browser-local privacy model

The package already uses the intended privacy boundary:
- no backend
- no project workbook upload
- no project rows/values in URL query string or fragment
- no localStorage / IndexedDB / cookie persistence for workbook contents
- raw workbook bytes and parsed rows exist only in active-page JavaScript memory
- refresh/session clearing removes the runtime source snapshot
- SHA-256 fingerprint may be retained as non-content metadata

This is direct architectural lineage and should remain protected.

### Parser/dependency architecture

The package uses:
- locally vendored JSZip
- a local controlled XLSX reader in `js/services/xlsx-lite.js`
- no runtime parser CDN
- no build step
- relative static paths for GitHub Pages project-subpath compatibility

The custom XLSX reader recovers the controlled template structures needed by the HUF workbook, including:
- workbook/sheet relationships
- shared strings
- number/date formats
- date-system handling
- headers and row values
- original row numbers
- formula-cell counts

This local parser file survives unchanged into later staged releases, including Engine 09.

### Regression evidence

`ENGINE01_VALIDATION_STATUS.json` records:
- Engine 1 implementation: complete for E01 scope
- static architecture: **17/17 PASS**
- module harness: **25/25 PASS**
- leap reference: PASS
- non-leap reference: PASS
- browser acceptance: NOT VERIFIED
- GitHub Pages acceptance: NOT VERIFIED

The 25-test E01 harness verifies, among other items:
- 13 expected sheets in the non-leap golden workbook
- exact template-structure recognition
- 20 structure records
- 365 rainfall rows in FY 2024-25
- 366 rainfall rows in FY 2023-24
- 29-Feb-2024 is present in leap case
- source workbook SHA-256 reproduction
- missing Functional Date stays null
- true zero rainfall stays numeric zero
- raw sheets/records are frozen
- raw workbook bytes are absent from public state
- formula-cell count = 0 in the controlled golden workbook
- wrong extension is blocked
- malformed XLSX is blocked

### Direct later-release lineage

This package provides unusually strong implementation provenance.

The following E01 artifacts remain byte-for-byte unchanged in later staged releases through Engine 09:
- `ENGINE01_VALIDATION_STATUS.json`
  - SHA-256 `6ae6dbc86377631556c0eb486b25cceab9fb6ba1ae1f3993123a5f2f6553ada3`
- `docs/ENGINE01_CONTRACT.md`
  - SHA-256 `d3cdd22b15a68a4b8b8b596bbbccd3baac3feab1008d06b1c00a35799a982ce9`
- `docs/ENGINE01_VALIDATION_REPORT.md`
  - SHA-256 `7cb58f2b94f8c94d1fde8f467ad4381658cff1dc67fbe515f433d2f16470448f`
- `js/services/xlsx-lite.js`
  - SHA-256 `02b02753de16259eb5e8aac6720a05b1889c74ff66e89295d49dd6135387e92e`
- `tests/browser-engine01.html`
  - SHA-256 `32317e7125031fad5108116530d20aa1d447f174fb76fef389d3442e98795821`
- `tests/node-engine01.mjs`
  - SHA-256 `cd3e241c2929ccb66341b8f6e710d34aa635347e984d1f9fd4790e9f52129c1d`
- `tests/node-engine01-result.json`
  - SHA-256 `69be63436e0af6af1c5504374a7e5f1349da7b8b16cd1d908c02fe616367ecfc`

Engine 09 still reports E01 regression:
**25/25 PASS**

This demonstrates that the E01 contract/test baseline remained stable even as downstream engines were added.

### Implementation file evolution

The initial `js/engines/engine01-intake.js` hash is:

`6280809a5e882811f4bae496f0cc9ea5aca90be952f2d996624573832d67dc40`

By Engine 02 the E01 implementation file had changed, and by Engine 09 it had changed again.

This is expected integration evolution because E01 had to hand off to later stores/snapshots and orchestration.

Therefore:
- do not restore the v0.1.0 E01 JavaScript over the protected later E01 implementation
- use this package to understand the original responsibility boundary and UX intent
- retain the frozen E01 contract/tests as the stronger lineage evidence

### Early UI/product findings

The E01 page is a development-stage interface, but it contains several useful UX ideas.

Useful intake presentation:
- drag/drop `.xlsx` upload
- concise privacy callout
- workbook size
- sheet count
- recognized controlled-sheet count
- parser identity
- source session ID
- source SHA-256
- `01_Control` reporting metadata
- sheet-by-sheet inventory:
  - sheet name
  - role hint
  - row count
  - column count
  - formula-cell count
- missing/extra controlled-sheet notice
- explicit statement of what intake did and did not do

These are useful as a future **Workbook Pre-flight / Intake Diagnostics** panel.

However, they should not dominate the final public workflow. The best product form would be:
1. simple upload interaction
2. concise pre-flight summary
3. expandable technical details for MIS/M&E/assurance users
4. clear separation between intake diagnostics and true validation/readiness results

### Sample-data behavior

The page exposes:
- Load non-leap sample
- Load leap-year sample

These point to the same controlled golden fixtures already recovered in Steps 3G/3H/3K.

The concept survives and is useful for onboarding/smoke testing.

Future UX should likely simplify this to:
**Try sample data**

with leap/non-leap technical fixtures moved to an Advanced Testing / Methodology area.

### Development scaffolding not to recover as public UX

The early page also displays an E01→E09 engine strip where E02–E09 are labelled `Not implemented` and the next engine is shown as locked.

This was useful during staged development but is obsolete as a final user workflow.

Do not expose internal engine numbering/progress as the main product navigation.

Likewise:
- `Engine 1 · v0.1.0` page-centric branding is development metadata, not final product identity
- the simple `HUF` text mark is not a formal branding asset
- `noindex,nofollow` is appropriate for a development package but not automatically the final SEO policy
- no dashboard/reporting/Excel-export/PDF-export implementation exists here

### Lost-feature assessment

No calculation or methodology capability was lost from this package; later releases are strictly more complete.

Potentially under-exposed product capability:
- compact workbook intake/pre-flight diagnostics
- clear source identity/fingerprint presentation
- sheet inventory and formula-cell visibility
- explicit E01 boundary explanation

These should be treated as **REFERENCE / RECOVER AS CLEAN UX**, not as code to merge.

### Relationship to final-product principles

This package reinforces several design rules for the clean rebuild:

**Keep**
- browser-local source processing
- source fingerprinting
- immutable raw source snapshot
- null-versus-zero preservation
- exact row-number lineage
- controlled workbook structure recognition
- local deterministic dependency
- no project data in URLs
- no hidden server upload
- independent E01 regression harness

**Improve**
- hide low-level parser/engine terminology from ordinary users
- turn the workbook inventory into a concise pre-flight experience
- show actionable missing/extra sheet information
- separate technical details into expandable/advanced views
- connect intake diagnostics directly to E02 mapping and E04 validation feedback

**Do not**
- merge this early E01 implementation into the protected final engine
- interpret template recognition as validation
- expose raw workbook data in public state
- store workbook contents persistently
- turn blank values into zero
- make the nine-engine development strip the public information architecture

### Classification

For E01 contract, privacy boundary, source-preservation rules and regression tests:

**DIRECT FINAL ENGINE-LINEAGE BASELINE — KEEP / PROTECT**

For locally vendored parser and stable XLSX intake service:

**IMPLEMENTATION LINEAGE — KEEP IN PROTECTED BASELINE / REFERENCE FOR MAINTENANCE**

For the original v0.1.0 `engine01-intake.js` implementation:

**METHODOLOGY / IMPLEMENTATION EVIDENCE — OBSOLETE FOR DIRECT CODE REUSE**

For the workbook inventory/source-fingerprint/pre-flight UI:

**REFERENCE / RECOVER AS CLEAN WORKBOOK PRE-FLIGHT UX**

For leap/non-leap sample buttons:

**KEEP CONCEPT / SIMPLIFY PUBLIC UX**

For the nine-engine strip, locked-next-engine presentation and Engine-1 development branding:

**OBSOLETE DEVELOPMENT SCAFFOLDING — DO NOT REUSE AS FINAL PUBLIC UX**

For dashboard/charts/Excel/PDF/reporting:

**NO LOST IMPLEMENTATION IDENTIFIED IN THIS PACKAGE**



## Step 3M — HUF Supply-Side KPI Calculator Engine 02 v0.2.0

**File:** `HUF_Supply_Side_KPI_Calculator_Engine02_v0.2.0(3).zip`

Purpose:
- second staged browser implementation of the already-frozen Designs 1–6 methodology
- preserves E01 Workbook Intake and adds E02 Automatic Schema Mapping + Confirmation
- establishes the controlled source-column-to-HUF-schema mapping order
- freezes an immutable, SHA-256-fingerprinted mapping snapshot for E03 canonicalization
- demonstrates exact-template auto-mapping plus governed alias/fuzzy/manual recovery for non-standard uploads

ZIP SHA-256:
`8186bb1bec96a0ab16473ce8ddc104199f98cc87b5d8eacc9c65a2e2a448ead3`

Package date:
**4 September 2026**

Version/status:
- release: `HUF_Supply_Side_KPI_Calculator_Engine02_v0.2.0`
- version: `0.2.0-engine02`
- implemented engines: E01 + E02
- next engine: E03 Canonicalization
- status: `IMPLEMENTED_WITH_BROWSER_GATE_OPEN`

### Package contents

47 files total:
- 1 release manifest
- 46 manifest-controlled payload files

Major additions compared with Engine 01:
- `ENGINE02_VALIDATION_STATUS.json`
- `config/mapping-aliases-v1.1.json`
- `docs/ENGINE02_CONTRACT.md`
- `docs/ENGINE02_VALIDATION_REPORT.md`
- `js/engines/engine02-mapping.js`
- `tests/node-engine02.mjs`
- `tests/node-engine02-result.json`
- `tests/browser-engine02.html`
- `tests/browser-engine02-status.json`
- project-subpath HTTP test result
- expanded E01→E02 application/store/UI orchestration

The two frozen golden workbooks from Design 6 remain included.

### Integrity

Independent release-manifest verification during this audit:

**46/46 manifest payload hashes PASS**

No payload mismatch or missing manifest file was found.

### Frozen design dependency alignment

The package explicitly identifies:
- route registry: `HUF-DESIGN1-ROUTE-REGISTRY-v1.1`
- formula catalog: `HUF-DESIGN2-FORMULA-CATALOG-v1.1`
- input schema: `HUF-SS-INPUT-v1.1`
- validation rulebook: `HUF-D4-VALIDATION-READINESS-v1.0`
- result schema: `HUF-D5-RESULT-AUDIT-REPORTING-v1.0`
- UAT contract: `HUF-D6-GOLDEN-UAT-v1.0`

Therefore E02 is implementation against the protected frozen methodology, not a competing schema/methodology branch.

### Controlled E02 mapping order

The contract freezes this order:

1. **Exact controlled Field ID header**
2. **Normalized controlled column label**
3. **Versioned alias**
4. **Type-compatible fuzzy suggestion**
5. **Manual source sheet/column selection**

This order is important because it prevents convenience matching from outranking explicit controlled identity.

### Mapping confirmation policy

The E02 contract distinguishes safe auto-confirmation from mappings that require human review.

Auto-confirmed:
- exact Field ID match
- normalized controlled-header match
- exact sheet-name / normalized sheet-name match

Requires explicit confirmation:
- non-exact sheet aliases
- fuzzy sheet matches
- aliases for critical Core/Conditional technical fields
- all fuzzy field suggestions
- manual mapping choices

Mapping conflicts block finalization.

Unmapped controlled fields may remain unmapped. E02 does **not** invent a value, guess below threshold, or replace an unmapped field with zero. Applicability/readiness is deferred to E04.

### Versioned mapping-alias registry

`config/mapping-aliases-v1.1.json` is a controlled companion to `HUF-SS-INPUT-v1.1`.

It contains:
- 11 controlled sheet-alias groups
- 30 sheet-alias terms
- 48 controlled field-alias groups
- 101 field-alias terms

Examples include:
- `02_Structures` ← Structures / Structure Master / Structure Register
- `07_Hydro_Params` ← Hydro Params / Hydrology Parameters / Water Parameters
- `STR-001` ← Structure ID / Structure Code / Asset ID
- `TEC-021` ← Base Area / Measured Base Area / Infiltration Base Area
- `RAN-004` ← Rainfall / Rainfall mm / Daily Rain mm
- `PD-003` ← Activity / Work Scope

Fuzzy controls:
- minimum score = **0.82**
- minimum margin = **0.02**
- maximum suggestions per field = **3**

The registry is version-bound to:
`HUF-SS-INPUT-v1.1`

### Fuzzy-matching safety behavior

The implementation combines:
- normalized lexical similarity
- Levenshtein-style similarity
- sampled source-column type profiling
- controlled field data-type compatibility
- minimum score threshold
- confirmation requirement for fuzzy suggestions

This is useful for obvious header drift/typos, but the system does not allow fuzzy matching to silently become source truth.

The regression suite explicitly checks the typo:
`Verified Base Aera`

as a fuzzy suggestion requiring confirmation.

Unknown headers below the controlled threshold remain unmapped rather than being guessed.

### Immutability and provenance

E02 changes mapping references only.

It does not mutate:
- E01 workbook bytes
- original source values
- original row numbers

Finalization creates:
- source session ID linkage
- source workbook SHA-256 linkage
- input-schema version linkage
- immutable sheet mappings
- immutable field mappings
- deterministic mapping snapshot SHA-256
- final state:
  - `mapping_confirmed`, or
  - `mapping_confirmed_with_unmapped`

The mapping snapshot is therefore auditable and reproducible.

### Conflict protection

E02 detects when the same source sheet/column has been assigned incompatibly to multiple controlled fields.

The 35-test harness verifies:
- conflict count is detected
- finalization is blocked while conflicts remain

This is an important protection against accidental double-use of one source column as two different technical concepts.

### Engine boundary

E02 explicitly does **not**:
- canonicalize values
- convert units
- validate Design-4 readiness
- assign KPI routes
- calculate KPI values
- persist project workbook data
- place project data in URLs

This boundary should remain protected.

Mapping answers:
**“Which uploaded field corresponds to which controlled field?”**

It does not answer:
**“Is the mapped value valid, ready, or calculable?”**

### Regression evidence

`ENGINE02_VALIDATION_STATUS.json` records:
- E01: **25/25 PASS**
- E02: **35/35 PASS**
- controlled fields: **147**
- static architecture: **23/23 PASS**
- project-subpath HTTP: **6/6 PASS**
- browser execution: NOT VERIFIED
- deployed GitHub Pages acceptance: NOT VERIFIED

Exact v1.1 controlled workbook:
- 147/147 controlled fields mapped
- 0 unmapped
- 0 conflicts
- 0 confirmations required

### E02 test coverage

The 35-test Node harness verifies:
- lifecycle reaches mapping review
- expected controlled field count = 147
- exact controlled template maps 147/147
- source catalog resolves 13 sheets
- raw E01 source remains frozen/private
- final mapping snapshot is immutable
- mapping hash is 64-character SHA-256
- versioned alias method works
- critical alias requires confirmation
- `Confirm all` clears eligible pending suggestions
- fuzzy typo suggestion works
- fuzzy mapping requires confirmation
- unknown header remains unmapped
- manual field mapping works and is confirmed
- exact Field ID takes precedence
- exact Field ID auto-confirms
- sheet alias requires confirmation
- manual sheet mapping rebuilds field mappings
- mapping hash is deterministic
- finalization with unmapped field is allowed and explicitly labelled
- duplicate source-column assignment produces conflict
- conflict blocks finalization

No failed E02 check is recorded.

### Browser/deployment status

A headless Chromium attempt was made but did not complete in the environment.

The package correctly records:
- Browser: **NOT VERIFIED**
- project-subpath HTTP static delivery: **PASS**
- deployed GitHub Pages acceptance: **NOT VERIFIED**

This is consistent with the controlled release-gate discipline found in later packages.

### Direct later-release lineage — stronger than Step 3L

Engine 02 has exceptionally strong provenance.

The actual E02 implementation file:

`js/engines/engine02-mapping.js`

has SHA-256:

`46b51031ffa49637ff42f2120eea1f06111767a54a94890b2902d9341e6f7da8`

That exact hash is still present in the Engine 09 release manifest.

The following also remain byte-for-byte identical into Engine 09:

- `ENGINE02_VALIDATION_STATUS.json`
  - `fb1cde7c2be7595c4c5f51b57535f00de64c91dd5e2b5baae04c6ce0467088e8`
- `config/mapping-aliases-v1.1.json`
  - `10ab17a15bfbbef95c546c67dba6b038a2aefebe68997d58d484972c3c143316`
- `docs/ENGINE02_CONTRACT.md`
  - `93425cceb40f831aac669704d591b8d8668f488887dd9428b8e72aae54a0dca2`
- `docs/ENGINE02_VALIDATION_REPORT.md`
  - `e546b063ae40c46202b8c7a037cebd150bf32d9845b3aaa3657db1368038c3f0`
- `tests/node-engine02.mjs`
  - `f1ceba5ee23964cf49b164a43688bf3ef21e6366b386f0179e6ebc04281e3c39`
- `tests/browser-engine02.html`
  - `782ba84b38ef35e46a10362073787a18f11f2d02036d438c456c4ce296eb95ee`

The machine-readable Node result file itself changes hash across later release packages even though the harness remains unchanged; treat that as execution/release-context evidence, not a change to the E02 contract.

Therefore:

> **E02 v0.2.0 is direct final implementation lineage. Its core mapper, alias registry, contract and test harness were carried forward unchanged as later engines were added.**

### Early E02 UI findings

The E02 interface contains several strong product ideas:

**Summary cards**
- mapped fields
- confirmations required
- unmapped fields
- conflicts

**Mapping identity**
- source workbook SHA-256
- schema version
- mapping SHA-256 after confirmation

**Sheet mapping review**
- controlled sheet
- source sheet
- method
- confidence
- confirmation

**Field mapping review**
- field ID
- controlled field
- source column
- mapping method
- confidence
- confirmation
- critical/conflict markers

**Attention-first grouping**
- sheets with pending confirmations are expanded
- exact/clean groups can remain collapsed
- mapping can focus the user on exceptions rather than every exact match

**Finalization control**
- conflicts prevent confirmation
- unmapped fields can remain unmapped for downstream readiness logic
- mapping snapshot is frozen only after required confirmations are resolved

These concepts are well aligned with the future product vision.

### UI weaknesses / development scaffolding

The page is still engineering-oriented:
- “Engine 2” terminology dominates
- nine-engine progress strip remains visible
- internal mapping method labels are exposed directly (`exact-field-id`, `normalized-header`, `alias`, `fuzzy`, `manual`)
- confidence percentages are shown for every row
- large technical tables can become horizontally wide
- `Confirm all mapped suggestions` risks being too broad unless the UX clearly distinguishes low-risk vs critical mappings
- next-engine lock is development scaffolding
- parser/schema hashes are useful for audit users but too prominent for ordinary field users

No dashboard, result analytics, Excel export or PDF reporting implementation exists yet.

### Clean-rebuild product interpretation

Do **not** rebuild the mapping algorithm from scratch merely for a new UI.

Instead:

**Protect**
- frozen mapping order
- controlled alias registry
- exact-match precedence
- critical-field confirmation rules
- fuzzy threshold/type compatibility
- conflict blocking
- unmapped-not-zero behavior
- immutable source-bound mapping snapshot
- E02 35-test regression contract

**Improve the presentation**
- default view should say something like:
  - `147 mapped automatically`
  - `3 need your review`
  - `1 unmapped`
  - `0 conflicts`
- show only exceptions by default
- allow “Show all mapped fields” for MIS/M&E/assurance users
- translate technical methods into clearer language:
  - Exact match
  - Known alternate name
  - Suggested match
  - Manually selected
- reserve raw method IDs, source hashes and confidence metrics for an Advanced/Audit drawer
- make critical technical fields visually obvious
- show source header and controlled destination side-by-side
- make conflict remediation explicit
- keep field-by-field override capability

### Recoverability assessment

There is **no lost E02 calculation/methodology functionality**.

The core mapping implementation already survives in later engine releases.

The main opportunity is product-layer recovery/refinement:
- exception-first mapping review
- clear mapping summary
- explicit confirmation state
- conflict resolution
- source/schema/mapping identity for advanced users

This is a presentation improvement, not an engine rewrite.

### Classification

For `js/engines/engine02-mapping.js`, alias registry, controlled mapping order and finalization semantics:

**DIRECT FINAL ENGINE IMPLEMENTATION BASELINE — KEEP / PROTECT**

For E02 contract, validation report and 35-test harness:

**DIRECT FINAL ENGINE-LINEAGE / REGRESSION BASELINE — KEEP / PROTECT**

For versioned mapping aliases:

**CONTROLLED CONFIGURATION — KEEP / PROTECT**

For mapping confirmation/conflict/unmapped UX concepts:

**KEEP CONCEPT / IMPROVE PRESENTATION**

For detailed mapping tables and raw confidence/method identifiers:

**REFERENCE / MOVE TO ADVANCED OR EXCEPTION-ONLY UX**

For nine-engine strip / locked E03 presentation:

**OBSOLETE DEVELOPMENT SCAFFOLDING — DO NOT REUSE AS FINAL PUBLIC NAVIGATION**

For dashboard/charts/XLSX/PDF/reporting:

**NO LOST IMPLEMENTATION IDENTIFIED IN THIS PACKAGE**



## Step 3N — HUF Supply-Side KPI Calculator Engine 03 v0.3.0

**File:** `HUF_Supply_Side_KPI_Calculator_Engine03_v0.3.0(3).zip`

Purpose:
- third staged browser implementation of the already-frozen Designs 1–6 methodology
- preserves E01 Workbook Intake and E02 Mapping
- adds E03 Canonicalization & Analysis-Ready Data Model
- freezes controlled type/date/unit normalization without altering source truth
- introduces a private immutable canonical truth layer for E04–E09
- formalizes deterministic canonical-content and provenance-bound snapshot hashes

ZIP SHA-256:
`7e1fa094dce693fd7c93062e06ce9c9d8a8dc823a5fb818e6b5650b115f0738b`

Version/status:
- package: `HUF Supply-Side KPI Calculator — Engines 1–3`
- version: `0.3.0-engine03`
- status: `ENGINE03_IMPLEMENTED`
- implemented: E01 + E02 + E03
- not implemented in this package: E04–E09
- architecture: pure-static browser-side GitHub Pages; no build; no backend

### Package contents

56 files total:
- 1 release manifest
- 55 manifest-controlled payload files

Major Engine-03 additions:
- `ENGINE03_VALIDATION_STATUS.json`
- `config/canonicalization-policy-v1.1.json`
- `docs/ENGINE03_CONTRACT.md`
- `docs/ENGINE03_VALIDATION_REPORT.md`
- `js/engines/engine03-canonicalization.js`
- `tests/node-engine03.mjs`
- `tests/node-engine03-result.json`
- `tests/browser-engine03.html`
- `tests/browser-engine03-status.json`

The two Design-6 leap/non-leap golden workbooks remain bundled.

### Integrity

Independent release-manifest verification during this audit:

**55/55 manifest payload hashes PASS**

No missing payload or hash mismatch was found.

### Controlled dependency alignment

The package declares:
- Design 1 route registry: `HUF-DESIGN1-ROUTE-REGISTRY-v1.1`
- Design 2 formula catalog: `HUF-DESIGN2-FORMULA-CATALOG-v1.1`
- Design 3 input schema: `HUF-SS-INPUT-v1.1`
- canonicalization policy: `HUF-CANONICALIZATION-v1.1`
- Design 4 validation rulebook: `HUF-D4-VALIDATION-READINESS-v1.0`
- Design 5 result schema: `HUF-D5-RESULT-AUDIT-REPORTING-v1.0`
- Design 6 UAT contract: `HUF-D6-GOLDEN-UAT-v1.0`

Therefore E03 is a controlled implementation layer downstream of the already-frozen input/mapping methodology.

### Three-layer truth model

Engine 03 makes the staged truth separation explicit:

1. **E01 raw truth**
   - exact workbook bytes
   - exact source rows/headers
   - private and immutable

2. **E02 mapping truth**
   - controlled source-field references
   - confirmed/frozen mapping snapshot
   - immutable and source-bound

3. **E03 canonical truth**
   - typed field-ID-keyed records
   - canonical values/units
   - source value/header/row/mapping lineage retained
   - private immutable snapshot for downstream engines

This separation should remain protected.

### E03 input gate

Canonicalization may start only after:
- E01 raw source snapshot exists, and
- E02 mapping has been finalized with a Mapping SHA-256.

The regression suite explicitly verifies that E03 refuses to run against an unfinalized mapping.

### Canonical record contract

Each canonical record retains:
- controlled table name
- mapped source sheet
- original Excel source row number
- controlled field IDs
- original source value
- canonical typed value
- source header/column lineage
- source unit
- canonical unit
- mapping method lineage
- conversion status/factor
- type/unit diagnostic metadata

The public application state exposes only summary/inventory/diagnostics; the full canonical record payload remains private in browser memory.

### Null-versus-zero policy

The controlled policy states:
- null / undefined / empty / whitespace-only → `null`
- numeric `0` remains `0`
- text numeric `"0"` becomes numeric `0`
- tokens such as `NA`, `N/A`, `-`, `nil` are **not** silently treated as blank

This is a strong data-integrity rule and consistent with the protected methodology.

### Text normalization

For Text/Dropdown values:
- Unicode normalization: NFC
- outer whitespace trimmed
- internal whitespace preserved

The 50-test harness verifies both:
- `"  Demo Project  "` → `Demo Project`
- `Demo   Project` keeps the internal spacing

Therefore E03 cleans representation without silently rewriting substantive text.

### Date normalization

Accepted canonical date behavior:
- ISO `YYYY-MM-DD`
- ISO timestamp inputs where applicable
- Excel date values already recovered by E01

Rejected:
- ambiguous text dates such as `03/04/2025`
- impossible calendar dates

E03 deliberately refuses to guess DD/MM versus MM/DD.

The diagnostic preserves the original source value while canonical value remains null.

### Numeric normalization

The controlled number policy:
- permits numeric source values
- permits numeric strings
- permits Western/Indian comma grouping
- rejects non-finite values
- integers must remain actual integers for Integer fields

The regression suite includes comma-formatted numeric strings and numeric zero.

### Controlled unit normalization

Standard HUF v1.1 workbook headers without an explicit alternate unit are assumed to already use the schema's canonical unit.

Recognized explicit alternate units may be converted deterministically.

Supported canonical families include:
- m
- m2
- m3
- ha
- mm/day
- mm/hour
- decimal degrees
- fraction 0–1
- percent 0–100
- hours
- person-days
- quantity/person-day
- date/source-unit passthrough

Examples frozen in the policy include:
- cm → m
- mm → m
- ft/feet → m
- ha → m²
- m² → ha
- litres → m³
- cm/day → mm/day
- cm/hour → mm/hour
- percent → fraction
- minutes → hours

Unsupported explicit units are **not guessed**:
- canonical value remains null
- status becomes unit-error
- diagnostic is emitted for downstream correction/review

### Important boundary: normalization is not validation

E03 may report:
- type errors
- unsupported explicit units
- normalization diagnostics

E03 must **not** decide:
- whether a field is required
- whether a structure is route-ready
- whether a value is plausible/in-range
- whether a KPI can be calculated
- assurance/certification status

Those belong to Design 4 / E04 and downstream engines.

This distinction should remain visible in architecture and user guidance.

### Canonical hashes

E03 creates two distinct hashes:

**Canonical Content SHA-256**
- deterministic for the same workbook content + canonicalized values + schema/policy
- independent of generated source-session ID

**Canonical Snapshot SHA-256**
- binds canonical content to the exact E01 source session and E02 mapping snapshot
- intended for audit provenance

The regression suite explicitly verifies:
- deterministic content hash across equivalent sessions
- different session/provenance-bound snapshot hash where appropriate

This distinction is useful for controlled regression and audit.

### Mapping-change invalidation

A central architectural safeguard appears here:

> when E02 mapping changes, existing E03 canonical truth is invalidated.

The 50-test harness verifies that both public canonical summary and private canonical snapshot are cleared on mapping change.

This prevents stale prepared data from surviving a source-field remap.

Future rebuilds must preserve this invalidation chain.

### Analysis-ready table model

The implementation generates **11 analysis-ready controlled tables**.

Instructions/support sheets are not treated as analytical data tables.

The golden input produces:
- 365 canonical rainfall station-date records in non-leap FY
- 366 canonical rainfall station-date records in leap FY
- 29-Feb-2024 retained as a real date
- Stage-Area table may contain zero records under the standard simple method

This is consistent with the v1.1 Design-3/Design-4 lineage.

### Regression evidence

`ENGINE03_VALIDATION_STATUS.json` records:

- E01 regression: **25/25 PASS**
- E02 regression: **35/35 PASS**
- E03 module: **50/50 PASS**
- static architecture: **31/31 PASS**
- project-subpath HTTP: **6/6 PASS**
- browser acceptance: **NOT VERIFIED**
- deployed GitHub Pages acceptance: **NOT VERIFIED**

The browser attempt timed out before producing the DOM result, so the package correctly avoids mislabeling the browser gate as PASS or FAIL.

### E03 test coverage

The 50-test Node harness verifies, among other items:
- lifecycle reaches `canonical_ready`
- 11 canonical tables
- 365/366 rainfall calendar preservation
- leap date retained
- Stage-Area can be empty
- standard golden data has 0 type/unit errors
- blank remains null
- numeric zero remains numeric zero
- source row numbers retained
- original source value retained
- controlled field IDs used
- mapping hash lineage retained
- policy version retained
- private canonical snapshot immutable
- public state has no canonical payload
- source/control dates normalize correctly
- explicit rainfall zero preserved
- supported alternate-unit conversion
- percent → fraction conversion
- unsupported explicit unit produces null + diagnostic
- text normalization rules
- comma-formatted numeric parsing
- ambiguous date rejected
- impossible date rejected
- diagnostics preserve source values
- unfinalized E02 mapping blocks E03
- mapping changes invalidate canonical truth
- deterministic canonical content hash
- session-bound snapshot hash behavior

No failed E03 check is recorded.

### Direct later-release lineage

The E03 implementation has the same exceptionally strong lineage as E02.

The following exact hashes are present in the later Engine-09 release:

- `js/engines/engine03-canonicalization.js`
  - `88d455ac42fab9fb2bf9ce2dbcef2a0956e05fda118b4a2b15e0d48bebabde21`
- `config/canonicalization-policy-v1.1.json`
  - `b5a8fc9207fcdf64f7885d99d2f29b6e0711296df300498b816e1898951a3c2d`
- `docs/ENGINE03_CONTRACT.md`
  - `e5cb07141334e4ff899a43d8d563e8ed34e13186a4d16af47a11ba7f44fbcff7`
- `docs/ENGINE03_VALIDATION_REPORT.md`
  - `d1263d7a1fbd605cfa5cd2de100c1834f61cea81899bee0474a2a3dd719d250f`
- `tests/node-engine03.mjs`
  - `7d9415409361603badcedb3dd72a97823c5767a25475a4b2a540fb952f45a3fd`
- `tests/browser-engine03.html`
  - `d495e75881383a117ab8d779c666d756fc6fa20b92e115c37f50e59e20f04610`
- `tests/browser-engine03-status.json`
  - `989ce511e3a73922f8de79b70dcf30926b8bdf0620c8bae4983a1b479f3d100a`
- `ENGINE03_VALIDATION_STATUS.json`
  - `58c8be8772ceb9dd8b4b7a2d17de9668daf36b556b963310622a816cebb64d76`

The Engine-03 Node result artifact changes hash in later release packages even though the test harness remains byte-identical; treat this as execution/release-context evidence rather than a change to the E03 contract.

Therefore:

> **E03 v0.3.0 is direct final engine implementation lineage. The canonicalization engine, policy, contract and test harness survived unchanged as downstream engines were added.**

### Early E03 UI/product findings

The early E03 page exposes:

**Canonical summary cards**
- canonical tables
- source records
- canonical cells
- controlled unit conversions
- blanks preserved
- type/unit diagnostics

**Truth-layer identity**
- source SHA-256
- mapping SHA-256
- canonical content SHA-256
- canonical snapshot SHA-256
- policy version

**Analysis-ready table inventory**
- controlled table
- mapped source sheet
- record count
- field count

**Canonicalization diagnostics**
- diagnostic code
- sheet/row
- field ID/source header
- status
- detail

This is excellent assurance/developer visibility but too technical as the default public workflow.

### Clean-rebuild product interpretation

Ordinary users should generally not need to understand “canonicalization” as an engine concept.

Recommended presentation:

**Default workflow**
- “Preparing your data”
- “11 tables prepared”
- “0 values need correction”
- “2 unit conversions applied”
- “Blanks preserved”

If issues exist:
- “3 values could not be interpreted”
- “2 units need review”
- show source sheet/row/field and actionable correction

**Advanced / Audit**
- source SHA
- mapping SHA
- canonical content SHA
- canonical snapshot SHA
- policy version
- raw diagnostic codes
- conversion factors/status
- detailed table inventory

This preserves auditability without making technical truth-layer language the primary product experience.

### Important UX distinction

Do not show E03 diagnostics as Design-4 validation failure.

Examples:
- an unparseable date is an E03 type-normalization issue
- an unsupported explicit unit is an E03 normalization issue
- a value that parses successfully but is outside an acceptable range is an E04 validation issue
- a field being absent but irrelevant to the selected route may be acceptable downstream

The future validation experience should preserve this distinction while translating it into user-friendly language.

### Recoverability assessment

No lost calculation or methodology implementation was found.

The E03 engine/policy already survives in later releases.

Potential product-layer recovery:
- concise data-preparation summary
- visible unit-conversion transparency
- actionable type/unit correction register
- advanced source→mapping→canonical provenance
- analysis-ready table inventory for technical users

These are presentation opportunities, not reasons to rewrite E03.

### Classification

For `engine03-canonicalization.js`:

**DIRECT FINAL ENGINE IMPLEMENTATION BASELINE — KEEP / PROTECT**

For `canonicalization-policy-v1.1.json`:

**CONTROLLED NORMALIZATION POLICY — KEEP / PROTECT**

For E03 contract, validation report and 50-test harness:

**DIRECT FINAL REGRESSION / ENGINE-LINEAGE BASELINE — KEEP / PROTECT**

For source→mapping→canonical truth separation and invalidation behavior:

**CORE ARCHITECTURAL CONTROL — KEEP / PROTECT**

For deterministic content/snapshot hashes:

**AUDIT / REGRESSION CONTROL — KEEP**

For canonical summary + unit/type diagnostics:

**KEEP CAPABILITY / SIMPLIFY DEFAULT UX**

For raw SHA chains, diagnostic codes, conversion statuses and table internals:

**KEEP IN ADVANCED / AUDIT UX**

For “Engine 3 / Canonical Model / Engine 4 Locked” development presentation:

**OBSOLETE PUBLIC SCAFFOLDING — DO NOT REUSE AS MAIN NAVIGATION**

For dashboard/charts/XLSX/PDF/reporting:

**NO LOST IMPLEMENTATION IDENTIFIED IN THIS PACKAGE**



## Step 3O — HUF Supply-Side KPI Calculator Engine 04 v0.4.0

**File:** `HUF_Supply_Side_KPI_Calculator_Engine04_v0.4.0(3).zip`

Purpose:
- fourth staged browser implementation of the already-frozen Designs 1–6 methodology
- preserves E01 Intake, E02 Mapping and E03 Canonicalization
- adds E04 Validation & Readiness against the frozen Design-4 rulebook
- executes rule applicability with workbook / record / rainfall-series / cascade-network / person-day scope isolation
- creates an immutable validation snapshot for E05 routing and downstream calculation
- introduces 15 real high-risk mutated XLSX regression fixtures from the frozen Design-6 UAT contract

ZIP SHA-256:
`74e18823d769a08f4bedb9e69fe104d9cebaaa6ae2dcc64cc69d1b104266a552`

Version/status:
- package: `HUF Supply-Side KPI Calculator — Engines 1–4`
- version: `0.4.0-engine04`
- status: `ENGINE04_IMPLEMENTED`
- implemented: E01 + E02 + E03 + E04
- not implemented in this package: E05–E09
- architecture: pure-static browser-side GitHub Pages; no build; no backend

### Package contents

83 files total:
- 1 release manifest
- 82 manifest-controlled payload files

Major Engine-04 additions:
- `ENGINE04_VALIDATION_STATUS.json`
- `config/route-registry-v1.1.json`
- `config/validation-rulebook-v1.0.json`
- `docs/ENGINE04_CONTRACT.md`
- `docs/ENGINE04_VALIDATION_REPORT.md`
- `js/engines/engine04-validation.js`
- `tests/node-engine04.mjs`
- `tests/node-engine04-result.json`
- `tests/node-engine04-fixtures.mjs`
- `tests/node-engine04-fixtures-result.json`
- `tests/browser-engine04.html`
- `tests/browser-engine04-status.json`
- 15 high-risk physical XLSX fixtures under `tests/fixtures/engine04/`

The two Design-6 positive leap/non-leap golden workbooks remain included.

### Integrity

Independent release-manifest verification during this audit:

**82/82 manifest payload hashes PASS**

No missing payload or hash mismatch was found.

### Controlled dependency alignment

The package declares:
- Design 1 route registry: `HUF-DESIGN1-ROUTE-REGISTRY-v1.1`
- Design 2 formula catalog: `HUF-DESIGN2-FORMULA-CATALOG-v1.1`
- Design 3 input schema: `HUF-SS-INPUT-v1.1`
- canonicalization policy: `HUF-CANONICALIZATION-v1.1`
- Design 4 validation rulebook: `HUF-D4-VALIDATION-READINESS-v1.0`
- Design 5 result schema: `HUF-D5-RESULT-AUDIT-REPORTING-v1.0`
- Design 6 UAT contract: `HUF-D6-GOLDEN-UAT-v1.0`

The exact validation rulebook SHA-256 is:

`f8d15a04cac853ad8fa10fedcbb2678e96c8787be1a1281465b6369d7b04182f`

This is the same frozen Design-4 rulebook already audited in Step 3I and retained in later staged releases.

### E04 start gate

Engine 4 starts only after E03 has produced a finalized immutable canonical snapshot.

It loads:
- the frozen Design-4 validation/readiness rulebook
- Design-1 route registry for applicability context
- HUF v1.1 input schema

It therefore validates prepared canonical truth; it does not reinterpret raw workbook values.

### E04 output contract

Private immutable validation snapshot includes:
- validation issue registry
- workbook readiness
- structure validation readiness
- person-day validation readiness
- candidate route hints used only for rule applicability
- leap-aware calendar summary
- rule coverage / deferred-rule registry
- source/canonical/rulebook lineage
- validation snapshot SHA-256

The public store exposes a safe summary/preview rather than the full private validation truth object.

### Frozen readiness states

Six controlled states remain:

1. `workbook_not_ready`
   - workbook-level schema/control failure
   - no official formulas should execute

2. `not_ready`
   - affected structure/series/network/person-day claim has a blocking issue

3. `ready`
   - calculation prerequisites pass

4. `ready_with_warning`
   - prerequisites pass but a non-blocking warning applies

5. `hold`
   - recognized route has no approved automatic calculation method

6. `excluded`
   - recognized record is excluded from automatic compliant water totals

These states should remain semantically distinct in all future UI/reporting.

### Scope-isolation model

Frozen Design-4 scope effects are implemented as:

**WORKBOOK_BLOCK**
- entire workbook stops
- example: unsupported control/schema/reporting period

**RECORD_BLOCK**
- affected structure/person-day/evidence premise only
- unrelated records remain available

**SERIES_BLOCK**
- affected rainfall station/date series
- only linked WTR-111 simulation windows are blocked

**NETWORK_BLOCK**
- affected cascade connected component only

**ROUTE_HOLD**
- recognized but no water calculation method

**ROUTE_EXCLUDE**
- excluded from water totals while other modules/evidence/person-days continue

**WARNING_ONLY**
- calculation may continue as `ready_with_warning`

**ASSURANCE_DOWNGRADE**
- numerical readiness remains intact; E07 handles evidence status

**AGGREGATION_BLOCK**
- source results remain intact; aggregate output may be withheld in E08

This is one of the strongest methodological controls in the implementation and should not be flattened into workbook-wide PASS/FAIL behavior.

### Route boundary

E04 may derive a `candidateRouteHint` only to determine which validation rules apply.

It is **not official routing truth**.

E05 must independently finalize exactly one water route using:
- frozen route registry
- validation snapshot
- structure/intervention/reporting context

Future UI must avoid labelling candidate route hints as final route assignment before E05.

### Rule ownership

Frozen Design-4 rulebook:
- total rules: **95**
- E04 evaluated: **87**
- downstream deferred: **8**

Deferred rules:

- `VAL-063` proportional evaporation-area bounds — E06 daily state
- `VAL-066` advanced stage extrapolation — E06 daily state
- `VAL-086` nonnegative daily states — E06
- `VAL-087` mass-balance residual — E06
- `VAL-088` KPI 1.1.1 identity — E06
- `VAL-089` no internal rounding — E06 implementation QA
- `VAL-090` aggregation status segregation — E08
- `VAL-091` aggregation coverage reconciliation — E08

Critical interpretation:

> Deferred does not mean PASS.

Those eight rules can only be evaluated when the owning downstream state exists.

This matches the Step-3I Design-4 audit and should remain explicit in testing/reporting.

### Positive golden behavior

For the two frozen all-structure positive portfolios:

**FY 2024–25**
- 365 expected dates
- workbook readiness = ready
- no blocking issue
- one expected legacy method warning (`VAL-013`)

**FY 2023–24**
- 366 expected dates
- 29-Feb-2024 correctly included
- workbook readiness = ready
- no blocking issue
- one expected legacy method warning (`VAL-013`)

Readiness counts in both:
- 11 `ready_with_warning`
- 6 `ready`
- 1 `hold`
- 2 `excluded`

Person-day claims:
- 20/20 independently ready in the positive portfolio

### E04 core regression

`tests/node-engine04-result.json` records:

**24/24 PASS**

Checks include:
- E04 lifecycle reaches `validation_ready`
- 95 rules loaded
- 87 evaluated
- 8 deferred
- 365/366 calendar behavior
- leap date correct
- both goldens workbook-ready
- 20 structures
- 20 person-day rows
- validation snapshot immutable/private
- no private validation truth in public state
- 64-character validation SHA-256
- expected `VAL-013` warning
- partly-lined record = `hold`
- governance record = `excluded`
- subsurface record = `excluded`
- all positive person-day claims independently ready

### 15 high-risk real XLSX fixtures

This package is the first staged engine release where the frozen Design-6 physical workbook mutations are executed directly against E04.

Result:

**15/15 PASS**

Cases:

1. Missing leap day
   - target: `VAL-049`
   - scope: series block
   - 11 linked WTR-111 structures blocked
   - person-days unaffected

2. Duplicate rainfall date
   - `VAL-045`
   - 10 linked structures blocked
   - partial-season structure starting after mutated date unaffected

3. Negative rainfall
   - `VAL-047`
   - 10 linked structures blocked
   - unrelated modules remain ready

4. Missing Verified Base Area
   - `VAL-055`
   - one structure blocked

5. Base Area > Full Surface Area
   - `VAL-056`
   - one structure blocked

6. Missing February evaporation
   - `VAL-059`
   - 11 linked WTR-111 structures blocked

7. Advanced Stage method missing group
   - `VAL-019`
   - one structure blocked

8. Cascade cycle
   - `VAL-043`
   - only the 2-structure connected component blocked

9. Rejuvenation Route A missing baseline
   - `VAL-033`
   - one structure blocked

10. Rejuvenation Route B missing verified desilted volume
    - `VAL-034`
    - one structure blocked

11. Fully lined pond inlet-condition failure
    - `VAL-073`
    - lined pond only blocked

12. Other-approved surface method missing approval
    - `VAL-031`
    - that structure only blocked

13. Duplicate person-day claim
    - `VAL-082`
    - two conflicting person-day rows blocked
    - all water readiness unaffected

14. Rainfall outside reporting FY
    - `VAL-050`
    - warning only
    - no water blocker

15. Partial-season missing Functional Date
    - `VAL-026`
    - one structure blocked

Every case records:
- target rule triggered
- expected scope preserved
- water blocked count matches expectation
- person-day blocked count matches expectation
- independence condition passes

### Important clarification relative to Step 3K / Design 6

This package materially sharpens the interpretation of the later Design-6 certification gap.

Engine 04 already demonstrates:
- real implementation of the frozen E04 rule engine
- 87/95 rule ownership
- 15/15 physical high-risk workbook cases executed successfully

The later Design-6 rc.1 assessment's **80 NOT VERIFIED** items correspond mainly to the remaining machine-generated/canonical mutation scenarios, not evidence that Engine 04 lacked its core validation implementation.

Correct conclusion:

> **E04 implementation and the 15 physical high-risk cases are positively evidenced. Full Design-6 scenario execution remained incomplete.**

Do not conflate:
- “E04 implementation exists and its physical high-risk regression passes”
with
- “all 95 Design-4 scenario-builder cases were executed in a final browser/deployed acceptance run”.

The second remained an open certification gap in evidence reviewed so far.

### Browser/deployment status

Package reports:
- static architecture: **40/40 PASS**
- `/repo/` project-subpath HTTP resources: **8/8 PASS**
- real browser execution: **NOT VERIFIED**
- deployed GitHub Pages acceptance: **NOT VERIFIED**

Chromium was invoked but timed out before returning a DOM result.

Therefore the package correctly avoids a false production/GitHub-ready claim.

### Direct later-release lineage

The actual E04 implementation survives byte-for-byte into the later Engine-09 release:

`js/engines/engine04-validation.js`

SHA-256:
`2754a96576c006809af3fb5d53177eddb37f2cb6658803e29544b88be8032d8b`

The following also survive unchanged:

- `config/validation-rulebook-v1.0.json`
  - `f8d15a04cac853ad8fa10fedcbb2678e96c8787be1a1281465b6369d7b04182f`
- `ENGINE04_VALIDATION_STATUS.json`
  - `cbe79b7daf2ac7097443932b7bd608dd955f8f279227a94a91d786184f50db46`
- `docs/ENGINE04_CONTRACT.md`
  - `c8c43146f9e7fa0539a9f3a90bdf618cfdac9e4d7dd04e16c7bba7285b0f0587`
- `docs/ENGINE04_VALIDATION_REPORT.md`
  - `5d506d090735b8e25930a4ab964cd485749959dab38f541e762e31b8b6aea0db`
- `tests/node-engine04.mjs`
  - `148cf7ae6432dec03ca568be5e7047d50aa1f907d5e39f97f72b31c0ea64d7a3`
- `tests/node-engine04-result.json`
  - `e9bb10652a51763f563885b5c7f51f1ea39a653842217ca4e288c5aa7539bce5`
- `tests/node-engine04-fixtures.mjs`
  - `d81d74a2798c49b1f4b9822b336065721050b273184c37f02a48d0264affdc2a`
- `tests/node-engine04-fixtures-result.json`
  - `281938b0887bceacc71fbf0852ba319bcc3520942164a9ce9397fc441eff94a7`
- `tests/browser-engine04.html`
  - `8fbc77ea209451fa35164a5982b2025f072c4cf5bd499a4206ccce774da064b0`
- `tests/browser-engine04-status.json`
  - `dce72d850353b64a869d8891b7c3ba2b993705705f3a68a7a80382ff57a65f98`

The 15 physical fixture files also remain in later staged releases.

Therefore:

> **E04 v0.4.0 is direct final implementation lineage. The validation engine, rulebook, contract, regression harness and high-risk workbook fixtures were retained rather than rewritten.**

### Early E04 UI/product findings

The Engine-04 screen is the first staged release with a genuinely useful operational exception workflow.

It contains:

**Top-level validation metrics**
- total validation issues
- blocking/scoped count
- warning count
- structures ready / total
- not-ready / hold / excluded counts
- person-day claims
- evaluated/deferred rule coverage

**Validation snapshot**
- workbook readiness
- expected reporting calendar/day count
- canonical SHA
- validation rulebook version
- validation SHA

**Structure readiness table**
- Structure ID
- candidate route hint
- readiness
- blockers
- warnings

**Issue registry**
- scoped issue occurrences
- independence messaging
- affected record/series/network context

**Rule ownership**
- evaluated here
- deferred downstream
- explicitly says deferred rules are not falsely marked PASS

**Engine boundary**
- validates without official routing or calculation

These concepts are strong and should influence the clean product.

### Product-layer weaknesses

The page is still engineering-centric:
- “Engine 4” is the dominant language
- candidate-route-hint terminology is exposed to ordinary users
- rule coverage counts and SHA hashes receive too much prominence
- raw rule IDs likely dominate issue detail
- readiness words use machine-style labels
- engine strip/“Engine 5 Locked” remains development scaffolding
- no correction workflow groups issues by practical action or source sheet
- no management-level summary of what can still calculate despite issues
- no exportable validation/correction register yet

### Clean-rebuild validation UX

Future default UX should emphasize:

**Workbook status**
- Ready
- Needs workbook correction
- Ready with warnings

**Calculation coverage**
- `17 of 20 structures can proceed`
- `20 person-day claims can proceed`
- `3 structures need correction`
- `1 route on hold`
- `2 records excluded by method`

**Actionable issue groups**
- Workbook setup
- Structure data
- Rainfall/time-series data
- Geometry/capacity
- Cascade/network
- Evaporation/infiltration
- Evidence/approval
- Person-days

Each issue should show:
- plain-language problem
- affected structure/claim
- source sheet / row / field where possible
- what it blocks
- what remains unaffected
- required correction
- rule ID in expandable technical detail

### Preserve scope isolation in UX

The frontend must not visually imply that one issue invalidates the whole workbook when the frozen rule scope is narrower.

Examples:
- one bad Base Area → one structure
- bad shared rainfall → linked WTR-111 structures only
- cascade cycle → affected network only
- duplicate person-day rows → those claims only
- ordinary warning → calculation continues
- excluded/hold → controlled terminal state, not “error”

This is a major product requirement.

### Rule-ID presentation

Rule IDs are essential audit lineage but should not lead the ordinary user experience.

Recommended:
- default: human-readable finding + correction + affected scope
- expandable detail: `VAL-055`, severity, scope effect, controlled field IDs, source lineage
- technical export: full rule register and validation snapshot lineage

### Recovery assessment

No lost E04 implementation was found:
- engine survives
- rulebook survives
- core harness survives
- high-risk fixtures survive
- physical fixture test result survives

The main opportunity is to **rebuild the validation presentation**, not the validation methodology.

### Classification

For `engine04-validation.js`:

**DIRECT FINAL ENGINE IMPLEMENTATION BASELINE — KEEP / PROTECT**

For the frozen Design-4 validation rulebook:

**CONTROLLED METHODOLOGY / VALIDATION BASELINE — KEEP / PROTECT**

For E04 contract, 24-test core suite and 15-fixture suite:

**DIRECT FINAL REGRESSION BASELINE — KEEP / PROTECT**

For 15 mutated workbook fixtures:

**IMMUTABLE HIGH-RISK REGRESSION EVIDENCE — KEEP**

For workbook/record/series/network/person-day scope isolation:

**CORE METHODOLOGICAL CONTROL — KEEP / PROTECT**

For readiness-state semantics:

**KEEP / PROTECT**

For validation snapshot + rule/source lineage:

**KEEP / ADVANCED-AUDIT PRESENTATION**

For structure-readiness and issue-registry concepts:

**KEEP CAPABILITY / SIGNIFICANTLY IMPROVE UX**

For raw rule IDs, candidate-route hints, rule-coverage counts and engine terminology in default UI:

**MOVE TO ADVANCED / AUDIT OR TRANSLATE TO USER LANGUAGE**

For engine-strip / Engine-5-locked presentation:

**OBSOLETE DEVELOPMENT SCAFFOLDING — DO NOT REUSE AS FINAL NAVIGATION**

For dashboard/charts/XLSX/PDF:

**NO LOST IMPLEMENTATION IDENTIFIED IN THIS PACKAGE**



## Step 3P — HUF Supply-Side KPI Calculator Engine 05 v0.5.0

**File:** `HUF_Supply_Side_KPI_Calculator_Engine05_v0.5.0(3).zip`

Purpose:
- fifth staged browser implementation of the already-frozen Designs 1–6 methodology
- preserves E01 Intake, E02 Mapping, E03 Canonicalization and E04 Validation
- adds E05 Eligibility & Official Routing
- establishes the official water-route truth layer after validation
- freezes exactly one controlled route per routable structure/run when route-defining inputs are resolved
- keeps route identity separate from calculation eligibility/readiness
- routes KPI 1.2.1 person-day claims independently from water routing
- creates immutable routing content/snapshot SHA-256 lineage for E06 and downstream reporting

ZIP SHA-256:
`271b74e35995431b4bdd5ed59722f94546f250b5b62f637d84881e795425f9c9`

Version/status:
- package: `HUF Supply-Side KPI Calculator — Engines 1–5`
- version: `0.5.0-engine05`
- status: `ENGINE05_IMPLEMENTED`
- implemented: E01 + E02 + E03 + E04 + E05
- not implemented in this package: E06–E09
- architecture: pure-static browser-side GitHub Pages; no build; no backend

### Package contents

94 files total:
- 1 release manifest
- 93 manifest-controlled payload files

Major Engine-05 additions:
- `ENGINE05_VALIDATION_STATUS.json`
- `config/routing-policy-v1.0.json`
- `docs/ENGINE05_CONTRACT.md`
- `docs/ENGINE05_VALIDATION_REPORT.md`
- `js/engines/engine05-routing.js`
- `tests/node-engine05.mjs`
- `tests/node-engine05-result.json`
- `tests/node-engine05-fixtures.mjs`
- `tests/node-engine05-fixtures-result.json`
- `tests/browser-engine05.html`
- `tests/browser-engine05-status.json`

The frozen Design-6 leap/non-leap positive workbooks and all 15 Engine-04 high-risk XLSX fixtures remain included.

### Integrity

Independent release-manifest verification during this audit:

**93/93 manifest payload hashes PASS**

No missing payload or hash mismatch was found.

### Controlled dependency alignment

The package declares:
- route registry: `HUF-DESIGN1-ROUTE-REGISTRY-v1.1`
- formula catalog: `HUF-DESIGN2-FORMULA-CATALOG-v1.1`
- input schema: `HUF-SS-INPUT-v1.1`
- canonicalization policy: `HUF-CANONICALIZATION-v1.1`
- validation rulebook: `HUF-D4-VALIDATION-READINESS-v1.0`
- result schema: `HUF-D5-RESULT-AUDIT-REPORTING-v1.0`
- UAT contract: `HUF-D6-GOLDEN-UAT-v1.0`
- routing policy: `HUF-E05-OFFICIAL-ROUTING-v1.0`

Therefore E05 is implementation against the protected frozen Design-1 routing registry and downstream Design-4 readiness truth.

### E05 responsibility

Engine 5 owns **official routing truth**.

It consumes:
- immutable E03 canonical snapshot
- immutable E04 validation snapshot
- frozen Design-1 route registry
- controlled E05 routing policy

It returns:
- official water route decisions
- route eligibility/readiness status
- route reason/timing metadata
- person-day route decisions
- route-count summaries
- deterministic routing content SHA-256
- provenance-bound routing snapshot SHA-256

It does **not** calculate water volume or person-days.

### Frozen water-route invariant

For each valid routable structure/intervention/reporting run, E05 assigns at most one of the ten frozen Design-1 water routes:

- `WTR-111-NEW`
- `WTR-111-REJ-A`
- `WTR-111-REJ-B`
- `WTR-112-NEW`
- `WTR-112-REJ-A`
- `WTR-112-REJ-B`
- `WTR-LFP`
- `WTR-HOLD-PARTLY-LINED`
- `WTR-EXCL-GOV`
- `WTR-EXCL-SUB`

If a route-defining input is unresolved:
- `waterRouteId = null`
- route decision status = `unresolved`
- E05 does not guess or substitute another route

### Frozen routing precedence

The routing policy freezes this order:

1. governance intervention → `WTR-EXCL-GOV`
2. subsurface recharge type → `WTR-EXCL-SUB`
3. partly lined → `WTR-HOLD-PARTLY-LINED`
4. fully lined Farm Pond → `WTR-LFP`
5. otherwise resolve timing:
   - KPI 1.1.1 family
   - KPI 1.1.2 family
6. resolve New vs Rejuvenation A/B

Validation problems do not silently override this precedence.

### Timing control

**Strict cutoff**
- Completion Date `<= cutoff` → KPI 1.1.1 route family
- Completion Date `> cutoff` → KPI 1.1.2 route family

**Partial season**
- requires Functional Date
- always uses KPI 1.1.1 route family
- simulation start metadata = `max(Functional Date, Reporting Start Date)`

Missing route-defining dates:
- route unresolved
- never guessed

### Rejuvenation routing

Rejuvenation routes A and B remain mutually exclusive.

E05 separates:
- route identity
from
- downstream calculation readiness

Therefore missing calculation inputs such as baseline capacity or verified desilted volume may make the route ineligible/not-ready without silently changing the rejuvenation method/route identity when the method itself is still known.

### Eligibility/readiness mapping

E05 propagates E04 readiness into route eligibility:

- `ready` → `eligible`
- `ready_with_warning` → `eligible_with_warning`
- `not_ready` → `not_ready`
- `hold` → `hold`
- `excluded` → `excluded`

Important:

> A route can remain officially known while the structure is not currently calculation-ready.

This separation is a major controlled-methodology principle.

### Person-day routing

KPI 1.2.1 is routed independently:

- Paid labour → `PD-DIRECT`
- Community contribution → `PD-COMMUNITY`
- Volume-based estimate → `PD-VOLUME`
- Machinery-support labour → `PD-MACHINERY`

Water-route problems do not alter person-day route identity/readiness.

Person-day validation problems do not alter water routing.

### Golden routing distribution

Both frozen leap and non-leap all-structure portfolios resolve to the same water-route distribution:

- `WTR-111-NEW`: 9
- `WTR-111-REJ-A`: 1
- `WTR-111-REJ-B`: 1
- `WTR-112-NEW`: 3
- `WTR-112-REJ-A`: 1
- `WTR-112-REJ-B`: 1
- `WTR-LFP`: 1
- `WTR-HOLD-PARTLY-LINED`: 1
- `WTR-EXCL-GOV`: 1
- `WTR-EXCL-SUB`: 1

All 20 structures receive exactly one official route in the positive portfolios.

Eligibility:
- 11 `eligible_with_warning`
- 6 `eligible`
- 1 `hold`
- 2 `excluded`

Person-day route counts:
- `PD-DIRECT`: 5
- `PD-COMMUNITY`: 5
- `PD-VOLUME`: 5
- `PD-MACHINERY`: 5

Leap/non-leap affects later calendar/calculation context, not route identity in these goldens.

### E05 core regression

`tests/node-engine05-result.json` records:

**64/64 PASS**

Core checks include:
- lifecycle reaches `routing_ready`
- 20 water decisions / 20 assigned routes / 0 unresolved in golden
- 20 person-day decisions / 20 assigned / 0 unresolved
- exact 10-route distribution
- exact four person-day route counts
- exactly one route per structure
- all route IDs belong to the frozen registry
- positive candidate hints agree with official routes
- official HOLD/excluded behavior
- fully lined farm-pond precedence
- partial-season Masonry Weir route and simulation start
- 11 warning-eligible / 6 eligible / 1 hold / 2 excluded
- person-day independence
- private immutable routing snapshot
- no private routing payload in public state
- routing/content SHA-256 length
- frozen route-registry and routing-policy version lineage
- leap/non-leap route-distribution equality
- no numeric water-result fields in E05
- no calculated person-day values in E05
- strict-cutoff New/Rejuvenation branch behavior
- missing completion date → unresolved
- missing rejuvenation method → unresolved
- workbook-not-ready → routing withheld
- all four person-day category routes
- unknown person-day category → unresolved

No failed core check is recorded.

### High-risk routing fixtures

The same 15 frozen high-risk workbooks are passed through E05.

Result:

**15/15 PASS**

Key rule:

> Validation failures normally change eligibility/readiness, not route identity.

Observed cases:

- missing leap day: official routes unchanged; linked structures `not_ready`
- duplicate rainfall date: official routes unchanged; linked structures `not_ready`
- negative rainfall: official routes unchanged
- missing Verified Base Area: same route, one structure `not_ready`
- Base Area > Full Surface: same route, one structure `not_ready`
- missing February evaporation: same route, linked structures `not_ready`
- advanced stage-area missing group: same route, one structure `not_ready`
- cascade cycle: same official routes, affected network not ready
- REJ-A baseline missing: route identity retained; calculation eligibility not ready
- REJ-B desilted volume missing: route identity retained; calculation eligibility not ready
- lined pond inlet failure: `WTR-LFP` identity remains; eligibility not ready
- Other-approved surface approval missing: official route remains; eligibility not ready
- duplicate person-day claims: all water routes unchanged; two PD claims not ready
- rainfall outside FY: warning only; route identity unchanged
- partial-season Functional Date missing: genuine route-defining failure; the Masonry Weir changes from `WTR-111-NEW` to unresolved/null

This strongly confirms that route identity is protected from unrelated downstream validation failures.

### Relationship to E04 candidate route hints

E04 candidate route hints exist only for validation applicability.

E05 owns official route truth.

The positive golden suite confirms candidate hints agree with official routes where all route-defining inputs are resolved.

Future UI/reporting must not promote the E04 hint to official route status before E05 completes.

### Routing hashes

E05 keeps:
- Routing Content SHA-256
- Routing Snapshot SHA-256

As in E03:
- content identity is deterministic for equivalent routing content
- snapshot identity binds the output to the controlled upstream run/provenance context

The routing snapshot remains private/immutable.

### Direct later-release lineage

The actual E05 routing implementation survives byte-for-byte into the later Engine-09 release:

`js/engines/engine05-routing.js`

SHA-256:
`3e8b984e8e3d00fa05b3080c251fb814f1709ad2ac76a82f98163d65ca9cb3e1`

The following also remain byte-for-byte identical in Engine 09:

- `config/routing-policy-v1.0.json`
  - `2f2c019d9f27095b78dac1321e09e73e2c006d338904bd147f88a56bad90ae2f`
- `ENGINE05_VALIDATION_STATUS.json`
  - `6434a4aff3fcf64fe45973e1894f6dc7270655944e363b615d4e71654e5dede3`
- `docs/ENGINE05_CONTRACT.md`
  - `f40fdc93c4b935908a1f7a104f964aeaad82c6a913af78ecc19f23fa2950c21d`
- `docs/ENGINE05_VALIDATION_REPORT.md`
  - `d121049dd9eea86eb6a1fe0b97d5b60b8b21501a06082ae485f6acfda02ecc5f`
- `tests/node-engine05.mjs`
  - `8b2aa032d7960808da71d9fdcc8e52c9d0243fe123cd05e9ee9dbc033c3cd65d`
- `tests/node-engine05-result.json`
  - `db96c01c065e3fc1cef8f5366e46d5922662941de1a018341eb3a1f19a2078d7`
- `tests/node-engine05-fixtures.mjs`
  - `7d41c24da910b6c59a7065769098f21eb7f300a27a1fe242194fbe337266f726`
- `tests/node-engine05-fixtures-result.json`
  - `be4dfb08b237106e4f97a5e771f4cd94a0410fec0b051b3d7070ee13536a111f`
- `tests/browser-engine05.html`
  - `9f5c1bd9a47a4890344692528ae28a802bcf363e2243a969ef0565f165b047f8`
- `tests/browser-engine05-status.json`
  - `c9b2679e4f94654d2867a7230fb039905a9111b7dfbd7ba8132d43806ad583c7`

Therefore:

> **E05 v0.5.0 is direct final engine implementation lineage. The routing engine, routing policy, contracts, regression results and harnesses all survive unchanged in later staged releases.**

### Browser/deployment status

Package reports:
- static architecture: **51/51 PASS**
- `/repo/` project-subpath HTTP resources: **9/9 PASS**
- real Chromium acceptance: **NOT VERIFIED**
- deployed GitHub Pages acceptance: **NOT VERIFIED**

Headless Chromium timed out before a DOM/test result was returned.

This remains an environment/acceptance gap, not an E05 module FAIL.

### Early E05 UI/product findings

The Engine-05 page exposes:

**Top summary**
- water routes assigned / structure count
- unresolved route count
- KPI 1.1.1 route count
- KPI 1.1.2 route count
- person-day route count

**Official routing snapshot**
- validation SHA
- routing content SHA
- routing snapshot SHA
- route-registry/policy version

**Official water-route table**
- Structure ID
- Official route
- Water component
- Eligibility
- Validation readiness
- Timing
- Aggregation bucket

**Person-day routing table**
- Claim
- Category
- Official PD route
- Eligibility
- Validation readiness
- Water dependency

**Route distribution**
- water-route counts
- person-day-route counts

**Engine boundary**
- explicit note that E05 finalizes route truth without calculating KPI values

These are useful technical/audit capabilities.

### Product-layer weaknesses

The page is still development/engineering oriented:
- “Engine 5” terminology dominates
- raw route IDs are presented as the primary user vocabulary
- routing/content SHA-256 values are prominent
- `aggregation bucket` is exposed before ordinary users need it
- `candidate route` / `route decision` / `routing snapshot` are technical concepts
- eligibility and validation-readiness columns may duplicate each other for nontechnical users
- no plain-language explanation of why a route was selected
- no route-family grouping by KPI / intervention / method for management use
- no geography filtering or structure drill-down context
- no report/export functionality yet
- Engine-6 Locked strip remains development scaffolding

### Clean-rebuild routing UX

Protect the routing algorithm; simplify its presentation.

Recommended default structure-level route view:

- Structure
- KPI family:
  - KPI 1.1.1 — rainfall subjected
  - KPI 1.1.2 — yet to be subjected to rainfall
  - HOLD
  - Excluded
- Intervention:
  - New
  - Rejuvenation A
  - Rejuvenation B
  - Fully lined farm pond
  - Governance / subsurface excluded
- Current calculation status:
  - Ready
  - Ready with warning
  - Needs correction
  - Hold
  - Excluded
- Timing basis:
  - before/on cutoff
  - after cutoff
  - partial season from Functional Date
- plain-language reason
- source/route ID available in Advanced details

### Route-ID presentation

Route IDs are essential for controlled audit lineage but should not be the only user-facing language.

Recommended:
- primary: `KPI 1.1.1 · New construction`
- secondary/advanced: `WTR-111-NEW`

Example:
- `KPI 1.1.1 · Rejuvenation — Capacity Difference`
  - Advanced ID: `WTR-111-REJ-A`

This preserves methodology while improving usability.

### HOLD / Excluded handling

Do not style HOLD or Excluded as ordinary errors.

They are controlled route outcomes.

Examples:
- partly-lined → HOLD because no approved automatic method
- governance/subsurface → excluded from automatic compliant water total

Future dashboard/export filters should separate:
- Eligible
- Eligible with warning
- Needs correction
- Hold
- Excluded
- Unresolved route-defining inputs

### Person-day independence in UX

The page correctly separates water routing from KPI 1.2.1.

Future product should preserve this visually:
- water route status should never imply person-day claims are blocked
- person-day errors should never imply water structures are blocked
- separate summary totals and validation indicators

### Recovery assessment

No lost E05 methodology or implementation was found:
- routing engine survives
- routing policy survives
- route registry survives
- core 64-test suite survives
- 15 high-risk routing fixture suite survives
- browser test harness survives

The primary opportunity is to improve:
- route explanation
- route grouping
- user-facing labels
- structure/geography navigation
- downstream reporting visibility

### Classification

For `engine05-routing.js`:

**DIRECT FINAL ENGINE IMPLEMENTATION BASELINE — KEEP / PROTECT**

For `HUF-E05-OFFICIAL-ROUTING-v1.0`:

**CONTROLLED ROUTING POLICY — KEEP / PROTECT**

For frozen 10-route Design-1 registry:

**CONTROLLED METHODOLOGY / ROUTE TRUTH — KEEP / PROTECT**

For E05 64-test core suite and 15-fixture routing suite:

**DIRECT FINAL REGRESSION BASELINE — KEEP / PROTECT**

For route identity vs eligibility separation:

**CORE METHODOLOGICAL CONTROL — KEEP / PROTECT**

For route-defining missing-input behavior (`null/unresolved`, never guess):

**KEEP / PROTECT**

For person-day parallel routing:

**KEEP / PROTECT**

For routing hashes/provenance:

**KEEP / ADVANCED-AUDIT PRESENTATION**

For official route table and route-distribution concepts:

**KEEP CAPABILITY / IMPROVE UX**

For raw route IDs, SHA values, aggregation-bucket codes and engine language in the default UI:

**MOVE TO ADVANCED / TRANSLATE TO USER LANGUAGE**

For Engine-6-locked strip:

**OBSOLETE DEVELOPMENT SCAFFOLDING — DO NOT REUSE AS FINAL NAVIGATION**

For dashboard/charts/XLSX/PDF:

**NO LOST IMPLEMENTATION IDENTIFIED IN THIS PACKAGE**



## Step 3Q — HUF Supply-Side KPI Calculator Engine 06 v0.6.0

**File:** `HUF_Supply_Side_KPI_Calculator_Engine06_v0.6.0(3).zip`

Purpose:
- sixth staged browser implementation of the already-frozen Designs 1–6 methodology
- preserves E01 Intake, E02 Mapping, E03 Canonicalization, E04 Validation and E05 Official Routing
- adds E06 Versioned Calculation Core
- executes the frozen Design-2 v1.1 formula catalog against immutable routed truth
- calculates KPI 1.1.1 daily water balance, KPI 1.1.2 single-fill/incremental capacity, lined Farm Pond single-fill and KPI 1.2.1 person-days
- evaluates the six Design-4 QA rules that require calculation state
- suppresses failed/not-eligible numeric results to null instead of zero
- creates immutable full-precision calculation truth and daily trace lineage for E07 assurance and E08 aggregation

ZIP SHA-256:
`ef563ce0a76449bb226c99a9f3b8a705f3e7cd8e9ec234cc1025c1ad1cce731e`

Package date:
**4 September 2026**

Version/status:
- release: `HUF Supply-Side KPI Calculator Engines 1-6`
- version: `0.6.0`
- engine: `E06`
- validation status: `MODULE_AND_FIXTURE_PASS_BROWSER_NOT_VERIFIED`
- implemented: E01–E06
- not implemented in this package: E07–E09
- browser-local / memory-only source privacy
- no backend

### Package contents

106 files total:
- 1 release manifest
- 105 manifest-controlled payload files

Major Engine-06 additions:
- `ENGINE06_VALIDATION_STATUS.json`
- `config/formula-catalog-v1.1.json`
- `docs/ENGINE06_CONTRACT.md`
- `docs/ENGINE06_VALIDATION_REPORT.md`
- `js/engines/engine06-formulas.js`
- `js/engines/engine06-calculation.js`
- `tests/node-engine06.mjs`
- `tests/node-engine06-result.json`
- `tests/node-engine06-fixtures.mjs`
- `tests/node-engine06-fixtures-result.json`
- `tests/browser-engine06.html`
- `tests/browser-engine06-status.json`

All prior frozen positive and high-risk XLSX fixtures remain bundled.

### Integrity

Independent release-manifest verification during this audit:

**105/105 manifest payload hashes PASS**

No missing payload or hash mismatch was found.

### Controlled methodology alignment

The package uses:
- Design 1 route registry v1.1
- Design 2 formula catalog v1.1
- Design 3 input schema v1.1
- Design 4 validation rulebook v1.0
- E05 routing policy v1.0

The active formula catalog is:

`HUF-DESIGN2-FORMULA-CATALOG-v1.1`

Exact SHA-256:

`f573d5480493e8d13daab4be3d6e41e1b2d0d180c21cf995657cbbe279618cdc`

The catalog contains:
- **78 formulas**
- **29 golden/reference cases**
- frozen route→formula maps for all 10 water routes

Route formula-map counts:
- `WTR-111-NEW`: 17
- `WTR-111-REJ-A`: 2 route-specific additions
- `WTR-111-REJ-B`: 2 route-specific additions
- `WTR-112-NEW`: 5
- `WTR-112-REJ-A`: 4
- `WTR-112-REJ-B`: 4
- `WTR-LFP`: 5
- HOLD / excluded routes: 0 calculation formulas

### E06 calculation gate

Water calculations run only where E05 has:
- an assigned official route, and
- eligibility = `eligible` or `eligible_with_warning`

The following retain **null numeric water results**:
- `not_ready`
- `hold`
- `excluded`
- `unresolved`
- workbook-not-ready
- downstream cascade dependencies whose required upstream residual is unavailable
- calculation-QA failures

Null is never converted to numeric zero.

This is a protected methodology rule.

### KPI 1.1.1 calculation chain

For `WTR-111-*`, E06 performs:

1. capacity family / geometry
2. silt and rejuvenation logic
3. effective catchment
4. cascade/topological dependency handling
5. real-date rainfall-window filtering
6. DDW state sequence
7. runoff depth and generated runoff
8. monthly mean-daily evaporation lookup
9. proportional standard evaporation area or optional advanced stage-area method
10. Verified Base Area infiltration or optional advanced stage-area infiltration
11. daily storage balance:
   - previous closing
   - generated runoff
   - available water
   - opening storage
   - overflow
   - actual evaporation
   - actual infiltration
   - closing storage
12. mass-balance QA
13. KPI 1.1.1 primary identity
14. independent cross-check
15. final residual runoff fraction for cascade dependency

Daily trace is retained privately at full precision.

### Frozen daily balance

The core formula sequence remains:

- available = previous closing + generated runoff
- opening = min(available, eligible capacity)
- overflow = max(0, available − opening)
- actual evaporation = min(opening, potential evaporation)
- actual infiltration = min(opening − actual evaporation, potential infiltration)
- closing = max(0, opening − evaporation − infiltration)

KPI 1.1.1:
- primary = cumulative infiltration + final closing
- cross-check = cumulative captured runoff − cumulative evaporation

The two values must reconcile within the frozen numeric tolerance.

### KPI 1.1.2

For `WTR-112-*`:
- no daily hydrology is run
- output is the eligible physical/incremental single-fill capacity
- rejuvenation A/B remain controlled by the frozen route/method logic

### Fully lined Farm Pond

For `WTR-LFP`:
- no unlined infiltration simulation is performed
- result = eligible lined Farm Pond single-fill capacity after validation gates

### HOLD / excluded

No water calculation is run.

The record remains present with controlled non-calculated state and null numeric result.

### KPI 1.2.1 person-days

E06 independently calculates eligible person-day routes:

- `PD-DIRECT`
  - verified direct paid days
- `PD-COMMUNITY`
  - verified hours / 8
- `PD-VOLUME`
  - certified quantity / approved productivity norm
- `PD-MACHINERY`
  - verified support-labour days, otherwise hours / 8

Independent water failures do not suppress valid person-day claims.

### Numerical policy

Frozen numerical rules:
- full IEEE-754 precision internally
- no intermediate rounding
- display/export rounding only
- tolerance:
  `max(1e-6 m³, 1e-9 × max(1, abs(lhs), abs(rhs)))`

The regression suite explicitly verifies:
- no intermediate rounding
- no unknown formula IDs
- calculation/content hashes are valid SHA-256 values

### E06 ownership of Design-4 QA

The package closes the six E06-owned rules:

- `VAL-063` — proportional evaporation-area bounds
- `VAL-066` — advanced stage-area extrapolation control
- `VAL-086` — nonnegative daily states/capacity bounds
- `VAL-087` — daily mass-balance residual
- `VAL-088` — KPI 1.1.1 identity reconciliation
- `VAL-089` — no internal rounding implementation invariant

Still deferred to E08:
- `VAL-090` — aggregation status segregation
- `VAL-091` — aggregation coverage reconciliation

Therefore after E06:
- **93 of the 95 Design-4 rules have an owning executable stage**
- only the two aggregation QA rules remain for E08

### Calculation-QA suppression

If an E06 calculation-QA rule fails for a structure:
- the numeric official result is suppressed
- calculation status becomes QA failed
- the incorrect number is not published as an official KPI result

This is a strong assurance control and should remain protected.

### Golden portfolio result

Non-leap FY 2024–25:

- official water-route records: 20
- calculated water results: **17**
- KPI 1.1.1: **11**
- KPI 1.1.2: **5**
- lined Farm Pond: **1**
- null/non-calculated water results: **3**
  - 1 HOLD
  - 2 excluded
- person-day records calculated: **20**
- KPI 1.2.1 total:
  **322.66666666666663 person-days**
- daily balance trace rows:
  **3,905**

Leap FY 2023–24:
- structure-level values reconcile to the controlled reference pattern
- daily trace rows:
  **3,916**
- 29-Feb-2024 is processed
- February evaporation value is used on leap day

### Formula/golden regression

`tests/node-engine06-result.json` records:

**121/121 PASS**

Within that suite:
- all **29/29 frozen Design-2 golden/reference cases PASS**
- positive end-to-end structure values reconcile at full precision
- leap and non-leap reference values reconcile
- all 20 person-day calculations reconcile
- null HOLD/excluded values remain null
- six E06 QA rules PASS
- two E08 QA rules remain correctly deferred
- private calculation snapshot is immutable
- public state does not expose private daily truth
- no intermediate rounding
- 0 unknown formula IDs

### Example golden formula coverage

The formula library directly exposes controlled primitives including:
- unit conversion
- slope/backwater
- effective length and storage area
- full/half capacity family
- capacity variance
- rejuvenation A/B
- silt fraction and net capacity
- residual runoff fraction
- catchment methods
- topological sort
- DDW states
- runoff depth
- stage-storage interpolation
- proportional evaporation area
- monthly evaporation lookup
- potential evaporation
- potential infiltration
- daily balance
- KPI 1.1.1 identity
- four person-day methods

This is a transparent versioned formula library rather than an opaque monolithic calculation.

### High-risk physical fixtures at E06

All 15 frozen high-risk workbooks are passed through the full calculation core.

Result:

**15/15 PASS**

Examples:

- missing leap day
  - rainfall-dependent WTR-111 calculations withheld
  - independent single-fill/person-days continue

- duplicate/negative rainfall
  - only affected linked rainfall-dependent calculations are withheld
  - later-starting partial-season structure may remain independent where its window does not intersect the bad date

- missing/invalid Base Area
  - affected structure withheld
  - a Method-1 cascade downstream structure may also be withheld when upstream residual runoff becomes unavailable
  - this is a calculation dependency, not generic workbook failure

- missing February evaporation
  - linked rainfall-dependent calculations withheld

- unavailable advanced stage input
  - affected structure withheld
  - dependent downstream result may also be withheld if required residual truth is unavailable

- cascade cycle
  - affected cascade component withheld

- rejuvenation input errors
  - affected rejuvenation result withheld

- lined Farm Pond gate failure
  - lined result withheld

- duplicate person-day claim
  - water calculations remain intact
  - affected person-day claim remains uncalculated

- outside-FY rainfall
  - warning-only
  - valid in-window calculation continues

No withheld result receives zero as a placeholder.

### Cascade dependency finding

E06 demonstrates an important distinction beyond E04 scope isolation:

A structure can be valid in its own input record but still become non-calculable because its selected cascade method requires a residual-runoff value from an upstream structure whose calculation was withheld.

This is a **calculation dependency**, not a new validation error.

Future UX/reporting should explain this difference clearly:
- source-data issue
vs
- dependent calculation unavailable because upstream result is unavailable

### Full trace / audit capability

Private WTR-111 trace rows retain, by day:
- rainfall
- DDW state
- runoff depth
- effective catchment
- generated runoff
- previous closing storage
- available/opening storage
- overflow
- fill fraction
- evaporation rate/area
- potential/actual evaporation
- infiltration area/rate
- potential/actual infiltration
- closing storage
- captured runoff
- mass-balance residual
- stage depth where applicable
- daily QA flags

This is highly valuable technical evidence.

It should be preserved for:
- detailed calculation export
- audit package
- structure trace report
- regression/debugging

It should not become the default management dashboard table.

### Immutable calculation truth

E06 outputs:
- immutable structure water calculation records
- private daily traces
- immutable person-day calculation records
- KPI 1.2.1 total
- calculation-QA result set
- formula IDs
- Calculation Content SHA-256
- Calculation Snapshot SHA-256

E07 may attach assurance but must not rewrite these numeric values.

E08 may aggregate but must not recalculate them.

This is the central implementation of:

> **Calculate truth once → preserve it → present it multiple ways.**

### Browser/deployment status

Package reports:
- static architecture: **67/67 PASS**
- GitHub-style `/repo/` HTTP checks: **10/10 PASS**
- real Chromium: **NOT VERIFIED**
- deployed GitHub Pages: **NOT VERIFIED**
- `githubReady = false`
- `productionReady = false`
- `browserAccepted = false`

Chromium timed out in the container; no false PASS is claimed.

### Direct later-release lineage

The E06 core survives byte-for-byte into Engine 09.

Exact later-retained files:

- `js/engines/engine06-calculation.js`
  - `8130d3fff6269dbc2a246f4a5cf8807790e11c5e2e7792892020f955c01cddf2`
- `js/engines/engine06-formulas.js`
  - `88bada4d160faa56210802520049821288b3575db0908ca7b105373420284f2b`
- `config/formula-catalog-v1.1.json`
  - `f573d5480493e8d13daab4be3d6e41e1b2d0d180c21cf995657cbbe279618cdc`
- `ENGINE06_VALIDATION_STATUS.json`
  - `2f33fd7cf908a015f650674e0373136d07c03e729c6d9b66ab1f0d691384eafc`
- `docs/ENGINE06_CONTRACT.md`
  - `4f5496ace3a052238e95e78ad52930619fd41e07467b416685206730323b2735`
- `docs/ENGINE06_VALIDATION_REPORT.md`
  - `482e6fef7ae0b3c14fa70e44e39814a9ddf3c4521c57d3c19cbc6941d4fc87a1`
- `tests/node-engine06.mjs`
  - `6d6a47ab3146c39f3c9c7952c1b3ebc7a9594034b2516fd5827dd387b02dbcfd`
- `tests/node-engine06-result.json`
  - `438572a90a3e0b81b851dd08ff94e4dd5ae6867de6a8e196edef47ac63daef65`
- `tests/node-engine06-fixtures.mjs`
  - `dc6c2e36404ee282e64e4c123bb1b4d2815e43470931fcc6095f1dae4e312864`
- `tests/node-engine06-fixtures-result.json`
  - `545d67420f0c8b08987e354a4c38a5c60ed2b4196b3a3ec2143798bd0e9db4a9`
- `tests/browser-engine06.html`
  - `6fc7a776e107819b0e103353a219cabd536d9eee2122883732c0ea143349d868`
- `tests/browser-engine06-status.json`
  - `986fcdda5e3d008a199b558fb2fab298921ce21407b57b282449463acaf6c506`

Therefore:

> **E06 v0.6.0 is direct final calculation implementation lineage. The formula engine, formula library, controlled catalog, test results and harnesses were retained rather than rewritten.**

### Early E06 UI/product findings

The Engine-06 page exposes:

**Calculation KPI cards**
- calculated water results
- not calculated count
- KPI 1.1.1 result count
- daily trace row count
- KPI 1.1.2 + lined count
- KPI 1.2.1 total person-days

**Calculation snapshot**
- routing SHA
- formula catalog version
- calculation content SHA
- calculation snapshot SHA
- E06 QA pass/fail count

**Structure-level calculation table**
- Structure
- official route
- eligibility
- calculation status
- Result m³
- Result BL
- calculation days
- max mass residual
- warnings

**Calculation QA**
- E06-owned rule results

**Person-day calculations**
- claim
- route
- eligibility
- calculation status
- person-days
- formula IDs

**Explicit boundary**
- calculation truth, not assurance or aggregation

These capabilities are valuable, but presentation remains engineering-centric.

### Product-layer weaknesses

The page:
- leads with “Engine 6”
- exposes raw WTR/PD route IDs
- shows multiple SHA hashes prominently
- uses raw rule IDs as primary QA labels
- exposes mass residual to all users without interpretation
- provides result m³ and BL but no display-unit selector
- has no geography drill-down
- has no structure-type aggregation
- has no assurance separation yet
- has no Excel/PDF/report export
- does not expose a user-friendly detailed structure calculation narrative
- does not offer management charts
- still shows `Engine 7 Locked`

### Clean-rebuild calculation UX

The calculation engine should remain unchanged.

Default structure result should emphasize:

- Structure
- KPI
- calculation status
- current numerical result
- selected display unit
- route/method
- calculation period where relevant
- warning / correction state
- assurance status after E07

A detailed structure drawer/report can expose:

- geometry/capacity basis
- catchment basis
- rainfall period
- evaporation/infiltration basis
- daily water-balance summary
- generated/captured/overflow/evaporation/infiltration totals
- final storage
- KPI identity reconciliation
- formula IDs
- daily trace
- source/routing/calculation hashes

### Display units

E06 stores canonical `m³` and BL values without changing underlying truth.

Future product should support display conversion for:
- m³
- thousand m³
- million m³
- BL
- HUF-approved reporting unit

Conversion must be presentation-only.

### Result-status presentation

Future UI should distinguish:

- Calculated
- Calculated with warning
- Not calculated — source/readiness problem
- Not calculated — upstream dependency unavailable
- HOLD — methodology not approved
- Excluded — controlled exclusion
- QA failed — calculation result suppressed

Do not turn all non-calculated states into zero or one generic “error”.

### Calculation QA presentation

Raw:
- `VAL-063`
- `VAL-066`
- `VAL-086`
- `VAL-087`
- `VAL-088`
- `VAL-089`

should remain audit identifiers.

Default UX should translate them:
- evaporation area within bounds
- advanced stage method within observed range
- daily states nonnegative/capacity-respecting
- mass balance reconciles
- KPI identity reconciles
- full precision preserved

### Calculation trace recovery

The full daily trace is not a “lost formula”; it is a rich technical capability that should be intentionally exposed in the clean product.

Recommended:
- summary trace chart for a selected structure
- optional daily table
- downloadable detailed calculation trace
- formula/methodology explanation
- audit export

Keep the detailed trace out of the default project dashboard.

### Recovery assessment

No lost E06 methodology or implementation was found:
- formula engine survives
- formula library survives
- frozen 78-formula catalog survives
- all 29 golden cases survive
- 121-test integration result survives
- 15 high-risk fixture result survives
- browser harness survives

The major future work is presentation and reporting:
- structure-level calculation explanation
- display units
- trace visualization/export
- management summaries
- downstream assurance and aggregation
- Excel/PDF reporting

### Classification

For `engine06-calculation.js`:

**DIRECT FINAL ENGINE IMPLEMENTATION BASELINE — KEEP / PROTECT**

For `engine06-formulas.js`:

**CONTROLLED FORMULA IMPLEMENTATION — KEEP / PROTECT**

For Design-2 v1.1 78-formula catalog + 29 golden cases:

**CONTROLLED METHODOLOGY / FORMULA BASELINE — KEEP / PROTECT**

For full-precision/null/no-rounding policy:

**CORE NUMERICAL CONTROL — KEEP / PROTECT**

For E06 calculation-QA suppression:

**CORE ASSURANCE CONTROL — KEEP / PROTECT**

For daily trace and formula-ID lineage:

**KEEP / FULLY EXPOSE THROUGH ADVANCED TRACE & EXPORT**

For 121/121 integration regression and 15/15 calculation fixtures:

**DIRECT FINAL REGRESSION BASELINE — KEEP / PROTECT**

For structure-level calculation table:

**KEEP CAPABILITY / SIGNIFICANTLY IMPROVE UX**

For raw hashes, raw rule IDs and route IDs in default presentation:

**MOVE TO ADVANCED / AUDIT**

For Engine-7-locked strip:

**OBSOLETE DEVELOPMENT SCAFFOLDING — DO NOT REUSE AS FINAL NAVIGATION**

For dashboard/geography/charts/XLSX/PDF:

**NO LOST IMPLEMENTATION IDENTIFIED YET IN THIS PACKAGE; THESE REMAIN DOWNSTREAM PRODUCT GAPS**



## Step 3R — HUF Supply-Side KPI Calculator Engine 07 v0.7.0

**File:** `HUF_Supply_Side_KPI_Calculator_Engine07_v0.7.0(3).zip`

Purpose:
- seventh staged browser implementation of the protected methodology pipeline
- preserves E01–E06 source/mapping/canonical/validation/routing/calculation truth
- adds E07 Assurance
- attaches one controlled reporting-assurance state to each immutable E06 water/person-day result
- evaluates calculation/method warnings separately from evidence completeness
- preserves valid E06 numeric results when evidence is pending
- keeps formal HUF approval/confirmation separate from configured-methodology acceptance
- creates immutable assurance content/snapshot hashes for E08 aggregation and downstream reporting

ZIP SHA-256:
`8ac2d62d173f5dea508aea2210057eda3ef59178f45c7c9667f17635f839d8c2`

Version/status:
- release: `HUF Supply-Side KPI Calculator Engine07 v0.7.0`
- version: `0.7.0-engine07`
- status: `ENGINE07_IMPLEMENTED`
- implemented: E01–E07
- next engine: E08 Aggregation
- pure-static browser-local architecture
- no backend
- project workbook data remains memory-only and is not encoded in the URL

### Package contents

ZIP inventory:
- **133 ZIP entries**
- **117 actual files**
- **16 directory entries**
- 1 release manifest
- **116 manifest-controlled payload files**

Major E07 additions:
- `ENGINE07_VALIDATION_STATUS.json`
- `config/assurance-policy-v1.0.json`
- `docs/ENGINE07_CONTRACT.md`
- `docs/ENGINE07_VALIDATION_REPORT.md`
- `js/engines/engine07-assurance.js`
- `tests/node-engine07.mjs`
- `tests/node-engine07-result.json`
- `tests/node-engine07-fixtures.mjs`
- `tests/node-engine07-fixtures-result.json`
- `tests/browser-engine07.html`
- `tests/browser-engine07-status.json`

All prior positive and high-risk frozen workbook fixtures remain included.

### Integrity

Independent release-manifest verification during this audit:

**116/116 manifest payload hashes PASS**

No missing payload or hash mismatch was found.

### Controlled dependency alignment

The package declares:
- Design 1 route registry v1.1
- Design 2 formula catalog v1.1
- Design 3 input schema v1.1
- canonicalization policy v1.1
- Design 4 validation rulebook v1.0
- Design 5 result schema v1.0
- Design 6 UAT contract v1.0
- E05 official routing policy v1.0
- E06 calculation core policy v1.0
- E07 assurance policy `HUF-E07-ASSURANCE-v1.0`

The exact assurance-policy SHA-256 is:

`92d9eb6c5d1c969c0852ae476b5afc0d7d89cfdc74b20dafb8a50c28e1548ae7`

### E07 purpose and invariant

Engine 7 consumes:
- immutable E03 canonical snapshot
- immutable E04 validation snapshot
- immutable E05 official routing snapshot
- immutable E06 calculation snapshot
- evidence rows from `11_Evidence`
- frozen E07 assurance policy

It may assign reporting assurance.

It must **never**:
- recalculate a water result
- recalculate person-days
- edit an E06 numeric value
- turn null into zero
- change route truth
- aggregate results
- claim formal HUF approval

Core invariant:

> **Evidence review changes assurance only. It does not change E06 numerical truth.**

### Five frozen assurance states

1. `accepted-certified`
2. `provisional-evidence-pending`
3. `calculated-warning`
4. `not-calculated`
5. `excluded`

Frozen precedence:

`excluded`
→ `not-calculated`
→ `calculated-warning`
→ `provisional-evidence-pending`
→ `accepted-certified`

This means a method/calculation warning outranks an evidence-only gap in the single status field.

Evidence-pending counts/codes are still retained separately.

### Critical semantics of `accepted-certified`

The contract explicitly states:

`accepted-certified` means accepted under the configured controlled methodology.

It **does not** mean formal HUF approval.

External governance remains separately recorded as:

`Expert-selected controlled methodology baseline; formal HUF confirmation pending`

This distinction is important because the machine-state wording can otherwise be misread by ordinary users or donors.

**Do not rename the controlled internal state without versioned methodology governance.**

Instead, improve the public-facing display label.

Recommended display:

**Accepted under controlled methodology**

Advanced / audit state:

`accepted-certified`

Governance note:

**Formal HUF confirmation pending**

### Evidence requirements

E07 policy includes controlled evidence requirements.

#### KPI 1.1.1

Direct structure:
- Completion/functional evidence
- Design/MB
- Verified Base Area

Shared rainfall:
- Rainfall source

Shared hydrology:
- Infiltration source
- Evaporation source

#### KPI 1.1.2

Direct structure:
- Completion/functional evidence
- Design/MB

#### Fully lined Farm Pond

Direct structure:
- Completion/functional evidence
- Design/MB
- Catchment/GIS
- Rainfall source

#### KPI 1.2.1

- `PD-DIRECT` → Attendance/muster
- `PD-COMMUNITY` → Community register
- `PD-VOLUME` → Certified work quantity
- `PD-MACHINERY` → Attendance/muster

Evidence marked `Available/verified` also requires a nonblank evidence reference.

### Evidence completeness model

Each assurance record retains:
- required evidence count
- verified evidence count
- pending evidence count
- evidence completeness state
- evidence warning codes
- evidence IDs/references
- method-warning codes
- related validation rule IDs
- status reason
- external governance status

Evidence completeness can therefore be reported independently from the single assurance status.

This separation should remain protected.

### Method warnings vs evidence gaps

Method/calculation warnings are deliberately distinct from ordinary evidence gaps.

The configured method-warning code includes:

`LEGACY_DDW_RUNOFF`

Meaning:

**Legacy-v1 DDW/runoff fallback is methodologically provisional.**

The legacy-method warning is driven by the controlled validation/calculation lineage, not by evidence completeness.

Evidence-gap rule IDs include:
- `VAL-074`
- `VAL-075`

### Assurance assignment logic

For water results:

- excluded E05 route → `excluded`
- HOLD / not-ready / unresolved / workbook-not-ready → `not-calculated`
- E06 calculation status not calculated → `not-calculated`
- calculated result + method/calculation warning → `calculated-warning`
- calculated result + evidence incomplete → `provisional-evidence-pending`
- calculated result + no method warning + evidence complete → `accepted-certified`

For person-days:
- invalid/not-calculated claim → `not-calculated`
- calculated + evidence pending → `provisional-evidence-pending`
- calculated + required evidence complete → `accepted-certified`

Water and person-day assurance remain independent.

### Golden assurance inventory

Across:
- 20 water assurance records
- 20 person-day assurance records
- 40 total assurance records

Both leap and non-leap positive portfolios produce:

- `accepted-certified`: **26**
- `provisional-evidence-pending`: **0**
- `calculated-warning`: **11**
- `not-calculated`: **1**
- `excluded`: **2**

Interpretation:

- all 20 positive person-day claims are accepted under the configured controlled methodology
- KPI 1.1.2 / lined calculated water results with complete evidence are accepted
- 11 WTR-111 results remain `calculated-warning` because of the configured legacy DDW/runoff method warning
- partly-lined HOLD becomes `not-calculated`
- governance and subsurface routes remain `excluded`

### Evidence-only mutation proof

The validation report contains a particularly important invariant test.

For structure `S-WAT-01`:

Original immutable E06 result:
**38.4 m³**

When its Design/MB evidence is mutated from verified to pending:

E07 assurance becomes:
`provisional-evidence-pending`

But:
- E06 numeric result remains **38.4 m³**
- E06 calculation snapshot hash remains unchanged

This is direct proof that evidence review does not rewrite calculation truth.

### Warning precedence proof

For a WTR-111 result carrying the legacy DDW/runoff method warning:

If evidence is also pending:
- single assurance state remains `calculated-warning`
- evidence-pending count remains separately visible

Therefore the system does not hide an evidence gap merely because a method warning has higher state precedence.

### E07 core regression

`tests/node-engine07-result.json` records:

**36/36 PASS**

Checks include:
- E07 lifecycle reaches `assurance_ready`
- policy ID correct
- 40 assurance records
- 20 water + 20 person-day
- exact five-state counts
- leap/non-leap same status inventory
- all statuses controlled
- positive evidence completeness
- all positive person-day results accepted
- 11 WTR-111 method warnings
- legacy method-warning code present
- WTR-112 accepted
- lined Farm Pond accepted
- HOLD → not-calculated
- governance/subsurface → excluded
- E06 calculation hash unchanged
- water numbers unchanged
- private assurance snapshot frozen
- no private assurance truth leaked into public state
- 64-character content/snapshot SHA-256 values
- external governance field preserved
- evidence-only mutation → provisional
- E06 result remains 38.4
- warning precedence over evidence-pending

### High-risk E07 fixtures

All 15 frozen high-risk workbooks are passed through assurance.

Result:

**15/15 PASS**

The fixture suite proves:
- null E06 results never become accepted/provisional/warning
- excluded routes stay `excluded`
- HOLD / not-ready / unresolved / dependency failures become `not-calculated`
- valid calculated results receive exactly one controlled assurance state
- person-day failures remain independent of water assurance
- E06 calculation snapshot hash never changes during E07

Examples:
- missing leap day → affected WTR-111 results become not-calculated; independent accepted results remain
- rainfall duplicate/negative → affected calculations remain not-calculated while unrelated results retain assurance
- Base Area / stage / cascade problems → withheld calculations remain not-calculated
- lined Farm Pond gate failure → lined result not-calculated
- duplicate person-day claim → affected PD results not-calculated while water assurance remains intact
- rainfall outside FY warning → calculations continue and existing method-warning state remains
- partial-season route-defining failure → affected result not-calculated

### Immutable assurance truth

E07 returns:
- water assurance records
- person-day assurance records
- status inventory
- evidence completeness/counts
- method/evidence warning references
- assurance basis
- external governance status
- Assurance Content SHA-256
- Assurance Snapshot SHA-256
- immutable private assurance snapshot

Public state exposes assurance summaries/records but not the private immutable snapshot object.

### Hash design

E07 follows the same controlled content/provenance pattern seen in E03/E05/E06.

**Assurance Content SHA-256**
- represents assurance content/state
- excludes runtime assessment timestamp
- excludes the detailed evidence-requirements array from content identity

**Assurance Snapshot SHA-256**
- binds assurance output to upstream source/canonical/validation/routing/calculation provenance and fuller assurance detail
- excludes runtime assessment timestamp

This prevents timestamps from becoming methodology truth.

### Browser/deployment status

Package records:
- E07 core: **36/36 PASS**
- E07 high-risk fixtures: **15/15 PASS**
- prior E01–E06 regressions all PASS
- static architecture: **78/78 PASS**
- project-subpath HTTP: **11/11 PASS**
- real Chromium acceptance: **NOT VERIFIED**
- deployed GitHub Pages: **NOT VERIFIED**

Chromium timed out in the test environment.

The package correctly reports NOT VERIFIED instead of manufacturing a PASS.

### Direct later-release lineage

The controlled E07 implementation has very strong later-release lineage.

Byte-identical into Engine 09:

- `js/engines/engine07-assurance.js`
  - `4a976c2b1002f6af6a925ae5429029b1d7d0581980fa3003e41c4acefdd28788`
- `config/assurance-policy-v1.0.json`
  - `92d9eb6c5d1c969c0852ae476b5afc0d7d89cfdc74b20dafb8a50c28e1548ae7`
- `ENGINE07_VALIDATION_STATUS.json`
  - `bcb1ad977583448a0573f5e69cc7adeef90265c2fcd68de6c530b89556a55780`
- `docs/ENGINE07_CONTRACT.md`
  - `221236835373c66e7943a85ebee5d95132dc20782822fb916d7fa1b5bb430257`
- `docs/ENGINE07_VALIDATION_REPORT.md`
  - `cc9891e807f4fd37618ce6de45434b15d7873c5a813196b53388c16711af144b`
- `tests/node-engine07.mjs`
  - `94caf50aad18078aa0aaf8a6e97a2242c9dfd8a2ea64fd5621ef07127571fda3`
- `tests/node-engine07-fixtures.mjs`
  - `a1f7e870c5fa9544d5175150828d7047f5e9532708f1a42aa8e0fb61415f2dd2`
- `tests/node-engine07-fixtures-result.json`
  - `6656e35b1edf2a61f1591e15731a968251b3fa4d0744910dd766867df78eb257`
- `tests/browser-engine07.html`
  - `c1468c7f5a9707b958f00fd012328996bad771a25cc22f9ccacfe3cc71f3134d`
- `tests/browser-engine07-status.json`
  - `531524932aa9a85f657d0fd637227eb47493d5c3fda8bf985e8ad69addeadda8`

### Core result JSON lineage nuance

The E07 Node harness is byte-identical into Engine 09, but the serialized core test-result JSON is not.

Engine07 v0.7.0:
`tests/node-engine07-result.json`
SHA-256:
`73f79c703c9e312bbc27cd2d45ce08a704963a4ca3637c4670fec8ccbdc68caa`

Engine09:
`tests/node-engine07-result.json`
SHA-256:
`caba479d6f192b4f4986920986e5d2a7663e5e6b45cdfd639f5e45a67f4ce645`

The test harness itself is unchanged and both recorded suites are PASS.

Therefore classify the serialized result JSON as **execution-context evidence**, not controlled methodology logic.

Do not use this hash difference as evidence that the E07 assurance policy changed.

### Early E07 UI/product findings

The Engine-07 screen exposes:

**Assurance KPI cards**
- Accepted / certified
- Provisional evidence
- Calculated warning
- Not calculated / excluded

**Assurance snapshot**
- calculation SHA
- assurance content SHA
- assurance snapshot SHA
- external governance status

**Water assurance table**
- Structure
- route
- assurance
- evidence completeness
- E06 result m³
- verified / required evidence
- method warnings
- status reason

**Person-day assurance table**
- claim
- PD route
- assurance
- evidence
- E06 person-days
- verified / required evidence
- reason

**Explicit boundary**
- assurance, not aggregation
- E06 numeric truth retained

These are useful technical capabilities.

### Product-layer weaknesses

The page remains engineering/audit oriented:
- “Engine 7” dominates the workflow
- internal status text `accepted-certified` can imply stronger external certification than the contract permits
- formal HUF confirmation is shown as a technical governance string rather than a clear product distinction
- raw WTR/PD route IDs remain prominent
- SHA values dominate the assurance snapshot
- evidence counts are useful but there is no evidence-review/correction workflow
- method warning and evidence gap could be easier to compare visually
- no geography filters
- no management-level assurance distribution by district/block/village/type
- no exportable assurance/evidence register
- no PDF/report integration
- Engine 8 remains shown as locked development scaffolding

### Clean-rebuild assurance UX

Protect the five internal states.

Translate them for ordinary users.

Recommended display labels:

- `accepted-certified`
  → **Accepted under controlled methodology**
- `provisional-evidence-pending`
  → **Calculated · evidence pending**
- `calculated-warning`
  → **Calculated · methodology warning**
- `not-calculated`
  → **Not calculated**
- `excluded`
  → **Excluded by controlled method**

Always show formal HUF confirmation separately.

### Evidence and method dimensions should remain separate

Do not reduce E07 to one red/amber/green icon.

A result should show at least:

**Calculation**
- Calculated / Not calculated

**Method**
- Standard / Warning / HOLD / Excluded

**Evidence**
- Complete / Pending

**Governance**
- Controlled methodology baseline
- formal HUF confirmation status

The frozen single assurance state remains available underneath for aggregation/report contracts.

### Evidence Review Centre

Potential future product capability:
- filter evidence-pending results
- show missing evidence by type
- show structure/claim
- show evidence reference status
- show source sheet/row
- distinguish direct-structure evidence from shared rainfall/hydrology evidence
- allow review to change assurance only
- re-run E07 without recalculating E06
- export evidence-completeness register

### Assurance dashboard

Potential management summary:
- Accepted under controlled methodology
- Calculated with methodology warning
- Calculated with evidence pending
- Not calculated
- Excluded

Break down by:
- Project
- District
- Block
- GP
- Village
- Structure Type
- Route
- KPI family

These must be prepared-result filters only; no recalculation.

### Recovery assessment

No lost E07 methodology or core implementation was found:
- assurance engine survives
- assurance policy survives
- five-state precedence survives
- evidence requirements survive
- 36-test harness survives
- 15-fixture harness/result survives
- browser harness survives
- validation status survives

The principal opportunity is product/reporting exposure:
- safer assurance labels
- evidence review workflow
- clear governance distinction
- assurance analytics
- exportable evidence/assurance register
- PDF/report integration

### Classification

For `engine07-assurance.js`:

**DIRECT FINAL ENGINE IMPLEMENTATION BASELINE — KEEP / PROTECT**

For `HUF-E07-ASSURANCE-v1.0`:

**CONTROLLED ASSURANCE POLICY — KEEP / PROTECT**

For five frozen Design-5 assurance states and precedence:

**CONTROLLED RESULT / REPORTING CONTRACT — KEEP / PROTECT**

For “assurance never rewrites E06 values”:

**CORE METHODOLOGICAL / AUDIT CONTROL — KEEP / PROTECT**

For method-warning vs evidence-pending separation:

**CORE ASSURANCE CONTROL — KEEP / PROTECT**

For external HUF confirmation as a separate governance field:

**KEEP / MAKE MORE VISIBLE**

For E07 36/36 core + 15/15 fixture regression:

**DIRECT FINAL REGRESSION BASELINE — KEEP / PROTECT**

For assurance/evidence tables:

**KEEP CAPABILITY / SIGNIFICANTLY IMPROVE UX**

For raw `accepted-certified` wording in public UI:

**KEEP INTERNAL STATE / TRANSLATE PUBLIC DISPLAY**

For raw hashes, route IDs and engine language in default presentation:

**MOVE TO ADVANCED / AUDIT**

For Engine-8-locked strip:

**OBSOLETE DEVELOPMENT SCAFFOLDING — DO NOT REUSE AS FINAL NAVIGATION**

For dashboard/geography/XLSX/PDF:

**NO LOST IMPLEMENTATION IDENTIFIED IN THIS PACKAGE; THESE REMAIN DOWNSTREAM PRODUCT/REPORTING GAPS**



## Step 3S — HUF Supply-Side KPI Calculator Engine 08 v0.8.0

**File:** `HUF_Supply_Side_KPI_Calculator_Engine08_v0.8.0(3).zip`

Purpose:
- eighth staged browser implementation of the protected methodology pipeline
- preserves immutable E06 calculation truth and E07 assurance truth
- adds E08 Status-Segregated Aggregation
- operationalizes the Design-5 reporting hierarchy
- aggregates only finalized E07 assurance records
- preserves the five assurance buckets instead of mixing them into one total
- closes the last two Design-4 QA rules: `VAL-090` and `VAL-091`
- creates immutable aggregation content/snapshot hashes for E09 audit/run-manifest finalization

ZIP SHA-256:
`e35c4e6649adf57b0f3c158aba4a7d3049103f66d599f6fac39c589331de1a10`

Version/status:
- release: `HUF Supply-Side KPI Calculator Engine08 v0.8.0`
- version: `0.8.0-engine08`
- status: `ENGINE08_IMPLEMENTED`
- implemented: E01–E08
- next engine: E09 Audit & Run Manifest
- pure-static browser-local architecture
- no backend
- project data remains memory-only and is not placed in URLs

### Package contents

ZIP inventory:
- **144 ZIP entries**
- **128 actual files**
- **16 directory entries**
- 1 release manifest
- **127 manifest-controlled payload files**

Major E08 additions:
- `ENGINE08_VALIDATION_STATUS.json`
- `config/aggregation-policy-v1.0.json`
- `docs/ENGINE08_CONTRACT.md`
- `docs/ENGINE08_VALIDATION_REPORT.md`
- `js/engines/engine08-aggregation.js`
- `tests/node-engine08.mjs`
- `tests/node-engine08-result.json`
- `tests/node-engine08-fixtures.mjs`
- `tests/node-engine08-fixtures-result.json`
- `tests/browser-engine08.html`
- `tests/browser-engine08-status.json`

All previous frozen positive and high-risk workbook fixtures remain included.

### Integrity

Independent release-manifest verification during this audit:

**127/127 manifest payload hashes PASS**

No missing payload or hash mismatch was found.

### Controlled dependency alignment

The package declares:
- Design 1 route registry v1.1
- Design 2 formula catalog v1.1
- Design 3 input schema v1.1
- canonicalization policy v1.1
- Design 4 validation/readiness v1.0
- Design 5 result/audit/reporting schema v1.0
- Design 6 UAT contract v1.0
- E05 routing policy v1.0
- E06 calculation core v1.0
- E07 assurance policy v1.0
- E08 aggregation policy `HUF-E08-STATUS-SEGREGATED-AGGREGATION-v1.0`

Exact aggregation-policy SHA-256:

`04b5c5dd1373dec6555c39cdd127c08b764180ba0c5d72359e9630b1f43a2a06`

### E08 purpose and grain

Engine 8 converts finalized E07 assurance records into immutable aggregate rows without changing E06 or E07 truth.

Frozen aggregate grain:

`reporting level + reporting key + KPI/component + assurance status bucket`

Reporting hierarchy:

**Structure → Village → Gram Panchayat → Block → District → PIA → Project**

Assurance buckets remain exactly:
- `accepted-certified`
- `provisional-evidence-pending`
- `calculated-warning`
- `not-calculated`
- `excluded`

### Numeric aggregation policy

Only these statuses may contribute numeric values:
- accepted-certified
- provisional-evidence-pending
- calculated-warning

Terminal states:
- not-calculated
- excluded

remain represented by counts and have **null numeric aggregate values**.

Null is never converted to zero.

### Display-total policy

E08 explicitly defines:

**Accepted total**
= accepted-certified only

**Calculated Total**
= accepted-certified
+ provisional-evidence-pending
+ calculated-warning

Critical rule:

> **Calculated Total must never be labelled Certified Total.**

This should remain protected in every dashboard, Excel export and PDF report.

### Water/reporting components

Frozen E08 components:
- `KPI-1.1.1`
- `KPI-1.1.2`
- `LINED-FP`
- `WATER-HOLD`
- `WATER-EXCL`
- `KPI-1.2.1` person-days

HOLD and excluded components retain null numeric totals.

### Design-4 coverage closure

E08 executes:

- `VAL-090` — status segregation
- `VAL-091` — coverage reconciliation

Result:
- `VAL-090`: **PASS**
- `VAL-091`: **PASS**

With E08:
- E04 owns 87 validation/readiness rules
- E06 owns 6 calculation-QA rules
- E08 owns 2 aggregation-QA rules

Therefore:

> **All 95 Design-4 rules now have an implementation-stage owner.**

This closes the implementation-ownership question.

It does **not**, by itself, prove that all 95 Design-6 scenario-builder cases were executed in final browser/deployed acceptance. That remains a separate certification question.

### Golden E08 regression

`tests/node-engine08-result.json` records:

**64/64 PASS**

The two frozen leap/non-leap portfolios produce the same aggregation inventory:

E07 source records:
- accepted-certified: 26
- provisional-evidence-pending: 0
- calculated-warning: 11
- not-calculated: 1
- excluded: 2
- total source records: **40**

E08:
- aggregate rows: **88**
- project aggregate rows: **6**
- reporting levels: **7**

### Golden project-level numeric summary

**KPI 1.1.1**
- assurance bucket: calculated-warning
- **9513.721181835617 m³**
- warning records: 11
- accepted-certified result: null
- Calculated Total: 9513.721181835617 m³

**KPI 1.1.2**
- accepted-certified:
  **469.4 m³**
- source records: 5

**Fully lined Farm Pond**
- accepted-certified:
  **1250 m³**

**KPI 1.2.1**
- accepted-certified:
  **322.66666666666663 person-days**
- source records: 20

**WATER-HOLD**
- numeric total: null
- not-calculated count: 1

**WATER-EXCL**
- numeric total: null
- excluded count: 2

### Hierarchy reconciliation

On the golden portfolio, all 40 E07 source results reconcile at every hierarchy level.

Aggregate-row counts:
- Structure: **40**
- Village: **18**
- Gram Panchayat: **6**
- Block: **6**
- District: **6**
- PIA: **6**
- Project: **6**

Each hierarchy level reconciles **40 source memberships**.

This confirms that the hierarchy is operational, not merely a schema declaration.

### Assurance-only mutation proof

E08 preserves the E06/E07 separation.

When `S-WAT-01` Design/MB evidence changes to Pending:

Immutable E06 result:
**38.4 m³**

E08 KPI 1.1.2 project split becomes:
- accepted-certified: **431.0 m³**
- provisional-evidence-pending: **38.4 m³**
- Calculated Total: **469.4 m³**

The total calculated value is unchanged; only the assurance bucket split changes.

This is exactly the expected downstream behavior.

### QA failure injections

E08 deliberately tests two corruptions.

1. Duplicate an E07 assurance result:
   - `VAL-091` → FAIL
   - E08 status → `aggregation_not_ready`

2. Mark an E06-null excluded record as `accepted-certified`:
   - `VAL-090` → FAIL
   - E08 status → `aggregation_not_ready`

In both cases:
- E06 source hash remains unchanged
- E07 assurance hash remains unchanged

Therefore aggregation QA failure does not rewrite source truth.

### High-risk physical fixtures

All 15 frozen high-risk XLSX fixtures pass E08 reconciliation.

Result:

**15/15 PASS**

The duplicate person-day fixture contains **41 assurance source records**, not 40, and E08 still reconciles all 41 exactly.

This is useful evidence that E08 reconciles actual source-result membership rather than assuming a hard-coded portfolio count.

### Coverage metric semantics

Project/component summaries include a coverage percentage.

Examples:
- calculated KPI components: 100%
- HOLD/excluded components: 0%

Future reports should define this clearly as result/reporting coverage, not hydrological effectiveness or physical performance.

Do not label coverage ambiguously.

### Immutable E08 truth

Engine 8 outputs:
- immutable aggregate-result rows
- project component summary
- hierarchy coverage counts
- status counts
- `VAL-090` / `VAL-091` QA results
- Aggregation Content SHA-256
- Aggregation Snapshot SHA-256

Detailed source-result membership remains private in the immutable E08 snapshot and is omitted from ordinary public state.

### E08 boundary

Engine 8 must not:
- calculate/recalculate KPI values
- change route/readiness
- change assurance state
- convert null to zero
- combine assurance buckets before aggregation
- finalize E09 audit/run manifest
- persist project data
- encode project data in URLs

This is the correct reporting-layer boundary.

### Browser/deployment status

Package records:
- E08: **64/64 PASS**
- high-risk fixtures: **15/15 PASS**
- `VAL-090`: PASS
- `VAL-091`: PASS
- all prior E01–E07 regression suites: PASS
- static architecture: **92/92 PASS**
- project-subpath HTTP: **13/13 PASS**
- real Chromium acceptance: **NOT VERIFIED**
- deployed GitHub Pages: **NOT VERIFIED**

The environment's Chromium process timed out.

The package correctly records NOT VERIFIED rather than a false PASS.

### Direct later-release lineage

The controlled E08 implementation has strong later-release lineage.

Byte-identical into Engine 09:

- `js/engines/engine08-aggregation.js`
  - `a4e922b97ff9ea9064c9394d5548e4c4b115d260cbb791b881019536fa3b320d`
- `config/aggregation-policy-v1.0.json`
  - `04b5c5dd1373dec6555c39cdd127c08b764180ba0c5d72359e9630b1f43a2a06`
- `ENGINE08_VALIDATION_STATUS.json`
  - `2197fa3cc41316b530965d2e6cbefe02b0bfe1b56938945cded3127649cd1810`
- `docs/ENGINE08_CONTRACT.md`
  - `a14cd843cba571c876cb1c18a0681591cea1422930555bc33107ffef8679509f`
- `docs/ENGINE08_VALIDATION_REPORT.md`
  - `67cceec8445023ca895b17a5aed9a8eac3a3703772b73e15222514dac5a6afb2`
- `tests/node-engine08.mjs`
  - `85a2d373a279329b67cef14fc21dd91800238a0f0438b41dd5022bcd8a520b15`
- `tests/node-engine08-fixtures.mjs`
  - `fceb83cfc6780d26f650954a5cad1133a43d906999f101c145d41c406a274d50`
- `tests/node-engine08-fixtures-result.json`
  - `5a02f2e6586b08820da6c1025c14086fb461168f8de338cee6ce135b5d69f169`
- `tests/browser-engine08.html`
  - `32d3db3e56461213924c97a4abc0c50c5f8a27229d1086539e74bad9cf9b93dd`
- `tests/browser-engine08-status.json`
  - `531524932aa9a85f657d0fd637227eb47493d5c3fda8bf985e8ad69addeadda8`

### Core result JSON lineage nuance

The E08 Node harness remains byte-identical into Engine 09, but the serialized core test-result JSON changes hash.

Engine08 v0.8.0:
`tests/node-engine08-result.json`
SHA-256:
`05ebd932e08f632f81528d5250a824a018c56b150fa13e0b79f6b3d7a6942057`

Engine09:
`tests/node-engine08-result.json`
SHA-256:
`a3540ad6a419585ace848acc8064cc86543ab619516e31b40a968a415682ec94`

The unchanged harness remains the stronger controlled-regression lineage.

Classify the serialized result JSON as execution-context evidence rather than a methodology change.

### Early E08 UI/product findings

The Engine-08 page exposes:

**Top metrics**
- aggregate bucket count
- seven reporting levels
- accepted/provisional/warning source inventory
- aggregation QA status

**Aggregation snapshot**
- assurance SHA
- aggregation content SHA
- aggregation snapshot SHA
- project aggregate bucket count

**Project Summary**
- component
- accepted numeric result
- provisional result
- warning result
- Calculated Total
- accepted/provisional/warning counts
- coverage / terminal counts

**Project Buckets**
- component
- assurance status
- numeric result
- unit
- source records
- pending evidence
- warnings
- source-result hash

**Aggregation QA**
- VAL-090
- VAL-091

**Hierarchy Coverage**
- reporting level
- aggregate rows
- source memberships

**Explicit boundary**
- aggregation truth, not final audit

These are strong technical/reporting capabilities.

### Product-layer weaknesses

The page remains engineering-oriented:
- “Engine 8” is the main product language
- raw assurance-state names are exposed
- several SHA values are prominent
- project summary is table-heavy
- no geography navigation/drill-down despite the hierarchy already existing
- no district/block/GP/village selectors
- no structure-type or route analysis
- no charts
- no Excel/CSV export
- no PDF/report generation
- no management narrative
- no configurable display units
- no obvious distinction between “Accepted” and “Calculated Total” beyond explanatory text
- no separate view for excluded/not-calculated root causes
- Engine 9 remains shown as locked development scaffolding

No dashboard/chart/export/PDF implementation exists in the package file tree.

### Clean-rebuild aggregation/dashboard UX

E08 is the technical foundation for the future dashboard.

Do not recalculate in filters.

Dashboard filters should slice prepared E08/D5 result views only.

Recommended headline cards:

- **Calculated Water Potential**
- **Accepted under controlled methodology**
- **Calculated with methodology warning**
- **Calculated with evidence pending**
- **Not calculated**
- **Excluded**
- **Person-days**

Do not display “Certified Total” unless a future formally approved governance rule explicitly creates such a concept.

### Geography navigation

E08 confirms the controlled hierarchy is ready for direct product use.

Recommended drill path:

**Project → District → Block → Gram Panchayat → Village → Structure**

PIA may be included as:
- a parallel organization filter
- a hierarchy node where project structure requires it

The underlying frozen hierarchy remains:
Structure → Village → GP → Block → District → PIA → Project.

### Dashboard analytical views enabled by E08

Potential views:
- KPI/component × assurance status
- geography × water result
- structure type × calculated result
- route × result/status
- accepted vs warning vs provisional split
- not-calculated / excluded counts
- person-days by geography/work route
- coverage by geography
- top villages/blocks/districts
- structure-level result register

These should read prepared E08/D5 aggregates/results and must not trigger recalculation.

### Status-segregated chart rule

Every management chart must either:
- show assurance buckets separately, or
- explicitly state which buckets are included

Examples:
- Accepted only
- Calculated Total = Accepted + Provisional + Warning

Do not silently mix warning/provisional with accepted and label the result “accepted” or “certified”.

### Excluded and not-calculated reporting

These records are represented by counts, not zero water.

Recommended dedicated views:
- Not Calculated register
- Excluded register
- HOLD register
- reason / route / validation issue
- geography
- structure type

This prevents zeros from contaminating aggregate analysis.

### Export implications

E08 provides the exact data foundation for the Design-5 export contracts:

- Compact Result Export
- Reporting Summary Export
- Audit Package
- Daily Trace Export

The historical E08 package itself does not implement XLSX/CSV/PDF export.

Therefore:

> **There is no lost E08 export code to recover. The missing export layer must be built over protected E08/D5 truth.**

### Recovery assessment

No lost E08 aggregation methodology or implementation was found:
- aggregation engine survives
- policy survives
- hierarchy survives
- status segregation survives
- 64-test harness survives
- 15-fixture harness/result survives
- browser harness survives
- validation status survives

The major opportunity is productization:
- dashboard
- geography drill-down
- charting
- status-aware filters
- structure/type/route analysis
- Excel/CSV export
- PDF/report generation
- management summaries

### Classification

For `engine08-aggregation.js`:

**DIRECT FINAL ENGINE IMPLEMENTATION BASELINE — KEEP / PROTECT**

For `HUF-E08-STATUS-SEGREGATED-AGGREGATION-v1.0`:

**CONTROLLED AGGREGATION POLICY — KEEP / PROTECT**

For the seven-level reporting hierarchy:

**CONTROLLED REPORTING CONTRACT — KEEP / FULLY EXPOSE**

For five-bucket status segregation:

**CORE REPORTING / ASSURANCE CONTROL — KEEP / PROTECT**

For `VAL-090` and `VAL-091`:

**DESIGN-4 IMPLEMENTATION CLOSURE — KEEP / PROTECT**

For Calculated Total vs Accepted/Certified distinction:

**CORE REPORTING-LABEL CONTROL — KEEP / PROTECT**

For 64/64 core + 15/15 fixture regression:

**DIRECT FINAL REGRESSION BASELINE — KEEP / PROTECT**

For project summary / bucket / hierarchy tables:

**KEEP CAPABILITY / REBUILD AS MANAGEMENT DASHBOARD + ADVANCED TABLES**

For raw SHA/rule/engine identifiers in default UI:

**MOVE TO ADVANCED / AUDIT**

For Engine-9-locked strip:

**OBSOLETE DEVELOPMENT SCAFFOLDING — DO NOT REUSE AS FINAL NAVIGATION**

For charts/geography drill-down/XLSX/CSV/PDF:

**ADD / BUILD CLEANLY ON TOP OF PROTECTED E08/D5 TRUTH — NO LOST IMPLEMENTATION IDENTIFIED IN THIS PACKAGE**



## Step 3T — HUF Supply-Side KPI Calculator Engine 09 v0.9.0

**File:** `HUF_Supply_Side_KPI_Calculator_Engine09_v0.9.0(3).zip`

Purpose:
- ninth staged browser implementation and completion of the E01→E09 controlled pipeline
- preserves E01–E08 truth without recalculation or rewriting
- adds E09 Audit & Run Manifest
- binds source, mapping, canonicalization, validation, routing, calculation, assurance and aggregation provenance into one auditable run identity
- implements the 36-field Design-5 run manifest
- creates nine observable E01→E09 audit events and a continuous hash chain
- creates result inventory, project-summary reference, version registry and snapshot-hash registry
- creates deterministic manifest/export hashes plus immutable audit-snapshot hash
- implements a privacy-reduced browser-local JSON audit export
- explicitly avoids a production/GitHub-ready claim while browser/deployed acceptance remain unverified

ZIP SHA-256:
`8074cab5f7fd1b1976744d0d56619e2fe5d3437604aa767e2f19216f9d5de20a`

Version/status:
- release: `HUF Supply-Side KPI Calculator`
- version: `0.9.0-engine09`
- engine: `E09 Audit & Run Manifest`
- implementation status: `Engines 1-9 implemented`
- validation status: `IMPLEMENTED_MODULE_VALIDATED_BROWSER_NOT_VERIFIED`
- browser execution: NOT VERIFIED
- deployed GitHub Pages acceptance: NOT VERIFIED
- release gate: browser UAT + deployed acceptance remain open

### Package contents

ZIP inventory:
- **155 ZIP entries**
- **139 actual files**
- **16 directory entries**
- 1 release manifest
- **138 manifest-controlled payload files**

Major E09 additions:
- `ENGINE09_VALIDATION_STATUS.json`
- `config/audit-policy-v1.0.json`
- `docs/ENGINE09_CONTRACT.md`
- `docs/ENGINE09_VALIDATION_REPORT.md`
- `js/engines/engine09-audit.js`
- `tests/node-engine09.mjs`
- `tests/node-engine09-result.json`
- `tests/node-engine09-fixtures.mjs`
- `tests/node-engine09-fixtures-result.json`
- `tests/browser-engine09.html`
- `tests/browser-engine09-status.json`

All prior frozen positive and high-risk workbook fixtures remain included.

### Integrity

Independent release-manifest verification during this audit:

**138/138 manifest payload hashes PASS**

No missing payload or hash mismatch was found.

### E09 policy

Audit policy:

`HUF-E09-AUDIT-RUN-MANIFEST-v1.0`

Exact SHA-256:

`435d3941576f4ee74f58dc340041176a0cc4b5dcf5e0dbe446662de7236ab7ce`

Result/audit schema:

`HUF-D5-RESULT-AUDIT-REPORTING-v1.0`

Default privacy mode:

`standard`

Project data in URL:

`false`

### E09 boundary

E09 records provenance.

It does **not**:
- recalculate KPI values
- reroute structures
- rerun readiness as new methodology truth
- change assurance
- change aggregation
- convert null to zero
- claim formal HUF approval
- persist source data on a backend
- expose private raw/canonical data through the standard audit export

E09 requires finalized immutable snapshots from E02–E08 plus the E01 source fingerprint.

### 36-field run manifest

The Design-5 run manifest contains exactly **36 fields**.

It includes:
- Run ID
- Run timestamp
- Source session ID
- Source workbook name
- Source workbook SHA-256
- Source workbook byte size
- Template/schema version
- Project ID
- Project name
- PIA
- Reporting start/end
- Expected calendar days
- Formula catalog version
- Capacity catalog version
- Validation rulebook version
- Route registry version
- Input schema version
- App version
- DDW/runoff method
- DDW calibration ID
- Default area method
- Mapping snapshot hash
- Canonicalization snapshot hash
- Validation issue counts
- Blocking/warning counts
- Ready/not-ready/HOLD/excluded water counts
- Privacy mode
- PII reporting policy
- project-data-in-URL flag
- formal HUF governance status
- run notes

The golden non-leap manifest correctly records 365 expected days.

The leap portfolio correctly records 366.

### Controlling version registry

E09 collects **12 controlling versions**:
- app version
- route registry
- formula catalog
- input schema
- canonicalization policy
- validation rulebook
- routing policy
- assurance policy
- aggregation policy
- audit policy
- result schema
- UAT contract

This is stronger than relying on one application version string.

### Complete upstream snapshot chain

E09 records **8 upstream truth hashes**:
1. source workbook SHA-256
2. E02 mapping snapshot
3. E03 canonical snapshot
4. E04 validation snapshot
5. E05 routing snapshot
6. E06 calculation snapshot
7. E07 assurance snapshot
8. E08 aggregation snapshot

Then E09 appends:
9. run-manifest content hash

The completed chain is:

**Source workbook → Mapping → Canonical → Validation → Routing → Calculation → Assurance → Aggregation → Run Manifest**

Every audit event records its before/after hashes.

E09 never rewrites an upstream hash.

### Nine audit events

The audit policy freezes one observable event for each stage:

- E01 `SOURCE_INTAKE`
- E02 `MAPPING_FINALIZED`
- E03 `CANONICALIZATION_FINALIZED`
- E04 `VALIDATION_FINALIZED`
- E05 `OFFICIAL_ROUTING_FINALIZED`
- E06 `CALCULATION_FINALIZED`
- E07 `ASSURANCE_FINALIZED`
- E08 `AGGREGATION_FINALIZED`
- E09 `RUN_MANIFEST_FINALIZED`

These are controlled observable pipeline events.

They explicitly do **not** contain hidden reasoning.

### Run identity vs deterministic provenance identity

Each E09 finalization creates:
- a new `RUN-...` identifier
- a new timestamp

However:

`runManifestContentHash`

deliberately excludes run ID and timestamp.

Therefore re-finalizing unchanged upstream truth:
- produces a **new operational run ID**
- preserves the **same deterministic provenance-content hash**

This is an excellent reproducibility/audit design and should remain protected.

### Three E09 hashes

E09 provides:

**Run Manifest Content SHA-256**
- deterministic provenance identity for the controlled manifest content
- excludes transient run ID/timestamp

**Audit Package Content SHA-256**
- deterministic content identity for the standard export core

**Audit Snapshot SHA-256**
- immutable identity of the full private finalized audit snapshot

These should remain audit controls rather than primary user-facing dashboard content.

### Result inventory

Golden non-leap portfolio:

- total result inventory: **40**
- water results: **20**
- person-day results: **20**
- project summary rows: **6**
- validation issue occurrences: **1**
- audit events: **9**

The result inventory links:
- result type
- result ID
- entity ID
- route ID
- component
- calculation status
- numeric result
- assurance status

The duplicate-person-day high-risk fixture correctly produces **41 result inventory records**, proving that the inventory is based on actual finalized results rather than a hard-coded count.

### E09 audit status

Two run-level audit-finalization states:

**`audit_complete`**
- aggregation complete
- no blocking/scoped upstream validation issue

**`audit_complete_with_upstream_not_ready`**
- audit/provenance itself valid
- upstream results contain blockers or aggregation is not ready

Important:

> Audit completeness describes provenance finalization, not KPI acceptance or formal HUF certification.

This distinction should remain protected.

### High-risk run finalization

All 15 frozen high-risk XLSX fixtures pass E09.

Result:

**15/15 PASS**

Fourteen cases finalize as:

`audit_complete_with_upstream_not_ready`

The warning-only rainfall-outside-FY case may remain:

`audit_complete`

Examples retained accurately:
- missing leap day
- duplicate rainfall
- negative rainfall
- missing/invalid Verified Base Area
- missing evaporation
- advanced stage gap
- cascade cycle
- rejuvenation prerequisites
- lined Farm Pond gate failure
- approval missing
- duplicate person-day
- partial-season Functional Date missing

E09 preserves the upstream not-calculated/unresolved state rather than inventing a result.

### E09 core regression

`tests/node-engine09-result.json` records:

**54/54 PASS**

Checks include:
- Engine/lifecycle/policy
- valid RUN ID
- manifest/run identity consistency
- app/project/calendar metadata
- source SHA match
- formula/validation versions
- 9 audit events
- 40 result inventory records
- 20 water + 20 person-day
- 6 project-summary rows
- 8 upstream snapshot hashes
- 12 controlling versions
- URL privacy false
- standard privacy mode
- audit status
- every upstream hash preserved
- all hash lengths valid
- continuous event-chain links
- E09 event points to manifest-content hash
- audit export contains manifest/events
- observed source values redacted
- raw workbook bytes absent
- canonical tables absent
- participant names absent
- upstream mapping/aggregation hashes unchanged
- private audit snapshot frozen
- private audited object absent from public state
- re-finalization gets new run ID
- deterministic content hash remains stable

### Standard audit export

Actual downloadable artifact implemented in the application:

**`HUF_Audit_<RUN-ID>.json`**

Schema:

`HUF-E09-STANDARD-AUDIT-EXPORT-v1.0`

Included:
- run manifest
- validation issue registry
- audit events
- result inventory
- project summary
- controlling version IDs
- snapshot hashes
- audit-package content hash
- privacy notes

Observed validation source values are removed before standard export.

### Standard privacy boundary

Policy excludes from standard audit export:
- source workbook bytes
- raw workbook rows
- full canonical tables
- raw participant names
- gender by default
- observed sensitive values by default

The source workbook remains browser-memory-only.

Project data is not placed into the URL.

This privacy boundary should remain protected.

### Formal HUF governance remains separate

The run manifest retains:

`formalHufGovernanceStatus`

Example golden value:

`Expert-selected controlled methodology baseline; formal HUF confirmation pending`

E09 explicitly states that audit status is not certification by HUF.

This is consistent with E07's assurance-governance separation.

### Browser/deployment status

Package records:
- E09 core: **54/54 PASS**
- E09 high-risk fixtures: **15/15 PASS**
- all E01–E08 prior regression suites: PASS
- static architecture: **108/108 PASS**
- GitHub-style project-subpath HTTP: **15/15 PASS**
- real Chromium execution: **NOT VERIFIED**
- deployed GitHub Pages acceptance: **NOT VERIFIED**

Chromium timed out before returning a browser test result.

The release manifest explicitly says:

**No GitHub-ready/production-ready claim is made before browser/deployed acceptance.**

This careful release-status wording should remain our authoritative interpretation of the staged Engine09 package.

### Direct later/final lineage

The E09 implementation is part of the protected E01–E09 core.

`js/engines/engine09-audit.js`

SHA-256:

`ce50d099ba11161886fc0c66e475ab0877836962ed6f3f5de909d6a35a245f84`

The later archived implementation retains the same engine hash.

Protected E09 policy/config/document hashes include:

- `config/audit-policy-v1.0.json`
  - `435d3941576f4ee74f58dc340041176a0cc4b5dcf5e0dbe446662de7236ab7ce`
- `ENGINE09_VALIDATION_STATUS.json`
  - `d5970f7deadcd2908978d4c34dc4a042e85bba914c297e424893e5460e37c905`
- `docs/ENGINE09_CONTRACT.md`
  - `95e98febefb8edf014facebef874bfd70c9200c8cbd1fb69429c58703e6fa489`
- `docs/ENGINE09_VALIDATION_REPORT.md`
  - `3307b2b1630addced9c17fdb9a00da2734d6bb69ff7c899bbb7bb2b190dc76df`
- `tests/node-engine09.mjs`
- `tests/node-engine09-fixtures.mjs`
- `tests/node-engine09-fixtures-result.json`
- `tests/browser-engine09.html`
- `tests/browser-engine09-status.json`

The v1.0.0 maintenance guide also explicitly places E01–E09 and controlled methodology configs in the protected/high-risk zone.

Therefore:

> **E09 v0.9.0 completes the protected controlled engine pipeline. Product-layer shortcomings do not justify rewriting its audit methodology.**

### Early E09 UI/product findings

The Engine-09 final screen exposes:

**Actions**
- Download audit JSON
- Re-finalize manifest
- Clear/choose another workbook

**Top metrics**
- Run ID
- Audit event count
- Validation issue count
- Result inventory count

**Run Manifest**
- final controlled run identity

**Audit Event Chain**
- Engine
- Event type
- outcome
- action/rule ID
- before hash
- after hash

**Validation Issue References**
- rule
- severity
- entity
- message
- resolution

**Privacy & Export Boundary**
- notes explaining audit export/privacy

**Pipeline Complete**
- E01–E09 implementation complete
- UAT pending

These are valuable audit capabilities.

### Product-layer weaknesses

The final E09 screen remains highly technical:
- `Engine 9` language dominates
- long hashes occupy significant visual space
- run-manifest fields are not grouped for ordinary users
- audit event chain is developer/auditor oriented
- raw rule/action IDs are prominent
- no concise “Run Summary” for management users
- no human-readable methodology/version summary
- no export centre
- only one audit JSON download exists
- no CSV/XLSX reporting output
- no PDF
- no audit ZIP
- no bulk reports
- no user-facing template download
- no geography/dashboard linkage from the audit screen

### Clean-rebuild audit UX

Keep E09 truth intact.

Recommended default product display:

**Run Summary**
- Project
- Reporting period
- Workbook
- Run completed status
- Structures calculated / warning / not-calculated / HOLD / excluded
- Person-day claims
- methodology version
- assurance summary
- aggregation status
- formal HUF governance status

**Advanced / Audit**
- Run ID
- 36-field manifest
- full version registry
- full snapshot hash chain
- nine audit events
- validation issue registry
- raw rule IDs
- deterministic hashes

### Re-finalization UX

“Re-finalize manifest” is technically correct but too engineering-specific.

Possible public wording:

**Refresh audit package**

Advanced detail:
- creates a new Run ID/timestamp
- leaves upstream calculation/assurance/aggregation untouched
- deterministic manifest-content hash stays stable if upstream truth is unchanged

### Audit export should be retained

The JSON audit export is a real historical capability.

Classification:

**KEEP / PROTECT**

Future product should retain it as an Advanced/Audit export.

Do not replace it with screenshots or a lossy PDF-only audit trail.

### Broader export gap

The package tree contains no implemented:
- reporting CSV exporter
- reporting XLSX exporter
- audit ZIP packager
- detailed trace export service beyond runtime truth
- PDF generator
- management report engine

Therefore:

> **No broad export/report implementation is hidden in Engine09. The only actual user-downloadable output is the standard audit JSON.**

The Design-5 export families remain richer than the staged frontend.

Future clean rebuild should add:
- Compact Result CSV/XLSX
- Reporting Summary CSV/XLSX
- Audit Package ZIP/JSON/CSV
- Daily Trace CSV/JSON
- management PDF reports
- technical calculation PDFs
- bulk report ZIPs

all generated from protected E06–E09/D5 structured truth.

### Historical staged-engine milestone

With Step 3T:

> **The staged E01→E09 engine archaeology is complete.**

The reviewed sequence now covers:
- E01 Intake
- E02 Mapping
- E03 Canonicalization
- E04 Validation
- E05 Official Routing
- E06 Calculation
- E07 Assurance
- E08 Aggregation
- E09 Audit & Run Manifest

No staged engine remains after E09.

If additional historical release-candidate, browser-UAT, deployment, export/report or final-transition packages exist, audit them next before freezing the consolidated gap analysis.

If no additional historical packages remain, the next controlled step is:

1. retrieve the protected final v1.0.0 package from Library;
2. retrieve the Village Water Budget Intelligence v1.1.0 reference from Library;
3. perform a fresh end-to-end comparison against the complete historical findings;
4. freeze the consolidated Gap / Recovery / Productization matrix;
5. then freeze PRD/architecture before any coding.

### Recovery assessment

No lost E09 methodology or audit implementation was found:
- E09 engine exists and is protected lineage
- audit policy exists
- 36-field manifest exists
- upstream hash chain exists
- run/event/version/result inventory exists
- standard audit JSON exists
- privacy-redaction boundary exists
- 54-test harness exists
- 15-fixture regression exists

The remaining gaps are primarily:
- management-level audit presentation
- report/export centre
- CSV/XLSX/PDF/bulk outputs
- active input-template exposure
- final browser/deployed acceptance evidence
- full Design-6 scenario execution/certification evidence

### Classification

For `engine09-audit.js`:

**DIRECT FINAL ENGINE IMPLEMENTATION BASELINE — KEEP / PROTECT**

For `HUF-E09-AUDIT-RUN-MANIFEST-v1.0`:

**CONTROLLED AUDIT POLICY — KEEP / PROTECT**

For the 36-field Design-5 run manifest:

**CONTROLLED AUDIT / REPORTING CONTRACT — KEEP / PROTECT**

For the E01→E09 hash chain and nine audit events:

**CORE PROVENANCE CONTROL — KEEP / PROTECT**

For deterministic manifest-content hash vs transient Run ID:

**CORE REPRODUCIBILITY CONTROL — KEEP / PROTECT**

For standard privacy-reduced audit JSON:

**REAL HISTORICAL EXPORT CAPABILITY — KEEP / PROTECT**

For audit event/hash tables:

**KEEP CAPABILITY / MOVE TO ADVANCED-AUDIT UX**

For run summary / manifest presentation:

**KEEP CAPABILITY / REBUILD FOR USER CLARITY**

For raw engine/rule/hash language in default UI:

**MOVE TO ADVANCED / AUDIT**

For CSV/XLSX/PDF/audit ZIP/bulk reporting:

**ADD CLEANLY — NO LOST IMPLEMENTATION IDENTIFIED IN THIS PACKAGE**

For browser/deployed release gates:

**OPEN ACCEPTANCE GAP — INVESTIGATE / CLOSE BEFORE FUTURE RELEASE**



## Step 3U — Final v1.0.0 Deep Audit, VWB Product Comparison & Gap Freeze

Status: **COMPLETE**

### Protected HUF final package

`HUF_Supply_Side_KPI_Calculator_v1.0.0_FINAL(2).zip`

SHA-256:
`6ff4a19f65e2bd36a38863c98289ad5e5b45870aabf3513574ee134285302392`

Manifest:
**195/195 payload hashes PASS**

### Village Water Budget Intelligence reference

`village-water-budget-intelligence-v1.1.0-final-github-release(4).zip`

SHA-256:
`ec530348939edddd51456ff01ac127cf33c3e7889e48c5aba7d0d2a525ad9239`

Manifest:
**88/88 payload hashes PASS**

JavaScript:
- 38 files
- 0 syntax failures
- 44 relative imports
- 0 unresolved

### Final HUF vs Engine09 conclusion

Engine09 manifest paths: 138  
Final manifest paths: 195

- 138 common
- 103 unchanged
- 35 changed
- 57 added
- 0 removed

All E01–E09 engine source files remain byte-identical.

All critical controlled methodology configs remain byte-identical.

Therefore:

> **v1.0.0 did not alter the protected methodology after Engine09.**

The final release primarily adds:
- progressive VWBI-aligned UI/UX;
- release/CI metadata;
- Design-6 assessment/gate artifacts;
- repository/deployment packaging;
- test/release orchestration.

### Final release status freeze

Final classification:

`OPERATIONAL_FINAL_RELEASE_DESIGN6_CERTIFICATION_PENDING`

Operational acceptance reports browser/Pages/live workflow PASS from rc.3.

Strict Design-6 remains:
- 74 PASS
- 0 FAIL
- 80 NOT VERIFIED
- 154 total
- 15/15 high-risk physical fixtures PASS
- strict gate NOT PASSED

Frozen interpretation:

**Operational final release ≠ full Design-6 certification.**

### Final release-evidence inconsistency

`tests/node-regression-summary.json` reports 15/15 runner invocations failed, while individual regression artifacts and final release metadata report PASS.

Classify as:

**release-evidence / packaging consistency defect — FIX**

Do not classify as an engine/methodology failure.

### Final HUF product-state conclusion

Improved:
- landing/upload;
- privacy communication;
- mapping review;
- progressive workflow;
- KPI-first project result summary;
- audit JSON.

Still under-productized:
- workbook preflight;
- active template download;
- Data Preparation;
- correction workflow;
- route explanation;
- structure calculation detail;
- evidence review;
- geography;
- charts;
- display units;
- multi-sheet XLSX/CSV;
- PDF/bulk reporting.

### VWB reference conclusion

Use VWB for:
- prepared-result dashboard architecture;
- geography filters/drill-down;
- visual grammar;
- Export Centre;
- Report Centre;
- bulk/combined PDF patterns;
- service-adapter separation.

Do not use VWB:
- formulas;
- WSI;
- Kobo schema;
- cluster hierarchy;
- domain-specific QA rules;
- runtime CDN/debug patterns as HUF controlled architecture.

### Consolidated matrix

The consolidated KEEP / RECOVER / IMPROVE / ADD / DO NOT USE matrix is now frozen in:

`HUF_KPI_Consolidated_Gap_Recovery_Productization_Matrix_v1.0.md`

### Historical audit baseline

Historical audit is now frozen in:

`HUF_KPI_Historical_Audit_Baseline_v1.0.md`

### Next phase

Proceed to Product Requirements / architecture freeze.

**Do not start coding before those are frozen.**


# 7. Preliminary Product Improvement Register

These are audit hypotheses and design targets, not yet final requirements.

## KEEP / PROTECT

- E09 audit/run-manifest engine and HUF-E09-AUDIT-RUN-MANIFEST-v1.0 policy: 36-field manifest, nine-event E01→E09 hash chain, deterministic provenance content hash, privacy-reduced audit package and immutable audit snapshot
- E09 standard audit JSON as a real historical export capability; retain redaction of observed values/raw workbook/canonical tables/participant names and browser-memory-only source privacy
- E09 54/54 core regression and 15/15 high-risk fixture audit-finalization baseline; preserve distinction between audit completeness and upstream readiness/certification
- E08 status-segregated aggregation engine and HUF-E08-STATUS-SEGREGATED-AGGREGATION-v1.0 policy: seven-level hierarchy, five assurance buckets, null terminal totals, Calculated Total label discipline, and exact source-membership reconciliation
- E08 implementation closure for VAL-090/091; by E08 all 95 Design-4 rules have a stage owner, while full Design-6 scenario execution remains a separate certification question
- E08 64/64 core regression and 15/15 high-risk fixture reconciliation, including 41-record duplicate-person-day portfolio and aggregation corruption injections
- E07 assurance engine and HUF-E07-ASSURANCE-v1.0 policy: five frozen states, precedence, evidence completeness, method-warning separation and the invariant that assurance never rewrites E06 calculation truth
- separate formal-HUF-confirmation governance field; accepted-certified is controlled-method acceptance, not proof of external HUF approval
- E07 36/36 core assurance regression and 15/15 high-risk fixture baseline, including evidence-only mutation proof with unchanged E06 value/hash
- E06 calculation engine, formula library and frozen Design-2 v1.1 formula catalog: 78 formulas, 29 golden cases, full-precision daily balance, single-fill routes, person-days, null-not-zero and QA suppression
- E06 121/121 formula/integration regression plus 15/15 high-risk calculation fixtures; preserve E06 ownership of VAL-063/066/086–089 and E08 ownership of VAL-090/091
- private daily calculation trace, formula-ID lineage and calculation content/snapshot hashes as auditable calculation truth
- E05 official routing engine and HUF-E05-OFFICIAL-ROUTING-v1.0 policy: exactly-one-route invariant, frozen precedence, route identity vs eligibility separation, unresolved-not-guessed behavior and parallel person-day routing
- E05 64/64 core routing regression and 15/15 high-risk routing-fixture baseline, including preservation of route identity under non-route-defining validation failures
- E04 validation/readiness engine, frozen 95-rule Design-4 rulebook, six readiness states and workbook/record/series/network/person-day scope isolation
- E04 24-test core regression plus 15/15 real high-risk XLSX fixture regression baseline; preserve deferred-rule ownership rather than falsely treating deferred as PASS
- E03 canonicalization engine and HUF-CANONICALIZATION-v1.1 policy: null-vs-zero, controlled dates/types/units, source lineage, immutable canonical snapshot and centralized mapping→canonical invalidation
- E03 deterministic canonical-content SHA and provenance-bound canonical-snapshot SHA controls, plus 50-test regression harness
- E02 controlled schema-mapping engine, versioned alias registry, exact-match precedence, critical-field confirmation, conflict blocking, unmapped-not-zero behavior, deterministic mapping snapshot and 35-test regression harness
- E02 source-bound mapping provenance: source SHA-256 + schema version + immutable mapping SHA-256
- E01 workbook-intake contract, browser-local privacy boundary, source fingerprinting, immutable raw-source snapshot, null-vs-zero preservation and 25-test regression harness
- local deterministic XLSX intake/parser boundary and exact row-number/source-lineage preservation
- Design-6 v1.0 frozen Golden UAT contract, 154 logical-test definitions, 15 physical high-risk fixtures, 95 scenario builders, expected outputs and acceptance-gate semantics
- Design-5 v1.0 controlled result/audit/reporting schema, entity/field IDs, status mapping, null policy, reporting hierarchy and privacy boundaries
- Design-5 export-contract semantics and separation of compact results / reporting summaries / audit package / daily trace
- Design-4 v1.0 validation/readiness rulebook, rule IDs and scoped-blocking semantics
- E01–E09 controlled engine
- controlled configs
- route logic
- calculation logic unless evidence requires correction
- assurance
- aggregation
- audit architecture
- release-manifest/hash discipline

## FIX

- release-status wording must clearly distinguish Design-6 **test-contract validation PASS** from **application/browser UAT execution status**
- Design-5 synthetic reference-generator version labels (`result_schema:v0.1`, `D5-AGG-v0.1`) should be normalized in future clean reference generation without altering frozen v1.0 historical evidence
- release-status/documentation inconsistencies
- overly technical public-facing language
- weak result presentation
- weak GitHub/public product polish
- production/debug/dependency issues if found in future build

## IMPROVE

- replace the default hash-heavy Engine09 screen with a concise Run Summary; group manifest/version/governance information for normal users and keep full chain/event details in Advanced/Audit
- rename public “Re-finalize manifest” action to a user-oriented audit refresh/export action while preserving its deterministic-hash semantics
- keep audit completeness distinct from KPI acceptance, assurance, and formal HUF confirmation in labels and reports
- create an Export Centre around D5/E06–E09 truth instead of leaving audit JSON as the only production download
- rebuild E08 project summary into a status-aware management dashboard while retaining bucket-level advanced tables
- make the seven-level geography hierarchy navigable instead of merely displaying coverage counts
- ensure every KPI card/chart states whether it shows Accepted only or Calculated Total; never imply provisional/warning values are certified
- provide dedicated not-calculated / HOLD / excluded analysis instead of treating terminal statuses as zero
- translate internal `accepted-certified` into a safer public label such as “Accepted under controlled methodology” while preserving the frozen machine state underneath
- assurance UX should separate calculation, methodology warning, evidence completeness and external governance instead of collapsing everything into one traffic-light state
- build an evidence-review workflow that can change E07 assurance without implying E06 recalculation
- surface missing evidence type/source/remediation while keeping raw evidence codes and hashes in Advanced/Audit
- calculation result UX should explain KPI result, method, period and status in plain language while retaining full formula/trace provenance in Advanced/Audit
- distinguish source/readiness non-calculation from upstream cascade-dependency non-calculation, HOLD, exclusion and E06 QA suppression
- add presentation-only display-unit switching without altering canonical m³ calculation truth
- translate E06 QA rule IDs into understandable reconciliation checks while retaining raw VAL IDs underneath
- route UX should lead with KPI family, intervention/method, status and plain-language route reason; raw WTR/PD route IDs should remain secondary audit identifiers
- visually distinguish route identity from current calculation readiness so users understand that a structure can have a known official route while still needing input correction
- simplify duplicated readiness/eligibility columns in ordinary views while preserving both controlled states in technical detail
- validation UX should be action- and scope-first: show what needs correction, exactly what is blocked, and what remains calculable; keep rule IDs/engine ownership secondary
- show readiness as business-friendly states while retaining controlled machine states underneath
- distinguish controlled Hold/Excluded states from errors and distinguish warning-only issues from blockers
- group validation findings by corrective workflow and source location rather than only by raw rule occurrence
- translate canonicalization into a simple Data Preparation experience; ordinary users should see actionable type/unit corrections rather than engine/truth-layer jargon
- distinguish normalization issues from Design-4 readiness/validation issues while presenting both in one coherent correction workflow
- keep source→mapping→canonical hashes and raw diagnostic codes available in Advanced/Audit rather than on the default screen
- schema mapping should become exception-first: summarize auto-mapped / review-required / unmapped / conflict counts and show only exceptions by default
- translate E02 technical method labels into user-facing wording while retaining raw mapping method IDs/confidence/source hashes in an Advanced/Audit view
- mapping conflict UX should explain exactly which controlled fields compete for one source column and how to resolve the conflict
- workbook upload should include a concise pre-flight summary: source fingerprint, recognized/missing sheets, row/column counts and formula-cell visibility, with technical details expandable rather than dominant
- intake/template recognition must be visually distinguished from true Design-4 validation/readiness status
- landing page
- upload workflow presentation
- validation feedback
- validation/readiness UX that explains rule, affected scope and remediation without exposing unnecessary technical complexity
- testing/release documentation should show frozen suite totals, executed PASS/FAIL/NOT_VERIFIED/SKIPPED counts and explicit gate status rather than a single ambiguous “validated” label
- result/analytics layer should project Design-5 controlled entities into management-friendly views rather than invent a second calculation truth model
- results dashboard
- geography navigation
- units/display formatting
- structure-level analysis
- structure-type analysis
- audit presentation
- responsive experience
- help/methodology/privacy presentation

## ADD / FULLY EXPOSE

Potential features:
- Run Summary with project/reporting period, calculation coverage, assurance distribution, aggregation status, methodology versions and formal-HUF governance status
- Advanced Audit Manifest view exposing the 36 fields, version registry, snapshot hash chain and nine observable pipeline events
- Privacy-reduced Audit Package download retaining the current JSON plus future ZIP/CSV projections
- Export Centre for Compact Result, Reporting Summary, Daily Trace, Audit Package and management/technical PDF outputs
- Project → District → Block → GP → Village → Structure drill-down backed by E08 prepared aggregates/results
- KPI × Assurance dashboard with Accepted / Evidence Pending / Method Warning / Not Calculated / Excluded segmentation
- Structure Type and Official Route analysis using prepared result truth only
- Status-aware Project/District/Block/GP/Village summary tables and downloadable reporting views
- Evidence Review Centre with structure/claim, missing evidence type, reference status, shared-vs-direct evidence, and re-run-assurance action
- Assurance Dashboard by geography / KPI / structure type / route with five controlled buckets and separate evidence/method dimensions
- Downloadable Assurance & Evidence Register preserving E06 result IDs and E07 status/evidence lineage
- Structure Calculation Detail with capacity/catchment/rainfall/evaporation/infiltration/result narrative and KPI identity reconciliation
- Daily Calculation Trace chart/table + downloadable trace export for WTR-111 structures
- Display-unit selector for m³ / thousand m³ / million m³ / BL / approved HUF reporting units
- Calculation Coverage summary separating calculated / warning / source-blocked / dependency-blocked / HOLD / excluded / QA-suppressed results
- Official Route Summary by KPI family, intervention, method, eligibility and geography
- Structure Route Detail showing timing basis, reason, current readiness and advanced controlled route ID
- Separate KPI 1.2.1 person-day routing/status view to preserve module independence
- Validation & Correction Centre with workbook/structure/rainfall/network/evidence/person-day issue groups, affected scope and remediation guidance
- Calculation Coverage summary: ready / warning / not-ready / hold / excluded by structure and module
- Downloadable validation/correction register linked to rule IDs and source locations
- Data Preparation summary showing prepared tables/records, controlled conversions and type/unit issues before readiness validation
- Advanced Provenance view for source SHA → mapping SHA → canonical content/snapshot SHA lineage
- Schema Mapping Review with auto-mapped summary, review-required exceptions, manual override and conflict resolution
- Advanced Mapping Audit drawer exposing source SHA-256, schema version, mapping SHA-256, method IDs and confidence where useful
- Workbook Pre-flight / Intake Diagnostics panel derived from E01 source inventory
- Village Summary
- Block Summary
- District Summary
- Project Summary
- Structure-Level Results
- Structure-Type Summary
- Route Coverage
- Assurance Summary
- Excluded / Not Calculated Summary
- Person-Day Summary
- Calculation Trace
- Excel/XLSX
- CSV
- PDF
- combined/bulk reports where appropriate
- professional branding
- downloadable current controlled input template
- simplified user-facing sample-data/demo entry while retaining frozen leap/non-leap fixtures for technical testing
- technical XLSX calculation-report blueprint from frozen golden E2E reference
- Design-5 Compact Result Export (CSV/XLSX/JSON)
- Design-5 Reporting Summary Export (CSV/XLSX/JSON)
- Design-5 redacted/restricted Audit Package
- Design-5 Daily Trace Export under technical/advanced mode
- hierarchy-aware status-segregated reporting from structure → village → GP → block → district → PIA → project
- full Design-6 regression runner coverage for all 95 Design-4 scenarios in the future clean release
- CI/browser acceptance output with machine-readable Design-6 gate evidence

## INVESTIGATE

- after the staged engine sequence, retrieve final v1.0.0 and perform a fresh end-to-end file/function comparison before consolidated gap freeze
- retrieve Village Water Budget Intelligence v1.1.0 as product/reporting architecture reference after historical audit completion; do not use it to change HUF methodology
- determine whether any remaining RC/UAT/deployment/final-transition package closes browser acceptance, deployed Pages acceptance or the 80-not-verified Design6 scenario gap
- verify final v1.0.0 exposure of E09 audit JSON and whether any final-stage export/report code exists outside the staged Engine09 package
- compare final v1.0.0 dashboard against E08's already-operational geography/status aggregation to identify where geography drill-down and bucket segmentation were under-exposed
- inspect Engine09/final reporting/export code for any use of E08 project summaries or aggregate rows; historical E08 itself contains no export/PDF/chart implementation
- verify that final/public labels never call Calculated Total 'Certified Total' and that accepted/provisional/warning remain segregated in filters/exports
- compare final v1.0.0 assurance presentation against Engine07’s explicit E06-value/evidence/method separation to identify whether governance/evidence distinctions became hidden
- inspect Engine08/09 aggregation/reporting to confirm how accepted/provisional/warning/not-calculated/excluded buckets are segregated and whether evidence detail is retained in exports
- confirm later/final wording around `accepted-certified` does not imply formal HUF certification beyond the configured methodology baseline
- compare final v1.0.0 structure result presentation and export surfaces against the rich E06 calculation/trace truth to identify what is currently under-exposed
- verify whether any historical/later package introduced a trace chart, calculation narrative or detailed technical Excel/PDF report before final release
- reconcile E06 canonical m³/BL storage with future display-unit/reporting requirements without altering controlled numbers
- compare final route presentation against the early Engine05 table to determine whether useful official-route/timing/reason visibility was lost or buried
- verify how final dashboard/export aggregation buckets consume E05 route identity and whether route/status segregation is sufficiently visible to users
- determine whether later Engine05–09 or final frontend made E04 validation presentation less actionable; compare against this early structure-readiness + issue-registry model
- trace whether the remaining 80 Design-4 scenario-builder cases were ever executed after rc.1; E04 physical high-risk 15/15 PASS is now positively evidenced but does not close the full Design-6 gate
- compare the protected final E03/correction presentation with the clearer separation in Engine03 v0.3.0; determine whether type/unit diagnostics are currently too hidden or too technical
- verify whether future exports should expose canonical conversion lineage at structure/detail level or only inside audit/trace exports
- compare the protected final schema-mapping screen against the clean exception-first behavior visible in Engine02 v0.2.0; determine whether later UI additions made the workflow more technical or less focused
- confirm whether any final-release mapping profile persistence exists and whether it is limited to field relationships rather than project-row data
- compare the protected final E01 user-facing intake screen against the useful v0.1.0 workbook-inventory/source-fingerprint presentation to decide what should be re-exposed in the clean UX
- dormant dashboard/export/report CSS/code
- historical lost features
- historical export implementations
- verify how completely the final frontend exposes the 230-field Design-5 result contract and four frozen export families
- review report-specific privacy projection for potentially-sensitive default-export fields such as Work Scope / Activity
- reconcile future XLSX Export Centre with Design-5 export contracts and frozen GOLDEN_E2E calculation-report structure
- historical chart implementations
- historical branding
- historical calculation differences
- Design-6 outstanding scenario status: frozen contract confirms 95 scenario definitions, while recorded rc.1 execution was 15 PASS / 80 NOT VERIFIED; search later packages for explicit closure of the 80 scenarios plus browser and deployed GitHub Pages gates
- best production dependency strategy
- best clean repository structure
- production integration/download of the recovered authoritative `HUF_Supply_Side_Controlled_Input_Template_v1.1.xlsx` (found in Designs 1–3 REASSESSED FROZEN v1.1; exact schema matches final HUF-SS-INPUT-v1.1)

---

# 8. Dashboard Questions

The future dashboard should answer real questions, for example:

- How much water potential has been calculated?
- How much is Accepted?
- How much is Provisional?
- How much is Excluded / Not Calculated?
- Which districts contribute most?
- Which blocks contribute most?
- Which villages contribute most?
- Which structure types contribute most?
- Which routes contribute most?
- Where are person-days concentrated?
- Which locations/structures have assurance concerns?
- Which records require review?

Charts should be selected only when they support a clear question.

---

# 9. Potential Geography / Analysis Filters

To be evaluated after historical audit:

- Project
- District
- Block
- Gram Panchayat
- Village
- Structure
- Structure Type
- Structure Subtype
- Intervention Type
- Route
- Assurance Status
- Calculation Status
- reporting period/year if supported

Filters should operate on prepared controlled results, not recalculate methodology.

---

# 10. Potential Export Centre

Candidate management/technical tables:

1. Project KPI Summary
2. District Summary
3. Block Summary
4. Gram Panchayat Summary
5. Village Summary
6. Structure-Level Results
7. Structure-Type Summary
8. Route Coverage
9. Assurance Status
10. Validation/Readiness Summary
11. Excluded / Not Calculated Records
12. Person-Day Summary
13. Calculation Trace
14. Audit / Run Metadata

Potential formats:
- XLSX
- CSV
- JSON where appropriate

---

# 11. Potential Report Centre

Possible management PDFs:
- Village KPI Report
- Block KPI Report
- District KPI Report
- Project KPI Report

Possible technical PDFs:
- Detailed KPI Calculation Report
- Assurance / Validation Report
- Structure Calculation Detail
- Audit / Methodology Report

Potential delivery:
- single PDF
- combined PDF
- bulk village reports as ZIP

Reports should be generated from structured controlled results, not merely dashboard screenshots.

---

# 12. Conceptual Future Architecture

```text
INPUT
  ↓
E01 Upload / Workbook
  ↓
E02 Mapping
  ↓
E03 Canonicalisation
  ↓
E04 Validation
  ↓
E05 Routing
  ↓
E06 Calculation
  ↓
E07 Assurance
  ↓
E08 Aggregation
  ↓
E09 Audit
  ↓
RESULT / ANALYTICS MODEL
  ↓
 ┌───────────────┬──────────────┬──────────────┬──────────────┐
 │               │              │              │
Dashboard      Exports        Reports         Audit
 │               │              │              │
Charts         XLSX/CSV       PDF/ZIP         JSON
```

Possible high-level UI:

```text
Start
  → Upload
  → Review / Mapping
  → Validation
  → Calculate
  → Dashboard
  → Geography Analysis
  → Structure Analysis
  → KPI / Assurance Analysis
  → Export Centre
  → Report Centre
  → Methodology / Audit
```

This must be an original HUF-specific product, not a clone of the Water Budget UI.

---

# 13. Historical ZIP Audit Protocol

For every remaining historical ZIP:

## Identification
- exact filename
- SHA-256
- likely development stage
- date/version evidence
- package purpose

## File comparison
Compare against final v1.0.0:
- added files
- removed files
- renamed files
- modified files
- engine/config changes

## Feature comparison
Inspect:
- UI
- branding
- dashboard
- charts
- filters
- XLSX/CSV
- PDF
- reports
- methodology
- tests
- deployment

## Classification

Every useful item must be classified:

**KEEP** — final release already has the better implementation  
**RECOVER** — useful historical capability lost from final  
**REFERENCE** — concept worth rebuilding cleanly  
**OBSOLETE** — superseded  
**METHODOLOGY EVIDENCE** — useful for lineage, not code reuse  
**DO NOT USE** — defective/temporary/unsafe implementation

Do **not** merge historical code during this audit phase.

---

# 14. Historical Evolution Register

| Package | Stage | Major Contribution | Lost Feature? | Classification |
|---|---|---|---|---|
| HUF Design1 KPI Route Registry v0.1 | Early methodology | Route/capacity foundation | No identified UI feature | Methodology Evidence |
| HUF Design1 FROZEN v1.0 | Controlled Design-1 freeze | Formal freeze + manifest; same substantive v0.1 files | No | Methodology Evidence / Freeze Baseline |
| HUF Design2 Formula Catalog v0.1 | Early formula working design | 74 formulas, 25 golden cases, daily balance and stage/storage refinement | No UI feature | Methodology Evidence / Formula Lineage |
| HUF Design2 FROZEN v1.0 | Controlled formula freeze | 74 formulas / 25 cases frozen; stage-storage accepted; DDW calibration-first; partly-lined HOLD | No | Methodology Evidence / Formula Freeze |
| HUF Design3 FROZEN v1.0 | Controlled input/schema freeze | 135-field formula-free workbook; route/formula coverage; schema corrections | No UI, but important upload/template lineage | Methodology Evidence / Input-Schema Freeze |
| HUF Designs 1–3 REASSESSED FROZEN v1.1 | Direct final Design 1–3 baseline | 10 routes / 78 formulas / 147 fields; simplified field method; exact final config lineage | **Yes: v1.1 blank controlled input template missing from final app package** | Direct Final-Design Baseline + Template RECOVER |
| HUF v1.1 Synthetic All-Structures Sample | Golden E2E sample/reference | 17/17 structure types, 10/10 routes, leap-year input + multi-sheet calculation report | User-facing rich XLSX export not exposed, though reference report exists in frozen tests | Test Evidence + XLSX Export Blueprint |
| HUF v1.1 Synthetic All-Structures Non-Leap Sample | Golden non-leap E2E/reference | 365-day calendar, no 29-Feb, 17/17 types, 10/10 routes, leap-vs-nonleap technical comparison | Existing sample demo should be simplified for public UX | Test Evidence + Calendar QA + Demo UX Reference |
| HUF Design4 FROZEN v1.0 | Controlled validation/readiness freeze | 95 rules; 6 readiness states; scoped blockers; leap/non-leap calendar; exact implemented rulebook lineage | No lost UI; validation UX should present the controlled rules more clearly | Direct Final Validation Baseline / Controlled Methodology Evidence |
| HUF Design5 FROZEN v1.0 | Controlled result/audit/reporting freeze | 9 entities / 230 fields; five assurance states; seven-level reporting hierarchy; privacy + 4 export contracts; later E07/E08/E09 lineage | Controlled export/reporting capabilities exist but are under-exposed in active product; no lost UI code here | Direct Final Result/Audit/Reporting Baseline + Product Contract |
| HUF Design6 FROZEN v1.0 | Controlled Golden UAT / regression freeze | 154 logical tests; 95 D4 rule cases; 29 D2 formula cases; 28 D5 assertions; 2 E2E goldens; 15 physical XLSX fixtures; runner + scenario contracts | No lost UI; recorded rc.1 later left 80 D4 scenarios + browser/deploy gates unverified | Direct Final Test/Acceptance Baseline + Release-Certification Evidence |
| HUF Supply-Side KPI Calculator Engine01 v0.1.0 | First staged engine implementation | Browser-local E01 intake, SHA-256 source identity, immutable raw source, null-vs-zero preservation, local XLSX parser, workbook inventory and 25-test regression harness | Possible under-exposed workbook pre-flight/source-inventory UX; no lost methodology | Direct Final Engine-Lineage Baseline + Pre-flight UX Reference |
| HUF Supply-Side KPI Calculator Engine02 v0.2.0 | Second staged engine implementation | E02 automatic/confirmed schema mapping for 147 fields; versioned aliases; fuzzy/type suggestions; manual overrides; conflict blocking; deterministic immutable mapping SHA; 35-test harness | No lost engine capability; exception-first mapping review is a strong product UX reference | Direct Final Engine Implementation Baseline + Mapping UX Reference |
| HUF Supply-Side KPI Calculator Engine03 v0.3.0 | Third staged engine implementation | Private immutable canonical model; null/zero preservation; ISO date/type/unit normalization; controlled conversions; source lineage; mapping invalidation; deterministic content/provenance hashes; 50-test harness | No lost engine capability; data-preparation and provenance UX should be simplified/re-exposed cleanly | Direct Final Engine Implementation Baseline + Data Preparation UX Reference |
| HUF Supply-Side KPI Calculator Engine04 v0.4.0 | Fourth staged engine implementation | Frozen 95-rule D4 validation; 87 rules executed / 8 deferred; six readiness states; scope isolation; 24/24 core + 15/15 real mutated XLSX fixtures; immutable validation snapshot | No lost engine capability; validation/correction UX is valuable but too engineering-centric; full 95-scenario Design6 execution remains a separate certification question | Direct Final Engine Implementation Baseline + Validation UX Reference |
| HUF Supply-Side KPI Calculator Engine05 v0.5.0 | Fifth staged engine implementation | Official water/person-day routing truth; 10 frozen water routes; exactly-one-route invariant; timing/new/rejuvenation precedence; route identity separated from readiness; 64/64 core + 15/15 routing fixtures | No lost engine capability; route explanation and route/status presentation need simplification for normal users | Direct Final Engine Implementation Baseline + Routing UX Reference |
| HUF Supply-Side KPI Calculator Engine06 v0.6.0 | Sixth staged engine implementation | Frozen 78-formula Design2 core; 29/29 golden cases; KPI1.1.1 daily balance; KPI1.1.2/lined single-fill; KPI1.2.1 person-days; E06 QA VAL-063/066/086–089; 121/121 integration + 15/15 fixtures; immutable daily trace | No lost calculation implementation; rich structure/trace truth is under-presented and should drive future detail views/exports | Direct Final Calculation Implementation Baseline + Calculation/Trace UX Reference |
| HUF Supply-Side KPI Calculator Engine07 v0.7.0 | Seventh staged engine implementation | Five-state assurance attached to immutable E06 truth; evidence completeness + method warnings separate; formal HUF approval separate; 36/36 core + 15/15 fixtures; evidence-only mutation changes status without changing 38.4 m³ result/hash | No lost assurance engine; public wording/evidence workflow/assurance analytics need substantial product improvement | Direct Final Assurance Implementation Baseline + Assurance/Evidence UX Reference |
| HUF Supply-Side KPI Calculator Engine08 v0.8.0 | Eighth staged engine implementation | Seven-level status-segregated aggregation; five assurance buckets; VAL-090/091 PASS; all 95 D4 rules now have stage owners; 64/64 core + 15/15 fixtures; exact hierarchy membership reconciliation | No lost aggregation engine; dashboard/geography/charts/exports are productization gaps over already-prepared E08 truth | Direct Final Aggregation Implementation Baseline + Dashboard/Reporting Foundation |
| HUF Supply-Side KPI Calculator Engine09 v0.9.0 | Ninth staged engine implementation / staged pipeline completion | 36-field run manifest; E01→E09 hash/event chain; result inventory/version registry; privacy-reduced audit JSON; 54/54 core + 15/15 fixtures; browser/deployed gates still NOT VERIFIED | Protected audit core is complete; only audit JSON is implemented as download, while broader XLSX/CSV/PDF/reporting and user-friendly run summary remain product gaps | Direct Final Audit Implementation Baseline + Audit/Export UX Reference |
| Remaining historical packages | Pending | Pending | Pending | Pending |

Update this table after every ZIP.

---

# 15. Planned Project Phases

## Phase 0 — Preserve baseline
Status: **DONE**

## Phase 1 — Current final-release audit
Status: **PRELIMINARY AUDIT DONE**

## Phase 2 — Water Budget architecture/product reference
Status: **PRELIMINARY REVIEW DONE**

## Phase 3 — Historical development archaeology
Status: **IN PROGRESS**

Do not code yet.

## Phase 4 — Consolidated gap analysis
Deliver:
- KEEP
- FIX
- RECOVER
- REMOVE
- IMPROVE
- ADD
- INVESTIGATE

## Phase 5 — Product Requirements Specification
Freeze:
- target users
- workflow
- dashboard
- filters
- metrics
- charts
- exports
- reports
- branding
- responsiveness
- methodology/privacy/audit
- deployment requirements

## Phase 6 — Technical Architecture & Migration Plan
Design:
- repository
- protected engine integration
- analytics/result model
- dashboard
- exports
- PDF reporting
- configuration
- test strategy
- release system

## Phase 7 — Original HUF UI/UX Design
No Water Budget UI copying.

## Phase 8 — Controlled Implementation
Suggested sequence:
1. clean shell
2. protected E01–E09 integration
3. result/analytics model
4. geography navigation
5. executive dashboard
6. structure analytics
7. assurance/quality analytics
8. XLSX/CSV export
9. PDF reporting
10. audit interface
11. branding
12. methodology/help
13. responsive polish

## Phase 9 — Regression & Acceptance
Test:
- controlled outputs
- reference workbooks
- geography totals
- no double counting
- exports
- PDFs
- desktop/mobile
- privacy
- GitHub Pages
- hashes/release integrity

## Phase 10 — Clean Release
Produce:
- source repository
- deployable GitHub package
- release ZIP
- SHA-256
- release notes
- Git tag
- methodology/version manifest
- updated Obsidian vault
- future-change guide
- audit report

---

# 16. Risk Rules

## Green
Presentation/UI only.

## Amber
Workflow, state, orchestration, data handling.

## Red
Formula, route, schema, validation, assurance, aggregation, audit, controlled configs, frozen evidence.

Red-zone changes require governed/versioned methodology changes and full regression.

---

# 17. Rules Until Historical Audit Is Complete

## DO NOT

- modify the protected v1.0.0 release
- redesign production UI yet
- rewrite E01–E09
- change formulas
- change controlled configs casually
- modify tests merely to force PASS
- merge historical code
- assume older code is better
- copy Water Budget UI
- start the final rebuild prematurely

## DO

- preserve every ZIP
- fingerprint every ZIP
- inspect one package at a time
- compare with final baseline
- record methodology evolution
- find lost capabilities
- identify reusable concepts
- maintain the evolution register
- maintain the improvement register

---

# 18. Restart Instructions for a Completely New Chat

If the original conversation is unavailable:

1. Upload this Markdown file first.
2. Upload:
   - final HUF `v1.0.0` release ZIP;
   - HUF Future Change Guide;
   - HUF Obsidian Vault;
   - Village Water Budget Intelligence reference ZIP;
   - all historical HUF ZIPs available.
3. Tell the assistant:

> “Use the attached Master Audit, Recovery and Clean Rebuild Plan as the project state. Do not start coding. Verify the protected final baseline and continue Phase 3 historical ZIP archaeology from the first package not yet recorded in the evolution register.”

4. The assistant should:
   - verify filenames/hashes where practical;
   - read the plan before interpreting old packages;
   - treat Water Budget Intelligence as an architectural reference only;
   - preserve E01–E09 unless evidence supports a controlled change;
   - update this document after major audit milestones.
5. After all historical ZIPs are reviewed, create the consolidated Gap Analysis before writing production code.

---

# 19. Current Position at Time of This Backup

**Date:** 5 September 2026

- Step 1 final v1.0.0 package: reviewed at preliminary level
- Step 2 Water Budget reference: reviewed at preliminary level
- Step 3A Design 1 Route Registry v0.1: reviewed
- Step 3B Design 1 FROZEN v1.0: reviewed
- Step 3C Design 2 Formula Catalog v0.1: reviewed
- Step 3D Design 2 FROZEN v1.0: reviewed
- Step 3E Design 3 FROZEN v1.0: reviewed
- Step 3F Designs 1–3 REASSESSED FROZEN v1.1: reviewed
- Step 3G HUF v1.1 Synthetic All-Structures Sample Package: reviewed
- Step 3H HUF v1.1 Synthetic All-Structures Non-Leap Sample Package: reviewed
- Step 3I HUF Design4 FROZEN v1.0: reviewed
- Step 3J HUF Design5 FROZEN v1.0: reviewed
- Step 3K HUF Design6 FROZEN v1.0: reviewed
- Step 3L HUF Supply-Side KPI Calculator Engine01 v0.1.0: reviewed
- Step 3M HUF Supply-Side KPI Calculator Engine02 v0.2.0: reviewed
- Step 3N HUF Supply-Side KPI Calculator Engine03 v0.3.0: reviewed
- Step 3O HUF Supply-Side KPI Calculator Engine04 v0.4.0: reviewed
- Step 3P HUF Supply-Side KPI Calculator Engine05 v0.5.0: reviewed
- Step 3Q HUF Supply-Side KPI Calculator Engine06 v0.6.0: reviewed
- Step 3R HUF Supply-Side KPI Calculator Engine07 v0.7.0: reviewed
- Step 3S HUF Supply-Side KPI Calculator Engine08 v0.8.0: reviewed
- Step 3T HUF Supply-Side KPI Calculator Engine09 v0.9.0: reviewed — staged E01→E09 engine sequence complete
- Step 3U Final v1.0.0 deep audit + VWB product comparison + consolidated matrix freeze: complete
- Staged Engine01→Engine09 sequence: **complete through Step 3T**
- Additional RC/UAT/deployment packages: **full archaeology waived; use only for targeted evidence if a future release-certification question requires it**
- Consolidated Gap / Recovery / Productization matrix: **FROZEN v1.0**
- Product requirements: **next phase — not yet frozen**
- Future architecture: **next phase — not yet frozen**
- Rebuild/coding: **intentionally not started**

This is the correct restart point.

---

# 20. Backup Discipline Going Forward

After every meaningful historical-package review:

1. update the Historical Evolution Register;
2. update new findings;
3. update the Improvement Register;
4. save a new version of this file, for example:
   - `v0.2`
   - `v0.3`
   - etc.;
5. preserve older versions rather than overwrite the only copy.

After the historical audit is complete, create a stable **Audit Baseline v1.0** of this document before implementation begins.


---

# Procedure IMP-7B-C — Workbook Preflight Implementation

**Date:** 6 September 2026  
**Phase:** Phase 7 — Controlled Implementation  
**Implementation Batch:** IMP-7B-C  
**Status:** COMPLETE / PASS / FROZEN SUB-BASELINE

## Purpose

Implement UX-02 Workbook Preflight on the frozen IMP-7B-B upload baseline while preserving the protected E01–E09 methodology and keeping exception-first Mapping Review in the separately governed IMP-7B-D batch.

## Inputs / evidence

- `HUF_KPI_Rebuild_Phase7BB_Upload_v0.1.3.zip`
  - verified SHA-256: `f6dc1e38bfd6aedaef6e438e119de75e4810443163dfc6cd9462c78fe3312869`
- `HUF_KPI_Product_Requirements_Specification_v1.0.md`
  - relevant controlled requirements: PRD-IN-004, PRD-IN-005, PRD-IN-007
- `HUF_KPI_Technical_Architecture_v1.0.md`
  - preflight service / source-state / immutable E01 boundary
- `HUF_KPI_UI_UX_Specification_v1.0.md`
  - UX-02 Workbook Preflight
- protected E01 intake summary contract
- IMP-7B-A governed E02 mapping-command boundary, deliberately not modified

## Actions performed

1. Recovered the authoritative v0.37 plan and IMP-7B-B package from ChatGPT Library rather than restarting from the attached stale v0.36 copy.
2. Verified the recovered IMP-7B-B package SHA-256 before using it as the implementation baseline.
3. Preserved a clean baseline extraction for changed-file and protected-core parity comparison.
4. Implemented `services/preflight-service.js` as a product-only summary derived from the protected E01 result.
5. Implemented `views/preflight-view-model.js`.
6. Implemented UX-02 in `ui/pages/workbook-preflight.js`.
7. Updated source state so the preflight result is recursively immutable.
8. Updated the orchestrator so successful E01 intake creates/stores the preflight model before `PREFLIGHT_COMPLETE`.
9. Enabled the Home `Review workbook` action to run protected E01 intake and open Workbook Preflight.
10. Enabled `Review & Correct` navigation only when a preflight result exists.
11. Added controlled preflight continuation behavior that stops at the IMP-7B-D Mapping Review boundary rather than silently performing/finalizing mapping.
12. Added dedicated preflight service, UI-contract, source-state and package regression tests.
13. Regenerated release status/evidence and release manifest.
14. Packaged the governed 0.1.4 artifact, extracted it into a clean directory and reran the complete test suite from the packaged artifact.
15. Compared every protected-core file against IMP-7B-B.

## Implemented product behavior

Workbook Preflight now displays:

- detected template version;
- reporting period;
- recognized controlled sheet count;
- structures detected;
- formula presence;
- overall preflight status;
- controlled sheet inventory with row/column/formula counts;
- errors, warnings and information in governed priority order;
- source fingerprint;
- source session identity;
- advanced E01 intake metadata without raw workbook row preview values.

Preflight behavior:

- missing template version → blocking preflight error;
- unsupported template version → blocking preflight error;
- missing controlled sheets reported by E01 → blocking preflight error;
- extra sheets → warning;
- formula presence → warning;
- incomplete reporting-period detection → warning;
- errors appear before warnings and information;
- raw workbook rows are not copied into the product preflight model;
- preflight is explicitly labelled as protected E01 intake summary, not Design-4 validation;
- `Continue to Mapping` is disabled while blocking preflight errors remain.

The preflight service does not import or execute E02 and does not reproduce schema mapping or Design-4 validation rules.

## Controlled-methodology impact

**NONE**

Implementation classification:

**AMBER product/workflow implementation around RED protected methodology**

Protected methodology changed:
**NO**

E01–E09 changed:
**NO**

Formula/routing/canonicalization/validation/assurance/aggregation/audit semantics changed:
**NO**

## Tests / verification

Fresh governed package result:

- non-manifest suites: **21/21 PASS**
- protected-core manifest: **37/37 PASS**
- protected engine imports: **10/10 PASS**
- state/invalidation: **9/9 PASS**
- state hardening: **6/6 PASS**
- mapping-state governance regression: **20/20 PASS**
- orchestrator: **10/10 PASS**
- controlled-config hardening: **6/6 PASS**
- Worker runtime: **4/4 PASS**
- Worker lifecycle/mapping RPC: **11/11 PASS**
- source selection/intake/preflight handoff: **19/19 PASS**
- controlled template: **9/9 PASS**
- upload UI contract: **14/14 PASS**
- preflight service: **18/18 PASS**
- preflight UI contract: **20/20 PASS**
- static architecture: **PASS / 0 violations**
- relative imports: **91 files / 81 imports / 0 unresolved**
- JSON/config parse: **16 / 0 failures**
- JavaScript syntax: **91 / 0 failures**
- curated Pages payload: **PASS**
- Pages workflow: **5/5 PASS**
- release manifest: **151/151 PASS**

## Protected-core parity

Working tree versus IMP-7B-B:

**27/27 protected files MATCH**

Packaged artifact versus IMP-7B-B:

**27/27 protected files MATCH**

Protected mismatch:
**0**

## Browser smoke

A fresh Chromium headless smoke was attempted against a local static server. The browser did not return before the execution timeout and emitted container DBus/zygote environment errors. No DOM was returned.

Classification:

**ENVIRONMENT_BLOCKED — NOT APPLICATION FAIL**

This does not replace the later governed real-browser/browser-CI acceptance requirement.

## File delta from IMP-7B-B

- added: **6**
- removed/superseded: **2**
- changed: **19**
- unchanged: **126**

Exact inventory:

`HUF_KPI_Phase7BC_Changed_File_Inventory_v1.0.json`

## Frozen implementation artifact

`HUF_KPI_Rebuild_Phase7BC_Preflight_v0.1.4.zip`

SHA-256:

`98344b959805f0b57305641dce49e213e5c62f50302613c462a4cc60eef4bcd9`

Checksum file:

`HUF_KPI_Rebuild_Phase7BC_Preflight_v0.1.4.sha256.txt`

## Companion artifacts

- `HUF_KPI_Phase7BC_Preflight_Implementation_Report_v1.0.md`
  - SHA-256: `384ee9b22a5302e972e65c8e225646cef8771bef7438edab24e0e6d03412f7fd`
- `HUF_KPI_Phase7BC_Final_Validation_v1.0.json`
  - SHA-256: `3530f5f66d7d153eb0bfd3ec25ff2302f4514d1d634794fe0f9d5516c57137b7`
- `HUF_KPI_Phase7BC_RELEASE_MANIFEST_v1.0.json`
  - SHA-256: `ee3473707a07ab80be357f017192f0cc35f0c5f1b5714cfaf567cfc0b532b49b`
- `HUF_KPI_Phase7BC_PROTECTED_CORE_MANIFEST_v1.0.json`
  - SHA-256: `9d3a93c21d4a0f76a82ebfc707d55031845380b96401619b15b514a046f4e5cb`
- `HUF_KPI_Phase7BC_Changed_File_Inventory_v1.0.json`
  - SHA-256: `b3a729eccd86af935dc9dc55e9966a8beb8489f39021c9c222f295249b9f1a62`
- `HUF_KPI_Phase7BC_Browser_Smoke_v1.0.json`
  - SHA-256: `1496a16bb56005d0c3fe2d788ed8e6e5ade24de528a5ffb9f6eb9023db6933d8`
- `HUF_KPI_Phase7BC_Packaged_Protected_Parity_v1.0.json`
  - SHA-256: `edfe887c7bd294111f03c8a579c54edde0d9d90cc9912f281c80b70422e0cbad`

## Decision

**IMP-7B-C PASS / CLOSED / FROZEN SUB-BASELINE**

There is no Workbook Preflight blocker to proceeding.

## Open issues

- fresh interactive browser workflow evidence remains environment-blocked in the current execution environment;
- full browser acceptance remains governed later and is not waived;
- exception-first Mapping Review is not yet implemented.

## Exact next action

**Phase 7 / IMP-7B-D — Exception-first Mapping Review implementation**

Scope:

- UX-03 Mapping Review;
- consume the governed E02 mapping preview;
- exception-first summary: mapped automatically / needs confirmation / conflicts / unmapped required;
- Needs attention / Confirmed / All fields / Advanced views;
- sheet and field mapping controls routed only through the existing governed commands;
- candidate/confidence detail under Advanced;
- blocking conflict/unmapped-required handling;
- `Confirm mapping & prepare data` action;
- mapping snapshot and downstream invalidation regression;
- Mapping Review tests.

Data Preparation remains later after mapping closure. Validation & Correction and Results remain out of scope until their governed batches.


# Procedure REV-7BC-001 — IMP-7B-C Code & Evidence Review

**Date:** 6 September 2026  
**Phase:** Phase 7 — Controlled Implementation Review  
**Status:** COMPLETE — KEEP FUNCTIONAL BASELINE / PRE-7B-D HARDENING REQUIRED

## Purpose

Independently review the actual `IMP-7B-C` v0.1.4 source package and evidence before beginning exception-first Mapping Review.

The review checks implementation correctness, protected-methodology boundaries, state/privacy behavior, test validity, package integrity and whether the frozen sub-baseline is safe to become the direct base for IMP-7B-D.

## Inputs / evidence

- `HUF_KPI_Rebuild_Phase7BC_Preflight_v0.1.4.zip`
  - SHA-256: `98344b959805f0b57305641dce49e213e5c62f50302613c462a4cc60eef4bcd9`
- `HUF_KPI_Rebuild_Phase7BB_Upload_v0.1.3.zip`
  - SHA-256: `f6dc1e38bfd6aedaef6e438e119de75e4810443163dfc6cd9462c78fe3312869`
- `HUF_KPI_Phase7BC_Preflight_Implementation_Report_v1.0.md`
- frozen PRD v1.0
- frozen Technical Architecture v1.0
- frozen UI/UX Specification v1.0
- protected E01–E09 baseline and protected-core manifest

## Actions performed

1. verified the exact v0.1.4 ZIP checksum;
2. extracted both v0.1.3 and v0.1.4 into clean review directories;
3. inspected the complete file delta;
4. reviewed the preflight service, view model, UI, source-state, orchestrator, bootstrap/navigation and test additions;
5. reran `npm test` from the extracted v0.1.4 package;
6. reran release-manifest verification;
7. reconfirmed protected-core parity;
8. compared every final ZIP file entry against release-manifest coverage;
9. compared the generated `_site/` copies against their corresponding governed source files;
10. reviewed whether the supported template version is sourced from a governed authority;
11. reviewed what the existing tests actually prove versus what remains browser/environment blocked.

## Positive review result

### Workbook Preflight feature logic

**PASS**

The implementation:
- consumes protected E01 summary output;
- does not reparse XLSX in the product preflight service;
- does not execute/recreate E02 mapping;
- does not recreate Design-4 validation;
- suppresses raw preview rows from product preflight state;
- deep-freezes preflight product state;
- preserves source fingerprint/session lineage;
- implements the frozen UX-02 summary/inventory/check grouping;
- blocks missing/unsupported template versions and missing required sheets;
- keeps warnings distinct from blocking errors.

### Protected methodology

**UNCHANGED**

Protected-core parity:

**27/27 PASS**

Mismatch:

**0**

### Fresh test rerun

- non-manifest suites: **21/21 PASS**;
- release manifest: **151/151 PASS**;
- static architecture: PASS;
- relative imports: PASS;
- JavaScript syntax: PASS.

## Review findings

### REV-7BC-01 — HIGH — Frozen ZIP contains unmanifested generated `_site/` payload

Final ZIP file entries:

**257**

Release-manifest payload files:

**151**

Release manifest itself:

**1**

ZIP files not covered by the release manifest:

**105**

All 105 unmanifested files are under:

`_site/`

Fresh duplicate comparison:

- corresponding `_site` files checked: **105**;
- current hash mismatches versus governed root copies: **0**.

Therefore this is **not a current runtime/application defect**, but it is a frozen-package integrity gap because the ZIP contains files not represented by its release-manifest coverage.

Required before IMP-7B-D:
- remove generated `_site/` from the frozen source ZIP, or explicitly govern every deployment/package file;
- preferred approach is to generate `_site/` fresh in CI and exclude it from the source ZIP;
- add a final-ZIP package-integrity check so future packaging cannot silently include unmanifested files.

### REV-7BC-02 — MEDIUM — Supported template version duplicated in product preflight code

Current product preflight code owns a literal:

`HUF-SS-INPUT-v1.1`

The value currently matches all governed current artifacts, so there is no current semantic failure.

However, `canContinueToMapping` depends on this literal. A future controlled template/schema version update could drift if product code and governed config are not updated together.

Required before IMP-7B-D:
- source the supported template version through the governed config/adapter boundary;
- inject it into preflight construction;
- preserve the current exact-match behavior;
- add a regression proving the active governed version controls the gate;
- do not modify protected E01–E09 source merely to solve this product integration issue.

Controlled-methodology classification:

**AMBER integration hardening around RED controlled schema metadata; no methodology semantic change required.**

### REV-7BC-03 — MEDIUM — Fresh real XLSX → protected E01 → rendered preflight browser evidence remains open

Current fresh tests prove service/view/state behavior, but:
- preflight service tests use constructed E01-like summaries;
- source-selection handoff uses a fake adapter;
- the fresh Chromium smoke remains environment-blocked with no DOM returned.

Classification:

**OPEN EVIDENCE GAP — NOT APPLICATION FAIL**

This may remain open into 7B-D/7B-E, but must be closed before full IMP-7B browser acceptance is claimed.

## Review decision

**KEEP THE 7B-C FUNCTIONAL IMPLEMENTATION.**

Do not roll back the preflight feature.

However:

**DO NOT BEGIN IMP-7B-D UNTIL REV-7BC-01 AND REV-7BC-02 ARE CLOSED.**

REV-7BC-03 remains a mandatory later browser/integration evidence item and must not be represented as already passed.

## Controlled-methodology impact

Review itself:

**NONE**

Protected files modified during review:

**0**

## Review artifacts

`HUF_KPI_Phase7BC_Code_Evidence_Review_v1.0.md`

SHA-256:

`d35bcba630196e55c778f67d79e9ee46fb1b01a2c4d958e28e81f452a30f07db`

`HUF_KPI_Phase7BC_Code_Evidence_Review_Findings_v1.0.json`

SHA-256:

`8af9b647680e189c2a7ac22c58a68f8fbd02df6864a62e81c01115683cdbd492`

## Exact next action

**Phase 7 / IMP-7B-C1 — Pre-7B-D Preflight Hardening Patch**

Scope:
1. clean final source packaging so `_site/` is not an unmanifested ZIP payload;
2. add final package/ZIP coverage verification;
3. route active supported-template version through the governed config integration boundary;
4. add regression for governed template-version ownership;
5. rerun all 7B-C tests, protected-core parity and release/package integrity;
6. freeze corrected sub-baseline;
7. then proceed to IMP-7B-D Mapping Review.

---

## v0.40 — REV-7BC-001 code-inspection refinement (2026-09-08)

Code-level inspection of the two pre-7B-D findings is complete against `HUF_KPI_Rebuild_Phase7BC_Preflight_v0.1.4.zip`.

### Refined findings

- **REV-7BC-01: MEDIUM (downgraded from HIGH)** — `_site/` is generated by the Pages payload test/build path, intentionally git-ignored, and intentionally excluded by release-manifest generation/verification. The actual defect is final ZIP assembly from a post-test working tree without cleaning/excluding generated `_site/`. All 105 `_site/` files currently match corresponding root files byte-for-byte. No current application-behaviour defect.
- **REV-7BC-02: MEDIUM (confirmed)** — `buildWorkbookPreflight` supports an injected `supportedTemplateVersion`, but the orchestrator omits it, so the product-layer fallback literal currently governs preflight compatibility. Current values match across product config, template manifest, protected input schema and sheet contract; risk is future controlled-version drift.
- Incidental LOW release metadata staleness: README still says preflight is not implemented; CI artifact labels/paths retain older phase names.

### Current decision

Keep the 7B-C functional baseline. Do not roll back. Do not modify protected E01–E09. Execute `IMP-7B-C1 — Pre-7B-D Preflight Hardening Patch` before 7B-D.

### Exact next action

1. make frozen source packaging exclude generated `_site/` and add package-coverage regression;
2. inject governed active input-schema/template version into preflight through the existing product/config boundary;
3. add cross-contract version-consistency regression;
4. correct README/CI evidence labels while touching release metadata;
5. rerun all 7B-C gates and protected-core parity;
6. freeze corrected package, then proceed to `IMP-7B-D — Exception-first Mapping Review`.

Inspection addendum: `HUF_KPI_Phase7BC_Code_Inspection_Addendum_v1.0.md`.


---

# Procedure IMP-7B-C1 — Pre-7B-D Preflight Hardening Patch

**Date:** 8 September 2026  
**Phase:** Phase 7 — Controlled Implementation  
**Status:** COMPLETE / PASS / FROZEN CORRECTED SUB-BASELINE  
**Purpose:** Close REV-7BC-01 and REV-7BC-02 before Mapping Review without changing protected E01–E09 methodology.

## Inputs / evidence

- `HUF_KPI_Rebuild_Phase7BC_Preflight_v0.1.4.zip`
  - SHA-256: `98344b959805f0b57305641dce49e213e5c62f50302613c462a4cc60eef4bcd9`
- `HUF_KPI_Phase7BC_Code_Evidence_Review_v1.0.md`
- `HUF_KPI_Phase7BC_Code_Inspection_Addendum_v1.0.md`
- frozen PRD / Architecture / UI-UX baselines
- protected E01–E09 baseline

## Actions performed

1. Added governed product-config loading and runtime template-version agreement resolution.
2. Removed the product preflight fallback authority for `HUF-SS-INPUT-v1.1`; preflight now requires an injected governed version.
3. Required the pipeline orchestrator to receive and inject the governed supported template version.
4. Added cross-contract template-version governance regression covering product config, template manifest, protected input schema and protected sheet contract.
5. Added manifest-driven source ZIP packaging.
6. Added source-package regression proving `_site/`, `node_modules/` and `.git/` cannot enter the frozen source ZIP.
7. Updated Pages-payload testing so generated `_site/` is removed after verification.
8. Corrected stale README and GitHub Actions evidence labels/paths.
9. Repeated browser smoke in the current container.
10. Recomputed protected-core parity against the original 7B-C baseline.
11. Built the corrected C1 ZIP from the release manifest, extracted it fresh, and reran `npm test` from the packaged artifact.

## Findings / output

### REV-7BC-01

**CLOSED.**

The final source package is now manifest-driven. Generated `_site/` deployment copies are excluded from the frozen source ZIP.

Final C1 ZIP:
- entries: **159**;
- `_site/` entries: **0**.

### REV-7BC-02

**CLOSED.**

`buildWorkbookPreflight()` no longer owns a supported-version fallback literal. The supported version must be resolved from governed runtime configuration and injected through the controller/orchestrator boundary.

Current governed version remains:

`HUF-SS-INPUT-v1.1`

No schema meaning or compatibility rule changed.

### REV-7BC-03

**OPEN EVIDENCE GAP — NOT APPLICATION FAIL.**

Fresh Chromium headless execution again timed out with container DBus/zygote errors and returned no DOM. This remains a later browser/integration acceptance item.

## Controlled-methodology impact

**NONE.**

Protected E01–E09 files modified:

**0**

Protected-core parity against 7B-C:

**27/27 MATCH — 0 mismatch**

## Changed-file inventory versus 7B-C

- added: **7**;
- removed: **0**;
- changed: **21**;
- unchanged: **131**.

## Tests / verification

- non-manifest suites: **23/23 PASS**;
- protected-core manifest: **37/37 PASS**;
- protected imports: **10/10 PASS**;
- state/invalidation: PASS;
- mapping-state governance: **20/20 PASS**;
- orchestrator: **10/10 PASS**;
- controlled-config hardening: PASS;
- worker runtime/lifecycle: PASS;
- source selection/intake: **19/19 PASS**;
- template contract: **9/9 PASS**;
- upload UI: **14/14 PASS**;
- preflight service: **18/18 PASS**;
- preflight UI: **20/20 PASS**;
- template-version governance: **6/6 PASS**;
- source-package governance: **8/8 PASS**;
- static architecture: PASS / 0 violations;
- relative imports: PASS / 0 unresolved;
- JavaScript syntax: PASS / 0 failures;
- release manifest: **158/158 PASS**;
- protected parity: **27/27 PASS**;
- packaged fresh-extract `npm test`: **PASS**.

## Frozen corrected artifact

`HUF_KPI_Rebuild_Phase7BC1_Preflight_Hardened_v0.1.4-c1.zip`

SHA-256:

`71905f2cebed7f74aed895268bcb564ef811288941a39e7b28e935ebaeaf0fef`

Companion report:

`HUF_KPI_Phase7BC1_Preflight_Hardening_Report_v1.0.md`

SHA-256:

`6c62263cf6e6be593fef96577ae58e2bf2bcd71f45e5b33f677846d5c933784d`

Changed-file inventory:

`HUF_KPI_Phase7BC1_Changed_File_Inventory_v1.0.json`

SHA-256:

`c3c3166cc10b9c9e57b35ab705d42c05468a8a2ac549e65c65a73346b5850c9a`

Protected parity evidence:

`phase7bc1-protected-parity.json`

SHA-256:

`3ea82f553b452e730e3896bde4d75df3f7c6cbf49e24c0980eed1dce11fd1a41`

Browser smoke evidence:

`phase7bc1-browser-smoke.json`

SHA-256:

`a6e704aae3bffde115d01b02cae42013403d3844ac5d48839544148939fb9043`

## Decision

**IMP-7B-C1 PASS / CLOSED / FROZEN.**

C1 becomes the only direct implementation base for IMP-7B-D. Do not resume 7B-D from the older 7B-C v0.1.4 ZIP.

## Exact next action

**Phase 7 / IMP-7B-D — Exception-first Mapping Review implementation**

Start from the exact C1 package above.

Required boundaries:
- consume the governed protected E02 mapping result;
- do not recreate E02 matching logic in product code;
- route all sheet/field updates and confirmations only through existing controller/orchestrator/adapter commands;
- preserve mapping-state immutability;
- conflicts and required-unmapped items must remain blocking;
- primary action remains `Confirm mapping & prepare data`;
- Data Preparation remains after mapping closure;
- protected E01–E09 remains unchanged.

---

# Procedure IMP-7B-D — Exception-first Mapping Review Implementation

**Date:** 8 September 2026  
**Phase:** Phase 7 — Controlled Implementation  
**Status:** **COMPLETE / PASS / FROZEN WITH BROWSER-ENVIRONMENT QUALIFICATION**  
**Purpose:** Implement UX-03 Mapping Review on the exact frozen C1 baseline while preserving protected E02 methodology and the existing governed mapping-command path.

## Inputs / evidence

- `HUF_KPI_Rebuild_Phase7BC1_Preflight_Hardened_v0.1.4-c1.zip`
  - SHA-256: `71905f2cebed7f74aed895268bcb564ef811288941a39e7b28e935ebaeaf0fef`
- frozen Product Requirements Specification v1.0;
- frozen Technical Architecture v1.0;
- frozen UI/UX Specification v1.0 / UX-03 Mapping Review;
- protected E02 mapping implementation and existing governed commands;
- protected E01–E09 baseline.

## Actions performed

1. Branched implementation from the exact C1 frozen ZIP rather than a mutable working directory.
2. Inspected protected E02 result shape before implementing product UI.
3. Added read-only mapping metadata exposure through the governed protected adapter/controller boundary.
4. Implemented exception-first Mapping Review using protected E02 `method`, `confidence`, `needsConfirmation`, `conflict`, `suggestions`, source catalog and requirement metadata.
5. Implemented summary cards:
   - Mapped automatically;
   - Needs confirmation;
   - Conflicts;
   - Unmapped required.
6. Implemented views:
   - Needs attention;
   - Confirmed;
   - All fields;
   - Advanced.
7. Implemented governed sheet-mapping selection and confirmation controls.
8. Implemented field-detail drawer with expected sheet, data type, unit/format, requirement class, E02 method/confidence and E02 candidate suggestions.
9. Implemented controlled manual field-source selection routed only through E02 commands.
10. Kept raw workbook sample rows out of Mapping Review product state.
11. Added Core-unmapped blocking before final product confirmation.
12. Preserved protected E02 conflict and pending-confirmation blocking.
13. Added E03–E09 invalidation whenever mapping state is mutated after downstream work exists.
14. Preserved immutable cloned product mapping state.
15. Implemented the primary action `Confirm mapping & prepare data` while preserving the Data Preparation boundary; E03 is not executed in IMP-7B-D.
16. Fixed the final-confirmation transition so the generic mapping mutation rerender cannot overwrite the confirmed mapping boundary screen.
17. Added Mapping Review view-model, governance, UI-contract and transition regressions.
18. Repeated browser smoke in the current container.
19. Regenerated final release manifest and synchronized generated test evidence against the final package size.
20. Built the manifest-driven frozen ZIP, extracted it fresh, reran `npm test`, and verified source-to-package and protected-core parity.

## Findings / output

### Mapping methodology boundary

No E02 matching algorithm was recreated in product code.

Governed integration path remains:

**UX → App Controller → Pipeline Orchestrator → Pipeline Client / Worker RPC → Protected Pipeline Adapter → Protected E02**

No whole mutable mapping object is accepted from the UI for finalization.

### Blocking behavior

- Core unmapped fields: **BLOCKING**;
- mapping conflicts: **BLOCKING via protected E02 finalizer and reflected in UI**;
- pending controlled sheet/field confirmations: **BLOCKING via protected E02 finalizer and reflected in UI**;
- optional unmapped fields: **allowed to remain null/unmapped**;
- zero-fill or route-requiredness reinterpretation in E02/product Mapping Review: **NOT PERFORMED**.

### Transition defect found and closed during implementation

Initial Mapping Review code reused the ordinary mutation helper for final confirmation. That helper rerendered Mapping Review after `confirmMapping()`, which could overwrite the intended confirmed-boundary screen.

Resolution:
- final confirmation was separated into `confirmMappingReview(...)`;
- the confirmed callback now executes after the governed controller finalizer and is not followed by the generic mutation rerender;
- dedicated transition regression added.

Status: **CLOSED / PASS**.

### Packaging determinism finding found and closed during freeze

The first fresh extracted-package run detected a release-manifest mismatch only for `tests/evidence/phase7bd-test-result.json`. Root cause: test evidence had been generated before the final manifest/ZIP entry count stabilized.

Resolution:
- reran the complete core suite against the final manifest size;
- regenerated release manifest;
- rebuilt ZIP;
- extracted fresh and reran complete `npm test`.

Final result: **PASS**.

This was release-evidence synchronization, not an application or methodology defect.

## Controlled-methodology impact

**NONE.**

Protected E01–E09 files modified:

**0**

Protected parity against C1:

**27/27 MATCH — 0 mismatch**

Packaged protected parity after fresh extraction/test:

**27/27 MATCH — 0 mismatch**

## Changed-file inventory versus C1

- added: **9**;
- removed: **0**;
- changed: **21**;
- unchanged: **138**.

Exact inventory artifact:

`HUF_KPI_Phase7BD_Changed_File_Inventory_v1.0.json`

SHA-256:

`f8314ccf322a181daffca89f37dc5efffd2b33b87ba7f7cfe14dd1e208c1ef87`

## Tests / verification

- non-manifest suites: **27/27 PASS**;
- protected-core manifest: **37/37 PASS**;
- protected imports: **10/10 PASS**;
- mapping-state governance: **21/21 PASS**;
- Mapping Review view model: **14/14 PASS**;
- Mapping Review governance: **7/7 PASS**;
- Mapping Review UI contract: **23/23 PASS**;
- Mapping Review transition: **6/6 PASS**;
- template-version governance: **6/6 PASS**;
- source-package governance: **8/8 PASS**;
- static architecture: **PASS / 0 violations**;
- relative imports: **PASS / 0 unresolved**;
- JavaScript syntax: **PASS / 0 failures**;
- release manifest: **167/167 PASS**;
- final ZIP entries: **168**;
- forbidden generated ZIP paths: **0**;
- source-to-packaged post-test parity: **168/168 MATCH**;
- protected-core parity: **27/27 MATCH**;
- packaged fresh-extract `npm test`: **PASS**.

## Browser / integration qualification

Fresh Chromium headless attempt:
- local HTTP server started;
- Chromium timeout: **25 seconds**;
- DOM bytes returned: **0**;
- container reported DBus and Chromium single-process environment errors.

Classification:

**ENVIRONMENT_BLOCKED — NOT APPLICATION FAILURE**

The prior REV-7BC-03 real XLSX browser evidence gap remains open and is explicitly carried into IMP-7B-E.

No claim of full browser acceptance is made at 7B-D closure.

## Frozen artifact

`HUF_KPI_Rebuild_Phase7BD_Mapping_Review_v0.1.5.zip`

SHA-256:

`eafa695a6847bfc72a77d9763286c501ace3df665f96d36f39548b9ea01894a7`

ZIP entries:

**168**

Companion implementation report:

`HUF_KPI_Phase7BD_Mapping_Review_Implementation_Report_v1.0.md`

SHA-256:

`040fc6008840e01a362512d7efb52d4cb226db71ec1abe1635d9db38951f51f4`

Final validation evidence:

`HUF_KPI_Phase7BD_Final_Validation_v1.0.json`

SHA-256:

`7fd9ab3e1176d11556c06b8bbf93ff524eb52c7fdcfe8a2eab520ebd5a5d9b3d`

Release manifest evidence:

`HUF_KPI_Phase7BD_RELEASE_MANIFEST_v1.0.json`

SHA-256:

`9b4da1b3599b48e7df5a991189084e4ecf21750087978d482502c8462801c032`

Protected parity evidence:

`HUF_KPI_Phase7BD_Protected_Parity_v1.0.json`

SHA-256:

`4949795c78fa755e3cfc038e6b280d8ef724fce81f1b5ef978e455db94a886d7`

Packaged parity evidence:

`HUF_KPI_Phase7BD_Packaged_Parity_v1.0.json`

SHA-256:

`32147a2b6c7ab85a4786f816e796a93eb8ec709fdc3b4da98ec08717af98bb59`

Browser smoke evidence:

`HUF_KPI_Phase7BD_Browser_Smoke_v1.0.json`

SHA-256:

`df491c3dd3b57f9cc06cd7e4039400a510b6842fe61c8f154727d15a119be564`

## Decision

**IMP-7B-D COMPLETE / PASS / CLOSED / FROZEN.**

The exact 7B-D frozen ZIP above becomes the only direct implementation baseline for IMP-7B-E.

## Exact next action

**Phase 7 / IMP-7B-E — IMP-7B browser / CI / release acceptance**

Required scope:

1. run a compatible-browser real XLSX flow from Upload → protected E01 → Workbook Preflight → protected E02 Mapping Review;
2. verify exception-first Mapping Review interactions, manual mapping, confirmation and final snapshot behavior in-browser;
3. verify GitHub Pages / CI curated deployment against the frozen 7B-D source artifact;
4. retain browser/deployment evidence and close REV-7BC-03;
5. close the full IMP-7B batch only after browser/release acceptance;
6. only then proceed to Data Preparation;
7. Validation & Correction and Results remain out of scope until their later governed batches.



# Procedure IMP-7B-E — Browser / CI / Release Acceptance Readiness

**Date:** 8 September 2026  
**Phase:** Phase 7 / IMP-7B-E  
**Status:** **IN PROGRESS — ACCEPTANCE READY / EXTERNAL COMPATIBLE-BROWSER EXECUTION REQUIRED**  
**Purpose:** Close the remaining real-browser, CI and GitHub Pages evidence gap for the complete IMP-7B intake/preflight/mapping batch without modifying protected E01–E09.

## Inputs / evidence

- frozen `HUF_KPI_Rebuild_Phase7BD_Mapping_Review_v0.1.5.zip`
- SHA-256 `eafa695a6847bfc72a77d9763286c501ace3df665f96d36f39548b9ea01894a7`
- Master Plan v0.42
- open REV-7BC-03 browser evidence requirement
- frozen IMP-7B-D exception-first Mapping Review

## Actions performed

1. Branched from the exact frozen 7B-D package.
2. Reconfirmed that local container Chromium is environment-blocked even on `about:blank`; no DOM/browser PASS can be produced locally.
3. Added a pinned Playwright/Chromium compatible-browser acceptance runner.
4. The runner uses the real controlled non-leap XLSX and verifies Upload → protected E01 → Workbook Preflight → protected E02 Mapping Review → manual mapping → mapping confirmation snapshot.
5. Added source fingerprint, template/preflight, exception-first summary/filter, manual mapping, finalization, snapshot hash and Data Preparation boundary assertions.
6. Added a GitHub Actions browser acceptance job after foundation validation.
7. Updated the Pages workflow so deployment is gated by browser acceptance against the exact curated `_site` artifact.
8. Added machine-readable browser evidence retention.
9. Added browser-CI workflow contract regression and strengthened Pages workflow regression.
10. Updated acceptance-phase metadata to `0.1.6-acceptance / IMP-7B-E`.
11. Rebuilt and verified the release manifest and governed source ZIP.
12. Compared protected core against 7B-D and fresh-tested the packaged ZIP.

## Tests / verification

- non-manifest suites: **28/28 PASS**
- browser/CI contract checks: **13/13 PASS**
- Pages workflow checks: **8/8 PASS**
- release manifest: **171/171 PASS**
- protected core parity: **27/27 MATCH**
- source package entries: **172**
- source ↔ packaged parity: **172/172 MATCH**
- fresh extracted package `npm test`: **PASS**
- curated Pages payload build: **PASS**
- forbidden generated/package entries: **0**

## Controlled-methodology impact

**NONE.** Protected E01–E09 are unchanged. This procedure changes browser/CI/release orchestration and acceptance evidence only.

## Browser / deployment status

Local browser status remains **ENVIRONMENT_BLOCKED — NOT APPLICATION FAILURE**.

The candidate is now acceptance-ready in a compatible GitHub Actions environment, but no successful remote browser artifact or deployed Pages evidence has yet been retrieved in this conversation. Therefore REV-7BC-03 remains open and full IMP-7B closure is not claimed.

## Candidate artifact

`HUF_KPI_Rebuild_Phase7BE_Acceptance_Ready_v0.1.6.zip`

SHA-256:

`8ad3cfb2c8a6c630ada090af57886c50c28c4565fbfb30bb2a833f7ed0f6d6d8`

## Decision

**ACCEPTANCE-READY CANDIDATE CREATED; IMP-7B-E NOT YET CLOSED.**

The last fully closed implementation baseline remains IMP-7B-D v0.1.5 until the external browser and Pages gates pass. The v0.1.6 candidate is the exact artifact to publish/run for acceptance.

## Exact next action

1. Use a connected GitHub repository for this candidate.
2. Run `.github/workflows/validate.yml`.
3. Require PASS `phase7be-browser-acceptance.json` evidence from the real-XLSX browser job.
4. Run `.github/workflows/pages.yml`.
5. Require browser acceptance PASS before deploy and successful GitHub Pages deployment.
6. Retrieve and retain the browser/deployment evidence.
7. If both gates pass, close REV-7BC-03 and full IMP-7B, freeze the accepted release baseline, then begin Data Preparation.
8. If a gate fails, fix only the demonstrated product/CI defect, rerun all gates, and do not waive acceptance.

**Data Preparation, Validation & Correction and Results remain blocked until full IMP-7B closure.**

# Procedure IMP-7B-E2 — GitHub acceptance bridge and final local reproducibility check

**Date:** 8 September 2026  
**Phase:** Phase 7 / IMP-7B-E  
**Status:** COMPLETE LOCALLY / REPOSITORY-SIDE ACCEPTANCE STILL OPEN  
**Purpose:** Continue IMP-7B-E after the GitHub plugin connection, exhaust all locally executable acceptance work, and establish the exact repository-side closure gate without guessing a repository target.

## Inputs / evidence

- `HUF_KPI_Rebuild_Phase7BE_Acceptance_Ready_v0.1.6.zip`
- SHA-256 `8ad3cfb2c8a6c630ada090af57886c50c28c4565fbfb30bb2a833f7ed0f6d6d8`
- `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.43.md`
- connected GitHub plugin state in the current session
- historical `New_Chat_Guide_HUF_KPI_Website_GitHub_Workflow.md`, which recommends (but does not authoritatively establish) repository name `water-agriculture-kpi-calculator` and Pages URL pattern under `knightfox789.github.io`

## Actions performed

1. Reconfirmed the 7B-E candidate from a fresh packaged extraction.
2. Reran the full local suite from the packaged candidate.
3. Reconfirmed release-manifest coverage at **171/171 PASS**.
4. Reconfirmed source/package parity at **172/172 MATCH**.
5. Reconfirmed protected-core parity at **27/27 MATCH** against 7B-D.
6. Reconfirmed browser/Pages workflow contract checks, including pinned Playwright 1.55.0, Chromium installation, real XLSX acceptance runner, evidence upload, and deploy-after-browser sequencing.
7. Reattempted local Chromium feasibility and confirmed the environment remains blocked even for minimal headless startup; no browser PASS was fabricated.
8. Verified there is no Git remote or authoritative repository URL embedded in the frozen candidate.
9. Searched historical continuity material for repository identity. The only located repository name is explicitly a historical recommendation, not a verified current target.
10. GitHub plugin is connected, but this execution environment did not expose callable repository mutation/Actions functions or a local authenticated `gh` command. No repository write was attempted against an unverified target.

## Findings / output

- Candidate code, package governance, protected-core parity, Pages payload build, and CI/browser workflow definitions are locally clean.
- The remaining gate is external execution evidence only: successful GitHub Actions browser acceptance using the real XLSX fixture followed by successful GitHub Pages deployment.
- This is **not** an application failure and does not reopen 7B-D.
- Full IMP-7B remains open solely because the governed browser/deployment evidence has not yet been produced and retained.

## Controlled-methodology impact

**None.** Protected E01-E09 remain unchanged.

## Tests / verification

- full packaged `npm test`: **PASS**
- release manifest: **171/171 PASS**
- source/package parity: **172/172 MATCH**
- protected core parity: **27/27 MATCH**
- browser-CI contract: **13/13 PASS**
- Pages workflow: **8/8 PASS**
- compatible real-browser execution: **OPEN — external GitHub Actions run required**
- Pages deployment evidence: **OPEN**

## Decision

Do not infer or create a repository target from the historical recommendation alone. Do not start Data Preparation until the real browser acceptance and Pages deployment evidence are successfully retained.

## Open issues

- `REV-7BC-03` remains open pending compatible-browser PASS evidence.
- authoritative GitHub repository target still needs to be resolved from the connected GitHub account/repository surface before any write.
- GitHub Actions run and Pages deployment remain pending.

## Exact next action

Use the connected GitHub repository action surface when available to identify the authoritative HUF KPI repository, publish the frozen `0.1.6-acceptance` candidate without methodology changes, run `.github/workflows/pages.yml`, retain `phase7be-browser-acceptance.json` and deployment evidence, then close `REV-7BC-03` and full IMP-7B only if both browser and Pages gates PASS. **Data Preparation remains blocked until that closure.**





# Procedure IMP-7B-E3 — Authoritative GitHub Repository Resolution and Acceptance Publication Attempt

**Date:** 8 September 2026  
**Phase:** Phase 7 / IMP-7B-E  
**Status:** PARTIAL — AUTHORITATIVE REPOSITORY RESOLVED / EXACT CANDIDATE PUBLICATION TRANSPORT-BLOCKED  
**Purpose:** Resolve the authoritative GitHub target from the connected account, protect the pre-acceptance repository state, verify the frozen acceptance artifact, and attempt governed publication of the exact IMP-7B-E candidate without modifying protected E01–E09.

## Inputs / evidence

- authoritative repository explicitly supplied by user: `knightfox789/HUF-water-potential-calculator`
- frozen acceptance candidate: `HUF_KPI_Rebuild_Phase7BE_Acceptance_Ready_v0.1.6.zip`
- frozen candidate SHA-256: `8ad3cfb2c8a6c630ada090af57886c50c28c4565fbfb30bb2a833f7ed0f6d6d8`
- current repository `main` commit before any acceptance publication: `f57b345cebf2018254940f0ce10fe451cbdbe47e`
- connected GitHub account permissions: admin / maintain / push available on the authoritative repository
- Master Rebuild Plan v0.44 governance and IMP-7B-E acceptance contract

## Actions performed

1. Resolved the authoritative repository from the user-supplied URL and verified it through the connected GitHub account.
2. Verified that the connected account has write/admin access to the repository.
3. Recorded the exact pre-acceptance `main` commit: `f57b345cebf2018254940f0ce10fe451cbdbe47e`.
4. Created rollback branch `pre-imp7be-acceptance-20260908` at that exact commit before attempting any candidate publication.
5. Retrieved the exact frozen `v0.1.6` candidate from ChatGPT Library and reverified SHA-256 as `8ad3cfb2c8a6c630ada090af57886c50c28c4565fbfb30bb2a833f7ed0f6d6d8`.
6. Inspected the candidate CI contract and confirmed:
   - `.github/workflows/validate.yml` is push / pull-request triggered;
   - compatible-browser acceptance uses the real controlled XLSX flow;
   - `phase7be-browser-acceptance.json` is retained as machine-readable evidence;
   - `.github/workflows/pages.yml` is manual `workflow_dispatch` and deploys only after validation/browser acceptance.
7. Inspected repository branches and identified a pre-existing `imp-7b-e-acceptance-v0.1.6` branch at commit `69b4551155958253560a5783657ab956cd3d77f9`.
8. Compared that branch against `main` and confirmed it is only an incomplete historical/staging transport attempt: three added base64 part files under `acceptance/phase7be/parts/`; it is **not** the frozen candidate source tree and is **not** acceptance evidence.
9. Verified that the authoritative repository already contains the exact Git blobs for the controlled leap/non-leap golden workbooks used by the candidate.
10. Verified that the candidate controlled blank template `templates/HUF-SS-INPUT-v1.1.xlsx` is a genuinely new binary object for this repository and is protected by an exact SHA-256 contract.
11. Checked the connected GitHub action surface for a native binary/file upload operation. No compatible binary-file upload action is exposed.
12. Confirmed that the available Git blob write action accepts binary only as one complete base64 string. The current tool transport truncates the large generated payload required for the controlled template, so an exact byte-preserving blob cannot be safely supplied through this session without risking corruption.
13. Stopped before modifying `main`, before force-replacing the acceptance branch with an incomplete tree, and before claiming any browser or Pages PASS.

## Findings / output

- authoritative repository: **RESOLVED** — `knightfox789/HUF-water-potential-calculator`
- pre-acceptance rollback point: **PRESERVED** — branch `pre-imp7be-acceptance-20260908` at `f57b345cebf2018254940f0ce10fe451cbdbe47e`
- frozen candidate identity: **VERIFIED** — SHA-256 `8ad3cfb2c8a6c630ada090af57886c50c28c4565fbfb30bb2a833f7ed0f6d6d8`
- protected methodology E01–E09: **UNCHANGED**
- `main` candidate publication: **NOT PERFORMED**
- exact acceptance branch publication: **NOT COMPLETED**
- compatible-browser PASS evidence: **OPEN**
- GitHub Pages deployment evidence: **OPEN**
- `REV-7BC-03`: **OPEN**
- full IMP-7B closure: **NOT CLAIMED**

The blocker is a connector/file-transport limitation for one contract-hashed binary XLSX, not a product failure and not a methodology defect.

## Controlled-methodology impact

**NONE.**  
Protected E01–E09 remain unchanged. No formula, schema, route, validation, assurance, aggregation or audit-policy change was made.

## Files/components affected

GitHub repository mutation performed:
- created branch `pre-imp7be-acceptance-20260908` only.

Deliberately not changed:
- repository `main`;
- protected E01–E09;
- frozen controlled configs;
- candidate binary template;
- frozen golden fixtures;
- candidate expected browser assertions;
- Pages deployment state.

## Tests / verification

Previously frozen/local candidate evidence remains valid and unchanged:
- release manifest: **171/171 PASS**
- source/package parity: **172/172 MATCH**
- protected core parity: **27/27 MATCH**
- browser-CI contract: **13/13 PASS**
- Pages workflow contract: **8/8 PASS**

No new external browser PASS or Pages PASS is recorded by this procedure.

## Decision

**DO NOT weaken the binary identity requirement, regenerate/substitute the controlled template, or claim acceptance from the incomplete historical base64 staging branch.**

The exact frozen `v0.1.6` candidate must be published through a GitHub-capable surface that supports byte-preserving binary file upload (or an equivalent verified Git object transfer). Only after exact publication may the governed browser/Pages acceptance gates be executed.

## Open issues

- `REV-7BC-03` remains open.
- exact `v0.1.6` source tree is not yet published in the authoritative repository.
- compatible-browser real-XLSX acceptance evidence is not yet retained.
- GitHub Pages deployment evidence is not yet retained.
- the currently exposed GitHub connector does not provide a workflow-dispatch action for the manual Pages workflow.

## Exact next action

1. Publish the exact frozen `HUF_KPI_Rebuild_Phase7BE_Acceptance_Ready_v0.1.6.zip` source tree to `knightfox789/HUF-water-potential-calculator` using a byte-preserving GitHub file/binary upload path.
2. Preserve the candidate SHA and protected-core identity; do not modify E01–E09.
3. Push the exact candidate so `.github/workflows/validate.yml` runs.
4. Require successful browser acceptance and retain `phase7be-browser-acceptance.json`.
5. Dispatch `.github/workflows/pages.yml` only after validation/browser PASS.
6. Retain deployment/live evidence.
7. Close `REV-7BC-03` and full IMP-7B only if both browser and Pages gates PASS.
8. **Data Preparation remains blocked until that closure.**

## Artifacts / SHA-256

- `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.45.md` — checksum recorded in companion `.sha256.txt` artifact.

# Procedure IMP-7B-E4 — Clean Acceptance Repository Real-Browser and Pages Closure

**Date:** 8 September 2026  
**Phase:** Phase 7 / IMP-7B-E  
**Status:** **COMPLETE / PASS — CLEAN REPOSITORY REAL-BROWSER AND PAGES ACCEPTANCE RETAINED; PRODUCTION PROMOTION PENDING**  
**Purpose:** Execute the exact frozen `0.1.6-acceptance` candidate in a clean compatible GitHub Actions repository after the authoritative-repository binary transport limitation recorded in IMP-7B-E3, retain real-XLSX browser and Pages evidence, close REV-7BC-03, and establish the exact production-promotion gate without modifying protected E01–E09.

## Versioning / continuity note

The user requested this acceptance freeze as Master Plan v0.45. Library continuity inspection found that v0.45 had already been frozen earlier for `IMP-7B-E3 — Authoritative GitHub Repository Resolution and Acceptance Publication Attempt`, with SHA-256 `94f69cc8a1f639cabadb3acdd668cf392eff47261d0abdd74caec383c60541bc`.

That existing v0.45 was preserved unchanged. This acceptance milestone is therefore frozen as **v0.46** to avoid two conflicting authoritative files with the same version number.

## Inputs / provenance

- parent living plan: `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.45.md`
- parent-plan SHA-256: `94f69cc8a1f639cabadb3acdd668cf392eff47261d0abdd74caec383c60541bc`
- frozen candidate: `HUF_KPI_Rebuild_Phase7BE_Acceptance_Ready_v0.1.6.zip`
- candidate SHA-256: `8ad3cfb2c8a6c630ada090af57886c50c28c4565fbfb30bb2a833f7ed0f6d6d8`
- clean acceptance repository: `https://github.com/knightfox789/HUF-KPI-acceptance-test`
- machine-readable closure summary: `HUF_KPI_Phase7BE_GitHub_Acceptance_Closure_Evidence_v1.0.json`
- closure-summary SHA-256: `cd7c0e54903b76787be7458bb28149815d508ec817dd366b5f135a32998409d1`

## Initial clean-repository packaging finding

The first validation run in the fresh test repository (`34225088622`, head `99b84c511b29d0e668b11ad847652aaa240e5e01`) failed only because GitHub repository creation had added a root `LICENSE` file that is not part of the frozen 171-file release payload.

Manifest result:

- expected payload files: **171**
- missing: **0**
- mismatched: **0**
- unlisted: **1 — `LICENSE`**

Classification:
**TEST-REPOSITORY PACKAGING MISMATCH — NOT APPLICATION FAILURE / NOT METHODOLOGY DEFECT**

Resolution:
The repository-added `LICENSE` was removed. No file belonging to the frozen candidate payload was changed. Protected E01–E09 were not modified. This restored exact release-manifest parity.

## Successful validation execution

Workflow:
`.github/workflows/validate.yml`

Run ID:
`34227558148`

Accepted head commit:
`e33cb029a09593a86056ce3bf53e24ead8b87a9d`

Conclusion:
**SUCCESS**

Successful jobs:

- `foundation` — PASS
- `browser_acceptance` — PASS

Validation evidence artifact:

- `huf-phase7be-validation-evidence`
- artifact ID `10056360352`
- SHA-256 `3ac89df16cdd3a3f6fb3bdfa49566a98dc51e1eec92a05b7a255ca6aa9bd1563`

Browser acceptance artifact:

- `huf-phase7be-browser-acceptance`
- artifact ID `10056391333`
- digest `sha256:7ed90415c48195de221efcc83d88a8d9f5d6e7a88aea37a7f52ad135dc48a498`
- retained file: `phase7be-browser-acceptance.json`

## Real-XLSX browser evidence

Machine-readable status:
**PASS**

Product version:
`0.1.6-acceptance`

Real controlled workbook:
`samples/nonleap/GOLDEN_E2E_NONLEAP_FY2024-25.xlsx`

Retained checks include:

- Upload screen rendered — PASS;
- real XLSX selected — PASS;
- source fingerprint visible (`7c6ba9498f8c…22fdddeb`) — PASS;
- Workbook Preflight ready — PASS;
- template version/formula visibility — PASS;
- mapping summary categories — PASS;
- exception-first filters — PASS;
- mapping rows present: **147**;
- governed manual-source current value available (`01_Control::0`) — PASS;
- manual mapping applied — PASS;
- final mapping action enabled — PASS;
- mapping-confirmed screen reached — PASS;
- snapshot SHA-256 visible (`defe963e024939f05ef60e816e0f0fcc59f9b00c823dea37f5ff80906ec66522`) — PASS;
- Data Preparation / E03 not executed — PASS;
- page errors: **0**;
- console errors: **0**.

## GitHub Pages execution

Workflow:
`.github/workflows/pages.yml`

Run ID:
`34227729905`

Head commit:
`e33cb029a09593a86056ce3bf53e24ead8b87a9d`

Conclusion:
**SUCCESS**

Successful jobs:

- `validate` — PASS
- `browser_acceptance` — PASS
- `deploy` — PASS

The Pages workflow independently reran real-XLSX browser acceptance against the curated `_site` artifact before deployment. Its retained browser evidence again reports PASS, Data Preparation not executed, page/console errors 0, and visible mapping snapshot SHA-256 `f422c40db8617b7571fb244f7fdd41895c2c46f158d15c9eaba25defa6a9fc63`.

Pages artifacts:

- `huf-phase7be-pages-validation-evidence` — artifact ID `10056428190`, SHA-256 `84e3d67d428711d74a242695b5c3f08a72585d9d4ded7ef09c1595da47dd490e`
- `huf-phase7be-curated-site` — artifact ID `10056428736`, digest `sha256:60db9d72cb0384ae55f4d60544c9a3cbd8aefc9aca8a8cfcdf76daab3997cd14`
- `huf-phase7be-pages-browser-acceptance` — artifact ID `10056465476`, digest `sha256:187d76752a2011e63d3be863820d914ba0ede15eac2263db1f063050b60253cd`
- `github-pages` — artifact ID `10056466767`, digest `sha256:80c329b71d7ba6539ee07b299cfdda45449de9e06b9f81be7dab601cee9aba04`

Deployment status:
**SUCCESS**

Deployed test URL:
`https://knightfox789.github.io/HUF-KPI-acceptance-test/`

## Deployed-screen check

The deployed Home / Upload page rendered successfully. The visible `IMP-7B-C · Intake & preflight` label was checked against source and the existing governed plan and is intentional: Workbook Preflight is an IMP-7B-C feature label, while IMP-7B-E is the browser/CI/release acceptance procedure covering the complete Intake → Preflight → Mapping flow. No UI change is required and no accepted candidate checksum was reopened.

## Controlled-methodology impact

**NONE.**

Protected E01–E09 remain unchanged. No formula, schema, route, validation, assurance, aggregation or audit-policy semantic was modified.

## Decision

`REV-7BC-03` is **CLOSED** because compatible real-browser evidence has now been produced and retained.

The exact `0.1.6-acceptance` candidate has passed:

- release-manifest parity in the clean repository;
- GitHub Actions foundation validation;
- compatible real-XLSX browser acceptance;
- browser-gated curated GitHub Pages acceptance;
- successful GitHub Pages deployment.

Therefore:

**IMP-7B TECHNICAL ACCEPTANCE: PASS**  
**IMP-7B PRODUCTION FREEZE / FULL CLOSURE: PENDING AUTHORITATIVE PRODUCTION REPOSITORY PROMOTION AND RE-RUN**

The production-freeze qualification is retained because IMP-7B-E3 explicitly required exact publication to the authoritative repository before final production closure. The separate test repository proves the candidate and workflow but does not silently replace that production-promotion requirement.

Data Preparation remains blocked until the production promotion/revalidation is complete.

## Exact next action

**Phase 7 / IMP-7B-E5 — Authoritative Production Repository Promotion and Final Freeze**

Required scope:

1. authoritative repository: `knightfox789/HUF-water-potential-calculator`;
2. record/preserve the current production `main` state before replacement;
3. promote the exact accepted `0.1.6-acceptance` payload only;
4. do not add an unmanifested `LICENSE` or any other extra payload file;
5. do not modify protected E01–E09 or any accepted candidate application/config content during promotion;
6. run `.github/workflows/validate.yml`;
7. require foundation PASS and real-XLSX browser acceptance PASS;
8. run/dispatch `.github/workflows/pages.yml`;
9. require validate PASS, browser acceptance PASS and deploy PASS;
10. retain production run IDs, head commit, validation/browser/Pages artifacts and deployed production URL;
11. verify the production deployed page loads successfully;
12. only after all production gates pass, freeze the accepted production baseline, close full IMP-7B, increment the master plan, and begin the next governed Data Preparation batch.

No methodology change is authorized by IMP-7B-E5.
# Phase 7 / IMP-7B-E6 — Adaptive Workspace Layout Hardening and Re-Acceptance

**Date:** 2026-09-08  
**Status:** COMPLETE / PASS / FROZEN IN ACCEPTANCE-TEST REPOSITORY  
**Classification:** GREEN UI/layout hardening; controlled methodology impact = NONE  
**Parent master plan:** `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.46.md`  
**Parent SHA-256:** `4351b3ad7a83bd0c0a1cb9534084c65f660bee395776212170b102bee6ae16d5`

## Trigger

After the first successful IMP-7B-E browser and Pages acceptance, the deployed Home / Upload screen was reviewed on a wide desktop viewport. The global `.main { max-width: 1240px; }` rule caused the whole application workspace to stop at 1240 px and left a visibly unbalanced blank region on the right side. This was a UI/layout issue only; it did not indicate a browser, workbook, methodology or protected-core failure.

The user requested correction before production promotion.

## Controlled objective

Correct wide-screen workspace behavior without changing protected E01–E09, workbook contracts, formula/routing/validation/assurance/aggregation/audit semantics, or existing responsive tablet/mobile behavior.

Required behavior:

- Home / Upload and Workbook Preflight remain controlled-width form pages and are centered;
- Mapping Review receives a wider controlled workspace;
- future dashboard/table/result pages are not globally constrained to 1240 px and may use the available desktop width;
- tablet/mobile breakpoints remain unchanged.

## Implementation boundary

Acceptance-test repository:
`knightfox789/HUF-KPI-acceptance-test`

Previously accepted baseline commit:
`e33cb029a09593a86056ce3bf53e24ead8b87a9d`

Temporary manifest-bootstrap commit:
`d450046bf29465d6232242e307749ca9b8cbbd2a`

Final self-consistent hardening commit:
`b44268e3e2879104df4182590e7ab92934422e60`

The temporary bootstrap commit existed only to obtain the regenerated release-manifest value after the CSS change. The final commit restored the normal non-self-modifying `npm test` path.

Net source differences from the previously accepted baseline are limited to:

1. `css/layout.css`
2. `RELEASE_MANIFEST.json` — only the governed size/SHA entry for `css/layout.css`

No protected-core file changed.

## Final adaptive layout rules

- `.main` no longer carries a global `max-width`; it uses `width:100%` and `min-width:0`.
- `.upload-page,.preflight-page` use `width:100%; max-width:1240px; margin-inline:auto`.
- `.mapping-page` uses `width:100%; max-width:1480px; margin-inline:auto`.
- existing `@media(max-width:900px)` and `@media(max-width:620px)` responsive behaviors remain in place.

Final `css/layout.css`:

- size: `2102` bytes
- SHA-256: `4fb9575c3687f15aab887f5150a2dd1853e2c4493675e9bc1b935d58ee26fca2`

## Acceptance evidence

GitHub Actions validation run:
`34231535024`

Head commit:
`b44268e3e2879104df4182590e7ab92934422e60`

Workflow conclusion:
**SUCCESS**

Jobs:

- `foundation` — PASS
- `browser_acceptance` — PASS

The final run used the ordinary validation path. The foundation job completed `npm test` successfully and retained machine-readable validation evidence. The browser job then built the curated Pages payload, installed the pinned Playwright/Chromium runtime, executed the real-XLSX browser acceptance, and retained browser evidence.

Retained artifacts:

- `huf-phase7be-validation-evidence` — artifact ID `10057983503`, digest `sha256:655672ce1dea70781ae65fc4497b067cb86aa6cab6ab8e30c8090c3484c51694`
- `huf-phase7be-browser-acceptance` — artifact ID `10058012576`, digest `sha256:b0ea054c07bddaf5c36a0bc967db0aae9e0e49ed9407a4d935c0507ab282b6ec`

Local reconstructed-source verification of the final hardening tree also passed:

- `npm test` — PASS
- foundation readiness tests — 28/28 PASS
- release manifest — PASS
- release-manifest payload count — 171
- missing — 0
- unlisted — 0
- mismatched — 0
- source package entries — 172
- unmanifested root `LICENSE` — absent

## Deployed visual verification

The live acceptance-test URL remained:
`https://knightfox789.github.io/HUF-KPI-acceptance-test/`

The user supplied a post-hardening deployed-browser screenshot on 2026-09-08. The screen visibly shows the intended result: the Home / Upload controlled form workspace is centered within the available desktop content region, eliminating the prior one-sided blank block while retaining the fixed left navigation and readable form width.

At the time this master-plan freeze was written, the connected GitHub Actions read surface still exposed the earlier explicit `pages.yml` run as the latest enumerated manual Pages workflow run, so a new `pages.yml` run ID for the hardening commit was not retained through that connector. The deployed-screen evidence itself demonstrates that the corrected layout was being served. This limitation is recorded rather than silently inventing a Pages run ID.

## Corrected promotion package

A new production-promotion package was reconstructed from the original frozen `0.1.6-acceptance` ZIP plus only the final accepted CSS/manifest delta:

`HUF_KPI_Rebuild_Phase7BE_Adaptive_Accepted_v0.1.6-ui1.zip`

SHA-256:
`d0eb7127b2d2eaa3a35547e9ac38e58edcc212316887569c99a1b208bf335164`

Verification:

- file entries: 172
- release-manifest payload files: 171
- release-manifest status: PASS
- `LICENSE`: absent
- `css/layout.css` SHA-256 inside ZIP: `4fb9575c3687f15aab887f5150a2dd1853e2c4493675e9bc1b935d58ee26fca2`
- `npm test`: PASS

This package supersedes the original `HUF_KPI_Rebuild_Phase7BE_Acceptance_Ready_v0.1.6.zip` for production promotion because the original ZIP does not contain the accepted adaptive-workspace hardening.

## Controlled-methodology impact

**NONE.**

Protected E01–E09 remain unchanged. No controlled formula, schema, routing, validation, assurance, aggregation or audit-policy semantic changed.

## Decision

**IMP-7B-E6: PASS / CLOSED / FROZEN IN TEST REPOSITORY.**

The adaptive workspace patch is accepted for promotion.

The previously planned `IMP-7B-E5` production-promotion action was not executed before this UI hardening and is therefore superseded as the current next action by `IMP-7B-E7` below.

Full IMP-7B production freeze remains pending authoritative production-repository promotion and revalidation.

Data Preparation remains blocked until that production freeze is complete.

## Exact next action

**Phase 7 / IMP-7B-E7 — Authoritative Production Promotion of Adaptive Accepted Candidate and Final IMP-7B Freeze**

Required scope:

1. authoritative repository: `knightfox789/HUF-water-potential-calculator`;
2. preserve/tag the current production `main` before replacement;
3. use only `HUF_KPI_Rebuild_Phase7BE_Adaptive_Accepted_v0.1.6-ui1.zip` with SHA-256 `d0eb7127b2d2eaa3a35547e9ac38e58edcc212316887569c99a1b208bf335164`;
4. do not add `LICENSE` or any other unmanifested payload file;
5. do not change protected E01–E09 or accepted application/config content during promotion;
6. promote first to the controlled acceptance branch in the production repository;
7. require `.github/workflows/validate.yml` foundation PASS and real-XLSX browser acceptance PASS there;
8. merge/promote to production `main` only after that branch gate passes;
9. rerun validation on production `main`;
10. run/dispatch `.github/workflows/pages.yml` on production `main`;
11. require validate PASS, browser acceptance PASS and deploy PASS;
12. retain production commit SHA, workflow run IDs, validation/browser/Pages artifacts and deployed production URL;
13. verify the production deployed page loads and the adaptive wide-screen workspace is present;
14. only then increment the master plan again, close full IMP-7B / production freeze, and open the next governed Data Preparation batch.

No methodology change is authorized by IMP-7B-E7.

# Procedure GOV-AUDIT-002 — Master Plan Direction, Sequencing and Restart-Consistency Audit

**Date:** 2026-09-08  
**Phase:** Project Governance / Phase-7 implementation control  
**Status:** COMPLETE / PASS WITH DOCUMENTATION CORRECTIONS  
**Classification:** GREEN governance/documentation; controlled methodology impact = NONE  
**Parent plan:** `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.47.md`  
**Parent SHA-256:** `4e978f9eb696cdbcd66fa67259dee0f7495bf65ad43ca6cb34ccad22b0d7ccf6`

## Purpose

Audit whether the rebuild is still following the frozen product, architecture, UX, methodology-protection and release-governance direction before beginning the next implementation step.

## Audit basis

- frozen governed phase sequence: Phase 4 Product Requirements → Phase 5 Architecture → Phase 6 UI/UX → Phase 7 Controlled Implementation → Phase 8 Regression/Acceptance → Phase 9 Clean Release;
- frozen product workflow: Upload → Workbook Preflight → Mapping Review → Data Preparation → Validation & Correction → Calculate → Results → Geography / Structure Analysis → Assurance & Evidence → Reports & Exports → Audit & Methodology;
- protected E01–E09 methodology and Design-6 logical 154/154 PASS baseline;
- frozen UX-04 Data Preparation requirements;
- protected E03 canonicalisation lineage and orchestration boundary;
- IMP-7B-E6 adaptive accepted candidate and GitHub evidence;
- authoritative production repository state observed during this audit.

## Findings

### A. Overall direction — PASS

The project remains on the intended clean-rebuild path. No evidence supports reopening Product Requirements, Architecture, UI/UX, Design-6 logical certification, or protected E01–E09 methodology before the next product implementation batch.

### B. Phase sequencing — PASS

The current work remains correctly inside Phase 7 Controlled Implementation. The browser/Pages checks used to close each implementation batch are batch-level quality gates and do not replace the later full Phase-8 regression/acceptance phase. This distinction remains valid.

### C. User-workflow sequencing — PASS

IMP-7B correctly implemented and accepted only Upload, Workbook Preflight and Mapping Review. E03/Data Preparation was deliberately not executed inside IMP-7B. The next product feature after full IMP-7B production freeze is therefore Data Preparation, followed later by Validation & Correction.

### D. Protected-methodology boundary — PASS

Data Preparation must consume protected E03 through the existing pipeline adapter/orchestrator. It must not recreate or alter canonicalisation rules, date/type/unit semantics, null-vs-zero handling, hashes, lineage or mapping→E03 invalidation.

### E. Data Preparation product target — PASS

Frozen UX target remains a plain-language summary of records prepared, date normalisation, unit conversion, blanks/null preservation, preparation warnings and no silent coercion. Field-level canonical detail remains Advanced.

### F. Restart-document consistency — DEFECT FOUND / CORRECTED IN v0.48

v0.47 had a stale early `Current authoritative restart point` block that still named v0.46, IMP-7B-E5, the original 0.1.6 ZIP and older acceptance evidence even though the final v0.47 procedure correctly superseded those values with IMP-7B-E6/E7 and the adaptive candidate. Historical procedure records were valid, but the restart summary violated the plan's own recovery requirement because a new session could follow the first stale current-state block.

Correction in v0.48:
- current plan set to v0.48;
- active procedure set to IMP-7B-E7;
- adaptive candidate and checksum made authoritative for promotion;
- latest clean acceptance commit/run IDs recorded;
- production repository pre-promotion state explicitly recorded;
- stale E5 next-action wording removed from the authoritative restart block.

### G. Post-IMP-7B procedure identity — AMBIGUITY FOUND / RESOLVED FOR FORWARD GOVERNANCE

The plan repeatedly targets `7C` for correction identity/history and calculation-readiness hardening, but did not assign a precise first procedure ID to Data Preparation itself. To prevent accidental mixing of Data Preparation with Validation & Correction, the planned first post-E7 sub-batch is now:

**`IMP-7C-A — Data Preparation Summary / Protected E03 Integration`**

This procedure is **PLANNED ONLY** and remains blocked until IMP-7B-E7 production freeze is complete.

Validation & Correction will be governed as a later IMP-7C sub-batch and must not be pulled into 7C-A.

## Current gate after audit

Authoritative production repository:
`knightfox789/HUF-water-potential-calculator`

Observed production `main` during audit:
`f57b345cebf2018254940f0ce10fe451cbdbe47e`

Therefore the corrected adaptive candidate has **not yet been promoted to authoritative production**. Full IMP-7B production closure cannot yet be claimed.

## Decision

**MASTER-PLAN DIRECTION: PASS.**

We are heading in the right direction. No redesign or methodology rework is indicated. The only required correction before continuing was restart/governance clarity, now addressed in v0.48.

## Controlled-methodology impact

**NONE.**

No E01–E09 engine, schema, formula, route, validation, assurance, aggregation, audit policy, frozen config or golden fixture was modified.

## Exact next action

**Execute Phase 7 / IMP-7B-E7 — Authoritative Production Promotion of Adaptive Accepted Candidate and Final IMP-7B Freeze.**

Only after E7 production branch validation, production-main validation, Pages/browser deployment PASS, evidence retention and live-site verification may full IMP-7B be closed and `IMP-7C-A — Data Preparation Summary / Protected E03 Integration` begin.

# Procedure GOV-REPO-GATE-001 — Mandatory User Confirmation Before GitHub Repository Selection or Mutation

**Date:** 2026-09-08  
**Phase:** Project Governance / Phase-7 implementation control  
**Status:** ACTIVE — PERMANENT APPROVAL GATE  
**Classification:** GREEN governance/documentation; controlled methodology impact = NONE  
**Parent plan:** `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.48.md`  
**Parent SHA-256:** `9bdff41ce1cef835c5e2f4990805f391343f9decc0995ff771de256c1606cdde`

## Purpose

Record the user's new mandatory repository-selection safeguard before continuing the active production-promotion procedure.

## User decision

The user explicitly instructed:

> Before choosing any GitHub repository, first ask the user whether the repository detected by ChatGPT is the correct repository. Do not make changes until the user confirms it.

Decision ID:

`GOV-DEC-GITHUB-REPO-CONFIRM-001`

This is now a permanent project-governance rule unless the user later explicitly changes it.

## Mandatory operating rule

For every future GitHub-related procedure:

1. ChatGPT may detect or identify a likely repository from the Master Plan, connected GitHub account, or other governed evidence.
2. Before treating that repository as the target for any repository-specific operation, ChatGPT must present the detected repository to the user.
3. ChatGPT must obtain explicit user confirmation that the detected repository is correct.
4. Until that confirmation is received, ChatGPT must not perform any GitHub mutation, including:
   - branch creation or deletion;
   - tag creation or deletion;
   - file changes;
   - commits;
   - pull requests or merges;
   - release publication;
   - workflow dispatches intended to change/deploy repository state;
   - GitHub Pages deployment actions;
   - repository settings changes.
5. A repository name recorded in an earlier plan or historical procedure does **not** waive this confirmation gate for a new execution step.
6. If more than one plausible repository is detected, present the alternatives and ask the user to choose explicitly.
7. The user's confirmation must be recorded in the living Master Plan before the repository-changing procedure is considered authorized.

## Effect on current active procedure

Current active procedure remains:

**Phase 7 / IMP-7B-E7 — Authoritative Production Promotion of Adaptive Accepted Candidate and Final IMP-7B Freeze**

The living plan currently records the detected production repository as:

`knightfox789/HUF-water-potential-calculator`

and the clean acceptance repository as:

`knightfox789/HUF-KPI-acceptance-test`

However, under this new gate, **neither repository is authorized for a new mutation in the current continuation session until the user explicitly confirms the intended target.**

The next action is therefore not repository mutation. The next action is:

**Present the detected intended production repository to the user and obtain explicit confirmation.**

Only after confirmation may IMP-7B-E7 repository operations begin.

## Protected candidate remains unchanged

Production-promotion candidate:

`HUF_KPI_Rebuild_Phase7BE_Adaptive_Accepted_v0.1.6-ui1.zip`

Recorded SHA-256:

`d0eb7127b2d2eaa3a35547e9ac38e58edcc212316887569c99a1b208bf335164`

No candidate content, protected methodology, or E01–E09 implementation is changed by this governance update.

## Controlled-methodology impact

**NONE.**

Protected E01–E09 remain unchanged.

## Files affected

- living Master Rebuild Plan only.

## Tests / verification

- authoritative restart block reviewed;
- current active procedure confirmed as IMP-7B-E7;
- detected production and acceptance repositories confirmed from the existing plan record;
- no GitHub repository mutation performed while creating this governance update.

## Decision

**REPOSITORY CONFIRMATION GATE — ACTIVE / MANDATORY**

No GitHub repository changes may be performed until the user explicitly confirms the detected target repository.

## Open issue

User confirmation of the intended repository for IMP-7B-E7 is pending.

## Exact next action

Ask the user to confirm whether:

`knightfox789/HUF-water-potential-calculator`

is the correct repository for the IMP-7B-E7 production-promotion procedure.

If confirmed, record that approval in the next Master Plan version before making repository changes.

# Procedure GOV-REPO-GATE-002 — Deleted Production Repository and Replacement-Target Discovery

**Date:** 2026-09-08  
**Phase:** Project Governance / Phase-7 implementation control  
**Status:** COMPLETE — PRODUCTION TARGET RETIRED; REPLACEMENT CONFIRMATION PENDING  
**Classification:** GREEN governance/read-only discovery; controlled methodology impact = NONE  
**Parent plan:** `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.49.md`  
**Parent SHA-256:** `fa2655c9cdc8cee193fafa22129f5311575b2454bea0910a076821088299a461`

## Purpose

Record the user's deletion of the previously identified production repository, verify the currently accessible repository surface without mutation, and prevent IMP-7B-E7 from targeting an obsolete repository.

## User statement

The user explicitly stated that the repository:

`knightfox789/HUF-water-potential-calculator`

has been deleted.

This repository is therefore classified as:

**RETIRED / DELETED — MUST NOT BE TARGETED**

Its former role as the intended production target is superseded.

## Read-only GitHub discovery performed

The connected GitHub repository list was inspected without any mutation.

The deleted repository `knightfox789/HUF-water-potential-calculator` was not present in the accessible repository list.

Relevant repositories detected:

1. `knightfox789/HUF-KPI-acceptance-test`
   - current clean rebuild acceptance repository;
   - README identifies `HUF Supply-Side KPI Calculator — Clean Rebuild`;
   - version `0.1.6-acceptance`;
   - preserves protected HUF v1.0.0 E01–E09;
   - accepted candidate/workflow evidence is associated with this repository;
   - currently a test/acceptance repository, not automatically reclassified as production.

2. `knightfox789/Water-Agriculture-KPI-calculator`
   - older multi-module Water & Agriculture KPI Calculator;
   - README describes Water Measurement, Demand-Side Water Saving, Additional Production, Additional Farmer Income and Person-Days;
   - README explicitly describes it as an independent calculation aid and not an official HUF portal;
   - not the current governed Supply-Side clean rebuild;
   - **NOT A DEFAULT REPLACEMENT TARGET**.

3. `knightfox789/Advanced-KPI-calculator`
   - older `HUF Water Security KPI Workbench — Phase G`;
   - demand-side 3B/3C workflow;
   - Additional Production, Water Saving, Additional Income and Demand-Side Person-Days;
   - methodology/product scope differs from the protected Supply-Side E01–E09 rebuild;
   - **NOT A DEFAULT REPLACEMENT TARGET**.

## Repository-selection conclusion

No existing repository has been selected as the replacement production target.

The strongest identity match for the current governed code is the clean acceptance repository:

`knightfox789/HUF-KPI-acceptance-test`

However, using it directly as production would collapse the current acceptance-versus-production separation.

Preferred governance direction is therefore to use a **new clean production repository** for the accepted Supply-Side rebuild, while retaining `HUF-KPI-acceptance-test` as evidence/acceptance history, unless the user explicitly chooses otherwise.

No repository creation or mutation was performed.

## Effect on IMP-7B-E7

IMP-7B-E7 remains **BLOCKED AT REPOSITORY-CONFIRMATION GATE**.

The former production target is deleted and invalid.

Before any GitHub mutation:

1. identify/propose the replacement target;
2. ask the user whether that detected/proposed repository is correct;
3. obtain explicit confirmation;
4. record the approval in the living Master Plan;
5. only then execute repository-specific promotion actions.

Data Preparation remains blocked until the production baseline is successfully promoted, validated, deployed, evidenced and frozen.

## Protected candidate

Accepted promotion candidate remains unchanged:

`HUF_KPI_Rebuild_Phase7BE_Adaptive_Accepted_v0.1.6-ui1.zip`

SHA-256:

`d0eb7127b2d2eaa3a35547e9ac38e58edcc212316887569c99a1b208bf335164`

## Controlled-methodology impact

**NONE.**

Protected E01–E09 remain unchanged.

## Files affected

- living Master Rebuild Plan only.

## Tests / verification

- connected GitHub repository list inspected read-only;
- deleted production repository absent from accessible repository list;
- candidate repository identities checked read-only through repository metadata/README content;
- no GitHub branch, tag, commit, PR, workflow dispatch, Pages deployment, settings change, or file mutation performed.

## Decision

`knightfox789/HUF-water-potential-calculator` is retired/deleted and must not be used.

No replacement production repository is authorized yet.

## Open issue

User must choose/confirm the replacement production repository.

## Exact next action

Present the user with controlled replacement choices:

- create/use a new clean production repository for the HUF Supply-Side KPI Calculator;
- explicitly repurpose `knightfox789/HUF-KPI-acceptance-test` as production;
- provide/confirm another repository.

Do not perform any GitHub mutation before explicit confirmation.

# Procedure GOV-REPO-GATE-003 — Sole Authorized GitHub Repository Freeze

**Date:** 2026-09-08  
**Phase:** Project Governance / Phase-7 implementation control  
**Status:** COMPLETE / FROZEN — SOLE REPOSITORY AUTHORIZATION  
**Classification:** GREEN governance; controlled methodology impact = NONE  
**Parent plan:** `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.50.md`  
**Parent SHA-256:** `c1dab7f06ef6bb9d68b0a3300de074cfcab58e1ccdd68ff7c34c5978b50bbec0`

## User decision

The user explicitly authorized only:

`knightfox789/HUF-KPI-acceptance-test`

for all future GitHub changes and testing in this project.

The user explicitly instructed that no other repositories are to be touched because they belong to different projects.

Decision ID:

`GOV-DEC-SOLE-GITHUB-REPO-001`

## Frozen repository boundary

Authorized repository:

`knightfox789/HUF-KPI-acceptance-test`

Permitted project operations in this repository include, when required by the governed plan:

- read/inspection;
- test execution and evidence review;
- branch and commit operations;
- controlled code changes;
- pull requests/merges;
- GitHub Actions validation;
- browser acceptance;
- GitHub Pages deployment;
- release evidence retention.

All other repositories are:

**OUT OF SCOPE / DO NOT READ, CHANGE, TEST OR DEPLOY FOR THIS PROJECT**

This includes older or unrelated KPI, water, dashboard, portfolio, article, GIS, calculator and other repositories even if accessible through the same GitHub account.

## Effect on repository-confirmation gate

The repository-confirmation gate is now satisfied for the current project session and remains satisfied only for:

`knightfox789/HUF-KPI-acceptance-test`

If any future action would require a different repository, stop and obtain a new explicit user confirmation before even treating that other repository as a project target.

## Effect on IMP-7B-E7

The former deleted production repository is permanently retired.

`knightfox789/HUF-KPI-acceptance-test` is now the sole governed repository for:

- continued implementation;
- validation;
- browser testing;
- Pages deployment;
- release evidence;
- production-baseline freeze for this rebuild.

The earlier acceptance-versus-production repository separation is superseded by this explicit user decision.

The next governed action is to inspect the current state of `main`, existing branches, workflows and deployed Pages evidence in this sole authorized repository, then determine the minimal controlled closure actions required for IMP-7B-E7.

## Protected candidate

Accepted candidate remains:

`HUF_KPI_Rebuild_Phase7BE_Adaptive_Accepted_v0.1.6-ui1.zip`

SHA-256:

`d0eb7127b2d2eaa3a35547e9ac38e58edcc212316887569c99a1b208bf335164`

No methodology change is authorized.

## Controlled-methodology impact

**NONE.**

Protected E01–E09 remain unchanged unless a separately governed RED change is explicitly approved.

## Decision

**SOLE AUTHORIZED REPOSITORY FROZEN: `knightfox789/HUF-KPI-acceptance-test`**

## Exact next action

Perform read-only state inspection of the authorized repository and current evidence, then continue IMP-7B-E7 closure using only this repository.

# Procedure IMP-7B-E7 — Sole-Repository Production-Baseline Freeze and Full IMP-7B Closure

**Date:** 2026-09-08  
**Phase:** Phase 7 / IMP-7B-E  
**Status:** COMPLETE — FULL IMP-7B CLOSED / BASELINE FROZEN  
**Classification:** GREEN governance/evidence closure; controlled methodology impact = NONE  
**Parent plan:** `HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.51.md`  
**Parent SHA-256:** `caa0f9c4a5e31b718ac3319bab575468f33378f1a221522570f70b6da06a741d`

## Purpose

Close the former production-promotion gate after the user explicitly superseded the deleted production repository and froze `knightfox789/HUF-KPI-acceptance-test` as the sole authorized repository for all project changes, testing, validation and deployment.

## User-authorized repository

Sole authorized repository:

`knightfox789/HUF-KPI-acceptance-test`

All other GitHub repositories remain out of scope and must not be used for this project.

## Repository state verified

Branches inspected in the authorized repository:

- `main` → `fe54aa2dd80262a63788e09d236e53da782806b6`
- `imp-7c-a-data-preparation` → `fe54aa2dd80262a63788e09d236e53da782806b6`

Therefore no Data Preparation code has diverged from the frozen accepted baseline at this closure point.

Canonical tree:

`1cf274647cacdf84d60fe39c19c37b109afa7c32`

This matches the previously accepted canonical tree recorded by IMP-7B-E6.

## Main-branch validation evidence

Workflow:

`Validate Hardened Foundation`

Run ID:

`34234697249`

Branch:

`main`

Commit:

`fe54aa2dd80262a63788e09d236e53da782806b6`

Result:

**SUCCESS**

## Main-branch Pages deployment evidence

Workflow:

`Deploy Pages`

Run ID:

`34234976076`

Branch:

`main`

Commit:

`fe54aa2dd80262a63788e09d236e53da782806b6`

Result:

**SUCCESS**

GitHub's generated Pages build/deployment run for the same commit also completed successfully:

Run ID:

`34234846273`

Result:

**SUCCESS**

## Compatible real-browser evidence

A later validation execution on the pre-created `imp-7c-a-data-preparation` branch ran against the exact same commit SHA and tree as `main`:

Validation run:

`34245161153`

Commit:

`fe54aa2dd80262a63788e09d236e53da782806b6`

Result:

**SUCCESS**

Retained artifacts include:

- `huf-phase7be-browser-acceptance`
  - artifact ID `10063700179`
  - SHA-256 digest `45668383ebc0de602dad3cd9cf85961c435ed28545712cda3eece909a5da7996`
- `huf-phase7be-validation-evidence`
  - artifact ID `10063660719`
  - SHA-256 digest `fbe121debb19112971a6219c67316b47af2f3e4cf104b05dcfa7042c34d8f457`

Because the branch and `main` are byte-identical at the same commit/tree, this browser evidence applies to the frozen baseline without requiring a duplicate code mutation.

## Closure decision

The former requirement to promote the accepted candidate into a separate production repository is **SUPERSEDED** by the user's explicit sole-repository decision.

The authorized repository already contains the accepted canonical tree on `main`, with:

- main validation PASS;
- Pages deployment PASS;
- browser acceptance evidence on the identical commit/tree;
- protected E01–E09 unchanged.

Therefore:

**IMP-7B-E7: PASS / CLOSED**

and:

**FULL IMP-7B: PASS / CLOSED / PRODUCTION-BASELINE FROZEN IN THE SOLE AUTHORIZED REPOSITORY**

No repository code change was required for this closure.

## Frozen baseline identity

Repository:

`knightfox789/HUF-KPI-acceptance-test`

Baseline branch:

`main`

Commit:

`fe54aa2dd80262a63788e09d236e53da782806b6`

Canonical tree:

`1cf274647cacdf84d60fe39c19c37b109afa7c32`

Accepted package:

`HUF_KPI_Rebuild_Phase7BE_Adaptive_Accepted_v0.1.6-ui1.zip`

Package SHA-256:

`d0eb7127b2d2eaa3a35547e9ac38e58edcc212316887569c99a1b208bf335164`

## Controlled-methodology impact

**NONE.**

Protected E01–E09 remain unchanged.

No formula, schema, validation rule, route, assurance, aggregation or audit semantic changed.

## Gate effect

Data Preparation is now **UNBLOCKED**.

The next governed implementation batch is:

**Phase 7 / IMP-7C-A — Data Preparation Summary / Protected E03 Integration**

Validation & Correction remains explicitly outside IMP-7C-A and must not be pulled forward.

## Exact next action

Open IMP-7C-A with a documented coding objective, protected-methodology boundary, expected files/modules and acceptance criteria before making implementation changes.

Use only:

`knightfox789/HUF-KPI-acceptance-test`

for all repository work.



# Procedure IMP-7B-E7-R1 — Evidence Reconciliation and Final Baseline Freeze

Date: 2026-09-08
Status: COMPLETE / PASS — FULL IMP-7B CLOSED
Classification: GREEN evidence/governance; controlled methodology impact: NONE.

## Authorization and scope

The user instructed: “reconcile and complete E7”. The sole authorized repository remains knightfox789/HUF-KPI-acceptance-test under GOV-DEC-SOLE-GITHUB-REPO-001. The deleted production repository is retired. No other repository was accessed. No repository mutation, workflow rerun, deployment, or methodology change was necessary.

## Reconciliation finding

The HUF KPI Rebuild folder ended with master plan v0.48 and E6 evidence naming E7 as next. Later v0.52 copies outside that folder claimed closure, but the attached v0.52(2) retained a stale restart section naming v0.49, E7 pending, and the deleted production repository. A different v0.52(3) also recorded 7C-A initiation. Version labels alone therefore could not establish operational status.

Fresh GitHub reads independently substantiate the technical closure claims. The earlier inference that missing folder evidence meant the technical work had not happened was too strong. The actual gap was reconciliation and durable, consistent project records. This procedure resolves it and supersedes conflicting current-state summaries, while preserving historical entries.

## Verified baseline

- Repository: knightfox789/HUF-KPI-acceptance-test
- main commit: fe54aa2dd80262a63788e09d236e53da782806b6
- Canonical tree: 1cf274647cacdf84d60fe39c19c37b109afa7c32
- imp-7c-a-data-preparation points to exactly the same commit/tree; no 7C implementation divergence exists.
- Historical accepted candidate: HUF_KPI_Rebuild_Phase7BE_Adaptive_Accepted_v0.1.6-ui1.zip
- Recorded candidate SHA-256: d0eb7127b2d2eaa3a35547e9ac38e58edcc212316887569c99a1b208bf335164 (historical package identity, not newly recomputed in this procedure).

## Verification results

| Gate | Evidence | Result |
|---|---|---|
| Main foundation validation | Run 34234697249; job 102089285632 | 28/28 suites PASS; 0 failed |
| Protected-core parity | protected-core-manifest suite in retained validation log | 37 checks PASS; 0 failed |
| Release manifest | same validation log | 171 payload files; no missing, unlisted or mismatched files |
| Main real-XLSX browser | Run 34234697249; job 102089395210 | 22 checks PASS; 0 failed |
| Pages validation | Run 34234976076; job 102090231246 | npm test and curated build SUCCESS |
| Pages real-XLSX browser | Run 34234976076; job 102090352418 | 22 checks PASS; 0 failed |
| Pages deployment | Run 34234976076; job 102090608520 | SUCCESS for exact baseline SHA |
| Additional branch evidence | Run 34245161153 | foundation and browser jobs SUCCESS; supplementary only |
| Fresh live verification | HTTPS GET and SHA-256 comparison to baseline release manifest | 5/5 files match: index.html, css/layout.css, app/bootstrap.js, vendor/jszip/jszip.min.js, PROTECTED_CORE_MANIFEST.json |

Live URL: https://knightfox789.github.io/HUF-KPI-acceptance-test/

Validation: https://github.com/knightfox789/HUF-KPI-acceptance-test/actions/runs/34234697249

Pages: https://github.com/knightfox789/HUF-KPI-acceptance-test/actions/runs/34234976076

These are existing successful CI executions freshly verified in this session, not new test executions. The live hash checks were newly performed. Browser evidence is from GitHub's curated-payload acceptance; a new interactive live-browser session was not performed.

## Evidence retention and limits

The evidence package retains fetched branch/run metadata, job and artifact inventories, four full GitHub job logs, the 28-suite machine-readable result extracted from the validation log, baseline manifests, live verification JSON and captured live files. An internal SHA256SUMS.txt covers the retained evidence.

GitHub artifact IDs and GitHub-reported archive digests are retained in artifact inventories. Original archive byte downloads returned HTTP 403 in this runtime. Those ZIP bytes were not inspected or independently hashed, and are not misrepresented as archived locally. The directly fetched full logs provide the pass counts and successful artifact-retention/deployment evidence; the extracted validation JSON preserves the detailed suite results. Original artifacts remain available in GitHub according to the fetched inventories. This transfer limitation does not invalidate the directly verified run/job/log evidence used for closure.

## Decision, files and recovery

IMP-7B-E7 and FULL IMP-7B are CLOSED / FROZEN under the approved sole-repository model. Promotion into a separate repository is superseded by the recorded user decision; main already contains the accepted canonical tree.

Changed deliverables: master plan v0.53, this closure report, reconciliation evidence ZIP and external checksums. Protected E01–E09 and all repository source files remain unchanged. No production regression was introduced. Historical Design-6 154/154 logical evidence remains historical; it was not rerun or newly certified here. Later Phase-8 comprehensive acceptance remains required.

Recovery: use the exact frozen main SHA above and the retained evidence package. Do not follow old restart sections pointing to the deleted repository. The duplicate v0.52(3) initiation record is historical planning, not proof of implemented 7C code.

Open blocking issues: none for E7. Optional original ZIP-byte archival may be completed later when download access permits.

Next action: open IMP-7C-A — Data Preparation Summary / Protected E03 Integration with documented objective, file scope, protected boundary and acceptance criteria. Reuse the existing branch after checking its current base. Validation & Correction belongs to a later batch. No 7C coding was performed in this procedure.

Parent document: HUF_KPI_Master_Audit_Recovery_and_Clean_Rebuild_Plan_v0.52(2).md
Parent SHA-256: 5fa908b7d6073ecfd0920cbbd0cea1ea759107247726a6602a247005827dd1af

# Procedure EXEC-AUTO-001 — Continuous Delivery Authorization
Date: 2026-09-08
Status: ACTIVE / USER AUTHORIZED
The user authorized completion of all remaining implementation, inspections, design/branding, tests, deployment and release steps without routine approval interruptions. Ask only for critical methodology/scope decisions or genuine access blockers. Sole repository remains knightfox789/HUF-KPI-acceptance-test. No RED methodology change is authorized. Preserve previous plan versions and update this working record at every procedure.

# Procedure IMP-7C-A-001 — Data Preparation Integration
Date: 2026-09-08
Status: IN PROGRESS
Objective: connect frozen mapping to E03-only preparation, expose its summary and controlled detail, preserve E04 as a later explicit action.
Scope: pipeline/orchestrator.js, app/app-controller.js, views/prepare-run-view-model.js, ui/pages/data-preparation.js, app/bootstrap.js and governed tests/manifests.
Protected boundary: protected-core/**, frozen configs, goldens and Design-6 expectations unchanged.
Acceptance: E03 runs once; PREPARED state; E04 not run; stats/diagnostics/hash shown; null/zero remain distinct; mapping invalidation maintained; tests and browser check pass.

# Procedure EXEC-BATCH-REGISTER-001 — Remaining Controlled Implementation Scope
Status: PLANNED; execute sequentially and record evidence per batch.
7C-B: correction overlay, controlled detail access and E04 validation/readiness; source bytes preserved, explicit reason/history, downstream invalidation.
7C-C: E05–E09 processing, completed prepared-result package, stale/error handling; protect engine semantics.
7D: shared scope/result view models, dashboard, geography, structures and daily trace; no engine execution from presentation filters.
7E: evidence review through source correction with conservative E03 invalidation unless a proven safe E07-only method exists; never rewrite E06 numeric truth from presentation review.
7F: CSV/XLSX/JSON/ZIP exports and structured PDF reports; shared scope and null/status/precision metadata.
7G: audit/run/help, accessible responsive branding and state polish.
Phase 8: frozen logical/physical/golden tests, product reconciliation, browser/privacy/performance/deployed checks.
Phase 9: clean validated source, tag/release, notes, manifests/checksums, evidence, Obsidian/recovery documentation.
Expected files: services/*, views/*, ui/pages/*, exports/*, reports/*, pipeline adapter/client/orchestrator, app, CSS, product config, tests, release tools and docs. All protected-core files and frozen baseline specs remain unchanged. Acceptance is governed by all 134 P0 and 15 P1 PRD requirements; P2 remains excluded.

## IMP-7C-A progress / IMP-7C-B opening
E03-only integration and separate E04 command implemented. Preparation orchestration test PASS; browser gate pending installation. Next C-B scope implements private adapter detail/query access and auditable source overlays, consuming existing E03–E09 unchanged. Original workbook bytes/raw object are retained; corrected scalar cells are applied to a separate derived sheets object. E03 content hash binds corrected cells; product correction history is carried separately from untouched standard E09 audit export. All source/evidence edits conservatively restart E03; no evidence-only fast path is introduced without proof. Acceptance: original bytes/hash untouched, reason/history retained, preparation/null rules unchanged, stale results inaccessible, workbook blockers prevent calculation.

### EXEC-REGRESSION-001 — fresh protected execution checkpoint
- Recovered the original E01–E09 module/fixture test sources and frozen test inputs from the archived final release. The harness executes unmodified tests against the current protected-core files, with no historical result summaries used as proof.
- Fresh local result: **16/16 suites PASS**, including all 15 high-risk physical workbooks, leap/non-leap positives, formula assertions and 28 Design-5 assertions. Evidence: `tests/evidence/protected-regression.json`.
- Full Design-6 154/154 is **not yet freshly established**: the historical remaining-80 result file is certification evidence, not an executable runner. Runner recovery/implementation remains open.
- IMP-7C–G implementation continues: explicit E03 summary/E04 validation, correction overlays, result and geography views, structure/evidence, structured exports/reports. These are implementation checkpoints, not accepted/released status.
- Release cannot be claimed until browser/deployed workflow, visual/report QA, full contract reconciliation and performance acceptance are closed. Architecture §27.5 leaves production fixture and numeric performance budget unresolved; representative production scale must be established before final acceptance.

### EXEC-CI-001 — implementation acceptance checkpoint
- Extended browser acceptance from intake/mapping to preparation, validation, calculation, results, trace exports, CSV/XLSX/PDF/audit/bulk exports, correction invalidation, privacy and desktop/tablet/mobile screens. CI execution pending.
- Local foundation checks: 28/28 PASS; product goldens: 90/90 PASS; protected regression:16/16 suites PASS. These do not substitute for 154/154 logical or live browser acceptance.
- User authorization remains continuous for remaining governed implementation/checks; only critical scope/methodology decisions or actual access blockers require intervention.

### EXEC-D6-001 — reconstructed fresh Design-6 logical execution
- Recovered scenario definitions and v1.1 VAL-027 override invariant. Implemented 80 scenarios as test-only mutations/assertions; no protected engine/config changes.
- Fresh local aggregate:154/154 logical PASS (2 positive goldens +29 formula cases +15 physical rule cases +80 remaining rule cases +28 output-schema cases). Physical source bytes match their frozen Design-6 duplicates.
- VAL-063/086/087/088 retain the frozen prepared-state injection/tolerance-oracle boundary; evidence does not claim production re-execution of arbitrary mutated daily snapshots.
- CI at implementation SHA01d2dc454429d9d413abb924b8c69041e3cbd2f5 passed foundation/product/protected tests and desktop flow through bulk/combined exports. Browser UAT correctly failed at tablet navigation because baseline CSS hid the sidebar. Fixed responsive navigation; rerun pending.
- Draft PR1 is an implementation/acceptance workspace, not release approval. No production deployment or final release claim made.

### EXEC-UAT-002 — CI and responsive hardening
- CI run34254308950 / source ff4fbfc28e8a376c74cc2635149d8dde8d607426 passed foundation, protected module/physical, product/export/report and fresh154 logical gates.
- Browser desktop and tablet paths passed. Mobile Results exposed horizontal overflow. Corrected intrinsic grid sizing without hiding page overflow; retained the strict check and added element-bound diagnostics.
- Completed-run revalidation/recalculation now opens a new immutable draft and preserves prior snapshots; an injected E06 failure cannot leave prior results marked current. Aggregation QA failure retains audit evidence and blocks current-result publication.
- Final release remains blocked on successful complete browser/deployed acceptance and representative production performance fixture/budget (PRD-NFR-005 / Architecture27.5). Available indexed input files found so far are templates/goldens, not a verified representative production workload.

### EXEC-PERF-001 — synthetic capacity measurements
- Synthetic Node probes completed at100/1000 structures with100/1000 person-day rows and365 rainfall rows; all E01–E09 stages completed. At1000 structures: input7.42MB; E03~3.30s; E06~3.75s; peak process RSS~1.34GB. This is an engineering measurement, not a production/browser acceptance claim.
- Evidence: tests/evidence/synthetic-performance.json; reproducible probe: tests/protected/performance-probe.mjs. The production workload and numeric performance budget remain unset under Architecture27.5.
- Added full leap-year browser calculation and366-day trace verification to the desktop/tablet/mobile acceptance rerun.

### EXEC-UAT-003 — complete browser PASS and final visual corrections
- Candidate a3ebd7aa9215d735038e868c924cd27ea23714ba: CI34255671505 passed foundation/product/protected and fresh154 logical checks plus complete browser acceptance. Desktop1440x1000, tablet834x1112, mobile390x844;365/366-day traces; correction invalidation; exports and no external/upload/URL/debug-state leaks. No page/console errors.
- Retained browser artifact10067857231, SHA25613832cabc3b3353a355e29f45520e1b072910d4b46d7fe110c6a853fc8c83e75. JSON committed under tests/evidence/phase8-browser-a3ebd7a.json; screenshots retained in candidate evidence.
- Visual inspection found mobile table-header letter wrapping despite zero page overflow. Added readable minimum column widths and keyboard-scrollable containers. Workbook rendering found clipped nested metadata; flattened metadata paths and adjusted row sizing/widths without changing result cell values. Re-rendered metadata is readable.
- Completed P1 preflight-summary download, plain-language upload/preflight text, programme-first DSC-context header, keyboard skip link and form focus styles. Browser gate now includes control labels, keyboard primary actions, drag/drop, blocked external requests and mobile review/assurance.
- Implementation coverage register: docs/release/PRD_IMPLEMENTATION_COVERAGE.json. It distinguishes implemented coverage from independent acceptance proof, one unresolved production-performance requirement, operational release gates and frozen P2 deferrals.
- Final release is NOT declared. Production performance decision remains blocking. Candidate promotion, actual deployed workflow and final SHA-bound release packaging follow after that gate; do not overwrite this qualification with logical/browser PASS.

### EXEC-VISUAL-004 — deterministic report typography
- Embedded unmodified licensed DejaVu Sans2.37 normal/bold fonts in PDFs to remove reader-dependent substitute-font layout. Font bytes and license are included in vendor manifest; controlled code/config unchanged. Missing aggregate buckets are labelled No value, never zero or certified.
- Standard preflight boundary test now checks the new equivalent plain-language sentence; its E02 exclusion and governed navigation checks remain intact.

### EXEC-CI-004 — rejected intermediate candidate and repair
- CI34256885383 rejected6a8a6bac at product tests: a PDF layout edit accidentally displaced reportData initialization. No deployment occurred. Restored the shared report model and kept the font/numeric-cell layout change inside makePdf.
- Fresh local product checks after repair:90 result checks,318 report checks,39 export scopes and repeat-run failure-safe checks PASS. The rejected SHA is not accepted evidence; rerun required for the repair.

- Accessibility skip-link uses the fixed #main landmark fragment. URL privacy acceptance explicitly permits only an empty fragment or #main, still forbids all query strings and other fragments; this is a structural navigation identifier, never workbook/project data.

### EXEC-UAT-005 — preflight acceptance expectation correction
- CI34257236027 passed all foundation/product/protected/154 logical gates and keyboard skip-link checks. Its new preflight-export test incorrectly expected11 prepared data tables rather than the13-sheet source inventory (including00_Instructions and99_Lookups). Verified the golden XLSX inventory and corrected the assertion to13 with both auxiliary sheet names required. Export implementation was unchanged; browser rerun required.

- Empty-filter CSV exports are disabled with a clear zero-record explanation because a row-oriented empty CSV cannot retain run/scope metadata. XLSX/PDF empty summaries retain metadata. Added an accepted/KPI1.1.1 empty-intersection browser check; no result membership or values are changed.

### EXEC-CHECKPOINT-055 — verified implementation candidate; critical performance gate outstanding
- Candidate source e42ed99834c614127eff3292166c832036be621b, tree cf680ed5373fb04f709631447c69b07ea39c8939. Draft PR1 remains unmerged; sole authorized repository knightfox789/HUF-KPI-acceptance-test. Workspace tree matched the remotely committed tree and was clean.
- CI34257867045: foundation job102168118587 PASS and browser job102168812765 PASS. Fresh154/154 logical (0 FAIL/0 NOT VERIFIED),15/15 physical fixture hashes/cases,16 protected suites,90 product-flow checks,318 report checks,39 export scopes and repeat-run failure-safe tests passed.
- Browser79/79 PASS: desktop1440x1000,tablet834x1112,mobile390x844; full preparation/validation/calculation/results/export workflow,365/366-day trace, correction invalidation, keyboard skip/main focus and primary actions, labelled controls, drag/drop, preflight summary, no external requests with network blocking, no uploads/private URL/debug global, no page/console errors, and empty-filter CSV protection. Nonleap calculation237ms is a golden measurement only.
- Browser artifact10068811092: SHA2567b88e8ab600b68dff02b0f357ed5e89509074a3fcbbbe3a13acb3a5854c38491. Foundation artifact10068678823: SHA2562c23b31af0ea31dde4976f5cdfecf8c2847ba4dda29fb3f082bbc6121ef32bde. Downloaded exact bytes verified against GitHub digests.
- Final mobile screenshot review confirms readable table columns with container scrolling and accessible Results/Review/Assurance controls. Management project and CCT structure PDFs use embedded fonts, full-precision values and selectable text; five pages each reviewed. XLSX metadata clipping corrected and re-rendered. QA applies to retained synthetic samples, not every possible language or arbitrary text length.
- This v0.55 checkpoint is the latest continuity authority. The repository's master/status snapshot predates CI completion by design; its prior-PASS/pending annotations are historical. The PR body and this retained checkpoint bind the completed evidence to e42ed99 without modifying that tested source. Do not treat the older embedded pending label as a new runtime failure.
- Required next critical input: representative maximum production workbook, or expected structure/person-day counts. PRD-NFR-005 / Architecture27.5 forbid unsupported production thresholds. Synthetic100/1000 structure Node probes remain engineering measurements, not release acceptance.
- Following that input, continue without routine approvals: document and pass production browser performance; promote/deploy the qualifying candidate; execute actual Pages workflow and deployed-file/protected-core drift verification; generate final source/release/evidence manifests, SHA files and notes; reconcile promoted status; update this master to released only after all gates pass.
- Main/Pages remains accepted E7 baseline fe54aa2dd80262a63788e09d236e53da782806b6. No final release or formal HUF confirmation is claimed. Five P2 future requirements remain intentionally deferred under the frozen PRD.

### EXEC-PERF-056 — user directs autonomous continuation
- User replied “proceed” after the production-workload question. Proceed with a declared initial qualification workload, without asserting that actual production counts were supplied. Workload1000 structures +1000 person-day records,365/366-day calendars, five districts and at least50 villages, derived synthetically from protected route/type goldens. Larger/materially different portfolios remain outside this initial qualification.
- Fixed before browser execution: end-to-end90s, individual stage30s, view interaction/navigation1s, exports30s and maximum main-thread heartbeat gap1s. Basis: prior1000-structure Node measurement~11s and1.34GB peak RSS. Record failures and fix implementation; do not silently raise budgets to pass.
- Found browser worker DOMParser capability absent, causing main-thread fallback. Capacity acceptance is added to CI to measure this concrete risk before promotion. Protected engine/config files remain unchanged.

- Worker repair under test: bundle@xmldom/xmldom0.9.12 (the same pinned DOM implementation used in controlled Node regression) to provide worker-local DOMParser. Original protected XLSX parser and all controlled modules/configs remain byte-identical. GET_CAPABILITIES must confirm compatibility; no forced-success capability flag. Worker command timeout45s allows the declared30s stage budget plus transport margin. Full browser goldens and capacity gates must pass before promotion.

### EXEC-PERF-057 — Measured worker transfer repair
- Baseline91f7a93 capacity test failed before calculation because generated empty optional sheet headers were absent. Fixture headers repaired; mapping gate remains intact.
- Candidate216fdad and profileaffa77e completed1000 structures/1000 person-day records for365/366days in~11s, all numeric stage, interaction and export budgets passed. Main-thread gaps1.04–1.26s failed the fixed1s gate during result transfer. No capacity PASS is claimed.
- Measured result package~153MB including full daily traces. Added acknowledgement-paced20-record transfer chunks; all values, nulls, traces and hashes retained, worker yields between chunks. Protected engines/configs unchanged. Full gates rerun pending.
- Standard browser check exposed asynchronous mapping-test timing after enabling worker. Runner now waits for mapping drawer to close after completed apply, then verifies manual mapping; no assertion removed.
- Pages workflow prepared to require both browser and capacity acceptance before deploy; post-deploy check compares every served payload file and repeats full live browser acceptance. User authorized this continuous release workflow; no deployment has occurred yet.
