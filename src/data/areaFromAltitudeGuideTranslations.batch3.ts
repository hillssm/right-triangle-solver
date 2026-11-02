/**
 * areaFromAltitudeGuideTranslations.batch3.ts
 * Locales id, ar, bg, tr, sv, zh — assembled from three 2-locale partials
 * (split because a single 6-locale worker exceeded its output token budget).
 */
import { AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3A } from './areaFromAltitudeGuideTranslations.batch3a';
import { AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3B } from './areaFromAltitudeGuideTranslations.batch3b';
import { AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3C } from './areaFromAltitudeGuideTranslations.batch3c';

export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3 = {
  ...AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3A,
  ...AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3B,
  ...AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3C,
};
