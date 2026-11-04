// altitudeGuideTranslations.btr.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B6_TR = {
  "tr": {
      "tocHeading": "Bölüm Gezgini",
      "tocItems": {
        "sec-intro": "Dik Üçgen Yükseklik Hesaplayıcı",
        "sec-calculate": "Dik Üçgende Yükseklik Hesaplama",
        "sec-what": "Dik Üçgende Yükseklik Nedir?",
        "sec-diagram": "Dik Üçgen Yükseklik Şeması Açıklaması",
        "sec-formulas": "Dik Üçgen Yükseklik Formülleri Açıklaması",
        "sec-how": "Dik Üçgen Yükseklik Hesaplayıcı Nasıl Kullanılır",
        "sec-method1": "Yöntem 1: Kenar Uzunluklarından Dik Üçgen Yüksekliği Bulma",
        "sec-method2": "Yöntem 2: Hipotenüs İzdüşümlerinden Yükseklik Bulma",
        "sec-two-sides": "Yalnızca İki Kenar Bilindiğinde Yükseklik Nasıl Bulunur",
        "sec-why": "Dik Üçgen Yükseklik Formülü Neden Doğrudur?",
        "sec-proof": "Benzer Üçgenlerle Yükseklik Teoreminin Kanıtı",
        "sec-examples": "Dik Üçgen Yüksekliği Çözümlü Örnekler",
        "sec-area": "Yükseklik ile Üçgen Alanı Arasındaki İlişki",
        "sec-geomean": "Geometrik Ortalama ve Hipotenüs İzdüşümleri",
        "sec-properties": "Dik Üçgen Yüksekliğinin Önemli Özellikleri",
        "sec-verify": "Yükseklik Sonucunuzun Doğru Olup Olmadığı Nasıl Kontrol Edilir",
        "sec-mistakes": "Yükseklik Hesaplarken Yapılan Yaygın Hatalar",
        "sec-applications": "Dik Üçgen Yüksekliğinin Gerçek Hayat Uygulamaları",
        "sec-practice": "Cevaplı Alıştırma Soruları",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları Keşfedin",
        "sec-faq": "Sık Sorulan Sorular",
        "sec-conclusion": "İlgili Dik Üçgen Hesaplayıcılar",
      },
      "sections": {
        "sec-intro": {
          "h2": "Dik Üçgen Yükseklik Hesaplayıcı",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu kılavuz, bir dik üçgenin yüksekliğini bulmanın iki yolunu, her biri için çözümlü örneklerle gösterir.",
            },
            {
              "kind": "p",
              "text": "Yükseklik, dik açı köşesinden hipotenüse indirilen dik doğru parçasıdır. Dik Üçgen Yükseklik Hesaplayıcı, bu uzunluğu ya üç kenar uzunluğunu ya da hipotenüs üzerindeki iki izdüşümü kullanarak bulur. Bildiklerinize uyan modu seçin, ölçülerinizi girin, hesaplayıcı yüksekliği aynı birimle verir.",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "İlk formül, hipotenüs [[c]] ile birlikte iki dik kenarı [[a]] ve [[b]] kullanır. İkincisi, yüksekliğin hipotenüs üzerinde kestiği iki parça olan izdüşümleri [[p]] ve [[q]] kullanır. Her iki formül de aynı dik yüksekliği bulur; yalnızca farklı bilinen ölçülerden başlarlar.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Dik Üçgende Yükseklik Hesaplama",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu kılavuzun yanındaki hesaplayıcı iki mod sunar ve doğru olanı seçmek tek yapmanız gereken hazırlıktır. Her mod farklı ölçüler ister ve farklı bir formül uygular; bu yüzden önce tabloyu okuyup modu bilinen değerlerinizle eşleştirin.",
            },
            {
              "kind": "p",
              "text": "Mod 1, Hipotenüse Yükseklik, a dik kenarı, b dik kenarı ve c hipotenüsünü kabul eder. Yüksekliği [[h=\\frac{ab}{c}]] ile hesaplar; iki dik kenarın çarpımını hipotenüse böler. Mod 2, Yüksekliğin Karesi, hipotenüsün iki parçası olan p ve q izdüşümlerini kabul eder ve izdüşümlerin geometrik ortalaması olan [[h=\\sqrt{pq}]] formülünü uygular.",
            },
            {
              "kind": "p",
              "text": "Tüm ölçüler uyumlu birimlerde olmalıdır: santimetreler santimetrelerle, metreler metrelerle. Sonuç, girdiğiniz ortak uzunluk birimiyle gelir. Yeni bir soruya başlamadan önce alanları temizlemek için Sıfırla düğmesini kullanın.",
            },
          ],
          "table": {
            "headers": [
              "Bilinen Ölçüler",
              "Hesaplayıcı Modu",
              "Formül",
            ],
            "rows": [
              [
                "a, b dik kenarları ve c hipotenüsü",
                "Hipotenüse Yükseklik",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "p ve q hipotenüs izdüşümleri",
                "Yüksekliğin Karesi",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Dik Üçgende Yükseklik Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik, bir üçgenin bir köşesinden karşı kenarı taşıyan doğruya çizilen dik doğru parçasıdır. Bir dik üçgende en kullanışlı yükseklik, dik açı köşesinden başlar ve hipotenüsü dik açıyla keser. İndiği noktaya yüksekliğin ayağı denir ve hipotenüs, bu taban-yükseklik çifti için doğal tabandır.",
            },
            {
              "kind": "p",
              "text": "Her üçgenin üç yüksekliği vardır ve dik üçgen de istisna değildir. Bunlardan ikisi dik kenarlarla çakışır: bir dik kenarı taban alırsanız, diğer dik kenar zaten ona diktir, dolayısıyla yükseklik görevi görür. Üçüncü yükseklik, dik açı köşesinden hipotenüse uzanır ve üçgenin içinde kalır. Bu sayfa, gerçekten hesap gerektiren tek yükseklik olan üçüncüsünü hesaplar.",
            },
            {
              "kind": "p",
              "text": "Hipotenüsü dik açıyla kestiği için bu yükseklik, orijinal üçgeni iki küçük dik üçgene böler. Bu iki üçgen birbirine ve orijinal üçgene benzer; bu yüzden yükseklik, bu kılavuzun ilerleyen bölümlerinde incelenen düzgün geometrik ortalama ilişkilerini oluşturur.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Dik Üçgen Yükseklik Şeması Açıklaması",
          "blocks": [
            {
              "kind": "p",
              "text": "Aşağıdaki şemada, dik açısı C'de olan ABC üçgeni gösterilir. AC ve BC kenarları dik açıda birleşir, dolayısıyla AB dik açının karşısındadır ve hipotenüs olmak zorundadır. CD yüksekliği C'den AB kenarına uzanır ve onu diklik ilişkisini gösteren bir dik açı işaretiyle D noktasında keser.",
            },
            {
              "kind": "p",
              "text": "Her kenarın standart bir etiketi vardır: AC = a, BC = b, AB = c ve CD yüksekliği = h. Yükseklik, hipotenüsü iki izdüşüme böler: AD = p ve DB = q, yani c = p + q. p'nin a dik kenarının yanında, q'nun b dik kenarının yanında olduğuna dikkat edin; bu örüntü, ilerideki benzerlik kanıtı için önemlidir.",
            },
            {
              "kind": "p",
              "text": "Şemayı soldan sağa okumak bütün hikayeyi gösterir: bir dik üçgen, hipotenüse inen bir yükseklik, iki izdüşüm parçası ve yüksekliği ortak kenar olarak paylaşan ACD ve CBD adlı iki küçük dik üçgene bölünmüş orijinal üçgen.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "C açısında dik açısı olan ABC üçgeni; hipotenüs AB'ye çizilen CD yüksekliği; AC a'ya, BC b'ye, AB c'ye, CD h'ye, AD p'ye, DB q'ya eşittir",
            "caption": "CD yüksekliği, dik açı C'den hipotenüs AB'ye dik olarak iner ve onu p ve q izdüşümlerine böler.",
          },
        },
        "sec-formulas": {
          "h2": "Dik Üçgen Yükseklik Formülleri Açıklaması",
          "blocks": [
            {
              "kind": "p",
              "text": "Aynı yüksekliği dört formül bulur ve her biri farklı bilinen ölçülerden başlar. Canlı hesaplayıcı ilk ikisini doğrudan uygular; diğer ikisi, ölçüleriniz eksik olduğunda ya da bir sonucu başka bir yolla doğrulamak istediğinizde kullanabileceğiniz el yöntemleridir.",
            },
            {
              "kind": "p",
              "text": "Kenar formülü [[h=\\frac{ab}{c}]] iki dik kenarı ve hipotenüsü ister. İzdüşüm formülü [[h=\\sqrt{pq}]] yalnızca hipotenüsün iki parçasını ister ve [[h^2=pq]] yükseklik teoremine eşdeğerdir. Dik kenarları biliyor ama hipotenüsü bilmiyorsanız, [[c=\\sqrt{a^2+b^2}]] yerine koyarak [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]] elde edersiniz. A alanını ve c hipotenüsünü biliyorsanız, taban olarak hipotenüsü alan alan formülünden doğrudan gelen [[h=\\frac{2A}{c}]] formülünü kullanın.",
            },
            {
              "kind": "p",
              "text": "Bunları asla dört hesaplayıcı modu olarak görmeyin. Hesaplayıcı tam olarak iki mod tutar: Hipotenüse Yükseklik ve Yüksekliğin Karesi. Kalan formüller, el ile hesaplama için, hesaplayıcıya girmeden önce eksik bir ölçüyü türetmek için ya da hesaplayıcının ürettiği bir cevabı iki kez kontrol etmek için yardımcı formüllerdir.",
            },
          ],
          "table": {
            "headers": [
              "Formül",
              "Gerekli girdiler",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "a, b dik kenarları ve c hipotenüsü",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "p ve q izdüşümleri",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "a, b dik kenarlarının ikisi",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "A alanı ve c hipotenüsü",
              ],
            ],
          },
        },
        "sec-how": {
          "h2": "Dik Üçgen Yükseklik Hesaplayıcı Nasıl Kullanılır",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu adımları sırayla izleyin, gerisini hesaplayıcı yapar. Hangi ölçüleriniz olduğunu bildiğinizde tüm işlem bir dakikadan kısa sürer.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bilinen ölçülerinizi belirleyin: üç kenar uzunluğu mu, yoksa hipotenüsün iki izdüşümü mü?",
                "Ölçülerinize uyan hesaplayıcı modunu seçin: üç kenar için Hipotenüse Yükseklik, iki izdüşüm için Yüksekliğin Karesi.",
                "Uyumlu birimlerde pozitif ölçüler girin; karışık birimlerle gelirlerse önce dönüştürün.",
                "Ölçülerin geçerli bir dik üçgeni tanımladığını, dik kenarların Pisagor teoremini sağladığını kontrol edin.",
                "Seçili modu çalıştırmak için Hesapla düğmesine tıklayın.",
                "Yükseklik sonucunu girdilerinizin ortak birimiyle okuyun.",
                "Soru önemliyse cevabı bu kılavuzdaki kontrol yöntemlerinden biriyle doğrulayın.",
                "Eski değerler yenileriyle karışmasın diye yeni bir soru girmeden önce Sıfırla'ya tıklayın.",
              ],
            },
            {
              "kind": "p",
              "text": "Mod seçimi en çok önem taşıyan adımdır. a ve b dik kenarlarıyla c hipotenüsünü biliyorsanız Hipotenüse Yükseklik modu uygundur. Hipotenüsün p ve q olarak nasıl bölündüğünü biliyorsanız Yüksekliğin Karesi'ni seçin. Yanlış mod geçerli girdiyi reddeder; bu yüzden modu ölçülerle eşleştirmek zaman kazandırır.",
            },
          ],
        },
        "sec-method1": {
          "h2": "Yöntem 1: Kenar Uzunluklarından Dik Üçgen Yüksekliği Bulma",
          "blocks": [
            {
              "kind": "p",
              "text": "Üç kenar uzunluğu da bilindiğinde yükseklik tek bir bölmeyle bulunur. [[h=\\frac{ab}{c}]] formülü iki dik kenarı çarpar ve hipotenüse böler; her simgenin sabit bir anlamı vardır: a ve b birbirine dik iki kenar, c hipotenüs ve h hipotenüse inen yüksekliktir.",
            },
            {
              "kind": "p",
              "text": "Klasik 3-4-5 üçgeni her adımı gösterir. a = 3 cm, b = 4 cm ve c = 5 cm verildiğinde formülde yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Önce dik kenarları çarpın: 3 × 4 = 12. Sonra hipotenüse bölün:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Sonuç h = 2,4 cm olur. 2,4'ün her iki dik kenardan da kısa olduğuna dikkat edin; hipotenüse inen yükseklik için bu her zaman böyledir ve kanıt bölümünde c'ye bölmenin geometrik olarak neden doğal olduğu açıklanır.",
            },
            {
              "kind": "p",
              "text": "Üç kenar da bilindiğinde ya da doğrudan ölçülebilirken bu yöntemi kullanın. Yalnızca kenar girdileriyle çalışan özel bir araç için, aynı formülü daha ayrıntılı işleyen <a href=\"/right-triangle-altitude-from-sides-calculator/\">kenarlardan yükseklik hesaplayıcıyı</a> deneyin.",
            },
          ],
          "image": {
            "src": "altitude-sides-345.svg",
            "alt": "Dik kenarları 3 ve 4, hipotenüsü 5 olan dik üçgen; hipotenüse dik çizilmiş 2,4 yüksekliği",
            "caption": "Bir 3-4-5 üçgeni: h yüksekliği (3 x 4) / 5 = 2,4'e eşittir.",
          },
        },
        "sec-method2": {
          "h2": "Yöntem 2: Hipotenüs İzdüşümlerinden Yükseklik Bulma",
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenüs iki izdüşümüne zaten bölünmüşse, yükseklik teoremi bir kestirme yol verir. Teorem [[h^2=pq]] der, yani yükseklik iki izdüşümün çarpımının kareköküdür:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "p = 9 cm ve q = 16 cm alın. Önce ilişkinin karesini alın:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Çarpın: 9 × 16 = 144, yani [[h^2=144]]. Şimdi karekökünü alın:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "Sonuç h = 12 cm olur. Bu, yüksekliğin iki izdüşümün geometrik ortalaması olduğunu söyler: boyut olarak ikisinin arasında, her iki uca da ortalamadan daha yakın durur; bu anlam geometrik ortalama bölümünde daha ayrıntılı açıklanır.",
            },
            {
              "kind": "p",
              "text": "p ve q'nun hipotenüsün parçaları olduğunu, üçgenin dik kenarları olmadığını unutmayın. Yaygın bir hata, dik kenar uzunluklarını izdüşüm olarak girmektir; bu yanlış sonuç verir. Yalnızca bu yönteme odaklanmış bir araç için <a href=\"/right-triangle-altitude-from-projections-calculator/\">izdüşümlerden yükseklik hesaplayıcısına</a> bakın.",
            },
          ],
          "image": {
            "src": "altitude-projections.svg",
            "alt": "h yüksekliği hipotenüsü p = 9 ve q = 16 izdüşümlerine bölen dik üçgen; h yüksekliği = 12",
            "caption": "Yükseklik, izdüşümlerin geometrik ortalamasıdır: sqrt(9 x 16) = 12.",
          },
        },
        "sec-two-sides": {
          "h2": "Yalnızca İki Kenar Bilindiğinde Yükseklik Nasıl Bulunur",
          "blocks": [
            {
              "kind": "p",
              "text": "Bazen üçüncü kenar eksiktir ama Pisagor teoremi onu tek adımda geri kazandırır. Kurtarma yöntemi hangi iki kenarı bildiğinize bağlıdır; bu yüzden her durumu ayrı ele alın.",
            },
            {
              "kind": "h3",
              "text": "Durum 1: İki Dik Kenar Biliniyor",
            },
            {
              "kind": "p",
              "text": "a = 6 cm ve b = 8 cm verildiğinde önce [[c=\\sqrt{a^2+b^2}]] ile hipotenüsü bulun:",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Artık üç kenar da bilindiğine göre kenar formülünü uygulayın: h = (6 × 8) / 10 = 48 / 10 = 4,8 cm. Tek engel eksik hipotenüstü ve yükseklik doğrudan bulunur.",
            },
            {
              "kind": "h3",
              "text": "Durum 2: Bir Dik Kenar ve Hipotenüs Biliniyor",
            },
            {
              "kind": "p",
              "text": "a = 5 cm ve c = 13 cm verildiğinde [[b=\\sqrt{c^2-a^2}]] ile eksik dik kenarı çözün:",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "b = 12 cm bulunduğuna göre yükseklik h = (5 × 12) / 13 = 60/13 cm ≈ 4,615 cm olur. Bunlar, önce gerekli ölçüleri bulmaya yönelik el ile türetmelerdir; hesaplayıcının kendisi eksiksiz girdiler ister, bu yüzden değerleri girmeden önce bu hazırlığı kağıt üzerinde yapın.",
            },
            {
              "kind": "p",
              "text": "Eksik kenarın kendisine sık sık ihtiyaç duyuyorsanız, yüksekliğe geçmeden önce onu doğrudan bulan <a href=\"/right-triangle-side-calculator/\">kenar hesaplayıcıyı</a> kullanın.",
            },
          ],
        },
        "sec-why": {
          "h2": "Dik Üçgen Yükseklik Formülü Neden Doğrudur?",
          "blocks": [
            {
              "kind": "p",
              "text": "Formül doğrudur çünkü tek bir üçgen iki farklı taban-yükseklik çiftiyle ölçülebilir ve alan her iki yolla da aynı kalır. Bu alan argümanı, [[h=\\frac{ab}{c}]] formülünün en kısa dürüst kanıtıdır.",
            },
            {
              "kind": "p",
              "text": "Önce taban-yükseklik çifti olarak dik kenarları kullanın. Dik kenarlar birbirine dik olduğundan alan basitçe çarpımlarının yarısıdır:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Şimdi taban olarak hipotenüsü, yükseklik olarak da yüksekliği kullanın. Aynı üçgen aynı alana sahiptir:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Tek alan için iki ifade, bu yüzden onları eşitleyin:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Kesirlerden kurtulmak için her iki yanı 2 ile çarpın; ab = ch elde edilir. Her iki yanı c'ye bölün:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Her adım tersine çevrilebilir aritmetiktir; bu yüzden hipotenüse bölme bir hile değildir, alan sabit kalırken dik kenar taban-yükseklik çiftinden hipotenüs taban-yükseklik çiftine geçmenin cebirsel bedelidir.",
            },
          ],
          "image": {
            "src": "altitude-area-comparison.svg",
            "alt": "Aynı dik üçgen iki kez çizilmiş: önce a tabanı ve b yüksekliğiyle, sonra c tabanı ve h yüksekliğiyle",
            "caption": "Aynı üçgen, iki taban-yükseklik çifti: alan ab/2'ye ve ch/2'ye eşittir, yani h ab/c'ye eşittir.",
          },
        },
        "sec-proof": {
          "h2": "Benzer Üçgenlerle Yükseklik Teoreminin Kanıtı",
          "blocks": [
            {
              "kind": "p",
              "text": "İzdüşüm formülü [[h=\\sqrt{pq}]] benzerlikten gelir. Etiketlemeyi tutarlı tutun: ABC üçgeni C'de dik açılıdır, D AB üzerindedir, CD AB'ye diktir, AD = p, DB = q ve CD = h'dir.",
            },
            {
              "kind": "p",
              "text": "Yükseklik ABC'yi iki küçük dik üçgene, ACD ve CBD'ye böler. A açısı ABC ile ACD arasında ortaktır, bu yüzden bu ikisi benzerdir; aynı şekilde B açısı ABC ile CBD arasında ortaktır. Her iki küçük üçgen de orijinale benzediğinden birbirlerine de benzerler: ACD üçgeni CBD üçgenine benzer.",
            },
            {
              "kind": "p",
              "text": "Benzerliği karşılıklı kenarların oranı olarak yazın. ACD'nin kısa kenarı p, uzun kenarı h'dir; CBD'de kısa kenar h, uzun kenar q'dur. Bunları eşleştirince:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "İçler dışlar çarpımı: h × h = p × q, yani h² = pq. Karekökünü alın:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Kenar uzunlukları pozitif olduğundan yalnızca pozitif kök kullanılır. Negatif kökün burada geometrik anlamı yoktur. Kilit içgörü, yüksekliğin iki hipotenüs parçası arasında orta orantılı olmasıdır; geometrik ortalama tam olarak budur.",
            },
          ],
          "image": {
            "src": "altitude-similar-triangles.svg",
            "alt": "CD yüksekliğiyle orijinal dik ABC üçgeni; yanında karşılıklı kenarları etiketli iki küçük benzer üçgen ACD ve CBD",
            "caption": "ACD ve CBD üçgenleri benzerdir: p/h = h/q, yani h'nin karesi p ile q'nun çarpımına eşittir.",
          },
        },
        "sec-examples": {
          "h2": "Dik Üçgen Yüksekliği Çözümlü Örnekler",
          "blocks": [
            {
              "kind": "p",
              "text": "Yedi örnek, her iki hesaplayıcı modunu, birim dönüştürmeyi ve ondalıklı ölçüleri kapsar. Her biri verilen değerleri, seçilen formülü, yerine koymayı ve nihai cevabı gösterir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: Klasik 3-4-5 Üçgeni",
            },
            {
              "kind": "p",
              "text": "a = 3 cm, b = 4 cm, c = 5 cm verildi. [[h=\\frac{ab}{c}]] kullanın: h = (3 × 4) / 5 = 12 / 5 = 2,4 cm. Yükseklik, her zaman olduğu gibi her iki dik kenardan da kısadır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: 5-12-13 Üçgeni",
            },
            {
              "kind": "p",
              "text": "a = 5 m, b = 12 m, c = 13 m verildi. [[h=\\frac{ab}{c}]] kullanın: h = (5 × 12) / 13 = 60/13 m ≈ 4,615 m. Temiz bir ondalık için kesri son adıma kadar koruyun.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: 8-15-17 Üçgeni",
            },
            {
              "kind": "p",
              "text": "a = 8 cm, b = 15 cm, c = 17 cm verildi. [[h=\\frac{ab}{c}]] kullanın: h = (8 × 15) / 17 = 120/17 cm ≈ 7,059 cm. Daha büyük dik kenarlar bile her ikisinden küçük bir yükseklik verir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Eşit Hipotenüs İzdüşümleri",
            },
            {
              "kind": "p",
              "text": "p = 5 cm ve q = 5 cm verildi. [[h=\\sqrt{pq}]] kullanın: h = √(5 × 5) = √25 = 5 cm. Eşit izdüşümler, yüksekliğin o hipotenüs için olabilecek en uzun değer olduğu anlamına gelir ve üçgen bir ikizkenar dik üçgendir: her dik kenar 5√2 cm, yaklaşık 7,07 cm'dir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Eşit Olmayan Hipotenüs İzdüşümleri",
            },
            {
              "kind": "p",
              "text": "p = 4 cm ve q = 25 cm verildi. [[h=\\sqrt{pq}]] kullanın: h = √(4 × 25) = √100 = 10 cm. 10 yüksekliğinin iki izdüşümün, 4 ve 25'in arasında durduğuna dikkat edin; bu, geometrik ortalamanın ayırt edici özelliğidir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Ondalıklı Ölçüler",
            },
            {
              "kind": "p",
              "text": "a = 1,5 m, b = 2 m, c = 2,5 m verildi. [[h=\\frac{ab}{c}]] kullanın: h = (1,5 × 2) / 2,5 = 3 / 2,5 = 1,2 m. Her değer aynı birimi kullandığı sürece ondalıklar tam sayılar gibi işler.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Farklı Ölçü Birimleri",
            },
            {
              "kind": "p",
              "text": "a = 30 cm, b = 0,4 m, c = 0,5 m verildi. Önce her şeyi santimetreye çevirin: b = 40 cm, c = 50 cm. Sonra h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Yerine koymadan önce dönüştürmek en yaygın birim hatasını önler.",
            },
          ],
        },
        "sec-area": {
          "h2": "Yükseklik ile Üçgen Alanı Arasındaki İlişki",
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenüs bilindiğinde alan ve yükseklik birbirini belirler. Hipotenüs taban alındığında alan A = ch/2'dir; bu yüzden yüksekliği çözmek [[h=\\frac{2A}{c}]] verir. Bu gerçekten farklı bir yoldur: dik kenarları tamamen atlar.",
            },
            {
              "kind": "p",
              "text": "Bir sorunun A = 54 cm² alan ve c = 15 cm hipotenüs verdiğini varsayın. Yerine koyun:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Payı çarpın: 2 × 54 = 108. Sonra bölün: h = 108 / 15 = 7,2 cm. Bireysel dik kenarları hiç bilmeden yükseklik bulunur.",
            },
            {
              "kind": "p",
              "text": "Bu yol, alanın doğrudan verildiği, örneğin arazi ya da malzeme hakkındaki sözel sorularda işe yarar. Ayrıca doğrulama aracı olarak da kullanılır: yüksekliği kenarlardan hesaplayın, sonra 2A/c'nin aynı değeri verdiğini onaylayın. <a href=\"/right-triangle-area-calculator/\">alan hesaplayıcı</a>, alanı sorunun verdiği ölçülerden bulur.",
            },
          ],
        },
        "sec-geomean": {
          "h2": "Geometrik Ortalama ve Hipotenüs İzdüşümleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik teoremi, yüksekliğin iki izdüşümün geometrik ortalaması olduğunu söyler ve geometrik ortalama belirli bir ortalama türüdür. p = 4 ve q = 9 alın. Geometrik ortalamaları √(4 × 9) = √36 = 6'dır; yani bu izdüşümlere sahip bir üçgenin yüksekliği 6'dır.",
            },
            {
              "kind": "p",
              "text": "Bunu sıradan aritmetik ortalamayla karşılaştırın: (4 + 9) / 2 = 6,5. İki ortalama farklıdır ve yalnızca 6 doğru yüksekliktir. Aritmetik ortalama toplamayla ortalar, geometrik ortalama ise çarpmayla ortalar; bu, toplanmak yerine birlikte ölçeklenen uzunluklara uyar.",
            },
            {
              "kind": "p",
              "text": "Geometrik olarak h² = pq orta orantı ilişkisi, yüksekliğin her izdüşümle, izdüşümlerin birbirleriyle ilişkili olduğu şekilde ilişkili olduğu anlamına gelir. İki küçük üçgeni benzer yapan bu simetridir ve yüksekliğin boyut olarak her zaman iki izdüşümün arasında durmasının, p q'ya eşit olmadıkça aritmetik ortalamaya asla eşit olmamasının nedenidir.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Dik Üçgen Yüksekliğinin Önemli Özellikleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Yedi özellik, hipotenüse inen yüksekliği tanımlar. Birlikte, hangi yükseklik değerlerinin mümkün olduğu ve nasıl davrandıkları konusunda güvenilir bir sezgi verirler.",
            },
            {
              "kind": "list",
              "items": [
                "Hipotenüse inen yükseklik ona diktir; bu yüzden dik açı köşesinden hipotenüse en kısa uzaklıktır.",
                "Yükseklik üçgeni iki küçük üçgene böler; her biri orijinale ve birbirine benzer.",
                "Yükseklik her iki dik kenardan da kısadır; hiçbir dik kenar hipotenüse en kısa yol olamaz.",
                "Yükseklik hipotenüsün kendisinden de kısadır, çünkü dik doğru parçası en kısa yoldur.",
                "Yükseklik, iki hipotenüs izdüşümünün geometrik ortalamasıdır, [[h=\\sqrt{pq}]].",
                "Sabit bir hipotenüs için yükseklik, iki izdüşüm eşitken en büyüktür; bu, iki dik kenar eşitken olur.",
                "Her kenar uzunluğunu aynı katsayıyla ölçeklemek yüksekliği de aynı katsayıyla ölçekler; üçgeni iki katına çıkarın, yükseklik iki katına çıkar.",
              ],
            },
            {
              "kind": "p",
              "text": "Altıncı özelliğin kesin bir sınırı vardır: yükseklik hipotenüsün yarısını asla geçemez, [[h \\leq \\frac{c}{2}]]; eşitlik yalnızca dik kenarlar eşitken olur. Hipotenüsü 10 olan bir 45-45-90 üçgenin yüksekliği tam 5'tir, yani maksimumdur; aynı hipotenüse sahip bir 6-8-10 üçgeni yalnızca 4,8'e ulaşır, şemada görüldüğü gibi.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Hipotenüsü 10 olan iki dik üçgen: yüksekliği 5 olan bir 45-45-90 üçgeni ve yüksekliği 4 olan 6-8-10 tarzı bir üçgen",
            "caption": "Aynı hipotenüs 10: eşit izdüşümler en uzun yüksekliği, 5'i verir.",
          },
        },
        "sec-verify": {
          "h2": "Yükseklik Sonucunuzun Doğru Olup Olmadığı Nasıl Kontrol Edilir",
          "blocks": [
            {
              "kind": "p",
              "text": "Üç bağımsız kontrol hesaplama hatalarını yakalar. Yükseklik cevabı önemli olduğunda en az birini kullanın.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 1: Üçgen Alanı",
            },
            {
              "kind": "p",
              "text": "Yüksekliğinizi kullanarak ab/2 ile ch/2'yi karşılaştırın. h = 2,4 olan 3-4-5 üçgeninde: ab/2 = (3 × 4)/2 = 6 ve ch/2 = (5 × 2,4)/2 = 6. Eşleşen alanlar yüksekliğin kenarlara uyduğunu doğrular.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 2: Geometrik Ortalama",
            },
            {
              "kind": "p",
              "text": "İzdüşümler bilindiğinde [[h^2=pq]] olduğunu doğrulayın. p = 9 ve q = 16 iken: h² = 12² = 144 ve pq = 9 × 16 = 144. Eşitlik, yüksekliğin hipotenüsün bölünüşüyle tutarlı olduğu anlamına gelir.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 3: Pisagor Teoremi",
            },
            {
              "kind": "p",
              "text": "Verilen kenarlar için [[a^2+b^2=c^2]] olduğunu onaylayın: 3-4-5 durumunda 9 + 16 = 25. Bu kontrol doğrudan yüksekliği değil kenar uzunluklarını doğrular ama yanlış kenar girişi, yükseklik cevabının diğer iki kontrolde başarısız olmasının en yaygın nedenidir.",
            },
            {
              "kind": "p",
              "text": "Her kontrolü tutarlı birimlerde yapın. Santimetreleri metrelerle karıştırmak alan kontrolünü sessizce bozar; bu yüzden önce dönüştürün, sonra doğrulayın.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Yükseklik Hesaplarken Yapılan Yaygın Hatalar",
          "blocks": [
            {
              "kind": "p",
              "text": "On hata tekrar tekrar ortaya çıkar. Her birinin imzasını bildiğinizde fark etmesi kolaydır.",
            },
            {
              "kind": "steps",
              "steps": [
                "Yüksekliği dik kenarla karıştırmak. Yükseklik hipotenüsü dik açıyla keser; dik kenar diğer dik kenarı dik açıda keser. Bir 3-4-5 üçgeninde h = 2,4'tür, 3 ya da 4 değil.",
                "Yanlış hesaplayıcı modunu seçmek. Dik kenarları ve hipotenüsü, izdüşüm bekleyen Yüksekliğin Karesi moduna girmek anlamsız sonuç üretir. Modu ölçülerle eşleştirin.",
                "İzdüşümleri dik kenarlarla karıştırmak. a = 3 ve b = 4'ü p ve q olarak girmek √(12) ≈ 3,46 hesaplar ki bu yükseklik değildir. İzdüşümler hipotenüs parçalarıdır.",
                "Yanlış hipotenüsü kullanmak. ab'yi hipotenüs yerine bir dik kenara bölmek, örneğin 12/4 = 3, yüksekliği olduğundan büyük gösterir. Bölen en uzun kenar, c olmalıdır.",
                "İzdüşüm formülünde karekökü unutmak. h² = 144'te durmak yükseklik olarak 144 verir; gerçek cevap h = 12'dir.",
                "Santimetreleri metrelerle karıştırmak. a = 30 cm ve c = 0,5 m iken 0,5'i doğrudan yerine koymak yanlış yükseklik verir. Önce dönüştürün: 50 cm.",
                "Geçersiz kenar uzunlukları girmek. 2, 3, 10 gibi kenarlar Pisagor teoremini sağlamaz; bu yüzden dik üçgen yoktur ve yükseklik tanımsızdır.",
                "Çok erken yuvarlamak. Sonraki bir adımdan önce 60/13'ü 4,6'ya yuvarlamak hatayı ileriye taşır. Kesri koruyun ve yalnızca nihai cevabı yuvarlayın.",
                "h²'yi nihai yükseklik sanmak. Hesaplama h² = 36 ile biterse yükseklik 6'dır, 36 değil.",
                "Dik üçgen formüllerini rastgele bir üçgene uygulamak. Buradaki formüller dik açı ister; diğer üçgenlerde yükseklik ilişkileri farklıdır.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Dik Üçgen Yüksekliğinin Gerçek Hayat Uygulamaları",
          "blocks": [
            {
              "kind": "p",
              "text": "Yükseklik hesapları, dik üçgen geometrisi üzerine kurulu her çalışmayı destekler. Geometri eğitiminde yükseklik teoremi öğrencilere benzerlik kanıtları ve geometrik ortalamalarla ilk tanışmayı sunar. Teknik çizim ve geometrik tasarım, üçgen paneller ya da dirsek şekilleri yerleştirirken dikleri konumlandırmak için yüksekliği kullanır.",
            },
            {
              "kind": "p",
              "text": "Harita ölçüm geometrisi, dik ofsetlerle arazileri haritalarken dik üçgen ilişkilerini kullanır; inşaat planlama modelleri, dik üçgen bir çerçevenin duvara dik açıyla oturması gerektiğinde bunları kullanır. Alan hesapları ters yönde çalışır: bilinen bir yükseklik ve hipotenüsten [[h=\\frac{2A}{c}]] dik kenarları ölçmeden yüksekliği geri kazandırır.",
            },
            {
              "kind": "p",
              "text": "Bunlar varsayımsal geometrik eskizlerdir, mühendislik prosedürleri değildir. Gerçek ölçüm ve yapı işleri uygun ölçümler, tasarım varsayımları ve mesleki standartlar gerektirir; yükseklik teoremi geometriyi açıklar, mesleki yöntemlerin yerini asla almaz.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Cevaplı Alıştırma Soruları",
          "blocks": [
            {
              "kind": "p",
              "text": "Beş soru, ana örneklerde görülmeyen değerleri kullanır. Her birini çözün, sonra aşağıdaki cevapları kontrol edin.",
            },
            {
              "kind": "h3",
              "text": "Soru 1: Başlangıç Seviyesi Kenar Tabanlı",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin a = 9 cm ve b = 40 cm dik kenarları ile c = 41 cm hipotenüsü vardır. Hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 2: Başlangıç Seviyesi İzdüşüm Tabanlı",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin yüksekliği hipotenüsü p = 16 m ve q = 36 m olarak böler. Yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 3: Ondalıklı Ölçüler",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgende a = 0,6 m, b = 0,8 m, c = 1,0 m'dir. Hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 4: Eksik Kenar",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgende a = 7 in dik kenarı ve c = 25 in hipotenüsü vardır. Hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Soru 5: Bahçe Yatağı Alanı",
            },
            {
              "kind": "p",
              "text": "Dik üçgen bir bahçe yatağının alanı A = 96 m² ve hipotenüsü 20 m'dir. Hipotenüse inen yüksekliği bulun.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Sorularının Cevapları",
            },
            {
              "kind": "p",
              "text": "Soru 1: h = (9 × 40) / 41 = 360/41 cm ≈ 8,780 cm. Önce kenarları onaylayın: 9² + 40² = 81 + 1600 = 1681 = 41², yani üçgen geçerlidir.",
            },
            {
              "kind": "p",
              "text": "Soru 2: h = √(16 × 36) = √576 = 24 m. Yükseklik, geometrik ortalama gereği iki izdüşümün arasında durur.",
            },
            {
              "kind": "p",
              "text": "Soru 3: h = (0,6 × 0,8) / 1,0 = 0,48 / 1,0 = 0,48 m. Ondalıklar tam sayılarla aynı işlemi görür.",
            },
            {
              "kind": "p",
              "text": "Soru 4: Eksik dik kenarı bulun: b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Sonra h = (7 × 24) / 25 = 168/25 in ≈ 6,72 in.",
            },
            {
              "kind": "p",
              "text": "Soru 5: Alan yolunu kullanın: h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9,6 m. Hiç dik kenar ölçüsüne gerek yoktu.",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "İlgili Dik Üçgen Hesaplayıcılar",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu kılavuz her iki yükseklik modunu da kapsadı: kenar uzunlukları ve hipotenüs izdüşümleri. Hangi ölçüleriniz olduğunu zaten biliyorsanız, özel araçlar daha derine iner: <a href=\"/right-triangle-altitude-from-sides-calculator/\">kenarlardan yükseklik hesaplayıcı</a> ve <a href=\"/right-triangle-altitude-from-projections-calculator/\">izdüşümlerden yükseklik hesaplayıcı</a>. <a href=\"/right-triangle-projection-calculator/\">izdüşüm hesaplayıcı</a>, yalnızca kenarlar bilindiğinde p ve q'nun kendilerini bulur.",
            },
          ],
        },
      },
      "faqHeading": "Sık Sorulan Sorular",
      "faqs": [
        {
          "question": "Dik üçgende yükseklik nedir?",
          "answer": "Hipotenüse inen yükseklik, dik açı köşesinden hipotenüse çizilen dik doğru parçasıdır. Dik kenarlarla çakışan yüksekliklerden farklı olarak dik üçgenin üçüncü yüksekliğidir ve hipotenüsü p ve q izdüşümlerine böler. İndiği noktaya yüksekliğin ayağı denir.",
        },
        {
          "question": "Dik üçgen yüksekliği nasıl hesaplanır?",
          "answer": "Dik kenarlar ve hipotenüs bilindiğinde kenar formülü [[h=\\frac{ab}{c}]] kullanılır; hipotenüs parçaları bilindiğinde izdüşüm formülü [[h=\\sqrt{pq}]] kullanılır. Hesaplayıcı, elinizdeki ölçülere uyan modu otomatik olarak uygular.",
        },
        {
          "question": "Üç kenar kullanılan yükseklik formülü nedir?",
          "answer": "a ve b dik kenarları ve c hipotenüsüyle yükseklik [[h=\\frac{ab}{c}]] olur. İki dik kenarı çarpıp sonucu hipotenüse bölün. Bir 3-4-5 üçgeninde h = (3 × 4) / 5 = 2,4 bulunur.",
        },
        {
          "question": "Yükseklik izdüşümlerden nasıl hesaplanır?",
          "answer": "Yükseklik teoremi [[h^2=pq]] der; bu yüzden karekök alın: [[h=\\sqrt{pq}]]. p = 9 ve q = 16 için h = √(9 × 16) = √144 = 12 elde edilir. İzdüşümlerin hipotenüsün parçaları olduğunu, dik kenarlar olmadığını unutmayın.",
        },
        {
          "question": "Yükseklik yalnızca iki kenarla hesaplanabilir mi?",
          "answer": "Evet, önce üçüncü kenarı bulmak gerekir. İki dik kenarla [[c=\\sqrt{a^2+b^2}]] bulunur; bir dik kenar ve hipotenüsle [[b=\\sqrt{c^2-a^2}]] bulunur. Sonra her zamanki gibi [[h=\\frac{ab}{c}]] uygulanır.",
        },
        {
          "question": "Yükseklik ile boy aynı şey midir?",
          "answer": "Dik üçgenlerde bu terimler sık sık örtüşür ama yükseklik, bir köşeden karşı kenara çizilen dik doğru parçası anlamında kesin bir terimdir. Bu sayfada yükseklik her zaman dik açı köşesinden hipotenüse inen dik doğru parçası demektir.",
        },
        {
          "question": "Yükseklik her zaman hipotenüsten kısa mıdır?",
          "answer": "Evet. Yükseklik, dik açı köşesinden hipotenüse en kısa uzaklıktır ve hipotenüs böyle her doğru parçasından daha uzundur. Ayrıca her iki dik kenardan da kısadır.",
        },
        {
          "question": "Yükseklik bir hipotenüs izdüşümüne eşit olabilir mi?",
          "answer": "Evet, izdüşümler eşit olduğunda olabilir. p = q ise [[h=\\sqrt{p \\times p}=p]] olur; yani yükseklik her izdüşüme eşittir. Bu durum ikizkenar dik üçgenlerde görülür ve orada yükseklik aynı zamanda hipotenüsün yarısıdır.",
        },
        {
          "question": "Geometrik ortalama teoremi yükseklikle nasıl ilişkilidir?",
          "answer": "Geometrik ortalama teoremi, yükseklik teoreminin başka bir adıdır: [[h=\\sqrt{pq}]] yüksekliğin hipotenüs izdüşümlerinin geometrik ortalaması olduğunu söyler. İki küçük üçgenin benzerliği bu ilişkiyi kanıtlar.",
        },
        {
          "question": "Yükseklik hesabımı nasıl kontrol ederim?",
          "answer": "İki alan formülü ab/2 ve ch/2'yi karşılaştırın; aynı sonucu vermelidir. İzdüşümler biliniyorsa [[h^2=pq]] olduğunu onaylayın. Ayrıca [[a^2+b^2=c^2]] ile kenarların geçerli bir dik üçgen tanımladığını doğrulayın.",
        },
        {
          "question": "Bu hesaplayıcıyı dik olmayan bir üçgen için kullanabilir miyim?",
          "answer": "Hayır. Her iki formül de dik açı ister: alan argümanı birbirine dik iki kenara dayanır, yükseklik teoremi ise dik açının oluşturduğu benzerliğe dayanır. Diğer üçgenlerde yükseklik ilişkileri farklıdır.",
        },
        {
          "question": "Hangi hesaplayıcı modunu seçmeliyim?",
          "answer": "İki dik kenarı ve hipotenüsü biliyorsanız Hipotenüse Yükseklik modunu seçin. İki hipotenüs izdüşümü p ve q'yu biliyorsanız Yüksekliğin Karesi modunu seçin. Modu bilinen ölçülerinizle eşleştirmek, gereken tek önemli hazırlıktır.",
        },
      ],
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları Keşfedin",
      "relatedIntro": "Zaten bildiğiniz ölçülere uyan aracı seçin.",
      "relatedItems": [
        "Kenarlardan Dik Üçgen Yükseklik Hesaplayıcı",
        "İzdüşümlerden Dik Üçgen Yükseklik Hesaplayıcı",
        "Dik Üçgen Alan Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
        "Dik Üçgen İzdüşüm Hesaplayıcı",
      ],
    },
};
