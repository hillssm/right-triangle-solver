// altitudeFromProjectionsGuideTranslations.btr.ts: Right Triangle Altitude From Projections
// Guide (Page 27 of 45) translation.
export const B6_TR = {
  "tr": {
      "tocHeading": "Bölüm Gezintisi",
      "tocItems": {
        "sec-intro": "İzdüşümlerden Dik Üçgende Yükseklik Hesaplama",
        "sec-altitude": "Dik Üçgende Yükseklik Nedir?",
        "sec-projections": "Dik Üçgende İzdüşümler Nedir?",
        "sec-formula": "İzdüşümlerden Dik Üçgende Yükseklik Formülü",
        "sec-steps": "İzdüşümlerden Yükseklik Adım Adım Nasıl Hesaplanır",
        "sec-diagram": "Dik Üçgen Yükseklik Şeması Açıklaması",
        "sec-proof": "Yükseklik Formülü Neden Doğru? Benzer Üçgenlerle İspat",
        "sec-examples": "İzdüşümlerden Yüksekliğe Çözümlü Örnekler",
        "sec-verify": "Yükseklik Hesabınızı Nasıl Kontrol Edersiniz",
        "sec-relationships": "Yükseklik, Hipotenüs ve Üçgen Kenarları Arasındaki İlişki",
        "sec-geomean": "Geometrik Ortalama Teoremi ve Dik Üçgen Yüksekliği",
        "sec-special": "Özel Durumlar ve Önemli Özellikler",
        "sec-mistakes": "İzdüşümlerden Yükseklik Bulurken Yaygın Hatalar",
        "sec-applications": "Yükseklik Teoreminin Pratik Uygulamaları",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları Keşfedin",
        "sec-faq": "Sıkça Sorulan Sorular",
        "sec-conclusion": "Tek Bir Karekök, Tam Bir Anlayış",
      },
      "sections": {
        "sec-intro": {
          "h2": "İzdüşümlerden Dik Üçgende Yükseklik Hesaplama",
          "blocks": [
            {
              "kind": "p",
              "text": "İki hipotenüs izdüşümünü çarpın, sonra karekökünü alın.",
            },
            {
              "kind": "p",
              "text": "Dik Üçgende İzdüşümlerden Yükseklik Hesaplayıcı, yüksekliğin hipotenüsü kestiği iki izdüşümden, [[p]] ve [[q]] değerlerinden, bir dik üçgenin yüksekliğini bulur. Kenarlara veya açılara gerek yoktur. İzdüşüm [[p]] ve izdüşüm [[q]] değerlerini aynı birimle girin; hesaplayıcı yükseklik [[h]] değerini yükseklik teoremiyle döndürür:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Formül işe yarar çünkü dik açı köşesinden indirilen yükseklik, birbirine benzer iki küçük üçgen oluşturur. Benzerlik, yüksekliğin iki izdüşümün geometrik ortalaması olmasını zorunlu kılar. Hızlı bir örnek olarak, [[p=9\\text{ cm}]] ve [[q=16\\text{ cm}]] ise, [[144]] elde etmek için [[9]] ile [[16]] değerini çarpın, sonra [[12\\text{ cm}]] yüksekliğini bulmak için karekökünü alın.",
            },
            {
              "kind": "p",
              "text": "İlk hipotenüs parçasını İzdüşüm [[p]] alanına, ikinciyi İzdüşüm [[q]] alanına yazın; ikisi de aynı birimde olsun. Yüksekliği görmek için Hesapla'ya basın; Sıfırla alanları yeni bir problem için temizler. Sonuç, girdilerle aynı birimi taşır. Üçgenin kenarlarını biliyorsanız, bunun yerine <a href=\"/right-triangle-altitude-calculator/\">yükseklik hesaplayıcı</a> aracını deneyin.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Dik Üçgende Yükseklik Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dik üçgende yükseklik, dik açı köşesinden hipotenüse çizilen dikey parçadır. Uzunluğu, bu köşeden hipotenüse olan en kısa mesafeyi ölçer, çünkü dikme her zaman bir noktadan bir doğruya giden en kısa yoldur.",
            },
            {
              "kind": "p",
              "text": "Yüksekliği çizin; hipotenüs üzerinde yükseklik ayağı adı verilen ve genellikle D ile gösterilen bir noktaya iner. D noktasından yükseklik, dik açı köşesi C ile buluşmak için tam 90 derece yükselir. Bu dik buluşma, CD'yi sıradan bir parça değil, yükseklik yapan şeydir.",
            },
            {
              "kind": "p",
              "text": "Yeni başlayanlar yüksekliği bazen kenarlardan biriyle karıştırır. AC ve BC kenarları dik açıda buluşur ve üçgenin dış kenarlarını oluşturur. CD yüksekliği ise üçgenin içinden, C köşesinden AB kenarına uzanır. Kendine ait [[h]] uzunluğuyla üçüncü ve farklı bir parçadır; yükseklik gerçekten çizilmeden var olmaz.",
            },
            {
              "kind": "p",
              "text": "Hipotenüs taban olarak kullanılabilir, çünkü eşleşen yükseklik çizildikten sonra her kenar taban olabilir; bu da alanın, hipotenüs çarpı bu yükseklik çarpı bir bölü iki olarak yazılmasını sağlar. Yüksekliğin çizilmesi ayrıca üçgeni, bu sayfadaki her formülün arkasındaki benzer üçgen ilişkilerini taşıyan ACD ve CBD adlı iki küçük dik üçgene böler.",
            },
          ],
        },
        "sec-projections": {
          "h2": "Dik Üçgende İzdüşümler Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "CD yüksekliği AB hipotenüsüyle buluştuğunda, D ayağı AB'yi iki küçük parçaya böler: [[p]] olarak adlandırılan AD ve [[q]] olarak adlandırılan DB. Bu iki parça, kenarların hipotenüs üzerindeki izdüşümleridir. Her biri, ışık yükseklik boyunca dik olarak düştüğünde bir kenarın hipotenüs üzerine düşürdüğü gölgedir.",
            },
            {
              "kind": "p",
              "text": "İzdüşüm [[p]] AC kenarının yanında, izdüşüm [[q]] ise BC kenarının yanında yer alır. Hipotenüsün iki parçası oldukları için toplamları tam olarak şuna eşittir:",
            },
            {
              "kind": "p",
              "text": "[[[p+q=c]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[c]] tam hipotenüstür. Bu toplama ilişkisi cevapları kontrol etmeye ve hipotenüs ile bir izdüşüm bilindiğinde eksik izdüşümü bulmaya yardımcı olur. Ters hesaplamaya, yani kenar uzunluklarından izdüşüm bulmaya ihtiyacınız varsa, <a href=\"/right-triangle-projection-calculator/\">izdüşüm hesaplayıcı</a> bu yönü halleder.",
            },
            {
              "kind": "p",
              "text": "Her iki izdüşüm de pozitif uzunluk olmalıdır. Sıfır veya negatif bir değer gerçek bir üçgen değil, yalnızca yozlaşmış bir şekil tanımlar. İzdüşümler kenarların kendisi de değildir: AC ve BC kenarları yanlara eğilirken, [[p]] ve [[q]] hipotenüs boyunca düz uzanır. Bunları karıştırmak öğrencilerin yaptığı en yaygın hatalardan biridir.",
            },
          ],
          "table": {
            "headers": [
              "Ölçüm",
              "Anlam",
            ],
            "rows": [
              [
                "[[p]]",
                "İlk hipotenüs parçası",
              ],
              [
                "[[q]]",
                "İkinci hipotenüs parçası",
              ],
              [
                "[[h]]",
                "Dik yükseklik",
              ],
              [
                "[[c]]",
                "Tam hipotenüs",
              ],
              [
                "[[a]]",
                "Birinci üçgen kenarı",
              ],
              [
                "[[b]]",
                "İkinci üçgen kenarı",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "İzdüşümlerden Dik Üçgende Yükseklik Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik teoremi şunu söyler:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Her iki tarafın da pozitif karekökünü almak, çalışan formülü verir:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Her sembolün sabit bir anlamı vardır. [[h]] harfi hipotenüse inen yüksekliği, yani aradığınız büyüklüğü gösterir. [[p]] ve [[q]] harfleri iki hipotenüs izdüşümünü, yani girdiğiniz büyüklükleri gösterir. Çarpma izdüşümleri birleştirir, karekök ise bu çarpımı geri alarak bir uzunluk döndürür.",
            },
            {
              "kind": "p",
              "text": "Çarpma vardır çünkü iki küçük üçgen arasındaki benzerlik [[\\frac{h}{p}=\\frac{q}{h}]] orantısını üretir. Bu orantının içler dışlar çarpımı [[h^2=p\\times q]] verir. Karekök vardır çünkü [[h]] bir uzunluktur ve [[h^2]] ifadesinin yalnızca pozitif kökü gerçek bir mesafeyi adlandırır.",
            },
            {
              "kind": "p",
              "text": "Birimler dikkat ister. [[p]] ve [[q]] ikisi de santimetreyle ölçülürse, çarpımları santimetrekarede yaşar; bu, ara adım niteliğindeki alan benzeri değer için doğrudur. Karekök almak santimetrekareyi nihai yükseklik için sade santimetreye çevirir. Bu yüzden iki girdi aynı birimi paylaşmalıdır: birimleri karıştırmak çarpımı ve cevabı bozar. Formülü hatırlamanın kısa yolu, yüksekliğin iki izdüşümün geometrik ortalaması olduğudur, çünkü iki sayının geometrik ortalaması çarpımlarının kareköküdür.",
            },
          ],
        },
        "sec-steps": {
          "h2": "İzdüşümlerden Yükseklik Adım Adım Nasıl Hesaplanır",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "İki hipotenüs izdüşümünü belirleyin. Yükseklik ayağının hipotenüsü böldüğü parçaları bulun; AC kenarının yanındakini [[p]], BC kenarının yanındakini [[q]] olarak adlandırın.",
                "Her iki ölçümün de aynı birimi kullandığını doğrulayın. Biri milimetre, diğeri santimetre ise formüle dokunmadan önce birini dönüştürün.",
                "[[p]] ile [[q]] değerini çarpın. [[h^2]] çarpımı alan benzeri bir ara değerdir; birimi girdi biriminin karesidir.",
                "Çarpımın pozitif karekökünü alın. Negatif kök atılır, çünkü bir uzunluk negatif olamaz.",
                "Nihai cevabı birimiyle birlikte yazın. Yalın bir sayı, özellikle daha uzun bir hesaba girdiğinde, sonradan hataya davetiye çıkarır.",
                "Cevabın mantıklı olduğunu kontrol edin. Yükseklik her zaman iki izdüşümün arasında kalır ve hipotenüsün yarısını asla aşamaz.",
              ],
            },
            {
              "kind": "p",
              "text": "İşte yöntemin tam bir örneğe uygulanışı. Diyelim ki [[p=4\\text{ cm}]] ve [[q=9\\text{ cm}]]. Önce çarpın: [[4\\times 9=36]], yani [[h^2=36\\text{ cm}^2]]. Sonra pozitif karekökü alın:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Yükseklik [[6\\text{ cm}]] olur. Bir sağlamlık kontrolü olarak, [[6]] değeri izdüşümler [[4]] ve [[9]] arasındadır; bu da bu kılavuzun ilerleyen bölümünde anlatılan geometrik ortalama davranışıyla uyumludur.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Dik Üçgen Yükseklik Şeması Açıklaması",
          "blocks": [
            {
              "kind": "p",
              "text": "ABC üçgeninin dik açısı C'dedir. C'den CD yüksekliği hipotenüs AB'ye dik olarak iner ve onu D ayağında keser. AD parçası [[p]], DB parçası [[q]], CD parçası [[h]] olarak etiketlenir; AB hipotenüsü [[c]], AC ve BC kenarları ise [[a]] ve [[b]] olur.",
            },
            {
              "kind": "p",
              "text": "İki küçük kare iki dik açıyı işaretler: biri asıl üçgenin içinde C'de, diğeri yüksekliğin hipotenüsle buluştuğu D'de. CD yüksekliği, üçgenin dış çerçevesini oluşturan iki kenardan görsel olarak farklı, temiz bir iç parça olarak görünür.",
            },
            {
              "kind": "p",
              "text": "Yükseklik ABC'yi, birbirine ve asıl üçgene benzer iki küçük dik üçgene, ACD ve CBD'ye böler. Ders kitabı sorularında izdüşümler genellikle hipotenüsün iki parçası olarak ya da kısaca yükseklik ayağının iki yanındaki sayılar olarak anlatılır. Hesap yapmadan önce onları [[p]] ve [[q]] olarak etiketleyin.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "C'de dik açılı ABC dik üçgeni, AB hipotenüsüne CD yüksekliği, izdüşümler AD = p ve DB = q, yükseklik CD = h",
            "caption": "CD yüksekliği AB hipotenüsünü [[p]] ve [[q]] izdüşümlerine böler; [[h]], [[p]] ve [[q]] değerlerinin geometrik ortalamasıdır.",
          },
        },
        "sec-proof": {
          "h2": "Yükseklik Formülü Neden Doğru? Benzer Üçgenlerle İspat",
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik teoremi ezberlenecek kör bir kural değildir. Yüksekliğin oluşturduğu iki üçgenin benzerliğinden çıkar.",
            },
            {
              "kind": "p",
              "text": "ACD üçgeninde A ve C'deki dar açılar toplamı 90 derecedir; büyük ABC üçgeninde de A ve B açıları toplamı 90 derecedir. Yani ACD içindeki C açısı B açısına, A açısı ise CBD içindeki C açısına eşittir. İki küçük üçgen üç açıyı da paylaşır; bu da onları benzer yapar.",
            },
            {
              "kind": "p",
              "text": "Benzerlik, eşleşen kenarların aynı oranda kalması demektir. ACD üçgeninde A açısının karşısındaki kenar [[h]] yüksekliğidir. CBD üçgeninde C'deki eşit açının karşısındaki kenar [[q]] izdüşümüdür. Diğer eşleşen çift ise [[p]] izdüşümünün (ACD'deki ikinci dar açının karşısı), [[h]] yüksekliğine (CBD'deki eşleşen açının karşısı) oranıdır. Bunları eşitlemek şu orantıyı verir:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{h}{p}=\\frac{q}{h}]]]",
            },
            {
              "kind": "p",
              "text": "İçler dışlar çarpımı orantıyı şuna dönüştürür:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Her iki tarafın karekökünü almak [[h=\\sqrt{p\\times q}]] verir. [[h^2=p\\times q]] denkleminin iki cebirsel kökü vardır, pozitif ve negatif; ancak uzunluk pozitif bir büyüklüktür, dolayısıyla yalnızca pozitif kök yüksekliği tanımlar.",
            },
          ],
          "image": {
            "src": "altitude-proof.svg",
            "alt": "h/p=q/h oranını göstermek için karşılıklı kenarları etiketlenmiş ACD ve CBD adlı iki küçük dik üçgen",
            "caption": "ACD ve CBD üçgenleri benzerdir, yani [[\\frac{h}{p}=\\frac{q}{h}]] olur ve [[h]] karesi [[p]] ile [[q]] çarpımına eşittir.",
          },
        },
        "sec-examples": {
          "h2": "İzdüşümlerden Yüksekliğe Çözümlü Örnekler",
          "blocks": [
            {
              "kind": "h3",
              "text": "Örnek 1: Basit Tam Sayılar",
            },
            {
              "kind": "p",
              "text": "[[p=4\\text{ cm}]] ve [[q=9\\text{ cm}]] verildiğinde, formülde yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Yükseklik [[6\\text{ cm}]] olur; [[36]] tam kare olduğu için tam sayıdır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Eşit İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p=5\\text{ cm}]] ve [[q=5\\text{ cm}]] verildiğinde:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 5}=\\sqrt{25}=5\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "İzdüşümler eşit olduğunda yükseklik her bir izdüşüme eşit olur: ikizkenar dik üçgen durumu; yükseklik tam olarak hipotenüsün yarısıdır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Ondalıklı İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p=3.6\\text{ m}]] ve [[q=6.4\\text{ m}]] verildiğinde:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{3.6 \\times 6.4}=\\sqrt{23.04}=4.8\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Ondalıklar hiçbir şeyi değiştirmez: [[23.04]] tam karedir, yani yükseklik tam olarak [[4.8\\text{ m}]] olur.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Eşit Olmayan İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p=2\\text{ cm}]] ve [[q=18\\text{ cm}]] verildiğinde:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{2 \\times 18}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Yükseklik [[6\\text{ cm}]] olur, [[10\\text{ cm}]] değil. Ortalama almak aritmetik ortalamayı, yani [[10]] değerini verir; ancak yükseklik geometrik ortalamadır ve eşit olmayan girdilerde daha düşük çıkar.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Tam Kare Olmayan",
            },
            {
              "kind": "p",
              "text": "[[p=5\\text{ cm}]] ve [[q=7\\text{ cm}]] verildiğinde:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 7}=\\sqrt{35}\\text{ cm}\\approx 5.916\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[35]] tam kare değildir, dolayısıyla tam cevap [[\\sqrt{35}\\text{ cm}]] olur. Pratik işler için [[5.916\\text{ cm}]] yaklaşık değerini kullanın, ancak cevap başka hesaplara girecekse tam biçimi koruyun.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Farklı Girdi Birimleri",
            },
            {
              "kind": "p",
              "text": "[[p=40\\text{ mm}]] ve [[q=9\\text{ cm}]] verildiğinde. Birimler farklıdır, önce dönüştürün: [[40\\text{ mm}=4\\text{ cm}]]. Sonra:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Önce dönüştürmek tek güvenli yoldur: [[40]] ve [[9]] değerlerini doğrudan girmek [[\\sqrt{40\\times 9}=\\sqrt{360}]] verir; bu yanlış ve birimsiz bir sayıdır.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Yükseklik Hesabınızı Nasıl Kontrol Edersiniz",
          "blocks": [
            {
              "kind": "h3",
              "text": "Yöntem 1: Geometrik Ortalama Kontrolü",
            },
            {
              "kind": "p",
              "text": "Yüksekliğinizin karesini alın ve izdüşümlerin çarpımıyla karşılaştırın. İki değer eşleşmelidir. [[p=4]] ve [[q=9]] ile [[h=6]] için: [[6^2=36]] ve [[4\\times 9=36]]. Uyum, aritmetiği doğrular.",
            },
            {
              "kind": "h3",
              "text": "Yöntem 2: Hipotenüs ve Kenar İlişkileri",
            },
            {
              "kind": "p",
              "text": "Üçgenin tamamını yeniden kurun ve ikinci bir formülle çapraz kontrol yapın. Önce izdüşümleri toplayın: [[c=4+9=13]]. Sonra kenarları izdüşüm-kenar ilişkileriyle bulun: [[a=\\sqrt{p\\times c}=\\sqrt{52}\\approx 7.211]] ve [[b=\\sqrt{q\\times c}=\\sqrt{117}\\approx 10.817]]. Şimdi [[h=ab/c]] ile doğrulayın: [[(7.211\\times 10.817)/13\\approx 78/13=6]] eşleşir. Kontrol ederken <a href=\"/right-triangle-side-calculator/\">kenar hesaplayıcı</a> kenar aritmetiğini düzenli tutar.",
            },
            {
              "kind": "h3",
              "text": "Yöntem 3: Üçgen Alanı İlişkisi",
            },
            {
              "kind": "p",
              "text": "Aynı üçgenin alanı için iki ifade vardır. Kenarlarla: Alan = [[(a\\times b)/2=(7.211\\times 10.817)/2\\approx 39]]. Hipotenüs ve yükseklikle: Alan = [[(c\\times h)/2=(13\\times 6)/2=39]]. İki ifade de uyuşur; bu da [[h=6]] değerini bağımsız olarak doğrular. <a href=\"/right-triangle-area-from-altitude-calculator/\">yükseklikten alan</a> aracı aynı ilişki üzerine kuruludur.",
            },
          ],
        },
        "sec-relationships": {
          "h2": "Yükseklik, Hipotenüs ve Üçgen Kenarları Arasındaki İlişki",
          "blocks": [
            {
              "kind": "p",
              "text": "Beş formül, altı etiketli parçayı birbirine bağlar. Aşağıdaki tablo her birinin neyi bulduğunu ve neye ihtiyaç duyduğunu özetler.",
            },
            {
              "kind": "p",
              "text": "İlk dört formül en az bir izdüşüme ihtiyaç duyar. Bunlar yüksekliğin oluşturduğu benzer üçgenlerden gelir; dolayısıyla yalnızca yükseklik dik açı köşesinden çizildiğinde geçerlidir. Beşinci formül, [[h=ab/c]], hiç izdüşüme ihtiyaç duymaz: iki alan ifadesinin eşitlenmesinden gelir ve kenarlar ile hipotenüs bilindiğinde her zaman çalışır.",
            },
            {
              "kind": "p",
              "text": "Bu, sitedeki iki yükseklik hesaplayıcı arasındaki pratik farktır. İzdüşümleri bildiğinizde yükseklik teoremi [[h]] değerini tek adımda verir. Kenarları bildiğinizde ise <a href=\"/right-triangle-altitude-from-sides-calculator/\">kenarlardan yükseklik bulma</a> alan yolunu kullanır. Verilerinize uyan aracı seçin.",
            },
            {
              "kind": "p",
              "text": "[[a^2=p\\times c]] ifadesinin bir başka yararlı okunuşu da şudur: her kenar, hipotenüs ile komşu izdüşümünün geometrik ortalamasıdır; tıpkı yüksekliğin iki izdüşümün geometrik ortalaması olması gibi.",
            },
          ],
          "table": {
            "headers": [
              "Formül",
              "Bulur",
              "İhtiyacı",
            ],
            "rows": [
              [
                "[[c=p+q]]",
                "Hipotenüsü",
                "Her iki izdüşüm",
              ],
              [
                "[[h^2=p\\times q]]",
                "Yüksekliği",
                "Her iki izdüşüm",
              ],
              [
                "[[a^2=p\\times c]]",
                "[[p]] izdüşümünün yanındaki kenarı",
                "[[p]] izdüşümü ve hipotenüs",
              ],
              [
                "[[b^2=q\\times c]]",
                "[[q]] izdüşümünün yanındaki kenarı",
                "[[q]] izdüşümü ve hipotenüs",
              ],
              [
                "[[h=ab/c]]",
                "Yüksekliği",
                "Her iki kenar ve hipotenüs",
              ],
            ],
          },
        },
        "sec-geomean": {
          "h2": "Geometrik Ortalama Teoremi ve Dik Üçgen Yüksekliği",
          "blocks": [
            {
              "kind": "p",
              "text": "İki pozitif sayının geometrik ortalaması, çarpımlarının kareköküdür. [[p]] ve [[q]] için bu [[\\sqrt{p\\times q}]] olur; bu da tam olarak yükseklik formülüdür. Yani yüksekliğin izdüşümlerin geometrik ortalaması olduğunu söylemek, teoremi farklı sözcüklerle yeniden ifade etmektir.",
            },
            {
              "kind": "p",
              "text": "Aritmetik ortalama, bilinen ortalamadır: [[(p+q)/2]]. [[p=4]] ve [[q=9]] için geometrik ortalama [[\\sqrt{36}=6]], aritmetik ortalama ise [[13/2=6.5]] olur. Yükseklik [[6]] olur, [[6.5]] değil; çünkü benzer üçgen orantısı toplamsal değil çarpımsal bir ilişki zorunlu kılar.",
            },
            {
              "kind": "p",
              "text": "Geometrik ortalama, pozitif girdilerde aritmetik ortalamayı asla aşmaz; eşitlik yalnızca [[p=q]] iken olur. Bu yüzden yükseklik, hipotenüse göre, izdüşümler eşitken en büyüktür. [[4]]'e [[9]] bir dikdörtgen ile [[6]]'ya [[6]] bir kare aynı [[36]] alana sahiptir; bu da aynı fikrin şekillerle çizilmiş halidir: yükseklik, alanı dikdörtgeninkine eşit olan karenin kenarıdır.",
            },
          ],
          "image": {
            "src": "altitude-geometric-mean.svg",
            "alt": "4'e 9 dikdörtgen ve eşit alanlı 6'ya 6 kare, ayrıca geometrik ortalama 6 ile aritmetik ortalama 6.5 değerlerini karşılaştıran bir sayı doğrusu",
            "caption": "[[p=4]] ve [[q=9]] için geometrik ortalama [[6]] (yükseklik), aritmetik ortalama [[6.5]] değerinin altında kalır.",
          },
        },
        "sec-special": {
          "h2": "Özel Durumlar ve Önemli Özellikler",
          "blocks": [
            {
              "kind": "h3",
              "text": "Eşit İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p=q]] olduğunda yükseklik bu ortak değere eşit olur: [[h=\\sqrt{p\\times p}=p]]. Yükseklik ayağı hipotenüsün orta noktasına iner, kenarlar eşit olur ve üçgen, 45 derecelik dar açılarıyla ikizkenar dik üçgen olur; bu da sabit bir hipotenüs için en büyük yüksekliği verir.",
            },
            {
              "kind": "h3",
              "text": "Çok Eşit Olmayan İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p]] çok küçük, [[q]] çok büyük olduğunda yükseklik mütevazı kalır: [[p=1]] ve [[q=100]] için [[h=10]] olur; bu, izdüşümlerin orta noktasının çok altındadır. Geometrik ortalama, küçük girdiyi bir ortalamaya göre daha güçlü tartar.",
            },
            {
              "kind": "h3",
              "text": "Sabit Hipotenüs",
            },
            {
              "kind": "p",
              "text": "Hipotenüsü [[c=p+q]] sabit tutup bölünmeyi değiştirin. [[p\\times q]] çarpımı ve dolayısıyla yükseklik, bölünme eşitken zirve yapar. Cebirsel olarak [[h\\le\\frac{p+q}{2}]] olur; eşitlik tam olarak [[p=q]] iken sağlanır. Açık bir dille: hiçbir yükseklik hipotenüsünün yarısını aşamaz.",
            },
            {
              "kind": "h3",
              "text": "Sıfır İzdüşümler",
            },
            {
              "kind": "p",
              "text": "[[p=0]] koymak [[h=0]] verir: yükseklik ayağı A köşesiyle çakışır, üçgen bir parçaya çöker ve gerçek bir üçgen kalmaz. Sıfır izdüşümleri geçerli hesaplayıcı girdisi değil, yozlaşmış durum olarak ele alın.",
            },
            {
              "kind": "h3",
              "text": "Negatif İzdüşümler",
            },
            {
              "kind": "p",
              "text": "İzdüşüm bir uzunluktur ve uzunluklar negatif olamaz. Negatif bir girdinin geometrik anlamı yoktur ve geçerli bir yükseklik vermez; hata yukarıdadır, parçanın ölçülme biçimindedir.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Aynı hipotenüse sahip ancak izdüşüm bölünmeleri farklı olan, farklı yükseklikler gösteren iki dik üçgen",
            "caption": "Aynı hipotenüs, farklı bölünmeler: eşit izdüşümler en uzun yüksekliği verir.",
          },
        },
        "sec-mistakes": {
          "h2": "İzdüşümlerden Yükseklik Bulurken Yaygın Hatalar",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "İzdüşümleri çarpmak yerine toplamak. Benzer üçgen orantısı çarpım gerektirir: [[p=4]] ve [[q=9]] ile [[\\sqrt{4+9}\\approx 3.606]] yanlıştır, [[\\sqrt{4\\times 9}=6]] doğrudur.",
                "Karekökü unutmak. [[h^2=36]] değerinde durmak, bir uzunluğun ait olduğu yere alan benzeri bir sayı bırakır. Bitirmek için her zaman pozitif karekökü alın.",
                "İzdüşümleri üçgen kenarlarıyla karıştırmak. Kenarlar hipotenüsten eğilerek uzaklaşırken [[p]] ve [[q]] onun boyunca düz uzanır; yükseklik teoremine yalnızca hipotenüs parçaları girer.",
                "Dönüştürmeden birimleri karıştırmak. [[p=40\\text{ mm}]] ve [[q=9\\text{ cm}]] ile önce dönüştürün ([[40\\text{ mm}=4\\text{ cm}]]), sonra [[h=\\sqrt{4\\times 9}=6\\text{ cm}]] hesaplayın.",
                "Negatif ölçümler girmek. Negatif bir izdüşüm anlamsızdır ve sanal sonuçlar üretebilir. Hesaplamadan önce [[p]] ve [[q]] değerlerinin ikisinin de pozitif olduğunu doğrulayın.",
                "Uzun çözümlerde [[h^2]] değerini [[h]] olarak taşımak. Etiketleri doğru tutun: [[h^2=36]] kareli adımdır, [[h=6]] yüksekliktir.",
                "Çok erken yuvarlamak. [[\\sqrt{35}]] gibi tam biçimleri olabildiğince uzun koruyun ve yalnızca nihai cevabı yuvarlayın.",
                "Formülü dik olmayan üçgene uygulamak. [[\\frac{h}{p}=\\frac{q}{h}]] orantısı C'deki dik açıya ihtiyaç duyar; o olmadan benzerlik savı çöker ve formül geçerli olmaz.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Yükseklik Teoreminin Pratik Uygulamaları",
          "blocks": [
            {
              "kind": "p",
              "text": "Geometri dersleri bu teoremi sürekli kullanır. Yükseklik problemleri, öğrencilerin izdüşümleri fark edip edemediğini, doğru formülü seçip seçemediğini ve Pisagor teoremiyle doğrulayıp doğrulayamadığını sınar; ders kitabı alıştırmaları izdüşümleri genellikle etiketli bir şemada sade sayılar olarak verir.",
            },
            {
              "kind": "p",
              "text": "İnşaat tarzı geometri problemlerinde teorem, yalnızca kısmi ölçümler bilindiğinde dik üçgeni tamamlar. Üçgen bir makasın çiziminde önce hipotenüs parçaları sabitlenebilir; yüksekliği tepe yüksekliği belirler ve benzerlik ispatları aynı [[\\frac{h}{p}=\\frac{q}{h}]] orantısını doğrudan kullanır.",
            },
            {
              "kind": "p",
              "text": "Arazi ölçümü ve mühendislik eskizleri bazen bir görüş hattını, izdüşümleri bir taban çizgisinden okunan dik üçgenin yüksekliği olarak modeller. İki rastgele zemin mesafesi tek başına bir yüksekliği belirlemez; teorem uygulanmadan önce dik üçgen geometrisinin gerçekten sağlanması gerekir.",
            },
            {
              "kind": "p",
              "text": "Üçgen alınlık veya katlanmış plak çatıların mimari çizimleri, dik açı gerçekten oradaysa, eksik bir boyutu bulmak için aynı ilişkileri kullanır.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Cevaplı Alıştırma Problemleri",
          "blocks": [
            {
              "kind": "h3",
              "text": "Problem 1: Başlangıç",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin izdüşümleri [[p=25\\text{ cm}]] ve [[q=16\\text{ cm}]] olur. Yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Başlangıç-Orta",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin izdüşümleri [[p=12\\text{ m}]] ve [[q=27\\text{ m}]] olur. Hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Orta",
            },
            {
              "kind": "p",
              "text": "Yükseklik ayağı hipotenüsü [[7\\text{ in}]] ve [[28\\text{ in}]] parçalarına böler. Yükseklik nedir?",
            },
            {
              "kind": "h3",
              "text": "Problem 4: Ondalıklı",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin izdüşümleri [[p=2.5\\text{ ft}]] ve [[q=14.4\\text{ ft}]] olur. Yüksekliği hesaplayın.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Uygulama",
            },
            {
              "kind": "p",
              "text": "Dik üçgen bir çatı makasında bağ kirişi hipotenüstür. Yükseklik ayağı bağ kirişini [[3.2\\text{ m}]] ve [[12.8\\text{ m}]] parçalarına böler. Makasın yükseklikteki yüksekliğini bulun.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Problemlerinin Cevapları",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\sqrt{25\\times 16}=\\sqrt{400}=20\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "2. [[h=\\sqrt{12\\times 27}=\\sqrt{324}=18\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\sqrt{7\\times 28}=\\sqrt{196}=14\\text{ in}]].",
            },
            {
              "kind": "p",
              "text": "4. [[h=\\sqrt{2.5\\times 14.4}=\\sqrt{36}=6\\text{ ft}]].",
            },
            {
              "kind": "p",
              "text": "5. [[h=\\sqrt{3.2\\times 12.8}=\\sqrt{40.96}=6.4\\text{ m}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Tek Bir Karekök, Tam Bir Anlayış",
          "blocks": [
            {
              "kind": "p",
              "text": "Tek bir karekök bütün fikri yakalar: bir dik üçgenin yüksekliği, hipotenüs üzerindeki iki izdüşümün geometrik ortalamasıdır. [[p]] ile [[q]] değerini çarpın, pozitif karekökü alın, birimleri tutarlı tutun; cevap elinizdedir.",
            },
            {
              "kind": "p",
              "text": "Bu kısa hesabın arkasında temiz bir geometri parçası yatar. Yükseklik iki benzer üçgen oluşturur, benzerlik orantıyı verir, orantı da formülü verir. Bu zinciri görebildiğinizde cevapları kontrol etmek, hatalardan kaçınmak ve yeni problemlerde izdüşümleri tanımak rutin hale gelir.",
            },
          ],
        },
      },
      "faqHeading": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "İzdüşümlerden yükseklik formülü nedir?",
          "answer": "Formül [[h=\\sqrt{p\\times q}]] olur; burada [[h]] hipotenüse inen yükseklik, [[p]] ve [[q]] ise iki izdüşümdür. Her iki izdüşüm de aynı birimle ölçülmüş pozitif uzunluklar olmalıdır. Onları çarpın, sonra pozitif karekökü alın. Sonuç, girdilerle aynı birimde yüksekliktir.",
        },
        {
          "question": "Hipotenüs izdüşümleri nedir?",
          "answer": "İzdüşümler, yükseklik ayağının hipotenüsü böldüğü iki parçadır. C'de dik açılı ABC üçgeninde ve CD yüksekliğinde, AD parçası [[p]] izdüşümü, DB parçası ise [[q]] izdüşümüdür. Birlikte tam hipotenüsü oluştururlar, yani [[p+q=c]]. Üçgenin kenarları değil, hipotenüs boyunca uzanan düz parçalardır.",
        },
        {
          "question": "Yükseklik neden iki izdüşümün geometrik ortalamasıdır?",
          "answer": "Çünkü yükseklik iki benzer üçgen oluşturur. ACD ve CBD üçgenlerinde eşleşen kenarlar [[\\frac{h}{p}=\\frac{q}{h}]] orantısını verir. İçler dışlar çarpımı [[h^2=p\\times q]] üretir, yani [[h=\\sqrt{p\\times q}]] olur. İki sayının geometrik ortalaması çarpımlarının karekökü olduğundan, yükseklik tam olarak [[p]] ve [[q]] değerlerinin geometrik ortalamasıdır.",
        },
        {
          "question": "Üçgen kenarlarını bilmeden yükseklik bulunabilir mi?",
          "answer": "Evet. Yükseklik teoremi yalnızca iki izdüşüme ihtiyaç duyar; kenarlar gereksiz girdidir. [[p]] ve [[q]] değerlerini hesaplayıcıya girin, [[h]] değerini doğrudan döndürür. Bu, bir şema veya problem ifadesi hipotenüs parçalarını verdiğinde en hızlı yoldur. Kenarları biliyorsanız bunun yerine farklı bir formül, [[h=ab/c]], uygulanır.",
        },
        {
          "question": "İki izdüşüm farklı uzunlukta olabilir mi?",
          "answer": "Evet ve genellikle de öyle olur. İzdüşümler eşit ya da eşit olmayan herhangi iki pozitif uzunluk olabilir; formül ikisini de işler. [[p=2]] ve [[q=18]] ile yükseklik [[6]] olur ve iki değerin arasında kalır. Eşit izdüşümler yalnızca ikizkenar dik üçgen üreten özel durumdur.",
        },
        {
          "question": "Her iki izdüşüm eşit olduğunda ne olur?",
          "answer": "[[p=q]] olduğunda yükseklik bu ortak değere eşit olur, çünkü [[\\sqrt{p\\times p}=p]] olur. Yükseklik ayağı hipotenüsün orta noktasına iner ve üçgen, iki eşit kenarı ve [[45^\\circ]] dar açılarıyla ikizkenar dik üçgen olur. Sabit bir hipotenüs için bu bölünme aynı zamanda mümkün olan en uzun yüksekliği verir.",
        },
        {
          "question": "Yükseklik izdüşümlerden uzun olabilir mi?",
          "answer": "Küçük izdüşümü aşabilir. [[p=2]] ve [[q=18]] ile yükseklik [[6]] olur; bu [[p=2]] değerinden uzundur. Geometrik ortalama her zaman iki girdinin arasında kalır; yani yükseklik [[p]] ile [[q]] arasına düşer. Büyük izdüşümü asla aşamaz ve hipotenüsün yarısını da asla aşamaz.",
        },
        {
          "question": "İzdüşümler farklı birimler kullanırsa ne olur?",
          "answer": "Hesaplamadan önce birini dönüştürerek ikisini aynı birime getirin. Diğer izdüşüm [[9\\text{ cm}]] iken [[40\\text{ mm}]] değerini [[4\\text{ cm}]] olarak değiştirin, sonra [[h=\\sqrt{4\\times 9}=6\\text{ cm}]] hesaplayın. Dönüştürmeden birimleri karıştırmak çarpımı bozar. Hesaplayıcı eşleşen birimler varsayar; bu yüzden önce standartlaştırın.",
        },
        {
          "question": "Yükseklik hipotenüsün yarısından büyük olabilir mi?",
          "answer": "Hayır. Herhangi pozitif [[p]] ve [[q]] için geometrik ortalama aritmetik ortalamayı asla aşmaz; yani [[h=\\sqrt{p\\times q}\\le\\frac{p+q}{2}=\\frac{c}{2}]] olur. Yükseklik, yalnızca [[p=q]] iken hipotenüsün tam yarısına eşit olur. Hipotenüsün yarısından büyük bir hesaplayıcı sonucu, girdi veya aritmetik hatasına işaret eder.",
        },
        {
          "question": "Yükseklik hesabımı nasıl kontrol ederim?",
          "answer": "Yüksekliğin karesini alın ve [[p\\times q]] değerine eşit olduğunu doğrulayın. Daha derin bir kontrol için üçgeni yeniden kurun: [[c=p+q]], [[a=\\sqrt{p\\times c}]], [[b=\\sqrt{q\\times c}]]; sonra [[h=ab/c]] değerini doğrulayın. İki alan ifadesini, [[(a\\times b)/2]] ve [[(c\\times h)/2]] değerlerini de karşılaştırabilirsiniz; bunlar uyuşmalıdır. Üç kontrol de geçerse cevap sağlamdır.",
        },
        {
          "question": "Yükseklik teoremi Pisagor teoremiyle ilişkili mi?",
          "answer": "Aynı dik üçgeni farklı açılardan anlatırlar. Yükseklik teoremi benzerlikten, Pisagor teoremi ise üç kenarı ilişkilendirir: [[a^2+b^2=c^2]]. Birbirini güçlendirirler: [[p=4]] ve [[q=9]] ile [[\\sqrt{52}]] ve [[\\sqrt{117}]] kenarları [[52+117=169=13^2]] eşitliğini sağlar; bu da yükseklik teoreminin anlattığı üçgeni doğrular.",
        },
        {
          "question": "Bu formül dik olmayan üçgende kullanılabilir mi?",
          "answer": "Hayır. [[\\frac{h}{p}=\\frac{q}{h}]] orantısı, dik açı köşesinden indirilen yüksekliğin oluşturduğu benzer üçgenlere dayanır. Bu dik açı olmadan benzerlik savı başarısız olur ve [[h^2=p\\times q]] geçerli olmaz. Genel üçgenler için verilen veriye uygun, alan tabanlı veya trigonometrik yükseklik formüllerini kullanın.",
        },
      ],
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları Keşfedin",
      "relatedIntro": "Bu araçlar komşu hesapları halleder: izdüşüm bulma, kenar uzunluklarından yükseklik bulma ve yüksekliği alana çevirme. Her biri bu sayfadaki yükseklik teoremiyle doğal biçimde eşleşir.",
      "relatedItems": [
        "Dik Üçgen Yükseklik Hesaplayıcı",
        "Kenarlardan Dik Üçgen Yükseklik Hesaplayıcı",
        "Dik Üçgen İzdüşüm Hesaplayıcı",
        "Yükseklikten Dik Üçgen Alanı Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
      ],
    },
};
