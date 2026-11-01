/**
 * sineGuideTranslations.ts
 * Complete translations of the Sine Ratio Calculator guide (SineRatioGuide.astro)
 * All 18 locales: hi, es, ru, fr, de, it, pt, bn, ja, ko, ms, pl, id, ar, bg, tr, sv, zh
 */

import { SINE_TRANSLATIONS_BATCH1 } from './sineGuideTranslations.batch1';
import { SINE_TRANSLATIONS_BATCH2 } from './sineGuideTranslations.batch2';
import { SINE_TRANSLATIONS_BATCH3 } from './sineGuideTranslations.batch3';

export const SINE_GUIDE_TRANSLATIONS = {
  ...SINE_TRANSLATIONS_BATCH1,
  ...SINE_TRANSLATIONS_BATCH2,
  ...SINE_TRANSLATIONS_BATCH3,
};
