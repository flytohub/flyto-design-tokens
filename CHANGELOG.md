# Changelog

## Unreleased

### Changed

- Focused public positioning on one shared set of colors, spacing, type, and
  motion for every Flyto2 frontend, with the README now leading with the
  shortest supported CSS setup.
- Removed named-consumer assumptions and hand-maintained contract counts from
  public copy; the generated reference remains the exact source-backed
  inventory.
- Prepared a metadata-only npm patch release so live registry backlinks and the
  focused package description can replace the stale pre-Flyto2 listing.
- Corrected npmjs publishing metadata and removed the nonfunctional CommonJS
  `require` condition from the ESM package.

### Added

- Added brand role tokens — `brand` in JavaScript, `--flyto-brand`,
  `--flyto-brand-strong`, `--flyto-brand-deep` and `--flyto-focus-ring` in CSS —
  so consumers bind to a role instead of a step on the purple ramp. Every role
  is declared as a reference to the existing scale, so nothing renders
  differently; what changes is that a white-label or regional build now has one
  place to swap.
- Emitted the existing `spacing` scale as `--flyto-space-*` CSS custom
  properties. The scale has always been exported to JavaScript and was never
  available to CSS consumers, who hand-rolled copies of it.
- Added contract guards that fail if a brand role is written as a literal
  instead of a reference, or if a `--flyto-space-*` value stops matching
  `spacingTokens`.

- Added a governed Flyto2 coding contract for dependency installation, package
  verification, and strict Indexer validation.

- Added complete package/API documentation and a JavaScript/CSS/TypeScript
  contract smoke test.
- Added a generated inventory for all runtime exports, CSS custom properties,
  keyframes, and package entry points.
- Added CI verification, package dry-run checks, a license, and contribution
  guidance.
- Added project memory files, workflow docs, and handoff registry.
