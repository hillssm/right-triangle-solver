// Generated gap fills for the triples pages: the seed-based builder
// produces shorter pages than the English originals (missing example
// steps, FAQs, use cases, mistakes and other sections) and leaves some
// assembled strings in English. These per-locale fills restore the full
// content, applied in localizeFocusedTriplesCalculatorPage.

export type TriplesGapFill = {
  path: string;
  value: unknown;
  mode: "fill" | "set";
};

export const TRIPLES_GAP_FILLS: Record<string, Record<string, TriplesGapFill[]>> = {
 "hi": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "गैर-पूर्णांक मानों का उपयोग करना और पाइथागोरस त्रिक की अपेक्षा करना, त्रिक पूर्ण संख्याएँ होनी चाहिए।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "उत्पन्न करते समय m को n से कम या बराबर रखना, m, n से सख्ती से बड़ा होना चाहिए।",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{परिणाम: 3, 4, 5 एक मान्य पाइथागोरस त्रिक है.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{परिणाम: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{परिणाम: 7, 24, 25 एक मान्य पाइथागोरस त्रिक है.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "उदाहरण 3: जाँचें कि क्या 7, 24, 25 एक पाइथागोरस त्रिक है",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "नहीं। पाइथागोरस त्रिक केवल पूर्ण संख्याओं के समुच्चय के रूप में परिभाषित हैं। दशमलव मान a² + b² = c² को संतुष्ट कर सकते हैं, लेकिन उन्हें त्रिक नहीं माना जाता।",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "क्या दशमलव संख्याएँ पाइथागोरस त्रिक बना सकती हैं?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "हाँ। जाँच: 5² + 12² = 25 + 144 = 169 = 13²। चूँकि तीनों पूर्ण संख्याएँ हैं और समीकरण सत्य है, यह एक मान्य पाइथागोरस त्रिक है।",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "क्या 5, 12, 13 एक पाइथागोरस त्रिक है?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">कैलकुलेटर</a> जाँचता है कि क्या a² + b² ठीक c² के बराबर है। यदि कोई अंतर है, पूर्णांकन से छोटा सा भी, तो मान पाइथागोरस त्रिक नहीं बनाते। सुनिश्चित करें कि c सबसे बड़ा मान है।",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">कैलकुलेटर</a> क्यों कहता है कि मेरे मान त्रिक नहीं हैं?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "आप दो धनात्मक पूर्णांकों m और n का उपयोग करके भी त्रिक उत्पन्न कर सकते हैं, जहाँ m, n से बड़ा है। सूत्र a = m² − n², b = 2mn, और c = m² + n² हमेशा एक मान्य त्रिक उत्पन्न करेंगे। जब m और n का कोई उभयनिष्ठ गुणनखंड नहीं होता और दोनों विषम नहीं होते, तो परिणाम को आदिम त्रिक कहा जाता है।",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "सभी फ़ील्ड साफ़ करने और फिर से शुरू करने के लिए Reset पर क्लिक करें।",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "त्रिक उत्पन्न करते समय, <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">कैलकुलेटर</a> m और n सूत्रों का उपयोग करके तीन पूर्ण संख्याएँ उत्पन्न करता है। ये संख्याएँ एक समकोण त्रिभुज बनाने की गारंटी देती हैं। यदि m और n का कोई उभयनिष्ठ गुणनखंड नहीं है और दोनों विषम नहीं हैं, तो त्रिक आदिम है, अर्थात इसे और सरल नहीं किया जा सकता।",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "सटीक अनुपात एक त्रिक से दूसरे में बदलता है, लेकिन हर मान्य त्रिक a² + b² = c² को संतुष्ट करता है जहाँ c कर्ण है।",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "अध्ययन के लिए पाइथागोरस त्रिकों की संदर्भ सूची बनाना।",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "निर्माण <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">मापों</a> की पुष्टि करना जो 3-4-5 नियम या समान पैटर्न पर निर्भर करते हैं।",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a> और <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">परिमाप</a> सूत्रों को मिलाना, क्षेत्रफल गुणन और 2 से विभाजन का उपयोग करता है, परिमाप जोड़ का उपयोग करता है।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "ऋणात्मक या शून्य स्केल गुणक का उपयोग करना, k, 0 से बड़ा होना चाहिए।",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "सम<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">कोण</a> बनाए रखने के लिए तीनों भुजाओं को समान k से गुणा करें।",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "उदाहरण 2: स्केल गुणक k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "उदाहरण 3: स्केल गुणक k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "हाँ। प्रत्येक <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> को 2 से विभाजित करने पर 3, 4, 5 मिलता है। इसलिए 6, 8, 10, k = 2 से स्केल किया गया एक 3 4 5 त्रिभुज है।",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "क्या 6, 8, 10 एक 3 4 5 त्रिभुज है?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "हाँ। एक <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> के साथ 3 इकाई और दूसरी के साथ 4 इकाई मापें। यदि उन अंतिम बिंदुओं के बीच का विकर्ण ठीक 5 इकाई मापता है, तो कोना एक सम<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">कोण</a> है।",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "क्या मैं समकोण जाँचने के लिए 3 4 5 नियम का उपयोग कर सकता हूँ?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "आधार <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">परिमाप</a> 3 + 4 + 5 = 12 इकाई है। किसी भी स्केल किए गए संस्करण के लिए, परिमाप 12k है, जहाँ k स्केल गुणक है।",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "3 4 5 त्रिभुज का परिमाप क्या है?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "स्केलिंग के बाद, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a> दो भुजाओं के गुणनफल का आधा होता है, और <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">परिमाप</a> तीनों भुजाओं का योग होता है। क्योंकि अनुपात कभी नहीं बदलता, किसी भी स्केल पर 3 4 5 त्रिभुज के हमेशा समान कोण होते हैं।",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "इनपुट साफ़ करने और नए सिरे से शुरू करने के लिए Reset पर क्लिक करें।",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a> आपको वर्ग इकाइयों में त्रिभुज के अंदर का स्थान बताता है। <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">परिमाप</a> आपको बाहर के चारों ओर की कुल लंबाई देता है। जैसे-जैसे आप k बढ़ाते हैं दोनों मान बढ़ते हैं, लेकिन त्रिभुज हमेशा अपना सम<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">कोण</a> बनाए रखता है।",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "स्केल किया गया संस्करण 3k : 4k : 5k के समान अनुपात रखता है, इसलिए कर्ण हमेशा 5k से मेल खाने वाली <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> होती है।",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "पूर्ण समकोण त्रिभुज सॉल्वर के बिना क्षेत्रफलों और परिमापों का त्वरित अनुमान लगाना।",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "छात्रों को सिखाना कि स्केलिंग <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">समरूप त्रिभुजों</a> में कोणों को कैसे संरक्षित रखती है।",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "भुजाओं को 5, 13, 12 जैसे गलत क्रम में लिखना और कर्ण को बीच में रखना।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">परिमाप</a> के लिए केवल भुजाओं का उपयोग करना, परिमाप में तीनों भुजाएँ शामिल होती हैं, केवल दो भुजाएँ नहीं।",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "हर स्केल किया गया संस्करण समान कोण और सम<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">कोण</a> रखता है।",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "उदाहरण 2: स्केल गुणक k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "उदाहरण 3: स्केल गुणक k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "हाँ। प्रत्येक <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> आधार त्रिक की ठीक दोगुनी है, इसलिए 10, 24, 26 स्केल गुणक k = 2 वाला एक 5 12 13 त्रिभुज है।",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "क्या 10, 24, 26 एक 5 12 13 त्रिभुज है?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "दोनों <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">पाइथागोरस त्रिक</a> हैं, लेकिन उनके <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> अनुपात और कोण अलग-अलग हैं। एक <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">3 4 5 त्रिभुज</a> की आकृति अधिक खड़ी होती है, जबकि 5 12 13 त्रिभुज अधिक चपटा होता है क्योंकि लंबी भुजा छोटी भुजा के सापेक्ष बहुत बड़ी होती है।",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "3 4 5 और 5 12 13 त्रिभुज के बीच क्या अंतर है?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "हाँ। m = 3 और n = 2 का उपयोग करने से a = 9 − 4 = 5, b = 2 × 3 × 2 = 12, और c = 9 + 4 = 13 मिलता है।",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "क्या 5 12 13 त्रिक m और n सूत्र से उत्पन्न किया जा सकता है?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "एक बार जब आप स्केल की गई भुजाएँ ज्ञात कर लेते हैं, तो <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a> दो भुजाओं के गुणनफल के आधे के बराबर होता है। <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">परिमाप</a> बस तीनों भुजाओं का योग है। आकृति समान रहती है, केवल आकार बदलता है।",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "नई गणना शुरू करने के लिए Reset दबाएँ।",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "बड़ा k समान अनुपात रखते हुए त्रिभुज को फैलाता है। k को दोगुना करने से <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a> चार गुना हो जाता है लेकिन <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">परिमाप</a> केवल दोगुना होता है। यह संबंध सभी स्केल किए गए त्रिभुजों के लिए सत्य है।",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "स्केल किया गया संस्करण 5k : 12k : 13k के समान अनुपात रखता है, इसलिए प्रत्येक <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> को समान स्केल गुणक k से गुणा किया जाता है।",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "सटीकता के लिए 5 12 13 अनुपात का उपयोग करने वाले निर्माण लेआउट की योजना बनाना।",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "यह खोजना कि त्रिभुज को स्केल करने से उसका <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">क्षेत्रफल</a> और <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">परिमाप</a> कैसे बदलता है।",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "यह मानना कि सभी समकोण त्रिभुज समरूप हैं, दो समकोण त्रिभुज केवल तभी समरूप होते हैं जब वे एक दूसरा <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">कोण</a> साझा करते हैं।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "यह भूल जाना कि सम<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">कोण</a> एक साझा कोण के रूप में गिना जाता है, यदि दो समकोण त्रिभुजों का एक और समान न्यून कोण है, तो वे समरूप हैं।",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "भुजाओं के तीनों युग्मों का स्केल गुणक समान होना चाहिए।",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{समरूप <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a>} = \\text{मूल भुजा} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{समरूप त्रिभुज पर संगत <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> 20 इकाई है।}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "उदाहरण 2: अज्ञात समरूप भुजा ज्ञात करें",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{मूल <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a>} = \\frac{\\text{समरूप भुजा}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{मूल त्रिभुज पर मेल खाने वाली <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> 5 इकाई है।}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "उदाहरण 3: मूल भुजा ज्ञात करें",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "हाँ। 0.5 जैसा स्केल गुणक का अर्थ है कि समरूप त्रिभुज मूल के आकार का आधा है। कोई भी धनात्मक संख्या स्केल गुणक के रूप में काम करती है।",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "क्या स्केल गुणक दशमलव हो सकता है?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "नहीं। दो समकोण त्रिभुज केवल तभी समरूप होते हैं जब वे समकोण के अतिरिक्त कम से कम एक न्यून <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">कोण</a> साझा करते हैं। अलग-अलग न्यून कोणों का अर्थ है अलग-अलग अनुपात।",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "क्या सभी समकोण त्रिभुज एक-दूसरे के समरूप हैं?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "समरूप भुजा प्राप्त करने के लिए संगत मूल <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> को k से गुणा करें। या मूल ज्ञात करने के लिए समरूप भुजा को k से विभाजित करें। सूत्र इस पर निर्भर करता है कि आप किस भुजा के लिए हल कर रहे हैं।",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "मैं स्केल गुणक का उपयोग करके अज्ञात भुजा कैसे ज्ञात करूँ?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{समरूप <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a>}}{\\text{मूल भुजा}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{समरूप <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a>} = \\text{मूल भुजा} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{मूल <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a>} = \\frac{\\text{समरूप भुजा}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "स्केल गुणक एक दिशा में काम करता है। यदि k = 2 है, तो समरूप त्रिभुज दोगुना बड़ा है। दूसरी ओर जाने के लिए, गुणा करने के बजाय k से विभाजित करें। सूत्र तीनों स्थितियों को कवर करते हैं: k ज्ञात करना, स्केल की गई <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> ज्ञात करना, और मूल भुजा ज्ञात करना।",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "सभी फ़ील्ड साफ़ करने के लिए Reset पर क्लिक करें।",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = समरूप भुजा / मूल भुजा",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "समरूप भुजा = मूल भुजा × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "मूल भुजा = समरूप भुजा / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = समरूप भुजा / मूल भुजा",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "जब आप एक <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">अज्ञात भुजा</a> ज्ञात करते हैं, तो परिणाम दूसरे त्रिभुज पर संगत भुजा की लंबाई होती है। यह इसलिए काम करता है क्योंकि समरूप त्रिभुज मेल खाने वाली भुजाओं के सभी युग्मों में स्थिर अनुपात बनाए रखते हैं।",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "यदि स्केल गुणक k है, तो समरूप त्रिभुज की प्रत्येक <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">भुजा</a> उसकी संगत मूल भुजा को k से गुणा करने के बराबर होती है।",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "लंबी वस्तुओं की ऊँचाई का अनुमान लगाने के लिए छाया <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">मापों</a> की तुलना करना।",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "ब्लूप्रिंट <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">मापों</a> और वास्तविक भवन आयामों के बीच रूपांतरण करना।",
    "mode": "fill"
   }
  ]
 },
 "es": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "Usar valores no enteros y esperar una terna pitagórica: las ternas deben ser números enteros.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Establecer m menor o igual que n al generar: m debe ser estrictamente mayor que n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Resultado: 3, 4, 5 es una terna pitagórica válida.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Resultado: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Resultado: 7, 24, 25 es una terna pitagórica válida.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Ejemplo 3: Comprobar si 7, 24, 25 es una terna pitagórica",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "No. Las ternas pitagóricas se definen solo como conjuntos de números enteros. Los valores decimales pueden satisfacer a² + b² = c², pero no se consideran ternas.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "¿Pueden los números decimales formar una terna pitagórica?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Sí. Comprobación: 5² + 12² = 25 + 144 = 169 = 13². Como los tres son números enteros y la ecuación se cumple, es una terna pitagórica válida.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "¿Es 5, 12, 13 una terna pitagórica?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "La <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> comprueba si a² + b² es exactamente igual a c². Si hay alguna diferencia, incluso una pequeña por redondeo, los valores no forman una terna pitagórica. Asegúrate de que c sea el valor mayor.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "¿Por qué la <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> dice que mis valores no son una terna?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "También puedes generar ternas usando dos enteros positivos m y n, donde m es mayor que n. Las fórmulas a = m² − n², b = 2mn y c = m² + n² siempre producirán una terna válida. Cuando m y n no comparten factores comunes y no son ambos impares, el resultado se llama terna primitiva.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Haz clic en Restablecer para borrar todos los campos y empezar de nuevo.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Al generar una terna, la <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> produce tres números enteros usando las fórmulas de m y n. Estos números están garantizados para formar un triángulo rectángulo. Si m y n no comparten ningún factor común y no son ambos impares, la terna es primitiva, lo que significa que no se puede simplificar más.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "La razón exacta cambia de una terna a otra, pero cada terna válida satisface a² + b² = c² con c como hipotenusa.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Crear una lista de referencia de ternas pitagóricas para estudiar.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Confirmar <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">medidas</a> de construcción que dependen de la regla 3-4-5 o patrones similares.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "Confundir las fórmulas de <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> y <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a>: el área usa multiplicación y división por 2, el perímetro usa suma.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Usar un factor de escala negativo o cero: k debe ser mayor que 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Multiplica los tres lados por el mismo k para mantener el <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ángulo</a> recto.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Ejemplo 2: Factor de escala k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Ejemplo 3: Factor de escala k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Sí. Dividir cada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> entre 2 da 3, 4, 5. Así que 6, 8, 10 es un triángulo 3 4 5 escalado por k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "¿Es 6, 8, 10 un triángulo 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Sí. Mide 3 unidades a lo largo de un <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> y 4 unidades a lo largo del otro. Si la diagonal entre esos extremos mide exactamente 5 unidades, la esquina es un <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ángulo</a> recto.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "¿Puedo usar la regla 3 4 5 para comprobar un ángulo recto?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "El <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a> base es 3 + 4 + 5 = 12 unidades. Para cualquier versión escalada, el perímetro es 12k, donde k es el factor de escala.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "¿Cuál es el perímetro de un triángulo 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Después de escalar, el <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> es la mitad del producto de los dos catetos, y el <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a> es la suma de los tres lados. Como la razón nunca cambia, un triángulo 3 4 5 a cualquier escala siempre tiene los mismos ángulos.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Haz clic en Restablecer para borrar la entrada y empezar de nuevo.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "El <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> te dice el espacio dentro del triángulo en unidades cuadradas. El <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a> te da la longitud total alrededor del exterior. Ambos valores crecen a medida que aumentas k, pero el triángulo siempre mantiene su <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ángulo</a> recto.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Una versión escalada mantiene la misma razón que 3k : 4k : 5k, así que la hipotenusa es siempre el <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> que corresponde a 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Estimar rápidamente áreas y perímetros sin un solucionador completo de triángulos rectángulos.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Enseñar a los estudiantes cómo el escalado preserva los ángulos en los <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">triángulos semejantes</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "Escribir los lados en el orden equivocado, como 5, 13, 12, y colocar la hipotenusa en el medio.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Usar solo los catetos para el <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a>: el perímetro incluye los tres lados, no solo los dos catetos.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Cada versión escalada mantiene los mismos ángulos y el <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ángulo</a> recto.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Ejemplo 2: Factor de escala k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Ejemplo 3: Factor de escala k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Sí. Cada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> es exactamente el doble de la terna base, así que 10, 24, 26 es un triángulo 5 12 13 con factor de escala k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "¿Es 10, 24, 26 un triángulo 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ambos son <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ternas pitagóricas</a>, pero tienen razones de <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lados</a> y ángulos diferentes. Un <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">triángulo 3 4 5</a> tiene una forma más inclinada, mientras que un triángulo 5 12 13 es más plano porque el cateto más largo es mucho mayor en relación con el cateto más corto.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "¿Cuál es la diferencia entre un triángulo 3 4 5 y un triángulo 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Sí. Usando m = 3 y n = 2 se obtiene a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 y c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "¿Se puede generar la terna 5 12 13 con la fórmula de m y n?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Una vez que encuentras los lados escalados, el <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> es igual a la mitad del producto de los dos catetos. El <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a> es simplemente la suma de los tres lados. La forma se mantiene igual, solo cambia el tamaño.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Pulsa Restablecer para iniciar un nuevo cálculo.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Un k más grande estira el triángulo manteniendo las mismas proporciones. Duplicar k cuadruplica el <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> pero solo duplica el <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a>. Esta relación se cumple para todos los triángulos escalados.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Una versión escalada mantiene la misma razón que 5k : 12k : 13k, así que cada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> se multiplica por el mismo factor de escala k.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Planificar distribuciones de construcción que usan la razón 5 12 13 para mayor precisión.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Explorar cómo escalar un triángulo cambia su <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> y su <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a>.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "Suponer que todos los triángulos rectángulos son semejantes: dos triángulos rectángulos solo son semejantes si comparten un segundo <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ángulo</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Olvidar que el <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ángulo</a> recto cuenta como ángulo compartido: si dos triángulos rectángulos tienen un ángulo agudo más igual, son semejantes.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Los tres pares de lados deben tener el mismo factor de escala.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">semejante</a>} = \\text{lado original} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{El <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> correspondiente en el triángulo semejante es 20 unidades.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Ejemplo 2: Encontrar un lado semejante faltante",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">original</a>} = \\frac{\\text{lado semejante}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{El <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> correspondiente en el triángulo original es 5 unidades.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Ejemplo 3: Encontrar el lado original",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Sí. Un factor de escala como 0.5 significa que el triángulo semejante es la mitad del tamaño del original. Cualquier número positivo funciona como factor de escala.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "¿El factor de escala puede ser un decimal?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "No. Dos triángulos rectángulos son semejantes solo si comparten al menos un <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ángulo</a> agudo además del ángulo recto. Ángulos agudos diferentes significan proporciones diferentes.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "¿Todos los triángulos rectángulos son semejantes entre sí?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Multiplica el <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> original correspondiente por k para obtener el lado semejante. O divide el lado semejante por k para encontrar el original. La fórmula depende de qué lado estés resolviendo.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "¿Cómo encuentro un lado faltante usando el factor de escala?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">semejante</a>}}{\\text{lado original}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">semejante</a>} = \\text{lado original} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">original</a>} = \\frac{\\text{lado semejante}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "El factor de escala funciona en una dirección. Si k = 2, el triángulo semejante es el doble de grande. Para ir en la otra dirección, divide por k en lugar de multiplicar. Las fórmulas cubren las tres situaciones: encontrar k, encontrar un <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> escalado y encontrar el lado original.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Haz clic en Restablecer para borrar todos los campos.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = lado semejante / lado original",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "lado semejante = lado original × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "lado original = lado semejante / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = lado semejante / lado original",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Cuando encuentras un <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado faltante</a>, el resultado es la longitud del lado correspondiente en el otro triángulo. Esto funciona porque los triángulos semejantes mantienen proporciones constantes en todos los pares de lados correspondientes.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Si el factor de escala es k, cada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> del triángulo semejante es igual a su lado original correspondiente multiplicado por k.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Comparar <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">medidas</a> de sombras para estimar la altura de objetos altos.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Convertir entre <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">medidas</a> de planos y dimensiones reales de edificios.",
    "mode": "fill"
   }
  ]
 },
 "ru": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "Использование нецелых значений и ожидание пифагоровой тройки — тройки должны быть целыми числами.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Установка m меньше или равного n при генерации — m должно быть строго больше n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Результат: 3, 4, 5 — это допустимая пифагорова тройка.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Результат: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Результат: 7, 24, 25 — это допустимая пифагорова тройка.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Пример 3: Проверьте, является ли 7, 24, 25 пифагоровой тройкой",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Нет. Пифагоровы тройки определяются как наборы только целых чисел. Десятичные значения могут удовлетворять равенству a² + b² = c², но они не считаются тройками.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Могут ли десятичные числа образовывать пифагорову тройку?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Да. Проверка: 5² + 12² = 25 + 144 = 169 = 13². Поскольку все три числа целые и равенство выполняется, это допустимая пифагорова тройка.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Является ли 5, 12, 13 пифагоровой тройкой?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Калькулятор</a> проверяет, равно ли a² + b² точно c². Если есть хоть какое-то различие — даже небольшое из-за округления — значения не образуют пифагорову тройку. Убедитесь, что c — наибольшее значение.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Почему <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">калькулятор</a> говорит, что мои значения не являются тройкой?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Вы также можете генерировать тройки, используя два положительных целых числа m и n, где m больше n. Формулы a = m² − n², b = 2mn и c = m² + n² всегда дадут допустимую тройку. Когда m и n не имеют общих делителей и оба не являются нечётными, результат называется примитивной тройкой.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Нажмите «Сброс», чтобы очистить все поля и начать сначала.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "При генерации тройки <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">калькулятор</a> создаёт три целых числа с помощью формул для m и n. Эти числа гарантированно образуют прямоугольный треугольник. Если m и n не имеют общего делителя и оба не являются нечётными, тройка является примитивной — то есть её нельзя упростить дальше.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Точное соотношение меняется от одной тройки к другой, но каждая допустимая тройка удовлетворяет равенству a² + b² = c², где c — гипотенуза.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Составление справочного списка пифагоровых троек для учёбы.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Подтверждение строительных <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">измерений</a>, которые опираются на правило 3-4-5 или похожие закономерности.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "Смешивание формул <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">площади</a> и <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметра</a> — площадь использует умножение и деление на 2, периметр использует сложение.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Использование отрицательного или нулевого коэффициента масштабирования — k должно быть больше 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Умножьте все три стороны на одно и то же k, чтобы сохранить прямой <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">угол</a>.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Площадь</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Пример 2: Коэффициент масштабирования k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Площадь</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Пример 3: Коэффициент масштабирования k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Да. Деление каждой <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">стороны</a> на 2 даёт 3, 4, 5. Таким образом, 6, 8, 10 — это треугольник 3 4 5, масштабированный с k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Является ли 6, 8, 10 треугольником 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Да. Отмерьте 3 единицы вдоль одной <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">стороны</a> и 4 единицы вдоль другой. Если диагональ между этими концами измеряется ровно в 5 единиц, угол является прямым <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">углом</a>.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Могу ли я использовать правило 3 4 5, чтобы проверить прямой угол?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Базовый <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметр</a> равен 3 + 4 + 5 = 12 единиц. Для любой масштабированной версии периметр равен 12k, где k — коэффициент масштабирования.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Каков периметр треугольника 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Площадь</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "После масштабирования <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">площадь</a> равна половине произведения двух катетов, а <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметр</a> — сумме всех трёх сторон. Поскольку соотношение никогда не меняется, треугольник 3 4 5 в любом масштабе всегда имеет одинаковые углы.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Нажмите «Сброс», чтобы очистить поле ввода и начать заново.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Площадь</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Площадь</a> показывает вам пространство внутри треугольника в квадратных единицах. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Периметр</a> даёт вам общую длину по внешней стороне. Оба значения растут по мере увеличения k, но треугольник всегда сохраняет свой прямой <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">угол</a>.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Масштабированная версия сохраняет то же соотношение, что и 3k : 4k : 5k, поэтому гипотенуза — всегда <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a>, соответствующая 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Быстрая оценка площадей и периметров без полноценного решателя прямоугольных треугольников.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Обучение студентов тому, как масштабирование сохраняет углы в <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">подобных треугольниках</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "Запись сторон в неправильном порядке, например 5, 13, 12, и размещение гипотенузы посередине.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Использование только катетов для <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметра</a> — периметр включает все три стороны, а не только два катета.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Каждая масштабированная версия сохраняет те же углы и прямой <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">угол</a>.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Площадь</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Пример 2: Коэффициент масштабирования k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Площадь</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Пример 3: Коэффициент масштабирования k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Да. Каждая <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a> ровно в два раза больше базовой тройки, поэтому 10, 24, 26 — это треугольник 5 12 13 с коэффициентом масштабирования k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Является ли 10, 24, 26 треугольником 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Оба являются <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">пифагоровыми тройками</a>, но у них разные соотношения <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторон</a> и углы. <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">Треугольник 3 4 5</a> имеет более крутую форму, а треугольник 5 12 13 более плоский, потому что более длинный катет намного больше относительно более короткого катета.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "В чём разница между треугольником 3 4 5 и треугольником 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Да. Использование m = 3 и n = 2 даёт a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 и c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Можно ли сгенерировать тройку 5 12 13 с помощью формулы для m и n?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Площадь</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Как только вы найдёте масштабированные стороны, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">площадь</a> равна половине произведения двух катетов. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Периметр</a> — это просто сумма всех трёх сторон. Форма остаётся той же — меняется только размер.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Нажмите «Сброс», чтобы начать новое вычисление.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Площадь</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Большее k растягивает треугольник, сохраняя те же пропорции. Удвоение k увеличивает <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">площадь</a> в четыре раза, но лишь удваивает <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметр</a>. Это соотношение выполняется для всех масштабированных треугольников.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Масштабированная версия сохраняет то же соотношение, что и 5k : 12k : 13k, поэтому каждая <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a> умножается на один и тот же коэффициент масштабирования k.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Планирование строительных разметок, использующих соотношение 5 12 13 для точности.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Изучение того, как масштабирование треугольника меняет его <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">площадь</a> и <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметр</a>.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[3]",
    "value": "Предположение, что все прямоугольные треугольники подобны — два прямоугольных треугольника подобны только если у них есть второй общий <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">угол</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Забыть, что прямой <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">угол</a> считается общим углом — если два прямоугольных треугольника имеют ещё один равный острый угол, они подобны.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Все три пары сторон должны иметь одинаковый коэффициент масштабирования.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{подобная <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a>} = \\text{исходная сторона} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{Соответствующая <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a> на подобном треугольнике равна 20 единицам.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Пример 2: Найти недостающую подобную сторону",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{исходная <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a>} = \\frac{\\text{подобная сторона}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{Соответствующая <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a> на исходном треугольнике равна 5 единицам.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Пример 3: Найти исходную сторону",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Да. Коэффициент масштабирования, например 0.5, означает, что подобный треугольник вдвое меньше исходного. Любое положительное число работает как коэффициент масштабирования.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Может ли коэффициент масштабирования быть десятичным?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Нет. Два прямоугольных треугольника подобны только если у них есть хотя бы один общий острый <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">угол</a> в дополнение к прямому углу. Разные острые углы означают разные пропорции.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Все ли прямоугольные треугольники подобны друг другу?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Умножьте соответствующую исходную <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторону</a> на k, чтобы получить подобную сторону. Или разделите подобную сторону на k, чтобы найти исходную. Формула зависит от того, какую сторону вы ищете.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Как найти недостающую сторону с помощью коэффициента масштабирования?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{подобная <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a>}}{\\text{исходная сторона}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{подобная <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a>} = \\text{исходная сторона} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{исходная <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a>} = \\frac{\\text{подобная сторона}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Коэффициент масштабирования работает в одном направлении. Если k = 2, подобный треугольник в два раза больше. Чтобы пойти в обратном направлении, делите на k вместо умножения. Формулы охватывают все три ситуации: нахождение k, нахождение масштабированной <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">стороны</a> и нахождение исходной стороны.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Нажмите «Сброс», чтобы очистить все поля.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = подобная сторона / исходная сторона",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "подобная сторона = исходная сторона × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "исходная сторона = подобная сторона / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = подобная сторона / исходная сторона",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Когда вы находите <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">недостающую сторону</a>, результат — это длина соответствующей стороны на другом треугольнике. Это работает, потому что подобные треугольники сохраняют постоянные пропорции во всех парах соответствующих сторон.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Если коэффициент масштабирования равен k, каждая <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">сторона</a> на подобном треугольнике равна соответствующей исходной стороне, умноженной на k.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Сравнение <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">измерений</a> теней для оценки высоты высоких объектов.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Преобразование между <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">измерениями</a> на чертеже и фактическими размерами здания.",
    "mode": "fill"
   }
  ]
 },
 "fr": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Oublier de mettre chaque <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> au carré avant d'additionner — vérifier a + b = c au lieu de a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Écrire l'équation sous la forme a² + c² = b² au lieu de a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Utiliser des valeurs non entières et s'attendre à un triplet pythagoricien — les triplets doivent être des nombres entiers.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Régler m inférieur ou égal à n lors de la génération — m doit être strictement supérieur à n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Résultat : 3, 4, 5 est un triplet pythagoricien valide.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Résultat : 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Résultat : 7, 24, 25 est un triplet pythagoricien valide.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exemple 3 : Vérifier si 7, 24, 25 est un triplet pythagoricien",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Non. Les triplets pythagoriciens sont définis comme des ensembles de nombres entiers uniquement. Des valeurs décimales peuvent satisfaire a² + b² = c², mais elles ne sont pas considérées comme des triplets.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Des nombres décimaux peuvent-ils former un triplet pythagoricien ?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Oui. Vérification : 5² + 12² = 25 + 144 = 169 = 13². Comme les trois sont des nombres entiers et que l'équation est satisfaite, c'est un triplet pythagoricien valide.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "5, 12, 13 est-il un triplet pythagoricien ?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Le <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculateur</a> vérifie si a² + b² égale c² exactement. S'il y a une différence — même minime, due à un arrondi — les valeurs ne forment pas un triplet pythagoricien. Assurez-vous que c est la plus grande valeur.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Pourquoi le <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculateur</a> dit-il que mes valeurs ne forment pas un triplet ?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Vous pouvez aussi générer des triplets à l'aide de deux entiers positifs m et n, où m est supérieur à n. Les formules a = m² − n², b = 2mn et c = m² + n² produiront toujours un triplet valide. Lorsque m et n n'ont aucun facteur commun et ne sont pas tous deux impairs, le résultat est appelé un triplet primitif.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Cliquez sur Réinitialiser pour effacer tous les champs et recommencer.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Lors de la génération d'un triplet, le <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculateur</a> produit trois nombres entiers à l'aide des formules en m et n. Ces nombres sont garantis de former un triangle rectangle. Si m et n n'ont aucun facteur commun et ne sont pas tous deux impairs, le triplet est primitif — ce qui signifie qu'il ne peut pas être simplifié davantage.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Le rapport exact change d'un triplet à l'autre, mais tout triplet valide satisfait a² + b² = c² avec c comme hypoténuse.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Vérifier si des <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">longueurs de côtés</a> mesurées forment un véritable <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angle</a> droit.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Générer des triplets pour des concours de mathématiques et des exercices d'entraînement.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Constituer une liste de référence de triplets pythagoriciens pour l'étude.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Confirmer des <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">mesures</a> de construction qui reposent sur la règle du 3-4-5 ou des motifs similaires.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Traiter 5 comme une cathète au lieu de l'hypoténuse — 5 est toujours le plus long <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Penser que seules les valeurs exactes 3, 4, 5 fonctionnent — tout multiple comme 6, 8, 10 ou 15, 20, 25 est aussi valide.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Confondre les formules d'<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">aire</a> et de <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">périmètre</a> — l'aire utilise la multiplication et la division par 2, le périmètre utilise l'addition.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Utiliser un facteur d'échelle négatif ou nul — k doit être supérieur à 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Multipliez les trois côtés par le même k pour conserver l'<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angle</a> droit.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Aire</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Exemple 2 : facteur d'échelle k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Aire</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exemple 3 : facteur d'échelle k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Oui. Diviser chaque <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> par 2 donne 3, 4, 5. Donc 6, 8, 10 est un triangle 3 4 5 mis à l'échelle avec k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "6, 8, 10 est-il un triangle 3 4 5 ?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Oui. Mesurez 3 unités le long d'un <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> et 4 unités le long de l'autre. Si la diagonale entre ces extrémités mesure exactement 5 unités, le coin est un <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angle</a> droit.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Puis-je utiliser la règle du 3 4 5 pour vérifier un angle droit ?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Le <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">périmètre</a> de base est 3 + 4 + 5 = 12 unités. Pour toute version mise à l'échelle, le périmètre est 12k, où k est le facteur d'échelle.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Quel est le périmètre d'un triangle 3 4 5 ?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Aire</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Après la mise à l'échelle, l'<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">aire</a> est la moitié du produit des deux cathètes, et le <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">périmètre</a> est la somme des trois côtés. Comme le rapport ne change jamais, un triangle 3 4 5, à n'importe quelle échelle, a toujours les mêmes angles.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Cliquez sur Réinitialiser pour effacer la saisie et repartir de zéro.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Aire</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "L'<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">aire</a> vous indique l'espace à l'intérieur du triangle en unités carrées. Le <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">périmètre</a> vous donne la longueur totale autour de l'extérieur. Les deux valeurs augmentent lorsque vous augmentez k, mais le triangle conserve toujours son <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angle</a> droit.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Une version mise à l'échelle conserve le même rapport que 3k : 4k : 5k, donc l'hypoténuse est toujours le <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> associé à 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Résoudre des devoirs de géométrie impliquant la mise à l'échelle d'un triangle 3 4 5.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Concevoir des plans ou des plans d'étage qui exigent des coins à exactement 90 degrés.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Estimer rapidement des aires et des périmètres sans un solveur complet de triangle rectangle.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Enseigner aux élèves comment la mise à l'échelle préserve les angles dans les <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">triangles semblables</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Ne mettre à l'échelle qu'un ou deux côtés au lieu des trois — chaque <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> doit être multiplié par k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Oublier que 5, 12, 13 est un <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">triplet pythagoricien</a> — certains élèves ne le reconnaissent pas comme tel.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Écrire les côtés dans le mauvais ordre, comme 5, 13, 12, et placer l'hypoténuse au milieu.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "N'utiliser que les cathètes pour le <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">périmètre</a> — le périmètre comprend les trois côtés, pas seulement les deux cathètes.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Chaque version mise à l'échelle conserve les mêmes angles et le même <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angle</a> droit.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Aire</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Exemple 2 : facteur d'échelle k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Aire</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exemple 3 : facteur d'échelle k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Oui. Chaque <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> vaut exactement le double du triplet de base, donc 10, 24, 26 est un triangle 5 12 13 avec un facteur d'échelle k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "10, 24, 26 est-il un triangle 5 12 13 ?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Les deux sont des <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">triplets pythagoriciens</a>, mais ils ont des rapports de <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côtés</a> et des angles différents. Un <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">triangle 3 4 5</a> a une forme plus pentue, tandis qu'un triangle 5 12 13 est plus plat parce que la cathète la plus longue est beaucoup plus grande par rapport à la cathète la plus courte.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Quelle est la différence entre un triangle 3 4 5 et un triangle 5 12 13 ?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Oui. En utilisant m = 3 et n = 2, on obtient a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 et c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Le triplet 5 12 13 peut-il être généré avec la formule en m et n ?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Aire</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Une fois que vous avez trouvé les côtés mis à l'échelle, l'<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">aire</a> égale la moitié du produit des deux cathètes. Le <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">périmètre</a> est simplement la somme des trois côtés. La forme reste la même — seule la taille change.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Appuyez sur Réinitialiser pour commencer un nouveau calcul.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Aire</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Un k plus grand étire le triangle tout en gardant les mêmes proportions. Doubler k quadruple l'<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">aire</a> mais ne fait que doubler le <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">périmètre</a>. Cette relation est vraie pour tous les triangles mis à l'échelle.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Une version mise à l'échelle conserve le même rapport que 5k : 12k : 13k, donc chaque <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> est multiplié par le même facteur d'échelle k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Revérifier les <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">mesures</a> d'<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angle</a> droit lorsque les côtés sont des multiples de 5, 12 et 13.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Calculer des aires et des périmètres pour des devoirs de géométrie impliquant des <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">triplets pythagoriciens</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Planifier des plans de construction qui utilisent le rapport 5 12 13 pour la précision.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Explorer comment la mise à l'échelle d'un triangle modifie son <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">aire</a> et son <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">périmètre</a>.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Utiliser des facteurs d'échelle différents pour différentes paires de <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côtés</a> — toutes les paires doivent partager le même k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Diviser dans le mauvais sens — k égale le <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> homologue divisé par le côté d'origine, et non l'inverse.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Supposer que tous les triangles rectangles sont semblables — deux triangles rectangles ne sont semblables que s'ils partagent un deuxième <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angle</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Oublier que l'<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angle</a> droit compte comme un angle partagé — si deux triangles rectangles ont un angle aigu supplémentaire égal, ils sont semblables.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Les trois paires de côtés doivent avoir le même facteur d'échelle.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> homologue} = \\text{côté d'origine} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{Le <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> correspondant sur le triangle semblable mesure 20 unités.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Exemple 2 : Trouver un côté homologue manquant",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> d'origine} = \\frac{\\text{côté homologue}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{Le <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> correspondant sur le triangle d'origine mesure 5 unités.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exemple 3 : Trouver le côté d'origine",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Oui. Un facteur d'échelle comme 0.5 signifie que le triangle semblable fait la moitié de la taille de l'original. Tout nombre positif convient comme facteur d'échelle.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Le facteur d'échelle peut-il être un nombre décimal ?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Non. Deux triangles rectangles ne sont semblables que s'ils partagent au moins un <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angle</a> aigu en plus de l'angle droit. Des angles aigus différents signifient des proportions différentes.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Tous les triangles rectangles sont-ils semblables entre eux ?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Multipliez le <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> d'origine correspondant par k pour obtenir le côté homologue. Ou divisez le côté homologue par k pour trouver l'original. La formule dépend du côté que vous cherchez.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Comment trouver un côté manquant à l'aide du facteur d'échelle ?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> homologue}}{\\text{côté d'origine}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> homologue} = \\text{côté d'origine} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> d'origine} = \\frac{\\text{côté homologue}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Le facteur d'échelle fonctionne dans un sens. Si k = 2, le triangle semblable est deux fois plus grand. Pour aller dans l'autre sens, divisez par k au lieu de multiplier. Les formules couvrent les trois situations : trouver k, trouver un <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> mis à l'échelle et trouver le côté d'origine.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Cliquez sur Réinitialiser pour effacer tous les champs.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = côté homologue / côté d'origine",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "côté homologue = côté d'origine × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "côté d'origine = côté homologue / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = côté homologue / côté d'origine",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Lorsque vous trouvez un <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté manquant</a>, le résultat est la longueur du côté correspondant sur l'autre triangle. Cela fonctionne parce que les triangles semblables maintiennent des proportions constantes entre toutes les paires de côtés correspondants.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Si le facteur d'échelle est k, chaque <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">côté</a> du triangle semblable égale son côté d'origine correspondant multiplié par k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Calculer des dimensions pour des maquettes ou des dessins d'architecture.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Résoudre des problèmes de proportion dans des tests de mathématiques standardisés.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Comparer des <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">mesures</a> d'ombres pour estimer la hauteur d'objets élevés.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Convertir entre les <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">mesures</a> d'un plan et les dimensions réelles d'un bâtiment.",
    "mode": "fill"
   }
  ]
 },
 "de": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Vergessen, jede <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> vor dem Addieren zu quadrieren — a + b = c prüfen statt a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Die Gleichung als a² + c² = b² schreiben statt a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Nicht ganzzahlige Werte verwenden und ein pythagoreisches Tripel erwarten — Tripel müssen ganze Zahlen sein.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Beim Erzeugen m kleiner oder gleich n setzen — m muss strikt größer als n sein.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Ergebnis: 3, 4, 5 ist ein gültiges pythagoreisches Tripel.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Ergebnis: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Ergebnis: 7, 24, 25 ist ein gültiges pythagoreisches Tripel.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Beispiel 3: Prüfen, ob 7, 24, 25 ein pythagoreisches Tripel ist",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Nein. Pythagoreische Tripel sind als Mengen ganzer Zahlen definiert. Dezimalwerte können a² + b² = c² erfüllen, gelten aber nicht als Tripel.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Können Dezimalzahlen ein pythagoreisches Tripel bilden?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ja. Prüfung: 5² + 12² = 25 + 144 = 169 = 13². Da alle drei ganze Zahlen sind und die Gleichung gilt, ist es ein gültiges pythagoreisches Tripel.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Ist 5, 12, 13 ein pythagoreisches Tripel?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Der <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Rechner</a> prüft, ob a² + b² genau gleich c² ist. Wenn es irgendeinen Unterschied gibt — selbst einen kleinen durch Rundung — bilden die Werte kein pythagoreisches Tripel. Stellen Sie sicher, dass c der größte Wert ist.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Warum sagt der <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Rechner</a>, dass meine Werte kein Tripel sind?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Sie können Tripel auch mit zwei positiven ganzen Zahlen m und n erzeugen, wobei m größer als n ist. Die Formeln a = m² − n², b = 2mn und c = m² + n² erzeugen immer ein gültiges Tripel. Wenn m und n keine gemeinsamen Faktoren haben und nicht beide ungerade sind, wird das Ergebnis ein primitives Tripel genannt.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klicken Sie auf Zurücksetzen, um alle Felder zu leeren und von vorn zu beginnen.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Beim Erzeugen eines Tripels erzeugt der <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Rechner</a> drei ganze Zahlen mit den m- und n-Formeln. Diese Zahlen bilden garantiert ein rechtwinkliges Dreieck. Wenn m und n keinen gemeinsamen Faktor haben und nicht beide ungerade sind, ist das Tripel primitiv — das bedeutet, es kann nicht weiter vereinfacht werden.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Das exakte Verhältnis ändert sich von Tripel zu Tripel, aber jedes gültige Tripel erfüllt a² + b² = c² mit c als Hypotenuse.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Überprüfen, ob gemessene <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seitenlängen</a> einen echten rechten <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Winkel</a> bilden.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Tripel für Mathematikwettbewerbe und Übungsaufgaben erzeugen.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Eine Referenzliste pythagoreischer Tripel zum Lernen erstellen.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Bau-<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">Messwerte</a> bestätigen, die auf der 3-4-5-Regel oder ähnlichen Mustern beruhen.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "5 als Kathete statt als Hypotenuse behandeln — 5 ist immer die längste <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Denken, dass nur die exakten Werte 3, 4, 5 funktionieren — jedes Vielfache wie 6, 8, 10 oder 15, 20, 25 ist ebenfalls gültig.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a>- und <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Umfang</a>formeln verwechseln — der Flächeninhalt verwendet Multiplikation und Division durch 2, der Umfang verwendet Addition.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Einen negativen oder null Skalierungsfaktor verwenden — k muss größer als 0 sein.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Multiplizieren Sie alle drei Seiten mit demselben k, um den rechten <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Winkel</a> zu erhalten.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Beispiel 2: Skalierungsfaktor k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Beispiel 3: Skalierungsfaktor k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ja. Jede <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> durch 2 zu teilen, ergibt 3, 4, 5. Also ist 6, 8, 10 ein 3-4-5-Dreieck, skaliert mit k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Ist 6, 8, 10 ein 3-4-5-Dreieck?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ja. Messen Sie 3 Einheiten entlang einer <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> und 4 Einheiten entlang der anderen. Wenn die Diagonale zwischen diesen Endpunkten genau 5 Einheiten misst, ist die Ecke ein rechter <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Winkel</a>.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Kann ich die 3-4-5-Regel verwenden, um einen rechten Winkel zu prüfen?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Der Basis-<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Umfang</a> ist 3 + 4 + 5 = 12 Einheiten. Bei jeder skalierten Version ist der Umfang 12k, wobei k der Skalierungsfaktor ist.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Wie groß ist der Umfang eines 3-4-5-Dreiecks?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Nach dem Skalieren ist der <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a> die Hälfte des Produkts der beiden Katheten, und der <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Umfang</a> ist die Summe aller drei Seiten. Da das Verhältnis sich nie ändert, hat ein 3-4-5-Dreieck bei jedem Maßstab immer dieselben Winkel.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klicken Sie auf Zurücksetzen, um die Eingabe zu löschen und frisch zu beginnen.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Der <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a> sagt Ihnen die Fläche im Inneren des Dreiecks in Quadrateinheiten. Der <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Umfang</a> gibt Ihnen die Gesamtlänge um die Außenseite. Beide Werte wachsen, wenn Sie k erhöhen, aber das Dreieck behält immer seinen rechten <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Winkel</a>.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Eine skalierte Version behält dasselbe Verhältnis wie 3k : 4k : 5k, daher ist die Hypotenuse immer die <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a>, die zu 5k gehört.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Geometrie-Hausaufgaben lösen, bei denen die Skalierung von 3-4-5-Dreiecken vorkommt.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Layouts oder Grundrisse entwerfen, die exakte 90-Grad-Ecken erfordern.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Flächeninhalte und Umfänge schnell schätzen, ohne einen vollständigen Rechner für rechtwinklige Dreiecke.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Schülern beibringen, wie Skalierung Winkel in <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">ähnlichen Dreiecken</a> erhält.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Nur eine oder zwei Seiten skalieren statt aller drei — jede <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> muss mit k multipliziert werden.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Vergessen, dass 5, 12, 13 ein <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">pythagoreisches Tripel</a> ist — manche Schüler erkennen es nicht als eines.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Seiten in der falschen Reihenfolge schreiben, wie 5, 13, 12, und die Hypotenuse in die Mitte setzen.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Nur die Katheten für den <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Umfang</a> verwenden — der Umfang umfasst alle drei Seiten, nicht nur die beiden Katheten.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Jede skalierte Version behält dieselben Winkel und den rechten <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Winkel</a>.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Beispiel 2: Skalierungsfaktor k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Beispiel 3: Skalierungsfaktor k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ja. Jede <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> ist genau doppelt so groß wie das Basistripel, daher ist 10, 24, 26 ein 5-12-13-Dreieck mit Skalierungsfaktor k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Ist 10, 24, 26 ein 5-12-13-Dreieck?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Beide sind <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">pythagoreische Tripel</a>, aber sie haben unterschiedliche <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seiten</a>verhältnisse und Winkel. Ein <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">3-4-5-Dreieck</a> hat eine steilere Form, während ein 5-12-13-Dreieck flacher ist, weil die längere Kathete im Verhältnis zur kürzeren Kathete viel größer ist.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Was ist der Unterschied zwischen einem 3-4-5- und einem 5-12-13-Dreieck?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Ja. Mit m = 3 und n = 2 ergibt sich a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 und c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Kann das Tripel 5, 12, 13 mit der m- und n-Formel erzeugt werden?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Sobald Sie die skalierten Seiten bestimmt haben, ist der <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a> gleich der Hälfte des Produkts der beiden Katheten. Der <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Umfang</a> ist einfach die Summe aller drei Seiten. Die Form bleibt gleich — nur die Größe ändert sich.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Drücken Sie auf Zurücksetzen, um eine neue Berechnung zu beginnen.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Ein größeres k streckt das Dreieck, während es dieselben Proportionen behält. k zu verdoppeln, vervierfacht den <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a>, verdoppelt aber nur den <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Umfang</a>. Diese Beziehung gilt für alle skalierten Dreiecke.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Eine skalierte Version behält dasselbe Verhältnis wie 5k : 12k : 13k, daher wird jede <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> mit demselben Skalierungsfaktor k multipliziert.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Rechte <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Winkel</a>-<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">Messwerte</a> doppelt prüfen, wenn die Seiten Vielfache von 5, 12 und 13 sind.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Flächeninhalte und Umfänge für Geometrieaufgaben mit <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">pythagoreischen Tripeln</a> berechnen.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Bau-Layouts planen, die das Verhältnis 5-12-13 für Genauigkeit verwenden.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Erkunden, wie das Skalieren eines Dreiecks seinen <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Flächeninhalt</a> und <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Umfang</a> verändert.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Verschiedene Skalierungsfaktoren für verschiedene <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seiten</a>paare verwenden — alle Paare müssen dasselbe k teilen.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "In die falsche Richtung teilen — k ist die ähnliche <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> geteilt durch die ursprüngliche Seite, nicht umgekehrt.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Annehmen, dass alle rechtwinkligen Dreiecke ähnlich sind — zwei rechtwinklige Dreiecke sind nur ähnlich, wenn sie einen zweiten <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Winkel</a> teilen.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Vergessen, dass der rechte <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Winkel</a> als gemeinsamer Winkel zählt — wenn zwei rechtwinklige Dreiecke einen weiteren gleichen spitzen Winkel haben, sind sie ähnlich.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Alle drei Seitenpaare müssen denselben Skalierungsfaktor haben.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{ähnliche <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a>} = \\text{ursprüngliche Seite} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{Die entsprechende <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> des ähnlichen Dreiecks beträgt 20 Einheiten.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Beispiel 2: Eine fehlende ähnliche Seite bestimmen",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{ursprüngliche <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a>} = \\frac{\\text{ähnliche Seite}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{Die passende <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> des ursprünglichen Dreiecks beträgt 5 Einheiten.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Beispiel 3: Die ursprüngliche Seite bestimmen",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ja. Ein Skalierungsfaktor wie 0.5 bedeutet, dass das ähnliche Dreieck halb so groß ist wie das ursprüngliche. Jede positive Zahl funktioniert als Skalierungsfaktor.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Kann der Skalierungsfaktor eine Dezimalzahl sein?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Nein. Zwei rechtwinklige Dreiecke sind nur ähnlich, wenn sie zusätzlich zum rechten Winkel mindestens einen spitzen <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Winkel</a> teilen. Unterschiedliche spitze Winkel bedeuten unterschiedliche Proportionen.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Sind alle rechtwinkligen Dreiecke zueinander ähnlich?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Multiplizieren Sie die entsprechende ursprüngliche <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> mit k, um die ähnliche Seite zu erhalten. Oder teilen Sie die ähnliche Seite durch k, um die ursprüngliche zu bestimmen. Die Formel hängt davon ab, nach welcher Seite Sie lösen.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Wie bestimme ich eine fehlende Seite mit dem Skalierungsfaktor?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{ähnliche <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a>}}{\\text{ursprüngliche Seite}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{ähnliche <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a>} = \\text{ursprüngliche Seite} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{ursprüngliche <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a>} = \\frac{\\text{ähnliche Seite}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Der Skalierungsfaktor funktioniert in eine Richtung. Wenn k = 2, ist das ähnliche Dreieck doppelt so groß. Um den umgekehrten Weg zu gehen, teilen Sie durch k, statt zu multiplizieren. Die Formeln decken alle drei Situationen ab: k bestimmen, eine skalierte <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> bestimmen und die ursprüngliche Seite bestimmen.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klicken Sie auf Zurücksetzen, um alle Felder zu leeren.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = ähnliche Seite / ursprüngliche Seite",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "ähnliche Seite = ursprüngliche Seite × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "ursprüngliche Seite = ähnliche Seite / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = ähnliche Seite / ursprüngliche Seite",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Wenn Sie eine <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">fehlende Seite</a> bestimmen, ist das Ergebnis die Länge der entsprechenden Seite des anderen Dreiecks. Das funktioniert, weil ähnliche Dreiecke konstante Proportionen über alle Paare passender Seiten hinweg beibehalten.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Wenn der Skalierungsfaktor k ist, ist jede <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Seite</a> des ähnlichen Dreiecks gleich ihrer entsprechenden ursprünglichen Seite multipliziert mit k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Abmessungen für maßstabsgetreue Modelle oder Architekturzeichnungen berechnen.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Proportionsaufgaben in standardisierten Mathematiktests lösen.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Schatten-<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">Messwerte</a> vergleichen, um die Höhe hoher Objekte zu schätzen.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Zwischen Bauplan-<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">Messwerten</a> und tatsächlichen Gebäudeabmessungen umrechnen.",
    "mode": "fill"
   }
  ]
 },
 "it": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Dimenticare di elevare al quadrato ciascun <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> prima di sommare: verificare a + b = c invece di a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Scrivere l'equazione come a² + c² = b² invece di a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Usare valori non interi e aspettarsi una terna pitagorica: le terne devono essere numeri interi.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Impostare m minore o uguale a n durante la generazione: m deve essere strettamente maggiore di n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Risultato: 3, 4, 5 è una terna pitagorica valida.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Risultato: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Risultato: 7, 24, 25 è una terna pitagorica valida.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Esempio 3: verifica se 7, 24, 25 è una terna pitagorica",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "No. Le terne pitagoriche sono definite solo come insiemi di numeri interi. I valori decimali possono soddisfare a² + b² = c², ma non sono considerati terne.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "I numeri decimali possono formare una terna pitagorica?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Sì. Verifica: 5² + 12² = 25 + 144 = 169 = 13². Poiché tutti e tre sono numeri interi e l'equazione vale, è una terna pitagorica valida.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "5, 12, 13 è una terna pitagorica?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "La <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calcolatrice</a> verifica se a² + b² è esattamente uguale a c². Se c'è una qualsiasi differenza, anche piccola dovuta all'arrotondamento, i valori non formano una terna pitagorica. Assicurati che c sia il valore più grande.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Perché la <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calcolatrice</a> dice che i miei valori non sono una terna?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Puoi anche generare terne usando due interi positivi m e n, dove m è maggiore di n. Le formule a = m² − n², b = 2mn e c = m² + n² produrranno sempre una terna valida. Quando m e n non hanno fattori comuni e non sono entrambi dispari, il risultato è chiamato terna primitiva.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Fai clic su Reimposta per cancellare tutti i campi e ricominciare.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Quando genera una terna, la <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calcolatrice</a> produce tre numeri interi usando le formule con m e n. Questi numeri sono garantiti per formare un triangolo rettangolo. Se m e n non condividono alcun fattore comune e non sono entrambi dispari, la terna è primitiva, cioè non può essere semplificata ulteriormente.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Il rapporto esatto cambia da una terna all'altra, ma ogni terna valida soddisfa a² + b² = c² con c come ipotenusa.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Verificare se le <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lunghezze dei lati</a> misurate formano un vero <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angolo</a> retto.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Generare terne per gare di matematica e problemi di esercitazione.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Creare un elenco di riferimento di terne pitagoriche per lo studio.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Confermare <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">misurazioni</a> di costruzione che si basano sulla regola 3-4-5 o su schemi simili.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Trattare 5 come un cateto invece che come ipotenusa: 5 è sempre il <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> più lungo.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Pensare che funzionino solo i valori esatti 3, 4, 5: anche qualsiasi multiplo come 6, 8, 10 o 15, 20, 25 è valido.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Confondere le formule di <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">area</a> e <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimetro</a>: l'area usa la moltiplicazione e la divisione per 2, il perimetro usa l'addizione.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Usare un fattore di scala negativo o zero: k deve essere maggiore di 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Moltiplica tutti e tre i lati per lo stesso k per mantenere l'<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angolo</a> retto.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Area</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Esempio 2: fattore di scala k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Area</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Esempio 3: fattore di scala k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Sì. Dividendo ciascun <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> per 2 si ottiene 3, 4, 5. Quindi 6, 8, 10 è un triangolo 3 4 5 ridimensionato con k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "6, 8, 10 è un triangolo 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Sì. Misura 3 unità lungo un <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> e 4 unità lungo l'altro. Se la diagonale tra quei due estremi misura esattamente 5 unità, l'angolo è un <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angolo</a> retto.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Posso usare la regola 3 4 5 per verificare un angolo retto?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Il <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimetro</a> di base è 3 + 4 + 5 = 12 unità. Per qualsiasi versione ridimensionata, il perimetro è 12k, dove k è il fattore di scala.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Qual è il perimetro di un triangolo 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Dopo il ridimensionamento, l'<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">area</a> è la metà del prodotto dei due cateti e il <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimetro</a> è la somma di tutti e tre i lati. Poiché il rapporto non cambia mai, un triangolo 3 4 5 a qualsiasi scala ha sempre gli stessi angoli.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Fai clic su Reimposta per cancellare l'input e ricominciare da capo.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "L'<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">area</a> ti indica lo spazio all'interno del triangolo in unità quadrate. Il <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimetro</a> ti dà la lunghezza totale intorno all'esterno. Entrambi i valori crescono all'aumentare di k, ma il triangolo mantiene sempre il suo <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angolo</a> retto.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Una versione ridimensionata mantiene lo stesso rapporto di 3k : 4k : 5k, quindi l'ipotenusa è sempre il <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> abbinato a 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Risolvere compiti di geometria che coinvolgono il ridimensionamento del triangolo 3 4 5.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Progettare layout o planimetrie che richiedono angoli esatti di 90 gradi.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Stimare rapidamente aree e perimetri senza un risolutore completo per triangoli rettangoli.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Insegnare agli studenti come il ridimensionamento preserva gli angoli nei <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">triangoli simili</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Ridimensionare solo uno o due lati invece di tutti e tre: ogni <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> deve essere moltiplicato per k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Dimenticare che 5, 12, 13 è una <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">terna pitagorica</a>: alcuni studenti non la riconoscono come tale.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Scrivere i lati nell'ordine sbagliato come 5, 13, 12 e posizionare l'ipotenusa in mezzo.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Usare solo i cateti per il <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimetro</a>: il perimetro include tutti e tre i lati, non solo i due cateti.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Ogni versione ridimensionata mantiene gli stessi angoli e l'<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angolo</a> retto.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Area</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Esempio 2: fattore di scala k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Area</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Esempio 3: fattore di scala k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Sì. Ciascun <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> è esattamente il doppio della terna di base, quindi 10, 24, 26 è un triangolo 5 12 13 con fattore di scala k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "10, 24, 26 è un triangolo 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Entrambi sono <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">terne pitagoriche</a>, ma hanno rapporti tra i <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lati</a> e angoli diversi. Un <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">triangolo 3 4 5</a> ha una forma più ripida, mentre un triangolo 5 12 13 è più piatto perché il cateto più lungo è molto più grande rispetto al cateto più corto.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Qual è la differenza tra un triangolo 3 4 5 e un triangolo 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Sì. Usando m = 3 e n = 2 si ottiene a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 e c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "La terna 5 12 13 può essere generata con la formula di m e n?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Una volta trovati i lati ridimensionati, l'<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">area</a> è uguale alla metà del prodotto dei due cateti. Il <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimetro</a> è semplicemente la somma di tutti e tre i lati. La forma resta la stessa, cambia solo la dimensione.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Premi Reimposta per iniziare un nuovo calcolo.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Un k più grande allunga il triangolo mantenendo le stesse proporzioni. Raddoppiare k quadruplica l'<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">area</a> ma raddoppia solo il <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimetro</a>. Questa relazione vale per tutti i triangoli ridimensionati.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Una versione ridimensionata mantiene lo stesso rapporto di 5k : 12k : 13k, quindi ciascun <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> viene moltiplicato per lo stesso fattore di scala k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Ricontrollare gli <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angoli</a> <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">retti e le misurazioni</a> quando i lati sono multipli di 5, 12 e 13.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Calcolare aree e perimetri per compiti di geometria che coinvolgono <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">terne pitagoriche</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Pianificare layout di costruzione che usano il rapporto 5 12 13 per la precisione.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Esplorare come il ridimensionamento di un triangolo cambia la sua <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">area</a> e il suo <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimetro</a>.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Usare fattori di scala diversi per coppie di <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lati</a> diverse: tutte le coppie devono condividere lo stesso k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Dividere nella direzione sbagliata: k è uguale al <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> simile diviso per il lato originale, non il contrario.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Presumere che tutti i triangoli rettangoli siano simili: due triangoli rettangoli sono simili solo se condividono un secondo <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angolo</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Dimenticare che l'<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angolo</a> retto conta come angolo condiviso: se due triangoli rettangoli hanno un altro angolo acuto uguale, sono simili.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Tutte e tre le coppie di lati devono avere lo stesso fattore di scala.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{simile <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a>} = \\text{lato originale} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{Il <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> corrispondente sul triangolo simile misura 20 unità.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Esempio 2: trova un lato simile mancante",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{originale <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a>} = \\frac{\\text{lato simile}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{Il <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> corrispondente sul triangolo originale misura 5 unità.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Esempio 3: trova il lato originale",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Sì. Un fattore di scala come 0.5 significa che il triangolo simile è la metà dell'originale. Qualsiasi numero positivo funziona come fattore di scala.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Il fattore di scala può essere un decimale?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "No. Due triangoli rettangoli sono simili solo se condividono almeno un <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">angolo</a> acuto oltre all'angolo retto. Angoli acuti diversi significano proporzioni diverse.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Tutti i triangoli rettangoli sono simili tra loro?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Moltiplica il <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> originale corrispondente per k per ottenere il lato simile. Oppure dividi il lato simile per k per trovare l'originale. La formula dipende da quale lato stai risolvendo.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Come trovo un lato mancante usando il fattore di scala?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{simile <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a>}}{\\text{lato originale}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{simile <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a>} = \\text{lato originale} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{originale <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a>} = \\frac{\\text{lato simile}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Il fattore di scala funziona in una direzione. Se k = 2, il triangolo simile è grande il doppio. Per andare nell'altra direzione, dividi per k invece di moltiplicare. Le formule coprono tutte e tre le situazioni: trovare k, trovare un <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> ridimensionato e trovare il lato originale.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Fai clic su Reimposta per cancellare tutti i campi.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = lato simile / lato originale",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "lato simile = lato originale × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "lato originale = lato simile / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = lato simile / lato originale",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Quando trovi un <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato mancante</a>, il risultato è la lunghezza del lato corrispondente sull'altro triangolo. Questo funziona perché i triangoli simili mantengono proporzioni costanti in tutte le coppie di lati corrispondenti.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Se il fattore di scala è k, ciascun <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lato</a> sul triangolo simile è uguale al suo lato originale corrispondente moltiplicato per k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Calcolare le dimensioni per modelli in scala o disegni architettonici.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Risolvere problemi di proporzioni nei test di matematica standardizzati.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Confrontare le <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">misurazioni</a> delle ombre per stimare l'altezza di oggetti alti.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Convertire tra le <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">misurazioni</a> del progetto e le dimensioni reali dell'edificio.",
    "mode": "fill"
   }
  ]
 },
 "pt": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Esquecer de elevar cada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> ao quadrado antes de somar, verificando a + b = c em vez de a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Escrever a equação como a² + c² = b² em vez de a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Usar valores não inteiros e esperar um terno pitagórico, os ternos devem ser números inteiros.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Definir m menor ou igual a n ao gerar, m deve ser estritamente maior que n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Resultado: 3, 4, 5 é um terno pitagórico válido.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Resultado: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Resultado: 7, 24, 25 é um terno pitagórico válido.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exemplo 3: Verificar se 7, 24, 25 é um terno pitagórico",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Não. Os ternos pitagóricos são definidos apenas como conjuntos de números inteiros. Valores decimais podem satisfazer a² + b² = c², mas não são considerados ternos.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Números decimais podem formar um terno pitagórico?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Sim. Verificando: 5² + 12² = 25 + 144 = 169 = 13². Como os três são números inteiros e a equação é válida, é um terno pitagórico válido.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "5, 12, 13 é um terno pitagórico?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "A <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> verifica se a² + b² é exatamente igual a c². Se houver qualquer diferença, mesmo uma pequena causada por arredondamento, os valores não formam um terno pitagórico. Certifique-se de que c seja o maior valor.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Por que a <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> diz que meus valores não formam um terno?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Você também pode gerar ternos usando dois inteiros positivos m e n, em que m é maior que n. As fórmulas a = m² − n², b = 2mn e c = m² + n² sempre produzirão um terno válido. Quando m e n não compartilham fatores comuns e não são ambos ímpares, o resultado é chamado de terno primitivo.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Clique em Redefinir para limpar todos os campos e começar de novo.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Ao gerar um terno, a <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> produz três números inteiros usando as fórmulas de m e n. Esses números têm a garantia de formar um triângulo retângulo. Se m e n não compartilham nenhum fator comum e não são ambos ímpares, o terno é primitivo, o que significa que ele não pode ser simplificado ainda mais.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "A razão exata muda de um terno para outro, mas todo terno válido satisfaz a² + b² = c², com c como hipotenusa.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Verificar se <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">comprimentos de lados</a> medidos formam um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto verdadeiro.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Gerar ternos para competições de matemática e problemas de prática.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Montar uma lista de referência de ternos pitagóricos para estudo.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Confirmar <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">medidas</a> de construção que dependem da regra 3-4-5 ou de padrões semelhantes.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Tratar 5 como um cateto em vez da hipotenusa, 5 é sempre o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> mais longo.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Pensar que apenas os valores exatos de 3, 4, 5 funcionam, qualquer múltiplo como 6, 8, 10 ou 15, 20, 25 também é válido.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Confundir as fórmulas de <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> e <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a>, a área usa multiplicação e divisão por 2, o perímetro usa adição.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Usar um fator de escala negativo ou zero, k deve ser maior que 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Multiplique os três lados pelo mesmo k para manter o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Exemplo 2: Fator de escala k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exemplo 3: Fator de escala k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Sim. Dividir cada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> por 2 resulta em 3, 4, 5. Portanto, 6, 8, 10 é um triângulo 3 4 5 escalado por k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "6, 8, 10 é um triângulo 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Sim. Meça 3 unidades ao longo de um <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> e 4 unidades ao longo do outro. Se a diagonal entre esses pontos finais medir exatamente 5 unidades, o canto é um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Posso usar a regra 3 4 5 para verificar um ângulo reto?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "O <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a> base é 3 + 4 + 5 = 12 unidades. Para qualquer versão em escala, o perímetro é 12k, em que k é o fator de escala.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Qual é o perímetro de um triângulo 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Após a escala, a <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> é metade do produto dos dois catetos, e o <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a> é a soma dos três lados. Como a razão nunca muda, um triângulo 3 4 5 em qualquer escala sempre tem os mesmos ângulos.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Clique em Redefinir para limpar a entrada e começar do zero.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "A <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> indica o espaço dentro do triângulo em unidades quadradas. O <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a> fornece o comprimento total ao redor do lado de fora. Ambos os valores crescem à medida que você aumenta k, mas o triângulo sempre mantém seu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Uma versão em escala mantém a mesma razão de 3k : 4k : 5k, portanto a hipotenusa é sempre o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> correspondente a 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Resolver tarefas de geometria que envolvem a escala de triângulos 3 4 5.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Projetar layouts ou plantas baixas que exigem cantos exatos de 90 graus.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Estimar rapidamente áreas e perímetros sem um solucionador completo de triângulo retângulo.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Ensinar aos alunos como a escala preserva os ângulos em <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">triângulos semelhantes</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Escalar apenas um ou dois lados em vez dos três, todo <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> deve ser multiplicado por k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Esquecer que 5, 12, 13 é um <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">terno pitagórico</a>, alguns alunos não o reconhecem como um.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Escrever os lados na ordem errada, como 5, 13, 12, e colocar a hipotenusa no meio.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Usar apenas os catetos para o <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a>, o perímetro inclui os três lados, não apenas os dois catetos.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Toda versão em escala mantém os mesmos ângulos e o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Exemplo 2: Fator de escala k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exemplo 3: Fator de escala k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Sim. Cada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> é exatamente o dobro do terno base, portanto 10, 24, 26 é um triângulo 5 12 13 com fator de escala k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "10, 24, 26 é um triângulo 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ambos são <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ternos pitagóricos</a>, mas têm razões de <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lados</a> e ângulos diferentes. Um <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">triângulo 3 4 5</a> tem uma forma mais íngreme, enquanto um triângulo 5 12 13 é mais achatado porque o cateto maior é muito maior em relação ao cateto menor.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Qual é a diferença entre um triângulo 3 4 5 e um triângulo 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Sim. Usar m = 3 e n = 2 resulta em a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 e c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "O terno 5 12 13 pode ser gerado com a fórmula de m e n?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Depois que você encontra os lados em escala, a <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> é igual a metade do produto dos dois catetos. O <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a> é simplesmente a soma dos três lados. A forma permanece a mesma, apenas o tamanho muda.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Pressione Redefinir para iniciar um novo cálculo.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Área</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Um k maior estica o triângulo mantendo as mesmas proporções. Dobrar k quadruplica a <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a>, mas apenas dobra o <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a>. Essa relação é válida para todos os triângulos em escala.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Uma versão em escala mantém a mesma razão de 5k : 12k : 13k, portanto cada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> é multiplicado pelo mesmo fator de escala k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Conferir o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto: verificar as <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">medidas</a> quando os lados são múltiplos de 5, 12 e 13.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Calcular áreas e perímetros para trabalhos de geometria que envolvem <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ternos pitagóricos</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Planejar layouts de construção que usam a razão 5 12 13 para precisão.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Explorar como escalar um triângulo muda sua <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">área</a> e seu <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perímetro</a>.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Usar fatores de escala diferentes para pares de <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lados</a> diferentes, todos os pares devem compartilhar o mesmo k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Dividir na direção errada, k é igual ao <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> semelhante dividido pelo lado original, não o inverso.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Supor que todos os triângulos retângulos são semelhantes, dois triângulos retângulos só são semelhantes se compartilharem um segundo <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Esquecer que o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto conta como um ângulo compartilhado, se dois triângulos retângulos tiverem mais um ângulo agudo igual, eles são semelhantes.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Todos os três pares de lados devem ter o mesmo fator de escala.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">semelhante</a>} = \\text{lado original} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{O <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> correspondente no triângulo semelhante mede 20 unidades.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Exemplo 2: Encontrar um lado semelhante que falta",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">original</a>} = \\frac{\\text{lado semelhante}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{O <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> correspondente no triângulo original mede 5 unidades.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exemplo 3: Encontrar o lado original",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Sim. Um fator de escala como 0.5 significa que o triângulo semelhante tem metade do tamanho do original. Qualquer número positivo funciona como fator de escala.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "O fator de escala pode ser um decimal?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Não. Dois triângulos retângulos são semelhantes apenas se compartilharem pelo menos um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> agudo, além do ângulo reto. Ângulos agudos diferentes significam proporções diferentes.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Todos os triângulos retângulos são semelhantes entre si?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Multiplique o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> original correspondente por k para obter o lado semelhante. Ou divida o lado semelhante por k para encontrar o original. A fórmula depende de qual lado você está resolvendo.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Como encontro um lado que falta usando o fator de escala?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">semelhante</a>}}{\\text{lado original}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">semelhante</a>} = \\text{lado original} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{lado <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">original</a>} = \\frac{\\text{lado semelhante}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "O fator de escala funciona em uma direção. Se k = 2, o triângulo semelhante é duas vezes maior. Para ir na outra direção, divida por k em vez de multiplicar. As fórmulas cobrem as três situações: encontrar k, encontrar um <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> em escala e encontrar o lado original.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Clique em Redefinir para limpar todos os campos.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = lado semelhante / lado original",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "lado semelhante = lado original × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "lado original = lado semelhante / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = lado semelhante / lado original",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Quando você encontra um <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado que falta</a>, o resultado é o comprimento do lado correspondente no outro triângulo. Isso funciona porque os triângulos semelhantes mantêm proporções constantes em todos os pares de lados correspondentes.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Se o fator de escala é k, cada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> do triângulo semelhante é igual ao seu lado original correspondente multiplicado por k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Calcular dimensões para modelos em escala ou desenhos arquitetônicos.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Resolver problemas de proporção em provas padronizadas de matemática.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Comparar <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">medidas</a> de sombras para estimar a altura de objetos altos.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Converter entre <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">medidas</a> de plantas e dimensões reais de construções.",
    "mode": "fill"
   }
  ]
 },
 "bn": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "যোগ করার আগে প্রতিটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহুকে</a> বর্গ করতে ভুলে যাওয়া — a² + b² = c²-এর পরিবর্তে a + b = c যাচাই করা।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "সমীকরণটি a² + b² = c²-এর পরিবর্তে a² + c² = b² হিসেবে লেখা।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "অ-পূর্ণসংখ্যা মান ব্যবহার করে পিথাগোরীয় ত্রয়ী প্রত্যাশা করা — ত্রয়ী অবশ্যই পূর্ণ সংখ্যা হতে হবে।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "তৈরি করার সময় m-কে n-এর চেয়ে ছোট বা সমান রাখা — m অবশ্যই n-এর চেয়ে কঠোরভাবে বড় হতে হবে।",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{ফলাফল: 3, 4, 5 একটি বৈধ পিথাগোরীয় ত্রয়ী।}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{ফলাফল: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{ফলাফল: 7, 24, 25 একটি বৈধ পিথাগোরীয় ত্রয়ী।}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "উদাহরণ 3: 7, 24, 25 একটি পিথাগোরীয় ত্রয়ী কিনা যাচাই করুন",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "না। পিথাগোরীয় ত্রয়ী সংজ্ঞায়িত হয় শুধুমাত্র পূর্ণ সংখ্যার সেট হিসেবে। দশমিক মান a² + b² = c² পূরণ করতে পারে, কিন্তু সেগুলোকে ত্রয়ী ধরা হয় না।",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "দশমিক সংখ্যা কি পিথাগোরীয় ত্রয়ী গঠন করতে পারে?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "হ্যাঁ। যাচাই: 5² + 12² = 25 + 144 = 169 = 13²। যেহেতু তিনটিই পূর্ণ সংখ্যা এবং সমীকরণটি মেলে, এটি একটি বৈধ পিথাগোরীয় ত্রয়ী।",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "5, 12, 13 কি একটি পিথাগোরীয় ত্রয়ী?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটরটি</a> যাচাই করে a² + b² ঠিক c²-এর সমান কিনা। কোনো পার্থক্য থাকলে — আসন্নীকরণ থেকে পাওয়া ছোট পার্থক্যও — মানগুলো পিথাগোরীয় ত্রয়ী গঠন করে না। নিশ্চিত করুন c যেন বৃহত্তম মান হয়।",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটরটি</a> কেন বলছে আমার মানগুলো ত্রয়ী নয়?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "আপনি দুটি ধনাত্মক পূর্ণসংখ্যা m ও n ব্যবহার করেও ত্রয়ী তৈরি করতে পারেন, যেখানে m, n-এর চেয়ে বড়। a = m² − n², b = 2mn, এবং c = m² + n² সূত্রগুলো সর্বদা একটি বৈধ ত্রয়ী তৈরি করবে। m ও n-এর কোনো সাধারণ গুণনীয়ক না থাকলে এবং উভয়ে বিজোড় না হলে, ফলাফলটিকে মৌলিক ত্রয়ী বলা হয়।",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "সব ক্ষেত্র মুছে আবার শুরু করতে Reset ক্লিক করুন।",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "একটি ত্রয়ী তৈরি করার সময়, <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটরটি</a> m ও n সূত্র ব্যবহার করে তিনটি পূর্ণ সংখ্যা তৈরি করে। এই সংখ্যাগুলো একটি সমকোণী ত্রিভুজ গঠন করবেই বলে নিশ্চয়তা দেওয়া হয়। m ও n-এর কোনো সাধারণ গুণনীয়ক না থাকলে এবং উভয়ে বিজোড় না হলে, ত্রয়ীটি মৌলিক — মানে এটিকে আর সরল করা যায় না।",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "নির্ভুল অনুপাত এক ত্রয়ী থেকে অন্যটিতে বদলায়, কিন্তু প্রতিটি বৈধ ত্রয়ীই c-কে অতিভুজ ধরে a² + b² = c² পূরণ করে।",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "পরিমাপ করা <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহুর দৈর্ঘ্যগুলো</a> প্রকৃত সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> গঠন করে কিনা যাচাই করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "গণিত প্রতিযোগিতা ও অনুশীলন সমস্যার জন্য ত্রয়ী তৈরি করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "পড়াশোনার জন্য পিথাগোরীয় ত্রয়ীগুলোর একটি রেফারেন্স তালিকা তৈরি করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "3-4-5 নিয়ম বা অনুরূপ প্যাটার্নের উপর নির্ভরশীল নির্মাণ <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">পরিমাপ</a> নিশ্চিত করা।",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "5-কে অতিভুজের পরিবর্তে লেগ হিসেবে ধরা — 5 সবসময় দীর্ঘতম <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "শুধুমাত্র 3, 4, 5-এর নির্ভুল মানই কাজ করে এমন ভাবা — 6, 8, 10 বা 15, 20, 25-এর মতো যেকোনো গুণিতকও বৈধ।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a> ও <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">পরিসীমার</a> সূত্র মিশিয়ে ফেলা — ক্ষেত্রফলে গুণ ও 2 দিয়ে ভাগ হয়, পরিসীমায় যোগ হয়।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "ঋণাত্মক বা শূন্য স্কেল গুণক ব্যবহার করা — k অবশ্যই 0-এর চেয়ে বড় হতে হবে।",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> বজায় রাখতে তিনটি বাহুকেই একই k দিয়ে গুণ করুন।",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "উদাহরণ 2: স্কেল গুণক k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "উদাহরণ 3: স্কেল গুণক k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "হ্যাঁ। প্রতিটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহুকে</a> 2 দিয়ে ভাগ করলে 3, 4, 5 পাওয়া যায়। তাই 6, 8, 10 হলো k = 2 দিয়ে স্কেল করা একটি 3 4 5 ত্রিভুজ।",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "6, 8, 10 কি একটি 3 4 5 ত্রিভুজ?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "হ্যাঁ। একটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> বরাবর 3 একক এবং অন্য বাহু বরাবর 4 একক মাপুন। ওই প্রান্তবিন্দু দুটির মধ্যবর্তী কর্ণ ঠিক 5 একক মাপলে, কোণাটি একটি সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a>।",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "আমি কি 3 4 5 নিয়ম ব্যবহার করে সমকোণ যাচাই করতে পারি?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "মূল <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">পরিসীমা</a> হলো 3 + 4 + 5 = 12 একক। যেকোনো স্কেল করা সংস্করণের জন্য, পরিসীমা 12k, যেখানে k হলো স্কেল গুণক।",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "3 4 5 ত্রিভুজের পরিসীমা কত?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "স্কেল করার পর, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a> দুটি লেগের গুণফলের অর্ধেক, এবং <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">পরিসীমা</a> তিনটি বাহুর যোগফল। যেহেতু অনুপাত কখনো বদলায় না, যেকোনো স্কেলে একটি 3 4 5 ত্রিভুজের সবসময় একই কোণ থাকে।",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "ইনপুট মুছে নতুন করে শুরু করতে Reset ক্লিক করুন।",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a> আপনাকে বর্গ এককে ত্রিভুজের ভেতরের স্থান বলে। <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">পরিসীমা</a> আপনাকে বাইরের চারপাশের মোট দৈর্ঘ্য দেয়। k বাড়ানোর সাথে সাথে উভয় মানই বাড়ে, কিন্তু ত্রিভুজটি সবসময় তার সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> বজায় রাখে।",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "একটি স্কেল করা সংস্করণ 3k : 4k : 5k-এর মতো একই অনুপাত বজায় রাখে, তাই অতিভুজ সবসময় 5k-এর সাথে মেলা <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>।",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "3 4 5 ত্রিভুজ স্কেলিং জড়িত জ্যামিতির বাড়ির কাজ সমাধান করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "ঠিক 90-ডিগ্রি কোণা প্রয়োজন এমন বিন্যাস বা মেঝের পরিকল্পনা নকশা করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "পূর্ণ সমকোণী ত্রিভুজ সমাধানকারী ছাড়াই দ্রুত ক্ষেত্রফল ও পরিসীমা অনুমান করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "<a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">সদৃশ ত্রিভুজে</a> স্কেলিং কীভাবে কোণ সংরক্ষণ করে তা শিক্ষার্থীদের শেখানো।",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "তিনটির পরিবর্তে মাত্র একটি বা দুটি বাহু স্কেল করা — প্রতিটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহুকেই</a> k দিয়ে গুণ করতে হবে।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "5, 12, 13 যে একটি <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">পিথাগোরীয় ত্রয়ী</a> তা ভুলে যাওয়া — কিছু শিক্ষার্থী এটিকে ত্রয়ী হিসেবে চিনতেই পারে না।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "5, 13, 12-এর মতো ভুল ক্রমে বাহু লেখা এবং অতিভুজকে মাঝখানে রাখা।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">পরিসীমার</a> জন্য শুধুমাত্র লেগ ব্যবহার করা — পরিসীমায় তিনটি বাহুই অন্তর্ভুক্ত, শুধু দুটি লেগ নয়।",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "প্রতিটি স্কেল করা সংস্করণ একই কোণ ও সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> বজায় রাখে।",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "উদাহরণ 2: স্কেল গুণক k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "উদাহরণ 3: স্কেল গুণক k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "হ্যাঁ। প্রতিটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> ঠিক মূল ত্রয়ীর দ্বিগুণ, তাই 10, 24, 26 হলো স্কেল গুণক k = 2 বিশিষ্ট একটি 5 12 13 ত্রিভুজ।",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "10, 24, 26 কি একটি 5 12 13 ত্রিভুজ?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "উভয়ই <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">পিথাগোরীয় ত্রয়ী</a>, কিন্তু তাদের <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহুর</a> অনুপাত ও কোণ ভিন্ন। একটি <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">3 4 5 ত্রিভুজের</a> আকৃতি বেশি খাড়া, আর 5 12 13 ত্রিভুজ বেশি চ্যাপ্টা কারণ দীর্ঘ লেগটি খাটো লেগের তুলনায় অনেক বড়।",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "3 4 5 এবং 5 12 13 ত্রিভুজের মধ্যে পার্থক্য কী?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "হ্যাঁ। m = 3 এবং n = 2 ব্যবহার করলে a = 9 − 4 = 5, b = 2 × 3 × 2 = 12, এবং c = 9 + 4 = 13 পাওয়া যায়।",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "5 12 13 ত্রয়ীটি কি m ও n সূত্র দিয়ে তৈরি করা যায়?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "স্কেল করা বাহুগুলো বের করার পর, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a> দুটি লেগের গুণফলের অর্ধেকের সমান। <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">পরিসীমা</a> সরলভাবে তিনটি বাহুর যোগফল। আকৃতি একই থাকে — শুধুমাত্র আকার বদলায়।",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "নতুন হিসাব শুরু করতে Reset চাপুন।",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "একটি বড় k একই অনুপাত বজায় রেখে ত্রিভুজটিকে প্রসারিত করে। k দ্বিগুণ করলে <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a> চারগুণ হয় কিন্তু <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">পরিসীমা</a> মাত্র দ্বিগুণ হয়। এই সম্পর্ক সব স্কেল করা ত্রিভুজের ক্ষেত্রে প্রযোজ্য।",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "একটি স্কেল করা সংস্করণ 5k : 12k : 13k-এর মতো একই অনুপাত বজায় রাখে, তাই প্রতিটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> একই স্কেল গুণক k দিয়ে গুণিত হয়।",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "বাহুগুলো 5, 12 ও 13-এর গুণিতক হলে সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">পরিমাপ</a> পুনরায় যাচাই করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "<a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">পিথাগোরীয় ত্রয়ী</a> জড়িত জ্যামিতি অ্যাসাইনমেন্টের জন্য ক্ষেত্রফল ও পরিসীমা হিসাব করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "নির্ভুলতার জন্য 5 12 13 অনুপাত ব্যবহারকারী নির্মাণ বিন্যাসের পরিকল্পনা করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "একটি ত্রিভুজ স্কেল করা কীভাবে তার <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">ক্ষেত্রফল</a> ও <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">পরিসীমা</a> বদলায় তা অন্বেষণ করা।",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "ভিন্ন ভিন্ন <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহুর</a> জোড়ার জন্য ভিন্ন স্কেল গুণক ব্যবহার করা — সব জোড়াকেই একই k ভাগ করতে হবে।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "ভুল দিকে ভাগ করা — k সদৃশ <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> ভাগ মূল বাহুর সমান, তার বিপরীত নয়।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "সব সমকোণী ত্রিভুজই সদৃশ এমন ধরে নেওয়া — দুটি সমকোণী ত্রিভুজ তখনই সদৃশ হয় যখন তারা একটি দ্বিতীয় <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> ভাগ করে।",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণটিও</a> একটি ভাগ করা কোণ হিসেবে গণনা হয় তা ভুলে যাওয়া — দুটি সমকোণী ত্রিভুজের আরেকটি সমান সূক্ষ্মকোণ থাকলে, তারা সদৃশ।",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "তিনটি জোড়া বাহুরই একই স্কেল গুণক থাকতে হবে।",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{সদৃশ <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>} = \\text{মূল বাহু} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{সদৃশ ত্রিভুজের অনুরূপ <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহুটি</a> 20 একক।}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "উদাহরণ 2: একটি অজ্ঞাত সদৃশ বাহু বের করুন",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{মূল <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>} = \\frac{\\text{সদৃশ বাহু}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{মূল ত্রিভুজের মিলে যাওয়া <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহুটি</a> 5 একক।}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "উদাহরণ 3: মূল বাহু বের করুন",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "হ্যাঁ। 0.5-এর মতো স্কেল গুণকের মানে সদৃশ ত্রিভুজটি মূলের অর্ধেক আকারের। যেকোনো ধনাত্মক সংখ্যাই স্কেল গুণক হিসেবে কাজ করে।",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "স্কেল গুণক কি দশমিক হতে পারে?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "না। দুটি সমকোণী ত্রিভুজ তখনই সদৃশ হয় যখন তারা সমকোণের পাশাপাশি অন্তত একটি সূক্ষ্ম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> ভাগ করে। ভিন্ন সূক্ষ্মকোণ মানে ভিন্ন অনুপাত।",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "সব সমকোণী ত্রিভুজ কি পরস্পর সদৃশ?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "সদৃশ বাহু পেতে অনুরূপ মূল <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহুকে</a> k দিয়ে গুণ করুন। অথবা মূল বাহু বের করতে সদৃশ বাহুকে k দিয়ে ভাগ করুন। সূত্রটি নির্ভর করে আপনি কোন বাহুর জন্য সমাধান করছেন তার উপর।",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "স্কেল গুণক ব্যবহার করে কীভাবে একটি অজ্ঞাত বাহু বের করব?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{সদৃশ <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>}}{\\text{মূল বাহু}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{সদৃশ <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>} = \\text{মূল বাহু} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{মূল <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>} = \\frac{\\text{সদৃশ বাহু}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "স্কেল গুণকটি একদিকে কাজ করে। k = 2 হলে, সদৃশ ত্রিভুজটি দ্বিগুণ বড়। অন্যদিকে যেতে, গুণের পরিবর্তে k দিয়ে ভাগ করুন। সূত্রগুলো তিনটি পরিস্থিতিই কভার করে: k বের করা, স্কেল করা <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> বের করা, এবং মূল বাহু বের করা।",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "সব ক্ষেত্র মুছতে Reset ক্লিক করুন।",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = সদৃশ বাহু / মূল বাহু",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "সদৃশ বাহু = মূল বাহু × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "মূল বাহু = সদৃশ বাহু / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = সদৃশ বাহু / মূল বাহু",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "আপনি একটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">অজ্ঞাত বাহু</a> বের করলে, ফলাফলটি অন্য ত্রিভুজের অনুরূপ বাহুর দৈর্ঘ্য। এটি কাজ করে কারণ সদৃশ ত্রিভুজগুলো মিলে যাওয়া সব জোড়া বাহুতে ধ্রুব অনুপাত বজায় রাখে।",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "স্কেল গুণক k হলে, সদৃশ ত্রিভুজের প্রতিটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> তার অনুরূপ মূল বাহুকে k দিয়ে গুণ করার সমান।",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "স্কেল মডেল বা স্থাপত্য অঙ্কনের জন্য মাত্রা হিসাব করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "প্রমিত গণিত পরীক্ষায় অনুপাত সমস্যা সমাধান করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "লম্বা বস্তুর উচ্চতা অনুমান করতে ছায়ার <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">পরিমাপের</a> তুলনা করা।",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "ব্লুপ্রিন্ট <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">পরিমাপ</a> এবং প্রকৃত ভবনের মাত্রার মধ্যে রূপান্তর করা।",
    "mode": "fill"
   }
  ]
 },
 "ja": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "各<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を加える前に二乗するのを忘れる。a + b = c ではなく a² + b² = c² をチェックすること。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "等式を a² + b² = c² ではなく a² + c² = b² と書く。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "整数でない値を使い、ピタゴラス数を期待する。ピタゴラス数は整数でなければなりません。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "生成時に m を n 以下に設定する。m は n より厳密に大きくなければなりません。",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{結果: 3, 4, 5 は有効なピタゴラス数です。}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{結果: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{結果: 7, 24, 25 は有効なピタゴラス数です。}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "例 3: 7, 24, 25 がピタゴラス数かどうかを確認する",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "いいえ。ピタゴラス数は整数の組としてのみ定義されます。小数の値が a² + b² = c² を満たすことはあっても、ピタゴラス数とはみなされません。",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "小数がピタゴラス数をなすことはありますか？",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "はい。確認: 5² + 12² = 25 + 144 = 169 = 13²。3つすべてが整数であり、等式が成り立つため、有効なピタゴラス数です。",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "5, 12, 13 はピタゴラス数ですか？",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は、a² + b² が c² と正確に等しいかどうかをチェックします。わずかでも差があれば（丸めによる小さな差でも）、その値はピタゴラス数をなしません。c が最大の値であることを確認してください。",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "なぜ<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は私の値がピタゴラス数でないと言うのですか？",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "2つの正の整数 m と n を使って組を生成することもできます。ここで m は n より大きいものとします。公式 a = m² − n²、b = 2mn、c = m² + n² は、常に有効なピタゴラス数を生み出します。m と n が公約数を持たず、両方とも奇数でない場合、その結果は原始ピタゴラス数と呼ばれます。",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "「リセット」をクリックすると、すべての欄がクリアされ、最初からやり直せます。",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "組を生成すると、<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は m と n の公式を使って3つの整数を生成します。これらの数は直角三角形をなすことが保証されています。m と n が公約数を持たず、両方とも奇数でない場合、その組は原始的であり、それ以上簡約化できないことを意味します。",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "正確な比は組ごとに異なりますが、有効な組はすべて、c を斜辺として a² + b² = c² を満たします。",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "測定した<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺の長さ</a>が本当の直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>をなすか検証する。",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "数学の競技会や練習問題のためにピタゴラス数を生成する。",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "学習用のピタゴラス数の参照リストを作成する。",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "3-4-5 のルールや類似のパターンに依存する建築の<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">測定値</a>を確認する。",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "5 を斜辺ではなく脚として扱う。5 は常に最も長い<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>です。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "正確な値 3, 4, 5 だけが有効だと思う。6, 8, 10 や 15, 20, 25 のような倍数も有効です。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>と<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周囲長</a>の公式を混同する。面積は乗算と 2 での除算を使い、周囲長は加算を使います。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "負の、またはゼロの倍率を使う。k は 0 より大きくなければなりません。",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>を保つために、3辺すべてに同じ k を掛けます。",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "例 2: 倍率 k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "例 3: 倍率 k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "はい。各<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を 2 で割ると 3, 4, 5 になります。したがって 6, 8, 10 は k = 2 で拡大された 3 4 5 三角形です。",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "6, 8, 10 は 3 4 5 三角形ですか？",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "はい。一方の<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>に沿って 3 単位、もう一方に沿って 4 単位を測ります。その端点間の対角線がちょうど 5 単位であれば、その角は直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>です。",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "3 4 5 のルールで直角を確認できますか？",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "基本の<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周囲長</a>は 3 + 4 + 5 = 12 単位です。拡大・縮小された任意のバージョンでは、周囲長は 12k です。ここで k は倍率です。",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "3 4 5 三角形の周囲長は何ですか？",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "拡大・縮小の後、<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>は2つの脚の積の半分であり、<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周囲長</a>は3辺すべての合計です。比は決して変わらないため、任意の倍率の 3 4 5 三角形は常に同じ角度を持ちます。",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "「リセット」をクリックすると入力がクリアされ、新しく始められます。",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>は、平方単位で三角形の内側の広さを教えてくれます。<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周囲長</a>は外側の周りの全長を与えます。どちらの値も k を大きくするにつれて増加しますが、三角形は常に直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>を保ちます。",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "拡大・縮小されたバージョンは 3k : 4k : 5k と同じ比を保つため、斜辺は常に 5k に対応する<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>となります。",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "3 4 5 三角形の拡大・縮小を含む幾何の宿題を解く。",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "正確な90度の角が必要なレイアウトや間取り図を設計する。",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "本格的な直角三角形の計算ツールを使わずに、面積と周囲長を素早く見積もる。",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "生徒に、拡大・縮小しても<a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">相似な三角形</a>では角度が保たれることを教える。",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "3辺すべてではなく、1辺や2辺だけを拡大・縮小する。すべての<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>に k を掛けなければなりません。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "5, 12, 13 が<a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ピタゴラス数</a>であることを忘れる。生徒の中にはそれをピタゴラス数と認識しない人もいます。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "辺を 5, 13, 12 のような間違った順序で書き、斜辺を真ん中に置く。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周囲長</a>に脚だけを使う。周囲長は2つの脚だけでなく、3辺すべてを含みます。",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "拡大・縮小されたすべてのバージョンは、同じ角度と直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>を保ちます。",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "例 2: 倍率 k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "例 3: 倍率 k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "はい。各<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>は基本の組のちょうど2倍であるため、10, 24, 26 は倍率 k = 2 の 5 12 13 三角形です。",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "10, 24, 26 は 5 12 13 三角形ですか？",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "どちらも<a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ピタゴラス数</a>ですが、<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>の比と角度が異なります。<a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">3 4 5 三角形</a>はより急な形をしており、5 12 13 三角形は、長い脚が短い脚に比べてはるかに大きいため、より平らです。",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "3 4 5 三角形と 5 12 13 三角形の違いは何ですか？",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "はい。m = 3、n = 2 を使うと、a = 9 − 4 = 5、b = 2 × 3 × 2 = 12、c = 9 + 4 = 13 となります。",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "5 12 13 の組は m と n の公式で生成できますか？",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "拡大・縮小された辺が分かれば、<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>は2つの脚の積の半分と等しくなります。<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周囲長</a>は単に3辺すべての合計です。形は同じままで、大きさだけが変わります。",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "「リセット」を押すと新しい計算を始められます。",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "k が大きいほど三角形は引き伸ばされますが、比率は同じままです。k を2倍にすると<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>は4倍になりますが、<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周囲長</a>は2倍になるだけです。この関係はすべての拡大・縮小された三角形に成り立ちます。",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "拡大・縮小されたバージョンは 5k : 12k : 13k と同じ比を保つため、各<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>には同じ倍率 k が掛けられます。",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "辺が 5、12、13 の倍数のときに、直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>の<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">測定値</a>を再確認する。",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "<a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ピタゴラス数</a>を含む幾何の課題のために、面積と周囲長を計算する。",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "精度のために 5 12 13 の比を使う建築レイアウトを計画する。",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "三角形を拡大・縮小すると、その<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面積</a>と<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周囲長</a>がどう変わるか探る。",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "異なる<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>の組に異なる倍率を使う。すべての組が同じ k を共有しなければなりません。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "割る方向を間違える。k は、対応する辺を元の<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>で割ったものに等しく、その逆ではありません。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "すべての直角三角形が相似だと思い込む。2つの直角三角形が相似なのは、第2の<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a>を共有する場合だけです。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>も共有される角として数えられることを忘れる。2つの直角三角形がもう1つの等しい鋭角を持てば、それらは相似です。",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "3組の辺すべてが同じ倍率でなければなりません。",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{対応する<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>} = \\text{元の辺} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{相似な三角形の対応する<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>は、20 単位です。}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "例 2: 不明な対応する辺を求める",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{元の<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>} = \\frac{\\text{対応する辺}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{元の三角形における対応する<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>は、5 単位です。}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "例 3: 元の辺を求める",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "はい。0.5 のような倍率は、相似な三角形が元の半分の大きさであることを意味します。任意の正の数が倍率として使えます。",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "倍率は小数でもよいですか？",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "いいえ。2つの直角三角形が相似なのは、直角に加えて少なくとも1つの鋭<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>を共有する場合だけです。鋭角が異なれば、比率も異なります。",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "すべての直角三角形は互いに相似ですか？",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "対応する元の<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>に k を掛けると、対応する辺が得られます。または、対応する辺を k で割ると元の辺が得られます。公式は、どちらの辺を求めるかによって異なります。",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "倍率を使って不明な辺を求めるにはどうすればよいですか？",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{対応する<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>}}{\\text{元の辺}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{対応する<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>} = \\text{元の辺} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{元の<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>} = \\frac{\\text{対応する辺}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "倍率は一方向に働きます。k = 2 の場合、相似な三角形は2倍の大きさです。逆方向に行くには、掛けるのではなく k で割ります。これらの公式は、k を求める、拡大・縮小された<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を求める、元の辺を求める、という3つの状況すべてをカバーします。",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "「リセット」をクリックすると、すべての欄がクリアされます。",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = 対応する辺 / 元の辺",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "対応する辺 = 元の辺 × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "元の辺 = 対応する辺 / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = 対応する辺 / 元の辺",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">不明な辺</a>を求めると、その結果はもう一方の三角形の対応する辺の長さです。これは、相似な三角形が対応するすべての辺の組にわたって一定の比率を保つため成り立ちます。",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "倍率が k の場合、相似な三角形の各<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>は、対応する元の辺に k を掛けたものと等しくなります。",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "縮尺模型や建築図面の寸法を計算する。",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "標準化された数学テストの比例の問題を解く。",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "影の<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">測定値</a>を比較して、高い物体の高さを推定する。",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "設計図の<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">測定値</a>と実際の建物の寸法の間で変換する。",
    "mode": "fill"
   }
  ]
 },
 "ko": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "각 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>을 제곱한 뒤 더하는 것을 잊기 — a² + b² = c² 대신 a + b = c를 확인하기.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "등식을 a² + b² = c² 대신 a² + c² = b²로 쓰기.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "정수가 아닌 값을 사용하면서 피타고라스 수를 기대하기 — 피타고라스 수는 정수여야 합니다.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "생성할 때 m을 n 이하로 설정하기 — m은 반드시 n보다 커야 합니다.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{결과: 3, 4, 5는 올바른 피타고라스 수입니다.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{결과: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{결과: 7, 24, 25는 올바른 피타고라스 수입니다.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "예제 3: 7, 24, 25가 피타고라스 수인지 확인하기",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "아니요. 피타고라스 수는 정수 집합으로만 정의됩니다. 소수 값은 a² + b² = c²를 만족할 수 있지만, 피타고라스 수로 간주되지 않습니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "소수가 피타고라스 수를 이룰 수 있나요?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "네. 확인: 5² + 12² = 25 + 144 = 169 = 13². 세 수 모두 정수이고 등식이 성립하므로, 올바른 피타고라스 수입니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "5, 12, 13은 피타고라스 수인가요?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 a² + b²가 c²와 정확히 같은지 확인합니다. 반올림으로 인한 작은 차이라도 있으면, 그 값들은 피타고라스 수를 이루지 않습니다. c가 가장 큰 값인지 확인하세요.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>가 내 값이 피타고라스 수가 아니라고 말하는 이유는 무엇인가요?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "두 양의 정수 m과 n을 이용해 수의 조합을 생성할 수도 있으며, 여기서 m은 n보다 큽니다. 공식 a = m² − n², b = 2mn, c = m² + n²는 항상 올바른 조합을 만듭니다. m과 n이 공통 인수를 공유하지 않고 둘 다 홀수가 아니면, 그 결과를 원시 피타고라스 수라고 합니다.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "초기화를 클릭하면 모든 필드가 지워지고 처음부터 다시 시작합니다.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "수의 조합을 생성할 때, <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 m과 n 공식을 이용해 세 개의 정수를 만듭니다. 이 수들은 직각삼각형을 이룰 것이 보장됩니다. m과 n이 공통 인수를 공유하지 않고 둘 다 홀수가 아니면, 그 조합은 원시적입니다. 즉, 더 이상 약분할 수 없습니다.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "정확한 비율은 조합마다 다르지만, 모든 올바른 조합은 c를 빗변으로 하여 a² + b² = c²를 만족합니다.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "측정된 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변의 길이</a>가 진정한 직<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>을 이루는지 검증하기.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "수학 경시대회와 연습 문제를 위해 피타고라스 수 생성하기.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "공부를 위한 피타고라스 수 참고 목록 만들기.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "3-4-5 규칙이나 유사한 패턴에 의존하는 건축 <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">측정값</a> 확인하기.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "5를 빗변이 아닌 변으로 취급하기 — 5는 항상 가장 긴 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>입니다.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "정확한 값 3, 4, 5만 작동한다고 생각하기 — 6, 8, 10이나 15, 20, 25와 같은 배수도 모두 올바릅니다.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>와 <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">둘레</a> 공식을 혼동하기 — 넓이는 곱셈과 2로 나누기를, 둘레는 덧셈을 사용합니다.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "음수나 0인 배율 사용하기 — k는 0보다 커야 합니다.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "직<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>을 유지하려면 세 변 모두에 같은 k를 곱하세요.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "예제 2: 배율 k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "예제 3: 배율 k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "네. 각 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>을 2로 나누면 3, 4, 5가 됩니다. 따라서 6, 8, 10은 k = 2로 확대·축소된 3 4 5 삼각형입니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "6, 8, 10은 3 4 5 삼각형인가요?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "네. 한 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>을 따라 3단위를, 다른 변을 따라 4단위를 측정하세요. 그 끝점 사이의 대각선이 정확히 5단위를 측정하면, 그 모서리는 직<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>입니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "3 4 5 규칙을 이용해 직각을 확인할 수 있나요?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "기본 <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">둘레</a>는 3 + 4 + 5 = 12단위입니다. 확대·축소된 버전에서는 둘레가 12k이며, 여기서 k는 배율입니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "3 4 5 삼각형의 둘레는 얼마인가요?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "확대·축소 후에도 <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>는 두 변의 곱의 절반이고, <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">둘레</a>는 세 변의 합입니다. 비율이 절대 변하지 않으므로, 어떤 크기의 3 4 5 삼각형도 항상 같은 각을 가집니다.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "초기화를 클릭하면 입력이 지워지고 새로 시작합니다.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>는 제곱 단위로 삼각형 내부의 공간을 알려줍니다. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">둘레</a>는 바깥쪽 전체 길이를 제공합니다. k를 증가시키면 두 값 모두 커지지만, 삼각형은 항상 직<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>을 유지합니다.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "확대·축소된 버전은 3k : 4k : 5k와 같은 비율을 유지하므로, 빗변은 항상 5k와 짝을 이루는 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>입니다.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "3 4 5 삼각형 확대·축소를 포함하는 기하 숙제 풀기.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "정확한 90도 모서리가 필요한 배치도나 평면도 설계하기.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "완전한 직각삼각형 풀이 없이 넓이와 둘레를 빠르게 추정하기.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "확대·축소가 <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">닮은 삼각형</a>에서 각을 보존한다는 것을 학생들에게 가르치기.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "세 변 모두에 곱하지 않고 한두 변만 확대·축소하기 — 모든 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>에 k를 곱해야 합니다.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "5, 12, 13이 <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">피타고라스 수</a>라는 것을 잊기 — 일부 학생들은 이를 피타고라스 수로 인식하지 못합니다.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "변을 5, 13, 12와 같은 잘못된 순서로 쓰고 빗변을 가운데에 놓기.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">둘레</a>에 두 변만 사용하기 — 둘레는 두 변만이 아닌 세 변 모두를 포함합니다.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "확대·축소된 모든 버전은 같은 각과 직<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>을 유지합니다.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "예제 2: 배율 k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "예제 3: 배율 k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "네. 각 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>이 정확히 기본 조합의 두 배이므로, 10, 24, 26은 배율 k = 2인 5 12 13 삼각형입니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "10, 24, 26은 5 12 13 삼각형인가요?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "둘 다 <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">피타고라스 수</a>이지만, <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>의 비율과 각이 다릅니다. <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">3 4 5 삼각형</a>은 더 가파른 모양이고, 5 12 13 삼각형은 더 긴 변이 더 짧은 변에 비해 훨씬 크기 때문에 더 평평합니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "3 4 5 삼각형과 5 12 13 삼각형의 차이는 무엇인가요?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "네. m = 3, n = 2를 사용하면 a = 9 − 4 = 5, b = 2 × 3 × 2 = 12, c = 9 + 4 = 13이 됩니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "5 12 13 조합을 m과 n 공식으로 생성할 수 있나요?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "확대·축소된 변을 구하면, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>는 두 변의 곱의 절반과 같습니다. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">둘레</a>는 단순히 세 변의 합입니다. 모양은 그대로 유지되고, 크기만 변합니다.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "새로운 계산을 시작하려면 초기화를 누르세요.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "더 큰 k는 같은 비율을 유지하면서 삼각형을 늘립니다. k를 두 배로 하면 <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>는 네 배가 되지만 <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">둘레</a>는 두 배만 됩니다. 이 관계는 모든 확대·축소된 삼각형에서 성립합니다.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "확대·축소된 버전은 5k : 12k : 13k와 같은 비율을 유지하므로, 각 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>에 같은 배율 k가 곱해집니다.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "변이 5, 12, 13의 배수일 때 직<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">측정값</a> 다시 확인하기.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "<a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">피타고라스 수</a>를 포함하는 기하 과제를 위해 넓이와 둘레 계산하기.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "정확도를 위해 5 12 13 비율을 사용하는 건축 배치 계획하기.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "삼각형 확대·축소가 <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">넓이</a>와 <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">둘레</a>를 어떻게 바꾸는지 탐구하기.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "서로 다른 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> 쌍에 서로 다른 닮음비 사용하기 — 모든 쌍이 같은 k를 공유해야 합니다.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "잘못된 방향으로 나누기 — k는 닮은 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>을 원래 변으로 나눈 값이며, 그 반대가 아닙니다.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "모든 직각삼각형이 닮았다고 가정하기 — 두 직각삼각형은 두 번째 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>을 공유할 때만 닮았습니다.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "직<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>도 공유된 각으로 간주된다는 것을 잊기 — 두 직각삼각형이 예각 하나를 더 같게 가지면, 두 삼각형은 닮았습니다.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "세 쌍의 변이 모두 같은 닮음비를 가져야 합니다.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{닮은 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>} = \\text{원래 변} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{닮은 삼각형에서 대응하는 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>은 20단위입니다.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "예제 2: 빠진 닮은 변 구하기",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{원래 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>} = \\frac{\\text{닮은 변}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{원래 삼각형에서 대응하는 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>은 5단위입니다.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "예제 3: 원래 변 구하기",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "네. 0.5와 같은 닮음비는 닮은 삼각형이 원래 삼각형의 절반 크기라는 뜻입니다. 모든 양수가 닮음비가 될 수 있습니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "닮음비가 소수가 될 수 있나요?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "아니요. 두 직각삼각형은 직각 외에도 최소 하나의 예<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>을 공유할 때만 닮았습니다. 예각이 다르면 비율도 다릅니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "모든 직각삼각형은 서로 닮았나요?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "대응하는 원래 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>에 k를 곱하면 닮은 변을 얻을 수 있습니다. 또는 닮은 변을 k로 나누면 원래 변을 구할 수 있습니다. 공식은 어느 변을 구하느냐에 따라 달라집니다.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "닮음비를 이용해 빠진 변을 어떻게 구하나요?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{닮은 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>}}{\\text{원래 변}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{닮은 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>} = \\text{원래 변} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{원래 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>} = \\frac{\\text{닮은 변}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "닮음비는 한 방향으로 작동합니다. k = 2이면 닮은 삼각형은 두 배 더 큽니다. 반대 방향으로 가려면, 곱하는 대신 k로 나누세요. 이 공식들은 세 가지 상황을 모두 다룹니다: k 구하기, 확대·축소된 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> 구하기, 원래 변 구하기.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "초기화를 클릭하면 모든 필드가 지워집니다.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = 닮은 변 / 원래 변",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "닮은 변 = 원래 변 × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "원래 변 = 닮은 변 / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = 닮은 변 / 원래 변",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">빠진 변</a>을 구하면, 그 결과는 다른 삼각형에서 대응하는 변의 길이입니다. 이는 닮은 삼각형이 대응하는 모든 변 쌍에 걸쳐 일정한 비율을 유지하기 때문에 가능합니다.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "닮음비가 k이면, 닮은 삼각형의 각 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>은 대응하는 원래 변에 k를 곱한 값과 같습니다.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "축척 모형이나 건축 도면의 치수 계산하기.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "표준화된 수학 시험의 비례 문제 풀기.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "그림자 <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">측정값</a>을 비교하여 높은 물체의 높이를 추정하기.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "설계도 <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">측정값</a>과 실제 건물 치수 사이를 변환하기.",
    "mode": "fill"
   }
  ]
 },
 "ms": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Terlupa menguasa duakan setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> sebelum menambah — menyemak a + b = c dan bukannya a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Menulis persamaan sebagai a² + c² = b² dan bukannya a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Menggunakan nilai bukan integer dan mengharapkan ganda tiga Pythagoras — ganda tiga mestilah nombor bulat.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Menetapkan m kurang daripada atau sama dengan n semasa menjana — m mestilah lebih besar daripada n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Keputusan: 3, 4, 5 ialah ganda tiga Pythagoras yang sah.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Keputusan: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Keputusan: 7, 24, 25 ialah ganda tiga Pythagoras yang sah.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Contoh 3: Semak sama ada 7, 24, 25 ialah ganda tiga Pythagoras",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Tidak. Ganda tiga Pythagoras ditakrifkan sebagai set nombor bulat sahaja. Nilai perpuluhan mungkin memenuhi a² + b² = c², tetapi ia tidak dianggap ganda tiga.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Bolehkah nombor perpuluhan membentuk ganda tiga Pythagoras?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ya. Menyemak: 5² + 12² = 25 + 144 = 169 = 13². Disebabkan ketiga-tiganya adalah nombor bulat dan persamaan itu berlaku, ia ialah ganda tiga Pythagoras yang sah.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Adakah 5, 12, 13 ganda tiga Pythagoras?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> menyemak sama ada a² + b² bersamaan dengan c² dengan tepat. Jika terdapat sebarang perbezaan — walaupun kecil akibat pembundaran — nilai tersebut tidak membentuk ganda tiga Pythagoras. Pastikan c ialah nilai terbesar.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Mengapakah <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> mengatakan nilai saya bukan ganda tiga?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Anda juga boleh menjana ganda tiga menggunakan dua integer positif m dan n, dengan m lebih besar daripada n. Formula a = m² − n², b = 2mn, dan c = m² + n² akan sentiasa menghasilkan ganda tiga yang sah. Apabila m dan n tidak berkongsi faktor sepunya dan kedua-duanya tidak ganjil, hasilnya dipanggil ganda tiga primitif.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klik Set Semula untuk mengosongkan semua medan dan mulakan semula.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Apabila menjana ganda tiga, <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> menghasilkan tiga nombor bulat menggunakan formula m dan n. Nombor-nombor ini dijamin membentuk segi tiga bersudut tegak. Jika m dan n tidak berkongsi faktor sepunya dan kedua-duanya tidak ganjil, ganda tiga itu primitif — bermakna ia tidak boleh dipermudahkan lagi.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Nisbah tepat berubah dari satu ganda tiga ke ganda tiga lain, tetapi setiap ganda tiga yang sah memenuhi a² + b² = c² dengan c sebagai hipotenus.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Mengesahkan sama ada <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">panjang sisi</a> yang diukur membentuk <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tegak sebenar.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Menjana ganda tiga untuk pertandingan matematik dan masalah latihan.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Membina senarai rujukan ganda tiga Pythagoras untuk belajar.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Mengesahkan <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">ukuran</a> pembinaan yang bergantung pada peraturan 3-4-5 atau corak yang serupa.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Menganggap 5 sebagai kaki dan bukannya hipotenus — 5 sentiasa <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> terpanjang.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Berfikir hanya nilai tepat 3, 4, 5 berfungsi — sebarang gandaan seperti 6, 8, 10 atau 15, 20, 25 juga sah.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Mengelirukan formula <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> dan <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimeter</a> — luas menggunakan pendaraban dan pembahagian dengan 2, perimeter menggunakan penambahan.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Menggunakan faktor skala negatif atau sifar — k mestilah lebih besar daripada 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Darabkan ketiga-tiga sisi dengan k yang sama untuk mengekalkan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tegak.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Contoh 2: Faktor skala k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Contoh 3: Faktor skala k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ya. Membahagikan setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> dengan 2 memberikan 3, 4, 5. Jadi 6, 8, 10 ialah segi tiga 3 4 5 yang diskalakan dengan k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Adakah 6, 8, 10 segi tiga 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ya. Ukur 3 unit di sepanjang satu <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> dan 4 unit di sepanjang yang lain. Jika pepenjuru antara kedua-dua hujung itu berukuran tepat 5 unit, penjuru ialah <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tegak.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Bolehkah saya menggunakan peraturan 3 4 5 untuk menyemak sudut tegak?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Perimeter</a> asas ialah 3 + 4 + 5 = 12 unit. Bagi sebarang versi berskala, perimeter ialah 12k, dengan k ialah faktor skala.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Apakah perimeter segi tiga 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Selepas penskalaan, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> ialah separuh hasil darab kedua-dua kaki, dan <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimeter</a> ialah jumlah ketiga-tiga sisi. Disebabkan nisbah tidak pernah berubah, segi tiga 3 4 5 pada sebarang skala sentiasa mempunyai sudut yang sama.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klik Set Semula untuk mengosongkan input dan mulakan semula.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a> memberitahu anda ruang di dalam segi tiga dalam unit persegi. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Perimeter</a> memberikan anda jumlah panjang di sekeliling bahagian luar. Kedua-dua nilai membesar apabila anda meningkatkan k, tetapi segi tiga sentiasa mengekalkan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tegaknya.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Versi berskala mengekalkan nisbah yang sama seperti 3k : 4k : 5k, jadi hipotenus sentiasa <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang dipadankan dengan 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Menyelesaikan kerja rumah geometri yang melibatkan penskalaan segi tiga 3 4 5.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Mereka bentuk susun atur atau pelan lantai yang memerlukan penjuru 90 darjah yang tepat.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Menganggarkan luas dan perimeter dengan cepat tanpa penyelesai segi tiga bersudut tegak penuh.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Mengajar pelajar bagaimana penskalaan mengekalkan sudut dalam <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">segi tiga serupa</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Menskala hanya satu atau dua sisi dan bukannya ketiga-tiganya — setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> mesti didarab dengan k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Terlupa bahawa 5, 12, 13 ialah <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ganda tiga Pythagoras</a> — sesetengah pelajar tidak mengenalinya sebagai satu.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Menulis sisi dalam susunan yang salah seperti 5, 13, 12 dan meletakkan hipotenus di tengah.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Menggunakan hanya kaki untuk <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimeter</a> — perimeter merangkumi ketiga-tiga sisi, bukan hanya kedua-dua kaki.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Setiap versi berskala mengekalkan sudut yang sama dan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tegak.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Contoh 2: Faktor skala k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Contoh 3: Faktor skala k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ya. Setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> adalah tepat dua kali ganda tiga asas, jadi 10, 24, 26 ialah segi tiga 5 12 13 dengan faktor skala k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Adakah 10, 24, 26 segi tiga 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Kedua-duanya ialah <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ganda tiga Pythagoras</a>, tetapi ia mempunyai nisbah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> dan sudut yang berbeza. <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">Segi tiga 3 4 5</a> mempunyai bentuk yang lebih curam, manakala segi tiga 5 12 13 lebih landai kerana kaki yang lebih panjang jauh lebih besar berbanding kaki yang lebih pendek.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Apakah perbezaan antara segi tiga 3 4 5 dan 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Ya. Menggunakan m = 3 dan n = 2 memberikan a = 9 − 4 = 5, b = 2 × 3 × 2 = 12, dan c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Bolehkah ganda tiga 5 12 13 dijana dengan formula m dan n?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Setelah anda mencari sisi berskala, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> bersamaan dengan separuh hasil darab kedua-dua kaki. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Perimeter</a> hanyalah jumlah ketiga-tiga sisi. Bentuk kekal sama — hanya saiz berubah.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Tekan Set Semula untuk memulakan pengiraan baharu.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "K yang lebih besar meregangkan segi tiga sambil mengekalkan perkadaran yang sama. Menggandakan k melipatgandakan <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> sebanyak empat kali ganda tetapi hanya menggandakan <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimeter</a>. Hubungan ini berlaku untuk semua segi tiga berskala.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Versi berskala mengekalkan nisbah yang sama seperti 5k : 12k : 13k, jadi setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> didarab dengan faktor skala k yang sama.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Menyemak semula <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tegak <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">ukuran</a> apabila sisi ialah gandaan 5, 12, dan 13.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Mengira luas dan perimeter untuk tugasan geometri yang melibatkan <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ganda tiga Pythagoras</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Merancang susun atur pembinaan yang menggunakan nisbah 5 12 13 untuk ketepatan.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Meneroka bagaimana penskalaan segi tiga mengubah <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> dan <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">perimeter</a>nya.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Menggunakan faktor skala berbeza untuk pasangan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> berbeza — semua pasangan mesti berkongsi k yang sama.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Membahagikan dalam arah yang salah — k bersamaan dengan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> serupa dibahagikan dengan sisi asal, bukan sebaliknya.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Mengandaikan semua segi tiga bersudut tegak adalah serupa — dua segi tiga bersudut tegak hanya serupa jika ia berkongsi <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> kedua.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Terlupa bahawa <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tegak dikira sebagai sudut sepunya — jika dua segi tiga bersudut tegak mempunyai satu lagi sudut tirus yang sama, ia adalah serupa.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Ketiga-tiga pasangan sisi mesti mempunyai faktor skala yang sama.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> serupa} = \\text{sisi asal} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sisi</a> sepadan pada segi tiga serupa ialah 20 unit.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Contoh 2: Cari sisi serupa yang hilang",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> asal} = \\frac{\\text{sisi serupa}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sisi</a> sepadan pada segi tiga asal ialah 5 unit.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Contoh 3: Cari sisi asal",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ya. Faktor skala seperti 0.5 bermakna segi tiga serupa ialah separuh saiz segi tiga asal. Sebarang nombor positif berfungsi sebagai faktor skala.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Bolehkah faktor skala menjadi perpuluhan?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Tidak. Dua segi tiga bersudut tegak hanya serupa jika ia berkongsi sekurang-kurangnya satu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tirus sebagai tambahan kepada sudut tegak. Sudut tirus yang berbeza bermakna perkadaran yang berbeza.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Adakah semua segi tiga bersudut tegak serupa antara satu sama lain?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Darabkan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> asal yang sepadan dengan k untuk mendapatkan sisi serupa. Atau bahagikan sisi serupa dengan k untuk mencari sisi asal. Formula bergantung pada sisi mana yang anda selesaikan.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Bagaimanakah saya mencari sisi yang hilang menggunakan faktor skala?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> serupa}}{\\text{sisi asal}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> serupa} = \\text{sisi asal} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> asal} = \\frac{\\text{sisi serupa}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Faktor skala berfungsi dalam satu arah. Jika k = 2, segi tiga serupa ialah dua kali lebih besar. Untuk pergi ke arah sebaliknya, bahagikan dengan k dan bukannya mendarab. Formula ini merangkumi ketiga-tiga situasi: mencari k, mencari <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> berskala, dan mencari sisi asal.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klik Set Semula untuk mengosongkan semua medan.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = sisi serupa / sisi asal",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "sisi serupa = sisi asal × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "sisi asal = sisi serupa / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = sisi serupa / sisi asal",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Apabila anda mencari <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi yang hilang</a>, hasilnya ialah panjang sisi sepadan pada segi tiga yang lain. Ini berfungsi kerana segi tiga serupa mengekalkan perkadaran tetap merentas semua pasangan sisi sepadan.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Jika faktor skala ialah k, setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> pada segi tiga serupa bersamaan dengan sisi asal sepadannya didarab dengan k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Mengira dimensi untuk model skala atau lukisan seni bina.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Menyelesaikan masalah perkadaran dalam ujian matematik piawai.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Membandingkan <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">ukuran</a> bayang-bayang untuk menganggarkan ketinggian objek tinggi.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Menukar antara <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">ukuran</a> pelan dan dimensi bangunan sebenar.",
    "mode": "fill"
   }
  ]
 },
 "pl": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Zapominanie o podniesieniu każdego <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">boku</a> do kwadratu przed dodaniem — sprawdzanie a + b = c zamiast a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Zapisywanie równania jako a² + c² = b² zamiast a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Używanie wartości niecałkowitych i oczekiwanie trójki pitagorejskiej — trójki muszą być liczbami całkowitymi.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Ustawianie m mniejszego lub równego n podczas generowania — m musi być ściśle większe od n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Wynik: 3, 4, 5 to prawidłowa trójka pitagorejska.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Wynik: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Wynik: 7, 24, 25 to prawidłowa trójka pitagorejska.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Przykład 3: Sprawdź, czy 7, 24, 25 jest trójką pitagorejską",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Nie. Trójki pitagorejskie definiuje się jako zbiory wyłącznie liczb całkowitych. Wartości dziesiętne mogą spełniać a² + b² = c², ale nie są uważane za trójki.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Czy liczby dziesiętne mogą tworzyć trójkę pitagorejską?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Tak. Sprawdzenie: 5² + 12² = 25 + 144 = 169 = 13². Ponieważ wszystkie trzy są liczbami całkowitymi i równanie zachodzi, jest to prawidłowa trójka pitagorejska.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Czy 5, 12, 13 jest trójką pitagorejską?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> sprawdza, czy a² + b² dokładnie równa się c². Jeśli występuje jakakolwiek różnica — nawet niewielka wynikająca z zaokrąglenia — wartości nie tworzą trójki pitagorejskiej. Upewnij się, że c jest największą wartością.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Dlaczego <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> mówi, że moje wartości nie są trójką?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Możesz również generować trójki, używając dwóch dodatnich liczb całkowitych m i n, przy czym m jest większe od n. Wzory a = m² − n², b = 2mn oraz c = m² + n² zawsze dadzą prawidłową trójkę. Gdy m i n nie mają wspólnych dzielników i nie są obie nieparzyste, wynik nazywamy trójką pierwotną.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Kliknij Resetuj, aby wyczyścić wszystkie pola i zacząć od nowa.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Podczas generowania trójki <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> tworzy trzy liczby całkowite przy użyciu wzorów z m i n. Te liczby mają gwarancję utworzenia trójkąta prostokątnego. Jeśli m i n nie mają wspólnego dzielnika i nie są obie nieparzyste, trójka jest pierwotna — co oznacza, że nie można jej dalej uprościć.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Dokładny stosunek zmienia się w zależności od trójki, ale każda prawidłowa trójka spełnia a² + b² = c², przy czym c jest przeciwprostokątną.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Sprawdzanie, czy zmierzone <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">długości boków</a> tworzą prawdziwy <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> prosty.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Generowanie trójek na konkursy matematyczne i zadania ćwiczeniowe.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Tworzenie listy referencyjnej trójek pitagorejskich do nauki.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Potwierdzanie <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">pomiarów</a> budowlanych, które opierają się na regule 3-4-5 lub podobnych wzorcach.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Traktowanie 5 jako przyprostokątnej zamiast przeciwprostokątnej — 5 jest zawsze najdłuższym <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bokiem</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Myślenie, że działają tylko dokładne wartości 3, 4, 5 — każda wielokrotność, np. 6, 8, 10 lub 15, 20, 25, również jest prawidłowa.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Mylenie wzorów na <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">pole</a> i <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">obwód</a> — pole używa mnożenia i dzielenia przez 2, obwód używa dodawania.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Używanie ujemnego lub zerowego współczynnika skali — k musi być większe od 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Pomnóż wszystkie trzy boki przez to samo k, aby zachować <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> prosty.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Pole</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Przykład 2: Współczynnik skali k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Pole</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Przykład 3: Współczynnik skali k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Tak. Dzieląc każdy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> przez 2, otrzymujemy 3, 4, 5. Zatem 6, 8, 10 to trójkąt 3 4 5 przeskalowany przy k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Czy 6, 8, 10 to trójkąt 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Tak. Zmierz 3 jednostki wzdłuż jednego <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">boku</a> i 4 jednostki wzdłuż drugiego. Jeśli przekątna między tymi punktami końcowymi mierzy dokładnie 5 jednostek, narożnik jest <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kątem</a> prostym.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Czy mogę użyć reguły 3 4 5, aby sprawdzić kąt prosty?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Podstawowy <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">obwód</a> to 3 + 4 + 5 = 12 jednostek. Dla dowolnej przeskalowanej wersji obwód wynosi 12k, gdzie k jest współczynnikiem skali.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Jaki jest obwód trójkąta 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Pole</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Po przeskalowaniu <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">pole</a> jest połową iloczynu dwóch przyprostokątnych, a <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">obwód</a> jest sumą wszystkich trzech boków. Ponieważ stosunek nigdy się nie zmienia, trójkąt 3 4 5 w dowolnej skali zawsze ma te same kąty.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Kliknij Resetuj, aby wyczyścić dane wejściowe i zacząć od nowa.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Pole</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Pole</a> mówi ci, ile przestrzeni znajduje się wewnątrz trójkąta w jednostkach kwadratowych. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Obwód</a> podaje całkowitą długość wokół zewnętrznej strony. Obie wartości rosną wraz ze wzrostem k, ale trójkąt zawsze zachowuje swój <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> prosty.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Przeskalowana wersja zachowuje ten sam stosunek 3k : 4k : 5k, więc przeciwprostokątna jest zawsze <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bokiem</a> dopasowanym do 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Rozwiązywanie zadań domowych z geometrii, które obejmują skalowanie trójkąta 3 4 5.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Projektowanie układów lub planów pięter, które wymagają dokładnych narożników 90 stopni.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Szybkie szacowanie pól i obwodów bez pełnego solvera trójkąta prostokątnego.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Uczenie uczniów, w jaki sposób skalowanie zachowuje kąty w <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">trójkątach podobnych</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Skalowanie tylko jednego lub dwóch boków zamiast wszystkich trzech — każdy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> musi być pomnożony przez k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Zapominanie, że 5, 12, 13 jest <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">trójką pitagorejską</a> — niektórzy uczniowie nie rozpoznają jej jako trójki.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Zapisywanie boków w złej kolejności, np. 5, 13, 12, i umieszczanie przeciwprostokątnej pośrodku.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Używanie tylko przyprostokątnych do <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">obwodu</a> — obwód obejmuje wszystkie trzy boki, a nie tylko dwie przyprostokątne.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Każda przeskalowana wersja zachowuje te same kąty i <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> prosty.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Pole</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Przykład 2: Współczynnik skali k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Pole</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Przykład 3: Współczynnik skali k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Tak. Każdy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> jest dokładnie dwa razy większy od podstawowej trójki, więc 10, 24, 26 to trójkąt 5 12 13 o współczynniku skali k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Czy 10, 24, 26 to trójkąt 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Oba są <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">trójkami pitagorejskimi</a>, ale mają różne proporcje <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">boków</a> i kąty. <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">Trójkąt 3 4 5</a> ma bardziej stromy kształt, natomiast trójkąt 5 12 13 jest bardziej płaski, ponieważ dłuższa przyprostokątna jest znacznie większa w stosunku do krótszej przyprostokątnej.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Jaka jest różnica między trójkątem 3 4 5 a trójkątem 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Tak. Użycie m = 3 i n = 2 daje a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 oraz c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Czy trójkę 5 12 13 można wygenerować za pomocą wzoru z m i n?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Pole</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Gdy znajdziesz przeskalowane boki, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">pole</a> równa się połowie iloczynu dwóch przyprostokątnych. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Obwód</a> to po prostu suma wszystkich trzech boków. Kształt pozostaje taki sam — zmienia się tylko rozmiar.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Naciśnij Resetuj, aby rozpocząć nowe obliczenia.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Pole</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Większe k rozciąga trójkąt przy zachowaniu tych samych proporcji. Podwojenie k czterokrotnie zwiększa <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">pole</a>, ale tylko podwaja <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">obwód</a>. Ta zależność zachodzi dla wszystkich przeskalowanych trójkątów.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Przeskalowana wersja zachowuje ten sam stosunek 5k : 12k : 13k, więc każdy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> jest mnożony przez ten sam współczynnik skali k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Ponowne sprawdzanie <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> prostego <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">pomiarów</a>, gdy boki są wielokrotnościami 5, 12 i 13.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Obliczanie pól i obwodów w zadaniach z geometrii obejmujących <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">trójki pitagorejskie</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Planowanie układów budowlanych, które wykorzystują stosunek 5 12 13 dla dokładności.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Badanie, w jaki sposób skalowanie trójkąta zmienia jego <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">pole</a> i <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">obwód</a>.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Używanie różnych współczynników skali dla różnych par <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">boków</a> — wszystkie pary muszą mieć to samo k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Dzielenie w złym kierunku — k równa się podobnemu <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bokowi</a> podzielonemu przez pierwotny bok, a nie odwrotnie.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Zakładanie, że wszystkie trójkąty prostokątne są podobne — dwa trójkąty prostokątne są podobne tylko wtedy, gdy mają wspólny drugi <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Zapominanie, że <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> prosty liczy się jako kąt wspólny — jeśli dwa trójkąty prostokątne mają jeszcze jeden równy kąt ostry, są podobne.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Wszystkie trzy pary boków muszą mieć ten sam współczynnik skali.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{podobny <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>} = \\text{pierwotny bok} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{Odpowiadający <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> trójkąta podobnego ma 20 jednostek.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Przykład 2: Znajdź brakujący bok podobny",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{pierwotny <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>} = \\frac{\\text{podobny bok}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{Odpowiadający <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> pierwotnego trójkąta ma 5 jednostek.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Przykład 3: Znajdź pierwotny bok",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Tak. Współczynnik skali, np. 0.5, oznacza, że trójkąt podobny jest o połowę mniejszy od pierwotnego. Każda dodatnia liczba może być współczynnikiem skali.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Czy współczynnik skali może być liczbą dziesiętną?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Nie. Dwa trójkąty prostokątne są podobne tylko wtedy, gdy oprócz kąta prostego mają wspólny co najmniej jeden ostry <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a>. Różne kąty ostre oznaczają różne proporcje.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Czy wszystkie trójkąty prostokątne są do siebie podobne?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Pomnóż odpowiadający pierwotny <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> przez k, aby otrzymać bok podobny. Lub podziel bok podobny przez k, aby znaleźć pierwotny. Wzór zależy od tego, który bok obliczasz.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Jak znaleźć brakujący bok przy użyciu współczynnika skali?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{podobny <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>}}{\\text{pierwotny bok}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{podobny <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>} = \\text{pierwotny bok} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{pierwotny <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>} = \\frac{\\text{podobny bok}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Współczynnik skali działa w jednym kierunku. Jeśli k = 2, trójkąt podobny jest dwa razy większy. Aby pójść w drugą stronę, dziel przez k zamiast mnożyć. Wzory obejmują wszystkie trzy sytuacje: znajdowanie k, znajdowanie przeskalowanego <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">boku</a> i znajdowanie pierwotnego boku.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Kliknij Resetuj, aby wyczyścić wszystkie pola.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Gdy znajdujesz <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">brakujący bok</a>, wynik jest długością odpowiadającego boku w drugim trójkącie. Działa to, ponieważ trójkąty podobne zachowują stałe proporcje we wszystkich parach odpowiadających boków.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Jeśli współczynnik skali wynosi k, każdy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> trójkąta podobnego równa się odpowiadającemu mu pierwotnemu bokowi pomnożonemu przez k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Obliczanie wymiarów modeli w skali lub rysunków architektonicznych.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Rozwiązywanie zadań z proporcji na standaryzowanych testach matematycznych.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Porównywanie <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">pomiarów</a> cienia w celu oszacowania wysokości wysokich obiektów.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Przeliczanie między <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">pomiarami</a> z projektu a rzeczywistymi wymiarami budynku.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = bok podobny / bok pierwotny",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "bok podobny = bok pierwotny × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "bok pierwotny = bok podobny / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = bok podobny / bok pierwotny",
    "mode": "set"
   }
  ]
 },
 "id": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Lupa mengkuadratkan setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> sebelum menjumlahkan — memeriksa a + b = c, bukan a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Menulis persamaan sebagai a² + c² = b², bukan a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Menggunakan nilai non-bulat dan mengharapkan tripel Pythagoras — tripel harus bilangan bulat.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Mengatur m kurang dari atau sama dengan n saat menghasilkan — m harus benar-benar lebih besar dari n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Hasil: 3, 4, 5 adalah tripel Pythagoras yang valid.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Hasil: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Hasil: 7, 24, 25 adalah tripel Pythagoras yang valid.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Contoh 3: Periksa apakah 7, 24, 25 adalah tripel Pythagoras",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Tidak. Tripel Pythagoras didefinisikan sebagai kumpulan bilangan bulat saja. Nilai desimal mungkin memenuhi a² + b² = c², tetapi tidak dianggap sebagai tripel.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Bisakah bilangan desimal membentuk tripel Pythagoras?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ya. Memeriksa: 5² + 12² = 25 + 144 = 169 = 13². Karena ketiganya bilangan bulat dan persamaannya berlaku, ini adalah tripel Pythagoras yang valid.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Apakah 5, 12, 13 adalah tripel Pythagoras?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> memeriksa apakah a² + b² sama persis dengan c². Jika ada perbedaan — bahkan yang kecil akibat pembulatan — nilai-nilai tersebut tidak membentuk tripel Pythagoras. Pastikan c adalah nilai terbesar.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Mengapa <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> mengatakan nilai saya bukan tripel?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Anda juga dapat menghasilkan tripel menggunakan dua bilangan bulat positif m dan n, di mana m lebih besar dari n. Rumus a = m² − n², b = 2mn, dan c = m² + n² akan selalu menghasilkan tripel yang valid. Ketika m dan n tidak memiliki faktor persekutuan dan tidak keduanya ganjil, hasilnya disebut tripel primitif.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klik Atur Ulang untuk menghapus semua kolom dan mulai dari awal.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Saat menghasilkan tripel, <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> menghasilkan tiga bilangan bulat menggunakan rumus m dan n. Bilangan-bilangan ini dijamin membentuk segitiga siku-siku. Jika m dan n tidak memiliki faktor persekutuan dan tidak keduanya ganjil, tripelnya primitif — artinya tidak dapat disederhanakan lebih lanjut.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Rasio pastinya berubah dari satu tripel ke tripel lain, tetapi setiap tripel yang valid memenuhi a² + b² = c² dengan c sebagai hipotenusa.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Memverifikasi apakah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">panjang sisi</a> yang diukur membentuk <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> siku-siku yang sebenarnya.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Menghasilkan tripel untuk kompetisi matematika dan soal latihan.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Membangun daftar referensi tripel Pythagoras untuk belajar.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Mengonfirmasi <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">pengukuran</a> konstruksi yang mengandalkan aturan 3-4-5 atau pola serupa.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Menganggap 5 sebagai kaki, bukan hipotenusa — 5 selalu merupakan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> terpanjang.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Mengira hanya nilai tepat 3, 4, 5 yang berlaku — kelipatan apa pun seperti 6, 8, 10 atau 15, 20, 25 juga valid.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Mencampuradukkan rumus <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> dan <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">keliling</a> — luas menggunakan perkalian dan pembagian dengan 2, keliling menggunakan penjumlahan.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Menggunakan faktor skala negatif atau nol — k harus lebih besar dari 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Kalikan ketiga sisi dengan k yang sama untuk mempertahankan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> siku-siku.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Contoh 2: Faktor skala k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Contoh 3: Faktor skala k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ya. Membagi setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> dengan 2 memberikan 3, 4, 5. Jadi 6, 8, 10 adalah segitiga 3 4 5 yang diskalakan dengan k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Apakah 6, 8, 10 adalah segitiga 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ya. Ukur 3 satuan di sepanjang satu <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> dan 4 satuan di sepanjang sisi lainnya. Jika diagonal antara kedua titik ujung tersebut berukuran tepat 5 satuan, sudutnya adalah <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> siku-siku.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Bisakah saya menggunakan aturan 3 4 5 untuk memeriksa sudut siku-siku?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Keliling</a> dasar adalah 3 + 4 + 5 = 12 satuan. Untuk versi yang diskalakan, kelilingnya adalah 12k, di mana k adalah faktor skala.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Berapa keliling segitiga 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Setelah penskalaan, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> adalah setengah hasil kali kedua kaki, dan <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">keliling</a> adalah jumlah ketiga sisi. Karena rasionya tidak pernah berubah, segitiga 3 4 5 pada skala apa pun selalu memiliki sudut yang sama.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klik Atur Ulang untuk menghapus masukan dan mulai lagi dari awal.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a> memberi tahu Anda ruang di dalam segitiga dalam satuan persegi. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Keliling</a> memberi Anda total panjang mengelilingi bagian luar. Kedua nilai bertambah seiring Anda meningkatkan k, tetapi segitiga selalu mempertahankan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> siku-sikunya.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Versi yang diskalakan mempertahankan rasio yang sama seperti 3k : 4k : 5k, sehingga hipotenusa selalu merupakan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang dipasangkan dengan 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Menyelesaikan pekerjaan rumah geometri yang melibatkan penskalaan segitiga 3 4 5.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Merancang tata letak atau denah lantai yang memerlukan sudut 90 derajat yang tepat.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Mengestimasi luas dan keliling dengan cepat tanpa pemecah segitiga siku-siku lengkap.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Mengajarkan siswa bagaimana penskalaan mempertahankan sudut pada <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">segitiga sebangun</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Menskalakan hanya satu atau dua sisi, bukan ketiganya — setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> harus dikalikan dengan k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Lupa bahwa 5, 12, 13 adalah <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">tripel Pythagoras</a> — beberapa siswa tidak mengenalinya sebagai tripel.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Menulis sisi dalam urutan yang salah seperti 5, 13, 12 dan menempatkan hipotenusa di tengah.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Menggunakan hanya kaki untuk <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">keliling</a> — keliling mencakup ketiga sisi, bukan hanya kedua kaki.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Setiap versi yang diskalakan mempertahankan sudut dan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> siku-siku yang sama.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Contoh 2: Faktor skala k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Contoh 3: Faktor skala k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ya. Setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> tepat dua kali tripel dasar, jadi 10, 24, 26 adalah segitiga 5 12 13 dengan faktor skala k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Apakah 10, 24, 26 adalah segitiga 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Keduanya adalah <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">tripel Pythagoras</a>, tetapi memiliki rasio <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> dan sudut yang berbeda. <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">Segitiga 3 4 5</a> memiliki bentuk yang lebih curam, sedangkan segitiga 5 12 13 lebih datar karena kaki yang lebih panjang jauh lebih besar relatif terhadap kaki yang lebih pendek.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Apa perbedaan antara segitiga 3 4 5 dan 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Ya. Menggunakan m = 3 dan n = 2 memberikan a = 9 − 4 = 5, b = 2 × 3 × 2 = 12, dan c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Bisakah tripel 5 12 13 dihasilkan dengan rumus m dan n?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Setelah Anda menemukan sisi yang diskalakan, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> sama dengan setengah hasil kali kedua kaki. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Keliling</a> hanyalah jumlah ketiga sisi. Bentuknya tetap sama — hanya ukurannya yang berubah.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Tekan Atur Ulang untuk memulai perhitungan baru.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Luas</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Nilai k yang lebih besar meregangkan segitiga sambil mempertahankan proporsi yang sama. Menggandakan k melipatgandakan <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> menjadi empat kali lipat tetapi hanya menggandakan <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">keliling</a>. Hubungan ini berlaku untuk semua segitiga yang diskalakan.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Versi yang diskalakan mempertahankan rasio yang sama seperti 5k : 12k : 13k, sehingga setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> dikalikan dengan faktor skala k yang sama.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Memeriksa ulang <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> siku-siku serta <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">pengukuran</a> ketika sisi-sisinya adalah kelipatan 5, 12, dan 13.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Menghitung luas dan keliling untuk tugas geometri yang melibatkan <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">tripel Pythagoras</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Merencanakan tata letak konstruksi yang menggunakan rasio 5 12 13 untuk akurasi.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Mengeksplorasi bagaimana penskalaan segitiga mengubah <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">luas</a> dan <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">keliling</a>nya.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Menggunakan faktor skala yang berbeda untuk pasangan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang berbeda — semua pasangan harus berbagi k yang sama.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Membagi ke arah yang salah — k sama dengan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> sebangun dibagi sisi asli, bukan sebaliknya.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Mengasumsikan semua segitiga siku-siku sebangun — dua segitiga siku-siku hanya sebangun jika keduanya memiliki <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> kedua yang sama.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Lupa bahwa <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> siku-siku dihitung sebagai sudut yang sama — jika dua segitiga siku-siku memiliki satu sudut lancip lain yang sama, keduanya sebangun.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Ketiga pasang sisi harus memiliki faktor skala yang sama.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{sisi <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sebangun</a>} = \\text{sisi asli} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sisi</a> yang bersesuaian pada segitiga sebangun adalah 20 satuan.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Contoh 2: Temukan sisi sebangun yang hilang",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> asli} = \\frac{\\text{sisi sebangun}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sisi</a> yang bersesuaian pada segitiga asli adalah 5 satuan.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Contoh 3: Temukan sisi asli",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ya. Faktor skala seperti 0.5 berarti segitiga sebangun berukuran setengah dari aslinya. Bilangan positif apa pun dapat menjadi faktor skala.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Bisakah faktor skala berupa desimal?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Tidak. Dua segitiga siku-siku sebangun hanya jika keduanya memiliki setidaknya satu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> lancip yang sama selain sudut siku-siku. Sudut lancip yang berbeda berarti proporsi yang berbeda.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Apakah semua segitiga siku-siku sebangun satu sama lain?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Kalikan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> asli yang bersesuaian dengan k untuk mendapatkan sisi sebangun. Atau bagi sisi sebangun dengan k untuk menemukan yang asli. Rumusnya bergantung pada sisi mana yang Anda selesaikan.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Bagaimana cara menemukan sisi yang hilang menggunakan faktor skala?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{sisi <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sebangun</a>}}{\\text{sisi asli}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{sisi <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sebangun</a>} = \\text{sisi asli} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> asli} = \\frac{\\text{sisi sebangun}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Faktor skala bekerja dalam satu arah. Jika k = 2, segitiga sebangun berukuran dua kali lebih besar. Untuk arah sebaliknya, bagi dengan k, bukan mengalikan. Rumus-rumus ini mencakup ketiga situasi: menemukan k, menemukan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang diskalakan, dan menemukan sisi asli.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klik Atur Ulang untuk menghapus semua kolom.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = sisi sebangun / sisi asli",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "sisi sebangun = sisi asli × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "sisi asli = sisi sebangun / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = sisi sebangun / sisi asli",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Ketika Anda menemukan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi yang hilang</a>, hasilnya adalah panjang sisi yang bersesuaian pada segitiga lainnya. Ini bekerja karena segitiga sebangun mempertahankan proporsi yang konstan di semua pasangan sisi yang bersesuaian.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Jika faktor skalanya adalah k, setiap <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> pada segitiga sebangun sama dengan sisi asli yang bersesuaian dikalikan k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Menghitung dimensi untuk model skala atau gambar arsitektur.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Menyelesaikan soal proporsi pada tes matematika terstandar.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Membandingkan <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">pengukuran</a> bayangan untuk mengestimasi ketinggian benda tinggi.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Mengonversi antara <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">pengukuran</a> cetak biru dan dimensi bangunan sebenarnya.",
    "mode": "fill"
   }
  ]
 },
 "ar": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "نسيان تربيع كل <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلع</a> قبل الجمع — التحقق من a + b = c بدلًا من a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "كتابة المعادلة بصورة a² + c² = b² بدلًا من a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "استخدام قيم غير صحيحة وتوقّع ثلاثية فيثاغورس — فالثلاثيات يجب أن تكون أعدادًا صحيحة.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "ضبط m أقل من n أو مساويًا له عند التوليد — يجب أن يكون m أكبر تمامًا من n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{النتيجة: 3, 4, 5 ثلاثية فيثاغورس صالحة.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{النتيجة: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{النتيجة: 7, 24, 25 ثلاثية فيثاغورس صالحة.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "مثال 3: تحقق مما إذا كانت 7, 24, 25 ثلاثية فيثاغورس",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "لا. فثلاثيات فيثاغورس تُعرَّف بأنها مجموعات من الأعداد الصحيحة فقط. وقد تحقق القيم العشرية a² + b² = c²، لكنها لا تُعد ثلاثيات.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "هل يمكن أن تشكّل الأعداد العشرية ثلاثية فيثاغورس؟",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "نعم. التحقق: 5² + 12² = 25 + 144 = 169 = 13². وبما أن الأعداد الثلاثة كلها صحيحة والمعادلة تتحقق، فهي ثلاثية فيثاغورس صالحة.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "هل 5, 12, 13 ثلاثية فيثاغورس؟",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "تتحقق <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">الحاسبة</a> مما إذا كان a² + b² يساوي c² بالضبط. فإذا وجد أي فرق — حتى فرق صغير ناتج عن التقريب — فإن القيم لا تشكّل ثلاثية فيثاغورس. تأكد من أن c هي أكبر قيمة.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "لماذا تقول <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">الحاسبة</a> إن قيمي ليست ثلاثية؟",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "يمكنك أيضًا توليد ثلاثيات باستخدام عددين صحيحين موجبين m وn، حيث m أكبر من n. فالصيغ a = m² − n² و b = 2mn و c = m² + n² ستنتج دائمًا ثلاثية صالحة. وعندما لا يشترك m وn في أي عوامل مشتركة ولا يكون كلاهما فرديًا، تُسمى النتيجة ثلاثية بدائية.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "انقر على «إعادة تعيين» لمسح جميع الحقول والبدء من جديد.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "عند توليد ثلاثية، تنتج <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">الحاسبة</a> ثلاثة أعداد صحيحة باستخدام صيغ m وn. وهذه الأعداد مضمونة أن تشكّل مثلثًا قائمًا. فإذا لم يشترك m وn في أي عامل مشترك ولم يكونا كلاهما فرديين، تكون الثلاثية بدائية — أي لا يمكن تبسيطها أكثر.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "تتغير النسبة الدقيقة من ثلاثية إلى أخرى، لكن كل ثلاثية صالحة تحقق a² + b² = c² حيث c هو الوتر.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "التحقق مما إذا كانت <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">أطوال الأضلاع</a> المقاسة تشكّل <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">زاوية</a> قائمة حقيقية.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "توليد ثلاثيات لمسابقات الرياضيات ومسائل التدريب.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "بناء قائمة مرجعية بثلاثيات فيثاغورس للدراسة.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "تأكيد <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">قياسات</a> البناء التي تعتمد على قاعدة 3-4-5 أو أنماط مشابهة.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "معاملة 5 بصفته قائمة بدلًا من الوتر — 5 هو دائمًا أطول <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلع</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "الاعتقاد أن القيم الدقيقة 3, 4, 5 فقط هي التي تعمل — أي مضاعف مثل 6, 8, 10 أو 15, 20, 25 صالح أيضًا.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "الخلط بين صيغ <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a> و<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">المحيط</a> — فالمساحة تستخدم الضرب والقسمة على 2، والمحيط يستخدم الجمع.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "استخدام عامل قياس سالب أو صفري — يجب أن يكون k أكبر من 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "اضرب الأضلاع الثلاثة كلها في k نفسه للحفاظ على <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">الزاوية</a> القائمة.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "مثال 2: عامل القياس k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "مثال 3: عامل القياس k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "نعم. قسمة كل <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلع</a> على 2 تعطي 3, 4, 5. لذا 6, 8, 10 هو مثلث 3 4 5 مكبّر بعامل k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "هل 6, 8, 10 مثلث 3 4 5؟",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "نعم. قس 3 وحدات على طول <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلع</a> واحد و4 وحدات على طول الآخر. فإذا قاس القطر بين هاتين النهايتين 5 وحدات بالضبط، فالزاوية <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">زاوية</a> قائمة.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "هل يمكنني استخدام قاعدة 3 4 5 للتحقق من زاوية قائمة؟",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">المحيط</a> الأساسي هو 3 + 4 + 5 = 12 وحدة. وبالنسبة لأي نسخة مكبّرة، المحيط هو 12k، حيث k هو عامل القياس.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "ما محيط مثلث 3 4 5؟",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "بعد التكبير، تكون <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a> نصف حاصل ضرب القائمتين، و<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">المحيط</a> هو مجموع الأضلاع الثلاثة كلها. وبما أن النسبة لا تتغير أبدًا، فإن مثلث 3 4 5 عند أي مقياس يحتفظ دائمًا بالزوايا نفسها.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "انقر على «إعادة تعيين» لمسح الإدخال والبدء من جديد.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "تخبرك <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a> بالفراغ داخل المثلث بوحدات مربعة. ويمنحك <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">المحيط</a> الطول الإجمالي حول الخارج. وتكبر القيمتان كلما زدت k، لكن المثلث يحتفظ دائمًا بـ<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">زاويته</a> القائمة.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "تحتفظ النسخة المكبّرة بالنسبة نفسها 3k : 4k : 5k، لذا يكون الوتر دائمًا <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">الضلع</a> المقترن بـ 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "حل واجبات هندسية تتضمن تكبير مثلث 3 4 5.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "تصميم مخططات أو مساقط أرضية تتطلب زوايا 90 درجة دقيقة.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "تقدير المساحات والمحيطات بسرعة دون حلّال كامل للمثلث القائم.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "تعليم الطلاب كيف يحافظ التكبير على الزوايا في <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">المثلثات المتشابهة</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "تكبير ضلع أو ضلعين فقط بدلًا من الأضلاع الثلاثة كلها — يجب ضرب كل <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلع</a> في k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "نسيان أن 5, 12, 13 <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ثلاثية فيثاغورس</a> — فبعض الطلاب لا يتعرّفون عليها بوصفها واحدة.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "كتابة الأضلاع بترتيب خاطئ مثل 5, 13, 12 ووضع الوتر في المنتصف.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "استخدام القائمتين فقط لـ<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">المحيط</a> — فالمحيط يشمل الأضلاع الثلاثة كلها، لا القائمتين فقط.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "تحتفظ كل نسخة مكبّرة بالزوايا نفسها و<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">بالزاوية</a> القائمة.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "مثال 2: عامل القياس k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "مثال 3: عامل القياس k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "نعم. كل <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلع</a> يساوي بالضبط ضعف الثلاثية الأساسية، لذا 10, 24, 26 هو مثلث 5 12 13 بعامل قياس k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "هل 10, 24, 26 مثلث 5 12 13؟",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "كلاهما من <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ثلاثيات فيثاغورس</a>، لكن لهما نسب <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">أضلاع</a> وزوايا مختلفة. فمثلث <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">3 4 5</a> له شكل أكثر انحدارًا، بينما مثلث 5 12 13 أكثر تسطّحًا لأن القائمة الأطول أكبر بكثير نسبة إلى القائمة الأقصر.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "ما الفرق بين مثلث 3 4 5 ومثلث 5 12 13؟",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "نعم. استخدام m = 3 و n = 2 يعطي a = 9 − 4 = 5 و b = 2 × 3 × 2 = 12 و c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "هل يمكن توليد ثلاثية 5 12 13 باستخدام صيغة m وn؟",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "بمجرد إيجاد الأضلاع المكبّرة، تساوي <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a> نصف حاصل ضرب القائمتين. و<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">المحيط</a> هو ببساطة مجموع الأضلاع الثلاثة كلها. ويبقى الشكل كما هو — يتغير الحجم فقط.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "اضغط على «إعادة تعيين» لبدء حساب جديد.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "عامل قياس أكبر يمدّد المثلث مع الحفاظ على النسب نفسها. ومضاعفة k تربّع <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">المساحة</a> لكنها تضاعف <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">المحيط</a> فقط. وتسري هذه العلاقة على جميع المثلثات المكبّرة.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "تحتفظ النسخة المكبّرة بالنسبة نفسها 5k : 12k : 13k، لذا يُضرب كل <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلع</a> في عامل القياس k نفسه.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "التحقق المزدوج من <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">الزاوية</a> القائمة و<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">قياساتها</a> عندما تكون الأضلاع مضاعفات لـ 5 و12 و13.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "حساب المساحات والمحيطات لواجبات هندسية تتضمن <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">ثلاثيات فيثاغورس</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "تخطيط مخططات بناء تستخدم نسبة 5 12 13 للدقة.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "استكشاف كيف يغيّر تكبير مثلث <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">مساحته</a> و<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">محيطه</a>.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "استخدام عوامل قياس مختلفة لأزواج <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">أضلاع</a> مختلفة — يجب أن تشترك الأزواج كلها في k نفسه.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "القسمة في الاتجاه الخاطئ — k يساوي <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">الضلع</a> المشابه مقسومًا على الضلع الأصلي، لا العكس.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "افتراض أن جميع المثلثات القائمة متشابهة — فمثلثان قائمان لا يكونان متشابهين إلا إذا اشتركا في <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">زاوية</a> ثانية.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "نسيان أن <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">الزاوية</a> القائمة تُحتسب زاوية مشتركة — فإذا كان لمثلثين قائمين زاوية حادة أخرى متساوية، فهما متشابهان.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "يجب أن يكون للأزواج الثلاثة كلها من الأضلاع عامل القياس نفسه.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{الضلع <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">المشابه</a>} = \\text{الضلع الأصلي} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">الضلع</a> المتناظر في المثلث المشابه يساوي 20 وحدة.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "مثال 2: إيجاد ضلع مشابه مفقود",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{الضلع <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">الأصلي</a>} = \\frac{\\text{الضلع المشابه}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">الضلع</a> المتناظر في المثلث الأصلي يساوي 5 وحدات.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "مثال 3: إيجاد الضلع الأصلي",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "نعم. فعامل قياس مثل 0.5 يعني أن المثلث المشابه نصف حجم الأصلي. وأي عدد موجب صالح عاملَ قياس.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "هل يمكن أن يكون عامل القياس عددًا عشريًا؟",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "لا. فمثلثان قائمان لا يكونان متشابهين إلا إذا اشتركا في <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">زاوية</a> حادة واحدة على الأقل بالإضافة إلى الزاوية القائمة. فاختلاف الزوايا الحادة يعني اختلاف النسب.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "هل جميع المثلثات القائمة متشابهة فيما بينها؟",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "اضرب <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">الضلع</a> الأصلي المتناظر في k للحصول على الضلع المشابه. أو اقسم الضلع المشابه على k لإيجاد الأصلي. وتعتمد الصيغة على الضلع الذي تحل من أجله.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "كيف أجد ضلعًا مفقودًا باستخدام عامل القياس؟",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{الضلع <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">المشابه</a>}}{\\text{الضلع الأصلي}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{الضلع <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">المشابه</a>} = \\text{الضلع الأصلي} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{الضلع <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">الأصلي</a>} = \\frac{\\text{الضلع المشابه}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "يعمل عامل القياس في اتجاه واحد. فإذا كان k = 2، يكون المثلث المشابه ضعف الحجم. وللاتجاه المعاكس، اقسم على k بدلًا من الضرب. وتغطي الصيغ الحالات الثلاث كلها: إيجاد k، وإيجاد <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلع</a> مكبّر، وإيجاد الضلع الأصلي.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "انقر على «إعادة تعيين» لمسح جميع الحقول.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = الضلع المشابه / الضلع الأصلي",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "الضلع المشابه = الضلع الأصلي × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "الضلع الأصلي = الضلع المشابه / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = الضلع المشابه / الضلع الأصلي",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "عندما تجد <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلعًا مفقودًا</a>، تكون النتيجة هي طول الضلع المتناظر في المثلث الآخر. ويعمل هذا لأن المثلثات المتشابهة تحافظ على نسب ثابتة عبر جميع أزواج الأضلاع المتناظرة.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "إذا كان عامل القياس k، فإن كل <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">ضلع</a> في المثلث المشابه يساوي ضلعه الأصلي المتناظر مضروبًا في k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "حساب أبعاد للنماذج المصغّرة أو الرسومات المعمارية.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "حل مسائل النسب في اختبارات الرياضيات الموحّدة.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "مقارنة <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">قياسات</a> الظل لتقدير ارتفاع الأجسام الطويلة.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "التحويل بين <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">قياسات</a> المخططات وأبعاد المبنى الفعلية.",
    "mode": "fill"
   }
  ]
 },
 "bg": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Забравяне да се повдигне на квадрат всяка <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> преди събирането — проверка на a + b = c вместо a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Записване на уравнението като a² + c² = b² вместо a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Използване на нецели стойности и очакване на питагорова тройка: тройките трябва да са цели числа.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Задаване на m по-малко или равно на n при генериране — m трябва да бъде строго по-голямо от n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\\\text{Резултат: 3, 4, 5 е валидна питагорова тройка.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 2mn = 2 \\\\times 2 \\\\times 1 = 4",
    "mode": "set"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\\\text{Резултат: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\\\quad \\\\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\\\text{Резултат: 7, 24, 25 е валидна питагорова тройка.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Пример 3: Проверете дали 7, 24, 25 е питагорова тройка",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Не. Питагоровите тройки се определят само като набори от цели числа. Десетичните стойности може да удовлетворяват a² + b² = c², но не се считат за тройки.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Могат ли десетичните числа да образуват питагорова тройка?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Да. Проверка: 5² + 12² = 25 + 144 = 169 = 13². Тъй като и трите са цели числа и равенството е вярно, това е валидна питагорова тройка.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Питагорова тройка ли е 5, 12, 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Калкулаторът</a> проверява дали a² + b² е точно равно на c². Ако има някаква разлика — дори малка, от закръгляне — стойностите не образуват питагорова тройка. Уверете се, че c е най-голямата стойност.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Защо <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">калкулаторът</a> казва, че стойностите ми не са тройка?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Можете също да генерирате тройки с помощта на две положителни цели числа m и n, където m е по-голямо от n. Формулите a = m² − n², b = 2mn и c = m² + n² винаги ще дават валидна тройка. Когато m и n нямат общи делители и не са и двете нечетни, резултатът се нарича примитивна тройка.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Щракнете върху Нулиране, за да изчистите всички полета и да започнете отначало.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Когато генерирате тройка, <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">калкулатор</a> създава три цели числа с помощта на формулите с m и n. Гарантирано е, че тези числа образуват правоъгълен триъгълник. Ако m и n нямат общ делител и не са и двете нечетни, тройката е примитивна, което означава, че не може да бъде опростена повече.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Точното отношение се променя от една тройка към друга, но всяка валидна тройка удовлетворява a² + b² = c², където c е хипотенузата.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Проверка дали измерените <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">дължини на страните</a> образуват истински прав <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ъгъл</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Генериране на тройки за математически състезания и задачи за упражнение.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Съставяне на справочен списък с питагорови тройки за учене.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Потвърждаване на строителни <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">измервания</a>, които разчитат на правилото 3-4-5 или подобни закономерности.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Третиране на 5 като катет вместо като хипотенуза — 5 винаги е най-дългата <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Мислене, че работят само точните стойности 3, 4, 5 — всяко кратно като 6, 8, 10 или 15, 20, 25 също е валидно.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Объркване на формулите за <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">лице</a> и <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметър</a> — лицето използва умножение и деление на 2, периметърът използва събиране.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Използване на отрицателен или нулев коефициент на мащабиране — k трябва да бъде по-голямо от 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Умножете и трите страни по едно и също k, за да запазите правия <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ъгъл</a>.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Лице</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Пример 2: Коефициент на мащабиране k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Лице</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Пример 3: Коефициент на мащабиране k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Да. Деленето на всяка <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> на 2 дава 3, 4, 5. Така че 6, 8, 10 е триъгълник 3 4 5, мащабиран с k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "6, 8, 10 триъгълник 3 4 5 ли е?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Да. Измерете 3 единици по едната <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> и 4 единици по другата. Ако диагоналът между тези крайни точки е точно 5 единици, получавате прав <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ъгъл</a>.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Мога ли да използвам правилото 3 4 5, за да проверя прав ъгъл?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Базовият <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметър</a> е 3 + 4 + 5 = 12 единици. За всяка мащабирана версия периметърът е 12k, където k е коефициентът на мащабиране.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Какъв е периметърът на триъгълник 3 4 5?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Лице</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "След мащабиране <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">лицето</a> е половината от произведението на двата катета, а <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметърът</a> е сумата от трите страни. Тъй като съотношението никога не се променя, триъгълник 3 4 5 във всеки мащаб винаги има едни и същи ъгли.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Натиснете Reset, за да изчистите въведеното и да започнете отначало.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Лице</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Лицето</a> ви показва пространството вътре в триъгълника в квадратни единици. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Периметърът</a> ви дава общата дължина по външната страна. И двете стойности нарастват, когато увеличавате k, но триъгълникът винаги запазва правия си <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ъгъл</a>.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Мащабираната версия запазва същото съотношение като 3k : 4k : 5k, така че хипотенузата винаги е <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страната</a>, съответстваща на 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Решаване на домашна работа по геометрия, която включва мащабиране на триъгълник 3 4 5.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Проектиране на оформления или етажни планове, които изискват точни ъгли от 90 градуса.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Бързо оценяване на лица и периметри без пълен калкулатор за правоъгълен триъгълник.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Обучение на ученици как мащабирането запазва ъглите при <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">подобните триъгълници</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Мащабиране само на една или две страни вместо на трите — всяка <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> трябва да се умножи по k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Забравяне, че 5, 12, 13 е <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">питагорова тройка</a> — някои ученици не я разпознават като такава.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Записване на страните в грешен ред като 5, 13, 12 и поставяне на хипотенузата по средата.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Използване само на катетите за <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметъра</a> — периметърът включва и трите страни, а не само двата катета.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Всяка мащабирана версия запазва същите ъгли и правия <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ъгъл</a>.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Лице</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Пример 2: Коефициент на мащабиране k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Лице</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Пример 3: Коефициент на мащабиране k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Да. Всяка <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> е точно два пъти базовата тройка, така че 10, 24, 26 е триъгълник 5 12 13 с коефициент на мащабиране k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "10, 24, 26 триъгълник 5 12 13 ли е?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "И двете са <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">питагорови тройки</a>, но имат различни съотношения на <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страните</a> и ъгли. <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">Триъгълник 3 4 5</a> има по-стръмна форма, докато триъгълник 5 12 13 е по-плосък, защото по-дългият катет е много по-голям спрямо по-късия катет.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Каква е разликата между триъгълник 3 4 5 и триъгълник 5 12 13?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Да. Използването на m = 3 и n = 2 дава a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 и c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Може ли тройката 5 12 13 да се генерира с формулата с m и n?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Лице</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "След като намерите мащабираните страни, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">лицето</a> е равно на половината от произведението на двата катета. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Периметърът</a> е просто сумата от трите страни. Формата остава същата — променя се само размерът.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Натиснете Reset, за да започнете ново изчисление.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Лице</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "По-голямо k разтяга триъгълника, като запазва същите пропорции. Удвояването на k учетворява <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">лицето</a>, но само удвоява <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметъра</a>. Тази зависимост важи за всички мащабирани триъгълници.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Мащабираната версия запазва същото съотношение като 5k : 12k : 13k, така че всяка <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> се умножава по същия коефициент на мащабиране k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Повторна проверка на правия <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ъгъл</a> чрез <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">измервания</a>, когато страните са кратни на 5, 12 и 13.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Изчисляване на лица и периметри за задачи по геометрия, включващи <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">питагорови тройки</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Планиране на строителни оформления, които използват съотношението 5 12 13 за точност.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Изследване как мащабирането на триъгълник променя неговото <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">лице</a> и <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">периметър</a>.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Използване на различни коефициенти на мащабиране за различни двойки <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страни</a> — всички двойки трябва да споделят едно и също k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Деление в грешна посока — k е равно на съответната <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a>, разделена на оригиналната страна, а не обратното.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Предполагане, че всички правоъгълни триъгълници са подобни — два правоъгълни триъгълника са подобни само ако споделят втори <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ъгъл</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Забравяне, че правият <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ъгъл</a> се брои за споделен ъгъл — ако два правоъгълни триъгълника имат още един равен остър ъгъл, те са подобни.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "И трите двойки страни трябва да имат един и същ коефициент на мащабиране.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{съответна <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a>} = \\text{оригинална страна} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{Съответната <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> на подобния триъгълник е 20 единици.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Пример 2: Намерете липсваща съответна страна",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{оригинална <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a>} = \\frac{\\text{съответна страна}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{Съответната <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> на оригиналния триъгълник е 5 единици.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Пример 3: Намерете оригиналната страна",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Да. Коефициент на мащабиране като 0.5 означава, че подобният триъгълник е наполовина размера на оригиналния. Всяко положително число работи като коефициент на мащабиране.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Може ли коефициентът на мащабиране да бъде десетично число?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Не. Два правоъгълни триъгълника са подобни само ако споделят поне един остър <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ъгъл</a> в допълнение към правия ъгъл. Различните остри ъгли означават различни пропорции.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Всички правоъгълни триъгълници подобни ли са един на друг?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Умножете съответната оригинална <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> по k, за да получите съответната страна. Или разделете съответната страна на k, за да намерите оригиналната. Формулата зависи от това коя страна търсите.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Как да намеря липсваща страна с помощта на коефициента на мащабиране?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{съответна <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a>}}{\\text{оригинална страна}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{съответна <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a>} = \\text{оригинална страна} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{оригинална <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a>} = \\frac{\\text{съответна страна}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Коефициентът на мащабиране работи в една посока. Ако k = 2, подобният триъгълник е два пъти по-голям. За да отидете в другата посока, делете на k вместо да умножавате. Формулите покриват и трите ситуации: намиране на k, намиране на мащабирана <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> и намиране на оригиналната страна.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Натиснете Reset, за да изчистите всички полета.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = съответна страна / оригинална страна",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "съответна страна = оригинална страна × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "оригинална страна = съответна страна / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = съответна страна / оригинална страна",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Когато намерите <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">липсваща страна</a>, резултатът е дължината на съответната страна на другия триъгълник. Това работи, защото подобните триъгълници запазват постоянни пропорции при всички двойки съответни страни.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Ако коефициентът на мащабиране е k, всяка <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">страна</a> на подобния триъгълник е равна на съответната ѝ оригинална страна, умножена по k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Изчисляване на размери за мащабни модели или архитектурни чертежи.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Решаване на задачи за пропорции на стандартизирани тестове по математика.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Сравняване на <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">измервания</a> на сенки за оценяване на височината на високи обекти.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Преобразуване между <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">измервания</a> от чертеж и действителни размери на сграда.",
    "mode": "fill"
   }
  ]
 },
 "tr": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Toplamadan önce her <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenarın</a> karesini almayı unutmak; a² + b² = c² yerine a + b = c kontrolü yapmak.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Denklemi a² + b² = c² yerine a² + c² = b² olarak yazmak.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Tam sayı olmayan değerler kullanmak ve bir Pisagor üçlüsü beklemek; üçlüler tam sayılar olmalıdır.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Üretirken m'yi n'ye eşit veya ondan küçük ayarlamak; m kesinlikle n'den büyük olmalıdır.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Sonuç: 3, 4, 5 geçerli bir Pisagor üçlüsüdür.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Sonuç: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Sonuç: 7, 24, 25 geçerli bir Pisagor üçlüsüdür.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Örnek 3: 7, 24, 25'in bir Pisagor üçlüsü olup olmadığını kontrol edin",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Hayır. Pisagor üçlüleri yalnızca tam sayı kümeleri olarak tanımlanır. Ondalık değerler a² + b² = c² eşitliğini sağlayabilir, ancak üçlü olarak kabul edilmezler.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Ondalık sayılar bir Pisagor üçlüsü oluşturabilir mi?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Evet. Kontrol: 5² + 12² = 25 + 144 = 169 = 13². Üçü de tam sayı olduğundan ve eşitlik sağlandığından, geçerli bir Pisagor üçlüsüdür.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "5, 12, 13 bir Pisagor üçlüsü mü?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Hesaplayıcı</a>, a² + b²'nin c²'ye tam olarak eşit olup olmadığını kontrol eder. Yuvarlamadan kaynaklanan küçük bir fark bile varsa, değerler bir Pisagor üçlüsü oluşturmaz. c'nin en büyük değer olduğundan emin olun.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Hesaplayıcı</a> neden değerlerimin bir üçlü olmadığını söylüyor?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Üçlüleri, m'nin n'den büyük olduğu iki pozitif tam sayı m ve n kullanarak da üretebilirsiniz. a = m² − n², b = 2mn ve c = m² + n² formülleri her zaman geçerli bir üçlü üretir. m ve n ortak çarpan paylaşmadığında ve ikisi de tek olmadığında, sonuç ilkel üçlü olarak adlandırılır.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Tüm alanları temizlemek ve baştan başlamak için Sıfırla düğmesine tıklayın.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Bir üçlü üretirken, <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">hesaplayıcı</a> m ve n formüllerini kullanarak üç tam sayı üretir. Bu sayıların bir dik üçgen oluşturması garantilidir. m ve n ortak çarpan paylaşmıyorsa ve ikisi de tek değilse, üçlü ilkeldir; yani daha fazla sadeleştirilemez.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Tam oran bir üçlüden diğerine değişir, ancak her geçerli üçlü, hipotenüs olarak c ile a² + b² = c² eşitliğini sağlar.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Ölçülen <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar uzunluklarının</a> gerçek bir dik <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">açı</a> oluşturup oluşturmadığını doğrulamak.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Matematik yarışmaları ve alıştırma problemleri için üçlüler üretmek.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Çalışmak için bir Pisagor üçlüleri referans listesi oluşturmak.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "3-4-5 kuralına veya benzer desenlere dayanan inşaat <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">ölçümlerini</a> doğrulamak.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "5'i hipotenüs yerine bir dik kenar olarak ele almak; 5 her zaman en uzun <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenardır</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Yalnızca tam 3, 4, 5 değerlerinin işe yaradığını düşünmek; 6, 8, 10 veya 15, 20, 25 gibi herhangi bir katı da geçerlidir.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a> ve <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">çevre</a> formüllerini karıştırmak; alan çarpma ve 2'ye bölme kullanır, çevre toplama kullanır.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Negatif veya sıfır ölçek katsayısı kullanmak; k, 0'dan büyük olmalıdır.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Dik <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">açıyı</a> korumak için üç kenarı da aynı k ile çarpın.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Örnek 2: Ölçek katsayısı k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Örnek 3: Ölçek katsayısı k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Evet. Her <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenarı</a> 2'ye bölmek 3, 4, 5 verir. Yani 6, 8, 10, k = 2 ile ölçeklendirilmiş bir 3 4 5 üçgenidir.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "6, 8, 10 bir 3 4 5 üçgeni mi?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Evet. Bir <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a> boyunca 3 birim ve diğer kenar boyunca 4 birim ölçün. Bu uç noktalar arasındaki köşegen tam olarak 5 birim ölçüyorsa, köşe bir dik <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">açıdır</a>.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Bir dik açıyı kontrol etmek için 3 4 5 kuralını kullanabilir miyim?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Temel <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">çevre</a> 3 + 4 + 5 = 12 birimdir. Herhangi bir ölçeklendirilmiş sürüm için, çevre 12k'dir; burada k ölçek katsayısıdır.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Bir 3 4 5 üçgeninin çevresi nedir?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Ölçeklendirmeden sonra, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">alan</a> iki dik kenarın çarpımının yarısıdır ve <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">çevre</a> üç kenarın toplamıdır. Oran hiç değişmediğinden, herhangi bir ölçekteki bir 3 4 5 üçgeni her zaman aynı açılara sahiptir.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Girdiyi temizlemek ve yeniden başlamak için Sıfırla düğmesine tıklayın.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a> size üçgenin içindeki alanı kare birimlerle söyler. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Çevre</a> size dışarının etrafındaki toplam uzunluğu verir. k'yi artırdıkça her iki değer de büyür, ancak üçgen dik <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">açısını</a> her zaman korur.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Ölçeklendirilmiş bir sürüm 3k : 4k : 5k ile aynı oranı korur, bu nedenle hipotenüs her zaman 5k ile eşleşen <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenardır</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "3 4 5 üçgeni ölçeklendirmesini içeren geometri ödevlerini çözmek.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Tam 90 derecelik köşeler gerektiren düzenler veya kat planları tasarlamak.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Tam bir dik üçgen çözücü olmadan alanları ve çevreleri hızlıca tahmin etmek.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Öğrencilere ölçeklendirmenin <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">benzer üçgenlerde</a> açıları nasıl koruduğunu öğretmek.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Üç kenar yerine yalnızca bir veya iki kenarı ölçeklendirmek; her <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a> k ile çarpılmalıdır.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "5, 12, 13'ün bir <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">Pisagor üçlüsü</a> olduğunu unutmak; bazı öğrenciler onu bir üçlü olarak tanımaz.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Kenarları 5, 13, 12 gibi yanlış sırayla yazmak ve hipotenüsü ortaya yerleştirmek.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Çevre</a> için yalnızca dik kenarları kullanmak; çevre iki dik kenarı değil, üç kenarı da içerir.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Her ölçeklendirilmiş sürüm aynı açıları ve dik <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">açıyı</a> korur.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Örnek 2: Ölçek katsayısı k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Örnek 3: Ölçek katsayısı k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Evet. Her <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a> tam olarak temel üçlünün iki katıdır, bu nedenle 10, 24, 26, ölçek katsayısı k = 2 olan bir 5 12 13 üçgenidir.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "10, 24, 26 bir 5 12 13 üçgeni mi?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "İkisi de <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">Pisagor üçlüleridir</a>, ancak farklı <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a> oranlarına ve açılara sahiptirler. Bir <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">3 4 5 üçgeni</a> daha dik bir şekle sahipken, bir 5 12 13 üçgeni daha düzdür, çünkü uzun dik kenar, kısa dik kenara göre çok daha büyüktür.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "3 4 5 ve 5 12 13 üçgeni arasındaki fark nedir?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Evet. m = 3 ve n = 2 kullanmak a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 ve c = 9 + 4 = 13 verir.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "5 12 13 üçlüsü m ve n formülüyle üretilebilir mi?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Ölçeklendirilmiş kenarları bulduğunuzda, <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">alan</a> iki dik kenarın çarpımının yarısına eşittir. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Çevre</a> basitçe üç kenarın toplamıdır. Şekil aynı kalır; yalnızca boyut değişir.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Yeni bir hesaplamaya başlamak için Sıfırla düğmesine basın.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Alan</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Daha büyük bir k, aynı oranları koruyarak üçgeni esnetir. k'yi iki katına çıkarmak <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">alanı</a> dört katına çıkarır, ancak <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">çevreyi</a> yalnızca iki katına çıkarır. Bu ilişki tüm ölçeklendirilmiş üçgenler için geçerlidir.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Ölçeklendirilmiş bir sürüm 5k : 12k : 13k ile aynı oranı korur, bu nedenle her <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a> aynı ölçek katsayısı k ile çarpılır.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Kenarlar 5, 12 ve 13'ün katları olduğunda dik <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">açı</a> <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">ölçümlerini</a> iki kez kontrol etmek.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "<a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">Pisagor üçlülerini</a> içeren geometri ödevleri için alanları ve çevreleri hesaplamak.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Doğruluk için 5 12 13 oranını kullanan inşaat düzenlerini planlamak.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Bir üçgeni ölçeklendirmenin <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">alanını</a> ve <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">çevresini</a> nasıl değiştirdiğini keşfetmek.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Farklı <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a> çiftleri için farklı ölçek katsayıları kullanmak; tüm çiftler aynı k'yi paylaşmalıdır.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Yanlış yönde bölmek; k, benzer <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenarın</a> asıl kenara bölünmesine eşittir, tersi değil.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Tüm dik üçgenlerin benzer olduğunu varsaymak; iki dik üçgen yalnızca ikinci bir <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">açıyı</a> paylaşırlarsa benzerdir.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Dik <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">açının</a> paylaşılan bir açı olarak sayıldığını unutmak; iki dik üçgenin bir dar açısı daha eşitse, benzerdirler.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Üç kenar çiftinin de aynı ölçek katsayısına sahip olması gerekir.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{benzer <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a>} = \\text{asıl kenar} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{Benzer üçgendeki karşılık gelen <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a> 20 birimdir.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Örnek 2: Eksik bir benzer kenarı bulun",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{asıl <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a>} = \\frac{\\text{benzer kenar}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{Asıl üçgendeki eşleşen <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a> 5 birimdir.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Örnek 3: Asıl kenarı bulun",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Evet. 0.5 gibi bir ölçek katsayısı, benzer üçgenin asıl üçgenin yarısı boyutunda olduğu anlamına gelir. Herhangi bir pozitif sayı ölçek katsayısı olarak çalışır.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Ölçek katsayısı ondalık olabilir mi?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Hayır. İki dik üçgen, yalnızca dik açıya ek olarak en az bir dar <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">açıyı</a> paylaşırlarsa benzerdir. Farklı dar açılar, farklı oranlar demektir.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Tüm dik üçgenler birbirine benzer mi?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Benzer kenarı elde etmek için karşılık gelen asıl <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenarı</a> k ile çarpın. Veya aslı bulmak için benzer kenarı k'ye bölün. Formül, hangi kenar için çözdüğünüze bağlıdır.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Ölçek katsayısını kullanarak eksik bir kenarı nasıl bulurum?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{benzer <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a>}}{\\text{asıl kenar}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{benzer <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a>} = \\text{asıl kenar} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{asıl <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a>} = \\frac{\\text{benzer kenar}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Ölçek katsayısı tek yönde çalışır. k = 2 ise, benzer üçgen iki kat daha büyüktür. Diğer yöne gitmek için, çarpmak yerine k'ye bölün. Formüller üç durumu da kapsar: k'yi bulmak, ölçeklendirilmiş bir <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenarı</a> bulmak ve asıl kenarı bulmak.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Tüm alanları temizlemek için Sıfırla düğmesine tıklayın.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = benzer kenar / asıl kenar",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "benzer kenar = asıl kenar × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "asıl kenar = benzer kenar / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = benzer kenar / asıl kenar",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Eksik bir <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a> bulduğunuzda, sonuç diğer üçgendeki karşılık gelen kenarın uzunluğudur. Bu, benzer üçgenlerin eşleşen tüm kenar çiftlerinde sabit oranları koruduğu için çalışır.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Ölçek katsayısı k ise, benzer üçgendeki her <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kenar</a>, karşılık gelen asıl kenarın k ile çarpımına eşittir.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Ölçekli modeller veya mimari çizimler için boyutları hesaplamak.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Standartlaştırılmış matematik sınavlarında oran problemlerini çözmek.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Uzun nesnelerin yüksekliğini tahmin etmek için gölge <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">ölçümlerini</a> karşılaştırmak.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Plan <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">ölçümleri</a> ile gerçek bina boyutları arasında dönüşüm yapmak.",
    "mode": "fill"
   }
  ]
 },
 "sv": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Att glömma att kvadrera varje <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a> innan du lägger ihop — att kontrollera a + b = c i stället för a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Att skriva ekvationen som a² + c² = b² i stället för a² + b² = c².",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Att använda icke-heltalsvärden och förvänta sig en pythagoreisk trippel — tripplar måste vara heltal.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Att sätta m mindre än eller lika med n vid generering — m måste vara strikt större än n.",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{Resultat: 3, 4, 5 är en giltig pythagoreisk trippel.}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{Resultat: 3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{Resultat: 7, 24, 25 är en giltig pythagoreisk trippel.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exempel 3: Kontrollera om 7, 24, 25 är en pythagoreisk trippel",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Nej. Pythagoreiska tripplar definieras som uppsättningar av endast heltal. Decimalvärden kan uppfylla a² + b² = c², men de betraktas inte som tripplar.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Kan decimaltal bilda en pythagoreisk trippel?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ja. Kontroll: 5² + 12² = 25 + 144 = 169 = 13². Eftersom alla tre är heltal och ekvationen stämmer är det en giltig pythagoreisk trippel.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Är 5, 12, 13 en pythagoreisk trippel?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkylatorn</a> kontrollerar om a² + b² är exakt lika med c². Om det finns någon skillnad — även en liten från avrundning — bildar värdena inte en pythagoreisk trippel. Se till att c är det största värdet.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Varför säger <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkylatorn</a> att mina värden inte är en trippel?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Du kan också generera tripplar med två positiva heltal m och n, där m är större än n. Formlerna a = m² − n², b = 2mn och c = m² + n² ger alltid en giltig trippel. När m och n inte har några gemensamma faktorer och inte båda är udda kallas resultatet en primitiv trippel.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klicka på Återställ för att rensa alla fält och börja om.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "När en trippel genereras producerar <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkylatorn</a> tre heltal med m- och n-formlerna. Dessa tal är garanterade att bilda en rätvinklig triangel. Om m och n inte har någon gemensam faktor och inte båda är udda är trippeln primitiv — vilket betyder att den inte kan förenklas ytterligare.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Det exakta förhållandet ändras från en trippel till en annan, men varje giltig trippel uppfyller a² + b² = c² med c som hypotenusa.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Att verifiera om uppmätta <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sidlängder</a> bildar en verklig rät <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">vinkel</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Att generera tripplar för matematiktävlingar och övningsuppgifter.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Bygga en referenslista över pythagoreiska tripplar för studier.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Bekräfta <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">mått</a> för byggnation som bygger på 3-4-5-regeln eller liknande mönster.",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Att behandla 5 som en katet i stället för hypotenusan — 5 är alltid den längsta <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sidan</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Att tro att endast de exakta värdena 3, 4, 5 fungerar — varje multipel som 6, 8, 10 eller 15, 20, 25 är också giltig.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Att blanda ihop formlerna för <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">area</a> och <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">omkrets</a> — area använder multiplikation och division med 2, omkrets använder addition.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Att använda en negativ skalfaktor eller noll som skalfaktor — k måste vara större än 0.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Multiplicera alla tre sidorna med samma k för att behålla den räta <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">vinkeln</a>.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Area</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Exempel 2: Skalfaktor k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Area</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exempel 3: Skalfaktor k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ja. Att dividera varje <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a> med 2 ger 3, 4, 5. Så 6, 8, 10 är en 3-4-5-triangel skalad med k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Är 6, 8, 10 en 3-4-5-triangel?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Ja. Mät 3 enheter längs den ena <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sidan</a> och 4 enheter längs den andra. Om diagonalen mellan dessa ändpunkter mäter exakt 5 enheter är hörnet en rät <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">vinkel</a>.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Kan jag använda 3-4-5-regeln för att kontrollera en rät vinkel?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Grund<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">omkretsen</a> är 3 + 4 + 5 = 12 enheter. För varje skalad version är omkretsen 12k, där k är skalfaktorn.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Vad är omkretsen hos en 3-4-5-triangel?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Efter skalning är <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">arean</a> hälften av produkten av de två kateterna, och <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">omkretsen</a> är summan av alla tre sidorna. Eftersom förhållandet aldrig ändras har en 3-4-5-triangel i vilken skala som helst alltid samma vinklar.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klicka på Återställ för att rensa inmatningen och börja på nytt.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Arean</a> talar om utrymmet inuti triangeln i kvadratenheter. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Omkretsen</a> ger dig den totala längden runt utsidan. Båda värdena växer när du ökar k, men triangeln behåller alltid sin räta <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">vinkel</a>.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "En skalad version behåller samma förhållande som 3k : 4k : 5k, så hypotenusan är alltid <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sidan</a> som matchas med 5k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Att lösa geometriläxor som involverar skalning av 3-4-5-trianglar.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Att utforma layouter eller planritningar som kräver exakta 90-gradershörn.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Att snabbt uppskatta areor och omkretsar utan en fullständig lösare för rätvinklig triangel.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Att lära elever hur skalning bevarar vinklar i <a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">likformiga trianglar</a>.",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Att skala endast en eller två sidor i stället för alla tre — varje <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a> måste multipliceras med k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Att glömma att 5, 12, 13 är en <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">pythagoreisk trippel</a> — vissa elever känner inte igen den som en sådan.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Att skriva sidorna i fel ordning, som 5, 13, 12, och placera hypotenusan i mitten.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Att bara använda kateterna för <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">omkretsen</a> — omkretsen inkluderar alla tre sidorna, inte bara de två kateterna.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Varje skalad version behåller samma vinklar och räta <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">vinkel</a>.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Area</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Exempel 2: Skalfaktor k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Area</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exempel 3: Skalfaktor k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ja. Varje <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a> är exakt dubbelt så stor som bastrippeln, så 10, 24, 26 är en 5-12-13-triangel med skalfaktorn k = 2.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Är 10, 24, 26 en 5-12-13-triangel?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Båda är <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">pythagoreiska tripplar</a>, men de har olika <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sid</a>förhållanden och vinklar. En <a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">3-4-5-triangel</a> har en brantare form, medan en 5-12-13-triangel är plattare eftersom den längre kateten är mycket större i förhållande till den kortare kateten.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Vad är skillnaden mellan en 3-4-5-triangel och en 5-12-13-triangel?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Ja. Med m = 3 och n = 2 får du a = 9 − 4 = 5, b = 2 × 3 × 2 = 12 och c = 9 + 4 = 13.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Kan trippeln 5-12-13 genereras med m- och n-formeln?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "När du har hittat de skalade sidorna är <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">arean</a> lika med hälften av produkten av de två kateterna. <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">Omkretsen</a> är helt enkelt summan av alla tre sidorna. Formen förblir densamma — endast storleken ändras.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Tryck på Återställ för att starta en ny beräkning.",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "Ett större k sträcker ut triangeln samtidigt som samma proportioner behålls. Att fördubbla k fyrdubblar <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">arean</a> men fördubblar bara <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">omkretsen</a>. Detta samband gäller för alla skalade trianglar.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "En skalad version behåller samma förhållande som 5k : 12k : 13k, så varje <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a> multipliceras med samma skalfaktor k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Att dubbelkontrollera <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">vinkel</a><a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">mått</a> för räta vinklar när sidorna är multiplar av 5, 12 och 13.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Att beräkna areor och omkretsar för geometriuppgifter som involverar <a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">pythagoreiska tripplar</a>.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Att planera bygglayouter som använder förhållandet 5-12-13 för noggrannhet.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Att utforska hur skalning av en triangel ändrar dess <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">area</a> och <a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">omkrets</a>.",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "Att använda olika skalfaktorer för olika <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sid</a>par — alla par måste dela samma k.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "Att dividera i fel riktning — k är lika med den likformiga <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sidan</a> dividerad med den ursprungliga sidan, inte tvärtom.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "Att anta att alla rätvinkliga trianglar är likformiga — två rätvinkliga trianglar är endast likformiga om de delar en andra <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">vinkel</a>.",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "Att glömma att den räta <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">vinkeln</a> räknas som en gemensam vinkel — om två rätvinkliga trianglar har ytterligare en lika spetsig vinkel är de likformiga.",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "Alla tre sidparen måste ha samma skalfaktor.",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{likformig <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a>} = \\text{ursprunglig sida} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{Den motsvarande <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sidan</a> på den likformiga triangeln är 20 enheter.}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "Exempel 2: Hitta en saknad likformig sida",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{ursprunglig <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a>} = \\frac{\\text{likformig sida}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{Den matchande <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sidan</a> på den ursprungliga triangeln är 5 enheter.}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "Exempel 3: Hitta den ursprungliga sidan",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "Ja. En skalfaktor som 0.5 innebär att den likformiga triangeln är hälften så stor som originalet. Vilket positivt tal som helst fungerar som skalfaktor.",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "Kan skalfaktorn vara ett decimaltal?",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "Nej. Två rätvinkliga trianglar är endast likformiga om de delar minst en spetsig <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">vinkel</a> utöver den räta vinkeln. Olika spetsiga vinklar innebär olika proportioner.",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "Är alla rätvinkliga trianglar likformiga med varandra?",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "Multiplicera motsvarande ursprungliga <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a> med k för att få den likformiga sidan. Eller dividera den likformiga sidan med k för att hitta originalet. Formeln beror på vilken sida du löser för.",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "Hur hittar jag en saknad sida med skalfaktorn?",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{likformig <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a>}}{\\text{ursprunglig sida}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{likformig <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a>} = \\text{ursprunglig sida} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{ursprunglig <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a>} = \\frac{\\text{likformig sida}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "Skalfaktorn verkar i en riktning. Om k = 2 är den likformiga triangeln dubbelt så stor. För att gå åt andra hållet dividerar du med k i stället för att multiplicera. Formlerna täcker alla tre situationerna: att hitta k, att hitta en skalad <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a> och att hitta den ursprungliga sidan.",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "Klicka på Återställ för att rensa alla fält.",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = likformig sida / ursprunglig sida",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "likformig sida = ursprunglig sida × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "ursprunglig sida = likformig sida / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = likformig sida / ursprunglig sida",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "När du hittar en <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">saknad sida</a> är resultatet längden på motsvarande sida på den andra triangeln. Detta fungerar eftersom likformiga trianglar upprätthåller konstanta proportioner över alla par av matchande sidor.",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "Om skalfaktorn är k är varje <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sida</a> på den likformiga triangeln lika med dess motsvarande ursprungliga sida multiplicerad med k.",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "Att beräkna mått för skalmodeller eller arkitektritningar.",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "Att lösa proportionsproblem på standardiserade matematikprov.",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "Att jämföra skugg<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">mått</a> för att uppskatta höjden på höga objekt.",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "Att omvandla mellan <a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">mått</a> på ritningar och faktiska byggnadsmått.",
    "mode": "fill"
   }
  ]
 },
 "zh": {
  "pythagorean-triples-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "忘记在相加前将每条<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>平方，检查 a + b = c 而不是 a² + b² = c²。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "将等式写成 a² + c² = b² 而不是 a² + b² = c²。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "使用非整数值并期望得到勾股数，勾股数必须是整数。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "生成时设置 m 小于或等于 n，m 必须严格大于 n。",
    "mode": "fill"
   },
   {
    "path": "example[0].steps[4]",
    "value": "\\text{结果：3, 4, 5 是有效的勾股数。}",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{结果：3, 4, 5}",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a^2 + b^2 = c^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "7^2 + 24^2 = 25^2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "49 + 576 = 625",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "625 = 625 \\quad \\checkmark",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "\\text{结果：7, 24, 25 是有效的勾股数。}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "示例 3：检查 7, 24, 25 是否为勾股数",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "不能。勾股数定义为仅由整数组成的集合。小数值可能满足 a² + b² = c²，但它们不被视为勾股数。",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "小数能构成勾股数吗？",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "是的。检查：5² + 12² = 25 + 144 = 169 = 13²。由于三者都是整数且等式成立，它是有效的勾股数。",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "5, 12, 13 是勾股数吗？",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">计算器</a>检查 a² + b² 是否恰好等于 c²。如果有任何差异，即使是舍入造成的小差异，这些值也不构成勾股数。确保 c 是最大值。",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "为什么<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">计算器</a>说我的值不是勾股数？",
    "mode": "fill"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "您还可以使用两个正整数 m 和 n 生成勾股数，其中 m 大于 n。公式 a = m² − n², b = 2mn, c = m² + n² 始终会产生有效的勾股数。当 m 和 n 没有公因数且不都是奇数时，结果称为本原勾股数。",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "点击重置清除所有字段并重新开始。",
    "mode": "fill"
   },
   {
    "path": "resultMeaning[1]",
    "value": "生成勾股数时，<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">计算器</a>使用 m 和 n 公式产生三个整数。这些数字保证构成直角三角形。如果 m 和 n 没有公因数且不都是奇数，该勾股数是本原的，意味着它不能进一步简化。",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "确切的比值因勾股数而异，但每个有效的勾股数都满足 a² + b² = c²，其中 c 为斜边。",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "验证实测的<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边长</a>是否构成真正的直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>。",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "为数学竞赛和练习题生成勾股数。",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "建立勾股数参考列表用于学习。",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "确认依赖 3-4-5 法则或类似模式的建筑<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">测量值</a>。",
    "mode": "fill"
   }
  ],
  "3-4-5-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "将 5 视为直角边而不是斜边，5 始终是最长的<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "认为只有 3, 4, 5 的精确值才有效，任何倍数如 6, 8, 10 或 15, 20, 25 也有效。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "混淆<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>和<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周长</a>公式，面积使用乘法和除以 2，周长使用加法。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "使用负数或零作为比例因子，k 必须大于 0。",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "将三条边都乘以相同的 k，以保持直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>。",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 3k = 3 \\times 5 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 4k = 4 \\times 5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 5k = 5 \\times 5 = 25",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 20 + 25 = 60",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "示例 2：比例因子 k = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 3k = 3 \\times 0.5 = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 4k = 4 \\times 0.5 = 2",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 5k = 5 \\times 0.5 = 2.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 1.5 + 2 + 2.5 = 6",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "示例 3：比例因子 k = 0.5",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "是的。将每条<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>除以 2 得到 3, 4, 5。因此 6, 8, 10 是以 k = 2 缩放的 3 4 5 三角形。",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "6, 8, 10 是 3 4 5 三角形吗？",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "可以。沿一条<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>测量 3 单位，沿另一条测量 4 单位。如果这些端点之间的对角线恰好测得 5 单位，则该转角是直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>。",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "我可以使用 3 4 5 法则检查直角吗？",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "基础<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周长</a>是 3 + 4 + 5 = 12 单位。对于任何缩放版本，周长是 12k，其中 k 是比例因子。",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "3 4 5 三角形的周长是多少？",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "缩放后，<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>是两条直角边乘积的一半，<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周长</a>是三条边之和。因为比值永不改变，任何比例的 3 4 5 三角形始终具有相同的角度。",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "点击重置清除输入并重新开始。",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>告诉您三角形内部的空间（以平方单位计）。<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周长</a>给您外部周围的总长度。随着 k 增大，两个值都会增长，但三角形始终保持其直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>。",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "缩放版本保持与 3k : 4k : 5k 相同的比值，因此斜边始终是与 5k 对应的<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>。",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "解决涉及 3 4 5 三角形缩放的几何作业。",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "设计需要精确 90 度转角的布局或平面图。",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "无需完整的直角三角形求解器即可快速估算面积和周长。",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "教学生缩放如何在<a href=\"/similar-right-triangles-calculator/\" class=\"text-primary hover:underline\">相似三角形</a>中保持角度不变。",
    "mode": "fill"
   }
  ],
  "5-12-13-triangle-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "只缩放一条或两条边而不是全部三条，每条<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>都必须乘以 k。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "忘记 5, 12, 13 是<a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">勾股数</a>，一些学生没有认识到它是一个勾股数。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "以错误顺序写边，如 5, 13, 12，并将斜边放在中间。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "周长只使用直角边，<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周长</a>包括全部三条边，而不仅仅是两条直角边。",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "每个缩放版本都保持相同的角度和直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>。",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "a = 5k = 5 \\times 3 = 15",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "b = 12k = 12 \\times 3 = 36",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[2]",
    "value": "c = 13k = 13 \\times 3 = 39",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[4]",
    "value": "P = a + b + c = 15 + 36 + 39 = 90",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "示例 2：比例因子 k = 3",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "a = 5k = 5 \\times 10 = 50",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "b = 12k = 12 \\times 10 = 120",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[2]",
    "value": "c = 13k = 13 \\times 10 = 130",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[4]",
    "value": "P = a + b + c = 50 + 120 + 130 = 300",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "示例 3：比例因子 k = 10",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "是的。每条<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>恰好是基础勾股数的两倍，因此 10, 24, 26 是比例因子 k = 2 的 5 12 13 三角形。",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "10, 24, 26 是 5 12 13 三角形吗？",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "两者都是<a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">勾股数</a>，但它们有不同的<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>比和角度。<a href=\"/3-4-5-triangle-calculator/\" class=\"text-primary hover:underline\">3 4 5 三角形</a>形状更陡，而 5 12 13 三角形更平，因为较长的直角边相对于较短的直角边大得多。",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "3 4 5 三角形和 5 12 13 三角形有什么区别？",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "可以。使用 m = 3 和 n = 2 得到 a = 9 − 4 = 5, b = 2 × 3 × 2 = 12, c = 9 + 4 = 13。",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "5 12 13 勾股数可以用 m 和 n 公式生成吗？",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[3]",
    "value": "\\text{<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>} = \\frac{a \\times b}{2}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "一旦求出缩放后的边，<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>等于两条直角边乘积的一半。<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周长</a>就是三条边之和。形状保持不变，只有大小改变。",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "按重置开始新的计算。",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[3]",
    "value": "<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a> = (a × b) / 2",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "较大的 k 在保持相同比例的同时拉伸三角形。将 k 加倍会使<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>变为四倍，但<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周长</a>只加倍。这种关系对所有缩放三角形都成立。",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "缩放版本保持与 5k : 12k : 13k 相同的比值，因此每条<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>都乘以相同的比例因子 k。",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "当边是 5, 12 和 13 的倍数时，复查直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a><a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">测量值</a>。",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "计算涉及<a href=\"/pythagorean-triples-calculator/\" class=\"text-primary hover:underline\">勾股数</a>的几何作业的面积和周长。",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "规划使用 5 12 13 比值以确保准确性的建筑布局。",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "探索缩放三角形如何改变其<a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">面积</a>和<a href=\"/right-triangle-perimeter-calculator/\" class=\"text-primary hover:underline\">周长</a>。",
    "mode": "fill"
   }
  ],
  "similar-right-triangles-calculator": [
   {
    "path": "commonMistakes[1]",
    "value": "对不同的<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>对使用不同的比例因子，所有边对必须共享相同的 k。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[2]",
    "value": "除法方向错误，k 等于相似<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>除以原边，而不是相反。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[3]",
    "value": "假设所有直角三角形都相似，两个直角三角形只有在共享第二个<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>时才相似。",
    "mode": "fill"
   },
   {
    "path": "commonMistakes[4]",
    "value": "忘记直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>算作共享角，如果两个直角三角形再有一个相等的锐角，它们就是相似的。",
    "mode": "fill"
   },
   {
    "path": "diagram.notes[4]",
    "value": "三对边都必须具有相同的比例因子。",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[0]",
    "value": "\\text{相似<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>} = \\text{原边} \\times k = 8 \\times 2.5 = 20",
    "mode": "fill"
   },
   {
    "path": "example[1].steps[1]",
    "value": "\\text{相似三角形上对应的<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>为 20 单位。}",
    "mode": "fill"
   },
   {
    "path": "example[1].title",
    "value": "示例 2：求缺失的相似边",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[0]",
    "value": "\\text{原<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>} = \\frac{\\text{相似边}}{k} = \\frac{15}{3} = 5",
    "mode": "fill"
   },
   {
    "path": "example[2].steps[1]",
    "value": "\\text{原三角形上对应的<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>为 5 单位。}",
    "mode": "fill"
   },
   {
    "path": "example[2].title",
    "value": "示例 3：求原边",
    "mode": "fill"
   },
   {
    "path": "faqs[3].answer",
    "value": "可以。比例因子如 0.5 意味着相似三角形是原来的一半大小。任何正数都可以作为比例因子。",
    "mode": "fill"
   },
   {
    "path": "faqs[3].question",
    "value": "比例因子可以是小数吗？",
    "mode": "fill"
   },
   {
    "path": "faqs[4].answer",
    "value": "不。两个直角三角形只有在除直角外还共享至少一个锐<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>时才相似。不同的锐角意味着不同的比例。",
    "mode": "fill"
   },
   {
    "path": "faqs[4].question",
    "value": "所有直角三角形都彼此相似吗？",
    "mode": "fill"
   },
   {
    "path": "faqs[5].answer",
    "value": "将对应的原<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>乘以 k 得到相似边。或将相似边除以 k 求原边。公式取决于您要求解的边。",
    "mode": "fill"
   },
   {
    "path": "faqs[5].question",
    "value": "如何使用比例因子求缺失边？",
    "mode": "fill"
   },
   {
    "path": "formulaSection.formulas[0]",
    "value": "k = \\frac{\\text{相似<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>}}{\\text{原边}}",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[1]",
    "value": "\\text{相似<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>} = \\text{原边} \\times k",
    "mode": "set"
   },
   {
    "path": "formulaSection.formulas[2]",
    "value": "\\text{原<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>} = \\frac{\\text{相似边}}{k}",
    "mode": "set"
   },
   {
    "path": "formulaSection.paragraphs[1]",
    "value": "比例因子在一个方向上起作用。如果 k = 2，相似三角形是原来的两倍大。要反向操作，除以 k 而不是乘以 k。公式涵盖三种情况：求 k、求缩放后的<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>、求原边。",
    "mode": "fill"
   },
   {
    "path": "howToUse[4]",
    "value": "点击重置清除所有字段。",
    "mode": "fill"
   },
   {
    "path": "modes[0].formulas[0]",
    "value": "k = 相似边 / 原边",
    "mode": "set"
   },
   {
    "path": "modes[1].formulas[0]",
    "value": "相似边 = 原边 × k",
    "mode": "set"
   },
   {
    "path": "modes[2].formulas[0]",
    "value": "原边 = 相似边 / k",
    "mode": "set"
   },
   {
    "path": "quickSummary.cards[2].value",
    "value": "k = 相似边 / 原边",
    "mode": "set"
   },
   {
    "path": "resultMeaning[1]",
    "value": "当您找到<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">缺失边</a>时，结果是另一个三角形上对应边的长度。这之所以有效，是因为相似三角形在所有对应边对中保持恒定的比例。",
    "mode": "fill"
   },
   {
    "path": "sideRatio[1]",
    "value": "如果比例因子为 k，相似三角形上的每条<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">边</a>等于其对应的原边乘以 k。",
    "mode": "fill"
   },
   {
    "path": "useCases[1]",
    "value": "计算比例模型或建筑图纸的尺寸。",
    "mode": "fill"
   },
   {
    "path": "useCases[2]",
    "value": "解决标准化数学考试中的比例问题。",
    "mode": "fill"
   },
   {
    "path": "useCases[3]",
    "value": "比较影子<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">测量值</a>以估算高大物体的高度。",
    "mode": "fill"
   },
   {
    "path": "useCases[4]",
    "value": "在蓝图<a href=\"/right-triangle-measurements-calculator/\" class=\"text-primary hover:underline\">测量值</a>和实际建筑尺寸之间换算。",
    "mode": "fill"
   }
  ]
 }
};
