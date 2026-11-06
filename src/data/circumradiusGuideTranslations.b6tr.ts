// circumradiusGuideTranslations.btr.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B6_TR = {
  "tr": {
      "tocHeading": "Kılavuz İçindekiler",
      "tocItems": {
        "sec-intro": "Dik Üçgen Çevrel Yarıçap Hesaplayıcı",
        "sec-calculate": "Dik Üçgenin Çevrel Yarıçapını Hesaplama",
        "sec-what-circumradius": "Dik Üçgende Çevrel Yarıçap Nedir?",
        "sec-circumcircle": "Dik Üçgen Geometrisinde Çevrel Çember Nedir?",
        "sec-formula": "Dik Üçgen Çevrel Yarıçap Formülü",
        "sec-why-diameter": "Hipotenüs Neden Çevrel Çemberin Çapıdır?",
        "sec-circumcenter": "Dik Üçgenin Çevrel Merkezi Nedir?",
        "sec-how-to-use": "Dik Üçgen Çevrel Yarıçap Hesaplayıcı Nasıl Kullanılır?",
        "sec-step-example": "Çevrel Yarıçap Bulmanın Adım Adım Örneği",
        "sec-diagram": "Dik Üçgen Çevrel Çember Diyagramı Açıklaması",
        "sec-proof": "Çevrel Yarıçap Formülü Neden İşe Yarar?",
        "sec-thales": "Thales Teoremi ve Çevrel Çemberi Anlama",
        "sec-examples": "Dik Üçgen Çevrel Yarıçapı Hesaplamanın Çözümlü Örnekleri",
        "sec-legs-known": "İki Dik Kenar Bilindiğinde Çevrel Yarıçap Nasıl Bulunur?",
        "sec-diameter": "Çevrel Yarıçap ile Çap Arasındaki İlişki",
        "sec-vs-inradius": "Dik Üçgende Çevrel Yarıçap ve İç Yarıçap Karşılaştırması",
        "sec-pythagoras": "Çevrel Yarıçap ile Pisagor Teoremi Arasındaki İlişki",
        "sec-verify": "Çevrel Yarıçap Hesabınız Nasıl Doğrulanır?",
        "sec-properties": "Dik Üçgenlerde Çevrel Yarıçapın Önemli Özellikleri",
        "sec-mistakes": "Çevrel Yarıçap Hesaplarken Yapılan Yaygın Hatalar",
        "sec-applications": "Çevrel Yarıçapın Pratik Uygulamaları",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
        "sec-faq": "Sık Sorulan Sorular",
      },
      "sections": {
        "sec-intro": {
          "h2": "Dik Üçgen Çevrel Yarıçap Hesaplayıcı",
          "blocks": [
            {
              "kind": "p",
              "text": "Dik üçgenin çevrel yarıçapını tek bir bölme işlemiyle bulun: hipotenüsü ikiye bölün.",
            },
            {
              "kind": "p",
              "text": "Çevrel yarıçap, üçgenin üç köşesinden de geçen çembere, yani çevrel çembere ait yarıçaptır. Hipotenüs c, dik açının karşısındaki kenardır ve bu hesaplayıcının ihtiyaç duyduğu tek ölçümdür, çünkü hipotenüs aynı zamanda çevrel çemberin çapıdır. Formül [[R = \\frac{c}{2}]] şeklindedir; burada [[R]] çevrel yarıçaptır ve [[c]] hipotenüsün tamamıdır.",
            },
            {
              "kind": "p",
              "text": "Örneğin, [[c = 10]] cm ise [[R = \\frac{10}{2} = 5]] cm olur. Bu 5 cm, çevrel çemberin merkezinden üçgenin her bir köşesine olan uzaklıktır. Aynı uzaklık A köşesine, B köşesine ve C köşesine ulaşır ve çemberin üçünden de geçmesini sağlayan tam olarak budur.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Dik Üçgenin Çevrel Yarıçapını Hesaplama",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu sayfadaki hesaplayıcının hipotenüs c için tek bir giriş alanı vardır. Hipotenüs, dik açının karşısındaki kenardır ve aynı zamanda üçgenin en uzun kenarıdır. Bir uçtan diğer uca, kullandığınız birimle ölçün ve bu tek sayıyı girin.",
            },
            {
              "kind": "p",
              "text": "Yalnızca hipotenüs yeterlidir, çünkü çevrel yarıçap başka hiçbir şeye bağlı değildir. Bu yüzden hesaplayıcının ikinci veya üçüncü bir girişe ihtiyacı yoktur.",
            },
            {
              "kind": "p",
              "text": "Pozitif bir uzunluk girin. Sıfır veya negatif bir hipotenüs gerçek bir üçgeni tanımlamaz ve hesaplayıcının ikiye bölebileceği anlamlı bir şey olmaz. Birimi probleminizle tutarlı tutun: c santimetre cinsinden ise cevap santimetre cinsindendir, c metre cinsinden ise cevap metre cinsindendir.",
            },
            {
              "kind": "p",
              "text": "Sonucu görmek için Çevrel Yarıçap R Hesapla düğmesine tıklayın ve yeni bir probleme başlamadan önce alanı temizlemek için Sıfırla düğmesini kullanın. Cevabı çap olarak değil, yarıçap olarak okuyun. Hesaplayıcı 10 cm hipotenüs için 5 cm gösteriyorsa, çemberin tamamı 10 cm'dir ve 5 cm merkezinden kenarına olan uzaklıktır.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "Dik Üçgende Çevrel Yarıçap Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dik üçgenin çevrel yarıçapı, çevrel çemberinin yarıçapıdır; çevrel çember, üç köşesinden de geçen çemberdir. Dik açısı C noktasında olan ABC üçgenini alın. A, B ve C noktalarından tam olarak geçen bir çember çizin. O çemberin merkezinden üç köşeden herhangi birine olan uzaklık, [[R]] ile yazılan çevrel yarıçaptır.",
            },
            {
              "kind": "p",
              "text": "Çemberin merkezi çevrel merkez olarak adlandırılır ve [[O]] ile yazılır. Dik üçgende [[O]], AB hipotenüsünün orta noktasında yer alır. [[O]] merkez olduğundan, [[O]] noktasından üç köşeye olan uzaklıklar birbirine eşittir, yani [[AO = BO = CO = R]]. Tek bir sayı, [[R]], üç uzaklığın üçünü de aynı anda tanımlar.",
            },
            {
              "kind": "p",
              "text": "Basit bir örnek bunu somutlaştırır. 6-8-10 üçgeninde hipotenüs 10 cm olduğundan çevrel yarıçap 5 cm'dir. Merkez A noktasından 5 cm, B noktasından 5 cm ve C noktasından 5 cm uzaklıktadır. 6 cm ve 8 cm uzunluğundaki dik kenarlar üçgenin kenarlarıdır, yarıçap değildir ve burada hiçbiri çevrel yarıçapa eşit değildir.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "ABC dik üçgeni, çevrel çemberi içinde; merkez O, AB hipotenüsünün orta noktasında",
            "caption": "ABC üçgeni çevrel çemberi içinde: O merkezdir ve AO, BO ve CO uzunluklarının her biri R değerine eşittir.",
          },
        },
        "sec-circumcircle": {
          "h2": "Dik Üçgen Geometrisinde Çevrel Çember Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Çevrel çember, bir çokgenin her köşesinden geçen çemberdir. Üçgen için bu, çemberin üç köşeden de geçtiği ve başka bir koşulun gerekmediği anlamına gelir. Her üçgenin tam olarak bir çevrel çemberi vardır, çünkü doğrusal olmayan üç nokta tek bir çember belirler.",
            },
            {
              "kind": "p",
              "text": "Dik üçgende çevrel çemberin özel bir şekli vardır. Üçgen, hipotenüsü çemberin bir yanından diğer yanına, tam ortasından uzanacak şekilde çemberin içine oturur. Üçüncü köşe, yani dik açılı C köşesi, çember üzerinde aralarında yer alır. Üçgenin hiçbir parçası çemberin dışına taşmaz ve çember, üç köşeden de geçebilen en küçük çemberdir.",
            },
            {
              "kind": "p",
              "text": "Çevrel çember, iç teğet çemberden farklıdır. İç teğet çember üçgenin içinde yer alır ve üç kenara da içeriden dokunur. Çevrel çember üçgeni çevreler ve ona yalnızca üç köşede dokunur. Bu iki çemberi karıştırmak, bu sayfadaki en yaygın kafa karışıklığı kaynağıdır ve aşağıdaki karşılaştırma bölümü onları yan yana koyar.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Dik Üçgen Çevrel Yarıçap Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Dik üçgenin çevrel yarıçap formülü, bir bakışta akılda kalacak kadar kısadır:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[R]] çevrel yarıçaptır, yani çevrel çemberin yarıçapıdır ve [[c]] dik açının karşısındaki kenar olan hipotenüsün tamamıdır. Formül şunu söyler: hipotenüsü alıp ikiye bölün.",
            },
            {
              "kind": "p",
              "text": "Hesabın iki adımı vardır. Önce hipotenüsü doğru belirleyin. Dik açının karşısındaki kenardır ve her zaman en uzun kenardır. İkinci olarak uzunluğunu ikiye bölün. Hipotenüs zaten biliniyorsa kare alma, karekök alma ve önce bulunması gereken ikinci bir ölçüm yoktur.",
            },
            {
              "kind": "p",
              "text": "Bölme işleminin işe yaramasının nedeni, hipotenüsün çevrel çemberin çapı olmasıdır. Yarıçap her zaman çapın yarısıdır, yani [[R = \\frac{D}{2}]]; burada [[D]] çaptır. Dik üçgende [[D = c]] olduğundan, yerine koymak [[R = \\frac{c}{2}]] sonucunu verir. Formül aslında, çapı üçgenin bir kenarı olan duruma uygulanan tanıdık yarıçap çap ilişkisidir.",
            },
            {
              "kind": "p",
              "text": "Genel bir üçgen, yani dik açılı olması gerekmeyen bir üçgen için çevrel yarıçap [[R = \\frac{abc}{4A}]] formülünü izler; burada [[a]], [[b]] ve [[c]] üç kenardır ve [[A]] üçgenin alanıdır. Dik üçgen için bu formül [[R = \\frac{c}{2}]] şeklinde sadeleşir, çünkü alan [[A = \\frac{ab}{2}]] değerindedir. Genel formülü yalnızca dik açılı olmayan üçgenler için kullanın.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "Hipotenüs Neden Çevrel Çemberin Çapıdır?",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu, sayfanın tamamının dayandığı fikirdir, bu yüzden dikkatli bir bakışı hak eder. Dik açısı C noktasında olan ABC dik üçgenini alın ve [[O]], AB hipotenüsünün orta noktası olsun. İddia, [[O]] noktasının üç köşeye de eşit uzaklıkta olduğu, bunun onu çevrel çemberin merkezi yaptığı ve [[O]] noktasından geçip iki ucu da çember üzerinde olan AB doğru parçasının bir çap olduğudur.",
            },
            {
              "kind": "p",
              "text": "Anahtar gerçek, dik üçgenin orta nokta özelliğidir: hipotenüsün orta noktası, üç köşeye de eşit uzaklıktadır. Sembollerle, [[OA = OB = OC]]. [[O]], AB doğru parçasının orta noktası olduğundan, [[OA]] ve [[OB]] uzunluklarının her biri hipotenüsün yarısıdır, yani [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "[[OC]] neden hipotenüsün yarısına eşittir? Bunu görmenin bir yolu dikdörtgeni tamamlamaktır. ABC üçgeninin bir kopyasını [[O]] noktası etrafında yarım tur döndürerek çizin, böylece iki üçgen birlikte AB köşegenli bir dikdörtgen oluşturur. Dikdörtgenin köşegenleri eşittir ve birbirini ortalar, yani [[OC = \\frac{c}{2}]] de geçerlidir.",
            },
            {
              "kind": "p",
              "text": "[[OA = OB = OC]] belirlendikten sonra gerisi kendiliğinden gelir. Merkezi [[O]] olan ve yarıçapı [[\\frac{c}{2}]] olan bir çember A, B ve C noktalarından geçer, yani çevrel çemberdir, [[O]] çevrel merkezdir ve [[\\frac{c}{2}]] çevrel yarıçaptır. A ve B, merkezden geçen bir doğrunun karşılıklı uçları olduğundan AB bir çaptır, yani [[AB = 2R]], bu da [[c = 2R]] ve dolayısıyla [[R = \\frac{c}{2}]] demektir.",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "AB hipotenüsü, çevrel çemberin çapı olarak gösteriliyor; AO ve OB uzunlukları R değerine eşit",
            "caption": "AB hipotenüsü çaptır: AO ve OB uzunluklarının her biri R değerine eşittir ve AB, 2R değerine eşittir.",
          },
        },
        "sec-circumcenter": {
          "h2": "Dik Üçgenin Çevrel Merkezi Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Bir üçgenin çevrel merkezi, üç köşeye de eşit uzaklıkta olan noktadır ve çevrel çemberin merkezidir. Kenarların dik orta dikmelerinin kesiştiği yerde bulunur.",
            },
            {
              "kind": "p",
              "text": "Dik üçgen için dik orta dikmeler, onları çizmeden bulabileceğiniz bir noktada kesişir: hipotenüsün orta noktası. AB doğru parçasını ikiye bölün, çevrel merkez [[O]] elinizde olur. Herhangi bir dik kenarı ikiye bölmek, aynı noktadan geçen bir doğru verir; bu, merkezi pergel ve cetvelle çizerken yararlı bir kontroldür.",
            },
            {
              "kind": "p",
              "text": "Çevrel merkez hipotenüsün üzerinde, tam ortasında yer alır. Dik üçgenlerin özel yönü budur. Dar açılı bir üçgende üç açı da 90 dereceden küçüktür ve çevrel merkez üçgenin içinde kalır. Dik üçgen sınır durumudur; merkez üçgenin sınırında, en uzun kenarı üzerinde oturur.",
            },
            {
              "kind": "p",
              "text": "Çevrel merkez, dik açılı köşe değildir. C köşesi çember üzerinde, [[O]] noktasından [[R]] uzaklıkta bir noktadır; [[O]] ise merkezdir. İkisini karıştırmak yaygın bir hatadır, çünkü C, üçgenin görsel olarak en dikkat çekici köşesidir. Merkezin A, B ve C noktalarına eşit uzaklıkta olması gerektiğini unutmayın; C, üçgen belirli bir biçimde ikizkenar olmadıkça A ve B noktalarına eşit uzaklıkta değildir, bu yüzden C genel olarak merkez olamaz.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "Çevrel merkez O, hipotenüsün orta noktasında; üç köşeye de eşit uzaklıkta",
            "caption": "O, AB doğru parçasının orta noktasıdır; OA, OB ve OC uzunluklarının üçü de R değerine eşittir.",
          },
        },
        "sec-how-to-use": {
          "h2": "Dik Üçgen Çevrel Yarıçap Hesaplayıcı Nasıl Kullanılır?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dokuz kısa adım, sizi etiketli bir üçgenden kontrol edilmiş bir cevaba götürür. Dik kenarlar hiçbir noktada gerekli değildir, çünkü yalnızca hipotenüs çevrel yarıçapı belirler.",
            },
            {
              "kind": "steps",
              "steps": [
                "Probleminizdeki dik üçgeni belirleyin ve bir dik açısı olduğunu doğrulayın.",
                "Dik açıyı bulun; genellikle C köşesinde küçük bir kare ile işaretlenir.",
                "Dik açının karşısındaki kenarı belirleyin; o kenar hipotenüs c'dir.",
                "Bu kenarın üçgenin en uzun kenarı olduğunu doğrulayın. Değilse devam etmeden önce diyagramı yeniden etiketleyin.",
                "Uygun birimi seçin ve tüm ölçümleri aynı birimi kullanacak şekilde dönüştürün.",
                "Hipotenüs uzunluğunu Hipotenüs c alanına girin.",
                "Çevrel Yarıçap R Hesapla düğmesine tıklayın ve sonucu okuyun.",
                "Sonucu kontrol edin: pozitif olmalı, c ile aynı birimde olmalı ve tam olarak c'nin yarısı olmalıdır.",
                "Başka bir hesaba başlarken Sıfırla düğmesini kullanın.",
              ],
            },
            {
              "kind": "p",
              "text": "Probleminiz hipotenüs yerine iki dik kenarı veriyorsa, önce Pisagor teoremi ile c değerini bulun, [[c = \\sqrt{a^2 + b^2}]], ardından bu değeri girin. <a href=\"/right-triangle-side-calculator/\">Dik üçgen kenar hesaplayıcı</a>, eksik hipotenüsü sizin için bulabilir ve aşağıdaki dik kenarlar bölümü tam bir örnek üzerinden gider.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Çevrel Yarıçap Bulmanın Adım Adım Örneği",
          "blocks": [
            {
              "kind": "p",
              "text": "[[c = 10]] cm değerini kullanın. Aşağıdaki üç adım, atlanan hiçbir şey olmadan tüm çözümü gösterir.",
            },
            {
              "kind": "steps",
              "steps": [
                "Formülü yazın: [[R = \\frac{c}{2}]].",
                "Bilinen değeri yerine koyun: [[R = \\frac{10}{2}]].",
                "Bölün: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "5 cm cevabı, çevrel çemberin yarıçapının 5 cm olduğu anlamına gelir. Merkezi, yani hipotenüsün orta noktası, üçgenin her köşesinden 5 cm uzaklıktadır ve çember üç köşeden de geçer. Çemberin çapı 10 cm'dir, hipotenüsle aynıdır.",
            },
            {
              "kind": "p",
              "text": "Cevabı çap ilişkisiyle doğrulayın, [[2R = c]]. Yarıçapı iki katına çıkarmak [[2 \\times 5 = 10]] cm verir ve bu, hipotenüsle tam olarak eşleşir. Cevabınızı iki katına çıkarmak başladığınız hipotenüsü vermiyorsa, bölme işleminde bir yerde hata yapılmıştır ve kontrol bunu hemen yakalar.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Hipotenüsü 10 cm ve çevrel yarıçapı 5 cm olan, çevrel çember içindeki çözümlü örnek",
            "caption": "Çözümlü örnek: c = 10 cm, R = 5 cm sonucunu verir ve 2 çarpı 5 cm, 10 cm'ye eşittir.",
          },
        },
        "sec-diagram": {
          "h2": "Dik Üçgen Çevrel Çember Diyagramı Açıklaması",
          "blocks": [
            {
              "kind": "p",
              "text": "Diyagram, dik açısı C noktasında olan ABC üçgenini gösterir. AC kenarı dik kenar a, BC kenarı dik kenar b ve AB kenarı hipotenüs c'dir. [[O]] noktası AB doğru parçasının orta noktasını işaretler ve merkezi [[O]] olan bir çember A, B ve C noktalarından geçer.",
            },
            {
              "kind": "p",
              "text": "Diyagramı şu sırayla okuyun. A noktasından başlayın, a dik kenarı boyunca C noktasına gidin, ardından b dik kenarı boyunca B noktasına gidin, sonra hipotenüs boyunca B noktasından A noktasına geri dönün ve yol üzerinde [[O]] noktasından geçin. [[O]] noktasından A, B ve C noktalarına giden doğru parçalarının üçü de yarıçaptır ve her biri [[R]] ile etiketlenir.",
            },
            {
              "kind": "p",
              "text": "AB doğru parçası merkez [[O]] noktasından geçer ve iki ucu da çember üzerindedir; bu, çapın tanımıdır. Bu yüzden AB, çemberin ortasından geçen düz bir çizgi olarak çizilir, bir kenara kaymış bir kiriş olarak değil. C noktasındaki dik açı, çemberin üzerinde yer alır; bu, Thales teoreminin anlattığı resimdir.",
            },
          ],
        },
        "sec-proof": {
          "h2": "Çevrel Yarıçap Formülü Neden İşe Yarar?",
          "blocks": [
            {
              "kind": "p",
              "text": "İspat, hipotenüsün orta noktasını ve onun üç köşeye de eşit uzaklıkta olduğu gerçeğini kullanır. Dik açısı C noktasında olan ABC dik üçgeninde AB doğru parçasının orta noktası [[M]] olsun. O halde orta nokta tanımı gereği [[AM = BM = \\frac{c}{2}]] olur. İspat gerektiren adım, üçüncü uzaklığın ilk ikisiyle eşleştiği iddiası olan [[MA = MB = MC]] eşitliğidir.",
            },
            {
              "kind": "p",
              "text": "Bunu göstermenin temiz bir yolu, CM kenarortayını [[MD = MC]] olacak şekilde D noktasına uzatmak ve D noktasını A ve B noktalarına birleştirmektir. ACBD dörtgeninin AB ve CD köşegenleri [[M]] noktasında birbirini ortalar, bu yüzden bir paralelkenardır. C noktasındaki açısı dik açıdır ve bir açısı dik olan paralelkenar dikdörtgendir, yani ACBD bir dikdörtgendir.",
            },
            {
              "kind": "p",
              "text": "Dikdörtgenin köşegenleri eşittir, yani [[CD = AB = c]]. [[M]], CD doğru parçasını ortaladığından, [[MC = \\frac{CD}{2} = \\frac{c}{2}]] olur. Bu, [[MA]] ve [[MB]] uzunluklarıyla eşleşir, yani [[MA = MB = MC = \\frac{c}{2}]] olur. [[M]] noktası A, B ve C noktalarına eşit uzaklıktadır, bu da onu çevrel merkez yapar ve ortak uzaklık [[\\frac{c}{2}]] çevrel yarıçaptır. Dolayısıyla [[R = \\frac{c}{2}]] olur.",
            },
          ],
        },
        "sec-thales": {
          "h2": "Thales Teoremi ve Çevrel Çemberi Anlama",
          "blocks": [
            {
              "kind": "p",
              "text": "Thales teoremi, bir çember üzerinde çapın gördüğü açının dik açı olduğunu söyler. Resimde AB bir çemberin çapıdır ve C, A veya B dışında çember üzerindeki herhangi bir noktadır. O halde ACB açısı 90 derecedir. Teorem, ilk bilinen ispatıyla anılan Miletli Thales'in adını taşır.",
            },
            {
              "kind": "p",
              "text": "Bu sayfanın kullandığı şey, teoremin tersidir: bir üçgenin dik açısı varsa, hipotenüsü üç köşeden de geçen bir çemberin çapı olarak kabul edilebilir. C açısı 90 dereceye eşit olan ABC üçgenini alın. Ters teorem, C noktasının AB çaplı çember üzerinde yer aldığını söyler, yani o çember üçgenin çevrel çemberidir ve yarıçapı AB uzunluğunun yarısıdır.",
            },
            {
              "kind": "p",
              "text": "İki yön birlikte tam bir test verir. AB çaplı çember üzerindeki bir C noktası her zaman C noktasında dik açı verir ve C noktasındaki dik açı her zaman C noktasını o çemberin üzerine koyar.",
            },
            {
              "kind": "p",
              "text": "Teorem, çevrel merkezin konumunu da açıklar. Çemberin merkezi, çapının orta noktasıdır ve çap hipotenüstür, bu yüzden merkez hipotenüsün orta noktasıdır. Üçgen hakkında başka hiçbir şeyin bilinmesi gerekmez. Bu yüzden hesaplayıcı yalnızca tek bir sayı ister.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "AB çapı ve çember üzerinde dik açı oluşturan C noktası ile Thales teoremi diyagramı",
            "caption": "Thales teoremi: AB çaptır, C çember üzerindedir ve C açısı 90 derecedir.",
          },
        },
        "sec-examples": {
          "h2": "Dik Üçgen Çevrel Yarıçapı Hesaplamanın Çözümlü Örnekleri",
          "blocks": [
            {
              "kind": "h3",
              "text": "Örnek 1: Temel Tam Sayı",
            },
            {
              "kind": "p",
              "text": "[[c = 10]] cm verildiğinde, formül [[R = \\frac{10}{2} = 5]] cm sonucunu verir. Çevrel çemberin çapı 10 cm ve yarıçapı 5 cm'dir; merkezi hipotenüsün orta noktasıdır ve her köşeden 5 cm uzaklıktadır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Daha Büyük Ölçüm",
            },
            {
              "kind": "p",
              "text": "[[c = 24]] m verildiğinde, [[R = \\frac{24}{2} = 12]] m olur. Daha büyük sayılar yöntemi hiç değiştirmez: hipotenüsü ikiye bölün ve birimi koruyun. 24 m genişliğindeki bir çemberin yarıçapı 12 m'dir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Ondalık Ölçüm",
            },
            {
              "kind": "p",
              "text": "[[c = 7.5]] cm verildiğinde, [[R = \\frac{7.5}{2} = 3.75]] cm olur. Ondalık bir hipotenüs ondalık bir çevrel yarıçap verir; bu normaldir. İki katına çıkararak kontrol edin: [[2 \\times 3.75 = 7.5]] cm, bu da hipotenüsü geri verir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Tek Hipotenüs",
            },
            {
              "kind": "p",
              "text": "[[c = 13]] cm verildiğinde, [[R = \\frac{13}{2} = 6.5]] cm olur. Tek bir tam sayı ikiye bölündüğünde sonu .5 ile biten bir sayı verir. Bu, dik kenarları 5 cm ve 12 cm olan 5-12-13 üçgenidir, çünkü [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]] olur.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Milimetre Ölçümü",
            },
            {
              "kind": "p",
              "text": "[[c = 180]] mm verildiğinde, [[R = \\frac{180}{2} = 90]] mm olur. Küçük birimler de aynı şekilde çalışır ve birimi baştan sona milimetre olarak korumak her türlü dönüşümü önler. Santimetre cinsinden aynı cevap 9 cm'dir, çünkü 90 mm, 9 cm'ye eşittir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Kesirli Ölçüm",
            },
            {
              "kind": "p",
              "text": "[[c = \\frac{15}{2}]] ft verildiğinde, [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft olur; bu da 3.75 ft demektir. İkiye bölmek, paydayı 2 ile çarpmak demektir, bu yüzden payda 2'den 4'e büyür. Ondalık biçimi olan 3.75 ft, aynı cevabın farklı yazılışıdır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Farklı Birimler",
            },
            {
              "kind": "p",
              "text": "[[c = 1.2]] m verildiğinde, [[R = \\frac{1.2}{2} = 0.6]] m olur. Santimetreye dönüştürürsek 0.6 m, 60 cm'ye eşittir, çünkü 1 m, 100 cm'dir. Her iki birim de doğrudur, ancak cevap hangisini kullandığını belirtmelidir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: Büyük Ondalık Ölçüm",
            },
            {
              "kind": "p",
              "text": "[[c = 125.6]] m verildiğinde, [[R = \\frac{125.6}{2} = 62.8]] m olur. 62.8 sayısını iki katına çıkarmak 125.6 sonucunu verir; bu da bölme işlemini doğrular.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "İki Dik Kenar Bilindiğinde Çevrel Yarıçap Nasıl Bulunur?",
          "blocks": [
            {
              "kind": "p",
              "text": "Bu sayfadaki hesaplayıcı hipotenüsü ister, ancak birçok problem hipotenüs yerine iki dik kenarı verir. Bu durumda önce Pisagor teoremi ile hipotenüsü bulun, ardından ikiye bölün. İki adım tek bir formülde birleşir: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]; burada [[a]] ve [[b]] dik kenarlardır.",
            },
            {
              "kind": "p",
              "text": "[[a = 6]] cm ve [[b = 8]] cm değerlerini kullanın. Önce iki dik kenarın karesini alıp toplayın: [[a^2 + b^2 = 36 + 64 = 100]]. Ardından hipotenüsü bulmak için karekök alın: [[c = \\sqrt{100} = 10]] cm. Sonra ikiye bölün: [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "<a href=\"/pythagorean-theorem-calculator/\">Pisagor teoremi hesaplayıcı</a>, iki dik kenardan eksik hipotenüsü bulur; bu, burada kullanılan ilk adımla aynıdır. <a href=\"/right-triangle-area-calculator/\">Dik üçgen alan hesaplayıcı</a>, aynı iki dik kenarı farklı bir biçimde kullanır ve [[A = \\frac{ab}{2}]] değerini hesaplar; bu, 6-8-10 üçgeni için 24 santimetrekaredir.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Çevrel Yarıçap ile Çap Arasındaki İlişki",
          "blocks": [
            {
              "kind": "p",
              "text": "Yarıçap ve çap, aynı çemberi iki biçimde tanımlar. Çap [[D]], çemberin merkezinden geçerek bir uçtan diğer uca olan uzaklıktır ve yarıçap [[R]], merkezden kenara olan uzaklıktır, yani [[D = 2R]] ve [[R = \\frac{D}{2}]] olur. Yarıçapı iki katına çıkarmak çapı verir ve çapı ikiye bölmek yarıçapı verir.",
            },
            {
              "kind": "p",
              "text": "Dik üçgen için çapın ikinci bir kimliği vardır: hipotenüse eşittir. Hipotenüs, çevrel çember boyunca bir yandan diğer yana, merkezden geçerek uzanır, yani [[D = c]] olur. İki ilişkiyi birleştirmek [[c = 2R]] ve [[R = \\frac{c}{2}]] sonucunu verir; bu, bu sayfanın üzerine kurulduğu formüldür.",
            },
            {
              "kind": "p",
              "text": "Sayısal bir örnek, üç uzunluğu da açık tutar. [[c = 18]] cm olan bir üçgende çap [[D = 18]] cm ve çevrel yarıçap [[R = 9]] cm'dir. 18 cm olan hipotenüs ile 18 cm olan çap, iki rolde ölçülen aynı doğrudur; 9 cm olan yarıçap ise o doğrunun yarısıdır.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Dik Üçgende Çevrel Yarıçap ve İç Yarıçap Karşılaştırması",
          "blocks": [
            {
              "kind": "p",
              "text": "Çevrel yarıçap ve iç yarıçap, dik üçgenin iki yarıçapıdır ve iki farklı çemberi tanımlar. Çevrel yarıçap [[R]], üç köşeden de geçen çevrel çemberin yarıçapıdır. İç yarıçap [[r]], üçgenin içinde yer alan ve üç kenara da dokunan iç teğet çemberin yarıçapıdır. Bir çember üçgeni çevreler, diğeri içinde yer alır.",
            },
            {
              "kind": "p",
              "text": "Dik üçgen için çevrel yarıçap [[R = \\frac{c}{2}]] iken iç yarıçap [[r = \\frac{a + b - c}{2}]] olur; burada [[a]] ve [[b]] dik kenarlardır ve [[c]] hipotenüstür. Çevrel yarıçap yalnızca hipotenüse ihtiyaç duyar; iç yarıçap üç kenarın üçüne de ihtiyaç duyar, çünkü iç teğet çemberin ne kadar sıkı oturduğu üçgenin yalnızca en uzun kenarına değil, şekline bağlıdır.",
            },
            {
              "kind": "p",
              "text": "Merkezler de farklıdır. Çevrel merkez, hipotenüsün orta noktasıdır ve üçgenin sınırındadır. İç merkez üçgenin içindedir, açıortayların kesiştiği yerdedir ve her kenardan [[r]] uzaklıktadır.",
            },
            {
              "kind": "p",
              "text": "Farkı sayılarla görmek için 6-8-10 üçgenini kullanın. Çevrel yarıçap [[R = \\frac{10}{2} = 5]] cm ve iç yarıçap [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm'dir.",
            },
            {
              "kind": "p",
              "text": "İç teğet çemberle ilgili problemler için [[r = \\frac{a + b - c}{2}]] formülünü doğrudan uygulayan <a href=\"/right-triangle-inradius-calculator/\">dik üçgen iç yarıçap hesaplayıcı</a> kullanın. <a href=\"/right-triangle-radius-calculator/\">Dik üçgen yarıçap hesaplayıcı</a>, ikisini karşılaştırmanız gerektiğinde her iki yarıçapı da tek sayfada kapsar.",
            },
          ],
          "table": {
            "headers": [
              "Özellik",
              "Çevrel Yarıçap R",
              "İç Yarıçap r",
            ],
            "rows": [
              [
                "Çember",
                "Çevrel çember",
                "İç teğet çember",
              ],
              [
                "Konum",
                "Üçgenin çevresinde",
                "Üçgenin içinde",
              ],
              [
                "Temas",
                "Köşelerden geçer",
                "Kenarlara teğettir",
              ],
              [
                "Dik üçgen formülü",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Merkez",
                "Çevrel merkez",
                "İç merkez",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "Köşelerden geçen çevrel çember ile kenarlara dokunan iç teğet çember yan yana, 6-8-10 üçgeni",
            "caption": "Üçgenin çevresindeki çevrel çember (R = 5 cm), içindeki iç teğet çember (r = 2 cm), 6-8-10 üçgeni.",
          },
        },
        "sec-pythagoras": {
          "h2": "Çevrel Yarıçap ile Pisagor Teoremi Arasındaki İlişki",
          "blocks": [
            {
              "kind": "p",
              "text": "Pisagor teoremi, dik üçgende [[a^2 + b^2 = c^2]] olduğunu söyler; burada [[a]] ve [[b]] dik kenarlardır ve [[c]] hipotenüstür. Dik kenarlar ile hipotenüs arasındaki bağlantıdır ve hipotenüs üzerinden çevrel yarıçapa da bir bağlantıdır.",
            },
            {
              "kind": "p",
              "text": "[[R = \\frac{c}{2}]] olduğundan ve teorem [[c = \\sqrt{a^2 + b^2}]] sonucunu verdiğinden, yerine koymak [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]] sonucunu verir. Bu birleşik formül, hipotenüsü ayrıca yazmadan çevrel yarıçapı iki dik kenardan tek adımda bulur. Dik kenarlar bölümündeki iki adımlı hesapla aynıdır, tek bir ifade olarak yazılmıştır.",
            },
            {
              "kind": "p",
              "text": "6-8-10 üçgeni ile kontrol edin. Dik kenarlar, hipotenüs için [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm sonucunu verir ve ikiye bölmek [[R = 5]] cm sonucunu verir. Pisagor teoremi hipotenüsü sağlar ve çevrel yarıçap formülü onu ikiye böler.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Çevrel Yarıçap Hesabınız Nasıl Doğrulanır?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dört bağımsız kontrol, neredeyse her hatayı yakalar. Her cevapta en az birini, problem önemliyse dördünü de uygulayın. Aşağıdaki örnekte baştan sona [[c = 10]] cm ve [[R = 5]] cm olan 6-8-10 üçgeni kullanılmıştır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 1: Çap İlişkisi",
            },
            {
              "kind": "p",
              "text": "Çevrel yarıçapı iki katına çıkarıp hipotenüsle karşılaştırın: [[2R = c]]. Burada [[2 \\times 5 = 10]] cm olur ve bu, c ile tam olarak eşleşir. Cevabınızı iki katına çıkarmak hipotenüsü vermiyorsa, ikiye bölme işlemi yanlış gitmiştir.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 2: Orta Nokta İlişkisi",
            },
            {
              "kind": "p",
              "text": "Çevrel merkez, hipotenüsün tam ortasında yer almalıdır. Hipotenüsün her iki ucundan merkeze kadar ölçün: her yarım [[R]] değerine eşit olmalıdır. Burada her yarım 5 cm'dir ve çevrel yarıçapla eşleşir. Orta noktada olmayan bir merkez, çevrel merkez değildir.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 3: Eşit Uzaklıklar",
            },
            {
              "kind": "p",
              "text": "[[OA = OB = OC = R]] eşitliğini doğrulayın. Merkez, üç köşeye de aynı uzaklıkta olmalıdır. 6-8-10 üçgeninde her uzaklık 5 cm'dir. Dik açılı köşeye olan uzaklık, hipotenüs uçlarına olan uzaklıktan farklıysa merkez veya yarıçap yanlıştır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 4: Pisagor Teoremi",
            },
            {
              "kind": "p",
              "text": "Dik kenarlar bilindiğinde [[a^2 + b^2 = c^2]] eşitliğini doğrulayın ve ortaya çıkan hipotenüsü [[2R]] ile karşılaştırın. Burada [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]] olur, yani [[c = 10]] cm'dir ve [[2R = 10]] cm değeriyle uyuşur. Bu kontrol, üçgenin tamamını test eder, bu yüzden ilk kontrolün kaçırabileceği etiketleme hatalarını yakalar.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Dik Üçgenlerde Çevrel Yarıçapın Önemli Özellikleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Dokuz özellik doğrudan [[R = \\frac{c}{2}]] eşitliğinden çıkar. Her biri, yeni bir cevap için aynı zamanda bir sağduyu kontrolüdür.",
            },
            {
              "kind": "list",
              "items": [
                "Çevrel yarıçap, hipotenüsün tam olarak yarısıdır, [[R = \\frac{c}{2}]]; bunda hiçbir yaklaşıklık yoktur.",
                "Hipotenüs, çevrel çemberin çapıdır, yani [[D = c]] ve [[c = 2R]] olur.",
                "Çevrel merkez, hipotenüsün orta noktasında, üçgenin en uzun kenarı üzerindedir.",
                "Çevrel yarıçap, yozlaşmamış bir üçgen için her zaman pozitiftir, çünkü hipotenüs pozitif bir uzunluktur.",
                "Çevrel yarıçap hipotenüsün yarısına eşittir ve hipotenüs en uzun kenar olduğundan çevrel yarıçap hipotenüsten küçüktür. Belirli bir dik kenardan büyük mü yoksa küçük mü olduğu üçgene bağlıdır: 6-8-10 üçgeninde [[R = 5]] cm, 8 cm olan dik kenardan küçüktür; 5-12-13 üçgeninde ise [[R = 6.5]] cm, 5 cm olan dik kenardan büyüktür.",
                "Hipotenüsü artırmak, çevrel yarıçapı orantılı olarak artırır, çünkü [[R]], [[c]] değerinin yarısıdır.",
                "Hipotenüsü iki katına çıkarmak çevrel yarıçapı iki katına çıkarır: [[c]] değeri [[2c]] olursa [[R]] değeri [[c]] olur.",
                "Hipotenüs zaten biliniyorsa dik kenarlara gerek yoktur; formül yalnızca [[c]] değerini kullanır.",
                "Üç köşe de çevrel merkezden eşit uzaklıktadır: [[AO = BO = CO = R]].",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Çevrel Yarıçap Hesaplarken Yapılan Yaygın Hatalar",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Hipotenüs yerine dik kenar girmek: bir dik kenarı ikiye bölmek çevrel yarıçapı değil, dik kenarın yarısını verir. 6-8-10 üçgeninde 6 cm'yi ikiye bölmek 3 cm verir, oysa gerçek çevrel yarıçap 5 cm'dir.",
                "İkiye bölmeyi unutmak: hipotenüsü cevap olarak bildirmek yarıçapı değil, çapı verir. [[c = 10]] cm ise cevap 10 cm değil, 5 cm'dir.",
                "Hipotenüsü yarıçap sanmak: bu, aynı hatanın diğer yönden görünüşüdür. Hipotenüs çemberin tüm genişliğini kapsar, bu yüzden çaptır ve yarıçap onun yarısıdır.",
                "Çevrel yarıçapı iç yarıçapla karıştırmak: 6-8-10 üçgeninin iç yarıçapı 2 cm, çevrel yarıçapı ise 5 cm'dir. İki çember farklıdır ve formülleri de farklıdır.",
                "Çevrel merkezi dik açılı köşeyle karıştırmak: çevrel merkez hipotenüsün orta noktasıdır, C köşesi değildir. C köşesi çember üzerinde, merkezden [[R]] uzaklıkta bir noktadır.",
                "Merkezin her zaman bir üçgenin içinde olduğunu varsaymak: dik üçgende çevrel merkez hipotenüs üzerinde yer alır ve geniş açılı üçgende dışarıda yer alır.",
                "Formülü rastgele bir üçgende kullanmak: [[R = \\frac{c}{2}]] yalnızca dik üçgenler için geçerlidir. Genel bir üçgen için [[R = \\frac{abc}{4A}]] formülünü kullanın; burada [[A]] alandır.",
                "Ölçü birimlerini karıştırmak: metre cinsinden bir hipotenüs ile santimetre cinsinden bildirilen bir cevap 100 kat farklıdır. Önce dönüştürün, sonra ikiye bölün.",
                "Sıfır veya negatif hipotenüs değerleri kullanmak: gerçek bir üçgende uzunluk sıfır veya negatif olamaz. Sıfır veya negatif bir giriş, ölçümün yanlış olduğu anlamına gelir.",
                "Çap ile yarıçapı karıştırmak: çap, yarıçapın iki katıdır. Cevabınız beklenen değerin iki katıysa muhtemelen [[R]] yerine [[D]] değerini bildirdiniz.",
                "Çevrel çemberin üç kenara da dokunduğunu varsaymak: çevrel çember köşelerden geçer ve üçgene yalnızca o üç noktada dokunur. Kenarlara dokunan çember iç teğet çemberdir.",
                "Çemberin üç köşeden de geçtiğini unutmak: üçü de üzerinde yer almalıdır; [[OA = OB = OC]] eşitliğinin garanti ettiği tam olarak budur.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Çevrel Yarıçapın Pratik Uygulamaları",
          "blocks": [
            {
              "kind": "p",
              "text": "En doğrudan kullanım, geometri ödevleri ve sınıf çalışmalarıdır; burada çevrel yarıçap problemleri, öğrencilerin hipotenüsü belirleyip daha karmaşık bir formüle uzanmak yerine [[R = \\frac{c}{2}]] formülünü uygulayıp uygulayamadığını test eder. Çember çizimi alıştırmaları da aynı fikri kullanır: bir dik üçgen verildiğinde, hipotenüsü ikiye bölüp pergeli o yarıçapa ayarlayarak çevrel çemberini çizin.",
            },
            {
              "kind": "p",
              "text": "Teknik çizim, bir dik üçgenin dairesel bir çerçeveye yerleştirilmesi gerektiğinde veya dairesel bir yayın verilen üç noktadan geçmesi gerektiğinde bu ilişkiyi kullanır. Geometrik modelleme ve koordinat geometrisi, bir üçgenin çevrel merkezini hipotenüsünün orta noktasına yerleştirmek için aynı gerçeği kullanır.",
            },
            {
              "kind": "p",
              "text": "Öğretmenler bu konuyu üçgenler ile çemberler arasında bir köprü dersi olarak kullanır, çünkü iki konunun buluştuğu ilk yerlerden biridir. Thales teoremi, orta nokta özelliği ve yarıçap çap ilişkisi tek bir resimde görünür, bu yüzden çevrel yarıçap onları birlikte gözden geçirmenin özlü bir yoludur.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Cevaplı Alıştırma Problemleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Cevapları okumadan önce altı problemin altısını da kağıt üzerinde deneyin. Değerlerin hiçbiri çözümlü örnekleri tekrarlamaz ve her çözüm aşağıda tam olarak verilmiştir.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: Temel Tam Sayı",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin hipotenüsü [[c = 26]] cm'dir. Çevrel yarıçap [[R]] değerini bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Ondalık Hipotenüs",
            },
            {
              "kind": "p",
              "text": "[[c = 9.4]] m verildiğinde, çevrel yarıçap [[R]] değerini metre cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Kesirli Ölçüm",
            },
            {
              "kind": "p",
              "text": "[[c = \\frac{9}{4}]] ft verildiğinde, [[R]] değerini önce kesir olarak, sonra ondalık olarak bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 4: Birim Dönüşümü",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin hipotenüsü [[c = 240]] cm'dir. Çevrel yarıçapı metre cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: İki Dik Kenardan Hipotenüsü Bulma",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin dik kenarları [[a = 9]] cm ve [[b = 12]] cm'dir. Önce hipotenüsü, sonra çevrel yarıçapı bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Çevrel Yarıçap mı, İç Yarıçap mı?",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin dik kenarları 5 cm ve 12 cm, hipotenüsü 13 cm'dir. Hem çevrel yarıçap [[R]] hem de iç yarıçap [[r]] değerini bulun ve her birinin hangi çembere ait olduğunu belirtin.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Problemlerinin Cevapları",
            },
            {
              "kind": "p",
              "text": "Cevap 1: [[R = \\frac{26}{2} = 13]] cm. Kontrol: [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 2: [[R = \\frac{9.4}{2} = 4.7]] m. Kontrol: [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Cevap 3: [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, yani 1.125 ft. İkiye bölmek, paydayı 4'ten 8'e iki katına çıkarır.",
            },
            {
              "kind": "p",
              "text": "Cevap 4: [[R = \\frac{240}{2} = 120]] cm ve 120 cm, 1.2 m'ye eşittir, çünkü 100 cm, 1 m'dir.",
            },
            {
              "kind": "p",
              "text": "Cevap 5: [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, ardından [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 6: Çevrel yarıçap çevrel çembere aittir, [[R = \\frac{13}{2} = 6.5]] cm ve iç yarıçap iç teğet çembere aittir, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Çevrel çember köşelerden geçer; iç teğet çember kenarlara dokunur.",
            },
          ],
        },
      },
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "relatedIntro": "Aşağıdaki hesaplayıcıların her biri tek bir dik üçgen görevini yerine getirir, bu yüzden bulmanız gereken ölçüme uyan aracı seçin.",
      "relatedItems": [
        "Dik Üçgen Yarıçap Hesaplayıcı",
        "Dik Üçgen İç Yarıçap Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
        "Dik Üçgen Alan Hesaplayıcı",
        "Pisagor Teoremi Hesaplayıcı",
      ],
      "faqHeading": "Sık Sorulan Sorular",
      "faqs": [
        {
          "question": "Dik üçgenin çevrel yarıçap formülü nedir?",
          "answer": "Formül [[R = \\frac{c}{2}]] şeklindedir; burada [[R]] çevrel yarıçaptır ve [[c]] hipotenüstür. Dik açının karşısındaki kenarı belirleyin, ardından uzunluğunu ikiye bölün. Örneğin, 10 cm hipotenüs 5 cm çevrel yarıçap verir.",
        },
        {
          "question": "Hipotenüs neden çevrel çemberin çapıdır?",
          "answer": "Hipotenüsün orta noktası üç köşeye de eşit uzaklıktadır, bu yüzden çevrel merkezdir. Hipotenüs, iki ucu da çember üzerinde olacak şekilde o merkezden geçer; bu, çapın tanımıdır. Onu ikiye bölmek bu nedenle yarıçapı verir.",
        },
        {
          "question": "Dik üçgenin çevrel merkezi nerededir?",
          "answer": "Çevrel merkez, hipotenüsün orta noktasında, üçgenin en uzun kenarı üzerindedir. Üç köşeye de eşit uzaklıktadır: [[AO = BO = CO = R]]. Dik açılı köşe değildir; o, çember üzerinde bir noktadır.",
        },
        {
          "question": "Çevrel yarıçap ne anlama gelir?",
          "answer": "Çevrel yarıçap, üçgenin üç köşesinden de geçen çember olan çevrel çemberin yarıçapı anlamına gelir. Çevrel merkezden herhangi bir köşeye olan uzaklıktır. Dik üçgende hipotenüsün yarısına eşittir.",
        },
        {
          "question": "Çevrel yarıçapı hesaplamak için iki dik kenara da ihtiyacım var mı?",
          "answer": "Hayır. Yalnızca hipotenüs yeterlidir, çünkü [[R = \\frac{c}{2}]]. Dik kenarlar yalnızca hipotenüs bilinmediğinde gereklidir; bu durumda önce [[c = \\sqrt{a^2 + b^2}]] ile hipotenüsü bulun, ardından ikiye bölün. Bu yüzden bu hesaplayıcı yalnızca tek bir değer ister ve her hesabı kısa ve basit tutar.",
        },
        {
          "question": "Çevrel yarıçap hipotenüsün yarısı mıdır?",
          "answer": "Evet, dik üçgen için her zaman. Hipotenüs çevrel çemberin çapıdır ve yarıçap çapın yarısıdır, yani [[R = \\frac{c}{2}]]. Çevrel yarıçapı iki katına çıkarmak her zaman hipotenüsü geri verir. Örneğin, 14 cm hipotenüs 7 cm çevrel yarıçap verir ve 7 cm'yi iki katına çıkarmak 14 cm'yi geri verir.",
        },
        {
          "question": "Çevrel yarıçap iç yarıçapla aynı mıdır?",
          "answer": "Hayır. Çevrel yarıçap, köşelerden geçen çemberin yarıçapıdır, [[R = \\frac{c}{2}]]; iç yarıçap ise üçgenin içinde kenarlara dokunan çemberin yarıçapıdır, [[r = \\frac{a + b - c}{2}]]. 6-8-10 üçgeninde bunlar 5 cm ve 2 cm'dir.",
        },
        {
          "question": "Çevrel merkez bir üçgenin dışında yer alabilir mi?",
          "answer": "Evet, geniş açılı bir üçgende çevrel merkez dışarıda yer alır. Dar açılı bir üçgende içeride yer alır. Dik üçgen sınır durumudur: çevrel merkezi hipotenüs üzerinde, tam orta noktasındadır. Yani merkez, dik üçgenin üçgensel bölgesinin içinde hiçbir zaman yer almaz, ancak üçgenin dışında da hiçbir zaman yer almaz.",
        },
        {
          "question": "Thales teoremi çevrel yarıçapla nasıl ilişkilidir?",
          "answer": "Thales teoremi, bir çapın gördüğü açının dik açı olduğunu söyler ve teoremin tersi, dik üçgenin hipotenüsünün bir çap olduğunu söyler. Bu, hipotenüsün orta noktasını merkez ve hipotenüsün yarısını yarıçap yapar.",
        },
        {
          "question": "Çevrel yarıçapı iki dik kenarı kullanarak bulabilir miyim?",
          "answer": "Evet. Önce [[c = \\sqrt{a^2 + b^2}]] ile hipotenüsü bulun, ardından ikiye bölün: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. 6 cm ve 8 cm dik kenarlar için hipotenüs 10 cm ve çevrel yarıçap 5 cm'dir. Herhangi bir dik kenar çifti için aynı iki adımı kullanın ve sonucu çap testiyle kontrol edin.",
        },
        {
          "question": "Hipotenüs iki katına çıkarsa ne olur?",
          "answer": "Çevrel yarıçap da iki katına çıkar, çünkü [[R]], [[c]] değerinin yarısıdır. 10 cm hipotenüs [[R = 5]] cm veriyorsa, 20 cm hipotenüs [[R = 10]] cm verir. İlişki doğru orantılıdır, bu yüzden hipotenüsü üç katına çıkarmak çevrel yarıçapı da üç katına çıkarır.",
        },
        {
          "question": "Çevrel çember üç köşeden de geçer mi?",
          "answer": "Evet. Çevrel çemberin tanımı budur: üçgenin her köşesinden geçen bir çember. Dik üçgende merkez hipotenüsün orta noktasıdır ve her köşe ondan tam olarak [[R]] uzaklıktadır.",
        },
      ],
    },
};
