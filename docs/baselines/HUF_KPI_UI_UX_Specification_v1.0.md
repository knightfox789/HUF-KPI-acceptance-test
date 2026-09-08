---
title: "HUF Supply-Side KPI Calculator — UI/UX Specification"
version: "1.0"
date: "2026-09-06"
status: "FROZEN"
governance: "Original HUF product experience around protected E01–E09 methodology"
---

# HUF Supply-Side KPI Calculator — UI/UX Specification v1.0

## 1. Freeze statement

This document freezes the original HUF UI/UX design for the clean rebuild.

It implements:

- Product Requirements Specification v1.0;
- Technical Architecture v1.0;
- the protected E01–E09 methodology boundary;
- the frozen Design-6 logical certification baseline.

The UI is designed for programme, technical, M&E, assurance and audit users without requiring them to understand the internal engine architecture.

The primary product principle is:

> **Make controlled truth easy to prepare, correct, understand, analyse and report without changing what the methodology means.**

No production code is created by this phase.

---

## 2. UX objectives

The product experience must:

1. make the upload-to-results workflow understandable without engine knowledge;
2. surface exceptions before technical detail;
3. keep null, HOLD, excluded, not-calculated and warning states visibly distinct;
4. make route/calculation/assurance reasoning inspectable;
5. support fast management review and deep technical drill-down in the same product;
6. keep evidence/assurance separate from numeric calculation truth;
7. make reporting/export scope unambiguous;
8. preserve privacy and local-browser processing;
9. remain usable across desktop, tablet and mobile;
10. keep audit/methodology detail available without overwhelming routine users.

---

## 3. Experience character

The frozen visual direction is:

- clean;
- restrained;
- professional;
- consulting/reporting-oriented;
- data-dense without appearing crowded;
- generous white space;
- strong typographic hierarchy;
- subtle borders and separators;
- minimal decorative graphics;
- HUF/DSC purpose first, personal branding secondary;
- charts used only where they improve interpretation.

This is an original HUF interface.

Village Water Budget Intelligence may inspire discipline in layout and reporting, but its UI is not copied and its domain logic is not imported.

---

## 4. Primary product navigation

Desktop/tablet primary navigation:

```text
HUF Supply-Side KPI Calculator
────────────────────────────────────────────────────────────
Home / Upload
Review & Correct
Results
Structures
Assurance & Evidence
Reports & Exports
Audit & Methodology
```

Normal users never navigate by “Engine 1–Engine 9”.

Advanced technical pages may reference E01–E09 inside Audit & Methodology.

---

## 5. Global application shell

### 5.1 Header

Persistent header contains:

- HUF Supply-Side KPI Calculator product name;
- current project/run label when available;
- current run state;
- synthetic-data badge when applicable;
- compact privacy indicator;
- Help;
- overflow menu for About/version.

### 5.2 Left navigation — desktop

Desktop uses a restrained left navigation rail.

```text
┌─────────────────────┐
│ HUF Supply-Side KPI │
│ Calculator          │
├─────────────────────┤
│ Home / Upload       │
│ Review & Correct    │
│ Results             │
│ Structures          │
│ Assurance & Evidence│
│ Reports & Exports   │
│ Audit & Methodology │
└─────────────────────┘
```

The rail can collapse to icons + accessible labels on smaller desktop widths.

### 5.3 Tablet navigation

Tablet uses:

- compact navigation rail or top drawer;
- same information architecture;
- no loss of core functions.

### 5.4 Mobile navigation

Mobile uses a menu/drawer.

Primary mobile emphasis:

- view results;
- inspect issues;
- review structure detail;
- inspect assurance/evidence;
- access audit/run summary;
- perform essential correction actions.

Complex spreadsheet-style mapping remains available but optimized for landscape/mobile drawer interaction rather than a wide desktop matrix.

---

## 6. Global status language

These public labels are frozen:

| Controlled state | Public label |
|---|---|
| `accepted-certified` | **Accepted under controlled methodology** |
| provisional evidence state | **Provisional — evidence pending** |
| warning calculation state | **Calculated — warning** |
| not calculated | **Not calculated** |
| excluded | **Excluded** |
| HOLD route/state | **HOLD — review required** |
| formal HUF governance | **Formal HUF confirmation: [status]** |

