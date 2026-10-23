// Generated localized copy for focused side calculator pages.
// Formulas, URL slugs, and variable names are intentionally preserved.

export const FOCUSED_SIDE_CALCULATOR_TRANSLATIONS = {
  "hi": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "कैलकुलेटर: पाइथागोरस प्रमेय",
      "metaTitle": "कैलकुलेटर: पाइथागोरस प्रमेय | Right Triangle Solver",
      "metaDescription": "जब दोनों भुजाएं ज्ञात हों तो कर्ण ज्ञात करें। यह प्रत्येक समकोण त्रिभुज के लिए प्राथमिक पहचान है।",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "चाहे आप होमवर्क की समस्या हल कर रहे हों या वास्तविक जीवन में विकर्ण माप रहे हों, यह टूल आपको सेकंडों में उत्तर देता है - चरण दर चरण पूरा समाधान दिखाता है।",
      "intro": "जब दोनों भुजाएं ज्ञात हों तो कर्ण ज्ञात करें। यह प्रत्येक समकोण त्रिभुज के लिए प्राथमिक पहचान है।",
      "quickSummary": {
        "h2": "यह पायथागॉरियन कैलकुलेटर क्या हल करता है",
        "intro": "इस पृष्ठ का उपयोग तब करें जब 90° कोण पर मिलने वाली दो भुजाएँ ज्ञात हों और विकर्ण भुजा गायब हो। कैलकुलेटर क्लासिक कर्ण मामले पर ध्यान केंद्रित करता है, इसलिए इनपुट सरल रहते हैं और परिणाम की जांच करना आसान होता है।",
        "cards": [
          {
            "label": "ज्ञात मूल्य",
            "value": "a = कोण A के विपरीत भुजा; b = कोण B के विपरीत भुजा"
          },
          {
            "label": "ढूँढता है",
            "value": "c = कर्ण"
          },
          {
            "label": "मुख्य सूत्र",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "के लिए सर्वोत्तम",
            "value": "विकर्ण, सीढ़ी, रैंप, स्क्रीन और ज्यामिति होमवर्क"
          }
        ]
      },
      "diagram": {
        "h2": "समकोण त्रिभुज आरेख: कर्ण ज्ञात करना",
        "intro": "आरेख उपकरण द्वारा उपयोग किए गए सटीक पार्श्व संबंध को दर्शाता है। दो पैर ज्ञात इनपुट मान हैं, और झुका हुआ पक्ष c वह कर्ण है जो कैलकुलेटर पाता है।",
        "caption": "ज्ञात पाद a और b और अज्ञात कर्ण c के साथ समकोण त्रिभुज आरेख।",
        "sides": {
          "a": {
            "label": "a = ज्ञात",
            "description": "लेग a उन दो भुजाओं में से एक है जो समकोण बनाती है।",
            "status": "known"
          },
          "b": {
            "label": "b = ज्ञात",
            "description": "टांग b दूसरी भुजा है जो समकोण बनाती है।",
            "status": "known"
          },
          "c": {
            "label": "c = खोजें",
            "description": "कर्ण c सबसे लंबी भुजा है और 90° कोण के विपरीत बैठता है।",
            "status": "unknown"
          }
        },
        "notes": [
          "a और b की अदला-बदली की जा सकती है; कर्ण का परिणाम वही होगा.",
          "गणना करने से पहले दोनों पैरों के लिए एक ही इकाई का उपयोग करें।",
          "उत्तर c हमेशा वैध समकोण त्रिभुज में किसी भी पैर से बड़ा होगा।"
        ]
      },
      "calculator": {
        "outputLabel": "c = कर्ण",
        "fields": [
          {
            "key": "a",
            "label": "a = कोण A के विपरीत भुजा",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = कोण B के विपरीत भुजा",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "पाइथागोरस प्रमेय सूत्र",
        "paragraphs": [
          "पाइथागोरस प्रमेय कहता है कि एक समकोण त्रिभुज में, कर्ण का वर्ग दोनों पैरों के वर्गों के योग के बराबर होता है। कर्ण को हल करने के लिए, दोनों पक्षों का वर्गमूल लें।",
          "इस सूत्र में, a और b समकोण त्रिभुज के दो पैर हैं - वे भुजाएँ जो समकोण बनाती हैं। c समकोण के विपरीत कर्ण, सबसे लंबी भुजा है। यह सूत्र केवल समकोण त्रिभुजों के लिए कार्य करता है।"
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "पाइथागोरस प्रमेय कैलकुलेटर का उपयोग कैसे करें",
        "steps": [
          "अपने समकोण त्रिभुज के दोनों पैरों को पहचानें। ये वे भुजाएँ हैं जो समकोण बनाती हैं।",
          "पहले इनपुट फ़ील्ड में लेग a दर्ज करें।",
          "दूसरे इनपुट फ़ील्ड में लेग b दर्ज करें।",
          "कर्ण ज्ञात करने के लिए गणना पर क्लिक करें।",
          "चरण-दर-चरण समाधान के साथ, c के परिणाम पढ़ें।"
        ]
      },
      "example": {
        "h2": "उदाहरण: कर्ण ज्ञात कीजिए",
        "intro": "दिया गया है: a = 6, b = 8. पाद 6 और 8 वाले एक समकोण त्रिभुज का कर्ण 10 है।",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "यह कैलकुलेटर कहां उपयोगी है",
          "paragraphs": [
            "जब भी दो लंबवत दूरियां एक विकर्ण दूरी में संयोजित होती हैं तो कर्ण कैलकुलेटर उपयोगी होता है। यह विशेष रूप से तब सहायक होता है जब कोई ड्राइंग, फ़्लोर प्लान, या होमवर्क समस्या क्षैतिज और ऊर्ध्वाधर पक्ष देती है लेकिन विकर्ण पक्ष को खाली छोड़ देती है।",
            "क्योंकि यह पृष्ठ केवल c के लिए समाधान करता है, यह साइड मोड के बीच स्विच करने की उलझन से बचाता है। यदि आपके ज्ञात मान दो पैर हैं, तो यह उपयोग करने के लिए केंद्रित पाइथागोरस प्रमेय उपकरण है।"
          ],
          "listTitle": "सामान्य उदाहरणों में शामिल हैं:",
          "listItems": [
            "किसी आयत, स्क्रीन, टाइल लेआउट या कमरे का विकर्ण ढूँढना।",
            "दीवार की ऊंचाई और जमीन की दूरी से सीढ़ी की लंबाई की गणना।",
            "उठने और चलने से रैंप की ढलान वाली लंबाई का अनुमान लगाना।",
            "अंतिम उत्तर सबमिट करने से पहले समकोण त्रिभुज होमवर्क की जाँच करना।"
          ]
        },
        {
          "h2": "बेहतर परिणाम के लिए इनपुट युक्तियाँ",
          "paragraphs": [
            "दोनों पैरों की लंबाई को सकारात्मक संख्या के रूप में दर्ज करें। दशमलव ठीक हैं, और कैलकुलेटर चरण-दर-चरण कार्य को उपयोगी बनाने के लिए पर्याप्त सटीकता रखेगा।",
            "दोनों इनपुटों को एक ही इकाई का उपयोग करना चाहिए। यदि a को फ़ुट में मापा जाता है और b को इंच में मापा जाता है, तो पहले एक माप को परिवर्तित करें ताकि परिणाम सार्थक हो।"
          ],
          "listTitle": "गणना करने से पहले, जांच लें कि:",
          "listItems": [
            "a और b वे भुजाएँ हैं जो 90° कोण को छूती हैं।",
            "कोई भी इनपुट शून्य या नकारात्मक नहीं है.",
            "दोनों मान एक ही इकाई में मापे जाते हैं।",
            "आप कर्ण का समाधान कर रहे हैं, लुप्त पैर का नहीं।"
          ]
        },
        {
          "h2": "उत्तर कैसे पढ़ें",
          "paragraphs": [
            "कर्ण c लेबल वाला आउटपुट समकोण के विपरीत पक्ष है। यह आरेख में विकर्ण पक्ष है और दोनों इनपुट पैरों से लंबा होना चाहिए।",
            "यदि आपका परिणाम a या b से छोटा दिखता है, तो यह एक संकेत है कि इनपुट में से एक को गलत लेबल किया गया था या त्रिकोण वास्तव में एक सही त्रिकोण नहीं है।"
          ],
          "listTitle": "एक त्वरित तर्कसंगतता जांच:",
          "listItems": [
            "c, a से बड़ा होना चाहिए।",
            "c, b से बड़ा होना चाहिए।",
            "c + b से कम होना चाहिए।",
            "3-4-5 या 5-12-13 जैसे सामान्य त्रिगुणों के लिए, परिणाम ज्ञात त्रिगुण से मेल खाना चाहिए।"
          ]
        },
        {
          "h2": "सामान्य गलतियाँ",
          "paragraphs": [
            "अधिकांश गलत कर्ण उत्तर गलत पक्षों पर सही सूत्र का उपयोग करने से आते हैं। पैर दोनों तरफ होने चाहिए जो समकोण बनाते हैं; इस पृष्ठ पर कर्ण कभी भी इनपुट नहीं होता है।",
            "एक अन्य सामान्य समस्या a² + b² पर रुकना है। वह मान c² है, c नहीं। वर्गमूल चरण वह है जो वर्ग मान को वास्तविक पार्श्व लंबाई में बदल देता है।"
          ],
          "listTitle": "इन गलतियों से बचें:",
          "listItems": [
            "उस त्रिभुज पर सूत्र का उपयोग करना जिसमें 90° कोण नहीं है।",
            "विकर्ण पक्ष को a या b के रूप में दर्ज करना।",
            "अंत में वर्गमूल निकालना भूल गए।",
            "इंच और फुट जैसी इकाइयों को एक ही गणना में मिलाना।"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "समकोण त्रिभुज भुजा कैलकुलेटर"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "कैलकुलेटर: c और a से अज्ञात भुजा"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "कैलकुलेटर: c और b से अज्ञात भुजा"
        }
      ],
      "faqs": [
        {
          "question": "पाइथागोरस प्रमेय क्या है?",
          "answer": "पाइथागोरस प्रमेय एक सूत्र है जो एक समकोण त्रिभुज की तीन भुजाओं से संबंधित है: a² + b² = c²। इसमें कहा गया है कि कर्ण का वर्ग दोनों पैरों के वर्गों के योग के बराबर होता है। यह केवल समकोण त्रिभुजों पर लागू होता है।"
        },
        {
          "question": "सूत्र में c का क्या अर्थ है?",
          "answer": "सूत्र c² = a² + b² में, c कर्ण है - समकोण त्रिभुज की सबसे लंबी भुजा। यह 90° कोण के ठीक सामने वाली भुजा है।"
        },
        {
          "question": "क्या मैं इस कैलकुलेटर का उपयोग किसी त्रिभुज के लिए कर सकता हूँ?",
          "answer": "नहीं, यह कैलकुलेटर पाइथागोरस प्रमेय का उपयोग करता है, जो केवल समकोण त्रिभुजों के लिए काम करता है। यदि आपके त्रिभुज में 90° कोण नहीं है, तो सूत्र सही परिणाम नहीं देगा।"
        },
        {
          "question": "मैं कर्ण कैसे ढूंढूं?",
          "answer": "कर्ण ज्ञात करने के लिए, दोनों पैरों को वर्गाकार करें (a² और b²), उन्हें एक साथ जोड़ें, और योग का वर्गमूल लें। सूत्र c = √(a² + b²) है। या बस ऊपर अपना मान दर्ज करें और कैलकुलेटर को यह करने दें।"
        },
        {
          "question": "एक समकोण त्रिभुज में a और b क्या हैं?",
          "answer": "a और b दो पैर हैं - भुजाएँ जो समकोण बनाती हैं। वे किसी भी सकारात्मक लंबाई के हो सकते हैं, और इससे कोई फर्क नहीं पड़ता कि आप किसे a या b कहते हैं। कर्ण (c) हमेशा शेष पक्ष होता है।"
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "कैलकुलेटर: c और a से अज्ञात भुजा",
      "metaTitle": "कैलकुलेटर: c और a से अज्ञात भुजा | Right Triangle Solver",
      "metaDescription": "जब कर्ण c और दूसरी भुजा a ज्ञात हो तो भुजा b ज्ञात करें।",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "याद रखें: c हमेशा कर्ण होता है - समकोण के विपरीत सबसे लंबी भुजा। यह एक पैर नहीं है. यदि आपके पास दो पैर हैं और इसके बजाय कर्ण की आवश्यकता है, तो पाइथागोरस प्रमेय कैलकुलेटर का उपयोग करें।",
      "intro": "जब कर्ण c और दूसरी भुजा a ज्ञात हो तो भुजा b ज्ञात करें।",
      "quickSummary": {
        "h2": "यह गुम पैर कैलकुलेटर क्या हल करता है",
        "intro": "इस पृष्ठ का उपयोग तब करें जब कर्ण और पैर a ज्ञात हो, लेकिन दूसरा पैर गायब हो। कैलकुलेटर वर्गमूल लेने से पहले ज्ञात पैर को कर्ण से घटाने के लिए पाइथागोरस प्रमेय को पुनर्व्यवस्थित करता है।",
        "cards": [
          {
            "label": "ज्ञात मूल्य",
            "value": "c = कर्ण; a = ज्ञात भुजा"
          },
          {
            "label": "ढूँढता है",
            "value": "b = अज्ञात भुजा"
          },
          {
            "label": "मुख्य सूत्र",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "आवश्यक जांच",
            "value": "c > a होना आवश्यक है।"
          }
        ]
      },
      "diagram": {
        "h2": "समकोण त्रिभुज आरेख: पैर ढूँढना b",
        "intro": "आरेख c और a को उन मानों के रूप में चिह्नित करता है जिन्हें आप पहले से जानते हैं। ऊर्ध्वाधर पैर b को लापता पक्ष के रूप में हाइलाइट किया गया है जिसे यह कैलकुलेटर हल करता है।",
        "caption": "ज्ञात कर्ण c, ज्ञात पाद a और अज्ञात पाद b के साथ समकोण त्रिभुज आरेख।",
        "sides": {
          "a": {
            "label": "a = ज्ञात",
            "description": "पैर a समकोण त्रिभुज के आधार के साथ ज्ञात पैर है।",
            "status": "known"
          },
          "b": {
            "label": "b = खोजें",
            "description": "लेग b अज्ञात लेग है जिसे c^2 से a^2 घटाकर हल किया गया है।",
            "status": "unknown"
          },
          "c": {
            "label": "c = ज्ञात",
            "description": "कर्ण c समकोण के विपरीत ज्ञात सबसे लंबी भुजा है।",
            "status": "known"
          }
        },
        "notes": [
          "c कर्ण होना चाहिए, कोई एक पैर नहीं।",
          "यदि c, a से कम या उसके बराबर है, तो इनपुट एक वैध समकोण त्रिभुज नहीं बनाते हैं।",
          "परिणाम b c और a के समान इकाई का उपयोग करता है।"
        ]
      },
      "calculator": {
        "outputLabel": "b = अज्ञात भुजा",
        "fields": [
          {
            "key": "c",
            "label": "c = कर्ण",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = ज्ञात भुजा",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "गुम पैर b फॉर्मूला",
        "paragraphs": [
          "पैर b खोजने का सूत्र पाइथागोरस प्रमेय (a² + b² = c²) से लिया गया है। b के लिए पुनर्व्यवस्थित करने से नीचे दिया गया सूत्र मिलता है।",
          "जहां c कर्ण (समकोण त्रिभुज की सबसे लंबी भुजा) है, a ज्ञात पैर है, और b वह लुप्त पैर है जिसे आप हल कर रहे हैं। घटाव पर ध्यान दें: आप ज्ञात पैर के वर्ग को कर्ण के वर्ग से घटाते हैं, फिर वर्गमूल लेते हैं।"
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "c और a से लेग b कैसे खोजें",
        "steps": [
          "पुष्टि करें कि c कर्ण है और a पैर है। कर्ण सदैव सबसे लंबी भुजा होती है।",
          "पहले इनपुट फ़ील्ड में कर्ण c दर्ज करें।",
          "दूसरे इनपुट फ़ील्ड में ज्ञात लेग a दर्ज करें।",
          "गुम पैर ढूंढने के लिए कैलकुलेट पर क्लिक करें।",
          "संपूर्ण चरण-दर-चरण समाधान के साथ, b का परिणाम पढ़ें।"
        ]
      },
      "example": {
        "h2": "उदाहरण: पैर b खोजें",
        "intro": "दिया गया है: c = 13, a = 5. कर्ण 13 और पाद 5 वाले समकोण त्रिभुज का लुप्त पाद 12 है।",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "गणना करने से पहले महत्वपूर्ण जाँच करें",
          "paragraphs": [
            "इस फ़ॉर्मूले का उपयोग करने से पहले, सुनिश्चित करें कि c, a से बड़ा है। कर्ण सदैव समकोण त्रिभुज की सबसे लंबी भुजा होती है। यदि c, a के बराबर है, तो आपको b = 0 मिलेगा, जिसका अर्थ है कि कोई त्रिकोण मौजूद नहीं है।",
            "यदि c, a से कम है, तो वर्गमूल के अंतर्गत अभिव्यक्ति नकारात्मक हो जाती है। इसका मतलब है कि दो इनपुट मान c को कर्ण के साथ एक वास्तविक समकोण त्रिभुज का वर्णन नहीं कर सकते हैं।"
          ],
          "listTitle": "पहले इन जांचों का उपयोग करें:",
          "listItems": [
            "c, 90° कोण के विपरीत है।",
            "c, a से बड़ा है।",
            "दोनों मान सकारात्मक हैं.",
            "c और a एक ही इकाई का उपयोग करते हैं।"
          ]
        },
        {
          "h2": "यह कैलकुलेटर कहां उपयोगी है",
          "paragraphs": [
            "यह कैलकुलेटर तब उपयोगी होता है जब एक विकर्ण या ढलान वाला माप ज्ञात होता है, एक लंबवत पक्ष ज्ञात होता है, और दूसरा लंबवत पक्ष गायब होता है। यह c-और-केस के लिए केंद्रित उपकरण है, इसलिए पृष्ठ पर प्रत्येक स्पष्टीकरण b को खोजने की ओर इशारा करता है।",
            "यह मापों को सत्यापित करने में भी मदद कर सकता है। यदि b के लिए मापा गया मान कैलकुलेटर के परिणाम से मेल नहीं खाता है, तो त्रिकोण सही नहीं हो सकता है, कर्ण को गलत लेबल किया जा सकता है, या एक माप एक अलग इकाई का उपयोग कर सकता है।"
          ],
          "listTitle": "सामान्य उदाहरणों में शामिल हैं:",
          "listItems": [
            "जब सीढ़ी की लंबाई c और जमीन की दूरी ज्ञात हो तो दीवार की ऊंचाई ज्ञात करना।",
            "जब ढलान की लंबाई और क्षैतिज ढलान ज्ञात हो तो ढलान का ऊर्ध्वाधर उत्थान ज्ञात करना।",
            "समकोण त्रिभुज होमवर्क समस्या की जाँच करना जो c और a देता है।",
            "फ़्रेमिंग, भूदृश्य, रैंप, या फर्श योजनाओं के लिए लेआउट माप की पुष्टि करना।"
          ]
        },
        {
          "h2": "उत्तर कैसे पढ़ें",
          "paragraphs": [
            "गुम पैर b लेबल वाला आउटपुट दूसरे पैर की लंबाई है जो a के साथ समकोण बनाता है। यह कर्ण नहीं है और c से छोटा होना चाहिए।",
            "यदि गणना की गई b बेहद छोटी है, तो आपका ज्ञात पैर a कर्ण c के बहुत करीब है। यह मान्य हो सकता है, लेकिन मूल्य का उपयोग करने से पहले आरेख और इकाइयों की जांच करना उचित है।"
          ],
          "listTitle": "एक वैध परिणाम को संतुष्ट करना चाहिए:",
          "listItems": [
            "b शून्य से बड़ा है.",
            "b, c से कम है।",
            "a² + b² लगभग c² के बराबर है।",
            "आउटपुट यूनिट इनपुट यूनिट से मेल खाती है।"
          ]
        },
        {
          "h2": "सामान्य गलतियाँ",
          "paragraphs": [
            "सबसे आम त्रुटि c को एक पैर मानना ​​है। इस कैलकुलेटर में, c कर्ण होना चाहिए, जो सबसे लंबी भुजा है और समकोण के विपरीत भुजा है।",
            "एक और बार-बार होने वाली गलती वर्गों को घटाने के बजाय जोड़ना है। जोड़ को एक कर्ण मिलता है; घटाने पर कर्ण से लुप्त पैर का पता चलता है।"
          ],
          "listTitle": "इन गलतियों से बचें:",
          "listItems": [
            "ज्ञात पैर को कर्ण क्षेत्र में डालना।",
            "c² - a² के बजाय c² + a² का उपयोग करना।",
            "c से बड़ा या उसके बराबर दर्ज करना।",
            "वर्गमूल लेने के बजाय b² पर रुकें।",
            "मीटर और सेंटीमीटर जैसी मिश्रण इकाइयाँ।"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "समकोण त्रिभुज भुजा कैलकुलेटर"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "कैलकुलेटर: पाइथागोरस प्रमेय"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "कैलकुलेटर: c और b से अज्ञात भुजा"
        }
      ],
      "faqs": [
        {
          "question": "इस कैलकुलेटर में c का क्या मतलब है?",
          "answer": "c समकोण त्रिभुज का कर्ण है - सबसे लंबी भुजा, जो 90° कोण के विपरीत स्थित है। यह एक पैर नहीं है. आप इस कैलकुलेटर में दो ज्ञात मानों में से एक के रूप में c दर्ज करें।"
        },
        {
          "question": "इस कैलकुलेटर में a का क्या मतलब है?",
          "answer": "a समकोण त्रिभुज के दो पैरों में से एक है। यह उन भुजाओं में से एक है जो समकोण बनाती है। इस कैलकुलेटर में, a वह पैर है जिसे आप पहले से ही जानते हैं।"
        },
        {
          "question": "यह कैलकुलेटर क्या खोजता है?",
          "answer": "यह कैलकुलेटर गुम हुए पैर b का पता लगाता है। कर्ण c और पाद a को देखते हुए, यह b = √(c² − a²) की गणना करता है और आपको चरण-दर-चरण समाधान दिखाता है।"
        },
        {
          "question": "क्या c a से छोटा हो सकता है?",
          "answer": "नहीं, एक समकोण त्रिभुज में, कर्ण हमेशा सबसे लंबी भुजा होती है। यदि c, a से छोटा है, तो मान एक वैध समकोण त्रिभुज नहीं बनाते हैं। गणना करने से पहले जाँच लें कि कर्ण कौन सा माप है।"
        },
        {
          "question": "मैं c और a में से b कैसे ढूंढूं?",
          "answer": "कर्ण का वर्ग करें (c²), ज्ञात पाद का वर्ग करें (a²), c² से a² घटाएं, और वर्गमूल लें। सूत्र b = √(c² − a²) है। या तत्काल उत्तर के लिए इस कैलकुलेटर में अपने मान दर्ज करें।"
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "कैलकुलेटर: c और b से अज्ञात भुजा",
      "metaTitle": "कैलकुलेटर: c और b से अज्ञात भुजा | Right Triangle Solver",
      "metaDescription": "जब कर्ण c और भुजा b ज्ञात हो तो भुजा a ज्ञात करें।",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "ध्यान रखें: c कर्ण है, पैर नहीं। यह त्रिभुज की सबसे लंबी भुजा है और 90° कोण के विपरीत बैठती है। यदि आपके दोनों पैर हैं और कर्ण की आवश्यकता है, तो इसके बजाय पाइथागोरस प्रमेय कैलकुलेटर का उपयोग करें।",
      "intro": "जब कर्ण c और भुजा b ज्ञात हो तो भुजा a ज्ञात करें।",
      "quickSummary": {
        "h2": "यह गुम पैर कैलकुलेटर क्या हल करता है",
        "intro": "जब आप कर्ण और पाद b जानते हों, लेकिन पाद b की आवश्यकता हो तो इस पृष्ठ का उपयोग करें। यह ज्ञात पक्ष b को अज्ञात पक्ष a से अलग रखता है ताकि सूत्र और परिणाम आपके त्रिकोण पर लेबल से मेल खाएं।",
        "cards": [
          {
            "label": "ज्ञात मूल्य",
            "value": "c = कर्ण; b = ज्ञात भुजा"
          },
          {
            "label": "ढूँढता है",
            "value": "a = अज्ञात भुजा"
          },
          {
            "label": "मुख्य सूत्र",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "आवश्यक जांच",
            "value": "c > b होना आवश्यक है।"
          }
        ]
      },
      "diagram": {
        "h2": "समकोण त्रिभुज आरेख: पैर ढूँढना a",
        "intro": "आरेख c को ज्ञात कर्ण और b को ज्ञात पैर के रूप में दिखाता है। बेस लेग a को कैलकुलेटर द्वारा लौटाए गए लुप्त मान के रूप में हाइलाइट किया गया है।",
        "caption": "ज्ञात कर्ण c, ज्ञात पाद b और अज्ञात पाद a के साथ समकोण त्रिभुज आरेख।",
        "sides": {
          "a": {
            "label": "a = खोजें",
            "description": "लेग a, c और b से हल किया गया अज्ञात बेस लेग है।",
            "status": "unknown"
          },
          "b": {
            "label": "b = ज्ञात",
            "description": "टांग b ज्ञात टांग है जो a के साथ समकोण बनाती है।",
            "status": "known"
          },
          "c": {
            "label": "c = ज्ञात",
            "description": "कर्ण c समकोण त्रिभुज की ज्ञात सबसे लंबी भुजा है।",
            "status": "known"
          }
        },
        "notes": [
          "कर्ण c इनपुट जोड़ी में सबसे लंबी भुजा होनी चाहिए।",
          "यदि c, b से कम या उसके बराबर है, तो दोबारा जांचें कि कौन सा मान कर्ण है।",
          "गणना की गई a में आपके द्वारा दर्ज किए गए मानों के समान ही इकाई है।"
        ]
      },
      "calculator": {
        "outputLabel": "a = अज्ञात भुजा",
        "fields": [
          {
            "key": "c",
            "label": "c = कर्ण",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = ज्ञात भुजा",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "गुम पैर a फॉर्मूला",
        "paragraphs": [
          "पाइथागोरस प्रमेय (a² + b² = c²) से शुरू करके, नीचे दिए गए सूत्र को प्राप्त करने के लिए a को हल करें।",
          "जहां c कर्ण है (सबसे लंबी भुजा, समकोण के विपरीत), b ज्ञात पैर है, और a वह लापता पैर है जिसे आप ढूंढना चाहते हैं। मुख्य ऑपरेशन घटाव है: कर्ण का वर्ग करें, ज्ञात पैर का वर्ग घटाएं, फिर जो बचा है उसका वर्गमूल लें।"
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "c और b से लेग a कैसे खोजें",
        "steps": [
          "सुनिश्चित करें कि आपने कर्ण (c) और ज्ञात पैर (b) की सही पहचान की है। कर्ण हमेशा 90° कोण के सामने होता है।",
          "पहले इनपुट फ़ील्ड में कर्ण c दर्ज करें।",
          "दूसरे इनपुट फ़ील्ड में ज्ञात लेग b दर्ज करें।",
          "पैर a ढूंढने के लिए कैलकुलेट पर क्लिक करें।",
          "a के परिणाम और नीचे दिखाए गए चरण-दर-चरण कार्य की समीक्षा करें।"
        ]
      },
      "example": {
        "h2": "उदाहरण: पैर a खोजें",
        "intro": "दिया गया है: c = 10, b = 6. कर्ण 10 और पाद 6 वाले समकोण त्रिभुज का लुप्त पाद 8 है।",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "गणना करने से पहले महत्वपूर्ण जाँच करें",
          "paragraphs": [
            "गणना को कार्यान्वित करने के लिए कर्ण c को b से बड़ा होना चाहिए। प्रत्येक समकोण त्रिभुज में कर्ण सबसे लंबी भुजा होती है। यदि c, b के बराबर है, तो सूत्र a = 0 देता है, जिसका अर्थ है कि कोई त्रिभुज नहीं बनाया जा सकता है।",
            "यदि c, b से कम है, तो वर्गमूल के तहत अभिव्यक्ति नकारात्मक हो जाती है और a के लिए कोई वास्तविक पक्ष लंबाई नहीं है। उस स्थिति में, दोबारा जांचें कि कौन सा पक्ष 90° कोण के विपरीत है।"
          ],
          "listTitle": "पहले इन जांचों का उपयोग करें:",
          "listItems": [
            "c समकोण के विपरीत भुजा है।",
            "c, b से बड़ा है।",
            "दोनों इनपुट धनात्मक संख्याएँ हैं।",
            "c और b एक ही माप इकाई का उपयोग करते हैं।"
          ]
        },
        {
          "h2": "यह कैलकुलेटर कहां उपयोगी है",
          "paragraphs": [
            "जब आपको कर्ण और पाद b का पता हो और पाद b को खोजने की आवश्यकता हो तो यह कैलकुलेटर सही उपकरण है। यह विशेष रूप से सहायक होता है जब आपका आरेख ज्ञात पैर को b और अज्ञात आधार या ऊंचाई को a के रूप में लेबल करता है।",
            "पेज माप जांच के रूप में भी काम करता है। यदि गणना की गई भुजा a मापी गई भुजा a से बहुत अलग है, तो त्रिभुज में वास्तविक 90° कोण शामिल नहीं हो सकता है या ज्ञात मानों में से एक को गलत तरीके से कॉपी किया गया हो सकता है।"
          ],
          "listTitle": "सामान्य उदाहरणों में शामिल हैं:",
          "listItems": [
            "जब ढलान की लंबाई c और ऊंचाई b ज्ञात हो तो आधार दूरी ज्ञात करना।",
            "कर्ण और क्षैतिज दूरी ज्ञात होने पर ऊर्ध्वाधर ऊँचाई ज्ञात करना।",
            "ज्यामिति समस्याओं को हल करना जो c और b देते हैं और a मांगते हैं।",
            "एक समकोण त्रिभुज बनाने वाले निर्माण, मानचित्रण, या फर्श-योजना माप की जाँच करना।"
          ]
        },
        {
          "h2": "उत्तर कैसे पढ़ें",
          "paragraphs": [
            "मिसिंग लेग a लेबल वाला आउटपुट दूसरा पक्ष है जो b के साथ समकोण बनाता है। यह कर्ण c से छोटा और शून्य से बड़ा होना चाहिए।",
            "यदि परिणाम c के करीब है, तो ज्ञात पैर b अपेक्षाकृत छोटा है। यदि परिणाम शून्य के करीब है, तो b लगभग c जितना लंबा है। दोनों हो सकते हैं, लेकिन उत्तर का उपयोग करने से पहले इनपुट लेबल की जाँच की जानी चाहिए।"
          ],
          "listTitle": "एक वैध परिणाम को संतुष्ट करना चाहिए:",
          "listItems": [
            "a शून्य से बड़ा है.",
            "a, c से कम है।",
            "a² + b² लगभग c² के बराबर है।",
            "आउटपुट इकाई c और b के लिए प्रयुक्त इकाई से मेल खाती है।"
          ]
        },
        {
          "h2": "सामान्य गलतियाँ",
          "paragraphs": [
            "सबसे बड़ा जोखिम एक पैर से कर्ण की अदला-बदली करना है। यह कैलकुलेटर मानता है कि c पहले से ही सबसे लंबी भुजा है, इसलिए गलत लेबल वाला c मान परिणाम को गलत बना देगा।",
            "दूसरी आम समस्या गलती से कर्ण सूत्र का उपयोग करना है। खोए हुए पैर को खोजने के लिए, आप ज्ञात पैर के वर्ग को कर्ण के वर्ग से घटाएं, फिर वर्गमूल लें।"
          ],
          "listTitle": "इन गलतियों से बचें:",
          "listItems": [
            "पैर b को कर्ण c के रूप में दर्ज करना।",
            "c² - b² के बजाय c² + b² का उपयोग करना।",
            "b को c से बड़ा या उसके बराबर दर्ज करना।",
            "घटाने के बाद वर्गमूल भूल जाना।",
            "विभिन्न इकाइयों का उपयोग करने वाले मापों का संयोजन।"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "समकोण त्रिभुज भुजा कैलकुलेटर"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "कैलकुलेटर: पाइथागोरस प्रमेय"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "कैलकुलेटर: c और a से अज्ञात भुजा"
        }
      ],
      "faqs": [
        {
          "question": "इस कैलकुलेटर में c का क्या मतलब है?",
          "answer": "c कर्ण है - समकोण त्रिभुज की सबसे लंबी भुजा, 90° कोण के विपरीत। इस कैलकुलेटर में, आप अपने दो ज्ञात मानों में से एक के रूप में c दर्ज करते हैं।"
        },
        {
          "question": "इस कैलकुलेटर में b का क्या मतलब है?",
          "answer": "b समकोण त्रिभुज के दो पैरों में से एक है। यह एक भुजा है जो समकोण बनाती है। यहां, b वह पैर है जिसे आप पहले से ही जानते हैं, और कैलकुलेटर लापता पैर a को खोजने के लिए c के साथ इसका उपयोग करता है।"
        },
        {
          "question": "यह कैलकुलेटर क्या खोजता है?",
          "answer": "यह लापता पैर a को ढूंढता है। आप कर्ण (c) और एक पैर (b) प्रदान करते हैं, और कैलकुलेटर चरण-दर-चरण समाधान के साथ आपको अज्ञात पैर देने के लिए सूत्र a = √(c² − b²) लागू करता है।"
        },
        {
          "question": "क्या c b से छोटा हो सकता है?",
          "answer": "नहीं, किसी समकोण त्रिभुज में कर्ण हमेशा सबसे लंबी भुजा होती है। यदि c के लिए आपका मान b से छोटा है, तो इनपुट एक वैध समकोण त्रिभुज का प्रतिनिधित्व नहीं करते हैं। दोबारा जांचें कि कौन सा माप कर्ण से मेल खाता है।"
        },
        {
          "question": "मैं c और b में से कैसे ढूंढूं?",
          "answer": "कर्ण का वर्ग करें (c²), ज्ञात पाद का वर्ग करें (b²), c² से b² घटाएं, और परिणाम का वर्गमूल लें। सूत्र a = √(c² − b²) है। उत्तर स्वचालित रूप से प्राप्त करने के लिए आप इस कैलकुलेटर में अपने मान भी दर्ज कर सकते हैं।"
        }
      ]
    }
  },
  "es": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Calculadora: Teorema de Pitágoras",
      "metaTitle": "Calculadora: Teorema de Pitágoras | Right Triangle Solver",
      "metaDescription": "Calcula la hipotenusa cuando se conocen ambos catetos. Esta es la identidad principal para cada triángulo rectángulo.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Ya sea que esté resolviendo un problema de tarea o midiendo una diagonal en la vida real, esta herramienta le brinda la respuesta en segundos, con la solución completa mostrada paso a paso.",
      "intro": "Calcula la hipotenusa cuando se conocen ambos catetos. Esta es la identidad principal para cada triángulo rectángulo.",
      "quickSummary": {
        "h2": "Lo que resuelve esta calculadora pitagórica",
        "intro": "Utilice esta página cuando conozca los dos lados que se encuentran en el ángulo 90° y falte el lado diagonal. La calculadora se centra en el caso clásico de hipotenusa, por lo que las entradas son simples y el resultado es fácil de verificar.",
        "cards": [
          {
            "label": "Valores conocidos",
            "value": "a = cateto opuesto al ángulo A; b = cateto opuesto al ángulo B"
          },
          {
            "label": "encuentra",
            "value": "c = hipotenusa"
          },
          {
            "label": "Fórmula principal",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Lo mejor para",
            "value": "Diagonales, escaleras, rampas, mamparas y tarea de geometría."
          }
        ]
      },
      "diagram": {
        "h2": "Diagrama de triángulo rectángulo: encontrar la hipotenusa",
        "intro": "El diagrama muestra la relación lateral exacta utilizada por la herramienta. Los dos catetos son los valores de entrada conocidos y el lado inclinado c es la hipotenusa que encuentra la calculadora.",
        "caption": "Diagrama de triángulo rectángulo con catetos conocidos a y b e hipotenusa desconocida c.",
        "sides": {
          "a": {
            "label": "a = conocido",
            "description": "El cateto a es uno de los dos lados que forma el ángulo recto.",
            "status": "known"
          },
          "b": {
            "label": "b = conocido",
            "description": "El cateto b es el otro lado que forma el ángulo recto.",
            "status": "known"
          },
          "c": {
            "label": "c = encontrar",
            "description": "La hipotenusa c es el lado más largo y se encuentra opuesto al ángulo 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a y b se pueden intercambiar; el resultado de la hipotenusa será el mismo.",
          "Utilice la misma unidad para ambos tramos antes de realizar el cálculo.",
          "La respuesta c siempre será mayor que cualquiera de los catetos en un triángulo rectángulo válido."
        ]
      },
      "calculator": {
        "outputLabel": "c = hipotenusa",
        "fields": [
          {
            "key": "a",
            "label": "a = cateto opuesto al ángulo A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = cateto opuesto al ángulo B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Fórmula del teorema de Pitágoras",
        "paragraphs": [
          "El teorema de Pitágoras establece que en un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los dos catetos. Para resolver la hipotenusa, saca la raíz cuadrada de ambos lados.",
          "En esta fórmula, a y b son los dos catetos del triángulo rectángulo, los lados que forman el ángulo recto. c es la hipotenusa, el lado más largo, opuesto al ángulo recto. Esta fórmula sólo funciona para triángulos rectángulos."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Cómo utilizar la calculadora del teorema de Pitágoras",
        "steps": [
          "Identifica los dos catetos de tu triángulo rectángulo. Estos son los lados que forman el ángulo recto.",
          "Ingrese el tramo a en el primer campo de entrada.",
          "Ingrese el tramo b en el segundo campo de entrada.",
          "Haga clic en Calcular para encontrar la hipotenusa.",
          "Lea el resultado de c, junto con la solución paso a paso."
        ]
      },
      "example": {
        "h2": "Ejemplo: encontrar la hipotenusa",
        "intro": "Dado: a = 6, b = 8. La hipotenusa de un triángulo rectángulo con catetos 6 y 8 es 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Dónde es útil esta calculadora",
          "paragraphs": [
            "La calculadora de hipotenusa es útil siempre que dos distancias perpendiculares se combinan en una distancia diagonal. Es especialmente útil cuando un dibujo, un plano de planta o un problema de tarea muestra los lados horizontal y vertical pero deja el lado diagonal en blanco.",
            "Debido a que esta página solo resuelve c, evita la confusión de cambiar entre modos laterales. Si sus valores conocidos son los dos catetos, esta es la herramienta del teorema de Pitágoras que debe utilizar."
          ],
          "listTitle": "Los ejemplos comunes incluyen:",
          "listItems": [
            "Encontrar la diagonal de un rectángulo, una pantalla, un diseño de mosaico o una habitación.",
            "Calcular la longitud de una escalera a partir de la altura de la pared y la distancia al suelo.",
            "Estimación de la longitud inclinada de una rampa desde subida y bajada.",
            "Verificar la tarea del triángulo rectángulo antes de enviar la respuesta final."
          ]
        },
        {
          "h2": "Consejos de entrada para obtener mejores resultados",
          "paragraphs": [
            "Ingrese las longitudes de ambas catetos como números positivos. Los decimales están bien y la calculadora mantendrá la precisión suficiente para que el trabajo paso a paso sea útil.",
            "Las dos entradas deben utilizar la misma unidad. Si a se mide en pies y b se mide en pulgadas, primero convierta una medida para que el resultado sea significativo."
          ],
          "listTitle": "Antes de calcular, verifique que:",
          "listItems": [
            "a y b son los lados que tocan el ángulo 90°.",
            "Ninguna entrada es cero o negativa.",
            "Ambos valores se miden en la misma unidad.",
            "Estás resolviendo la hipotenusa, no un cateto faltante."
          ]
        },
        {
          "h2": "Cómo leer la respuesta",
          "paragraphs": [
            "La salida etiquetada Hipotenusa c es el lado opuesto al ángulo recto. Es el lado diagonal del diagrama y debe ser más largo que ambos lados de entrada.",
            "Si su resultado parece más pequeño que a o b, es una señal de que una de las entradas estaba mal etiquetada o que el triángulo no es en realidad un triángulo rectángulo."
          ],
          "listTitle": "Una rápida comprobación de la razonabilidad:",
          "listItems": [
            "c debe ser mayor que a.",
            "c debe ser mayor que b.",
            "c debe ser menor que a + b.",
            "Para tripletas comunes como 3-4-5 o 5-12-13, el resultado debe coincidir con el triple conocido."
          ]
        },
        {
          "h2": "Errores comunes",
          "paragraphs": [
            "La mayoría de las respuestas incorrectas a la hipotenusa provienen del uso de la fórmula correcta en los lados equivocados. Los catetos deben ser los dos lados que forman el ángulo recto; la hipotenusa nunca es una entrada en esta página.",
            "Otro problema común es detenerse en a² + b². Ese valor es c², no c. El paso de la raíz cuadrada es lo que convierte el valor al cuadrado nuevamente en la longitud real del lado."
          ],
          "listTitle": "Evite estos errores:",
          "listItems": [
            "Usando la fórmula en un triángulo que no tiene un ángulo 90°.",
            "Ingresando el lado diagonal como a o b.",
            "Olvidar sacar la raíz cuadrada al final.",
            "Mezclando unidades como pulgadas y pies en el mismo cálculo."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calculadora del lado del triángulo rectángulo"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Calculadora: Cateto Faltante de c y a"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Calculadora: Cateto Faltante de c y b"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es el teorema de Pitágoras?",
          "answer": "El teorema de Pitágoras es una fórmula que relaciona los tres lados de un triángulo rectángulo: a² + b² = c². Dice que el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los dos catetos. Sólo se aplica a triángulos rectángulos."
        },
        {
          "question": "¿Qué significa c en la fórmula?",
          "answer": "En la fórmula c² = a² + b², c es la hipotenusa, el lado más largo del triángulo rectángulo. Es el lado directamente enfrente del ángulo 90°."
        },
        {
          "question": "¿Puedo usar esta calculadora para cualquier triángulo?",
          "answer": "No. Esta calculadora utiliza el teorema de Pitágoras, que sólo funciona para triángulos rectángulos. Si tu triángulo no tiene un ángulo 90°, la fórmula no dará un resultado correcto."
        },
        {
          "question": "¿Cómo encuentro la hipotenusa?",
          "answer": "Para encontrar la hipotenusa, eleva al cuadrado ambos catetos (a² y b²), súmalos y saca la raíz cuadrada de la suma. La fórmula es c = √(a² + b²). O simplemente ingrese sus valores arriba y deje que la calculadora lo haga."
        },
        {
          "question": "¿Qué son a y b en un triángulo rectángulo?",
          "answer": "a y b son los dos catetos, los lados que forman el ángulo recto. Pueden tener cualquier longitud positiva y no importa cuál llames a o b. La hipotenusa (c) es siempre el lado restante."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Calculadora: Cateto Faltante de c y a",
      "metaTitle": "Calculadora: Cateto Faltante de c y a | Right Triangle Solver",
      "metaDescription": "Encuentra el cateto b cuando se conocen la hipotenusa c y el otro cateto a.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Recuerde: c es siempre la hipotenusa, el lado más largo, opuesto al ángulo recto. No es una cateto. Si tienes dos catetos y necesitas la hipotenusa, usa la calculadora del teorema de Pitágoras.",
      "intro": "Encuentra el cateto b cuando se conocen la hipotenusa c y el otro cateto a.",
      "quickSummary": {
        "h2": "Lo que resuelve esta calculadora de cateto faltante",
        "intro": "Utilice esta página cuando se conozcan la hipotenusa y el cateto a, pero falte el otro cateto. La calculadora reorganiza el teorema de Pitágoras para restar el cateto conocido de la hipotenusa antes de sacar la raíz cuadrada.",
        "cards": [
          {
            "label": "Valores conocidos",
            "value": "c = hipotenusa; a = cateto conocido"
          },
          {
            "label": "encuentra",
            "value": "b = cateto desconocido"
          },
          {
            "label": "Fórmula principal",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "cheque requerido",
            "value": "Requiere c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Diagrama de triángulo rectángulo: encontrar el cateto b",
        "intro": "El diagrama marca c y a como los valores que ya conoce. El cateto vertical b está resaltado como el lado faltante que resuelve esta calculadora.",
        "caption": "Diagrama de triángulo rectángulo con hipotenusa conocida c, cateto conocido a y cateto desconocido b.",
        "sides": {
          "a": {
            "label": "a = conocido",
            "description": "El cateto a es el cateto conocido a lo largo de la base del triángulo rectángulo.",
            "status": "known"
          },
          "b": {
            "label": "b = encontrar",
            "description": "El cateto b es el cateto desconocido que se resuelve restando a^2 de c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = conocido",
            "description": "La hipotenusa c es el lado más largo conocido opuesto al ángulo recto.",
            "status": "known"
          }
        },
        "notes": [
          "c debe ser la hipotenusa, no uno de los catetos.",
          "Si c es menor o igual que a, las entradas no forman un triángulo rectángulo válido.",
          "El resultado b utiliza la misma unidad que c y a."
        ]
      },
      "calculator": {
        "outputLabel": "b = cateto desconocido",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenusa",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = cateto conocido",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Fórmula b de cateto faltante",
        "paragraphs": [
          "La fórmula para encontrar el cateto b se deriva del teorema de Pitágoras (a² + b² = c²). Reorganizando para b se obtiene la siguiente fórmula.",
          "Donde c es la hipotenusa (el lado más largo del triángulo rectángulo), a es el cateto conocido y b es el cateto faltante que estás resolviendo. Observa la resta: restas el cuadrado del cateto conocido del cuadrado de la hipotenusa y luego sacas la raíz cuadrada."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Cómo encontrar la cateto b de c y a",
        "steps": [
          "Confirma que c es la hipotenusa y a es un cateto. La hipotenusa es siempre el lado más largo.",
          "Ingrese la hipotenusa c en el primer campo de entrada.",
          "Ingrese el tramo conocido a en el segundo campo de entrada.",
          "Haga clic en Calcular para encontrar el tramo que falta.",
          "Lea el resultado de b, junto con la solución completa paso a paso."
        ]
      },
      "example": {
        "h2": "Ejemplo: encontrar el tramo b",
        "intro": "Dado: c = 13, a = 5. El cateto que falta de un triángulo rectángulo con hipotenusa 13 y cateto 5 es 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Verificación importante antes de calcular",
          "paragraphs": [
            "Antes de usar esta fórmula, asegúrese de que c sea mayor que a. La hipotenusa es siempre el lado más largo de un triángulo rectángulo. Si c es igual a a, obtendrías b = 0, lo que significa que no existe ningún triángulo.",
            "Si c es menor que a, la expresión bajo la raíz cuadrada se vuelve negativa. Eso significa que los dos valores de entrada no pueden describir un triángulo rectángulo real con c como hipotenusa."
          ],
          "listTitle": "Utilice estos controles primero:",
          "listItems": [
            "c está opuesto al ángulo 90°.",
            "c es mayor que a.",
            "Ambos valores son positivos.",
            "c y a utilizan la misma unidad."
          ]
        },
        {
          "h2": "Dónde es útil esta calculadora",
          "paragraphs": [
            "Esta calculadora es útil cuando se conoce una medida diagonal o inclinada, se conoce un lado perpendicular y falta el otro lado perpendicular. Es la herramienta enfocada para el caso c-y-a, por lo que cada explicación en la página apunta a encontrar b.",
            "También puede ayudar a verificar las medidas. Si un valor medido para b no coincide con el resultado de la calculadora, es posible que el triángulo no sea correcto, que la hipotenusa esté mal etiquetada o que una medida utilice una unidad diferente."
          ],
          "listTitle": "Los ejemplos comunes incluyen:",
          "listItems": [
            "Encontrar la altura de la pared cuando se conocen la longitud de la escalera c y la distancia al suelo a.",
            "Encontrar la elevación vertical de una pendiente cuando se conocen la longitud de la pendiente y su recorrido horizontal.",
            "Comprobando un problema de tarea de triángulo rectángulo que da c y a.",
            "Confirmar las medidas de diseño para marcos, paisajismo, rampas o planos de planta."
          ]
        },
        {
          "h2": "Cómo leer la respuesta",
          "paragraphs": [
            "La salida etiquetada cateto faltante b es la longitud del otro cateto que forma el ángulo recto con a. No es la hipotenusa y debería ser más corta que c.",
            "Si el b calculado es extremadamente pequeño, su cateto conocido a está muy cerca de la hipotenusa c. Eso puede ser válido, pero vale la pena revisar el diagrama y las unidades antes de usar el valor."
          ],
          "listTitle": "Un resultado válido debe satisfacer:",
          "listItems": [
            "b es mayor que cero.",
            "b es menor que c.",
            "a² + b² es aproximadamente igual a c².",
            "La unidad de salida coincide con la unidad de entrada."
          ]
        },
        {
          "h2": "Errores comunes",
          "paragraphs": [
            "El error más común es tratar a c como una cateto. En esta calculadora, c debe ser la hipotenusa, que es el lado más largo y el lado opuesto al ángulo recto.",
            "Otro error frecuente es sumar los cuadrados en lugar de restar. La suma encuentra una hipotenusa; la resta encuentra un cateto faltante de la hipotenusa."
          ],
          "listTitle": "Evite estos errores:",
          "listItems": [
            "Poner el cateto conocido en el campo de la hipotenusa.",
            "Usando c² + a² en lugar de c² - a².",
            "Ingresando un valor mayor o igual a c.",
            "Deteniéndose en b² en lugar de sacar la raíz cuadrada.",
            "Unidades de mezcla como metros y centímetros."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calculadora del lado del triángulo rectángulo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calculadora: Teorema de Pitágoras"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Calculadora: Cateto Faltante de c y b"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué significa c en esta calculadora?",
          "answer": "c es la hipotenusa del triángulo rectángulo, el lado más largo, ubicado frente al ángulo 90°. No es una cateto. Ingresa c como uno de los dos valores conocidos en esta calculadora."
        },
        {
          "question": "¿Qué significa a en esta calculadora?",
          "answer": "a es uno de los dos catetos del triángulo rectángulo. Es uno de los lados que forma el ángulo recto. En esta calculadora, a es el tramo que ya conoces."
        },
        {
          "question": "¿Qué encuentra esta calculadora?",
          "answer": "Esta calculadora encuentra el cateto faltante b. Dada la hipotenusa c y el cateto a, calcula b = √(c² − a²) y le muestra la solución paso a paso."
        },
        {
          "question": "¿Puede c ser más pequeño que a?",
          "answer": "No. En un triángulo rectángulo, la hipotenusa es siempre el lado más largo. Si c es menor que a, los valores no forman un triángulo rectángulo válido. Comprueba qué medida es la hipotenusa antes de calcular."
        },
        {
          "question": "¿Cómo encuentro b entre c y a?",
          "answer": "Eleva al cuadrado la hipotenusa (c²), eleva al cuadrado el cateto conocido (a²), resta a² de c² y saca la raíz cuadrada. La fórmula es b = √(c² − a²). O ingrese sus valores en esta calculadora para obtener una respuesta instantánea."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Calculadora: Cateto Faltante de c y b",
      "metaTitle": "Calculadora: Cateto Faltante de c y b | Right Triangle Solver",
      "metaDescription": "Encuentra el cateto a cuando se conocen la hipotenusa c y el cateto b.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Tenga en cuenta: c es la hipotenusa, no un cateto. Es el lado más largo del triángulo y se encuentra frente al ángulo 90°. Si tienes ambos catetos y necesitas la hipotenusa, usa la Calculadora del teorema de Pitágoras.",
      "intro": "Encuentra el cateto a cuando se conocen la hipotenusa c y el cateto b.",
      "quickSummary": {
        "h2": "Lo que resuelve esta calculadora de cateto faltante",
        "intro": "Utilice esta página cuando conozca la hipotenusa y el cateto b, pero necesite el cateto a. Mantiene el lado conocido b separado del lado desconocido a para que la fórmula y el resultado coincidan con las etiquetas de su triángulo.",
        "cards": [
          {
            "label": "Valores conocidos",
            "value": "c = hipotenusa; b = cateto conocido"
          },
          {
            "label": "encuentra",
            "value": "a = cateto desconocido"
          },
          {
            "label": "Fórmula principal",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "cheque requerido",
            "value": "Requiere c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Diagrama de triángulo rectángulo: encontrar el cateto a",
        "intro": "El diagrama muestra c como la hipotenusa conocida y b como el cateto conocido. El tramo base a está resaltado como el valor faltante devuelto por la calculadora.",
        "caption": "Diagrama de triángulo rectángulo con hipotenusa conocida c, cateto conocido b y cateto desconocido a.",
        "sides": {
          "a": {
            "label": "a = encontrar",
            "description": "El tramo a es el tramo base desconocido resuelto a partir de c y b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = conocido",
            "description": "El cateto b es el conocido cateto que forma el ángulo recto con a.",
            "status": "known"
          },
          "c": {
            "label": "c = conocido",
            "description": "La hipotenusa c es el lado más largo conocido del triángulo rectángulo.",
            "status": "known"
          }
        },
        "notes": [
          "La hipotenusa c debe ser el lado más largo del par de entrada.",
          "Si c es menor o igual que b, vuelva a verificar qué valor es la hipotenusa.",
          "La a calculada tiene la misma unidad que los valores que ingresó."
        ]
      },
      "calculator": {
        "outputLabel": "a = cateto desconocido",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenusa",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = cateto conocido",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Fórmula a de cateto faltante",
        "paragraphs": [
          "A partir del teorema de Pitágoras (a² + b² = c²), resuelve a para obtener la siguiente fórmula.",
          "Donde c es la hipotenusa (el lado más largo, opuesto al ángulo recto), b es el cateto conocido y a es el cateto faltante que quieres encontrar. La operación clave es la resta: elevar al cuadrado la hipotenusa, restar el cuadrado del cateto conocido y luego sacar la raíz cuadrada del resto."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Cómo encontrar la cateto a de c y b",
        "steps": [
          "Asegúrate de haber identificado correctamente la hipotenusa (c) y el cateto conocido (b). La hipotenusa siempre está frente al ángulo 90°.",
          "Ingrese la hipotenusa c en el primer campo de entrada.",
          "Ingrese el tramo conocido b en el segundo campo de entrada.",
          "Haga clic en Calcular para encontrar el cateto a.",
          "Revise el resultado de a y el trabajo paso a paso que se muestra a continuación."
        ]
      },
      "example": {
        "h2": "Ejemplo: encontrar el tramo a",
        "intro": "Dado: c = 10, b = 6. El cateto que falta de un triángulo rectángulo con hipotenusa 10 y cateto 6 es 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Verificación importante antes de calcular",
          "paragraphs": [
            "La hipotenusa c debe ser mayor que b para que el cálculo funcione. En todo triángulo rectángulo, la hipotenusa es el lado más largo. Si c es igual a b, la fórmula da a = 0, lo que significa que no se puede formar ningún triángulo.",
            "Si c es menor que b, la expresión bajo la raíz cuadrada se vuelve negativa y no existe una longitud de lado real para a. En ese caso, vuelva a verificar qué lado está opuesto al ángulo 90°."
          ],
          "listTitle": "Utilice estos controles primero:",
          "listItems": [
            "c es el lado opuesto al ángulo recto.",
            "c es mayor que b.",
            "Ambas entradas son números positivos.",
            "c y b utilizan la misma unidad de medida."
          ]
        },
        {
          "h2": "Dónde es útil esta calculadora",
          "paragraphs": [
            "Esta calculadora es la herramienta adecuada cuando conoces la hipotenusa y el cateto b y necesitas encontrar el cateto a. Es especialmente útil cuando su diagrama etiqueta el cateto conocido como b y la base o altura desconocida como a.",
            "La página también funciona como control de medidas. Si el lado calculado a es muy diferente del lado medido a, es posible que el triángulo no incluya un ángulo 90° verdadero o que uno de los valores conocidos se haya copiado incorrectamente."
          ],
          "listTitle": "Los ejemplos comunes incluyen:",
          "listItems": [
            "Encontrar una distancia base cuando se conocen la longitud de la pendiente c y la altura b.",
            "Encontrar una altura vertical cuando se conocen la hipotenusa y la distancia horizontal.",
            "Resolver problemas de geometría que dan c y b y piden a.",
            "Verificar medidas de construcción, mapeo o planos de planta que formen un triángulo rectángulo."
          ]
        },
        {
          "h2": "Cómo leer la respuesta",
          "paragraphs": [
            "La salida etiquetada cateto faltante a es el otro lado que forma el ángulo recto con b. Debe ser más corto que la hipotenusa c y mayor que cero.",
            "Si el resultado es cercano a c, el tramo conocido b es relativamente pequeño. Si el resultado es cercano a cero, b es casi tan largo como c. Pueden suceder ambas cosas, pero se deben verificar las etiquetas de entrada antes de usar la respuesta."
          ],
          "listTitle": "Un resultado válido debe satisfacer:",
          "listItems": [
            "a es mayor que cero.",
            "a es menor que c.",
            "a² + b² es aproximadamente igual a c².",
            "La unidad de salida coincide con la unidad utilizada para c y b."
          ]
        },
        {
          "h2": "Errores comunes",
          "paragraphs": [
            "El mayor riesgo es intercambiar la hipotenusa por un cateto. Esta calculadora supone que c ya es el lado más largo, por lo que un valor de c mal etiquetado hará que el resultado sea incorrecto.",
            "Un segundo problema común es el uso por error de la fórmula de la hipotenusa. Para encontrar un cateto faltante, restas el cuadrado del cateto conocido del cuadrado de la hipotenusa y luego sacas la raíz cuadrada."
          ],
          "listTitle": "Evite estos errores:",
          "listItems": [
            "Entrando en el cateto b como hipotenusa c.",
            "Usando c² + b² en lugar de c² - b².",
            "Ingresando b mayor o igual a c.",
            "Olvidar la raíz cuadrada después de restar.",
            "Combinar medidas que utilizan diferentes unidades."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calculadora del lado del triángulo rectángulo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calculadora: Teorema de Pitágoras"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Calculadora: Cateto Faltante de c y a"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué significa c en esta calculadora?",
          "answer": "c es la hipotenusa, el lado más largo del triángulo rectángulo, opuesto al ángulo 90°. En esta calculadora, ingresa c como uno de sus dos valores conocidos."
        },
        {
          "question": "¿Qué significa b en esta calculadora?",
          "answer": "b es uno de los dos catetos del triángulo rectángulo. Es un lado que forma el ángulo recto. Aquí, b es el tramo que ya conoce y la calculadora lo usa junto con c para encontrar el tramo faltante a."
        },
        {
          "question": "¿Qué encuentra esta calculadora?",
          "answer": "Encuentra la cateto perdida a. Proporcionas la hipotenusa (c) y un cateto (b), y la calculadora aplica la fórmula a = √(c² − b²) para darte el cateto desconocido con una solución paso a paso."
        },
        {
          "question": "¿Puede c ser más pequeño que b?",
          "answer": "No. La hipotenusa es siempre el lado más largo de un triángulo rectángulo. Si su valor para c es menor que b, las entradas no representan un triángulo rectángulo válido. Vuelve a comprobar qué medida corresponde a la hipotenusa."
        },
        {
          "question": "¿Cómo encuentro un de c y b?",
          "answer": "Eleva al cuadrado la hipotenusa (c²), eleva al cuadrado el cateto conocido (b²), resta b² de c² y saca la raíz cuadrada del resultado. La fórmula es a = √(c² − b²). También puedes ingresar tus valores en esta calculadora para obtener la respuesta automáticamente."
        }
      ]
    }
  },
  "ru": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Калькулятор: Теорема Пифагора",
      "metaTitle": "Калькулятор: Теорема Пифагора | Right Triangle Solver",
      "metaDescription": "Вычислите гипотенузу, когда известны оба катета. Это основное тождество для любого прямоугольного треугольника.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Независимо от того, решаете ли вы домашнюю задачу или измеряете диагональ в реальной жизни, этот инструмент даст вам ответ за считанные секунды - полное решение показано шаг за шагом.",
      "intro": "Вычислите гипотенузу, когда известны оба катета. Это основное тождество для любого прямоугольного треугольника.",
      "quickSummary": {
        "h2": "Что решает этот пифагорейский калькулятор",
        "intro": "Используйте эту страницу, если известны две стороны, пересекающиеся под углом 90°, а диагональная сторона отсутствует. Калькулятор ориентирован на классический случай гипотенузы, поэтому входные данные остаются простыми, а результат легко проверить.",
        "cards": [
          {
            "label": "Известные значения",
            "value": "a = катет, противолежащий углу A; b = катет, противолежащий углу B"
          },
          {
            "label": "Находки",
            "value": "c = гипотенуза"
          },
          {
            "label": "Основная формула",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Лучшее для",
            "value": "Диагонали, лестницы, пандусы, ширмы и домашнее задание по геометрии"
          }
        ]
      },
      "diagram": {
        "h2": "Схема прямоугольного треугольника: нахождение гипотенузы",
        "intro": "На диаграмме показано точное соотношение сторон, используемое инструментом. Два катета - это известные входные значения, а наклонная сторона c - это гипотенуза, которую находит калькулятор.",
        "caption": "Диаграмма прямоугольного треугольника с известными катетами a и b и неизвестной гипотенузой c.",
        "sides": {
          "a": {
            "label": "a = известно",
            "description": "Нога a - это одна из двух сторон, образующая прямой угол.",
            "status": "known"
          },
          "b": {
            "label": "b = известно",
            "description": "Ножка b - это другая сторона, образующая прямой угол.",
            "status": "known"
          },
          "c": {
            "label": "c = найти",
            "description": "Гипотенуза c - самая длинная сторона и расположена напротив угла 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a и b можно поменять местами; гипотенуза будет такой же.",
          "Перед расчетом используйте одну и ту же единицу измерения для обеих ног.",
          "Ответ c всегда будет больше любого катета правильного прямоугольного треугольника."
        ]
      },
      "calculator": {
        "outputLabel": "c = гипотенуза",
        "fields": [
          {
            "key": "a",
            "label": "a = катет, противолежащий углу A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = катет, противолежащий углу B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Формула теоремы Пифагора",
        "paragraphs": [
          "Теорема Пифагора гласит, что в прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов двух катетов. Чтобы найти гипотенузу, извлеките квадратный корень из обеих сторон.",
          "В этой формуле a и b - это две катеты прямоугольного треугольника - стороны, образующие прямой угол. c - гипотенуза, самая длинная сторона, противолежащая прямому углу. Эта формула работает только для прямоугольных треугольников."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Как использовать калькулятор теоремы Пифагора",
        "steps": [
          "Определите две стороны прямоугольного треугольника. Это стороны, образующие прямой угол.",
          "Введите ногу a в первое поле ввода.",
          "Введите ногу b во второе поле ввода.",
          "Нажмите «Рассчитать», чтобы найти гипотенузу.",
          "Прочтите результат для c вместе с пошаговым решением."
        ]
      },
      "example": {
        "h2": "Пример: найти гипотенузу.",
        "intro": "Дано: a = 6, b = 8. Гипотенуза прямоугольного треугольника с катетами 6 и 8 равна 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Где полезен этот калькулятор",
          "paragraphs": [
            "Калькулятор гипотенузы полезен, когда два перпендикулярных расстояния объединяются в одно диагональное расстояние. Это особенно полезно, когда в чертеже, плане помещения или домашнем задании указаны горизонтальная и вертикальная стороны, а диагональная сторона оставлена ​​пустой.",
            "Поскольку эта страница решает только c, она позволяет избежать путаницы при переключении между боковыми режимами. Если вашими известными значениями являются две опоры, вам следует использовать этот инструмент теоремы Пифагора."
          ],
          "listTitle": "Общие примеры включают в себя:",
          "listItems": [
            "Нахождение диагонали прямоугольника, экрана, плитки или комнаты.",
            "Расчет длины лестницы исходя из высоты стены и расстояния до земли.",
            "Оценка наклонной длины пандуса от подъема и спуска.",
            "Проверка домашнего задания в виде правильного треугольника перед отправкой окончательного ответа."
          ]
        },
        {
          "h2": "Советы по вводу для лучших результатов",
          "paragraphs": [
            "Введите обе длины ног как положительные числа. Десятичные дроби подходят, и калькулятор будет сохранять достаточную точность, чтобы сделать пошаговую работу полезной.",
            "Два входа должны использовать один и тот же блок. Если a измеряется в футах, а b - в дюймах, сначала преобразуйте одно измерение, чтобы результат был значимым."
          ],
          "listTitle": "Прежде чем производить расчет, проверьте, что:",
          "listItems": [
            "a и b - стороны, соприкасающиеся с углом 90°.",
            "Ни один вход не является нулевым или отрицательным.",
            "Обе величины измеряются в одних и тех же единицах.",
            "Вы ищете гипотенузу, а не отсутствующий катет."
          ]
        },
        {
          "h2": "Как прочитать ответ",
          "paragraphs": [
            "Выход с надписью «Гипотенуза c» представляет собой сторону, противоположную прямому углу. На схеме это диагональная сторона, и она должна быть длиннее обеих входных ветвей.",
            "Если ваш результат выглядит меньше, чем a или b, это признак того, что один из входных данных был неправильно помечен или что треугольник на самом деле не является прямоугольным."
          ],
          "listTitle": "Быстрая проверка разумности:",
          "listItems": [
            "c должен быть больше, чем a.",
            "c должен быть больше b.",
            "c должен быть меньше + b.",
            "Для обычных троек, таких как 3-4-5 или 5-12-13, результат должен соответствовать известной тройке."
          ]
        },
        {
          "h2": "Распространенные ошибки",
          "paragraphs": [
            "Большинство неправильных ответов на гипотенузу возникают из-за использования правильной формулы не с той стороны. Ножки должны представлять собой две стороны, образующие прямой угол; гипотенуза никогда не является входными данными на этой странице.",
            "Другая распространенная проблема - остановка на a² + b². Это значение c², а не c. Шаг квадратного корня - это то, что превращает квадратное значение обратно в фактическую длину стороны."
          ],
          "listTitle": "Избегайте этих ошибок:",
          "listItems": [
            "Использование формулы для треугольника, не имеющего угла 90°.",
            "Ввод диагональной стороны как a или b.",
            "Забыв извлечь квадратный корень в конце.",
            "Смешивание единиц измерения, таких как дюймы и футы, в одном расчете."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Калькулятор стороны прямоугольного треугольника"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Калькулятор: Поиск катета по c и a"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Калькулятор: Поиск катета по c и b"
        }
      ],
      "faqs": [
        {
          "question": "Что такое теорема Пифагора?",
          "answer": "Теорема Пифагора - это формула, связывающая три стороны прямоугольного треугольника: a² + b² = c². Он гласит, что квадрат гипотенузы равен сумме квадратов двух катетов. Это применимо только к прямоугольным треугольникам."
        },
        {
          "question": "Что означает c в формуле?",
          "answer": "В формуле c² = a² + b² c - это гипотенуза - самая длинная сторона прямоугольного треугольника. Это сторона прямо напротив угла 90°."
        },
        {
          "question": "Могу ли я использовать этот калькулятор для любого треугольника?",
          "answer": "Нет. Этот калькулятор использует теорему Пифагора, которая работает только для прямоугольных треугольников. Если в вашем треугольнике нет угла 90°, формула не даст правильного результата."
        },
        {
          "question": "Как найти гипотенузу?",
          "answer": "Чтобы найти гипотенузу, возведите в квадрат оба катета (a² и b²), сложите их и извлеките квадратный корень из суммы. Формула: c = √(a² + b²). Или просто введите значения выше и позвольте калькулятору сделать это."
        },
        {
          "question": "Что такое a и b в прямоугольном треугольнике?",
          "answer": "a и b - две ноги - стороны, образующие прямой угол. Они могут иметь любую положительную длину, и не имеет значения, какой из них вы называете a или b. Гипотенуза (c) всегда является оставшейся стороной."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Калькулятор: Поиск катета по c и a",
      "metaTitle": "Калькулятор: Поиск катета по c и a | Right Triangle Solver",
      "metaDescription": "Найдите катет b, когда известны гипотенуза c и другой катет a.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Помните: c - это всегда гипотенуза - самая длинная сторона, противоположная прямому углу. Это не нога. Если у вас два катета и вместо него вам нужна гипотенуза, воспользуйтесь калькулятором теоремы Пифагора.",
      "intro": "Найдите катет b, когда известны гипотенуза c и другой катет a.",
      "quickSummary": {
        "h2": "Что решает этот калькулятор отсутствующей ноги",
        "intro": "Используйте эту страницу, если известны гипотенуза и катет a, но другой катет отсутствует. Калькулятор изменяет теорему Пифагора, чтобы вычесть известный катет из гипотенузы, прежде чем извлечь квадратный корень.",
        "cards": [
          {
            "label": "Известные значения",
            "value": "c = гипотенуза; a = известный катет"
          },
          {
            "label": "Находки",
            "value": "b = неизвестный катет"
          },
          {
            "label": "Основная формула",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Обязательная проверка",
            "value": "Требуется c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Схема прямоугольного треугольника: нахождение катета b",
        "intro": "На диаграмме c и a отмечены как уже известные вам значения. Вертикальная часть b выделена как недостающая сторона, которую решает этот калькулятор.",
        "caption": "Диаграмма прямоугольного треугольника с известной гипотенузой c, известным катетом a и неизвестным катетом b.",
        "sides": {
          "a": {
            "label": "a = известно",
            "description": "Катет a - известный катет по основанию прямоугольного треугольника.",
            "status": "known"
          },
          "b": {
            "label": "b = найти",
            "description": "Участок b - это неизвестный участок, который решается путем вычитания a^2 из c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = известно",
            "description": "Гипотенуза c - это известная самая длинная сторона, лежащая против прямого угла.",
            "status": "known"
          }
        },
        "notes": [
          "c должна быть гипотенузой, а не одним из катетов.",
          "Если c меньше или равен a, входные данные не образуют правильный прямоугольный треугольник.",
          "В результате b использует ту же единицу измерения, что и c и a."
        ]
      },
      "calculator": {
        "outputLabel": "b = неизвестный катет",
        "fields": [
          {
            "key": "c",
            "label": "c = гипотенуза",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = известный катет",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Отсутствует ветвь формулы b",
        "paragraphs": [
          "Формула для нахождения участка b выведена из теоремы Пифагора (a² + b² = c²). Перестановка для b дает формулу ниже.",
          "Где c - гипотенуза (самая длинная сторона прямоугольного треугольника), a - известный катет, а b - недостающий катет, который вы ищете. Обратите внимание на вычитание: вы вычитаете квадрат известного катета из квадрата гипотенузы, а затем извлекаете квадратный корень."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Как найти ногу b из c и a",
        "steps": [
          "Убедитесь, что c - гипотенуза, а a - катет. Гипотенуза всегда самая длинная сторона.",
          "Введите гипотенузу c в первое поле ввода.",
          "Введите известную ногу a во второе поле ввода.",
          "Нажмите «Рассчитать», чтобы найти недостающую ногу.",
          "Прочтите результат для b вместе с полным пошаговым решением."
        ]
      },
      "example": {
        "h2": "Пример: найти ногу b.",
        "intro": "Дано: c = 13, a = 5. Недостающий катет прямоугольного треугольника с гипотенузой 13 и катетом 5 равен 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Важная проверка перед расчетом",
          "paragraphs": [
            "Прежде чем использовать эту формулу, убедитесь, что c больше, чем a. Гипотенуза всегда является самой длинной стороной прямоугольного треугольника. Если c равен a, вы получите b = 0, что означает, что треугольника не существует.",
            "Если c меньше a, выражение под квадратным корнем становится отрицательным. Это означает, что два входных значения не могут описать реальный прямоугольный треугольник с c в качестве гипотенузы."
          ],
          "listTitle": "Сначала используйте эти проверки:",
          "listItems": [
            "c находится напротив угла 90°.",
            "c больше, чем a.",
            "Оба значения положительны.",
            "c и a используют одну и ту же единицу измерения."
          ]
        },
        {
          "h2": "Где полезен этот калькулятор",
          "paragraphs": [
            "Этот калькулятор полезен, когда известны размеры диагонали или наклона, известна одна перпендикулярная сторона, а другая перпендикулярная сторона отсутствует. Это специализированный инструмент для случая c-и-a, поэтому каждое объяснение на странице указывает на поиск b.",
            "Это также может помочь проверить измерения. Если измеренное значение b не ​​соответствует результату калькулятора, возможно, треугольник неправильный, гипотенуза может быть неправильно обозначена или при одном измерении могут использоваться другие единицы."
          ],
          "listTitle": "Общие примеры включают в себя:",
          "listItems": [
            "Нахождение высоты стены, если известны длина лестницы c и расстояние до земли a.",
            "Нахождение вертикального подъема склона, когда известны длина уклона и горизонтальный участок.",
            "Проверка домашнего задания на прямоугольный треугольник, дающего c и a.",
            "Подтверждение размеров планировки каркаса, ландшафтного дизайна, пандусов или планов этажей."
          ]
        },
        {
          "h2": "Как прочитать ответ",
          "paragraphs": [
            "Выходные данные с надписью «Отсутствует отрезок b» - это длина другого отрезка, который образует прямой угол с a. Это не гипотенуза, и она должна быть короче c.",
            "Если вычисленное значение b чрезвычайно мало, ваш известный катет a очень близок к гипотенузе c. Это может быть действительно так, но перед использованием значения стоит проверить диаграмму и единицы измерения."
          ],
          "listTitle": "Действительный результат должен удовлетворять:",
          "listItems": [
            "b больше нуля.",
            "b меньше, чем c.",
            "a² + b² примерно равен c².",
            "Выходной блок соответствует входному блоку."
          ]
        },
        {
          "h2": "Распространенные ошибки",
          "paragraphs": [
            "Самая распространенная ошибка - рассматривать c как ногу. В этом калькуляторе c должна быть гипотенузой, то есть самой длинной стороной и стороной, противоположной прямому углу.",
            "Другая частая ошибка - сложение квадратов вместо вычитания. Сложение находит гипотенузу; вычитание находит недостающий катет гипотенузы."
          ],
          "listTitle": "Избегайте этих ошибок:",
          "listItems": [
            "Помещаем известный катет в поле гипотенузы.",
            "Использование c² + a² вместо c² - a².",
            "Ввод значения больше или равного c.",
            "Остановка на b² вместо извлечения квадратного корня.",
            "Смешивание единиц измерения, таких как метры и сантиметры."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Калькулятор стороны прямоугольного треугольника"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Калькулятор: Теорема Пифагора"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Калькулятор: Поиск катета по c и b"
        }
      ],
      "faqs": [
        {
          "question": "Что означает c в этом калькуляторе?",
          "answer": "c - гипотенуза прямоугольного треугольника - самая длинная сторона, расположенная напротив угла 90°. Это не нога. Вы вводите c в качестве одного из двух известных значений в этом калькуляторе."
        },
        {
          "question": "Что означает в этом калькуляторе?",
          "answer": "а - одна из двух катетов прямоугольного треугольника. Это одна из сторон, образующая прямой угол. В этом калькуляторе a - это уже известная вам нога."
        },
        {
          "question": "Что находит этот калькулятор?",
          "answer": "Этот калькулятор находит недостающую ногу b. Учитывая гипотенузу c и катет a, он вычисляет b = √(c² − a²) и показывает пошаговое решение."
        },
        {
          "question": "Может ли c быть меньше a?",
          "answer": "Нет. В прямоугольном треугольнике гипотенуза всегда является самой длинной стороной. Если c меньше, чем a, значения не образуют правильный прямоугольный треугольник. Перед расчетом проверьте, какое измерение является гипотенузой."
        },
        {
          "question": "Как мне найти b среди c и a?",
          "answer": "Возведите в квадрат гипотенузу (c²), возведите в квадрат известный катет (a²), вычтите a² из c² и извлеките квадратный корень. Формула: b = √(c² − a²). Или введите свои значения в этот калькулятор, чтобы получить мгновенный ответ."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Калькулятор: Поиск катета по c и b",
      "metaTitle": "Калькулятор: Поиск катета по c и b | Right Triangle Solver",
      "metaDescription": "Найдите катет a, когда известны гипотенуза c и катет b.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Имейте в виду: c - это гипотенуза, а не катет. Это самая длинная сторона треугольника, расположенная напротив угла 90°. Если у вас есть обе ноги и вам нужна гипотенуза, воспользуйтесь калькулятором теоремы Пифагора.",
      "intro": "Найдите катет a, когда известны гипотенуза c и катет b.",
      "quickSummary": {
        "h2": "Что решает этот калькулятор отсутствующей ноги",
        "intro": "Используйте эту страницу, если вы знаете гипотенузу и катет b, но вам нужен катет a. Он сохраняет известную сторону b отдельно от неизвестной стороны a, поэтому формула и результат соответствуют меткам на вашем треугольнике.",
        "cards": [
          {
            "label": "Известные значения",
            "value": "c = гипотенуза; b = известный катет"
          },
          {
            "label": "Находки",
            "value": "a = неизвестный катет"
          },
          {
            "label": "Основная формула",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Обязательная проверка",
            "value": "Требуется c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Схема прямоугольного треугольника: нахождение катета a",
        "intro": "На диаграмме c показана как известная гипотенуза, а b - как известный катет. Базовая нога a выделена как недостающее значение, возвращаемое калькулятором.",
        "caption": "Диаграмма прямоугольного треугольника с известной гипотенузой c, известным катетом b и неизвестным катетом a.",
        "sides": {
          "a": {
            "label": "a = найти",
            "description": "Нога a - это неизвестная базовая нога, решенная из c и b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = известно",
            "description": "Нога b - это известная нога, образующая прямой угол с a.",
            "status": "known"
          },
          "c": {
            "label": "c = известно",
            "description": "Гипотенуза c - известная самая длинная сторона прямоугольного треугольника.",
            "status": "known"
          }
        },
        "notes": [
          "Гипотенуза c должна быть самой длинной стороной во входной паре.",
          "Если c меньше или равен b, еще раз проверьте, какое значение является гипотенузой.",
          "Вычисленное a имеет ту же единицу измерения, что и введенные вами значения."
        ]
      },
      "calculator": {
        "outputLabel": "a = неизвестный катет",
        "fields": [
          {
            "key": "c",
            "label": "c = гипотенуза",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = известный катет",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Недостающая нога Формулы a",
        "paragraphs": [
          "Начиная с теоремы Пифагора (a² + b² = c²), найдите a, чтобы получить формулу, приведенную ниже.",
          "Где c - гипотенуза (самая длинная сторона, противоположная прямому углу), b - известный катет, а a - недостающий катет, который вы хотите найти. Ключевая операция - вычитание: возведите гипотенузу в квадрат, вычтите квадрат известного катета, затем извлеките квадратный корень из оставшегося."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Как найти ногу a из c и b",
        "steps": [
          "Убедитесь, что вы правильно определили гипотенузу (c) и известный катет (b). Гипотенуза всегда находится напротив угла 90°.",
          "Введите гипотенузу c в первое поле ввода.",
          "Введите известный участок b во второе поле ввода.",
          "Нажмите «Рассчитать», чтобы найти ногу a.",
          "Просмотрите результат для a и пошаговую работу, показанную ниже."
        ]
      },
      "example": {
        "h2": "Пример: найти ногу a",
        "intro": "Дано: c = 10, b = 6. Недостающий катет прямоугольного треугольника с гипотенузой 10 и катетом 6 равен 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Важная проверка перед расчетом",
          "paragraphs": [
            "Чтобы расчет работал, гипотенуза c должна быть больше b. В любом прямоугольном треугольнике гипотенуза является самой длинной стороной. Если c равно b, формула дает a = 0, что означает, что треугольник не может быть сформирован.",
            "Если c меньше b, выражение под квадратным корнем становится отрицательным и для a не ​​существует реальной длины стороны. В этом случае еще раз проверьте, какая сторона противоположна углу 90°."
          ],
          "listTitle": "Сначала используйте эти проверки:",
          "listItems": [
            "c - сторона, противолежащая прямому углу.",
            "c больше, чем b.",
            "Оба входных параметра являются положительными числами.",
            "c и b используют одну и ту же единицу измерения."
          ]
        },
        {
          "h2": "Где полезен этот калькулятор",
          "paragraphs": [
            "Этот калькулятор станет подходящим инструментом, если вы знаете гипотенузу и катет b и вам нужно найти катет a. Это особенно полезно, когда на диаграмме известный участок помечен как b, а неизвестное основание или высота - как a.",
            "Страница также работает как проверка измерений. Если вычисленная сторона a сильно отличается от измеренной стороны a, возможно, треугольник не включает истинный угол 90° или одно из известных значений может быть скопировано неправильно."
          ],
          "listTitle": "Общие примеры включают в себя:",
          "listItems": [
            "Нахождение базового расстояния, когда известны длина уклона c и высота b.",
            "Нахождение высоты по вертикали, если известны гипотенуза и расстояние по горизонтали.",
            "Решение задач по геометрии, которые дают c и b и запрашивают a.",
            "Проверка строительных, картографических или плановых размеров, образующих прямоугольный треугольник."
          ]
        },
        {
          "h2": "Как прочитать ответ",
          "paragraphs": [
            "Результат с надписью «Отсутствует ветвь a» - это другая сторона, которая образует прямой угол с b. Оно должно быть короче гипотенузы c и больше нуля.",
            "Если результат близок к c, известная часть b относительно мала. Если результат близок к нулю, длина b почти равна длине c. И то, и другое может произойти, но перед использованием ответа следует проверить метки ввода."
          ],
          "listTitle": "Действительный результат должен удовлетворять:",
          "listItems": [
            "а больше нуля.",
            "а меньше c.",
            "a² + b² примерно равен c².",
            "Выходная единица соответствует единице, используемой для c и b."
          ]
        },
        {
          "h2": "Распространенные ошибки",
          "paragraphs": [
            "Самый большой риск - поменять местами гипотенузу с катетом. В этом калькуляторе предполагается, что c уже является самой длинной стороной, поэтому неверно указанное значение c сделает результат неверным.",
            "Вторая распространенная проблема - ошибочное использование формулы гипотенузы. Чтобы найти недостающий катет, вы вычитаете известный квадрат катета из квадрата гипотенузы, а затем извлекаете квадратный корень."
          ],
          "listTitle": "Избегайте этих ошибок:",
          "listItems": [
            "Ввод катета b в качестве гипотенузы c.",
            "Использование c² + b² вместо c² - b².",
            "Ввод b больше или равен c.",
            "Забывание квадратного корня после вычитания.",
            "Объединение измерений, в которых используются разные единицы."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Калькулятор стороны прямоугольного треугольника"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Калькулятор: Теорема Пифагора"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Калькулятор: Поиск катета по c и a"
        }
      ],
      "faqs": [
        {
          "question": "Что означает c в этом калькуляторе?",
          "answer": "c - гипотенуза - самая длинная сторона прямоугольного треугольника, противоположная углу 90°. В этом калькуляторе вы вводите c в качестве одного из двух известных значений."
        },
        {
          "question": "Что означает b в этом калькуляторе?",
          "answer": "b - одна из двух сторон прямоугольного треугольника. Это сторона, образующая прямой угол. Здесь b - это уже известная вам нога, и калькулятор использует ее вместе с c, чтобы найти недостающую ногу a."
        },
        {
          "question": "Что находит этот калькулятор?",
          "answer": "Он находит недостающую ногу a. Вы указываете гипотенузу (c) и один катет (b), а калькулятор применяет формулу a = √(c² − b²), чтобы дать вам неизвестный катет с пошаговым решением."
        },
        {
          "question": "Может ли c быть меньше b?",
          "answer": "Нет. Гипотенуза всегда является самой длинной стороной прямоугольного треугольника. Если ваше значение c меньше, чем b, входные данные не представляют собой правильный прямоугольный треугольник. Еще раз проверьте, какое измерение соответствует гипотенузе."
        },
        {
          "question": "Как мне найти c и b?",
          "answer": "Возведите в квадрат гипотенузу (c²), возведите в квадрат известный катет (b²), вычтите b² из c² и извлеките квадратный корень из результата. Формула: a = √(c² − b²). Вы также можете просто ввести свои значения в этот калькулятор, чтобы получить ответ автоматически."
        }
      ]
    }
  },
  "fr": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Calculatrice: Théorème de Pythagore",
      "metaTitle": "Calculatrice: Théorème de Pythagore | Right Triangle Solver",
      "metaDescription": "Trouvez l'hypoténuse lorsque les deux côtés sont connus. C'est l'identité principale pour tout triangle rectangle.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Que vous résolviez un problème de devoir ou que vous mesuriez une diagonale dans la vraie vie, cet outil vous donne la réponse en quelques secondes, avec la solution complète présentée étape par étape.",
      "intro": "Trouvez l'hypoténuse lorsque les deux côtés sont connus. C'est l'identité principale pour tout triangle rectangle.",
      "quickSummary": {
        "h2": "Ce que résout cette calculatrice pythagoricienne",
        "intro": "Utilisez cette page lorsque les deux côtés qui se rencontrent à l'angle 90° sont connus et que le côté diagonal est manquant. La calculatrice se concentre sur le cas classique de l'hypoténuse, les entrées restent donc simples et le résultat est facile à vérifier.",
        "cards": [
          {
            "label": "Valeurs connues",
            "value": "a = côté opposé à l'angle A; b = côté opposé à l'angle B"
          },
          {
            "label": "Trouve",
            "value": "c = hypoténuse"
          },
          {
            "label": "Formule principale",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Idéal pour",
            "value": "Diagonales, échelles, rampes, écrans et devoirs de géométrie"
          }
        ]
      },
      "diagram": {
        "h2": "Diagramme du triangle rectangle: trouver l'hypoténuse",
        "intro": "Le diagramme montre la relation de côté exacte utilisée par l'outil. Les deux cotes sont les valeurs d'entrée connues et le côté incliné c est l'hypoténuse trouvée par la calculatrice.",
        "caption": "Diagramme en triangle rectangle avec les pattes connues a et b et l'hypoténuse inconnue c.",
        "sides": {
          "a": {
            "label": "a = connu",
            "description": "La cote a est l'un des deux côtés qui forment l'angle droit.",
            "status": "known"
          },
          "b": {
            "label": "b = connu",
            "description": "La cote b est l'autre côté qui forme l'angle droit.",
            "status": "known"
          },
          "c": {
            "label": "c = trouver",
            "description": "L'hypoténuse c est le côté le plus long et se situe à l'opposé de l'angle 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a et b peuvent être échangés; le résultat de l'hypoténuse sera le même.",
          "Utilisez la même unité pour les deux cotes avant de calculer.",
          "La réponse c sera toujours supérieure à chaque cote d'un triangle rectangle valide."
        ]
      },
      "calculator": {
        "outputLabel": "c = hypoténuse",
        "fields": [
          {
            "key": "a",
            "label": "a = côté opposé à l'angle A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = côté opposé à l'angle B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formule du théorème de Pythagore",
        "paragraphs": [
          "Le théorème de Pythagore stipule que dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux branches. Pour trouver l’hypoténuse, prenez la racine carrée des deux côtés.",
          "Dans cette formule, a et b sont les deux branches du triangle rectangle - les côtés qui forment l'angle droit. c est l'hypoténuse, le côté le plus long, opposé à l'angle droit. Cette formule ne fonctionne que pour les triangles rectangles."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Comment utiliser la calculatrice du théorème de Pythagore",
        "steps": [
          "Identifiez les deux cotes de votre triangle rectangle. Ce sont les côtés qui forment l’angle droit.",
          "Entrez la branche a dans le premier champ de saisie.",
          "Saisissez la branche b dans le deuxième champ de saisie.",
          "Cliquez sur Calculer pour trouver l'hypoténuse.",
          "Lisez le résultat pour c, ainsi que la solution étape par étape."
        ]
      },
      "example": {
        "h2": "Exemple: trouver l'hypoténuse",
        "intro": "Étant donné: a = 6, b = 8. L'hypoténuse d'un triangle rectangle avec les pattes 6 et 8 est 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Où cette calculatrice est utile",
          "paragraphs": [
            "Le calculateur d'hypoténuse est utile lorsque deux distances perpendiculaires se combinent en une seule distance diagonale. Cela est particulièrement utile lorsqu'un dessin, un plan d'étage ou un problème de devoir donne les côtés horizontaux et verticaux mais laisse le côté diagonal vide.",
            "Étant donné que cette page ne résout que pour c, elle évite la confusion liée au basculement entre les modes latéraux. Si vos valeurs connues sont les deux cotes, c'est l'outil ciblé du théorème de Pythagore à utiliser."
          ],
          "listTitle": "Les exemples courants incluent:",
          "listItems": [
            "Trouver la diagonale d'un rectangle, d'un écran, d'une disposition en mosaïque ou d'une pièce.",
            "Calcul d'une longueur d'échelle à partir de la hauteur du mur et de la distance au sol.",
            "Estimation de la longueur inclinée d'une rampe depuis la montée et la course.",
            "Vérification des devoirs du triangle rectangle avant de soumettre la réponse finale."
          ]
        },
        {
          "h2": "Conseils de saisie pour de meilleurs résultats",
          "paragraphs": [
            "Entrez les deux longueurs de cote sous forme de nombres positifs. Les décimales conviennent et la calculatrice conservera suffisamment de précision pour rendre le travail étape par étape utile.",
            "Les deux entrées doivent utiliser la même unité. Si a est mesuré en pieds et que b est mesuré en pouces, convertissez d'abord une mesure pour que le résultat soit significatif."
          ],
          "listTitle": "Avant de calculer, vérifiez que:",
          "listItems": [
            "a et b sont les côtés qui touchent l'angle 90°.",
            "Aucune des deux entrées n’est nulle ou négative.",
            "Les deux valeurs sont mesurées dans la même unité.",
            "Vous recherchez l’hypoténuse, pas une cote manquante."
          ]
        },
        {
          "h2": "Comment lire la réponse",
          "paragraphs": [
            "La sortie intitulée Hypoténuse c est le côté opposé à l’angle droit. Il s'agit du côté diagonal du diagramme et doit être plus long que les deux pattes d'entrée.",
            "Si votre résultat semble plus petit que a ou b, c'est le signe que l'une des entrées a été mal étiquetée ou que le triangle n'est pas réellement un triangle rectangle."
          ],
          "listTitle": "Une vérification rapide du caractère raisonnable:",
          "listItems": [
            "c doit être supérieur à a.",
            "c doit être supérieur à b.",
            "c doit être inférieur à a + b.",
            "Pour les triplets courants comme 3-4-5 ou 5-12-13, le résultat doit correspondre au triplet connu."
          ]
        },
        {
          "h2": "Erreurs courantes",
          "paragraphs": [
            "La plupart des mauvaises réponses à l’hypoténuse proviennent de l’utilisation de la bonne formule du mauvais côté. Les cotes doivent être les deux côtés qui forment un angle droit; l'hypoténuse n'est jamais une entrée sur cette page.",
            "Un autre problème courant est l'arrêt à a² + b². Cette valeur est c², et non c. Le pas de racine carrée est ce qui transforme la valeur carrée en longueur réelle du côté."
          ],
          "listTitle": "Évitez ces erreurs:",
          "listItems": [
            "Utiliser la formule sur un triangle qui n'a pas d'angle 90°.",
            "Saisir le côté diagonal comme a ou b.",
            "Oublier de prendre la racine carrée à la fin.",
            "Mélanger des unités telles que les pouces et les pieds dans le même calcul."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calculateur de côté du triangle rectangle"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Calculatrice: Côté manquant par c et a"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Calculatrice: Côté manquant par c et b"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le théorème de Pythagore?",
          "answer": "Le théorème de Pythagore est une formule qui relie les trois côtés d'un triangle rectangle: a² + b² = c². On dit que le carré de l’hypoténuse est égal à la somme des carrés des deux cotes. Cela ne s'applique qu'aux triangles rectangles."
        },
        {
          "question": "Que signifie c dans la formule?",
          "answer": "Dans la formule c² = a² + b², c est l'hypoténuse - le côté le plus long du triangle rectangle. C'est le côté directement en face de l'angle 90°."
        },
        {
          "question": "Puis-je utiliser cette calculatrice pour n’importe quel triangle?",
          "answer": "Non. Cette calculatrice utilise le théorème de Pythagore, qui ne fonctionne que pour les triangles rectangles. Si votre triangle n'a pas d'angle 90°, la formule ne donnera pas un résultat correct."
        },
        {
          "question": "Comment trouver l'hypoténuse?",
          "answer": "Pour trouver l'hypoténuse, mettez les deux cotes au carré (a² et b²), additionnez-les et prenez la racine carrée de la somme. La formule est c = √(a² + b²). Ou entrez simplement vos valeurs ci-dessus et laissez la calculatrice le faire."
        },
        {
          "question": "Que sont a et b dans un triangle rectangle?",
          "answer": "a et b sont les deux cotes - les côtés qui forment l'angle droit. Ils peuvent avoir n’importe quelle longueur positive, et peu importe celui que vous appelez a ou b. L'hypoténuse (c) est toujours le côté restant."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Calculatrice: Côté manquant par c et a",
      "metaTitle": "Calculatrice: Côté manquant par c et a | Right Triangle Solver",
      "metaDescription": "Trouvez le côté b lorsque l'hypoténuse c et l'autre côté a sont connus.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "N'oubliez pas: c est toujours l'hypoténuse - le côté le plus long, opposé à l'angle droit. Ce n'est pas une cote. Si vous avez deux cotes et avez besoin de l'hypoténuse à la place, utilisez la calculatrice du théorème de Pythagore.",
      "intro": "Trouvez le côté b lorsque l'hypoténuse c et l'autre côté a sont connus.",
      "quickSummary": {
        "h2": "Ce que résout ce calculateur de cote manquante",
        "intro": "Utilisez cette page lorsque l'hypoténuse et la cote a sont connues, mais que l'autre cote est manquante. La calculatrice réorganise le théorème de Pythagore pour soustraire la cote connue de l'hypoténuse avant de prendre la racine carrée.",
        "cards": [
          {
            "label": "Valeurs connues",
            "value": "c = hypoténuse; a = côté connu"
          },
          {
            "label": "Trouve",
            "value": "b = côté inconnu"
          },
          {
            "label": "Formule principale",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Chèque obligatoire",
            "value": "Nécessite c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Diagramme du triangle rectangle: trouver la cote b",
        "intro": "Le diagramme indique c et a comme valeurs que vous connaissez déjà. La cote verticale b est mise en évidence comme le côté manquant que cette calculatrice résout.",
        "caption": "Diagramme en triangle rectangle avec hypoténuse connue c, cote connue a et cote inconnue b.",
        "sides": {
          "a": {
            "label": "a = connu",
            "description": "La branche a est la branche connue le long de la base du triangle rectangle.",
            "status": "known"
          },
          "b": {
            "label": "b = trouver",
            "description": "La branche b est la branche inconnue résolue en soustrayant a^2 de c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = connu",
            "description": "L'hypoténuse c est le côté le plus long connu opposé à l'angle droit.",
            "status": "known"
          }
        },
        "notes": [
          "c doit être l’hypoténuse et non l’une des cotes.",
          "Si c est inférieur ou égal à a, les entrées ne forment pas un triangle rectangle valide.",
          "Le résultat b utilise la même unité que c et a."
        ]
      },
      "calculator": {
        "outputLabel": "b = côté inconnu",
        "fields": [
          {
            "key": "c",
            "label": "c = hypoténuse",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = côté connu",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "cote manquante Formule b",
        "paragraphs": [
          "La formule pour trouver la cote b est dérivée du théorème de Pythagore (a² + b² = c²). La réorganisation pour b donne la formule ci-dessous.",
          "Où c est l’hypoténuse (côté le plus long du triangle rectangle), a est la cote connue et b est la cote manquante que vous recherchez. Remarquez la soustraction: vous soustrayez le carré de la cote connue du carré de l'hypoténuse, puis prenez la racine carrée."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Comment trouver la cote b à partir de c et a",
        "steps": [
          "Confirmez que c est l'hypoténuse et a est une cote. L'hypoténuse est toujours le côté le plus long.",
          "Saisissez l'hypoténuse c dans le premier champ de saisie.",
          "Entrez le tronçon connu a dans le deuxième champ de saisie.",
          "Cliquez sur Calculer pour trouver la cote manquante.",
          "Lisez le résultat pour b, ainsi que la solution complète étape par étape."
        ]
      },
      "example": {
        "h2": "Exemple: Rechercher la branche b",
        "intro": "Étant donné: c = 13, a = 5. La branche manquante d'un triangle rectangle avec l'hypoténuse 13 et la branche 5 est 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Vérification importante avant de calculer",
          "paragraphs": [
            "Avant d'utiliser cette formule, assurez-vous que c est supérieur à a. L'hypoténuse est toujours le côté le plus long d'un triangle rectangle. Si c est égal à a, vous obtiendrez b = 0, ce qui signifie qu'aucun triangle n'existe.",
            "Si c est inférieur à a, l'expression sous la racine carrée devient négative. Cela signifie que les deux valeurs d'entrée ne peuvent pas décrire un vrai triangle rectangle avec c comme hypoténuse."
          ],
          "listTitle": "Utilisez d'abord ces vérifications:",
          "listItems": [
            "c est opposé à l'angle 90°.",
            "c est supérieur à a.",
            "Les deux valeurs sont positives.",
            "c et a utilisent la même unité."
          ]
        },
        {
          "h2": "Où cette calculatrice est utile",
          "paragraphs": [
            "Cette calculatrice est utile lorsqu'une mesure diagonale ou inclinée est connue, qu'un côté perpendiculaire est connu et que l'autre côté perpendiculaire est manquant. Il s'agit de l'outil ciblé pour le cas c-and-a, donc chaque explication sur la page pointe vers la recherche de b.",
            "Cela peut également aider à vérifier les mesures. Si une valeur mesurée pour b ne correspond pas au résultat de la calculatrice, le triangle peut ne pas être droit, l'hypoténuse peut être mal étiquetée ou une mesure peut utiliser une unité différente."
          ],
          "listTitle": "Les exemples courants incluent:",
          "listItems": [
            "Détermination de la hauteur du mur lorsque la longueur de l'échelle c et la distance au sol a sont connues.",
            "Déterminer l'élévation verticale d'une pente lorsque la longueur de la pente et la longueur horizontale sont connues.",
            "Vérification d'un problème de devoir de triangle rectangle qui donne c et a.",
            "Confirmation des mesures de disposition pour la charpente, l'aménagement paysager, les rampes ou les plans d'étage."
          ]
        },
        {
          "h2": "Comment lire la réponse",
          "paragraphs": [
            "La sortie intitulée cote manquante b est la longueur de l'autre branche qui forme l'angle droit avec a. Ce n'est pas l'hypoténuse et devrait être plus court que c.",
            "Si le b calculé est extrêmement petit, votre cote connue a est très proche de l'hypoténuse c. Cela peut être valable, mais cela vaut la peine de vérifier le diagramme et les unités avant d'utiliser la valeur."
          ],
          "listTitle": "Un résultat valide doit satisfaire:",
          "listItems": [
            "b est supérieur à zéro.",
            "b est inférieur à c.",
            "a² + b² est approximativement égal à c².",
            "L'unité de sortie correspond à l'unité d'entrée."
          ]
        },
        {
          "h2": "Erreurs courantes",
          "paragraphs": [
            "L'erreur la plus courante consiste à traiter c comme une cote. Dans cette calculatrice, c doit être l'hypoténuse, qui est le côté le plus long et le côté opposé à l'angle droit.",
            "Une autre erreur fréquente consiste à additionner les carrés au lieu de les soustraire. L'addition trouve une hypoténuse; la soustraction trouve une cote manquante à l'hypoténuse."
          ],
          "listTitle": "Évitez ces erreurs:",
          "listItems": [
            "Mettre la cote connue dans le champ de l'hypoténuse.",
            "Utilisation de c² + a² au lieu de c² - a².",
            "Saisir un supérieur ou égal à c.",
            "S'arrêter à b² au lieu de prendre la racine carrée.",
            "Unités de mélange telles que mètres et centimètres."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calculateur de côté du triangle rectangle"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calculatrice: Théorème de Pythagore"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Calculatrice: Côté manquant par c et b"
        }
      ],
      "faqs": [
        {
          "question": "Que signifie c dans cette calculatrice?",
          "answer": "c est l'hypoténuse du triangle rectangle - le côté le plus long, situé à l'opposé de l'angle 90°. Ce n'est pas une cote. Vous entrez c comme l’une des deux valeurs connues dans cette calculatrice."
        },
        {
          "question": "Que signifie un dans cette calculatrice?",
          "answer": "a est l'une des deux branches du triangle rectangle. C’est l’un des côtés qui forme l’angle droit. Dans cette calculatrice, a est la cote que vous connaissez déjà."
        },
        {
          "question": "Que trouve cette calculatrice?",
          "answer": "Cette calculatrice trouve la cote manquante b. Étant donné l'hypoténuse c et la cote a, il calcule b = √(c² − a²) et vous montre la solution étape par étape."
        },
        {
          "question": "c peut-il être plus petit qu'un?",
          "answer": "Non. Dans un triangle rectangle, l’hypoténuse est toujours le côté le plus long. Si c est plus petit que a, les valeurs ne forment pas un triangle rectangle valide. Vérifiez quelle mesure est l’hypoténuse avant de calculer."
        },
        {
          "question": "Comment trouver b parmi c et a?",
          "answer": "Mettez au carré l'hypoténuse (c²), mettez au carré la cote connue (a²), soustrayez a² de c² et prenez la racine carrée. La formule est b = √(c² − a²). Ou entrez vos valeurs dans cette calculatrice pour une réponse instantanée."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Calculatrice: Côté manquant par c et b",
      "metaTitle": "Calculatrice: Côté manquant par c et b | Right Triangle Solver",
      "metaDescription": "Trouvez le côté a lorsque l'hypoténuse c et le côté b sont connus.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Gardez à l’esprit: c est l’hypoténuse, pas une cote. C'est le côté le plus long du triangle et il se situe à l'opposé de l'angle 90°. Si vous avez les deux cotes et avez besoin de l’hypoténuse, utilisez plutôt la calculatrice du théorème de Pythagore.",
      "intro": "Trouvez le côté a lorsque l'hypoténuse c et le côté b sont connus.",
      "quickSummary": {
        "h2": "Ce que résout ce calculateur de cote manquante",
        "intro": "Utilisez cette page lorsque vous connaissez l'hypoténuse et la cote b, mais que vous avez besoin de la cote a. Il maintient le côté connu b séparé du côté inconnu a afin que la formule et le résultat correspondent aux étiquettes de votre triangle.",
        "cards": [
          {
            "label": "Valeurs connues",
            "value": "c = hypoténuse; b = côté connu"
          },
          {
            "label": "Trouve",
            "value": "a = côté inconnu"
          },
          {
            "label": "Formule principale",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Chèque obligatoire",
            "value": "Nécessite c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Diagramme du triangle rectangle: trouver la cote a",
        "intro": "Le diagramme montre c comme hypoténuse connue et b comme cote connue. La cote de base a est mise en surbrillance comme valeur manquante renvoyée par la calculatrice.",
        "caption": "Diagramme en triangle rectangle avec hypoténuse connue c, cote connue b et cote inconnue a.",
        "sides": {
          "a": {
            "label": "a = trouver",
            "description": "L'étape a est l'étape de base inconnue résolue à partir de c et b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = connu",
            "description": "La cote b est la cote connue qui forme l'angle droit avec a.",
            "status": "known"
          },
          "c": {
            "label": "c = connu",
            "description": "L'hypoténuse c est le côté le plus long connu du triangle rectangle.",
            "status": "known"
          }
        },
        "notes": [
          "L'hypoténuse c doit être le côté le plus long de la paire d'entrée.",
          "Si c est inférieur ou égal à b, revérifiez quelle valeur est l'hypoténuse.",
          "Le a calculé a la même unité que les valeurs que vous avez saisies."
        ]
      },
      "calculator": {
        "outputLabel": "a = côté inconnu",
        "fields": [
          {
            "key": "c",
            "label": "c = hypoténuse",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = côté connu",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "cote manquante Formule a",
        "paragraphs": [
          "En partant du théorème de Pythagore (a² + b² = c²), résolvez a pour obtenir la formule ci-dessous.",
          "Où c est l'hypoténuse (le côté le plus long, opposé à l'angle droit), b est la cote connue et a est la cote manquante que vous souhaitez rechercher. L’opération clé est la soustraction: mettez au carré l’hypoténuse, soustrayez le carré de la cote connue, puis prenez la racine carrée de ce qui reste."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Comment trouver la cote a à partir de c et b",
        "steps": [
          "Assurez-vous d'avoir correctement identifié l'hypoténuse (c) et la cote connue (b). L'hypoténuse est toujours en face de l'angle 90°.",
          "Saisissez l'hypoténuse c dans le premier champ de saisie.",
          "Saisissez le tronçon connu b dans le deuxième champ de saisie.",
          "Cliquez sur Calculer pour trouver la branche a.",
          "Examinez le résultat pour a et le travail étape par étape présenté ci-dessous."
        ]
      },
      "example": {
        "h2": "Exemple: Rechercher la cote a",
        "intro": "Étant donné: c = 10, b = 6. La branche manquante d'un triangle rectangle avec l'hypoténuse 10 et la branche 6 est 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Vérification importante avant de calculer",
          "paragraphs": [
            "L'hypoténuse c doit être supérieure à b pour que le calcul fonctionne. Dans tout triangle rectangle, l'hypoténuse est le côté le plus long. Si c est égal à b, la formule donne a = 0, ce qui signifie qu'aucun triangle ne peut être formé.",
            "Si c est inférieur à b, l'expression sous la racine carrée devient négative et il n'y a pas de longueur réelle de côté pour a. Dans ce cas, revérifiez quel côté est opposé à l'angle 90°."
          ],
          "listTitle": "Utilisez d'abord ces vérifications:",
          "listItems": [
            "c est le côté opposé à l’angle droit.",
            "c est supérieur à b.",
            "Les deux entrées sont des nombres positifs.",
            "c et b utilisent la même unité de mesure."
          ]
        },
        {
          "h2": "Où cette calculatrice est utile",
          "paragraphs": [
            "Cette calculatrice est le bon outil lorsque vous connaissez l'hypoténuse et la cote b et que vous devez trouver la cote a. Cela est particulièrement utile lorsque votre diagramme indique que le pied connu est b et que la base ou la hauteur inconnue est a.",
            "La page fonctionne également comme un contrôle de mesure. Si le côté calculé a est très différent du côté mesuré a, le triangle peut ne pas inclure un véritable angle 90° ou l'une des valeurs connues peut avoir été copiée de manière incorrecte."
          ],
          "listTitle": "Les exemples courants incluent:",
          "listItems": [
            "Recherche d'une distance de base lorsque la longueur de la pente c et la hauteur b sont connues.",
            "Trouver une hauteur verticale lorsque l'hypoténuse et la distance horizontale sont connues.",
            "Résoudre des problèmes de géométrie qui donnent c et b et demandent a.",
            "Vérification des mesures de construction, de cartographie ou de plan d'étage qui forment un triangle rectangle."
          ]
        },
        {
          "h2": "Comment lire la réponse",
          "paragraphs": [
            "La sortie intitulée cote manquante a est l'autre côté qui forme l'angle droit avec b. Elle doit être plus courte que l'hypoténuse c et supérieure à zéro.",
            "Si le résultat est proche de c, la branche connue b est relativement petite. Si le résultat est proche de zéro, b est presque aussi long que c. Les deux peuvent se produire, mais les étiquettes d'entrée doivent être vérifiées avant d'utiliser la réponse."
          ],
          "listTitle": "Un résultat valide doit satisfaire:",
          "listItems": [
            "a est supérieur à zéro.",
            "a est inférieur à c.",
            "a² + b² est approximativement égal à c².",
            "L'unité de sortie correspond à l'unité utilisée pour c et b."
          ]
        },
        {
          "h2": "Erreurs courantes",
          "paragraphs": [
            "Le plus gros risque est d’échanger l’hypoténuse avec une cote. Cette calculatrice suppose que c est déjà le côté le plus long, donc une valeur c mal étiquetée rendra le résultat incorrect.",
            "Un deuxième problème courant est l’utilisation par erreur de la formule de l’hypoténuse. Pour trouver une cote manquante, soustrayez le carré de la cote connue du carré de l'hypoténuse, puis prenez la racine carrée."
          ],
          "listTitle": "Évitez ces erreurs:",
          "listItems": [
            "Entrer la cote b comme l'hypoténuse c.",
            "Utilisation de c² + b² au lieu de c² - b².",
            "Saisir b supérieur ou égal à c.",
            "Oublier la racine carrée après la soustraction.",
            "Combinaison de mesures utilisant différentes unités."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calculateur de côté du triangle rectangle"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calculatrice: Théorème de Pythagore"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Calculatrice: Côté manquant par c et a"
        }
      ],
      "faqs": [
        {
          "question": "Que signifie c dans cette calculatrice?",
          "answer": "c est l'hypoténuse - le côté le plus long du triangle rectangle, opposé à l'angle 90°. Dans cette calculatrice, vous entrez c comme l'une de vos deux valeurs connues."
        },
        {
          "question": "Que signifie b dans cette calculatrice?",
          "answer": "b est l'une des deux branches du triangle rectangle. C’est un côté qui forme l’angle droit. Ici, b est la cote que vous connaissez déjà, et la calculatrice l'utilise avec c pour trouver la cote manquante a."
        },
        {
          "question": "Que trouve cette calculatrice?",
          "answer": "Il retrouve la cote manquante a. Vous fournissez l'hypoténuse (c) et une cote (b), et la calculatrice applique la formule a = √(c² − b²) pour vous donner la cote inconnue avec une solution étape par étape."
        },
        {
          "question": "c peut-il être plus petit que b?",
          "answer": "Non. L’hypoténuse est toujours le côté le plus long d’un triangle rectangle. Si votre valeur pour c est inférieure à b, les entrées ne représentent pas un triangle rectangle valide. Revérifiez quelle mesure correspond à l’hypoténuse."
        },
        {
          "question": "Comment puis-je trouver un de c et b?",
          "answer": "Mettez au carré l'hypoténuse (c²), mettez au carré la cote connue (b²), soustrayez b² de c² et prenez la racine carrée du résultat. La formule est a = √(c² − b²). Vous pouvez également simplement saisir vos valeurs dans cette calculatrice pour obtenir la réponse automatiquement."
        }
      ]
    }
  },
  "de": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Rechner: Satz des Pythagoras",
      "metaTitle": "Rechner: Satz des Pythagoras | Right Triangle Solver",
      "metaDescription": "Finden Sie die Hypotenuse, wenn beide Katheten bekannt sind. Dies ist die primäre Identität für jedes rechtwinklige Dreieck.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Egal, ob Sie eine Hausaufgabe lösen oder im echten Leben eine Diagonale messen, dieses Tool liefert Ihnen in Sekundenschnelle die Antwort - mit der vollständigen Lösung Schritt für Schritt.",
      "intro": "Finden Sie die Hypotenuse, wenn beide Katheten bekannt sind. Dies ist die primäre Identität für jedes rechtwinklige Dreieck.",
      "quickSummary": {
        "h2": "Was dieser pythagoräische Rechner löst",
        "intro": "Verwenden Sie diese Seite, wenn die beiden Seiten, die sich im Winkel 90° treffen, bekannt sind und die diagonale Seite fehlt. Der Rechner konzentriert sich auf den klassischen Hypotenuse-Fall, sodass die Eingaben einfach bleiben und das Ergebnis leicht zu überprüfen ist.",
        "cards": [
          {
            "label": "Bekannte Werte",
            "value": "a = Kathete gegenüber Winkel A; b = Kathete gegenüber Winkel B"
          },
          {
            "label": "Funde",
            "value": "c = Hypotenuse"
          },
          {
            "label": "Hauptformel",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Am besten für",
            "value": "Diagonalen, Leitern, Rampen, Bildschirme und Geometrie-Hausaufgaben"
          }
        ]
      },
      "diagram": {
        "h2": "Rechtwinkliges Dreiecksdiagramm: Finden der Hypotenuse",
        "intro": "Das Diagramm zeigt die genaue Seitenbeziehung, die das Werkzeug verwendet. Die beiden Schenkel sind die bekannten Eingabewerte und die schräge Seite c ist die Hypotenuse, die der Rechner findet.",
        "caption": "Diagramm eines rechtwinkligen Dreiecks mit bekannten Kathetenn a und b und unbekannter Hypotenuse c.",
        "sides": {
          "a": {
            "label": "a = bekannt",
            "description": "Kathete a ist eine der beiden Seiten, die den rechten Winkel bilden.",
            "status": "known"
          },
          "b": {
            "label": "b = bekannt",
            "description": "Kathete b ist die andere Seite, die den rechten Winkel bildet.",
            "status": "known"
          },
          "c": {
            "label": "c = finden",
            "description": "Die Hypotenuse c ist die längste Seite und liegt gegenüber dem Winkel 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a und b können ausgetauscht werden; Das Hypotenuse-Ergebnis wird das gleiche sein.",
          "Verwenden Sie vor der Berechnung für beide Katheten die gleiche Einheit.",
          "Die Antwort c ist immer größer als jedes Kathete eines gültigen rechtwinkligen Dreiecks."
        ]
      },
      "calculator": {
        "outputLabel": "c = Hypotenuse",
        "fields": [
          {
            "key": "a",
            "label": "a = Kathete gegenüber Winkel A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = Kathete gegenüber Winkel B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formel des Satzes des Pythagoras",
        "paragraphs": [
          "Der Satz des Pythagoras besagt, dass in einem rechtwinkligen Dreieck das Quadrat der Hypotenuse gleich der Summe der Quadrate der beiden Schenkel ist. Um die Hypotenuse zu ermitteln, ziehen Sie die Quadratwurzel aus beiden Seiten.",
          "In dieser Formel sind a und b die beiden Schenkel des rechtwinkligen Dreiecks - die Seiten, die den rechten Winkel bilden. c ist die Hypotenuse, die längste Seite gegenüber dem rechten Winkel. Diese Formel funktioniert nur für rechtwinklige Dreiecke."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "So verwenden Sie den Rechner zum Satz des Pythagoras",
        "steps": [
          "Identifizieren Sie die beiden Schenkel Ihres rechtwinkligen Dreiecks. Das sind die Seiten, die den rechten Winkel bilden.",
          "Geben Sie leg a in das erste Eingabefeld ein.",
          "Geben Sie leg b in das zweite Eingabefeld ein.",
          "Klicken Sie auf Berechnen, um die Hypotenuse zu ermitteln.",
          "Lesen Sie das Ergebnis für c zusammen mit der Schritt-für-Schritt-Lösung."
        ]
      },
      "example": {
        "h2": "Beispiel: Finden Sie die Hypotenuse",
        "intro": "Gegeben: a = 6, b = 8. Die Hypotenuse eines rechtwinkligen Dreiecks mit den Schenkeln 6 und 8 ist 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Wo dieser Rechner nützlich ist",
          "paragraphs": [
            "Der Hypotenusenrechner ist immer dann nützlich, wenn sich zwei senkrechte Abstände zu einem diagonalen Abstand verbinden. Dies ist besonders hilfreich, wenn bei einer Zeichnung, einem Grundriss oder einer Hausaufgabe die horizontalen und vertikalen Seiten angegeben sind, die diagonale Seite jedoch leer bleibt.",
            "Da diese Seite nur für c auflöst, vermeidet sie die Verwirrung beim Wechseln zwischen den Seitenmodi. Wenn Ihre bekannten Werte die beiden Katheten sind, ist dies das fokussierte Werkzeug zum Satz des Pythagoras, das Sie verwenden sollten."
          ],
          "listTitle": "Häufige Beispiele sind:",
          "listItems": [
            "Ermitteln der Diagonale eines Rechtecks, Bildschirms, Kachellayouts oder Raums.",
            "Berechnung einer Leiterlänge aus Wandhöhe und Bodenabstand.",
            "Schätzung der geneigten Länge einer Rampe aus Anstieg und Verlauf.",
            "Überprüfen Sie die Hausaufgaben zum rechtwinkligen Dreieck, bevor Sie die endgültige Antwort absenden."
          ]
        },
        {
          "h2": "Eingabetipps für bessere Ergebnisse",
          "paragraphs": [
            "Geben Sie beide Kathetelängen als positive Zahlen ein. Dezimalzahlen sind in Ordnung und der Rechner behält die Genauigkeit bei, die die Schritt-für-Schritt-Anleitung nützlich macht.",
            "Die beiden Eingänge müssen dieselbe Einheit verwenden. Wenn a in Fuß und b in Zoll gemessen wird, konvertieren Sie zuerst eine Messung, damit das Ergebnis aussagekräftig ist."
          ],
          "listTitle": "Überprüfen Sie vor der Berechnung Folgendes:",
          "listItems": [
            "a und b sind die Seiten, die den 90°-Winkel berühren.",
            "Keiner der Eingänge ist Null oder negativ.",
            "Beide Werte werden in der gleichen Einheit gemessen.",
            "Sie suchen nach der Hypotenuse, nicht nach einem fehlenden Kathete."
          ]
        },
        {
          "h2": "So lesen Sie die Antwort",
          "paragraphs": [
            "Die Ausgabe mit der Bezeichnung Hypotenuse c ist die Seite gegenüber dem rechten Winkel. Es ist die diagonale Seite im Diagramm und sollte länger als beide Eingangsschenkel sein.",
            "Wenn Ihr Ergebnis kleiner aussieht als a oder b, ist das ein Zeichen dafür, dass eine der Eingaben falsch beschriftet wurde oder dass das Dreieck eigentlich kein rechtwinkliges Dreieck ist."
          ],
          "listTitle": "Eine schnelle Plausibilitätsprüfung:",
          "listItems": [
            "c sollte größer als a sein.",
            "c sollte größer als b sein.",
            "c sollte kleiner als a + b sein.",
            "Bei gängigen Tripeln wie 3-4-5 oder 5-12-13 sollte das Ergebnis mit dem bekannten Tripel übereinstimmen."
          ]
        },
        {
          "h2": "Häufige Fehler",
          "paragraphs": [
            "Die meisten falschen Hypotenusen-Antworten entstehen durch die Verwendung der richtigen Formel auf den falschen Seiten. Die Katheten müssen die beiden Seiten sein, die den rechten Winkel bilden; Die Hypotenuse ist auf dieser Seite niemals eine Eingabe.",
            "Ein weiteres häufiges Problem ist das Anhalten bei a² + b². Dieser Wert ist c², nicht c. Der Quadratwurzelschritt ist es, der den Quadratwert wieder in die tatsächliche Seitenlänge umwandelt."
          ],
          "listTitle": "Vermeiden Sie diese Fehler:",
          "listItems": [
            "Verwenden Sie die Formel für ein Dreieck, das keinen 90°-Winkel hat.",
            "Eingabe der Diagonalseite als a oder b.",
            "Am Ende habe ich vergessen, die Quadratwurzel zu ziehen.",
            "Mischen von Einheiten wie Zoll und Fuß in derselben Berechnung."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Seitenrechner für rechtwinklige Dreiecke"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Rechner: Fehlende Kathete b aus c und a"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Rechner: Fehlende Kathete a aus c und b"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der Satz des Pythagoras?",
          "answer": "Der Satz des Pythagoras ist eine Formel, die die drei Seiten eines rechtwinkligen Dreiecks in Beziehung setzt: a² + b² = c². Es besagt, dass das Quadrat der Hypotenuse gleich der Summe der Quadrate der beiden Schenkel ist. Dies gilt nur für rechtwinklige Dreiecke."
        },
        {
          "question": "Was bedeutet c in der Formel?",
          "answer": "In der Formel c² = a² + b² ist c die Hypotenuse - die längste Seite des rechtwinkligen Dreiecks. Es ist die Seite direkt gegenüber dem 90°-Winkel."
        },
        {
          "question": "Kann ich diesen Rechner für jedes Dreieck verwenden?",
          "answer": "Nein. Dieser Rechner verwendet den Satz des Pythagoras, der nur für rechtwinklige Dreiecke funktioniert. Wenn Ihr Dreieck keinen 90°-Winkel hat, liefert die Formel kein korrektes Ergebnis."
        },
        {
          "question": "Wie finde ich die Hypotenuse?",
          "answer": "Um die Hypotenuse zu finden, quadrieren Sie beide Schenkel (a² und b²), addieren Sie sie und ziehen Sie die Quadratwurzel der Summe. Die Formel lautet c = √(a² + b²). Oder geben Sie einfach oben Ihre Werte ein und lassen Sie den Rechner dies tun."
        },
        {
          "question": "Was sind a und b in einem rechtwinkligen Dreieck?",
          "answer": "a und b sind die beiden Katheten - die Seiten, die den rechten Winkel bilden. Sie können jede positive Länge haben und es spielt keine Rolle, welche Sie a oder b nennen. Die Hypotenuse (c) ist immer die verbleibende Seite."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Rechner: Fehlende Kathete b aus c und a",
      "metaTitle": "Rechner: Fehlende Kathete b aus c und a | Right Triangle Solver",
      "metaDescription": "Finden Sie die Kathete b, wenn die Hypotenuse c und die andere Kathete a bekannt sind.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Denken Sie daran: c ist immer die Hypotenuse - die längste Seite, gegenüber dem rechten Winkel. Es ist kein Kathete. Wenn Sie zwei Katheten haben und stattdessen die Hypotenuse benötigen, verwenden Sie den Rechner zum Satz des Pythagoras.",
      "intro": "Finden Sie die Kathete b, wenn die Hypotenuse c und die andere Kathete a bekannt sind.",
      "quickSummary": {
        "h2": "Was dieser Rechner für fehlende Katheten löst",
        "intro": "Verwenden Sie diese Seite, wenn die Hypotenuse und das Kathete a bekannt sind, das andere Kathete jedoch fehlt. Der Rechner ordnet den Satz des Pythagoras neu, um das bekannte Kathete von der Hypotenuse zu subtrahieren, bevor die Quadratwurzel gezogen wird.",
        "cards": [
          {
            "label": "Bekannte Werte",
            "value": "c = Hypotenuse; a = bekannte Kathete"
          },
          {
            "label": "Funde",
            "value": "b = unbekannte Kathete"
          },
          {
            "label": "Hauptformel",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Erforderliche Prüfung",
            "value": "Erfordert c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Diagramm des rechten Dreiecks: Kathete finden b",
        "intro": "Das Diagramm markiert c und a als die Werte, die Sie bereits kennen. Das vertikale Kathete b wird als fehlende Seite hervorgehoben, die dieser Rechner berechnet.",
        "caption": "Diagramm eines rechtwinkligen Dreiecks mit bekannter Hypotenuse c, bekanntem Kathete a und unbekanntem Kathete b.",
        "sides": {
          "a": {
            "label": "a = bekannt",
            "description": "Das Kathete a ist das bekannte Kathete entlang der Basis des rechtwinkligen Dreiecks.",
            "status": "known"
          },
          "b": {
            "label": "b = finden",
            "description": "Kathete b ist das unbekannte Kathete, das durch Subtrahieren von a^2 von c^2 gelöst wird.",
            "status": "unknown"
          },
          "c": {
            "label": "c = bekannt",
            "description": "Hypotenuse c ist die bekannte längste Seite gegenüber dem rechten Winkel.",
            "status": "known"
          }
        },
        "notes": [
          "c muss die Hypotenuse sein, nicht eines der Katheten.",
          "Wenn c kleiner oder gleich a ist, bilden die Eingaben kein gültiges rechtwinkliges Dreieck.",
          "Das Ergebnis b verwendet dieselbe Einheit wie c und a."
        ]
      },
      "calculator": {
        "outputLabel": "b = unbekannte Kathete",
        "fields": [
          {
            "key": "c",
            "label": "c = Hypotenuse",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = bekannte Kathete",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Fehlendes Kathete b-Formel",
        "paragraphs": [
          "Die Formel zum Finden des Kathetes b leitet sich aus dem Satz des Pythagoras (a² + b² = c²) ab. Eine Neuanordnung für b ergibt die folgende Formel.",
          "Dabei ist c die Hypotenuse (längste Seite des rechtwinkligen Dreiecks), a das bekannte Kathete und b das fehlende Kathete, nach dem Sie suchen. Beachten Sie die Subtraktion: Sie subtrahieren das Quadrat der bekannten Strecke vom Quadrat der Hypotenuse und ziehen dann die Quadratwurzel."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "So finden Sie Kathete b aus c und a",
        "steps": [
          "Bestätigen Sie, dass c die Hypotenuse und a ein Kathete ist. Die Hypotenuse ist immer die längste Seite.",
          "Geben Sie die Hypotenuse c in das erste Eingabefeld ein.",
          "Geben Sie das bekannte Kathete a in das zweite Eingabefeld ein.",
          "Klicken Sie auf Berechnen, um das fehlende Kathete zu finden.",
          "Lesen Sie das Ergebnis für b zusammen mit der vollständigen Schritt-für-Schritt-Lösung."
        ]
      },
      "example": {
        "h2": "Beispiel: Kathete b finden",
        "intro": "Gegeben: c = 13, a = 5. Der fehlende Schenkel eines rechtwinkligen Dreiecks mit Hypotenuse 13 und Schenkel 5 ist 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Wichtige Prüfung vor der Berechnung",
          "paragraphs": [
            "Bevor Sie diese Formel verwenden, stellen Sie sicher, dass c größer als a ist. Die Hypotenuse ist immer die längste Seite eines rechtwinkligen Dreiecks. Wenn c gleich a ist, erhalten Sie b = 0, was bedeutet, dass kein Dreieck existiert.",
            "Wenn c kleiner als a ist, wird der Ausdruck unter der Quadratwurzel negativ. Das bedeutet, dass die beiden Eingabewerte kein echtes rechtwinkliges Dreieck mit c als Hypotenuse beschreiben können."
          ],
          "listTitle": "Verwenden Sie zunächst diese Prüfungen:",
          "listItems": [
            "c liegt gegenüber dem Winkel 90°.",
            "c ist größer als a.",
            "Beide Werte sind positiv.",
            "c und a verwenden dieselbe Einheit."
          ]
        },
        {
          "h2": "Wo dieser Rechner nützlich ist",
          "paragraphs": [
            "Dieser Rechner ist nützlich, wenn eine diagonale oder geneigte Messung bekannt ist, eine senkrechte Seite bekannt ist und die andere senkrechte Seite fehlt. Es ist das fokussierte Werkzeug für den Fall c-and-a, daher weist jede Erklärung auf der Seite darauf hin, b zu finden.",
            "Es kann auch dabei helfen, Messungen zu überprüfen. Wenn ein gemessener Wert für b nicht mit dem Rechnerergebnis übereinstimmt, stimmt das Dreieck möglicherweise nicht, die Hypotenuse ist möglicherweise falsch beschriftet oder eine Messung verwendet möglicherweise eine andere Einheit."
          ],
          "listTitle": "Häufige Beispiele sind:",
          "listItems": [
            "Ermitteln der Wandhöhe, wenn die Leiterlänge c und der Bodenabstand a bekannt sind.",
            "Ermitteln der vertikalen Steigung eines Hangs, wenn die Hanglänge und der horizontale Verlauf bekannt sind.",
            "Prüfung einer Hausaufgabe mit einem rechtwinkligen Dreieck, die c und a ergibt.",
            "Bestätigen von Grundrissmaßen für Rahmen, Landschaftsgestaltung, Rampen oder Grundrisse."
          ]
        },
        {
          "h2": "So lesen Sie die Antwort",
          "paragraphs": [
            "Die Ausgabe mit der Bezeichnung Fehlendes Kathete b ist die Länge des anderen Kathetes, das mit a den rechten Winkel bildet. Sie ist nicht die Hypotenuse und sollte kürzer als c sein.",
            "Wenn der berechnete b extrem klein ist, liegt Ihr bekanntes Kathete a sehr nahe an der Hypotenuse c. Das kann stimmen, es lohnt sich aber, das Diagramm und die Einheiten zu prüfen, bevor man den Wert verwendet."
          ],
          "listTitle": "Ein gültiges Ergebnis sollte Folgendes erfüllen:",
          "listItems": [
            "b ist größer als Null.",
            "b ist kleiner als c.",
            "a² + b² ist ungefähr gleich c².",
            "Die Ausgabeeinheit entspricht der Eingabeeinheit."
          ]
        },
        {
          "h2": "Häufige Fehler",
          "paragraphs": [
            "Der häufigste Fehler besteht darin, c als Kathete zu behandeln. In diesem Rechner muss c die Hypotenuse sein, also die längste Seite und die dem rechten Winkel gegenüberliegende Seite.",
            "Ein weiterer häufiger Fehler besteht darin, die Quadrate zu addieren statt zu subtrahieren. Addition findet eine Hypotenuse; Durch Subtraktion wird ein fehlendes Kathete der Hypotenuse gefunden."
          ],
          "listTitle": "Vermeiden Sie diese Fehler:",
          "listItems": [
            "Das bekannte Kathete in das Hypotenusenfeld bringen.",
            "Verwendung von c² + a² anstelle von c² - a².",
            "Eingabe eines Werts größer oder gleich c.",
            "Anhalten bei b², anstatt die Quadratwurzel zu ziehen.",
            "Mischeinheiten wie Meter und Zentimeter."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Seitenrechner für rechtwinklige Dreiecke"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Rechner: Satz des Pythagoras"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Rechner: Fehlende Kathete a aus c und b"
        }
      ],
      "faqs": [
        {
          "question": "Was bedeutet c in diesem Rechner?",
          "answer": "c ist die Hypotenuse des rechtwinkligen Dreiecks - die längste Seite, die dem Winkel 90° gegenüberliegt. Es ist kein Kathete. Sie geben c als einen der beiden bekannten Werte in diesen Rechner ein."
        },
        {
          "question": "Was bedeutet a in diesem Rechner?",
          "answer": "a ist einer der beiden Schenkel des rechtwinkligen Dreiecks. Es ist eine der Seiten, die den rechten Winkel bildet. In diesem Rechner ist a das Kathete, das Sie bereits kennen."
        },
        {
          "question": "Was ermittelt dieser Rechner?",
          "answer": "Dieser Rechner findet das fehlende Kathete b. Bei gegebener Hypotenuse c und Kathete a berechnet es b = √(c² − a²) und zeigt Ihnen die Schritt-für-Schritt-Lösung."
        },
        {
          "question": "Kann c kleiner als a sein?",
          "answer": "Nein. In einem rechtwinkligen Dreieck ist die Hypotenuse immer die längste Seite. Wenn c kleiner als a ist, bilden die Werte kein gültiges rechtwinkliges Dreieck. Überprüfen Sie vor der Berechnung, welches Maß die Hypotenuse ist."
        },
        {
          "question": "Wie finde ich b aus c und a?",
          "answer": "Quadrieren Sie die Hypotenuse (c²), quadrieren Sie das bekannte Kathete (a²), subtrahieren Sie a² von c² und ziehen Sie die Quadratwurzel. Die Formel lautet b = √(c² − a²). Oder geben Sie Ihre Werte in diesen Rechner ein, um eine sofortige Antwort zu erhalten."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Rechner: Fehlende Kathete a aus c und b",
      "metaTitle": "Rechner: Fehlende Kathete a aus c und b | Right Triangle Solver",
      "metaDescription": "Finden Sie die Kathete a, wenn die Hypotenuse c und die Kathete b bekannt sind.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Bedenken Sie: c ist die Hypotenuse, kein Kathete. Es ist die längste Seite des Dreiecks und liegt gegenüber dem 90°-Winkel. Wenn Sie beide Katheten haben und die Hypotenuse benötigen, verwenden Sie stattdessen den Rechner zum Satz des Pythagoras.",
      "intro": "Finden Sie die Kathete a, wenn die Hypotenuse c und die Kathete b bekannt sind.",
      "quickSummary": {
        "h2": "Was dieser Rechner für fehlende Katheten löst",
        "intro": "Verwenden Sie diese Seite, wenn Sie die Hypotenuse und das Kathete b kennen, aber das Kathete a benötigen. Dadurch wird die bekannte Seite b von der unbekannten Seite a getrennt, sodass Formel und Ergebnis mit den Beschriftungen auf Ihrem Dreieck übereinstimmen.",
        "cards": [
          {
            "label": "Bekannte Werte",
            "value": "c = Hypotenuse; b = bekannte Kathete"
          },
          {
            "label": "Funde",
            "value": "a = unbekannte Kathete"
          },
          {
            "label": "Hauptformel",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Erforderliche Prüfung",
            "value": "Erfordert c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Diagramm des rechten Dreiecks: Kathete finden a",
        "intro": "Das Diagramm zeigt c als bekannte Hypotenuse und b als bekanntes Kathete. Das Basisbein a wird als fehlender vom Rechner zurückgegebener Wert hervorgehoben.",
        "caption": "Diagramm eines rechtwinkligen Dreiecks mit bekannter Hypotenuse c, bekanntem Kathete b und unbekanntem Kathete a.",
        "sides": {
          "a": {
            "label": "a = finden",
            "description": "Kathete a ist das unbekannte Basisbein, das aus c und b gelöst wird.",
            "status": "unknown"
          },
          "b": {
            "label": "b = bekannt",
            "description": "Kathete b ist das bekannte Kathete, das mit a den rechten Winkel bildet.",
            "status": "known"
          },
          "c": {
            "label": "c = bekannt",
            "description": "Hypotenuse c ist die bekannte längste Seite des rechtwinkligen Dreiecks.",
            "status": "known"
          }
        },
        "notes": [
          "Die Hypotenuse c muss die längste Seite im Eingabepaar sein.",
          "Wenn c kleiner oder gleich b ist, überprüfen Sie erneut, welcher Wert die Hypotenuse ist.",
          "Das berechnete a hat die gleiche Einheit wie die von Ihnen eingegebenen Werte."
        ]
      },
      "calculator": {
        "outputLabel": "a = unbekannte Kathete",
        "fields": [
          {
            "key": "c",
            "label": "c = Hypotenuse",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = bekannte Kathete",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Fehlendes Kathete a-Formel",
        "paragraphs": [
          "Lösen Sie ausgehend vom Satz des Pythagoras (a² + b² = c²) nach a auf, um die folgende Formel zu erhalten.",
          "Dabei ist c die Hypotenuse (die längste Seite gegenüber dem rechten Winkel), b das bekannte Kathete und a das fehlende Kathete, das Sie finden möchten. Die wichtigste Operation ist die Subtraktion: Quadrieren Sie die Hypotenuse, subtrahieren Sie das Quadrat des bekannten Kathetes und ziehen Sie dann die Quadratwurzel aus dem, was übrig bleibt."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "So finden Sie Kathete a aus c und b",
        "steps": [
          "Stellen Sie sicher, dass Sie die Hypotenuse (c) und das bekannte Kathete (b) korrekt identifiziert haben. Die Hypotenuse liegt immer gegenüber dem 90°-Winkel.",
          "Geben Sie die Hypotenuse c in das erste Eingabefeld ein.",
          "Geben Sie das bekannte Kathete b in das zweite Eingabefeld ein.",
          "Klicken Sie auf Berechnen, um das Kathete a zu finden.",
          "Sehen Sie sich das Ergebnis für a und die unten gezeigte Schritt-für-Schritt-Anleitung an."
        ]
      },
      "example": {
        "h2": "Beispiel: Kathete a finden",
        "intro": "Gegeben: c = 10, b = 6. Der fehlende Schenkel eines rechtwinkligen Dreiecks mit Hypotenuse 10 und Schenkel 6 ist 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Wichtige Prüfung vor der Berechnung",
          "paragraphs": [
            "Damit die Berechnung funktioniert, muss die Hypotenuse c größer als b sein. In jedem rechtwinkligen Dreieck ist die Hypotenuse die längste Seite. Wenn c gleich b ist, ergibt die Formel a = 0, was bedeutet, dass kein Dreieck gebildet werden kann.",
            "Wenn c kleiner als b ist, wird der Ausdruck unter der Quadratwurzel negativ und es gibt keine echte Seitenlänge für a. Überprüfen Sie in diesem Fall noch einmal, welche Seite dem 90°-Winkel gegenüberliegt."
          ],
          "listTitle": "Verwenden Sie zunächst diese Prüfungen:",
          "listItems": [
            "c ist die dem rechten Winkel gegenüberliegende Seite.",
            "c ist größer als b.",
            "Beide Eingaben sind positive Zahlen.",
            "c und b verwenden dieselbe Maßeinheit."
          ]
        },
        {
          "h2": "Wo dieser Rechner nützlich ist",
          "paragraphs": [
            "Dieser Rechner ist das richtige Werkzeug, wenn Sie die Hypotenuse und das Kathete b kennen und das Kathete a ermitteln müssen. Dies ist besonders hilfreich, wenn Ihr Diagramm das bekannte Kathete als b und die unbekannte Basis oder Höhe als a bezeichnet.",
            "Die Seite dient auch als Messkontrolle. Wenn sich die berechnete Seite a stark von der gemessenen Seite a unterscheidet, enthält das Dreieck möglicherweise keinen echten 90°-Winkel oder einer der bekannten Werte wurde möglicherweise falsch kopiert."
          ],
          "listTitle": "Häufige Beispiele sind:",
          "listItems": [
            "Ermitteln eines Basisabstands, wenn die Neigungslänge c und die Höhe b bekannt sind.",
            "Ermitteln einer vertikalen Höhe, wenn die Hypotenuse und der horizontale Abstand bekannt sind.",
            "Lösen von Geometrieproblemen, die c und b ergeben und nach a fragen.",
            "Überprüfen von Konstruktions-, Kartierungs- oder Grundrissmaßen, die ein rechtwinkliges Dreieck bilden."
          ]
        },
        {
          "h2": "So lesen Sie die Antwort",
          "paragraphs": [
            "Die Ausgabe mit der Bezeichnung Fehlendes Kathete a ist die andere Seite, die mit b den rechten Winkel bildet. Sie sollte kürzer als die Hypotenuse c und größer als Null sein.",
            "Wenn das Ergebnis nahe bei c liegt, ist das bekannte Kathete b relativ klein. Wenn das Ergebnis nahe Null liegt, ist b fast so lang wie c. Beides kann passieren, aber die Eingabebezeichnungen sollten überprüft werden, bevor die Antwort verwendet wird."
          ],
          "listTitle": "Ein gültiges Ergebnis sollte Folgendes erfüllen:",
          "listItems": [
            "a ist größer als Null.",
            "a ist kleiner als c.",
            "a² + b² ist ungefähr gleich c².",
            "Die Ausgabeeinheit entspricht der für c und b verwendeten Einheit."
          ]
        },
        {
          "h2": "Häufige Fehler",
          "paragraphs": [
            "Das größte Risiko besteht darin, die Hypotenuse mit einem Kathete zu vertauschen. Dieser Rechner geht davon aus, dass c bereits die längste Seite ist, sodass ein falsch beschrifteter c-Wert das Ergebnis falsch macht.",
            "Ein zweites häufiges Problem ist die versehentliche Verwendung der Hypotenuse-Formel. Um ein fehlendes Kathete zu finden, subtrahieren Sie das bekannte Kathetequadrat vom Hypotenusenquadrat und ziehen dann die Quadratwurzel."
          ],
          "listTitle": "Vermeiden Sie diese Fehler:",
          "listItems": [
            "Eintrittsschenkel b als Hypotenuse c.",
            "Verwendung von c² + b² anstelle von c² - b².",
            "Eingabe von b größer oder gleich c.",
            "Nach dem Subtrahieren die Quadratwurzel vergessen.",
            "Kombinieren von Messungen, die unterschiedliche Einheiten verwenden."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Seitenrechner für rechtwinklige Dreiecke"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Rechner: Satz des Pythagoras"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Rechner: Fehlende Kathete b aus c und a"
        }
      ],
      "faqs": [
        {
          "question": "Was bedeutet c in diesem Rechner?",
          "answer": "c ist die Hypotenuse - die längste Seite des rechtwinkligen Dreiecks, gegenüber dem Winkel 90°. In diesem Rechner geben Sie c als einen Ihrer beiden bekannten Werte ein."
        },
        {
          "question": "Was bedeutet b in diesem Rechner?",
          "answer": "b ist einer der beiden Schenkel des rechtwinkligen Dreiecks. Es ist eine Seite, die den rechten Winkel bildet. Hier ist b das Kathete, das Sie bereits kennen, und der Rechner verwendet es zusammen mit c, um das fehlende Kathete a zu finden."
        },
        {
          "question": "Was ermittelt dieser Rechner?",
          "answer": "Es findet das fehlende Kathete a. Sie geben die Hypotenuse (c) und einen Schenkel (b) an und der Rechner wendet die Formel a = √(c² − b²) an, um den unbekannten Schenkel mit einer schrittweisen Lösung zu erhalten."
        },
        {
          "question": "Kann c kleiner als b sein?",
          "answer": "Nein. Die Hypotenuse ist immer die längste Seite in einem rechtwinkligen Dreieck. Wenn Ihr Wert für c kleiner als b ist, stellen die Eingaben kein gültiges rechtwinkliges Dreieck dar. Überprüfen Sie noch einmal, welches Maß der Hypotenuse entspricht."
        },
        {
          "question": "Wie finde ich einen von c und b?",
          "answer": "Quadrieren Sie die Hypotenuse (c²), quadrieren Sie das bekannte Kathete (b²), subtrahieren Sie b² von c² und ziehen Sie die Quadratwurzel des Ergebnisses. Die Formel lautet a = √(c² − b²). Sie können Ihre Werte auch einfach in diesen Rechner eingeben, um die Antwort automatisch zu erhalten."
        }
      ]
    }
  },
  "it": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Calcolatrice: Teorema di Pitagora",
      "metaTitle": "Calcolatrice: Teorema di Pitagora | Right Triangle Solver",
      "metaDescription": "Trova l'ipotenusa quando entrambi i cateti sono noti. Questa è l'identità primaria per ogni triangolo rettangolo.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Che tu stia risolvendo un problema per casa o misurando una diagonale nella vita reale, questo strumento ti dà la risposta in pochi secondi, con la soluzione completa mostrata passo dopo passo.",
      "intro": "Trova l'ipotenusa quando entrambi i cateti sono noti. Questa è l'identità primaria per ogni triangolo rettangolo.",
      "quickSummary": {
        "h2": "Cosa risolve questo calcolatore pitagorico",
        "intro": "Utilizzare questa pagina quando si conoscono i due lati che si incontrano nell'angolo 90° e manca il lato diagonale. La calcolatrice si concentra sul classico caso dell'ipotenusa, quindi gli input rimangono semplici e il risultato è facile da controllare.",
        "cards": [
          {
            "label": "Valori conosciuti",
            "value": "a = cateto opposto all'angolo A; b = cateto opposto all'angolo B"
          },
          {
            "label": "Trova",
            "value": "c = ipotenusa"
          },
          {
            "label": "Formula principale",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Meglio per",
            "value": "Diagonali, scale, rampe, schermi e compiti di geometria"
          }
        ]
      },
      "diagram": {
        "h2": "Diagramma del triangolo rettangolo: trovare l'ipotenusa",
        "intro": "Il diagramma mostra l'esatta relazione laterale utilizzata dallo strumento. Le due cateti rappresentano i valori di input noti e il lato obliquo c è l'ipotenusa trovata dalla calcolatrice.",
        "caption": "Diagramma del triangolo rettangolo con cateti noti a e b e ipotenusa sconosciuta c.",
        "sides": {
          "a": {
            "label": "a = conosciuto",
            "description": "La cateto a è uno dei due lati che forma l'angolo retto.",
            "status": "known"
          },
          "b": {
            "label": "b = noto",
            "description": "La cateto b è l'altro lato che forma l'angolo retto.",
            "status": "known"
          },
          "c": {
            "label": "c = trova",
            "description": "L'ipotenusa c è il lato più lungo e si trova di fronte all'angolo 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a e b possono essere scambiati; il risultato dell'ipotenusa sarà lo stesso.",
          "Utilizzare la stessa unità per entrambe le cateti prima del calcolo.",
          "La risposta c sarà sempre maggiore di uno dei cateti di un triangolo rettangolo valido."
        ]
      },
      "calculator": {
        "outputLabel": "c = ipotenusa",
        "fields": [
          {
            "key": "a",
            "label": "a = cateto opposto all'angolo A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = cateto opposto all'angolo B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formula del teorema di Pitagora",
        "paragraphs": [
          "Il teorema di Pitagora afferma che in un triangolo rettangolo il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei due cateti. Per risolvere l'ipotenusa, prendi la radice quadrata di entrambi i lati.",
          "In questa formula, a e b sono i due cateti del triangolo rettangolo, ovvero i lati che formano l'angolo retto. c è l'ipotenusa, il lato più lungo, opposto all'angolo retto. Questa formula funziona solo per i triangoli rettangoli."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Come utilizzare il calcolatore del teorema di Pitagora",
        "steps": [
          "Identifica i due cateti del tuo triangolo rettangolo. Questi sono i lati che formano l'angolo retto.",
          "Immettere la tratta a nel primo campo di immissione.",
          "Immettere la tratta b nel secondo campo di immissione.",
          "Fare clic su Calcola per trovare l'ipotenusa.",
          "Leggi il risultato per c, insieme alla soluzione passo passo."
        ]
      },
      "example": {
        "h2": "Esempio: Trova l'ipotenusa",
        "intro": "Dato: a = 6, b = 8. L'ipotenusa di un triangolo rettangolo con i cateti 6 e 8 è 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Dove è utile questa calcolatrice",
          "paragraphs": [
            "Il calcolatore dell'ipotenusa è utile ogni volta che due distanze perpendicolari si combinano in una distanza diagonale. È particolarmente utile quando un disegno, una planimetria o un compito a casa fornisce i lati orizzontale e verticale ma lascia vuoto il lato diagonale.",
            "Poiché questa pagina risolve solo c, evita la confusione derivante dal passaggio da una modalità laterale all'altra. Se i tuoi valori noti sono le due cateti, questo è lo strumento mirato per il teorema di Pitagora da utilizzare."
          ],
          "listTitle": "Esempi comuni includono:",
          "listItems": [
            "Trovare la diagonale di un rettangolo, di uno schermo, di un layout di riquadri o di una stanza.",
            "Calcolo della lunghezza della scala dall'altezza della parete e dalla distanza dal suolo.",
            "Stima della lunghezza inclinata di una rampa dalla salita alla corsa.",
            "Controllo dei compiti sul triangolo rettangolo prima di inviare la risposta finale."
          ]
        },
        {
          "h2": "Suggerimenti per l'immissione di risultati migliori",
          "paragraphs": [
            "Inserisci la lunghezza di entrambe le cateti come numeri positivi. I decimali vanno bene e la calcolatrice manterrà una precisione sufficiente per rendere utile il lavoro passo dopo passo.",
            "I due ingressi devono utilizzare la stessa unità. Se a è misurato in piedi e b è misurato in pollici, convertire prima una misura in modo che il risultato sia significativo."
          ],
          "listTitle": "Prima di calcolare, controlla che:",
          "listItems": [
            "a e b sono i lati che toccano l'angolo 90°.",
            "Nessuno dei due input è zero o negativo.",
            "Entrambi i valori sono misurati nella stessa unità.",
            "Stai risolvendo per l'ipotenusa, non per una cateto mancante."
          ]
        },
        {
          "h2": "Come leggere la risposta",
          "paragraphs": [
            "L'uscita etichettata Hypotenuse c è il lato opposto all'angolo retto. È il lato diagonale nel diagramma e dovrebbe essere più lungo di entrambe le cateti di ingresso.",
            "Se il risultato sembra più piccolo di a o b, significa che uno degli input è stato etichettato in modo errato o che il triangolo non è effettivamente un triangolo rettangolo."
          ],
          "listTitle": "Un rapido controllo di ragionevolezza:",
          "listItems": [
            "c dovrebbe essere maggiore di a.",
            "c deve essere maggiore di b.",
            "c dovrebbe essere inferiore a + b.",
            "Per le triple comuni come 3-4-5 o 5-12-13, il risultato dovrebbe corrispondere alla tripla conosciuta."
          ]
        },
        {
          "h2": "Errori comuni",
          "paragraphs": [
            "La maggior parte delle risposte sbagliate sull'ipotenusa derivano dall'uso della formula giusta sui lati sbagliati. Le cateti devono essere i due lati che formano l'angolo retto; l'ipotenusa non è mai un input in questa pagina.",
            "Un altro problema comune è l'arresto a a² + b². Tale valore è c², non c. Il passo della radice quadrata è ciò che trasforma il valore al quadrato nella lunghezza effettiva del lato."
          ],
          "listTitle": "Evita questi errori:",
          "listItems": [
            "Utilizzando la formula su un triangolo che non ha un angolo 90°.",
            "Inserendo il lato diagonale come a o b.",
            "Dimenticandosi di prendere la radice quadrata alla fine.",
            "Combinazione di unità come pollici e piedi nello stesso calcolo."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calcolatore del lato del triangolo rettangolo"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Calcolatrice: Cateto mancante da c e a"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Calcolatrice: Cateto mancante da c e b"
        }
      ],
      "faqs": [
        {
          "question": "Qual è il teorema di Pitagora?",
          "answer": "Il teorema di Pitagora è una formula che mette in relazione i tre lati di un triangolo rettangolo: a² + b² = c². Dice che il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei due cateti. Si applica solo ai triangoli rettangoli."
        },
        {
          "question": "Cosa significa c nella formula?",
          "answer": "Nella formula c² = a² + b², c è l'ipotenusa, il lato più lungo del triangolo rettangolo. È il lato direttamente opposto all'angolo 90°."
        },
        {
          "question": "Posso usare questa calcolatrice per qualsiasi triangolo?",
          "answer": "No. Questa calcolatrice utilizza il teorema di Pitagora, che funziona solo per i triangoli rettangoli. Se il tuo triangolo non ha un angolo 90°, la formula non darà un risultato corretto."
        },
        {
          "question": "Come trovo l'ipotenusa?",
          "answer": "Per trovare l'ipotenusa, quadra entrambi i cateti (a² e b²), sommali e calcola la radice quadrata della somma. La formula è c = √(a² + b²). Oppure inserisci semplicemente i tuoi valori sopra e lascia che lo faccia la calcolatrice."
        },
        {
          "question": "Cosa sono a e b in un triangolo rettangolo?",
          "answer": "a e b sono le due cateti, i lati che formano l'angolo retto. Possono avere qualsiasi lunghezza positiva e non importa quale chiami a o b. L'ipotenusa (c) è sempre il lato rimanente."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Calcolatrice: Cateto mancante da c e a",
      "metaTitle": "Calcolatrice: Cateto mancante da c e a | Right Triangle Solver",
      "metaDescription": "Trova il cateto b quando l'ipotenusa c e l'altro cateto a sono noti.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Ricorda: c è sempre l'ipotenusa, ovvero il lato più lungo, opposto all'angolo retto. Non è una cateto. Se hai due cateti e ti serve invece l'ipotenusa, usa il calcolatore del teorema di Pitagora.",
      "intro": "Trova il cateto b quando l'ipotenusa c e l'altro cateto a sono noti.",
      "quickSummary": {
        "h2": "Cosa risolve questo calcolatore della cateto mancante",
        "intro": "Utilizzare questa pagina quando si conoscono l'ipotenusa e il cateto a, ma manca l'altro cateto. La calcolatrice riorganizza il teorema di Pitagora per sottrarre la cateto nota dall'ipotenusa prima di calcolare la radice quadrata.",
        "cards": [
          {
            "label": "Valori conosciuti",
            "value": "c = ipotenusa; a = cateto noto"
          },
          {
            "label": "Trova",
            "value": "b = cateto ignoto"
          },
          {
            "label": "Formula principale",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Controllo obbligatorio",
            "value": "Richiede c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Diagramma del triangolo rettangolo: trovare la cateto b",
        "intro": "Il diagramma contrassegna c e a come i valori che già conosci. La cateto verticale b è evidenziata come il lato mancante che questa calcolatrice risolve.",
        "caption": "Diagramma del triangolo rettangolo con ipotenusa nota c, cateto noto a e cateto sconosciuto b.",
        "sides": {
          "a": {
            "label": "a = conosciuto",
            "description": "Il cateto a è il cateto noto lungo la base del triangolo rettangolo.",
            "status": "known"
          },
          "b": {
            "label": "b = trova",
            "description": "La cateto b è la cateto sconosciuta risolta sottraendo a^2 da c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = noto",
            "description": "L'ipotenusa c è il lato più lungo conosciuto opposto all'angolo retto.",
            "status": "known"
          }
        },
        "notes": [
          "c deve essere l'ipotenusa, non uno dei cateti.",
          "Se c è minore o uguale a a, gli input non formano un triangolo rettangolo valido.",
          "Il risultato b utilizza la stessa unità di c e a."
        ]
      },
      "calculator": {
        "outputLabel": "b = cateto ignoto",
        "fields": [
          {
            "key": "c",
            "label": "c = ipotenusa",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = cateto noto",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formula b della cateto mancante",
        "paragraphs": [
          "La formula per trovare la cateto b deriva dal teorema di Pitagora (a² + b² = c²). La riorganizzazione per b fornisce la formula seguente.",
          "Dove c è l'ipotenusa (lato più lungo del triangolo rettangolo), a è la cateto conosciuta e b è la cateto mancante per cui stai risolvendo. Nota la sottrazione: sottrai il quadrato del cateto noto dal quadrato dell'ipotenusa, quindi prendi la radice quadrata."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Come trovare la cateto b da c e a",
        "steps": [
          "Conferma che c è l'ipotenusa e a è un cateto. L'ipotenusa è sempre il lato più lungo.",
          "Immettere l'ipotenusa c nel primo campo di immissione.",
          "Immettere la tratta nota a nel secondo campo di immissione.",
          "Fare clic su Calcola per trovare la cateto mancante.",
          "Leggi il risultato per b, insieme alla soluzione completa passo dopo passo."
        ]
      },
      "example": {
        "h2": "Esempio: trovare la cateto b",
        "intro": "Dato: c = 13, a = 5. Il cateto mancante di un triangolo rettangolo con ipotenusa 13 e cateto 5 è 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Controllo importante prima del calcolo",
          "paragraphs": [
            "Prima di utilizzare questa formula, assicurati che c sia maggiore di a. L'ipotenusa è sempre il lato più lungo di un triangolo rettangolo. Se c è uguale a a, otterresti b = 0, il che significa che non esiste alcun triangolo.",
            "Se c è inferiore a a, l'espressione sotto la radice quadrata diventa negativa. Ciò significa che i due valori di input non possono descrivere un triangolo rettangolo reale con c come ipotenusa."
          ],
          "listTitle": "Utilizza prima questi controlli:",
          "listItems": [
            "c è opposto all'angolo 90°.",
            "c è maggiore di a.",
            "Entrambi i valori sono positivi.",
            "c e a utilizzano la stessa unità."
          ]
        },
        {
          "h2": "Dove è utile questa calcolatrice",
          "paragraphs": [
            "Questa calcolatrice è utile quando si conosce una misura diagonale o inclinata, si conosce un lato perpendicolare e manca l'altro lato perpendicolare. È lo strumento mirato per il caso c-and-a, quindi ogni spiegazione nella pagina punta alla ricerca di b.",
            "Può anche aiutare a verificare le misurazioni. Se un valore misurato per b non corrisponde al risultato della calcolatrice, il triangolo potrebbe non essere retto, l'ipotenusa potrebbe avere un'etichetta errata o una misurazione potrebbe utilizzare un'unità diversa."
          ],
          "listTitle": "Esempi comuni includono:",
          "listItems": [
            "Determinazione dell'altezza del muro quando si conoscono la lunghezza della scala c e la distanza dal suolo a.",
            "Trovare l'aumento verticale di un pendio quando si conoscono la lunghezza del pendio e il percorso orizzontale.",
            "Controllo di un problema di compiti a casa sul triangolo rettangolo che dà c e a.",
            "Conferma delle misurazioni del layout per inquadrature, paesaggi, rampe o planimetrie."
          ]
        },
        {
          "h2": "Come leggere la risposta",
          "paragraphs": [
            "L'output etichettato cateto mancante b è la lunghezza dell'altra cateto che forma l'angolo retto con a. Non è l'ipotenusa e dovrebbe essere più breve di c.",
            "Se il valore b calcolato è estremamente piccolo, il cateto noto a è molto vicino all'ipotenusa c. Ciò può essere valido, ma vale la pena controllare il diagramma e le unità prima di utilizzare il valore."
          ],
          "listTitle": "Un risultato valido dovrebbe soddisfare:",
          "listItems": [
            "b è maggiore di zero.",
            "b è inferiore a c.",
            "a² + b² è approssimativamente uguale a c².",
            "L'unità di output corrisponde all'unità di input."
          ]
        },
        {
          "h2": "Errori comuni",
          "paragraphs": [
            "L'errore più comune è trattare c come una cateto. In questa calcolatrice, c deve essere l'ipotenusa, ovvero il lato più lungo e il lato opposto all'angolo retto.",
            "Un altro errore frequente è sommare i quadrati invece di sottrarre. L'addizione trova un'ipotenusa; la sottrazione trova una cateto mancante dell'ipotenusa."
          ],
          "listTitle": "Evita questi errori:",
          "listItems": [
            "Mettere la cateto conosciuta nel campo dell'ipotenusa.",
            "Utilizzando c² + a² invece di c² - a².",
            "Immissione di un valore maggiore o uguale a c.",
            "Fermarsi a b² invece di prendere la radice quadrata.",
            "Unità di miscelazione come metri e centimetri."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calcolatore del lato del triangolo rettangolo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calcolatrice: Teorema di Pitagora"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Calcolatrice: Cateto mancante da c e b"
        }
      ],
      "faqs": [
        {
          "question": "Cosa significa c in questa calcolatrice?",
          "answer": "c è l'ipotenusa del triangolo rettangolo, il lato più lungo, situato di fronte all'angolo 90°. Non è una cateto. Inserisci c come uno dei due valori noti in questa calcolatrice."
        },
        {
          "question": "Cosa significa in questa calcolatrice?",
          "answer": "a è uno dei due cateti del triangolo rettangolo. È uno dei lati che forma l'angolo retto. In questa calcolatrice, a è la cateto che già conosci."
        },
        {
          "question": "Cosa trova questa calcolatrice?",
          "answer": "Questa calcolatrice trova la cateto mancante b. Data l'ipotenusa c e il cateto a, calcola b = √(c² − a²) e mostra la soluzione passo passo."
        },
        {
          "question": "c può essere più piccolo di a?",
          "answer": "No. In un triangolo rettangolo l'ipotenusa è sempre il lato più lungo. Se c è inferiore a a, i valori non formano un triangolo rettangolo valido. Controlla quale misura è l'ipotenusa prima di calcolare."
        },
        {
          "question": "Come posso trovare b da c e a?",
          "answer": "Eleva l'ipotenusa al quadrato (c²), eleva al quadrato il cateto noto (a²), sottrai a² da c² e calcola la radice quadrata. La formula è b = √(c² − a²). Oppure inserisci i tuoi valori in questa calcolatrice per una risposta immediata."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Calcolatrice: Cateto mancante da c e b",
      "metaTitle": "Calcolatrice: Cateto mancante da c e b | Right Triangle Solver",
      "metaDescription": "Trova il cateto a quando l'ipotenusa c e il cateto b sono noti.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Tieni presente: c è l'ipotenusa, non una cateto. È il lato più lungo del triangolo e si trova di fronte all'angolo 90°. Se hai entrambe le cateti e ti serve l'ipotenusa, usa invece il calcolatore del teorema di Pitagora.",
      "intro": "Trova il cateto a quando l'ipotenusa c e il cateto b sono noti.",
      "quickSummary": {
        "h2": "Cosa risolve questo calcolatore della cateto mancante",
        "intro": "Utilizza questa pagina quando conosci l'ipotenusa e il cateto b, ma ti serve il cateto a. Mantiene il lato noto b separato dal lato sconosciuto a in modo che la formula e il risultato corrispondano alle etichette sul triangolo.",
        "cards": [
          {
            "label": "Valori conosciuti",
            "value": "c = ipotenusa; b = cateto noto"
          },
          {
            "label": "Trova",
            "value": "a = cateto ignoto"
          },
          {
            "label": "Formula principale",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Controllo obbligatorio",
            "value": "Richiede c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Diagramma del triangolo rettangolo: trovare la cateto a",
        "intro": "Il diagramma mostra c come l'ipotenusa nota e b come il cateto noto. La cateto base a viene evidenziata come valore mancante restituito dalla calcolatrice.",
        "caption": "Diagramma del triangolo rettangolo con ipotenusa nota c, cateto noto b e cateto sconosciuto a.",
        "sides": {
          "a": {
            "label": "a = trova",
            "description": "La cateto a è la cateto base sconosciuta risolta da c e b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = noto",
            "description": "La cateto b è la cateto nota che forma l'angolo retto con a.",
            "status": "known"
          },
          "c": {
            "label": "c = noto",
            "description": "L'ipotenusa c è il lato più lungo conosciuto del triangolo rettangolo.",
            "status": "known"
          }
        },
        "notes": [
          "L'ipotenusa c deve essere il lato più lungo nella coppia di input.",
          "Se c è minore o uguale a b, ricontrolla quale valore è l'ipotenusa.",
          "L'a calcolato ha la stessa unità dei valori immessi."
        ]
      },
      "calculator": {
        "outputLabel": "a = cateto ignoto",
        "fields": [
          {
            "key": "c",
            "label": "c = ipotenusa",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = cateto noto",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formula a della cateto mancante",
        "paragraphs": [
          "Partendo dal teorema di Pitagora (a² + b² = c²), risolvi a per ottenere la formula seguente.",
          "Dove c è l'ipotenusa (il lato più lungo, opposto all'angolo retto), b è il cateto noto e a è il cateto mancante che vuoi trovare. L'operazione chiave è la sottrazione: eleva al quadrato l'ipotenusa, sottrai il quadrato della cateto nota, quindi prendi la radice quadrata di ciò che rimane."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Come trovare la cateto a da c e b",
        "steps": [
          "Assicurati di aver identificato correttamente l'ipotenusa (c) e il cateto noto (b). L'ipotenusa è sempre opposta all'angolo 90°.",
          "Immettere l'ipotenusa c nel primo campo di immissione.",
          "Immettere la tratta nota b nel secondo campo di immissione.",
          "Fare clic su Calcola per trovare la cateto a.",
          "Esamina il risultato per a e il lavoro passo passo mostrato di seguito."
        ]
      },
      "example": {
        "h2": "Esempio: Trova la cateto a",
        "intro": "Dati: c = 10, b = 6. Il cateto mancante di un triangolo rettangolo con ipotenusa 10 e cateto 6 è 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Controllo importante prima del calcolo",
          "paragraphs": [
            "L'ipotenusa c deve essere maggiore di b affinché il calcolo funzioni. In ogni triangolo rettangolo l'ipotenusa è il lato più lungo. Se c è uguale a b, la formula dà a = 0, il che significa che non può essere formato alcun triangolo.",
            "Se c è inferiore a b, l'espressione sotto la radice quadrata diventa negativa e non esiste una lunghezza del lato reale per a. In tal caso, ricontrollare quale lato è opposto all'angolo 90°."
          ],
          "listTitle": "Utilizza prima questi controlli:",
          "listItems": [
            "c è il lato opposto all'angolo retto.",
            "c è maggiore di b.",
            "Entrambi gli input sono numeri positivi.",
            "c e b utilizzano la stessa unità di misura."
          ]
        },
        {
          "h2": "Dove è utile questa calcolatrice",
          "paragraphs": [
            "Questa calcolatrice è lo strumento giusto quando conosci l'ipotenusa e il cateto b e devi trovare il cateto a. È particolarmente utile quando il diagramma etichetta la cateto nota come b e la base o l'altezza sconosciuta come a.",
            "La pagina funziona anche come controllo delle misure. Se il lato calcolato a è molto diverso dal lato misurato a, il triangolo potrebbe non includere un vero angolo 90° oppure uno dei valori noti potrebbe essere stato copiato in modo errato."
          ],
          "listTitle": "Esempi comuni includono:",
          "listItems": [
            "Trovare una distanza di base quando sono note la lunghezza del pendio c e l'altezza b.",
            "Trovare l'altezza verticale conoscendo l'ipotenusa e la distanza orizzontale.",
            "Risolvere problemi di geometria che danno c e b e chiedono a.",
            "Controllo delle misure di costruzione, mappatura o planimetria che formano un triangolo rettangolo."
          ]
        },
        {
          "h2": "Come leggere la risposta",
          "paragraphs": [
            "L'output etichettato cateto mancante a è l'altro lato che forma l'angolo retto con b. Dovrebbe essere più corto dell'ipotenusa c e maggiore di zero.",
            "Se il risultato è vicino a c, la cateto nota b è relativamente piccola. Se il risultato è vicino allo zero, b è lungo quasi quanto c. Possono verificarsi entrambe le cose, ma è necessario controllare le etichette di input prima di utilizzare la risposta."
          ],
          "listTitle": "Un risultato valido dovrebbe soddisfare:",
          "listItems": [
            "a è maggiore di zero.",
            "a è inferiore a c.",
            "a² + b² è approssimativamente uguale a c².",
            "L'unità di uscita corrisponde all'unità utilizzata per c e b."
          ]
        },
        {
          "h2": "Errori comuni",
          "paragraphs": [
            "Il rischio più grande è scambiare l'ipotenusa con una cateto. Questa calcolatrice presuppone che c sia già il lato più lungo, quindi un valore c etichettato erroneamente renderà il risultato errato.",
            "Un secondo problema comune è l'utilizzo errato della formula dell'ipotenusa. Per trovare una cateto mancante, sottrai il quadrato della cateto conosciuta dal quadrato dell'ipotenusa, quindi prendi la radice quadrata."
          ],
          "listTitle": "Evita questi errori:",
          "listItems": [
            "Inserendo il cateto b come ipotenusa c.",
            "Utilizzando c² + b² invece di c² - b².",
            "Immissione di b maggiore o uguale a c.",
            "Dimenticare la radice quadrata dopo la sottrazione.",
            "Combinazione di misurazioni che utilizzano unità diverse."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calcolatore del lato del triangolo rettangolo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calcolatrice: Teorema di Pitagora"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Calcolatrice: Cateto mancante da c e a"
        }
      ],
      "faqs": [
        {
          "question": "Cosa significa c in questa calcolatrice?",
          "answer": "c è l'ipotenusa, il lato più lungo del triangolo rettangolo, opposto all'angolo 90°. In questa calcolatrice, inserisci c come uno dei due valori noti."
        },
        {
          "question": "Cosa significa b in questa calcolatrice?",
          "answer": "b è uno dei due cateti del triangolo rettangolo. È un lato che forma l’angolo retto. Qui, b è la cateto che già conosci e la calcolatrice la utilizza insieme a c per trovare la cateto mancante a."
        },
        {
          "question": "Cosa trova questa calcolatrice?",
          "answer": "Trova la cateto mancante a. Fornisci l'ipotenusa (c) e un cateto (b) e la calcolatrice applica la formula a = √(c² − b²) per fornirti il ​​cateto sconosciuto con una soluzione passo passo."
        },
        {
          "question": "c può essere più piccolo di b?",
          "answer": "No. L'ipotenusa è sempre il lato più lungo in un triangolo rettangolo. Se il valore per c è inferiore a b, gli input non rappresentano un triangolo rettangolo valido. Ricontrolla quale misura corrisponde all'ipotenusa."
        },
        {
          "question": "Come posso trovare un da c e b?",
          "answer": "Eleva al quadrato l'ipotenusa (c²), eleva al quadrato il cateto noto (b²), sottrai b² da c² e calcola la radice quadrata del risultato. La formula è a = √(c² − b²). Puoi anche semplicemente inserire i tuoi valori in questa calcolatrice per ottenere la risposta automaticamente."
        }
      ]
    }
  },
  "pt": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Calculadora: Teorema de Pitágoras",
      "metaTitle": "Calculadora: Teorema de Pitágoras | Right Triangle Solver",
      "metaDescription": "Encontre a hipotenusa quando ambos os catetos são conhecidos. Esta é a principal identidade para qualquer triângulo retângulo.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Esteja você resolvendo um problema de lição de casa ou medindo uma diagonal na vida real, esta ferramenta lhe dá a resposta em segundos - com a solução completa mostrada passo a passo.",
      "intro": "Encontre a hipotenusa quando ambos os catetos são conhecidos. Esta é a principal identidade para qualquer triângulo retângulo.",
      "quickSummary": {
        "h2": "O que esta calculadora pitagórica resolve",
        "intro": "Utilize esta página quando os dois lados que se encontram no ângulo 90° forem conhecidos e o lado diagonal estiver faltando. A calculadora concentra-se no caso clássico da hipotenusa, de modo que as entradas permanecem simples e o resultado é fácil de verificar.",
        "cards": [
          {
            "label": "Valores conhecidos",
            "value": "a = cateto oposto ao ângulo A; b = cateto oposto ao ângulo B"
          },
          {
            "label": "Descobertas",
            "value": "c = hipotenusa"
          },
          {
            "label": "Fórmula principal",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Melhor para",
            "value": "Diagonais, escadas, rampas, telas e trabalhos de geometria"
          }
        ]
      },
      "diagram": {
        "h2": "Diagrama do Triângulo Retângulo: Encontrando a Hipotenusa",
        "intro": "O diagrama mostra a relação lateral exata usada pela ferramenta. As duas catetos são os valores de entrada conhecidos e o lado inclinado c é a hipotenusa que a calculadora encontra.",
        "caption": "Diagrama de triângulo retângulo com catetos conhecidas a e b e hipotenusa desconhecida c.",
        "sides": {
          "a": {
            "label": "a = conhecido",
            "description": "A cateto a é um dos dois lados que forma o ângulo reto.",
            "status": "known"
          },
          "b": {
            "label": "b = conhecido",
            "description": "A cateto b é o outro lado que forma o ângulo reto.",
            "status": "known"
          },
          "c": {
            "label": "c = encontrar",
            "description": "A hipotenusa c é o lado mais longo e fica oposta ao ângulo 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a e b podem ser trocados; o resultado da hipotenusa será o mesmo.",
          "Use a mesma unidade para ambas as catetos antes de calcular.",
          "A resposta c será sempre maior que qualquer cateto de um triângulo retângulo válido."
        ]
      },
      "calculator": {
        "outputLabel": "c = hipotenusa",
        "fields": [
          {
            "key": "a",
            "label": "a = cateto oposto ao ângulo A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = cateto oposto ao ângulo B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Fórmula do Teorema de Pitágoras",
        "paragraphs": [
          "O teorema de Pitágoras afirma que em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos dois catetos. Para resolver a hipotenusa, tire a raiz quadrada de ambos os lados.",
          "Nesta fórmula, a e b são os dois catetos do triângulo retângulo - os lados que formam o ângulo reto. c é a hipotenusa, o lado mais longo, oposto ao ângulo reto. Esta fórmula só funciona para triângulos retângulos."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Como usar a calculadora do teorema de Pitágoras",
        "steps": [
          "Identifique as duas catetos do seu triângulo retângulo. Esses são os lados que formam o ângulo reto.",
          "Insira leg a no primeiro campo de entrada.",
          "Insira leg b no segundo campo de entrada.",
          "Clique em Calcular para encontrar a hipotenusa.",
          "Leia o resultado de c, junto com a solução passo a passo."
        ]
      },
      "example": {
        "h2": "Exemplo: Encontre a hipotenusa",
        "intro": "Dado: a = 6, b = 8. A hipotenusa de um triângulo retângulo com catetos 6 e 8 é 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Onde esta calculadora é útil",
          "paragraphs": [
            "A calculadora da hipotenusa é útil sempre que duas distâncias perpendiculares se combinam em uma distância diagonal. É especialmente útil quando um problema de desenho, planta baixa ou dever de casa fornece os lados horizontal e vertical, mas deixa o lado diagonal em branco.",
            "Como esta página resolve apenas c, evita a confusão de alternar entre os modos laterais. Se seus valores conhecidos são as duas catetos, esta é a ferramenta focada do teorema de Pitágoras a ser usada."
          ],
          "listTitle": "Exemplos comuns incluem:",
          "listItems": [
            "Encontrar a diagonal de um retângulo, tela, layout de bloco ou sala.",
            "Calculando o comprimento da escada a partir da altura da parede e da distância do solo.",
            "Estimar o comprimento inclinado de uma rampa desde a subida e descida.",
            "Verificando o dever de casa do triângulo retângulo antes de enviar a resposta final."
          ]
        },
        {
          "h2": "Dicas de entrada para melhores resultados",
          "paragraphs": [
            "Insira os comprimentos de ambas as catetos como números positivos. Os decimais são adequados e a calculadora manterá precisão suficiente para tornar o trabalho passo a passo útil.",
            "As duas entradas devem usar a mesma unidade. Se a for medido em pés e b for medido em polegadas, converta uma medida primeiro para que o resultado seja significativo."
          ],
          "listTitle": "Antes de calcular, verifique se:",
          "listItems": [
            "a e b são os lados que tocam o ângulo 90°.",
            "Nenhuma das entradas é zero ou negativa.",
            "Ambos os valores são medidos na mesma unidade.",
            "Você está resolvendo a hipotenusa, não uma cateto perdida."
          ]
        },
        {
          "h2": "Como ler a resposta",
          "paragraphs": [
            "A saída denominada Hipotenusa c é o lado oposto ao ângulo reto. É o lado diagonal no diagrama e deve ser mais longo que ambas as catetos de entrada.",
            "Se o seu resultado parecer menor que a ou b, isso é um sinal de que uma das entradas foi rotulada incorretamente ou que o triângulo não é realmente um triângulo retângulo."
          ],
          "listTitle": "Uma rápida verificação de razoabilidade:",
          "listItems": [
            "c deve ser maior que a.",
            "c deve ser maior que b.",
            "c deve ser menor que + b.",
            "Para triplos comuns como 3-4-5 ou 5-12-13, o resultado deve corresponder ao triplo conhecido."
          ]
        },
        {
          "h2": "Erros Comuns",
          "paragraphs": [
            "A maioria das respostas erradas sobre a hipotenusa vem do uso da fórmula certa nos lados errados. As catetos devem ser os dois lados que formam o ângulo reto; a hipotenusa nunca é uma entrada nesta página.",
            "Outro problema comum é parar em a² + b². Esse valor é c², não c. O passo da raiz quadrada é o que transforma o valor quadrado de volta no comprimento real do lado."
          ],
          "listTitle": "Evite estes erros:",
          "listItems": [
            "Usando a fórmula em um triângulo que não possui um ângulo 90°.",
            "Inserindo o lado diagonal como a ou b.",
            "Esquecendo de tirar a raiz quadrada no final.",
            "Misturar unidades como polegadas e pés no mesmo cálculo."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calculadora do lado do triângulo retângulo"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Calculadora: Cateto ausente por c e a"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Calculadora: Cateto ausente por c e b"
        }
      ],
      "faqs": [
        {
          "question": "Qual é o teorema de Pitágoras?",
          "answer": "O teorema de Pitágoras é uma fórmula que relaciona os três lados de um triângulo retângulo: a² + b² = c². Diz que o quadrado da hipotenusa é igual à soma dos quadrados dos dois catetos. Aplica-se apenas a triângulos retângulos."
        },
        {
          "question": "O que c significa na fórmula?",
          "answer": "Na fórmula c² = a² + b², c é a hipotenusa - o lado mais longo do triângulo retângulo. É o lado diretamente oposto ao ângulo 90°."
        },
        {
          "question": "Posso usar esta calculadora para qualquer triângulo?",
          "answer": "Não. Esta calculadora usa o teorema de Pitágoras, que só funciona para triângulos retângulos. Se o seu triângulo não tiver um ângulo 90°, a fórmula não dará um resultado correto."
        },
        {
          "question": "Como encontro a hipotenusa?",
          "answer": "Para encontrar a hipotenusa, eleve ambos os catetos ao quadrado (a² e b²), some-os e tire a raiz quadrada da soma. A fórmula é c = √(a² + b²). Ou apenas insira seus valores acima e deixe a calculadora fazer isso."
        },
        {
          "question": "O que são a e b em um triângulo retângulo?",
          "answer": "a e b são as duas catetos - os lados que formam o ângulo reto. Eles podem ter qualquer comprimento positivo e não importa qual deles você chama de a ou b. A hipotenusa (c) é sempre o lado restante."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Calculadora: Cateto ausente por c e a",
      "metaTitle": "Calculadora: Cateto ausente por c e a | Right Triangle Solver",
      "metaDescription": "Encontre o cateto b quando a hipotenusa c e o outro cateto a são conhecidos.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Lembre-se: c é sempre a hipotenusa - o lado mais longo, oposto ao ângulo reto. Não é uma cateto. Se você tem duas catetos e precisa da hipotenusa, use a Calculadora do Teorema de Pitágoras.",
      "intro": "Encontre o cateto b quando a hipotenusa c e o outro cateto a são conhecidos.",
      "quickSummary": {
        "h2": "O que esta calculadora de cateto perdida resolve",
        "intro": "Use esta página quando a hipotenusa e a cateto a forem conhecidas, mas a outra cateto estiver faltando. A calculadora reorganiza o teorema de Pitágoras para subtrair o cateto conhecido da hipotenusa antes de calcular a raiz quadrada.",
        "cards": [
          {
            "label": "Valores conhecidos",
            "value": "c = hipotenusa; a = cateto conhecido"
          },
          {
            "label": "Descobertas",
            "value": "b = cateto desconhecido"
          },
          {
            "label": "Fórmula principal",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Verificação obrigatória",
            "value": "Requer c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Diagrama do Triângulo Retângulo: Encontrando a cateto b",
        "intro": "O diagrama marca c e a como os valores que você já conhece. A cateto vertical b é destacada como o lado faltante que esta calculadora resolve.",
        "caption": "Diagrama de triângulo retângulo com hipotenusa conhecida c, cateto conhecida a e cateto desconhecida b.",
        "sides": {
          "a": {
            "label": "a = conhecido",
            "description": "A cateto a é a cateto conhecida ao longo da base do triângulo retângulo.",
            "status": "known"
          },
          "b": {
            "label": "b = encontrar",
            "description": "A cateto b é a cateto desconhecida resolvida subtraindo a^2 de c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = conhecido",
            "description": "A hipotenusa c é o lado mais longo conhecido oposto ao ângulo reto.",
            "status": "known"
          }
        },
        "notes": [
          "c deve ser a hipotenusa, não uma das catetos.",
          "Se c for menor ou igual a a, as entradas não formam um triângulo retângulo válido.",
          "O resultado b usa a mesma unidade que c e a."
        ]
      },
      "calculator": {
        "outputLabel": "b = cateto desconhecido",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenusa",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = cateto conhecido",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Fórmula b da cateto faltante",
        "paragraphs": [
          "A fórmula para encontrar a cateto b é derivada do teorema de Pitágoras (a² + b² = c²). A reorganização para b fornece a fórmula abaixo.",
          "Onde c é a hipotenusa (lado mais longo do triângulo retângulo), a é o cateto conhecido e b é o cateto faltante que você está resolvendo. Observe a subtração: você subtrai o quadrado do cateto conhecido do quadrado da hipotenusa e depois extrai a raiz quadrada."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Como encontrar a cateto b de c e a",
        "steps": [
          "Confirme que c é a hipotenusa e a é uma cateto. A hipotenusa é sempre o lado mais longo.",
          "Insira a hipotenusa c no primeiro campo de entrada.",
          "Insira o trecho conhecido a no segundo campo de entrada.",
          "Clique em Calcular para encontrar a cateto que falta.",
          "Leia o resultado do b, junto com a solução passo a passo completa."
        ]
      },
      "example": {
        "h2": "Exemplo: Encontre a cateto b",
        "intro": "Dado: c = 13, a = 5. O cateto que falta de um triângulo retângulo com hipotenusa 13 e cateto 5 é 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Verificação importante antes de calcular",
          "paragraphs": [
            "Antes de usar esta fórmula, certifique-se de que c seja maior que a. A hipotenusa é sempre o lado mais longo de um triângulo retângulo. Se c for igual a a, você obterá b = 0, o que significa que não existe triângulo.",
            "Se c for menor que a, a expressão sob a raiz quadrada torna-se negativa. Isso significa que os dois valores de entrada não podem descrever um triângulo retângulo real com c como hipotenusa."
          ],
          "listTitle": "Use estas verificações primeiro:",
          "listItems": [
            "c é oposto ao ângulo 90°.",
            "c é maior que a.",
            "Ambos os valores são positivos.",
            "c e a usam a mesma unidade."
          ]
        },
        {
          "h2": "Onde esta calculadora é útil",
          "paragraphs": [
            "Esta calculadora é útil quando uma medida diagonal ou inclinada é conhecida, um lado perpendicular é conhecido e o outro lado perpendicular está faltando. É a ferramenta focada para o caso c-e-a, portanto, todas as explicações na página apontam para encontrar b.",
            "Também pode ajudar a verificar as medições. Se um valor medido para b não corresponder ao resultado da calculadora, o triângulo pode não estar correto, a hipotenusa pode estar rotulada incorretamente ou uma medição pode usar uma unidade diferente."
          ],
          "listTitle": "Exemplos comuns incluem:",
          "listItems": [
            "Determinar a altura da parede quando o comprimento da escada c e a distância ao solo a são conhecidos.",
            "Encontrar a elevação vertical de uma encosta quando o comprimento da encosta e o percurso horizontal são conhecidos.",
            "Verificando um problema de dever de casa de triângulo retângulo que fornece c e a.",
            "Confirmação de medidas de layout para estrutura, paisagismo, rampas ou plantas baixas."
          ]
        },
        {
          "h2": "Como ler a resposta",
          "paragraphs": [
            "A saída rotulada cateto ausente b é o comprimento da outra cateto que forma o ângulo reto com a. Não é a hipotenusa e deve ser menor que c.",
            "Se o b calculado for extremamente pequeno, sua cateto conhecida a está muito próxima da hipotenusa c. Isso pode ser válido, mas vale a pena conferir o diagrama e as unidades antes de utilizar o valor."
          ],
          "listTitle": "Um resultado válido deve satisfazer:",
          "listItems": [
            "b é maior que zero.",
            "b é menor que c.",
            "a² + b² é aproximadamente igual a c².",
            "A unidade de saída corresponde à unidade de entrada."
          ]
        },
        {
          "h2": "Erros Comuns",
          "paragraphs": [
            "O erro mais comum é tratar o c como uma cateto. Nesta calculadora, c deve ser a hipotenusa, que é o lado mais longo e o lado oposto ao ângulo reto.",
            "Outro erro frequente é somar os quadrados em vez de subtrair. A adição encontra uma hipotenusa; a subtração encontra uma cateto faltando na hipotenusa."
          ],
          "listTitle": "Evite estes erros:",
          "listItems": [
            "Colocando a cateto conhecida no campo da hipotenusa.",
            "Usando c² + a² em vez de c² - a².",
            "Inserindo um valor maior ou igual a c.",
            "Parando em b² em vez de extrair a raiz quadrada.",
            "Unidades de mistura como metros e centímetros."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calculadora do lado do triângulo retângulo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calculadora: Teorema de Pitágoras"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Calculadora: Cateto ausente por c e b"
        }
      ],
      "faqs": [
        {
          "question": "O que c significa nesta calculadora?",
          "answer": "c é a hipotenusa do triângulo retângulo - o lado mais longo, localizado oposto ao ângulo 90°. Não é uma cateto. Você insere c como um dos dois valores conhecidos nesta calculadora."
        },
        {
          "question": "O que significa nesta calculadora?",
          "answer": "a é um dos dois catetos do triângulo retângulo. É um dos lados que forma o ângulo reto. Nesta calculadora, a é a cateto que você já conhece."
        },
        {
          "question": "O que esta calculadora encontra?",
          "answer": "Esta calculadora encontra a cateto faltante b. Dada a hipotenusa c e a cateto a, ele calcula b = √(c² − a²) e mostra a solução passo a passo."
        },
        {
          "question": "c pode ser menor que a?",
          "answer": "Não. Num triângulo retângulo, a hipotenusa é sempre o lado mais longo. Se c for menor que a, os valores não formam um triângulo retângulo válido. Verifique qual medida é a hipotenusa antes de calcular."
        },
        {
          "question": "Como encontro b de c e a?",
          "answer": "Eleve ao quadrado a hipotenusa (c²), eleve ao quadrado a cateto conhecida (a²), subtraia a² de c² e calcule a raiz quadrada. A fórmula é b = √(c² − a²). Ou insira seus valores nesta calculadora para obter uma resposta instantânea."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Calculadora: Cateto ausente por c e b",
      "metaTitle": "Calculadora: Cateto ausente por c e b | Right Triangle Solver",
      "metaDescription": "Encontre o cateto a quando a hipotenusa c e o cateto b são conhecidos.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Lembre-se: c é a hipotenusa, não uma cateto. É o lado mais longo do triângulo e fica oposto ao ângulo 90°. Se você tem as duas catetos e precisa da hipotenusa, use a Calculadora do Teorema de Pitágoras.",
      "intro": "Encontre o cateto a quando a hipotenusa c e o cateto b são conhecidos.",
      "quickSummary": {
        "h2": "O que esta calculadora de cateto perdida resolve",
        "intro": "Use esta página quando você conhece a hipotenusa e a cateto b, mas precisa da cateto a. Ele mantém o lado conhecido b separado do lado desconhecido a para que a fórmula e o resultado correspondam aos rótulos do seu triângulo.",
        "cards": [
          {
            "label": "Valores conhecidos",
            "value": "c = hipotenusa; b = cateto conhecido"
          },
          {
            "label": "Descobertas",
            "value": "a = cateto desconhecido"
          },
          {
            "label": "Fórmula principal",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Verificação obrigatória",
            "value": "Requer c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Diagrama do Triângulo Retângulo: Encontrando a cateto a",
        "intro": "O diagrama mostra c como a hipotenusa conhecida e b como a cateto conhecida. A cateto base a é destacada como o valor ausente retornado pela calculadora.",
        "caption": "Diagrama de triângulo retângulo com hipotenusa conhecida c, cateto conhecida b e cateto desconhecida a.",
        "sides": {
          "a": {
            "label": "a = encontrar",
            "description": "A cateto a é a cateto base desconhecida resolvida a partir de c e b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = conhecido",
            "description": "A cateto b é a cateto conhecida que forma o ângulo reto com a.",
            "status": "known"
          },
          "c": {
            "label": "c = conhecido",
            "description": "A hipotenusa c é o lado mais longo conhecido do triângulo retângulo.",
            "status": "known"
          }
        },
        "notes": [
          "A hipotenusa c deve ser o lado mais longo do par de entrada.",
          "Se c for menor ou igual a b, verifique novamente qual valor é a hipotenusa.",
          "O a calculado tem a mesma unidade dos valores inseridos."
        ]
      },
      "calculator": {
        "outputLabel": "a = cateto desconhecido",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenusa",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = cateto conhecido",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Fórmula a de cateto faltando",
        "paragraphs": [
          "Partindo do teorema de Pitágoras (a² + b² = c²), resolva a para obter a fórmula abaixo.",
          "Onde c é a hipotenusa (o lado mais longo, oposto ao ângulo reto), b é o cateto conhecido e a é o cateto faltante que você deseja encontrar. A operação principal é a subtração: eleve ao quadrado a hipotenusa, subtraia o quadrado da cateto conhecida e, em seguida, calcule a raiz quadrada do que sobrou."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Como encontrar a cateto a de c e b",
        "steps": [
          "Certifique-se de ter identificado corretamente a hipotenusa (c) e a cateto conhecida (b). A hipotenusa está sempre oposta ao ângulo 90°.",
          "Insira a hipotenusa c no primeiro campo de entrada.",
          "Insira o trecho conhecido b no segundo campo de entrada.",
          "Clique em Calcular para encontrar a cateto a.",
          "Revise o resultado do a e o passo a passo mostrado abaixo."
        ]
      },
      "example": {
        "h2": "Exemplo: Encontre a cateto a",
        "intro": "Dado: c = 10, b = 6. O cateto que falta de um triângulo retângulo com hipotenusa 10 e cateto 6 é 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Verificação importante antes de calcular",
          "paragraphs": [
            "A hipotenusa c deve ser maior que b para que o cálculo funcione. Em todo triângulo retângulo, a hipotenusa é o lado mais longo. Se c for igual a b, a fórmula dá a = 0, o que significa que nenhum triângulo pode ser formado.",
            "Se c for menor que b, a expressão sob a raiz quadrada se tornará negativa e não haverá comprimento lateral real para a. Nesse caso, verifique novamente qual lado é oposto ao ângulo 90°."
          ],
          "listTitle": "Use estas verificações primeiro:",
          "listItems": [
            "c é o lado oposto ao ângulo reto.",
            "c é maior que b.",
            "Ambas as entradas são números positivos.",
            "c e b usam a mesma unidade de medida."
          ]
        },
        {
          "h2": "Onde esta calculadora é útil",
          "paragraphs": [
            "Esta calculadora é a ferramenta certa quando você conhece a hipotenusa e a cateto b e precisa encontrar a cateto a. É especialmente útil quando seu diagrama rotula a cateto conhecida como b e a base ou altura desconhecida como a.",
            "A página também funciona como uma verificação de medição. Se o lado calculado a for muito diferente do lado medido a, o triângulo pode não incluir um ângulo 90° verdadeiro ou um dos valores conhecidos pode ter sido copiado incorretamente."
          ],
          "listTitle": "Exemplos comuns incluem:",
          "listItems": [
            "Encontrar uma distância base quando o comprimento do declive c e a altura b são conhecidos.",
            "Encontrar uma altura vertical quando a hipotenusa e a distância horizontal são conhecidas.",
            "Resolvendo problemas de geometria que dão c e b e pedem a.",
            "Verificando medidas de construção, mapeamento ou planta baixa que formam um triângulo retângulo."
          ]
        },
        {
          "h2": "Como ler a resposta",
          "paragraphs": [
            "A saída rotulada cateto ausente a é o outro lado que forma o ângulo reto com b. Deve ser menor que a hipotenusa c e maior que zero.",
            "Se o resultado for próximo de c, a cateto conhecida b é relativamente pequena. Se o resultado for próximo de zero, b será quase tão longo quanto c. Ambas podem acontecer, mas os rótulos de entrada devem ser verificados antes de usar a resposta."
          ],
          "listTitle": "Um resultado válido deve satisfazer:",
          "listItems": [
            "a é maior que zero.",
            "a é menor que c.",
            "a² + b² é aproximadamente igual a c².",
            "A unidade de saída corresponde à unidade usada para c e b."
          ]
        },
        {
          "h2": "Erros Comuns",
          "paragraphs": [
            "O maior risco é trocar a hipotenusa por uma cateto. Esta calculadora assume que c já é o lado mais longo, portanto, um valor c rotulado incorretamente tornará o resultado incorreto.",
            "Um segundo problema comum é usar a fórmula da hipotenusa por engano. Para encontrar uma cateto que falta, você subtrai o quadrado da cateto conhecido do quadrado da hipotenusa e, em seguida, extrai a raiz quadrada."
          ],
          "listTitle": "Evite estes erros:",
          "listItems": [
            "Entrando na cateto b como a hipotenusa c.",
            "Usando c² + b² em vez de c² - b².",
            "Inserindo b maior ou igual a c.",
            "Esquecendo a raiz quadrada após a subtração.",
            "Combinar medidas que usam unidades diferentes."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Calculadora do lado do triângulo retângulo"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Calculadora: Teorema de Pitágoras"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Calculadora: Cateto ausente por c e a"
        }
      ],
      "faqs": [
        {
          "question": "O que c significa nesta calculadora?",
          "answer": "c é a hipotenusa - o lado mais longo do triângulo retângulo, oposto ao ângulo 90°. Nesta calculadora, você insere c como um dos seus dois valores conhecidos."
        },
        {
          "question": "O que b significa nesta calculadora?",
          "answer": "b é um dos dois catetos do triângulo retângulo. É um lado que forma o ângulo reto. Aqui, b é a cateto que você já conhece, e a calculadora a utiliza junto com c para encontrar a cateto que falta a."
        },
        {
          "question": "O que esta calculadora encontra?",
          "answer": "Ele encontra a cateto perdida a. Você fornece a hipotenusa (c) e uma cateto (b), e a calculadora aplica a fórmula a = √(c² − b²) para fornecer a cateto desconhecida com uma solução passo a passo."
        },
        {
          "question": "c pode ser menor que b?",
          "answer": "Não. A hipotenusa é sempre o lado mais longo de um triângulo retângulo. Se o seu valor para c for menor que b, as entradas não representam um triângulo retângulo válido. Verifique novamente qual medida corresponde à hipotenusa."
        },
        {
          "question": "Como encontro um de c e b?",
          "answer": "Eleve ao quadrado a hipotenusa (c²), eleve ao quadrado a cateto conhecida (b²), subtraia b² de c² e obtenha a raiz quadrada do resultado. A fórmula é a = √(c² − b²). Você também pode simplesmente inserir seus valores nesta calculadora para obter a resposta automaticamente."
        }
      ]
    }
  },
  "bn": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "ক্যালকুলেটর: পিথাগোরাস উপপাদ্য",
      "metaTitle": "ক্যালকুলেটর: পিথাগোরাস উপপাদ্য | Right Triangle Solver",
      "metaDescription": "উভয় বাহুর দৈর্ঘ্য জানা থাকলে অতিভুজ নির্ণয় করুন। এটি প্রতিটি সমকোণী ত্রিভুজের প্রাথমিক সূত্র।",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "আপনি হোমওয়ার্ক সমস্যার সমাধান করছেন বা বাস্তব জীবনে একটি তির্যক পরিমাপ করছেন না কেন, এই টুলটি আপনাকে সেকেন্ডের মধ্যে উত্তর দেয় - ধাপে ধাপে দেখানো সম্পূর্ণ সমাধান সহ।",
      "intro": "উভয় বাহুর দৈর্ঘ্য জানা থাকলে অতিভুজ নির্ণয় করুন। এটি প্রতিটি সমকোণী ত্রিভুজের প্রাথমিক সূত্র।",
      "quickSummary": {
        "h2": "এই পিথাগোরিয়ান ক্যালকুলেটর কি সমাধান করে",
        "intro": "এই পৃষ্ঠাটি ব্যবহার করুন যখন 90° কোণে মিলিত দুটি পক্ষ পরিচিত হয় এবং তির্যক দিকটি অনুপস্থিত থাকে। ক্যালকুলেটর ক্লাসিক হাইপোটেনাস ক্ষেত্রে ফোকাস করে, তাই ইনপুটগুলি সহজ থাকে এবং ফলাফল পরীক্ষা করা সহজ।",
        "cards": [
          {
            "label": "পরিচিত মান",
            "value": "a = কোণ A এর বিপরীত বাহু; b = কোণ B এর বিপরীত বাহু"
          },
          {
            "label": "খুঁজে পায়",
            "value": "c = অতিভুজ"
          },
          {
            "label": "প্রধান সূত্র",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "জন্য সেরা",
            "value": "তির্যক, মই, র‌্যাম্প, পর্দা এবং জ্যামিতি হোমওয়ার্ক"
          }
        ]
      },
      "diagram": {
        "h2": "সমকোণী ত্রিভুজ ডায়াগ্রাম: হাইপোটেনাস সন্ধান করা",
        "intro": "চিত্রটি টুল দ্বারা ব্যবহৃত সঠিক পার্শ্ব সম্পর্ক দেখায়। দুটি পা হল পরিচিত ইনপুট মান, এবং তির্যক দিকে c হল কর্ণ যা ক্যালকুলেটর খুঁজে পায়।",
        "caption": "পরিচিত পা a এবং b এবং অজানা কর্ণ c সহ সমকোণী ত্রিভুজ চিত্র।",
        "sides": {
          "a": {
            "label": "a = পরিচিত",
            "description": "লেগ a হল দুটি পক্ষের একটি যা সমকোণ গঠন করে।",
            "status": "known"
          },
          "b": {
            "label": "b = পরিচিত",
            "description": "লেগ b হল অন্য দিক যা সমকোণ গঠন করে।",
            "status": "known"
          },
          "c": {
            "label": "c = খুঁজুন",
            "description": "হাইপোটেনাস c হল দীর্ঘতম দিক এবং 90° কোণের বিপরীতে বসে।",
            "status": "unknown"
          }
        },
        "notes": [
          "a এবং b অদলবদল করা যেতে পারে; কর্ণের ফলাফল একই হবে।",
          "গণনা করার আগে উভয় পায়ের জন্য একই ইউনিট ব্যবহার করুন।",
          "একটি বৈধ সমকোণী ত্রিভুজের উভয় পায়ের চেয়ে c উত্তরটি সর্বদা বড় হবে।"
        ]
      },
      "calculator": {
        "outputLabel": "c = অতিভুজ",
        "fields": [
          {
            "key": "a",
            "label": "a = কোণ A এর বিপরীত বাহু",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = কোণ B এর বিপরীত বাহু",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "পিথাগোরিয়ান থিওরেম সূত্র",
        "paragraphs": [
          "পিথাগোরিয়ান উপপাদ্য বলে যে একটি সমকোণী ত্রিভুজে, কর্ণের বর্গ দুই পায়ের বর্গক্ষেত্রের সমষ্টির সমান। কর্ণের সমাধান করতে, উভয় বাহুর বর্গমূল নিন।",
          "এই সূত্রে, a এবং b হল সমকোণ ত্রিভুজের দুটি পা - যে বাহুগুলি সমকোণ গঠন করে। c হল কর্ণ, দীর্ঘতম দিক, সমকোণের বিপরীত। এই সূত্রটি শুধুমাত্র সমকোণী ত্রিভুজের জন্য কাজ করে।"
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "কিভাবে পিথাগোরিয়ান থিওরেম ক্যালকুলেটর ব্যবহার করবেন",
        "steps": [
          "আপনার ডান ত্রিভুজের দুটি পা চিহ্নিত করুন। এই বাহুগুলিই সমকোণ গঠন করে।",
          "প্রথম ইনপুট ক্ষেত্রে লেগ a লিখুন।",
          "দ্বিতীয় ইনপুট ক্ষেত্রে লেগ b লিখুন।",
          "কর্ণ খুঁজে বের করতে গণনা ক্লিক করুন।",
          "ধাপে ধাপে সমাধান সহ c-এর ফলাফল পড়ুন।"
        ]
      },
      "example": {
        "h2": "উদাহরণ: হাইপোটেনাস খুঁজুন",
        "intro": "প্রদত্ত: a = 6, b = 8। পা 6 এবং 8 বিশিষ্ট একটি সমকোণী ত্রিভুজের কর্ণ হল 10।",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "যেখানে এই ক্যালকুলেটর দরকারী",
          "paragraphs": [
            "যখনই দুটি লম্ব দূরত্ব একটি তির্যক দূরত্বে একত্রিত হয় তখন কর্ণ ক্যালকুলেটরটি কার্যকর। এটি বিশেষত সহায়ক হয় যখন একটি অঙ্কন, ফ্লোর প্ল্যান বা বাড়ির কাজের সমস্যা অনুভূমিক এবং উল্লম্ব দিকগুলি দেয় কিন্তু তির্যক দিকটি ফাঁকা রাখে।",
            "কারণ এই পৃষ্ঠাটি শুধুমাত্র c-এর জন্য সমাধান করে, এটি পার্শ্ব মোডগুলির মধ্যে স্যুইচ করার বিভ্রান্তি এড়ায়। আপনার পরিচিত মান দুটি পা হলে, এটি ব্যবহার করার জন্য ফোকাসড পিথাগোরিয়ান উপপাদ্য টুল।"
          ],
          "listTitle": "সাধারণ উদাহরণ অন্তর্ভুক্ত:",
          "listItems": [
            "একটি আয়তক্ষেত্র, পর্দা, টাইল বিন্যাস, বা ঘরের তির্যক সন্ধান করা।",
            "দেয়ালের উচ্চতা এবং স্থল দূরত্ব থেকে একটি মই দৈর্ঘ্য গণনা করা হচ্ছে।",
            "উত্থান এবং দৌড় থেকে একটি র‌্যাম্পের ঢালু দৈর্ঘ্য অনুমান করা।",
            "চূড়ান্ত উত্তর জমা দেওয়ার আগে সমকোণী ত্রিভুজ হোমওয়ার্ক পরীক্ষা করা হচ্ছে।"
          ]
        },
        {
          "h2": "ভালো ফলাফলের জন্য ইনপুট টিপস",
          "paragraphs": [
            "উভয় পায়ের দৈর্ঘ্য ইতিবাচক সংখ্যা হিসাবে লিখুন। দশমিক সূক্ষ্ম, এবং ক্যালকুলেটরটি ধাপে ধাপে কাজটিকে উপযোগী করার জন্য যথেষ্ট নির্ভুলতা রাখবে।",
            "দুটি ইনপুট একই ইউনিট ব্যবহার করতে হবে। a যদি ফুটে পরিমাপ করা হয় এবং b ইঞ্চিতে পরিমাপ করা হয়, তাহলে প্রথমে একটি পরিমাপ রূপান্তর করুন যাতে ফলাফলটি অর্থবহ হয়।"
          ],
          "listTitle": "আপনি গণনা করার আগে, এটি পরীক্ষা করুন:",
          "listItems": [
            "a এবং b হল দিক যেগুলি 90° কোণকে স্পর্শ করে।",
            "ইনপুট শূন্য বা ঋণাত্মক নয়।",
            "উভয় মান একই ইউনিটে পরিমাপ করা হয়।",
            "আপনি কর্ণের জন্য সমাধান করছেন, একটি অনুপস্থিত পা নয়।"
          ]
        },
        {
          "h2": "কিভাবে উত্তর পড়ুন",
          "paragraphs": [
            "Hypotenuse c লেবেলযুক্ত আউটপুটটি সমকোণের বিপরীত দিক। এটি ডায়াগ্রামের তির্যক দিক এবং উভয় ইনপুট পায়ের চেয়ে লম্বা হওয়া উচিত।",
            "যদি আপনার ফলাফল a বা b এর থেকে ছোট দেখায়, তাহলে এটি একটি চিহ্ন যে একটি ইনপুট ভুল লেবেল করা হয়েছে বা ত্রিভুজটি আসলে একটি সমকোণী ত্রিভুজ নয়৷"
          ],
          "listTitle": "একটি দ্রুত যুক্তিসঙ্গততা পরীক্ষা:",
          "listItems": [
            "c a এর থেকে বড় হওয়া উচিত।",
            "c b এর থেকে বড় হওয়া উচিত।",
            "c একটি + b এর চেয়ে কম হওয়া উচিত।",
            "3-4-5 বা 5-12-13 এর মতো সাধারণ ট্রিপলের জন্য, ফলাফলটি পরিচিত ট্রিপলের সাথে মেলে।"
          ]
        },
        {
          "h2": "সাধারণ ভুল",
          "paragraphs": [
            "বেশিরভাগ ভুল কর্ণের উত্তর আসে ভুল দিকের সঠিক সূত্র ব্যবহার করে। পা দুটি দিক হতে হবে যা সঠিক কোণ তৈরি করে; কর্ণ এই পৃষ্ঠায় একটি ইনপুট না.",
            "আরেকটি সাধারণ সমস্যা a² + b² এ থামছে। সেই মান হল c², c নয়৷ বর্গমূলের ধাপ হল বর্গক্ষেত্রের মানটিকে প্রকৃত পাশের দৈর্ঘ্যে ফিরিয়ে দেয়।"
          ],
          "listTitle": "এই ভুলগুলি এড়িয়ে চলুন:",
          "listItems": [
            "একটি 90° কোণ নেই এমন একটি ত্রিভুজের উপর সূত্র ব্যবহার করা।",
            "a বা b হিসাবে তির্যক দিকে প্রবেশ করা।",
            "শেষে বর্গমূল নিতে ভুলে যাওয়া।",
            "একই হিসাবের মধ্যে ইঞ্চি এবং ফুটের মতো একক মেশানো।"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "ডান ত্রিভুজ পার্শ্ব ক্যালকুলেটর"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "ক্যালকুলেটর: c এবং a থেকে অন্য বাহু নির্ণয়"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "ক্যালকুলেটর: c এবং b থেকে অন্য বাহু নির্ণয়"
        }
      ],
      "faqs": [
        {
          "question": "পিথাগোরিয়ান উপপাদ্য কি?",
          "answer": "পিথাগোরিয়ান উপপাদ্য হল একটি সূত্র যা একটি সমকোণী ত্রিভুজের তিনটি বাহুকে সম্পর্কযুক্ত করে: a² + b² = c²। এটা বলে যে কর্ণের বর্গ দুই পায়ের বর্গক্ষেত্রের সমষ্টির সমান। এটি শুধুমাত্র সমকোণী ত্রিভুজের ক্ষেত্রে প্রযোজ্য।"
        },
        {
          "question": "c সূত্রে কী বোঝায়?",
          "answer": "c² = a² + b² সূত্রে, c হল কর্ণ - সমকোণী ত্রিভুজের দীর্ঘতম বাহু। এটি 90° কোণ থেকে সরাসরি জুড়ে রয়েছে।"
        },
        {
          "question": "আমি কি কোন ত্রিভুজের জন্য এই ক্যালকুলেটর ব্যবহার করতে পারি?",
          "answer": "না। এই ক্যালকুলেটরটি পিথাগোরিয়ান উপপাদ্য ব্যবহার করে, যা শুধুমাত্র সমকোণী ত্রিভুজের জন্য কাজ করে। যদি আপনার ত্রিভুজের একটি 90° কোণ না থাকে, তাহলে সূত্রটি সঠিক ফলাফল দেবে না।"
        },
        {
          "question": "আমি কিভাবে কর্ণ খুঁজে পেতে পারি?",
          "answer": "কর্ণ খুঁজে বের করতে, উভয় পাকে বর্গ করুন (a² এবং b²), তাদের একসাথে যোগ করুন এবং যোগফলের বর্গমূল নিন। সূত্রটি হল c = √(a² + b²)। অথবা উপরে আপনার মানগুলি লিখুন এবং ক্যালকুলেটরকে এটি করতে দিন।"
        },
        {
          "question": "একটি সমকোণী ত্রিভুজে a এবং b কি?",
          "answer": "a and b are the two legs - the sides that form the right angle. এগুলি যে কোনও ইতিবাচক দৈর্ঘ্য হতে পারে, এবং আপনি কোনটিকে a বা b বলবেন তাতে কিছু যায় আসে না। কর্ণ (c) সর্বদা অবশিষ্ট দিক।"
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "ক্যালকুলেটর: c এবং a থেকে অন্য বাহু নির্ণয়",
      "metaTitle": "ক্যালকুলেটর: c এবং a থেকে অন্য বাহু নির্ণয় | Right Triangle Solver",
      "metaDescription": "অতিভুজ c এবং অন্য একটি বাহু a জানা থাকলে বাহু b নির্ণয় করুন।",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "মনে রাখবেন: c সর্বদা কর্ণ হয় - দীর্ঘতম দিক, সমকোণের বিপরীত। এটি একটি পা নয়। আপনার যদি দুটি পা থাকে এবং এর পরিবর্তে কর্ণের প্রয়োজন হয়, তাহলে পিথাগোরিয়ান থিওরেম ক্যালকুলেটর ব্যবহার করুন।",
      "intro": "অতিভুজ c এবং অন্য একটি বাহু a জানা থাকলে বাহু b নির্ণয় করুন।",
      "quickSummary": {
        "h2": "এই অনুপস্থিত লেগ ক্যালকুলেটর কি সমাধান করে",
        "intro": "এই পৃষ্ঠাটি ব্যবহার করুন যখন কর্ণ এবং লেগ a পরিচিত, কিন্তু অন্য পা অনুপস্থিত। ক্যালকুলেটর বর্গমূল নেওয়ার আগে কর্ণ থেকে পরিচিত পা বিয়োগ করার জন্য পিথাগোরিয়ান উপপাদ্যটিকে পুনর্বিন্যাস করে।",
        "cards": [
          {
            "label": "পরিচিত মান",
            "value": "c = অতিভুজ; a = পরিচিত বাহু"
          },
          {
            "label": "খুঁজে পায়",
            "value": "b = অপরিচিত বাহু"
          },
          {
            "label": "প্রধান সূত্র",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "প্রয়োজনীয় চেক",
            "value": "c > a হওয়া প্রয়োজন।"
          }
        ]
      },
      "diagram": {
        "h2": "সমকোণী ত্রিভুজ চিত্র: লেগ b খোঁজা",
        "intro": "ডায়াগ্রামটি c এবং a কে আপনি ইতিমধ্যেই জানেন এমন মান হিসাবে চিহ্নিত করে৷ উল্লম্ব লেগ b অনুপস্থিত দিক হিসাবে হাইলাইট করা হয়েছে যা এই ক্যালকুলেটর সমাধান করে।",
        "caption": "পরিচিত কর্ণ c, পরিচিত লেগ a, এবং অজানা লেগ b সহ সমকোণী ত্রিভুজ চিত্র।",
        "sides": {
          "a": {
            "label": "a = পরিচিত",
            "description": "লেগ a সমকোণী ত্রিভুজের ভিত্তি বরাবর পরিচিত পা।",
            "status": "known"
          },
          "b": {
            "label": "b = খুঁজুন",
            "description": "লেগ b হল c^2 থেকে a^2 বিয়োগ করে সমাধান করা অজানা লেগ।",
            "status": "unknown"
          },
          "c": {
            "label": "c = পরিচিত",
            "description": "হাইপোটেনাস c সমকোণের বিপরীতে পরিচিত দীর্ঘতম বাহু।",
            "status": "known"
          }
        },
        "notes": [
          "c অবশ্যই কর্ণ হতে হবে, একটি পা নয়।",
          "যদি c a এর থেকে কম বা সমান হয়, তাহলে ইনপুটগুলি একটি বৈধ সমকোণী ত্রিভুজ গঠন করে না।",
          "ফলাফল b c এবং a হিসাবে একই ইউনিট ব্যবহার করে।"
        ]
      },
      "calculator": {
        "outputLabel": "b = অপরিচিত বাহু",
        "fields": [
          {
            "key": "c",
            "label": "c = অতিভুজ",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = পরিচিত বাহু",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "অনুপস্থিত লেগ b সূত্র",
        "paragraphs": [
          "লেগ b খুঁজে বের করার সূত্রটি পাইথাগোরিয়ান উপপাদ্য (a² + b² = c²) থেকে নেওয়া হয়েছে। b এর জন্য পুনর্বিন্যাস নীচের সূত্র দেয়।",
          "যেখানে c হল কর্ণ (সমস্যা ত্রিভুজের দীর্ঘতম দিক), a হল পরিচিত পা, এবং b হল অনুপস্থিত পা যার জন্য আপনি সমাধান করছেন৷ বিয়োগ লক্ষ্য করুন: আপনি কর্ণের বর্গ থেকে পরিচিত পায়ের বর্গ বিয়োগ করুন, তারপর বর্গমূল নিন।"
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "c এবং a থেকে লেগ b কীভাবে খুঁজে পাবেন",
        "steps": [
          "নিশ্চিত করুন যে c হল কর্ণ এবং a হল একটি পা। কর্ণ সর্বদা দীর্ঘতম দিক।",
          "প্রথম ইনপুট ক্ষেত্রে c কর্ণ লিখুন।",
          "দ্বিতীয় ইনপুট ক্ষেত্রে পরিচিত লেগ a লিখুন।",
          "অনুপস্থিত পা খুঁজে পেতে গণনা ক্লিক করুন.",
          "সম্পূর্ণ ধাপে ধাপে সমাধান সহ b-এর ফলাফল পড়ুন।"
        ]
      },
      "example": {
        "h2": "উদাহরণ: লেগ b খুঁজুন",
        "intro": "দেওয়া হয়েছে: c = 13, a = 5। কর্ণ 13 এবং লেগ 5 সহ একটি সমকোণী ত্রিভুজের অনুপস্থিত পা হল 12।",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "গণনা করার আগে গুরুত্বপূর্ণ চেক",
          "paragraphs": [
            "আপনি এই সূত্রটি ব্যবহার করার আগে, নিশ্চিত করুন যে c a এর থেকে বড়। কর্ণ সর্বদা একটি সমকোণী ত্রিভুজের দীর্ঘতম বাহু। যদি c a সমান হয়, তাহলে আপনি b = 0 পাবেন, যার মানে কোনো ত্রিভুজ নেই।",
            "c a-এর থেকে কম হলে, বর্গমূলের নিচের অভিব্যক্তিটি ঋণাত্মক হয়ে যায়। তার মানে দুটি ইনপুট মান c সহ একটি বাস্তব সমকোণী ত্রিভুজকে কর্ণ হিসাবে বর্ণনা করতে পারে না।"
          ],
          "listTitle": "প্রথমে এই চেকগুলি ব্যবহার করুন:",
          "listItems": [
            "c হল 90° কোণের বিপরীত।",
            "c a এর চেয়ে বড়।",
            "উভয় মানই ইতিবাচক।",
            "c এবং a একই ইউনিট ব্যবহার করে।"
          ]
        },
        {
          "h2": "যেখানে এই ক্যালকুলেটর দরকারী",
          "paragraphs": [
            "এই ক্যালকুলেটরটি উপযোগী হয় যখন একটি তির্যক বা ঢালু পরিমাপ জানা যায়, একটি লম্ব দিকটি জানা যায় এবং অন্যটি লম্ব দিকটি অনুপস্থিত থাকে। এটি c-এন্ড-এ কেসের জন্য ফোকাসড টুল, তাই পৃষ্ঠার প্রতিটি ব্যাখ্যা b খোঁজার দিকে নির্দেশ করে।",
            "এটি পরিমাপ যাচাই করতেও সাহায্য করতে পারে। যদি b-এর জন্য একটি পরিমাপ করা মান ক্যালকুলেটরের ফলাফলের সাথে মেলে না, তাহলে ত্রিভুজটি সঠিক নাও হতে পারে, কর্ণটি ভুল লেবেলযুক্ত হতে পারে, বা একটি পরিমাপ একটি ভিন্ন একক ব্যবহার করতে পারে।"
          ],
          "listTitle": "সাধারণ উদাহরণ অন্তর্ভুক্ত:",
          "listItems": [
            "মই দৈর্ঘ্য c এবং স্থল দূরত্ব a জানা গেলে দেয়ালের উচ্চতা খোঁজা।",
            "যখন ঢালের দৈর্ঘ্য এবং অনুভূমিক দৌড় জানা যায় তখন একটি ঢালের উল্লম্ব উত্থান খুঁজে বের করা।",
            "একটি সমকোণী ত্রিভুজ হোমওয়ার্ক সমস্যা পরীক্ষা করা যা c এবং a দেয়।",
            "ফ্রেমিং, ল্যান্ডস্কেপিং, র‌্যাম্প বা মেঝে পরিকল্পনার জন্য লেআউট পরিমাপ নিশ্চিত করা।"
          ]
        },
        {
          "h2": "কিভাবে উত্তর পড়ুন",
          "paragraphs": [
            "অনুপস্থিত লেগ b লেবেলযুক্ত আউটপুট হল অন্য পায়ের দৈর্ঘ্য যা a এর সাথে সমকোণ তৈরি করে। এটি কর্ণ নয় এবং c এর চেয়ে ছোট হওয়া উচিত।",
            "যদি গণনা করা b অত্যন্ত ছোট হয়, তাহলে আপনার পরিচিত লেগ a হাইপোটেনাস c এর খুব কাছাকাছি। এটি বৈধ হতে পারে, তবে মানটি ব্যবহার করার আগে এটি ডায়াগ্রাম এবং ইউনিটগুলি পরীক্ষা করা মূল্যবান।"
          ],
          "listTitle": "একটি বৈধ ফলাফল সন্তুষ্ট করা উচিত:",
          "listItems": [
            "b শূন্যের চেয়ে বড়।",
            "b c থেকে কম।",
            "a² + b² প্রায় c² এর সমান।",
            "আউটপুট ইউনিট ইনপুট ইউনিটের সাথে মেলে।"
          ]
        },
        {
          "h2": "সাধারণ ভুল",
          "paragraphs": [
            "সবচেয়ে সাধারণ ত্রুটি হল c কে একটি পা হিসাবে বিবেচনা করা। এই ক্যালকুলেটরে, c কে কর্ণ হতে হবে, যেটি সবচেয়ে লম্বা বাহু এবং সমকোণের বিপরীত দিক।",
            "আরেকটি ঘন ঘন ভুল হল বিয়োগের পরিবর্তে বর্গ যোগ করা। সংযোজন একটি কর্ণ খুঁজে পায়; বিয়োগ কর্ণের থেকে একটি অনুপস্থিত পা খুঁজে পায়।"
          ],
          "listTitle": "এই ভুলগুলি এড়িয়ে চলুন:",
          "listItems": [
            "কর্ণক্ষেত্র ক্ষেত্রে পরিচিত পা নির্বাণ।",
            "c² - a² এর পরিবর্তে c² + a² ব্যবহার করা হচ্ছে।",
            "c এর থেকে বড় বা সমান প্রবেশ করানো হচ্ছে।",
            "বর্গমূল নেওয়ার পরিবর্তে b² এ থামছে।",
            "মিক্সিং ইউনিট যেমন মিটার এবং সেন্টিমিটার।"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "ডান ত্রিভুজ পার্শ্ব ক্যালকুলেটর"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "ক্যালকুলেটর: পিথাগোরাস উপপাদ্য"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "ক্যালকুলেটর: c এবং b থেকে অন্য বাহু নির্ণয়"
        }
      ],
      "faqs": [
        {
          "question": "এই ক্যালকুলেটরে c এর অর্থ কী?",
          "answer": "c হল সমকোণী ত্রিভুজের কর্ণ - দীর্ঘতম দিক, 90° কোণের বিপরীতে অবস্থিত। এটি একটি পা নয়। আপনি এই ক্যালকুলেটরে দুটি পরিচিত মানগুলির একটি হিসাবে c লিখুন৷"
        },
        {
          "question": "এই ক্যালকুলেটরে একটি মানে কি?",
          "answer": "a সমকোণী ত্রিভুজের দুটি পায়ের একটি। এটি একটি পক্ষ যা সঠিক কোণ গঠন করে। এই ক্যালকুলেটরে, a হল সেই পাটি যা আপনি ইতিমধ্যেই জানেন।"
        },
        {
          "question": "এই ক্যালকুলেটর কি খুঁজে পায়?",
          "answer": "এই ক্যালকুলেটর হারিয়ে যাওয়া লেগ b খুঁজে পায়। কর্ণ c এবং লেগ a দেওয়া হয়েছে, এটি b = √(c² − a²) গণনা করে এবং আপনাকে ধাপে ধাপে সমাধান দেখায়।"
        },
        {
          "question": "c একটি থেকে ছোট হতে পারে?",
          "answer": "না। একটি সমকোণী ত্রিভুজে, কর্ণ সর্বদা দীর্ঘতম দিক। c a থেকে ছোট হলে, মানগুলি একটি বৈধ সমকোণী ত্রিভুজ গঠন করে না। গণনা করার আগে কোন পরিমাপটি কর্ণের তা পরীক্ষা করুন।"
        },
        {
          "question": "আমি কিভাবে c এবং a থেকে b খুঁজে পাব?",
          "answer": "কর্ণের বর্গক্ষেত্র (c²), পরিচিত পায়ের বর্গক্ষেত্র (a²), c² থেকে a² বিয়োগ করুন এবং বর্গমূল নিন। সূত্রটি হল b = √(c² − a²)। অথবা একটি তাত্ক্ষণিক উত্তরের জন্য এই ক্যালকুলেটরে আপনার মান লিখুন।"
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "ক্যালকুলেটর: c এবং b থেকে অন্য বাহু নির্ণয়",
      "metaTitle": "ক্যালকুলেটর: c এবং b থেকে অন্য বাহু নির্ণয় | Right Triangle Solver",
      "metaDescription": "অতিভুজ c এবং বাহু b জানা থাকলে বাহু a নির্ণয় করুন।",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "মনে রাখবেন: c হল কর্ণ, একটি পা নয়। এটি ত্রিভুজের দীর্ঘতম দিক এবং 90° কোণের বিপরীতে বসে। আপনার যদি উভয় পা থাকে এবং কর্ণের প্রয়োজন হয় তবে এর পরিবর্তে পিথাগোরিয়ান থিওরেম ক্যালকুলেটর ব্যবহার করুন।",
      "intro": "অতিভুজ c এবং বাহু b জানা থাকলে বাহু a নির্ণয় করুন।",
      "quickSummary": {
        "h2": "এই অনুপস্থিত লেগ ক্যালকুলেটর কি সমাধান করে",
        "intro": "এই পৃষ্ঠাটি ব্যবহার করুন যখন আপনি কর্ণ এবং লেগ b জানেন, কিন্তু লেগ a প্রয়োজন। এটি b কে অপরিচিত দিক থেকে b কে আলাদা রাখে যাতে সূত্র এবং ফলাফল আপনার ত্রিভুজের লেবেলের সাথে মেলে।",
        "cards": [
          {
            "label": "পরিচিত মান",
            "value": "c = অতিভুজ; b = পরিচিত বাহু"
          },
          {
            "label": "খুঁজে পায়",
            "value": "a = অপরিচিত বাহু"
          },
          {
            "label": "প্রধান সূত্র",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "প্রয়োজনীয় চেক",
            "value": "c > b হওয়া প্রয়োজন।"
          }
        ]
      },
      "diagram": {
        "h2": "সমকোণী ত্রিভুজ চিত্র: লেগ a খোঁজা",
        "intro": "চিত্রে c কে পরিচিত কর্ণ এবং b পরিচিত পা হিসাবে দেখানো হয়েছে। বেস লেগ a ক্যালকুলেটর দ্বারা প্রত্যাবর্তিত অনুপস্থিত মান হিসাবে হাইলাইট করা হয়েছে।",
        "caption": "পরিচিত কর্ণ c, পরিচিত লেগ b, এবং অজানা লেগ a সহ সমকোণী ত্রিভুজ চিত্র।",
        "sides": {
          "a": {
            "label": "a = খুঁজুন",
            "description": "লেগ a হল c এবং b থেকে সমাধান করা অজানা বেস লেগ।",
            "status": "unknown"
          },
          "b": {
            "label": "b = পরিচিত",
            "description": "লেগ b হল পরিচিত পা যা a এর সাথে সমকোণ তৈরি করে।",
            "status": "known"
          },
          "c": {
            "label": "c = পরিচিত",
            "description": "হাইপোটেনাস c হল সমকোণী ত্রিভুজের দীর্ঘতম বাহু।",
            "status": "known"
          }
        },
        "notes": [
          "কর্ণ c ইনপুট জোড়ার মধ্যে দীর্ঘতম দিক হতে হবে।",
          "যদি c b-এর থেকে কম বা সমান হয়, তাহলে কোন মানটি কর্ণিক তা পুনরায় পরীক্ষা করুন।",
          "গণনা করা a-এ আপনার প্রবেশ করা মানগুলির মতো একই ইউনিট রয়েছে।"
        ]
      },
      "calculator": {
        "outputLabel": "a = অপরিচিত বাহু",
        "fields": [
          {
            "key": "c",
            "label": "c = অতিভুজ",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = পরিচিত বাহু",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "অনুপস্থিত লেগ a সূত্র",
        "paragraphs": [
          "পাইথাগোরিয়ান উপপাদ্য (a² + b² = c²) থেকে শুরু করে, নীচের সূত্রটি পেতে a-এর সমাধান করুন।",
          "যেখানে c হল কর্ণ (দীর্ঘতম দিক, সমকোণের বিপরীত), b হল পরিচিত পা, এবং a হল অনুপস্থিত পা যা আপনি খুঁজে পেতে চান। মূল কাজটি হল বিয়োগ: কর্ণের বর্গক্ষেত্র, পরিচিত পায়ের বর্গ বিয়োগ করুন, তারপর যা অবশিষ্ট আছে তার বর্গমূল নিন।"
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "c এবং b থেকে লেগ a কীভাবে খুঁজে পাবেন",
        "steps": [
          "আপনি সঠিকভাবে কর্ণ (c) এবং পরিচিত পা (b) সনাক্ত করেছেন তা নিশ্চিত করুন। কর্ণ সর্বদা 90° কোণ থেকে জুড়ে থাকে।",
          "প্রথম ইনপুট ক্ষেত্রে c কর্ণ লিখুন।",
          "দ্বিতীয় ইনপুট ক্ষেত্রে পরিচিত লেগ b লিখুন।",
          "লেগ a খুঁজে পেতে গণনা ক্লিক করুন.",
          "a-এর ফলাফল এবং নীচে দেখানো ধাপে ধাপে কাজ পর্যালোচনা করুন।"
        ]
      },
      "example": {
        "h2": "উদাহরণ: লেগ a খুঁজুন",
        "intro": "দেওয়া হয়েছে: c = 10, b = 6। কর্ণ 10 এবং লেগ 6 সহ একটি সমকোণী ত্রিভুজের অনুপস্থিত পা হল 8।",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "গণনা করার আগে গুরুত্বপূর্ণ চেক",
          "paragraphs": [
            "গণনার কাজ করার জন্য কর্ণ c অবশ্যই b এর থেকে বড় হতে হবে। প্রতিটি সমকোণী ত্রিভুজে, কর্ণটি দীর্ঘতম বাহু। যদি c b এর সমান হয়, তাহলে সূত্রটি দেয় a = 0, যার মানে কোনো ত্রিভুজ তৈরি করা যাবে না।",
            "যদি c b-এর থেকে কম হয়, তাহলে বর্গমূলের নিচের অভিব্যক্তিটি নেতিবাচক হয়ে যায় এবং a-এর জন্য কোন বাস্তব পার্শ্ব দৈর্ঘ্য নেই। সেক্ষেত্রে, 90° কোণের বিপরীতে কোন দিকটি পুনরায় পরীক্ষা করুন।"
          ],
          "listTitle": "প্রথমে এই চেকগুলি ব্যবহার করুন:",
          "listItems": [
            "c হল সমকোণের বিপরীত দিক।",
            "c b-এর চেয়ে বড়।",
            "উভয় ইনপুট ইতিবাচক সংখ্যা।",
            "c এবং b একই পরিমাপের একক ব্যবহার করে।"
          ]
        },
        {
          "h2": "যেখানে এই ক্যালকুলেটর দরকারী",
          "paragraphs": [
            "এই ক্যালকুলেটরটি সঠিক টুল যখন আপনি কর্ণ এবং লেগ b জানেন এবং লেগ a খুঁজে বের করতে হবে। এটি বিশেষত সহায়ক হয় যখন আপনার ডায়াগ্রাম পরিচিত পায়ে b এবং অজানা ভিত্তি বা উচ্চতা a হিসাবে লেবেল করে।",
            "পৃষ্ঠাটি পরিমাপ চেক হিসাবেও কাজ করে। যদি গণনা করা পাশ a a পরিমাপ করা পাশ থেকে খুব আলাদা হয়, তাহলে ত্রিভুজটিতে সত্যিকারের 90° কোণ নাও থাকতে পারে বা পরিচিত মানগুলির একটি ভুলভাবে অনুলিপি করা হতে পারে।"
          ],
          "listTitle": "সাধারণ উদাহরণ অন্তর্ভুক্ত:",
          "listItems": [
            "ঢালের দৈর্ঘ্য c এবং উচ্চতা b জানা থাকলে একটি ভিত্তি দূরত্ব খুঁজে বের করা।",
            "কর্ণ এবং অনুভূমিক দূরত্ব জানা গেলে একটি উল্লম্ব উচ্চতা সন্ধান করা।",
            "জ্যামিতি সমস্যা সমাধান করা যা c এবং b দেয় এবং a এর জন্য জিজ্ঞাসা করে।",
            "একটি সমকোণী ত্রিভুজ গঠনকারী নির্মাণ, ম্যাপিং বা ফ্লোর-প্ল্যান পরিমাপ পরীক্ষা করা।"
          ]
        },
        {
          "h2": "কিভাবে উত্তর পড়ুন",
          "paragraphs": [
            "অনুপস্থিত লেগ a লেবেলযুক্ত আউটপুট হল অন্য দিক যা b এর সাথে সমকোণ গঠন করে। এটি কর্ণের c থেকে ছোট এবং শূন্যের চেয়ে বড় হওয়া উচিত।",
            "ফলাফল c এর কাছাকাছি হলে, পরিচিত লেগ b অপেক্ষাকৃত ছোট। ফলাফল শূন্যের কাছাকাছি হলে, b প্রায় c-এর মতো দীর্ঘ। উভয়ই ঘটতে পারে, তবে উত্তর ব্যবহার করার আগে ইনপুট লেবেলগুলি পরীক্ষা করা উচিত।"
          ],
          "listTitle": "একটি বৈধ ফলাফল সন্তুষ্ট করা উচিত:",
          "listItems": [
            "a শূন্যের চেয়ে বড়।",
            "a c এর চেয়ে কম।",
            "a² + b² প্রায় c² এর সমান।",
            "আউটপুট ইউনিট c এবং b এর জন্য ব্যবহৃত ইউনিটের সাথে মেলে।"
          ]
        },
        {
          "h2": "সাধারণ ভুল",
          "paragraphs": [
            "সবচেয়ে বড় ঝুঁকি হল একটি পা দিয়ে কর্ণ অদলবদল করা। এই ক্যালকুলেটর অনুমান করে যে c ইতিমধ্যেই দীর্ঘতম দিক, তাই একটি ভুল লেবেলযুক্ত c মান ফলাফলটিকে ভুল করবে৷",
            "একটি দ্বিতীয় সাধারণ সমস্যা ভুল করে হাইপোটেনাস সূত্র ব্যবহার করছে। একটি অনুপস্থিত পা খুঁজে পেতে, আপনি কর্ণ বর্গ থেকে পরিচিত লেগ বর্গ বিয়োগ করুন, তারপর বর্গমূল নিন।"
          ],
          "listTitle": "এই ভুলগুলি এড়িয়ে চলুন:",
          "listItems": [
            "লেগ b কে কর্ণের c হিসাবে প্রবেশ করানো হচ্ছে।",
            "c² - b² এর পরিবর্তে c² + b² ব্যবহার করা হচ্ছে।",
            "b c এর থেকে বড় বা সমান প্রবেশ করানো হচ্ছে।",
            "বিয়োগ করার পর বর্গমূল ভুলে যাওয়া।",
            "বিভিন্ন একক ব্যবহার করে এমন পরিমাপের সমন্বয়।"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "ডান ত্রিভুজ পার্শ্ব ক্যালকুলেটর"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "ক্যালকুলেটর: পিথাগোরাস উপপাদ্য"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "ক্যালকুলেটর: c এবং a থেকে অন্য বাহু নির্ণয়"
        }
      ],
      "faqs": [
        {
          "question": "এই ক্যালকুলেটরে c এর অর্থ কী?",
          "answer": "c হল কর্ণ - 90° কোণের বিপরীতে সমকোণী ত্রিভুজের দীর্ঘতম বাহু। এই ক্যালকুলেটরে, আপনি আপনার দুটি পরিচিত মানগুলির মধ্যে একটি হিসাবে c লিখবেন।"
        },
        {
          "question": "এই ক্যালকুলেটরে b এর অর্থ কী?",
          "answer": "b সমকোণী ত্রিভুজের দুটি পায়ের একটি। এটি একটি দিক যা সঠিক কোণ গঠন করে। এখানে, b হল সেই পাটি যা আপনি ইতিমধ্যেই জানেন, এবং ক্যালকুলেটর এটি c এর সাথে ব্যবহার করে হারিয়ে যাওয়া লেগ a খুঁজে বের করতে।"
        },
        {
          "question": "এই ক্যালকুলেটর কি খুঁজে পায়?",
          "answer": "এটি অনুপস্থিত লেগ a খুঁজে পায়। আপনি কর্ণ (c) এবং একটি পা (b) প্রদান করেন এবং ক্যালকুলেটর আপনাকে ধাপে ধাপে সমাধান সহ অজানা পা ​​দিতে a = √(c² − b²) সূত্রটি প্রয়োগ করে।"
        },
        {
          "question": "c কি b থেকে ছোট হতে পারে?",
          "answer": "না। কর্ণ সর্বদা একটি সমকোণী ত্রিভুজের দীর্ঘতম বাহু। যদি c-এর জন্য আপনার মান b-এর থেকে ছোট হয়, তাহলে ইনপুটগুলি একটি বৈধ সমকোণী ত্রিভুজের প্রতিনিধিত্ব করে না। কোন পরিমাপ কর্ণের সাথে মিলে যায় তা পুনরায় পরীক্ষা করুন।"
        },
        {
          "question": "আমি কিভাবে c এবং b থেকে একটি খুঁজে পাব?",
          "answer": "কর্ণের বর্গক্ষেত্র (c²), পরিচিত পায়ের বর্গ করুন (b²), c² থেকে b² বিয়োগ করুন এবং ফলাফলের বর্গমূল নিন। সূত্রটি হল a = √(c² − b²)। স্বয়ংক্রিয়ভাবে উত্তর পেতে আপনি এই ক্যালকুলেটরে আপনার মানগুলিও লিখতে পারেন।"
        }
      ]
    }
  },
  "ja": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "計算機: ピタゴラスの定理",
      "metaTitle": "計算機: ピタゴラスの定理 | Right Triangle Solver",
      "metaDescription": "両方の脚の長さがわかっているときに斜辺を求めます。これはすべての直角三角形の主要な恒等式です。",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "宿題の問題を解決している場合でも、現実生活で対角線を測定している場合でも、このツールを使用すると、完全な解決策が段階的に表示され、数秒で答えが得られます。",
      "intro": "両方の脚の長さがわかっているときに斜辺を求めます。これはすべての直角三角形の主要な恒等式です。",
      "quickSummary": {
        "h2": "このピタゴラス電卓が解決するもの",
        "intro": "90° の角度で交わる 2 つの辺がわかっていて、対角の辺が不明な場合にこのページを使用します。この計算機は古典的な斜辺のケースに焦点を当てているため、入力は単純で、結果の確認が簡単です。",
        "cards": [
          {
            "label": "既知の値",
            "value": "a = 角Aの対辺; b = 角Bの対辺"
          },
          {
            "label": "発見",
            "value": "c = 斜辺"
          },
          {
            "label": "主な式",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "こんな方に最適",
            "value": "対角線、はしご、スロープ、スクリーン、幾何学の宿題"
          }
        ]
      },
      "diagram": {
        "h2": "直角三角形図: 斜辺を見つける",
        "intro": "この図は、ツールで使用される正確な側面関係を示しています。 2 本の脚は既知の入力値で、傾斜した辺 c は計算機が検出する斜辺です。",
        "caption": "既知の脚 a および b と未知の斜辺 c を含む直角三角形の図。",
        "sides": {
          "a": {
            "label": "a = 既知",
            "description": "脚aは直角をなす2辺のうちの1辺です。",
            "status": "known"
          },
          "b": {
            "label": "b = 既知",
            "description": "直角をなす反対側が脚bです。",
            "status": "known"
          },
          "c": {
            "label": "c = 検索",
            "description": "斜辺 c は最も長い辺で、90° の角度の反対側にあります。",
            "status": "unknown"
          }
        },
        "notes": [
          "a と b は交換できます。斜辺の結果は同じになります。",
          "計算する前に両脚に同じ単位を使用してください。",
          "答え c は、有効な直角三角形のいずれかの脚よりも常に大きくなります。"
        ]
      },
      "calculator": {
        "outputLabel": "c = 斜辺",
        "fields": [
          {
            "key": "a",
            "label": "a = 角Aの対辺",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = 角Bの対辺",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "ピタゴラスの定理の公式",
        "paragraphs": [
          "ピタゴラスの定理では、直角三角形では斜辺の二乗が 2 本の脚の二乗の和に等しいと定められています。斜辺を求めるには、両辺の平方根を求めます。",
          "この式では、a と b は直角三角形の 2 本の脚、つまり直角を形成する辺です。 c は斜辺、直角の反対側の最長の辺です。この公式は直角三角形にのみ機能します。"
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "ピタゴラスの定理電卓の使い方",
        "steps": [
          "直角三角形の 2 本の脚を特定します。これらは直角を形成する辺です。",
          "最初の入力フィールドに脚 a を入力します。",
          "2 番目の入力フィールドに脚 b を入力します。",
          "「計算」をクリックして斜辺を見つけます。",
          "c の結果と段階的な解決策を読んでください。"
        ]
      },
      "example": {
        "h2": "例: 斜辺を求める",
        "intro": "与えられた値: a = 6、b = 8。脚 6 と脚 8 を持つ直角三角形の斜辺は 10 です。",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "この計算機が役立つ場所",
          "paragraphs": [
            "斜辺計算ツールは、2 つの垂直距離が 1 つの対角距離に結合される場合に便利です。これは、図面、間取り図、または宿題の問題で、水平方向と垂直方向の辺が示されているものの、斜めの辺が空白のままになっている場合に特に役立ちます。",
            "このページは c のみを解決するため、サイド モード間の切り替えの混乱を避けることができます。既知の値が 2 本の脚である場合、これが使用するピタゴラスの定理ツールに焦点を当てます。"
          ],
          "listTitle": "一般的な例は次のとおりです。",
          "listItems": [
            "長方形、画面、タイル レイアウト、または部屋の対角線を見つける。",
            "壁の高さと地面の距離からはしごの長さを計算します。",
            "立ち上がりと進行からスロープの傾斜長さを推定します。",
            "最終解答を提出する前に、直角三角形の宿題を確認します。"
          ]
        },
        {
          "h2": "より良い結果のための入力のヒント",
          "paragraphs": [
            "両方の脚の長さを正の数値で入力します。小数は問題なく、計算機は段階的な作業を行うのに十分な精度を維持します。",
            "2 つの入力は同じ単位を使用する必要があります。 a がフィートで測定され、b がインチで測定される場合、結果が意味のあるものになるように、最初に 1 つの測定値を変換します。"
          ],
          "listTitle": "計算する前に、次のことを確認してください。",
          "listItems": [
            "a と b は、90° の角度に接する辺です。",
            "どちらの入力もゼロまたは負ではありません。",
            "両方の値は同じ単位で測定されます。",
            "不足している脚ではなく、斜辺を解決しているのです。"
          ]
        },
        {
          "h2": "答えの読み方",
          "paragraphs": [
            "Hypoteuse c とラベル付けされた出力は、直角の反対側です。これは図の対角線側であり、両方の入力脚よりも長い必要があります。",
            "結果が a または b より小さく見える場合は、入力の 1 つが間違ってラベル付けされているか、三角形が実際には直角三角形ではないことを示しています。"
          ],
          "listTitle": "妥当性の簡単なチェック:",
          "listItems": [
            "c は a より大きくなければなりません。",
            "c は b より大きくなければなりません。",
            "c は + b 未満である必要があります。",
            "3-4-5 や 5-12-13 などの一般的なトリプルの場合、結果は既知のトリプルと一致する必要があります。"
          ]
        },
        {
          "h2": "よくある間違い",
          "paragraphs": [
            "斜辺の間違った答えのほとんどは、間違った側で正しい式を使用したことに起因します。脚は直角をなす両側でなければなりません。斜辺はこのページでは決して入力されません。",
            "もう 1 つの一般的な問題は、a² + b² で停止することです。その値は、c ではなく、c² です。平方根ステップは、二乗値を実際の辺の長さに戻すものです。"
          ],
          "listTitle": "次の間違いを避けてください。",
          "listItems": [
            "90° の角度を持たない三角形に式を使用します。",
            "対角線をaまたはbと入力します。",
            "最後に平方根を取るのを忘れてしまいました。",
            "同じ計算にインチやフィートなどの単位を混合します。"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形辺計算機"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "計算機: cとaから残りの脚を求める"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "計算機: cとbから残りの脚を求める"
        }
      ],
      "faqs": [
        {
          "question": "ピタゴラスの定理とは何ですか?",
          "answer": "ピタゴラスの定理は、直角三角形の 3 つの辺を関係付ける式、a² + b² = c² です。斜辺の二乗は 2 本の脚の二乗の和に等しいと書かれています。直角三角形にのみ適用されます。"
        },
        {
          "question": "式中の c は何を意味しますか?",
          "answer": "式 c² = a² + b² では、c は斜辺、つまり直角三角形の最長の辺です。 90°のアングルの真向かい側です。"
        },
        {
          "question": "この計算機はどの三角形にも使用できますか?",
          "answer": "いいえ。この電卓はピタゴラスの定理を使用していますが、これは直角三角形にのみ機能します。三角形に 90° の角度がない場合、数式は正しい結果を与えません。"
        },
        {
          "question": "斜辺を見つけるにはどうすればよいですか?",
          "answer": "斜辺を見つけるには、両方の脚 (a² および b²) を二乗し、それらを加算し、合計の平方根を求めます。式はc = √(a² + b²)です。または、上記の値を入力して、計算機に計算させます。"
        },
        {
          "question": "直角三角形のaとbとは何ですか?",
          "answer": "a と b は 2 本の脚、つまり直角を形成する側面です。それらは任意の正の長さにすることができ、a または b のどちらと呼ぶかは問題ではありません。斜辺 (c) は常に残りの側になります。"
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "計算機: cとaから残りの脚を求める",
      "metaTitle": "計算機: cとaから残りの脚を求める | Right Triangle Solver",
      "metaDescription": "斜辺cと一方の脚aがわかっているときに、脚bを求めます。",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "覚えておいてください: c は常に斜辺、つまり直角の反対側の最も長い辺です。脚ではありません。脚が 2 本あり、代わりに斜辺が必要な場合は、ピタゴラスの定理計算ツールを使用してください。",
      "intro": "斜辺cと一方の脚aがわかっているときに、脚bを求めます。",
      "quickSummary": {
        "h2": "この欠落した脚の計算機が解決するもの",
        "intro": "このページは、斜辺と脚 a はわかっているが、もう一方の脚が欠落している場合に使用します。計算機はピタゴラスの定理を並べ替えて、平方根を求める前に斜辺から既知の脚を減算します。",
        "cards": [
          {
            "label": "既知の値",
            "value": "c = 斜辺; a = 既知の脚"
          },
          {
            "label": "発見",
            "value": "b = 未知の脚"
          },
          {
            "label": "主な式",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "必須チェック",
            "value": "c > a である必要があります。"
          }
        ]
      },
      "diagram": {
        "h2": "直角三角形図: 足探し b",
        "intro": "この図では、すでにわかっている値として c と a をマークしています。垂直脚 b は、この計算機が解決する欠落している側として強調表示されます。",
        "caption": "既知の斜辺 c、既知の脚 a、および未知の脚 b を含む直角三角形の図。",
        "sides": {
          "a": {
            "label": "a = 既知",
            "description": "脚 a は、直角三角形の底辺に沿った既知の脚です。",
            "status": "known"
          },
          "b": {
            "label": "b = 検索",
            "description": "レッグ b は、c^2 から a^2 を減算することで解決される未知のレッグです。",
            "status": "unknown"
          },
          "c": {
            "label": "c = 既知",
            "description": "斜辺 c は、直角の反対側の既知の最長の辺です。",
            "status": "known"
          }
        },
        "notes": [
          "c は、脚の 1 つではなく、斜辺である必要があります。",
          "c が a 以下の場合、入力は有効な直角三角形を形成しません。",
          "結果の b は、c および a と同じ単位を使用します。"
        ]
      },
      "calculator": {
        "outputLabel": "b = 未知の脚",
        "fields": [
          {
            "key": "c",
            "label": "c = 斜辺",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = 既知の脚",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "欠けた脚 b フォーミュラ",
        "paragraphs": [
          "脚 b を求める公式は、ピタゴラスの定理 (a² + b² = c²) から導出されます。 b について整理すると以下の式になります。",
          "ここで、c は斜辺 (直角三角形の最長辺)、a は既知の脚、b は解決対象の欠落している脚です。引き算に注目してください。斜辺の 2 乗から既知の脚の 2 乗を引き、平方根を求めます。"
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "c および a から脚 b を見つける方法",
        "steps": [
          "c が斜辺、a が脚であることを確認します。斜辺は常に最長の辺になります。",
          "最初の入力フィールドに斜辺 c を入力します。",
          "2 番目の入力フィールドに既知のレッグ a を入力します。",
          "「計算」をクリックして、欠落している脚を見つけます。",
          "b の結果と完全なステップバイステップのソリューションをお読みください。"
        ]
      },
      "example": {
        "h2": "例: 脚の検索 b",
        "intro": "与えられた場合: c = 13、a = 5。斜辺 13 と脚 5 を持つ直角三角形の不足している脚は 12 です。",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "計算前の重要な確認事項",
          "paragraphs": [
            "この式を使用する前に、c が a より大きいことを確認してください。斜辺は常に直角三角形の最長の辺です。 c が a と等しい場合、b = 0 が得られます。これは、三角形が存在しないことを意味します。",
            "c が a より小さい場合、平方根の下の式は負になります。つまり、2 つの入力値では、c を斜辺とする実際の直角三角形を表すことができません。"
          ],
          "listTitle": "最初に次のチェックを使用します。",
          "listItems": [
            "c is opposite the 90° angle.",
            "c は a よりも大きいです。",
            "どちらの値も正です。",
            "c と a は同じユニットを使用します。"
          ]
        },
        {
          "h2": "この計算機が役立つ場所",
          "paragraphs": [
            "この計算機は、対角線または傾斜した測定値がわかっていて、一方の垂直な辺がわかっていて、もう一方の垂直な辺が不明な場合に役立ちます。これは c と 1 つのケースに重点を置いたツールであるため、ページ上のすべての説明は b を見つけることを指しています。",
            "測定値の検証にも役立ちます。 b の測定値が計算機の結果と一致しない場合は、三角形が正しくないか、斜辺のラベルが間違っているか、または 1 つの測定で異なる単位が使用されている可能性があります。"
          ],
          "listTitle": "一般的な例は次のとおりです。",
          "listItems": [
            "はしごの長さ c と地面の距離 a がわかっているときの壁の高さを求めます。",
            "斜面の長さと水平な流れがわかっている場合、斜面の垂直の立ち上がりを求めます。",
            "c と a を与える直角三角形の宿題問題を確認します。",
            "フレーム、造園、スロープ、またはフロアプランのレイアウト測定を確認します。"
          ]
        },
        {
          "h2": "答えの読み方",
          "paragraphs": [
            "「欠落脚 b」とラベル付けされた出力は、a と直角を形成するもう一方の脚の長さです。これは斜辺ではないため、c よりも短くする必要があります。",
            "計算された b が非常に小さい場合、既知の脚 a は斜辺 c に非常に近くなります。それは有効ですが、値を使用する前に図と単位を確認する価値があります。"
          ],
          "listTitle": "有効な結果は次の条件を満たす必要があります。",
          "listItems": [
            "b はゼロより大きいです。",
            "b は c よりも小さいです。",
            "a² + b² は c² とほぼ同じです。",
            "出力単位は入力単位と一致します。"
          ]
        },
        {
          "h2": "よくある間違い",
          "paragraphs": [
            "最も一般的なエラーは、c を脚として扱うことです。この計算機では、c は斜辺 (最長の辺であり、直角の反対側の辺) である必要があります。",
            "もう 1 つのよくある間違いは、平方根を減算するのではなく加算することです。加算により斜辺が求められます。減算により、斜辺から欠落している脚が見つかります。"
          ],
          "listTitle": "次の間違いを避けてください。",
          "listItems": [
            "既知の脚を斜辺フィールドに入力します。",
            "c² - a² の代わりに c² + a² を使用します。",
            "c 以上の値を入力します。",
            "平方根を求めるのではなく、b² で停止します。",
            "メートルやセンチメートルなどの単位が混在しています。"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形辺計算機"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "計算機: ピタゴラスの定理"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "計算機: cとbから残りの脚を求める"
        }
      ],
      "faqs": [
        {
          "question": "この計算機の c は何を意味しますか?",
          "answer": "c は、直角三角形の斜辺、つまり 90° の角度の反対側にある最長の辺です。脚ではありません。この計算ツールでは、既知の 2 つの値の 1 つとして c を入力します。"
        },
        {
          "question": "この計算機の は何を意味しますか?",
          "answer": "a は直角三角形の 2 本の脚のうちの 1 つです。直角をなす辺の一つです。この計算機では、a はすでにわかっている脚です。"
        },
        {
          "question": "この計算機は何を求めますか?",
          "answer": "この計算機は、欠落している脚 b を見つけます。斜辺 c と脚 a を指定すると、b = √(c² − a²) が計算され、段階的な解決策が表示されます。"
        },
        {
          "question": "c を a より小さくすることはできますか?",
          "answer": "いいえ、直角三角形では、斜辺が常に最長の辺になります。 c が a より小さい場合、値は有効な直角三角形を形成しません。計算する前に、どの測定値が斜辺であるかを確認してください。"
        },
        {
          "question": "c と a から b を見つけるにはどうすればよいですか?",
          "answer": "斜辺を 2 乗し (c²)、既知の脚を 2 乗し (a²)、c² から a² を減算し、平方根を求めます。式はb = √(c² − a²)です。または、この計算機に値を入力すると、すぐに答えが得られます。"
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "計算機: cとbから残りの脚を求める",
      "metaTitle": "計算機: cとbから残りの脚を求める | Right Triangle Solver",
      "metaDescription": "斜辺cと脚bがわかっているときに、脚aを求めます。",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "覚えておいてください: c は斜辺であり、脚ではありません。これは三角形の最も長い辺であり、90° の角度の反対側にあります。両足があり、斜辺が必要な場合は、代わりにピタゴラスの定理計算ツールを使用してください。",
      "intro": "斜辺cと脚bがわかっているときに、脚aを求めます。",
      "quickSummary": {
        "h2": "この欠落した脚の計算機が解決するもの",
        "intro": "斜辺と脚 b はわかっているが、脚 a が必要な場合にこのページを使用してください。既知の側 b を未知の側 a から分離して、数式と結果が三角形のラベルと一致するようにします。",
        "cards": [
          {
            "label": "既知の値",
            "value": "c = 斜辺; b = 既知の脚"
          },
          {
            "label": "発見",
            "value": "a = 未知の脚"
          },
          {
            "label": "主な式",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "必須チェック",
            "value": "c > b である必要があります。"
          }
        ]
      },
      "diagram": {
        "h2": "直角三角形図：足探し a",
        "intro": "この図は、既知の斜辺として c を、既知の脚として b を示しています。ベース脚 a は、計算機によって返された欠損値として強調表示されます。",
        "caption": "既知の斜辺 c、既知の脚 b、および未知の脚 a を含む直角三角形の図。",
        "sides": {
          "a": {
            "label": "a = 見つける",
            "description": "脚 a は、c および b から解決された未知のベース脚です。",
            "status": "unknown"
          },
          "b": {
            "label": "b = 既知",
            "description": "脚 b は、a と直角を成す既知の脚です。",
            "status": "known"
          },
          "c": {
            "label": "c = 既知",
            "description": "斜辺 c は、直角三角形の既知の最長辺です。",
            "status": "known"
          }
        },
        "notes": [
          "斜辺 c は、入力ペアの最長の辺である必要があります。",
          "c が b 以下の場合は、どの値が斜辺であるかを再確認してください。",
          "計算された a の単位は、入力した値と同じです。"
        ]
      },
      "calculator": {
        "outputLabel": "a = 未知の脚",
        "fields": [
          {
            "key": "c",
            "label": "c = 斜辺",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = 既知の脚",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "欠けた脚 a フォーミュラ",
        "paragraphs": [
          "ピタゴラスの定理 (a² + b² = c²) から始めて、a を解き、以下の式を取得します。",
          "ここで、c は斜辺 (直角の反対側の最も長い辺)、b は既知の脚、a は検出したい欠落している脚です。重要な演算は引き算です。斜辺を 2 乗し、既知の脚の 2 乗を引き、残ったものの平方根をとります。"
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "c および b から脚 a を見つける方法",
        "steps": [
          "斜辺 (c) と既知の脚 (b) を正しく識別していることを確認してください。斜辺は常に 90° 角度の向かい側にあります。",
          "最初の入力フィールドに斜辺 c を入力します。",
          "2 番目の入力フィールドに既知のレッグ b を入力します。",
          "「計算」をクリックして脚 a を見つけます。",
          "a の結果と、以下に示す段階的な作業を確認してください。"
        ]
      },
      "example": {
        "h2": "例: 脚の検索 a",
        "intro": "与えられた場合: c = 10、b = 6。斜辺 10 と脚 6 を持つ直角三角形の不足している脚は 8 です。",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "計算前の重要な確認事項",
          "paragraphs": [
            "計算が機能するには、斜辺 c が b より大きくなければなりません。すべての直角三角形では、斜辺が最も長い辺になります。 If c equals b, the formula gives a = 0, which means no triangle can be formed.",
            "c が b より小さい場合、平方根の下の式は負になり、a の実辺の長さは存在しません。その場合は、90°の角度がどちら側にあるのかを再確認してください。"
          ],
          "listTitle": "最初に次のチェックを使用します。",
          "listItems": [
            "cは直角の反対側です。",
            "c は b より大きいです。",
            "どちらの入力も正の数です。",
            "c と b は同じ測定単位を使用します。"
          ]
        },
        {
          "h2": "この計算機が役立つ場所",
          "paragraphs": [
            "この計算機は、斜辺と脚 b がわかっていて、脚 a を見つける必要がある場合に最適なツールです。これは、図で既知の脚に b、未知の底辺または高さに a というラベルを付ける場合に特に役立ちます。",
            "このページは測定チェックとしても機能します。計算された側面 a が測定された側面 a と大きく異なる場合、三角形に真の 90° 角度が含まれていない可能性があります。または、既知の値の 1 つが誤ってコピーされた可能性があります。"
          ],
          "listTitle": "一般的な例は次のとおりです。",
          "listItems": [
            "斜面の長さ c と高さ b がわかっている場合の基本距離を求めます。",
            "斜辺と水平距離がわかっている場合の垂直高さを求める。",
            "c と b を与え、a を求める幾何学問題を解決します。",
            "直角三角形を形成する構造、マッピング、またはフロアプランの測定を確認します。"
          ]
        },
        {
          "h2": "答えの読み方",
          "paragraphs": [
            "「Missing Leg a」とラベル付けされた出力は、b と直角を形成する反対側です。これは斜辺 c より短く、ゼロより大きくなければなりません。",
            "結果が c に近い場合、既知のレッグ b は比較的小さいことになります。結果がゼロに近い場合、b は c とほぼ同じ長さになります。どちらも発生する可能性がありますが、回答を使用する前に入力ラベルを確認する必要があります。"
          ],
          "listTitle": "有効な結果は次の条件を満たす必要があります。",
          "listItems": [
            "aはゼロより大きいです。",
            "aはc未満です。",
            "a² + b² は c² とほぼ同じです。",
            "出力単位はc、bの単位と一致します。"
          ]
        },
        {
          "h2": "よくある間違い",
          "paragraphs": [
            "最大のリスクは、斜辺を脚と交換することです。この計算機では、c がすでに最長の辺であると想定しているため、c 値のラベルが間違っていると、結果が不正確になります。",
            "2 番目によくある問題は、斜辺の式を誤って使用することです。欠落している脚を見つけるには、斜辺の 2 乗から既知の脚の 2 乗を引き、平方根を求めます。"
          ],
          "listTitle": "次の間違いを避けてください。",
          "listItems": [
            "脚 b を斜辺 c として入力します。",
            "c² - b² の代わりに c² + b² を使用します。",
            "b 以上の c を入力します。",
            "引き算後の平方根を忘れます。",
            "異なる単位を使用する測定値を組み合わせる。"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形辺計算機"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "計算機: ピタゴラスの定理"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "計算機: cとaから残りの脚を求める"
        }
      ],
      "faqs": [
        {
          "question": "この計算機の c は何を意味しますか?",
          "answer": "c は斜辺、つまり 90° の角度の反対側にある直角三角形の最長の辺です。この計算ツールでは、2 つの既知の値の 1 つとして c を入力します。"
        },
        {
          "question": "この計算機の b は何を意味しますか?",
          "answer": "b は、直角三角形の 2 本の脚のうちの 1 つです。直角をなす辺です。ここで、b はすでにわかっている脚であり、計算機はそれを c とともに使用して、欠落している脚 a を見つけます。"
        },
        {
          "question": "この計算機は何を求めますか?",
          "answer": "欠けていた足のaを見つけます。斜辺 (c) と 1 本の脚 (b) を指定すると、計算機が式 a = √(c² − b²) を適用して、未知の脚と段階的な解決策を提供します。"
        },
        {
          "question": "c を b より小さくすることはできますか?",
          "answer": "いいえ、斜辺は常に直角三角形の最長の辺です。 c の値が b より小さい場合、入力は有効な直角三角形を表しません。どの測定値が斜辺に対応するかを再確認します。"
        },
        {
          "question": "c と b から を見つけるにはどうすればよいですか?",
          "answer": "斜辺を 2 乗し (c²)、既知の脚を 2 乗し (b²)、c² から b² を減算し、結果の平方根を求めます。式はa = √(c² − b²)です。この計算機に値を入力するだけで、自動的に答えが得られることもあります。"
        }
      ]
    }
  },
  "ko": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "계산기: 피타고라스의 정리",
      "metaTitle": "계산기: 피타고라스의 정리 | Right Triangle Solver",
      "metaDescription": "두 변의 길이를 알 때 빗변을 구합니다. 모든 직각삼각형의 가장 기본적인 공식입니다.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "숙제 문제를 해결하든 실생활에서 대각선을 측정하든 이 도구는 단계별로 전체 솔루션을 보여주면서 몇 초 안에 답을 제공합니다.",
      "intro": "두 변의 길이를 알 때 빗변을 구합니다. 모든 직각삼각형의 가장 기본적인 공식입니다.",
      "quickSummary": {
        "h2": "이 피타고라스 계산기가 해결하는 것",
        "intro": "90° 각도에서 만나는 두 변을 알고 있고 대각선 변이 없는 경우 이 페이지를 사용하십시오. 계산기는 전형적인 빗변 사례에 중점을 두므로 입력이 단순하게 유지되고 결과를 쉽게 확인할 수 있습니다.",
        "cards": [
          {
            "label": "알려진 값",
            "value": "a = 각 A의 대변; b = 각 B의 대변"
          },
          {
            "label": "찾기",
            "value": "c = 빗변"
          },
          {
            "label": "주요 공식",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "다음에 가장 적합",
            "value": "대각선, 사다리, 경사로, 스크린 및 기하학 숙제"
          }
        ]
      },
      "diagram": {
        "h2": "직각삼각형 다이어그램: 빗변 찾기",
        "intro": "다이어그램은 도구에서 사용되는 정확한 측면 관계를 보여줍니다. 두 개의 다리는 알려진 입력 값이고 기울어진 변 c는 계산기가 찾는 빗변입니다.",
        "caption": "알려진 변 a 및 b와 알려지지 않은 빗변 c가 있는 직각삼각형 다이어그램.",
        "sides": {
          "a": {
            "label": "a = 알려진",
            "description": "다리 a는 직각을 형성하는 양면 중 하나입니다.",
            "status": "known"
          },
          "b": {
            "label": "b = known",
            "description": "다리 b는 직각을 형성하는 반대쪽입니다.",
            "status": "known"
          },
          "c": {
            "label": "c = find",
            "description": "빗변 c는 가장 긴 변이며 90° 각도 반대편에 위치합니다.",
            "status": "unknown"
          }
        },
        "notes": [
          "a와 b는 교체 가능합니다. 빗변 결과는 동일합니다.",
          "계산하기 전에 양쪽 다리에 동일한 단위를 사용하십시오.",
          "c라는 답은 항상 유효한 직각삼각형의 어느 쪽 다리보다 큽니다."
        ]
      },
      "calculator": {
        "outputLabel": "c = 빗변",
        "fields": [
          {
            "key": "a",
            "label": "a = 각 A의 대변",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = 각 B의 대변",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "피타고라스 정리 공식",
        "paragraphs": [
          "피타고라스의 정리에 따르면 직각 삼각형에서 빗변의 제곱은 두 다리의 제곱의 합과 같습니다. 빗변을 풀려면 양변에 제곱근을 구하세요.",
          "이 공식에서 a와 b는 직각삼각형의 두 다리, 즉 직각을 형성하는 변입니다. c는 직각 반대편에 있는 가장 긴 변인 빗변입니다. 이 공식은 직각삼각형에만 적용됩니다."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "피타고라스 정리 계산기를 사용하는 방법",
        "steps": [
          "직각 삼각형의 두 다리를 식별하십시오. 직각을 형성하는 변입니다.",
          "첫 번째 입력 필드에 레그 a를 입력하세요.",
          "두 번째 입력 필드에 레그 b를 입력합니다.",
          "빗변을 찾으려면 계산을 클릭하세요.",
          "단계별 솔루션과 함께 c에 대한 결과를 읽어보세요."
        ]
      },
      "example": {
        "h2": "예: 빗변 찾기",
        "intro": "주어진 값: a = 6, b = 8. 다리 6과 8이 있는 직각삼각형의 빗변은 10입니다.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "이 계산기가 유용한 경우",
          "paragraphs": [
            "빗변 계산기는 두 개의 수직 거리가 하나의 대각선 거리로 결합될 때마다 유용합니다. 그림, 평면도, 숙제 문제에서 수평과 수직 면은 제공하지만 대각선 면은 비워둘 때 특히 유용합니다.",
            "이 페이지는 c에 대해서만 해결하기 때문에 사이드 모드 간 전환으로 인한 혼란을 방지합니다. 알려진 값이 두 개의 다리인 경우 이는 집중적으로 사용되는 피타고라스 정리 도구입니다."
          ],
          "listTitle": "일반적인 예는 다음과 같습니다.",
          "listItems": [
            "직사각형, 화면, 타일 레이아웃 또는 방의 대각선 찾기.",
            "벽 높이와 지상 거리로부터 사다리 길이를 계산합니다.",
            "상승 및 주행에서 경사로의 경사 길이를 추정합니다.",
            "최종 답안을 제출하기 전 직각삼각형 숙제를 확인합니다."
          ]
        },
        {
          "h2": "더 나은 결과를 위한 입력 팁",
          "paragraphs": [
            "두 다리 길이를 모두 양수로 입력합니다. 소수점 이하 자릿수도 괜찮으며, 계산기는 단계별 작업을 유용하게 수행할 수 있을 만큼 충분한 정밀도를 유지합니다.",
            "두 입력은 동일한 단위를 사용해야 합니다. a가 피트 단위로 측정되고 b가 인치 단위로 측정되는 경우 결과가 의미가 있도록 먼저 하나의 측정값을 변환하십시오."
          ],
          "listTitle": "계산하기 전에 다음 사항을 확인하세요.",
          "listItems": [
            "a 및 b는 90° 각도에 닿는 면입니다.",
            "입력이 0이나 음수가 아닙니다.",
            "두 값 모두 동일한 단위로 측정됩니다.",
            "다리가 빠진 것이 아니라 빗변을 해결하는 것입니다."
          ]
        },
        {
          "h2": "답변을 읽는 방법",
          "paragraphs": [
            "빗변 c라고 표시된 출력은 직각 반대편입니다. 이는 다이어그램의 대각선 부분이며 두 입력 다리보다 길어야 합니다.",
            "결과가 a 또는 b보다 작아 보인다면 이는 입력 중 하나에 레이블이 잘못 지정되었거나 삼각형이 실제로 직각삼각형이 아니라는 신호입니다."
          ],
          "listTitle": "빠른 합리성 확인:",
          "listItems": [
            "c는 a보다 커야 합니다.",
            "c는 b보다 커야 합니다.",
            "c는 + b보다 작아야 합니다.",
            "3-4-5 또는 5-12-13와 같은 일반적인 트리플의 경우 결과는 알려진 트리플과 일치해야 합니다."
          ]
        },
        {
          "h2": "일반적인 실수",
          "paragraphs": [
            "대부분의 잘못된 빗변 답은 잘못된 변에 올바른 공식을 사용하는 데서 비롯됩니다. 다리는 직각을 이루는 양면이어야 합니다. 빗변은 이 페이지의 입력이 아닙니다.",
            "또 다른 일반적인 문제는 a² + b²에서 중지되는 것입니다. 해당 값은 c가 아닌 c²입니다. 제곱근 단계는 제곱 값을 실제 변 길이로 다시 바꾸는 것입니다."
          ],
          "listTitle": "다음과 같은 실수를 피하세요.",
          "listItems": [
            "90° 각도가 없는 삼각형에 공식을 사용합니다.",
            "대각선 변을 a 또는 b로 입력합니다.",
            "끝에 제곱근을 취하는 것을 잊어버렸습니다.",
            "동일한 계산에 인치, 피트 등의 단위를 혼합합니다."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "직각 삼각형 변 계산기"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "계산기: c와 a를 이용한 한 변 구하기"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "계산기: c와 b를 이용한 한 변 구하기"
        }
      ],
      "faqs": [
        {
          "question": "피타고라스의 정리란 무엇입니까?",
          "answer": "피타고라스 정리는 직각 삼각형의 세 변을 연결하는 공식인 a² + b² = c²입니다. 빗변의 제곱은 두 다리의 제곱의 합과 같다고 합니다. 직각삼각형에만 적용됩니다."
        },
        {
          "question": "공식에서 c는 무엇을 의미하나요?",
          "answer": "c² = a² + b² 공식에서 c는 직각삼각형의 가장 긴 변인 빗변입니다. 90° 각도의 바로 맞은편 측면입니다."
        },
        {
          "question": "어떤 삼각형에도 이 계산기를 사용할 수 있나요?",
          "answer": "아니요. 이 계산기는 직각삼각형에만 적용되는 피타고라스 정리를 사용합니다. 삼각형에 90° 각도가 없으면 공식이 올바른 결과를 제공하지 않습니다."
        },
        {
          "question": "빗변은 어떻게 찾나요?",
          "answer": "빗변을 구하려면 두 다리(a² 및 b²)를 제곱하고 더한 다음 그 합의 제곱근을 구합니다. 공식은 c = √(a² + b²)입니다. 아니면 위에 값을 입력하고 계산기가 자동으로 계산하도록 하세요."
        },
        {
          "question": "직각삼각형의 a와 b는 무엇인가요?",
          "answer": "a 및 b는 두 개의 다리, 즉 직각을 형성하는 측면입니다. 양수 길이일 수 있으며 a 또는 b라고 부르는 것은 중요하지 않습니다. 빗변(c)은 항상 나머지 변입니다."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "계산기: c와 a를 이용한 한 변 구하기",
      "metaTitle": "계산기: c와 a를 이용한 한 변 구하기 | Right Triangle Solver",
      "metaDescription": "빗변 c와 한 변 a를 알 때, 나머지 한 변 b를 구합니다.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "기억하세요: c는 항상 직각 반대편의 가장 긴 변인 빗변입니다. 다리가 아닙니다. 다리가 두 개 있고 대신 빗변이 필요한 경우 피타고라스 정리 계산기를 사용하세요.",
      "intro": "빗변 c와 한 변 a를 알 때, 나머지 한 변 b를 구합니다.",
      "quickSummary": {
        "h2": "잃어버린 다리 계산기가 해결하는 것",
        "intro": "빗변과 다리 a가 알려져 있지만 다른 다리가 없는 경우 이 페이지를 사용하십시오. 계산기는 피타고라스의 정리를 재정렬하여 제곱근을 구하기 전에 빗변에서 알려진 다리를 뺍니다.",
        "cards": [
          {
            "label": "알려진 값",
            "value": "c = 빗변; a = 알고 있는 변"
          },
          {
            "label": "찾기",
            "value": "b = 모르는 변"
          },
          {
            "label": "주요 공식",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "필수 확인",
            "value": "c > a여야 합니다."
          }
        ]
      },
      "diagram": {
        "h2": "직각삼각형 다이어그램: 다리 b 찾기",
        "intro": "다이어그램에서는 c 및 a를 이미 알고 있는 값으로 표시합니다. 수직변 b는 이 계산기가 해결하는 누락된 변으로 강조 표시됩니다.",
        "caption": "알려진 빗변 c, 알려진 변 a, 알려지지 않은 변 b가 있는 직각삼각형 다이어그램.",
        "sides": {
          "a": {
            "label": "a = 알려진",
            "description": "다리 a는 직각삼각형의 밑변을 따라 알려진 다리입니다.",
            "status": "known"
          },
          "b": {
            "label": "b = find",
            "description": "레그 b는 c^2에서 a^2를 빼서 해결된 알 수 없는 레그입니다.",
            "status": "unknown"
          },
          "c": {
            "label": "c = known",
            "description": "빗변 c는 직각 반대편으로 알려진 가장 긴 변입니다.",
            "status": "known"
          }
        },
        "notes": [
          "c는 다리 중 하나가 아닌 빗변이어야 합니다.",
          "c가 a보다 작거나 같은 경우 입력은 유효한 직각 삼각형을 형성하지 않습니다.",
          "결과 b는 c 및 a와 동일한 단위를 사용합니다."
        ]
      },
      "calculator": {
        "outputLabel": "b = 모르는 변",
        "fields": [
          {
            "key": "c",
            "label": "c = 빗변",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = 알고 있는 변",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "누락된 다리 b 공식",
        "paragraphs": [
          "다리 b를 찾는 공식은 피타고라스 정리(a² + b² = c²)에서 파생됩니다. b를 재배열하면 아래 공식이 제공됩니다.",
          "여기서 c는 빗변(직각 삼각형의 가장 긴 변)이고, a는 알려진 다리이며, b는 해결하려는 누락 다리입니다. 뺄셈에 주목하세요. 빗변의 제곱에서 알려진 다리의 제곱을 뺀 다음 제곱근을 취합니다."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "c 및 a에서 레그 b를 찾는 방법",
        "steps": [
          "c가 빗변이고 a가 다리인지 확인합니다. 빗변은 항상 가장 긴 변입니다.",
          "첫 번째 입력란에 빗변 c를 입력합니다.",
          "알려진 구간 a를 두 번째 입력 필드에 입력합니다.",
          "누락된 다리를 찾으려면 계산을 클릭하세요.",
          "전체 단계별 솔루션과 함께 b에 대한 결과를 읽어보세요."
        ]
      },
      "example": {
        "h2": "예: 다리 b 찾기",
        "intro": "주어진 값: c = 13, a = 5. 빗변이 13이고 변이 5인 직각삼각형의 빠진 변은 12입니다.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "계산 전 중요 확인 사항",
          "paragraphs": [
            "이 수식을 사용하기 전에 c가 a보다 큰지 확인하세요. 빗변은 항상 직각삼각형의 가장 긴 변입니다. c가 a와 같으면 b = 0이 되며 이는 삼각형이 존재하지 않음을 의미합니다.",
            "c가 a보다 작으면 제곱근 아래의 표현식은 음수가 됩니다. 이는 두 입력 값이 빗변으로 c를 사용하는 실제 직각삼각형을 설명할 수 없음을 의미합니다."
          ],
          "listTitle": "먼저 다음 확인 사항을 사용하세요.",
          "listItems": [
            "c는 90° 각도와 반대입니다.",
            "c는 a보다 큽니다.",
            "두 값 모두 양수입니다.",
            "c와 a는 동일한 단위를 사용합니다."
          ]
        },
        {
          "h2": "이 계산기가 유용한 경우",
          "paragraphs": [
            "이 계산기는 대각선 또는 경사 측정값을 알고 있고 수직 변 중 하나는 알고 있고 다른 수직 변은 누락된 경우에 유용합니다. 이는 c 및 케이스에 초점을 맞춘 도구이므로 페이지의 모든 설명은 b를 찾는 데 중점을 둡니다.",
            "또한 측정값을 확인하는 데도 도움이 될 수 있습니다. b에 대해 측정된 값이 계산기 결과와 일치하지 않으면 삼각형이 올바르지 않거나 빗변의 라벨이 잘못 지정되거나 한 측정에서 다른 단위가 사용될 수 있습니다."
          ],
          "listTitle": "일반적인 예는 다음과 같습니다.",
          "listItems": [
            "사다리 길이 c와 지면 거리 a를 알고 있을 때 벽 높이를 구합니다.",
            "경사 길이와 수평 방향을 알고 있을 때 경사의 수직 상승을 찾습니다.",
            "c 및 a를 제공하는 직각 삼각형 숙제 문제를 확인합니다.",
            "프레임, 조경, 경사로 또는 평면도에 대한 레이아웃 측정을 확인합니다."
          ]
        },
        {
          "h2": "답변을 읽는 방법",
          "paragraphs": [
            "Missing Leg b라고 표시된 출력은 a와 직각을 이루는 다른 쪽 다리의 길이입니다. 빗변이 아니며 c보다 짧아야 합니다.",
            "계산된 b가 매우 작은 경우 알려진 레그 a는 빗변 c에 매우 가깝습니다. 이는 유효할 수 있지만 값을 사용하기 전에 다이어그램과 단위를 확인하는 것이 좋습니다."
          ],
          "listTitle": "유효한 결과는 다음을 충족해야 합니다.",
          "listItems": [
            "b는 0보다 큽니다.",
            "b는 c보다 작습니다.",
            "a² + b²는 c²와 거의 동일합니다.",
            "출력 단위가 입력 단위와 일치합니다."
          ]
        },
        {
          "h2": "일반적인 실수",
          "paragraphs": [
            "가장 일반적인 오류는 c를 다리로 취급하는 것입니다. 이 계산기에서 c는 가장 긴 변이자 직각과 반대되는 변인 빗변이어야 합니다.",
            "또 다른 빈번한 실수는 빼는 대신 제곱을 더하는 것입니다. 덧셈은 빗변을 찾습니다. 빼기는 빗변에서 누락된 다리를 찾습니다."
          ],
          "listTitle": "다음과 같은 실수를 피하세요.",
          "listItems": [
            "알려진 다리를 빗변 필드에 넣습니다.",
            "c² - a² 대신 c² + a²를 사용합니다.",
            "c보다 크거나 같은 값을 입력하세요.",
            "제곱근을 취하는 대신 b²에서 중지합니다.",
            "미터, 센티미터 등의 단위를 혼합합니다."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "직각 삼각형 변 계산기"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "계산기: 피타고라스의 정리"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "계산기: c와 b를 이용한 한 변 구하기"
        }
      ],
      "faqs": [
        {
          "question": "이 계산기에서 c는 무엇을 의미합니까?",
          "answer": "c는 직각 삼각형의 빗변입니다. 가장 긴 변은 90° 각도 반대편에 있습니다. 다리가 아닙니다. 이 계산기에 알려진 두 값 중 하나로 c를 입력합니다."
        },
        {
          "question": "이 계산기에서 은(는) 무엇을 의미하나요?",
          "answer": "a는 직각 삼각형의 두 다리 중 하나입니다. 직각을 이루는 변 중 하나입니다. 이 계산기에서 a는 이미 알고 있는 다리입니다."
        },
        {
          "question": "이 계산기는 무엇을 찾아내나요?",
          "answer": "이 계산기는 누락된 다리 b를 찾습니다. 빗변 c와 다리 a가 주어지면 b = √(c² − a²)를 계산하고 단계별 솔루션을 보여줍니다."
        },
        {
          "question": "c가 a보다 작을 수 있나요?",
          "answer": "아니요. 직각 삼각형에서 빗변은 항상 가장 긴 변입니다. c가 a보다 작은 경우 값은 유효한 직각 삼각형을 형성하지 않습니다. 계산하기 전에 어떤 측정값이 빗변인지 확인하세요."
        },
        {
          "question": "c 및 a에서 b를 어떻게 찾나요?",
          "answer": "빗변을 제곱하고(c²) 알려진 변을 제곱하고(a²) c²에서 a²를 빼고 제곱근을 구합니다. 공식은 b = √(c² − a²)입니다. 또는 즉시 답을 얻으려면 이 계산기에 값을 입력하세요."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "계산기: c와 b를 이용한 한 변 구하기",
      "metaTitle": "계산기: c와 b를 이용한 한 변 구하기 | Right Triangle Solver",
      "metaDescription": "빗변 c와 한 변 b를 알 때, 나머지 한 변 a를 구합니다.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "명심하세요: c는 다리가 아니라 빗변입니다. 이는 삼각형의 가장 긴 변이며 90° 각도 반대편에 위치합니다. 두 다리가 있고 빗변이 필요한 경우 대신 피타고라스 정리 계산기를 사용하세요.",
      "intro": "빗변 c와 한 변 b를 알 때, 나머지 한 변 a를 구합니다.",
      "quickSummary": {
        "h2": "잃어버린 다리 계산기가 해결하는 것",
        "intro": "빗변과 다리 b를 알고 있지만 다리 a가 필요한 경우 이 페이지를 사용하세요. 알려진 변 b를 알 수 없는 변 a와 별도로 유지하므로 수식과 결과가 삼각형의 레이블과 일치합니다.",
        "cards": [
          {
            "label": "알려진 값",
            "value": "c = 빗변; b = 알고 있는 변"
          },
          {
            "label": "찾기",
            "value": "a = 모르는 변"
          },
          {
            "label": "주요 공식",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "필수 확인",
            "value": "c > b여야 합니다."
          }
        ]
      },
      "diagram": {
        "h2": "직각삼각형 다이어그램: 다리 a 찾기",
        "intro": "다이어그램에서는 c를 알려진 빗변으로, b를 알려진 다리로 표시합니다. 기본 구간 a는 계산기에서 반환된 누락된 값으로 강조 표시됩니다.",
        "caption": "알려진 빗변 c, 알려진 변 b, 알려지지 않은 변 a가 있는 직각삼각형 다이어그램.",
        "sides": {
          "a": {
            "label": "a = 찾다",
            "description": "Leg a는 c 및 b에서 해결된 알 수 없는 기본 레그입니다.",
            "status": "unknown"
          },
          "b": {
            "label": "b = known",
            "description": "레그 b는 a와 직각을 이루는 알려진 레그입니다.",
            "status": "known"
          },
          "c": {
            "label": "c = known",
            "description": "빗변 c는 직각삼각형의 가장 긴 변으로 알려져 있습니다.",
            "status": "known"
          }
        },
        "notes": [
          "빗변 c는 입력 쌍에서 가장 긴 변이어야 합니다.",
          "c가 b보다 작거나 같은 경우 어떤 값이 빗변인지 다시 확인하세요.",
          "계산된 a는 입력한 값과 동일한 단위를 갖습니다."
        ]
      },
      "calculator": {
        "outputLabel": "a = 모르는 변",
        "fields": [
          {
            "key": "c",
            "label": "c = 빗변",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = 알고 있는 변",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "누락된 다리 a 공식",
        "paragraphs": [
          "피타고라스 정리(a² + b² = c²)에서 시작하여 a를 풀어서 아래 공식을 얻습니다.",
          "여기서 c는 빗변(직각의 반대쪽, 가장 긴 변)이고, b는 알려진 다리이고, a는 찾으려는 누락된 다리입니다. 주요 연산은 뺄셈입니다. 빗변을 제곱하고 알려진 다리의 제곱을 뺀 다음 남은 값의 제곱근을 구합니다."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "c 및 b에서 레그 a를 찾는 방법",
        "steps": [
          "빗변(c)과 알려진 다리(b)를 올바르게 식별했는지 확인하세요. 빗변은 항상 90° 각도 반대편에 있습니다.",
          "첫 번째 입력란에 빗변 c를 입력합니다.",
          "알려진 구간 b를 두 번째 입력 필드에 입력합니다.",
          "계산을 클릭하여 a 구간을 찾으세요.",
          "a의 결과와 아래 표시된 단계별 작업을 검토하세요."
        ]
      },
      "example": {
        "h2": "예: 다리 a 찾기",
        "intro": "주어진 값: c = 10, b = 6. 빗변이 10이고 변이 6인 직각삼각형의 빠진 변은 8입니다.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "계산 전 중요 확인 사항",
          "paragraphs": [
            "계산이 작동하려면 빗변 c가 b보다 커야 합니다. 모든 직각삼각형에서 빗변은 가장 긴 변입니다. c가 b와 같으면 공식은 = 0을 제공하며 이는 삼각형을 형성할 수 없음을 의미합니다.",
            "c가 b보다 작으면 제곱근 아래의 표현식이 음수가 되고 a에 대한 실제 변 길이가 없습니다. 이 경우 90° 각도와 반대되는 쪽이 어느 쪽인지 다시 확인하세요."
          ],
          "listTitle": "먼저 다음 확인 사항을 사용하세요.",
          "listItems": [
            "c는 직각 반대편입니다.",
            "c는 b보다 큽니다.",
            "두 입력 모두 양수입니다.",
            "c 및 b는 동일한 측정 단위를 사용합니다."
          ]
        },
        {
          "h2": "이 계산기가 유용한 경우",
          "paragraphs": [
            "이 계산기는 빗변과 다리 b를 알고 다리 a를 찾아야 할 때 적합한 도구입니다. It is especially helpful when your diagram labels the known leg as b and the unknown base or height as a.",
            "이 페이지는 측정 확인 용도로도 작동합니다. 계산된 변 a가 측정된 a 변과 매우 다른 경우 삼각형에 실제 90° 각도가 포함되지 않거나 알려진 값 중 하나가 잘못 복사되었을 수 있습니다."
          ],
          "listTitle": "일반적인 예는 다음과 같습니다.",
          "listItems": [
            "경사 길이 c와 높이 b를 알고 있는 경우 기준 거리를 구합니다.",
            "빗변과 수평 거리를 알 때 수직 높이를 구합니다.",
            "c 및 b를 제공하고 a를 요청하는 형상 문제를 해결합니다.",
            "직각 삼각형을 형성하는 건축, 매핑 또는 평면도 측정을 확인합니다."
          ]
        },
        {
          "h2": "답변을 읽는 방법",
          "paragraphs": [
            "Missing Leg a라고 표시된 출력은 b와 직각을 이루는 반대쪽입니다. 빗변 c보다 짧고 0보다 커야 합니다.",
            "결과가 c에 가까우면 알려진 레그 b가 상대적으로 작습니다. 결과가 0에 가까우면 b의 길이는 c의 길이와 거의 같습니다. 두 가지 모두 발생할 수 있지만 답변을 사용하기 전에 입력 레이블을 확인해야 합니다."
          ],
          "listTitle": "유효한 결과는 다음을 충족해야 합니다.",
          "listItems": [
            "a는 0보다 큽니다.",
            "a is less than c.",
            "a² + b²는 c²와 거의 동일합니다.",
            "출력 단위는 c 및 b에 사용되는 단위와 일치합니다."
          ]
        },
        {
          "h2": "일반적인 실수",
          "paragraphs": [
            "가장 큰 위험은 빗변을 다리로 바꾸는 것입니다. 이 계산기는 c가 이미 가장 긴 면이라고 가정하므로 c 값에 잘못 레이블을 지정하면 결과가 부정확해집니다.",
            "두 번째 일반적인 문제는 실수로 빗변 공식을 사용하는 것입니다. 누락된 다리를 찾으려면 빗변 제곱에서 알려진 다리 제곱을 뺀 다음 제곱근을 취합니다."
          ],
          "listTitle": "다음과 같은 실수를 피하세요.",
          "listItems": [
            "다리 b를 빗변 c로 입력합니다.",
            "c² - b² 대신 c² + b²를 사용합니다.",
            "c보다 크거나 같은 b를 입력합니다.",
            "뺄셈 후에 제곱근을 잊어버렸습니다.",
            "서로 다른 단위를 사용하는 측정값을 결합합니다."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "직각 삼각형 변 계산기"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "계산기: 피타고라스의 정리"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "계산기: c와 a를 이용한 한 변 구하기"
        }
      ],
      "faqs": [
        {
          "question": "이 계산기에서 c는 무엇을 의미합니까?",
          "answer": "c는 빗변(90° 각도 반대편)인 직각삼각형의 가장 긴 변입니다. 이 계산기에서는 알려진 두 값 중 하나로 c를 입력합니다."
        },
        {
          "question": "이 계산기에서 b는 무엇을 의미합니까?",
          "answer": "b는 직각삼각형의 두 다리 중 하나입니다. 직각을 이루고 있는 면입니다. 여기서 b는 이미 알고 있는 다리이고 계산기는 이를 c와 함께 사용하여 누락된 다리 a를 찾습니다."
        },
        {
          "question": "이 계산기는 무엇을 찾아내나요?",
          "answer": "사라진 다리 a를 찾습니다. 빗변(c)과 한쪽 다리(b)를 제공하면 계산기는 공식 a = √(c² − b²)를 적용하여 단계별 솔루션으로 알 수 없는 다리를 제공합니다."
        },
        {
          "question": "c가 b보다 작을 수 있습니까?",
          "answer": "아니요. 빗변은 항상 직각삼각형에서 가장 긴 변입니다. c 값이 b보다 작으면 입력이 유효한 직각 삼각형을 나타내지 않습니다. 빗변에 해당하는 측정값을 다시 확인하세요."
        },
        {
          "question": "c 및 b에서 을 어떻게 찾나요?",
          "answer": "빗변을 제곱하고(c²), 알려진 변을 제곱하고(b²), c²에서 b²를 빼고 결과의 제곱근을 구합니다. 공식은 a = √(c² − b²)입니다. 이 계산기에 값을 입력하면 자동으로 답을 얻을 수도 있습니다."
        }
      ]
    }
  },
  "ms": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Kalkulator: Teorem Pythagoras",
      "metaTitle": "Kalkulator: Teorem Pythagoras | Right Triangle Solver",
      "metaDescription": "Cari hipotenus apabila kedua-dua sisi diketahui. Ini adalah identiti utama untuk setiap segitiga bersudut tegak.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Sama ada anda menyelesaikan masalah kerja rumah atau mengukur pepenjuru dalam kehidupan sebenar, alat ini memberi anda jawapan dalam beberapa saat - dengan penyelesaian penuh ditunjukkan langkah demi langkah.",
      "intro": "Cari hipotenus apabila kedua-dua sisi diketahui. Ini adalah identiti utama untuk setiap segitiga bersudut tegak.",
      "quickSummary": {
        "h2": "Perkara yang Selesaikan Kalkulator Pythagoras Ini",
        "intro": "Gunakan halaman ini apabila kedua-dua belah yang bertemu pada sudut 90° diketahui dan bahagian pepenjuru hilang. Kalkulator memfokuskan pada bekas hipotenus klasik, jadi input kekal mudah dan hasilnya mudah untuk diperiksa.",
        "cards": [
          {
            "label": "Nilai yang diketahui",
            "value": "a = sisi bertentangan sudut A; b = sisi bertentangan sudut B"
          },
          {
            "label": "Menemui",
            "value": "c = hipotenus"
          },
          {
            "label": "Formula utama",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Terbaik untuk",
            "value": "Diagonal, tangga, tanjakan, skrin dan kerja rumah geometri"
          }
        ]
      },
      "diagram": {
        "h2": "Rajah Segi Tiga Kanan: Mencari Hipotenus",
        "intro": "Rajah menunjukkan hubungan sisi yang tepat yang digunakan oleh alat. Kedua-dua sisi ialah nilai input yang diketahui, dan sisi senget c ialah hipotenus yang ditemui oleh kalkulator.",
        "caption": "Gambar rajah segi tiga kanan dengan sisi yang diketahui a dan b dan hipotenus tidak diketahui c.",
        "sides": {
          "a": {
            "label": "a = diketahui",
            "description": "sisi a adalah salah satu daripada dua sisi yang membentuk sudut tepat.",
            "status": "known"
          },
          "b": {
            "label": "b = diketahui",
            "description": "sisi b ialah sisi lain yang membentuk sudut tepat.",
            "status": "known"
          },
          "c": {
            "label": "c = cari",
            "description": "Hypotenuse c ialah sisi terpanjang dan terletak bertentangan dengan sudut 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a dan b boleh ditukar; hasil hipotenus akan sama.",
          "Gunakan unit yang sama untuk kedua-dua sisi sebelum mengira.",
          "Jawapan c akan sentiasa lebih besar daripada kedua-dua sisi dalam segi tiga tepat yang sah."
        ]
      },
      "calculator": {
        "outputLabel": "c = hipotenus",
        "fields": [
          {
            "key": "a",
            "label": "a = sisi bertentangan sudut A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = sisi bertentangan sudut B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formula Teorem Pythagoras",
        "paragraphs": [
          "Teorem Pythagoras menyatakan bahawa dalam segi tiga tepat, kuasa dua hipotenus sama dengan hasil tambah kuasa dua dua sisi. Untuk menyelesaikan hipotenus, ambil punca kuasa dua kedua-dua belah.",
          "Dalam formula ini, a dan b ialah dua sisi segi tiga tepat - sisi yang membentuk sudut tepat. c ialah hipotenus, sisi terpanjang, bertentangan dengan sudut tepat. Formula ini hanya berfungsi untuk segi tiga tepat."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Cara Menggunakan Kalkulator Teorem Pythagoras",
        "steps": [
          "Kenal pasti dua sisi segi tiga tepat anda. Ini adalah sisi yang membentuk sudut tepat.",
          "Masukkan sisi a ke dalam medan input pertama.",
          "Masukkan sisi b ke dalam medan input kedua.",
          "Klik Kira untuk mencari hipotenus.",
          "Baca keputusan untuk c, bersama-sama dengan penyelesaian langkah demi langkah."
        ]
      },
      "example": {
        "h2": "Contoh: Cari Hipotenus",
        "intro": "Diberi: a = 6, b = 8. Hiptenus bagi segi tiga tegak dengan sisi 6 dan 8 ialah 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Di mana Kalkulator Ini Berguna",
          "paragraphs": [
            "Kalkulator hipotenus berguna apabila dua jarak berserenjang bergabung menjadi satu jarak pepenjuru. Ia amat membantu apabila lukisan, pelan lantai atau masalah kerja rumah memberikan bahagian mendatar dan menegak tetapi membiarkan bahagian pepenjuru kosong.",
            "Oleh kerana halaman ini hanya menyelesaikan untuk c, ia mengelakkan kekeliruan menukar antara mod sisi. Jika nilai yang anda ketahui ialah dua sisi, ini ialah alat teorem Pythagoras yang difokuskan untuk digunakan."
          ],
          "listTitle": "Contoh biasa termasuk:",
          "listItems": [
            "Mencari pepenjuru segi empat tepat, skrin, susun atur jubin atau bilik.",
            "Mengira panjang tangga dari ketinggian dinding dan jarak tanah.",
            "Menganggarkan panjang cerun tanjakan dari naik dan turun.",
            "Menyemak kerja rumah segi tiga tepat sebelum menyerahkan jawapan akhir."
          ]
        },
        {
          "h2": "Petua Input untuk Keputusan yang Lebih Baik",
          "paragraphs": [
            "Masukkan kedua-dua panjang sisi sebagai nombor positif. Perpuluhan adalah baik, dan kalkulator akan mengekalkan ketepatan yang mencukupi untuk menjadikan kerja langkah demi langkah berguna.",
            "Kedua-dua input mesti menggunakan unit yang sama. Jika a diukur dalam sisi dan b diukur dalam inci, tukar satu ukuran dahulu supaya hasilnya bermakna."
          ],
          "listTitle": "Sebelum anda mengira, semak bahawa:",
          "listItems": [
            "a dan b ialah sisi yang menyentuh sudut 90°.",
            "Tiada input sifar atau negatif.",
            "Kedua-dua nilai diukur dalam unit yang sama.",
            "Anda sedang menyelesaikan untuk hipotenus, bukan sisi yang hilang."
          ]
        },
        {
          "h2": "Cara Membaca Jawapan",
          "paragraphs": [
            "Output berlabel Hypotenuse c ialah sisi bertentangan dengan sudut kanan. Ia adalah sisi pepenjuru dalam rajah dan harus lebih panjang daripada kedua-dua sisi input.",
            "Jika keputusan anda kelihatan lebih kecil daripada a atau b, itu adalah tanda bahawa salah satu input telah disalahlabelkan atau segitiga itu sebenarnya bukan segi tiga tepat."
          ],
          "listTitle": "Semakan kewajaran pantas:",
          "listItems": [
            "c sepatutnya lebih besar daripada a.",
            "c sepatutnya lebih besar daripada b.",
            "c hendaklah kurang daripada + b.",
            "Untuk tiga kali ganda biasa seperti 3-4-5 atau 5-12-13, hasilnya harus sepadan dengan tiga kali ganda yang diketahui."
          ]
        },
        {
          "h2": "Kesilapan Biasa",
          "paragraphs": [
            "Kebanyakan jawapan hipotenus yang salah datang daripada menggunakan formula yang betul pada bahagian yang salah. sisi mestilah dua sisi yang membuat sudut yang betul; hipotenus tidak pernah menjadi input pada halaman ini.",
            "Satu lagi isu biasa ialah berhenti di a² + b². Nilai itu ialah c², bukan c. Langkah punca kuasa dua ialah apa yang menjadikan nilai kuasa dua kembali ke panjang sisi sebenar."
          ],
          "listTitle": "Elakkan kesilapan ini:",
          "listItems": [
            "Menggunakan formula pada segi tiga yang tidak mempunyai sudut 90°.",
            "Memasuki bahagian pepenjuru sebagai a atau b.",
            "Terlupa mengambil punca kuasa dua pada penghujungnya.",
            "Mencampur unit seperti inci dan sisi dalam pengiraan yang sama."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator Sebelah Segi Tiga Kanan"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Kalkulator: Cari Sisi dari c dan a"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Kalkulator: Cari Sisi dari c dan b"
        }
      ],
      "faqs": [
        {
          "question": "Apakah teorem Pythagoras?",
          "answer": "Teorem Pythagoras ialah formula yang mengaitkan tiga sisi segi tiga tegak: a² + b² = c². Ia mengatakan bahawa kuasa dua hipotenus sama dengan jumlah kuasa dua dua sisi. Ia hanya terpakai kepada segi tiga tepat."
        },
        {
          "question": "Apakah maksud c dalam formula?",
          "answer": "Dalam formula c² = a² + b², c ialah hipotenus - sisi terpanjang bagi segi tiga tepat. Ia adalah sisi tepat di seberang sudut 90°."
        },
        {
          "question": "Bolehkah saya menggunakan kalkulator ini untuk mana-mana segi tiga?",
          "answer": "Tidak. Kalkulator ini menggunakan teorem Pythagoras, yang hanya berfungsi untuk segi tiga tegak. Jika segi tiga anda tidak mempunyai sudut 90°, formula tidak akan memberikan hasil yang betul."
        },
        {
          "question": "Bagaimanakah saya mencari hipotenus?",
          "answer": "Untuk mencari hipotenus, segi empat sama kedua-dua sisi (a² dan b²), tambahkannya bersama-sama dan ambil punca kuasa dua hasil tambah. Formulanya ialah c = √(a² + b²). Atau hanya masukkan nilai anda di atas dan biarkan kalkulator melakukannya."
        },
        {
          "question": "Apakah a dan b dalam segi tiga tepat?",
          "answer": "a dan b ialah dua sisi - sisi yang membentuk sudut tepat. Ia boleh menjadi apa-apa panjang positif, dan tidak kira yang mana satu yang anda panggil a atau b. Hipotenus (c) sentiasa bahagian yang tinggal."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Kalkulator: Cari Sisi dari c dan a",
      "metaTitle": "Kalkulator: Cari Sisi dari c dan a | Right Triangle Solver",
      "metaDescription": "Cari sisi b apabila hipotenus c and sisi lain a diketahui.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Ingat: c sentiasa hipotenus - sisi terpanjang, bertentangan dengan sudut kanan. Ia bukan sisi. Jika anda mempunyai dua sisi dan sebaliknya memerlukan hipotenus, gunakan Kalkulator Teorem Pythagoras.",
      "intro": "Cari sisi b apabila hipotenus c and sisi lain a diketahui.",
      "quickSummary": {
        "h2": "Perkara yang Selesaikan Kalkulator sisi Yang Hilang Ini",
        "intro": "Gunakan halaman ini apabila hipotenus dan sisi a diketahui, tetapi sisi sebelah lagi tiada. Kalkulator menyusun semula teorem Pythagoras untuk menolak sisi yang diketahui daripada hipotenus sebelum mengambil punca kuasa dua.",
        "cards": [
          {
            "label": "Nilai yang diketahui",
            "value": "c = hipotenus; a = sisi diketahui"
          },
          {
            "label": "Menemui",
            "value": "b = sisi tidak diketahui"
          },
          {
            "label": "Formula utama",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Cek yang diperlukan",
            "value": "Memerlukan c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Rajah Segi Tiga Kanan: Mencari sisi b",
        "intro": "Gambar rajah menandakan c dan a sebagai nilai yang anda sudah tahu. sisi menegak b diserlahkan sebagai bahagian yang hilang yang diselesaikan oleh kalkulator ini.",
        "caption": "Gambar rajah segi tiga kanan dengan hipotenus diketahui c, sisi diketahui a dan sisi tidak diketahui b.",
        "sides": {
          "a": {
            "label": "a = diketahui",
            "description": "sisi a ialah sisi yang diketahui di sepanjang pangkal segi tiga tepat.",
            "status": "known"
          },
          "b": {
            "label": "b = cari",
            "description": "sisi b ialah sisi yang tidak diketahui diselesaikan dengan menolak a^2 daripada c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = diketahui",
            "description": "Hypotenuse c ialah sisi terpanjang yang diketahui bertentangan dengan sudut kanan.",
            "status": "known"
          }
        },
        "notes": [
          "c mestilah hipotenus, bukan sebelah sisi.",
          "Jika c kurang daripada atau sama dengan a, input tidak membentuk segi tiga tepat yang sah.",
          "Hasilnya b menggunakan unit yang sama seperti c dan a."
        ]
      },
      "calculator": {
        "outputLabel": "b = sisi tidak diketahui",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenus",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = sisi diketahui",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formula b sisi Hilang",
        "paragraphs": [
          "Formula untuk mencari sisi b diperoleh daripada teorem Pythagoras (a² + b² = c²). Penyusunan semula untuk b memberikan formula di bawah.",
          "Di mana c ialah hipotenus (sisi terpanjang bagi segi tiga tepat), a ialah sisi yang diketahui dan b ialah sisi yang hilang yang anda selesaikan. Perhatikan penolakan: anda menolak kuasa dua sisi yang diketahui daripada kuasa dua hipotenus, kemudian ambil punca kuasa dua."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Cara Cari sisi b Dari c dan a",
        "steps": [
          "Sahkan bahawa c ialah hipotenus dan a ialah sisi. Hipotenus sentiasa sisi terpanjang.",
          "Masukkan hipotenus c ke dalam medan input pertama.",
          "Masukkan sisi yang diketahui a ke dalam medan input kedua.",
          "Klik Kira untuk mencari sisi yang hilang.",
          "Baca keputusan untuk b, bersama-sama dengan penyelesaian langkah demi langkah penuh."
        ]
      },
      "example": {
        "h2": "Contoh: Cari sisi b",
        "intro": "Diberi: c = 13, a = 5. sisi segi tiga tegak yang hilang dengan hipotenus 13 dan sisi 5 ialah 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Semakan Penting Sebelum Mengira",
          "paragraphs": [
            "Sebelum anda menggunakan formula ini, pastikan c lebih besar daripada a. Hipotenus sentiasa sisi terpanjang bagi segi tiga tegak. Jika c bersamaan dengan a, anda akan mendapat b = 0, yang bermaksud tiada segi tiga wujud.",
            "Jika c kurang daripada a, ungkapan di bawah punca kuasa dua menjadi negatif. Ini bermakna dua nilai input tidak boleh menerangkan segi tiga tepat sebenar dengan c sebagai hipotenus."
          ],
          "listTitle": "Gunakan semakan ini dahulu:",
          "listItems": [
            "c adalah bertentangan dengan sudut 90°.",
            "c lebih besar daripada a.",
            "Kedua-dua nilai adalah positif.",
            "c dan a menggunakan unit yang sama."
          ]
        },
        {
          "h2": "Di mana Kalkulator Ini Berguna",
          "paragraphs": [
            "Kalkulator ini berguna apabila ukuran pepenjuru atau cerun diketahui, satu sisi berserenjang diketahui, dan sisi berserenjang yang satu lagi hilang. Ia ialah alat yang difokuskan untuk c-and-a case, jadi setiap penjelasan pada halaman menunjukkan ke arah mencari b.",
            "Ia juga boleh membantu mengesahkan ukuran. Jika nilai yang diukur untuk b tidak sepadan dengan keputusan kalkulator, segi tiga mungkin tidak betul, hipotenus mungkin disalahlabelkan atau satu ukuran mungkin menggunakan unit yang berbeza."
          ],
          "listTitle": "Contoh biasa termasuk:",
          "listItems": [
            "Mencari ketinggian dinding apabila panjang tangga c dan jarak tanah a diketahui.",
            "Mencari kenaikan menegak suatu cerun apabila panjang cerun dan larian mendatar diketahui.",
            "Menyemak masalah kerja rumah segi tiga tepat yang memberikan c dan a.",
            "Mengesahkan ukuran susun atur untuk rangka, landskap, tanjakan atau pelan lantai."
          ]
        },
        {
          "h2": "Cara Membaca Jawapan",
          "paragraphs": [
            "Output berlabel sisi hilang b ialah panjang sisi satu lagi yang membentuk sudut tepat dengan a. Ia bukan hipotenus dan harus lebih pendek daripada c.",
            "Jika b yang dikira adalah sangat kecil, sisi anda yang diketahui a sangat hampir dengan hipotenus c. Itu boleh sah, tetapi ia patut menyemak gambar rajah dan unit sebelum menggunakan nilai."
          ],
          "listTitle": "Keputusan yang sah harus memenuhi:",
          "listItems": [
            "b lebih besar daripada sifar.",
            "b kurang daripada c.",
            "a² + b² adalah lebih kurang sama dengan c².",
            "Unit keluaran sepadan dengan unit input."
          ]
        },
        {
          "h2": "Kesilapan Biasa",
          "paragraphs": [
            "Ralat yang paling biasa ialah menganggap c sebagai sisi. Dalam kalkulator ini, c mestilah hipotenus, iaitu sisi terpanjang dan sisi bertentangan dengan sudut tepat.",
            "Satu lagi kesilapan yang kerap berlaku ialah menambah petak dan bukannya menolak. Penambahan mendapati hipotenus; penolakan mendapati sisi yang hilang dari hipotenus."
          ],
          "listTitle": "Elakkan kesilapan ini:",
          "listItems": [
            "Meletakkan sisi yang diketahui ke dalam medan hipotenus.",
            "Menggunakan c² + a² dan bukannya c² - a².",
            "Memasukkan lebih besar daripada atau sama dengan c.",
            "Berhenti di b² dan bukannya mengambil punca kuasa dua.",
            "Unit pencampuran seperti meter dan sentimeter."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator Sebelah Segi Tiga Kanan"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Kalkulator: Teorem Pythagoras"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Kalkulator: Cari Sisi dari c dan b"
        }
      ],
      "faqs": [
        {
          "question": "Apakah maksud c dalam kalkulator ini?",
          "answer": "c ialah hipotenus bagi segi tiga tepat - sisi terpanjang, terletak bertentangan dengan sudut 90°. Ia bukan sisi. Anda memasukkan c sebagai salah satu daripada dua nilai yang diketahui dalam kalkulator ini."
        },
        {
          "question": "Apakah maksud dalam kalkulator ini?",
          "answer": "a ialah salah satu daripada dua sisi segi tiga tepat. Ia adalah salah satu sisi yang membentuk sudut yang betul. Dalam kalkulator ini, a ialah sisi yang anda sudah tahu."
        },
        {
          "question": "Apakah yang ditemui oleh kalkulator ini?",
          "answer": "Kalkulator ini mencari sisi yang hilang b. Memandangkan hipotenus c dan sisi a, ia mengira b = √(c² − a²) dan menunjukkan kepada anda penyelesaian langkah demi langkah."
        },
        {
          "question": "Bolehkah c lebih kecil daripada a?",
          "answer": "Tidak. Dalam segi tiga tepat, hipotenus sentiasa sisi terpanjang. Jika c lebih kecil daripada a, nilai tersebut tidak membentuk segi tiga tepat yang sah. Periksa ukuran mana yang merupakan hipotenus sebelum mengira."
        },
        {
          "question": "Bagaimanakah saya boleh mencari b daripada c dan a?",
          "answer": "Kuadratkan hipotenus (c²), kuasa duakan sisi yang diketahui (a²), tolak a² daripada c², dan ambil punca kuasa dua. Formulanya ialah b = √(c² − a²). Atau masukkan nilai anda ke dalam kalkulator ini untuk jawapan segera."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Kalkulator: Cari Sisi dari c dan b",
      "metaTitle": "Kalkulator: Cari Sisi dari c dan b | Right Triangle Solver",
      "metaDescription": "Cari sisi a apabila hipotenus c and sisi b diketahui.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Perlu diingat: c ialah hipotenus, bukan sisi. Ia adalah sisi terpanjang bagi segi tiga dan terletak bertentangan dengan sudut 90°. Jika anda mempunyai kedua-dua sisi dan memerlukan hipotenus, gunakan Kalkulator Teorem Pythagoras sebaliknya.",
      "intro": "Cari sisi a apabila hipotenus c and sisi b diketahui.",
      "quickSummary": {
        "h2": "Perkara yang Selesaikan Kalkulator sisi Yang Hilang Ini",
        "intro": "Gunakan halaman ini apabila anda mengetahui hipotenus dan sisi b, tetapi memerlukan sisi a. Ia memastikan bahagian yang diketahui b berasingan daripada bahagian yang tidak diketahui a supaya formula dan hasil sepadan dengan label pada segi tiga anda.",
        "cards": [
          {
            "label": "Nilai yang diketahui",
            "value": "c = hipotenus; b = sisi diketahui"
          },
          {
            "label": "Menemui",
            "value": "a = sisi tidak diketahui"
          },
          {
            "label": "Formula utama",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Cek yang diperlukan",
            "value": "Memerlukan c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Rajah Segi Tiga Kanan: Mencari sisi a",
        "intro": "Rajah menunjukkan c sebagai hipotenus yang diketahui dan b sebagai sisi yang diketahui. sisi pangkal a diserlahkan sebagai nilai yang hilang dikembalikan oleh kalkulator.",
        "caption": "Gambar rajah segi tiga kanan dengan hipotenus diketahui c, sisi diketahui b dan sisi tidak diketahui a.",
        "sides": {
          "a": {
            "label": "a = cari",
            "description": "sisi a ialah sisi pangkal yang tidak diketahui yang diselesaikan daripada c dan b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = diketahui",
            "description": "sisi b ialah sisi yang dikenali yang membentuk sudut tepat dengan a.",
            "status": "known"
          },
          "c": {
            "label": "c = diketahui",
            "description": "Hypotenuse c ialah sisi terpanjang yang diketahui bagi segi tiga tepat.",
            "status": "known"
          }
        },
        "notes": [
          "Hipotenus c mestilah sisi terpanjang dalam pasangan input.",
          "Jika c kurang daripada atau sama dengan b, semak semula nilai mana yang hipotenus.",
          "A yang dikira mempunyai unit yang sama dengan nilai yang anda masukkan."
        ]
      },
      "calculator": {
        "outputLabel": "a = sisi tidak diketahui",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenus",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = sisi diketahui",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formula a sisi Hilang",
        "paragraphs": [
          "Bermula daripada teorem Pythagoras (a² + b² = c²), selesaikan a untuk mendapatkan formula di bawah.",
          "Di mana c ialah hipotenus (sisi terpanjang, bertentangan dengan sudut kanan), b ialah sisi yang diketahui, dan a ialah sisi yang hilang yang anda ingin cari. Operasi utama ialah penolakan: kuasa duakan hipotenus, tolak kuasa dua sisi yang diketahui, kemudian ambil punca kuasa dua apa yang tinggal."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Cara Cari sisi a Dari c dan b",
        "steps": [
          "Pastikan anda telah mengenal pasti hipotenus (c) dan sisi yang diketahui dengan betul (b). Hipotenus sentiasa bertentangan dengan sudut 90°.",
          "Masukkan hipotenus c ke dalam medan input pertama.",
          "Masukkan sisi yang diketahui b ke dalam medan input kedua.",
          "Klik Kira untuk mencari sisi a.",
          "Semak keputusan untuk a dan kerja langkah demi langkah yang ditunjukkan di bawah."
        ]
      },
      "example": {
        "h2": "Contoh: Cari sisi a",
        "intro": "Diberi: c = 10, b = 6. sisi segi tiga tegak yang hilang dengan hipotenus 10 dan sisi 6 ialah 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Semakan Penting Sebelum Mengira",
          "paragraphs": [
            "Hipotenus c mestilah lebih besar daripada b untuk pengiraan berfungsi. Dalam setiap segi tiga tepat, hipotenus ialah sisi terpanjang. Jika c bersamaan dengan b, formula memberikan = 0, yang bermaksud tiada segitiga boleh dibentuk.",
            "Jika c kurang daripada b, ungkapan di bawah punca kuasa dua menjadi negatif dan tiada panjang sisi sebenar untuk a. Dalam kes itu, semak semula sisi mana yang bertentangan dengan sudut 90°."
          ],
          "listTitle": "Gunakan semakan ini dahulu:",
          "listItems": [
            "c ialah sisi bertentangan dengan sudut tepat.",
            "c lebih besar daripada b.",
            "Kedua-dua input adalah nombor positif.",
            "c dan b menggunakan unit ukuran yang sama."
          ]
        },
        {
          "h2": "Di mana Kalkulator Ini Berguna",
          "paragraphs": [
            "Kalkulator ini adalah alat yang tepat apabila anda mengetahui hipotenus dan sisi b dan perlu mencari sisi a. Ia amat membantu apabila rajah anda melabelkan sisi yang dikenali sebagai b dan tapak atau ketinggian yang tidak diketahui sebagai a.",
            "Halaman ini juga berfungsi sebagai semakan ukuran. Jika sisi yang dikira a sangat berbeza daripada sisi yang diukur a, segi tiga mungkin tidak termasuk sudut 90° sebenar atau salah satu nilai yang diketahui mungkin telah disalin dengan salah."
          ],
          "listTitle": "Contoh biasa termasuk:",
          "listItems": [
            "Mencari jarak tapak apabila panjang cerun c dan ketinggian b diketahui.",
            "Mencari ketinggian menegak apabila hipotenus dan jarak mengufuk diketahui.",
            "Menyelesaikan masalah geometri yang memberikan c dan b dan meminta a.",
            "Menyemak pembinaan, pemetaan atau ukuran pelan lantai yang membentuk segi tiga tepat."
          ]
        },
        {
          "h2": "Cara Membaca Jawapan",
          "paragraphs": [
            "Output berlabel sisi hilang a ialah sisi lain yang membentuk sudut tepat dengan b. Ia sepatutnya lebih pendek daripada hipotenus c dan lebih besar daripada sifar.",
            "Jika keputusannya hampir dengan c, sisi yang diketahui b adalah agak kecil. Jika hasilnya menghampiri sifar, b hampir sama panjang dengan c. Kedua-duanya boleh berlaku, tetapi label input harus diperiksa sebelum menggunakan jawapan."
          ],
          "listTitle": "Keputusan yang sah harus memenuhi:",
          "listItems": [
            "a lebih besar daripada sifar.",
            "a adalah kurang daripada c.",
            "a² + b² adalah lebih kurang sama dengan c².",
            "Unit output sepadan dengan unit yang digunakan untuk c dan b."
          ]
        },
        {
          "h2": "Kesilapan Biasa",
          "paragraphs": [
            "Risiko terbesar ialah menukar hipotenus dengan sisi. Kalkulator ini menganggap c sudah menjadi sisi terpanjang, jadi nilai c yang tersalah label akan menjadikan keputusan tidak betul.",
            "Isu biasa kedua ialah menggunakan formula hipotenus secara tidak sengaja. Untuk mencari sisi yang hilang, anda tolak kuasa dua sisi yang diketahui daripada segi empat sama hipotenus, kemudian ambil punca kuasa dua."
          ],
          "listTitle": "Elakkan kesilapan ini:",
          "listItems": [
            "Memasuki sisi b sebagai hipotenus c.",
            "Menggunakan c² + b² dan bukannya c² - b².",
            "Memasuki b lebih besar daripada atau sama dengan c.",
            "Melupakan punca kuasa dua selepas menolak.",
            "Menggabungkan ukuran yang menggunakan unit yang berbeza."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator Sebelah Segi Tiga Kanan"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Kalkulator: Teorem Pythagoras"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Kalkulator: Cari Sisi dari c dan a"
        }
      ],
      "faqs": [
        {
          "question": "Apakah maksud c dalam kalkulator ini?",
          "answer": "c ialah hipotenus - sisi terpanjang bagi segi tiga tepat, bertentangan dengan sudut 90°. Dalam kalkulator ini, anda memasukkan c sebagai salah satu daripada dua nilai anda yang diketahui."
        },
        {
          "question": "Apakah maksud b dalam kalkulator ini?",
          "answer": "b ialah salah satu daripada dua sisi segi tiga tepat. Ia adalah sisi yang membentuk sudut tepat. Di sini, b ialah sisi yang anda sudah tahu, dan kalkulator menggunakannya bersama-sama dengan c untuk mencari sisi yang hilang a."
        },
        {
          "question": "Apakah yang ditemui oleh kalkulator ini?",
          "answer": "Ia menemui sisi yang hilang a. Anda menyediakan hipotenus (c) dan satu sisi (b), dan kalkulator menggunakan formula a = √(c² − b²) untuk memberi anda sisi yang tidak diketahui dengan penyelesaian langkah demi langkah."
        },
        {
          "question": "Bolehkah c lebih kecil daripada b?",
          "answer": "Tidak. Hiptenus sentiasa sisi terpanjang dalam segi tiga tegak. Jika nilai anda untuk c lebih kecil daripada b, input tidak mewakili segi tiga tepat yang sah. Semak semula ukuran yang sepadan dengan hipotenus."
        },
        {
          "question": "Bagaimanakah saya boleh mencari daripada c dan b?",
          "answer": "Kuadratkan hipotenus (c²), kuasa duakan sisi yang diketahui (b²), tolak b² daripada c², dan ambil punca kuasa dua hasilnya. Formulanya ialah a = √(c² − b²). Anda juga boleh memasukkan nilai anda ke dalam kalkulator ini untuk mendapatkan jawapan secara automatik."
        }
      ]
    }
  },
  "pl": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Kalkulator: Twierdzenie Pitagorasa",
      "metaTitle": "Kalkulator: Twierdzenie Pitagorasa | Right Triangle Solver",
      "metaDescription": "Znajdź przeciwprostokątną, gdy znane są obie przyprostokątne. Jest to podstawowa zależność dla każdego trójkąta prostokątnego.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Niezależnie od tego, czy rozwiązujesz zadanie domowe, czy mierzysz przekątną w prawdziwym życiu, to narzędzie da Ci odpowiedź w ciągu kilku sekund - z pełnym rozwiązaniem pokazanym krok po kroku.",
      "intro": "Znajdź przeciwprostokątną, gdy znane są obie przyprostokątne. Jest to podstawowa zależność dla każdego trójkąta prostokątnego.",
      "quickSummary": {
        "h2": "Co rozwiązuje ten kalkulator pitagorejski",
        "intro": "Użyj tej strony, jeśli znane są dwa boki spotykające się pod kątem 90° i brakuje boku ukośnego. Kalkulator skupia się na klasycznym przypadku przeciwprostokątnej, więc wprowadzanie danych jest proste, a wynik łatwy do sprawdzenia.",
        "cards": [
          {
            "label": "Znane wartości",
            "value": "a = przyprostokątna naprzeciw kąta A; b = przyprostokątna naprzeciw kąta B"
          },
          {
            "label": "Znaleziska",
            "value": "c = przeciwprostokątna"
          },
          {
            "label": "Główna formuła",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Najlepsze dla",
            "value": "Przekątne, drabiny, rampy, ekrany i zadania domowe z geometrii"
          }
        ]
      },
      "diagram": {
        "h2": "Schemat trójkąta prostokątnego: znajdowanie przeciwprostokątnej",
        "intro": "Diagram pokazuje dokładną zależność boczną wykorzystywaną przez narzędzie. Obie ramiona to znane wartości wejściowe, a nachylony bok c to przeciwprostokątna wykryta przez kalkulator.",
        "caption": "Schemat trójkąta prostokątnego ze znanymi nogami a i b oraz nieznaną przeciwprostokątną c.",
        "sides": {
          "a": {
            "label": "a = znane",
            "description": "Noga a to jeden z dwóch boków tworzących kąt prosty.",
            "status": "known"
          },
          "b": {
            "label": "b = znany",
            "description": "Noga b to druga strona tworząca kąt prosty.",
            "status": "known"
          },
          "c": {
            "label": "c = znajdź",
            "description": "Przeciwprostokątna c jest najdłuższym bokiem i leży naprzeciwko kąta 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a i b można zamienić; wynik przeciwprostokątnej będzie taki sam.",
          "Przed obliczeniem użyj tej samej jednostki dla obu nóg.",
          "Odpowiedź c będzie zawsze większa niż którakolwiek z nóg w prawidłowym trójkącie prostokątnym."
        ]
      },
      "calculator": {
        "outputLabel": "c = przeciwprostokątna",
        "fields": [
          {
            "key": "a",
            "label": "a = przyprostokątna naprzeciw kąta A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = przyprostokątna naprzeciw kąta B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Wzór twierdzenia Pitagorasa",
        "paragraphs": [
          "Twierdzenie Pitagorasa stwierdza, że ​​w trójkącie prostokątnym kwadrat przeciwprostokątnej jest równy sumie kwadratów dwóch nóg. Aby obliczyć przeciwprostokątną, weź pierwiastek kwadratowy z obu stron.",
          "W tym wzorze a i b to dwie nogi trójkąta prostokątnego - boki tworzące kąt prosty. c to przeciwprostokątna, najdłuższy bok przeciwny do kąta prostego. Ta formuła działa tylko w przypadku trójkątów prostokątnych."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Jak korzystać z kalkulatora twierdzenia Pitagorasa",
        "steps": [
          "Wskaż dwie nogi prawego trójkąta. To są boki tworzące kąt prosty.",
          "Wpisz nogę a w pierwszym polu wejściowym.",
          "Wpisz nogę b w drugim polu wejściowym.",
          "Kliknij Oblicz, aby znaleźć przeciwprostokątną.",
          "Przeczytaj wynik dla c wraz z rozwiązaniem krok po kroku."
        ]
      },
      "example": {
        "h2": "Przykład: Znajdź przeciwprostokątną",
        "intro": "Dane: a = 6, b = 8. Przeciwprostokątna trójkąta prostokątnego o nogach 6 i 8 wynosi 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Gdzie ten kalkulator jest przydatny",
          "paragraphs": [
            "Kalkulator przeciwprostokątnej jest przydatny, gdy dwie prostopadłe odległości łączą się w jedną odległość po przekątnej. Jest to szczególnie przydatne, gdy rysunek, plan piętra lub zadanie domowe przedstawiają boki poziome i pionowe, ale pozostawiają stronę ukośną pustą.",
            "Ponieważ ta strona dotyczy tylko c, pozwala uniknąć zamieszania związanego z przełączaniem między trybami bocznymi. Jeśli znane wartości to dwie nogi, jest to narzędzie skupiające się na twierdzeniu Pitagorasa."
          ],
          "listTitle": "Typowe przykłady obejmują:",
          "listItems": [
            "Znajdowanie przekątnej prostokąta, ekranu, układu płytek lub pokoju.",
            "Obliczanie długości drabiny na podstawie wysokości ściany i odległości od podłoża.",
            "Szacowanie długości nachylenia rampy od wzniesienia i biegu.",
            "Sprawdzanie zadania domowego z trójkąta prostokątnego przed przesłaniem ostatecznej odpowiedzi."
          ]
        },
        {
          "h2": "Wskazówki dotyczące wprowadzania danych, aby uzyskać lepsze wyniki",
          "paragraphs": [
            "Wprowadź obie długości nóg jako liczby dodatnie. Ułamki dziesiętne są w porządku, a kalkulator będzie zachowywał wystarczającą precyzję, aby praca krok po kroku była przydatna.",
            "Obydwa wejścia muszą używać tej samej jednostki. Jeśli a jest mierzone w stopach, a b w calach, najpierw przelicz jeden pomiar, aby wynik był miarodajny."
          ],
          "listTitle": "Zanim dokonasz obliczeń, sprawdź, czy:",
          "listItems": [
            "a i b to boki stykające się z kątem 90°.",
            "Żadne wejście nie jest zerowe ani ujemne.",
            "Obie wartości mierzone są w tej samej jednostce.",
            "Rozwiązujesz przeciwprostokątną, a nie brakującą nogę."
          ]
        },
        {
          "h2": "Jak czytać odpowiedź",
          "paragraphs": [
            "Wynik oznaczony jako Przeciwprostokątna c to strona przeciwna do kąta prostego. Jest to przekątna na schemacie i powinna być dłuższa niż obie nogi wejściowe.",
            "Jeśli wynik wygląda na mniejszy niż a lub b, oznacza to, że jedno z wejść zostało błędnie oznaczone lub że trójkąt nie jest w rzeczywistości trójkątem prostokątnym."
          ],
          "listTitle": "Szybka kontrola zasadności:",
          "listItems": [
            "c powinien być większy niż a.",
            "c powinno być większe niż b.",
            "c powinien być mniejszy niż + b.",
            "W przypadku typowych trójek, takich jak 3-4-5 lub 5-12-13, wynik powinien odpowiadać znanej trójce."
          ]
        },
        {
          "h2": "Typowe błędy",
          "paragraphs": [
            "Większość błędnych odpowiedzi na przeciwprostokątną wynika z użycia prawidłowego wzoru po niewłaściwych stronach. Nogi muszą stanowić dwie strony tworzące kąt prosty; przeciwprostokątna nigdy nie jest danymi wejściowymi na tej stronie.",
            "Innym częstym problemem jest zatrzymanie się na a² + b². Ta wartość to c², a nie c. Krok pierwiastkowy zamienia wartość kwadratową z powrotem w rzeczywistą długość boku."
          ],
          "listTitle": "Unikaj tych błędów:",
          "listItems": [
            "Użycie wzoru na trójkącie, który nie ma kąta 90°.",
            "Wprowadzanie strony ukośnej jako a lub b.",
            "Zapominając wziąć pierwiastek kwadratowy na końcu.",
            "Mieszanie jednostek, takich jak cale i stopy, w tym samym obliczeniu."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator prawej strony trójkąta"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Kalkulator: Brakująca przyprostokątna (z c i a)"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Kalkulator: Brakująca przyprostokątna (z c i b)"
        }
      ],
      "faqs": [
        {
          "question": "Co to jest twierdzenie Pitagorasa?",
          "answer": "Twierdzenie Pitagorasa to wzór łączący trzy boki trójkąta prostokątnego: a² + b² = c². Mówi, że kwadrat przeciwprostokątnej jest równy sumie kwadratów dwóch nóg. Dotyczy to tylko trójkątów prostokątnych."
        },
        {
          "question": "Co oznacza c we wzorze?",
          "answer": "We wzorze c² = a² + b² c jest przeciwprostokątną - najdłuższym bokiem trójkąta prostokątnego. Jest to strona znajdująca się naprzeciwko kąta 90°."
        },
        {
          "question": "Czy mogę użyć tego kalkulatora do obliczenia dowolnego trójkąta?",
          "answer": "Nie. W tym kalkulatorze zastosowano twierdzenie Pitagorasa, które działa tylko w przypadku trójkątów prostokątnych. Jeśli Twój trójkąt nie ma kąta 90°, formuła nie da prawidłowego wyniku."
        },
        {
          "question": "Jak znaleźć przeciwprostokątną?",
          "answer": "Aby znaleźć przeciwprostokątną, podnieś obie nogi do kwadratu (a² i b²), dodaj je do siebie i oblicz pierwiastek kwadratowy z sumy. Formuła to c = √(a² + b²). Możesz też po prostu wpisać swoje wartości powyżej i pozwolić, aby kalkulator to zrobił."
        },
        {
          "question": "Co to są a i b w trójkącie prostokątnym?",
          "answer": "a i b to dwie nogi - boki tworzące kąt prosty. Mogą mieć dowolną dodatnią długość i nie ma znaczenia, który z nich nazwiesz a czy b. Przeciwprostokątna (c) jest zawsze pozostałą stroną."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Kalkulator: Brakująca przyprostokątna (z c i a)",
      "metaTitle": "Kalkulator: Brakująca przyprostokątna (z c i a) | Right Triangle Solver",
      "metaDescription": "Znajdź przyprostokątną b, gdy znana jest przeciwprostokątna c i druga przyprostokątna a.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Pamiętaj: c to zawsze przeciwprostokątna - najdłuższy bok, przeciwny do kąta prostego. To nie jest noga. Jeśli masz dwie nogi i zamiast tego potrzebujesz przeciwprostokątnej, użyj kalkulatora twierdzenia Pitagorasa.",
      "intro": "Znajdź przyprostokątną b, gdy znana jest przeciwprostokątna c i druga przyprostokątna a.",
      "quickSummary": {
        "h2": "Co rozwiązuje ten kalkulator brakującej nogi",
        "intro": "Użyj tej strony, jeśli znana jest przeciwprostokątna i odnoga a, ale brakuje drugiej nogi. Kalkulator przestawia twierdzenie Pitagorasa, aby przed obliczeniem pierwiastka kwadratowego odjąć znaną nogę od przeciwprostokątnej.",
        "cards": [
          {
            "label": "Znane wartości",
            "value": "c = przeciwprostokątna; a = znana przyprostokątna"
          },
          {
            "label": "Znaleziska",
            "value": "b = nieznana przyprostokątna"
          },
          {
            "label": "Główna formuła",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Wymagane sprawdzenie",
            "value": "Wymaga c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Schemat prawego trójkąta: Znajdowanie nogi b",
        "intro": "Na schemacie zaznaczono c i a jako wartości, które już znasz. Odnoga pionowa b jest podświetlona jako brakujący bok, który rozwiązuje ten kalkulator.",
        "caption": "Schemat trójkąta prostokątnego ze znaną przeciwprostokątną c, znaną nogą a i nieznaną nogą b.",
        "sides": {
          "a": {
            "label": "a = znane",
            "description": "Noga a to znana noga wzdłuż podstawy prawego trójkąta.",
            "status": "known"
          },
          "b": {
            "label": "b = znajdź",
            "description": "Odnoga b to nieznana odnoga rozwiązana poprzez odjęcie a^2 od c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = znany",
            "description": "Przeciwprostokątna c to znany najdłuższy bok leżący naprzeciw kąta prostego.",
            "status": "known"
          }
        },
        "notes": [
          "c musi być przeciwprostokątną, a nie jedną z nóg.",
          "Jeżeli c jest mniejsze lub równe a, dane wejściowe nie tworzą prawidłowego trójkąta prostokątnego.",
          "Wynik b wykorzystuje tę samą jednostkę co c i a."
        ]
      },
      "calculator": {
        "outputLabel": "b = nieznana przyprostokątna",
        "fields": [
          {
            "key": "c",
            "label": "c = przeciwprostokątna",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = znana przyprostokątna",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formuła brakującej nogi b",
        "paragraphs": [
          "Wzór na znalezienie nogi b wywodzi się z twierdzenia Pitagorasa (a² + b² = c²). Zmiana układu dla b daje poniższy wzór.",
          "Gdzie c to przeciwprostokątna (najdłuższy bok prawego trójkąta), a to znana noga, a b to brakująca noga, której szukasz. Zwróć uwagę na odejmowanie: odejmujesz kwadrat znanej nogi od kwadratu przeciwprostokątnej, a następnie wyciągasz pierwiastek kwadratowy."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Jak znaleźć nogę b z c i a",
        "steps": [
          "Potwierdź, że c jest przeciwprostokątną, a a nogą. Przeciwprostokątna jest zawsze najdłuższym bokiem.",
          "Wprowadź przeciwprostokątną c w pierwszym polu wejściowym.",
          "Wprowadź znaną nogę a w drugim polu wejściowym.",
          "Kliknij Oblicz, aby znaleźć brakującą nogę.",
          "Przeczytaj wynik dla b wraz z pełnym rozwiązaniem krok po kroku."
        ]
      },
      "example": {
        "h2": "Przykład: Znajdź nogę b",
        "intro": "Dane: c = 13, a = 5. Brakująca odnoga trójkąta prostokątnego z przeciwprostokątną 13 i odnogą 5 wynosi 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Ważna kontrola przed obliczeniem",
          "paragraphs": [
            "Przed użyciem tej formuły upewnij się, że c jest większe niż a. Przeciwprostokątna jest zawsze najdłuższym bokiem trójkąta prostokątnego. Jeśli c równa się a, otrzymasz b = 0, co oznacza, że ​​trójkąt nie istnieje.",
            "Jeśli c jest mniejsze niż a, wyrażenie pod pierwiastkiem kwadratowym staje się ujemne. Oznacza to, że dwie wartości wejściowe nie mogą opisać prawdziwego trójkąta prostokątnego z c jako przeciwprostokątną."
          ],
          "listTitle": "Najpierw użyj tych kontroli:",
          "listItems": [
            "c jest przeciwny do kąta 90°.",
            "c jest większy niż a.",
            "Obie wartości są dodatnie.",
            "c i a używają tej samej jednostki."
          ]
        },
        {
          "h2": "Gdzie ten kalkulator jest przydatny",
          "paragraphs": [
            "Kalkulator ten jest przydatny, gdy znany jest pomiar przekątnej lub nachylenia, znana jest jedna prostopadła strona, a brakuje drugiej prostopadłej. Jest to narzędzie skupiające się na c i etui, więc każde wyjaśnienie na stronie wskazuje na znalezienie b.",
            "Może również pomóc w weryfikacji pomiarów. Jeśli zmierzona wartość b nie jest zgodna z wynikiem kalkulatora, trójkąt może być nieprawidłowy, przeciwprostokątna może być błędnie oznaczona lub w jednym pomiarze można zastosować inną jednostkę."
          ],
          "listTitle": "Typowe przykłady obejmują:",
          "listItems": [
            "Wyznaczanie wysokości ściany, gdy znana jest długość drabiny c i odległość od podłoża a.",
            "Wyznaczanie wzniesienia pionowego zbocza, gdy znana jest długość zbocza i przebieg poziomy.",
            "Sprawdzanie zadania domowego z trójkątem prostokątnym, które daje c i a.",
            "Potwierdzenie pomiarów układu ram, architektury krajobrazu, ramp lub planów pięter."
          ]
        },
        {
          "h2": "Jak czytać odpowiedź",
          "paragraphs": [
            "Wynik oznaczony Brakującą nogą b to długość drugiej nogi tworzącej kąt prosty z a. Nie jest to przeciwprostokątna i powinna być krótsza niż c.",
            "Jeśli obliczona b jest wyjątkowo mała, znana odnoga a jest bardzo blisko przeciwprostokątnej c. Może to być prawidłowe, ale warto sprawdzić diagram i jednostki przed użyciem wartości."
          ],
          "listTitle": "Prawidłowy wynik powinien spełniać:",
          "listItems": [
            "b jest większe od zera.",
            "b jest mniejsze niż c.",
            "a² + b² jest w przybliżeniu równy c².",
            "Jednostka wyjściowa odpowiada jednostce wejściowej."
          ]
        },
        {
          "h2": "Typowe błędy",
          "paragraphs": [
            "Najczęstszym błędem jest traktowanie c jako nogi. W tym kalkulatorze c musi być przeciwprostokątną, czyli najdłuższym bokiem i stroną przeciwną do kąta prostego.",
            "Kolejnym częstym błędem jest dodawanie kwadratów zamiast odejmowania. Dodawanie znajduje przeciwprostokątną; odejmowanie pozwala znaleźć brakującą nogę przeciwprostokątnej."
          ],
          "listTitle": "Unikaj tych błędów:",
          "listItems": [
            "Umieszczenie znanej nogi w polu przeciwprostokątnej.",
            "Używanie c² + a² zamiast c² - a².",
            "Wprowadzenie wartości większej lub równej c.",
            "Zatrzymujemy się na b² zamiast pierwiastka kwadratowego.",
            "Mieszanie jednostek, takich jak metry i centymetry."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator prawej strony trójkąta"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Kalkulator: Twierdzenie Pitagorasa"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Kalkulator: Brakująca przyprostokątna (z c i b)"
        }
      ],
      "faqs": [
        {
          "question": "Co oznacza c w tym kalkulatorze?",
          "answer": "c jest przeciwprostokątną trójkąta prostokątnego - najdłuższego boku, położonego naprzeciw kąta 90°. To nie jest noga. Wpisz c jako jedną z dwóch znanych wartości w tym kalkulatorze."
        },
        {
          "question": "Co oznacza „w tym kalkulatorze”?",
          "answer": "a jest jedną z dwóch nóg trójkąta prostokątnego. To jedna ze stron, która tworzy kąt prosty. W tym kalkulatorze a oznacza nogę, którą już znasz."
        },
        {
          "question": "Co znajdzie ten kalkulator?",
          "answer": "Ten kalkulator znajdzie brakującą nogę b. Biorąc pod uwagę przeciwprostokątną c i nogę a, oblicza b = √(c² − a²) i pokazuje rozwiązanie krok po kroku."
        },
        {
          "question": "Czy c może być mniejszy niż a?",
          "answer": "Nie. W trójkącie prostokątnym przeciwprostokątna jest zawsze najdłuższym bokiem. Jeśli c jest mniejszy niż a, wartości nie tworzą prawidłowego trójkąta prostokątnego. Przed obliczeniem sprawdź, który pomiar jest przeciwprostokątną."
        },
        {
          "question": "Jak znaleźć b z c i a?",
          "answer": "Podnieś przeciwprostokątną (c²), podnieś znaną nogę (a²), odejmij a² od c² i weź pierwiastek kwadratowy. Formuła to b = √(c² − a²). Lub wprowadź swoje wartości do tego kalkulatora, aby uzyskać natychmiastową odpowiedź."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Kalkulator: Brakująca przyprostokątna (z c i b)",
      "metaTitle": "Kalkulator: Brakująca przyprostokątna (z c i b) | Right Triangle Solver",
      "metaDescription": "Znajdź przyprostokątną a, gdy znana jest przeciwprostokątna c i przyprostokątna b.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Pamiętaj: c to przeciwprostokątna, a nie noga. Jest to najdłuższy bok trójkąta i leży naprzeciwko kąta 90°. Jeśli masz obie nogi i potrzebujesz przeciwprostokątnej, użyj zamiast tego kalkulatora twierdzenia Pitagorasa.",
      "intro": "Znajdź przyprostokątną a, gdy znana jest przeciwprostokątna c i przyprostokątna b.",
      "quickSummary": {
        "h2": "Co rozwiązuje ten kalkulator brakującej nogi",
        "intro": "Użyj tej strony, jeśli znasz przeciwprostokątną i odnogę b, ale potrzebujesz odnogi a. Dzięki temu znany bok b jest oddzielony od nieznanego boku a, dzięki czemu formuła i wynik odpowiadają etykietom na Twoim trójkącie.",
        "cards": [
          {
            "label": "Znane wartości",
            "value": "c = przeciwprostokątna; b = znana przyprostokątna"
          },
          {
            "label": "Znaleziska",
            "value": "a = nieznana przyprostokątna"
          },
          {
            "label": "Główna formuła",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Wymagane sprawdzenie",
            "value": "Wymaga c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Schemat prawego trójkąta: Znajdowanie nogi a",
        "intro": "Diagram przedstawia c jako znaną przeciwprostokątną i b jako znaną nogę. Odnoga podstawowa a jest podświetlona jako brakująca wartość zwrócona przez kalkulator.",
        "caption": "Schemat trójkąta prostokątnego ze znaną przeciwprostokątną c, znaną nogą b i nieznaną nogą a.",
        "sides": {
          "a": {
            "label": "a = znaleźć",
            "description": "Noga a to nieznana noga podstawowa rozwiązana z c i b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = znany",
            "description": "Noga b to znana noga tworząca kąt prosty z a.",
            "status": "known"
          },
          "c": {
            "label": "c = znany",
            "description": "Przeciwprostokątna c to znany najdłuższy bok trójkąta prostokątnego.",
            "status": "known"
          }
        },
        "notes": [
          "Przeciwprostokątna c musi być najdłuższym bokiem pary wejściowej.",
          "Jeżeli c jest mniejsze lub równe b, sprawdź ponownie, która wartość jest przeciwprostokątną.",
          "Obliczone a ma tę samą jednostkę, co wprowadzone wartości."
        ]
      },
      "calculator": {
        "outputLabel": "a = nieznana przyprostokątna",
        "fields": [
          {
            "key": "c",
            "label": "c = przeciwprostokątna",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = znana przyprostokątna",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formuła brakującej nogi a",
        "paragraphs": [
          "Zaczynając od twierdzenia Pitagorasa (a² + b² = c²), rozwiąż a, aby otrzymać poniższy wzór.",
          "Gdzie c to przeciwprostokątna (najdłuższy bok, przeciwny do kąta prostego), b to znana noga, a a to brakująca noga, którą chcesz znaleźć. Kluczową operacją jest odejmowanie: podnieś przeciwprostokątną do kwadratu, odejmij kwadrat znanej nogi, a następnie wypierwiastkuj resztę."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Jak znaleźć nogę a z c i b",
        "steps": [
          "Upewnij się, że poprawnie zidentyfikowałeś przeciwprostokątną (c) i znaną nogę (b). Przeciwprostokątna jest zawsze naprzeciwko kąta 90°.",
          "Wprowadź przeciwprostokątną c w pierwszym polu wejściowym.",
          "Wprowadź znaną nogę b w drugim polu wejściowym.",
          "Kliknij Oblicz, aby znaleźć nogę a.",
          "Przejrzyj wynik dla a i pracę krok po kroku pokazaną poniżej."
        ]
      },
      "example": {
        "h2": "Przykład: Znajdź nogę a",
        "intro": "Dane: c = 10, b = 6. Brakująca odnoga trójkąta prostokątnego z przeciwprostokątną 10 i odnogą 6 wynosi 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Ważna kontrola przed obliczeniem",
          "paragraphs": [
            "Aby obliczenia zadziałały, przeciwprostokątna c musi być większa niż b. W każdym trójkącie prostokątnym przeciwprostokątna jest najdłuższym bokiem. Jeśli c jest równy b, wzór daje a = 0, co oznacza, że ​​nie można utworzyć trójkąta.",
            "Jeśli c jest mniejsze niż b, wyrażenie pod pierwiastkiem kwadratowym staje się ujemne i nie ma rzeczywistej długości boku dla a. W takim przypadku sprawdź ponownie, która strona jest przeciwna do kąta 90°."
          ],
          "listTitle": "Najpierw użyj tych kontroli:",
          "listItems": [
            "c to strona przeciwna do kąta prostego.",
            "c jest większy niż b.",
            "Obydwa dane wejściowe są liczbami dodatnimi.",
            "c i b używają tej samej jednostki miary."
          ]
        },
        {
          "h2": "Gdzie ten kalkulator jest przydatny",
          "paragraphs": [
            "Ten kalkulator jest właściwym narzędziem, gdy znasz przeciwprostokątną i odnogę b i musisz znaleźć odnogę a. Jest to szczególnie przydatne, gdy diagram oznacza znaną nogę jako b, a nieznaną podstawę lub wysokość jako a.",
            "Strona spełnia również funkcję kontroli pomiarów. Jeżeli obliczony bok a bardzo różni się od zmierzonego a, trójkąt może nie zawierać prawdziwego kąta 90° lub jedna ze znanych wartości mogła zostać błędnie skopiowana."
          ],
          "listTitle": "Typowe przykłady obejmują:",
          "listItems": [
            "Wyznaczanie odległości bazowej, gdy znana jest długość nachylenia c i wysokość b.",
            "Wyznaczanie wysokości pionowej, gdy znana jest przeciwprostokątna i odległość pozioma.",
            "Rozwiązywanie problemów z geometrią, które dają c i b i proszą o a.",
            "Sprawdzanie wymiarów konstrukcji, mapowania lub rzutów pięter tworzących trójkąt prostokątny."
          ]
        },
        {
          "h2": "Jak czytać odpowiedź",
          "paragraphs": [
            "Wynik oznaczony Brakującą nogą a to druga strona, która tworzy kąt prosty z b. Powinna być krótsza od przeciwprostokątnej c i większa od zera.",
            "Jeśli wynik jest bliski c, znana odnoga b jest stosunkowo mała. Jeśli wynik jest bliski zeru, b jest prawie tak długi jak c. Jedno i drugie może się zdarzyć, ale przed użyciem odpowiedzi należy sprawdzić etykiety wejściowe."
          ],
          "listTitle": "Prawidłowy wynik powinien spełniać:",
          "listItems": [
            "a jest większe od zera.",
            "a jest mniejsze niż c.",
            "a² + b² jest w przybliżeniu równy c².",
            "Jednostka wyjściowa odpowiada jednostce używanej w c i b."
          ]
        },
        {
          "h2": "Typowe błędy",
          "paragraphs": [
            "Największym ryzykiem jest zamiana przeciwprostokątnej na nogę. W tym kalkulatorze założono, że c jest już najdłuższym bokiem, więc błędnie oznaczona wartość c spowoduje, że wynik będzie nieprawidłowy.",
            "Drugim częstym problemem jest omyłkowe użycie wzoru na przeciwprostokątną. Aby znaleźć brakującą nogę, odejmij znany kwadrat nogi od kwadratu przeciwprostokątnej i wyciągnij pierwiastek kwadratowy."
          ],
          "listTitle": "Unikaj tych błędów:",
          "listItems": [
            "Wchodząca noga b jako przeciwprostokątna c.",
            "Używanie c² + b² zamiast c² - b².",
            "Wpisanie wartości b większej lub równej c.",
            "Zapominanie o pierwiastku kwadratowym po odjęciu.",
            "Łączenie pomiarów wykorzystujących różne jednostki."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator prawej strony trójkąta"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Kalkulator: Twierdzenie Pitagorasa"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Kalkulator: Brakująca przyprostokątna (z c i a)"
        }
      ],
      "faqs": [
        {
          "question": "Co oznacza c w tym kalkulatorze?",
          "answer": "c to przeciwprostokątna - najdłuższy bok trójkąta prostokątnego, położony naprzeciw kąta 90°. W tym kalkulatorze wprowadzasz c jako jedną z dwóch znanych wartości."
        },
        {
          "question": "Co oznacza b w tym kalkulatorze?",
          "answer": "b jest jedną z dwóch nóg trójkąta prostokątnego. To bok tworzący kąt prosty. Tutaj b to noga, którą już znasz, a kalkulator używa jej wraz z c, aby znaleźć brakującą nogę a."
        },
        {
          "question": "Co znajdzie ten kalkulator?",
          "answer": "Znajduje brakującą nogę a. Podajesz przeciwprostokątną (c) i jedną nogę (b), a kalkulator stosuje wzór a = √(c² − b²), aby otrzymać nieznaną nogę wraz z rozwiązaniem krok po kroku."
        },
        {
          "question": "Czy c może być mniejszy niż b?",
          "answer": "Nie. Przeciwprostokątna jest zawsze najdłuższym bokiem trójkąta prostokątnego. Jeśli wartość c jest mniejsza niż b, dane wejściowe nie reprezentują prawidłowego trójkąta prostokątnego. Sprawdź ponownie, który pomiar odpowiada przeciwprostokątnej."
        },
        {
          "question": "Jak znaleźć c i b?",
          "answer": "Podnieś przeciwprostokątną (c²), podnieś znaną nogę (b²), odejmij b² od c² i weź pierwiastek kwadratowy z wyniku. Formuła to a = √(c² − b²). Możesz także po prostu wprowadzić swoje wartości do tego kalkulatora, aby uzyskać odpowiedź automatycznie."
        }
      ]
    }
  },
  "id": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Kalkulator: Teorema Pythagoras",
      "metaTitle": "Kalkulator: Teorema Pythagoras | Right Triangle Solver",
      "metaDescription": "Cari hipotenusa ketika kedua kaki diketahui. Ini adalah identitas utama untuk setiap segitiga siku-siku.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Baik Anda menyelesaikan soal pekerjaan rumah atau mengukur diagonal di kehidupan nyata, alat ini memberi Anda jawabannya dalam hitungan detik - dengan solusi lengkap ditampilkan langkah demi langkah.",
      "intro": "Cari hipotenusa ketika kedua kaki diketahui. Ini adalah identitas utama untuk setiap segitiga siku-siku.",
      "quickSummary": {
        "h2": "Apa yang Dipecahkan Kalkulator Pythagoras Ini",
        "intro": "Gunakan halaman ini jika kedua sisi yang bertemu pada sudut 90° diketahui dan sisi diagonalnya tidak ada. Kalkulator berfokus pada kasus sisi miring klasik, sehingga masukannya tetap sederhana dan hasilnya mudah diperiksa.",
        "cards": [
          {
            "label": "Nilai-nilai yang diketahui",
            "value": "a = kaki yang berlawanan dengan sudut A; b = kaki yang berlawanan dengan sudut B"
          },
          {
            "label": "Menemukan",
            "value": "c = hipotenusa"
          },
          {
            "label": "Rumus utama",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Terbaik untuk",
            "value": "Diagonal, tangga, landai, layar, dan pekerjaan rumah geometri"
          }
        ]
      },
      "diagram": {
        "h2": "Diagram Segitiga Kanan: Mencari Sisi Miring",
        "intro": "Diagram menunjukkan hubungan sisi yang tepat yang digunakan oleh alat tersebut. Kedua sisinya adalah nilai masukan yang diketahui, dan sisi miring c adalah sisi miring yang ditemukan kalkulator.",
        "caption": "Diagram segitiga siku-siku dengan sisi a dan b yang diketahui serta sisi miring c yang tidak diketahui.",
        "sides": {
          "a": {
            "label": "a = diketahui",
            "description": "sisi a merupakan salah satu dari dua sisi yang membentuk sudut siku-siku.",
            "status": "known"
          },
          "b": {
            "label": "b = diketahui",
            "description": "sisi b merupakan sisi lain yang membentuk sudut siku-siku.",
            "status": "known"
          },
          "c": {
            "label": "c = temukan",
            "description": "Sisi miring c adalah sisi terpanjang dan berhadapan dengan sudut 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a dan b dapat ditukar; hasil sisi miringnya akan sama.",
          "Gunakan satuan yang sama untuk kedua sisi sebelum menghitung.",
          "Jawabannya c akan selalu lebih besar dari kedua sisi pada segitiga siku-siku yang valid."
        ]
      },
      "calculator": {
        "outputLabel": "c = hipotenusa",
        "fields": [
          {
            "key": "a",
            "label": "a = kaki yang berlawanan dengan sudut A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = kaki yang berlawanan dengan sudut B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Rumus Teorema Pythagoras",
        "paragraphs": [
          "Teorema Pythagoras menyatakan bahwa pada segitiga siku-siku, kuadrat sisi miring sama dengan jumlah kuadrat kedua sisinya. Untuk mencari sisi miring, ambil akar kuadrat kedua sisinya.",
          "Dalam rumus ini, a dan b adalah dua sisi segitiga siku-siku - sisi-sisi yang membentuk sudut siku-siku. c adalah sisi miring, sisi terpanjang yang berhadapan dengan sudut siku-siku. Rumus ini hanya berlaku untuk segitiga siku-siku."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Cara Menggunakan Kalkulator Teorema Pythagoras",
        "steps": [
          "Identifikasi kedua sisi segitiga siku-siku Anda. Ini adalah sisi-sisi yang membentuk sudut siku-siku.",
          "Masukkan sisi a ke dalam kolom input pertama.",
          "Masukkan sisi b ke dalam kolom input kedua.",
          "Klik Hitung untuk mencari sisi miringnya.",
          "Baca hasil untuk c, beserta solusi langkah demi langkahnya."
        ]
      },
      "example": {
        "h2": "Contoh: Temukan Sisi Miringnya",
        "intro": "Diketahui: a = 6, b = 8. Sisi miring segitiga siku-siku dengan sisi 6 dan 8 adalah 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Dimana Kalkulator Ini Berguna",
          "paragraphs": [
            "Kalkulator sisi miring berguna ketika dua jarak tegak lurus digabungkan menjadi satu jarak diagonal. Hal ini sangat berguna ketika sebuah soal gambar, denah lantai, atau pekerjaan rumah memberikan sisi horizontal dan vertikal tetapi membiarkan sisi diagonalnya kosong.",
            "Karena halaman ini hanya memecahkan masalah c, halaman ini menghindari kebingungan dalam beralih antar mode samping. Jika nilai yang Anda ketahui adalah dua sisi, ini adalah alat teorema Pythagoras terfokus yang dapat digunakan."
          ],
          "listTitle": "Contoh umum meliputi:",
          "listItems": [
            "Menemukan diagonal persegi panjang, layar, tata letak ubin, atau ruangan.",
            "Menghitung panjang tangga dari tinggi dinding dan jarak tanah.",
            "Memperkirakan panjang lereng dari tanjakan dan lari.",
            "Memeriksa pekerjaan rumah segitiga siku-siku sebelum menyerahkan jawaban akhir."
          ]
        },
        {
          "h2": "Masukan Tip untuk Hasil Lebih Baik",
          "paragraphs": [
            "Masukkan kedua panjang sisi sebagai angka positif. Desimal baik-baik saja, dan kalkulator akan menjaga ketelitian yang cukup agar pekerjaan langkah demi langkah bermanfaat.",
            "Kedua input tersebut harus menggunakan satuan yang sama. Jika a diukur dalam satuan sisi dan b diukur dalam inci, konversikan satu pengukuran terlebih dahulu agar hasilnya bermakna."
          ],
          "listTitle": "Sebelum Anda menghitung, periksa apakah:",
          "listItems": [
            "a dan b adalah sisi yang menyentuh sudut 90°.",
            "Tidak ada masukan yang nol atau negatif.",
            "Kedua nilai tersebut diukur dalam satuan yang sama.",
            "Anda menyelesaikan soal sisi miring, bukan sisi yang hilang."
          ]
        },
        {
          "h2": "Cara Membaca Jawabannya",
          "paragraphs": [
            "Output berlabel Sisi Miring c adalah sisi yang berhadapan dengan sudut siku-siku. Ini adalah sisi diagonal pada diagram dan harus lebih panjang dari kedua sisi masukan.",
            "Jika hasil Anda terlihat lebih kecil dari a atau b, itu tandanya salah satu input salah diberi label atau segitiga tersebut sebenarnya bukan segitiga siku-siku."
          ],
          "listTitle": "Pemeriksaan kewajaran yang cepat:",
          "listItems": [
            "c harus lebih besar dari a.",
            "c harus lebih besar dari b.",
            "c harus lebih kecil dari + b.",
            "Untuk tripel umum seperti 3-4-5 atau 5-12-13, hasilnya harus sesuai dengan tripel yang diketahui."
          ]
        },
        {
          "h2": "Kesalahan Umum",
          "paragraphs": [
            "Kebanyakan jawaban sisi miring yang salah berasal dari penggunaan rumus yang benar pada sisi yang salah. sisinya harus berada di kedua sisi yang membentuk sudut siku-siku; sisi miring tidak pernah menjadi masukan pada halaman ini.",
            "Masalah umum lainnya adalah berhenti di a² + b². Nilai tersebut adalah c², bukan c. Langkah akar kuadrat adalah langkah yang mengembalikan nilai kuadrat menjadi panjang sisi sebenarnya."
          ],
          "listTitle": "Hindari kesalahan ini:",
          "listItems": [
            "Menggunakan rumus pada segitiga yang tidak mempunyai sudut 90°.",
            "Memasuki sisi diagonal sebagai a atau b.",
            "Lupa mengambil akar kuadrat di akhir.",
            "Mencampur satuan seperti inci dan sisi dalam perhitungan yang sama."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator Sisi Segitiga Kanan"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Kalkulator: Kaki yang hilang dari c dan a"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Kalkulator: Kaki yang hilang dari c dan b"
        }
      ],
      "faqs": [
        {
          "question": "Apa teorema Pythagoras?",
          "answer": "Teorema Pythagoras adalah rumus yang menghubungkan ketiga sisi segitiga siku-siku: a² + b² = c². Dikatakan bahwa kuadrat sisi miring sama dengan jumlah kuadrat kedua sisinya. Ini hanya berlaku untuk segitiga siku-siku."
        },
        {
          "question": "Apa arti c dalam rumusnya?",
          "answer": "Dalam rumus c² = a² + b², c adalah sisi miring - sisi terpanjang dari segitiga siku-siku. Itu adalah sisi yang berhadapan langsung dengan sudut 90°."
        },
        {
          "question": "Bisakah saya menggunakan kalkulator ini untuk segitiga apa pun?",
          "answer": "Tidak. Kalkulator ini menggunakan teorema Pythagoras, yang hanya berlaku untuk segitiga siku-siku. Jika segitigamu tidak memiliki sudut 90°, rumusnya tidak akan memberikan hasil yang benar."
        },
        {
          "question": "Bagaimana cara mencari sisi miring?",
          "answer": "Untuk mencari sisi miring, kuadratkan kedua sisi (a² dan b²), jumlahkan keduanya, dan ambil akar kuadrat dari jumlah tersebut. Rumusnya adalah c = √(a² + b²). Atau cukup masukkan nilai Anda di atas dan biarkan kalkulator yang melakukannya."
        },
        {
          "question": "Berapakah a dan b pada segitiga siku-siku?",
          "answer": "a dan b adalah dua sisi - sisi yang membentuk sudut siku-siku. Panjangnya bisa berapa saja, dan tidak masalah yang mana yang Anda sebut a atau b. Sisi miring (c) selalu merupakan sisi sisanya."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Kalkulator: Kaki yang hilang dari c dan a",
      "metaTitle": "Kalkulator: Kaki yang hilang dari c dan a | Right Triangle Solver",
      "metaDescription": "Cari kaki b ketika hipotenusa c dan kaki lainnya a diketahui.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Ingat: c selalu merupakan sisi miring - sisi terpanjang, berhadapan dengan sudut siku-siku. Itu bukan sisi. Jika Anda memiliki dua sisi dan membutuhkan sisi miring, gunakan Kalkulator Teorema Pythagoras.",
      "intro": "Cari kaki b ketika hipotenusa c dan kaki lainnya a diketahui.",
      "quickSummary": {
        "h2": "Apa yang Dipecahkan Kalkulator sisi yang Hilang Ini",
        "intro": "Gunakan halaman ini jika sisi miring dan sisi a diketahui, namun sisi lainnya tidak ada. Kalkulator menyusun ulang teorema Pythagoras untuk mengurangkan sisi miring yang diketahui sebelum mengambil akar kuadrat.",
        "cards": [
          {
            "label": "Nilai-nilai yang diketahui",
            "value": "c = hipotenusa; a = kaki yang diketahui"
          },
          {
            "label": "Menemukan",
            "value": "b = kaki yang tidak diketahui"
          },
          {
            "label": "Rumus utama",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Diperlukan pemeriksaan",
            "value": "Memerlukan c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Diagram Segitiga Kanan: Menemukan sisi b",
        "intro": "Diagram menandai c dan a sebagai nilai yang sudah Anda ketahui. sisi vertikal b disorot sebagai sisi hilang yang diselesaikan kalkulator ini.",
        "caption": "Diagram segitiga siku-siku dengan sisi miring c diketahui, sisi a diketahui, dan sisi b diketahui.",
        "sides": {
          "a": {
            "label": "a = diketahui",
            "description": "sisi a dikenal sebagai sisi sepanjang alas segitiga siku-siku.",
            "status": "known"
          },
          "b": {
            "label": "b = temukan",
            "description": "Bagian b adalah bagian yang tidak diketahui yang diselesaikan dengan mengurangkan a^2 dari c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = diketahui",
            "description": "Sisi miring c adalah sisi terpanjang yang diketahui berhadapan dengan sudut siku-siku.",
            "status": "known"
          }
        },
        "notes": [
          "c harus menjadi sisi miring, bukan salah satu sisinya.",
          "Jika c lebih kecil atau sama dengan a, maka inputnya tidak membentuk segitiga siku-siku yang valid.",
          "Hasilnya b menggunakan satuan yang sama dengan c dan a."
        ]
      },
      "calculator": {
        "outputLabel": "b = kaki yang tidak diketahui",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenusa",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = kaki yang diketahui",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formula b sisi Hilang",
        "paragraphs": [
          "Rumus mencari sisi b diturunkan dari teorema Pythagoras (a² + b² = c²). Penataan ulang untuk b memberikan rumus di bawah ini.",
          "Dimana c adalah sisi miring (sisi terpanjang dari segitiga siku-siku), a adalah sisi yang diketahui, dan b adalah sisi yang hilang yang sedang Anda selesaikan. Perhatikan pengurangannya: Anda mengurangi kuadrat sisi yang diketahui dari kuadrat sisi miring, lalu mengambil akar kuadrat."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Cara Menemukan sisi b Dari c dan a",
        "steps": [
          "Konfirmasikan bahwa c adalah sisi miring dan a adalah sisi. Sisi miring selalu merupakan sisi terpanjang.",
          "Masukkan sisi miring c ke dalam kolom input pertama.",
          "Masukkan sisi a yang diketahui ke dalam kolom input kedua.",
          "Klik Hitung untuk menemukan sisi yang hilang.",
          "Baca hasil untuk b, beserta solusi langkah demi langkah selengkapnya."
        ]
      },
      "example": {
        "h2": "Contoh: Temukan sisi b",
        "intro": "Diketahui: c = 13, a = 5. sisi segitiga siku-siku yang hilang dengan sisi miring 13 dan sisi 5 adalah 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Pemeriksaan Penting Sebelum Menghitung",
          "paragraphs": [
            "Sebelum menggunakan rumus ini, pastikan c lebih besar dari a. Sisi miring selalu merupakan sisi terpanjang dari segitiga siku-siku. Jika c sama dengan a maka diperoleh b = 0 yang artinya tidak ada segitiga.",
            "Jika c lebih kecil dari a, ekspresi di bawah akar kuadrat menjadi negatif. Artinya kedua nilai masukan tersebut tidak dapat menggambarkan segitiga siku-siku nyata dengan c sebagai sisi miringnya."
          ],
          "listTitle": "Gunakan pemeriksaan ini terlebih dahulu:",
          "listItems": [
            "c berlawanan dengan sudut 90°.",
            "c lebih besar dari a.",
            "Kedua nilai tersebut positif.",
            "c dan a menggunakan satuan yang sama."
          ]
        },
        {
          "h2": "Dimana Kalkulator Ini Berguna",
          "paragraphs": [
            "Kalkulator ini berguna jika pengukuran diagonal atau kemiringan diketahui, salah satu sisi tegak lurus diketahui, dan sisi tegak lurus lainnya tidak ada. Ini adalah alat yang terfokus untuk kasus c, jadi setiap penjelasan di halaman ini mengarah pada penemuan b.",
            "Ini juga dapat membantu memverifikasi pengukuran. Jika nilai terukur untuk b tidak sesuai dengan hasil kalkulator, segitiganya mungkin tidak siku-siku, sisi miringnya mungkin diberi label yang salah, atau satu pengukuran mungkin menggunakan satuan yang berbeda."
          ],
          "listTitle": "Contoh umum meliputi:",
          "listItems": [
            "Mencari tinggi dinding jika panjang tangga c dan jarak tanah a diketahui.",
            "Menemukan kenaikan vertikal suatu lereng ketika panjang lereng dan lintasan horizontal diketahui.",
            "Memeriksa soal pekerjaan rumah segitiga siku-siku yang menghasilkan c dan a.",
            "Mengonfirmasi pengukuran tata letak untuk rangka, lanskap, jalur landai, atau denah lantai."
          ]
        },
        {
          "h2": "Cara Membaca Jawabannya",
          "paragraphs": [
            "Keluaran berlabel sisi Hilang b adalah panjang sisi lainnya yang membentuk sudut siku-siku dengan a. Ini bukan sisi miring dan harus lebih pendek dari c.",
            "Jika b yang dihitung sangat kecil, sisi a yang Anda ketahui berada sangat dekat dengan sisi miring c. Itu mungkin valid, tetapi ada baiknya memeriksa diagram dan satuannya sebelum menggunakan nilainya."
          ],
          "listTitle": "Hasil yang valid harus memenuhi:",
          "listItems": [
            "b lebih besar dari nol.",
            "b lebih kecil dari c.",
            "a² + b² kira-kira sama dengan c².",
            "Unit keluaran sama dengan unit masukan."
          ]
        },
        {
          "h2": "Kesalahan Umum",
          "paragraphs": [
            "Kesalahan paling umum adalah memperlakukan c sebagai sisi. Dalam kalkulator ini, c harus berupa sisi miring, yaitu sisi terpanjang dan sisi yang berhadapan dengan sudut siku-siku.",
            "Kesalahan umum lainnya adalah menjumlahkan kuadrat, bukan mengurangi. Penjumlahan menemukan sisi miring; pengurangan menemukan sisi yang hilang dari sisi miring."
          ],
          "listTitle": "Hindari kesalahan ini:",
          "listItems": [
            "Menempatkan sisi yang diketahui ke dalam bidang miring.",
            "Menggunakan c² + a², bukan c² - a².",
            "Memasukkan lebih besar dari atau sama dengan c.",
            "Berhenti di b² alih-alih mengambil akar kuadrat.",
            "Satuan pencampur seperti meter dan sentimeter."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator Sisi Segitiga Kanan"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Kalkulator: Teorema Pythagoras"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Kalkulator: Kaki yang hilang dari c dan b"
        }
      ],
      "faqs": [
        {
          "question": "Apa arti c dalam kalkulator ini?",
          "answer": "c adalah sisi miring dari segitiga siku-siku - sisi terpanjang, terletak di seberang sudut 90°. Itu bukan sisi. Anda memasukkan c sebagai salah satu dari dua nilai yang diketahui dalam kalkulator ini."
        },
        {
          "question": "Apa arti dari kalkulator ini?",
          "answer": "a adalah salah satu dari dua sisi segitiga siku-siku. Itu salah satu sisinya yang membentuk sudut siku-siku. Dalam kalkulator ini, a adalah sisi yang sudah Anda ketahui."
        },
        {
          "question": "Apa yang ditemukan kalkulator ini?",
          "answer": "Kalkulator ini menemukan sisi b yang hilang. Mengingat sisi miring c dan sisi a, ini menghitung b = √(c² − a²) dan menunjukkan solusi langkah demi langkah kepada Anda."
        },
        {
          "question": "Bisakah c lebih kecil dari a?",
          "answer": "Tidak. Dalam segitiga siku-siku, sisi miring selalu merupakan sisi terpanjang. Jika c lebih kecil dari a, maka nilainya tidak membentuk segitiga siku-siku yang valid. Periksa pengukuran mana yang merupakan sisi miring sebelum menghitung."
        },
        {
          "question": "Bagaimana cara menemukan b dari c dan a?",
          "answer": "Kuadratkan sisi miring (c²), kuadratkan sisi yang diketahui (a²), kurangi a² dari c², dan ambil akar kuadratnya. Rumusnya adalah b = √(c² − a²). Atau masukkan nilai Anda ke dalam kalkulator ini untuk mendapatkan jawaban instan."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Kalkulator: Kaki yang hilang dari c dan b",
      "metaTitle": "Kalkulator: Kaki yang hilang dari c dan b | Right Triangle Solver",
      "metaDescription": "Cari kaki a ketika hipotenusa c dan kaki b diketahui.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Perlu diingat: c adalah sisi miring, bukan sisi. Ini adalah sisi terpanjang dari segitiga dan berhadapan dengan sudut 90°. Jika Anda memiliki kedua sisi dan membutuhkan sisi miring, gunakan Kalkulator Teorema Pythagoras.",
      "intro": "Cari kaki a ketika hipotenusa c dan kaki b diketahui.",
      "quickSummary": {
        "h2": "Apa yang Dipecahkan Kalkulator sisi yang Hilang Ini",
        "intro": "Gunakan halaman ini bila Anda mengetahui sisi miring dan sisi b, tetapi membutuhkan sisi a. Ini memisahkan sisi yang diketahui b dari sisi yang tidak diketahui a sehingga rumus dan hasilnya cocok dengan label pada segitiga Anda.",
        "cards": [
          {
            "label": "Nilai-nilai yang diketahui",
            "value": "c = hipotenusa; b = kaki yang diketahui"
          },
          {
            "label": "Menemukan",
            "value": "a = kaki yang tidak diketahui"
          },
          {
            "label": "Rumus utama",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Diperlukan pemeriksaan",
            "value": "Memerlukan c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Diagram Segitiga Kanan: Menemukan sisi a",
        "intro": "Diagram menunjukkan c sebagai sisi miring yang diketahui dan b sebagai sisi yang diketahui. sisi dasar a disorot sebagai nilai hilang yang dikembalikan oleh kalkulator.",
        "caption": "Diagram segitiga siku-siku dengan sisi miring c diketahui, sisi b diketahui, dan sisi a diketahui.",
        "sides": {
          "a": {
            "label": "a = temukan",
            "description": "sisi a adalah sisi dasar yang tidak diketahui yang diselesaikan dari c dan b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = diketahui",
            "description": "sisi b dikenal sebagai sisi yang membentuk sudut siku-siku dengan a.",
            "status": "known"
          },
          "c": {
            "label": "c = diketahui",
            "description": "Sisi miring c adalah sisi terpanjang yang diketahui pada segitiga siku-siku.",
            "status": "known"
          }
        },
        "notes": [
          "Sisi miring c harus merupakan sisi terpanjang pada pasangan masukan.",
          "Jika c lebih kecil atau sama dengan b, periksa kembali nilai hipotenusanya.",
          "Perhitungan a memiliki satuan yang sama dengan nilai yang Anda masukkan."
        ]
      },
      "calculator": {
        "outputLabel": "a = kaki yang tidak diketahui",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenusa",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = kaki yang diketahui",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formula a sisi Hilang",
        "paragraphs": [
          "Mulai dari teorema Pythagoras (a² + b² = c²), selesaikan a untuk mendapatkan rumus di bawah ini.",
          "Dimana c adalah sisi miring (sisi terpanjang, berhadapan dengan sudut siku-siku), b adalah sisi yang diketahui, dan a adalah sisi hilang yang ingin dicari. Operasi kuncinya adalah pengurangan: kuadratkan sisi miring, kurangi kuadrat dari sisi yang diketahui, lalu ambil akar kuadrat dari sisanya."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Cara Menemukan sisi a Dari c dan b",
        "steps": [
          "Pastikan Anda telah mengidentifikasi sisi miring (c) dan sisi yang diketahui (b) dengan benar. Sisi miring selalu berseberangan dengan sudut 90°.",
          "Masukkan sisi miring c ke dalam kolom input pertama.",
          "Masukkan sisi b yang diketahui ke dalam kolom input kedua.",
          "Klik Hitung untuk menemukan sisi a.",
          "Tinjau hasil untuk a dan langkah demi langkah pekerjaan yang ditunjukkan di bawah ini."
        ]
      },
      "example": {
        "h2": "Contoh: Temukan sisi a",
        "intro": "Diketahui: c = 10, b = 6. sisi segitiga siku-siku yang hilang dengan sisi miring 10 dan sisi 6 adalah 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Pemeriksaan Penting Sebelum Menghitung",
          "paragraphs": [
            "Sisi miring c harus lebih besar dari b agar penghitungan dapat berhasil. Pada setiap segitiga siku-siku, sisi miring adalah sisi terpanjangnya. Jika c sama dengan b, rumusnya menghasilkan a = 0, artinya tidak ada segitiga yang dapat dibentuk.",
            "Jika c lebih kecil dari b, persamaan di bawah akar kuadrat menjadi negatif dan tidak ada panjang sisi real untuk a. Jika demikian, periksa kembali sisi mana yang berlawanan dengan sudut 90°."
          ],
          "listTitle": "Gunakan pemeriksaan ini terlebih dahulu:",
          "listItems": [
            "c adalah sisi yang berhadapan dengan sudut siku-siku.",
            "c lebih besar dari b.",
            "Kedua inputnya adalah bilangan positif.",
            "c dan b menggunakan satuan pengukuran yang sama."
          ]
        },
        {
          "h2": "Dimana Kalkulator Ini Berguna",
          "paragraphs": [
            "Kalkulator ini adalah alat yang tepat ketika Anda mengetahui sisi miring dan sisi b serta perlu mencari sisi a. Hal ini sangat berguna ketika diagram Anda memberi label pada sisi yang diketahui sebagai b dan alas atau tingginya yang tidak diketahui sebagai a.",
            "Halaman ini juga berfungsi sebagai pemeriksaan pengukuran. Jika sisi terhitung a sangat berbeda dengan sisi terukur a, segitiga mungkin tidak memiliki sudut 90° yang sebenarnya atau salah satu nilai yang diketahui mungkin disalin secara tidak benar."
          ],
          "listTitle": "Contoh umum meliputi:",
          "listItems": [
            "Mencari jarak alas jika panjang lereng c dan tinggi b diketahui.",
            "Menemukan ketinggian vertikal jika sisi miring dan jarak horizontal diketahui.",
            "Menyelesaikan masalah geometri yang menghasilkan c dan b dan meminta a.",
            "Memeriksa pengukuran konstruksi, pemetaan, atau denah yang membentuk segitiga siku-siku."
          ]
        },
        {
          "h2": "Cara Membaca Jawabannya",
          "paragraphs": [
            "Keluaran berlabel sisi Hilang a merupakan sisi lain yang membentuk sudut siku-siku dengan b. Ini harus lebih pendek dari sisi miring c dan lebih besar dari nol.",
            "Jika hasilnya mendekati c, maka sisi b yang diketahui relatif kecil. Jika hasilnya mendekati nol, b hampir sepanjang c. Keduanya bisa terjadi, namun label masukan harus diperiksa sebelum menggunakan jawabannya."
          ],
          "listTitle": "Hasil yang valid harus memenuhi:",
          "listItems": [
            "a lebih besar dari nol.",
            "a lebih kecil dari c.",
            "a² + b² kira-kira sama dengan c².",
            "Unit keluaran cocok dengan unit yang digunakan untuk c dan b."
          ]
        },
        {
          "h2": "Kesalahan Umum",
          "paragraphs": [
            "Risiko terbesar adalah menukar sisi miring dengan sisi. Kalkulator ini mengasumsikan c sudah menjadi sisi terpanjang, sehingga nilai c yang salah diberi label akan membuat hasil menjadi salah.",
            "Masalah umum kedua adalah kesalahan penggunaan rumus sisi miring. Untuk mencari sisi yang hilang, kurangi kuadrat sisi yang diketahui dari kuadrat sisi miring, lalu ambil akar kuadratnya."
          ],
          "listTitle": "Hindari kesalahan ini:",
          "listItems": [
            "Memasukkan sisi b sebagai sisi miring c.",
            "Menggunakan c² + b², bukan c² - b².",
            "Memasukkan b lebih besar atau sama dengan c.",
            "Lupa akar kuadrat setelah dikurangi.",
            "Menggabungkan pengukuran yang menggunakan satuan berbeda."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Kalkulator Sisi Segitiga Kanan"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Kalkulator: Teorema Pythagoras"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Kalkulator: Kaki yang hilang dari c dan a"
        }
      ],
      "faqs": [
        {
          "question": "Apa arti c dalam kalkulator ini?",
          "answer": "c adalah sisi miring - sisi terpanjang dari segitiga siku-siku, berhadapan dengan sudut 90°. Di kalkulator ini, Anda memasukkan c sebagai salah satu dari dua nilai yang diketahui."
        },
        {
          "question": "Apa arti b dalam kalkulator ini?",
          "answer": "b adalah salah satu dari dua sisi segitiga siku-siku. Itu adalah sisi yang membentuk sudut siku-siku. Di sini, b adalah sisi yang sudah Anda ketahui, dan kalkulator menggunakannya bersama dengan c untuk menemukan sisi a yang hilang."
        },
        {
          "question": "Apa yang ditemukan kalkulator ini?",
          "answer": "Ia menemukan sisi a yang hilang. Anda memberikan sisi miring (c) dan satu sisi (b), dan kalkulator menerapkan rumus a = √(c² − b²) untuk memberi Anda sisi yang tidak diketahui dengan solusi langkah demi langkah."
        },
        {
          "question": "Bisakah c lebih kecil dari b?",
          "answer": "Tidak. Sisi miring selalu merupakan sisi terpanjang dalam segitiga siku-siku. Jika nilai c lebih kecil dari b, inputnya tidak mewakili segitiga siku-siku yang valid. Periksa kembali pengukuran mana yang sesuai dengan sisi miring."
        },
        {
          "question": "Bagaimana cara menemukan dari c dan b?",
          "answer": "Kuadratkan sisi miring (c²), kuadratkan sisi yang diketahui (b²), kurangi b² dari c², dan ambil akar kuadrat dari hasilnya. Rumusnya adalah a = √(c² − b²). Anda juga bisa memasukkan nilai Anda ke dalam kalkulator ini untuk mendapatkan jawabannya secara otomatis."
        }
      ]
    }
  },
  "ar": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "حاسبة: نظرية فيثاغورس",
      "metaTitle": "حاسبة: نظرية فيثاغورس | Right Triangle Solver",
      "metaDescription": "أوجد الوتر عندما يكون كلاً من الضلعين القائمين معروفين. هذه هي الهوية الأساسية لأي مثلث قائم الزاوية.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "سواء كنت تحل مشكلة في واجبك المنزلي أو تقيس قطرًا في الحياة الواقعية، فإن هذه الأداة تمنحك الإجابة في ثوانٍ - مع عرض الحل الكامل خطوة بخطوة.",
      "intro": "أوجد الوتر عندما يكون كلاً من الضلعين القائمين معروفين. هذه هي الهوية الأساسية لأي مثلث قائم الزاوية.",
      "quickSummary": {
        "h2": "ما الذي تحله هذه الآلة الحاسبة فيثاغورس؟",
        "intro": "استخدم هذه الصفحة عندما يكون الضلعان المتقابلان عند زاوية 90° معروفين ويكون الجانب القطري مفقودًا. تركز الآلة الحاسبة على حالة الوتر الكلاسيكية، بحيث تظل المدخلات بسيطة ويسهل التحقق من النتيجة.",
        "cards": [
          {
            "label": "القيم المعروفة",
            "value": "a = الضلع المقابل للزاوية A; b = الضلع المقابل للزاوية B"
          },
          {
            "label": "يجد",
            "value": "c = الوتر"
          },
          {
            "label": "الصيغة الرئيسية",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "الأفضل ل",
            "value": "الأقطار والسلالم والمنحدرات والشاشات والواجبات الهندسية"
          }
        ]
      },
      "diagram": {
        "h2": "مخطط المثلث القائم: العثور على الوتر",
        "intro": "يوضح الرسم البياني العلاقة الجانبية الدقيقة التي تستخدمها الأداة. يمثل الجانبان قيم الإدخال المعروفة، والجانب المائل c هو الوتر الذي تجده الآلة الحاسبة.",
        "caption": "مخطط المثلث الأيمن ذو الأرجل المعروفة a وb والوتر غير المعروف c.",
        "sides": {
          "a": {
            "label": "a = معروف",
            "description": "الساق a هي أحد الجانبين اللذين يشكلان الزاوية القائمة.",
            "status": "known"
          },
          "b": {
            "label": "b = معروف",
            "description": "الساق b هو الجانب الآخر الذي يشكل الزاوية القائمة.",
            "status": "known"
          },
          "c": {
            "label": "c = العثور على",
            "description": "الوتر c هو الضلع الأطول ويقع مقابل زاوية 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "يمكن تبديل a وb؛ ستكون نتيجة الوتر هي نفسها.",
          "استخدم نفس الوحدة لكلتا الساقين قبل إجراء الحساب.",
          "ستكون الإجابة c دائمًا أكبر من أي من الرجلين في مثلث قائم الزاوية."
        ]
      },
      "calculator": {
        "outputLabel": "c = الوتر",
        "fields": [
          {
            "key": "a",
            "label": "a = الضلع المقابل للزاوية A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = الضلع المقابل للزاوية B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "صيغة نظرية فيثاغورس",
        "paragraphs": [
          "تنص نظرية فيثاغورس على أنه في المثلث القائم، مربع الوتر يساوي مجموع مربعي الساقين. لإيجاد الوتر، خذ الجذر التربيعي لكلا الطرفين.",
          "في هذه الصيغة، a وb هما ضلعا المثلث القائم - الضلعان اللذان يشكلان الزاوية القائمة. c هو الوتر، الضلع الأطول، المقابل للزاوية القائمة. هذه الصيغة صالحة فقط للمثلثات القائمة."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "كيفية استخدام حاسبة نظرية فيثاغورس",
        "steps": [
          "تحديد ساقي المثلث الأيمن الخاص بك. هذه هي الجوانب التي تشكل الزاوية القائمة.",
          "أدخل الساق a في حقل الإدخال الأول.",
          "أدخل الساق b في حقل الإدخال الثاني.",
          "انقر فوق \"حساب\" للعثور على الوتر.",
          "اقرأ نتيجة c، بالإضافة إلى الحل خطوة بخطوة."
        ]
      },
      "example": {
        "h2": "مثال: أوجد الوتر",
        "intro": "معطى: a = 6، b = 8. الوتر في المثلث القائم الزاوية ذو الأرجل 6 و8 هو 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "حيث تكون هذه الآلة الحاسبة مفيدة",
          "paragraphs": [
            "تعتبر حاسبة الوتر مفيدة عندما تتحد مسافتان متعامدتان في مسافة قطرية واحدة. يكون ذلك مفيدًا بشكل خاص عندما تعطي مشكلة الرسم أو مخطط الأرضية أو الواجب المنزلي الجانبين الأفقي والرأسي ولكنها تترك الجانب القطري فارغًا.",
            "نظرًا لأن هذه الصفحة تحل مشكلة c فقط، فإنها تتجنب الخلط بين التبديل بين الأوضاع الجانبية. إذا كانت قيمك المعروفة هي الضلعين، فهذه هي أداة نظرية فيثاغورس المركزة التي يجب استخدامها."
          ],
          "listTitle": "تشمل الأمثلة الشائعة ما يلي:",
          "listItems": [
            "العثور على قطري المستطيل أو الشاشة أو تخطيط البلاط أو الغرفة.",
            "حساب طول السلم من ارتفاع الجدار والمسافة عن الأرض.",
            "تقدير طول منحدر المنحدر من الارتفاع والجري.",
            "التحقق من واجبات المثلث القائم الزاوية قبل تقديم الإجابة النهائية."
          ]
        },
        {
          "h2": "نصائح الإدخال للحصول على نتائج أفضل",
          "paragraphs": [
            "أدخل طولي الساق كأرقام موجبة. الأعداد العشرية جيدة، وستحتفظ الآلة الحاسبة بالدقة الكافية لجعل العمل خطوة بخطوة مفيدًا.",
            "يجب أن يستخدم المدخلان نفس الوحدة. إذا تم قياس a بالقدم وتم قياس b بالبوصة، فقم بتحويل قياس واحد أولاً حتى تكون النتيجة ذات معنى."
          ],
          "listTitle": "قبل أن تقوم بالحساب، تأكد من:",
          "listItems": [
            "a وb هما الجانبان اللذان يلامسان زاوية 90°.",
            "ولا يكون أي من المدخلات صفرًا أو سالبًا.",
            "يتم قياس كلا القيمتين في نفس الوحدة.",
            "أنت تقوم بالعثور على الوتر، وليس الساق المفقودة."
          ]
        },
        {
          "h2": "كيفية قراءة الجواب",
          "paragraphs": [
            "الإخراج المسمى Hypotenuse c هو الجانب المقابل للزاوية القائمة. إنه الجانب القطري في المخطط ويجب أن يكون أطول من كلا ساقي الإدخال.",
            "إذا كانت النتيجة تبدو أصغر من a أو b، فهذه علامة على أن أحد المدخلات تمت تسميته بشكل خاطئ أو أن المثلث ليس في الواقع مثلثًا قائمًا."
          ],
          "listTitle": "التحقق السريع من المعقولية:",
          "listItems": [
            "يجب أن يكون c أكبر من a.",
            "يجب أن يكون c أكبر من b.",
            "يجب أن يكون c أقل من + b.",
            "بالنسبة للثلاثيات الشائعة مثل 3-4-5 أو 5-12-13، يجب أن تتطابق النتيجة مع الثلاثية المعروفة."
          ]
        },
        {
          "h2": "الأخطاء الشائعة",
          "paragraphs": [
            "معظم إجابات الوتر الخاطئة تأتي من استخدام الصيغة الصحيحة من الجوانب الخاطئة. يجب أن تكون الأرجل هي الجانبين اللذين يشكلان الزاوية القائمة؛ الوتر ليس أبدًا مدخلاً في هذه الصفحة.",
            "هناك مشكلة شائعة أخرى وهي التوقف عند a² + b². هذه القيمة هي c²، وليس c. خطوة الجذر التربيعي هي ما يعيد القيمة التربيعية إلى طول الجانب الفعلي."
          ],
          "listTitle": "تجنب هذه الأخطاء:",
          "listItems": [
            "استخدام الصيغة على مثلث لا يحتوي على زاوية 90°.",
            "إدخال الجانب القطري كـ a أو b.",
            "نسيان أخذ الجذر التربيعي في النهاية.",
            "وحدات الخلط مثل البوصات والقدمين في نفس الحساب."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "حاسبة جانب المثلث الأيمن"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "حاسبة: الضلع المفقود بدلالة c و a"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "حاسبة: الضلع المفقود بدلالة c و b"
        }
      ],
      "faqs": [
        {
          "question": "ما هي نظرية فيثاغورس؟",
          "answer": "نظرية فيثاغورس هي صيغة تربط بين الأضلاع الثلاثة للمثلث القائم الزاوية: a² + b² = c². تنص على أن مربع الوتر يساوي مجموع مربعي الساقين. ينطبق فقط على المثلثات القائمة."
        },
        {
          "question": "ماذا يعني c في الصيغة؟",
          "answer": "في الصيغة c² = a² + b²، c هو الوتر - الضلع الأطول في المثلث القائم. إنه الجانب المقابل مباشرة لزاوية 90°."
        },
        {
          "question": "هل يمكنني استخدام هذه الآلة الحاسبة لأي مثلث؟",
          "answer": "لا، هذه الآلة الحاسبة تستخدم نظرية فيثاغورس، والتي تنطبق فقط على المثلثات القائمة. إذا لم يكن مثلثك يحتوي على زاوية 90°، فلن تعطي الصيغة نتيجة صحيحة."
        },
        {
          "question": "كيف يمكنني العثور على الوتر؟",
          "answer": "للعثور على الوتر، قم بتربيع كلا الساقين (a² وb²)، ثم اجمعهما معًا، ثم خذ الجذر التربيعي للمجموع. الصيغة هي c = √(a² + b²). أو فقط أدخل القيم الخاصة بك أعلاه واترك الآلة الحاسبة تقوم بذلك."
        },
        {
          "question": "ما هما a وb في المثلث القائم؟",
          "answer": "a وb هما الساقين - الجانبان اللذان يشكلان الزاوية القائمة. يمكن أن تكون بأي طول موجب، ولا يهم أي طول تسميه a أو b. الوتر (c) هو دائمًا الجانب المتبقي."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "حاسبة: الضلع المفقود بدلالة c و a",
      "metaTitle": "حاسبة: الضلع المفقود بدلالة c و a | Right Triangle Solver",
      "metaDescription": "أوجد الضلع b عندما يكون الوتر c والضلع الآخر a معروفين.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "تذكر: c هو دائمًا الوتر - الضلع الأطول، المقابل للزاوية القائمة. إنها ليست ساق. إذا كان لديك ساقان وتحتاج إلى الوتر بدلًا من ذلك، فاستخدم حاسبة نظرية فيثاغورس.",
      "intro": "أوجد الضلع b عندما يكون الوتر c والضلع الآخر a معروفين.",
      "quickSummary": {
        "h2": "ما الذي تحله هذه الآلة الحاسبة للساق المفقودة؟",
        "intro": "استخدم هذه الصفحة عندما يكون الوتر والساق a معروفين، ولكن الساق الأخرى مفقودة. تقوم الآلة الحاسبة بإعادة ترتيب نظرية فيثاغورس لطرح الساق المعلومة من الوتر قبل أخذ الجذر التربيعي.",
        "cards": [
          {
            "label": "القيم المعروفة",
            "value": "c = الوتر; a = الضلع المعروف"
          },
          {
            "label": "يجد",
            "value": "b = الضلع المجهول"
          },
          {
            "label": "الصيغة الرئيسية",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "الشيك المطلوب",
            "value": "يتطلب أن يكون c > a."
          }
        ]
      },
      "diagram": {
        "h2": "مخطط المثلث الأيمن: العثور على الساق b",
        "intro": "يشير الرسم التخطيطي إلى c وa كقيمتين تعرفهما بالفعل. يتم تمييز الساق الرأسية b باعتبارها الجانب المفقود الذي تحله هذه الآلة الحاسبة.",
        "caption": "مخطط المثلث الأيمن مع الوتر المعروف c، والضلع المعروف a، والضلع غير المعروف b.",
        "sides": {
          "a": {
            "label": "a = معروف",
            "description": "الساق a هي الساق المعروفة على طول قاعدة المثلث القائم.",
            "status": "known"
          },
          "b": {
            "label": "b = العثور على",
            "description": "الساق b هي الساق المجهولة التي تم حلها بطرح a^2 من c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = معروف",
            "description": "الوتر c هو الضلع الأطول المعروف المقابل للزاوية القائمة.",
            "status": "known"
          }
        },
        "notes": [
          "يجب أن يكون c هو الوتر وليس أحد الساقين.",
          "إذا كانت c أقل من أو تساوي a، فإن المدخلات لا تشكل مثلثًا صحيحًا.",
          "تستخدم النتيجة b نفس الوحدة مثل c وa."
        ]
      },
      "calculator": {
        "outputLabel": "b = الضلع المجهول",
        "fields": [
          {
            "key": "c",
            "label": "c = الوتر",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = الضلع المعروف",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "صيغة الساق المفقودة b",
        "paragraphs": [
          "صيغة العثور على الساق b مشتقة من نظرية فيثاغورس (a² + b² = c²). إعادة ترتيب b تعطي الصيغة أدناه.",
          "حيث c هو الوتر (أطول ضلع في المثلث القائم)، وa هو الضلع المعروف، وb هو الضلع المفقود الذي تبحث عنه. لاحظ الطرح: تطرح مربع الضلع المعروف من مربع الوتر، ثم تأخذ الجذر التربيعي."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "كيفية العثور على الساق b من c وa",
        "steps": [
          "تأكد من أن c هو الوتر والساق. الوتر هو دائمًا الضلع الأطول.",
          "أدخل الوتر c في حقل الإدخال الأول.",
          "أدخل الجزء المعروف a في حقل الإدخال الثاني.",
          "انقر فوق \"حساب\" للعثور على الساق المفقودة.",
          "اقرأ نتيجة b، بالإضافة إلى الحل الكامل خطوة بخطوة."
        ]
      },
      "example": {
        "h2": "مثال: ابحث عن الساق b",
        "intro": "مع الأخذ في الاعتبار: c = 13، a = 5. الضلع المفقود في مثلث قائم الزاوية ذو الوتر 13 والضلع 5 هو 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "تحقق مهم قبل الحساب",
          "paragraphs": [
            "قبل استخدام هذه الصيغة، تأكد من أن c أكبر من a. الوتر هو دائمًا أطول ضلع في المثلث القائم الزاوية. إذا كانت c تساوي a، فستحصل على b = 0، مما يعني عدم وجود مثلث.",
            "إذا كان c أقل من a، يصبح التعبير الموجود أسفل الجذر التربيعي سالبًا. وهذا يعني أن القيمتين المدخلتين لا يمكنهما وصف مثلث قائم الزاوية حقيقي مع c باعتباره الوتر."
          ],
          "listTitle": "استخدم هذه الفحوصات أولاً:",
          "listItems": [
            "يقع c مقابل زاوية 90°.",
            "c أكبر من a.",
            "كلتا القيمتين إيجابيتان.",
            "يستخدم c وa نفس الوحدة."
          ]
        },
        {
          "h2": "حيث تكون هذه الآلة الحاسبة مفيدة",
          "paragraphs": [
            "تكون هذه الآلة الحاسبة مفيدة عندما يكون قياس القطر أو الميل معروفًا، ويكون أحد الضلع المتعامد معروفًا، ويكون الضلع المتعامد الآخر مفقودًا. إنها الأداة المركزة على حالة c-and-a، لذا فإن كل شرح في الصفحة يشير إلى العثور على b.",
            "ويمكن أن يساعد أيضًا في التحقق من القياسات. إذا كانت القيمة المقاسة لـ b لا تتطابق مع نتيجة الآلة الحاسبة، فقد لا يكون المثلث صحيحًا، أو قد تتم تسمية الوتر بشكل خاطئ، أو قد يستخدم أحد القياسات وحدة مختلفة."
          ],
          "listTitle": "تشمل الأمثلة الشائعة ما يلي:",
          "listItems": [
            "إيجاد ارتفاع الجدار عندما يكون طول السلم c والمسافة الأرضية a معروفة.",
            "إيجاد الارتفاع الرأسي للمنحدر عندما يكون طول المنحدر والمسار الأفقي معلومين.",
            "التحقق من مشكلة الواجب المنزلي للمثلث الأيمن التي تعطي c وa.",
            "تأكيد قياسات التخطيط للتأطير أو تنسيق الحدائق أو المنحدرات أو مخططات الطوابق."
          ]
        },
        {
          "h2": "كيفية قراءة الجواب",
          "paragraphs": [
            "الإخراج المسمى الساق المفقودة b هو طول الساق الأخرى التي تشكل الزاوية اليمنى مع a. إنه ليس الوتر ويجب أن يكون أقصر من c.",
            "إذا كان b المحسوب صغيرًا للغاية، فإن ساقك المعروفة a تكون قريبة جدًا من الوتر c. يمكن أن يكون ذلك صحيحًا، لكن من المفيد التحقق من الرسم البياني والوحدات قبل استخدام القيمة."
          ],
          "listTitle": "يجب أن تفي النتيجة الصحيحة بما يلي:",
          "listItems": [
            "b أكبر من الصفر.",
            "b أقل من c.",
            "a² + b² يساوي تقريبًا c².",
            "وحدة الإخراج تطابق وحدة الإدخال."
          ]
        },
        {
          "h2": "الأخطاء الشائعة",
          "paragraphs": [
            "الخطأ الأكثر شيوعًا هو التعامل مع c كساق. في هذه الآلة الحاسبة، c يجب أن يكون الوتر، وهو الضلع الأطول والضلع المقابل للزاوية القائمة.",
            "هناك خطأ شائع آخر وهو إضافة المربعات بدلاً من الطرح. الجمع يجد الوتر. عملية الطرح تعثر على ساق مفقودة من الوتر."
          ],
          "listTitle": "تجنب هذه الأخطاء:",
          "listItems": [
            "وضع الساق المعروفة في مجال الوتر.",
            "استخدام c² + a² بدلاً من c² - a².",
            "إدخال أكبر من أو يساوي c.",
            "التوقف عند b² بدلاً من أخذ الجذر التربيعي.",
            "وحدات الخلط مثل المتر والسنتيمتر."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "حاسبة جانب المثلث الأيمن"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "حاسبة: نظرية فيثاغورس"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "حاسبة: الضلع المفقود بدلالة c و b"
        }
      ],
      "faqs": [
        {
          "question": "ماذا يعني c في هذه الآلة الحاسبة؟",
          "answer": "c هو وتر المثلث القائم، وهو الضلع الأطول، ويقع مقابل زاوية 90°. إنها ليست ساق. قمت بإدخال c كإحدى القيمتين المعروفتين في هذه الآلة الحاسبة."
        },
        {
          "question": "ماذا يعني في هذه الآلة الحاسبة؟",
          "answer": "أ هو أحد ساقي المثلث القائم الزاوية. إنه أحد الأضلاع التي تشكل الزاوية القائمة. في هذه الآلة الحاسبة، a هي الساق التي تعرفها بالفعل."
        },
        {
          "question": "ماذا تجد هذه الآلة الحاسبة؟",
          "answer": "تعثر هذه الآلة الحاسبة على الساق المفقودة b. بالنظر إلى الوتر c والضلع a، فإنه يحسب b = √(c² − a²) ويظهر لك الحل خطوة بخطوة."
        },
        {
          "question": "هل يمكن أن يكون c أصغر من a؟",
          "answer": "لا، في المثلث القائم الزاوية، يكون الوتر دائمًا هو الضلع الأطول. إذا كانت c أصغر من a، فإن القيم لا تشكل مثلثًا قائمًا صحيحًا. تحقق من القياس الذي يمثل الوتر قبل الحساب."
        },
        {
          "question": "كيف يمكنني العثور على b من c وa؟",
          "answer": "قم بتربيع الوتر (c²)، ثم قم بتربيع الضلع المعروف (a²)، واطرح a² من c²، ثم خذ الجذر التربيعي. الصيغة هي b = √(c² − a²). أو أدخل القيم الخاصة بك في هذه الآلة الحاسبة للحصول على إجابة فورية."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "حاسبة: الضلع المفقود بدلالة c و b",
      "metaTitle": "حاسبة: الضلع المفقود بدلالة c و b | Right Triangle Solver",
      "metaDescription": "أوجد الضلع a عندما يكون الوتر c والضلع b معروفين.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "ضع في اعتبارك أن: c هو الوتر وليس الساق. إنه أطول ضلع في المثلث ويقع مقابل زاوية 90°. إذا كان لديك كلا الساقين وتحتاج إلى الوتر، فاستخدم حاسبة نظرية فيثاغورس بدلاً من ذلك.",
      "intro": "أوجد الضلع a عندما يكون الوتر c والضلع b معروفين.",
      "quickSummary": {
        "h2": "ما الذي تحله هذه الآلة الحاسبة للساق المفقودة؟",
        "intro": "استخدم هذه الصفحة عندما تعرف الوتر والضلع b، ولكنك تحتاج إلى الضلع a. إنه يبقي الجانب المعروف b منفصلاً عن الجانب غير المعروف a بحيث تتطابق الصيغة والنتيجة مع التسميات الموجودة على مثلثك.",
        "cards": [
          {
            "label": "القيم المعروفة",
            "value": "c = الوتر; b = الضلع المعروف"
          },
          {
            "label": "يجد",
            "value": "a = الضلع المجهول"
          },
          {
            "label": "الصيغة الرئيسية",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "الشيك المطلوب",
            "value": "يتطلب أن يكون c > b."
          }
        ]
      },
      "diagram": {
        "h2": "مخطط المثلث الأيمن: العثور على الساق a",
        "intro": "يُظهر الرسم البياني c باعتباره الوتر المعروف وb باعتباره الضلع المعروف. يتم تمييز الضلع الأساسي a باعتباره القيمة المفقودة التي يتم إرجاعها بواسطة الآلة الحاسبة.",
        "caption": "مخطط المثلث الأيمن مع الوتر المعروف c، والضلع المعروف b، والضلع غير المعروف a.",
        "sides": {
          "a": {
            "label": "a = تجد",
            "description": "الساق a هي الساق الأساسية غير المعروفة التي تم حلها من c وb.",
            "status": "unknown"
          },
          "b": {
            "label": "b = معروف",
            "description": "الساق b هي الساق المعروفة التي تشكل الزاوية القائمة مع a.",
            "status": "known"
          },
          "c": {
            "label": "c = معروف",
            "description": "الوتر c هو الضلع الأطول المعروف في المثلث القائم الزاوية.",
            "status": "known"
          }
        },
        "notes": [
          "يجب أن يكون الوتر c هو الضلع الأطول في زوج الإدخال.",
          "إذا كانت c أقل من أو تساوي b، فأعد التحقق من القيمة التي تمثل الوتر.",
          "يحتوي a المحسوب على نفس وحدة القيم التي أدخلتها."
        ]
      },
      "calculator": {
        "outputLabel": "a = الضلع المجهول",
        "fields": [
          {
            "key": "c",
            "label": "c = الوتر",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = الضلع المعروف",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "صيغة الساق المفقودة a",
        "paragraphs": [
          "بدءًا من نظرية فيثاغورس (a² + b² = c²)، قم بحل a للحصول على الصيغة أدناه.",
          "حيث c هو الوتر (الضلع الأطول، المقابل للزاوية القائمة)، b هو الساق المعروفة، وa هو الساق المفقودة التي تريد العثور عليها. العملية الأساسية هي الطرح: قم بتربيع الوتر، ثم اطرح مربع الساق المعلومة، ثم خذ الجذر التربيعي لما تبقى."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "كيفية العثور على الساق a من c وb",
        "steps": [
          "تأكد من تحديد الوتر (c) والساق المعروفة (b) بشكل صحيح. يكون الوتر دائمًا مقابلًا للزاوية 90°.",
          "أدخل الوتر c في حقل الإدخال الأول.",
          "أدخل الجزء المعروف b في حقل الإدخال الثاني.",
          "انقر فوق \"حساب\" للعثور على الساق a.",
          "قم بمراجعة النتيجة الخاصة بـ a والعمل خطوة بخطوة الموضح أدناه."
        ]
      },
      "example": {
        "h2": "مثال: ابحث عن الساق a",
        "intro": "مع الأخذ في الاعتبار: c = 10، b = 6. الضلع المفقود في المثلث القائم الزاوية مع الوتر 10 والضلع 6 هو 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "تحقق مهم قبل الحساب",
          "paragraphs": [
            "يجب أن يكون الوتر c أكبر من b حتى تتم العملية الحسابية. في كل مثلث قائم، الوتر هو الضلع الأطول. إذا كانت c تساوي b، فإن الصيغة تعطي = 0، مما يعني أنه لا يمكن تشكيل مثلث.",
            "إذا كان c أقل من b، يصبح التعبير تحت الجذر التربيعي سالبًا ولا يوجد طول ضلع حقيقي لـ a. في هذه الحالة، أعد التحقق من الجانب المقابل لزاوية 90°."
          ],
          "listTitle": "استخدم هذه الفحوصات أولاً:",
          "listItems": [
            "c هو الضلع المقابل للزاوية القائمة.",
            "c أكبر من b.",
            "كلا المدخلات هي أرقام إيجابية.",
            "يستخدم c وb نفس وحدة القياس."
          ]
        },
        {
          "h2": "حيث تكون هذه الآلة الحاسبة مفيدة",
          "paragraphs": [
            "هذه الآلة الحاسبة هي الأداة المناسبة عندما تعرف الوتر والضلع b وتحتاج إلى العثور على الضلع a. يكون ذلك مفيدًا بشكل خاص عندما يقوم الرسم التخطيطي الخاص بك بتسمية الساق المعروفة باسم b والقاعدة أو الارتفاع غير المعروف باسم a.",
            "تعمل الصفحة أيضًا بمثابة فحص للقياس. إذا كان الجانب المحسوب a مختلفًا تمامًا عن الجانب المقاس a، فقد لا يتضمن المثلث زاوية 90° حقيقية أو ربما تم نسخ إحدى القيم المعروفة بشكل غير صحيح."
          ],
          "listTitle": "تشمل الأمثلة الشائعة ما يلي:",
          "listItems": [
            "إيجاد المسافة الأساسية عندما يكون طول المنحدر c والارتفاع b معروفين.",
            "إيجاد الارتفاع العمودي بمعرفة الوتر والمسافة الأفقية.",
            "حل المسائل الهندسية التي تعطي c و b وتطلب a.",
            "التحقق من قياسات البناء أو رسم الخرائط أو مخطط الأرضية التي تشكل مثلثًا قائمًا."
          ]
        },
        {
          "h2": "كيفية قراءة الجواب",
          "paragraphs": [
            "الإخراج المسمى الساق المفقودة a هو الجانب الآخر الذي يشكل الزاوية اليمنى مع b. يجب أن يكون أقصر من الوتر c وأكبر من الصفر.",
            "إذا كانت النتيجة قريبة من c، فإن الضلع المعروف b يكون صغيرًا نسبيًا. إذا كانت النتيجة قريبة من الصفر، فإن b تكون تقريبًا بنفس طول c. يمكن أن يحدث كلاهما، ولكن يجب التحقق من تسميات الإدخال قبل استخدام الإجابة."
          ],
          "listTitle": "يجب أن تفي النتيجة الصحيحة بما يلي:",
          "listItems": [
            "أ أكبر من الصفر.",
            "a أقل من c.",
            "a² + b² يساوي تقريبًا c².",
            "تتطابق وحدة الإخراج مع الوحدة المستخدمة لـ c وb."
          ]
        },
        {
          "h2": "الأخطاء الشائعة",
          "paragraphs": [
            "الخطر الأكبر هو تبديل الوتر بالساق. تفترض هذه الآلة الحاسبة أن c هو بالفعل الجانب الأطول، وبالتالي فإن قيمة c ذات التسمية الخاطئة ستجعل النتيجة غير صحيحة.",
            "المشكلة الشائعة الثانية هي استخدام صيغة الوتر عن طريق الخطأ. للعثور على ساق مفقودة، عليك طرح مربع الساق المعروف من مربع الوتر، ثم أخذ الجذر التربيعي."
          ],
          "listTitle": "تجنب هذه الأخطاء:",
          "listItems": [
            "دخول الساق b كالوتر c.",
            "استخدام c² + b² بدلاً من c² - b².",
            "إدخال b أكبر من أو يساوي c.",
            "نسيان الجذر التربيعي بعد الطرح.",
            "الجمع بين القياسات التي تستخدم وحدات مختلفة."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "حاسبة جانب المثلث الأيمن"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "حاسبة: نظرية فيثاغورس"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "حاسبة: الضلع المفقود بدلالة c و a"
        }
      ],
      "faqs": [
        {
          "question": "ماذا يعني c في هذه الآلة الحاسبة؟",
          "answer": "c هو الوتر - أطول ضلع في المثلث القائم، مقابل زاوية 90°. في هذه الآلة الحاسبة، تقوم بإدخال c كواحدة من القيمتين المعروفتين لديك."
        },
        {
          "question": "ماذا يعني b في هذه الآلة الحاسبة؟",
          "answer": "b هو أحد ساقي المثلث القائم الزاوية. إنه الضلع الذي يشكل الزاوية القائمة. هنا، b هي الساق التي تعرفها بالفعل، وتستخدمها الآلة الحاسبة مع c للعثور على الساق المفقودة a."
        },
        {
          "question": "ماذا تجد هذه الآلة الحاسبة؟",
          "answer": "يجد الساق المفقودة a. تقوم بتوفير الوتر (c) والساق الواحدة (b)، وتقوم الآلة الحاسبة بتطبيق الصيغة a = √(c² − b²) لتمنحك الساق المجهولة مع حل خطوة بخطوة."
        },
        {
          "question": "هل يمكن أن يكون c أصغر من b؟",
          "answer": "لا، الوتر هو دائمًا أطول ضلع في المثلث القائم الزاوية. إذا كانت قيمة c أصغر من b، فإن المدخلات لا تمثل مثلثًا قائمًا صحيحًا. أعد التحقق من القياس الذي يتوافق مع الوتر."
        },
        {
          "question": "كيف يمكنني العثور على من c وb؟",
          "answer": "قم بتربيع الوتر (c²)، وتربيع الضلع المعروف (b²)، واطرح b² من c²، ثم خذ الجذر التربيعي للنتيجة. الصيغة هي a = √(c² − b²). يمكنك أيضًا إدخال القيم الخاصة بك في هذه الآلة الحاسبة للحصول على الإجابة تلقائيًا."
        }
      ]
    }
  },
  "bg": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Калкулатор: Питагорова теорема",
      "metaTitle": "Калкулатор: Питагорова теорема | Right Triangle Solver",
      "metaDescription": "Намерете хипотенузата, когато са известни двата катета. Това е основното тъждество за всеки правоъгълен триъгълник.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Независимо дали решавате домашна задача или измервате диагонал в реалния живот, този инструмент ви дава отговора за секунди - с пълното решение, показано стъпка по стъпка.",
      "intro": "Намерете хипотенузата, когато са известни двата катета. Това е основното тъждество за всеки правоъгълен триъгълник.",
      "quickSummary": {
        "h2": "Какво решава този калкулатор на Питагор",
        "intro": "Използвайте тази страница, когато двете страни, които се срещат под ъгъл 90°, са известни и диагоналната страна липсва. Калкулаторът се фокусира върху класическия случай на хипотенуза, така че входните данни остават прости и резултатът е лесен за проверка.",
        "cards": [
          {
            "label": "Известни стойности",
            "value": "a = катет срещу ъгъл A; b = катет срещу ъгъл B"
          },
          {
            "label": "Находки",
            "value": "c = хипотенуза"
          },
          {
            "label": "Основна формула",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Най-доброто за",
            "value": "Диагонали, стълби, рампи, паравани и домашна работа по геометрия"
          }
        ]
      },
      "diagram": {
        "h2": "Диаграма на правоъгълен триъгълник: намиране на хипотенузата",
        "intro": "Диаграмата показва точната странична връзка, използвана от инструмента. Двата катета са известните входни стойности, а наклонената страна c е хипотенузата, която калкулаторът намира.",
        "caption": "Диаграма на правоъгълен триъгълник с известни катети a и b и неизвестна хипотенуза c.",
        "sides": {
          "a": {
            "label": "a = известно",
            "description": "Крак a е една от двете страни, които образуват прав ъгъл.",
            "status": "known"
          },
          "b": {
            "label": "b = известно",
            "description": "Крак b е другата страна, която образува прав ъгъл.",
            "status": "known"
          },
          "c": {
            "label": "c = намери",
            "description": "Хипотенузата c е най-дългата страна и се намира срещу ъгъла 90°.",
            "status": "unknown"
          }
        },
        "notes": [
          "a и b могат да се разменят; резултатът от хипотенузата ще бъде същият.",
          "Използвайте една и съща единица за двата крака, преди да изчислите.",
          "Отговорът c винаги ще бъде по-голям от всеки катет в валиден правоъгълен триъгълник."
        ]
      },
      "calculator": {
        "outputLabel": "c = хипотенуза",
        "fields": [
          {
            "key": "a",
            "label": "a = катет срещу ъгъл A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = катет срещу ъгъл B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Формула на Питагоровата теорема",
        "paragraphs": [
          "Питагоровата теорема гласи, че в правоъгълен триъгълник квадратът на хипотенузата е равен на сумата от квадратите на двата катета. За да намерите хипотенузата, вземете корен квадратен от двете страни.",
          "В тази формула a и b са двата катета на правоъгълния триъгълник - страните, които образуват правия ъгъл. c е хипотенузата, най-дългата страна, срещу правия ъгъл. Тази формула работи само за правоъгълни триъгълници."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Как да използвате калкулатора на Питагоровата теорема",
        "steps": [
          "Идентифицирайте двата катета на вашия правоъгълен триъгълник. Това са страните, които образуват прав ъгъл.",
          "Въведете крака a в първото поле за въвеждане.",
          "Въведете крак b във второто поле за въвеждане.",
          "Щракнете върху Изчисли, за да намерите хипотенузата.",
          "Прочетете резултата за c, заедно с решението стъпка по стъпка."
        ]
      },
      "example": {
        "h2": "Пример: Намерете хипотенузата",
        "intro": "Дадено е: a = 6, b = 8. Хипотенузата на правоъгълен триъгълник с катети 6 и 8 е 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Къде е полезен този калкулатор",
          "paragraphs": [
            "Калкулаторът за хипотенуза е полезен винаги, когато две перпендикулярни разстояния се комбинират в едно диагонално разстояние. Особено полезно е, когато чертеж, етажен план или задача за домашна работа дава хоризонталната и вертикалната страна, но оставя диагоналната страна празна.",
            "Тъй като тази страница решава само за c, тя избягва объркването при превключване между странични режими. Ако вашите известни стойности са двата крака, това е фокусираният инструмент за Питагорова теорема, който да използвате."
          ],
          "listTitle": "Често срещаните примери включват:",
          "listItems": [
            "Намиране на диагонала на правоъгълник, екран, оформление на плочки или стая.",
            "Изчисляване на дължината на стълбата от височината на стената и разстоянието от земята.",
            "Оценяване на наклонената дължина на рампа от издигане и движение.",
            "Проверка на домашното с правоъгълен триъгълник преди изпращане на окончателния отговор."
          ]
        },
        {
          "h2": "Съвети за въвеждане за по-добри резултати",
          "paragraphs": [
            "Въведете дължините на двата крака като положителни числа. Десетичните знаци са добри и калкулаторът ще запази достатъчно точност, за да направи полезна работата стъпка по стъпка.",
            "Двата входа трябва да използват една и съща единица. Ако a се измерва във футове, а b се измерва в инчове, първо преобразувайте едно измерване, така че резултатът да е значим."
          ],
          "listTitle": "Преди да изчислите, проверете дали:",
          "listItems": [
            "a и b са страните, които докосват ъгъла 90°.",
            "Нито един вход не е нула или отрицателен.",
            "И двете стойности се измерват в една и съща единица.",
            "Решавате хипотенузата, а не липсващ катет."
          ]
        },
        {
          "h2": "Как да разчетем отговора",
          "paragraphs": [
            "Резултатът, означен с хипотенуза c, е страната срещу правия ъгъл. Това е диагоналната страна на диаграмата и трябва да е по-дълга от двата входни крака.",
            "Ако вашият резултат изглежда по-малък от a или b, това е знак, че един от входовете е неправилно етикетиран или че триъгълникът всъщност не е правоъгълен триъгълник."
          ],
          "listTitle": "Бърза проверка за разумност:",
          "listItems": [
            "c трябва да е по-голямо от a.",
            "c трябва да е по-голямо от b.",
            "c трябва да е по-малко от + b.",
            "За обикновени тройки като 3-4-5 или 5-12-13, резултатът трябва да съответства на известната тройка."
          ]
        },
        {
          "h2": "Често срещани грешки",
          "paragraphs": [
            "Повечето грешни отговори на хипотенузата идват от използването на правилната формула от грешните страни. Краката трябва да са двете страни, които правят прав ъгъл; хипотенузата никога не е вход на тази страница.",
            "Друг често срещан проблем е спирането на a² + b². Тази стойност е c², а не c. Стъпката на квадратния корен е това, което превръща стойността на квадрат обратно в действителната дължина на страната."
          ],
          "listTitle": "Избягвайте тези грешки:",
          "listItems": [
            "Използване на формулата върху триъгълник, който няма 90° ъгъл.",
            "Въведете диагоналната страна като a или b.",
            "Забравих да извадя корен квадратен в края.",
            "Смесване на единици като инчове и футове в едно и също изчисление."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Калкулатор на страната на десния триъгълник"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Калкулатор: Липсващ катет (чрез c и a)"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Калкулатор: Липсващ катет (чрез c и b)"
        }
      ],
      "faqs": [
        {
          "question": "Какво представлява Питагоровата теорема?",
          "answer": "Питагоровата теорема е формула, която свързва трите страни на правоъгълен триъгълник: a² + b² = c². Казва, че квадратът на хипотенузата е равен на сбора от квадратите на двата катета. Прилага се само за правоъгълни триъгълници."
        },
        {
          "question": "Какво означава c във формулата?",
          "answer": "Във формулата c² = a² + b² c е хипотенузата - най-дългата страна на правоъгълния триъгълник. Това е страната точно срещу ъгъла 90°."
        },
        {
          "question": "Мога ли да използвам този калкулатор за всеки триъгълник?",
          "answer": "Не. Този калкулатор използва Питагоровата теорема, която работи само за правоъгълни триъгълници. Ако вашият триъгълник няма ъгъл 90°, формулата няма да даде правилен резултат."
        },
        {
          "question": "Как да намеря хипотенузата?",
          "answer": "За да намерите хипотенузата, повдигнете на квадрат двата катета (a² и b²), добавете ги заедно и извадете корен квадратен от сумата. Формулата е c = √(a² + b²). Или просто въведете вашите стойности по-горе и оставете калкулатора да го направи."
        },
        {
          "question": "Какво представляват a и b в правоъгълен триъгълник?",
          "answer": "a и b са двата крака - страните, които образуват прав ъгъл. Те могат да бъдат с произволна положителна дължина и няма значение коя наричате a или b. Хипотенузата (c) винаги е оставащата страна."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Калкулатор: Липсващ катет (чрез c и a)",
      "metaTitle": "Калкулатор: Липсващ катет (чрез c и a) | Right Triangle Solver",
      "metaDescription": "Намерете катета b, когато са известни хипотенузата c и другият катет a.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Запомнете: c винаги е хипотенузата - най-дългата страна, срещу правия ъгъл. Това не е крак. Ако имате два крака и вместо това се нуждаете от хипотенузата, използвайте калкулатора на Питагоровата теорема.",
      "intro": "Намерете катета b, когато са известни хипотенузата c и другият катет a.",
      "quickSummary": {
        "h2": "Какво решава този калкулатор за липсващи крака",
        "intro": "Използвайте тази страница, когато хипотенузата и катетът a са известни, но другият катет липсва. Калкулаторът пренарежда Питагоровата теорема, за да извади известния катет от хипотенузата, преди да извади квадратния корен.",
        "cards": [
          {
            "label": "Известни стойности",
            "value": "c = хипотенуза; a = известен катет"
          },
          {
            "label": "Находки",
            "value": "b = неизвестен катет"
          },
          {
            "label": "Основна формула",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Задължителна проверка",
            "value": "Изисква c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Диаграма на правоъгълен триъгълник: Откриване на крак b",
        "intro": "Диаграмата маркира c и a като стойностите, които вече знаете. Вертикалният крак b е подчертан като липсващата страна, която този калкулатор решава.",
        "caption": "Диаграма на правоъгълен триъгълник с известна хипотенуза c, известен катет a и неизвестен катет b.",
        "sides": {
          "a": {
            "label": "a = известно",
            "description": "Крат a е познатият катет в основата на правоъгълния триъгълник.",
            "status": "known"
          },
          "b": {
            "label": "b = намери",
            "description": "Крак b е неизвестният крак, решен чрез изваждане на a^2 от c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = известно",
            "description": "Хипотенузата c е известната най-дълга страна срещу правия ъгъл.",
            "status": "known"
          }
        },
        "notes": [
          "c трябва да е хипотенузата, а не един от катетите.",
          "Ако c е по-малко или равно на a, входовете не образуват валиден правоъгълен триъгълник.",
          "Резултатът b използва същата единица като c и a."
        ]
      },
      "calculator": {
        "outputLabel": "b = неизвестен катет",
        "fields": [
          {
            "key": "c",
            "label": "c = хипотенуза",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = известен катет",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Липсващ крак b Формула",
        "paragraphs": [
          "Формулата за намиране на крака b е извлечена от Питагоровата теорема (a² + b² = c²). Пренареждането за b дава формулата по-долу.",
          "Където c е хипотенузата (най-дългата страна на правоъгълния триъгълник), a е известният катет, а b е липсващият катет, който намирате. Обърнете внимание на изваждането: изваждате квадрата на известния катет от квадрата на хипотенузата, след което изваждате корен квадратен."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Как да намерите крака b от c и a",
        "steps": [
          "Потвърдете, че c е хипотенузата и a е катет. Хипотенузата винаги е най-дългата страна.",
          "Въведете хипотенузата c в първото поле за въвеждане.",
          "Въведете известния крак a във второто поле за въвеждане.",
          "Щракнете върху Изчисли, за да намерите липсващия крак.",
          "Прочетете резултата за b, заедно с пълното решение стъпка по стъпка."
        ]
      },
      "example": {
        "h2": "Пример: Намерете крак b",
        "intro": "Дадено е: c = 13, a = 5. Липсващият катет на правоъгълен триъгълник с хипотенуза 13 и катет 5 е 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Важна проверка преди изчисляване",
          "paragraphs": [
            "Преди да използвате тази формула, уверете се, че c е по-голямо от a. Хипотенузата винаги е най-дългата страна на правоъгълен триъгълник. Ако c е равно на a, ще получите b = 0, което означава, че не съществува триъгълник.",
            "Ако c е по-малко от a, изразът под квадратния корен става отрицателен. Това означава, че двете входни стойности не могат да опишат реален правоъгълен триъгълник със c като хипотенуза."
          ],
          "listTitle": "Първо използвайте тези проверки:",
          "listItems": [
            "c е срещу ъгъла 90°.",
            "c е по-голям от a.",
            "И двете стойности са положителни.",
            "c и a използват една и съща единица."
          ]
        },
        {
          "h2": "Къде е полезен този калкулатор",
          "paragraphs": [
            "Този калкулатор е полезен, когато е известно диагонално или наклонено измерване, едната перпендикулярна страна е известна, а другата перпендикулярна страна липсва. Това е фокусираният инструмент за c-and-a case, така че всяко обяснение на страницата сочи към намирането на b.",
            "Може също да помогне за проверка на измерванията. Ако измерена стойност за b не ​​съответства на резултата от калкулатора, триъгълникът може да не е правилен, хипотенузата може да е неправилно обозначена или едно измерване може да използва различна единица."
          ],
          "listTitle": "Често срещаните примери включват:",
          "listItems": [
            "Намиране на височината на стената, когато са известни дължината на стълба c и земното разстояние a.",
            "Намиране на вертикалното издигане на наклон, когато са известни дължината на наклона и хоризонталният ход.",
            "Проверка на домашна задача с правоъгълен триъгълник, която дава c и a.",
            "Потвърждаване на измерванията на оформлението за рамкиране, озеленяване, рампи или етажни планове."
          ]
        },
        {
          "h2": "Как да разчетем отговора",
          "paragraphs": [
            "Резултатът, означен с липсващ крак b, е дължината на другия крак, който образува прав ъгъл с a. Това не е хипотенузата и трябва да е по-късо от c.",
            "Ако изчисленото b е изключително малко, известният ви крак a е много близо до хипотенузата c. Това може да е валидно, но си струва да проверите диаграмата и единиците, преди да използвате стойността."
          ],
          "listTitle": "Валиден резултат трябва да удовлетворява:",
          "listItems": [
            "b е по-голямо от нула.",
            "b е по-малко от c.",
            "a² + b² е приблизително равен на c².",
            "Изходната единица съответства на входната единица."
          ]
        },
        {
          "h2": "Често срещани грешки",
          "paragraphs": [
            "Най-честата грешка е третирането на c като крак. В този калкулатор c трябва да е хипотенузата, която е най-дългата страна и страната срещу правия ъгъл.",
            "Друга често срещана грешка е събирането на квадратите вместо изваждането. Събирането намира хипотенуза; изваждане открива липсващ катет от хипотенузата."
          ],
          "listTitle": "Избягвайте тези грешки:",
          "listItems": [
            "Поставяне на известния катет в полето на хипотенузата.",
            "Използване на c² + a² вместо c² - a².",
            "Въвеждане на по-голямо или равно на c.",
            "Спиране на b² вместо извличане на корен квадратен.",
            "Смесващи единици като метри и сантиметри."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Калкулатор на страната на десния триъгълник"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Калкулатор: Питагорова теорема"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Калкулатор: Липсващ катет (чрез c и b)"
        }
      ],
      "faqs": [
        {
          "question": "Какво означава c в този калкулатор?",
          "answer": "c е хипотенузата на правоъгълния триъгълник - най-дългата страна, разположена срещу ъгъла 90°. Това не е крак. Въвеждате c като една от двете известни стойности в този калкулатор."
        },
        {
          "question": "Какво означава в този калкулатор?",
          "answer": "a е един от двата катета на правоъгълния триъгълник. Това е една от страните, която образува прав ъгъл. В този калкулатор a е кракът, който вече знаете."
        },
        {
          "question": "Какво намира този калкулатор?",
          "answer": "Този калкулатор намира липсващия крак b. При дадена хипотенуза c и катет a, той изчислява b = √(c² − a²) и ви показва решението стъпка по стъпка."
        },
        {
          "question": "Може ли c да бъде по-малък от a?",
          "answer": "Не. В правоъгълен триъгълник хипотенузата винаги е най-дългата страна. Ако c е по-малък от a, стойностите не образуват валиден правоъгълен триъгълник. Проверете коя мярка е хипотенузата, преди да изчислите."
        },
        {
          "question": "Как да намеря b от c и a?",
          "answer": "Квадратирайте хипотенузата (c²), повдигнете на квадрат известния катет (a²), извадете a² от c² и извадете корен квадратен. Формулата е b = √(c² − a²). Или въведете вашите стойности в този калкулатор за незабавен отговор."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Калкулатор: Липсващ катет (чрез c и b)",
      "metaTitle": "Калкулатор: Липсващ катет (чрез c и b) | Right Triangle Solver",
      "metaDescription": "Намерете катета a, когато са известни хипотенузата c и катетът b.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Имайте предвид: c е хипотенузата, а не катет. Това е най-дългата страна на триъгълника и се намира срещу ъгъла 90°. Ако имате и двата катета и се нуждаете от хипотенузата, използвайте вместо това калкулатора на Питагоровата теорема.",
      "intro": "Намерете катета a, когато са известни хипотенузата c и катетът b.",
      "quickSummary": {
        "h2": "Какво решава този калкулатор за липсващи крака",
        "intro": "Използвайте тази страница, когато знаете хипотенузата и катета b, но имате нужда от катет a. Той държи известната страна b отделена от неизвестната страна a, така че формулата и резултатът да съответстват на етикетите на вашия триъгълник.",
        "cards": [
          {
            "label": "Известни стойности",
            "value": "c = хипотенуза; b = известен катет"
          },
          {
            "label": "Находки",
            "value": "a = неизвестен катет"
          },
          {
            "label": "Основна формула",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Задължителна проверка",
            "value": "Изисква c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Диаграма на правоъгълен триъгълник: Откриване на крак a",
        "intro": "Диаграмата показва c като известна хипотенуза и b като известен катет. Основният крак a е подчертан като липсващата стойност, върната от калкулатора.",
        "caption": "Диаграма на правоъгълен триъгълник с известна хипотенуза c, известен катет b и неизвестен катет a.",
        "sides": {
          "a": {
            "label": "a = намерете",
            "description": "Крак a е неизвестният базов крак, решен от c и b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = известно",
            "description": "Крак b е известният катет, който образува прав ъгъл с a.",
            "status": "known"
          },
          "c": {
            "label": "c = известно",
            "description": "Хипотенузата c е известната най-дълга страна на правоъгълния триъгълник.",
            "status": "known"
          }
        },
        "notes": [
          "Хипотенузата c трябва да бъде най-дългата страна във входната двойка.",
          "Ако c е по-малко или равно на b, проверете отново коя стойност е хипотенузата.",
          "Изчисленото a има същата единица като стойностите, които сте въвели."
        ]
      },
      "calculator": {
        "outputLabel": "a = неизвестен катет",
        "fields": [
          {
            "key": "c",
            "label": "c = хипотенуза",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = известен катет",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Липсващ крак a Formula",
        "paragraphs": [
          "Започвайки от Питагоровата теорема (a² + b² = c²), решете за a, за да получите формулата по-долу.",
          "Където c е хипотенузата (най-дългата страна, срещу правия ъгъл), b е известният катет, а a е липсващият катет, който искате да намерите. Ключовата операция е изваждане: повдигнете хипотенузата на квадрат, извадете квадрата на известния катет, след това извадете корен квадратен от това, което е останало."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Как да намерите крака a от c и b",
        "steps": [
          "Уверете се, че сте идентифицирали правилно хипотенузата (c) и известния катет (b). Хипотенузата винаги е срещу ъгъла 90°.",
          "Въведете хипотенузата c в първото поле за въвеждане.",
          "Въведете известния крак b във второто поле за въвеждане.",
          "Щракнете върху Изчисли, за да намерите крака a.",
          "Прегледайте резултата за a и работата стъпка по стъпка, показана по-долу."
        ]
      },
      "example": {
        "h2": "Пример: Намерете крак a",
        "intro": "Дадено е: c = 10, b = 6. Липсващият катет на правоъгълен триъгълник с хипотенуза 10 и катет 6 е 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Важна проверка преди изчисляване",
          "paragraphs": [
            "Хипотенузата c трябва да е по-голяма от b, за да работи изчислението. Във всеки правоъгълен триъгълник хипотенузата е най-дългата страна. Ако c е равно на b, формулата дава a = 0, което означава, че не може да се образува триъгълник.",
            "Ако c е по-малко от b, изразът под квадратния корен става отрицателен и няма реална дължина на страната за a. В такъв случай проверете отново коя страна е противоположна на ъгъла 90°."
          ],
          "listTitle": "Първо използвайте тези проверки:",
          "listItems": [
            "c е страната срещу правия ъгъл.",
            "c е по-голям от b.",
            "И двата входа са положителни числа.",
            "c и b използват една и съща мерна единица."
          ]
        },
        {
          "h2": "Къде е полезен този калкулатор",
          "paragraphs": [
            "Този калкулатор е правилният инструмент, когато знаете хипотенузата и катета b и трябва да намерите катета a. Особено полезно е, когато вашата диаграма обозначава известния крак като b и неизвестната основа или височина като a.",
            "Страницата работи и като проверка на измерванията. Ако изчислената страна a е много различна от измерената от a страна, триъгълникът може да не включва истински 90° ъгъл или една от известните стойности може да е копирана неправилно."
          ],
          "listTitle": "Често срещаните примери включват:",
          "listItems": [
            "Намиране на базово разстояние, когато са известни дължината на наклона c и височината b.",
            "Намиране на вертикална височина, когато са известни хипотенузата и хоризонталното разстояние.",
            "Решаване на геометрични задачи, които дават c и b и изискват a.",
            "Проверка на строителни, картографски или етажни измервания, които образуват правоъгълен триъгълник."
          ]
        },
        {
          "h2": "Как да разчетем отговора",
          "paragraphs": [
            "Резултатът с етикет Липсващ крак a е другата страна, която образува прав ъгъл с b. Тя трябва да е по-къса от хипотенузата c и по-голяма от нула.",
            "Ако резултатът е близък до c, известният крак b е относително малък. Ако резултатът е близо до нула, b е почти толкова дълъг, колкото c. И двете могат да се случат, но въведените етикети трябва да бъдат проверени, преди да използвате отговора."
          ],
          "listTitle": "Валиден резултат трябва да удовлетворява:",
          "listItems": [
            "a е по-голямо от нула.",
            "a е по-малко от c.",
            "a² + b² е приблизително равен на c².",
            "Изходната единица съответства на единицата, използвана за c и b."
          ]
        },
        {
          "h2": "Често срещани грешки",
          "paragraphs": [
            "Най-големият риск е размяната на хипотенузата с катет. Този калкулатор приема, че c вече е най-дългата страна, така че неправилно означена c стойност ще направи резултата неправилен.",
            "Втори често срещан проблем е използването на формулата на хипотенузата по погрешка. За да намерите липсващ катет, изваждате известния квадрат на катета от квадрата на хипотенузата, след което изваждате корен квадратен."
          ],
          "listTitle": "Избягвайте тези грешки:",
          "listItems": [
            "Въвеждане на катет b като хипотенуза c.",
            "Използване на c² + b² вместо c² - b².",
            "Въвеждане на b, по-голямо или равно на c.",
            "Забравяне на квадратния корен след изваждане.",
            "Комбиниране на измервания, които използват различни единици."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Калкулатор на страната на десния триъгълник"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Калкулатор: Питагорова теорема"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Калкулатор: Липсващ катет (чрез c и a)"
        }
      ],
      "faqs": [
        {
          "question": "Какво означава c в този калкулатор?",
          "answer": "c е хипотенузата - най-дългата страна на правоъгълния триъгълник, срещу ъгъла 90°. В този калкулатор въвеждате c като една от двете ви известни стойности."
        },
        {
          "question": "Какво означава b в този калкулатор?",
          "answer": "b е един от двата катета на правоъгълния триъгълник. Това е страна, която образува прав ъгъл. Тук b е кракът, който вече познавате, и калкулаторът го използва заедно с c, за да намери липсващия крак a."
        },
        {
          "question": "Какво намира този калкулатор?",
          "answer": "Намира липсващия крак a. Предоставяте хипотенузата (c) и единия катет (b), а калкулаторът прилага формулата a = √(c² − b²), за да ви даде неизвестния катет с решение стъпка по стъпка."
        },
        {
          "question": "Може ли c да бъде по-малък от b?",
          "answer": "Не. Хипотенузата винаги е най-дългата страна в правоъгълен триъгълник. Ако вашата стойност за c е по-малка от b, входовете не представляват валиден правоъгълен триъгълник. Проверете отново коя мярка съответства на хипотенузата."
        },
        {
          "question": "Как да намеря от c и b?",
          "answer": "Квадратирайте хипотенузата (c²), повдигнете на квадрат известния крак (b²), извадете b² от c² и извадете корен квадратен от резултата. Формулата е a = √(c² − b²). Можете също така просто да въведете вашите стойности в този калкулатор, за да получите отговора автоматично."
        }
      ]
    }
  },
  "tr": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Hesaplayıcı: Pisagor Teoremi",
      "metaTitle": "Hesaplayıcı: Pisagor Teoremi | Right Triangle Solver",
      "metaDescription": "Her iki dik kenar bilindiğinde hipotenüsü bulun. Bu, her dik üçgen için temel özdeşliktir.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "İster bir ev ödevi problemini çözüyor olun ister gerçek hayatta bir köşegeni ölçüyor olun, bu araç size saniyeler içinde cevabı verir; tam çözümün adım adım gösterilmesini sağlar.",
      "intro": "Her iki dik kenar bilindiğinde hipotenüsü bulun. Bu, her dik üçgen için temel özdeşliktir.",
      "quickSummary": {
        "h2": "Bu Pisagor Hesap Makinesi Neyi Çözüyor?",
        "intro": "90° açısında buluşan iki kenar bilindiğinde ve çapraz kenar eksik olduğunda bu sayfayı kullanın. Hesap makinesi klasik hipotenüs durumuna odaklanır, böylece girdiler basit kalır ve sonucun kontrol edilmesi kolaydır.",
        "cards": [
          {
            "label": "Bilinen değerler",
            "value": "a = A açısının karşısındaki kenar; b = B açısının karşısındaki kenar"
          },
          {
            "label": "Buluntular",
            "value": "c = hipotenüs"
          },
          {
            "label": "Ana formül",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Şunun için en iyisi:",
            "value": "Çaprazlar, merdivenler, rampalar, ekranlar ve geometri ödevi"
          }
        ]
      },
      "diagram": {
        "h2": "Sağ Üçgen Diyagramı: Hipotenüsün Bulunması",
        "intro": "Diyagram, aracın kullandığı tam yan ilişkiyi gösterir. İki kenar bilinen giriş değerleridir ve eğimli taraf c hesap makinesinin bulduğu hipotenüstür.",
        "caption": "Bilinen kenarlar a ve b ve bilinmeyen hipotenüs c'i içeren sağ üçgen diyagramı.",
        "sides": {
          "a": {
            "label": "a = biliniyor",
            "description": "kenar a dik açıyı oluşturan iki taraftan biridir.",
            "status": "known"
          },
          "b": {
            "label": "b = biliniyor",
            "description": "kenar b dik açıyı oluşturan diğer taraftır.",
            "status": "known"
          },
          "c": {
            "label": "c = bul",
            "description": "Hipotenüs c en uzun kenardır ve 90° açısının karşısında yer alır.",
            "status": "unknown"
          }
        },
        "notes": [
          "a ve b değiştirilebilir; hipotenüs sonucu aynı olacaktır.",
          "Hesaplamadan önce her iki kenar için aynı birimi kullanın.",
          "c cevabı her zaman geçerli bir dik üçgenin her iki bacağından da büyük olacaktır."
        ]
      },
      "calculator": {
        "outputLabel": "c = hipotenüs",
        "fields": [
          {
            "key": "a",
            "label": "a = A açısının karşısındaki kenar",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = B açısının karşısındaki kenar",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Pisagor Teoremi Formülü",
        "paragraphs": [
          "Pisagor teoremi, bir dik üçgende hipotenüsün karesinin iki kenarın karelerinin toplamına eşit olduğunu belirtir. Hipotenüsü çözmek için her iki tarafın karekökünü alın.",
          "Bu formülde, a ve b dik üçgenin iki ayağıdır; yani dik açıyı oluşturan kenarlardır. c dik açının karşısındaki en uzun kenar olan hipotenüstür. Bu formül yalnızca dik üçgenler için işe yarar."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Pisagor Teoremi Hesaplayıcısı Nasıl Kullanılır",
        "steps": [
          "Sağ üçgeninizin iki ayağını tanımlayın. Bunlar dik açıyı oluşturan kenarlardır.",
          "İlk giriş alanına a ayağını girin.",
          "İkinci giriş alanına b ayağını girin.",
          "Hipotenüsü bulmak için Hesapla'yı tıklayın.",
          "Adım adım çözümle birlikte c sonucunu okuyun."
        ]
      },
      "example": {
        "h2": "Örnek: Hipotenüsü bulun",
        "intro": "Verilen: a = 6, b = 8. kenarları 6 ve 8 olan bir dik üçgenin hipotenüsü 10'dur.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Bu Hesap Makinesinin Yararlı Olduğu Yerler",
          "paragraphs": [
            "Hipotenüs hesaplayıcısı, iki dik mesafenin bir çapraz mesafeye dönüştüğü durumlarda kullanışlıdır. Bir çizim, kat planı veya ev ödevi probleminde yatay ve dikey kenarların verildiği ancak çapraz kenarların boş bırakıldığı durumlarda özellikle yararlıdır.",
            "Bu sayfa yalnızca c için çözüm sağladığından yan modlar arasında geçiş yapma karmaşasını ortadan kaldırır. Bilinen değerleriniz iki kenarsa, bu, kullanılacak odaklanmış Pisagor teoremi aracıdır."
          ],
          "listTitle": "Yaygın örnekler şunları içerir:",
          "listItems": [
            "Bir dikdörtgenin, ekranın, döşeme düzeninin veya odanın köşegenini bulma.",
            "Duvar yüksekliğinden ve zemin mesafesinden merdiven uzunluğunun hesaplanması.",
            "Bir rampanın eğimli uzunluğunun yükseliş ve ilerlemeden tahmin edilmesi.",
            "Son cevabı göndermeden önce sağ üçgen ödevini kontrol etmek."
          ]
        },
        {
          "h2": "Daha İyi Sonuçlar İçin Giriş İpuçları",
          "paragraphs": [
            "Her iki kenar uzunluğunu da pozitif sayılar olarak girin. Ondalık sayılar iyidir ve hesap makinesi, adım adım çalışmayı faydalı kılmak için yeterli hassasiyeti koruyacaktır.",
            "İki giriş aynı birimi kullanmalıdır. a, fit cinsinden ve b inç cinsinden ölçülürse, sonucun anlamlı olması için önce bir ölçümü dönüştürün."
          ],
          "listTitle": "Hesaplamadan önce şunları kontrol edin:",
          "listItems": [
            "a ve b, 90° açısına temas eden taraflardır.",
            "Hiçbir giriş sıfır veya negatif değildir.",
            "Her iki değer de aynı birimde ölçülür.",
            "Eksik bir bacağı değil, hipotenüsü çözüyorsunuz."
          ]
        },
        {
          "h2": "Cevap Nasıl Okunur?",
          "paragraphs": [
            "Hipotenüs c etiketli çıktı dik açının karşısındaki taraftır. Diyagramdaki çapraz taraftır ve her iki giriş ayağından daha uzun olmalıdır.",
            "Sonucunuz a veya b'ten daha küçük görünüyorsa, bu, girdilerden birinin yanlış etiketlendiğinin veya üçgenin aslında bir dik üçgen olmadığının işaretidir."
          ],
          "listTitle": "Hızlı bir makullük kontrolü:",
          "listItems": [
            "c, a'tan büyük olmalıdır.",
            "c, b'ten büyük olmalıdır.",
            "c, + b'ten küçük olmalıdır.",
            "3-4-5 veya 5-12-13 gibi yaygın üçlüler için sonuç, bilinen üçlüyle eşleşmelidir."
          ]
        },
        {
          "h2": "Yaygın Hatalar",
          "paragraphs": [
            "Yanlış hipotenüs cevaplarının çoğu, doğru formülün yanlış taraflarda kullanılmasından kaynaklanır. kenarlar dik açı yapan iki taraf olmalıdır; Hipotenüs bu sayfada hiçbir zaman bir girdi değildir.",
            "Diğer bir yaygın sorun da a² + b²'te durmaktır. Bu değer c değil, c²'tir. Karekök adımı, kare değerini tekrar gerçek kenar uzunluğuna dönüştüren adımdır."
          ],
          "listTitle": "Bu hatalardan kaçının:",
          "listItems": [
            "Formülün 90° açısı olmayan bir üçgen üzerinde kullanılması.",
            "Çapraz tarafa a veya b olarak giriliyor.",
            "Sonda karekök almayı unutmak.",
            "İnç ve fit gibi birimleri aynı hesaplamada karıştırmak."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Sağ Üçgen Kenar Hesaplayıcı"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Hesaplayıcı: Kayıp Dik Kenar (c ve a ile)"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Hesaplayıcı: Kayıp Dik Kenar (c ve b ile)"
        }
      ],
      "faqs": [
        {
          "question": "Pisagor teoremi nedir?",
          "answer": "Pisagor teoremi bir dik üçgenin üç kenarını ilişkilendiren bir formüldür: a² + b² = c². Hipotenüsün karesinin iki kenarın karelerinin toplamına eşit olduğunu söylüyor. Bu sadece dik üçgenler için geçerlidir."
        },
        {
          "question": "Formülde c ne anlama geliyor?",
          "answer": "c² = a² + b² formülünde c, dik üçgenin en uzun kenarı olan hipotenüstür. 90° açısının tam karşısındaki taraftır."
        },
        {
          "question": "Bu hesap makinesini herhangi bir üçgen için kullanabilir miyim?",
          "answer": "Hayır. Bu hesap makinesi yalnızca dik üçgenlerde işe yarayan Pisagor teoremini kullanır. Eğer üçgeninizin 90° açısı yoksa formül doğru sonuç vermeyecektir."
        },
        {
          "question": "Hipotenüsü nasıl bulurum?",
          "answer": "Hipotenüsü bulmak için her iki kenarın karesini alın (a² ve b²), bunları toplayın ve toplamın karekökünü alın. Formül c = √(a² + b²)'tir. Veya yukarıya değerlerinizi girin ve bırakın hesap makinesi bunu yapsın."
        },
        {
          "question": "Dik üçgende a ve b nedir?",
          "answer": "a ve b iki ayaktır; dik açıyı oluşturan kenarlar. Herhangi bir pozitif uzunlukta olabilirler ve hangisine a veya b adını verdiğiniz önemli değildir. Hipotenüs (c) her zaman kalan taraftır."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Hesaplayıcı: Kayıp Dik Kenar (c ve a ile)",
      "metaTitle": "Hesaplayıcı: Kayıp Dik Kenar (c ve a ile) | Right Triangle Solver",
      "metaDescription": "Hipotenüs c ve diğer dik kenar a bilindiğinde dik kenar b'yi bulun.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Unutmayın: c her zaman hipotenüstür; dik açının karşısındaki en uzun kenardır. Bu bir kenar değil. İki bacağınız varsa ve bunun yerine hipotenüse ihtiyacınız varsa Pisagor Teoremi Hesaplayıcısını kullanın.",
      "intro": "Hipotenüs c ve diğer dik kenar a bilindiğinde dik kenar b'yi bulun.",
      "quickSummary": {
        "h2": "Bu Eksik kenar Hesaplayıcısı Neyi Çözüyor?",
        "intro": "Hipotenüs ve a kenarı bilindiğinde ancak diğer kenar eksik olduğunda bu sayfayı kullanın. Hesap makinesi, karekök almadan önce hipotenüsten bilinen kenarı çıkarmak için Pisagor teoremini yeniden düzenler.",
        "cards": [
          {
            "label": "Bilinen değerler",
            "value": "c = hipotenüs; a = bilinen kenar"
          },
          {
            "label": "Buluntular",
            "value": "b = bilinmeyen kenar"
          },
          {
            "label": "Ana formül",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Gerekli kontrol",
            "value": "c > a olmalıdır."
          }
        ]
      },
      "diagram": {
        "h2": "Sağ Üçgen Diyagramı: kenar Bulma b",
        "intro": "Diyagram c ve a'i zaten bildiğiniz değerler olarak işaretler. Dikey kenar b, bu hesap makinesinin çözdüğü eksik taraf olarak vurgulanmıştır.",
        "caption": "Bilinen hipotenüs c, bilinen kenar a ve bilinmeyen kenar b'i içeren sağ üçgen diyagramı.",
        "sides": {
          "a": {
            "label": "a = biliniyor",
            "description": "kenar a, sağ üçgenin tabanı boyunca bilinen kenartır.",
            "status": "known"
          },
          "b": {
            "label": "b = bul",
            "description": "Ayak b, a^2'in c^2'ten çıkarılmasıyla çözülen bilinmeyen kenartır.",
            "status": "unknown"
          },
          "c": {
            "label": "c = biliniyor",
            "description": "Hipotenüs c dik açının karşısındaki bilinen en uzun kenardır.",
            "status": "known"
          }
        },
        "notes": [
          "c kenarlardan biri değil, hipotenüs olmalıdır.",
          "c, a'ten küçük veya ona eşitse girişler geçerli bir dik üçgen oluşturmaz.",
          "Sonuç b, c ve a ile aynı birimi kullanır."
        ]
      },
      "calculator": {
        "outputLabel": "b = bilinmeyen kenar",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenüs",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = bilinen kenar",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Eksik kenar b Formülü",
        "paragraphs": [
          "b ayağını bulma formülü Pisagor teoreminden (a² + b² = c²) türetilmiştir. b için yeniden düzenleme aşağıdaki formülü verir.",
          "c hipotenüs (sağ üçgenin en uzun kenarı) olduğunda, a bilinen kenardır ve b çözdüğünüz eksik kenardır. Çıkarmaya dikkat edin: bilinen kenarın karesini hipotenüsün karesinden çıkarırsınız, sonra karekökünü alırsınız."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "c ve a'tan b kenar Nasıl Bulunur?",
        "steps": [
          "c'in hipotenüs ve a'nın bir kenar olduğunu doğrulayın. Hipotenüs her zaman en uzun kenardır.",
          "İlk giriş alanına hipotenüs c'i girin.",
          "Bilinen kenar a'ı ikinci giriş alanına girin.",
          "Eksik bacağı bulmak için Hesapla'ya tıklayın.",
          "Tam adım adım çözümle birlikte b sonucunu okuyun."
        ]
      },
      "example": {
        "h2": "Örnek: b Bacağını Bul",
        "intro": "Verilen: c = 13, a = 5. Hipotenüsü 13 ve kenarı 5 olan bir dik üçgenin eksik kenarı 12'dir.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Hesaplamadan Önce Önemli Kontrol",
          "paragraphs": [
            "Bu formülü kullanmadan önce c'in a'tan büyük olduğundan emin olun. Hipotenüs her zaman dik üçgenin en uzun kenarıdır. c, a'a eşitse b = 0 elde edersiniz, bu da üçgenin olmadığı anlamına gelir.",
            "c, a'tan küçükse karekök altındaki ifade negatif olur. Bu, iki giriş değerinin, hipotenüs olarak c'e sahip bir gerçek dik üçgeni tanımlayamayacağı anlamına gelir."
          ],
          "listTitle": "İlk önce bu kontrolleri kullanın:",
          "listItems": [
            "c, 90° açısının karşısındadır.",
            "c, a'tan daha büyüktür.",
            "Her iki değer de pozitiftir.",
            "c ve a aynı üniteyi kullanır."
          ]
        },
        {
          "h2": "Bu Hesap Makinesinin Yararlı Olduğu Yerler",
          "paragraphs": [
            "Bu hesaplayıcı, çapraz veya eğimli bir ölçüm bilindiğinde, bir dik kenar bilindiğinde ve diğer dik kenar eksik olduğunda kullanışlıdır. Bu, c ve bir durum için odaklanmış bir araçtır, dolayısıyla sayfadaki her açıklama b'in bulunmasına işaret eder.",
            "Ayrıca ölçümlerin doğrulanmasına da yardımcı olabilir. b için ölçülen değer hesap makinesinin sonucuyla eşleşmiyorsa üçgen doğru olmayabilir, hipotenüs yanlış etiketlenmiş olabilir veya bir ölçümde farklı bir birim kullanılmış olabilir."
          ],
          "listTitle": "Yaygın örnekler şunları içerir:",
          "listItems": [
            "Merdiven uzunluğu c ve zemin mesafesi a bilindiğinde duvar yüksekliğini bulma.",
            "Şev uzunluğu ve yatay mesafe bilindiğinde bir şevin dikey yükselişini bulma.",
            "c ve a veren dik üçgen ödev problemini kontrol etmek.",
            "Çerçeveleme, çevre düzenlemesi, rampalar veya kat planları için yerleşim ölçümlerinin onaylanması."
          ]
        },
        {
          "h2": "Cevap Nasıl Okunur?",
          "paragraphs": [
            "Eksik kenar b etiketli çıktı, a ile dik açı oluşturan diğer bacağın uzunluğudur. Bu hipotenüs değildir ve c'ten daha kısa olmalıdır.",
            "Hesaplanan b son derece küçükse, bilinen a ayağınız c hipotenüsüne çok yakındır. Bu geçerli olabilir, ancak değeri kullanmadan önce diyagramı ve birimleri kontrol etmeye değer."
          ],
          "listTitle": "Geçerli bir sonuç aşağıdakileri karşılamalıdır:",
          "listItems": [
            "b sıfırdan büyüktür.",
            "b, c'ten küçüktür.",
            "a² + b² yaklaşık olarak c²'e eşittir.",
            "Çıkış birimi giriş birimiyle eşleşir."
          ]
        },
        {
          "h2": "Yaygın Hatalar",
          "paragraphs": [
            "En yaygın hata c'i kenar olarak ele almaktır. Bu hesaplayıcıda c, en uzun kenar ve dik açının karşısındaki kenar olan hipotenüs olmalıdır.",
            "Sıklıkla yapılan bir diğer hata da kareleri çıkarmak yerine toplamaktır. Toplama bir hipotenüs bulur; çıkarma işlemi hipotenüsten eksik olan bir kenarı bulur."
          ],
          "listTitle": "Bu hatalardan kaçının:",
          "listItems": [
            "Bilinen bacağı hipotenüs alanına koymak.",
            "c² - a² yerine c² + a² kullanılması.",
            "c'ten büyük veya ona eşit giriliyor.",
            "Karekök almak yerine b²'te durmak.",
            "Metre ve santimetre gibi birimleri karıştırma."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Sağ Üçgen Kenar Hesaplayıcı"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Hesaplayıcı: Pisagor Teoremi"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Hesaplayıcı: Kayıp Dik Kenar (c ve b ile)"
        }
      ],
      "faqs": [
        {
          "question": "Bu hesap makinesinde c ne anlama geliyor?",
          "answer": "c, 90° açısının karşısında yer alan en uzun kenar olan dik üçgenin hipotenüsüdür. Bu bir kenar değil. Bu hesaplayıcıda c'i bilinen iki değerden biri olarak girersiniz."
        },
        {
          "question": "Bu hesap makinesinde a'nın anlamı nedir?",
          "answer": "a, dik üçgenin iki bacağından biridir. Dik açıyı oluşturan kenarlardan biridir. Bu hesap makinesinde a, zaten bildiğiniz kenartır."
        },
        {
          "question": "Bu hesap makinesi ne buluyor?",
          "answer": "Bu hesaplayıcı b'in eksik ayağını bulur. Hipotenüs c ve kenar a verildiğinde, b = √(c² − a²)'i hesaplar ve size adım adım çözümü gösterir."
        },
        {
          "question": "c a'dan küçük olabilir mi?",
          "answer": "Hayır. Bir dik üçgende hipotenüs her zaman en uzun kenardır. c, a'tan küçükse değerler geçerli bir dik üçgen oluşturmaz. Hesaplamadan önce hangi ölçümün hipotenüs olduğunu kontrol edin."
        },
        {
          "question": "c ve a'tan b'i nasıl bulabilirim?",
          "answer": "Hipotenüsün karesini alın (c²), bilinen kenarın karesini alın (a²), a²'i c²'ten çıkarın ve karekökünü alın. Formül b = √(c² − a²)'tir. Veya anında yanıt almak için değerlerinizi bu hesap makinesine girin."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Hesaplayıcı: Kayıp Dik Kenar (c ve b ile)",
      "metaTitle": "Hesaplayıcı: Kayıp Dik Kenar (c ve b ile) | Right Triangle Solver",
      "metaDescription": "Hipotenüs c ve dik kenar b bilindiğinde dik kenar a'yı bulun.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Unutmayın: c bir kenar değil, hipotenüstür. Üçgenin en uzun kenarıdır ve 90° açısının karşısında yer alır. Her iki bacağınız da varsa ve hipotenüse ihtiyacınız varsa bunun yerine Pisagor Teoremi Hesaplayıcısını kullanın.",
      "intro": "Hipotenüs c ve dik kenar b bilindiğinde dik kenar a'yı bulun.",
      "quickSummary": {
        "h2": "Bu Eksik kenar Hesaplayıcısı Neyi Çözüyor?",
        "intro": "Hipotenüsü ve b kenarını bildiğiniz halde a kenarına ihtiyacınız olduğunda bu sayfayı kullanın. Bilinen taraf b'i bilinmeyen taraf a'tan ayrı tutar, böylece formül ve sonuç üçgeninizdeki etiketlerle eşleşir.",
        "cards": [
          {
            "label": "Bilinen değerler",
            "value": "c = hipotenüs; b = bilinen kenar"
          },
          {
            "label": "Buluntular",
            "value": "a = bilinmeyen kenar"
          },
          {
            "label": "Ana formül",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Gerekli kontrol",
            "value": "c > b olmalıdır."
          }
        ]
      },
      "diagram": {
        "h2": "Sağ Üçgen Diyagramı: a Bacağını Bulma",
        "intro": "Diyagram bilinen hipotenüs olarak c'i ve bilinen kenar olarak b'i göstermektedir. Temel kenar a, hesap makinesinin döndürdüğü eksik değer olarak vurgulanır.",
        "caption": "Bilinen hipotenüs c, bilinen kenar b ve bilinmeyen kenar a ile sağ üçgen diyagramı.",
        "sides": {
          "a": {
            "label": "a = bul",
            "description": "Ayak a, c ve b'ten çözülen bilinmeyen temel kenartır.",
            "status": "unknown"
          },
          "b": {
            "label": "b = biliniyor",
            "description": "kenar b, a ile dik açı oluşturan bilinen kenartır.",
            "status": "known"
          },
          "c": {
            "label": "c = biliniyor",
            "description": "Hipotenüs c sağ üçgenin bilinen en uzun kenarıdır.",
            "status": "known"
          }
        },
        "notes": [
          "The hypotenuse c must be the longest side in the input pair.",
          "c, b'ten küçük veya ona eşitse hangi değerin hipotenüs olduğunu yeniden kontrol edin.",
          "Hesaplanan a, girdiğiniz değerlerle aynı birime sahiptir."
        ]
      },
      "calculator": {
        "outputLabel": "a = bilinmeyen kenar",
        "fields": [
          {
            "key": "c",
            "label": "c = hipotenüs",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = bilinen kenar",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Eksik kenar a Formülü",
        "paragraphs": [
          "Pisagor teoreminden (a² + b² = c²) başlayarak a'i çözerek aşağıdaki formülü elde edin.",
          "c'in hipotenüs olduğu yerde (dik açının karşısındaki en uzun kenar), b bilinen kenardır ve a, bulmak istediğiniz eksik kenardır. Temel işlem çıkarmadır: Hipotenüsün karesini alın, bilinen kenarın karesini çıkarın, sonra kalanın karekökünü alın."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "c ve b'ten a kenar Nasıl Bulunur?",
        "steps": [
          "Hipotenüsü (c) ve bilinen kenarı (b) doğru şekilde tanımladığınızdan emin olun. Hipotenüs her zaman 90° açısının karşısındadır.",
          "İlk giriş alanına hipotenüs c'i girin.",
          "Bilinen kenar b'i ikinci giriş alanına girin.",
          "a ayağını bulmak için Hesapla'ya tıklayın.",
          "a sonucunu ve aşağıda gösterilen adım adım çalışmayı inceleyin."
        ]
      },
      "example": {
        "h2": "Örnek: a Bacağını Bul",
        "intro": "Verilen: c = 10, b = 6. Hipotenüsü 10 ve kenarı 6 olan bir dik üçgenin eksik kenarı 8'dir.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Hesaplamadan Önce Önemli Kontrol",
          "paragraphs": [
            "Hesaplamanın işe yaraması için hipotenüs c'in b'ten büyük olması gerekir. Her dik üçgende hipotenüs en uzun kenardır. c, b'e eşitse formül a = 0 verir, bu da hiçbir üçgenin oluşamayacağı anlamına gelir.",
            "c, b'ten küçükse karekök altındaki ifade negatif olur ve a için gerçek bir kenar uzunluğu yoktur. Bu durumda hangi tarafın 90° açısının karşısında olduğunu yeniden kontrol edin."
          ],
          "listTitle": "İlk önce bu kontrolleri kullanın:",
          "listItems": [
            "c dik açının karşısındaki taraftır.",
            "c, b'ten daha büyüktür.",
            "Her iki girdi de pozitif sayılardır.",
            "c ve b aynı ölçüm birimini kullanır."
          ]
        },
        {
          "h2": "Bu Hesap Makinesinin Yararlı Olduğu Yerler",
          "paragraphs": [
            "Bu hesap makinesi, hipotenüsü ve b kenarını bildiğinizde ve a kenarını bulmanız gerektiğinde doğru araçtır. Diyagramınızın bilinen bacağı b olarak ve bilinmeyen tabanı veya yüksekliği a olarak etiketlemesi özellikle yararlıdır.",
            "Sayfa aynı zamanda ölçüm kontrolü olarak da çalışır. Hesaplanan a tarafı, a ölçülen taraftan çok farklıysa, üçgen gerçek bir 90° açısı içermeyebilir veya bilinen değerlerden biri yanlış kopyalanmış olabilir."
          ],
          "listTitle": "Yaygın örnekler şunları içerir:",
          "listItems": [
            "Eğim uzunluğu c ve yükseklik b bilindiğinde taban mesafesini bulma.",
            "Hipotenüs ve yatay mesafe bilindiğinde dikey yüksekliği bulma.",
            "c ve b veren ve a isteyen geometri problemlerini çözme.",
            "Dik üçgen oluşturan inşaat, haritalama veya kat planı ölçümlerinin kontrol edilmesi."
          ]
        },
        {
          "h2": "Cevap Nasıl Okunur?",
          "paragraphs": [
            "Eksik kenar a etiketli çıktı, b ile dik açıyı oluşturan diğer taraftır. c hipotenüsünden kısa ve sıfırdan büyük olmalıdır.",
            "Sonuç c'e yakınsa, bilinen kenar b nispeten küçüktür. Sonuç sıfıra yakınsa b neredeyse c kadar uzundur. Her ikisi de olabilir, ancak yanıtı kullanmadan önce giriş etiketleri kontrol edilmelidir."
          ],
          "listTitle": "Geçerli bir sonuç aşağıdakileri karşılamalıdır:",
          "listItems": [
            "a sıfırdan büyüktür.",
            "a, c'ten küçüktür.",
            "a² + b² yaklaşık olarak c²'e eşittir.",
            "Çıkış ünitesi, c ve b için kullanılan üniteyle eşleşir."
          ]
        },
        {
          "h2": "Yaygın Hatalar",
          "paragraphs": [
            "En büyük risk hipotenüsün bir kenarla yer değiştirmesidir. Bu hesaplayıcı, c'in zaten en uzun kenar olduğunu varsayar; dolayısıyla yanlış etiketlenmiş bir c değeri, sonucun yanlış olmasına neden olur.",
            "İkinci yaygın sorun ise hipotenüs formülünün yanlışlıkla kullanılmasıdır. Eksik bir kenarı bulmak için bilinen kenarın karesini hipotenüs karesinden çıkarırsınız ve ardından karekökünü alırsınız."
          ],
          "listTitle": "Bu hatalardan kaçının:",
          "listItems": [
            "b ayağına hipotenüs c olarak giriliyor.",
            "c² - b² yerine c² + b² kullanılması.",
            "b'in c'e eşit veya daha büyük girilmesi.",
            "Çıkarma işleminden sonra karekökü unutmak.",
            "Farklı birimleri kullanan ölçümleri birleştirmek."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Sağ Üçgen Kenar Hesaplayıcı"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Hesaplayıcı: Pisagor Teoremi"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Hesaplayıcı: Kayıp Dik Kenar (c ve a ile)"
        }
      ],
      "faqs": [
        {
          "question": "Bu hesap makinesinde c ne anlama geliyor?",
          "answer": "c, 90° açısının karşısındaki dik üçgenin en uzun kenarı olan hipotenüstür. Bu hesaplayıcıda c'i bilinen iki değerinizden biri olarak girersiniz."
        },
        {
          "question": "Bu hesap makinesinde b ne anlama geliyor?",
          "answer": "b sağ üçgenin iki bacağından biridir. Dik açıyı oluşturan bir kenardır. Burada b zaten bildiğiniz kenartır ve hesap makinesi onu a'in eksik ayağını bulmak için c ile birlikte kullanır."
        },
        {
          "question": "Bu hesap makinesi ne buluyor?",
          "answer": "Kayıp kenar a'ı bulur. Siz hipotenüsü (c) ve bir kenarı (b) sağlarsınız ve hesaplayıcı size bilinmeyen kenarı adım adım bir çözümle sunmak için a = √(c² − b²) formülünü uygular."
        },
        {
          "question": "c, b'ten daha küçük olabilir mi?",
          "answer": "Hayır. Hipotenüs her zaman bir dik üçgende en uzun kenardır. c değeriniz b'ten küçükse girişler geçerli bir dik üçgeni temsil etmez. Hangi ölçümün hipotenüse karşılık geldiğini tekrar kontrol edin."
        },
        {
          "question": "c ve b'ten nasıl bulurum?",
          "answer": "Hipotenüsün karesini alın (c²), bilinen kenarın karesini alın (b²), b²'i c²'ten çıkarın ve sonucun karekökünü alın. Formül a = √(c² − b²)'tir. Cevabı otomatik olarak almak için değerlerinizi bu hesap makinesine de girebilirsiniz."
        }
      ]
    }
  },
  "sv": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "Kalkylator: Pythagoras sats",
      "metaTitle": "Kalkylator: Pythagoras sats | Right Triangle Solver",
      "metaDescription": "Hitta hypotenusan när båda kateterna är kända. Detta är den grundläggande identiteten för varje rätvinklig triangel.",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "Oavsett om du löser ett läxproblem eller mäter en diagonal i verkligheten, ger det här verktyget dig svaret på några sekunder - med hela lösningen steg för steg.",
      "intro": "Hitta hypotenusan när båda kateterna är kända. Detta är den grundläggande identiteten för varje rätvinklig triangel.",
      "quickSummary": {
        "h2": "Vad den här Pythagoras-kalkylatorn löser",
        "intro": "Använd den här sidan när de två sidorna som möts vid 90°-vinkeln är kända och den diagonala sidan saknas. Kalkylatorn fokuserar på det klassiska hypotenusfallet, så inmatningarna förblir enkla och resultatet är lätt att kontrollera.",
        "cards": [
          {
            "label": "Kända värden",
            "value": "a = katet motsatt vinkel A; b = katet motsatt vinkel B"
          },
          {
            "label": "Fynd",
            "value": "c = hypotenusa"
          },
          {
            "label": "Huvudformel",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "Bäst för",
            "value": "Diagonaler, stegar, ramper, skärmar och geometriläxor"
          }
        ]
      },
      "diagram": {
        "h2": "Rätt triangeldiagram: Hitta hypotenusan",
        "intro": "Diagrammet visar det exakta sidoförhållandet som används av verktyget. De två kateterna är de kända ingångsvärdena, och den lutande sidan c är hypotenusan som räknaren hittar.",
        "caption": "Rätt triangeldiagram med kända katet a och b och okänd hypotenusa c.",
        "sides": {
          "a": {
            "label": "a = känd",
            "description": "katet a är en av de två sidorna som bildar den räta vinkeln.",
            "status": "known"
          },
          "b": {
            "label": "b = känd",
            "description": "katet b är den andra sidan som bildar den rätta vinkeln.",
            "status": "known"
          },
          "c": {
            "label": "c = hitta",
            "description": "Hypotenus c är den längsta sidan och sitter mittemot 90°-vinkeln.",
            "status": "unknown"
          }
        },
        "notes": [
          "a och b kan bytas; hypotenusresultatet blir detsamma.",
          "Använd samma enhet för båda kateterna innan du beräknar.",
          "Svaret c kommer alltid att vara större än båda kateterna i en giltig rätvinklig triangel."
        ]
      },
      "calculator": {
        "outputLabel": "c = hypotenusa",
        "fields": [
          {
            "key": "a",
            "label": "a = katet motsatt vinkel A",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = katet motsatt vinkel B",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Pythagoras satsformel",
        "paragraphs": [
          "Pythagoras sats säger att i en rätvinklig triangel är hypotenusans kvadrat lika med summan av kvadraterna på de två kateterna. För att lösa hypotenusan, ta kvadratroten på båda sidorna.",
          "I denna formel är a och b de två kateterna i den räta triangeln - sidorna som bildar den räta vinkeln. c är hypotenusan, den längsta sidan, mitt emot rät vinkel. Denna formel fungerar bara för räta trianglar."
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "Hur man använder Pythagoras satskalkylator",
        "steps": [
          "Identifiera de två kateterna i din högra triangel. Dessa är sidorna som bildar den räta vinkeln.",
          "Ange katet a i det första inmatningsfältet.",
          "Ange katet b i det andra inmatningsfältet.",
          "Klicka på Beräkna för att hitta hypotenusan.",
          "Läs resultatet för c, tillsammans med steg-för-steg-lösningen."
        ]
      },
      "example": {
        "h2": "Exempel: Hitta hypotenusen",
        "intro": "Givet: a = 6, b = 8. Hypotenusan i en rätvinklig triangel med katet 6 och 8 är 10.",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "Var denna kalkylator är användbar",
          "paragraphs": [
            "Hypotenuskalkylatorn är användbar när två vinkelräta avstånd kombineras till ett diagonalt avstånd. Det är särskilt användbart när ett ritnings-, planritnings- eller läxproblem ger de horisontella och vertikala sidorna men lämnar den diagonala sidan tom.",
            "Eftersom den här sidan bara löser för c undviker den förvirringen med att växla mellan sidolägen. Om dina kända värden är de två kateterna, är detta det fokuserade Pythagoras satsverktyg att använda."
          ],
          "listTitle": "Vanliga exempel inkluderar:",
          "listItems": [
            "Hitta diagonalen för en rektangel, skärm, kakellayout eller rum.",
            "Beräkna en steglängd från vägghöjd och markavstånd.",
            "Uppskattning av den sluttande längden på en ramp från stigning och körning.",
            "Kontrollera rätt triangelläxa innan du skickar in det slutliga svaret."
          ]
        },
        {
          "h2": "Tips för bättre resultat",
          "paragraphs": [
            "Ange båda katetlängderna som positiva tal. Decimaler är bra, och räknaren kommer att hålla tillräckligt med precision för att göra steg-för-steg-arbetet användbart.",
            "De två ingångarna måste använda samma enhet. Om a mäts i fot och b mäts i tum, konvertera först en mätning så att resultatet är meningsfullt."
          ],
          "listTitle": "Innan du räknar, kontrollera att:",
          "listItems": [
            "a och b är sidorna som rör vid 90°-vinkeln.",
            "Ingen ingång är noll eller negativ.",
            "Båda värdena mäts i samma enhet.",
            "Du löser för hypotenusan, inte ett saknat katet."
          ]
        },
        {
          "h2": "Hur man läser svaret",
          "paragraphs": [
            "Utgången märkt Hypotenus c är sidan mitt emot den räta vinkeln. Det är den diagonala sidan i diagrammet och bör vara längre än båda inmatningskateterna.",
            "Om ditt resultat ser mindre ut än a eller b, är det ett tecken på att en av ingångarna var felmärkt eller att triangeln faktiskt inte är en rätvinklig triangel."
          ],
          "listTitle": "En snabb rimlighetskontroll:",
          "listItems": [
            "c bör vara större än a.",
            "c bör vara större än b.",
            "c ska vara mindre än en + b.",
            "För vanliga trippel som 3-4-5 eller 5-12-13 bör resultatet matcha den kända trippeln."
          ]
        },
        {
          "h2": "Vanliga misstag",
          "paragraphs": [
            "De flesta fel hypotenusa svar kommer från att använda rätt formel på fel sidor. kateterna måste vara de två sidorna som gör den rätta vinkeln; hypotenusan är aldrig en indata på denna sida.",
            "Ett annat vanligt problem är att stanna vid a² + b². Det värdet är c², inte c. Kvadratrotsteget är det som förvandlar det kvadratiska värdet tillbaka till den faktiska sidolängden."
          ],
          "listTitle": "Undvik dessa misstag:",
          "listItems": [
            "Använda formeln på en triangel som inte har en 90°-vinkel.",
            "Ange den diagonala sidan som a eller b.",
            "Glömde att ta kvadratroten på slutet.",
            "Blanda enheter som tum och fot i samma beräkning."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Räknare för höger triangelsida"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Kalkylator: Saknad katet (från c och a)"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Kalkylator: Saknad katet (från c och b)"
        }
      ],
      "faqs": [
        {
          "question": "Vad är Pythagoras sats?",
          "answer": "Pythagoras sats är en formel som relaterar de tre sidorna av en rätvinklig triangel: a² + b² = c². Det står att hypotenusans kvadrat är lika med summan av kvadraterna på de två kateterna. Det gäller bara räta trianglar."
        },
        {
          "question": "Vad betyder c i formeln?",
          "answer": "I formeln c² = a² + b² är c hypotenusan - den längsta sidan av den räta triangeln. Det är sidan mittemot 90°-vinkeln."
        },
        {
          "question": "Kan jag använda den här kalkylatorn för vilken triangel som helst?",
          "answer": "Nej. Den här räknaren använder Pythagoras sats, som bara fungerar för räta trianglar. Om din triangel inte har en 90°-vinkel kommer formeln inte att ge ett korrekt resultat."
        },
        {
          "question": "Hur hittar jag hypotenusan?",
          "answer": "För att hitta hypotenusan, kvadrerar du båda kateterna (a² och b²), adderar dem tillsammans och tar kvadratroten ur summan. Formeln är c = √(a² + b²). Eller skriv bara in dina värden ovan och låt räknaren göra det."
        },
        {
          "question": "Vad är a och b i en rätvinklig triangel?",
          "answer": "a och b är de två kateterna - sidorna som bildar den räta vinkeln. De kan ha vilken positiv längd som helst, och det spelar ingen roll vilken du kallar a eller b. Hypotenusan (c) är alltid den återstående sidan."
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "Kalkylator: Saknad katet (från c och a)",
      "metaTitle": "Kalkylator: Saknad katet (från c och a) | Right Triangle Solver",
      "metaDescription": "Hitta kateten b när hypotenusan c och den andra kateten a är kända.",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "Kom ihåg: c är alltid hypotenusan - den längsta sidan, mitt emot rät vinkel. Det är inte ett katet. Om du har två katet och behöver hypotenusan istället, använd Pythagorean Theorem Calculator.",
      "intro": "Hitta kateten b när hypotenusan c och den andra kateten a är kända.",
      "quickSummary": {
        "h2": "Vad den här missade kateträknaren löser",
        "intro": "Använd denna sida när hypotenusan och katetet a är kända, men det andra katetet saknas. Kalkylatorn arrangerar om Pythagoras sats för att subtrahera det kända katetet från hypotenusan innan kvadratroten tas.",
        "cards": [
          {
            "label": "Kända värden",
            "value": "c = hypotenusa; a = känd katet"
          },
          {
            "label": "Fynd",
            "value": "b = okänd katet"
          },
          {
            "label": "Huvudformel",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "Obligatorisk kontroll",
            "value": "Kräver c > a."
          }
        ]
      },
      "diagram": {
        "h2": "Rätt triangeldiagram: Hitta katet b",
        "intro": "Diagrammet markerar c och a som de värden du redan känner till. Det vertikala katetet b är markerat som den saknade sidan som denna kalkylator löser.",
        "caption": "Rätt triangeldiagram med känd hypotenusa c, känd katet a och okända katet b.",
        "sides": {
          "a": {
            "label": "a = känd",
            "description": "katet a är det kända katetet längs basen av den högra triangeln.",
            "status": "known"
          },
          "b": {
            "label": "b = hitta",
            "description": "katetet b är det okända katetet som löses genom att subtrahera a^2 från c^2.",
            "status": "unknown"
          },
          "c": {
            "label": "c = känd",
            "description": "Hypotenus c är den kända längsta sidan mitt emot rät vinkel.",
            "status": "known"
          }
        },
        "notes": [
          "c måste vara hypotenusan, inte ett av kateterna.",
          "Om c är mindre än eller lika med a, bildar ingångarna inte en giltig rätvinklig triangel.",
          "Resultatet b använder samma enhet som c och a."
        ]
      },
      "calculator": {
        "outputLabel": "b = okänd katet",
        "fields": [
          {
            "key": "c",
            "label": "c = hypotenusa",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = känd katet",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formel för saknad katet b",
        "paragraphs": [
          "Formeln för att hitta katetet b är härledd från Pythagoras sats (a² + b² = c²). Omarrangering för b ger formeln nedan.",
          "Där c är hypotenusan (den längsta sidan av den högra triangeln), är a det kända katetet och b är det saknade katetet du löser för. Lägg märke till subtraktionen: du subtraherar kvadraten på det kända katetet från kvadraten på hypotenusan och tar sedan kvadratroten."
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "Hur man hittar katet b från c och a",
        "steps": [
          "Bekräfta att c är hypotenusan och a är ett katet. Hypotenusan är alltid den längsta sidan.",
          "Ange hypotenusan c i det första inmatningsfältet.",
          "Ange det kända katetet a i det andra inmatningsfältet.",
          "Klicka på Beräkna för att hitta det saknade katetet.",
          "Läs resultatet för b, tillsammans med hela steg-för-steg-lösningen."
        ]
      },
      "example": {
        "h2": "Exempel: Hitta Leg b",
        "intro": "Givet: c = 13, a = 5. Det saknade katetet i en rätvinklig triangel med hypotenusa 13 och katet 5 är 12.",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "Viktig kontroll före beräkning",
          "paragraphs": [
            "Innan du använder den här formeln, se till att c är större än a. Hypotenusan är alltid den längsta sidan av en rätvinklig triangel. Om c är lika med a, skulle du få b = 0, vilket betyder att det inte finns någon triangel.",
            "Om c är mindre än a blir uttrycket under kvadratroten negativt. Det betyder att de två ingångsvärdena inte kan beskriva en verklig rätvinklig triangel med c som hypotenusan."
          ],
          "listTitle": "Använd dessa kontroller först:",
          "listItems": [
            "c är motsatt 90°-vinkeln.",
            "c är större än a.",
            "Båda värdena är positiva.",
            "c och a använder samma enhet."
          ]
        },
        {
          "h2": "Var denna kalkylator är användbar",
          "paragraphs": [
            "Den här räknaren är användbar när ett diagonalt eller lutande mått är känt, en vinkelrät sida är känd och den andra vinkelräta sidan saknas. Det är det fokuserade verktyget för c-och-ett-fallet, så varje förklaring på sidan pekar mot att hitta b.",
            "Det kan också hjälpa till att verifiera mätningar. Om ett uppmätt värde för b inte matchar räknarens resultat, kanske triangeln inte är rätt, hypotenusan kan vara felmärkt eller en mätning kan använda en annan enhet."
          ],
          "listTitle": "Vanliga exempel inkluderar:",
          "listItems": [
            "Att hitta vägghöjd när steglängd c och markavstånd a är kända.",
            "Att hitta den vertikala stigningen av en sluttning när sluttningens längd och horisontella löpning är kända.",
            "Kontrollera ett rätvinkligt läxproblem som ger c och a.",
            "Bekräfta layoutmått för inramning, landskapsplanering, ramper eller planlösningar."
          ]
        },
        {
          "h2": "Hur man läser svaret",
          "paragraphs": [
            "Utgången märkt Missing leg b är längden på det andra katetet som bildar den rätta vinkeln med a. Det är inte hypotenusan och bör vara kortare än c.",
            "Om den beräknade b är extremt liten, är ditt kända katet a mycket nära hypotenusan c. Det kan vara giltigt, men det är värt att kontrollera diagrammet och enheterna innan du använder värdet."
          ],
          "listTitle": "Ett giltigt resultat bör uppfylla:",
          "listItems": [
            "b är större än noll.",
            "b är mindre än c.",
            "a² + b² är ungefär lika med c².",
            "Utgångsenheten matchar inmatningsenheten."
          ]
        },
        {
          "h2": "Vanliga misstag",
          "paragraphs": [
            "Det vanligaste felet är att behandla c som ett katet. I den här räknaren måste c vara hypotenusan, som är den längsta sidan och sidan mitt emot rät vinkel.",
            "Ett annat vanligt misstag är att lägga till kvadraterna istället för att subtrahera. Addition finner en hypotenusa; subtraktion hittar ett saknat katet från hypotenusan."
          ],
          "listTitle": "Undvik dessa misstag:",
          "listItems": [
            "Att sätta det kända katetet i hypotenusfältet.",
            "Använder c² + a² istället för c² - a².",
            "Ange ett större än eller lika med c.",
            "Stanna vid b² istället för att ta kvadratroten.",
            "Blandningsenheter som meter och centimeter."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Räknare för höger triangelsida"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Kalkylator: Pythagoras sats"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "Kalkylator: Saknad katet (från c och b)"
        }
      ],
      "faqs": [
        {
          "question": "Vad betyder c i den här kalkylatorn?",
          "answer": "c är hypotenusan i den räta triangeln - den längsta sidan, som ligger mittemot 90°-vinkeln. Det är inte ett katet. Du anger c som ett av de två kända värdena i denna kalkylator."
        },
        {
          "question": "Vad betyder ett i denna kalkylator?",
          "answer": "a är ett av de två kateterna i den räta triangeln. Det är en av sidorna som bildar den rätta vinkeln. I den här kalkylatorn är a det katet du redan känner till."
        },
        {
          "question": "Vad hittar den här kalkylatorn?",
          "answer": "Denna kalkylator hittar det saknade katetet b. Med tanke på hypotenus c och katet a, beräknar den b = √(c² − a²) och visar dig steg-för-steg-lösningen."
        },
        {
          "question": "Kan c vara mindre än a?",
          "answer": "Nej. I en rätvinklig triangel är hypotenusan alltid den längsta sidan. Om c är mindre än a, bildar värdena inte en giltig rätvinklig triangel. Kontrollera vilket mått som är hypotenusan innan du beräknar."
        },
        {
          "question": "Hur hittar jag b från c och a?",
          "answer": "Kvadrera hypotenusan (c²), kvadrera det kända katetet (a²), subtrahera a² från c² och ta kvadratroten. Formeln är b = √(c² − a²). Eller skriv in dina värden i den här kalkylatorn för ett omedelbart svar."
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "Kalkylator: Saknad katet (från c och b)",
      "metaTitle": "Kalkylator: Saknad katet (från c och b) | Right Triangle Solver",
      "metaDescription": "Hitta kateten a när hypotenusan c och kateten b är kända.",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "Tänk på: c är hypotenusan, inte ett katet. Det är den längsta sidan av triangeln och sitter mittemot 90°-vinkeln. Om du har båda kateterna och behöver hypotenusan, använd Pythagorean Theorem Calculator istället.",
      "intro": "Hitta kateten a när hypotenusan c och kateten b är kända.",
      "quickSummary": {
        "h2": "Vad den här missade kateträknaren löser",
        "intro": "Använd den här sidan när du känner till hypotenusan och katetet b, men behöver katetet a. Den håller den kända sidan b åtskild från den okända sidan a så att formeln och resultatet matchar etiketterna på din triangel.",
        "cards": [
          {
            "label": "Kända värden",
            "value": "c = hypotenusa; b = känd katet"
          },
          {
            "label": "Fynd",
            "value": "a = okänd katet"
          },
          {
            "label": "Huvudformel",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "Obligatorisk kontroll",
            "value": "Kräver c > b."
          }
        ]
      },
      "diagram": {
        "h2": "Rätt triangeldiagram: Hitta katet a",
        "intro": "Diagrammet visar c som den kända hypotenusan och b som det kända katetet. Baskatetet a är markerat som det saknade värdet som returneras av räknaren.",
        "caption": "Rätt triangeldiagram med känd hypotenusa c, känt katet b och okänt katet a.",
        "sides": {
          "a": {
            "label": "a = hitta",
            "description": "katet a är det okända baskatetet löst från c och b.",
            "status": "unknown"
          },
          "b": {
            "label": "b = känd",
            "description": "katet b är det kända katetet som bildar rät vinkel med a.",
            "status": "known"
          },
          "c": {
            "label": "c = känd",
            "description": "Hypotenus c är den kända längsta sidan av den räta triangeln.",
            "status": "known"
          }
        },
        "notes": [
          "Hypotenusan c måste vara den längsta sidan i ingångsparet.",
          "Om c är mindre än eller lika med b, kontrollera igen vilket värde som är hypotenusan.",
          "Det beräknade a har samma enhet som de värden du angett."
        ]
      },
      "calculator": {
        "outputLabel": "a = okänd katet",
        "fields": [
          {
            "key": "c",
            "label": "c = hypotenusa",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = känd katet",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "Formel för saknad katet a",
        "paragraphs": [
          "Utgå från Pythagoras sats (a² + b² = c²), lös för a för att få formeln nedan.",
          "Där c är hypotenusan (den längsta sidan, mitt emot rät vinkel), är b det kända katetet, och a är det saknade katetet du vill hitta. Nyckeloperationen är subtraktion: kvadrera hypotenusan, subtrahera kvadraten på det kända katetet och ta sedan kvadratroten av det som är kvar."
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "Hur man hittar katet a från c och b",
        "steps": [
          "Se till att du har identifierat hypotenusan (c) och det kända katetet (b) korrekt. Hypotenusan är alltid mittemot 90°-vinkeln.",
          "Ange hypotenusan c i det första inmatningsfältet.",
          "Ange det kända katetet b i det andra inmatningsfältet.",
          "Klicka på Beräkna för att hitta katet a.",
          "Granska resultatet för a och det steg-för-steg-arbete som visas nedan."
        ]
      },
      "example": {
        "h2": "Exempel: Hitta Leg a",
        "intro": "Givet: c = 10, b = 6. Det saknade katetet i en rätvinklig triangel med hypotenusa 10 och katet 6 är 8.",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "Viktig kontroll före beräkning",
          "paragraphs": [
            "Hypotenusan c måste vara större än b för att beräkningen ska fungera. I varje rätvinklig triangel är hypotenusan den längsta sidan. Om c är lika med b ger formeln a = 0, vilket betyder att ingen triangel kan bildas.",
            "Om c är mindre än b blir uttrycket under kvadratroten negativt och det finns ingen reell sidolängd för a. I så fall, kontrollera igen vilken sida som är motsatt 90°-vinkeln."
          ],
          "listTitle": "Använd dessa kontroller först:",
          "listItems": [
            "c är sidan mitt emot rät vinkel.",
            "c är större än b.",
            "Båda ingångarna är positiva tal.",
            "c och b använder samma måttenhet."
          ]
        },
        {
          "h2": "Var denna kalkylator är användbar",
          "paragraphs": [
            "Denna kalkylator är rätt verktyg när du känner till hypotenusan och katetet b och behöver hitta katetet a. Det är särskilt användbart när ditt diagram märker det kända katetet som b och den okända basen eller höjden som a.",
            "Sidan fungerar även som mätkontroll. Om den beräknade sidan a skiljer sig mycket från a uppmätt sida, kanske triangeln inte innehåller en sann 90°-vinkel eller så kan ett av de kända värdena ha kopierats felaktigt."
          ],
          "listTitle": "Vanliga exempel inkluderar:",
          "listItems": [
            "Att hitta ett basavstånd när sluttningslängden c och höjden b är kända.",
            "Att hitta en vertikal höjd när hypotenusan och det horisontella avståndet är kända.",
            "Att lösa geometriproblem som ger c och b och frågar efter a.",
            "Kontrollera konstruktions-, kartläggnings- eller planritningsmått som bildar en rätvinklig triangel."
          ]
        },
        {
          "h2": "Hur man läser svaret",
          "paragraphs": [
            "Utgången märkt Missing leg a är den andra sidan som bildar rät vinkel med b. Den ska vara kortare än hypotenusan c och större än noll.",
            "Om resultatet är nära c är det kända katetet b relativt litet. Om resultatet är nära noll är b nästan lika lång som c. Båda kan hända, men inmatningsetiketterna bör kontrolleras innan du använder svaret."
          ],
          "listTitle": "Ett giltigt resultat bör uppfylla:",
          "listItems": [
            "a är större än noll.",
            "a är mindre än c.",
            "a² + b² är ungefär lika med c².",
            "Utgångsenheten matchar enheten som används för c och b."
          ]
        },
        {
          "h2": "Vanliga misstag",
          "paragraphs": [
            "Den största risken är att byta hypotenusan med ett katet. Den här räknaren antar att c redan är den längsta sidan, så ett felmärkt c-värde kommer att göra resultatet felaktigt.",
            "Ett andra vanligt problem är att använda hypotenusformeln av misstag. För att hitta ett saknat katet subtraherar du den kända katetkvadraten från hypotenusakvadraten och tar sedan kvadratroten."
          ],
          "listTitle": "Undvik dessa misstag:",
          "listItems": [
            "Anger katetet b som hypotenusan c.",
            "Använder c² + b² istället för c² - b².",
            "Ange b större än eller lika med c.",
            "Att glömma kvadratroten efter att ha subtraherat.",
            "Kombinera mått som använder olika enheter."
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "Räknare för höger triangelsida"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "Kalkylator: Pythagoras sats"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "Kalkylator: Saknad katet (från c och a)"
        }
      ],
      "faqs": [
        {
          "question": "Vad betyder c i den här kalkylatorn?",
          "answer": "c är hypotenusan - den längsta sidan av den räta triangeln, mittemot 90°-vinkeln. I den här kalkylatorn anger du c som ett av dina två kända värden."
        },
        {
          "question": "Vad betyder b i den här kalkylatorn?",
          "answer": "b är ett av de två kateterna i den högra triangeln. Det är en sida som bildar den rätta vinkeln. Här är b katetet du redan känner till, och räknaren använder det tillsammans med c för att hitta det saknade katetet a."
        },
        {
          "question": "Vad hittar den här kalkylatorn?",
          "answer": "Den hittar det saknade katetet a. Du anger hypotenusan (c) och ett katet (b), och räknaren använder formeln a = √(c² − b²) för att ge dig det okända katetet med en steg-för-steg-lösning."
        },
        {
          "question": "Kan c vara mindre än b?",
          "answer": "Nej. Hypotenusan är alltid den längsta sidan i en rätvinklig triangel. Om ditt värde för c är mindre än b representerar inte inmatningarna en giltig rätvinklig triangel. Kontrollera igen vilket mått som motsvarar hypotenusan."
        },
        {
          "question": "Hur hittar jag en från c och b?",
          "answer": "Kvadrera hypotenusan (c²), kvadrera det kända katetet (b²), subtrahera b² från c² och ta kvadratroten av resultatet. Formeln är a = √(c² − b²). Du kan också bara skriva in dina värden i den här räknaren för att få svaret automatiskt."
        }
      ]
    }
  },
  "zh": {
    "pythagorean-theorem-calculator": {
      "slug": "pythagorean-theorem-calculator",
      "url": "/pythagorean-theorem-calculator/",
      "h1": "计算器: 勾股定理",
      "metaTitle": "计算器: 勾股定理 | Right Triangle Solver",
      "metaDescription": "已知两条直角边时计算斜边。这是每个直角三角形的基本公式。",
      "formulaSlug": "pythagorean-theorem",
      "toolPurpose": "无论您是在解决家庭作业问题还是在现实生活中测量对角线，该工具都会在几秒钟内为您提供答案 - 并逐步显示完整的解决方案。",
      "intro": "已知两条直角边时计算斜边。这是每个直角三角形的基本公式。",
      "quickSummary": {
        "h2": "这个毕达哥拉斯计算器解决了什么问题",
        "intro": "当以 90° 角度相交的两条边已知且缺少对角边时，请使用此页面。该计算器专注于经典的斜边情况，因此输入保持简单并且结果易于检查。",
        "cards": [
          {
            "label": "已知值",
            "value": "a = 角 A 的对边; b = 角 B 的对边"
          },
          {
            "label": "发现",
            "value": "c = 斜边"
          },
          {
            "label": "主要配方",
            "value": "c = sqrt(a^2 + b^2)"
          },
          {
            "label": "最适合",
            "value": "对角线、梯子、坡道、屏幕和几何作业"
          }
        ]
      },
      "diagram": {
        "h2": "直角三角形图：求斜边",
        "intro": "该图显示了该工具使用的确切侧面关系。两条腿是已知的输入值，斜边 c 是计算器找到的斜边。",
        "caption": "具有已知边 a 和 b 以及未知斜边 c 的直角三角形图。",
        "sides": {
          "a": {
            "label": "a = 已知",
            "description": "腿 a 是形成直角的两条边之一。",
            "status": "known"
          },
          "b": {
            "label": "b = 已知",
            "description": "腿 b 是形成直角的另一条边。",
            "status": "known"
          },
          "c": {
            "label": "c = 查找",
            "description": "斜边 c 是最长的边，位于 90° 角的对面。",
            "status": "unknown"
          }
        },
        "notes": [
          "a和b可以互换；斜边结果将是相同的。",
          "计算前对两条腿使用相同的单位。",
          "答案 c 将始终大于有效直角三角形中的任意一条边。"
        ]
      },
      "calculator": {
        "outputLabel": "c = 斜边",
        "fields": [
          {
            "key": "a",
            "label": "a = 角 A 的对边",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = 角 B 的对边",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "毕达哥拉斯定理公式",
        "paragraphs": [
          "毕达哥拉斯定理指出，在直角三角形中，斜边的平方等于两条边的平方和。要求解斜边，请取两边的平方根。",
          "在此公式中，a 和 b 是直角三角形的两条边--形成直角的边。 c 是斜边，最长的边，与直角相对。该公式仅适用于直角三角形。"
        ],
        "formulas": [
          "c^2 = a^2 + b^2",
          "c = \\sqrt{a^2 + b^2}"
        ]
      },
      "howTo": {
        "h2": "如何使用勾股定理计算器",
        "steps": [
          "确定直角三角形的两条腿。这些是形成直角的边。",
          "在第一个输入字段中输入腿 a。",
          "在第二个输入字段中输入边 b。",
          "单击计算找出斜边。",
          "阅读 c 的结果以及分步解决方案。"
        ]
      },
      "example": {
        "h2": "示例：求斜边",
        "intro": "给定：a = 6，b = 8。边为 6 和 8 的直角三角形的斜边为 10。",
        "lines": [
          "c = \\sqrt{6^2 + 8^2}",
          "c = \\sqrt{36 + 64}",
          "c = \\sqrt{100}",
          "c = 10"
        ]
      },
      "extraSections": [
        {
          "h2": "该计算器的用处",
          "paragraphs": [
            "每当两个垂直距离合并为一个对角线距离时，斜边计算器就非常有用。当绘图、平面图或作业问题给出水平和垂直边但对角边留空时，它特别有用。",
            "由于本页面仅解决c，因此避免了侧模式切换的混乱。如果您的已知值是两条腿，那么这是要使用的重点毕达哥拉斯定理工具。"
          ],
          "listTitle": "常见的例子包括：",
          "listItems": [
            "查找矩形、屏幕、图块布局或房间的对角线。",
            "根据墙壁高度和地面距离计算梯子长度。",
            "根据上升和运行估算坡道的倾斜长度。",
            "在提交最终答案之前检查直角三角形作业。"
          ]
        },
        {
          "h2": "获得更好结果的输入提示",
          "paragraphs": [
            "将两条腿的长度输入为正数。小数就可以了，计算器将保持足够的精度，使逐步的工作变得有用。",
            "两个输入必须使用相同的单位。如果 a 以英尺为单位测量，而 b 以英寸为单位测量，请先转换一个测量值，以便结果有意义。"
          ],
          "listTitle": "在计算之前，请检查：",
          "listItems": [
            "a 和 b 是与 ZX​​CODEX0ZX 角接触的边。",
            "输入都不为零或负。",
            "两个值均以同一单位测量。",
            "您正在求解斜边，而不是缺失的一条腿。"
          ]
        },
        {
          "h2": "如何阅读答案",
          "paragraphs": [
            "标记为斜边 c 的输出是直角的对面。它是图中的对角线，并且应该比两个输入腿都长。",
            "如果您的结果看起来小于 a 或 b，则表明其中一个输入标签错误或三角形实际上不是直角三角形。"
          ],
          "listTitle": "快速合理性检查：",
          "listItems": [
            "c 应大于 a。",
            "c 应大于 b。",
            "c 应小于 + b。",
            "对于 3-4-5 或 5-12-13 等常见三元组，结果应与已知三元组匹配。"
          ]
        },
        {
          "h2": "常见错误",
          "paragraphs": [
            "大多数错误的斜边答案都来自于在错误的边上使用了正确的公式。腿必须是成直角的两侧；斜边永远不是此页面上的输入。",
            "另一个常见问题是停在 a² + b²。该值是 c²，而不是 c。平方根步长是将平方值转换回实际边长的。"
          ],
          "listTitle": "避免这些错误：",
          "listItems": [
            "对没有 90° 角的三角形使用该公式。",
            "输入对角线为 a 或 b。",
            "最后忘记取平方根。",
            "在同一计算中混合使用英寸和英尺等单位。"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形边长计算器"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "计算器: 求直角边 (已知 c 和 a)"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "计算器: 求直角边 (已知 c 和 b)"
        }
      ],
      "faqs": [
        {
          "question": "什么是毕达哥拉斯定理？",
          "answer": "毕达哥拉斯定理是一个关联直角三角形三边的公式：a² + b² = c²。它说斜边的平方等于两条边的平方和。它仅适用于直角三角形。"
        },
        {
          "question": "公式中的c是什么意思？",
          "answer": "在公式 c² = a² + b² 中，c 是斜边--直角三角形的最长边。它是 90° 角正对面的一侧。"
        },
        {
          "question": "我可以用这个计算器计算任何三角形吗？",
          "answer": "不可以。该计算器使用毕达哥拉斯定理，仅适用于直角三角形。如果您的三角形没有 90° 角度，则公式将不会给出正确的结果。"
        },
        {
          "question": "如何找到斜边？",
          "answer": "要找到斜边，请对两条边（a² 和 b²）求平方，将它们相加，然后取总和的平方根。公式为c = √(a² + b²)。或者只需在上面输入您的值，然后让计算器来计算。"
        },
        {
          "question": "直角三角形中的 a 和 b 是什么？",
          "answer": "a 和 b 是两条腿--形成直角的边。它们可以是任意正长度，并且无论您称之为 a 还是 b 都没有关系。斜边 (c) 始终是余下的一边。"
        }
      ]
    },
    "missing-leg-from-c-and-a-calculator": {
      "slug": "missing-leg-from-c-and-a-calculator",
      "url": "/missing-leg-from-c-and-a-calculator/",
      "h1": "计算器: 求直角边 (已知 c 和 a)",
      "metaTitle": "计算器: 求直角边 (已知 c 和 a) | Right Triangle Solver",
      "metaDescription": "已知斜边 c 和另一条直角边 a 时，寻找直角边 b。",
      "formulaSlug": "leg-from-hypotenuse-and-other-leg",
      "toolPurpose": "请记住：c 始终是斜边--最长的边，与直角相对。它不是一条腿。如果您有两条腿并且需要斜边，请使用毕达哥拉斯定理计算器。",
      "intro": "已知斜边 c 和另一条直角边 a 时，寻找直角边 b。",
      "quickSummary": {
        "h2": "这个缺腿计算器可以解决什么问题",
        "intro": "当斜边和边 a 已知，但另一条边缺失时，请使用此页面。计算器重新排列毕达哥拉斯定理，在求平方根之前从斜边减去已知边。",
        "cards": [
          {
            "label": "已知值",
            "value": "c = 斜边; a = 已知直角边"
          },
          {
            "label": "发现",
            "value": "b = 未知直角边"
          },
          {
            "label": "主要配方",
            "value": "b = sqrt(c^2 - a^2)"
          },
          {
            "label": "需要检查",
            "value": "要求 c > a。"
          }
        ]
      },
      "diagram": {
        "h2": "直角三角形图：寻找腿 b",
        "intro": "该图将 c 和 a 标记为您已知的值。垂直边 b 突出显示为该计算器解决的缺失边。",
        "caption": "具有已知斜边 c、已知边 a 和未知边 b 的直角三角形图。",
        "sides": {
          "a": {
            "label": "a = 已知",
            "description": "边 a 是沿直角三角形底边的已知边。",
            "status": "known"
          },
          "b": {
            "label": "b = 查找",
            "description": "支路 b 是通过从 c^2 中减去 a^2 求解的未知支路。",
            "status": "unknown"
          },
          "c": {
            "label": "c = 已知",
            "description": "斜边 c 是已知的与直角相对的最长边。",
            "status": "known"
          }
        },
        "notes": [
          "c 必须是斜边，而不是其中一条边。",
          "如果 c 小于或等于 a，则输入不会形成有效的直角三角形。",
          "结果 b 使用与 c 和 a 相同的单位。"
        ]
      },
      "calculator": {
        "outputLabel": "b = 未知直角边",
        "fields": [
          {
            "key": "c",
            "label": "c = 斜边",
            "min": 0
          },
          {
            "key": "a",
            "label": "a = 已知直角边",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "缺腿 b 公式",
        "paragraphs": [
          "求边 b 的公式源自毕达哥拉斯定理 (a² + b² = c²)。重新排列 b 得出以下公式。",
          "其中 c 是斜边（直角三角形的最长边），a 是已知边，b 是您要求解的缺失边。注意减法：从斜边的平方中减去已知边的平方，然后求平方根。"
        ],
        "formulas": [
          "b = \\sqrt{c^2 - a^2}"
        ]
      },
      "howTo": {
        "h2": "如何从 c 和 a 中查找腿 b",
        "steps": [
          "确认 c 是斜边，a 是边。斜边始终是最长的边。",
          "在第一个输入字段中输入斜边 c。",
          "在第二个输入字段中输入已知边 a。",
          "单击“计算”以找到缺失的腿。",
          "阅读 b 的结果以及完整的分步解决方案。"
        ]
      },
      "example": {
        "h2": "示例：查找腿 b",
        "intro": "给定：c = 13，a = 5。斜边为 13、边为 5 的直角三角形的缺失边为 12。",
        "lines": [
          "b = \\sqrt{13^2 - 5^2}",
          "b = \\sqrt{169 - 25}",
          "b = \\sqrt{144}",
          "b = 12"
        ]
      },
      "extraSections": [
        {
          "h2": "计算前的重要检查",
          "paragraphs": [
            "在使用此公式之前，请确保 c 大于 a。斜边始终是直角三角形的最长边。如果 c 等于 a，则 b = 0，这意味着不存在三角形。",
            "如果c小于a，则平方根下的表达式变为负数。这意味着两个输入值无法描述以 c 为斜边的实直角三角形。"
          ],
          "listTitle": "首先使用这些检查：",
          "listItems": [
            "c 与 90° 角度相反。",
            "c 大于 a。",
            "两个值都是正值。",
            "c 和 a 使用相同的单位。"
          ]
        },
        {
          "h2": "该计算器的用处",
          "paragraphs": [
            "当已知对角线或倾斜测量值、已知一条垂直边且缺少另一条垂直边时，此计算器非常有用。它是 c 和案例的重点工具，因此页面上的每个解释都指向寻找 b。",
            "它还可以帮助验证测量结果。如果 b 的测量值与计算器结果不匹配，则三角形可能不正确，斜边可能标记错误，或者一次测量可能使用不同的单位。"
          ],
          "listTitle": "常见的例子包括：",
          "listItems": [
            "当梯子长度 c 和地面距离 a 已知时，求墙高。",
            "当斜坡长度和水平长度已知时，求斜坡的垂直高度。",
            "检查给出 c 和 a 的直角三角形作业问题。",
            "确认框架、景观、坡道或平面图的布局测量。"
          ]
        },
        {
          "h2": "如何阅读答案",
          "paragraphs": [
            "标记为 Missing Leg b 的输出是与 ZX​​VARAZX 形成直角的另一条腿的长度。它不是斜边，应该比 c 短。",
            "如果计算出的 b 非常小，则您的已知边 a 非常接近斜边 c。这可能是有效的，但在使用该值之前值得检查图表和单位。"
          ],
          "listTitle": "有效的结果应满足：",
          "listItems": [
            "b 大于零。",
            "b 小于 c。",
            "a² + b² 约等于 c²。",
            "输出单位与输入单位相匹配。"
          ]
        },
        {
          "h2": "常见错误",
          "paragraphs": [
            "最常见的错误是将 c 视为一条腿。在此计算器中，c 必须是斜边，即最长的边和与直角相对的边。",
            "另一个常见的错误是平方相加而不是相减。加法求斜边；减法找出斜边缺少的一条边。"
          ],
          "listTitle": "避免这些错误：",
          "listItems": [
            "将已知边放入斜边域中。",
            "使用 c² + a² 而不是 c² - a²。",
            "输入大于或等于 c。",
            "在 b² 处停止，而不是取平方根。",
            "混合单位，例如米和厘米。"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形边长计算器"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "计算器: 勾股定理"
        },
        {
          "href": "/missing-leg-from-c-and-b-calculator/",
          "label": "计算器: 求直角边 (已知 c 和 b)"
        }
      ],
      "faqs": [
        {
          "question": "c 在此计算器中意味着什么？",
          "answer": "c 是直角三角形的斜边--最长的边，位于 90° 角的对面。它不是一条腿。您在此计算器中输入 c 作为两个已知值之一。"
        },
        {
          "question": "这个计算器中的 a 是什么意思？",
          "answer": "a 是直角三角形的两条边之一。它是形成直角的边之一。在此计算器中，a 是您已知的腿。"
        },
        {
          "question": "这个计算器能发现什么？",
          "answer": "该计算器找到缺失的腿 b。给定斜边 c 和边 a，它会计算 b = √(c² − a²) 并向您显示逐步解决方案。"
        },
        {
          "question": "c 可以小于 a 吗？",
          "answer": "不。在直角三角形中，斜边始终是最长的边。如果 c 小于 a，则这些值不会形成有效的直角三角形。在计算之前检查哪个测量值是斜边。"
        },
        {
          "question": "如何从 c 和 a 中找到 b？",
          "answer": "对斜边 (c²) 求平方，对已知边 (a²) 求平方，从 c² 中减去 a²，然后取平方根。公式为b = √(c² − a²)。或者将您的值输入此计算器以获得即时答案。"
        }
      ]
    },
    "missing-leg-from-c-and-b-calculator": {
      "slug": "missing-leg-from-c-and-b-calculator",
      "url": "/missing-leg-from-c-and-b-calculator/",
      "h1": "计算器: 求直角边 (已知 c 和 b)",
      "metaTitle": "计算器: 求直角边 (已知 c 和 b) | Right Triangle Solver",
      "metaDescription": "已知斜边 c 和直角边 b 时，寻找直角边 a。",
      "formulaSlug": "other-leg-from-hypotenuse-and-leg",
      "toolPurpose": "请记住：c 是斜边，而不是边。它是三角形的最长边，位于 90° 角的对面。如果您有两条腿并且需要斜边，请改用毕达哥拉斯定理计算器。",
      "intro": "已知斜边 c 和直角边 b 时，寻找直角边 a。",
      "quickSummary": {
        "h2": "这个缺腿计算器可以解决什么问题",
        "intro": "当您知道斜边和边 b，但需要边 a 时，请使用此页面。它将已知边 b 与未知边 a 分开，以便公式和结果与三角形上的标签相匹配。",
        "cards": [
          {
            "label": "已知值",
            "value": "c = 斜边; b = 已知直角边"
          },
          {
            "label": "发现",
            "value": "a = 未知直角边"
          },
          {
            "label": "主要配方",
            "value": "a = sqrt(c^2 - b^2)"
          },
          {
            "label": "需要检查",
            "value": "要求 c > b。"
          }
        ]
      },
      "diagram": {
        "h2": "直角三角形图：寻找腿 a",
        "intro": "该图显示 c 作为已知斜边，b 作为已知边。基腿 a 突出显示为计算器返回的缺失值。",
        "caption": "具有已知斜边 c、已知边 b 和未知边 a 的直角三角形图。",
        "sides": {
          "a": {
            "label": "a = 找到",
            "description": "腿 a 是从 c 和 b 求解的未知基本腿。",
            "status": "unknown"
          },
          "b": {
            "label": "b = 已知",
            "description": "腿 b 是与 ZX​​VARAZX 形成直角的已知腿。",
            "status": "known"
          },
          "c": {
            "label": "c = 已知",
            "description": "斜边 c 是直角三角形已知的最长边。",
            "status": "known"
          }
        },
        "notes": [
          "斜边 c 必须是输入对中最长的边。",
          "如果 c 小于或等于 b，则重新检查哪个值是斜边。",
          "计算出的 a 与您输入的值具有相同的单位。"
        ]
      },
      "calculator": {
        "outputLabel": "a = 未知直角边",
        "fields": [
          {
            "key": "c",
            "label": "c = 斜边",
            "min": 0
          },
          {
            "key": "b",
            "label": "b = 已知直角边",
            "min": 0
          }
        ]
      },
      "formulaSection": {
        "h2": "缺腿 a 公式",
        "paragraphs": [
          "从毕达哥拉斯定理（a² + b² = c²）出发，求解a，得到下面的公式。",
          "其中 c 是斜边（最长的边，与直角相对），b 是已知的边，a 是要查找的缺失边。关键操作是减法：对斜边求平方，减去已知边的平方，然后对剩下的值开平方。"
        ],
        "formulas": [
          "a = \\sqrt{c^2 - b^2}"
        ]
      },
      "howTo": {
        "h2": "如何从 c 和 b 中找到腿 a",
        "steps": [
          "确保您已正确识别斜边 (c) 和已知边 (b)。斜边始终与 90° 角相对。",
          "在第一个输入字段中输入斜边 c。",
          "在第二个输入字段中输入已知边 b。",
          "单击计算以查找边 a。",
          "查看 a 的结果以及如下所示的分步工作。"
        ]
      },
      "example": {
        "h2": "示例：查找腿 a",
        "intro": "给定：c = 10，b = 6。斜边为 10、边 6 的直角三角形的缺失边为 8。",
        "lines": [
          "a = \\sqrt{10^2 - 6^2}",
          "a = \\sqrt{100 - 36}",
          "a = \\sqrt{64}",
          "a = 8"
        ]
      },
      "extraSections": [
        {
          "h2": "计算前的重要检查",
          "paragraphs": [
            "斜边 c 必须大于 b 才能进行计算。在每个直角三角形中，斜边是最长的边。如果c等于b，则公式给出a = 0，这意味着不能形成三角形。",
            "如果 c 小于 b，则平方根下的表达式变为负数，并且 a 没有实际边长。在这种情况下，请重新检查哪一侧与 90° 角度相对。"
          ],
          "listTitle": "首先使用这些检查：",
          "listItems": [
            "c 是直角的对边。",
            "c 大于 b。",
            "两个输入都是正数。",
            "c 和 b 使用相同的测量单位。"
          ]
        },
        {
          "h2": "该计算器的用处",
          "paragraphs": [
            "当您知道斜边和边 b 并需要查找边 a 时，此计算器是正确的工具。当您的图表将已知的腿标记为 b 并将未知的底面或高度标记为 a 时，这尤其有用。",
            "该页面还可以用作测量检查。如果计算的边 a 与 a 测量的边非常不同，则三角形可能不包含真实的 90° 角度，或者已知值之一可能已被错误复制。"
          ],
          "listTitle": "常见的例子包括：",
          "listItems": [
            "当坡长 c 和高度 b 已知时，求基准距离。",
            "当斜边和水平距离已知时求垂直高度。",
            "解决给出 c 和 b 并要求 a 的几何问题。",
            "检查形成直角三角形的施工、测绘或平面图测量。"
          ]
        },
        {
          "h2": "如何阅读答案",
          "paragraphs": [
            "标记为 Missingleg a 的输出是与 ZX​​VARBZX 形成直角的另一边。它应该比斜边 c 短并且大于零。",
            "如果结果接近 c，则已知边 b 相对较小。如果结果接近于零，则 b 几乎与 c 一样长。两种情况都可能发生，但在使用答案之前应检查输入标签。"
          ],
          "listTitle": "有效的结果应满足：",
          "listItems": [
            "a 大于零。",
            "a 小于 c。",
            "a² + b² 约等于 c²。",
            "输出单位与 c 和 b 使用的单位相匹配。"
          ]
        },
        {
          "h2": "常见错误",
          "paragraphs": [
            "最大的风险是用腿交换斜边。此计算器假设 c 已经是最长的边，因此错误标记的 c 值将使结果不正确。",
            "第二个常见问题是错误地使用斜边公式。要找到缺失的边，请从斜边平方中减去已知的边平方，然后求平方根。"
          ],
          "listTitle": "避免这些错误：",
          "listItems": [
            "输入边 b 作为斜边 c。",
            "使用 c² + b² 而不是 c² - b²。",
            "输入 b 大于或等于 c。",
            "减去后忘记平方根。",
            "组合使用不同单位的测量值。"
          ]
        }
      ],
      "relatedLinks": [
        {
          "href": "/right-triangle-side-calculator/",
          "label": "直角三角形边长计算器"
        },
        {
          "href": "/pythagorean-theorem-calculator/",
          "label": "计算器: 勾股定理"
        },
        {
          "href": "/missing-leg-from-c-and-a-calculator/",
          "label": "计算器: 求直角边 (已知 c 和 a)"
        }
      ],
      "faqs": [
        {
          "question": "c 在此计算器中意味着什么？",
          "answer": "c 是斜边--直角三角形的最长边，与 90° 角相对。在此计算器中，您输入 c 作为两个已知值之一。"
        },
        {
          "question": "b在此计算器中意味着什么？",
          "answer": "b 是直角三角形的两条边之一。它是形成直角的一条边。在这里，b 是您已经知道的腿，计算器使用它与 c 一起找到缺失的腿 a。"
        },
        {
          "question": "这个计算器能发现什么？",
          "answer": "它找到了缺失的腿 a。您提供斜边 (c) 和一条边 (b)，计算器将应用公式 a = √(c² − b²) 为您提供未知边的分步解决方案。"
        },
        {
          "question": "c 可以比 b 小吗？",
          "answer": "不。斜边始终是直角三角形中最长的边。如果 c 的值小于 b，则输入不代表有效的直角三角形。重新检查哪个测量值对应于斜边。"
        },
        {
          "question": "如何从 c 和 b 中找到？",
          "answer": "对斜边 (c²) 求平方，对已知边 (b²) 求平方，从 c² 中减去 b²，然后对结果求平方根。公式为a = √(c² − b²)。您也可以只需将您的值输入此计算器即可自动获得答案。"
        }
      ]
    }
  }
} as const;
