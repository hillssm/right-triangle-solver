import type { FocusedAltitudeCalculatorPage } from 'src/data/focusedAltitudeCalculatorPages';
import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';
import type { Locale } from 'theme/i18n/locales';

type RuntimeCopy = {
  calculationComplete: string;
  unableToCalculate: string;
  fixErrors: string;
  errorPrefix: string;
  stepLabels: {
    formula: string;
    substitution: string;
    answer: string;
    explanation: string;
    detail: string;
  };
  altitudeFromSidesTitle: string;
  altitudeFromSidesDescription: string;
  altitudeFromProjectionsTitle: string;
  altitudeFromProjectionsDescription: string;
};

type PageCopy = {
  title: string;
  metaDescription: string;
  calculatorHeading: string;
  formulaTitle: string;
  formulaDescription: string;
  outputLabel: string;
  intro: string;
  purpose: string;
  howItWorksHeading: string;
  summaryH2: string;
  summaryIntro: string;
  cards: {
    known: string;
    finds: string;
    formula: string;
    bestFor: string;
  };
  diagramH2: string;
  diagramIntro: string;
  diagramCaption: string;
  sideA: {
    label: string;
    description: string;
  };
  sideB: {
    label: string;
    description: string;
  };
  sideC: {
    label: string;
    description: string;
  };
  result: {
    label: string;
    description: string;
  };
  notes: string[];
  formulaH2: string;
  formulaParagraphs: string[];
  howToH2: string;
  howToSteps: string[];
  exampleH2: string;
  exampleIntro: string;
  exampleAnswer: string;
  resultMeaning: string[];
  whenIntro: string;
  whenItems: string[];
  whyH2: string;
  whyParagraphs: string[];
  mistakesIntro: string;
  mistakeItems: string[];
  additionalH2: string;
  additionalIntro: string;
  additionalItems: string[];
  relatedLabels: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

type AltitudeLocaleCopy = {
  find: string;
  badge: string;
  parentBreadcrumbLabel: string;
  relatedHeading: string;
  faqHeading: string;
  faqDescription: string;
  labels: {
    knownValues: string;
    finds: string;
    mainFormula: string;
    bestFor: string;
    diagramKey: string;
    resultMeaningH2: string;
    whenUseH2: string;
    commonMistakesH2: string;
    commonSituations: string;
    typicalSituations: string;
  };
  messages: {
    positive: string;
    invalid: string;
    hypotenuseLongest: string;
    invalidTriangle: string;
  };
  fields: {
    legA: string;
    legB: string;
    hypotenuseC: string;
    altitudeH: string;
    projectionP: string;
    projectionQ: string;
  };
  runtime: RuntimeCopy;
  sides: PageCopy;
  projections: PageCopy;
};

type TranslationSource = AltitudeLocaleCopy | SimpleCopyInput;

const TRANSLATIONS: Partial<Record<Locale, TranslationSource>> = {
  hi: {
    find: "निकालें",
    badge: "ऊँचाई कैलकुलेटर",
    parentBreadcrumbLabel: "समकोण त्रिभुज ऊँचाई कैलकुलेटर",
    relatedHeading: "संबंधित कैलकुलेटर",
    faqHeading: "अक्सर पूछे जाने वाले प्रश्न",
    faqDescription: "समकोण त्रिभुज की ऊँचाई के बारे में सामान्य प्रश्नों के उत्तर।",
    labels: {
      knownValues: "ज्ञात मान",
      finds: "निकालता है",
      mainFormula: "मुख्य सूत्र",
      bestFor: "सबसे उपयोगी",
      diagramKey: "आरेख कुंजी",
      resultMeaningH2: "परिणाम का अर्थ",
      whenUseH2: "इस कैलकुलेटर का उपयोग कब करें",
      commonMistakesH2: "सामान्य गलतियाँ",
      commonSituations: "सामान्य स्थितियाँ:",
      typicalSituations: "सामान्य उपयोग:"
    },
    messages: {
      positive: "कृपया धनात्मक मान दर्ज करें।",
      invalid: "कृपया मान्य मान दर्ज करें।",
      hypotenuseLongest: "कर्ण c सबसे लंबी भुजा होना चाहिए।",
      invalidTriangle: "ये भुजा लंबाइयाँ वैध समकोण त्रिभुज नहीं बना सकतीं।"
    },
    fields: {
      legA: "भुजा a",
      legB: "भुजा b",
      hypotenuseC: "कर्ण c",
      altitudeH: "ऊँचाई h",
      projectionP: "प्रक्षेप p",
      projectionQ: "प्रक्षेप q"
    },
    runtime: {
      calculationComplete: "गणना पूरी हुई।",
      unableToCalculate: "गणना नहीं हो सकी।",
      fixErrors: "कृपया ऊपर दिए गए फ़ील्ड की त्रुटियाँ ठीक करें।",
      errorPrefix: "त्रुटि",
      stepLabels: {
        formula: "सूत्र",
        substitution: "प्रतिस्थापन",
        answer: "उत्तर",
        explanation: "व्याख्या",
        detail: "विवरण"
      },
      altitudeFromSidesTitle: "ऊँचाई h निकालें",
      altitudeFromSidesDescription: "भुजाओं के गुणनफल अनुपात से कर्ण तक की ऊँचाई निकालें।",
      altitudeFromProjectionsTitle: "ऊँचाई h निकालें",
      altitudeFromProjectionsDescription: "कर्ण के दोनों प्रक्षेपों का ज्यामितीय माध्य लें।"
    },
    sides: {
      title: "भुजाओं से समकोण त्रिभुज ऊँचाई कैलकुलेटर",
      metaDescription: "भुजा a, भुजा b और कर्ण c से ऊँचाई h निकालें। सूत्र, चरण और उदाहरण सहित।",
      calculatorHeading: "भुजाओं से ऊँचाई h निकालें",
      formulaTitle: "भुजाओं से ऊँचाई",
      formulaDescription: "भुजा a, भुजा b और कर्ण c से ऊँचाई h निकालता है।",
      outputLabel: "ऊँचाई h",
      intro: "जब समकोण त्रिभुज की दोनों भुजाएँ और कर्ण ज्ञात हों, तो कर्ण पर खींची गई ऊँचाई एक सीधे सूत्र से मिलती है।",
      purpose: "भुजा a, भुजा b और कर्ण c दर्ज करें। कैलकुलेटर h = (a × b) / c लगाकर ऊँचाई h और समाधान के चरण दिखाता है।",
      howItWorksHeading: "यह भुजाओं से ऊँचाई कैलकुलेटर कैसे काम करता है",
      summaryH2: "यह कैलकुलेटर क्या हल करता है",
      summaryIntro: "यह पृष्ठ उस स्थिति के लिए है जहाँ a, b और c ज्ञात हैं और आपको कर्ण तक लंबवत ऊँचाई h चाहिए।",
      cards: {
        known: "भुजा a, भुजा b और कर्ण c",
        finds: "कर्ण तक ऊँचाई h",
        formula: "h = (a × b) / c",
        bestFor: "ज्यामिति होमवर्क, क्षेत्रफल जाँच, प्रमाण और निर्माण गणना"
      },
      diagramH2: "त्रिभुज आरेख: भुजाओं से ऊँचाई",
      diagramIntro: "आरेख में a और b समकोण बनाते हैं, c कर्ण है, और h समकोण शीर्ष से कर्ण पर लंबवत गिरती है।",
      diagramCaption: "भुजा a, भुजा b, कर्ण c और ऊँचाई h वाला समकोण त्रिभुज आरेख।",
      sideA: {
        label: "a = पहली भुजा",
        description: "समकोण बनाने वाली दो भुजाओं में से एक। यह ऊँचाई सूत्र में गुणनखंड है।"
      },
      sideB: {
        label: "b = दूसरी भुजा",
        description: "समकोण बनाने वाली दूसरी भुजा। इसे a से गुणा किया जाता है।"
      },
      sideC: {
        label: "c = कर्ण",
        description: "समकोण के सामने सबसे लंबी भुजा। h इसी कर्ण पर खींची जाती है।"
      },
      result: {
        label: "h = कर्ण तक ऊँचाई",
        description: "समकोण शीर्ष से कर्ण तक लंबवत दूरी।"
      },
      notes: [
        "तीनों माप एक ही इकाई में होने चाहिए।",
        "c हमेशा कर्ण और सबसे लंबी भुजा है।",
        "ऊँचाई h प्रत्येक भुजा से छोटी होती है।"
      ],
      formulaH2: "भुजाओं से समकोण त्रिभुज ऊँचाई सूत्र",
      formulaParagraphs: [
        "इस विधि का आधार यह है कि उसी समकोण त्रिभुज का क्षेत्रफल दो तरीकों से लिखा जा सकता है।",
        "भुजाओं से Area = (a × b) / 2 और कर्ण को आधार मानकर Area = (c × h) / 2 होता है।",
        "दोनों क्षेत्रफल बराबर हैं, इसलिए हल करने पर h = (a × b) / c मिलता है।"
      ],
      howToH2: "इस कैलकुलेटर का उपयोग कैसे करें",
      howToSteps: [
        "समकोण बनाने वाली दोनों भुजाओं को a और b के रूप में पहचानें।",
        "कर्ण c पहचानें। यह समकोण के सामने सबसे लंबी भुजा है।",
        "सुनिश्चित करें कि सभी माप एक ही इकाई में हैं।",
        "पहले फ़ील्ड में भुजा a दर्ज करें।",
        "दूसरे फ़ील्ड में भुजा b दर्ज करें।",
        "तीसरे फ़ील्ड में कर्ण c दर्ज करें।",
        "Calculate दबाएँ और ऊँचाई h के चरण देखें।"
      ],
      exampleH2: "चरण-दर-चरण उदाहरण: 6-8-10 त्रिभुज",
      exampleIntro: "मान लें a = 6, b = 8 और c = 10 है।",
      exampleAnswer: "कर्ण तक ऊँचाई 4.8 इकाई है। जाँच: (6 × 8) / 2 = 24 और (10 × 4.8) / 2 = 24।",
      resultMeaning: [
        "h समकोण शीर्ष से कर्ण तक की सबसे छोटी दूरी है।",
        "यदि कर्ण को आधार माना जाए, तो h उसी त्रिभुज की ऊँचाई है।"
      ],
      whenIntro: "जब तीनों भुजाएँ पहले से ज्ञात हों और ऊँचाई चाहिए, तब यह विधि सबसे सीधी है।",
      whenItems: [
        "प्रश्न में तीनों भुजाएँ दी गई हों।",
        "Area = (c × h) / 2 से क्षेत्रफल जाँचना हो।",
        "किसी त्रिकोणीय सहारे की लंबवत ऊँचाई चाहिए।",
        "ज्यामितीय माध्य संबंधों का प्रमाण कर रहे हों।"
      ],
      whyH2: "यह सूत्र क्यों काम करता है",
      whyParagraphs: [
        "हर त्रिभुज का क्षेत्रफल एक ही होता है, भले ही आधार-ऊँचाई जोड़ी बदले।",
        "Area = (a × b) / 2 और Area = (c × h) / 2 को बराबर रखकर h के लिए हल करने पर सूत्र मिलता है।"
      ],
      mistakesIntro: "सूत्र छोटा है, लेकिन गलत भुजा लगाने से उत्तर गलत हो जाता है।",
      mistakeItems: [
        "c को भुजा मान लेना। c हमेशा कर्ण है।",
        "ऐसा c दर्ज करना जो a या b से छोटा हो।",
        "a × b को c से विभाजित करना भूलना।",
        "इकाइयों को मिलाना, जैसे cm और m साथ में।",
        "h को मूल भुजा a या b समझ लेना।"
      ],
      additionalH2: "अतिरिक्त उदाहरण: 5-12-13 त्रिभुज",
      additionalIntro: "5-12-13 एक सामान्य समकोण त्रिभुज है।",
      additionalItems: [
        "h = (a × b) / c",
        "h = (5 × 12) / 13",
        "h = 60 / 13",
        "h ≈ 4.615 इकाई"
      ],
      relatedLabels: [
        "समकोण त्रिभुज ऊँचाई कैलकुलेटर",
        "प्रक्षेपों से समकोण त्रिभुज ऊँचाई कैलकुलेटर",
        "समकोण त्रिभुज भुजा कैलकुलेटर",
        "ऊँचाई से समकोण त्रिभुज क्षेत्रफल कैलकुलेटर",
        "समकोण त्रिभुज क्षेत्रफल कैलकुलेटर"
      ],
      faqs: [
        {
          question: "भुजाओं से ऊँचाई का सूत्र क्या है?",
          answer: "सूत्र h = (a × b) / c है, जहाँ a और b भुजाएँ हैं और c कर्ण है।"
        },
        {
          question: "सूत्र में भुजाओं का गुणनफल क्यों आता है?",
          answer: "क्योंकि क्षेत्रफल (a × b) / 2 और (c × h) / 2 दोनों तरह से समान होता है।"
        },
        {
          question: "ऊँचाई h क्या दर्शाती है?",
          answer: "यह समकोण शीर्ष से कर्ण तक लंबवत दूरी है।"
        },
        {
          question: "क्या कोण जानना ज़रूरी है?",
          answer: "नहीं। यह सूत्र केवल a, b और c का उपयोग करता है।"
        },
        {
          question: "क्या h किसी भुजा से बड़ी हो सकती है?",
          answer: "नहीं। कर्ण तक की ऊँचाई दोनों भुजाओं से छोटी होती है।"
        }
      ]
    },
    projections: {
      title: "प्रक्षेपों से समकोण त्रिभुज ऊँचाई कैलकुलेटर",
      metaDescription: "कर्ण के प्रक्षेप p और q से ऊँचाई h निकालें। h² = p × q और h = √(p × q) के चरण देखें।",
      calculatorHeading: "प्रक्षेपों से ऊँचाई h निकालें",
      formulaTitle: "प्रक्षेपों से ऊँचाई",
      formulaDescription: "कर्ण के प्रक्षेप p और q से ऊँचाई h निकालता है।",
      outputLabel: "ऊँचाई h",
      intro: "जब समकोण शीर्ष से कर्ण पर ऊँचाई गिरती है, तो कर्ण p और q नामक दो प्रक्षेपों में बँट जाता है।",
      purpose: "प्रक्षेप p और q दर्ज करें। कैलकुलेटर h² = p × q और h = √(p × q) से ऊँचाई h निकालता है।",
      howItWorksHeading: "यह प्रक्षेपों से ऊँचाई कैलकुलेटर कैसे काम करता है",
      summaryH2: "यह कैलकुलेटर क्या हल करता है",
      summaryIntro: "यह पृष्ठ तब उपयोगी है जब कर्ण के दोनों खंड p और q ज्ञात हों और ऊँचाई h चाहिए।",
      cards: {
        known: "प्रक्षेप p और प्रक्षेप q",
        finds: "कर्ण तक ऊँचाई h",
        formula: "h = √(p × q)",
        bestFor: "ज्यामितीय माध्य, समान त्रिभुज प्रमाण और प्रक्षेप अभ्यास"
      },
      diagramH2: "त्रिभुज आरेख: प्रक्षेपों से ऊँचाई",
      diagramIntro: "आरेख में h कर्ण को दो खंडों p और q में बाँटती है। h इन्हीं दो प्रक्षेपों का ज्यामितीय माध्य है।",
      diagramCaption: "कर्ण c को p और q में बाँटती ऊँचाई h वाला समकोण त्रिभुज आरेख।",
      sideA: {
        label: "a = पहली भुजा",
        description: "यह सूत्र में सीधे नहीं आती, लेकिन a² = p × c से जुड़ी है।"
      },
      sideB: {
        label: "b = दूसरी भुजा",
        description: "यह q से b² = q × c संबंध द्वारा जुड़ी है।"
      },
      sideC: {
        label: "c = कर्ण (= p + q)",
        description: "कर्ण c दोनों प्रक्षेपों का योग है।"
      },
      result: {
        label: "h = p और q का ज्यामितीय माध्य",
        description: "ऊँचाई h, p × q के वर्गमूल के बराबर है।"
      },
      notes: [
        "p और q दोनों धनात्मक होने चाहिए।",
        "p + q = c होता है, जहाँ c कर्ण है।",
        "p और q की क्रम-व्यवस्था उत्तर नहीं बदलती।"
      ],
      formulaH2: "प्रक्षेपों से समकोण त्रिभुज ऊँचाई सूत्र",
      formulaParagraphs: [
        "ऊँचाई कर्ण को दो भागों में बाँटती है और मूल त्रिभुज के अंदर दो छोटे समकोण त्रिभुज बनाती है।",
        "समानता से h² = p × q मिलता है। इसलिए ऊँचाई p और q का ज्यामितीय माध्य है।",
        "दोनों तरफ वर्गमूल लेने पर h = √(p × q) मिलता है।"
      ],
      howToH2: "इस कैलकुलेटर का उपयोग कैसे करें",
      howToSteps: [
        "कर्ण पर बने दोनों प्रक्षेप पहचानें।",
        "एक खंड को p और दूसरे को q नाम दें। क्रम बदलने से उत्तर नहीं बदलता।",
        "दोनों मान एक ही इकाई में रखें।",
        "पहले फ़ील्ड में p दर्ज करें।",
        "दूसरे फ़ील्ड में q दर्ज करें।",
        "Calculate दबाएँ और ऊँचाई h के चरण देखें।"
      ],
      exampleH2: "चरण-दर-चरण उदाहरण: p = 3.6 और q = 6.4",
      exampleIntro: "मान लें कर्ण p = 3.6 और q = 6.4 में विभाजित है।",
      exampleAnswer: "ऊँचाई 4.8 इकाई है। यहाँ c = p + q = 10 और 6-8-10 त्रिभुज में h = (6 × 8) / 10 = 4.8 मिलता है।",
      resultMeaning: [
        "h समकोण शीर्ष से कर्ण तक लंबवत दूरी है।",
        "यह बताता है कि कर्ण को आधार मानने पर त्रिभुज कितना ऊँचा है।"
      ],
      whenIntro: "जब आपको कर्ण के दोनों खंड दिए गए हों, लेकिन पूरी भुजाएँ नहीं, तब यह कैलकुलेटर उपयोगी है।",
      whenItems: [
        "वर्कशीट में p और q सीधे दिए हों।",
        "ज्यामितीय माध्य संबंध पर काम कर रहे हों।",
        "लंब के पाद से दोनों दिशाओं की दूरी मापी गई हो।",
        "पूरी भुजाएँ निकाले बिना h चाहिए।"
      ],
      whyH2: "यह सूत्र क्यों काम करता है: ज्यामितीय माध्य",
      whyParagraphs: [
        "ऊँचाई से बने दोनों छोटे त्रिभुज मूल त्रिभुज के समान होते हैं।",
        "उनकी समानता से h / p = q / h मिलता है, इसलिए h² = p × q।"
      ],
      mistakesIntro: "सबसे आम गलती p और q को गलत भूमिका देना है।",
      mistakeItems: [
        "p और q को जोड़ देना। p + q कर्ण c देता है, h नहीं।",
        "वर्गमूल लेना भूलना। p × q, h² है।",
        "प्रक्षेपों को भुजाएँ समझ लेना।",
        "शून्य या ऋणात्मक मान दर्ज करना।",
        "h² को अंतिम ऊँचाई मान लेना।"
      ],
      additionalH2: "अतिरिक्त उदाहरण: बराबर प्रक्षेप",
      additionalIntro: "45-45-90 त्रिभुज में ऊँचाई कर्ण को बराबर भागों में बाँटती है।",
      additionalItems: [
        "यदि p = 5 और q = 5, तो h² = 5 × 5 = 25",
        "h = √25 = 5 इकाई",
        "इस स्थिति में h कर्ण के आधे के बराबर है।",
        "p = q होने पर दिए गए कर्ण के लिए ऊँचाई अधिकतम होती है।"
      ],
      relatedLabels: [
        "समकोण त्रिभुज ऊँचाई कैलकुलेटर",
        "भुजाओं से समकोण त्रिभुज ऊँचाई कैलकुलेटर",
        "समकोण त्रिभुज प्रक्षेप कैलकुलेटर",
        "ऊँचाई से समकोण त्रिभुज क्षेत्रफल कैलकुलेटर",
        "समकोण त्रिभुज भुजा कैलकुलेटर"
      ],
      faqs: [
        {
          question: "प्रक्षेपों से ऊँचाई का सूत्र क्या है?",
          answer: "h = √(p × q), और समान रूप से h² = p × q।"
        },
        {
          question: "p और q क्या हैं?",
          answer: "वे कर्ण के वे दो खंड हैं जो ऊँचाई के पाद से बनते हैं।"
        },
        {
          question: "p + q किसके बराबर है?",
          answer: "p + q = c, जहाँ c पूरा कर्ण है।"
        },
        {
          question: "इसे ज्यामितीय माध्य क्यों कहते हैं?",
          answer: "क्योंकि h दो संख्याओं p और q के गुणनफल के वर्गमूल के बराबर है।"
        },
        {
          question: "क्या p और q से भुजाएँ निकाली जा सकती हैं?",
          answer: "हाँ। पहले c = p + q निकालें, फिर a = √(p × c) और b = √(q × c)।"
        }
      ]
    }
  },
  es: {
    find: "Hallar",
    badge: "Calculadora de altura",
    parentBreadcrumbLabel: "Calculadora de altura de triángulo rectángulo",
    relatedHeading: "Calculadoras relacionadas",
    faqHeading: "Preguntas frecuentes",
    faqDescription: "Respuestas a las preguntas más comunes sobre la altura de un triángulo rectángulo.",
    labels: {
      knownValues: "Valores conocidos",
      finds: "Calcula",
      mainFormula: "Fórmula principal",
      bestFor: "Ideal para",
      diagramKey: "Clave del diagrama",
      resultMeaningH2: "Qué significa el resultado",
      whenUseH2: "Cuándo usar esta calculadora",
      commonMistakesH2: "Errores comunes",
      commonSituations: "Situaciones comunes:",
      typicalSituations: "Usos típicos:"
    },
    messages: {
      positive: "Introduce valores positivos.",
      invalid: "Introduce valores válidos.",
      hypotenuseLongest: "La hipotenusa c debe ser el lado más largo.",
      invalidTriangle: "Estas longitudes pueden no formar un triángulo rectángulo válido."
    },
    fields: {
      legA: "Cateto a",
      legB: "Cateto b",
      hypotenuseC: "Hipotenusa c",
      altitudeH: "Altura h",
      projectionP: "Proyección p",
      projectionQ: "Proyección q"
    },
    runtime: {
      calculationComplete: "Cálculo completo.",
      unableToCalculate: "No se pudo calcular.",
      fixErrors: "Corrige los errores de los campos anteriores.",
      errorPrefix: "Error",
      stepLabels: {
        formula: "Fórmula",
        substitution: "Sustitución",
        answer: "Respuesta",
        explanation: "Explicación",
        detail: "Detalle"
      },
      altitudeFromSidesTitle: "Hallar la altura h",
      altitudeFromSidesDescription: "Calcula la altura a la hipotenusa usando el producto de los catetos.",
      altitudeFromProjectionsTitle: "Hallar la altura h",
      altitudeFromProjectionsDescription: "Toma la media geométrica de los dos segmentos de la hipotenusa."
    },
    sides: {
      title: "Calculadora de altura de triángulo rectángulo desde lados",
      metaDescription: "Calcula la altura h desde el cateto a, el cateto b y la hipotenusa c, con fórmula, pasos y ejemplos.",
      calculatorHeading: "Calcular altura h desde lados",
      formulaTitle: "Altura desde lados",
      formulaDescription: "Calcula la altura h desde el cateto a, el cateto b y la hipotenusa c.",
      outputLabel: "Altura h",
      intro: "Si conoces los tres lados de un triángulo rectángulo, la altura a la hipotenusa se obtiene con una sola relación.",
      purpose: "Introduce el cateto a, el cateto b y la hipotenusa c. La calculadora aplica h = (a × b) / c y muestra el resultado paso a paso.",
      howItWorksHeading: "Cómo funciona esta calculadora de altura desde lados",
      summaryH2: "Qué resuelve esta calculadora",
      summaryIntro: "Usa esta página cuando conozcas a, b y c y necesites la distancia perpendicular desde el ángulo recto hasta la hipotenusa.",
      cards: {
        known: "Cateto a, cateto b e hipotenusa c",
        finds: "Altura h a la hipotenusa",
        formula: "h = (a × b) / c",
        bestFor: "Tareas de geometría, comprobaciones de área, demostraciones y medidas de construcción"
      },
      diagramH2: "Diagrama del triángulo: altura desde lados",
      diagramIntro: "El diagrama muestra a y b formando el ángulo recto, c como hipotenusa y h bajando perpendicularmente hasta c.",
      diagramCaption: "Diagrama de triángulo rectángulo con cateto a, cateto b, hipotenusa c y altura h.",
      sideA: {
        label: "a = primer cateto",
        description: "Uno de los dos lados que forman el ángulo recto; es un factor de la fórmula."
      },
      sideB: {
        label: "b = segundo cateto",
        description: "El otro cateto del triángulo; se multiplica por a."
      },
      sideC: {
        label: "c = hipotenusa",
        description: "El lado más largo, opuesto al ángulo recto. h se traza hasta este lado."
      },
      result: {
        label: "h = altura a la hipotenusa",
        description: "La distancia perpendicular desde el vértice recto hasta la hipotenusa."
      },
      notes: [
        "Usa la misma unidad para los tres lados.",
        "c siempre es la hipotenusa y debe ser el lado más largo.",
        "La altura h será menor que cada cateto."
      ],
      formulaH2: "Fórmula de altura desde lados",
      formulaParagraphs: [
        "Este método funciona porque el área del mismo triángulo rectángulo puede escribirse de dos formas.",
        "Con los catetos, Area = (a × b) / 2. Con la hipotenusa como base, Area = (c × h) / 2.",
        "Al igualar ambas expresiones y despejar h se obtiene h = (a × b) / c."
      ],
      howToH2: "Cómo usar esta calculadora",
      howToSteps: [
        "Identifica los dos catetos que forman el ángulo de 90° y llámalos a y b.",
        "Identifica la hipotenusa c, el lado más largo opuesto al ángulo recto.",
        "Comprueba que todas las medidas usen la misma unidad.",
        "Introduce el cateto a en el primer campo.",
        "Introduce el cateto b en el segundo campo.",
        "Introduce la hipotenusa c en el tercer campo.",
        "Pulsa Calculate para ver la altura h y los pasos."
      ],
      exampleH2: "Ejemplo paso a paso: triángulo 6-8-10",
      exampleIntro: "Supón que a = 6, b = 8 y c = 10.",
      exampleAnswer: "La altura a la hipotenusa es 4.8 unidades. La comprobación de área da (6 × 8) / 2 = 24 y (10 × 4.8) / 2 = 24.",
      resultMeaning: [
        "h es la distancia más corta desde el vértice del ángulo recto hasta la hipotenusa.",
        "También es la altura del triángulo cuando la hipotenusa se usa como base."
      ],
      whenIntro: "Usa esta calculadora cuando ya tengas las tres longitudes de lado y quieras evitar trigonometría.",
      whenItems: [
        "Un ejercicio da los tres lados y pide la altura.",
        "Quieres comprobar el área con Area = (c × h) / 2.",
        "Necesitas la altura perpendicular de un refuerzo triangular.",
        "Estás preparando una demostración con relaciones de media geométrica."
      ],
      whyH2: "Por qué funciona la fórmula",
      whyParagraphs: [
        "Un triángulo tiene una sola área, aunque puedas elegir distintas parejas base-altura.",
        "Al comparar Area = (a × b) / 2 con Area = (c × h) / 2, el factor 2 se cancela y queda h = (a × b) / c."
      ],
      mistakesIntro: "La fórmula es directa, pero los errores de etiquetado cambian el resultado.",
      mistakeItems: [
        "Usar c como cateto. c siempre es la hipotenusa.",
        "Introducir una c menor que a o b.",
        "Olvidar dividir el producto a × b entre c.",
        "Mezclar unidades como cm y m.",
        "Confundir h con uno de los catetos."
      ],
      additionalH2: "Ejemplo adicional: triángulo 5-12-13",
      additionalIntro: "El triángulo 5-12-13 es otro triple pitagórico común.",
      additionalItems: [
        "h = (a × b) / c",
        "h = (5 × 12) / 13",
        "h = 60 / 13",
        "h ≈ 4.615 unidades"
      ],
      relatedLabels: [
        "Calculadora de altura de triángulo rectángulo",
        "Calculadora de altura desde proyecciones",
        "Calculadora de lados de triángulo rectángulo",
        "Calculadora de área desde altura",
        "Calculadora de área de triángulo rectángulo"
      ],
      faqs: [
        {
          question: "¿Cuál es la fórmula de la altura desde lados?",
          answer: "La fórmula es h = (a × b) / c, donde a y b son los catetos y c es la hipotenusa."
        },
        {
          question: "¿Por qué se usa el producto de los catetos?",
          answer: "Porque el área puede escribirse como (a × b) / 2 y también como (c × h) / 2."
        },
        {
          question: "¿Qué representa h?",
          answer: "Representa la distancia perpendicular desde el ángulo recto hasta la hipotenusa."
        },
        {
          question: "¿Necesito conocer los ángulos?",
          answer: "No. Solo necesitas a, b y c."
        },
        {
          question: "¿Puede h ser mayor que un cateto?",
          answer: "No. En un triángulo rectángulo válido, h es menor que ambos catetos."
        }
      ]
    },
    projections: {
      title: "Calculadora de altura de triángulo rectángulo desde proyecciones",
      metaDescription: "Calcula la altura h desde las proyecciones p y q de la hipotenusa con h² = p × q y h = √(p × q).",
      calculatorHeading: "Calcular altura h desde proyecciones",
      formulaTitle: "Altura desde proyecciones",
      formulaDescription: "Calcula la altura h desde las proyecciones p y q sobre la hipotenusa.",
      outputLabel: "Altura h",
      intro: "Cuando la altura desde el ángulo recto toca la hipotenusa, la divide en dos segmentos llamados proyecciones p y q.",
      purpose: "Introduce p y q. La calculadora usa h² = p × q y h = √(p × q) para encontrar la altura h.",
      howItWorksHeading: "Cómo funciona esta calculadora de altura desde proyecciones",
      summaryH2: "Qué resuelve esta calculadora",
      summaryIntro: "Usa esta página cuando conozcas los dos segmentos de la hipotenusa y necesites la altura sin calcular primero los catetos.",
      cards: {
        known: "Proyección p y proyección q",
        finds: "Altura h a la hipotenusa",
        formula: "h = √(p × q)",
        bestFor: "Problemas de media geométrica, proyecciones y semejanza de triángulos"
      },
      diagramH2: "Diagrama del triángulo: altura desde proyecciones",
      diagramIntro: "El diagrama muestra cómo h divide la hipotenusa c en p y q. La altura es la media geométrica de esos dos segmentos.",
      diagramCaption: "Diagrama con hipotenusa c dividida en p y q por la altura h.",
      sideA: {
        label: "a = primer cateto",
        description: "No se usa directamente aquí, pero se relaciona con p mediante a² = p × c."
      },
      sideB: {
        label: "b = segundo cateto",
        description: "Se relaciona con q mediante b² = q × c."
      },
      sideC: {
        label: "c = hipotenusa (= p + q)",
        description: "La hipotenusa completa es la suma de ambas proyecciones."
      },
      result: {
        label: "h = media geométrica de p y q",
        description: "La altura es la raíz cuadrada del producto de las dos proyecciones."
      },
      notes: [
        "p y q deben ser positivos.",
        "p + q = c, donde c es la hipotenusa.",
        "El orden de p y q no cambia el resultado."
      ],
      formulaH2: "Fórmula de altura desde proyecciones",
      formulaParagraphs: [
        "La altura crea dos triángulos rectángulos más pequeños dentro del triángulo original.",
        "Por semejanza, h² = p × q. Por eso h es la media geométrica de las proyecciones.",
        "Al tomar raíz cuadrada se obtiene h = √(p × q)."
      ],
      howToH2: "Cómo usar esta calculadora",
      howToSteps: [
        "Identifica los dos segmentos de la hipotenusa creados por la altura.",
        "Etiqueta un segmento como p y el otro como q.",
        "Asegúrate de que ambos estén en la misma unidad.",
        "Introduce p en el primer campo.",
        "Introduce q en el segundo campo.",
        "Pulsa Calculate para obtener h y los pasos."
      ],
      exampleH2: "Ejemplo paso a paso: p = 3.6 y q = 6.4",
      exampleIntro: "Supón que la hipotenusa se divide en p = 3.6 y q = 6.4.",
      exampleAnswer: "La altura es 4.8 unidades. Además, c = p + q = 10, y para el triángulo 6-8-10 se obtiene h = (6 × 8) / 10 = 4.8.",
      resultMeaning: [
        "h es la distancia perpendicular desde el vértice recto hasta la hipotenusa.",
        "Indica la altura del triángulo cuando la hipotenusa se toma como base."
      ],
      whenIntro: "Esta calculadora es útil cuando tienes datos de segmentos sobre la hipotenusa, no los tres lados.",
      whenItems: [
        "Un ejercicio da p y q directamente.",
        "Trabajas con una demostración de media geométrica.",
        "Tienes dos distancias sobre una línea base desde el pie de una perpendicular.",
        "Quieres h sin calcular primero a y b."
      ],
      whyH2: "Por qué funciona: la media geométrica",
      whyParagraphs: [
        "Los dos triángulos pequeños creados por la altura son semejantes entre sí y al triángulo original.",
        "De la proporción h / p = q / h se obtiene h² = p × q."
      ],
      mistakesIntro: "La relación es corta, pero conviene cuidar cada paso.",
      mistakeItems: [
        "Sumar p y q en vez de multiplicarlos. La suma da c, no h.",
        "Olvidar la raíz cuadrada. p × q es h².",
        "Confundir proyecciones con catetos.",
        "Usar cero o valores negativos.",
        "Tomar h² como respuesta final."
      ],
      additionalH2: "Ejemplo adicional: proyecciones iguales",
      additionalIntro: "En un triángulo 45-45-90, la altura divide la hipotenusa en dos partes iguales.",
      additionalItems: [
        "Si p = 5 y q = 5, entonces h² = 5 × 5 = 25",
        "h = √25 = 5 unidades",
        "En este caso h es la mitad de la hipotenusa.",
        "p = q produce la mayor altura posible para una hipotenusa dada."
      ],
      relatedLabels: [
        "Calculadora de altura de triángulo rectángulo",
        "Calculadora de altura desde lados",
        "Calculadora de proyecciones de triángulo rectángulo",
        "Calculadora de área desde altura",
        "Calculadora de lados de triángulo rectángulo"
      ],
      faqs: [
        {
          question: "¿Cuál es la fórmula de la altura desde proyecciones?",
          answer: "h = √(p × q), o de forma equivalente h² = p × q."
        },
        {
          question: "¿Qué son p y q?",
          answer: "Son los dos segmentos de la hipotenusa creados por el pie de la altura."
        },
        {
          question: "¿A qué equivale p + q?",
          answer: "p + q = c, donde c es la hipotenusa completa."
        },
        {
          question: "¿Por qué se llama media geométrica?",
          answer: "Porque h es la raíz cuadrada del producto p × q."
        },
        {
          question: "¿Puedo hallar los catetos desde p y q?",
          answer: "Sí. Primero c = p + q, luego a = √(p × c) y b = √(q × c)."
        }
      ]
    }
  },
  ru: {
    find: "Найти",
    badge: "Калькулятор высоты",
    parentBreadcrumbLabel: "Калькулятор высоты прямоугольного треугольника",
    relatedHeading: "Связанные калькуляторы",
    faqHeading: "Частые вопросы",
    faqDescription: "Ответы на основные вопросы о высоте прямоугольного треугольника.",
    labels: {
      knownValues: "Известные значения",
      finds: "Находит",
      mainFormula: "Основная формула",
      bestFor: "Подходит для",
      diagramKey: "Обозначения на схеме",
      resultMeaningH2: "Что означает результат",
      whenUseH2: "Когда использовать этот калькулятор",
      commonMistakesH2: "Частые ошибки",
      commonSituations: "Типичные ситуации:",
      typicalSituations: "Когда полезно:"
    },
    messages: {
      positive: "Введите положительные значения.",
      invalid: "Введите допустимые значения.",
      hypotenuseLongest: "Гипотенуза c должна быть самой длинной стороной.",
      invalidTriangle: "Эти длины сторон могут не образовывать допустимый прямоугольный треугольник."
    },
    fields: {
      legA: "Катет a",
      legB: "Катет b",
      hypotenuseC: "Гипотенуза c",
      altitudeH: "Высота h",
      projectionP: "Проекция p",
      projectionQ: "Проекция q"
    },
    runtime: {
      calculationComplete: "Расчет завершен.",
      unableToCalculate: "Не удалось выполнить расчет.",
      fixErrors: "Исправьте ошибки в полях выше.",
      errorPrefix: "Ошибка",
      stepLabels: {
        formula: "Формула",
        substitution: "Подстановка",
        answer: "Ответ",
        explanation: "Пояснение",
        detail: "Деталь"
      },
      altitudeFromSidesTitle: "Найти высоту h",
      altitudeFromSidesDescription: "Вычислите высоту к гипотенузе через произведение катетов.",
      altitudeFromProjectionsTitle: "Найти высоту h",
      altitudeFromProjectionsDescription: "Возьмите среднее геометрическое двух отрезков гипотенузы."
    },
    sides: {
      title: "Калькулятор высоты прямоугольного треугольника по сторонам",
      metaDescription: "Найдите высоту h по катету a, катету b и гипотенузе c с формулой, шагами и примерами.",
      calculatorHeading: "Вычислить высоту h по сторонам",
      formulaTitle: "Высота по сторонам",
      formulaDescription: "Находит высоту h по катету a, катету b и гипотенузе c.",
      outputLabel: "Высота h",
      intro: "Если известны оба катета и гипотенуза прямоугольного треугольника, высота к гипотенузе находится одной простой формулой.",
      purpose: "Введите катет a, катет b и гипотенузу c. Калькулятор применит h = (a × b) / c и покажет пошаговое решение.",
      howItWorksHeading: "Как работает калькулятор высоты по сторонам",
      summaryH2: "Что решает этот калькулятор",
      summaryIntro: "Страница предназначена для случая, когда a, b и c известны, а нужна перпендикулярная высота h к гипотенузе.",
      cards: {
        known: "Катет a, катет b и гипотенуза c",
        finds: "Высота h к гипотенузе",
        formula: "h = (a × b) / c",
        bestFor: "Задачи по геометрии, проверка площади, доказательства и строительные расчеты"
      },
      diagramH2: "Схема треугольника: высота по сторонам",
      diagramIntro: "На схеме a и b образуют прямой угол, c является гипотенузой, а h опускается перпендикулярно к c.",
      diagramCaption: "Схема прямоугольного треугольника с катетами a и b, гипотенузой c и высотой h.",
      sideA: {
        label: "a = первый катет",
        description: "Один из двух катетов, образующих прямой угол; входит в произведение в формуле."
      },
      sideB: {
        label: "b = второй катет",
        description: "Другой катет; умножается на a."
      },
      sideC: {
        label: "c = гипотенуза",
        description: "Самая длинная сторона напротив прямого угла. Высота h проводится к этой стороне."
      },
      result: {
        label: "h = высота к гипотенузе",
        description: "Перпендикулярное расстояние от вершины прямого угла до гипотенузы."
      },
      notes: [
        "Все три измерения должны быть в одной единице.",
        "c всегда является гипотенузой и самой длинной стороной.",
        "Высота h меньше каждого катета."
      ],
      formulaH2: "Формула высоты по сторонам",
      formulaParagraphs: [
        "Метод основан на том, что площадь одного и того же прямоугольного треугольника можно записать двумя способами.",
        "Через катеты: Area = (a × b) / 2. Через гипотенузу как основание: Area = (c × h) / 2.",
        "Приравняв выражения и решив относительно h, получаем h = (a × b) / c."
      ],
      howToH2: "Как пользоваться калькулятором",
      howToSteps: [
        "Определите два катета, образующие угол 90°, и обозначьте их a и b.",
        "Определите гипотенузу c, самую длинную сторону напротив прямого угла.",
        "Убедитесь, что все значения заданы в одной единице.",
        "Введите катет a в первое поле.",
        "Введите катет b во второе поле.",
        "Введите гипотенузу c в третье поле.",
        "Нажмите Calculate, чтобы увидеть высоту h и шаги решения."
      ],
      exampleH2: "Пошаговый пример: треугольник 6-8-10",
      exampleIntro: "Пусть a = 6, b = 8 и c = 10.",
      exampleAnswer: "Высота к гипотенузе равна 4.8 единицы. Проверка площади: (6 × 8) / 2 = 24 и (10 × 4.8) / 2 = 24.",
      resultMeaning: [
        "h — кратчайшее расстояние от вершины прямого угла до гипотенузы.",
        "Это высота треугольника, если гипотенузу использовать как основание."
      ],
      whenIntro: "Используйте этот способ, когда известны все три стороны и не хочется применять тригонометрию.",
      whenItems: [
        "В задаче даны все три стороны и требуется высота.",
        "Нужно проверить площадь через Area = (c × h) / 2.",
        "Нужна перпендикулярная высота треугольной распорки.",
        "Вы доказываете отношения среднего геометрического."
      ],
      whyH2: "Почему формула работает",
      whyParagraphs: [
        "Площадь треугольника одна и та же, даже если выбрать разные пары основание-высота.",
        "Сравнение Area = (a × b) / 2 и Area = (c × h) / 2 дает h = (a × b) / c."
      ],
      mistakesIntro: "Формула проста, но неверные обозначения дают неверный ответ.",
      mistakeItems: [
        "Считать c катетом. c всегда гипотенуза.",
        "Вводить c меньше, чем a или b.",
        "Забыть разделить a × b на c.",
        "Смешивать разные единицы измерения.",
        "Принимать h за один из исходных катетов."
      ],
      additionalH2: "Дополнительный пример: треугольник 5-12-13",
      additionalIntro: "Треугольник 5-12-13 — распространенная пифагорова тройка.",
      additionalItems: [
        "h = (a × b) / c",
        "h = (5 × 12) / 13",
        "h = 60 / 13",
        "h ≈ 4.615 единицы"
      ],
      relatedLabels: [
        "Калькулятор высоты прямоугольного треугольника",
        "Калькулятор высоты по проекциям",
        "Калькулятор сторон прямоугольного треугольника",
        "Калькулятор площади по высоте",
        "Калькулятор площади прямоугольного треугольника"
      ],
      faqs: [
        {
          question: "Какая формула высоты по сторонам?",
          answer: "h = (a × b) / c, где a и b — катеты, а c — гипотенуза."
        },
        {
          question: "Почему используется произведение катетов?",
          answer: "Потому что площадь равна (a × b) / 2 и также равна (c × h) / 2."
        },
        {
          question: "Что показывает h?",
          answer: "Это перпендикулярное расстояние от прямого угла до гипотенузы."
        },
        {
          question: "Нужно ли знать углы?",
          answer: "Нет. Достаточно a, b и c."
        },
        {
          question: "Может ли h быть больше катета?",
          answer: "Нет. В допустимом прямоугольном треугольнике h меньше обоих катетов."
        }
      ]
    },
    projections: {
      title: "Калькулятор высоты прямоугольного треугольника по проекциям",
      metaDescription: "Найдите высоту h по проекциям p и q на гипотенузе, используя h² = p × q и h = √(p × q).",
      calculatorHeading: "Вычислить высоту h по проекциям",
      formulaTitle: "Высота по проекциям",
      formulaDescription: "Находит высоту h по проекциям p и q на гипотенузе.",
      outputLabel: "Высота h",
      intro: "Когда высота из прямого угла встречает гипотенузу, она делит ее на два отрезка: p и q.",
      purpose: "Введите p и q. Калькулятор использует h² = p × q и h = √(p × q), чтобы найти высоту h.",
      howItWorksHeading: "Как работает калькулятор высоты по проекциям",
      summaryH2: "Что решает этот калькулятор",
      summaryIntro: "Страница полезна, когда известны два отрезка гипотенузы, но не все стороны треугольника.",
      cards: {
        known: "Проекция p и проекция q",
        finds: "Высота h к гипотенузе",
        formula: "h = √(p × q)",
        bestFor: "Среднее геометрическое, проекции и доказательства через подобие"
      },
      diagramH2: "Схема треугольника: высота по проекциям",
      diagramIntro: "На схеме h делит гипотенузу c на p и q. Высота является средним геометрическим этих отрезков.",
      diagramCaption: "Схема с гипотенузой c, разделенной на p и q высотой h.",
      sideA: {
        label: "a = первый катет",
        description: "В этой формуле напрямую не используется, но связан с p: a² = p × c."
      },
      sideB: {
        label: "b = второй катет",
        description: "Связан с q отношением b² = q × c."
      },
      sideC: {
        label: "c = гипотенуза (= p + q)",
        description: "Полная гипотенуза равна сумме двух проекций."
      },
      result: {
        label: "h = среднее геометрическое p и q",
        description: "Высота равна квадратному корню из произведения двух проекций."
      },
      notes: [
        "p и q должны быть положительными.",
        "p + q = c, где c — гипотенуза.",
        "Порядок p и q не меняет результат."
      ],
      formulaH2: "Формула высоты по проекциям",
      formulaParagraphs: [
        "Высота создает внутри исходного треугольника два меньших прямоугольных треугольника.",
        "Из подобия следует h² = p × q, поэтому h является средним геометрическим проекций.",
        "После извлечения корня получаем h = √(p × q)."
      ],
      howToH2: "Как пользоваться калькулятором",
      howToSteps: [
        "Найдите два отрезка гипотенузы, созданные высотой.",
        "Обозначьте один отрезок p, другой q.",
        "Убедитесь, что оба значения в одной единице.",
        "Введите p в первое поле.",
        "Введите q во второе поле.",
        "Нажмите Calculate, чтобы получить h и шаги."
      ],
      exampleH2: "Пошаговый пример: p = 3.6 и q = 6.4",
      exampleIntro: "Пусть гипотенуза разделена на p = 3.6 и q = 6.4.",
      exampleAnswer: "Высота равна 4.8 единицы. Здесь c = p + q = 10, а для треугольника 6-8-10 h = (6 × 8) / 10 = 4.8.",
      resultMeaning: [
        "h — перпендикулярное расстояние от вершины прямого угла до гипотенузы.",
        "Это высота треугольника, если гипотенуза выбрана основанием."
      ],
      whenIntro: "Калькулятор полезен, когда заданы отрезки на гипотенузе, а не все стороны.",
      whenItems: [
        "В упражнении напрямую даны p и q.",
        "Вы используете доказательство среднего геометрического.",
        "Измерены две длины на базовой линии от основания перпендикуляра.",
        "Нужно найти h без предварительного нахождения a и b."
      ],
      whyH2: "Почему работает формула: среднее геометрическое",
      whyParagraphs: [
        "Два малых треугольника, созданные высотой, подобны друг другу и исходному треугольнику.",
        "Из пропорции h / p = q / h получаем h² = p × q."
      ],
      mistakesIntro: "Короткая формула все равно требует аккуратности.",
      mistakeItems: [
        "Складывать p и q вместо умножения. Сумма дает c, а не h.",
        "Забывать квадратный корень. p × q — это h².",
        "Путать проекции с катетами.",
        "Использовать ноль или отрицательные значения.",
        "Считать h² окончательной высотой."
      ],
      additionalH2: "Дополнительный пример: равные проекции",
      additionalIntro: "В треугольнике 45-45-90 высота делит гипотенузу на две равные части.",
      additionalItems: [
        "Если p = 5 и q = 5, то h² = 5 × 5 = 25",
        "h = √25 = 5 единиц",
        "В этом случае h равна половине гипотенузы.",
        "При p = q высота максимальна для данной гипотенузы."
      ],
      relatedLabels: [
        "Калькулятор высоты прямоугольного треугольника",
        "Калькулятор высоты по сторонам",
        "Калькулятор проекций прямоугольного треугольника",
        "Калькулятор площади по высоте",
        "Калькулятор сторон прямоугольного треугольника"
      ],
      faqs: [
        {
          question: "Какая формула высоты по проекциям?",
          answer: "h = √(p × q), что эквивалентно h² = p × q."
        },
        {
          question: "Что такое p и q?",
          answer: "Это два отрезка гипотенузы, полученные основанием высоты."
        },
        {
          question: "Чему равно p + q?",
          answer: "p + q = c, где c — вся гипотенуза."
        },
        {
          question: "Почему это среднее геометрическое?",
          answer: "Потому что h равна квадратному корню из произведения p × q."
        },
        {
          question: "Можно ли найти катеты по p и q?",
          answer: "Да. Сначала c = p + q, затем a = √(p × c) и b = √(q × c)."
        }
      ]
    }
  },
  ms: {
    find: "Cari",
    badge: "Kalkulator Altitud",
    parent: "Kalkulator Altitud Segi Tiga Bersudut Tegak",
    related: "Kalkulator berkaitan",
    faq: "Soalan lazim",
    faqDescription: "Jawapan kepada soalan biasa tentang altitud segi tiga bersudut tegak.",
    known: "Nilai diketahui",
    finds: "Mencari",
    formula: "Formula utama",
    best: "Sesuai untuk",
    diagram: "Kunci rajah",
    result: "Maksud keputusan",
    when: "Bila menggunakan kalkulator ini",
    mistakes: "Kesilapan biasa",
    common: "Situasi biasa:",
    typical: "Kegunaan biasa:",
    positive: "Sila masukkan nilai positif.",
    invalid: "Sila masukkan nilai yang sah.",
    longest: "Hipotenus c sepatutnya menjadi sisi paling panjang.",
    invalidTriangle: "Panjang sisi ini mungkin tidak membentuk segi tiga bersudut tegak yang sah.",
    legA: "Sisi a",
    legB: "Sisi b",
    hypotenuseC: "Hipotenus c",
    altitudeH: "Altitud h",
    projectionP: "Unjuran p",
    projectionQ: "Unjuran q",
    complete: "Pengiraan selesai.",
    unable: "Tidak dapat mengira.",
    fix: "Sila betulkan ralat dalam medan di atas.",
    error: "Ralat",
    formulaLabel: "Formula",
    substitution: "Penggantian",
    answer: "Jawapan",
    explanation: "Penerangan",
    detail: "Butiran",
    stepSidesDescription: "Kira altitud ke hipotenus menggunakan hasil darab dua sisi.",
    stepProjDescription: "Gunakan min geometri bagi dua segmen hipotenus.",
    sidesTitle: "Kalkulator Altitud Segi Tiga Bersudut Tegak Daripada Sisi",
    sidesMeta: "Cari altitud h daripada sisi a, sisi b dan hipotenus c dengan formula, langkah dan contoh.",
    sidesHeading: "Kira altitud h daripada sisi",
    sidesIntro: "Apabila ketiga-tiga sisi diketahui, altitud ke hipotenus boleh dikira dengan formula terus.",
    sidesPurpose: "Masukkan a, b dan c. Kalkulator menggunakan h = (a × b) / c dan menunjukkan langkah penyelesaian.",
    sidesSummary: "Gunakan halaman ini apabila a, b dan c diketahui dan anda memerlukan jarak serenjang ke hipotenus.",
    sidesBest: "Kerja geometri, semakan luas, bukti dan ukuran praktikal",
    sidesDiagram: "Rajah menunjukkan sisi a dan b, hipotenus c, serta altitud h yang serenjang dengan c.",
    sidesFormula: "Luas boleh ditulis sebagai Area = (a × b) / 2 dan Area = (c × h) / 2; maka h = (a × b) / c.",
    sidesWhen: "Gunakan apabila ketiga-tiga sisi sudah diketahui dan anda mahu mengelakkan trigonometri.",
    sidesWhy: "Formula ini datang daripada menyamakan dua ungkapan luas bagi segi tiga yang sama.",
    sidesMistakes: "Pastikan c ialah hipotenus, bukan sisi biasa, dan semua unit adalah sama.",
    projTitle: "Kalkulator Altitud Segi Tiga Bersudut Tegak Daripada Unjuran",
    projMeta: "Cari altitud h daripada unjuran p dan q pada hipotenus dengan h² = p × q dan h = √(p × q).",
    projHeading: "Kira altitud h daripada unjuran",
    projIntro: "Altitud dari sudut tegak membahagikan hipotenus kepada dua segmen, p dan q.",
    projPurpose: "Masukkan p dan q. Kalkulator menggunakan h² = p × q dan h = √(p × q) untuk mencari h.",
    projSummary: "Gunakan halaman ini apabila dua segmen hipotenus diketahui dan altitud diperlukan.",
    projBest: "Min geometri, unjuran dan keserupaan segi tiga",
    projDiagram: "Rajah menunjukkan h membahagikan hipotenus c kepada p dan q.",
    projFormula: "Daripada keserupaan, h² = p × q; dengan mengambil punca kuasa dua, h = √(p × q).",
    projWhen: "Gunakan apabila data anda ialah segmen hipotenus, bukan ketiga-tiga sisi.",
    projWhy: "Dua segi tiga kecil adalah serupa, jadi h / p = q / h dan h² = p × q.",
    projMistakes: "Jangan tambah p dan q untuk mendapatkan h; jumlahnya ialah c, manakala h ialah punca hasil darab.",
    firstLeg: "a = sisi pertama",
    secondLeg: "b = sisi kedua",
    hypotenuse: "c = hipotenus",
    altitudeToHypotenuse: "h = altitud ke hipotenus",
    geometricMean: "h = min geometri p dan q",
    sameUnit: "Gunakan unit yang sama untuk semua ukuran.",
    cLongest: "c sentiasa hipotenus dan sisi paling panjang.",
    hShorter: "Altitud h lebih pendek daripada setiap sisi.",
    pqPositive: "p dan q mesti positif.",
    pqSum: "p + q = c, dengan c sebagai hipotenus.",
    pqOrder: "Susunan p dan q tidak mengubah keputusan.",
    sideSteps: ["Kenal pasti sisi a dan b.", "Kenal pasti hipotenus c.", "Gunakan unit yang sama.", "Masukkan a.", "Masukkan b.", "Masukkan c.", "Tekan Calculate."],
    projSteps: ["Kenal pasti segmen p dan q pada hipotenus.", "Gunakan unit yang sama.", "Masukkan p.", "Masukkan q.", "Tekan Calculate.", "Baca h dan langkahnya."],
    sideRelated: ["Kalkulator altitud segi tiga bersudut tegak", "Kalkulator altitud daripada unjuran", "Kalkulator sisi segi tiga bersudut tegak", "Kalkulator luas daripada altitud", "Kalkulator luas segi tiga bersudut tegak"],
    projRelated: ["Kalkulator altitud segi tiga bersudut tegak", "Kalkulator altitud daripada sisi", "Kalkulator unjuran segi tiga bersudut tegak", "Kalkulator luas daripada altitud", "Kalkulator sisi segi tiga bersudut tegak"]
  },
  pl: {
    find: "Znajdź",
    badge: "Kalkulator wysokości",
    parent: "Kalkulator wysokości trójkąta prostokątnego",
    related: "Powiązane kalkulatory",
    faq: "Najczęstsze pytania",
    faqDescription: "Odpowiedzi na typowe pytania o wysokość w trójkącie prostokątnym.",
    known: "Znane wartości",
    finds: "Oblicza",
    formula: "Główny wzór",
    best: "Najlepsze do",
    diagram: "Legenda diagramu",
    result: "Co oznacza wynik",
    when: "Kiedy używać tego kalkulatora",
    mistakes: "Częste błędy",
    common: "Typowe sytuacje:",
    typical: "Typowe zastosowania:",
    positive: "Wprowadź wartości dodatnie.",
    invalid: "Wprowadź prawidłowe wartości.",
    longest: "Przeciwprostokątna c powinna być najdłuższym bokiem.",
    invalidTriangle: "Te długości boków mogą nie tworzyć prawidłowego trójkąta prostokątnego.",
    legA: "Przyprostokątna a",
    legB: "Przyprostokątna b",
    hypotenuseC: "Przeciwprostokątna c",
    altitudeH: "Wysokość h",
    projectionP: "Rzut p",
    projectionQ: "Rzut q",
    complete: "Obliczenie zakończone.",
    unable: "Nie można obliczyć.",
    fix: "Popraw błędy w polach powyżej.",
    error: "Błąd",
    formulaLabel: "Wzór",
    substitution: "Podstawienie",
    answer: "Odpowiedź",
    explanation: "Wyjaśnienie",
    detail: "Szczegół",
    stepSidesDescription: "Oblicz wysokość do przeciwprostokątnej z iloczynu przyprostokątnych.",
    stepProjDescription: "Użyj średniej geometrycznej dwóch odcinków przeciwprostokątnej.",
    sidesTitle: "Kalkulator wysokości trójkąta prostokątnego z boków",
    sidesMeta: "Oblicz wysokość h z przyprostokątnej a, przyprostokątnej b i przeciwprostokątnej c, z wzorem, krokami i przykładami.",
    sidesHeading: "Oblicz wysokość h z boków",
    sidesIntro: "Gdy znasz trzy boki trójkąta prostokątnego, wysokość do przeciwprostokątnej wynika z prostego wzoru.",
    sidesPurpose: "Wprowadź a, b i c. Kalkulator używa h = (a × b) / c i pokazuje kroki.",
    sidesSummary: "Użyj tej strony, gdy a, b i c są znane, a potrzebna jest odległość prostopadła do przeciwprostokątnej.",
    sidesBest: "Zadania z geometrii, kontrola pola, dowody i pomiary praktyczne",
    sidesDiagram: "Diagram pokazuje przyprostokątne a i b, przeciwprostokątną c oraz wysokość h prostopadłą do c.",
    sidesFormula: "Pole można zapisać jako Area = (a × b) / 2 oraz Area = (c × h) / 2; stąd h = (a × b) / c.",
    sidesWhen: "Używaj, gdy znasz wszystkie trzy boki i chcesz uniknąć trygonometrii.",
    sidesWhy: "Wzór wynika z porównania dwóch zapisów tego samego pola.",
    sidesMistakes: "Sprawdź, że c jest przeciwprostokątną i że wszystkie jednostki są takie same.",
    projTitle: "Kalkulator wysokości trójkąta prostokątnego z rzutów",
    projMeta: "Oblicz wysokość h z rzutów p i q na przeciwprostokątną, używając h² = p × q oraz h = √(p × q).",
    projHeading: "Oblicz wysokość h z rzutów",
    projIntro: "Wysokość opuszczona z kąta prostego dzieli przeciwprostokątną na odcinki p i q.",
    projPurpose: "Wprowadź p i q. Kalkulator używa h² = p × q oraz h = √(p × q), aby znaleźć h.",
    projSummary: "Użyj tej strony, gdy znane są dwa odcinki przeciwprostokątnej i potrzebna jest wysokość.",
    projBest: "Średnia geometryczna, rzuty i podobieństwo trójkątów",
    projDiagram: "Diagram pokazuje, jak h dzieli przeciwprostokątną c na p i q.",
    projFormula: "Z podobieństwa wynika h² = p × q; po pierwiastkowaniu h = √(p × q).",
    projWhen: "Używaj, gdy dane są odcinki przeciwprostokątnej zamiast trzech boków.",
    projWhy: "Dwa mniejsze trójkąty są podobne, więc h / p = q / h i h² = p × q.",
    projMistakes: "Nie dodawaj p i q, aby znaleźć h; suma daje c, a h wymaga pierwiastka z iloczynu.",
    firstLeg: "a = pierwsza przyprostokątna",
    secondLeg: "b = druga przyprostokątna",
    hypotenuse: "c = przeciwprostokątna",
    altitudeToHypotenuse: "h = wysokość do przeciwprostokątnej",
    geometricMean: "h = średnia geometryczna p i q",
    sameUnit: "Użyj tej samej jednostki dla wszystkich pomiarów.",
    cLongest: "c zawsze jest przeciwprostokątną i najdłuższym bokiem.",
    hShorter: "Wysokość h jest krótsza niż każda przyprostokątna.",
    pqPositive: "p i q muszą być dodatnie.",
    pqSum: "p + q = c, gdzie c jest przeciwprostokątną.",
    pqOrder: "Kolejność p i q nie zmienia wyniku.",
    sideSteps: ["Rozpoznaj przyprostokątne a i b.", "Rozpoznaj przeciwprostokątną c.", "Użyj tej samej jednostki.", "Wprowadź a.", "Wprowadź b.", "Wprowadź c.", "Naciśnij Calculate."],
    projSteps: ["Rozpoznaj odcinki p i q na przeciwprostokątnej.", "Użyj tej samej jednostki.", "Wprowadź p.", "Wprowadź q.", "Naciśnij Calculate.", "Odczytaj h i kroki."],
    sideRelated: ["Kalkulator wysokości trójkąta prostokątnego", "Kalkulator wysokości z rzutów", "Kalkulator boków trójkąta prostokątnego", "Kalkulator pola z wysokości", "Kalkulator pola trójkąta prostokątnego"],
    projRelated: ["Kalkulator wysokości trójkąta prostokątnego", "Kalkulator wysokości z boków", "Kalkulator rzutów trójkąta prostokątnego", "Kalkulator pola z wysokości", "Kalkulator boków trójkąta prostokątnego"]
  },
  id: {
    find: "Cari",
    badge: "Kalkulator tinggi",
    parent: "Kalkulator tinggi segitiga siku-siku",
    related: "Kalkulator terkait",
    faq: "Pertanyaan umum",
    faqDescription: "Jawaban atas pertanyaan umum tentang tinggi segitiga siku-siku.",
    known: "Nilai diketahui",
    finds: "Mencari",
    formula: "Rumus utama",
    best: "Paling cocok untuk",
    diagram: "Kunci diagram",
    result: "Arti hasil",
    when: "Kapan menggunakan kalkulator ini",
    mistakes: "Kesalahan umum",
    common: "Situasi umum:",
    typical: "Penggunaan umum:",
    positive: "Masukkan nilai positif.",
    invalid: "Masukkan nilai yang valid.",
    longest: "Hipotenusa c harus menjadi sisi terpanjang.",
    invalidTriangle: "Panjang sisi ini mungkin tidak membentuk segitiga siku-siku yang valid.",
    legA: "Sisi a",
    legB: "Sisi b",
    hypotenuseC: "Hipotenusa c",
    altitudeH: "Tinggi h",
    projectionP: "Proyeksi p",
    projectionQ: "Proyeksi q",
    complete: "Perhitungan selesai.",
    unable: "Tidak dapat menghitung.",
    fix: "Perbaiki kesalahan pada kolom di atas.",
    error: "Kesalahan",
    formulaLabel: "Rumus",
    substitution: "Substitusi",
    answer: "Jawaban",
    explanation: "Penjelasan",
    detail: "Detail",
    stepSidesDescription: "Hitung tinggi ke hipotenusa menggunakan hasil kali kedua sisi.",
    stepProjDescription: "Gunakan rata-rata geometri dari dua segmen hipotenusa.",
    sidesTitle: "Kalkulator tinggi segitiga siku-siku dari sisi",
    sidesMeta: "Cari tinggi h dari sisi a, sisi b, dan hipotenusa c dengan rumus, langkah, dan contoh.",
    sidesHeading: "Hitung tinggi h dari sisi",
    sidesIntro: "Jika tiga sisi diketahui, tinggi ke hipotenusa dapat dihitung dengan rumus langsung.",
    sidesPurpose: "Masukkan a, b, dan c. Kalkulator memakai h = (a × b) / c dan menampilkan langkahnya.",
    sidesSummary: "Gunakan halaman ini saat a, b, dan c diketahui dan Anda memerlukan jarak tegak lurus ke hipotenusa.",
    sidesBest: "Tugas geometri, pemeriksaan luas, pembuktian, dan pengukuran praktis",
    sidesDiagram: "Diagram menunjukkan sisi a dan b, hipotenusa c, serta tinggi h yang tegak lurus ke c.",
    sidesFormula: "Luas dapat ditulis sebagai Area = (a × b) / 2 dan Area = (c × h) / 2; maka h = (a × b) / c.",
    sidesWhen: "Gunakan saat tiga sisi sudah diketahui dan Anda ingin menghindari trigonometri.",
    sidesWhy: "Rumus ini berasal dari menyamakan dua bentuk luas untuk segitiga yang sama.",
    sidesMistakes: "Pastikan c adalah hipotenusa, bukan sisi biasa, dan semua satuan sama.",
    projTitle: "Kalkulator tinggi segitiga siku-siku dari proyeksi",
    projMeta: "Cari tinggi h dari proyeksi p dan q pada hipotenusa dengan h² = p × q dan h = √(p × q).",
    projHeading: "Hitung tinggi h dari proyeksi",
    projIntro: "Tinggi dari sudut siku-siku membagi hipotenusa menjadi dua segmen, p dan q.",
    projPurpose: "Masukkan p dan q. Kalkulator memakai h² = p × q dan h = √(p × q) untuk mencari h.",
    projSummary: "Gunakan halaman ini saat dua segmen hipotenusa diketahui dan tinggi diperlukan.",
    projBest: "Rata-rata geometri, proyeksi, dan kesebangunan segitiga",
    projDiagram: "Diagram menunjukkan h membagi hipotenusa c menjadi p dan q.",
    projFormula: "Dari kesebangunan, h² = p × q; setelah diakar, h = √(p × q).",
    projWhen: "Gunakan saat data Anda berupa segmen hipotenusa, bukan ketiga sisi.",
    projWhy: "Dua segitiga kecil sebangun, sehingga h / p = q / h dan h² = p × q.",
    projMistakes: "Jangan menjumlahkan p dan q untuk mencari h; jumlahnya adalah c, sedangkan h memakai akar hasil kali.",
    firstLeg: "a = sisi pertama",
    secondLeg: "b = sisi kedua",
    hypotenuse: "c = hipotenusa",
    altitudeToHypotenuse: "h = tinggi ke hipotenusa",
    geometricMean: "h = rata-rata geometri p dan q",
    sameUnit: "Gunakan satuan yang sama untuk semua ukuran.",
    cLongest: "c selalu hipotenusa dan sisi terpanjang.",
    hShorter: "Tinggi h lebih pendek daripada masing-masing sisi.",
    pqPositive: "p dan q harus positif.",
    pqSum: "p + q = c, dengan c sebagai hipotenusa.",
    pqOrder: "Urutan p dan q tidak mengubah hasil.",
    sideSteps: ["Kenali sisi a dan b.", "Kenali hipotenusa c.", "Gunakan satuan yang sama.", "Masukkan a.", "Masukkan b.", "Masukkan c.", "Tekan Calculate."],
    projSteps: ["Kenali segmen p dan q pada hipotenusa.", "Gunakan satuan yang sama.", "Masukkan p.", "Masukkan q.", "Tekan Calculate.", "Baca h dan langkahnya."],
    sideRelated: ["Kalkulator tinggi segitiga siku-siku", "Kalkulator tinggi dari proyeksi", "Kalkulator sisi segitiga siku-siku", "Kalkulator luas dari tinggi", "Kalkulator luas segitiga siku-siku"],
    projRelated: ["Kalkulator tinggi segitiga siku-siku", "Kalkulator tinggi dari sisi", "Kalkulator proyeksi segitiga siku-siku", "Kalkulator luas dari tinggi", "Kalkulator sisi segitiga siku-siku"]
  },
  ar: {
    find: "إيجاد",
    badge: "حاسبة الارتفاع",
    parent: "حاسبة ارتفاع المثلث القائم",
    related: "حاسبات مرتبطة",
    faq: "الأسئلة الشائعة",
    faqDescription: "إجابات عن الأسئلة الشائعة حول ارتفاع المثلث القائم.",
    known: "القيم المعروفة",
    finds: "تحسب",
    formula: "الصيغة الرئيسية",
    best: "مناسبة لـ",
    diagram: "مفتاح الرسم",
    result: "معنى النتيجة",
    when: "متى تستخدم هذه الحاسبة",
    mistakes: "أخطاء شائعة",
    common: "حالات شائعة:",
    typical: "استخدامات شائعة:",
    positive: "يرجى إدخال قيم موجبة.",
    invalid: "يرجى إدخال قيم صالحة.",
    longest: "يجب أن يكون الوتر c هو الضلع الأطول.",
    invalidTriangle: "قد لا تكوّن هذه الأطوال مثلثًا قائمًا صالحًا.",
    legA: "الضلع a",
    legB: "الضلع b",
    hypotenuseC: "الوتر c",
    altitudeH: "الارتفاع h",
    projectionP: "الإسقاط p",
    projectionQ: "الإسقاط q",
    complete: "اكتملت العملية الحسابية.",
    unable: "تعذر الحساب.",
    fix: "يرجى تصحيح الأخطاء في الحقول أعلاه.",
    error: "خطأ",
    formulaLabel: "الصيغة",
    substitution: "التعويض",
    answer: "الإجابة",
    explanation: "الشرح",
    detail: "التفصيل",
    stepSidesDescription: "احسب الارتفاع إلى الوتر باستخدام حاصل ضرب الضلعين.",
    stepProjDescription: "استخدم المتوسط الهندسي لجزأي الوتر.",
    sidesTitle: "حاسبة ارتفاع المثلث القائم من الأضلاع",
    sidesMeta: "احسب الارتفاع h من الضلع a والضلع b والوتر c مع الصيغة والخطوات والأمثلة.",
    sidesHeading: "احسب الارتفاع h من الأضلاع",
    sidesIntro: "عند معرفة الأضلاع الثلاثة، يمكن إيجاد الارتفاع إلى الوتر بصيغة مباشرة.",
    sidesPurpose: "أدخل a و b و c. تستخدم الحاسبة h = (a × b) / c وتعرض خطوات الحل.",
    sidesSummary: "استخدم هذه الصفحة عندما تكون a و b و c معروفة وتحتاج إلى المسافة العمودية إلى الوتر.",
    sidesBest: "مسائل الهندسة، التحقق من المساحة، البراهين والقياسات العملية",
    sidesDiagram: "يوضح الرسم الضلعين a و b والوتر c والارتفاع h العمودي على c.",
    sidesFormula: "يمكن كتابة المساحة على صورتين: Area = (a × b) / 2 و Area = (c × h) / 2؛ لذلك h = (a × b) / c.",
    sidesWhen: "استخدمها عندما تكون الأضلاع الثلاثة معروفة وتريد تجنب حساب المثلثات.",
    sidesWhy: "تأتي الصيغة من مساواة طريقتين لحساب مساحة المثلث نفسه.",
    sidesMistakes: "تأكد أن c هو الوتر وليس ضلعًا عاديًا، وأن جميع الوحدات متطابقة.",
    projTitle: "حاسبة ارتفاع المثلث القائم من الإسقاطات",
    projMeta: "احسب الارتفاع h من الإسقاطين p و q على الوتر باستخدام h² = p × q و h = √(p × q).",
    projHeading: "احسب الارتفاع h من الإسقاطات",
    projIntro: "يقسم الارتفاع النازل من الزاوية القائمة الوتر إلى جزأين هما p و q.",
    projPurpose: "أدخل p و q. تستخدم الحاسبة h² = p × q و h = √(p × q) لإيجاد h.",
    projSummary: "استخدم هذه الصفحة عندما تعرف جزأي الوتر وتحتاج إلى الارتفاع.",
    projBest: "المتوسط الهندسي، الإسقاطات وتشابه المثلثات",
    projDiagram: "يوضح الرسم أن h يقسم الوتر c إلى p و q.",
    projFormula: "من التشابه نحصل على h² = p × q؛ وبأخذ الجذر التربيعي نحصل على h = √(p × q).",
    projWhen: "استخدمها عندما تكون المعطيات أجزاء الوتر بدل الأضلاع الثلاثة.",
    projWhy: "المثلثان الصغيران متشابهان، لذلك h / p = q / h ومنه h² = p × q.",
    projMistakes: "لا تجمع p و q لإيجاد h؛ المجموع يعطي c، أما h فهو جذر حاصل الضرب.",
    firstLeg: "a = الضلع الأول",
    secondLeg: "b = الضلع الثاني",
    hypotenuse: "c = الوتر",
    altitudeToHypotenuse: "h = الارتفاع إلى الوتر",
    geometricMean: "h = المتوسط الهندسي لـ p و q",
    sameUnit: "استخدم الوحدة نفسها لكل القياسات.",
    cLongest: "c هو دائمًا الوتر والضلع الأطول.",
    hShorter: "الارتفاع h أقصر من كل ضلع.",
    pqPositive: "يجب أن يكون p و q موجبين.",
    pqSum: "p + q = c، حيث c هو الوتر.",
    pqOrder: "ترتيب p و q لا يغير النتيجة.",
    sideSteps: ["حدد الضلعين a و b.", "حدد الوتر c.", "استخدم الوحدة نفسها.", "أدخل a.", "أدخل b.", "أدخل c.", "اضغط Calculate."],
    projSteps: ["حدد الجزأين p و q على الوتر.", "استخدم الوحدة نفسها.", "أدخل p.", "أدخل q.", "اضغط Calculate.", "اقرأ h والخطوات."],
    sideRelated: ["حاسبة ارتفاع المثلث القائم", "حاسبة الارتفاع من الإسقاطات", "حاسبة أضلاع المثلث القائم", "حاسبة المساحة من الارتفاع", "حاسبة مساحة المثلث القائم"],
    projRelated: ["حاسبة ارتفاع المثلث القائم", "حاسبة الارتفاع من الأضلاع", "حاسبة إسقاط المثلث القائم", "حاسبة المساحة من الارتفاع", "حاسبة أضلاع المثلث القائم"]
  },
  bg: {
    find: "Намерете",
    badge: "Калкулатор за височина",
    parent: "Калкулатор за височина на правоъгълен триъгълник",
    related: "Свързани калкулатори",
    faq: "Често задавани въпроси",
    faqDescription: "Отговори на чести въпроси за височината в правоъгълен триъгълник.",
    known: "Известни стойности",
    finds: "Намира",
    formula: "Основна формула",
    best: "Подходящо за",
    diagram: "Легенда на диаграмата",
    result: "Какво означава резултатът",
    when: "Кога да използвате този калкулатор",
    mistakes: "Чести грешки",
    common: "Чести ситуации:",
    typical: "Типични употреби:",
    positive: "Моля, въведете положителни стойности.",
    invalid: "Моля, въведете валидни стойности.",
    longest: "Хипотенузата c трябва да бъде най-дългата страна.",
    invalidTriangle: "Тези дължини може да не образуват валиден правоъгълен триъгълник.",
    legA: "Катет a",
    legB: "Катет b",
    hypotenuseC: "Хипотенуза c",
    altitudeH: "Височина h",
    projectionP: "Проекция p",
    projectionQ: "Проекция q",
    complete: "Изчислението е завършено.",
    unable: "Не може да се изчисли.",
    fix: "Моля, поправете грешките в полетата по-горе.",
    error: "Грешка",
    formulaLabel: "Формула",
    substitution: "Заместване",
    answer: "Отговор",
    explanation: "Обяснение",
    detail: "Детайл",
    stepSidesDescription: "Изчислете височината към хипотенузата чрез произведението на катетите.",
    stepProjDescription: "Използвайте геометричното средно на двата сегмента на хипотенузата.",
    sidesTitle: "Калкулатор за височина на правоъгълен триъгълник от страни",
    sidesMeta: "Намерете височина h от катет a, катет b и хипотенуза c с формула, стъпки и примери.",
    sidesHeading: "Изчислете височина h от страни",
    sidesIntro: "Когато трите страни са известни, височината към хипотенузата се намира с директна формула.",
    sidesPurpose: "Въведете a, b и c. Калкулаторът използва h = (a × b) / c и показва стъпките.",
    sidesSummary: "Използвайте страницата, когато a, b и c са известни и трябва перпендикулярното разстояние до хипотенузата.",
    sidesBest: "Геометрични задачи, проверка на лице, доказателства и практически измервания",
    sidesDiagram: "Диаграмата показва катетите a и b, хипотенузата c и височината h, перпендикулярна на c.",
    sidesFormula: "Лицето може да се запише като Area = (a × b) / 2 и Area = (c × h) / 2; следователно h = (a × b) / c.",
    sidesWhen: "Използвайте, когато трите страни са известни и искате да избегнете тригонометрия.",
    sidesWhy: "Формулата идва от приравняване на два израза за едно и също лице.",
    sidesMistakes: "Проверете, че c е хипотенуза, а не катет, и че единиците са еднакви.",
    projTitle: "Калкулатор за височина на правоъгълен триъгълник от проекции",
    projMeta: "Намерете височина h от проекциите p и q върху хипотенузата с h² = p × q и h = √(p × q).",
    projHeading: "Изчислете височина h от проекции",
    projIntro: "Височината от правия ъгъл разделя хипотенузата на два сегмента, p и q.",
    projPurpose: "Въведете p и q. Калкулаторът използва h² = p × q и h = √(p × q), за да намери h.",
    projSummary: "Използвайте страницата, когато двата сегмента на хипотенузата са известни и трябва височина.",
    projBest: "Геометрично средно, проекции и подобие на триъгълници",
    projDiagram: "Диаграмата показва как h разделя хипотенузата c на p и q.",
    projFormula: "От подобието следва h² = p × q; след коренуване h = √(p × q).",
    projWhen: "Използвайте, когато данните са сегменти на хипотенузата, а не трите страни.",
    projWhy: "Двата малки триъгълника са подобни, затова h / p = q / h и h² = p × q.",
    projMistakes: "Не събирайте p и q, за да намерите h; сумата дава c, а h е корен от произведението.",
    firstLeg: "a = първи катет",
    secondLeg: "b = втори катет",
    hypotenuse: "c = хипотенуза",
    altitudeToHypotenuse: "h = височина към хипотенузата",
    geometricMean: "h = геометрично средно на p и q",
    sameUnit: "Използвайте една и съща единица за всички измервания.",
    cLongest: "c винаги е хипотенузата и най-дългата страна.",
    hShorter: "Височината h е по-къса от всеки катет.",
    pqPositive: "p и q трябва да са положителни.",
    pqSum: "p + q = c, където c е хипотенузата.",
    pqOrder: "Редът на p и q не променя резултата.",
    sideSteps: ["Определете катетите a и b.", "Определете хипотенузата c.", "Използвайте една и съща единица.", "Въведете a.", "Въведете b.", "Въведете c.", "Натиснете Calculate."],
    projSteps: ["Определете сегментите p и q върху хипотенузата.", "Използвайте една и съща единица.", "Въведете p.", "Въведете q.", "Натиснете Calculate.", "Прочетете h и стъпките."],
    sideRelated: ["Калкулатор за височина на правоъгълен триъгълник", "Калкулатор за височина от проекции", "Калкулатор за страни на правоъгълен триъгълник", "Калкулатор за лице от височина", "Калкулатор за лице на правоъгълен триъгълник"],
    projRelated: ["Калкулатор за височина на правоъгълен триъгълник", "Калкулатор за височина от страни", "Калкулатор за проекции на правоъгълен триъгълник", "Калкулатор за лице от височина", "Калкулатор за страни на правоъгълен триъгълник"]
  },
  tr: {
    find: "Bul",
    badge: "Yükseklik hesaplayıcı",
    parent: "Dik üçgen yükseklik hesaplayıcı",
    related: "İlgili hesaplayıcılar",
    faq: "Sık sorulan sorular",
    faqDescription: "Dik üçgen yüksekliği hakkında yaygın soruların yanıtları.",
    known: "Bilinen değerler",
    finds: "Bulur",
    formula: "Ana formül",
    best: "En uygun",
    diagram: "Şema anahtarı",
    result: "Sonucun anlamı",
    when: "Bu hesaplayıcı ne zaman kullanılır",
    mistakes: "Yaygın hatalar",
    common: "Yaygın durumlar:",
    typical: "Tipik kullanımlar:",
    positive: "Lütfen pozitif değerler girin.",
    invalid: "Lütfen geçerli değerler girin.",
    longest: "Hipotenüs c en uzun kenar olmalıdır.",
    invalidTriangle: "Bu kenar uzunlukları geçerli bir dik üçgen oluşturmayabilir.",
    legA: "Kenar a",
    legB: "Kenar b",
    hypotenuseC: "Hipotenüs c",
    altitudeH: "Yükseklik h",
    projectionP: "İzdüşüm p",
    projectionQ: "İzdüşüm q",
    complete: "Hesaplama tamamlandı.",
    unable: "Hesaplanamadı.",
    fix: "Yukarıdaki alanlardaki hataları düzeltin.",
    error: "Hata",
    formulaLabel: "Formül",
    substitution: "Yerine koyma",
    answer: "Cevap",
    explanation: "Açıklama",
    detail: "Ayrıntı",
    stepSidesDescription: "İki kenarın çarpımını kullanarak hipotenüse olan yüksekliği hesaplayın.",
    stepProjDescription: "Hipotenüsün iki parçasının geometrik ortalamasını kullanın.",
    sidesTitle: "Kenarlarla dik üçgen yükseklik hesaplayıcı",
    sidesMeta: "Kenar a, kenar b ve hipotenüs c ile yükseklik h değerini formül, adımlar ve örneklerle bulun.",
    sidesHeading: "Kenarlarla yükseklik h hesapla",
    sidesIntro: "Üç kenar biliniyorsa hipotenüse olan yükseklik doğrudan bir formülle bulunur.",
    sidesPurpose: "a, b ve c girin. Hesaplayıcı h = (a × b) / c formülünü uygular ve adımları gösterir.",
    sidesSummary: "a, b ve c bilindiğinde ve hipotenüse dik uzaklık h gerektiğinde bu sayfayı kullanın.",
    sidesBest: "Geometri ödevleri, alan kontrolü, ispatlar ve pratik ölçüler",
    sidesDiagram: "Şema a ve b kenarlarını, hipotenüs c’yi ve c’ye dik h yüksekliğini gösterir.",
    sidesFormula: "Alan Area = (a × b) / 2 ve Area = (c × h) / 2 olarak yazılabilir; bu yüzden h = (a × b) / c.",
    sidesWhen: "Üç kenar biliniyorsa ve trigonometri kullanmak istemiyorsanız kullanın.",
    sidesWhy: "Formül, aynı alanın iki ifadesini eşitlemekten gelir.",
    sidesMistakes: "c’nin hipotenüs olduğunu ve tüm birimlerin aynı olduğunu kontrol edin.",
    projTitle: "İzdüşümlerle dik üçgen yükseklik hesaplayıcı",
    projMeta: "Hipotenüs üzerindeki p ve q izdüşümlerinden h² = p × q ve h = √(p × q) ile yükseklik h bulun.",
    projHeading: "İzdüşümlerle yükseklik h hesapla",
    projIntro: "Dik açıdan indirilen yükseklik hipotenüsü p ve q olmak üzere iki parçaya ayırır.",
    projPurpose: "p ve q girin. Hesaplayıcı h² = p × q ve h = √(p × q) ile h değerini bulur.",
    projSummary: "Hipotenüsün iki parçası bilindiğinde ve yükseklik gerektiğinde bu sayfayı kullanın.",
    projBest: "Geometrik ortalama, izdüşümler ve üçgen benzerliği",
    projDiagram: "Şema h’nin hipotenüs c’yi p ve q olarak böldüğünü gösterir.",
    projFormula: "Benzerlikten h² = p × q elde edilir; karekök alınca h = √(p × q).",
    projWhen: "Verileriniz üç kenar yerine hipotenüs parçalarıysa kullanın.",
    projWhy: "İki küçük üçgen benzerdir, bu yüzden h / p = q / h ve h² = p × q.",
    projMistakes: "h için p ve q’yu toplamayın; toplam c’yi verir, h ise çarpımın kareköküdür.",
    firstLeg: "a = birinci kenar",
    secondLeg: "b = ikinci kenar",
    hypotenuse: "c = hipotenüs",
    altitudeToHypotenuse: "h = hipotenüse yükseklik",
    geometricMean: "h = p ve q’nun geometrik ortalaması",
    sameUnit: "Tüm ölçüler için aynı birimi kullanın.",
    cLongest: "c her zaman hipotenüs ve en uzun kenardır.",
    hShorter: "Yükseklik h her kenardan daha kısadır.",
    pqPositive: "p ve q pozitif olmalıdır.",
    pqSum: "p + q = c, burada c hipotenüstür.",
    pqOrder: "p ve q sırası sonucu değiştirmez.",
    sideSteps: ["a ve b kenarlarını belirleyin.", "Hipotenüs c’yi belirleyin.", "Aynı birimi kullanın.", "a girin.", "b girin.", "c girin.", "Calculate düğmesine basın."],
    projSteps: ["Hipotenüs üzerindeki p ve q parçalarını belirleyin.", "Aynı birimi kullanın.", "p girin.", "q girin.", "Calculate düğmesine basın.", "h ve adımları okuyun."],
    sideRelated: ["Dik üçgen yükseklik hesaplayıcı", "İzdüşümden yükseklik hesaplayıcı", "Dik üçgen kenar hesaplayıcı", "Yükseklikten alan hesaplayıcı", "Dik üçgen alan hesaplayıcı"],
    projRelated: ["Dik üçgen yükseklik hesaplayıcı", "Kenarlardan yükseklik hesaplayıcı", "Dik üçgen izdüşüm hesaplayıcı", "Yükseklikten alan hesaplayıcı", "Dik üçgen kenar hesaplayıcı"]
  },
  sv: {
    find: "Hitta",
    badge: "Höjdkalkylator",
    parent: "Höjdkalkylator för rätvinklig triangel",
    related: "Relaterade kalkylatorer",
    faq: "Vanliga frågor",
    faqDescription: "Svar på vanliga frågor om höjden i en rätvinklig triangel.",
    known: "Kända värden",
    finds: "Beräknar",
    formula: "Huvudformel",
    best: "Bäst för",
    diagram: "Diagramnyckel",
    result: "Vad resultatet betyder",
    when: "När du ska använda kalkylatorn",
    mistakes: "Vanliga misstag",
    common: "Vanliga situationer:",
    typical: "Typiska användningar:",
    positive: "Ange positiva värden.",
    invalid: "Ange giltiga värden.",
    longest: "Hypotenusan c ska vara den längsta sidan.",
    invalidTriangle: "Dessa sidlängder kanske inte bildar en giltig rätvinklig triangel.",
    legA: "Katet a",
    legB: "Katet b",
    hypotenuseC: "Hypotenusa c",
    altitudeH: "Höjd h",
    projectionP: "Projektion p",
    projectionQ: "Projektion q",
    complete: "Beräkningen är klar.",
    unable: "Kunde inte beräkna.",
    fix: "Rätta felen i fälten ovan.",
    error: "Fel",
    formulaLabel: "Formel",
    substitution: "Insättning",
    answer: "Svar",
    explanation: "Förklaring",
    detail: "Detalj",
    stepSidesDescription: "Beräkna höjden till hypotenusan med produkten av kateterna.",
    stepProjDescription: "Använd det geometriska medelvärdet av de två hypotenusasegmenten.",
    sidesTitle: "Höjdkalkylator för rätvinklig triangel från sidor",
    sidesMeta: "Beräkna höjd h från katet a, katet b och hypotenusa c med formel, steg och exempel.",
    sidesHeading: "Beräkna höjd h från sidor",
    sidesIntro: "När alla tre sidor är kända kan höjden till hypotenusan beräknas direkt.",
    sidesPurpose: "Ange a, b och c. Kalkylatorn använder h = (a × b) / c och visar stegen.",
    sidesSummary: "Använd sidan när a, b och c är kända och du behöver det vinkelräta avståndet till hypotenusan.",
    sidesBest: "Geometriuppgifter, areakontroll, bevis och praktiska mått",
    sidesDiagram: "Diagrammet visar kateterna a och b, hypotenusan c och höjden h vinkelrät mot c.",
    sidesFormula: "Arean kan skrivas som Area = (a × b) / 2 och Area = (c × h) / 2; därför h = (a × b) / c.",
    sidesWhen: "Använd när tre sidor är kända och du vill undvika trigonometri.",
    sidesWhy: "Formeln kommer från att två uttryck för samma area sätts lika.",
    sidesMistakes: "Kontrollera att c är hypotenusan och att alla enheter är samma.",
    projTitle: "Höjdkalkylator för rätvinklig triangel från projektioner",
    projMeta: "Beräkna höjd h från projektionerna p och q på hypotenusan med h² = p × q och h = √(p × q).",
    projHeading: "Beräkna höjd h från projektioner",
    projIntro: "Höjden från den räta vinkeln delar hypotenusan i två segment, p och q.",
    projPurpose: "Ange p och q. Kalkylatorn använder h² = p × q och h = √(p × q) för att hitta h.",
    projSummary: "Använd sidan när de två segmenten på hypotenusan är kända och höjden behövs.",
    projBest: "Geometriskt medelvärde, projektioner och triangellikformighet",
    projDiagram: "Diagrammet visar att h delar hypotenusan c i p och q.",
    projFormula: "Likformighet ger h² = p × q; med kvadratrot fås h = √(p × q).",
    projWhen: "Använd när dina data är hypotenusasegment i stället för alla tre sidor.",
    projWhy: "De två små trianglarna är likformiga, så h / p = q / h och h² = p × q.",
    projMistakes: "Addera inte p och q för att få h; summan ger c, medan h är roten ur produkten.",
    firstLeg: "a = första kateten",
    secondLeg: "b = andra kateten",
    hypotenuse: "c = hypotenusa",
    altitudeToHypotenuse: "h = höjd till hypotenusan",
    geometricMean: "h = geometriskt medelvärde av p och q",
    sameUnit: "Använd samma enhet för alla mått.",
    cLongest: "c är alltid hypotenusan och den längsta sidan.",
    hShorter: "Höjden h är kortare än varje katet.",
    pqPositive: "p och q måste vara positiva.",
    pqSum: "p + q = c, där c är hypotenusan.",
    pqOrder: "Ordningen på p och q ändrar inte resultatet.",
    sideSteps: ["Identifiera kateterna a och b.", "Identifiera hypotenusan c.", "Använd samma enhet.", "Ange a.", "Ange b.", "Ange c.", "Tryck på Calculate."],
    projSteps: ["Identifiera segmenten p och q på hypotenusan.", "Använd samma enhet.", "Ange p.", "Ange q.", "Tryck på Calculate.", "Läs h och stegen."],
    sideRelated: ["Höjdkalkylator för rätvinklig triangel", "Höjdkalkylator från projektioner", "Sidkalkylator för rätvinklig triangel", "Arealkalkylator från höjd", "Arealkalkylator för rätvinklig triangel"],
    projRelated: ["Höjdkalkylator för rätvinklig triangel", "Höjdkalkylator från sidor", "Projektionskalkylator för rätvinklig triangel", "Arealkalkylator från höjd", "Sidkalkylator för rätvinklig triangel"]
  },
  zh: {
    find: "求",
    badge: "高计算器",
    parent: "直角三角形高计算器",
    related: "相关计算器",
    faq: "常见问题",
    faqDescription: "关于直角三角形高的常见问题解答。",
    known: "已知值",
    finds: "求出",
    formula: "主要公式",
    best: "适用于",
    diagram: "图示说明",
    result: "结果含义",
    when: "何时使用此计算器",
    mistakes: "常见错误",
    common: "常见情况：",
    typical: "典型用途：",
    positive: "请输入正数。",
    invalid: "请输入有效数值。",
    longest: "斜边 c 应该是最长边。",
    invalidTriangle: "这些边长可能无法组成有效的直角三角形。",
    legA: "直角边 a",
    legB: "直角边 b",
    hypotenuseC: "斜边 c",
    altitudeH: "高 h",
    projectionP: "投影 p",
    projectionQ: "投影 q",
    complete: "计算完成。",
    unable: "无法计算。",
    fix: "请修正上方输入框中的错误。",
    error: "错误",
    formulaLabel: "公式",
    substitution: "代入",
    answer: "答案",
    explanation: "说明",
    detail: "详情",
    stepSidesDescription: "使用两条直角边的乘积计算到斜边的高。",
    stepProjDescription: "使用斜边两段的几何平均数。",
    sidesTitle: "由边长求直角三角形高计算器",
    sidesMeta: "用直角边 a、直角边 b 和斜边 c 求高 h，包含公式、步骤和示例。",
    sidesHeading: "由边长计算高 h",
    sidesIntro: "如果三条边都已知，到斜边的高可以用一个直接公式求出。",
    sidesPurpose: "输入 a、b 和 c。计算器使用 h = (a × b) / c 并显示步骤。",
    sidesSummary: "当 a、b、c 已知，并且需要到斜边的垂直距离 h 时使用此页。",
    sidesBest: "几何作业、面积校验、证明和实际测量",
    sidesDiagram: "图中显示直角边 a 和 b、斜边 c，以及垂直于 c 的高 h。",
    sidesFormula: "面积可写为 Area = (a × b) / 2，也可写为 Area = (c × h) / 2，因此 h = (a × b) / c。",
    sidesWhen: "当三边已知且不想使用三角函数时使用。",
    sidesWhy: "该公式来自同一面积的两种表达式相等。",
    sidesMistakes: "确认 c 是斜边而不是直角边，并且所有单位一致。",
    projTitle: "由投影求直角三角形高计算器",
    projMeta: "用斜边上的投影 p 和 q，通过 h² = p × q 与 h = √(p × q) 求高 h。",
    projHeading: "由投影计算高 h",
    projIntro: "从直角顶点作高会把斜边分成 p 和 q 两段。",
    projPurpose: "输入 p 和 q。计算器使用 h² = p × q 与 h = √(p × q) 求 h。",
    projSummary: "当已知斜边的两段并需要高时使用此页。",
    projBest: "几何平均数、投影和相似三角形问题",
    projDiagram: "图中显示 h 将斜边 c 分成 p 和 q。",
    projFormula: "由相似关系可得 h² = p × q；开平方得到 h = √(p × q)。",
    projWhen: "当已知的是斜边分段而不是三条边时使用。",
    projWhy: "两个小三角形相似，所以 h / p = q / h，因此 h² = p × q。",
    projMistakes: "不要把 p 和 q 相加来求 h；和是 c，而 h 是乘积的平方根。",
    firstLeg: "a = 第一条直角边",
    secondLeg: "b = 第二条直角边",
    hypotenuse: "c = 斜边",
    altitudeToHypotenuse: "h = 到斜边的高",
    geometricMean: "h = p 和 q 的几何平均数",
    sameUnit: "所有测量值使用同一单位。",
    cLongest: "c 始终是斜边，也是最长边。",
    hShorter: "高 h 小于每条直角边。",
    pqPositive: "p 和 q 必须为正数。",
    pqSum: "p + q = c，其中 c 是斜边。",
    pqOrder: "p 和 q 的顺序不会改变结果。",
    sideSteps: ["确定直角边 a 和 b。", "确定斜边 c。", "使用同一单位。", "输入 a。", "输入 b。", "输入 c。", "点击 Calculate。"],
    projSteps: ["确定斜边上的 p 和 q。", "使用同一单位。", "输入 p。", "输入 q。", "点击 Calculate。", "查看 h 和步骤。"],
    sideRelated: ["直角三角形高计算器", "由投影求高计算器", "直角三角形边长计算器", "由高求面积计算器", "直角三角形面积计算器"],
    projRelated: ["直角三角形高计算器", "由边长求高计算器", "直角三角形投影计算器", "由高求面积计算器", "直角三角形边长计算器"]
  }
};

const EXTRA_TRANSLATIONS: Partial<Record<Locale, TranslationSource>> = {
  fr: createRomanceCopy({
    find: "Trouver",
    badge: "Calculatrice de hauteur",
    parent: "Calculatrice de hauteur de triangle rectangle",
    related: "Calculatrices associées",
    faq: "Questions fréquentes",
    faqDescription: "Réponses aux questions courantes sur la hauteur d’un triangle rectangle.",
    known: "Valeurs connues",
    finds: "Calcule",
    formula: "Formule principale",
    best: "Idéal pour",
    diagram: "Légende du schéma",
    result: "Ce que signifie le résultat",
    when: "Quand utiliser cette calculatrice",
    mistakes: "Erreurs courantes",
    common: "Situations courantes :",
    typical: "Utilisations typiques :",
    positive: "Veuillez saisir des valeurs positives.",
    invalid: "Veuillez saisir des valeurs valides.",
    longest: "L’hypoténuse c doit être le côté le plus long.",
    invalidTriangle: "Ces longueurs peuvent ne pas former un triangle rectangle valide.",
    legA: "Côté a",
    legB: "Côté b",
    hypotenuseC: "Hypoténuse c",
    altitudeH: "Hauteur h",
    projectionP: "Projection p",
    projectionQ: "Projection q",
    complete: "Calcul terminé.",
    unable: "Impossible de calculer.",
    fix: "Veuillez corriger les erreurs dans les champs ci-dessus.",
    error: "Erreur",
    formulaLabel: "Formule",
    substitution: "Substitution",
    answer: "Réponse",
    explanation: "Explication",
    detail: "Détail",
    stepSidesDescription: "Calculez la hauteur à l’hypoténuse avec le rapport du produit des côtés.",
    stepProjDescription: "Prenez la moyenne géométrique des deux segments de l’hypoténuse.",
    sidesTitle: "Calculatrice de hauteur de triangle rectangle à partir des côtés",
    sidesMeta: "Calculez la hauteur h à partir du côté a, du côté b et de l’hypoténuse c, avec formule, étapes et exemples.",
    sidesHeading: "Calculer la hauteur h à partir des côtés",
    sidesFormulaTitle: "Hauteur à partir des côtés",
    sidesFormulaDescription: "Calcule la hauteur h à partir du côté a, du côté b et de l’hypoténuse c.",
    sidesIntro: "Si les trois côtés d’un triangle rectangle sont connus, la hauteur à l’hypoténuse se trouve avec une relation directe.",
    sidesPurpose: "Saisissez le côté a, le côté b et l’hypoténuse c. La calculatrice applique h = (a × b) / c et affiche les étapes.",
    sidesHowWorks: "Comment fonctionne cette calculatrice de hauteur à partir des côtés",
    sidesSummary: "Ce que cette calculatrice résout",
    sidesSummaryIntro: "Utilisez cette page lorsque a, b et c sont connus et que vous cherchez la distance perpendiculaire à l’hypoténuse.",
    sidesKnown: "Côté a, côté b et hypoténuse c",
    sidesFinds: "Hauteur h vers l’hypoténuse",
    sidesBest: "Devoirs de géométrie, vérifications d’aire, preuves et mesures de construction",
    sidesDiagramTitle: "Schéma du triangle : hauteur à partir des côtés",
    sidesDiagramIntro: "Le schéma montre a et b formant l’angle droit, c comme hypoténuse et h abaissée perpendiculairement sur c.",
    sidesDiagramCaption: "Triangle rectangle avec côté a, côté b, hypoténuse c et hauteur h.",
    firstLeg: "a = premier côté",
    firstLegDesc: "Un des deux côtés qui forment l’angle droit; il apparaît dans le produit.",
    secondLeg: "b = deuxième côté",
    secondLegDesc: "L’autre côté de l’angle droit; il est multiplié par a.",
    hypDesc: "Le côté le plus long, opposé à l’angle droit. h est tracée vers ce côté.",
    altitudeDesc: "La distance perpendiculaire entre le sommet droit et l’hypoténuse.",
    sameUnit: "Utilisez la même unité pour les trois mesures.",
    cLongest: "c est toujours l’hypoténuse et le côté le plus long.",
    hShorter: "La hauteur h est plus courte que chaque côté.",
    sidesFormulaH2: "Formule de hauteur à partir des côtés",
    areaP1: "Cette méthode fonctionne parce que l’aire du même triangle rectangle peut s’écrire de deux façons.",
    areaP2: "Avec les côtés, Area = (a × b) / 2. Avec l’hypoténuse comme base, Area = (c × h) / 2.",
    areaP3: "En égalant ces expressions et en isolant h, on obtient h = (a × b) / c.",
    howTo: "Comment utiliser cette calculatrice",
    identifyLegs: "Identifiez les deux côtés qui forment l’angle de 90° et nommez-les a et b.",
    identifyHyp: "Identifiez l’hypoténuse c, le côté le plus long opposé à l’angle droit.",
    sameUnitStep: "Vérifiez que toutes les mesures utilisent la même unité.",
    enterA: "Saisissez le côté a dans le premier champ.",
    enterB: "Saisissez le côté b dans le deuxième champ.",
    enterC: "Saisissez l’hypoténuse c dans le troisième champ.",
    calculateSides: "Appuyez sur Calculate pour afficher h et les étapes.",
    sidesExampleTitle: "Exemple étape par étape : triangle 6-8-10",
    sidesExampleIntro: "Supposons que a = 6, b = 8 et c = 10.",
    sidesExampleAnswer: "La hauteur à l’hypoténuse est 4.8 unités. Vérification : (6 × 8) / 2 = 24 et (10 × 4.8) / 2 = 24.",
    sidesMeaning1: "h est la plus courte distance du sommet de l’angle droit à l’hypoténuse.",
    sidesMeaning2: "C’est aussi la hauteur du triangle lorsque l’hypoténuse sert de base.",
    sidesWhen: "Utilisez cette méthode lorsque les trois côtés sont déjà connus et que vous voulez éviter la trigonométrie.",
    sidesWhenItems: [
      "Un exercice donne les trois côtés et demande la hauteur.",
      "Vous voulez vérifier l’aire avec Area = (c × h) / 2.",
      "Vous avez besoin de la hauteur perpendiculaire d’un support triangulaire.",
      "Vous préparez une preuve avec les relations de moyenne géométrique."
    ],
    sidesWhyTitle: "Pourquoi la formule fonctionne",
    sidesWhy1: "Un triangle a une seule aire, même si l’on choisit différentes bases et hauteurs.",
    sidesWhy2: "Comparer Area = (a × b) / 2 et Area = (c × h) / 2 donne h = (a × b) / c.",
    sidesMistakesIntro: "La formule est simple, mais une mauvaise étiquette change le résultat.",
    sidesMistakes: [
      "Traiter c comme un côté court. c est toujours l’hypoténuse.",
      "Saisir une valeur de c plus petite que a ou b.",
      "Oublier de diviser a × b par c.",
      "Mélanger des unités différentes.",
      "Confondre h avec l’un des côtés initiaux."
    ],
    sidesAdditionalTitle: "Exemple supplémentaire : triangle 5-12-13",
    sidesAdditionalIntro: "Le triangle 5-12-13 est un triplet pythagoricien courant.",
    relatedSides: [
      "Calculatrice de hauteur de triangle rectangle",
      "Calculatrice de hauteur à partir des projections",
      "Calculatrice de côté de triangle rectangle",
      "Calculatrice d’aire à partir de la hauteur",
      "Calculatrice d’aire de triangle rectangle"
    ],
    sidesFaqs: [
      ["Quelle est la formule de la hauteur à partir des côtés ?", "La formule est h = (a × b) / c, où a et b sont les côtés et c est l’hypoténuse."],
      ["Pourquoi utilise-t-on le produit des côtés ?", "Parce que l’aire vaut (a × b) / 2 et aussi (c × h) / 2."],
      ["Que représente h ?", "h représente la distance perpendiculaire du sommet droit à l’hypoténuse."],
      ["Faut-il connaître les angles ?", "Non. a, b et c suffisent."],
      ["h peut-elle être plus longue qu’un côté ?", "Non. Dans un triangle rectangle valide, h est plus courte que les deux côtés."]
    ],
    projTitle: "Calculatrice de hauteur de triangle rectangle à partir des projections",
    projMeta: "Calculez la hauteur h à partir des projections p et q sur l’hypoténuse avec h² = p × q et h = √(p × q).",
    projHeading: "Calculer la hauteur h à partir des projections",
    projFormulaTitle: "Hauteur à partir des projections",
    projFormulaDescription: "Calcule la hauteur h à partir des projections p et q sur l’hypoténuse.",
    projIntro: "Quand la hauteur issue de l’angle droit rencontre l’hypoténuse, elle la divise en deux segments p et q.",
    projPurpose: "Saisissez p et q. La calculatrice utilise h² = p × q et h = √(p × q) pour trouver h.",
    projHowWorks: "Comment fonctionne cette calculatrice de hauteur à partir des projections",
    projSummaryIntro: "Utilisez cette page lorsque les deux segments de l’hypoténuse sont connus, sans calculer d’abord les côtés.",
    projKnown: "Projection p et projection q",
    projBest: "Moyenne géométrique, projections et preuves par similitude",
    projDiagramTitle: "Schéma du triangle : hauteur à partir des projections",
    projDiagramIntro: "Le schéma montre h divisant l’hypoténuse c en p et q. h est la moyenne géométrique de ces segments.",
    projDiagramCaption: "Hypoténuse c divisée en p et q par la hauteur h.",
    projLegADesc: "Non utilisé directement ici, mais lié à p par a² = p × c.",
    projLegBDesc: "Lié à q par b² = q × c.",
    projHypDesc: "L’hypoténuse complète est la somme des deux projections.",
    projResult: "h = moyenne géométrique de p et q",
    projResultDesc: "La hauteur est la racine carrée du produit des deux projections.",
    pqPositive: "p et q doivent être positifs.",
    pqSum: "p + q = c, où c est l’hypoténuse.",
    pqOrder: "L’ordre de p et q ne change pas le résultat.",
    projFormulaH2: "Formule de hauteur à partir des projections",
    projP1: "La hauteur crée deux petits triangles rectangles à l’intérieur du triangle initial.",
    projP2: "Par similitude, h² = p × q. h est donc la moyenne géométrique des projections.",
    projP3: "En prenant la racine carrée, on obtient h = √(p × q).",
    projSteps: [
      "Repérez les deux segments de l’hypoténuse créés par la hauteur.",
      "Nommez un segment p et l’autre q.",
      "Vérifiez que les deux valeurs utilisent la même unité.",
      "Saisissez p dans le premier champ.",
      "Saisissez q dans le deuxième champ.",
      "Appuyez sur Calculate pour obtenir h et les étapes."
    ],
    projExampleTitle: "Exemple étape par étape : p = 3.6 et q = 6.4",
    projExampleIntro: "Supposons que l’hypoténuse soit divisée en p = 3.6 et q = 6.4.",
    projExampleAnswer: "La hauteur est 4.8 unités. Ici c = p + q = 10, et pour le triangle 6-8-10, h = (6 × 8) / 10 = 4.8.",
    projMeaning1: "h est la distance perpendiculaire du sommet droit à l’hypoténuse.",
    projMeaning2: "Elle indique la hauteur du triangle lorsque l’hypoténuse sert de base.",
    projWhen: "Cette calculatrice est utile lorsque les données sont des segments de l’hypoténuse plutôt que les trois côtés.",
    projWhenItems: [
      "Un exercice donne p et q directement.",
      "Vous travaillez une preuve de moyenne géométrique.",
      "Deux distances sont mesurées sur une base depuis le pied d’une perpendiculaire.",
      "Vous voulez h sans calculer d’abord a et b."
    ],
    projWhyTitle: "Pourquoi la formule fonctionne : la moyenne géométrique",
    projWhy1: "Les deux petits triangles créés par la hauteur sont semblables entre eux et au triangle initial.",
    projWhy2: "La proportion h / p = q / h donne h² = p × q.",
    projMistakesIntro: "La relation est courte, mais les détails comptent.",
    projMistakes: [
      "Additionner p et q au lieu de les multiplier. La somme donne c, pas h.",
      "Oublier la racine carrée. p × q est h².",
      "Confondre projections et côtés.",
      "Utiliser zéro ou des valeurs négatives.",
      "Prendre h² comme hauteur finale."
    ],
    projAdditionalTitle: "Exemple supplémentaire : projections égales",
    projAdditionalIntro: "Dans un triangle 45-45-90, la hauteur divise l’hypoténuse en deux parties égales.",
    relatedProj: [
      "Calculatrice de hauteur de triangle rectangle",
      "Calculatrice de hauteur à partir des côtés",
      "Calculatrice de projection de triangle rectangle",
      "Calculatrice d’aire à partir de la hauteur",
      "Calculatrice de côté de triangle rectangle"
    ],
    projFaqs: [
      ["Quelle est la formule de la hauteur à partir des projections ?", "h = √(p × q), ou de façon équivalente h² = p × q."],
      ["Que sont p et q ?", "Ce sont les deux segments de l’hypoténuse créés par le pied de la hauteur."],
      ["À quoi est égal p + q ?", "p + q = c, où c est l’hypoténuse complète."],
      ["Pourquoi parle-t-on de moyenne géométrique ?", "Parce que h est la racine carrée du produit p × q."],
      ["Peut-on trouver les côtés à partir de p et q ?", "Oui. D’abord c = p + q, puis a = √(p × c) et b = √(q × c)."]
    ]
  }),
  de: createRomanceCopy({
    find: "Finden",
    badge: "Höhenrechner",
    parent: "Höhenrechner für rechtwinklige Dreiecke",
    related: "Verwandte Rechner",
    faq: "Häufige Fragen",
    faqDescription: "Antworten auf häufige Fragen zur Höhe im rechtwinkligen Dreieck.",
    known: "Bekannte Werte",
    finds: "Berechnet",
    formula: "Hauptformel",
    best: "Am besten für",
    diagram: "Diagrammlegende",
    result: "Was das Ergebnis bedeutet",
    when: "Wann dieser Rechner sinnvoll ist",
    mistakes: "Häufige Fehler",
    common: "Typische Situationen:",
    typical: "Typische Anwendungen:",
    positive: "Bitte positive Werte eingeben.",
    invalid: "Bitte gültige Werte eingeben.",
    longest: "Die Hypotenuse c sollte die längste Seite sein.",
    invalidTriangle: "Diese Seitenlängen bilden möglicherweise kein gültiges rechtwinkliges Dreieck.",
    legA: "Kathete a",
    legB: "Kathete b",
    hypotenuseC: "Hypotenuse c",
    altitudeH: "Höhe h",
    projectionP: "Projektion p",
    projectionQ: "Projektion q",
    complete: "Berechnung abgeschlossen.",
    unable: "Berechnung nicht möglich.",
    fix: "Bitte korrigieren Sie die Fehler in den Feldern oben.",
    error: "Fehler",
    formulaLabel: "Formel",
    substitution: "Einsetzen",
    answer: "Antwort",
    explanation: "Erklärung",
    detail: "Detail",
    stepSidesDescription: "Berechnen Sie die Höhe zur Hypotenuse mit dem Produkt der Katheten.",
    stepProjDescription: "Verwenden Sie das geometrische Mittel der beiden Hypotenusenabschnitte.",
    sidesTitle: "Höhenrechner für rechtwinklige Dreiecke aus Seiten",
    sidesMeta: "Berechnen Sie die Höhe h aus Kathete a, Kathete b und Hypotenuse c mit Formel, Schritten und Beispielen.",
    sidesHeading: "Höhe h aus Seiten berechnen",
    sidesFormulaTitle: "Höhe aus Seiten",
    sidesFormulaDescription: "Berechnet die Höhe h aus Kathete a, Kathete b und Hypotenuse c.",
    sidesIntro: "Wenn alle drei Seiten eines rechtwinkligen Dreiecks bekannt sind, lässt sich die Höhe zur Hypotenuse direkt berechnen.",
    sidesPurpose: "Geben Sie Kathete a, Kathete b und Hypotenuse c ein. Der Rechner nutzt h = (a × b) / c und zeigt die Schritte.",
    sidesHowWorks: "So funktioniert der Höhenrechner aus Seiten",
    sidesSummary: "Was dieser Rechner löst",
    sidesSummaryIntro: "Nutzen Sie diese Seite, wenn a, b und c bekannt sind und die senkrechte Höhe h zur Hypotenuse gesucht ist.",
    sidesKnown: "Kathete a, Kathete b und Hypotenuse c",
    sidesFinds: "Höhe h zur Hypotenuse",
    sidesBest: "Geometrieaufgaben, Flächenkontrolle, Beweise und Konstruktionsmaße",
    sidesDiagramTitle: "Dreiecksdiagramm: Höhe aus Seiten",
    sidesDiagramIntro: "Das Diagramm zeigt a und b als Katheten, c als Hypotenuse und h als Senkrechte auf c.",
    sidesDiagramCaption: "Rechtwinkliges Dreieck mit Kathete a, Kathete b, Hypotenuse c und Höhe h.",
    firstLeg: "a = erste Kathete",
    firstLegDesc: "Eine der beiden Seiten am rechten Winkel; sie ist ein Faktor der Formel.",
    secondLeg: "b = zweite Kathete",
    secondLegDesc: "Die andere Kathete; sie wird mit a multipliziert.",
    hypDesc: "Die längste Seite gegenüber dem rechten Winkel. h wird auf diese Seite gezeichnet.",
    altitudeDesc: "Der senkrechte Abstand vom rechten Winkel zur Hypotenuse.",
    sameUnit: "Alle drei Maße sollten dieselbe Einheit verwenden.",
    cLongest: "c ist immer die Hypotenuse und die längste Seite.",
    hShorter: "Die Höhe h ist kürzer als jede Kathete.",
    sidesFormulaH2: "Formel für die Höhe aus Seiten",
    areaP1: "Diese Methode funktioniert, weil die Fläche desselben rechtwinkligen Dreiecks auf zwei Arten geschrieben werden kann.",
    areaP2: "Mit den Katheten gilt Area = (a × b) / 2. Mit der Hypotenuse als Basis gilt Area = (c × h) / 2.",
    areaP3: "Setzt man beide Ausdrücke gleich und löst nach h auf, erhält man h = (a × b) / c.",
    howTo: "So verwenden Sie diesen Rechner",
    identifyLegs: "Bestimmen Sie die beiden Katheten am 90°-Winkel und nennen Sie sie a und b.",
    identifyHyp: "Bestimmen Sie die Hypotenuse c, die längste Seite gegenüber dem rechten Winkel.",
    sameUnitStep: "Prüfen Sie, dass alle Werte dieselbe Einheit haben.",
    enterA: "Geben Sie Kathete a in das erste Feld ein.",
    enterB: "Geben Sie Kathete b in das zweite Feld ein.",
    enterC: "Geben Sie Hypotenuse c in das dritte Feld ein.",
    calculateSides: "Drücken Sie Calculate, um h und die Schritte zu sehen.",
    sidesExampleTitle: "Schritt-für-Schritt-Beispiel: 6-8-10-Dreieck",
    sidesExampleIntro: "Angenommen, a = 6, b = 8 und c = 10.",
    sidesExampleAnswer: "Die Höhe zur Hypotenuse beträgt 4.8 Einheiten. Kontrolle: (6 × 8) / 2 = 24 und (10 × 4.8) / 2 = 24.",
    sidesMeaning1: "h ist der kürzeste Abstand vom rechten Winkel zur Hypotenuse.",
    sidesMeaning2: "Sie ist auch die Dreieckshöhe, wenn die Hypotenuse als Basis verwendet wird.",
    sidesWhen: "Verwenden Sie diese Methode, wenn alle drei Seiten bekannt sind und keine Trigonometrie nötig sein soll.",
    sidesWhenItems: [
      "Eine Aufgabe gibt alle drei Seiten und fragt nach der Höhe.",
      "Sie möchten die Fläche mit Area = (c × h) / 2 prüfen.",
      "Sie benötigen die senkrechte Höhe eines dreieckigen Bauteils.",
      "Sie arbeiten an einem Beweis mit geometrischen Mitteln."
    ],
    sidesWhyTitle: "Warum die Formel funktioniert",
    sidesWhy1: "Ein Dreieck hat nur eine Fläche, auch wenn unterschiedliche Basis-Höhen-Paare verwendet werden.",
    sidesWhy2: "Aus Area = (a × b) / 2 und Area = (c × h) / 2 folgt h = (a × b) / c.",
    sidesMistakesIntro: "Die Formel ist einfach, aber falsche Bezeichnungen führen zu falschen Ergebnissen.",
    sidesMistakes: [
      "c als Kathete behandeln. c ist immer die Hypotenuse.",
      "Ein c eingeben, das kleiner als a oder b ist.",
      "Vergessen, a × b durch c zu teilen.",
      "Verschiedene Einheiten mischen.",
      "h mit einer ursprünglichen Kathete verwechseln."
    ],
    sidesAdditionalTitle: "Zusätzliches Beispiel: 5-12-13-Dreieck",
    sidesAdditionalIntro: "Das 5-12-13-Dreieck ist ein häufiges pythagoreisches Tripel.",
    relatedSides: [
      "Höhenrechner für rechtwinklige Dreiecke",
      "Höhenrechner aus Projektionen",
      "Seitenrechner für rechtwinklige Dreiecke",
      "Flächenrechner aus Höhe",
      "Flächenrechner für rechtwinklige Dreiecke"
    ],
    sidesFaqs: [
      ["Wie lautet die Formel für die Höhe aus Seiten?", "Die Formel lautet h = (a × b) / c, wobei a und b Katheten und c die Hypotenuse ist."],
      ["Warum wird das Produkt der Katheten verwendet?", "Weil die Fläche (a × b) / 2 und auch (c × h) / 2 ist."],
      ["Was stellt h dar?", "h ist der senkrechte Abstand vom rechten Winkel zur Hypotenuse."],
      ["Muss ich die Winkel kennen?", "Nein. a, b und c reichen aus."],
      ["Kann h länger als eine Kathete sein?", "Nein. In einem gültigen rechtwinkligen Dreieck ist h kürzer als beide Katheten."]
    ],
    projTitle: "Höhenrechner für rechtwinklige Dreiecke aus Projektionen",
    projMeta: "Berechnen Sie die Höhe h aus den Projektionen p und q auf der Hypotenuse mit h² = p × q und h = √(p × q).",
    projHeading: "Höhe h aus Projektionen berechnen",
    projFormulaTitle: "Höhe aus Projektionen",
    projFormulaDescription: "Berechnet die Höhe h aus den Projektionen p und q auf der Hypotenuse.",
    projIntro: "Wenn die Höhe vom rechten Winkel auf die Hypotenuse trifft, teilt sie diese in zwei Abschnitte p und q.",
    projPurpose: "Geben Sie p und q ein. Der Rechner nutzt h² = p × q und h = √(p × q), um h zu finden.",
    projHowWorks: "So funktioniert der Höhenrechner aus Projektionen",
    projSummaryIntro: "Nutzen Sie diese Seite, wenn die beiden Hypotenusenabschnitte bekannt sind, ohne zuerst die Katheten zu berechnen.",
    projKnown: "Projektion p und Projektion q",
    projBest: "Geometrisches Mittel, Projektionen und Ähnlichkeitsbeweise",
    projDiagramTitle: "Dreiecksdiagramm: Höhe aus Projektionen",
    projDiagramIntro: "Das Diagramm zeigt, wie h die Hypotenuse c in p und q teilt. h ist das geometrische Mittel dieser Abschnitte.",
    projDiagramCaption: "Hypotenuse c, durch Höhe h in p und q geteilt.",
    projLegADesc: "Hier nicht direkt verwendet, aber mit p durch a² = p × c verbunden.",
    projLegBDesc: "Mit q durch b² = q × c verbunden.",
    projHypDesc: "Die ganze Hypotenuse ist die Summe beider Projektionen.",
    projResult: "h = geometrisches Mittel von p und q",
    projResultDesc: "Die Höhe ist die Quadratwurzel aus dem Produkt der beiden Projektionen.",
    pqPositive: "p und q müssen positiv sein.",
    pqSum: "p + q = c, wobei c die Hypotenuse ist.",
    pqOrder: "Die Reihenfolge von p und q ändert das Ergebnis nicht.",
    projFormulaH2: "Formel für die Höhe aus Projektionen",
    projP1: "Die Höhe erzeugt zwei kleinere rechtwinklige Dreiecke im ursprünglichen Dreieck.",
    projP2: "Aus der Ähnlichkeit folgt h² = p × q. Daher ist h das geometrische Mittel der Projektionen.",
    projP3: "Durch Ziehen der Quadratwurzel erhält man h = √(p × q).",
    projSteps: [
      "Bestimmen Sie die beiden Abschnitte der Hypotenuse, die durch die Höhe entstehen.",
      "Nennen Sie einen Abschnitt p und den anderen q.",
      "Prüfen Sie, dass beide Werte dieselbe Einheit haben.",
      "Geben Sie p in das erste Feld ein.",
      "Geben Sie q in das zweite Feld ein.",
      "Drücken Sie Calculate, um h und die Schritte zu erhalten."
    ],
    projExampleTitle: "Schritt-für-Schritt-Beispiel: p = 3.6 und q = 6.4",
    projExampleIntro: "Angenommen, die Hypotenuse ist in p = 3.6 und q = 6.4 geteilt.",
    projExampleAnswer: "Die Höhe beträgt 4.8 Einheiten. Hier ist c = p + q = 10, und für das 6-8-10-Dreieck gilt h = (6 × 8) / 10 = 4.8.",
    projMeaning1: "h ist der senkrechte Abstand vom rechten Winkel zur Hypotenuse.",
    projMeaning2: "Sie beschreibt die Höhe des Dreiecks, wenn die Hypotenuse als Basis dient.",
    projWhen: "Dieser Rechner ist nützlich, wenn die Daten Hypotenusenabschnitte und nicht alle drei Seiten sind.",
    projWhenItems: [
      "Eine Aufgabe gibt p und q direkt an.",
      "Sie arbeiten mit einem Beweis zum geometrischen Mittel.",
      "Zwei Abstände auf einer Basislinie wurden vom Fußpunkt einer Senkrechten gemessen.",
      "Sie möchten h finden, ohne zuerst a und b zu berechnen."
    ],
    projWhyTitle: "Warum die Formel funktioniert: das geometrische Mittel",
    projWhy1: "Die zwei kleinen Dreiecke, die durch die Höhe entstehen, sind zueinander und zum ursprünglichen Dreieck ähnlich.",
    projWhy2: "Aus der Proportion h / p = q / h folgt h² = p × q.",
    projMistakesIntro: "Die Beziehung ist kurz, aber die Details sind wichtig.",
    projMistakes: [
      "p und q addieren statt multiplizieren. Die Summe ergibt c, nicht h.",
      "Die Quadratwurzel vergessen. p × q ist h².",
      "Projektionen mit Katheten verwechseln.",
      "Null oder negative Werte verwenden.",
      "h² als endgültige Höhe lesen."
    ],
    projAdditionalTitle: "Zusätzliches Beispiel: gleiche Projektionen",
    projAdditionalIntro: "In einem 45-45-90-Dreieck teilt die Höhe die Hypotenuse in zwei gleiche Teile.",
    relatedProj: [
      "Höhenrechner für rechtwinklige Dreiecke",
      "Höhenrechner aus Seiten",
      "Projektionsrechner für rechtwinklige Dreiecke",
      "Flächenrechner aus Höhe",
      "Seitenrechner für rechtwinklige Dreiecke"
    ],
    projFaqs: [
      ["Wie lautet die Formel für die Höhe aus Projektionen?", "h = √(p × q), äquivalent zu h² = p × q."],
      ["Was sind p und q?", "Es sind die zwei Abschnitte der Hypotenuse, die durch den Fußpunkt der Höhe entstehen."],
      ["Was ist p + q?", "p + q = c, wobei c die gesamte Hypotenuse ist."],
      ["Warum heißt es geometrisches Mittel?", "Weil h die Quadratwurzel aus dem Produkt p × q ist."],
      ["Kann man aus p und q die Katheten finden?", "Ja. Zuerst c = p + q, dann a = √(p × c) und b = √(q × c)."]
    ]
  })
};

type SimpleCopyInput = {
  find: string;
  badge: string;
  parent: string;
  related: string;
  faq: string;
  faqDescription: string;
  known: string;
  finds: string;
  formula: string;
  best: string;
  diagram: string;
  result: string;
  when: string;
  mistakes: string;
  common: string;
  typical: string;
  positive: string;
  invalid: string;
  longest: string;
  invalidTriangle: string;
  legA: string;
  legB: string;
  hypotenuseC: string;
  altitudeH: string;
  projectionP: string;
  projectionQ: string;
  complete: string;
  unable: string;
  fix: string;
  error: string;
  formulaLabel: string;
  substitution: string;
  answer: string;
  explanation: string;
  detail: string;
  stepSidesDescription: string;
  stepProjDescription: string;
  sidesTitle: string;
  sidesMeta: string;
  sidesHeading: string;
  sidesIntro: string;
  sidesPurpose: string;
  sidesSummary: string;
  sidesBest: string;
  sidesDiagram: string;
  sidesFormula: string;
  sidesWhen: string;
  sidesWhy: string;
  sidesMistakes: string;
  projTitle: string;
  projMeta: string;
  projHeading: string;
  projIntro: string;
  projPurpose: string;
  projSummary: string;
  projBest: string;
  projDiagram: string;
  projFormula: string;
  projWhen: string;
  projWhy: string;
  projMistakes: string;
  firstLeg: string;
  secondLeg: string;
  hypotenuse: string;
  altitudeToHypotenuse: string;
  geometricMean: string;
  sameUnit: string;
  cLongest: string;
  hShorter: string;
  pqPositive: string;
  pqSum: string;
  pqOrder: string;
  sideSteps: string[];
  projSteps: string[];
  sideRelated: string[];
  projRelated: string[];
};

const SIMPLE_TRANSLATIONS: Partial<Record<Locale, SimpleCopyInput>> = {
  it: {
    find: "Trova",
    badge: "Calcolatrice altezza",
    parent: "Calcolatrice altezza triangolo rettangolo",
    related: "Calcolatrici correlate",
    faq: "Domande frequenti",
    faqDescription: "Risposte alle domande comuni sull’altezza di un triangolo rettangolo.",
    known: "Valori noti",
    finds: "Calcola",
    formula: "Formula principale",
    best: "Ideale per",
    diagram: "Legenda del diagramma",
    result: "Che cosa significa il risultato",
    when: "Quando usare questa calcolatrice",
    mistakes: "Errori comuni",
    common: "Situazioni comuni:",
    typical: "Usi tipici:",
    positive: "Inserisci valori positivi.",
    invalid: "Inserisci valori validi.",
    longest: "L’ipotenusa c deve essere il lato più lungo.",
    invalidTriangle: "Queste lunghezze potrebbero non formare un triangolo rettangolo valido.",
    legA: "Cateto a",
    legB: "Cateto b",
    hypotenuseC: "Ipotenusa c",
    altitudeH: "Altezza h",
    projectionP: "Proiezione p",
    projectionQ: "Proiezione q",
    complete: "Calcolo completato.",
    unable: "Impossibile calcolare.",
    fix: "Correggi gli errori nei campi sopra.",
    error: "Errore",
    formulaLabel: "Formula",
    substitution: "Sostituzione",
    answer: "Risposta",
    explanation: "Spiegazione",
    detail: "Dettaglio",
    stepSidesDescription: "Calcola l’altezza all’ipotenusa usando il prodotto dei cateti.",
    stepProjDescription: "Usa la media geometrica dei due segmenti dell’ipotenusa.",
    sidesTitle: "Calcolatrice altezza triangolo rettangolo dai lati",
    sidesMeta: "Trova l’altezza h dal cateto a, dal cateto b e dall’ipotenusa c con formula, passaggi ed esempi.",
    sidesHeading: "Calcola altezza h dai lati",
    sidesIntro: "Se conosci i tre lati di un triangolo rettangolo, l’altezza all’ipotenusa si trova con una formula diretta.",
    sidesPurpose: "Inserisci a, b e c. La calcolatrice applica h = (a × b) / c e mostra il lavoro passo dopo passo.",
    sidesSummary: "Usa questa pagina quando a, b e c sono noti e serve la distanza perpendicolare alla ipotenusa.",
    sidesBest: "Compiti di geometria, controllo dell’area, dimostrazioni e misure pratiche",
    sidesDiagram: "Il diagramma mostra i cateti a e b, l’ipotenusa c e l’altezza h tracciata perpendicolarmente a c.",
    sidesFormula: "La stessa area può essere scritta come Area = (a × b) / 2 e come Area = (c × h) / 2; da qui segue h = (a × b) / c.",
    sidesWhen: "Usala quando sono note tutte e tre le lunghezze e vuoi evitare trigonometria.",
    sidesWhy: "La formula nasce dall’uguaglianza delle due espressioni dell’area dello stesso triangolo.",
    sidesMistakes: "Controlla che c sia l’ipotenusa, non un cateto, e che tutte le unità siano uguali.",
    projTitle: "Calcolatrice altezza triangolo rettangolo da proiezioni",
    projMeta: "Trova l’altezza h dalle proiezioni p e q sull’ipotenusa con h² = p × q e h = √(p × q).",
    projHeading: "Calcola altezza h da proiezioni",
    projIntro: "Quando l’altezza dall’angolo retto incontra l’ipotenusa, la divide nei segmenti p e q.",
    projPurpose: "Inserisci p e q. La calcolatrice usa h² = p × q e h = √(p × q) per trovare h.",
    projSummary: "Usa questa pagina quando sono noti i due segmenti dell’ipotenusa e serve l’altezza.",
    projBest: "Problemi di media geometrica, proiezioni e similitudine",
    projDiagram: "Il diagramma mostra h che divide l’ipotenusa c in p e q.",
    projFormula: "Per similitudine dei triangoli, h² = p × q; prendendo la radice si ottiene h = √(p × q).",
    projWhen: "Usala quando hai dati sui segmenti dell’ipotenusa invece dei tre lati completi.",
    projWhy: "I due triangoli piccoli sono simili, quindi h / p = q / h e h² = p × q.",
    projMistakes: "Non sommare p e q per trovare h; la somma dà c, mentre h richiede la radice del prodotto.",
    firstLeg: "a = primo cateto",
    secondLeg: "b = secondo cateto",
    hypotenuse: "c = ipotenusa",
    altitudeToHypotenuse: "h = altezza all’ipotenusa",
    geometricMean: "h = media geometrica di p e q",
    sameUnit: "Usa la stessa unità per tutte le misure.",
    cLongest: "c è sempre l’ipotenusa e il lato più lungo.",
    hShorter: "L’altezza h è più corta di ciascun cateto.",
    pqPositive: "p e q devono essere positivi.",
    pqSum: "p + q = c, dove c è l’ipotenusa.",
    pqOrder: "L’ordine di p e q non cambia il risultato.",
    sideSteps: ["Identifica i cateti a e b.", "Identifica l’ipotenusa c.", "Usa la stessa unità.", "Inserisci a.", "Inserisci b.", "Inserisci c.", "Premi Calculate."],
    projSteps: ["Identifica i segmenti p e q sull’ipotenusa.", "Usa la stessa unità.", "Inserisci p.", "Inserisci q.", "Premi Calculate.", "Leggi h e i passaggi."],
    sideRelated: ["Calcolatrice altezza triangolo rettangolo", "Calcolatrice altezza da proiezioni", "Calcolatrice lati triangolo rettangolo", "Calcolatrice area da altezza", "Calcolatrice area triangolo rettangolo"],
    projRelated: ["Calcolatrice altezza triangolo rettangolo", "Calcolatrice altezza dai lati", "Calcolatrice proiezioni triangolo rettangolo", "Calcolatrice area da altezza", "Calcolatrice lati triangolo rettangolo"]
  },
  pt: {
    find: "Encontrar",
    badge: "Calculadora de altura",
    parent: "Calculadora de altura de triângulo retângulo",
    related: "Calculadoras relacionadas",
    faq: "Perguntas frequentes",
    faqDescription: "Respostas às dúvidas comuns sobre a altura de um triângulo retângulo.",
    known: "Valores conhecidos",
    finds: "Calcula",
    formula: "Fórmula principal",
    best: "Melhor para",
    diagram: "Legenda do diagrama",
    result: "O que o resultado significa",
    when: "Quando usar esta calculadora",
    mistakes: "Erros comuns",
    common: "Situações comuns:",
    typical: "Usos típicos:",
    positive: "Digite valores positivos.",
    invalid: "Digite valores válidos.",
    longest: "A hipotenusa c deve ser o lado mais longo.",
    invalidTriangle: "Esses comprimentos podem não formar um triângulo retângulo válido.",
    legA: "Cateto a",
    legB: "Cateto b",
    hypotenuseC: "Hipotenusa c",
    altitudeH: "Altura h",
    projectionP: "Projeção p",
    projectionQ: "Projeção q",
    complete: "Cálculo concluído.",
    unable: "Não foi possível calcular.",
    fix: "Corrija os erros nos campos acima.",
    error: "Erro",
    formulaLabel: "Fórmula",
    substitution: "Substituição",
    answer: "Resposta",
    explanation: "Explicação",
    detail: "Detalhe",
    stepSidesDescription: "Calcule a altura até a hipotenusa usando o produto dos catetos.",
    stepProjDescription: "Use a média geométrica dos dois segmentos da hipotenusa.",
    sidesTitle: "Calculadora de altura de triângulo retângulo pelos lados",
    sidesMeta: "Encontre a altura h a partir do cateto a, cateto b e hipotenusa c, com fórmula, passos e exemplos.",
    sidesHeading: "Calcular altura h pelos lados",
    sidesIntro: "Quando os três lados são conhecidos, a altura até a hipotenusa sai por uma fórmula direta.",
    sidesPurpose: "Insira a, b e c. A calculadora usa h = (a × b) / c e mostra os passos.",
    sidesSummary: "Use esta página quando a, b e c são conhecidos e você precisa da distância perpendicular até a hipotenusa.",
    sidesBest: "Tarefas de geometria, conferência de área, provas e medições",
    sidesDiagram: "O diagrama mostra os catetos a e b, a hipotenusa c e a altura h perpendicular a c.",
    sidesFormula: "A área pode ser escrita como Area = (a × b) / 2 e também como Area = (c × h) / 2; portanto h = (a × b) / c.",
    sidesWhen: "Use quando já tiver os três lados e quiser evitar trigonometria.",
    sidesWhy: "A fórmula vem da igualdade entre as duas formas de calcular a mesma área.",
    sidesMistakes: "Garanta que c seja a hipotenusa, nunca um cateto, e que as unidades sejam iguais.",
    projTitle: "Calculadora de altura de triângulo retângulo por projeções",
    projMeta: "Encontre a altura h pelas projeções p e q na hipotenusa com h² = p × q e h = √(p × q).",
    projHeading: "Calcular altura h por projeções",
    projIntro: "A altura traçada do ângulo reto divide a hipotenusa em dois segmentos, p e q.",
    projPurpose: "Insira p e q. A calculadora usa h² = p × q e h = √(p × q) para encontrar h.",
    projSummary: "Use esta página quando os dois segmentos da hipotenusa são conhecidos e a altura é necessária.",
    projBest: "Média geométrica, projeções e semelhança de triângulos",
    projDiagram: "O diagrama mostra h dividindo a hipotenusa c em p e q.",
    projFormula: "Pela semelhança dos triângulos, h² = p × q; tomando a raiz, h = √(p × q).",
    projWhen: "Use quando seus dados forem segmentos da hipotenusa em vez dos três lados.",
    projWhy: "Os triângulos menores são semelhantes, então h / p = q / h e h² = p × q.",
    projMistakes: "Não some p e q para obter h; a soma dá c, enquanto h usa a raiz do produto.",
    firstLeg: "a = primeiro cateto",
    secondLeg: "b = segundo cateto",
    hypotenuse: "c = hipotenusa",
    altitudeToHypotenuse: "h = altura até a hipotenusa",
    geometricMean: "h = média geométrica de p e q",
    sameUnit: "Use a mesma unidade para todas as medidas.",
    cLongest: "c é sempre a hipotenusa e o lado mais longo.",
    hShorter: "A altura h é menor que cada cateto.",
    pqPositive: "p e q devem ser positivos.",
    pqSum: "p + q = c, onde c é a hipotenusa.",
    pqOrder: "A ordem de p e q não altera o resultado.",
    sideSteps: ["Identifique os catetos a e b.", "Identifique a hipotenusa c.", "Use a mesma unidade.", "Digite a.", "Digite b.", "Digite c.", "Pressione Calculate."],
    projSteps: ["Identifique os segmentos p e q.", "Use a mesma unidade.", "Digite p.", "Digite q.", "Pressione Calculate.", "Leia h e os passos."],
    sideRelated: ["Calculadora de altura de triângulo retângulo", "Calculadora de altura por projeções", "Calculadora de lados de triângulo retângulo", "Calculadora de área pela altura", "Calculadora de área de triângulo retângulo"],
    projRelated: ["Calculadora de altura de triângulo retângulo", "Calculadora de altura pelos lados", "Calculadora de projeção de triângulo retângulo", "Calculadora de área pela altura", "Calculadora de lados de triângulo retângulo"]
  },
  bn: {
    find: "নির্ণয় করুন",
    badge: "উচ্চতা ক্যালকুলেটর",
    parent: "সমকোণী ত্রিভুজ উচ্চতা ক্যালকুলেটর",
    related: "সম্পর্কিত ক্যালকুলেটর",
    faq: "সাধারণ প্রশ্ন",
    faqDescription: "সমকোণী ত্রিভুজের উচ্চতা সম্পর্কে সাধারণ প্রশ্নের উত্তর।",
    known: "জানা মান",
    finds: "নির্ণয় করে",
    formula: "মূল সূত্র",
    best: "সবচেয়ে উপযোগী",
    diagram: "চিত্রের নির্দেশিকা",
    result: "ফলাফলের অর্থ",
    when: "কখন এই ক্যালকুলেটর ব্যবহার করবেন",
    mistakes: "সাধারণ ভুল",
    common: "সাধারণ পরিস্থিতি:",
    typical: "সাধারণ ব্যবহার:",
    positive: "অনুগ্রহ করে ধনাত্মক মান লিখুন।",
    invalid: "অনুগ্রহ করে বৈধ মান লিখুন।",
    longest: "অতিভুজ c সবচেয়ে বড় বাহু হওয়া উচিত।",
    invalidTriangle: "এই বাহুর দৈর্ঘ্যগুলো বৈধ সমকোণী ত্রিভুজ নাও বানাতে পারে।",
    legA: "বাহু a",
    legB: "বাহু b",
    hypotenuseC: "অতিভুজ c",
    altitudeH: "উচ্চতা h",
    projectionP: "অভিক্ষেপ p",
    projectionQ: "অভিক্ষেপ q",
    complete: "গণনা সম্পন্ন।",
    unable: "গণনা করা যায়নি।",
    fix: "উপরের ক্ষেত্রগুলোর ভুল ঠিক করুন।",
    error: "ত্রুটি",
    formulaLabel: "সূত্র",
    substitution: "মান বসানো",
    answer: "উত্তর",
    explanation: "ব্যাখ্যা",
    detail: "বিস্তারিত",
    stepSidesDescription: "বাহুগুলোর গুণফল ব্যবহার করে অতিভুজে উচ্চতা নির্ণয় করুন।",
    stepProjDescription: "অতিভুজের দুই খণ্ডের জ্যামিতিক গড় নিন।",
    sidesTitle: "বাহু থেকে সমকোণী ত্রিভুজ উচ্চতা ক্যালকুলেটর",
    sidesMeta: "বাহু a, বাহু b এবং অতিভুজ c থেকে উচ্চতা h নির্ণয় করুন, সূত্র, ধাপ ও উদাহরণসহ।",
    sidesHeading: "বাহু থেকে উচ্চতা h নির্ণয় করুন",
    sidesIntro: "তিনটি বাহু জানা থাকলে অতিভুজে উচ্চতা সরাসরি সূত্রে নির্ণয় করা যায়।",
    sidesPurpose: "a, b এবং c লিখুন। ক্যালকুলেটর h = (a × b) / c ব্যবহার করে ধাপ দেখায়।",
    sidesSummary: "a, b এবং c জানা থাকলে এবং অতিভুজে লম্ব দূরত্ব h দরকার হলে এই পৃষ্ঠা ব্যবহার করুন।",
    sidesBest: "জ্যামিতি অনুশীলন, ক্ষেত্রফল যাচাই, প্রমাণ এবং বাস্তব মাপ",
    sidesDiagram: "চিত্রে a ও b বাহু, c অতিভুজ এবং c-এর উপর লম্ব h দেখানো হয়েছে।",
    sidesFormula: "ক্ষেত্রফল Area = (a × b) / 2 এবং Area = (c × h) / 2; তাই h = (a × b) / c।",
    sidesWhen: "তিনটি বাহুই জানা থাকলে এবং ত্রিকোণমিতি এড়াতে চাইলে ব্যবহার করুন।",
    sidesWhy: "একই ক্ষেত্রফলের দুই রূপ সমান করার ফলে সূত্রটি আসে।",
    sidesMistakes: "c যেন অতিভুজ হয় এবং সব একক একই থাকে তা যাচাই করুন।",
    projTitle: "অভিক্ষেপ থেকে সমকোণী ত্রিভুজ উচ্চতা ক্যালকুলেটর",
    projMeta: "অতিভুজের অভিক্ষেপ p ও q থেকে h² = p × q এবং h = √(p × q) দিয়ে উচ্চতা h নির্ণয় করুন।",
    projHeading: "অভিক্ষেপ থেকে উচ্চতা h নির্ণয় করুন",
    projIntro: "সমকোণ থেকে নামা উচ্চতা অতিভুজকে p ও q দুই খণ্ডে ভাগ করে।",
    projPurpose: "p এবং q লিখুন। ক্যালকুলেটর h² = p × q এবং h = √(p × q) ব্যবহার করে h নির্ণয় করে।",
    projSummary: "অতিভুজের দুই খণ্ড জানা থাকলে উচ্চতা বের করতে এই পৃষ্ঠা ব্যবহার করুন।",
    projBest: "জ্যামিতিক গড়, অভিক্ষেপ এবং সদৃশ ত্রিভুজ",
    projDiagram: "চিত্রে h অতিভুজ c-কে p ও q-তে ভাগ করছে।",
    projFormula: "সদৃশতা থেকে h² = p × q; বর্গমূল নিলে h = √(p × q)।",
    projWhen: "তিন বাহুর বদলে অতিভুজের খণ্ড দেওয়া থাকলে ব্যবহার করুন।",
    projWhy: "ছোট ত্রিভুজগুলো সদৃশ, তাই h / p = q / h এবং h² = p × q।",
    projMistakes: "h বের করতে p ও q যোগ করবেন না; যোগফল c দেয়, h দেয় গুণফলের বর্গমূল।",
    firstLeg: "a = প্রথম বাহু",
    secondLeg: "b = দ্বিতীয় বাহু",
    hypotenuse: "c = অতিভুজ",
    altitudeToHypotenuse: "h = অতিভুজে উচ্চতা",
    geometricMean: "h = p ও q-এর জ্যামিতিক গড়",
    sameUnit: "সব মাপ একই এককে ব্যবহার করুন।",
    cLongest: "c সবসময় অতিভুজ এবং সবচেয়ে বড় বাহু।",
    hShorter: "উচ্চতা h প্রতিটি বাহুর চেয়ে ছোট।",
    pqPositive: "p এবং q ধনাত্মক হতে হবে।",
    pqSum: "p + q = c, যেখানে c অতিভুজ।",
    pqOrder: "p ও q-এর ক্রম ফল বদলায় না।",
    sideSteps: ["বাহু a ও b শনাক্ত করুন।", "অতিভুজ c শনাক্ত করুন।", "একই একক ব্যবহার করুন।", "a লিখুন।", "b লিখুন।", "c লিখুন।", "Calculate চাপুন।"],
    projSteps: ["অতিভুজের p ও q খণ্ড শনাক্ত করুন।", "একই একক ব্যবহার করুন।", "p লিখুন।", "q লিখুন।", "Calculate চাপুন।", "h এবং ধাপ পড়ুন।"],
    sideRelated: ["সমকোণী ত্রিভুজ উচ্চতা ক্যালকুলেটর", "অভিক্ষেপ থেকে উচ্চতা ক্যালকুলেটর", "সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর", "উচ্চতা থেকে ক্ষেত্রফল ক্যালকুলেটর", "সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর"],
    projRelated: ["সমকোণী ত্রিভুজ উচ্চতা ক্যালকুলেটর", "বাহু থেকে উচ্চতা ক্যালকুলেটর", "সমকোণী ত্রিভুজ অভিক্ষেপ ক্যালকুলেটর", "উচ্চতা থেকে ক্ষেত্রফল ক্যালকুলেটর", "সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর"]
  },
  ja: {
    find: "求める",
    badge: "高さ計算機",
    parent: "直角三角形の高さ計算機",
    related: "関連する計算機",
    faq: "よくある質問",
    faqDescription: "直角三角形の高さについてのよくある質問です。",
    known: "既知の値",
    finds: "求める値",
    formula: "主な公式",
    best: "向いている用途",
    diagram: "図のキー",
    result: "結果の意味",
    when: "この計算機を使う場面",
    mistakes: "よくある間違い",
    common: "よくある場面:",
    typical: "代表的な用途:",
    positive: "正の値を入力してください。",
    invalid: "有効な値を入力してください。",
    longest: "斜辺 c は最も長い辺である必要があります。",
    invalidTriangle: "これらの長さは有効な直角三角形を作らない可能性があります。",
    legA: "辺 a",
    legB: "辺 b",
    hypotenuseC: "斜辺 c",
    altitudeH: "高さ h",
    projectionP: "射影 p",
    projectionQ: "射影 q",
    complete: "計算が完了しました。",
    unable: "計算できません。",
    fix: "上の入力欄のエラーを修正してください。",
    error: "エラー",
    formulaLabel: "公式",
    substitution: "代入",
    answer: "答え",
    explanation: "説明",
    detail: "詳細",
    stepSidesDescription: "2つの辺の積を使って斜辺への高さを計算します。",
    stepProjDescription: "斜辺上の2つの区間の幾何平均を使います。",
    sidesTitle: "辺から求める直角三角形の高さ計算機",
    sidesMeta: "辺 a、辺 b、斜辺 c から高さ h を公式、手順、例つきで求めます。",
    sidesHeading: "辺から高さ h を計算",
    sidesIntro: "3つの辺が分かっていれば、斜辺への高さは直接公式で求められます。",
    sidesPurpose: "a、b、c を入力すると、h = (a × b) / c を使って手順を表示します。",
    sidesSummary: "a、b、c が既知で、斜辺への垂直距離 h が必要なときに使います。",
    sidesBest: "幾何の宿題、面積チェック、証明、実測の確認",
    sidesDiagram: "図では辺 a と b、斜辺 c、c に垂直な高さ h を示します。",
    sidesFormula: "面積は Area = (a × b) / 2 と Area = (c × h) / 2 の両方で表せるので、h = (a × b) / c です。",
    sidesWhen: "3辺がすでに分かっていて三角関数を使いたくないときに使います。",
    sidesWhy: "同じ面積を2通りに表して等しく置くことで公式が得られます。",
    sidesMistakes: "c は必ず斜辺であり、単位をそろえる必要があります。",
    projTitle: "射影から求める直角三角形の高さ計算機",
    projMeta: "斜辺上の射影 p と q から h² = p × q、h = √(p × q) で高さ h を求めます。",
    projHeading: "射影から高さ h を計算",
    projIntro: "直角から下ろした高さは斜辺を p と q の2つの区間に分けます。",
    projPurpose: "p と q を入力すると、h² = p × q と h = √(p × q) で h を求めます。",
    projSummary: "斜辺上の2区間が分かっていて高さが必要なときに使います。",
    projBest: "幾何平均、射影、相似の問題",
    projDiagram: "図では h が斜辺 c を p と q に分けています。",
    projFormula: "相似より h² = p × q となり、平方根を取ると h = √(p × q) です。",
    projWhen: "3辺ではなく斜辺の区間が与えられているときに使います。",
    projWhy: "小さい2つの三角形が相似なので h / p = q / h、つまり h² = p × q です。",
    projMistakes: "p と q を足して h にしないでください。和は c、h は積の平方根です。",
    firstLeg: "a = 1つ目の辺",
    secondLeg: "b = 2つ目の辺",
    hypotenuse: "c = 斜辺",
    altitudeToHypotenuse: "h = 斜辺への高さ",
    geometricMean: "h = p と q の幾何平均",
    sameUnit: "すべて同じ単位で入力してください。",
    cLongest: "c は常に斜辺で最も長い辺です。",
    hShorter: "高さ h は各辺より短くなります。",
    pqPositive: "p と q は正の値である必要があります。",
    pqSum: "p + q = c で、c は斜辺です。",
    pqOrder: "p と q の順序は結果を変えません。",
    sideSteps: ["辺 a と b を確認します。", "斜辺 c を確認します。", "単位をそろえます。", "a を入力します。", "b を入力します。", "c を入力します。", "Calculate を押します。"],
    projSteps: ["斜辺上の p と q を確認します。", "単位をそろえます。", "p を入力します。", "q を入力します。", "Calculate を押します。", "h と手順を確認します。"],
    sideRelated: ["直角三角形の高さ計算機", "射影から高さを求める計算機", "直角三角形の辺計算機", "高さから面積を求める計算機", "直角三角形の面積計算機"],
    projRelated: ["直角三角形の高さ計算機", "辺から高さを求める計算機", "直角三角形の射影計算機", "高さから面積を求める計算機", "直角三角形の辺計算機"]
  },
  ko: {
    find: "구하기",
    badge: "높이 계산기",
    parent: "직각삼각형 높이 계산기",
    related: "관련 계산기",
    faq: "자주 묻는 질문",
    faqDescription: "직각삼각형의 높이에 대한 자주 묻는 질문입니다.",
    known: "알려진 값",
    finds: "구하는 값",
    formula: "주요 공식",
    best: "적합한 경우",
    diagram: "도형 설명",
    result: "결과의 의미",
    when: "이 계산기를 사용할 때",
    mistakes: "흔한 실수",
    common: "일반적인 상황:",
    typical: "대표적인 사용:",
    positive: "양수 값을 입력하세요.",
    invalid: "유효한 값을 입력하세요.",
    longest: "빗변 c는 가장 긴 변이어야 합니다.",
    invalidTriangle: "이 변 길이들은 유효한 직각삼각형을 만들지 않을 수 있습니다.",
    legA: "변 a",
    legB: "변 b",
    hypotenuseC: "빗변 c",
    altitudeH: "높이 h",
    projectionP: "사영 p",
    projectionQ: "사영 q",
    complete: "계산이 완료되었습니다.",
    unable: "계산할 수 없습니다.",
    fix: "위 입력란의 오류를 수정하세요.",
    error: "오류",
    formulaLabel: "공식",
    substitution: "대입",
    answer: "답",
    explanation: "설명",
    detail: "세부 내용",
    stepSidesDescription: "두 변의 곱을 이용해 빗변에 대한 높이를 계산합니다.",
    stepProjDescription: "빗변의 두 구간의 기하평균을 사용합니다.",
    sidesTitle: "변으로 구하는 직각삼각형 높이 계산기",
    sidesMeta: "변 a, 변 b, 빗변 c로 높이 h를 공식, 풀이 과정, 예제와 함께 구합니다.",
    sidesHeading: "변으로 높이 h 계산",
    sidesIntro: "세 변을 알고 있다면 빗변에 대한 높이는 직접 공식으로 구할 수 있습니다.",
    sidesPurpose: "a, b, c를 입력하면 h = (a × b) / c를 적용해 풀이 과정을 보여줍니다.",
    sidesSummary: "a, b, c가 알려져 있고 빗변까지의 수직거리 h가 필요할 때 사용합니다.",
    sidesBest: "기하 숙제, 넓이 확인, 증명, 실제 치수 검토",
    sidesDiagram: "그림은 변 a와 b, 빗변 c, 그리고 c에 수직인 높이 h를 보여줍니다.",
    sidesFormula: "넓이는 Area = (a × b) / 2 또는 Area = (c × h) / 2로 쓸 수 있으므로 h = (a × b) / c입니다.",
    sidesWhen: "세 변을 이미 알고 있고 삼각함수를 쓰지 않고 싶을 때 사용합니다.",
    sidesWhy: "같은 넓이를 두 방식으로 표현해 서로 같게 두면 공식이 나옵니다.",
    sidesMistakes: "c는 항상 빗변이며, 단위는 모두 같아야 합니다.",
    projTitle: "사영으로 구하는 직각삼각형 높이 계산기",
    projMeta: "빗변 사영 p와 q로 h² = p × q 및 h = √(p × q)를 사용해 높이 h를 구합니다.",
    projHeading: "사영으로 높이 h 계산",
    projIntro: "직각에서 내린 높이는 빗변을 p와 q 두 구간으로 나눕니다.",
    projPurpose: "p와 q를 입력하면 h² = p × q 및 h = √(p × q)로 h를 구합니다.",
    projSummary: "빗변의 두 구간을 알고 있고 높이가 필요할 때 사용합니다.",
    projBest: "기하평균, 사영, 닮음 문제",
    projDiagram: "그림은 h가 빗변 c를 p와 q로 나누는 모습을 보여줍니다.",
    projFormula: "닮음에 의해 h² = p × q이고, 제곱근을 취하면 h = √(p × q)입니다.",
    projWhen: "세 변 대신 빗변의 구간 값이 주어졌을 때 사용합니다.",
    projWhy: "작은 두 삼각형이 닮음이므로 h / p = q / h, 따라서 h² = p × q입니다.",
    projMistakes: "h를 구할 때 p와 q를 더하지 마세요. 합은 c이고, h는 곱의 제곱근입니다.",
    firstLeg: "a = 첫 번째 변",
    secondLeg: "b = 두 번째 변",
    hypotenuse: "c = 빗변",
    altitudeToHypotenuse: "h = 빗변에 대한 높이",
    geometricMean: "h = p와 q의 기하평균",
    sameUnit: "모든 측정값은 같은 단위를 사용하세요.",
    cLongest: "c는 항상 빗변이며 가장 긴 변입니다.",
    hShorter: "높이 h는 각 변보다 짧습니다.",
    pqPositive: "p와 q는 양수여야 합니다.",
    pqSum: "p + q = c이며 c는 빗변입니다.",
    pqOrder: "p와 q의 순서는 결과를 바꾸지 않습니다.",
    sideSteps: ["변 a와 b를 확인합니다.", "빗변 c를 확인합니다.", "단위를 통일합니다.", "a를 입력합니다.", "b를 입력합니다.", "c를 입력합니다.", "Calculate를 누릅니다."],
    projSteps: ["빗변의 p와 q 구간을 확인합니다.", "단위를 통일합니다.", "p를 입력합니다.", "q를 입력합니다.", "Calculate를 누릅니다.", "h와 풀이 과정을 확인합니다."],
    sideRelated: ["직각삼각형 높이 계산기", "사영으로 높이 계산기", "직각삼각형 변 계산기", "높이로 넓이 계산기", "직각삼각형 넓이 계산기"],
    projRelated: ["직각삼각형 높이 계산기", "변으로 높이 계산기", "직각삼각형 사영 계산기", "높이로 넓이 계산기", "직각삼각형 변 계산기"]
  }
};

for (const [locale, copy] of Object.entries(SIMPLE_TRANSLATIONS) as [
  Locale,
  SimpleCopyInput
][]) {
  EXTRA_TRANSLATIONS[locale] = createSimpleCopy(copy);
}

const SIDES_RELATED_HREFS = [
  '/right-triangle-altitude-calculator/',
  '/right-triangle-altitude-from-projections-calculator/',
  '/right-triangle-side-calculator/',
  '/right-triangle-area-from-altitude-calculator/',
  '/right-triangle-area-calculator/'
];

const PROJECTIONS_RELATED_HREFS = [
  '/right-triangle-altitude-calculator/',
  '/right-triangle-altitude-from-sides-calculator/',
  '/right-triangle-projection-calculator/',
  '/right-triangle-area-from-altitude-calculator/',
  '/right-triangle-side-calculator/'
];

function createRomanceCopy(input: Record<string, any>): AltitudeLocaleCopy {
  const fields = {
    legA: input.legA,
    legB: input.legB,
    hypotenuseC: input.hypotenuseC,
    altitudeH: input.altitudeH,
    projectionP: input.projectionP,
    projectionQ: input.projectionQ
  };

  const common = {
    find: input.find,
    badge: input.badge,
    parentBreadcrumbLabel: input.parent,
    relatedHeading: input.related,
    faqHeading: input.faq,
    faqDescription: input.faqDescription,
    labels: {
      knownValues: input.known,
      finds: input.finds,
      mainFormula: input.formula,
      bestFor: input.best,
      diagramKey: input.diagram,
      resultMeaningH2: input.result,
      whenUseH2: input.when,
      commonMistakesH2: input.mistakes,
      commonSituations: input.common,
      typicalSituations: input.typical
    },
    messages: {
      positive: input.positive,
      invalid: input.invalid,
      hypotenuseLongest: input.longest,
      invalidTriangle: input.invalidTriangle
    },
    fields,
    runtime: {
      calculationComplete: input.complete,
      unableToCalculate: input.unable,
      fixErrors: input.fix,
      errorPrefix: input.error,
      stepLabels: {
        formula: input.formulaLabel,
        substitution: input.substitution,
        answer: input.answer,
        explanation: input.explanation,
        detail: input.detail
      },
      altitudeFromSidesTitle: input.altitudeFromSidesTitle ?? input.sidesHeading,
      altitudeFromSidesDescription: input.stepSidesDescription,
      altitudeFromProjectionsTitle: input.altitudeFromProjectionsTitle ?? input.projHeading,
      altitudeFromProjectionsDescription: input.stepProjDescription
    }
  };

  return {
    ...common,
    sides: {
      title: input.sidesTitle,
      metaDescription: input.sidesMeta,
      calculatorHeading: input.sidesHeading,
      formulaTitle: input.sidesFormulaTitle,
      formulaDescription: input.sidesFormulaDescription,
      outputLabel: fields.altitudeH,
      intro: input.sidesIntro,
      purpose: input.sidesPurpose,
      howItWorksHeading: input.sidesHowWorks,
      summaryH2: input.sidesSummary,
      summaryIntro: input.sidesSummaryIntro,
      cards: {
        known: input.sidesKnown,
        finds: input.sidesFinds,
        formula: 'h = (a × b) / c',
        bestFor: input.sidesBest
      },
      diagramH2: input.sidesDiagramTitle,
      diagramIntro: input.sidesDiagramIntro,
      diagramCaption: input.sidesDiagramCaption,
      sideA: {
        label: input.firstLeg,
        description: input.firstLegDesc
      },
      sideB: {
        label: input.secondLeg,
        description: input.secondLegDesc
      },
      sideC: {
        label: input.hypotenuse,
        description: input.hypDesc
      },
      result: {
        label: input.altitudeToHypotenuse ?? `${fields.altitudeH}`,
        description: input.altitudeDesc
      },
      notes: [input.sameUnit, input.cLongest, input.hShorter],
      formulaH2: input.sidesFormulaH2,
      formulaParagraphs: [input.areaP1, input.areaP2, input.areaP3],
      howToH2: input.howTo,
      howToSteps: [
        input.identifyLegs,
        input.identifyHyp,
        input.sameUnitStep,
        input.enterA,
        input.enterB,
        input.enterC,
        input.calculateSides
      ],
      exampleH2: input.sidesExampleTitle,
      exampleIntro: input.sidesExampleIntro,
      exampleAnswer: input.sidesExampleAnswer,
      resultMeaning: [input.sidesMeaning1, input.sidesMeaning2],
      whenIntro: input.sidesWhen,
      whenItems: input.sidesWhenItems,
      whyH2: input.sidesWhyTitle,
      whyParagraphs: [input.sidesWhy1, input.sidesWhy2],
      mistakesIntro: input.sidesMistakesIntro,
      mistakeItems: input.sidesMistakes,
      additionalH2: input.sidesAdditionalTitle,
      additionalIntro: input.sidesAdditionalIntro,
      additionalItems: input.sidesAdditionalItems ?? [
        'h = (a × b) / c',
        'h = (5 × 12) / 13',
        'h = 60 / 13',
        'h ≈ 4.615'
      ],
      relatedLabels: input.relatedSides,
      faqs: toFaqs(input.sidesFaqs)
    },
    projections: {
      title: input.projTitle,
      metaDescription: input.projMeta,
      calculatorHeading: input.projHeading,
      formulaTitle: input.projFormulaTitle,
      formulaDescription: input.projFormulaDescription,
      outputLabel: fields.altitudeH,
      intro: input.projIntro,
      purpose: input.projPurpose,
      howItWorksHeading: input.projHowWorks,
      summaryH2: input.sidesSummary,
      summaryIntro: input.projSummaryIntro,
      cards: {
        known: input.projKnown,
        finds: input.sidesFinds,
        formula: 'h = √(p × q)',
        bestFor: input.projBest
      },
      diagramH2: input.projDiagramTitle,
      diagramIntro: input.projDiagramIntro,
      diagramCaption: input.projDiagramCaption,
      sideA: {
        label: input.firstLeg,
        description: input.projLegADesc
      },
      sideB: {
        label: input.secondLeg,
        description: input.projLegBDesc
      },
      sideC: {
        label: input.projHypLabel ?? `${input.hypotenuse ?? input.hypotenuseC} (= p + q)`,
        description: input.projHypDesc
      },
      result: {
        label: input.projResult,
        description: input.projResultDesc
      },
      notes: [input.pqPositive, input.pqSum, input.pqOrder],
      formulaH2: input.projFormulaH2,
      formulaParagraphs: [input.projP1, input.projP2, input.projP3],
      howToH2: input.howTo,
      howToSteps: input.projSteps,
      exampleH2: input.projExampleTitle,
      exampleIntro: input.projExampleIntro,
      exampleAnswer: input.projExampleAnswer,
      resultMeaning: [input.projMeaning1, input.projMeaning2],
      whenIntro: input.projWhen,
      whenItems: input.projWhenItems,
      whyH2: input.projWhyTitle,
      whyParagraphs: [input.projWhy1, input.projWhy2],
      mistakesIntro: input.projMistakesIntro,
      mistakeItems: input.projMistakes,
      additionalH2: input.projAdditionalTitle,
      additionalIntro: input.projAdditionalIntro,
      additionalItems: input.projAdditionalItems ?? [
        'h² = p × q = 5 × 5 = 25',
        'h = √25 = 5',
        input.pqOrder,
        input.projResultDesc
      ],
      relatedLabels: input.relatedProj,
      faqs: toFaqs(input.projFaqs)
    }
  };
}

function createSimpleCopy(input: SimpleCopyInput): AltitudeLocaleCopy {
  return createRomanceCopy({
    ...input,
    sidesFormulaTitle: input.sidesHeading,
    sidesFormulaDescription: input.sidesMeta,
    sidesHowWorks: input.sidesHeading,
    sidesSummary: input.sidesTitle,
    sidesSummaryIntro: input.sidesSummary,
    sidesKnown: `${input.legA}, ${input.legB}, ${input.hypotenuseC}`,
    sidesFinds: input.altitudeH,
    sidesDiagramTitle: input.sidesTitle,
    sidesDiagramIntro: input.sidesDiagram,
    sidesDiagramCaption: input.sidesDiagram,
    firstLegDesc: `${input.legA}; ${input.sidesFormula}`,
    secondLegDesc: `${input.legB}; ${input.sidesFormula}`,
    hypDesc: `${input.hypotenuseC}; ${input.cLongest}`,
    altitudeToHypotenuse: input.altitudeToHypotenuse,
    altitudeDesc: input.result,
    sidesFormulaH2: input.sidesHeading,
    areaP1: input.sidesFormula,
    areaP2: input.sidesFormula,
    areaP3: input.sidesWhy,
    howTo: input.when,
    identifyLegs: input.sideSteps[0],
    identifyHyp: input.sideSteps[1],
    sameUnitStep: input.sideSteps[2],
    enterA: input.sideSteps[3],
    enterB: input.sideSteps[4],
    enterC: input.sideSteps[5],
    calculateSides: input.sideSteps[6],
    sidesExampleTitle: `${input.sidesTitle}: 6-8-10`,
    sidesExampleIntro: 'a = 6, b = 8, c = 10',
    sidesExampleAnswer: 'h = 4.8',
    sidesMeaning1: input.sidesSummary,
    sidesMeaning2: input.sidesWhen,
    sidesWhenItems: [
      input.sidesWhen,
      input.sidesBest,
      input.sidesWhy,
      input.sidesMistakes
    ],
    sidesWhyTitle: input.sidesHeading,
    sidesWhy1: input.sidesWhy,
    sidesWhy2: input.sidesFormula,
    sidesMistakesIntro: input.sidesMistakes,
    sidesMistakes: [
      input.cLongest,
      input.sameUnit,
      input.hShorter,
      input.longest,
      input.invalidTriangle
    ],
    sidesAdditionalTitle: '5-12-13',
    sidesAdditionalIntro: input.sidesFormula,
    relatedSides: input.sideRelated,
    sidesFaqs: [
      [`${input.formulaLabel}: h = (a × b) / c?`, `${input.legA}, ${input.legB}, ${input.hypotenuseC}.`],
      [input.hypotenuseC, input.cLongest],
      [input.altitudeH, input.altitudeToHypotenuse],
      [input.when, input.sidesWhen],
      [input.mistakes, input.sidesMistakes]
    ],
    projFormulaTitle: input.projHeading,
    projFormulaDescription: input.projMeta,
    projHowWorks: input.projHeading,
    projSummaryIntro: input.projSummary,
    projKnown: `${input.projectionP}, ${input.projectionQ}`,
    projDiagramTitle: input.projTitle,
    projDiagramIntro: input.projDiagram,
    projDiagramCaption: input.projDiagram,
    projLegADesc: `a² = p × c`,
    projLegBDesc: `b² = q × c`,
    projHypLabel: `${input.hypotenuse ?? input.hypotenuseC} (= p + q)`,
    projHypDesc: input.pqSum,
    projResult: input.geometricMean,
    projResultDesc: input.projFormula,
    pqPositive: input.pqPositive,
    pqSum: input.pqSum,
    pqOrder: input.pqOrder,
    projFormulaH2: input.projHeading,
    projP1: input.projFormula,
    projP2: input.projWhy,
    projP3: input.projFormula,
    projExampleTitle: `${input.projTitle}: p = 3.6, q = 6.4`,
    projExampleIntro: 'p = 3.6, q = 6.4',
    projExampleAnswer: 'h = 4.8',
    projMeaning1: input.projSummary,
    projMeaning2: input.projWhen,
    projWhenItems: [
      input.projWhen,
      input.projBest,
      input.projWhy,
      input.projMistakes
    ],
    projWhyTitle: input.projHeading,
    projWhy1: input.projWhy,
    projWhy2: input.projFormula,
    projMistakesIntro: input.projMistakes,
    projMistakes: [
      input.pqPositive,
      input.pqSum,
      input.pqOrder,
      input.projMistakes,
      input.invalidTriangle
    ],
    projAdditionalTitle: 'p = q',
    projAdditionalIntro: input.projFormula,
    relatedProj: input.projRelated,
    projFaqs: [
      [`${input.formulaLabel}: h = √(p × q)?`, `${input.projectionP}, ${input.projectionQ}.`],
      [`h² = p × q?`, input.projFormula],
      [input.projectionP, input.pqSum],
      [input.geometricMean, input.projWhy],
      [input.mistakes, input.projMistakes]
    ]
  });
}

function toFaqs(items: [string, string][]) {
  return items.map(([question, answer]) => ({ question, answer }));
}

function buildRuntime(copy: AltitudeLocaleCopy) {
  return {
    calculationComplete: copy.runtime.calculationComplete,
    unableToCalculate: copy.runtime.unableToCalculate,
    fixErrors: copy.runtime.fixErrors,
    errorPrefix: copy.runtime.errorPrefix,
    stepLabels: copy.runtime.stepLabels,
    calculationSteps: {
      altitudeFromSides: {
        title: copy.runtime.altitudeFromSidesTitle,
        description: copy.runtime.altitudeFromSidesDescription
      },
      altitudeFromProjections: {
        title: copy.runtime.altitudeFromProjectionsTitle,
        description: copy.runtime.altitudeFromProjectionsDescription
      }
    }
  };
}

function localizeFields(
  fields: FormulaCalculatorField[] | undefined,
  copy: AltitudeLocaleCopy
) {
  return (fields ?? []).map((field) => {
    const labelByKey: Record<string, string> = {
      a: copy.fields.legA,
      b: copy.fields.legB,
      c: copy.fields.hypotenuseC,
      p: copy.fields.projectionP,
      q: copy.fields.projectionQ
    };

    return {
      ...field,
      label: labelByKey[field.key] ?? field.label
    };
  });
}

function localizeFormula(
  page: FocusedAltitudeCalculatorPage,
  copy: AltitudeLocaleCopy,
  pageCopy: PageCopy
) {
  const calculator = page.formula.calculator;

  return {
    ...page.formula,
    title: pageCopy.formulaTitle,
    description: pageCopy.formulaDescription,
    calculator: calculator
      ? {
          ...calculator,
          outputLabel: pageCopy.outputLabel,
          fields: localizeFields(calculator.fields, copy)
        }
      : calculator
  };
}

function relatedLinks(hrefs: string[], labels: string[]) {
  return hrefs.map((href, index) => ({
    href,
    label: labels[index] ?? href
  }));
}

function buildPage(
  page: FocusedAltitudeCalculatorPage,
  copy: AltitudeLocaleCopy,
  pageCopy: PageCopy,
  relatedHrefs: string[],
  formulaLines: string[]
): FocusedAltitudeCalculatorPage {
  return {
    ...page,
    h1: pageCopy.title,
    metaTitle: `${pageCopy.title} | ${copy.find} ${
      page.slug === 'right-triangle-altitude-from-sides-calculator'
        ? 'h = (a × b) / c'
        : 'h = √(p × q)'
    }`,
    metaDescription: pageCopy.metaDescription,
    badge: copy.badge,
    parentBreadcrumbLabel: copy.parentBreadcrumbLabel,
    howItWorksHeading: pageCopy.howItWorksHeading,
    relatedHeading: copy.relatedHeading,
    faqHeading: copy.faqHeading,
    faqDescription: copy.faqDescription,
    calculatorMessages: copy.messages,
    runtimeTranslations: buildRuntime(copy),
    calculatorHeading: pageCopy.calculatorHeading,
    formula: localizeFormula(page, copy, pageCopy),
    toolPurpose: pageCopy.purpose,
    intro: pageCopy.intro,
    quickSummary: {
      h2: pageCopy.summaryH2,
      intro: pageCopy.summaryIntro,
      cards: [
        { label: copy.labels.knownValues, value: pageCopy.cards.known },
        { label: copy.labels.finds, value: pageCopy.cards.finds },
        { label: copy.labels.mainFormula, value: pageCopy.cards.formula },
        { label: copy.labels.bestFor, value: pageCopy.cards.bestFor }
      ]
    },
    diagram: {
      h2: pageCopy.diagramH2,
      intro: pageCopy.diagramIntro,
      caption: pageCopy.diagramCaption,
      formulaLabel:
        page.slug === 'right-triangle-altitude-from-sides-calculator'
          ? 'h = (a × b) / c'
          : 'h = √(p × q)',
      keyLabel: copy.labels.diagramKey,
      sides: {
        a: pageCopy.sideA,
        b: pageCopy.sideB,
        c: pageCopy.sideC
      },
      result: pageCopy.result,
      notes: pageCopy.notes
    },
    formulaSection: {
      h2: pageCopy.formulaH2,
      paragraphs: pageCopy.formulaParagraphs,
      formulas: formulaLines
    },
    howTo: {
      h2: pageCopy.howToH2,
      steps: pageCopy.howToSteps
    },
    example: {
      ...page.example,
      h2: pageCopy.exampleH2,
      intro: pageCopy.exampleIntro,
      answer: pageCopy.exampleAnswer
    },
    extraSections: [
      {
        h2: copy.labels.resultMeaningH2,
        paragraphs: pageCopy.resultMeaning
      },
      {
        h2: copy.labels.whenUseH2,
        paragraphs: [pageCopy.whenIntro],
        listTitle:
          page.slug === 'right-triangle-altitude-from-sides-calculator'
            ? copy.labels.commonSituations
            : copy.labels.typicalSituations,
        listItems: pageCopy.whenItems
      },
      {
        h2: pageCopy.whyH2,
        paragraphs: pageCopy.whyParagraphs
      },
      {
        h2: copy.labels.commonMistakesH2,
        paragraphs: [pageCopy.mistakesIntro],
        listItems: pageCopy.mistakeItems
      },
      {
        h2: pageCopy.additionalH2,
        paragraphs: [pageCopy.additionalIntro],
        listItems: pageCopy.additionalItems
      }
    ],
    relatedLinks: relatedLinks(relatedHrefs, pageCopy.relatedLabels),
    faqs: pageCopy.faqs
  };
}

export function localizeFocusedAltitudeCalculatorPage(
  page: FocusedAltitudeCalculatorPage,
  locale: Locale
): FocusedAltitudeCalculatorPage {
  const rawCopy = TRANSLATIONS[locale] ?? EXTRA_TRANSLATIONS[locale];

  if (!rawCopy) {
    return page;
  }

  const copy =
    'sides' in rawCopy && 'projections' in rawCopy
      ? rawCopy
      : createSimpleCopy(rawCopy);

  if (page.slug === 'right-triangle-altitude-from-sides-calculator') {
    return buildPage(
      page,
      copy,
      copy.sides,
      SIDES_RELATED_HREFS,
      ['h = \\frac{a \\times b}{c}']
    );
  }

  return buildPage(
    page,
    copy,
    copy.projections,
    PROJECTIONS_RELATED_HREFS,
    ['h^2 = p \\times q', 'h = \\sqrt{p \\times q}']
  );
}
