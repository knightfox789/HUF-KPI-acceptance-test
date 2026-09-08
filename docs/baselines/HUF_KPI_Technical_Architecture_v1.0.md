---
title: "HUF Supply-Side KPI Calculator — Technical Architecture"
version: "1.0"
date: "2026-09-06"
status: "FROZEN"
governance: "Product architecture around protected E01–E09 methodology"
---

# HUF Supply-Side KPI Calculator — Technical Architecture v1.0

## 1. Freeze statement

This document freezes the technical architecture for the clean rebuild of the HUF Supply-Side KPI Calculator.

It implements the frozen Product Requirements Specification v1.0 while preserving the protected HUF calculation methodology.

The architecture is intentionally designed around one non-negotiable rule:

> **The product may orchestrate, present, filter, explain, export and report controlled truth; it may not silently redefine that truth.**

Protected E01–E09 engines and controlled methodology configurations remain the calculation authority.

No production rebuild coding begins until this architecture baseline is accepted as the implementation contract.

---

## 2. Architecture objectives

The rebuilt product must:

1. preserve the audited E01–E09 methodology and Design-6 logical baseline;
2. provide a task-oriented UI rather than engine-oriented navigation;
3. retain browser-local workbook processing and no-backend operation;
4. prevent stale or mixed-version results;
5. make correction/invalidation deterministic and auditable;
6. provide prepared product/view models without recalculating official KPI logic;
7. support geography, structure, assurance and evidence analysis;
8. generate structured XLSX/CSV/JSON/PDF outputs from prepared truth;
9. retain complete release evidence for logical, fixture, browser and deployed acceptance;
10. remain deployable as a static GitHub Pages application.

---

## 3. Explicit non-goals

This architecture does not:

- redesign HUF formulas;
- redesign E05 routing;
- change Design-4 validation outcomes;
- merge demand-side methodology;
- introduce VWB Water Security Index or VWB formula logic;
- introduce VWB cluster hierarchy;
- require a backend, database or login;
- make GIS/maps mandatory for the initial release;
- allow dashboard filters to trigger official recalculation;
- use screenshot capture as the report engine;
- rely on runtime CDN dependencies for controlled core execution.

---

## 4. Architectural classification

### 4.1 GREEN — presentation/product layer

May evolve without methodology versioning when behavior remains equivalent:

- page layout;
- navigation;
- visual grammar;
- chart arrangement;
- labels consistent with controlled terminology;
- filter controls;
- responsive presentation;
- report composition.

### 4.2 AMBER — workflow/state/integration layer

Requires architecture-level regression:

- upload orchestration;
- correction overlay;
- dependency/invalidation rules;
- worker orchestration;
- export/report services;
- dependency/vendor packaging;
- release evidence capture.

### 4.3 RED — controlled methodology

Requires explicit methodology governance and a new controlled version:

- input-schema interpretation;
- canonicalisation;
- Design-4 validation semantics;
- E05 routing;
- E06 formulas/person-days;
- E07 assurance;
- E08 aggregation;
- E09 audit semantics;
- frozen controlled configs/goldens/fixtures.

---

## 5. Top-level logical architecture

```text
┌─────────────────────────────────────────────────────────────────┐
│                         Product UI                              │
│ Home · Review · Results · Structures · Assurance · Reports     │
└──────────────────────────────┬──────────────────────────────────┘
                               │ commands / queries
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Application Controller                       │
│ workflow state · invalidation · run selection · error boundary │
└─────────────┬───────────────────────┬───────────────────────────┘
              │                       │
              │                       ├──────────────┐
              ▼                       ▼              ▼
┌──────────────────────┐   ┌─────────────────┐  ┌─────────────────┐
│ Controlled Pipeline  │   │ Prepared Views  │  │ Output Services │
│ Orchestrator         │   │ / Query Layer   │  │ CSV/XLSX/PDF   │
└───────────┬──────────┘   └────────┬────────┘  └────────┬────────┘
            │                       │                    │
            ▼                       │                    │
┌──────────────────────┐            │                    │
│ Protected E01–E09    │            │                    │
│ + controlled configs │            │                    │
└───────────┬──────────┘            │                    │
            │ immutable snapshots   │                    │
            └───────────────────────┴────────────────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │ Run Evidence Store │
                    │ in-memory/download │
                    └────────────────────┘
```

The UI never directly reimplements controlled calculations.

