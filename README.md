# HUF Supply-Side KPI Calculator — Clean Rebuild

## Current implementation

**Version:** `0.1.6-acceptance`  
**Phase:** `IMP-7B-E — Exception-first Mapping Review`

This package preserves the protected HUF v1.0.0 E01–E09 methodology byte-for-byte while implementing the governed workbook-entry, Workbook Preflight and exception-first Mapping Review workflow.

Implemented through this baseline:

- `.xlsx` upload/drag-drop, controlled samples and blank template;
- immutable source metadata, SHA-256 and browser-local privacy boundary;
- protected E01-backed Workbook Preflight;
- governed template-version agreement/injection and clean manifest-driven source packaging;
- protected E02 mapping preview through the existing adapter/controller command boundary;
- exception-first Mapping Review summary: mapped automatically, needs confirmation, conflicts and unmapped required;
- Needs attention / Confirmed / All fields / Advanced views;
- sheet mapping review and explicit confirmation;
- field mapping drawer with expected sheet, data type/unit, E02 method/confidence and protected candidate suggestions;
- controlled manual source selection and confirmation through E02 commands only;
- raw workbook sample rows withheld from product Mapping Review state;
- Core-unmapped, conflict and pending-confirmation workflow blocking;
- deterministic protected E02 final mapping snapshot/hash;
- downstream E03–E09 snapshot invalidation when a mapping changes;
- Data Preparation boundary preserved: E03 is not executed by this phase.

Next governed implementation work follows Mapping Review closure and the Phase 7 integration/browser sequence recorded in the living master plan.

Run validation:

```bash
npm test
```

Generate release manifest:

```bash
npm run release:manifest
```

Build governed source ZIP:

```bash
npm run release:zip
```

Build curated GitHub Pages payload:

```bash
npm run build:pages
```


## Browser / CI acceptance
IMP-7B-E adds a pinned Playwright/Chromium CI acceptance job that exercises a real controlled XLSX through Upload → protected E01 → Workbook Preflight → protected E02 Mapping Review → manual mapping → final mapping snapshot against the curated GitHub Pages payload. Local Chromium in the current build container is environment-blocked; a full IMP-7B browser PASS requires the compatible CI job and deployed Pages workflow evidence.
