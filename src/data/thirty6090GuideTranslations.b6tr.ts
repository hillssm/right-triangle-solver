// thirty6090GuideTranslations.btr.ts: 30-60-90 Triangle
// Guide (Page 39 of 45) translation.
export const THIRTY6090_B6_TR = {
  "tr": {
      "meta": {
        "title": "30-60-90 Üçgen Hesaplayıcı - Kenarlar, Alan, Çevre",
        "description": "30-60-90 üçgen hesaplayıcıyı kullanarak 1:√3:2 oranıyla bilinen tek bir kenardan kısa dik kenarı, uzun dik kenarı, hipotenüsü, alanı ve çevreyi bulun.",
        "primaryKeyword": "30-60-90 Triangle Calculator",
        "slug": "30-60-90-triangle-calculator",
      },
      "tocHeading": "Rehber İçeriği",
      "tocItems": {
        "sec-intro": "30-60-90 Üçgen Hesaplayıcı",
        "sec-calculate": "Eksik Kenarları, Alanı ve Çevreyi Hesaplama",
        "sec-what": "30-60-90 Üçgeni Nedir?",
        "sec-sides": "Kısa Dik Kenar, Uzun Dik Kenar ve Hipotenüsü Anlama",
        "sec-ratio": "30-60-90 Üçgeni Kenar Oranı",
        "sec-why-sqrt3": "3'ün Karekökü Neden Ortaya Çıkıyor?",
        "sec-long-leg": "Kısa Dik Kenardan Uzun Dik Kenarı Bulma Formülü",
        "sec-hypotenuse": "Kısa Dik Kenardan Hipotenüsü Bulma Formülü",
        "sec-short-leg-hyp": "Hipotenüsten Kısa Dik Kenarı Bulma Formülü",
        "sec-short-leg-long": "Uzun Dik Kenardan Kısa Dik Kenarı Bulma Formülü",
        "sec-long-leg-hyp": "Hipotenüsten Uzun Dik Kenarı Bulma Formülü",
        "sec-area": "30-60-90 Üçgeninin Alanı Nasıl Hesaplanır",
        "sec-perimeter": "30-60-90 Üçgeninin Çevresi Nasıl Hesaplanır",
        "sec-step-example": "30-60-90 Üçgeni Çözmenin Adım Adım Örneği",
        "sec-examples": "30-60-90 Üçgen Hesaplamalarına İlişkin Çözümlü Örnekler",
        "sec-derive-pythagoras": "Pisagor Teoremi ile 30-60-90 Üçgen Oranını Türetme",
        "sec-equilateral": "30-60-90 Üçgenleri ile Eşkenar Üçgenler Arasındaki İlişki",
        "sec-trig": "30-60-90 Üçgeninde Trigonometrik İlişkiler",
        "sec-verify": "30-60-90 Üçgen Hesaplamalarınızı Nasıl Doğrularsınız",
        "sec-properties": "30-60-90 Üçgenlerinin Önemli Özellikleri",
        "sec-mistakes": "30-60-90 Üçgenleri Çözerken Yapılan Yaygın Hatalar",
        "sec-applications": "30-60-90 Üçgenlerinin Pratik Uygulamaları",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
        "sec-faq": "Sıkça Sorulan Sorular",
      },
      "sections": {
        "sec-intro": {
          "h2": "30-60-90 Üçgen Hesaplayıcı",
          "blocks": [
            {
              "kind": "p",
              "text": "Bilinen tek bir kenardan 30-60-90 üçgeninin tüm eksik kenarlarını, alanını ve çevresini bulun.",
            },
            {
              "kind": "p",
              "text": "30-60-90 üçgeni, üç açısı 30°, 60° ve 90° olan bir dik üçgendir. Kenar uzunlukları her zaman aynı sabit oranı izlediği için özel dik üçgen olarak adlandırılır; üçgen ne kadar büyük ya da küçük olursa olsun bu oran değişmez. Bu sayfadaki 30-60-90 üçgen hesaplayıcı, girdiğiniz tek bir kenar uzunluğundan kısa dik kenarı, uzun dik kenarı, hipotenüsü, alanı ve çevreyi bulmak için bu oranı kullanır.",
            },
            {
              "kind": "p",
              "text": "ABC üçgeninde A açısı 30°, B açısı 60° ve C açısı 90°'dir. BC kenarı, 30° açısının karşısındaki kısa dik kenar [[a]] dir. AC kenarı, 60° açısının karşısındaki uzun dik kenar [[b]] dir. AB kenarı, 90° açısının karşısındaki hipotenüs [[c]] dir. Üç kenar her zaman [[a : b : c = 1 : \\sqrt{3} : 2]] koşulunu sağlar; bu, [[b = a\\sqrt{3}]] ve [[c = 2a]] olduğu anlamına gelir.",
            },
            {
              "kind": "p",
              "text": "[[a = 5]] cm ise [[b = 5\\sqrt{3} \\approx 8.660]] cm ve [[c = 2 \\times 5 = 10]] cm olur. Hesaplayıcı aynı kısa dik kenardan alanı ve çevreyi de bulabilir, bu nedenle tek bir ölçüm tüm üçgeni tanımlamaya yeter. Aşağıdaki bölümlerde oran, yedi hesaplayıcı modu ve formüller açıklanır; her adımda çözümlü örnekler verilir.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Eksik Kenarları, Alanı ve Çevreyi Hesaplama",
          "blocks": [
            {
              "kind": "p",
              "text": "Yedi mod, bilinen tek bir kenardan başlamanın her yolunu kapsar.",
            },
            {
              "kind": "p",
              "text": "Bu sayfadaki hesaplayıcının yedi modu vardır; her mod bulabileceği bir ölçüm içindir. Bildiğiniz kenara ve ihtiyacınız olan ölçüme uygun modu seçin. Her mod yalnızca bir girdi ister, çünkü sabit oran geri kalan her şeyi tamamlar. Aşağıdaki tabloda yedi modun tamamı, her birinin ihtiyaç duyduğu girdi ve döndürdüğü sonuç listelenir.",
            },
            {
              "kind": "p",
              "text": "Bir modu kullanmak için önce hangi kenarı bildiğinizi belirleyin. 30° açısının karşısındaki kenar kısa dik kenar [[a]], 60° açısının karşısındaki kenar uzun dik kenar [[b]] ve 90° açısının karşısındaki kenar hipotenüs [[c]] dir. Bu ölçümü pozitif bir sayı olarak girin, bir birim seçin ve Hesapla düğmesine tıklayın. Sonuç, formülü ve yerine koyma işlemini gösteren adım adım çözümle birlikte görünür; yalnızca cevabı değil, çözümü de görürsünüz. Yeni bir probleme başlamadan önce alanları temizlemek için Sıfırla seçeneğini kullanın.",
            },
            {
              "kind": "p",
              "text": "Farklı modlar farklı formüller gerektirir, çünkü her biri farklı bir bilinen kenardan başlar. Kısa dik kenardan uzun dik kenarı bulmak √3 ile çarpmayı gerektirirken, hipotenüsten kısa dik kenarı bulmak 2'ye bölmeyi gerektirir. Alan ve çevre modları kısa dik kenardan başlar ve önce diğer kenarları içeride hesaplar, sonra alan ya da çevre formülünü uygular. Bu iki modu kullanmadan önce eksik kenarları kendiniz bulmanız gerekmez.",
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
                "Kısa dik kenardan uzun dik kenar",
                "Kısa dik kenar a",
                "Uzun dik kenar b",
              ],
              [
                "Kısa dik kenardan hipotenüs",
                "Kısa dik kenar a",
                "Hipotenüs c",
              ],
              [
                "Hipotenüsten kısa dik kenar",
                "Hipotenüs c",
                "Kısa dik kenar a",
              ],
              [
                "Uzun dik kenardan kısa dik kenar",
                "Uzun dik kenar b",
                "Kısa dik kenar a",
              ],
              [
                "Hipotenüsten uzun dik kenar",
                "Hipotenüs c",
                "Uzun dik kenar b",
              ],
              [
                "Kısa dik kenardan alan",
                "Kısa dik kenar a",
                "Alan A",
              ],
              [
                "Kısa dik kenardan çevre",
                "Kısa dik kenar a",
                "Çevre P",
              ],
            ],
          },
          "image": {
            "src": "thirty-60-90-modes.svg",
            "alt": "Yedi 30-60-90 hesaplayıcı modunun genel görünümü; her mod için bilinen girdi ve hesaplanan çıktı gösteriliyor",
            "caption": "Yedi mod: her biri bilinen tek bir kenardan başlar ve eksik bir ölçümü bulur.",
          },
        },
        "sec-what": {
          "h2": "30-60-90 Üçgeni Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "30-60-90 üçgeni adını üç açısından alır.",
            },
            {
              "kind": "p",
              "text": "Bu bir dik üçgendir, yani açılarından biri tam olarak 90°'dir. Diğer iki açı 30° ve 60°'dir ve adı üç açıyı da sırayla listeler. Dik açı sabit olduğundan ve diğer iki açı da sabit olduğundan üçgenin şekli tamamen belirlenir: her 30-60-90 üçgeni aynı şekle sahiptir ve bu tür iki üçgen yalnızca büyüklük bakımından farklıdır.",
            },
            {
              "kind": "p",
              "text": "Kenar uzunlukları sabit bir oranı izlediği için özel dik üçgen olarak adlandırılır. Çoğu dik üçgende bir kenarı bilmek diğerleri hakkında hiçbir şey söylemez. 30-60-90 üçgeninde bir kenarı bilmek hepsini bilmek demektir, çünkü [[1 : \\sqrt{3} : 2]] oranı üç kenarı birbirine bağlar. Bu nedenle hesaplayıcı tek bir girdiden beş ölçüm bulabilir.",
            },
            {
              "kind": "p",
              "text": "Üç açı, her üçgende olduğu gibi toplam 180° eder: [[30° + 60° + 90° = 180°]]. Üçgen birkaç milimetre kadar küçük ya da bir arsa kadar büyük olabilir; kenarlar birlikte büyürken açılar aynı kalır. Oran da aynı kalır, bu nedenle kısa dik kenarı 5 cm olan bir üçgen ile kısa dik kenarı 5 m olan bir üçgen, farklı boyutlarda aynı şekildir.",
            },
          ],
          "image": {
            "src": "thirty-60-90-main.svg",
            "alt": "Açıları 30, 60 ve 90 derece olan etiketli ABC 30-60-90 üçgeni; kısa dik kenar a, uzun dik kenar a çarpı 3'ün karekökü ve hipotenüs 2a",
            "caption": "ABC üçgeni: açılar 30°, 60° ve 90°, kenarlar a, a√3 ve 2a.",
          },
        },
        "sec-sides": {
          "h2": "Kısa Dik Kenar, Uzun Dik Kenar ve Hipotenüsü Anlama",
          "blocks": [
            {
              "kind": "p",
              "text": "Üç kenar adını karşısındaki açılardan alır.",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenar [[a]], 30° açısının karşısındaki kenardır. Üçgenin en kısa kenarıdır, çünkü en küçük açı her zaman en kısa kenarın karşısında bulunur. ABC üçgeninde bu kenar BC'dir. Kısa dik kenar çoğu hesaplamanın doğal başlangıç noktasıdır, çünkü diğer iki kenar onun basit katlarıdır: uzun dik kenar [[a\\sqrt{3}]] ve hipotenüs [[2a]] dir.",
            },
            {
              "kind": "p",
              "text": "Uzun dik kenar [[b]], 60° açısının karşısındaki kenardır. Kısa dik kenardan uzun, hipotenüsten kısadır. ABC üçgeninde bu kenar AC'dir. Uzunluğu, kısa dik kenarın [[\\sqrt{3} \\approx 1.732]] katıdır, yani yaklaşık iki katından biraz kısadır. Hipotenüs [[c]], 90° açısının karşısındaki kenardır, AB kenarıdır ve üçgenin en uzun kenarıdır; kısa dik kenarın tam iki katıdır.",
            },
            {
              "kind": "p",
              "text": "Kenarları karşılarındaki açılara göre belirlemek, şeklin nasıl çizildiğine bakarak karar vermekten daha güvenilirdir. Bir üçgen döndürülebilir ya da çevrilebilir, bu nedenle kısa dik kenar solda, sağda ya da altta görünebilir. Karşı açı kuralı hiç değişmez: 30° açısını bulun, karşısındaki kenar kısa dik kenardır. Küçük bir kareyle işaretlenen 90° açısını bulun, karşısındaki kenar hipotenüstür.",
            },
          ],
          "table": {
            "headers": [
              "Kenar",
              "Karşısındaki açı",
              "Büyüklük",
            ],
            "rows": [
              [
                "Kısa dik kenar a",
                "30°",
                "En küçük",
              ],
              [
                "Uzun dik kenar b",
                "60°",
                "Orta",
              ],
              [
                "Hipotenüs c",
                "90°",
                "En uzun",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "30-60-90 Üçgeni Kenar Oranı",
          "blocks": [
            {
              "kind": "p",
              "text": "1:√3:2 oranı her 30-60-90 üçgenini belirler.",
            },
            {
              "kind": "p",
              "text": "30-60-90 üçgeninin kenar oranı şöyledir:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : \\sqrt{3} : 2]]]",
            },
            {
              "kind": "p",
              "text": "Oranın her bir parçası bir kenarı tanımlar. Kısa dik kenar bir birimi, uzun dik kenar √3 birimi ve hipotenüs iki birimi temsil eder. Kısa dik kenar [[a]] olarak yazıldığında üç kenar [[a = a]], [[b = a\\sqrt{3}]] ve [[c = 2a]] olur. Kısa dik kenar 1 cm ise uzun dik kenar √3 cm ve hipotenüs 2 cm olur. Kısa dik kenar 10 cm ise uzun dik kenar [[10\\sqrt{3}]] cm ve hipotenüs 20 cm olur.",
            },
            {
              "kind": "p",
              "text": "Üçgenin büyüklüğü ne olursa olsun oran aynı kalır, çünkü tüm 30-60-90 üçgenleri benzerdir. Bir üçgeni büyütmek ya da küçültmek her kenarı aynı katsayıyla çarpar, bu nedenle kenarlar arasındaki oranlar değişmez. [[a = 4]] cm örneğini kullanın: uzun dik kenar [[b = 4\\sqrt{3} \\approx 6.928]] cm ve hipotenüs [[c = 8]] cm olur; [[4 : 6.928 : 8]] oranı, [[1 : \\sqrt{3} : 2]] oranıyla aynıdır.",
            },
            {
              "kind": "p",
              "text": "Mümkün olduğunca tam köklü biçimi koruyun. √3 yaklaşık 1.732'dir ama irrasyonel bir sayıdır, bu nedenle hiçbir ondalık sayı ona tam olarak eşit değildir. [[4\\sqrt{3}]] cm yazmak tamdır, 6.928 cm ise yuvarlanmış bir yaklaşımdır. Soru tam değer istediğinde çalışmanızda ve son cevaplarda tam biçimi kullanın; ondalık sayıyı yalnızca yaklaşık cevap gerektiğinde verin.",
            },
          ],
          "image": {
            "src": "thirty-60-90-ratio.svg",
            "alt": "Kısa dik kenar, uzun dik kenar ve hipotenüsü 1'e 3'ün kareköküne 2 oranında karşılaştıran üç çubuk",
            "caption": "Sabit oran 1:√3:2, kısa dik kenarı, uzun dik kenarı ve hipotenüsü karşılaştırır.",
          },
        },
        "sec-why-sqrt3": {
          "h2": "3'ün Karekökü Neden Ortaya Çıkıyor?",
          "blocks": [
            {
              "kind": "p",
              "text": "3'ün karekökü, bir eşkenar üçgeni ikiye bölmekten gelir.",
            },
            {
              "kind": "p",
              "text": "Kenar uzunluğu [[2a]] olan bir eşkenar üçgenle başlayın. Üç kenarı da eşittir ve üç açısı da 60°'dir. Şimdi bir köşeden karşı kenara bir yükseklik çizin. Yükseklik, köşeden çıkan ve karşı kenarla dik açı yaparak buluşan doğrudur.",
            },
            {
              "kind": "p",
              "text": "Yükseklik tabanı ikiye böler ve onu [[a]] uzunluğunda iki eşit parçaya ayırır. Ayrıca eşkenar üçgeni iki eş dik üçgene böler. Küçük üçgenlerin her birinin açıları 30°, 60° ve 90°'dir: tabandaki 60° açısı korunur, yükseklik tabanla buluştuğu yerde 90° açısı oluşturur ve üstteki 60° açısı iki 30° açısına bölünür. Küçük üçgenlerin her birinin hipotenüsü eşkenar üçgenin kenarıdır, [[2a]], kısa dik kenarı ise tabanın yarısıdır, [[a]].",
            },
            {
              "kind": "p",
              "text": "Küçük üçgenin kalan dik kenarı yüksekliğin kendisidir. Ona [[b]] deyin ve Pisagor teoremini uygulayın:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Karekökün içindeki 3, [[4a^2 - a^2 = 3a^2]] ifadesinden gelir; hipotenüsün karesi ile kısa dik kenarın karesi arasındaki farktır. √3'ün her 30-60-90 formülünde ortaya çıkmasının nedeni budur: uzun dik kenar, bir eşkenar üçgenin yüksekliğidir ve Pisagor teoremi onun [[a\\sqrt{3}]] olmasını gerektirir. Bu türetme aynı zamanda kenar oranını da kanıtlar, çünkü küçük üçgenin üç kenarı artık [[a]], [[a\\sqrt{3}]] ve [[2a]] dir.",
            },
          ],
          "image": {
            "src": "thirty-60-90-equilateral.svg",
            "alt": "Kenarı 2a olan eşkenar üçgenin bir yükseklikle, yüksekliği a çarpı 3'ün karekökü olan iki eş 30-60-90 üçgenine bölünmesi",
            "caption": "Bir yükseklik, kenarı 2a olan eşkenar üçgeni iki 30-60-90 üçgenine böler.",
          },
        },
        "sec-long-leg": {
          "h2": "Kısa Dik Kenardan Uzun Dik Kenarı Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Uzun dik kenarı bulmak için kısa dik kenarı √3 ile çarpın.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[b]] uzun dik kenar, [[a]] ise kısa dik kenardır. Formül, kenar oranının doğrudan okunuşudur: uzun dik kenar, kısa dik kenarın her 1 birimi için √3 birimi temsil eder, bu nedenle uzun dik kenar kısa dik kenarın √3 katıdır. Çarpma gereklidir, çünkü oran bir ölçekleme ilişkisidir ve √3 ortaya çıkar, çünkü uzun dik kenar bu üçgeni oluşturan eşkenar üçgenin yüksekliğidir.",
            },
            {
              "kind": "p",
              "text": "Örnek olarak [[a = 5]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b \\approx 8.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Sonuç kısa dik kenardan uzundur; öyle de olmalıdır: √3 yaklaşık 1.732'dir, bu nedenle onunla çarpmak uzunluğu artırır. Tam cevap [[5\\sqrt{3}]] cm'dir ve 8.660 cm ondalık yaklaşımdır. Soru istediğinde tam biçimi koruyun ve ondalık sayıyı yalnızca çalışmanızın sonunda yuvarlayın, ortasında değil.",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenar bilinen kenar ve uzun dik kenar bilinmeyen olduğunda bu modu kullanın. Ders kitabı problemlerinde kısa dik kenar genellikle 30° açısının karşısındaki kenardır, bu nedenle çarpmadan önce açıyı kontrol edin. Hızlı bir mantık kontrolü yardımcı olur: uzun dik kenar kısa dik kenarın iki katından biraz az olmalıdır, çünkü √3 ikiden biraz azdır. Cevabınız kısa dik kenarın iki katından fazlaysa yanlış sayıyla çarpmışsınızdır.",
            },
          ],
          "image": {
            "src": "thirty-60-90-long-leg.svg",
            "alt": "Kısa dik kenarı 5 cm ve uzun dik kenarı 5 çarpı 3'ün karekökü, yaklaşık 8.660 cm olarak etiketlenmiş 30-60-90 üçgeni",
            "caption": "Kısa dik kenardan uzun dik kenar: a = 5 cm, b = 5√3 ≈ 8.660 cm verir.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Kısa Dik Kenardan Hipotenüsü Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenüsü bulmak için kısa dik kenarı ikiyle çarpın.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[c]] hipotenüs, [[a]] ise kısa dik kenardır. Hipotenüs her zaman kısa dik kenarın tam iki katıdır ve karekök içermez. Bu, 30-60-90 formüllerinin en basiti ve hızlı zihinsel kontroller için en yararlı olanıdır.",
            },
            {
              "kind": "p",
              "text": "Nedeni eşkenar üçgene dayanır. 30-60-90 üçgeninin hipotenüsü eşkenar üçgenin tam bir kenarıdır, kısa dik kenar ise bir kenarın yarısıdır, çünkü yükseklik tabanı ikiye böler. Tam bir kenar, yarım kenarın iki katıdır, bu nedenle hipotenüs kısa dik kenarın iki katıdır. [[a = 7]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2 \\times 7]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 14 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Cevap tamdır, yuvarlama yoktur, çünkü bir tam sayıyı ikiyle çarpmak tam sayı verir. Kısa dik kenar ondalıklıysa hipotenüs yine de onun tam iki katıdır; [[a = 2.5]] cm, [[c = 5]] cm verir.",
            },
            {
              "kind": "p",
              "text": "Bir problem kısa dik kenarı verip en uzun kenarı istediğinde seçilecek mod budur. Cevap basit bir ikiyle çarpma olduğundan, yanlış bir kısa dik kenarı fark etmenin en hızlı yolu da budur: problemdeki hipotenüs kısa dik kenarınızın iki katı değilse ya kısa dik kenar yanlıştır ya da üçgen 30-60-90 üçgeni değildir. İkiyle çarpmaya güvenmeden önce açıları kontrol edin.",
            },
          ],
          "image": {
            "src": "thirty-60-90-hypotenuse.svg",
            "alt": "Kısa dik kenarı 5 cm ve hipotenüsü 2a eşittir 10 cm olarak etiketlenmiş 30-60-90 üçgeni",
            "caption": "Kısa dik kenardan hipotenüs: c = 2a, yani a = 5 cm, c = 10 cm verir.",
          },
        },
        "sec-short-leg-hyp": {
          "h2": "Hipotenüsten Kısa Dik Kenarı Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Kısa dik kenarı bulmak için hipotenüsü ikiye bölün.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[a]] kısa dik kenar, [[c]] ise hipotenüstür. Bu formül [[c = 2a]] ifadesinin tersidir: hipotenüs kısa dik kenarın iki katı olduğundan kısa dik kenar hipotenüsün yarısıdır. [[c = 2a]] ifadesini her iki tarafı da 2'ye bölerek düzenlemek [[a = \\frac{c}{2}]] sonucunu verir.",
            },
            {
              "kind": "p",
              "text": "[[c = 18]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{18}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 9 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Cevap tamdır; karekök ve yuvarlama yoktur. Bu ilişki özellikle 30-60-90 üçgenleri için geçerlidir. Genel bir dik üçgende hipotenüs kısa dik kenarın iki katı değildir, bu nedenle açıların 30°, 60° ve 90° olduğunu bilmedikçe bu formülü kullanmayın. Hipotenüs tek sayıysa kısa dik kenar yarım değer olur; örneğin [[c = 15]] cm, [[a = 7.5]] cm verir.",
            },
            {
              "kind": "p",
              "text": "Bu mod, hipotenüsü veren çoğu problemin başlangıç noktasıdır. Kısa dik kenar bilindiğinde uzun dik kenar [[b = a\\sqrt{3}]] ile, alan ve çevre de kendi formülleriyle bulunur. Yarım değerli bir cevap burada normaldir ve hata işareti değildir; 7.5 cm'yi 8 cm'ye yuvarlamayın: tam yarım değer doğru cevaptır.",
            },
          ],
        },
        "sec-short-leg-long": {
          "h2": "Uzun Dik Kenardan Kısa Dik Kenarı Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Kısa dik kenarı bulmak için uzun dik kenarı √3'e bölün.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{b}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[a]] kısa dik kenar, [[b]] ise uzun dik kenardır. Bu formül, [[b = a\\sqrt{3}]] ifadesini düzenlemekten gelir: her iki tarafı √3'e bölmek [[a]] yı yalnız bırakır. √3'e bölmek, ilk çarpmayı tersine çevirir; yani ileri yöndeki formülün yaptığını tam olarak geri alır.",
            },
            {
              "kind": "p",
              "text": "[[b = 12]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{12}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Payı ve paydayı √3 ile çarparak paydayı rasyonel yapın: [[a = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}]] cm, yani yaklaşık 6.928 cm. Tam cevap [[4\\sqrt{3}]] cm'dir ve 6.928 cm ondalık biçimidir. Kısa dik kenar uzun dik kenardan küçüktür; öyle de olmalıdır, çünkü 1'den büyük bir sayıya bölmek değeri küçültür.",
            },
            {
              "kind": "p",
              "text": "Paydayı rasyonel yapmak önemlidir, çünkü cevap standart tam biçimde kalır: bir tam sayı çarpı √3. Ondalık yaklaşık değer bu yapıyı gizler ve paydasında √3 bulunan rasyonel yapılmamış bir kesir, sınav cevaplarının beklediği biçim değildir. Uzun dik kenar zaten √3'ün bir katıysa bölme temiz olur: [[b = 9\\sqrt{3}]] cm, doğrudan [[a = 9]] cm verir.",
            },
          ],
        },
        "sec-long-leg-hyp": {
          "h2": "Hipotenüsten Uzun Dik Kenarı Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Uzun dik kenarı bulmak için hipotenüsün yarısını √3 ile çarpın.",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{c\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[b]] uzun dik kenar, [[c]] ise hipotenüstür. Bu formül iki adımdan oluşur. Önce [[a = \\frac{c}{2}]] ile kısa dik kenarı bulun, sonra [[b = a\\sqrt{3}]] ile uzun dik kenarı bulun. İlk formülü ikinciye yerleştirmek [[b = \\frac{c}{2}\\sqrt{3}]] sonucunu verir; bu, [[b = \\frac{c\\sqrt{3}}{2}]] ile aynıdır.",
            },
            {
              "kind": "p",
              "text": "[[c = 16]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{16\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 8\\sqrt{3} \\approx 13.856 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Sonuç, olması gerektiği gibi kısa dik kenar ile hipotenüs arasında yer alır. Buradaki kısa dik kenar [[a = 8]] cm, uzun dik kenar yaklaşık 13.856 cm ve hipotenüs 16 cm'dir; yani [[8 < 13.856 < 16]]. Bu sıralama, bu formülden çıkan her cevabın hızlı bir kontrolüdür.",
            },
            {
              "kind": "p",
              "text": "Tek formül her ikisini birden yapsa da hesaplamayı iki adımda yapmak iyi bir alışkanlıktır. Önce kısa dik kenarı bulun, [[a = \\frac{c}{2} = 8]] cm, sonra √3 ile çarpın. İki adımlı yol ile tek formül uyuşmazsa hata formülde değil aritmetiktedir ve iki adımlı yol hatanın tam olarak nerede olduğunu gösterir.",
            },
          ],
        },
        "sec-area": {
          "h2": "30-60-90 Üçgeninin Alanı Nasıl Hesaplanır",
          "blocks": [
            {
              "kind": "p",
              "text": "Alan için yalnızca kısa dik kenar gerekir, çünkü uzun dik kenar ondan türetilir.",
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
              "text": "[[b = a\\sqrt{3}]] olduğundan, alanı yalnızca kısa dik kenardan elde etmek için yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "İkiye bölmek gereklidir, çünkü bir üçgen, iki dik kenarının oluşturduğu dikdörtgenin yarısını kaplar. Son alan santimetrekare gibi kare birimlerle ifade edilir, çünkü alan yüzey ölçer, uzunluk değil. [[a = 6]] cm kullanın. Önce uzun dik kenarı bulun, [[b = 6\\sqrt{3}]] cm, sonra hesaplayın:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18\\sqrt{3} \\approx 31.177 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcının alan modu kısa dik kenarı kabul eder ve uzun dik kenarı içeride hesaplar; bu nedenle yalnızca [[a]] girersiniz, gerisini hesaplayıcı yapar. Kısa dik kenar yerine uzun dik kenarı biliyorsanız, her iki dik kenarı da doğrudan kabul eden <a href=\"/right-triangle-area-calculator/\">dik üçgen alan hesaplayıcı</a> kullanın.",
            },
            {
              "kind": "p",
              "text": "Alan kısa dik kenarın karesiyle büyür, bu nedenle kısa dik kenarı iki katına çıkarmak alanı dört katına çıkarır. [[a = 12]] cm olan bir üçgenin alanı, [[a = 6]] cm olan üçgenin alanının dört katıdır, yaklaşık 124.708 cm²; iki katı değildir. Bu kare ilişkisini unutmak kolaydır, bu nedenle bir problem üçgeni büyütüp küçülttüğünde bunu kontrol edin.",
            },
          ],
          "image": {
            "src": "thirty-60-90-area.svg",
            "alt": "Kısa dik kenarı 6 cm ve uzun dik kenarı 6 çarpı 3'ün karekökü cm olan, taban ve yükseklik olarak kullanılan 30-60-90 üçgeni; alan 18 çarpı 3'ün karekökü santimetrekare",
            "caption": "Kısa dik kenardan alan: a = 6 cm, A = 18√3 ≈ 31.177 cm² verir.",
          },
        },
        "sec-perimeter": {
          "h2": "30-60-90 Üçgeninin Çevresi Nasıl Hesaplanır",
          "blocks": [
            {
              "kind": "p",
              "text": "Üç kenarı da toplayın, sonra kısa dik kenarı paranteze alın.",
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
              "text": "Özel üçgen ilişkilerini, [[b = a\\sqrt{3}]] ve [[c = 2a]] ifadelerini yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + a\\sqrt{3} + 2a]]]",
            },
            {
              "kind": "p",
              "text": "Sadeleştirilmiş biçimi elde etmek için benzer terimleri birleştirin:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Üç kenar uzunluğunun tamamı dahildir, çünkü çevre üçgenin tüm sınırını izler: kısa dik kenardan aşağı, uzun dik kenar boyunca ve hipotenüs üzerinden geri. Herhangi bir kenarı atlamak, çevre olmayan daha kısa bir mesafe verir. Çevre doğrusal bir ölçümdür, alan ölçümü değildir; bu nedenle cevap santimetre gibi düz birimlerle verilir, asla santimetrekare ile değil.",
            },
            {
              "kind": "p",
              "text": "[[a = 5]] cm kullanın:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tam biçim [[5(3 + \\sqrt{3})]] cm'dir ve 23.660 cm ondalık biçimdir. Hesaplayıcının çevre modu kısa dik kenarı kabul eder ve üç kenarı içeride toplar. Üç kenarı da zaten biliyorsanız, <a href=\"/right-triangle-perimeter-calculator/\">dik üçgen çevre hesaplayıcı</a> onları doğrudan toplar.",
            },
            {
              "kind": "p",
              "text": "Çevre kısa dik kenarla doğru orantılı büyür, bu nedenle kısa dik kenarı iki katına çıkarmak çevreyi de iki katına çıkarır. [[a = 10]] cm olan bir üçgenin çevresi yaklaşık 47.321 cm'dir; [[a = 5]] cm olan üçgenin 23.660 cm'lik çevresinin tam iki katıdır. Bu doğrusal ölçekleme yararlı bir kontroldür: kısa dik kenarı iki katına çıkarmak çevrenizi iki katına çıkarmıyorsa aritmetik bir yerde yanlış gitmiştir.",
            },
          ],
          "image": {
            "src": "thirty-60-90-perimeter.svg",
            "alt": "Üç kenarı da 5 cm, 5 çarpı 3'ün karekökü cm ve 10 cm olarak etiketlenmiş 30-60-90 üçgeni; çevre yaklaşık 23.660 cm",
            "caption": "Kısa dik kenardan çevre: a = 5 cm, P = 5(3 + √3) ≈ 23.660 cm verir.",
          },
        },
        "sec-step-example": {
          "h2": "30-60-90 Üçgeni Çözmenin Adım Adım Örneği",
          "blocks": [
            {
              "kind": "p",
              "text": "Tek bir üçgen, a = 5 cm, baştan sona çözülüyor.",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenar [[a = 5]] cm ile başlayın ve üçgenin diğer tüm ölçümlerini, her seferinde bir formül kullanarak bulun. Her adım yukarıdaki bölümlerden bir formül kullanır ve sondaki özet tablo sonuçları toplar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Uzun dik kenarı bulun: [[b = a\\sqrt{3} = 5\\sqrt{3} \\approx 8.660]] cm.",
                "Hipotenüsü bulun: [[c = 2a = 2 \\times 5 = 10]] cm.",
                "Alanı bulun: [[A = \\frac{ab}{2} = \\frac{5 \\times 5\\sqrt{3}}{2} = \\frac{25\\sqrt{3}}{2} \\approx 21.651]] santimetrekare.",
                "Çevreyi bulun: [[P = a + b + c = 5 + 5\\sqrt{3} + 10 = 15 + 5\\sqrt{3} \\approx 23.660]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Dört ölçüm de aynı üçgeni tanımlar. [[5]], [[8.660]] ve [[10]] kenarları [[1 : \\sqrt{3} : 2]] oranını ve Pisagor teoremini sağlar: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]]. Alan ve çevre, aynı üçgenin iki farklı ölçüm türüdür: alan yüzeyini kaplarken çevre sınırını izler.",
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
                "Kısa dik kenar a",
                "5 cm",
                "5 cm",
              ],
              [
                "Uzun dik kenar b",
                "5√3 cm",
                "8.660 cm",
              ],
              [
                "Hipotenüs c",
                "10 cm",
                "10 cm",
              ],
              [
                "Alan A",
                "25√3/2 cm²",
                "21.651 cm²",
              ],
              [
                "Çevre P",
                "15 + 5√3 cm",
                "23.660 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "30-60-90 Üçgen Hesaplamalarına İlişkin Çözümlü Örnekler",
          "blocks": [
            {
              "kind": "p",
              "text": "Sekiz çözümlü örnek: her hesaplayıcı modu için bir tane ve ayrıca daha büyük bir durum.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: Uzun Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 4]] cm. Formül: [[b = a\\sqrt{3}]]. Yerine koyma: [[b = 4\\sqrt{3}]]. Sonuç: [[b \\approx 6.928]] cm. Uzun dik kenar kısa dik kenarın yaklaşık 1.732 katıdır, bu nedenle 4 cm yaklaşık 6.928 cm olur. Tam cevap [[4\\sqrt{3}]] cm'dir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Hipotenüsü Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 9]] cm. Formül: [[c = 2a]]. Yerine koyma: [[c = 2 \\times 9]]. Sonuç: [[c = 18]] cm. Hipotenüs kısa dik kenarın tam iki katıdır, bu nedenle cevap yuvarlama gerektirmez. Bu, tüm konudaki en hızlı kontroldür: kısa dik kenarın iki katı olmayan herhangi bir hipotenüs bir hataya işaret eder.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Hipotenüsten Kısa Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[c = 20]] cm. Formül: [[a = \\frac{c}{2}]]. Yerine koyma: [[a = \\frac{20}{2}]]. Sonuç: [[a = 10]] cm. Hipotenüsü ikiye bölmek, Örnek 2'deki ikiyle çarpmayı tersine çevirir. Kısa dik kenar hipotenüsün tam yarısıdır, bu nedenle cevap tamdır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Uzun Dik Kenardan Kısa Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[b = 15]] cm. Formül: [[a = \\frac{b}{\\sqrt{3}}]]. Yerine koyma: [[a = \\frac{15}{\\sqrt{3}}]]. Paydayı rasyonel yapmak [[a = 5\\sqrt{3}]] cm sonucunu verir; sonuç [[a \\approx 8.660]] cm'dir. √3'e bölmek, uzun dik kenarı kısa dik kenara geri küçültür; bu, √3 ile çarpmanın tersidir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Hipotenüsten Uzun Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Verilen: [[c = 12]] cm. Formül: [[b = \\frac{c\\sqrt{3}}{2}]]. Yerine koyma: [[b = \\frac{12\\sqrt{3}}{2}]]. Sonuç: [[b = 6\\sqrt{3} \\approx 10.392]] cm. Uzun dik kenar, kısa dik kenar [[a = 6]] cm ile hipotenüs 12 cm arasında yer alır; bu, [[a < b < c]] sıralamasını doğrular.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Alanı Hesaplama",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 8]] cm. Formül: [[A = \\frac{a^2\\sqrt{3}}{2}]]. Yerine koyma: [[A = \\frac{64\\sqrt{3}}{2}]]. Sonuç: [[A = 32\\sqrt{3} \\approx 55.426]] santimetrekare. Tam cevap [[32\\sqrt{3}]] cm²'dir ve ondalık sayı üç basamağa yuvarlanmıştır. Alan, kenar uzunluklarından farklı olarak kare birimlerle ifade edilir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Çevreyi Hesaplama",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 3]] cm. Formül: [[P = a(3 + \\sqrt{3})]]. Yerine koyma: [[P = 3(3 + \\sqrt{3})]]. Sonuç: [[P = 9 + 3\\sqrt{3} \\approx 14.196]] cm. Kenarları tek tek toplamak da aynı sonucu verir: [[3 + 3\\sqrt{3} + 6 = 9 + 3\\sqrt{3}]] cm. Çevre düz birimlerle ifade edilir, kare birimlerle değil.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: Daha Büyük Ölçümler",
            },
            {
              "kind": "p",
              "text": "Verilen: [[a = 10]] m. Formül: [[b = a\\sqrt{3}]] ve [[c = 2a]]. Yerine koyma: [[b = 10\\sqrt{3}]] m ve [[c = 2 \\times 10]] m. Sonuç: [[b \\approx 17.321]] m ve [[c = 20]] m. Oran her ölçekte çalışır: bu üçgen, [[a = 5]] cm'lik üçgenin iki katıdır, bu nedenle her kenar iki kat uzundur ve [[1 : \\sqrt{3} : 2]] oranı değişmez.",
            },
            {
              "kind": "p",
              "text": "Tam cevaplar ve ondalık yaklaşımlar farklı amaçlara hizmet eder. [[4\\sqrt{3}]] cm gibi tam biçim kesindir ve sınav cevaplarının genellikle gerektirdiği biçimdir. 6.928 cm gibi ondalık biçim ise hayal etmesi ve cetvelle ölçmesi daha kolaydır. Önce tam biçimi, sonra ondalık biçimi verin ve ondalık sayıyı yalnızca son adımda yuvarlayın.",
            },
          ],
        },
        "sec-derive-pythagoras": {
          "h2": "Pisagor Teoremi ile 30-60-90 Üçgen Oranını Türetme",
          "blocks": [
            {
              "kind": "p",
              "text": "Oran, Pisagor teoreminden ve tek bir olgudan çıkar: hipotenüs kısa dik kenarın iki katıdır.",
            },
            {
              "kind": "p",
              "text": "[[a]] kısa dik kenar, [[b]] uzun dik kenar ve [[c]] hipotenüs olsun. Eşkenar üçgen yapısından hipotenüs kısa dik kenarın iki katıdır:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Şimdi her dik üçgen için geçerli olan Pisagor teoremini uygulayın:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "[[c = 2a]] ifadesini yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = 4a^2]]]",
            },
            {
              "kind": "p",
              "text": "Her iki taraftan [[a^2]] çıkararak düzenleyin:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Her iki tarafın karekökünü alın. Uzunluklar pozitiftir, bu nedenle negatif kök atılır:",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Üç kenar artık [[a]], [[a\\sqrt{3}]] ve [[2a]] dir; bu da [[a : b : c = 1 : \\sqrt{3} : 2]] oranını verir. Bu sayfadaki her kenar uzunluğu formülü bu sabit ilişkiden gelir: uzun dik kenar formülü onu doğrudan okur, hipotenüs formülü başlangıç olgusudur ve alan ile çevre formülleri iki kenar ifadesini yerine koyar. <a href=\"/pythagorean-theorem-calculator/\">Pisagor teoremi hesaplayıcı</a> aynı ilişkiyi herhangi bir dik üçgen için kontrol eder.",
            },
            {
              "kind": "p",
              "text": "Kanıt yalnızca iki bileşen gerektirir ve ikisini de söylemek kolaydır. Birincisi, eşkenar üçgenden gelen [[c = 2a]] olgusudur. İkincisi, her dik üçgen için geçerli olan Pisagor teoremidir. Başka hiçbir şey varsayılmaz, bu nedenle kanıt, oranın yalnızca bu iki olguyla zorunlu kılındığını, özel bir durum ya da tesadüf olmadığını gösterir.",
            },
          ],
        },
        "sec-equilateral": {
          "h2": "30-60-90 Üçgenleri ile Eşkenar Üçgenler Arasındaki İlişki",
          "blocks": [
            {
              "kind": "p",
              "text": "Her 30-60-90 üçgeni, bir eşkenar üçgenin yarısıdır.",
            },
            {
              "kind": "p",
              "text": "Bir eşkenar üçgenin üç kenarı eşittir ve üç açısı da 60°'dir. Bir köşeden karşı kenara bir yükseklik çizin; yükseklik tabanı iki eşit yarıya böler. Ayrıca üst köşedeki 60° açıyı iki 30° açısına böler. Sonuç, her biri 30°, 60° ve 90° açılı iki eş dik üçgendir.",
            },
            {
              "kind": "p",
              "text": "Her yarı, hipotenüs olarak eşkenar üçgenin tam bir kenarını korur, kısa dik kenar olarak yarım kenarı alır ve uzun dik kenar olarak yüksekliği kullanır. Bu nedenle hipotenüs kısa dik kenarın iki katıdır ve uzun dik kenar [[a\\sqrt{3}]] tür. √3 ilişkisi ortaya çıkar, çünkü bir eşkenar üçgenin yüksekliği her zaman kenar uzunluğunun [[\\frac{\\sqrt{3}}{2}]] katıdır; bu, aynı olgunun farklı harflerle yazılmış halidir.",
            },
            {
              "kind": "p",
              "text": "Bu yapı geometri ve trigonometride yararlıdır, çünkü eşkenar üçgeni tam değerlerin kaynağına dönüştürür. Kenarı 10 cm olan bir eşkenar üçgenin yüksekliği [[5\\sqrt{3} \\approx 8.660]] cm'dir; yarısını kısa dik kenarı 5 cm olan bir 30-60-90 üçgeni olarak ele alarak bulunur. Aynı yapı, 30° ve 60° için tam sinüs, kosinüs ve tanjant değerlerini verir; bu nedenle bu değerler her trigonometri tablosunda yer alır.",
            },
          ],
        },
        "sec-trig": {
          "h2": "30-60-90 Üçgeninde Trigonometrik İlişkiler",
          "blocks": [
            {
              "kind": "p",
              "text": "Sabit oran, 30° ve 60° için tam sinüs, kosinüs ve tanjant değerlerini verir.",
            },
            {
              "kind": "p",
              "text": "Trigonometrik oranlar bir dik üçgenin kenarlarını karşılaştırır. Sinüs karşı dik kenarın hipotenüse oranı, kosinüs komşu dik kenarın hipotenüse oranı ve tanjant karşı dik kenarın komşu dik kenara oranıdır. 30-60-90 üçgeninin kenarları her zaman [[1 : \\sqrt{3} : 2]] oranında olduğundan bu karşılaştırmalar her zaman aynı değerleri verir; üçgenin büyüklüğü ne olursa olsun.",
            },
            {
              "kind": "p",
              "text": "30° açısı için karşı kenar kısa dik kenar [[a]], komşu kenar uzun dik kenar [[b]] dir; bu nedenle [[\\sin 30° = \\frac{a}{2a} = \\frac{1}{2}]], [[\\cos 30° = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}]] ve [[\\tan 30° = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}]] olur. 60° açısı için karşı ve komşu kenarlar yer değiştirir; bu nedenle [[\\sin 60° = \\frac{\\sqrt{3}}{2}]], [[\\cos 60° = \\frac{1}{2}]] ve [[\\tan 60° = \\sqrt{3}]] olur.",
            },
            {
              "kind": "p",
              "text": "Simetriye dikkat edin: [[\\sin 30° = \\cos 60°]] ve [[\\cos 30° = \\sin 60°]], çünkü iki dar açı toplamı 90° olan tümler açılardır. Bu değerler sabit kenar oranıyla tam olarak uyuşur; bu iyi bir çapraz kontroldür: bir sinüs değeri oranla uyuşmuyorsa ikisinden biri yanlıştır. Bu bölümü arka plan bilgisi olarak koruyun: bu sayfadaki hesaplayıcı kenarları, alanı ve çevreyi bulur; trigonometrik fonksiyonları bir mod olarak hesaplamaz.",
            },
          ],
          "table": {
            "headers": [
              "Açı",
              "sin",
              "cos",
              "tan",
            ],
            "rows": [
              [
                "30°",
                "1/2",
                "√3/2",
                "1/√3",
              ],
              [
                "60°",
                "√3/2",
                "1/2",
                "√3",
              ],
            ],
          },
        },
        "sec-verify": {
          "h2": "30-60-90 Üçgen Hesaplamalarınızı Nasıl Doğrularsınız",
          "blocks": [
            {
              "kind": "p",
              "text": "Dört hızlı kontrol neredeyse her hatayı yakalar.",
            },
            {
              "kind": "p",
              "text": "Her cevapta en az bir kontrol yapın; problem önemliyse dördünü de yapın. Aşağıdaki örnekte baştan sona [[a = 5]] cm, [[b = 5\\sqrt{3} \\approx 8.660]] cm ve [[c = 10]] cm olan üçgen kullanılıyor.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 1: Kenar Oranı",
            },
            {
              "kind": "p",
              "text": "Uzun dik kenarı kısa dik kenara ve hipotenüsü kısa dik kenara bölün: [[\\frac{b}{a} = \\sqrt{3} \\approx 1.732]] ve [[\\frac{c}{a} = 2]]. Burada [[\\frac{8.660}{5} \\approx 1.732]] ve [[\\frac{10}{5} = 2]] olduğundan oran sağlanır. Bölmelerden biri farklı bir değer verirse kenarlardan biri yanlıştır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 2: Pisagor Teoremi",
            },
            {
              "kind": "p",
              "text": "[[a^2 + b^2 = c^2]] olduğunu doğrulayın. Burada [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]] olduğundan teorem sağlanır. Bu kontrol, yanlış [[b]] değeri eşitliği bozduğu için yer değiştiren dik kenarları yakalar. <a href=\"/pythagorean-theorem-calculator/\">Pisagor teoremi hesaplayıcı</a> bu kontrolü herhangi üç kenar uzunluğu için yapar.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 3: Açı Toplamı",
            },
            {
              "kind": "p",
              "text": "[[30° + 60° + 90° = 180°]] olduğunu doğrulayın. Bu kontrol aritmetikten çok problemin kurulumuyla ilgilidir: üçgeninizin açıları 180°'ye ulaşmıyorsa ya da 30°, 60° ve 90° değilse 30-60-90 formülleri hiç uygulanamaz ve onlardan çıkan hiçbir kenar uzunluğuna güvenilemez.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 4: Kenar Sıralaması",
            },
            {
              "kind": "p",
              "text": "[[a < b < c]] olduğunu doğrulayın. Burada [[5 < 8.660 < 10]] olduğundan sıralama sağlanır. Kısa dik kenar en küçük kenar, uzun dik kenar ortada ve hipotenüs en uzun olmalıdır. Uzun dik kenarın hipotenüsten uzun olması gibi bu düzeni bozan herhangi bir cevap baştan yanlıştır.",
            },
          ],
        },
        "sec-properties": {
          "h2": "30-60-90 Üçgenlerinin Önemli Özellikleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Sabit orandan on özellik çıkar.",
            },
            {
              "kind": "list",
              "items": [
                "Üçgenin açıları her zaman 30°, 60° ve 90°'dir ve bu açılar her zaman toplam 180° eder.",
                "Kısa dik kenar 30° açısının karşısındadır ve üçgenin en küçük kenarıdır.",
                "Uzun dik kenar 60° açısının karşısındadır ve uzunluk bakımından kısa dik kenar ile hipotenüs arasında yer alır.",
                "Hipotenüs 90° açısının karşısındadır ve üçgenin en uzun kenarıdır.",
                "Hipotenüs, karekök içermeden kısa dik kenarın iki katıdır: [[c = 2a]].",
                "Uzun dik kenar, kısa dik kenarın √3 katıdır: [[b = a\\sqrt{3}]]; burada [[\\sqrt{3} \\approx 1.732]] dir.",
                "[[1 : \\sqrt{3} : 2]] kenar oranı üçgenin büyüklüğünden bağımsızdır; bu nedenle üçgeni ölçeklemek oranı değiştirmez.",
                "Tüm 30-60-90 üçgenleri benzerdir, çünkü aynı üç açıya ve aynı kenar oranlarına sahiptirler.",
                "Alan kısa dik kenarın karesine bağlıdır: [[A = \\frac{a^2\\sqrt{3}}{2}]]; bu nedenle kısa dik kenarı iki katına çıkarmak alanı dört katına çıkarır.",
                "Çevre kısa dik kenarla doğru orantılıdır: [[P = a(3 + \\sqrt{3})]]; bu nedenle kısa dik kenarı iki katına çıkarmak çevreyi iki katına çıkarır.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "30-60-90 Üçgenleri Çözerken Yapılan Yaygın Hatalar",
          "blocks": [
            {
              "kind": "p",
              "text": "30-60-90 problemlerinde on dört hata tekrar tekrar ortaya çıkar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kısa ve uzun dik kenarları karıştırmak: kısa dik kenar 30°'nin, uzun dik kenar 60°'nin karşısındadır. Her kenarı, şeklin nasıl döndürüldüğüne göre değil, karşısındaki açıya göre belirleyin. Doğrusu: [[a]] 30°'nin karşısında, [[b]] 60°'nin karşısında.",
                "√3 yerine √2 kullanmak: √2, oranı [[1 : 1 : \\sqrt{2}]] olan 45-45-90 üçgenine aittir. Bir 30-60-90 üçgeni her zaman √3 kullanır. Doğrusu: [[b = a\\sqrt{3}]].",
                "Uzun dik kenarı bulmak için kısa dik kenarı 2 ile çarpmak: ikiyle çarpmak hipotenüsü verir, uzun dik kenarı değil. [[a = 5]] cm için ikiyle çarpmak 10 cm verir; bu [[c]] dir, uzun dik kenar ise [[5\\sqrt{3} \\approx 8.660]] cm'dir. Doğrusu: [[b = a\\sqrt{3}]].",
                "[[a\\sqrt{3}]] ifadesini hipotenüs olarak kullanmak: hipotenüs [[2a]] dir, [[a\\sqrt{3}]] değil. [[a = 5]] cm için [[a\\sqrt{3} \\approx 8.660]] cm uzun dik kenardır ve hipotenüs 10 cm'dir. Doğrusu: [[c = 2a]].",
                "Hipotenüsün [[2a]] ye eşit olduğunu unutmak: öğrenciler bazen hipotenüsü bulmak için Pisagor teoremini uygular; oysa ikiyle çarpmak yeterlidir. İkiyle çarpmak daha hızlı ve tamdır. Doğrusu: [[c = 2a]].",
                "Uzun dik kenardan kısa dik kenarı bulurken √3 yerine 2'ye bölmek: [[b]] yi 2'ye bölmek [[\\frac{b}{2}]] sonucunu verir; bu kısa dik kenar değildir. [[b = 12]] cm için 2'ye bölmek 6 cm verir, oysa doğru kısa dik kenar [[4\\sqrt{3} \\approx 6.928]] cm'dir. Doğrusu: [[a = \\frac{b}{\\sqrt{3}}]].",
                "Alan hesaplarken ikiye bölmeyi unutmak: alan, dik kenarların çarpımının yarısıdır. [[A = ab]] kullanmak gerçek alanın iki katını verir. [[a = 6]] cm için [[ab = 36\\sqrt{3}]] cm², doğru [[18\\sqrt{3}]] cm² değerinin iki katıdır. Doğrusu: [[A = \\frac{ab}{2}]].",
                "Çevre hesaplarken yalnızca iki kenarı toplamak: çevre üç kenarın tamamını gerektirir. [[a = 5]] cm için yalnızca iki dik kenarı toplamak [[5 + 5\\sqrt{3} \\approx 13.660]] cm verir, oysa gerçek çevre yaklaşık 23.660 cm'dir. Doğrusu: [[P = a + b + c]].",
                "Tam cevapları ondalık yaklaşımlarla karıştırmak: [[5\\sqrt{3}]] cm tamdır, 8.660 cm ise yuvarlanmıştır. 8.660 cm'yi tam gibi yazmak, köklü ifadenin koruduğu kesinliği kaybettirir. Doğrusu: önce tam biçimi, sonra ondalık biçimi verin.",
                "√3'ü çok erken yuvarlamak: hesaplamanın ortasında √3 yerine 1.73 kullanmak sonraki her adımı kaydırır. [[a = 5]] cm için [[5 \\times 1.73 = 8.65]] cm olur; 8.660 cm yerine. Doğrusu: √3'ü çalışma boyunca tam tutun ve yalnızca son cevabı yuvarlayın.",
                "Ölçü birimlerini karıştırmak: santimetre cinsinden bir kısa dik kenar ile metre cinsinden bir hipotenüs doğrudan birleştirilemez. Hesaplamadan önce tüm ölçümleri tek bir birime çevirin. Doğrusu: 0.5 m, 50 cm'ye eşittir; sonra santimetre cinsinden hesaplayın.",
                "Formülleri farklı açıları olan bir üçgene uygulamak: [[b = a\\sqrt{3}]] ve [[c = 2a]] formülleri yalnızca açılar 30°, 60° ve 90° olduğunda geçerlidir. Açıları 40° ve 50° olan bir dik üçgenin oranı farklıdır. Doğrusu: önce açıları doğrulayın, sonra formülleri kullanın.",
                "30 derecelik ve 60 derecelik açıların karşısındaki kenarları karıştırmak: 30°'nin karşısındaki kenar kısa dik kenar, 60°'nin karşısındaki kenar uzun dik kenardır; tersi asla olmaz. Bunları değiştirmek uzun dik kenarı kısa dik kenardan daha kısa yapar ki bu imkânsızdır. Doğrusu: [[a]] 30°'nin karşısında, [[b]] 60°'nin karşısında.",
                "Alanın kare birim gerektirdiğini unutmak: 31.177 cm'lik bir alan, sayı doğru olsa bile birim bakımından yanlıştır. Alan yüzey ölçer, bu nedenle 31.177 santimetrekaredir. Doğrusu: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "30-60-90 Üçgenlerinin Pratik Uygulamaları",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu oran, 30° veya 60° açının dik açıyla buluştuğu her yerde ortaya çıkar.",
            },
            {
              "kind": "p",
              "text": "En yaygın kullanım, geometri ödevleri ve trigonometri alıştırmalarıdır; 30-60-90 problemleri, öğrencilerin kısa dik kenarı belirleyip oranı uygulayarak tam köklü cevapları koruyup koruyamadığını sınar. Eşkenar üçgen yükseklik hesaplamaları aynı fikri tersinden kullanır: bir eşkenar üçgenin yüksekliği, onu ikiye bölerek oluşan 30-60-90 üçgeninin uzun dik kenarıdır; bu nedenle kenarı 10 cm olan bir üçgenin yüksekliği [[5\\sqrt{3} \\approx 8.660]] cm olur.",
            },
            {
              "kind": "p",
              "text": "Teknik çizim, mimari ve inşaat geometrisi, bir tasarımda çatı eğimi, rampa ya da çapraz destek gibi 30° veya 60° açı gerektiğinde 30-60-90 ilişkilerini kullanır. Böyle bir üçgenin bir kenarını bilen bir inşaatçı, diğerlerini doğrudan ölçmeden bulabilir. Sınıf gösterimleri, bu üçgeni sabit bir oranın tek bir ölçümü bir şeklin tam tanımına nasıl dönüştürdüğünü göstermek için kullanır.",
            },
            {
              "kind": "p",
              "text": "Matematiksel modelleme, geometrik şekillerdeki köşegen ve yükseklik ilişkilerinin tam değerler gerektirdiği her yerde oranı kullanır; örneğin düzgün bir altıgenin 60° açıları şeklin içinde 30-60-90 üçgenleri oluşturduğundan altıgen desenlerde. Bunlar geometrinin kendisinin gerçekçi kullanımlarıdır; mühendislik toleranslarına ilişkin iddialar değildir: gerçek tasarım çalışmaları, bu sayfadaki tam geometrik değerlerin ötesinde malzeme sınırları ve güvenlik payları ekler.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Cevaplı Alıştırma Problemleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Cevapları okumadan önce altı problemi de kâğıt üzerinde çözün.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: Kısa Dik Kenardan Uzun Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Bir 30-60-90 üçgeninin kısa dik kenarı [[a = 6]] cm'dir. Uzun dik kenar [[b]] yi bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Kısa Dik Kenardan Hipotenüsü Bulma",
            },
            {
              "kind": "p",
              "text": "Bir 30-60-90 üçgeninin kısa dik kenarı [[a = 11]] cm'dir. Hipotenüs [[c]] yi bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Hipotenüsten Kısa Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Bir 30-60-90 üçgeninin hipotenüsü [[c = 24]] cm'dir. Kısa dik kenar [[a]] yı bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 4: Hipotenüsten Uzun Dik Kenarı Bulma",
            },
            {
              "kind": "p",
              "text": "Bir 30-60-90 üçgeninin hipotenüsü [[c = 14]] cm'dir. Uzun dik kenar [[b]] yi bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Kısa Dik Kenardan Alanı Hesaplama",
            },
            {
              "kind": "p",
              "text": "Bir 30-60-90 üçgeninin kısa dik kenarı [[a = 9]] cm'dir. [[A]] alanını bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Kısa Dik Kenardan Çevreyi Hesaplama",
            },
            {
              "kind": "p",
              "text": "Bir 30-60-90 üçgeninin kısa dik kenarı [[a = 7]] cm'dir. [[P]] çevresini bulun.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Problemlerinin Cevapları",
            },
            {
              "kind": "p",
              "text": "Cevap 1: [[b = a\\sqrt{3} = 6\\sqrt{3} \\approx 10.392]] cm. Tam cevap [[6\\sqrt{3}]] cm'dir.",
            },
            {
              "kind": "p",
              "text": "Cevap 2: [[c = 2a = 2 \\times 11 = 22]] cm. Hipotenüs kısa dik kenarın tam iki katıdır.",
            },
            {
              "kind": "p",
              "text": "Cevap 3: [[a = \\frac{c}{2} = \\frac{24}{2} = 12]] cm. Kısa dik kenar hipotenüsün tam yarısıdır.",
            },
            {
              "kind": "p",
              "text": "Cevap 4: [[b = \\frac{c\\sqrt{3}}{2} = \\frac{14\\sqrt{3}}{2} = 7\\sqrt{3} \\approx 12.124]] cm. Sıralamayı kontrol edin: kısa dik kenar 7 cm, uzun dik kenar yaklaşık 12.124 cm ve hipotenüs 14 cm'dir.",
            },
            {
              "kind": "p",
              "text": "Cevap 5: [[A = \\frac{a^2\\sqrt{3}}{2} = \\frac{81\\sqrt{3}}{2} \\approx 70.148]] santimetrekare. Tam cevap [[\\frac{81\\sqrt{3}}{2}]] cm²'dir.",
            },
            {
              "kind": "p",
              "text": "Cevap 6: [[P = a(3 + \\sqrt{3}) = 7(3 + \\sqrt{3}) \\approx 33.124]] cm. Kenarları tek tek toplamak da aynı sonucu verir: [[7 + 7\\sqrt{3} + 14 = 21 + 7\\sqrt{3} \\approx 33.124]] cm.",
            },
          ],
        },
      },
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları",
      "relatedIntro": "Aşağıdaki hesaplayıcıların her biri farklı bir dik üçgen görevini yerine getirir; bu nedenle ihtiyacınız olan ölçüme uygun aracı seçin.",
      "relatedItems": [
        "Özel Dik Üçgen Hesaplayıcı",
        "45-45-90 Üçgen Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
        "Dik Üçgen Alan Hesaplayıcı",
        "Dik Üçgen Çevre Hesaplayıcı",
        "Pisagor Teoremi Hesaplayıcı",
      ],
      "faqHeading": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "30-60-90 üçgeni nedir?",
          "answer": "30-60-90 üçgeni, açıları 30°, 60° ve 90° olan bir dik üçgendir. Kenar uzunlukları her zaman sabit [[1 : \\sqrt{3} : 2]] oranını izlediği için özel dik üçgen olarak adlandırılır. Bir kenarı bilmek diğerlerinin tamamını bulmaya yeter; bu nedenle hesaplayıcı yalnızca tek bir girdi ister.",
        },
        {
          "question": "30-60-90 üçgeninin kenar oranı nedir?",
          "answer": "Kenar oranı [[a : b : c = 1 : \\sqrt{3} : 2]] dir; burada [[a]] kısa dik kenar, [[b]] uzun dik kenar ve [[c]] hipotenüstür. Bu, [[b = a\\sqrt{3}]] ve [[c = 2a]] olduğu anlamına gelir. Oran, büyüklüğü ne olursa olsun her 30-60-90 üçgeni için aynıdır.",
        },
        {
          "question": "Uzun dik kenar neden √3 ile çarpılır?",
          "answer": "Uzun dik kenar, 30-60-90 üçgenini oluşturan eşkenar üçgenin yüksekliğidir. Kenarı [[2a]] olan bir eşkenar üçgeni ikiye bölmek [[b^2 = (2a)^2 - a^2 = 3a^2]] sonucunu verir; bu nedenle [[b = a\\sqrt{3}]] olur. √3, bu yapıya uygulanan Pisagor teoreminden gelir.",
        },
        {
          "question": "Kısa dik kenardan hipotenüsü nasıl bulurum?",
          "answer": "Kısa dik kenarı ikiyle çarpın: [[c = 2a]]. [[a = 7]] cm ise [[c = 2 \\times 7 = 14]] cm olur. Hipotenüs, 30-60-90 üçgeninde her zaman kısa dik kenarın tam iki katıdır, çünkü eşkenar üçgenin tam bir kenarıdır; kısa dik kenar ise yarım kenardır.",
        },
        {
          "question": "Hipotenüsten kısa dik kenarı nasıl bulurum?",
          "answer": "Hipotenüsü ikiye bölün: [[a = \\frac{c}{2}]]. [[c = 18]] cm ise [[a = \\frac{18}{2} = 9]] cm olur. Bu, kısa dik kenarı ikiyle çarparak hipotenüsü bulmanın tersidir ve yalnızca hipotenüsün her zaman kısa dik kenarın iki katı olduğu 30-60-90 üçgenlerinde geçerlidir.",
        },
        {
          "question": "Hipotenüsten uzun dik kenarı nasıl hesaplarım?",
          "answer": "[[b = \\frac{c\\sqrt{3}}{2}]] formülünü kullanın. Önce hipotenüsü ikiye bölerek kısa dik kenarı bulun, sonra √3 ile çarpın. [[c = 16]] cm ise [[b = 8\\sqrt{3} \\approx 13.856]] cm olur. Uzun dik kenar, uzunluk bakımından kısa dik kenar ile hipotenüs arasında yer alır.",
        },
        {
          "question": "Uzun dik kenardan kısa dik kenarı nasıl bulurum?",
          "answer": "Uzun dik kenarı √3'e bölün: [[a = \\frac{b}{\\sqrt{3}}]]. [[b = 12]] cm ise [[a = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\approx 6.928]] cm olur. √3'e bölmek, uzun dik kenarı kısa dik kenardan bulmak için kullanılan çarpmayı tersine çevirir.",
        },
        {
          "question": "30-60-90 üçgeninin alanı nasıl hesaplanır?",
          "answer": "[[A = \\frac{a^2\\sqrt{3}}{2}]] formülünü kullanın; burada [[a]] kısa dik kenardır. [[a = 6]] cm ise [[A = 18\\sqrt{3} \\approx 31.177]] santimetrekare olur. Formül, iki dik kenarın çarpımının yarısıdır; uzun dik kenar yerine [[a\\sqrt{3}]] yazılmıştır. Alan her zaman kare birimlerle ifade edilir.",
        },
        {
          "question": "30-60-90 üçgeninin çevresi nasıl hesaplanır?",
          "answer": "[[P = a(3 + \\sqrt{3})]] formülünü kullanın; burada [[a]] kısa dik kenardır. [[a = 5]] cm ise [[P = 5(3 + \\sqrt{3}) \\approx 23.660]] cm olur. Formül üç kenarı da toplar, [[a + a\\sqrt{3} + 2a]], ve [[a]] yı paranteze alır. Çevre düz birimlerle ifade edilir, kare birimlerle değil.",
        },
        {
          "question": "Bir 30-60-90 üçgeninin kenar uzunlukları ondalıklı olabilir mi?",
          "answer": "Evet. Oran, tam ya da ondalıklı her pozitif uzunluk için geçerlidir. [[a = 2.5]] cm ise [[b = 2.5\\sqrt{3} \\approx 4.330]] cm ve [[c = 5]] cm olur. Ondalıklı sayılar yöntemi değiştirmez: uzun dik kenar için √3 ile çarpın, hipotenüs için ikiyle çarpın; sonra yalnızca son cevabı yuvarlayın.",
        },
        {
          "question": "Her 30-60-90 üçgeni benzer midir?",
          "answer": "Evet. Tüm 30-60-90 üçgenleri aynı üç açıya, 30°, 60° ve 90°'ye ve aynı kenar oranına, [[1 : \\sqrt{3} : 2]] ye sahiptir. Aynı açılar ve aynı oranlar, üçgenlerin benzer olduğu anlamına gelir; bu nedenle yalnızca büyüklük bakımından farklıdırlar. Birini büyütmek ya da küçültmek başka bir 30-60-90 üçgeni verir.",
        },
        {
          "question": "Üçgen ölçümlerimin doğru olduğunu nasıl kontrol edebilirim?",
          "answer": "Oranı kontrol edin: [[\\frac{b}{a} = \\sqrt{3}]] ve [[\\frac{c}{a} = 2]]; sonra Pisagor teoremiyle [[a^2 + b^2 = c^2]] olduğunu doğrulayın ve [[a < b < c]] sıralamasını kontrol edin. [[a = 5]] cm, [[b \\approx 8.660]] cm ve [[c = 10]] cm için dört kontrol de geçer. Herhangi bir kontrol başarısız olursa hesaplamayı yeniden yapın.",
        },
      ],
    },
};