Do not use:

- “Certified Total”;
- “HUF certified” unless formal confirmation explicitly supports it;
- ambiguous “Passed” for business assurance.

---

## 7. Status visual system

Status is never communicated by colour alone.

Each status uses:

- text label;
- icon/symbol;
- optional subtle colour cue.

Recommended semantic styles:

- ready/accepted → check icon + positive neutral;
- warning/provisional → alert icon + amber-neutral;
- blocked/error → stop/error icon + high-contrast red-neutral;
- HOLD → pause icon + strong neutral/amber;
- excluded → slash/ban icon + muted neutral;
- informational → info icon.

The exact colour tokens are implemented in Phase 7 but must meet accessibility contrast requirements.

---

## 8. Typography hierarchy

Recommended hierarchy:

- Product title / major page title
- Section title
- Card title
- Table/chart title
- Body
- Supporting metadata
- Technical code / IDs

Technical IDs and hashes use monospaced styling only in Advanced/Audit contexts.

Normal pages prefer plain-language labels.

---

## 9. Layout grid

### Desktop

- 12-column fluid grid;
- max content width optimized for large analytical tables;
- generous page gutters;
- fixed/minimum navigation rail;
- cards align to shared column rhythm.

### Tablet

- 8-column grid;
- cards collapse from 3–4 columns to 2;
- wide tables use horizontal scroll with fixed key columns.

### Mobile

- 4-column grid;
- single-column cards;
- summary first;
- tables become stacked row cards where practical;
- secondary metadata collapses behind disclosure controls.

---

# 10. Screen inventory

The frozen screen inventory is:

| ID | Screen |
|---|---|
| UX-00 | Global App Shell |
| UX-01 | Home / Upload |
| UX-02 | Workbook Preflight |
| UX-03 | Mapping Review |
| UX-04 | Data Preparation Summary |
| UX-05 | Validation & Correction Centre |
| UX-06 | Validation Issue Detail / Correction Drawer |
| UX-07 | Calculate / Processing Progress |
| UX-08 | Results Overview |
| UX-09 | Geography Explorer |
| UX-10 | Structure Register |
| UX-11 | Structure Detail |
| UX-12 | Daily Calculation Trace |
| UX-13 | Assurance & Evidence Centre |
| UX-14 | Evidence Detail / Review Drawer |
| UX-15 | Reports & Exports Centre |
| UX-16 | Report Setup / Generation |
| UX-17 | Audit & Methodology |
| UX-18 | Run Summary |
| UX-19 | Help / Terminology |
| UX-20 | Global Empty / Error / Invalidated States |

---

# 11. UX-01 — Home / Upload

## Purpose

Start a run, load sample data, understand privacy and retrieve the controlled template.

## Desktop wireframe

```text
┌─────────────────────────────────────────────────────────────────────┐
│ HUF Supply-Side KPI Calculator                    Privacy: Local    │
├───────────────┬─────────────────────────────────────────────────────┤
│ Navigation    │  Start a controlled KPI run                         │
│               │                                                     │
│ Home / Upload │  ┌───────────────────────────────────────────────┐  │
│ Review        │  │ Drag & drop HUF workbook                      │  │
│ Results       │  │ or choose .xlsx                               │  │
│ ...           │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│               │  [Choose workbook]   [Try sample data]              │
│               │                                                     │
│               │  Controlled template                               │
│               │  HUF-SS-INPUT-v1.1        [Download blank template] │
│               │                                                     │
│               │  Privacy note: workbook remains in this browser.    │
└───────────────┴─────────────────────────────────────────────────────┘
```

## Required content

- choose workbook;
- drag/drop;
- sample workbook action;
- active template version;
- blank template download;
- local-processing privacy statement;
- supported file type;
- methodology/product version link.

## Selected-file state

After selection show:

- filename;
- file size;
- detected template version;
- source fingerprint abbreviated;
- detected sheets;
- replace/clear action;
- primary action: **Review workbook**.

---

# 12. UX-02 — Workbook Preflight

## Purpose

Give users a concise understanding of workbook structure before mapping.

## Layout

Top summary cards:

