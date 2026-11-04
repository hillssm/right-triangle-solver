// altitudeFromSidesGuideTranslations.btr.ts: Right Triangle Altitude From Projections
// Guide (Page 28 of 45) translation.
export const B6_TR = {
  "tr": {
      "tocHeading": "Bölüm Gezintisi",
      "tocItems": {
        "sec-intro": "Kenarlardan Dik Üçgen Yüksekliği Hesaplayıcı",
        "sec-calculate": "Kenar Uzunluklarından Dik Üçgen Yüksekliği Hesaplama",
        "sec-altitude": "Dik Üçgenin Yüksekliği Nedir?",
        "sec-sides": "Dik Üçgenin Kenarlarını Anlamak",
        "sec-formula": "Kenarlardan Dik Üçgen Yüksekliği Formülü",
        "sec-use": "Kenarlardan Dik Üçgen Yüksekliği Hesaplayıcısı Nasıl Kullanılır",
        "sec-manual": "Hesap Makinesi Olmadan Adım Adım Yükseklik Hesaplama",
        "sec-diagram": "Dik Üçgen Yüksekliği Şemasının Açıklaması",
        "sec-proof": "Yükseklik Formülü Neden İşe Yarıyor?",
        "sec-examples": "Kenarlardan Dik Üçgen Yüksekliği İçin Çözümlü Örnekler",
        "sec-two-sides": "Yalnızca İki Kenar Bilindiğinde Yükseklik Nasıl Bulunur",
        "sec-verify": "Yükseklik Hesabınızı Nasıl Doğrularsınız",
        "sec-vs-projections": "Kenarlardan Yükseklik ile İzdüşümlerden Yükseklik",
        "sec-area-rel": "Yükseklik, Alan ve Hipotenüs Arasındaki İlişki",
        "sec-properties": "Hipotenüse İnen Yüksekliğin Özel Özellikleri",
        "sec-mistakes": "Dik Üçgen Yüksekliği Hesaplarken Yapılan Yaygın Hatalar",
        "sec-applications": "Dik Üçgen Yüksekliği Hesaplamalarının Pratik Kullanımları",
        "sec-practice": "Çözümlü Alıştırma Soruları",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları Keşfedin",
        "sec-faq": "Sık Sorulan Sorular",
        "sec-conclusion": "İlgili Dik Üçgen Hesaplayıcıları",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kenarlardan Dik Üçgen Yüksekliği Hesaplayıcı",
          "blocks": [
            {
              "kind": "p",
              "text": "Yüksekliği saniyeler içinde bulmak için iki dik kenarı ve hipotenüsü girin.",
            },
            {
              "kind": "p",
              "text": "Bu hesaplayıcı, bir dik üçgenin yüksekliğini bulur: dik açı köşesinden hipotenüse olan dik mesafe. İki dik kenarı, [[a]] ve [[b]], ve hipotenüsü [[c]] girin; hesaplayıcı [[h=\\frac{ab}{c}]] formülünü kullanarak [[h]] değerini verir. Sonuç, girdilerinizle aynı birimde çıkar.",
            },
            {
              "kind": "p",
              "text": "Örneğin, dik kenarları 3 cm ve 4 cm, hipotenüsü 5 cm olan bir üçgen [[h=\\frac{3 \\times 4}{5}=2.4\\text{ cm}]] değerini verir. 2.4 cm'nin her iki dik kenardan da kısa olduğuna dikkat edin; hipotenüse inen yükseklik için bu her zaman doğrudur.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Kenar Uzunluklarından Dik Üçgen Yüksekliği Hesaplama",
          "blocks": [
            {
              "kind": "p",
              "text": "Hesaplayıcı üç ölçüm alır. a kenarı birinci dik kenar, b kenarı ikinci dik kenar ve c hipotenüsü dik açının karşısındaki en uzun kenardır. Üçü de aynı birimi kullanmalıdır; bu yüzden yazmadan önce metreleri santimetreye veya fitleri inçe çevirin.",
            },
            {
              "kind": "p",
              "text": "Yerine koyma işlemiyle birlikte sonucu görmek için Yüksekliği Hesapla h düğmesine tıklayın ve bir sonraki soru için alanları temizlemek amacıyla Sıfırla seçeneğini kullanın. Hesaplayıcı cevabı şu kısa formülle verir:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Yalnızca iki kenarı biliyorsanız, önce Pisagor teoremiyle üçüncü kenarı bulun ya da farklı bir başlangıç noktası için genel <a href=\"/right-triangle-altitude-calculator/\">yükseklik hesaplayıcı</a> sayfasını deneyin.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Dik Üçgenin Yüksekliği Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik, bir köşeden karşı kenara olan dik mesafedir. Bu sayfada yükseklik her zaman dik açı köşesinden doğrudan hipotenüse iner ve onu dik açıyla keser. Hipotenüs tabandır, çünkü dik açının karşısındaki tek kenardır ve bu doğru parçası üçgenin içinde kalır.",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin üç yüksekliği vardır, ancak ikisi önemsizdir: [[a]] kenarı [[b]] tabanına inen yüksekliktir ve [[b]] kenarı [[a]] tabanına inen yüksekliktir, çünkü dik kenarlar zaten birbirine diktir. İlginç olan, hipotenüse inen üçüncü yüksekliktir, çünkü bu gerçekten yeni bir iç doğru parçasıdır ve her iki dik kenardan da kısadır.",
            },
            {
              "kind": "p",
              "text": "Bu hesaplayıcının bulduğu yükseklik işte bu üçüncü yüksekliktir ve ders kitapları bir dik üçgenin yüksekliğini sorduğunda genellikle bunu kasteder.",
            },
          ],
        },
        "sec-sides": {
          "h2": "Dik Üçgenin Kenarlarını Anlamak",
          "blocks": [
            {
              "kind": "p",
              "text": "Doğru etiketleme formülün çalışmasını sağlar. [[a]] ve [[b]] dik kenarları, dik açıda birleşen iki dik kenardır. [[c]] hipotenüsü, dik açının karşısındaki en uzun kenardır. [[h]] yüksekliği ise bir kenar değil, dik açı köşesinden hipotenüse inen dik doğru parçasıdır.",
            },
            {
              "kind": "p",
              "text": "Her zaman önce hipotenüsü belirleyin: üç uzunluğunuzun en büyüğüdür. 3-4-5 üçgeninde 5, [[c]] olmalıdır ve hızlı bir kontrol [[3^2+4^2=5^2]] ile etiketlemeyi doğrular. 5'i dik kenar olarak etiketlemek yanlış kenarla bölme yapar ve cevabı bozar.",
            },
          ],
          "table": {
            "headers": [
              "Değişken",
              "Tanım",
              "Hesaptaki rolü",
            ],
            "rows": [
              [
                "a",
                "Birinci dik kenar",
                "Pay kısmında b ile çarpılır",
              ],
              [
                "b",
                "İkinci dik kenar",
                "Pay kısmında a ile çarpılır",
              ],
              [
                "c",
                "Hipotenüs, en uzun kenar",
                "Paydada ab'yi böler",
              ],
              [
                "h",
                "Hipotenüse inen yükseklik",
                "Formülün sonucu",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Kenarlardan Dik Üçgen Yüksekliği Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Formül kısa ve akılda tutması kolaydır:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Dik kenarlar çarpılır, çünkü çarpımları alanla ilişkilidir: alan [[ab]] ifadesinin yarısına eşittir, yani [[ab]] alanın iki katıdır. Hipotenüse bölmek [[h]] değerini yalnız bırakır, çünkü aynı alan [[ch]] ifadesinin yarısına da eşittir. Sonuç sıradan bir uzunluktur; bu yüzden üç girdinin de aynı birimi paylaşması gerekir.",
            },
            {
              "kind": "p",
              "text": "Bir 6-8-10 üçgenini deneyin: [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Geometrik olarak 4.8 cm, dik açı köşesinden hipotenüse giden en kısa yoldur. (Tam ispat aşağıdaki ispat bölümündedir.)",
            },
            {
              "kind": "p",
              "text": "Yerine koymadan önce birimleri kontrol etmek yararlı bir alışkanlıktır. [[a]] 60 mm, [[b]] 8 cm ve [[c]] 100 mm ise, önce tek birime çevirin: [[a=6\\text{ cm}]], [[b=8\\text{ cm}]], [[c=10\\text{ cm}]]; bu yine aynı 6-8-10 üçgenidir ve aynı [[4.8\\text{ cm}]] sonucunu verir. Formül karışık birimleri sizin için asla düzeltmez, bu yüzden bu tek kontrol en utanç verici hataları önler.",
            },
          ],
        },
        "sec-use": {
          "h2": "Kenarlardan Dik Üçgen Yüksekliği Hesaplayıcısı Nasıl Kullanılır",
          "blocks": [
            {
              "kind": "p",
              "text": "Her seferinde temiz bir sonuç için şu sekiz adımı izleyin.",
            },
            {
              "kind": "steps",
              "steps": [
                "Dik açıyı bulun: iki kenarın kare şeklinde birleştiği köşe, genellikle küçük bir kareyle işaretlenir. Onaylanmış bir dik açı olmadan bu formül geçerli değildir.",
                "Bu köşeyi oluşturan iki dik kenarı bulun; formül onlara simetrik davrandığı için a ve b olarak istediğiniz sırada adlandırabilirsiniz.",
                "Hipotenüsü belirleyin: dik açının karşısındaki ve üç kenarın en uzunudur. Her iki dik kenardan da uzun olduğunu doğrulayın.",
                "Bir şey yazmadan önce üç ölçümü de aynı birime çevirin. Karışık birimler en yaygın girdi hatasıdır.",
                "a, b ve c değerlerini ilgili alanlara girin.",
                "Dik kenarları çarpıp hipotenüse bölerek yüksekliği göstermek için Yüksekliği Hesapla h düğmesine tıklayın.",
                "Sonucu okuyun ve yerine konan sayıların girmek istediklerinizle eşleştiğini kontrol edin.",
                "Bir sonraki sorudan önce girdileri temizlemek için Sıfırla seçeneğini kullanın; böylece eski değerler yeni cevabı bozamaz.",
              ],
            },
            {
              "kind": "p",
              "text": "Bir cevaba güvenmeden önce Pisagor kontrolü yapın: [[a^2+b^2]] ifadesi [[c^2]] ifadesine eşit olmalıdır. Küçük ölçüm yuvarlamaları sorun değildir, ancak büyük bir uyumsuzluk kenarların bir dik üçgen oluşturmadığı anlamına gelir.",
            },
          ],
        },
        "sec-manual": {
          "h2": "Hesap Makinesi Olmadan Adım Adım Yükseklik Hesaplama",
          "blocks": [
            {
              "kind": "p",
              "text": "Yüksekliği elle beş kısa adımda bulabilirsiniz. [[a=9\\text{ cm}]], [[b=12\\text{ cm}]] ve [[c=15\\text{ cm}]] alın ve önce üçgenin geçerli olduğunu doğrulayın: [[9^2+12^2=81+144=225=15^2]].",
            },
            {
              "kind": "p",
              "text": "Adım 1, formülü yazın: [[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Adım 2, yerine koyun: [[[h=\\frac{9 \\times 12}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Adım 3, dik kenarları çarpın: [[9 \\times 12=108]], yani [[[h=\\frac{108}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Adım 4, bölün: [[108 \\div 15=7.2]], yani [[h=7.2\\text{ cm}]]. Adım 5, alanla doğrulayın. Dik kenarlardan [[A=\\frac{9 \\times 12}{2}=54\\text{ cm}^2]]; hipotenüs ve yükseklikten [[A=\\frac{15 \\times 7.2}{2}=54\\text{ cm}^2]].",
            },
            {
              "kind": "p",
              "text": "Her iki alan da uyuşur, çünkü aynı üçgeni tarif ederler. Dik kenarlar bir taban-yükseklik çifti, hipotenüs başka bir çift verir, ancak kapalı bölge aynıdır. Eşleşen alanlar yüksekliği doğrular.",
            },
            {
              "kind": "p",
              "text": "Alan kontrolü neden bu kadar iyi çalışır? Çünkü yükseklik formülünün kendisi iki alan ifadesini eşitlemekten gelir; alan yoluyla doğrulama döngüyü kapatır: çarpma veya bölmedeki herhangi bir aritmetik kayma iki alanın uyuşmamasına yol açardı. Eşleştiklerinde hem formül kullanımı hem de aritmetik tek seferde doğrulanmış olur.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Dik Üçgen Yüksekliği Şemasının Açıklaması",
          "blocks": [
            {
              "kind": "p",
              "text": "Üçgeni, dik açı C'de olacak şekilde ABC olarak etiketleyin. Böylece AC [[a]] dik kenarı, BC [[b]] dik kenarı ve AB [[c]] hipotenüsü olur. D noktası AB üzerinde yer alır ve CD doğru parçası AB'yi dik açıyla keser; CD, [[h]] yüksekliğidir. C ve D'deki küçük kare işaretler her iki dik açıyı da gösterir.",
            },
            {
              "kind": "p",
              "text": "CD yüksekliği büyük üçgeni iki küçük dik üçgene böler: ACD ve BCD; her birinin dik açısı D'dedir. İkisi de ABC orijinal üçgenine ve birbirine benzer; ispat ve izdüşüm bölümlerinin dayandığı gerçek budur.",
            },
            {
              "kind": "p",
              "text": "Kendi çiziminizi yaparken C'deki dik açıyla başlayın, dik kenarları çizin, sonra serbest uçları birleştirerek hipotenüsü oluşturun. Yüksekliği en son indirin ve hipotenüsle dik kesiştiğini kontrol edin. a, b, c, h sırasıyla etiketlemek sonraki her hesaplamayı düzenli tutar.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "C'de dik açısı olan ABC üçgeni; CD yüksekliği AB hipotenüsüne çizilmiş; AC a'ya, BC b'ye, AB c'ye, CD h'ye eşit",
            "caption": "CD yüksekliği C dik açısından AB hipotenüsüne iner; h, (a x b) / c'ye eşittir.",
          },
        },
        "sec-proof": {
          "h2": "Yükseklik Formülü Neden İşe Yarıyor?",
          "blocks": [
            {
              "kind": "p",
              "text": "Formül, üçgenin alanından gelir. Alan, taban çarpı yüksekliğin yarısına eşittir ve bir dik üçgen iki uygun taban-yükseklik çifti sunar. Dik kenarlar taban ve yükseklik olarak alındığında:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{a \\times b}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenüs taban ve yükseklik yükseklik olarak alındığında:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{c \\times h}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Her iki ifade de aynı üçgeni tarif eder, bu yüzden onları eşitleyin:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "2 ile çarpın, sonra [[c]] değerine bölün:",
            },
            {
              "kind": "p",
              "text": "[[[ab=ch]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Bir üçgen, alanı sabit kalırken farklı taban-yükseklik çiftleriyle ölçülebilir; bu yüzden iki ifadeyi eşitlemek geçerlidir ve cebir [[h]] değerini yalnız bırakır. Şema aynı üçgeni iki kez gösterir: birinde taban [[a]] ve yükseklik [[b]], diğerinde taban [[c]] ve yükseklik [[h]].",
            },
            {
              "kind": "p",
              "text": "İspat ayrıca yüksekliğin neden her zaman dik kenarlardan kısa olduğunu açıklar. [[c]] en uzun kenar olduğundan, [[ab]] ifadesini üç uzunluğun en büyüğüne bölmek her iki dik kenardan da küçük bir değer vermelidir. Bu sayfadaki izdüşümlerden benzer üçgenlere kadar her sonraki formül, bu tek alan fikrinin bir çeşididir.",
            },
          ],
          "image": {
            "src": "altitude-two-base-height.svg",
            "alt": "Aynı dik üçgen iki kez çizilmiş: önce taban a ve yükseklik b ile, sonra taban c ve yükseklik h ile",
            "caption": "Aynı üçgen, iki taban-yükseklik çifti: alan ab/2 ve ch/2'ye eşittir, yani h, ab/c'ye eşittir.",
          },
        },
        "sec-examples": {
          "h2": "Kenarlardan Dik Üçgen Yüksekliği İçin Çözümlü Örnekler",
          "blocks": [
            {
              "kind": "p",
              "text": "Aşağıdaki yedi örnek, klasik tam sayılı üçlülerden ondalıklara, eşit kenarlara ve karışık birimlere uzanır. Her biri aynı ritmi izler: verilenleri belirtin, formülde yerine koyun, sadeleştirin ve birimle bitirin. Bunları sırayla okumak, herhangi bir cevaba güvenmeden önce birimleri ve makullüğü kontrol etme alışkanlığı kazandırır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: Klasik 3-4-5 Üçgeni",
            },
            {
              "kind": "p",
              "text": "Verilenler [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Yükseklik [[2.4\\text{ cm}]]'dir. 3-4-5 en yaygın Pisagor üçlüsü ve 2.4 düzgün bir ondalık olduğundan, bu örnek ezberlemeye değer.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: 5-12-13 Üçgeni",
            },
            {
              "kind": "p",
              "text": "Verilenler [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Tam yükseklik [[60/13]] metredir, yaklaşık 4.615 m. Erken yuvarlama sonraki çalışmalara hata taşıdığından, hassasiyet önemliyken kesri koruyun.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: 8-15-17 Üçgeni",
            },
            {
              "kind": "p",
              "text": "Verilenler [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{8 \\times 15}{17}=\\frac{120}{17}\\approx 7.059\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Yükseklik yaklaşık [[7.059\\text{ cm}]]'dir. Dik kenarları 15 ve 8 olarak değiştirmek aynı çarpımı verir; bu, formülün dik kenarlara simetrik davrandığını doğrular.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Eşit Dik Kenarlar ve 45-45-90 Üçgeni",
            },
            {
              "kind": "p",
              "text": "Verilenler [[a=10\\text{ cm}]], [[b=10\\text{ cm}]], [[c=10\\sqrt{2}\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{10 \\times 10}{10\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7.071\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Eşit dik kenarlar 45-45-90 üçgeni oluşturur ve yükseklik onu iki eş parçaya böler. Kuramsal çalışmalarda tam biçim [[5\\sqrt{2}]] cm, ondalıktan daha iyidir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Ondalık Ölçümler",
            },
            {
              "kind": "p",
              "text": "Verilenler [[a=1.5\\text{ m}]], [[b=2\\text{ m}]], [[c=2.5\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{1.5 \\times 2}{2.5}=\\frac{3}{2.5}=1.2\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Yükseklik [[1.2\\text{ m}]]'dir. Ondalıklar özel işlem gerektirmez: her zamanki gibi çarpıp bölün ve cevapta aynı birimi koruyun.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Önce Eşitlenmesi Gereken Karışık Birimler",
            },
            {
              "kind": "p",
              "text": "Verilenler [[a=30\\text{ cm}]], [[b=0.4\\text{ m}]], [[c=0.5\\text{ m}]]; önce santimetreye çevirin: [[a=30\\text{ cm}]], [[b=40\\text{ cm}]], [[c=50\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{30 \\times 40}{50}=\\frac{1200}{50}=24\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Önce çevirmek temiz bir [[24\\text{ cm}]] verir. Çevrilmemiş metreler cevabı 100 kat şişirirdi.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Daha Büyük 20-21-29 Üçgeni",
            },
            {
              "kind": "p",
              "text": "Verilenler [[a=20\\text{ ft}]], [[b=21\\text{ ft}]], [[c=29\\text{ ft}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{20 \\times 21}{29}=\\frac{420}{29}\\approx 14.483\\text{ ft}]]]",
            },
            {
              "kind": "p",
              "text": "Yükseklik yaklaşık [[14.483\\text{ ft}]]'tir; hipotenüse inen yükseklik her zaman olduğu gibi, 20 ft'lik kısa dik kenarın rahatça altındadır.",
            },
          ],
          "image": {
            "src": "altitude-345.svg",
            "alt": "Dik kenarları 3 ve 4, hipotenüsü 5 olan dik üçgen; hipotenüse 2.4 yüksekliği çizilmiş",
            "caption": "Ölçekli çizilmiş bir 3-4-5 üçgeni: h yüksekliği (3 x 4) / 5 = 2.4'e eşittir.",
          },
        },
        "sec-two-sides": {
          "h2": "Yalnızca İki Kenar Bilindiğinde Yükseklik Nasıl Bulunur",
          "blocks": [
            {
              "kind": "p",
              "text": "Canlı hesaplayıcı üç kenarı da ister, ancak Pisagor teoremiyle üçüncüyü bulmak için iki kenar yeterlidir. Hangi kenarları bildiğinize bağlı olarak iki durum vardır ve ikisi de tanıdık yükseklik formülüyle biter.",
            },
            {
              "kind": "p",
              "text": "Her iki durumda da mantık aynıdır: Pisagor teoremi eksik kenarı geri kazandırır, yükseklik formülü gerisini halleder. Durum 1, hipotenüsü bulmak için dik kenarları karekök altında toplar; Durum 2 ise bir dik kenarı bulmak için çıkarma yapar. Durum 2'nin yalnızca bilinen kenar gerçekten hipotenüsse işe yaradığını unutmayın; [[a>c]] ise karekökün içi negatif olur ve böyle bir üçgen yoktur.",
            },
            {
              "kind": "h3",
              "text": "Durum 1: Her İki Dik Kenar Biliniyor",
            },
            {
              "kind": "p",
              "text": "[[a=7]] ve [[b=24]] alın. Önce hipotenüsü bulun: [[[c=\\sqrt{7^2+24^2}=\\sqrt{49+576}=\\sqrt{625}=25]]] Ardından yükseklik gelir: [[[h=\\frac{7 \\times 24}{25}=\\frac{168}{25}=6.72]]]",
            },
            {
              "kind": "h3",
              "text": "Durum 2: Bir Dik Kenar ve Hipotenüs Biliniyor",
            },
            {
              "kind": "p",
              "text": "[[a=8]] ve [[c=10]] alın. Düzenlenmiş Pisagor teoremiyle eksik dik kenarı bulun: [[[b=\\sqrt{c^2-a^2}=\\sqrt{100-64}=\\sqrt{36}=6]]] Ardından yükseklik şudur: [[[h=\\frac{8 \\times 6}{10}=\\frac{48}{10}=4.8]]]",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcı üç ölçüm beklediğinden bunları eğitsel alternatifler olarak görün. Özel bir <a href=\"/right-triangle-side-calculator/\">kenar hesaplayıcı</a>, buraya devam etmeden önce eksik uzunluğu bulabilir.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Yükseklik Hesabınızı Nasıl Doğrularsınız",
          "blocks": [
            {
              "kind": "p",
              "text": "Üç bağımsız kontrol bir yükseklik cevabını doğrular. Aşağıdaki üçü de yüksekliği 2.4 olan 3-4-5 üçgenini kullanır. Yanlış bir yükseklik üzerine kurulan her şeyi sessizce bozacağından, bir cevap sonraki çalışmalara girecekse bunlardan en az birini kullanın.",
            },
            {
              "kind": "h3",
              "text": "Yöntem 1: Alan Karşılaştırması",
            },
            {
              "kind": "p",
              "text": "Alanı her iki yoldan da hesaplayın ve uyuşmasını isteyin. Dik kenarlardan: [[[A=\\frac{3 \\times 4}{2}=6]]] Hipotenüs ve yükseklikten: [[[A=\\frac{5 \\times 2.4}{2}=6]]] Eşleşen alanlar yüksekliğin kendisini doğrular.",
            },
            {
              "kind": "h3",
              "text": "Yöntem 2: Hipotenüs İzdüşümleri",
            },
            {
              "kind": "p",
              "text": "Hipotenüsü dik kenar izdüşümlerine bölün: [[p=\\frac{a^2}{c}=\\frac{9}{5}=1.8]] ve [[q=\\frac{b^2}{c}=\\frac{16}{5}=3.2]]. Yükseklik bunların geometrik ortalamasıdır: [[[h=\\sqrt{1.8 \\times 3.2}=\\sqrt{5.76}=2.4]]] 2.4'ü farklı bir formülden geri kazanmak güçlü bir kanıttır.",
            },
            {
              "kind": "h3",
              "text": "Yöntem 3: Pisagor Kontrolü",
            },
            {
              "kind": "p",
              "text": "Kenarların bir dik üçgen oluşturduğunu doğrulayın: [[[3^2+4^2=9+16=25=5^2]]] Bu, yüksekliği değil kenar uzunluklarını doğrular. Bir soru size kenarları verdiğinde önce bunu çalıştırın, ardından yüksekliği doğrulamak için alan veya izdüşüm kontrolünü kullanın.",
            },
          ],
        },
        "sec-vs-projections": {
          "h2": "Kenarlardan Yükseklik ile İzdüşümlerden Yükseklik",
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik iki yolla bulunabilir. Bu sayfadaki kenar yöntemi, üç kenar uzunluğundan başlayarak [[h=\\frac{ab}{c}]] formülüdür. İzdüşüm yöntemi, yüksekliğin hipotenüsü böldüğü iki parçadan başlayarak [[h=\\sqrt{pq}]] formülüdür. İkisi de aynı doğru parçasını tarif eder ve aynı üçgen için her zaman uyuşur; seçim hangi ölçümlere sahip olduğunuza bağlıdır. İkinci yol için <a href=\"/right-triangle-altitude-from-projections-calculator/\">izdüşümlerden yükseklik hesaplayıcı</a> sayfasına bakın.",
            },
          ],
          "table": {
            "headers": [
              "Yöntem",
              "Gerekli girdiler",
              "Formül",
              "En uygun kullanım",
            ],
            "rows": [
              [
                "Kenarlardan yükseklik",
                "a ve b dik kenarları, c hipotenüsü",
                "h = ab / c",
                "Kenar uzunlukları biliniyor; karekök gerekmez",
              ],
              [
                "İzdüşümlerden yükseklik",
                "p ve q hipotenüs parçaları",
                "h = square root of (p times q)",
                "Yüksekliğin ayağı hipotenüsü bilinen parçalara böler",
              ],
            ],
          },
          "image": {
            "src": "altitude-projections-similar.svg",
            "alt": "h yüksekliğini ve p ile q izdüşümlerini gösteren dik üçgen; iki küçük benzer üçgenle birlikte",
            "caption": "Yükseklik hipotenüsü p ve q'ya böler; kenar formülü ile izdüşüm formülü aynı h değerini verir.",
          },
        },
        "sec-area-rel": {
          "h2": "Yükseklik, Alan ve Hipotenüs Arasındaki İlişki",
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik, alan ve hipotenüs, tek bir alanın iki ifadesiyle birbirine bağlanır. Dik kenarlardan: [[[A=\\frac{ab}{2}]]] Hipotenüs ve yükseklikten: [[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "İkinci ifadeyi [[h]] için çözmek kullanışlı bir düzenlemeyi verir: [[[h=\\frac{2A}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Bu, alan doğrudan bilindiğinde ikinci bir yol sunar. Alanı [[54\\text{ cm}^2]], hipotenüsü [[15\\text{ cm}]] olan bir üçgen için [[[h=\\frac{2 \\times 54}{15}=\\frac{108}{15}=7.2\\text{ cm}]]]; bu, kenar formülünün 9-12-15 üçgeni için verdiği cevapla aynıdır. Önce alana ihtiyacınız varsa bir <a href=\"/right-triangle-area-calculator/\">alan hesaplayıcı</a> bu adımı halleder ve [[h]] bilindikten sonra <a href=\"/right-triangle-area-from-altitude-calculator/\">yükseklikten alan hesaplayıcı</a> hesabı tersine çevirir.",
            },
            {
              "kind": "p",
              "text": "Bu yol, birçok ders kitabı sorusunda olduğu gibi sorunun alanı doğrudan verdiği durumlarda ya da alanın önceki bir bölümde hesaplandığı durumlarda parlar. Tek tek dik kenarları aramak yerine, alanın iki katını hipotenüse bölersiniz ve tek satırda bitirirsiniz. Farklı bir başlangıç noktasından ulaşılan, kenar formülünün verdiği yükseklikle aynı yüksekliktir.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Hipotenüse İnen Yüksekliğin Özel Özellikleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenüse inen yükseklik her zaman her iki dik kenardan ve hipotenüsün kendisinden kısadır, çünkü [[b<c]] olduğunda [[h=ab/c]] ifadesi [[a]] değerinin altında kalır. Eşit dik kenarlar, yüksekliğin hipotenüsü ikiye böldüğü simetrik bir 45-45-90 üçgeni verir. Sabit bir hipotenüs için yükseklik, dik kenarlar eşit olduğunda en büyüktür: hipotenüs 10 iken 45-45-90 üçgeni [[h=5]] verir, oysa 6-8-10 üçgeni yalnızca 4.8 verir.",
            },
            {
              "kind": "p",
              "text": "Aynı hipotenüsün hiçbir bölünmesi bu maksimumu geçemez; bu, [[h \\le \\frac{c}{2}]] eşitsizliğidir ve eşitlik yalnızca 45-45-90 durumunda sağlanır. Ölçekleme de basit davranır: her kenarı iki katına çıkarmak yüksekliği iki katına çıkarır; böylece 2.4'lük 3-4-5, 4.8'lik 6-8-10 olur. Son olarak, yükseklik üçgeni orijinaline benzer iki küçük üçgene böler; izdüşüm ve alan ilişkilerinin hepsinin uyuşmasının nedeni budur.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Hipotenüsü 10 olan iki dik üçgen: yüksekliği 5 olan bir 45-45-90 üçgeni ve yüksekliği 4.8 olan bir 6-8-10 üçgeni",
            "caption": "Aynı hipotenüs 10: eşit dik kenarlar en büyük yüksekliği, 5'i verir.",
          },
        },
        "sec-mistakes": {
          "h2": "Dik Üçgen Yüksekliği Hesaplarken Yapılan Yaygın Hatalar",
          "blocks": [
            {
              "kind": "p",
              "text": "Şu dokuz hatadan kaçının, neredeyse her yükseklik hesabı sorunsuz gider.",
            },
            {
              "kind": "steps",
              "steps": [
                "Hipotenüsü dik kenarla karıştırmak. Çözüm: önce en uzun kenarı c olarak seçin; 3-4-5 üçgeninde 5, c olmalıdır.",
                "Üç kenarı da çarpmak. abc'yi hesaplamanın burada geometrik bir anlamı yoktur. Çözüm: yalnızca dik kenarları çarpın, sonra hipotenüse bölün.",
                "c'ye bölmeyi unutmak. ab'de durmak bir uzunluk değil, alanın iki katını bırakır. Çözüm: her zaman bölme ile bitirin.",
                "Birimleri karıştırmak. a'yı santimetre, c'yi metre olarak girmek bölmeyi sessizce bozar. Çözüm: önce her şeyi tek birime çevirin.",
                "Dik üçgen oluşturmayan kenarları kullanmak. Formül bir dik açı varsayar; bu yüzden 2, 3, 4 saçmalık verir. Çözüm: önce a^2 + b^2 = c^2 kontrolünü yapın.",
                "Yüksekliği dik kenarlardan biriyle karıştırmak. Yüksekliği soran ders kitapları genellikle hipotenüse ineni kasteder. Çözüm: sorunun hangi yüksekliği istediğini doğrulayın.",
                "Ara değerleri erken yuvarlamak. Hesabın ortasında 60/13'ü 4.6'ya yuvarlamak hata enjekte eder. Çözüm: yalnızca son cevabı yuvarlayın.",
                "Alan formülünü yanlış kullanmak. Alan = c çarpı h yazmak, yarı olmadan cevabı ikiye katlar. Çözüm: h için çözerken Alan = ch/2 formülünü kullanın.",
                "Hipotenüse inen yüksekliği bir dik kenara göre yükseklikle karıştırmak. Bunlar farklı doğru parçalarıdır. Çözüm: hipotenüse inen yükseklik, h = ab/c olan daha kısa iç doğru parçasıdır.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Dik Üçgen Yüksekliği Hesaplamalarının Pratik Kullanımları",
          "blocks": [
            {
              "kind": "p",
              "text": "Öğrenciler bu yükseklikle alan, benzerlik ve geometrik ortalama konularındaki geometri ödevlerinde karşılaşır; öğretmenler ise tek bir şemanın hem [[ab/2]] hem de [[ch/2]] ifadelerini taşıması sayesinde Pisagor teoremini alan formülleriyle tek resimde birleştirmek için kullanır. Teknik ressamlar ve tasarımcılar, üçgen bir panel veya braket yüksekliğine göre boyutlandırılması gerektiğinde kullanır; üçgen çapraz bağlantı yerleşimlerinde bazen bir düğüm ile bir eleman arasındaki en kısa çapraz mesafe gerekir.",
            },
            {
              "kind": "p",
              "text": "Dik üçgen görüş hatlarıyla çalışan haritacılar, hesaplanan mesafeleri ölçülenlerle karşılaştırmak için aynı ilişkiyi kullanır. Bunları idealleştirilmiş ölçümlerle matematiksel modeller olarak görün: gerçek mühendislik veya inşaat işleri, herhangi bir formül sonucuna sahada güvenilmeden önce uygun ölçüm yöntemleri, belirtilmiş tasarım varsayımları ve mesleki standartlar gerektirir.",
            },
            {
              "kind": "p",
              "text": "Sınıfta yükseklik aynı zamanda bir köprü konusudur: Pisagor teoremini, alan formüllerini ve benzer üçgenleri tek şekilde birleştirir. İyi çizilmiş tek bir şema bütün bir dersi taşıyabilir; bu yapı ders kitaplarında bu yüzden sıkça görünür.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Çözümlü Alıştırma Soruları",
          "blocks": [
            {
              "kind": "p",
              "text": "Her soruyu önce kendiniz deneyin, sonra aşağıdaki çözümlü cevapları kontrol edin.",
            },
            {
              "kind": "h3",
              "text": "Soru 1: Temel Tam Sayılar",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin dik kenarları 6 cm ve 8 cm, hipotenüsü 10 cm'dir. Hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 2: Pisagor Üçlüsü",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin dik kenarları 12 m ve 16 m, hipotenüsü 20 m'dir. Hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 3: Ondalık Ölçümler",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin dik kenarları 4.5 in ve 6 in, hipotenüsü 7.5 in'dir. Hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 4: Eşit Dik Kenarlar",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin iki eşit dik kenarı vardır, her biri 14 ft. Önce hipotenüsü, sonra hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 5: Birim Dönüşümü",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin kenarları 2.4 m, 70 cm ve 2.5 m'dir. Önce birimleri dönüştürün, sonra hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Sorularının Cevapları",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Ölçeklenmiş 3-4-5 örüntüsü temiz bir ondalık verir.",
            },
            {
              "kind": "p",
              "text": "2. [[12^2+16^2=144+256=400=20^2]] üçlüyü doğrular, ardından [[h=\\frac{12 \\times 16}{20}=\\frac{192}{20}=9.6\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\frac{4.5 \\times 6}{7.5}=\\frac{27}{7.5}=3.6\\text{ in}]]. Üçlü tutarlı olduğunda ondalıklar düzgün bölünür.",
            },
            {
              "kind": "p",
              "text": "4. [[c=\\sqrt{14^2+14^2}=14\\sqrt{2}\\text{ ft}]], ardından [[h=\\frac{14 \\times 14}{14\\sqrt{2}}=7\\sqrt{2}\\approx 9.899\\text{ ft}]]; 45-45-90 için beklendiği gibi tam olarak hipotenüsün yarısı.",
            },
            {
              "kind": "p",
              "text": "5. Santimetre cinsinden: [[a=240]], [[b=70]], [[c=250]] ve [[2.4^2+0.7^2=5.76+0.49=6.25=2.5^2]] sağlanır. Ardından [[h=\\frac{240 \\times 70}{250}=\\frac{16800}{250}=67.2\\text{ cm}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "İlgili Dik Üçgen Hesaplayıcıları",
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik formülü elinizdeyken, bildiklerinize göre sonraki aracı seçin. Kenarlar yerine hipotenüs parçalarını biliyorsanız izdüşüm hesaplayıcısına geçin. Yüksekliği biliyor ve alanı istiyorsanız <a href=\"/right-triangle-area-from-hypotenuse-and-altitude-calculator/\">hipotenüs ve yükseklikten alan</a> aracı alan bölümündeki hesabı tersine çevirir. Aşağıdaki beş ilgili hesaplayıcı her komşu hesabı kapsar. Elinizdeki ölçümlere uyan araçla başlayın ve her sonucun bir sonrakini doğrulamasına izin verin.",
            },
          ],
        },
      },
      "faqHeading": "Sık Sorulan Sorular",
      "faqs": [
        {
          "question": "Üç kenardan yükseklik formülü nedir?",
          "answer": "Formül [[h=\\frac{ab}{c}]]'dir; burada [[a]] ve [[b]] iki dik kenarı, [[c]] ise hipotenüsü gösterir. Dik kenarları çarpın ve sonucu hipotenüse bölün. Elde edilen sonuç, girdiğiniz kenarlarla aynı birimde ölçülen bir uzunluktur.",
        },
        {
          "question": "Bir dik üçgenin yüksekliği nasıl bulunur?",
          "answer": "Dik açıyı belirleyin, iki dik kenarı [[a]] ve [[b]], hipotenüsü [[c]] olarak etiketleyin ve tüm birimlerin eşleştiğinden emin olun. Ardından [[h=\\frac{ab}{c}]] değerini hesaplayın. 3-4-5 üçgeni için bu, her iki dik kenardan da kısa bir parça olan [[h=\\frac{12}{5}=2.4]] değerini verir.",
        },
        {
          "question": "Hipotenüs neden paydada?",
          "answer": "Bu, alan ispatından gelir. Alan, dik kenarlar kullanılarak [[ab/2]], hipotenüs taban olarak kullanılarak [[ch/2]]'ye eşittir. İkisini eşitlemek [[ab=ch]] verir ve [[h]] için çözmek [[c]] değerini paydaya koyar. Belirli bir alanda hipotenüs ne kadar uzunsa yükseklik o kadar kısa olur.",
        },
        {
          "question": "Yüksekliği yalnızca iki kenar kullanarak hesaplayabilir miyim?",
          "answer": "Evet, bir ekstra adımla. Her iki dik kenarı biliyorsanız önce [[c=\\sqrt{a^2+b^2}]] ile hipotenüsü bulun. Bir dik kenarı ve hipotenüsü biliyorsanız diğer dik kenarı [[b=\\sqrt{c^2-a^2}]] ile bulun. Ardından her zamanki gibi [[h=\\frac{ab}{c}]] formülünü kullanın.",
        },
        {
          "question": "Yükseklik ile yükseklik aynı şey midir?",
          "answer": "Hangi yükseklik kastedildiğine bağlıdır. Yükseklik genellikle seçilen tabana olan dik mesafe anlamına gelir; bu yüzden hipotenüse inen yükseklik, hipotenüs taban olduğundaki yüksekliktir. Bir dik kenar taban olarak seçilirse yükseklik diğer dik kenardır; bu tamamen farklı bir parçadır.",
        },
        {
          "question": "Yükseklik her zaman dik kenarlardan kısa mıdır?",
          "answer": "Evet, hipotenüse inen yükseklik her zaman aynı üçgenin her iki dik kenarından da kısadır. Dik açı köşesinden hipotenüse giden en kısa parçadır; oysa her dik kenar aynı kenara giden daha uzun bir yoldur. Hipotenüsün kendisinden de kısadır.",
        },
        {
          "question": "Bu formülü her üçgen için kullanabilir miyim?",
          "answer": "Hayır, yalnızca dik üçgenler için. Türetme, dik kenarların dik olmasına dayanır; bu da alanı [[ab/2]] yapar. Dar açılı veya geniş açılı bir üçgende yüksekliği bunun yerine genel alan formülü veya trigonometriyle bulun. Her zaman önce dik açıyı doğrulayın.",
        },
        {
          "question": "Kenar uzunluklarım Pisagor teoremini sağlamazsa ne olur?",
          "answer": "O zaman bir dik üçgen oluşturmazlar ve formül geçerli değildir. En uzun kenarın hipotenüs olması gerektiğinden, kenarları yeniden ölçün veya etiketlemeyi yeniden kontrol edin. Küçük yuvarlama farkları sorun değildir, ancak büyük bir uyumsuzluk üçgenin dik açılı olmadığı anlamına gelir.",
        },
        {
          "question": "3-4-5 üçgeninin yüksekliğini nasıl bulurum?",
          "answer": "Dik kenarları çarpıp hipotenüse bölün: [[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]] (veya kenarlarınız hangi birimi kullanıyorsa). 3-4-5 üçgeni, üç kenarı da tam sayı olduğu için klasik çözümlü örnektir.",
        },
        {
          "question": "5-12-13 üçgeninin yüksekliği nedir?",
          "answer": "Kenarların birimiyle [[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615]]'tir. Tam hassasiyet gerektiğinde [[60/13]] tam kesrini koruyun ve 4.615'e yalnızca nihai raporlanan cevapta yuvarlayın.",
        },
        {
          "question": "Yükseklik alanla nasıl ilişkilidir?",
          "answer": "Alan iki şekilde yazılabilir: [[A=\\frac{ab}{2}]] ve [[A=\\frac{ch}{2}]]. İkincisini düzenlemek [[h=\\frac{2A}{c}]] verir; bu yüzden alanı ve hipotenüsü bilmek aynı yüksekliğe giden başka bir yoldur. Her iki biçim de aynı üçgeni tarif eder.",
        },
        {
          "question": "Kenarlardan yükseklik ile izdüşümlerden yükseklik arasındaki fark nedir?",
          "answer": "Kenarlardan yükseklik, üç kenar uzunluğuyla [[h=\\frac{ab}{c}]] formülünü kullanır. İzdüşümlerden yükseklik, iki hipotenüs parçasıyla [[h=\\sqrt{pq}]] formülünü kullanır. İkisi de aynı parçayı bulur; seçim hangi ölçümlere sahip olduğunuza bağlıdır.",
        },
      ],
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları Keşfedin",
      "relatedIntro": "Elinizdeki ölçümlere uyan hesaplayıcıyı seçin.",
      "relatedItems": [
        "Dik Üçgen Yükseklik Hesaplayıcı",
        "İzdüşümlerden Dik Üçgen Yükseklik Hesaplayıcı",
        "Dik Üçgen İzdüşüm Hesaplayıcı",
        "Dik Üçgen Alan Hesaplayıcı",
        "Yükseklikten Dik Üçgen Alan Hesaplayıcı",
      ],
    },
};
