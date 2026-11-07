// fiveTwelveThirteenGuideTranslations.btr.ts: 5-12-13 Triangle
// Guide (Page 43 of 45) translation.
export const FIVETWELVETHIRTEEN_B6_TR = {
  "tr": {
      "meta": {
        "title": "5-12-13 Üçgen Hesaplayıcı - Kenarları Ölçeklendir, Alan ve Çevre Bul",
        "description": "5-12-13 üçgenini ölçeklendirin: pozitif bir ölçek faktörü k girerek 5k, 12k ve 13k kenarlarını, ayrıca 30k kare alanı ve 30k çevreyi bulun.",
        "primaryKeyword": "5-12-13 Üçgen Hesaplayıcı",
        "slug": "5-12-13-triangle-calculator",
      },
      "tocHeading": "Bölüm Gezintisi",
      "tocItems": {
        "sec-intro": "5-12-13 Üçgen Hesaplayıcı",
        "sec-calculate": "5-12-13 Üçgenini Ölçeklendirin ve Ölçümlerini Hesaplayın",
        "sec-what": "5-12-13 Üçgeni Nedir?",
        "sec-pythagorean": "5-12-13 Neden Bir Pisagor Üçlüsüdür?",
        "sec-sides": "5-12-13 Üçgeninin Üç Kenarını Anlamak",
        "sec-ratio": "5-12-13 Kenar Oranını Anlamak",
        "sec-scale-factor": "5-12-13 Üçgeninde Ölçek Faktörü Nedir?",
        "sec-leg-a": "Kısa Dik Kenarı Hesaplama Formülü",
        "sec-leg-b": "Uzun Dik Kenarı Hesaplama Formülü",
        "sec-hypotenuse": "Hipotenüsü Hesaplama Formülü",
        "sec-area": "Ölçeklendirilmiş Bir 5-12-13 Üçgeninin Alanı Nasıl Hesaplanır?",
        "sec-perimeter": "Ölçeklendirilmiş Bir 5-12-13 Üçgeninin Çevresi Nasıl Hesaplanır?",
        "sec-find-k": "Bilinen Bir Kenardan Ölçek Faktörü Nasıl Bulunur?",
        "sec-step-example": "5-12-13 Üçgenini Ölçeklendirmenin Adım Adım Örneği",
        "sec-examples": "Farklı Ölçek Faktörlerinin Çözümlü Örnekleri",
        "sec-right-angle": "5-12-13 Üçgeni Neden Her Zaman 90 Derecelik Açıyı Korur?",
        "sec-euclid": "5-12-13 Üçlüsü Öklid Formülüyle Nasıl Oluşturulur?",
        "sec-applications": "5-12-13 Üçgeninin Geometri ve Ölçümdeki Uygulamaları",
        "sec-vs-triples": "5-12-13 ile Diğer Pisagor Üçlüleri Arasındaki Fark",
        "sec-vs-special": "5-12-13, 45-45-90 ve 30-60-90 Üçgenleri Arasındaki Fark",
        "sec-mistakes": "5-12-13 Üçgen Hesaplayıcıyı Kullanırken Yapılan Yaygın Hatalar",
        "sec-verify": "Ölçeklendirilmiş Bir 5-12-13 Üçgeni Nasıl Doğrulanır?",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları",
        "sec-faq": "Sıkça Sorulan Sorular",
      },
      "sections": {
        "sec-intro": {
          "h2": "5-12-13 Üçgen Hesaplayıcı",
          "blocks": [
            {
              "kind": "p",
              "text": "Bir 5-12-13 üçgenini ölçeklendirin ve kenarlarını, alanını ve çevresini bulun.",
            },
            {
              "kind": "p",
              "text": "Bir 5-12-13 üçgeni, kenar uzunlukları [[5 : 12 : 13]] oranını izleyen bir dik üçgendir. Bir Pisagor üçlüsüdür, çünkü tam sayı kenarları Pisagor teoremini sağlar: [[5^2 + 12^2 = 13^2]], çünkü [[25 + 144 = 169]]. Uzunluğu 13 olan kenar hipotenüstür ve uzunluğu 5 ve 12 olan kenarlar, dik açıda birleşen dik kenarlardır.",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcı bu üçgeni pozitif bir ölçek faktörü [[k]] ile ölçeklendirir, böylece ölçeklendirilmiş kenarlar [[a = 5k]], [[b = 12k]] ve [[c = 13k]] olur. Ayrıca alanı, [[A = 30k^2]], ve çevreyi, [[P = 30k]], hesaplar, yani tek bir girdi beş sonucun tamamını verir. Genel bir dik üçgen için <a href=\"/right-triangle-calculator/\">dik üçgen hesaplayıcı</a> sayfasını kullanın.",
            },
            {
              "kind": "p",
              "text": "Örneğin, [[k = 2]] ile kenarlar [[a = 10]], [[b = 24]] ve [[c = 26]] olur, alan [[A = 120]] birim kare ve çevre [[P = 60]] birimdir.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "5-12-13 Üçgenini Ölçeklendirin ve Ölçümlerini Hesaplayın",
          "blocks": [
            {
              "kind": "p",
              "text": "Tek girdi, beş sonuç: k değerini girin ve ölçeklendirilmiş üçgeni okuyun.",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcının tek bir modu vardır: 5-12-13 Üçgenini Ölçeklendir. Girdi kutusuna pozitif bir ölçek faktörü [[k]] girin ve Hesapla düğmesine basın. Araç 5, 12 ve 13 sayılarını [[k]] ile çarpar, ardından ölçeklendirilmiş kenarlardan alanı ve çevreyi hesaplar. Girdiyi temizleyip yeniden başlamak için Sıfırla düğmesine basın.",
            },
            {
              "kind": "p",
              "text": "Ölçek faktörü, orijinal üçgeni büyüten ya da küçülten sayıdır. [[k = 1]] ile orijinal 5, 12, 13 üçgenini elde edersiniz. [[k]] 1 değerinden büyükse üçgen büyür ve [[k]] 0 ile 1 arasındaysa küçülür, ancak şekil asla değişmez.",
            },
            {
              "kind": "p",
              "text": "Her sonuç aynı [[k]] değerinden gelir, bu nedenle beş çıktı her zaman birbiriyle uyumludur. [[k]] sıfır ya da negatifse hesaplayıcı bunu kabul etmez, çünkü sıfır dejenere bir şekil verir ve negatif değerler kenar uzunluklarını tanımlayamaz.",
            },
          ],
          "table": {
            "headers": [
              "Ölçüm",
              "Formül",
              "Sonuç",
            ],
            "rows": [
              [
                "Kısa dik kenar",
                "5k",
                "Ölçeklendirilmiş a kenarı",
              ],
              [
                "Uzun dik kenar",
                "12k",
                "Ölçeklendirilmiş b kenarı",
              ],
              [
                "Hipotenüs",
                "13k",
                "Ölçeklendirilmiş c kenarı",
              ],
              [
                "Alan",
                "30k²",
                "Üçgenin alanı",
              ],
              [
                "Çevre",
                "30k",
                "Üçgenin çevresi",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "5-12-13 Üçgeni Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tam sayı kenarları 5:12:13 oranında olan bir dik üçgen.",
            },
            {
              "kind": "p",
              "text": "Bir 5-12-13 üçgeni, üç kenarı 5, 12 ve 13 birim olan ya da aynı oranda herhangi bir uzunluk kümesine sahip bir dik üçgendir. En uzun kenar olan 13 hipotenüstür ve 90 derecelik açının karşısında yer alır. Uzunluğu 5 ve 12 olan kenarlar dik kenarlardır ve dik açıda birleşir.",
            },
            {
              "kind": "p",
              "text": "Pisagor üçlüsü olarak adlandırılır, çünkü üç tam sayı [[5^2 + 12^2 = 13^2]] eşitliğini sağlar. Üçgeni dik üçgen yapan şey, bir çizim ya da ölçüm değil, bu tek kontroldür. Kenarları herhangi bir pozitif faktörle ölçeklendirin, oran 5:12:13 olarak kalır, bu nedenle büyütülmüş ya da küçültülmüş üçgen de aynı şekle sahip bir dik üçgen olmaya devam eder.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-main.svg",
            "alt": "Etiketli 5-12-13 dik üçgeni ABC; kısa dik kenar a eşittir 5, uzun dik kenar b eşittir 12, hipotenüs c eşittir 13 ve dik açı işareti",
            "caption": "ABC Üçgeni: a = 5 ve b = 12 dik kenarları dik açıda birleşir ve hipotenüs c = 13 olur.",
          },
        },
        "sec-pythagorean": {
          "h2": "5-12-13 Neden Bir Pisagor Üçlüsüdür?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dik kenarların kareleri toplamı hipotenüsün karesine eşittir.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[5^2 + 12^2 = 13^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[25 + 144 = 169]]]",
            },
            {
              "kind": "p",
              "text": "[[[169 = 169]]]",
            },
            {
              "kind": "p",
              "text": "İki taraf da birbirine eşittir, yani eşitlik tam olarak sağlanır. Bu, Pisagor teoreminin işleyişidir: iki kısa kenarın kareleri toplamı en uzun kenarın karesine eşit olduğunda, en uzun kenarın karşısındaki açı dik açı olmak zorundadır.",
            },
            {
              "kind": "p",
              "text": "13 sayısının hipotenüs olması gerekir, çünkü en uzun kenardır ve hipotenüs her zaman 90 derecelik açının karşısında yer alır. 5 ve 12 sayıları dik kenarlardır. 5, 12 ve 13 tam sayı olduğundan, bu üçlü kesin cevapların önemli olduğu ödev, sınav ve ölçüm çalışmaları için kullanışlıdır.",
            },
            {
              "kind": "p",
              "text": "Bu kontrol, Pisagor teoreminin tersidir: teorem, bir dik üçgenin [[a^2 + b^2 = c^2]] eşitliğini sağladığını söyler ve tersi, kenarları bu eşitliği sağlayan herhangi bir üçgenin bir dik açı içermesi gerektiğini söyler. Çoğu dik üçgenin tüm kenarları tam sayı değildir ve bir üçlüyü özel yapan da budur.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-pythagoras.svg",
            "alt": "25 artı 144 eşittir 169 olduğunu gösteren 5-12-13 üçgeni için Pisagor teoremi diyagramı",
            "caption": "25 + 144 = 169, yani 13 sayısının karşısındaki açı 90 derecedir.",
          },
        },
        "sec-sides": {
          "h2": "5-12-13 Üçgeninin Üç Kenarını Anlamak",
          "blocks": [
            {
              "kind": "p",
              "text": "Üç kenar, üç görev: iki dik kenar ve bir hipotenüs.",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenar [[a]], temel üçgende 5 ölçer. Yaklaşık 22.62 derecelik daha küçük dar açının karşısında yer alır ve üç kenar arasında en kısa olduğu için çoğu öğrencinin ilk fark ettiği kenardır.",
            },
            {
              "kind": "p",
              "text": "Uzun dik kenar [[b]], temel üçgende 12 ölçer. Yaklaşık 67.38 derecelik daha büyük dar açının karşısında yer alır. Hipotenüs [[c]] 13 ölçer, en uzun kenardır ve 90 derecelik açının karşısında yer alır. Üçgen [[k]] ile ölçeklendirildiğinde etiketler aynı sırada kalır: [[a = 5k]], [[b = 12k]] ve [[c = 13k]].",
            },
          ],
          "table": {
            "headers": [
              "Kenar",
              "Temel üçgendeki uzunluk",
              "Konum",
            ],
            "rows": [
              [
                "Kısa dik kenar a",
                "5",
                "22.62° açının karşısında",
              ],
              [
                "Uzun dik kenar b",
                "12",
                "67.38° açının karşısında",
              ],
              [
                "Hipotenüs c",
                "13",
                "90° açının karşısında",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "5-12-13 Kenar Oranını Anlamak",
          "blocks": [
            {
              "kind": "p",
              "text": "5:12:13 oranı, üçgen ne kadar büyürse büyüsün asla değişmez.",
            },
            {
              "kind": "p",
              "text": "[[[5 : 12 : 13]]]",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenar 5 orantılı birimi, uzun dik kenar 12 birimi ve hipotenüs 13 birimi temsil eder.",
            },
            {
              "kind": "p",
              "text": "Ölçeklendirme her parçayı aynı [[k]] ile çarpar, bu nedenle oran, altında aynı şekil olacak biçimde [[[5k : 12k : 13k]]] olur. 5, 12, 13; 10, 24, 26; 15, 36, 39; 20, 48, 52 ve 25, 60, 65 kümelerinin hepsi aynı üçgeni farklı boyutlarda tanımlar, çünkü her küme temel oranın 1, 2, 3, 4 ve 5 ile çarpılmış halidir.",
            },
            {
              "kind": "p",
              "text": "Bu nedenle oran, üçgenin gerçek kimliğidir. Aynı orana sahip iki üçgen benzerdir: açıları aynı, şekilleri aynı, boyutları farklıdır.",
            },
            {
              "kind": "p",
              "text": "Bir ölçüm kümesini test etmek için üç sayıyı da en büyük ortak bölenlerine bölün ve geriye 5, 12, 13 kalıp kalmadığına bakın. 10, 24, 26 için bölen 2 olur ve bölme 5, 12, 13 verir. 15, 36, 39 için bölen 3 olur ve bölme aynı üçlüyü verir. Bölme başka üç sayı bırakırsa küme bir 5-12-13 üçgeni değildir.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-scaled.svg",
            "alt": "Artan boyutlarda 5-12-13, 10-24-26 ve 15-36-39 olarak etiketlenmiş üç benzer üçgen",
            "caption": "Aynı oranlar, aynı açılar: k = 1, k = 2 ve k = 3.",
          },
        },
        "sec-scale-factor": {
          "h2": "5-12-13 Üçgeninde Ölçek Faktörü Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "k, üçgenin boyutunu belirleyen çarpandır.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k,\\quad b = 12k,\\quad c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Bir ölçek faktörü, üç orijinal kenar uzunluğunun tamamını aynı pozitif sayıyla çarpar.",
            },
            {
              "kind": "p",
              "text": "[[k = 1]] ile orijinal üçgeni elde edersiniz. [[k]] 1 değerinden büyükse üçgen büyür ve [[k]] 0 ile 1 arasındaysa küçülür. Ölçek faktörü boyutu değiştirir, şekli değiştirmez: her açı aynı kalır ve her kenar orantılı kalır.",
            },
            {
              "kind": "p",
              "text": "Aynı faktör üç kenarın tamamına uygulanmalıdır. Yalnızca bir ya da iki kenarı ölçeklendirmek oranı bozar, Pisagor kontrolünü bozar ve sonuç artık bir 5-12-13 üçgeni olmaz.",
            },
            {
              "kind": "p",
              "text": "Bir ölçek faktörü, eşleşen kenarların oranı olarak da okunabilir: yeni üçgenin bir kenarını orijinalin eşleşen kenarına bölün ve cevap [[k]] olur. Örneğin, orijinal 12 karşısında 36 olan bir uzun dik kenar [[k = 36 / 12 = 3]] verir. Bu, hesaplayıcının istediği [[k]] değerinin aynısıdır, yalnızca önceden seçilmek yerine bir ölçümden bulunmuştur.",
            },
          ],
          "table": {
            "headers": [
              "Ölçek faktörü",
              "Etki",
              "Örnek kenarlar",
            ],
            "rows": [
              [
                "k = 1",
                "Orijinal üçgen",
                "5, 12, 13",
              ],
              [
                "k = 2",
                "İki katına çıkmış",
                "10, 24, 26",
              ],
              [
                "k = 0.5",
                "Yarıya inmiş",
                "2.5, 6, 6.5",
              ],
              [
                "k = 10",
                "On kat büyük",
                "50, 120, 130",
              ],
            ],
          },
          "image": {
            "src": "five-twelve-thirteen-scale-factor.svg",
            "alt": "k eşittir 2 ile ölçeklendirilmiş 5-12-13 üçgeni; a eşittir 10, b eşittir 24 ve c eşittir 26 kenarlarını gösterir",
            "caption": "k = 2 ile kenarlar 10, 24 ve 26 olur.",
          },
        },
        "sec-leg-a": {
          "h2": "Kısa Dik Kenarı Hesaplama Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Kısa dik kenar, ölçek faktörünün beş katıdır.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k]]]",
            },
            {
              "kind": "p",
              "text": "[[k = 4]] kullanın: [[[a = 5 \\times 4 = 20]]]",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenar 20 birim uzunluğundadır. Her ölçek faktöründe en küçük kenardır, çünkü 5 orandaki en küçük sayıdır.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Uzun Dik Kenarı Hesaplama Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Uzun dik kenar, ölçek faktörünün on iki katıdır.",
            },
            {
              "kind": "p",
              "text": "[[[b = 12k]]]",
            },
            {
              "kind": "p",
              "text": "[[k = 4]] kullanın: [[[b = 12 \\times 4 = 48]]]",
            },
            {
              "kind": "p",
              "text": "Uzun dik kenar 48 birim uzunluğundadır. 12 sayısı 5 sayısından büyük olduğu için kısa dik kenardan uzundur, ancak her pozitif ölçek faktöründe hipotenüsten hâlâ kısadır.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Hipotenüsü Hesaplama Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenüs, ölçek faktörünün on üç katıdır.",
            },
            {
              "kind": "p",
              "text": "[[[c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "[[k = 4]] kullanın: [[[c = 13 \\times 4 = 52]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenüs 52 birim uzunluğundadır. 13 orandaki en büyük sayı olduğu için her pozitif ölçek faktöründe en uzun kenar olarak kalır ve hipotenüs her zaman dik açının karşısında yer alır.",
            },
          ],
        },
        "sec-area": {
          "h2": "Ölçeklendirilmiş Bir 5-12-13 Üçgeninin Alanı Nasıl Hesaplanır?",
          "blocks": [
            {
              "kind": "p",
              "text": "İki dik kenarın çarpımının yarısı alanı verir.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ölçeklendirilmiş kenarları yerine koyun: [[[A = \\frac{(5k)(12k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sadeleştirin: [[[A = \\frac{60k^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{A = 30k^2}]]]",
            },
            {
              "kind": "p",
              "text": "İki dik kenar taban ve yüksekliktir, çünkü dik açıda birleşirler. Çarpımlarını yarıya indirmek üçgenin alanını verir. Ölçek faktörü kare alınır, bu nedenle [[k]] değerini iki katına çıkarmak alanı dört kat büyütür. Alan birim kare ile ölçülür.",
            },
            {
              "kind": "p",
              "text": "[[k = 3]] kullanın: [[[A = 30(3^2) = 270]]] birim kare.",
            },
            {
              "kind": "p",
              "text": "Hipotenüs alan formülüne asla girmez, çünkü bir dik üçgenin alanı iki dik kenarından gelir. [[k = 2]] ile bir kontrol yaparsak dik kenarlar 10 ve 24 olur, yani [[A = (10 \\times 24) / 2 = 120]] birim kare, bu da [[A = 30(2^2) = 120]] ile eşleşir.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-area.svg",
            "alt": "Tabanı 5k, yüksekliği 12k ve alanı 30k kare olan ölçeklendirilmiş bir 5-12-13 üçgeninin alan diyagramı",
            "caption": "k = 2 ile alan 120 birim karedir.",
          },
        },
        "sec-perimeter": {
          "h2": "Ölçeklendirilmiş Bir 5-12-13 Üçgeninin Çevresi Nasıl Hesaplanır?",
          "blocks": [
            {
              "kind": "p",
              "text": "Çevreyi bulmak için üç ölçeklendirilmiş kenarı toplayın.",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Yerine koyun: [[[P = 5k + 12k + 13k]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{P = 30k}]]]",
            },
            {
              "kind": "p",
              "text": "Her kenar sayılır, bu nedenle üçünü de toplayın. Çevre [[k]] ile doğru orantılı büyür: ölçek faktörünü iki katına çıkarmak çevreyi iki katına çıkarır. Çevre birim kare ile değil, doğrusal birimle ölçülür.",
            },
            {
              "kind": "p",
              "text": "[[k = 3]] kullanın: [[[P = 30 \\times 3 = 90]]] birim.",
            },
            {
              "kind": "p",
              "text": "[[k = 2]] ile bir kontrol olarak ölçeklendirilmiş kenarları doğrudan toplayın: [[P = 10 + 24 + 26 = 60]] birim, bu da [[P = 30 \\times 2 = 60]] ile eşleşir. Çevre, alandan farklı bir soruyu yanıtlar: üçgenin içindeki alanı değil, çevresindeki mesafeyi ölçer.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-perimeter.svg",
            "alt": "Kenarları 5k, 12k ve 13k olan ve toplamı 30k eden ölçeklendirilmiş bir 5-12-13 üçgeninin çevre diyagramı",
            "caption": "k = 2 ile çevre 60 birimdir.",
          },
        },
        "sec-find-k": {
          "h2": "Bilinen Bir Kenardan Ölçek Faktörü Nasıl Bulunur?",
          "blocks": [
            {
              "kind": "p",
              "text": "k değerini elle bulmak için bilinen bir kenarı oran sayısına bölün.",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcı [[k]] değerini doğrudan alır, ancak bir kenarı zaten biliyorsanız [[k]] değerini kendiniz de bulabilirsiniz. Bilinen kenarı 5:12:13 oranındaki eşleşen sayıya bölün.",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenar biliniyorsa: [[[k = \\frac{a}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Uzun dik kenar biliniyorsa: [[[k = \\frac{b}{12}]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenüs biliniyorsa: [[[k = \\frac{c}{13}]]]",
            },
            {
              "kind": "p",
              "text": "Örnek 1: [[a = 20]] ile [[k = 20 / 5 = 4]]. Örnek 2: [[b = 36]] ile [[k = 36 / 12 = 3]]. Örnek 3: [[c = 65]] ile [[k = 65 / 13 = 5]]. Bulduğunuz k değerini hesaplayıcıya girerek diğer kenarları, alanı ve çevreyi elde edin.",
            },
            {
              "kind": "p",
              "text": "Bazen [[k]] tam sayı değildir. Örneğin [[b = 30]] ile [[k = 30 / 12 = 2.5]] olur ve diğer kenarlar [[a = 5 \\times 2.5 = 12.5]] ile [[c = 13 \\times 2.5 = 32.5]] olur. [[k]] değerini iki farklı bilinen kenardan hesapladığınızda iki cevap da aynı olmalıdır; aynı değilse ölçümler bir 5-12-13 üçgeni oluşturmaz.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "5-12-13 Üçgenini Ölçeklendirmenin Adım Adım Örneği",
          "blocks": [
            {
              "kind": "p",
              "text": "Ölçek faktörü k = 2, baştan sona adım adım çözüldü.",
            },
            {
              "kind": "p",
              "text": "[[k = 2]] ile başlayın ve ölçeklendirilmiş üçgenin her ölçümünü, her seferinde bir formül kullanarak bulun. Her adım yukarıdaki bölümlerden bir formül kullanır ve sondaki özet tablo sonuçları toplar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kısa dik kenarı bulun: [[a = 5k = 5 \\times 2 = 10]].",
                "Uzun dik kenarı bulun: [[b = 12k = 12 \\times 2 = 24]].",
                "Hipotenüsü bulun: [[c = 13k = 13 \\times 2 = 26]].",
                "Alanı bulun: [[A = 30k^2 = 30 \\times 4 = 120]] birim kare.",
                "Çevreyi bulun: [[P = 30k = 30 \\times 2 = 60]] birim.",
              ],
            },
            {
              "kind": "p",
              "text": "Yeni üçgen orijinal 5:12:13 oranlarını korur: 10, 24 ve 26, 5, 12 ve 13 sayılarının iki katıdır. Dik açıyı Pisagor ile kontrol edin: [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]].",
            },
          ],
          "table": {
            "headers": [
              "Ölçüm",
              "Değer",
            ],
            "rows": [
              [
                "Kısa dik kenar a",
                "10",
              ],
              [
                "Uzun dik kenar b",
                "24",
              ],
              [
                "Hipotenüs c",
                "26",
              ],
              [
                "Alan A",
                "120 birim kare",
              ],
              [
                "Çevre P",
                "60 birim",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Farklı Ölçek Faktörlerinin Çözümlü Örnekleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Orijinal üçgenden k = 10 değerine kadar sekiz çözümlü örnek.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: Orijinal Üçgen, k = 1",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 1]]. Kenarlar: [[a = 5]], [[b = 12]], [[c = 13]]. Alan: [[A = 30(1^2) = 30]] birim kare. Çevre: [[P = 30(1) = 30]] birim. Bu, üçlünün en küçük tam sayı halidir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Ölçek Faktörü 2",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 2]]. Kenarlar: [[a = 10]], [[b = 24]], [[c = 26]]. Alan: [[A = 30(2^2) = 120]] birim kare. Çevre: [[P = 30(2) = 60]] birim. Ölçek faktörünü iki katına çıkarmak her kenarı ve çevreyi iki katına çıkarır, ancak alan dört kat büyür.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Ölçek Faktörü 3",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 3]]. Kenarlar: [[a = 15]], [[b = 36]], [[c = 39]]. Alan: [[A = 30(3^2) = 270]] birim kare. Çevre: [[P = 30(3) = 90]] birim. Kenarları üç katına çıkarmak çevreyi üç katına çıkarırken alan orijinalin dokuz katı olur.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Ölçek Faktörü 4",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 4]]. Kenarlar: [[a = 20]], [[b = 48]], [[c = 52]]. Alan: [[A = 30(4^2) = 480]] birim kare. Çevre: [[P = 30(4) = 120]] birim. Her kenar orijinalin dört katıdır ve alan orijinalin on altı katıdır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Ölçek Faktörü 0.5",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 0.5]]. Kenarlar: [[a = 2.5]], [[b = 6]], [[c = 6.5]]. Alan: [[A = 30(0.5^2) = 7.5]] birim kare. Çevre: [[P = 30(0.5) = 15]] birim. Üçgeni yarıya indirmek kenarları ve çevreyi yarıya indirirken alan dörtte bire düşer.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Ölçek Faktörü 1.5",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 1.5]]. Kenarlar: [[a = 7.5]], [[b = 18]], [[c = 19.5]]. Alan: [[A = 30(1.5^2) = 67.5]] birim kare. Çevre: [[P = 30(1.5) = 45]] birim. Ondalıklı bir ölçek faktörü de aynı şekilde çalışır: her kenarı 1.5 ile çarpın.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Ölçek Faktörü 5",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 5]]. Kenarlar: [[a = 25]], [[b = 60]], [[c = 65]]. Alan: [[A = 30(5^2) = 750]] birim kare. Çevre: [[P = 30(5) = 150]] birim. 5 ölçek faktörü çok daha büyük bir üçgen verir; temel 5, 12, 13 çok küçük kaldığında yerleşim çalışmaları için kullanışlıdır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: Ölçek Faktörü 10",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 10]]. Kenarlar: [[a = 50]], [[b = 120]], [[c = 130]]. Alan: [[A = 30(10^2) = 3000]] birim kare. Çevre: [[P = 30(10) = 300]] birim. Bu boyutta sayılar tam kalır ve bu, tam sayılı bir üçlüyle çalışmanın avantajlarından biridir.",
            },
            {
              "kind": "p",
              "text": "Sekiz örneğin tamamında desen geçerlidir: kenarlar ve çevre [[k]] ile büyür, alan [[k]] nin karesiyle büyür ve 5:12:13 oranı asla değişmez.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "5-12-13 Üçgeni Neden Her Zaman 90 Derecelik Açıyı Korur?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ölçeklendirme Pisagor kontrolünü bozamaz.",
            },
            {
              "kind": "p",
              "text": "Ölçeklendirilmiş kenarlar [[[5k,\\quad 12k,\\quad 13k]]]",
            },
            {
              "kind": "p",
              "text": "Pisagor teoremini uygulayın: [[[(5k)^2 + (12k)^2 = (13k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Açın: [[[25k^2 + 144k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[169k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "İki taraf da her pozitif [[k]] için eşleşir, çünkü [[k^2]] çarpanı üç terimde de ortaktır. Ölçeklendirme üçgeni açılarını değiştirmeden uzatır, bu nedenle 90 derecelik açı her boyutta korunur. Bu, benzer üçgenlerle aynı fikirdir: aynı şekil, farklı boyut.",
            },
            {
              "kind": "p",
              "text": "Açılar ölçeklendirmeyle asla değişmez. Her pozitif [[k]] değerinde dar açılar yaklaşık 22.62 ve 67.38 derece olarak kalır, çünkü küçük açının sinüsü her zaman [[5 / 13]] ve büyük açının sinüsü her zaman [[12 / 13]] olur. Yalnızca kenar uzunlukları değişir ve hepsi birlikte değişir.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-angles.svg",
            "alt": "90 derecelik açıyı ve yaklaşık 22.62 ile 67.38 derecelik dar açıları gösteren 5-12-13 üçgeni açı diyagramı",
            "caption": "Dar açılar yaklaşık 22.62 ve 67.38 derecedir ve toplamları 90 derecedir.",
          },
        },
        "sec-euclid": {
          "h2": "5-12-13 Üçlüsü Öklid Formülüyle Nasıl Oluşturulur?",
          "blocks": [
            {
              "kind": "p",
              "text": "İki küçük sayı, m = 3 ve n = 2, üçlünün tamamını oluşturur.",
            },
            {
              "kind": "p",
              "text": "Öklid formülü, iki pozitif tam sayı [[m]] ve [[n]] değerinden ilkel Pisagor üçlüleri oluşturur: [[[a = m^2 - n^2,\\quad b = 2mn,\\quad c = m^2 + n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[m = 3]] ve [[n = 2]] kullanın: [[[a = 3^2 - 2^2 = 9 - 4 = 5]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 2(3)(2) = 12]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 3^2 + 2^2 = 9 + 4 = 13]]]",
            },
            {
              "kind": "p",
              "text": "Sonuç, kutulu oran [[[\\boxed{5:12:13}]]]",
            },
            {
              "kind": "p",
              "text": "Formül, [[m]] değeri [[n]] değerinden büyük olduğunda, iki sayının ortak böleni olmadığında ve biri çiftken diğeri tek olduğunda çalışır. Bu koşullar ilkel bir üçlü verir; bu, daha küçük bir tam sayılı üçlüye indirgenemeyen üçlüdür. Öklid formülü ileri düzey bir ek bilgidir: hesaplayıcının kendisi yalnızca [[k]] değerine ihtiyaç duyar, ancak formül 5, 12 ve 13 sayılarının nereden geldiğini gösterir.",
            },
            {
              "kind": "p",
              "text": "[[m]] ve [[n]] için başka seçimler başka üçlüler oluşturur. [[m = 2]] ve [[n = 1]] ile formül 3, 4 ve 5 verir. [[m = 4]] ve [[n = 1]] ile 15, 8 ve 17 verir; bu, farklı bir sıralamayla 8-15-17 üçlüsüdür. 5-12-13 üçlüsü, bu ailenin [[m = 3]] ve [[n = 2]] değerlerinden gelen üyesidir.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-euclid.svg",
            "alt": "m eşittir 3 ve n eşittir 2 ile 5, 12 ve 13 üreten Öklid formülü akış diyagramı",
            "caption": "m = 3 ve n = 2, a = 5, b = 12 ve c = 13 verir.",
          },
        },
        "sec-applications": {
          "h2": "5-12-13 Üçgeninin Geometri ve Ölçümdeki Uygulamaları",
          "blocks": [
            {
              "kind": "p",
              "text": "Tam sayılı bir dik açı, kesin köşelerin önemli olduğu her yerde kullanışlıdır.",
            },
            {
              "kind": "p",
              "text": "Geometri ödevlerinde ve sınav alıştırmalarında üçlü, iletki olmadan hızlı dik açı kontrolleri sağlar: üç uzunluk 5:12:13 oranına uyuyorsa iki kısa kenar arasındaki açı 90 derecedir. Öğretmenler bunu Pisagor teoremi alıştırmaları, üçgen benzerliği problemleri ve ölçekli çizim çalışmaları için kullanır.",
            },
            {
              "kind": "p",
              "text": "İnşaatçılar ve marangozlar, kare köşeler oluşturmak için ölçeklendirilmiş hallerini kullanır: bir kenar boyunca 5 birim, diğer kenar boyunca 12 birim işaretleyin ve köşegen 13 ölçmelidir. Haritacılar ve teknik çizim çalışmaları, temel üçgen çok küçük kaldığında 10, 24, 26 ya da 25, 60, 65 ile daha büyük ölçeklerde aynı fikre dayanır.",
            },
            {
              "kind": "p",
              "text": "Oran ayrıca matematiksel modelleme ve sınıf gösterimlerinde yardımcı olur; burada tam sayılar hesabı temiz tutar. Gerçek inşaatta ölçüm doğruluğu ve arazi koşulları hâlâ önemlidir ve bu oran profesyonel haritacılık ya da inşaat standartlarının yerini tutmaz.",
            },
          ],
        },
        "sec-vs-triples": {
          "h2": "5-12-13 ile Diğer Pisagor Üçlüleri Arasındaki Fark",
          "blocks": [
            {
              "kind": "p",
              "text": "Her ilkel üçlü bir dik üçgendir, ancak her birinin kendi şekli vardır.",
            },
            {
              "kind": "p",
              "text": "Aşağıdaki tablo, bilinen beş ilkel üçlüyü karşılaştırır. Hepsi Pisagor teoremini sağlar, ancak kenar oranları ve dar açıları farklıdır, bu nedenle her biri farklı bir üçgen şekli oluşturur. Bir üçlüyü ölçeklendirmek benzer üçgenler oluşturur, asla farklı bir üçlü oluşturmaz: 10, 24, 26 ölçeklendirilmiş bir 5-12-13 üçgenidir, oysa 3, 4, 5 tamamen farklı bir şekildir.",
            },
            {
              "kind": "p",
              "text": "5-12-13 üçgeni, 3-4-5 üçgeninden daha uzun ve daha dardır: uzun dik kenarı kısa dik kenarının iki katından fazladır, oysa 3-4-5 kareye daha yakındır. Bu fark açılarda ortaya çıkar: burada 22.62 ve 67.38 derece, 3-4-5 için 36.87 ve 53.13 derece karşısındadır. Daha fazla bilgi için <a href=\"/pythagorean-triples-calculator/\">Pisagor üçlüleri hesaplayıcı</a> sayfasına bakın.",
            },
            {
              "kind": "p",
              "text": "Tablodaki üçlülerin yalnızca bunlar ilkeldir; yani üç sayının 1 değerinden büyük ortak böleni yoktur. 6, 8, 10 ya da 10, 24, 26 gibi ölçeklendirilmiş bir üçlü ilkel değildir, çünkü üç sayı da 2 ile bölünür. İlkel üçlüler her ailenin temel üyeleridir ve diğer her üye bunlardan birinin ölçeklendirilmiş kopyasıdır.",
            },
          ],
          "table": {
            "headers": [
              "Pisagor üçlüsü",
              "Kenar oranı",
              "Hipotenüs",
            ],
            "rows": [
              [
                "3-4-5",
                "3:4:5",
                "5",
              ],
              [
                "5-12-13",
                "5:12:13",
                "13",
              ],
              [
                "8-15-17",
                "8:15:17",
                "17",
              ],
              [
                "7-24-25",
                "7:24:25",
                "25",
              ],
              [
                "9-40-41",
                "9:40:41",
                "41",
              ],
            ],
          },
        },
        "sec-vs-special": {
          "h2": "5-12-13, 45-45-90 ve 30-60-90 Üçgenleri Arasındaki Fark",
          "blocks": [
            {
              "kind": "p",
              "text": "5-12-13, standart özel üçgen açıları değil, kendi açılarına sahiptir.",
            },
            {
              "kind": "p",
              "text": "Bir 5-12-13 üçgeni ne 45-45-90 üçgenidir ne de 30-60-90 üçgenidir. Dar açıları yaklaşık 22.62 ve 67.38 derecedir ve dik kenarları eşit değildir, bu nedenle iki özel açı ailesinden birine değil, Pisagor üçlüleri ailesine aittir.",
            },
            {
              "kind": "p",
              "text": "İkizkenar dik üçgenler için <a href=\"/45-45-90-triangle-calculator/\">45-45-90 üçgen hesaplayıcı</a> sayfasını ve 30-60-90 ailesi için <a href=\"/30-60-90-triangle-calculator/\">30-60-90 üçgen hesaplayıcı</a> sayfasını kullanın. Kenarlar 5:12:13 oranını izlediğinde doğru araç bu 5-12-13 sayfasıdır.",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin hangi aileye ait olduğunu anlamak için açılarını ya da kenar oranını kontrol edin. Eşit dik kenarlar ve 45 derecelik açılar 45-45-90 anlamına gelir. 30 ve 60 derecelik açılar 30-60-90 anlamına gelir. 5:12:13 oranındaki kenarlar ile yaklaşık 22.62 ve 67.38 derecelik açılar bir 5-12-13 üçgeni anlamına gelir. Üç aile asla örtüşmez.",
            },
          ],
          "table": {
            "headers": [
              "Özellik",
              "5-12-13",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Kenar oranı",
                "5:12:13",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Açılar",
                "22.62°, 67.38°, 90° yaklaşık",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Eşit dik kenarlar",
                "Hayır",
                "Evet",
                "Hayır",
              ],
              [
                "Ana özellik",
                "Pisagor üçlüsü",
                "İkizkenar dik üçgen",
                "Özel açı oranı",
              ],
              [
                "Hipotenüs",
                "13k",
                "a√2",
                "2a",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "h2": "5-12-13 Üçgen Hesaplayıcıyı Kullanırken Yapılan Yaygın Hatalar",
          "blocks": [
            {
              "kind": "p",
              "text": "5-12-13 problemlerinde on dört hata tekrar tekrar ortaya çıkar.",
            },
            {
              "kind": "steps",
              "steps": [
                "13 sayısını hipotenüs yerine dik kenar sanmak: 13 en uzun kenardır ve 90 derecelik açının karşısında yer alır. [[c = 13k]] her zaman hipotenüstür.",
                "Kısa dik kenarı uzun dik kenarla karıştırmak: [[a = 5k]] kısa dik kenardır ve [[b = 12k]] uzun dik kenardır. Etiketleri sırayla tutun.",
                "Yalnızca bir ya da iki kenarı ölçeklendirmek: yalnızca dik kenarları ölçeklendirmek oranı ve dik açıyı bozar. Aynı [[k]] değerini her kenara uygulayın.",
                "Ölçek faktörünü kenar uzunluğuyla karıştırmak: [[k]] çarpandır, kenar değildir. [[k = 2]] ile kenarlar 10, 24 ve 26 olur.",
                "Sıfırı geçerli bir ölçek faktörü olarak kullanmak: [[k = 0]] üç kenarı da sıfır yapar; bu bir üçgen değil, dejenere bir şekildir. [[k]] sıfırdan büyük olmalıdır.",
                "Negatif bir ölçek faktörü girmek: negatif bir [[k]] negatif kenar uzunlukları verir ve bunlar bir üçgeni tanımlayamaz. Yalnızca pozitif bir [[k]] girin.",
                "Alan formülünde k değerinin karesini almayı unutmak: alan [[k]] nin karesiyle büyür. [[k = 3]] ile alan [[A = 30 \\times 9 = 270]] olur, 90 değil.",
                "Alan ile çevreyi karıştırmak: alan birim kare ile ölçülür ve [[A = 30k^2]] kullanılır, çevre ise doğrusal birimle ölçülür ve [[P = 30k]] kullanılır.",
                "Çevreyi hesaplarken yalnızca iki kenarı toplamak: çevre üç kenarı da içerir, yani [[P = 5k + 12k + 13k = 30k]].",
                "Ölçüm birimlerini karıştırmak: üç kenar için de tek bir birim kullanın. Dik kenarlar santimetre cinsindense alan santimetre kare, çevre ise santimetre cinsinden çıkar.",
                "Yalnızca 5, 12 ve 13 sayılarının işe yaradığını varsaymak: 10, 24, 26 ya da 15, 36, 39 gibi ölçeklendirilmiş herhangi bir küme, oran aynı olduğu için hâlâ bir 5-12-13 üçgenidir.",
                "Her dik üçgenin 5:12:13 oranını izlediğini varsaymak: çoğu dik üçgenin başka kenar uzunlukları vardır. Oran yalnızca kenarlar 5:12:13 oranına uyduğunda geçerlidir.",
                "5-12-13 ve 3-4-5 üçlülerini karıştırmak: 3, 4, 5 ve 5, 12, 13 farklı açılara sahip farklı üçlülerdir. Formül seçmeden önce oranı kontrol edin.",
                "Ölçümleri gereksiz yere yuvarlamak: üçlü tam sayılar verir, bu nedenle onları tam tutun. Yalnızca 1.5 gibi bir ölçek faktörü ondalık sayı zorunlu kıldığında yuvarlayın ve bunu belirtin.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Ölçeklendirilmiş Bir 5-12-13 Üçgeni Nasıl Doğrulanır?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dört hızlı kontrol, ölçeklendirilmiş bir 5-12-13 üçgenini doğrular.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 1: Kenar Oranı",
            },
            {
              "kind": "p",
              "text": "Kenarlar şu orana uymalıdır: [[[a : b : c = 5 : 12 : 13]]]",
            },
            {
              "kind": "h3",
              "text": "Kontrol 2: Pisagor Teoremi",
            },
            {
              "kind": "p",
              "text": "Dik kenarlar şu eşitliği sağlamalıdır: [[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "h3",
              "text": "Kontrol 3: Ölçek Faktörü Tutarlılığı",
            },
            {
              "kind": "p",
              "text": "Her kenar kendi oran sayısına bölündüğünde aynı [[k]] değeri çıkmalıdır: [[[\\frac{a}{5} = \\frac{b}{12} = \\frac{c}{13} = k]]]",
            },
            {
              "kind": "h3",
              "text": "Kontrol 4: Kenar Sıralaması",
            },
            {
              "kind": "p",
              "text": "Kenarlar kısadan uzuna doğru sıralanmalıdır: [[[a < b < c]]]",
            },
            {
              "kind": "p",
              "text": "Örnek olarak 10, 24, 26 sayılarını kullanın. Oran 10:24:26 olur ve bu, 5:12:13 oranına indirgenir; Pisagor kontrolü ise [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]] verir. Ölçek faktörü kontrolü [[10 / 5 = 24 / 12 = 26 / 13 = 2]] verir. Dört kontrol de geçer, bu nedenle ölçümler ölçeklendirilmiş bir 5-12-13 üçgeni oluşturur.",
            },
            {
              "kind": "p",
              "text": "Herhangi bir kontrol başarısız olursa sayılara güvenmeden önce ölçümü ya da hesabı yeniden kontrol edin. Başarısız bir oran kontrolü genellikle bir kenarın farklı bir faktörle ölçeklendirildiği, başarısız bir Pisagor kontrolü ise genellikle en uzun kenarın dik kenar sanıldığı anlamına gelir. Deseni bozan kenarı düzeltin, ardından dört kontrolü de yeniden çalıştırın.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Cevaplı Alıştırma Problemleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Cevapları okumadan önce sekiz problemi de kâğıt üzerinde çözün.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: k = 2 ile Ölçeklendirme",
            },
            {
              "kind": "p",
              "text": "Bir 5-12-13 üçgenini [[k = 2]] kullanarak ölçeklendirin. Üç kenar uzunluğunu, alanı ve çevreyi bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: k = 4 ile Ölçeklendirme",
            },
            {
              "kind": "p",
              "text": "Bir 5-12-13 üçgenini [[k = 4]] kullanarak ölçeklendirin. Üç kenar uzunluğunu, alanı ve çevreyi bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: k = 3 ile Alan",
            },
            {
              "kind": "p",
              "text": "[[k = 3]] olan ölçeklendirilmiş bir 5-12-13 üçgeninin alanını birim kare cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 4: k = 5 ile Çevre",
            },
            {
              "kind": "p",
              "text": "[[k = 5]] olan ölçeklendirilmiş bir 5-12-13 üçgeninin çevresini birim cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Kısa Dik Kenardan k Değerini Bulma",
            },
            {
              "kind": "p",
              "text": "Ölçeklendirilmiş bir 5-12-13 üçgeninin kısa dik kenarı 25 olur. Ölçek faktörü [[k]] değerini bulun, ardından diğer iki kenarı bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Uzun Dik Kenardan k Değerini Bulma",
            },
            {
              "kind": "p",
              "text": "Ölçeklendirilmiş bir 5-12-13 üçgeninin uzun dik kenarı 48 olur. Ölçek faktörü [[k]] değerini bulun, ardından diğer iki kenarı bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 7: Hipotenüsten k Değerini Bulma",
            },
            {
              "kind": "p",
              "text": "Ölçeklendirilmiş bir 5-12-13 üçgeninin hipotenüsü 78 olur. Ölçek faktörü [[k]] değerini bulun, ardından iki dik kenarı bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 8: 15, 36 ve 39 Sayılarını Doğrulama",
            },
            {
              "kind": "p",
              "text": "15, 36 ve 39 kenar uzunlukları ölçeklendirilmiş bir 5-12-13 üçgeni oluşturur mu? Oranı ve Pisagor teoremini kontrol edin.",
            },
            {
              "kind": "h3",
              "text": "Cevaplar",
            },
            {
              "kind": "p",
              "text": "1. Kenarlar 10, 24, 26; alan 120 birim kare; çevre 60 birim.",
            },
            {
              "kind": "p",
              "text": "2. Kenarlar 20, 48, 52; alan 480 birim kare; çevre 120 birim.",
            },
            {
              "kind": "p",
              "text": "3. Alan [[A = 30 \\times 9 = 270]] birim kare.",
            },
            {
              "kind": "p",
              "text": "4. Çevre [[P = 30 \\times 5 = 150]] birim.",
            },
            {
              "kind": "p",
              "text": "5. [[k = 25 / 5 = 5]]; uzun dik kenar 60 ve hipotenüs 65 olur.",
            },
            {
              "kind": "p",
              "text": "6. [[k = 48 / 12 = 4]]; kısa dik kenar 20 ve hipotenüs 52 olur.",
            },
            {
              "kind": "p",
              "text": "7. [[k = 78 / 13 = 6]]; kısa dik kenar 30 ve uzun dik kenar 72 olur.",
            },
            {
              "kind": "p",
              "text": "8. Evet: [[15^2 + 36^2 = 225 + 1296 = 1521 = 39^2]] ve 15:36:39 oranı 5:12:13 oranına indirgenir, yani [[k = 3]].",
            },
          ],
        },
      },
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları",
      "relatedIntro": "Aşağıdaki hesaplayıcıların her biri farklı bir dik üçgen görevini ele alır, bu nedenle ihtiyacınız olan ölçüme uyan aracı seçin.",
      "relatedItems": [
        "Pisagor Üçlüleri Hesaplayıcı",
        "3-4-5 Üçgen Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
        "Pisagor Teoremi Hesaplayıcı",
        "Dik Üçgen Alan Hesaplayıcı",
        "Dik Üçgen Çevre Hesaplayıcı",
      ],
      "faqHeading": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "5-12-13 üçgeni nedir?",
          "answer": "Bir 5-12-13 üçgeni, kenar uzunlukları 5, 12 ve 13 olan ya da aynı oranda ölçeklendirilmiş herhangi bir kümeye sahip bir dik üçgendir. Uzunluğu 13 olan kenar hipotenüstür ve uzunluğu 5 ve 12 olan kenarlar, dik açıda birleşen dik kenarlardır.",
        },
        {
          "question": "5-12-13 neden bir dik üçgendir?",
          "answer": "Çünkü kenarları Pisagor teoremini sağlar: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]]. İki kısa kenarın kareleri toplamı en uzun kenarın karesine eşit olduğunda, o kenarın karşısındaki açı 90 derecedir.",
        },
        {
          "question": "5-12-13 üçgeninin kenar oranı nedir?",
          "answer": "Oran 5:12:13 olur: kısa dik kenar 5 parça, uzun dik kenar 12 parça ve hipotenüs 13 parçadır. Ölçeklendirme her parçayı aynı [[k]] faktörüyle çarpar, bu nedenle oran asla değişmez.",
        },
        {
          "question": "5-12-13 üçgen hesaplayıcı nasıl çalışır?",
          "answer": "Pozitif bir ölçek faktörü [[k]] girin ve Hesapla düğmesine basın. Hesaplayıcı, ölçeklendirilmiş kenarları [[a = 5k]], [[b = 12k]] ve [[c = 13k]] olarak, ayrıca alanı [[A = 30k^2]] ve çevreyi [[P = 30k]] olarak döndürür.",
        },
        {
          "question": "5-12-13 üçgeninde ölçek faktörü nedir?",
          "answer": "Ölçek faktörü [[k]], temel üçgenin üç kenarını da çarpan sayıdır. [[k = 1]] ile orijinal üçgeni elde edersiniz; daha büyük değerler üçgeni büyütür ve 0 ile 1 arasındaki değerler küçültür.",
        },
        {
          "question": "Ölçeklendirilmiş bir 5-12-13 üçgeninin kenarlarını nasıl hesaplarım?",
          "answer": "Her temel kenarı [[k]] ile çarpın: kısa dik kenar [[a = 5k]], uzun dik kenar [[b = 12k]] ve hipotenüs [[c = 13k]] olur. [[k = 4]] için kenarlar 20, 48 ve 52 olur.",
        },
        {
          "question": "Alanını nasıl hesaplarım?",
          "answer": "[[A = 30k^2]] formülünü kullanın. Alan, dik kenarların çarpımının yarısından gelir: [[A = (5k)(12k) / 2]]. [[k = 3]] ile alan 270 birim karedir.",
        },
        {
          "question": "Çevresini nasıl hesaplarım?",
          "answer": "[[P = 30k]] formülünü kullanın. Üç ölçeklendirilmiş kenarı toplayın: [[P = 5k + 12k + 13k]]. [[k = 3]] ile çevre 90 birimdir.",
        },
        {
          "question": "5-12-13 yerine 10-24-26 kullanabilir miyim?",
          "answer": "Evet. 10, 24, 26 kümesi, [[k = 2]] ile ölçeklendirilmiş 5-12-13 üçgenidir, bu nedenle aynı şekle ve aynı açılara sahiptir. 5, 12 ve 13 sayılarının herhangi bir katı aynı şekilde çalışır.",
        },
        {
          "question": "5-12-13 üçlüsü nasıl oluşturulur?",
          "answer": "[[m = 3]] ve [[n = 2]] ile Öklid formülü [[a = 3^2 - 2^2 = 5]], [[b = 2(3)(2) = 12]] ve [[c = 3^2 + 2^2 = 13]] verir. 3 ve 2 sayıları aralarında asaldır ve zıt pariteye sahiptir, bu nedenle üçlü ilkeldir.",
        },
        {
          "question": "3-4-5 ile 5-12-13 arasındaki fark nedir?",
          "answer": "İkisi de ilkel Pisagor üçlüsüdür, ancak oranları farklıdır: 3-4-5 açıları yaklaşık 36.87 ve 53.13 derece olurken 5-12-13 açıları yaklaşık 22.62 ve 67.38 derecedir. Her üçlü farklı bir üçgen şekli oluşturur.",
        },
        {
          "question": "Ölçeklendirilmiş her 5-12-13 üçgeni bir dik üçgen midir?",
          "answer": "Evet. Her pozitif [[k]] için ölçeklendirilmiş kenarlar [[(5k)^2 + (12k)^2 = (13k)^2]] eşitliğini sağlar, bu nedenle Pisagor teoremi geçerlidir ve en uzun kenarın karşısındaki açı 90 derece olarak kalır.",
        },
      ],
    },
};
