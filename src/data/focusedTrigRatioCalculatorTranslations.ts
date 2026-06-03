import type { Locale } from 'theme/i18n/locales';
import type { FocusedTrigRatioCalculatorPage } from 'src/data/focusedTrigRatioCalculatorPages';

type RatioKey = 'sine' | 'cosine' | 'tangent' | 'cotangent' | 'secant' | 'cosecant';
type SideRole = 'opposite' | 'adjacent' | 'hypotenuse';
type RangeKind = 'zeroOne' | 'positiveAny' | 'greaterOne';

type RatioConfig = {
  slug: string;
  url: string;
  key: RatioKey;
  symbol: string;
  formula: string;
  numerator: SideRole;
  denominator: SideRole;
  reciprocal: RatioKey;
  range: RangeKind;
  exampleValues: string;
  exampleLines: string[];
  exampleResult: string;
  exampleAngle: string;
};

export type FocusedTrigRatioUi = {
  home: string;
  badge: string;
  parentPageLabel: string;
  formula: string;
  triangleDiagram: string;
  ratioHighlight: string;
  numerator: string;
  denominator: string;
  sideKey: string;
  howToUse: string;
  stepByStepExample: string;
  whatResultMeans: string;
  whenToUse: string;
  commonMistakes: string;
  relatedCalculators: string;
  openTool: string;
  faqHeading: string;
  rightAngle: string;
  sideRoles: Record<'a' | 'b' | 'c', { role: string; description: string; short: string; label: string }>;
  usedIn: (label: string) => string;
  notUsedIn: (label: string) => string;
};

type CopyPack = {
  ratioNames: Record<RatioKey, string>;
  sideNames: Record<SideRole, string>;
  ui: FocusedTrigRatioUi;
  relatedAngleCalculator: string;
  pageTitle: string;
  headerSummary: string;
  metaTitle: string;
  metaDescription: string;
  calculatorHeading: string;
  introHeading: string;
  intro: string[];
  calculatorNote: string;
  formulaParagraphs: string[];
  diagramExplanation: string[];
  howToSteps: string[];
  exampleIntro: string;
  exampleConclusion: string;
  resultMeaning: string[];
  rangeNotes: Record<RangeKind, string>;
  whenIntro: string;
  whenItems: string[];
  mistakesIntro: string;
  mistakeItems: string[];
  faqs: { question: string; answer: string }[];
};

type RuntimeUi = {
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
};

const RATIO_CONFIGS: Record<string, RatioConfig> = {
  'sine-ratio-calculator': {
    slug: 'sine-ratio-calculator',
    url: '/sine-ratio-calculator/',
    key: 'sine',
    symbol: 'sin(A)',
    formula: 'sin(A) = a / c',
    numerator: 'opposite',
    denominator: 'hypotenuse',
    reciprocal: 'cosecant',
    range: 'zeroOne',
    exampleValues: 'a = 3, c = 5',
    exampleLines: ['sin(A) = a / c', 'sin(A) = 3 / 5', 'sin(A) = 0.6'],
    exampleResult: '0.6',
    exampleAngle: '36.87 degrees'
  },
  'cosine-ratio-calculator': {
    slug: 'cosine-ratio-calculator',
    url: '/cosine-ratio-calculator/',
    key: 'cosine',
    symbol: 'cos(A)',
    formula: 'cos(A) = b / c',
    numerator: 'adjacent',
    denominator: 'hypotenuse',
    reciprocal: 'secant',
    range: 'zeroOne',
    exampleValues: 'b = 4, c = 5',
    exampleLines: ['cos(A) = b / c', 'cos(A) = 4 / 5', 'cos(A) = 0.8'],
    exampleResult: '0.8',
    exampleAngle: '36.87 degrees'
  },
  'tangent-ratio-calculator': {
    slug: 'tangent-ratio-calculator',
    url: '/tangent-ratio-calculator/',
    key: 'tangent',
    symbol: 'tan(A)',
    formula: 'tan(A) = a / b',
    numerator: 'opposite',
    denominator: 'adjacent',
    reciprocal: 'cotangent',
    range: 'positiveAny',
    exampleValues: 'a = 3, b = 4',
    exampleLines: ['tan(A) = a / b', 'tan(A) = 3 / 4', 'tan(A) = 0.75'],
    exampleResult: '0.75',
    exampleAngle: '36.87 degrees'
  },
  'cotangent-ratio-calculator': {
    slug: 'cotangent-ratio-calculator',
    url: '/cotangent-ratio-calculator/',
    key: 'cotangent',
    symbol: 'cot(A)',
    formula: 'cot(A) = b / a',
    numerator: 'adjacent',
    denominator: 'opposite',
    reciprocal: 'tangent',
    range: 'positiveAny',
    exampleValues: 'b = 4, a = 3',
    exampleLines: ['cot(A) = b / a', 'cot(A) = 4 / 3', 'cot(A) = 1.3333'],
    exampleResult: '1.3333',
    exampleAngle: '36.87 degrees'
  },
  'secant-ratio-calculator': {
    slug: 'secant-ratio-calculator',
    url: '/secant-ratio-calculator/',
    key: 'secant',
    symbol: 'sec(A)',
    formula: 'sec(A) = c / b',
    numerator: 'hypotenuse',
    denominator: 'adjacent',
    reciprocal: 'cosine',
    range: 'greaterOne',
    exampleValues: 'c = 5, b = 4',
    exampleLines: ['sec(A) = c / b', 'sec(A) = 5 / 4', 'sec(A) = 1.25'],
    exampleResult: '1.25',
    exampleAngle: '36.87 degrees'
  },
  'cosecant-ratio-calculator': {
    slug: 'cosecant-ratio-calculator',
    url: '/cosecant-ratio-calculator/',
    key: 'cosecant',
    symbol: 'csc(A)',
    formula: 'csc(A) = c / a',
    numerator: 'hypotenuse',
    denominator: 'opposite',
    reciprocal: 'sine',
    range: 'greaterOne',
    exampleValues: 'c = 5, a = 3',
    exampleLines: ['csc(A) = c / a', 'csc(A) = 5 / 3', 'csc(A) = 1.6667'],
    exampleResult: '1.6667',
    exampleAngle: '36.87 degrees'
  }
};

const sideLetters: Record<SideRole, 'a' | 'b' | 'c'> = {
  opposite: 'a',
  adjacent: 'b',
  hypotenuse: 'c'
};

const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{([a-zA-Z0-9]+)\}/g, (_, key: string) => values[key] ?? '');

const sideText = (copy: CopyPack, side: SideRole) => `${copy.sideNames[side]} ${sideLetters[side]}`;

const createUi = (
  labels: Omit<FocusedTrigRatioUi, 'usedIn' | 'notUsedIn'> & {
    usedInPattern: string;
    notUsedInPattern: string;
  }
): FocusedTrigRatioUi => ({
  ...labels,
  usedIn: (label) => fill(labels.usedInPattern, { label }),
  notUsedIn: (label) => fill(labels.notUsedInPattern, { label })
});

const EN_UI = createUi({
  home: 'Home',
  badge: 'Trigonometric Ratio Calculator',
  parentPageLabel: 'Right Triangle Trig Ratios Calculator',
  formula: 'Formula',
  triangleDiagram: 'Triangle Diagram',
  ratioHighlight: 'Ratio Highlight',
  numerator: 'Numerator',
  denominator: 'Denominator',
  sideKey: 'Side Key',
  howToUse: 'How to Use This Calculator',
  stepByStepExample: 'Step-by-Step Example',
  whatResultMeans: 'What the Result Means',
  whenToUse: 'When to Use This Ratio',
  commonMistakes: 'Common Mistakes',
  relatedCalculators: 'Related Calculators',
  openTool: 'Open Tool',
  faqHeading: 'Frequently Asked Questions',
  rightAngle: '90 degrees',
  sideRoles: {
    a: { role: 'opposite side', description: 'across from angle A', short: 'opposite', label: 'a = opposite side' },
    b: { role: 'adjacent side', description: 'next to angle A', short: 'adjacent', label: 'b = adjacent side' },
    c: { role: 'hypotenuse', description: 'longest side, opposite 90 degrees', short: 'hypotenuse', label: 'c = hypotenuse' }
  },
  usedInPattern: 'Used in {label}',
  notUsedInPattern: 'Not used in {label}'
});

const EN_RUNTIME_UI: RuntimeUi = {
  calculationComplete: 'Calculation complete.',
  unableToCalculate: 'Unable to calculate.',
  fixErrors: 'Please fix the errors in the fields above.',
  errorPrefix: 'Error',
  stepLabels: {
    formula: 'Formula',
    substitution: 'Substitution',
    answer: 'Answer',
    explanation: 'Explanation',
    detail: 'Detail'
  }
};

const RUNTIME_UI: Partial<Record<Locale, RuntimeUi>> = {
  hi: {
    calculationComplete: 'गणना पूरी हुई।',
    unableToCalculate: 'गणना नहीं हो सकी।',
    fixErrors: 'कृपया ऊपर दिए गए फ़ील्ड की त्रुटियां ठीक करें।',
    errorPrefix: 'त्रुटि',
    stepLabels: {
      formula: 'सूत्र',
      substitution: 'प्रतिस्थापन',
      answer: 'उत्तर',
      explanation: 'व्याख्या',
      detail: 'विवरण'
    }
  },
  es: {
    calculationComplete: 'Cálculo completado.',
    unableToCalculate: 'No se pudo calcular.',
    fixErrors: 'Corrige los errores en los campos superiores.',
    errorPrefix: 'Error',
    stepLabels: {
      formula: 'Fórmula',
      substitution: 'Sustitución',
      answer: 'Respuesta',
      explanation: 'Explicación',
      detail: 'Detalle'
    }
  },
  ru: {
    calculationComplete: 'Расчет выполнен.',
    unableToCalculate: 'Не удалось выполнить расчет.',
    fixErrors: 'Исправьте ошибки в полях выше.',
    errorPrefix: 'Ошибка',
    stepLabels: {
      formula: 'Формула',
      substitution: 'Подстановка',
      answer: 'Ответ',
      explanation: 'Пояснение',
      detail: 'Деталь'
    }
  },
  fr: {
    calculationComplete: 'Calcul terminé.',
    unableToCalculate: 'Impossible de calculer.',
    fixErrors: 'Corrigez les erreurs dans les champs ci-dessus.',
    errorPrefix: 'Erreur',
    stepLabels: {
      formula: 'Formule',
      substitution: 'Substitution',
      answer: 'Réponse',
      explanation: 'Explication',
      detail: 'Détail'
    }
  },
  de: {
    calculationComplete: 'Berechnung abgeschlossen.',
    unableToCalculate: 'Berechnung nicht möglich.',
    fixErrors: 'Bitte korrigieren Sie die Fehler in den obigen Feldern.',
    errorPrefix: 'Fehler',
    stepLabels: {
      formula: 'Formel',
      substitution: 'Einsetzen',
      answer: 'Antwort',
      explanation: 'Erklärung',
      detail: 'Detail'
    }
  },
  it: {
    calculationComplete: 'Calcolo completato.',
    unableToCalculate: 'Impossibile calcolare.',
    fixErrors: 'Correggi gli errori nei campi sopra.',
    errorPrefix: 'Errore',
    stepLabels: {
      formula: 'Formula',
      substitution: 'Sostituzione',
      answer: 'Risposta',
      explanation: 'Spiegazione',
      detail: 'Dettaglio'
    }
  },
  pt: {
    calculationComplete: 'Cálculo concluído.',
    unableToCalculate: 'Não foi possível calcular.',
    fixErrors: 'Corrija os erros nos campos acima.',
    errorPrefix: 'Erro',
    stepLabels: {
      formula: 'Fórmula',
      substitution: 'Substituição',
      answer: 'Resposta',
      explanation: 'Explicação',
      detail: 'Detalhe'
    }
  },
  bn: {
    calculationComplete: 'গণনা সম্পন্ন হয়েছে।',
    unableToCalculate: 'গণনা করা যায়নি।',
    fixErrors: 'উপরের ক্ষেত্রগুলোর ত্রুটি ঠিক করুন।',
    errorPrefix: 'ত্রুটি',
    stepLabels: {
      formula: 'সূত্র',
      substitution: 'প্রতিস্থাপন',
      answer: 'উত্তর',
      explanation: 'ব্যাখ্যা',
      detail: 'বিবরণ'
    }
  },
  ja: {
    calculationComplete: '計算が完了しました。',
    unableToCalculate: '計算できません。',
    fixErrors: '上の入力欄のエラーを修正してください。',
    errorPrefix: 'エラー',
    stepLabels: {
      formula: '公式',
      substitution: '代入',
      answer: '答え',
      explanation: '説明',
      detail: '詳細'
    }
  },
  ko: {
    calculationComplete: '계산이 완료되었습니다.',
    unableToCalculate: '계산할 수 없습니다.',
    fixErrors: '위 입력란의 오류를 수정하세요.',
    errorPrefix: '오류',
    stepLabels: {
      formula: '공식',
      substitution: '대입',
      answer: '답',
      explanation: '설명',
      detail: '세부 내용'
    }
  },
  ms: {
    calculationComplete: 'Pengiraan selesai.',
    unableToCalculate: 'Tidak dapat mengira.',
    fixErrors: 'Betulkan ralat dalam medan di atas.',
    errorPrefix: 'Ralat',
    stepLabels: {
      formula: 'Formula',
      substitution: 'Penggantian',
      answer: 'Jawapan',
      explanation: 'Penjelasan',
      detail: 'Butiran'
    }
  },
  pl: {
    calculationComplete: 'Obliczenie zakończone.',
    unableToCalculate: 'Nie można obliczyć.',
    fixErrors: 'Popraw błędy w polach powyżej.',
    errorPrefix: 'Błąd',
    stepLabels: {
      formula: 'Wzór',
      substitution: 'Podstawienie',
      answer: 'Odpowiedź',
      explanation: 'Wyjaśnienie',
      detail: 'Szczegół'
    }
  },
  id: {
    calculationComplete: 'Perhitungan selesai.',
    unableToCalculate: 'Tidak dapat menghitung.',
    fixErrors: 'Perbaiki kesalahan pada kolom di atas.',
    errorPrefix: 'Kesalahan',
    stepLabels: {
      formula: 'Rumus',
      substitution: 'Substitusi',
      answer: 'Jawaban',
      explanation: 'Penjelasan',
      detail: 'Detail'
    }
  },
  ar: {
    calculationComplete: 'اكتملت العملية الحسابية.',
    unableToCalculate: 'تعذر الحساب.',
    fixErrors: 'يرجى تصحيح الأخطاء في الحقول أعلاه.',
    errorPrefix: 'خطأ',
    stepLabels: {
      formula: 'الصيغة',
      substitution: 'التعويض',
      answer: 'الإجابة',
      explanation: 'الشرح',
      detail: 'التفاصيل'
    }
  },
  bg: {
    calculationComplete: 'Изчислението е готово.',
    unableToCalculate: 'Не може да се изчисли.',
    fixErrors: 'Поправете грешките в полетата по-горе.',
    errorPrefix: 'Грешка',
    stepLabels: {
      formula: 'Формула',
      substitution: 'Заместване',
      answer: 'Отговор',
      explanation: 'Обяснение',
      detail: 'Детайл'
    }
  },
  tr: {
    calculationComplete: 'Hesaplama tamamlandı.',
    unableToCalculate: 'Hesaplama yapılamadı.',
    fixErrors: 'Yukarıdaki alanlardaki hataları düzeltin.',
    errorPrefix: 'Hata',
    stepLabels: {
      formula: 'Formül',
      substitution: 'Yerine koyma',
      answer: 'Cevap',
      explanation: 'Açıklama',
      detail: 'Detay'
    }
  },
  sv: {
    calculationComplete: 'Beräkningen är klar.',
    unableToCalculate: 'Det går inte att beräkna.',
    fixErrors: 'Rätta felen i fälten ovan.',
    errorPrefix: 'Fel',
    stepLabels: {
      formula: 'Formel',
      substitution: 'Insättning',
      answer: 'Svar',
      explanation: 'Förklaring',
      detail: 'Detalj'
    }
  },
  zh: {
    calculationComplete: '计算完成。',
    unableToCalculate: '无法计算。',
    fixErrors: '请修正上方字段中的错误。',
    errorPrefix: '错误',
    stepLabels: {
      formula: '公式',
      substitution: '代入',
      answer: '答案',
      explanation: '说明',
      detail: '详情'
    }
  }
};

