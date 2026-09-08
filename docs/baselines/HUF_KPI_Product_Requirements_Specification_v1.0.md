---
title: "HUF Supply-Side KPI Calculator — Product Requirements Specification"
version: "1.0"
date: "2026-09-06"
status: "FROZEN"
governance: "Product-layer specification; protected E01–E09 methodology unchanged"
---

# HUF Supply-Side KPI Calculator — Product Requirements Specification v1.0

## 1. Freeze statement

This PRD freezes the product requirements for the clean rebuild of the HUF Supply-Side KPI Calculator.

It is derived from the historical/final HUF audit, the frozen Gap/Recovery/Productization Matrix, the protected final v1.0.0 release, the Village Water Budget Intelligence product-reference review, and the frozen Design-6 certification baseline.

The controlled methodology is **not redesigned by this PRD**.

> **E01–E09 calculate and preserve controlled truth. The rebuilt product helps users prepare, correct, understand, filter, analyse, export, report and audit that truth.**

## 2. Phase-numbering clarification

The older planning section of the master rebuild document originally labelled Product Requirements as “Phase 5.” After the completed certification-closure work, the governed restart sequence now treats this as:

**Phase 4 / PRD — Product Requirements Specification**

For all work after this freeze, the current governed sequence supersedes the older phase label.

## 3. Product purpose

The product shall provide a controlled, browser-local workflow for HUF supply-side KPI calculation and reporting while preserving the audited E01–E09 methodology. It shall make the controlled method usable by programme, technical and M&E users without requiring them to interact with internal engine architecture.

Primary outcomes:
- reliable controlled workbook intake and correction;
- transparent route/calculation/assurance interpretation;
- geography and structure-level analytical visibility;
- management and technical reporting;
- reproducible audit/release evidence;
- no methodology drift caused by product presentation.

## 4. Target users

| User | Primary need | Product emphasis |
|---|---|---|
| Programme / Project Manager | Understand KPI progress, coverage, geography and assurance | Results dashboard, geography explorer, management reports |
| Technical / Soil & Water Engineer | Verify structure route, calculation basis and daily trace | Structure detail, validation, calculation explanation, trace |
| M&E / MIS / Data Manager | Prepare workbook, correct data, reconcile totals and export evidence | Preflight, mapping, correction centre, exports, audit |
| Evidence / Assurance Reviewer | Identify pending evidence and assurance effects | Evidence Review Centre, assurance analytics |
| Auditor / Methodology Reviewer | Reproduce lineage and verify controlled versions | Audit & Methodology, manifests, hashes, technical exports |

A single person may perform multiple roles. The first release does not require login/role-based authorization.

## 5. Protected methodology boundary

### Product layer may change
- navigation and screen layout;
- wording that improves clarity without changing controlled meaning;
- filters over prepared truth;
- charts and visual grammar;
- export/report presentation;
- responsive/accessibility behavior;
- workflow orchestration that respects controlled state/invalidation contracts.

### Product layer may not silently change
- input schema interpretation;
- canonicalisation/null policy;
- Design-4 validation rules/scope effects;
- E05 routing;
- E06 formulas/person-day logic/full precision;
- E07 assurance semantics;
- E08 aggregation/status buckets;
- E09 audit semantics/privacy;
- frozen goldens/fixtures/expected outcomes.

Any such change is a RED controlled-methodology change and requires a new governed version plus regression/certification.

## 6. Primary workflow

The frozen normal-user workflow is:

**Upload → Workbook Preflight → Mapping Review → Data Preparation → Validation & Correction → Calculate → Results → Geography / Structure Analysis → Assurance & Evidence → Reports & Exports → Audit & Methodology**

The system may execute E01–E09 progressively behind this workflow, but engine numbering is not normal navigation.

## 7. Information architecture / product areas

Primary navigation:
1. **Home / Upload**
2. **Review & Correct** — Preflight, Mapping, Preparation, Validation
3. **Results** — executive dashboard and geography
4. **Structures** — register and structure detail/trace
5. **Assurance & Evidence**
6. **Reports & Exports**
7. **Audit & Methodology**

Advanced technical detail is progressively disclosed inside these areas.

## 8. Priority definitions

- **P0 — MUST:** required for the clean rebuilt release to be accepted.
- **P1 — SHOULD:** planned for the rebuilt release where feasible; may be deferred only through an explicit documented decision.
- **P2 — LATER:** deliberately outside the initial rebuild release.

Requirement count: **154**  
P0: **134** · P1: **15** · P2: **5**

## 9. Functional and non-functional requirements

