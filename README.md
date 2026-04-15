# @flyto/design-tokens

Canonical design values for the **Flyto Platform** — shared between
`flyto-cloud` (Vue 3 + UnoCSS) and `flyto-cortex` (React 19 + Mantine v8 +
Tailwind v4). One source of truth for colours, gradients, shadows,
animations, radii, spacing, typography.

Dark-only. Purple brand (`#8B5CF6`) × cyan accent (`#06B6D4`) × pink/orange
secondary accents.

## Install

Today this lives in-repo and is consumed via a relative path. Add to the
consumer's `package.json`:

```json
{
  "dependencies": {
    "@flyto/design-tokens": "file:../flyto-design-tokens"
  }
}
```

(When we publish, flip `file:` → semver.)

## Consume

### JavaScript / TypeScript

```ts
import {
  purple, cyan, semantic,
  brandPrimary, glassCard,
  shadowTokens, glow,
  durations, easings, animationShorthands,
  radiiTokens, layout, fonts, typeScale,
} from '@flyto/design-tokens'

// Mantine theme
createTheme({
  colors: { violet: [/* derive from purple[50..900] */] },
  primaryColor: 'violet',
  defaultRadius: 'lg',
  fontFamily: fonts.sans,
  shadows: shadowTokens,
})

// Inline style
<div style={{ background: glassCard, boxShadow: glow.purple }} />
```

### CSS

```css
@import '@flyto/design-tokens/css';          /* :root { --flyto-* ... } */
@import '@flyto/design-tokens/css/animations';

.card {
  background:    var(--flyto-gradient-glass-card);
  border-radius: var(--flyto-radius-2xl);
  box-shadow:    var(--flyto-shadow-card);
  transition:    var(--flyto-transition-normal);
}

.card:hover {
  box-shadow: var(--flyto-shadow-card-hover), var(--flyto-glow-purple);
  animation:  var(--flyto-duration-normal) var(--flyto-ease-standard) flyto-fade-in-up;
}
```

### UnoCSS preset (Cloud)

Map tokens → utilities with a short preset — e.g. `bg-flyto-purple` →
`--flyto-purple-500`, `shadow-flyto-card` → `--flyto-shadow-card`.

## What's inside

| Module        | Contains                                          |
|---------------|---------------------------------------------------|
| `colors`      | purple / cyan / pink / orange scales, semantic,   |
|               | surface, text, border, presence wheel, category   |
| `gradients`   | brand / border-flow / glass / blob / node recipes |
| `shadows`     | elevation scale + branded glows + focus ring      |
| `animations`  | keyframe names, durations, easings, shorthands    |
| `radii`       | rect / node scales                                |
| `spacing`     | spacing scale, layout constants, fonts, type      |

## Invariants

- **Dark only.** Never add light-mode overrides here. If light ever
  ships, it lives in a separate file + opt-in import.
- **135° gradients** by convention. Anything else is a one-off, not a
  token.
- **No emoji.** Icon semantics belong to each product (cortex uses
  `lucide-react`; cloud uses `lucide-vue-next`).
- **Purple before blue.** `#8B5CF6` is the Flyto brand colour; the blue
  in gradients is cyan (`#06B6D4`), never a true blue.

## Changelog

See repo-level CHANGELOG. Bumping a token here is a platform-wide change
— expect both Cloud and Cortex to rebuild their theme shell.
