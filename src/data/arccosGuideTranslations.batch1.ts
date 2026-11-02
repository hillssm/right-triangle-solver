/**
 * arccosGuideTranslations.batch1.ts
 * Translations of the Right Triangle Angle From Cosine Calculator guide (ArccosGuide.astro)
 * Batch 1: Hindi (hi), Spanish (es), Russian (ru), French (fr), German (de), Italian (it).
 *
 * Structure per language:
 * - tocHeading, tocItems (12 entries keyed by section id)
 * - sections (12 entries: arccos-intro, arccos-what, arccos-vs, arccos-anatomy,
 *   arccos-howto, arccos-examples, arccos-special, arccos-mistakes, arccos-verify,
 *   arccos-applications, arccos-related, arccos-conclusion)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), optional steps,
 *   optional closingParagraphs, optional imgAlt, figcaption.
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedItems (6 calculator names)
 *
 * Formulas, variable names, numbers, and HTML tags are preserved
 * exactly as in the English source.
 */

export const ARCCOS_TRANSLATIONS_BATCH1 = {
  "hi": {
    "faqs": [
      {
        "answer": "इसका मतलब है कि आप आसन्न भुजा को कर्ण से भाग देते हैं, फिर उस दशमलव से पीछे की ओर काम करके वह कोण निकालते हैं जिसका कोसाइन उसके बराबर हो। परिणाम आसन्न भुजा और कर्ण के बीच का न्यून कोण होता है।",
        "question": "A = arccos(b/c) का वास्तविक अर्थ क्या है?"
      },
      {
        "answer": "जब आपको आसन्न भुजा और कर्ण पता हो तो arccos का उपयोग करें। जब आपको सम्मुख भुजा और कर्ण पता हो तो arcsin का उपयोग करें। एक ही त्रिभुज के लिए दोनों समान कोण देते हैं; चुनाव इस पर निर्भर करता है कि आपने कौन सी भुजाएँ मापीं।",
        "question": "arcsin के बजाय arccos का उपयोग कब करूँ?"
      },
      {
        "answer": "सबसे आम कारण 1 से बड़ा अनुपात है, जो तब होता है जब दर्ज की गई आसन्न भुजा कर्ण से लंबी हो। वैध समकोण त्रिभुज में कर्ण हमेशा सबसे लंबा होता है, इसलिए अपने भुजा लेबल जाँचें।",
        "question": "मुझे arccos से गणितीय त्रुटि क्यों मिल रही है?"
      },
      {
        "answer": "हाँ। यही arccos का मुख्य लाभ है: इसे केवल आसन्न भुजा और कर्ण चाहिए। सम्मुख भुजा कभी गणना में आती ही नहीं।",
        "question": "क्या मैं सम्मुख भुजा जाने बिना arccos का उपयोग कर सकता हूँ?"
      },
      {
        "answer": "कोसाइन कोण लेकर अनुपात देता है: cos(60 डिग्री) = 0.5। arccos इसे उल्टा करता है: यह अनुपात लेकर कोण देता है, इसलिए arccos(0.5) = 60 डिग्री। कोण पता होने पर कोसाइन का उपयोग करें; भुजाएँ पता होने पर arccos का उपयोग करें।",
        "question": "cos और arccos में क्या अंतर है?"
      },
      {
        "answer": "क्योंकि वे अलग-अलग भुजा युग्मों के माध्यम से समान ज्यामितीय कोण का वर्णन करते हैं। 3-4-5 त्रिभुज में, arccos(4/5), arcsin(3/5), और arctan(3/4) सभी 36.87 डिग्री के बराबर हैं। विधियों के बीच सहमति सही भुजा लेबलों की पुष्टि करती है।",
        "question": "arccos, arcsin और arctan समान उत्तर क्यों देते हैं?"
      },
      {
        "answer": "कोण ठीक 60 डिग्री है। यह 30-60-90 विशेष त्रिभुज है, जहाँ 60-डिग्री कोण के आसन्न भुजा कर्ण की आधी है।",
        "question": "यदि b/c ठीक 0.5 के बराबर हो तो इसका क्या मतलब है?"
      },
      {
        "answer": "यह कैलकुलेटर डिग्री का उपयोग करता है, जो निर्माण, सर्वेक्षण और कक्षा ज्यामिति का मानक है। यदि आप हाथ से परिकलित करते हैं, तो सुनिश्चित करें कि कैलकुलेटर डिग्री मोड में है; 0.64 जैसा रेडियन-मोड परिणाम 180/pi से गुणा करके 36.87 डिग्री में बदलता है।",
        "question": "क्या उत्तर डिग्री में होना चाहिए या रेडियन में?"
      },
      {
        "answer": "90 डिग्री में से घटाएँ। यदि arccos A = 36.87 डिग्री देता है, तो B = 90 - 36.87 = 53.13 डिग्री। आगे किसी त्रिकोणमिति की ज़रूरत नहीं।",
        "question": "मैं दूसरा न्यून कोण कैसे निकालूँ?"
      },
      {
        "answer": "केवल सीमा के रूप में: arccos(0) = 90 डिग्री, लेकिन शून्य आसन्न भुजा का मतलब अपतित त्रिभुज है, वास्तविक नहीं। arccos से वैध समकोण त्रिभुज कोण हमेशा 0 और 90 डिग्री के बीच सख्ती से रहते हैं।",
        "question": "क्या arccos परिणाम कभी 90 डिग्री हो सकता है?"
      },
      {
        "answer": "cos(A) परिकलित करें और पुष्टि करें कि वह b/c के बराबर है। तीसरी भुजा का उपयोग करके arcsin या arctan से भी पुनः परिकलित करें; सभी विधियों को सहमत होना चाहिए। अंत में, जाँचें कि दोनों न्यून कोणों का योग ठीक 90 डिग्री है।",
        "question": "मैं अपने arccos उत्तर की जाँच कैसे कर सकता हूँ?"
      },
      {
        "answer": "नहीं। समरूप त्रिभुजों के कोण समान होते हैं। 3-4-5 त्रिभुज और 6-8-10 त्रिभुज दोनों arccos(0.8) = 36.87 डिग्री देते हैं, क्योंकि b/c अनुपात स्केलिंग से अपरिवर्तित रहता है।",
        "question": "क्या त्रिभुज को स्केल करने से arccos परिणाम बदलता है?"
      }
    ],
    "relatedHeading": "संबंधित समकोण त्रिभुज कैलकुलेटर देखें",
    "relatedItems": [
      "समकोण त्रिभुज कोण कैलकुलेटर",
      "समकोण त्रिभुज साइन से कोण कैलकुलेटर",
      "समकोण त्रिभुज टैंजेंट से कोण कैलकुलेटर",
      "समकोण त्रिभुज लुप्त कोण कैलकुलेटर",
      "समकोण त्रिभुज त्रिकोणमितीय अनुपात कैलकुलेटर",
      "कोसाइन अनुपात कैलकुलेटर"
    ],
    "tocHeading": "इस मार्गदर्शिका में",
    "tocItems": {
      "arccos-intro": "कोसाइन से कोण कैलकुलेटर क्या है?",
      "arccos-what": "arccos (व्युत्क्रम कोसाइन) को समझें",
      "arccos-vs": "arccos बनाम arcsin बनाम arctan",
      "arccos-anatomy": "आसन्न भुजा और कर्ण",
      "arccos-howto": "कैलकुलेटर का उपयोग कैसे करें",
      "arccos-examples": "16 हल किए गए उदाहरण",
      "arccos-special": "विशेष कोण मान",
      "arccos-mistakes": "आम गलतियाँ",
      "arccos-verify": "अपने उत्तर को सत्यापित करें",
      "arccos-applications": "वास्तविक जीवन में उपयोग",
      "arccos-related": "संबंधित कैलकुलेटर",
      "arccos-faq": "अक्सर पूछे जाने वाले प्रश्न"
    },
    "sections": {
      "arccos-intro": {
        "h2": "समकोण त्रिभुज कोसाइन से कोण कैलकुलेटर क्या है?",
        "blocks": [
          {
            "kind": "p",
            "text": "समकोण त्रिभुज कोसाइन से कोण कैलकुलेटर न्यून कोण तब निकालता है जब आपको आसन्न भुजा और कर्ण पता हो। यह इन दो भुजाओं के अनुपात पर व्युत्क्रम कोसाइन फलन लगाता है, जिसे arccos या cos लिखा जाता है। परिणाम डिग्री में कोण A होता है।"
          },
          {
            "kind": "p",
            "text": "यह उपकरण एक विशिष्ट माप स्थिति के लिए है: आप अपने लक्ष्य कोण के बगल की भुजा और त्रिभुज की सबसे लंबी भुजा माप सकते हैं, लेकिन सम्मुख भुजा अज्ञात है या उस तक पहुँचना कठिन है। सम्मुख भुजा पहले निकालने के बजाय, arccos इसे पूरी तरह छोड़ देता है और आसन्न-से-कर्ण अनुपात को सीधे कोण में बदल देता है।"
          },
          {
            "kind": "p",
            "text": "उदाहरण के लिए, 4 की आसन्न भुजा और 5 के कर्ण से अनुपात 0.8 मिलता है। 0.8 का arccos लगभग 36.87 डिग्री होता है। यही कोण A है। दूसरा न्यून कोण पूरक नियम से मिलता है: 90 में से 36.87 घटाने पर 53.13 डिग्री।"
          },
          {
            "kind": "p",
            "text": "arccos इस साइट के तीन व्युत्क्रम त्रिकोणमितीय उपकरणों में से एक है। यदि आपकी ज्ञात भुजाएँ सम्मुख भुजा और कर्ण हैं, तो साइन से कोण कैलकुलेटर सही विकल्प है। यदि आप दोनों भुजाएँ जानते हैं लेकिन कर्ण नहीं, तो टैंजेंट से कोण कैलकुलेटर का उपयोग करें। यह पृष्ठ कोसाइन के मामले को पूरी गहराई से बताता है।"
          }
        ]
      },
      "arccos-what": {
        "h2": "arccos (व्युत्क्रम कोसाइन) को समझें",
        "imgAlt": "arccos के दो चरण दिखाता आरेख: b को c से भाग दें, फिर कोण निकालने के लिए arccos लगाएँ",
        "figcaption": "arccos कैसे काम करता है: आसन्न भुजा को कर्ण से भाग दें, फिर कोण वापस निकालने के लिए व्युत्क्रम कोसाइन लगाएँ।",
        "blocks": [
          {
            "kind": "p",
            "text": "नियमित कोसाइन कोण लेकर अनुपात देता है। 60 डिग्री का कोसाइन 0.5 है। arccos इसे उल्टा करता है: यह अनुपात लेकर कोण देता है। 0.5 का arccos 60 डिग्री है। ये दोनों फलन एक-दूसरे को निरस्त करते हैं, इसीलिए arccos को cos भी लिखा जाता है।"
          },
          {
            "kind": "p",
            "text": "इस कैलकुलेटर का उपयोग किया जाने वाला सूत्र . है। यहाँ b आसन्न भुजा है, c कर्ण है, और A इन दोनों के बीच का कोण है। वैध समकोण त्रिभुज के लिए b/c अनुपात हमेशा 0 और 1 के बीच रहता है, क्योंकि आसन्न भुजा हमेशा कर्ण से छोटी होती है।"
          },
          {
            "kind": "p",
            "text": "arccos को एक प्रश्न के रूप में सोचें: \"इस कोसाइन मान वाला कोण कौन सा है?\" यदि b/c बराबर 0.8 है, तो प्रश्न बनता है \"0.8 कोसाइन वाला कोण कौन सा है?\" उत्तर, 36.87 डिग्री, वह कोण है जिसकी आसन्न भुजा कर्ण की लंबाई का 80 प्रतिशत है।"
          },
          {
            "kind": "h3",
            "text": "अनुपात एक कहानी कहता है"
          },
          {
            "kind": "p",
            "text": "b/c का मान त्रिभुज के आकार का वर्णन करता है। 1 के करीब का अनुपात मतलब आसन्न भुजा लगभग कर्ण जितनी लंबी है, इसलिए उनके बीच का कोण बहुत छोटा है। 0 के करीब का अनुपात मतलब आसन्न भुजा कर्ण की तुलना में बहुत छोटी है, इसलिए कोण 90 डिग्री की ओर खुलता जाता है। ठीक 0.5 का अनुपात हमेशा 60 डिग्री मतलब होता है।"
          },
          {
            "kind": "h3",
            "text": "arccos का प्रक्षेत्र"
          },
          {
            "kind": "p",
            "text": "इस ज्यामितीय संदर्भ में arccos केवल 0 से 1 तक के इनपुट स्वीकार करता है। 1 से ऊपर का अनुपात समकोण त्रिभुज के लिए असंभव है और लेबलिंग त्रुटि का संकेत देता है: कर्ण हर में होना चाहिए और सबसे लंबी भुजा होनी चाहिए। ऋणात्मक अनुपात अधिक कोण का वर्णन करेगा, जो समकोण त्रिभुज में कोण A के रूप में नहीं आ सकता।"
          }
        ]
      },
      "arccos-vs": {
        "h2": "arccos बनाम arcsin बनाम arctan: प्रत्येक का उपयोग कब करें",
        "blocks": [
          {
            "kind": "p",
            "text": "तीनों व्युत्क्रम फलन एक ही त्रिभुज पर लगाने पर समान कोण निकालते हैं। वे केवल यह मांगते हैं कि किन भुजाओं की आवश्यकता है, इसमें भिन्न हैं। सही चुनाव करने से आपको वह भुजा परिकलित करने से बचाता है जिसकी आपको ज़रूरत नहीं।"
          },
          {
            "kind": "p",
            "text": "जब आपको आसन्न भुजा (b) और कर्ण (c) पता हो तो arccos का उपयोग करें। सूत्र . है। यह स्वाभाविक चुनाव है जब कर्ण सीधे मापा गया हो, उदाहरण के लिए ढलान के साथ टेप से, और क्षैतिज दूरी ज्ञात हो।"
          },
          {
            "kind": "p",
            "text": "जब आपको सम्मुख भुजा (a) और कर्ण (c) पता हो तो arcsin का उपयोग करें। सूत्र . है। ऊँचाई की समस्याओं में arcsin उपयुक्त रहता है: ऊर्ध्वाधर उठान भूमि-स्तर के कोण के सम्मुख होती है। साइन से कोण कैलकुलेटर इस मामले को संभालता है।"
          },
          {
            "kind": "p",
            "text": "जब आपको दोनों भुजाएँ (a और b) पता हों लेकिन कर्ण नहीं, तो arctan का उपयोग करें। सूत्र . है। छत की उठान-से-दौड़ जैसी क्षेत्र माप में arctan उपयुक्त रहता है क्योंकि दोनों भुजाएँ सीधे मापी जाती हैं। उस विधि के लिए टैंजेंट से कोण कैलकुलेटर देखें।"
          },
          {
            "kind": "h3",
            "text": "उन्हें सहमत होना चाहिए"
          },
          {
            "kind": "p",
            "text": "किसी भी एक त्रिभुज के लिए, arccos(b/c), arcsin(a/c), और arctan(a/b) समान कोण देते हैं। 3-4-5 त्रिभुज में, arccos(4/5), arcsin(3/5), और arctan(3/4) सभी 36.87 डिग्री के बराबर हैं। यदि दो विधियाँ असहमत हों, तो कोई भुजा गलत लेबल की गई है। यह परस्पर जाँच सबसे विश्वसनीय सत्यापन उपलब्ध है, और त्रिकोणमितीय अनुपात कैलकुलेटर तीनों अनुपातों की एक साथ पुष्टि कर सकता है।"
          },
          {
            "kind": "h3",
            "text": "हमेशा arctan क्यों नहीं?"
          },
          {
            "kind": "p",
            "text": "arctan को दोनों भुजाओं की ज़रूरत होती है। यदि सम्मुख भुजा अज्ञात है और मापना कठिन है, तो पहले उसे निकालना केवल arctan का उपयोग करने के लिए अनावश्यक चरण जोड़ता है और त्रुटि का एक अतिरिक्त मौका बनाता है। arccos आपके पास मौजूद दो भुजाओं से सीधे वांछित कोण तक जाता है। फलन को अपनी मापों से मिलाएँ, आदत से नहीं।"
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "आसन्न भुजा और कर्ण: दो इनपुट",
        "imgAlt": "arccos सूत्र के लिए आसन्न भुजा b और कर्ण c हाइलाइट किया समकोण त्रिभुज",
        "figcaption": "arccos के लिए संरचना: b वह आसन्न भुजा है जो कोण A को छूती है, c समकोण के सम्मुख कर्ण है।",
        "blocks": [
          {
            "kind": "p",
            "text": "arccos को ठीक दो भुजाएँ चाहिए: आसन्न भुजा b और कर्ण c। इन लेबलों को सही करना ही पूरी लड़ाई है। उसके बाद सब कुछ अंकगणित है।"
          },
          {
            "kind": "h3",
            "text": "आसन्न भुजा की पहचान"
          },
          {
            "kind": "p",
            "text": "आसन्न भुजा वह भुजा है जो कोण A को छूती है। यह कोण की ही एक धार बनाती है। नीचे दिए आरेख में, भुजा b समकोण से कोण A तक नीचे की ओर चलती है। यदि आप इसके बजाय दूसरे न्यून कोण B के लिए हल कर रहे हैं, तो लेबल बदल जाते हैं: B के आसन्न भुजा वह है जो B को छूती है।"
          },
          {
            "kind": "h3",
            "text": "कर्ण की पहचान"
          },
          {
            "kind": "p",
            "text": "कर्ण समकोण के सम्मुख वाली भुजा है। यह हमेशा त्रिभुज की सबसे लंबी भुजा होती है। यह कभी समकोण के शीर्ष को नहीं छूती। यदि आपका 'कर्ण' आपके तीन मापों में सबसे लंबा नहीं है, तो परिकलन से पहले पुनः लेबल करें। तीनों भुजाएँ होने पर पाइथागोरस प्रमेय कैलकुलेटर पुष्टि कर सकता है कि कौन सी भुजा सबसे लंबी है।"
          },
          {
            "kind": "h3",
            "text": "सम्मुख भुजा बाहर क्यों रहती है"
          },
          {
            "kind": "p",
            "text": "कोसाइन को आसन्न बटा कर्ण के रूप में परिभाषित किया गया है। सम्मुख भुजा इस अनुपात में आती ही नहीं। यही इस कैलकुलेटर का मतलब है: जब सम्मुख भुजा अज्ञात हो, दबी हो, या आपकी माप व्यवस्था के लिए अप्रासंगिक हो, तब भी arccos कोण देता है। आप सम्मुख भुजा को अनदेखा नहीं कर रहे हैं; आप एक ऐसा अनुपात उपयोग कर रहे हैं जिसे उसकी कभी ज़रूरत ही नहीं थी।"
          }
        ]
      },
      "arccos-howto": {
        "h2": "कोसाइन से कोण कैलकुलेटर का उपयोग कैसे करें",
        "imgAlt": "b बराबर 4 और c बराबर 5 के साथ arccos का चार चरणों वाला हल किया उदाहरण",
        "figcaption": "हल किया उदाहरण: b = 4, c = 5 से A = arccos(0.8) मिलता है, लगभग 36.87 डिग्री, राउंड-ट्रिप से सत्यापित।",
        "steps": [
          "समकोण की पुष्टि करें। यह कैलकुलेटर केवल समकोण त्रिभुजों के लिए काम करता है। पहले 90-डिग्री का कोना पहचानें।",
          "अपना लक्ष्य कोण चुनें। तय करें कि आप कोण A हल कर रहे हैं या कोण B। आसन्न भुजा इसी चुनाव के सापेक्ष परिभाषित होती है।",
          "आसन्न भुजा b मापें। यह वह भुजा है जो आपके लक्ष्य कोण को छूती है। इसे किसी भी इकाई में दर्ज करें।",
          "कर्ण c मापें। यह सबसे लंबी भुजा है, समकोण के पार। b वाली ही इकाई का उपयोग करें।",
          "जाँचें कि b, c से छोटा है। यदि नहीं है, तो भुजाएँ गलत लेबल की गई हैं। कर्ण सबसे लंबा होना चाहिए।",
          "दोनों मान दर्ज करें और Calculate दबाएँ। उपकरण b/c परिकलित करता है, arccos लगाता है, और डिग्री में कोण A देता है।",
          "दूसरा कोण निकालें। 90 डिग्री में से घटाएँ: B = 90 घटा A।",
          "सत्यापित करें। कैलकुलेटर पर cos(A) परिकलित करें और पुष्टि करें कि वह b/c के बराबर है। यदि बराबर है, तो उत्तर पक्का है।"
        ]
      },
      "arccos-examples": {
        "h2": "16 हल किए गए उदाहरण",
        "blocks": [
          {
            "kind": "p",
            "text": "प्रत्येक उदाहरण समान चार चरणों का पालन करता है: सूत्र लिखें, प्रतिस्थापित करें, भाग दें, arccos लगाएँ। कोण दो दशमलव स्थानों तक पूर्णांकित हैं।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 1: 3-4-5 त्रिभुज"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 4 और कर्ण c = 5 दिया है, कोण A ज्ञात करें।"
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) । पूरक B = 53.13।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 2: 5-12-13 त्रिभुज"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 12 और कर्ण c = 13 दिया है, कोण A ज्ञात करें।"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) । पूरक B = 67.38।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 3: 8-15-17 त्रिभुज"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 8 और कर्ण c = 17 दिया है, कोण A ज्ञात करें।"
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) । पूरक B = 28.07।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 4: वही त्रिभुज, दूसरा कोण"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 15 और कर्ण c = 17 दिया है (8-15-17 त्रिभुज के कोण B के लिए हल कर रहे हैं)।"
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) । ध्यान दें 61.93 + 28.07 = 90, जैसा आवश्यक है।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 5: 5-12-13, दूसरा कोण"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 5 और कर्ण c = 13 दिया है।"
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) । यह उदाहरण 2 के पूरक से मेल खाता है।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 6: 3-4-5, दूसरा कोण"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 3 और कर्ण c = 5 दिया है।"
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) । यह उदाहरण 1 के पूरक से मेल खाता है।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 7: 60-डिग्री विशेष स्थिति"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 1 और कर्ण c = 2 दिया है।"
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60 बिल्कुल। यह 30-60-90 विशेष त्रिभुज है। विशेष समकोण त्रिभुज कैलकुलेटर इन सटीक मानों को कवर करता है।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 8: 7-24-25 त्रिभुज"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 7 और कर्ण c = 25 दिया है, कोण A ज्ञात करें।"
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) । पूरक B = 16.26।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 9: 7-24-25, दूसरा कोण"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 24 और कर्ण c = 25 दिया है।"
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) । उदाहरण 8 के पूरक से मेल खाता है।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 10: 9-40-41 त्रिभुज"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 9 और कर्ण c = 41 दिया है, कोण A ज्ञात करें।"
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) । छोटी आसन्न भुजा से चौड़ा कोण मिलता है।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 11: 9-40-41, दूसरा कोण"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 40 और कर्ण c = 41 दिया है।"
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) । ध्यान दें 77.32 + 12.68 = 90।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 12: 20-21-29 त्रिभुज"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 20 और कर्ण c = 29 दिया है, कोण A ज्ञात करें।"
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) । पूरक B = 43.60।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 13: 20-21-29, दूसरा कोण"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 21 और कर्ण c = 29 दिया है।"
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) । उदाहरण 12 के पूरक से मेल खाता है।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 14: 6-8-10 त्रिभुज"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 6 और कर्ण c = 10 दिया है, कोण A ज्ञात करें।"
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) । उदाहरण 6 वाला ही कोण, क्योंकि 6-8-10 एक स्केल किया 3-4-5 है।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 15: 6-8-10, दूसरा कोण"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 8 और कर्ण c = 10 दिया है।"
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) । उदाहरण 1 जैसा ही, जो पुष्टि करता है कि समरूप त्रिभुजों के कोण समान होते हैं।"
          },
          {
            "kind": "h3",
            "text": "उदाहरण 16: 12-16-20 त्रिभुज"
          },
          {
            "kind": "p",
            "text": "आसन्न b = 12 और कर्ण c = 20 दिया है, कोण A ज्ञात करें।"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) । एक और स्केल किया 3-4-5, फिर वही कोण। भुजाओं को स्केल करने से कोण कभी नहीं बदलते।"
          }
        ]
      },
      "arccos-special": {
        "h2": "याद रखने योग्य विशेष कोण मान",
        "blocks": [
          {
            "kind": "p",
            "text": "कुछ arccos मान इतनी बार आते हैं कि उन्हें पहचानने से समय बचता है। ये विशेष समकोण त्रिभुजों से आते हैं।"
          },
          {
            "kind": "p",
            "text": ": आसन्न भुजा कर्ण के बराबर होती है, इसलिए कोण शून्य पर सिमट जाता है। यह अपतित स्थिति है, वास्तविक त्रिभुज नहीं, लेकिन यह पैमाने को टिकाती है।"
          },
          {
            "kind": "p",
            "text": ": 30-60-90 त्रिभुज से। जब आसन्न भुजा कर्ण का लगभग 86.6 प्रतिशत हो, तो कोण 30 डिग्री होता है।"
          },
          {
            "kind": "p",
            "text": ": 45-45-90 त्रिभुज से। बराबर भुजाएँ यही सटीक मान देती हैं।"
          },
          {
            "kind": "p",
            "text": ": 30-60-90 त्रिभुज से, उदाहरण 7 का मामला। जब आसन्न भुजा ठीक कर्ण की आधी हो, तो कोण ठीक 60 डिग्री होता है।"
          },
          {
            "kind": "p",
            "text": ": आसन्न भुजा शून्य तक सिकुड़ जाती है, इसलिए कोण समकोण तक खुल जाता है। शून्य के मामले की तरह, यह एक सीमा है, वास्तविक त्रिभुज कोण नहीं।"
          },
          {
            "kind": "p",
            "text": "इन लैंडमार्कों के बीच, अनुपात बढ़ने पर arccos सुचारू रूप से घटता है। पाँच स्थिर बिंदुओं को याद रखने से आप किसी भी arccos का मानसिक अनुमान लगा सकते हैं: 0.7 का अनुपात 0.5 (60 डिग्री) और 0.866 (30 डिग्री) के बीच बैठता है, 45 डिग्री के थोड़ा करीब। वास्तविक मान लगभग 45.57 डिग्री है।"
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "arccos का उपयोग करते समय आम गलतियाँ",
        "blocks": [
          {
            "kind": "h3",
            "text": "आसन्न भुजा के बजाय सम्मुख भुजा का उपयोग"
          },
          {
            "kind": "p",
            "text": "सबसे बार-बार होने वाली त्रुटि। arccos को कोण A को छूने वाली भुजा चाहिए, उसके सम्मुख वाली भुजा नहीं। यदि आप सम्मुख भुजा arccos में डालते हैं, तो आपको इच्छित कोण का पूरक मिलता है। 3-4-5 त्रिभुज में, arccos(3/5) = 53.13 डिग्री कोण B है, कोण A नहीं। सुधार: त्रिभुज का रेखाचित्र बनाएँ, अपना लक्ष्य कोण अंकित करें, और पता करें कि कौन सी भुजा उसे छूती है।"
          },
          {
            "kind": "h3",
            "text": "अंश में कर्ण रखना"
          },
          {
            "kind": "p",
            "text": "arccos को आसन्न बटा कर्ण चाहिए, जो 1 से नीचे की संख्या है। b/c के बजाय c/b दर्ज करने से 1 से ऊपर का अनुपात मिलता है, और कैलकुलेटर गणितीय त्रुटि देता है। सुधार: arccos अनुपात में कर्ण हमेशा हर होता है।"
          },
          {
            "kind": "h3",
            "text": "arccos को कोसाइन समझना"
          },
          {
            "kind": "p",
            "text": "कई कैलकुलेटरों पर, कोसाइन कुंजी और व्युत्क्रम कोसाइन कुंजी (अक्सर cos या arccos लेबल वाली) एक-दूसरे के पास होती हैं। arccos(0.8) के बजाय cos(0.8) दबाने से 36.87 डिग्री के बजाय 0.6967 मिलता है, जो एक अर्थहीन अनुपात है। सुधार: जाँचें कि आपका कैलकुलेटर डिग्री मोड में है और आपने व्युत्क्रम कुंजी दबाई है।"
          },
          {
            "kind": "h3",
            "text": "डिग्री और रेडियन मिलाना"
          },
          {
            "kind": "p",
            "text": "arccos(0.8) 36.87 डिग्री है लेकिन 0.6435 रेडियन है। यदि आपकी हाथ की गणना 3-4-5 त्रिभुज के लिए 0.64 देती है, तो कैलकुलेटर रेडियन मोड में है। बदलने के लिए 180/pi से गुणा करें, या मोड को डिग्री पर स्विच करें। यह कैलकुलेटर डिग्री में आउटपुट देता है।"
          },
          {
            "kind": "h3",
            "text": "भुजाएँ अलग-अलग इकाइयों में दर्ज करना"
          },
          {
            "kind": "p",
            "text": "आसन्न इंच में और कर्ण फीट में अनुपात को बिगाड़ देता है। पहले एक सामान्य इकाई में बदलें। अनुपात इकाईहीन है, लेकिन तभी जब दोनों इनपुट की इकाई साझा हो।"
          },
          {
            "kind": "h3",
            "text": "अनुपात का बहुत जल्दी पूर्णांकन"
          },
          {
            "kind": "p",
            "text": "arccos(0.8) = 36.87 डिग्री, लेकिन 0.795 से पूर्णांकित arccos(0.80) 37.24 डिग्री देता है। 0 और 1 के करीब के अनुपातों में, जहाँ arccos सबसे तीव्र है, छोटी अनुपात त्रुटियाँ बढ़ जाती हैं। भाग के दौरान पूर्ण परिशुद्धता रखें और केवल अंतिम कोण का पूर्णांकन करें।"
          },
          {
            "kind": "h3",
            "text": "भूल जाना कि कौन सा कोण हल किया था"
          },
          {
            "kind": "p",
            "text": "arccos वह कोण देता है जिसकी आसन्न भुजा आपने दर्ज की थी। यदि आपने कोण B को छूने वाली भुजा दर्ज की थी, तो परिणाम कोण B है। उत्तर को सही कोण नाम से लेबल करें, या पूरक से सत्यापित करें: दोनों न्यून कोणों का योग 90 डिग्री होना चाहिए।"
          }
        ]
      },
      "arccos-verify": {
        "h2": "अपने arccos उत्तर को सत्यापित करना",
        "steps": [
          "परिसर जाँच। परिणाम 0 और 90 डिग्री के बीच सख्ती से होना चाहिए। इससे बाहर कुछ भी अमान्य इनपुट या गलत लेबल की भुजाओं का संकेत देता है।",
          "राउंड-ट्रिप जाँच। cos(A) परिकलित करें और पुष्टि करें कि वह b/c के बराबर है। उदाहरण 1 के लिए, cos(36.87) 0.8 = 4/5। यदि राउंड ट्रिप विफल होती है, तो कोण गलत है।",
          "परस्पर-विधि जाँच। तीसरी भुजा का उपयोग करके arcsin या arctan से पुनः परिकलित करें। यदि arccos(4/5) = 36.87 और arctan(3/4) = 36.87, तो उत्तर पक्का है। असहमति लेबलिंग त्रुटि की ओर इशारा करती है।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "सही arccos गणना की पुष्टि तीन जाँचें करती हैं:"
          }
        ],
        "closingParagraphs": [
          "3-4-5 त्रिभुज के लिए, यह भी सत्यापित करें कि भुजाएँ पाइथागोरस प्रमेय को संतुष्ट करती हैं: 9 + 16 = 25। उनसे निकाले गए कोण पर भरोसा करने से पहले भुजाओं की पुष्टि करना अच्छी प्रथा है, और पाइथागोरस प्रमेय कैलकुलेटर इसे त्वरित बनाता है।",
          "चौथी जाँच पूरक का उपयोग करती है। B = 90 घटा A परिकलित करें, फिर सत्यापित करें कि दूसरे अनुपात का arccos B देता है। उदाहरण 1 में, arccos(3/5) = 53.13, जो 90 घटा 36.87 से मेल खाता है। जब चारों जाँचें पास हो जाती हैं, तो उत्तर संदेह से परे होता है।"
        ]
      },
      "arccos-applications": {
        "h2": "arccos के वास्तविक जीवन में उपयोग",
        "imgAlt": "सर्वेक्षण, छाया, छत कड़ी, और ब्रेस कोण गणनाएँ arccos के साथ दिखाते चार पैनल",
        "figcaption": "वास्तविक दुनिया की arccos समस्याएँ: ढलान कोण, सूर्य की ऊँचाई, कड़ी का ढाल, और ब्रेस स्थापना कोण।",
        "blocks": [
          {
            "kind": "p",
            "text": "arccos वहाँ दिखाई देता है जहाँ ढलान दूरी और क्षैतिज दूरी स्वाभाविक माप हैं। कर्ण ढलान के साथ ही मापा जाता है, और आसन्न भुजा क्षैतिज घटक होती है।"
          },
          {
            "kind": "h3",
            "text": "ढलानों का सर्वेक्षण"
          },
          {
            "kind": "p",
            "text": "एक सर्वेक्षक ढलान के साथ 65 मीटर और क्षैतिज रूप से 60 मीटर मापता है। ढलान कोण arccos(60/65), लगभग 22.6 डिग्री है। यह मानक arccos स्थिति है: तिरछी दूरी टेप से मापना आसान है, क्षैतिज मानचित्र या लेवल से आती है, और सम्मुख भुजा (ऊँचाई) वह है जिसे आप आगे परिकलित कर सकते हैं।"
          },
          {
            "kind": "h3",
            "text": "छायाओं से सूर्य की ऊँचाई"
          },
          {
            "kind": "p",
            "text": "एक 10-मीटर की प्रकाश किरण 8-मीटर की छाया डालती है। सूर्य की ऊँचाई का कोण arccos(8/10), लगभग 36.9 डिग्री है। छाया समस्याएँ स्वाभाविक arccos समस्याएँ हैं क्योंकि छाया भूमि के साथ होती है (आसन्न) और किरण कर्ण है।"
          },
          {
            "kind": "h3",
            "text": "छत कड़ी का ढाल"
          },
          {
            "kind": "p",
            "text": "एक कड़ी 6.5 मीटर तक फैली है जिसकी क्षैतिज दौड़ 6 मीटर है। ओलती पर ढाल कोण arccos(6/6.5), लगभग 22.6 डिग्री है। बढ़ई कड़ी को सीधे मापते हैं और दौड़ को जोड़ के साथ, इसलिए arccos मापों के अनुसार ठीक बैठता है।"
          },
          {
            "kind": "h3",
            "text": "इंजीनियरिंग ब्रेस"
          },
          {
            "kind": "p",
            "text": "एक विकर्ण ब्रेस 4 मीटर मापता है जिसकी 3.5-मीटर क्षैतिज आधार है। ब्रेस कोण arccos(3.5/4), लगभग 28.96 डिग्री है। संरचनात्मक रेखाचित्र ब्रेस की लंबाई और उसका पदचिह्न देते हैं; arccos उन्हें स्थापना कोण में बदल देता है।"
          }
        ]
      },
      "arccos-related": {
        "relatedItems": [
          "समकोण त्रिभुज कोण कैलकुलेटर",
          "समकोण त्रिभुज साइन से कोण कैलकुलेटर",
          "समकोण त्रिभुज टैंजेंट से कोण कैलकुलेटर",
          "समकोण त्रिभुज लुप्त कोण कैलकुलेटर",
          "समकोण त्रिभुज त्रिकोणमितीय अनुपात कैलकुलेटर",
          "कोसाइन अनुपात कैलकुलेटर"
        ],
        "h2": "संबंधित समकोण त्रिभुज कैलकुलेटर देखें"
      },
      "arccos-conclusion": {
        "h2": "कोसाइन से कोई भी कोण आत्मविश्वास से निकालें",
        "blocks": [
          {
            "kind": "p",
            "text": "आसन्न भुजा की पहचान से शुरू करें: वह भुजा जो आपके लक्ष्य कोण को छूती है। पुष्टि करें कि कर्ण सबसे लंबी भुजा है। भाग दें, arccos लगाएँ, और डिग्री में कोण पढ़ें। पहला घटाकर 90 में से दूसरा कोण निकालें। राउंड-ट्रिप जाँच, परस्पर-विधि गणना, और कोण योग से सत्यापित करें। इन चरणों के साथ, कोई भी आसन्न-और-कर्ण समस्या एक विश्वसनीय दिनचर्या में बदल जाती है। अपने नंबर चलाने के लिए इस पृष्ठ के शीर्ष पर कैलकुलेटर पर वापस जाएँ।"
          }
        ]
      }
    }
  },
  "es": {
    "faqs": [
      {
        "answer": "Significa que divides el lado adyacente entre la hipotenusa y luego trabajas hacia atrás desde ese decimal para encontrar el ángulo cuyo coseno es igual a él. El resultado es el ángulo agudo entre el lado adyacente y la hipotenusa.",
        "question": "¿Qué significa realmente A = arccos(b/c)?"
      },
      {
        "answer": "Usa arccos cuando conozcas el lado adyacente y la hipotenusa. Usa arcsin cuando conozcas el lado opuesto y la hipotenusa. Ambos dan el mismo ángulo para el mismo triángulo; la elección depende de qué lados mediste.",
        "question": "¿Cuándo debo usar arccos en lugar de arcsin?"
      },
      {
        "answer": "La causa más común es una razón mayor que 1, que ocurre cuando el lado adyacente introducido es más largo que la hipotenusa. En un triángulo rectángulo válido la hipotenusa siempre es la más larga, así que revisa tus etiquetas de lados.",
        "question": "¿Por qué me da un error matemático el arccos?"
      },
      {
        "answer": "Sí. Esa es la principal ventaja del arccos: solo necesita el lado adyacente y la hipotenusa. El lado opuesto nunca entra en el cálculo.",
        "question": "¿Puedo usar el arccos sin conocer el lado opuesto?"
      },
      {
        "answer": "El coseno toma un ángulo y devuelve una razón: cos(60 grados) = 0.5. El arccos invierte esto: toma una razón y devuelve el ángulo, así que arccos(0.5) = 60 grados. Usa el coseno cuando conozcas el ángulo; usa el arccos cuando conozcas los lados.",
        "question": "¿Cuál es la diferencia entre cos y arccos?"
      },
      {
        "answer": "Porque describen el mismo ángulo geométrico a través de diferentes pares de lados. En un triángulo 3-4-5, arccos(4/5), arcsin(3/5) y arctan(3/4) son todos iguales a 36.87 grados. La concordancia entre métodos confirma las etiquetas correctas de los lados.",
        "question": "¿Por qué arccos, arcsin y arctan dan la misma respuesta?"
      },
      {
        "answer": "El ángulo es exactamente 60 grados. Este es el triángulo especial 30-60-90, donde el lado adyacente al ángulo de 60 grados es la mitad de la hipotenusa.",
        "question": "¿Qué significa si b/c es exactamente igual a 0.5?"
      },
      {
        "answer": "Esta calculadora usa grados, el estándar para construcción, topografía y geometría en el aula. Si calculas a mano, asegúrate de que la calculadora esté en modo de grados; un resultado en modo de radianes como 0.64 se convierte a 36.87 grados multiplicando por 180/pi.",
        "question": "¿La respuesta debe estar en grados o en radianes?"
      },
      {
        "answer": "Resta de 90 grados. Si el arccos da A = 36.87 grados, entonces B = 90 - 36.87 = 53.13 grados. No se necesita más trigonometría.",
        "question": "¿Cómo encuentro el otro ángulo agudo?"
      },
      {
        "answer": "Solo como límite: arccos(0) = 90 grados, pero un lado adyacente cero significa un triángulo degenerado, no uno real. Los ángulos válidos del triángulo rectángulo del arccos siempre están estrictamente entre 0 y 90 grados.",
        "question": "¿El resultado del arccos puede ser alguna vez 90 grados?"
      },
      {
        "answer": "Calcula cos(A) y confirma que sea igual a b/c. También recalcula con arcsin o arctan usando el tercer lado; todos los métodos deben coincidir. Por último, comprueba que ambos ángulos agudos sumen exactamente 90 grados.",
        "question": "¿Cómo puedo comprobar mi respuesta del arccos?"
      },
      {
        "answer": "No. Los triángulos semejantes tienen ángulos idénticos. Un triángulo 3-4-5 y un triángulo 6-8-10 dan ambos arccos(0.8) = 36.87 grados, porque la razón b/c no cambia con la escala.",
        "question": "¿Escalar el triángulo cambia el resultado del arccos?"
      }
    ],
    "relatedHeading": "Explora las calculadoras de triángulo rectángulo relacionadas",
    "relatedItems": [
      "Calculadora de ángulo del triángulo rectángulo",
      "Calculadora de ángulo a partir del seno del triángulo rectángulo",
      "Calculadora de ángulo a partir de la tangente del triángulo rectángulo",
      "Calculadora de ángulo faltante del triángulo rectángulo",
      "Calculadora de razones trigonométricas del triángulo rectángulo",
      "Calculadora de la razón coseno"
    ],
    "tocHeading": "En esta guía",
    "tocItems": {
      "arccos-intro": "¿Qué es la calculadora de ángulo a partir del coseno?",
      "arccos-what": "Entender arccos (coseno inverso)",
      "arccos-vs": "arccos vs. arcsin vs. arctan",
      "arccos-anatomy": "Lado adyacente e hipotenusa",
      "arccos-howto": "Cómo usar la calculadora",
      "arccos-examples": "16 ejemplos resueltos",
      "arccos-special": "Valores de ángulos especiales",
      "arccos-mistakes": "Errores comunes",
      "arccos-verify": "Verificar tu respuesta",
      "arccos-applications": "Aplicaciones en la vida real",
      "arccos-related": "Calculadoras relacionadas",
      "arccos-faq": "Preguntas frecuentes"
    },
    "sections": {
      "arccos-intro": {
        "h2": "¿Qué es la calculadora de ángulo del triángulo rectángulo a partir del coseno?",
        "blocks": [
          {
            "kind": "p",
            "text": "La calculadora de ángulo del triángulo rectángulo a partir del coseno encuentra un ángulo agudo cuando conoces el lado adyacente y la hipotenusa. Aplica la función coseno inverso, escrita arccos o cos, a la razón de esos dos lados. El resultado es el ángulo A en grados."
          },
          {
            "kind": "p",
            "text": "Esta herramienta existe para una situación de medición específica: puedes medir el lado junto a tu ángulo objetivo y el lado más largo del triángulo, pero el lado opuesto es desconocido o difícil de alcanzar. En lugar de calcular primero el lado opuesto, arccos lo omite por completo y convierte la razón adyacente-sobre-hipotenusa directamente en el ángulo."
          },
          {
            "kind": "p",
            "text": "Por ejemplo, un lado adyacente de 4 y una hipotenusa de 5 dan la razón 0.8. El arccos de 0.8 es aproximadamente 36.87 grados. Ese es el ángulo A. El otro ángulo agudo se obtiene con la regla del complemento: 90 menos 36.87, o sea 53.13 grados."
          },
          {
            "kind": "p",
            "text": "Arccos es una de las tres herramientas trigonométricas inversas de este sitio. Si tus lados conocidos son el lado opuesto y la hipotenusa, la calculadora de ángulo a partir del seno es la opción correcta. Si conoces ambos catetos pero no la hipotenusa, usa la calculadora de ángulo a partir de la tangente. Esta página cubre el caso del coseno en profundidad."
          }
        ]
      },
      "arccos-what": {
        "h2": "Entender arccos (coseno inverso)",
        "imgAlt": "Diagrama que muestra los dos pasos del arccos: dividir b entre c y luego aplicar arccos para obtener el ángulo",
        "figcaption": "Cómo funciona el arccos: divide el lado adyacente entre la hipotenusa y luego aplica el coseno inverso para recuperar el ángulo.",
        "blocks": [
          {
            "kind": "p",
            "text": "El coseno normal toma un ángulo y devuelve una razón. El coseno de 60 grados es 0.5. El arccos invierte esto: toma una razón y devuelve el ángulo. El arccos de 0.5 es 60 grados. Las dos funciones se anulan entre sí, por eso el arccos también se escribe como cos."
          },
          {
            "kind": "p",
            "text": "La fórmula que usa esta calculadora es . Aquí b es el lado adyacente, c es la hipotenusa y A es el ángulo entre ellos. La razón b/c siempre está entre 0 y 1 en un triángulo rectángulo válido, porque el lado adyacente siempre es más corto que la hipotenusa."
          },
          {
            "kind": "p",
            "text": "Piensa en el arccos como una pregunta: \"¿Qué ángulo tiene este valor de coseno?\" Si b/c es igual a 0.8, la pregunta se convierte en \"¿qué ángulo tiene un coseno de 0.8?\" La respuesta, 36.87 grados, es el ángulo cuyo lado adyacente mide el 80 por ciento de la hipotenusa."
          },
          {
            "kind": "h3",
            "text": "La razón cuenta una historia"
          },
          {
            "kind": "p",
            "text": "El valor de b/c describe la forma del triángulo. Una razón cercana a 1 significa que el lado adyacente es casi tan largo como la hipotenusa, por lo que el ángulo entre ellos es diminuto. Una razón cercana a 0 significa que el lado adyacente es muy corto en comparación con la hipotenusa, por lo que el ángulo se abre mucho hacia los 90 grados. Una razón de exactamente 0.5 siempre significa 60 grados."
          },
          {
            "kind": "h3",
            "text": "Dominio de arccos"
          },
          {
            "kind": "p",
            "text": "El arccos solo acepta entradas de 0 a 1 en este contexto geométrico. Una razón mayor que 1 es imposible en un triángulo rectángulo y señala un error de etiquetado: la hipotenusa debe ser el denominador y debe ser el lado más largo. Una razón negativa describiría un ángulo obtuso, que no puede aparecer como el ángulo A en un triángulo rectángulo."
          }
        ]
      },
      "arccos-vs": {
        "h2": "Arccos frente a arcsin frente a arctan: cuándo usar cada uno",
        "blocks": [
          {
            "kind": "p",
            "text": "Las tres funciones inversas encuentran el mismo ángulo cuando se aplican al mismo triángulo. Solo difieren en los lados que requieren. Elegir bien te ahorra calcular un lado que no necesitas."
          },
          {
            "kind": "p",
            "text": "Usa arccos cuando conozcas el lado adyacente (b) y la hipotenusa (c). La fórmula es . Esta es la opción natural cuando la hipotenusa se midió directamente, por ejemplo con una cinta a lo largo de una pendiente, y la distancia horizontal es conocida."
          },
          {
            "kind": "p",
            "text": "Usa arcsin cuando conozcas el lado opuesto (a) y la hipotenusa (c). La fórmula es . Los problemas de altura favorecen el arcsin: la elevación vertical es opuesta al ángulo a nivel del suelo. La calculadora de ángulo a partir del seno maneja este caso."
          },
          {
            "kind": "p",
            "text": "Usa arctan cuando conozcas ambos catetos (a y b) pero no la hipotenusa. La fórmula es . Las mediciones de campo como la elevación sobre el avance de un techo favorecen el arctan porque ambos catetos se miden directamente. Consulta la calculadora de ángulo a partir de la tangente para ese método."
          },
          {
            "kind": "h3",
            "text": "Deben coincidir"
          },
          {
            "kind": "p",
            "text": "Para un mismo triángulo, arccos(b/c), arcsin(a/c) y arctan(a/b) producen el ángulo idéntico. En un triángulo 3-4-5, arccos(4/5), arcsin(3/5) y arctan(3/4) son todos iguales a 36.87 grados. Si dos métodos no coinciden, un lado está mal etiquetado. Esta comprobación cruzada es la verificación más fiable disponible, y la calculadora de razones trigonométricas puede confirmar las tres razones a la vez."
          },
          {
            "kind": "h3",
            "text": "¿Por qué no usar siempre arctan?"
          },
          {
            "kind": "p",
            "text": "Arctan necesita ambos catetos. Si el lado opuesto es desconocido y difícil de medir, calcularlo primero solo para usar arctan añade un paso innecesario y una oportunidad extra de error. Arccos va directamente de los dos lados que tienes al ángulo que quieres. Adapta la función a tus mediciones, no a la costumbre."
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "Lado adyacente e hipotenusa: las dos entradas",
        "imgAlt": "Triángulo rectángulo con el lado adyacente b y la hipotenusa c resaltados para la fórmula del arccos",
        "figcaption": "Anatomía para el arccos: b es el lado adyacente que toca el ángulo A, c es la hipotenusa opuesta al ángulo recto.",
        "blocks": [
          {
            "kind": "p",
            "text": "El arccos necesita exactamente dos lados: el lado adyacente b y la hipotenusa c. Etiquetar bien estos lados es toda la batalla. Todo lo que sigue es aritmética."
          },
          {
            "kind": "h3",
            "text": "Identificar el lado adyacente"
          },
          {
            "kind": "p",
            "text": "El lado adyacente es el cateto que toca el ángulo A. Forma un borde del propio ángulo. En el diagrama de abajo, el lado b corre por la parte inferior desde el ángulo recto hasta el ángulo A. Si estás resolviendo el otro ángulo agudo B, las etiquetas se intercambian: el lado adyacente a B es el que toca a B."
          },
          {
            "kind": "h3",
            "text": "Identificar la hipotenusa"
          },
          {
            "kind": "p",
            "text": "La hipotenusa es el lado opuesto al ángulo recto. Siempre es el lado más largo del triángulo. Nunca toca el vértice del ángulo recto. Si tu \"hipotenusa\" no es la más larga de tus tres mediciones, vuelve a etiquetar antes de calcular. La calculadora del teorema de Pitágoras puede confirmar cuál lado es el más largo cuando tienes los tres."
          },
          {
            "kind": "h3",
            "text": "Por qué el lado opuesto queda fuera"
          },
          {
            "kind": "p",
            "text": "El coseno se define como adyacente sobre hipotenusa. El lado opuesto simplemente no aparece en esta razón. Esa es la idea de esta calculadora: cuando el lado opuesto es desconocido, está enterrado o es irrelevante para tu configuración de medición, el arccos aun así entrega el ángulo. No estás ignorando el lado opuesto; estás usando una razón que nunca lo necesitó."
          }
        ]
      },
      "arccos-howto": {
        "h2": "Cómo usar la calculadora de ángulo a partir del coseno",
        "imgAlt": "Ejemplo resuelto en cuatro pasos del arccos con b igual a 4 y c igual a 5",
        "figcaption": "Ejemplo resuelto: b = 4, c = 5 da A = arccos(0.8), aproximadamente 36.87 grados, verificado por ida y vuelta.",
        "steps": [
          "Confirma el ángulo recto. La calculadora solo funciona para triángulos rectángulos. Identifica primero la esquina de 90 grados.",
          "Elige tu ángulo objetivo. Decide si vas a resolver el ángulo A o el ángulo B. El lado adyacente se define en relación con esta elección.",
          "Mide el lado adyacente b. Este es el cateto que toca tu ángulo objetivo. Regístralo en cualquier unidad.",
          "Mide la hipotenusa c. Este es el lado más largo, frente al ángulo recto. Usa la misma unidad que para b.",
          "Comprueba que b sea menor que c. Si no lo es, los lados están mal etiquetados. La hipotenusa debe ser la más larga.",
          "Introduce ambos valores y pulsa Calcular. La herramienta calcula b/c, aplica arccos y devuelve el ángulo A en grados.",
          "Encuentra el segundo ángulo. Resta de 90 grados: B = 90 menos A.",
          "Verifica. Calcula cos(A) en una calculadora y confirma que sea igual a b/c. Si lo es, la respuesta es sólida."
        ]
      },
      "arccos-examples": {
        "h2": "16 ejemplos resueltos",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada ejemplo sigue los mismos cuatro pasos: escribe la fórmula, sustituye, divide, aplica arccos. Los ángulos están redondeados a dos decimales."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 1: el triángulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 4 y la hipotenusa c = 5, encuentra el ángulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) . El complemento B = 53.13."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 2: el triángulo 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 12 y la hipotenusa c = 13, encuentra el ángulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) . El complemento B = 67.38."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 3: el triángulo 8-15-17"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 8 y la hipotenusa c = 17, encuentra el ángulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) . El complemento B = 28.07."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 4: mismo triángulo, otro ángulo"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 15 y la hipotenusa c = 17 (resolviendo el ángulo B del triángulo 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) . Nota que 61.93 + 28.07 = 90, como se requiere."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 5: 5-12-13, otro ángulo"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 5 y la hipotenusa c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) . Esto coincide con el complemento del ejemplo 2."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 6: 3-4-5, otro ángulo"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 3 y la hipotenusa c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) . Esto coincide con el complemento del ejemplo 1."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 7: el caso especial de 60 grados"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 1 y la hipotenusa c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60 exactos. Este es el triángulo especial 30-60-90. La calculadora de triángulos rectángulos especiales cubre estos valores exactos."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 8: el triángulo 7-24-25"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 7 y la hipotenusa c = 25, encuentra el ángulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) . El complemento B = 16.26."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 9: 7-24-25, otro ángulo"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 24 y la hipotenusa c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) . Coincide con el complemento del ejemplo 8."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 10: el triángulo 9-40-41"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 9 y la hipotenusa c = 41, encuentra el ángulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) . Un lado adyacente pequeño da un ángulo amplio."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 11: 9-40-41, otro ángulo"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 40 y la hipotenusa c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) . Nota que 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 12: el triángulo 20-21-29"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 20 y la hipotenusa c = 29, encuentra el ángulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) . El complemento B = 43.60."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 13: 20-21-29, otro ángulo"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 21 y la hipotenusa c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) . Coincide con el complemento del ejemplo 12."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 14: el triángulo 6-8-10"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 6 y la hipotenusa c = 10, encuentra el ángulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) . El mismo ángulo que en el ejemplo 6, ya que 6-8-10 es un 3-4-5 escalado."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 15: 6-8-10, otro ángulo"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 8 y la hipotenusa c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) . Igual que en el ejemplo 1, lo que confirma que los triángulos semejantes comparten los ángulos."
          },
          {
            "kind": "h3",
            "text": "Ejemplo 16: el triángulo 12-16-20"
          },
          {
            "kind": "p",
            "text": "Dado el adyacente b = 12 y la hipotenusa c = 20, encuentra el ángulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) . Otro 3-4-5 escalado, el mismo ángulo de nuevo. Escalar los lados nunca cambia los ángulos."
          }
        ]
      },
      "arccos-special": {
        "h2": "Valores de ángulos especiales que vale la pena memorizar",
        "blocks": [
          {
            "kind": "p",
            "text": "Algunos valores del arccos aparecen tan a menudo que reconocerlos ahorra tiempo. Vienen de los triángulos rectángulos especiales."
          },
          {
            "kind": "p",
            "text": ": el lado adyacente es igual a la hipotenusa, por lo que el ángulo colapsa a cero. Este es un caso degenerado, no un triángulo real, pero ancla la escala."
          },
          {
            "kind": "p",
            "text": ": del triángulo 30-60-90. Cuando el lado adyacente es aproximadamente el 86.6 por ciento de la hipotenusa, el ángulo es 30 grados."
          },
          {
            "kind": "p",
            "text": ": del triángulo 45-45-90. Los catetos iguales dan este valor exacto."
          },
          {
            "kind": "p",
            "text": ": del triángulo 30-60-90, el caso del ejemplo 7. Cuando el lado adyacente es exactamente la mitad de la hipotenusa, el ángulo es exactamente 60 grados."
          },
          {
            "kind": "p",
            "text": ": el lado adyacente se reduce a cero, por lo que el ángulo se abre hasta el ángulo recto. Como en el caso cero, esto es un límite, no un ángulo real de un triángulo."
          },
          {
            "kind": "p",
            "text": "Entre estos puntos de referencia, el arccos disminuye suavemente a medida que aumenta la razón. Memorizar los cinco puntos de anclaje te permite estimar cualquier arccos mentalmente: una razón de 0.7 se sitúa entre 0.5 (60 grados) y 0.866 (30 grados), un poco más cerca de 45 grados. El valor real es aproximadamente 45.57 grados."
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "Errores comunes al usar el arccos",
        "blocks": [
          {
            "kind": "h3",
            "text": "Usar el lado opuesto en lugar del adyacente"
          },
          {
            "kind": "p",
            "text": "El error más frecuente. El arccos necesita el lado que toca el ángulo A, no el que está frente a él. Si introduces el lado opuesto en el arccos, obtienes el complemento del ángulo previsto. En un triángulo 3-4-5, arccos(3/5) = 53.13 grados es el ángulo B, no el ángulo A. Solución: dibuja el triángulo, marca tu ángulo objetivo y traza qué cateto lo toca."
          },
          {
            "kind": "h3",
            "text": "Poner la hipotenusa en el numerador"
          },
          {
            "kind": "p",
            "text": "El arccos espera adyacente sobre hipotenusa, un número menor que 1. Introducir c/b en lugar de b/c da una razón mayor que 1, y la calculadora devuelve un error matemático. Solución: la hipotenusa siempre es el denominador en la razón del arccos."
          },
          {
            "kind": "h3",
            "text": "Confundir el arccos con el coseno"
          },
          {
            "kind": "p",
            "text": "En muchas calculadoras, la tecla del coseno y la tecla del coseno inverso (a menudo etiquetada cos o arccos) están cerca. Pulsar cos(0.8) en lugar de arccos(0.8) da 0.6967, una razón sin sentido, en lugar de 36.87 grados. Solución: comprueba que tu calculadora esté en modo de grados y que hayas pulsado la tecla inversa."
          },
          {
            "kind": "h3",
            "text": "Mezclar grados y radianes"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) es 36.87 grados pero 0.6435 radianes. Si tu cálculo a mano da 0.64 para un triángulo 3-4-5, la calculadora está en modo de radianes. Multiplica por 180/pi para convertir, o cambia el modo a grados. Esta calculadora da la salida en grados."
          },
          {
            "kind": "h3",
            "text": "Introducir los lados en distintas unidades"
          },
          {
            "kind": "p",
            "text": "El adyacente en pulgadas y la hipotenusa en pies corrompe la razón. Convierte primero a una unidad común. La razón no tiene unidades, pero solo cuando ambas entradas comparten la unidad."
          },
          {
            "kind": "h3",
            "text": "Redondear la razón demasiado pronto"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 grados, pero arccos(0.80) redondeado de 0.795 da 37.24 grados. Cerca de razones de 0 y 1, donde el arccos es más empinado, los pequeños errores de la razón se magnifican. Mantén la precisión completa durante la división y redondea solo el ángulo final."
          },
          {
            "kind": "h3",
            "text": "Olvidar qué ángulo se resolvió"
          },
          {
            "kind": "p",
            "text": "El arccos devuelve el ángulo cuyo lado adyacente introdujiste. Si introdujiste el lado que toca el ángulo B, el resultado es el ángulo B. Etiqueta la respuesta con el nombre correcto del ángulo, o verifica con el complemento: los dos ángulos agudos deben sumar 90 grados."
          }
        ]
      },
      "arccos-verify": {
        "h2": "Verificar tu respuesta del arccos",
        "steps": [
          "Comprobación de rango. El resultado debe estar estrictamente entre 0 y 90 grados. Cualquier valor fuera señala entradas inválidas o lados mal etiquetados.",
          "Comprobación de ida y vuelta. Calcula cos(A) y confirma que sea igual a b/c. Para el ejemplo 1, cos(36.87) 0.8 = 4/5. Si la ida y vuelta falla, el ángulo está mal.",
          "Comprobación con otro método. Recalcula con arcsin o arctan usando el tercer lado. Si arccos(4/5) = 36.87 y arctan(3/4) = 36.87, la respuesta es sólida. La discrepancia apunta a un error de etiquetado."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Tres comprobaciones confirman un cálculo correcto del arccos:"
          }
        ],
        "closingParagraphs": [
          "Para el triángulo 3-4-5, verifica también que los lados satisfagan el teorema de Pitágoras: 9 + 16 = 25. Confirmar los lados antes de confiar en el ángulo derivado de ellos es una buena práctica, y la calculadora del teorema de Pitágoras lo hace rápido.",
          "Una cuarta comprobación usa el complemento. Calcula B = 90 menos A, y luego verifica que el arccos de la otra razón dé B. En el ejemplo 1, arccos(3/5) = 53.13, que coincide con 90 menos 36.87. Cuando las cuatro comprobaciones pasan, la respuesta está fuera de toda duda."
        ]
      },
      "arccos-applications": {
        "h2": "Aplicaciones del arccos en la vida real",
        "imgAlt": "Cuatro paneles que muestran cálculos con arccos para topografía, sombras, vigas de techo y ángulos de puntales",
        "figcaption": "Problemas del mundo real con arccos: ángulos de pendiente, elevación del sol, inclinación de vigas y ángulos de instalación de puntales.",
        "blocks": [
          {
            "kind": "p",
            "text": "El arccos aparece dondequiera que una distancia en pendiente y una distancia horizontal sean las mediciones naturales. La hipotenusa se mide a lo largo de la propia pendiente, y el lado adyacente es la componente horizontal."
          },
          {
            "kind": "h3",
            "text": "Topografía de pendientes"
          },
          {
            "kind": "p",
            "text": "Un topógrafo mide 65 metros a lo largo de una pendiente y 60 metros en horizontal. El ángulo de la pendiente es arccos(60/65), aproximadamente 22.6 grados. Esta es la situación típica del arccos: la distancia inclinada es fácil de medir con cinta, la horizontal viene del mapa o de un nivel, y el lado opuesto (la elevación) es lo que podrías calcular a continuación."
          },
          {
            "kind": "h3",
            "text": "Elevación del sol a partir de sombras"
          },
          {
            "kind": "p",
            "text": "Un rayo de luz de 10 metros proyecta una sombra de 8 metros. El ángulo de elevación del sol es arccos(8/10), aproximadamente 36.9 grados. Los problemas de sombras son problemas naturales de arccos porque la sombra yace a lo largo del suelo (adyacente) y el rayo es la hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Inclinación de vigas de techo"
          },
          {
            "kind": "p",
            "text": "Una viga abarca 6.5 metros con un avance horizontal de 6 metros. El ángulo de inclinación en el alero es arccos(6/6.5), aproximadamente 22.6 grados. Los carpinteros miden la viga directamente y el avance a lo largo de la vigueta, por lo que el arccos se adapta a las mediciones tal como se toman."
          },
          {
            "kind": "h3",
            "text": "Puntales de ingeniería"
          },
          {
            "kind": "p",
            "text": "Un puntal diagonal mide 4 metros con una base horizontal de 3.5 metros. El ángulo del puntal es arccos(3.5/4), aproximadamente 28.96 grados. Los bocetos estructurales dan la longitud del puntal y su huella; el arccos los convierte en el ángulo de instalación."
          }
        ]
      },
      "arccos-related": {
        "relatedItems": [
          "Calculadora de ángulo del triángulo rectángulo",
          "Calculadora de ángulo a partir del seno del triángulo rectángulo",
          "Calculadora de ángulo a partir de la tangente del triángulo rectángulo",
          "Calculadora de ángulo faltante del triángulo rectángulo",
          "Calculadora de razones trigonométricas del triángulo rectángulo",
          "Calculadora de la razón coseno"
        ],
        "h2": "Explora las calculadoras de triángulo rectángulo relacionadas"
      },
      "arccos-conclusion": {
        "h2": "Encuentra cualquier ángulo a partir del coseno con confianza",
        "blocks": [
          {
            "kind": "p",
            "text": "Empieza por identificar el lado adyacente: el cateto que toca tu ángulo objetivo. Confirma que la hipotenusa es el lado más largo. Divide, aplica arccos y lee el ángulo en grados. Obtén el segundo ángulo restándolo de 90. Verifica con la comprobación de ida y vuelta, un cálculo con otro método y la suma de ángulos. Con estos pasos, cualquier problema de adyacente e hipotenusa se reduce a una rutina fiable. Vuelve a la calculadora en la parte superior de esta página para ejecutar tus números."
          }
        ]
      }
    }
  },
  "ru": {
    "faqs": [
      {
        "question": "Что на самом деле означает A = arccos(b/c)?",
        "answer": "Это означает, что вы делите прилежащую сторону на гипотенузу, а затем идёте обратно от этого десятичного числа к углу, чей косинус ему равен. Результат, это острый угол между прилежащей стороной и гипотенузой."
      },
      {
        "question": "Когда следует использовать арккосинус вместо арксинуса?",
        "answer": "Используйте арккосинус, когда известны прилежащая сторона и гипотенуза. Используйте арксинус, когда известны противолежащая сторона и гипотенуза. Оба дают один и тот же угол для одного треугольника; выбор зависит от того, какие стороны вы измерили."
      },
      {
        "question": "Почему я получаю математическую ошибку от арккосинуса?",
        "answer": "Самая частая причина, отношение больше 1, что случается, когда введённая прилежащая сторона длиннее гипотенузы. В правильном прямоугольном треугольнике гипотенуза всегда самая длинная, поэтому проверьте обозначения сторон."
      },
      {
        "question": "Можно ли использовать арккосинус, не зная противолежащей стороны?",
        "answer": "Да. Это главное преимущество арккосинуса: ему нужны только прилежащая сторона и гипотенуза. Противолежащая сторона никогда не входит в расчёт."
      },
      {
        "question": "В чём разница между cos и arccos?",
        "answer": "Косинус берёт угол и возвращает отношение: cos(60 градусов) = 0.5. Арккосинус действует наоборот: он берёт отношение и возвращает угол, поэтому arccos(0.5) = 60 градусов. Используйте косинус, когда известен угол; используйте арккосинус, когда известны стороны."
      },
      {
        "question": "Почему arccos, arcsin и arctan дают один и тот же ответ?",
        "answer": "Потому что они описывают один и тот же геометрический угол через разные пары сторон. В треугольнике 3-4-5 arccos(4/5), arcsin(3/5) и arctan(3/4) равны 36.87 градуса. Согласование методов подтверждает правильные обозначения сторон."
      },
      {
        "question": "Что означает, если b/c равно ровно 0.5?",
        "answer": "Угол равен ровно 60 градусам. Это особый треугольник 30-60-90, где сторона, прилежащая к углу 60 градусов, равна половине гипотенузы."
      },
      {
        "question": "Ответ должен быть в градусах или радианах?",
        "answer": "Этот калькулятор использует градусы, стандарт для строительства, геодезии и школьной геометрии. Если считаете вручную, убедитесь, что калькулятор в режиме градусов; результат в режиме радиан, например 0.64, переводится в 36.87 градуса умножением на 180/pi."
      },
      {
        "question": "Как найти другой острый угол?",
        "answer": "Вычтите из 90 градусов. Если арккосинус даёт A = 36.87 градуса, то B = 90 − 36.87 = 53.13 градуса. Дальнейшей тригонометрии не требуется."
      },
      {
        "question": "Может ли результат арккосинуса быть 90 градусов?",
        "answer": "Только как предел: arccos(0) = 90 градусов, но нулевая прилежащая сторона означает вырожденный треугольник, а не настоящий. Углы правильного прямоугольного треугольника, найденные арккосинусом, всегда строго между 0 и 90 градусами."
      },
      {
        "question": "Как проверить ответ арккосинуса?",
        "answer": "Вычислите cos(A) и убедитесь, что он равен b/c. Пересчитайте также через арксинус или арктангенс, используя третью сторону; все методы должны сойтись. Наконец, проверьте, что оба острых угла в сумме дают ровно 90 градусов."
      },
      {
        "question": "Меняет ли масштабирование треугольника результат арккосинуса?",
        "answer": "Нет. Подобные треугольники имеют одинаковые углы. Треугольник 3-4-5 и треугольник 6-8-10 оба дают arccos(0.8) = 36.87 градуса, потому что отношение b/c при масштабировании не меняется."
      }
    ],
    "relatedHeading": "Изучите связанные калькуляторы прямоугольного треугольника",
    "relatedItems": [
      "Калькулятор углов прямоугольного треугольника",
      "Калькулятор угла прямоугольного треугольника по синусу",
      "Калькулятор угла прямоугольного треугольника по тангенсу",
      "Калькулятор недостающего угла прямоугольного треугольника",
      "Калькулятор тригонометрических отношений прямоугольного треугольника",
      "Калькулятор косинуса"
    ],
    "tocHeading": "В этом руководстве",
    "tocItems": {
      "arccos-intro": "Что такое калькулятор угла по косинусу?",
      "arccos-what": "Понимание арккосинуса (обратного косинуса)",
      "arccos-vs": "Арккосинус, арксинус и арктангенс",
      "arccos-anatomy": "Прилежащая сторона и гипотенуза",
      "arccos-howto": "Как пользоваться калькулятором",
      "arccos-examples": "16 примеров с решением",
      "arccos-special": "Особые значения углов",
      "arccos-mistakes": "Типичные ошибки",
      "arccos-verify": "Проверка ответа",
      "arccos-applications": "Применение в реальной жизни",
      "arccos-related": "Связанные калькуляторы",
      "arccos-faq": "Часто задаваемые вопросы"
    },
    "sections": {
      "arccos-intro": {
        "h2": "Что такое калькулятор угла прямоугольного треугольника по косинусу?",
        "blocks": [
          {
            "kind": "p",
            "text": "Калькулятор угла прямоугольного треугольника по косинусу находит острый угол, когда известны прилежащая сторона и гипотенуза. Он применяет функцию обратного косинуса, записываемую как arccos или cos⁻¹, к отношению этих двух сторон. Результат, это угол A в градусах."
          },
          {
            "kind": "p",
            "text": "Этот инструмент существует для конкретной ситуации измерения: вы можете измерить сторону рядом с нужным углом и самую длинную сторону треугольника, а противолежащая сторона неизвестна или труднодоступна. Вместо того чтобы сначала вычислять противолежащую сторону, арккосинус полностью её пропускает и преобразует отношение прилежащей стороны к гипотенузе напрямую в угол."
          },
          {
            "kind": "p",
            "text": "Например, прилежащая сторона 4 и гипотенуза 5 дают отношение 0.8. Арккосинус от 0.8 составляет примерно 36.87 градуса. Это угол A. Другой острый угол следует из правила дополнительных углов: 90 минус 36.87, то есть 53.13 градуса."
          },
          {
            "kind": "p",
            "text": "Арккосинус, это один из трёх обратных тригонометрических инструментов на этом сайте. Если ваши известные стороны, это противолежащая сторона и гипотенуза, калькулятор угла по синусу, правильный выбор. Если известны оба катета, но не гипотенуза, используйте калькулятор угла по тангенсу. Эта страница полностью посвящена случаю с косинусом."
          }
        ]
      },
      "arccos-what": {
        "h2": "Понимание арккосинуса (обратного косинуса)",
        "imgAlt": "Схема двух шагов арккосинуса: разделить b на c, затем применить арккосинус, чтобы получить угол",
        "figcaption": "Как работает арккосинус: разделите прилежащую сторону на гипотенузу, затем примените обратный косинус, чтобы восстановить угол.",
        "blocks": [
          {
            "kind": "p",
            "text": "Обычный косинус берёт угол и возвращает отношение. Косинус 60 градусов равен 0.5. Арккосинус делает наоборот: он берёт отношение и возвращает угол. Арккосинус от 0.5 равен 60 градусам. Эти две функции взаимно обратны, поэтому арккосинус также записывают как cos⁻¹."
          },
          {
            "kind": "p",
            "text": "Формула, используемая этим калькулятором, имеет вид A = arccos(b/c). Здесь b, это прилежащая сторона, c, это гипотенуза, а A, это угол между ними. Отношение b/c для правильного прямоугольного треугольника всегда находится между 0 и 1, потому что прилежащая сторона всегда короче гипотенузы."
          },
          {
            "kind": "p",
            "text": "Думайте об арккосинусе как о вопросе: «Какой угол имеет такое значение косинуса?» Если b/c равно 0.8, вопрос звучит так: «у какого угла косинус равен 0.8?» Ответ, 36.87 градуса, это угол, у которого прилежащая сторона составляет 80 процентов длины гипотенузы."
          },
          {
            "kind": "h3",
            "text": "Отношение рассказывает историю"
          },
          {
            "kind": "p",
            "text": "Значение b/c описывает форму треугольника. Отношение близкое к 1 означает, что прилежащая сторона почти равна гипотенузе, поэтому угол между ними крошечный. Отношение близкое к 0 означает, что прилежащая сторона очень короткая по сравнению с гипотенузой, поэтому угол широко раскрывается к 90 градусам. Отношение ровно 0.5 всегда означает 60 градусов."
          },
          {
            "kind": "h3",
            "text": "Область определения арккосинуса"
          },
          {
            "kind": "p",
            "text": "В этом геометрическом контексте арккосинус принимает только входы от 0 до 1. Отношение больше 1 для прямоугольного треугольника невозможно и сигнализирует об ошибке в обозначении: гипотенуза должна быть в знаменателе и должна быть самой длинной стороной. Отрицательное отношение описывало бы тупой угол, который не может быть углом A в прямоугольном треугольнике."
          }
        ]
      },
      "arccos-vs": {
        "h2": "Арккосинус, арксинус и арктангенс: когда какой использовать",
        "blocks": [
          {
            "kind": "p",
            "text": "Все три обратные функции находят один и тот же угол при применении к одному треугольнику. Они различаются лишь тем, какие стороны им нужны. Правильный выбор избавляет от необходимости вычислять сторону, которая вам не нужна."
          },
          {
            "kind": "p",
            "text": "Используйте арккосинус, когда известны прилежащая сторона (b) и гипотенуза (c). Формула имеет вид A = arccos(b/c). Это естественный выбор, когда гипотенуза измерена напрямую, например рулеткой вдоль склона, а горизонтальное расстояние известно."
          },
          {
            "kind": "p",
            "text": "Используйте арксинус, когда известны противолежащая сторона (a) и гипотенуза (c). Формула имеет вид A = arcsin(a/c). В задачах на высоту удобнее арксинус: вертикальный подъём противолежит углу у земли. Этот случай разбирает калькулятор угла по синусу."
          },
          {
            "kind": "p",
            "text": "Используйте арктангенс, когда известны оба катета (a и b), но не гипотенуза. Формула имеет вид A = arctan(a/b). Полевым измерениям вида подъёма крыши к её прогону больше подходит арктангенс, потому что оба катета измеряются напрямую. См. калькулятор угла по тангенсу для этого метода."
          },
          {
            "kind": "h3",
            "text": "Они должны согласовываться"
          },
          {
            "kind": "p",
            "text": "Для любого отдельного треугольника arccos(b/c), arcsin(a/c) и arctan(a/b) дают одинаковый угол. В треугольнике 3-4-5 arccos(4/5), arcsin(3/5) и arctan(3/4) равны 36.87 градуса. Если два метода расходятся, какая-то сторона неверно обозначена. Эта перекрёстная проверка, самая надёжная из доступных, а калькулятор тригонометрических отношений может подтвердить все три отношения сразу."
          },
          {
            "kind": "h3",
            "text": "Почему бы не использовать всегда арктангенс?"
          },
          {
            "kind": "p",
            "text": "Арктангенсу нужны оба катета. Если противолежащая сторона неизвестна и её трудно измерить, вычисление её сначала ради арктангенса добавляет лишний шаг и лишний шанс ошибки. Арккосинус идёт прямо от двух сторон, которые у вас есть, к нужному углу. Подбирайте функцию под ваши измерения, а не по привычке."
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "Прилежащая сторона и гипотенуза: два входных значения",
        "imgAlt": "Прямоугольный треугольник с выделенными прилежащей стороной b и гипотенузой c для формулы арккосинуса",
        "figcaption": "Устройство для арккосинуса: b, это прилежащая сторона, касающаяся угла A, c, это гипотенуза напротив прямого угла.",
        "blocks": [
          {
            "kind": "p",
            "text": "Арккосинусу нужны ровно две стороны: прилежащая сторона b и гипотенуза c. Правильно обозначить их, это вся сложность. Всё остальное, это арифметика."
          },
          {
            "kind": "h3",
            "text": "Определение прилежащей стороны"
          },
          {
            "kind": "p",
            "text": "Прилежащая сторона, это катет, касающийся угла A. Она образует одну сторону самого угла. На схеме ниже сторона b идёт вдоль нижней части от прямого угла к углу A. Если вы решаете для другого острого угла B, обозначения меняются местами: прилежащей к B будет сторона, касающаяся B."
          },
          {
            "kind": "h3",
            "text": "Определение гипотенузы"
          },
          {
            "kind": "p",
            "text": "Гипотенуза, это сторона напротив прямого угла. Она всегда самая длинная сторона треугольника. Она никогда не касается вершины прямого угла. Если ваша «гипотенуза» не самая длинная из трёх ваших измерений, переименуйте стороны перед расчётом. Калькулятор теоремы Пифагора подтвердит, какая сторона самая длинная, если известны все три."
          },
          {
            "kind": "h3",
            "text": "Почему противолежащая сторона не участвует"
          },
          {
            "kind": "p",
            "text": "Косинус определён как прилежащая сторона, делённая на гипотенузу. Противолежащая сторона просто не входит в это отношение. В этом и смысл данного калькулятора: когда противолежащая сторона неизвестна, скрыта или не имеет значения для вашей схемы измерения, арккосинус всё равно выдаёт угол. Вы не игнорируете противолежащую сторону; вы используете отношение, которому она никогда не была нужна."
          }
        ]
      },
      "arccos-howto": {
        "h2": "Как пользоваться калькулятором угла по косинусу",
        "imgAlt": "Пример работы арккосинуса в четыре шага: b равно 4, c равно 5",
        "figcaption": "Пример с решением: b = 4, c = 5 дают A = arccos(0.8), примерно 36.87 градуса, проверено обратным ходом.",
        "steps": [
          "Убедитесь, что угол прямой. Калькулятор работает только для прямоугольных треугольников. Сначала определите угол в 90 градусов.",
          "Выберите нужный угол. Решите, ищете ли вы угол A или угол B. Прилежащая сторона определяется относительно этого выбора.",
          "Измерьте прилежащую сторону b. Это катет, касающийся вашего нужного угла. Запишите её в любых единицах.",
          "Измерьте гипотенузу c. Это самая длинная сторона, напротив прямого угла. Используйте те же единицы, что и для b.",
          "Проверьте, что b меньше c. Если это не так, стороны неверно обозначены. Гипотенуза должна быть самой длинной.",
          "Введите оба значения и нажмите «Рассчитать». Инструмент вычисляет b/c, применяет арккосинус и возвращает угол A в градусах.",
          "Найдите второй угол. Вычтите из 90 градусов: B = 90 − A.",
          "Проверьте. Вычислите cos(A) на калькуляторе и убедитесь, что он равен b/c. Если да, ответ надёжный."
        ]
      },
      "arccos-examples": {
        "h2": "16 примеров с решением",
        "blocks": [
          {
            "kind": "p",
            "text": "Каждый пример следует тем же четырём шагам: запишите формулу, подставьте, разделите, примените арккосинус. Углы округлены до двух знаков после запятой."
          },
          {
            "kind": "h3",
            "text": "Пример 1: треугольник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 4, гипотенуза c = 5; найдите угол A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. Дополняющий угол B = 53.13°."
          },
          {
            "kind": "h3",
            "text": "Пример 2: треугольник 5-12-13"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 12, гипотенуза c = 13; найдите угол A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. Дополняющий угол B = 67.38°."
          },
          {
            "kind": "h3",
            "text": "Пример 3: треугольник 8-15-17"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 8, гипотенуза c = 17; найдите угол A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) ≈ 61.93°. Дополняющий угол B = 28.07°."
          },
          {
            "kind": "h3",
            "text": "Пример 4: тот же треугольник, другой угол"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 15, гипотенуза c = 17 (ищем угол B треугольника 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) ≈ 28.07°. Заметим: 61.93 + 28.07 = 90, как требуется."
          },
          {
            "kind": "h3",
            "text": "Пример 5: треугольник 5-12-13, другой угол"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 5, гипотенуза c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) ≈ 67.38°. Это совпадает с дополняющим углом из примера 2."
          },
          {
            "kind": "h3",
            "text": "Пример 6: треугольник 3-4-5, другой угол"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 3, гипотенуза c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) ≈ 53.13°. Это совпадает с дополняющим углом из примера 1."
          },
          {
            "kind": "h3",
            "text": "Пример 7: особый случай с углом 60 градусов"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 1, гипотенуза c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60 ровно. Это особый треугольник 30-60-90. Эти точные значения разбирает калькулятор особых прямоугольных треугольников."
          },
          {
            "kind": "h3",
            "text": "Пример 8: треугольник 7-24-25"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 7, гипотенуза c = 25; найдите угол A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) ≈ 73.74°. Дополняющий угол B = 16.26°."
          },
          {
            "kind": "h3",
            "text": "Пример 9: треугольник 7-24-25, другой угол"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 24, гипотенуза c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) ≈ 16.26°. Совпадает с дополняющим углом из примера 8."
          },
          {
            "kind": "h3",
            "text": "Пример 10: треугольник 9-40-41"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 9, гипотенуза c = 41; найдите угол A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) ≈ 77.32°. Малая прилежащая сторона даёт широкий угол."
          },
          {
            "kind": "h3",
            "text": "Пример 11: треугольник 9-40-41, другой угол"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 40, гипотенуза c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) ≈ 12.68°. Заметим: 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "Пример 12: треугольник 20-21-29"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 20, гипотенуза c = 29; найдите угол A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) ≈ 46.40°. Дополняющий угол B = 43.60°."
          },
          {
            "kind": "h3",
            "text": "Пример 13: треугольник 20-21-29, другой угол"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 21, гипотенуза c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) ≈ 43.60°. Совпадает с дополняющим углом из примера 12."
          },
          {
            "kind": "h3",
            "text": "Пример 14: треугольник 6-8-10"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 6, гипотенуза c = 10; найдите угол A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) ≈ 53.13°. Тот же угол, что в примере 6, ведь 6-8-10, это масштабированный 3-4-5."
          },
          {
            "kind": "h3",
            "text": "Пример 15: треугольник 6-8-10, другой угол"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 8, гипотенуза c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) ≈ 36.87°. Как в примере 1: подобные треугольники имеют одинаковые углы."
          },
          {
            "kind": "h3",
            "text": "Пример 16: треугольник 12-16-20"
          },
          {
            "kind": "p",
            "text": "Дано: прилежащая b = 12, гипотенуза c = 20; найдите угол A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) ≈ 53.13°. Ещё один масштабированный 3-4-5, тот же угол. Масштабирование сторон никогда не меняет углы."
          }
        ]
      },
      "arccos-special": {
        "h2": "Особые значения углов, которые стоит запомнить",
        "blocks": [
          {
            "kind": "p",
            "text": "Несколько значений арккосинуса встречаются так часто, что их узнавание экономит время. Они происходят из особых прямоугольных треугольников."
          },
          {
            "kind": "p",
            "text": ": прилежащая сторона равна гипотенузе, поэтому угол стягивается до нуля. Это вырожденный случай, а не настоящий треугольник, но он задаёт начало шкалы."
          },
          {
            "kind": "p",
            "text": ": из треугольника 30-60-90. Когда прилежащая сторона составляет около 86.6 процента гипотенузы, угол равен 30 градусам."
          },
          {
            "kind": "p",
            "text": ": из треугольника 45-45-90. Равные катеты дают это точное значение."
          },
          {
            "kind": "p",
            "text": ": из треугольника 30-60-90, случай из примера 7. Когда прилежащая сторона равна ровно половине гипотенузы, угол равен ровно 60 градусам."
          },
          {
            "kind": "p",
            "text": ": прилежащая сторона сжимается до нуля, поэтому угол раскрывается до прямого. Как и нулевой случай, это граница, а не настоящий угол треугольника."
          },
          {
            "kind": "p",
            "text": "Между этими ориентирами арккосинус плавно убывает по мере роста отношения. Запомнив пять опорных точек, можно оценить любой арккосинус в уме: отношение 0.7 находится между 0.5 (60 градусов) и 0.866 (30 градусов), чуть ближе к 45 градусам. Истинное значение, около 45.57 градуса."
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "Типичные ошибки при использовании арккосинуса",
        "blocks": [
          {
            "kind": "h3",
            "text": "Использование противолежащей стороны вместо прилежащей"
          },
          {
            "kind": "p",
            "text": "Самая частая ошибка. Арккосинусу нужна сторона, касающаяся угла A, а не сторона напротив него. Если подставить в арккосинус противолежащую сторону, получится дополняющий угол вместо нужного. В треугольнике 3-4-5 arccos(3/5) = 53.13 градуса, это угол B, а не угол A. Исправление: нарисуйте треугольник, отметьте нужный угол и проследите, какой катет его касается."
          },
          {
            "kind": "h3",
            "text": "Гипотенуза в числителе"
          },
          {
            "kind": "p",
            "text": "Арккосинус ждёт отношение прилежащей к гипотенузе, число меньше 1. Ввод c/b вместо b/c даёт отношение больше 1, и калькулятор выдаёт математическую ошибку. Исправление: в отношении арккосинуса гипотенуза всегда в знаменателе."
          },
          {
            "kind": "h3",
            "text": "Путаница арккосинуса с косинусом"
          },
          {
            "kind": "p",
            "text": "На многих калькуляторах клавиша косинуса и клавиша обратного косинуса (часто подписанная cos⁻¹ или arccos) стоят рядом. Нажатие cos(0.8) вместо arccos(0.8) даёт 0.6967, бессмысленное отношение, вместо 36.87 градуса. Исправление: проверьте, что калькулятор в режиме градусов и что вы нажали клавишу обратной функции."
          },
          {
            "kind": "h3",
            "text": "Смешивание градусов и радиан"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) равен 36.87 градуса, но 0.6435 радиана. Если ручной расчёт для треугольника 3-4-5 даёт 0.64, калькулятор в режиме радиан. Для перевода умножьте на 180/pi или переключите режим на градусы. Этот калькулятор выдаёт градусы."
          },
          {
            "kind": "h3",
            "text": "Ввод сторон в разных единицах"
          },
          {
            "kind": "p",
            "text": "Прилежащая в дюймах, а гипотенуза в футах испортят отношение. Сначала приведите к общей единице. Отношение безразмерно, но только когда оба входа в одной единице."
          },
          {
            "kind": "h3",
            "text": "Слишком раннее округление отношения"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 градуса, но arccos(0.80), округлённое из 0.795, даёт 37.24 градуса. Вблизи отношений 0 и 1, где арккосинус круче всего, малые ошибки отношения усиливаются. Сохраняйте полную точность на протяжении деления и округляйте только итоговый угол."
          },
          {
            "kind": "h3",
            "text": "Забывчивость, какой угол был найден"
          },
          {
            "kind": "p",
            "text": "Арккосинус возвращает угол, прилежащую сторону которого вы ввели. Если вы ввели сторону, касающуюся угла B, результат, это угол B. Подпишите ответ правильным именем угла или проверьте дополнением: сумма двух острых углов должна быть 90 градусов."
          }
        ]
      },
      "arccos-verify": {
        "h2": "Проверка ответа арккосинуса",
        "blocks": [
          {
            "kind": "p",
            "text": "Три проверки подтверждают правильный расчёт арккосинуса:"
          }
        ],
        "steps": [
          "Проверка диапазона. Результат должен строго находиться между 0 и 90 градусами. Всё, что вне, сигнализирует о недопустимых входах или неверно обозначенных сторонах.",
          "Проверка обратным ходом. Вычислите cos(A) и убедитесь, что он равен b/c. Для примера 1 cos(36.87) ≈ 0.8 = 4/5. Если обратный ход не сходится, угол неверный.",
          "Перекрёстная проверка методом. Пересчитайте через арксинус или арктангенс, используя третью сторону. Если arccos(4/5) = 36.87 и arctan(3/4) = 36.87, ответ надёжный. Расхождение указывает на ошибку в обозначении."
        ],
        "closingParagraphs": [
          "Для треугольника 3-4-5 проверьте также, что стороны удовлетворяют теореме Пифагора: 9 + 16 = 25. Проверка сторон перед тем, как доверять углу, выведенному из них, хорошая практика, а калькулятор теоремы Пифагора делает это быстро.",
          "Четвёртая проверка использует дополнение. Вычислите B = 90 минус A, затем убедитесь, что арккосинус другого отношения даёт B. В примере 1 arccos(3/5) = 53.13, что совпадает с 90 минус 36.87. Когда все четыре проверки пройдены, ответ вне сомнений."
        ]
      },
      "arccos-applications": {
        "h2": "Применение арккосинуса в реальной жизни",
        "imgAlt": "Четыре панели: геодезическая съёмка, тень, стропило крыши и расчёты угла раскоса с арккосинусом",
        "figcaption": "Реальные задачи на арккосинус: углы склонов, высота солнца, уклон стропил и углы установки раскосов.",
        "blocks": [
          {
            "kind": "p",
            "text": "Арккосинус встречается везде, где естественными измерениями являются наклонное расстояние и горизонтальное расстояние. Гипотенуза измеряется вдоль самого склона, а прилежащая сторона, это горизонтальная составляющая."
          },
          {
            "kind": "h3",
            "text": "Съёмка склонов"
          },
          {
            "kind": "p",
            "text": "Геодезист измеряет 65 метров вдоль склона и 60 метров по горизонтали. Угол склона равен arccos(60/65), около 22.6 градуса. Это стандартная ситуация для арккосинуса: наклонное расстояние легко замерить рулеткой, горизонтальное берётся с карты или по уровню, а противолежащая сторона (высота) это то, что можно вычислить следующим."
          },
          {
            "kind": "h3",
            "text": "Высота солнца по теням"
          },
          {
            "kind": "p",
            "text": "Световой луч длиной 10 метров отбрасывает тень длиной 8 метров. Угол высоты солнца равен arccos(8/10), около 36.9 градуса. Задачи с тенями, естественные задачи на арккосинус, потому что тень лежит вдоль земли (прилежащая сторона), а луч, это гипотенуза."
          },
          {
            "kind": "h3",
            "text": "Уклон стропила крыши"
          },
          {
            "kind": "p",
            "text": "Стропило перекрывает 6.5 метра при горизонтальном прогоне 6 метров. Угол уклона у карниза равен arccos(6/6.5), около 22.6 градуса. Плотники измеряют стропило напрямую, а прогон вдоль балки, поэтому арккосинус соответствует измерениям как они взяты."
          },
          {
            "kind": "h3",
            "text": "Инженерные раскосы"
          },
          {
            "kind": "p",
            "text": "Диагональный раскос измеряется 4 метра при горизонтальном основании 3.5 метра. Угол раскоса равен arccos(3.5/4), около 28.96 градуса. В строительных эскизах даны длина раскоса и его основание; арккосинус превращает их в угол установки."
          }
        ]
      },
      "arccos-related": {
        "relatedItems": [
          "Калькулятор углов прямоугольного треугольника",
          "Калькулятор угла прямоугольного треугольника по синусу",
          "Калькулятор угла прямоугольного треугольника по тангенсу",
          "Калькулятор недостающего угла прямоугольного треугольника",
          "Калькулятор тригонометрических отношений прямоугольного треугольника",
          "Калькулятор косинуса"
        ],
        "h2": "Изучите связанные калькуляторы прямоугольного треугольника"
      },
      "arccos-conclusion": {
        "h2": "Находите любой угол по косинусу уверенно",
        "blocks": [
          {
            "kind": "p",
            "text": "Начните с определения прилежащей стороны: катета, касающегося вашего нужного угла. Убедитесь, что гипотенуза, самая длинная сторона. Разделите, примените арккосинус и прочитайте угол в градусах. Второй угол получите, вычтя первый из 90. Проверьте обратным ходом, перекрёстным вычислением и суммой углов. С этими шагами любая задача на прилежащую сторону и гипотенузу сводится к надёжной процедуре. Вернитесь к калькулятору вверху этой страницы, чтобы прогнать свои числа."
          }
        ]
      }
    }
  },
  "fr": {
    "faqs": [
      {
        "question": "Que signifie réellement A = arccos(b/c) ?",
        "answer": "Cela signifie que vous divisez le côté adjacent par l'hypoténuse, puis que vous remontez de cette décimale vers l'angle dont le cosinus lui égale. Le résultat est l'angle aigu entre le côté adjacent et l'hypoténuse."
      },
      {
        "question": "Quand dois-je utiliser l'arc cosinus plutôt que l'arc sinus ?",
        "answer": "Utilisez l'arc cosinus quand vous connaissez le côté adjacent et l'hypoténuse. Utilisez l'arc sinus quand vous connaissez le côté opposé et l'hypoténuse. Les deux donnent le même angle pour le même triangle ; le choix dépend des côtés que vous avez mesurés."
      },
      {
        "question": "Pourquoi est-ce que j'obtiens une erreur mathématique avec l'arc cosinus ?",
        "answer": "La cause la plus fréquente est un rapport supérieur à 1, ce qui arrive quand le côté adjacent saisi est plus long que l'hypoténuse. Dans un vrai triangle rectangle, l'hypoténuse est toujours la plus longue, donc vérifiez vos étiquettes de côtés."
      },
      {
        "question": "Puis-je utiliser l'arc cosinus sans connaître le côté opposé ?",
        "answer": "Oui. C'est l'avantage principal de l'arc cosinus : il n'a besoin que du côté adjacent et de l'hypoténuse. Le côté opposé n'entre jamais dans le calcul."
      },
      {
        "question": "Quelle est la différence entre cos et arccos ?",
        "answer": "Le cosinus prend un angle et renvoie un rapport : cos(60 degrés) = 0.5. L'arc cosinus inverse cela : il prend un rapport et renvoie l'angle, donc arccos(0.5) = 60 degrés. Utilisez le cosinus quand vous connaissez l'angle ; utilisez l'arc cosinus quand vous connaissez les côtés."
      },
      {
        "question": "Pourquoi arccos, arcsin et arctan donnent-ils la même réponse ?",
        "answer": "Parce qu'ils décrivent le même angle géométrique à travers différentes paires de côtés. Dans un triangle 3-4-5, arccos(4/5), arcsin(3/5) et arctan(3/4) valent tous 36.87 degrés. L'accord entre les méthodes confirme des étiquettes de côtés correctes."
      },
      {
        "question": "Que signifie b/c égal exactement à 0.5 ?",
        "answer": "L'angle vaut exactement 60 degrés. C'est le triangle particulier 30-60-90, où le côté adjacent à l'angle de 60 degrés vaut la moitié de l'hypoténuse."
      },
      {
        "question": "La réponse doit-elle être en degrés ou en radians ?",
        "answer": "Cette calculatrice utilise les degrés, la norme pour la construction, le levé topographique et la géométrie scolaire. Si vous calculez à la main, assurez-vous que la calculatrice est en mode degrés ; un résultat en mode radians comme 0.64 se convertit en 36.87 degrés en multipliant par 180/pi."
      },
      {
        "question": "Comment trouver l'autre angle aigu ?",
        "answer": "Soustrayez de 90 degrés. Si l'arc cosinus donne A = 36.87 degrés, alors B = 90 − 36.87 = 53.13 degrés. Aucune trigonométrie supplémentaire n'est nécessaire."
      },
      {
        "question": "Le résultat de l'arc cosinus peut-il valoir 90 degrés ?",
        "answer": "Seulement comme limite : arccos(0) = 90 degrés, mais un côté adjacent nul signifie un triangle dégénéré, pas un vrai. Les angles valides de triangle rectangle issus de l'arc cosinus se situent toujours strictement entre 0 et 90 degrés."
      },
      {
        "question": "Comment puis-je vérifier ma réponse d'arc cosinus ?",
        "answer": "Calculez cos(A) et confirmez qu'il égale b/c. Recalculez aussi avec l'arc sinus ou l'arc tangente en utilisant le troisième côté ; toutes les méthodes doivent concorder. Enfin, vérifiez que les deux angles aigus totalisent exactement 90 degrés."
      },
      {
        "question": "Agrandir le triangle change-t-il le résultat de l'arc cosinus ?",
        "answer": "Non. Les triangles semblables ont des angles identiques. Un triangle 3-4-5 et un triangle 6-8-10 donnent tous deux arccos(0.8) = 36.87 degrés, car le rapport b/c est inchangé par l'agrandissement."
      }
    ],
    "relatedHeading": "Explorez les calculatrices de triangles rectangles associées",
    "relatedItems": [
      "Calculatrice d'angle de triangle rectangle",
      "Calculatrice d'angle de triangle rectangle à partir du sinus",
      "Calculatrice d'angle de triangle rectangle à partir de la tangente",
      "Calculatrice d'angle manquant de triangle rectangle",
      "Calculatrice de rapports trigonométriques de triangle rectangle",
      "Calculatrice de rapport cosinus"
    ],
    "tocHeading": "Dans ce guide",
    "tocItems": {
      "arccos-intro": "Qu'est-ce que la calculatrice d'angle à partir du cosinus ?",
      "arccos-what": "Comprendre l'arc cosinus (cosinus inverse)",
      "arccos-vs": "Arc cosinus, arc sinus et arc tangente",
      "arccos-anatomy": "Le côté adjacent et l'hypoténuse",
      "arccos-howto": "Comment utiliser la calculatrice",
      "arccos-examples": "16 exemples résolus",
      "arccos-special": "Valeurs d'angles particulières",
      "arccos-mistakes": "Erreurs fréquentes",
      "arccos-verify": "Vérifier votre réponse",
      "arccos-applications": "Applications concrètes",
      "arccos-related": "Calculatrices associées",
      "arccos-faq": "FAQ"
    },
    "sections": {
      "arccos-intro": {
        "h2": "Qu'est-ce que la calculatrice d'angle de triangle rectangle à partir du cosinus ?",
        "blocks": [
          {
            "kind": "p",
            "text": "La calculatrice d'angle de triangle rectangle à partir du cosinus trouve un angle aigu quand vous connaissez le côté adjacent et l'hypoténuse. Elle applique la fonction cosinus inverse, notée arccos ou cos⁻¹, au rapport de ces deux côtés. Le résultat est l'angle A en degrés."
          },
          {
            "kind": "p",
            "text": "Cet outil existe pour une situation de mesure précise : vous pouvez mesurer le côté situé à côté de votre angle cible et le plus long côté du triangle, mais le côté opposé est inconnu ou difficile à atteindre. Au lieu de calculer d'abord le côté opposé, l'arc cosinus le saute entièrement et convertit le rapport adjacent sur hypoténuse directement en angle."
          },
          {
            "kind": "p",
            "text": "Par exemple, un côté adjacent de 4 et une hypoténuse de 5 donnent le rapport 0.8. L'arc cosinus de 0.8 vaut environ 36.87 degrés. C'est l'angle A. L'autre angle aigu découle de la règle du complément : 90 moins 36.87, soit 53.13 degrés."
          },
          {
            "kind": "p",
            "text": "L'arc cosinus est l'un des trois outils trigonométriques inverses de ce site. Si vos côtés connus sont le côté opposé et l'hypoténuse, la calculatrice d'angle à partir du sinus est le bon choix. Si vous connaissez les deux côtés de l'angle droit mais pas l'hypoténuse, utilisez la calculatrice d'angle à partir de la tangente. Cette page couvre le cas du cosinus en pleine profondeur."
          }
        ]
      },
      "arccos-what": {
        "h2": "Comprendre l'arc cosinus (cosinus inverse)",
        "imgAlt": "Schéma montrant les deux étapes de l'arc cosinus : diviser b par c, puis appliquer l'arc cosinus pour obtenir l'angle",
        "figcaption": "Comment fonctionne l'arc cosinus : divisez le côté adjacent par l'hypoténuse, puis appliquez le cosinus inverse pour retrouver l'angle.",
        "blocks": [
          {
            "kind": "p",
            "text": "Le cosinus ordinaire prend un angle et renvoie un rapport. Le cosinus de 60 degrés vaut 0.5. L'arc cosinus fait l'inverse : il prend un rapport et renvoie l'angle. L'arc cosinus de 0.5 vaut 60 degrés. Les deux fonctions s'annulent mutuellement, ce qui explique qu'on note aussi l'arc cosinus cos⁻¹."
          },
          {
            "kind": "p",
            "text": "La formule utilisée par cette calculatrice s'écrit A = arccos(b/c). Ici b est le côté adjacent, c est l'hypoténuse, et A est l'angle compris entre eux. Le rapport b/c reste toujours entre 0 et 1 pour un vrai triangle rectangle, car le côté adjacent est toujours plus court que l'hypoténuse."
          },
          {
            "kind": "p",
            "text": "Voyez l'arc cosinus comme une question : « Quel angle a cette valeur de cosinus ? » Si b/c égale 0.8, la question devient « quel angle a un cosinus de 0.8 ? » La réponse, 36.87 degrés, est l'angle dont le côté adjacent mesure 80 pour cent de la longueur de l'hypoténuse."
          },
          {
            "kind": "h3",
            "text": "Le rapport raconte une histoire"
          },
          {
            "kind": "p",
            "text": "La valeur de b/c décrit la forme du triangle. Un rapport proche de 1 signifie que le côté adjacent est presque aussi long que l'hypoténuse, donc l'angle entre eux est minuscule. Un rapport proche de 0 signifie que le côté adjacent est très court par rapport à l'hypoténuse, donc l'angle s'ouvre largement vers 90 degrés. Un rapport d'exactement 0.5 signifie toujours 60 degrés."
          },
          {
            "kind": "h3",
            "text": "Domaine de l'arc cosinus"
          },
          {
            "kind": "p",
            "text": "L'arc cosinus n'accepte que des entrées de 0 à 1 dans ce contexte géométrique. Un rapport supérieur à 1 est impossible pour un triangle rectangle et signale une erreur d'étiquetage : l'hypoténuse doit être le dénominateur et doit être le plus long côté. Un rapport négatif décrirait un angle obtus, qui ne peut pas être l'angle A d'un triangle rectangle."
          }
        ]
      },
      "arccos-vs": {
        "h2": "Arc cosinus, arc sinus et arc tangente : quand utiliser chacun",
        "blocks": [
          {
            "kind": "p",
            "text": "Les trois fonctions inverses trouvent le même angle appliquées au même triangle. Elles ne diffèrent que par les côtés qu'elles exigent. Bien choisir vous évite de calculer un côté dont vous n'avez pas besoin."
          },
          {
            "kind": "p",
            "text": "Utilisez l'arc cosinus quand vous connaissez le côté adjacent (b) et l'hypoténuse (c). La formule s'écrit A = arccos(b/c). C'est le choix naturel quand l'hypoténuse a été mesurée directement, par exemple au ruban le long d'une pente, et que la distance horizontale est connue."
          },
          {
            "kind": "p",
            "text": "Utilisez l'arc sinus quand vous connaissez le côté opposé (a) et l'hypoténuse (c). La formule s'écrit A = arcsin(a/c). Les problèmes de hauteur privilégient l'arc sinus : l'élévation verticale est opposée à l'angle au niveau du sol. La calculatrice d'angle à partir du sinus traite ce cas."
          },
          {
            "kind": "p",
            "text": "Utilisez l'arc tangente quand vous connaissez les deux côtés de l'angle droit (a et b) mais pas l'hypoténuse. La formule s'écrit A = arctan(a/b). Les mesures de terrain comme la montée d'un toit sur sa course privilégient l'arc tangente car les deux côtés sont mesurés directement. Voir la calculatrice d'angle à partir de la tangente pour cette méthode."
          },
          {
            "kind": "h3",
            "text": "Elles doivent concorder"
          },
          {
            "kind": "p",
            "text": "Pour un triangle donné, arccos(b/c), arcsin(a/c) et arctan(a/b) produisent exactement le même angle. Dans un triangle 3-4-5, arccos(4/5), arcsin(3/5) et arctan(3/4) valent tous 36.87 degrés. Si deux méthodes divergent, un côté est mal étiqueté. Ce contrôle croisé est la vérification la plus fiable disponible, et la calculatrice de rapports trigonométriques peut confirmer les trois rapports à la fois."
          },
          {
            "kind": "h3",
            "text": "Pourquoi ne pas toujours utiliser l'arc tangente ?"
          },
          {
            "kind": "p",
            "text": "L'arc tangente a besoin des deux côtés de l'angle droit. Si le côté opposé est inconnu et difficile à mesurer, le calculer d'abord juste pour utiliser l'arc tangente ajoute une étape inutile et un risque d'erreur supplémentaire. L'arc cosinus va directement des deux côtés que vous avez à l'angle que vous voulez. Adaptez la fonction à vos mesures, pas à vos habitudes."
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "Le côté adjacent et l'hypoténuse : les deux entrées",
        "imgAlt": "Triangle rectangle avec le côté adjacent b et l'hypoténuse c mis en évidence pour la formule de l'arc cosinus",
        "figcaption": "Anatomie pour l'arc cosinus : b est le côté adjacent touchant l'angle A, c est l'hypoténuse en face de l'angle droit.",
        "blocks": [
          {
            "kind": "p",
            "text": "L'arc cosinus a besoin d'exactement deux côtés : le côté adjacent b et l'hypoténuse c. Bien étiqueter ces côtés, c'est toute la difficulté. Le reste n'est que de l'arithmétique."
          },
          {
            "kind": "h3",
            "text": "Identifier le côté adjacent"
          },
          {
            "kind": "p",
            "text": "Le côté adjacent est le côté de l'angle droit qui touche l'angle A. Il forme un bord de l'angle lui-même. Dans le schéma ci-dessous, le côté b court le long du bas, de l'angle droit à l'angle A. Si vous résolvez pour l'autre angle aigu B, les étiquettes s'échangent : le côté adjacent à B est celui qui touche B."
          },
          {
            "kind": "h3",
            "text": "Identifier l'hypoténuse"
          },
          {
            "kind": "p",
            "text": "L'hypoténuse est le côté en face de l'angle droit. C'est toujours le plus long côté du triangle. Elle ne touche jamais le sommet de l'angle droit. Si votre « hypoténuse » n'est pas la plus longue de vos trois mesures, réétiquetez avant de calculer. La calculatrice du théorème de Pythagore peut confirmer quel côté est le plus long quand vous avez les trois."
          },
          {
            "kind": "h3",
            "text": "Pourquoi le côté opposé reste à l'écart"
          },
          {
            "kind": "p",
            "text": "Le cosinus est défini comme adjacent sur hypoténuse. Le côté opposé n'apparaît tout simplement pas dans ce rapport. C'est l'intérêt de cette calculatrice : quand le côté opposé est inconnu, inaccessible ou sans rapport avec votre dispositif de mesure, l'arc cosinus fournit quand même l'angle. Vous n'ignorez pas le côté opposé ; vous utilisez un rapport qui n'en a jamais eu besoin."
          }
        ]
      },
      "arccos-howto": {
        "h2": "Comment utiliser la calculatrice d'angle à partir du cosinus",
        "imgAlt": "Exemple résolu en quatre étapes de l'arc cosinus avec b égale 4 et c égale 5",
        "figcaption": "Exemple résolu : b = 4, c = 5 donnent A = arccos(0.8), environ 36.87 degrés, vérifié par aller-retour.",
        "steps": [
          "Confirmez l'angle droit. La calculatrice ne fonctionne que pour les triangles rectangles. Identifiez d'abord le coin à 90 degrés.",
          "Choisissez votre angle cible. Décidez si vous résolvez pour l'angle A ou l'angle B. Le côté adjacent se définit par rapport à ce choix.",
          "Mesurez le côté adjacent b. C'est le côté touchant votre angle cible. Notez-le dans n'importe quelle unité.",
          "Mesurez l'hypoténuse c. C'est le plus long côté, en face de l'angle droit. Utilisez la même unité que pour b.",
          "Vérifiez que b est inférieur à c. Sinon, les côtés sont mal étiquetés. L'hypoténuse doit être la plus longue.",
          "Saisissez les deux valeurs et appuyez sur « Calculer ». L'outil calcule b/c, applique l'arc cosinus et renvoie l'angle A en degrés.",
          "Trouvez le second angle. Soustrayez de 90 degrés : B = 90 − A.",
          "Vérifiez. Calculez cos(A) sur une calculatrice et confirmez qu'il égale b/c. Si oui, la réponse est solide."
        ]
      },
      "arccos-examples": {
        "h2": "16 exemples résolus",
        "blocks": [
          {
            "kind": "p",
            "text": "Chaque exemple suit les mêmes quatre étapes : écrire la formule, substituer, diviser, appliquer l'arc cosinus. Les angles sont arrondis à deux décimales."
          },
          {
            "kind": "h3",
            "text": "Exemple 1 : le triangle 3-4-5"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 4 et l'hypoténuse c = 5, trouvez l'angle A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. Le complément B = 53.13°."
          },
          {
            "kind": "h3",
            "text": "Exemple 2 : le triangle 5-12-13"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 12 et l'hypoténuse c = 13, trouvez l'angle A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. Le complément B = 67.38°."
          },
          {
            "kind": "h3",
            "text": "Exemple 3 : le triangle 8-15-17"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 8 et l'hypoténuse c = 17, trouvez l'angle A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) ≈ 61.93°. Le complément B = 28.07°."
          },
          {
            "kind": "h3",
            "text": "Exemple 4 : même triangle, autre angle"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 15 et l'hypoténuse c = 17 (résolution pour l'angle B du triangle 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) ≈ 28.07°. Notez : 61.93 + 28.07 = 90, comme requis."
          },
          {
            "kind": "h3",
            "text": "Exemple 5 : 5-12-13, autre angle"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 5 et l'hypoténuse c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) ≈ 67.38°. Cela correspond au complément de l'exemple 2."
          },
          {
            "kind": "h3",
            "text": "Exemple 6 : 3-4-5, autre angle"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 3 et l'hypoténuse c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) ≈ 53.13°. Cela correspond au complément de l'exemple 1."
          },
          {
            "kind": "h3",
            "text": "Exemple 7 : le cas particulier de 60 degrés"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 1 et l'hypoténuse c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60 exactement. C'est le triangle particulier 30-60-90. La calculatrice de triangles rectangles particuliers couvre ces valeurs exactes."
          },
          {
            "kind": "h3",
            "text": "Exemple 8 : le triangle 7-24-25"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 7 et l'hypoténuse c = 25, trouvez l'angle A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) ≈ 73.74°. Le complément B = 16.26°."
          },
          {
            "kind": "h3",
            "text": "Exemple 9 : 7-24-25, autre angle"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 24 et l'hypoténuse c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) ≈ 16.26°. Correspond au complément de l'exemple 8."
          },
          {
            "kind": "h3",
            "text": "Exemple 10 : le triangle 9-40-41"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 9 et l'hypoténuse c = 41, trouvez l'angle A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) ≈ 77.32°. Un petit côté adjacent donne un angle large."
          },
          {
            "kind": "h3",
            "text": "Exemple 11 : 9-40-41, autre angle"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 40 et l'hypoténuse c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) ≈ 12.68°. Notez : 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "Exemple 12 : le triangle 20-21-29"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 20 et l'hypoténuse c = 29, trouvez l'angle A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) ≈ 46.40°. Le complément B = 43.60°."
          },
          {
            "kind": "h3",
            "text": "Exemple 13 : 20-21-29, autre angle"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 21 et l'hypoténuse c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) ≈ 43.60°. Correspond au complément de l'exemple 12."
          },
          {
            "kind": "h3",
            "text": "Exemple 14 : le triangle 6-8-10"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 6 et l'hypoténuse c = 10, trouvez l'angle A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) ≈ 53.13°. Même angle que l'exemple 6, car 6-8-10 est un 3-4-5 agrandi."
          },
          {
            "kind": "h3",
            "text": "Exemple 15 : 6-8-10, autre angle"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 8 et l'hypoténuse c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) ≈ 36.87°. Comme l'exemple 1, ce qui confirme que les triangles semblables partagent leurs angles."
          },
          {
            "kind": "h3",
            "text": "Exemple 16 : le triangle 12-16-20"
          },
          {
            "kind": "p",
            "text": "Étant donné l'adjacent b = 12 et l'hypoténuse c = 20, trouvez l'angle A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) ≈ 53.13°. Un autre 3-4-5 agrandi, même angle encore. Agrandir les côtés ne change jamais les angles."
          }
        ]
      },
      "arccos-special": {
        "h2": "Valeurs d'angles particulières à mémoriser",
        "blocks": [
          {
            "kind": "p",
            "text": "Quelques valeurs d'arc cosinus reviennent si souvent que les reconnaître fait gagner du temps. Elles viennent des triangles rectangles particuliers."
          },
          {
            "kind": "p",
            "text": ": le côté adjacent égale l'hypoténuse, donc l'angle s'effondre à zéro. C'est un cas dégénéré, pas un vrai triangle, mais il ancre l'échelle."
          },
          {
            "kind": "p",
            "text": ": vient du triangle 30-60-90. Quand le côté adjacent vaut environ 86.6 pour cent de l'hypoténuse, l'angle est de 30 degrés."
          },
          {
            "kind": "p",
            "text": ": vient du triangle 45-45-90. Des côtés égaux donnent cette valeur exacte."
          },
          {
            "kind": "p",
            "text": ": vient du triangle 30-60-90, le cas de l'exemple 7. Quand le côté adjacent vaut exactement la moitié de l'hypoténuse, l'angle vaut exactement 60 degrés."
          },
          {
            "kind": "p",
            "text": ": le côté adjacent se réduit à zéro, donc l'angle s'ouvre jusqu'à l'angle droit. Comme le cas zéro, c'est une limite, pas un vrai angle de triangle."
          },
          {
            "kind": "p",
            "text": "Entre ces repères, l'arc cosinus décroît en douceur à mesure que le rapport augmente. Mémoriser les cinq points d'ancrage permet d'estimer tout arc cosinus de tête : un rapport de 0.7 se situe entre 0.5 (60 degrés) et 0.866 (30 degrés), un peu plus près de 45 degrés. La vraie valeur est d'environ 45.57 degrés."
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "Erreurs fréquentes avec l'arc cosinus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Utiliser le côté opposé au lieu du côté adjacent"
          },
          {
            "kind": "p",
            "text": "L'erreur la plus fréquente. L'arc cosinus a besoin du côté touchant l'angle A, pas du côté en face de lui. Si vous donnez le côté opposé à l'arc cosinus, vous obtenez le complément de l'angle visé. Dans un triangle 3-4-5, arccos(3/5) = 53.13 degrés est l'angle B, pas l'angle A. Correction : esquissez le triangle, marquez votre angle cible, et suivez quel côté le touche."
          },
          {
            "kind": "h3",
            "text": "Mettre l'hypoténuse au numérateur"
          },
          {
            "kind": "p",
            "text": "L'arc cosinus attend adjacent sur hypoténuse, un nombre inférieur à 1. Saisir c/b au lieu de b/c donne un rapport supérieur à 1, et la calculatrice renvoie une erreur mathématique. Correction : l'hypoténuse est toujours le dénominateur dans le rapport de l'arc cosinus."
          },
          {
            "kind": "h3",
            "text": "Confondre l'arc cosinus avec le cosinus"
          },
          {
            "kind": "p",
            "text": "Sur beaucoup de calculatrices, la touche cosinus et la touche cosinus inverse (souvent étiquetée cos⁻¹ ou arccos) sont proches l'une de l'autre. Appuyer sur cos(0.8) au lieu d'arccos(0.8) donne 0.6967, un rapport sans signification, au lieu de 36.87 degrés. Correction : vérifiez que votre calculatrice est en mode degrés et que vous avez appuyé sur la touche inverse."
          },
          {
            "kind": "h3",
            "text": "Mélanger degrés et radians"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) vaut 36.87 degrés mais 0.6435 radians. Si votre calcul à la main donne 0.64 pour un triangle 3-4-5, la calculatrice est en mode radians. Multipliez par 180/pi pour convertir, ou passez en mode degrés. Cette calculatrice produit des degrés."
          },
          {
            "kind": "h3",
            "text": "Saisir les côtés dans des unités différentes"
          },
          {
            "kind": "p",
            "text": "Un adjacent en pouces et une hypoténuse en pieds corrompent le rapport. Convertissez d'abord dans une unité commune. Le rapport est sans unité, mais seulement quand les deux entrées partagent la même unité."
          },
          {
            "kind": "h3",
            "text": "Arrondir le rapport trop tôt"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 degrés, mais arccos(0.80) arrondi à partir de 0.795 donne 37.24 degrés. Près des rapports 0 et 1, où l'arc cosinus est le plus raide, les petites erreurs de rapport s'amplifient. Gardez toute la précision pendant la division et n'arrondissez que l'angle final."
          },
          {
            "kind": "h3",
            "text": "Oublier quel angle a été résolu"
          },
          {
            "kind": "p",
            "text": "L'arc cosinus renvoie l'angle dont vous avez saisi le côté adjacent. Si vous avez saisi le côté touchant l'angle B, le résultat est l'angle B. Étiquetez la réponse avec le bon nom d'angle, ou vérifiez avec le complément : les deux angles aigus doivent totaliser 90 degrés."
          }
        ]
      },
      "arccos-verify": {
        "h2": "Vérifier votre réponse d'arc cosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Trois contrôles confirment un calcul d'arc cosinus correct :"
          }
        ],
        "steps": [
          "Contrôle de plage. Le résultat doit se situer strictement entre 0 et 90 degrés. Tout ce qui est en dehors signale des entrées invalides ou des côtés mal étiquetés.",
          "Contrôle aller-retour. Calculez cos(A) et confirmez qu'il égale b/c. Pour l'exemple 1, cos(36.87) ≈ 0.8 = 4/5. Si l'aller-retour échoue, l'angle est faux.",
          "Contrôle croisé par méthode. Recalculez avec l'arc sinus ou l'arc tangente en utilisant le troisième côté. Si arccos(4/5) = 36.87 et arctan(3/4) = 36.87, la réponse est solide. Un désaccord pointe vers une erreur d'étiquetage."
        ],
        "closingParagraphs": [
          "Pour le triangle 3-4-5, vérifiez aussi que les côtés satisfont le théorème de Pythagore : 9 + 16 = 25. Confirmer les côtés avant de faire confiance à l'angle qui en dérive est une bonne pratique, et la calculatrice du théorème de Pythagore le fait vite.",
          "Un quatrième contrôle utilise le complément. Calculez B = 90 moins A, puis vérifiez que l'arc cosinus de l'autre rapport donne B. Dans l'exemple 1, arccos(3/5) = 53.13, ce qui correspond à 90 moins 36.87. Quand les quatre contrôles passent, la réponse est au-delà du doute."
        ]
      },
      "arccos-applications": {
        "h2": "Applications concrètes de l'arc cosinus",
        "imgAlt": "Quatre panneaux montrant des calculs d'arc cosinus pour le levé topographique, l'ombre, le chevron de toit et l'angle d'un contreventement",
        "figcaption": "Problèmes d'arc cosinus du monde réel : angles de pente, hauteur du soleil, pente de chevron et angles d'installation de contreventements.",
        "blocks": [
          {
            "kind": "p",
            "text": "L'arc cosinus apparaît partout où une distance de pente et une distance horizontale sont les mesures naturelles. L'hypoténuse est mesurée le long de la pente elle-même, et le côté adjacent est la composante horizontale."
          },
          {
            "kind": "h3",
            "text": "Levé de pentes"
          },
          {
            "kind": "p",
            "text": "Un géomètre mesure 65 mètres le long d'une pente et 60 mètres horizontalement. L'angle de pente est arccos(60/65), environ 22.6 degrés. C'est la situation standard de l'arc cosinus : la distance inclinée se mesure facilement au ruban, l'horizontale vient de la carte ou d'un niveau, et le côté opposé (l'élévation) est ce que vous pourriez calculer ensuite."
          },
          {
            "kind": "h3",
            "text": "Hauteur du soleil d'après les ombres"
          },
          {
            "kind": "p",
            "text": "Un rayon lumineux de 10 mètres projette une ombre de 8 mètres. L'angle de hauteur du soleil est arccos(8/10), environ 36.9 degrés. Les problèmes d'ombres sont des problèmes d'arc cosinus naturels car l'ombre repose le long du sol (adjacent) et le rayon est l'hypoténuse."
          },
          {
            "kind": "h3",
            "text": "Pente d'un chevron de toit"
          },
          {
            "kind": "p",
            "text": "Un chevron couvre 6.5 mètres avec une course horizontale de 6 mètres. L'angle de pente à l'avant-toit est arccos(6/6.5), environ 22.6 degrés. Les charpentiers mesurent le chevron directement et la course le long de la solive, donc l'arc cosinus colle aux mesures telles que prises."
          },
          {
            "kind": "h3",
            "text": "Contreventements d'ingénierie"
          },
          {
            "kind": "p",
            "text": "Un contreventement diagonal mesure 4 mètres avec une base horizontale de 3.5 mètres. L'angle du contreventement est arccos(3.5/4), environ 28.96 degrés. Les croquis de structure donnent la longueur du contreventement et son emprise ; l'arc cosinus les transforme en angle d'installation."
          }
        ]
      },
      "arccos-related": {
        "relatedItems": [
          "Calculatrice d'angle de triangle rectangle",
          "Calculatrice d'angle de triangle rectangle à partir du sinus",
          "Calculatrice d'angle de triangle rectangle à partir de la tangente",
          "Calculatrice d'angle manquant de triangle rectangle",
          "Calculatrice de rapports trigonométriques de triangle rectangle",
          "Calculatrice de rapport cosinus"
        ],
        "h2": "Explorez les calculatrices de triangles rectangles associées"
      },
      "arccos-conclusion": {
        "h2": "Trouvez tout angle à partir du cosinus en confiance",
        "blocks": [
          {
            "kind": "p",
            "text": "Commencez par identifier le côté adjacent : le côté touchant votre angle cible. Confirmez que l'hypoténuse est le plus long côté. Divisez, appliquez l'arc cosinus, et lisez l'angle en degrés. Obtenez le second angle en soustrayant le premier de 90. Vérifiez avec le contrôle aller-retour, un calcul croisé par méthode, et la somme des angles. Avec ces étapes, tout problème adjacent et hypoténuse se réduit à une routine fiable. Retournez à la calculatrice en haut de cette page pour faire tourner vos nombres."
          }
        ]
      }
    }
  },
  "de": {
    "faqs": [
      {
        "question": "Was bedeutet A = arccos(b / c) eigentlich?",
        "answer": "Es bedeutet, dass Sie die Ankathete durch die Hypotenuse teilen und dann von dieser Dezimalzahl rückwärts arbeiten, um den Winkel zu finden, dessen Kosinus ihr entspricht. Das Ergebnis ist der spitze Winkel zwischen der Ankathete und der Hypotenuse."
      },
      {
        "question": "Wann sollte ich arccos statt arcsin verwenden?",
        "answer": "Verwenden Sie arccos, wenn Sie die Ankathete und die Hypotenuse kennen. Verwenden Sie arcsin, wenn Sie die Gegenkathete und die Hypotenuse kennen. Beide geben für dasselbe Dreieck denselben Winkel; die Wahl hängt davon ab, welche Seiten Sie gemessen haben."
      },
      {
        "question": "Warum erhalte ich einen Mathematikfehler von arccos?",
        "answer": "Die häufigste Ursache ist ein Verhältnis größer als 1, was passiert, wenn die eingegebene Ankathete länger ist als die Hypotenuse. In einem gültigen rechtwinkligen Dreieck ist die Hypotenuse immer die längste, also prüfen Sie Ihre Seitenbeschriftungen."
      },
      {
        "question": "Kann ich arccos verwenden, ohne die Gegenkathete zu kennen?",
        "answer": "Ja. Das ist der Hauptvorteil des Arkuskosinus: Er braucht nur die Ankathete und die Hypotenuse. Die Gegenkathete kommt in der Berechnung nie vor."
      },
      {
        "question": "Was ist der Unterschied zwischen cos und arccos?",
        "answer": "Der Kosinus nimmt einen Winkel und gibt ein Verhältnis zurück: cos(60 Grad) = 0.5. Der Arkuskosinus kehrt dies um: Er nimmt ein Verhältnis und gibt den Winkel zurück, also arccos(0.5) = 60 Grad. Verwenden Sie den Kosinus, wenn Sie den Winkel kennen; verwenden Sie arccos, wenn Sie die Seiten kennen."
      },
      {
        "question": "Warum geben arccos, arcsin und arctan dieselbe Antwort?",
        "answer": "Weil sie denselben geometrischen Winkel über verschiedene Seitenpaare beschreiben. In einem 3-4-5-Dreieck sind arccos(4/5), arcsin(3/5) und arctan(3/4) alle gleich 36.87 Grad. Die Übereinstimmung zwischen den Methoden bestätigt korrekte Seitenbeschriftungen."
      },
      {
        "question": "Was bedeutet es, wenn b/c genau 0.5 ist?",
        "answer": "Der Winkel ist genau 60 Grad. Dies ist das spezielle 30-60-90-Dreieck, bei dem die Seite, die an den 60-Grad-Winkel anliegt, die Hälfte der Hypotenuse ist."
      },
      {
        "question": "Sollte die Antwort in Grad oder Radiant sein?",
        "answer": "Dieser Rechner verwendet Grad, den Standard für Bauwesen, Vermessung und Schulgeometrie. Wenn Sie von Hand rechnen, stellen Sie sicher, dass der Rechner im Gradmodus ist; ein Radiantmodus-Ergebnis wie 0.64 wird durch Multiplikation mit 180/pi in 36.87 Grad umgerechnet."
      },
      {
        "question": "Wie finde ich den anderen spitzen Winkel?",
        "answer": "Subtrahieren Sie von 90 Grad. Wenn arccos A = 36.87 Grad ergibt, dann ist B = 90 - 36.87 = 53.13 Grad. Weitere Trigonometrie ist nicht nötig."
      },
      {
        "question": "Kann das arccos-Ergebnis jemals 90 Grad sein?",
        "answer": "Nur als Grenzwert: arccos(0) = 90 Grad, aber eine Ankathete von null bedeutet ein entartetes Dreieck, kein echtes. Gültige rechtwinklige Dreieckswinkel aus arccos liegen immer strikt zwischen 0 und 90 Grad."
      },
      {
        "question": "Wie kann ich meine arccos-Antwort prüfen?",
        "answer": "Berechnen Sie cos(A) und bestätigen Sie, dass er gleich b/c ist. Rechnen Sie außerdem mit arcsin oder arctan unter Verwendung der dritten Seite nach; alle Methoden müssen übereinstimmen. Prüfen Sie schließlich, dass beide spitzen Winkel zusammen genau 90 Grad ergeben."
      },
      {
        "question": "Ändert das Skalieren des Dreiecks das arccos-Ergebnis?",
        "answer": "Nein. Ähnliche Dreiecke haben identische Winkel. Ein 3-4-5-Dreieck und ein 6-8-10-Dreieck ergeben beide arccos(0.8) = 36.87 Grad, weil das Verhältnis b/c durch Skalierung unverändert bleibt."
      }
    ],
    "relatedHeading": "Verwandte Rechtwinkeldreieck-Rechner entdecken",
    "relatedItems": [
      "Rechtwinkeldreieck-Winkelrechner",
      "Rechtwinkeldreieck-Winkelrechner aus dem Sinus",
      "Rechtwinkeldreieck-Winkelrechner aus dem Tangens",
      "Rechtwinkeldreieck-Rechner für fehlende Winkel",
      "Rechtwinkeldreieck-Rechner für trigonometrische Verhältnisse",
      "Kosinus-Verhältnis-Rechner"
    ],
    "tocHeading": "In diesem Ratgeber",
    "tocItems": {
      "arccos-intro": "Was ist der Winkelrechner aus dem Kosinus?",
      "arccos-what": "Arkuskosinus (umgekehrter Kosinus) verstehen",
      "arccos-vs": "Arkuskosinus vs. Arkussinus vs. Arkustangens",
      "arccos-anatomy": "Ankathete und Hypotenuse",
      "arccos-howto": "So verwenden Sie den Rechner",
      "arccos-examples": "16 durchgerechnete Beispiele",
      "arccos-special": "Besondere Winkelwerte",
      "arccos-mistakes": "Häufige Fehler",
      "arccos-verify": "Ihre Antwort überprüfen",
      "arccos-applications": "Anwendungen im Alltag",
      "arccos-related": "Verwandte Rechner",
      "arccos-faq": "Häufige Fragen"
    },
    "sections": {
      "arccos-intro": {
        "h2": "Was ist der Rechtwinkeldreieck-Rechner für den Winkel aus dem Kosinus?",
        "blocks": [
          {
            "kind": "p",
            "text": "Der Rechtwinkeldreieck-Winkelrechner aus dem Kosinus findet einen spitzen Winkel, wenn Sie die Ankathete und die Hypotenuse kennen. Er wendet die Umkehrfunktion des Kosinus, geschrieben arccos oder cos, auf das Verhältnis dieser beiden Seiten an. Das Ergebnis ist der Winkel A in Grad."
          },
          {
            "kind": "p",
            "text": "Dieses Werkzeug existiert für eine bestimmte Messsituation: Sie können die Seite neben Ihrem Zielwinkel und die längste Seite des Dreiecks messen, aber die Gegenkathete ist unbekannt oder schwer zu erreichen. Statt die Gegenkathete erst zu berechnen, überspringt arccos sie vollständig und wandelt das Verhältnis Ankathete zu Hypotenuse direkt in den Winkel um."
          },
          {
            "kind": "p",
            "text": "Beispielsweise ergeben eine Ankathete von 4 und eine Hypotenuse von 5 das Verhältnis 0.8. Der Arkuskosinus von 0.8 ist ungefähr 36.87 Grad. Das ist der Winkel A. Der andere spitze Winkel folgt aus der Komplementregel: 90 minus 36.87, also 53.13 Grad."
          },
          {
            "kind": "p",
            "text": "Der Arkuskosinus ist eines von drei umgekehrten trigonometrischen Werkzeugen auf dieser Seite. Wenn Ihre bekannten Seiten die Gegenkathete und die Hypotenuse sind, ist der Winkelrechner aus dem Sinus die richtige Wahl. Wenn Sie beide Katheten kennen, aber nicht die Hypotenuse, verwenden Sie den Winkelrechner aus dem Tangens. Diese Seite behandelt den Kosinus-Fall in voller Tiefe."
          }
        ]
      },
      "arccos-what": {
        "h2": "Arkuskosinus (umgekehrter Kosinus) verstehen",
        "imgAlt": "Diagramm, das die beiden Schritte des Arkuskosinus zeigt: b durch c teilen, dann arccos anwenden, um den Winkel zu erhalten",
        "figcaption": "So funktioniert der Arkuskosinus: Teilen Sie die Ankathete durch die Hypotenuse und wenden Sie dann den umgekehrten Kosinus an, um den Winkel zurückzugewinnen.",
        "blocks": [
          {
            "kind": "p",
            "text": "Der normale Kosinus nimmt einen Winkel und gibt ein Verhältnis zurück. Der Kosinus von 60 Grad ist 0.5. Der Arkuskosinus kehrt dies um: Er nimmt ein Verhältnis und gibt den Winkel zurück. Der Arkuskosinus von 0.5 ist 60 Grad. Die beiden Funktionen heben einander auf, weshalb der Arkuskosinus auch als cos geschrieben wird."
          },
          {
            "kind": "p",
            "text": "Die Formel, die dieser Rechner verwendet, lautet . Hier ist b die Ankathete, c die Hypotenuse und A der Winkel dazwischen. Das Verhältnis b/c liegt bei einem gültigen rechtwinkligen Dreieck immer zwischen 0 und 1, weil die Ankathete immer kürzer ist als die Hypotenuse."
          },
          {
            "kind": "p",
            "text": "Stellen Sie sich den Arkuskosinus als Frage vor: „Welcher Winkel hat diesen Kosinuswert?“ Wenn b/c gleich 0.8 ist, lautet die Frage „Welcher Winkel hat einen Kosinus von 0.8?“ Die Antwort, 36.87 Grad, ist der Winkel, dessen Ankathete 80 Prozent so lang ist wie die Hypotenuse."
          },
          {
            "kind": "h3",
            "text": "Das Verhältnis erzählt eine Geschichte"
          },
          {
            "kind": "p",
            "text": "Der Wert von b/c beschreibt die Form des Dreiecks. Ein Verhältnis nahe 1 bedeutet, dass die Ankathete fast so lang ist wie die Hypotenuse, also ist der Winkel dazwischen winzig. Ein Verhältnis nahe 0 bedeutet, dass die Ankathete im Vergleich zur Hypotenuse sehr kurz ist, also öffnet sich der Winkel weit in Richtung 90 Grad. Ein Verhältnis von genau 0.5 bedeutet immer 60 Grad."
          },
          {
            "kind": "h3",
            "text": "Definitionsbereich des Arkuskosinus"
          },
          {
            "kind": "p",
            "text": "Der Arkuskosinus akzeptiert in diesem geometrischen Kontext nur Eingaben von 0 bis 1. Ein Verhältnis über 1 ist für ein rechtwinkliges Dreieck unmöglich und signalisiert einen Beschriftungsfehler: Die Hypotenuse muss der Nenner sein und muss die längste Seite sein. Ein negatives Verhältnis würde einen stumpfen Winkel beschreiben, der als Winkel A in einem rechtwinkligen Dreieck nicht vorkommen kann."
          }
        ]
      },
      "arccos-vs": {
        "h2": "Arkuskosinus vs. Arkussinus vs. Arkustangens: Wann welche verwenden",
        "blocks": [
          {
            "kind": "p",
            "text": "Alle drei Umkehrfunktionen finden denselben Winkel, wenn sie auf dasselbe Dreieck angewendet werden. Sie unterscheiden sich nur darin, welche Seiten sie benötigen. Die richtige Wahl erspart Ihnen die Berechnung einer Seite, die Sie nicht brauchen."
          },
          {
            "kind": "p",
            "text": "Verwenden Sie arccos, wenn Sie die Ankathete (b) und die Hypotenuse (c) kennen. Die Formel lautet . Dies ist die natürliche Wahl, wenn die Hypotenuse direkt gemessen wurde, zum Beispiel mit einem Bandmaß entlang eines Hangs, und die horizontale Entfernung bekannt ist."
          },
          {
            "kind": "p",
            "text": "Verwenden Sie arcsin, wenn Sie die Gegenkathete (a) und die Hypotenuse (c) kennen. Die Formel lautet . Höhenprobleme begünstigen den Arkussinus: Der senkrechte Anstieg liegt dem bodennahen Winkel gegenüber. Der Winkelrechner aus dem Sinus behandelt diesen Fall."
          },
          {
            "kind": "p",
            "text": "Verwenden Sie arctan, wenn Sie beide Katheten (a und b), aber nicht die Hypotenuse kennen. Die Formel lautet . Feldmessungen wie Dachanstieg über Dachlauf begünstigen den Arkustangens, weil beide Katheten direkt gemessen werden. Siehe den Winkelrechner aus dem Tangens für diese Methode."
          },
          {
            "kind": "h3",
            "text": "Sie müssen übereinstimmen"
          },
          {
            "kind": "p",
            "text": "Für jedes einzelne Dreieck liefern arccos(b/c), arcsin(a/c) und arctan(a/b) den identischen Winkel. In einem 3-4-5-Dreieck sind arccos(4/5), arcsin(3/5) und arctan(3/4) alle gleich 36.87 Grad. Wenn zwei Methoden nicht übereinstimmen, ist eine Seite falsch beschriftet. Diese Gegenprüfung ist die zuverlässigste verfügbare Verifikation, und der Rechner für trigonometrische Verhältnisse kann alle drei Verhältnisse auf einmal bestätigen."
          },
          {
            "kind": "h3",
            "text": "Warum nicht immer den Arkustangens verwenden?"
          },
          {
            "kind": "p",
            "text": "Der Arkustangens braucht beide Katheten. Wenn die Gegenkathete unbekannt und schwer zu messen ist, fügt ihre vorherige Berechnung einen unnötigen Schritt und eine zusätzliche Fehlerquelle hinzu, nur um den Arkustangens zu verwenden. Der Arkuskosinus geht direkt von den zwei Seiten, die Sie haben, zum gewünschten Winkel. Passen Sie die Funktion an Ihre Messungen an, nicht an die Gewohnheit."
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "Ankathete und Hypotenuse: Die zwei Eingaben",
        "imgAlt": "Rechtwinkliges Dreieck mit hervorgehobener Ankathete b und Hypotenuse c für die Arkuskosinus-Formel",
        "figcaption": "Anatomie für den Arkuskosinus: b ist die Ankathete, die den Winkel A berührt, c ist die Hypotenuse gegenüber dem rechten Winkel.",
        "blocks": [
          {
            "kind": "p",
            "text": "Der Arkuskosinus braucht genau zwei Seiten: die Ankathete b und die Hypotenuse c. Diese Beschriftungen richtig zu setzen ist der ganze Kampf. Alles danach ist Arithmetik."
          },
          {
            "kind": "h3",
            "text": "Die Ankathete identifizieren"
          },
          {
            "kind": "p",
            "text": "Die Ankathete ist die Kathete, die den Winkel A berührt. Sie bildet eine Kante des Winkels selbst. Im Diagramm unten verläuft Seite b entlang der Unterseite vom rechten Winkel zum Winkel A. Wenn Sie stattdessen den anderen spitzen Winkel B berechnen, tauschen die Beschriftungen: Die Seite, die an B anliegt, ist diejenige, die B berührt."
          },
          {
            "kind": "h3",
            "text": "Die Hypotenuse identifizieren"
          },
          {
            "kind": "p",
            "text": "Die Hypotenuse ist die Seite gegenüber dem rechten Winkel. Sie ist immer die längste Seite des Dreiecks. Sie berührt den Scheitelpunkt des rechten Winkels nie. Wenn Ihre „Hypotenuse“ nicht die längste Ihrer drei Messungen ist, beschriften Sie neu, bevor Sie rechnen. Der Satz-des-Pythagoras-Rechner kann bestätigen, welche Seite die längste ist, wenn Sie alle drei haben."
          },
          {
            "kind": "h3",
            "text": "Warum die Gegenkathete außen vor bleibt"
          },
          {
            "kind": "p",
            "text": "Der Kosinus ist definiert als Ankathete zu Hypotenuse. Die Gegenkathete kommt in diesem Verhältnis einfach nicht vor. Das ist der Sinn dieses Rechners: Wenn die Gegenkathete unbekannt, verborgen oder für Ihren Messaufbau irrelevant ist, liefert der Arkuskosinus trotzdem den Winkel. Sie ignorieren die Gegenkathete nicht; Sie verwenden ein Verhältnis, das sie nie brauchte."
          }
        ]
      },
      "arccos-howto": {
        "h2": "So verwenden Sie den Winkelrechner aus dem Kosinus",
        "imgAlt": "In vier Schritten durchgerechnetes Beispiel für arccos mit b gleich 4 und c gleich 5",
        "figcaption": "Durchgerechnetes Beispiel: b = 4, c = 5 ergibt A = arccos(0.8), ungefähr 36.87 Grad, verifiziert durch Hin- und Rückrechnung.",
        "steps": [
          "Bestätigen Sie den rechten Winkel. Der Rechner funktioniert nur für rechtwinklige Dreiecke. Identifizieren Sie zuerst die 90-Grad-Ecke.",
          "Wählen Sie Ihren Zielwinkel. Entscheiden Sie, ob Sie den Winkel A oder den Winkel B berechnen. Die Ankathete ist relativ zu dieser Wahl definiert.",
          "Messen Sie die Ankathete b. Dies ist die Kathete, die Ihren Zielwinkel berührt. Notieren Sie sie in einer beliebigen Einheit.",
          "Messen Sie die Hypotenuse c. Dies ist die längste Seite, gegenüber dem rechten Winkel. Verwenden Sie dieselbe Einheit wie bei b.",
          "Prüfen Sie, dass b kleiner ist als c. Wenn nicht, sind die Seiten falsch beschriftet. Die Hypotenuse muss die längste sein.",
          "Geben Sie beide Werte ein und drücken Sie Berechnen. Das Werkzeug berechnet b/c, wendet arccos an und gibt den Winkel A in Grad zurück.",
          "Finden Sie den zweiten Winkel. Subtrahieren Sie von 90 Grad: B = 90 minus A.",
          "Verifizieren Sie. Berechnen Sie cos(A) auf einem Rechner und bestätigen Sie, dass er gleich b/c ist. Wenn ja, ist die Antwort solide."
        ]
      },
      "arccos-examples": {
        "h2": "16 durchgerechnete Beispiele",
        "blocks": [
          {
            "kind": "p",
            "text": "Jedes Beispiel folgt denselben vier Schritten: Formel aufschreiben, einsetzen, dividieren, arccos anwenden. Winkel sind auf zwei Dezimalstellen gerundet."
          },
          {
            "kind": "h3",
            "text": "Beispiel 1: Das 3-4-5-Dreieck"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 4 und Hypotenuse c = 5, finden Sie den Winkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) . Das Komplement B = 53.13."
          },
          {
            "kind": "h3",
            "text": "Beispiel 2: Das 5-12-13-Dreieck"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 12 und Hypotenuse c = 13, finden Sie den Winkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) . Das Komplement B = 67.38."
          },
          {
            "kind": "h3",
            "text": "Beispiel 3: Das 8-15-17-Dreieck"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 8 und Hypotenuse c = 17, finden Sie den Winkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) . Das Komplement B = 28.07."
          },
          {
            "kind": "h3",
            "text": "Beispiel 4: Dasselbe Dreieck, anderer Winkel"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 15 und Hypotenuse c = 17 (Berechnung des Winkels B des 8-15-17-Dreiecks)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) . Beachten Sie: 61.93 + 28.07 = 90, wie erforderlich."
          },
          {
            "kind": "h3",
            "text": "Beispiel 5: 5-12-13, anderer Winkel"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 5 und Hypotenuse c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) . Dies stimmt mit dem Komplement aus Beispiel 2 überein."
          },
          {
            "kind": "h3",
            "text": "Beispiel 6: 3-4-5, anderer Winkel"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 3 und Hypotenuse c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) . Dies stimmt mit dem Komplement aus Beispiel 1 überein."
          },
          {
            "kind": "h3",
            "text": "Beispiel 7: Der 60-Grad-Sonderfall"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 1 und Hypotenuse c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60 exakt. Dies ist das spezielle 30-60-90-Dreieck. Der Rechner für spezielle rechtwinklige Dreiecke behandelt diese exakten Werte."
          },
          {
            "kind": "h3",
            "text": "Beispiel 8: Das 7-24-25-Dreieck"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 7 und Hypotenuse c = 25, finden Sie den Winkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) . Das Komplement B = 16.26."
          },
          {
            "kind": "h3",
            "text": "Beispiel 9: 7-24-25, anderer Winkel"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 24 und Hypotenuse c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) . Stimmt mit dem Komplement aus Beispiel 8 überein."
          },
          {
            "kind": "h3",
            "text": "Beispiel 10: Das 9-40-41-Dreieck"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 9 und Hypotenuse c = 41, finden Sie den Winkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) . Eine kleine Ankathete ergibt einen weiten Winkel."
          },
          {
            "kind": "h3",
            "text": "Beispiel 11: 9-40-41, anderer Winkel"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 40 und Hypotenuse c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) . Beachten Sie: 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "Beispiel 12: Das 20-21-29-Dreieck"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 20 und Hypotenuse c = 29, finden Sie den Winkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) . Das Komplement B = 43.60."
          },
          {
            "kind": "h3",
            "text": "Beispiel 13: 20-21-29, anderer Winkel"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 21 und Hypotenuse c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) . Stimmt mit dem Komplement aus Beispiel 12 überein."
          },
          {
            "kind": "h3",
            "text": "Beispiel 14: Das 6-8-10-Dreieck"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 6 und Hypotenuse c = 10, finden Sie den Winkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) . Derselbe Winkel wie in Beispiel 6, da 6-8-10 ein skaliertes 3-4-5 ist."
          },
          {
            "kind": "h3",
            "text": "Beispiel 15: 6-8-10, anderer Winkel"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 8 und Hypotenuse c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) . Wie in Beispiel 1, was bestätigt, dass ähnliche Dreiecke dieselben Winkel haben."
          },
          {
            "kind": "h3",
            "text": "Beispiel 16: Das 12-16-20-Dreieck"
          },
          {
            "kind": "p",
            "text": "Gegeben Ankathete b = 12 und Hypotenuse c = 20, finden Sie den Winkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) . Ein weiteres skaliertes 3-4-5, wieder derselbe Winkel. Das Skalieren von Seiten ändert Winkel nie."
          }
        ]
      },
      "arccos-special": {
        "h2": "Besondere Winkelwerte, die sich zu merken lohnen",
        "blocks": [
          {
            "kind": "p",
            "text": "Einige Arkuskosinus-Werte kommen so oft vor, dass sie zu erkennen Zeit spart. Sie stammen aus den speziellen rechtwinkligen Dreiecken."
          },
          {
            "kind": "p",
            "text": ": Die Ankathete entspricht der Hypotenuse, also schrumpft der Winkel auf null. Dies ist ein entarteter Fall, kein echtes Dreieck, aber er verankert die Skala."
          },
          {
            "kind": "p",
            "text": ": Aus dem 30-60-90-Dreieck. Wenn die Ankathete etwa 86.6 Prozent der Hypotenuse beträgt, ist der Winkel 30 Grad."
          },
          {
            "kind": "p",
            "text": ": Aus dem 45-45-90-Dreieck. Gleiche Katheten ergeben diesen exakten Wert."
          },
          {
            "kind": "p",
            "text": ": Aus dem 30-60-90-Dreieck, der Fall aus Beispiel 7. Wenn die Ankathete genau die Hälfte der Hypotenuse ist, ist der Winkel genau 60 Grad."
          },
          {
            "kind": "p",
            "text": ": Die Ankathete schrumpft auf null, also öffnet sich der Winkel zu einem rechten Winkel. Wie der Nullfall ist dies eine Grenze, kein echter Dreieckswinkel."
          },
          {
            "kind": "p",
            "text": "Zwischen diesen Orientierungspunkten nimmt der Arkuskosinus mit steigendem Verhältnis stetig ab. Die fünf Ankerpunkte zu kennen lässt Sie jeden Arkuskosinus im Kopf schätzen: Ein Verhältnis von 0.7 liegt zwischen 0.5 (60 Grad) und 0.866 (30 Grad), etwas näher an 45 Grad. Der wahre Wert ist etwa 45.57 Grad."
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "Häufige Fehler bei der Verwendung des Arkuskosinus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Die Gegenkathete statt der Ankathete verwenden"
          },
          {
            "kind": "p",
            "text": "Der häufigste Fehler. Der Arkuskosinus braucht die Seite, die den Winkel A berührt, nicht die Seite gegenüber. Wenn Sie die Gegenkathete in arccos eingeben, erhalten Sie das Komplement des beabsichtigten Winkels. In einem 3-4-5-Dreieck ist arccos(3/5) = 53.13 Grad der Winkel B, nicht der Winkel A. Abhilfe: Skizzieren Sie das Dreieck, markieren Sie Ihren Zielwinkel und verfolgen Sie, welche Kathete ihn berührt."
          },
          {
            "kind": "h3",
            "text": "Die Hypotenuse in den Zähler setzen"
          },
          {
            "kind": "p",
            "text": "Der Arkuskosinus erwartet Ankathete zu Hypotenuse, eine Zahl unter 1. Die Eingabe von c/b statt b/c ergibt ein Verhältnis über 1, und der Rechner gibt einen Mathematikfehler zurück. Abhilfe: Die Hypotenuse ist im Arkuskosinus-Verhältnis immer der Nenner."
          },
          {
            "kind": "h3",
            "text": "Arkuskosinus mit Kosinus verwechseln"
          },
          {
            "kind": "p",
            "text": "Auf vielen Rechnern sitzen die Kosinus-Taste und die Umkehr-Kosinus-Taste (oft beschriftet mit cos oder arccos) nahe beieinander. Das Drücken von cos(0.8) statt arccos(0.8) gibt 0.6967, ein bedeutungsloses Verhältnis, statt 36.87 Grad. Abhilfe: Prüfen Sie, dass Ihr Rechner im Gradmodus ist und dass Sie die Umkehrtaste gedrückt haben."
          },
          {
            "kind": "h3",
            "text": "Grad und Radiant mischen"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) ist 36.87 Grad, aber 0.6435 Radiant. Wenn Ihre Handrechnung für ein 3-4-5-Dreieck 0.64 ergibt, ist der Rechner im Radiantmodus. Multiplizieren Sie mit 180/pi, um umzurechnen, oder schalten Sie den Modus auf Grad. Dieser Rechner gibt Grad aus."
          },
          {
            "kind": "h3",
            "text": "Seiten in verschiedenen Einheiten eingeben"
          },
          {
            "kind": "p",
            "text": "Ankathete in Zoll und Hypotenuse in Fuß verfälscht das Verhältnis. Rechnen Sie zuerst in eine gemeinsame Einheit um. Das Verhältnis ist einheitenlos, aber nur, wenn beide Eingaben dieselbe Einheit haben."
          },
          {
            "kind": "h3",
            "text": "Das Verhältnis zu früh runden"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 Grad, aber arccos(0.80), gerundet von 0.795, ergibt 37.24 Grad. Nahe den Verhältnissen 0 und 1, wo der Arkuskosinus am steilsten ist, vergrößern sich kleine Verhältnisfehler. Halten Sie volle Präzision durch die Division und runden Sie nur den endgültigen Winkel."
          },
          {
            "kind": "h3",
            "text": "Vergessen, welcher Winkel berechnet wurde"
          },
          {
            "kind": "p",
            "text": "Der Arkuskosinus gibt den Winkel zurück, dessen Ankathete Sie eingegeben haben. Wenn Sie die Seite eingegeben haben, die den Winkel B berührt, ist das Ergebnis der Winkel B. Beschriften Sie die Antwort mit dem richtigen Winkelnamen, oder verifizieren Sie mit dem Komplement: Die beiden spitzen Winkel müssen zusammen 90 Grad ergeben."
          }
        ]
      },
      "arccos-verify": {
        "h2": "Ihre Arkuskosinus-Antwort überprüfen",
        "steps": [
          "Bereichsprüfung. Das Ergebnis muss strikt zwischen 0 und 90 Grad liegen. Alles außerhalb signalisiert ungültige Eingaben oder falsch beschriftete Seiten.",
          "Hin- und Rückrechnung. Berechnen Sie cos(A) und bestätigen Sie, dass er gleich b/c ist. Für Beispiel 1: cos(36.87)  0.8 = 4/5. Wenn die Hin- und Rückrechnung scheitert, ist der Winkel falsch.",
          "Methodenübergreifende Prüfung. Rechnen Sie mit arcsin oder arctan unter Verwendung der dritten Seite nach. Wenn arccos(4/5) = 36.87 und arctan(3/4) = 36.87, ist die Antwort solide. Uneinigkeit deutet auf einen Beschriftungsfehler hin."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Drei Prüfungen bestätigen eine korrekte Arkuskosinus-Berechnung:"
          }
        ],
        "closingParagraphs": [
          "Für das 3-4-5-Dreieck verifizieren Sie außerdem, dass die Seiten den Satz des Pythagoras erfüllen: 9 + 16 = 25. Die Seiten zu bestätigen, bevor man dem daraus abgeleiteten Winkel vertraut, ist gute Praxis, und der Satz-des-Pythagoras-Rechner macht es schnell.",
          "Eine vierte Prüfung nutzt das Komplement. Berechnen Sie B = 90 minus A, und verifizieren Sie dann, dass der Arkuskosinus des anderen Verhältnisses B ergibt. In Beispiel 1 ist arccos(3/5) = 53.13, was 90 minus 36.87 entspricht. Wenn alle vier Prüfungen bestehen, ist die Antwort zweifelsfrei."
        ]
      },
      "arccos-applications": {
        "h2": "Anwendungen des Arkuskosinus im Alltag",
        "imgAlt": "Vier Tafeln, die Vermessungs-, Schatten-, Dachsparren- und Strebenwinkelberechnungen mit arccos zeigen",
        "figcaption": "Arkuskosinus-Probleme der Praxis: Hangwinkel, Sonnenhöhe, Sparrenneigung und Einbauwinkel von Streben.",
        "blocks": [
          {
            "kind": "p",
            "text": "Der Arkuskosinus erscheint überall dort, wo eine Hangstrecke und eine horizontale Strecke die natürlichen Messungen sind. Die Hypotenuse wird entlang des Hangs selbst gemessen, und die Ankathete ist die horizontale Komponente."
          },
          {
            "kind": "h3",
            "text": "Hänge vermessen"
          },
          {
            "kind": "p",
            "text": "Ein Vermesser misst 65 Meter entlang eines Hangs und 60 Meter horizontal. Der Hangwinkel ist arccos(60/65), etwa 22.6 Grad. Dies ist die Standard-Arkuskosinus-Situation: Die Schrägdistanz lässt sich leicht messen, die Horizontale kommt aus der Karte oder einem Nivelliergerät, und die Gegenkathete (Höhenunterschied) ist das, was Sie als Nächstes berechnen könnten."
          },
          {
            "kind": "h3",
            "text": "Sonnenhöhe aus Schatten"
          },
          {
            "kind": "p",
            "text": "Ein 10 Meter langer Lichtstrahl wirft einen 8 Meter langen Schatten. Der Sonnenhöhenwinkel ist arccos(8/10), etwa 36.9 Grad. Schattenprobleme sind natürliche Arkuskosinus-Probleme, weil der Schatten entlang des Bodens liegt (die Ankathete) und der Strahl die Hypotenuse ist."
          },
          {
            "kind": "h3",
            "text": "Dachsparrenneigung"
          },
          {
            "kind": "p",
            "text": "Ein Sparren spannt 6.5 Meter bei einem horizontalen Lauf von 6 Metern. Der Neigungswinkel an der Traufe ist arccos(6/6.5), etwa 22.6 Grad. Zimmerleute messen den Sparren direkt und den Lauf entlang des Balkens, also passt der Arkuskosinus zu den Messungen, wie sie genommen wurden."
          },
          {
            "kind": "h3",
            "text": "Konstruktionsstreben"
          },
          {
            "kind": "p",
            "text": "Eine Diagonalstrebe misst 4 Meter bei einer 3.5 Meter langen horizontalen Basis. Der Strebenwinkel ist arccos(3.5/4), etwa 28.96 Grad. Konstruktionsskizzen geben die Strebenlänge und ihren Fußabdruck an; der Arkuskosinus verwandelt diese in den Einbauwinkel."
          }
        ]
      },
      "arccos-related": {
        "relatedItems": [
          "Rechtwinkeldreieck-Winkelrechner",
          "Rechtwinkeldreieck-Winkelrechner aus dem Sinus",
          "Rechtwinkeldreieck-Winkelrechner aus dem Tangens",
          "Rechtwinkeldreieck-Rechner für fehlende Winkel",
          "Rechtwinkeldreieck-Rechner für trigonometrische Verhältnisse",
          "Kosinus-Verhältnis-Rechner"
        ],
        "h2": "Verwandte Rechtwinkeldreieck-Rechner entdecken"
      },
      "arccos-conclusion": {
        "h2": "Jeden Winkel aus dem Kosinus mit Vertrauen finden",
        "blocks": [
          {
            "kind": "p",
            "text": "Beginnen Sie mit der Identifizierung der Ankathete: der Kathete, die Ihren Zielwinkel berührt. Bestätigen Sie, dass die Hypotenuse die längste Seite ist. Dividieren Sie, wenden Sie arccos an und lesen Sie den Winkel in Grad ab. Erhalten Sie den zweiten Winkel aus 90 minus dem ersten. Verifizieren Sie mit der Hin- und Rückrechnung, einer methodenübergreifenden Berechnung und der Winkelsumme. Mit diesen Schritten wird jedes Ankatheten-und-Hypotenusen-Problem zu einer zuverlässigen Routine. Kehren Sie zum Rechner oben auf dieser Seite zurück, um Ihre Zahlen durchzurechnen."
          }
        ]
      }
    }
  },
  "it": {
    "faqs": [
      {
        "question": "Che cosa significa davvero A = arccos(b / c)?",
        "answer": "Significa che dividi il cateto adiacente per l'ipotenusa, poi lavori a ritroso da quel decimale per trovare l'angolo il cui coseno gli è uguale. Il risultato è l'angolo acuto compreso tra il cateto adiacente e l'ipotenusa."
      },
      {
        "question": "Quando dovrei usare arccos invece di arcsin?",
        "answer": "Usa arccos quando conosci il cateto adiacente e l'ipotenusa. Usa arcsin quando conosci il cateto opposto e l'ipotenusa. Entrambi danno lo stesso angolo per lo stesso triangolo; la scelta dipende da quali lati hai misurato."
      },
      {
        "question": "Perché ottengo un errore matematico da arccos?",
        "answer": "La causa più comune è un rapporto maggiore di 1, che accade quando il cateto adiacente inserito è più lungo dell'ipotenusa. In un triangolo rettangolo valido l'ipotenusa è sempre la più lunga, quindi controlla le etichette dei lati."
      },
      {
        "question": "Posso usare arccos senza conoscere il cateto opposto?",
        "answer": "Sì. Questo è il principale vantaggio dell'arcocoseno: ha bisogno solo del cateto adiacente e dell'ipotenusa. Il cateto opposto non entra mai nel calcolo."
      },
      {
        "question": "Qual è la differenza tra cos e arccos?",
        "answer": "Il coseno prende un angolo e restituisce un rapporto: cos(60 gradi) = 0.5. L'arcocoseno inverte la cosa: prende un rapporto e restituisce l'angolo, quindi arccos(0.5) = 60 gradi. Usa il coseno quando conosci l'angolo; usa arccos quando conosci i lati."
      },
      {
        "question": "Perché arccos, arcsin e arctan danno la stessa risposta?",
        "answer": "Perché descrivono lo stesso angolo geometrico attraverso diverse coppie di lati. In un triangolo 3-4-5, arccos(4/5), arcsin(3/5) e arctan(3/4) valgono tutti 36.87 gradi. La concordanza tra i metodi conferma etichette corrette dei lati."
      },
      {
        "question": "Cosa significa se b/c è esattamente uguale a 0.5?",
        "answer": "L'angolo è esattamente di 60 gradi. Questo è il triangolo speciale 30-60-90, dove il lato adiacente all'angolo di 60 gradi è metà dell'ipotenusa."
      },
      {
        "question": "La risposta deve essere in gradi o in radianti?",
        "answer": "Questo calcolatore usa i gradi, lo standard per edilizia, rilievi e geometria scolastica. Se calcoli a mano, assicurati che il calcolatore sia in modalità gradi; un risultato in modalità radianti come 0.64 si converte in 36.87 gradi moltiplicando per 180/pi."
      },
      {
        "question": "Come trovo l'altro angolo acuto?",
        "answer": "Sottrai da 90 gradi. Se arccos dà A = 36.87 gradi, allora B = 90 - 36.87 = 53.13 gradi. Non serve altra trigonometria."
      },
      {
        "question": "Il risultato di arccos può mai essere di 90 gradi?",
        "answer": "Solo come limite: arccos(0) = 90 gradi, ma un cateto adiacente nullo significa un triangolo degenere, non un vero triangolo. Gli angoli validi di un triangolo rettangolo da arccos cadono sempre strettamente tra 0 e 90 gradi."
      },
      {
        "question": "Come posso controllare la mia risposta arccos?",
        "answer": "Calcola cos(A) e conferma che sia uguale a b/c. Ricalcola anche con arcsin o arctan usando il terzo lato; tutti i metodi devono concordare. Infine, controlla che entrambi gli angoli acuti sommino esattamente a 90 gradi."
      },
      {
        "question": "Scalare il triangolo cambia il risultato di arccos?",
        "answer": "No. I triangoli simili hanno angoli identici. Un triangolo 3-4-5 e un triangolo 6-8-10 danno entrambi arccos(0.8) = 36.87 gradi, perché il rapporto b/c resta invariato con la scalatura."
      }
    ],
    "relatedHeading": "Esplora i calcolatori correlati del triangolo rettangolo",
    "relatedItems": [
      "Calcolatore degli angoli del triangolo rettangolo",
      "Calcolatore dell'angolo del triangolo rettangolo dal seno",
      "Calcolatore dell'angolo del triangolo rettangolo dalla tangente",
      "Calcolatore dell'angolo mancante del triangolo rettangolo",
      "Calcolatore dei rapporti trigonometrici del triangolo rettangolo",
      "Calcolatore del rapporto del coseno"
    ],
    "tocHeading": "In questa guida",
    "tocItems": {
      "arccos-intro": "Che cos'è il calcolatore dell'angolo dal coseno?",
      "arccos-what": "Capire l'arcocoseno (coseno inverso)",
      "arccos-vs": "Arcocoseno vs. arcoseno vs. arcotangente",
      "arccos-anatomy": "Cateto adiacente e ipotenusa",
      "arccos-howto": "Come usare il calcolatore",
      "arccos-examples": "16 esempi svolti",
      "arccos-special": "Valori speciali degli angoli",
      "arccos-mistakes": "Errori comuni",
      "arccos-verify": "Verificare la risposta",
      "arccos-applications": "Applicazioni nella vita reale",
      "arccos-related": "Calcolatori correlati",
      "arccos-faq": "Domande frequenti"
    },
    "sections": {
      "arccos-intro": {
        "h2": "Che cos'è il calcolatore dell'angolo del triangolo rettangolo dal coseno?",
        "blocks": [
          {
            "kind": "p",
            "text": "Il calcolatore dell'angolo del triangolo rettangolo dal coseno trova un angolo acuto quando conosci il cateto adiacente e l'ipotenusa. Applica la funzione inversa del coseno, scritta arccos o cos, al rapporto di questi due lati. Il risultato è l'angolo A in gradi."
          },
          {
            "kind": "p",
            "text": "Questo strumento esiste per una situazione di misura specifica: puoi misurare il lato accanto all'angolo che ti interessa e il lato più lungo del triangolo, ma il cateto opposto è sconosciuto o difficile da raggiungere. Invece di calcolare prima il cateto opposto, l'arcocoseno lo salta del tutto e converte il rapporto cateto adiacente su ipotenusa direttamente nell'angolo."
          },
          {
            "kind": "p",
            "text": "Per esempio, un cateto adiacente di 4 e un'ipotenusa di 5 danno il rapporto 0.8. L'arcocoseno di 0.8 è circa 36.87 gradi. Questo è l'angolo A. L'altro angolo acuto segue dalla regola del complemento: 90 meno 36.87, cioè 53.13 gradi."
          },
          {
            "kind": "p",
            "text": "L'arcocoseno è uno dei tre strumenti trigonometrici inversi di questo sito. Se i lati noti sono il cateto opposto e l'ipotenusa, il calcolatore dell'angolo dal seno è la scelta giusta. Se conosci entrambi i cateti ma non l'ipotenusa, usa il calcolatore dell'angolo dalla tangente. Questa pagina tratta il caso del coseno in piena profondità."
          }
        ]
      },
      "arccos-what": {
        "h2": "Capire l'arcocoseno (coseno inverso)",
        "imgAlt": "Diagramma che mostra i due passaggi dell'arcocoseno: dividere b per c, poi applicare arccos per ottenere l'angolo",
        "figcaption": "Come funziona l'arcocoseno: dividi il cateto adiacente per l'ipotenusa, poi applica il coseno inverso per ritrovare l'angolo.",
        "blocks": [
          {
            "kind": "p",
            "text": "Il coseno normale prende un angolo e restituisce un rapporto. Il coseno di 60 gradi è 0.5. L'arcocoseno inverte la cosa: prende un rapporto e restituisce l'angolo. L'arcocoseno di 0.5 è 60 gradi. Le due funzioni si annullano a vicenda, ed è per questo che l'arcocoseno si scrive anche come cos."
          },
          {
            "kind": "p",
            "text": "La formula usata da questo calcolatore è . Qui b è il cateto adiacente, c è l'ipotenusa e A è l'angolo compreso tra essi. Il rapporto b/c cade sempre tra 0 e 1 per un triangolo rettangolo valido, perché il cateto adiacente è sempre più corto dell'ipotenusa."
          },
          {
            "kind": "p",
            "text": "Pensa all'arcocoseno come a una domanda: «Quale angolo ha questo valore di coseno?» Se b/c è uguale a 0.8, la domanda diventa «quale angolo ha un coseno di 0.8?» La risposta, 36.87 gradi, è l'angolo il cui cateto adiacente è lungo l'80 percento dell'ipotenusa."
          },
          {
            "kind": "h3",
            "text": "Il rapporto racconta una storia"
          },
          {
            "kind": "p",
            "text": "Il valore di b/c descrive la forma del triangolo. Un rapporto vicino a 1 significa che il cateto adiacente è quasi lungo quanto l'ipotenusa, quindi l'angolo compreso tra essi è minuscolo. Un rapporto vicino a 0 significa che il cateto adiacente è molto corto rispetto all'ipotenusa, quindi l'angolo si apre ampio verso i 90 gradi. Un rapporto di esattamente 0.5 significa sempre 60 gradi."
          },
          {
            "kind": "h3",
            "text": "Il dominio dell'arcocoseno"
          },
          {
            "kind": "p",
            "text": "L'arcocoseno accetta solo input da 0 a 1 in questo contesto geometrico. Un rapporto sopra 1 è impossibile per un triangolo rettangolo e segnala un errore di etichettatura: l'ipotenusa deve essere il denominatore e deve essere il lato più lungo. Un rapporto negativo descriverebbe un angolo ottuso, che non può apparire come angolo A in un triangolo rettangolo."
          }
        ]
      },
      "arccos-vs": {
        "h2": "Arcocoseno vs. arcoseno vs. arcotangente: quando usare ciascuna",
        "blocks": [
          {
            "kind": "p",
            "text": "Tutte e tre le funzioni inverse trovano lo stesso angolo quando applicate allo stesso triangolo. Differiscono solo nei lati che richiedono. Scegliere correttamente ti fa risparmiare il calcolo di un lato che non ti serve."
          },
          {
            "kind": "p",
            "text": "Usa arccos quando conosci il cateto adiacente (b) e l'ipotenusa (c). La formula è . Questa è la scelta naturale quando l'ipotenusa è stata misurata direttamente, per esempio con un nastro lungo un pendio, e la distanza orizzontale è nota."
          },
          {
            "kind": "p",
            "text": "Usa arcsin quando conosci il cateto opposto (a) e l'ipotenusa (c). La formula è . I problemi di altezza favoriscono l'arcoseno: il dislivello verticale è opposto all'angolo al livello del suolo. Il calcolatore dell'angolo dal seno gestisce questo caso."
          },
          {
            "kind": "p",
            "text": "Usa arctan quando conosci entrambi i cateti (a e b) ma non l'ipotenusa. La formula è . Le misure sul campo come dislivello su sviluppo orizzontale del tetto favoriscono l'arcotangente perché entrambi i cateti sono misurati direttamente. Vedi il calcolatore dell'angolo dalla tangente per quel metodo."
          },
          {
            "kind": "h3",
            "text": "Devono concordare"
          },
          {
            "kind": "p",
            "text": "Per un singolo triangolo, arccos(b/c), arcsin(a/c) e arctan(a/b) producono l'identico angolo. In un triangolo 3-4-5, arccos(4/5), arcsin(3/5) e arctan(3/4) valgono tutti 36.87 gradi. Se due metodi non concordano, un lato è etichettato male. Questo controllo incrociato è la verifica più affidabile disponibile, e il calcolatore dei rapporti trigonometrici può confermare tutti e tre i rapporti in una volta."
          },
          {
            "kind": "h3",
            "text": "Perché non usare sempre l'arcotangente?"
          },
          {
            "kind": "p",
            "text": "L'arcotangente ha bisogno di entrambi i cateti. Se il cateto opposto è sconosciuto e difficile da misurare, calcolarlo prima solo per usare l'arcotangente aggiunge un passaggio inutile e un'ulteriore possibilità di errore. L'arcocoseno va dritto dai due lati che hai all'angolo che vuoi. Abbina la funzione alle tue misure, non all'abitudine."
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "Cateto adiacente e ipotenusa: i due input",
        "imgAlt": "Triangolo rettangolo con cateto adiacente b e ipotenusa c evidenziati per la formula dell'arcocoseno",
        "figcaption": "Anatomia per l'arcocoseno: b è il cateto adiacente che tocca l'angolo A, c è l'ipotenusa opposta all'angolo retto.",
        "blocks": [
          {
            "kind": "p",
            "text": "L'arcocoseno ha bisogno di esattamente due lati: il cateto adiacente b e l'ipotenusa c. Etichettarli correttamente è tutta la battaglia. Tutto ciò che segue è aritmetica."
          },
          {
            "kind": "h3",
            "text": "Identificare il cateto adiacente"
          },
          {
            "kind": "p",
            "text": "Il cateto adiacente è il lato che tocca l'angolo A. Forma un bordo dell'angolo stesso. Nel diagramma qui sotto, il lato b corre lungo la base dall'angolo retto all'angolo A. Se invece stai risolvendo per l'altro angolo acuto B, le etichette si scambiano: il lato adiacente a B è quello che tocca B."
          },
          {
            "kind": "h3",
            "text": "Identificare l'ipotenusa"
          },
          {
            "kind": "p",
            "text": "L'ipotenusa è il lato opposto all'angolo retto. È sempre il lato più lungo del triangolo. Non tocca mai il vertice dell'angolo retto. Se la tua «ipotenusa» non è la più lunga delle tue tre misure, rietichetta prima di calcolare. Il calcolatore del teorema di Pitagora può confermare quale lato è il più lungo quando li hai tutti e tre."
          },
          {
            "kind": "h3",
            "text": "Perché il cateto opposto resta fuori"
          },
          {
            "kind": "p",
            "text": "Il coseno è definito come cateto adiacente su ipotenusa. Il cateto opposto semplicemente non compare in questo rapporto. Questo è il senso di questo calcolatore: quando il cateto opposto è sconosciuto, sepolto o irrilevante per la tua configurazione di misura, l'arcocoseno fornisce comunque l'angolo. Non stai ignorando il cateto opposto; stai usando un rapporto che non ne ha mai avuto bisogno."
          }
        ]
      },
      "arccos-howto": {
        "h2": "Come usare il calcolatore dell'angolo dal coseno",
        "imgAlt": "Esempio svolto in quattro passaggi dell'arcocoseno con b uguale a 4 e c uguale a 5",
        "figcaption": "Esempio svolto: b = 4, c = 5 dà A = arccos(0.8), circa 36.87 gradi, verificato con il controllo di andata e ritorno.",
        "steps": [
          "Conferma l'angolo retto. Il calcolatore funziona solo per i triangoli rettangoli. Identifica prima l'angolo di 90 gradi.",
          "Scegli l'angolo obiettivo. Decidi se stai risolvendo per l'angolo A o per l'angolo B. Il cateto adiacente è definito rispetto a questa scelta.",
          "Misura il cateto adiacente b. È il lato che tocca il tuo angolo obiettivo. Registralo in qualsiasi unità.",
          "Misura l'ipotenusa c. È il lato più lungo, di fronte all'angolo retto. Usa la stessa unità di b.",
          "Controlla che b sia minore di c. Se non lo è, i lati sono etichettati male. L'ipotenusa deve essere la più lunga.",
          "Inserisci entrambi i valori e premi Calcola. Lo strumento calcola b/c, applica arccos e restituisce l'angolo A in gradi.",
          "Trova il secondo angolo. Sottrai da 90 gradi: B = 90 meno A.",
          "Verifica. Calcola cos(A) su un calcolatore e conferma che sia uguale a b/c. Se lo è, la risposta è solida."
        ]
      },
      "arccos-examples": {
        "h2": "16 esempi svolti",
        "blocks": [
          {
            "kind": "p",
            "text": "Ogni esempio segue gli stessi quattro passaggi: scrivi la formula, sostituisci, dividi, applica arccos. Gli angoli sono arrotondati a due decimali."
          },
          {
            "kind": "h3",
            "text": "Esempio 1: il triangolo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 4 e l'ipotenusa c = 5, trova l'angolo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) . Il complemento B = 53.13."
          },
          {
            "kind": "h3",
            "text": "Esempio 2: il triangolo 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 12 e l'ipotenusa c = 13, trova l'angolo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) . Il complemento B = 67.38."
          },
          {
            "kind": "h3",
            "text": "Esempio 3: il triangolo 8-15-17"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 8 e l'ipotenusa c = 17, trova l'angolo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) . Il complemento B = 28.07."
          },
          {
            "kind": "h3",
            "text": "Esempio 4: stesso triangolo, altro angolo"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 15 e l'ipotenusa c = 17 (risolvendo per l'angolo B del triangolo 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) . Nota che 61.93 + 28.07 = 90, come richiesto."
          },
          {
            "kind": "h3",
            "text": "Esempio 5: 5-12-13, altro angolo"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 5 e l'ipotenusa c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) . Corrisponde al complemento dell'esempio 2."
          },
          {
            "kind": "h3",
            "text": "Esempio 6: 3-4-5, altro angolo"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 3 e l'ipotenusa c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) . Corrisponde al complemento dell'esempio 1."
          },
          {
            "kind": "h3",
            "text": "Esempio 7: il caso speciale di 60 gradi"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 1 e l'ipotenusa c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60 esatto. Questo è il triangolo speciale 30-60-90. Il calcolatore dei triangoli speciali copre questi valori esatti."
          },
          {
            "kind": "h3",
            "text": "Esempio 8: il triangolo 7-24-25"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 7 e l'ipotenusa c = 25, trova l'angolo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) . Il complemento B = 16.26."
          },
          {
            "kind": "h3",
            "text": "Esempio 9: 7-24-25, altro angolo"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 24 e l'ipotenusa c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) . Corrisponde al complemento dell'esempio 8."
          },
          {
            "kind": "h3",
            "text": "Esempio 10: il triangolo 9-40-41"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 9 e l'ipotenusa c = 41, trova l'angolo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) . Un cateto adiacente piccolo dà un angolo ampio."
          },
          {
            "kind": "h3",
            "text": "Esempio 11: 9-40-41, altro angolo"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 40 e l'ipotenusa c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) . Nota che 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "Esempio 12: il triangolo 20-21-29"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 20 e l'ipotenusa c = 29, trova l'angolo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) . Il complemento B = 43.60."
          },
          {
            "kind": "h3",
            "text": "Esempio 13: 20-21-29, altro angolo"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 21 e l'ipotenusa c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) . Corrisponde al complemento dell'esempio 12."
          },
          {
            "kind": "h3",
            "text": "Esempio 14: il triangolo 6-8-10"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 6 e l'ipotenusa c = 10, trova l'angolo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) . Stesso angolo dell'esempio 6, dato che 6-8-10 è un 3-4-5 scalato."
          },
          {
            "kind": "h3",
            "text": "Esempio 15: 6-8-10, altro angolo"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 8 e l'ipotenusa c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) . Come nell'esempio 1, a conferma che i triangoli simili condividono gli angoli."
          },
          {
            "kind": "h3",
            "text": "Esempio 16: il triangolo 12-16-20"
          },
          {
            "kind": "p",
            "text": "Dato il cateto adiacente b = 12 e l'ipotenusa c = 20, trova l'angolo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) . Un altro 3-4-5 scalato, di nuovo lo stesso angolo. Scalare i lati non cambia mai gli angoli."
          }
        ]
      },
      "arccos-special": {
        "h2": "Valori speciali degli angoli da memorizzare",
        "blocks": [
          {
            "kind": "p",
            "text": "Alcuni valori dell'arcocoseno compaiono così spesso che riconoscerli fa risparmiare tempo. Provengono dai triangoli rettangoli speciali."
          },
          {
            "kind": "p",
            "text": ": il cateto adiacente è uguale all'ipotenusa, quindi l'angolo collassa a zero. Questo è un caso degenere, non un vero triangolo, ma fissa la scala."
          },
          {
            "kind": "p",
            "text": ": dal triangolo 30-60-90. Quando il cateto adiacente è circa l'86.6 percento dell'ipotenusa, l'angolo è di 30 gradi."
          },
          {
            "kind": "p",
            "text": ": dal triangolo 45-45-90. Cateti uguali danno questo valore esatto."
          },
          {
            "kind": "p",
            "text": ": dal triangolo 30-60-90, il caso dell'esempio 7. Quando il cateto adiacente è esattamente metà dell'ipotenusa, l'angolo è esattamente di 60 gradi."
          },
          {
            "kind": "p",
            "text": ": il cateto adiacente si riduce a zero, quindi l'angolo si apre fino a un angolo retto. Come il caso zero, questo è un limite, non un vero angolo di triangolo."
          },
          {
            "kind": "p",
            "text": "Tra questi punti di riferimento, l'arcocoseno diminuisce in modo uniforme al crescere del rapporto. Memorizzare i cinque punti di ancoraggio ti permette di stimare qualsiasi arcocoseno a mente: un rapporto di 0.7 si trova tra 0.5 (60 gradi) e 0.866 (30 gradi), un po' più vicino ai 45 gradi. Il valore vero è circa 45.57 gradi."
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "Errori comuni nell'uso dell'arcocoseno",
        "blocks": [
          {
            "kind": "h3",
            "text": "Usare il cateto opposto invece di quello adiacente"
          },
          {
            "kind": "p",
            "text": "L'errore più frequente. L'arcocoseno ha bisogno del lato che tocca l'angolo A, non del lato di fronte. Se inserisci il cateto opposto nell'arccos, ottieni il complemento dell'angolo voluto. In un triangolo 3-4-5, arccos(3/5) = 53.13 gradi è l'angolo B, non l'angolo A. Rimedio: disegna il triangolo, segna l'angolo obiettivo e segui quale cateto lo tocca."
          },
          {
            "kind": "h3",
            "text": "Mettere l'ipotenusa al numeratore"
          },
          {
            "kind": "p",
            "text": "L'arcocoseno si aspetta cateto adiacente su ipotenusa, un numero sotto 1. Inserire c/b invece di b/c dà un rapporto sopra 1, e il calcolatore restituisce un errore matematico. Rimedio: l'ipotenusa è sempre il denominatore nel rapporto dell'arcocoseno."
          },
          {
            "kind": "h3",
            "text": "Confondere l'arcocoseno con il coseno"
          },
          {
            "kind": "p",
            "text": "Su molti calcolatori, il tasto del coseno e il tasto del coseno inverso (spesso etichettato cos o arccos) sono vicini. Premere cos(0.8) invece di arccos(0.8) dà 0.6967, un rapporto senza senso, invece di 36.87 gradi. Rimedio: controlla che il calcolatore sia in modalità gradi e di aver premuto il tasto inverso."
          },
          {
            "kind": "h3",
            "text": "Mescolare gradi e radianti"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) è 36.87 gradi ma 0.6435 radianti. Se il tuo calcolo a mano dà 0.64 per un triangolo 3-4-5, il calcolatore è in modalità radianti. Moltiplica per 180/pi per convertire, oppure passa alla modalità gradi. Questo calcolatore restituisce gradi."
          },
          {
            "kind": "h3",
            "text": "Inserire i lati in unità diverse"
          },
          {
            "kind": "p",
            "text": "Cateto adiacente in pollici e ipotenusa in piedi corrompono il rapporto. Converti prima in un'unità comune. Il rapporto è adimensionale, ma solo quando entrambi gli input condividono l'unità."
          },
          {
            "kind": "h3",
            "text": "Arrotondare il rapporto troppo presto"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 gradi, ma arccos(0.80) arrotondato da 0.795 dà 37.24 gradi. Vicino ai rapporti 0 e 1, dove l'arcocoseno è più ripido, i piccoli errori di rapporto si amplificano. Mantieni la piena precisione durante la divisione e arrotonda solo l'angolo finale."
          },
          {
            "kind": "h3",
            "text": "Dimenticare quale angolo è stato risolto"
          },
          {
            "kind": "p",
            "text": "L'arcocoseno restituisce l'angolo il cui cateto adiacente hai inserito. Se hai inserito il lato che tocca l'angolo B, il risultato è l'angolo B. Etichetta la risposta con il nome corretto dell'angolo, oppure verifica con il complemento: i due angoli acuti devono sommare a 90 gradi."
          }
        ]
      },
      "arccos-verify": {
        "h2": "Verificare la risposta dell'arcocoseno",
        "steps": [
          "Controllo dell'intervallo. Il risultato deve cadere strettamente tra 0 e 90 gradi. Qualsiasi valore fuori segnala input non validi o lati etichettati male.",
          "Controllo di andata e ritorno. Calcola cos(A) e conferma che sia uguale a b/c. Per l'esempio 1, cos(36.87)  0.8 = 4/5. Se il controllo di andata e ritorno fallisce, l'angolo è sbagliato.",
          "Controllo incrociato tra metodi. Ricalcola con arcsin o arctan usando il terzo lato. Se arccos(4/5) = 36.87 e arctan(3/4) = 36.87, la risposta è solida. Il disaccordo indica un errore di etichettatura."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Tre controlli confermano un calcolo corretto dell'arcocoseno:"
          }
        ],
        "closingParagraphs": [
          "Per il triangolo 3-4-5, verifica anche che i lati soddisfino il teorema di Pitagora: 9 + 16 = 25. Confermare i lati prima di fidarsi dell'angolo da essi derivato è buona pratica, e il calcolatore del teorema di Pitagora lo rende veloce.",
          "Un quarto controllo usa il complemento. Calcola B = 90 meno A, poi verifica che l'arcocoseno dell'altro rapporto dia B. Nell'esempio 1, arccos(3/5) = 53.13, che corrisponde a 90 meno 36.87. Quando tutti e quattro i controlli passano, la risposta è fuori dubbio."
        ]
      },
      "arccos-applications": {
        "h2": "Applicazioni dell'arcocoseno nella vita reale",
        "imgAlt": "Quattro pannelli che mostrano i calcoli con arccos per rilievi, ombre, travi del tetto e angoli di puntelli",
        "figcaption": "Problemi reali di arcocoseno: angoli di pendio, elevazione del sole, inclinazione delle travi e angoli di installazione dei puntelli.",
        "blocks": [
          {
            "kind": "p",
            "text": "L'arcocoseno compare ovunque una distanza inclinata e una distanza orizzontale siano le misure naturali. L'ipotenusa è misurata lungo il pendio stesso, e il cateto adiacente è la componente orizzontale."
          },
          {
            "kind": "h3",
            "text": "Rilievo dei pendii"
          },
          {
            "kind": "p",
            "text": "Un geometra misura 65 metri lungo un pendio e 60 metri in orizzontale. L'angolo del pendio è arccos(60/65), circa 22.6 gradi. Questa è la situazione standard dell'arcocoseno: la distanza inclinata è facile da misurare con il nastro, l'orizzontale viene dalla mappa o da una livella, e il cateto opposto (il dislivello) è ciò che potresti calcolare dopo."
          },
          {
            "kind": "h3",
            "text": "Elevazione del sole dalle ombre"
          },
          {
            "kind": "p",
            "text": "Un raggio di luce di 10 metri proietta un'ombra di 8 metri. L'angolo di elevazione del sole è arccos(8/10), circa 36.9 gradi. I problemi delle ombre sono problemi naturali di arcocoseno perché l'ombra giace lungo il terreno (il cateto adiacente) e il raggio è l'ipotenusa."
          },
          {
            "kind": "h3",
            "text": "Inclinazione della trave del tetto"
          },
          {
            "kind": "p",
            "text": "Una trave copre 6.5 metri con uno sviluppo orizzontale di 6 metri. L'angolo di inclinazione alla gronda è arccos(6/6.5), circa 22.6 gradi. I carpentieri misurano la trave direttamente e lo sviluppo lungo il travetto, quindi l'arcocoseno si adatta alle misure così come sono state prese."
          },
          {
            "kind": "h3",
            "text": "Puntelli di ingegneria"
          },
          {
            "kind": "p",
            "text": "Un puntello diagonale misura 4 metri con una base orizzontale di 3.5 metri. L'angolo del puntello è arccos(3.5/4), circa 28.96 gradi. Gli schizzi strutturali danno la lunghezza del puntello e la sua impronta; l'arcocoseno le trasforma nell'angolo di installazione."
          }
        ]
      },
      "arccos-related": {
        "relatedItems": [
          "Calcolatore degli angoli del triangolo rettangolo",
          "Calcolatore dell'angolo del triangolo rettangolo dal seno",
          "Calcolatore dell'angolo del triangolo rettangolo dalla tangente",
          "Calcolatore dell'angolo mancante del triangolo rettangolo",
          "Calcolatore dei rapporti trigonometrici del triangolo rettangolo",
          "Calcolatore del rapporto del coseno"
        ],
        "h2": "Esplora i calcolatori correlati del triangolo rettangolo"
      },
      "arccos-conclusion": {
        "h2": "Trova qualsiasi angolo dal coseno con sicurezza",
        "blocks": [
          {
            "kind": "p",
            "text": "Inizia identificando il cateto adiacente: il lato che tocca il tuo angolo obiettivo. Conferma che l'ipotenusa sia il lato più lungo. Dividi, applica arccos e leggi l'angolo in gradi. Ottieni il secondo angolo da 90 meno il primo. Verifica con il controllo di andata e ritorno, un calcolo incrociato tra metodi e la somma degli angoli. Con questi passaggi, qualsiasi problema di cateto adiacente e ipotenusa si riduce a una routine affidabile. Torna al calcolatore in cima a questa pagina per eseguire i tuoi numeri."
          }
        ]
      }
    }
  }
};
