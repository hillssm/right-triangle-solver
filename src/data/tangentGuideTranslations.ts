/**
 * tangentGuideTranslations.ts
 * Complete translations of the Tangent Ratio Calculator guide (TangentRatioGuide.astro)
 * All 18 locales: hi, es, ru, fr, de, it, pt, bn, ja, ko, ms, pl, id, ar, bg, tr, sv, zh
 */

import { TANGENT_TRANSLATIONS_BATCH1 } from './tangentGuideTranslations.batch1';
import { TANGENT_TRANSLATIONS_BATCH2 } from './tangentGuideTranslations.batch2';
import { TANGENT_TRANSLATIONS_BATCH3 } from './tangentGuideTranslations.batch3';

export const TANGENT_GUIDE_TRANSLATIONS = {
  ...TANGENT_TRANSLATIONS_BATCH1,
  ...TANGENT_TRANSLATIONS_BATCH2,
  ...TANGENT_TRANSLATIONS_BATCH3,
};
