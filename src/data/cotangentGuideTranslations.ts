/**
 * cotangentGuideTranslations.ts
 * Complete translations of the Cotangent Ratio Calculator guide (CotangentRatioGuide.astro)
 * All 18 locales: hi, es, ru, fr, de, it, pt, bn, ja, ko, ms, pl, id, ar, bg, tr, sv, zh
 */

import { COTANGENT_TRANSLATIONS_BATCH1 } from './cotangentGuideTranslations.batch1';
import { COTANGENT_TRANSLATIONS_BATCH2 } from './cotangentGuideTranslations.batch2';
import { COTANGENT_TRANSLATIONS_BATCH3 } from './cotangentGuideTranslations.batch3';

export const COTANGENT_GUIDE_TRANSLATIONS = {
  ...COTANGENT_TRANSLATIONS_BATCH1,
  ...COTANGENT_TRANSLATIONS_BATCH2,
  ...COTANGENT_TRANSLATIONS_BATCH3,
};