- workbook/template version;
- reporting period;
- recognized sheets;
- structures/records detected;
- formula presence;
- preflight status.

Main body:

```text
Workbook Preflight
────────────────────────────────────────────────────────────
Overall status: Ready for mapping / Needs attention

Controlled sheets
✓ 01_Control                 1 row
✓ 02_Structures             20 rows
✓ 03_Technical              18 rows
...
! Unexpected sheet          2 rows

Checks
✓ Supported template
✓ Reporting period detected
! 3 formulas found in input cells
✓ Required sheets present

[Continue to Mapping]
```

## Interaction rules

- errors appear before warnings;
- technical detail collapses under “Advanced preflight details”;
- raw workbook rows are not displayed by default;
- preflight cannot be mistaken for Design-4 validation.

---

# 13. UX-03 — Mapping Review

## Purpose

Confirm adaptive field mapping without forcing users through all fields.

## Default view

Exception-first.

Header summary:

```text
Mapped automatically: 139
Needs confirmation:    5
Conflicts:             1
Unmapped required:     2
```

Tabs/filters:

- Needs attention
- Confirmed
- All fields
- Advanced

Each mapping row:

```text
Controlled field      Source                   Method        Status
Structure Type        "Type of Structure"      Alias         ✓
Rainfall Station ID   "Rain Station"           Fuzzy         Confirm
Baseline Capacity     "Old Capacity"           Conflict      Resolve
```

## Mapping drawer

Shows:

- controlled field meaning;
- expected sheet;
- expected data type/unit;
- candidate source fields;
- mapping method;
- confidence;
- source sample values where privacy/UX permits;
- confirm/choose source.

## Primary action

**Confirm mapping & prepare data**

Disabled while blocking conflicts/unmapped required fields remain.

---

# 14. UX-04 — Data Preparation Summary

## Purpose

Explain canonicalisation in user language.

## Summary

Cards:

- records prepared;
- dates normalized;
- unit conversions;
- blanks preserved;
- preparation warnings;
- unresolved preparation issues.

Example:

```text
Data Preparation
────────────────────────────────────────
20 structures prepared
366 rainfall records prepared
12 date values normalized
0 silent coercions
3 preparation warnings
```

## Detail sections

- Dates
- Numeric/type normalization
- Units
- Blank/null preservation
- Source lineage

Advanced field-level conversion detail is collapsible.

---

# 15. UX-05 — Validation & Correction Centre

## Purpose

Become the main operational workspace for data-quality correction.

## Desktop layout

```text
Validation & Correction
─────────────────────────────────────────────────────────────
[All] [Blocking] [Warnings] [Evidence] [Resolved]

Summary
Blocking scopes: 3   Warnings: 12   Ready structures: 17/20

Filters: Geography ▾  Domain ▾  Severity ▾  Scope ▾

┌────────────────────────────────────────────────────────────┐
│ BLOCKING                                                   │
│ Structure S-CD-04 · Technical                              │
│ Missing verified base area                                 │
│ Scope: Structure only                                      │
│ Source: 03_Technical row 12                                │
│ [Review & correct]                                         │
├────────────────────────────────────────────────────────────┤
│ WARNING                                                    │
│ Rainfall series · Station ST-02                            │
│ ...                                                        │
└────────────────────────────────────────────────────────────┘
```

## Grouping

Issue groups:

- Workbook / Control
- Structure
- Technical
- Catchment / Rainfall / Hydro
- Cascade / Network
- Silt
- Person-days
- Evidence

## Required summary

- workbook-level blockers;
- structure-level blockers;
- series/network blockers;
- warnings;
- ready-to-calculate scope;
- excluded/HOLD counts.

---

# 16. UX-06 — Validation Issue Detail / Correction Drawer

## Purpose

Correct one issue without losing context.

## Drawer contents

1. plain-language issue;
2. controlled rule ID under Advanced;
3. severity;
4. scope effect;
5. affected entity;
6. source sheet/row/field;
7. original value;
8. permitted correction control;
9. reason/note;
10. impact preview;
11. apply correction.

Example:

```text
Review issue
──────────────────────────────────────
Structure: S-CD-04
Issue: Verified base area is missing
Impact: This structure cannot calculate

Source
03_Technical · Row 12 · Verified Base Area

Original value: blank

Corrected value: [__________] m²

Reason: [________________________]

[Apply correction]
```