const COPIES: Partial<Record<Locale, CopyPack>> = {
  hi: {
    ratioNames: { sine: 'साइन', cosine: 'कोसाइन', tangent: 'टैन्जेंट', cotangent: 'कोटैन्जेंट', secant: 'सेकेंट', cosecant: 'कोसेकेंट' },
    sideNames: { opposite: 'विपरीत भुजा', adjacent: 'सन्निकट भुजा', hypotenuse: 'कर्ण' },
    ui: createUi({
      home: 'होम',
      badge: 'त्रिकोणमितीय अनुपात कैलकुलेटर',
      parentPageLabel: 'समकोण त्रिभुज त्रिकोणमितीय अनुपात कैलकुलेटर',
      formula: 'सूत्र',
      triangleDiagram: 'त्रिभुज आरेख',
      ratioHighlight: 'अनुपात हाइलाइट',
      numerator: 'अंश',
      denominator: 'हर',
      sideKey: 'भुजा कुंजी',
      howToUse: 'इस कैलकुलेटर का उपयोग कैसे करें',
      stepByStepExample: 'चरण-दर-चरण उदाहरण',
      whatResultMeans: 'परिणाम का अर्थ',
      whenToUse: 'इस अनुपात का उपयोग कब करें',
      commonMistakes: 'सामान्य गलतियां',
      relatedCalculators: 'संबंधित कैलकुलेटर',
      openTool: 'टूल खोलें',
      faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
      rightAngle: '90 डिग्री',
      sideRoles: {
        a: { role: 'विपरीत भुजा', description: 'कोण A के सामने', short: 'विपरीत', label: 'a = विपरीत भुजा' },
        b: { role: 'सन्निकट भुजा', description: 'कोण A के पास', short: 'सन्निकट', label: 'b = सन्निकट भुजा' },
        c: { role: 'कर्ण', description: 'सबसे लंबी भुजा, 90 डिग्री के सामने', short: 'कर्ण', label: 'c = कर्ण' }
      },
      usedInPattern: '{label} में उपयोग',
      notUsedInPattern: '{label} में उपयोग नहीं'
    }),
    relatedAngleCalculator: 'समकोण त्रिभुज कोण कैलकुलेटर',
    pageTitle: '{name} अनुपात कैलकुलेटर',
    headerSummary: '{symbol} को {num} और {den} से समकोण त्रिभुज में निकालें।',
    metaTitle: '{title} | समकोण त्रिभुज {symbol}',
    metaDescription: '{title} से {symbol} निकालें। सूत्र {formula}, चरण, उदाहरण, आरेख और सामान्य गलतियां देखें।',
    calculatorHeading: '{name} अनुपात की गणना करें',
    introHeading: 'यह {title} कैसे काम करता है',
    intro: [
      '{name} अनुपात कोण A को {num} और {den} से जोड़ता है। सही दो भुजाएं दर्ज करने पर यह टूल {symbol} तुरंत देता है।',
      'यह कैलकुलेटर हाथ से भाग देने की गलती कम करता है और वही सूत्र दिखाता है जो ज्यामिति में उपयोग होता है: {formula}।'
    ],
    calculatorNote: '{num} और {den} के सकारात्मक मान दर्ज करें। यदि कर्ण c शामिल है, तो वह संबंधित पैर से लंबा होना चाहिए।',
    formulaParagraphs: [
      '{symbol} का मान {num} को {den} से भाग देकर मिलता है। इसलिए सूत्र {formula} है।',
      'भुजाएं हमेशा कोण A के सापेक्ष पहचानें। दोनों माप एक ही इकाई में हों तो अनुपात बिना इकाई का रहता है।'
    ],
    diagramExplanation: [
      'आरेख में a विपरीत भुजा, b सन्निकट भुजा और c कर्ण है।',
      '{symbol} केवल {num} और {den} का उपयोग करता है। बाकी भुजा पहचानने में मदद करती है, लेकिन इस अनुपात में शामिल नहीं होती।'
    ],
    howToSteps: [
      'समकोण त्रिभुज में कोण A पहचानें।',
      '{num} खोजें।',
      '{den} खोजें।',
      'पहला मान कैलकुलेटर में दर्ज करें।',
      'दूसरा मान उसी इकाई में दर्ज करें।',
      'Calculate बटन दबाकर {symbol} देखें।',
      'परिणाम की जांच करें: {range}'
    ],
    exampleIntro: 'मान लें कि {values} हैं।',
    exampleConclusion: 'परिणाम {symbol} = {result} है। यदि कोण चाहिए, तो inverse trig से A लगभग {angle} मिलता है।',
    resultMeaning: [
      '{symbol} बताता है कि {num} की लंबाई {den} की तुलना में कितनी है।',
      '{range}',
      'अनुपात में इकाई नहीं होती, इसलिए सेंटीमीटर, इंच या मीटर में मापने पर भी मान वही रहता है।'
    ],
    rangeNotes: {
      zeroOne: 'समकोण त्रिभुज के तीव्र कोण के लिए मान 0 और 1 के बीच रहता है।',
      positiveAny: 'यह मान कोई भी सकारात्मक संख्या हो सकता है।',
      greaterOne: 'यह मान हमेशा 1 से बड़ा या बराबर होता है।'
    },
    whenIntro: '{name} अनुपात कैलकुलेटर का उपयोग तब करें जब:',
    whenItems: [
      'आपके पास {num} और {den} हैं और {symbol} चाहिए।',
      'आप homework या परीक्षा का उत्तर जांच रहे हैं।',
      'आप inverse trig से कोण A निकालने की तैयारी कर रहे हैं।',
      'आप बल, ढलान, रैंप या दूरी के घटक पर काम कर रहे हैं।',
      'आप दूसरे त्रिकोणमितीय अनुपात से तुलना करना चाहते हैं।'
    ],
    mistakesIntro: '{name} अनुपात निकालते समय इन गलतियों से बचें:',
    mistakeItems: [
      'गलत भुजा चुनना। हमेशा कोण A के सापेक्ष {num} और {den} पहचानें।',
      'भिन्न को उल्टा लिखना। सही सूत्र {formula} है।',
      'अलग-अलग इकाइयों को बिना बदलें जोड़ना या भाग देना।',
      '90 डिग्री कोण को कोण A मान लेना। अनुपात तीव्र कोण के लिए है।',
      'कर्ण c को सबसे लंबी भुजा के रूप में जांचना भूल जाना।'
    ],
    faqs: [
      { question: '{symbol} का सूत्र क्या है?', answer: 'सूत्र {formula} है, जहां {num} अंश में और {den} हर में होता है।' },
      { question: 'क्या {symbol} की कोई इकाई होती है?', answer: 'नहीं। यह दो लंबाइयों का अनुपात है, इसलिए इकाई रद्द हो जाती है।' },
      { question: 'क्या इससे कोण A मिल सकता है?', answer: 'यह पेज अनुपात देता है। कोण के लिए inverse trig या right triangle angle calculator उपयोग करें।' },
      { question: '{name} और {reciprocalName} में क्या संबंध है?', answer: '{reciprocalName} {name} का reciprocal अनुपात है। एक मान पता हो तो दूसरा 1 से भाग देकर मिल सकता है।' },
      { question: 'कौन सी भुजाएं दर्ज करनी हैं?', answer: '{symbol} के लिए {num} और {den} दर्ज करें।' }
    ]
  },
  es: {
    ratioNames: { sine: 'seno', cosine: 'coseno', tangent: 'tangente', cotangent: 'cotangente', secant: 'secante', cosecant: 'cosecante' },
    sideNames: { opposite: 'lado opuesto', adjacent: 'lado adyacente', hypotenuse: 'hipotenusa' },
    ui: createUi({
      home: 'Inicio',
      badge: 'Calculadora de razones trigonométricas',
      parentPageLabel: 'Calculadora de razones trigonométricas de triángulo rectángulo',
      formula: 'Fórmula',
      triangleDiagram: 'Diagrama del triángulo',
      ratioHighlight: 'Razón destacada',
      numerator: 'Numerador',
      denominator: 'Denominador',
      sideKey: 'Clave de lados',
      howToUse: 'Cómo usar esta calculadora',
      stepByStepExample: 'Ejemplo paso a paso',
      whatResultMeans: 'Qué significa el resultado',
      whenToUse: 'Cuándo usar esta razón',
      commonMistakes: 'Errores comunes',
      relatedCalculators: 'Calculadoras relacionadas',
      openTool: 'Abrir herramienta',
      faqHeading: 'Preguntas frecuentes',
      rightAngle: '90 grados',
      sideRoles: {
        a: { role: 'lado opuesto', description: 'frente al ángulo A', short: 'opuesto', label: 'a = lado opuesto' },
        b: { role: 'lado adyacente', description: 'junto al ángulo A', short: 'adyacente', label: 'b = lado adyacente' },
        c: { role: 'hipotenusa', description: 'lado más largo, opuesto a 90 grados', short: 'hipotenusa', label: 'c = hipotenusa' }
      },
      usedInPattern: 'Usado en {label}',
      notUsedInPattern: 'No se usa en {label}'
    }),
    relatedAngleCalculator: 'Calculadora de ángulos de triángulo rectángulo',
    pageTitle: 'Calculadora de razón de {name}',
    headerSummary: 'Calcula {symbol} con {num} y {den} en un triángulo rectángulo.',
    metaTitle: '{title} | {symbol} en triángulo rectángulo',
    metaDescription: 'Usa esta {title} para calcular {symbol} con la fórmula {formula}, pasos claros, ejemplo y diagrama.',
    calculatorHeading: 'Calcular razón de {name}',
    introHeading: 'Cómo funciona esta {title}',
    intro: [
      'La razón de {name} conecta el ángulo A con {num} y {den}. Al escribir esas dos longitudes, la herramienta devuelve {symbol}.',
      'La calculadora evita la división manual y muestra la misma relación usada en geometría: {formula}.'
    ],
    calculatorNote: 'Introduce valores positivos para {num} y {den}. Si aparece la hipotenusa c, debe ser mayor que el cateto correspondiente.',
    formulaParagraphs: [
      '{symbol} se obtiene dividiendo {num} entre {den}. Por eso la fórmula es {formula}.',
      'Identifica siempre los lados respecto al ángulo A. Si las medidas tienen la misma unidad, la razón no tiene unidad.'
    ],
    diagramExplanation: [
      'En el diagrama, a es el lado opuesto, b es el lado adyacente y c es la hipotenusa.',
      '{symbol} usa solo {num} y {den}. El otro lado ayuda a orientar el triángulo, pero no entra en esta razón.'
    ],
    howToSteps: [
      'Localiza el ángulo A en el triángulo rectángulo.',
      'Identifica {num}.',
      'Identifica {den}.',
      'Escribe el primer valor en la calculadora.',
      'Escribe el segundo valor con la misma unidad.',
      'Pulsa Calculate para obtener {symbol}.',
      'Comprueba el resultado: {range}'
    ],
    exampleIntro: 'Supón que {values}.',
    exampleConclusion: 'El resultado es {symbol} = {result}. Si necesitas el ángulo, usa la función inversa y obtendrás A aproximadamente {angle}.',
    resultMeaning: [
      '{symbol} indica qué tan grande es {num} en comparación con {den}.',
      '{range}',
      'El resultado no tiene unidades porque es una comparación entre dos longitudes.'
    ],
    rangeNotes: {
      zeroOne: 'Para un ángulo agudo de un triángulo rectángulo, el valor está entre 0 y 1.',
      positiveAny: 'El valor puede ser cualquier número positivo.',
      greaterOne: 'El valor siempre es mayor o igual que 1.'
    },
    whenIntro: 'Usa la calculadora de {name} cuando:',
    whenItems: [
      'conoces {num} y {den} y necesitas {symbol}.',
      'quieres revisar una respuesta de tarea o examen.',
      'vas a calcular el ángulo A con una función inversa.',
      'trabajas con pendiente, rampas, fuerzas o componentes de distancia.',
      'quieres comparar esta razón con otra razón trigonométrica.'
    ],
    mistakesIntro: 'Evita estos errores al calcular {name}:',
    mistakeItems: [
      'Elegir el lado equivocado. Identifica {num} y {den} desde el ángulo A.',
      'Invertir la fracción. La fórmula correcta es {formula}.',
      'Mezclar unidades diferentes sin convertirlas.',
      'Usar el ángulo de 90 grados como ángulo A.',
      'Olvidar que la hipotenusa c debe ser el lado más largo.'
    ],
    faqs: [
      { question: '¿Cuál es la fórmula de {symbol}?', answer: 'La fórmula es {formula}; {num} va en el numerador y {den} en el denominador.' },
      { question: '¿{symbol} tiene unidades?', answer: 'No. Es una razón entre dos longitudes, así que las unidades se cancelan.' },
      { question: '¿Puedo encontrar el ángulo A?', answer: 'Esta página da la razón. Para el ángulo, usa la función inversa o la calculadora de ángulos.' },
      { question: '¿Cómo se relacionan {name} y {reciprocalName}?', answer: '{reciprocalName} es la razón recíproca de {name}. Si conoces una, puedes obtener la otra con 1 dividido por ese valor.' },
      { question: '¿Qué lados debo introducir?', answer: 'Para {symbol}, introduce {num} y {den}.' }
    ]
  },
  ru: {
    ratioNames: { sine: 'синуса', cosine: 'косинуса', tangent: 'тангенса', cotangent: 'котангенса', secant: 'секанса', cosecant: 'косеканса' },
    sideNames: { opposite: 'противолежащий катет', adjacent: 'прилежащий катет', hypotenuse: 'гипотенуза' },
    ui: createUi({
      home: 'Главная',
      badge: 'Калькулятор тригонометрических отношений',
      parentPageLabel: 'Калькулятор тригонометрических отношений прямоугольного треугольника',
      formula: 'Формула',
      triangleDiagram: 'Схема треугольника',
      ratioHighlight: 'Выделенное отношение',
      numerator: 'Числитель',
      denominator: 'Знаменатель',
      sideKey: 'Обозначения сторон',
      howToUse: 'Как пользоваться калькулятором',
      stepByStepExample: 'Пошаговый пример',
      whatResultMeans: 'Что означает результат',
      whenToUse: 'Когда использовать это отношение',
      commonMistakes: 'Частые ошибки',
      relatedCalculators: 'Связанные калькуляторы',
      openTool: 'Открыть инструмент',
      faqHeading: 'Частые вопросы',
      rightAngle: '90 градусов',
      sideRoles: {
        a: { role: 'противолежащий катет', description: 'напротив угла A', short: 'противолежащий', label: 'a = противолежащий катет' },
        b: { role: 'прилежащий катет', description: 'рядом с углом A', short: 'прилежащий', label: 'b = прилежащий катет' },
        c: { role: 'гипотенуза', description: 'самая длинная сторона, напротив 90 градусов', short: 'гипотенуза', label: 'c = гипотенуза' }
      },
      usedInPattern: 'Используется в {label}',
      notUsedInPattern: 'Не используется в {label}'
    }),
    relatedAngleCalculator: 'Калькулятор углов прямоугольного треугольника',
    pageTitle: 'Калькулятор отношения {name}',
    headerSummary: 'Вычислите {symbol} по {num} и {den} в прямоугольном треугольнике.',
    metaTitle: '{title} | {symbol} в прямоугольном треугольнике',
    metaDescription: 'Используйте {title}, чтобы найти {symbol}: формула {formula}, шаги, пример и схема.',
    calculatorHeading: 'Вычислить отношение {name}',
    introHeading: 'Как работает {title}',
    intro: [
      'Отношение {name} связывает угол A с величинами {num} и {den}. Введите эти две длины, и инструмент найдет {symbol}.',
      'Калькулятор убирает ручное деление и показывает геометрическую формулу: {formula}.'
    ],
    calculatorNote: 'Введите положительные значения для {num} и {den}. Если используется гипотенуза c, она должна быть длиннее соответствующего катета.',
    formulaParagraphs: [
      '{symbol} равно {num}, деленному на {den}. Поэтому формула имеет вид {formula}.',
      'Определяйте стороны относительно угла A. При одинаковых единицах измерения результат является безразмерным отношением.'
    ],
    diagramExplanation: [
      'На схеме a - противолежащий катет, b - прилежащий катет, c - гипотенуза.',
      '{symbol} использует только {num} и {den}. Третья сторона нужна для ориентации, но в это отношение не входит.'
    ],
    howToSteps: [
      'Найдите угол A в прямоугольном треугольнике.',
      'Определите {num}.',
      'Определите {den}.',
      'Введите первое значение в калькулятор.',
      'Введите второе значение в той же единице.',
      'Нажмите Calculate, чтобы получить {symbol}.',
      'Проверьте результат: {range}'
    ],
    exampleIntro: 'Пусть {values}.',
    exampleConclusion: 'Получаем {symbol} = {result}. Если нужен угол, примените обратную функцию: A примерно {angle}.',
    resultMeaning: [
      '{symbol} показывает, как {num} соотносится с {den}.',
      '{range}',
      'Единицы сокращаются, поэтому отношение не зависит от того, измерены стороны в сантиметрах, метрах или дюймах.'
    ],
    rangeNotes: {
      zeroOne: 'Для острого угла прямоугольного треугольника значение лежит между 0 и 1.',
      positiveAny: 'Значение может быть любым положительным числом.',
      greaterOne: 'Значение всегда больше или равно 1.'
    },
    whenIntro: 'Используйте калькулятор {name}, когда:',
    whenItems: [
      'известны {num} и {den}, а нужно найти {symbol}.',
      'нужно проверить ответ в задаче или домашней работе.',
      'вы готовитесь найти угол A через обратную тригонометрическую функцию.',
      'вы работаете с уклоном, рампой, силой или компонентами расстояния.',
      'нужно сравнить это отношение с другим тригонометрическим отношением.'
    ],
    mistakesIntro: 'При вычислении {name} избегайте ошибок:',
    mistakeItems: [
      'Не выбирайте неправильную сторону. Определяйте {num} и {den} от угла A.',
      'Не переворачивайте дробь. Правильная формула: {formula}.',
      'Не смешивайте разные единицы без перевода.',
      'Не берите угол 90 градусов за угол A.',
      'Помните, что гипотенуза c должна быть самой длинной стороной.'
    ],
    faqs: [
      { question: 'Какая формула для {symbol}?', answer: 'Формула: {formula}. Здесь {num} стоит в числителе, а {den} в знаменателе.' },
      { question: 'Есть ли у {symbol} единицы?', answer: 'Нет. Это отношение двух длин, поэтому единицы сокращаются.' },
      { question: 'Можно ли найти угол A?', answer: 'Эта страница дает отношение. Для угла используйте обратную функцию или калькулятор углов.' },
      { question: 'Как связаны {name} и {reciprocalName}?', answer: '{reciprocalName} является обратным отношением к {name}. Если известно одно значение, второе равно 1, деленному на него.' },
      { question: 'Какие стороны вводить?', answer: 'Для {symbol} введите {num} и {den}.' }
    ]
  },
  fr: {
    ratioNames: { sine: 'sinus', cosine: 'cosinus', tangent: 'tangente', cotangent: 'cotangente', secant: 'sécante', cosecant: 'cosécante' },
    sideNames: { opposite: 'côté opposé', adjacent: 'côté adjacent', hypotenuse: 'hypoténuse' },
    ui: createUi({
      home: 'Accueil',
      badge: 'Calculateur de rapports trigonométriques',
      parentPageLabel: 'Calculateur de rapports trigonométriques du triangle rectangle',
      formula: 'Formule',
      triangleDiagram: 'Schéma du triangle',
      ratioHighlight: 'Rapport mis en évidence',
      numerator: 'Numérateur',
      denominator: 'Dénominateur',
      sideKey: 'Clé des côtés',
      howToUse: 'Comment utiliser ce calculateur',
      stepByStepExample: 'Exemple étape par étape',
      whatResultMeans: 'Signification du résultat',
      whenToUse: 'Quand utiliser ce rapport',
      commonMistakes: 'Erreurs courantes',
      relatedCalculators: 'Calculateurs associés',
      openTool: 'Ouvrir l outil',
      faqHeading: 'Questions fréquentes',
      rightAngle: '90 degrés',
      sideRoles: {
        a: { role: 'côté opposé', description: 'en face de l angle A', short: 'opposé', label: 'a = côté opposé' },
        b: { role: 'côté adjacent', description: 'à côté de l angle A', short: 'adjacent', label: 'b = côté adjacent' },
        c: { role: 'hypoténuse', description: 'côté le plus long, opposé à 90 degrés', short: 'hypoténuse', label: 'c = hypoténuse' }
      },
      usedInPattern: 'Utilisé dans {label}',
      notUsedInPattern: 'Non utilisé dans {label}'
    }),
    relatedAngleCalculator: 'Calculateur d angle de triangle rectangle',
    pageTitle: 'Calculateur du rapport de {name}',
    headerSummary: 'Calculez {symbol} avec {num} et {den} dans un triangle rectangle.',
    metaTitle: '{title} | {symbol} dans un triangle rectangle',
    metaDescription: 'Utilisez ce {title} pour trouver {symbol} avec la formule {formula}, des étapes, un exemple et un schéma.',
    calculatorHeading: 'Calculer le rapport de {name}',
    introHeading: 'Fonctionnement de ce {title}',
    intro: [
      'Le rapport de {name} relie l angle A à {num} et {den}. Entrez ces deux longueurs pour obtenir {symbol}.',
      'Le calculateur évite la division manuelle et affiche la relation géométrique: {formula}.'
    ],
    calculatorNote: 'Entrez des valeurs positives pour {num} et {den}. Si l hypoténuse c est utilisée, elle doit être plus longue que le côté concerné.',
    formulaParagraphs: [
      '{symbol} est égal à {num} divisé par {den}. La formule est donc {formula}.',
      'Identifiez toujours les côtés par rapport à l angle A. Avec les mêmes unités, le résultat est un rapport sans unité.'
    ],
    diagramExplanation: [
      'Dans le schéma, a est le côté opposé, b est le côté adjacent et c est l hypoténuse.',
      '{symbol} utilise seulement {num} et {den}. Le troisième côté aide à lire le triangle, mais il ne fait pas partie du rapport.'
    ],
    howToSteps: [
      'Repérez l angle A dans le triangle rectangle.',
      'Identifiez {num}.',
      'Identifiez {den}.',
      'Saisissez la première valeur dans le calculateur.',
      'Saisissez la deuxième valeur dans la même unité.',
      'Appuyez sur Calculate pour obtenir {symbol}.',
      'Vérifiez le résultat: {range}'
    ],
    exampleIntro: 'Supposons que {values}.',
    exampleConclusion: 'Le résultat est {symbol} = {result}. Pour trouver l angle, utilisez la fonction inverse: A vaut environ {angle}.',
    resultMeaning: [
      '{symbol} indique la taille de {num} par rapport à {den}.',
      '{range}',
      'Le rapport n a pas d unité, car deux longueurs de même unité sont comparées.'
    ],
    rangeNotes: {
      zeroOne: 'Pour un angle aigu de triangle rectangle, la valeur est comprise entre 0 et 1.',
      positiveAny: 'La valeur peut être n importe quel nombre positif.',
      greaterOne: 'La valeur est toujours supérieure ou égale à 1.'
    },
    whenIntro: 'Utilisez le calculateur de {name} lorsque:',
    whenItems: [
      'vous connaissez {num} et {den} et vous voulez {symbol}.',
      'vous vérifiez un devoir ou une réponse d examen.',
      'vous préparez le calcul de l angle A avec une fonction inverse.',
      'vous travaillez sur une pente, une rampe, une force ou une composante de distance.',
      'vous voulez comparer ce rapport à un autre rapport trigonométrique.'
    ],
    mistakesIntro: 'Évitez ces erreurs avec {name}:',
    mistakeItems: [
      'Choisir le mauvais côté. Déterminez {num} et {den} depuis l angle A.',
      'Inverser la fraction. La bonne formule est {formula}.',
      'Mélanger des unités différentes sans conversion.',
      'Utiliser l angle droit comme angle A.',
      'Oublier que l hypoténuse c doit être le côté le plus long.'
    ],
    faqs: [
      { question: 'Quelle est la formule de {symbol}?', answer: 'La formule est {formula}: {num} est au numérateur et {den} au dénominateur.' },
      { question: '{symbol} a-t-il une unité?', answer: 'Non. C est un rapport entre deux longueurs, donc les unités se simplifient.' },
      { question: 'Puis-je trouver l angle A?', answer: 'Cette page donne le rapport. Pour l angle, utilisez la fonction inverse ou le calculateur d angles.' },
      { question: 'Quel est le lien entre {name} et {reciprocalName}?', answer: '{reciprocalName} est le rapport réciproque de {name}. Si vous connaissez l un, l autre vaut 1 divisé par cette valeur.' },
      { question: 'Quels côtés faut-il entrer?', answer: 'Pour {symbol}, entrez {num} et {den}.' }
    ]
  },
  de: {
    ratioNames: { sine: 'Sinus', cosine: 'Kosinus', tangent: 'Tangens', cotangent: 'Kotangens', secant: 'Sekans', cosecant: 'Kosekans' },
    sideNames: { opposite: 'Gegenkathete', adjacent: 'Ankathete', hypotenuse: 'Hypotenuse' },
    ui: createUi({
      home: 'Startseite',
      badge: 'Rechner für trigonometrische Verhältnisse',
      parentPageLabel: 'Rechner für trigonometrische Verhältnisse im rechtwinkligen Dreieck',
      formula: 'Formel',
      triangleDiagram: 'Dreiecksdiagramm',
      ratioHighlight: 'Verhältnis im Fokus',
      numerator: 'Zähler',
      denominator: 'Nenner',
      sideKey: 'Seitenschlüssel',
      howToUse: 'So verwenden Sie diesen Rechner',
      stepByStepExample: 'Beispiel Schritt für Schritt',
      whatResultMeans: 'Was das Ergebnis bedeutet',
      whenToUse: 'Wann dieses Verhältnis nützlich ist',
      commonMistakes: 'Häufige Fehler',
      relatedCalculators: 'Verwandte Rechner',
      openTool: 'Tool öffnen',
      faqHeading: 'Häufige Fragen',
      rightAngle: '90 Grad',
      sideRoles: {
        a: { role: 'Gegenkathete', description: 'gegenüber von Winkel A', short: 'gegenüber', label: 'a = Gegenkathete' },
        b: { role: 'Ankathete', description: 'neben Winkel A', short: 'anliegend', label: 'b = Ankathete' },
        c: { role: 'Hypotenuse', description: 'längste Seite, gegenüber 90 Grad', short: 'Hypotenuse', label: 'c = Hypotenuse' }
      },
      usedInPattern: 'Verwendet in {label}',
      notUsedInPattern: 'Nicht verwendet in {label}'
    }),
    relatedAngleCalculator: 'Winkelrechner für rechtwinklige Dreiecke',
    pageTitle: '{name}-Verhältnis-Rechner',
    headerSummary: 'Berechnen Sie {symbol} aus {num} und {den} im rechtwinkligen Dreieck.',
    metaTitle: '{title} | {symbol} im rechtwinkligen Dreieck',
    metaDescription: 'Nutzen Sie den {title}, um {symbol} mit Formel {formula}, Schritten, Beispiel und Diagramm zu bestimmen.',
    calculatorHeading: '{name}-Verhältnis berechnen',
    introHeading: 'So funktioniert dieser {title}',
    intro: [
      'Das {name}-Verhältnis verbindet Winkel A mit {num} und {den}. Geben Sie diese zwei Längen ein, um {symbol} zu erhalten.',
      'Der Rechner übernimmt die Division und zeigt die geometrische Beziehung: {formula}.'
    ],
    calculatorNote: 'Geben Sie positive Werte für {num} und {den} ein. Wenn Hypotenuse c vorkommt, muss sie länger als die betreffende Kathete sein.',
    formulaParagraphs: [
      '{symbol} ist {num} geteilt durch {den}. Daher lautet die Formel {formula}.',
      'Bestimmen Sie die Seiten immer relativ zu Winkel A. Bei gleichen Einheiten ist das Ergebnis ein einheitenloses Verhältnis.'
    ],
    diagramExplanation: [
      'Im Diagramm ist a die Gegenkathete, b die Ankathete und c die Hypotenuse.',
      '{symbol} verwendet nur {num} und {den}. Die dritte Seite hilft bei der Orientierung, gehört aber nicht zu diesem Verhältnis.'
    ],
    howToSteps: [
      'Suchen Sie Winkel A im rechtwinkligen Dreieck.',
      'Bestimmen Sie {num}.',
      'Bestimmen Sie {den}.',
      'Geben Sie den ersten Wert in den Rechner ein.',
      'Geben Sie den zweiten Wert in derselben Einheit ein.',
      'Klicken Sie auf Calculate, um {symbol} zu sehen.',
      'Prüfen Sie das Ergebnis: {range}'
    ],
    exampleIntro: 'Angenommen, {values}.',
    exampleConclusion: 'Das Ergebnis ist {symbol} = {result}. Für den Winkel verwenden Sie die Umkehrfunktion: A ist ungefähr {angle}.',
    resultMeaning: [
      '{symbol} zeigt, wie groß {num} im Vergleich zu {den} ist.',
      '{range}',
      'Das Ergebnis hat keine Einheit, weil zwei Längen miteinander verglichen werden.'
    ],
    rangeNotes: {
      zeroOne: 'Für einen spitzen Winkel im rechtwinkligen Dreieck liegt der Wert zwischen 0 und 1.',
      positiveAny: 'Der Wert kann jede positive Zahl sein.',
      greaterOne: 'Der Wert ist immer größer oder gleich 1.'
    },
    whenIntro: 'Verwenden Sie den {name}-Rechner, wenn:',
    whenItems: [
      'Sie {num} und {den} kennen und {symbol} benötigen.',
      'Sie eine Hausaufgabe oder Prüfungslösung prüfen.',
      'Sie Winkel A mit einer Umkehrfunktion bestimmen möchten.',
      'Sie mit Steigung, Rampe, Kraft oder Distanzkomponenten arbeiten.',
      'Sie dieses Verhältnis mit einem anderen trigonometrischen Verhältnis vergleichen.'
    ],
    mistakesIntro: 'Vermeiden Sie diese Fehler beim {name}:',
    mistakeItems: [
      'Die falsche Seite wählen. Bestimmen Sie {num} und {den} vom Winkel A aus.',
      'Den Bruch umdrehen. Die richtige Formel ist {formula}.',
      'Unterschiedliche Einheiten ohne Umrechnung verwenden.',
      'Den rechten Winkel als Winkel A verwenden.',
      'Vergessen, dass die Hypotenuse c die längste Seite sein muss.'
    ],
    faqs: [
      { question: 'Wie lautet die Formel für {symbol}?', answer: 'Die Formel lautet {formula}. {num} steht im Zähler und {den} im Nenner.' },
      { question: 'Hat {symbol} eine Einheit?', answer: 'Nein. Es ist ein Verhältnis zweier Längen, daher kürzen sich die Einheiten weg.' },
      { question: 'Kann ich Winkel A finden?', answer: 'Diese Seite liefert das Verhältnis. Für den Winkel nutzen Sie die Umkehrfunktion oder den Winkelrechner.' },
      { question: 'Wie hängen {name} und {reciprocalName} zusammen?', answer: '{reciprocalName} ist das Kehrwert-Verhältnis von {name}. Ist ein Wert bekannt, erhalten Sie den anderen durch 1 geteilt durch diesen Wert.' },
      { question: 'Welche Seiten gebe ich ein?', answer: 'Für {symbol} geben Sie {num} und {den} ein.' }
    ]
  },
  it: {
    ratioNames: { sine: 'seno', cosine: 'coseno', tangent: 'tangente', cotangent: 'cotangente', secant: 'secante', cosecant: 'cosecante' },
    sideNames: { opposite: 'lato opposto', adjacent: 'lato adiacente', hypotenuse: 'ipotenusa' },
    ui: createUi({
      home: 'Home',
      badge: 'Calcolatore di rapporti trigonometrici',
      parentPageLabel: 'Calcolatore dei rapporti trigonometrici del triangolo rettangolo',
      formula: 'Formula',
      triangleDiagram: 'Diagramma del triangolo',
      ratioHighlight: 'Rapporto evidenziato',
      numerator: 'Numeratore',
      denominator: 'Denominatore',
      sideKey: 'Legenda dei lati',
      howToUse: 'Come usare questo calcolatore',
      stepByStepExample: 'Esempio passo passo',
      whatResultMeans: 'Significato del risultato',
      whenToUse: 'Quando usare questo rapporto',
      commonMistakes: 'Errori comuni',
      relatedCalculators: 'Calcolatori correlati',
      openTool: 'Apri strumento',
      faqHeading: 'Domande frequenti',
      rightAngle: '90 gradi',
      sideRoles: {
        a: { role: 'lato opposto', description: 'di fronte all angolo A', short: 'opposto', label: 'a = lato opposto' },
        b: { role: 'lato adiacente', description: 'vicino all angolo A', short: 'adiacente', label: 'b = lato adiacente' },
        c: { role: 'ipotenusa', description: 'lato più lungo, opposto a 90 gradi', short: 'ipotenusa', label: 'c = ipotenusa' }
      },
      usedInPattern: 'Usato in {label}',
      notUsedInPattern: 'Non usato in {label}'
    }),
    relatedAngleCalculator: 'Calcolatore degli angoli del triangolo rettangolo',
    pageTitle: 'Calcolatore del rapporto di {name}',
    headerSummary: 'Calcola {symbol} da {num} e {den} in un triangolo rettangolo.',
    metaTitle: '{title} | {symbol} nel triangolo rettangolo',
    metaDescription: 'Usa questo {title} per trovare {symbol} con formula {formula}, passaggi, esempio e diagramma.',
    calculatorHeading: 'Calcola il rapporto di {name}',
    introHeading: 'Come funziona questo {title}',
    intro: [
      'Il rapporto di {name} collega l angolo A con {num} e {den}. Inserendo queste due lunghezze ottieni {symbol}.',
      'Il calcolatore evita la divisione manuale e mostra la relazione geometrica: {formula}.'
    ],
    calculatorNote: 'Inserisci valori positivi per {num} e {den}. Se è presente l ipotenusa c, deve essere più lunga del cateto corrispondente.',
    formulaParagraphs: [
      '{symbol} è uguale a {num} diviso per {den}. La formula è quindi {formula}.',
      'Identifica sempre i lati rispetto all angolo A. Con la stessa unità di misura il risultato è un rapporto senza unità.'
    ],
    diagramExplanation: [
      'Nel diagramma, a è il lato opposto, b è il lato adiacente e c è l ipotenusa.',
      '{symbol} usa solo {num} e {den}. L altro lato aiuta a orientare il triangolo, ma non entra nel rapporto.'
    ],
    howToSteps: [
      'Trova l angolo A nel triangolo rettangolo.',
      'Individua {num}.',
      'Individua {den}.',
      'Inserisci il primo valore nel calcolatore.',
      'Inserisci il secondo valore nella stessa unità.',
      'Premi Calculate per ottenere {symbol}.',
      'Controlla il risultato: {range}'
    ],
    exampleIntro: 'Supponiamo che {values}.',
    exampleConclusion: 'Il risultato è {symbol} = {result}. Per trovare l angolo, usa la funzione inversa: A è circa {angle}.',
    resultMeaning: [
      '{symbol} mostra quanto è grande {num} rispetto a {den}.',
      '{range}',
      'Il risultato non ha unità perché confronta due lunghezze.'
    ],
    rangeNotes: {
      zeroOne: 'Per un angolo acuto di un triangolo rettangolo, il valore è tra 0 e 1.',
      positiveAny: 'Il valore può essere qualsiasi numero positivo.',
      greaterOne: 'Il valore è sempre maggiore o uguale a 1.'
    },
    whenIntro: 'Usa il calcolatore di {name} quando:',
    whenItems: [
      'conosci {num} e {den} e ti serve {symbol}.',
      'devi verificare un compito o una risposta d esame.',
      'vuoi trovare l angolo A con una funzione inversa.',
      'lavori con pendenze, rampe, forze o componenti di distanza.',
      'vuoi confrontare questo rapporto con un altro rapporto trigonometrico.'
    ],
    mistakesIntro: 'Evita questi errori nel calcolo di {name}:',
    mistakeItems: [
      'Scegliere il lato sbagliato. Identifica {num} e {den} dall angolo A.',
      'Invertire la frazione. La formula corretta è {formula}.',
      'Mescolare unità diverse senza conversione.',
      'Usare l angolo di 90 gradi come angolo A.',
      'Dimenticare che l ipotenusa c deve essere il lato più lungo.'
    ],
    faqs: [
      { question: 'Qual è la formula di {symbol}?', answer: 'La formula è {formula}; {num} è al numeratore e {den} al denominatore.' },
      { question: '{symbol} ha unità?', answer: 'No. È un rapporto tra due lunghezze, quindi le unità si annullano.' },
      { question: 'Posso trovare l angolo A?', answer: 'Questa pagina restituisce il rapporto. Per l angolo usa la funzione inversa o il calcolatore degli angoli.' },
      { question: 'Come sono collegati {name} e {reciprocalName}?', answer: '{reciprocalName} è il rapporto reciproco di {name}. Se conosci uno, l altro è 1 diviso quel valore.' },
      { question: 'Quali lati devo inserire?', answer: 'Per {symbol}, inserisci {num} e {den}.' }
    ]
  },
  pt: {
    ratioNames: { sine: 'seno', cosine: 'cosseno', tangent: 'tangente', cotangent: 'cotangente', secant: 'secante', cosecant: 'cossecante' },
    sideNames: { opposite: 'lado oposto', adjacent: 'lado adjacente', hypotenuse: 'hipotenusa' },
    ui: createUi({
      home: 'Início',
      badge: 'Calculadora de razões trigonométricas',
      parentPageLabel: 'Calculadora de razões trigonométricas de triângulo retângulo',
      formula: 'Fórmula',
      triangleDiagram: 'Diagrama do triângulo',
      ratioHighlight: 'Razão em destaque',
      numerator: 'Numerador',
      denominator: 'Denominador',
      sideKey: 'Chave dos lados',
      howToUse: 'Como usar esta calculadora',
      stepByStepExample: 'Exemplo passo a passo',
      whatResultMeans: 'O que o resultado significa',
      whenToUse: 'Quando usar esta razão',
      commonMistakes: 'Erros comuns',
      relatedCalculators: 'Calculadoras relacionadas',
      openTool: 'Abrir ferramenta',
      faqHeading: 'Perguntas frequentes',
      rightAngle: '90 graus',
      sideRoles: {
        a: { role: 'lado oposto', description: 'em frente ao ângulo A', short: 'oposto', label: 'a = lado oposto' },
        b: { role: 'lado adjacente', description: 'junto ao ângulo A', short: 'adjacente', label: 'b = lado adjacente' },
        c: { role: 'hipotenusa', description: 'lado mais longo, oposto a 90 graus', short: 'hipotenusa', label: 'c = hipotenusa' }
      },
      usedInPattern: 'Usado em {label}',
      notUsedInPattern: 'Não usado em {label}'
    }),
    relatedAngleCalculator: 'Calculadora de ângulos de triângulo retângulo',
    pageTitle: 'Calculadora da razão de {name}',
    headerSummary: 'Calcule {symbol} usando {num} e {den} em um triângulo retângulo.',
    metaTitle: '{title} | {symbol} no triângulo retângulo',
    metaDescription: 'Use esta {title} para encontrar {symbol} com a fórmula {formula}, passos, exemplo e diagrama.',
    calculatorHeading: 'Calcular razão de {name}',
    introHeading: 'Como esta {title} funciona',
    intro: [
      'A razão de {name} liga o ângulo A a {num} e {den}. Informe essas duas medidas para obter {symbol}.',
      'A calculadora evita a divisão manual e mostra a relação geométrica: {formula}.'
    ],
    calculatorNote: 'Digite valores positivos para {num} e {den}. Se a hipotenusa c aparecer, ela deve ser maior que o cateto correspondente.',
    formulaParagraphs: [
      '{symbol} é {num} dividido por {den}. Por isso a fórmula é {formula}.',
      'Identifique os lados sempre em relação ao ângulo A. Com a mesma unidade, o resultado é uma razão sem unidade.'
    ],
    diagramExplanation: [
      'No diagrama, a é o lado oposto, b é o lado adjacente e c é a hipotenusa.',
      '{symbol} usa apenas {num} e {den}. O outro lado ajuda na leitura do triângulo, mas não entra nessa razão.'
    ],
    howToSteps: [
      'Localize o ângulo A no triângulo retângulo.',
      'Identifique {num}.',
      'Identifique {den}.',
      'Digite o primeiro valor na calculadora.',
      'Digite o segundo valor na mesma unidade.',
      'Pressione Calculate para obter {symbol}.',
      'Confira o resultado: {range}'
    ],
    exampleIntro: 'Suponha que {values}.',
    exampleConclusion: 'O resultado é {symbol} = {result}. Se precisar do ângulo, use a função inversa: A é aproximadamente {angle}.',
    resultMeaning: [
      '{symbol} mostra o tamanho de {num} em comparação com {den}.',
      '{range}',
      'A razão não tem unidade porque compara duas medidas de comprimento.'
    ],
    rangeNotes: {
      zeroOne: 'Para um ângulo agudo de um triângulo retângulo, o valor fica entre 0 e 1.',
      positiveAny: 'O valor pode ser qualquer número positivo.',
      greaterOne: 'O valor é sempre maior ou igual a 1.'
    },
    whenIntro: 'Use a calculadora de {name} quando:',
    whenItems: [
      'você conhece {num} e {den} e precisa de {symbol}.',
      'quer conferir uma resposta de tarefa ou prova.',
      'vai encontrar o ângulo A com uma função inversa.',
      'trabalha com inclinação, rampas, forças ou componentes de distância.',
      'quer comparar esta razão com outra razão trigonométrica.'
    ],
    mistakesIntro: 'Evite estes erros ao calcular {name}:',
    mistakeItems: [
      'Escolher o lado errado. Identifique {num} e {den} a partir do ângulo A.',
      'Inverter a fração. A fórmula correta é {formula}.',
      'Misturar unidades diferentes sem converter.',
      'Usar o ângulo de 90 graus como ângulo A.',
      'Esquecer que a hipotenusa c deve ser o lado mais longo.'
    ],
    faqs: [
      { question: 'Qual é a fórmula de {symbol}?', answer: 'A fórmula é {formula}; {num} fica no numerador e {den} no denominador.' },
      { question: '{symbol} tem unidade?', answer: 'Não. É uma razão entre duas medidas, então as unidades se cancelam.' },
      { question: 'Posso encontrar o ângulo A?', answer: 'Esta página fornece a razão. Para o ângulo, use a função inversa ou a calculadora de ângulos.' },
      { question: 'Como {name} e {reciprocalName} se relacionam?', answer: '{reciprocalName} é a razão recíproca de {name}. Se você conhece uma, a outra é 1 dividido por esse valor.' },
      { question: 'Quais lados devo inserir?', answer: 'Para {symbol}, insira {num} e {den}.' }
    ]
  },
  bn: {
    ratioNames: { sine: 'সাইন', cosine: 'কোসাইন', tangent: 'ট্যানজেন্ট', cotangent: 'কোট্যানজেন্ট', secant: 'সেক্যান্ট', cosecant: 'কোসেক্যান্ট' },
    sideNames: { opposite: 'বিপরীত বাহু', adjacent: 'সংলগ্ন বাহু', hypotenuse: 'অতিভুজ' },
    ui: createUi({
      home: 'হোম',
      badge: 'ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর',
      parentPageLabel: 'সমকোণী ত্রিভুজ ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর',
      formula: 'সূত্র',
      triangleDiagram: 'ত্রিভুজ চিত্র',
      ratioHighlight: 'অনুপাত হাইলাইট',
      numerator: 'লব',
      denominator: 'হর',
      sideKey: 'বাহুর চাবি',
      howToUse: 'এই ক্যালকুলেটর কীভাবে ব্যবহার করবেন',
      stepByStepExample: 'ধাপে ধাপে উদাহরণ',
      whatResultMeans: 'ফলাফলের অর্থ',
      whenToUse: 'কখন এই অনুপাত ব্যবহার করবেন',
      commonMistakes: 'সাধারণ ভুল',
      relatedCalculators: 'সম্পর্কিত ক্যালকুলেটর',
      openTool: 'টুল খুলুন',
      faqHeading: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
      rightAngle: '90 ডিগ্রি',
      sideRoles: {
        a: { role: 'বিপরীত বাহু', description: 'কোণ A এর বিপরীতে', short: 'বিপরীত', label: 'a = বিপরীত বাহু' },
        b: { role: 'সংলগ্ন বাহু', description: 'কোণ A এর পাশে', short: 'সংলগ্ন', label: 'b = সংলগ্ন বাহু' },
        c: { role: 'অতিভুজ', description: 'সবচেয়ে দীর্ঘ বাহু, 90 ডিগ্রির বিপরীতে', short: 'অতিভুজ', label: 'c = অতিভুজ' }
      },
      usedInPattern: '{label} এ ব্যবহৃত',
      notUsedInPattern: '{label} এ ব্যবহৃত নয়'
    }),
    relatedAngleCalculator: 'সমকোণী ত্রিভুজ কোণ ক্যালকুলেটর',
    pageTitle: '{name} অনুপাত ক্যালকুলেটর',
    headerSummary: 'সমকোণী ত্রিভুজে {num} ও {den} থেকে {symbol} বের করুন।',
    metaTitle: '{title} | সমকোণী ত্রিভুজ {symbol}',
    metaDescription: '{title} দিয়ে {symbol} বের করুন। সূত্র {formula}, ধাপ, উদাহরণ ও চিত্র দেখুন।',
    calculatorHeading: '{name} অনুপাত গণনা করুন',
    introHeading: 'এই {title} কীভাবে কাজ করে',
    intro: [
      '{name} অনুপাত কোণ A কে {num} ও {den} এর সঙ্গে যুক্ত করে। দুইটি মান দিলে টুলটি {symbol} দেয়।',
      'ক্যালকুলেটর হাতে ভাগ করার কাজ কমায় এবং জ্যামিতির সূত্র দেখায়: {formula}।'
    ],
    calculatorNote: '{num} ও {den} এর ধনাত্মক মান লিখুন। অতিভুজ c থাকলে সেটি সংশ্লিষ্ট বাহুর চেয়ে বড় হতে হবে।',
    formulaParagraphs: [
      '{symbol} হলো {num} ভাগ {den}। তাই সূত্র {formula}।',
      'সব সময় কোণ A অনুযায়ী বাহু চিহ্নিত করুন। একই এককে মাপলে অনুপাতের কোনো একক থাকে না।'
    ],
    diagramExplanation: [
      'চিত্রে a বিপরীত বাহু, b সংলগ্ন বাহু এবং c অতিভুজ।',
      '{symbol} শুধু {num} ও {den} ব্যবহার করে। অন্য বাহু দিক বুঝতে সাহায্য করে, কিন্তু এই অনুপাতে লাগে না।'
    ],
    howToSteps: [
      'সমকোণী ত্রিভুজে কোণ A খুঁজুন।',
      '{num} শনাক্ত করুন।',
      '{den} শনাক্ত করুন।',
      'প্রথম মান ক্যালকুলেটরে লিখুন।',
      'দ্বিতীয় মান একই এককে লিখুন।',
      'Calculate চাপুন এবং {symbol} দেখুন।',
      'ফলাফল যাচাই করুন: {range}'
    ],
    exampleIntro: 'ধরা যাক {values}।',
    exampleConclusion: 'ফলাফল {symbol} = {result}। কোণ দরকার হলে inverse trig ব্যবহার করুন: A প্রায় {angle}।',
    resultMeaning: [
      '{symbol} দেখায় {num}, {den} এর তুলনায় কত বড়।',
      '{range}',
      'এটি এককবিহীন, কারণ দুইটি দৈর্ঘ্যের অনুপাত নেওয়া হয়।'
    ],
    rangeNotes: {
      zeroOne: 'সমকোণী ত্রিভুজের সূক্ষ্ম কোণের জন্য মান 0 ও 1 এর মধ্যে থাকে।',
      positiveAny: 'মান যেকোনো ধনাত্মক সংখ্যা হতে পারে।',
      greaterOne: 'মান সবসময় 1 বা তার বেশি হয়।'
    },
    whenIntro: '{name} ক্যালকুলেটর ব্যবহার করুন যখন:',
    whenItems: [
      'আপনার কাছে {num} ও {den} আছে এবং {symbol} দরকার।',
      'আপনি homework বা পরীক্ষার উত্তর যাচাই করছেন।',
      'আপনি inverse trig দিয়ে কোণ A বের করতে চান।',
      'আপনি ঢাল, র্যাম্প, বল বা দূরত্বের উপাংশ নিয়ে কাজ করছেন।',
      'আপনি অন্য ত্রিকোণমিতিক অনুপাতের সঙ্গে তুলনা করতে চান।'
    ],
    mistakesIntro: '{name} গণনায় এই ভুলগুলো এড়িয়ে চলুন:',
    mistakeItems: [
      'ভুল বাহু নেওয়া। কোণ A থেকে {num} ও {den} শনাক্ত করুন।',
      'ভগ্নাংশ উল্টে ফেলা। সঠিক সূত্র {formula}।',
      'একক না মিলিয়ে মান ব্যবহার করা।',
      '90 ডিগ্রি কোণকে A ধরে নেওয়া।',
      'অতিভুজ c যে সবচেয়ে দীর্ঘ বাহু তা যাচাই না করা।'
    ],
    faqs: [
      { question: '{symbol} এর সূত্র কী?', answer: 'সূত্র {formula}; {num} লবে এবং {den} হরে থাকে।' },
      { question: '{symbol} এর কি একক আছে?', answer: 'না। এটি দুই দৈর্ঘ্যের অনুপাত, তাই একক বাদ যায়।' },
      { question: 'কোণ A কি বের করা যায়?', answer: 'এই পেজ অনুপাত দেয়। কোণের জন্য inverse trig বা angle calculator ব্যবহার করুন।' },
      { question: '{name} ও {reciprocalName} এর সম্পর্ক কী?', answer: '{reciprocalName} হলো {name} এর reciprocal অনুপাত। একটি জানা থাকলে অন্যটি 1 ভাগ সেই মান।' },
      { question: 'কোন বাহুগুলো লিখব?', answer: '{symbol} এর জন্য {num} ও {den} লিখুন।' }
    ]
  },
  ja: {
    ratioNames: { sine: 'サイン', cosine: 'コサイン', tangent: 'タンジェント', cotangent: 'コタンジェント', secant: 'セカント', cosecant: 'コセカント' },
    sideNames: { opposite: '対辺', adjacent: '隣辺', hypotenuse: '斜辺' },
    ui: createUi({
      home: 'ホーム',
      badge: '三角比計算機',
      parentPageLabel: '直角三角形の三角比計算機',
      formula: '公式',
      triangleDiagram: '三角形の図',
      ratioHighlight: '比の注目点',
      numerator: '分子',
      denominator: '分母',
      sideKey: '辺の説明',
      howToUse: 'この計算機の使い方',
      stepByStepExample: '手順付きの例',
      whatResultMeans: '結果の意味',
      whenToUse: 'この比を使う場面',
      commonMistakes: 'よくある間違い',
      relatedCalculators: '関連する計算機',
      openTool: 'ツールを開く',
      faqHeading: 'よくある質問',
      rightAngle: '90度',
      sideRoles: {
        a: { role: '対辺', description: '角Aの向かい側', short: '対辺', label: 'a = 対辺' },
        b: { role: '隣辺', description: '角Aに接する辺', short: '隣辺', label: 'b = 隣辺' },
        c: { role: '斜辺', description: '最も長い辺で90度の向かい側', short: '斜辺', label: 'c = 斜辺' }
      },
      usedInPattern: '{label}で使用',
      notUsedInPattern: '{label}では未使用'
    }),
    relatedAngleCalculator: '直角三角形の角度計算機',
    pageTitle: '{name}比計算機',
    headerSummary: '直角三角形で{num}と{den}から{symbol}を求めます。',
    metaTitle: '{title} | 直角三角形の{symbol}',
    metaDescription: '{title}で{symbol}を計算します。公式{formula}、手順、例、図を確認できます。',
    calculatorHeading: '{name}比を計算',
    introHeading: 'この{title}のしくみ',
    intro: [
      '{name}比は角Aと{num}、{den}を結び付けます。2つの長さを入力すると{symbol}が求まります。',
      'この計算機は手計算の割り算を省き、幾何で使う関係{formula}を表示します。'
    ],
    calculatorNote: '{num}と{den}には正の値を入力してください。斜辺cを使う場合、対応する脚より長くなければなりません。',
    formulaParagraphs: [
      '{symbol}は{num}を{den}で割った値です。したがって公式は{formula}です。',
      '辺は必ず角Aを基準に見分けます。同じ単位で測れば、結果は単位を持たない比になります。'
    ],
    diagramExplanation: [
      '図ではaが対辺、bが隣辺、cが斜辺です。',
      '{symbol}は{num}と{den}だけを使います。残りの辺は向きを確認する助けになりますが、この比には入りません。'
    ],
    howToSteps: [
      '直角三角形の角Aを確認します。',
      '{num}を見つけます。',
      '{den}を見つけます。',
      '最初の値を入力します。',
      '2つ目の値を同じ単位で入力します。',
      'Calculateを押して{symbol}を表示します。',
      '結果を確認します: {range}'
    ],
    exampleIntro: '{values}とします。',
    exampleConclusion: '結果は{symbol} = {result}です。角度が必要なら逆三角関数を使うと、Aは約{angle}です。',
    resultMeaning: [
      '{symbol}は{num}が{den}に対してどれくらいの長さかを示します。',
      '{range}',
      '2つの長さを比べるため、結果に単位はありません。'
    ],
    rangeNotes: {
      zeroOne: '直角三角形の鋭角では、値は0から1の間になります。',
      positiveAny: '値は任意の正の数になります。',
      greaterOne: '値は常に1以上になります。'
    },
    whenIntro: '{name}計算機は次の場合に使います:',
    whenItems: [
      '{num}と{den}が分かっていて{symbol}が必要なとき。',
      '宿題や試験の答えを確認したいとき。',
      '逆三角関数で角Aを求める前に比を出したいとき。',
      '傾き、斜面、力、距離の成分を扱うとき。',
      '他の三角比と比べたいとき。'
    ],
    mistakesIntro: '{name}を計算するときは次に注意してください:',
    mistakeItems: [
      '違う辺を選ばないこと。角Aから見て{num}と{den}を確認します。',
      '分数を逆にしないこと。正しい公式は{formula}です。',
      '単位をそろえずに入力しないこと。',
      '90度の角を角Aとして使わないこと。',
      '斜辺cが最も長い辺であることを確認すること。'
    ],
    faqs: [
      { question: '{symbol}の公式は何ですか?', answer: '公式は{formula}です。{num}が分子、{den}が分母です。' },
      { question: '{symbol}に単位はありますか?', answer: 'ありません。2つの長さの比なので単位は消えます。' },
      { question: '角Aも求められますか?', answer: 'このページは比を返します。角度は逆三角関数または角度計算機を使ってください。' },
      { question: '{name}と{reciprocalName}の関係は?', answer: '{reciprocalName}は{name}の逆数の比です。一方が分かれば、もう一方は1をその値で割って求めます。' },
      { question: 'どの辺を入力しますか?', answer: '{symbol}には{num}と{den}を入力します。' }
    ]
  },
  ko: {
    ratioNames: { sine: '사인', cosine: '코사인', tangent: '탄젠트', cotangent: '코탄젠트', secant: '시컨트', cosecant: '코시컨트' },
    sideNames: { opposite: '맞은편 변', adjacent: '인접 변', hypotenuse: '빗변' },
    ui: createUi({
      home: '홈',
      badge: '삼각비 계산기',
      parentPageLabel: '직각삼각형 삼각비 계산기',
      formula: '공식',
      triangleDiagram: '삼각형 도식',
      ratioHighlight: '비율 강조',
      numerator: '분자',
      denominator: '분모',
      sideKey: '변 설명',
      howToUse: '이 계산기 사용 방법',
      stepByStepExample: '단계별 예제',
      whatResultMeans: '결과의 의미',
      whenToUse: '이 비율을 사용할 때',
      commonMistakes: '흔한 실수',
      relatedCalculators: '관련 계산기',
      openTool: '도구 열기',
      faqHeading: '자주 묻는 질문',
      rightAngle: '90도',
      sideRoles: {
        a: { role: '맞은편 변', description: '각 A의 반대쪽', short: '맞은편', label: 'a = 맞은편 변' },
        b: { role: '인접 변', description: '각 A 옆의 변', short: '인접', label: 'b = 인접 변' },
        c: { role: '빗변', description: '가장 긴 변, 90도 반대쪽', short: '빗변', label: 'c = 빗변' }
      },
      usedInPattern: '{label}에 사용',
      notUsedInPattern: '{label}에 사용 안 함'
    }),
    relatedAngleCalculator: '직각삼각형 각도 계산기',
    pageTitle: '{name} 비율 계산기',
    headerSummary: '직각삼각형에서 {num}과 {den}으로 {symbol}을 계산합니다.',
    metaTitle: '{title} | 직각삼각형 {symbol}',
    metaDescription: '{title}로 {symbol}을 계산하고 공식 {formula}, 단계, 예제, 도식을 확인하세요.',
    calculatorHeading: '{name} 비율 계산',
    introHeading: '이 {title} 작동 방식',
    intro: [
      '{name} 비율은 각 A와 {num}, {den}을 연결합니다. 두 길이를 입력하면 {symbol}이 계산됩니다.',
      '계산기는 직접 나눗셈을 줄이고 기하에서 쓰는 관계 {formula}를 보여줍니다.'
    ],
    calculatorNote: '{num}과 {den}에 양수를 입력하세요. 빗변 c가 포함되면 해당 변보다 길어야 합니다.',
    formulaParagraphs: [
      '{symbol}은 {num}을 {den}으로 나눈 값입니다. 따라서 공식은 {formula}입니다.',
      '변은 항상 각 A를 기준으로 구분합니다. 같은 단위를 쓰면 결과는 단위가 없는 비율입니다.'
    ],
    diagramExplanation: [
      '도식에서 a는 맞은편 변, b는 인접 변, c는 빗변입니다.',
      '{symbol}은 {num}과 {den}만 사용합니다. 나머지 변은 방향 확인에 도움이 되지만 이 비율에는 들어가지 않습니다.'
    ],
    howToSteps: [
      '직각삼각형에서 각 A를 찾습니다.',
      '{num}을 확인합니다.',
      '{den}을 확인합니다.',
      '첫 번째 값을 계산기에 입력합니다.',
      '두 번째 값을 같은 단위로 입력합니다.',
      'Calculate를 눌러 {symbol}을 확인합니다.',
      '결과를 확인합니다: {range}'
    ],
    exampleIntro: '{values}라고 가정합니다.',
    exampleConclusion: '결과는 {symbol} = {result}입니다. 각도가 필요하면 역삼각함수를 사용하여 A가 약 {angle}임을 구합니다.',
    resultMeaning: [
      '{symbol}은 {num}이 {den}에 비해 얼마나 큰지 보여줍니다.',
      '{range}',
      '두 길이를 비교하므로 결과에는 단위가 없습니다.'
    ],
    rangeNotes: {
      zeroOne: '직각삼각형의 예각에서는 값이 0과 1 사이입니다.',
      positiveAny: '값은 어떤 양수도 될 수 있습니다.',
      greaterOne: '값은 항상 1 이상입니다.'
    },
    whenIntro: '{name} 계산기는 다음 경우에 사용합니다:',
    whenItems: [
      '{num}과 {den}을 알고 {symbol}이 필요할 때.',
      '숙제나 시험 답을 확인할 때.',
      '역삼각함수로 각 A를 구하기 전 비율이 필요할 때.',
      '기울기, 경사로, 힘, 거리 성분을 다룰 때.',
      '다른 삼각비와 비교할 때.'
    ],
    mistakesIntro: '{name} 계산에서 다음 실수를 피하세요:',
    mistakeItems: [
      '잘못된 변을 선택하지 마세요. 각 A 기준으로 {num}과 {den}을 확인하세요.',
      '분수를 뒤집지 마세요. 올바른 공식은 {formula}입니다.',
      '서로 다른 단위를 변환 없이 섞지 마세요.',
      '90도 각을 각 A로 사용하지 마세요.',
      '빗변 c가 가장 긴 변인지 확인하세요.'
    ],
    faqs: [
      { question: '{symbol} 공식은 무엇인가요?', answer: '공식은 {formula}입니다. {num}이 분자이고 {den}이 분모입니다.' },
      { question: '{symbol}에 단위가 있나요?', answer: '아니요. 두 길이의 비율이므로 단위가 없어집니다.' },
      { question: '각 A도 구할 수 있나요?', answer: '이 페이지는 비율을 제공합니다. 각도는 역삼각함수나 각도 계산기를 사용하세요.' },
      { question: '{name}과 {reciprocalName}은 어떤 관계인가요?', answer: '{reciprocalName}은 {name}의 역수 비율입니다. 하나를 알면 다른 하나는 1을 그 값으로 나누어 구합니다.' },
      { question: '어떤 변을 입력해야 하나요?', answer: '{symbol}에는 {num}과 {den}을 입력합니다.' }
    ]
  },
  ms: {
    ratioNames: { sine: 'sinus', cosine: 'kosinus', tangent: 'tangen', cotangent: 'kotangen', secant: 'sekan', cosecant: 'kosekan' },
    sideNames: { opposite: 'sisi bertentangan', adjacent: 'sisi bersebelahan', hypotenuse: 'hipotenus' },
    ui: createUi({
      home: 'Laman utama',
      badge: 'Kalkulator nisbah trigonometri',
      parentPageLabel: 'Kalkulator nisbah trigonometri segi tiga tepat',
      formula: 'Formula',
      triangleDiagram: 'Rajah segi tiga',
      ratioHighlight: 'Sorotan nisbah',
      numerator: 'Pengangka',
      denominator: 'Penyebut',
      sideKey: 'Kunci sisi',
      howToUse: 'Cara menggunakan kalkulator ini',
      stepByStepExample: 'Contoh langkah demi langkah',
      whatResultMeans: 'Maksud keputusan',
      whenToUse: 'Bila menggunakan nisbah ini',
      commonMistakes: 'Kesilapan biasa',
      relatedCalculators: 'Kalkulator berkaitan',
      openTool: 'Buka alat',
      faqHeading: 'Soalan lazim',
      rightAngle: '90 darjah',
      sideRoles: {
        a: { role: 'sisi bertentangan', description: 'bertentangan dengan sudut A', short: 'bertentangan', label: 'a = sisi bertentangan' },
        b: { role: 'sisi bersebelahan', description: 'bersebelahan dengan sudut A', short: 'bersebelahan', label: 'b = sisi bersebelahan' },
        c: { role: 'hipotenus', description: 'sisi terpanjang, bertentangan 90 darjah', short: 'hipotenus', label: 'c = hipotenus' }
      },
      usedInPattern: 'Digunakan dalam {label}',
      notUsedInPattern: 'Tidak digunakan dalam {label}'
    }),
    relatedAngleCalculator: 'Kalkulator sudut segi tiga tepat',
    pageTitle: 'Kalkulator nisbah {name}',
    headerSummary: 'Kira {symbol} daripada {num} dan {den} dalam segi tiga tepat.',
    metaTitle: '{title} | {symbol} segi tiga tepat',
    metaDescription: 'Gunakan {title} untuk mencari {symbol} dengan formula {formula}, langkah, contoh dan rajah.',
    calculatorHeading: 'Kira nisbah {name}',
    introHeading: 'Cara {title} ini berfungsi',
    intro: [
      'Nisbah {name} menghubungkan sudut A dengan {num} dan {den}. Masukkan dua panjang ini untuk mendapatkan {symbol}.',
      'Kalkulator ini mengurangkan pembahagian manual dan menunjukkan hubungan geometri: {formula}.'
    ],
    calculatorNote: 'Masukkan nilai positif untuk {num} dan {den}. Jika hipotenus c digunakan, ia mesti lebih panjang daripada sisi berkaitan.',
    formulaParagraphs: [
      '{symbol} ialah {num} dibahagi dengan {den}. Oleh itu formulanya ialah {formula}.',
      'Kenal pasti sisi berbanding sudut A. Jika unit sama, hasilnya ialah nisbah tanpa unit.'
    ],
    diagramExplanation: [
      'Dalam rajah, a ialah sisi bertentangan, b ialah sisi bersebelahan dan c ialah hipotenus.',
      '{symbol} hanya menggunakan {num} dan {den}. Sisi lain membantu orientasi, tetapi tidak digunakan dalam nisbah ini.'
    ],
    howToSteps: [
      'Cari sudut A dalam segi tiga tepat.',
      'Kenal pasti {num}.',
      'Kenal pasti {den}.',
      'Masukkan nilai pertama dalam kalkulator.',
      'Masukkan nilai kedua dengan unit yang sama.',
      'Tekan Calculate untuk mendapatkan {symbol}.',
      'Semak keputusan: {range}'
    ],
    exampleIntro: 'Andaikan {values}.',
    exampleConclusion: 'Keputusannya ialah {symbol} = {result}. Jika perlu sudut, gunakan fungsi songsang: A kira-kira {angle}.',
    resultMeaning: [
      '{symbol} menunjukkan saiz {num} berbanding {den}.',
      '{range}',
      'Nisbah ini tiada unit kerana dua panjang dibandingkan.'
    ],
    rangeNotes: {
      zeroOne: 'Untuk sudut tirus dalam segi tiga tepat, nilai berada antara 0 dan 1.',
      positiveAny: 'Nilai boleh menjadi sebarang nombor positif.',
      greaterOne: 'Nilai sentiasa lebih besar atau sama dengan 1.'
    },
    whenIntro: 'Gunakan kalkulator {name} apabila:',
    whenItems: [
      'anda tahu {num} dan {den} serta memerlukan {symbol}.',
      'anda menyemak jawapan kerja rumah atau peperiksaan.',
      'anda mahu mencari sudut A menggunakan fungsi songsang.',
      'anda bekerja dengan cerun, tanjakan, daya atau komponen jarak.',
      'anda mahu membandingkan nisbah ini dengan nisbah trigonometri lain.'
    ],
    mistakesIntro: 'Elakkan kesilapan ini ketika mengira {name}:',
    mistakeItems: [
      'Memilih sisi yang salah. Kenal pasti {num} dan {den} dari sudut A.',
      'Menterbalikkan pecahan. Formula yang betul ialah {formula}.',
      'Mencampurkan unit berbeza tanpa penukaran.',
      'Menggunakan sudut 90 darjah sebagai sudut A.',
      'Lupa bahawa hipotenus c mesti menjadi sisi terpanjang.'
    ],
    faqs: [
      { question: 'Apakah formula {symbol}?', answer: 'Formulanya ialah {formula}; {num} di pengangka dan {den} di penyebut.' },
      { question: 'Adakah {symbol} mempunyai unit?', answer: 'Tidak. Ia nisbah dua panjang, jadi unit terbatal.' },
      { question: 'Bolehkah saya mencari sudut A?', answer: 'Halaman ini memberi nisbah. Untuk sudut, gunakan fungsi songsang atau kalkulator sudut.' },
      { question: 'Apakah hubungan {name} dan {reciprocalName}?', answer: '{reciprocalName} ialah nisbah salingan bagi {name}. Jika satu diketahui, satu lagi ialah 1 dibahagi nilai itu.' },
      { question: 'Sisi mana perlu dimasukkan?', answer: 'Untuk {symbol}, masukkan {num} dan {den}.' }
    ]
  },
  pl: {
    ratioNames: { sine: 'sinusa', cosine: 'cosinusa', tangent: 'tangensa', cotangent: 'cotangensa', secant: 'secansa', cosecant: 'cosecansa' },
    sideNames: { opposite: 'przyprostokątna przeciwległa', adjacent: 'przyprostokątna przyległa', hypotenuse: 'przeciwprostokątna' },
    ui: createUi({
      home: 'Strona główna',
      badge: 'Kalkulator stosunków trygonometrycznych',
      parentPageLabel: 'Kalkulator stosunków trygonometrycznych trójkąta prostokątnego',
      formula: 'Wzór',
      triangleDiagram: 'Diagram trójkąta',
      ratioHighlight: 'Wyróżniony stosunek',
      numerator: 'Licznik',
      denominator: 'Mianownik',
      sideKey: 'Opis boków',
      howToUse: 'Jak używać tego kalkulatora',
      stepByStepExample: 'Przykład krok po kroku',
      whatResultMeans: 'Co oznacza wynik',
      whenToUse: 'Kiedy używać tego stosunku',
      commonMistakes: 'Częste błędy',
      relatedCalculators: 'Powiązane kalkulatory',
      openTool: 'Otwórz narzędzie',
      faqHeading: 'Częste pytania',
      rightAngle: '90 stopni',
      sideRoles: {
        a: { role: 'przyprostokątna przeciwległa', description: 'naprzeciw kąta A', short: 'przeciwległa', label: 'a = przyprostokątna przeciwległa' },
        b: { role: 'przyprostokątna przyległa', description: 'przy kącie A', short: 'przyległa', label: 'b = przyprostokątna przyległa' },
        c: { role: 'przeciwprostokątna', description: 'najdłuższy bok, naprzeciw 90 stopni', short: 'przeciwprostokątna', label: 'c = przeciwprostokątna' }
      },
      usedInPattern: 'Używane w {label}',
      notUsedInPattern: 'Nie używane w {label}'
    }),
    relatedAngleCalculator: 'Kalkulator kątów trójkąta prostokątnego',
    pageTitle: 'Kalkulator stosunku {name}',
    headerSummary: 'Oblicz {symbol} z {num} i {den} w trójkącie prostokątnym.',
    metaTitle: '{title} | {symbol} w trójkącie prostokątnym',
    metaDescription: 'Użyj {title}, aby znaleźć {symbol} ze wzorem {formula}, krokami, przykładem i diagramem.',
    calculatorHeading: 'Oblicz stosunek {name}',
    introHeading: 'Jak działa {title}',
    intro: [
      'Stosunek {name} łączy kąt A z {num} i {den}. Wpisz dwie długości, aby otrzymać {symbol}.',
      'Kalkulator eliminuje ręczne dzielenie i pokazuje zależność geometryczną: {formula}.'
    ],
    calculatorNote: 'Wpisz dodatnie wartości dla {num} i {den}. Jeśli używana jest przeciwprostokątna c, musi być dłuższa od odpowiedniego boku.',
    formulaParagraphs: [
      '{symbol} to {num} podzielona przez {den}. Wzór ma więc postać {formula}.',
      'Boki zawsze określaj względem kąta A. Przy tych samych jednostkach wynik jest stosunkiem bez jednostki.'
    ],
    diagramExplanation: [
      'Na diagramie a jest bokiem przeciwległym, b bokiem przyległym, a c przeciwprostokątną.',
      '{symbol} używa tylko {num} i {den}. Trzeci bok pomaga w orientacji, ale nie wchodzi do tego stosunku.'
    ],
    howToSteps: [
      'Znajdź kąt A w trójkącie prostokątnym.',
      'Określ {num}.',
      'Określ {den}.',
      'Wpisz pierwszą wartość w kalkulatorze.',
      'Wpisz drugą wartość w tej samej jednostce.',
      'Naciśnij Calculate, aby otrzymać {symbol}.',
      'Sprawdź wynik: {range}'
    ],
    exampleIntro: 'Załóżmy, że {values}.',
    exampleConclusion: 'Wynik to {symbol} = {result}. Jeśli potrzebujesz kąta, użyj funkcji odwrotnej: A wynosi około {angle}.',
    resultMeaning: [
      '{symbol} pokazuje, jak duża jest {num} w porównaniu z {den}.',
      '{range}',
      'Wynik nie ma jednostki, bo porównywane są dwie długości.'
    ],
    rangeNotes: {
      zeroOne: 'Dla kąta ostrego w trójkącie prostokątnym wartość leży między 0 a 1.',
      positiveAny: 'Wartość może być dowolną liczbą dodatnią.',
      greaterOne: 'Wartość zawsze jest większa lub równa 1.'
    },
    whenIntro: 'Użyj kalkulatora {name}, gdy:',
    whenItems: [
      'znasz {num} i {den}, a potrzebujesz {symbol}.',
      'sprawdzasz odpowiedź z pracy domowej lub testu.',
      'chcesz znaleźć kąt A funkcją odwrotną.',
      'pracujesz ze spadkiem, rampą, siłą lub składowymi odległości.',
      'chcesz porównać ten stosunek z innym stosunkiem trygonometrycznym.'
    ],
    mistakesIntro: 'Unikaj tych błędów przy obliczaniu {name}:',
    mistakeItems: [
      'Nie wybieraj złego boku. Określ {num} i {den} względem kąta A.',
      'Nie odwracaj ułamka. Poprawny wzór to {formula}.',
      'Nie mieszaj różnych jednostek bez konwersji.',
      'Nie używaj kąta 90 stopni jako kąta A.',
      'Pamiętaj, że przeciwprostokątna c musi być najdłuższym bokiem.'
    ],
    faqs: [
      { question: 'Jaki jest wzór na {symbol}?', answer: 'Wzór to {formula}; {num} jest w liczniku, a {den} w mianowniku.' },
      { question: 'Czy {symbol} ma jednostkę?', answer: 'Nie. To stosunek dwóch długości, więc jednostki się skracają.' },
      { question: 'Czy mogę znaleźć kąt A?', answer: 'Ta strona podaje stosunek. Do kąta użyj funkcji odwrotnej lub kalkulatora kątów.' },
      { question: 'Jak łączą się {name} i {reciprocalName}?', answer: '{reciprocalName} jest stosunkiem odwrotnym do {name}. Jeśli znasz jeden, drugi to 1 podzielone przez tę wartość.' },
      { question: 'Jakie boki mam wpisać?', answer: 'Dla {symbol} wpisz {num} i {den}.' }
    ]
  },
  id: {
    ratioNames: { sine: 'sinus', cosine: 'kosinus', tangent: 'tangen', cotangent: 'kotangen', secant: 'sekan', cosecant: 'kosekan' },
    sideNames: { opposite: 'sisi depan', adjacent: 'sisi samping', hypotenuse: 'hipotenusa' },
    ui: createUi({
      home: 'Beranda',
      badge: 'Kalkulator rasio trigonometri',
      parentPageLabel: 'Kalkulator rasio trigonometri segitiga siku-siku',
      formula: 'Rumus',
      triangleDiagram: 'Diagram segitiga',
      ratioHighlight: 'Sorotan rasio',
      numerator: 'Pembilang',
      denominator: 'Penyebut',
      sideKey: 'Keterangan sisi',
      howToUse: 'Cara menggunakan kalkulator ini',
      stepByStepExample: 'Contoh langkah demi langkah',
      whatResultMeans: 'Arti hasil',
      whenToUse: 'Kapan memakai rasio ini',
      commonMistakes: 'Kesalahan umum',
      relatedCalculators: 'Kalkulator terkait',
      openTool: 'Buka alat',
      faqHeading: 'Pertanyaan umum',
      rightAngle: '90 derajat',
      sideRoles: {
        a: { role: 'sisi depan', description: 'berhadapan dengan sudut A', short: 'depan', label: 'a = sisi depan' },
        b: { role: 'sisi samping', description: 'dekat dengan sudut A', short: 'samping', label: 'b = sisi samping' },
        c: { role: 'hipotenusa', description: 'sisi terpanjang, berhadapan dengan 90 derajat', short: 'hipotenusa', label: 'c = hipotenusa' }
      },
      usedInPattern: 'Dipakai dalam {label}',
      notUsedInPattern: 'Tidak dipakai dalam {label}'
    }),
    relatedAngleCalculator: 'Kalkulator sudut segitiga siku-siku',
    pageTitle: 'Kalkulator rasio {name}',
    headerSummary: 'Hitung {symbol} dari {num} dan {den} pada segitiga siku-siku.',
    metaTitle: '{title} | {symbol} segitiga siku-siku',
    metaDescription: 'Gunakan {title} untuk mencari {symbol} dengan rumus {formula}, langkah, contoh, dan diagram.',
    calculatorHeading: 'Hitung rasio {name}',
    introHeading: 'Cara kerja {title}',
    intro: [
      'Rasio {name} menghubungkan sudut A dengan {num} dan {den}. Masukkan dua panjang ini untuk mendapatkan {symbol}.',
      'Kalkulator mengurangi pembagian manual dan menampilkan hubungan geometri: {formula}.'
    ],
    calculatorNote: 'Masukkan nilai positif untuk {num} dan {den}. Jika hipotenusa c digunakan, nilainya harus lebih panjang dari sisi terkait.',
    formulaParagraphs: [
      '{symbol} adalah {num} dibagi {den}. Jadi rumusnya adalah {formula}.',
      'Kenali sisi selalu dari sudut A. Jika satuannya sama, hasilnya adalah rasio tanpa satuan.'
    ],
    diagramExplanation: [
      'Pada diagram, a adalah sisi depan, b sisi samping, dan c hipotenusa.',
      '{symbol} hanya memakai {num} dan {den}. Sisi lain membantu orientasi, tetapi tidak masuk ke rasio ini.'
    ],
    howToSteps: [
      'Temukan sudut A pada segitiga siku-siku.',
      'Kenali {num}.',
      'Kenali {den}.',
      'Masukkan nilai pertama ke kalkulator.',
      'Masukkan nilai kedua dengan satuan yang sama.',
      'Tekan Calculate untuk mendapatkan {symbol}.',
      'Periksa hasil: {range}'
    ],
    exampleIntro: 'Misalkan {values}.',
    exampleConclusion: 'Hasilnya {symbol} = {result}. Jika perlu sudut, gunakan fungsi invers: A sekitar {angle}.',
    resultMeaning: [
      '{symbol} menunjukkan ukuran {num} dibandingkan dengan {den}.',
      '{range}',
      'Rasio tidak memiliki satuan karena membandingkan dua panjang.'
    ],
    rangeNotes: {
      zeroOne: 'Untuk sudut lancip segitiga siku-siku, nilai berada di antara 0 dan 1.',
      positiveAny: 'Nilai dapat berupa bilangan positif apa pun.',
      greaterOne: 'Nilai selalu lebih besar atau sama dengan 1.'
    },
    whenIntro: 'Gunakan kalkulator {name} saat:',
    whenItems: [
      'Anda mengetahui {num} dan {den} serta membutuhkan {symbol}.',
      'Anda memeriksa jawaban tugas atau ujian.',
      'Anda akan mencari sudut A dengan fungsi invers.',
      'Anda bekerja dengan kemiringan, ramp, gaya, atau komponen jarak.',
      'Anda ingin membandingkan rasio ini dengan rasio trigonometri lain.'
    ],
    mistakesIntro: 'Hindari kesalahan ini saat menghitung {name}:',
    mistakeItems: [
      'Memilih sisi yang salah. Kenali {num} dan {den} dari sudut A.',
      'Membalik pecahan. Rumus yang benar adalah {formula}.',
      'Mencampur satuan berbeda tanpa konversi.',
      'Menggunakan sudut 90 derajat sebagai sudut A.',
      'Lupa bahwa hipotenusa c harus menjadi sisi terpanjang.'
    ],
    faqs: [
      { question: 'Apa rumus {symbol}?', answer: 'Rumusnya {formula}; {num} berada di pembilang dan {den} di penyebut.' },
      { question: 'Apakah {symbol} memiliki satuan?', answer: 'Tidak. Ini rasio dua panjang, jadi satuan saling hilang.' },
      { question: 'Bisakah saya mencari sudut A?', answer: 'Halaman ini memberi rasio. Untuk sudut, gunakan fungsi invers atau kalkulator sudut.' },
      { question: 'Apa hubungan {name} dan {reciprocalName}?', answer: '{reciprocalName} adalah rasio kebalikan dari {name}. Jika satu diketahui, yang lain adalah 1 dibagi nilai itu.' },
      { question: 'Sisi mana yang harus dimasukkan?', answer: 'Untuk {symbol}, masukkan {num} dan {den}.' }
    ]
  },
  ar: {
    ratioNames: { sine: 'الجيب', cosine: 'جيب التمام', tangent: 'الظل', cotangent: 'ظل التمام', secant: 'القاطع', cosecant: 'قاطع التمام' },
    sideNames: { opposite: 'الضلع المقابل', adjacent: 'الضلع المجاور', hypotenuse: 'الوتر' },
    ui: createUi({
      home: 'الرئيسية',
      badge: 'حاسبة النسب المثلثية',
      parentPageLabel: 'حاسبة نسب المثلث القائم',
      formula: 'الصيغة',
      triangleDiagram: 'رسم المثلث',
      ratioHighlight: 'إبراز النسبة',
      numerator: 'البسط',
      denominator: 'المقام',
      sideKey: 'دليل الأضلاع',
      howToUse: 'كيفية استخدام هذه الحاسبة',
      stepByStepExample: 'مثال خطوة بخطوة',
      whatResultMeans: 'معنى النتيجة',
      whenToUse: 'متى تستخدم هذه النسبة',
      commonMistakes: 'أخطاء شائعة',
      relatedCalculators: 'حاسبات ذات صلة',
      openTool: 'افتح الأداة',
      faqHeading: 'أسئلة شائعة',
      rightAngle: '90 درجة',
      sideRoles: {
        a: { role: 'الضلع المقابل', description: 'مقابل للزاوية A', short: 'مقابل', label: 'a = الضلع المقابل' },
        b: { role: 'الضلع المجاور', description: 'بجانب الزاوية A', short: 'مجاور', label: 'b = الضلع المجاور' },
        c: { role: 'الوتر', description: 'أطول ضلع، مقابل 90 درجة', short: 'وتر', label: 'c = الوتر' }
      },
      usedInPattern: 'مستخدم في {label}',
      notUsedInPattern: 'غير مستخدم في {label}'
    }),
    relatedAngleCalculator: 'حاسبة زاوية المثلث القائم',
    pageTitle: 'حاسبة نسبة {name}',
    headerSummary: 'احسب {symbol} من {num} و {den} في مثلث قائم.',
    metaTitle: '{title} | {symbol} في المثلث القائم',
    metaDescription: 'استخدم {title} لإيجاد {symbol} مع الصيغة {formula} والخطوات والمثال والرسم.',
    calculatorHeading: 'احسب نسبة {name}',
    introHeading: 'كيف تعمل {title}',
    intro: [
      'نسبة {name} تربط الزاوية A مع {num} و {den}. أدخل الطولين لتحصل على {symbol}.',
      'تقلل الحاسبة القسمة اليدوية وتعرض العلاقة الهندسية: {formula}.'
    ],
    calculatorNote: 'أدخل قيما موجبة لـ {num} و {den}. إذا كان الوتر c موجودا فيجب أن يكون أطول من الضلع المرتبط.',
    formulaParagraphs: [
      '{symbol} يساوي {num} مقسوما على {den}. لذلك الصيغة هي {formula}.',
      'حدد الأضلاع دائما بالنسبة إلى الزاوية A. عند استخدام نفس الوحدة تكون النتيجة نسبة بلا وحدة.'
    ],
    diagramExplanation: [
      'في الرسم، a هو الضلع المقابل، و b هو الضلع المجاور، و c هو الوتر.',
      '{symbol} يستخدم فقط {num} و {den}. الضلع الآخر يساعد على قراءة المثلث لكنه لا يدخل في هذه النسبة.'
    ],
    howToSteps: [
      'حدد الزاوية A في المثلث القائم.',
      'حدد {num}.',
      'حدد {den}.',
      'أدخل القيمة الأولى في الحاسبة.',
      'أدخل القيمة الثانية بنفس الوحدة.',
      'اضغط Calculate للحصول على {symbol}.',
      'راجع النتيجة: {range}'
    ],
    exampleIntro: 'افترض أن {values}.',
    exampleConclusion: 'النتيجة هي {symbol} = {result}. إذا أردت الزاوية فاستخدم الدالة العكسية: A تقريبا {angle}.',
    resultMeaning: [
      '{symbol} يوضح حجم {num} مقارنة بـ {den}.',
      '{range}',
      'النسبة بلا وحدة لأنها تقارن طولين.'
    ],
    rangeNotes: {
      zeroOne: 'للزاوية الحادة في المثلث القائم تكون القيمة بين 0 و 1.',
      positiveAny: 'يمكن أن تكون القيمة أي عدد موجب.',
      greaterOne: 'القيمة دائما أكبر من أو تساوي 1.'
    },
    whenIntro: 'استخدم حاسبة {name} عندما:',
    whenItems: [
      'تعرف {num} و {den} وتحتاج إلى {symbol}.',
      'تراجع إجابة واجب أو اختبار.',
      'تريد إيجاد الزاوية A بدالة عكسية.',
      'تعمل مع الميل أو المنحدرات أو القوى أو مركبات المسافة.',
      'تريد مقارنة هذه النسبة بنسبة مثلثية أخرى.'
    ],
    mistakesIntro: 'تجنب هذه الأخطاء عند حساب {name}:',
    mistakeItems: [
      'اختيار الضلع الخطأ. حدد {num} و {den} من الزاوية A.',
      'قلب الكسر. الصيغة الصحيحة هي {formula}.',
      'خلط وحدات مختلفة دون تحويل.',
      'استخدام زاوية 90 درجة على أنها الزاوية A.',
      'نسيان أن الوتر c يجب أن يكون أطول ضلع.'
    ],
    faqs: [
      { question: 'ما صيغة {symbol}؟', answer: 'الصيغة هي {formula}؛ {num} في البسط و {den} في المقام.' },
      { question: 'هل لـ {symbol} وحدة؟', answer: 'لا. إنه نسبة بين طولين، لذلك تلغى الوحدات.' },
      { question: 'هل يمكن إيجاد الزاوية A؟', answer: 'هذه الصفحة تعطي النسبة. للزاوية استخدم الدالة العكسية أو حاسبة الزوايا.' },
      { question: 'ما العلاقة بين {name} و {reciprocalName}؟', answer: '{reciprocalName} هو النسبة المقلوبة لـ {name}. إذا عرفت إحداهما فالأخرى تساوي 1 مقسوما على تلك القيمة.' },
      { question: 'ما الأضلاع التي أدخلها؟', answer: 'من أجل {symbol} أدخل {num} و {den}.' }
    ]
  },
  bg: {
    ratioNames: { sine: 'синус', cosine: 'косинус', tangent: 'тангенс', cotangent: 'котангенс', secant: 'секанс', cosecant: 'косеканс' },
    sideNames: { opposite: 'срещулежащ катет', adjacent: 'прилежащ катет', hypotenuse: 'хипотенуза' },
    ui: createUi({
      home: 'Начало',
      badge: 'Калкулатор за тригонометрични отношения',
      parentPageLabel: 'Калкулатор за тригонометрични отношения на правоъгълен триъгълник',
      formula: 'Формула',
      triangleDiagram: 'Диаграма на триъгълника',
      ratioHighlight: 'Подчертано отношение',
      numerator: 'Числител',
      denominator: 'Знаменател',
      sideKey: 'Обяснение на страните',
      howToUse: 'Как да използвате този калкулатор',
      stepByStepExample: 'Пример стъпка по стъпка',
      whatResultMeans: 'Какво означава резултатът',
      whenToUse: 'Кога да използвате това отношение',
      commonMistakes: 'Чести грешки',
      relatedCalculators: 'Свързани калкулатори',
      openTool: 'Отвори инструмента',
      faqHeading: 'Често задавани въпроси',
      rightAngle: '90 градуса',
      sideRoles: {
        a: { role: 'срещулежащ катет', description: 'срещу ъгъл A', short: 'срещулежащ', label: 'a = срещулежащ катет' },
        b: { role: 'прилежащ катет', description: 'до ъгъл A', short: 'прилежащ', label: 'b = прилежащ катет' },
        c: { role: 'хипотенуза', description: 'най-дългата страна, срещу 90 градуса', short: 'хипотенуза', label: 'c = хипотенуза' }
      },
      usedInPattern: 'Използва се в {label}',
      notUsedInPattern: 'Не се използва в {label}'
    }),
    relatedAngleCalculator: 'Калкулатор за ъгли на правоъгълен триъгълник',
    pageTitle: 'Калкулатор за отношение {name}',
    headerSummary: 'Изчислете {symbol} от {num} и {den} в правоъгълен триъгълник.',
    metaTitle: '{title} | {symbol} в правоъгълен триъгълник',
    metaDescription: 'Използвайте {title}, за да намерите {symbol} с формула {formula}, стъпки, пример и диаграма.',
    calculatorHeading: 'Изчисли отношение {name}',
    introHeading: 'Как работи {title}',
    intro: [
      'Отношението {name} свързва ъгъл A с {num} и {den}. Въведете двете дължини, за да получите {symbol}.',
      'Калкулаторът премахва ръчното деление и показва геометричната връзка: {formula}.'
    ],
    calculatorNote: 'Въведете положителни стойности за {num} и {den}. Ако участва хипотенуза c, тя трябва да е по-дълга от съответния катет.',
    formulaParagraphs: [
      '{symbol} е {num}, разделен на {den}. Затова формулата е {formula}.',
      'Определяйте страните спрямо ъгъл A. При еднакви единици резултатът е безразмерно отношение.'
    ],
    diagramExplanation: [
      'В диаграмата a е срещулежащият катет, b е прилежащият катет, а c е хипотенузата.',
      '{symbol} използва само {num} и {den}. Другата страна помага за ориентация, но не участва в отношението.'
    ],
    howToSteps: [
      'Намерете ъгъл A в правоъгълния триъгълник.',
      'Определете {num}.',
      'Определете {den}.',
      'Въведете първата стойност в калкулатора.',
      'Въведете втората стойност в същата единица.',
      'Натиснете Calculate, за да получите {symbol}.',
      'Проверете резултата: {range}'
    ],
    exampleIntro: 'Нека {values}.',
    exampleConclusion: 'Резултатът е {symbol} = {result}. Ако ви трябва ъгълът, използвайте обратна функция: A е приблизително {angle}.',
    resultMeaning: [
      '{symbol} показва колко голям е {num} спрямо {den}.',
      '{range}',
      'Резултатът няма единица, защото сравнява две дължини.'
    ],
    rangeNotes: {
      zeroOne: 'За остър ъгъл в правоъгълен триъгълник стойността е между 0 и 1.',
      positiveAny: 'Стойността може да бъде всяко положително число.',
      greaterOne: 'Стойността винаги е по-голяма или равна на 1.'
    },
    whenIntro: 'Използвайте калкулатора за {name}, когато:',
    whenItems: [
      'знаете {num} и {den} и ви трябва {symbol}.',
      'проверявате домашна работа или отговор от тест.',
      'искате да намерите ъгъл A с обратна функция.',
      'работите с наклон, рампа, сила или компоненти на разстояние.',
      'искате да сравните това отношение с друго тригонометрично отношение.'
    ],
    mistakesIntro: 'Избягвайте тези грешки при изчисляване на {name}:',
    mistakeItems: [
      'Избор на грешна страна. Определете {num} и {den} от ъгъл A.',
      'Обръщане на дробта. Правилната формула е {formula}.',
      'Смесване на различни единици без преобразуване.',
      'Използване на ъгъла 90 градуса като ъгъл A.',
      'Забравяне, че хипотенуза c трябва да е най-дългата страна.'
    ],
    faqs: [
      { question: 'Каква е формулата за {symbol}?', answer: 'Формулата е {formula}; {num} е в числителя, а {den} в знаменателя.' },
      { question: '{symbol} има ли единица?', answer: 'Не. Това е отношение на две дължини, така че единиците се съкращават.' },
      { question: 'Мога ли да намеря ъгъл A?', answer: 'Тази страница дава отношението. За ъгъла използвайте обратна функция или калкулатор за ъгли.' },
      { question: 'Как са свързани {name} и {reciprocalName}?', answer: '{reciprocalName} е реципрочното отношение на {name}. Ако знаете едното, другото е 1, разделено на тази стойност.' },
      { question: 'Кои страни да въведа?', answer: 'За {symbol} въведете {num} и {den}.' }
    ]
  },
  tr: {
    ratioNames: { sine: 'sinüs', cosine: 'kosinüs', tangent: 'tanjant', cotangent: 'kotanjant', secant: 'sekant', cosecant: 'kosekant' },
    sideNames: { opposite: 'karşı kenar', adjacent: 'komşu kenar', hypotenuse: 'hipotenüs' },
    ui: createUi({
      home: 'Ana sayfa',
      badge: 'Trigonometrik oran hesaplayıcı',
      parentPageLabel: 'Dik üçgen trigonometrik oran hesaplayıcı',
      formula: 'Formül',
      triangleDiagram: 'Üçgen diyagramı',
      ratioHighlight: 'Oran vurgusu',
      numerator: 'Pay',
      denominator: 'Payda',
      sideKey: 'Kenar anahtarı',
      howToUse: 'Bu hesaplayıcı nasıl kullanılır',
      stepByStepExample: 'Adım adım örnek',
      whatResultMeans: 'Sonucun anlamı',
      whenToUse: 'Bu oran ne zaman kullanılır',
      commonMistakes: 'Yaygın hatalar',
      relatedCalculators: 'İlgili hesaplayıcılar',
      openTool: 'Aracı aç',
      faqHeading: 'Sık sorulan sorular',
      rightAngle: '90 derece',
      sideRoles: {
        a: { role: 'karşı kenar', description: 'A açısının karşısında', short: 'karşı', label: 'a = karşı kenar' },
        b: { role: 'komşu kenar', description: 'A açısının yanında', short: 'komşu', label: 'b = komşu kenar' },
        c: { role: 'hipotenüs', description: 'en uzun kenar, 90 derecenin karşısında', short: 'hipotenüs', label: 'c = hipotenüs' }
      },
      usedInPattern: '{label} içinde kullanılır',
      notUsedInPattern: '{label} içinde kullanılmaz'
    }),
    relatedAngleCalculator: 'Dik üçgen açı hesaplayıcı',
    pageTitle: '{name} oranı hesaplayıcı',
    headerSummary: 'Dik üçgende {num} ve {den} ile {symbol} hesaplayın.',
    metaTitle: '{title} | Dik üçgende {symbol}',
    metaDescription: '{title} ile {symbol} değerini bulun. Formül {formula}, adımlar, örnek ve diyagram içerir.',
    calculatorHeading: '{name} oranını hesapla',
    introHeading: 'Bu {title} nasıl çalışır',
    intro: [
      '{name} oranı A açısını {num} ve {den} ile ilişkilendirir. Bu iki uzunluğu girince araç {symbol} verir.',
      'Hesaplayıcı elle bölme hatasını azaltır ve geometrideki ilişkiyi gösterir: {formula}.'
    ],
    calculatorNote: '{num} ve {den} için pozitif değerler girin. Hipotenüs c varsa, ilgili kenardan uzun olmalıdır.',
    formulaParagraphs: [
      '{symbol}, {num} değerinin {den} değerine bölünmesidir. Bu yüzden formül {formula}.',
      'Kenarları her zaman A açısına göre belirleyin. Birimler aynıysa sonuç birimsiz bir orandır.'
    ],
    diagramExplanation: [
      'Diyagramda a karşı kenar, b komşu kenar ve c hipotenüstür.',
      '{symbol} yalnızca {num} ve {den} kullanır. Diğer kenar yön bulmaya yardım eder, ancak bu orana girmez.'
    ],
    howToSteps: [
      'Dik üçgende A açısını bulun.',
      '{num} değerini belirleyin.',
      '{den} değerini belirleyin.',
      'İlk değeri hesaplayıcıya girin.',
      'İkinci değeri aynı birimle girin.',
      '{symbol} için Calculate düğmesine basın.',
      'Sonucu kontrol edin: {range}'
    ],
    exampleIntro: '{values} olduğunu varsayalım.',
    exampleConclusion: 'Sonuç {symbol} = {result}. Açı gerekiyorsa ters trigonometrik fonksiyonla A yaklaşık {angle} bulunur.',
    resultMeaning: [
      '{symbol}, {num} değerinin {den} ile karşılaştırıldığında ne kadar büyük olduğunu gösterir.',
      '{range}',
      'Sonuç birimsizdir, çünkü iki uzunluk oranlanır.'
    ],
    rangeNotes: {
      zeroOne: 'Dik üçgendeki dar açı için değer 0 ile 1 arasındadır.',
      positiveAny: 'Değer herhangi bir pozitif sayı olabilir.',
      greaterOne: 'Değer her zaman 1 veya daha büyüktür.'
    },
    whenIntro: '{name} hesaplayıcıyı şu durumlarda kullanın:',
    whenItems: [
      '{num} ve {den} biliniyorsa ve {symbol} gerekiyorsa.',
      'ödev veya sınav cevabını kontrol ediyorsanız.',
      'ters fonksiyonla A açısını bulmak istiyorsanız.',
      'eğim, rampa, kuvvet veya mesafe bileşenleriyle çalışıyorsanız.',
      'bu oranı başka bir trigonometrik oranla karşılaştırmak istiyorsanız.'
    ],
    mistakesIntro: '{name} hesaplarken şu hatalardan kaçının:',
    mistakeItems: [
      'Yanlış kenarı seçmek. {num} ve {den} değerlerini A açısına göre belirleyin.',
      'Kesri ters çevirmek. Doğru formül {formula}.',
      'Farklı birimleri dönüştürmeden karıştırmak.',
      '90 derece açıyı A açısı olarak kullanmak.',
      'Hipotenüs c nin en uzun kenar olması gerektiğini unutmak.'
    ],
    faqs: [
      { question: '{symbol} formülü nedir?', answer: 'Formül {formula}; {num} payda, {den} paydadadır.' },
      { question: '{symbol} birime sahip mi?', answer: 'Hayır. İki uzunluğun oranı olduğu için birimler sadeleşir.' },
      { question: 'A açısını bulabilir miyim?', answer: 'Bu sayfa oranı verir. Açı için ters fonksiyon veya açı hesaplayıcı kullanın.' },
      { question: '{name} ve {reciprocalName} nasıl ilişkilidir?', answer: '{reciprocalName}, {name} oranının tersidir. Biri biliniyorsa diğeri 1 in o değere bölünmesiyle bulunur.' },
      { question: 'Hangi kenarları girmeliyim?', answer: '{symbol} için {num} ve {den} girin.' }
    ]
  },
  sv: {
    ratioNames: { sine: 'sinus', cosine: 'cosinus', tangent: 'tangens', cotangent: 'cotangens', secant: 'sekant', cosecant: 'cosekant' },
    sideNames: { opposite: 'motstående sida', adjacent: 'närliggande sida', hypotenuse: 'hypotenusa' },
    ui: createUi({
      home: 'Hem',
      badge: 'Kalkylator för trigonometriska förhållanden',
      parentPageLabel: 'Kalkylator för trigonometriska förhållanden i rätvinklig triangel',
      formula: 'Formel',
      triangleDiagram: 'Triangeldiagram',
      ratioHighlight: 'Förhållande i fokus',
      numerator: 'Täljare',
      denominator: 'Nämnare',
      sideKey: 'Sidnyckel',
      howToUse: 'Så använder du kalkylatorn',
      stepByStepExample: 'Exempel steg för steg',
      whatResultMeans: 'Vad resultatet betyder',
      whenToUse: 'När detta förhållande används',
      commonMistakes: 'Vanliga misstag',
      relatedCalculators: 'Relaterade kalkylatorer',
      openTool: 'Öppna verktyg',
      faqHeading: 'Vanliga frågor',
      rightAngle: '90 grader',
      sideRoles: {
        a: { role: 'motstående sida', description: 'mittemot vinkel A', short: 'motstående', label: 'a = motstående sida' },
        b: { role: 'närliggande sida', description: 'intill vinkel A', short: 'närliggande', label: 'b = närliggande sida' },
        c: { role: 'hypotenusa', description: 'längsta sidan, mittemot 90 grader', short: 'hypotenusa', label: 'c = hypotenusa' }
      },
      usedInPattern: 'Används i {label}',
      notUsedInPattern: 'Används inte i {label}'
    }),
    relatedAngleCalculator: 'Vinkelkalkylator för rätvinklig triangel',
    pageTitle: 'Kalkylator för {name}förhållande',
    headerSummary: 'Beräkna {symbol} från {num} och {den} i en rätvinklig triangel.',
    metaTitle: '{title} | {symbol} i rätvinklig triangel',
    metaDescription: 'Använd {title} för att hitta {symbol} med formeln {formula}, steg, exempel och diagram.',
    calculatorHeading: 'Beräkna {name}förhållande',
    introHeading: 'Så fungerar {title}',
    intro: [
      '{name}förhållandet kopplar vinkel A till {num} och {den}. Ange två längder för att få {symbol}.',
      'Kalkylatorn tar bort manuell division och visar den geometriska relationen: {formula}.'
    ],
    calculatorNote: 'Ange positiva värden för {num} och {den}. Om hypotenusan c ingår måste den vara längre än den aktuella kateten.',
    formulaParagraphs: [
      '{symbol} är {num} dividerad med {den}. Därför är formeln {formula}.',
      'Identifiera alltid sidorna relativt vinkel A. Med samma enhet blir resultatet ett enhetslöst förhållande.'
    ],
    diagramExplanation: [
      'I diagrammet är a motstående sida, b närliggande sida och c hypotenusa.',
      '{symbol} använder bara {num} och {den}. Den tredje sidan hjälper orienteringen men ingår inte i förhållandet.'
    ],
    howToSteps: [
      'Hitta vinkel A i den rätvinkliga triangeln.',
      'Identifiera {num}.',
      'Identifiera {den}.',
      'Skriv in det första värdet i kalkylatorn.',
      'Skriv in det andra värdet i samma enhet.',
      'Tryck på Calculate för att få {symbol}.',
      'Kontrollera resultatet: {range}'
    ],
    exampleIntro: 'Anta att {values}.',
    exampleConclusion: 'Resultatet är {symbol} = {result}. Om du behöver vinkeln, använd invers trigonometrisk funktion: A är ungefär {angle}.',
    resultMeaning: [
      '{symbol} visar hur stor {num} är jämfört med {den}.',
      '{range}',
      'Resultatet saknar enhet eftersom två längder jämförs.'
    ],
    rangeNotes: {
      zeroOne: 'För en spetsig vinkel i en rätvinklig triangel ligger värdet mellan 0 och 1.',
      positiveAny: 'Värdet kan vara vilket positivt tal som helst.',
      greaterOne: 'Värdet är alltid större än eller lika med 1.'
    },
    whenIntro: 'Använd kalkylatorn för {name} när:',
    whenItems: [
      'du känner till {num} och {den} och behöver {symbol}.',
      'du kontrollerar en läxa eller ett provsvar.',
      'du vill hitta vinkel A med en invers funktion.',
      'du arbetar med lutning, ramp, kraft eller avståndskomponenter.',
      'du vill jämföra detta förhållande med ett annat trigonometriskt förhållande.'
    ],
    mistakesIntro: 'Undvik dessa misstag när du beräknar {name}:',
    mistakeItems: [
      'Välj inte fel sida. Identifiera {num} och {den} från vinkel A.',
      'Vänd inte bråket. Rätt formel är {formula}.',
      'Blanda inte olika enheter utan omvandling.',
      'Använd inte 90 graders vinkel som vinkel A.',
      'Glöm inte att hypotenusan c måste vara längst.'
    ],
    faqs: [
      { question: 'Vad är formeln för {symbol}?', answer: 'Formeln är {formula}; {num} är täljare och {den} är nämnare.' },
      { question: 'Har {symbol} en enhet?', answer: 'Nej. Det är ett förhållande mellan två längder, så enheterna försvinner.' },
      { question: 'Kan jag hitta vinkel A?', answer: 'Den här sidan ger förhållandet. För vinkeln använder du invers funktion eller vinkelkalkylatorn.' },
      { question: 'Hur hänger {name} och {reciprocalName} ihop?', answer: '{reciprocalName} är det reciproka förhållandet till {name}. Om du känner ett värde är det andra 1 dividerat med värdet.' },
      { question: 'Vilka sidor ska jag ange?', answer: 'För {symbol}, ange {num} och {den}.' }
    ]
  },
  zh: {
    ratioNames: { sine: '正弦', cosine: '余弦', tangent: '正切', cotangent: '余切', secant: '正割', cosecant: '余割' },
    sideNames: { opposite: '对边', adjacent: '邻边', hypotenuse: '斜边' },
    ui: createUi({
      home: '首页',
      badge: '三角比计算器',
      parentPageLabel: '直角三角形三角比计算器',
      formula: '公式',
      triangleDiagram: '三角形示意图',
      ratioHighlight: '比值重点',
      numerator: '分子',
      denominator: '分母',
      sideKey: '边的说明',
      howToUse: '如何使用此计算器',
      stepByStepExample: '分步示例',
      whatResultMeans: '结果含义',
      whenToUse: '何时使用此比值',
      commonMistakes: '常见错误',
      relatedCalculators: '相关计算器',
      openTool: '打开工具',
      faqHeading: '常见问题',
      rightAngle: '90度',
      sideRoles: {
        a: { role: '对边', description: '位于角A的对面', short: '对边', label: 'a = 对边' },
        b: { role: '邻边', description: '紧邻角A', short: '邻边', label: 'b = 邻边' },
        c: { role: '斜边', description: '最长的边，位于90度角对面', short: '斜边', label: 'c = 斜边' }
      },
      usedInPattern: '用于 {label}',
      notUsedInPattern: '不用于 {label}'
    }),
    relatedAngleCalculator: '直角三角形角度计算器',
    pageTitle: '{name}比计算器',
    headerSummary: '在直角三角形中，用{num}和{den}计算{symbol}。',
    metaTitle: '{title} | 直角三角形 {symbol}',
    metaDescription: '使用{title}求{symbol}，包含公式{formula}、步骤、示例和图示。',
    calculatorHeading: '计算{name}比',
    introHeading: '此{title}如何工作',
    intro: [
      '{name}比把角A与{num}和{den}联系起来。输入这两个边长即可得到{symbol}。',
      '此计算器减少手动除法，并显示几何关系: {formula}。'
    ],
    calculatorNote: '请输入{num}和{den}的正数值。如果包含斜边c，它必须长于对应的直角边。',
    formulaParagraphs: [
      '{symbol}等于{num}除以{den}。因此公式为{formula}。',
      '始终相对于角A识别各边。若单位相同，结果是无单位比值。'
    ],
    diagramExplanation: [
      '图中a是对边，b是邻边，c是斜边。',
      '{symbol}只使用{num}和{den}。另一条边有助于辨认方向，但不参与此比值。'
    ],
    howToSteps: [
      '在直角三角形中找到角A。',
      '确定{num}。',
      '确定{den}。',
      '在计算器中输入第一个值。',
      '用相同单位输入第二个值。',
      '点击Calculate得到{symbol}。',
      '检查结果: {range}'
    ],
    exampleIntro: '假设{values}。',
    exampleConclusion: '结果为{symbol} = {result}。若需要角度，可使用反三角函数，A约为{angle}。',
    resultMeaning: [
      '{symbol}表示{num}相对于{den}的大小。',
      '{range}',
      '该比值没有单位，因为它比较的是两个长度。'
    ],
    rangeNotes: {
      zeroOne: '对于直角三角形的锐角，数值在0和1之间。',
      positiveAny: '数值可以是任意正数。',
      greaterOne: '数值始终大于或等于1。'
    },
    whenIntro: '在以下情况使用{name}计算器:',
    whenItems: [
      '已知{num}和{den}，需要{symbol}。',
      '检查作业或考试答案。',
      '准备使用反三角函数求角A。',
      '处理坡度、斜坡、力或距离分量。',
      '想把此比值与其他三角比比较。'
    ],
    mistakesIntro: '计算{name}时请避免这些错误:',
    mistakeItems: [
      '选择错误的边。应从角A出发确定{num}和{den}。',
      '把分数颠倒。正确公式是{formula}。',
      '未换算就混用不同单位。',
      '把90度角当作角A。',
      '忘记斜边c必须是最长边。'
    ],
    faqs: [
      { question: '{symbol}的公式是什么?', answer: '公式是{formula}; {num}在分子，{den}在分母。' },
      { question: '{symbol}有单位吗?', answer: '没有。它是两个长度的比，因此单位会抵消。' },
      { question: '能求角A吗?', answer: '本页给出比值。要求角度，请使用反三角函数或角度计算器。' },
      { question: '{name}和{reciprocalName}有什么关系?', answer: '{reciprocalName}是{name}的倒数比。知道一个值后，另一个值等于1除以该值。' },
      { question: '需要输入哪些边?', answer: '对于{symbol}，请输入{num}和{den}。' }
    ]
  }
};