### 9.1 Core governance

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-CORE-001` | P0 | **Protect E01–E09 methodology** | The product shall treat the protected E01–E09 engines and controlled configurations as the calculation authority. Product/UI work shall not silently alter schema interpretation, canonicalisation, validation, routing, formulas, assurance, aggregation or audit semantics. | A code/config comparison against the protected baseline identifies no uncontrolled changes to E01–E09 or controlled configs. Any RED change requires an explicit governed methodology version. | Frozen Matrix: Controlled methodology core; Design-6 Certification Baseline |
| `PRD-CORE-002` | P0 | **Calculate truth once** | All dashboards, filters, charts, exports and reports shall consume prepared E06–E09 / Design-5 truth rather than recalculating official KPI methodology. | Changing a presentation filter or report scope does not invoke or alter E05/E06/E07 routing/calculation truth; totals reconcile to the prepared result package. | Frozen Matrix: Non-negotiable rule |
| `PRD-CORE-003` | P0 | **Null is not zero** | Missing, HOLD, excluded and not-calculated results shall remain distinct from numeric zero throughout product views and exports. | Golden cases containing null/HOLD/excluded states never display or export those states as 0 unless the controlled source value is actually zero. | Frozen Matrix: Canonicalization/null-vs-zero; Full-precision/null policy |
| `PRD-CORE-004` | P0 | **Preserve full precision** | Official calculation truth shall retain protected full precision. Rounding is presentation-only. | Dashboard/export/report displayed values reconcile to full-precision source truth within controlled tolerance; no intermediate product-layer rounding affects totals. | Frozen Matrix: Full-precision/null policy |
| `PRD-CORE-005` | P0 | **Use controlled assurance terminology** | Public UI shall use “Accepted under controlled methodology” for the accepted assurance bucket and shall keep formal HUF confirmation separate. | No user-facing result label says “certified water” or “HUF certified” unless an explicit formal HUF confirmation field supports that statement. | Frozen Matrix: Public assurance wording |
| `PRD-CORE-006` | P0 | **Expose controlling versions** | Every completed run shall expose the input-template version, methodology/config versions and run identity in a concise Run Summary, with detailed hashes under Advanced/Audit. | A user can identify which controlled versions produced a result without opening source code. | E09 lineage; Frozen Matrix: E09 audit JSON |
| `PRD-CORE-007` | P0 | **Synthetic data disclosure** | All sample/golden/synthetic workbooks and resulting screens shall be clearly marked as synthetic and not for project reporting. | Loading a synthetic sample produces a persistent visible synthetic-data badge/disclosure in Results and exports. | Frozen Matrix: Sample workbooks |
| `PRD-CORE-008` | P0 | **No engine-strip navigation** | Normal product navigation shall be task-oriented rather than “Engine 1…Engine 9 locked/unlocked.” | Primary navigation contains user tasks/product areas and does not require users to understand engine numbering. | Frozen Matrix: Historical engine-strip navigation — DO NOT USE |
| `PRD-CORE-009` | P0 | **VAL-027 positive timing invariant** | For every structure/run exactly one resolved timing method shall be active; a structure-level timing override supersedes the project default. | The Design-6 VAL-027 v1.1 invariant test passes for all applicable structures and no dual active timing state reaches routing. | HUF-D6-VAL027-POSITIVE-INVARIANT-v1.1 |
| `PRD-CORE-010` | P0 | **Separate logical certification from operational evidence** | Product/release documentation shall distinguish methodology/logical certification, browser acceptance, deployment acceptance and formal HUF governance. | Release status surfaces never collapse these states into one ambiguous “certified” label. | Design-6 Certification Baseline; release-evidence finding |

### 9.2 Input, template and preflight

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-IN-001` | P0 | **Controlled XLSX upload** | The product shall accept the controlled HUF supply-side `.xlsx` workbook through file picker and drag/drop. | A valid controlled workbook can be selected both ways; unsupported formats are rejected with clear guidance. | Final v1.0.0 upload flow; Frozen Matrix: Workbook local privacy |
| `PRD-IN-002` | P0 | **Local-browser processing disclosure** | The upload surface shall clearly state that source workbook processing occurs locally in the browser and is not uploaded to a backend. | Privacy message is visible before calculation begins. | Frozen Matrix: Workbook local privacy |
| `PRD-IN-003` | P0 | **Selected-file summary** | After file selection, show file name, size, detected workbook/template version and basic readiness. | Selected-file card updates deterministically and can be cleared/replaced. | Final v1.0.0 upload findings |
| `PRD-IN-004` | P0 | **Workbook Preflight** | Before mapping/calculation, show a concise preflight covering sheet inventory, recognized controlled sheets, row counts, formula presence, reporting period and key workbook metadata. | Preflight is available for every selected workbook and distinguishes errors, warnings and information. | Frozen Matrix: Workbook preflight UX — RECOVER |
| `PRD-IN-005` | P0 | **Source fingerprint** | The preflight/run shall retain the protected source workbook fingerprint and intake lineage. | Run Summary/Audit can show the source SHA-256/session identity while the main UI may abbreviate it. | Frozen Matrix: Source fingerprint / intake lineage |
| `PRD-IN-006` | P0 | **Controlled blank template download** | The product shall provide the active blank controlled HUF input template matched to the supported schema version. | User can download `HUF-SS-INPUT-v1.1` (or the governed successor) from the upload/help surface; the template contains the controlled sheets/headers and no hidden calculation formulas. | Frozen Matrix: Controlled blank input template — RECOVER |
| `PRD-IN-007` | P0 | **Template-version compatibility** | The product shall detect template/schema version mismatch and explain whether the workbook is supported, migratable or blocked. | Unsupported versions cannot be silently interpreted as the current schema. | Frozen Matrix: Controlled blank input template; Design-3 schema |
| `PRD-IN-008` | P0 | **Sample data action** | The upload surface shall retain a “Try sample data” path using protected synthetic golden workbooks. | Sample loading requires no manual file editing and is visibly marked synthetic. | Frozen Matrix: Sample workbooks — KEEP |
| `PRD-IN-009` | P1 | **Preflight details export** | Advanced users should be able to export or copy a concise workbook-preflight diagnostic summary. | Preflight summary can be retained for support without exposing raw workbook rows by default. | Historical E01 preflight capability |
| `PRD-IN-010` | P0 | **Replace/reset workbook safely** | Replacing the source workbook shall invalidate all dependent mapping/canonical/calculation/result state. | No result from a prior source workbook remains active after source replacement. | E01/E02 state lineage; non-regression requirement |

### 9.3 Schema mapping

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-MAP-001` | P0 | **Preserve controlled mapping order** | Adaptive mapping shall preserve the controlled exact → header/alias → fuzzy suggestion → manual confirmation behavior. | Mapping regression produces the protected mapping outcomes for golden inputs. | Frozen Matrix: Adaptive schema mapping — IMPROVE |
| `PRD-MAP-002` | P0 | **Exception-first mapping review** | The normal mapping screen shall focus first on unmapped, conflicted or confirmation-required fields rather than presenting all 147 fields equally. | A clean workbook can be confirmed quickly; exceptional mappings are visually prioritized. | Frozen Matrix: Adaptive schema mapping |
| `PRD-MAP-003` | P0 | **Explicit confirmation** | Mappings requiring controlled confirmation shall not be silently finalized. | Calculate cannot proceed while required mapping confirmations remain unresolved. | E02 mapping contract |
| `PRD-MAP-004` | P0 | **Conflict blocking** | Mapping conflicts shall block dependent processing until resolved. | Conflicted field shows candidate sources and a clear resolution action. | E02 mapping contract |
| `PRD-MAP-005` | P0 | **Manual override** | Authorized user workflow shall permit controlled manual mapping override with lineage retained. | The final mapping snapshot records the chosen source and mapping method. | E02 mapping contract |
| `PRD-MAP-006` | P1 | **Advanced mapping diagnostics** | Confidence scores, raw mapping method IDs and technical candidate detail should be available under Advanced rather than dominating the normal UI. | Advanced details can be expanded per field without changing the mapping result. | Frozen Matrix: mapping presentation |
| `PRD-MAP-007` | P0 | **Mapping snapshot and invalidation** | Finalized mapping shall produce a deterministic mapping snapshot; mapping changes shall invalidate downstream prepared/calculated state. | Changing one mapping prevents stale downstream results from being presented as current. | E02/E03 lineage |

### 9.4 Data preparation/canonicalisation

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-PREP-001` | P0 | **Protected canonicalisation** | Canonical date/type/unit/null conversions shall use the protected HUF policy without product-layer reinterpretation. | Golden canonical snapshots remain unchanged for the same source/mapping/config versions. | Frozen Matrix: Canonicalization/null-vs-zero — KEEP |
| `PRD-PREP-002` | P0 | **Data Preparation summary** | After mapping, present a plain-language summary of canonicalisation actions, conversions, blanks and preparation issues. | User can see what changed in representation without needing field IDs/hashes. | Frozen Matrix: Data preparation UX — RECOVER |
| `PRD-PREP-003` | P0 | **Source lineage retained** | Prepared values shall retain source sheet/header/row/mapping lineage for correction and audit. | A validation issue can navigate back to its source location. | E03 canonicalisation lineage |
| `PRD-PREP-004` | P0 | **No silent coercion** | Unparseable or unsupported source values shall be surfaced as preparation/validation issues rather than silently coerced to plausible values. | Known malformed golden cases are flagged and do not silently become valid canonical values. | E03 policy; Design-4 validation |
| `PRD-PREP-005` | P1 | **Preparation details** | Advanced users should be able to inspect field-level conversion/provenance detail. | Technical view exposes source value, canonical value, unit conversion and lineage where policy permits. | Historical E03 capability |