---

## 6. Runtime deployment model

### 6.1 Static application

The rebuilt application remains a static browser product.

Required deployment characteristics:

- no application backend;
- no database;
- no server-side workbook upload;
- no server-side KPI calculation;
- GitHub Pages compatible;
- repository-subpath compatible;
- native ES-module loading or equivalent deterministic static module loading;
- all controlled runtime dependencies bundled/vendored with the release.

### 6.2 No runtime CDN requirement for controlled core

Libraries required for workbook parsing, ZIP handling, calculation orchestration or release-critical reporting must be shipped with the release or its deterministic build output.

Runtime network access may be used only for nonessential external navigation/help links, never to execute the controlled calculation path.

### 6.3 Deployment path

```text
repository
   ↓
GitHub Actions validation
   ↓
validated static release payload
   ↓
GitHub Pages deployment
   ↓
live deployed acceptance
   ↓
release-evidence capture
```

---

## 7. Repository architecture

The frozen repository organization is:

```text
/
├─ index.html
├─ VERSION
├─ README.md
├─ THIRD_PARTY_NOTICES.md
│
├─ assets/
│  ├─ icons/
│  ├─ brand/
│  └─ fonts/                 # only redistributable project fonts if used
│
├─ css/
│  ├─ tokens.css
│  ├─ base.css
│  ├─ layout.css
│  ├─ components.css
│  ├─ print.css
│  └─ pages/
│
├─ app/
│  ├─ bootstrap.js
│  ├─ routes.js
│  ├─ app-controller.js
│  ├─ error-boundary.js
│  ├─ event-bus.js
│  └─ feature-flags.js
│
├─ protected-core/
│  ├─ engines/               # audited E01–E09 implementation
│  ├─ config/                # controlled methodology configs
│  ├─ contracts/
│  └─ PROTECTED_CORE_MANIFEST.json
│
├─ pipeline/
│  ├─ orchestrator.js
│  ├─ worker-entry.js
│  ├─ pipeline-adapter.js
│  ├─ dependency-policy.js
│  ├─ snapshot-registry.js
│  └─ run-finalizer.js
│
├─ state/
│  ├─ app-state.js
│  ├─ source-state.js
│  ├─ mapping-state.js
│  ├─ correction-state.js
│  ├─ pipeline-state.js
│  ├─ view-state.js
│  └─ selectors.js
│
├─ adapters/
│  ├─ workbook-adapter.js
│  ├─ download-adapter.js
│  ├─ crypto-adapter.js
│  ├─ clock-adapter.js
│  └─ browser-capabilities.js
│
├─ views/
│  ├─ prepare-run-view-model.js
│  ├─ dashboard-view-model.js
│  ├─ geography-view-model.js
│  ├─ structure-view-model.js
│  ├─ assurance-view-model.js
│  ├─ validation-view-model.js
│  ├─ audit-view-model.js
│  └─ report-view-model.js
│
├─ services/
│  ├─ preflight-service.js
│  ├─ correction-service.js
│  ├─ geography-service.js
│  ├─ structure-service.js
│  ├─ evidence-service.js
│  ├─ unit-display-service.js
│  ├─ export-service.js
│  ├─ report-service.js
│  └─ evidence-package-service.js
│
├─ reports/
│  ├─ report-models/
│  ├─ layouts/
│  ├─ charts/
│  └─ renderer/
│
├─ exports/
│  ├─ csv/
│  ├─ xlsx/
│  ├─ json/
│  └─ zip/
│
├─ ui/
│  ├─ components/
│  ├─ pages/
│  ├─ tables/
│  ├─ charts/
│  ├─ dialogs/
│  └─ accessibility/
│
├─ vendor/
│  ├─ xlsx/
│  ├─ jszip/
│  ├─ pdf/
│  └─ VENDOR_MANIFEST.json
│
├─ samples/
│  ├─ leap/
│  └─ nonleap/
│
├─ tests/
│  ├─ protected/
│  ├─ design6/
│  ├─ product/
│  ├─ fixtures/
│  ├─ browser/
│  ├─ deployment/
│  ├─ reconciliation/
│  └─ evidence/
│
├─ docs/
│  ├─ methodology/
│  ├─ architecture/
│  ├─ help/
│  └─ release/
│
└─ .github/
   └─ workflows/
      ├─ validate.yml
      └─ pages.yml
```