const ALIASES: Partial<Record<Locale, Locale>> = {
  // These languages receive full localized page data through closely related
  // fallback packs when a dedicated pack is not needed for math terminology.
};

const getCopy = (locale: Locale): CopyPack | undefined =>
  COPIES[locale] || (ALIASES[locale] ? COPIES[ALIASES[locale]!] : undefined);

const buildValues = (copy: CopyPack, config: RatioConfig) => {
  const name = copy.ratioNames[config.key];
  const reciprocalName = copy.ratioNames[config.reciprocal];
  const num = sideText(copy, config.numerator);
  const den = sideText(copy, config.denominator);
  const title = fill(copy.pageTitle, { name });
  const range = copy.rangeNotes[config.range];

  return {
    name,
    reciprocalName,
    num,
    den,
    title,
    range,
    symbol: config.symbol,
    formula: config.formula,
    values: config.exampleValues,
    result: config.exampleResult,
    angle: config.exampleAngle
  };
};

const translateRelatedLinks = (
  copy: CopyPack,
  links: FocusedTrigRatioCalculatorPage['relatedLinks']
) => {
  const ratioLabels = Object.values(RATIO_CONFIGS).reduce<Record<string, string>>((acc, config) => {
    acc[config.url] = fill(copy.pageTitle, { name: copy.ratioNames[config.key] });
    return acc;
  }, {});

  const commonLabels: Record<string, string> = {
    '/right-triangle-trig-ratios-calculator/': copy.ui.parentPageLabel,
    '/right-triangle-angle-calculator/': copy.relatedAngleCalculator
  };

  return links.map((link) => ({
    ...link,
    label: ratioLabels[link.href] || commonLabels[link.href] || link.label
  }));
};

