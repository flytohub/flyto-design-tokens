# Decisions

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
