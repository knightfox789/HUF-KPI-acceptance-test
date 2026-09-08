# HUF Supply-Side KPI Calculator

Browser-local preparation, controlled calculation, analysis and reporting for HUF supply-side water KPIs and person-days.

**Current build: 1.0.0-rc.1 — acceptance candidate, not a final release.** See `FINAL_VALIDATION_STATUS.json` for open gates and `docs/continuity/master-plan.md` for the governing history.

## Workflow

Upload a controlled XLSX or try a labelled synthetic sample. Review preflight and mapping, prepare data, resolve validation findings, then calculate valid scopes. Results, geography, structures, evidence, exports and reports share the prepared result package.

Source processing occurs in the browser. Corrections are recorded session overlays; the original workbook stays unchanged. Replacing the source invalidates dependent results. Download outputs before closing the session.

Calculated total includes accepted, provisional and warning results. “Accepted under controlled methodology” is separate from formal HUF confirmation. Missing, HOLD and excluded numeric results remain null; zero is preserved only when the source result is zero.

## Reports and exports

- Compact CSV/XLSX and multi-sheet management/technical XLSX.
- Structure daily-trace CSV/JSON with run/version metadata.
- Structured management and technical PDFs at the governed hierarchy levels.
- Audit JSON, audit ZIP, bulk report ZIP and combined PDF.
- Filter and scope membership are retained. Default result exports omit participant names/tokens, sensitive demographics and source notes.

## Development and verification

No build system or runtime CDN is required. Serve the repository with a static HTTP server, or build the curated Pages payload with `npm run build:pages`.

```sh
npm install --no-save --package-lock=false jszip@3.10.1 @xmldom/xmldom@0.9.12 playwright@1.55.0
npm test
npm run test:product
node tests/protected/run.mjs
node tests/protected/remaining80.mjs
node tests/protected/design6-summary.mjs
npm run build:pages
npx playwright install --with-deps chromium
npm run accept:browser
```

The protected harness extracts unmodified original test sources and fixtures into a temporary directory and executes them against this repository's protected core. The remaining-80 runner follows the frozen scenario registry plus the approved VAL-027 v1.1 positive invariant. Four calculation-state injection cases use the explicit test-only prepared-state/tolerance oracle; they do not claim production execution of arbitrary mutated daily snapshots.

The browser runner accepts `HUF_LIVE_URL` for the authorized deployed project-subpath URL. CI retains result JSON and screenshots. Runtime evidence may regenerate timestamps and hashes; regenerate the source manifest only after collecting final evidence, then verify it.

## Governance and release

The sole authorized repository is `knightfox789/HUF-KPI-acceptance-test`. Protected E01–E09 and controlled configuration files must remain identical to `PROTECTED_CORE_MANIFEST.json`. Product changes must not replace formula, route, assurance, null or aggregation semantics.

Final release requires fresh logical/physical tests, browser and actual deployed workflow acceptance, privacy, cross-surface reconciliation, report/visual QA, an approved representative production performance fixture/budget, and a complete release/evidence manifest. Passing a small synthetic golden is not production-scale acceptance.