## Correction behavior

After apply:

- show which stages will be re-evaluated;
- do not say “edit Excel” unless external correction is required;
- original source remains preserved;
- correction is visible in audit/correction history.

---

# 17. UX-07 — Calculate / Processing Progress

## Purpose

Show controlled progression without exposing an engine-strip UI.

## Layout

```text
Calculating controlled results
────────────────────────────────────────────
✓ Preparing controlled data
✓ Validating readiness
✓ Determining official routes
● Calculating KPI results
○ Applying assurance
○ Building geography summaries
○ Finalizing audit record
```

These labels correspond to pipeline stages but are task language.

## States

- in progress;
- completed;
- blocked by newly surfaced controlled issue;
- application/runtime failure;
- cancelled/disposed before completion.

## Completion action

**View Results**

---

# 18. UX-08 — Results Overview

## Purpose

Give programme/management users a clear project result.

## Desktop composition

```text
Results — Project
──────────────────────────────────────────────────────────────
Run status: Complete        Reporting period: 2023–24

[KPI 1.1.1 Water] [KPI 1.1.2 Capacity] [Person-days] [Coverage]

Assurance summary
Accepted under controlled methodology        ███████
Provisional — evidence pending                ███
Calculated — warning                          ██
Not calculated                                █
Excluded                                      █

Geography ranking
[District bars]

Calculated vs accepted
[Dumbbell chart]

Structure mix / route / assurance
[Heatmap or analytical table]

Coverage & review signals
[Cards/list]

[Explore geography] [Open structures] [Reports & exports]
```

## KPI card rules

Every card shows:

- KPI family;
- value;
- unit;
- included assurance definition;
- structure/result coverage;
- comparison only when supported by controlled result data.

No percentage “improvement” is invented unless the methodology provides a governed comparison baseline.

---

# 19. UX-09 — Geography Explorer

## Purpose

Drill from project to structure while preserving governed aggregation.

## Layout

Breadcrumb:

```text
Project > Mehsana > Kheralu > GP Name > Village Name
```

Left/upper scope selector:

- Project
- District
- Block
- GP
- Village
- PIA filter

Summary cards:

- KPI totals;
- accepted result;
- calculated total;
- coverage;
- assurance distribution.

Main analytical views:

- child geography ranked bars;
- calculated-vs-accepted dumbbell;
- structure type distribution;
- route/assurance summary;
- contributing/non-contributing structures.

## Interaction

Selecting a child geography changes presentation scope only.

No controlled recalculation.

---

# 20. UX-10 — Structure Register

## Purpose

Provide the complete structure/result inventory.

## Table columns

Recommended default:

- Structure ID
- Structure name
- Type
- Village
- KPI family
- Route
- Result
- Assurance
- Readiness/status
- Evidence state

Optional columns under “Columns”:

- District
- Block
- GP
- completion date
- timing method
- source/catchment identifiers.

## Filters

- geography;
- structure type/subtype;
- KPI family;
- route;
- assurance;
- validation/readiness;
- calculated/not-calculated/HOLD/excluded.

## Rule

Non-calculated/excluded/HOLD structures remain visible.

---

# 21. UX-11 — Structure Detail

## Purpose

Explain one structure end-to-end.

## Page sections

### A. Identity

- Structure ID/name
- type/subtype
- intervention
- geography
- completion/functional dates

### B. Status strip

- readiness
- official route
- assurance
- formal HUF confirmation

### C. Result

- KPI family
- controlled result
- unit
- accepted/calculated state

### D. Why this route?

Plain-language route explanation.

Advanced:

- route ID;
- relevant controlled condition;
- timing method.

### E. Calculation explanation

Show only controlled available components.

For WTR-111 examples:

- eligible capacity;
- catchment basis;
- rainfall series;
- runoff basis;
- infiltration;
- evaporation;
- daily storage/overflow summary;
- final water result.

For capacity routes:

- eligible capacity;
- baseline/post-intervention/desilted basis;
- final incremental/single-fill result.

### F. Validation

Current issues and resolved corrections.

### G. Assurance & evidence

