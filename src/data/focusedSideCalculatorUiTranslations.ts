import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

type FocusedSideCalculatorUi = {
  positive: string;
  hypotenuseKnownLeg: string;
  diagramKey: string;
  knownSide: string;
  sideToFind: string;
};

const ENGLISH_UI: FocusedSideCalculatorUi = {
  positive: 'Please enter positive values.',
  hypotenuseKnownLeg: 'The hypotenuse c must be greater than the known side.',
  diagramKey: 'Diagram Key',
  knownSide: 'Known side',
  sideToFind: 'Side to find'
};

const LOCALIZED_UI: Partial<Record<Locale, FocusedSideCalculatorUi>> = {
  hi: {
    positive: 'कृपया धनात्मक मान दर्ज करें।',
    hypotenuseKnownLeg: 'कर्ण c ज्ञात भुजा से बड़ा होना चाहिए।',
    diagramKey: 'आरेख कुंजी',
    knownSide: 'ज्ञात भुजा',
    sideToFind: 'ज्ञात करनी है'
  },
  es: {
    positive: 'Introduce valores positivos.',
    hypotenuseKnownLeg: 'La hipotenusa c debe ser mayor que el lado conocido.',
    diagramKey: 'Clave del diagrama',
    knownSide: 'Lado conocido',
    sideToFind: 'Lado a encontrar'
  },
  ru: {
    positive: 'Введите положительные значения.',
    hypotenuseKnownLeg: 'Гипотенуза c должна быть больше известного катета.',
    diagramKey: 'Обозначения на схеме',
    knownSide: 'Известная сторона',
    sideToFind: 'Сторона для поиска'
  },
  fr: {
    positive: 'Veuillez saisir des valeurs positives.',
    hypotenuseKnownLeg: "L'hypoténuse c doit être supérieure au côté connu.",
    diagramKey: 'Clé du schéma',
    knownSide: 'Côté connu',
    sideToFind: 'Côté à trouver'
  },
  de: {
    positive: 'Bitte positive Werte eingeben.',
    hypotenuseKnownLeg: 'Die Hypotenuse c muss größer als die bekannte Seite sein.',
    diagramKey: 'Diagrammlegende',
    knownSide: 'Bekannte Seite',
    sideToFind: 'Gesuchte Seite'
  },
  it: {
    positive: 'Inserisci valori positivi.',
    hypotenuseKnownLeg: "L'ipotenusa c deve essere maggiore del lato noto.",
    diagramKey: 'Legenda del diagramma',
    knownSide: 'Lato noto',
    sideToFind: 'Lato da trovare'
  },
  pt: {
    positive: 'Insira valores positivos.',
    hypotenuseKnownLeg: 'A hipotenusa c deve ser maior que o lado conhecido.',
    diagramKey: 'Legenda do diagrama',
    knownSide: 'Lado conhecido',
    sideToFind: 'Lado a encontrar'
  },
  bn: {
    positive: 'অনুগ্রহ করে ধনাত্মক মান লিখুন।',
    hypotenuseKnownLeg: 'অতিভুজ c পরিচিত বাহুর চেয়ে বড় হতে হবে।',
    diagramKey: 'চিত্রের নির্দেশিকা',
    knownSide: 'পরিচিত বাহু',
    sideToFind: 'যে বাহু বের করতে হবে'
  },
  ja: {
    positive: '正の値を入力してください。',
    hypotenuseKnownLeg: '斜辺 c は既知の辺より大きくなければなりません。',
    diagramKey: '図の凡例',
    knownSide: '既知の辺',
    sideToFind: '求める辺'
  },
  ko: {
    positive: '양수 값을 입력하세요.',
    hypotenuseKnownLeg: '빗변 c는 알려진 변보다 커야 합니다.',
    diagramKey: '도형 표시 설명',
    knownSide: '알려진 변',
    sideToFind: '구할 변'
  },
  ms: {
    positive: 'Sila masukkan nilai positif.',
    hypotenuseKnownLeg: 'Hipotenus c mestilah lebih besar daripada sisi yang diketahui.',
    diagramKey: 'Petunjuk rajah',
    knownSide: 'Sisi diketahui',
    sideToFind: 'Sisi untuk dicari'
  },
  pl: {
    positive: 'Wprowadź wartości dodatnie.',
    hypotenuseKnownLeg: 'Przeciwprostokątna c musi być większa od znanej strony.',
    diagramKey: 'Legenda diagramu',
    knownSide: 'Znana strona',
    sideToFind: 'Strona do znalezienia'
  },
  id: {
    positive: 'Masukkan nilai positif.',
    hypotenuseKnownLeg: 'Hipotenusa c harus lebih besar dari sisi yang diketahui.',
    diagramKey: 'Keterangan diagram',
    knownSide: 'Sisi diketahui',
    sideToFind: 'Sisi yang dicari'
  },
  ar: {
    positive: 'يرجى إدخال قيم موجبة.',
    hypotenuseKnownLeg: 'يجب أن يكون الوتر c أكبر من الضلع المعروف.',
    diagramKey: 'مفتاح الرسم',
    knownSide: 'ضلع معروف',
    sideToFind: 'الضلع المطلوب'
  },
  bg: {
    positive: 'Въведете положителни стойности.',
    hypotenuseKnownLeg: 'Хипотенузата c трябва да е по-голяма от известната страна.',
    diagramKey: 'Легенда на диаграмата',
    knownSide: 'Известна страна',
    sideToFind: 'Търсена страна'
  },
  tr: {
    positive: 'Lütfen pozitif değerler girin.',
    hypotenuseKnownLeg: 'Hipotenüs c bilinen kenardan büyük olmalıdır.',
    diagramKey: 'Şekil açıklaması',
    knownSide: 'Bilinen kenar',
    sideToFind: 'Bulunacak kenar'
  },
  sv: {
    positive: 'Ange positiva värden.',
    hypotenuseKnownLeg: 'Hypotenusan c måste vara större än den kända sidan.',
    diagramKey: 'Diagramförklaring',
    knownSide: 'Känd sida',
    sideToFind: 'Sida att hitta'
  },
  zh: {
    positive: '请输入正数。',
    hypotenuseKnownLeg: '斜边 c 必须大于已知边。',
    diagramKey: '图示说明',
    knownSide: '已知边',
    sideToFind: '要求的边'
  }
};

export function getFocusedSideCalculatorUi(locale: Locale): FocusedSideCalculatorUi {
  return locale === DEFAULT_LOCALE ? ENGLISH_UI : LOCALIZED_UI[locale] ?? ENGLISH_UI;
}
