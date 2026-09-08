# Recovery and future changes

The only authorized repository for this rebuild is `knightfox789/HUF-KPI-acceptance-test`. Start with the released tag and the SHA-256 file supplied with the release. Preserve the original archives and verify their hashes before extracting a working copy.

The source ZIP contains a manifest of its payload files; `RELEASE_MANIFEST.json` excludes its own hash to avoid a circular checksum. The release-level SHA-256 file binds that entire source ZIP. The deployable site ZIP is the curated payload accepted before deployment. Runtime CI and live evidence are retained separately so regenerated evidence cannot silently change source-package checksums.

To reproduce validation, use the commands in README.md. Run `npm test`, product checks and the protected Design-6 suites; build the curated Pages payload; run browser and capacity acceptance. The deployed-byte verifier compares all served files to that exact accepted payload. A final release is published only after the live browser gate succeeds.

## Controlled change boundary

- Product UI, accessibility, report layout and navigation changes must preserve scope, status, null, precision, lineage and calculation invariants.
- Integration, state, transport, mapping and export changes require regression and relevant browser checks. Source corrections preserve original workbook bytes and invalidate downstream snapshots.
- E01–E09, frozen input schema, route/formula/assurance/aggregation policies and protected goldens are a controlled methodology boundary. Do not edit them as a routine product fix. A methodology change requires an explicit governed decision and a new baseline/version.

Record the purpose, affected files, protected-boundary assessment, checks, outcomes and remaining work in the master plan before considering each procedure complete. Prior plan entries are historical evidence; the current checkpoint and release certificate state the current outcome.

## Deployment and recovery

A merge to main starts Pages validation. Both browser acceptance and capacity acceptance must pass before deployment. After deployment, all served bytes and the complete live browser journey are checked. A failed live gate blocks release publication and retains evidence for repair. Do not describe a deployed-but-failed candidate as a final release.

For a rollback, use a new reviewed commit restoring the last accepted release source and rerun deployment gates. Preserve failed-run evidence and explain the rollback in the master plan. Never rewrite protected baseline history or silently overwrite a published tag.

The Obsidian archive contains the current master plan, frozen design documents, user guide, change guide and release notes as Markdown. Open its extracted folder as a vault. It is a restart/reference package; the tagged repository remains the authoritative source code.