### 9.5 Validation & Correction

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-VAL-001` | P0 | **Protect 95-rule validation contract** | The product shall execute/preserve all governed Design-4 validation rules at their assigned E04/E06/E08 stages. | Design-6 95/95 rule-linked tests remain PASS after rebuild. | Frozen Matrix: Validation rulebook — KEEP |
| `PRD-VAL-002` | P0 | **Validation & Correction Centre** | Provide a dedicated correction workspace for unresolved validation findings. | User can filter, inspect and resolve issues without navigating raw engine screens. | Frozen Matrix: Validation & Correction Centre — RECOVER |
| `PRD-VAL-003` | P0 | **Issue grouping** | Group issues by meaningful domain: workbook/control, structure/technical, catchment/rainfall/hydro, cascade/network, evidence, silt and person-days. | Every validation issue appears in at least one clear user-facing group. | Frozen Matrix: correction-centre grouping |
| `PRD-VAL-004` | P0 | **Source location** | Each correctable issue shall show its affected record, field and workbook source location where available. | User can identify the exact source cell/row context without inspecting hashes. | E03 lineage; E04 issue registry |
| `PRD-VAL-005` | P0 | **Scope isolation** | The UI shall explicitly show whether an issue blocks the workbook, a record/structure, a series/network, person-day record or another controlled scope. | Unaffected valid scopes remain calculable when the protected rulebook allows it. | Frozen Matrix: Scope isolation — KEEP |
| `PRD-VAL-006` | P0 | **Readiness states** | Expose controlled readiness in plain language while retaining underlying machine state. | User can distinguish ready, warning/review, blocked, excluded/HOLD and downstream-deferred states. | Design-4 readiness contract |
| `PRD-VAL-007` | P0 | **Warning behavior** | Warnings shall not be treated as blockers where the controlled rule permits calculation. | Golden warning cases calculate and propagate the expected warning assurance state. | Design-4/Design-5 contracts |
| `PRD-VAL-008` | P0 | **Issue resolution refresh** | After source correction or approved evidence update, only the necessary dependent pipeline state shall be invalidated/re-run according to architecture rules. | No stale issue/result remains marked current after a governing source change. | State/invalidation requirement |
| `PRD-VAL-009` | P1 | **Advanced rule detail** | Rule IDs, expected scope, severity and technical explanation shall be available under Advanced. | Technical user can trace an issue to the controlled rulebook without cluttering normal correction UI. | Frozen Matrix: technical codes Advanced |
| `PRD-VAL-010` | P0 | **Validation summary** | Provide counts by severity/readiness/scope and a clear ‘what can calculate now’ summary. | Summary reconciles to the issue registry and scoped readiness. | Final validation UX gap |
| `PRD-VAL-011` | P1 | **Issue-register export** | Allow export of the validation issue register for M&E/support follow-up. | Export includes rule, affected entity/scope, severity, status and source location while respecting privacy rules. | Design-5 / audit productization |
| `PRD-VAL-012` | P0 | **No forced pass** | The product shall never alter controlled expected outcomes or hide unresolved findings merely to allow a run to appear successful. | Regression/UAT evidence retains FAIL/NOT VERIFIED states honestly when they occur. | Design-6 governance |

### 9.6 Routing and calculation

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-CALC-001` | P0 | **Official routing only** | E05 shall remain the sole official route-selection authority; unresolved routes shall not be guessed by the UI. | Every calculated structure has exactly one controlled route or an explicit unresolved/excluded/HOLD state. | Frozen Matrix: Official routing — KEEP |
| `PRD-CALC-002` | P0 | **Plain-language route reason** | Before/after calculation, users shall be able to see the route family, timing basis and main eligibility reason in plain language. | Structure detail reconciles route display to the controlled route ID. | Frozen Matrix: Route UX — RECOVER |
| `PRD-CALC-003` | P0 | **Protected formula execution** | E06 formula catalog execution shall remain unchanged by product-layer code. | 29/29 formula golden tests pass after rebuild. | Frozen Matrix: Calculation formulas — KEEP |
| `PRD-CALC-004` | P0 | **Calculation progress** | Provide a concise calculation progress/status surface after validation confirmation. | User sees when calculation, assurance, aggregation and audit finalization complete or fail. | Final progressive workflow |
| `PRD-CALC-005` | P0 | **Run finalization** | A completed calculation shall produce a new governed run identity and E09 audit manifest. | Results are not presented as final/current until the run finalization chain completes. | E09 contract |
| `PRD-CALC-006` | P0 | **No formula editing in normal UI** | Normal users shall not be able to alter controlled formulas, route tables or validation policies through dashboard/settings controls. | No standard UI control mutates controlled methodology configuration. | Protected methodology boundary |

