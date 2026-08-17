/**
 * Flyto2 brand palette.
 *
 * Shared values belong here when multiple Flyto2 frontends need the same
 * semantic role. Consumer-specific colors remain in the consuming repository.
 */

/** Primary brand — purple. Used for primary actions, focus rings, active nav. */
export const purple = {
  50:  '#f5f3ff',
  100: '#ede9fe',
  200: '#ddd6fe',
  300: '#c4b5fd',
  400: '#a78bfa',   // brand-light
  500: '#8b5cf6',   // brand (canonical Flyto2 purple)
  600: '#7c3aed',   // brand-dark
  700: '#6d28d9',
  800: '#5b21b6',
  900: '#4c1d95',
}

/** Accent — cyan. Used for informational callouts and as a gradient partner. */
export const cyan = {
  50:  '#ecfeff',
  100: '#cffafe',
  200: '#a5f3fc',
  300: '#67e8f9',
  400: '#22d3ee',
  500: '#06b6d4',   // brand accent
  600: '#0891b2',
  700: '#0e7490',
  800: '#155e75',
  900: '#164e63',
}

/** Accent — pink. Available for shared secondary emphasis. */
export const pink = {
  400: '#f472b6',
  500: '#ec4899',
  600: '#db2777',
}

/** Accent — orange. Triggers / warnings. */
export const orange = {
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
}

/**
 * Brand roles.
 *
 * Consumers bind to a role, never to a step on the purple scale. A step is a
 * position in a ramp; it carries no meaning, so `purple[500]` in a consumer
 * stylesheet is unreadable and — more to the point — unswappable. A regional
 * or white-label build changes `brand` here and every consumer follows; if the
 * consumers had bound to `purple[500]` there would be nothing to change.
 */
export const brand = {
  base:      purple[500],
  strong:    purple[600],   // filled brand surfaces: white text clears 4.5:1
  deep:      purple[700],   // pressed / active state of a filled surface
  focusRing: purple[400],   // focus outline, on any surface in the dark palette
}

/** Semantic colors — aligned across products. */
export const semantic = {
  success: '#10b981',
  successDark: '#059669',
  warning: orange[500],
  warningDark: orange[600],
  error: '#ef4444',
  errorDark: '#dc2626',
  info: '#3b82f6',
  infoDark: '#2563eb',
}

/** Dark surfaces — the only mode we ship today. */
export const surface = {
  darkest:   '#0F172A',   // body background
  base:      '#0f172a',
  secondary: '#1e293b',   // sidebar / card base
  tertiary:  '#334155',   // elevated card / hover
  overlay:   'rgba(0, 0, 0, 0.7)',
}

/**
 * Dense surfaces — a second, deeper ramp for high-density operator UI.
 *
 * Not a theme and not a replacement: a product picks one ramp per surface.
 * The normal ramp is tuned to lift a card off a page at reading distance,
 * which fails in the other direction — panels packed four to a screen need a
 * ground low enough that a one-pixel seam still reads as separation. The step
 * from `ground` to `panel` is 1.085:1, and that is the whole depth budget.
 */
export const surfaceDense = {
  ground: '#080a12',
  sunken: '#05070d',
  panel:  '#101522',
  raised: '#151b2c',
  hover:  '#1a2136',
}

/**
 * Operational status — orthogonal to `semantic`, and deliberately not the same
 * hues. `semantic.success`/`error` answer "did this operation succeed"; these
 * answer "what is this thing doing right now", read continuously rather than
 * once after an action. Teal rather than emerald for healthy, because emerald
 * beside amber on a dark ground separates by lightness and lightness is what a
 * glance loses first.
 */
export const status = {
  healthy:   '#2dd4bf',
  attention: orange[500],
  stopped:   '#f87171',
  idle:      '#94a3b8',
}

/** Text colours on dark surfaces. */
export const text = {
  primary:   '#f8fafc',
  secondary: '#cbd5e1',
  tertiary:  '#94a3b8',
  inverse:   '#0f172a',
  link:      purple[400],
}

/**
 * Dense text ramp. Three levels, never four — a fourth becomes a gradient of
 * near-identical greys at this size. Read at 11-14px on `surfaceDense`, where
 * the ramp above stops separating.
 */
export const textDense = {
  primary: '#e8ecf6',
  muted:   '#97a1b8',
  faint:   '#7d879e',
}

/** Borders — subtle by default, branded for focus. */
export const border = {
  default: 'rgba(148, 163, 184, 0.1)',
  light:   'rgba(148, 163, 184, 0.06)',
  focus:   purple[500],
  handle:  '#374151',
}

/**
 * Presence palette — six distinct hues for multi-user cursors / avatars.
 * Order is stable; pick by (hash(userId) % 6) for deterministic assignment.
 */
export const presence = [
  semantic.error,
  cyan[500],
  purple[500],
  semantic.success,
  orange[500],
  pink[500],
]

/**
 * Category tags. Colours harmonise with the four brand accents while keeping
 * stable semantic roles across consuming frontends.
 */
export const category = {
  document: cyan[500],
  code:     purple[500],
  media:    pink[500],
  data:     orange[500],
  config:   '#64748b',
  archive:  '#475569',
}
