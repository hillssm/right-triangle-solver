// fortyFiveGuideTranslations.btr.ts: 45-45-90 Triangle
// Guide (Page 40 of 45) translation.
export const FORTYFIVE_B6_TR = {
  "tr": {
      "meta": {
        "title": "45-45-90 Üçgen Hesaplayıcı - Hipotenüs, Dik Kenar, Alan, Çevre",
        "description": "45-45-90 üçgeninde bilinen bir dik kenardan hipotenüsü, eksik dik kenarı, alanı ve çevreyi sabit 1:1:√2 oranı ve tam köklü cevaplarla bulun.",
        "primaryKeyword": "45-45-90 Triangle Calculator",
        "slug": "45-45-90-triangle-calculator",
      },
      "tocHeading": "Rehber İçeriği",
      "tocItems": {
        "sec-intro": "45-45-90 Üçgen Hesaplayıcı",
        "sec-calculate": "Hipotenüs, Dik Kenar, Alan veya Çevre Hesaplama",
        "sec-what": "45-45-90 Üçgeni Nedir?",
        "sec-isosceles": "Neden İkizkenar Dik Üçgen Denir?",
        "sec-legs": "İki Eşit Dik Kenar ve Hipotenüsü Anlama",
        "sec-ratio": "45-45-90 Üçgeninde Kenar Oranı",
        "sec-why-sqrt2": "Karekök 2 Neden Ortaya Çıkar?",
        "sec-hypotenuse": "Bir Dik Kenardan Hipotenüsü Bulma Formülü",
        "sec-leg-hyp": "Hipotenüsten Bir Dik Kenarı Bulma Formülü",
        "sec-area": "45-45-90 Üçgeninin Alanı Nasıl Hesaplanır?",
        "sec-perimeter": "45-45-90 Üçgeninin Çevresi Nasıl Hesaplanır?",
        "sec-square": "Bir Karenin Köşegeni Nasıl 45-45-90 Üçgeni Oluşturur?",
        "sec-step-example": "45-45-90 Üçgeni Çözmenin Adım Adım Örneği",
        "sec-examples": "45-45-90 Üçgeni Hesaplamalarına İlişkin Çözümlü Örnekler",
        "sec-exact": "Tam Cevaplar ve Ondalık Yaklaşık Değerler",
        "sec-verify": "45-45-90 Üçgeni Hesaplamalarınızı Nasıl Doğrularsınız?",
        "sec-properties": "45-45-90 Üçgenlerinin Önemli Özellikleri",
        "sec-vs-3060": "45-45-90 ve 30-60-90 Üçgenleri Arasındaki Fark",
        "sec-mistakes": "45-45-90 Üçgenleri Çözerken Yapılan Yaygın Hatalar",
        "sec-applications": "45-45-90 Üçgenlerinin Pratik Uygulamaları",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları",
        "sec-faq": "Sıkça Sorulan Sorular",
      },
      "sections": {
        "sec-intro": {
          "h2": "45-45-90 Üçgen Hesaplayıcı",
          "blocks": [
            {
              "kind": "p",
              "text": "Bir 45-45-90 üçgeninde bilinen bir kenardan hipotenüsü, eksik dik kenarı, alanı ve çevreyi bulun.",
            },
            {
              "kind": "p",
              "text": "45-45-90 üçgeni, üç açısı 45°, 45° ve 90° olan bir dik üçgendir. İkizkenar dik üçgen olarak adlandırılır, çünkü iki dik kenarı eşit uzunluktadır; özel dik üçgen olarak adlandırılır, çünkü üçgen ne kadar büyük ya da küçük olursa olsun kenarları her zaman aynı sabit oranı izler. Bu sayfadaki 45-45-90 üçgen hesaplayıcı, girdiğiniz tek bir kenar uzunluğundan hipotenüsü, eksik dik kenarı, alanı ve çevreyi bulmak için bu oranı kullanır.",
            },
            {
              "kind": "p",
              "text": "ABC üçgeninde A açısı 45°, B açısı 45° ve C açısı 90°dir. BC kenarı birinci dik kenar [[a]], AC kenarı ikinci dik kenar [[b]] ve AB kenarı hipotenüs [[c]] dir. İki dar açı eşit olduğundan iki dik kenar da eşittir, [[a = b]], ve üç kenar her zaman [[a : b : c = 1 : 1 : \\sqrt{2}]] oranını sağlar; bu da [[c = a\\sqrt{2}]] anlamına gelir.",
            },
            {
              "kind": "p",
              "text": "[[a = 5]] cm ise ikinci dik kenar [[b = 5]] cm, hipotenüs [[c = 5\\sqrt{2} \\approx 7.071]] cm ve alan [[A = \\frac{25}{2} = 12.5]] cm² olur. Hesaplayıcı aynı dik kenardan çevreyi de bulabilir, bu nedenle tek bir ölçüm bütün üçgeni tanımlamaya yeter. Aşağıdaki bölümler oranı, dört hesaplayıcı modunu ve formülleri açıklar ve her adımda çözümlü örnekler verir.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Hipotenüs, Dik Kenar, Alan veya Çevre Hesaplama",
          "blocks": [
            {
              "kind": "p",
              "text": "Dört mod, bilinen bir kenardan başlamanın her yolunu kapsar.",
            },
            {
              "kind": "p",
              "text": "Bu sayfadaki hesaplayıcının dört modu vardır; her biri bulabileceği bir ölçüme karşılık gelir. Bildiğiniz kenara ve ihtiyacınız olan ölçüme uyan modu seçin. Her mod yalnızca bir girdi ister, çünkü sabit oran geri kalan her şeyi doldurur. Aşağıdaki tabloda dört modun her birinin ihtiyaç duyduğu girdi ve döndürdüğü sonuç listelenmiştir.",
            },
            {
              "kind": "p",
              "text": "Bir modu kullanmak için önce hangi kenarı bildiğinizi belirleyin. 45° açının karşısındaki kenar bir dik kenardır ve dik kenarlar eşit olduğundan her iki dik kenar da [[a]] olarak kullanılabilir. 90° açının karşısındaki kenar hipotenüs [[c]] dir. Bu ölçümü pozitif bir sayı olarak girin, bir birim seçin ve Hesapla düğmesine tıklayın. Sonuç, yalnızca cevabı değil, formülü ve yerine koyma işlemini de gösteren adım adım çözümle birlikte görünür. Yeni bir probleme başlamadan önce alanları temizlemek için Sıfırla seçeneğini kullanın.",
            },
            {
              "kind": "p",
              "text": "Farklı modlar farklı formüller gerektirir, çünkü her biri farklı bir bilinen kenardan başlar. Bir dik kenardan hipotenüsü bulmak √2 ile çarpmayı gerektirirken, hipotenüsten bir dik kenarı bulmak √2 ye bölmeyi gerektirir. Alan modu dik kenarın karesini alıp sonucu ikiye böler, çevre modu ise üç kenarı da toplar. Alan veya çevre modlarını kullanmadan önce eksik kenarları kendiniz bulmanıza gerek yoktur, çünkü hesaplayıcı onları önce kendi içinde bulur.",
            },
            {
              "kind": "p",
              "text": "Dört formül şunlardır: hipotenüs için [[c = a\\sqrt{2}]], bir dik kenar için [[a = \\frac{c}{\\sqrt{2}}]], alan için [[A = \\frac{a^2}{2}]] ve çevre için [[P = a(2 + \\sqrt{2})]]. Bir hesaplama boyunca birimleri aynı tutun: santimetre olarak girilen bir dik kenar, santimetre cinsinden bir hipotenüs ve santimetrekare cinsinden bir alan verir. Hesaplayıcı çevrel çember yarıçapını, iç teğet çember yarıçapını ya da 45-45-90 olmayan üçgenlere ait ölçümleri bulmaz; bu nedenle kullanmadan önce açıları doğrulayın.",
            },
          ],
          "table": {
            "headers": [
              "Hesaplayıcı modu",
              "Gerekli girdi",
              "Sonuç",
            ],
            "rows": [
              [
                "Dik kenardan hipotenüs bulma",
                "Dik kenar a",
                "Hipotenüs c",
              ],
              [
                "Hipotenüsten dik kenar bulma",
                "Hipotenüs c",
                "Dik kenar a",
              ],
              [
                "Dik kenardan alan bulma",
                "Dik kenar a",
                "Alan A",
              ],
              [
                "Dik kenardan çevre bulma",
                "Dik kenar a",
                "Çevre P",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "45-45-90 Üçgeni Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "45-45-90 üçgeni adını üç açısından alır.",
            },
            {
              "kind": "p",
              "text": "Bu bir dik üçgendir; yani açılarından biri tam olarak 90°dir. Diğer iki açının her ikisi de 45°dir ve adı üç açıyı da sırasıyla listeler. Dik açı sabit ve diğer iki açı da sabit olduğundan üçgenin şekli tam olarak belirlenmiştir: her 45-45-90 üçgeni aynı şekle sahiptir ve bu tür iki üçgen yalnızca büyüklük bakımından farklılık gösterir.",
            },
            {
              "kind": "p",
              "text": "Kenar uzunlukları sabit bir oran izlediği için özel dik üçgen olarak adlandırılır. Çoğu dik üçgende bir kenarı bilmek diğerleri hakkında hiçbir şey söylemez. Bir 45-45-90 üçgeninde bir kenarı bilmek hepsini bilmek demektir, çünkü [[1 : 1 : \\sqrt{2}]] oranı üç kenarı birbirine bağlar. Bu nedenle hesaplayıcı tek bir girdiden hipotenüsü, alanı ve çevreyi bulabilir.",
            },
            {
              "kind": "p",
              "text": "Üç açı, her üçgende olduğu gibi, toplam 180° eder:",
            },
            {
              "kind": "p",
              "text": "[[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenüs en uzun kenardır, çünkü en büyük açının, yani 90° açının karşısında yer alır. İki dik kenar eşittir, çünkü eşit açıların karşısında yer alırlar. Üçgen birkaç milimetre kadar küçük ya da bir yapı arsası kadar büyük olabilir; kenarlar birlikte büyürken açılar aynı kalır. Oran da aynı kalır; bu nedenle dik kenarı 5 cm olan bir üçgen ile dik kenarı 5 m olan bir üçgen farklı büyüklüklerde aynı şekildir.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-main.svg",
            "alt": "Açıları 45, 45 ve 90 derece olan, eşit dik kenarları a ve b ile hipotenüsü c ile etiketlenmiş ABC 45-45-90 üçgeni",
            "caption": "ABC Üçgeni: açıları 45°, 45° ve 90°, eşit dik kenarları a ve b ve hipotenüsü c.",
          },
        },
        "sec-isosceles": {
          "h2": "Neden İkizkenar Dik Üçgen Denir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Adın iki bölümü vardır ve her bölüm bir gerçeği anlatır.",
            },
            {
              "kind": "p",
              "text": "İkizkenar, iki kenarı eşit olan üçgen demektir. Bir 45-45-90 üçgeninde eşit olan iki kenar dik kenarlar [[a]] ve [[b]] dir. Dik üçgen ise bir açısı 90° olan üçgen demektir. İki kelimeyi bir araya getirince ad, üçgenin tam olarak ne olduğunu söyler: iki kenarı eşit olan bir dik üçgen.",
            },
            {
              "kind": "p",
              "text": "Eşit dik kenarlar eşit açılardan kaynaklanır. Herhangi bir üçgende eşit açılar eşit kenarların karşısında yer alır. Burada iki dar açının her ikisi de 45° olduğundan, karşılarındaki kenarlar eşit olmalıdır. A açısının karşısındaki kenar [[a]], B açısının karşısındaki kenar ise [[b]] dir; bu nedenle [[a = b]]. Bu tek bir çizimin tesadüfü değildir: açılar her zaman aynı olduğundan her 45-45-90 üçgeni için geçerlidir.",
            },
            {
              "kind": "p",
              "text": "Üçgen, dik açı köşesinden hipotenüse çizilen yükseklik etrafında simetriktir. Bu yükseklik hipotenüsü orta noktasında ve dik açıyla keser ve büyük üçgeni birbirine eş iki küçük üçgene böler. Küçük üçgenlerin her birinin açıları 45°, 45° ve 90° olduğundan her biri yarı ölçekte kendisi de bir 45-45-90 üçgenidir. Bu simetri, iki dik kenarın neden eşleşmek zorunda olduğunu görmenin bir başka yoludur: yükseklik boyunca yapılan bir katlama bir dik kenarı diğerinin üzerine taşır.",
            },
            {
              "kind": "p",
              "text": "Dik açı köşesinden hipotenüse çizilen yüksekliğin uzunluğu da kullanışlıdır: hipotenüsün yarısına eşittir. Hipotenüsü [[c]] olan bir üçgende yükseklik [[\\frac{c}{2}]] dir. Bu bilgi, bir problem üçgenin hipotenüsten ölçülen yüksekliğini sorduğunda işe yarar ve şeklin simetrisinin bir başka sonucudur.",
            },
          ],
        },
        "sec-legs": {
          "h2": "İki Eşit Dik Kenar ve Hipotenüsü Anlama",
          "blocks": [
            {
              "kind": "p",
              "text": "İki dik kenar dik açıda buluşur ve hipotenüs onun karşısında yer alır.",
            },
            {
              "kind": "p",
              "text": "Dik kenar [[a]], ABC üçgeninde BC kenarı olan bir dik kenardır. Dik kenar [[b]] ise AC kenarı olan diğer dik kenardır. İki dik kenar C köşesinde buluşur ve burada 90° açı oluşturur; bu nedenle birbirlerine diktirler. Herhangi bir dik kenar üçgenin tabanı olarak kullanılabilir ve diğer dik kenar yükseklik görevi görür; bu nedenle alan formülü iki dik kenarı doğrudan kullanabilir.",
            },
            {
              "kind": "p",
              "text": "Hipotenüs [[c]], 90° açının karşısındaki AB kenarıdır. En büyük açının her zaman en uzun kenarın karşısında yer alması nedeniyle üçgenin en uzun kenarıdır. Ayrıca dik kenar olmayan tek kenardır; bu nedenle hiçbir dik kenarla karıştırılmamalıdır. İki dik kenar eşittir, ancak hipotenüs onlara eşit değildir: her iki dik kenarın √2 katıdır, yaklaşık 1.414 katı uzunluktadır.",
            },
            {
              "kind": "p",
              "text": "Dik kenarlar eşit olduğundan, hesaplayıcıda bilinen dik kenar olarak her ikisi de kullanılabilir. Bir problem [[a]] dik kenarı yerine [[b]] dik kenarını veriyorsa, bu değeri dik kenar olarak girin: [[a = b]] olduğundan sonuç aynıdır. Aynı serbestlik hipotenüs için geçerli değildir; hipotenüs kendi modunu gerektirir. Herhangi bir çizimde hipotenüsü belirlemek kolaydır: dik açıyı gösteren küçük kare işaretini bulun ve onun karşısındaki kenar hipotenüstür.",
            },
          ],
          "table": {
            "headers": [
              "Kenar",
              "Karşısındaki açı",
              "Uzunluk",
            ],
            "rows": [
              [
                "Dik kenar a (BC)",
                "45°",
                "a",
              ],
              [
                "Dik kenar b (AC)",
                "45°",
                "a, a dik kenarına eşit",
              ],
              [
                "Hipotenüs c (AB)",
                "90°",
                "a√2, en uzun kenar",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "45-45-90 Üçgeninde Kenar Oranı",
          "blocks": [
            {
              "kind": "p",
              "text": "1:1:√2 oranı her 45-45-90 üçgenini belirler.",
            },
            {
              "kind": "p",
              "text": "45-45-90 üçgeninin kenar oranı şöyledir:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : 1 : \\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Oranın her bölümü bir kenarı anlatır. Birinci dik kenar bir birimi, ikinci dik kenar da bir birimi temsil eder ve hipotenüs √2 birimi temsil eder. Dik kenar [[a]] ile yazıldığında üç kenar [[a = a]], [[b = a]] ve [[c = a\\sqrt{2}]] olur. Dik kenar 1 cm ise diğer dik kenar 1 cm ve hipotenüs √2 cm olur. Dik kenar 10 cm ise diğer dik kenar 10 cm ve hipotenüs [[10\\sqrt{2}]] cm olur.",
            },
            {
              "kind": "p",
              "text": "Oran, üçgenin büyüklüğünden bağımsız olarak aynı kalır, çünkü tüm 45-45-90 üçgenleri benzerdir. Bir üçgeni büyütmek ya da küçültmek her kenarı aynı katsayıyla çarpar; bu nedenle kenarlar arasındaki oranlar değişmez. [[a = 4]] cm örneğini kullanın: ikinci dik kenar [[b = 4]] cm ve hipotenüs [[c = 4\\sqrt{2} \\approx 5.657]] cm olur; [[4 : 4 : 5.657]] oranı [[1 : 1 : \\sqrt{2}]] oranıyla aynıdır.",
            },
            {
              "kind": "p",
              "text": "√2 değeri yaklaşık 1.41421356 dır. İrrasyonel bir sayıdır; bu nedenle ondalık açılımı hiçbir zaman bitmez ve hiçbir zaman tekrarlanmaz ve hiçbir ondalık sayı ona tam olarak eşit değildir. Mümkün olduğunca tam köklü biçimi koruyun: [[4\\sqrt{2}]] cm yazmak tamdır, oysa 5.657 cm yuvarlanmış bir yaklaşımdır. Soru tam bir değer istediğinde çözümünüzde ve son cevabınızda tam biçimi kullanın; ondalık sayıyı yalnızca yaklaşık bir cevap gerektiğinde verin.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-ratio.svg",
            "alt": "İki eşit dik kenarı ve hipotenüsü 1 e 1 e 2 nin karekökü oranında karşılaştıran üç çubuk",
            "caption": "Sabit 1:1:√2 oranı, iki eşit dik kenarı hipotenüsle karşılaştırır.",
          },
        },
        "sec-why-sqrt2": {
          "h2": "Karekök 2 Neden Ortaya Çıkar?",
          "blocks": [
            {
              "kind": "p",
              "text": "2 nin karekökü doğrudan Pisagor teoreminden gelir.",
            },
            {
              "kind": "p",
              "text": "Eşit dik kenarlardan, [[a = b]], başlayın ve her dik üçgen için geçerli olan Pisagor teoremini uygulayın:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Eşit dik kenarları yerine koyun; [[b]] yerine [[a]] yazın:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "İki özdeş terimi birleştirin:",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Her iki tarafın pozitif karekökünü alın. Kenar uzunlukları pozitiftir, bu nedenle negatif kök atılır:",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "√2 nin ortaya çıkmasının bütün nedeni budur: iki eşit kare toplanınca bir karenin iki katı olur ve 2 nin karekökü, bu iki katına çıkmayı geri alan sayıdır. Bu özel bir ilişkidir, yaklaşık bir kestirme yol değildir. Eşit dik kenarlar ile Pisagor teoreminden çıkar ve istisnasız her 45-45-90 üçgeni için geçerlidir.",
            },
            {
              "kind": "p",
              "text": "Sayısal bir kontrol için [[a = 5]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{5^2 + 5^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{50}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "√50 den [[5\\sqrt{2}]] ye geçiş işe yarar, çünkü [[50 = 25 \\times 2]] dir ve 25 in karekökü 5 tir. Köklü ifadeyi bu şekilde sadeleştirmek cevabı tam tutar ve örüntüyü görünür kılar: dik kenar uzunluğu ne olursa olsun hipotenüs her zaman dik kenarın √2 katıdır.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-pythagoras.svg",
            "alt": "a kare artı a kare eşittir c kare ifadesini gösteren ve c eşittir a çarpı 2 nin karekökü sonucuna ulaşan Pisagor çıkarımı",
            "caption": "a² + a² = c² olduğundan hipotenüs a√2 olmak zorundadır.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Bir Dik Kenardan Hipotenüsü Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenüsü bulmak için her iki dik kenardan birini √2 ile çarpın.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[c]] hipotenüs ve [[a]] her iki dik kenardan biridir. Formül, kenar oranının doğrudan okunuşudur: hipotenüs, her 1 birim dik kenar için √2 birimi temsil eder; bu nedenle hipotenüs, dik kenarın √2 katıdır. Çarpma gereklidir, çünkü oran bir ölçekleme ilişkisidir ve √2 ortaya çıkar, çünkü Pisagor hipotenüsün bir dik kenardan bu kadar uzun olmasını zorunlu kılar.",
            },
            {
              "kind": "p",
              "text": "[[a = 5]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Sonuç, olması gerektiği gibi, her iki dik kenardan da uzundur: √2 yaklaşık 1.414 olduğundan onunla çarpmak uzunluğu artırır. Tam cevap [[5\\sqrt{2}]] cm dir ve 7.071 cm ondalık yaklaşık değerdir. Soru tam biçim istediğinde tam biçimi koruyun ve ondalık sayıyı yalnızca çözümünüzün sonunda yuvarlayın, ortasında asla yuvarlamayın.",
            },
            {
              "kind": "p",
              "text": "Bilinen kenar bir dik kenar ve bilinmeyen hipotenüs olduğunda bu modu kullanın. Dik kenarlar eşit olduğundan problemin hangi dik kenarı verdiği önemli değildir: onu [[a]] olarak girin ve formül aynı hipotenüsü verir. Hızlı bir mantık kontrolü yardımcı olur: hipotenüs, dik kenarın yaklaşık 1.414 katı çıkmalıdır. Cevabınız dik kenarın iki katı çıkıyorsa ya da dik kenardan yalnızca biraz uzunsa yanlış çarpanı kullanmışsınızdır.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-hypotenuse.svg",
            "alt": "Dik kenarı 5 cm ve hipotenüsü 5 çarpı 2 nin karekökü, yaklaşık 7.071 cm olarak etiketlenmiş 45-45-90 üçgeni",
            "caption": "Bir dik kenardan hipotenüs: a = 5 cm, c = 5√2 ≈ 7.071 cm verir.",
          },
        },
        "sec-leg-hyp": {
          "h2": "Hipotenüsten Bir Dik Kenarı Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Bir dik kenarı bulmak için hipotenüsü √2 ye bölün.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[a]] her iki dik kenardan biridir ve [[c]] hipotenüstür. Bu formül, [[c = a\\sqrt{2}]] ifadesinin yeniden düzenlenmesinden gelir: her iki tarafı √2 ye bölmek [[a]] yı yalnız bırakır. √2 ye bölmek, ilk çarpmayı tersine çevirir; bu nedenle ilk formülün yaptığını tam olarak geri alır. Diğer dik kenar aynı uzunluktadır, bu nedenle tek bir hesap iki dik kenarı da birden verir.",
            },
            {
              "kind": "p",
              "text": "Rasyonelleştirilmiş biçim genellikle daha kolay kullanılır:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Bu biçim, [[\\frac{c}{\\sqrt{2}}]] ifadesinin payını ve paydasını √2 ile çarpmaktan gelir. Payda [[\\sqrt{2} \\times \\sqrt{2} = 2]] olur ve pay [[c\\sqrt{2}]] olur. İki biçim de aynı değeri verir, ancak rasyonelleştirilmiş biçimde paydada karekök yoktur; sınav cevaplarının beklediği biçim budur.",
            },
            {
              "kind": "p",
              "text": "[[c = 10]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{10}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Her iki dik kenar da [[5\\sqrt{2}]] cm, yani yaklaşık 7.071 cm dir. Dik kenar, olması gerektiği gibi, hipotenüsten kısadır, çünkü 1 den büyük bir sayıya bölmek değeri küçültür. Cevabınız hipotenüsten uzun çıkıyorsa, bölmek yerine çarpmışsınızdır ya da yanlış sayıya bölmüşsünüzdür.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-leg.svg",
            "alt": "Hipotenüsü 10 cm ve her dik kenarı 5 çarpı 2 nin karekökü, yaklaşık 7.071 cm olarak etiketlenmiş 45-45-90 üçgeni",
            "caption": "Hipotenüsten dik kenar: c = 10 cm, a = b = 5√2 ≈ 7.071 cm verir.",
          },
        },
        "sec-area": {
          "h2": "45-45-90 Üçgeninin Alanı Nasıl Hesaplanır?",
          "blocks": [
            {
              "kind": "p",
              "text": "Alan için yalnızca bir dik kenar yeterlidir, çünkü dik kenarlar eşittir.",
            },
            {
              "kind": "p",
              "text": "Herhangi bir dik üçgenin alanı, iki dik kenarının çarpımının yarısıdır, çünkü dik kenarlar taban ve dik yükseklik görevi görür:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[a = b]] olduğundan, yalnızca bir dik kenardan alanı bulmak için yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "İkiye bölmek gereklidir, çünkü bir üçgen, iki dik kenarının oluşturduğu dikdörtgenin yarısını kaplar. Son alan santimetrekare gibi kare birimlerle ifade edilir, çünkü alan uzunluğu değil yüzeyi ölçer. Kenarı [[a]] olan bir karenin alanı [[a^2]] dir ve üçgen bu karenin tam yarısıdır; bu da formülün neden [[\\frac{a^2}{2}]] olduğunu görmenin bir başka yoludur.",
            },
            {
              "kind": "p",
              "text": "[[a = 6]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{36}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcının alan modu dik kenarı kabul eder ve alanı doğrudan hesaplar; bu nedenle yalnızca [[a]] yı girersiniz. Dik kenar yerine hipotenüsü biliyorsanız önce [[a = \\frac{c}{\\sqrt{2}}]] ile dik kenarı bulun, sonra [[A = \\frac{a^2}{2}]] kullanın. Yalnızca hipotenüsten giden bir kestirme yol da vardır: [[A = \\frac{c^2}{4}]]; bu da aynı sonucu verir. [[c = 10]] cm için [[A = \\frac{100}{4} = 25]] cm² olur.",
            },
            {
              "kind": "p",
              "text": "Alan, dik kenarın karesiyle büyür; bu nedenle dik kenarı iki katına çıkarmak alanı dört katına çıkarır. [[a = 12]] cm olan bir üçgen, [[a = 6]] cm olan üçgenin dört katı alana sahiptir: 18 cm² yerine 72 cm², iki katı değil. Bu kare ilişkisini unutmak kolaydır; bu nedenle bir problem üçgeni büyütüp küçülttüğünde her zaman bunu kontrol edin.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-area-perimeter.svg",
            "alt": "Dik kenarı 6 cm, hipotenüsü 6 çarpı 2 nin karekökü cm, alanı 18 santimetrekare ve çevresi yaklaşık 20.485 cm olan 45-45-90 üçgeni",
            "caption": "Dik kenardan alan ve çevre: a = 6 cm, A = 18 cm² ve P ≈ 20.485 cm verir.",
          },
        },
        "sec-perimeter": {
          "h2": "45-45-90 Üçgeninin Çevresi Nasıl Hesaplanır?",
          "blocks": [
            {
              "kind": "p",
              "text": "Üç kenarı da toplayın, sonra dik kenarı çarpan olarak dışarı alın.",
            },
            {
              "kind": "p",
              "text": "Çevre, üçgenin etrafındaki toplam uzunluktur:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "[[a = b]] ve [[c = a\\sqrt{2}]] olduğundan bu ilişkileri yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[P = 2a + a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sadeleştirilmiş biçimi bulmak için [[a]] yı çarpan olarak dışarı alın:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Üç kenar uzunluğunun da dahil edilmesi gerekir, çünkü çevre üçgenin bütün sınırını izler: bir dik kenardan aşağı, diğer dik kenardan karşıya ve hipotenüs boyunca geri. Herhangi bir kenarı dışarıda bırakmak çevre olmayan daha kısa bir mesafe verir. Çevre doğrusal bir ölçüdür, alan ölçüsü değildir; bu nedenle cevap santimetre gibi sade birimlerle verilir, asla santimetrekare ile verilmez.",
            },
            {
              "kind": "p",
              "text": "[[a = 5]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tam biçim [[10 + 5\\sqrt{2}]] cm dir ve 17.071 cm ondalık biçimdir. Hesaplayıcının çevre modu dik kenarı kabul eder ve üç kenarı kendi içinde toplar. Yalnızca hipotenüsten giden bir kestirme yol da vardır: [[P = c(1 + \\sqrt{2})]]. [[c = 10]] cm için bu [[P = 10(1 + \\sqrt{2}) \\approx 24.142]] cm verir. Çevre dik kenarla doğru orantılı büyür; bu nedenle dik kenarı iki katına çıkarmak çevreyi iki katına çıkarır.",
            },
          ],
        },
        "sec-square": {
          "h2": "Bir Karenin Köşegeni Nasıl 45-45-90 Üçgeni Oluşturur?",
          "blocks": [
            {
              "kind": "p",
              "text": "Bir köşegen bir kareyi iki özdeş 45-45-90 üçgenine böler.",
            },
            {
              "kind": "p",
              "text": "Bir karenin dört kenarı eşittir ve dört köşesi 90°dir. Bir köşeden karşı köşeye bir köşegen çizin; kare iki üçgene bölünür. Her üçgenin iki kenarı karenin kenarlarıdır; bu nedenle bu iki kenar eşittir ve aralarındaki açı karenin bir köşesidir, yani 90°dir. Köşegen üçüncü kenardır ve bu dik açının karşısındadır; bu nedenle hipotenüstür.",
            },
            {
              "kind": "p",
              "text": "Köşegen, geçtiği iki köşe açısını da ikiye böler. Karenin her köşesi 90°dir ve köşegen onu iki 45° açıya böler. Bu, her üçgene 45°, 45° ve 90° açıları verir; bu da tam olarak bir 45-45-90 üçgenidir. İki üçgen eştir: aynı kenar uzunluklarına ve aynı açılara sahiptirler, çünkü köşegeni paylaşırlar ve her biri aynı karenin iki kenarını alır.",
            },
            {
              "kind": "p",
              "text": "Kenar uzunluğu [[a]] olan bir kare kullanın. Köşegen [[d]], üçgenin hipotenüsüdür; bu nedenle Pisagor teoremi şunu verir:",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = a^2 + a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = 2a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Kenarı 8 cm olan bir kare kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[d = 8\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[d \\approx 11.314 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Kare köşegeni hesaplamalarının her zaman aynı √2 ilişkisini kullanmasının nedeni budur. Bir karenin köşegenine ihtiyacınız olduğunda kenarı √2 ile çarpın; köşegeni bilip kenara ihtiyacınız olduğunda köşegeni √2 ye bölün. Aynı kural kare karolar, kare resim çerçeveleri, kare arsalar ve diğer her kare şekil için geçerlidir, çünkü her kare aynı şekilde bölünür.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-square-diagonal.svg",
            "alt": "Kenarı 8 cm olan ve bir köşegenle iki eş 45-45-90 üçgenine bölünmüş kare; köşegen yaklaşık 11.314 cm",
            "caption": "Kenarı 8 cm olan bir karenin köşegeni d = 8√2 ≈ 11.314 cm dir.",
          },
        },
        "sec-step-example": {
          "h2": "45-45-90 Üçgeni Çözmenin Adım Adım Örneği",
          "blocks": [
            {
              "kind": "p",
              "text": "Tek bir üçgen, a = 5 cm, baştan sona adım adım çözülmüş.",
            },
            {
              "kind": "p",
              "text": "[[a = 5]] cm dik kenarıyla başlayın ve üçgenin diğer her ölçümünü, her seferinde bir formül kullanarak bulun. Her adım yukarıdaki bölümlerden bir formül kullanır ve sondaki özet tablo sonuçları toplar.",
            },
            {
              "kind": "steps",
              "steps": [
                "İkinci dik kenarı bulun: dik kenarlar eşittir; bu nedenle [[b = 5]] cm.",
                "Hipotenüsü bulun: [[c = a\\sqrt{2} = 5\\sqrt{2} \\approx 7.071]] cm.",
                "Alanı bulun: [[A = \\frac{a^2}{2} = \\frac{25}{2} = 12.5]] santimetrekare.",
                "Çevreyi bulun: [[P = a + b + c = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2} \\approx 17.071]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Dört ölçüm de aynı üçgeni anlatır. [[5]], [[5]] ve [[7.071]] kenarları [[1 : 1 : \\sqrt{2}]] oranını ve Pisagor teoremini sağlar: [[5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2]]. Alan ve çevre, aynı üçgenin iki farklı ölçüm türüdür: alan yüzeyini kaplar, çevre ise sınırını izler. Dik kenarı değiştirirseniz diğer her değer de onunla birlikte değişir, ancak kenarlar arasındaki oran asla değişmez.",
            },
          ],
          "table": {
            "headers": [
              "Ölçüm",
              "Tam değer",
              "Yaklaşık değer",
            ],
            "rows": [
              [
                "Dik kenar a",
                "5 cm",
                "5 cm",
              ],
              [
                "Dik kenar b",
                "5 cm",
                "5 cm",
              ],
              [
                "Hipotenüs c",
                "5√2 cm",
                "7.071 cm",
              ],
              [
                "Alan A",
                "25/2 cm²",
                "12.5 cm²",
              ],
              [
                "Çevre P",
                "10 + 5√2 cm",
                "17.071 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "45-45-90 Üçgeni Hesaplamalarına İlişkin Çözümlü Örnekler",
          "blocks": [
            {
              "kind": "p",
              "text": "Sekiz çözümlü örnek; her hesaplayıcı modunu ve bir kare köşegenini kapsar.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: Bir Dik Kenardan Hipotenüsü Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 4]] cm. Formül: [[c = a\\sqrt{2}]]. Yerine koyma: [[c = 4\\sqrt{2}]]. Tam cevap: [[4\\sqrt{2}]] cm. Ondalık yaklaşık değer: [[c \\approx 5.657]] cm. Hipotenüs, dik kenarın yaklaşık 1.414 katıdır; bu nedenle 4 cm yaklaşık 5.657 cm olur. Soru tam bir değer istediğinde tam biçim [[4\\sqrt{2}]] cm yi koruyun.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Daha Büyük Bir Dik Kenardan Hipotenüsü Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 8]] cm. Formül: [[c = a\\sqrt{2}]]. Yerine koyma: [[c = 8\\sqrt{2}]]. Tam cevap: [[8\\sqrt{2}]] cm. Ondalık yaklaşık değer: [[c \\approx 11.314]] cm. Bu, Örnek 1 deki hesaplamanın iki katı ölçekte aynısıdır ve cevap tam olarak iki katı büyüktür; bu da kenar uzunluklarının doğrusal ölçeklenmesini doğrular. Aynı değer, kenarı 8 cm olan bir karenin köşegenidir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Hipotenüsten Bir Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[c = 12]] cm. Formül: [[a = \\frac{c}{\\sqrt{2}}]]. Yerine koyma: [[a = \\frac{12}{\\sqrt{2}}]]. Rasyonelleştirme [[a = 6\\sqrt{2}]] cm verir. Ondalık yaklaşık değer: [[a \\approx 8.485]] cm. Her iki dik kenar da [[6\\sqrt{2}]] cm dir, çünkü dik kenarlar eşittir. Dik kenar, olması gerektiği gibi, hipotenüsten kısadır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Daha Büyük Bir Hipotenüsten Bir Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[c = 20]] cm. Formül: [[a = \\frac{c\\sqrt{2}}{2}]]. Yerine koyma: [[a = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}]] cm. Ondalık yaklaşık değer: [[a \\approx 14.142]] cm. Her iki dik kenar da [[10\\sqrt{2}]] cm dir. Hızlı bir kontrol: [[a\\sqrt{2} = 10\\sqrt{2} \\times \\sqrt{2} = 20]] cm; bu, verilen hipotenüsü geri verir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Alanı Hesaplama",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 7]] cm. Formül: [[A = \\frac{a^2}{2}]]. Yerine koyma: [[A = \\frac{49}{2}]]. Sonuç: [[A = 24.5]] cm². Alan tamdır; karekök ve yuvarlama yoktur, çünkü [[7^2 = 49]] temiz bir şekilde ikiye bölünür. Alan kare birimlerle ifade edilir; kenar uzunluklarından farklı olarak birimi cm² dir, cm değil.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Çevreyi Hesaplama",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 6]] cm. Formül: [[P = a(2 + \\sqrt{2})]]. Yerine koyma: [[P = 6(2 + \\sqrt{2})]]. Tam cevap: [[P = 12 + 6\\sqrt{2}]] cm. Ondalık yaklaşık değer: [[P \\approx 20.485]] cm. Kenarları tek tek toplamak da aynı sonucu verir: [[6 + 6 + 6\\sqrt{2} = 12 + 6\\sqrt{2}]] cm. Çevre sade birimlerle ifade edilir, kare birimlerle değil.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Bir Karenin Köşegenini Bulma",
            },
            {
              "kind": "p",
              "text": "Kenarı 10 m olan bir kare verilmiştir. Formül: [[d = a\\sqrt{2}]]. Yerine koyma: [[d = 10\\sqrt{2}]] m. Tam cevap: [[10\\sqrt{2}]] m. Ondalık yaklaşık değer: [[d \\approx 14.142]] m. Köşegen kareyi iki 45-45-90 üçgenine böler; her birinin dik kenarları 10 m ve hipotenüsü [[10\\sqrt{2}]] m dir. Bu, bir dik kenardan hipotenüs bulma formülüyle aynıdır, çünkü köşegen hipotenüstür.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: Ondalık Bir Dik Kenardan Hipotenüsü Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 2.5]] cm. Formül: [[c = a\\sqrt{2}]]. Yerine koyma: [[c = 2.5\\sqrt{2}]]. Tam cevap: [[2.5\\sqrt{2}]] cm. Ondalık yaklaşık değer: [[c \\approx 3.536]] cm. Ondalık girdiler tam sayı girdileriyle tamamen aynı çalışır: √2 ile çarpın, önce tam biçimi koruyun ve ondalık sayıyı yalnızca son adımda yuvarlayın. İkinci dik kenar da 2.5 cm dir.",
            },
            {
              "kind": "p",
              "text": "Tam cevaplar ve ondalık yaklaşık değerler farklı amaçlara hizmet eder. [[4\\sqrt{2}]] cm gibi tam biçim kesindir ve sınav cevaplarının genellikle gerektirdiği biçimdir. 5.657 cm gibi ondalık biçim hayal etmesi ve cetvelle ölçmesi daha kolaydır. Önce tam biçimi, sonra ondalık biçimi verin ve ondalık sayıyı yalnızca son adımda yuvarlayın.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Tam Cevaplar ve Ondalık Yaklaşık Değerler",
          "blocks": [
            {
              "kind": "p",
              "text": "Tam bir cevap √2 yi korur; ondalık bir cevap onu yuvarlar.",
            },
            {
              "kind": "p",
              "text": "Tam cevap [[5\\sqrt{2}]] cm ile ondalık yaklaşık değer 7.071 cm yi karşılaştırın. İlki tamdır: uzunluğu kesin olarak belirtir ve karesi 2 olan irrasyonel sayıyı temsil etmek için √2 sembolünü kullanır. İkincisi yuvarlanmıştır: uzunluğu üç ondalık basamağa kadar belirtir; bu, gerçek değere yakındır ama ona eşit değildir. Fark küçüktür, yaklaşık 0.00007 cm, ama gerçektir ve ispatlarda ve sonraki hesaplamalarda önemlidir.",
            },
            {
              "kind": "p",
              "text": "√2 sayısı irrasyoneldir; yani iki tam sayının kesri olarak yazılamaz ve ondalık açılımı hiçbir zaman bitmez ve hiçbir zaman tekrarlanmaz. 1.41421356 ile başlar ve sonsuza kadar devam eder. Onun için yazdığınız her ondalık sayı, ne kadar uzun olursa olsun, bir yaklaşımdır. Bu nedenle tam köklü gösterim, matematiksel ispatlarda ve tam değer isteyen sınav cevaplarında tercih edilir: köklü ifade, ondalık sayının kaybettiği tam hassasiyeti korur.",
            },
            {
              "kind": "p",
              "text": "Bir şeyi ölçmeniz, kesmeniz ya da inşa etmeniz gerektiğinde ondalık yaklaşık değer daha pratiktir. Bir cetvel [[5\\sqrt{2}]] cm yi doğrudan ölçemez, ama 7.071 cm yi ölçebilir. Çapraz destek kesen bir marangoz ondalık sayıya ihtiyaç duyarken, bir teoremi ispatlayan bir öğrenci tam biçime ihtiyaç duyar. Her biçimi uygun olduğu yerde kullanın ve ondalık sayıları yaklaşık olarak etiketleyin; kimse onları tam değerlerle karıştırmasın.",
            },
            {
              "kind": "p",
              "text": "Yuvarlama bir hesaplamanın sonunda yapılmalıdır, ortasında değil. √2 yi erken 1.41 ile değiştirip sonra çarparsanız, sonraki her adım bu hatayı ileriye taşır. [[a = 5]] cm için 1.41 kullanmak [[c = 7.05]] cm verirken doğru yaklaşık değer 7.071 cm dir. Çözüm boyunca √2 yi [[5\\sqrt{2}]] biçiminde tam tutun ve yalnızca son cevabı yuvarlayın. Yuvarlanmış bir ondalık sayıyı asla tam değer gibi sunmayın.",
            },
          ],
        },
        "sec-verify": {
          "h2": "45-45-90 Üçgeni Hesaplamalarınızı Nasıl Doğrularsınız?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dört hızlı kontrol neredeyse her hatayı yakalar.",
            },
            {
              "kind": "p",
              "text": "Her cevapta en az bir kontrol yapın; problem önemliyse dördünü de yapın. Aşağıdaki örnekte baştan sona [[a = 5]] cm, [[b = 5]] cm ve [[c = 5\\sqrt{2} \\approx 7.071]] cm olan üçgen kullanılmıştır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 1: Eşit Dik Kenarlar",
            },
            {
              "kind": "p",
              "text": "[[a = b]] olduğunu doğrulayın. Burada her iki dik kenar da 5 cm olduğundan kontrol geçer. İki dik kenarınız farklıysa, bunlardan biri yanlıştır ya da üçgen hiç 45-45-90 üçgeni değildir. Bu, en hızlı kontroldür, çünkü aritmetik gerektirmez: iki dik kenar tam olarak eşleşmelidir.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 2: Kenar Oranı",
            },
            {
              "kind": "p",
              "text": "Hipotenüsü bir dik kenara bölün: [[\\frac{c}{a} = \\sqrt{2} \\approx 1.414]]. Burada [[\\frac{7.071}{5} \\approx 1.414]] olduğundan oran sağlanır. Bölme 2 veriyorsa yanlışlıkla 30-60-90 üçgeninin iki katını kullanmışsınızdır. Yaklaşık 1.732 veriyorsa yanlışlıkla √3 kullanmışsınızdır. [[\\frac{c}{a}]] oranı √2 olmalıdır, başka hiçbir şey değil.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 3: Pisagor Teoremi",
            },
            {
              "kind": "p",
              "text": "[[a^2 + b^2 = c^2]] olduğunu doğrulayın. Burada [[5^2 + 5^2 = 25 + 25 = 50]] ve [[(5\\sqrt{2})^2 = 25 \\times 2 = 50]] olduğundan teorem sağlanır. Bu kontrol, yerleri karışmış dik kenarları ve yanlış çarpanları yakalar, çünkü herhangi bir kenar için yanlış değer kullanmak eşitliği bozar. <a href=\"/pythagorean-theorem-calculator/\">Pisagor teoremi hesaplayıcı</a>, bu kontrolü herhangi üç kenar uzunluğu için yapar.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 4: Açı Toplamı",
            },
            {
              "kind": "p",
              "text": "[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]] olduğunu doğrulayın. Bu kontrol aritmetikten çok problemin kurulumuyla ilgilidir: üçgeninizin açıları 180° ye eklenmiyorsa ya da 45°, 45° ve 90° değilse, 45-45-90 formülleri hiç uygulanamaz ve onlardan çıkan hiçbir kenar uzunluğuna güvenilemez. Önce açıları doğrulayın, sonra kenarlara güvenin.",
            },
          ],
        },
        "sec-properties": {
          "h2": "45-45-90 Üçgenlerinin Önemli Özellikleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Sabit orandan on özellik çıkar.",
            },
            {
              "kind": "list",
              "items": [
                "Üçgenin açıları her zaman 45°, 45° ve 90°dir ve bu açılar her zaman toplam 180° eder.",
                "Her iki dik kenar da eşittir, [[a = b]], çünkü eşit 45° açıların karşısında yer alırlar.",
                "Hipotenüs en uzun kenardır, çünkü 90° açının karşısında yer alır.",
                "Hipotenüs, her iki dik kenarın √2 katıdır, [[c = a\\sqrt{2}]]; burada [[\\sqrt{2} \\approx 1.41421356]] dir.",
                "Tüm 45-45-90 üçgenleri benzerdir, çünkü aynı üç açıya ve aynı kenar oranlarına sahiptirler.",
                "[[1 : 1 : \\sqrt{2}]] kenar oranı üçgenin büyüklüğünden bağımsızdır; bu nedenle üçgeni ölçeklemek oranı değiştirmez.",
                "Hipotenüse çizilen yükseklik üçgeni iki eş küçük 45-45-90 üçgenine böler.",
                "Hipotenüse çizilen yükseklik hipotenüsün yarısına eşittir, [[\\frac{c}{2}]].",
                "Alan, bir dik kenarın karesinin yarısıdır, [[A = \\frac{a^2}{2}]]; bu nedenle dik kenarı iki katına çıkarmak alanı dört katına çıkarır.",
                "Çevre [[P = a(2 + \\sqrt{2})]] dir; bu nedenle dik kenarı iki katına çıkarmak çevreyi iki katına çıkarır.",
              ],
            },
            {
              "kind": "p",
              "text": "Her özellik, tek bir örnekten değil, açılardan ve orandan çıkar. Eşit açılar eşit dik kenarları zorunlu kılar, eşit dik kenarlar ile Pisagor √2 hipotenüsü zorunlu kılar ve √2 hipotenüs alan ve çevre formüllerini zorunlu kılar. Üç açıyı kabul ettikten sonra geri kalan her şey bellidir; bu nedenle bilinen tek bir kenar bütün üçgeni tanımlamaya yeter.",
            },
          ],
        },
        "sec-vs-3060": {
          "h2": "45-45-90 ve 30-60-90 Üçgenleri Arasındaki Fark",
          "blocks": [
            {
              "kind": "p",
              "text": "İki özel üçgen birbirine benzer görünür, ama oranları asla karışmaz.",
            },
            {
              "kind": "p",
              "text": "Her ikisi de özel dik üçgendir ve her ikisi de bilinen tek bir kenardan her kenarı bulmanıza olanak tanır. Fark açılardadır: 45-45-90 üçgeninin iki eşit dar açısı varken, 30-60-90 üçgeninin iki farklı dar açısı vardır. Bu tek fark kenar oranını tamamen değiştirir; bu nedenle bir üçgenin formülleri diğer üçgen için yanlış cevaplar verir.",
            },
            {
              "kind": "p",
              "text": "45-45-90 üçgeni ikizkenardır, iki eşit dik kenarı vardır; 30-60-90 üçgeni ise çeşitkenardır, eşit kenarı yoktur. 45-45-90 üçgeninde hipotenüs bir dik kenarın √2 katı iken, 30-60-90 üçgeninde hipotenüs kısa dik kenarın iki katıdır. 30-60-90 üçgeninin uzun dik kenarı kısa dik kenarın √3 katıdır ve 45-45-90 üçgeninde buna karşılık gelen bir kenar yoktur, çünkü iki dik kenarı aynı uzunluktadır. Diğer üçgenin tam anlatımı için 1:√3:2 oranını kullanan <a href=\"/30-60-90-triangle-calculator/\">30-60-90 üçgen hesaplayıcı</a> sayfasına bakın.",
            },
            {
              "kind": "p",
              "text": "Formüller birbirinin yerine kullanılamaz. [[a = 5]] cm olan bir 45-45-90 üçgeninde [[c = 2a]] kullanmak 10 cm verirken doğru hipotenüs yaklaşık 7.071 cm dir. Kısa dik kenarı 5 cm olan bir 30-60-90 üçgeninde [[c = a\\sqrt{2}]] kullanmak yaklaşık 7.071 cm verirken doğru hipotenüs 10 cm dir. Bir formül seçmeden önce her zaman açıları doğrulayın: eşit dar açılar 45-45-90, 30° ve 60° açılar ise 30-60-90 demektir.",
            },
          ],
          "table": {
            "headers": [
              "Özellik",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Açılar",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Kenar oranı",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Eşit kenarlar",
                "İki eşit dik kenar",
                "Eşit dik kenar yok",
              ],
              [
                "Hipotenüs",
                "Dik kenar × √2",
                "Kısa dik kenar × 2",
              ],
              [
                "Uzun dik kenar",
                "Kısa dik kenarla aynı",
                "Kısa dik kenar × √3",
              ],
              [
                "Üçgen türü",
                "İkizkenar dik",
                "Çeşitkenar dik",
              ],
            ],
          },
          "image": {
            "src": "forty-five-ninety-vs-3060.svg",
            "alt": "Yan yana iki özel dik üçgen: oranı 1 e 1 e 2 nin karekökü olan bir 45-45-90 üçgeni ve oranı 1 e 3 ün karekökü e 2 olan bir 30-60-90 üçgeni",
            "caption": "45-45-90, 1:1:√2 kullanır; 30-60-90, 1:√3:2 kullanır. Oranlar asla karıştırılmamalıdır.",
          },
        },
        "sec-mistakes": {
          "h2": "45-45-90 Üçgenleri Çözerken Yapılan Yaygın Hatalar",
          "blocks": [
            {
              "kind": "p",
              "text": "45-45-90 problemlerinde on dört hata tekrar tekrar ortaya çıkar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Hipotenüsün dik kenarın iki katı olduğunu varsaymak: iki katına çıkarmak 30-60-90 üçgenine aittir. [[a = 5]] cm için iki katına çıkarmak 10 cm verirken doğru hipotenüs [[5\\sqrt{2} \\approx 7.071]] cm dir. Doğrusu: [[c = a\\sqrt{2}]].",
                "√2 yerine √3 kullanmak: √3, oranı [[1 : \\sqrt{3} : 2]] olan 30-60-90 üçgenine aittir. 45-45-90 üçgeni her zaman √2 kullanır. Doğrusu: [[c = a\\sqrt{2}]].",
                "Her iki dik kenarın da eşit olduğunu unutmak: iki dik kenar her zaman aynı uzunluktadır; bu nedenle bir problem bir dik kenarı veriyorsa diğer dik kenar zaten bilinmektedir. [[a = 5]] cm için [[b = 5]] cm dir, yeni bir bilinmeyen değildir. Doğrusu: [[a = b]].",
                "Hipotenüsü dik kenarlardan biri gibi kabul etmek: hipotenüs 90° açının karşısındaki kenardır ve her iki dik kenardan da uzundur. Onu alan formülünde dik kenar olarak kullanmak yanlış bir alan verir. Doğrusu: önce dik açı işaretiyle hipotenüsü belirleyin.",
                "[[c = a\\sqrt{3}]] kullanmak: bu, iki özel üçgeni karıştırır. [[a = 5]] cm için [[a\\sqrt{3} \\approx 8.660]] cm, bu üçgenin ne hipotenüsüdür ne de bir dik kenarıdır. Doğrusu: [[c = a\\sqrt{2} \\approx 7.071]] cm.",
                "Hipotenüsü √2 yerine 2 ye bölmek: ikiye bölmek 30-60-90 üçgeninin kısa dik kenarını verir, 45-45-90 üçgeninin dik kenarını değil. [[c = 10]] cm için ikiye bölmek 5 cm verirken doğru dik kenar [[5\\sqrt{2} \\approx 7.071]] cm dir. Doğrusu: [[a = \\frac{c}{\\sqrt{2}}]].",
                "Alan hesaplarken dik kenarın karesini almayı unutmak: alan [[a^2]] gerektirir, [[a]] değil. [[a = 6]] cm için [[A = \\frac{a}{2}]] kullanmak 3 cm² verirken doğru alan [[\\frac{36}{2} = 18]] cm² dir. Doğrusu: [[A = \\frac{a^2}{2}]].",
                "Çevre hesaplarken yalnızca iki dik kenarı toplamak: çevre üç kenarın da toplamını gerektirir. [[a = 5]] cm için yalnızca iki dik kenarı toplamak 10 cm verirken gerçek çevre yaklaşık 17.071 cm dir. Doğrusu: [[P = a + b + c]].",
                "Tam cevapları ondalık yaklaşık değerlerle karıştırmak: [[5\\sqrt{2}]] cm tamdır, oysa 7.071 cm yuvarlanmıştır. 7.071 cm yi tam değer gibi yazmak, köklü ifadenin koruduğu hassasiyeti kaybettirir. Doğrusu: önce tam biçimi, sonra ondalık biçimi verin.",
                "√2 yi çok erken yuvarlamak: hesaplamanın ortasında √2 yerine 1.41 kullanmak sonraki her adımı kaydırır. [[a = 5]] cm için [[5 \\times 1.41 = 7.05]] cm olur; oysa 7.071 cm dir. Doğrusu: çözüm boyunca √2 yi tam tutun ve yalnızca son cevabı yuvarlayın.",
                "Ölçü birimlerini karıştırmak: santimetre cinsinden bir dik kenar ile metre cinsinden bir hipotenüs doğrudan birleştirilemez. Hesaplamadan önce her ölçümü tek bir birime dönüştürün. Doğrusu: 0.5 m, 50 cm ye eşittir; sonra santimetre cinsinden hesaplayın.",
                "45-45-90 ve 30-60-90 oranlarını karıştırmak: [[1 : 1 : \\sqrt{2}]] ve [[1 : \\sqrt{3} : 2]] oranları farklı üçgenlere aittir. Onları değiştirmek büyük ölçüde yanlış bir hipotenüs verir. Doğrusu: açıları doğrulayın, sonra onlara uyan oranı seçin.",
                "Alanın kare birim gerektirdiğini unutmak: 18 cm lik bir alan, sayı doğru olsa bile birim bakımından yanlıştır. Alan yüzeyi ölçer; bu nedenle 18 santimetrekaredir. Doğrusu: [[A = 18]] cm².",
                "Formülleri rastgele bir dik üçgen için kullanmak: [[c = a\\sqrt{2}]] ve [[A = \\frac{a^2}{2}]] formülleri yalnızca açılar 45°, 45° ve 90° olduğunda geçerlidir. Açıları 40° ve 50° olan bir dik üçgenin farklı bir oranı vardır. Doğrusu: önce açıları doğrulayın, sonra formülleri kullanın.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "45-45-90 Üçgenlerinin Pratik Uygulamaları",
          "blocks": [
            {
              "kind": "p",
              "text": "Oran, bir karenin ikiye bölündüğü her yerde ortaya çıkar.",
            },
            {
              "kind": "p",
              "text": "En yaygın kullanım bir karenin köşegenini bulmaktır. Kenarı 30 cm olan bir kare karonun köşegeni [[30\\sqrt{2} \\approx 42.426]] cm dir; bu, bir karonun köşeden köşeye bölünmesi gerektiğinde kesilecek uzunluktur. Bir kare resim çerçevesi, bir kare masa üstü ve bir kare arsa da aynı hesabı kullanır, çünkü her kare iki 45-45-90 üçgenine bölünür.",
            },
            {
              "kind": "p",
              "text": "Geometri ödevleri ve trigonometri alıştırmaları, öğrencilerin eşit dik kenarları belirleyip belirleyemediğini, oranı uygulayıp uygulayamadığını ve tam köklü cevapları koruyup koruyamadığını sınamak için 45-45-90 problemleri kullanır. Böyle bir üçgenin bir kenarını bilen bir öğrenci, ölçüm yapmadan geri kalanını bulabilir; oranın amacı budur. Sınıf gösterimleri, bu üçgeni, sabit bir oranın tek bir ölçümü bir şeklin tam tanımına nasıl dönüştürdüğünü ve bir kareyi ikiye bölmenin üçgeni nasıl oluşturduğunu göstermek için kullanır.",
            },
            {
              "kind": "p",
              "text": "Teknik çizim, mimari planlar ve inşaat geometrisi, bir tasarım çapraz destek, kare tabanlı bir desen ya da 45° kesilmiş bir köşe gibi 45° açı gerektirdiğinde 45-45-90 ilişkilerini kullanır. Böyle bir üçgenin bir kenarını bilen bir inşaatçı, köşegen mesafeyi doğrudan ölçmeden bulabilir. Koordinat düzlemi çalışması da aynı fikri kullanır: 5 birim sağa ve 5 birim yukarı hareket, [[5\\sqrt{2} \\approx 7.071]] birimlik bir köşegen mesafeyi kapsar. Bunlar geometrinin kendisinin gerçekçi kullanımlarıdır, mühendislik toleransları hakkında iddialar değildir: gerçek tasarım çalışması, bu sayfadaki tam geometrik değerlerin ötesinde malzeme sınırları ve güvenlik payları ekler.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Cevaplı Alıştırma Problemleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Cevapları okumadan önce altı problemi de kağıt üzerinde çözün.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: Bir Dik Kenardan Hipotenüsü Bulma",
            },
            {
              "kind": "p",
              "text": "Bir 45-45-90 üçgeninin dik kenarı [[a = 9]] cm dir. Hipotenüs [[c]] yi bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Hipotenüsten Bir Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Bir 45-45-90 üçgeninin hipotenüsü [[c = 14]] cm dir. Dik kenar [[a]] yı bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Alanı Hesaplama",
            },
            {
              "kind": "p",
              "text": "Bir 45-45-90 üçgeninin dik kenarı [[a = 10]] cm dir. Alan [[A]] yı bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 4: Çevreyi Hesaplama",
            },
            {
              "kind": "p",
              "text": "Bir 45-45-90 üçgeninin dik kenarı [[a = 3]] cm dir. Çevre [[P]] yi bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Bir Karenin Köşegenini Bulma",
            },
            {
              "kind": "p",
              "text": "Bir karenin kenar uzunluğu 12 cm dir. Köşegeninin uzunluğunu bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Önerilen Bir 45-45-90 Üçgenini Doğrulama",
            },
            {
              "kind": "p",
              "text": "Bir üçgenin dik kenarları 6 cm ve 6 cm, hipotenüsü [[6\\sqrt{2}]] cm dir. Bu kenar uzunluklarının bir 45-45-90 üçgeni oluşturduğunu doğrulamak için Pisagor teoremini kullanın.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Problemlerinin Cevapları",
            },
            {
              "kind": "p",
              "text": "Cevap 1: [[c = a\\sqrt{2} = 9\\sqrt{2} \\approx 12.728]] cm. Tam cevap [[9\\sqrt{2}]] cm dir.",
            },
            {
              "kind": "p",
              "text": "Cevap 2: [[a = \\frac{c\\sqrt{2}}{2} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.899]] cm. Her iki dik kenar da [[7\\sqrt{2}]] cm dir.",
            },
            {
              "kind": "p",
              "text": "Cevap 3: [[A = \\frac{a^2}{2} = \\frac{100}{2} = 50]] cm². Alan tamdır, yuvarlama yoktur.",
            },
            {
              "kind": "p",
              "text": "Cevap 4: [[P = a(2 + \\sqrt{2}) = 3(2 + \\sqrt{2}) = 6 + 3\\sqrt{2} \\approx 10.243]] cm. Kenarları tek tek toplamak da aynı sonucu verir: [[3 + 3 + 3\\sqrt{2} = 6 + 3\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 5: [[d = a\\sqrt{2} = 12\\sqrt{2} \\approx 16.971]] cm. Köşegen, kareyi ikiye bölerek oluşan 45-45-90 üçgeninin hipotenüsüdür.",
            },
            {
              "kind": "p",
              "text": "Cevap 6: [[a^2 + b^2 = 36 + 36 = 72]] ve [[c^2 = (6\\sqrt{2})^2 = 36 \\times 2 = 72]]. İki taraf eşleşir ve dik kenarlar eşittir; bu nedenle üçgen, hipotenüsü yaklaşık 8.485 cm olan bir 45-45-90 üçgenidir.",
            },
          ],
        },
      },
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları",
      "relatedIntro": "Aşağıdaki hesaplayıcıların her biri farklı bir dik üçgen görevini yerine getirir; bu nedenle ihtiyacınız olan ölçüme uygun aracı seçin.",
      "relatedItems": [
        "Özel Dik Üçgen Hesaplayıcı",
        "30-60-90 Üçgen Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
        "Dik Üçgen Alan Hesaplayıcı",
        "Dik Üçgen Çevre Hesaplayıcı",
        "Pisagor Teoremi Hesaplayıcı",
      ],
      "faqHeading": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "45-45-90 üçgeni nedir?",
          "answer": "45-45-90 üçgeni, açıları 45°, 45° ve 90° olan bir dik üçgendir. İki dik kenarı eşit olduğu için ikizkenar dik üçgen olarak adlandırılır. Kenarları her zaman sabit [[1 : 1 : \\sqrt{2}]] oranını izler; bu nedenle bir kenarı bilmek diğerlerini bulmaya yeter.",
        },
        {
          "question": "45-45-90 üçgeninin kenar oranı nedir?",
          "answer": "Kenar oranı [[a : b : c = 1 : 1 : \\sqrt{2}]] dir; burada [[a]] ve [[b]] eşit dik kenarlar, [[c]] ise hipotenüstür. Bu, [[b = a]] ve [[c = a\\sqrt{2}]] anlamına gelir. Oran, büyüklüğü ne olursa olsun her 45-45-90 üçgeni için aynıdır.",
        },
        {
          "question": "İki dik kenar neden eşittir?",
          "answer": "İki dar açının her ikisi de 45°dir ve herhangi bir üçgende eşit açılar eşit kenarların karşısında yer alır. A açısının karşısındaki kenar [[a]] dik kenarı, B açısının karşısındaki kenar ise [[b]] dik kenarıdır; bu nedenle [[a = b]]. Üçgen, dik açıdan hipotenüse çizilen yükseklik etrafında da simetriktir.",
        },
        {
          "question": "Hipotenüs neden √2 ile çarpılır?",
          "answer": "Pisagor teoremi [[a^2 + a^2 = c^2]] verir; bu da [[2a^2 = c^2]] ye sadeleşir. Karekök almak [[c = a\\sqrt{2}]] verir. √2 ortaya çıkar, çünkü iki eşit kare toplanınca bir karenin iki katı olur; bu nedenle hipotenüs bir dik kenarın √2 katı olmak zorundadır.",
        },
        {
          "question": "Bir dik kenardan hipotenüsü nasıl bulurum?",
          "answer": "[[c = a\\sqrt{2}]] kullanarak dik kenarı √2 ile çarpın. [[a = 5]] cm için [[c = 5\\sqrt{2} \\approx 7.071]] cm olur. Dik kenarlar eşit olduğundan her iki dik kenar da işe yarar. Soru tam bir değer istediğinde tam biçim [[5\\sqrt{2}]] cm yi koruyun.",
        },
        {
          "question": "Hipotenüsten bir dik kenarı nasıl bulurum?",
          "answer": "[[a = \\frac{c}{\\sqrt{2}}]] kullanarak hipotenüsü √2 ye bölün ya da rasyonelleştirilmiş biçim [[a = \\frac{c\\sqrt{2}}{2}]] yi kullanın. [[c = 10]] cm için [[a = 5\\sqrt{2} \\approx 7.071]] cm olur. Dik kenarlar eşit olduğundan her iki dik kenar da bu aynı uzunluğa sahiptir.",
        },
        {
          "question": "45-45-90 üçgeninin alanı nasıl hesaplanır?",
          "answer": "[[A = \\frac{a^2}{2}]] kullanın; burada [[a]] bir dik kenardır. İki dik kenar taban ve yükseklik görevi görür ve üçgen, onların oluşturduğu karenin yarısını kaplar. [[a = 6]] cm için [[A = \\frac{36}{2} = 18]] cm² olur. Alan her zaman kare birimlerle ifade edilir.",
        },
        {
          "question": "Çevresi nasıl hesaplanır?",
          "answer": "Üç kenarı da [[P = a + b + c]] ile toplayın; bu [[P = a(2 + \\sqrt{2})]] ye sadeleşir. [[a = 5]] cm için [[P = 10 + 5\\sqrt{2} \\approx 17.071]] cm olur. Çevre doğrusal bir ölçüdür; bu nedenle cevap sade birimlerle verilir, kare birimlerle değil.",
        },
        {
          "question": "Bir karenin köşegeni neden 45-45-90 üçgeni oluşturur?",
          "answer": "Bir köşegen kareyi iki üçgene böler; her birinin iki kenarı karenin kenarlarıdır ve bir 90° köşe açısı vardır. Köşegen ayrıca iki köşe açısını da 45° ye böler. Bu nedenle her üçgenin açıları 45°, 45° ve 90° olur ve hipotenüsü köşegendir, [[d = a\\sqrt{2}]].",
        },
        {
          "question": "√2 tam bir sayı mıdır yoksa bir yaklaşık değer midir?",
          "answer": "√2 sembolü, karesi 2 olan tam bir irrasyonel sayıyı temsil eder, ancak ondalık açılımı hiçbir zaman bitmez ve 1.41421356 ile başlar. Onun için yazdığınız her ondalık sayı bir yaklaşımdır. Tam cevaplarda köklü biçimi koruyun ve ondalık sayıyı yalnızca ölçülmüş ya da yuvarlanmış bir değer gerektiğinde kullanın.",
        },
        {
          "question": "Tüm 45-45-90 üçgenleri benzer midir?",
          "answer": "Evet. Her 45-45-90 üçgeni aynı üç açıya, 45°, 45° ve 90°, ve aynı kenar oranına, [[1 : 1 : \\sqrt{2}]] sahiptir. Bu tür iki üçgen yalnızca büyüklük bakımından farklılık gösterir, şekil bakımından asla farklılık göstermez. Birini büyütmek ya da küçültmek her kenarı aynı katsayıyla çarpar; bu nedenle oranlar sabit kalır.",
        },
        {
          "question": "45-45-90 ve 30-60-90 üçgenleri arasındaki fark nedir?",
          "answer": "45-45-90 üçgeninin açıları 45°, 45° ve 90°dir, dik kenarları eşittir ve oranı [[1 : 1 : \\sqrt{2}]] dir. 30-60-90 üçgeninin açıları 30°, 60° ve 90°dir, eşit kenarı yoktur ve oranı [[1 : \\sqrt{3} : 2]] dir. Formülleri birbirinin yerine kullanılamaz; bu nedenle önce her zaman açıları doğrulayın.",
        },
      ],
    },
};
