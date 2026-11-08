// similarTrianglesGuideTranslations.btr.ts: Similar Right Triangles
// Guide (Page 45 of 45) translation.
export const SIMILARTRIANGLES_B6_TR = {
  "tr": {
      "meta": {
        "title": "Benzer Dik Üçgenler Hesaplayıcı | Ölçek Faktörünü Bulun",
        "description": "Benzer dik üçgenlerin ölçek faktörünü, eksik karşılık gelen kenarlarını ve orijinal kenar uzunluklarını adım adım çözümlü örneklerle bulun. Şimdi deneyin.",
        "primaryKeyword": "Benzer Dik Üçgenler Hesaplayıcı",
        "slug": "similar-right-triangles-calculator",
      },
      "tocHeading": "Bölüm Gezintisi",
      "tocItems": {
        "sec-intro": "Benzer Dik Üçgenler Hesaplayıcı",
        "sec-calculate": "Hesaplayıcıyla Benzer Üçgen Ölçülerini Hesaplayın",
        "sec-what": "Benzer Dik Üçgenler Nedir?",
        "sec-similar-rule": "İki Dik Üçgeni Benzer Yapan Nedir?",
        "sec-corresponding": "Benzer Dik Üçgenlerde Karşılık Gelen Kenarları Anlamak",
        "sec-scale-factor": "Benzer Üçgenlerde Ölçek Faktörü Nedir?",
        "sec-formula-k": "Ölçek Faktörünü Bulma Formülü",
        "sec-formula-similar": "Eksik Benzer Kenarı Bulma Formülü",
        "sec-formula-original": "Orijinal Kenarı Bulma Formülü",
        "sec-enlarge": "Büyütme ve Küçültmeyi Anlamak",
        "sec-proportions": "Benzer Dik Üçgenler Arasında Orantı Nasıl Kurulur",
        "sec-check-similar": "İki Dik Üçgenin Benzer Olup Olmadığı Nasıl Kontrol Edilir",
        "sec-worked": "Benzer Dik Üçgenler Hesaplayıcısıyla Çözümlü Örnekler",
        "sec-pythagoras": "Benzer Üçgenler ile Pisagor Teoremi Arasındaki İlişki",
        "sec-perimeter-area": "Benzer Üçgenlerde Çevre ve Alan İlişkileri",
        "sec-similar-vs-congruent": "Benzer ve Eş Dik Üçgenler Arasındaki Fark",
        "sec-applications": "Benzer Dik Üçgenlerin Gerçek Hayattaki Uygulamaları",
        "sec-mistakes": "Benzer Dik Üçgen Problemlerini Çözerken Yapılan Yaygın Hatalar",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları",
        "sec-faq": "Sıkça Sorulan Sorular",
      },
      "sections": {
        "sec-intro": {
          "h2": "Benzer Dik Üçgenler Hesaplayıcı",
          "blocks": [
            {
              "kind": "p",
              "text": "Benzer dik üçgenlerin ölçek faktörlerini ve eksik kenarlarını bulun.",
            },
            {
              "kind": "p",
              "text": "İki dik üçgen, karşılık gelen açıları eşit ve karşılık gelen kenarları orantılı olduğunda benzerdir. Boyutları farklı olsa bile aynı şekli korurlar, çünkü ikisi de 90° açısı içerir ve dar açıları eşleşir. Bir üçgen ölçeklendiğinde açılar asla değişmez; yalnızca kenar uzunlukları büyür veya küçülür.",
            },
            {
              "kind": "p",
              "text": "[[[k=\\frac{18}{6}=3]]]",
            },
            {
              "kind": "p",
              "text": "Benzer Dik Üçgenler Hesaplayıcı üç mod sunar. Ölçek Faktörünü Bul modu, eşleşen bir kenar çiftini karşılaştırır. Eksik Benzer Kenarı Bul modu, orijinal kenarı [[k]] ile çarpar. Orijinal Kenarı Bul modu, benzer kenarı [[k]] değerine böler. Orijinal kenarı [[6]] ve eşleşen benzer kenarı [[18]] olan bir üçgen alın: ölçek faktörü [[3]] tür, yani benzer üçgen her doğrusal boyutta üç kat büyüktür, buna karşılık her açı tamamen aynı kalır.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Hesaplayıcıyla Benzer Üçgen Ölçülerini Hesaplayın",
          "blocks": [
            {
              "kind": "p",
              "text": "Bir mod seçin, iki değer girin ve formüle dayalı sonucu okuyun.",
            },
            {
              "kind": "h3",
              "text": "Mod 1: Ölçek Faktörünü Bul",
            },
            {
              "kind": "p",
              "text": "Orijinal kenar uzunluğunu ve eşleşen benzer kenar uzunluğunu girin. Hesaplayıcı, benzer kenarı orijinal kenara böler ve orijinal üçgenden benzer üçgene giden ölçek faktörü [[k]] değerini bildirir.",
            },
            {
              "kind": "p",
              "text": "[[[k=\\frac{\\text{Similar Side}}{\\text{Original Side}}]]]",
            },
            {
              "kind": "h3",
              "text": "Mod 2: Eksik Benzer Kenarı Bul",
            },
            {
              "kind": "p",
              "text": "Orijinal kenar uzunluğunu ve ölçek faktörü [[k]] değerini girin. Hesaplayıcı, orijinal kenarı [[k]] ile çarpar ve benzer üçgenin eşleşen kenarını bildirir.",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{\\text{Similar Side}=\\text{Original Side}\\times k}]]]",
            },
            {
              "kind": "h3",
              "text": "Mod 3: Orijinal Kenarı Bul",
            },
            {
              "kind": "p",
              "text": "Benzer kenar uzunluğunu ve ölçek faktörü [[k]] değerini girin. Hesaplayıcı, benzer kenarı [[k]] değerine böler ve orijinal üçgenin eşleşen kenarını bildirir. Bölme, ölçeklendirmeyi tersine çevirir, bu nedenle bu mod büyütülmüş veya küçültülmüş bir ölçüden geriye doğru çalışır.",
            },
            {
              "kind": "p",
              "text": "Bilinen değerlerinize uyan modu seçin, ardından girdiğiniz iki kenarın gerçekten karşılık geldiğini kontrol edin: kısa dik kenar ile kısa dik kenar, uzun dik kenar ile uzun dik kenar, hipotenüs ile hipotenüs. Aynı birimde pozitif sayılar girin, Hesapla düğmesine tıklayın ve sonucu adım adım çözümüyle birlikte okuyun. Alanları temizlemek ve yeni bir hesaplamaya başlamak için Sıfırla düğmesine tıklayın.",
            },
          ],
        },
        "sec-what": {
          "h2": "Benzer Dik Üçgenler Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Benzer dik üçgenler şekli paylaşır, ancak boyutu paylaşmak zorunda değildir.",
            },
            {
              "kind": "p",
              "text": "İki dik üçgen, karşılık gelen açıları eşit ve karşılık gelen kenar uzunlukları orantılı olduğunda benzerdir. İkisi de 90° açısı içerir ve dar açıları çiftler hâlinde eşleşir, bu nedenle üçgenler tam olarak aynı şekle sahiptir. Boyutları farklı olabilir: biri diğerinin iki katı büyüklüğünde, yarısı büyüklüğünde veya herhangi bir pozitif katı olabilir.",
            },
            {
              "kind": "p",
              "text": "3-4-5 üçgeni ile 6-8-10 üçgenini alın. Kısa dik kenarlar [[3]] ve [[6]], uzun dik kenarlar [[4]] ve [[8]], hipotenüsler ise [[5]] ve [[10]] dir. Her oran [[2]] ye eşittir:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{6}{3}=\\frac{8}{4}=\\frac{10}{5}=2]]]",
            },
            {
              "kind": "p",
              "text": "Üç oran da aynı olduğundan üçgenler, ölçek faktörü [[k=2]] ile benzerdir. İki üçgeni karşılaştırmak yerine tek bir dik üçgenin eksik kenarına ihtiyacınız varsa bunun yerine <a href=\"/right-triangle-side-calculator/\">dik üçgen kenar hesaplayıcı</a> kullanın.",
            },
          ],
          "image": {
            "src": "similar-triangles-two.svg",
            "alt": "Eşleşen dik açıları ve etiketlenmiş karşılık gelen kenarlarıyla 3-4-5 ve 6-8-10 benzer dik üçgenleri",
            "caption": "3-4-5 ve 6-8-10 üçgenleri, ölçek faktörü 2 ile benzerdir.",
          },
        },
        "sec-similar-rule": {
          "h2": "İki Dik Üçgeni Benzer Yapan Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Eşleşen tek bir dar açı, dik üçgenler arasında benzerliği kanıtlamaya yeter.",
            },
            {
              "kind": "p",
              "text": "Açı-Açı (AA) kuralı, iki üçgenin karşılık gelen iki açı çifti eşit olduğunda benzer olduğunu söyler. Dik üçgenlerde ilk çift bedavadır: ikisi de 90° açısı içerir. Geriye kontrol edilecek yalnızca bir dar açı kalır. Bir dar açı eşleşirse üçüncü açılar da eşleşmek zorundadır, çünkü herhangi bir üçgenin açıları toplamı 180° dir.",
            },
            {
              "kind": "p",
              "text": "30°-60°-90° üçgenini, farklı boyutta başka bir 30°-60°-90° üçgeniyle karşılaştırın. Dik açılar eşleşir, 30° açılar eşleşir ve kalan açılar ikisi de 60° dir, çünkü [[180^\\circ-90^\\circ-30^\\circ=60^\\circ]]. AA kuralı, kenar uzunlukları ne olursa olsun benzerliği garanti eder.",
            },
            {
              "kind": "p",
              "text": "Eşit açılar orantılı kenarları zorunlu kılar, bu nedenle ölçek faktörü her karşılık gelen çift için aynıdır. Kural her boyutta çalışır: küçük bir 30°-60°-90° üçgeni ile büyük bir üçgen, tam olarak aynı nedenle benzerdir.",
            },
          ],
          "image": {
            "src": "similar-triangles-aa.svg",
            "alt": "90 derecelik açıları ve eşleşen 30 derecelik dar açılarıyla AA benzerliğini gösteren iki dik üçgen",
            "caption": "İki üçgenin de 90° ve 30° açıları vardır, bu nedenle AA kuralı onları benzer yapar.",
          },
        },
        "sec-corresponding": {
          "h2": "Benzer Dik Üçgenlerde Karşılık Gelen Kenarları Anlamak",
          "blocks": [
            {
              "kind": "p",
              "text": "Karşılık gelen kenarlar, eşit açılara göre eşleşen konumlarda yer alır.",
            },
            {
              "kind": "p",
              "text": "Karşılık gelen kenarlar, her üçgende eşit açılara göre aynı konumu işgal eden kenarlardır. Bir üçgenin kısa dik kenarı diğer üçgenin kısa dik kenarına karşılık gelir, uzun dik kenar uzun dik kenarla eşleşir ve hipotenüs hipotenüsle eşleşir. ABC üçgeni ve benzer DEF üçgeninde, köşeler eşleşen sırada etiketlendiğinde karşılık gelen kenarlar [[AB \\leftrightarrow DE]], [[BC \\leftrightarrow EF]] ve [[AC \\leftrightarrow DF]] biçiminde okunur.",
            },
            {
              "kind": "p",
              "text": "Yanlış kenarları eşleştirmek, benzerlik problemlerindeki en yaygın hatadır. Bir hipotenüsü bir dik kenara bölmek iki farklı konumu karıştırır, bu nedenle oran hiçbir anlam taşımaz ve cevap yanlış olur. Önce her zaman karşılığı belirleyin: açıları karşılaştırın, eşleşen köşeleri etiketleyin ve ancak ondan sonra bölün.",
            },
            {
              "kind": "p",
              "text": "Güvenilir bir kontrol boyut sırasıdır: bir üçgenin en uzun kenarı her zaman diğer üçgenin en uzun kenarına karşılık gelir ve en kısası en kısasına karşılık gelir. Kenar oranlarının tümü aynı çıktığında eşleştirme doğrudur.",
            },
          ],
          "image": {
            "src": "similar-triangles-corresponding.svg",
            "alt": "Eşleşen renklerle karşılık gelen kenarları işaretlenmiş ABC ve DEF üçgenleri: AB ile DE, BC ile EF ve AC ile DF",
            "caption": "Eşleşen renkler, ABC ve DEF üçgenlerinde karşılık gelen kenarları işaretler.",
          },
        },
        "sec-scale-factor": {
          "h2": "Benzer Üçgenlerde Ölçek Faktörü Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ölçek faktörü k, her kenarın ne kadar büyüdüğünü veya küçüldüğünü söyler.",
            },
            {
              "kind": "p",
              "text": "Ölçek faktörü [[k]], benzer bir kenarın eşleşen orijinal kenara oranıdır. Orijinal üçgenden benzer üçgene giden değişimi tanımlar ve her karşılık gelen çifte aynı anda uygulanır.",
            },
            {
              "kind": "p",
              "text": "[[[k=\\frac{\\text{Similar Side}}{\\text{Original Side}}]]]",
            },
            {
              "kind": "p",
              "text": "[[k=1]] olduğunda üçgenler aynı boyuttadır ve aynı zamanda eştir. [[k]] değeri [[1]] değerinden büyük olduğunda benzer üçgen daha büyüktür: [[k=2]] her kenarı iki katına çıkarır ve [[k=3]] her kenarı üç katına çıkarır. [[k]] değeri [[0]] ile [[1]] arasında olduğunda benzer üçgen daha küçüktür: [[k=0.5]] her kenarı yarıya indirir ve [[k=0.25]] her kenarı dörtte birine indirir. Ölçek faktörü her zaman pozitif olmalıdır, çünkü sıfır faktörü üçgeni çökertir ve negatif faktörün bir uzunluk değişimi olarak hiçbir anlamı yoktur.",
            },
            {
              "kind": "p",
              "text": "Ölçeklendirme açıları asla değiştirmez. [[k=3]] ile büyütülmüş bir üçgen aynı dar açıları korur, bu nedenle şekli değişmez; yalnızca ölçüler büyür. Aşağıdaki tablo ana durumları özetler.",
            },
          ],
          "table": {
            "headers": [
              "Ölçek faktörü",
              "Kenar uzunluklarına etkisi",
            ],
            "rows": [
              [
                "[[k=1]]",
                "Aynı boyut, eş",
              ],
              [
                "[[k>1]]",
                "Daha büyük üçgen",
              ],
              [
                "[[0<k<1]]",
                "Daha küçük üçgen",
              ],
              [
                "[[k=2]]",
                "Her kenar iki katına çıkar",
              ],
              [
                "[[k=0.5]]",
                "Her kenar yarıya iner",
              ],
            ],
          },
        },
        "sec-formula-k": {
          "h2": "Ölçek Faktörünü Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "k değerini bulmak için benzer kenarı orijinal kenara bölün.",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{k=\\frac{\\text{Similar Side}}{\\text{Original Side}}}]]]",
            },
            {
              "kind": "p",
              "text": "Orijinal kenarı [[5]] ve eşleşen benzer kenarı [[15]] olan bir üçgen alın. Ölçek faktörü [[k=15/5=3]] tür, yani benzer üçgen doğrusal boyutlarda üç kat büyüktür. Aynı hesap her karşılık gelen çiftle çalışır: hipotenüsler, kenarlar gerçekten karşılık geldiği sürece dik kenarlarla aynı [[k]] değerini verir.",
            },
            {
              "kind": "p",
              "text": "Yön önemlidir. Orijinal kenarı benzer kenara bölmek, ters yöndeki ölçeklendirmeyi tanımlayan tersi [[1/k]] değerini verir. Hesaplayıcı için benzer kenarı her zaman üste, orijinal kenarı alta koyun.",
            },
            {
              "kind": "p",
              "text": "Bu iş için hesaplayıcının Mod 1 bölümünü kullanın: eşleşen iki uzunluğu girin, Hesapla düğmesine tıklayın ve bölmenin adım adım gösterildiği [[k]] değerini okuyun.",
            },
          ],
          "image": {
            "src": "similar-triangles-scale-factor.svg",
            "alt": "Orijinal kenar 6 ve benzer kenar 18; k eşittir 18 bölü 6 eşittir 3 olduğunu gösteren bir ok",
            "caption": "Orijinal kenar 6 ve benzer kenar 18, k = 18 / 6 = 3 sonucunu verir.",
          },
        },
        "sec-formula-similar": {
          "h2": "Eksik Benzer Kenarı Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Eşleşen benzer kenarı bulmak için orijinal kenarı k ile çarpın.",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{\\text{Similar Side}=\\text{Original Side}\\times k}]]]",
            },
            {
              "kind": "p",
              "text": "Orijinal kenarı [[7]] ve ölçek faktörü [[k=2.5]] olan bir üçgen alın. Eşleşen benzer kenar [[7\\times2.5=17.5]] tir. Çarpma, orijinal üçgenden ölçeklenmiş üçgene doğru ilerler, bu nedenle sonuç büyütülmüş şekildeki karşılık gelen kenardır.",
            },
            {
              "kind": "p",
              "text": "Aynı formül küçültmeleri de çözer. Orijinal kenarı [[10]] ve [[k=0.4]] olduğunda benzer kenar [[10\\times0.4=4]] tür. [[1]] değerinden küçük bir ölçek faktörü yine çarpma kullanır; yalnızca sonuç başlangıç kenarından küçüktür.",
            },
            {
              "kind": "p",
              "text": "Cevabı geri bölerek kontrol edin: [[17.5/7=2.5]] ölçek faktörünü geri verir ve bu, çarpmanın doğru kurulduğunu doğrular. Bu iş için hesaplayıcının Mod 2 bölümünü kullanın; orijinal kenarı ve [[k]] değerini aynı birimde girin.",
            },
          ],
          "image": {
            "src": "similar-triangles-missing-side.svg",
            "alt": "Orijinal kenar 8, ölçek faktörü 2.5 ile çarpılarak eksik benzer kenar 20 elde ediliyor",
            "caption": "Orijinal kenar 8 çarpı k = 2.5, benzer kenar 20 sonucunu verir.",
          },
        },
        "sec-formula-original": {
          "h2": "Orijinal Kenarı Bulma Formülü",
          "blocks": [
            {
              "kind": "p",
              "text": "Orijinal kenarı geri bulmak için benzer kenarı k değerine bölün.",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{\\text{Original Side}=\\frac{\\text{Similar Side}}{k}}]]]",
            },
            {
              "kind": "p",
              "text": "Benzer kenarı [[24]] ve ölçek faktörü [[k=3]] olan bir üçgen alın. Orijinal kenar [[24/3=8]] dir. Bölme, çarpmayı tersine çevirir: benzer kenar, orijinal kenarın [[3]] ile çarpılmasıyla oluştu, bu nedenle [[3]] e bölmek ölçeklendirmeyi geri alır.",
            },
            {
              "kind": "p",
              "text": "Ondalıklı ölçek faktörleri de aynı şekilde çalışır. Benzer kenarı [[21]] ve [[k=1.5]] olduğunda orijinal kenar [[21/1.5=14]] tür. Birimleri tutarlı tutun ve sonucu geri çarparak kontrol edin: [[14\\times1.5=21]].",
            },
            {
              "kind": "p",
              "text": "Bu iş için hesaplayıcının Mod 3 bölümünü kullanın; benzer kenarı ve [[k]] değerini girin. Ölçeklenmiş bir çizim veya model size bir ölçü verdiğinde ve arkasındaki gerçek boyuta ihtiyacınız olduğunda başvurulacak mod budur.",
            },
          ],
          "image": {
            "src": "similar-triangles-original-side.svg",
            "alt": "Benzer kenar 15, ölçek faktörü 3 e bölünerek orijinal kenar 5 elde ediliyor; ters yönlü bir ok var",
            "caption": "Benzer kenar 15 bölü k = 3, orijinal kenar 5 sonucunu verir.",
          },
        },
        "sec-enlarge": {
          "h2": "Büyütme ve Küçültmeyi Anlamak",
          "blocks": [
            {
              "kind": "p",
              "text": "1 değerinin üzerindeki bir ölçek faktörü büyütür; 1 değerinin altındaki küçültür.",
            },
            {
              "kind": "p",
              "text": "Büyütme ve küçültme, zıt yönlerde aynı işlemdir. Her kenarı [[k]] ile çarpmak üçgenin boyutunu değiştirirken açılar sabit kalır, bu nedenle şekil tam olarak korunur. Karşılaştırmanın yönü, [[k]] değerinin [[1]] değerinden büyük mü yoksa küçük mü olacağına karar verir: küçük bir üçgenden büyük bir üçgene gitmek [[k>1]] sonucunu, büyük bir üçgenden küçük bir üçgene gitmek [[k<1]] sonucunu verir.",
            },
            {
              "kind": "p",
              "text": "[[1]] ölçek faktörü üçgeni değiştirmeden bırakır, bu nedenle iki üçgen benzer olduğu kadar eştir de. [[k=0.5]] olduğunda her kenar yarıya iner ve [[k=2]] olduğunda her kenar iki katına çıkar, ancak dar açılar üç sürümde de aynıdır. Bu nedenle bir ölçekli çizim ile temsil ettiği gerçek nesne, çok farklı boyutlarda bile tamamen aynı görünebilir.",
            },
          ],
          "table": {
            "headers": [
              "Ölçek faktörü",
              "Etki",
            ],
            "rows": [
              [
                "[[0.25]]",
                "Dörtte bir boyut",
              ],
              [
                "[[0.5]]",
                "Yarı boyut",
              ],
              [
                "[[0.75]]",
                "Dörtte üç boyut",
              ],
              [
                "[[1]]",
                "Aynı boyut",
              ],
              [
                "[[1.5]]",
                "1,5 kat daha büyük",
              ],
              [
                "[[2]]",
                "İki kat büyük",
              ],
              [
                "[[3]]",
                "Üç kat büyük",
              ],
            ],
          },
          "image": {
            "src": "similar-triangles-enlarge-reduce.svg",
            "alt": "Ölçek faktörleri 0.5, 1 ve 2 olan üç benzer dik üçgen; küçültme, aynı boyut ve büyütmeyi gösteriyor",
            "caption": "0,5, 1 ve 2 ölçek faktörleri daha küçük, eşit ve daha büyük bir üçgen verir.",
          },
        },
        "sec-proportions": {
          "h2": "Benzer Dik Üçgenler Arasında Orantı Nasıl Kurulur",
          "blocks": [
            {
              "kind": "p",
              "text": "Tek bir orantı, karşılık gelen her kenar çiftini birbirine bağlar.",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{\\frac{a'}{a}=\\frac{b'}{b}=\\frac{c'}{c}=k}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[a]], [[b]] ve [[c]] orijinal üçgenin kenarları, [[a']], [[b']] ve [[c']] ise benzer üçgenin eşleşen kenarlarıdır. Orantı, üç oranın da aynı ölçek faktörü [[k]] değerine eşit olduğunu söyler. Bir oran diğerlerinden farklıysa ya kenarlar yanlış eşleştirilmiştir ya da üçgenler benzer değildir.",
            },
            {
              "kind": "p",
              "text": "3-4-5 ve 6-8-10 üçgenlerini kontrol edin: [[6/3=2]], [[8/4=2]] ve [[10/5=2]], yani [[k=2]] dir ve orantı sağlanır. Bir orantı, eksik bir kenarı da çözebilir. [[x/6=15/10]] olduğunu varsayın: sağ taraf [[1.5]] e eşittir, yani [[x=6\\times1.5=9]] olur. İçler dışlar çarpımı aynı sonucu verir ve hesaplayıcının eksik benzer kenar moduyla uyuşur; bu mod orijinal kenarı [[k]] ile çarpar.",
            },
            {
              "kind": "p",
              "text": "Orantılar, hesaplayıcı olmadan da bir benzerlik iddiasını test etmenizi sağlar: üç oranı elle hesaplayın ve üçünde de aynı çıkması ihtiyacınız olan kanıttır.",
            },
          ],
        },
        "sec-check-similar": {
          "h2": "İki Dik Üçgenin Benzer Olup Olmadığı Nasıl Kontrol Edilir",
          "blocks": [
            {
              "kind": "p",
              "text": "Altı kontrol, iki dik üçgenin benzer olup olmadığını doğrular.",
            },
            {
              "kind": "steps",
              "steps": [
                "İki üçgenin de dik üçgen olduğunu doğrulayın.",
                "Her üçgenin dar açılarını belirleyin.",
                "Karşılık gelen bir dar açının eşit olup olmadığını kontrol edin.",
                "Karşılık gelen kenarları eşleştirin: kısa dik kenarı kısa dik kenarla, uzun dik kenarı uzun dik kenarla, hipotenüsü hipotenüsle.",
                "Karşılık gelen kenar uzunluklarının oranlarını karşılaştırın.",
                "Ölçek faktörünün her çift için aynı olduğunu doğrulayın.",
              ],
            },
            {
              "kind": "p",
              "text": "3-4-5 ve 6-8-10 üçgenlerini test edin. İkisi de dik üçgendir ve dar açıları eşleşir, bu nedenle AA kuralı benzerliği zaten kurar. Kenar oranları bunu doğrular: [[6/3=2]], [[8/4=2]] ve [[10/5=2]]. Üç oran da aynıdır, yani [[k=2]] tutarlıdır.",
            },
            {
              "kind": "p",
              "text": "Eşit açılar ve tutarlı oranlar aynı sonuca giden iki yoldur. Açılar, AA yoluyla benzerliği kanıtlar, eşit oranlar ise bunu sayısal olarak doğrular. Testlerden biri başarısız olursa üçgenler benzer değildir ve hiçbir ölçek faktörü uygulanmaz.",
            },
          ],
        },
        "sec-worked": {
          "h2": "Benzer Dik Üçgenler Hesaplayıcısıyla Çözümlü Örnekler",
          "blocks": [
            {
              "kind": "p",
              "text": "Üç modu da kapsayan sekiz örnek; çözümleri gösterilmiştir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: Ölçek Faktörünü Bulun",
            },
            {
              "kind": "p",
              "text": "Problem: orijinal kenar [[6]] ve eşleşen benzer kenar [[18]] dir. Mod: Ölçek Faktörünü Bul. Formül: [[k=\\text{Similar Side}/\\text{Original Side}]]. Yerine koyma: [[k=18/6=3]]. Cevap: [[k=3]]. Benzer üçgen her doğrusal boyutta üç kat büyüktür ve açıları aynıdır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Farklı Bir Çiftten Ölçek Faktörünü Bulun",
            },
            {
              "kind": "p",
              "text": "Problem: orijinal kenar [[4]] ve eşleşen benzer kenar [[10]] dur. Mod: Ölçek Faktörünü Bul. Formül: [[k=\\text{Similar Side}/\\text{Original Side}]]. Yerine koyma: [[k=10/4=2.5]]. Cevap: [[k=2.5]]. Benzer üçgen, orijinalinin iki buçuk katı büyüklüğündedir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Eksik Benzer Kenarı Bulun",
            },
            {
              "kind": "p",
              "text": "Problem: orijinal kenar [[8]] ve ölçek faktörü [[k=2.5]] tir. Mod: Eksik Benzer Kenarı Bul. Formül: [[\\text{Similar Side}=\\text{Original Side}\\times k]]. Yerine koyma: [[8\\times2.5=20]]. Cevap: [[20]]. Benzer üçgenin eşleşen kenarı 20 birim uzunluğundadır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Küçültülmüş Benzer Kenarı Bulun",
            },
            {
              "kind": "p",
              "text": "Problem: orijinal kenar [[12]] ve ölçek faktörü [[k=0.5]] tir. Mod: Eksik Benzer Kenarı Bul. Formül: [[\\text{Similar Side}=\\text{Original Side}\\times k]]. Yerine koyma: [[12\\times0.5=6]]. Cevap: [[6]]. [[1]] değerinden küçük bir ölçek faktörü üçgeni küçültür, bu nedenle benzer kenar orijinalin yarısıdır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Orijinal Kenarı Bulun",
            },
            {
              "kind": "p",
              "text": "Problem: benzer kenar [[15]] ve ölçek faktörü [[k=3]] tür. Mod: Orijinal Kenarı Bul. Formül: [[\\text{Original Side}=\\text{Similar Side}/k]]. Yerine koyma: [[15/3=5]]. Cevap: [[5]]. Orijinal üçgenin eşleşen kenarı 5 birim uzunluğundadır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Ondalıklı Ölçek Faktörüyle Orijinal Kenarı Bulun",
            },
            {
              "kind": "p",
              "text": "Problem: benzer kenar [[18]] ve ölçek faktörü [[k=1.5]] tir. Mod: Orijinal Kenarı Bul. Formül: [[\\text{Original Side}=\\text{Similar Side}/k]]. Yerine koyma: [[18/1.5=12]]. Cevap: [[12]]. Geri çarparak kontrol edin: [[12\\times1.5=18]].",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Tam Benzer Üçgenleri Karşılaştırın",
            },
            {
              "kind": "p",
              "text": "Problem: 3-4-5 üçgenini ölçek faktörü [[k=2]] ile karşılaştırın. Mod: Eksik Benzer Kenarı Bul; her kenara sırayla uygulanır. Benzer kenarlar [[3\\times2=6]], [[4\\times2=8]] ve [[5\\times2=10]] dur. Oranlar doğrulanır: [[6/3=8/4=10/5=2]]. Cevap: benzer üçgen 6-8-10 dur. Hesaplayıcının tek seferde bir kenar aldığını unutmayın; tek bir hesaplamada bütün bir üçgeni kabul etmez.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: Hipotenüsten Geriye Doğru Çalışın",
            },
            {
              "kind": "p",
              "text": "Problem: benzer hipotenüs [[26]] ve ölçek faktörü [[k=2]] dir. Mod: Orijinal Kenarı Bul. Formül: [[\\text{Original Side}=\\text{Similar Side}/k]]. Yerine koyma: [[26/2=13]]. Cevap: [[13]]. Orijinal hipotenüs 13 birimdir ve bu, dik kenarlar 5 ve 12 olduğunda 5-12-13 kalıbına uyar.",
            },
          ],
        },
        "sec-pythagoras": {
          "h2": "Benzer Üçgenler ile Pisagor Teoremi Arasındaki İlişki",
          "blocks": [
            {
              "kind": "p",
              "text": "Bir dik üçgeni ölçeklendirmek Pisagor dengesini bozmaz.",
            },
            {
              "kind": "p",
              "text": "Benzer dik üçgenlerin ikisi de [[a^2+b^2=c^2]] denklemini sağlar. Orijinal üçgenin kenarları [[a]], [[b]] ve [[c]] ise ölçeklenmiş üçgenin kenarları [[ka]], [[kb]] ve [[kc]] tir ve teorem hâlâ geçerlidir.",
            },
            {
              "kind": "p",
              "text": "[[[(ka)^2+(kb)^2=(kc)^2]]]",
            },
            {
              "kind": "p",
              "text": "Açmak [[k^2a^2+k^2b^2=k^2c^2]] sonucunu verir ve [[k^2]] parantezine almak [[k^2(a^2+b^2)=k^2c^2]] sonucunu bırakır. [[a^2+b^2=c^2]] olduğundan iki taraf da eşittir, bu nedenle benzerlik dik açı ilişkisini her ölçekte korur.",
            },
            {
              "kind": "p",
              "text": "Herhangi bir pozitif faktörle ölçeklendirmek dik açıyı dik açı olarak korur, bu nedenle ölçeklenmiş üçgen de bir dik üçgendir. Açılar asla değişmez, yalnızca ölçüler değişir.",
            },
            {
              "kind": "p",
              "text": "3-4-5 ve 6-8-10 ile kontrol edin: [[3^2+4^2=9+16=25=5^2]] ve [[6^2+8^2=36+64=100=10^2]]. İkisi de teoremi sağlar, sağlamaları da gerekir. Bu yararlı bir çapraz kontroldür: ölçeklenmiş bir kenar kümesi teoremi sağlamıyorsa kenarlar tek bir faktörle ölçeklenmemiştir. Teoremin kendisi hakkında tam bir anlatım için <a href=\"/pythagorean-theorem-calculator/\">Pisagor teoremi hesaplayıcı</a> sayfasına bakın.",
            },
          ],
        },
        "sec-perimeter-area": {
          "h2": "Benzer Üçgenlerde Çevre ve Alan İlişkileri",
          "blocks": [
            {
              "kind": "p",
              "text": "Çevre k ile ölçeklenir, ancak alan k kare ile ölçeklenir.",
            },
            {
              "kind": "p",
              "text": "Çevre bir uzunluktur, bu nedenle kenarlarla aynı doğrusal faktörle değişir. Alan iki boyutu kapsar, bu nedenle ölçek faktörünün karesiyle değişir.",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{\\frac{P_2}{P_1}=k}]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{\\frac{A_2}{A_1}=k^2}]]]",
            },
            {
              "kind": "p",
              "text": "3-4-5 üçgenini alın: çevresi [[3+4+5=12]] ve alanı [[(3\\times4)/2=6]] dır. [[k=2]] ile kenarlar 6-8-10 olur, çevre [[6+8+10=24]] olur ve alan [[(6\\times8)/2=24]] olur. Çevre iki katına çıkar, ancak alan dört kat büyür.",
            },
            {
              "kind": "p",
              "text": "Kenarları iki katına çıkarmak alanı asla yalnızca iki katına çıkarmaz: [[k=3]] olduğunda alan dokuz kat büyür ve [[k=0.5]] olduğunda dörtte birine iner. [[k=1.5]] olduğunda çevre yarı yarıya daha büyürken alan [[1.5^2=2.25]] kat büyür. Bunlar, ölçeklendirmeyi anlamak için eğitici ilişkilerdir; hesaplayıcının kendisinde alan veya çevre modu yoktur.",
            },
          ],
          "image": {
            "src": "similar-triangles-perimeter-area.svg",
            "alt": "Çevresi 12 ve alanı 6 olan 3-4-5 üçgeni ile çevresi 24 ve alanı 24 olan 6-8-10 üçgeni yan yana",
            "caption": "Kenarları iki katına çıkarmak çevreyi iki katına, alanı dört katına çıkarır.",
          },
        },
        "sec-similar-vs-congruent": {
          "h2": "Benzer ve Eş Dik Üçgenler Arasındaki Fark",
          "blocks": [
            {
              "kind": "p",
              "text": "Eş üçgenler benzerdir, ancak benzer üçgenlerin eş olması gerekmez.",
            },
            {
              "kind": "p",
              "text": "Benzerlik ve eşlik ikisi de eşit karşılık gelen açılar ve aynı şekil gerektirir. Fark boyuttadır: eş üçgenlerin karşılık gelen kenarları eşittir, benzer üçgenlerin ise yalnızca orantılı kenarlara ihtiyacı vardır. Her eş çift, [[k=1]] ile benzerdir, ancak [[k=2]] ile benzer bir çift eş değildir.",
            },
            {
              "kind": "p",
              "text": "Test basittir: ölçek faktörü [[1]] ise üçgenler hem benzer hem de eştir. Başka herhangi bir pozitif değerse yalnızca benzerdir. İki terimi karıştırmak yaygın bir sınav hatasıdır, bu nedenle eşlik iddia etmeden önce kenar uzunluklarını kontrol edin.",
            },
          ],
          "table": {
            "headers": [
              "Özellik",
              "Benzer üçgenler",
              "Eş üçgenler",
            ],
            "rows": [
              [
                "Şekil",
                "Aynı",
                "Aynı",
              ],
              [
                "Karşılık gelen açılar",
                "Eşit",
                "Eşit",
              ],
              [
                "Karşılık gelen kenarlar",
                "Orantılı",
                "Eşit",
              ],
              [
                "Boyut",
                "Farklı olabilir",
                "Aynı",
              ],
              [
                "Ölçek faktörü",
                "Herhangi bir pozitif değer",
                "[[1]]",
              ],
              [
                "Örnek",
                "3-4-5 ve 6-8-10",
                "İki 3-4-5 üçgeni",
              ],
            ],
          },
        },
        "sec-applications": {
          "h2": "Benzer Dik Üçgenlerin Gerçek Hayattaki Uygulamaları",
          "blocks": [
            {
              "kind": "p",
              "text": "Benzerlik, bilinen tek bir ölçüyü birçok bilinmeyen ölçüye dönüştürür.",
            },
            {
              "kind": "list",
              "items": [
                "Gölgeler: bilinen yükseklikte bir direk ve gölgesi, aynı güneş açısı altında bir bina ve gölgesinin oluşturduğu üçgene benzer bir dik üçgen oluşturur, bu nedenle bina yüksekliği gölgelerin oranından bulunur.",
                "Planlar: ölçekli bir çizim bir binayı sabit bir oranda temsil eder, bu nedenle 1:50 ölçekli bir planda 6 cm olarak çizilen bir duvar, ölçek faktörüyle çarpılarak bulunan 300 cm lik gerçek bir duvarı temsil eder.",
                "İnşaat: ölçeklenmiş tasarımlar ve teknik çizimler her uzunluğu orantılı tutar, bu nedenle yarı ölçekte çizilen bir ayrıntı 0,5 e bölünerek tam boyuta geri okunabilir.",
                "Model yapımı: 1:24 ölçekte 18 cm uzunluğunda bir model, her boyut aynı ölçek faktörüyle çarpıldığından 432 cm uzunluğunda gerçek bir arabayı temsil eder.",
                "Haritacılık: üçgen orantıları, bir nehrin genişliği gibi doğrudan ölçülemeyen yükseklik ve mesafeleri, küçük ölçülmüş bir üçgeni daha büyük benzer bir üçgenle karşılaştırarak tahmin eder.",
                "Sınıf geometrisi: öğrenciler ödev ve sınavlarda eksik uzunlukları bulmak için benzer üçgenleri kullanır ve cevaba güvenmeden önce her oranı kontrol eder.",
              ],
            },
            {
              "kind": "p",
              "text": "Bunlar, yöntemi öğrenmek için varsayımsal örneklerdir. Hesaplayıcı girdiğiniz sayılarla çalışır; gerçek nesneleri ölçmez veya sahadan okuma almaz.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Benzer Dik Üçgen Problemlerini Çözerken Yapılan Yaygın Hatalar",
          "blocks": [
            {
              "kind": "p",
              "text": "On beş hata; her birinin yanında düzeltmesi var.",
            },
            {
              "kind": "list",
              "items": [
                "Yanlış karşılık gelen kenarları eşleştirmek: bir dik kenarın hipotenüse bölünmesi anlamsız bir oran verir, bu nedenle kısa dik kenarı kısa dik kenarla, uzun dik kenarı uzun dik kenarla ve hipotenüsü hipotenüsle eşleştirin.",
                "k değerini bulurken yanlış yönde bölmek: ölçek faktörü Benzer bölü Orijinaldir, yani [[18/6=3]] tür, [[6/18]] değil.",
                "Orijinal kenar gerektiğinde çarpmak: orijinal kenarı geri bulmak [[k]] değerine bölmeyi gerektirir, yani [[15/3=5]] tir, [[15\\times3]] değil.",
                "Daha büyük bir benzer kenar bulurken bölmek: daha büyük bir üçgene geçmek çarpma gerektirir, yani [[8\\times2.5=20]] dir, [[8/2.5]] değil.",
                "Farklı kenar çiftleri için farklı ölçek faktörleri kullanmak: bir benzer üçgenin tek bir [[k]] değeri vardır, bu nedenle her [[a'/a]], [[b'/b]] ve [[c'/c]] oranı aynı çıkmalıdır.",
                "Her dik üçgenin benzer olduğunu varsaymak: farklı dar açılara sahip iki dik üçgen benzer değildir, çünkü şekilleri farklıdır.",
                "Benzerliği eşlikle karıştırmak: benzer üçgenler boyutta farklı olabilir, oysa eş üçgenlerin eşit kenarları ve [[k=1]] değeri olmalıdır.",
                "Ölçek faktörünün pozitif olması gerektiğini unutmak: negatif bir [[k]] değerinin bir uzunluk değişimi olarak hiçbir anlamı yoktur ve hesaplayıcı onu reddeder.",
                "Ölçek faktörü olarak sıfır kullanmak: [[k=0]] her kenarı sıfıra indirir ve bu bir üçgen değildir.",
                "Ölçü birimlerini karıştırmak: santimetreleri santimetrelerle karşılaştırın, santimetreleri metrelerle değil, yoksa oran 100 kat yanlış olur.",
                "Daha büyük bir üçgenin farklı açılara sahip olduğunu varsaymak: ölçeklendirme yalnızca kenar uzunluklarını değiştirir, bu nedenle dar açılar tamamen aynı kalır.",
                "Hipotenüsü bir dik kenarla karıştırmak: hipotenüs en uzun kenardır, dik açının karşısındadır ve diğer hipotenüse karşılık gelir.",
                "Tutarsız bir köşe karşılığı kullanmak: eşleşen köşeleri aynı sırada etiketleyin, yoksa kenar eşleştirmeleri yanlış olur.",
                "Kenar uzunluklarını iki katına çıkarmanın alanı iki katına çıkardığını varsaymak: kenarları iki katına çıkarmak alanı dört katına çıkarır, çünkü alan [[k^2]] ile ölçeklenir.",
                "Karşılık gelmeyen kenarları karşılaştırmak: bir oran, yalnızca iki kenar da üçgenlerinde aynı konumu işgal ettiğinde bir ölçek faktörüdür.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Cevaplı Alıştırma Problemleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Tam çözümleriyle birlikte sekiz problem.",
            },
            {
              "kind": "list",
              "items": [
                "Orijinal kenar [[5]] ve eşleşen benzer kenar [[20]] olduğunda [[k]] değerini bulun. Cevap: [[k=20/5=4]]. Benzer üçgen dört kat büyüktür.",
                "Orijinal kenar [[9]] ve [[k=2]] olduğunda benzer kenarı bulun. Cevap: [[9\\times2=18]]. Eşleşen benzer kenar 18 birimdir.",
                "Orijinal kenar [[16]] ve [[k=0.5]] olduğunda küçültülmüş kenarı bulun. Cevap: [[16\\times0.5=8]]. Benzer kenar orijinalin yarısıdır.",
                "Benzer kenar [[30]] ve [[k=3]] olduğunda orijinal kenarı bulun. Cevap: [[30/3=10]]. Orijinal kenar 10 birimdir.",
                "3-4-5 ve 6-8-10 üçgenlerinin benzer olup olmadığını belirleyin. Cevap: evet. [[6/3=8/4=10/5=2]], yani tüm oranlar [[k=2]] ile aynıdır.",
                "Orijinal hipotenüs [[13]] ve benzer hipotenüs [[39]] olduğunda ölçek faktörünü bulun. Cevap: [[k=39/13=3]]. Hipotenüsler, dik kenarlarla aynı [[k]] değerini verir.",
                "[[k=4]] olduğunda çevre oranını hesaplayın. Cevap: [[P_2/P_1=4]]. Çevre dört kat büyür.",
                "[[k=3]] olduğunda alan oranını hesaplayın. Cevap: [[A_2/A_1=3^2=9]]. Alan dokuz kat büyür.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları",
      "relatedIntro": "Aşağıdaki hesaplayıcıların her biri farklı bir dik üçgen problemini çözer, bu nedenle sorunuza uyanı seçin.",
      "relatedItems": [
        "Dik Üçgen Kenar Hesaplayıcı",
        "Dik Üçgen Açı Hesaplayıcı",
        "Pisagor Üçlüleri Hesaplayıcı",
        "Özel Dik Üçgen Hesaplayıcı",
        "Dik Üçgen İzdüşüm Hesaplayıcı",
      ],
      "faqHeading": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "Benzer dik üçgenler nedir?",
          "answer": "Benzer dik üçgenlerin karşılık gelen açıları eşit ve karşılık gelen kenarları orantılıdır, bu nedenle farklı boyutlarda aynı şekli paylaşırlar. İkisi de 90° açısı ve eşleşen dar açılar içerir. 3-4-5 üçgeni ile 6-8-10 üçgeni benzerdir; ikincinin her kenarı birincinin eşleşen kenarının iki katıdır.",
        },
        {
          "question": "Benzer Dik Üçgenler Hesaplayıcı nasıl çalışır?",
          "answer": "Üç modu vardır. Ölçek Faktörünü Bul modu, benzer bir kenarı eşleşen orijinal kenara böler. Eksik Benzer Kenarı Bul modu, orijinal bir kenarı [[k]] ile çarpar. Orijinal Kenarı Bul modu, benzer bir kenarı [[k]] değerine böler. İki değer girin, Hesapla düğmesine tıklayın ve sonucu adım adım çözümüyle birlikte okuyun.",
        },
        {
          "question": "İki dik üçgeni benzer yapan nedir?",
          "answer": "Eşit karşılık gelen açılar onları benzer yapar. İki üçgen de zaten 90° açısı içerdiğinden yalnızca eşleşen bir dar açı gerekir: üçüncü açılar o zaman otomatik olarak eşleşir. Bu, AA kuralıdır. Eşit açılar, karşılık gelen kenarları da orantılı olmaya zorlar.",
        },
        {
          "question": "İki benzer üçgen arasındaki ölçek faktörünü nasıl bulurum?",
          "answer": "Benzer üçgenin bir kenarını orijinal üçgenin eşleşen kenarına bölün: [[k=\\text{Similar Side}/\\text{Original Side}]]. [[18]] ve [[6]] kenarları için [[k=18/6=3]] tür. Bölmeden önce iki kenarın karşılık geldiğinden emin olun. Bölmeyi adım adım gösteren hesaplayıcının Mod 1 bölümünü kullanın.",
        },
        {
          "question": "Benzer bir üçgende eksik bir kenarı nasıl hesaplarım?",
          "answer": "Eşleşen orijinal kenarı ölçek faktörüyle çarpın: [[\\text{Similar Side}=\\text{Original Side}\\times k]]. Orijinal kenarı [[8]] ve [[k=2.5]] olduğunda eksik kenar [[8\\times2.5=20]] dir. Bunun için hesaplayıcının Mod 2 bölümünü kullanın. Sonuç, büyütülmüş veya küçültülmüş üçgendeki eşleşen kenardır.",
        },
        {
          "question": "Orijinal kenar uzunluğunu nasıl bulurum?",
          "answer": "Benzer kenarı ölçek faktörüne bölün: [[\\text{Original Side}=\\text{Similar Side}/k]]. Benzer kenarı [[15]] ve [[k=3]] olduğunda orijinal kenar [[15/3=5]] tir. Bölme, ölçeklendirmeyi tersine çevirir, bu nedenle hesaplayıcının Mod 3 bölümünü kullanın.",
        },
        {
          "question": "Ölçek faktörü ondalıklı olabilir mi?",
          "answer": "Evet. Ölçek faktörü, [[0.5]], [[1.5]] veya [[2.5]] gibi ondalıklı sayılar da dahil olmak üzere herhangi bir pozitif sayı olabilir. [[1]] değerinden küçük bir ondalık sayı küçültme, [[1]] değerinden büyük bir ondalık sayı büyütme anlamına gelir. Sıfır ve negatif değerler geçerli ölçek faktörleri değildir.",
        },
        {
          "question": "1 ölçek faktörü ne anlama gelir?",
          "answer": "[[1]] ölçek faktörü, iki üçgenin tam olarak aynı boyutta olduğu anlamına gelir, bu nedenle benzer oldukları kadar eştirler de. Karşılık gelen her kenar eşittir ve karşılık gelen her açı eşittir. Başka herhangi bir pozitif ölçek faktörü, üçgenlerin benzer ama eş olmadığı anlamına gelir.",
        },
        {
          "question": "Tüm dik üçgenler benzer midir?",
          "answer": "Hayır. Tüm dik üçgenler 90° açısını paylaşır, ancak dar açıları farklı olabilir. 30°-60°-90° üçgeni, 45°-45°-90° üçgenine benzer değildir, çünkü şekilleri farklıdır. Benzerlik, eşleşen dar açılar veya orantılı karşılık gelen kenarlar gerektirir.",
        },
        {
          "question": "Benzer ve eş üçgenler arasındaki fark nedir?",
          "answer": "Benzer üçgenler aynı şekle ve orantılı kenarlara sahipken eş üçgenler aynı şekle ve aynı boyuta, eşit kenarlara sahiptir. Her eş çift, [[k=1]] ile benzerdir, ancak [[k=2]] ile benzer bir çift eş değildir.",
        },
        {
          "question": "Benzer üçgenlerin açıları eşit midir?",
          "answer": "Evet. Benzer üçgenlerin karşılık gelen açıları eşittir: dik açılar eşleşir ve dar açılar çiftler hâlinde eşleşir. Şekillerini aynı yapan budur. Yalnızca kenar uzunlukları farklıdır ve her yerde aynı ölçek faktörüyle farklıdır.",
        },
        {
          "question": "Alan, kenar uzunluklarıyla aynı faktörle değişir mi?",
          "answer": "Hayır. Kenar uzunlukları ve çevre, ölçek faktörü [[k]] ile değişir, ancak alan [[k^2]] ile değişir. Kenarları iki katına çıkarmak alanı dört katına çıkarır ve üç katına çıkarmak alanı dokuz katına çıkarır. [[k=0.5]] olduğunda alan dörtte birine iner.",
        },
      ],
    },
};
