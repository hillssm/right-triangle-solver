/**
 * areaGuideTranslations.batch1.ts
 * Locales hi, es, ru, fr, de, it — assembled from three 2-locale partials
 * (split because a single 6-locale worker exceeded its output token budget).
 */
import { AREA_TRANSLATIONS_BATCH1A } from './areaGuideTranslations.batch1a';
import { AREA_TRANSLATIONS_BATCH1B } from './areaGuideTranslations.batch1b';
import { AREA_TRANSLATIONS_BATCH1C } from './areaGuideTranslations.batch1c';

export const AREA_TRANSLATIONS_BATCH1 = {
  ...AREA_TRANSLATIONS_BATCH1A,
  ...AREA_TRANSLATIONS_BATCH1B,
  ...AREA_TRANSLATIONS_BATCH1C,
};
