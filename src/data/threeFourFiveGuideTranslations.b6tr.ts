// threeFourFiveGuideTranslations.btr.ts: 3-4-5 Triangle
// Guide (Page 42 of 45) translation.
export const THREEFOURFIVE_B6_TR = {
  "tr": {
      "meta": {
        "description": "Bu hesaplayıcı ile 3-4-5 üçgenini ölçekleyin: pozitif bir ölçek faktörü k girerek 3k, 4k ve 5k kenarlarını, 6k kare alanı ve 12k çevreyi bulun.",
        "primaryKeyword": "3-4-5 Triangle Calculator",
        "slug": "3-4-5-triangle-calculator",
        "title": "3-4-5 Üçgen Hesaplayıcı - Kenarları Ölçekle, Alan ve Çevre Bul",
      },
      "tocHeading": "Rehber İçeriği",
      "tocItems": {
        "sec-intro": "3-4-5 Üçgen Hesaplayıcı",
        "sec-calculate": "3-4-5 Üçgenini Ölçekleyin ve Ölçülerini Hesaplayın",
        "sec-what": "3-4-5 Üçgeni Nedir?",
        "sec-pythagorean": "3-4-5 Neden Bir Pisagor Üçlüsüdür?",
        "sec-sides": "3-4-5 Üçgeninin Üç Kenarını Anlamak",
        "sec-ratio": "3-4-5 Kenar Oranını Anlamak",
        "sec-scale-factor": "3-4-5 Üçgeninde Ölçek Faktörü Nedir?",
        "sec-leg-a": "İlk Dik Kenarı Hesaplama Formülü",
        "sec-leg-b": "İkinci Dik Kenarı Hesaplama Formülü",
        "sec-hypotenuse": "Hipotenüsü Hesaplama Formülü",
        "sec-area": "Ölçeklenmiş 3-4-5 Üçgeninin Alanı Nasıl Hesaplanır?",
        "sec-perimeter": "Ölçeklenmiş 3-4-5 Üçgeninin Çevresi Nasıl Hesaplanır?",
        "sec-find-k": "Bilinen Bir Kenardan Ölçek Faktörü Nasıl Bulunur?",
        "sec-step-example": "3-4-5 Üçgenini Ölçeklemenin Adım Adım Örneği",
        "sec-examples": "Farklı Ölçek Faktörlerinin Çözümlü Örnekleri",
        "sec-right-angle": "3-4-5 Üçgeni Neden Her Zaman 90 Derecelik Açıyı Korur?",
        "sec-construction": "Dik Köşeyi Kontrol Etmek İçin 3-4-5 Kuralı Nasıl Kullanılır?",
        "sec-applications": "3-4-5 Üçgeninin İnşaatta Kullanım Alanları",
        "sec-similar": "Benzer Üçgenler ile 3-4-5 Oranı Arasındaki İlişki",
        "sec-vs-special": "3-4-5, 45-45-90 ve 30-60-90 Üçgenleri Arasındaki Fark",
        "sec-mistakes": "3-4-5 Üçgen Hesaplayıcısını Kullanırken Yapılan Yaygın Hatalar",
        "sec-verify": "Ölçeklenmiş Bir 3-4-5 Üçgeni Nasıl Doğrulanır?",
        "sec-practice": "Cevaplı Alıştırma Soruları",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları",
        "sec-faq": "Sıkça Sorulan Sorular",
      },
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bir 3-4-5 üçgenini ölçekleyin ve kenarlarını, alanını ve çevresini bulun.",
            },
            {
              "kind": "p",
              "text": "3-4-5 üçgeni, kenar uzunlukları [[3 : 4 : 5]] oranını izleyen bir dik üçgendir. En ünlü Pisagor üçlüsüdür, çünkü tam sayı olan kenarları Pisagor teoremini sağlar: [[3^2 + 4^2 = 5^2]], çünkü [[9 + 16 = 25]]. Uzunluğu 5 olan kenar hipotenüstür, uzunluğu 3 ve 4 olan kenarlar ise dik kenarlardır.",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcı bu üçgeni pozitif bir ölçek faktörü [[k]] ile ölçekler, böylece ölçeklenmiş kenarlar [[a = 3k]], [[b = 4k]] ve [[c = 5k]] olur. Ayrıca alanı, [[A = 6k^2]], ve çevreyi, [[P = 12k]], hesaplar, yani tek bir girdi beş sonucun tamamını verir. Genel bir dik üçgen için <a href=\"/right-triangle-calculator/\">dik üçgen hesaplayıcı</a> kullanın.",
            },
            {
              "kind": "p",
              "text": "Örneğin, [[k = 2]] için kenarlar [[a = 6]], [[b = 8]] ve [[c = 10]] olur, alan [[A = 24]] birim kare ve çevre [[P = 24]] birimdir.",
            },
          ],
          "h2": "3-4-5 Üçgen Hesaplayıcı",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tek mod, tek girdi ve beş sonuç.",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcının tek bir modu vardır: 3-4-5 üçgenini ölçeklemek. Pozitif bir ölçek faktörü [[k]] girip Hesapla düğmesine tıklayın, hesaplayıcı ölçeklenmiş üç kenar uzunluğunu, alanı ve çevreyi verir. Aşağıdaki tabloda her ölçüm formülüyle birlikte listelenmiştir.",
            },
            {
              "kind": "p",
              "text": "Ölçek faktörü [[k]] her özgün kenarı çarpar. [[k = 1]] ile özgün 3-4-5 üçgenini elde edersiniz. 1 değerinden büyük bir değer üçgeni büyütür, 0 ile 1 arasındaki bir değer ise küçültür. Hesaplayıcı [[k]] değerini ister, çünkü oran şekli belirler: [[k]] bilindiğinde her ölçüm kendiliğinden ortaya çıkar.",
            },
            {
              "kind": "p",
              "text": "Yalnızca pozitif bir sayı girin. [[k = 0]] olursa üç kenar da sıfır olur, bu da üçgen değil dejenere bir şekildir, negatif bir [[k]] ise geçerli kenar uzunlukları veremez. Hesapladıktan sonra yeni bir soruya başlamadan önce alanı temizlemek için Sıfırla düğmesini kullanın.",
            },
          ],
          "h2": "3-4-5 Üçgenini Ölçekleyin ve Ölçülerini Hesaplayın",
          "table": {
            "headers": [
              "Ölçüm",
              "Formül",
              "Sonuç",
            ],
            "rows": [
              [
                "İlk dik kenar",
                "3k",
                "Ölçeklenmiş a kenarı",
              ],
              [
                "İkinci dik kenar",
                "4k",
                "Ölçeklenmiş b kenarı",
              ],
              [
                "Hipotenüs",
                "5k",
                "Ölçeklenmiş c kenarı",
              ],
              [
                "Alan",
                "6k²",
                "Üçgen alanı",
              ],
              [
                "Çevre",
                "12k",
                "Üçgen çevresi",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "3-4-5 üçgeni adını üç kenar uzunluğundan alır.",
            },
            {
              "kind": "p",
              "text": "Kenar uzunlukları [[3 : 4 : 5]] oranını izleyen bir dik üçgendir. En uzun kenar olan 5 hipotenüstür ve 90 derecelik açının karşısında yer alır. Diğer iki kenar, 3 ve 4, dik kenarlardır ve dik açıda birleşir. ABC üçgeninde C açısı 90°dir, [[a]] kenarı uzunluğu 3 olan kısa dik kenar, [[b]] kenarı uzunluğu 4 olan uzun dik kenar ve [[c]] kenarı uzunluğu 5 olan hipotenüstür.",
            },
            {
              "kind": "p",
              "text": "Pisagor üçlüsü olarak adlandırılır, çünkü 3, 4 ve 5, [[a^2 + b^2 = c^2]] eşitliğini sağlayan tam sayılardır. Bu tam sayı özelliği üçgeni kullanışlı kılar: inşaatçılar, öğretmenler ve öğrenciler dik açıyı karekök ya da ondalık sayı kullanmadan, sıradan tam sayı ölçümleriyle kontrol edebilir. En küçük Pisagor üçlüsüdür ve 6-8-10 gibi her ölçeklenmiş kopyası da bir Pisagor üçlüsüdür.",
            },
          ],
          "h2": "3-4-5 Üçgeni Nedir?",
          "image": {
            "alt": "Kısa dik kenarı a eşittir 3, uzun dik kenarı b eşittir 4, hipotenüsü c eşittir 5 olan ve dik açı işareti bulunan etiketli 3-4-5 dik üçgeni ABC",
            "caption": "ABC üçgeni: a = 3 ve b = 4 dik kenarları dik açıda birleşir, hipotenüs ise c = 5 olur.",
            "src": "three-four-five-main.svg",
          },
        },
        "sec-pythagorean": {
          "blocks": [
            {
              "kind": "p",
              "text": "3, 4 ve 5 sayıları Pisagor teoremini tam olarak sağlar.",
            },
            {
              "kind": "p",
              "text": "Pisagor teoremi, bir dik üçgende hipotenüsün karesinin dik kenarların kareleri toplamına eşit olduğunu söyler:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "3-4-5 kenar uzunluklarını yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[3^2 + 4^2 = 5^2]]]",
            },
            {
              "kind": "p",
              "text": "Her kareyi hesaplayın:",
            },
            {
              "kind": "p",
              "text": "[[[9 + 16 = 25]]]",
            },
            {
              "kind": "p",
              "text": "Her iki taraf da 25 değerine eşittir, yani eşitlik sağlanır. Pisagor üçlüsü, bu eşitliği sağlayan üç tam sayıdan oluşan bir kümedir ve 3-4-5 en küçük olanıdır. Eşitlik ters yönde de çalışır: bir üçgenin kenar uzunlukları 3, 4 ve 5 ise, uzunluğu 5 olan kenarın karşısındaki açı 90° olmak zorundadır.",
            },
            {
              "kind": "p",
              "text": "Uzunluğu 5 olan kenar hipotenüs olmak zorundadır, çünkü en uzun kenardır. Uzunluğu 3 ve 4 olan kenarlar dik kenar olmak zorundadır, çünkü dik açıda birleşirler. <a href=\"/pythagorean-triples-calculator/\">Pisagor üçlüleri hesaplayıcı</a> 5-12-13 dahil başka tam sayı üçlülerini de listeler; bu, farklı bir üçlüdür.",
            },
          ],
          "h2": "3-4-5 Neden Bir Pisagor Üçlüsüdür?",
          "image": {
            "alt": "3 üssü 2 artı 4 üssü 2 eşittir 5 üssü 2 ve 9 artı 16 eşittir 25 olduğunu gösteren 3-4-5 üçgeni için Pisagor çizimi",
            "caption": "3² + 4² = 5², çünkü 9 + 16 = 25, yani 3-4-5 bir Pisagor üçlüsüdür.",
            "src": "three-four-five-pythagoras.svg",
          },
        },
        "sec-sides": {
          "blocks": [
            {
              "kind": "p",
              "text": "İki dik kenar dik açıda birleşir ve hipotenüs onun karşısında yer alır.",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenar [[a]], temel üçgende uzunluğu 3 olan kenardır. ABC üçgeninde BC kenarıdır ve yaklaşık 36,87° olan A açısının karşısında yer alır. Uzun dik kenar [[b]] uzunluğu 4 olan kenardır, AC kenarıdır ve yaklaşık 53,13° olan B açısının karşısında yer alır. İki dik kenar, 90° açıyı oluşturdukları C köşesinde birleşir.",
            },
            {
              "kind": "p",
              "text": "Hipotenüs [[c]] uzunluğu 5 olan kenardır, AB kenarıdır ve 90° açının karşısında yer alır. En uzun kenardır, çünkü en büyük açı her zaman en uzun kenarın karşısında yer alır. Üçgen ölçeklendiğinde roller hiç değişmez: [[a]] kısa dik kenar, [[b]] uzun dik kenar ve [[c]] hipotenüs olarak kalır.",
            },
          ],
          "h2": "3-4-5 Üçgeninin Üç Kenarını Anlamak",
          "table": {
            "headers": [
              "Kenar",
              "Karşısındaki açı",
              "Uzunluk",
            ],
            "rows": [
              [
                "Kısa dik kenar a (BC)",
                "36.87°",
                "3",
              ],
              [
                "Uzun dik kenar b (AC)",
                "53.13°",
                "4",
              ],
              [
                "Hipotenüs c (AB)",
                "90°",
                "5, en uzun kenar",
              ],
            ],
          },
        },
        "sec-ratio": {
          "blocks": [
            {
              "kind": "p",
              "text": "3:4:5 oranı her 3-4-5 üçgeninin şeklini belirler.",
            },
            {
              "kind": "p",
              "text": "3-4-5 üçgeninin kenar oranı şöyledir:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 3 : 4 : 5]]]",
            },
            {
              "kind": "p",
              "text": "Oranın her parçası bir kenarı tanımlar. Kısa dik kenar 3 orantılı birimi, uzun dik kenar 4 orantılı birimi ve hipotenüs 5 orantılı birimi temsil eder. Ölçek faktörü [[k]] ile yazıldığında üç kenar [[a = 3k]], [[b = 4k]] ve [[c = 5k]] olur, yani ölçeklenmiş biçimdeki oran [[3k : 4k : 5k]] olur.",
            },
            {
              "kind": "p",
              "text": "Üçgen büyütüldüğünde ya da küçültüldüğünde oran değişmez, çünkü üç kenarı da aynı sayıyla çarpmak oranlarını değiştirmez. 3, 4, 5 ile 6, 8, 10 ve 9, 12, 15 ve 15, 20, 25 kümelerinin tümü farklı büyüklüklerde aynı üçgen şeklini temsil eder.",
            },
          ],
          "h2": "3-4-5 Kenar Oranını Anlamak",
          "image": {
            "alt": "Aynı oranlara sahip, 3-4-5, 6-8-10 ve 9-12-15 olarak etiketlenmiş farklı büyüklüklerde üç benzer 3-4-5 üçgeni",
            "caption": "3-4-5, 6-8-10 ve 9-12-15 aynı şekle ve aynı 3:4:5 oranına sahiptir.",
            "src": "three-four-five-scaled.svg",
          },
        },
        "sec-scale-factor": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ölçek faktörü her kenarı aynı sayıyla çarpar.",
            },
            {
              "kind": "p",
              "text": "Ölçek faktörü [[k]], üç özgün kenar uzunluğunun tamamını aynı pozitif sayıyla çarpar. Ölçeklenmiş kenarlar şunlardır:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k, \\quad b = 4k, \\quad c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "[[k = 1]] ile özgün üçgeni, 3, 4, 5, elde edersiniz. [[k]] değerinin 1 değerinden büyük olması üçgeni büyütür, 0 ile 1 arasındaki bir değer ise küçültür; örneğin [[k = 0.5]] 1,5, 2, 2,5 değerlerini verir. Ölçek faktörü pozitif olmak zorundadır: sıfır üçgen vermez, negatif bir değer ise geçerli kenar uzunlukları veremez.",
            },
            {
              "kind": "p",
              "text": "Ölçek faktörü büyüklüğü değiştirir, şekli değiştirmez. Karşılıklı tüm kenar uzunlukları orantılı kalır, açılar aynı kalır ve oran 3:4:5 olarak kalır. Yukarıdaki tabloda kenarların, alanın ve çevrenin [[k]] ile nasıl değiştiği gösterilir: çevre [[k]] ile büyürken alan [[k]] karesi ile büyür.",
            },
          ],
          "h2": "3-4-5 Üçgeninde Ölçek Faktörü Nedir?",
          "image": {
            "alt": "Ölçek faktörü k eşittir 2 olan ölçeklenmiş 3-4-5 üçgeni; kenarlar a eşittir 6, b eşittir 8 ve c eşittir 10 olarak etiketlenmiş",
            "caption": "k = 2 için kenarlar a = 6, b = 8 ve c = 10 olur.",
            "src": "three-four-five-scale-factor.svg",
          },
          "table": {
            "headers": [
              "Ölçek faktörü k",
              "Kenarlar",
              "Alan",
              "Çevre",
            ],
            "rows": [
              [
                "0.5",
                "1.5, 2, 2.5",
                "1.5",
                "6",
              ],
              [
                "1",
                "3, 4, 5",
                "6",
                "12",
              ],
              [
                "2",
                "6, 8, 10",
                "24",
                "24",
              ],
              [
                "3",
                "9, 12, 15",
                "54",
                "36",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kısa dik kenar, ölçek faktörünün üç katıdır.",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[a]] kısa dik kenar ve [[k]] ölçek faktörüdür. Formül oranın doğrudan okunuşudur: kısa dik kenar, [[k]] birimi başına 3 birimi temsil eder, yani 3 ile [[k]] çarpımı ölçeklenmiş uzunluğu verir. [[k = 4]] kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 12]]]",
            },
            {
              "kind": "p",
              "text": "Sonuç ölçeklenmiş bir kenar uzunluğudur, açı ya da ölçek faktörü değildir. Her zaman diğer iki kenardan daha kısadır, çünkü 3, 3:4:5 oranının en küçük parçasıdır ve her pozitif ölçek faktöründe kısa dik kenar olarak kalır.",
            },
          ],
          "h2": "İlk Dik Kenarı Hesaplama Formülü",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Uzun dik kenar, ölçek faktörünün dört katıdır.",
            },
            {
              "kind": "p",
              "text": "[[[b = 4k]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[b]] uzun dik kenar ve [[k]] ölçek faktörüdür. Uzun dik kenar, [[k]] birimi başına 4 birimi temsil eder, yani 4 ile [[k]] çarpımı ölçeklenmiş uzunluğu verir. [[k = 4]] kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[b = 4 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 16]]]",
            },
            {
              "kind": "p",
              "text": "Bu kenar her pozitif ölçek faktöründe ilk dik kenardan daha uzun kalır, çünkü 4 sayısı 3 sayısından büyüktür ve her iki kenar da aynı [[k]] ile çarpılır. Hipotenüsten de daha kısa kalır, çünkü 4 sayısı 5 sayısından küçüktür. İki dik kenarı doğru sırada tutun: [[a]] 3 kenarıdır ve [[b]] 4 kenarıdır.",
            },
          ],
          "h2": "İkinci Dik Kenarı Hesaplama Formülü",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenüs, ölçek faktörünün beş katıdır.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[c]] hipotenüs ve [[k]] ölçek faktörüdür. Hipotenüs, [[k]] birimi başına 5 birimi temsil eder, yani 5 ile [[k]] çarpımı ölçeklenmiş uzunluğu verir. [[k = 4]] kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 20]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenüs her pozitif ölçek faktöründe en uzun kenar olarak kalır, çünkü 5 oranın en büyük parçasıdır. Dik kenarlarla karşılaştırarak kontrol edin: [[k = 4]] için kenarlar 12, 16 ve 20 olur ve [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]] olduğundan Pisagor teoremi sonucu doğrular.",
            },
          ],
          "h2": "Hipotenüsü Hesaplama Formülü",
        },
        "sec-area": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alan iki dik kenarı kullanır ve ölçek faktörünün karesi alınır.",
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
              "text": "Ölçeklenmiş dik kenarları, [[a = 3k]] ve [[b = 4k]], yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{(3k)(4k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sadeleştirin:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6k^2]]]",
            },
            {
              "kind": "p",
              "text": "İkiye bölmek gerekir, çünkü bir üçgen, iki dik kenarının oluşturduğu dikdörtgenin yarısını kaplar. [[k]] çarpanı kare alınır, çünkü her iki dik kenar da bir [[k]] çarpanı taşır. Alan birim kare ile ölçülür. Ölçek faktörünü iki katına çıkarmak alanı dört katına çıkarır: [[k = 2]] için alan 24 birim karedir, [[k = 1]] için 6 birim kare olan alanın dört katıdır. Genel bir dik üçgen için bunun yerine <a href=\"/right-triangle-area-calculator/\">dik üçgen alan hesaplayıcı</a> kullanın.",
            },
            {
              "kind": "p",
              "text": "[[k = 3]] kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6(3^2)]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 54 \\text{ square units}]]]",
            },
          ],
          "h2": "Ölçeklenmiş 3-4-5 Üçgeninin Alanı Nasıl Hesaplanır?",
          "image": {
            "alt": "Tabanı 3k, yüksekliği 4k ve alanı 6k kare olan 3-4-5 üçgeni alan çizimi; k eşittir 2 için 24 birim kare verir",
            "caption": "Taban 3k ve yükseklik 4k ile alan: A = 6k² ve k = 2 için 24 birim kare olur.",
            "src": "three-four-five-area.svg",
          },
        },
        "sec-perimeter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Üç kenarı da toplayın, çevre k ile ölçeklenir.",
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
              "text": "Ölçeklenmiş kenarları yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[P = 3k + 4k + 5k]]]",
            },
            {
              "kind": "p",
              "text": "Sadeleştirin:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Üç kenarın tamamı toplanmalıdır, çünkü çevre tam sınırı izler. Herhangi bir kenarı dışarıda bırakmak, çevreden daha kısa ve çevre olmayan bir uzunluk verir. Çevre doğrudan [[k]] ile ölçeklenir, yani [[k]] değerini iki katına çıkarmak çevreyi iki katına çıkarır; alan ise dört katına çıkar. Çevre doğrusal birimlerle ölçülür, asla birim kare ile ölçülmez. Genel bir dik üçgen için <a href=\"/right-triangle-perimeter-calculator/\">dik üçgen çevre hesaplayıcı</a> kullanın.",
            },
            {
              "kind": "p",
              "text": "[[k = 3]] kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12 \\times 3]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 36 \\text{ units}]]]",
            },
          ],
          "h2": "Ölçeklenmiş 3-4-5 Üçgeninin Çevresi Nasıl Hesaplanır?",
          "image": {
            "alt": "P eşittir 3k artı 4k artı 5k eşittir 12k olduğunu gösteren 3-4-5 üçgeni çevre çizimi; k eşittir 2 için 24 birim verir",
            "caption": "Çevre: P = 3k + 4k + 5k = 12k ve k = 2 için 24 birim olur.",
            "src": "three-four-five-perimeter.svg",
          },
        },
        "sec-find-k": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bilinen bir kenarı orandaki payına bölün.",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcı [[k]] değerini doğrudan kabul eder, yani bu denklemler bir kenarı zaten bildiğinizde [[k]] değerini bulmanıza yardımcı olan elle yapılan hesaplamalardır. Bilinen kenarı, 3:4:5 oranında o kenarın temsil ettiği sayıya bölün. Kısa dik kenar biliniyorsa:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{a}{3}]]]",
            },
            {
              "kind": "p",
              "text": "Uzun dik kenar biliniyorsa:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{b}{4}]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenüs biliniyorsa:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{c}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Üç kısa örnek: kısa dik kenar [[a = 12]] [[k = 12 / 3 = 4]] değerini verir; uzun dik kenar [[b = 20]] [[k = 20 / 4 = 5]] değerini verir; hipotenüs [[c = 30]] [[k = 30 / 5 = 6]] değerini verir. [[k]] değerini bulduktan sonra hesaplayıcıya girin. Hesaplayıcının kendisi bir kenar uzunluğunu kabul edip sizin için [[k]] değerini bulmaz.",
            },
          ],
          "h2": "Bilinen Bir Kenardan Ölçek Faktörü Nasıl Bulunur?",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ölçek faktörü k = 2, baştan sona adım adım çözülmüştür.",
            },
            {
              "kind": "p",
              "text": "[[k = 2]] ile başlayın ve ölçeklenmiş üçgenin her ölçümünü, her seferinde bir formül kullanarak bulun. Her adım yukarıdaki bölümlerdeki bir formülü kullanır ve sonundaki özet tablo sonuçları toplar.",
            },
            {
              "kind": "steps",
              "steps": [
                "İlk dik kenarı bulun: [[a = 3k = 3 \\times 2 = 6]].",
                "İkinci dik kenarı bulun: [[b = 4k = 4 \\times 2 = 8]].",
                "Hipotenüsü bulun: [[c = 5k = 5 \\times 2 = 10]].",
                "Alanı bulun: [[A = 6k^2 = 6 \\times 4 = 24]] birim kare.",
                "Çevreyi bulun: [[P = 12k = 12 \\times 2 = 24]] birim.",
              ],
            },
            {
              "kind": "p",
              "text": "Yeni üçgen özgün 3:4:5 oranlarını korur: 6, 8 ve 10, 3, 4 ve 5 değerlerinin iki katıdır. Dik açıyı Pisagor teoremi ile kontrol edin: [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]]. Alan ve çevre burada 24 sayısını paylaşır, ancak farklı şeyleri ölçerler.",
            },
          ],
          "h2": "3-4-5 Üçgenini Ölçeklemenin Adım Adım Örneği",
          "table": {
            "headers": [
              "Ölçüm",
              "Değer",
            ],
            "rows": [
              [
                "İlk dik kenar a",
                "6",
              ],
              [
                "İkinci dik kenar b",
                "8",
              ],
              [
                "Hipotenüs c",
                "10",
              ],
              [
                "Alan A",
                "24 birim kare",
              ],
              [
                "Çevre P",
                "24 birim",
              ],
            ],
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Özgün üçgenden k = 10 değerine kadar sekiz çözümlü örnek.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: Özgün Üçgen, k = 1",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 1]]. Kenarlar: [[a = 3]], [[b = 4]], [[c = 5]]. Alan: [[A = 6(1^2) = 6]] birim kare. Çevre: [[P = 12(1) = 12]] birim.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Ölçek Faktörü 2",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 2]]. Kenarlar: [[a = 6]], [[b = 8]], [[c = 10]]. Alan: [[A = 6(2^2) = 24]] birim kare. Çevre: [[P = 12(2) = 24]] birim. [[k]] değerini iki katına çıkarmak kenarları ve çevreyi iki katına çıkarır, alanı ise dört katına çıkarır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Ölçek Faktörü 3",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 3]]. Kenarlar: [[a = 9]], [[b = 12]], [[c = 15]]. Alan: [[A = 6(3^2) = 54]] birim kare. Çevre: [[P = 12(3) = 36]] birim.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Ölçek Faktörü 5",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 5]]. Kenarlar: [[a = 15]], [[b = 20]], [[c = 25]]. Alan: [[A = 6(5^2) = 150]] birim kare. Çevre: [[P = 12(5) = 60]] birim. Bu 15-20-25 üçgeni, inşaat düzeninde yaygın bir ölçüdür.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Ölçek Faktörü 0.5",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 0.5]]. Kenarlar: [[a = 1.5]], [[b = 2]], [[c = 2.5]]. Alan: [[A = 6(0.5^2) = 1.5]] birim kare. Çevre: [[P = 12(0.5) = 6]] birim. 1 değerinden küçük bir ölçek faktörü üçgeni küçültür.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Ölçek Faktörü 1.5",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 1.5]]. Kenarlar: [[a = 4.5]], [[b = 6]], [[c = 7.5]]. Alan: [[A = 6(1.5^2) = 13.5]] birim kare. Çevre: [[P = 12(1.5) = 18]] birim. Ondalıklı ölçek faktörleri tam sayı olanlarla tamamen aynı şekilde çalışır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Ölçek Faktörü 4",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 4]]. Kenarlar: [[a = 12]], [[b = 16]], [[c = 20]]. Alan: [[A = 6(4^2) = 96]] birim kare. Çevre: [[P = 12(4) = 48]] birim.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: Ölçek Faktörü 10",
            },
            {
              "kind": "p",
              "text": "Verilen [[k = 10]]. Kenarlar: [[a = 30]], [[b = 40]], [[c = 50]]. Alan: [[A = 6(10^2) = 600]] birim kare. Çevre: [[P = 12(10) = 120]] birim. Alan 100 kat büyümüş, kenarlar ise 10 kat büyümüştür.",
            },
            {
              "kind": "p",
              "text": "Sekiz örneğin tamamında desen hiç değişmez: kenarlar [[k]] ile, çevre [[k]] ile büyür ve alan [[k]] karesi ile büyür.",
            },
          ],
          "h2": "Farklı Ölçek Faktörlerinin Çözümlü Örnekleri",
        },
        "sec-right-angle": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ölçekleme Pisagor ilişkisini asla bozmaz.",
            },
            {
              "kind": "p",
              "text": "Ölçeklenmiş kenarlar [[3k]], [[4k]] ve [[5k]] olur. Pisagor teoremini bunlara uygulayın:",
            },
            {
              "kind": "p",
              "text": "[[[(3k)^2 + (4k)^2 = (5k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Her kareyi açın:",
            },
            {
              "kind": "p",
              "text": "[[[9k^2 + 16k^2 = 25k^2]]]",
            },
            {
              "kind": "p",
              "text": "Her iki taraf da [[25k^2]] değerine eşittir, yani ilişki her pozitif [[k]] için geçerlidir. [[k^2]] çarpanı her iki tarafta da görünür, bu yüzden ölçekleme açıyı değiştiremez. İki dar açı yaklaşık 36,87° ve 53,13° olarak kalır ve toplamları 90° olarak kalır, yani üçüncü açı tam olarak 90° kalır.",
            },
            {
              "kind": "p",
              "text": "Bu, benzerlik ile aynı fikirdir: ölçeklenmiş her 3-4-5 üçgeni özgün üçgene benzer, karşılıklı açıları eşit ve kenarları orantılıdır. Kenarları 6, 8, 10 olan bir üçgen, kenarları 3, 4, 5 olan bir üçgenle aynı açılara sahiptir.",
            },
          ],
          "h2": "3-4-5 Üçgeni Neden Her Zaman 90 Derecelik Açıyı Korur?",
        },
        "sec-construction": {
          "blocks": [
            {
              "kind": "p",
              "text": "3 işaretleyin, 4 ölçün ve köşegenin 5 olduğunu kontrol edin.",
            },
            {
              "kind": "p",
              "text": "İnşaatçılar, gönye aleti olmadan 90 derecelik bir köşeyi kontrol etmek için 3-4-5 yöntemini kullanır. Köşeden başlayın ve bir yönde 3 birim, bitişik yönde 4 birim işaretleyin. İşaretlenen iki uç nokta arasındaki uzaklığı ölçün: 5 birim ise açı, ölçüm doğruluğuna bağlı olarak 90 derecedir.",
            },
            {
              "kind": "p",
              "text": "Pratik bir örnek fit kullanır: bir yönde 3 fit, bitişik yönde 4 fit ve 5 fitlik bir köşegen. Kontrol [[3^2 + 4^2 = 5^2]] olur, çünkü [[9 + 16 = 25]]. Köşegen 5 fitten uzunsa köşe 90 dereceden daha geniştir; daha kısaysa daha dardır.",
            },
            {
              "kind": "p",
              "text": "Daha büyük katlar daha büyük düzenlerde daha iyi çalışır, çünkü daha uzun bir taban çizgisi küçük bir işaretleme hatasını ölçümün daha küçük bir payı yapar. 6-8-10, 9-12-15, 12-16-20 ya da 15-20-25 fit kullanın ve üç ölçümde de aynı birimi koruyun.",
            },
            {
              "kind": "p",
              "text": "Yöntem, ölçümler doğru olduğunda dik açı ilişkisini kontrol eder. Hatalar, düzgün olmayan yüzeyler, şerit sarkması ve işaretleme yanlışlıkları sonucu etkileyebilir, bu yüzden mükemmel inşaat doğruluğunu garanti ettiğini iddia etmeyin. Şeridi düz ve gergin tutun ve düzenin izin verdiği yerlerde kontrolü diğer köşeden de tekrarlayın.",
            },
          ],
          "h2": "Dik Köşeyi Kontrol Etmek İçin 3-4-5 Kuralı Nasıl Kullanılır?",
          "image": {
            "alt": "Bir yönde 3 fit, bitişik yönde 4 fit işaretlenmiş ve 5 fitlik köşegeni ile dik açı işareti bulunan bir köşeyi gösteren inşaat düzeni",
            "caption": "Bir yönde 3 fit, diğer yönde 4 fit işaretleyin: 5 fitlik bir köşegen, dik bir köşe demektir.",
            "src": "three-four-five-construction.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "3-4-5 kuralı, dik köşenin önemli olduğu her yerde karşınıza çıkar.",
            },
            {
              "kind": "p",
              "text": "Dik açılı köşeleri kontrol etmek temel kullanımdır: bir inşaatçı köşeden 3 ve 4 birim işaretler ve çerçeveyi yerine sabitlemeden önce 5 birimlik köşegeni kontrol eder. Temel döşemek de her köşede aynı kontrolü kullanır, böylece duvarlar dik başlar.",
            },
            {
              "kind": "p",
              "text": "Kat planı çıkarmak, kare oda düzenlerini kontrol etmek, teras inşaatı, veranda döşemek ve karo döşemek hep dik köşelere dayanır ve yöntem, işe uyan her ölçekte bunların her biri için çalışır. Çit düzeni, marangozluk, peyzaj ve ölçme işleri de dik açılar için aynı kontrolü kullanır.",
            },
            {
              "kind": "p",
              "text": "İş için gerçekçi ölçümler kullanın; küçük bir çerçeve için 3-4-5 fit ya da bir temel köşesi için 9-12-15 fit gibi. Yöntem pratik bir kontroldür, profesyonel ölçme ya da inşaat gerekliliklerinin yerine geçmez.",
            },
          ],
          "h2": "3-4-5 Üçgeninin İnşaatta Kullanım Alanları",
        },
        "sec-similar": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ölçeklenmiş her 3-4-5 üçgeni özgün üçgene benzer.",
            },
            {
              "kind": "p",
              "text": "Benzer üçgenler aynı şekle ama farklı büyüklüklere sahiptir: karşılıklı açıları eşittir ve karşılıklı kenarları orantılıdır. 3-4-5 ve 6-8-10 üçgenlerinin açıları aynıdır, yaklaşık 36,87°, 53,13° ve 90°, ve ikincinin her kenarı birincinin eşleşen kenarının tam olarak iki katıdır.",
            },
            {
              "kind": "p",
              "text": "Ölçek faktörü büyüklüğü değiştirirken şekil değişmeden kalır. Tüm kenar oranları 3:4:5 olarak kalır, yani [[a : b : c = 3 : 4 : 5]] özgün üçgen ve ölçeklenmiş her kopya için geçerlidir. Bu yüzden hesaplayıcı, ölçeklenmiş herhangi bir 3-4-5 üçgenini tek bir sayı ile, [[k]], tanımlayabilir.",
            },
          ],
          "h2": "Benzer Üçgenler ile 3-4-5 Oranı Arasındaki İlişki",
        },
        "sec-vs-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Üç dik üçgen, üç farklı kenar oranı.",
            },
            {
              "kind": "p",
              "text": "Bir 3-4-5 üçgeni kendiliğinden bir 45-45-90 ya da 30-60-90 üçgeni değildir. Üçü de dik üçgendir, ancak açıları ve kenar oranları farklıdır, bu yüzden formülleri birbirinin yerine kullanılamaz. 3-4-5 üçgeninin dik kenarları eşit değildir ve kenarları tam sayıdır, 45-45-90 üçgeni ikizkenardır ve hipotenüsü [[a\\sqrt{2}]] olur, 30-60-90 üçgeninin hipotenüsü ise kısa dik kenarının iki katıdır. <a href=\"/special-right-triangle-calculator/\">Özel dik üçgen hesaplayıcı</a> 45-45-90 ve 30-60-90 durumlarını kapsarken, <a href=\"/5-12-13-triangle-calculator/\">5-12-13 üçgen hesaplayıcı</a> farklı bir Pisagor üçlüsünü kapsar.",
            },
            {
              "kind": "p",
              "text": "Aşağıdaki tabloda üç üçgen yan yana karşılaştırılmıştır. Önce açıları doğrulayın, sonra onlara uyan oranı seçin: yanlış oran yanlış bir hipotenüs ve yanlış bir alan verir.",
            },
          ],
          "h2": "3-4-5, 45-45-90 ve 30-60-90 Üçgenleri Arasındaki Fark",
          "image": {
            "alt": "Pisagor üçlüleri 3-4-5, 6-8-10 ve 5-12-13 karşılaştırması; 6-8-10 ölçeklenmiş bir 3-4-5 iken 5-12-13 farklı bir üçlüdür",
            "caption": "6-8-10 ölçeklenmiş bir 3-4-5 iken, 5-12-13 farklı bir Pisagor üçlüsüdür.",
            "src": "three-four-five-triples.svg",
          },
          "table": {
            "headers": [
              "Özellik",
              "3-4-5",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Kenar oranı",
                "3:4:5",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Açılar",
                "36.87°, 53.13°, 90°",
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
                "Hipotenüs",
                "5k",
                "a√2",
                "2a",
              ],
              [
                "Temel özellik",
                "Pisagor üçlüsü",
                "İkizkenar dik üçgen",
                "Özel açı oranı",
              ],
              [
                "Hesaplayıcı odağı",
                "Ölçekleme",
                "Özel üçgen hesaplamaları",
                "Özel üçgen hesaplamaları",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "3-4-5 sorularında on dört hata tekrar tekrar karşınıza çıkar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Yalnızca bir kenarı ölçek faktörüyle çarpmak: [[k = 2]] için kenarlar 6, 8 ve 10 olur, 6, 4 ve 5 olmaz. Üç kenarı da aynı [[k]] ile ölçekleyin.",
                "Üç kenarı da eşit şekilde ölçeklemeyi unutmak: yalnızca dik kenarları ölçeklemek oranı ve dik açıyı bozar. Aynı [[k]] değerini her kenara uygulayın.",
                "5 değerini hipotenüs yerine dik kenar sanmak: 5 en uzun kenardır ve 90° açının karşısında yer alır. [[c = 5k]] her zaman hipotenüstür.",
                "Ölçek faktörünü kenar uzunluğu ile karıştırmak: [[k]] çarpandır, kenar değildir. [[k = 2]] için kenarlar 6, 8 ve 10 olur.",
                "Sıfırı geçerli bir ölçek faktörü olarak kullanmak: [[k = 0]] üç kenarı da sıfır yapar; bu dejenere bir şekildir, üçgen değildir. [[k]] sıfırdan büyük olmak zorundadır.",
                "Negatif bir ölçek faktörü girmek: negatif bir [[k]] negatif kenar uzunlukları verir, bunlar bir üçgeni tanımlayamaz. Yalnızca pozitif bir [[k]] girin.",
                "Alan formülünde k değerinin karesini almayı unutmak: alan [[k]] karesi ile büyür. [[k = 3]] için [[A = 6 \\times 9 = 54]] olur, 18 olmaz.",
                "Alanı çevre ile karıştırmak: alan birim kare, çevre ise doğrusal birim ile ölçülür. [[k = 2]] için ikisi de 24 olur, ancak farklı şeyleri ölçerler.",
                "Çevreyi hesaplarken yalnızca iki kenarı toplamak: [[k = 2]] için [[6 + 8 = 14]] hipotenüsü dışarıda bırakır. Üç kenarı da toplayın.",
                "Ölçüm birimlerini karıştırmak: fit cinsinden bir dik kenar ile inç cinsinden bir köşegen doğrudan birleştirilemez. Önce her ölçümü tek bir birime çevirin.",
                "Yalnızca 3, 4 ve 5 değerlerinin işe yaradığını sanmak: 6-8-10 ya da 9-12-15 gibi ölçeklenmiş her kopya geçerli bir 3-4-5 üçgenidir.",
                "Her dik üçgenin 3:4:5 oranını izlediğini sanmak: çoğu dik üçgen başka oranlara sahiptir. Formülleri kullanmadan önce oranı doğrulayın.",
                "3-4-5 üçgenini 45-45-90 üçgeni ile karıştırmak: 3-4-5 üçgeninin açıları yaklaşık 36,87° ve 53,13° olur, iki 45° açı olmaz.",
                "Ölçümleri gereksiz yere yuvarlamak: erken yuvarlamak hataları sonraki adımlara taşır. Yalnızca son cevabı yuvarlayın.",
              ],
            },
          ],
          "h2": "3-4-5 Üçgen Hesaplayıcısını Kullanırken Yapılan Yaygın Hatalar",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dört hızlı kontrol neredeyse her hatayı yakalar.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 1: Kenar Oranı",
            },
            {
              "kind": "p",
              "text": "[[a : b : c = 3 : 4 : 5]] olduğunu doğrulayın. Burada [[6 : 8 : 10]] 2 değerine bölününce [[3 : 4 : 5]] verir, yani kontrol geçer. Kenarlar 3:4:5 değerine indirgenmiyorsa ölçeklenmiş bir 3-4-5 üçgeni değildir.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 2: Pisagor Teoremi",
            },
            {
              "kind": "p",
              "text": "[[a^2 + b^2 = c^2]] olduğunu doğrulayın. Burada [[6^2 + 8^2 = 36 + 64 = 100]] ve [[10^2 = 100]] olur, yani teorem sağlanır. Herhangi bir kenar için yanlış bir değer bu eşitliği bozar.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 3: Ölçek Faktörü Tutarlılığı",
            },
            {
              "kind": "p",
              "text": "[[\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k]] olduğunu doğrulayın. Burada her bölme 2 değerini verir, yani üç kenardan da [[k = 2]] elde edilir. Üç bölme farklı çıkarsa en az bir kenar yanlıştır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 4: Kenar Sıralaması",
            },
            {
              "kind": "p",
              "text": "[[a < b < c]] olduğunu doğrulayın. Burada [[6 < 8 < 10]] olduğundan sıralama sağlanır. Varsayılan hipotenüs en uzun kenar değilse etiketler karışmıştır.",
            },
          ],
          "h2": "Ölçeklenmiş Bir 3-4-5 Üçgeni Nasıl Doğrulanır?",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cevapları okumadan önce sekiz sorunun tamamını kağıt üzerinde çözün.",
            },
            {
              "kind": "h3",
              "text": "Soru 1: k = 2 ile Ölçekleme",
            },
            {
              "kind": "p",
              "text": "[[k = 2]] kullanarak bir 3-4-5 üçgenini ölçekleyin. Üç kenar uzunluğunu, alanı ve çevreyi bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 2: k = 4 ile Ölçekleme",
            },
            {
              "kind": "p",
              "text": "[[k = 4]] kullanarak bir 3-4-5 üçgenini ölçekleyin. Üç kenar uzunluğunu, alanı ve çevreyi bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 3: k = 3 ile Alan",
            },
            {
              "kind": "p",
              "text": "[[k = 3]] olan ölçeklenmiş bir 3-4-5 üçgeninin alanını birim kare cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 4: k = 5 ile Çevre",
            },
            {
              "kind": "p",
              "text": "[[k = 5]] olan ölçeklenmiş bir 3-4-5 üçgeninin çevresini birim cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 5: a = 15 Değerinden k Değerini Bulma",
            },
            {
              "kind": "p",
              "text": "Ölçeklenmiş bir 3-4-5 üçgeninin kısa dik kenarı 15 olur. [[k]] değerini ve diğer iki kenarı bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 6: b = 24 Değerinden k Değerini Bulma",
            },
            {
              "kind": "p",
              "text": "Ölçeklenmiş bir 3-4-5 üçgeninin uzun dik kenarı 24 olur. [[k]] değerini ve diğer iki kenarı bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 7: c = 35 Değerinden k Değerini Bulma",
            },
            {
              "kind": "p",
              "text": "Ölçeklenmiş bir 3-4-5 üçgeninin hipotenüsü 35 olur. [[k]] değerini ve iki dik kenarı bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 8: 12, 16 ve 20 Değerlerini Doğrulama",
            },
            {
              "kind": "p",
              "text": "Pisagor teoremini ve kenar oranını kullanarak 12, 16 ve 20 değerlerinin ölçeklenmiş bir 3-4-5 üçgeni oluşturup oluşturmadığını kontrol edin. Oluşturuyorsa ölçek faktörünü belirtin.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Sorularının Cevapları",
            },
            {
              "kind": "p",
              "text": "Cevap 1: [[a = 6]], [[b = 8]], [[c = 10]], [[A = 24]] birim kare, [[P = 24]] birim.",
            },
            {
              "kind": "p",
              "text": "Cevap 2: [[a = 12]], [[b = 16]], [[c = 20]], [[A = 96]] birim kare, [[P = 48]] birim.",
            },
            {
              "kind": "p",
              "text": "Cevap 3: [[A = 6(3^2) = 54]] birim kare.",
            },
            {
              "kind": "p",
              "text": "Cevap 4: [[P = 12(5) = 60]] birim.",
            },
            {
              "kind": "p",
              "text": "Cevap 5: [[k = 15 / 3 = 5]], yani [[b = 20]] ve [[c = 25]].",
            },
            {
              "kind": "p",
              "text": "Cevap 6: [[k = 24 / 4 = 6]], yani [[a = 18]] ve [[c = 30]].",
            },
            {
              "kind": "p",
              "text": "Cevap 7: [[k = 35 / 5 = 7]], yani [[a = 21]] ve [[b = 28]].",
            },
            {
              "kind": "p",
              "text": "Cevap 8: [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]] ve [[12 : 16 : 20]] 4 değerine bölününce [[3 : 4 : 5]] verir, yani evet, [[k = 4]] ile.",
            },
          ],
          "h2": "Cevaplı Alıştırma Soruları",
        },
      },
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları",
      "relatedIntro": "Aşağıdaki hesaplayıcıların her biri farklı bir dik üçgen görevini yerine getirir; bu nedenle ihtiyacınız olan ölçüme uygun aracı seçin.",
      "relatedItems": [
        "Dik Üçgen Hesaplayıcı",
        "Pisagor Üçlüleri Hesaplayıcı",
        "5-12-13 Üçgen Hesaplayıcı",
        "Özel Dik Üçgen Hesaplayıcı",
        "Dik Üçgen Alan Hesaplayıcı",
        "Dik Üçgen Çevre Hesaplayıcı",
      ],
      "faqHeading": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "answer": "3-4-5 üçgeni, kenar uzunlukları [[3 : 4 : 5]] oranını izleyen bir dik üçgendir. Uzunluğu 3 ve 4 olan kenarlar dik kenarlardır ve 90 derecelik açıda birleşir, uzunluğu 5 olan kenar ise hipotenüstür. En küçük Pisagor üçlüsüdür.",
          "question": "3-4-5 üçgeni nedir?",
        },
        {
          "answer": "Kenarları Pisagor teoremini sağlar: [[3^2 + 4^2 = 5^2]], çünkü [[9 + 16 = 25]]. Bu eşitlik yalnızca dik üçgenler için geçerlidir, yani uzunluğu 5 olan kenarın karşısındaki açı 90 derece olmak zorundadır. Ölçekleme eşitliği korur, bu yüzden ölçeklenmiş her kopya dik açıyı korur.",
          "question": "3-4-5 üçgeni neden dik açı oluşturur?",
        },
        {
          "answer": "Kural, [[3 : 4 : 5]] oranındaki kenar uzunluklarının her zaman bir dik üçgen oluşturduğudur. İnşaatçılar bunu dik köşeleri kontrol etmek için kullanır: bir yönde 3 birim, diğer yönde 4 birim işaretleyin ve köşegen 5 birim ise köşe, ölçüm doğruluğuna bağlı olarak diktir.",
          "question": "3-4-5 üçgen kuralı nedir?",
        },
        {
          "answer": "Pozitif bir ölçek faktörü [[k]] girin ve Hesapla düğmesine tıklayın. Hesaplayıcı özgün kenarları [[k]] ile çarparak [[a = 3k]], [[b = 4k]] ve [[c = 5k]] değerlerini verir, ardından alanı [[A = 6k^2]] ve çevreyi [[P = 12k]] olarak hesaplar. Alanı temizlemek için Sıfırla düğmesini kullanın.",
          "question": "3-4-5 üçgen hesaplayıcısı nasıl çalışır?",
        },
        {
          "answer": "Ölçek faktörü [[k]], üç özgün kenar uzunluğunun tamamını aynı miktarda çarpan sayıdır. [[k = 1]] ile özgün üçgeni elde edersiniz, daha büyük bir [[k]] üçgeni büyütür ve 0 ile 1 arasındaki bir [[k]] üçgeni küçültür. Şekil ve açılar aynı kalır.",
          "question": "3-4-5 üçgeninde ölçek faktörü nedir?",
        },
        {
          "answer": "Oranın her parçasını [[k]] ile çarpın: [[a = 3k]], [[b = 4k]] ve [[c = 5k]]. [[k = 2]] için kenarlar 6, 8 ve 10 olur. Her kenar aynı [[k]] değerini kullanmak zorundadır, yoksa oran bozulur ve üçgen dik açısını kaybeder.",
          "question": "Ölçeklenmiş bir 3-4-5 üçgeninin kenarlarını nasıl hesaplarım?",
        },
        {
          "answer": "Dik kenarları [[A = \\frac{ab}{2}]] formülünde kullanın; bu, ölçeklenmiş bir 3-4-5 üçgeni için [[A = 6k^2]] olarak sadeleşir. [[k = 3]] için [[A = 6 \\times 9 = 54]] birim karedir. Alan her zaman birim kare ile ölçülür ve [[k]] karesi ile büyür.",
          "question": "Alanını nasıl hesaplarım?",
        },
        {
          "answer": "Üç kenarı da [[P = a + b + c]] ile toplayın; bu, [[P = 12k]] olarak sadeleşir. [[k = 3]] için [[P = 36]] birimdir. Çevre doğrudan [[k]] ile büyür, yani [[k]] değerini iki katına çıkarmak çevreyi iki katına çıkarır. Cevap doğrusal birimlerle verilir, birim kare ile değil.",
          "question": "Çevresini nasıl hesaplarım?",
        },
        {
          "answer": "Evet. 6, 8 ve 10 kenarları, [[k = 2]] ile ölçeklenmiş 3-4-5 üçgenidir, yani aynı şekli, aynı açıları ve aynı dik açıyı oluşturur. 9-12-15 ya da 15-20-25 gibi ölçeklenmiş her kopya aynı şekilde çalışır.",
          "question": "3-4-5 yerine 6-8-10 kullanabilir miyim?",
        },
        {
          "answer": "Bir inşaatçı köşeden bir yönde 3 fit ve bitişik yönde 4 fit işaretler, ardından işaretler arasındaki köşegeni ölçer. 5 fit okunuyorsa köşe diktir. 6-8-10 ya da 9-12-15 fit gibi daha büyük katlar daha büyük düzenlere uygundur.",
          "question": "İnşaatçılar 3-4-5 kuralını nasıl kullanır?",
        },
        {
          "answer": "Evet, [[k]] için herhangi bir pozitif gerçek değer geçerli bir ölçeklenmiş 3-4-5 üçgeni verir. [[k = 0.5]] için kenarlar 1,5, 2 ve 2,5 olur, [[k = 1.5]] için ise 4,5, 6 ve 7,5 olur. Sıfır ve negatif değerler geçerli üçgen vermez.",
          "question": "Ölçek faktörü ondalıklı olabilir mi?",
        },
        {
          "answer": "Evet, tam sayı bir ölçek faktörüne sahip ölçeklenmiş her 3-4-5 üçgeni bir Pisagor üçlüsüdür, çünkü kenarları [[a^2 + b^2 = c^2]] eşitliğini sağlayan tam sayılardır. Ondalıklı bir ölçek faktöründe de kenarlar teoremi sağlar. 5-12-13 üçlüsü farklı bir Pisagor üçlüsüdür.",
          "question": "Her 3-4-5 üçgeni bir Pisagor üçlüsü müdür?",
        },
      ],
    },
};
