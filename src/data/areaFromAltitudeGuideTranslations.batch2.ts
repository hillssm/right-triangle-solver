/**
 * areaFromAltitudeGuideTranslations.batch2.ts
 * Locales pt, bn, ja, ko, ms, pl — assembled from three 2-locale partials
 * (split because a single 6-locale worker exceeded its output token budget).
 */
import { AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2A } from './areaFromAltitudeGuideTranslations.batch2a';
import { AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2B } from './areaFromAltitudeGuideTranslations.batch2b';
import { AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2C } from './areaFromAltitudeGuideTranslations.batch2c';

export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2 = {
  ...AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2A,
  ...AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2B,
  ...AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2C,
};