The exact filenames may change during implementation only if the architecture responsibility remains identical and the living Master Plan records the change.

---

## 8. Protected-core boundary

### 8.1 Protected-core directory

All audited E01–E09 engine modules and controlled configs are placed under one clearly marked `protected-core/` boundary.

The initial rebuild shall copy the protected final baseline rather than rewrite it.

### 8.2 Protected-core manifest

`PROTECTED_CORE_MANIFEST.json` shall record:

- file path;
- controlled version;
- SHA-256;
- methodology layer;
- expected baseline hash;
- change classification.

### 8.3 Import rule

Normal UI pages and product services must not import individual protected engines directly.

Allowed call chain:

```text
UI / Product Service
        ↓
Application Controller
        ↓
Pipeline Orchestrator
        ↓
Pipeline Adapter
        ↓
Protected E01–E09
```

This prevents accidental product-layer dependence on engine internals.

### 8.4 Write protection rule

The protected-core directory is conceptually read-only during ordinary product implementation.

Any modification requires:

1. RED change record;
2. user approval;
3. new controlled methodology version;
4. updated controlled manifests;
5. updated golden/fixture expectations if genuinely required;
6. full regression and certification.

---

## 9. Pipeline orchestration

### 9.1 Single pipeline authority

`pipeline/orchestrator.js` is the only normal product entry point for controlled processing.

Responsibilities:

- invoke protected stages in governed order;
- preserve immutable stage snapshots;
- enforce prerequisite state;
- apply invalidation policy;
- surface progress;
- capture errors;
- finalize completed run through E09.

It does not contain formulas or route logic.

### 9.2 Governed stage sequence

```text
E01 Intake
 ↓
E02 Mapping
 ↓
E03 Canonical Preparation
 ↓
E04 Validation & Readiness
 ↓
E05 Official Routing
 ↓
E06 Calculation Truth
 ↓
E07 Assurance
 ↓
E08 Aggregation
 ↓
E09 Audit / Run Manifest
```

### 9.3 Progressive execution

The user may experience the process as task-oriented steps, while the orchestrator executes the governed stages automatically when prerequisites are satisfied.

No user action can bypass a protected blocker simply by moving to another screen.

---

## 10. Worker model

### 10.1 Dedicated calculation worker

The rebuild shall execute workbook parsing/canonical pipeline work in a dedicated Web Worker where supported.

Purpose:

- keep the UI responsive for production-scale workbooks;
- isolate controlled execution from rendering;
- reduce accidental DOM coupling;
- simplify progress/error messaging.

### 10.2 Worker message contract

The main thread may send only explicit commands such as:

```text
LOAD_WORKBOOK
FINALIZE_MAPPING
APPLY_CORRECTIONS
RUN_PIPELINE
RUN_ASSURANCE_REFRESH
FINALIZE_RUN
GET_TRACE
DISPOSE_RUN
```

Worker responses are versioned envelopes:

```text
{
  contractVersion,
  requestId,
  runDraftId,
  stage,
  status,
  progress,
  payloadRef | payload,
  error
}
```

### 10.3 Fallback

If a browser capability prevents Worker execution, a controlled same-thread adapter may be used only if it invokes the same pipeline API and passes the same regression suite.

---

## 11. Immutable snapshot model

Every controlled stage output is treated as an immutable snapshot.

Core snapshot identities:

```text
sourceFingerprint
intakeSnapshotHash
mappingSnapshotHash
canonicalSnapshotHash
validationSnapshotHash
routingSnapshotHash
calculationSnapshotHash
assuranceSnapshotHash
aggregationSnapshotHash
auditManifestContentHash
```

A new upstream state never mutates an old completed snapshot.

Instead, it creates a new draft lineage.

---

## 12. Application state model

The application state is divided into four classes.

### 12.1 Source state

Contains:

- selected file metadata;
- original workbook `ArrayBuffer`;
- source SHA-256;
- detected template version;
- workbook-preflight result.

Original workbook bytes remain immutable in memory.

### 12.2 Working/review state

Contains:

- mapping draft/final snapshot;
- correction overlay;
- evidence-review overlay where permitted;
- unresolved user confirmations;
- current validation filters;
- current draft revision.

### 12.3 Controlled pipeline state

Contains immutable E01–E09 snapshots and their identities.

The UI may read this state through selectors/view models but may not directly modify it.

### 12.4 Presentation state

Contains:

