// projectionGuideTranslations.btr.ts: Right Triangle Projection
// Guide (Page 33 of 45) translation.
export const PRJ_B6_TR = {
  "tr": {
      "faqHeading": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "Dik üçgende izdüşüm nedir?",
          "answer": "İzdüşüm, dik açıdan hipotenüse indirilen yüksekliğin hipotenüsle buluşmasıyla oluşan hipotenüs parçasıdır. Yükseklik hipotenüsü p ve q olmak üzere iki parçaya böler. Her parça, bir dik kenarın hipotenüs üzerindeki izdüşümüdür.",
        },
        {
          "question": "p izdüşümü ile q izdüşümü arasındaki fark nedir?",
          "answer": "p izdüşümü A köşesinin yanında yer alır ve a dik kenarına aittir, q izdüşümü ise B köşesinin yanında yer alır ve b dik kenarına aittir. İkisi aynı hipotenüsün iki parçasıdır ve [[p + q = c]]. Bunları yer değiştirmek, tanımladıkları dik kenarları da değiştirir.",
        },
        {
          "question": "p izdüşümünün formülü nedir?",
          "answer": "Formül [[p = a^2 / c]] şeklindedir; burada a, a dik kenarı ve c tam hipotenüstür. Önce a dik kenarının karesini alın, sonra c'ye bölün. [[a = 9]] cm ve [[c = 15]] cm için [[p = 81 / 15 = 5.4]] cm olur.",
        },
        {
          "question": "q izdüşümünün formülü nedir?",
          "answer": "Formül [[q = b^2 / c]] şeklindedir; burada b, b dik kenarı ve c tam hipotenüstür. Önce b dik kenarının karesini alın, sonra c'ye bölün. [[b = 12]] cm ve [[c = 15]] cm için [[q = 144 / 15 = 9.6]] cm olur.",
        },
        {
          "question": "p izdüşümünden a dik kenarı nasıl hesaplanır?",
          "answer": "[[a = \\sqrt{c \\times p}]] formülünü kullanın. Hipotenüs c ile p izdüşümünü çarpın, sonra karekökünü alın. [[c = 25]] cm ve [[p = 9]] cm için [[a = \\sqrt{225} = 15]] cm olur. Karekök gereklidir, çünkü cp, a'nın kendisine değil a'nın karesine eşittir.",
        },
        {
          "question": "q izdüşümünden b dik kenarı nasıl hesaplanır?",
          "answer": "[[b = \\sqrt{c \\times q}]] formülünü kullanın. Hipotenüs c ile q izdüşümünü çarpın, sonra karekökünü alın. [[c = 25]] cm ve [[q = 16]] cm için [[b = \\sqrt{400} = 20]] cm olur. Karekök, kareli uzunluğu tekrar bir kenar uzunluğuna dönüştürür.",
        },
        {
          "question": "İki izdüşümden hipotenüs nasıl bulunur?",
          "answer": "İki izdüşümü toplayın: [[c = p + q]]. Yükseklik hipotenüsü tam olarak bu iki parçaya böler, bu yüzden toplamları bütün kenarı yeniden oluşturur. [[p = 9]] cm ve [[q = 16]] cm için [[c = 25]] cm olur.",
        },
        {
          "question": "İzdüşüm teoreminde neden karekök kullanılır?",
          "answer": "Çünkü teorem, dik kenarın kendisini değil karesini verir. [[a^2 = c \\times p]] ifadesi kareli bir uzunluğu tanımlar. Karekök almak kare alma işlemini geri alır ve sıradan bir uzunluk verir. Bunu atlamak, kareli bir değeri kenar gibi bildirmek olur.",
        },
        {
          "question": "İzdüşümler yüksekliği belirleyebilir mi?",
          "answer": "Evet. Yükseklik, iki izdüşümün geometrik ortalamasıdır: [[h = \\sqrt{p \\times q}]]. [[p = 9]] cm ve [[q = 16]] cm için [[h = \\sqrt{144} = 12]] cm olur. Bu sayfada yükseklik modu yoktur, bu yüzden bu adım için özel izdüşümlerden yükseklik hesaplayıcısını kullanın.",
        },
        {
          "question": "İzdüşümler Pisagor teoremiyle nasıl ilişkilidir?",
          "answer": "İki izdüşüm formülünü toplamak [[a^2 + b^2 = c \\times p + c \\times q = c(p + q)]] verir. [[p + q = c]] olduğundan bu ifade [[a^2 + b^2 = c^2]] olur. İzdüşüm teoremi, Pisagor ilişkisini dik kenar başına bir parça olacak şekilde böler.",
        },
        {
          "question": "Hangi hesaplayıcı modunu seçmeliyim?",
          "answer": "Modu bildiğiniz değerlere göre seçin. a ve c'yi biliyorsanız p parçası modunu, b ve c'yi biliyorsanız q parçası modunu, c ve p'yi biliyorsanız a dik kenarı modunu, c ve q'yu biliyorsanız b dik kenarı modunu ve p ile q'yu biliyorsanız izdüşümler toplamı c modunu kullanın.",
        },
        {
          "question": "İzdüşümler dik üçgenin dik kenarlarıyla aynı mıdır?",
          "answer": "Hayır. Dik kenarlar, dik açıyı oluşturan iki kenardır; izdüşümler ise hipotenüs boyunca uzanan parçalardır. İzdüşüm çoğu durumda kendi dik kenarından daha kısadır ve üçgenin kenarı boyunca değil, hipotenüs üzerinde düz uzanır.",
        },
      ],
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "relatedIntro": "Aşağıdaki her hesaplayıcı tek bir izdüşüm görevini yerine getirdiğinden, sonraki aracı ihtiyacınız olan ölçüme göre seçin.",
      "relatedItems": [
        "Dik Üçgen P İzdüşümü Hesaplayıcı",
        "Dik Üçgen Q İzdüşümü Hesaplayıcı",
        "Dik Üçgen İzdüşümden A Dik Kenarı Hesaplayıcı",
        "Dik Üçgen İzdüşümden B Dik Kenarı Hesaplayıcı",
        "Dik Üçgen İzdüşümlerden Hipotenüs Hesaplayıcı",
        "Dik Üçgen İzdüşümlerden Yükseklik Hesaplayıcı",
        "Dik Üçgen Yükseklik Hesaplayıcı",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dik üçgende izdüşüm, bir dik kenarın hipotenüs üzerine düşürdüğü gölgedir. Dik açılı köşeden hipotenüse yüksekliği indirin; bu yükseklik o kenarı p ve q adı verilen iki parçaya böler. p parçası a dik kenarına, q parçası ise b dik kenarına aittir.",
            },
            {
              "kind": "p",
              "text": "Bu Dik Üçgen İzdüşüm Hesaplayıcı, beş izdüşüm ilişkisinin tamamıyla çalışır. a dik kenarından p izdüşümünü, b dik kenarından q izdüşümünü, p izdüşümünden a dik kenarını, q izdüşümünden b dik kenarını ve p ile q'dan tam hipotenüsü bulur. Her görev ayrı bir moddur, bu yüzden zaten bildiğiniz ölçümlere uyan modu seçersiniz.",
            },
            {
              "kind": "p",
              "text": "Aynı iki izdüşüm bütün üçgeni de yeniden kurabilir. Örneğin, [[p = 9]] cm ve [[q = 16]] cm ise [[c = 9 + 16 = 25]] cm olur ve yükseklik [[h = \\sqrt{9 \\times 16} = 12]] cm'dir. Bu rehber her modu açıklar, formülleri gösterir, örnekler üzerinden çalışır ve her cevabı nasıl kontrol edeceğinizi öğretir.",
            },
          ],
          "h2": "Dik Üçgen İzdüşüm Hesaplayıcı",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bu sayfadaki hesaplayıcı, her izdüşüm ilişkisi için bir tane olmak üzere beş mod sunar. Her mod iki bilinen ölçüm ister ve bir bilinmeyen değer döndürür. Önce bütün üçgeni çözmeniz gerekmez: sayılarınıza uyan modu seçin, değerleri girin ve sonucu okuyun.",
            },
            {
              "kind": "p",
              "text": "Aşağıdaki tablo seçim yapmanın en hızlı yoludur. Bilinen ölçümlerinizle eşleşen satırı bulun; o satır kullanmanız gereken modu söyler. Sonraki bölümler her modu ayrıntılı olarak açıklar ve her biri için çözümlü bir örnek verir.",
            },
          ],
          "h2": "Dik Üçgen İzdüşümlerini ve Hipotenüs Parçalarını Hesaplayın",
          "table": {
            "headers": [
              "Hesaplayıcı Modu",
              "Bilinen Ölçümler",
              "Sonuç",
            ],
            "rows": [
              [
                "Hipotenüs Parçası p",
                "a dik kenarı ve hipotenüs c",
                "p izdüşümü",
              ],
              [
                "Hipotenüs Parçası q",
                "b dik kenarı ve hipotenüs c",
                "q izdüşümü",
              ],
              [
                "A Dik Kenarı Kareli İzdüşüm",
                "Hipotenüs c ve p izdüşümü",
                "a dik kenarı",
              ],
              [
                "B Dik Kenarı Kareli İzdüşüm",
                "Hipotenüs c ve q izdüşümü",
                "b dik kenarı",
              ],
              [
                "İzdüşümler Toplamı c",
                "p izdüşümü ve q izdüşümü",
                "Hipotenüs c",
              ],
            ],
          },
        },
        "sec-what-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dik açısı C'de olan ABC dik üçgenini alın. Dik açıyı oluşturan iki kenar dik kenarlardır: AC ve BC. Dik açının karşısındaki kenar hipotenüs AB'dir. Şimdi C'den hipotenüse doğru bir yükseklik çizin ve hipotenüsle D adlı bir noktada buluşsun. Bu yükseklik hipotenüse diktir, yani AB ile dik açıyla buluşur.",
            },
            {
              "kind": "p",
              "text": "D noktası hipotenüsü iki bitişik parçaya böler. A köşesinin yanındaki AD parçası p izdüşümüdür. B köşesinin yanındaki DB parçası q izdüşümüdür. Birlikte bütün hipotenüsü oluştururlar:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Her izdüşüm, kendi köşesine dokunan dik kenara aittir. a dik kenarı A köşesine dokunur, bu yüzden izdüşümü p'dir. b dik kenarı B köşesine dokunur, bu yüzden izdüşümü q'dur. Bu eşleşme hiç değişmez: a, p ile gider ve b, q ile gider.",
            },
            {
              "kind": "p",
              "text": "İzdüşümler hipotenüs boyunca düz uzanır. Üçgenin kenarları değildirler ve hiçbir şeye dik değildirler. Her birini, yükseklik düz aşağı indiğinde kendi dik kenarının hipotenüs üzerine düşürdüğü gölge olarak düşünün.",
            },
          ],
          "h2": "Dik Üçgende İzdüşüm Nedir?",
        },
        "sec-sides-segments": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bir üçgen altı adlandırılmış parça taşır ve her birinin sabit bir konumu vardır. Aşağıdaki tablo her parçayı simgesi, anlamı ve konumu ile listeler. Bu tabloyu bir kez öğrenin; bu rehberdeki her formül açıkça okunur.",
            },
            {
              "kind": "p",
              "text": "Doğru parçayı belirlemek önemlidir, çünkü her hesaplayıcı modu belirli girdiler bekler. Dik kenarın yerine bir izdüşüm girmek ya da p yerine q girmek yine bir sayı üretir, ancak sorduğunuz sorudan farklı bir soruyu yanıtlar. Önce şekli etiketleyin, sonra etiketleri modla eşleştirin.",
            },
          ],
          "h2": "Dik Üçgenin Kenarlarını ve Parçalarını Anlamak",
          "table": {
            "headers": [
              "Simge",
              "Ad",
              "Konum",
            ],
            "rows": [
              [
                "a",
                "a dik kenarı (AC kenarı)",
                "A köşesine dokunan dik kenar",
              ],
              [
                "b",
                "b dik kenarı (BC kenarı)",
                "B köşesine dokunan dik kenar",
              ],
              [
                "c",
                "Hipotenüs (AB kenarı)",
                "En uzun kenar, dik açının karşısı",
              ],
              [
                "p",
                "p izdüşümü (AD parçası)",
                "Hipotenüsün A köşesinin yanındaki parçası",
              ],
              [
                "q",
                "q izdüşümü (DB parçası)",
                "Hipotenüsün B köşesinin yanındaki parçası",
              ],
              [
                "h",
                "Yükseklik (CD parçası)",
                "C'den hipotenüse dik inen parça",
              ],
            ],
          },
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beş formül bu sayfadaki her modu kapsar. İlk ikisi dik kenarlardan izdüşüm bulur. Sonraki ikisi izdüşümlerden dik kenarları geri getirir. Sonuncusu hipotenüsü iki parçasından yeniden kurar.",
            },
            {
              "kind": "p",
              "text": "p izdüşümü, a dik kenarı ve hipotenüsten:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "q izdüşümü, b dik kenarı ve hipotenüsten:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "a dik kenarı, hipotenüs ve p izdüşümünden:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "b dik kenarı, hipotenüs ve q izdüşümünden:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenüs, her iki izdüşümden:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "İzdüşüm bulmak, bir dik kenarın karesini alıp hipotenüse bölmek demektir. Dik kenar bulmak, hipotenüsü bir izdüşümle çarpıp karekök almak demektir. Hipotenüs bulmak, iki parçayı toplamak demektir. Karekök yalnızca bir dik kenar geri getirilirken ortaya çıkar, çünkü yalnızca dik kenar formülleri kareli bir uzunluktan başlar. Tüm ölçümler aynı birimi kullanmalıdır, bu yüzden hesaplamadan önce dönüştürün.",
            },
          ],
          "h2": "Dik Üçgen İzdüşüm Formülleri Açıklandı",
        },
        "sec-choose-mode": {
          "blocks": [
            {
              "kind": "p",
              "text": "Mod seçmek bir eşleştirme işidir: bildiğiniz iki ölçümü isteyen modu bulun; hesaplayıcı eksik olanı döndürür.",
            },
            {
              "kind": "h3",
              "text": "Mod 1: Hipotenüs Parçası p",
            },
            {
              "kind": "p",
              "text": "a dik kenarını ve c hipotenüsünü biliyorsanız bu modu seçin. Formül [[p = a^2 / c]] şeklindedir. a dik kenarının karesini alın, sonra c'ye bölün. Bir problem size bir dik kenar ile bütün hipotenüsü verip o dik kenara ait hipotenüs parçasını sorduğunda kullanın.",
            },
            {
              "kind": "h3",
              "text": "Mod 2: Hipotenüs Parçası q",
            },
            {
              "kind": "p",
              "text": "b dik kenarını ve c hipotenüsünü biliyorsanız bu modu seçin. Formül [[q = b^2 / c]] şeklindedir. Bu mod, a dik kenarı yerine b dik kenarının kullanıldığı 1. modun aynadaki görüntüsüdür. Bilinen dik kenar B köşesine dokunan kenar olduğunda kullanın.",
            },
            {
              "kind": "h3",
              "text": "Mod 3: A Dik Kenarı Kareli İzdüşüm",
            },
            {
              "kind": "p",
              "text": "c hipotenüsünü ve p izdüşümünü biliyorsanız bu modu seçin. Formül [[a = \\sqrt{c \\times p}]] şeklindedir. Önce çarpın, sonra karekök alın. Bir problem hipotenüsü ve A'nın yanındaki parçayı verip dik kenarı sorduğunda kullanın.",
            },
            {
              "kind": "h3",
              "text": "Mod 4: B Dik Kenarı Kareli İzdüşüm",
            },
            {
              "kind": "p",
              "text": "c hipotenüsünü ve q izdüşümünü biliyorsanız bu modu seçin. Formül [[b = \\sqrt{c \\times q}]] şeklindedir. Bu mod, p yerine q'nun kullanıldığı 3. modun aynadaki görüntüsüdür. Bilinen parça B'nin yanındaki parça olduğunda kullanın.",
            },
            {
              "kind": "h3",
              "text": "Mod 5: İzdüşümler Toplamı c",
            },
            {
              "kind": "p",
              "text": "p ve q izdüşümlerinin ikisini de biliyorsanız bu modu seçin. Formül [[c = p + q]] şeklindedir; sade bir toplamadır, kare alma ve karekök yoktur.",
            },
            {
              "kind": "p",
              "text": "Hızlı karar kılavuzu: c ile birlikte bir dik kenar bir izdüşüm verir, c ile birlikte bir izdüşüm bir dik kenar verir ve iki izdüşüm birlikte c'yi verir. Bilinen değerleriniz bu çiftlerin hiçbirine uymuyorsa önce başka bir ölçüme ihtiyacınız vardır.",
            },
          ],
          "h2": "Doğru Hesaplayıcı Modu Nasıl Seçilir",
          "image": {
            "alt": "Beş hesaplayıcı modu, bilinen değerleri ve sonuçları ile: a ve c'den p parçası, b ve c'den q parçası, c ve p'den a dik kenarı, c ve q'dan b dik kenarı ve p ile q'dan c hipotenüsü",
            "caption": "Bilinen her çifte bir mod: c ile birlikte bir dik kenar bir izdüşüm verir, c ile birlikte bir izdüşüm bir dik kenar verir ve p ile q, c'yi verir.",
            "src": "projection-five-modes.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "p izdüşümü, a dik kenarına ait olan hipotenüs parçasıdır. Formül, a dik kenarının karesini tam hipotenüse böler:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[a = 9]] cm ve [[c = 15]] cm kullanın. Adım 1 formülü yazar: [[p = a^2 / c]]. Adım 2 değerleri yerine koyar: [[p = 9^2 / 15 = 81 / 15]]. Adım 3 böler ve [[p = 5.4]] cm sonucunu verir. Cevap, a ve c ile aynı birimle ölçülen, hipotenüs boyunca bir uzunluktur.",
            },
            {
              "kind": "p",
              "text": "Kısa bir kontrol sonucu doğrular. Bu üçgendeki diğer dik kenar 12 cm'dir, bu yüzden onun izdüşümü [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm olur. İki izdüşümü toplamak [[5.4 + 9.6 = 15]] cm verir; bu tam olarak c'dir. İki izdüşümünüz c'ye toplanmıyorsa girdilerden biri yanlıştır. Sık ihtiyacınız olduğunda <a href=\"/right-triangle-projection-p-calculator/\">p izdüşümü hesaplayıcısı</a> bu hesaplamayı kendi başına yapar.",
            },
          ],
          "h2": "A Dik Kenarı ve Hipotenüsten P İzdüşümü Nasıl Hesaplanır",
          "image": {
            "alt": "a dik kenarının karesinin hipotenüs c'ye bölünmesinin p izdüşümünü verdiğini gösteren dik üçgen; a 9 cm ve c 15 cm iken p 5.4 cm olur",
            "caption": "a dik kenarından p izdüşümü: p, a'nın karesi bölü c'ye eşittir, yani 81 bölü 15, 5.4 cm verir.",
            "src": "projection-p-leg-a.svg",
          },
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "q izdüşümü, b dik kenarına ait olan hipotenüs parçasıdır. Formül, b dik kenarının karesini tam hipotenüse böler:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[b = 12]] cm ve [[c = 15]] cm kullanın. Adım 1 formülü yazar: [[q = b^2 / c]]. Adım 2 değerleri yerine koyar: [[q = 12^2 / 15 = 144 / 15]]. Adım 3 böler ve [[q = 9.6]] cm sonucunu verir. Cevap, B köşesinin yanındaki parçadır; yükseklik ayağının p'den karşı tarafındadır.",
            },
            {
              "kind": "p",
              "text": "Devam etmeden önce iki izdüşümü karşılaştırın. Burada p 5.4 cm ve q 9.6 cm'dir, yani q daha büyüktür; bu, b dik kenarının a dik kenarından daha uzun olmasıyla uyumludur. Daha uzun dik kenar her zaman daha uzun izdüşüm oluşturur. Daha uzun dik kenarınız daha kısa izdüşümü ürettiyse p ile q'yu karıştırmışsınızdır. Sık ihtiyacınız olduğunda <a href=\"/right-triangle-projection-q-calculator/\">q izdüşümü hesaplayıcısı</a> bu hesaplamayı kendi başına yapar.",
            },
          ],
          "h2": "B Dik Kenarı ve Hipotenüsten Q İzdüşümü Nasıl Hesaplanır",
          "image": {
            "alt": "b dik kenarının karesinin hipotenüs c'ye bölünmesinin q izdüşümünü verdiğini gösteren dik üçgen; b 12 cm ve c 15 cm iken q 9.6 cm olur",
            "caption": "b dik kenarından q izdüşümü: q, b'nin karesi bölü c'ye eşittir, yani 144 bölü 15, 9.6 cm verir.",
            "src": "projection-q-leg-b.svg",
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "a dik kenarını geri getirmek için hipotenüsü p izdüşümüyle çarpın ve karekökünü alın:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "[[c = 25]] cm ve [[p = 9]] cm kullanın. Çarpım [[25 \\times 9 = 225]] olur ve 225'in karekökü 15'tir, yani [[a = 15]] cm olur. 225 çarpımı bir kenar değil kareli bir uzunluktur, bu yüzden karekök atlanamaz. 225'i dik kenar olarak bildirmek, hipotenüsten dokuz kat daha uzun bir kenar iddia etmek olur.",
            },
            {
              "kind": "p",
              "text": "Karekök adımı bu modun bütün özüdür. İzdüşüm teoremi [[a^2 = c \\times p]] der, yani çarpım dik kenarın karesini verir. Bir kareyi geri almak karekök gerektirir, tıpkı iki katını geri almanın yarıya bölmeyi gerektirmesi gibi. Kendi başına sık ihtiyacınız olduğunda <a href=\"/right-triangle-leg-a-from-projection-calculator/\">izdüşümden a dik kenarı hesaplayıcısı</a> bu hesaplamayı tam olarak kapsar.",
            },
          ],
          "h2": "P İzdüşümünden A Dik Kenarı Nasıl Bulunur",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "b dik kenarını geri getirmek için hipotenüsü q izdüşümüyle çarpın ve karekökünü alın:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "[[c = 25]] cm ve [[q = 16]] cm kullanın. Çarpım [[25 \\times 16 = 400]] olur ve 400'ün karekökü 20'dir, yani [[b = 20]] cm olur. Yöntem, p yerine q'nun kullanıldığı a dik kenarı hesabının aynadaki görüntüsüdür. Eşleşme üçgen etiketleriyle sabittir, bu yüzden buraya p girmek a dik kenarını döndürür.",
            },
            {
              "kind": "p",
              "text": "Cevabı üçgenin boyutuna göre kontrol edin. b dik kenarı hipotenüsten kısa olmalıdır ve 20 cm, 25 cm'den kısadır, bu yüzden sonuç ilk mantık kontrolünden geçer. Karesini almak [[20^2 = 400]] verir; bu, [[c \\times q = 25 \\times 16 = 400]] ile eşleşir, yani teorem tam olarak sağlanır. Kendi başına sık ihtiyacınız olduğunda <a href=\"/right-triangle-leg-b-from-projection-calculator/\">izdüşümden b dik kenarı hesaplayıcısı</a> bu hesaplamayı tam olarak kapsar.",
            },
          ],
          "h2": "Q İzdüşümünden B Dik Kenarı Nasıl Bulunur",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "İki izdüşüm, tek bir düz kenarın iki parçasıdır, bu yüzden hipotenüs onların toplamıdır:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "[[p = 9]] cm ve [[q = 16]] cm kullanın. Toplamak [[c = 9 + 16 = 25]] cm verir. Bu, parça toplama ilkesidir: bir nokta bir parçayı iki parçaya böldüğünde bütün parça, parçalarının toplamına eşittir. Yükseklik ayağı D, AB hipotenüsünü AD ve DB olarak böler, bu yüzden AB, AD artı DB'ye eşittir.",
            },
            {
              "kind": "p",
              "text": "Bu mod aynı zamanda diğer dört mod için en hızlı kontroldür. p ve q'yu ayrı ayrı hesapladığınızda onları toplayıp c ile karşılaştırın. 9-12-15 üçgeninde [[p = 5.4]] cm ve [[q = 9.6]] cm toplamı 15 cm olur ve her iki izdüşümü birden doğrular. Kendi başına sık ihtiyacınız olduğunda <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">izdüşümlerden hipotenüs hesaplayıcısı</a> bu hesaplamayı tam olarak kapsar.",
            },
          ],
          "h2": "İzdüşümlerden Tam Hipotenüs Nasıl Hesaplanır",
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "On kısa adım, sizi etiketlenmiş bir şekilden kontrol edilmiş bir cevaba götürür. Adımlar her mod için aynıdır; yalnızca seçtiğiniz mod ve girdiğiniz sayılar değişir.",
            },
            {
              "kind": "steps",
              "steps": [
                "Hangi ölçümlerin bilindiğini belirleyin.",
                "Hesaplayıcı mod seçicisini açın.",
                "Eşleşen hesaplama modunu seçin.",
                "İstenen ilk ölçümü girin.",
                "İstenen ikinci ölçümü girin.",
                "Uyumlu ölçüm birimlerini seçin.",
                "İlgili Hesapla düğmesine tıklayın.",
                "Görüntülenen sonucu okuyun.",
                "Uygun olduğunda cevabı başka bir geometrik ilişkiyle kontrol edin.",
                "Başka bir hesaplamaya başlamadan önce Sıfırla düğmesini kullanın.",
              ],
            },
            {
              "kind": "p",
              "text": "Adım 1 işin çoğunu yapar. Üçgeni etiketleyin, p ve q'yu hipotenüs üzerinde işaretleyin ve her izdüşümün hangi dik kenara ait olduğunu not edin. Etiketler belirlendikten sonra mod seçimi bu rehberin başındaki tablodan çıkar ve hesaplayıcı aritmetiği halleder. Sayfada olmayan özellikleri tanımlamayın ya da beklemeyin: sayfa yüksekliği, açıları ya da alanı otomatik olarak hesaplamaz.",
            },
          ],
          "h2": "Dik Üçgen İzdüşüm Hesaplayıcı Nasıl Kullanılır",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ana şekil, dik açısı C'de olan ABC üçgenini gösterir. AC kenarı a dik kenarı, BC kenarı b dik kenarı ve AB kenarı c hipotenüsüdür. CD yüksekliği C'den AB'ye dik olarak iner ve ona D noktasında dokunur. İki küçük kare dik açıları işaretler: biri dik kenarlar arasında C'de, biri yükseklik ile hipotenüs arasında D'de.",
            },
            {
              "kind": "p",
              "text": "D noktası hipotenüsü AD parçası olan p izdüşümü ve DB parçası olan q izdüşümü olarak böler. CD yüksekliği h olarak etiketlenir. Etiketleri sabitlemek için şekli şu sırayla izleyin: A'dan başlayın, a dik kenarı boyunca C'ye gidin, sonra b dik kenarı boyunca B'ye gidin, sonra hipotenüs boyunca B'den A'ya dönün ve p ile q'ya ayrılışı görmek için D'de durun.",
            },
            {
              "kind": "p",
              "text": "Yükseklik, asıl üçgenin içinde ACD ve CBD olmak üzere iki küçük dik üçgen oluşturur. ACD üçgeninde hipotenüs a dik kenarıdır ve bir dik kenar p izdüşümüdür. CBD üçgeninde hipotenüs b dik kenarıdır ve bir dik kenar q izdüşümüdür.",
            },
          ],
          "h2": "Dik Üçgen İzdüşüm Şeklinin Anlaşılması",
          "image": {
            "alt": "Dik açısı C'de olan ABC dik üçgeni; AB hipotenüsüne CD yüksekliği, a ve b dik kenarları, c hipotenüsü, p ve q izdüşümleri ve h yüksekliği etiketli",
            "caption": "Ana üçgen ABC: CD yüksekliği AB hipotenüsünü p izdüşümü (AD) ve q izdüşümü (DB) olarak böler.",
            "src": "projection-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "İspat benzer üçgenlere dayanır. CD yüksekliğini çizmek ABC üçgenini ACD ve CBD olmak üzere iki küçük dik üçgene böler ve ikisi de asıl üçgene benzerdir. Benzerlik, eşleşen kenarların aynı oranda kalması demektir ve bu oranlardan biri izdüşüm teoremini doğrudan verir.",
            },
            {
              "kind": "p",
              "text": "a dik kenarıyla başlayın. ACD üçgeni, ABC üçgeniyle A'daki açıyı paylaşır ve ikisi de bir dik açı içerir, bu yüzden üçüncü açıları da eşleşmek zorundadır. Aynı konumlarda duran kenarları eşleştirmek şu orantıyı verir:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Şimdi standart simgeleri yerine koyun: [[AD = p]], [[AC = a]] ve [[AB = c]]. Orantı şu hale gelir:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "İçler dışlar çarpımı kesirleri yok eder: [[p \\times c = a \\times a]], yani [[a^2 = c \\times p]]. Aynı akıl yürütmeyi diğer küçük üçgen CBD'ye uygulamak [[b^2 = c \\times q]] verir, çünkü CBD üçgeni bütün üçgenle B'deki açıyı paylaşır. Benzerlik bütün işi yapar: benzer üçgenlerin eşleşen kenarları orantılı kalır ve izdüşüm teoremi, bu orantının içler dışlar çarpımından sonraki halidir.",
            },
          ],
          "h2": "İzdüşüm Teoremleri Neden İşe Yarar?",
          "image": {
            "alt": "Asıl ABC dik üçgeninin yanında ACD ve CBD küçük benzer üçgenleri; p bölü a eşittir a bölü c ve q bölü b eşittir b bölü c orantılarını gösterir",
            "caption": "Benzer üçgenlerle ispat: p bölü a, a bölü c'ye eşittir ve q bölü b, b bölü c'ye eşittir.",
            "src": "projection-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Her örnek verilen değerleri, modu, yerine koymayı ve son cevabı belirtir. İki örnek beş modun her birini kapsar, böylece her modu farklı sayılarla iki kez görebilirsiniz.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: P İzdüşümünü Bulun",
            },
            {
              "kind": "p",
              "text": "[[a = 9]] cm ve [[c = 15]] cm verildiğinde 1. mod, Hipotenüs Parçası p kullanılır. Formül [[p = 9^2 / 15 = 81 / 15 = 5.4]] cm verir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: P İzdüşümünü Bulun",
            },
            {
              "kind": "p",
              "text": "[[a = 12]] m ve [[c = 20]] m verildiğinde 1. mod kullanılır. Formül [[p = 12^2 / 20 = 144 / 20 = 7.2]] m verir. Diğer izdüşüm 12.8 m'dir ve [[7.2 + 12.8 = 20]] m sonucu doğrular.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Q İzdüşümünü Bulun",
            },
            {
              "kind": "p",
              "text": "[[b = 12]] cm ve [[c = 15]] cm verildiğinde 2. mod, Hipotenüs Parçası q kullanılır. Formül [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm verir. Bu, Örnek 1'deki üçgenin diğer dik kenardan görünüşüdür.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Q İzdüşümünü Bulun",
            },
            {
              "kind": "p",
              "text": "[[b = 8]] m ve [[c = 10]] m verildiğinde 2. mod kullanılır. Formül [[q = 8^2 / 10 = 64 / 10 = 6.4]] m verir. Diğer izdüşüm 3.6 m'dir ve bu tanıdık 6-8-10 üçgenidir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: A Dik Kenarını Bulun",
            },
            {
              "kind": "p",
              "text": "[[c = 25]] cm ve [[p = 9]] cm verildiğinde 3. mod, A Dik Kenarı Kareli İzdüşüm kullanılır. Formül [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm verir. Çarpım tam karedir, bu yüzden cevap kesindir ve yuvarlama gerekmez.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: A Dik Kenarını Bulun",
            },
            {
              "kind": "p",
              "text": "[[c = 10]] cm ve [[p = 4]] cm verildiğinde 3. mod kullanılır. Formül [[a = \\sqrt{10 \\times 4} = \\sqrt{40} \\approx 6.325]] cm verir. 40 çarpımı tam kare değildir, bu yüzden cevap üç ondalık basamağa yuvarlanmış bir yaklaşıktır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: B Dik Kenarını Bulun",
            },
            {
              "kind": "p",
              "text": "[[c = 25]] cm ve [[q = 16]] cm verildiğinde 4. mod, B Dik Kenarı Kareli İzdüşüm kullanılır. Formül [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm verir. Bu, Örnek 5'teki üçgenin diğer izdüşümden görünüşüdür ve 15 ile 20 dik kenarları 15-20-25 üçgenini tamamlar.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: B Dik Kenarını Bulun",
            },
            {
              "kind": "p",
              "text": "[[c = 10]] cm ve [[q = 6]] cm verildiğinde 4. mod kullanılır. Formül [[b = \\sqrt{10 \\times 6} = \\sqrt{60} \\approx 7.746]] cm verir. Eşleşen a dik kenarı, Örnek 6'dan yaklaşık 6.325 cm'dir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 9: Hipotenüsü Bulun",
            },
            {
              "kind": "p",
              "text": "[[p = 9]] cm ve [[q = 16]] cm verildiğinde 5. mod, İzdüşümler Toplamı c kullanılır. Formül [[c = 9 + 16 = 25]] cm verir. Kare alma ve karekök gerekmez, çünkü iki parça basitçe bütün kenara birleşir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 10: Hipotenüsü Bulun",
            },
            {
              "kind": "p",
              "text": "[[p = 3.5]] m ve [[q = 6.5]] m verildiğinde 5. mod kullanılır. Formül [[c = 3.5 + 6.5 = 10]] m verir. Ondalıklı izdüşümler tam sayılarla aynı şekilde toplanır, bu yüzden ondalık virgüllerini hizalayıp toplayın.",
            },
          ],
          "h2": "Beş Hesaplayıcı Modunun Tamamını Kullanan Çözümlü Örnekler",
        },
        "sec-all-measurements": {
          "blocks": [
            {
              "kind": "p",
              "text": "İki izdüşümü bilmek bütün üçgeni yeniden kurmaya yeter. [[p = 9]] cm ve [[q = 16]] cm kullanın. Önce hipotenüs [[c = 9 + 16 = 25]] cm olur. Sonra a dik kenarı [[a = \\sqrt{25 \\times 9} = 15]] cm ve b dik kenarı [[b = \\sqrt{25 \\times 16} = 20]] cm olur. Yükseklik [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm'dir.",
            },
            {
              "kind": "p",
              "text": "Tek bir sayı çifti dört uzunluk verir: c, a, b ve h. İzdüşüm ilişkilerinin gücü budur: hipotenüs üzerindeki iki parça üçgenin bütün şeklini taşır. Son bir kontrol döngüyü kapatır: [[15^2 + 20^2 = 225 + 400 = 625 = 25^2]], yani Pisagor teoremi bütün üçgeni birden doğrular.",
            },
            {
              "kind": "p",
              "text": "Bunların ayrı hesaplayıcı modları değil matematiksel ilişkiler olduğunu unutmayın. Bu sayfa mod başına bir değer hesaplar. Bütün üçgeni yeniden kurmak, bir modu çalıştırıp sonucunu bir sonrakinde kullanmak ya da yukarıda gösterildiği gibi adımları elle yapmak demektir.",
            },
          ],
          "h2": "Dik Üçgenin Tüm Ana Ölçümleri Nasıl Hesaplanır",
          "image": {
            "alt": "p 9 ve q 16 izdüşümleri, hipotenüs 25, dik kenarlar 15 ve 20 ve yükseklik 12 olan dik üçgen; altı ölçümün tamamı tek bir şekilde gösteriliyor",
            "caption": "Tek bir izdüşüm çifti üçgeni yeniden kurar: c = 25, a = 15, b = 20, h = 12.",
            "src": "projection-numerical-example.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "İzdüşüm teoremi ile Pisagor teoremi tam olarak uyuşur ve cebir bunun nedenini gösterir. İki izdüşüm formülünden başlayın:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "b dik kenarı için eşleşen formülü, [[b^2 = c \\times q]], ekleyerek şunu elde edin:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Sağ taraftan c'yi çarpan olarak çıkarmak [[a^2 + b^2 = c(p + q)]] verir. [[p + q = c]] olduğundan yerine koymak tanıdık sonucu verir:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "9-16-25 üçgeniyle sayısal kontrol bunu doğrular: [[a^2 + b^2 = 225 + 400 = 625]] ve [[c^2 = 25^2 = 625]]. İki teorem rakip değildir. İzdüşüm teoremi Pisagor ilişkisini dik kenar başına bir parça olacak şekilde böler ve parçaları toplamak onu yeniden kurar. Bu yüzden bu sayfadaki her sonuç Pisagor teoremiyle kontrol edilebilir.",
            },
          ],
          "h2": "İzdüşümler ile Pisagor Teoremi Arasındaki İlişki",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik, iki izdüşümün geometrik ortalamasıdır:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "[[p = 9]] cm ve [[q = 16]] cm kullanın. Çarpım [[9 \\times 16 = 144]] olur ve 144'ün karekökü 12'dir, yani [[h = 12]] cm olur. Yükseklik, dik açıdan hipotenüse inen dik parçadır ve uzunluğu p ile q bilindiğinde sabittir. Bu, dik kenarları izdüşümlere bağlayan geometrik ortalama fikrinin yüksekliğe uygulanmış halidir.",
            },
            {
              "kind": "p",
              "text": "Bu sayfada özel bir yükseklik modu olmadığını unutmayın. Hesaplayıcı izdüşümleri, dik kenarları ve hipotenüsü döndürür, ancak h'yi döndürmez. Yüksekliği doğrudan çözen bir sayfa için p ve q'yu alıp h'yi döndüren <a href=\"/right-triangle-altitude-from-projections-calculator/\">izdüşümlerden yükseklik hesaplayıcısını</a> kullanın. <a href=\"/right-triangle-altitude-calculator/\">yükseklik hesaplayıcısı</a>, h'yi dik kenarlardan ya da alandan bulmanın diğer yollarını kapsar.",
            },
          ],
          "h2": "İzdüşümler ile Yükseklik Arasındaki İlişki",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dört bağımsız kontrol neredeyse her hatayı yakalar. Her cevapta en az birini çalıştırın ve problem önemliyse dördünü de çalıştırın. Her kontrol farklı bir ilişki kullanır, bu yüzden birinden kaçan bir hata genellikle bir başkası tarafından yakalanır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 1: İzdüşüm Toplama",
            },
            {
              "kind": "p",
              "text": "[[p + q = c]] olduğunu doğrulayın. [[p = 9]] cm, [[q = 16]] cm ve [[c = 25]] cm ile [[9 + 16 = 25]] olur, yani parçalar uyuşur. Toplam c'den farklıysa izdüşümlerden biri yanlıştır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 2: A Dik Kenarı için İzdüşüm Teoremi",
            },
            {
              "kind": "p",
              "text": "a dik kenarının karesini alıp [[c \\times p]] ile karşılaştırın. [[a = 15]] cm, [[c = 25]] cm ve [[p = 9]] cm ile [[a^2 = 225]] ve [[c \\times p = 225]] olur, yani cevap geçer. İki sayı farklıysa dik kenar ya da izdüşüm yanlıştır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 3: B Dik Kenarı için İzdüşüm Teoremi",
            },
            {
              "kind": "p",
              "text": "b dik kenarının karesini alıp [[c \\times q]] ile karşılaştırın. [[b = 20]] cm, [[c = 25]] cm ve [[q = 16]] cm ile [[b^2 = 400]] ve [[c \\times q = 400]] olur, yani cevap geçer. Cevabınız bir dik kenar olduğunda bu kontrolü kullanın.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 4: Pisagor Teoremi",
            },
            {
              "kind": "p",
              "text": "[[a^2 + b^2 = c^2]] olduğunu doğrulayın. [[a = 15]] cm, [[b = 20]] cm ve [[c = 25]] cm ile [[225 + 400 = 625 = 25^2]] olur. Bu kontrol üçgenin tamamını birden sınar, yalnızca bir formülü değil, bu yüzden dördü arasında en güçlüsüdür.",
            },
          ],
          "h2": "İzdüşüm Hesaplamalarınızı Nasıl Doğrularsınız",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Aşağıdaki hataların çoğu aritmetikten değil etiketlemeden kaynaklanır, bu yüzden cevap yanlış göründüğünde yeniden hesaplamadan önce şekli yeniden etiketleyin.",
            },
            {
              "kind": "steps",
              "steps": [
                "p izdüşümü ile q izdüşümünü karıştırmak: p, A'nın yanında durur ve a dik kenarına aittir; q ise B'nin yanında durur ve b dik kenarına aittir.",
                "a dik kenarını p yerine q ile eşleştirmek: a dik kenarı p'yi kullanır, yani [[a = \\sqrt{c \\times p}]]. q'yu kullanmak a dik kenarını değil b dik kenarını döndürür.",
                "b dik kenarını q yerine p ile eşleştirmek: b dik kenarı q'yu kullanır, yani [[b = \\sqrt{c \\times q}]]. p'yi kullanmak b dik kenarını değil a dik kenarını döndürür.",
                "Bir dik kenar hesaplarken karekökü unutmak: cp çarpımı a'nın karesidir, a'nın kendisi değildir. c = 25 ve p = 9 iken dik kenar 225 değil 15 cm'dir.",
                "Farklı ölçüm birimlerini karıştırmak: önce dönüştürün. Metreleri santimetrelerle çarpmak anlamsız bir çarpım verir, bu yüzden iki girdiyi de tek bir birime koyun.",
                "Yanlış hesaplayıcı modunu kullanmak: modu, bu rehberin başındaki tabloyla bilinen değerlerinize göre eşleştirin.",
                "p ya da q'yu dik bir kenar sanmak: izdüşümler hipotenüs boyunca düz uzanır. Onlar hipotenüsün parçalarıdır, üçgenin kenarları değildir.",
                "c = p + q olduğunu unutmak: iki izdüşüm hipotenüse toplanmak zorundadır.",
                "Geçersiz ya da negatif uzunluklar kullanmak: uzunluklar pozitiftir, bu yüzden negatif bir girdi veri hatasına işaret eder ve sıfır izdüşümler gerçek bir üçgen tanımlamaz.",
                "Çok erken yuvarlamak: son adıma kadar tam kesinliği koruyun, sonra bir kez yuvarlayın.",
                "Formülleri rastgele bir üçgene uygulamak: teorem bir dik açı ve onun yüksekliğini gerektirir, bu yüzden bunlar olmadan bu anlamda p ve q izdüşümleri yoktur.",
                "Kareli kenar uzunluklarını gerçek kenar uzunluklarıyla karıştırmak: 225, a'nın karesidir; 15 ise a'nın kendisidir. Bir sayı yazmadan önce hangisini kastettiğinizi söyleyin.",
              ],
            },
          ],
          "h2": "Dik Üçgen İzdüşüm Hesaplayıcı Kullanırken Yapılan Yaygın Hatalar",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Altı özellik doğrudan izdüşüm formüllerinden çıkar. Her biri yeni bir cevap için mantık kontrolü olarak da iş görür.",
            },
            {
              "kind": "list",
              "items": [
                "Eşit izdüşümler eşit dik kenarlar üretir. [[p = q = 5]] ve [[c = 10]] ile her iki dik kenar [[\\sqrt{50} \\approx 7.071]] olur ve üçgen bir ikizkenar dik üçgendir.",
                "Eşit olmayan izdüşümler eşit olmayan dik kenarlar üretir: daha uzun izdüşüm daha uzun dik kenara aittir.",
                "p ile q'yu yer değiştirmek, karşılık gelen dik kenar uzunluklarını değiştirir ancak toplam hipotenüsü değiştirmez, çünkü [[p + q = c]] her iki durumda da geçerlidir.",
                "Tüm ölçümleri aynı pozitif çarpanla ölçeklemek her sonucu o çarpanla ölçekler. p ve q'yu iki katına çıkarmak c, a, b ve h'yi iki katına çıkarır.",
                "İzdüşümler her zaman pozitiftir ve geçerli, dejenere olmayan bir dik üçgende her zaman c'den küçüktür. c'ye eşit bir izdüşüm diğer izdüşümü sıfır bırakır.",
                "Daha uzun dik kenar her zaman daha uzun izdüşüm oluşturur. Dik kenar uzunluklarını izdüşüm uzunluklarıyla karşılaştırmak, karışmış bir etiketi fark etmenin hızlı bir yoludur.",
              ],
            },
            {
              "kind": "p",
              "text": "Aşağıdaki şekil, hipotenüs 10'da sabit tutularak her iki durumu da gösterir. Eşit izdüşümler onu eşit böler ve eşit dik kenarlar verir; eşit olmayan izdüşümler ise farklı uzunluklarda dik kenarlar verir.",
            },
          ],
          "h2": "Özel Durumlar ve Önemli İzdüşüm Özellikleri",
          "image": {
            "alt": "Hipotenüsü 10 olan iki dik üçgen: biri p ve q izdüşümleri 5 olan eşit izdüşümlü ve eşit dik kenarlı, diğeri p 2 ve q 8 olan eşit olmayan dik kenarlı",
            "caption": "Eşit izdüşümler eşit dik kenarlar verir; eşit olmayan izdüşümler eşit olmayan dik kenarlar verir; hipotenüs her ikisinde de 10'dur.",
            "src": "projection-equal-vs-unequal.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "En doğrudan kullanım geometri ödevleri ve sınıf çalışmalarıdır; burada izdüşüm problemleri, öğrencilerin bir şekli etiketleyip alışkanlıkla Pisagor teoremine uzanmak yerine [[a^2 = c \\times p]] formülünü uygulayıp uygulayamadığını sınar. Benzer üçgen alıştırmaları aynı düzeneği kullanır, çünkü ispatın kendisi eşleşen kenarları eşleştirme alıştırmasıdır.",
            },
            {
              "kind": "p",
              "text": "Teknik çizim, bir dik üçgenin kısmi ölçümlerden yeniden kurulması gerektiğinde teoremi kullanır: bir çizim hipotenüsü ve yüksekliğin ayağını veriyorsa eksik dik kenar, şekli yeniden ölçmeden bulunur.",
            },
            {
              "kind": "p",
              "text": "Her uygulamayı bir koşul sınırlar: gerekli dik üçgen geometrisi gerçekten var olmalıdır. Teorem yaklaşık saha ölçümlerini değil kesin geometrik ilişkileri tanımlar, bu yüzden dikkatli ölçümün ya da profesyonel mühendislik ölçümünün yerini asla almaz. Kendi uygun ortamında ise tek bir çarpma ve bir karekök ile iki bilinen uzunluğu üçüncü bir uzunluğa dönüştürür.",
            },
          ],
          "h2": "Dik Üçgen İzdüşüm İlişkilerinin Pratik Uygulamaları",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cevapları okumadan önce altı problemin tamamını kağıt üzerinde deneyin. Değerlerin hiçbiri çözümlü örnekleri tekrarlamaz ve son problem bu rehberdeki birkaç fikri birleştirir.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: P İzdüşümünü Bulun",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin [[a = 6]] cm dik kenarı ve [[c = 10]] cm hipotenüsü vardır. p izdüşümünü bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Q İzdüşümünü Bulun",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin [[b = 15]] cm dik kenarı ve [[c = 25]] cm hipotenüsü vardır. q izdüşümünü bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: A Dik Kenarını Bulun",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin [[c = 17]] cm hipotenüsü ve [[p = 8]] cm izdüşümü vardır. a dik kenarını bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 4: B Dik Kenarını Bulun",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin [[c = 13]] cm hipotenüsü ve [[q = 9]] cm izdüşümü vardır. b dik kenarını bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Hipotenüsü Bulun",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin [[p = 5]] cm ve [[q = 20]] cm izdüşümleri vardır. c hipotenüsünü bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Çok Adımlı İzdüşüm Teoremi",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin [[p = 4]] cm ve [[q = 9]] cm izdüşümleri vardır. Hipotenüsü, iki dik kenarı ve yüksekliği bulun, sonra sonucu Pisagor teoremiyle kontrol edin.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Problemlerinin Cevapları",
            },
            {
              "kind": "p",
              "text": "Cevap 1: [[p = 6^2 / 10 = 36 / 10 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 2: [[q = 15^2 / 25 = 225 / 25 = 9]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 3: [[a = \\sqrt{17 \\times 8} = \\sqrt{136} \\approx 11.662]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 4: [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 5: [[c = 5 + 20 = 25]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 6: [[c = 4 + 9 = 13]] cm, [[a = \\sqrt{13 \\times 4} = \\sqrt{52} \\approx 7.211]] cm, [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm, [[h = \\sqrt{4 \\times 9} = 6]] cm. Kontrol: [[52 + 117 = 169 = 13^2]].",
            },
          ],
          "h2": "Cevaplı Alıştırma Problemleri",
        },
      },
      "tocHeading": "Rehber İçeriği",
      "tocItems": {
        "sec-intro": "Dik Üçgen İzdüşüm Hesaplayıcı",
        "sec-calculate": "Dik Üçgen İzdüşümlerini ve Hipotenüs Parçalarını Hesaplayın",
        "sec-what-projections": "Dik Üçgende İzdüşüm Nedir?",
        "sec-sides-segments": "Dik Üçgenin Kenarlarını ve Parçalarını Anlamak",
        "sec-formulas": "Dik Üçgen İzdüşüm Formülleri Açıklandı",
        "sec-choose-mode": "Doğru Hesaplayıcı Modu Nasıl Seçilir",
        "sec-projection-p": "A Dik Kenarı ve Hipotenüsten P İzdüşümü Nasıl Hesaplanır",
        "sec-projection-q": "B Dik Kenarı ve Hipotenüsten Q İzdüşümü Nasıl Hesaplanır",
        "sec-leg-a": "P İzdüşümünden A Dik Kenarı Nasıl Bulunur",
        "sec-leg-b": "Q İzdüşümünden B Dik Kenarı Nasıl Bulunur",
        "sec-hypotenuse": "İzdüşümlerden Tam Hipotenüs Nasıl Hesaplanır",
        "sec-how-to-use": "Dik Üçgen İzdüşüm Hesaplayıcı Nasıl Kullanılır",
        "sec-diagram": "Dik Üçgen İzdüşüm Şeklinin Anlaşılması",
        "sec-proof": "İzdüşüm Teoremleri Neden İşe Yarar?",
        "sec-examples": "Beş Hesaplayıcı Modunun Tamamını Kullanan Çözümlü Örnekler",
        "sec-all-measurements": "Dik Üçgenin Tüm Ana Ölçümleri Nasıl Hesaplanır",
        "sec-pythagoras": "İzdüşümler ile Pisagor Teoremi Arasındaki İlişki",
        "sec-altitude": "İzdüşümler ile Yükseklik Arasındaki İlişki",
        "sec-verify": "İzdüşüm Hesaplamalarınızı Nasıl Doğrularsınız",
        "sec-mistakes": "Dik Üçgen İzdüşüm Hesaplayıcı Kullanırken Yapılan Yaygın Hatalar",
        "sec-properties": "Özel Durumlar ve Önemli İzdüşüm Özellikleri",
        "sec-applications": "Dik Üçgen İzdüşüm İlişkilerinin Pratik Uygulamaları",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
        "sec-faq": "Sıkça Sorulan Sorular",
      },
    },
};