### 9.7 Results dashboard

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-RES-001` | P0 | **Executive Results dashboard** | Provide a management-oriented dashboard sourced from prepared E08/Design-5 result views. | Dashboard loads after successful run finalization and reconciles to the project aggregation package. | Frozen Matrix: Project dashboard — IMPROVE |
| `PRD-RES-002` | P0 | **Primary KPI cards** | Results shall clearly separate KPI 1.1.1, KPI 1.1.2, lined farm-pond component and KPI 1.2.1 person-days where present. | Each KPI card shows value, unit, coverage and included assurance buckets. | E06/E08 result families |
| `PRD-RES-003` | P0 | **Assurance-aware totals** | Dashboard shall show accepted, provisional/evidence-pending, calculated-warning, not-calculated and excluded/HOLD states without mixing them. | Bucket totals reconcile exactly to E08. | Frozen Matrix: Status-segregated aggregation — KEEP |
| `PRD-RES-004` | P0 | **Calculated Total semantics** | If a ‘Calculated Total’ is shown, it shall equal accepted + provisional + warning, not a ‘certified total’. | Displayed total and label match the frozen aggregation semantics. | E08 aggregation contract |
| `PRD-RES-005` | P0 | **Coverage indicators** | Show structure/result coverage counts alongside numeric totals. | Users can see calculated, not-calculated, excluded/HOLD and evidence-pending counts for the current scope. | E08 coverage / Design-5 |
| `PRD-RES-006` | P0 | **Presentation filters** | Dashboard filters shall include geography, KPI/result family, structure type/subtype, official route and assurance state. | Applying filters changes only the prepared view and not E05–E09 truth. | Frozen Matrix: Filters — ADD |
| `PRD-RES-007` | P0 | **Filter context** | Every analytical view shall display active scope/filter context and relevant N/coverage. | Export/report generated from a filtered view records that scope explicitly. | Product analytics discipline |
| `PRD-RES-008` | P0 | **Display-unit selector** | Water-volume views shall support presentation-only unit selection including m³, thousand m³, million m³/MCM, BL and governed HUF reporting units where applicable. | Changing display unit does not change stored result truth; conversion is deterministic. | Frozen Matrix: Display units — ADD |
| `PRD-RES-009` | P0 | **HUF-specific chart suite** | Provide charts appropriate to HUF truth: ranked geography bars, calculated-vs-accepted dumbbells, assurance distribution, structure-type/route heatmaps, and structure daily trace. | Each chart reconciles to prepared values and includes scope/coverage/source context. | Frozen Matrix: Charts / visual grammar — ADD |
| `PRD-RES-010` | P1 | **Small-multiple portfolio views** | Provide small-multiple comparison views across district/block for selected KPI/assurance measures. | Panels use a consistent scale where comparison requires it and disclose missing scopes. | VWB product pattern adapted to HUF; no VWB methodology |
| `PRD-RES-011` | P0 | **No hidden excluded/HOLD data** | Excluded, HOLD and not-calculated entities shall remain discoverable from Results rather than disappearing from totals silently. | User can open the relevant list and reason/status for every non-calculated entity. | E05/E08 state semantics |
| `PRD-RES-012` | P0 | **Drill-through from summary** | Summary cards/charts shall permit drill-through to the underlying geography/structure set. | Drill-through result count/totals reconcile to the originating summary element. | Productization requirement |

### 9.8 Geography Explorer

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-GEO-001` | P0 | **Frozen reporting hierarchy** | Expose the governed hierarchy Structure → Village → GP → Block → District → PIA → Project. | No VWB cluster hierarchy is introduced into HUF. | Frozen Matrix: Reporting hierarchy; VWB cluster — DO NOT USE |
| `PRD-GEO-002` | P0 | **Geography Explorer** | Provide Project → District → Block → GP → Village navigation with structure drill-down and PIA filtering. | Users can navigate to each governed level supported by the current result package. | Frozen Matrix: Reporting hierarchy — ADD |
| `PRD-GEO-003` | P0 | **Breadcrumb/current scope** | The current hierarchy scope shall remain visible through breadcrumb or equivalent navigation. | User can return to parent scopes without losing run context. | Product navigation requirement |
| `PRD-GEO-004` | P0 | **Parent-child reconciliation** | Child geography totals shall reconcile to the protected parent aggregation according to assurance/status rules. | Automated acceptance checks prove reconciliation for golden portfolios. | E08 hierarchy |
| `PRD-GEO-005` | P0 | **Geography summaries** | At each level show KPI totals, assurance distribution, structure coverage and leading structure types/routes. | Values reconcile to the current filtered aggregation scope. | Frozen Matrix: Project dashboard / geography drill-down |
| `PRD-GEO-006` | P0 | **Scoped structure list** | Every geography scope shall provide a structure/result register for its contributing and non-contributing structures. | List includes status, route, assurance and relevant result values. | E08/Design-5 prepared results |

### 9.9 Structure Intelligence

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-STR-001` | P0 | **Structure Register** | Provide a searchable/filterable register of all controlled structures in the run. | Register supports geography, type, route, KPI and assurance filters and includes non-calculated/excluded/HOLD structures. | Frozen Matrix: structure analytics — ADD |
| `PRD-STR-002` | P0 | **Structure identity** | Structure detail shall show controlled identity, intervention/type/subtype, geography and key technical metadata. | Displayed identity reconciles to the canonical structure record. | Design-3/5 structure entity |
| `PRD-STR-003` | P0 | **Route and timing detail** | Structure detail shall show KPI family, controlled route ID/name, timing method, eligibility and plain-language route reason. | Display matches E05 routing snapshot. | Frozen Matrix: Route UX — RECOVER |
| `PRD-STR-004` | P0 | **Calculation explanation** | For calculated structures show the controlled basis: eligible capacity, catchment/runoff basis where applicable, rainfall, infiltration, evaporation, silt/capacity adjustments, result and QA reconciliation. | Explanation values reconcile to E06 full-precision truth and do not invent unavailable inputs. | Frozen Matrix: Structure calculation explanation — RECOVER |
| `PRD-STR-005` | P0 | **Daily WTR-111 trace** | For applicable WTR-111 structures provide the protected daily calculation trace as table and analytical chart. | Trace displays date, rainfall/input, storage states, infiltration, evaporation, overflow and controlled result components available in E06. | Frozen Matrix: Daily calculation trace — RECOVER |
| `PRD-STR-006` | P0 | **Structure validation history/current issues** | Structure detail shall surface current validation findings and readiness relevant to that structure. | Issue count/details reconcile to the validation registry. | Validation productization |
| `PRD-STR-007` | P0 | **Structure assurance/evidence** | Structure detail shall show assurance state, evidence requirements, verified/pending evidence and formal HUF confirmation separately. | Assurance presentation reconciles to E07 and never rewrites E06 result. | Frozen Matrix: Evidence Review Centre |
| `PRD-STR-008` | P1 | **Network/cascade context** | Where a structure participates in controlled cascade/network logic, show upstream/downstream linkage and affected catchment context. | Displayed network relationships reconcile to controlled cascade records. | Design-4 network validation / input schema |
| `PRD-STR-009` | P0 | **Person-day detail** | Where person-day records are associated, provide a technical detail view explaining the controlled source/norm/result basis while respecting privacy. | Detail reconciles to E06 person-day truth and standard audit privacy rules. | E06 person-days; E09 privacy |
| `PRD-STR-010` | P0 | **Structure technical export/report** | A structure detail shall support technical PDF and applicable trace CSV/JSON export. | Exported values reconcile exactly to the displayed structure/run truth. | Frozen Matrix: structure technical PDF / daily trace |

### 9.10 Assurance & Evidence

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-ASSR-001` | P0 | **Protect five assurance states** | Retain the five governed assurance states and precedence without product-layer remapping. | Design-5/E07 assurance tests remain PASS. | Frozen Matrix: Assurance states — KEEP |
| `PRD-ASSR-002` | P0 | **Evidence Review Centre** | Provide a dedicated workspace for evidence-pending and evidence-related assurance review. | User can filter by evidence status/type, geography, structure, KPI and assurance state. | Frozen Matrix: Evidence Review Centre — RECOVER |
| `PRD-ASSR-003` | P0 | **Evidence requirements and references** | Show required evidence types, availability/verification status, reference/register information and related entity. | Displayed evidence reconciles to controlled evidence records/E07 snapshot. | E07 evidence model |
| `PRD-ASSR-004` | P0 | **Assurance-only refresh boundary** | Where architecture permits an evidence-only assurance refresh, it shall not recalculate or rewrite E06 numeric truth. | Changing evidence state can alter E07/E08/E09 downstream state only according to the governed dependency model. | Frozen Matrix: Evidence Review Centre; E07 boundary |
| `PRD-ASSR-005` | P0 | **Formal HUF confirmation separate** | Formal HUF confirmation/status shall be a separate field from controlled-method acceptance. | No assurance state is automatically converted into formal HUF certification. | E09 governance separation; Frozen terminology correction |
| `PRD-ASSR-006` | P0 | **Assurance analytics** | Provide assurance distribution by geography, structure type, route and KPI family. | Counts/values reconcile to E07/E08 prepared result buckets. | Frozen Matrix: Assurance analytics — ADD |
| `PRD-ASSR-007` | P0 | **Pending-evidence drill-down** | From any assurance summary, users shall be able to open the underlying evidence-pending structures/records. | Drill-down totals reconcile to the assurance summary. | Productization requirement |