- active page;
- geography scope;
- structure selection;
- chart filters;
- display units;
- table sorting/pagination;
- report/export selection.

Presentation state never changes controlled KPI truth.

---

## 13. Correction architecture

### 13.1 Original source preservation

The uploaded workbook is never destructively edited in memory.

Corrections are stored as a controlled overlay keyed by lineage such as:

```text
sourceSheet
sourceRowNumber
sourceHeader / controlled field ID
originalValue
correctedValue
reason
correctionTimestamp
```

### 13.2 Correction categories

#### Mapping correction

Affects E02 and therefore invalidates E03–E09.

#### Source-value correction

Affects the earliest stage defined by the dependency policy.

Most source-value changes begin at E03/E04 and invalidate downstream state.

#### Evidence-only assurance review

Only a narrowly governed evidence-status change may begin at E07 if it does not affect eligibility, validation, routing or numeric calculation.

If the evidence field affects eligibility/readiness, invalidation starts at E04 or earlier.

### 13.3 Dependency-policy registry

`pipeline/dependency-policy.js` defines the earliest affected stage for each editable product-layer correction class.

This registry is AMBER architecture configuration and is regression-tested.

It does not redefine methodology; it determines which already-protected stages must be rerun.

### 13.4 No silent correction

Every applied correction must remain visible in correction/audit state.

The product shall never silently “repair” a source value.

---

## 14. Invalidation graph

The frozen invalidation rules are:

```text
Replace workbook
  → invalidate E01–E09 + all prepared views

Change workbook header/sheet interpretation
  → invalidate E02–E09

Change mapping
  → invalidate E03–E09

Change ordinary source/canonical input value
  → invalidate dependency-defined earliest stage through E09

Change validation-governing evidence/eligibility
  → invalidate E04–E09

Change route-governing controlled input
  → invalidate E04/E05–E09 as dependency policy requires

Change numeric calculation input
  → invalidate E04/E05/E06–E09 as dependency policy requires

Change assurance-only evidence verification
  → invalidate E07–E09 only when explicitly safe

Change dashboard/geography/chart/display-unit filter
  → invalidate nothing in E01–E09
```

A stale result is never labeled current after invalidation.

---

## 15. Run lifecycle

Frozen run states:

```text
EMPTY
FILE_SELECTED
PREFLIGHT_COMPLETE
MAPPING_REVIEW
MAPPING_CONFIRMED
PREPARED
VALIDATION_REVIEW
READY_TO_CALCULATE
CALCULATING
ASSURANCE_REVIEW
FINALIZING
COMPLETE
INVALIDATED
FAILED
```

A completed E09 run is immutable.

Any upstream change creates a new draft/run revision.

---

## 16. Prepared product/view-model layer

The product shall not bind UI directly to raw engine snapshots.

A dedicated view-model/query layer transforms immutable controlled truth into presentation-ready structures.

### 16.1 Design rule

View models may:

- join controlled entities;
- group/filter;
- calculate presentation counts;
- convert display units;
- format labels;
- derive chart coordinates;
- organize report sections.

View models may not:

- select a different official route;
- execute an HUF formula;
- alter assurance precedence;
- combine protected buckets with different semantics;
- replace missing with zero;
- perform hidden policy inference.

### 16.2 Frozen view models

#### Run Summary View Model

Provides:

- run ID/status;
- source/template/version identity;
- reporting period;
- result/coverage totals;
- methodology versions;
- certification/release status.

#### Dashboard View Model

Provides:

- KPI cards;
- assurance-aware totals;
- coverage;
- filtered geography/type/route summaries;
- chart-ready data.

#### Geography View Model

Provides:

- hierarchy breadcrumb;
- child scopes;
- parent/child reconciliation;
- scope totals;
- structure membership.

#### Structure View Model

Provides:

- identity/geography/type;
- route/timing;
- calculation explanation;
- daily trace references;
- validation issues;
- assurance/evidence;
- person-day detail.

#### Assurance View Model

Provides:

- five assurance buckets;
- evidence requirements/pending state;
- formal HUF confirmation separately;
- geography/type/route analysis.

#### Validation View Model

Provides:

- issue groups;
- severity;
- controlled scope effect;
- readiness;
- source lineage;
- correction target.

#### Audit View Model

Provides:

- E01–E09 snapshot chain;
- controlled versions;
- hashes;
- audit events;
- privacy/release evidence status.

