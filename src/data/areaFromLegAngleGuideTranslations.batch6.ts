// areaFromLegAngleGuideTranslations.batch6.ts: Right Triangle Area From
// Leg and Angle Guide (Page 21 of 45) translations for Turkish (tr),
// Swedish (sv), and Chinese (zh).
export const AREA_FROM_LEG_ANGLE_TRANSLATIONS_BATCH6 = {
  "tr": {
    "faqs": [
      {
        "question": "Bir dik kenar ve bir açı kullanarak alan formülü nedir?",
        "answer": "K = bc sin(A) / 2; burada b, A açısına komşu dik kenar, c hipotenüs ve A aralarındaki dar açıdır. Örneğin b = 4, c = 5 ve A = 36,87° için K = (4 × 5 × 0,6) / 2 = 6 birim karedir. Açı derece cinsinden girilmeli ve iki kenar da aynı uzunluk birimini kullanmalıdır."
      },
      {
        "question": "Formül neden sinüs kullanır?",
        "answer": "Sinüs, eksik dik kenarı hipotenüsten kurtarır: sin(A) = a/c olduğundan, çarpma işlemi a = c sin(A) verir. Standart alan kuralı iki dik kenarı da gerektirir, K = ab/2; bu nedenle a yerine sinüs ifadesi konulunca K = bc sin(A)/2 elde edilir. Sinüs, ölçülen hipotenüs ile ölçülmemiş yükseklik arasındaki köprüdür."
      },
      {
        "question": "A açısına komşu olan kenar hangisidir?",
        "answer": "b dik kenarı, A açısına komşudur: o açıyı oluşturan iki kenardan biridir, diğeri hipotenüs c'dir. a dik kenarı ise A açısının karşısında, üçgenin öbür tarafındadır. Referans B açısına kaydırılırsa etiketler yer değiştirir: b karşı kenar, a komşu kenar olur. Kenarları adlandırmadan önce referans açıyı seçmek, bu tür karışıklıkları baştan önler."
      },
      {
        "question": "Eksik dik kenarı bilmeden alanı hesaplayabilir miyim?",
        "answer": "Evet, bu hesaplayıcının bütün amacı budur. A açısının sinüsü, eksik dik kenarın hipotenüse oranını kodlar; bu yüzden c sin(A) işlemi, a dik kenarını ölçmeden yeniden kurar. b, c ve A değerlerini girin, gerisini formül halleder. Üçüncü kenara ayrı bir girdi olarak asla ihtiyaç duymazsınız."
      },
      {
        "question": "A açısı ile B açısı arasındaki fark nedir?",
        "answer": "İkisi de dik üçgenin dar açılarıdır ve A + B = 90° olur. A açısı, b dik kenarı ile c hipotenüsü arasında bulunur; B açısı ise a dik kenarı ile c hipotenüsü arasında bulunur. K = bc sin(A)/2 formülü özellikle A açısını gerektirir. B açısını b ve c kenarlarıyla kullanmak yanlış sonuç verir; B açısı bunun yerine a ve c kenarlarıyla eşleşir."
      },
      {
        "question": "Hesaplayıcı derece mi yoksa radyan mı kullanır?",
        "answer": "Derece kullanır. Radyan değer girmek, tamamen farklı bir sinüs ve yanlış bir alan üretir. Önce derece = radyan × 180/π formülüyle radyandan dereceye dönüştürün; örneğin π/6 radyan 30° eder. Hesaplamadan önce her zaman açı birimini doğrulayın. Hesaplayıcının ayarlarında birim seçeneği yoktur, bu yüzden dönüşümü kendiniz yapmalısınız."
      },
      {
        "question": "Verilen bir dik kenar ve hipotenüsle herhangi bir açıyı kullanabilir miyim?",
        "answer": "Hayır. Üç girdi b = c cos(A) koşulunu sağlamalıdır, bu yüzden kenarlar seçilince açı da belirlenmiş olur. b = 4 ve c = 5 için A açısı yaklaşık 36,87° olmalıdır. Farklı bir açı girmek farklı bir üçgeni tanımlar ve sonuç hedeflenen dik üçgenle uyuşmaz."
      },
      {
        "question": "Ölçümlerimin geçerli bir dik üçgen oluşturduğunu nasıl kontrol ederim?",
        "answer": "Üç koşulu doğrulayın: hipotenüs dik kenardan büyüktür (c > b > 0), açı kesinlikle 0° ile 90° arasındadır ve b = c cos(A) sağlanır. Ek güvence için a = c sin(A) eşitliğini ve Pisagor teoremi a² + b² = c²'yi kontrol edin. Herhangi bir kontrol başarısız olursa en az bir ölçüm ya da etiket yanlıştır."
      },
      {
        "question": "İki dik kenarı da biliyorsam alanı hesaplayabilir miyim?",
        "answer": "Evet, ve daha kısa K = ab/2 formülü doğrudan uygulanır; açı ya da sinüs gerekmez. 3 ve 4 dik kenarları için K = 6 bulunur. Sinüs tabanlı hesaplayıcı, bir dik kenarın eksik olduğu durum için tasarlanmıştır; iki dik kenar da bilindiğinde dik kenar formülü daha basittir ve aynı sonucu verir."
      },
      {
        "question": "Yanlış açı girersem ne olur?",
        "answer": "Hesaplayıcı aldığı her şeyi çarpar, bu yüzden yanlış bir açı uyarı vermeden yanlış bir alan üretir. b = 4 ve c = 5 iken A = 36,87° yerine B = 53,13° girmek 6 yerine 8 verir. Girilen açının, b dik kenarı ile hipotenüs arasındaki açı olduğunu her zaman doğrulayın."
      },
      {
        "question": "Sabit bir hipotenüs için mümkün olan en büyük alan nedir?",
        "answer": "K = c²/4; A açısı 45° iken ve üçgen, dik kenarları c/√2 olan ikizkenar olduğunda bu değere ulaşılır. Hipotenüsü 10 olan bir üçgende üst sınır 25 birim karedir. O hipotenüse sahip hiçbir dik üçgen daha fazla alan kapsayamaz. Sonucunuz c²/4'ü aşıyorsa girdiler tutarsızdır."
      },
      {
        "question": "Sinüs tabanlı formül ile standart taban-yükseklik formülü arasındaki fark nedir?",
        "answer": "Matematiksel olarak fark yoktur: K = bc sin(A)/2 içine sin(A) = a/c konulursa K = ab/2 elde edilir; bu, standart taban-yükseklik kuralıdır. Sinüs versiyonu, aynı formülün farklı bilinenler için yeniden yazılmış halidir. Hipotenüs ve açı biliniyorsa sinüs formunu, iki dik kenar da biliniyorsa ab/2 formunu kullanın."
      }
    ],
    "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
    "relatedItems": [
      "Dik Üçgen Alanı Hesaplayıcı",
      "Dik Kenarlardan Dik Üçgen Alanı Hesaplayıcı",
      "Açıdan Dik Üçgen Alanı Hesaplayıcı",
      "Açıdan Dik Üçgen Kenarı Hesaplayıcı",
      "Dik Üçgen Kenarı Hesaplayıcı",
      "Dik Üçgen Trigonometrik Oranlar Hesaplayıcı"
    ],
    "relatedIntro": "Farklı ölçümler, farklı hesaplayıcılar gerektirir.",
    "faqHeading": "Sık Sorulan Sorular",
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "sec-intro": "Bir Dik Kenar ve Bir Açı Kullanarak Dik Üçgen Alanı Nasıl Hesaplanır",
      "sec-anatomy": "Dik Üçgenin Kenarlarını ve Açılarını Anlama",
      "sec-sine": "Dik Üçgen Hesaplamalarında Sinüs Fonksiyonunu Anlama",
      "sec-formula": "Dik Üçgen Alan Formülü Neden Sinüs Kullanır?",
      "sec-howto": "Dik Kenar ve Açıdan Dik Üçgen Alanı Hesaplayıcısı Nasıl Kullanılır",
      "sec-consistency": "Dik Kenarınızın, Hipotenüsünüzün ve Açınızın Geçerli Bir Dik Üçgen Oluşturduğu Nasıl Kontrol Edilir",
      "sec-examples": "Bir Dik Kenar ve Açı ile Dik Üçgen Alanının Adım Adım Örnekleri",
      "sec-practical": "Bir Dik Kenar ve Açıdan Dik Üçgen Alanının Gerçek Hayattaki Uygulamaları",
      "sec-compare": "Sinüs Tabanlı Formül, Dik Kenar Formülüyle Neden Aynı Alanı Verir?",
      "sec-angle-effect": "Aradaki Açı, Dik Üçgen Alanını Nasıl Etkiler?",
      "sec-alternative": "Bir Dik Kenar ve Açısıyla Dik Üçgen Alanı Hesaplanabilir mi?",
      "sec-units": "Alan Hesaplamalarında Açı Birimlerini ve Ölçümleri Anlama",
      "sec-mistakes": "Bir Dik Kenar ve Açıdan Dik Üçgen Alanı Hesaplarken Yaygın Hatalar",
      "sec-verify": "Dik Üçgen Alanınızın Doğru Olduğu Nasıl Kontrol Edilir",
      "sec-applications": "Uygulamada Bir Dik Kenar ve Açıdan Dik Üçgen Alanı",
      "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "sec-faq": "Sık Sorulan Sorular",
      "sec-conclusion": "Üç Girdi, Tüm Alanı Taşır"
    },
    "sections": {
      "sec-intro": {
        "h2": "Bir Dik Kenar ve Bir Açı Kullanarak Dik Üçgen Alanı Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "[[b=4]], [[c=5]] ve [[A=36.87^\\circ]] değerlerini alın. [[K=\\frac{bc\\sin(A)}{2}]] formülünü uygulayın: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]]. Sonuç, üç kenarın çevrelediği toplam düz alanı adlandırır: altı birim kare yüzey. Bu, Dik Kenar ve Açıdan Dik Üçgen Alanı Hesaplayıcısının bu girdiler için döndürdüğü değerin ta kendisidir." },
          { "kind": "p", "text": "Hesaplayıcı üç ölçüm ister. [[b]] dik kenarı, [[A]] açısının yanında bulunur; hipotenüs [[c]] en uzun kenardır, dik açının karşısındadır; [[A]] açısı ise ikisi arasında kalan dar açıdır. [[\\sin(A)]] değeri, eksik [[a]] dik kenarının hipotenüs [[c]]'ye oranı olduğundan, formül ölçülmeyen yüksekliği yeniden kurar. [[b]], [[c]] ve [[\\sin(A)]] çarpımı, çevreleyen dikdörtgeni oluşturur; ikiye bölmek onu üçgene indirger." },
          { "kind": "p", "text": "Bu, üçüncü kenarı ölçmek güç olduğunda önem kazanır. Bir çizim hipotenüsü ve bir dik kenarı verebilir, bir açıölçer ya da önceki bir adım da açıyı sağlayabilir. Sinüs aradaki boşluğu kapatır, böylece alan zaten bilinenlerden çıkar." }
        ]
      },
      "sec-anatomy": {
        "h2": "Dik Üçgenin Kenarlarını ve Açılarını Anlama",
        "blocks": [
          { "kind": "p", "text": "Formül anlaşılmadan önce etiketler kesin olmalıdır. Aşağıdaki her sembol hesaplayıcıda görünür ve her biri tek, sabit bir anlam taşır." },
          { "kind": "h3", "text": "Dik Üçgen Nedir?" },
          { "kind": "p", "text": "Dik üçgen, bir iç açısı 90 derece olan üçgendir. Bu açıyı oluşturan iki kenar dik kenarlardır, birbirine diktir; dik açının karşısındaki kenar hipotenüstür. Üç iç açının toplamı 180 derece olduğundan, iki dar açı [[A+B=90^\\circ]] koşulunu sağlar; bu da onları tümler yapar: birini bilmek diğerini belirler." },
          { "kind": "h3", "text": "Hipotenüs Nedir?" },
          { "kind": "p", "text": "Hipotenüs, dik açının karşısındaki kenardır. Üçgen nasıl döndürülür ya da çizilirse çizilsin her zaman en uzun kenardır. Hesaplayıcı onu [[c]] kenarı olarak kullanır; bu yüzden onu doğru belirlemek ilk adımdır: dik açıyı bulun, sonra karşısındaki kenarı alın. Eğik bir çizimde ne kadar uzun görünürse görünsün, bir dik kenar asla bu rolü oynayamaz." },
          { "kind": "h3", "text": "İki Dik Kenar Nedir?" },
          { "kind": "p", "text": "İki dik kenar, dik açıda buluşan, birbirine dik iki kenardır. [[a]] dik kenarı [[A]] açısının karşısındadır; [[b]] dik kenarı [[B]] açısının karşısındadır. Hesaplayıcı, [[A]] açısına komşu olan [[b]] dik kenarını ilk girdi olarak alır. İki dik kenar birlikte 90 derecelik açının bulunduğu köşeyi oluşturur." },
          { "kind": "h3", "text": "A Açısını Anlama" },
          { "kind": "p", "text": "[[A]] açısı, [[b]] dik kenarı ile [[c]] hipotenüsünün oluşturduğu dar açıdır. Hesaplayıcının iki kenar girdisi arasında kalan açıdır; yani [[\\angle A=\\text{angle between }b\\text{ and }c]]. Bu eşleşme sabittir: formül [[A]]'dan her bahsettiğinde, [[b]] dik kenarının uzak ucundaki köşeyi değil, bilinen dik kenarın hipotenüsle buluştuğu köşeyi kasteder." },
          { "kind": "h3", "text": "A Açısına Göre Karşı ve Komşu Kenarlar" },
          { "kind": "p", "text": "[[A]] açısında durun ve üçgene bakın. Dokunmadan yüzünüze dönük olan kenar karşı kenardır; açıyı hipotenüsün yanında oluşturan kenar komşu kenardır. Bu etiketler referans açıyı izler; bu yüzden referansı [[A]]'dan [[B]]'ye değiştirmek hangi dik kenarın hangisi olduğunu da değiştirir." },
          { "kind": "h3", "text": "Aradaki Açıyı Anlama" },
          { "kind": "p", "text": "Aradaki açı, seçilen iki kenarın oluşturduğu açıdır. Alan formülü [[b]] ile [[c]]'yi çarpar; bu yüzden ihtiyaç duyduğu açı ikisi arasında kalan açıdır: [[A]] açısı. Bu hesaplayıcı için doğru eşleşme [[b,\\;c,\\;A]]'dır. Aynı iki kenarla başka bir açıyı kullanmak, formülün varsaydığı eşleşmeyi bozar; bu yüzden [[A]] açısını [[B]] açısıyla karıştırmayın." }
        ],
        "imgAlt": "ABC dik üçgeni: b dik kenarı ve c hipotenüsü vurgulanmış, arada kalan A açısı, eksik a dik kenarı etiketlenmiş",
        "figcaption": "ABC üçgeni: vurgulanmış komşu dik kenar b ve hipotenüs c, arada kalan A açısını oluşturur; a kenarı eksik karşı dik kenardır."
      },
      "sec-sine": {
        "h2": "Dik Üçgen Hesaplamalarında Sinüs Fonksiyonunu Anlama",
        "blocks": [
          { "kind": "p", "text": "Sinüs bir oran, bir uzunluk değildir. Bir dar açı için [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]]. Bu üçgende bu ifade [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] olur. Oran, açının karşısındaki kenarı en uzun kenarla karşılaştırır; bu yüzden birimsiz saf bir sayıdır. Bir dar açı için değeri her zaman 0 ile 1 arasında bulunur ve tam da bu, bir kenarın bir diğerinin yerine geçmesini sağlar." },
          { "kind": "h3", "text": "Sinüs Eksik Dik Kenarı Bulmaya Nasıl Yardım Eder?" },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]] ifadesinden başlayın. İki tarafı da [[c]] ile çarpın: [[[\\boxed{a=c\\sin(A)}]]]. Hipotenüs, oranı yeniden bir uzunluğa ölçekler ve bu uzunluk eksik dik kenardır. Hesaplayıcı [[a]]'yı asla sormaz, çünkü bu tek düzenleme onu [[c]] ve [[A]]'dan geri kazandırır. Alan formülünün sonraki her adımı bu yerine koymaya dayanır." },
          { "kind": "h3", "text": "Sayısal Örnek" },
          { "kind": "p", "text": "[[c=5]] ve [[A=36.87^\\circ]] verildiğinde: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]]. Eksik dik kenar 3 birim uzunluğundadır; bu, tanıdık 3-4-5 üçgenini tamamlar. Tek bir çarpma, ayrı bir ölçümün yerini aldı." },
          { "kind": "h3", "text": "Sinüs Kosinüs ve Tanjanttan Nasıl Farklıdır?" },
          { "kind": "p", "text": "Kosinüs komşu kenarı kullanır: [[\\cos(A)=\\frac{b}{c}]]. Tanjant iki dik kenarı kullanır: [[\\tan(A)=\\frac{a}{b}]]. Her oran farklı bir soruyu yanıtlar. Bu hesaplayıcının sinüse ihtiyacı vardır, çünkü bilinmeyen karşı [[a]] dik kenarı, bilinen kenar ise hipotenüs [[c]]'dir. Bilinenler değiştiğinde işe yarayan oran da onlarla birlikte değişir, ancak bu kılavuzda başka hiçbir şey sinüs ailesinden ayrılmaz." }
        ]
      },
      "sec-formula": {
        "h2": "Dik Üçgen Alan Formülü Neden Sinüs Kullanır?",
        "blocks": [
          { "kind": "p", "text": "Standart kuralla başlayın: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. Bu üçgende doğal taban [[b]] dik kenarı, dik yükseklik ise [[a]] dik kenarıdır; çünkü dik kenarlar 90 derecede buluşur. Bu [[K=\\frac{ab}{2}]] verir. Hesaplayıcı [[a]]'yı sormaz, bu yüzden formül onu yeniden kurmak zorundadır. Sinüs oranından [[a=c\\sin(A)]]. Yerine koyun: [[K=\\frac{b(c\\sin(A))}{2}]], dolayısıyla [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. İkiye bölme taban-yükseklik kuralından gelir; sinüs çarpanı, kılık değiştirmiş eksik dik kenardır." },
          { "kind": "h3", "text": "Formül Neden İkiye Bölünür?" },
          { "kind": "p", "text": "Belirli bir tabanı ve dik yüksekliği olan bir üçgen, aynı taban ve yükseklik üzerine kurulan paralelkenarın tam yarısını doldurur. Herhangi bir üçgeni bir kenarı boyunca iki katına çıkarmak o paralelkenarı tamamlar; bu yüzden üçgen onun alanının yarısına sahiptir. İkiye bölme bir uzlaşım değil geometridir ve tabanı ile yüksekliği hangi formül sağlarsa sağlasın geçerlidir." },
          { "kind": "h3", "text": "Sinüs Eksik Yüksekliğin Yerini Nasıl Alır?" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]] ifadesindeki dik yükseklik [[a]] dik kenarıdır. [[\\sin(A)=\\frac{a}{c}]] olduğundan, hipotenüsü sinüsle çarpmak boyutsuz oranı [[a]] uzunluğuna geri gerer. Kullanıcı [[a]] yerine [[c]] ve [[A]]'yı ölçer ve [[c\\sin(A)]] çarpımı dönüşümü formülün içinde sessizce gerçekleştirir." },
          { "kind": "h3", "text": "Hipotenüs Neden Komşu Dik Kenarla Çarpılır?" },
          { "kind": "p", "text": "Herhangi bir üçgen için genel kural, iki kenarın ve aradaki açının alanı belirlemesidir. Burada bilinen iki kenar [[b]] ve [[c]]'dir, aradaki açıları ise [[A]]'dır. Formül tam bu iki kenarı çarpar, sonra [[\\sin(A)]] ile ölçekler ve yarıya böler. Kenarların başka herhangi bir eşleşmesi farklı bir arada kalan açı gerektirir." },
          { "kind": "h3", "text": "Bu Formül Diğer Üçgenlerde de Çalışır mı?" },
          { "kind": "p", "text": "Evet, genel formuyla: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]]; burada [[x]] ve [[y]] herhangi iki kenar, [[\\theta]] ise aralarındaki açıdır. Dik üçgen versiyonu, [[x=b]], [[y=c]] ve [[\\theta=A]] konulmuş halidir. Hesaplayıcı bir kısıtlama ekler: üç girdi aynı zamanda [[b=c\\cos(A)]] gibi dik üçgen ilişkilerini de sağlamalıdır. Genel formül, arada kalan açıya sahip her kenar çifti için bir alan hesaplar; bu hesaplayıcı sonucu bir dik üçgen olarak yorumlar." }
        ],
        "imgAlt": "3-4-5 üçgeni: sin A eşittir 3 bölü 5, a dik kenarını 3 olarak kurtarır; iki formülle de alan 6",
        "figcaption": "Sinüsten alana: sin A = 3/5, a = 3 verir; yani K = bc sin A / 2 = 6, K = ab/2 ile eşleşir."
      },
      "sec-howto": {
        "h2": "Dik Kenar ve Açıdan Dik Üçgen Alanı Hesaplayıcısı Nasıl Kullanılır",
        "blocks": [
          { "kind": "p", "text": "Hesaplayıcı sırayla girilen tam üç girdi ister. Aşağıdaki adımlar, bilinen ölçümlerden kontrol edilmiş sonuca kadar ekrandaki düzeni izler." }
        ],
        "steps": [
          "<strong>Komşu b dik kenarını belirleyin.</strong> Hipotenüsle birlikte A açısını oluşturan dik kenar.",
          "<strong>c hipotenüsünü belirleyin.</strong> En uzun kenar, dik açının karşısındakidir.",
          "<strong>Arada kalan dar A açısını belirleyin.</strong> b dik kenarı ile c hipotenüsü arasındaki açı.",
          "<strong>İki kenar için de uyumlu birimler kullanın.</strong> Metreyle metre, fitle fit; asla karışık değil.",
          "<strong>b dik kenarını ilk girdiye yazın.</strong> Bu, A açısına komşu dik kenardır.",
          "<strong>c hipotenüsünü ikinci girdiye yazın.</strong> b dik kenarını aşmalıdır.",
          "<strong>A açısını derece cinsinden girin.</strong> Hesaplayıcı radyan değil, derece bekler.",
          "<strong>Açının 0 ile 90 derece arasında olduğunu kontrol edin.</strong> Uç noktalar hiçbir üçgen tanımlamaz.",
          "<strong>Hipotenüsün dik kenardan uzun olduğunu doğrulayın.</strong> c, b'den büyük değilse bir etiket yanlıştır.",
          "<strong>Üç değerin tek bir dik üçgen tanımladığını kontrol edin.</strong> b'nin c cos(A)'ya, en azından yaklaşık olarak eşit olduğunu doğrulayın.",
          "<strong>Alan Hesapla'ya tıklayın.</strong> Sonuç, yerine koyma işlemiyle birlikte görünür.",
          "<strong>Sonucu inceleyin.</strong> Alanı okuyun ve mantıklı göründüğünü doğrulayın.",
          "<strong>Çözüm adımlarını okuyun.</strong> Formülü, sinüs değerini ve aritmetiği gösterirler.",
          "<strong>Nihai sonucun kare birim kullandığını kontrol edin.</strong> Girdilerle eşleşen uzunluk birimlerinin karesi.",
          "<strong>Başka bir problem girmeden önce Sıfırla'yı kullanın.</strong> Temiz bir başlangıç için üç alanı da temizler."
        ],
        "closingParagraphs": [
          "Sayfa tek bir hesaplayıcı yapılandırması sunar: [[b]], [[c]] ve [[A]]. İkinci bir kip yoktur; bu sayfadaki her alan yukarıdaki sinüs formülünden gelir."
        ]
      },
      "sec-consistency": {
        "h2": "Dik Kenarınızın, Hipotenüsünüzün ve Açınızın Geçerli Bir Dik Üçgen Oluşturduğu Nasıl Kontrol Edilir",
        "blocks": [
          { "kind": "p", "text": "Üç girdi birbirinden bağımsız değildir. Bir dik üçgende [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], dolayısıyla [[[\\boxed{b=c\\cos(A)}]]]. Üç değerden herhangi ikisini sabitleyin, üçüncüsü zaten belirlenmiştir. Birbiriyle uyuşmayan üç sayı girmek, formülün varsaydığı üçgeni tanımlamaz." },
          { "kind": "h3", "text": "İki Kenar Uzunluğundan Açıyı Kontrol Etme" },
          { "kind": "p", "text": "[[b]] ve [[c]] bilindiğinde açı zorunludur: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Örnek: [[b=4]], [[c=5]] için [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]]. Bir açıölçer ya da önceki bir hesap bu kenarlar için farklı bir açı bildirirse sayılardan biri yanlıştır. Kenarlar karar verir; açı onu izler." },
          { "kind": "h3", "text": "Açıdan Kenar Uzunluklarını Kontrol Etme" },
          { "kind": "p", "text": "Kontrol ters yönde de çalışır. [[c=10]] ve [[A=60^\\circ]] verildiğinde komşu dik kenar [[b=10\\cos(60^\\circ)]] olmalıdır, [[[\\boxed{b=5}]]]. Aynı hipotenüs ve açıyla [[b=8]] girmek aynı dik üçgeni tanımlamaz; çünkü [[10\\cos(60^\\circ)]] 5'e eşittir, 8'e değil. Her açı, sabit bir hipotenüs için tam bir komşu dik kenar uzunluğuna izin verir." },
          { "kind": "h3", "text": "Girdiler Tutarsızsa Ne Olur?" },
          { "kind": "p", "text": "İki kenar ve arada kalan açının genel formülü, tutarsız girdiler için de bir sayı döndürür; çünkü aldığı her şeyi çarpar. Ancak [[b\\neq c\\cos(A)]] iken ölçümler, [[c]]'nin hipotenüs ve [[b]]'nin komşu dik kenar olduğu bir dik üçgeni tanımlamaz. Sayısal bir cevap, geçerli geometrinin kanıtı değildir; tutarlılık kontrolü kanıttır." },
          { "kind": "h3", "text": "Temel Girdi Koşulları" },
          { "kind": "p", "text": "Geçerli girdiler [[c>b>0]], [[0^\\circ<A<90^\\circ]] ve [[b=c\\cos(A)]] koşullarını sağlar. İlki hipotenüsü en uzun tutar; ikincisi açıyı dar tutar; üçüncüsü üç değeri tek bir üçgene bağlar. Alana güvenmeden önce üçünü de kontrol edin." }
        ],
        "imgAlt": "Üç panel: geçerli 4, 5, 36,87 derece; geçerli 5, 10, 60 derece; geçersiz 8, 10, 60 derece",
        "figcaption": "Geçerli girdiler b = c cos A koşulunu sağlar; üçüncü panel 10 cos 60 derece = 5'in 8'e eşit olmadığını gösterir."
      },
      "sec-examples": {
        "h2": "Bir Dik Kenar ve Açı ile Dik Üçgen Alanının Adım Adım Örnekleri",
        "blocks": [
          { "kind": "p", "text": "Dört klasik dik üçgen, yöntemi artan boyutlarda gösterir. Her örnek sinüs formülünde yerine koyar, ardından sonucu iki dik kenar formülüyle doğrular." },
          { "kind": "h3", "text": "Örnek 1: 3-4-5 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler: [[b=4]], [[c=5]], [[A=36.87^\\circ]]. 1. adım: [[K=\\frac{bc\\sin(A)}{2}]]. 2. adım: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. 3. adım: [[\\sin(36.87^\\circ)\\approx0.6]]. 4. adım: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]]. Doğrulama: [[a=5\\times0.6=3]] ve [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Örnek 2: 5-12-13 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]]; [[\\sin(A)=\\frac{5}{13}]] ile. Yerine koyun: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. 13 sadeleşir: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]]. Doğrulama: [[a=13\\times(5/13)=5]] ve [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Örnek 3: 8-15-17 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]]; [[\\sin(A)=\\frac{8}{17}]] ile. O halde [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]]. Doğrulama: [[a=8]] ve [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Örnek 4: 7-24-25 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]]; [[\\sin(A)=\\frac{7}{25}]] ile. O halde [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]]. Doğrulama: [[a=7]] ve [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Temel Örneklerin Karşılaştırması" }
        ],
        "table": {
          "headers": ["Üçgen tipi", "Bilinen b dik kenarı", "c hipotenüsü", "A açısı", "Hesaplanan alan"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Bir Dik Kenar ve Açıdan Dik Üçgen Alanının Gerçek Hayattaki Uygulamaları",
        "blocks": [
          { "kind": "p", "text": "On iki çözülmüş durum, formülü sayfadan atölyeye, şantiyeye ve stüdyoya taşır. Her biri dik üçgen bir paneli, kesiti, profili ya da basitleştirilmiş modeli adlandırır, üç hesaplayıcı girdisini formülden geçirir ve sayıların arkasındaki varsayımı belirtir. Gerçek nesnenin eğri ya da düzensiz olduğu yerlerde, hesaplama yalnızca modellenen üçgeni kapsar." },
          { "kind": "h3", "text": "Örnek 1: Üçgen Cam Pencere" },
          { "kind": "p", "text": "Dik üçgen cam pencerenin [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]] değerleri vardır. Hesaplayıcı girdileri: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Yerine koyun: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]]. Bu, çerçeve payları düşülmeden önceki düz üçgen cam alanıdır." },
          { "kind": "h3", "text": "Örnek 2: Çatı Destek Paneli" },
          { "kind": "p", "text": "Dik üçgen çatı destek kesitinin [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]] değerleri vardır. Girdiler: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. O halde [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]]. Sonuç, tüm çatı değil, düz üçgen destek kesitini tanımlar." },
          { "kind": "h3", "text": "Örnek 3: Üçgen Rampa Yan Profili" },
          { "kind": "p", "text": "Basitleştirilmiş dik üçgen rampa profilinin [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]] değerleri vardır. Girdiler: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. O halde [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]]. Bu, eğimli yürüme yüzeyi değil, üçgen yan profildir." },
          { "kind": "h3", "text": "Örnek 4: Çelik Bağlantı Levhası" },
          { "kind": "p", "text": "Üçgen çelik destek levhasının [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]] değerleri vardır. Girdiler: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. O halde [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]]. Yalnızca alan, yapısal dayanım ya da taşıma kapasitesi hakkında hüküm vermez." },
          { "kind": "h3", "text": "Örnek 5: Üçgen Bahçe Kesiti" },
          { "kind": "p", "text": "Basitleştirilmiş dik üçgen bahçe kesitinin [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]] değerleri vardır. Girdiler: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. O halde [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]]. Bu, ekim için üçgen kesitin alanını tahmin etmeye yardımcı olur." },
          { "kind": "h3", "text": "Örnek 6: Üçgen Yelken Paneli" },
          { "kind": "p", "text": "Dik üçgen yelken kesitinin [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]] değerleri vardır. Girdiler: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. O halde [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]]. Dikiş ve kumaş payları bu düz panel değerinin dışındadır." },
          { "kind": "h3", "text": "Örnek 7: Kontrplak Kesim Şablonu" },
          { "kind": "p", "text": "Dik üçgen kontrplak şablonun [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]] değerleri vardır. Girdiler: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. O halde [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]]. Alan, kesim firesinden önce gereken düz malzemeyi tahmin etmeye yardımcı olur." },
          { "kind": "h3", "text": "Örnek 8: Üçgen Trafik Levhası" },
          { "kind": "p", "text": "Dik üçgen levha panelinin [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]] değerleri vardır. Girdiler: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. O halde [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]]. Bu, düz levha yüzeyinin alanını tahmin eder." },
          { "kind": "h3", "text": "Örnek 9: Arazi Ölçüm Kesiti" },
          { "kind": "p", "text": "Dik üçgen ölçüm kesitinin [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]] değerleri vardır. Girdiler: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. O halde [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]]. Sonuç, basitleştirilmiş dik üçgen arazi kesiti için geçerlidir." },
          { "kind": "h3", "text": "Örnek 10: Üçgen Tente Desteği" },
          { "kind": "p", "text": "Dik üçgen tente destek kesitinin [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]] değerleri vardır. Girdiler: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. O halde [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]]. Bu, düzensiz bir tentenin tüm kumaşı değil, düz üçgen kesitidir." },
          { "kind": "h3", "text": "Örnek 11: Endüstriyel Alan Kesiti" },
          { "kind": "p", "text": "Basitleştirilmiş dik üçgen endüstriyel arazi kesitinin [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]] değerleri vardır. Girdiler: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. O halde [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]]. Gerçek düzensiz bir alanın birden fazla şekle bölünmesi gerekebilir." },
          { "kind": "h3", "text": "Örnek 12: Depo Çatı Uç Kesiti" },
          { "kind": "p", "text": "Büyük dik üçgen depo çatı uç kesitinin [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]] değerleri vardır. Girdiler: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. O halde [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]]. Sonuç, düz üçgen uç kesitini tahmin eder." },
          { "kind": "h3", "text": "Pratik Örneklerin Karşılaştırması" }
        ],
        "table": {
          "headers": ["Pratik uygulama", "a dik kenarı", "Bilinen b dik kenarı", "c hipotenüsü", "A açısı", "Hesaplanan alan", "Ölçüm birimi"],
          "rows": [
            ["Cam pencere", "3", "4", "5", "36.87°", "6", "m²"],
            ["Çatı desteği", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Rampa profili", "6", "8", "10", "36.87°", "24", "m²"],
            ["Bağlantı levhası", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Bahçe kesiti", "7", "24", "25", "16.26°", "84", "m²"],
            ["Yelken paneli", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Kontrplak şablon", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Trafik levhası", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Ölçüm kesiti", "9", "40", "41", "12.68°", "180", "m²"],
            ["Tente desteği", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Endüstriyel kesit", "11", "60", "61", "10.39°", "330", "m²"],
            ["Depo çatı ucu", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Sinüs Tabanlı Formül, Dik Kenar Formülüyle Neden Aynı Alanı Verir?",
        "blocks": [
          { "kind": "p", "text": "[[K=\\frac{bc\\sin(A)}{2}]] ile başlayın ve [[\\sin(A)=\\frac{a}{c}]] olduğunu hatırlayın. Yerine koyun: [[K=\\frac{bc(a/c)}{2}]]. [[c]] sadeleşir ve geriye [[[\\boxed{K=\\frac{ab}{2}}]]] kalır. Sinüs formülü yeni bir alan icat etmez; farklı bir bilinenler kümesinden aynı alanı hesaplar, eksik dik kenar sinüs oranıyla içeri sızmıştır." },
          { "kind": "h3", "text": "Sinüs Formülü Ne Zaman Daha Yararlıdır?" },
          { "kind": "p", "text": "Bir dik kenar ölçülmüş, hipotenüs biliniyor ve arada kalan açı eldeyken, üçüncü kenar hiç doğrudan ölçülmemişse kullanın. Arazi ölçümleri, ölçekli çizimler ve ölçüm verileri genellikle tam bu kombinasyonla gelir. Formül bu üç sayıyı, önce eksik dik kenarı bulmaya sapmadan tek satırda alana dönüştürür." },
          { "kind": "h3", "text": "Dik Kenar Formülü Ne Zaman Daha Basittir?" },
          { "kind": "p", "text": "İki dik kenar da zaten biliniyorsa [[K=\\frac{ab}{2}]] daha kısadır: sinüs yok, açı yok, tek çarpma ve yarıya bölme. Sinüs versiyonuna ancak bir dik kenar eksikken ve açı onu sağlayabiliyorken başvurun." },
          { "kind": "h3", "text": "Sayısal Karşılaştırma" },
          { "kind": "p", "text": "3-4-5 üçgeninde sinüs yöntemi [[K=\\frac{4\\times5\\times0.6}{2}=6]] verir, dik kenar yöntemi ise [[K=\\frac{3\\times4}{2}=6]] verir. İki yol da aynı geometriden geçer, bu yüzden uyuşmak zorundadırlar. Uyuşmadıklarında suç girdilerde ya da aritmetiktedir, formüllerde asla." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Aradaki Açı, Dik Üçgen Alanını Nasıl Etkiler?",
        "blocks": [
          { "kind": "p", "text": "Hipotenüs sabitken açı serbestçe değişemez: dik üçgen ilişkileri [[b]] ile [[A]]'yı birbirine bağlar. Bu kısıtı dürüstçe ele almak, [[A]] 0 ile 90 derece arasında hareket ederken alanın tam olarak nasıl yükselip alçaldığını gösterir." },
          { "kind": "h3", "text": "A Açısı Büyüdüğünde Ne Olur?" },
          { "kind": "p", "text": "[[c]] sabitken [[b=c\\cos(A)]] ve [[a=c\\sin(A)]] olduğundan [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]] olur. Yarım açı özdeşliği [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] verir. Alan, [[A]] alttan 45 dereceye yaklaşırken büyür, 45 derecede zirve yapar, sonra 90 dereceye doğru alçalır. 30° ve 60° gibi tümler açılar aynı alanı verir; çünkü [[\\sin(2A)]] 45 dereceye göre simetriktir." },
          { "kind": "h3", "text": "Sabit Hipotenüs için En Büyük Alan" },
          { "kind": "p", "text": "Zirve, [[\\sin(2A)=1]] olduğu [[A=45^\\circ]]'de gerçekleşir: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]. Orada [[a=b=\\frac{c}{\\sqrt{2}}]] olduğundan maksimize eden üçgen ikizkenardır. Sabit bir hipotenüs, karesinin çeyreğinden fazla dik üçgen alanı kapsayamaz ve bu sınıra yalnızca ikizkenar şekil ulaşır." },
          { "kind": "h3", "text": "Sayısal Örnek" },
          { "kind": "p", "text": "[[c=10]] verildiğinde üst sınır [[K_{\\max}=\\frac{10^2}{4}]] olur, [[[\\boxed{K_{\\max}=25}]]]. [[A=45^\\circ]]'de dik kenarlar her biri [[10/\\sqrt{2}\\approx7.07]] olur ve [[\\frac{7.07\\times7.07}{2}\\approx25]]. 90°'nin kabul edilebilir bir dar açı girdisi olmadığına dikkat edin: üçgeni bir doğruya çökertir." }
        ]
      },
      "sec-alternative": {
        "h2": "Bir Dik Kenar ve Açısıyla Dik Üçgen Alanı Hesaplanabilir mi?",
        "blocks": [
          { "kind": "p", "text": "Evet, sinüs yerine tanjantla. [[b]] dik kenarı ve [[A]] açısı biliniyorsa karşı dik kenar [[a=b\\tan(A)]]'dan gelir. Bunu [[K=\\frac{ab}{2}]] içine koyun: [[K=\\frac{b(b\\tan(A))}{2}]], dolayısıyla [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]. Diğer köşeden [[b=a\\tan(B)]] ifadesi [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] verir. Bunlar gerçek alternatif yöntemlerdir; hipotenüs bilinmezken bir dik kenar ve açısı elinizdeyse işe yarar. Bunlar matematiksel alternatiflerdir, yukarıdaki hesaplayıcıda ek kipler değildir; hesaplayıcı yalnızca [[b]], [[c]] ve [[A]] ile çalışır." }
        ]
      },
      "sec-units": {
        "h2": "Alan Hesaplamalarında Açı Birimlerini ve Ölçümleri Anlama",
        "blocks": [
          { "kind": "p", "text": "Alan birimini, onu oluşturan çarpılan iki uzunluktan alır; açının ise hiçbir birim katkısı yoktur. Üç girdiyi uyumlu birimlerde tutmak, cevabı dürüst kılan şeydir." },
          { "kind": "h3", "text": "Dereceye Karşı Radyan" },
          { "kind": "p", "text": "Hesaplayıcı derece bekler. [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]] ile dönüştürün; örneğin [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Derece kipindeki bir alana radyan kipinde açı beslemek sinüs değerini sessizce değiştirir: [[\\sin(30^\\circ)=0.5]] iken [[\\sin(30\\text{ radians})\\approx-0.99]]; bu da alanı mahveder. Önce dönüştürün, sonra girin." },
          { "kind": "h3", "text": "Sinüsün Birimi Neden Yoktur?" },
          { "kind": "p", "text": "Sinüs iki uzunluğun oranıdır; bu yüzden birimler sadeleşir: hipotenüse bölünen karşı kenar saf bir sayıdır. Cevaptaki kare birimler tamamen [[b]] ile [[c]]'nin çarpılmasından gelir. Bu yüzden formülün birim muhasebesi basittir: iki uzunluk birimini eşleştirin, alan birimi onu izler." },
          { "kind": "h3", "text": "Yaygın Ölçüm Birimleri" },
          { "kind": "p", "text": "Metreler metrekare, santimetreler santimetrekare, fitler fitkare, inçler inçkare verir: [[\\text{m}\\times\\text{m}=\\text{m}^2]] ve aynı örüntü her uzunluk birimi için geçerlidir. Santimetre ile metre gibi karışık birimler, formül uygulanmadan önce tek bir birime dönüştürülmelidir; yoksa sayının temiz bir anlamı olmaz." },
          { "kind": "h3", "text": "Erken Yuvarlama Sonucu Neden Etkileyebilir?" },
          { "kind": "p", "text": "Ara adımlarda tam duyarlığı koruyun ve yalnızca nihai cevabı yuvarlayın. 36.87°'nin ardındaki tam açı 36.869897°'dir; sinüsü tam 0.6'dır. Açıyı önce yuvarlamak sinüsü bir parça kaydırır ve bu parça [[b]] ile [[c]] üzerinden çarpılarak alana geçer. Tek bir üçgende küçük, bütün bir projede fark edilir." }
        ]
      },
      "sec-mistakes": {
        "h2": "Bir Dik Kenar ve Açıdan Dik Üçgen Alanı Hesaplarken Yaygın Hatalar",
        "blocks": [
          { "kind": "p", "text": "Bu konudaki neredeyse her yanlış cevap, kötü aritmetikten değil, yanlış etiketlenmiş bir girdiden kaynaklanır. Aşağıdaki on altı hata tekrar tekrar ortaya çıkanlardır; her birinin nedeni ve çözümüyle birlikte." },
          { "kind": "h3", "text": "1. Hipotenüsü Dik Kenarla Karıştırma" },
          { "kind": "p", "text": "Hipotenüs, dik açının karşısındaki ve en uzun kenardır; dik kenar dik açıya değer. İkisini değiştirmek [[c]]'ye yanlış uzunluğu besler. Çözüm: önce dik açıyı bulun, sonra karşısındaki kenarı alın." },
          { "kind": "h3", "text": "2. A Açısını Yanlış Dik Kenarla Eşleştirme" },
          { "kind": "p", "text": "[[A]] açısı, [[b]] dik kenarı ile [[c]] hipotenüsü arasında bulunur. Onu [[a]] dik kenarıyla eşleştirmek, formülün varsaydığı arada kalan açı ilişkisini karıştırır. Çözüm: girdiğiniz açıyı oluşturan iki kenarın izini sürün." },
          { "kind": "h3", "text": "3. Karşı ve Komşu Kenarları Karıştırma" },
          { "kind": "p", "text": "Karşı, açının karşısındaki demektir; komşu ise ona değer, hipotenüsün yanı başındadır. Referans açı değiştiğinde etiketler yer değiştirir. Çözüm: [[A]] açısında durun ve her kenarı oradan adlandırın." },
          { "kind": "h3", "text": "4. Karşılık Gelen Kenarı Değiştirmeden A Açısı Yerine B Açısını Kullanma" },
          { "kind": "p", "text": "[[B]] açısı [[a]] ve [[c]] kenarlarıyla eşleşir, [[b]] ve [[c]] ile değil. [[b]] ve [[c]]'yi koruyarak [[B]] girmek farklı bir büyüklük hesaplar. Çözüm: her açıyı kendi kenar eşleşmesiyle tutun ya da önce [[B]]'yi [[A]]'ya dönüştürün." },
          { "kind": "h3", "text": "5. Hesaplayıcı Derece Beklerken Radyan Kullanma" },
          { "kind": "p", "text": "36.87 (derece) yerine 0.6435 (radyan) girmek [[\\sin(A)]]'yı tamamen değiştirir. Çözüm: hesaplayıcının birimini kontrol edin, gerekirse [[\\times\\frac{180}{\\pi}]] ile dönüştürün, sonra girin." },
          { "kind": "h3", "text": "6. İkiye Bölmeyi Unutma" },
          { "kind": "p", "text": "[[b\\times c\\times\\sin(A)]]'yı çarpmak, çevreleyen paralelkenarın alanını verir; üçgenin alanının iki katıdır. Çözüm: çarpımı yarıya bölün; /2 formülün parçasıdır, isteğe bağlı değildir." },
          { "kind": "h3", "text": "7. Sinüs Fonksiyonunu Unutma" },
          { "kind": "p", "text": "Tek başına [[\\frac{bc}{2}]] hesaplamak [[\\sin(A)]]'yı 1 sayar; bu yalnızca imkânsız bir dar açı girdisi olan 90°'de geçerlidir. Çözüm: [[\\sin(A)]]'yı ekleyin; o, eksik dik kenarın payını taşır." },
          { "kind": "h3", "text": "8. Hipotenüsten Uzun Dik Kenar Girme" },
          { "kind": "p", "text": "Hiçbir dik kenar hipotenüsü aşamaz; bu yüzden [[c\\leq b]] bir etiketin yanlış olduğu anlamına gelir. Çözüm: kenarları yeniden belirleyin; en uzun ölçüm [[c]]'dir." },
          { "kind": "h3", "text": "9. 0 Derecelik Açı Girme" },
          { "kind": "p", "text": "0°'de [[\\sin(A)=0]] olur ve üçgen sıfır alanlı bir doğruya çöker. Çözüm: 0° ile 90° arasında, kesinlikle dar bir açı kullanın." },
          { "kind": "h3", "text": "10. Dar Açı Olarak 90 Derecelik Açı Girme" },
          { "kind": "p", "text": "90°, dar bir açı değil, dik açı [[C]]'dir; [[\\sin(90^\\circ)=1]] formülü [[\\frac{bc}{2}]]'ye dönüştürür ki bu, bu üçgenin alanı değildir. Çözüm: [[b]] ile [[c]] arasındaki dar açıyı girin." },
          { "kind": "h3", "text": "11. Farklı Uzunluk Birimlerini Karıştırma" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] ile [[c=5\\text{ m}]] uyumsuz ölçekleri çarpar. Çözüm: hesaplamadan önce ikisini de tek bir birime dönüştürün (400 cm = 4 m)." },
          { "kind": "h3", "text": "12. Alanı Doğrusal Birimlerle Bildirme" },
          { "kind": "p", "text": "6 m²'lik bir alan 6 m değildir. Çözüm: kare birimi sayıyla birlikte her seferinde yazın." },
          { "kind": "h3", "text": "13. Açıyı Çok Erken Yuvarlama" },
          { "kind": "p", "text": "Sinüsü almadan önce 36.869897°'yi 36.87°'ye yuvarlamak sonucu hafifçe kaydırır; 37°'ye yuvarlamak daha fazla kaydırır. Çözüm: nihai cevaba kadar tam duyarlığı koruyun." },
          { "kind": "h3", "text": "14. Üç Girdinin Bağımsız Seçilebileceğini Varsayma" },
          { "kind": "p", "text": "[[b]], [[c]] ve [[A]], [[b=c\\cos(A)]] ile birbirine bağlıdır; üçünü de serbestçe seçmek üçgeni aşırı belirler. Çözüm: üçüncü değeri uydurmak yerine diğer ikisinden türetin." },
          { "kind": "h3", "text": "15. Girilen Kenar Uzunluklarıyla Tutarsız Açı Kullanma" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] kontrolü geçemez; çünkü [[10\\cos(60^\\circ)=5\\neq8]]. Formül yine de bir sayı döndürür ama bu, bu dik üçgenin alanı değildir. Çözüm: [[b=c\\cos(A)]] kontrolünü çalıştırın." },
          { "kind": "h3", "text": "16. Sayısal Hesaplayıcı Sonucunun Her Zaman Geçerli Bir Dik Üçgeni Temsil Ettiğini Varsayma" },
          { "kind": "p", "text": "Aritmetik, yazılan her sayıda başarılı olur; geometri olmaz. Çözüm: cevaba güvenmeden önce tutarlılık kontrolleriyle ve bağımsız bir formülle doğrulayın." },
          { "kind": "h3", "text": "Yanlışa Karşı Doğru: Somut Bir Örnek" },
          { "kind": "p", "text": "[[b=4]], [[c=5]], [[A=36.87^\\circ]] kullanın. Doğru: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. Aynı kenarlarla yanlışlıkla [[B=53.13^\\circ]] açısını girmek: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. [[B]] açısı, [[b]] ile [[c]] arasındaki arada kalan açı değildir; onun uygun kenar eşleşmesi [[a]] ve [[c]]'dir. Hata aritmetikte görünmez, geometride ise barizdir." }
        ]
      },
      "sec-verify": {
        "h2": "Dik Üçgen Alanınızın Doğru Olduğu Nasıl Kontrol Edilir",
        "blocks": [
          { "kind": "p", "text": "Yedi bağımsız kontrol, hepsi 3-4-5 üçgeni üzerinde gösterilmiştir ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). Farklı yollar arasındaki uyum, bir cevabın doğru olduğunun en güçlü kanıtıdır." },
          { "kind": "h3", "text": "Yöntem 1: Ana Formülü Kontrol Edin" },
          { "kind": "p", "text": "[[K=\\frac{bc\\sin(A)}{2}]]'yi yeniden hesaplayın: [[\\frac{4\\times5\\times0.6}{2}=6]]. İkinci bir geçiş, yazım hatalarını ve yanlış girilmiş açıları yakalar." },
          { "kind": "h3", "text": "Yöntem 2: Kosinüs İlişkisini Kontrol Edin" },
          { "kind": "p", "text": "[[b=c\\cos(A)]] olduğunu doğrulayın: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. Uyumsuzluk, açı ile kenarların farklı üçgenlere ait olduğu anlamına gelir." },
          { "kind": "h3", "text": "Yöntem 3: Eksik Dik Kenarı Hesaplayın" },
          { "kind": "p", "text": "[[a=c\\sin(A)]] olduğunu doğrulayın: [[5\\times0.6=3]]. Bu, alan formülüne beslenen sinüs değerini kontrol eder." },
          { "kind": "h3", "text": "Yöntem 4: Pisagor Teoremini Kontrol Edin" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]] olduğunu doğrulayın: [[9+16=25]]. Buradaki başarısızlık, kenar belirlemenin yanlış olduğu anlamına gelir." },
          { "kind": "h3", "text": "Yöntem 5: İki Dik Kenarla Doğrulayın" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]] olduğunu doğrulayın: [[\\frac{3\\times4}{2}=6]]. İki yöntem, bir üçgen, bir cevap." },
          { "kind": "h3", "text": "Yöntem 6: Tümler Açıları Kontrol Edin" },
          { "kind": "p", "text": "[[A+B=90^\\circ]] olduğunu doğrulayın: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. Bu, yanlış köşede ölçülmüş bir açıyı yakalar." },
          { "kind": "h3", "text": "Yöntem 7: En Büyük Alanı Kontrol Edin" },
          { "kind": "p", "text": "[[K\\leq\\frac{c^2}{4}]] olduğunu doğrulayın: [[6\\leq\\frac{25}{4}=6.25]]. Tavanı aşan bir alan, verilen hipotenüs için imkânsızdır." }
        ]
      },
      "sec-applications": {
        "h2": "Uygulamada Bir Dik Kenar ve Açıdan Dik Üçgen Alanı",
        "blocks": [
          { "kind": "p", "text": "Aynı üç girdi, trigonometriden hiç bahsetmeyen yerlerde de görünür. Bir camcı pencerenin dik kenarını ve köşegenini ölçer, açıyı çerçeveden okur; bir çatıcı destek kesitinin hipotenüsünü kiriş boyundan, açıyı eğimden bilir. Her durumda ulaşılması güç olan, mezurayla erişilmesi zor dik kenardır; oysa hipotenüs ve açı elin altındadır. Sinüs formülü tam bu asimetri için vardır: erişilebilir ölçümleri erişilemeyen yüksekliğe, sonra da alana dönüştürür." },
          { "kind": "p", "text": "Aşağıdaki dört panel bu örüntüyü farklı ölçeklerde gösterir. Bir cam pencere (6 m²) ve bir rampa profili (24 m²), metre ölçeğinde 3-4-5 ve 6-8-10 geometrisi kullanır; bir çatı desteği (30 ft²) 5-12-13 üçgenini kullanır; ölçülen bir kesit (84 m²) 7-24-25'i kullanır. Her panel komşu dik kenarı, hipotenüsü, arada kalan açıyı ve sonuç alanını etiketler; böylece ölçümden cevaba giden yol görünür kalır." }
        ],
        "imgAlt": "Dört panel: cam pencere 6 m2, çatı paneli 30 ft2, rampa profili 24 m2, ölçüm kesiti 84 m2",
        "figcaption": "Dört gerçek kullanım: alanlarıyla birlikte pencere, çatı desteği, rampa profili ve ölçüm kesiti."
      },
      "sec-related": {
        "h2": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
        "blocks": [
          { "kind": "p", "text": "Farklı ölçümler, farklı hesaplayıcılar gerektirir." }
        ]
      },
      "sec-faq": {
        "h2": "Sık Sorulan Sorular",
        "blocks": [
          { "kind": "p", "text": "Aşağıda, bir dik kenar ve bir açıdan dik üçgen alanıyla ilgili en sık sorulan soruların yanıtları verilmiştir." }
        ]
      },
      "sec-conclusion": {
        "h2": "Üç Girdi, Tüm Alanı Taşır",
        "blocks": [
          { "kind": "p", "text": "Bir dik kenar, hipotenüs ve aralarındaki açının yeterli olduğu ortaya çıkıyor. Sinüs oranı eksik dik kenarı yeniden kurar, yarıya bölme çevreleyen dikdörtgeni üçgene dönüştürür ve tutarlılık ilişkileri her girdinin diğerlerine karşı kontrol edilmesini sağlar. Girdiler tamken yöntemin hiçbir yerinde yaklaşıklık yoktur." },
          { "kind": "p", "text": "Çalışma alışkanlığı basittir: kenarları A açısından etiketleyin, birimleri eşleştirin, b = c cos(A) eşitliğini doğrulayın ve cevabı dik kenar formülüyle teyit edin. Bu alışkanlıklarla K = bc sin(A)/2, geometrideki her alan hesabı kadar güvenilirdir." }
        ]
      }
    }
  },
  "sv": {
    "faqs": [
      {
        "question": "Vad är formeln för arean med en katet och en vinkel?",
        "answer": "K = bc sin(A) / 2, där b är kateten som gränsar till vinkel A, c är hypotenusan och A är den spetsiga vinkeln mellan dem. Med till exempel b = 4, c = 5 och A = 36.87° blir K = (4 × 5 × 0.6) / 2 = 6 kvadratenheter. Vinkeln måste anges i grader och båda sidorna måste använda samma längdenhet."
      },
      {
        "question": "Varför använder formeln sinus?",
        "answer": "Sinus återvinner den saknade vinkelräta kateten från hypotenusan: eftersom sin(A) = a/c ger multiplikation a = c sin(A). Den vanliga arearegeln behöver båda kateterna, K = ab/2, så att sätta in sinusuttrycket för a ger K = bc sin(A)/2. Sinus är bron mellan den uppmätta hypotenusan och den omätta höjden."
      },
      {
        "question": "Vilken sida gränsar till vinkel A?",
        "answer": "Katet b gränsar till vinkel A: den är en av de två sidorna som bildar den vinkeln, den andra är hypotenusan c. Katet a ligger mitt emot vinkel A, på andra sidan triangeln. Om du byter referens till vinkel B byter beteckningarna plats: b blir den motstående sidan och a blir den närliggande."
      },
      {
        "question": "Kan jag beräkna arean utan att känna till den saknade kateten?",
        "answer": "Ja, det är hela poängen med den här kalkylatorn. Sinus för vinkel A kodar förhållandet mellan den saknade kateten och hypotenusan, så c sin(A) återskapar katet a utan att mäta den. Ange b, c och A, så sköter formeln resten. Du behöver aldrig den tredje sidan som separat indata."
      },
      {
        "question": "Vad är skillnaden mellan vinkel A och vinkel B?",
        "answer": "Båda är spetsiga vinklar i den rätvinkliga triangeln, och A + B = 90°. Vinkel A ligger mellan katet b och hypotenusa c; vinkel B ligger mellan katet a och hypotenusa c. Formeln K = bc sin(A)/2 kräver specifikt vinkel A. Att använda vinkel B med sidorna b och c ger ett felaktigt svar; vinkel B hör i stället ihop med sidorna a och c."
      },
      {
        "question": "Använder kalkylatorn grader eller radianer?",
        "answer": "Grader. Att ange ett radianvärde ger en helt annan sinus och en felaktig area. Omvandla först radianer till grader med grader = radianer × 180/π; till exempel motsvarar π/6 radianer 30°. Bekräfta alltid vinkelenheten innan du beräknar. Kalkylatorn har ingen enhetsväljare, så omvandlingen måste du göra själv."
      },
      {
        "question": "Kan jag använda vilken vinkel som helst med en given katet och hypotenusa?",
        "answer": "Nej. De tre indata måste uppfylla b = c cos(A), så vinkeln är låst när sidorna är valda. För b = 4 och c = 5 måste vinkel A vara cirka 36.87°. Att ange en annan vinkel beskriver en annan triangel, och resultatet stämmer inte med den avsedda rätvinkliga triangeln."
      },
      {
        "question": "Hur kontrollerar jag om mina mätningar bildar en giltig rätvinklig triangel?",
        "answer": "Verifiera tre villkor: hypotenusan är längre än kateten (c > b > 0), vinkeln är strikt mellan 0° och 90°, och b = c cos(A) gäller. För extra säkerhet, kontrollera a = c sin(A) och Pythagoras sats a² + b² = c². Om någon kontroll misslyckas är minst en mätning eller beteckning fel."
      },
      {
        "question": "Kan jag beräkna arean om jag känner till båda kateterna?",
        "answer": "Ja, och den kortare formeln K = ab/2 gäller direkt, utan att någon vinkel eller sinus behövs. För kateterna 3 och 4 blir K = 6. Den sinusbaserade kalkylatorn är gjord för fallet då en katet saknas; när båda kateterna är kända är katetformeln enklare och ger exakt samma resultat."
      },
      {
        "question": "Vad händer om jag anger fel vinkel?",
        "answer": "Kalkylatorn multiplicerar vad den än får, så en felaktig vinkel ger en felaktig area utan varning. Att ange vinkel B = 53.13° i stället för A = 36.87° med b = 4 och c = 5 ger 8 i stället för 6. Bekräfta alltid att den angivna vinkeln är den mellan katet b och hypotenusan."
      },
      {
        "question": "Vad är den största möjliga arean för en fast hypotenusa?",
        "answer": "K = c²/4, som nås när vinkel A = 45° och triangeln är likbent med kateterna c/√2. För en hypotenusa på 10 är taket 25 kvadratenheter. Ingen rätvinklig triangel med den hypotenusan kan innesluta mer area. Om ditt resultat överstiger c²/4 är indata inkonsekventa."
      },
      {
        "question": "Vad är skillnaden mellan den sinusbaserade formeln och den vanliga bas-höjd-formeln?",
        "answer": "Det finns ingen matematisk skillnad: att sätta in sin(A) = a/c i K = bc sin(A)/2 ger K = ab/2, den vanliga bas-höjd-regeln. Sinusversionen är helt enkelt samma formel omskriven för andra kända värden. Använd sinusformen när hypotenusan och vinkeln är kända; använd ab/2 när båda kateterna är kända."
      }
    ],
    "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
    "relatedItems": [
      "Areaberäknare för rätvinklig triangel",
      "Areaberäknare för rätvinklig triangel från kateter",
      "Areaberäknare för rätvinklig triangel från vinkel",
      "Sidberäknare för rätvinklig triangel från vinkel",
      "Sidberäknare för rätvinklig triangel",
      "Beräknare av trigonometriska kvoter för rätvinklig triangel"
    ],
    "relatedIntro": "Olika mätningar kräver olika kalkylatorer.",
    "faqHeading": "Vanliga frågor",
    "tocHeading": "I den här guiden",
    "tocItems": {
      "sec-intro": "Hur man beräknar arean av en rätvinklig triangel med en katet och en vinkel",
      "sec-anatomy": "Förstå sidorna och vinklarna i en rätvinklig triangel",
      "sec-sine": "Förstå sinusfunktionen i beräkningar av rätvinkliga trianglar",
      "sec-formula": "Varför använder formeln för arean av en rätvinklig triangel sinus?",
      "sec-howto": "Hur man använder areakalkylatorn för rätvinklig triangel från katet och vinkel",
      "sec-consistency": "Hur man kontrollerar om katet, hypotenusa och vinkel bildar en giltig rätvinklig triangel",
      "sec-examples": "Steg-för-steg-exempel på area av rätvinklig triangel med katet och vinkel",
      "sec-practical": "Verkliga tillämpningar av area av rätvinklig triangel från katet och vinkel",
      "sec-compare": "Varför ger den sinusbaserade formeln samma area som katetformeln?",
      "sec-angle-effect": "Hur påverkar den inkluderade vinkeln arean av en rätvinklig triangel?",
      "sec-alternative": "Kan man beräkna arean av en rätvinklig triangel med en katet och dess vinkel?",
      "sec-units": "Förstå vinkelenheter och mätningar i areaberäkningar",
      "sec-mistakes": "Vanliga misstag vid beräkning av arean av en rätvinklig triangel från en katet och en vinkel",
      "sec-verify": "Hur man kontrollerar om arean av den rätvinkliga triangeln är korrekt",
      "sec-applications": "Area av rätvinklig triangel från katet och vinkel i praktiken",
      "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "sec-faq": "Vanliga frågor",
      "sec-conclusion": "Tre indata bär hela arean"
    },
    "sections": {
      "sec-intro": {
        "h2": "Hur man beräknar arean av en rätvinklig triangel med en katet och en vinkel",
        "blocks": [
          { "kind": "p", "text": "Ta [[b=4]], [[c=5]] och [[A=36.87^\\circ]]. Tillämpa [[K=\\frac{bc\\sin(A)}{2}]]: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]]. Resultatet namnger den totala plana yta som de tre sidorna innesluter: sex kvadratenheter av yta. Det är precis vad areakalkylatorn för rätvinklig triangel från katet och vinkel returnerar för dessa indata." },
          { "kind": "p", "text": "Kalkylatorn ber om tre mått. Katet [[b]] ligger bredvid vinkel [[A]]; hypotenusan [[c]] är den längsta sidan, mitt emot den räta vinkeln; och vinkel [[A]] är den spetsiga vinkel som kläms mellan dem. Eftersom [[\\sin(A)]] är lika med förhållandet mellan den saknade kateten [[a]] och hypotenusan [[c]] återuppbygger formeln den saknade höjden utan att mäta den. Att multiplicera [[b]], [[c]] och [[\\sin(A)]] bildar den omslutande rektangeln; att dividera med två beskär den till triangeln." },
          { "kind": "p", "text": "Detta spelar roll varje gång den tredje sidan är besvärlig att mäta. En ritning kan ge hypotenusan och en katet, medan en gradskiva eller ett tidigare steg levererar vinkeln. Sinus sluter gapet, så att arean följer av det som redan är känt." }
        ]
      },
      "sec-anatomy": {
        "h2": "Förstå sidorna och vinklarna i en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Innan formeln blir begriplig måste beteckningarna vara exakta. Varje symbol nedan förekommer i kalkylatorn, och var och en bär en enda, fast betydelse." },
          { "kind": "h3", "text": "Vad är en rätvinklig triangel?" },
          { "kind": "p", "text": "En rätvinklig triangel är en triangel med en invändig vinkel lika med 90 grader. De två sidorna som bildar den vinkeln är kateterna, vinkelräta mot varandra; sidan mitt emot den räta vinkeln är hypotenusan. Eftersom de tre invändiga vinklarna summerar till 180 grader uppfyller de två spetsiga vinklarna [[A+B=90^\\circ]], vilket gör dem till komplementvinklar: att känna till den ena bestämmer den andra." },
          { "kind": "h3", "text": "Vad är hypotenusan?" },
          { "kind": "p", "text": "Hypotenusan är sidan mitt emot den räta vinkeln. Den är alltid den längsta sidan, oavsett hur triangeln vrids eller ritas. Kalkylatorn använder den som sida [[c]], så att identifiera den korrekt är första steget: hitta den räta vinkeln och ta sedan sidan mittemot den. En katet kan aldrig spela denna roll, hur lång den än ser ut i en lutande ritning." },
          { "kind": "h3", "text": "Vad är de två kateterna?" },
          { "kind": "p", "text": "De två kateterna är sidorna som möts i den räta vinkeln, vinkelräta mot varandra. Katet [[a]] ligger mitt emot vinkel [[A]]; katet [[b]] ligger mitt emot vinkel [[B]]. Kalkylatorn tar katet [[b]], den som gränsar till vinkel [[A]], som sin första indata. Tillsammans bildar kateterna det hörn där 90-gradersvinkeln bor." },
          { "kind": "h3", "text": "Förstå vinkel A" },
          { "kind": "p", "text": "Vinkel [[A]] är den spetsiga vinkel som bildas av katet [[b]] och hypotenusa [[c]]. Den är den inkluderade vinkeln mellan kalkylatorns två sidoindata, så [[\\angle A=\\text{angle between }b\\text{ and }c]]. Denna parning är fast: varhelst formeln nämner [[A]] menar den hörnet där den kända kateten möter hypotenusan, inte hörnet vid den bortre änden av katet [[b]]." },
          { "kind": "h3", "text": "Motstående och närliggande sidor i förhållande till vinkel A" },
          { "kind": "p", "text": "Ställ dig vid vinkel [[A]] och blicka över triangeln. Sidan du möter utan att vidröra är den motstående sidan; sidan som bildar vinkeln längs hypotenusan är den närliggande sidan. Dessa beteckningar följer referensvinkeln, så att byta referens från [[A]] till [[B]] växlar vilken katet som är vilken." },
          { "kind": "h3", "text": "Förstå den inkluderade vinkeln" },
          { "kind": "p", "text": "En inkluderad vinkel är den vinkel som bildas av två valda sidor. Areaformeln multiplicerar [[b]] och [[c]], så vinkeln den behöver är den som är fångad mellan dem: vinkel [[A]]. Den korrekta parningen för denna kalkylator är [[b,\\;c,\\;A]]. Att använda någon annan vinkel med samma två sidor bryter den parning som formeln förutsätter, så förväxla inte vinkel [[A]] med vinkel [[B]]." }
        ],
        "imgAlt": "Rätvinklig triangel ABC: katet b och hypotenusa c markerade, inkluderad vinkel A, saknad katet a betecknad",
        "figcaption": "Triangel ABC: markerad närliggande katet b och hypotenusa c bildar inkluderad vinkel A; sida a är den saknade motstående kateten."
      },
      "sec-sine": {
        "h2": "Förstå sinusfunktionen i beräkningar av rätvinkliga trianglar",
        "blocks": [
          { "kind": "p", "text": "Sinus är ett förhållande, inte en längd. För en spetsig vinkel är [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]]. I denna triangel blir det [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]. Förhållandet jämför sidan mittemot vinkeln med den längsta sidan, så det är ett rent tal utan enheter. För en spetsig vinkel ligger dess värde alltid mellan 0 och 1, och det är precis det som låter en sida stå in för en annan." },
          { "kind": "h3", "text": "Hur sinus hjälper till att hitta den saknade kateten" },
          { "kind": "p", "text": "Börja med [[\\sin(A)=\\frac{a}{c}]]. Multiplicera båda sidor med [[c]]: [[[\\boxed{a=c\\sin(A)}]]]. Hypotenusan skalar tillbaka förhållandet till en längd, och den längden är den saknade kateten. Kalkylatorn ber aldrig om [[a]] eftersom denna enda omformning återvinner den från [[c]] och [[A]]. Varje senare steg i areaformeln vilar på denna substitution." },
          { "kind": "h3", "text": "Numeriskt exempel" },
          { "kind": "p", "text": "Givet [[c=5]] och [[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]]. Den saknade kateten är 3 enheter lång, vilket fullbordar den välbekanta 3-4-5-triangeln. En multiplikation ersatte en separat mätning." },
          { "kind": "h3", "text": "Hur sinus skiljer sig från cosinus och tangens" },
          { "kind": "p", "text": "Cosinus använder den närliggande sidan: [[\\cos(A)=\\frac{b}{c}]]. Tangens använder de två kateterna: [[\\tan(A)=\\frac{a}{b}]]. Varje förhållande besvarar en annan fråga. Sinus är den som denna kalkylator behöver eftersom det okända är den motstående kateten [[a]] och den kända sidan är hypotenusan [[c]]. När de kända ändras ändras det användbara förhållandet med dem, men inget annat i denna guide lämnar sinusfamiljen." }
        ]
      },
      "sec-formula": {
        "h2": "Varför använder formeln för arean av en rätvinklig triangel sinus?",
        "blocks": [
          { "kind": "p", "text": "Börja med standardregeln: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. För denna triangel är den naturliga basen katet [[b]] och den vinkelräta höjden katet [[a]], eftersom kateterna möts i 90 grader. Det ger [[K=\\frac{ab}{2}]]. Kalkylatorn ber inte om [[a]], så formeln måste återuppbygga den. Från sinusförhållandet är [[a=c\\sin(A)]]. Substituera: [[K=\\frac{b(c\\sin(A))}{2}]], alltså [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Divisionen med två överlever från bas-höjd-regeln; sinusfaktorn är den saknade kateten i förklädnad." },
          { "kind": "h3", "text": "Varför divideras formeln med två?" },
          { "kind": "p", "text": "En triangel med en given bas och vinkelrät höjd fyller exakt hälften av det parallellogram som byggs på samma bas och höjd. Att fördubbla en triangel längs en sida fullbordar det parallellogrammet, så triangeln äger hälften av dess area. Divisionen med två är geometri, inte en konvention, och den gäller oavsett vilken formel som levererar basen och höjden." },
          { "kind": "h3", "text": "Hur ersätter sinus den saknade höjden?" },
          { "kind": "p", "text": "Den vinkelräta höjden i [[K=\\frac{ab}{2}]] är katet [[a]]. Eftersom [[\\sin(A)=\\frac{a}{c}]] sträcker multiplikation av hypotenusan med sinus tillbaka det dimensionslösa förhållandet till längden [[a]]. Användaren mäter [[c]] och [[A]] i stället för [[a]], och produkten [[c\\sin(A)]] utför omvandlingen tyst inuti formeln." },
          { "kind": "h3", "text": "Varför multipliceras hypotenusan med den närliggande kateten?" },
          { "kind": "p", "text": "Den allmänna regeln för varje triangel är att två sidor och deras inkluderade vinkel bestämmer arean. Här är de två kända sidorna [[b]] och [[c]], och deras inkluderade vinkel är [[A]]. Formeln multiplicerar exakt de två sidorna, skalar sedan med [[\\sin(A)]] och halverar. Varje annan parning av sidor skulle kräva en annan inkluderad vinkel." },
          { "kind": "h3", "text": "Fungerar denna formel för andra trianglar?" },
          { "kind": "p", "text": "Ja, i sin allmänna form: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], där [[x]] och [[y]] är vilka två sidor som helst och [[\\theta]] är vinkeln mellan dem. Den rätvinkliga versionen är den regeln med [[x=b]], [[y=c]] och [[\\theta=A]]. Kalkylatorn lägger till en restriktion: de tre indata måste också uppfylla de rätvinkliga sambanden, till exempel [[b=c\\cos(A)]]. Den allmänna formeln beräknar en area för varje par av inkluderad vinkel; denna kalkylator tolkar resultatet som en rätvinklig triangel." }
        ],
        "imgAlt": "3-4-5-triangel: sin A är 3 genom 5 återvinner katet a lika med 3, area 6 med två formler",
        "figcaption": "Från sinus till area: sin A = 3/5 ger a = 3, så K = bc sin A / 2 = 6 stämmer med K = ab/2."
      },
      "sec-howto": {
        "h2": "Hur man använder areakalkylatorn för rätvinklig triangel från katet och vinkel",
        "blocks": [
          { "kind": "p", "text": "Kalkylatorn behöver exakt tre indata, angivna i ordning. Stegen nedan följer layouten på skärmen från kända mått till ett kontrollerat resultat." }
        ],
        "steps": [
          "<strong>Identifiera den närliggande kateten b.</strong> Kateten som bildar vinkel A tillsammans med hypotenusan.",
          "<strong>Identifiera hypotenusan c.</strong> Den längsta sidan, mitt emot den räta vinkeln.",
          "<strong>Identifiera den inkluderade spetsiga vinkeln A.</strong> Vinkeln mellan katet b och hypotenusa c.",
          "<strong>Använd kompatibla enheter för båda sidorna.</strong> Meter med meter, fot med fot, aldrig blandat.",
          "<strong>Ange katet b i det första fältet.</strong> Detta är kateten som gränsar till vinkel A.",
          "<strong>Ange hypotenusa c i det andra fältet.</strong> Den måste överstiga katet b.",
          "<strong>Ange vinkel A i grader.</strong> Kalkylatorn förväntar sig grader, inte radianer.",
          "<strong>Kontrollera att vinkeln ligger mellan 0 och 90 grader.</strong> Ändpunkterna beskriver ingen triangel.",
          "<strong>Verifiera att hypotenusan är längre än kateten.</strong> Om c inte är större än b är en beteckning fel.",
          "<strong>Kontrollera att de tre värdena beskriver en rätvinklig triangel.</strong> Bekräfta att b är lika med c cos(A), åtminstone ungefär.",
          "<strong>Klicka på Beräkna area.</strong> Resultatet visas med substitutionen utskriven.",
          "<strong>Granska resultatet.</strong> Läs av arean och bekräfta att den ser rimlig ut.",
          "<strong>Läs lösningsstegen.</strong> De visar formeln, sinusvärdet och aritmetiken.",
          "<strong>Kontrollera att det slutliga resultatet använder kvadratenheter.</strong> Längdenheter i kvadrat, som matchar indata.",
          "<strong>Använd Återställ innan du anger ett nytt problem.</strong> Den rensar alla tre fält för en fräsch start."
        ],
        "closingParagraphs": [
          "Sidan erbjuder en kalkylatorkonfiguration: [[b]], [[c]] och [[A]]. Det finns inget andra läge; varje area på denna sida kommer från sinusformeln ovan."
        ]
      },
      "sec-consistency": {
        "h2": "Hur man kontrollerar om katet, hypotenusa och vinkel bildar en giltig rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "De tre indata är inte oberoende. I en rätvinklig triangel är [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], alltså [[[\\boxed{b=c\\cos(A)}]]]. Fixera vilka två som helst av de tre värdena och det tredje är redan bestämt. Att ange tre tal som inte stämmer överens beskriver inte den triangel som formeln förutsätter." },
          { "kind": "h3", "text": "Kontrollera vinkeln från de två sidlängderna" },
          { "kind": "p", "text": "När [[b]] och [[c]] är kända är vinkeln tvingad: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Exempel: [[b=4]], [[c=5]] ger [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]]. Om en gradskiva eller en tidigare beräkning rapporterar en annan vinkel för dessa sidor är ett av talen fel. Sidorna bestämmer; vinkeln följer." },
          { "kind": "h3", "text": "Kontrollera sidlängderna från vinkeln" },
          { "kind": "p", "text": "Kontrollen fungerar åt andra hållet också. Givet [[c=10]] och [[A=60^\\circ]] måste den närliggande kateten vara [[b=10\\cos(60^\\circ)]], [[[\\boxed{b=5}]]]. Att ange [[b=8]] med samma hypotenusa och vinkel skulle inte beskriva samma rätvinkliga triangel, eftersom [[10\\cos(60^\\circ)]] är lika med 5, inte 8. Varje vinkel tillåter exakt en närliggande katetlängd för en fast hypotenusa." },
          { "kind": "h3", "text": "Vad händer när indata är inkonsekventa?" },
          { "kind": "p", "text": "Den allmänna formeln för två sidor och inkluderad vinkel returnerar ändå ett tal för inkonsekventa indata, eftersom den multiplicerar vad den än får. Men när [[b\\neq c\\cos(A)]] beskriver måtten inte en rätvinklig triangel med [[c]] som hypotenusa och [[b]] som dess närliggande katet. Ett numeriskt svar är inte bevis på giltig geometri; konsistenskontrollen är det." },
          { "kind": "h3", "text": "Grundläggande indataförhållanden" },
          { "kind": "p", "text": "Giltiga indata uppfyller [[c>b>0]], [[0^\\circ<A<90^\\circ]] och [[b=c\\cos(A)]]. Det första håller hypotenusan längst; det andra håller vinkeln spetsig; det tredje binder samman de tre värdena till en triangel. Kontrollera alla tre innan du litar på arean." }
        ],
        "imgAlt": "Tre paneler: giltig 4, 5, 36.87 grader; giltig 5, 10, 60 grader; ogiltig 8, 10, 60 grader",
        "figcaption": "Giltiga indata uppfyller b = c cos A; den tredje panelen visar att 10 cos 60 grader = 5 inte är lika med 8."
      },
      "sec-examples": {
        "h2": "Steg-för-steg-exempel på area av rätvinklig triangel med katet och vinkel",
        "blocks": [
          { "kind": "p", "text": "Fyra klassiska rätvinkliga trianglar visar metoden i ökande storlekar. Varje exempel substituerar i sinusformeln och verifierar sedan resultatet med tvåkatetformeln." },
          { "kind": "h3", "text": "Exempel 1: 3-4-5 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Steg 1: [[K=\\frac{bc\\sin(A)}{2}]]. Steg 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Steg 3: [[\\sin(36.87^\\circ)\\approx0.6]]. Steg 4: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]]. Verifiera: [[a=5\\times0.6=3]] och [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Exempel 2: 5-12-13 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], med [[\\sin(A)=\\frac{5}{13}]]. Substituera: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. 13 förkortas bort: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]]. Verifiera: [[a=13\\times(5/13)=5]] och [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Exempel 3: 8-15-17 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], med [[\\sin(A)=\\frac{8}{17}]]. Då [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]]. Verifiera: [[a=8]] och [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Exempel 4: 7-24-25 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], med [[\\sin(A)=\\frac{7}{25}]]. Då [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]]. Verifiera: [[a=7]] och [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Jämförelse av grundläggande exempel" }
        ],
        "table": {
          "headers": ["Triangeltyp", "Känd katet b", "Hypotenusa c", "Vinkel A", "Beräknad area"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Verkliga tillämpningar av area av rätvinklig triangel från katet och vinkel",
        "blocks": [
          { "kind": "p", "text": "Tolv utarbetade situationer för formeln från sidan in i verkstaden, byggplatsen och ateljén. Var och en namnger en rätvinklig panel, sektion, profil eller förenklad modell, för indata tre genom formeln och anger antagandet bakom siffrorna. Där det verkliga objektet är krökt eller oregelbundet täcker beräkningen endast den modellerade triangeln." },
          { "kind": "h3", "text": "Exempel 1: Triangulärt glasfönster" },
          { "kind": "p", "text": "Ett rätvinkligt triangulärt glasfönster har [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Kalkylatorindata: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Substituera: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]]. Detta är den plana triangulära glasarean innan ramavdrag dras av." },
          { "kind": "h3", "text": "Exempel 2: Takstödpanel" },
          { "kind": "p", "text": "En rätvinklig triangulär takstödssektion har [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]. Indata: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. Då [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]]. Resultatet beskriver den plana triangulära stödssektionen, inte hela taket." },
          { "kind": "h3", "text": "Exempel 3: Triangulär ramp sidoprofil" },
          { "kind": "p", "text": "En förenklad rätvinklig triangulär rampprofil har [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Indata: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. Då [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]]. Detta är den triangulära sidoprofilen, inte den sluttande gångytan." },
          { "kind": "h3", "text": "Exempel 4: Stålknutplåt" },
          { "kind": "p", "text": "En triangulär stålstödsplatta har [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Indata: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. Då [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]]. Arean ensam fastställer inte strukturell styrka eller bärförmåga." },
          { "kind": "h3", "text": "Exempel 5: Triangulär trädgårdssektion" },
          { "kind": "p", "text": "En förenklad rätvinklig triangulär trädgårdssektion har [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Indata: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. Då [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]]. Detta hjälper till att uppskatta arean av den triangulära sektionen för plantering." },
          { "kind": "h3", "text": "Exempel 6: Triangulär segelpanel" },
          { "kind": "p", "text": "En rätvinklig triangulär segelsektion har [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Indata: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. Då [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]]. Sömmar och tygavdrag är exkluderade från detta plana värde." },
          { "kind": "h3", "text": "Exempel 7: Plywoodmall" },
          { "kind": "p", "text": "En rätvinklig triangulär plywoodmall har [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Indata: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. Då [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]]. Arean hjälper till att uppskatta platt materialbehov före skärspill." },
          { "kind": "h3", "text": "Exempel 8: Triangulär vägskylt" },
          { "kind": "p", "text": "En rätvinklig triangulär skyltpanel har [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Indata: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. Då [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]]. Detta uppskattar den plana skyltytans area." },
          { "kind": "h3", "text": "Exempel 9: Lantmäterisektion" },
          { "kind": "p", "text": "En rätvinklig triangulär uppmätt sektion har [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Indata: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. Då [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]]. Resultatet gäller den förenklade rätvinkliga triangulära marksektionen." },
          { "kind": "h3", "text": "Exempel 10: Triangulärt markisstöd" },
          { "kind": "p", "text": "En rätvinklig triangulär markisstödssektion har [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Indata: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. Då [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]]. Detta är den plana triangulära sektionen, inte hela tyget i en oregelbunden markis." },
          { "kind": "h3", "text": "Exempel 11: Industriell marksektion" },
          { "kind": "p", "text": "En förenklad rätvinklig triangulär industriell marksektion har [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Indata: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. Då [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]]. En verklig oregelbunden tomt kan behöva delas upp i flera former." },
          { "kind": "h3", "text": "Exempel 12: Lagerhallens takgavelsektion" },
          { "kind": "p", "text": "En stor rätvinklig triangulär takgavelsektion har [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Indata: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. Då [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]]. Resultatet uppskattar den plana triangulära gavelsektionen." },
          { "kind": "h3", "text": "Jämförelse av praktiska exempel" }
        ],
        "table": {
          "headers": ["Praktisk tillämpning", "Katet a", "Känd katet b", "Hypotenusa c", "Vinkel A", "Beräknad area", "Mätenhet"],
          "rows": [
            ["Glasfönster", "3", "4", "5", "36.87°", "6", "m²"],
            ["Takstöd", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Rampprofil", "6", "8", "10", "36.87°", "24", "m²"],
            ["Knutplåt", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Trädgårdssektion", "7", "24", "25", "16.26°", "84", "m²"],
            ["Segelpanel", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Plywoodmall", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Vägskylt", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Mätsektion", "9", "40", "41", "12.68°", "180", "m²"],
            ["Markisstöd", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Industrisektion", "11", "60", "61", "10.39°", "330", "m²"],
            ["Takgavel", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Varför ger den sinusbaserade formeln samma area som katetformeln?",
        "blocks": [
          { "kind": "p", "text": "Börja med [[K=\\frac{bc\\sin(A)}{2}]] och kom ihåg att [[\\sin(A)=\\frac{a}{c}]]. Substituera: [[K=\\frac{bc(a/c)}{2}]]. [[c]] förkortas bort och lämnar [[[\\boxed{K=\\frac{ab}{2}}]]]. Sinusformeln uppfinner ingen ny area; den beräknar samma area från en annan uppsättning kända värden, med den saknade kateten insmugglad genom sinusförhållandet." },
          { "kind": "h3", "text": "När är sinusformeln mer användbar?" },
          { "kind": "p", "text": "Använd den när en katet är uppmätt, hypotenusan är känd och den inkluderade vinkeln är tillgänglig, medan den tredje sidan aldrig mättes direkt. Fältmätningar, skalenliga ritningar och mätdata kommer ofta i exakt denna kombination. Formeln förvandlar dessa tre tal till en area på en rad, utan omväg för att först hitta den saknade kateten." },
          { "kind": "h3", "text": "När är katetformeln enklare?" },
          { "kind": "p", "text": "När båda vinkelräta kateterna redan är kända är [[K=\\frac{ab}{2}]] kortare: ingen sinus, ingen vinkel, en multiplikation och en halvering. Grip efter sinusversionen endast när en katet saknas och vinkeln kan leverera den." },
          { "kind": "h3", "text": "Numerisk jämförelse" },
          { "kind": "p", "text": "På 3-4-5-triangeln ger sinusmetoden [[K=\\frac{4\\times5\\times0.6}{2}=6]], och katetmetoden ger [[K=\\frac{3\\times4}{2}=6]]. Båda vägarna går genom samma geometri, så de måste stämma överens. När de inte gör det ligger felet i indata eller aritmetiken, aldrig i formlerna." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Hur påverkar den inkluderade vinkeln arean av en rätvinklig triangel?",
        "blocks": [
          { "kind": "p", "text": "Med hypotenusan fast kan vinkeln inte ändras fritt: de rätvinkliga sambanden binder samman [[b]] och [[A]]. Att behandla det villkoret ärligt visar exakt hur arean stiger och faller när [[A]] rör sig mellan 0 och 90 grader." },
          { "kind": "h3", "text": "Vad händer när vinkel A ökar?" },
          { "kind": "p", "text": "Med [[c]] fast är [[b=c\\cos(A)]] och [[a=c\\sin(A)]], så [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. Dubbla-vinkeln-identiteten ger [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]. Arean växer när [[A]] närmar sig 45 grader underifrån, toppar vid 45 grader och sjunker sedan mot 90 grader. Komplementvinklar, som 30° och 60°, ger samma area eftersom [[\\sin(2A)]] är symmetrisk kring 45 grader." },
          { "kind": "h3", "text": "Maximal area för en fast hypotenusa" },
          { "kind": "p", "text": "Toppen inträffar vid [[A=45^\\circ]], där [[\\sin(2A)=1]]: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]. Där är [[a=b=\\frac{c}{\\sqrt{2}}]], så den maximerande triangeln är likbent. En fast hypotenusa kan inte innesluta mer rätvinklig triangelarea än en fjärdedel av sin kvadrat, och endast den likbenta formen når den." },
          { "kind": "h3", "text": "Numeriskt exempel" },
          { "kind": "p", "text": "Givet [[c=10]] är taket [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]]. Vid [[A=45^\\circ]] är kateterna [[10/\\sqrt{2}\\approx7.07]] vardera, och [[\\frac{7.07\\times7.07}{2}\\approx25]]. Observera att 90° inte är ett tillåtet spetsigt indata: det skulle kollapsa triangeln till en linje." }
        ]
      },
      "sec-alternative": {
        "h2": "Kan man beräkna arean av en rätvinklig triangel med en katet och dess vinkel?",
        "blocks": [
          { "kind": "p", "text": "Ja, med tangens i stället för sinus. Om katet [[b]] och vinkel [[A]] är kända följer den motstående kateten från [[a=b\\tan(A)]]. Sätt in det i [[K=\\frac{ab}{2}]]: [[K=\\frac{b(b\\tan(A))}{2}]], alltså [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]. Från det andra hörnet ger [[b=a\\tan(B)]] [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]. Dessa är äkta alternativa metoder, användbara när hypotenusan är okänd men en katet och dess vinkel finns till hands. De är matematiska alternativ, inte extra lägen i kalkylatorn ovan, som endast fungerar med [[b]], [[c]] och [[A]]." }
        ]
      },
      "sec-units": {
        "h2": "Förstå vinkelenheter och mätningar i areaberäkningar",
        "blocks": [
          { "kind": "p", "text": "Arean ärver sin enhet från de två längder som multipliceras för att bilda den, medan vinkeln inte bidrar med någon enhet alls. Att hålla de tre indata i kompatibla enheter är det som håller svaret ärligt." },
          { "kind": "h3", "text": "Grader mot radianer" },
          { "kind": "p", "text": "Kalkylatorn förväntar sig grader. Omvandla med [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]; till exempel är [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. En vinkel i radianläge som matas in i ett gradfällt ändrar tyst sinusvärdet: [[\\sin(30^\\circ)=0.5]] men [[\\sin(30\\text{ radians})\\approx-0.99]], vilket skulle förstöra arean. Omvandla först, ange sedan." },
          { "kind": "h3", "text": "Varför sinus inte har enheter" },
          { "kind": "p", "text": "Sinus är ett förhållande mellan två längder, så enheterna förkortas bort: motstående genom hypotenusa är ett rent tal. Kvadratenheterna i svaret kommer helt från att multiplicera [[b]] med [[c]]. Därför är formelns enhetsbokföring enkel: matcha de två längdenheterna, så följer areaenheten." },
          { "kind": "h3", "text": "Vanliga mätenheter" },
          { "kind": "p", "text": "Meter ger kvadratmeter, centimeter ger kvadratcentimeter, fot ger kvadratfot, tum ger kvadrattum: [[\\text{m}\\times\\text{m}=\\text{m}^2]], och samma mönster gäller för varje längdenhet. Blandade enheter, som centimeter med meter, måste omvandlas till en enhet innan formeln tillämpas, annars har talet ingen ren innebörd." },
          { "kind": "h3", "text": "Varför tidig avrundning kan påverka resultatet" },
          { "kind": "p", "text": "Behåll full precision genom de mellanliggande stegen och avrunda endast det slutliga svaret. Den exakta vinkeln bakom 36.87° är 36.869897°, vars sinus är exakt 0.6; att avrunda vinkeln först flyttar sinusen ett hårstrå, och det hårstrået multipliceras genom [[b]] och [[c]] in i arean. Litet på en triangel, märkbart över ett helt projekt." }
        ]
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag vid beräkning av arean av en rätvinklig triangel från en katet och en vinkel",
        "blocks": [
          { "kind": "p", "text": "Nästan varje felaktigt svar i detta ämne spåras till en felbetecknad indata snarare än dålig aritmetik. De sexton misstagen nedan är de som dyker upp om och om igen, vart och ett med sin orsak och sin åtgärd." },
          { "kind": "h3", "text": "1. Förväxla hypotenusan med en vinkelrät katet" },
          { "kind": "p", "text": "Hypotenusan är sidan mitt emot den räta vinkeln och den längsta sidan; en katet möter den räta vinkeln. Att byta plats på dem matar fel längd in i [[c]]. Åtgärd: hitta först den räta vinkeln och ta sedan sidan mittemot den." },
          { "kind": "h3", "text": "2. Para ihop vinkel A med fel katet" },
          { "kind": "p", "text": "Vinkel [[A]] sitter mellan katet [[b]] och hypotenusa [[c]]. Att para ihop den med katet [[a]] rör till det inkluderade-vinkel-förhållande som formeln förutsätter. Åtgärd: spåra de två sidor som bildar vinkeln du angav." },
          { "kind": "h3", "text": "3. Förväxla motstående och närliggande sidor" },
          { "kind": "p", "text": "Motstående betyder mittemot vinkeln; närliggande betyder att den vidrör den, bredvid hypotenusan. Beteckningarna växlar när referensvinkeln ändras. Åtgärd: ställ dig vid vinkel [[A]] och namnge varje sida därifrån." },
          { "kind": "h3", "text": "4. Använda vinkel B i stället för vinkel A utan att ändra motsvarande sida" },
          { "kind": "p", "text": "Vinkel [[B]] hör ihop med sidorna [[a]] och [[c]], inte [[b]] och [[c]]. Att ange [[B]] medan [[b]] och [[c]] behålls beräknar en annan storhet. Åtgärd: håll varje vinkel med sin egen sidparning, eller omvandla [[B]] till [[A]] först." },
          { "kind": "h3", "text": "5. Använda radianer när kalkylatorn förväntar sig grader" },
          { "kind": "p", "text": "Att ange 0.6435 (radianer) där 36.87 (grader) hör hemma ändrar [[\\sin(A)]] fullständigt. Åtgärd: kontrollera kalkylatorns enhet, omvandla med [[\\times\\frac{180}{\\pi}]] vid behov och ange sedan." },
          { "kind": "h3", "text": "6. Glömma att dividera med två" },
          { "kind": "p", "text": "Att multiplicera [[b\\times c\\times\\sin(A)]] ger det omslutande parallellogrammets area, dubbelt så mycket som triangeln. Åtgärd: halvera produkten; /2 är en del av formeln, inte valfritt." },
          { "kind": "h3", "text": "7. Glömma sinusfunktionen" },
          { "kind": "p", "text": "Att beräkna [[\\frac{bc}{2}]] ensamt behandlar [[\\sin(A)]] som 1, vilket endast gäller vid 90°, ett omöjligt spetsigt indata. Åtgärd: inkludera [[\\sin(A)]]; den bär den saknade katetens andel." },
          { "kind": "h3", "text": "8. Ange en katet som är längre än hypotenusan" },
          { "kind": "p", "text": "Ingen katet kan överstiga hypotenusan, så [[c\\leq b]] betyder att en beteckning är fel. Åtgärd: identifiera om sidorna; den längsta mätningen är [[c]]." },
          { "kind": "h3", "text": "9. Ange en vinkel på 0 grader" },
          { "kind": "p", "text": "Vid 0° är [[\\sin(A)=0]] och triangeln kollapsar till en linje med noll area. Åtgärd: använd en äkta spetsig vinkel, strikt mellan 0° och 90°." },
          { "kind": "h3", "text": "10. Ange en vinkel på 90 grader som en spetsig vinkel" },
          { "kind": "p", "text": "90° är den räta vinkeln [[C]], inte en spetsig vinkel; [[\\sin(90^\\circ)=1]] förvandlar formeln till [[\\frac{bc}{2}]], vilket inte är denna triangels area. Åtgärd: ange den spetsiga vinkeln mellan [[b]] och [[c]]." },
          { "kind": "h3", "text": "11. Blanda olika längdenheter" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] med [[c=5\\text{ m}]] multiplicerar inkompatibla skalor. Åtgärd: omvandla båda till en enhet (400 cm = 4 m) innan du beräknar." },
          { "kind": "h3", "text": "12. Rapportera arean i linjära enheter" },
          { "kind": "p", "text": "En area på 6 m² är inte 6 m. Åtgärd: skriv kvadratenheten tillsammans med talet, varje gång." },
          { "kind": "h3", "text": "13. Avrunda vinkeln för tidigt" },
          { "kind": "p", "text": "Att avrunda 36.869897° till 36.87° innan sinus tas förskjuter resultatet något; att avrunda till 37° förskjuter det mer. Åtgärd: behåll full precision fram till det slutliga svaret." },
          { "kind": "h3", "text": "14. Anta att de tre indata kan väljas oberoende" },
          { "kind": "p", "text": "[[b]], [[c]] och [[A]] är länkade genom [[b=c\\cos(A)]]; att välja alla tre fritt överbestämmer triangeln. Åtgärd: härled det tredje värdet från de andra två i stället för att hitta på det." },
          { "kind": "h3", "text": "15. Använda en vinkel som är inkonsekvent med de angivna sidlängderna" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] klarar inte kontrollen, eftersom [[10\\cos(60^\\circ)=5\\neq8]]. Formeln returnerar ändå ett tal, men det är inte denna rätvinkliga triangels area. Åtgärd: kör kontrollen [[b=c\\cos(A)]]." },
          { "kind": "h3", "text": "16. Anta att ett numeriskt kalkylatorresultat alltid representerar en giltig rätvinklig triangel" },
          { "kind": "p", "text": "Aritmetik lyckas på vilka tal som än skrivs in; geometri gör det inte. Åtgärd: verifiera med konsistenskontrollerna och en oberoende formel innan du litar på svaret." },
          { "kind": "h3", "text": "Fel mot rätt: ett konkret exempel" },
          { "kind": "p", "text": "Använd [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Rätt: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. Att felaktigt ange vinkel [[B=53.13^\\circ]] med samma sidor: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. Vinkel [[B]] är inte den inkluderade vinkeln mellan [[b]] och [[c]]; dess korrekta sidparning är [[a]] och [[c]]. Felet är osynligt i aritmetiken och uppenbart i geometrin." }
        ]
      },
      "sec-verify": {
        "h2": "Hur man kontrollerar om arean av den rätvinkliga triangeln är korrekt",
        "blocks": [
          { "kind": "p", "text": "Sju oberoende kontroller, alla demonstrerade på 3-4-5-triangeln ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). Överensstämmelse mellan olika vägar är det starkaste beviset på att ett svar är rätt." },
          { "kind": "h3", "text": "Metod 1: Kontrollera huvudformeln" },
          { "kind": "p", "text": "Räkna om [[K=\\frac{bc\\sin(A)}{2}]]: [[\\frac{4\\times5\\times0.6}{2}=6]]. En andra genomgång fångar stavfel och felknappade vinklar." },
          { "kind": "h3", "text": "Metod 2: Kontrollera cosinussambandet" },
          { "kind": "p", "text": "Bekräfta [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. En avvikelse betyder att vinkeln och sidorna tillhör olika trianglar." },
          { "kind": "h3", "text": "Metod 3: Beräkna den saknade kateten" },
          { "kind": "p", "text": "Bekräfta [[a=c\\sin(A)]]: [[5\\times0.6=3]]. Detta kontrollerar sinusvärdet som matar areaformeln." },
          { "kind": "h3", "text": "Metod 4: Kontrollera Pythagoras sats" },
          { "kind": "p", "text": "Bekräfta [[a^2+b^2=c^2]]: [[9+16=25]]. Misslyckande här betyder att sididentifieringen är fel." },
          { "kind": "h3", "text": "Metod 5: Verifiera med de två kateterna" },
          { "kind": "p", "text": "Bekräfta [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]. Två metoder, en triangel, ett svar." },
          { "kind": "h3", "text": "Metod 6: Kontrollera komplementvinklarna" },
          { "kind": "p", "text": "Bekräfta [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. Detta fångar en vinkel som mätts vid fel hörn." },
          { "kind": "h3", "text": "Metod 7: Kontrollera den maximala arean" },
          { "kind": "p", "text": "Bekräfta [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]. En area över taket är omöjlig för den givna hypotenusan." }
        ]
      },
      "sec-applications": {
        "h2": "Area av rätvinklig triangel från katet och vinkel i praktiken",
        "blocks": [
          { "kind": "p", "text": "Samma tre indata dyker upp på platser som aldrig nämner trigonometri. En glasmästare mäter ett fönsters katet och diagonal och läser av vinkeln på ramen; en takläggare känner stödets hypotenusa från takstollängden och vinkeln från lutningen. I varje fall är den saknade vinkelräta sidan den besvärliga att nå med ett måttband, medan hypotenusan och vinkeln finns nära till hands. Sinusformeln finns för exakt den asymmetrin: den omvandlar de tillgängliga måtten till den oåtkomliga höjden och sedan till arean." },
          { "kind": "p", "text": "De fyra panelerna nedan visar mönstret i olika skalor. Ett glasfönster (6 m²) och en rampprofil (24 m²) använder 3-4-5- och 6-8-10-geometri i meterskala; ett takstöd (30 ft²) använder 5-12-13-triangeln; en uppmätt sektion (84 m²) använder 7-24-25. Varje panel betecknar den närliggande kateten, hypotenusan, den inkluderade vinkeln och den resulterande arean, så att vägen från mätning till svar förblir synlig." }
        ],
        "imgAlt": "Fyra paneler: glasfönster 6 m2, takpanel 30 ft2, rampprofil 24 m2, mätsektion 84 m2",
        "figcaption": "Fyra verkliga användningar: fönster, takstöd, rampprofil och mätsektion med deras areor."
      },
      "sec-related": {
        "h2": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "blocks": [
          { "kind": "p", "text": "Olika mätningar kräver olika kalkylatorer." }
        ]
      },
      "sec-faq": {
        "h2": "Vanliga frågor",
        "blocks": [
          { "kind": "p", "text": "Nedan finns svar på de vanligaste frågorna om arean av en rätvinklig triangel från en katet och en vinkel." }
        ]
      },
      "sec-conclusion": {
        "h2": "Tre indata bär hela arean",
        "blocks": [
          { "kind": "p", "text": "En katet, hypotenusan och vinkeln mellan dem visar sig räcka. Sinusförhållandet återuppbygger den saknade kateten, halveringen omvandlar den omslutande rektangeln till triangeln, och konsistenssambanden låter varje indata kontrolleras mot de andra. Inget i metoden är approximativt när indata är exakta." },
          { "kind": "p", "text": "Arbetsvanan är enkel: beteckna sidorna från vinkel A, håll enheterna matchade, bekräfta b = c cos(A) och verifiera svaret genom katetformeln. Med dessa vanor är K = bc sin(A)/2 lika pålitlig som vilken areaberäkning som helst i geometrin." }
        ]
      }
    }
  },
  "zh": {
    "faqs": [
      {
        "question": "用一条直角边和一个角求面积的公式是什么？",
        "answer": "K = bc sin(A) / 2，其中 b 是与角 A 相邻的直角边，c 是斜边，A 是它们之间的锐角。例如 b = 4、c = 5、A = 36.87° 时，K = (4 × 5 × 0.6) / 2 = 6 平方单位。角度必须以度为单位输入，两条边必须使用相同的长度单位。"
      },
      {
        "question": "为什么公式要使用正弦？",
        "answer": "正弦从斜边中恢复出缺失的垂直直角边：因为 sin(A) = a/c，相乘得到 a = c sin(A)。标准面积法则需要两条直角边，K = ab/2，因此把 a 换成正弦表达式就得到 K = bc sin(A)/2。正弦是已测斜边与未测高度之间的桥梁。"
      },
      {
        "question": "哪条边与角 A 相邻？",
        "answer": "直角边 b 与角 A 相邻：它是构成该角的两条边之一，另一条是斜边 c。直角边 a 与角 A 相对，位于三角形的另一侧。如果把参考角换成角 B，标签就会互换：b 变成对边，a 变成邻边。"
      },
      {
        "question": "不知道缺失的直角边，可以求面积吗？",
        "answer": "可以，这正是这个计算器的全部意义。角 A 的正弦编码了缺失直角边与斜边的比值，因此 c sin(A) 无需测量就能重建直角边 a。输入 b、c 和 A，公式会处理其余部分。你从不需要把第三条边作为单独输入。"
      },
      {
        "question": "角 A 和角 B 有什么区别？",
        "answer": "两者都是直角三角形的锐角，且 A + B = 90°。角 A 位于直角边 b 与斜边 c 之间；角 B 位于直角边 a 与斜边 c 之间。公式 K = bc sin(A)/2 特别要求角 A。用角 B 配边 b、c 会得到错误答案；角 B 应与边 a、c 搭配。"
      },
      {
        "question": "计算器使用度还是弧度？",
        "answer": "使用度。输入弧度值会产生完全不同的正弦值和错误的面积。先用公式 度数 = 弧度 × 180/π 把弧度换算成度；例如 π/6 弧度等于 30°。计算前务必确认角度单位。"
      },
      {
        "question": "给定一条直角边和斜边，可以用任意角度吗？",
        "answer": "不可以。三个输入必须满足 b = c cos(A)，因此边选定后角度就已确定。b = 4、c = 5 时，角 A 必须约为 36.87°。输入不同的角度描述的是另一个三角形，结果不会与目标直角三角形相符。"
      },
      {
        "question": "如何检查我的测量值是否构成有效的直角三角形？",
        "answer": "验证三个条件：斜边长于直角边（c > b > 0），角度严格介于 0° 和 90° 之间，且 b = c cos(A) 成立。为更保险，再检查 a = c sin(A) 和勾股定理 a² + b² = c²。若任一检查失败，至少有一个测量值或标签是错的。"
      },
      {
        "question": "已知两条直角边，可以求面积吗？",
        "answer": "可以，直接用更短的公式 K = ab/2，不需要角度或正弦。直角边为 3 和 4 时，K = 6。基于正弦的计算器是为缺一条直角边的情况设计的；两条直角边都已知时，直角边公式更简单且结果完全相同。"
      },
      {
        "question": "如果输入了错误的角度会怎样？",
        "answer": "计算器会把收到的任何值都相乘，因此错误的角度会无提示地给出错误的面积。b = 4、c = 5 时，若把 A = 36.87° 误输入为 B = 53.13°，结果是 8 而不是 6。务必确认输入的角度是直角边 b 与斜边之间的那个角。"
      },
      {
        "question": "斜边固定时可能的最大面积是多少？",
        "answer": "K = c²/4，当角 A = 45° 且三角形是直角边为 c/√2 的等腰三角形时达到。斜边为 10 时，上限是 25 平方单位。任何具有该斜边的直角三角形都无法包围更大的面积。如果你的结果超过 c²/4，说明输入不一致。"
      },
      {
        "question": "基于正弦的公式与标准底乘高公式有什么区别？",
        "answer": "数学上没有区别：把 sin(A) = a/c 代入 K = bc sin(A)/2，得到 K = ab/2，即标准底乘高法则。正弦版本只是同一公式针对不同已知量改写的形式。已知斜边和角度时用正弦形式；两条直角边都已知时用 ab/2。"
      }
    ],
    "relatedHeading": "探索相关的直角三角形计算器",
    "relatedItems": [
      "直角三角形面积计算器",
      "直角边求直角三角形面积计算器",
      "角度求直角三角形面积计算器",
      "角度求直角三角形边长计算器",
      "直角三角形边长计算器",
      "直角三角形三角比计算器"
    ],
    "relatedIntro": "不同的测量需要不同的计算器。",
    "faqHeading": "常见问题",
    "tocHeading": "本指南内容",
    "tocItems": {
      "sec-intro": "如何用一条直角边和一个角计算直角三角形的面积",
      "sec-anatomy": "理解直角三角形的边和角",
      "sec-sine": "理解直角三角形计算中的正弦函数",
      "sec-formula": "直角三角形面积公式为什么使用正弦？",
      "sec-howto": "如何使用直角边和角求直角三角形面积计算器",
      "sec-consistency": "如何检查直角边、斜边和角是否构成有效的直角三角形",
      "sec-examples": "用直角边和角求直角三角形面积的分步示例",
      "sec-practical": "直角边和角求直角三角形面积的实际应用",
      "sec-compare": "为什么基于正弦的公式与直角边公式得出相同的面积？",
      "sec-angle-effect": "夹角如何影响直角三角形的面积？",
      "sec-alternative": "能用一条直角边及其夹角计算直角三角形面积吗？",
      "sec-units": "理解面积计算中的角度单位与测量",
      "sec-mistakes": "用直角边和角计算直角三角形面积时的常见错误",
      "sec-verify": "如何检查直角三角形面积是否正确",
      "sec-applications": "实践中的直角边和角求直角三角形面积",
      "sec-related": "探索相关的直角三角形计算器",
      "sec-faq": "常见问题",
      "sec-conclusion": "三个输入承载整个面积"
    },
    "sections": {
      "sec-intro": {
        "h2": "如何用一条直角边和一个角计算直角三角形的面积",
        "blocks": [
          { "kind": "p", "text": "取 [[b=4]]、[[c=5]] 和 [[A=36.87^\\circ]]。应用 [[K=\\frac{bc\\sin(A)}{2}]]：[[K=\\frac{4\\times5\\times0.6}{2}]]，[[[\\boxed{K=6\\text{ square units}}]]]。结果给出了三条边所围成的总平面区域的名称：六平方单位的表面。这正是直角边和角求直角三角形面积计算器对这些输入返回的结果。" },
          { "kind": "p", "text": "计算器要求三个测量值。直角边 [[b]] 紧邻角 [[A]]；斜边 [[c]] 是最长的边，位于直角对面；角 [[A]] 是夹在它们之间的锐角。因为 [[\\sin(A)]] 等于缺失直角边 [[a]] 与斜边 [[c]] 的比值，公式无需测量就能重建缺失的高度。把 [[b]]、[[c]] 和 [[\\sin(A)]] 相乘构成外包矩形；除以二则将其修剪为三角形。" },
          { "kind": "p", "text": "每当第三条边难以测量时，这一点就很重要。一张图纸可能给出斜边和一条直角边，而量角器或前面的步骤提供角度。正弦弥合了缺口，因此面积可以从已知量直接得出。" }
        ]
      },
      "sec-anatomy": {
        "h2": "理解直角三角形的边和角",
        "blocks": [
          { "kind": "p", "text": "在理解公式之前，标签必须准确。下面的每个符号都出现在计算器中，且各自只有一种固定含义。" },
          { "kind": "h3", "text": "什么是直角三角形？" },
          { "kind": "p", "text": "直角三角形是有一个内角等于 90 度的三角形。构成该角的两条边是直角边，彼此垂直；直角对面的边是斜边。因为三个内角之和为 180 度，两个锐角满足 [[A+B=90^\\circ]]，即它们互余：知道一个就能确定另一个。" },
          { "kind": "h3", "text": "什么是斜边？" },
          { "kind": "p", "text": "斜边是直角对面的边。无论三角形如何旋转或绘制，它始终是最长的边。计算器把它用作边 [[c]]，因此正确识别它是第一步：先找到直角，再取它对面的边。在倾斜的图纸中，无论一条直角边看起来多长，它都永远不能扮演这个角色。" },
          { "kind": "h3", "text": "两条直角边是什么？" },
          { "kind": "p", "text": "两条直角边是在直角处相交、彼此垂直的两条边。直角边 [[a]] 与角 [[A]] 相对；直角边 [[b]] 与角 [[B]] 相对。计算器把与角 [[A]] 相邻的直角边 [[b]] 作为第一个输入。两条直角边共同构成 90 度角所在的角。" },
          { "kind": "h3", "text": "理解角 A" },
          { "kind": "p", "text": "角 [[A]] 是由直角边 [[b]] 和斜边 [[c]] 构成的锐角。它是计算器两个边输入之间的夹角，因此 [[\\angle A=\\text{angle between }b\\text{ and }c]]。这个配对是固定的：公式中凡是提到 [[A]]，指的都是已知直角边与斜边相交的那个角，而不是直角边 [[b]] 远端那个角。" },
          { "kind": "h3", "text": "相对于角 A 的对边和邻边" },
          { "kind": "p", "text": "站在角 [[A]] 处俯视三角形。你不接触而面对的那条边是对边；与斜边一起构成该角的边是邻边。这些标签跟随参考角，因此把参考从 [[A]] 换成 [[B]]，哪条直角边是哪条也会互换。" },
          { "kind": "h3", "text": "理解夹角" },
          { "kind": "p", "text": "夹角是由选定的两条边构成的角。面积公式把 [[b]] 和 [[c]] 相乘，因此它需要的角是夹在它们之间的角：角 [[A]]。这个计算器的正确配对是 [[b,\\;c,\\;A]]。用同样的两条边配任何其他角度，都会破坏公式所假设的配对，因此不要把角 [[A]] 与角 [[B]] 混淆。" }
        ],
        "imgAlt": "直角三角形 ABC：直角边 b 和斜边 c 高亮显示，夹角 A，缺失的直角边 a 已标注",
        "figcaption": "三角形 ABC：高亮的相邻直角边 b 与斜边 c 构成夹角 A；边 a 是缺失的对边直角边。"
      },
      "sec-sine": {
        "h2": "理解直角三角形计算中的正弦函数",
        "blocks": [
          { "kind": "p", "text": "正弦是一个比值，不是长度。对于锐角，[[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]]。在这个三角形中，它变为 [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]。该比值比较角对面的边与最长的边，因此是一个没有单位的纯数。对于锐角，它的值始终在 0 和 1 之间，而正是它让一条边可以代替另一条边。" },
          { "kind": "h3", "text": "正弦如何帮助求出缺失的直角边？" },
          { "kind": "p", "text": "从 [[\\sin(A)=\\frac{a}{c}]] 出发。两边同乘 [[c]]：[[[\\boxed{a=c\\sin(A)}]]]。斜边把比值放大回一个长度，而这个长度就是缺失的直角边。计算器从不要求输入 [[a]]，因为这一次变形就能从 [[c]] 和 [[A]] 中恢复它。面积公式的后续每一步都建立在这个代入之上。" },
          { "kind": "h3", "text": "数值示例" },
          { "kind": "p", "text": "已知 [[c=5]] 和 [[A=36.87^\\circ]]：[[a=5\\times\\sin(36.87^\\circ)]]，[[a=5\\times0.6]]，[[[\\boxed{a=3}]]]。缺失的直角边长为 3 个单位，补全了熟悉的 3-4-5 三角形。一次乘法取代了一次单独的测量。" },
          { "kind": "h3", "text": "正弦与余弦、正切有何不同？" },
          { "kind": "p", "text": "余弦用邻边：[[\\cos(A)=\\frac{b}{c}]]。正切用两条直角边：[[\\tan(A)=\\frac{a}{b}]]。每个比值回答不同的问题。这个计算器需要正弦，因为未知的是对边直角边 [[a]]，已知的是斜边 [[c]]。当已知量改变时，有用的比值也随之改变，但本指南中没有其他内容会离开正弦家族。" }
        ]
      },
      "sec-formula": {
        "h2": "直角三角形面积公式为什么使用正弦？",
        "blocks": [
          { "kind": "p", "text": "从标准法则出发：[[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]。对于这个三角形，自然的底是直角边 [[b]]，垂直高度是直角边 [[a]]，因为两条直角边在 90 度处相交。这给出 [[K=\\frac{ab}{2}]]。计算器不要求输入 [[a]]，因此公式必须重建它。由正弦比值，[[a=c\\sin(A)]]。代入：[[K=\\frac{b(c\\sin(A))}{2}]]，于是 [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]。除以二来自底乘高法则；正弦因子是伪装的缺失直角边。" },
          { "kind": "h3", "text": "为什么公式要除以二？" },
          { "kind": "p", "text": "给定底和垂直高度的三角形，恰好占满同底同高平行四边形的一半。把任何三角形沿一条边加倍，就补全了那个平行四边形，因此三角形拥有其面积的一半。除以二是几何，不是约定，无论底和高由哪个公式提供都成立。" },
          { "kind": "h3", "text": "正弦如何代替缺失的高度？" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]] 中的垂直高度是直角边 [[a]]。因为 [[\\sin(A)=\\frac{a}{c}]]，把斜边乘以正弦，就把无量纲的比值拉伸回长度 [[a]]。用户测量 [[c]] 和 [[A]] 而不是 [[a]]，乘积 [[c\\sin(A)]] 在公式内部悄悄完成这个转换。" },
          { "kind": "h3", "text": "为什么斜边要乘以相邻的直角边？" },
          { "kind": "p", "text": "对任何三角形，通用法则是两条边及其夹角决定面积。这里已知的两条边是 [[b]] 和 [[c]]，它们的夹角是 [[A]]。公式把恰好这两条边相乘，再乘以 [[\\sin(A)]] 并减半。边的任何其他配对都要求不同的夹角。" },
          { "kind": "h3", "text": "这个公式适用于其他三角形吗？" },
          { "kind": "p", "text": "适用，其一般形式为：[[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]]，其中 [[x]] 和 [[y]] 是任意两条边，[[\\theta]] 是它们之间的夹角。直角三角形版本就是代入 [[x=b]]、[[y=c]] 和 [[\\theta=A]] 的这条法则。计算器加了一个限制：三个输入还必须满足直角三角形关系，如 [[b=c\\cos(A)]]。一般公式对任何夹角边对都计算面积；这个计算器把结果解释为直角三角形。" }
        ],
        "imgAlt": "3-4-5 三角形：sin A 等于 3 比 5，恢复直角边 a 等于 3，两种公式面积均为 6",
        "figcaption": "从正弦到面积：sin A = 3/5 得出 a = 3，因此 K = bc sin A / 2 = 6 与 K = ab/2 一致。"
      },
      "sec-howto": {
        "h2": "如何使用直角边和角求直角三角形面积计算器",
        "blocks": [
          { "kind": "p", "text": "计算器需要按顺序输入的恰好三个输入。以下步骤从已知测量值到经核对的结果，遵循屏幕上的布局。" }
        ],
        "steps": [
          "<strong>确定相邻的直角边 b。</strong>与斜边一起构成角 A 的直角边。",
          "<strong>确定斜边 c。</strong>最长的边，位于直角对面。",
          "<strong>确定夹着的锐角 A。</strong>直角边 b 与斜边 c 之间的角。",
          "<strong>两条边使用兼容的单位。</strong>米配米，英尺配英尺，切勿混用。",
          "<strong>在第一个输入框中输入直角边 b。</strong>这是与角 A 相邻的直角边。",
          "<strong>在第二个输入框中输入斜边 c。</strong>它必须大于直角边 b。",
          "<strong>以度为单位输入角 A。</strong>计算器要求的是度，不是弧度。",
          "<strong>检查角度是否在 0 到 90 度之间。</strong>端点描述不出三角形。",
          "<strong>验证斜边长于直角边。</strong>如果 c 不大于 b，说明标签错了。",
          "<strong>检查三个值是否描述同一个直角三角形。</strong>确认 b 等于 c cos(A)，至少近似成立。",
          "<strong>点击计算面积。</strong>结果会连同代入过程一起显示。",
          "<strong>查看结果。</strong>读出面积，确认它看起来合理。",
          "<strong>阅读解题步骤。</strong>它们展示了公式、正弦值和算术过程。",
          "<strong>检查最终结果使用平方单位。</strong>长度单位的平方，与输入匹配。",
          "<strong>输入下一道题前使用重置。</strong>它会清空三个输入框，重新开始。"
        ],
        "closingParagraphs": [
          "本页面只提供一种计算器配置：[[b]]、[[c]] 和 [[A]]。没有第二种模式；本页的每个面积都来自上面的正弦公式。"
        ]
      },
      "sec-consistency": {
        "h2": "如何检查直角边、斜边和角是否构成有效的直角三角形",
        "blocks": [
          { "kind": "p", "text": "三个输入并非相互独立。在直角三角形中，[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]，因此 [[[\\boxed{b=c\\cos(A)}]]]。固定三个值中的任意两个，第三个就已确定。输入三个不一致的数，描述的不是公式所假设的三角形。" },
          { "kind": "h3", "text": "从两条边长检查角度" },
          { "kind": "p", "text": "当 [[b]] 和 [[c]] 已知时，角度被强制确定：[[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]。示例：[[b=4]]、[[c=5]] 得出 [[A=\\cos^{-1}(4/5)]]，[[[\\boxed{A\\approx36.87^\\circ}]]]。如果量角器或之前的计算对这些边报告了不同的角度，说明其中一个数错了。边说了算；角度跟着走。" },
          { "kind": "h3", "text": "从角度检查边长" },
          { "kind": "p", "text": "检查也可以反过来。已知 [[c=10]] 和 [[A=60^\\circ]]，相邻直角边必须是 [[b=10\\cos(60^\\circ)]]，[[[\\boxed{b=5}]]]。用同样的斜边和角度输入 [[b=8]]，描述的不是同一个直角三角形，因为 [[10\\cos(60^\\circ)]] 等于 5 而不是 8。每个角度在斜边固定时只允许一种相邻直角边长度。" },
          { "kind": "h3", "text": "输入不一致时会发生什么？" },
          { "kind": "p", "text": "两边夹角的一般公式对不一致的输入仍会返回一个数，因为它会把收到的任何东西相乘。但当 [[b\\neq c\\cos(A)]] 时，这些测量值描述的不是以 [[c]] 为斜边、[[b]] 为其相邻直角边的直角三角形。数值答案不是有效几何的证明；一致性检查才是。" },
          { "kind": "h3", "text": "基本输入条件" },
          { "kind": "p", "text": "有效的输入满足 [[c>b>0]]、[[0^\\circ<A<90^\\circ]] 和 [[b=c\\cos(A)]]。第一条保证斜边最长；第二条保证角度为锐角；第三条把三个值系成一个三角形。信任面积之前，先检查这三条。" }
        ],
        "imgAlt": "三个面板：有效 4、5、36.87 度；有效 5、10、60 度；无效 8、10、60 度",
        "figcaption": "有效输入满足 b = c cos A；第三个面板显示 10 cos 60 度 = 5 不等于 8。"
      },
      "sec-examples": {
        "h2": "用直角边和角求直角三角形面积的分步示例",
        "blocks": [
          { "kind": "p", "text": "四个经典直角三角形按递增的尺寸展示该方法。每个示例先代入正弦公式，再用两条直角边的公式验证结果。" },
          { "kind": "h3", "text": "示例 1：3-4-5 直角三角形" },
          { "kind": "p", "text": "已知 [[b=4]]、[[c=5]]、[[A=36.87^\\circ]]。步骤 1：[[K=\\frac{bc\\sin(A)}{2}]]。步骤 2：[[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]。步骤 3：[[\\sin(36.87^\\circ)\\approx0.6]]。步骤 4：[[K=\\frac{20\\times0.6}{2}]]，[[[\\boxed{K=6\\text{ square units}}]]]。验证：[[a=5\\times0.6=3]]，且 [[K=\\frac{4\\times3}{2}=6]]。" },
          { "kind": "h3", "text": "示例 2：5-12-13 直角三角形" },
          { "kind": "p", "text": "已知 [[b=12]]、[[c=13]]、[[A\\approx22.62^\\circ]]，且 [[\\sin(A)=\\frac{5}{13}]]。代入：[[K=\\frac{12\\times13\\times(5/13)}{2}]]。13 约去：[[K=\\frac{12\\times5}{2}]]，[[[\\boxed{K=30\\text{ square units}}]]]。验证：[[a=13\\times(5/13)=5]]，且 [[K=\\frac{12\\times5}{2}=30]]。" },
          { "kind": "h3", "text": "示例 3：8-15-17 直角三角形" },
          { "kind": "p", "text": "已知 [[b=15]]、[[c=17]]、[[A\\approx28.07^\\circ]]，且 [[\\sin(A)=\\frac{8}{17}]]。则 [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]]，[[[\\boxed{K=60\\text{ square units}}]]]。验证：[[a=8]]，且 [[\\frac{15\\times8}{2}=60]]。" },
          { "kind": "h3", "text": "示例 4：7-24-25 直角三角形" },
          { "kind": "p", "text": "已知 [[b=24]]、[[c=25]]、[[A\\approx16.26^\\circ]]，且 [[\\sin(A)=\\frac{7}{25}]]。则 [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]]，[[[\\boxed{K=84\\text{ square units}}]]]。验证：[[a=7]]，且 [[\\frac{24\\times7}{2}=84]]。" },
          { "kind": "h3", "text": "基础示例对比" }
        ],
        "table": {
          "headers": ["三角形类型", "已知直角边 b", "斜边 c", "角 A", "计算出的面积"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "直角边和角求直角三角形面积的实际应用",
        "blocks": [
          { "kind": "p", "text": "十二个解出的情境把公式从页面带入车间、工地和工作室。每个都命名一个直角三角形面板、截面、轮廓或简化模型，把三个计算器输入代入公式，并说明数字背后的假设。真实物体是曲面或不规则的地方，计算只覆盖建模的三角形。" },
          { "kind": "h3", "text": "示例 1：三角形玻璃窗" },
          { "kind": "p", "text": "直角三角形玻璃窗 [[a=3\\text{ m}]]、[[b=4\\text{ m}]]、[[c=5\\text{ m}]]。计算器输入：[[b=4]]、[[c=5]]、[[A\\approx36.87^\\circ]]。代入：[[K=\\frac{4\\times5\\times0.6}{2}]]，[[[\\boxed{K=6\\text{ m}^2}]]]。这是扣除窗框余量之前的平面三角形玻璃面积。" },
          { "kind": "h3", "text": "示例 2：屋顶支撑板" },
          { "kind": "p", "text": "直角三角形屋顶支撑截面 [[a=5\\text{ ft}]]、[[b=12\\text{ ft}]]、[[c=13\\text{ ft}]]。输入：[[b=12]]、[[c=13]]、[[A\\approx22.62^\\circ]]、[[\\sin(A)=\\frac{5}{13}]]。则 [[K=\\frac{12\\times13\\times(5/13)}{2}]]，[[[\\boxed{K=30\\text{ ft}^2}]]]。结果描述的是平面三角形支撑截面，不是整个屋顶。" },
          { "kind": "h3", "text": "示例 3：三角形坡道侧轮廓" },
          { "kind": "p", "text": "简化的直角三角形坡道轮廓 [[a=6\\text{ m}]]、[[b=8\\text{ m}]]、[[c=10\\text{ m}]]。输入：[[b=8]]、[[c=10]]、[[A\\approx36.87^\\circ]]。则 [[K=\\frac{8\\times10\\times0.6}{2}]]，[[[\\boxed{K=24\\text{ m}^2}]]]。这是三角形侧轮廓，不是倾斜的行走面。" },
          { "kind": "h3", "text": "示例 4：钢节点板" },
          { "kind": "p", "text": "三角形钢支撑板 [[a=8\\text{ cm}]]、[[b=15\\text{ cm}]]、[[c=17\\text{ cm}]]。输入：[[b=15]]、[[c=17]]、[[A\\approx28.07^\\circ]]、[[\\sin(A)=\\frac{8}{17}]]。则 [[K=\\frac{15\\times17\\times(8/17)}{2}]]，[[[\\boxed{K=60\\text{ cm}^2}]]]。仅凭面积无法确定结构强度或承载能力。" },
          { "kind": "h3", "text": "示例 5：三角形花园地块" },
          { "kind": "p", "text": "简化的直角三角形花园地块 [[a=7\\text{ m}]]、[[b=24\\text{ m}]]、[[c=25\\text{ m}]]。输入：[[b=24]]、[[c=25]]、[[A\\approx16.26^\\circ]]、[[\\sin(A)=\\frac{7}{25}]]。则 [[K=\\frac{24\\times25\\times(7/25)}{2}]]，[[[\\boxed{K=84\\text{ m}^2}]]]。这有助于估算种植用三角形地块的面积。" },
          { "kind": "h3", "text": "示例 6：三角形帆板" },
          { "kind": "p", "text": "直角三角形帆截面 [[a=9\\text{ ft}]]、[[b=12\\text{ ft}]]、[[c=15\\text{ ft}]]。输入：[[b=12]]、[[c=15]]、[[A\\approx36.87^\\circ]]。则 [[K=\\frac{12\\times15\\times0.6}{2}]]，[[[\\boxed{K=54\\text{ ft}^2}]]]。缝合和布料余量不计入这个平面数值。" },
          { "kind": "h3", "text": "示例 7：胶合板切割模板" },
          { "kind": "p", "text": "直角三角形胶合板模板 [[a=12\\text{ cm}]]、[[b=16\\text{ cm}]]、[[c=20\\text{ cm}]]。输入：[[b=16]]、[[c=20]]、[[A\\approx36.87^\\circ]]。则 [[K=\\frac{16\\times20\\times0.6}{2}]]，[[[\\boxed{K=96\\text{ cm}^2}]]]。面积有助于在切割损耗前估算所需的平面材料。" },
          { "kind": "h3", "text": "示例 8：三角形路标" },
          { "kind": "p", "text": "直角三角形标牌面板 [[a=20\\text{ cm}]]、[[b=21\\text{ cm}]]、[[c=29\\text{ cm}]]。输入：[[b=21]]、[[c=29]]、[[A\\approx43.60^\\circ]]、[[\\sin(A)=\\frac{20}{29}]]。则 [[K=\\frac{21\\times29\\times(20/29)}{2}]]，[[[\\boxed{K=210\\text{ cm}^2}]]]。这估算了平面标牌面的面积。" },
          { "kind": "h3", "text": "示例 9：土地测量地块" },
          { "kind": "p", "text": "直角三角形测量地块 [[a=9\\text{ m}]]、[[b=40\\text{ m}]]、[[c=41\\text{ m}]]。输入：[[b=40]]、[[c=41]]、[[A\\approx12.68^\\circ]]、[[\\sin(A)=\\frac{9}{41}]]。则 [[K=\\frac{40\\times41\\times(9/41)}{2}]]，[[[\\boxed{K=180\\text{ m}^2}]]]。结果适用于简化的直角三角形土地地块。" },
          { "kind": "h3", "text": "示例 10：三角形雨篷支架" },
          { "kind": "p", "text": "直角三角形雨篷支撑截面 [[a=15\\text{ ft}]]、[[b=20\\text{ ft}]]、[[c=25\\text{ ft}]]。输入：[[b=20]]、[[c=25]]、[[A\\approx36.87^\\circ]]。则 [[K=\\frac{20\\times25\\times0.6}{2}]]，[[[\\boxed{K=150\\text{ ft}^2}]]]。这是平面三角形截面，不是形状不规则的雨篷的全部面料。" },
          { "kind": "h3", "text": "示例 11：工业场地截面" },
          { "kind": "p", "text": "简化的直角三角形工业场地截面 [[a=11\\text{ m}]]、[[b=60\\text{ m}]]、[[c=61\\text{ m}]]。输入：[[b=60]]、[[c=61]]、[[A\\approx10.39^\\circ]]、[[\\sin(A)=\\frac{11}{61}]]。则 [[K=\\frac{60\\times61\\times(11/61)}{2}]]，[[[\\boxed{K=330\\text{ m}^2}]]]。真实的不规则场地可能需要划分成多个形状。" },
          { "kind": "h3", "text": "示例 12：仓库屋顶端截面" },
          { "kind": "p", "text": "大型直角三角形仓库屋顶端截面 [[a=13\\text{ ft}]]、[[b=84\\text{ ft}]]、[[c=85\\text{ ft}]]。输入：[[b=84]]、[[c=85]]、[[A\\approx8.80^\\circ]]、[[\\sin(A)=\\frac{13}{85}]]。则 [[K=\\frac{84\\times85\\times(13/85)}{2}]]，[[[\\boxed{K=546\\text{ ft}^2}]]]。结果估算了平面三角形端截面。" },
          { "kind": "h3", "text": "实际示例对比" }
        ],
        "table": {
          "headers": ["实际应用", "直角边 a", "已知直角边 b", "斜边 c", "角 A", "计算出的面积", "测量单位"],
          "rows": [
            ["玻璃窗", "3", "4", "5", "36.87°", "6", "m²"],
            ["屋顶支架", "5", "12", "13", "22.62°", "30", "ft²"],
            ["坡道轮廓", "6", "8", "10", "36.87°", "24", "m²"],
            ["节点板", "8", "15", "17", "28.07°", "60", "cm²"],
            ["花园地块", "7", "24", "25", "16.26°", "84", "m²"],
            ["帆板", "9", "12", "15", "36.87°", "54", "ft²"],
            ["胶合板模板", "12", "16", "20", "36.87°", "96", "cm²"],
            ["路标", "20", "21", "29", "43.60°", "210", "cm²"],
            ["测量地块", "9", "40", "41", "12.68°", "180", "m²"],
            ["雨篷支架", "15", "20", "25", "36.87°", "150", "ft²"],
            ["工业地块", "11", "60", "61", "10.39°", "330", "m²"],
            ["仓库屋顶端", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "为什么基于正弦的公式与直角边公式得出相同的面积？",
        "blocks": [
          { "kind": "p", "text": "从 [[K=\\frac{bc\\sin(A)}{2}]] 出发，并记住 [[\\sin(A)=\\frac{a}{c}]]。代入：[[K=\\frac{bc(a/c)}{2}]]。[[c]] 约去，剩下 [[[\\boxed{K=\\frac{ab}{2}}]]]。正弦公式没有发明新的面积；它用另一组已知量计算同一个面积，缺失的直角边通过正弦比值被带了进来。" },
          { "kind": "h3", "text": "正弦公式什么时候更有用？" },
          { "kind": "p", "text": "当一条直角边已测量、斜边已知、夹角可得，而第三条边从未直接测量时使用。野外测量、比例图纸和测量数据经常正好以这种组合出现。公式把这三个数一行写成面积，无需先绕路求出缺失的直角边。" },
          { "kind": "h3", "text": "直角边公式什么时候更简单？" },
          { "kind": "p", "text": "两条垂直直角边都已知时，[[K=\\frac{ab}{2}]] 更短：没有正弦，没有角度，一次乘法加一次减半。只有当缺一条直角边且角度能补上时，才用正弦版本。" },
          { "kind": "h3", "text": "数值对比" },
          { "kind": "p", "text": "在 3-4-5 三角形上，正弦法给出 [[K=\\frac{4\\times5\\times0.6}{2}=6]]，直角边法给出 [[K=\\frac{3\\times4}{2}=6]]。两条路都经过同一个几何，因此必须一致。当它们不一致时，错在输入或算术，绝不在公式。" }
        ]
      },
      "sec-angle-effect": {
        "h2": "夹角如何影响直角三角形的面积？",
        "blocks": [
          { "kind": "p", "text": "斜边固定时，角度不能自由变化：直角三角形关系把 [[b]] 和 [[A]] 系在一起。诚实地对待这个约束，就能准确看出 [[A]] 在 0 到 90 度之间移动时面积如何升降。" },
          { "kind": "h3", "text": "角 A 增大时会发生什么？" },
          { "kind": "p", "text": "[[c]] 固定时，[[b=c\\cos(A)]] 且 [[a=c\\sin(A)]]，因此 [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]。倍角恒等式给出 [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]。当 [[A]] 从下方接近 45 度时面积增大，在 45 度达到峰值，然后向 90 度下降。30° 和 60° 这样的互余角给出相同的面积，因为 [[\\sin(2A)]] 关于 45 度对称。" },
          { "kind": "h3", "text": "固定斜边的最大面积" },
          { "kind": "p", "text": "峰值出现在 [[A=45^\\circ]] 处，此时 [[\\sin(2A)=1]]：[[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]。那里 [[a=b=\\frac{c}{\\sqrt{2}}]]，因此取得最大值的三角形是等腰三角形。固定的斜边所能围成的直角三角形面积不超过其平方的四分之一，只有等腰形状能达到它。" },
          { "kind": "h3", "text": "数值示例" },
          { "kind": "p", "text": "已知 [[c=10]]，上限为 [[K_{\\max}=\\frac{10^2}{4}]]，[[[\\boxed{K_{\\max}=25}]]]。在 [[A=45^\\circ]] 时两条直角边各为 [[10/\\sqrt{2}\\approx7.07]]，且 [[\\frac{7.07\\times7.07}{2}\\approx25]]。注意 90° 不是可接受的锐角输入：它会把三角形压成一条直线。" }
        ]
      },
      "sec-alternative": {
        "h2": "能用一条直角边及其夹角计算直角三角形面积吗？",
        "blocks": [
          { "kind": "p", "text": "可以，用正切代替正弦。如果已知直角边 [[b]] 和角 [[A]]，对边直角边由 [[a=b\\tan(A)]] 得出。把它代入 [[K=\\frac{ab}{2}]]：[[K=\\frac{b(b\\tan(A))}{2}]]，于是 [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]。从另一个角看，[[b=a\\tan(B)]] 给出 [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]。这些是真正的替代方法，当斜边未知但一条直角边及其角度在手时很有用。它们是数学上的替代方案，不是上面计算器的额外模式，该计算器只用 [[b]]、[[c]] 和 [[A]] 工作。" }
        ]
      },
      "sec-units": {
        "h2": "理解面积计算中的角度单位与测量",
        "blocks": [
          { "kind": "p", "text": "面积的单位来自相乘构成它的两个长度，而角度完全不贡献单位。保持三个输入的单位兼容，是让答案诚实的原因。" },
          { "kind": "h3", "text": "度与弧度" },
          { "kind": "p", "text": "计算器要求度。用 [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]] 换算；例如 [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]。把弧度模式的角度送进度模式的输入框，会悄悄改变正弦值：[[\\sin(30^\\circ)=0.5]]，但 [[\\sin(30\\text{ radians})\\approx-0.99]]，这会毁掉面积。先换算，再输入。" },
          { "kind": "h3", "text": "为什么正弦没有单位？" },
          { "kind": "p", "text": "正弦是两个长度的比值，因此单位约去：对边除以斜边是一个纯数。答案中的平方单位完全来自 [[b]] 乘以 [[c]]。这就是公式单位记账简单的原因：把两个长度单位配对，面积单位自然跟上。" },
          { "kind": "h3", "text": "常用测量单位" },
          { "kind": "p", "text": "米给出平方米，厘米给出平方厘米，英尺给出平方英尺，英寸给出平方英寸：[[\\text{m}\\times\\text{m}=\\text{m}^2]]，同样的模式适用于每个长度单位。厘米配米这样的混合单位必须在应用公式前换算成一个单位，否则这个数没有干净的含义。" },
          { "kind": "h3", "text": "为什么过早舍入会影响结果？" },
          { "kind": "p", "text": "在中间步骤保持完整精度，只在最终答案舍入。36.87° 背后的精确角度是 36.869897°，其正弦恰好是 0.6；先把角度舍入会让正弦偏移一点点，而这一点点会通过 [[b]] 和 [[c]] 相乘传进面积。一个三角形上很小，整个项目上就明显了。" }
        ]
      },
      "sec-mistakes": {
        "h2": "用直角边和角计算直角三角形面积时的常见错误",
        "blocks": [
          { "kind": "p", "text": "本主题中几乎每个错误答案都源于标签错误的输入，而不是糟糕的算术。下面十六个错误反复出现，每个都附有原因和修正方法。" },
          { "kind": "h3", "text": "1. 把斜边与垂直直角边混淆" },
          { "kind": "p", "text": "斜边是直角对面的边，也是最长的边；直角边与直角相交。把它们调换会把错误的长度送进 [[c]]。修正：先找到直角，再取它对面的边。" },
          { "kind": "h3", "text": "2. 把角 A 与错误的直角边配对" },
          { "kind": "p", "text": "角 [[A]] 位于直角边 [[b]] 与斜边 [[c]] 之间。把它与直角边 [[a]] 配对，会打乱公式所假设的夹角关系。修正：追踪构成你输入角度的那两条边。" },
          { "kind": "h3", "text": "3. 把对边和邻边混淆" },
          { "kind": "p", "text": "对边指角对面的边；邻边指触碰该角的边，紧挨斜边。参考角改变时标签会翻转。修正：站在角 [[A]] 处，从那里给每条边命名。" },
          { "kind": "h3", "text": "4. 不换对应边就用角 B 代替角 A" },
          { "kind": "p", "text": "角 [[B]] 与边 [[a]] 和 [[c]] 配对，不是 [[b]] 和 [[c]]。保留 [[b]] 和 [[c]] 而输入 [[B]]，算的是另一个量。修正：每个角配自己的边组合，或者先把 [[B]] 换算成 [[A]]。" },
          { "kind": "h3", "text": "5. 计算器要度时用了弧度" },
          { "kind": "p", "text": "该填 36.87（度）的地方填了 0.6435（弧度），[[\\sin(A)]] 会完全变样。修正：检查计算器的单位，必要时用 [[\\times\\frac{180}{\\pi}]] 换算，再输入。" },
          { "kind": "h3", "text": "6. 忘记除以二" },
          { "kind": "p", "text": "[[b\\times c\\times\\sin(A)]] 的乘积是外包平行四边形的面积，是三角形的两倍。修正：把乘积减半；/2 是公式的一部分，不是可选项。" },
          { "kind": "h3", "text": "7. 忘记正弦函数" },
          { "kind": "p", "text": "只算 [[\\frac{bc}{2}]] 等于把 [[\\sin(A)]] 当成 1，这只在 90° 成立，而 90° 是不可能的锐角输入。修正：加上 [[\\sin(A)]]；它承载了缺失直角边的份额。" },
          { "kind": "h3", "text": "8. 输入比斜边还长的直角边" },
          { "kind": "p", "text": "没有直角边能超过斜边，因此 [[c\\leq b]] 意味着标签错了。修正：重新识别各边；最长的测量值是 [[c]]。" },
          { "kind": "h3", "text": "9. 输入 0 度的角" },
          { "kind": "p", "text": "在 0° 时 [[\\sin(A)=0]]，三角形坍缩成面积为零的直线。修正：用真正的锐角，严格介于 0° 和 90° 之间。" },
          { "kind": "h3", "text": "10. 把 90 度的角当作锐角输入" },
          { "kind": "p", "text": "90° 是直角 [[C]]，不是锐角；[[\\sin(90^\\circ)=1]] 会把公式变成 [[\\frac{bc}{2}]]，那不是这个三角形的面积。修正：输入 [[b]] 与 [[c]] 之间的锐角。" },
          { "kind": "h3", "text": "11. 混用不同的长度单位" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] 配 [[c=5\\text{ m}]] 是在乘不兼容的尺度。修正：计算前把两者换算成同一单位（400 cm = 4 m）。" },
          { "kind": "h3", "text": "12. 用线性单位报告面积" },
          { "kind": "p", "text": "6 m² 的面积不是 6 m。修正：每次都把平方单位和数字写在一起。" },
          { "kind": "h3", "text": "13. 角度舍入过早" },
          { "kind": "p", "text": "取正弦前把 36.869897° 舍入到 36.87° 会让结果轻微偏移；舍入到 37° 偏移更大。修正：保持完整精度直到最终答案。" },
          { "kind": "h3", "text": "14. 以为三个输入可以独立选取" },
          { "kind": "p", "text": "[[b]]、[[c]] 和 [[A]] 由 [[b=c\\cos(A)]] 联系在一起；三个都自由选取会过度确定三角形。修正：从另外两个推导第三个值，而不是编造。" },
          { "kind": "h3", "text": "15. 使用与输入边长不一致的角度" },
          { "kind": "p", "text": "[[b=8]]、[[c=10]]、[[A=60^\\circ]] 通不过检查，因为 [[10\\cos(60^\\circ)=5\\neq8]]。公式仍会返回一个数，但它不是这个直角三角形的面积。修正：运行 [[b=c\\cos(A)]] 检查。" },
          { "kind": "h3", "text": "16. 以为计算器的数值结果总是代表有效的直角三角形" },
          { "kind": "p", "text": "算术对输入的任何数都成功；几何不是。修正：信任答案前，先用一致性检查和独立公式验证。" },
          { "kind": "h3", "text": "错误与正确：一个具体例子" },
          { "kind": "p", "text": "用 [[b=4]]、[[c=5]]、[[A=36.87^\\circ]]。正确：[[K=\\frac{4\\times5\\times0.6}{2}=6]]。用同样的边误输入角 [[B=53.13^\\circ]]：[[K=\\frac{4\\times5\\times0.8}{2}=8]]。角 [[B]] 不是 [[b]] 与 [[c]] 之间的夹角；它正确的边配对是 [[a]] 和 [[c]]。错误在算术中看不见，在几何中一目了然。" }
        ]
      },
      "sec-verify": {
        "h2": "如何检查直角三角形面积是否正确",
        "blocks": [
          { "kind": "p", "text": "七个独立检查，都在 3-4-5 三角形上演示（[[a=3]]、[[b=4]]、[[c=5]]、[[A\\approx36.87^\\circ]]）。不同路径之间的一致是答案正确的最强证据。" },
          { "kind": "h3", "text": "方法 1：检查主公式" },
          { "kind": "p", "text": "重新计算 [[K=\\frac{bc\\sin(A)}{2}]]：[[\\frac{4\\times5\\times0.6}{2}=6]]。第二遍能抓住笔误和输错的角度。" },
          { "kind": "h3", "text": "方法 2：检查余弦关系" },
          { "kind": "p", "text": "确认 [[b=c\\cos(A)]]：[[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]。不匹配意味着角度和边属于不同的三角形。" },
          { "kind": "h3", "text": "方法 3：计算缺失的直角边" },
          { "kind": "p", "text": "确认 [[a=c\\sin(A)]]：[[5\\times0.6=3]]。这检查了送入面积公式的正弦值。" },
          { "kind": "h3", "text": "方法 4：检查勾股定理" },
          { "kind": "p", "text": "确认 [[a^2+b^2=c^2]]：[[9+16=25]]。这里失败意味着边的识别错了。" },
          { "kind": "h3", "text": "方法 5：用两条直角边验证" },
          { "kind": "p", "text": "确认 [[K=\\frac{ab}{2}]]：[[\\frac{3\\times4}{2}=6]]。两种方法，一个三角形，一个答案。" },
          { "kind": "h3", "text": "方法 6：检查互余角" },
          { "kind": "p", "text": "确认 [[A+B=90^\\circ]]：[[36.87^\\circ+53.13^\\circ=90^\\circ]]。这能抓住在错误的角上测量的角度。" },
          { "kind": "h3", "text": "方法 7：检查最大面积" },
          { "kind": "p", "text": "确认 [[K\\leq\\frac{c^2}{4}]]：[[6\\leq\\frac{25}{4}=6.25]]。超过上限的面积对给定的斜边是不可能的。" }
        ]
      },
      "sec-applications": {
        "h2": "实践中的直角边和角求直角三角形面积",
        "blocks": [
          { "kind": "p", "text": "同样的三个输入出现在从不提三角学的地方。玻璃工测量窗户的直角边和对角线，从窗框上读出角度；屋顶工从椽子长度知道支撑截面的斜边，从坡度知道角度。每种情况下，缺失的垂直边都是卷尺难以够到的，而斜边和角度就在手边。正弦公式正是为这种不对称而存在：它把可及的测量转换成够不到的高度，再转换成面积。" },
          { "kind": "p", "text": "下面四个面板在不同尺度上展示这个模式。玻璃窗（6 m²）和坡道轮廓（24 m²）用米尺度的 3-4-5 和 6-8-10 几何；屋顶支架（30 ft²）用 5-12-13 三角形；测量地块（84 m²）用 7-24-25。每个面板都标注了相邻直角边、斜边、夹角和结果面积，因此从测量到答案的路径始终可见。" }
        ],
        "imgAlt": "四个面板：玻璃窗 6 m2、屋顶板 30 ft2、坡道轮廓 24 m2、测量地块 84 m2",
        "figcaption": "四个实际用途：窗户、屋顶支架、坡道轮廓和测量地块及其面积。"
      },
      "sec-related": {
        "h2": "探索相关的直角三角形计算器",
        "blocks": [
          { "kind": "p", "text": "不同的测量需要不同的计算器。" }
        ]
      },
      "sec-faq": {
        "h2": "常见问题",
        "blocks": [
          { "kind": "p", "text": "以下是关于用直角边和角求直角三角形面积的最常见问题的答案。" }
        ]
      },
      "sec-conclusion": {
        "h2": "三个输入承载整个面积",
        "blocks": [
          { "kind": "p", "text": "一条直角边、斜边和它们之间的夹角原来就足够了。正弦比值重建缺失的直角边，减半把外包矩形变成三角形，一致性关系让每个输入都能对照其他输入检查。输入准确时，方法中没有任何近似。" },
          { "kind": "p", "text": "工作习惯很简单：从角 A 出发给边贴标签，保持单位一致，确认 b = c cos(A)，并用直角边公式验证答案。有了这些习惯，K = bc sin(A)/2 和几何中任何面积计算一样可靠。" }
        ]
      }
    }
  }
};
