# HUF Supply-Side KPI Calculator — User guide

Open the application in a current desktop Chromium browser. Processing takes place in browser memory; source workbooks are not uploaded. Keep the tab open until you have downloaded the outputs you need.

1. Download the governed input template or select a clearly labelled synthetic sample. Use one reporting period per workbook. Blank means unknown; do not fill missing measurements with zero.
2. Upload the XLSX and review its fingerprint, sheets and preflight findings. Confirm any mapping exceptions before preparing data.
3. Review the data preparation summary and field provenance. Preparation does not itself run validation.
4. Validate the prepared data. Inspect findings in Review & Correct. A source correction requires a reason and creates a session overlay; the original workbook remains unchanged. Corrections invalidate downstream results and require preparation/validation again.
5. Calculate valid scopes. Routing, calculation, assurance, aggregation and audit run in controlled order. A failed stage does not publish stale results as current.
6. Explore Results, Geography and Structures. Scope, status, component, route, type and search filters change the presentation of the prepared results. They do not rerun the methodology. Select a structure to inspect its daily water balance or person-day basis.
7. Inspect assurance and evidence. Accepted under controlled methodology is distinct from formal HUF confirmation. Warning and provisional results remain visible in separate status buckets. Excluded, HOLD and uncalculated quantities remain null.
8. Export the selected scope from Reports: CSV/XLSX, management or technical PDF, audit JSON/ZIP, bulk ZIP or combined PDF. Full precision is retained in data exports. Empty CSV selections are disabled; empty XLSX/PDF reports retain metadata and explain the empty selection.

## Capacity and operating limits

The initial qualification workload is synthetic: 1,000 structures and 1,000 person-day records over a 365- or 366-day calendar, five districts and at least 50 villages. It is derived from the controlled golden workbooks, not actual production data. The reference measurement environment is GitHub-hosted Ubuntu, four CPUs, approximately 16 GB RAM, Chromium desktop at 1440×1000. Actual devices may vary; larger or materially different portfolios require further qualification. Consult the release capacity evidence for measured timings and the fixed budget.

Tablet and mobile layouts support inspection and navigation. Large-workbook capacity is qualified on desktop only. Browser memory is session-local. Download outputs before reloading, replacing the source or closing the tab. No cross-session recovery of an unsaved workbook is promised.

## Privacy and interpretation

Standard result exports omit participant names, sensitive demographics and source notes. Explicit source detail views remain private to the browser session. Project values are not encoded in URLs. Synthetic samples demonstrate application behavior and are not evidence of real project impact.