#### Report View Model

Provides normalized structured sections shared by screen/export/PDF generation.

---

## 17. Geography architecture

The only governed reporting hierarchy is:

```text
Project
└─ PIA
   └─ District
      └─ Block
         └─ GP
            └─ Village
               └─ Structure
```

The product may present navigation top-down as:

```text
Project → District → Block → GP → Village → Structure
```

with PIA available as an explicit filter/context level.

No cluster hierarchy is introduced.

Parent/child results are taken from or reconciled against E08 aggregation truth.

---

## 18. Structure Intelligence architecture

Structure pages are backed by one structure-view query composed from controlled snapshots.

Required components:

- identity panel;
- geography panel;
- validation/readiness panel;
- route/timing panel;
- calculation explanation panel;
- assurance/evidence panel;
- daily-trace panel where applicable;
- person-day detail where applicable;
- technical export/report actions.

### 18.1 Calculation explanation

The explanation service displays existing controlled intermediate values.

It does not re-run the formula independently.

### 18.2 Daily trace

Daily trace uses E06 trace truth.

Charts are visualizations of the trace, not a second simulator.

---

## 19. Assurance & Evidence architecture

### 19.1 E07 remains authoritative

The product shall preserve the five controlled assurance states.

### 19.2 Evidence Review Centre

The evidence service provides queries over:

- evidence requirements;
- evidence references;
- verification state;
- related structure/result;
- assurance consequence.

### 19.3 Formal HUF status

Formal HUF confirmation is a separate field and presentation concept.

No E07 state automatically implies formal HUF certification.

---

## 20. Display-unit architecture

Canonical/result units remain controlled.

Display conversion is isolated in `unit-display-service.js`.

Rules:

- display conversion never changes stored controlled values;
- original unit remains available in technical/audit views;
- exported canonical values retain governed units;
- presentation exports may include selected display units only when metadata states the conversion;
- null remains null through conversion.

---

## 21. Chart architecture

Charts consume prepared view models only.

Required visual families:

- ranked geography bars;
- calculated-vs-accepted dumbbells;
- assurance distribution;
- structure-type heatmap;
- route/assurance heatmap or analytical table;
- WTR-111 daily trace;
- district/block small multiples.

### 21.1 Chart contract

Every analytical chart must carry:

- active scope;
- unit;
- N/coverage where meaningful;
- inclusion/assurance definition;
- source/run context.

### 21.2 Rendering

Prefer native SVG/Canvas generated from prepared data.

No chart may become an independent calculation engine.

---

## 22. Export architecture

`export-service.js` routes a prepared export request to a format adapter.

```text
Prepared Result Package
        ↓
Export Request
  scope + mode + units
        ↓
Export Model
  ├─ CSV writer
  ├─ XLSX writer
  ├─ JSON writer
  └─ ZIP packager
```

### 22.1 Export model

Every export model includes:

- run ID;
- source fingerprint reference;
- product/methodology versions;
- scope/filter context;
- generated timestamp;
- unit metadata;
- assurance/status definitions;
- row/entity membership.

### 22.2 P0 structured exports

- Compact Result CSV/XLSX;
- Management/Reporting Summary XLSX;
- Technical/M&E XLSX;
- Daily Trace CSV/JSON;
- Standard Audit JSON.

### 22.3 P1 export

- Audit Package ZIP;
- bulk report/export ZIP.

### 22.4 XLSX writer

Workbook generation uses a pinned local spreadsheet library through an adapter.

No product module writes XLSX directly outside the export adapter.

---

## 23. PDF/report architecture

Reports are built from structured `ReportViewModel` objects.

```text
Prepared Result Package
        ↓
Report Query
        ↓
Report View Model
        ↓
Layout Components
        ↓
Vector/Text PDF Renderer
        ↓
PDF
```

### 23.1 Report rendering rule

No screenshot or DOM-capture reporting.

Text, tables, headings and vector/chart elements are generated from structured data.

### 23.2 Report modes

- Management
- Technical/M&E

### 23.3 P0 report levels

- Project;
- District;
- Village;
- Structure technical report.

### 23.4 P1 report levels/features

- Block;
- GP;
- bulk ZIP;
- combined PDF.

### 23.5 Shared truth

Screen dashboard, XLSX and PDF consume the same prepared result/view-model definitions wherever their scope is equivalent.

---

## 24. Dependency architecture