### 9.11 Exports

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-EXP-001` | P0 | **Compact Result export** | Implement the Design-5 Compact Result export in CSV and XLSX (JSON may remain available for technical use). | Export schema/value/status fields reconcile to the frozen Design-5 contract. | Design-5 EXP-001; Frozen Matrix: Compact Result CSV/XLSX |
| `PRD-EXP-002` | P0 | **Reporting Summary / Management XLSX** | Provide a multi-sheet management workbook containing run summary, KPI/geography summaries, assurance/coverage, structure register and methodology/version notes. | Workbook totals reconcile to E08/Design-5 truth and clearly state included assurance buckets. | Design-5 EXP-002; VWB export pattern adapted to HUF |
| `PRD-EXP-003` | P0 | **Technical/M&E XLSX** | Provide a multi-sheet technical/M&E workbook with structure-level result detail, routes, validation, assurance/evidence, hierarchy and technical trace references. | Workbook preserves IDs/statuses and reconciles to the run result package. | Frozen Matrix: Technical/M&E XLSX — ADD |
| `PRD-EXP-004` | P0 | **Daily Trace export** | Provide CSV/JSON export of applicable E06 daily traces. | Trace row count and values reconcile to the protected daily calculation trace. | Design-5 EXP-004 |
| `PRD-EXP-005` | P0 | **Standard Audit JSON** | Retain the privacy-reduced E09 audit JSON download. | Audit JSON passes E09 schema/privacy tests and omits prohibited raw source data. | Frozen Matrix: E09 audit JSON — KEEP |
| `PRD-EXP-006` | P1 | **Audit Package ZIP** | Provide the governed audit-package export containing permitted manifest/events/results/config-version evidence. | Package content manifest/hash reconciles to the governed run and privacy policy. | Design-5 EXP-003; Frozen Matrix: Audit Package ZIP |
| `PRD-EXP-007` | P0 | **Export scope disclosure** | Every export shall state whether it represents the full run or an active filtered scope. | Export metadata records project/run ID, hierarchy/filter scope, generated time and controlling versions. | Prepared-view reporting discipline |
| `PRD-EXP-008` | P0 | **Status and unit preservation** | Exports shall preserve assurance/readiness/status fields and distinguish canonical/result units from display units. | No status is inferred from blank numeric values; unit metadata is explicit. | Null/status/unit rules |
| `PRD-EXP-009` | P0 | **No screenshot-based exports** | Structured exports shall be generated from prepared result models, not from dashboard screenshots or DOM scraping. | Export content remains correct even if dashboard layout changes. | Frozen Matrix: Screenshot-based reporting — DO NOT USE |
| `PRD-EXP-010` | P1 | **Bulk export bundle** | Provide a bulk ZIP option for selected report/export sets where practical. | Bundle includes manifest listing scope and included files. | Frozen Matrix: bulk reporting |

### 9.12 PDF Report Centre

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-RPT-001` | P0 | **Report Centre** | Provide a report centre with hierarchy level, subject/mode and scope selection. | User can see exactly what report will be generated before generation. | Frozen Matrix: Report Centre — ADD |
| `PRD-RPT-002` | P0 | **Project management PDF** | Generate a structured Project-level management PDF from prepared results. | Report contains run/KPI summary, coverage, assurance disclosure, geography analysis and methodology/version footer. | Frozen Matrix: management PDFs |
| `PRD-RPT-003` | P0 | **District management PDF** | Generate District-level management PDF using the same governed view model. | District totals reconcile to dashboard/export for identical scope. | Frozen Matrix: management PDFs |
| `PRD-RPT-004` | P1 | **Block / GP management PDFs** | Support Block and GP management PDFs for governed hierarchy scopes. | Report values reconcile to corresponding hierarchy aggregation. | Frozen Matrix: hierarchy reporting |
| `PRD-RPT-005` | P0 | **Village PDF** | Generate Village-level report containing KPI/result, contributing structures, assurance/coverage and key validation/evidence disclosure. | Village report reconciles to village prepared result scope. | Frozen Matrix: village reporting |
| `PRD-RPT-006` | P0 | **Structure technical PDF** | Generate a technical calculation report for an individual structure. | Report includes identity, route/timing, calculation basis, assurance/evidence, validation, and applicable daily-trace summary. | Frozen Matrix: structure technical PDFs |
| `PRD-RPT-007` | P0 | **Management vs Technical/M&E modes** | Reports shall distinguish management summary from technical/M&E detail rather than overload one layout. | Mode selection changes presentation/detail only, not official result truth. | VWB report-mode pattern adapted to HUF |
| `PRD-RPT-008` | P1 | **Bulk PDF ZIP** | Support bulk generation of selected geography/structure reports as ZIP. | ZIP includes manifest and preserves one report per requested scope. | Frozen Matrix: bulk reporting |
| `PRD-RPT-009` | P1 | **Combined PDF** | Support combined multi-scope PDF where practical, especially village/structure selections. | Table of contents/scope markers prevent ambiguity between combined sections. | Frozen Matrix: combined reporting |
| `PRD-RPT-010` | P0 | **Report quality disclosure** | Every report shall state run identity/version, scope, assurance bucket inclusion, coverage and synthetic-data status where applicable. | A reader can determine what the reported total includes without accessing the app. | Reporting assurance requirement |
| `PRD-RPT-011` | P0 | **Shared prepared view model** | Dashboard, XLSX and PDF reporting shall consume shared prepared result/view models to minimize reconciliation drift. | Automated acceptance confirms identical scope produces reconciled totals across screen/XLSX/PDF. | Frozen product architecture principle |
| `PRD-RPT-012` | P0 | **Structured/vector reporting** | Reports shall be generated from structured data and report components, not captured screenshots. | Text/tables remain selectable/searchable where the PDF technology permits and charts are generated from result data. | Frozen Matrix: Screenshot-based reporting — DO NOT USE |

