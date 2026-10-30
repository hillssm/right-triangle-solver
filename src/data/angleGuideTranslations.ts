/**
 * angleGuideTranslations.ts
 * Complete translations of the Right Triangle Angle Calculator guide (AngleGuide.astro)
 * All 18 locales: hi, es, ru, fr, de, it, pt, bn, ja, ko, ms, pl, id, ar, bg, tr, sv, zh
 *
 * Structure per language:
 * - tocHeading, tocItems (16 entries keyed by section id; batch2/batch3 omit
 *   angle-conclusion, the renderer falls back to the section h2)
 * - sections (14 content entries: angle-intro, angle-anatomy, angle-inverse,
 *   angle-complement, angle-howto, angle-arcsin, angle-arccos, angle-arctan,
 *   angle-choose, angle-applications, angle-mistakes, angle-precision,
 *   angle-verify, angle-conclusion)
 *   batch1/batch2 use blocks (ordered {kind: 'p'|'h3', text}); batch3 uses
 *   paragraphs + h3s. Optional: steps (batch1), list (batch2), listItems
 *   (batch3), table, imgAlt, figcaption, closingParagraphs (batch1 angle-verify).
 *   batch3 also carries a duplicate angle-related section key which the
 *   renderer ignores via its fixed section order.
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedIntro (batch3 only), relatedItems (6 calculator names)
 */

import { ANGLE_TRANSLATIONS_BATCH1 } from './angleTranslations.batch1';
import { ANGLE_TRANSLATIONS_BATCH2 } from './angleTranslations.batch2';
import { ANGLE_TRANSLATIONS_BATCH3 } from './angleTranslations.batch3';

export const ANGLE_GUIDE_TRANSLATIONS = {
  ...ANGLE_TRANSLATIONS_BATCH1,
  ...ANGLE_TRANSLATIONS_BATCH2,
  ...ANGLE_TRANSLATIONS_BATCH3,
};