- required evidence;
- available/verified/pending;
- assurance consequence;
- formal HUF status separate.

### H. Actions

- View daily trace
- Technical PDF
- Trace CSV/JSON
- Open audit lineage

---

# 22. UX-12 — Daily Calculation Trace

## Purpose

Make E06 temporal calculation inspectable.

## Header

- structure;
- route;
- reporting period;
- days in trace;
- result summary.

## Chart

Time series visualization of controlled trace components.

Recommended toggles:

- rainfall/input;
- storage;
- infiltration;
- evaporation;
- overflow;
- available controlled outputs.

## Table

```text
Date | Rainfall | Inflow | Storage Open | Infiltration | Evaporation | Overflow | Storage Close
```

Sticky date column on desktop/tablet.

Mobile:

- chart first;
- table as expandable day cards or horizontal table.

## Rule

No trace element is independently simulated in the UI.

---

# 23. UX-13 — Assurance & Evidence Centre

## Purpose

Separate evidence workflow from numeric calculation.

## Header summary

```text
Accepted under controlled methodology    72%
Provisional — evidence pending            18%
Calculated — warning                       6%
Not calculated                             3%
Excluded                                   1%
```

Values shown only where percentage is meaningful; counts always available.

## Filters

- geography;
- KPI;
- structure type;
- route;
- assurance;
- evidence type;
- evidence status.

## Main panels

- evidence-pending structures;
- evidence requirement summary;
- assurance by geography;
- assurance by structure type;
- formal HUF confirmation summary.

---

# 24. UX-14 — Evidence Detail / Review Drawer

## Purpose

Inspect or update evidence verification state where governed.

Contents:

- evidence ID;
- related record;
- evidence type;
- status;
- reference/register number;
- verifier;
- verification date;
- notes;
- effect on assurance.

If a change is assurance-only:

```text
This change will refresh Assurance → Aggregation → Audit.
Numeric calculation will not be recalculated.
```

If evidence affects eligibility/readiness:

```text
This change affects validation/eligibility and requires controlled recalculation from Validation onward.
```

---

# 25. UX-15 — Reports & Exports Centre

## Purpose

Provide one place to generate structured outputs.

## Layout

```text
Reports & Exports
─────────────────────────────────────────────
Current run: RUN-...
Scope: Project

Quick exports
[Compact Result XLSX] [Management XLSX]
[Technical/M&E XLSX] [Audit JSON]

Reports
Level: Project ▾
Mode: Management ▾
Scope: Full project ▾

[Preview report setup] [Generate PDF]

Technical exports
[Daily trace] [Audit package]

Bulk
[Select villages/structures] [Create bundle]
```

Every action shows scope and run identity.

---

# 26. UX-16 — Report Setup / Generation

## Purpose

Prevent ambiguous report scope.

Required selectors:

- hierarchy level;
- scope/entity;
- Management or Technical/M&E;
- display unit;
- selected analytical sections where optional.

Before generation show:

```text
You are generating:
District report
Mehsana
Management mode
Run: RUN-...
Water display: MCM
Assurance total shown: accepted + provisional + warning
```

Primary action:

**Generate PDF**

Generation status appears inline.

---

# 27. UX-17 — Audit & Methodology

## Purpose

Provide deep technical traceability without cluttering normal workflow.

## Tabs

- Run lineage
- Methodology versions
- Validation/routing/formula references
- Audit events
- Release evidence
- Privacy

## Run lineage view

```text
Source fingerprint
   ↓
Mapping snapshot
   ↓
Canonical snapshot
   ↓
Validation
   ↓
Routing
   ↓
Calculation
   ↓
Assurance
   ↓
Aggregation
   ↓
Audit manifest
```

Each stage:

- status;
- version;
- abbreviated hash;
- expand for full hash;
- timestamp/event where applicable.

---

# 28. UX-18 — Run Summary

## Purpose

Provide a compact authoritative run overview.

Fields:

- Run ID
- Project ID/name
- PIA
- Reporting period
- Source workbook
- Source fingerprint
- Template/schema version
- Product version
- methodology/config versions
- structures detected
- calculated/not-calculated/excluded/HOLD counts
- assurance summary
- finalization time
- Design-6 logical baseline
- browser/deployment evidence status for product release
- formal HUF governance status