### 9.13 Audit, methodology and help

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-AUD-001` | P0 | **Run Summary** | Provide a concise run summary containing source identity, reporting period, structures/results coverage, controlling versions and audit/run status. | Summary reconciles to E09 run manifest. | E09 run manifest |
| `PRD-AUD-002` | P0 | **Audit & Methodology area** | Provide a dedicated area for methodology version, run hashes, rule/formula references, audit events and advanced diagnostics. | Normal users can ignore it; technical/audit users can trace the result end-to-end. | Frozen Matrix: Advanced/Audit |
| `PRD-AUD-003` | P0 | **Audit event chain** | Retain/display the E01→E09 audit event chain and upstream snapshot identities. | Audit chain continuity tests pass. | E09 contract |
| `PRD-AUD-004` | P0 | **Privacy-reduced audit boundary** | Standard audit surfaces/exports shall not expose source workbook bytes, raw workbook rows, full canonical tables or participant names. | E09 privacy regression remains PASS. | E09 privacy policy |
| `PRD-AUD-005` | P0 | **Certification status disclosure** | Audit/Help shall show the frozen Design-6 logical certification status and operational browser/deployment evidence qualification separately. | Product never presents evidence-retention qualification as a methodology failure. | Design-6 Certification Baseline |
| `PRD-AUD-006` | P1 | **Rule/formula lookup** | Advanced users should be able to look up a route/rule/formula ID and read a concise controlled explanation. | Lookup content is sourced from versioned controlled catalogs/documentation. | Historical technical capability |
| `PRD-AUD-007` | P0 | **Help and terminology** | Provide concise help for KPI families, assurance states, readiness, routes, units, exclusions/HOLD and formal HUF confirmation. | Terms match frozen controlled terminology. | Product usability requirement |
| `PRD-AUD-008` | P0 | **Release evidence status** | Release/about surface shall identify product version and whether browser/deployment evidence artifacts are retained for that release. | Future release can link/identify its machine-readable acceptance evidence package. | Design-6 evidence-retention requirement |

### 9.14 Template/version management

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-TPL-001` | P0 | **Template manager** | The product shall expose the active controlled template and supported template/schema version. | User can determine which template to use for the current release. | Frozen Matrix: Controlled blank input template |
| `PRD-TPL-002` | P0 | **Template history** | Document supported/superseded template versions and compatibility behavior. | A future version change does not silently reinterpret an older workbook. | Version-governance requirement |
| `PRD-TPL-003` | P0 | **Formula-free input template** | Controlled input workbook shall remain an input/data-collection artifact rather than embedding hidden official KPI formulas. | Template audit finds no hidden official calculation formulas in controlled input sheets. | Design-3 template principle |
| `PRD-TPL-004` | P1 | **Template guidance** | Provide sheet/field guidance and examples without requiring users to read the full methodology documentation. | User can access field purpose/unit/requiredness guidance from template/help. | Recovered onboarding capability |