### 24.1 Vendor boundary

All third-party runtime dependencies used by the controlled core/export/report path are placed behind adapters and recorded in `vendor/VENDOR_MANIFEST.json`.

The manifest records:

- library;
- pinned version;
- source;
- license;
- integrity/hash;
- purpose;
- adapter using it.

### 24.2 Required dependency classes

The initial architecture anticipates:

- XLSX parser/writer;
- ZIP writer;
- structured/vector PDF renderer;
- optional SVG-to-PDF helper.

Exact pinned versions are frozen during implementation preparation after compatibility/license verification, but runtime CDN fetching is prohibited for these controlled-path dependencies.

### 24.3 No direct vendor coupling

UI and protected engines do not call vendor APIs directly.

All vendor use passes through adapters/services.

---

## 25. Privacy architecture

### 25.1 Local data boundary

Workbook bytes, working rows, canonical tables and participant-level detail remain in browser memory unless the user explicitly downloads an export.

### 25.2 Network boundary

No source workbook/project data is transmitted by core product logic.

### 25.3 URL boundary

Project data is never placed in URL/query/hash state.

### 25.4 Debug boundary

Production builds expose no global debug object containing private source/canonical/calculation state.

### 25.5 Audit boundary

Standard E09 audit export retains the protected privacy-reduction policy.

---

## 26. Error architecture

Errors are classified as:

### User-correctable data errors

Examples:

- mapping conflict;
- invalid field value;
- missing required evidence.

Action:

- route user to Review & Correct;
- preserve prior valid stage snapshots.

### Controlled calculation/blocker states

Examples:

- not-ready route;
- excluded/HOLD;
- rule-scoped blocker.

Action:

- display governed state;
- never convert to generic application crash.

### Application/runtime errors

Examples:

- parser failure;
- module load failure;
- unexpected exception.

Action:

- show explicit failed stage;
- preserve last valid snapshot;
- disable stale-current result;
- allow diagnostic export when safe.

---

## 27. Performance architecture

### 27.1 Worker execution

CPU-heavy intake/pipeline work runs off the rendering thread where supported.

### 27.2 Lazy product modules

PDF/report generation and large technical trace views are loaded only when needed.

### 27.3 Large tables

Structure/validation registers use paging or virtualization.

### 27.4 Prepared-query caching

View-model results may be cached by:

```text
runManifestContentHash
+ scope/filter key
+ display-unit key
+ view-model version
```

Cached presentation state must be discarded when the underlying run hash changes.

### 27.5 Performance budget

A numeric production-scale performance budget will be set using a representative production fixture during implementation preparation.

It must be documented before release acceptance; architecture intentionally does not invent an unsupported threshold now.

---

## 28. Accessibility architecture

P0 workflow requirements:

- semantic headings/landmarks;
- keyboard-accessible controls;
- visible focus;
- accessible labels;
- table headers and captions;
- non-color-only status cues;
- readable responsive layouts;
- chart text summary/data-table fallback for critical analytical views.

---

## 29. Test architecture

Testing is divided into layers.

### 29.1 Layer A — Protected methodology regression

- E01–E09 existing regression suites;
- protected configs/hashes;
- Design-2 formula goldens;
- leap/non-leap goldens.

### 29.2 Layer B — Design-6 logical certification

Must remain:

**154/154 PASS**

including the governed VAL-027 v1.1 positive invariant.

### 29.3 Layer C — Physical XLSX fixtures

All 15 frozen high-risk fixtures are freshly executed in the release environment.

Target:

**15/15 PASS**

### 29.4 Layer D — Product state/invalidation

Tests:

- source replacement;
- mapping change;
- source correction;
- assurance-only refresh;
- stale-result prevention;
- immutable completed run behavior.

### 29.5 Layer E — Prepared-view reconciliation

For golden portfolios:

- dashboard ↔ E08;
- geography ↔ E08;
- structure view ↔ E05/E06/E07;
- assurance view ↔ E07/E08.

### 29.6 Layer F — Export reconciliation

- CSV;
- Management XLSX;
- Technical/M&E XLSX;
- trace;
- audit.

### 29.7 Layer G — PDF/report reconciliation

Structured assertions over:

- run identity;
- scope;
- KPI totals;
- coverage;
- assurance disclosure;
- structure route/calculation values.

### 29.8 Layer H — Browser UAT