This view is printable/copyable but not a substitute for formal report exports.

---

# 29. UX-19 — Help / Terminology

Sections:

- Start here
- Workbook/template
- Mapping
- Validation
- Routes
- KPI 1.1.1
- KPI 1.1.2
- Person-days
- Assurance
- Evidence
- Units
- Reports
- Audit
- Privacy

Terminology must match controlled wording.

Technical IDs are secondary.

---

# 30. UX-20 — Empty, Error and Invalidated States

## Empty states

Examples:

- no workbook selected;
- no validation issues;
- no evidence pending;
- no structures match filters;
- no daily trace for route.

Empty state must explain why and what action is possible.

## Invalidated state

After upstream change:

```text
Results need recalculation
The workbook/mapping/data has changed since this run.
Previous results are preserved for reference but are not current.

[Review changes] [Recalculate]
```

Stale result values are visually de-emphasized and clearly labelled.

## Runtime error

```text
Calculation could not complete
Failed stage: Preparing workbook / Calculating / Reporting
Your original workbook is unchanged.

[View diagnostic] [Return to Review]
```

Do not convert runtime errors into methodology statuses.

---

# 31. Review & Correct master flow

```text
Upload
  ↓
Preflight
  ↓
Mapping
  ↓
Preparation
  ↓
Validation & Correction
  ├─ Blocking issue → correction → revalidate
  ├─ Warning only → continue
  └─ Ready
       ↓
Calculate
```

The left navigation may remain visible, but Results/Reports actions are disabled or marked stale until a current complete run exists.

---

# 32. Results master flow

```text
Results Overview
   ├─ Geography Explorer
   │    └─ Structure Detail
   ├─ Structure Register
   │    └─ Structure Detail
   │         └─ Daily Trace
   ├─ Assurance & Evidence
   └─ Reports & Exports
```

All drill-downs preserve current run identity.

---

# 33. Filter interaction standard

Filters use one consistent interaction model.

### Desktop/tablet

Filter bar above analytical content.

### Mobile

“Filters” button opens a drawer.

Every filtered view shows:

- active scope;
- active filter chips;
- clear-all action;
- N/count context.

Changing filters never recalculates E01–E09.

---

# 34. Table interaction standard

Large analytical tables support:

- sticky header;
- sticky first key column where useful;
- sortable columns;
- filters;
- column chooser;
- row count;
- pagination or virtualization;
- row click for detail;
- export-current-scope action where applicable.

No table hides null/HOLD/excluded rows by default when they are relevant to coverage.

---

# 35. Chart interaction standard

Charts provide:

- title;
- plain-language subtitle;
- scope;
- unit;
- coverage;
- legend;
- hover/tap detail;
- accessible textual summary;
- data-table alternative for critical charts.

Charts never rely on colour alone.

---

# 36. Frozen HUF chart grammar

## 36.1 Ranked geography bars

Use for:

- District/Block/GP/Village comparison.

Show:

- selected KPI/result;
- value;
- assurance definition;
- coverage.

## 36.2 Calculated vs accepted dumbbell

Left/right points:

- calculated total;
- accepted under controlled methodology.

Purpose:

- visualize evidence/assurance gap.

## 36.3 Assurance distribution

Prefer horizontal stacked bar or grouped bars.

Avoid decorative donut charts for detailed analytical pages unless space/context strongly favors them.

## 36.4 Structure-type × assurance heatmap

Rows:

- structure type.

Columns:

- assurance states or selected KPI.

Cells:

- count/value;
- missing/not-applicable distinct from zero.

## 36.5 Route × assurance matrix

Table/heatmap for technical/M&E review.

## 36.6 Daily trace

Line/area/bar combination only where each component remains interpretable.

Rainfall should not visually obscure storage/flux series.

## 36.7 Small multiples

Use for District/Block comparison where the same KPI/assurance measure is repeated.

Shared scale where direct comparison matters.

---

# 37. Dashboard responsive behavior

### ≥1280 px

- 4-card KPI row;
- 2-column analytical grid;
- wide tables;
- persistent left navigation.

### 1024–1279 px

- 2×2 KPI cards;
- charts may remain 2-column;
- compact rail.

### 768–1023 px