### 9.15 Privacy and security

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-PRIV-001` | P0 | **No backend requirement** | Core calculator shall remain a static browser application with no backend required for workbook processing/calculation. | A complete run can be executed from the deployed static application without sending workbook data to an application server. | Frozen Matrix: Workbook local privacy / dependency determinism |
| `PRD-PRIV-002` | P0 | **No project data in URL** | Project/workbook data shall not be encoded into URLs/query strings. | Privacy regression confirms no raw project data appears in location/history URLs. | E09 privacy boundary |
| `PRD-PRIV-003` | P0 | **No runtime external-data transmission** | Core methodology execution shall not transmit source workbook or prepared project data to third-party services. | Network inspection during golden run shows no project-data upload. | Local-first privacy |
| `PRD-PRIV-004` | P0 | **Redacted standard audit** | Standard audit export shall preserve the frozen privacy-reduction policy. | Raw participant names/source values prohibited by E09 do not appear in standard export. | E09 privacy policy |
| `PRD-PRIV-005` | P0 | **No production debug global** | Do not expose a production global containing private prepared/calculation state for debugging. | Production build/window global inspection finds no equivalent of VWB debug global carrying project data. | Frozen Matrix: VWB production debug global — DO NOT USE |
| `PRD-PRIV-006` | P0 | **Dependency privacy/determinism** | Core parsing/calculation/report generation dependencies should be pinned/bundled where practical and must not require runtime CDN access for the controlled calculation path. | Core golden run succeeds with external network blocked. | Frozen Matrix: dependency determinism; VWB runtime CDN — DO NOT USE |

### 9.16 Non-functional/deployment

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-NFR-001` | P0 | **Static GitHub Pages deployment** | The release shall be deployable as a static site on GitHub Pages or equivalent static hosting. | Deployment acceptance proves application assets/configs load correctly from a repository subpath. | Final architecture; Frozen deployment requirement |
| `PRD-NFR-002` | P0 | **Deterministic repeatability** | Same source workbook + same controlled versions + same governed user confirmations shall produce identical controlled result content/provenance hashes. | Repeat-run deterministic-content tests pass. | E03/E09 deterministic lineage |
| `PRD-NFR-003` | P0 | **Responsive application** | Primary workflow and analytical views shall work on desktop and tablet; mobile shall support readable results/audit and essential review actions. | Responsive acceptance covers agreed viewport matrix with no inaccessible controls or clipped critical values. | Frozen product requirements: responsiveness |
| `PRD-NFR-004` | P0 | **Accessible interaction** | Primary actions, forms, filters and tables shall support keyboard operation, visible focus and meaningful labels. | Accessibility review finds no critical keyboard/navigation blockers in the P0 workflow. | Product quality requirement |
| `PRD-NFR-005` | P0 | **Production-scale performance** | Upload, validation, calculation and result interaction shall remain usable for the defined HUF production-scale portfolio without freezing the browser. | Architecture phase defines a production-scale fixture and measurable performance budget; acceptance must pass that budget. | Product performance requirement; avoid inventing premature numeric threshold |
| `PRD-NFR-006` | P0 | **Failure-safe state** | If a processing stage fails, the product shall preserve the last valid prior state and clearly identify the failed stage without presenting stale results as current. | Injected stage failure never labels an older run as the current completed result. | State-management requirement |
| `PRD-NFR-007` | P0 | **Release evidence package** | Every rebuilt release shall archive machine-readable logical tests, physical-fixture results, browser acceptance, deployment acceptance, live workflow acceptance and release manifest tied to the release SHA/tag. | Release package contains all evidence required to remove the current evidence-retention qualification. | Design-6 Certification Baseline §13 |
| `PRD-NFR-008` | P0 | **No stale contradictory status files** | Release machine-readable summaries shall be regenerated in the same validated environment used for promotion, or omitted if not authoritative. | Release contains no stale FAIL summary contradicting the promoted PASS status without an explicit explanatory qualification. | Frozen Matrix: release evidence consistency |
| `PRD-NFR-009` | P0 | **Local/bundled dependency strategy** | Avoid runtime CDN dependence for controlled core libraries; architecture shall define pinned/vendor adapters for parser/report dependencies. | Offline/network-blocked core run succeeds using release-contained dependencies. | Frozen Matrix: Dependency determinism |
| `PRD-NFR-010` | P1 | **Progressive disclosure** | Normal workflow shall prioritize plain-language decisions while Advanced/Audit exposes hashes, IDs and technical diagnostics. | A nontechnical user can complete a valid golden workflow without interacting with raw engine IDs. | Product usability principle |

