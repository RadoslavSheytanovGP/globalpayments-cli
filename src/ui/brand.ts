import { stringWidth } from './ansi.js';
import { colorLevel, t, unicodeEnabled } from './index.js';
import { WORDMARK_LARGE, WORDMARK_MEDIUM } from './wordmark.js';

export const PRODUCT_NAME = 'Global Payments CLI';
export const DOCS_URL = 'https://developer.globalpayments.com';

export type BannerMode = 'full' | 'compact' | 'off';

/** Columns of blue field either side of the wordmark: wider for the large size, tight enough for 80 columns otherwise. */
function padX(art: readonly string[]): number {
  return art === WORDMARK_LARGE ? 3 : 2;
}

/**
 * The one-line lockup: the 'g' brand symbol as a chip, then the wordmark in the
 * guide's two weights (Black "global", Light "payments").
 */
export function lockup(): string {
  if (colorLevel() === 0) return 'global payments';
  return `${t.logo(t.strong(' g '))} ${t.strong('global')}payments`;
}

function fieldWidth(art: readonly string[]): number {
  return Math.max(...art.map((line) => stringWidth(line))) + padX(art) * 2;
}

/** Pick the largest wordmark that fits in `columns` (after any indent), or none. */
export function chooseWordmark(columns: number, rows: number): readonly string[] | undefined {
  if (!unicodeEnabled()) return undefined;
  if (rows < 16) return undefined;
  if (columns >= fieldWidth(WORDMARK_LARGE)) return WORDMARK_LARGE;
  if (columns >= fieldWidth(WORDMARK_MEDIUM)) return WORDMARK_MEDIUM;
  return undefined;
}

/**
 * The banner as lines, ready to print. Full mode puts the traced wordmark on a
 * Global Blue field (the guide's primary treatment), with a row of field above
 * and below for clear space. Without colour the field is dropped and the glyphs
 * stand on their own. Compact mode, narrow terminals and consoles without
 * Unicode fall back to the lockup.
 */
export function renderBanner(options: { mode: BannerMode; columns: number; rows: number; indent?: number }): string[] {
  if (options.mode === 'off') return [];
  const indent = ' '.repeat(options.indent ?? 1);
  const art = options.mode === 'full' ? chooseWordmark(options.columns - (options.indent ?? 1), options.rows) : undefined;
  if (!art) return [`${indent}${lockup()}`];

  const width = fieldWidth(art);
  const pad = ' '.repeat(padX(art));
  if (colorLevel() === 0) {
    return art.map((line) => `${indent}${pad}${line.trimEnd()}`);
  }
  const blank = t.logo(' '.repeat(width));
  return [
    `${indent}${blank}`,
    ...art.map((line) => `${indent}${t.logo(`${pad}${line}${' '.repeat(width - pad.length * 2 - stringWidth(line))}${pad}`)}`),
    `${indent}${blank}`
  ];
}

export type EnvironmentKind = 'sandbox' | 'production' | 'none';

/** A pill naming where requests will go. Production is impossible to miss. */
export function environmentBadge(kind: EnvironmentKind): string {
  if (colorLevel() === 0) {
    return kind === 'production' ? '[PRODUCTION]' : kind === 'sandbox' ? '[sandbox]' : '[no credentials]';
  }
  if (kind === 'production') return t.badgeProduction(' PRODUCTION ');
  if (kind === 'sandbox') return t.badgeSandbox(' sandbox ');
  return t.badgeNeutral(' no credentials ');
}
