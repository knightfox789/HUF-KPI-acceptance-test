# HUF KPI Phase 7B-0 Foundation Hardening Report

## Status

**PASS — Foundation Hardening Gate closed**

## Purpose

Close the integration/state/Worker/CI weaknesses identified by the Phase 7A deep foundation audit before enabling the real IMP-7B Upload / Workbook Preflight / Mapping workflow.

## Protected methodology

Protected E01–E09 and controlled configs were not modified.

Fresh source-release parity after hardening:

**27/27 protected files byte-identical to final v1.0.0.**

## Hardening completed

1. Controlled config JSON is runtime hash-checked against `PROTECTED_CORE_MANIFEST.json` and recursively frozen before engine use.
2. Protected pipeline adapter no longer exposes the protected store or public stage-function map.
3. Pipeline runtime initializes pinned local JSZip through the vendor boundary.
4. Worker RPC now supports capabilities, reset, E01 Intake, E02 Mapping preview/confirmation, downstream governed stages and public state.
5. Worker execution is capability-probed. Because the protected XLSX parser requires `DOMParser` and standard Workers do not provide it, the product uses the same protected pipeline on the main thread when Worker XLSX prerequisites are unavailable. The protected parser is unchanged.
6. App state is recursively frozen for plain state structures; nested presentation filters can no longer be mutated out of band.
7. Controller no longer exposes mutable app-state, snapshot-registry or orchestrator primitives to UI code.
8. Reset clears draft/completed snapshot registry state.
9. Completed E09 snapshot lineage is archived and locked; invalidation starts a new draft lineage instead of overwriting the completed archive.
10. E01 and E02 failures now enter the governed `FAILED` state with stage and prior-state context.
11. Source/mapping/pipeline/view helper modules are now used as state-slice factories under one authoritative app-state store.
12. Full JavaScript syntax checking is part of the actual test gate.
13. Release-manifest SHA/size/inventory verification is part of `npm test`.
14. Validation evidence is regenerated deterministically from the actual hardening test run.
15. CI retains machine-readable validation artifacts.
16. GitHub Pages now builds and deploys a curated `_site` payload rather than repository root.

## Worker decision

The original preference remains Worker-first where the controlled parser can execute correctly.

The audit found that E01's protected parser needs both JSZip and `DOMParser`. JSZip can be loaded in a Worker, but standard Web Workers do not expose `DOMParser`.

Therefore the hardened client does this:

1. start/probe the Worker;
2. use Worker mode only when controlled XLSX prerequisites are present;
3. otherwise terminate the incompatible Worker and use the same protected adapter on the main thread;
4. keep one identical orchestrator/adapter contract regardless of execution mode.

This implements the tested same-thread fallback explicitly allowed by Technical Architecture v1.0 without modifying the protected parser or adding an ungoverned XML library.

## Final hardening suites

Non-manifest suites:

**12/12 PASS**

Including:

- protected core manifest — 37/37 checks;
- protected engine imports — 10/10;
- state/invalidation — 9/9;
- state hardening — 6/6;
- orchestrator/error handling — 10/10;
- controlled config hardening — 6/6;
- Worker runtime — 4/4;
- static architecture — 0 violations;
- relative imports — 0 unresolved;
- config parsing — 0 failures;
- JavaScript syntax — all checked modules PASS;
- curated Pages payload — PASS.

Release manifest gate:

**PASS**

## Adversarial sensitivity probes

### Manifest mutation probe

A manifest-controlled `app/bootstrap.js` copy was changed without regenerating the manifest.

Expected: CI gate fails.

Result:

**PASS — manifest verifier failed as designed and identified the changed SHA/size.**

### Syntax mutation probe

An intentional syntax error was added to an unused service placeholder.

Expected: syntax gate fails.

Result:

**PASS — syntax checker failed as designed and identified the file/line.**

These probes confirm the new gates detect the two exact CI weaknesses discovered in the deep audit.

## Release integrity

The final hardened package includes a regenerated release manifest covering the source payload (excluding the manifest itself and generated `_site` deployment directory).

The current protected-core manifest remains unchanged from Phase 7A because protected files remain unchanged.

## Remaining items intentionally deferred

- Blank controlled `HUF-SS-INPUT-v1.1` template/download — IMP-7B workflow.
- Full correction identity/history — IMP-7C.
- Validation-readiness guard before calculate — IMP-7C.
- Browser UAT of real Upload/Mapping UI — IMP-7B.
- Full Design-6/physical fixture/browser/deployment certification — later release gates.

## Decision

**IMP-7B-0 PASS / CLOSED.**

The rebuild may now proceed to:

**IMP-7B — Intake / Workbook Preflight / Mapping implementation.**
