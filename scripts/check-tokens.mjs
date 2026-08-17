import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

import * as tokens from '../src/index.js'

const requiredExports = [
  'purple', 'cyan', 'brand', 'semantic', 'status', 'surface', 'surfaceDense',
  'text', 'textDense', 'border', 'shadowsDense', 'controlHeights', 'typeScaleDense',
  'brandPrimary', 'brandAccent', 'glassCard',
  'shadowTokens', 'focusRing', 'glow',
  'durations', 'easings', 'keyframeNames', 'animationShorthands',
  'radiiTokens', 'nodeRadii', 'spacingTokens', 'layout', 'fonts', 'typeScale',
]

for (const name of requiredExports) {
  assert.ok(name in tokens, `missing JavaScript export: ${name}`)
}

const css = await readFile(new URL('../css/tokens.css', import.meta.url), 'utf8')
const animations = await readFile(new URL('../css/animations.css', import.meta.url), 'utf8')
const declarations = await readFile(new URL('../src/index.d.ts', import.meta.url), 'utf8')

const cssVariables = [
  '--flyto-purple-500', '--flyto-cyan-500', '--flyto-brand', '--flyto-success',
  '--flyto-gradient-brand-primary', '--flyto-shadow-focus', '--flyto-focus-ring',
  '--flyto-radius-lg', '--flyto-radius-dense', '--flyto-font-sans',
  '--flyto-duration-normal', '--flyto-surface-dense-ground',
  '--flyto-text-dense-primary', '--flyto-status-healthy', '--flyto-border-strong',
  '--flyto-control-h', '--flyto-type-dense-md',
]
for (const name of cssVariables) {
  assert.ok(css.includes(`${name}:`), `missing CSS variable: ${name}`)
}

const cssValue = (name) => css.match(new RegExp(`${name}:\\s*([^;]+);`))?.[1].trim()

/* The brand roles and the spacing scale must stay declared as references, not
 * as copies of the value. A literal here is how a CSS/JS pair starts to drift:
 * the ramp moves, the role keeps the old hex, and nothing fails. */
const brandRoleReferences = {
  '--flyto-brand':        'var(--flyto-purple-500)',
  '--flyto-brand-strong': 'var(--flyto-purple-600)',
  '--flyto-brand-deep':   'var(--flyto-purple-700)',
  '--flyto-focus-ring':   'var(--flyto-purple-400)',
}
for (const [name, expected] of Object.entries(brandRoleReferences)) {
  assert.equal(cssValue(name), expected, `${name} must be declared as ${expected}`)
}

/* Each JS record that is also published as CSS must agree with the CSS, name
 * for name and value for value. This is the check the package did not have
 * when `colors.js` and `tokens.css` drifted apart on surfaces, text and
 * borders — a drift that is still open and deliberately out of scope here, so
 * the guard covers only the records this change introduces. */
const mirroredRecords = [
  ['--flyto-surface-dense-', tokens.surfaceDense],
  ['--flyto-text-dense-', tokens.textDense],
  ['--flyto-status-', tokens.status],
  ['--flyto-type-dense-', tokens.typeScaleDense],
  ['--flyto-shadow-dense-', tokens.shadowsDense],
]
for (const [prefix, record] of mirroredRecords) {
  for (const [key, value] of Object.entries(record)) {
    const name = `${prefix}${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`
    const css = cssValue(name)
    if (value.startsWith('var(') || css?.startsWith('var(') || css?.startsWith('color-mix(')) continue
    assert.equal(css, value, `${name} must match its JavaScript counterpart`)
  }
}

const controlHeightNames = { sm: '--flyto-control-h-sm', md: '--flyto-control-h', lg: '--flyto-control-h-lg', touch: '--flyto-control-h-touch' }
for (const [key, name] of Object.entries(controlHeightNames)) {
  assert.equal(cssValue(name), tokens.controlHeights[key], `${name} must match controlHeights.${key}`)
}
assert.equal(cssValue('--flyto-radius-dense'), tokens.radiiTokens.dense, '--flyto-radius-dense must match radiiTokens.dense')

for (const [step, value] of Object.entries(tokens.spacingTokens)) {
  assert.equal(
    cssValue(`--flyto-space-${step}`), value,
    `--flyto-space-${step} must match spacingTokens[${step}]`,
  )
}

for (const name of Object.values(tokens.keyframeNames)) {
  assert.ok(animations.includes(`@keyframes ${name}`), `missing keyframe: ${name}`)
}

for (const name of Object.keys(tokens)) {
  assert.match(declarations, new RegExp(`\\b${name}\\b`), `missing TypeScript declaration: ${name}`)
}

process.stdout.write(`design token contract passed: ${Object.keys(tokens).length} exports\n`)
