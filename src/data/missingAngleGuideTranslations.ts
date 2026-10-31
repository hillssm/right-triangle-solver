/**
 * missingAngleGuideTranslations.ts
 * Complete translations of the Right Triangle Missing Angle Calculator guide (MissingAngleGuide.astro)
 * All 18 locales: hi, es, ru, fr, de, it, pt, bn, ja, ko, ms, pl, id, ar, bg, tr, sv, zh
 */

import { MISSINGANGLE_TRANSLATIONS_BATCH1 } from './missingAngleGuideTranslations.batch1';
import { MISSINGANGLE_TRANSLATIONS_BATCH2 } from './missingAngleGuideTranslations.batch2';
import { MISSINGANGLE_TRANSLATIONS_BATCH3 } from './missingAngleGuideTranslations.batch3';

export const MISSINGANGLE_GUIDE_TRANSLATIONS = {
  ...MISSINGANGLE_TRANSLATIONS_BATCH1,
  ...MISSINGANGLE_TRANSLATIONS_BATCH2,
  ...MISSINGANGLE_TRANSLATIONS_BATCH3,
};
