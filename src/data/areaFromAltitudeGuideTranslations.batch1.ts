/**
 * areaFromAltitudeGuideTranslations.batch1.ts
 * Locales hi, es, ru, fr, de, it — assembled from three 2-locale partials
 * (split because a single 6-locale worker exceeded its output token budget).
 */
import { AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1A } from './areaFromAltitudeGuideTranslations.batch1a';
import { AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1B } from './areaFromAltitudeGuideTranslations.batch1b';
import { AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1C } from './areaFromAltitudeGuideTranslations.batch1c';

export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1 = {
  ...AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1A,
  ...AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1B,
  ...AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1C,
};
