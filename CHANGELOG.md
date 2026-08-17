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

- Added a light palette, `css/tokens-light.css`, and the dark override that
  makes dual-mode possible, `css/tokens-dark.css`. A dark-only consumer imports
  nothing new and is unaffected. **It is not a mechanical inversion:** the
  status hues are tuned against a near-black ground and measure 1.86:1 to
  2.77:1 on white, so the light palette gives them its own values, each clearing
  4.5:1. `--flyto-text-link` moves from purple-400 (2.72:1 on white) to
  purple-600 (5.70:1) for the same reason.
- Added `scripts/generate-dark-override.mjs`. The dark override is generated,
  because it is by definition a second copy of values that already exist and
  hand-maintaining it would reintroduce the drift this package exists to
  prevent. `npm run docs:check` fails when it is stale, and the contract check
  fails if the light palette reuses a dark status hue.

- Added a dense semantic layer for high-density operator surfaces: a second
  surface ramp (`surfaceDense` / `--flyto-surface-dense-*`), a three-level dense
  text ramp, an operational `status` family (healthy / attention / stopped /
  idle, each with a soft tint mixed from its own hue), `--flyto-border-strong`,
  a control-height scale including the coarse-pointer minimum, a dense type
  ramp, `--flyto-radius-dense`, and two dense shadows. All additive; no existing
  token changes value.
- Added a mirror guard: every JavaScript record published as CSS must agree with
  the CSS name for name and value for value. Scoped to the records this change
  introduces, because the pre-existing `colors.js` / `tokens.css` drift on
  surfaces, text and borders is still open.

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
