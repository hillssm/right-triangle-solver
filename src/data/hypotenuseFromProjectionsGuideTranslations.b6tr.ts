// hypotenuseFromProjectionsGuideTranslations.btr.ts: Right Triangle Altitude From Projections
// Guide (Page 30 of 45) translation.
export const HFP_B6_TR = {
  "tr": {
      "tocHeading": "Kılavuz İçindekiler",
      "tocItems": {
        "sec-altitude": "Hipotenüs İzdüşümlerinin Yükseklikle İlişkisi",
        "sec-applications": "Hipotenüs İzdüşümü Hesaplamalarının Pratik Uygulamaları",
        "sec-calculate": "İki İzdüşümden Hipotenüsü Hesaplama",
        "sec-compare": "İzdüşümlerden Hipotenüs ve Kenarlardan Hipotenüs",
        "sec-diagram": "Dik Üçgen Hipotenüs İzdüşümü Şeması Açıklaması",
        "sec-examples": "İzdüşümlerden Hipotenüs İçin Çözümlü Örnekler",
        "sec-faq": "Sık Sorulan Sorular",
        "sec-formula": "Dik Üçgen Hipotenüs İzdüşümlerden Formülü",
        "sec-how": "Hipotenüs İzdüşümlerden Hesaplayıcısı Nasıl Kullanılır",
        "sec-intro": "Dik Üçgen Hipotenüs İzdüşümlerden Hesaplayıcı",
        "sec-legs": "Hipotenüs İzdüşümleri ile Üçgen Kenarları Arasındaki İlişki",
        "sec-manual": "Hipotenüs İzdüşümlerden Manuel Olarak Nasıl Hesaplanır",
        "sec-mistakes": "Hipotenüs İzdüşümlerden Hesaplanırken Yapılan Yaygın Hatalar",
        "sec-practice": "Cevaplı Alıştırma Soruları",
        "sec-pythagoras": "Hipotenüs İzdüşümleri ve Pisagor Teoremi",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
        "sec-special": "Özel Durumlar ve Önemli Özellikler",
        "sec-understanding": "Hipotenüsü ve İki Parçasını Anlamak",
        "sec-verify": "Hipotenüs Hesabınız Nasıl Doğrulanır",
        "sec-what": "Dik Üçgende Hipotenüs İzdüşümleri Nedir?",
        "sec-why": "Hipotenüs İzdüşümlerinin Toplamına Neden Eşittir?",
      },
      "sections": {
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "İki giriş alanı, her ikisi de hipotenüs boyunca ölçülen izdüşüm uzunlukları p ve q'yu kabul eder. Birim seçiciler, p ve q toplanmadan önce uyumlu birimler kullandığı sürece santimetre, metre, milimetre, fit veya inç girmenize olanak tanır.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Sonucu görmek için Hipotenüs c'yi Hesapla'ya basın ve yeni bir problem için alanları temizlemek üzere Sıfırla'yı kullanın. Yalnızca pozitif uzunluklar kabul edilir, çünkü izdüşüm hipotenüsün gerçek bir parçasıdır; sıfır veya negatif bir değer onu tanımlayamaz.",
            },
            {
              "kind": "p",
              "text": "Sonuç, seçtiğiniz birimde tam hipotenüs uzunluğu c'dir. Aritmetik basit bir toplamadır, ancak aşağıdaki bölümler parçaların ne anlama geldiğini ve cevabın elle nasıl kontrol edileceğini açıklar.",
            },
          ],
          "h2": "İki İzdüşümden Hipotenüsü Hesaplama",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Formül [[c = p + q]] şeklindedir; burada c tam hipotenüs, p ilk izdüşüm parçası ve q ikincisidir. Çarpma veya karekök yerine toplama kullanır, çünkü iki izdüşüm tek bir düz kenarın bitişik parçalarıdır ve parça toplamı, kenarı parçalarından yeniden kurar. Bir tahtanın iki parçasını ölçüp tahtanın toplam uzunluğunu bulmak için ölçümleri toplamak gibi düşünün.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Sık sorulan bir soru, formülün neden iki parçanın ortalamasını almadığıdır. Ortalama almak, hipotenüsün yarısını verirdi ki bu farklı bir sorunun cevabıdır. Toplama, bütün kenarı yeniden kurar; ortalama ve geometrik ortalama, bu kılavuzun ilerleyen bölümlerinde ele alınan diğer formüllere aittir.",
            },
            {
              "kind": "p",
              "text": "[[p = 7]] cm ve [[q = 11]] cm alın. Yerine koyma [[c = 7 + 11]] verir, yani [[c = 18]] cm. Formülün kendisi basittir; önemli olan, hangi iki parçanın izdüşüm sayıldığını anlamaktır.",
            },
            {
              "kind": "p",
              "text": "Toplamadan önce her iki parça da uyumlu birimler kullanmalıdır. p milimetre ve q santimetre cinsinden ise önce birini dönüştürün, tıpkı bu sayfadaki hesaplayıcının sizi yönlendirdiği gibi.",
            },
          ],
          "h2": "Dik Üçgen Hipotenüs İzdüşümlerden Formülü",
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dokuz kısa adım, sizi etiketli bir şemadan doğrulanmış bir hipotenüse götürür.",
            },
            {
              "kind": "steps",
              "steps": [
                "Probleminizdeki dik üçgeni belirleyin ve bir dik açısı olduğunu doğrulayın.",
                "Hipotenüsü bulun: dik açının karşısındaki kenar.",
                "Dik açıdan inen yüksekliğin hipotenüsle buluştuğu noktayı bulun.",
                "İki izdüşümü, p ve q'yu, o noktanın iki yanındaki parçalar olarak belirleyin; ilk parça için <a href=\"/right-triangle-projection-p-calculator/\">izdüşüm p hesaplayıcı</a> kılavuzunu kullanın. <a href=\"/right-triangle-projection-q-calculator/\">izdüşüm q hesaplayıcı</a> ikinci parçayı aynı şekilde ele alır.",
                "Gerekirse her iki ölçümü de uyumlu birimlere dönüştürün.",
                "İzdüşüm p alanına p'yi, İzdüşüm q alanına q'yu girin.",
                "Hipotenüs c'yi Hesapla düğmesine tıklayın.",
                "Hipotenüs sonucunu seçtiğiniz birimde okuyun.",
                "Yeni bir probleme başlamadan önce Sıfırla'yı kullanın.",
              ],
            },
            {
              "kind": "p",
              "text": "Doğru belirleme en önemli adımdır. Alanlar hipotenüsün kendi iki parçasını bekler, kenarları veya yüksekliği değil. Yanlış çift girmek yine bir toplam üretir, ancak bu hipotenüs olmaz.",
            },
          ],
          "h2": "Hipotenüs İzdüşümlerden Hesaplayıcısı Nasıl Kullanılır",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bu hesaplayıcı, bir dik üçgenin hipotenüsünü iki izdüşüm parçasını toplayarak bulur.",
            },
            {
              "kind": "p",
              "text": "p ve q izdüşümleri, dik açıdan inen yüksekliğin hipotenüsle buluştuğunda oluşturduğu iki parçadır. Her iki uzunluğu girin; hesaplayıcı bunları [[c = p + q]] formülüyle toplayarak tam hipotenüsü verir. Örneğin, [[p = 4]] cm ve [[q = 9]] cm ise [[c = 4 + 9 = 13]] cm olur.",
            },
            {
              "kind": "p",
              "text": "Hipotenüs, dik üçgenin en uzun kenarıdır ve dik açının karşısında yer alır. Hesaplayıcı bu sayfada ilk sırada görünür; ardından formül, arkasındaki geometri, çözümlü örnekler ve cevabınızı doğrulama yolları gelir.",
            },
            {
              "kind": "p",
              "text": "Kılavuz, izdüşümlerle ilk kez tanışan ortaokul öğrencilerine, lise geometri sınıflarına ve ödev kontrolü yapan herkese uygundur. Her formül gerçek sayılarla işlenir, böylece sembolleri çözmek için duraksamadan her adımı takip edebilirsiniz.",
            },
          ],
          "h2": "Dik Üçgen Hipotenüs İzdüşümlerden Hesaplayıcı",
        },
        "sec-manual": {
          "blocks": [
            {
              "kind": "p",
              "text": "Manuel hesaplama, [[c = p + q]] formülünde tek bir yerine koymadır. [[p = 3.6]] cm ve [[q = 6.4]] cm alın.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Değerleri yerine koyun: [[c = 3.6 + 6.4]]. Toplayın: [[c = 10]] cm.",
            },
            {
              "kind": "p",
              "text": "Elle toplarken ondalık virgülleri hizalayın: 3.6 ile 6.4'ün toplamı 10.0 eder ve sondaki sıfır, temiz bir [[c = 10]] cm için atılabilir. Birimi cevaba bağlı tutun; birimsiz bir sayı tam bir uzunluk değildir.",
            },
            {
              "kind": "p",
              "text": "Pisagor hesabına gerek yoktur, çünkü her iki izdüşüm uzunluğu da zaten bilinmektedir. Kontrol için toplamın mantıklı olduğunu doğrulayın: 3.6 ile 6.4'ün toplamı açıkça 10'dur ve hipotenüs her iki izdüşümden de uzun olmalıdır.",
            },
          ],
          "h2": "Hipotenüs İzdüşümlerden Manuel Olarak Nasıl Hesaplanır",
        },
        "sec-understanding": {
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenüs, dik açının karşısındaki kenardır ve dejenere olmayan her dik üçgende en uzun kenardır. Dik açı köşesinden inen yükseklik ona dik olarak indiğinde, hipotenüs aynı düz çizgi üzerinde uç uca duran iki daha kısa parçaya bölünür.",
            },
            {
              "kind": "p",
              "text": "Her iki parça da bu tek kenar üzerinde yer aldığından, bir cetvelin iki bitişik parçası gibi davranır: bunları bir araya getirmek, bütün kenarı üst üste binme veya boşluk olmadan tam olarak yeniden kurar. Bu yüzden izdüşümler her zaman hipotenüse toplanır.",
            },
            {
              "kind": "p",
              "text": "Bu etiketler aşağıdaki ana şemayla eşleşir. A ve B köşeleri dar açılı köşelerdir, C dik açı köşesidir ve D, CD yüksekliğinin AB hipotenüsü üzerindeki ayağıdır; [[AD = p]] ve [[DB = q]] olur.",
            },
          ],
          "h2": "Hipotenüsü ve İki Parçasını Anlamak",
          "table": {
            "headers": [
              "Sembol",
              "Anlam",
            ],
            "rows": [
              [
                "a",
                "İlk dik kenar",
              ],
              [
                "b",
                "İkinci dik kenar",
              ],
              [
                "c",
                "Tam hipotenüs",
              ],
              [
                "p",
                "İlk hipotenüs izdüşümü",
              ],
              [
                "q",
                "İkinci hipotenüs izdüşümü",
              ],
              [
                "h",
                "Hipotenüse inen yükseklik",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bir dik üçgenle başlayın ve dik açı köşesinden hipotenüse dik olacak şekilde yüksekliği çizin. Yükseklik, ayak adı verilen tek bir noktada hipotenüse dokunur ve bu nokta hipotenüsü iki bitişik parçaya böler. Bu iki parça hipotenüs izdüşümleridir: dik açısı C'de ve yüksekliği CD olan ABC üçgeninde [[p = AD]] ve [[q = DB]]. <a href=\"/right-triangle-projection-calculator/\">izdüşüm hesaplayıcı</a> her parçayı ayrı ayrı ele alır.",
            },
            {
              "kind": "p",
              "text": "İzdüşüm bir kenar değildir. a ve b kenarları dik açıyı oluşturan iki kenardır; p ve q izdüşümleri ise hipotenüsün kendisi boyunca düz uzanır. Bunları karıştırmak en yaygın etiketleme hatasıdır, bu yüzden her zaman şunu sorun: bu uzunluk hipotenüs üzerinde mi, yoksa dik açının çevresindeki kenarlardan biri mi?",
            },
            {
              "kind": "p",
              "text": "İşte yeni başlayanlara uygun bir örnek. Yükseklik bir hipotenüsü 4 cm'lik ve 9 cm'lik bir parçaya bölerse, [[p = 4]] cm ve [[q = 9]] cm olur ve tam hipotenüs [[c = 4 + 9 = 13]] cm'dir. [[c = p + q]] formülü, bütün kenarı iki parçasından yeniden kurar.",
            },
            {
              "kind": "p",
              "text": "Hızlı bir etiketleme alışkanlığı çoğu hatayı önler: dik açı köşesi C'den başlayın, hipotenüse yüksekliği çizin ve ayağı D olarak işaretleyin. A'ya dokunan parça p, B'ye dokunan parça q'dur. Bu iki etiket belirlendikten sonra kılavuzun geri kalanı doğrudan uygulanır.",
            },
          ],
          "h2": "Dik Üçgende Hipotenüs İzdüşümleri Nedir?",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Aynı izdüşümler, geometrik ortalama teoremi aracılığıyla yüksekliği de verir: [[h^2 = pq]], yani [[h = \\sqrt{pq}]]. [[p = 9]] cm ve [[q = 16]] cm ile [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "İki formülü karşılaştırın: [[c = p + q]] izdüşümleri toplar, [[h = \\sqrt{pq}]] ise bunların geometrik ortalamasını alır. Farklı soruları yanıtlarlar. Hipotenüs tam kenar uzunluğudur; yükseklik ise dik açıdan o kenara inen dik yüksekliktir.",
            },
            {
              "kind": "p",
              "text": "Yükseklik problemleri için, [[h = \\sqrt{pq}]] etrafında kurulan <a href=\"/right-triangle-altitude-from-projections-calculator/\">izdüşümlerden yükseklik hesaplayıcıyı</a> kullanın. İki sonucu birbirinden ayırt edin: bu üçgende hipotenüs 25 cm iken yükseklik yalnızca 12 cm'dir.",
            },
            {
              "kind": "p",
              "text": "Burada yerleşik bir tutarlılık kontrolü geçerlidir: yükseklik her zaman hipotenüsten kısadır. Çözümlü örnekte 12 cm, 25 cm'nin oldukça altındadır. Yükseklik hipotenüsü aşarsa hangi formülü kullandığınızı yeniden kontrol edin.",
            },
          ],
          "h2": "Hipotenüs İzdüşümlerinin Yükseklikle İlişkisi",
          "image": {
            "alt": "Hipotenüs üzerinde 9 ve 16 izdüşümlü, hipotenüsü 25 ve hipotenüse dik çizilmiş 12 yüksekliğine sahip dik üçgen",
            "caption": "Aynı izdüşümler, iki formül: c = 9 + 16 = 25, h = sqrt(9 x 16) = 12.",
            "src": "hypotenuse-altitude-p9q16.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ana şema, dik açısı C'de olan ABC üçgenini gösterir. AC kenarı a kenarı, BC kenarı b kenarı ve AB kenarı c hipotenüsüdür. CD yüksekliği, C'den AB'ye dik iner ve ona D'de dokunur.",
            },
            {
              "kind": "p",
              "text": "İyi bir okuma sırası C köşesinden başlar: a kenarını A'ya kadar izleyin, b kenarını B'ye geçin, sonra c hipotenüsü boyunca A'dan B'ye ilerleyin. Yüksekliğin ayağı olan D'de duraklayarak p ve q'ya bölünmeyi görün. Şemayı bu şekilde okumak, etiketleri formülle ilişkilendirir.",
            },
            {
              "kind": "p",
              "text": "D noktası AB'yi iki parçaya böler: AD parçası p izdüşümü, DB parçası q izdüşümüdür. Etiketler doğrudan şemanın üzerinde yer alır, böylece p'nin nerede başladığını, q'nun nerede bittiğini ve ikisinin birlikte A'dan B'ye bütün kenarı nasıl kapladığını görebilirsiniz.",
            },
            {
              "kind": "p",
              "text": "C ve D'deki dik açı işaretleri geometriyi doğrular. C'deki işaret AB'yi hipotenüs yapar, D'deki işaret CD'nin yükseklik olduğunu doğrular. Orijinal üçgen artık ACD ve CBD adlı iki küçük dik üçgene bölünmüştür; bunlar kılavuzun ilerleyen bölümlerinde yeniden karşımıza çıkacak.",
            },
          ],
          "h2": "Dik Üçgen Hipotenüs İzdüşümü Şeması Açıklaması",
          "image": {
            "alt": "Dik açısı C'de olan ABC dik üçgeni; CD yüksekliği AB hipotenüsüne dik çizilmiş ve onu p izdüşümü (AD parçası) ile q izdüşümüne (DB parçası) bölüyor, a ve b kenarları etiketli",
            "caption": "CD yüksekliği AB hipotenüsünü p ve q izdüşümlerine böler.",
            "src": "hypotenuse-projections-main.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Her örnek verilen değerleri, yerine koymayı ve nihai cevabı belirtir. Açıklama kısa tutulur, böylece aritmetik görünür kalır.",
            },
            {
              "kind": "p",
              "text": "Tüm örnekler, verilen değerlerden cevaba kadar birimleri tutarlı tutar. Birimler farklı olduğunda örnek önce dönüştürür ve bunu açıkça belirtir, böylece bu alışkanlığı kendi çalışmanıza kopyalayabilirsiniz.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: Tam Sayılar",
            },
            {
              "kind": "p",
              "text": "[[p = 4]] cm ve [[q = 9]] cm verildiğinde, [[c = p + q]] formülü [[c = 4 + 9]] verir, yani [[c = 13]] cm. Burada iki tam sayı izdüşüm tam sayı bir hipotenüs üretir, ancak bu genel olarak garanti değildir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Eşit İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p = 5]] cm ve [[q = 5]] cm verildiğinde, [[c = 5 + 5 = 10]] cm. Eşit izdüşümler, yüksekliğin hipotenüsün orta noktasına indiği anlamına gelir; bu, iki kenar eşit olduğunda, yani ikizkenar dik üçgende olur. Kenarlar eşit olduğundan yükseklik aynı zamanda kenarortaydır ve bu yüzden hipotenüsü ikiye böler.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Ondalıklı İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p = 3.6]] m ve [[q = 6.4]] m verildiğinde, [[c = 3.6 + 6.4 = 10]] m. Ondalık virgülleri hizalayıp normal şekilde toplayın; birim baştan sona metre olarak kalır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Eşit Olmayan İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p = 2]] cm ve [[q = 18]] cm verildiğinde, [[c = 2 + 18 = 20]] cm. İzdüşümlerin boyutça yakın olması gerekmez; toplam yine de tam hipotenüsü yeniden kurar.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Daha Büyük Ölçümler",
            },
            {
              "kind": "p",
              "text": "[[p = 125]] mm ve [[q = 275]] mm verildiğinde, [[c = 125 + 275 = 400]] mm. Büyük değerler yöntem hakkında hiçbir şeyi değiştirmez.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Karışık Birimler",
            },
            {
              "kind": "p",
              "text": "[[p = 40]] mm ve [[q = 9]] cm verildiğinde, önce dönüştürün: 40 mm, 4 cm'ye eşittir. Sonra [[c = 4 + 9 = 13]] cm. Dönüştürmeden toplamak anlamsız bir 49 verir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Kesirli Ölçümler",
            },
            {
              "kind": "p",
              "text": "[[p = \\frac{1}{2}]] ft ve [[q = \\frac{3}{4}]] ft verildiğinde, ikisini de paydası 4 olacak şekilde yazın: [[c = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}]] ft, yani 1.25 ft.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: Eksik İzdüşümü Bulma",
            },
            {
              "kind": "p",
              "text": "[[c = 25]] cm ve [[p = 9]] cm verildiğinde, [[q = c - p]] denklemini çözün: [[q = 25 - 9 = 16]] cm. Bu ters adım, ilişkinin iki yönde de işlediğini gösterir; yine de bu sayfadaki hesaplayıcı, eksik izdüşümü çözmek yerine p ve q'yu toplayarak c'yi bulur.",
            },
          ],
          "h2": "İzdüşümlerden Hipotenüs İçin Çözümlü Örnekler",
        },
        "sec-legs": {
          "blocks": [
            {
              "kind": "p",
              "text": "İzdüşümler, izdüşüm teoremi aracılığıyla kenarları da belirler: [[a^2 = cp]] ve [[b^2 = cq]]. Her kenar, hipotenüs ile ona bitişik izdüşümün geometrik ortalamasıdır; bu, küçük üçgenlerin orijinale benzerliğinden çıkar.",
            },
            {
              "kind": "p",
              "text": "Karekök almak [[a = \\sqrt{cp}]] ve [[b = \\sqrt{cq}]] verir. [[p = 9]] cm ve [[q = 16]] cm ile önce [[c = 9 + 16 = 25]] cm bulunur. Sonra [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm ve [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm.",
            },
            {
              "kind": "p",
              "text": "Dolayısıyla hipotenüs, kalan kenarların kilidini açan anahtardır: c bilindiğinde her kenar kendi izdüşümünden bulunur. <a href=\"/right-triangle-side-calculator/\">kenar hesaplayıcı</a> benzer eksik kenar problemlerini doğrudan çözer.",
            },
            {
              "kind": "p",
              "text": "Eşleşme rastgele değildir: a kenarı, bütüne benzer küçük ACD üçgeninde p izdüşümünün yanında yer alır; bu yüzden a, c ve p ile ilişkilidir, b ise c ve q ile. Hangi kenarın hangi izdüşümle eşleştiğini hatırlamak, karekökleri doğru parçalarda tutar.",
            },
          ],
          "h2": "Hipotenüs İzdüşümleri ile Üçgen Kenarları Arasındaki İlişki",
          "image": {
            "alt": "9 ve 16 izdüşümlü, 25 hipotenüslü dik üçgen; a kenarının a kare eşittir 25 çarpı 9'dan 15'e, b kenarının b kare eşittir 25 çarpı 16'dan 20'ye eşit olduğu gösteriliyor",
            "caption": "a kenarı = sqrt(25 x 9) = 15; b kenarı = sqrt(25 x 16) = 20.",
            "src": "hypotenuse-projection-theorem-legs.svg",
          },
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "Neden, doğru parçası toplama postülasıdır: D noktası A ile B arasında AB parçası üzerindeyse, AB uzunluğu AD ile DB'nin toplamına eşittir. Burada D, yüksekliğin ayağıdır ve A ile B hipotenüsün uç noktalarıdır, yani [[AB = AD + DB]].",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Standart sembollerin yerine konması formülü doğrudan verir. Dejenere olmayan bir dik üçgende yüksekliğin ayağı her zaman uç noktaların arasına düşer, bu yüzden postüla her zaman uygulanır. Bu adım için trigonometriye gerek yoktur.",
            },
            {
              "kind": "p",
              "text": "Üçgen benzerliği, [[a^2 = cp]] gibi daha derin izdüşüm ilişkilerinin arkasındaki araçtır, ancak [[c = p + q]] için basit parça toplamı yeterlidir. Aşağıdaki şema aynı fikri tek bir düz çizgi üzerinde gösterir.",
            },
            {
              "kind": "p",
              "text": "Vurgulanması gereken bir ayrıntı var: gerçek bir dik üçgende D her zaman A ile B'nin kesinlikle arasına düşer, asla bir uç noktada veya parçanın dışında olmaz. Bu yerleşim, doğru parçası toplama postülasını uygulanabilir kılan şeydir ve sıfır veya negatif izdüşümlerin reddedilmesinin nedenidir.",
            },
          ],
          "h2": "Hipotenüs İzdüşümlerinin Toplamına Neden Eşittir?",
          "image": {
            "alt": "AB düz parçası, D noktasında AD parçası (p etiketli) ile DB parçası (q etiketli) olarak bölünmüş; bütün parçanın p artı q'ya eşit olduğu gösteriliyor",
            "caption": "A ile B arasındaki bir nokta parçayı böler: AB = AD + DB.",
            "src": "hypotenuse-segment-addition.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sınıflarda ve ödevlerde izdüşüm problemleri, öğrencilerin bir şemayı etiketleyip Pisagor teoremine uzanmak yerine [[c = p + q]] uygulayıp uygulayamadığını sınar. Teknik çizim alıştırmaları, bir planda bir yüksekliğin ölçülen bir hipotenüsü böldüğünde aynı beceriyi kullanır.",
            },
            {
              "kind": "p",
              "text": "Arazi ölçümü modelleri ve mimari geometri bazen bir dik üçgen yerleşimini, iki işaretli parçanın toplamının tam açıklığı verdiği, dikey bir doğruyla kesilmiş bir hipotenüse indirger. Kağıt üzerindeki geometrik çizimler, pergel genişliğini ayarlamak için toplamı kullanır.",
            },
            {
              "kind": "p",
              "text": "Koşul her zaman aynıdır: p ve q, gerçek bir dik üçgende tek bir hipotenüsün bitişik parçaları olmalıdır. Keyfi uzaklıklar asla uygun değildir, toplama ne kadar cazip görünürse görünsün.",
            },
            {
              "kind": "p",
              "text": "Öğretmenler izdüşüm kurulumunu bir köprü dersi olarak kullanabilir: önceki sınıflardan parça toplamını tekrar ederken geometri dersinin ilerleyen bölümlerinde gelecek benzerlik teoremlerine de ön hazırlık yapar.",
            },
          ],
          "h2": "Hipotenüs İzdüşümü Hesaplamalarının Pratik Uygulamaları",
        },
        "sec-compare": {
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenüse iki yol çıkar. Yüksekliğin parçaları biliniyorsa parça toplamını kullanın: [[c = p + q]]. Bunun yerine dik açının çevresindeki iki kenar biliniyorsa Pisagor teoremini kullanın: [[c = \\sqrt{a^2 + b^2}]].",
            },
            {
              "kind": "p",
              "text": "Problem yüksekliğin ayağını ve iki parçasını veriyorsa izdüşüm formülünü seçin; iki dik kenarı veriyorsa kenar formülünü seçin. Tek tutarlı bir üçgende her iki yol da aynı c'yi üretir.",
            },
            {
              "kind": "p",
              "text": "Hızlı bir çapraz kontrol iki formülü birbirine bağlar. [[p = 9]] ve [[q = 16]] izdüşümlerinden [[c = 25]]. Kenarlar [[a = 15]] ve [[b = 20]]'dir ve [[\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25]]. Her iki yol da aynı hipotenüste buluşur.",
            },
          ],
          "h2": "İzdüşümlerden Hipotenüs ve Kenarlardan Hipotenüs",
          "table": {
            "headers": [
              "Bilinen Değerler",
              "Formül",
              "Yöntem",
            ],
            "rows": [
              [
                "p ve q izdüşümleri",
                "c = p + q",
                "Parça toplama",
              ],
              [
                "a ve b kenarları",
                "c = √(a² + b²)",
                "Pisagor teoremi",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Aşağıdaki her hatanın ardından düzeltmesi gelir.",
            },
            {
              "kind": "steps",
              "steps": [
                "p ile q'yu toplamak yerine çarpmak. [[p = 4]] ve [[q = 9]] ile çarpım 36 burada anlamsızdır; hipotenüs [[4 + 9 = 13]]'tür.",
                "İzdüşümleri kenarlarla karıştırmak. Kenarlar dik açıda buluşur; izdüşümler hipotenüs boyunca uzanır. Hesaplamadan önce her uzunluğu etiketleyin.",
                "Yüksekliği izdüşüm olarak kullanmak. h yüksekliği hipotenüse diktir, onun bir parçası değildir; bu yüzden [[c = p + q]]'da asla yeri yoktur.",
                "Ölçü birimlerini karıştırmak. [[p = 40]] mm ve [[q = 9]] cm, toplamadan önce 4 cm ve 9 cm olmalıdır; ham toplam 49'un geçerli bir birimi yoktur.",
                "Negatif uzunluk girmek. İzdüşümler tanım gereği pozitiftir, bu yüzden negatif bir giriş veri hatasına işaret eder.",
                "Hipotenüsü bir kenarla karıştırmak. Hipotenüs dik açının karşısında yer alır ve en uzun kenardır; bir kenar asla onun rolünü üstlenemez.",
                "Bir parçayı unutmak. Yalnızca p'yi toplamak kısmi bir uzunluk verir; hipotenüs her iki parçayı da ister.",
                "İlgisiz ölçümler kullanmak. İki sayı, problemden alınmış keyfi uzunluklar değil, aynı hipotenüsün bitişik parçaları olmalıdır.",
                "p ve q'ya Pisagor teoremi uygulamak. [[\\sqrt{p^2 + q^2}]] değeri hipotenüs değildir, çünkü p ve q dik değil, doğrusal konumludur.",
                "[[c = p + q]] ile [[h = \\sqrt{pq}]]'yi karıştırmak. Toplama hipotenüsü bulur; geometrik ortalama yüksekliği bulur. Formülleri değiştirmek cevapları değiştirir.",
              ],
            },
            {
              "kind": "p",
              "text": "Kendinizi hata yaparken yakalarsanız durun ve yeniden hesaplamadan önce şemayı tekrar etiketleyin. p ve q hipotenüs üzerinde açıkça işaretlenip geri kalan her şey elendikten sonra yukarıdaki hataların çoğu ortadan kalkar.",
            },
          ],
          "h2": "Hipotenüs İzdüşümlerden Hesaplanırken Yapılan Yaygın Hatalar",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bu altı problemi deneyin, ardından aşağıdaki çözümlü cevapları kontrol edin. Değerlerin hiçbiri çözümlü örneklerdekiyle aynı değildir.",
            },
            {
              "kind": "p",
              "text": "Her problemi cevabını okumadan önce kağıt üzerinde çalışın. Gerekirse cevapları elinizle kapatın; çok adımlı problem, izdüşüm teoremlerinin oturup oturmadığının en iyi testidir.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: Tam Sayılar",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin yüksekliği, hipotenüsü [[p = 12]] cm ve [[q = 4]] cm olarak böler. c'yi bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Ondalık Sayılar",
            },
            {
              "kind": "p",
              "text": "[[p = 2.5]] m ve [[q = 7.5]] m verildiğinde hipotenüsü bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Eşit İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p = 7]] in ve [[q = 7]] in verildiğinde c'yi bulun. Bu nasıl bir üçgendir?",
            },
            {
              "kind": "h3",
              "text": "Problem 4: Birim Dönüşümü",
            },
            {
              "kind": "p",
              "text": "[[p = 200]] mm ve [[q = 35]] cm verildiğinde hipotenüsü santimetre cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Eksik İzdüşüm",
            },
            {
              "kind": "p",
              "text": "Bir hipotenüs [[c = 50]] cm ölçülür ve bir izdüşüm [[q = 32]] cm'dir. p'yi bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Kenarlarla Çok Adımlı",
            },
            {
              "kind": "p",
              "text": "[[p = 16]] cm ve [[q = 9]] cm verildiğinde c'yi bulun, ardından a ve b kenarlarını bulun.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Problemi Cevapları",
            },
            {
              "kind": "p",
              "text": "Cevap 1: [[c = 12 + 4 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 2: [[c = 2.5 + 7.5 = 10]] m.",
            },
            {
              "kind": "p",
              "text": "Cevap 3: [[c = 7 + 7 = 14]] in. Eşit izdüşümler ikizkenar bir dik üçgen verir.",
            },
            {
              "kind": "p",
              "text": "Cevap 4: 200 mm'yi 20 cm'ye dönüştürün, ardından [[c = 20 + 35 = 55]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 5: [[p = c - q = 50 - 32 = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 6: [[c = 16 + 9 = 25]] cm. Sonra [[a = \\sqrt{25 \\times 16} = 20]] cm ve [[b = \\sqrt{25 \\times 9} = 15]] cm.",
            },
          ],
          "h2": "Cevaplı Alıştırma Soruları",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "İzdüşüm ilişkileri Pisagor teoremiyle tam olarak uyuşur. İzdüşüm teoreminden başlayın: [[a^2 = cp]] ve [[b^2 = cq]]. İki denklemi toplamak [[a^2 + b^2 = cp + cq]] verir.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c(p + q)]]]",
            },
            {
              "kind": "p",
              "text": "c'yi parantez dışına almak geçerlidir, çünkü her iki terimi de çarpar. [[p + q = c]] olduğundan yerine koyma şunu verir:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "9-16-25 üçgeniyle yapılan sayısal kontrol cebiri doğrular: [[a^2 + b^2 = 225 + 400 = 625]] ve [[c^2 = 25^2 = 625]]. Her iki taraf da uyuşur; çarpanlarına ayrılmış ispatın öngördüğü de tam olarak budur.",
            },
            {
              "kind": "p",
              "text": "İspat zarifçe kapanır: basit parça toplamı, Pisagor ilişkisinin tam kalbinde yer alır. Aşağıdaki şema, [[a^2 = cp]] ve [[b^2 = cq]]'nun nereden geldiğini gösterir: her küçük üçgen açılarını orijinalle paylaşır, bu yüzden karşılıklı kenarlar orantılı kalır.",
            },
          ],
          "h2": "Hipotenüs İzdüşümleri ve Pisagor Teoremi",
          "image": {
            "alt": "İki küçük benzer ACD ve CBD üçgeninin yanında, eşleşen açıları ve karşılıklı kenarları etiketli orijinal ABC dik üçgeni",
            "caption": "ACD ve CBD üçgenleri ABC'ye benzerdir; bu, a kare eşittir cp ve b kare eşittir cq verir.",
            "src": "hypotenuse-similar-triangles.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Aşağıdaki her özellik doğrudan toplamadan çıkar, bu da onları güvenilir kılar.",
            },
            {
              "items": [
                "Eşit izdüşümler: [[p = q]] ise [[c = 2p]]. Yükseklik orta noktaya iner, iki kenar eşittir ve sonuç ikizkenar bir dik üçgendir.",
                "Eşit olmayan izdüşümler: her pozitif çift geçerlidir. Yükseklik uzun izdüşüme doğru eğilir ve yakındaki kenar kısa olandır.",
                "Çok küçük izdüşümler: formül yine de geçerlidir; örneğin [[p = 0.5]] mm ve [[q = 1.5]] mm, [[c = 2]] mm verir.",
                "Çok büyük izdüşümler: üst sınır yoktur; örneğin [[p = 1200]] m ve [[q = 800]] m, [[c = 2000]] m verir.",
                "Ölçekleme: her iki izdüşümü de ikiye katlamak hipotenüsü ikiye katlar, çünkü [[2p + 2q = 2(p + q)]].",
                "p ve q'nun yerini değiştirmek: [[p + q = q + p]], yani hipotenüs değişmez ve yalnızca AD ile DB etiketleri yer değiştirir.",
                "Sıfır uzunluklu izdüşümler: [[p = 0]], yüksekliğin bir kenarla çakıştığı anlamına gelir; bu durumda üçgen dejenere olur ve hesaplayıcı bunu kabul etmez.",
                "Negatif izdüşümler: uzunluklar negatif olamaz, bu yüzden negatif bir giriş her zaman bir veri hatasıdır.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Şema, aynı hipotenüse ancak farklı izdüşüm bölünmelerine sahip iki üçgeni karşılaştırır; toplam sabit kalırken şeklin nasıl değiştiğini gösterir.",
            },
          ],
          "h2": "Özel Durumlar ve Önemli Özellikler",
          "image": {
            "alt": "Aynı 10 hipotenüs uzunluğuna sahip iki dik üçgen: biri 5 ve 5 eşit izdüşümlü, diğeri 2 ve 8 izdüşümlü",
            "caption": "Aynı hipotenüs, farklı şekiller: p = q = 5 karşısında p = 2, q = 8.",
            "src": "hypotenuse-equal-vs-unequal.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Üç hızlı kontrol, neredeyse her hesaplama hatasını yakalar. İlki doğrudan hesaplama; diğer ikisi onu farklı açılardan doğrular.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 1: Parça Toplamını Yeniden Hesaplayın",
            },
            {
              "kind": "p",
              "text": "p ve q'yu tekrar, yavaşça toplayın. [[p = 4]] ve [[q = 9]] ile [[4 + 9 = 13]] olduğunu doğrulayın. Buradaki dikkatsiz bir hata, yanlış cevabın en yaygın kaynağıdır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 2: Kenarların Pisagor'a Uyduğunu Doğrulayın",
            },
            {
              "kind": "p",
              "text": "Kenarları izdüşümlerden hesaplayın: [[a = \\sqrt{cp}]] ve [[b = \\sqrt{cq}]], ardından [[a^2 + b^2 = c^2]] olduğunu doğrulayın. [[p = 9]], [[q = 16]], [[c = 25]] için: [[a = 15]], [[b = 20]] ve [[225 + 400 = 625]]. Bu geometrik kontrol, hesaplayıcının toplamasının ötesine geçer.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 3: Şemayı Sağduyuyla Kontrol Edin",
            },
            {
              "kind": "p",
              "text": "Her iki izdüşümün de pozitif olduğunu, ikisinin de aynı hipotenüs üzerinde yer aldığını ve c'nin her parçadan uzun olduğunu doğrulayın. Sonuç p veya q'dan küçükse bir değer yanlış alana girilmiştir.",
            },
          ],
          "h2": "Hipotenüs Hesabınız Nasıl Doğrulanır",
        },
      },
      "faqHeading": "Sık Sorulan Sorular",
      "faqs": [
        {
          "answer": "Formül [[c = p + q]] şeklindedir; burada p ve q, hipotenüsün iki izdüşüm parçasıdır. Tam hipotenüsü bulmak için iki uzunluğu toplayın. Örneğin, [[p = 4]] cm ve [[q = 9]] cm, [[c = 13]] cm verir.",
          "question": "İzdüşümlerden hipotenüs formülü nedir?",
        },
        {
          "answer": "Bunlar, dik açıdan inen yükseklik hipotenüsle buluştuğunda oluşan iki parçadır. Yüksekliği CD olan ABC üçgeninde [[p = AD]] ve [[q = DB]] olarak etiketlenir; hipotenüs boyunca uç uca uzanır ve onu tamamen kaplar.",
          "question": "Hipotenüs izdüşümleri nedir?",
        },
        {
          "answer": "Parça toplama yüzünden: yüksekliğin ayağı hipotenüsün uç noktalarının arasında yer alır, bu yüzden bütün kenar parçalarının toplamına eşittir. Standart sembollerin yerine konması [[AB = AD + DB]]'yi [[c = p + q]]'ya dönüştürür. Trigonometri gerekmez.",
          "question": "p ve q neden toplanır?",
        },
        {
          "answer": "Hayır. a ve b kenarları dik açıyı oluşturur; p ve q izdüşümleri ise hipotenüs boyunca uzanır. Bunları karıştırmak en yaygın etiketleme hatasıdır, bu yüzden hesaplamadan önce her uzunluğun şemadaki konumunu kontrol edin.",
          "question": "İzdüşümler üçgen kenarlarıyla aynı mıdır?",
        },
        {
          "answer": "Evet. Yükseklik nadiren tam orta noktaya isabet eder, bu yüzden p ve q genellikle eşit değildir. Her pozitif çift geçerlidir ve toplam yine de hipotenüsü verir. Üçgen basitçe uzun izdüşüme doğru eğilir.",
          "question": "İzdüşümlerin uzunlukları farklı olabilir mi?",
        },
        {
          "answer": "Formül [[c = 2p]] olur. Yükseklik hipotenüsü ikiye böler, iki kenar eşittir ve üçgen ikizkenar bir dik üçgendir. Geometrik olarak yükseklik tam olarak orta noktaya iner.",
          "question": "p ve q eşit olduğunda ne olur?",
        },
        {
          "answer": "Evet, farklı bir formülle: [[h = \\sqrt{pq}]], izdüşümlerin geometrik ortalaması. <a href=\"/right-triangle-altitude-from-projections-calculator/\">izdüşümlerden yükseklik hesaplayıcı</a> bu hesaplama için yapılmıştır. Bunu, hipotenüsü bulan [[c = p + q]]'dan ayrı tutun.",
          "question": "p ve q ile yükseklik hesaplanabilir mi?",
        },
        {
          "answer": "Evet. Önce [[c = p + q]]'yu bulun, sonra [[a = \\sqrt{cp}]] ve [[b = \\sqrt{cq}]]'yi kullanın. [[p = 9]], [[q = 16]] ve [[c = 25]] için kenarlar 15 ve 20'dir. Bunlar, bu hesaplayıcının ana işlevi yerine eğitimsel uzantılardır.",
          "question": "İzdüşümlerden üçgen kenarları bulunabilir mi?",
        },
        {
          "answer": "Hayır. İzdüşümlerden hipotenüs bulmak yalnızca toplama ister, karekök yoktur. Pisagor teoremi, bunun yerine kenarlar bilindiğinde veya bir sonucu kenarlar üzerinden doğrularken işe yarar.",
          "question": "Bu hesaplama için Pisagor teoremi gerekli mi?",
        },
        {
          "answer": "Toplamadan önce ölçümlerden birini dönüştürerek ikisi de aynı birimi kullansın. Örneğin, [[q = 9]] cm iken [[p = 40]] mm, 4 cm olur ve [[c = 13]] cm verir. Hesaplayıcının birim seçicileri aynı amaca hizmet eder.",
          "question": "p ve q farklı birimlerdeyse ne olur?",
        },
        {
          "answer": "Hayır. İzdüşüm yalnızca hipotenüsün bir parçasıdır, bu yüzden bütünden kısa olmalıdır. Sonucunuz aksini gösteriyorsa bir değer yanlış alana girilmiştir.",
          "question": "Bir izdüşüm hipotenüsten uzun olabilir mi?",
        },
        {
          "answer": "[[c = p + q]]'yu yavaşça yeniden hesaplayın, ardından kenarların [[a^2 + b^2 = c^2]]'yi sağladığını doğrulayın. Ayrıca her iki izdüşümün pozitif olduğunu ve c'nin her birini aştığını kontrol edin. Üç kontrol de bir dakikadan kısa sürer.",
          "question": "Hipotenüs sonucu nasıl doğrulanabilir?",
        },
      ],
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "relatedIntro": "Sonraki aracı bildiğiniz ölçümlere göre seçin. Aşağıdaki her hesaplayıcı, tek tek izdüşüm parçalarından yüksekliğe ve üçgen kenarlarına kadar belirli bir dik üçgen görevini üstlenir.",
      "relatedItems": [
        "Dik Üçgen İzdüşüm Hesaplayıcı",
        "Dik Üçgen İzdüşüm p Hesaplayıcı",
        "Dik Üçgen İzdüşüm q Hesaplayıcı",
        "Dik Üçgen İzdüşümlerden Yükseklik Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
      ],
    },
};
