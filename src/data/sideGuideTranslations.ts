/**
 * sideGuideTranslations.ts
 * Complete translations of the Right Triangle Side Calculator guide (SideGuide.astro)
 * All 18 locales: hi, es, ru, fr, de, it, pt, bn, ja, ko, ms, pl, id, ar, bg, tr, sv, zh
 *
 * Structure per language:
 * - tocHeading, tocItems (16 entries keyed by section id)
 * - sections (15 entries)
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedIntro, relatedItems (7 calculator names)
 */

import { SIDE_GUIDE_TRANSLATIONS_BATCH1 } from './sideGuideTranslations.batch1';
import { SIDE_GUIDE_TRANSLATIONS_BATCH2 } from './sideGuideTranslations.batch2';
import { SIDE_GUIDE_TRANSLATIONS_BATCH3 } from './sideGuideTranslations.batch3';

export const SIDE_GUIDE_TRANSLATIONS = {
  ...SIDE_GUIDE_TRANSLATIONS_BATCH1,
  ...SIDE_GUIDE_TRANSLATIONS_BATCH2,
  ...SIDE_GUIDE_TRANSLATIONS_BATCH3,
};
