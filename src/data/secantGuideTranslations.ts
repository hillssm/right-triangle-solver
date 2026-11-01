/**
 * secantGuideTranslations.ts
 * Complete translations of the Secant Ratio Calculator guide (SecantRatioGuide.astro)
 * All 18 locales: hi, es, ru, fr, de, it, pt, bn, ja, ko, ms, pl, id, ar, bg, tr, sv, zh
 */

import { SECANT_TRANSLATIONS_BATCH1 } from './secantGuideTranslations.batch1';
import { SECANT_TRANSLATIONS_BATCH2 } from './secantGuideTranslations.batch2';
import { SECANT_TRANSLATIONS_BATCH3 } from './secantGuideTranslations.batch3';

export const SECANT_GUIDE_TRANSLATIONS = {
  ...SECANT_TRANSLATIONS_BATCH1,
  ...SECANT_TRANSLATIONS_BATCH2,
  ...SECANT_TRANSLATIONS_BATCH3,
};
