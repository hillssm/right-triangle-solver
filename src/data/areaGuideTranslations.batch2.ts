/**
 * areaGuideTranslations.batch2.ts
 * Locales pt, bn, ja, ko, ms, pl — assembled from three 2-locale partials
 * (split because a single 6-locale worker exceeded its output token budget).
 */
import { AREA_TRANSLATIONS_BATCH2A } from './areaGuideTranslations.batch2a';
import { AREA_TRANSLATIONS_BATCH2B } from './areaGuideTranslations.batch2b';
import { AREA_TRANSLATIONS_BATCH2C } from './areaGuideTranslations.batch2c';

export const AREA_TRANSLATIONS_BATCH2 = {
  ...AREA_TRANSLATIONS_BATCH2A,
  ...AREA_TRANSLATIONS_BATCH2B,
  ...AREA_TRANSLATIONS_BATCH2C,
};