Playwright (or governed equivalent) exercises the real application in a permitted browser environment.

### 29.9 Layer I — Deployed GitHub Pages UAT

The actual deployed URL is tested.

This is separate from local browser acceptance.

---

## 30. Release-evidence architecture

The rebuilt release must contain an evidence package such as:

```text
release-evidence/
├─ release-manifest.json
├─ release-sha256.txt
├─ protected-core-manifest.json
├─ methodology-version-manifest.json
├─ design6-logical-result.json
├─ physical-fixtures-result.json
├─ static-architecture-result.json
├─ browser-acceptance-result.json
├─ pages-deployment-result.json
├─ live-workflow-result.json
├─ export-reconciliation-result.json
├─ report-reconciliation-result.json
├─ privacy-result.json
└─ evidence-manifest.json
```

This explicitly fixes the evidence-retention qualification found in v1.0.0.

---

## 31. GitHub Actions architecture

### 31.1 Validation workflow

`validate.yml` shall:

1. verify protected-core hashes;
2. verify vendor manifest;
3. run syntax/static checks;
4. run E01–E09 regressions;
5. run 154 Design-6 logical tests;
6. run 15 physical XLSX fixtures;
7. run product/unit/state tests;
8. run export/report reconciliation;
9. run browser acceptance in CI;
10. generate machine-readable evidence artifacts.

A failed required P0 gate blocks release promotion.

### 31.2 Pages workflow

`pages.yml` deploys only a validated static payload.

After deployment, it triggers or is followed by deployed-site acceptance and retains its result artifact.

---

## 32. Versioning architecture

Independent version identities are retained for:

- product release;
- protected methodology baseline;
- input template/schema;
- controlled configs;
- product view-model schema;
- export schemas;
- report schema/layout version;
- test-contract addenda;
- release-evidence schema.

A product UI release does not imply a methodology version change.

---

## 33. Public status taxonomy

The architecture standardizes these separate statuses:

### Methodology/logical test status

Example:

`Design-6 logical: 154/154 PASS`

### Operational browser status

Example:

`Browser acceptance: PASS`

### Deployment status

Example:

`GitHub Pages deployed acceptance: PASS`

### Controlled assurance status

Example:

`Accepted under controlled methodology`

### Formal HUF governance status

Example:

`Formal HUF confirmation: pending`

They must never be collapsed into one ambiguous “Certified” state.

---

## 34. Architecture Decision Records

### ADR-001 — Static/no-backend application

**Decision:** Keep core product fully static/browser-local.  
**Reason:** privacy, deterministic deployment, existing lineage.  
**Status:** FROZEN.

### ADR-002 — Protected-core isolation

**Decision:** E01–E09 and controlled configs live behind a protected-core boundary.  
**Reason:** prevent methodology drift.  
**Status:** FROZEN.

### ADR-003 — Single pipeline orchestrator

**Decision:** Product modules do not invoke individual engines directly.  
**Reason:** one controlled execution path and clear invalidation.  
**Status:** FROZEN.

### ADR-004 — Immutable stage snapshots

**Decision:** Stage outputs are immutable; upstream changes create new draft lineage.  
**Reason:** auditability and stale-result prevention.  
**Status:** FROZEN.

### ADR-005 — Correction overlay

**Decision:** Preserve original workbook bytes; corrections exist as auditable overlays.  
**Reason:** source provenance and reversible correction.  
**Status:** FROZEN.

### ADR-006 — Dependency-based invalidation

**Decision:** Corrections rerun only the governed affected stages; presentation filters rerun none.  
**Reason:** correctness + performance.  
**Status:** FROZEN.

### ADR-007 — Worker execution boundary

**Decision:** Prefer dedicated Web Worker for intake/calculation pipeline.  
**Reason:** UI responsiveness and controlled separation.  
**Status:** FROZEN with tested same-thread fallback.

### ADR-008 — Prepared view-model layer

**Decision:** Dashboard/report/export consume prepared truth, not raw engine internals.  
**Reason:** reconciliation and product maintainability.  
**Status:** FROZEN.

### ADR-009 — Governed geography hierarchy

**Decision:** Structure → Village → GP → Block → District → PIA → Project only.  
**Reason:** Design-5/E08 contract.  
**Status:** FROZEN.

### ADR-010 — Shared report/export truth

**Decision:** Screen/XLSX/PDF use shared prepared view models.  
**Reason:** prevent cross-surface drift.  
**Status:** FROZEN.

