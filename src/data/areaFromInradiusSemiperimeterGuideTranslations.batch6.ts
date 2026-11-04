// areaFromInradiusSemiperimeterGuideTranslations.batch6.ts: Right Triangle Area From
// Inradius and Semiperimeter Guide (Page 20 of 45) translations for Turkish (tr),
// Swedish (sv), and Chinese (zh).
export const AREA_FROM_INRADIUS_SEMIPERIMETER_TRANSLATIONS_BATCH6 = {
  "tr": {
    "faqs": [
      {
        "question": "İç yarıçap ve yarı çevre kullanarak alan formülü nedir?",
        "answer": "İç yarıçap r ile yarı çevre s'yi çarpın: K = rs. Örneğin, r = 2 ve s = 12 için K = 24 birim kare bulunur. Bu formül yalnızca dik üçgenler için değil, dejenere olmayan her üçgen için geçerlidir."
      },
      {
        "question": "Dik üçgende iç yarıçap nedir?",
        "answer": "Üçgenin içine çizilen çemberin yarıçapıdır; iç merkezden herhangi bir kenara olan dik uzaklıktır. 3-4-5 üçgeninde iç yarıçap 1'dir; 6-8-10 üçgeninde 2'dir."
      },
      {
        "question": "Dik üçgenin iç yarıçapı nasıl hesaplanır?",
        "answer": "Üç kenar biliniyorsa r = (a + b - c) / 2 kestirmesini kullanın; burada a ve b dik kenarlar, c hipotenüstür. 5-12-13 üçgeninde bu kestirme r = 2 verir."
      },
      {
        "question": "Yarı çevre nasıl hesaplanır?",
        "answer": "Üç kenarı toplayıp toplamı ikiye bölün: s = (a + b + c) / 2. 5-12-13 üçgeni için s = 15'tir. Yarı çevre her zaman her bir kenardan büyüktür."
      },
      {
        "question": "Alan neden iç yarıçap ile yarı çevrenin çarpımına eşittir?",
        "answer": "İç merkezi üç köşeye birleştirmek, üçgeni ortak yüksekliği r, tabanları a, b ve c olan üç küçük üçgene böler. Alanları ar/2 + br/2 + cr/2, r(a+b+c)/2 olarak çarpanlarına ayrılır ve s = (a+b+c)/2 olduğundan toplam rs olur."
      },
      {
        "question": "Formül dik olmayan üçgenlerde de çalışır mı?",
        "answer": "Evet. K = rs, dejenere olmayan her üçgen için geçerlidir. Yalnızca r = (a+b-c)/2 kestirmesi dik üçgene özgüdür, çünkü dik açıda oluşan kareye dayanır."
      },
      {
        "question": "İç yarıçap ile çevrel yarıçap arasındaki fark nedir?",
        "answer": "İç yarıçap r, üçgenin içindeki ve üç kenara da değen çemberin yarıçapıdır; çevrel yarıçap R ise üç köşeden geçen çemberin yarıçapıdır. Dik üçgende R = c/2'dir."
      },
      {
        "question": "Üç kenarı da bilmeden alan hesaplanabilir mi?",
        "answer": "Evet. İç yarıçap ve yarı çevre zaten biliniyorsa K = rs, tek bir çarpma işlemiyle alanı doğrudan verir; kenar uzunluklarına gerek yoktur."
      },
      {
        "question": "Yarı çevre, çevrenin yarısıyla aynı şey midir?",
        "answer": "Evet, tam olarak: s = P/2 = (a+b+c)/2. Ayrım önemlidir, çünkü formül yarıya indirilmiş değere ihtiyaç duyar; tam çevreyi kullanmak cevabı iki katına çıkarır."
      },
      {
        "question": "İç yarıçap üç kenarla nasıl ilişkilidir?",
        "answer": "Dik üçgende r = (a+b-c)/2'dir; burada a ve b dik kenarlar, c hipotenüstür. Ayrıca s + r = a + b ve s - r = c sağlanır, böylece kenarlar r ve s'den geri elde edilebilir."
      },
      {
        "question": "Heron formülü ile iç yarıçap formülü arasındaki fark nedir?",
        "answer": "Heron formülü, K = sqrt(s(s-a)(s-b)(s-c)), üç kenarın tamamını ister; iç yarıçap formülü K = rs ise yalnızca r ve s ister. Kenarlar elinizdeyken Heron'u, r ve s hazırken K = rs'yi kullanın. Tutarlı girdilerde ikisi de aynı alanı verir."
      },
      {
        "question": "Hesaplanan alan nasıl doğrulanır?",
        "answer": "Bağımsız yöntemlerle kontrol edin: dik kenar formülü K = ab/2, Pisagor teoremi, iç yarıçap kestirmesi, yarı çevre tanımı ve Heron formülü. Yöntemler arası uyum, girdilerin ve aritmetiğin doğru olduğu anlamına gelir."
      }
    ],
    "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
    "relatedItems": [
      "Dik Kenarlardan Dik Üçgen Alanı Hesaplayıcı",
      "Hipotenüs ve Yükseklikten Dik Üçgen Alanı Hesaplayıcı",
      "Açıdan Dik Üçgen Alanı Hesaplayıcı",
      "Yükseklikten Dik Üçgen Alanı Hesaplayıcı",
      "Dik Üçgen İç Yarıçap Hesaplayıcı",
      "Dik Üçgen Yarı Çevre Hesaplayıcı"
    ],
    "relatedIntro": "Farklı ölçümler, farklı hesaplayıcılar gerektirir.",
    "faqHeading": "Sık Sorulan Sorular",
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "sec-intro": "İç Yarıçap ve Yarı Çevre Kullanarak Dik Üçgenin Alanı Nasıl Hesaplanır",
      "sec-incircle": "Geometride İç Teğet Çember Nedir?",
      "sec-semiperimeter": "Üçgenin Yarı Çevresi Nedir?",
      "sec-formula": "Alan Neden İç Yarıçap ile Yarı Çevrenin Çarpımına Eşittir?",
      "sec-inradius": "Dik Üçgenin İç Yarıçapı Nasıl Bulunur",
      "sec-howto": "İç Yarıçap ve Yarı Çevre Alan Hesaplayıcısı Nasıl Kullanılır",
      "sec-examples": "Adım Adım Çözülmüş Örnekler",
      "sec-applications": "Gerçek Hayattan Uygulamalar",
      "sec-relationship": "İç Yarıçap ve Yarı Çevre Üç Kenarla Nasıl İlişkilidir",
      "sec-valid": "Ölçümlerinizin Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
      "sec-heron": "İç Yarıçap Formülü Heron Formülü ile Nasıl Karşılaştırılır",
      "sec-legs": "İç Yarıçap Formülü Dik Kenar Formülüyle Neden Aynı Sonucu Verir",
      "sec-mistakes": "Yaygın Hatalar",
      "sec-verify": "Alanınızın Doğruluğu Nasıl Kontrol Edilir",
      "sec-units": "Ölçü Birimleri ve Yuvarlama",
      "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "sec-faq": "Sık Sorulan Sorular",
      "sec-conclusion": "Sonuç"
    },
    "sections": {
      "sec-intro": {
        "h2": "İç Yarıçap ve Yarı Çevre Kullanarak Dik Üçgenin Alanı Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "Bir dik üçgenin iç yarıçapı [[r=2]] ve yarı çevresi [[s=12]]'dir. [[K=r\\times s]] uygulayın: [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Üçgen, 24 birim karelik düz bir alanı kapsar. Hesaplayıcının otomatikleştirdiği yöntemin tamamı budur: iki ölçüm, bir çarpma, bir cevap." },
          { "kind": "p", "text": "İç yarıçap, üçgenin içine tam oturan ve üç kenara da değen çemberin yarıçapıdır. Yarı çevre, üçgenin çevresinin yarısıdır. İkisi birlikte alanı belirlemeye yeter, çünkü çemberin yarıçapı, tabanları üçgenin kenarları olan üç küçük üçgenin yüksekliği görevini görür. Bu özdeşlik yalnızca dik üçgenler için değil, dejenere olmayan her üçgen için geçerlidir; dik üçgenleri özel kılan, iç yarıçapın kendisinin üç kenardan hesaplanabilmesindeki hızlı yoldur. En çok, iç teğet çember doğrudan ölçüldüğünde ya da iç yarıçap ve yarı çevre önceki çalışmalardan zaten bilindiğinde işe yarar." }
        ]
      },
      "sec-incircle": {
        "h2": "Geometride İç Teğet Çember Nedir?",
        "blocks": [
          { "kind": "p", "text": "Bu kılavuzdaki gösterim şöyledir: [[A]], [[B]] ve [[C]] köşeler ve açılardır, [[C=90^\\circ]] olmak üzere; [[a]] ve [[b]] iki dik kenardır; [[c]], [[C]]'nin karşısındaki hipotenüstür; [[r]] iç yarıçaptır; [[I]] iç merkezdir; [[s]] yarı çevredir; [[P]] çevredir; [[K]] ise alandır ve açı [[A]] ile asla karışmaması için her yerde bu şekilde kullanılır." },
          { "kind": "h3", "text": "İç Teğet Çemberin Tanımı" },
          { "kind": "p", "text": "İç teğet çember, bir üçgenin içine sığan ve üç kenarına da değen en büyük çemberdir. Üçgenin her kenarı çembere teğet bir doğru olduğundan tamamen içerde kalır: çember kenara tam bir noktada ulaşır ve iç tarafta kalır. Bir kenarın yalnızca yakınında duran çember sayılmaz; iç teğet çember her kenara teğet olmalı, ona tek bir noktada değmeli ve sonra iç bölgeye dönmelidir. Dejenere olmayan her üçgenin tam bir tane böyle çemberi vardır ve tek bir merkezi vardır, çünkü üç doğru paralel değildir ve geometrileri çemberi bütünüyle sabitler." },
          { "kind": "h3", "text": "İç Yarıçap Nedir?" },
          { "kind": "p", "text": "İç yarıçap, iç merkezden üçgenin herhangi bir kenarına olan uzaklıktır. [[I]] iç merkez ve [[D]] iç teğet çemberin bir kenara değdiği nokta ise [[r=ID]] olur. Çemberin yarıçapı, merkezinden teğet kenara olan en kısa uzaklıktır ve bu en kısa uzaklık üç kenar için de aynıdır; çemberin üç kenara da yalnızca yakın olmak yerine teğet olmasının nedeni budur." },
          { "kind": "h3", "text": "İç Yarıçap Her Kenara Neden Diktir?" },
          { "kind": "p", "text": "Çemberlerin temel bir özelliği, bir doğrunun çembere değdiği her noktada, o noktaya çizilen yarıçapın doğruyla dik açı yapmasıdır. Yani [[D]], [[AB]] kenarı üzerindeki değme noktasıysa [[ID\\perp AB]] olur. Aynı durum diğer iki kenar için de geçerlidir. Bu diklik süs değildir: alan formülü türetilirken her yarıçapın daha küçük bir üçgenin yüksekliği görevini görmesini sağlayan şey budur, çünkü bir üçgenin yüksekliği tabanına dik olmalıdır." },
          { "kind": "h3", "text": "İç Merkezi Anlamak" },
          { "kind": "p", "text": "İç merkez [[I]], üçgenin üç iç açıortayının kesiştiği noktadır. Her açıortay, o açıyı oluşturan iki kenara eşit uzaklıktaki noktaların kümesidir; bu yüzden üç açıortayın üzerinde bulunan bir nokta üç kenara da eşit uzaklıktadır ve üçgenin içinde olmak zorundadır. Bu ortak uzaklık tam olarak iç yarıçaptır ve merkezi [[I]] olan, yarıçapı [[r]] olan çember her kenara bir kez değer: iç teğet çember budur." },
          { "kind": "h3", "text": "İç Yarıçap Çevrel Yarıçapla Aynı Şey midir?" },
          { "kind": "p", "text": "Hayır. İç yarıçap [[r]], üçgenin içindeki çemberin yarıçapıyken çevrel yarıçap [[R]], üç köşeden de geçen çemberin, yani çevrel çemberin yarıçapıdır. Dik üçgende çevrel çemberin merkezi hipotenüsün orta noktasıdır, dolayısıyla [[[\\boxed{R=\\frac{c}{2}}]]] İki yarıçap bütünüyle farklı çemberleri tanımlar: biri üçgenin içine çizilmiştir, diğeri çevresine çizilmiştir. Bunları karıştırmak bu konudaki en yaygın hatalardan biridir, o yüzden ayrı tutun: içerdeki için [[r]], çevredeki için [[R]]." }
        ],
        "imgAlt": "İç teğet çemberli ABC dik üçgeni: iç merkez I, iç yarıçap r, değme noktaları ve çevrel çember",
        "figcaption": "ABC üçgeni ve iç teğet çemberi: iç merkez I, her kenara dik olan ID = r iç yarıçapı ve karşılaştırma için çevrel çember."
      },
      "sec-semiperimeter": {
        "h2": "Üçgenin Yarı Çevresi Nedir?",
        "blocks": [
          { "kind": "h3", "text": "Yarı Çevrenin Tanımı" },
          { "kind": "p", "text": "Yarı çevre, bir üçgenin toplam çevresinin yarısıdır: [[[\\boxed{s=\\frac{a+b+c}{2}}]]]; burada [[a]] ve [[b]] dik kenarlar, [[c]] hipotenüstür. Herhangi bir kenar gibi bir uzunluktur ve alan formülündeki yerini, üç kenarı tek bir sayıda birleştirdiği için hak eder." },
          { "kind": "h3", "text": "Çevre ile Yarı Çevre Arasındaki Fark" },
          { "kind": "p", "text": "Çevre, üçgenin etrafındaki tam uzaklıktır, [[P=a+b+c]]; yarı çevre ise bunun yarısıdır, [[s=\\frac{P}{2}]]. 3-4-5 üçgeni için: [[P=3+4+5=12]] ve [[s=\\frac{12}{2}=6]]. Yarı çevre sınırın uzunluğu değildir; onun yarısıdır ve [[K=rs]] formülüne tam çevreyi sokmak gerçek alanı iki katına çıkarır." },
          { "kind": "h3", "text": "Alan Formülünde Yarı Çevre Neden Kullanılır?" },
          { "kind": "p", "text": "İç merkezi üç köşeye birleştirmek, üçgeni dik yüksekliği [[r]] olan üç küçük üçgene böler. Tabanları [[a]], [[b]] ve [[c]] olduğundan birleşik alanları [[K=\\frac12r(a+b+c)]] olur. [[s=\\frac{a+b+c}{2}]] olduğundan, yarı çevre zaten [[s]]'nin içine gömülüdür ve [[K=rs]] elde edilir. Bir sonraki bölümde bunun tam türetimi verilir." },
          { "kind": "h3", "text": "Yarı Çevre Bir Kenardan Küçük Olabilir mi?" },
          { "kind": "p", "text": "Hayır. Üçgen eşitsizliği, herhangi bir üçgen için [[a+b>c]] der; dolayısıyla [[s=\\frac{a+b+c}{2}>c]] olur. Aynı gerekçe diğer iki kenar için de geçerlidir: [[s>a]] ve [[s>b]]. Yarı çevre her zaman her bir kenardan büyüktür. Bu, girdiler için hızlı bir sağduyu kontrolüdür: öne sürülen bir yarı çevre herhangi bir kenardan küçükse bu sayılar gerçek bir üçgeni tanımlayamaz." }
        ]
      },
      "sec-formula": {
        "h2": "Üçgenin Alanı Neden İç Yarıçap ile Yarı Çevrenin Çarpımına Eşittir?",
        "blocks": [
          { "kind": "p", "text": "Standart üçgen alan kuralından başlayın: [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. İç merkezden [[I]] üç köşeye çizilen doğru parçaları, asıl üçgeni üç küçük üçgene böler. Her küçük üçgenin tabanı asıl üçgenin bir kenarına, dik yüksekliği ise iç yarıçap [[r]]'ye eşittir, çünkü yarıçap her kenara dik açıyla ulaşır. Bu, dejenere olmayan her üçgen için çalışır; bu hesaplayıcıda üçgen dik açılıdır ama alan özdeşliğinin kendisi tamamen geneldir." },
          { "kind": "h3", "text": "Birinci Küçük Üçgenin Alanı" },
          { "kind": "p", "text": "[[a]] kenarı üzerinde duran küçük üçgenin tabanı [[a]], yüksekliği [[r]]'dir: [[[\\boxed{K_1=\\frac{ar}{2}}]]]" },
          { "kind": "h3", "text": "İkinci Küçük Üçgenin Alanı" },
          { "kind": "p", "text": "[[b]] kenarı üzerinde duran küçük üçgenin tabanı [[b]], yüksekliği [[r]]'dir: [[[\\boxed{K_2=\\frac{br}{2}}]]]" },
          { "kind": "h3", "text": "Üçüncü Küçük Üçgenin Alanı" },
          { "kind": "p", "text": "[[c]] kenarı üzerinde duran küçük üçgenin tabanı [[c]], yüksekliği [[r]]'dir: [[[\\boxed{K_3=\\frac{cr}{2}}]]]" },
          { "kind": "h3", "text": "Üç Alanı Toplayın" },
          { "kind": "p", "text": "Üç küçük üçgen, asıl üçgeni örtüşmeden kaplar; dolayısıyla [[K=K_1+K_2+K_3]]. Yerine koyun: [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. [[\\frac{r}{2}]] parantezine alın: [[K=\\frac{r(a+b+c)}{2}]]. [[s=\\frac{a+b+c}{2}]] olduğunu hatırlayın; o halde [[[\\boxed{K=r\\times s}]]] Her geçiş gerekçelidir: kaplama tamdır, [[r]] yüksekliği ortaktır ve yarı çevre ikiye bölmeyi içine alır." },
          { "kind": "h3", "text": "Bu Formül Neden Bir Kez Daha İkiye Bölme Gerektirmez?" },
          { "kind": "p", "text": "Çünkü bir bölü iki, yarı çevrenin içinde zaten katlanmıştır. Üç yarı, [[\\frac{r(a+b+c)}{2}]] içinde birleşir ve [[s]] tam olarak çevrenin yarısıdır; bu yüzden ikinci kez ikiye bölmek doğru ifadeyi dörtte bire indirir. [[r\\times s]]'yi hesaplayın ve orada durun; daha fazla yarıya indirmek düzeltme değil hatadır." }
        ],
        "imgAlt": "ABC üçgenini tabanları a, b, c ve yüksekliği r olan üç küçük üçgene bölen iç teğet çember",
        "figcaption": "Ortak yüksekliği r, tabanları a, b, c olan üç küçük üçgen: ar/2 + br/2 + cr/2 alanları toplanınca rs olur."
      },
      "sec-inradius": {
        "h2": "Üç Kenar Uzunluğu Kullanılarak İç Yarıçap Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "Üç kenar bilindiğinde, dik üçgenin iç yarıçapı, iç teğet çemberi hiç çizmeden uygulanan bir kestirmeyi izler: [[[\\boxed{r=\\frac{a+b-c}{2}}]]]; burada [[a]] ve [[b]] dik kenarlar, [[c]] hipotenüstür. Bu, dik üçgen geometrisindeki en kullanışlı gerçeklerden biridir." },
          { "kind": "h3", "text": "Dik Üçgen İç Yarıçap Formülünün Türetilmesi" },
          { "kind": "p", "text": "Türetimde eşit teğet parçası teoremi kullanılır: ortak bir dış noktadan çembere çizilen iki teğet parçasının uzunlukları eşittir. Üç köşeden gelen teğet uzunlukları [[A]] köşesinden [[x]], [[B]] köşesinden [[y]] ve [[C]] köşesinden [[z]] olsun. [[C]] dik açısında, iç teğet çemberin iki teğeti dik kenarlar boyunca uzanır ve her birinin uzunluğu [[r]]'dir; iki yarıçapla birlikte küçük bir kare oluştururlar, dolayısıyla [[z=r]]. Kenarlar o zaman [[a=y+r]], [[b=x+r]] ve [[c=x+y]] olur. Çıkarın: [[a+b-c=(y+r)+(x+r)-(x+y)]]; buradan [[a+b-c=2r]] ve [[[\\boxed{r=\\frac{a+b-c}{2}}]]] elde edilir. Dik açıdaki kare, bu kestirmenin yalnızca dik üçgenlere ait olmasının nedenidir." },
          { "kind": "h3", "text": "3-4-5 Üçgeniyle Örnek" },
          { "kind": "p", "text": "Verilenler [[a=3]], [[b=4]], [[c=5]]: [[r=\\frac{3+4-5}{2}]], [[[\\boxed{r=1}]]] İç teğet çemberin yarıçapı tam olarak 1'dir; çizim gerekmez." },
          { "kind": "h3", "text": "5-12-13 Üçgeniyle Örnek" },
          { "kind": "p", "text": "Verilenler [[a=5]], [[b=12]], [[c=13]]: [[r=\\frac{5+12-13}{2}]], [[[\\boxed{r=2}]]] Yine iç yarıçap doğrudan kenar uzunluklarından çıkar." },
          { "kind": "h3", "text": "Yarı Çevreyi Aynı Anda Bulmak" },
          { "kind": "p", "text": "Aynı üç kenarla [[r]]'nin yanında [[s=\\frac{a+b+c}{2}]]'yi de hesaplayın. 5-12-13 üçgeni için: [[s=\\frac{5+12+13}{2}=15]] ve ardından [[K=rs=2\\times15=30]]. Üç kenar üzerinden tek geçiş, hem hesaplayıcının iki girdisini hem de alanın kendisini verir." },
          { "kind": "h3", "text": "Bu Kestirme Ne Zaman Kullanılmalıdır?" },
          { "kind": "p", "text": "Üç kenar biliniyor ama iç teğet çember ölçülmemiş ya da çizilmemişse kullanın: ders kitabı alıştırmaları, yapı ölçüleri ve arazi verileri genellikle iç yarıçap değil kenar uzunlukları verir. Kestirme, bunları tek satırda [[r]]'ye dönüştürür. Ölçülen büyüklük iç yarıçapsa bunun yerine onu doğrudan girin ve dönüşümü atlayın." }
        ],
        "imgAlt": "Eşit teğet parçaları ve r = (a+b-c)/2 = 1 kestirmesini gösteren 3-4-5 üçgeni",
        "figcaption": "3-4-5 üçgeninde teğet parçaları: her köşeden eşit uzunluklar r = (3 + 4 - 5)/2 = 1 verir."
      },
      "sec-howto": {
        "h2": "Dik Üçgen İç Yarıçap ve Yarı Çevre Alan Hesaplayıcısı Nasıl Kullanılır",
        "blocks": [
          { "kind": "p", "text": "Hesaplayıcının tam olarak iki girdiye ihtiyacı vardır. Aşağıdaki adımlar, bilinen ölçümlerden doğrulanmış bir sonuca kadar ekran sırasını izler." }
        ],
        "steps": [
          "<strong>İç yarıçap r'yi belirleyin.</strong> İç teğet çemberin yarıçapı; iç merkezden herhangi bir kenara olan dik uzaklık.",
          "<strong>Yarı çevre s'yi belirleyin.</strong> Üçgenin toplam çevresinin yarısı.",
          "<strong>Üç kenar biliniyorsa r'yi [[r=\\frac{a+b-c}{2}]] ile hesaplayın.</strong> Burada [[a]] ve [[b]] dik kenarlar, [[c]] hipotenüstür.",
          "<strong>s'yi [[s=\\frac{a+b+c}{2}]] ile hesaplayın.</strong>",
          "<strong>İç yarıçapı ilk alana girin.</strong>",
          "<strong>Yarı çevreyi ikinci alana girin.</strong>",
          "<strong>Uyumlu uzunluk birimleri seçin.</strong> Her iki ölçüm de aynı birimi kullanmalıdır.",
          "<strong>Her iki değerin de pozitif olduğunu kontrol edin.</strong> Sıfır ya da negatif uzunluklar hiçbir üçgeni tanımlamaz.",
          "<strong>Calculate Area düğmesine tıklayın.</strong>",
          "<strong>Sonucu inceleyin.</strong> Alan, girdilerle eşleşen birim kare cinsinden görünür.",
          "<strong>Cevabın birim kare cinsinden ifade edildiğini doğrulayın.</strong> Metreler metrekare verir; santimetreler santimetrekare verir.",
          "<strong>Matematiksel çözümü inceleyin.</strong> Yerine koyma ve aritmetiği gösterir.",
          "<strong>Yeni bir hesaplamaya başlarken Reset kullanın.</strong> Her iki alanı da temizler, böylece sonraki hesaplama temiz başlar."
        ],
        "closingParagraphs": [
          "Hesaplayıcı üç kenar uzunluğunu sormaz: iç yarıçap ve yarı çevre, [[K=rs]] formülünün ihtiyaç duyduğu her şeyi zaten içerir."
        ]
      },
      "sec-examples": {
        "h2": "İç Yarıçap ve Yarı Çevre Kullanarak Alan Hesabının Adım Adım Örnekleri",
        "blocks": [
          { "kind": "p", "text": "Dört çözülmüş örnek, yöntemi bilinenden yukarı doğru kurar. Her biri yarı çevreyi ve iç yarıçapı üç kenardan hesaplar, her yerine koyma gösterilecek şekilde [[K=rs]]'yi uygular ve dik kenar formülüyle doğrular." },
          { "kind": "h3", "text": "Örnek 1: 3-4-5 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=3]], [[b=4]], [[c=5]]. Adım 1: yarı çevre, [[s=\\frac{3+4+5}{2}=6]]. Adım 2: iç yarıçap, [[r=\\frac{3+4-5}{2}=1]]. Adım 3: formülü uygulayın, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Doğrulayın: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Örnek 2: 6-8-10 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=6]], [[b=8]], [[c=10]]. O zaman [[s=\\frac{6+8+10}{2}=12]], [[r=\\frac{6+8-10}{2}=2]] ve [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Doğrulayın: [[K=\\frac{6\\times8}{2}=24]]." },
          { "kind": "h3", "text": "Örnek 3: 5-12-13 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=5]], [[b=12]], [[c=13]]. O zaman [[s=\\frac{5+12+13}{2}=15]], [[r=\\frac{5+12-13}{2}=2]] ve [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Doğrulayın: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Örnek 4: 8-15-17 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=8]], [[b=15]], [[c=17]]. O zaman [[s=\\frac{8+15+17}{2}=20]], [[r=\\frac{8+15-17}{2}=3]] ve [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]] Doğrulayın: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Temel Örneklerin Karşılaştırılması" }
        ],
        "table": {
          "headers": ["Üçgen", "Yarı çevre s", "İç yarıçap r", "Alan K = rs"],
          "rows": [
            ["3-4-5", "6", "1", "6"],
            ["6-8-10", "12", "2", "24"],
            ["5-12-13", "15", "2", "30"],
            ["8-15-17", "20", "3", "60"]
          ]
        }
      },
      "sec-applications": {
        "h2": "İç Yarıçap ve Yarı Çevre Kullanan Dik Üçgen Alanının Gerçek Hayattan Uygulamaları",
        "blocks": [
          { "kind": "p", "text": "On iki çözülmüş durum, formülü farklı ölçeklerde ve farklı birimlerde gösterir. Her biri üçgensel nesneyi adlandırır, üç kenar ölçüsünü verir, iç yarıçapı ve yarı çevreyi hesaplar, ana formülü adım adım uygular ve arkasındaki varsayımı belirtir. Her örnek dik üçgensel bir panel, kesit, profil ya da basitleştirilmiş geometrik modeldir; gerçek nesne eğri ya da düzensizse hesaplama yalnızca modellenen üçgeni kapsar." },
          { "kind": "h3", "text": "Örnek 1: Üçgen Cam Pencere" },
          { "kind": "p", "text": "Dik üçgen biçiminde bir cam pencerenin ölçüleri [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]'dir. İç yarıçap: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Yarı çevre: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Alan: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]] Bu, çerçeve ölçülerine yer bırakılmadan önceki düz cam alanıdır." },
          { "kind": "h3", "text": "Örnek 2: Çelik Destek Braketi" },
          { "kind": "p", "text": "Üçgen bir çelik destek plakasının ölçüleri [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]'dir. O zaman [[r=2\\text{ cm}]], [[s=15\\text{ cm}]], [[[\\boxed{K=30\\text{ cm}^2}]]] Yalnızca alan, plakanın yük taşıma kapasitesini belirlemez." },
          { "kind": "h3", "text": "Örnek 3: Üçgen Rampa Yan Profili" },
          { "kind": "p", "text": "Basitleştirilmiş dik üçgen bir rampa profilinin ölçüleri [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]'dir. O zaman [[r=2\\text{ m}]], [[s=12\\text{ m}]], [[[\\boxed{K=24\\text{ m}^2}]]] Bu, eğimli yürüme yüzeyini değil yan profili temsil eder." },
          { "kind": "h3", "text": "Örnek 4: Üçgen Çatı Destek Paneli" },
          { "kind": "p", "text": "Dik üçgen bir çatı destek panelinin ölçüleri [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]'dir. O zaman [[r=3\\text{ ft}]], [[s=20\\text{ ft}]], [[[\\boxed{K=60\\text{ ft}^2}]]] Sonuç, tahmini düz üçgen panel alanıdır." },
          { "kind": "h3", "text": "Örnek 5: Ölçülmüş Bahçe Parseli" },
          { "kind": "p", "text": "Dik üçgen bir bahçe parselinin ölçüleri [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]'dir. O zaman [[r=3\\text{ m}]], [[s=28\\text{ m}]], [[[\\boxed{K=84\\text{ m}^2}]]] Formül, üçgensel parselin alanını üç sınır ölçüsünden doğrudan verir." },
          { "kind": "h3", "text": "Örnek 6: Üçgen Kumaş Yelken" },
          { "kind": "p", "text": "Dik üçgen bir kumaş panelin ölçüleri [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]'dir. O zaman [[r=3\\text{ ft}]], [[s=18\\text{ ft}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Dikiş ve kumaş payları bu düz panel değerine dahil değildir." },
          { "kind": "h3", "text": "Örnek 7: Büyük Üçgen Arazi Parseli" },
          { "kind": "p", "text": "Dik üçgen olarak modellenen, ölçülmüş bir arazi parselinin ölçüleri [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]'dir. O zaman [[r=4\\text{ m}]], [[s=45\\text{ m}]], [[[\\boxed{K=180\\text{ m}^2}]]] Basitleştirilmiş dik üçgen model, düz zeminde doğru sınırlar varsayar." },
          { "kind": "h3", "text": "Örnek 8: Kontrplak Kesim Şablonu" },
          { "kind": "p", "text": "Üçgen bir kontrplak şablonun ölçüleri [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]'dir. O zaman [[r=4\\text{ cm}]], [[s=24\\text{ cm}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Alan, kesim firesinden önce malzeme ihtiyacını tahmin etmeye yardımcı olur." },
          { "kind": "h3", "text": "Örnek 9: Büyük Üçgen Tabela Paneli" },
          { "kind": "p", "text": "Dik üçgen bir tabela panelinin ölçüleri [[a=20\\text{ m}]], [[b=21\\text{ m}]], [[c=29\\text{ m}]]'dir. O zaman [[r=6\\text{ m}]], [[s=35\\text{ m}]], [[[\\boxed{K=210\\text{ m}^2}]]] Sonuç, izleyiciye bakan düz üçgensel yüzeyi temsil eder." },
          { "kind": "h3", "text": "Örnek 10: Üçgen Tente Desteği" },
          { "kind": "p", "text": "Dik üçgen bir tente destek kesitinin ölçüleri [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]'dir. O zaman [[r=5\\text{ ft}]], [[s=30\\text{ ft}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Bu, modellenen üçgensel kesitin hesaplanan alanıdır." },
          { "kind": "h3", "text": "Örnek 11: Endüstriyel Destek Paneli" },
          { "kind": "p", "text": "Dik üçgen bir endüstriyel destek panelinin ölçüleri [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]'dir. O zaman [[r=5\\text{ m}]], [[s=66\\text{ m}]], [[[\\boxed{K=330\\text{ m}^2}]]] Bu geometrik hesaplama panelin düz alanını açıklar, yapısal performansını değil." },
          { "kind": "h3", "text": "Örnek 12: Büyük Üçgen Çatı Uç Kesiti" },
          { "kind": "p", "text": "Dik üçgen bir çatı uç kesitinin ölçüleri [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]'dir. O zaman [[r=6\\text{ ft}]], [[s=91\\text{ ft}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Hesaplanan alan, düz üçgensel kaplamayı tahmin etmeye yardımcı olur." },
          { "kind": "h3", "text": "Pratik Örneklerin Karşılaştırılması" }
        ],
        "table": {
          "headers": ["Uygulama", "a Kenarı", "b Kenarı", "Hipotenüs c", "İç yarıçap r", "Yarı çevre s", "Alan"],
          "rows": [
            ["Cam pencere", "3", "4", "5", "1", "6", "6 m²"],
            ["Çelik braket", "5", "12", "13", "2", "15", "30 cm²"],
            ["Rampa profili", "6", "8", "10", "2", "12", "24 m²"],
            ["Çatı paneli", "8", "15", "17", "3", "20", "60 ft²"],
            ["Bahçe parseli", "7", "24", "25", "3", "28", "84 m²"],
            ["Kumaş yelken", "9", "12", "15", "3", "18", "54 ft²"],
            ["Arazi parseli", "9", "40", "41", "4", "45", "180 m²"],
            ["Kontrplak şablon", "12", "16", "20", "4", "24", "96 cm²"],
            ["Tabela paneli", "20", "21", "29", "6", "35", "210 m²"],
            ["Tente desteği", "15", "20", "25", "5", "30", "150 ft²"],
            ["Endüstriyel panel", "11", "60", "61", "5", "66", "330 m²"],
            ["Çatı uç kesiti", "13", "84", "85", "6", "91", "546 ft²"]
          ]
        }
      },
      "sec-relationship": {
        "h2": "İç Yarıçap ve Yarı Çevre Üç Kenarla Nasıl İlişkilidir?",
        "blocks": [
          { "kind": "p", "text": "Dik üçgende iç yarıçap ve yarı çevre kenarlardan bağımsız değildir; onlardan kurulur. [[r=\\frac{a+b-c}{2}]] ve [[s=\\frac{a+b+c}{2}]] ifadelerinden başlayarak iki ifadeyi toplayın ve çıkarın. Toplamak [[[\\boxed{s+r=a+b}]]] verir, çıkarmak [[[\\boxed{s-r=c}]]] verir. Bu iki özdeşlik, verilen gösterim altında dik üçgenlere özgüdür ve hesaplayıcının iki girdisini üçgenin kendisi hakkında şaşırtıcı miktarda bilgiye dönüştürür." },
          { "kind": "h3", "text": "Hipotenüsü Geri Elde Etmek" },
          { "kind": "p", "text": "[[s-r=c]] ifadesinden, [[r]] ve [[s]] bilindiğinde hipotenüs geri elde edilebilir. [[r=2]] ve [[s=12]] için: [[c=12-2]], [[[\\boxed{c=10}]]] Böylece iki girdi, başka ölçüme gerek kalmadan en uzun kenarı ortaya çıkarır." },
          { "kind": "h3", "text": "İki Dik Kenarın Toplamını Geri Elde Etmek" },
          { "kind": "p", "text": "[[a+b=s+r]] ifadesinden dik kenarların toplamı doğrudan bulunur. [[r=2]] ve [[s=12]] için: [[a+b=14]]. Yalnızca toplam, her kenarı tek tek belirleyemez; tekil uzunluklar için bir bilgi parçası daha gerekir." },
          { "kind": "h3", "text": "İki Dik Kenarın Çarpımını Geri Elde Etmek" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]] ve [[K=rs]] olduğundan [[[\\boxed{ab=2rs}]]] bulunur. [[r=2]] ve [[s=12]] için: [[ab=48]]. [[a+b=14]] ve [[ab=48]] ile iki dik kenar 6 ve 8'dir: [[6+8=14]] ve [[6\\times8=48]]. İki dik kenar, üçgenin alanını değiştirmeden yer değiştirebilir." },
          { "kind": "h3", "text": "Her İki Dik Kenar Uzunluğunu Geri Elde Etmek" },
          { "kind": "p", "text": "Toplam ve çarpım, [[a]] ve [[b]]'yi [[t^2-(s+r)t+2rs=0]] denkleminin iki kökü yapar ve [[[\\boxed{a,b=\\frac{(s+r)\\pm\\sqrt{(s+r)^2-8rs}}{2}}]]] verir. İki işaret, iki olası dik kenar atamasına karşılık gelir. [[r=2]] ve [[s=12]] ile: [[a,b=\\frac{14\\pm\\sqrt{196-192}}{2}]], yani [[a,b=\\frac{14\\pm2}{2}]]; dik kenarlar 6 ve 8'dir. Bu, ek bir hesaplayıcı özelliği değil, ileri düzey bir matematiksel çıkarımdır." }
        ]
      },
      "sec-valid": {
        "h2": "İç Yarıçap ve Yarı Çevrenin Geçerli Bir Dik Üçgen Oluşturduğu Nasıl Kontrol Edilir",
        "blocks": [
          { "kind": "p", "text": "Hesaplayıcı iki girdiyi çarpar ama her pozitif uzunluk çifti bir dik üçgeni tanımlamaz. Aşağıdaki kontroller aritmetiği geometriden ayırır." },
          { "kind": "h3", "text": "Temel Girdi Koşulları" },
          { "kind": "p", "text": "Girdiler [[r>0]] ve [[s>0]] koşullarını sağlamalıdır. Dik üçgen için [[s>r]] de gerekir, çünkü [[c=s-r]] ve hipotenüs pozitif olmalıdır. Bu üç koşul gereklidir ama yeterli değildir." },
          { "kind": "h3", "text": "İleri Düzey Dik Üçgen Tutarlılık Kontrolü" },
          { "kind": "p", "text": "[[a+b=s+r]] ve [[ab=2rs]] ifadelerinden, iki dik kenar ancak ve ancak diskriminant [[\\Delta=(s+r)^2-8rs]] negatif olmadığında gerçeldir. Sadeleştirilmiş hali: [[[\\boxed{\\Delta=s^2-6rs+r^2}]]] Gerçel dik kenar uzunlukları için [[\\Delta\\geq0]]. [[s]]'nin [[r]]'yi aşması gerektiğinden, eşdeğer dik üçgen koşulu [[[\\boxed{\\frac{s}{r}\\geq3+2\\sqrt2}]]] ya da [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt2}]]] olur. Eşitlik, olası en sıkı uyum olan ikizkenar dik üçgende gerçekleşir. Bu, yukarıdaki temel kontrollerden açıkça ayrılmış, ileri düzey bir matematiksel uyumluluk testidir." },
          { "kind": "h3", "text": "Geçerli Örnek" },
          { "kind": "p", "text": "[[r=2]] ve [[s=12]] verildiğinde oran [[\\frac{s}{r}=6]] olur. [[6>3+2\\sqrt2]] (yaklaşık 5,83) olduğundan bu değerler geçerli bir dik üçgeni tanımlayabilir ve karşılık gelen kenarlar 6, 8 ve 10'dur." },
          { "kind": "h3", "text": "Uyumsuz Örnek" },
          { "kind": "p", "text": "[[r=2]] ve [[s=10]] verildiğinde oran [[\\frac{s}{r}=5]] olur; bu, gerekli yaklaşık 5,83 eşiğinin altındadır. Bu çift, girdilerin çarpımı sayısal bir sonuç üretse de bir dik üçgeni tanımlayamaz. [[rs]]'yi hesaplamak ile ölçümlerin bir dik üçgeni tanımladığını doğrulamak iki farklı iştir. Bu kılavuz, hesaplayıcının bu kontrolü otomatik olarak yaptığını iddia etmez." }
        ]
      },
      "sec-heron": {
        "h2": "İç Yarıçap Formülü Heron Formülü ile Nasıl Karşılaştırılır?",
        "blocks": [
          { "kind": "p", "text": "Heron formülü alanı üç kenardan hesaplar: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Üç kenar uzunluğunu ve yarı çevreyi kullanır, dejenere olmayan her üçgen için çalışır ve ayrı bir girdi olarak iç yarıçapa ihtiyaç duymaz. Bunu [[[\\boxed{K=rs}]]] ile karşılaştırın. İkisi yakın akrabadır: yarı çevre [[s]] ikisinde de görünür ve uyuştuklarını kanıtlamak, [[K=rs]]'nin doğru olduğunu görmenin en temiz yollarından biridir." },
          { "kind": "h3", "text": "İç Yarıçap Formülü Ne Zaman Daha Kolaydır?" },
          { "kind": "p", "text": "İç yarıçap ve yarı çevre zaten biliniyorsa [[K=rs]] özellikle elverişlidir: tek çarpma, karekök yok, kenar farklarını çarpanlarına ayırma yok. İç teğet çember ölçülmüşse ya da önceki adımlar [[r]] ve [[s]]'yi zaten üretmişse alana giden en kısa yol budur." },
          { "kind": "h3", "text": "Heron Formülü Ne Zaman Daha Yararlıdır?" },
          { "kind": "p", "text": "Üç kenar uzunluğu biliniyor ama iç yarıçap hesaplanmamışsa Heron formülü daha iyi seçimdir. [[a]], [[b]] ve [[c]]'den, [[r]] üzerinden dolanmadan alana doğrudan ulaşır. İki formülden biri evrensel olarak daha doğru değildir; tutarlı girdilerde ikisi de kesindir ve yalnızca girdiler tutarsızsa anlaşmazlar." },
          { "kind": "h3", "text": "İki Formülü 3-4-5 Üçgeniyle Doğrulayın" },
          { "kind": "p", "text": "Verilenler [[a=3]], [[b=4]], [[c=5]]; [[s=6]] ve [[r=1]] ile. İç yarıçapla: [[K=1\\times6=6]]. Heron formülüyle: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], yani [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]] Sonuçlar uyuşur, çünkü iki formül de aynı bölgeyi ölçer; tek alanın iki ifadesidirler ve aralarındaki uyum, aritmetiğin doğru olduğunun güçlü bir işaretidir." }
        ]
      },
      "sec-legs": {
        "h2": "İç Yarıçap Formülü Neden Dik Kenar Formülüyle Aynı Alanı Üretir?",
        "blocks": [
          { "kind": "p", "text": "İki formül aynı alanı iddia eder: [[K=\\frac{ab}{2}]] ve [[K=rs]]. [[r]] ve [[s]]'yi kenarlar cinsinden yazmak [[rs=\\frac{a+b-c}{2}\\times\\frac{a+b+c}{2}]] verir; buradan [[rs=\\frac{(a+b-c)(a+b+c)}{4}]]. Pay, karelerin farkıdır: [[rs=\\frac{(a+b)^2-c^2}{4}]]. Pisagor teoremi [[c^2=a^2+b^2]] uygulansın: [[rs=\\frac{a^2+2ab+b^2-a^2-b^2}{4}]]; o halde [[[\\boxed{rs=\\frac{ab}{2}}]]] İki formül her dik üçgende özdeştir; tutarlı girdilerde anlaşmazlığa düşemezler." },
          { "kind": "p", "text": "3-4-5 üçgeniyle kontrol edin: [[r=1]], [[s=6]], [[rs=6]] ve [[\\frac{ab}{2}=\\frac{3\\times4}{2}=6]]. 6-8-10 üçgeniyle: [[r=2]], [[s=12]], [[rs=24]] ve [[\\frac{ab}{2}=\\frac{6\\times8}{2}=24]]. Bilinen dik kenar formülüyle iç yarıçap formülü, farklı kıyafetler giymiş aynı büyüklüktür." }
        ]
      },
      "sec-mistakes": {
        "h2": "İç Yarıçap ve Yarı Çevreden Alan Hesaplarken Yaygın Hatalar",
        "blocks": [
          { "kind": "p", "text": "Yanlış cevapların çoğu kötü aritmetikten değil, yanlış etiketlenmiş girdilerden gelir. Aşağıdaki on beş hata neredeyse hepsini kapsar." },
          { "kind": "h3", "text": "1. İç Yarıçapı Çevrel Yarıçapla Karıştırmak" },
          { "kind": "p", "text": "İç yarıçap içerdeki çemberdir; çevrel yarıçap çevredeki çemberdir. 6-8-10 üçgeninde [[r=2]] ama [[R=\\frac{c}{2}=5]]'tir. [[r]] için 5 kullanmak, 24 yerine [[K=5\\times12=60]] verir. Çözüm: çemberin üçgenin içinde mi yoksa köşelerinden mi geçtiğini sorun." },
          { "kind": "h3", "text": "2. Yarı Çevre Yerine Tam Çevreyi Kullanmak" },
          { "kind": "p", "text": "Formül [[s]]'ye, yani çevrenin yarısına ihtiyaç duyar. [[r=2]] ile [[s=12]] yerine tam çevre 24 kullanılırsa sonuç [[K=2\\times24=48]] olur; doğru 24'ün iki katı. Çözüm: çarpmadan önce çevreyi yarıya indirin." },
          { "kind": "h3", "text": "3. Son Cevabı Bir Kez Daha İkiye Bölmek" },
          { "kind": "p", "text": "Yarıya indirme [[s]]'nin içinde zaten var. [[2\\times12=24]]'ü bir kez daha ikiye bölmek 12 verir; gerçek alanın yarısı. Çözüm: [[rs]]'yi hesaplayın ve durun." },
          { "kind": "h3", "text": "4. İç Merkezi Çevrel Merkezle Karıştırmak" },
          { "kind": "p", "text": "İç merkez açıortayların kesişimidir; çevrel merkez dik kenar orta dikmelerinin kesişimidir ve dik üçgende hipotenüsün orta noktasındadır. Bunlar farklı noktalardır. Çözüm: ihtiyaç duyduğunuz çember için doğru çizimi izleyin." },
          { "kind": "h3", "text": "5. İç Yarıçapı Üçgenin Kenarı Sanmak" },
          { "kind": "p", "text": "İç yarıçap üçgenin içindeki bir uzaklıktır, üç kenarından biri değildir. Asla [[a+b+c]]'nin içine ait değildir. Çözüm: [[r]]'yi her kenar uzunluğu ifadesinin dışında tutun." },
          { "kind": "h3", "text": "6. Yanlış Dik Üçgen İç Yarıçap Formülü Kullanmak" },
          { "kind": "p", "text": "Dik üçgen kestirmesi [[r=\\frac{a+b-c}{2}]]'dir; işareti yanlış ya da yanlış kenarı yarıya indiren bir türevi değildir. Yaygın bir kayma, üçgen ikizkenar olmadıkça farklı bir sayı veren [[r=\\frac{a+c-b}{2}]] kullanmaktır. Çözüm: çıkarılan kenar her zaman hipotenüs [[c]]'dir." },
          { "kind": "h3", "text": "7. c'nin Hipotenüs Olduğunu Unutmak" },
          { "kind": "p", "text": "Kestirmede [[c]] özellikle hipotenüs demektir. Çözüm: formülü uygulamadan önce en uzun kenarı [[c]] olarak etiketleyin." },
          { "kind": "h3", "text": "8. Hipotenüs Olarak Yanlış Kenarı Kullanmak" },
          { "kind": "p", "text": "[[c]] için bir dik kenar seçmek hem [[r]]'yi hem [[s]]'yi bozar. Çözüm: hipotenüs, dik açının karşısındaki kenardır; her zaman en uzundur." },
          { "kind": "h3", "text": "9. Farklı Ölçü Birimlerini Karıştırmak" },
          { "kind": "p", "text": "1 m yarı çevreyle 20 cm iç yarıçap, dönüşüm yapılmadan anlamlı bir sayı vermez. Çözüm: önce tek birime dönüştürün, sonra çarpın." },
          { "kind": "h3", "text": "10. Sıfır ya da Negatif Uzunluklar Girmek" },
          { "kind": "p", "text": "Sıfır ve negatif uzunluklar hiçbir üçgeni tanımlamaz. Çözüm: girilen her uzunluğun pozitif olduğunu kontrol edin." },
          { "kind": "h3", "text": "11. Her Pozitif r ve s Çiftinin Bir Dik Üçgeni Temsil Ettiğini Varsaymak" },
          { "kind": "p", "text": "Daha önce gösterildiği gibi, [[s=10]] ile [[r=2]] 20 sayısını verir ama dik üçgen vermez. Çözüm: geometri önemliyken [[s/r\\geq3+2\\sqrt2]] kontrolünü çalıştırın." },
          { "kind": "h3", "text": "12. Alanı Doğrusal Birimlerle Bildirmek" },
          { "kind": "p", "text": "24 m²'lik bir alan 24 m değildir. Çözüm: kare birimi sayıyla birlikte yazın." },
          { "kind": "h3", "text": "13. İç Yarıçapı Erken Yuvarlamak" },
          { "kind": "p", "text": "Çarpmadan önce [[r]]'yi yuvarlamak tüm alanı kaydırır. Çözüm: ara adımlarda tam duyarlılığı koruyun ve yalnızca son cevabı yuvarlayın." },
          { "kind": "h3", "text": "14. Yarı Çevreyi İki Kenarın Toplamıyla Karıştırmak" },
          { "kind": "p", "text": "Yarı çevre, üç kenarın toplamının yarısıdır; iki kenarın toplamı değildir. Çözüm: üç kenarı toplayın, sonra yarıya indirin." },
          { "kind": "h3", "text": "15. Formülün Yalnızca Dik Üçgenlerde Çalıştığını Varsaymak" },
          { "kind": "p", "text": "[[K=rs]] dejenere olmayan her üçgen için geçerlidir; yalnızca [[r=\\frac{a+b-c}{2}]] kestirmesi dik üçgene özgüdür. Çözüm: alan formülünü serbestçe uygulayın ama dik olmayan üçgenlerde genel iç yarıçap türetimini kullanın." },
          { "kind": "h3", "text": "Yanlışa Karşı Doğru: Somut Bir Örnek" },
          { "kind": "p", "text": "6-8-10 üçgenini kullanın. Doğrusu: [[r=2]], [[s=12]], [[K=2\\times12=24]]. Tam çevreyi yanlış kullanmak: [[K=2\\times24=48]]; bu, alanı iki katına çıkarır. Doğru cevabı bir kez daha ikiye bölmek: [[K=\\frac{24}{2}=12]]; bu da yarıya indirir. İki hata da [[s]]'nin içinde yaşayan bir bölü ikinin yanlış kullanılmasından gelir." }
        ]
      },
      "sec-verify": {
        "h2": "Dik Üçgen Alanınızın Doğru Olup Olmadığı Nasıl Kontrol Edilir",
        "blocks": [
          { "kind": "p", "text": "Birbirinden bağımsız birkaç kontrol, yaygın hataları yakalar. 3-4-5 üçgeni bunların çoğunu gösterir." },
          { "kind": "h3", "text": "Yöntem 1: İç Yarıçap ve Yarı Çevre" },
          { "kind": "p", "text": "Girilen değerlerle [[K=rs]]'yi yeniden hesaplayın. [[r=1]] ve [[s=6]] için [[K=1\\times6=6]]. İkinci geçiş yazım hatalarını yakalar." },
          { "kind": "h3", "text": "Yöntem 2: İki Dik Kenar" },
          { "kind": "p", "text": "Dik kenarlar biliniyor ya da geri elde edilmişse [[K=\\frac{ab}{2}]] uyuşmalıdır. Burada [[\\frac{3\\times4}{2}=6]], [[1\\times6=6]] ile eşleşir: iki yöntem, bir üçgen, bir cevap." },
          { "kind": "h3", "text": "Yöntem 3: Pisagor Teoremi" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]] olduğunu doğrulayın: [[9+16=25]]. Kenarlar bunu sağlamıyorsa üçgen tanımı yanlıştır." },
          { "kind": "h3", "text": "Yöntem 4: Dik Üçgen İç Yarıçapı" },
          { "kind": "p", "text": "[[r=\\frac{a+b-c}{2}]] olduğunu doğrulayın: [[\\frac{3+4-5}{2}=1]]. Uyumsuzluk, girilen iç yarıçapın bu üçgene ait olmadığı anlamına gelir." },
          { "kind": "h3", "text": "Yöntem 5: Yarı Çevre" },
          { "kind": "p", "text": "[[s=\\frac{a+b+c}{2}]] olduğunu doğrulayın: [[\\frac{3+4+5}{2}=6]]. Bu, çevre ile yarı çevre karışıklıklarını yakalar." },
          { "kind": "h3", "text": "Yöntem 6: Heron Formülü" },
          { "kind": "p", "text": "[[K=\\sqrt{s(s-a)(s-b)(s-c)}]] olduğunu doğrulayın: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Bağımsız formüller arası uyum, mevcut en güçlü kontroldür." },
          { "kind": "p", "text": "Bağımsız formüller arası uyumun neden yararlı bir matematiksel kontrol olduğunu açıklayın: bir yoldaki hata başka bir yolda nadiren kendini tekrarlar; bu yüzden farklı formüllerden gelen iki eşleşen cevap, hem girdilerin hem aritmetiğin sağlam olduğu anlamına gelir." }
        ],
        "imgAlt": "K = rs, K = ab/2 ve Heron formülüyle karşılaştırılan 3-4-5 üçgeninin alanı",
        "figcaption": "Üç yöntem, bir cevap: K = rs, K = ab/2 ve Heron formülünün üçü de 3-4-5 üçgeni için 6 verir."
      },
      "sec-units": {
        "h2": "İç Yarıçap ve Yarı Çevre Hesaplarında Ölçü Birimlerini Anlamak",
        "blocks": [
          { "kind": "p", "text": "Alan iki boyutludur; bu yüzden birimi uzunluk biriminin karesidir. Sembollerle: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]. Aynı durum metre ile metrekare, milimetre ile milimetrekare, fit ile fit kare, inç ile inç kare için geçerlidir. Birim seçiciler, sonucun doğru etiketlenebilmesi için vardır." },
          { "kind": "h3", "text": "Her İki Girdi Neden Uyumlu Birimler Kullanmalıdır?" },
          { "kind": "p", "text": "Formül uygulanmadan önce iç yarıçap ve yarı çevre aynı birimle ifade edilmelidir. [[r=20\\text{ cm}]] ve [[s=1\\text{ m}]] ise önce dönüştürün: [[1\\text{ m}=100\\text{ cm}]]. Sonra [[K=20\\times100]], [[[\\boxed{K=2,000\\text{ cm}^2}]]] ya da eşdeğer olarak [[[\\boxed{K=0.2\\text{ m}^2}]]] Farklı birimlerdeki ölçüleri çarpmak, temiz bir birimi olmayan bir sayı üretir; o yüzden önce dönüştürün, sonra hesaplayın." },
          { "kind": "h3", "text": "Erken Yuvarlamadan Neden Kaçınmalısınız?" },
          { "kind": "p", "text": "[[r]] ya da [[s]]'nin yuvarlanmış değerleri son alanı biraz etkileyebilir, çünkü iç yarıçap doğrudan onunla çarpılır. Ara hesaplamalarda yeterli duyarlılığı koruyun ve yalnızca son cevabı yuvarlayın. Bu kılavuz, hesaplayıcının arayüzünün gösterdiğinin ötesinde iç duyarlılığı hakkında bir iddiada bulunmaz." },
          { "kind": "h3", "text": "Tam Ölçümler ve Pratik Ölçümler" },
          { "kind": "p", "text": "3-4-5 üçgeninin iç yarıçapı 1 gibi tam matematiksel boyutlar, fiziksel aletlerle alınan ölçümlerden farklı davranır. Alet belirsizliği alana akar; bu yüzden son basamağı, girdiler kadar güvenilir sayın. Şeritle ölçülmüş 2 cm'lik bir iç yarıçap gerçekte 1,9 ya da 2,1 olabilir ve alan bu belirsizliği taşır." }
        ]
      },
      "sec-related": {
        "h2": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
        "blocks": [
          { "kind": "p", "text": "Farklı ölçümler, farklı hesaplayıcılar gerektirir." }
        ]
      },
      "sec-faq": {
        "h2": "Sık Sorulan Sorular",
        "blocks": [
          { "kind": "p", "text": "Aşağıda iç yarıçap ve yarı çevreyle alan hakkında en yaygın soruların cevapları verilmiştir." }
        ]
      },
      "sec-conclusion": {
        "h2": "İki Ölçüm Tüm Alanı Taşır",
        "blocks": [
          { "kind": "p", "text": "İç yarıçap ve yarı çevre mütevazı girdiler gibi görünür ama birlikte üçgenin tüm kapsamını kodlar. Üç küçük üçgen üzerinden türetim, çarpımın neden tam olduğunu gösterir; teğet parçası gerekçesi, dik üçgen kestirmesinin nereden geldiğini gösterir; dik kenar formülü ve Heron formülüyle karşılaştırmalar ise sonucun geometrinin geri kalanıyla her zaman uyuştuğunu gösterir." },
          { "kind": "p", "text": "Çalışma alışkanlığı basittir: r ve s'nin gerçekte ne olduğunu doğrulayın, birimleri tutarlı tutun ve cevabı bağımsız bir formülle doğrulayın. Bu alışkanlıklar yerindeyken K = rs, üçgen geometrisindeki en güvenilir alan hesaplarından biridir." }
        ]
      }
    }
  },
  "sv": {
    "faqs": [
      {
        "question": "Vad är formeln för arean med inradie och semiperimeter?",
        "answer": "Multiplicera inradien r med semiperimetern s: K = rs. Till exempel ger r = 2 och s = 12 K = 24 kvadratenheter. Formeln gäller för varje icke-degenererad triangel, inte bara rätvinkliga trianglar."
      },
      {
        "question": "Vad är en inradie i en rätvinklig triangel?",
        "answer": "Det är radien hos cirkeln som är inskriven i triangeln, det vinkelräta avståndet från incentrum till varje sida. I en 3-4-5-triangel är inradien 1; i en 6-8-10-triangel är den 2."
      },
      {
        "question": "Hur beräknar man inradien i en rätvinklig triangel?",
        "answer": "Använd genvägen r = (a + b - c) / 2 utifrån de tre sidorna, där a och b är kateterna och c är hypotenusan. För en 5-12-13-triangel ger detta r = 2."
      },
      {
        "question": "Hur beräknar man semiperimetern?",
        "answer": "Addera de tre sidorna och halvera summan: s = (a + b + c) / 2. För en 5-12-13-triangel är s = 15. Den är alltid större än varje enskild sida."
      },
      {
        "question": "Varför är arean lika med inradien gånger semiperimetern?",
        "answer": "Att förbinda incentrum med de tre hörnen delar triangeln i tre mindre trianglar med gemensam höjd r och baserna a, b och c. Deras areor ar/2 + br/2 + cr/2 faktoriseras till r(a+b+c)/2, och eftersom s = (a+b+c)/2 blir summan rs."
      },
      {
        "question": "Fungerar formeln för icke-rätvinkliga trianglar?",
        "answer": "Ja. K = rs gäller för varje icke-degenererad triangel. Endast genvägen r = (a+b-c)/2 är specifik för rätvinkliga trianglar, eftersom den bygger på kvadraten som bildas vid den räta vinkeln."
      },
      {
        "question": "Vad är skillnaden mellan inradie och den omskrivna cirkelns radie?",
        "answer": "Inradien r är radien hos cirkeln inuti triangeln, som tangerar alla tre sidor; den omskrivna cirkelns radie R är radien hos cirkeln genom de tre hörnen. För en rätvinklig triangel är R = c/2."
      },
      {
        "question": "Kan jag beräkna arean utan att känna till alla tre sidor?",
        "answer": "Ja. Om inradien och semiperimetern redan är kända ger K = rs arean direkt med en enda multiplikation, utan att sidlängder behövs."
      },
      {
        "question": "Är semiperimetern samma sak som halva omkretsen?",
        "answer": "Ja, exakt: s = P/2 = (a+b+c)/2. Skillnaden spelar roll eftersom formeln behöver det halverade värdet; att använda hela omkretsen fördubblar svaret."
      },
      {
        "question": "Hur hänger inradien ihop med de tre sidorna?",
        "answer": "I en rätvinklig triangel är r = (a+b-c)/2, där a och b är kateterna och c är hypotenusan. Dessutom gäller s + r = a + b och s - r = c, så sidorna kan återskapas ur r och s."
      },
      {
        "question": "Vad är skillnaden mellan Herons formel och inradieformeln?",
        "answer": "Herons formel, K = sqrt(s(s-a)(s-b)(s-c)), behöver alla tre sidor; inradieformeln, K = rs, behöver bara r och s. Använd Heron när du har sidorna, och K = rs när r och s redan finns till hands. Båda ger samma area vid konsistenta indata."
      },
      {
        "question": "Hur kan jag kontrollera den beräknade arean?",
        "answer": "Kontrollera med oberoende metoder: kateterformeln K = ab/2, Pythagoras sats, inradiegenvägen, semiperimeterdefinitionen och Herons formel. Överensstämmelse mellan metoderna betyder att indata och räkningarna är korrekta."
      }
    ],
    "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
    "relatedItems": [
      "Areaberäknare för rätvinklig triangel från kateter",
      "Areaberäknare för rätvinklig triangel från hypotenusa och höjd",
      "Areaberäknare för rätvinklig triangel från vinkel",
      "Areaberäknare för rätvinklig triangel från höjd",
      "Inradieberäknare för rätvinklig triangel",
      "Semiperimeterberäknare för rätvinklig triangel"
    ],
    "relatedIntro": "Olika mätningar kräver olika kalkylatorer.",
    "faqHeading": "Vanliga frågor",
    "tocHeading": "I den här guiden",
    "tocItems": {
      "sec-intro": "Så beräknar du arean av en rätvinklig triangel med inradie och semiperimeter",
      "sec-incircle": "Vad är en inskriven cirkel i geometri?",
      "sec-semiperimeter": "Vad är en triangels semiperimeter?",
      "sec-formula": "Varför är arean lika med inradien gånger semiperimetern?",
      "sec-inradius": "Så hittar du inradien i en rätvinklig triangel",
      "sec-howto": "Så använder du areakalkylatorn för inradie och semiperimeter",
      "sec-examples": "Steg-för-steg-exempel",
      "sec-applications": "Verkliga tillämpningar",
      "sec-relationship": "Hur inradie och semiperimeter hänger ihop med de tre sidorna",
      "sec-valid": "Så kontrollerar du om dina mätningar är giltiga",
      "sec-heron": "Så står sig inradieformeln mot Herons formel",
      "sec-legs": "Varför inradieformeln ger samma area som kateterformeln",
      "sec-mistakes": "Vanliga misstag",
      "sec-verify": "Så kontrollerar du din area",
      "sec-units": "Måttenheter och avrundning",
      "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "sec-faq": "Vanliga frågor",
      "sec-conclusion": "Slutsats"
    },
    "sections": {
      "sec-intro": {
        "h2": "Så beräknar du arean av en rätvinklig triangel med inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "En rätvinklig triangel har inradien [[r=2]] och semiperimetern [[s=12]]. Tillämpa [[K=r\\times s]]: [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Triangeln omsluter 24 kvadratenheter plan area. Detta är hela metoden som kalkylatorn automatiserar: två mätningar, en multiplikation, ett svar." },
          { "kind": "p", "text": "Inradien är radien hos cirkeln som passar tätt inuti triangeln och tangerar alla tre sidor. Semiperimetern är halva avståndet runt triangeln. Tillsammans räcker de för att bestämma arean, eftersom cirkelns radie fungerar som höjden i tre mindre trianglar vars baser är triangelns sidor. Denna identitet gäller för varje icke-degenererad triangel, inte bara rätvinkliga; det som är speciellt med rätvinkliga trianglar är det snabba sättet som inradien själv kan beräknas ur de tre sidorna. Den är mest användbar när den inskrivna cirkeln har mätts direkt, eller när inradien och semiperimetern redan är kända från tidigare arbete." }
        ]
      },
      "sec-incircle": {
        "h2": "Vad är en inskriven cirkel i geometri?",
        "blocks": [
          { "kind": "p", "text": "Beteckningarna i hela guiden är: [[A]], [[B]] och [[C]] är hörnen och vinklarna med [[C=90^\\circ]]; [[a]] och [[b]] är de två kateterna; [[c]] är hypotenusan mitt emot [[C]]; [[r]] är inradien; [[I]] är incentrum; [[s]] är semiperimetern; [[P]] är omkretsen; och [[K]] är arean, som används överallt så att den aldrig förväxlas med vinkeln [[A]]." },
          { "kind": "h3", "text": "Definition av en inskriven cirkel" },
          { "kind": "p", "text": "En inskriven cirkel är den största cirkel som ryms inuti en triangel samtidigt som den tangerar alla tre sidor. Den ligger helt inuti eftersom varje sida i triangeln är en tangent till cirkeln: cirkeln når sidan i exakt en punkt och stannar på insidan av den. En cirkel som bara ligger nära en sida räknas inte; den inskrivna cirkeln måste tangera varje sida, vidröra den i en enda punkt och sedan vända tillbaka in mot det inre. Varje icke-degenererad triangel har exakt en sådan cirkel, och den har ett unikt centrum, eftersom de tre linjerna inte är parallella och deras geometri låser cirkeln helt." },
          { "kind": "h3", "text": "Vad är en inradie?" },
          { "kind": "p", "text": "Inradien är avståndet från incentrum till varje sida i triangeln. Om [[I]] är incentrum och [[D]] är punkten där den inskrivna cirkeln tangerar en sida, så är [[r=ID]]. Cirkelns radie är det kortaste avståndet från dess centrum till tangentsidan, och det kortaste avståndet är detsamma för alla tre sidor, vilket är varför cirkeln tangerar alla tre i stället för att bara ligga nära dem." },
          { "kind": "h3", "text": "Varför är inradien vinkelrät mot varje sida?" },
          { "kind": "p", "text": "En grundläggande egenskap hos cirklar säger att i varje punkt där en linje tangerar en cirkel möter radien till den punkten linjen i rät vinkel. Så om [[D]] är tangeringspunkten på sidan [[AB]], så är [[ID\\perp AB]]. Detsamma gäller för de två andra sidorna. Denna vinkelräthet är inte dekorativ: den är det som låter varje radie fungera som höjden i en mindre triangel när areaformeln härleds, eftersom en triangels höjd måste vara vinkelrät mot dess bas." },
          { "kind": "h3", "text": "Att förstå incentrum" },
          { "kind": "p", "text": "Incentrum [[I]] är punkten där triangelns tre inre vinkelbisektriser möts. Varje bisektris är mängden av punkter med lika avstånd till de två sidor som bildar vinkeln, så en punkt som ligger på alla tre bisektriser har lika avstånd till alla tre sidor, och den måste ligga inuti triangeln. Det gemensamma avståndet är exakt inradien, och cirkeln med centrum i [[I]] och radien [[r]] tangerar varje sida en gång: den inskrivna cirkeln." },
          { "kind": "h3", "text": "Är inradien samma sak som den omskrivna cirkelns radie?" },
          { "kind": "p", "text": "Nej. Inradien [[r]] är radien hos cirkeln inuti triangeln, medan den omskrivna cirkelns radie [[R]] är radien hos cirkeln som går genom alla tre hörnen, den omskrivna cirkeln. För en rätvinklig triangel ligger den omskrivna cirkelns centrum i hypotenusans mittpunkt, så [[[\\boxed{R=\\frac{c}{2}}]]] De två radierna beskriver helt olika cirklar: den ena är inskriven i triangeln, den andra är ritad runt den. Att blanda ihop dem är ett av de vanligaste felen i detta ämne, så håll dem isär: [[r]] för inuti, [[R]] för runt." }
        ],
        "imgAlt": "Rätvinklig triangel ABC med inskriven cirkel: incentrum I, inradie r, tangeringspunkter och omskriven cirkel",
        "figcaption": "Triangel ABC och dess inskrivna cirkel: incentrum I, inradie r = ID med ID vinkelrät mot varje sida, plus den omskrivna cirkeln som jämförelse."
      },
      "sec-semiperimeter": {
        "h2": "Vad är en triangels semiperimeter?",
        "blocks": [
          { "kind": "h3", "text": "Definition av semiperimeter" },
          { "kind": "p", "text": "Semiperimetern är halva triangelns totala omkrets: [[[\\boxed{s=\\frac{a+b+c}{2}}]]], där [[a]] och [[b]] är kateterna och [[c]] är hypotenusan. Den är en längd, som varje sida, och den förtjänar sin plats i areaformeln eftersom den kombinerar alla tre sidor till ett tal." },
          { "kind": "h3", "text": "Skillnaden mellan omkrets och semiperimeter" },
          { "kind": "p", "text": "Omkretsen är hela avståndet runt triangeln, [[P=a+b+c]], medan semiperimetern är hälften av den, [[s=\\frac{P}{2}]]. För en 3-4-5-triangel: [[P=3+4+5=12]] och [[s=\\frac{12}{2}=6]]. Semiperimetern är inte randens längd; den är hälften av den, och att mata in hela omkretsen i [[K=rs]] skulle fördubbla den sanna arean." },
          { "kind": "h3", "text": "Varför används semiperimetern i areaformeln?" },
          { "kind": "p", "text": "Att förbinda incentrum med de tre hörnen delar triangeln i tre mindre trianglar, var och en med den vinkelräta höjden [[r]]. Deras baser är [[a]], [[b]] och [[c]], så deras sammanlagda area är [[K=\\frac12r(a+b+c)]]. Eftersom [[s=\\frac{a+b+c}{2}]] är halvomkretsen redan inbyggd i [[s]], vilket ger [[K=rs]]. Nästa avsnitt härleder detta fullständigt." },
          { "kind": "h3", "text": "Kan semiperimetern vara mindre än en sida?" },
          { "kind": "p", "text": "Nej. Triangelolikheten säger att för varje triangel gäller [[a+b>c]], så [[s=\\frac{a+b+c}{2}>c]]. Samma resonemang gäller för de två andra sidorna: [[s>a]] och [[s>b]]. Semiperimetern är alltid större än varje enskild sida. Detta är en snabb rimlighetskontroll av indata: om en påstådd semiperimeter är mindre än någon sida kan talen inte beskriva en verklig triangel." }
        ]
      },
      "sec-formula": {
        "h2": "Varför är en triangels area lika med inradien gånger semiperimetern?",
        "blocks": [
          { "kind": "p", "text": "Utgå från den vanliga triangelarearegeln: [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Att dra sträckor från incentrum [[I]] till de tre hörnen delar den ursprungliga triangeln i tre mindre trianglar. Varje mindre triangel har en bas lika med en sida i den ursprungliga triangeln och en vinkelrät höjd lika med inradien [[r]], eftersom radien möter varje sida i rät vinkel. Detta fungerar för varje icke-degenererad triangel; för denna kalkylator är triangeln rätvinklig, men areaidentiteten i sig är helt allmän." },
          { "kind": "h3", "text": "Arean av den första mindre triangeln" },
          { "kind": "p", "text": "Den mindre triangeln som står på sidan [[a]] har basen [[a]] och höjden [[r]]: [[[\\boxed{K_1=\\frac{ar}{2}}]]]" },
          { "kind": "h3", "text": "Arean av den andra mindre triangeln" },
          { "kind": "p", "text": "Den mindre triangeln som står på sidan [[b]] har basen [[b]] och höjden [[r]]: [[[\\boxed{K_2=\\frac{br}{2}}]]]" },
          { "kind": "h3", "text": "Arean av den tredje mindre triangeln" },
          { "kind": "p", "text": "Den mindre triangeln som står på sidan [[c]] har basen [[c]] och höjden [[r]]: [[[\\boxed{K_3=\\frac{cr}{2}}]]]" },
          { "kind": "h3", "text": "Addera de tre areorna" },
          { "kind": "p", "text": "De tre mindre trianglarna täcker tillsammans exakt den ursprungliga utan överlapp, så [[K=K_1+K_2+K_3]]. Substituera: [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Bryt ut [[\\frac{r}{2}]]: [[K=\\frac{r(a+b+c)}{2}]]. Kom ihåg att [[s=\\frac{a+b+c}{2}]], alltså [[[\\boxed{K=r\\times s}]]] Varje övergång är motiverad: täckningen är exakt, höjden [[r]] är gemensam, och semiperimetern absorberar divisionen med två." },
          { "kind": "h3", "text": "Varför behöver denna formel ingen ytterligare division med två?" },
          { "kind": "p", "text": "Eftersom en halv redan är invikt i semiperimetern. De tre halvorna kombineras till [[\\frac{r(a+b+c)}{2}]], och [[s]] är exakt halva omkretsen, så att dividera med två en andra gång skulle reducera det korrekta uttrycket till en fjärdedel. Beräkna [[r\\times s]] och stanna där; en ytterligare halvering är ett misstag, inte en korrigering." }
        ],
        "imgAlt": "Inskriven cirkel delar triangel ABC i tre mindre trianglar med höjd r och baser a, b, c",
        "figcaption": "Tre mindre trianglar med gemensam höjd r och baser a, b, c: deras areor ar/2 + br/2 + cr/2 summerar till rs."
      },
      "sec-inradius": {
        "h2": "Så beräknar du inradien med de tre sidlängderna",
        "blocks": [
          { "kind": "p", "text": "När de tre sidorna är kända följer den rätvinkliga triangelns inradie en genväg som helt undviker att rita den inskrivna cirkeln: [[[\\boxed{r=\\frac{a+b-c}{2}}]]], där [[a]] och [[b]] är de vinkelräta kateterna och [[c]] är hypotenusan. Detta är ett av de mest användbara faktumen i rätvinklig triangels geometri." },
          { "kind": "h3", "text": "Härledning av den rätvinkliga triangelns inradieformel" },
          { "kind": "p", "text": "Härledningen använder satsen om lika tangentstycken: från en gemensam yttre punkt har de två tangentstycken som dras till en cirkel lika längd. Låt tangentlängderna från de tre hörnen vara [[x]] från hörnet [[A]], [[y]] från hörnet [[B]] och [[z]] från hörnet [[C]]. Vid den räta vinkeln [[C]] löper den inskrivna cirkelns två tangenter längs de vinkelräta kateterna och har vardera längden [[r]], och bildar en liten kvadrat med de två radierna, så [[z=r]]. Sidorna blir då [[a=y+r]], [[b=x+r]] och [[c=x+y]]. Subtrahera: [[a+b-c=(y+r)+(x+r)-(x+y)]], så [[a+b-c=2r]], vilket ger [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Kvadraten vid den räta vinkeln är anledningen till att denna genväg tillhör de rätvinkliga trianglarna ensamma." },
          { "kind": "h3", "text": "Exempel med en 3-4-5-triangel" },
          { "kind": "p", "text": "Givet [[a=3]], [[b=4]], [[c=5]]: [[r=\\frac{3+4-5}{2}]], [[[\\boxed{r=1}]]] Den inskrivna cirkelns radie är exakt 1, ingen konstruktion behövs." },
          { "kind": "h3", "text": "Exempel med en 5-12-13-triangel" },
          { "kind": "p", "text": "Givet [[a=5]], [[b=12]], [[c=13]]: [[r=\\frac{5+12-13}{2}]], [[[\\boxed{r=2}]]] Återigen faller inradien direkt ur sidlängderna." },
          { "kind": "h3", "text": "Att hitta semiperimetern samtidigt" },
          { "kind": "p", "text": "Med samma tre sidor, beräkna [[s=\\frac{a+b+c}{2}]] vid sidan av [[r]]. För 5-12-13-triangeln: [[s=\\frac{5+12+13}{2}=15]], och sedan [[K=rs=2\\times15=30]]. En genomgång av de tre sidorna ger både kalkylatorns indata och själva arean." },
          { "kind": "h3", "text": "När ska du använda denna genväg?" },
          { "kind": "p", "text": "Använd den närhelst de tre sidorna är kända men den inskrivna cirkeln inte har mätts eller ritats: läroboksövningar, konstruktionsmått och mätdata ger vanligtvis sidlängder, inte en inradie. Genvägen omvandlar dem till [[r]] på en rad. När inradien i stället är den uppmätta storheten, mata in den direkt och hoppa över omvandlingen." }
        ],
        "imgAlt": "3-4-5-triangel som visar lika tangentstycken och genvägen r = (a+b-c)/2 = 1",
        "figcaption": "Tangentstycken på en 3-4-5-triangel: lika längder från varje hörn ger r = (3 + 4 - 5)/2 = 1."
      },
      "sec-howto": {
        "h2": "Så använder du areakalkylatorn för inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Kalkylatorn behöver exakt två indata. Genomgången nedan följer ordningen på skärmen, från kända mätningar till ett verifierat resultat." }
        ],
        "steps": [
          "<strong>Identifiera inradien r.</strong> Radien hos den inskrivna cirkeln, det vinkelräta avståndet från incentrum till varje sida.",
          "<strong>Identifiera semiperimetern s.</strong> Halva triangelns totala omkrets.",
          "<strong>Om de tre sidorna är kända, beräkna r med [[r=\\frac{a+b-c}{2}]].</strong> Här är [[a]] och [[b]] kateterna och [[c]] hypotenusan.",
          "<strong>Beräkna s med [[s=\\frac{a+b+c}{2}]].</strong>",
          "<strong>Mata in inradien i det första fältet.</strong>",
          "<strong>Mata in semiperimetern i det andra fältet.</strong>",
          "<strong>Välj kompatibla längdenheter.</strong> Båda mätningarna måste använda samma enhet.",
          "<strong>Kontrollera att båda värdena är positiva.</strong> Längder som är noll eller negativa beskriver ingen triangel.",
          "<strong>Klicka på Calculate Area.</strong>",
          "<strong>Granska resultatet.</strong> Arean visas i de kvadratenheter som motsvarar indata.",
          "<strong>Bekräfta att svaret uttrycks i kvadratenheter.</strong> Meter ger kvadratmeter; centimeter ger kvadratcentimeter.",
          "<strong>Granska den matematiska lösningen.</strong> Den visar substitutionen och räkningarna.",
          "<strong>Använd Reset när du påbörjar en ny beräkning.</strong> Den rensar båda fälten så att nästa beräkning startar rent."
        ],
        "closingParagraphs": [
          "Kalkylatorn frågar inte efter de tre sidlängderna: inradien och semiperimetern innehåller redan allt som formeln [[K=rs]] behöver."
        ]
      },
      "sec-examples": {
        "h2": "Steg-för-steg-exempel på areaberäkning med inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Fyra lösta exempel bygger metoden uppåt från det bekanta. Var och ett beräknar semiperimetern och inradien ur de tre sidorna, tillämpar [[K=rs]] med varje substitution visad, och verifierar med kateterformeln." },
          { "kind": "h3", "text": "Exempel 1: Rätvinklig 3-4-5-triangel" },
          { "kind": "p", "text": "Givet [[a=3]], [[b=4]], [[c=5]]. Steg 1: semiperimetern, [[s=\\frac{3+4+5}{2}=6]]. Steg 2: inradien, [[r=\\frac{3+4-5}{2}=1]]. Steg 3: tillämpa formeln, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Verifiera: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Exempel 2: Rätvinklig 6-8-10-triangel" },
          { "kind": "p", "text": "Givet [[a=6]], [[b=8]], [[c=10]]. Då är [[s=\\frac{6+8+10}{2}=12]], [[r=\\frac{6+8-10}{2}=2]] och [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]] Verifiera: [[K=\\frac{6\\times8}{2}=24]]." },
          { "kind": "h3", "text": "Exempel 3: Rätvinklig 5-12-13-triangel" },
          { "kind": "p", "text": "Givet [[a=5]], [[b=12]], [[c=13]]. Då är [[s=\\frac{5+12+13}{2}=15]], [[r=\\frac{5+12-13}{2}=2]] och [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Verifiera: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Exempel 4: Rätvinklig 8-15-17-triangel" },
          { "kind": "p", "text": "Givet [[a=8]], [[b=15]], [[c=17]]. Då är [[s=\\frac{8+15+17}{2}=20]], [[r=\\frac{8+15-17}{2}=3]] och [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]] Verifiera: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Jämförelse av grundläggande exempel" }
        ],
        "table": {
          "headers": ["Triangel", "Semiperimeter s", "Inradie r", "Area K = rs"],
          "rows": [
            ["3-4-5", "6", "1", "6"],
            ["6-8-10", "12", "2", "24"],
            ["5-12-13", "15", "2", "30"],
            ["8-15-17", "20", "3", "60"]
          ]
        }
      },
      "sec-applications": {
        "h2": "Verkliga tillämpningar av rätvinklig triangels area med inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Tolv lösta situationer visar formeln i olika skalor och olika enheter. Var och en namnger det triangulära föremålet, ger de tre sidmätningarna, beräknar inradien och semiperimetern, tillämpar huvudformeln steg för steg och anger antagandet bakom den. Varje exempel är en rätvinklig triangulär panel, sektion, profil eller förenklad geometrisk modell; där det verkliga föremålet är böjt eller oregelbundet täcker beräkningen endast den modellerade triangeln." },
          { "kind": "h3", "text": "Exempel 1: Triangulärt glasfönster" },
          { "kind": "p", "text": "Ett rätvinkligt triangulärt glasfönster har [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Inradie: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Semiperimeter: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Area: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]] Detta är den plana glasarean innan utrymme lämnats för karmmått." },
          { "kind": "h3", "text": "Exempel 2: Fäste av stål" },
          { "kind": "p", "text": "En triangulär stödplatta av stål har [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Då är [[r=2\\text{ cm}]], [[s=15\\text{ cm}]], [[[\\boxed{K=30\\text{ cm}^2}]]] Arean ensam bestämmer inte plattans bärförmåga." },
          { "kind": "h3", "text": "Exempel 3: Triangulär sidoprofil av ramp" },
          { "kind": "p", "text": "En förenklad rätvinklig triangulär rampprofil har [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Då är [[r=2\\text{ m}]], [[s=12\\text{ m}]], [[[\\boxed{K=24\\text{ m}^2}]]] Detta representerar sidoprofilen snarare än den lutande gångytan." },
          { "kind": "h3", "text": "Exempel 4: Triangulär takstödspanel" },
          { "kind": "p", "text": "En rätvinklig triangulär takstödspanel har [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Då är [[r=3\\text{ ft}]], [[s=20\\text{ ft}]], [[[\\boxed{K=60\\text{ ft}^2}]]] Resultatet är den uppskattade plana triangulära panelarean." },
          { "kind": "h3", "text": "Exempel 5: Uppmätt trädgårdssektion" },
          { "kind": "p", "text": "En rätvinklig triangulär trädgårdssektion har [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Då är [[r=3\\text{ m}]], [[s=28\\text{ m}]], [[[\\boxed{K=84\\text{ m}^2}]]] Formeln ger den triangulära sektionens area direkt ur dess tre gränsmätningar." },
          { "kind": "h3", "text": "Exempel 6: Triangulärt tygsegel" },
          { "kind": "p", "text": "En rätvinklig triangulär tygpanel har [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Då är [[r=3\\text{ ft}]], [[s=18\\text{ ft}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Sömmar och tygmån exkluderas från denna plana panelsiffra." },
          { "kind": "h3", "text": "Exempel 7: Stor triangulär marksektion" },
          { "kind": "p", "text": "En uppmätt marksektion modellerad som en rätvinklig triangel har [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Då är [[r=4\\text{ m}]], [[s=45\\text{ m}]], [[[\\boxed{K=180\\text{ m}^2}]]] Den förenklade rätvinkliga triangulära modellen antar raka gränser på plan mark." },
          { "kind": "h3", "text": "Exempel 8: Skärmall av plywood" },
          { "kind": "p", "text": "En triangulär plywoodmall har [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Då är [[r=4\\text{ cm}]], [[s=24\\text{ cm}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Arean hjälper till att uppskatta materialbehovet före kapspill." },
          { "kind": "h3", "text": "Exempel 9: Stor triangulär skyltpanel" },
          { "kind": "p", "text": "En rätvinklig triangulär skyltpanel har [[a=20\\text{ m}]], [[b=21\\text{ m}]], [[c=29\\text{ m}]]. Då är [[r=6\\text{ m}]], [[s=35\\text{ m}]], [[[\\boxed{K=210\\text{ m}^2}]]] Resultatet representerar den plana triangulära ytan som vetter mot betraktaren." },
          { "kind": "h3", "text": "Exempel 10: Triangulärt markisstöd" },
          { "kind": "p", "text": "En rätvinklig triangulär markisstödsektion har [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Då är [[r=5\\text{ ft}]], [[s=30\\text{ ft}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Detta är den beräknade arean av den modellerade triangulära sektionen." },
          { "kind": "h3", "text": "Exempel 11: Industriell stödpanel" },
          { "kind": "p", "text": "En rätvinklig triangulär industriell stödpanel har [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Då är [[r=5\\text{ m}]], [[s=66\\text{ m}]], [[[\\boxed{K=330\\text{ m}^2}]]] Denna geometriska beräkning beskriver panelens plana area, inte dess strukturella prestanda." },
          { "kind": "h3", "text": "Exempel 12: Stor triangulär takgavelsektion" },
          { "kind": "p", "text": "En rätvinklig triangulär takgavelsektion har [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Då är [[r=6\\text{ ft}]], [[s=91\\text{ ft}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Den beräknade arean hjälper till att uppskatta plan triangulär täckning." },
          { "kind": "h3", "text": "Jämförelse av praktiska exempel" }
        ],
        "table": {
          "headers": ["Tillämpning", "Sida a", "Sida b", "Hypotenusa c", "Inradie r", "Semiperimeter s", "Area"],
          "rows": [
            ["Glasfönster", "3", "4", "5", "1", "6", "6 m²"],
            ["Stålfäste", "5", "12", "13", "2", "15", "30 cm²"],
            ["Rampprofil", "6", "8", "10", "2", "12", "24 m²"],
            ["Takpanel", "8", "15", "17", "3", "20", "60 ft²"],
            ["Trädgårdssektion", "7", "24", "25", "3", "28", "84 m²"],
            ["Tygsegel", "9", "12", "15", "3", "18", "54 ft²"],
            ["Marksektion", "9", "40", "41", "4", "45", "180 m²"],
            ["Plywoodmall", "12", "16", "20", "4", "24", "96 cm²"],
            ["Skyltpanel", "20", "21", "29", "6", "35", "210 m²"],
            ["Markisstöd", "15", "20", "25", "5", "30", "150 ft²"],
            ["Industripanel", "11", "60", "61", "5", "66", "330 m²"],
            ["Takgavelsektion", "13", "84", "85", "6", "91", "546 ft²"]
          ]
        }
      },
      "sec-relationship": {
        "h2": "Hur hänger inradie och semiperimeter ihop med de tre sidorna?",
        "blocks": [
          { "kind": "p", "text": "I en rätvinklig triangel är inradien och semiperimetern inte oberoende av sidorna; de är byggda av dem. Utgå från [[r=\\frac{a+b-c}{2}]] och [[s=\\frac{a+b+c}{2}]], addera och subtrahera de två uttrycken. Addition ger [[[\\boxed{s+r=a+b}]]], och subtraktion ger [[[\\boxed{s-r=c}]]] Dessa två identiteter är specifika för rätvinkliga trianglar under den givna beteckningen, och de förvandlar kalkylatorns två indata till en förvånande mängd information om själva triangeln." },
          { "kind": "h3", "text": "Att återskapa hypotenusan" },
          { "kind": "p", "text": "Ur [[s-r=c]] kan hypotenusan återskapas när [[r]] och [[s]] är kända. För [[r=2]] och [[s=12]]: [[c=12-2]], [[[\\boxed{c=10}]]] Två indata avslöjar alltså den längsta sidan utan någon ytterligare mätning." },
          { "kind": "h3", "text": "Att återskapa de två kateternas summa" },
          { "kind": "p", "text": "Ur [[a+b=s+r]] följer kateternas summa direkt. För [[r=2]] och [[s=12]]: [[a+b=14]]. Summan ensam kan inte identifiera varje katet individuellt; de individuella längderna behöver ytterligare en informationsbit." },
          { "kind": "h3", "text": "Att återskapa de två kateternas produkt" },
          { "kind": "p", "text": "Eftersom [[K=\\frac{ab}{2}]] och [[K=rs]] följer [[[\\boxed{ab=2rs}]]] För [[r=2]] och [[s=12]]: [[ab=48]]. Med [[a+b=14]] och [[ab=48]] är de två kateterna 6 och 8: [[6+8=14]] och [[6\\times8=48]]. De två kateterna kan bytas utan att triangelns area ändras." },
          { "kind": "h3", "text": "Att återskapa båda kateterlängderna" },
          { "kind": "p", "text": "Summan och produkten gör [[a]] och [[b]] till de två rötterna av [[t^2-(s+r)t+2rs=0]], vilket ger [[[\\boxed{a,b=\\frac{(s+r)\\pm\\sqrt{(s+r)^2-8rs}}{2}}]]] De två tecknen motsvarar de två möjliga katettilldelningarna. Med [[r=2]] och [[s=12]]: [[a,b=\\frac{14\\pm\\sqrt{196-192}}{2}]], så [[a,b=\\frac{14\\pm2}{2}]], kateterna 6 och 8. Detta är en avancerad matematisk slutledning, inte en ytterligare kalkylatorfunktion." }
        ]
      },
      "sec-valid": {
        "h2": "Så kontrollerar du om inradie och semiperimeter bildar en giltig rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Kalkylatorn multiplicerar två indata, men inte varje positivt längdpar beskriver en rätvinklig triangel. Kontrollerna nedan skiljer aritmetik från geometri." },
          { "kind": "h3", "text": "Grundläggande indatavillkor" },
          { "kind": "p", "text": "Indata måste uppfylla [[r>0]] och [[s>0]]. För en rätvinklig triangel krävs också [[s>r]], eftersom [[c=s-r]] och hypotenusan måste vara positiv. Dessa tre villkor är nödvändiga men inte tillräckliga." },
          { "kind": "h3", "text": "En avancerad konsistenskontroll för rätvinkliga trianglar" },
          { "kind": "p", "text": "Ur [[a+b=s+r]] och [[ab=2rs]] är de två kateterna reella exakt när diskriminanten [[\\Delta=(s+r)^2-8rs]] är icke-negativ. Förenklat: [[[\\boxed{\\Delta=s^2-6rs+r^2}]]] För reella kateterlängder gäller [[\\Delta\\geq0]]. Eftersom [[s]] måste överstiga [[r]] är det ekvivalenta rätvinkliga triangelvillkoret [[[\\boxed{\\frac{s}{r}\\geq3+2\\sqrt2}]]], eller [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt2}]]] Likhet inträffar för en likbent rätvinklig triangel, den tätaste möjliga passformen. Detta är ett avancerat matematiskt kompatibilitetstest, tydligt avskilt från de grundläggande kontrollerna ovan." },
          { "kind": "h3", "text": "Giltigt exempel" },
          { "kind": "p", "text": "Givet [[r=2]] och [[s=12]] är kvoten [[\\frac{s}{r}=6]]. Eftersom [[6>3+2\\sqrt2]] (cirka 5,83) kan värdena beskriva en giltig rätvinklig triangel, och motsvarande sidor är 6, 8 och 10." },
          { "kind": "h3", "text": "Inkompatibelt exempel" },
          { "kind": "p", "text": "Givet [[r=2]] och [[s=10]] är kvoten [[\\frac{s}{r}=5]], under det krävda tröskelvärdet på cirka 5,83. Detta par kan inte beskriva en rätvinklig triangel, även om multiplikationen av indata ger ett numeriskt resultat. Att beräkna [[rs]] och att bekräfta att mätningarna beskriver en rätvinklig triangel är två olika uppgifter. Denna guide påstår inte att kalkylatorn utför denna kontroll automatiskt." }
        ]
      },
      "sec-heron": {
        "h2": "Hur står sig inradieformeln mot Herons formel?",
        "blocks": [
          { "kind": "p", "text": "Herons formel beräknar arean ur alla tre sidor: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Den använder de tre sidlängderna och semiperimetern, den fungerar för varje icke-degenererad triangel, och den behöver inte inradien som separat indata. Jämför den med [[[\\boxed{K=rs}]]] De två är nära släktingar: semiperimetern [[s]] förekommer i båda, och att bevisa att de stämmer överens är ett av de renaste sätten att se att [[K=rs]] är korrekt." },
          { "kind": "h3", "text": "När är inradieformeln enklare?" },
          { "kind": "p", "text": "[[K=rs]] är särskilt bekväm när inradien och semiperimetern redan är kända: en enda multiplikation, inga kvadratrötter, ingen faktorisering av siddifferenser. När en inskriven cirkel har mätts, eller när tidigare steg redan gett [[r]] och [[s]], är detta den kortaste vägen till arean." },
          { "kind": "h3", "text": "När är Herons formel mer användbar?" },
          { "kind": "p", "text": "Herons formel är det bättre valet när de tre sidlängderna är kända men inradien inte har beräknats. Den når arean direkt från [[a]], [[b]] och [[c]] utan omvägen via [[r]]. Ingen av formlerna är universellt mer exakt; de är exakta vid konsistenta indata, och de är oense endast när indata är inkonsistenta." },
          { "kind": "h3", "text": "Verifiera båda formlerna med en 3-4-5-triangel" },
          { "kind": "p", "text": "Givet [[a=3]], [[b=4]], [[c=5]], med [[s=6]] och [[r=1]]. Med inradien: [[K=1\\times6=6]]. Med Herons formel: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], så [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]] Resultaten stämmer överens eftersom båda formlerna mäter samma region; de är två uttryck för en area, och överensstämmelse mellan dem är ett starkt tecken på att räkningarna stämmer." }
        ]
      },
      "sec-legs": {
        "h2": "Varför ger inradieformeln samma area som kateterformeln?",
        "blocks": [
          { "kind": "p", "text": "Två formler gör anspråk på samma area: [[K=\\frac{ab}{2}]] och [[K=rs]]. Att skriva [[r]] och [[s]] i termer av sidorna ger [[rs=\\frac{a+b-c}{2}\\times\\frac{a+b+c}{2}]], så [[rs=\\frac{(a+b-c)(a+b+c)}{4}]]. Täljaren är en differens av kvadrater: [[rs=\\frac{(a+b)^2-c^2}{4}]]. Tillämpa Pythagoras sats [[c^2=a^2+b^2]]: [[rs=\\frac{a^2+2ab+b^2-a^2-b^2}{4}]], alltså [[[\\boxed{rs=\\frac{ab}{2}}]]] De två formlerna är identiska på varje rätvinklig triangel; de kan inte vara oense vid konsistenta indata." },
          { "kind": "p", "text": "Kontrollera med en 3-4-5-triangel: [[r=1]], [[s=6]], [[rs=6]] och [[\\frac{ab}{2}=\\frac{3\\times4}{2}=6]]. Med en 6-8-10-triangel: [[r=2]], [[s=12]], [[rs=24]] och [[\\frac{ab}{2}=\\frac{6\\times8}{2}=24]]. Den bekanta kateterformeln och inradieformeln är samma storhet i olika kläder." }
        ]
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag vid areaberäkning från inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "De flesta felaktiga svar kommer från felmärkta indata snarare än dålig aritmetik. De femton misstagen nedan täcker nästan varenda ett." },
          { "kind": "h3", "text": "1. Att förväxla inradien med den omskrivna cirkelns radie" },
          { "kind": "p", "text": "Inradien är cirkeln inuti; den omskrivna cirkelns radie är cirkeln runt. I en 6-8-10-triangel är [[r=2]] men [[R=\\frac{c}{2}=5]]. Att använda 5 för [[r]] ger [[K=5\\times12=60]] i stället för 24. Åtgärd: fråga om cirkeln ligger inuti triangeln eller går genom dess hörn." },
          { "kind": "h3", "text": "2. Att använda hela omkretsen i stället för semiperimetern" },
          { "kind": "p", "text": "Formeln behöver [[s]], halva omkretsen. Med [[r=2]] och hela omkretsen 24 i stället för [[s=12]] blir resultatet [[K=2\\times24=48]], dubbelt mot korrekta 24. Åtgärd: halvera omkretsen före multiplikationen." },
          { "kind": "h3", "text": "3. Att dividera det slutliga svaret med två igen" },
          { "kind": "p", "text": "Halveringen finns redan inuti [[s]]. Att dividera [[2\\times12=24]] med två igen ger 12, halva den sanna arean. Åtgärd: beräkna [[rs]] och stanna." },
          { "kind": "h3", "text": "4. Att förväxla incentrum med den omskrivna cirkelns centrum" },
          { "kind": "p", "text": "Incentrum är där vinkelbisektriserna möts; den omskrivna cirkelns centrum är där sidornas mittpunktsnormaler möts, och för en rätvinklig triangel ligger det i hypotenusans mittpunkt. Det är olika punkter. Åtgärd: följ den korrekta konstruktionen för den cirkel du behöver." },
          { "kind": "h3", "text": "5. Att behandla inradien som en triangelsida" },
          { "kind": "p", "text": "Inradien är ett avstånd inuti triangeln, inte en av dess tre sidor. Den hör aldrig hemma i [[a+b+c]]. Åtgärd: håll [[r]] utanför varje sidlängdsuttryck." },
          { "kind": "h3", "text": "6. Att använda en felaktig inradieformel för rätvinkliga trianglar" },
          { "kind": "p", "text": "Genvägen för rätvinkliga trianglar är [[r=\\frac{a+b-c}{2}]], inte en variant med fel tecken eller fel sida halverad. Ett vanligt felsteg är att använda [[r=\\frac{a+c-b}{2}]], vilket ger ett annat tal om inte triangeln är likbent. Åtgärd: den subtraherade sidan är alltid hypotenusan [[c]]." },
          { "kind": "h3", "text": "7. Att glömma att c är hypotenusan" },
          { "kind": "p", "text": "I genvägen betyder [[c]] specifikt hypotenusan. Åtgärd: märk den längsta sidan [[c]] innan du tillämpar formeln." },
          { "kind": "h3", "text": "8. Att använda fel sida som hypotenusa" },
          { "kind": "p", "text": "Att välja en katet som [[c]] fördärvar både [[r]] och [[s]]. Åtgärd: hypotenusan är sidan mitt emot den räta vinkeln, alltid den längsta." },
          { "kind": "h3", "text": "9. Att blanda olika måttenheter" },
          { "kind": "p", "text": "En inradie på 20 cm med en semiperimeter på 1 m ger inget meningsfullt tal förrän omvandling skett. Åtgärd: omvandla till en enhet först, multiplicera sedan." },
          { "kind": "h3", "text": "10. Att mata in längder som är noll eller negativa" },
          { "kind": "p", "text": "Längder som är noll eller negativa beskriver ingen triangel. Åtgärd: kontrollera att varje inmatad längd är positiv." },
          { "kind": "h3", "text": "11. Att anta att varje positivt r- och s-par representerar en rätvinklig triangel" },
          { "kind": "p", "text": "Som visats tidigare ger [[r=2]] med [[s=10]] talet 20 men ingen rätvinklig triangel. Åtgärd: kör kontrollen [[s/r\\geq3+2\\sqrt2]] när geometrin spelar roll." },
          { "kind": "h3", "text": "12. Att rapportera area i linjära enheter" },
          { "kind": "p", "text": "En area på 24 m² är inte 24 m. Åtgärd: skriv kvadratenheten tillsammans med talet." },
          { "kind": "h3", "text": "13. Att avrunda inradien för tidigt" },
          { "kind": "p", "text": "Att avrunda [[r]] före multiplikationen förskjuter hela arean. Åtgärd: behåll full precision genom mellanstegen och avrunda endast det slutliga svaret." },
          { "kind": "h3", "text": "14. Att förväxla semiperimetern med summan av två sidor" },
          { "kind": "p", "text": "Semiperimetern är halva summan av alla tre sidor, inte summan av två. Åtgärd: addera alla tre sidor, halvera sedan." },
          { "kind": "h3", "text": "15. Att anta att formeln bara fungerar för rätvinkliga trianglar" },
          { "kind": "p", "text": "[[K=rs]] gäller för varje icke-degenererad triangel; endast genvägen [[r=\\frac{a+b-c}{2}]] är specifik för rätvinkliga trianglar. Åtgärd: tillämpa areaformeln fritt, men använd den allmänna inradiehärledningen för icke-rätvinkliga trianglar." },
          { "kind": "h3", "text": "Fel mot rätt: ett konkret exempel" },
          { "kind": "p", "text": "Använd en 6-8-10-triangel. Korrekt: [[r=2]], [[s=12]], [[K=2\\times12=24]]. Att felaktigt använda hela omkretsen: [[K=2\\times24=48]], vilket fördubblar arean. Att felaktigt dividera det korrekta svaret med två igen: [[K=\\frac{24}{2}=12]], vilket halverar den. Båda felen kommer från felhantering av den ena halvan som bor inuti [[s]]." }
        ]
      },
      "sec-verify": {
        "h2": "Så kontrollerar du om din rätvinkliga triangels area är korrekt",
        "blocks": [
          { "kind": "p", "text": "Flera oberoende kontroller fångar de vanliga felen. 3-4-5-triangeln demonstrerar de flesta av dem." },
          { "kind": "h3", "text": "Metod 1: Inradie och semiperimeter" },
          { "kind": "p", "text": "Räkna om [[K=rs]] med de inmatade värdena. För [[r=1]] och [[s=6]] är [[K=1\\times6=6]]. En andra genomgång fångar stavfel." },
          { "kind": "h3", "text": "Metod 2: Två vinkelräta kateter" },
          { "kind": "p", "text": "När kateterna är kända eller återskapade måste [[K=\\frac{ab}{2}]] stämma överens. Här matchar [[\\frac{3\\times4}{2}=6]] [[1\\times6=6]]: två metoder, en triangel, ett svar." },
          { "kind": "h3", "text": "Metod 3: Pythagoras sats" },
          { "kind": "p", "text": "Bekräfta [[a^2+b^2=c^2]]: [[9+16=25]]. Om sidorna inte uppfyller den är triangelidentifieringen fel." },
          { "kind": "h3", "text": "Metod 4: Rätvinklig triangels inradie" },
          { "kind": "p", "text": "Bekräfta [[r=\\frac{a+b-c}{2}]]: [[\\frac{3+4-5}{2}=1]]. En avvikelse betyder att den inmatade inradien inte tillhör denna triangel." },
          { "kind": "h3", "text": "Metod 5: Semiperimeter" },
          { "kind": "p", "text": "Bekräfta [[s=\\frac{a+b+c}{2}]]: [[\\frac{3+4+5}{2}=6]]. Detta fångar sammanblandningar av omkrets och semiperimeter." },
          { "kind": "h3", "text": "Metod 6: Herons formel" },
          { "kind": "p", "text": "Bekräfta [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Överensstämmelse mellan oberoende formler är den starkaste kontroll som finns." },
          { "kind": "p", "text": "Förklara varför överensstämmelse mellan oberoende formler är en användbar matematisk kontroll: ett misstag på en väg reproducerar sig sällan på en annan, så två matchande svar från olika formler betyder att både indata och räkningarna är sunda." }
        ],
        "imgAlt": "Arean av 3-4-5-triangeln jämförd med K = rs, K = ab/2 och Herons formel",
        "figcaption": "Tre metoder, ett svar: K = rs, K = ab/2 och Herons formel ger alla 6 för 3-4-5-triangeln."
      },
      "sec-units": {
        "h2": "Att förstå måttenheter i beräkningar med inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Area är tvådimensionell, så dess enhet är kvadraten av längdenheten. I symboler: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]. Detsamma gäller för meter och kvadratmeter, millimeter och kvadratmillimeter, fot och kvadratfot, tum och kvadrattum. Enhetsväljarna finns så att resultatet kan märkas korrekt." },
          { "kind": "h3", "text": "Varför båda indata måste använda kompatibla enheter" },
          { "kind": "p", "text": "Inradien och semiperimetern måste uttryckas i samma enhet innan formeln tillämpas. Om [[r=20\\text{ cm}]] och [[s=1\\text{ m}]], omvandla först: [[1\\text{ m}=100\\text{ cm}]]. Sedan [[K=20\\times100]], [[[\\boxed{K=2,000\\text{ cm}^2}]]], eller ekvivalent [[[\\boxed{K=0.2\\text{ m}^2}]]] Att multiplicera mätningar i olika enheter ger ett tal utan ren enhet, så omvandla först och beräkna sedan." },
          { "kind": "h3", "text": "Varför du bör undvika tidig avrundning" },
          { "kind": "p", "text": "Avrundade värden av [[r]] eller [[s]] kan påverka den slutliga arean något, eftersom inradien multipliceras direkt in i den. Behåll tillräcklig precision genom mellanberäkningarna och avrunda endast det slutliga svaret. Denna guide gör inget påstående om kalkylatorns interna precision utöver vad dess gränssnitt visar." },
          { "kind": "h3", "text": "Exakta mätningar mot praktiska mätningar" },
          { "kind": "p", "text": "Exakta matematiska dimensioner, som inradien 1 hos en 3-4-5-triangel, beter sig annorlunda än mätningar tagna med fysiska instrument. Instrumentosäkerhet flödar in i arean, så behandla den sista siffran som endast så tillförlitlig som indata. En bandmätt inradie på 2 cm kan i verkligheten vara 1,9 eller 2,1, och arean bär den osäkerheten med sig." }
        ]
      },
      "sec-related": {
        "h2": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "blocks": [
          { "kind": "p", "text": "Olika mätningar kräver olika kalkylatorer." }
        ]
      },
      "sec-faq": {
        "h2": "Vanliga frågor",
        "blocks": [
          { "kind": "p", "text": "Nedan finns svar på de vanligaste frågorna om area från inradie och semiperimeter." }
        ]
      },
      "sec-conclusion": {
        "h2": "Två mätningar bär hela arean",
        "blocks": [
          { "kind": "p", "text": "Inradien och semiperimetern ser ut som blygsamma indata, men tillsammans kodar de triangelns fulla utsträckning. Härledningen genom de tre mindre trianglarna visar varför produkten är exakt, tangentstycksargumentet visar var den rätvinkliga genvägen kommer ifrån, och jämförelserna med kateterformeln och Herons formel visar att resultatet alltid stämmer överens med resten av geometrin." },
          { "kind": "p", "text": "Arbetsvanan är enkel: bekräfta vad r och s verkligen är, håll enheterna konsistenta och verifiera svaret genom en oberoende formel. När dessa vanor håller är K = rs en av de mest pålitliga areaberäkningarna i triangelgeometri." }
        ]
      }
    }
  },
  "zh": {
    "faqs": [
      {
        "question": "用内切圆半径和半周长求面积的公式是什么？",
        "answer": "用内切圆半径 r 乘以半周长 s：K = rs。例如，r = 2、s = 12 时，K = 24 平方单位。该公式适用于所有非退化三角形，而不仅是直角三角形。"
      },
      {
        "question": "直角三角形中的内切圆半径是什么？",
        "answer": "它是三角形内切圆的半径，即从内心到任意一边的垂直距离。在 3-4-5 三角形中内切圆半径为 1；在 6-8-10 三角形中为 2。"
      },
      {
        "question": "如何计算直角三角形的内切圆半径？",
        "answer": "已知三边时，用简便公式 r = (a + b - c) / 2，其中 a 和 b 为两条直角边，c 为斜边。对于 5-12-13 三角形，可得 r = 2。"
      },
      {
        "question": "如何计算半周长？",
        "answer": "把三边相加再除以二：s = (a + b + c) / 2。对于 5-12-13 三角形，s = 15。它恒大于每一条单独的边。"
      },
      {
        "question": "为什么面积等于内切圆半径乘以半周长？",
        "answer": "连接内心与三个顶点，把三角形分成三个小三角形，它们的高都是 r，底分别为 a、b、c。三者面积 ar/2 + br/2 + cr/2 可提取公因式为 r(a+b+c)/2，又 s = (a+b+c)/2，故总和为 rs。"
      },
      {
        "question": "该公式对非直角三角形也成立吗？",
        "answer": "成立。K = rs 对所有非退化三角形都成立。只有简便公式 r = (a+b-c)/2 是直角三角形特有的，因为它依赖直角处形成的小正方形。"
      },
      {
        "question": "内切圆半径与外接圆半径有什么区别？",
        "answer": "内切圆半径 r 是三角形内部与三边都相切的圆的半径；外接圆半径 R 是经过三个顶点的圆的半径。对于直角三角形，R = c/2。"
      },
      {
        "question": "不知道三边也能求面积吗？",
        "answer": "可以。如果内切圆半径和半周长已知，K = rs 只需一次乘法即可直接给出面积，不需要边长。"
      },
      {
        "question": "半周长就是周长的一半吗？",
        "answer": "正是：s = P/2 = (a+b+c)/2。区分两者很重要，因为公式需要的是减半后的值；用完整周长会使答案翻倍。"
      },
      {
        "question": "内切圆半径与三边有什么关系？",
        "answer": "在直角三角形中，r = (a+b-c)/2，其中 a、b 为直角边，c 为斜边。还满足 s + r = a + b 与 s - r = c，因此可由 r 和 s 还原出各边。"
      },
      {
        "question": "海伦公式与内切圆半径公式有什么区别？",
        "answer": "海伦公式 K = sqrt(s(s-a)(s-b)(s-c)) 需要三条边；内切圆半径公式 K = rs 只需要 r 和 s。已知边长时用海伦公式，已知 r 和 s 时用 K = rs。在输入一致时两者给出相同面积。"
      },
      {
        "question": "如何验证算出的面积？",
        "answer": "用独立方法检验：直角边公式 K = ab/2、勾股定理、内切圆半径简便公式、半周长定义和海伦公式。多种方法一致，说明输入与计算都正确。"
      }
    ],
    "relatedHeading": "探索相关的直角三角形计算器",
    "relatedItems": [
      "直角边求直角三角形面积计算器",
      "斜边和高求直角三角形面积计算器",
      "角度求直角三角形面积计算器",
      "高求直角三角形面积计算器",
      "直角三角形内切圆半径计算器",
      "直角三角形半周长计算器"
    ],
    "relatedIntro": "不同的测量需要不同的计算器。",
    "faqHeading": "常见问题",
    "tocHeading": "本指南内容",
    "tocItems": {
      "sec-intro": "如何用内切圆半径和半周长计算直角三角形面积",
      "sec-incircle": "几何中的内切圆是什么？",
      "sec-semiperimeter": "三角形的半周长是什么？",
      "sec-formula": "为什么面积等于内切圆半径乘以半周长？",
      "sec-inradius": "如何求直角三角形的内切圆半径",
      "sec-howto": "如何使用内切圆半径和半周长面积计算器",
      "sec-examples": "分步例题",
      "sec-applications": "实际应用",
      "sec-relationship": "内切圆半径和半周长与三边有什么关系",
      "sec-valid": "如何检查测量值是否有效",
      "sec-heron": "内切圆半径公式与海伦公式的比较",
      "sec-legs": "为什么内切圆半径公式与直角边公式结果一致",
      "sec-mistakes": "常见错误",
      "sec-verify": "如何验证面积",
      "sec-units": "测量单位与舍入",
      "sec-related": "探索相关的直角三角形计算器",
      "sec-faq": "常见问题",
      "sec-conclusion": "结论"
    },
    "sections": {
      "sec-intro": {
        "h2": "如何用内切圆半径和半周长计算直角三角形面积",
        "blocks": [
          { "kind": "p", "text": "一个直角三角形的内切圆半径为 [[r=2]]，半周长为 [[s=12]]。应用 [[K=r\\times s]]：[[K=2\\times12]]，[[[\\boxed{K=24\\text{ square units}}]]]。该三角形包围了 24 平方单位的平面面积。这就是计算器自动完成的全部方法：两个测量值，一次乘法，一个答案。" },
          { "kind": "p", "text": "内切圆半径是紧贴在三角形内部、与三边都相切的圆的半径。半周长是三角形周长的一半。两者合在一起足以确定面积，因为圆的半径充当了三个小三角形的高，而这三个小三角形的底正是三角形的各边。这个恒等式对所有非退化三角形成立，而不仅是直角三角形；直角三角形的特别之处在于，可以用三边快速算出内切圆半径。当内切圆已被直接测量，或者内切圆半径和半周长已由前面的工作得出时，这个方法最有用。" }
        ]
      },
      "sec-incircle": {
        "h2": "几何中的内切圆是什么？",
        "blocks": [
          { "kind": "p", "text": "本指南通用的记号为：[[A]]、[[B]] 和 [[C]] 为顶点和角，其中 [[C=90^\\circ]]；[[a]] 和 [[b]] 为两条直角边；[[c]] 为 [[C]] 所对的斜边；[[r]] 为内切圆半径；[[I]] 为内心；[[s]] 为半周长；[[P]] 为周长；[[K]] 为面积，全文统一使用，以免与角 [[A]] 混淆。" },
          { "kind": "h3", "text": "内切圆的定义" },
          { "kind": "p", "text": "内切圆是能放入三角形内部、同时与三边都相切的最大圆。它完全位于内部，因为三角形的每条边都是该圆的一条切线：圆恰好在一个点上到达该边，并保持在该边的内侧。仅仅靠近某条边的圆不算数；内切圆必须与每条边相切，在单一点上接触该边，然后折回内部。每个非退化三角形恰好有一个这样的圆，并且有唯一的圆心，因为三条直线不平行，它们的几何关系把圆完全固定了下来。" },
          { "kind": "h3", "text": "什么是内切圆半径？" },
          { "kind": "p", "text": "内切圆半径是从内心到三角形任意一边的距离。若 [[I]] 为内心，[[D]] 为内切圆与一边的切点，则 [[r=ID]]。圆的半径是圆心到切边的最短距离，而这个最短距离对三边都相同，这就是圆与三边都相切、而不只是靠近的原因。" },
          { "kind": "h3", "text": "为什么内切圆半径与每条边都垂直？" },
          { "kind": "p", "text": "圆的一个基本性质是：在直线与圆相切的每一点上，连向该点的半径都与直线成直角。因此，若 [[D]] 为边 [[AB]] 上的切点，则 [[ID\\perp AB]]。另两条边同理。这种垂直关系不是装饰：它让每条半径在推导面积公式时都能充当小三角形的高，因为三角形的高必须与底边垂直。" },
          { "kind": "h3", "text": "理解内心" },
          { "kind": "p", "text": "内心 [[I]] 是三角形三条内角平分线的交点。每条角平分线是到构成该角的两边距离相等的点的集合，因此同时位于三条平分线上的点到三边的距离相等，且必在三角形内部。这个公共距离正是内切圆半径，以 [[I]] 为圆心、[[r]] 为半径的圆与每条边相切一次：这就是内切圆。" },
          { "kind": "h3", "text": "内切圆半径和外接圆半径是一回事吗？" },
          { "kind": "p", "text": "不是。内切圆半径 [[r]] 是三角形内部圆的半径，而外接圆半径 [[R]] 是经过三个顶点的圆，即外接圆的半径。对于直角三角形，外接圆的圆心是斜边的中点，因此 [[[\\boxed{R=\\frac{c}{2}}]]]。两个半径描述的是完全不同的圆：一个内接于三角形，另一个环绕三角形。把它们混淆是本主题最常见的错误之一，请分开记住：内部用 [[r]]，环绕用 [[R]]。" }
        ],
        "imgAlt": "带内切圆的直角三角形ABC：内心I、内切圆半径r、切点与外接圆",
        "figcaption": "三角形 ABC 及其内切圆：内心 I，内切圆半径 r = ID 且 ID 与每条边垂直，另附外接圆作比较。"
      },
      "sec-semiperimeter": {
        "h2": "三角形的半周长是什么？",
        "blocks": [
          { "kind": "h3", "text": "半周长的定义" },
          { "kind": "p", "text": "半周长是三角形总周长的一半：[[[\\boxed{s=\\frac{a+b+c}{2}}]]]，其中 [[a]] 和 [[b]] 为直角边，[[c]] 为斜边。它和任意一条边一样是个长度，它在面积公式中占有一席之地，是因为它把三边合并成了一个数。" },
          { "kind": "h3", "text": "周长与半周长的区别" },
          { "kind": "p", "text": "周长是绕三角形一周的完整距离，[[P=a+b+c]]；半周长是它的一半，[[s=\\frac{P}{2}]]。对于 3-4-5 三角形：[[P=3+4+5=12]]，[[s=\\frac{12}{2}=6]]。半周长不是边界的长度，而是它的一半；把完整周长代入 [[K=rs]] 会使真实面积翻倍。" },
          { "kind": "h3", "text": "为什么面积公式要用半周长？" },
          { "kind": "p", "text": "连接内心与三个顶点，把三角形分成三个小三角形，每个的垂直高都是 [[r]]。它们的底为 [[a]]、[[b]] 和 [[c]]，因此总面积为 [[K=\\frac12r(a+b+c)]]。由于 [[s=\\frac{a+b+c}{2}]]，半周长已经内建于 [[s]] 中，得到 [[K=rs]]。下一节将完整推导。" },
          { "kind": "h3", "text": "半周长会比一条边小吗？" },
          { "kind": "p", "text": "不会。三角形不等式指出，对任意三角形都有 [[a+b>c]]，因此 [[s=\\frac{a+b+c}{2}>c]]。同样的论证适用于另两条边：[[s>a]] 且 [[s>b]]。半周长恒大于每一条单独的边。这是对输入的快速合理性检查：如果声称的半周长比某条边还小，这些数就不可能描述一个真实三角形。" }
        ]
      },
      "sec-formula": {
        "h2": "为什么三角形面积等于内切圆半径乘以半周长？",
        "blocks": [
          { "kind": "p", "text": "从标准的三角形面积法则出发：[[K=\\frac12\\times\\text{base}\\times\\text{height}]]。从内心 [[I]] 向三个顶点连线，把原三角形分成三个小三角形。每个小三角形的底等于原三角形的一条边，垂直高等于内切圆半径 [[r]]，因为半径与每条边都成直角相交。这对所有非退化三角形成立；本计算器中的三角形是直角三角形，但面积恒等式本身是完全一般的。" },
          { "kind": "h3", "text": "第一个小三角形的面积" },
          { "kind": "p", "text": "立在边 [[a]] 上的小三角形，底为 [[a]]，高为 [[r]]：[[[\\boxed{K_1=\\frac{ar}{2}}]]]。" },
          { "kind": "h3", "text": "第二个小三角形的面积" },
          { "kind": "p", "text": "立在边 [[b]] 上的小三角形，底为 [[b]]，高为 [[r]]：[[[\\boxed{K_2=\\frac{br}{2}}]]]。" },
          { "kind": "h3", "text": "第三个小三角形的面积" },
          { "kind": "p", "text": "立在边 [[c]] 上的小三角形，底为 [[c]]，高为 [[r]]：[[[\\boxed{K_3=\\frac{cr}{2}}]]]。" },
          { "kind": "h3", "text": "把三个面积相加" },
          { "kind": "p", "text": "三个小三角形无重叠地铺满原三角形，因此 [[K=K_1+K_2+K_3]]。代入：[[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]。提取 [[\\frac{r}{2}]]：[[K=\\frac{r(a+b+c)}{2}]]。回顾 [[s=\\frac{a+b+c}{2}]]，于是 [[[\\boxed{K=r\\times s}]]]。每一步都有依据：铺砌是精确的，高 [[r]] 是公共的，半周长吸收了除以二。" },
          { "kind": "h3", "text": "为什么这个公式不需要再除以二？" },
          { "kind": "p", "text": "因为二分之一已经折进了半周长里。三个二分之一合并为 [[\\frac{r(a+b+c)}{2}]]，而 [[s]] 恰为周长的一半，所以再除以二会把正确表达式缩为四分之一。算出 [[r\\times s]] 就停下来；进一步减半是错误，不是修正。" }
        ],
        "imgAlt": "内切圆把三角形ABC分成三个小三角形，高为r，底为a、b、c",
        "figcaption": "三个高同为 r、底为 a、b、c 的小三角形：面积 ar/2 + br/2 + cr/2 相加得 rs。"
      },
      "sec-inradius": {
        "h2": "如何用三边长求内切圆半径",
        "blocks": [
          { "kind": "p", "text": "已知三边时，直角三角形的内切圆半径有一个简便公式，完全不必画出内切圆：[[[\\boxed{r=\\frac{a+b-c}{2}}]]]，其中 [[a]] 和 [[b]] 为互相垂直的直角边，[[c]] 为斜边。这是直角三角形几何中最实用的结论之一。" },
          { "kind": "h3", "text": "直角三角形内切圆半径公式的推导" },
          { "kind": "p", "text": "推导用到了切线段相等定理：从同一个外点向圆引的两条切线段长度相等。设从三个顶点引出的切线长分别为：从顶点 [[A]] 引出 [[x]]，从顶点 [[B]] 引出 [[y]]，从顶点 [[C]] 引出 [[z]]。在直角 [[C]] 处，内切圆的两条切线沿互相垂直的直角边延伸，每条长均为 [[r]]，与两条半径构成一个小正方形，因此 [[z=r]]。于是各边为 [[a=y+r]]、[[b=x+r]]、[[c=x+y]]。相减：[[a+b-c=(y+r)+(x+r)-(x+y)]]，得 [[a+b-c=2r]]，即 [[[\\boxed{r=\\frac{a+b-c}{2}}]]]。直角处的小正方形正是这个简便公式只属于直角三角形的原因。" },
          { "kind": "h3", "text": "用 3-4-5 三角形举例" },
          { "kind": "p", "text": "已知 [[a=3]]、[[b=4]]、[[c=5]]：[[r=\\frac{3+4-5}{2}]]，[[[\\boxed{r=1}]]]。内切圆半径恰为 1，无需作图。" },
          { "kind": "h3", "text": "用 5-12-13 三角形举例" },
          { "kind": "p", "text": "已知 [[a=5]]、[[b=12]]、[[c=13]]：[[r=\\frac{5+12-13}{2}]]，[[[\\boxed{r=2}]]]。同样，内切圆半径直接由边长得出。" },
          { "kind": "h3", "text": "同时求出半周长" },
          { "kind": "p", "text": "用同样的三边，在算 [[r]] 的同时算出 [[s=\\frac{a+b+c}{2}]]。对于 5-12-13 三角形：[[s=\\frac{5+12+13}{2}=15]]，然后 [[K=rs=2\\times15=30]]。对三边的一次遍历同时给出计算器的两个输入和面积本身。" },
          { "kind": "h3", "text": "什么时候用这个简便公式？" },
          { "kind": "p", "text": "只要三边已知而内切圆尚未测量或画出，就用它：课本习题、施工尺寸和测量数据通常给出的是边长，而不是内切圆半径。简便公式把它们一行就换算成 [[r]]。如果被测量的量本就是内切圆半径，那就直接输入，跳过换算。" }
        ],
        "imgAlt": "3-4-5三角形展示相等的切线段与简便公式 r = (a+b-c)/2 = 1",
        "figcaption": "3-4-5 三角形上的切线段：从每个顶点引出的等长线段给出 r = (3 + 4 - 5)/2 = 1。"
      },
      "sec-howto": {
        "h2": "如何使用内切圆半径和半周长面积计算器",
        "blocks": [
          { "kind": "p", "text": "计算器恰好需要两个输入。下面的步骤按屏幕顺序，从已知测量值走到验证后的结果。" }
        ],
        "steps": [
          "<strong>确定内切圆半径 r。</strong>内接圆的半径，即从内心到任意一边的垂直距离。",
          "<strong>确定半周长 s。</strong>三角形总周长的一半。",
          "<strong>若三边已知，用 [[r=\\frac{a+b-c}{2}]] 算出 r。</strong>其中 [[a]] 和 [[b]] 为直角边，[[c]] 为斜边。",
          "<strong>用 [[s=\\frac{a+b+c}{2}]] 算出 s。</strong>",
          "<strong>在第一个输入框中输入内切圆半径。</strong>",
          "<strong>在第二个输入框中输入半周长。</strong>",
          "<strong>选择兼容的长度单位。</strong>两个测量值必须使用同一单位。",
          "<strong>检查两个值都为正数。</strong>零或负的长度描述不了任何三角形。",
          "<strong>点击 Calculate Area。</strong>",
          "<strong>查看结果。</strong>面积以与输入对应的平方单位显示。",
          "<strong>确认答案以平方单位表示。</strong>米对应平方米；厘米对应平方厘米。",
          "<strong>查看数学解法。</strong>它展示了代入和算术过程。",
          "<strong>开始新的计算时使用 Reset。</strong>它会清空两个输入框，让下一次计算从干净状态开始。"
        ],
        "closingParagraphs": [
          "计算器不要求输入三边长：内切圆半径和半周长已经包含了公式 [[K=rs]] 所需的一切。"
        ]
      },
      "sec-examples": {
        "h2": "用内切圆半径和半周长求面积的分步例题",
        "blocks": [
          { "kind": "p", "text": "四个例题从熟悉的情形向上搭建方法。每一题都由三边算出半周长和内切圆半径，展示每一次代入地应用 [[K=rs]]，并用直角边公式验证。" },
          { "kind": "h3", "text": "例 1：3-4-5 直角三角形" },
          { "kind": "p", "text": "已知 [[a=3]]、[[b=4]]、[[c=5]]。第 1 步：半周长，[[s=\\frac{3+4+5}{2}=6]]。第 2 步：内切圆半径，[[r=\\frac{3+4-5}{2}=1]]。第 3 步：应用公式，[[K=1\\times6]]，[[[\\boxed{K=6\\text{ square units}}]]]。验证：[[K=\\frac{3\\times4}{2}=6]]。" },
          { "kind": "h3", "text": "例 2：6-8-10 直角三角形" },
          { "kind": "p", "text": "已知 [[a=6]]、[[b=8]]、[[c=10]]。则 [[s=\\frac{6+8+10}{2}=12]]，[[r=\\frac{6+8-10}{2}=2]]，[[K=2\\times12]]，[[[\\boxed{K=24\\text{ square units}}]]]。验证：[[K=\\frac{6\\times8}{2}=24]]。" },
          { "kind": "h3", "text": "例 3：5-12-13 直角三角形" },
          { "kind": "p", "text": "已知 [[a=5]]、[[b=12]]、[[c=13]]。则 [[s=\\frac{5+12+13}{2}=15]]，[[r=\\frac{5+12-13}{2}=2]]，[[K=2\\times15]]，[[[\\boxed{K=30\\text{ square units}}]]]。验证：[[K=\\frac{5\\times12}{2}=30]]。" },
          { "kind": "h3", "text": "例 4：8-15-17 直角三角形" },
          { "kind": "p", "text": "已知 [[a=8]]、[[b=15]]、[[c=17]]。则 [[s=\\frac{8+15+17}{2}=20]]，[[r=\\frac{8+15-17}{2}=3]]，[[K=3\\times20]]，[[[\\boxed{K=60\\text{ square units}}]]]。验证：[[K=\\frac{8\\times15}{2}=60]]。" },
          { "kind": "h3", "text": "基础例题对照" }
        ],
        "table": {
          "headers": ["三角形", "半周长 s", "内切圆半径 r", "面积 K = rs"],
          "rows": [
            ["3-4-5", "6", "1", "6"],
            ["6-8-10", "12", "2", "24"],
            ["5-12-13", "15", "2", "30"],
            ["8-15-17", "20", "3", "60"]
          ]
        }
      },
      "sec-applications": {
        "h2": "用内切圆半径和半周长求直角三角形面积的实际应用",
        "blocks": [
          { "kind": "p", "text": "十二个例题在不同尺度和不同单位下展示公式。每一题都点出三角形物体的名称，给出三边测量值，算出内切圆半径和半周长，逐步应用主公式，并说明背后的假设。每例都是直角三角形的面板、截面、轮廓或简化几何模型；若实物是弯曲或不规则的，计算只覆盖所建模的三角形。" },
          { "kind": "h3", "text": "例 1：三角形玻璃窗" },
          { "kind": "p", "text": "一扇直角三角形玻璃窗，[[a=3\\text{ m}]]、[[b=4\\text{ m}]]、[[c=5\\text{ m}]]。内切圆半径：[[r=\\frac{3+4-5}{2}=1\\text{ m}]]。半周长：[[s=\\frac{3+4+5}{2}=6\\text{ m}]]。面积：[[K=1\\times6]]，[[[\\boxed{K=6\\text{ m}^2}]]]。这是未计窗框尺寸前的平面玻璃面积。" },
          { "kind": "h3", "text": "例 2：钢支撑托架" },
          { "kind": "p", "text": "一块三角形钢支撑板，[[a=5\\text{ cm}]]、[[b=12\\text{ cm}]]、[[c=13\\text{ cm}]]。则 [[r=2\\text{ cm}]]，[[s=15\\text{ cm}]]，[[[\\boxed{K=30\\text{ cm}^2}]]]。仅凭面积决定不了板的承载能力。" },
          { "kind": "h3", "text": "例 3：三角形坡道侧面轮廓" },
          { "kind": "p", "text": "一个简化的直角三角形坡道轮廓，[[a=6\\text{ m}]]、[[b=8\\text{ m}]]、[[c=10\\text{ m}]]。则 [[r=2\\text{ m}]]，[[s=12\\text{ m}]]，[[[\\boxed{K=24\\text{ m}^2}]]]。这是侧面轮廓，而非倾斜的行走面。" },
          { "kind": "h3", "text": "例 4：三角形屋顶支撑板" },
          { "kind": "p", "text": "一块直角三角形屋顶支撑板，[[a=8\\text{ ft}]]、[[b=15\\text{ ft}]]、[[c=17\\text{ ft}]]。则 [[r=3\\text{ ft}]]，[[s=20\\text{ ft}]]，[[[\\boxed{K=60\\text{ ft}^2}]]]。结果为估计的平面三角形板面积。" },
          { "kind": "h3", "text": "例 5：测量的三角形花园地块" },
          { "kind": "p", "text": "一块直角三角形花园地，[[a=7\\text{ m}]]、[[b=24\\text{ m}]]、[[c=25\\text{ m}]]。则 [[r=3\\text{ m}]]，[[s=28\\text{ m}]]，[[[\\boxed{K=84\\text{ m}^2}]]]。公式由三条边界测量值直接给出三角形地块的面积。" },
          { "kind": "h3", "text": "例 6：三角形布帆" },
          { "kind": "p", "text": "一块直角三角形布料，[[a=9\\text{ ft}]]、[[b=12\\text{ ft}]]、[[c=15\\text{ ft}]]。则 [[r=3\\text{ ft}]]，[[s=18\\text{ ft}]]，[[[\\boxed{K=54\\text{ ft}^2}]]]。缝份和布料余量不计入这个平面数值。" },
          { "kind": "h3", "text": "例 7：大型三角形地块" },
          { "kind": "p", "text": "一块按直角三角形建模的测量地块，[[a=9\\text{ m}]]、[[b=40\\text{ m}]]、[[c=41\\text{ m}]]。则 [[r=4\\text{ m}]]，[[s=45\\text{ m}]]，[[[\\boxed{K=180\\text{ m}^2}]]]。简化的直角三角形模型假设边界在平地上是直线。" },
          { "kind": "h3", "text": "例 8：胶合板切割模板" },
          { "kind": "p", "text": "一块三角形胶合板模板，[[a=12\\text{ cm}]]、[[b=16\\text{ cm}]]、[[c=20\\text{ cm}]]。则 [[r=4\\text{ cm}]]，[[s=24\\text{ cm}]]，[[[\\boxed{K=96\\text{ cm}^2}]]]。面积有助于在计入切割损耗前估算用料。" },
          { "kind": "h3", "text": "例 9：大型三角形招牌板" },
          { "kind": "p", "text": "一块直角三角形招牌板，[[a=20\\text{ m}]]、[[b=21\\text{ m}]]、[[c=29\\text{ m}]]。则 [[r=6\\text{ m}]]，[[s=35\\text{ m}]]，[[[\\boxed{K=210\\text{ m}^2}]]]。结果表示面向观众的平面三角形表面。" },
          { "kind": "h3", "text": "例 10：三角形雨篷支架" },
          { "kind": "p", "text": "一个直角三角形雨篷支撑截面，[[a=15\\text{ ft}]]、[[b=20\\text{ ft}]]、[[c=25\\text{ ft}]]。则 [[r=5\\text{ ft}]]，[[s=30\\text{ ft}]]，[[[\\boxed{K=150\\text{ ft}^2}]]]。这是所建模三角形截面的计算面积。" },
          { "kind": "h3", "text": "例 11：工业支撑板" },
          { "kind": "p", "text": "一块直角三角形工业支撑板，[[a=11\\text{ m}]]、[[b=60\\text{ m}]]、[[c=61\\text{ m}]]。则 [[r=5\\text{ m}]]，[[s=66\\text{ m}]]，[[[\\boxed{K=330\\text{ m}^2}]]]。这个几何计算描述的是板的平面面积，不是其结构性能。" },
          { "kind": "h3", "text": "例 12：大型三角形屋顶端部截面" },
          { "kind": "p", "text": "一个直角三角形屋顶端部截面，[[a=13\\text{ ft}]]、[[b=84\\text{ ft}]]、[[c=85\\text{ ft}]]。则 [[r=6\\text{ ft}]]，[[s=91\\text{ ft}]]，[[[\\boxed{K=546\\text{ ft}^2}]]]。算出的面积有助于估计平面三角形的覆盖量。" },
          { "kind": "h3", "text": "实际例题对照" }
        ],
        "table": {
          "headers": ["应用", "边 a", "边 b", "斜边 c", "内切圆半径 r", "半周长 s", "面积"],
          "rows": [
            ["玻璃窗", "3", "4", "5", "1", "6", "6 m²"],
            ["钢托架", "5", "12", "13", "2", "15", "30 cm²"],
            ["坡道轮廓", "6", "8", "10", "2", "12", "24 m²"],
            ["屋顶板", "8", "15", "17", "3", "20", "60 ft²"],
            ["花园地块", "7", "24", "25", "3", "28", "84 m²"],
            ["布帆", "9", "12", "15", "3", "18", "54 ft²"],
            ["地块", "9", "40", "41", "4", "45", "180 m²"],
            ["胶合板模板", "12", "16", "20", "4", "24", "96 cm²"],
            ["招牌板", "20", "21", "29", "6", "35", "210 m²"],
            ["雨篷支架", "15", "20", "25", "5", "30", "150 ft²"],
            ["工业板", "11", "60", "61", "5", "66", "330 m²"],
            ["屋顶端部截面", "13", "84", "85", "6", "91", "546 ft²"]
          ]
        }
      },
      "sec-relationship": {
        "h2": "内切圆半径和半周长与三边有什么关系？",
        "blocks": [
          { "kind": "p", "text": "在直角三角形中，内切圆半径和半周长并非独立于各边，而是由它们构成的。从 [[r=\\frac{a+b-c}{2}]] 和 [[s=\\frac{a+b+c}{2}]] 出发，把两式相加和相减。相加得 [[[\\boxed{s+r=a+b}]]]，相减得 [[[\\boxed{s-r=c}]]]。这两个恒等式在给定记号下是直角三角形特有的，它们把计算器的两个输入变成了关于三角形本身的大量信息。" },
          { "kind": "h3", "text": "还原斜边" },
          { "kind": "p", "text": "由 [[s-r=c]]，已知 [[r]] 和 [[s]] 时可还原斜边。当 [[r=2]]、[[s=12]]：[[c=12-2]]，[[[\\boxed{c=10}]]]。两个输入就这样揭示了最长边，无需进一步测量。" },
          { "kind": "h3", "text": "还原两条直角边的和" },
          { "kind": "p", "text": "由 [[a+b=s+r]] 可直接得到两条直角边的和。当 [[r=2]]、[[s=12]]：[[a+b=14]]。仅凭和还不能分别确定每条边；求各边长度还需要一条信息。" },
          { "kind": "h3", "text": "还原两条直角边的积" },
          { "kind": "p", "text": "由于 [[K=\\frac{ab}{2}]] 且 [[K=rs]]，得 [[[\\boxed{ab=2rs}]]]。当 [[r=2]]、[[s=12]]：[[ab=48]]。由 [[a+b=14]] 和 [[ab=48]]，两条直角边为 6 和 8：[[6+8=14]] 且 [[6\\times8=48]]。两条直角边互换不改变三角形面积。" },
          { "kind": "h3", "text": "还原两条直角边的长度" },
          { "kind": "p", "text": "和与积使 [[a]] 和 [[b]] 成为 [[t^2-(s+r)t+2rs=0]] 的两个根，给出 [[[\\boxed{a,b=\\frac{(s+r)\\pm\\sqrt{(s+r)^2-8rs}}{2}}]]]。两个符号对应两种可能的直角边分配。当 [[r=2]]、[[s=12]]：[[a,b=\\frac{14\\pm\\sqrt{196-192}}{2}]]，即 [[a,b=\\frac{14\\pm2}{2}]]，直角边为 6 和 8。这是高深的数学推演，不是计算器的附加功能。" }
        ]
      },
      "sec-valid": {
        "h2": "如何检查内切圆半径和半周长是否构成有效的直角三角形",
        "blocks": [
          { "kind": "p", "text": "计算器只是把两个输入相乘，但不是每一对正长度都描述一个直角三角形。下面的检查把算术与几何分开。" },
          { "kind": "h3", "text": "基本输入条件" },
          { "kind": "p", "text": "输入必须满足 [[r>0]] 和 [[s>0]]。对于直角三角形，还要求 [[s>r]]，因为 [[c=s-r]] 且斜边必须为正。这三个条件是必要的，但不充分。" },
          { "kind": "h3", "text": "高深的直角三角形一致性检查" },
          { "kind": "p", "text": "由 [[a+b=s+r]] 和 [[ab=2rs]]，两条直角边为实数的充要条件是判别式 [[\\Delta=(s+r)^2-8rs]] 非负。化简得：[[[\\boxed{\\Delta=s^2-6rs+r^2}]]]。要使直角边长为实数，需 [[\\Delta\\geq0]]。由于 [[s]] 必须大于 [[r]]，等价的直角三角形条件是 [[[\\boxed{\\frac{s}{r}\\geq3+2\\sqrt2}]]]，或 [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt2}]]]。等号在等腰直角三角形时成立，这是最紧的可能情形。这是与上面基本检查明确区分的高深数学相容性检验。" },
          { "kind": "h3", "text": "有效示例" },
          { "kind": "p", "text": "已知 [[r=2]] 和 [[s=12]]，比值为 [[\\frac{s}{r}=6]]。由于 [[6>3+2\\sqrt2]]（约 5.83），这组值可以描述一个有效的直角三角形，对应边为 6、8、10。" },
          { "kind": "h3", "text": "不相容示例" },
          { "kind": "p", "text": "已知 [[r=2]] 和 [[s=10]]，比值为 [[\\frac{s}{r}=5]]，低于约 5.83 的阈值。这对数不能描述直角三角形，尽管把输入相乘会得到一个数值结果。计算 [[rs]] 与确认测量值描述的是直角三角形是两件不同的事。本指南不声称计算器会自动执行该检查。" }
        ]
      },
      "sec-heron": {
        "h2": "内切圆半径公式与海伦公式的比较",
        "blocks": [
          { "kind": "p", "text": "海伦公式由三边求面积：[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]。它用三边长和半周长，对所有非退化三角形成立，不需要把内切圆半径作为单独输入。把它与 [[[\\boxed{K=rs}]]] 比较。两者是近亲：半周长 [[s]] 在两式中都出现，而证明它们一致是理解 [[K=rs]] 正确的最清晰方式之一。" },
          { "kind": "h3", "text": "内切圆半径公式什么时候更简便？" },
          { "kind": "p", "text": "当内切圆半径和半周长已知时，[[K=rs]] 特别方便：一次乘法，没有平方根，不用分解边差。当内切圆已被测量，或前面的步骤已得出 [[r]] 和 [[s]]，这是通往面积的最短路径。" },
          { "kind": "h3", "text": "海伦公式什么时候更有用？" },
          { "kind": "p", "text": "当三边长已知而内切圆半径尚未算出时，海伦公式是更好的选择。它由 [[a]]、[[b]]、[[c]] 直接得出面积，不必绕道 [[r]]。两个公式没有谁普遍更精确；在输入一致时它们都精确，只在输入不一致时才分歧。" },
          { "kind": "h3", "text": "用 3-4-5 三角形验证两个公式" },
          { "kind": "p", "text": "已知 [[a=3]]、[[b=4]]、[[c=5]]，[[s=6]]，[[r=1]]。用内切圆半径：[[K=1\\times6=6]]。用海伦公式：[[K=\\sqrt{6(6-3)(6-4)(6-5)}]]，即 [[K=\\sqrt{6\\times3\\times2\\times1}]]，[[[\\boxed{K=6}]]]。结果一致，因为两个公式度量的是同一区域；它们是同一个面积的两种表达，一致是算术正确的有力信号。" }
        ]
      },
      "sec-legs": {
        "h2": "为什么内切圆半径公式与直角边公式给出相同面积？",
        "blocks": [
          { "kind": "p", "text": "两个公式声称的是同一面积：[[K=\\frac{ab}{2}]] 和 [[K=rs]]。把 [[r]] 和 [[s]] 写成边的形式，得 [[rs=\\frac{a+b-c}{2}\\times\\frac{a+b+c}{2}]]，于是 [[rs=\\frac{(a+b-c)(a+b+c)}{4}]]。分子是平方差：[[rs=\\frac{(a+b)^2-c^2}{4}]]。应用勾股定理 [[c^2=a^2+b^2]]：[[rs=\\frac{a^2+2ab+b^2-a^2-b^2}{4}]]，因此 [[[\\boxed{rs=\\frac{ab}{2}}]]]。两个公式在每个直角三角形上恒等；在输入一致时不可能分歧。" },
          { "kind": "p", "text": "用 3-4-5 三角形检验：[[r=1]]，[[s=6]]，[[rs=6]]，且 [[\\frac{ab}{2}=\\frac{3\\times4}{2}=6]]。用 6-8-10 三角形：[[r=2]]，[[s=12]]，[[rs=24]]，且 [[\\frac{ab}{2}=\\frac{6\\times8}{2}=24]]。熟悉的直角边公式与内切圆半径公式是穿着不同外衣的同一个量。" }
        ]
      },
      "sec-mistakes": {
        "h2": "用内切圆半径和半周长求面积时的常见错误",
        "blocks": [
          { "kind": "p", "text": "多数错误答案来自标错的输入，而非糟糕的算术。下面的十五个错误几乎覆盖了全部情形。" },
          { "kind": "h3", "text": "1. 把内切圆半径与外接圆半径混淆" },
          { "kind": "p", "text": "内切圆半径是里面的圆；外接圆半径是外面的圆。在 6-8-10 三角形中，[[r=2]] 但 [[R=\\frac{c}{2}=5]]。把 5 当作 [[r]] 用，得到的是 [[K=5\\times12=60]] 而不是 24。改正：问一问圆是在三角形里面还是经过它的顶点。" },
          { "kind": "h3", "text": "2. 用完整周长代替半周长" },
          { "kind": "p", "text": "公式需要的是 [[s]]，即周长的一半。当 [[r=2]]，若用完整周长 24 代替 [[s=12]]，结果为 [[K=2\\times24=48]]，是正确值 24 的两倍。改正：乘之前先把周长减半。" },
          { "kind": "h3", "text": "3. 把最终答案再除以二" },
          { "kind": "p", "text": "减半已经含在 [[s]] 里了。把 [[2\\times12=24]] 再除以二得 12，是真实面积的一半。改正：算出 [[rs]] 就停下。" },
          { "kind": "h3", "text": "4. 把内心与外心混淆" },
          { "kind": "p", "text": "内心是角平分线的交点；外心是边的垂直平分线的交点，在直角三角形中位于斜边中点。这是两个不同的点。改正：按你需要的圆去追踪正确的作图。" },
          { "kind": "h3", "text": "5. 把内切圆半径当作三角形的边" },
          { "kind": "p", "text": "内切圆半径是三角形内部的一段距离，不是它的三条边之一。它永远不属于 [[a+b+c]]。改正：让 [[r]] 远离一切边长表达式。" },
          { "kind": "h3", "text": "6. 用了错误的直角三角形内切圆半径公式" },
          { "kind": "p", "text": "直角三角形的简便公式是 [[r=\\frac{a+b-c}{2}]]，不是符号写错或减半了错误边的变体。常见的一个失误是用 [[r=\\frac{a+c-b}{2}]]，除非三角形等腰，否则会得到不同的数。改正：被减的边恒为斜边 [[c]]。" },
          { "kind": "h3", "text": "7. 忘记 c 是斜边" },
          { "kind": "p", "text": "在简便公式中，[[c]] 特指斜边。改正：用公式前先把最长边标为 [[c]]。" },
          { "kind": "h3", "text": "8. 把错误的边当作斜边" },
          { "kind": "p", "text": "选一条直角边充当 [[c]] 会同时败坏 [[r]] 和 [[s]]。改正：斜边是直角所对的边，恒为最长。" },
          { "kind": "h3", "text": "9. 混用不同的测量单位" },
          { "kind": "p", "text": "内切圆半径 20 cm 配半周长 1 m，不换算就得不到有意义的数。改正：先统一成一个单位，再相乘。" },
          { "kind": "h3", "text": "10. 输入零或负的长度" },
          { "kind": "p", "text": "零和负的长度描述不了任何三角形。改正：检查输入的每个长度都为正。" },
          { "kind": "h3", "text": "11. 以为每一对正的 r 和 s 都代表直角三角形" },
          { "kind": "p", "text": "如前所示，[[s=10]] 配 [[r=2]] 给出数字 20，却没有直角三角形。改正：当几何相容性重要时，运行 [[s/r\\geq3+2\\sqrt2]] 检查。" },
          { "kind": "h3", "text": "12. 用线性单位报告面积" },
          { "kind": "p", "text": "24 m² 的面积不是 24 m。改正：把平方单位和数字写在一起。" },
          { "kind": "h3", "text": "13. 过早舍入内切圆半径" },
          { "kind": "p", "text": "乘之前先把 [[r]] 舍入，会让整个面积偏移。改正：中间步骤保持足够精度，只对最终答案舍入。" },
          { "kind": "h3", "text": "14. 把半周长与两边之和混淆" },
          { "kind": "p", "text": "半周长是三边之和的一半，不是两边之和。改正：三边相加，再减半。" },
          { "kind": "h3", "text": "15. 以为公式只对直角三角形成立" },
          { "kind": "p", "text": "[[K=rs]] 对所有非退化三角形成立；只有 [[r=\\frac{a+b-c}{2}]] 这个简便公式是直角三角形特有的。改正：放心用面积公式，但对非直角三角形要用一般的内切圆半径推导。" },
          { "kind": "h3", "text": "错误与正确：一个具体例子" },
          { "kind": "p", "text": "用 6-8-10 三角形。正确：[[r=2]]，[[s=12]]，[[K=2\\times12=24]]。错误地用完整周长：[[K=2\\times24=48]]，面积翻倍。错误地把正确答案再除以二：[[K=\\frac{24}{2}=12]]，面积减半。两个错误都源于对住在 [[s]] 里的那个二分之一的误用。" }
        ]
      },
      "sec-verify": {
        "h2": "如何检查直角三角形面积是否正确",
        "blocks": [
          { "kind": "p", "text": "几个独立的检查能抓住常见错误。3-4-5 三角形演示了其中多数。" },
          { "kind": "h3", "text": "方法 1：内切圆半径和半周长" },
          { "kind": "p", "text": "用输入的值重算 [[K=rs]]。当 [[r=1]]、[[s=6]]，[[K=1\\times6=6]]。第二遍能抓住笔误。" },
          { "kind": "h3", "text": "方法 2：两条垂直的直角边" },
          { "kind": "p", "text": "当直角边已知或已还原，[[K=\\frac{ab}{2}]] 必须一致。这里 [[\\frac{3\\times4}{2}=6]] 与 [[1\\times6=6]] 相符：两种方法，一个三角形，一个答案。" },
          { "kind": "h3", "text": "方法 3：勾股定理" },
          { "kind": "p", "text": "确认 [[a^2+b^2=c^2]]：[[9+16=25]]。若各边不满足，三角形的认定就错了。" },
          { "kind": "h3", "text": "方法 4：直角三角形内切圆半径" },
          { "kind": "p", "text": "确认 [[r=\\frac{a+b-c}{2}]]：[[\\frac{3+4-5}{2}=1]]。不符意味着输入的内切圆半径不属于这个三角形。" },
          { "kind": "h3", "text": "方法 5：半周长" },
          { "kind": "p", "text": "确认 [[s=\\frac{a+b+c}{2}]]：[[\\frac{3+4+5}{2}=6]]。这能抓住周长与半周长的混淆。" },
          { "kind": "h3", "text": "方法 6：海伦公式" },
          { "kind": "p", "text": "确认 [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]：[[K=\\sqrt{6\\times3\\times2\\times1}=6]]。独立公式之间的一致是现有的最强检查。" },
          { "kind": "p", "text": "解释为什么独立公式之间的一致是有用的数学检查：一条路上的错误很少在另一条路上重演，因此来自不同公式的两个一致答案意味着输入和算术都可靠。" }
        ],
        "imgAlt": "用 K = rs、K = ab/2 与海伦公式比较 3-4-5 三角形的面积",
        "figcaption": "三种方法，一个答案：K = rs、K = ab/2 与海伦公式对 3-4-5 三角形都给出 6。"
      },
      "sec-units": {
        "h2": "理解内切圆半径和半周长计算中的测量单位",
        "blocks": [
          { "kind": "p", "text": "面积是二维的，因此其单位是长度单位的平方。用符号表示：[[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]。米与平方米、毫米与平方毫米、英尺与平方英尺、英寸与平方英寸同理。单位选择器的存在是为了让结果能被正确标注。" },
          { "kind": "h3", "text": "为什么两个输入必须用兼容的单位" },
          { "kind": "p", "text": "用公式前，内切圆半径和半周长必须用同一单位表示。若 [[r=20\\text{ cm}]]、[[s=1\\text{ m}]]，先换算：[[1\\text{ m}=100\\text{ cm}]]。然后 [[K=20\\times100]]，[[[\\boxed{K=2,000\\text{ cm}^2}]]]，或等价地 [[[\\boxed{K=0.2\\text{ m}^2}]]]。把不同单位的测量值相乘会得到一个没有干净单位的数，所以先换算再计算。" },
          { "kind": "h3", "text": "为什么要避免过早舍入" },
          { "kind": "p", "text": "[[r]] 或 [[s]] 的舍入值可能轻微影响最终面积，因为内切圆半径是直接乘进去的。中间计算保持足够精度，只对最终答案舍入。本指南对计算器界面显示之外的内部精度不作任何声称。" },
          { "kind": "h3", "text": "精确测量与实际测量" },
          { "kind": "p", "text": "精确的数学尺寸，例如 3-4-5 三角形的内切圆半径 1，与用物理仪器取到的测量值行为不同。仪器不确定度会流入面积，所以最后一位数字只和输入一样可靠。用卷尺量得内切圆半径 2 cm，实际可能是 1.9 或 2.1，面积带着这份不确定度。" }
        ]
      },
      "sec-related": {
        "h2": "探索相关的直角三角形计算器",
        "blocks": [
          { "kind": "p", "text": "不同的测量需要不同的计算器。" }
        ]
      },
      "sec-faq": {
        "h2": "常见问题",
        "blocks": [
          { "kind": "p", "text": "下面是关于内切圆半径和半周长求面积的最常见问题的回答。" }
        ]
      },
      "sec-conclusion": {
        "h2": "两个测量值承载了整个面积",
        "blocks": [
          { "kind": "p", "text": "内切圆半径和半周长看似不起眼的输入，却合在一起编码了三角形的全部范围。经由三个小三角形的推导说明了乘积为什么精确；切线段论证说明了直角三角形简便公式的来处；与直角边公式和海伦公式的比较说明了结果恒与几何学的其余部分一致。" },
          { "kind": "p", "text": "工作习惯很简单：确认 r 和 s 到底是什么，保持单位一致，并用独立公式验证答案。守住这些习惯，K = rs 就是三角形几何中最可靠的面积计算之一。" }
        ]
      }
    }
  }
};
