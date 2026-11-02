/**
 * areaGuideTranslations.batch3.ts
 * Locales id, ar, bg, tr, sv, zh — assembled from three 2-locale partials
 * (split because a single 6-locale worker exceeded its output token budget).
 */
import { AREA_TRANSLATIONS_BATCH3A } from './areaGuideTranslations.batch3a';
import { AREA_TRANSLATIONS_BATCH3B } from './areaGuideTranslations.batch3b';
import { AREA_TRANSLATIONS_BATCH3C } from './areaGuideTranslations.batch3c';

export const AREA_TRANSLATIONS_BATCH3 = {
  ...AREA_TRANSLATIONS_BATCH3A,
  ...AREA_TRANSLATIONS_BATCH3B,
  ...AREA_TRANSLATIONS_BATCH3C,
};