- 2-column cards;
- charts mostly single-column;
- tables scroll;
- navigation drawer/rail.

### <768 px

- single-column;
- top summary first;
- filter drawer;
- chart/data toggle;
- critical tables become stacked cards where practical;
- no hidden critical status labels.

---

# 38. Mobile priority order

For mobile, content order is frozen:

1. current run/status;
2. KPI/result summary;
3. blocking/warning states;
4. coverage;
5. assurance;
6. geography/structure list;
7. charts;
8. advanced methodology details.

This prevents users from scrolling past critical status to reach results.

---

# 39. Accessibility specification

P0 requirements:

- keyboard-operable navigation and controls;
- visible focus indicator;
- semantic landmarks;
- form labels;
- required-field identification;
- accessible validation errors;
- sufficient contrast;
- no colour-only status;
- chart text summary;
- table header relationships;
- modal/drawer focus trapping;
- escape/close behavior;
- reduced-motion respect;
- meaningful button labels;
- no icon-only critical action without accessible label.

---

# 40. Writing and terminology style

Use:

- short, direct labels;
- plain-language explanations first;
- technical IDs second;
- active verbs;
- explicit scope/status.

Prefer:

“3 structures cannot calculate”

over:

“3 scoped validation failures”

Prefer:

“Accepted under controlled methodology”

over:

“Certified”

Prefer:

“Why this route?”

over:

“Routing diagnostics”

Technical terms remain available in Advanced.

---

# 41. Primary button language

Frozen action wording:

- Choose workbook
- Review workbook
- Continue to Mapping
- Confirm mapping & prepare data
- Review & correct
- Apply correction
- Revalidate
- Calculate results
- View Results
- Explore geography
- Open structure
- View daily trace
- Review evidence
- Generate report
- Download XLSX
- Download audit JSON
- View run summary

Avoid generic “Submit” where a specific action can be named.

---

# 42. Confirmation/dialog rules

Do not overuse confirmation dialogs.

Require confirmation for:

- replacing workbook when a draft correction exists;
- discarding corrections;
- starting a new run that invalidates current draft;
- clearing evidence-review changes;
- destructive/reset actions.

Do not confirm:

- filters;
- navigation;
- opening details;
- report preview.

---

# 43. Synthetic-data treatment

When sample/golden data is loaded:

Persistent badge:

**Synthetic validation data**

Visible on:

- header;
- Results;
- Structure Detail;
- Reports & Exports setup;
- generated report metadata;
- Run Summary.

Synthetic data must never look like a live project run.

---

# 44. Privacy treatment

Privacy messaging is present but not alarmist.

Home:

**Your workbook is processed locally in this browser.**

Audit/Help explains:

- no backend workbook upload;
- no project data in URL;
- standard audit export is privacy-reduced.

---

# 45. Branding treatment

Brand hierarchy:

1. HUF Supply-Side KPI Calculator / programme purpose
2. implementing organization context where appropriate
3. methodology/version
4. personal/author attribution only in About/footer/report metadata, subtle and secondary

Do not let personal branding dominate dashboards or reports.

---

# 46. Report visual system

Reports use the same visual language as the app:

- strong title hierarchy;
- clean tables;
- restrained charts;
- coverage/assurance footers;
- run/version metadata;
- no decorative cover clutter.

Management report:

- summary first;
- geography/assurance;
- concise structure signals.

Technical/M&E report:

- route/status detail;
- structure/evidence;
- trace/validation;
- audit/version notes.

---

# 47. Empty-state examples

### No validation issues

**No blocking validation issues found.**  
Warnings, if any, remain listed below.

### No evidence pending

**No evidence-pending results in this scope.**

### No matching structures

**No structures match the current filters.**  
[Clear filters]

### No daily trace

**This route does not use a daily calculation trace.**

---

# 48. Loading/progress behavior

Use:

- inline skeletons for analytical content;
- explicit progress labels for calculation/report generation;
- no fake percentage unless actual progress is measurable;
- no indefinite spinner without explanatory text for long operations.

---

# 49. Error-prevention principles

The UI must prevent:

- calculating with unresolved blocking mapping conflicts;
- confusing warning with blocker;
- exporting stale results as current;
- reporting a filtered result without scope disclosure;
- treating accepted methodology assurance as formal HUF certification;
- hiding HOLD/excluded/not-calculated entities;
- editing controlled formulas through settings.

---

# 50. Screen-to-role emphasis

| Screen | Programme Manager | Engineer | M&E/MIS | Assurance Reviewer | Auditor |
|---|---:|---:|---:|---:|---:|
| Upload/Preflight | Medium | Medium | High | Low | Low |
| Mapping | Low | Medium | High | Low | Medium |
| Validation & Correction | Medium | High | High | Medium | Medium |
| Results | High | High | High | Medium | Medium |
| Geography | High | High | High | Medium | Medium |
| Structure Detail | Medium | High | High | High | High |
| Daily Trace | Low | High | Medium | Low | High |
| Assurance & Evidence | Medium | Medium | High | High | High |
| Reports & Exports | High | High | High | Medium | High |
| Audit & Methodology | Low | High | High | Medium | High |

---

# 51. P0 screen acceptance criteria

## UX-01 Upload

- upload via picker and drag/drop;
- sample load;
- template download;
- privacy text;
- selected-file state.

## UX-02 Preflight

- sheet/row/version/reporting-period summary;
- errors/warnings;
- continue action.

## UX-03 Mapping

- exception-first;
- conflict resolution;
- confirmation;
- blocking-state clarity.

## UX-04 Preparation

- plain-language preparation summary;
- no silent coercion.

## UX-05/06 Validation

- issue grouping;
- scope effect;
- source location;
- correction;
- readiness summary.

## UX-07 Calculate

- controlled progress;
- explicit failure state;
- completion to Results.

## UX-08 Results

- KPI cards;
- assurance-aware totals;
- coverage;
- core charts;
- no certified wording.

## UX-09 Geography

- breadcrumb;
- governed hierarchy;
- reconciled child scope;
- presentation-only filtering.

## UX-10/11 Structures

- full register;
- non-calculated visibility;
- route/timing;
- calculation explanation;
- evidence/assurance.

## UX-12 Trace

- controlled E06 trace visualization/table;
- export actions.

## UX-13/14 Assurance

- five states;
- evidence pending;
- formal HUF status separate;
- governed refresh scope.

## UX-15/16 Reports

- explicit scope;
- report mode;
- XLSX/JSON/PDF actions;
- scope/version metadata.

## UX-17/18 Audit

- run identity;
- E01–E09 lineage;
- versions/hashes;
- release-evidence qualification;
- privacy status.

---

# 52. UX non-regression rules

The implementation must fail UX acceptance if it:

- introduces engine-strip primary navigation;
- hides excluded/HOLD/not-calculated entities;
- labels calculated total as certified;
- lets filters trigger controlled recalculation;
- removes audit/source lineage;
- makes evidence updates silently rewrite E06;
- uses screenshots for official PDFs;
- requires runtime CDN for controlled core;
- exposes raw private project state globally;
- obscures stale/invalidated runs.

---

# 53. Design deliverable boundary

This UX specification freezes:

- information architecture;
- screen inventory;
- wireframe-level composition;
- interaction behavior;
- responsive behavior;
- terminology;
- chart grammar;
- report-centre interaction;
- accessibility expectations.

It does not freeze:

- exact CSS values;
- exact hex colours;
- final icon library;
- animation timing;
- pixel-perfect spacing;
- production component code.

Those are implemented in Phase 7 within this frozen design behavior.

---

# 54. UI/UX acceptance status

**APPROVED / FROZEN v1.0**

Controlled-methodology impact:

**NONE**

Classification:

**GREEN presentation design + AMBER workflow interaction design around the protected core**

---

# 55. Next phase

**Phase 7 — Controlled Implementation**

Implementation must begin with foundation work only after:

- PRD v1.0 is frozen;
- Technical Architecture v1.0 is frozen;
- UI/UX Specification v1.0 is frozen.

Recommended first implementation batch:

**7A — Foundation**
- repository shell;
- protected-core integration;
- protected-core manifest;
- app controller;
- state store;
- pipeline orchestrator;
- worker boundary;
- dependency/vendor adapters;
- initial test harness.

Every implementation batch must update the living Master Rebuild Plan before closure.