const translateList = (templates: string[], values: Record<string, string>) =>
  templates.map((template) => fill(template, values));

export function localizeFocusedTrigRatioCalculatorPage(
  page: FocusedTrigRatioCalculatorPage,
  locale: Locale
): FocusedTrigRatioCalculatorPage {
  const copy = getCopy(locale);
  const config = RATIO_CONFIGS[page.slug];

  if (!copy || !config) {
    return page;
  }

  const values = buildValues(copy, config);
  const fields = [config.numerator, config.denominator].map((side) => ({
    key: sideLetters[side],
    label: sideText(copy, side),
    min: 0
  }));

  return {
    ...page,
    h1: fill(copy.pageTitle, values),
    headerSummary: fill(copy.headerSummary, values),
    metaTitle: fill(copy.metaTitle, values),
    metaDescription: fill(copy.metaDescription, values),
    calculator: {
      heading: fill(copy.calculatorHeading, values),
      outputLabel: config.symbol,
      fields
    },
    introHeading: fill(copy.introHeading, values),
    intro: translateList(copy.intro, values),
    calculatorNote: fill(copy.calculatorNote, values),
    formula: {
      display: config.formula,
      paragraphs: translateList(copy.formulaParagraphs, values)
    },
    diagramExplanation: translateList(copy.diagramExplanation, values),
    howToSteps: translateList(copy.howToSteps, values),
    example: {
      intro: fill(copy.exampleIntro, values),
      steps: config.exampleLines,
      conclusion: fill(copy.exampleConclusion, values)
    },
    whatResultMeans: translateList(copy.resultMeaning, values),
    whenToUse: {
      intro: fill(copy.whenIntro, values),
      items: translateList(copy.whenItems, values)
    },
    commonMistakes: {
      intro: fill(copy.mistakesIntro, values),
      items: translateList(copy.mistakeItems, values)
    },
    relatedLinks: translateRelatedLinks(copy, page.relatedLinks),
    faqs: copy.faqs.map((faq) => ({
      question: fill(faq.question, values),
      answer: fill(faq.answer, values)
    }))
  };
}

export function getFocusedTrigRatioUi(locale: Locale): FocusedTrigRatioUi {
  return getCopy(locale)?.ui || EN_UI;
}

export function getFocusedTrigRatioRuntimeTranslations(
  page: FocusedTrigRatioCalculatorPage,
  locale: Locale
) {
  const runtimeUi = locale === 'en' ? EN_RUNTIME_UI : RUNTIME_UI[locale] ?? EN_RUNTIME_UI;
  const config = RATIO_CONFIGS[page.slug];

  return {
    ...runtimeUi,
    calculationSteps: config
      ? {
          [config.key]: {
            title: page.calculator.heading,
            description: page.formula.paragraphs[0] || page.calculatorNote
          }
        }
      : {}
  };
}

export function getFocusedTrigRatioSideLabel(
  locale: Locale,
  side: 'a' | 'b' | 'c'
) {
  return getFocusedTrigRatioUi(locale).sideRoles[side].label;
}
