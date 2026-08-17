/** Shared spacing and typography scales for Flyto2 frontends. */

export const spacing = {
  0: '0',
  px: '1px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
}

export const layout = {
  sidebarWidth: '260px',
  topbarHeight: '56px',
  pagePadding:  '24px',
  pagePaddingLg: '96px',
  contentMaxWidth: '1280px',
}

export const fonts = {
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  mono: "'JetBrains Mono', Menlo, Monaco, Consolas, monospace",
}

/**
 * Control heights. The package had no control scale at all, which is why every
 * consumer invented one. `md` is the dense default; `touch` is the accessible
 * minimum a coarse pointer needs regardless of viewport width, because a
 * touchscreen wall display is wide and still not clickable at 32px.
 */
export const controlHeights = {
  sm:    '26px',
  md:    '32px',
  lg:    '38px',
  touch: '44px',
}

/**
 * Shared type scale for consistent reading sizes across consuming frontends.
 */
export const typeScale = {
  xs:  '0.8125rem',   // 13px
  sm:  '0.9375rem',   // 15px
  md:  '1.0625rem',   // 17px — body default
  lg:  '1.1875rem',   // 19px
  xl:  '1.4375rem',   // 23px
  h4:  '1.125rem',
  h3:  '1.375rem',
  h2:  '1.75rem',
  h1:  '2.25rem',
}

/**
 * Dense type ramp. Sits below `typeScale` and overlaps it at one step — `md`
 * here is `typeScale.xs` — which is the seam between a settings page and a
 * console. A product on this ramp fits meaningfully more state on one screen;
 * nothing else should use it.
 */
export const typeScaleDense = {
  xs: '0.6875rem',   // 11px
  sm: '0.75rem',     // 12px
  md: '0.8125rem',   // 13px — same step as typeScale.xs
  lg: '0.875rem',    // 14px
}