### ADR-011 — Structured PDF

**Decision:** Generate text/vector structured PDFs; no screenshot reporting.  
**Reason:** quality, auditability and accessibility.  
**Status:** FROZEN.

### ADR-012 — Local pinned dependencies

**Decision:** Controlled-path third-party libraries are vendored/pinned and adapter-isolated.  
**Reason:** deterministic/offline execution.  
**Status:** FROZEN.

### ADR-013 — No production debug global

**Decision:** Production project state is never exposed via global debug objects.  
**Reason:** privacy.  
**Status:** FROZEN.

### ADR-014 — Separate certification/status concepts

**Decision:** logical, browser, deployment, assurance and formal HUF statuses remain distinct.  
**Reason:** prevent overclaiming.  
**Status:** FROZEN.

### ADR-015 — Release evidence is a first-class artifact

**Decision:** Machine-readable CI/browser/deployment evidence ships with every release.  
**Reason:** remove v1.0.0 evidence-retention gap.  
**Status:** FROZEN.

### ADR-016 — No normal engine-strip UI

**Decision:** Engines are technical internals, not the primary navigation.  
**Reason:** product usability.  
**Status:** FROZEN.

### ADR-017 — Display units are presentation-only

**Decision:** Unit selection never mutates controlled result truth.  
**Reason:** protect E06/E08 semantics.  
**Status:** FROZEN.

### ADR-018 — Completed run immutability

**Decision:** Completed E09 runs cannot be edited in place.  
**Reason:** audit identity and reproducibility.  
**Status:** FROZEN.

---

## 35. Architecture-to-PRD component map

| PRD group | Primary architecture components |
|---|---|
| CORE | protected-core, pipeline, audit/status taxonomy |
| IN | adapters/workbook, preflight-service, source-state |
| MAP | mapping-state, pipeline orchestrator, mapping UI |
| PREP | protected E03, correction-state, preparation view |
| VAL | protected E04/E06/E08 QA, validation view/service |
| CALC | protected E05/E06, orchestrator, worker |
| RES | dashboard view-model, selectors, chart UI |
| GEO | geography service/view-model |
| STR | structure service/view-model, trace views |
| ASSR | protected E07, evidence service/view-model |
| EXP | export-service and format adapters |
| RPT | report-service, report view model, renderer |
| AUD | protected E09, audit view-model, evidence package |
| TPL | samples/template manager/help |
| PRIV | browser-local adapters, audit privacy, vendor boundary |
| NFR | worker, static deployment, performance/accessibility |
| ACC | test/evidence architecture |
| FUT | explicitly outside initial implementation |

---

## 36. Implementation sequencing constraint

Phase 7 implementation must follow architecture boundaries.

Recommended batch order:

1. repository shell + protected-core manifest;
2. state/orchestrator/worker foundation;
3. intake/preflight/mapping;
4. correction/validation;
5. result view models;
6. geography/structure;
7. assurance/evidence;
8. exports;
9. PDF reporting;
10. audit/help/privacy;
11. browser/deployment evidence integration.

Each batch must update the living Master Plan with changed files and tests.

---

## 37. Architecture acceptance criteria

Architecture v1.0 is accepted when:

- all 154 PRD requirements have an architecture owner/component mapping;
- protected E01–E09 boundary is explicit;
- state and invalidation rules are explicit;
- correction behavior is explicit;
- view-model responsibility is explicit;
- geography hierarchy is frozen;
- export/report generation path is defined;
- privacy/no-backend boundary is defined;
- dependency/vendor strategy is defined;
- test/release-evidence architecture is defined;
- deployment and browser acceptance are separately defined;
- no production implementation has yet modified protected methodology.

---

## 38. Frozen architecture status

**APPROVED TECHNICAL ARCHITECTURE BASELINE v1.0**

Controlled-methodology impact:

**NONE**

Architecture classification:

**AMBER product/integration architecture around a RED protected methodology core**

---

## 39. Next phase

**Phase 6 — Original HUF UI/UX Design**

The UI/UX phase shall design the screens, information hierarchy, navigation, responsive layouts, chart grammar, tables, validation/correction interactions and report-centre interactions defined by PRD v1.0 and this architecture.

No product design may expose or encourage direct mutation of protected methodology.

No production rebuild coding begins until the UI/UX baseline is approved/frozen.
