/**
 * cosineGuideTranslations.ts
 * Complete translations of the Cosine Ratio Calculator guide (CosineRatioGuide.astro)
 * All 18 locales: hi, es, ru, fr, de, it, pt, bn, ja, ko, ms, pl, id, ar, bg, tr, sv, zh
 */

import { COSINE_TRANSLATIONS_BATCH1 } from './cosineGuideTranslations.batch1';
import { COSINE_TRANSLATIONS_BATCH2 } from './cosineGuideTranslations.batch2';
import { COSINE_TRANSLATIONS_BATCH3 } from './cosineGuideTranslations.batch3';

export const COSINE_GUIDE_TRANSLATIONS = {
  ...COSINE_TRANSLATIONS_BATCH1,
  ...COSINE_TRANSLATIONS_BATCH2,
  ...COSINE_TRANSLATIONS_BATCH3,
};
