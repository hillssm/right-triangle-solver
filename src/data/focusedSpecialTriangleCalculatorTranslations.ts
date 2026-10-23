import type { FocusedSpecialTriangleCalculatorPage } from 'src/data/focusedSpecialTriangleCalculatorPages';
import type { Locale } from 'theme/i18n/locales';

const FOCUSED_SPECIAL_TRIANGLE_CALCULATOR_TRANSLATIONS: Partial<Record<Locale, Record<string, FocusedSpecialTriangleCalculatorPage>>> = {
  "hi": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 त्रिभुज कैलकुलेटर",
      "metaTitle": "45 45 90 त्रिभुज कैलकुलेटर | भुजाएँ, क्षेत्रफल और परिमाप ज्ञात कीजिए",
      "metaDescription": "सूत्रों और चरणों के साथ एक समद्विबाहु समकोण त्रिभुज का कर्ण, पैर, क्षेत्रफल और परिधि ज्ञात करने के लिए इस 45 45 90 त्रिभुज कैलकुलेटर का उपयोग करें।",
      "badge": "विशेष समकोण त्रिभुज कैलक्यूलेटर",
      "parentLabel": "विशेष समकोण त्रिभुज कैलक्यूलेटर",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "पैर से कर्ण ज्ञात कीजिए",
          "heading": "पैर से कर्ण ज्ञात कीजिए",
          "calculator": {
            "outputLabel": "कर्ण c",
            "outputUnit": "इकाइयाँ",
            "fields": [
              {
                "key": "a",
                "label": "पैर a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "कर्ण से पैर खोजें",
          "heading": "कर्ण से पैर खोजें",
          "calculator": {
            "outputLabel": "पैर a",
            "outputUnit": "इकाइयाँ",
            "fields": [
              {
                "key": "c",
                "label": "कर्ण c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "पैर से क्षेत्रफल ज्ञात करें",
          "heading": "पैर से क्षेत्रफल ज्ञात करें",
          "calculator": {
            "outputLabel": "क्षेत्र",
            "outputUnit": "वर्ग इकाइयाँ",
            "fields": [
              {
                "key": "a",
                "label": "पैर a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "पैर से परिमाप ज्ञात कीजिए",
          "heading": "पैर से परिमाप ज्ञात कीजिए",
          "calculator": {
            "outputLabel": "परिधि P",
            "outputUnit": "इकाइयाँ",
            "fields": [
              {
                "key": "a",
                "label": "पैर a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "मानक 45 45 90 त्रिकोण सूत्रों और अनुपातों का उपयोग करके किसी भी समद्विबाहु समकोण त्रिकोण के कर्ण, पैर, क्षेत्रफल और परिधि को तुरंत खोजने के लिए इस 45-45-90 त्रिकोण कैलकुलेटर का उपयोग करें।"
      ],
      "calculatorNote": "सभी इनपुट मान 0 से अधिक होने चाहिए.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "त्रिभुज आरेख कुंजी",
        "notes": [
          "पैर ए समद्विबाहु समकोण त्रिभुज की दो समान भुजाओं का प्रतिनिधित्व करता है।",
          "कर्ण c, 90° कोण के विपरीत सबसे लंबी भुजा है।",
          "दोनों न्यून कोण बिल्कुल 45 डिग्री के हैं।"
        ]
      },
      "howToUse": [
        "आप जो पहले से जानते हैं उसके आधार पर 45 45 90 कैलकुलेटर मोड चुनें।",
        "ज्ञात मान दर्ज करें (या तो पैर या कर्ण)।",
        "सुनिश्चित करें कि आपका इनपुट 0 से अधिक है।",
        "समद्विबाहु समकोण त्रिभुज कैलकुलेटर आउटपुट फ़ील्ड से सीधे परिकलित परिणाम पढ़ें।"
      ],
      "example": [
        {
          "title": "उदाहरण 1: जब a = 5 हो तो कर्ण ज्ञात कीजिए।",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "उदाहरण 2: जब c = 10 हो तो पैर खोजें।",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "उदाहरण 3: क्षेत्रफल ज्ञात करें जब a = 6 हो।",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "आपको मिलने वाले परिणाम आपके त्रिभुज के भौतिक आयामों को दर्शाते हैं। एक परिकलित पैर या कर्ण 45-डिग्री के कोण को बनाए रखने के लिए आवश्यक सटीक भुजा की लंबाई है।",
        "हमारे 45 45 90 क्षेत्र कैलकुलेटर और 45 45 90 परिधि कैलकुलेटर सुविधाओं का उपयोग करने से आपको त्रिकोण के अंदर कुल 2D स्थान और उसके किनारों के आसपास की कुल दूरी को समझने में मदद मिलती है।"
      ],
      "sideRatio": [
        "प्रत्येक 45 45 90 त्रिभुज का भुजा अनुपात a : a : a√2 है।",
        "इसका मतलब है कि दोनों पैर हमेशा बिल्कुल समान लंबाई के होते हैं, और कर्ण हमेशा पैर की लंबाई को 2 के वर्गमूल से गुणा किया जाता है।"
      ],
      "useCases": [
        "45 45 90 लापता पक्ष कैलकुलेटर के रूप में ज्यामिति और त्रिकोणमिति होमवर्क समस्याओं को हल करना।",
        "समद्विबाहु समकोण त्रिभुज सूत्र के साथ वर्ग-आधारित निर्माणों या विकर्ण कटों के लिए आयामों की गणना करना।",
        "आइसोमेट्रिक ग्रिड डिजाइन करना और मानक कोणों का प्रारूप तैयार करना।",
        "45 45 90 कर्ण कैलकुलेटर का उपयोग करके एक वर्ग विकर्ण पर न्यूनतम दूरी ज्ञात करना।"
      ],
      "commonMistakes": [
        "गलती से 30 60 90 अनुपात का उपयोग करना।",
        "यह भूल जाना कि दोनों पैर बराबर हैं।",
        "c = a × √2 के बजाय c = 2a का उपयोग करना।",
        "पैर ढूँढ़ते समय √2 के बजाय 2 से भाग देना।",
        "क्षेत्रफल की गणना करते समय पैर को वर्गाकार बनाना भूल जाना।"
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "विशेष समकोण त्रिभुज कैलकुलेटर"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 त्रिकोण कैलकुलेटर"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "समकोण त्रिभुज भुजा कैलकुलेटर"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "समकोण त्रिभुज क्षेत्र कैलकुलेटर"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "समकोण त्रिभुज परिधि कैलकुलेटर"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "समकोण त्रिभुज कर्ण कैलकुलेटर"
        }
      ],
      "faqs": [
        {
          "question": "45 45 90 त्रिकोण कैलकुलेटर क्या है?",
          "answer": "यह एक विशिष्ट उपकरण है जिसे निश्चित भुजाओं के अनुपात के आधार पर कर्ण, पैर, क्षेत्रफल या परिधि ज्ञात करके एक समद्विबाहु समकोण त्रिभुज को हल करने के लिए डिज़ाइन किया गया है।"
        },
        {
          "question": "समद्विबाहु समकोण त्रिभुज क्या है?",
          "answer": "एक समद्विबाहु समकोण त्रिभुज एक समकोण त्रिभुज है जिसके दोनों पैर लंबाई में समान होते हैं, और दोनों गैर-समकोण बिल्कुल 45 डिग्री के होते हैं।"
        },
        {
          "question": "45 45 90 त्रिभुज के कर्ण का सूत्र क्या है?",
          "answer": "कर्ण ज्ञात करने का सूत्र c = a × √2 है, जहाँ a एक पैर की लंबाई है।"
        },
        {
          "question": "परिकलित क्षेत्रफल का क्या अर्थ है?",
          "answer": "क्षेत्रफल परिणाम का अर्थ त्रिभुज की तीनों भुजाओं के अंदर समाहित समतल स्थान की कुल मात्रा से है।"
        },
        {
          "question": "यदि मुझे केवल कर्ण ज्ञात हो तो क्या मैं पैर ढूंढ सकता हूँ?",
          "answer": "हाँ, आप कर्ण लेकर और उसे 2 के वर्गमूल से विभाजित करके आसानी से पाद ज्ञात कर सकते हैं।"
        },
        {
          "question": "पैर हमेशा बराबर क्यों होते हैं?",
          "answer": "चूँकि दोनों सम्मुख कोण 45 डिग्री के होते हैं, इसलिए उन कोणों की सम्मुख भुजाएँ भी एक दूसरे के बराबर होनी चाहिए।"
        }
      ],
      "ui": {
        "modeTitle": "कैलकुलेटर मोड",
        "modeSelectLabel": "कैलकुलेटर मोड चुनें",
        "formulaHeading": "सूत्र",
        "diagramHeading": "त्रिभुज आरेख",
        "howToUseHeading": "इस कैलकुलेटर का उपयोग कैसे करें",
        "examplesHeading": "चरण-दर-चरण उदाहरण",
        "resultMeaningHeading": "परिणाम का क्या मतलब है",
        "sideRatioHeading": "पार्श्व अनुपात",
        "useCasesHeading": "इस कैलकुलेटर का उपयोग कब करें",
        "commonMistakesHeading": "सामान्य गलतियाँ",
        "relatedHeading": "संबंधित कैलकुलेटर",
        "faqHeading": "अक्सर पूछे जाने वाले प्रश्न",
        "faqDescription": "सबसे सामान्य समकोण-त्रिकोण हल करने वाले प्रश्नों के उत्तर।",
        "diagramAriaLabel45": "45-45-90 त्रिभुज आरेख",
        "diagramAriaLabel30": "30-60-90 त्रिभुज आरेख",
        "calculatorMessages": {
          "positive": "कृपया एक सकारात्मक मान दर्ज करें.",
          "invalid": "इनपुट मान 0 से अधिक होना चाहिए."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 त्रिभुज कैलकुलेटर",
      "metaTitle": "30 60 90 त्रिभुज कैलकुलेटर | छोटी टांग, लंबी टांग और कर्ण खोजें",
      "metaDescription": "सूत्रों और चरणों के साथ छोटा पैर, लंबा पैर, कर्ण, क्षेत्रफल और परिधि ज्ञात करने के लिए इस 30 60 90 त्रिकोण कैलकुलेटर का उपयोग करें।",
      "badge": "विशेष समकोण त्रिभुज कैलक्यूलेटर",
      "parentLabel": "विशेष समकोण त्रिभुज कैलक्यूलेटर",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "छोटे पैर से लंबे पैर का पता लगाएं",
          "heading": "छोटे पैर से लंबे पैर का पता लगाएं",
          "calculator": {
            "outputLabel": "लंबा पैर",
            "outputUnit": "इकाइयाँ",
            "fields": [
              {
                "key": "a",
                "label": "छोटा पैर a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "लघु पाद से कर्ण ज्ञात कीजिए",
          "heading": "लघु पाद से कर्ण ज्ञात कीजिए",
          "calculator": {
            "outputLabel": "कर्ण c",
            "outputUnit": "इकाइयाँ",
            "fields": [
              {
                "key": "a",
                "label": "छोटा पैर a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "कर्ण से छोटा पैर खोजें",
          "heading": "कर्ण से छोटा पैर खोजें",
          "calculator": {
            "outputLabel": "छोटा पैर a",
            "outputUnit": "इकाइयाँ",
            "fields": [
              {
                "key": "c",
                "label": "कर्ण c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "लंबे पैर से छोटा पैर खोजें",
          "heading": "लंबे पैर से छोटा पैर खोजें",
          "calculator": {
            "outputLabel": "छोटा पैर a",
            "outputUnit": "इकाइयाँ",
            "fields": [
              {
                "key": "b",
                "label": "लम्बा पैर",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "कर्ण से लम्बा पैर ज्ञात कीजिए",
          "heading": "कर्ण से लम्बा पैर ज्ञात कीजिए",
          "calculator": {
            "outputLabel": "लम्बा पैर",
            "outputUnit": "इकाइयाँ",
            "fields": [
              {
                "key": "c",
                "label": "कर्ण c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "शॉर्ट लेग से क्षेत्र खोजें",
          "heading": "शॉर्ट लेग से क्षेत्र खोजें",
          "calculator": {
            "outputLabel": "क्षेत्र",
            "outputUnit": "वर्ग इकाइयाँ",
            "fields": [
              {
                "key": "a",
                "label": "छोटा पैर a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "शॉर्ट लेग से परिमाप ज्ञात करें",
          "heading": "शॉर्ट लेग से परिमाप ज्ञात करें",
          "calculator": {
            "outputLabel": "परिधि P",
            "outputUnit": "इकाइयाँ",
            "fields": [
              {
                "key": "a",
                "label": "छोटा पैर a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "सटीक 30 60 90 त्रिकोण सूत्र और अनुपात का उपयोग करके छोटी टांग, लंबी टांग, कर्ण, क्षेत्रफल और परिधि को आसानी से खोजने के लिए इस 30-60-90 त्रिकोण कैलकुलेटर का उपयोग करें।"
      ],
      "calculatorNote": "सभी इनपुट मान 0 से अधिक होने चाहिए.",
      "formulaSection": {
        "formulas": [
          "\\text{लंबी भुजा} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{लंबी भुजा} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{छोटी भुजा} + \\text{लंबी भुजा} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "त्रिभुज आरेख कुंजी",
        "notes": [
          "छोटा पैर a 30-डिग्री कोण के विपरीत है।",
          "लंबा पैर a√3 60-डिग्री कोण के विपरीत है।",
          "कर्ण c, छोटी टांग a की लंबाई से ठीक दोगुना है।"
        ]
      },
      "howToUse": [
        "30 60 90 कैलकुलेटर मोड से चुनें कि आप क्या खोजना चाहते हैं।",
        "अपनी ज्ञात पार्श्व लंबाई (छोटा पैर, लंबा पैर, या कर्ण) दर्ज करें।",
        "सत्यापित करें कि संख्या धनात्मक है और शून्य से बड़ी है।",
        "हमारे 30 60 90 त्रिकोण सॉल्वर से अपने पूर्णतः मापे गए उत्तर के लिए परिणाम बॉक्स को जांचें।"
      ],
      "example": [
        {
          "title": "उदाहरण 1: जब छोटा पैर a = 5 हो तो लंबा पैर और कर्ण ज्ञात कीजिए।",
          "steps": [
            "\\text{लंबी भुजा} = a \\times \\sqrt{3}",
            "\\text{लंबी भुजा} = 5 \\times \\sqrt{3}",
            "\\text{लंबी भुजा} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "उदाहरण 2: जब c = 14 हो तो छोटा पैर ज्ञात करें।",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "उदाहरण 3: कर्ण c = 10 से लंबा पैर ज्ञात कीजिए।",
          "steps": [
            "\\text{लंबी भुजा} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{लंबी भुजा} = 5\\sqrt{3}",
            "\\text{लंबी भुजा} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "गणना की गई 30 60 90 त्रिभुज की भुजाओं से पता चलता है कि 30 और 60 डिग्री के कोण बनाए रखने के लिए त्रिभुज के प्रत्येक भाग को कितना लंबा होना चाहिए। वे बिल्कुल आनुपातिक हैं.",
        "30 60 90 क्षेत्र कैलकुलेटर और 30 60 90 परिधि कैलकुलेटर परिणाम आपको सटीक घिरा हुआ 2D आकार और आपके त्रिकोण की कुल रूपरेखा लंबाई देते हैं।"
      ],
      "sideRatio": [
        "30 60 90 त्रिभुज के लिए मानक भुजा अनुपात a : a√3 : 2a है।",
        "छोटा पैर एक है, लंबा पैर 3 के वर्गमूल का एक गुना है, और कर्ण छोटे पैर से ठीक दोगुना है।"
      ],
      "useCases": [
        "30 60 90 लापता पक्ष कैलकुलेटर के रूप में विशेष समकोण त्रिभुजों को शामिल करते हुए त्रिकोणमिति असाइनमेंट की जाँच करना।",
        "30 60 90 लॉन्ग लेग कैलकुलेटर का उपयोग करके एक समबाहु त्रिभुज की ऊंचाई निर्धारित करना।",
        "इंजीनियरिंग या वास्तुकला में प्रारूपण कोण और संरचनात्मक समर्थन।",
        "30 60 90 कर्ण कैलकुलेटर के साथ भौतिकी में जटिल वेक्टर समस्याओं को हल करना।"
      ],
      "commonMistakes": [
        "छोटे पैर और लंबे पैर को मिलाकर।",
        "लंबे पैर की गणना के लिए √3 के बजाय √2 का उपयोग करना।",
        "यह सोचना कि कर्ण 2a के बजाय a√3 के बराबर है।",
        "दुर्घटनावश लंबे पैर के मान को छोटे पैर के रूप में उपयोग करना।",
        "यह भूल जाना कि कर्ण छोटे पैर से बिल्कुल दोगुना है।"
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "विशेष समकोण त्रिभुज कैलकुलेटर"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 त्रिकोण कैलकुलेटर"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "समकोण त्रिभुज भुजा कैलकुलेटर"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "समकोण त्रिभुज क्षेत्र कैलकुलेटर"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "समकोण त्रिभुज परिधि कैलकुलेटर"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "समकोण त्रिभुज कर्ण कैलकुलेटर"
        }
      ],
      "faqs": [
        {
          "question": "मैं इस 30 60 90 त्रिकोण कैलकुलेटर का उपयोग कैसे करूं?",
          "answer": "बस वह मान चुनें जिसकी आप गणना करना चाहते हैं, वह पक्ष दर्ज करें जो आप पहले से जानते हैं, और उत्तर खोजने के लिए टूल सही अनुपात का उपयोग करेगा।"
        },
        {
          "question": "छोटा पैर और लंबा पैर किस तरफ है?",
          "answer": "छोटा पैर हमेशा 30 डिग्री के कोण के विपरीत होता है, जबकि लंबा पैर हमेशा 60 डिग्री के कोण के विपरीत होता है।"
        },
        {
          "question": "लघु पाद से कर्ण ज्ञात करने का सूत्र क्या है?",
          "answer": "सूत्र c = 2a है, जिसका अर्थ है कि कर्ण छोटे पैर की लंबाई से बिल्कुल दोगुना है।"
        },
        {
          "question": "लंबे पैर के परिणाम का क्या मतलब है?",
          "answer": "लंबे पैर का परिणाम आपको 30 और 60 डिग्री के कोणों को बरकरार रखते हुए अन्य पक्षों से मेल खाने के लिए आवश्यक सटीक ऊंचाई या आधार बताता है।"
        },
        {
          "question": "क्या मैं लंबे पैर से छोटा पैर ढूंढ सकता हूँ?",
          "answer": "हां, आप लंबे पैर को 3 के वर्गमूल से विभाजित करके छोटा पैर पा सकते हैं।"
        },
        {
          "question": "हम 3 के वर्गमूल से गुणा क्यों करते हैं?",
          "answer": "3 के वर्गमूल से गुणा करना इस त्रिभुज प्रकार के लिए एक निश्चित ज्यामितीय नियम है, जो गणितीय रूप से छोटे पैर को लंबे पैर से जोड़ता है।"
        }
      ],
      "ui": {
        "modeTitle": "कैलकुलेटर मोड",
        "modeSelectLabel": "कैलकुलेटर मोड चुनें",
        "formulaHeading": "सूत्र",
        "diagramHeading": "त्रिभुज आरेख",
        "howToUseHeading": "इस कैलकुलेटर का उपयोग कैसे करें",
        "examplesHeading": "चरण-दर-चरण उदाहरण",
        "resultMeaningHeading": "परिणाम का क्या मतलब है",
        "sideRatioHeading": "पार्श्व अनुपात",
        "useCasesHeading": "इस कैलकुलेटर का उपयोग कब करें",
        "commonMistakesHeading": "सामान्य गलतियाँ",
        "relatedHeading": "संबंधित कैलकुलेटर",
        "faqHeading": "अक्सर पूछे जाने वाले प्रश्न",
        "faqDescription": "सबसे सामान्य समकोण-त्रिकोण हल करने वाले प्रश्नों के उत्तर।",
        "diagramAriaLabel45": "45-45-90 त्रिभुज आरेख",
        "diagramAriaLabel30": "30-60-90 त्रिभुज आरेख",
        "calculatorMessages": {
          "positive": "कृपया एक सकारात्मक मान दर्ज करें.",
          "invalid": "इनपुट मान 0 से अधिक होना चाहिए."
        }
      }
    }
  },
  "es": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "Calculadora de triángulos 45 45 90",
      "metaTitle": "Calculadora de triángulos 45 45 90 | Encuentra lados, área y perímetro",
      "metaDescription": "Utilice esta calculadora de triángulos 45 45 90 para encontrar la hipotenusa, el cateto, el área y el perímetro de un triángulo rectángulo isósceles con fórmulas y pasos.",
      "badge": "Calculadora de triángulo rectángulo especial",
      "parentLabel": "Calculadora de triángulo rectángulo especial",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Encuentra la hipotenusa del cateto",
          "heading": "Encuentra la hipotenusa del cateto",
          "calculator": {
            "outputLabel": "Hipotenusa c",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Encuentra el cateto de la hipotenusa",
          "heading": "Encuentra el cateto de la hipotenusa",
          "calculator": {
            "outputLabel": "Cateto a",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenusa c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Encuentra el área de la cateto",
          "heading": "Encuentra el área de la cateto",
          "calculator": {
            "outputLabel": "Área",
            "outputUnit": "unidades cuadradas",
            "fields": [
              {
                "key": "a",
                "label": "Cateto a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Encuentra el perímetro del cateto",
          "heading": "Encuentra el perímetro del cateto",
          "calculator": {
            "outputLabel": "Perímetro P",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Utilice esta calculadora de triángulos 45-45-90 para encontrar rápidamente la hipotenusa, el cateto, el área y el perímetro de cualquier triángulo rectángulo isósceles utilizando fórmulas y proporciones estándar de triángulos 45 45 90."
      ],
      "calculatorNote": "Todos los valores de entrada deben ser mayores que 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Clave del diagrama de triángulo",
        "notes": [
          "El cateto a representa los dos lados iguales del triángulo rectángulo isósceles.",
          "La hipotenusa c es el lado más largo opuesto al ángulo 90°.",
          "Ambos ángulos agudos miden exactamente 45 grados."
        ]
      },
      "howToUse": [
        "Elija el modo de calculadora 45 45 90 según lo que ya sabe.",
        "Ingrese el valor conocido (ya sea el cateto o la hipotenusa).",
        "Asegúrese de que su entrada sea mayor que 0.",
        "Lea el resultado calculado directamente desde el campo de salida de la calculadora de triángulo rectángulo isósceles."
      ],
      "example": [
        {
          "title": "Ejemplo 1: Encuentra la hipotenusa cuando a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Ejemplo 2: Encuentra el cateto cuando c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Ejemplo 3: encontrar el área cuando a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Los resultados que obtienes representan las dimensiones físicas de tu triángulo. Un cateto o hipotenusa calculado es la longitud exacta del lado necesaria para mantener los ángulos de 45 grados.",
        "El uso de nuestras funciones de calculadora de área 45 45 90 y calculadora de perímetro 45 45 90 le ayuda a comprender el espacio 2D total dentro del triángulo y la distancia total alrededor de sus bordes."
      ],
      "sideRatio": [
        "La razón de los lados de cada triángulo 45 45 90 es a : a : a√2.",
        "Esto significa que ambos catetos siempre tienen exactamente la misma longitud y la hipotenusa es siempre la longitud del cateto multiplicada por la raíz cuadrada de 2."
      ],
      "useCases": [
        "Resolver problemas de geometría y trigonometría como calculadora del lado faltante 45 45 90.",
        "Calcular dimensiones para construcciones de base cuadrada o cortes diagonales con la fórmula del triángulo rectángulo isósceles.",
        "Diseño de cuadrículas isométricas y dibujo de ángulos estándar.",
        "Encontrar la distancia más corta a través de una diagonal cuadrada usando la calculadora de hipotenusa 45 45 90."
      ],
      "commonMistakes": [
        "Usar proporciones 30 60 90 por error.",
        "Olvidando que ambas catetos son iguales.",
        "Usando c = 2a en lugar de c = a × √2.",
        "Dividiendo por 2 en lugar de √2 al encontrar el cateto.",
        "Olvidar cuadrar el cateto al calcular el área."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "calculadora especial de triángulo rectángulo"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "Calculadora de triángulos 30 60 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "calculadora de lados de un triangulo rectángulo"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "calculadora del área del triángulo rectángulo"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "Calculadora del perímetro de un triángulo rectángulo."
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "calculadora de hipotenusa de triángulo rectángulo"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es una calculadora triangular 45 45 90?",
          "answer": "Es una herramienta específica diseñada para resolver un triángulo rectángulo isósceles encontrando la hipotenusa, el cateto, el área o el perímetro en función de las razones de los lados fijos."
        },
        {
          "question": "¿Qué es un triángulo rectángulo isósceles?",
          "answer": "Un triángulo rectángulo isósceles es un triángulo rectángulo donde ambos catetos tienen idéntica longitud y ambos ángulos no rectos miden exactamente 45 grados."
        },
        {
          "question": "¿Cuál es la fórmula de la hipotenusa de un triángulo 45 45 90?",
          "answer": "La fórmula para encontrar la hipotenusa es c = a × √2, donde a es la longitud de un cateto."
        },
        {
          "question": "¿Qué significa el área calculada?",
          "answer": "El resultado del área significa la cantidad total de espacio plano contenido dentro de los tres lados del triángulo."
        },
        {
          "question": "¿Puedo encontrar el cateto si solo conozco la hipotenusa?",
          "answer": "Sí, puedes encontrar fácilmente el cateto tomando la hipotenusa y dividiéndola por la raíz cuadrada de 2."
        },
        {
          "question": "¿Por qué las catetos son siempre iguales?",
          "answer": "Debido a que los ángulos opuestos miden 45 grados, los lados opuestos a esos ángulos también deben ser iguales entre sí."
        }
      ],
      "ui": {
        "modeTitle": "Modo calculadora",
        "modeSelectLabel": "Elige el modo calculadora",
        "formulaHeading": "Fórmula",
        "diagramHeading": "Diagrama de triángulo",
        "howToUseHeading": "Cómo utilizar esta calculadora",
        "examplesHeading": "Ejemplos paso a paso",
        "resultMeaningHeading": "Qué significa el resultado",
        "sideRatioHeading": "Relación lateral",
        "useCasesHeading": "Cuándo utilizar esta calculadora",
        "commonMistakesHeading": "Errores comunes",
        "relatedHeading": "Calculadoras relacionadas",
        "faqHeading": "Preguntas frecuentes",
        "faqDescription": "Respuestas a las preguntas más comunes sobre resolución de triángulos rectángulos.",
        "diagramAriaLabel45": "Diagrama de triángulo 45-45-90",
        "diagramAriaLabel30": "Diagrama de triángulo 30-60-90",
        "calculatorMessages": {
          "positive": "Por favor introduzca un valor positivo.",
          "invalid": "El valor de entrada debe ser mayor que 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "Calculadora de triángulos 30 60 90",
      "metaTitle": "Calculadora de triángulos 30 60 90 | Encuentre el cateto corto, el cateto largo y la hipotenusa",
      "metaDescription": "Utilice esta calculadora de triángulos 30 60 90 para encontrar el cateto corto, el cateto largo, la hipotenusa, el área y el perímetro con fórmulas y pasos.",
      "badge": "Calculadora de triángulo rectángulo especial",
      "parentLabel": "Calculadora de triángulo rectángulo especial",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Encuentra el tramo largo del tramo corto",
          "heading": "Encuentra el tramo largo del tramo corto",
          "calculator": {
            "outputLabel": "Cateto larga",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto corta a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Encuentra la hipotenusa del cateto corto.",
          "heading": "Encuentra la hipotenusa del cateto corto.",
          "calculator": {
            "outputLabel": "Hipotenusa c",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto corta a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Encuentra el cateto corto desde la hipotenusa.",
          "heading": "Encuentra el cateto corto desde la hipotenusa.",
          "calculator": {
            "outputLabel": "Cateto corta a",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenusa c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Encuentra la cateto corta de la cateto larga",
          "heading": "Encuentra la cateto corta de la cateto larga",
          "calculator": {
            "outputLabel": "Cateto corta a",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "b",
                "label": "cateto larga",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Encuentra el cateto largo desde la hipotenusa.",
          "heading": "Encuentra el cateto largo desde la hipotenusa.",
          "calculator": {
            "outputLabel": "cateto larga",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenusa c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Encuentra el área del tramo corto",
          "heading": "Encuentra el área del tramo corto",
          "calculator": {
            "outputLabel": "Área",
            "outputUnit": "unidades cuadradas",
            "fields": [
              {
                "key": "a",
                "label": "Cateto corta a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Encuentra el perímetro del tramo corto",
          "heading": "Encuentra el perímetro del tramo corto",
          "calculator": {
            "outputLabel": "Perímetro P",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto corta a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Utilice esta calculadora de triángulos 30-60-90 para encontrar fácilmente el cateto corto, el cateto largo, la hipotenusa, el área y el perímetro utilizando la fórmula y la proporción exactas del triángulo 30 60 90."
      ],
      "calculatorNote": "Todos los valores de entrada deben ser mayores que 0.",
      "formulaSection": {
        "formulas": [
          "\\text{cateto largo} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{cateto largo} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{cateto corto} + \\text{cateto largo} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Clave del diagrama de triángulo",
        "notes": [
          "El cateto corto a está opuesto al ángulo de 30 grados.",
          "El cateto largo a√3 está opuesto al ángulo de 60 grados.",
          "La hipotenusa c mide exactamente el doble de la longitud del cateto corto a."
        ]
      },
      "howToUse": [
        "Seleccione lo que desea encontrar en los modos de calculadora 30 60 90.",
        "Ingrese la longitud de su lado conocido (cateto corto, cateto largo o hipotenusa).",
        "Verifique que el número sea positivo y mayor que cero.",
        "Marque el cuadro de resultados para obtener su respuesta perfectamente escalada de nuestro solucionador de triángulos 30 60 90."
      ],
      "example": [
        {
          "title": "Ejemplo 1: Encuentre el cateto largo y la hipotenusa cuando el cateto corto a = 5.",
          "steps": [
            "\\text{cateto largo} = a \\times \\sqrt{3}",
            "\\text{cateto largo} = 5 \\times \\sqrt{3}",
            "\\text{cateto largo} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Ejemplo 2: Encuentre el cateto corto cuando c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Ejemplo 3: Encuentre el cateto largo de la hipotenusa c = 10.",
          "steps": [
            "\\text{cateto largo} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{cateto largo} = 5\\sqrt{3}",
            "\\text{cateto largo} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Los lados del triángulo calculados 30 60 90 muestran exactamente qué longitud debe tener cada parte del triángulo para mantener los ángulos de 30 y 60 grados. Son perfectamente proporcionales.",
        "Los resultados de la calculadora de área 30 60 90 y de la calculadora de perímetro 30 60 90 le brindan el tamaño 2D delimitado exacto y la longitud total del contorno de su triángulo."
      ],
      "sideRatio": [
        "La relación de lados estándar para un triángulo 30 60 90 es a : a√3 : 2a.",
        "El cateto corto es a, el cateto largo es a multiplicado por la raíz cuadrada de 3 y la hipotenusa es exactamente el doble del cateto corto."
      ],
      "useCases": [
        "Verificar asignaciones de trigonometría que involucran triángulos rectángulos especiales como una calculadora de lados faltantes 30 60 90.",
        "Determinar la altura de un triángulo equilátero usando la calculadora de cateto largo 30 60 90.",
        "Dibujo de ángulos y soportes estructurales en ingeniería o arquitectura.",
        "Resolver problemas vectoriales complejos en física con la calculadora de hipotenusa 30 60 90."
      ],
      "commonMistakes": [
        "Mezclando la cateto corta y la cateto larga.",
        "Usar √2 en lugar de √3 para el cálculo del tramo largo.",
        "Pensar que la hipotenusa es igual a a√3 en lugar de 2a.",
        "Usar el valor del tramo largo como tramo corto por accidente.",
        "Olvidando que la hipotenusa es exactamente el doble del cateto corto."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "calculadora especial de triángulo rectángulo"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "Calculadora de triángulos 45 45 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "calculadora de lados de un triangulo rectángulo"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "calculadora del área del triángulo rectángulo"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "Calculadora del perímetro de un triángulo rectángulo."
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "calculadora de hipotenusa de triángulo rectángulo"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo uso esta calculadora de triángulos 30 60 90?",
          "answer": "Simplemente elija el valor que desea calcular, ingrese el lado que ya conoce y la herramienta utilizará la proporción correcta para encontrar la respuesta."
        },
        {
          "question": "¿De qué lado está el cateto corto y el cateto largo?",
          "answer": "El cateto corto siempre está opuesto al ángulo de 30 grados, mientras que el cateto largo siempre está opuesto al ángulo de 60 grados."
        },
        {
          "question": "¿Cuál es la fórmula para encontrar la hipotenusa del cateto corto?",
          "answer": "La fórmula es c = 2a, lo que significa que la hipotenusa es exactamente el doble de la longitud del cateto corto."
        },
        {
          "question": "¿Qué significa el resultado de la cateto larga?",
          "answer": "El resultado del tramo largo le indica la altura o base exacta necesaria para que coincida con los otros lados manteniendo intactos los ángulos de 30 y 60 grados."
        },
        {
          "question": "¿Puedo encontrar el cateto corto del cateto largo?",
          "answer": "Sí, puedes encontrar el cateto corto dividiendo el cateto largo por la raíz cuadrada de 3."
        },
        {
          "question": "¿Por qué multiplicamos por la raíz cuadrada de 3?",
          "answer": "Multiplicar por la raíz cuadrada de 3 es una regla geométrica fija para este tipo de triángulo, que vincula matemáticamente el cateto corto con el cateto largo."
        }
      ],
      "ui": {
        "modeTitle": "Modo calculadora",
        "modeSelectLabel": "Elige el modo calculadora",
        "formulaHeading": "Fórmula",
        "diagramHeading": "Diagrama de triángulo",
        "howToUseHeading": "Cómo utilizar esta calculadora",
        "examplesHeading": "Ejemplos paso a paso",
        "resultMeaningHeading": "Qué significa el resultado",
        "sideRatioHeading": "Relación lateral",
        "useCasesHeading": "Cuándo utilizar esta calculadora",
        "commonMistakesHeading": "Errores comunes",
        "relatedHeading": "Calculadoras relacionadas",
        "faqHeading": "Preguntas frecuentes",
        "faqDescription": "Respuestas a las preguntas más comunes sobre resolución de triángulos rectángulos.",
        "diagramAriaLabel45": "Diagrama de triángulo 45-45-90",
        "diagramAriaLabel30": "Diagrama de triángulo 30-60-90",
        "calculatorMessages": {
          "positive": "Por favor introduzca un valor positivo.",
          "invalid": "El valor de entrada debe ser mayor que 0."
        }
      }
    }
  },
  "ru": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 Калькулятор треугольника",
      "metaTitle": "45 45 90 Калькулятор треугольника | Найдите стороны, площадь и периметр",
      "metaDescription": "Используйте этот треугольник 45 45 90, чтобы найти гипотенузу, катет, площадь и периметр равнобедренного прямоугольного треугольника с помощью формул и шагов.",
      "badge": "Специальный калькулятор прямоугольного треугольника",
      "parentLabel": "Специальный калькулятор прямоугольного треугольника",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Найдите гипотенузу по катету",
          "heading": "Найдите гипотенузу по катету",
          "calculator": {
            "outputLabel": "Гипотенуза c",
            "outputUnit": "единицы",
            "fields": [
              {
                "key": "a",
                "label": "Нога a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Найти катет по гипотенузе",
          "heading": "Найти катет по гипотенузе",
          "calculator": {
            "outputLabel": "Нога a",
            "outputUnit": "единицы",
            "fields": [
              {
                "key": "c",
                "label": "Гипотенуза c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Найдите площадь от ноги",
          "heading": "Найдите площадь от ноги",
          "calculator": {
            "outputLabel": "Площадь",
            "outputUnit": "кв. ед.",
            "fields": [
              {
                "key": "a",
                "label": "Нога a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Найдите периметр ноги",
          "heading": "Найдите периметр ноги",
          "calculator": {
            "outputLabel": "Периметр P",
            "outputUnit": "единицы",
            "fields": [
              {
                "key": "a",
                "label": "Нога a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Используйте этот калькулятор треугольников 45-45-90, чтобы быстро найти гипотенузу, катет, площадь и периметр любого равнобедренного прямоугольного треугольника, используя стандартные формулы и соотношения треугольников 45 45 90."
      ],
      "calculatorNote": "Все входные значения должны быть больше 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Ключ к диаграмме треугольника",
        "notes": [
          "Катета А представляет собой две равные стороны равнобедренного прямоугольного треугольника.",
          "Гипотенуза c — это самая длинная сторона, противоположная углу 90°.",
          "Оба острых угла равны ровно 45 градусов."
        ]
      },
      "howToUse": [
        "Выберите режим калькулятора 45 45 90 на основе того, что вы уже знаете.",
        "Введите известное значение (катет или гипотенузу).",
        "Убедитесь, что введенное значение больше 0.",
        "Считайте рассчитанный результат непосредственно из поля вывода калькулятора равнобедренного прямоугольного треугольника."
      ],
      "example": [
        {
          "title": "Пример 1: Найдите гипотенузу, когда a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Пример 2: Найдите ногу, когда c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Пример 3: Найдите площадь, когда a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Результаты, которые вы получите, представляют собой физические размеры вашего треугольника. Рассчитанный катет или гипотенуза — это точная длина стороны, необходимая для поддержания углов в 45 градусов.",
        "Использование нашего калькулятора площади 45 45 90 и калькулятора периметра 45 45 90 поможет вам понять общее двумерное пространство внутри треугольника и общее расстояние вокруг его краев."
      ],
      "sideRatio": [
        "Соотношение сторон каждого треугольника 45 45 90 равно a : a : a√2.",
        "Это означает, что оба катета всегда имеют одинаковую длину, а гипотенуза всегда равна длине катета, умноженной на квадратный корень из 2."
      ],
      "useCases": [
        "Решение домашних заданий по геометрии и тригонометрии с помощью калькулятора недостающей стороны 45 45 90.",
        "Расчет размеров конструкций с квадратным основанием или диагональных разрезов по формуле равнобедренного прямоугольного треугольника.",
        "Проектирование изометрических сеток и составление стандартных углов.",
        "Нахождение кратчайшего расстояния по диагонали квадрата с помощью калькулятора гипотенузы 45 45 90."
      ],
      "commonMistakes": [
        "Использование коэффициентов 30 60 90 по ошибке.",
        "Забывая, что обе ноги равны.",
        "Использование c = 2a вместо c = a × √2.",
        "Деление на 2 вместо √2 при нахождении катета.",
        "Забыли выровнять ногу при расчете площади."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "специальный калькулятор прямоугольного треугольника"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 калькулятор треугольников"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Калькулятор стороны прямоугольного треугольника"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "Калькулятор площади прямоугольного треугольника"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "калькулятор периметра прямоугольного треугольника"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Калькулятор гипотенузы прямоугольного треугольника"
        }
      ],
      "faqs": [
        {
          "question": "Что такое треугольный калькулятор 45 45 90?",
          "answer": "Это специальный инструмент, предназначенный для решения равнобедренного прямоугольного треугольника путем нахождения гипотенузы, катета, площади или периметра на основе фиксированных соотношений сторон."
        },
        {
          "question": "Что такое равнобедренный прямоугольный треугольник?",
          "answer": "Равнобедренный прямоугольный треугольник — это прямоугольный треугольник, у которого обе стороны равны по длине, а оба непрямых угла равны ровно 45 градусов."
        },
        {
          "question": "Какова формула гипотенузы треугольника 45 45 90?",
          "answer": "Формула для нахождения гипотенузы: c = a × √2, где a — длина одного катета."
        },
        {
          "question": "Что означает расчетная площадь?",
          "answer": "Результат площади означает общее количество плоского пространства, содержащегося внутри трех сторон треугольника."
        },
        {
          "question": "Могу ли я найти катет, если знаю только гипотенузу?",
          "answer": "Да, вы можете легко найти катет, взяв гипотенузу и разделив ее на квадратный корень из 2."
        },
        {
          "question": "Почему ноги всегда равны?",
          "answer": "Поскольку оба противоположных угла равны 45 градусам, стороны, противоположные этим углам, также должны быть равны друг другу."
        }
      ],
      "ui": {
        "modeTitle": "Режим калькулятора",
        "modeSelectLabel": "Выберите режим калькулятора",
        "formulaHeading": "Формула",
        "diagramHeading": "Диаграмма треугольника",
        "howToUseHeading": "Как использовать этот калькулятор",
        "examplesHeading": "Пошаговые примеры",
        "resultMeaningHeading": "Что означает результат",
        "sideRatioHeading": "Соотношение сторон",
        "useCasesHeading": "Когда использовать этот калькулятор",
        "commonMistakesHeading": "Распространенные ошибки",
        "relatedHeading": "Похожие калькуляторы",
        "faqHeading": "Часто задаваемые вопросы",
        "faqDescription": "Ответы на наиболее распространенные вопросы по решению прямоугольного треугольника.",
        "diagramAriaLabel45": "45-45-90 Треугольная диаграмма",
        "diagramAriaLabel30": "30-60-90 Треугольная диаграмма",
        "calculatorMessages": {
          "positive": "Пожалуйста, введите положительное значение.",
          "invalid": "Входное значение должно быть больше 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 Калькулятор треугольника",
      "metaTitle": "30 60 90 Калькулятор треугольника | Найдите короткую катет, длинную катет и гипотенузу.",
      "metaDescription": "Используйте этот калькулятор треугольников 30 60 90, чтобы найти короткий катет, длинный катет, гипотенузу, площадь и периметр с помощью формул и шагов.",
      "badge": "Специальный калькулятор прямоугольного треугольника",
      "parentLabel": "Специальный калькулятор прямоугольного треугольника",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Найдите длинную ногу по короткой ноге",
          "heading": "Найдите длинную ногу по короткой ноге",
          "calculator": {
            "outputLabel": "Длинная нога",
            "outputUnit": "единицы",
            "fields": [
              {
                "key": "a",
                "label": "Короткая ножка a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Найдите гипотенузу по короткому катету.",
          "heading": "Найдите гипотенузу по короткому катету.",
          "calculator": {
            "outputLabel": "Гипотенуза c",
            "outputUnit": "единицы",
            "fields": [
              {
                "key": "a",
                "label": "Короткая ножка a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Найдите короткий катет по гипотенузе",
          "heading": "Найдите короткий катет по гипотенузе",
          "calculator": {
            "outputLabel": "Короткая ножка a",
            "outputUnit": "единицы",
            "fields": [
              {
                "key": "c",
                "label": "Гипотенуза c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Найдите короткую ногу по длинной ноге",
          "heading": "Найдите короткую ногу по длинной ноге",
          "calculator": {
            "outputLabel": "Короткая ножка a",
            "outputUnit": "единицы",
            "fields": [
              {
                "key": "b",
                "label": "Длинная нога",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Найдите длинный катет по гипотенузе",
          "heading": "Найдите длинный катет по гипотенузе",
          "calculator": {
            "outputLabel": "Длинная нога",
            "outputUnit": "единицы",
            "fields": [
              {
                "key": "c",
                "label": "Гипотенуза c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Найдите площадь короткой ноги",
          "heading": "Найдите площадь короткой ноги",
          "calculator": {
            "outputLabel": "Площадь",
            "outputUnit": "кв. ед.",
            "fields": [
              {
                "key": "a",
                "label": "Короткая ножка a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Найдите периметр короткой ноги",
          "heading": "Найдите периметр короткой ноги",
          "calculator": {
            "outputLabel": "Периметр P",
            "outputUnit": "единицы",
            "fields": [
              {
                "key": "a",
                "label": "Короткая ножка a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Используйте этот калькулятор треугольников 30-60-90, чтобы легко найти короткий катет, длинный катет, гипотенузу, площадь и периметр, используя точную формулу и соотношение треугольника 30 60 90."
      ],
      "calculatorNote": "Все входные значения должны быть больше 0.",
      "formulaSection": {
        "formulas": [
          "\\text{длинный катет} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{длинный катет} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{короткий катет} + \\text{длинный катет} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Ключ к диаграмме треугольника",
        "notes": [
          "Короткая нога а расположена напротив угла 30 градусов.",
          "Длинная нога a√3 расположена напротив угла 60 градусов.",
          "Гипотенуза с ровно в два раза длиннее короткого катета а."
        ]
      },
      "howToUse": [
        "Выберите то, что вы хотите найти, в режимах калькулятора 30 60 90.",
        "Введите известную длину стороны (короткий катет, длинный катет или гипотенузу).",
        "Убедитесь, что число положительное и больше нуля.",
        "Проверьте поле результата, чтобы получить идеально масштабированный ответ от нашего решателя треугольников 30 60 90."
      ],
      "example": [
        {
          "title": "Пример 1. Найдите длинный катет и гипотенузу, если короткий катет a = 5.",
          "steps": [
            "\\text{длинный катет} = a \\times \\sqrt{3}",
            "\\text{длинный катет} = 5 \\times \\sqrt{3}",
            "\\text{длинный катет} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Пример 2: Найдите короткую ногу, когда c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Пример 3: Найдите длинный катет от гипотенузы c = 10.",
          "steps": [
            "\\text{длинный катет} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{длинный катет} = 5\\sqrt{3}",
            "\\text{длинный катет} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Рассчитанные стороны треугольника 30 60 90 точно показывают, какой длины должна быть каждая часть треугольника, чтобы поддерживать углы 30 и 60 градусов. Они совершенно пропорциональны.",
        "Результаты калькулятора площади 30 60 90 и калькулятора периметра 30 60 90 дают вам точный ограниченный двумерный размер и общую длину контура вашего треугольника."
      ],
      "sideRatio": [
        "Стандартное соотношение сторон треугольника 30 60 90 — a : a√3 : 2a.",
        "Короткий катет равен a, длинный катет равен квадратному корню из 3, умноженному на квадратный, а гипотенуза ровно в два раза больше короткого катета."
      ],
      "useCases": [
        "Проверка тригонометрических заданий, включающих специальные прямоугольные треугольники, в виде калькулятора недостающей стороны 30 60 90.",
        "Определение высоты равностороннего треугольника с помощью калькулятора длинных ног 30 60 90.",
        "Черчение углов и структурных опор в технике или архитектуре.",
        "Решение сложных векторных задач по физике с помощью калькулятора гипотенузы 30 60 90."
      ],
      "commonMistakes": [
        "Перепутайте короткую ногу и длинную ногу.",
        "Использование √2 вместо √3 для расчета длинного участка.",
        "Думая, что гипотенуза равна a√3 вместо 2a.",
        "Случайное использование значения длинного участка в качестве короткого.",
        "Забывая, что гипотенуза ровно в два раза больше короткого катета."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "специальный калькулятор прямоугольного треугольника"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 калькулятор треугольников"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Калькулятор стороны прямоугольного треугольника"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "Калькулятор площади прямоугольного треугольника"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "калькулятор периметра прямоугольного треугольника"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Калькулятор гипотенузы прямоугольного треугольника"
        }
      ],
      "faqs": [
        {
          "question": "Как мне использовать треугольный калькулятор 30 60 90?",
          "answer": "Просто выберите значение, которое вы хотите рассчитать, введите уже известную сторону, и инструмент будет использовать правильное соотношение для поиска ответа."
        },
        {
          "question": "Какая сторона короткая и длинная?",
          "answer": "Короткая часть всегда противоположна углу 30 градусов, а длинная часть всегда противоположна углу 60 градусов."
        },
        {
          "question": "По какой формуле найти гипотенузу по короткому катету?",
          "answer": "Формула: c = 2a, что означает, что гипотенуза ровно в два раза длиннее короткого катета."
        },
        {
          "question": "Что означает результат «длинная нога»?",
          "answer": "Результат длинной ноги покажет вам точную высоту или основание, необходимые для соответствия другим сторонам, сохраняя при этом углы 30 и 60 градусов."
        },
        {
          "question": "Могу ли я найти короткую ногу от длинной ноги?",
          "answer": "Да, вы можете найти короткую ногу, разделив длинную ногу на квадратный корень из 3."
        },
        {
          "question": "Почему мы умножаем на квадратный корень из 3?",
          "answer": "Умножение на квадратный корень из 3 является фиксированным геометрическим правилом для этого типа треугольника, математически связывающим короткую сторону с длинной."
        }
      ],
      "ui": {
        "modeTitle": "Режим калькулятора",
        "modeSelectLabel": "Выберите режим калькулятора",
        "formulaHeading": "Формула",
        "diagramHeading": "Диаграмма треугольника",
        "howToUseHeading": "Как использовать этот калькулятор",
        "examplesHeading": "Пошаговые примеры",
        "resultMeaningHeading": "Что означает результат",
        "sideRatioHeading": "Соотношение сторон",
        "useCasesHeading": "Когда использовать этот калькулятор",
        "commonMistakesHeading": "Распространенные ошибки",
        "relatedHeading": "Похожие калькуляторы",
        "faqHeading": "Часто задаваемые вопросы",
        "faqDescription": "Ответы на наиболее распространенные вопросы по решению прямоугольного треугольника.",
        "diagramAriaLabel45": "45-45-90 Треугольная диаграмма",
        "diagramAriaLabel30": "30-60-90 Треугольная диаграмма",
        "calculatorMessages": {
          "positive": "Пожалуйста, введите положительное значение.",
          "invalid": "Входное значение должно быть больше 0."
        }
      }
    }
  },
  "fr": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "Calculatrice triangulaire 45 45 90",
      "metaTitle": "45 45 90 Calculatrice triangulaire | Trouver les côtés, la surface et le périmètre",
      "metaDescription": "Utilisez cette calculatrice de triangle 45 45 90 pour trouver l'hypoténuse, la branche, l'aire et le périmètre d'un triangle rectangle isocèle avec des formules et des étapes.",
      "badge": "Calculateur spécial de triangle rectangle",
      "parentLabel": "Calculateur spécial de triangle rectangle",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Trouver l'hypoténuse de la jambe",
          "heading": "Trouver l'hypoténuse de la jambe",
          "calculator": {
            "outputLabel": "Hypoténuse c",
            "outputUnit": "unités",
            "fields": [
              {
                "key": "a",
                "label": "Jambe a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Trouver la jambe de l'hypoténuse",
          "heading": "Trouver la jambe de l'hypoténuse",
          "calculator": {
            "outputLabel": "Jambe a",
            "outputUnit": "unités",
            "fields": [
              {
                "key": "c",
                "label": "Hypoténuse c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Trouver la zone à partir de la jambe",
          "heading": "Trouver la zone à partir de la jambe",
          "calculator": {
            "outputLabel": "Zone",
            "outputUnit": "unités carrées",
            "fields": [
              {
                "key": "a",
                "label": "Jambe a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Trouver le périmètre à partir de la jambe",
          "heading": "Trouver le périmètre à partir de la jambe",
          "calculator": {
            "outputLabel": "Périmètre P",
            "outputUnit": "unités",
            "fields": [
              {
                "key": "a",
                "label": "Jambe a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Utilisez ce calculateur de triangle 45-45-90 pour trouver rapidement l'hypoténuse, la branche, l'aire et le périmètre de tout triangle rectangle isocèle à l'aide des formules et des ratios triangulaires 45 45 90 standard."
      ],
      "calculatorNote": "Toutes les valeurs d'entrée doivent être supérieures à 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Clé du diagramme triangulaire",
        "notes": [
          "La jambe a représente les deux côtés égaux du triangle rectangle isocèle.",
          "L'hypoténuse c est le côté le plus long opposé à l'angle 90°.",
          "Les deux angles aigus font exactement 45 degrés."
        ]
      },
      "howToUse": [
        "Choisissez le mode de calcul 45 45 90 en fonction de ce que vous savez déjà.",
        "Saisissez la valeur connue (soit la jambe, soit l'hypoténuse).",
        "Assurez-vous que votre entrée est supérieure à 0.",
        "Lisez le résultat calculé directement à partir du champ de sortie du calculateur de triangle rectangle isocèle."
      ],
      "example": [
        {
          "title": "Exemple 1 : Trouver l'hypoténuse lorsque a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Exemple 2 : Trouver la jambe lorsque c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Exemple 3 : Trouver la zone lorsque a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Les résultats que vous obtenez représentent les dimensions physiques de votre triangle. Une jambe ou hypoténuse calculée est la longueur exacte du côté nécessaire pour maintenir les angles de 45 degrés.",
        "L'utilisation de nos fonctionnalités de calcul de zone 45 45 90 et de calcul de périmètre 45 45 90 vous aide à comprendre l'espace 2D total à l'intérieur du triangle et la distance totale autour de ses bords."
      ],
      "sideRatio": [
        "Le rapport latéral de chaque triangle 45 45 90 est a : a : a√2.",
        "Cela signifie que les deux jambes ont toujours exactement la même longueur et que l'hypoténuse est toujours la longueur de la jambe multipliée par la racine carrée de 2."
      ],
      "useCases": [
        "Résoudre les problèmes de devoirs de géométrie et de trigonométrie en tant que calculatrice latérale manquante 45 45 90.",
        "Calcul des dimensions pour les constructions à base carrée ou les coupes diagonales avec la formule du triangle rectangle isocèle.",
        "Concevoir des grilles isométriques et rédiger des angles standards.",
        "Trouver la distance la plus courte sur une diagonale carrée à l'aide de la calculatrice d'hypoténuse 45 45 90."
      ],
      "commonMistakes": [
        "Utilisation des ratios 30 60 90 par erreur.",
        "Oublier que les deux jambes sont égales.",
        "Utilisation de c = 2a au lieu de c = a × √2.",
        "Diviser par 2 au lieu de √2 lors de la recherche de la jambe.",
        "Oublier de mettre la jambe au carré lors du calcul de l'aire."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "calculateur spécial de triangle rectangle"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "Calculatrice triangulaire 30 60 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "calculateur de côté d'un triangle rectangle"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "calculateur d'aire d'un triangle rectangle"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "calculateur de périmètre d'un triangle rectangle"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "calculateur d'hypoténuse triangle rectangle"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce qu'un calculateur de triangle 45 45 90 ?",
          "answer": "Il s'agit d'un outil spécifique conçu pour résoudre un triangle rectangle isocèle en trouvant l'hypoténuse, la branche, l'aire ou le périmètre en fonction des rapports des côtés fixes."
        },
        {
          "question": "Qu'est-ce qu'un triangle rectangle isocèle ?",
          "answer": "Un triangle rectangle isocèle est un triangle rectangle dont les deux branches ont la même longueur et les deux angles non droits mesurent exactement 45 degrés."
        },
        {
          "question": "Quelle est la formule de l’hypoténuse d’un triangle 45 45 90 ?",
          "answer": "La formule pour trouver l’hypoténuse est c = a × √2, où a est la longueur d’une jambe."
        },
        {
          "question": "Que signifie la surface calculée ?",
          "answer": "Le résultat de la surface signifie la quantité totale d'espace plat contenu à l'intérieur des trois côtés du triangle."
        },
        {
          "question": "Puis-je retrouver la jambe si je ne connais que l’hypoténuse ?",
          "answer": "Oui, vous pouvez facilement trouver la jambe en prenant l’hypoténuse et en la divisant par la racine carrée de 2."
        },
        {
          "question": "Pourquoi les jambes sont-elles toujours égales ?",
          "answer": "Étant donné que les angles opposés font tous deux 45 degrés, les côtés opposés à ces angles doivent également être égaux."
        }
      ],
      "ui": {
        "modeTitle": "Mode Calculatrice",
        "modeSelectLabel": "Choisir le mode calculatrice",
        "formulaHeading": "Formule",
        "diagramHeading": "Diagramme triangulaire",
        "howToUseHeading": "Comment utiliser cette calculatrice",
        "examplesHeading": "Exemples étape par étape",
        "resultMeaningHeading": "Ce que signifie le résultat",
        "sideRatioHeading": "Rapport latéral",
        "useCasesHeading": "Quand utiliser cette calculatrice",
        "commonMistakesHeading": "Erreurs courantes",
        "relatedHeading": "Calculatrices associées",
        "faqHeading": "FAQ",
        "faqDescription": "Réponses aux questions de résolution de triangle rectangle les plus courantes.",
        "diagramAriaLabel45": "Diagramme triangulaire 45-45-90",
        "diagramAriaLabel30": "Diagramme triangulaire 30-60-90",
        "calculatorMessages": {
          "positive": "Veuillez saisir une valeur positive.",
          "invalid": "La valeur d'entrée doit être supérieure à 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "Calculatrice triangulaire 30 60 90",
      "metaTitle": "30 60 90 Calculatrice triangulaire | Trouver la jambe courte, la jambe longue et l'hypoténuse",
      "metaDescription": "Utilisez cette calculatrice triangulaire 30 60 90 pour trouver la jambe courte, la jambe longue, l'hypoténuse, l'aire et le périmètre avec des formules et des étapes.",
      "badge": "Calculateur spécial de triangle rectangle",
      "parentLabel": "Calculateur spécial de triangle rectangle",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Trouver une jambe longue à partir d'une jambe courte",
          "heading": "Trouver une jambe longue à partir d'une jambe courte",
          "calculator": {
            "outputLabel": "Longue jambe",
            "outputUnit": "unités",
            "fields": [
              {
                "key": "a",
                "label": "Jambe courte a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Trouver l'hypoténuse à partir de la jambe courte",
          "heading": "Trouver l'hypoténuse à partir de la jambe courte",
          "calculator": {
            "outputLabel": "Hypoténuse c",
            "outputUnit": "unités",
            "fields": [
              {
                "key": "a",
                "label": "Jambe courte a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Trouver la jambe courte de l'hypoténuse",
          "heading": "Trouver la jambe courte de l'hypoténuse",
          "calculator": {
            "outputLabel": "Jambe courte a",
            "outputUnit": "unités",
            "fields": [
              {
                "key": "c",
                "label": "Hypoténuse c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Trouver une jambe courte à partir d'une jambe longue",
          "heading": "Trouver une jambe courte à partir d'une jambe longue",
          "calculator": {
            "outputLabel": "Jambe courte a",
            "outputUnit": "unités",
            "fields": [
              {
                "key": "b",
                "label": "Longue jambe",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Trouver la longue jambe de l'hypoténuse",
          "heading": "Trouver la longue jambe de l'hypoténuse",
          "calculator": {
            "outputLabel": "Longue jambe",
            "outputUnit": "unités",
            "fields": [
              {
                "key": "c",
                "label": "Hypoténuse c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Trouver la zone à partir de la jambe courte",
          "heading": "Trouver la zone à partir de la jambe courte",
          "calculator": {
            "outputLabel": "Zone",
            "outputUnit": "unités carrées",
            "fields": [
              {
                "key": "a",
                "label": "Jambe courte a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Trouver le périmètre à partir de la jambe courte",
          "heading": "Trouver le périmètre à partir de la jambe courte",
          "calculator": {
            "outputLabel": "Périmètre P",
            "outputUnit": "unités",
            "fields": [
              {
                "key": "a",
                "label": "Jambe courte a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Utilisez ce calculateur de triangle 30-60-90 pour trouver facilement la jambe courte, la jambe longue, l'hypoténuse, l'aire et le périmètre en utilisant la formule et le rapport exacts du triangle 30 60 90."
      ],
      "calculatorNote": "Toutes les valeurs d'entrée doivent être supérieures à 0.",
      "formulaSection": {
        "formulas": [
          "\\text{grande cathète} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{grande cathète} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{petite cathète} + \\text{grande cathète} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Clé du diagramme triangulaire",
        "notes": [
          "La jambe courte a est opposée à l’angle de 30 degrés.",
          "La jambe longue a√3 est opposée à l'angle de 60 degrés.",
          "L'hypoténuse c mesure exactement deux fois la longueur de la jambe courte a."
        ]
      },
      "howToUse": [
        "Sélectionnez ce que vous souhaitez trouver dans les modes de calcul 30 60 90.",
        "Entrez la longueur de votre côté connue (jambe courte, jambe longue ou hypoténuse).",
        "Vérifiez que le nombre est positif et supérieur à zéro.",
        "Cochez la case de résultat pour votre réponse parfaitement mise à l'échelle de notre solveur de triangle 30 60 90."
      ],
      "example": [
        {
          "title": "Exemple 1 : Trouvez la jambe longue et l'hypoténuse lorsque la jambe courte a = 5.",
          "steps": [
            "\\text{grande cathète} = a \\times \\sqrt{3}",
            "\\text{grande cathète} = 5 \\times \\sqrt{3}",
            "\\text{grande cathète} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Exemple 2 : Trouver la jambe courte lorsque c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Exemple 3 : Trouvez la jambe longue à partir de l'hypoténuse c = 10.",
          "steps": [
            "\\text{grande cathète} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{grande cathète} = 5\\sqrt{3}",
            "\\text{grande cathète} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Les côtés calculés du triangle 30 60 90 montrent exactement la longueur que chaque partie du triangle doit avoir pour maintenir les angles de 30 et 60 degrés. Ils sont parfaitement proportionnés.",
        "Les résultats du calculateur de zone 30 60 90 et du calculateur de périmètre 30 60 90 vous donnent la taille 2D délimitée exacte et la longueur totale du contour de votre triangle."
      ],
      "sideRatio": [
        "Le rapport latéral standard pour un triangle 30 60 90 est a : a√3 : 2a.",
        "La jambe courte est a, la jambe longue est 1 fois la racine carrée de 3 et l'hypoténuse est exactement le double de la jambe courte."
      ],
      "useCases": [
        "Vérification des affectations de trigonométrie impliquant des triangles rectangles spéciaux en tant que calculateur de côtés manquants 30 60 90.",
        "Détermination de la hauteur d'un triangle équilatéral à l'aide du calculateur de jambe longue 30 60 90.",
        "Angles de dessin et supports structurels en ingénierie ou en architecture.",
        "Résoudre des problèmes vectoriels complexes en physique avec le calculateur d'hypoténuse 30 60 90."
      ],
      "commonMistakes": [
        "Mélanger la jambe courte et la jambe longue.",
        "Utilisation de √2 au lieu de √3 pour le calcul de la jambe longue.",
        "En pensant que l'hypoténuse est égale à a√3 au lieu de 2a.",
        "Utiliser la valeur de la jambe longue comme jambe courte par accident.",
        "En oubliant que l'hypoténuse fait exactement le double de la jambe courte."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "calculateur spécial de triangle rectangle"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "Calculatrice triangulaire 45 45 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "calculateur de côté d'un triangle rectangle"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "calculateur d'aire d'un triangle rectangle"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "calculateur de périmètre d'un triangle rectangle"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "calculateur d'hypoténuse triangle rectangle"
        }
      ],
      "faqs": [
        {
          "question": "Comment utiliser ce calculateur de triangle 30 60 90 ?",
          "answer": "Choisissez simplement la valeur que vous souhaitez calculer, entrez le côté que vous connaissez déjà et l'outil utilisera le bon rapport pour trouver la réponse."
        },
        {
          "question": "De quel côté se trouvent la jambe courte et la jambe longue ?",
          "answer": "La jambe courte est toujours opposée à l’angle de 30 degrés, tandis que la jambe longue est toujours opposée à l’angle de 60 degrés."
        },
        {
          "question": "Quelle est la formule pour trouver l’hypoténuse à partir de la jambe courte ?",
          "answer": "La formule est c = 2a, ce qui signifie que l’hypoténuse fait exactement le double de la longueur de la jambe courte."
        },
        {
          "question": "Que signifie le résultat jambe longue ?",
          "answer": "Le résultat de la jambe longue vous indique la hauteur ou la base exacte requise pour correspondre aux autres côtés tout en gardant intacts les angles de 30 et 60 degrés."
        },
        {
          "question": "Puis-je distinguer la jambe courte de la jambe longue ?",
          "answer": "Oui, vous pouvez trouver la jambe courte en divisant la jambe longue par la racine carrée de 3."
        },
        {
          "question": "Pourquoi multiplie-t-on par la racine carrée de 3 ?",
          "answer": "La multiplication par la racine carrée de 3 est une règle géométrique fixe pour ce type de triangle, reliant mathématiquement la jambe courte à la jambe longue."
        }
      ],
      "ui": {
        "modeTitle": "Mode Calculatrice",
        "modeSelectLabel": "Choisir le mode calculatrice",
        "formulaHeading": "Formule",
        "diagramHeading": "Diagramme triangulaire",
        "howToUseHeading": "Comment utiliser cette calculatrice",
        "examplesHeading": "Exemples étape par étape",
        "resultMeaningHeading": "Ce que signifie le résultat",
        "sideRatioHeading": "Rapport latéral",
        "useCasesHeading": "Quand utiliser cette calculatrice",
        "commonMistakesHeading": "Erreurs courantes",
        "relatedHeading": "Calculatrices associées",
        "faqHeading": "FAQ",
        "faqDescription": "Réponses aux questions de résolution de triangle rectangle les plus courantes.",
        "diagramAriaLabel45": "Diagramme triangulaire 45-45-90",
        "diagramAriaLabel30": "Diagramme triangulaire 30-60-90",
        "calculatorMessages": {
          "positive": "Veuillez saisir une valeur positive.",
          "invalid": "La valeur d'entrée doit être supérieure à 0."
        }
      }
    }
  },
  "de": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 Dreiecksrechner",
      "metaTitle": "45 45 90 Dreiecksrechner | Finden Sie Seiten, Fläche und Umfang",
      "metaDescription": "Verwenden Sie diesen 45 45 90-Dreiecksrechner, um die Hypotenuse, den Schenkel, die Fläche und den Umfang eines gleichschenkligen rechtwinkligen Dreiecks mit Formeln und Schritten zu ermitteln.",
      "badge": "Spezieller Rechner für rechtwinklige Dreiecke",
      "parentLabel": "Spezieller Rechner für rechtwinklige Dreiecke",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Finden Sie die Hypotenuse am Kathete",
          "heading": "Finden Sie die Hypotenuse am Kathete",
          "calculator": {
            "outputLabel": "Hypotenuse c",
            "outputUnit": "Einheiten",
            "fields": [
              {
                "key": "a",
                "label": "Kathete a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Finden Sie das Kathete von der Hypotenuse",
          "heading": "Finden Sie das Kathete von der Hypotenuse",
          "calculator": {
            "outputLabel": "Kathete a",
            "outputUnit": "Einheiten",
            "fields": [
              {
                "key": "c",
                "label": "Hypotenuse c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Finden Sie den Bereich vom Kathete",
          "heading": "Finden Sie den Bereich vom Kathete",
          "calculator": {
            "outputLabel": "Bereich",
            "outputUnit": "Quadratmetereinheiten",
            "fields": [
              {
                "key": "a",
                "label": "Kathete a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Finden Sie den Umfang vom Kathete",
          "heading": "Finden Sie den Umfang vom Kathete",
          "calculator": {
            "outputLabel": "Umfang P",
            "outputUnit": "Einheiten",
            "fields": [
              {
                "key": "a",
                "label": "Kathete a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Verwenden Sie diesen 45-45-90-Dreiecksrechner, um mithilfe der standardmäßigen 45 45 90-Dreiecksformeln und -Verhältnisse schnell die Hypotenuse, den Schenkel, die Fläche und den Umfang jedes gleichschenkligen rechtwinkligen Dreiecks zu ermitteln."
      ],
      "calculatorNote": "Alle Eingabewerte müssen größer als 0 sein.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Schlüssel zum Dreiecksdiagramm",
        "notes": [
          "Das Kathete a stellt die beiden gleichen Seiten des gleichschenkligen rechtwinkligen Dreiecks dar.",
          "Hypotenuse c ist die längste Seite gegenüber dem 90°-Winkel.",
          "Beide spitzen Winkel betragen genau 45 Grad."
        ]
      },
      "howToUse": [
        "Wählen Sie den 45 45 90-Rechnermodus basierend auf dem, was Sie bereits wissen.",
        "Geben Sie den bekannten Wert ein (entweder das Kathete oder die Hypotenuse).",
        "Stellen Sie sicher, dass Ihre Eingabe größer als 0 ist.",
        "Lesen Sie das berechnete Ergebnis direkt aus dem Ausgabefeld des Rechners für gleichschenklige rechtwinklige Dreiecke ab."
      ],
      "example": [
        {
          "title": "Beispiel 1: Finden Sie die Hypotenuse, wenn a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Beispiel 2: Kathete finden, wenn c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Beispiel 3: Finden Sie die Fläche, wenn a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Die Ergebnisse, die Sie erhalten, stellen die physikalischen Abmessungen Ihres Dreiecks dar. Ein berechnetes Kathete oder eine Hypotenuse ist die exakte Seitenlänge, die zur Aufrechterhaltung der 45-Grad-Winkel erforderlich ist.",
        "Die Verwendung unserer 45 45 90-Flächenrechner- und 45 45 90-Umfangsrechnerfunktionen hilft Ihnen, den gesamten 2D-Raum innerhalb des Dreiecks und die Gesamtentfernung um seine Kanten herum zu verstehen."
      ],
      "sideRatio": [
        "Das Seitenverhältnis für jedes 45 45 90-Dreieck ist a : a : a√2.",
        "Das bedeutet, dass beide Schenkel immer genau gleich lang sind und die Hypotenuse immer die Schenkellänge multipliziert mit der Quadratwurzel aus 2 ist."
      ],
      "useCases": [
        "Lösen von Geometrie- und Trigonometrie-Hausaufgaben als 45 45 90-Rechner für fehlende Seiten.",
        "Berechnen von Abmessungen für quadratische Konstruktionen oder diagonale Schnitte mit der Formel für gleichschenklige rechtwinklige Dreiecke.",
        "Entwerfen isometrischer Gitter und Zeichnen von Standardwinkeln.",
        "Ermitteln der kürzesten Distanz über eine Quadratdiagonale mit dem Hypotenusenrechner 45 45 90."
      ],
      "commonMistakes": [
        "Versehentliche Verwendung von 30 60 90-Verhältnissen.",
        "Vergessen, dass beide Katheten gleich sind.",
        "Verwendung von c = 2a anstelle von c = a × √2.",
        "Division durch 2 anstelle von √2 beim Finden des Kathete.",
        "Bei der Flächenberechnung wird vergessen, das Kathete auszurichten."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "spezieller Rechner für rechtwinklige Dreiecke"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 Dreiecksrechner"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Seitenrechner für ein rechtwinkliges Dreieck"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "Rechner für die Fläche eines rechtwinkligen Dreiecks"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "Rechner für den Umfang eines rechtwinkligen Dreiecks"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Rechner für die Hypotenuse eines rechtwinkligen Dreiecks"
        }
      ],
      "faqs": [
        {
          "question": "Was ist ein 45 45 90-Dreiecksrechner?",
          "answer": "Dabei handelt es sich um ein spezielles Werkzeug zum Lösen eines gleichschenkligen rechtwinkligen Dreiecks durch Ermitteln der Hypotenuse, des Schenkels, der Fläche oder des Umfangs basierend auf den festen Seitenverhältnissen."
        },
        {
          "question": "Was ist ein gleichschenkliges rechtwinkliges Dreieck?",
          "answer": "Ein gleichschenkliges rechtwinkliges Dreieck ist ein rechtwinkliges Dreieck, bei dem beide Schenkel gleich lang sind und beide nichtrechten Winkel genau 45 Grad betragen."
        },
        {
          "question": "Wie lautet die Formel für die Hypotenuse eines 45 45 90-Dreiecks?",
          "answer": "Die Formel zum Ermitteln der Hypotenuse lautet c = a × √2, wobei a die Länge eines Kathete ist."
        },
        {
          "question": "Was bedeutet die berechnete Fläche?",
          "answer": "Das Flächenergebnis bezeichnet die Gesamtmenge des flachen Raums, der innerhalb der drei Seiten des Dreiecks enthalten ist."
        },
        {
          "question": "Kann ich das Kathete finden, wenn ich nur die Hypotenuse kenne?",
          "answer": "Ja, Sie können das Kathete leicht finden, indem Sie die Hypotenuse nehmen und sie durch die Quadratwurzel von 2 dividieren."
        },
        {
          "question": "Warum sind die Katheten immer gleich?",
          "answer": "Da die gegenüberliegenden Winkel beide 45 Grad betragen, müssen auch die gegenüberliegenden Seiten dieser Winkel einander gleich sein."
        }
      ],
      "ui": {
        "modeTitle": "Rechnermodus",
        "modeSelectLabel": "Wählen Sie den Rechnermodus",
        "formulaHeading": "Formel",
        "diagramHeading": "Dreiecksdiagramm",
        "howToUseHeading": "So verwenden Sie diesen Rechner",
        "examplesHeading": "Schritt-für-Schritt-Beispiele",
        "resultMeaningHeading": "Was das Ergebnis bedeutet",
        "sideRatioHeading": "Seitenverhältnis",
        "useCasesHeading": "Wann sollte dieser Rechner verwendet werden?",
        "commonMistakesHeading": "Häufige Fehler",
        "relatedHeading": "Verwandte Rechner",
        "faqHeading": "FAQs",
        "faqDescription": "Antworten auf die häufigsten Fragen zur Lösung rechtwinkliger Dreiecke.",
        "diagramAriaLabel45": "45-45-90 Dreiecksdiagramm",
        "diagramAriaLabel30": "30-60-90 Dreiecksdiagramm",
        "calculatorMessages": {
          "positive": "Bitte geben Sie einen positiven Wert ein.",
          "invalid": "Der Eingabewert muss größer als 0 sein."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 Dreiecksrechner",
      "metaTitle": "30 60 90 Dreiecksrechner | Finden Sie das kurze Kathete, das lange Kathete und die Hypotenuse",
      "metaDescription": "Verwenden Sie diesen 30 60 90-Dreiecksrechner, um das kurze Kathete, das lange Kathete, die Hypotenuse, die Fläche und den Umfang mit Formeln und Schritten zu ermitteln.",
      "badge": "Spezieller Rechner für rechtwinklige Dreiecke",
      "parentLabel": "Spezieller Rechner für rechtwinklige Dreiecke",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Finden Sie das lange Kathete vom kurzen Kathete",
          "heading": "Finden Sie das lange Kathete vom kurzen Kathete",
          "calculator": {
            "outputLabel": "Langes Kathete",
            "outputUnit": "Einheiten",
            "fields": [
              {
                "key": "a",
                "label": "Kurzes Kathete a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Finden Sie die Hypotenuse des kurzen Kathete",
          "heading": "Finden Sie die Hypotenuse des kurzen Kathete",
          "calculator": {
            "outputLabel": "Hypotenuse c",
            "outputUnit": "Einheiten",
            "fields": [
              {
                "key": "a",
                "label": "Kurzes Kathete a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Finden Sie das kurze Kathete der Hypotenuse",
          "heading": "Finden Sie das kurze Kathete der Hypotenuse",
          "calculator": {
            "outputLabel": "Kurzes Kathete a",
            "outputUnit": "Einheiten",
            "fields": [
              {
                "key": "c",
                "label": "Hypotenuse c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Finden Sie das kurze Kathete vom langen Kathete",
          "heading": "Finden Sie das kurze Kathete vom langen Kathete",
          "calculator": {
            "outputLabel": "Kurzes Kathete a",
            "outputUnit": "Einheiten",
            "fields": [
              {
                "key": "b",
                "label": "Langes Kathete",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Finden Sie das lange Kathete von der Hypotenuse",
          "heading": "Finden Sie das lange Kathete von der Hypotenuse",
          "calculator": {
            "outputLabel": "Langes Kathete",
            "outputUnit": "Einheiten",
            "fields": [
              {
                "key": "c",
                "label": "Hypotenuse c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Finden Sie den Bereich vom kurzen Kathete",
          "heading": "Finden Sie den Bereich vom kurzen Kathete",
          "calculator": {
            "outputLabel": "Bereich",
            "outputUnit": "Quadratmetereinheiten",
            "fields": [
              {
                "key": "a",
                "label": "Kurzes Kathete a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Finden Sie den Umfang des kurzen Kathete",
          "heading": "Finden Sie den Umfang des kurzen Kathete",
          "calculator": {
            "outputLabel": "Umfang P",
            "outputUnit": "Einheiten",
            "fields": [
              {
                "key": "a",
                "label": "Kurzes Kathete a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Verwenden Sie diesen 30-60-90-Dreiecksrechner, um das kurze Kathete, das lange Kathete, die Hypotenuse, die Fläche und den Umfang mithilfe der genauen 30 60 90-Dreiecksformel und des Verhältnisses einfach zu ermitteln."
      ],
      "calculatorNote": "Alle Eingabewerte müssen größer als 0 sein.",
      "formulaSection": {
        "formulas": [
          "\\text{lange Kathete} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{lange Kathete} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{kurze Kathete} + \\text{lange Kathete} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Schlüssel zum Dreiecksdiagramm",
        "notes": [
          "Der kurze Schenkel a liegt gegenüber dem 30-Grad-Winkel.",
          "Das lange Kathete a√3 liegt gegenüber dem 60-Grad-Winkel.",
          "Die Hypotenuse c ist genau doppelt so lang wie der kurze Schenkel a."
        ]
      },
      "howToUse": [
        "Wählen Sie aus den 30 60 90-Rechnermodi aus, was Sie suchen möchten.",
        "Geben Sie Ihre bekannte Seitenlänge ein (kurze Kathete, lange Kathete oder Hypotenuse).",
        "Stellen Sie sicher, dass die Zahl positiv und größer als Null ist.",
        "Aktivieren Sie das Ergebnisfeld für Ihre perfekt skalierte Antwort von unserem 30 60 90-Dreieckslöser."
      ],
      "example": [
        {
          "title": "Beispiel 1: Finden Sie den langen Schenkel und die Hypotenuse, wenn der kurze Schenkel a = 5 ist.",
          "steps": [
            "\\text{lange Kathete} = a \\times \\sqrt{3}",
            "\\text{lange Kathete} = 5 \\times \\sqrt{3}",
            "\\text{lange Kathete} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Beispiel 2: Finden Sie das kurze Kathete, wenn c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Beispiel 3: Finden Sie das lange Kathete von der Hypotenuse c = 10.",
          "steps": [
            "\\text{lange Kathete} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{lange Kathete} = 5\\sqrt{3}",
            "\\text{lange Kathete} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Die berechneten 30 60 90-Dreiecksseiten zeigen genau, wie lang jeder Teil des Dreiecks sein muss, um die Winkel von 30 und 60 Grad beizubehalten. Sie sind vollkommen proportional.",
        "Die Ergebnisse des 30 60 90 Flächenrechners und des 30 60 90 Umfangsrechners liefern Ihnen die exakte begrenzte 2D-Größe und die Gesamtumrisslänge Ihres Dreiecks."
      ],
      "sideRatio": [
        "Das Standardseitenverhältnis für ein 30 60 90-Dreieck ist a : a√3 : 2a.",
        "Der kurze Schenkel ist a, der lange Schenkel ist a mal die Quadratwurzel aus 3 und die Hypotenuse ist genau das Doppelte des kurzen Schenkels."
      ],
      "useCases": [
        "Überprüfen von trigonometrischen Aufgaben mit speziellen rechtwinkligen Dreiecken als 30 60 90-Rechner für fehlende Seiten.",
        "Bestimmen der Höhe eines gleichseitigen Dreiecks mit dem 30 60 90-Rechner für lange Katheten.",
        "Entwurfswinkel und strukturelle Unterstützungen im Ingenieurwesen oder in der Architektur.",
        "Lösen Sie komplexe Vektorprobleme in der Physik mit dem Hypotenusenrechner 30 60 90."
      ],
      "commonMistakes": [
        "Verwechslung von Kurzbein und Langbein.",
        "Verwendung von √2 anstelle von √3 für die Berechnung der langen Strecke.",
        "Ich denke, die Hypotenuse ist gleich a√3 statt 2a.",
        "Der Wert für das lange Kathete wurde versehentlich als Wert für das kurze Kathete verwendet.",
        "Dabei vergisst man, dass die Hypotenuse genau doppelt so groß ist wie das kurze Kathete."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "spezieller Rechner für rechtwinklige Dreiecke"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 Dreiecksrechner"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Seitenrechner für ein rechtwinkliges Dreieck"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "Rechner für die Fläche eines rechtwinkligen Dreiecks"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "Rechner für den Umfang eines rechtwinkligen Dreiecks"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Rechner für die Hypotenuse eines rechtwinkligen Dreiecks"
        }
      ],
      "faqs": [
        {
          "question": "Wie verwende ich diesen 30 60 90-Dreiecksrechner?",
          "answer": "Wählen Sie einfach den Wert aus, den Sie berechnen möchten, geben Sie die Seite ein, die Sie bereits kennen, und das Tool verwendet das richtige Verhältnis, um die Antwort zu finden."
        },
        {
          "question": "Welche Seite ist das kurze Kathete und welche Seite ist das lange Kathete?",
          "answer": "Das kurze Kathete liegt immer gegenüber dem 30-Grad-Winkel, während das lange Kathete immer gegenüber dem 60-Grad-Winkel liegt."
        },
        {
          "question": "Wie lautet die Formel, um die Hypotenuse des kurzen Kathete zu ermitteln?",
          "answer": "Die Formel lautet c = 2a, was bedeutet, dass die Hypotenuse genau doppelt so lang ist wie die Länge des kurzen Kathete."
        },
        {
          "question": "Was bedeutet das Ergebnis des langen Kathete?",
          "answer": "Das Ergebnis des langen Kathete gibt Ihnen die genaue Höhe oder Basis an, die erforderlich ist, um mit den anderen Seiten übereinzustimmen und gleichzeitig die 30- und 60-Grad-Winkel beizubehalten."
        },
        {
          "question": "Kann ich das kurze Kathete vom langen Kathete unterscheiden?",
          "answer": "Ja, Sie können das kurze Kathete ermitteln, indem Sie das lange Kathete durch die Quadratwurzel von 3 teilen."
        },
        {
          "question": "Warum multiplizieren wir mit der Quadratwurzel von 3?",
          "answer": "Die Multiplikation mit der Quadratwurzel aus 3 ist eine feste geometrische Regel für diesen Dreieckstyp, die den kurzen Schenkel mathematisch mit dem langen Schenkel verknüpft."
        }
      ],
      "ui": {
        "modeTitle": "Rechnermodus",
        "modeSelectLabel": "Wählen Sie den Rechnermodus",
        "formulaHeading": "Formel",
        "diagramHeading": "Dreiecksdiagramm",
        "howToUseHeading": "So verwenden Sie diesen Rechner",
        "examplesHeading": "Schritt-für-Schritt-Beispiele",
        "resultMeaningHeading": "Was das Ergebnis bedeutet",
        "sideRatioHeading": "Seitenverhältnis",
        "useCasesHeading": "Wann sollte dieser Rechner verwendet werden?",
        "commonMistakesHeading": "Häufige Fehler",
        "relatedHeading": "Verwandte Rechner",
        "faqHeading": "FAQs",
        "faqDescription": "Antworten auf die häufigsten Fragen zur Lösung rechtwinkliger Dreiecke.",
        "diagramAriaLabel45": "45-45-90 Dreiecksdiagramm",
        "diagramAriaLabel30": "30-60-90 Dreiecksdiagramm",
        "calculatorMessages": {
          "positive": "Bitte geben Sie einen positiven Wert ein.",
          "invalid": "Der Eingabewert muss größer als 0 sein."
        }
      }
    }
  },
  "it": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 Calcolatrice triangolare",
      "metaTitle": "45 45 90 Calcolatrice triangolare | Trova lati, area e perimetro",
      "metaDescription": "Usa questa calcolatrice triangolare 45 45 90 per trovare l'ipotenusa, il cateto, l'area e il perimetro di un triangolo rettangolo isoscele con formule e passaggi.",
      "badge": "Calcolatrice speciale del triangolo rettangolo",
      "parentLabel": "Calcolatrice speciale del triangolo rettangolo",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Trova l'ipotenusa della gamba",
          "heading": "Trova l'ipotenusa della gamba",
          "calculator": {
            "outputLabel": "Ipotenusa c",
            "outputUnit": "unità",
            "fields": [
              {
                "key": "a",
                "label": "Gamba a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Trova la gamba dall'ipotenusa",
          "heading": "Trova la gamba dall'ipotenusa",
          "calculator": {
            "outputLabel": "Gamba a",
            "outputUnit": "unità",
            "fields": [
              {
                "key": "c",
                "label": "Ipotenusa c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Trova l'area dalla gamba",
          "heading": "Trova l'area dalla gamba",
          "calculator": {
            "outputLabel": "Zona",
            "outputUnit": "unità mq",
            "fields": [
              {
                "key": "a",
                "label": "Gamba a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Trova il perimetro dalla gamba",
          "heading": "Trova il perimetro dalla gamba",
          "calculator": {
            "outputLabel": "Perimetro P",
            "outputUnit": "unità",
            "fields": [
              {
                "key": "a",
                "label": "Gamba a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Utilizza questa calcolatrice del triangolo 45-45-90 per trovare rapidamente l'ipotenusa, il cateto, l'area e il perimetro di qualsiasi triangolo rettangolo isoscele utilizzando le formule e i rapporti standard del triangolo 45 45 90."
      ],
      "calculatorNote": "Tutti i valori di input devono essere maggiori di 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Chiave del diagramma del triangolo",
        "notes": [
          "La gamba a rappresenta i due lati uguali del triangolo rettangolo isoscele.",
          "L'ipotenusa c è il lato più lungo opposto all'angolo 90°.",
          "Entrambi gli angoli acuti misurano esattamente 45 gradi."
        ]
      },
      "howToUse": [
        "Scegli la modalità calcolatrice 45 45 90 in base a ciò che già sai.",
        "Inserisci il valore noto (la gamba o l'ipotenusa).",
        "Assicurati che il tuo input sia maggiore di 0.",
        "Leggi il risultato calcolato direttamente dal campo di output della calcolatrice del triangolo rettangolo isoscele."
      ],
      "example": [
        {
          "title": "Esempio 1: trova l'ipotenusa quando a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Esempio 2: trova la gamba quando c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Esempio 3: Trova l'area quando a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "I risultati che ottieni rappresentano le dimensioni fisiche del tuo triangolo. Una gamba o ipotenusa calcolata è la lunghezza esatta del lato necessaria per mantenere gli angoli di 45 gradi.",
        "L'uso del nostro calcolatore dell'area 45 45 90 e delle funzionalità del calcolatore del perimetro 45 45 90 ti aiuta a comprendere lo spazio 2D totale all'interno del triangolo e la distanza totale attorno ai suoi bordi."
      ],
      "sideRatio": [
        "Il rapporto dei lati per ogni triangolo 45 45 90 è a : a : a√2.",
        "Ciò significa che entrambi i cateti hanno sempre esattamente la stessa lunghezza e l'ipotenusa è sempre la lunghezza dei cateti moltiplicata per la radice quadrata di 2."
      ],
      "useCases": [
        "Risolvere i problemi dei compiti di geometria e trigonometria come calcolatrice del lato mancante 45 45 90.",
        "Calcolo delle dimensioni per costruzioni a base quadrata o tagli diagonali con la formula del triangolo rettangolo isoscele.",
        "Progettazione di griglie isometriche e stesura di angoli standard.",
        "Trovare la distanza più breve lungo una diagonale quadrata utilizzando il calcolatore dell'ipotenusa 45 45 90."
      ],
      "commonMistakes": [
        "Utilizzo dei rapporti 30 60 90 per errore.",
        "Dimenticando che entrambe le gambe sono uguali.",
        "Utilizzando c = 2a invece di c = a × √2.",
        "Dividere per 2 invece di √2 quando si trova la gamba.",
        "Dimenticarsi di squadrare la gamba quando si calcola l'area."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "calcolatrice speciale per il triangolo rettangolo"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "Calcolatrice triangolare 30 60 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "calcolatrice del lato del triangolo rettangolo"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "Calcolatore dell'area del triangolo rettangolo"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "Calcolatore del perimetro del triangolo rettangolo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calcolatore dell'ipotenusa del triangolo rettangolo"
        }
      ],
      "faqs": [
        {
          "question": "Cos'è una calcolatrice triangolare 45 45 90?",
          "answer": "È uno strumento specifico progettato per risolvere un triangolo rettangolo isoscele trovando l'ipotenusa, il cateto, l'area o il perimetro in base ai rapporti dei lati fissi."
        },
        {
          "question": "Cos'è un triangolo rettangolo isoscele?",
          "answer": "Un triangolo rettangolo isoscele è un triangolo rettangolo in cui entrambi i cateti hanno la stessa lunghezza ed entrambi gli angoli non retti misurano esattamente 45 gradi."
        },
        {
          "question": "Qual è la formula per l'ipotenusa di un triangolo 45 45 90?",
          "answer": "La formula per trovare l'ipotenusa è c = a × √2, dove a è la lunghezza di una gamba."
        },
        {
          "question": "Cosa significa l'area calcolata?",
          "answer": "Il risultato dell'area indica la quantità totale di spazio piatto contenuto all'interno dei tre lati del triangolo."
        },
        {
          "question": "Posso trovare il cateto se conosco solo l'ipotenusa?",
          "answer": "Sì, puoi trovare facilmente la gamba prendendo l'ipotenusa e dividendola per la radice quadrata di 2."
        },
        {
          "question": "Perché le gambe sono sempre uguali?",
          "answer": "Poiché gli angoli opposti sono entrambi di 45 gradi, anche i lati opposti a tali angoli devono essere uguali tra loro."
        }
      ],
      "ui": {
        "modeTitle": "Modalità calcolatrice",
        "modeSelectLabel": "Scegli la modalità calcolatrice",
        "formulaHeading": "Formula",
        "diagramHeading": "Diagramma del triangolo",
        "howToUseHeading": "Come utilizzare questa calcolatrice",
        "examplesHeading": "Esempi passo passo",
        "resultMeaningHeading": "Cosa significa il risultato",
        "sideRatioHeading": "Rapporto laterale",
        "useCasesHeading": "Quando utilizzare questa calcolatrice",
        "commonMistakesHeading": "Errori comuni",
        "relatedHeading": "Calcolatori correlati",
        "faqHeading": "Domande frequenti",
        "faqDescription": "Risposte alle domande più comuni sulla risoluzione del triangolo rettangolo.",
        "diagramAriaLabel45": "45-45-90 Diagramma triangolare",
        "diagramAriaLabel30": "30-60-90 Diagramma triangolare",
        "calculatorMessages": {
          "positive": "Inserisci un valore positivo.",
          "invalid": "Il valore di input deve essere maggiore di 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 Calcolatrice triangolare",
      "metaTitle": "30 60 90 Calcolatrice triangolare | Trova Gamba Corta, Gamba Lunga e Ipotenusa",
      "metaDescription": "Usa questa calcolatrice triangolare 30 60 90 per trovare il cateto corto, il cateto lungo, l'ipotenusa, l'area e il perimetro con formule e passaggi.",
      "badge": "Calcolatrice speciale del triangolo rettangolo",
      "parentLabel": "Calcolatrice speciale del triangolo rettangolo",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Trova la gamba lunga dalla gamba corta",
          "heading": "Trova la gamba lunga dalla gamba corta",
          "calculator": {
            "outputLabel": "Gamba lunga",
            "outputUnit": "unità",
            "fields": [
              {
                "key": "a",
                "label": "Gamba corta a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Trova l'ipotenusa dal cateto corto",
          "heading": "Trova l'ipotenusa dal cateto corto",
          "calculator": {
            "outputLabel": "Ipotenusa c",
            "outputUnit": "unità",
            "fields": [
              {
                "key": "a",
                "label": "Gamba corta a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Trova il cateto corto dall'ipotenusa",
          "heading": "Trova il cateto corto dall'ipotenusa",
          "calculator": {
            "outputLabel": "Gamba corta a",
            "outputUnit": "unità",
            "fields": [
              {
                "key": "c",
                "label": "Ipotenusa c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Trova la gamba corta dalla gamba lunga",
          "heading": "Trova la gamba corta dalla gamba lunga",
          "calculator": {
            "outputLabel": "Gamba corta a",
            "outputUnit": "unità",
            "fields": [
              {
                "key": "b",
                "label": "Gamba lunga",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Trova il cateto lungo dall'ipotenusa",
          "heading": "Trova il cateto lungo dall'ipotenusa",
          "calculator": {
            "outputLabel": "Gamba lunga",
            "outputUnit": "unità",
            "fields": [
              {
                "key": "c",
                "label": "Ipotenusa c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Trova l'area dal tratto corto",
          "heading": "Trova l'area dal tratto corto",
          "calculator": {
            "outputLabel": "Zona",
            "outputUnit": "unità mq",
            "fields": [
              {
                "key": "a",
                "label": "Gamba corta a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Trova il perimetro dal cateto corto",
          "heading": "Trova il perimetro dal cateto corto",
          "calculator": {
            "outputLabel": "Perimetro P",
            "outputUnit": "unità",
            "fields": [
              {
                "key": "a",
                "label": "Gamba corta a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Utilizza questo calcolatore del triangolo 30-60-90 per trovare facilmente il cateto corto, il cateto lungo, l'ipotenusa, l'area e il perimetro utilizzando la formula e il rapporto esatti del triangolo 30 60 90."
      ],
      "calculatorNote": "Tutti i valori di input devono essere maggiori di 0.",
      "formulaSection": {
        "formulas": [
          "\\text{cateto maggiore} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{cateto maggiore} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{cateto minore} + \\text{cateto maggiore} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Chiave del diagramma del triangolo",
        "notes": [
          "La gamba corta a è opposta all'angolo di 30 gradi.",
          "La gamba lunga a√3 è opposta all'angolo di 60 gradi.",
          "L'ipotenusa c è esattamente il doppio del cateto corto a."
        ]
      },
      "howToUse": [
        "Seleziona ciò che desideri trovare dalle modalità della calcolatrice 30 60 90.",
        "Inserisci la lunghezza del tuo lato noto (gambo corto, cateto lungo o ipotenusa).",
        "Verificare che il numero sia positivo e maggiore di zero.",
        "Seleziona la casella dei risultati per ottenere la risposta perfettamente in scala dal nostro risolutore di triangoli 30 60 90."
      ],
      "example": [
        {
          "title": "Esempio 1: trova il cateto lungo e l'ipotenusa quando il cateto corto a = 5.",
          "steps": [
            "\\text{cateto maggiore} = a \\times \\sqrt{3}",
            "\\text{cateto maggiore} = 5 \\times \\sqrt{3}",
            "\\text{cateto maggiore} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Esempio 2: Trova la gamba corta quando c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Esempio 3: Trova il cateto lungo dall'ipotenusa c = 10.",
          "steps": [
            "\\text{cateto maggiore} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{cateto maggiore} = 5\\sqrt{3}",
            "\\text{cateto maggiore} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "I lati del triangolo 30 60 90 calcolati mostrano esattamente quanto deve essere lunga ciascuna parte del triangolo per mantenere gli angoli di 30 e 60 gradi. Sono perfettamente proporzionali.",
        "I risultati del calcolatore dell'area 30 60 90 e del calcolatore del perimetro 30 60 90 forniscono l'esatta dimensione 2D delimitata e la lunghezza totale del contorno del triangolo."
      ],
      "sideRatio": [
        "Il rapporto standard dei lati per un triangolo 30 60 90 è a : a√3 : 2a.",
        "Il cateto corto è a, il cateto lungo è a per la radice quadrata di 3 e l'ipotenusa è esattamente il doppio del cateto corto."
      ],
      "useCases": [
        "Controllo delle assegnazioni trigonometriche che coinvolgono triangoli rettangoli speciali come calcolatrice del lato mancante 30 60 90.",
        "Determinare l'altezza di un triangolo equilatero utilizzando il calcolatore della gamba lunga 30 60 90.",
        "Angoli di sformo e supporti strutturali in ingegneria o architettura.",
        "Risolvere problemi vettoriali complessi in fisica con il calcolatore dell'ipotenusa 30 60 90."
      ],
      "commonMistakes": [
        "Mescolando la gamba corta e la gamba lunga.",
        "Utilizzando √2 invece di √3 per il calcolo del tratto lungo.",
        "Pensare che l'ipotenusa sia uguale a a√3 invece di 2a.",
        "Utilizzo accidentale del valore della gamba lunga come gamba corta.",
        "Dimenticando che l'ipotenusa è esattamente il doppio del cateto corto."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "calcolatrice speciale per il triangolo rettangolo"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "Calcolatrice triangolare 45 45 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "calcolatrice del lato del triangolo rettangolo"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "Calcolatore dell'area del triangolo rettangolo"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "Calcolatore del perimetro del triangolo rettangolo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calcolatore dell'ipotenusa del triangolo rettangolo"
        }
      ],
      "faqs": [
        {
          "question": "Come si usa questa calcolatrice triangolare 30 60 90?",
          "answer": "Scegli semplicemente il valore che vuoi calcolare, inserisci il lato che già conosci e lo strumento utilizzerà il rapporto corretto per trovare la risposta."
        },
        {
          "question": "Da che parte sta la gamba corta e quella lunga?",
          "answer": "La gamba corta è sempre opposta all'angolo di 30 gradi, mentre la gamba lunga è sempre opposta all'angolo di 60 gradi."
        },
        {
          "question": "Qual è la formula per trovare l'ipotenusa del cateto corto?",
          "answer": "La formula è c = 2a, ovvero l'ipotenusa è esattamente il doppio della lunghezza del cateto corto."
        },
        {
          "question": "Cosa significa il risultato della gamba lunga?",
          "answer": "Il risultato della gamba lunga indica l'altezza o la base esatta necessaria per abbinare gli altri lati mantenendo intatti gli angoli di 30 e 60 gradi."
        },
        {
          "question": "Posso trovare la gamba corta dalla gamba lunga?",
          "answer": "Sì, puoi trovare la gamba corta dividendo la gamba lunga per la radice quadrata di 3."
        },
        {
          "question": "Perché moltiplichiamo per la radice quadrata di 3?",
          "answer": "Moltiplicare per la radice quadrata di 3 è una regola geometrica fissa per questo tipo di triangolo, che collega matematicamente la gamba corta a quella lunga."
        }
      ],
      "ui": {
        "modeTitle": "Modalità calcolatrice",
        "modeSelectLabel": "Scegli la modalità calcolatrice",
        "formulaHeading": "Formula",
        "diagramHeading": "Diagramma del triangolo",
        "howToUseHeading": "Come utilizzare questa calcolatrice",
        "examplesHeading": "Esempi passo passo",
        "resultMeaningHeading": "Cosa significa il risultato",
        "sideRatioHeading": "Rapporto laterale",
        "useCasesHeading": "Quando utilizzare questa calcolatrice",
        "commonMistakesHeading": "Errori comuni",
        "relatedHeading": "Calcolatori correlati",
        "faqHeading": "Domande frequenti",
        "faqDescription": "Risposte alle domande più comuni sulla risoluzione del triangolo rettangolo.",
        "diagramAriaLabel45": "45-45-90 Diagramma triangolare",
        "diagramAriaLabel30": "30-60-90 Diagramma triangolare",
        "calculatorMessages": {
          "positive": "Inserisci un valore positivo.",
          "invalid": "Il valore di input deve essere maggiore di 0."
        }
      }
    }
  },
  "pt": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "Calculadora Triângulo 45 45 90",
      "metaTitle": "Calculadora Triângulo 45 45 90 | Encontre lados, área e perímetro",
      "metaDescription": "Use esta calculadora de triângulo 45 45 90 para encontrar a hipotenusa, cateto, área e perímetro de um triângulo retângulo isósceles com fórmulas e etapas.",
      "badge": "Calculadora especial de triângulo retângulo",
      "parentLabel": "Calculadora especial de triângulo retângulo",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Encontre a hipotenusa da cateto",
          "heading": "Encontre a hipotenusa da cateto",
          "calculator": {
            "outputLabel": "Hipotenusa c",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Encontre a cateto da hipotenusa",
          "heading": "Encontre a cateto da hipotenusa",
          "calculator": {
            "outputLabel": "Cateto a",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenusa c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Encontre a área da cateto",
          "heading": "Encontre a área da cateto",
          "calculator": {
            "outputLabel": "Área",
            "outputUnit": "unidades quadradas",
            "fields": [
              {
                "key": "a",
                "label": "Cateto a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Encontre o perímetro da cateto",
          "heading": "Encontre o perímetro da cateto",
          "calculator": {
            "outputLabel": "Perímetro P",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Use esta calculadora de triângulo 45-45-90 para encontrar rapidamente a hipotenusa, cateto, área e perímetro de qualquer triângulo retângulo isósceles usando fórmulas e proporções de triângulo 45 45 90 padrão."
      ],
      "calculatorNote": "Todos os valores de entrada devem ser maiores que 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Chave do diagrama triangular",
        "notes": [
          "A cateto a representa os dois lados iguais do triângulo retângulo isósceles.",
          "A hipotenusa c é o lado mais longo oposto ao ângulo 90°.",
          "Ambos os ângulos agudos têm exatamente 45 graus."
        ]
      },
      "howToUse": [
        "Escolha o modo de calculadora 45 45 90 com base no que você já sabe.",
        "Insira o valor conhecido (a cateto ou a hipotenusa).",
        "Certifique-se de que sua entrada seja maior que 0.",
        "Leia o resultado calculado diretamente do campo de saída da calculadora do triângulo retângulo isósceles."
      ],
      "example": [
        {
          "title": "Exemplo 1: Encontre a hipotenusa quando a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Exemplo 2: Encontre a cateto quando c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Exemplo 3: Encontre a área quando a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Os resultados obtidos representam as dimensões físicas do seu triângulo. Uma cateto calculada ou hipotenusa é o comprimento lateral exato necessário para manter os ângulos de 45 graus.",
        "Usar nossa calculadora de área 45 45 90 e os recursos da calculadora de perímetro 45 45 90 ajuda você a entender o espaço 2D total dentro do triângulo e a distância total em torno de suas bordas."
      ],
      "sideRatio": [
        "A proporção lateral para cada triângulo 45 45 90 é a : a : a√2.",
        "Isso significa que ambos os catetos têm sempre exatamente o mesmo comprimento e a hipotenusa é sempre o comprimento do cateto multiplicado pela raiz quadrada de 2."
      ],
      "useCases": [
        "Resolvendo problemas de lição de casa de geometria e trigonometria como uma calculadora de lado ausente 45 45 90.",
        "Cálculo de dimensões para construções quadradas ou cortes diagonais com a fórmula do triângulo retângulo isósceles.",
        "Projetar grades isométricas e desenhar ângulos padrão.",
        "Encontrar a distância mais curta em uma diagonal quadrada usando a calculadora de hipotenusa 45 45 90."
      ],
      "commonMistakes": [
        "Usando proporções 30 60 90 por engano.",
        "Esquecendo que as duas catetos são iguais.",
        "Usando c = 2a em vez de c = a × √2.",
        "Dividindo por 2 em vez de √2 ao encontrar a cateto.",
        "Esquecer de enquadrar a cateto ao calcular a área."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "calculadora especial de triângulo retângulo"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "Calculadora de triângulo 30 60 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "calculadora do lado do triângulo retângulo"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "calculadora de área do triângulo retângulo"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "calculadora de perímetro de triângulo retângulo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "calculadora de hipotenusa de triângulo retângulo"
        }
      ],
      "faqs": [
        {
          "question": "O que é uma calculadora triangular 45 45 90?",
          "answer": "É uma ferramenta específica projetada para resolver um triângulo retângulo isósceles, encontrando a hipotenusa, cateto, área ou perímetro com base nas proporções dos lados fixos."
        },
        {
          "question": "O que é um triângulo retângulo isósceles?",
          "answer": "Um triângulo retângulo isósceles é um triângulo retângulo onde ambos os catetos têm comprimento idêntico e ambos os ângulos não retos têm exatamente 45 graus."
        },
        {
          "question": "Qual é a fórmula da hipotenusa de um triângulo 45 45 90?",
          "answer": "A fórmula para encontrar a hipotenusa é c = a × √2, onde a é o comprimento de uma cateto."
        },
        {
          "question": "O que significa a área calculada?",
          "answer": "O resultado da área significa a quantidade total de espaço plano contido dentro dos três lados do triângulo."
        },
        {
          "question": "Posso encontrar a cateto se conhecer apenas a hipotenusa?",
          "answer": "Sim, você pode encontrar facilmente a cateto pegando a hipotenusa e dividindo-a pela raiz quadrada de 2."
        },
        {
          "question": "Por que as catetos são sempre iguais?",
          "answer": "Como os ângulos opostos têm ambos 45 graus, os lados opostos a esses ângulos também devem ser iguais entre si."
        }
      ],
      "ui": {
        "modeTitle": "Modo Calculadora",
        "modeSelectLabel": "Escolha o modo calculadora",
        "formulaHeading": "Fórmula",
        "diagramHeading": "Diagrama Triângulo",
        "howToUseHeading": "Como usar esta calculadora",
        "examplesHeading": "Exemplos passo a passo",
        "resultMeaningHeading": "O que o resultado significa",
        "sideRatioHeading": "Proporção lateral",
        "useCasesHeading": "Quando usar esta calculadora",
        "commonMistakesHeading": "Erros Comuns",
        "relatedHeading": "Calculadoras Relacionadas",
        "faqHeading": "Perguntas frequentes",
        "faqDescription": "Respostas às perguntas mais comuns sobre resolução de triângulos retângulos.",
        "diagramAriaLabel45": "Diagrama de Triângulo 45-45-90",
        "diagramAriaLabel30": "Diagrama de Triângulo 30-60-90",
        "calculatorMessages": {
          "positive": "Insira um valor positivo.",
          "invalid": "O valor de entrada deve ser maior que 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "Calculadora Triângulo 30 60 90",
      "metaTitle": "Calculadora Triângulo 30 60 90 | Encontre cateto curta, cateto longa e hipotenusa",
      "metaDescription": "Use esta calculadora de triângulo 30 60 90 para encontrar a cateto curta, a cateto longa, a hipotenusa, a área e o perímetro com fórmulas e etapas.",
      "badge": "Calculadora especial de triângulo retângulo",
      "parentLabel": "Calculadora especial de triângulo retângulo",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Encontre a cateto longa da cateto curta",
          "heading": "Encontre a cateto longa da cateto curta",
          "calculator": {
            "outputLabel": "Cateto Longa",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto curta a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Encontre a hipotenusa da cateto curta",
          "heading": "Encontre a hipotenusa da cateto curta",
          "calculator": {
            "outputLabel": "Hipotenusa c",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto curta a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Encontre a cateto curta da hipotenusa",
          "heading": "Encontre a cateto curta da hipotenusa",
          "calculator": {
            "outputLabel": "Cateto curta a",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenusa c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Encontre a cateto curta da cateto longa",
          "heading": "Encontre a cateto curta da cateto longa",
          "calculator": {
            "outputLabel": "Cateto curta a",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "b",
                "label": "Cateto longa",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Encontre a cateto longa da hipotenusa",
          "heading": "Encontre a cateto longa da hipotenusa",
          "calculator": {
            "outputLabel": "Cateto longa",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenusa c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Encontre a área da cateto curta",
          "heading": "Encontre a área da cateto curta",
          "calculator": {
            "outputLabel": "Área",
            "outputUnit": "unidades quadradas",
            "fields": [
              {
                "key": "a",
                "label": "Cateto curta a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Encontre o perímetro da cateto curta",
          "heading": "Encontre o perímetro da cateto curta",
          "calculator": {
            "outputLabel": "Perímetro P",
            "outputUnit": "unidades",
            "fields": [
              {
                "key": "a",
                "label": "Cateto curta a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Use esta calculadora de triângulo 30-60-90 para encontrar facilmente a cateto curta, cateto longa, hipotenusa, área e perímetro usando a fórmula e proporção exatas do triângulo 30 60 90."
      ],
      "calculatorNote": "Todos os valores de entrada devem ser maiores que 0.",
      "formulaSection": {
        "formulas": [
          "\\text{cateto maior} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{cateto maior} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{cateto menor} + \\text{cateto maior} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Chave do diagrama triangular",
        "notes": [
          "A cateto curta a está oposta ao ângulo de 30 graus.",
          "A cateto longa a√3 está oposta ao ângulo de 60 graus.",
          "A hipotenusa c tem exatamente o dobro do comprimento da cateto curta a."
        ]
      },
      "howToUse": [
        "Selecione o que deseja encontrar nos modos de calculadora 30 60 90.",
        "Insira o comprimento lateral conhecido (cateto curta, cateto longa ou hipotenusa).",
        "Verifique se o número é positivo e maior que zero.",
        "Marque a caixa de resultados para obter sua resposta em escala perfeita de nosso solucionador de triângulo 30 60 90."
      ],
      "example": [
        {
          "title": "Exemplo 1: Encontre a cateto longa e a hipotenusa quando a cateto curta a = 5.",
          "steps": [
            "\\text{cateto maior} = a \\times \\sqrt{3}",
            "\\text{cateto maior} = 5 \\times \\sqrt{3}",
            "\\text{cateto maior} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Exemplo 2: Encontre a cateto curta quando c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Exemplo 3: Encontre a cateto longa da hipotenusa c = 10.",
          "steps": [
            "\\text{cateto maior} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{cateto maior} = 5\\sqrt{3}",
            "\\text{cateto maior} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Os lados calculados do triângulo 30 60 90 mostram exatamente quanto comprimento cada parte do triângulo precisa ter para manter os ângulos de 30 e 60 graus. Eles são perfeitamente proporcionais.",
        "Os resultados da calculadora de área 30 60 90 e da calculadora de perímetro 30 60 90 fornecem o tamanho 2D limitado exato e o comprimento total do contorno do seu triângulo."
      ],
      "sideRatio": [
        "A proporção lateral padrão para um triângulo 30 60 90 é a : a√3 : 2a.",
        "O cateto curto é a, o cateto longo é a vezes a raiz quadrada de 3 e a hipotenusa é exatamente o dobro do cateto curto."
      ],
      "useCases": [
        "Verificando atribuições de trigonometria envolvendo triângulos retângulos especiais como uma calculadora de lado faltante 30 60 90.",
        "Determinando a altura de um triângulo equilátero usando a calculadora de cateto longa 30 60 90.",
        "Elaboração de ângulos e suportes estruturais em engenharia ou arquitetura.",
        "Resolvendo problemas vetoriais complexos em física com a calculadora de hipotenusa 30 60 90."
      ],
      "commonMistakes": [
        "Misturando a cateto curta e a cateto longa.",
        "Usando √2 em vez de √3 para o cálculo do trecho longo.",
        "Pensar que a hipotenusa é igual a a√3 em vez de 2a.",
        "Usando o valor da cateto longa como cateto curta por acidente.",
        "Esquecendo que a hipotenusa é exatamente o dobro da cateto curta."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "calculadora especial de triângulo retângulo"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "Calculadora de triângulo 45 45 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "calculadora do lado do triângulo retângulo"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "calculadora de área do triângulo retângulo"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "calculadora de perímetro de triângulo retângulo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "calculadora de hipotenusa de triângulo retângulo"
        }
      ],
      "faqs": [
        {
          "question": "Como faço para usar esta calculadora triangular 30 60 90?",
          "answer": "Basta escolher o valor que deseja calcular, inserir o lado que você já conhece e a ferramenta usará a proporção correta para encontrar a resposta."
        },
        {
          "question": "De que lado está a cateto curta e a cateto longa?",
          "answer": "A cateto curta está sempre oposta ao ângulo de 30 graus, enquanto a cateto longa está sempre oposta ao ângulo de 60 graus."
        },
        {
          "question": "Qual é a fórmula para encontrar a hipotenusa na cateto curta?",
          "answer": "A fórmula é c = 2a, o que significa que a hipotenusa tem exatamente o dobro do comprimento da cateto curta."
        },
        {
          "question": "O que significa o resultado da cateto longa?",
          "answer": "O resultado da cateto longa informa a altura ou base exata necessária para combinar com os outros lados, mantendo intactos os ângulos de 30 e 60 graus."
        },
        {
          "question": "Posso encontrar a cateto curta da cateto longa?",
          "answer": "Sim, você pode encontrar a cateto curta dividindo a cateto longa pela raiz quadrada de 3."
        },
        {
          "question": "Por que multiplicamos pela raiz quadrada de 3?",
          "answer": "Multiplicar pela raiz quadrada de 3 é uma regra geométrica fixa para esse tipo de triângulo, ligando matematicamente a cateto curta à cateto longa."
        }
      ],
      "ui": {
        "modeTitle": "Modo Calculadora",
        "modeSelectLabel": "Escolha o modo calculadora",
        "formulaHeading": "Fórmula",
        "diagramHeading": "Diagrama Triângulo",
        "howToUseHeading": "Como usar esta calculadora",
        "examplesHeading": "Exemplos passo a passo",
        "resultMeaningHeading": "O que o resultado significa",
        "sideRatioHeading": "Proporção lateral",
        "useCasesHeading": "Quando usar esta calculadora",
        "commonMistakesHeading": "Erros Comuns",
        "relatedHeading": "Calculadoras Relacionadas",
        "faqHeading": "Perguntas frequentes",
        "faqDescription": "Respostas às perguntas mais comuns sobre resolução de triângulos retângulos.",
        "diagramAriaLabel45": "Diagrama de Triângulo 45-45-90",
        "diagramAriaLabel30": "Diagrama de Triângulo 30-60-90",
        "calculatorMessages": {
          "positive": "Insira um valor positivo.",
          "invalid": "O valor de entrada deve ser maior que 0."
        }
      }
    }
  },
  "bn": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 ত্রিভুজ ক্যালকুলেটর",
      "metaTitle": "45 45 90 ত্রিভুজ ক্যালকুলেটর | পার্শ্ব, ক্ষেত্রফল এবং পরিধি খুঁজুন",
      "metaDescription": "সূত্র এবং ধাপ সহ একটি সমদ্বিবাহু সমকোণী ত্রিভুজের কর্ণ, পা, ক্ষেত্রফল এবং পরিধি খুঁজে পেতে এই 45 45 90 ত্রিভুজ ক্যালকুলেটর ব্যবহার করুন।",
      "badge": "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর",
      "parentLabel": "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "পা থেকে কর্ণের সন্ধান করুন",
          "heading": "পা থেকে কর্ণের সন্ধান করুন",
          "calculator": {
            "outputLabel": "হাইপোটেনাস c",
            "outputUnit": "ইউনিট",
            "fields": [
              {
                "key": "a",
                "label": "লেগ a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "কর্ণ থেকে পা খুঁজুন",
          "heading": "কর্ণ থেকে পা খুঁজুন",
          "calculator": {
            "outputLabel": "লেগ a",
            "outputUnit": "ইউনিট",
            "fields": [
              {
                "key": "c",
                "label": "হাইপোটেনাস c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "পা থেকে এলাকা খুঁজুন",
          "heading": "পা থেকে এলাকা খুঁজুন",
          "calculator": {
            "outputLabel": "এলাকা",
            "outputUnit": "বর্গ ইউনিট",
            "fields": [
              {
                "key": "a",
                "label": "লেগ a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "পা থেকে ঘের খুঁজুন",
          "heading": "পা থেকে ঘের খুঁজুন",
          "calculator": {
            "outputLabel": "পরিধি P",
            "outputUnit": "ইউনিট",
            "fields": [
              {
                "key": "a",
                "label": "লেগ a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "মান 45 45 90 ত্রিভুজ সূত্র এবং অনুপাত ব্যবহার করে যেকোনো সমদ্বিবাহু সমকোণী ত্রিভুজের কর্ণ, পা, ক্ষেত্রফল এবং পরিধি দ্রুত খুঁজে পেতে এই 45-45-90 ত্রিভুজ ক্যালকুলেটর ব্যবহার করুন।"
      ],
      "calculatorNote": "সমস্ত ইনপুট মান অবশ্যই 0-এর বেশি হতে হবে।",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "ত্রিভুজ ডায়াগ্রাম কী",
        "notes": [
          "লেগ a সমদ্বিবাহু সমকোণী ত্রিভুজের দুটি সমান বাহুকে প্রতিনিধিত্ব করে।",
          "হাইপোটেনাস c হল 90° কোণের বিপরীত দীর্ঘতম দিক।",
          "উভয় তীব্র কোণ ঠিক 45 ডিগ্রী।"
        ]
      },
      "howToUse": [
        "আপনি ইতিমধ্যে যা জানেন তার উপর ভিত্তি করে 45 45 90 ক্যালকুলেটর মোড চয়ন করুন৷",
        "পরিচিত মান লিখুন (হয় পা বা কর্ণ)।",
        "নিশ্চিত করুন যে আপনার ইনপুট 0-এর বেশি।",
        "সমদ্বিবাহু সমকোণী ত্রিভুজ ক্যালকুলেটর আউটপুট ক্ষেত্র থেকে সরাসরি গণনা করা ফলাফল পড়ুন।"
      ],
      "example": [
        {
          "title": "উদাহরণ 1: কর্ণের সন্ধান করুন যখন a = 5।",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "উদাহরণ 2: লেগ খুঁজুন যখন c = 10।",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "উদাহরণ 3: ক্ষেত্রফল খুঁজুন যখন a = 6।",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "আপনি যে ফলাফলগুলি পান তা আপনার ত্রিভুজের ভৌত মাত্রা উপস্থাপন করে। একটি গণনাকৃত পা বা কর্ণ হল 45-ডিগ্রি কোণ বজায় রাখার জন্য প্রয়োজনীয় পার্শ্ব দৈর্ঘ্য।",
        "আমাদের 45 45 90 এলাকা ক্যালকুলেটর এবং 45 45 90 পরিধি ক্যালকুলেটর বৈশিষ্ট্যগুলি ব্যবহার করে আপনাকে ত্রিভুজের ভিতরে মোট 2D স্থান এবং এর প্রান্তগুলির চারপাশে মোট দূরত্ব বুঝতে সাহায্য করে৷"
      ],
      "sideRatio": [
        "প্রতিটি 45 45 90 ত্রিভুজের পাশের অনুপাত হল a : a : a√2।",
        "এর মানে হল উভয় পা সর্বদা ঠিক একই দৈর্ঘ্যের হয় এবং কর্ণ সর্বদা পায়ের দৈর্ঘ্য 2 এর বর্গমূল দ্বারা গুণিত হয়।"
      ],
      "useCases": [
        "একটি 45 45 90 অনুপস্থিত পার্শ্ব ক্যালকুলেটর হিসাবে জ্যামিতি এবং ত্রিকোণমিতি হোমওয়ার্ক সমস্যার সমাধান করা।",
        "সমদ্বিবাহু সমকোণী ত্রিভুজ সূত্রের সাহায্যে বর্গক্ষেত্র-ভিত্তিক নির্মাণ বা তির্যক কাটার জন্য মাত্রা গণনা করা।",
        "আইসোমেট্রিক গ্রিড ডিজাইন করা এবং স্ট্যান্ডার্ড অ্যাঙ্গেল তৈরি করা।",
        "45 45 90 কণিকার ক্যালকুলেটর ব্যবহার করে একটি বর্গ তির্যক জুড়ে সবচেয়ে কম দূরত্ব খুঁজে বের করা।"
      ],
      "commonMistakes": [
        "ভুল করে 30 60 90 অনুপাত ব্যবহার করা।",
        "ভুলে গেলেন যে দুই পা সমান।",
        "c = a × √2 এর পরিবর্তে c = 2a ব্যবহার করা হচ্ছে।",
        "পা খুঁজে বের করার সময় √2 এর পরিবর্তে 2 দিয়ে ভাগ করা।",
        "এলাকা গণনা করার সময় পা বর্গক্ষেত্র করতে ভুলে যাওয়া।"
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 ত্রিভুজ ক্যালকুলেটর"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "ডান ত্রিভুজ পার্শ্ব ক্যালকুলেটর"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "ডান ত্রিভুজ এলাকা ক্যালকুলেটর"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "সমকোণী ত্রিভুজ পরিধি ক্যালকুলেটর"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "সমকোণী ত্রিভুজ কর্ণের ক্যালকুলেটর"
        }
      ],
      "faqs": [
        {
          "question": "একটি 45 45 90 ত্রিভুজ ক্যালকুলেটর কি?",
          "answer": "এটি একটি নির্দিষ্ট টুল যা নির্দিষ্ট পার্শ্ব অনুপাতের উপর ভিত্তি করে কর্ণ, পা, ক্ষেত্রফল বা পরিধি খুঁজে বের করে একটি সমদ্বিবাহু সমকোণী ত্রিভুজ সমাধান করার জন্য ডিজাইন করা হয়েছে।"
        },
        {
          "question": "সমদ্বিবাহু সমকোণী ত্রিভুজ কি?",
          "answer": "একটি সমদ্বিবাহু সমকোণ ত্রিভুজ হল একটি সমকোণী ত্রিভুজ যেখানে উভয় পা দৈর্ঘ্যে অভিন্ন এবং উভয় অ-সমকোণ ঠিক 45 ডিগ্রি।"
        },
        {
          "question": "একটি 45 45 90 ত্রিভুজের কর্ণের সূত্র কী?",
          "answer": "কর্ণ খুঁজে বের করার সূত্র হল c = a × √2, যেখানে a হল এক পায়ের দৈর্ঘ্য।"
        },
        {
          "question": "গণনা করা এলাকা বলতে কী বোঝায়?",
          "answer": "ক্ষেত্রফলের অর্থ হল ত্রিভুজের তিনটি বাহুর ভিতরে থাকা সমতল স্থানের মোট পরিমাণ।"
        },
        {
          "question": "যদি আমি শুধুমাত্র কর্পোটেনাস জানি তবে আমি কি পা খুঁজে পেতে পারি?",
          "answer": "হ্যাঁ, কর্ণকে নিয়ে এবং 2 এর বর্গমূল দিয়ে ভাগ করে আপনি সহজেই পা খুঁজে পেতে পারেন।"
        },
        {
          "question": "পা সবসময় সমান কেন?",
          "answer": "যেহেতু বিপরীত কোণ উভয়ই 45 ডিগ্রি, সেই কোণগুলির বিপরীত বাহুগুলিও একে অপরের সমান হতে হবে।"
        }
      ],
      "ui": {
        "modeTitle": "ক্যালকুলেটর মোড",
        "modeSelectLabel": "ক্যালকুলেটর মোড নির্বাচন করুন",
        "formulaHeading": "সূত্র",
        "diagramHeading": "ত্রিভুজ চিত্র",
        "howToUseHeading": "এই ক্যালকুলেটর কিভাবে ব্যবহার করবেন",
        "examplesHeading": "ধাপে ধাপে উদাহরণ",
        "resultMeaningHeading": "ফলাফল মানে কি",
        "sideRatioHeading": "পার্শ্ব অনুপাত",
        "useCasesHeading": "এই ক্যালকুলেটর কখন ব্যবহার করবেন",
        "commonMistakesHeading": "সাধারণ ভুল",
        "relatedHeading": "সম্পর্কিত ক্যালকুলেটর",
        "faqHeading": "FAQs",
        "faqDescription": "সবচেয়ে সাধারণ সমকোণী-ত্রিভুজ সমাধানের প্রশ্নের উত্তর।",
        "diagramAriaLabel45": "45-45-90 ত্রিভুজ চিত্র",
        "diagramAriaLabel30": "30-60-90 ত্রিভুজ চিত্র",
        "calculatorMessages": {
          "positive": "অনুগ্রহ করে একটি ইতিবাচক মান লিখুন।",
          "invalid": "ইনপুট মান অবশ্যই 0-এর বেশি হতে হবে।"
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 ত্রিভুজ ক্যালকুলেটর",
      "metaTitle": "30 60 90 ত্রিভুজ ক্যালকুলেটর | শর্ট লেগ, লং লেগ এবং হাইপোটেনাস খুঁজুন",
      "metaDescription": "এই 30 60 90 ত্রিভুজ ক্যালকুলেটরটি ব্যবহার করুন ছোট পা, লম্বা পা, কর্ণ, ক্ষেত্রফল, এবং সূত্র এবং ধাপ সহ ঘের।",
      "badge": "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর",
      "parentLabel": "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "ছোট পা থেকে লম্বা পা খুঁজুন",
          "heading": "ছোট পা থেকে লম্বা পা খুঁজুন",
          "calculator": {
            "outputLabel": "লম্বা পা",
            "outputUnit": "ইউনিট",
            "fields": [
              {
                "key": "a",
                "label": "ছোট পা a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "ছোট পা থেকে কর্ণ সন্ধান করুন",
          "heading": "ছোট পা থেকে কর্ণ সন্ধান করুন",
          "calculator": {
            "outputLabel": "হাইপোটেনাস c",
            "outputUnit": "ইউনিট",
            "fields": [
              {
                "key": "a",
                "label": "ছোট পা a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "কর্ণ থেকে ছোট পা খুঁজুন",
          "heading": "কর্ণ থেকে ছোট পা খুঁজুন",
          "calculator": {
            "outputLabel": "ছোট পা a",
            "outputUnit": "ইউনিট",
            "fields": [
              {
                "key": "c",
                "label": "হাইপোটেনাস c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "লম্বা পা থেকে ছোট পা খুঁজুন",
          "heading": "লম্বা পা থেকে ছোট পা খুঁজুন",
          "calculator": {
            "outputLabel": "ছোট পা a",
            "outputUnit": "ইউনিট",
            "fields": [
              {
                "key": "b",
                "label": "লম্বা পা",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "কর্ণ থেকে দীর্ঘ পা খুঁজুন",
          "heading": "কর্ণ থেকে দীর্ঘ পা খুঁজুন",
          "calculator": {
            "outputLabel": "লম্বা পা",
            "outputUnit": "ইউনিট",
            "fields": [
              {
                "key": "c",
                "label": "হাইপোটেনাস c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "ছোট পা থেকে এলাকা খুঁজুন",
          "heading": "ছোট পা থেকে এলাকা খুঁজুন",
          "calculator": {
            "outputLabel": "এলাকা",
            "outputUnit": "বর্গ ইউনিট",
            "fields": [
              {
                "key": "a",
                "label": "ছোট পা a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "ছোট পা থেকে ঘের খুঁজুন",
          "heading": "ছোট পা থেকে ঘের খুঁজুন",
          "calculator": {
            "outputLabel": "পরিধি P",
            "outputUnit": "ইউনিট",
            "fields": [
              {
                "key": "a",
                "label": "ছোট পা a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "সঠিক 30 60 90 ত্রিভুজ সূত্র এবং অনুপাত ব্যবহার করে সহজে ছোট পা, লম্বা পা, কর্ণ, ক্ষেত্রফল এবং পরিধি খুঁজে পেতে এই 30-60-90 ত্রিভুজ ক্যালকুলেটর ব্যবহার করুন।"
      ],
      "calculatorNote": "সমস্ত ইনপুট মান অবশ্যই 0-এর বেশি হতে হবে।",
      "formulaSection": {
        "formulas": [
          "\\text{দীর্ঘ বাহু} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{দীর্ঘ বাহু} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{খাটো বাহু} + \\text{দীর্ঘ বাহু} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "ত্রিভুজ ডায়াগ্রাম কী",
        "notes": [
          "ছোট পা a 30-ডিগ্রি কোণের বিপরীতে।",
          "লম্বা পা a√3 60-ডিগ্রি কোণের বিপরীতে।",
          "হাইপোটেনাস c ছোট পায়ের দৈর্ঘ্য a এর ঠিক দ্বিগুণ।"
        ]
      },
      "howToUse": [
        "30 60 90 ক্যালকুলেটর মোডগুলি থেকে আপনি যা খুঁজে পেতে চান তা নির্বাচন করুন৷",
        "আপনার পরিচিত পার্শ্ব দৈর্ঘ্য লিখুন (ছোট পা, লম্বা পা, বা কর্ণ)।",
        "সংখ্যাটি ধনাত্মক এবং শূন্যের চেয়ে বড় যাচাই করুন।",
        "আমাদের 30 60 90 ত্রিভুজ সমাধানকারী থেকে আপনার নিখুঁতভাবে স্কেল করা উত্তরের জন্য ফলাফল বাক্সে চেক করুন।"
      ],
      "example": [
        {
          "title": "উদাহরণ 1: ছোট পা a = 5 হলে লং লেগ এবং হাইপোটেনাস খুঁজুন।",
          "steps": [
            "\\text{দীর্ঘ বাহু} = a \\times \\sqrt{3}",
            "\\text{দীর্ঘ বাহু} = 5 \\times \\sqrt{3}",
            "\\text{দীর্ঘ বাহু} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "উদাহরণ 2: ছোট পা খুঁজুন যখন c = 14।",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "উদাহরণ 3: হাইপোটেনাস c = 10 থেকে লম্বা পা খুঁজুন।",
          "steps": [
            "\\text{দীর্ঘ বাহু} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{দীর্ঘ বাহু} = 5\\sqrt{3}",
            "\\text{দীর্ঘ বাহু} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "গণনাকৃত 30 60 90 ত্রিভুজ বাহুগুলি দেখায় যে ত্রিভুজের প্রতিটি অংশকে 30 এবং 60 ডিগ্রি কোণ বজায় রাখতে ঠিক কতক্ষণ থাকতে হবে। তারা পুরোপুরি সমানুপাতিক।",
        "30 60 90 এলাকা ক্যালকুলেটর এবং 30 60 90 পরিধি ক্যালকুলেটরের ফলাফল আপনাকে সঠিক আবদ্ধ 2D আকার এবং আপনার ত্রিভুজের মোট রূপরেখা দৈর্ঘ্য দেয়।"
      ],
      "sideRatio": [
        "একটি 30 60 90 ত্রিভুজের আদর্শ পার্শ্ব অনুপাত হল a : a√3 : 2a।",
        "ছোট পা হল a, লম্বা পা হল 3 এর বর্গমূলের একটি গুণ এবং কর্ণটি ছোট পায়ের ঠিক দ্বিগুণ।"
      ],
      "useCases": [
        "30 60 90 অনুপস্থিত পার্শ্ব ক্যালকুলেটর হিসাবে বিশেষ সমকোণী ত্রিভুজ জড়িত ত্রিকোণমিতি অ্যাসাইনমেন্ট পরীক্ষা করা হচ্ছে।",
        "30 60 90 দীর্ঘ পা ক্যালকুলেটর ব্যবহার করে একটি সমবাহু ত্রিভুজের উচ্চতা নির্ণয় করা।",
        "প্রকৌশল বা স্থাপত্যে খসড়া কোণ এবং কাঠামোগত সমর্থন।",
        "30 60 90 হাইপোটেনাস ক্যালকুলেটর দিয়ে পদার্থবিদ্যার জটিল ভেক্টর সমস্যার সমাধান করা।"
      ],
      "commonMistakes": [
        "ছোট পা এবং দীর্ঘ পা মিশ্রিত করা।",
        "দীর্ঘ পায়ের গণনার জন্য √3 এর পরিবর্তে √2 ব্যবহার করুন।",
        "কর্ণকে 2a-এর পরিবর্তে a√3 সমান মনে করা।",
        "দুর্ঘটনাক্রমে ছোট পা হিসাবে দীর্ঘ পায়ের মান ব্যবহার করা।",
        "ভুলে যাওয়া যে কর্ণটি ছোট পায়ের ঠিক দ্বিগুণ।"
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 ত্রিভুজ ক্যালকুলেটর"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "ডান ত্রিভুজ পার্শ্ব ক্যালকুলেটর"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "ডান ত্রিভুজ এলাকা ক্যালকুলেটর"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "সমকোণী ত্রিভুজ পরিধি ক্যালকুলেটর"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "সমকোণী ত্রিভুজ কর্ণের ক্যালকুলেটর"
        }
      ],
      "faqs": [
        {
          "question": "আমি কিভাবে এই 30 60 90 ত্রিভুজ ক্যালকুলেটর ব্যবহার করব?",
          "answer": "আপনি যে মানটি গণনা করতে চান তা কেবল চয়ন করুন, আপনি ইতিমধ্যেই জানেন এমন দিকটি লিখুন এবং উত্তরটি খুঁজে পেতে টুলটি সঠিক অনুপাত ব্যবহার করবে।"
        },
        {
          "question": "ছোট পা কোন দিকে এবং লম্বা পা কোন দিকে?",
          "answer": "ছোট পা সবসময় 30-ডিগ্রি কোণের বিপরীতে থাকে, আর লম্বা পা সবসময় 60-ডিগ্রি কোণের বিপরীতে থাকে।"
        },
        {
          "question": "ছোট পা থেকে কর্ণ বের করার সূত্র কি?",
          "answer": "সূত্রটি হল c = 2a, যার অর্থ কর্ণটি ছোট পায়ের দৈর্ঘ্যের ঠিক দ্বিগুণ।"
        },
        {
          "question": "লম্বা পায়ের ফলাফল মানে কি?",
          "answer": "লম্বা পায়ের ফলাফল আপনাকে 30 এবং 60 ডিগ্রী কোণগুলি অক্ষত রেখে অন্য দিকের সাথে মেলে সঠিক উচ্চতা বা ভিত্তির কথা বলে।"
        },
        {
          "question": "আমি কি লম্বা পা থেকে ছোট পা খুঁজে পেতে পারি?",
          "answer": "হ্যাঁ, লম্বা পাকে 3 এর বর্গমূল দিয়ে ভাগ করে আপনি ছোট পা খুঁজে পেতে পারেন।"
        },
        {
          "question": "কেন আমরা 3 এর বর্গমূল দিয়ে গুণ করব?",
          "answer": "3 এর বর্গমূল দ্বারা গুণ করা এই ত্রিভুজ প্রকারের জন্য একটি নির্দিষ্ট জ্যামিতিক নিয়ম, ছোট পাকে গাণিতিকভাবে লম্বা পায়ের সাথে সংযুক্ত করে।"
        }
      ],
      "ui": {
        "modeTitle": "ক্যালকুলেটর মোড",
        "modeSelectLabel": "ক্যালকুলেটর মোড নির্বাচন করুন",
        "formulaHeading": "সূত্র",
        "diagramHeading": "ত্রিভুজ চিত্র",
        "howToUseHeading": "এই ক্যালকুলেটর কিভাবে ব্যবহার করবেন",
        "examplesHeading": "ধাপে ধাপে উদাহরণ",
        "resultMeaningHeading": "ফলাফল মানে কি",
        "sideRatioHeading": "পার্শ্ব অনুপাত",
        "useCasesHeading": "এই ক্যালকুলেটর কখন ব্যবহার করবেন",
        "commonMistakesHeading": "সাধারণ ভুল",
        "relatedHeading": "সম্পর্কিত ক্যালকুলেটর",
        "faqHeading": "FAQs",
        "faqDescription": "সবচেয়ে সাধারণ সমকোণী-ত্রিভুজ সমাধানের প্রশ্নের উত্তর।",
        "diagramAriaLabel45": "45-45-90 ত্রিভুজ চিত্র",
        "diagramAriaLabel30": "30-60-90 ত্রিভুজ চিত্র",
        "calculatorMessages": {
          "positive": "অনুগ্রহ করে একটি ইতিবাচক মান লিখুন।",
          "invalid": "ইনপুট মান অবশ্যই 0-এর বেশি হতে হবে।"
        }
      }
    }
  },
  "ja": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 三角形計算機",
      "metaTitle": "45 45 90 三角形計算機 |辺、面積、周長を求める",
      "metaDescription": "この 45 45 90 三角形計算機を使用して、数式と手順を使用して直角二等辺三角形の斜辺、脚、面積、周囲長を求めます。",
      "badge": "特殊直角三角形計算機",
      "parentLabel": "特殊直角三角形計算機",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "脚から斜辺を求める",
          "heading": "脚から斜辺を求める",
          "calculator": {
            "outputLabel": "斜辺 c",
            "outputUnit": "単位",
            "fields": [
              {
                "key": "a",
                "label": "脚 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "斜辺から脚を見つける",
          "heading": "斜辺から脚を見つける",
          "calculator": {
            "outputLabel": "脚 a",
            "outputUnit": "単位",
            "fields": [
              {
                "key": "c",
                "label": "斜辺 c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "脚から面積を求める",
          "heading": "脚から面積を求める",
          "calculator": {
            "outputLabel": "エリア",
            "outputUnit": "平方単位",
            "fields": [
              {
                "key": "a",
                "label": "脚 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "脚から周囲を求める",
          "heading": "脚から周囲を求める",
          "calculator": {
            "outputLabel": "周囲 P",
            "outputUnit": "単位",
            "fields": [
              {
                "key": "a",
                "label": "脚 a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "この 45-45-90 三角形計算ツールを使用すると、標準の 45 45 90 三角形の公式と比率を使用して、直角二等辺三角形の斜辺、脚、面積、周囲長をすばやく見つけることができます。"
      ],
      "calculatorNote": "すべての入力値は 0 より大きくなければなりません。",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "三角図のキー",
        "notes": [
          "脚 a は、直角二等辺三角形の 2 つの等しい辺を表します。",
          "斜辺 c は、90° 角度の反対側の最長の辺です。",
          "両方の鋭角はちょうど 45 度です。"
        ]
      },
      "howToUse": [
        "すでに知っていることに基づいて、45 45 90 計算モードを選択します。",
        "既知の値 (脚または斜辺のいずれか) を入力します。",
        "入力値が 0 より大きいことを確認してください。",
        "直角二等辺三角形計算機の出力フィールドから計算結果を直接読み取ります。"
      ],
      "example": [
        {
          "title": "例 1: a = 5 の場合の斜辺を求めます。",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "例 2: c = 10 の場合の脚を検索します。",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "例 3: a = 6 の場合の面積を求めます。",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "得られる結果は、三角形の物理的な寸法を表します。計算された脚または斜辺は、45 度の角度を維持するために必要な正確な辺の長さです。",
        "45 45 90 面積計算機能と 45 45 90 周囲長計算機能を使用すると、三角形内の合計 2D 空間とそのエッジ周囲の合計距離を理解するのに役立ちます。"
      ],
      "sideRatio": [
        "すべての 45 45 90 三角形の辺の比率は a : a : a√2 です。",
        "これは、両方の脚が常にまったく同じ長さであり、斜辺は常に脚の長さに 2 の平方根を掛けたものであることを意味します。"
      ],
      "useCases": [
        "45 45 90 欠損辺計算機として、幾何学と三角法の宿題問題を解決します。",
        "直角二等辺三角形の公式を使用して、正方形ベースの構造または斜めのカットの寸法を計算します。",
        "等角グリッドを設計し、標準角度を製図します。",
        "45 45 90 斜辺計算機を使用して、正方形の対角線を横切る最短距離を見つけます。"
      ],
      "commonMistakes": [
        "誤って 30 60 90 比率を使用しました。",
        "両足が等しいことを忘れています。",
        "c = a × √2 の代わりに c = 2a を使用します。",
        "脚を見つけるときに、√2 の代わりに 2 で除算します。",
        "面積を計算するときに脚の二乗を忘れます。"
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "特別な直角三角形計算機"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 三角関数電卓"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形辺計算機"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "直角三角形の面積計算機"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "直角三角形の周囲長計算機"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "直角三角形斜辺計算機"
        }
      ],
      "faqs": [
        {
          "question": "45 45 90 三角関数電卓とは何ですか?",
          "answer": "これは、固定された辺の比率に基づいて斜辺、脚、面積、または周囲長を見つけることによって直角二等辺三角形を解くように設計された特別なツールです。"
        },
        {
          "question": "直角二等辺三角形とは何ですか?",
          "answer": "直角二等辺三角形は、両方の脚の長さが同じで、直角でない両方の角がちょうど 45 度である直角三角形です。"
        },
        {
          "question": "45 45 90 三角形の斜辺の公式は何ですか?",
          "answer": "斜辺を求める公式は c = a × √2 です。ここで、a は 1 つの脚の長さです。"
        },
        {
          "question": "計算された面積は何を意味しますか?",
          "answer": "面積の結果は、三角形の 3 つの辺の内側に含まれる平らな空間の合計量を意味します。"
        },
        {
          "question": "斜辺だけがわかっていれば脚を見つけることができますか?",
          "answer": "はい、斜辺を 2 の平方根で割ると、脚を簡単に見つけることができます。"
        },
        {
          "question": "なぜ足は常に等しいのですか？",
          "answer": "対角は両方とも 45 度であるため、これらの角度の対辺も互いに等しくなければなりません。"
        }
      ],
      "ui": {
        "modeTitle": "電卓モード",
        "modeSelectLabel": "電卓モードを選択してください",
        "formulaHeading": "計算式",
        "diagramHeading": "三角図",
        "howToUseHeading": "この計算機の使い方",
        "examplesHeading": "段階的な例",
        "resultMeaningHeading": "結果が意味するもの",
        "sideRatioHeading": "側面比",
        "useCasesHeading": "この計算ツールを使用する場合",
        "commonMistakesHeading": "よくある間違い",
        "relatedHeading": "関連する電卓",
        "faqHeading": "よくある質問",
        "faqDescription": "直角三角形を解く最も一般的な質問への答え。",
        "diagramAriaLabel45": "45-45-90 三角図",
        "diagramAriaLabel30": "30-60-90 三角図",
        "calculatorMessages": {
          "positive": "正の値を入力してください。",
          "invalid": "入力値は 0 より大きくなければなりません。"
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 三角形計算機",
      "metaTitle": "30 60 90 三角形計算機 |短脚、長脚、斜辺を見つける",
      "metaDescription": "この 30 60 90 三角形計算機を使用して、公式とステップを使用して短脚、長脚、斜辺、面積、周長を求めます。",
      "badge": "特殊直角三角形計算機",
      "parentLabel": "特殊直角三角形計算機",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "短い脚から長い脚を見つける",
          "heading": "短い脚から長い脚を見つける",
          "calculator": {
            "outputLabel": "長い脚",
            "outputUnit": "単位",
            "fields": [
              {
                "key": "a",
                "label": "ショートレッグ a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "短脚から斜辺を求める",
          "heading": "短脚から斜辺を求める",
          "calculator": {
            "outputLabel": "斜辺 c",
            "outputUnit": "単位",
            "fields": [
              {
                "key": "a",
                "label": "ショートレッグ a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "斜辺から短い脚を見つける",
          "heading": "斜辺から短い脚を見つける",
          "calculator": {
            "outputLabel": "ショートレッグ a",
            "outputUnit": "単位",
            "fields": [
              {
                "key": "c",
                "label": "斜辺 c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "長い脚から短い脚を見つける",
          "heading": "長い脚から短い脚を見つける",
          "calculator": {
            "outputLabel": "ショートレッグ a",
            "outputUnit": "単位",
            "fields": [
              {
                "key": "b",
                "label": "長い脚",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "斜辺から長い脚を見つける",
          "heading": "斜辺から長い脚を見つける",
          "calculator": {
            "outputLabel": "長い脚",
            "outputUnit": "単位",
            "fields": [
              {
                "key": "c",
                "label": "斜辺 c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "短足から領域を求める",
          "heading": "短足から領域を求める",
          "calculator": {
            "outputLabel": "エリア",
            "outputUnit": "平方単位",
            "fields": [
              {
                "key": "a",
                "label": "ショートレッグ a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "短脚から周囲を求める",
          "heading": "短脚から周囲を求める",
          "calculator": {
            "outputLabel": "周囲 P",
            "outputUnit": "単位",
            "fields": [
              {
                "key": "a",
                "label": "ショートレッグ a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "この 30-60-90 三角形計算機を使用すると、正確な 30 60 90 三角形の公式と比率を使用して、短脚、長脚、斜辺、面積、周囲長を簡単に見つけることができます。"
      ],
      "calculatorNote": "すべての入力値は 0 より大きくなければなりません。",
      "formulaSection": {
        "formulas": [
          "\\text{長い脚} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{長い脚} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{短い脚} + \\text{長い脚} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "三角図のキー",
        "notes": [
          "短い脚 a は 30 度の角度の反対側です。",
          "長い脚 a√3 は 60 度の角度の反対側です。",
          "斜辺 c は短脚 a の長さのちょうど 2 倍です。"
        ]
      },
      "howToUse": [
        "30 60 90 計算モードから求めたい値を選択します。",
        "既知の辺の長さ (短脚、長脚、または斜辺) を入力します。",
        "数値が正でゼロより大きいことを確認してください。",
        "30 60 90 三角ソルバーからの完全にスケール化された答えについては、結果ボックスをチェックしてください。"
      ],
      "example": [
        {
          "title": "例 1: 短脚 a = 5 の場合、長脚と斜辺を求めます。",
          "steps": [
            "\\text{長い脚} = a \\times \\sqrt{3}",
            "\\text{長い脚} = 5 \\times \\sqrt{3}",
            "\\text{長い脚} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "例 2: c = 14 の場合に短い脚を見つけます。",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "例 3: 斜辺 c = 10 から長い脚を求めます。",
          "steps": [
            "\\text{長い脚} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{長い脚} = 5\\sqrt{3}",
            "\\text{長い脚} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "計算された 30 60 90 三角形の辺は、30 度および 60 度の角度を維持するために三角形の各部分がどれくらいの長さが必要かを正確に示します。それらは完全に比例しています。",
        "30 60 90 面積計算機と 30 60 90 周囲長計算機の結果から、三角形の正確な境界 2D サイズとアウトラインの合計長さがわかります。"
      ],
      "sideRatio": [
        "30 60 90 三角形の標準の辺の比率は a : a√3 : 2a です。",
        "短い脚は a、長い脚は 3 の平方根の a 倍、斜辺は短い脚のちょうど 2 倍です。"
      ],
      "useCases": [
        "30 60 90 欠損辺計算機として、特殊な直角三角形を含む三角法の割り当てをチェックします。",
        "30 60 90 脚長計算機を使用して正三角形の高さを決定します。",
        "エンジニアリングまたは建築における製図角度および構造サポート。",
        "30 60 90 斜辺計算機を使用して、物理学の複雑なベクトル問題を解決します。"
      ],
      "commonMistakes": [
        "短い足と長い足を混ぜ合わせます。",
        "ロングレッグの計算には、√3 の代わりに √2 を使用します。",
        "斜辺が 2a ではなく a√3 に等しいと考えます。",
        "長い脚の値を誤って短い脚として使用します。",
        "斜辺が短脚のちょうど 2 倍であることを忘れています。"
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "特別な直角三角形計算機"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 三角関数電卓"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形辺計算機"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "直角三角形の面積計算機"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "直角三角形の周囲長計算機"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "直角三角形斜辺計算機"
        }
      ],
      "faqs": [
        {
          "question": "この 30 60 90 三角形計算機の使用方法を教えてください。",
          "answer": "計算したい値を選択し、既知の辺を入力するだけで、ツールは正しい比率を使用して答えを見つけます。"
        },
        {
          "question": "足が短くて足が長いのはどっちですか？",
          "answer": "短い脚は常に 30 度の角度の反対側にあり、長い脚は常に 60 度の角度の反対側にあります。"
        },
        {
          "question": "短脚から斜辺を求める公式は何ですか?",
          "answer": "式は c = 2a で、斜辺が短脚の長さのちょうど 2 倍であることを意味します。"
        },
        {
          "question": "脚が長いという結果は何を意味するのでしょうか？",
          "answer": "長い脚の結果から、30 度および 60 度の角度を維持しながら他の側面と一致させるために必要な正確な高さまたは底辺がわかります。"
        },
        {
          "question": "長い足から短い足を見つけることができますか?",
          "answer": "はい、長い脚を 3 の平方根で割ることで短い脚を見つけることができます。"
        },
        {
          "question": "なぜ 3 の平方根を掛けるのでしょうか?",
          "answer": "3 の平方根を掛けることは、この三角形タイプの固定幾何学的規則であり、短い脚を長い脚に数学的に結び付けます。"
        }
      ],
      "ui": {
        "modeTitle": "電卓モード",
        "modeSelectLabel": "電卓モードを選択してください",
        "formulaHeading": "計算式",
        "diagramHeading": "三角図",
        "howToUseHeading": "この計算機の使い方",
        "examplesHeading": "段階的な例",
        "resultMeaningHeading": "結果が意味するもの",
        "sideRatioHeading": "側面比",
        "useCasesHeading": "この計算ツールを使用する場合",
        "commonMistakesHeading": "よくある間違い",
        "relatedHeading": "関連する電卓",
        "faqHeading": "よくある質問",
        "faqDescription": "直角三角形を解く最も一般的な質問への答え。",
        "diagramAriaLabel45": "45-45-90 三角図",
        "diagramAriaLabel30": "30-60-90 三角図",
        "calculatorMessages": {
          "positive": "正の値を入力してください。",
          "invalid": "入力値は 0 より大きくなければなりません。"
        }
      }
    }
  },
  "ko": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 삼각형 계산기",
      "metaTitle": "45 45 90 삼각형 계산기 | 변, 넓이, 둘레 구하기",
      "metaDescription": "이 45 45 90 삼각형 계산기를 사용하여 수식과 단계를 사용하여 이등변 직각삼각형의 빗변, 다리, 면적 및 둘레를 구하세요.",
      "badge": "특수 직각삼각형 계산기",
      "parentLabel": "특수 직각삼각형 계산기",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "다리에서 빗변 찾기",
          "heading": "다리에서 빗변 찾기",
          "calculator": {
            "outputLabel": "빗변 c",
            "outputUnit": "단위",
            "fields": [
              {
                "key": "a",
                "label": "다리 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "빗변에서 다리 찾기",
          "heading": "빗변에서 다리 찾기",
          "calculator": {
            "outputLabel": "다리 a",
            "outputUnit": "단위",
            "fields": [
              {
                "key": "c",
                "label": "빗변 c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "다리에서 면적 찾기",
          "heading": "다리에서 면적 찾기",
          "calculator": {
            "outputLabel": "면적",
            "outputUnit": "평방 단위",
            "fields": [
              {
                "key": "a",
                "label": "다리 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "다리에서 둘레 찾기",
          "heading": "다리에서 둘레 찾기",
          "calculator": {
            "outputLabel": "둘레 P",
            "outputUnit": "단위",
            "fields": [
              {
                "key": "a",
                "label": "다리 a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "이 45-45-90 삼각형 계산기를 사용하면 표준 45 45 90 삼각형 공식과 비율을 사용하여 이등변 직각삼각형의 빗변, 다리, 면적 및 둘레를 빠르게 찾을 수 있습니다."
      ],
      "calculatorNote": "모든 입력 값은 0보다 커야 합니다.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "삼각형 다이어그램 키",
        "notes": [
          "다리 a는 이등변 직각 삼각형의 동일한 두 변을 나타냅니다.",
          "빗변 c는 90° 각도 반대편의 가장 긴 변입니다.",
          "두 예각은 모두 정확히 45도입니다."
        ]
      },
      "howToUse": [
        "이미 알고 있는 내용을 바탕으로 45 45 90 계산기 모드를 선택하세요.",
        "알려진 값(다리 또는 빗변)을 입력합니다.",
        "입력값이 0보다 큰지 확인하세요.",
        "이등변 직각삼각형 계산기 출력 필드에서 직접 계산된 결과를 읽습니다."
      ],
      "example": [
        {
          "title": "예 1: a = 5일 때 빗변을 구합니다.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "예 2: c = 10일 때 다리를 찾습니다.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "예 3: a = 6일 때 면적을 찾습니다.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "얻은 결과는 삼각형의 물리적 치수를 나타냅니다. 계산된 다리 또는 빗변은 45도 각도를 유지하는 데 필요한 정확한 변 길이입니다.",
        "45 45 90 면적 계산기 및 45 45 90 둘레 계산기 기능을 사용하면 삼각형 내부의 전체 2D 공간과 가장자리 주변의 전체 거리를 이해하는 데 도움이 됩니다."
      ],
      "sideRatio": [
        "모든 45 45 90 삼각형의 변 비율은 a : a : a√2입니다.",
        "즉, 두 다리의 길이는 항상 정확히 같고, 빗변은 항상 다리 길이에 루트 2를 곱한 값이 됩니다."
      ],
      "useCases": [
        "45 45 90 누락된 측 계산기로 기하학 및 삼각법 숙제 문제를 해결합니다.",
        "이등변 직각 삼각형 공식을 사용하여 정사각형 기반 구조 또는 대각선 절단의 치수를 계산합니다.",
        "등각투영 그리드를 설계하고 표준 각도를 제도합니다.",
        "45 45 90 빗변 계산기를 사용하여 정사각형 대각선의 최단 거리를 찾습니다."
      ],
      "commonMistakes": [
        "실수로 30 60 90 비율을 사용하는 것.",
        "양쪽 다리가 같다는 사실을 잊어버린 거죠.",
        "c = a × √2 대신 c = 2a를 사용하는 것.",
        "다리를 찾을 때 √2 대신 2로 나눕니다.",
        "면적을 계산할 때 다리를 제곱하는 것을 잊어버렸습니다."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "특수 직각삼각형 계산기"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 삼각형 계산기"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "직각삼각형변 계산기"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "직각삼각형 면적 계산기"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "직각 삼각형 둘레 계산기"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "직각삼각형 빗변 계산기"
        }
      ],
      "faqs": [
        {
          "question": "45 45 90 삼각형 계산기란 무엇인가요?",
          "answer": "고정된 변의 비율을 기준으로 빗변, 다리, 넓이, 둘레를 찾아 이등변 직각삼각형을 풀도록 설계된 특정 도구입니다."
        },
        {
          "question": "이등변 직각 삼각형이란 무엇입니까?",
          "answer": "이등변 직각삼각형은 두 다리의 길이가 동일하고 두 직각이 아닌 각이 정확히 45도인 직각삼각형입니다."
        },
        {
          "question": "45 45 90 삼각형의 빗변 공식은 무엇입니까?",
          "answer": "빗변을 구하는 공식은 c = a × √2이며, 여기서 a는 한쪽 다리의 길이입니다."
        },
        {
          "question": "계산된 면적은 무엇을 의미하나요?",
          "answer": "면적 결과는 삼각형의 세 변 내부에 포함된 평평한 공간의 총량을 의미합니다."
        },
        {
          "question": "빗변만 알면 다리를 찾을 수 있나요?",
          "answer": "예, 빗변을 구하고 이를 2의 제곱근으로 나누면 다리를 쉽게 찾을 수 있습니다."
        },
        {
          "question": "다리는 왜 항상 똑같나요?",
          "answer": "반대 각도가 모두 45도이므로 해당 각도의 반대쪽 변도 서로 같아야 합니다."
        }
      ],
      "ui": {
        "modeTitle": "계산기 모드",
        "modeSelectLabel": "계산기 모드 선택",
        "formulaHeading": "공식",
        "diagramHeading": "삼각형 다이어그램",
        "howToUseHeading": "이 계산기를 사용하는 방법",
        "examplesHeading": "단계별 예",
        "resultMeaningHeading": "결과의 의미",
        "sideRatioHeading": "측면 비율",
        "useCasesHeading": "이 계산기를 사용하는 경우",
        "commonMistakesHeading": "일반적인 실수",
        "relatedHeading": "관련 계산기",
        "faqHeading": "자주 묻는 질문",
        "faqDescription": "가장 일반적인 직각삼각형 풀이 질문에 대한 답변입니다.",
        "diagramAriaLabel45": "45-45-90 삼각형 도표",
        "diagramAriaLabel30": "30-60-90 삼각형 도표",
        "calculatorMessages": {
          "positive": "양수 값을 입력하세요.",
          "invalid": "입력 값은 0보다 커야 합니다."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 삼각형 계산기",
      "metaTitle": "30 60 90 삼각형 계산기 | 짧은 변, 긴 변, 빗변 구하기",
      "metaDescription": "이 30 60 90 삼각형 계산기를 사용하여 수식과 단계를 사용하여 짧은 다리, 긴 다리, 빗변, 면적 및 둘레를 찾습니다.",
      "badge": "특수 직각삼각형 계산기",
      "parentLabel": "특수 직각삼각형 계산기",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "짧은 다리에서 긴 다리 찾기",
          "heading": "짧은 다리에서 긴 다리 찾기",
          "calculator": {
            "outputLabel": "긴 다리",
            "outputUnit": "단위",
            "fields": [
              {
                "key": "a",
                "label": "짧은 다리 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "짧은 다리에서 빗변 찾기",
          "heading": "짧은 다리에서 빗변 찾기",
          "calculator": {
            "outputLabel": "빗변 c",
            "outputUnit": "단위",
            "fields": [
              {
                "key": "a",
                "label": "짧은 다리 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "빗변에서 짧은 다리 찾기",
          "heading": "빗변에서 짧은 다리 찾기",
          "calculator": {
            "outputLabel": "짧은 다리 a",
            "outputUnit": "단위",
            "fields": [
              {
                "key": "c",
                "label": "빗변 c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "긴다리에서 짧은다리 찾기",
          "heading": "긴다리에서 짧은다리 찾기",
          "calculator": {
            "outputLabel": "짧은 다리 a",
            "outputUnit": "단위",
            "fields": [
              {
                "key": "b",
                "label": "긴 다리",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "빗변에서 긴 다리 찾기",
          "heading": "빗변에서 긴 다리 찾기",
          "calculator": {
            "outputLabel": "긴 다리",
            "outputUnit": "단위",
            "fields": [
              {
                "key": "c",
                "label": "빗변 c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "짧은 다리 부분 찾기",
          "heading": "짧은 다리 부분 찾기",
          "calculator": {
            "outputLabel": "면적",
            "outputUnit": "평방 단위",
            "fields": [
              {
                "key": "a",
                "label": "짧은 다리 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "짧은 다리에서 둘레 찾기",
          "heading": "짧은 다리에서 둘레 찾기",
          "calculator": {
            "outputLabel": "둘레 P",
            "outputUnit": "단위",
            "fields": [
              {
                "key": "a",
                "label": "짧은 다리 a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "이 30-60-90 삼각형 계산기를 사용하면 정확한 30 60 90 삼각형 공식과 비율을 사용하여 짧은 다리, 긴 다리, 빗변, 면적 및 둘레를 쉽게 찾을 수 있습니다."
      ],
      "calculatorNote": "모든 입력 값은 0보다 커야 합니다.",
      "formulaSection": {
        "formulas": [
          "\\text{긴 변} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{긴 변} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{짧은 변} + \\text{긴 변} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "삼각형 다이어그램 키",
        "notes": [
          "짧은 다리 a는 30도 각도와 반대입니다.",
          "긴 다리 a√3는 60도 각도와 반대입니다.",
          "빗변 c는 짧은 다리 a 길이의 정확히 두 배입니다."
        ]
      },
      "howToUse": [
        "30 60 90 계산기 모드에서 찾고 싶은 것을 선택하세요.",
        "알려진 측면 길이(짧은 다리, 긴 다리 또는 빗변)를 입력합니다.",
        "숫자가 양수이고 0보다 큰지 확인합니다.",
        "30 60 90 삼각형 솔버에서 완벽하게 조정된 답을 보려면 결과 상자를 확인하세요."
      ],
      "example": [
        {
          "title": "예 1: 짧은 다리 a = 5일 때 긴 다리와 빗변을 구합니다.",
          "steps": [
            "\\text{긴 변} = a \\times \\sqrt{3}",
            "\\text{긴 변} = 5 \\times \\sqrt{3}",
            "\\text{긴 변} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "예 2: c = 14일 때 짧은 다리를 찾습니다.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "예 3: 빗변 c = 10에서 긴 다리를 찾습니다.",
          "steps": [
            "\\text{긴 변} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{긴 변} = 5\\sqrt{3}",
            "\\text{긴 변} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "계산된 30 60 90 삼각형 변은 30도와 60도 각도를 유지하기 위해 삼각형의 각 부분이 얼마나 길어야 하는지 정확하게 보여줍니다. 그들은 완벽하게 비례합니다.",
        "30 60 90 면적 계산기 및 30 60 90 둘레 계산기 결과는 정확한 경계 2D 크기와 삼각형의 총 외곽선 길이를 제공합니다."
      ],
      "sideRatio": [
        "30 60 90 삼각형의 표준 변 비율은 a : a√3 : 2a입니다.",
        "짧은 다리는 a이고, 긴 다리는 3의 제곱근을 곱한 값이며, 빗변은 정확히 짧은 다리의 두 배입니다."
      ],
      "useCases": [
        "30 60 90 누락 측면 계산기로 특수 직각삼각형과 관련된 삼각법 할당을 확인합니다.",
        "30 60 90 긴 다리 계산기를 사용하여 정삼각형의 높이를 결정합니다.",
        "엔지니어링 또는 건축 분야의 제도 각도 및 구조 지원.",
        "30 60 90 빗변 계산기를 사용하여 물리학의 복잡한 벡터 문제를 해결합니다."
      ],
      "commonMistakes": [
        "짧은 다리와 긴 다리를 섞는다.",
        "긴 구간 계산에는 √3 대신 √2를 사용합니다.",
        "빗변이 2a 대신 a√3와 같다고 생각합니다.",
        "실수로 긴 다리 값을 짧은 다리로 사용한 경우.",
        "빗변이 짧은 다리의 정확히 두 배라는 사실을 잊어버린 것입니다."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "특수 직각삼각형 계산기"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 삼각형 계산기"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "직각삼각형변 계산기"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "직각삼각형 면적 계산기"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "직각 삼각형 둘레 계산기"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "직각삼각형 빗변 계산기"
        }
      ],
      "faqs": [
        {
          "question": "이 30 60 90 삼각형 계산기를 어떻게 사용합니까?",
          "answer": "계산하려는 값을 선택하고 이미 알고 있는 변을 입력하기만 하면 도구가 올바른 비율을 사용하여 답을 찾습니다."
        },
        {
          "question": "짧은 다리와 긴 다리는 어느 쪽입니까?",
          "answer": "짧은 다리는 항상 30도 각도의 반대쪽에 있고, 긴 다리는 항상 60도 각도의 반대쪽에 있습니다."
        },
        {
          "question": "짧은 다리에서 빗변을 구하는 공식은 무엇입니까?",
          "answer": "공식은 c = 2a입니다. 이는 빗변이 짧은 다리 길이의 정확히 두 배라는 의미입니다."
        },
        {
          "question": "긴 변 결과는 무엇을 의미하나요?",
          "answer": "긴 다리 결과는 30도 및 60도 각도를 그대로 유지하면서 다른 측면과 일치하는 데 필요한 정확한 높이 또는 베이스를 알려줍니다."
        },
        {
          "question": "긴 변에서 짧은 변을 구할 수 있나요?",
          "answer": "예, 긴 다리를 3의 제곱근으로 나누어 짧은 다리를 찾을 수 있습니다."
        },
        {
          "question": "왜 √3을 곱하나요?",
          "answer": "3의 제곱근을 곱하는 것은 이 삼각형 유형에 대한 고정된 기하학적 규칙으로, 짧은 다리를 긴 다리에 수학적으로 연결합니다."
        }
      ],
      "ui": {
        "modeTitle": "계산기 모드",
        "modeSelectLabel": "계산기 모드 선택",
        "formulaHeading": "공식",
        "diagramHeading": "삼각형 다이어그램",
        "howToUseHeading": "이 계산기를 사용하는 방법",
        "examplesHeading": "단계별 예",
        "resultMeaningHeading": "결과의 의미",
        "sideRatioHeading": "측면 비율",
        "useCasesHeading": "이 계산기를 사용하는 경우",
        "commonMistakesHeading": "일반적인 실수",
        "relatedHeading": "관련 계산기",
        "faqHeading": "자주 묻는 질문",
        "faqDescription": "가장 일반적인 직각삼각형 풀이 질문에 대한 답변입니다.",
        "diagramAriaLabel45": "45-45-90 삼각형 도표",
        "diagramAriaLabel30": "30-60-90 삼각형 도표",
        "calculatorMessages": {
          "positive": "양수 값을 입력하세요.",
          "invalid": "입력 값은 0보다 커야 합니다."
        }
      }
    }
  },
  "ms": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "Kalkulator Segi Tiga 45 45 90",
      "metaTitle": "45 45 90 Kalkulator Segi Tiga | Cari Sisi, Luas dan Perimeter",
      "metaDescription": "Gunakan kalkulator segi tiga 45 45 90 ini untuk mencari hipotenus, kaki, luas dan perimeter segi tiga sama kaki dengan formula dan langkah.",
      "badge": "Kalkulator Segi Tiga Kanan Khas",
      "parentLabel": "Kalkulator Segi Tiga Kanan Khas",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Cari hipotenus dari kaki",
          "heading": "Cari hipotenus dari kaki",
          "calculator": {
            "outputLabel": "Hipotenus c",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Cari kaki dari hipotenus",
          "heading": "Cari kaki dari hipotenus",
          "calculator": {
            "outputLabel": "Kaki a",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenus c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Cari kawasan dari kaki",
          "heading": "Cari kawasan dari kaki",
          "calculator": {
            "outputLabel": "Kawasan",
            "outputUnit": "unit persegi",
            "fields": [
              {
                "key": "a",
                "label": "Kaki a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Cari perimeter dari kaki",
          "heading": "Cari perimeter dari kaki",
          "calculator": {
            "outputLabel": "Perimeter P",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Gunakan kalkulator segi tiga 45-45-90 ini untuk mencari hipotenus, kaki, luas dan perimeter mana-mana segi tiga tegak sama kaki dengan cepat menggunakan formula dan nisbah segi tiga 45 45 90 standard."
      ],
      "calculatorNote": "Semua nilai input mestilah lebih besar daripada 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Kunci Rajah Segi Tiga",
        "notes": [
          "Kaki a mewakili dua sisi yang sama bagi segi tiga tegak sama kaki.",
          "Hipotenus c ialah sisi terpanjang bertentangan dengan sudut 90°.",
          "Kedua-dua sudut akut adalah tepat 45 darjah."
        ]
      },
      "howToUse": [
        "Pilih mod kalkulator 45 45 90 berdasarkan perkara yang anda sudah tahu.",
        "Masukkan nilai yang diketahui (sama ada kaki atau hipotenus).",
        "Pastikan input anda lebih besar daripada 0.",
        "Baca hasil yang dikira terus dari medan output kalkulator segi tiga sama kaki."
      ],
      "example": [
        {
          "title": "Contoh 1: Cari hipotenus apabila a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Contoh 2: Cari kaki apabila c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Contoh 3: Cari kawasan apabila a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Hasil yang anda peroleh mewakili dimensi fizikal segi tiga anda. Kaki atau hipotenus yang dikira ialah panjang sisi tepat yang diperlukan untuk mengekalkan sudut 45 darjah.",
        "Menggunakan kalkulator kawasan 45 45 90 kami dan ciri kalkulator perimeter 45 45 90 membantu anda memahami jumlah ruang 2D di dalam segi tiga dan jumlah jarak di sekeliling tepinya."
      ],
      "sideRatio": [
        "Nisbah sisi untuk setiap segi tiga 45 45 90 ialah a : a : a√2.",
        "Ini bermakna kedua-dua kaki sentiasa sama panjang, dan hipotenus sentiasa panjang kaki didarab dengan punca kuasa dua 2."
      ],
      "useCases": [
        "Menyelesaikan masalah kerja rumah geometri dan trigonometri sebagai kalkulator sisi yang hilang 45 45 90.",
        "Mengira dimensi untuk pembinaan berasaskan segi empat sama atau potongan pepenjuru dengan formula segi tiga tegak sama kaki.",
        "Mereka bentuk grid isometrik dan merangka sudut piawai.",
        "Mencari jarak terpendek merentasi pepenjuru segi empat sama menggunakan kalkulator hipotenus 45 45 90."
      ],
      "commonMistakes": [
        "Menggunakan nisbah 30 60 90 secara tidak sengaja.",
        "Terlupa bahawa kedua-dua kaki adalah sama.",
        "Menggunakan c = 2a dan bukannya c = a × √2.",
        "Membahagi dengan 2 bukannya √2 apabila mencari kaki.",
        "Terlupa untuk segi empat sama kaki semasa mengira luas."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "kalkulator segi tiga tepat khas"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 kalkulator segi tiga"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "kalkulator sisi segi tiga tepat"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "kalkulator luas segi tiga tepat"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "kalkulator perimeter segi tiga tepat"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "kalkulator hipotenus segi tiga tepat"
        }
      ],
      "faqs": [
        {
          "question": "Apakah kalkulator segi tiga 45 45 90?",
          "answer": "Ia adalah alat khusus yang direka untuk menyelesaikan segi tiga sama kaki dengan mencari hipotenus, kaki, luas atau perimeter berdasarkan nisbah sisi tetap."
        },
        {
          "question": "Apakah segi tiga tegak sama kaki?",
          "answer": "Segitiga tegak sama kaki ialah segi tiga tegak dengan kedua-dua kaki adalah sama panjang, dan kedua-dua sudut bukan tegak adalah tepat 45 darjah."
        },
        {
          "question": "Apakah formula untuk hipotenus bagi segi tiga 45 45 90?",
          "answer": "Formula untuk mencari hipotenus ialah c = a × √2, dengan a ialah panjang satu kaki."
        },
        {
          "question": "Apakah maksud kawasan yang dikira?",
          "answer": "Hasil keluasan bermaksud jumlah keseluruhan ruang rata yang terkandung di dalam tiga sisi segi tiga."
        },
        {
          "question": "Bolehkah saya mencari kaki jika saya hanya tahu hipotenus?",
          "answer": "Ya, anda boleh mencari kaki dengan mudah dengan mengambil hipotenus dan membahagikannya dengan punca kuasa dua 2."
        },
        {
          "question": "Mengapa kaki sentiasa sama?",
          "answer": "Kerana sudut bertentangan kedua-duanya adalah 45 darjah, sisi yang bertentangan dengan sudut tersebut juga mestilah sama antara satu sama lain."
        }
      ],
      "ui": {
        "modeTitle": "Mod Kalkulator",
        "modeSelectLabel": "Pilih mod kalkulator",
        "formulaHeading": "Formula",
        "diagramHeading": "Rajah Segi Tiga",
        "howToUseHeading": "Cara Menggunakan Kalkulator Ini",
        "examplesHeading": "Contoh Langkah demi Langkah",
        "resultMeaningHeading": "Apa Makna Hasilnya",
        "sideRatioHeading": "Nisbah Sisi",
        "useCasesHeading": "Bila Perlu Menggunakan Kalkulator Ini",
        "commonMistakesHeading": "Kesilapan Biasa",
        "relatedHeading": "Kalkulator Berkaitan",
        "faqHeading": "Soalan Lazim",
        "faqDescription": "Jawapan kepada soalan penyelesaian segi tiga kanan yang paling biasa.",
        "diagramAriaLabel45": "45-45-90 Rajah Segi Tiga",
        "diagramAriaLabel30": "30-60-90 Rajah Segi Tiga",
        "calculatorMessages": {
          "positive": "Sila masukkan nilai positif.",
          "invalid": "Nilai input mestilah lebih besar daripada 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "Kalkulator Segi Tiga 30 60 90",
      "metaTitle": "30 60 90 Kalkulator Segi Tiga | Cari Kaki Pendek, Kaki Panjang dan Hipotenus",
      "metaDescription": "Gunakan kalkulator segi tiga 30 60 90 ini untuk mencari kaki pendek, kaki panjang, hipotenus, luas dan perimeter dengan formula dan langkah.",
      "badge": "Kalkulator Segi Tiga Kanan Khas",
      "parentLabel": "Kalkulator Segi Tiga Kanan Khas",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Cari kaki panjang dari kaki pendek",
          "heading": "Cari kaki panjang dari kaki pendek",
          "calculator": {
            "outputLabel": "Kaki Panjang",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki pendek a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Cari hipotenus dari kaki pendek",
          "heading": "Cari hipotenus dari kaki pendek",
          "calculator": {
            "outputLabel": "Hipotenus c",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki pendek a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Cari kaki pendek dari hipotenus",
          "heading": "Cari kaki pendek dari hipotenus",
          "calculator": {
            "outputLabel": "Kaki pendek a",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenus c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Cari kaki pendek dari kaki panjang",
          "heading": "Cari kaki pendek dari kaki panjang",
          "calculator": {
            "outputLabel": "Kaki pendek a",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "b",
                "label": "Kaki panjang",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Cari kaki panjang dari hipotenus",
          "heading": "Cari kaki panjang dari hipotenus",
          "calculator": {
            "outputLabel": "Kaki panjang",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenus c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Cari kawasan dari kaki pendek",
          "heading": "Cari kawasan dari kaki pendek",
          "calculator": {
            "outputLabel": "Kawasan",
            "outputUnit": "unit persegi",
            "fields": [
              {
                "key": "a",
                "label": "Kaki pendek a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Cari perimeter dari kaki pendek",
          "heading": "Cari perimeter dari kaki pendek",
          "calculator": {
            "outputLabel": "Perimeter P",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki pendek a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Gunakan kalkulator segi tiga 30-60-90 ini untuk mencari kaki pendek, kaki panjang, hipotenus, luas dan perimeter dengan mudah menggunakan formula dan nisbah segi tiga 30 60 90 yang tepat."
      ],
      "calculatorNote": "Semua nilai input mestilah lebih besar daripada 0.",
      "formulaSection": {
        "formulas": [
          "\\text{kaki panjang} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{kaki panjang} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{kaki pendek} + \\text{kaki panjang} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Kunci Rajah Segi Tiga",
        "notes": [
          "Kaki pendek a adalah bertentangan dengan sudut 30 darjah.",
          "Kaki panjang a√3 adalah bertentangan dengan sudut 60 darjah.",
          "Hipotenus c ialah dua kali ganda panjang kaki pendek a."
        ]
      },
      "howToUse": [
        "Pilih perkara yang anda mahu cari daripada mod kalkulator 30 60 90.",
        "Masukkan panjang sisi anda yang diketahui (kaki pendek, kaki panjang atau hipotenus).",
        "Sahkan nombor itu positif dan lebih besar daripada sifar.",
        "Semak kotak keputusan untuk jawapan berskala sempurna anda daripada penyelesai segitiga 30 60 90 kami."
      ],
      "example": [
        {
          "title": "Contoh 1: Cari kaki panjang dan hipotenus apabila kaki pendek a = 5.",
          "steps": [
            "\\text{kaki panjang} = a \\times \\sqrt{3}",
            "\\text{kaki panjang} = 5 \\times \\sqrt{3}",
            "\\text{kaki panjang} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Contoh 2: Cari kaki pendek apabila c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Contoh 3: Cari kaki panjang dari hipotenus c = 10.",
          "steps": [
            "\\text{kaki panjang} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{kaki panjang} = 5\\sqrt{3}",
            "\\text{kaki panjang} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Sisi segi tiga 30 60 90 yang dikira menunjukkan dengan tepat berapa lama setiap bahagian segitiga itu perlu untuk mengekalkan sudut 30 dan 60 darjah. Mereka berkadar sempurna.",
        "Kalkulator kawasan 30 60 90 dan hasil kalkulator perimeter 30 60 90 memberikan anda saiz 2D sempadan yang tepat dan jumlah panjang garis besar segi tiga anda."
      ],
      "sideRatio": [
        "Nisbah sisi standard untuk segi tiga 30 60 90 ialah a : a√3 : 2a.",
        "Kaki pendek ialah a, kaki panjang ialah darab punca kuasa dua 3, dan hipotenus betul-betul dua kali ganda kaki pendek."
      ],
      "useCases": [
        "Menyemak tugasan trigonometri yang melibatkan segi tiga tepat khas sebagai kalkulator sisi yang hilang 30 60 90.",
        "Menentukan ketinggian segi tiga sama menggunakan kalkulator kaki panjang 30 60 90.",
        "Merangka sudut dan sokongan struktur dalam kejuruteraan atau seni bina.",
        "Menyelesaikan masalah vektor kompleks dalam fizik dengan kalkulator hipotenus 30 60 90."
      ],
      "commonMistakes": [
        "Mencampurkan kaki pendek dan kaki panjang.",
        "Menggunakan √2 dan bukannya √3 untuk pengiraan kaki panjang.",
        "Memikirkan hipotenus bersamaan dengan a√3 dan bukannya 2a.",
        "Menggunakan nilai kaki panjang sebagai kaki pendek secara tidak sengaja.",
        "Terlupa bahawa hipotenus adalah dua kali ganda kaki pendek."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "kalkulator segi tiga tepat khas"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 kalkulator segi tiga"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "kalkulator sisi segi tiga tepat"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "kalkulator luas segi tiga tepat"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "kalkulator perimeter segi tiga tepat"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "kalkulator hipotenus segi tiga tepat"
        }
      ],
      "faqs": [
        {
          "question": "Bagaimanakah cara saya menggunakan kalkulator segi tiga 30 60 90 ini?",
          "answer": "Hanya pilih nilai yang anda ingin kira, masukkan bahagian yang anda sudah tahu, dan alat akan menggunakan nisbah yang betul untuk mencari jawapan."
        },
        {
          "question": "Bahagian manakah kaki pendek dan kaki panjang?",
          "answer": "Kaki pendek sentiasa bertentangan dengan sudut 30 darjah, manakala kaki panjang sentiasa bertentangan dengan sudut 60 darjah."
        },
        {
          "question": "Apakah formula untuk mencari hipotenus daripada kaki pendek?",
          "answer": "Formulanya ialah c = 2a, bermakna hipotenus betul-betul dua kali ganda panjang kaki pendek."
        },
        {
          "question": "Apakah maksud keputusan kaki panjang?",
          "answer": "Keputusan kaki panjang memberitahu anda ketinggian atau tapak yang tepat yang diperlukan untuk dipadankan dengan sisi lain sambil mengekalkan sudut 30 dan 60 darjah utuh."
        },
        {
          "question": "Bolehkah saya mencari kaki pendek dari kaki panjang?",
          "answer": "Ya, anda boleh mencari kaki pendek dengan membahagikan kaki panjang dengan punca kuasa dua 3."
        },
        {
          "question": "Mengapakah kita mendarab dengan punca kuasa dua bagi 3?",
          "answer": "Mendarab dengan punca kuasa dua bagi 3 ialah peraturan geometri tetap untuk jenis segi tiga ini, memautkan kaki pendek ke kaki panjang secara matematik."
        }
      ],
      "ui": {
        "modeTitle": "Mod Kalkulator",
        "modeSelectLabel": "Pilih mod kalkulator",
        "formulaHeading": "Formula",
        "diagramHeading": "Rajah Segi Tiga",
        "howToUseHeading": "Cara Menggunakan Kalkulator Ini",
        "examplesHeading": "Contoh Langkah demi Langkah",
        "resultMeaningHeading": "Apa Makna Hasilnya",
        "sideRatioHeading": "Nisbah Sisi",
        "useCasesHeading": "Bila Perlu Menggunakan Kalkulator Ini",
        "commonMistakesHeading": "Kesilapan Biasa",
        "relatedHeading": "Kalkulator Berkaitan",
        "faqHeading": "Soalan Lazim",
        "faqDescription": "Jawapan kepada soalan penyelesaian segi tiga kanan yang paling biasa.",
        "diagramAriaLabel45": "45-45-90 Rajah Segi Tiga",
        "diagramAriaLabel30": "30-60-90 Rajah Segi Tiga",
        "calculatorMessages": {
          "positive": "Sila masukkan nilai positif.",
          "invalid": "Nilai input mestilah lebih besar daripada 0."
        }
      }
    }
  },
  "pl": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "Kalkulator trójkąta 45 45 90",
      "metaTitle": "Kalkulator trójkąta 45 45 90 | Znajdź boki, pole i obwód",
      "metaDescription": "Użyj tego kalkulatora trójkątów 45 45 90, aby znaleźć przeciwprostokątną, nogę, pole i obwód trójkąta prostokątnego równoramiennego za pomocą wzorów i kroków.",
      "badge": "Specjalny kalkulator trójkąta prostokątnego",
      "parentLabel": "Specjalny kalkulator trójkąta prostokątnego",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Znajdź przeciwprostokątną przyprostokątnej",
          "heading": "Znajdź przeciwprostokątną przyprostokątnej",
          "calculator": {
            "outputLabel": "Przeciwprostokątna c",
            "outputUnit": "jednostki",
            "fields": [
              {
                "key": "a",
                "label": "Noga a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Znajdź nogę wychodzącą z przeciwprostokątnej",
          "heading": "Znajdź nogę wychodzącą z przeciwprostokątnej",
          "calculator": {
            "outputLabel": "Noga a",
            "outputUnit": "jednostki",
            "fields": [
              {
                "key": "c",
                "label": "Przeciwprostokątna c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Znajdź obszar od przyprostokątnej",
          "heading": "Znajdź obszar od przyprostokątnej",
          "calculator": {
            "outputLabel": "Obszar",
            "outputUnit": "jednostki kwadratowe",
            "fields": [
              {
                "key": "a",
                "label": "Noga a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Znajdź obwód przyprostokątnej",
          "heading": "Znajdź obwód przyprostokątnej",
          "calculator": {
            "outputLabel": "Obwód P",
            "outputUnit": "jednostki",
            "fields": [
              {
                "key": "a",
                "label": "Noga a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Użyj tego kalkulatora trójkątów 45-45-90, aby szybko znaleźć przeciwprostokątną, nogę, pole i obwód dowolnego trójkąta prostokątnego równoramiennego, korzystając ze standardowych wzorów i proporcji trójkątów 45 45 90."
      ],
      "calculatorNote": "Wszystkie wartości wejściowe muszą być większe niż 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Klucz do diagramu trójkąta",
        "notes": [
          "Noga a reprezentuje dwa równe boki trójkąta prostokątnego równoramiennego.",
          "Przeciwprostokątna c jest najdłuższym bokiem przeciwnym do kąta 90°.",
          "Oba kąty ostre mają dokładnie 45 stopni."
        ]
      },
      "howToUse": [
        "Wybierz tryb kalkulatora 45 45 90 w oparciu o to, co już wiesz.",
        "Wprowadź znaną wartość (nogę lub przeciwprostokątną).",
        "Upewnij się, że wprowadzona wartość jest większa od 0.",
        "Przeczytaj obliczony wynik bezpośrednio z pola wyjściowego kalkulatora trójkąta równoramiennego."
      ],
      "example": [
        {
          "title": "Przykład 1: znajdź przeciwprostokątną, gdy a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Przykład 2: znajdź przyprostokątną, gdy c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Przykład 3: znajdź pole, gdy a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Otrzymane wyniki reprezentują fizyczne wymiary trójkąta. Obliczona przyprostokątna lub przeciwprostokątna to dokładna długość boku potrzebna do utrzymania kątów 45 stopni.",
        "Korzystanie z naszego kalkulatora powierzchni 45 45 90 i kalkulatora obwodu 45 45 90 pomaga zrozumieć całkowitą przestrzeń 2D wewnątrz trójkąta i całkowitą odległość wokół jego krawędzi."
      ],
      "sideRatio": [
        "Stosunek boków każdego trójkąta 45 45 90 wynosi a : a : a√2.",
        "Oznacza to, że obie przyprostokątnej mają zawsze dokładnie tę samą długość, a przeciwprostokątna jest zawsze długością przyprostokątnej pomnożoną przez pierwiastek kwadratowy z 2."
      ],
      "useCases": [
        "Rozwiązywanie zadań domowych z geometrii i trygonometrii w formie kalkulatora brakującej strony 45 45 90.",
        "Obliczanie wymiarów konstrukcji kwadratowych lub cięć ukośnych za pomocą wzoru na trójkąt prostokątny równoramienny.",
        "Projektowanie siatek izometrycznych i rysowanie kątów standardowych.",
        "Znajdowanie najkrótszej odległości na przekątnej kwadratowej za pomocą kalkulatora przeciwprostokątnej 45 45 90."
      ],
      "commonMistakes": [
        "Omyłkowe użycie proporcji 30 60 90.",
        "Zapominając, że obie przyprostokątnej są równe.",
        "Użycie c = 2a zamiast c = a × √2.",
        "Dzielenie przez 2 zamiast √2 podczas znajdowania przyprostokątnej.",
        "Zapominanie o wyprostowaniu przyprostokątnej przy obliczaniu powierzchni."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "specjalny kalkulator trójkąta prostokątnego"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "kalkulator trójkąta 30 60 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator boku trójkąta prawego"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "kalkulator pola trójkąta prostokątnego"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "kalkulator obwodu trójkąta prostokątnego"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "kalkulator przeciwprostokątnej trójkąta prostokątnego"
        }
      ],
      "faqs": [
        {
          "question": "Czym jest kalkulator trójkąta 45 45 90?",
          "answer": "Jest to specjalne narzędzie zaprojektowane do rozwiązywania trójkąta prostokątnego równoramiennego poprzez znalezienie przeciwprostokątnej, przyprostokątnej, pola lub obwodu w oparciu o stałe stosunki boków."
        },
        {
          "question": "Co to jest trójkąt prostokątny równoramienny?",
          "answer": "Trójkąt równoramienny to trójkąt prostokątny, w którym obie przyprostokątnej mają identyczną długość, a oba kąty inne niż proste mają dokładnie 45 stopni."
        },
        {
          "question": "Jaki jest wzór na przeciwprostokątną trójkąta 45 45 90?",
          "answer": "Wzór na znalezienie przeciwprostokątnej to c = a × √2, gdzie a to długość jednej przyprostokątnej."
        },
        {
          "question": "Co oznacza obliczona powierzchnia?",
          "answer": "Wynik pola oznacza całkowitą ilość płaskiej przestrzeni zawartej wewnątrz trzech boków trójkąta."
        },
        {
          "question": "Czy mogę znaleźć nogę, znając tylko przeciwprostokątną?",
          "answer": "Tak, możesz łatwo znaleźć nogę, biorąc przeciwprostokątną i dzieląc ją przez pierwiastek kwadratowy z 2."
        },
        {
          "question": "Dlaczego przyprostokątnej są zawsze równe?",
          "answer": "Ponieważ oba przeciwne kąty mają po 45 stopni, boki leżące naprzeciw tych kątów również muszą być sobie równe."
        }
      ],
      "ui": {
        "modeTitle": "Tryb kalkulatora",
        "modeSelectLabel": "Wybierz tryb kalkulatora",
        "formulaHeading": "Formuła",
        "diagramHeading": "Schemat trójkąta",
        "howToUseHeading": "Jak korzystać z tego kalkulatora",
        "examplesHeading": "Przykłady krok po kroku",
        "resultMeaningHeading": "Co oznacza wynik",
        "sideRatioHeading": "Stosunek boczny",
        "useCasesHeading": "Kiedy używać tego kalkulatora",
        "commonMistakesHeading": "Typowe błędy",
        "relatedHeading": "Powiązane kalkulatory",
        "faqHeading": "Często zadawane pytania",
        "faqDescription": "Odpowiedzi na najczęściej zadawane pytania dotyczące rozwiązywania trójkątów prostokątnych.",
        "diagramAriaLabel45": "Diagram trójkąta 45-45-90",
        "diagramAriaLabel30": "Diagram trójkąta 30-60-90",
        "calculatorMessages": {
          "positive": "Proszę wprowadzić wartość dodatnią.",
          "invalid": "Wartość wejściowa musi być większa niż 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "Kalkulator trójkąta 30 60 90",
      "metaTitle": "Kalkulator trójkąta 30 60 90 | Znajdź krótszą przyprostokątną, dłuższą przyprostokątną i przeciwprostokątną",
      "metaDescription": "Użyj tego kalkulatora trójkątów 30 60 90, aby znaleźć krótką i długą nogę, przeciwprostokątną, pole i obwód za pomocą wzorów i kroków.",
      "badge": "Specjalny kalkulator trójkąta prostokątnego",
      "parentLabel": "Specjalny kalkulator trójkąta prostokątnego",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Znajdź długą nogę od krótkiej przyprostokątnej",
          "heading": "Znajdź długą nogę od krótkiej przyprostokątnej",
          "calculator": {
            "outputLabel": "Długa przyprostokątna",
            "outputUnit": "jednostki",
            "fields": [
              {
                "key": "a",
                "label": "Krótka nogawka a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Znajdź przeciwprostokątną krótkiej przyprostokątnej",
          "heading": "Znajdź przeciwprostokątną krótkiej przyprostokątnej",
          "calculator": {
            "outputLabel": "Przeciwprostokątna c",
            "outputUnit": "jednostki",
            "fields": [
              {
                "key": "a",
                "label": "Krótka nogawka a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Znajdź krótką nogę od przeciwprostokątnej",
          "heading": "Znajdź krótką nogę od przeciwprostokątnej",
          "calculator": {
            "outputLabel": "Krótka nogawka a",
            "outputUnit": "jednostki",
            "fields": [
              {
                "key": "c",
                "label": "Przeciwprostokątna c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Znajdź krótką nogę z długiej przyprostokątnej",
          "heading": "Znajdź krótką nogę z długiej przyprostokątnej",
          "calculator": {
            "outputLabel": "Krótka nogawka a",
            "outputUnit": "jednostki",
            "fields": [
              {
                "key": "b",
                "label": "Długa przyprostokątna",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Znajdź długą nogę od przeciwprostokątnej",
          "heading": "Znajdź długą nogę od przeciwprostokątnej",
          "calculator": {
            "outputLabel": "Długa przyprostokątna",
            "outputUnit": "jednostki",
            "fields": [
              {
                "key": "c",
                "label": "Przeciwprostokątna c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Znajdź obszar od krótkiej przyprostokątnej",
          "heading": "Znajdź obszar od krótkiej przyprostokątnej",
          "calculator": {
            "outputLabel": "Obszar",
            "outputUnit": "jednostki kwadratowe",
            "fields": [
              {
                "key": "a",
                "label": "Krótka nogawka a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Znajdź obwód krótkiej przyprostokątnej",
          "heading": "Znajdź obwód krótkiej przyprostokątnej",
          "calculator": {
            "outputLabel": "Obwód P",
            "outputUnit": "jednostki",
            "fields": [
              {
                "key": "a",
                "label": "Krótka nogawka a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Użyj tego kalkulatora trójkątów 30-60-90, aby łatwo znaleźć krótką i długą nogę, przeciwprostokątną, pole i obwód, korzystając z dokładnego wzoru i proporcji trójkąta 30 60 90."
      ],
      "calculatorNote": "Wszystkie wartości wejściowe muszą być większe niż 0.",
      "formulaSection": {
        "formulas": [
          "\\text{dłuższa przyprostokątna} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{dłuższa przyprostokątna} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{krótsza przyprostokątna} + \\text{dłuższa przyprostokątna} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Klucz do diagramu trójkąta",
        "notes": [
          "Krótka przyprostokątna a leży naprzeciwko kąta 30 stopni.",
          "Długa przyprostokątna a√3 jest przeciwna do kąta 60 stopni.",
          "Przeciwprostokątna c jest dokładnie dwukrotnie dłuższa od krótkiej przyprostokątnej a."
        ]
      },
      "howToUse": [
        "Wybierz, co chcesz znaleźć w trybach kalkulatora 30 60 90.",
        "Wprowadź znaną długość boku (krótka nogawka, dłuższa przyprostokątna lub przeciwprostokątna).",
        "Sprawdź, czy liczba jest dodatnia i większa od zera.",
        "Zaznacz pole wynikowe, aby uzyskać idealnie wyskalowaną odpowiedź z naszego narzędzia do rozwiązywania trójkątów 30 60 90."
      ],
      "example": [
        {
          "title": "Przykład 1: Znajdź długą nogę i przeciwprostokątną, gdy krótsza przyprostokątna a = 5.",
          "steps": [
            "\\text{dłuższa przyprostokątna} = a \\times \\sqrt{3}",
            "\\text{dłuższa przyprostokątna} = 5 \\times \\sqrt{3}",
            "\\text{dłuższa przyprostokątna} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Przykład 2: Znajdź krótką nogę, gdy c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Przykład 3: Znajdź długą nogę na podstawie przeciwprostokątnej c = 10.",
          "steps": [
            "\\text{dłuższa przyprostokątna} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{dłuższa przyprostokątna} = 5\\sqrt{3}",
            "\\text{dłuższa przyprostokątna} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Obliczone boki trójkąta 30 60 90 pokazują dokładnie, jak długa musi być każda część trójkąta, aby zachować kąty 30 i 60 stopni. Są idealnie proporcjonalne.",
        "Wyniki kalkulatora powierzchni 30 60 90 i kalkulatora obwodu 30 60 90 podają dokładny ograniczony rozmiar 2D i całkowitą długość konturu trójkąta."
      ],
      "sideRatio": [
        "Standardowy stosunek boków trójkąta 30 60 90 to a : a√3 : 2a.",
        "Krótka przyprostokątna to a, dłuższa przyprostokątna to razy pierwiastek kwadratowy z 3, a przeciwprostokątna jest dokładnie dwa razy krótsza."
      ],
      "useCases": [
        "Sprawdzanie zadań trygonometrycznych obejmujących specjalne trójkąty prostokątne jako kalkulator brakującego boku 30 60 90.",
        "Wyznaczanie wysokości trójkąta równobocznego za pomocą kalkulatora długich nóg 30 60 90.",
        "Rysowanie kątowników i podpór konstrukcyjnych w inżynierii lub architekturze.",
        "Rozwiązywanie złożonych problemów wektorowych w fizyce za pomocą kalkulatora przeciwprostokątnej 30 60 90."
      ],
      "commonMistakes": [
        "Mieszanie krótkiej i długiej przyprostokątnej.",
        "Użycie √2 zamiast √3 do obliczeń długiego odcinka.",
        "Zakładając, że przeciwprostokątna wynosi a√3 zamiast 2a.",
        "Przypadkowe użycie wartości długiej przyprostokątnej jako krótkiej przyprostokątnej.",
        "Zapominając, że przeciwprostokątna jest dokładnie podwójną długością krótkiej przyprostokątnej."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "specjalny kalkulator trójkąta prostokątnego"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "kalkulator trójkąta 45 45 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator boku trójkąta prawego"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "kalkulator pola trójkąta prostokątnego"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "kalkulator obwodu trójkąta prostokątnego"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "kalkulator przeciwprostokątnej trójkąta prostokątnego"
        }
      ],
      "faqs": [
        {
          "question": "Jak korzystać z kalkulatora trójkątów 30 60 90?",
          "answer": "Po prostu wybierz wartość, którą chcesz obliczyć, wprowadź stronę, którą już znasz, a narzędzie użyje prawidłowego współczynnika, aby znaleźć odpowiedź."
        },
        {
          "question": "Po której stronie jest krótka i dłuższa przyprostokątna?",
          "answer": "Krótka przyprostokątna jest zawsze przeciwna do kąta 30 stopni, podczas gdy dłuższa przyprostokątna jest zawsze przeciwna do kąta 60 stopni."
        },
        {
          "question": "Jaki jest wzór na znalezienie przeciwprostokątnej krótkiej przyprostokątnej?",
          "answer": "Wzór to c = 2a, co oznacza, że przeciwprostokątna jest dokładnie dwukrotnie dłuższa od krótkiej przyprostokątnej."
        },
        {
          "question": "Co oznacza wynik długiej przyprostokątnej?",
          "answer": "Wynik dotyczący długich nóg wskazuje dokładną wysokość lub podstawę wymaganą do dopasowania do pozostałych boków, przy zachowaniu nienaruszonych kątów 30 i 60 stopni."
        },
        {
          "question": "Czy mogę znaleźć krótką nogę spośród długiej?",
          "answer": "Tak, możesz znaleźć krótką nogę, dzieląc długą nogę przez pierwiastek kwadratowy z 3."
        },
        {
          "question": "Dlaczego mnożymy przez pierwiastek kwadratowy z 3?",
          "answer": "Mnożenie przez pierwiastek kwadratowy z 3 jest stałą regułą geometryczną dla tego typu trójkąta, matematycznie łączącą krótką i długą nogę."
        }
      ],
      "ui": {
        "modeTitle": "Tryb kalkulatora",
        "modeSelectLabel": "Wybierz tryb kalkulatora",
        "formulaHeading": "Formuła",
        "diagramHeading": "Schemat trójkąta",
        "howToUseHeading": "Jak korzystać z tego kalkulatora",
        "examplesHeading": "Przykłady krok po kroku",
        "resultMeaningHeading": "Co oznacza wynik",
        "sideRatioHeading": "Stosunek boczny",
        "useCasesHeading": "Kiedy używać tego kalkulatora",
        "commonMistakesHeading": "Typowe błędy",
        "relatedHeading": "Powiązane kalkulatory",
        "faqHeading": "Często zadawane pytania",
        "faqDescription": "Odpowiedzi na najczęściej zadawane pytania dotyczące rozwiązywania trójkątów prostokątnych.",
        "diagramAriaLabel45": "Diagram trójkąta 45-45-90",
        "diagramAriaLabel30": "Diagram trójkąta 30-60-90",
        "calculatorMessages": {
          "positive": "Proszę wprowadzić wartość dodatnią.",
          "invalid": "Wartość wejściowa musi być większa niż 0."
        }
      }
    }
  },
  "id": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "Kalkulator Segitiga 45 45 90",
      "metaTitle": "Kalkulator Segitiga 45 45 90 | Temukan Sisi, Luas, dan Keliling",
      "metaDescription": "Gunakan kalkulator segitiga 45 45 90 ini untuk mencari sisi miring, kaki, luas, dan keliling segitiga siku-siku sama kaki beserta rumus dan langkahnya.",
      "badge": "Kalkulator Segitiga Kanan Khusus",
      "parentLabel": "Kalkulator Segitiga Kanan Khusus",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Temukan sisi miring dari kaki",
          "heading": "Temukan sisi miring dari kaki",
          "calculator": {
            "outputLabel": "Sisi miring c",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Temukan kaki dari sisi miring",
          "heading": "Temukan kaki dari sisi miring",
          "calculator": {
            "outputLabel": "Kaki a",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "c",
                "label": "Sisi miring c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Temukan area dari kaki",
          "heading": "Temukan area dari kaki",
          "calculator": {
            "outputLabel": "Daerah",
            "outputUnit": "satuan persegi",
            "fields": [
              {
                "key": "a",
                "label": "Kaki a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Temukan keliling dari kaki",
          "heading": "Temukan keliling dari kaki",
          "calculator": {
            "outputLabel": "Keliling P",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Gunakan kalkulator segitiga 45-45-90 ini untuk dengan cepat menemukan sisi miring, kaki, luas, dan keliling segitiga siku-siku sama kaki menggunakan rumus dan rasio segitiga 45 45 90 standar."
      ],
      "calculatorNote": "Semua nilai masukan harus lebih besar dari 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Kunci Diagram Segitiga",
        "notes": [
          "Kaki a melambangkan dua sisi yang sama besar dari segitiga siku-siku sama kaki.",
          "Sisi miring c adalah sisi terpanjang yang berhadapan dengan sudut 90°.",
          "Kedua sudut lancip tersebut tepat besarnya 45 derajat."
        ]
      },
      "howToUse": [
        "Pilih mode kalkulator 45 45 90 berdasarkan apa yang sudah Anda ketahui.",
        "Masukkan nilai yang diketahui (kaki atau sisi miring).",
        "Pastikan input Anda lebih besar dari 0.",
        "Baca hasil perhitungan langsung dari kolom keluaran kalkulator segitiga siku-siku sama kaki."
      ],
      "example": [
        {
          "title": "Contoh 1: Temukan sisi miring ketika a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Contoh 2: Temukan kaki ketika c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Contoh 3: Carilah luas bila a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Hasil yang Anda peroleh mewakili dimensi fisik segitiga Anda. Kaki atau sisi miring yang dihitung adalah panjang sisi tepat yang diperlukan untuk mempertahankan sudut 45 derajat.",
        "Menggunakan kalkulator luas 45 45 90 dan fitur kalkulator keliling 45 45 90 membantu Anda memahami total ruang 2D di dalam segitiga dan total jarak di sekeliling tepinya."
      ],
      "sideRatio": [
        "Perbandingan sisi setiap segitiga 45 45 90 adalah a : a : a√2.",
        "Artinya kedua kaki selalu sama panjangnya, dan sisi miring selalu merupakan panjang kaki dikalikan akar kuadrat 2."
      ],
      "useCases": [
        "Menyelesaikan soal pekerjaan rumah geometri dan trigonometri sebagai kalkulator sisi hilang 45 45 90.",
        "Menghitung dimensi konstruksi berbentuk persegi atau potongan diagonal dengan rumus segitiga siku-siku sama kaki.",
        "Merancang grid isometrik dan menyusun sudut standar.",
        "Mencari jarak terpendek pada diagonal persegi menggunakan kalkulator sisi miring 45 45 90."
      ],
      "commonMistakes": [
        "Menggunakan rasio 30 60 90 secara tidak sengaja.",
        "Lupa bahwa kedua kakinya sama.",
        "Menggunakan c = 2a bukannya c = a × √2.",
        "Membaginya dengan 2, bukan √2 saat menemukan kakinya.",
        "Lupa mengkuadratkan kaki saat menghitung luas."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "kalkulator segitiga siku-siku khusus"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "Kalkulator segitiga 30 60 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "kalkulator sisi segitiga siku-siku"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "kalkulator luas segitiga siku-siku"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "kalkulator keliling segitiga siku-siku"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "kalkulator sisi miring segitiga siku-siku"
        }
      ],
      "faqs": [
        {
          "question": "Apa itu kalkulator segitiga 45 45 90?",
          "answer": "Ini adalah alat khusus yang dirancang untuk menyelesaikan segitiga siku-siku sama kaki dengan mencari sisi miring, kaki, luas, atau keliling berdasarkan rasio sisi tetap."
        },
        {
          "question": "Apa itu segitiga siku-siku sama kaki?",
          "answer": "Segitiga siku-siku sama kaki adalah segitiga siku-siku yang kedua kakinya sama panjang dan kedua sudut tidak siku-sikunya tepat 45 derajat."
        },
        {
          "question": "Apa rumus sisi miring segitiga 45 45 90?",
          "answer": "Rumus mencari sisi miring adalah c = a × √2, dimana a adalah panjang salah satu kakinya."
        },
        {
          "question": "Apa yang dimaksud dengan luas yang dihitung?",
          "answer": "Hasil luas berarti jumlah seluruh ruang datar yang terdapat di dalam ketiga sisi segitiga."
        },
        {
          "question": "Dapatkah saya menemukan kakinya jika saya hanya mengetahui sisi miringnya?",
          "answer": "Ya, Anda dapat dengan mudah mencari kaki dengan mengambil sisi miring dan membaginya dengan akar kuadrat 2."
        },
        {
          "question": "Mengapa kakinya selalu sama?",
          "answer": "Karena sudut-sudut yang berhadapan sama-sama besarnya 45 derajat, maka sisi-sisi yang berhadapan dengan sudut-sudut tersebut juga harus sama besar."
        }
      ],
      "ui": {
        "modeTitle": "Mode Kalkulator",
        "modeSelectLabel": "Pilih mode kalkulator",
        "formulaHeading": "Rumus",
        "diagramHeading": "Diagram Segitiga",
        "howToUseHeading": "Cara Menggunakan Kalkulator Ini",
        "examplesHeading": "Contoh Langkah demi Langkah",
        "resultMeaningHeading": "Apa Arti Hasilnya",
        "sideRatioHeading": "Rasio Sisi",
        "useCasesHeading": "Kapan Menggunakan Kalkulator Ini",
        "commonMistakesHeading": "Kesalahan Umum",
        "relatedHeading": "Kalkulator Terkait",
        "faqHeading": "FAQ",
        "faqDescription": "Jawaban atas pertanyaan penyelesaian segitiga siku-siku yang paling umum.",
        "diagramAriaLabel45": "Diagram Segitiga 45-45-90",
        "diagramAriaLabel30": "Diagram Segitiga 30-60-90",
        "calculatorMessages": {
          "positive": "Silakan masukkan nilai positif.",
          "invalid": "Nilai masukan harus lebih besar dari 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "Kalkulator Segitiga 30 60 90",
      "metaTitle": "Kalkulator Segitiga 30 60 90 | Temukan Kaki Pendek, Kaki Panjang, dan Sisi Miring",
      "metaDescription": "Gunakan kalkulator segitiga 30 60 90 ini untuk mencari kaki pendek, panjang, sisi miring, luas, dan keliling dengan rumus dan langkah.",
      "badge": "Kalkulator Segitiga Kanan Khusus",
      "parentLabel": "Kalkulator Segitiga Kanan Khusus",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Temukan kaki panjang dari kaki pendek",
          "heading": "Temukan kaki panjang dari kaki pendek",
          "calculator": {
            "outputLabel": "Kaki Panjang",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki pendek a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Temukan sisi miring dari kaki pendek",
          "heading": "Temukan sisi miring dari kaki pendek",
          "calculator": {
            "outputLabel": "Sisi miring c",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki pendek a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Temukan kaki pendek dari sisi miring",
          "heading": "Temukan kaki pendek dari sisi miring",
          "calculator": {
            "outputLabel": "Kaki pendek a",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "c",
                "label": "Sisi miring c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Temukan kaki pendek dari kaki panjang",
          "heading": "Temukan kaki pendek dari kaki panjang",
          "calculator": {
            "outputLabel": "Kaki pendek a",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "b",
                "label": "Kaki panjang",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Temukan kaki panjang dari sisi miring",
          "heading": "Temukan kaki panjang dari sisi miring",
          "calculator": {
            "outputLabel": "Kaki panjang",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "c",
                "label": "Sisi miring c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Temukan area dari kaki pendek",
          "heading": "Temukan area dari kaki pendek",
          "calculator": {
            "outputLabel": "Daerah",
            "outputUnit": "satuan persegi",
            "fields": [
              {
                "key": "a",
                "label": "Kaki pendek a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Temukan keliling dari kaki pendek",
          "heading": "Temukan keliling dari kaki pendek",
          "calculator": {
            "outputLabel": "Keliling P",
            "outputUnit": "unit",
            "fields": [
              {
                "key": "a",
                "label": "Kaki pendek a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Gunakan kalkulator segitiga 30-60-90 ini untuk mencari kaki pendek, panjang, sisi miring, luas, dan keliling dengan mudah menggunakan rumus dan perbandingan segitiga 30 60 90 yang tepat."
      ],
      "calculatorNote": "Semua nilai masukan harus lebih besar dari 0.",
      "formulaSection": {
        "formulas": [
          "\\text{kaki panjang} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{kaki panjang} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{kaki pendek} + \\text{kaki panjang} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Kunci Diagram Segitiga",
        "notes": [
          "Kaki pendek a berhadapan dengan sudut 30 derajat.",
          "Kaki panjang a√3 berlawanan dengan sudut 60 derajat.",
          "Sisi miring c tepat dua kali panjang sisi pendek a."
        ]
      },
      "howToUse": [
        "Pilih apa yang ingin Anda temukan dari mode kalkulator 30 60 90.",
        "Masukkan panjang sisi yang diketahui (kaki pendek, kaki panjang, atau sisi miring).",
        "Pastikan angkanya positif dan lebih besar dari nol.",
        "Centang kotak hasil untuk jawaban berskala sempurna dari pemecah segitiga 30 60 90 kami."
      ],
      "example": [
        {
          "title": "Contoh 1: Carilah kaki panjang dan sisi miring jika kaki pendek a = 5.",
          "steps": [
            "\\text{kaki panjang} = a \\times \\sqrt{3}",
            "\\text{kaki panjang} = 5 \\times \\sqrt{3}",
            "\\text{kaki panjang} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Contoh 2: Temukan kaki pendek ketika c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Contoh 3: Carilah panjang kaki dari sisi miring c = 10.",
          "steps": [
            "\\text{kaki panjang} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{kaki panjang} = 5\\sqrt{3}",
            "\\text{kaki panjang} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Sisi segitiga 30 60 90 yang dihitung menunjukkan dengan tepat berapa panjang setiap bagian segitiga yang diperlukan untuk mempertahankan sudut 30 dan 60 derajat. Mereka sangat proporsional.",
        "Kalkulator luas 30 60 90 dan hasil kalkulator keliling 30 60 90 memberi Anda ukuran 2D berbatas yang tepat dan total panjang garis luar segitiga Anda."
      ],
      "sideRatio": [
        "Rasio sisi standar untuk segitiga 30 60 90 adalah a : a√3 : 2a.",
        "Kaki yang pendek adalah a, kaki yang panjang adalah kali akar kuadrat dari 3, dan sisi miringnya persis dua kali kaki yang pendek."
      ],
      "useCases": [
        "Memeriksa tugas trigonometri yang melibatkan segitiga siku-siku khusus sebagai kalkulator sisi hilang 30 60 90.",
        "Menentukan tinggi segitiga sama sisi menggunakan kalkulator kaki panjang 30 60 90.",
        "Sudut penyusunan dan dukungan struktural dalam bidang teknik atau arsitektur.",
        "Memecahkan masalah vektor kompleks dalam fisika dengan kalkulator sisi miring 30 60 90."
      ],
      "commonMistakes": [
        "Mencampur kaki pendek dan kaki panjang.",
        "Menggunakan √2 dan bukan √3 untuk perhitungan sisi panjang.",
        "Anggap sisi miringnya sama dengan a√3, bukan 2a.",
        "Menggunakan nilai kaki panjang sebagai kaki pendek secara tidak sengaja.",
        "Lupa bahwa sisi miringnya persis dua kali lipat kaki pendeknya."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "kalkulator segitiga siku-siku khusus"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "Kalkulator segitiga 45 45 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "kalkulator sisi segitiga siku-siku"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "kalkulator luas segitiga siku-siku"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "kalkulator keliling segitiga siku-siku"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "kalkulator sisi miring segitiga siku-siku"
        }
      ],
      "faqs": [
        {
          "question": "Bagaimana cara menggunakan kalkulator segitiga 30 60 90 ini?",
          "answer": "Cukup pilih nilai yang ingin Anda hitung, masukkan sisi yang sudah Anda ketahui, dan alat akan menggunakan rasio yang benar untuk menemukan jawabannya."
        },
        {
          "question": "Sisi mana yang merupakan kaki pendek dan kaki panjang?",
          "answer": "Kaki pendek selalu berhadapan dengan sudut 30 derajat, sedangkan kaki panjang selalu berhadapan dengan sudut 60 derajat."
        },
        {
          "question": "Apa rumus mencari sisi miring dari kaki pendek?",
          "answer": "Rumusnya adalah c = 2a, artinya sisi miringnya sama dengan dua kali panjang kaki pendeknya."
        },
        {
          "question": "Apa maksud dari hasil sisi panjang?",
          "answer": "Hasil kaki panjang memberi tahu Anda tinggi atau alas tepat yang diperlukan agar sesuai dengan sisi lainnya sekaligus menjaga sudut 30 dan 60 derajat tetap utuh."
        },
        {
          "question": "Bisakah saya menemukan kaki pendek dari kaki panjang?",
          "answer": "Ya, Anda dapat mencari kaki pendek dengan membagi kaki panjang dengan akar kuadrat 3."
        },
        {
          "question": "Mengapa kita mengalikannya dengan akar kuadrat dari 3?",
          "answer": "Mengalikan dengan akar kuadrat dari 3 adalah aturan geometri tetap untuk jenis segitiga ini, menghubungkan kaki pendek ke kaki panjang secara matematis."
        }
      ],
      "ui": {
        "modeTitle": "Mode Kalkulator",
        "modeSelectLabel": "Pilih mode kalkulator",
        "formulaHeading": "Rumus",
        "diagramHeading": "Diagram Segitiga",
        "howToUseHeading": "Cara Menggunakan Kalkulator Ini",
        "examplesHeading": "Contoh Langkah demi Langkah",
        "resultMeaningHeading": "Apa Arti Hasilnya",
        "sideRatioHeading": "Rasio Sisi",
        "useCasesHeading": "Kapan Menggunakan Kalkulator Ini",
        "commonMistakesHeading": "Kesalahan Umum",
        "relatedHeading": "Kalkulator Terkait",
        "faqHeading": "FAQ",
        "faqDescription": "Jawaban atas pertanyaan penyelesaian segitiga siku-siku yang paling umum.",
        "diagramAriaLabel45": "Diagram Segitiga 45-45-90",
        "diagramAriaLabel30": "Diagram Segitiga 30-60-90",
        "calculatorMessages": {
          "positive": "Silakan masukkan nilai positif.",
          "invalid": "Nilai masukan harus lebih besar dari 0."
        }
      }
    }
  },
  "ar": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 حاسبة المثلثات",
      "metaTitle": "حاسبة المثلثات 45 45 90 | البحث عن الجانبين والمساحة والمحيط",
      "metaDescription": "استخدم حاسبة المثلث 45 45 90 للعثور على الوتر والساق والمساحة ومحيط المثلث القائم الزاوية متساوي الساقين باستخدام الصيغ والخطوات.",
      "badge": "حاسبة مثلث قائم خاص",
      "parentLabel": "حاسبة مثلث قائم خاص",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "العثور على الوتر من الساق",
          "heading": "العثور على الوتر من الساق",
          "calculator": {
            "outputLabel": "الوتر c",
            "outputUnit": "وحدات",
            "fields": [
              {
                "key": "a",
                "label": "الساق a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "ابحث عن الساق من الوتر",
          "heading": "ابحث عن الساق من الوتر",
          "calculator": {
            "outputLabel": "الساق a",
            "outputUnit": "وحدات",
            "fields": [
              {
                "key": "c",
                "label": "الوتر c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "البحث عن المنطقة من الساق",
          "heading": "البحث عن المنطقة من الساق",
          "calculator": {
            "outputLabel": "المنطقة",
            "outputUnit": "وحدات مربعة",
            "fields": [
              {
                "key": "a",
                "label": "الساق a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "العثور على محيط من الساق",
          "heading": "العثور على محيط من الساق",
          "calculator": {
            "outputLabel": "محيط P",
            "outputUnit": "وحدات",
            "fields": [
              {
                "key": "a",
                "label": "الساق a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "استخدم حاسبة المثلث 45-45-90 للعثور بسرعة على الوتر والساق والمساحة ومحيط أي مثلث قائم الزاوية متساوي الساقين باستخدام صيغ ونسب المثلث 45 45 90 القياسية."
      ],
      "calculatorNote": "يجب أن تكون جميع قيم الإدخال أكبر من 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "مفتاح مخطط المثلث",
        "notes": [
          "الساق أ تمثل الضلعين المتساويين للمثلث القائم متساوي الساقين.",
          "الوتر c هو الضلع الأطول المقابل للزاوية 90°.",
          "كلتا الزاويتين الحادتين قياسهما 45 درجة بالضبط."
        ]
      },
      "howToUse": [
        "اختر وضع الآلة الحاسبة 45 45 90 بناءً على ما تعرفه بالفعل.",
        "أدخل القيمة المعروفة (إما الساق أو الوتر).",
        "تأكد من أن المدخلات الخاصة بك أكبر من 0.",
        "اقرأ النتيجة المحسوبة مباشرة من حقل إخراج حاسبة المثلث الأيمن متساوي الساقين."
      ],
      "example": [
        {
          "title": "مثال 1: أوجد الوتر عندما يكون a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "مثال 2: ابحث عن الساق عندما يكون c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "مثال 3: أوجد المساحة عندما يكون a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "تمثل النتائج التي تحصل عليها الأبعاد المادية لمثلثك. الساق المحسوبة أو الوتر هو طول الجانب الدقيق المطلوب للحفاظ على زوايا 45 درجة.",
        "يساعدك استخدام حاسبة المساحة 45 45 90 وميزات حاسبة المحيط 45 45 90 على فهم إجمالي المساحة ثنائية الأبعاد داخل المثلث والمسافة الإجمالية حول حوافه."
      ],
      "sideRatio": [
        "نسبة الجوانب لكل مثلث 45 45 90 هي a : a : a√2.",
        "هذا يعني أن كلا الساقين دائمًا بنفس الطول، والوتر هو دائمًا طول الساق مضروبًا في الجذر التربيعي لـ 2."
      ],
      "useCases": [
        "حل مسائل الواجبات المنزلية في الهندسة وعلم المثلثات كآلة حاسبة للجانب المفقود 45 45 90.",
        "حساب أبعاد الإنشاءات ذات الأساس المربع أو القطع القطرية باستخدام صيغة المثلث القائم الزاوية متساوي الساقين.",
        "تصميم الشبكات متساوية القياس وصياغة الزوايا القياسية.",
        "إيجاد أقصر مسافة عبر قطر مربع باستخدام حاسبة الوتر 45 45 90."
      ],
      "commonMistakes": [
        "استخدام نسب 30 60 90 عن طريق الخطأ.",
        "متناسين أن كلا الساقين متساويتان.",
        "استخدام c = 2a بدلاً من c = a × √2.",
        "القسمة على 2 بدلاً من √2 عند إيجاد الساق.",
        "نسيان تربيع الساق عند حساب المساحة."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "حاسبة المثلث الأيمن الخاصة"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "آلة حاسبة المثلثات 30 60 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "حاسبة جانب المثلث الأيمن"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "حاسبة مساحة المثلث الأيمن"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "حاسبة محيط المثلث الأيمن"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "حاسبة الوتر في المثلث الأيمن"
        }
      ],
      "faqs": [
        {
          "question": "ما هي آلة حاسبة المثلث 45 45 90؟",
          "answer": "إنها أداة محددة مصممة لحل المثلث القائم الزاوية متساوي الساقين من خلال إيجاد الوتر أو الساق أو المساحة أو المحيط بناءً على نسب الأضلاع الثابتة."
        },
        {
          "question": "ما هو المثلث القائم الزاوية متساوي الساقين؟",
          "answer": "المثلث القائم متساوي الساقين هو مثلث قائم حيث كلا الساقين متطابقتان في الطول، والزاوية غير القائمة هي 45 درجة بالضبط."
        },
        {
          "question": "ما هي صيغة الوتر في المثلث 45 45 90؟",
          "answer": "صيغة إيجاد الوتر هي c = a × √2، حيث a هو طول ساق واحدة."
        },
        {
          "question": "ماذا تعني المساحة المحسوبة؟",
          "answer": "نتيجة المساحة تعني إجمالي المساحة المسطحة الموجودة داخل الجوانب الثلاثة للمثلث."
        },
        {
          "question": "هل يمكنني العثور على الساق إذا كنت أعرف الوتر فقط؟",
          "answer": "نعم، يمكنك بسهولة العثور على الساق عن طريق أخذ الوتر وتقسيمه على الجذر التربيعي لـ 2."
        },
        {
          "question": "لماذا تكون الأرجل متساوية دائما؟",
          "answer": "ونظرًا لأن قياس كل من الزاويتين المتقابلتين هو 45 درجة، فإن الأضلاع المقابلة لهاتين الزاويتين يجب أن تكون متساوية أيضًا."
        }
      ],
      "ui": {
        "modeTitle": "وضع الحاسبة",
        "modeSelectLabel": "اختر وضع الآلة الحاسبة",
        "formulaHeading": "صيغة",
        "diagramHeading": "مخطط المثلث",
        "howToUseHeading": "كيفية استخدام هذه الآلة الحاسبة",
        "examplesHeading": "أمثلة خطوة بخطوة",
        "resultMeaningHeading": "ماذا تعني النتيجة",
        "sideRatioHeading": "النسبة الجانبية",
        "useCasesHeading": "متى تستخدم هذه الآلة الحاسبة",
        "commonMistakesHeading": "الأخطاء الشائعة",
        "relatedHeading": "الآلات الحاسبة ذات الصلة",
        "faqHeading": "الأسئلة الشائعة",
        "faqDescription": "إجابات على الأسئلة الأكثر شيوعًا لحل المثلث الأيمن.",
        "diagramAriaLabel45": "مخطط المثلث 45-45-90",
        "diagramAriaLabel30": "مخطط المثلث 30-60-90",
        "calculatorMessages": {
          "positive": "الرجاء إدخال قيمة إيجابية.",
          "invalid": "يجب أن تكون قيمة الإدخال أكبر من 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 حاسبة المثلثات",
      "metaTitle": "حاسبة المثلثات 30 60 90 | ابحث عن الساق القصيرة والساق الطويلة والوتر",
      "metaDescription": "استخدم حاسبة المثلث 30 60 90 للعثور على الضلع القصير والضلع الطويل والوتر والمساحة والمحيط باستخدام الصيغ والخطوات.",
      "badge": "حاسبة مثلث قائم خاص",
      "parentLabel": "حاسبة مثلث قائم خاص",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "ابحث عن الساق الطويلة من الساق القصيرة",
          "heading": "ابحث عن الساق الطويلة من الساق القصيرة",
          "calculator": {
            "outputLabel": "ساق طويلة",
            "outputUnit": "وحدات",
            "fields": [
              {
                "key": "a",
                "label": "ساق قصيرة a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "أوجد الوتر من الساق القصيرة",
          "heading": "أوجد الوتر من الساق القصيرة",
          "calculator": {
            "outputLabel": "الوتر c",
            "outputUnit": "وحدات",
            "fields": [
              {
                "key": "a",
                "label": "ساق قصيرة a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "ابحث عن الساق القصيرة من الوتر",
          "heading": "ابحث عن الساق القصيرة من الوتر",
          "calculator": {
            "outputLabel": "ساق قصيرة a",
            "outputUnit": "وحدات",
            "fields": [
              {
                "key": "c",
                "label": "الوتر c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "ابحث عن الساق القصيرة من الساق الطويلة",
          "heading": "ابحث عن الساق القصيرة من الساق الطويلة",
          "calculator": {
            "outputLabel": "ساق قصيرة a",
            "outputUnit": "وحدات",
            "fields": [
              {
                "key": "b",
                "label": "ساق طويلة",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "ابحث عن الساق الطويلة من الوتر",
          "heading": "ابحث عن الساق الطويلة من الوتر",
          "calculator": {
            "outputLabel": "ساق طويلة",
            "outputUnit": "وحدات",
            "fields": [
              {
                "key": "c",
                "label": "الوتر c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "البحث عن المنطقة من الساق القصيرة",
          "heading": "البحث عن المنطقة من الساق القصيرة",
          "calculator": {
            "outputLabel": "المنطقة",
            "outputUnit": "وحدات مربعة",
            "fields": [
              {
                "key": "a",
                "label": "ساق قصيرة a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "العثور على محيط من الساق القصيرة",
          "heading": "العثور على محيط من الساق القصيرة",
          "calculator": {
            "outputLabel": "محيط P",
            "outputUnit": "وحدات",
            "fields": [
              {
                "key": "a",
                "label": "ساق قصيرة a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "استخدم حاسبة المثلث 30-60-90 للعثور بسهولة على الضلع القصير والضلع الطويل والوتر والمساحة والمحيط باستخدام صيغة ونسبة المثلث 30 60 90 بالضبط."
      ],
      "calculatorNote": "يجب أن تكون جميع قيم الإدخال أكبر من 0.",
      "formulaSection": {
        "formulas": [
          "\\text{القائمة الطويلة} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{القائمة الطويلة} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{القائمة القصيرة} + \\text{القائمة الطويلة} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "مفتاح مخطط المثلث",
        "notes": [
          "الساق القصيرة a تقابل الزاوية 30 درجة.",
          "الساق الطويلة a√3 مقابل زاوية 60 درجة.",
          "الوتر ج هو بالضبط ضعف طول الساق القصيرة أ."
        ]
      },
      "howToUse": [
        "حدد ما تريد العثور عليه من أوضاع الآلة الحاسبة 30 60 90.",
        "أدخل طول الجانب المعروف (الساق القصيرة، أو الساق الطويلة، أو الوتر).",
        "تأكد من أن الرقم موجب وأكبر من الصفر.",
        "ضع علامة في مربع النتائج للحصول على إجابتك ذات الحجم المثالي من أداة حل المثلثات 30 60 90."
      ],
      "example": [
        {
          "title": "مثال 1: أوجد الساق الطويلة والوتر عندما تكون الساق القصيرة a = 5.",
          "steps": [
            "\\text{القائمة الطويلة} = a \\times \\sqrt{3}",
            "\\text{القائمة الطويلة} = 5 \\times \\sqrt{3}",
            "\\text{القائمة الطويلة} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "مثال 2: ابحث عن الساق القصيرة عندما يكون c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "مثال 3: أوجد الساق الطويلة من الوتر ج = 10.",
          "steps": [
            "\\text{القائمة الطويلة} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{القائمة الطويلة} = 5\\sqrt{3}",
            "\\text{القائمة الطويلة} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "تُظهر جوانب المثلث 30 60 90 المحسوبة بالضبط المدة التي يحتاجها كل جزء من المثلث للحفاظ على زوايا 30 و60 درجة. فهي متناسبة تماما.",
        "تمنحك حاسبة المساحة 30 60 90 ونتائج حاسبة المحيط 30 60 90 الحجم الدقيق ثنائي الأبعاد والطول الإجمالي للمثلث الخاص بك."
      ],
      "sideRatio": [
        "نسبة الجوانب القياسية للمثلث 30 60 90 هي a : a√3 : 2a.",
        "الساق القصيرة هي a، والساق الطويلة هي مضروبة في الجذر التربيعي لـ 3، والوتر هو بالضبط ضعف الساق القصيرة."
      ],
      "useCases": [
        "التحقق من مهام علم المثلثات التي تتضمن مثلثات قائمة خاصة كآلة حاسبة للجانب المفقود 30 60 90.",
        "تحديد ارتفاع مثلث متساوي الأضلاع باستخدام الآلة الحاسبة الطويلة 30 60 90.",
        "صياغة الزوايا والدعامات الهيكلية في الهندسة أو الهندسة المعمارية.",
        "حل مسائل المتجهات المعقدة في الفيزياء باستخدام حاسبة الوتر 30 60 90."
      ],
      "commonMistakes": [
        "الخلط بين الساق القصيرة والساق الطويلة.",
        "استخدام √2 بدلاً من √3 لحساب الساق الطويلة.",
        "أعتقد أن الوتر يساوي a√3 بدلاً من 2a.",
        "استخدام قيمة الساق الطويلة كالساق القصيرة عن طريق الصدفة.",
        "متناسين أن الوتر هو بالضبط ضعف الساق القصيرة."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "حاسبة المثلث الأيمن الخاصة"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "آلة حاسبة المثلثات 45 45 90"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "حاسبة جانب المثلث الأيمن"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "حاسبة مساحة المثلث الأيمن"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "حاسبة محيط المثلث الأيمن"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "حاسبة الوتر في المثلث الأيمن"
        }
      ],
      "faqs": [
        {
          "question": "كيف يمكنني استخدام حاسبة المثلثات 30 60 90؟",
          "answer": "ما عليك سوى اختيار القيمة التي تريد حسابها، وإدخال الجانب الذي تعرفه بالفعل، وستستخدم الأداة النسبة الصحيحة للعثور على الإجابة."
        },
        {
          "question": "أي جانب هو الساق القصيرة والساق الطويلة؟",
          "answer": "تكون الساق القصيرة دائمًا معاكسة للزاوية 30 درجة، بينما تكون الساق الطويلة دائمًا معاكسة للزاوية 60 درجة."
        },
        {
          "question": "ما هي صيغة العثور على الوتر من الساق القصيرة؟",
          "answer": "الصيغة هي c = 2a، مما يعني أن الوتر هو بالضبط ضعف طول الساق القصيرة."
        },
        {
          "question": "ماذا تعني نتيجة الساق الطويلة؟",
          "answer": "تخبرك نتيجة الساق الطويلة بالارتفاع الدقيق أو القاعدة المطلوبة لتتناسب مع الجوانب الأخرى مع الحفاظ على زوايا 30 و60 درجة سليمة."
        },
        {
          "question": "هل يمكنني العثور على الساق القصيرة من الساق الطويلة؟",
          "answer": "نعم، يمكنك العثور على الساق القصيرة عن طريق قسمة الساق الطويلة على الجذر التربيعي لـ 3."
        },
        {
          "question": "لماذا نضرب في الجذر التربيعي لـ 3؟",
          "answer": "والضرب في الجذر التربيعي لـ 3 هو قاعدة هندسية ثابتة لهذا النوع من المثلثات، حيث تربط الساق القصيرة بالساق الطويلة رياضياً."
        }
      ],
      "ui": {
        "modeTitle": "وضع الحاسبة",
        "modeSelectLabel": "اختر وضع الآلة الحاسبة",
        "formulaHeading": "صيغة",
        "diagramHeading": "مخطط المثلث",
        "howToUseHeading": "كيفية استخدام هذه الآلة الحاسبة",
        "examplesHeading": "أمثلة خطوة بخطوة",
        "resultMeaningHeading": "ماذا تعني النتيجة",
        "sideRatioHeading": "النسبة الجانبية",
        "useCasesHeading": "متى تستخدم هذه الآلة الحاسبة",
        "commonMistakesHeading": "الأخطاء الشائعة",
        "relatedHeading": "الآلات الحاسبة ذات الصلة",
        "faqHeading": "الأسئلة الشائعة",
        "faqDescription": "إجابات على الأسئلة الأكثر شيوعًا لحل المثلث الأيمن.",
        "diagramAriaLabel45": "مخطط المثلث 45-45-90",
        "diagramAriaLabel30": "مخطط المثلث 30-60-90",
        "calculatorMessages": {
          "positive": "الرجاء إدخال قيمة إيجابية.",
          "invalid": "يجب أن تكون قيمة الإدخال أكبر من 0."
        }
      }
    }
  },
  "bg": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 Триъгълен калкулатор",
      "metaTitle": "45 45 90 Триъгълен калкулатор | Намерете страни, площ и периметър",
      "metaDescription": "Използвайте този калкулатор за триъгълник 45 45 90, за да намерите хипотенузата, катета, лицето и периметъра на равнобедрен правоъгълен триъгълник с формули и стъпки.",
      "badge": "Специален калкулатор за правоъгълен триъгълник",
      "parentLabel": "Специален калкулатор за правоъгълен триъгълник",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Намерете хипотенузата от крака",
          "heading": "Намерете хипотенузата от крака",
          "calculator": {
            "outputLabel": "Хипотенуза c",
            "outputUnit": "единици",
            "fields": [
              {
                "key": "a",
                "label": "Крак a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Намерете катет от хипотенузата",
          "heading": "Намерете катет от хипотенузата",
          "calculator": {
            "outputLabel": "Крак a",
            "outputUnit": "единици",
            "fields": [
              {
                "key": "c",
                "label": "Хипотенуза c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Намерете площ от крака",
          "heading": "Намерете площ от крака",
          "calculator": {
            "outputLabel": "Площ",
            "outputUnit": "квадратни единици",
            "fields": [
              {
                "key": "a",
                "label": "Крак a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Намерете периметъра от крака",
          "heading": "Намерете периметъра от крака",
          "calculator": {
            "outputLabel": "Периметър P",
            "outputUnit": "единици",
            "fields": [
              {
                "key": "a",
                "label": "Крак a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Използвайте този калкулатор за триъгълник 45-45-90, за да намерите бързо хипотенузата, катета, площта и периметъра на всеки равнобедрен правоъгълен триъгълник, като използвате стандартни формули и съотношения на триъгълник 45 45 90."
      ],
      "calculatorNote": "Всички входни стойности трябва да са по-големи от 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Ключ за диаграма на триъгълник",
        "notes": [
          "Крак a представлява двете равни страни на равнобедрения правоъгълен триъгълник.",
          "Хипотенузата c е най-дългата страна срещу ъгъла 90°.",
          "И двата остри ъгъла са точно 45 градуса."
        ]
      },
      "howToUse": [
        "Изберете режима на калкулатор 45 45 90 въз основа на това, което вече знаете.",
        "Въведете известната стойност (катета или хипотенузата).",
        "Уверете се, че въведеното от вас е по-голямо от 0.",
        "Прочетете изчисления резултат директно от изходното поле на калкулатора за равнобедрен правоъгълен триъгълник."
      ],
      "example": [
        {
          "title": "Пример 1: Намерете хипотенузата, когато a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Пример 2: Намерете крака, когато c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Пример 3: Намерете площ, когато a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Резултатите, които получавате, представляват физическите размери на вашия триъгълник. Изчисленият крак или хипотенуза е точната дължина на страната, необходима за поддържане на ъглите от 45 градуса.",
        "Използването на нашите функции за калкулатор за площ 45 45 90 и калкулатор за периметър 45 45 90 ви помага да разберете общото 2D пространство вътре в триъгълника и общото разстояние около краищата му."
      ],
      "sideRatio": [
        "Съотношението на страните за всеки 45 45 90 триъгълник е a : a : a√2.",
        "Това означава, че и двата катета винаги са с еднаква дължина, а хипотенузата винаги е дължината на катета, умножена по корен квадратен от 2."
      ],
      "useCases": [
        "Решаване на домашни задачи по геометрия и тригонометрия като 45 45 90 калкулатор с липсваща страна.",
        "Изчисляване на размери за квадратни конструкции или диагонални разрези с формулата за равнобедрен правоъгълен триъгълник.",
        "Проектиране на изометрични мрежи и чертане на стандартни ъгли.",
        "Намиране на най-късото разстояние по квадратен диагонал с помощта на калкулатора за хипотенуза 45 45 90."
      ],
      "commonMistakes": [
        "Използване на 30 60 90 съотношения по погрешка.",
        "Забравяйки, че двата крака са равни.",
        "Използване на c = 2a вместо c = a × √2.",
        "Деление на 2 вместо √2 при намиране на крака.",
        "Забравихте да повдигнете крака на квадрат при изчисляването на площта."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "специален калкулатор за правоъгълен триъгълник"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 калкулатор на триъгълник"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "калкулатор на страната на правоъгълен триъгълник"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "калкулатор за площ на правоъгълен триъгълник"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "калкулатор за периметър на правоъгълен триъгълник"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "калкулатор за хипотенуза на правоъгълен триъгълник"
        }
      ],
      "faqs": [
        {
          "question": "Какво представлява триъгълният калкулатор 45 45 90?",
          "answer": "Това е специфичен инструмент, предназначен за решаване на равнобедрен правоъгълен триъгълник чрез намиране на хипотенузата, крака, площта или периметъра въз основа на фиксираните съотношения на страните."
        },
        {
          "question": "Какво е равнобедрен правоъгълен триъгълник?",
          "answer": "Равнобедрен правоъгълен триъгълник е правоъгълен триъгълник, при който двата катета са еднакви по дължина и двата неправи ъгъла са точно 45 градуса."
        },
        {
          "question": "Каква е формулата за хипотенузата на 45 45 90 триъгълник?",
          "answer": "Формулата за намиране на хипотенузата е c = a × √2, където a е дължината на единия катет."
        },
        {
          "question": "Какво означава изчислената площ?",
          "answer": "Резултатът от площта означава общото количество плоско пространство, съдържащо се вътре в трите страни на триъгълника."
        },
        {
          "question": "Мога ли да намеря катета, ако знам само хипотенузата?",
          "answer": "Да, можете лесно да намерите катета, като вземете хипотенузата и я разделите на корен квадратен от 2."
        },
        {
          "question": "Защо краката винаги са равни?",
          "answer": "Тъй като и противоположните ъгли са 45 градуса, страните срещу тези ъгли също трябва да са равни една на друга."
        }
      ],
      "ui": {
        "modeTitle": "Режим калкулатор",
        "modeSelectLabel": "Изберете режим на калкулатор",
        "formulaHeading": "Формула",
        "diagramHeading": "Триъгълна диаграма",
        "howToUseHeading": "Как да използвате този калкулатор",
        "examplesHeading": "Примери стъпка по стъпка",
        "resultMeaningHeading": "Какво означава резултатът",
        "sideRatioHeading": "Странично съотношение",
        "useCasesHeading": "Кога да използвате този калкулатор",
        "commonMistakesHeading": "Често срещани грешки",
        "relatedHeading": "Свързани калкулатори",
        "faqHeading": "Често задавани въпроси",
        "faqDescription": "Отговори на най-често срещаните въпроси за решаване на правоъгълен триъгълник.",
        "diagramAriaLabel45": "45-45-90 Триъгълна диаграма",
        "diagramAriaLabel30": "30-60-90 Триъгълна диаграма",
        "calculatorMessages": {
          "positive": "Моля, въведете положителна стойност.",
          "invalid": "Въведената стойност трябва да е по-голяма от 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 Триъгълен калкулатор",
      "metaTitle": "30 60 90 Триъгълен калкулатор | Намерете къс крат, дълъг крат и хипотенуза",
      "metaDescription": "Използвайте този калкулатор на триъгълник 30 60 90, за да намерите късия катет, дългия катет, хипотенузата, площта и периметъра с формули и стъпки.",
      "badge": "Специален калкулатор за правоъгълен триъгълник",
      "parentLabel": "Специален калкулатор за правоъгълен триъгълник",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Намерете дълъг крак от къс крак",
          "heading": "Намерете дълъг крак от къс крак",
          "calculator": {
            "outputLabel": "Дълъг крак",
            "outputUnit": "единици",
            "fields": [
              {
                "key": "a",
                "label": "Къс крак a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Намерете хипотенузата от късия крак",
          "heading": "Намерете хипотенузата от късия крак",
          "calculator": {
            "outputLabel": "Хипотенуза c",
            "outputUnit": "единици",
            "fields": [
              {
                "key": "a",
                "label": "Къс крак a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Намерете къс крак от хипотенузата",
          "heading": "Намерете къс крак от хипотенузата",
          "calculator": {
            "outputLabel": "Къс крак a",
            "outputUnit": "единици",
            "fields": [
              {
                "key": "c",
                "label": "Хипотенуза c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Намерете къс крак от дълъг крак",
          "heading": "Намерете къс крак от дълъг крак",
          "calculator": {
            "outputLabel": "Къс крак a",
            "outputUnit": "единици",
            "fields": [
              {
                "key": "b",
                "label": "Дълъг крак",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Намерете дълъг катет от хипотенузата",
          "heading": "Намерете дълъг катет от хипотенузата",
          "calculator": {
            "outputLabel": "Дълъг крак",
            "outputUnit": "единици",
            "fields": [
              {
                "key": "c",
                "label": "Хипотенуза c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Намерете зона от къс крак",
          "heading": "Намерете зона от къс крак",
          "calculator": {
            "outputLabel": "Площ",
            "outputUnit": "квадратни единици",
            "fields": [
              {
                "key": "a",
                "label": "Къс крак a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Намерете периметър от къс крак",
          "heading": "Намерете периметър от къс крак",
          "calculator": {
            "outputLabel": "Периметър P",
            "outputUnit": "единици",
            "fields": [
              {
                "key": "a",
                "label": "Къс крак a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Използвайте този калкулатор за триъгълник 30-60-90, за да намерите лесно късия катет, дългия катет, хипотенузата, площта и периметъра, като използвате точната формула и отношение на триъгълника 30 60 90."
      ],
      "calculatorNote": "Всички входни стойности трябва да са по-големи от 0.",
      "formulaSection": {
        "formulas": [
          "\\text{дълъг катет} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{дълъг катет} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{къс катет} + \\text{дълъг катет} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Ключ за диаграма на триъгълник",
        "notes": [
          "Късият крак a е срещу ъгъла от 30 градуса.",
          "Дългият крак a√3 е срещу ъгъла от 60 градуса.",
          "Хипотенузата c е точно два пъти по-голяма от дължината на късия катет a."
        ]
      },
      "howToUse": [
        "Изберете какво искате да намерите от режимите на калкулатора 30 60 90.",
        "Въведете известната ви дължина на страната (къс катет, дълъг катет или хипотенуза).",
        "Проверете дали числото е положително и по-голямо от нула.",
        "Поставете отметка в полето с резултати за вашия идеално мащабиран отговор от нашия 30 60 90 решаващ триъгълник."
      ],
      "example": [
        {
          "title": "Пример 1: Намерете дълъг катет и хипотенуза, когато къс катет a = 5.",
          "steps": [
            "\\text{дълъг катет} = a \\times \\sqrt{3}",
            "\\text{дълъг катет} = 5 \\times \\sqrt{3}",
            "\\text{дълъг катет} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Пример 2: Намерете къс крак, когато c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Пример 3: Намерете дълъг крак от хипотенузата c = 10.",
          "steps": [
            "\\text{дълъг катет} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{дълъг катет} = 5\\sqrt{3}",
            "\\text{дълъг катет} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Изчислените страни на триъгълника 30 60 90 показват точно колко дълга трябва да бъде всяка част от триъгълника, за да поддържа ъглите от 30 и 60 градуса. Те са напълно пропорционални.",
        "Резултатите от калкулатора за площ 30 60 90 и калкулатора за периметър 30 60 90 ви дават точния ограничен 2D размер и общата дължина на контура на вашия триъгълник."
      ],
      "sideRatio": [
        "Стандартното съотношение на страните за триъгълник 30 60 90 е a : a√3 : 2a.",
        "Късият катет е a, дългият катет е a по корен квадратен от 3, а хипотенузата е точно два пъти по късия катет."
      ],
      "useCases": [
        "Проверка на задачи по тригонометрия, включващи специални правоъгълни триъгълници като 30 60 90 калкулатор за липсваща страна.",
        "Определяне на височината на равностранен триъгълник с помощта на калкулатора за дълъг крат 30 60 90.",
        "Чертеж на ъгли и структурни опори в инженерството или архитектурата.",
        "Решаване на сложни векторни задачи по физика с калкулатора за хипотенуза 30 60 90."
      ],
      "commonMistakes": [
        "Смесване на късия и дългия крак.",
        "Използване на √2 вместо √3 за изчисление на дългия етап.",
        "Мислейки, че хипотенузата е равна на a√3 вместо на 2a.",
        "Използване на стойността на дългия крак като къс крак случайно.",
        "Забравяме, че хипотенузата е точно удвоена на късия катет."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "специален калкулатор за правоъгълен триъгълник"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 калкулатор на триъгълник"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "калкулатор на страната на правоъгълен триъгълник"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "калкулатор за площ на правоъгълен триъгълник"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "калкулатор за периметър на правоъгълен триъгълник"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "калкулатор за хипотенуза на правоъгълен триъгълник"
        }
      ],
      "faqs": [
        {
          "question": "Как да използвам този триъгълен калкулатор 30 60 90?",
          "answer": "Просто изберете стойността, която искате да изчислите, въведете страната, която вече знаете, и инструментът ще използва правилното съотношение, за да намери отговора."
        },
        {
          "question": "Коя страна е късият и дългият крак?",
          "answer": "Късият крак винаги е срещу ъгъла от 30 градуса, докато дългият крак винаги е срещу ъгъла от 60 градуса."
        },
        {
          "question": "Каква е формулата за намиране на хипотенузата от късия крак?",
          "answer": "Формулата е c = 2a, което означава, че хипотенузата е точно удвоена от дължината на късия катет."
        },
        {
          "question": "Какво означава резултатът за дълъг крак?",
          "answer": "Резултатът от дългия крак ви казва точната височина или основа, необходима за съвпадение с другите страни, като същевременно запазвате ъглите от 30 и 60 градуса непокътнати."
        },
        {
          "question": "Мога ли да намеря късия крак от дългия крак?",
          "answer": "Да, можете да намерите късия крак, като разделите дългия крак на корен квадратен от 3."
        },
        {
          "question": "Защо умножаваме по корен квадратен от 3?",
          "answer": "Умножаването по корен квадратен от 3 е фиксирано геометрично правило за този тип триъгълник, което математически свързва късия крак с дългия крак."
        }
      ],
      "ui": {
        "modeTitle": "Режим калкулатор",
        "modeSelectLabel": "Изберете режим на калкулатор",
        "formulaHeading": "Формула",
        "diagramHeading": "Триъгълна диаграма",
        "howToUseHeading": "Как да използвате този калкулатор",
        "examplesHeading": "Примери стъпка по стъпка",
        "resultMeaningHeading": "Какво означава резултатът",
        "sideRatioHeading": "Странично съотношение",
        "useCasesHeading": "Кога да използвате този калкулатор",
        "commonMistakesHeading": "Често срещани грешки",
        "relatedHeading": "Свързани калкулатори",
        "faqHeading": "Често задавани въпроси",
        "faqDescription": "Отговори на най-често срещаните въпроси за решаване на правоъгълен триъгълник.",
        "diagramAriaLabel45": "45-45-90 Триъгълна диаграма",
        "diagramAriaLabel30": "30-60-90 Триъгълна диаграма",
        "calculatorMessages": {
          "positive": "Моля, въведете положителна стойност.",
          "invalid": "Въведената стойност трябва да е по-голяма от 0."
        }
      }
    }
  },
  "tr": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 Üçgen Hesaplayıcı",
      "metaTitle": "45 45 90 Üçgen Hesaplayıcı | Kenarları, Alanı ve Çevreyi Bulma",
      "metaDescription": "Formüller ve adımlarla bir ikizkenar dik üçgenin hipotenüsünü, kenarını, alanını ve çevresini bulmak için bu 45 45 90 üçgen hesaplayıcısını kullanın.",
      "badge": "Özel Dik Üçgen Hesaplayıcı",
      "parentLabel": "Özel Dik Üçgen Hesaplayıcı",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Bacaktan hipotenüsü bulun",
          "heading": "Bacaktan hipotenüsü bulun",
          "calculator": {
            "outputLabel": "Hipotenüs c",
            "outputUnit": "birimler",
            "fields": [
              {
                "key": "a",
                "label": "Bacak a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Hipotenüsten itibaren bacağı bulun",
          "heading": "Hipotenüsten itibaren bacağı bulun",
          "calculator": {
            "outputLabel": "Bacak a",
            "outputUnit": "birimler",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenüs c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Bacağından alanı bul",
          "heading": "Bacağından alanı bul",
          "calculator": {
            "outputLabel": "Alan",
            "outputUnit": "metrekare",
            "fields": [
              {
                "key": "a",
                "label": "Bacak a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Bacağından çevreyi bul",
          "heading": "Bacağından çevreyi bul",
          "calculator": {
            "outputLabel": "Çevre P",
            "outputUnit": "birimler",
            "fields": [
              {
                "key": "a",
                "label": "Bacak a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Standart 45 45 90 üçgen formüllerini ve oranlarını kullanarak herhangi bir ikizkenar dik üçgenin hipotenüsünü, kenarını, alanını ve çevresini hızla bulmak için bu 45-45-90 üçgen hesaplayıcısını kullanın."
      ],
      "calculatorNote": "Tüm giriş değerleri 0'dan büyük olmalıdır.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Üçgen Diyagram Anahtarı",
        "notes": [
          "A ayağı ikizkenar dik üçgenin iki eşit kenarını temsil eder.",
          "Hipotenüs c, 90° açısının karşısındaki en uzun kenardır.",
          "Her iki dar açı da tam olarak 45 derecedir."
        ]
      },
      "howToUse": [
        "Zaten bildiklerinize göre 45 45 90 hesap makinesi modunu seçin.",
        "Bilinen değeri girin (ya kenar ya da hipotenüs).",
        "Girişinizin 0'dan büyük olduğundan emin olun.",
        "Hesaplanan sonucu doğrudan ikizkenar dik üçgen hesaplayıcı çıktı alanından okuyun."
      ],
      "example": [
        {
          "title": "Örnek 1: a = 5 olduğunda hipotenüsü bulun.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Örnek 2: c = 10 iken ayağı bulun.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Örnek 3: a = 6 olduğunda alanı bulun.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Alacağınız sonuçlar üçgeninizin fiziksel boyutlarını temsil eder. Hesaplanan bacak veya hipotenüs, 45 derecelik açıları korumak için gereken tam kenar uzunluğudur.",
        "45 45 90 alan hesaplayıcımızı ve 45 45 90 çevre hesaplayıcı özelliklerimizi kullanmak, üçgen içindeki toplam 2 boyutlu alanı ve kenarları etrafındaki toplam mesafeyi anlamanıza yardımcı olur."
      ],
      "sideRatio": [
        "Her 45 45 90 üçgeninin kenar oranı a : a : a√2'dur.",
        "Bu, her iki bacağın da her zaman tam olarak aynı uzunlukta olduğu ve hipotenüsün her zaman bacak uzunluğunun 2'nin kareköküyle çarpımı olduğu anlamına gelir."
      ],
      "useCases": [
        "45 45 90 eksik taraf hesaplayıcısı olarak geometri ve trigonometri ödev problemlerini çözme.",
        "İkizkenar dik üçgen formülüyle kare tabanlı yapılar veya çapraz kesimler için boyutların hesaplanması.",
        "İzometrik ızgaraların tasarlanması ve standart açıların çizilmesi.",
        "45 45 90 hipotenüs hesaplayıcısını kullanarak bir kare köşegenindeki en kısa mesafeyi bulma."
      ],
      "commonMistakes": [
        "Yanlışlıkla 30 60 90 oranlarının kullanılması.",
        "Her iki bacağın eşit olduğunu unutmak.",
        "c = a × √2 yerine c = 2a kullanılıyor.",
        "Bacağını bulurken √2 yerine 2'ye bölmek.",
        "Alanı hesaplarken bacağın karesini almayı unutmak."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "özel dik üçgen hesaplayıcı"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 üçgen hesaplayıcı"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "sağ üçgen kenar hesaplayıcı"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "sağ üçgen alan hesaplama"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "sağ üçgenin çevre hesaplaması"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "dik üçgen hipotenüs hesaplayıcısı"
        }
      ],
      "faqs": [
        {
          "question": "45 45 90 üçgen hesaplayıcı nedir?",
          "answer": "Sabit kenar oranlarına göre hipotenüs, kenar, alan veya çevreyi bularak bir ikizkenar dik üçgeni çözmek için tasarlanmış özel bir araçtır."
        },
        {
          "question": "İkizkenar dik üçgen nedir?",
          "answer": "İkizkenar dik üçgen, her iki bacağın da aynı uzunlukta olduğu ve dik olmayan açıların her ikisinin de tam olarak 45 derece olduğu bir dik üçgendir."
        },
        {
          "question": "45 45 90 üçgeninin hipotenüsünün formülü nedir?",
          "answer": "Hipotenüsü bulma formülü c = a × √2'dur; burada a, bir kenarın uzunluğudur."
        },
        {
          "question": "Hesaplanan alan ne anlama geliyor?",
          "answer": "Alan sonucu, üçgenin üç tarafının içinde bulunan toplam düz alan miktarı anlamına gelir."
        },
        {
          "question": "Sadece hipotenüsü bilirsem bacağı bulabilir miyim?",
          "answer": "Evet, hipotenüsü alıp 2'nin kareköküne bölerek kenarı kolayca bulabilirsiniz."
        },
        {
          "question": "Bacaklar neden her zaman eşit?",
          "answer": "Karşılıklı açıların her ikisi de 45 derece olduğundan bu açıların karşısındaki kenarlar da birbirine eşit olmalıdır."
        }
      ],
      "ui": {
        "modeTitle": "Hesap Makinesi Modu",
        "modeSelectLabel": "Hesap makinesi modunu seçin",
        "formulaHeading": "Formül",
        "diagramHeading": "Üçgen Diyagramı",
        "howToUseHeading": "Bu Hesap Makinesi Nasıl Kullanılır?",
        "examplesHeading": "Adım Adım Örnekler",
        "resultMeaningHeading": "Sonuç Ne Anlama Geliyor?",
        "sideRatioHeading": "Yan Oran",
        "useCasesHeading": "Bu Hesap Makinesi Ne Zaman Kullanılmalı",
        "commonMistakesHeading": "Yaygın Hatalar",
        "relatedHeading": "İlgili Hesap Makineleri",
        "faqHeading": "SSS",
        "faqDescription": "En yaygın dik üçgen çözme sorularının yanıtları.",
        "diagramAriaLabel45": "45-45-90 Üçgen Diyagramı",
        "diagramAriaLabel30": "30-60-90 Üçgen Diyagramı",
        "calculatorMessages": {
          "positive": "Lütfen pozitif bir değer girin.",
          "invalid": "Giriş değeri 0'dan büyük olmalıdır."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 Üçgen Hesaplayıcı",
      "metaTitle": "30 60 90 Üçgen Hesaplayıcı | Kısa Bacak, Uzun Bacak ve Hipotenüsü Bulma",
      "metaDescription": "Formüller ve adımlarla kısa kenarı, uzun kenarı, hipotenüsü, alanı ve çevreyi bulmak için bu 30 60 90 üçgen hesaplayıcısını kullanın.",
      "badge": "Özel Dik Üçgen Hesaplayıcı",
      "parentLabel": "Özel Dik Üçgen Hesaplayıcı",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Kısa bacaktan uzun bacağı bulma",
          "heading": "Kısa bacaktan uzun bacağı bulma",
          "calculator": {
            "outputLabel": "Uzun Bacak",
            "outputUnit": "birimler",
            "fields": [
              {
                "key": "a",
                "label": "Kısa bacak a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Kısa bacaktan hipotenüsü bulun",
          "heading": "Kısa bacaktan hipotenüsü bulun",
          "calculator": {
            "outputLabel": "Hipotenüs c",
            "outputUnit": "birimler",
            "fields": [
              {
                "key": "a",
                "label": "Kısa bacak a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Hipotenüsten kısa kenarı bulun",
          "heading": "Hipotenüsten kısa kenarı bulun",
          "calculator": {
            "outputLabel": "Kısa bacak a",
            "outputUnit": "birimler",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenüs c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Uzun bacaktan kısa bacağı bulun",
          "heading": "Uzun bacaktan kısa bacağı bulun",
          "calculator": {
            "outputLabel": "Kısa bacak a",
            "outputUnit": "birimler",
            "fields": [
              {
                "key": "b",
                "label": "Uzun bacak",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Hipotenüsten uzun kenarı bulun",
          "heading": "Hipotenüsten uzun kenarı bulun",
          "calculator": {
            "outputLabel": "Uzun bacak",
            "outputUnit": "birimler",
            "fields": [
              {
                "key": "c",
                "label": "Hipotenüs c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Kısa bacaktan alanı bulun",
          "heading": "Kısa bacaktan alanı bulun",
          "calculator": {
            "outputLabel": "Alan",
            "outputUnit": "metrekare",
            "fields": [
              {
                "key": "a",
                "label": "Kısa bacak a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Kısa bacaktan çevreyi bulun",
          "heading": "Kısa bacaktan çevreyi bulun",
          "calculator": {
            "outputLabel": "Çevre P",
            "outputUnit": "birimler",
            "fields": [
              {
                "key": "a",
                "label": "Kısa bacak a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Tam 30 60 90 üçgen formülünü ve oranını kullanarak kısa kenarı, uzun kenarı, hipotenüsü, alanı ve çevreyi kolayca bulmak için bu 30-60-90 üçgen hesaplayıcısını kullanın."
      ],
      "calculatorNote": "Tüm giriş değerleri 0'dan büyük olmalıdır.",
      "formulaSection": {
        "formulas": [
          "\\text{uzun kenar} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{uzun kenar} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{kısa kenar} + \\text{uzun kenar} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Üçgen Diyagram Anahtarı",
        "notes": [
          "Kısa bacak a 30 derecelik açının karşısındadır.",
          "Uzun bacak a√3 60 derecelik açının karşısındadır.",
          "Hipotenüs c, kısa a bacağının uzunluğunun tam olarak iki katıdır."
        ]
      },
      "howToUse": [
        "30 60 90 hesap makinesi modlarından bulmak istediğiniz şeyi seçin.",
        "Bilinen kenar uzunluğunu girin (kısa kenar, uzun kenar veya hipotenüs).",
        "Sayının pozitif ve sıfırdan büyük olduğunu doğrulayın.",
        "30 60 90 üçgen çözücümüzün mükemmel ölçeklendirilmiş yanıtını görmek için sonuç kutusunu işaretleyin."
      ],
      "example": [
        {
          "title": "Örnek 1: Kısa kenar a = 5 olduğunda uzun kenarı ve hipotenüsü bulun.",
          "steps": [
            "\\text{uzun kenar} = a \\times \\sqrt{3}",
            "\\text{uzun kenar} = 5 \\times \\sqrt{3}",
            "\\text{uzun kenar} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Örnek 2: c = 14 iken kısa bacağı bulun.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Örnek 3: Hipotenüs c = 10'dan uzun kenarı bulun.",
          "steps": [
            "\\text{uzun kenar} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{uzun kenar} = 5\\sqrt{3}",
            "\\text{uzun kenar} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "Hesaplanan 30 60 90 üçgeninin kenarları, 30 ve 60 derecelik açıları korumak için üçgenin her bir parçasının tam olarak ne kadar uzun olması gerektiğini gösterir. Mükemmel orantılıdırlar.",
        "30 60 90 alan hesaplayıcı ve 30 60 90 çevre hesaplayıcı sonuçları size üçgeninizin kesin sınırlı 2B boyutunu ve toplam anahat uzunluğunu verir."
      ],
      "sideRatio": [
        "Bir 30 60 90 üçgeninin standart kenar oranı a : a√3 : 2a'dur.",
        "Kısa kenar a'dır, uzun kenar a çarpı 3'ün kareköküdür ve hipotenüs kısa kenarın tam iki katıdır."
      ],
      "useCases": [
        "30 60 90 eksik kenar hesaplayıcısı olarak özel dik üçgenleri içeren trigonometri atamalarını kontrol etme.",
        "30 60 90 uzun bacak hesaplayıcısını kullanarak eşkenar üçgenin yüksekliğini belirleme.",
        "Mühendislik veya mimaride açıların ve yapısal desteklerin çizimi.",
        "30 60 90 hipotenüs hesaplayıcıyla fizikteki karmaşık vektör problemlerini çözme."
      ],
      "commonMistakes": [
        "Kısa bacak ile uzun bacağın karıştırılması.",
        "Uzun bacak hesaplaması için √3 yerine √2 kullanılması.",
        "Hipotenüsün 2a yerine a√3'ya eşit olduğunu düşünmek.",
        "Uzun bacak değerinin kazara kısa bacak olarak kullanılması.",
        "Hipotenüsün kısa kenarın tam iki katı olduğunu unutuyoruz."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "özel dik üçgen hesaplayıcı"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 üçgen hesaplayıcı"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "sağ üçgen kenar hesaplayıcı"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "sağ üçgen alan hesaplama"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "sağ üçgenin çevre hesaplaması"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "dik üçgen hipotenüs hesaplayıcısı"
        }
      ],
      "faqs": [
        {
          "question": "Bu 30 60 90 üçgen hesaplayıcısını nasıl kullanırım?",
          "answer": "Hesaplamak istediğiniz değeri seçin, zaten bildiğiniz tarafı girin; araç, cevabı bulmak için doğru oranı kullanacaktır."
        },
        {
          "question": "Kısa bacak ve uzun bacak hangi tarafta?",
          "answer": "Kısa bacak her zaman 30 derecelik açının karşısında, uzun bacak ise her zaman 60 derecelik açının karşısındadır."
        },
        {
          "question": "Kısa kenardan hipotenüsü bulmanın formülü nedir?",
          "answer": "Formül c = 2a'dur, yani hipotenüs kısa kenarın uzunluğunun tam olarak iki katıdır."
        },
        {
          "question": "Uzun bacak sonucu ne anlama geliyor?",
          "answer": "Uzun bacak sonucu, 30 ve 60 derecelik açıları korurken diğer taraflarla eşleşmesi için gereken tam yüksekliği veya tabanı belirtir."
        },
        {
          "question": "Uzun bacaktan kısa bacağı bulabilir miyim?",
          "answer": "Evet, uzun bacağı 3'ün kareköküne bölerek kısa bacağı bulabilirsiniz."
        },
        {
          "question": "Neden 3'ün kareköküyle çarpıyoruz?",
          "answer": "Bu üçgen tipi için 3'ün kareköküyle çarpmak sabit bir geometrik kuraldır ve kısa kenarı uzun kenara matematiksel olarak bağlar."
        }
      ],
      "ui": {
        "modeTitle": "Hesap Makinesi Modu",
        "modeSelectLabel": "Hesap makinesi modunu seçin",
        "formulaHeading": "Formül",
        "diagramHeading": "Üçgen Diyagramı",
        "howToUseHeading": "Bu Hesap Makinesi Nasıl Kullanılır?",
        "examplesHeading": "Adım Adım Örnekler",
        "resultMeaningHeading": "Sonuç Ne Anlama Geliyor?",
        "sideRatioHeading": "Yan Oran",
        "useCasesHeading": "Bu Hesap Makinesi Ne Zaman Kullanılmalı",
        "commonMistakesHeading": "Yaygın Hatalar",
        "relatedHeading": "İlgili Hesap Makineleri",
        "faqHeading": "SSS",
        "faqDescription": "En yaygın dik üçgen çözme sorularının yanıtları.",
        "diagramAriaLabel45": "45-45-90 Üçgen Diyagramı",
        "diagramAriaLabel30": "30-60-90 Üçgen Diyagramı",
        "calculatorMessages": {
          "positive": "Lütfen pozitif bir değer girin.",
          "invalid": "Giriş değeri 0'dan büyük olmalıdır."
        }
      }
    }
  },
  "sv": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 Triangelkalkylator",
      "metaTitle": "45 45 90 Triangelkalkylator | Hitta sidor, area och omkrets",
      "metaDescription": "Använd denna 45 45 90 triangelräknare för att hitta hypotenusan, benet, arean och omkretsen av en likbent rätvinklig triangel med formler och steg.",
      "badge": "Särskild rätt triangelkalkylator",
      "parentLabel": "Särskild rätt triangelkalkylator",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "Hitta hypotenusan från benet",
          "heading": "Hitta hypotenusan från benet",
          "calculator": {
            "outputLabel": "Hypotenus c",
            "outputUnit": "enheter",
            "fields": [
              {
                "key": "a",
                "label": "Ben a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "Hitta benet från hypotenusan",
          "heading": "Hitta benet från hypotenusan",
          "calculator": {
            "outputLabel": "Ben a",
            "outputUnit": "enheter",
            "fields": [
              {
                "key": "c",
                "label": "Hypotenus c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "Hitta området från benet",
          "heading": "Hitta området från benet",
          "calculator": {
            "outputLabel": "Område",
            "outputUnit": "kvm enheter",
            "fields": [
              {
                "key": "a",
                "label": "Ben a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "Hitta omkretsen från benet",
          "heading": "Hitta omkretsen från benet",
          "calculator": {
            "outputLabel": "Omkrets P",
            "outputUnit": "enheter",
            "fields": [
              {
                "key": "a",
                "label": "Ben a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Använd denna 45-45-90 triangelkalkylator för att snabbt hitta hypotenusan, benet, arean och omkretsen av en likbent rätvinklig triangel med hjälp av standard 45 45 90 triangelformler och förhållanden."
      ],
      "calculatorNote": "Alla ingångsvärden måste vara större än 0.",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "Triangeldiagram nyckel",
        "notes": [
          "Ben a representerar de två lika sidorna av den likbenta rätvinkliga triangeln.",
          "Hypotenus c är den längsta sidan mitt emot 90°-vinkeln.",
          "Båda spetsiga vinklarna är exakt 45 grader."
        ]
      },
      "howToUse": [
        "Välj 45 45 90-kalkylatorläget baserat på vad du redan vet.",
        "Ange det kända värdet (antingen benet eller hypotenusan).",
        "Se till att din inmatning är större än 0.",
        "Läs det beräknade resultatet direkt från utgångsfältet för den likbenta rätvinkliga triangeln."
      ],
      "example": [
        {
          "title": "Exempel 1: Hitta hypotenusan när a = 5.",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "Exempel 2: Hitta ben när c = 10.",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "Exempel 3: Hitta arean när a = 6.",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "Resultaten du får representerar de fysiska dimensionerna av din triangel. Ett beräknat ben eller hypotenusa är den exakta sidolängden som behövs för att bibehålla 45-gradersvinklarna.",
        "Att använda vår 45 45 90 områdeskalkylator och 45 45 90 omkretsräknare hjälper dig att förstå det totala 2D-utrymmet inuti triangeln och det totala avståndet runt dess kanter."
      ],
      "sideRatio": [
        "Sidoförhållandet för varje 45 45 90 triangel är a : a : a√2.",
        "Det betyder att båda benen alltid är exakt lika långa, och hypotenusan är alltid benlängden multiplicerad med kvadratroten ur 2."
      ],
      "useCases": [
        "Lösa geometri och trigonometri läxor som en 45 45 90 saknad sidräknare.",
        "Beräkna mått för kvadratbaserade konstruktioner eller diagonala snitt med den likbenta rätvinkliga triangelformeln.",
        "Designa isometriska rutnät och rita standardvinklar.",
        "Hitta det kortaste avståndet över en kvadratisk diagonal med hjälp av 45 45 90 hypotenuskalkylatorn."
      ],
      "commonMistakes": [
        "Använder 30 60 90-förhållanden av misstag.",
        "Att glömma att båda benen är lika.",
        "Använder c = 2a istället för c = a × √2.",
        "Dela med 2 istället för √2 när du hittar benet.",
        "Glömde att ruta benet när man beräknar arean."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "speciell rätt triangelräknare"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 triangelräknare"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "rät triangel sida kalkylator"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "rät triangelområdesräknare"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "rätvinklig omkretsräknare"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "rät triangel hypotenusa räknare"
        }
      ],
      "faqs": [
        {
          "question": "Vad är en 45 45 90 triangelräknare?",
          "answer": "Det är ett specifikt verktyg utformat för att lösa en likbent rätvinklig triangel genom att hitta hypotenusan, benet, arean eller omkretsen baserat på de fasta sidoförhållandena."
        },
        {
          "question": "Vad är en likbent rätvinklig triangel?",
          "answer": "En likbent rätvinklig triangel är en rätvinklig triangel där båda benen är identiska i längd, och båda icke-räta vinklarna är exakt 45 grader."
        },
        {
          "question": "Vad är formeln för hypotenusan för en 45 45 90 triangel?",
          "answer": "Formeln för att hitta hypotenusan är c = a × √2, där a är längden på ett ben."
        },
        {
          "question": "Vad betyder den beräknade arean?",
          "answer": "Ytresultatet betyder den totala mängden platt utrymme som finns inuti triangelns tre sidor."
        },
        {
          "question": "Kan jag hitta benet om jag bara känner till hypotenusan?",
          "answer": "Ja, du kan enkelt hitta benet genom att ta hypotenusan och dividera den med kvadratroten ur 2."
        },
        {
          "question": "Varför är benen alltid lika?",
          "answer": "Eftersom de motsatta vinklarna båda är 45 grader måste sidorna som är motsatta dessa vinklar också vara lika med varandra."
        }
      ],
      "ui": {
        "modeTitle": "Kalkylatorläge",
        "modeSelectLabel": "Välj kalkylatorläge",
        "formulaHeading": "Formel",
        "diagramHeading": "Triangeldiagram",
        "howToUseHeading": "Hur man använder den här kalkylatorn",
        "examplesHeading": "Steg-för-steg exempel",
        "resultMeaningHeading": "Vad resultatet betyder",
        "sideRatioHeading": "Sidoförhållande",
        "useCasesHeading": "När ska man använda denna kalkylator",
        "commonMistakesHeading": "Vanliga misstag",
        "relatedHeading": "Relaterade miniräknare",
        "faqHeading": "Vanliga frågor",
        "faqDescription": "Svar på de vanligaste frågorna om rätt triangellösning.",
        "diagramAriaLabel45": "45-45-90 Triangeldiagram",
        "diagramAriaLabel30": "30-60-90 Triangeldiagram",
        "calculatorMessages": {
          "positive": "Ange ett positivt värde.",
          "invalid": "Inmatningsvärdet måste vara större än 0."
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 Triangelkalkylator",
      "metaTitle": "30 60 90 Triangelkalkylator | Hitta kort ben, långa ben och hypotenus",
      "metaDescription": "Använd denna 30 60 90 triangelräknare för att hitta det korta benet, det långa benet, hypotenusan, arean och omkretsen med formler och steg.",
      "badge": "Särskild rätt triangelkalkylator",
      "parentLabel": "Särskild rätt triangelkalkylator",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "Hitta långa ben från korta ben",
          "heading": "Hitta långa ben från korta ben",
          "calculator": {
            "outputLabel": "Långt ben",
            "outputUnit": "enheter",
            "fields": [
              {
                "key": "a",
                "label": "Kort ben a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "Hitta hypotenusa från kort ben",
          "heading": "Hitta hypotenusa från kort ben",
          "calculator": {
            "outputLabel": "Hypotenus c",
            "outputUnit": "enheter",
            "fields": [
              {
                "key": "a",
                "label": "Kort ben a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "Hitta kort ben från hypotenusan",
          "heading": "Hitta kort ben från hypotenusan",
          "calculator": {
            "outputLabel": "Kort ben a",
            "outputUnit": "enheter",
            "fields": [
              {
                "key": "c",
                "label": "Hypotenus c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "Hitta kort ben från långa ben",
          "heading": "Hitta kort ben från långa ben",
          "calculator": {
            "outputLabel": "Kort ben a",
            "outputUnit": "enheter",
            "fields": [
              {
                "key": "b",
                "label": "Långt ben",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "Hitta långa ben från hypotenusan",
          "heading": "Hitta långa ben från hypotenusan",
          "calculator": {
            "outputLabel": "Långt ben",
            "outputUnit": "enheter",
            "fields": [
              {
                "key": "c",
                "label": "Hypotenus c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "Hitta område från kort ben",
          "heading": "Hitta område från kort ben",
          "calculator": {
            "outputLabel": "Område",
            "outputUnit": "kvm enheter",
            "fields": [
              {
                "key": "a",
                "label": "Kort ben a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "Hitta omkrets från kort ben",
          "heading": "Hitta omkrets från kort ben",
          "calculator": {
            "outputLabel": "Omkrets P",
            "outputUnit": "enheter",
            "fields": [
              {
                "key": "a",
                "label": "Kort ben a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "Använd denna 30-60-90 triangelräknare för att enkelt hitta det korta benet, det långa benet, hypotenusan, arean och omkretsen med den exakta 30 60 90 triangelformeln och förhållandet."
      ],
      "calculatorNote": "Alla ingångsvärden måste vara större än 0.",
      "formulaSection": {
        "formulas": [
          "\\text{lång katet} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{lång katet} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{kort katet} + \\text{lång katet} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "Triangeldiagram nyckel",
        "notes": [
          "Kort ben a är motsatt 30-gradersvinkeln.",
          "Långben a√3 är motsatt 60-gradersvinkeln.",
          "Hypotenus c är exakt dubbelt så lång som det korta benet a."
        ]
      },
      "howToUse": [
        "Välj vad du vill hitta från 30 60 90-kalkylatorlägena.",
        "Ange din kända sidolängd (kort ben, långa ben eller hypotenusa).",
        "Kontrollera att talet är positivt och större än noll.",
        "Markera resultatrutan för ditt perfekt skalade svar från vår 30 60 90 triangellösare."
      ],
      "example": [
        {
          "title": "Exempel 1: Hitta långt ben och hypotenusa när kort ben a = 5.",
          "steps": [
            "\\text{lång katet} = a \\times \\sqrt{3}",
            "\\text{lång katet} = 5 \\times \\sqrt{3}",
            "\\text{lång katet} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "Exempel 2: Hitta kort ben när c = 14.",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "Exempel 3: Hitta långt ben från hypotenusan c = 10.",
          "steps": [
            "\\text{lång katet} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{lång katet} = 5\\sqrt{3}",
            "\\text{lång katet} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "De beräknade 30 60 90 triangelsidorna visar exakt hur lång varje del av triangeln behöver vara för att bibehålla 30 och 60 graders vinklar. De är perfekt proportionella.",
        "Resultaten från 30 60 90 områdeskalkylator och 30 60 90 omkretsräknare ger dig den exakta avgränsade 2D-storleken och den totala konturlängden av din triangel."
      ],
      "sideRatio": [
        "Standardsidoförhållandet för en 30 60 90-triangel är a : a√3 : 2a.",
        "Det korta benet är a, det långa benet är a gånger kvadratroten ur 3, och hypotenusan är exakt två gånger det korta benet."
      ],
      "useCases": [
        "Kontrollera trigonometritilldelningar som involverar speciella rätvinkliga trianglar som en 30 60 90 saknad sidräknare.",
        "Bestämma höjden på en liksidig triangel med hjälp av långbenskalkylatorn 30 60 90.",
        "Rita vinklar och strukturella stöd inom teknik eller arkitektur.",
        "Att lösa komplexa vektorproblem i fysik med 30 60 90 hypotenuskalkylatorn."
      ],
      "commonMistakes": [
        "Blanda ihop det korta benet och det långa benet.",
        "Använd √2 istället för √3 för beräkningen av långa ben.",
        "Tror hypotenusan är lika med a√3 istället för 2a.",
        "Använder värdet för långa ben som kort ben av en slump.",
        "Att glömma att hypotenusan är exakt det dubbla av det korta benet."
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "speciell rätt triangelräknare"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 triangelräknare"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "rät triangel sida kalkylator"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "rät triangelområdesräknare"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "rätvinklig omkretsräknare"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "rät triangel hypotenusa räknare"
        }
      ],
      "faqs": [
        {
          "question": "Hur använder jag denna 30 60 90 triangelräknare?",
          "answer": "Välj helt enkelt det värde du vill beräkna, ange sidan du redan känner till, så använder verktyget rätt förhållande för att hitta svaret."
        },
        {
          "question": "Vilken sida är det korta benet och det långa benet?",
          "answer": "Det korta benet är alltid motsatt 30-gradersvinkeln, medan det långa benet alltid är motsatt 60-gradersvinkeln."
        },
        {
          "question": "Vad är formeln för att hitta hypotenusan från det korta benet?",
          "answer": "Formeln är c = 2a, vilket betyder att hypotenusan är exakt dubbelt så lång som det korta benet."
        },
        {
          "question": "Vad betyder resultatet för långa ben?",
          "answer": "Resultatet av långa ben talar om den exakta höjden eller basen som krävs för att matcha de andra sidorna samtidigt som vinklarna på 30 och 60 grader hålls intakta."
        },
        {
          "question": "Kan jag hitta det korta benet från det långa benet?",
          "answer": "Ja, du kan hitta det korta benet genom att dividera det långa benet med kvadratroten ur 3."
        },
        {
          "question": "Varför multiplicerar vi med kvadratroten ur 3?",
          "answer": "Att multiplicera med kvadratroten ur 3 är en fast geometrisk regel för denna triangeltyp, som matematiskt kopplar det korta benet till det långa benet."
        }
      ],
      "ui": {
        "modeTitle": "Kalkylatorläge",
        "modeSelectLabel": "Välj kalkylatorläge",
        "formulaHeading": "Formel",
        "diagramHeading": "Triangeldiagram",
        "howToUseHeading": "Hur man använder den här kalkylatorn",
        "examplesHeading": "Steg-för-steg exempel",
        "resultMeaningHeading": "Vad resultatet betyder",
        "sideRatioHeading": "Sidoförhållande",
        "useCasesHeading": "När ska man använda denna kalkylator",
        "commonMistakesHeading": "Vanliga misstag",
        "relatedHeading": "Relaterade miniräknare",
        "faqHeading": "Vanliga frågor",
        "faqDescription": "Svar på de vanligaste frågorna om rätt triangellösning.",
        "diagramAriaLabel45": "45-45-90 Triangeldiagram",
        "diagramAriaLabel30": "30-60-90 Triangeldiagram",
        "calculatorMessages": {
          "positive": "Ange ett positivt värde.",
          "invalid": "Inmatningsvärdet måste vara större än 0."
        }
      }
    }
  },
  "zh": {
    "45-45-90-triangle-calculator": {
      "slug": "45-45-90-triangle-calculator",
      "url": "/45-45-90-triangle-calculator/",
      "primaryKeyword": "45 45 90 Triangle Calculator",
      "secondaryKeywords": [
        "45-45-90 triangle calculator",
        "45 45 90 calculator",
        "45 45 90 triangle formula",
        "45 45 90 triangle ratio",
        "45 45 90 triangle sides",
        "45 45 90 hypotenuse calculator",
        "45 45 90 leg calculator",
        "45 45 90 missing side calculator",
        "45 45 90 area calculator",
        "45 45 90 perimeter calculator",
        "isosceles right triangle calculator",
        "isosceles right triangle formula",
        "isosceles right triangle hypotenuse"
      ],
      "h1": "45 45 90 三角形计算器",
      "metaTitle": "45 45 90 三角形计算器 |求边长、面积和周长",
      "metaDescription": "使用此 45 45 90 三角形计算器通过公式和步骤计算等腰直角三角形的斜边、边、面积和周长。",
      "badge": "特殊直角三角形计算器",
      "parentLabel": "特殊直角三角形计算器",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "c-a-rt2",
          "label": "从腿上找到斜边",
          "heading": "从腿上找到斜边",
          "calculator": {
            "outputLabel": "斜边 c",
            "outputUnit": "单位",
            "fields": [
              {
                "key": "a",
                "label": "腿 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "a-c-rt2",
          "label": "从斜边找到边",
          "heading": "从斜边找到边",
          "calculator": {
            "outputLabel": "腿 a",
            "outputUnit": "单位",
            "fields": [
              {
                "key": "c",
                "label": "斜边 c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-45-leg",
          "label": "求从腿部算起的面积",
          "heading": "求从腿部算起的面积",
          "calculator": {
            "outputLabel": "面积",
            "outputUnit": "平方单位",
            "fields": [
              {
                "key": "a",
                "label": "腿 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-45-leg",
          "label": "求腿的周长",
          "heading": "求腿的周长",
          "calculator": {
            "outputLabel": "周长 P",
            "outputUnit": "单位",
            "fields": [
              {
                "key": "a",
                "label": "腿 a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "使用此 45-45-90 三角形计算器，使用标准 45 45 90 三角形公式和比率，快速找到任何等腰直角三角形的斜边、边、面积和周长。"
      ],
      "calculatorNote": "所有输入值必须大于 0。",
      "formulaSection": {
        "formulas": [
          "c = a \\times \\sqrt{2}",
          "a = \\frac{c}{\\sqrt{2}}",
          "\\text{Area} = \\frac{a^2}{2}",
          "P = 2a + a\\sqrt{2}"
        ]
      },
      "diagram": {
        "kind": "45-45-90",
        "keyLabel": "三角图关键",
        "notes": [
          "a 边表示等腰直角三角形的两条相等的边。",
          "斜边 c 是与 90° 角相对的最长边。",
          "两个锐角正好是 45 度。"
        ]
      },
      "howToUse": [
        "根据您已知的内容选择 45 45 90 计算器模式。",
        "输入已知值（边或斜边）。",
        "确保您的输入大于 0。",
        "直接从等腰直角三角形计算器输出字段读取计算结果。"
      ],
      "example": [
        {
          "title": "示例 1：当 a = 5 时求斜边。",
          "steps": [
            "c = a \\times \\sqrt{2}",
            "c = 5 \\times \\sqrt{2}",
            "c \\approx 7.071"
          ]
        },
        {
          "title": "示例 2：查找 c = 10 时的边。",
          "steps": [
            "a = \\frac{c}{\\sqrt{2}}",
            "a = \\frac{10}{\\sqrt{2}}",
            "a \\approx 7.071"
          ]
        },
        {
          "title": "示例 3：求 a = 6 时的面积。",
          "steps": [
            "\\text{Area} = \\frac{a^2}{2}",
            "\\text{Area} = \\frac{6^2}{2}",
            "\\text{Area} = \\frac{36}{2}",
            "\\text{Area} = 18"
          ]
        }
      ],
      "resultMeaning": [
        "您得到的结果代表了三角形的物理尺寸。计算出的边或斜边是保持 45 度角所需的精确边长。",
        "使用我们的 45 45 90 面积计算器和 45 45 90 周长计算器功能可帮助您了解三角形内部的总 2D 空间及其边缘周围的总距离。"
      ],
      "sideRatio": [
        "每个 45 45 90 三角形的边长比为 a : a : a√2。",
        "这意味着两条边的长度始终完全相同，并且斜边始终是边的长度乘以 2 的平方根。"
      ],
      "useCases": [
        "作为 45 45 90 缺边计算器解决几何和三角学作业问题。",
        "使用等腰直角三角形公式计算基于正方形的结构或对角线切割的尺寸。",
        "设计等距网格并绘制标准角度。",
        "使用 45 45 90 斜边计算器查找方形对角线的最短距离。"
      ],
      "commonMistakes": [
        "错误地使用了 30 60 90 比率。",
        "忘记两条腿是平等的。",
        "使用 c = 2a 而不是 c = a × √2。",
        "查找腿时除以 2，而不是 √2。",
        "计算面积时忘记将腿摆成正方形。"
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "特殊直角三角形计算器"
        },
        {
          "href": "/30-60-90-triangle-calculator/",
          "label": "30 60 90 三角形计算器"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形边长计算器"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "直角三角形面积计算器"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "直角三角形周长计算器"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "直角三角形斜边计算器"
        }
      ],
      "faqs": [
        {
          "question": "什么是 45 45 90 三角形计算器？",
          "answer": "它是一种专门的工具，旨在通过根据固定边长比查找斜边、边、面积或周长来求解等腰直角三角形。"
        },
        {
          "question": "什么是等腰直角三角形？",
          "answer": "等腰直角三角形是两条腿的长度相同且两个非直角正好为 45 度的直角三角形。"
        },
        {
          "question": "45 45 90 三角形的斜边公式是什么？",
          "answer": "求斜边的公式是 c = a × √2，其中 a 是一条边的长度。"
        },
        {
          "question": "计算出来的面积是什么意思？",
          "answer": "面积结果表示三角形三边内包含的平坦空间的总量。"
        },
        {
          "question": "如果我只知道斜边，我能找到边吗？",
          "answer": "是的，您可以通过斜边除以 2 的平方根轻松找到边。"
        },
        {
          "question": "为什么腿总是一样的？",
          "answer": "因为对角都是 45 度，所以这些角的对边也必须彼此相等。"
        }
      ],
      "ui": {
        "modeTitle": "计算器模式",
        "modeSelectLabel": "选择计算器模式",
        "formulaHeading": "公式",
        "diagramHeading": "三角图",
        "howToUseHeading": "如何使用此计算器",
        "examplesHeading": "分步示例",
        "resultMeaningHeading": "结果意味着什么",
        "sideRatioHeading": "边比",
        "useCasesHeading": "何时使用此计算器",
        "commonMistakesHeading": "常见错误",
        "relatedHeading": "相关计算器",
        "faqHeading": "常见问题解答",
        "faqDescription": "最常见的直角三角形求解问题的答案。",
        "diagramAriaLabel45": "45-45-90 三角图",
        "diagramAriaLabel30": "30-60-90 三角图",
        "calculatorMessages": {
          "positive": "请输入正值。",
          "invalid": "输入值必须大于 0。"
        }
      }
    },
    "30-60-90-triangle-calculator": {
      "slug": "30-60-90-triangle-calculator",
      "url": "/30-60-90-triangle-calculator/",
      "primaryKeyword": "30 60 90 Triangle Calculator",
      "secondaryKeywords": [
        "30-60-90 triangle calculator",
        "30 60 90 calculator",
        "30 60 90 triangle formula",
        "30 60 90 triangle ratio",
        "30 60 90 triangle sides",
        "30 60 90 hypotenuse calculator",
        "30 60 90 short leg calculator",
        "30 60 90 long leg calculator",
        "30 60 90 missing side calculator",
        "30 60 90 area calculator",
        "30 60 90 perimeter calculator",
        "30 60 90 triangle solver",
        "30 60 90 side length calculator",
        "30 60 90 given hypotenuse",
        "30 60 90 given short leg",
        "30 60 90 given long leg"
      ],
      "h1": "30 60 90 三角形计算器",
      "metaTitle": "30 60 90 三角形计算器 |求短边、长边和斜边",
      "metaDescription": "使用此 30 60 90 三角形计算器通过公式和步骤查找短边、长边、斜边、面积和周长。",
      "badge": "特殊直角三角形计算器",
      "parentLabel": "特殊直角三角形计算器",
      "parentPath": "/special-right-triangle-calculator/",
      "modes": [
        {
          "formulaSlug": "long-a-rt3",
          "label": "从短腿中找出长腿",
          "heading": "从短腿中找出长腿",
          "calculator": {
            "outputLabel": "长腿",
            "outputUnit": "单位",
            "fields": [
              {
                "key": "a",
                "label": "短腿 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "c-2a",
          "label": "从短边找到斜边",
          "heading": "从短边找到斜边",
          "calculator": {
            "outputLabel": "斜边 c",
            "outputUnit": "单位",
            "fields": [
              {
                "key": "a",
                "label": "短腿 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-c-30",
          "label": "从斜边找出短边",
          "heading": "从斜边找出短边",
          "calculator": {
            "outputLabel": "短腿 a",
            "outputUnit": "单位",
            "fields": [
              {
                "key": "c",
                "label": "斜边 c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "short-long-30",
          "label": "从长腿中找出短腿",
          "heading": "从长腿中找出短腿",
          "calculator": {
            "outputLabel": "短腿 a",
            "outputUnit": "单位",
            "fields": [
              {
                "key": "b",
                "label": "长腿",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "long-c-30",
          "label": "从斜边找出长边",
          "heading": "从斜边找出长边",
          "calculator": {
            "outputLabel": "长腿",
            "outputUnit": "单位",
            "fields": [
              {
                "key": "c",
                "label": "斜边 c",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "area-short-30",
          "label": "从短腿求面积",
          "heading": "从短腿求面积",
          "calculator": {
            "outputLabel": "面积",
            "outputUnit": "平方单位",
            "fields": [
              {
                "key": "a",
                "label": "短腿 a",
                "min": 0
              }
            ]
          }
        },
        {
          "formulaSlug": "perimeter-short-30",
          "label": "从短边求周长",
          "heading": "从短边求周长",
          "calculator": {
            "outputLabel": "周长 P",
            "outputUnit": "单位",
            "fields": [
              {
                "key": "a",
                "label": "短腿 a",
                "min": 0
              }
            ]
          }
        }
      ],
      "intro": [
        "使用此 30-60-90 三角形计算器，使用精确的 30 60 90 三角形公式和比率，轻松找到短边、长边、斜边、面积和周长。"
      ],
      "calculatorNote": "所有输入值必须大于 0。",
      "formulaSection": {
        "formulas": [
          "\\text{长直角边} = a \\times \\sqrt{3}",
          "c = 2a",
          "a = \\frac{c}{2}",
          "a = \\frac{\\text{long leg}}{\\sqrt{3}}",
          "\\text{长直角边} = \\frac{c \\times \\sqrt{3}}{2}",
          "\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}",
          "P = \\text{短直角边} + \\text{长直角边} + c"
        ]
      },
      "diagram": {
        "kind": "30-60-90",
        "keyLabel": "三角图关键",
        "notes": [
          "短腿a与30度角相反。",
          "长腿 a√3 与 60 度角相对。",
          "斜边c恰好是短边a长度的两倍。"
        ]
      },
      "howToUse": [
        "从 30 60 90 计算器模式中选择您想要查找的内容。",
        "输入已知的边长（短边、长边或斜边）。",
        "验证数字是否为正且大于零。",
        "检查结果框，从我们的 30 60 90 三角形解算器中获取完美缩放的答案。"
      ],
      "example": [
        {
          "title": "示例 1：当短边 a = 5 时，求长边和斜边。",
          "steps": [
            "\\text{长直角边} = a \\times \\sqrt{3}",
            "\\text{长直角边} = 5 \\times \\sqrt{3}",
            "\\text{长直角边} \\approx 8.660",
            "c = 2a",
            "c = 2 \\times 5",
            "c = 10"
          ]
        },
        {
          "title": "示例 2：当 c = 14 时查找短边。",
          "steps": [
            "a = \\frac{c}{2}",
            "a = \\frac{14}{2}",
            "a = 7"
          ]
        },
        {
          "title": "示例 3：从斜边 c = 10 找出长边。",
          "steps": [
            "\\text{长直角边} = \\frac{c \\times \\sqrt{3}}{2}",
            "\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}",
            "\\text{长直角边} = 5\\sqrt{3}",
            "\\text{长直角边} \\approx 8.660"
          ]
        }
      ],
      "resultMeaning": [
        "计算出的 30 60 90 三角形边准确地显示了保持 30 度和 60 度角所需的三角形每个部分的长度。它们是完全成比例的。",
        "30 60 90 面积计算器和 30 60 90 周长计算器结果为您提供精确的有界二维尺寸和三角形的总轮廓长度。"
      ],
      "sideRatio": [
        "30 60 90 三角形的标准边长比是 a : a√3 : 2a。",
        "短边是a，长边是a乘以3的平方根，斜边正好是短边的两倍。"
      ],
      "useCases": [
        "检查涉及特殊直角三角形的三角函数作业，作为 30 60 90 缺边计算器。",
        "使用 30 60 90 长腿计算器确定等边三角形的高度。",
        "工程或建筑中的绘图角度和结构支撑。",
        "使用 30 60 90 斜边计算器解决物理中的复杂矢量问题。"
      ],
      "commonMistakes": [
        "混合短腿和长腿。",
        "使用 √2 代替 √3 进行长腿计算。",
        "认为斜边等于 a√3 而不是 2a。",
        "无意中将长腿值用作短腿值。",
        "忘记了斜边恰好是短边的两倍。"
      ],
      "relatedLinks": [
        {
          "href": "/special-right-triangle-calculator/",
          "label": "特殊直角三角形计算器"
        },
        {
          "href": "/45-45-90-triangle-calculator/",
          "label": "45 45 90 三角形计算器"
        },
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形边长计算器"
        },
        {
          "href": "/right-triangle-area-calculator/",
          "label": "直角三角形面积计算器"
        },
        {
          "href": "/right-triangle-perimeter-calculator/",
          "label": "直角三角形周长计算器"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "直角三角形斜边计算器"
        }
      ],
      "faqs": [
        {
          "question": "如何使用 30 60 90 三角形计算器？",
          "answer": "只需选择您想要计算的值，输入您已经知道的边，该工具将使用正确的比率来找到答案。"
        },
        {
          "question": "哪一边是短腿和长腿？",
          "answer": "短腿始终与 30 度角相对，而长腿始终与 60 度角相对。"
        },
        {
          "question": "从短边求斜边的公式是什么？",
          "answer": "公式为 c = 2a，表示斜边恰好是短边长度的两倍。"
        },
        {
          "question": "长腿结果意味着什么？",
          "answer": "长腿结果告诉您在保持 30 度和 60 度角完好无损的情况下匹配其他边所需的确切高度或底座。"
        },
        {
          "question": "我能从长腿中找出短腿吗？",
          "answer": "是的，您可以通过将长边除以 3 的平方根来找到短边。"
        },
        {
          "question": "为什么我们要乘以3的平方根？",
          "answer": "乘以 3 的平方根是该三角形类型的固定几何规则，以数学方式将短边与长边联系起来。"
        }
      ],
      "ui": {
        "modeTitle": "计算器模式",
        "modeSelectLabel": "选择计算器模式",
        "formulaHeading": "公式",
        "diagramHeading": "三角图",
        "howToUseHeading": "如何使用此计算器",
        "examplesHeading": "分步示例",
        "resultMeaningHeading": "结果意味着什么",
        "sideRatioHeading": "边比",
        "useCasesHeading": "何时使用此计算器",
        "commonMistakesHeading": "常见错误",
        "relatedHeading": "相关计算器",
        "faqHeading": "常见问题解答",
        "faqDescription": "最常见的直角三角形求解问题的答案。",
        "diagramAriaLabel45": "45-45-90 三角图",
        "diagramAriaLabel30": "30-60-90 三角图",
        "calculatorMessages": {
          "positive": "请输入正值。",
          "invalid": "输入值必须大于 0。"
        }
      }
    }
  }
};

export function localizeFocusedSpecialTriangleCalculatorPage(
  page: FocusedSpecialTriangleCalculatorPage,
  locale: Locale
): FocusedSpecialTriangleCalculatorPage {
  return FOCUSED_SPECIAL_TRIANGLE_CALCULATOR_TRANSLATIONS[locale]?.[page.slug] ?? page;
}
