# Decisions

## 2026-08-17: Light mode ships, and it is not an inversion

Decision: the package publishes `css/tokens-light.css` and a generated
`css/tokens-dark.css`. Only the semantic layer flips; ramps, spacing, radii,
type and motion are mode-independent. Dark-only consumers import neither and are
unaffected. The light palette gives the status family and `--flyto-text-link`
their own values rather than reusing the dark ones, and a contract check refuses
a light palette that reuses them.

Reason: consumers with light surfaces had no shared vocabulary to reference, so
they were reaching for whatever was nearest — in Cloud's case, the operations
console's dark-only HUD tokens, which is how a control-room palette ended up in
a workflow list.

The palette cannot be derived by inverting the dark one, and this is the whole
reason the check exists. The status hues are chosen against a near-black ground;
on white, teal measures 1.86:1, amber 2.15:1, slate 2.56:1 and red 2.77:1. Three
of those are below the 3:1 floor for a non-text indicator and none is legible as
a label. The light palette takes the same hues several steps darker so each
clears 4.5:1 and can carry a word rather than only a dot.

Surface separation is asymmetric for a related reason. On dark, a panel is
lifted by raising lightness; on light that direction is spent, so the ramp
descends into greys and depth leans on the border — which is why
`--flyto-border` is a solid grey in light mode and a low-alpha slate in dark.

## 2026-08-17: Density is a published dimension, not a consumer's private fork

Decision: the package publishes a second, denser set alongside the normal one —
`surfaceDense`, `textDense`, `status`, `controlHeights`, `typeScaleDense`,
`--flyto-radius-dense`, `shadowsDense`. A product picks one ramp per surface and
stays on it. Operational `status` is kept separate from `semantic` rather than
folded into it.

Reason: consumers building control rooms and monitoring consoles were inventing
these locally — Cloud had 48 of them under its own prefix — because the shared
set only described one density. A value a consumer must invent is a value that
drifts. Publishing the dimension keeps one source without pretending every
surface should look the same.

`status` stays separate from `semantic` because they answer different questions.
`semantic.success` answers "did this operation succeed", read once after an
action; `status.healthy` answers "what is this thing doing right now", read
continuously. Teal rather than emerald for healthy: beside amber on a dark
ground, emerald separates by lightness, and lightness is the first thing a
glance loses.

## 2026-08-17 - Consumers bind to brand roles, never to ramp steps

Decision: the package exposes four brand roles — `brand.base`, `brand.strong`,
`brand.deep`, `brand.focusRing`, mirrored as `--flyto-brand`,
`--flyto-brand-strong`, `--flyto-brand-deep`, `--flyto-focus-ring` — and those
are what consuming frontends reference. `--flyto-purple-500` and the rest of
the ramp stay published, but a consumer stylesheet binding directly to a ramp
step is treated as a defect. Each role is declared as a reference to the ramp,
never as a copy of the hex, and a contract check enforces that.

Reason: a step is a position, not a meaning. A stylesheet that says
`purple[500]` records neither why the colour is there nor what else should move
with it, so a regional, white-label, or accessibility-driven recolour has no
single place to change and has to be done by search-and-replace across every
consumer. Roles make the swap a one-line edit here.

## 2026-08-17 - The spacing scale is published to CSS, whole

Decision: `css/tokens.css` emits the complete `spacing` scale as
`--flyto-space-*`, not the subset any one consumer currently needs.

Reason: the scale was JavaScript-only, so CSS consumers copied the numbers into
their own variables and the shared scale stopped being shared. A partial export
would reproduce that the first time a consumer needed a step we had not
emitted.

## 2026-08-14 - Public positioning stays at the token boundary

Decision: describe the package as "One set of colors, spacing, type, and motion
for every Flyto2 frontend." Lead with direct package installation and CSS use;
keep framework adapters, components, product architecture, and named consumer
ownership outside this repository's public role.

Reason: the package prevents frontend design-value drift. Broader platform or
product claims obscure that narrow job and can become stale independently of
the published token contract.

## 2026-08-14 - Package changes use the governed coding route

Decision: keep pinned dependency installation, the complete package verifier,
and strict Indexer validation in `.flyto/coding.yaml`. Public package copy and
token-contract changes require an independent Codex audit after those checks.

Reason: package metadata and exported tokens are public compatibility surfaces;
they need the same repeatable gate as runtime changes.

## 2026-06-21 - Project memory bootstrapped

Decision: track Flyto2 product-line role, repo boundary, state, roadmap, tasks,
and handoffs in this repo.

Reason: `flyto-design-tokens` must be maintainable by future agents without relying on
conversation memory.
