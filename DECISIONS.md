# Decisions

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