### 9.17 Acceptance/release

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-ACC-001` | P0 | **Protected regression suite** | All protected E01–E09 module/regression tests applicable to the rebuilt integration shall pass before release. | Machine-readable release evidence records zero unresolved protected regression failures. | Protected engine baseline |
| `PRD-ACC-002` | P0 | **Design-6 logical suite** | The governed Design-6 logical suite shall remain 154/154 PASS, including the VAL-027 v1.1 positive invariant. | Release evidence records 154 PASS, 0 FAIL, 0 NOT VERIFIED. | Design-6 Certification Baseline |
| `PRD-ACC-003` | P0 | **Physical fixtures** | All 15 frozen high-risk physical XLSX fixtures shall be freshly re-executed in the release environment. | Machine-readable release evidence records 15/15 PASS and fixture hashes match the frozen manifest. | Design-6 Certification Baseline future-release requirement |
| `PRD-ACC-004` | P0 | **Leap/non-leap goldens** | Leap and non-leap positive golden portfolios shall pass with expected calendar and calculation outputs. | 366-day and 365-day golden assertions pass within controlled tolerance. | Design-6 positive calendar coverage |
| `PRD-ACC-005` | P0 | **Dashboard reconciliation** | For golden portfolios, every P0 dashboard total/count shall reconcile to E08/Design-5 prepared truth. | Automated comparison finds no unexplained dashboard/result differences. | Product-layer non-regression |
| `PRD-ACC-006` | P0 | **Export reconciliation** | P0 CSV/XLSX exports shall reconcile to identical-scope dashboard/prepared truth. | Automated export assertions pass for values, status, units and scope metadata. | Export acceptance |
| `PRD-ACC-007` | P0 | **PDF reconciliation** | P0 PDF reports shall reconcile to identical-scope prepared/dashboard truth. | Automated/structured report assertions and spot-checks pass for KPI totals, coverage and assurance disclosure. | Report acceptance |
| `PRD-ACC-008` | P0 | **Privacy acceptance** | Release shall pass local-processing, URL privacy, audit redaction and no-debug-global tests. | Machine-readable privacy acceptance is included in release evidence. | E09/privacy requirements |
| `PRD-ACC-009` | P0 | **Browser acceptance evidence** | Browser UAT shall run in a permitted environment and its machine-readable result shall be retained. | P0 workflow passes in the agreed browser matrix and result artifact is embedded in release evidence. | Design-6 Gate 07 / evidence-retention requirement |
| `PRD-ACC-010` | P0 | **GitHub Pages deployed acceptance** | The deployed release shall be tested from the actual GitHub Pages/project-subpath URL and evidence retained. | Live acceptance proves Upload → Review/Correct → Calculate → Results and critical export/report actions on the deployed site. | Design-6 Gate 08 / evidence-retention requirement |
| `PRD-ACC-011` | P0 | **Responsive acceptance** | P0 workflow and critical reports/results shall pass agreed desktop/tablet/mobile viewport checks. | No critical content is inaccessible or clipped in the acceptance matrix. | Responsive requirement |
| `PRD-ACC-012` | P0 | **Release integrity** | Final release shall include SHA-256, release manifest, methodology/version manifest, evidence manifest and release notes. | Independent manifest verification passes 100% for controlled release payloads. | Clean-release requirements |
| `PRD-ACC-013` | P0 | **Cross-surface scope consistency** | The same hierarchy/filter scope must produce consistent result-set membership across dashboard, structure register, XLSX and PDF. | Acceptance fixture proves identical included entity IDs/status counts across P0 surfaces. | Calculate truth once principle |
| `PRD-ACC-014` | P0 | **No methodology drift** | A final protected-core hash/config comparison shall be performed before release. | Any difference from protected methodology is either zero or explicitly governed/versioned with full regression evidence. | Protected methodology rule |

### 9.18 Future / explicitly deferred

| ID | Pri | Requirement | Required behaviour | Acceptance criterion | Frozen source |
|---|:---:|---|---|---|---|
| `PRD-FUT-001` | P2 | **Run-to-run comparison** | Future versions may compare governed completed runs without changing historical truth. | Not required for initial rebuild release; any future comparison uses immutable completed run packages. | Future product opportunity |
| `PRD-FUT-002` | P2 | **Map/GIS visualization** | A future geography map may be added if reliable coordinates/geography coverage justify it. | Not required for initial rebuild; no map dependency may block core results. | Future product opportunity |
| `PRD-FUT-003` | P2 | **Multi-project portfolio** | Future versions may support multiple project/run packages in a portfolio view. | Initial rebuild remains single-workbook/run focused. | Future product opportunity |
| `PRD-FUT-004` | P2 | **Collaborative/backend workflows** | Cloud collaboration, accounts and server-side storage are explicitly outside the initial static/private rebuild. | Initial release requires no login/backend. | Privacy/static architecture boundary |
| `PRD-FUT-005` | P2 | **Demand-side KPI integration** | Demand-side methodology/tooling is outside this Supply-Side rebuild and shall not be merged implicitly. | No demand-side formula/schema is introduced into the supply-side protected core. | Product scope boundary |

## 10. Dashboard metric and status definitions

The dashboard shall not invent a new KPI methodology. It shall present the prepared HUF result families and assurance/status buckets.

### 10.1 Result families
- **KPI 1.1.1** — water potential subjected to rainfall / governed WTR-111 routes;
- **KPI 1.1.2** — governed single-fill/incremental capacity routes;
- **Lined farm pond component** — separately reported according to the controlled route;
- **KPI 1.2.1 person-days** — controlled person-day result;
- other governed result families only when introduced through controlled methodology versioning.

### 10.2 Assurance buckets
- accepted under controlled methodology;
- provisional — evidence pending;
- calculated — warning;
- not calculated;
- excluded.

### 10.3 Calculated Total

`Calculated Total = accepted + provisional + warning`

This must never be labelled “Certified Total.”

### 10.4 Formal HUF confirmation

Formal HUF confirmation is displayed separately and is not inferred from the assurance bucket.

## 11. Frozen chart grammar

Initial HUF-specific analytical forms:

| Visual | Purpose | Required guardrail |
|---|---|---|
| Ranked geography bar | Compare result/accepted values across districts/blocks/GPs/villages | Show scope, unit and included assurance bucket(s) |
| Calculated vs accepted dumbbell | Expose evidence/assurance gap by geography/type | Calculated and accepted definitions must follow E08 |
| Assurance distribution | Show accepted/provisional/warning/not-calculated/excluded composition | Counts and values reconcile to E07/E08 |
| Structure type × result/assurance heatmap | Identify concentration by structure type | Missing/not-applicable remains distinct from zero |
| Route × assurance heatmap/table | Review official routing outcomes | Route comes only from E05 |
| Daily structure trace | Explain WTR-111 temporal calculation | Uses protected E06 trace; no resimulation in chart |
| Small multiples by district/block | Compare selected portfolio measures | Shared scale when comparison requires it; disclose coverage |

VWB visual grammar may inspire layout discipline only; VWB formulas/indices/domain logic are prohibited.

## 12. Frozen export matrix

| Artifact | P0/P1 | Scope | Main audience |
|---|:---:|---|---|
| Compact Result CSV/XLSX | P0 | Full or explicit filtered scope | MIS/M&E |
| Management XLSX / Reporting Summary | P0 | Project/geography | Management/M&E |
| Technical/M&E XLSX | P0 | Full run / explicit scope | Engineer/M&E |
| Daily Trace CSV/JSON | P0 | Structure | Engineer/Audit |
| Standard Audit JSON | P0 | Run | Audit |
| Audit Package ZIP | P1 | Run | Audit/Methodology |
| Bulk export/report bundle | P1 | Selected scopes | Management/M&E |

All exports must contain run/scope/version metadata and preserve status semantics.

## 13. Frozen PDF report matrix

| Level | Management mode | Technical/M&E mode | Priority |
|---|---|---|:---:|
| Project | Yes | Yes | P0 |
| District | Yes | Yes | P0 |
| Block | Yes | Yes | P1 |
| GP | Yes | Yes | P1 |
| Village | Yes | Yes | P0 |
| Structure | Summary where useful | **Technical calculation report** | P0 |

Bulk ZIP and combined PDF are P1.

## 14. Out of scope / prohibited for the initial rebuild

- VWB formulas, Water Security Index or Kobo schema;
- VWB cluster hierarchy;
- hidden dashboard-triggered recalculation;
- screenshot-based reporting;
- runtime CDN dependence for the controlled core where a bundled/pinned alternative is practical;
- production debug globals exposing project state;
- backend/login/collaboration requirement;
- demand-side KPI methodology integration;
- map/GIS as a blocker for initial release;
- multi-project/run comparison as a P0 requirement.

## 15. Product-state and invalidation principles

These are product requirements; exact implementation is frozen in Technical Architecture:

1. Source workbook replacement invalidates all downstream state.
2. Mapping change invalidates canonical and downstream state.
3. Canonical/source correction invalidates affected validation/routing/calculation/downstream state.
4. Evidence-only changes may update assurance/aggregation/audit only when the governed dependency model permits; they do not rewrite E06 numeric truth.
5. Presentation filters do not invalidate or recompute controlled truth.
6. A stale prior run must never be presented as the current completed run after an upstream change.

## 16. Release acceptance summary

The rebuilt release is not accepted until all P0 acceptance requirements pass, including:
- protected E01–E09 regression;
- 154/154 governed Design-6 logical suite;
- fresh 15/15 physical XLSX fixture execution;
- leap/non-leap golden portfolios;
- dashboard/export/PDF reconciliation;
- privacy tests;
- responsive/browser UAT;
- deployed GitHub Pages acceptance;
- machine-readable evidence retained in the release package;
- SHA-256/release-manifest verification;
- final protected-core drift check.

## 17. Requirement-change governance

After this freeze:
- P0 requirement removal or controlled-meaning change requires an explicit decision record;
- any change affecting E01–E09 semantics is RED methodology governance, not ordinary PRD refinement;
- P1 deferral must be documented with rationale and target phase;
- P2 items remain outside initial release unless promoted through an explicit decision;
- every requirement implementation shall be traceable to test/acceptance evidence.

## 18. Next phase

**Technical Architecture Freeze**

The architecture phase must specify how the protected E01–E09 core is integrated behind the frozen product workflow, including state/invalidation, prepared view models, repository/module boundaries, local dependencies, export/report services, test harnesses and release evidence packaging.

No production rebuild coding should begin until the architecture baseline is frozen.