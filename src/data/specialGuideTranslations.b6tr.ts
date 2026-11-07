// specialGuideTranslations.btr.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B6_TR = {
  "tr": {
      "meta": {
        "title": "Özel Dik Üçgen Hesaplayıcı - 45-45-90 ve 30-60-90 Oranları",
        "description": "45-45-90 ve 30-60-90 üçgenlerini Özel Dik Üçgen Hesaplayıcı ile çözün. Eksik kenarları hızlı bulmak için sabit 1:1:√2 ve 1:√3:2 oranlarını kullanın.",
        "primaryKeyword": "Özel Dik Üçgen Hesaplayıcı",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Bölüm Gezintisi",
      "tocItems": {
        "sec-intro": "Özel Dik Üçgen Hesaplayıcı",
        "sec-calculate": "Özel Dik Üçgenlerde Eksik Kenarları Hesaplama",
        "sec-what": "Özel Dik Üçgenler Nedir?",
        "sec-types": "Özel Dik Üçgenlerin İki Ana Türü",
        "sec-454590": "45-45-90 Üçgenini Anlamak",
        "sec-derive-454590": "45-45-90 Kenar Oranını Türetmek",
        "sec-306090": "30-60-90 Üçgenini Anlamak",
        "sec-derive-306090": "30-60-90 Kenar Oranını Türetmek",
        "sec-compare": "İki Özel Üçgen Kenar Oranını Karşılaştırmak",
        "sec-how-hyp-45": "45-45-90 Hipotenüs Hesaplayıcısını Kullanmak",
        "sec-how-leg-45": "45-45-90 Hipotenüsünden Dik Kenar Bulmak",
        "sec-how-long-30": "30-60-90 Uzun Dik Kenar Hesaplayıcısını Kullanmak",
        "sec-how-hyp-30": "30-60-90 Hipotenüs Hesaplayıcısını Kullanmak",
        "sec-examples": "Her İki Özel Üçgen Türü İçin Adım Adım Örnekler",
        "sec-area-perimeter": "Özel Dik Üçgenlerde Alan ve Çevre İlişkileri",
        "sec-exact": "Tam Kök Cevaplar ile Ondalık Yaklaşımlar",
        "sec-verify": "Özel Dik Üçgen Hesaplamalarını Doğrulamak",
        "sec-mistakes": "Özel Dik Üçgenleri Çözerken Yapılan Yaygın Hatalar",
        "sec-applications": "Özel Dik Üçgenlerin Pratik Kullanımları",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları",
        "sec-faq": "Sık Sorulan Sorular",
      },
      "sections": {
        "sec-intro": {
          "h2": "Özel Dik Üçgen Hesaplayıcı",
          "blocks": [
            {
              "kind": "p",
              "text": "45-45-90 ve 30-60-90 üçgenlerini, sabit kenar oranlarını kullanarak tek bir bilinen kenardan çözün.",
            },
            {
              "kind": "p",
              "text": "Özel bir dik üçgen, açıları kenar oranını sabit ve değişmez kılan bir dik üçgendir; üçgen ne kadar büyük ya da küçük olursa olsun bu oran değişmez. Okul geometrisinde bunu yapan yalnızca iki açı deseni vardır: 45-45-90 üçgeni ve 30-60-90 üçgeni. Bu sayfadaki Özel Dik Üçgen Hesaplayıcı her iki türü de kapsar, bu nedenle tek bir bilinen kenar diğer tüm kenarları bulmaya yeter.",
            },
            {
              "kind": "p",
              "text": "45-45-90 üçgeninin iki dik kenarı eşittir ve kenarları [[a : b : c = 1 : 1 : \\sqrt{2}]] oranını izler. 30-60-90 üçgeninin üç kenar uzunluğu da farklıdır ve kenarları [[a : b : c = 1 : \\sqrt{3} : 2]] oranını izler. Burada [[a]] ve [[b]] dik kenarlar, [[c]] ise hipotenüstür ve [[a]] ile [[b]]'nin anlamı üçgen türüne göre değişir; bu nedenle aşağıdaki bölümler her zaman hangi türün kullanıldığını belirtir.",
            },
            {
              "kind": "p",
              "text": "Bir 45-45-90 üçgeninin dik kenarı 5 cm ise diğer dik kenar da 5 cm'dir ve hipotenüs [[c = 5\\sqrt{2} \\approx 7.071]] cm'dir. Bir 30-60-90 üçgeninin kısa dik kenarı 5 cm ise uzun dik kenar [[b = 5\\sqrt{3} \\approx 8.660]] cm ve hipotenüs [[c = 10]] cm'dir. Bu sayfadaki dört hesaplayıcı modu tam olarak bu adımları uygular; aşağıdaki kılavuz her oranın nereden geldiğini, doğru modun nasıl seçileceğini ve her cevabın nasıl kontrol edileceğini açıklar.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Özel Dik Üçgenlerde Eksik Kenarları Hesaplama",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu sayfadaki hesaplayıcının dört modu vardır; her biri, özel bir dik üçgen probleminde genellikle sorulan eksik kenarlardan birine karşılık gelir. Önce üçgen türünü seçin, sonra bildiğiniz kenarı ve ihtiyacınız olan kenarı seçin. Aşağıdaki tablo her modu, girdisini, formülünü ve sonucunu listeler.",
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
                "45-45-90: Hipotenüs",
                "Dik kenar a",
                "Hipotenüs c",
              ],
              [
                "45-45-90: Dik kenar",
                "Hipotenüs c",
                "Dik kenar a",
              ],
              [
                "30-60-90: Uzun dik kenar",
                "Kısa dik kenar a",
                "Uzun dik kenar b",
              ],
              [
                "30-60-90: Hipotenüs",
                "Kısa dik kenar a",
                "Hipotenüs c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Mod 1, bir 45-45-90 üçgeninin hipotenüsünü eşit dik kenarlardan birinden bulur.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Mod 2, bir 45-45-90 üçgeninin dik kenarını hipotenüsten bulur.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Mod 3, bir 30-60-90 üçgeninin uzun dik kenarını kısa dik kenardan bulur.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Mod 4, bir 30-60-90 üçgeninin hipotenüsünü kısa dik kenardan bulur.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Herhangi bir modu kullanmak için üçgen türünü açılarından doğrulayın, bilinen kenarı belirleyin, pozitif bir ölçüm girin, problemin geri kalanıyla uyumlu bir birim seçin ve Hesapla'ya tıklayın. Yeni bir hesaplamadan önce Sıfırla'yı kullanın, böylece eski bir değer bir sonraki cevaba karışamaz. Her mod farklı bir formül gerektirir çünkü her mod farklı bir bilinen kenardan başlar ve iki üçgen türünün oranları farklıdır; bu nedenle bir 45-45-90 formülü asla bir 30-60-90 probleminde kullanılmaz.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Özel Dik Üçgen Hesaplayıcısının dört modunu gösteren akış şeması: 45-45-90 dik kenardan hipotenüse, 45-45-90 hipotenüsten dik kenara, 30-60-90 kısa dik kenardan uzun dik kenara ve 30-60-90 kısa dik kenardan hipotenüse",
            "caption": "Dört hesaplayıcı modu: her biri bilinen bir kenardan başlar ve tek bir sabit oran uygular.",
          },
        },
        "sec-what": {
          "h2": "Özel Dik Üçgenler Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Özel bir dik üçgen, üç açısı da kenarlarını tek bir değişmez orana zorlayan değerlere sabitlenmiş bir dik üçgendir. Çoğu dik üçgende böyle bir kısayol yoktur: bir kenarı bilmek, bir açı ya da ikinci bir kenar da bilinmedikçe diğer kenarlar hakkında hiçbir şey söylemez. Özel bir dik üçgende açılar tek başına şekli belirler, bu nedenle tek bir kenar uzunluğu bütün üçgeni belirler.",
            },
            {
              "kind": "p",
              "text": "Pisagor teoremi hâlâ geçerlidir ve her iki oranı da üreten araç odur. Bir 45-45-90 üçgeninde iki eşit dik kenar teoremi [[2a^2 = c^2]] biçimine indirger ve bu da [[c = a\\sqrt{2}]] verir. Bir 30-60-90 üçgeninde hipotenüs kısa dik kenarın iki katıdır, bu nedenle teorem [[b^2 = (2a)^2 - a^2 = 3a^2]] verir ve bu da [[b = a\\sqrt{3}]] verir. Tam türetmeler aşağıdaki kendi bölümlerinde yer alır.",
            },
            {
              "kind": "p",
              "text": "Oranlar her boyutta aynı kalır çünkü üçgenler kendi türleri içinde benzerdir. Dik kenarı 1 cm olan bir 45-45-90 üçgeni ile dik kenarı 100 cm olan bir 45-45-90 üçgeni aynı şekle, aynı açılara ve aynı 1:1:√2 oranına sahiptir. Bu ölçekten bağımsızlık, bu üçgenleri geometri ve trigonometride bu kadar kullanışlı kılan şeydir: açı desenini tanıdığınız anda, ölçüm yapmadan ya da sinüs ve kosinüs kullanmadan her kenarı yazabilirsiniz.",
            },
            {
              "kind": "p",
              "text": "45-45-90 ve 30-60-90 üçgenleri aynı şeklin iki adı değil, iki farklı ailedir. Birinin iki eşit dik kenarı vardır, diğerinin üç kenar uzunluğu da farklıdır. Bunları karıştırmak bu konudaki en yaygın hatadır; bu nedenle sonraki bölüm, kılavuz onları yan yana karşılaştırmadan önce her aileyi ayrı ayrı tanıtır.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Yan yana iki özel dik üçgen: oranı 1:1:√2 olan bir 45-45-90 üçgeni ve oranı 1:√3:2 olan bir 30-60-90 üçgeni",
            "caption": "İki özel dik üçgen: eşit dik kenarlı 45-45-90 ve üç farklı kenarlı 30-60-90.",
          },
        },
        "sec-types": {
          "h2": "Özel Dik Üçgenlerin İki Ana Türü",
          "blocks": [
            {
              "kind": "p",
              "text": "Her iki özel üçgen de dik üçgendir, bu nedenle her birinin bir 90° açısı ve onun karşısında bir hipotenüsü vardır. Farklı olan, dar açıların çiftidir ve kenar oranını dar açılar belirler. Önce her türü ayrı ayrı öğrenin; kılavuzun ilerleyen bölümündeki karşılaştırma o zaman kolay izlenir.",
            },
            {
              "kind": "h3",
              "text": "45-45-90 Üçgeni",
            },
            {
              "kind": "list",
              "items": [
                "Açılar: 45°, 45°, 90°.",
                "İki eşit dik kenar vardır, bu nedenle bilinen girdi olarak iki dik kenardan biri kullanılabilir.",
                "Hipotenüs, dik kenarın √2 katına eşittir: [[c = a\\sqrt{2}]].",
                "Kenar oranı: [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "İkizkenar dik üçgen olarak da adlandırılır.",
              ],
            },
            {
              "kind": "h3",
              "text": "30-60-90 Üçgeni",
            },
            {
              "kind": "list",
              "items": [
                "Açılar: 30°, 60°, 90°.",
                "Kısa dik kenar [[a]], 30° açının karşısında; uzun dik kenar [[b]], 60° açının karşısındadır.",
                "Hipotenüs, kısa dik kenarın iki katına eşittir: [[c = 2a]].",
                "Uzun dik kenar, kısa dik kenarın √3 katına eşittir: [[b = a\\sqrt{3}]].",
                "Kenar oranı: [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "Üç kenarı da farklı olduğu için çeşitkenar bir dik üçgendir.",
              ],
            },
            {
              "kind": "p",
              "text": "Görsel fark, neye bakacağınızı bildiğinizde açıktır. Bir 45-45-90 üçgeninde iki dik kenar aynı uzunlukta görünür ve hipotenüs her dik kenarla 45° açı yapar. Bir 30-60-90 üçgeninde 30° açının karşısındaki dik kenar gözle görülür biçimde en kısa kenardır, 60° açının karşısındaki dik kenar daha uzundur ve hipotenüs kısa dik kenarın tam iki katıdır. Aşağıdaki tablo bu karşıtlığı özetler.",
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
                "Eşit dik kenarlar",
                "Evet",
                "Hayır",
              ],
              [
                "En kısa kenar",
                "Her iki dik kenar",
                "Kısa dik kenar (30° karşısında)",
              ],
              [
                "En uzun kenar",
                "Hipotenüs",
                "Hipotenüs",
              ],
              [
                "Hipotenüs formülü",
                "a√2",
                "2a",
              ],
              [
                "Uzun dik kenar formülü",
                "Geçerli değil",
                "a√3",
              ],
              [
                "Üçgen türü",
                "İkizkenar dik",
                "Çeşitkenar dik",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "45-45-90 Üçgenini Anlamak",
          "blocks": [
            {
              "kind": "p",
              "text": "Bir 45-45-90 üçgeni ikizkenar bir dik üçgendir. İki dar açısı da 45° olduğundan açılar toplamı, her üçgende olması gerektiği gibi [[45° + 45° + 90° = 180°]] olur. İki dar açı eşit olduğu için karşılarındaki kenarlar da eşittir; bu nedenle iki dik kenar aynı uzunluktadır.",
            },
            {
              "kind": "p",
              "text": "Dik kenarlara [[a]] ve [[b]], hipotenüse [[c]] diyelim. Eşit dik kenarlar [[a = b]] anlamına gelir ve kenar oranı [[a : b : c = 1 : 1 : \\sqrt{2}]] olur. Hipotenüs, her dik üçgende olduğu gibi en uzun kenardır ve her iki dik kenardan da √2 katı, yani yaklaşık 1.414 kat daha uzundur.",
            },
            {
              "kind": "p",
              "text": "Çalışan iki formül, dik kenardan hipotenüs ve hipotenüsten dik kenar formülleridir.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Dik kenarı 5 cm alalım. Diğer dik kenar 5 cm'dir ve hipotenüs [[c = 5\\sqrt{2} \\approx 7.071]] cm'dir. Aynı adımlar her boyutta işler: 12 cm'lik bir dik kenar [[12\\sqrt{2} \\approx 16.971]] cm'lik bir hipotenüs verir ve 1 birimlik bir dik kenar √2 birimlik bir hipotenüs verir. <a href=\"/45-45-90-triangle-calculator/\">45-45-90 üçgen hesaplayıcı</a> alan ve çevre dahil bu üçgen türünü ayrıntılı olarak kapsar.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "İki eşit dik kenarı eşlik işaretleriyle gösterilen, açıları 45°, 45°, 90° olan ve hipotenüsü a√2 olarak etiketlenmiş bir 45-45-90 üçgeni",
            "caption": "Bir 45-45-90 üçgeni: eşit dik kenarlar, eşit dar açılar ve a√2 hipotenüs.",
          },
        },
        "sec-derive-454590": {
          "h2": "45-45-90 Kenar Oranını Türetmek",
          "blocks": [
            {
              "kind": "p",
              "text": "1:1:√2 oranı ezberlenecek bir kural değildir. Pisagor teoreminden birkaç adımda çıkar ve adımları bir kez görmek oranı unutmayı zorlaştırır. Dik kenarların eşit olduğu gerçeğiyle başlayın.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Pisagor teoremini dik kenarlara ve hipotenüse uygulayın.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "[[b]] yerine [[a]] yazın, çünkü dik kenarlar eşittir.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "İki özdeş terimi birleştirin.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Her iki tarafın da pozitif karekökünü alın. Uzunluklar pozitiftir, bu nedenle negatif kök atılır.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[a = 1]] alın ve oran doğrudan ortaya çıkar: dik kenarlar 1 ve 1, hipotenüs √2, yani oran [[1 : 1 : \\sqrt{2}]] olur. Aynı oran bir karenin köşegenini de açıklar. Kenarı [[a]] olan bir karenin köşegeni onu iki eş 45-45-90 üçgenine böler ve köşegen, iki üçgenden birinin hipotenüsüdür; bu nedenle köşegen [[a\\sqrt{2}]]'ye eşittir. Kenarı 8 cm olan bir karenin köşegeni [[8\\sqrt{2} \\approx 11.314]] cm'dir.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "Pisagor türetmesini gösteren etiketli bir 45-45-90 üçgeni: a kare artı a kare eşittir c kare, bu da c eşittir a çarpı kök 2 verir",
              "caption": "Pisagor türetmesi: eşit dik kenarlar a² + b² = c² ifadesini 2a² = c² biçimine dönüştürür.",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "Kenarı 8 cm ve köşegeni 8 kök 2 cm olan, iki eş 45-45-90 üçgenine bölünmüş bir kare",
              "caption": "Bir karenin köşegeni, kareyi iki eş 45-45-90 üçgenine böler.",
            },
          ],
        },
        "sec-306090": {
          "h2": "30-60-90 Üçgenini Anlamak",
          "blocks": [
            {
              "kind": "p",
              "text": "Bir 30-60-90 üçgeninin üç açısı da farklıdır, bu nedenle üç kenar uzunluğu da farklıdır. En küçük açının karşısındaki kenar en kısa kenardır, ortanca açının karşısındaki kenar ortanca kenardır ve 90° açının karşısındaki kenar hipotenüstür. Bu karşı kenar kuralı, bu üçgeni doğru etiketlemenin bütün anahtarıdır.",
            },
            {
              "kind": "p",
              "text": "30° açının karşısındaki kısa dik kenar için [[a]], 60° açının karşısındaki uzun dik kenar için [[b]] ve 90° açının karşısındaki hipotenüs için [[c]] kullanın. Çalışan iki formül, kısa dik kenardan uzun dik kenar ve kısa dik kenardan hipotenüs formülleridir.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Kenar oranı [[a : b : c = 1 : \\sqrt{3} : 2]]'dir; √3 yaklaşık 1.732'dir. Kısa dik kenarı 5 cm alalım. Uzun dik kenar [[b = 5\\sqrt{3} \\approx 8.660]] cm ve hipotenüs [[c = 10]] cm'dir. Pisagor teoremiyle kontrol edin: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]]; bu, üç kenarın birbirine uyduğunu doğrular.",
            },
            {
              "kind": "p",
              "text": "Hipotenüs her zaman kısa dik kenarın tam iki katıdır ve bu, bu konudaki en hızlı kontroldür. Bir problem hipotenüsün 14 cm olduğunu söylüyorsa kısa dik kenar hemen 7 cm'dir ve uzun dik kenar [[7\\sqrt{3} \\approx 12.124]] cm olarak bulunur. <a href=\"/30-60-90-triangle-calculator/\">30-60-90 üçgen hesaplayıcı</a> eşkenar üçgen türetmesi dahil bu üçgen türünü ayrıntılı olarak kapsar.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "Kısa dik kenarı a 30 derecenin karşısında, uzun dik kenarı a kök 3 60 derecenin karşısında ve hipotenüsü 2a 90 derecenin karşısında olan bir 30-60-90 üçgeni",
            "caption": "Bir 30-60-90 üçgeni: kısa dik kenar 30° karşısında, uzun dik kenar 60° karşısındadır.",
          },
        },
        "sec-derive-306090": {
          "h2": "30-60-90 Kenar Oranını Türetmek",
          "blocks": [
            {
              "kind": "p",
              "text": "1:√3:2 oranı bir eşkenar üçgenden gelir ve yapıyı adım adım izlemeye değer. Kenar uzunluğu [[2a]] olan bir eşkenar üçgenle başlayın. Üç açısı da 60° ve üç kenarı da eşittir.",
            },
            {
              "kind": "p",
              "text": "Bir köşeden karşı kenara bir yükseklik çizin. Yükseklik aynı anda üç şey yapar: eşkenar üçgeni iki eş dik üçgene böler, tabanı [[a]] uzunluğunda iki parçaya ayırır ve bir 60° açıyı iki 30° açıya böler. Her yarım artık açıları 30°, 60° ve 90° olan bir üçgendir.",
            },
            {
              "kind": "p",
              "text": "İki yarıdan birinde hipotenüs, asıl eşkenar kenardır, yani [[2a]]; kısa dik kenar ise tabanın yarısıdır, yani [[a]]. Uzun dik kenar olan yüksekliğe [[b]] diyelim. Pisagor teoremini yarım üçgene uygulayın.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Kareyi açın.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Sadeleştirin.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Pozitif karekökü alın.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[a = 1]] alın ve oran ortaya çıkar: kısa dik kenar 1, uzun dik kenar √3, hipotenüs 2, yani oran [[1 : \\sqrt{3} : 2]] olur. Kenarı 10 cm olan bir eşkenar üçgenin yüksekliği bu nedenle [[5\\sqrt{3} \\approx 8.660]] cm'dir, çünkü yükseklik, kısa dik kenarı 5 cm olan bir 30-60-90 üçgeninin uzun dik kenarıdır.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "Kenarı 2a olan, bir yükseklikle iki eş 30-60-90 üçgenine bölünmüş bir eşkenar üçgen; her birinde kısa dik kenar a, uzun dik kenar a kök 3 ve hipotenüs 2a",
            "caption": "Bir yükseklik, bir eşkenar üçgeni iki eş 30-60-90 üçgenine böler.",
          },
        },
        "sec-compare": {
          "h2": "İki Özel Üçgen Kenar Oranını Karşılaştırmak",
          "blocks": [
            {
              "kind": "p",
              "text": "İki oran ilk bakışta birbirine benzer ve karıştırılmalarının nedeni tam olarak budur. İkisi de bir karekök ve küçük bir tam sayı içerir ve ikisi de bir dik üçgeni tanımlar. Ama sayılar farklı yerlerde durur: 1:1:√2 oranında kök hipotenüse aittir, 1:√3:2 oranında ise kök uzun dik kenara aittir ve hipotenüs 2 tam sayısıdır.",
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
                "Eşit dik kenarlar",
                "Evet",
                "Hayır",
              ],
              [
                "En kısa kenar",
                "Her iki dik kenar",
                "Kısa dik kenar",
              ],
              [
                "En uzun kenar",
                "Hipotenüs",
                "Hipotenüs",
              ],
              [
                "Hipotenüs formülü",
                "a√2",
                "2a",
              ],
              [
                "Uzun dik kenar formülü",
                "Geçerli değil",
                "a√3",
              ],
              [
                "Üçgen türü",
                "İkizkenar dik",
                "Çeşitkenar dik",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Formüller birbirinin yerine kullanılamaz. Bir 30-60-90 kısa dik kenarını √2 ile çarpmak yanlış bir hipotenüs verir ve bir 45-45-90 dik kenarını ikiyle çarpmak yanlış bir hipotenüs verir. İki üçgen farklı yapılardan gelir: 45-45-90 için bir kare köşegeni, 30-60-90 için bir eşkenar üçgen yüksekliği; bu nedenle oranları farklı geometri sorularını yanıtlar.",
            },
            {
              "kind": "p",
              "text": "Her tür için bir sayısal örnek aradaki farkı gösterir. Dik kenarı 5 cm olan bir 45-45-90 üçgeninin hipotenüsü [[5\\sqrt{2} \\approx 7.071]] cm'dir. Kısa dik kenarı 5 cm olan bir 30-60-90 üçgeninin hipotenüsü 10 cm ve uzun dik kenarı [[5\\sqrt{3} \\approx 8.660]] cm'dir. Aynı başlangıç sayısı, çok farklı cevaplar ve onları ayırmanın tek yolu açı desenidir.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "45-45-90 oranının 1:1:√2 ve 30-60-90 oranının 1:√3:2 olduğu, eş ölçekte yan yana karşılaştırma",
            "caption": "Her iki oran da eş ölçekte: kök, 45-45-90 için hipotenüste, 30-60-90 için uzun dik kenardadır.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "45-45-90 Hipotenüs Hesaplayıcısını Kullanmak",
          "blocks": [
            {
              "kind": "p",
              "text": "Mod 1, bu sayfadaki en çok kullanılan moddur ve üçgen türü doğrulandıktan sonra yalnızca birkaç saniye sürer. Adımları sırayla izleyin.",
            },
            {
              "kind": "steps",
              "steps": [
                "Üçgenin 45-45-90 olduğunu doğrulayın: her iki dar açı da 45° olmalıdır.",
                "Bilinen kenar olarak iki eşit dik kenardan birini seçin, çünkü iki dik kenar da aynı uzunluktadır.",
                "Hesaplayıcıda 45-45-90 hipotenüs modunu seçin.",
                "Dik kenar uzunluğunu pozitif bir sayı olarak girin.",
                "Problemin geri kalanıyla uyumlu birimi seçin.",
                "Hipotenüs c Hesapla'ya tıklayın.",
                "Sonucu okuyun; bu, aynı birimle ifade edilen hipotenüstür.",
                "Yeni bir hesaplamaya başlamadan önce Sıfırla'yı kullanın.",
              ],
            },
            {
              "kind": "p",
              "text": "Mod aşağıdaki formülü uygular.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dik kenarı 7 cm olan üçgende hipotenüs [[c = 7\\sqrt{2} \\approx 9.899]] cm'dir. Formül yalnızca her iki dar açı da 45° olduğunda geçerlidir, bu nedenle cevaba güvenmeden önce açıları kontrol edin. Açılar bunun yerine 30° ve 60° ise bir 30-60-90 moduna geçin.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "45-45-90 Hipotenüsünden Dik Kenar Bulmak",
          "blocks": [
            {
              "kind": "p",
              "text": "Mod 2, hipotenüsten dik kenara geriye doğru çalışır. √2'ye böler ve en sık unutulan adım budur. Formül aşağıda gösterilmiştir.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Aynı sonuç, paydada kök bırakmayan rasyonelleştirilmiş biçimde de yazılabilir.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Bu modu kullanmak için 45-45-90 açı desenini doğrulayın, 45-45-90 dik kenar modunu seçin, hipotenüsü girin, birimi seçin ve Hesapla'ya tıklayın. Hipotenüsü 10 cm olan üçgende dik kenar [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm'dir. Dik kenarlar eşit olduğu için her iki dik kenar da bu uzunluktadır; bu nedenle tek cevap bütün üçgeni tanımlar. Hızlı bir kontrol: [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]]; bu, hipotenüsün karesiyle uyuşur.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "30-60-90 Uzun Dik Kenar Hesaplayıcısını Kullanmak",
          "blocks": [
            {
              "kind": "p",
              "text": "Mod 3, uzun dik kenarı kısa dik kenardan bulur ve tek zor yanı kısa dik kenarı doğru belirlemektir. Kısa dik kenar, 30° açının karşısındaki kenardır ve her zaman üçgenin en kısa kenarıdır.",
            },
            {
              "kind": "steps",
              "steps": [
                "Açılarından üçgenin 30-60-90 olduğunu doğrulayın.",
                "30° açının karşısındaki kenarı bulun: bu, kısa dik kenardır.",
                "Hesaplayıcıda 30-60-90 uzun dik kenar modunu seçin.",
                "Kısa dik kenarı pozitif bir sayı olarak girin.",
                "Problemin geri kalanıyla uyumlu birimi seçin.",
                "Uzun Dik Kenarı Hesapla'ya tıklayın.",
                "Sonucu okuyun; bu, aynı birimle ifade edilen uzun dik kenardır.",
              ],
            },
            {
              "kind": "p",
              "text": "Mod aşağıdaki formülü uygular.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenarı 6 cm olan üçgende uzun dik kenar [[b = 6\\sqrt{3} \\approx 10.392]] cm'dir. Yanlışlıkla hipotenüsü ya da uzun dik kenarı girmek yanlış cevap verir; bu nedenle önce kenarları etiketleyin ve yalnızca kısa dik kenarı girin.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "30-60-90 Hipotenüs Hesaplayıcısını Kullanmak",
          "blocks": [
            {
              "kind": "p",
              "text": "Mod 4, bu sayfadaki en basit moddur çünkü bir 30-60-90 üçgeninin hipotenüsü kısa dik kenarın tam iki katıdır. Karekök içermez, bu da cevabı elle kontrol etmeyi kolaylaştırır.",
            },
            {
              "kind": "steps",
              "steps": [
                "Açılarından üçgenin 30-60-90 olduğunu doğrulayın.",
                "Kısa dik kenarı, 30° açının karşısındaki kenarı belirleyin.",
                "Hesaplayıcıda 30-60-90 hipotenüs modunu seçin.",
                "Kısa dik kenarı pozitif bir sayı olarak girin.",
                "Problemin geri kalanıyla uyumlu birimi seçin.",
                "Hipotenüs c Hesapla'ya tıklayın.",
                "Sonucu okuyun; bu, aynı birimle ifade edilen hipotenüstür.",
              ],
            },
            {
              "kind": "p",
              "text": "Mod aşağıdaki formülü uygular.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenarı 8 cm olan üçgende hipotenüs [[c = 16]] cm'dir. Aynı üçgenin uzun dik kenarı [[8\\sqrt{3} \\approx 13.856]] cm'dir ve olması gerektiği gibi kısa dik kenar ile hipotenüs arasında yer alır. Bir sonuç kısa dik kenardan küçük çıkarsa yanlış mod seçilmiş demektir.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Her İki Özel Üçgen Türü İçin Adım Adım Örnekler",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu iki çözümlü örnek, her üçgen türünün bütün kenarlarını tek bir bilinen kenardan çözer. Alan ve çevre burada ek el hesapları olarak yer alır, hesaplayıcı modu olarak değil: bu sayfadaki hesaplayıcı yalnızca kenar uzunluklarını bulur.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: 45-45-90 Üçgeni",
            },
            {
              "kind": "p",
              "text": "Dik kenarı [[a = 5]] cm olan bir 45-45-90 üçgeni verildiğinde diğer dik kenarı, hipotenüsü, alanı ve çevreyi bulun.",
            },
            {
              "kind": "p",
              "text": "Dik kenarlar eşittir, bu nedenle diğer dik kenar [[b = 5]] cm'dir. Hipotenüs orandan bulunur.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "Alan, dik kenarların çarpımının yarısıdır.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Çevre, üç kenarın toplamıdır.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: 30-60-90 Üçgeni",
            },
            {
              "kind": "p",
              "text": "Kısa dik kenarı [[a = 5]] cm olan bir 30-60-90 üçgeni verildiğinde uzun dik kenarı, hipotenüsü, alanı ve çevreyi bulun.",
            },
            {
              "kind": "p",
              "text": "Uzun dik kenar, kısa dik kenarın √3 katıdır ve hipotenüs, kısa dik kenarın iki katıdır.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "Alan, dik kenarların çarpımının yarısıdır.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Çevre, üç kenarın toplamıdır.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Her iki örnek de Pisagor teoremiyle doğrulanır. İlkinde [[5^2 + 5^2 = 50]] ve [[7.071^2 \\approx 50]] olur. İkincisinde [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]] olur.",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Özel Dik Üçgenlerde Alan ve Çevre İlişkileri",
          "blocks": [
            {
              "kind": "p",
              "text": "Alan ve çevre, kenarlar bilindikten sonra kullanışlı ek hesaplamalardır; ancak bunlar bu sayfadaki hesaplayıcının işlevleri değil, el ile yapılan ilişkilerdir. Aşağıdaki formüller, kılavuzun geri kalanıyla aynı kenar etiketlerini kullanır: 45-45-90 için [[a]] bilinen dik kenar, 30-60-90 için kısa dik kenardır.",
            },
            {
              "kind": "p",
              "text": "Bir 45-45-90 üçgeninde alan, bir dik kenarın karesinin yarısıdır ve çevre, dik kenarın [[2 + \\sqrt{2}]] katıdır.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Bir 30-60-90 üçgeninde alan, dik kenarların çarpımının yarısıdır ve çevre, kısa dik kenarın [[3 + \\sqrt{3}]] katıdır.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Dik kenarı 6 cm olan bir 45-45-90 üçgenini alalım. Alanı [[A = \\frac{36}{2} = 18]] cm² ve çevresi [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm'dir. Kısa dik kenarı 6 cm olan bir 30-60-90 üçgenini alalım. Alanı [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm² ve çevresi [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm'dir. Birimleri doğru tutun: alan her zaman kare birimlerle, çevre doğrusal birimlerle ifade edilir; bu nedenle bir alan için 18 cm cevabı bir yuvarlama hatası değil, bir birim hatasıdır.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Tam Kök Cevaplar ile Ondalık Yaklaşımlar",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu kılavuzdaki karekökler irrasyonel sayılardır; yani ondalık açılımları ne biter ne de tekrar eder. Bilinmesi gereken iki değer aşağıda gösterilmiştir.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Tam bir cevap kökü yerinde bırakır, örneğin [[5\\sqrt{2}]]; ondalık bir cevap ise onu bir yaklaşımla değiştirir, örneğin [[5\\sqrt{2} \\approx 7.071]]. Tam cevaplar okul matematiğinde tercih edilir çünkü yuvarlama hatası taşımazlar ve problemin yapısını gösterirler. Bir öğretmen [[5\\sqrt{2}]] ifadesinin bir 45-45-90 üçgeninden geldiğini hemen görebilir; oysa 7.071 her yerden gelmiş olabilir.",
            },
            {
              "kind": "p",
              "text": "Ondalıklar, bir cetvelin ya da kesme aletinin sembole değil sayıya ihtiyaç duyduğu pratik ölçümler için daha iyidir. Ondalık gerektiğinde, hesaplamanın ortasında değil yalnızca sonunda yuvarlayın. √2'yi 5 ile çarpmadan önce 1.41'e yuvarlamak 7.05 verir; bu, gerçek 7.071'den 0.021 sapar ve hata daha büyük sayılarla büyür. Her ondalığı yaklaşık eşit işaretiyle etiketleyin, böylece okuyucu [[5\\sqrt{3} \\approx 8.660]] ifadesini asla tam bir eşitlikle karıştırmaz.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Özel Dik Üçgen Hesaplamalarını Doğrulamak",
          "blocks": [
            {
              "kind": "p",
              "text": "Her özel üçgen cevabı, üç testle bir dakikadan kısa sürede kontrol edilebilir: kenar oranı, Pisagor teoremi ve açı toplamı. Bir sonuca güvenmeden önce en az ikisini uygulayın.",
            },
            {
              "kind": "p",
              "text": "Bir 45-45-90 üçgeninde dik kenarların eşit olduğunu, [[a = b]], ve kenarların Pisagor teoremini sağladığını, [[a^2 + b^2 = c^2]], kontrol edin. [[a = 5]] cm ve [[c = 7.071]] cm ile kontrol, [[25 + 25 = 50]] ile [[7.071^2 \\approx 50]] karşılaştırmasıdır ve uyuşur.",
            },
            {
              "kind": "p",
              "text": "Bir 30-60-90 üçgeninde uzun dik kenarın kısa dik kenarın √3 katı olduğunu, [[b = a\\sqrt{3}]], hipotenüsün kısa dik kenarın iki katı olduğunu, [[c = 2a]], ve [[a^2 + b^2 = c^2]] olduğunu kontrol edin. [[a = 5]] cm, [[b = 8.660]] cm ve [[c = 10]] cm ile kontrol, [[25 + 75 = 100 = 10^2]] olur ve uyuşur.",
            },
            {
              "kind": "p",
              "text": "Açı toplamını da doğrulayın: üç açının toplamı 180° olmalıdır. Bir 45-45-90 üçgeni [[45° + 45° + 90° = 180°]] verir ve bir 30-60-90 üçgeni [[30° + 60° + 90° = 180°]] verir. Oran, teorem ve açılar üçü de uyuşuyorsa cevap sağlamdır. Bunlardan biri bile tutmuyorsa üçgen türü yanlış belirlenmiş ya da yanlış formül kullanılmış demektir.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Özel Dik Üçgenleri Çözerken Yapılan Yaygın Hatalar",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu konuda yanlış cevapların neredeyse tamamına on dört hata yol açar. Her biri, doğru yaklaşımla birlikte aşağıda listelenmiştir; böylece kendi hatanızı hızla bulabilirsiniz.",
            },
            {
              "kind": "list",
              "items": [
                "45-45-90 ile 30-60-90 üçgenlerini karıştırmak. Önce açıları kontrol edin: iki 45° açı 45-45-90, 30° ve 60° ise 30-60-90 anlamına gelir.",
                "√2 yerine √3 kullanmak. 45-45-90 hipotenüsü [[c = a\\sqrt{2}]]'dir, asla [[a\\sqrt{3}]] değildir.",
                "√3 yerine √2 kullanmak. 30-60-90 uzun dik kenarı [[b = a\\sqrt{3}]]'tür, asla [[a\\sqrt{2}]] değildir.",
                "Bir 30-60-90 üçgeninde iki dik kenarın da eşit olduğunu varsaymak. Yalnızca 45-45-90 üçgeninin eşit dik kenarları vardır; 30-60-90 üçgeninde uzun dik kenar, kısa dik kenarın √3 katıdır.",
                "Kısa ve uzun dik kenarların eşit olduğunu varsaymak. Kısa dik kenar 30° karşısında, uzun dik kenar 60° karşısındadır; bu nedenle √3 katı kadar farklıdırlar.",
                "30-60-90 hipotenüsünün kısa dik kenarın iki katı olduğunu unutmak. Bu [[c = 2a]]'dır; karekök içermeyen tam sayılı bir iki katına çıkarmadır.",
                "Yanlış girdi kenarını kullanmak. Mod 3 ve Mod 4 ikisi de kısa dik kenara ihtiyaç duyar; bu nedenle uzun dik kenarı ya da hipotenüsü girmek yanlış cevap verir.",
                "Kısa dik kenarı hipotenüsle karıştırmak. Hipotenüs en uzun kenardır ve 90° açının karşısındadır; kısa dik kenar en kısa kenardır.",
                "Bir 45-45-90 dik kenarını bulurken √2'ye bölmeyi unutmak. Dik kenar [[a = \\frac{c}{\\sqrt{2}}]]'dir, [[a = c\\sqrt{2}]] değildir; bu, dik kenarı hipotenüsten uzun yapardı.",
                "Bir 30-60-90 uzun dik kenarını bulurken √3 ile çarpmayı unutmak. Uzun dik kenar [[b = a\\sqrt{3}]]'tür ve yalnızca [[a]]'yı kullanmak kısa dik kenarı geri verir.",
                "Kökleri çok erken yuvarlamak. [[\\sqrt{2}]] ve [[\\sqrt{3}]] ifadelerini her adımda tam tutun ve yalnızca son cevabı yuvarlayın.",
                "Birimleri karıştırmak. Cm cinsinden bir dik kenar ile mm cinsinden bir hipotenüs aynı formülü paylaşamaz; önce dönüştürün, sonra hesaplayın.",
                "Alanı çevreyle karıştırmak. Alan kare birimler kullanır ve 45-45-90 için formülü [[A = \\frac{a^2}{2}]]'dir; çevre ise doğrusal birimler kullanır ve formülü [[P = a(2 + \\sqrt{2})]]'dir.",
                "Özel üçgen formüllerini rastgele dik üçgenlere uygulamak. 1:1:√2 ve 1:√3:2 oranları yalnızca kendi açı desenleri için geçerlidir; bir 20-70-90 üçgeni bunun yerine trigonometri gerektirir.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Özel Dik Üçgenlerin Pratik Kullanımları",
          "blocks": [
            {
              "kind": "p",
              "text": "Özel dik üçgenler, karelerin, eşkenar üçgenlerin ve standart açıların göründüğü her yerde karşımıza çıkar. Bir kare köşegeni bir 45-45-90 problemidir: kenarı 60 cm olan kare bir masa üstünün köşegeni [[60\\sqrt{2} \\approx 84.853]] cm'dir. Bir eşkenar üçgen yüksekliği bir 30-60-90 problemidir: kenarı 40 cm olan üçgen bir tabelanın yüksekliği [[20\\sqrt{3} \\approx 34.641]] cm'dir.",
            },
            {
              "kind": "p",
              "text": "Derste bu üçgenler geometri ödevlerini ve trigonometri alıştırmalarını hızlandırır, çünkü 30°, 45° ve 60° gibi standart açıların tam sinüs ve kosinüs değerleri doğrudan bu oranlardan gelir. Teknik çizimde ve standart açılı çizimde 45° ve 30-60 gönyeler tam olarak bu üçgenler üzerine kuruludur; bu nedenle bir teknik ressam, kenar oranlarını önceden bilerek 45°'lik ya da 30°'lik bir çizgi çizebilir.",
            },
            {
              "kind": "p",
              "text": "Mimarlık ve tasarım kavramları, çapraz destekler, çatı eğimleri ve karo düzenleri için aynı desenleri kullanır; inşaat geometrisi de köşenin dik olduğunu doğrulamak gibi hızlı saha kontrolleri için bunlardan yararlanır, örneğin 3-4-5 tarzı bir köşegen ya da 45-45-90 köşegeni ölçerek. Matematiksel modelleme ve sınıf gösterileri de bunları kullanır, çünkü tam kök cevapları akıl yürütmeyi bir hesaplayıcının içine saklamak yerine görünür kılar. Bunları, hassasiyetin gerekli olduğu yerlerde doğru mühendislik ölçümünün yerine değil, planlama ve kontrol için geometri kısayolları olarak görün.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Cevaplı Alıştırma Problemleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Her problemi önce kendi başınıza çözün, sonra çözümü kontrol edin. Alan ve çevre soruları el alıştırmalarıdır, hesaplayıcı modu değildir. Desenlerin taze uygulanması için ana örneklerden farklı sayılar kullanın.",
            },
            {
              "kind": "h3",
              "text": "45-45-90 Problemleri",
            },
            {
              "kind": "steps",
              "steps": [
                "Dik kenarı 7 cm olan bir 45-45-90 üçgeninin hipotenüsünü bulun. Çözüm: [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "Hipotenüsü 12 cm olan bir 45-45-90 üçgeninin bir dik kenarını bulun. Çözüm: [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "Dik kenarı 9 cm olan bir 45-45-90 üçgeninin alanını bulun. Çözüm: [[A = \\frac{81}{2} = 40.5]] cm².",
                "Dik kenarı 4 cm olan bir 45-45-90 üçgeninin çevresini bulun. Çözüm: [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "30-60-90 Problemleri",
            },
            {
              "kind": "steps",
              "steps": [
                "Kısa dik kenarı 7 cm olan bir 30-60-90 üçgeninin uzun dik kenarını bulun. Çözüm: [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "Kısa dik kenarı 9 cm olan bir 30-60-90 üçgeninin hipotenüsünü bulun. Çözüm: [[c = 2 \\times 9 = 18]] cm.",
                "Kısa dik kenarı 6 cm olan bir 30-60-90 üçgeninin alanını bulun. Çözüm: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "Kısa dik kenarı 10 cm olan bir 30-60-90 üçgeninin çevresini bulun. Çözüm: [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları",
      "relatedIntro": "Aşağıdaki her araç farklı bir dik üçgen problemini çözer. Elinizdeki bilgiye uyanı seçin.",
      "relatedItems": [
        "45-45-90 Üçgen Hesaplayıcı",
        "30-60-90 Üçgen Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
        "Trigonometrik Oranlar Hesaplayıcı",
        "Dik Üçgen Açı Hesaplayıcı",
        "Pisagor Teoremi Hesaplayıcı",
      ],
      "faqHeading": "Sık Sorulan Sorular",
      "faqs": [
        {
          "question": "Özel dik üçgen nedir?",
          "answer": "Özel bir dik üçgen, açıları kenar oranını sabitleyen bir dik üçgendir; bu nedenle tek bir bilinen kenar diğer tüm kenarları belirler. İki türü vardır: oranı [[1 : 1 : \\sqrt{2}]] olan 45-45-90 üçgeni ve oranı [[1 : \\sqrt{3} : 2]] olan 30-60-90 üçgeni.",
        },
        {
          "question": "Bu hesaplayıcı hangi özel dik üçgenleri kapsar?",
          "answer": "Bu hesaplayıcı, okul geometrisinde kullanılan iki özel dik üçgeni kapsar: 45-45-90 üçgeni ve 30-60-90 üçgeni. Dört modu vardır: dik kenardan 45-45-90 hipotenüsü, hipotenüsten 45-45-90 dik kenarı, kısa dik kenardan 30-60-90 uzun dik kenarı ve kısa dik kenardan 30-60-90 hipotenüsü.",
        },
        {
          "question": "Bir 45-45-90 üçgeninin kenar oranı nedir?",
          "answer": "Bir 45-45-90 üçgeninin kenar oranı [[1 : 1 : \\sqrt{2}]]'dir. İki dik kenar eşittir ve hipotenüs, dik kenarın √2 katıdır, yaklaşık 1.414. Dik kenarı 5 cm olan üçgende hipotenüs [[5\\sqrt{2} \\approx 7.071]] cm'dir.",
        },
        {
          "question": "Bir 30-60-90 üçgeninin kenar oranı nedir?",
          "answer": "Bir 30-60-90 üçgeninin kenar oranı [[1 : \\sqrt{3} : 2]]'dir. Kısa dik kenar 30° karşısında, uzun dik kenar 60° karşısında ve hipotenüs 90° karşısındadır. Kısa dik kenarı 5 cm olan üçgende uzun dik kenar [[5\\sqrt{3} \\approx 8.660]] cm ve hipotenüs 10 cm'dir.",
        },
        {
          "question": "45-45-90 üçgeninde √2 neden ortaya çıkar?",
          "answer": "√2, Pisagor teoreminin iki eşit dik kenara uygulanmasından gelir. [[a = b]] iken teorem [[a^2 + a^2 = c^2]] verir; bu nedenle [[2a^2 = c^2]] ve [[c = a\\sqrt{2}]] olur. Kök, iki eşit kareyi tek bir hipotenüs karesine dönüştürmenin bedelidir.",
        },
        {
          "question": "30-60-90 üçgeninde √3 neden ortaya çıkar?",
          "answer": "√3, bir eşkenar üçgeni ikiye bölmekten gelir. Bir yükseklik, kenarı [[2a]] olan bir eşkenar üçgeni iki 30-60-90 üçgenine böler ve yarılardan birine uygulanan Pisagor teoremi [[b^2 = 3a^2]] verir; bu nedenle uzun dik kenar [[b = a\\sqrt{3}]] olur.",
        },
        {
          "question": "Bir 45-45-90 üçgeninin hipotenüsünü nasıl bulurum?",
          "answer": "İki eşit dik kenardan birini √2 ile çarpın. Formül [[c = a\\sqrt{2}]]'dir. Örneğin dik kenarı 7 cm olan üçgende hipotenüs [[7\\sqrt{2} \\approx 9.899]] cm'dir. 45-45-90 hipotenüs modunu seçin, dik kenarı girin ve Hesapla'ya tıklayın.",
        },
        {
          "question": "Bir 30-60-90 üçgeninin uzun dik kenarını nasıl bulurum?",
          "answer": "Kısa dik kenarı √3 ile çarpın. Formül [[b = a\\sqrt{3}]]'tür. Örneğin kısa dik kenarı 6 cm olan üçgende uzun dik kenar [[6\\sqrt{3} \\approx 10.392]] cm'dir. 30° açının karşısındaki kenar olan kısa dik kenarı girdiğinizden emin olun; hipotenüsü değil.",
        },
        {
          "question": "Hipotenüsten eksik dik kenarı hesaplayabilir miyim?",
          "answer": "Evet, bir 45-45-90 üçgeni için. Hipotenüsü √2'ye bölün; [[a = \\frac{c}{\\sqrt{2}}]] ya da rasyonelleştirilmiş [[a = \\frac{c\\sqrt{2}}{2}]] biçimini kullanın. Hipotenüsü 10 cm olan üçgende dik kenar [[5\\sqrt{2} \\approx 7.071]] cm'dir ve iki dik kenar da bu uzunluğu paylaşır.",
        },
        {
          "question": "Tüm özel dik üçgenler kendi türleri içinde benzer midir?",
          "answer": "Evet. Her 45-45-90 üçgeni aynı açılara ve aynı 1:1:√2 oranına sahiptir, bu nedenle herhangi ikisi benzerdir. Her 30-60-90 üçgeni de aynı şekilde 1:√3:2 oranını paylaşır. Bir 45-45-90 üçgeni, açıları farklı olduğu için asla bir 30-60-90 üçgenine benzer değildir.",
        },
        {
          "question": "İki özel üçgen türü arasındaki fark nedir?",
          "answer": "Bir 45-45-90 üçgeninin iki eşit dik kenarı ve 1:1:√2 oranı vardır; bir 30-60-90 üçgeninin ise üç farklı kenarı ve 1:√3:2 oranı vardır. İlki bir kare köşegeninden, ikincisi bir eşkenar üçgen yüksekliğinden gelir ve formülleri birbirinin yerine kullanılamaz.",
        },
        {
          "question": "Hesapladığım kenar uzunluklarını nasıl doğrulayabilirim?",
          "answer": "Kenar oranını, Pisagor teoremini ve açı toplamını kontrol edin. 45-45-90 için [[a = b]] ve [[a^2 + b^2 = c^2]] olduğunu doğrulayın. 30-60-90 için [[b = a\\sqrt{3}]], [[c = 2a]] ve [[a^2 + b^2 = c^2]] olduğunu doğrulayın. Üç kontrol de uyuşuyorsa cevap sağlamdır.",
        },
      ],
    },
};
