// areaFromSemiperimeterGuideTranslations.batch6.ts: Right Triangle Area From Semiperimeter Guide (Page 23 of 45) translations for Turkish (tr), Swedish (sv), and Chinese (zh).
export const AREA_FROM_SEMIPERIMETER_TRANSLATIONS_BATCH6 = {
  "tr": {
    "faqs": [
      {
        "question": "İç yarıçap ve yarı çevre kullanılarak dik üçgenin alanı için formül nedir?",
        "answer": "K = r × s; burada r iç yarıçaptır (iç teğet çemberin yarıçapı) ve s yarı çevredir (çevrenin yarısı). İkisini çarpın, sonuç bölme adımı olmadan alandır. r = 1 ve s = 6 için K = 1 × 6 = 6 birim kare. İki girdinin de aynı üçgeni tanımlaması gerekir."
      },
      {
        "question": "İç yarıçap nedir?",
        "answer": "İç yarıçap, üçgenin içine tam oturan ve üç kenara da değen çember olan iç teğet çemberin yarıçapıdır. Üç açıortayın kesiştiği nokta olan iç merkezden herhangi bir kenara inilen dik uzaklığa eşittir. Dik kenarları a ve b, hipotenüsü c olan bir dik üçgende r = (a + b - c) / 2 kısa yol formülü geçerlidir."
      },
      {
        "question": "İç yarıçap ile çevrel yarıçap arasındaki fark nedir?",
        "answer": "İç yarıçap, üçgenin içindeki ve üç kenara da değen çembere aittir; çevrel yarıçap ise üç köşeden de geçen çembere aittir. Farklı çemberleri ölçtükleri için değerleri farklıdır. Bir dik üçgende çevrel yarıçap R = c/2 olup tam olarak hipotenüsün yarısıdır; iç yarıçap ise (a + b - c)/2'dir."
      },
      {
        "question": "Dik üçgenin yarı çevresi nasıl hesaplanır?",
        "answer": "Üç kenarı toplayıp ikiye bölün: s = (a + b + c) / 2. 3-4-5 üçgeninde s = (3 + 4 + 5) / 2 = 6 olur. Yarı çevre, tam çevrenin yarısıdır; K = r × s kullanırken yanlışlıkla tam çevreyi girmek alanı iki katına çıkarır."
      },
      {
        "question": "Üç kenar uzunluğu biliniyorken iç yarıçap nasıl bulunur?",
        "answer": "Dik üçgen için r = (a + b - c) / 2 kısa yolunu kullanın; burada a ve b dik kenarlar, c hipotenüstür. Kenarları 5, 12, 13 olan üçgende r = (5 + 12 - 13) / 2 = 2 bulunur. Bu kısa yol yalnızca dik üçgenlerde geçerlidir; diğer üçgenlerde genel r = K / s bağıntısı gerekir."
      },
      {
        "question": "Alan neden iç yarıçap çarpı yarı çevreye eşittir?",
        "answer": "İç merkezi üç köşeye birleştirmek, üçgeni üç küçük üçgene böler; her birinin tabanı bir kenara, yüksekliği r'ye eşittir. Alanları ar/2, br/2 ve cr/2 olur. Toplamak r(a + b + c)/2 verir ve s = (a + b + c)/2 olduğundan toplam r × s olur."
      },
      {
        "question": "Formül bütün üçgenlerde işler mi?",
        "answer": "Evet. Bozulmamış her üçgenin bir iç teğet çemberi ve iç merkezi vardır, bu yüzden üç küçük üçgene bölme sağ, dar ve geniş açılı üçgenlerde de geçerlidir. Dik üçgen yalnızca daha kolaydır, çünkü iç yarıçapı kenarlardan r = (a + b - c) / 2 ile bulunabilir. Genel iç yarıçap yine de r = K / s'den gelir."
      },
      {
        "question": "Yarı çevre, çevreyle aynı şey midir?",
        "answer": "Hayır. Yarı çevre tam olarak çevrenin yarısıdır: s = P/2. 3-4-5 üçgeninde çevre 12, yarı çevre 6'dır. K = r × s içine tam çevreyi girmek 1 × 12 = 12 verir, yani 6 olan doğru alanın iki katı. Çarpmadan önce çevreyi yarıya indirin."
      },
      {
        "question": "Nihai sonucu ikiye bölmem gerekir mi?",
        "answer": "Hayır. K = r × s formülü bütün bölmeleri zaten içerir: üç küçük üçgenden gelen yarılar yarı çevrenin içine gömülüdür. Çarptıktan sonra bir kez daha bölmek en yaygın hatadır. r = 1 ve s = 6 için doğru alan 6'dır; (1 × 6) / 2 = 3 yanlıştır."
      },
      {
        "question": "Heron formülü ile iç yarıçap formülü arasındaki ilişki nedir?",
        "answer": "İkisi de aynı alanı hesaplar ama farklı girdilerden başlar. Heron formülü K = sqrt(s(s - a)(s - b)(s - c)) üç kenarın tamamını ister; K = r × s ise üç kenar yerine iç yarıçap ve yarı çevre ister. 3-4-5 üçgeninde ikisi de 6 verir, bu da bir formülü diğerinin güçlü bir denetimi yapar."
      },
      {
        "question": "İç yarıçap ve yarı çevre için ondalıklı değerler kullanabilir miyim?",
        "answer": "Evet. Formül ondalıkları tam sayılar gibi işler. r = 2.5 ve s = 8.4 için K = 2.5 × 8.4 = 21 birim kare. Çarpma boyunca tam duyarlığı koruyun ve yalnızca nihai sonucu ölçümlerin doğruluğuna uygun şekilde yuvarlayın."
      },
      {
        "question": "İç yarıçapımın ve yarı çevremin doğru olduğunu nasıl doğrulayabilirim?",
        "answer": "İkisinin de pozitif olduğunu ve s'nin r'den açıkça büyük olduğunu denetleyin. Kenarlar biliniyorsa s = (a + b + c)/2 ve r = (a + b - c)/2'yi yeniden hesaplayın, sonra alanı K = ab/2 ve Heron formülüyle çapraz denetleyin. Yöntemler arası uyum güçlü bir kanıttır. Farklı üçgenlerden gelen değerler, gerçek alan olmayan bir sayı üretir."
      }
    ],
    "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
    "relatedItems": [
      "Dik Kenarlardan Dik Üçgen Alanı Hesaplayıcı",
      "Dik Üçgen Yarı Çevre Hesaplayıcı",
      "Yükseklikten Dik Üçgen Alanı Hesaplayıcı",
      "Açıdan Dik Üçgen Alanı Hesaplayıcı",
      "Dik Üçgen Çevre Hesaplayıcı",
      "Dik Üçgen Alanı Hesaplayıcı"
    ],
    "relatedIntro": "Farklı ölçümler, farklı hesaplayıcılar gerektirir.",
    "faqHeading": "Sık Sorulan Sorular",
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "sec-intro": "İç Yarıçap ve Yarı Çevre Kullanarak Dik Üçgenin Alanı Nasıl Hesaplanır",
      "sec-right-triangle": "Dik Üçgen Nedir?",
      "sec-incircle": "Dik Üçgenin İç Teğet Çemberini Anlama",
      "sec-semiperimeter": "Üçgenin Yarı Çevresini Anlama",
      "sec-formula": "Üçgenin Alanı Neden İç Yarıçap Çarpı Yarı Çevreye Eşittir?",
      "sec-inradius": "Dik Üçgenin İç Yarıçapı Nasıl Hesaplanır",
      "sec-howto": "Yarı Çevreden Dik Üçgen Alanı Hesaplayıcı Nasıl Kullanılır",
      "sec-examples": "İç Yarıçap ve Yarı Çevreyle Dik Üçgen Alanının Adım Adım Örnekleri",
      "sec-practical": "İç Yarıçap ve Yarı Çevreden Dik Üçgen Alanının Gerçek Hayat Uygulamaları",
      "sec-legs-comparison": "İç Yarıçap Formülü Neden Dik Kenar Formülüyle Aynı Alanı Verir?",
      "sec-heron": "Heron Formülü ile Alan = İç Yarıçap × Yarı Çevre Arasındaki Fark Nedir?",
      "sec-consistency": "İç Yarıçap ve Yarı Çevrenin Geçerli Olduğu Nasıl Denetlenir",
      "sec-units": "Ölçü Birimleri İç Yarıçap ve Yarı Çevre Hesaplarını Nasıl Etkiler",
      "sec-mistakes": "Yarı Çevreden Dik Üçgen Alanı Hesaplarken Yaygın Hatalar",
      "sec-verify": "Dik Üçgen Alanınızın Doğru Olduğu Nasıl Denetlenir",
      "sec-applications": "İç Yarıçap ve Yarı Çevre Formülünün Pratik Uygulamaları",
      "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "sec-faq": "Sık Sorulan Sorular",
      "sec-conclusion": "İki Ölçüm, Bir Çarpım"
    },
    "sections": {
      "sec-intro": {
        "h2": "İç Yarıçap ve Yarı Çevre Kullanarak Dik Üçgenin Alanı Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "[[r=1]], [[s=6]] alın. [[K=r\\times s]] uygulayın: [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Sonuç, üçgenin üç kenarının çevrelediği toplam düz alanı adlandırır: altı birim kare. Yarı Çevreden Dik Üçgen Alanı Hesaplayıcı, bu iki girdi için tam olarak bunu döndürür." },
          { "kind": "p", "text": "İç yarıçap, üçgenin içine yerleşmiş ve üç kenara da değen çemberin yarıçapıdır. Yarı çevre, sınır uzunluğunun yarısıdır: üç kenarın toplamının ikiye bölümüdür. İki ölçüm yeterlidir, çünkü iç yarıçap, iç merkezden kurulan üç küçük üçgen için ortak bir dik yükseklik görevi görür; yarı çevre ise bu üçgenlerin tabanlarını tek bir çarpanda toplar." },
          { "kind": "p", "text": "Bu akıl yürütme her üçgen için geçerlidir, çünkü her birinin bir iç teğet çemberi vardır. Dik üçgen bir kolaylık daha katar: iç yarıçapı, kısa bir formülle üç kenardan elde edilir, bu yüzden r ve s çoğu zaman zaten bilinir. Bu yöntem, iç teğet çemberin ya da yarı çevrenin verildiği problemlerde parlar; çünkü dik kenar ya da açı ölçmeye gerek kalmaz." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Dik Üçgen Nedir?",
        "blocks": [
          { "kind": "p", "text": "İç teğet çember sahneye girmeden önce üçgenin kendisi hatasız etiketlenmelidir. Aşağıdaki simgeler kılavuz boyunca sabit kalır ve hesaplayıcı aynı adları kullanır." },
          { "kind": "h3", "text": "Dik Üçgenin Tanımı" },
          { "kind": "p", "text": "Dik üçgen, tam olarak bir iç açısı 90 derece olan üç kenarlı bir çokgendir. Üç köşesi, üç kenarı, iki dar açısı ve genellikle küçük bir kareyle işaretlenen bir dik açısı vardır. Dik açıyı oluşturan iki kenar dik kenarlardır; karşısındaki kenar hipotenüstür. [[C=90^\\circ]] olduğundan [[[\\boxed{A+B=90^\\circ}]]] sonucu çıkar: iki dar açı birbirini 90 dereceye tamamlar, yani birini bilmek diğerini belirler." },
          { "kind": "h3", "text": "İki Dik Kenarı Anlama" },
          { "kind": "p", "text": "[[a]] dik kenarı [[A]] açısının karşısındadır; [[b]] dik kenarı [[B]] açısının karşısındadır. İki dik kenar dik açı köşesinde buluşur ve birbirine diktir. Alana doğrudan katkı sağlarlar, çünkü her dik kenar taban, diğeri dik yükseklik görevi görebilir. Bu sayfada iç yarıçapa da kaynaklık ederler; çünkü [[r=\\frac{a+b-c}{2}]] kısa yolu iki dik kenardan ve hipotenüsten kurulur." },
          { "kind": "h3", "text": "Hipotenüsü Anlama" },
          { "kind": "p", "text": "Hipotenüs, 90 derecelik açının karşısındaki kenardır ve her zaman üçgenin en uzun kenarıdır. Dik açıyı asla oluşturmaz; onun karşısına uzanır. Dik kenar alan formülünde rolü yoktur ama burada önemlidir: hipotenüs hem yarı çevreye [[s=\\frac{a+b+c}{2}]] hem de iç yarıçap kısa yoluna [[r=\\frac{a+b-c}{2}]] girer. İki dik kenar biliniyorsa Pisagor teoremi onu [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] ile geri kazandırır." },
          { "kind": "h3", "text": "Bu Üçgeni Diğer Üçgenlerden Farklı Kılan Nedir?" },
          { "kind": "p", "text": "90 derecelik köşe bütün hikâyedir. Dik kenarları herhangi bir çizim gerektirmeden dik yapar, bu da standart alan formülünü basitleştirir; ayrıca dik açıya yakın iç teğet çember teğet parçalarını iç yarıçapın kendisine eşitler, bu da iç yarıçap formülünü basitleştirir. Diğer üçgenler de [[K=r\\times s]]'i sağlar ama iç yarıçaplarını bulmak genellikle önce alanı gerektirir. İç yarıçapın doğrudan kenar uzunluklarından düştüğü tek durum dik üçgendir." }
        ]
      },
      "sec-incircle": {
        "h2": "Dik Üçgenin İç Teğet Çemberini Anlama",
        "blocks": [
          { "kind": "p", "text": "İç yarıçap, ancak iç teğet çember net biçimde gözde canlandırıldığında anlam kazanır. Bu bölüm, fikri çemberin kendisinden başlayıp yarıçapın her kenarla buluştuğu teğet noktalarına kadar kurar." },
          { "kind": "h3", "text": "İç Teğet Çemberin Tanımı" },
          { "kind": "p", "text": "İç teğet çember, bir üçgenin içine, üç kenara da değecek biçimde yerleştirilmiş çemberdir. İç bölgede durur, her kenara tam bir noktada teğettir ve bir kenarı kesemez; çünkü teğetlik onu yerinde sabitler. Bozulmamış her üçgenin tam bir iç teğet çemberi vardır: köşe bölgelerinin içine bir çember yerleştirilip büyütüldüğünde, üç kenara da dokunan tek bir en büyük boyut bulunur. Kenar başına bir tane olmak üzere üç teğet noktası, iç yarıçapın daha sonra ölçüleceği yerlerdir." },
          { "kind": "h3", "text": "İç Merkez Nedir?" },
          { "kind": "p", "text": "[[I]] ile gösterilen iç merkez, üç iç açıortayın kesiştiği noktadır. Her açıortay bir köşe açısını iki eşit parçaya böler ve bir açıortay üzerindeki her nokta, açıyı oluşturan iki kenara eşit dik uzaklıktadır. Üç açıortayın kesişimi bu yüzden üç kenara da eşit uzaklıktadır; işte bu yüzden her kenara değen bir çemberin merkezi olabilir. İç merkez, geçerli her üçgenin içinde yer alır; asla bir kenar üzerinde ya da dışarıda olmaz." },
          { "kind": "h3", "text": "İç Yarıçap Nedir?" },
          { "kind": "p", "text": "İç yarıçap, iç merkezden üçgenin herhangi bir kenarına inilen dik uzaklıktır: [[[\\boxed{r=\\text{distance from the incenter to a side}}]]]. İç merkez üç kenara da eşit uzaklıkta olduğundan, hangi kenar seçilirse seçilsin değer aynıdır. Bu tek sayı, iç teğet çemberin yarıçapıdır; merkezden teğet noktalarına çizilen üç kısa parçanın her birinin uzunluğudur ve sonraki bir bölümdeki alan ispatını çalıştıran ortak yüksekliktir." },
          { "kind": "h3", "text": "Teğet İlişkisini Anlama" },
          { "kind": "p", "text": "Teğet noktasına çizilen bir yarıçap, dokunduğu kenara diktir. Üç temas noktasına uygulandığında bu, [[r\\perp a]], [[r\\perp b]] ve [[r\\perp c]] verir. Her ifade, şeklin farklı bir köşesini anlatır: a dik kenarında biten yarıçap a dik kenarına dik durur; b dik kenarı ve hipotenüs için de durum aynıdır. Bu diklik süs değildir; her yarıçapın alan ispatındaki üç küçük üçgenden birinin yüksekliği olarak görev yapmasını sağlayan özelliktir." },
          { "kind": "h3", "text": "İç Teğet Çember ile Çevrel Çember Arasındaki Fark" },
          { "kind": "p", "text": "İç teğet çember üçgenin içinde yaşar ve üç kenara da değer; çevrel çember üç köşeden de geçer ve üçgeni çevreler. Yarıçapları farklı ölçümlerdir ve asla birbirinin yerine kullanılmamalıdır. Dik üçgende çevrel yarıçapın kendi basit kuralı vardır, [[[\\boxed{R=\\frac{c}{2}}]]], çünkü hipotenüs çevrel çemberin bir çapıdır: hipotenüsün orta noktası çevrel merkezdir. [[r]] iç yarıçapı ikisinin küçüğüdür ve içteki çembere aittir." }
        ],
        "imgAlt": "İç teğet çemberli ABC dik üçgeni: iç merkez I, üç teğet noktası, r uzunluğunda dik yarıçaplar",
        "figcaption": "İç teğet çemberli ABC Üçgeni: her biri r uzunluğunda üç dik yarıçap."
      },
      "sec-semiperimeter": {
        "h2": "Üçgenin Yarı Çevresini Anlama",
        "blocks": [
          { "kind": "p", "text": "Yarı çevre sıradan bir yarı ölçü gibi görünür ama alan hesabının büyük kısmını sırtlar. Geometrinin neden çevrenin yarısına bu kadar sık başvurduğunu anlamak, ispat için zemini hazırlar." },
          { "kind": "h3", "text": "Yarı Çevrenin Tanımı" },
          { "kind": "p", "text": "Yarı çevre, toplam çevrenin tam yarısıdır: [[[\\boxed{s=\\frac{P}{2}}]]]. Bir üçgen için bu [[[\\boxed{s=\\frac{a+b+c}{2}}]]] olur. [[P]] çevresi tam sınır uzunluğudur, yani üç kenarın toplamı; yarı çevre bu toplamın yarısıdır. İkisi [[P=2s]] ile ilişkilidir ve bunları karıştırmak bu sayfadaki en pahalı girdi hatasıdır." },
          { "kind": "h3", "text": "Yarı Çevre Nasıl Hesaplanır" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]] alın. Önce üç kenarı toplayın, sonra bir kez bölün: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]]. Toplama bölmeden önce gelmelidir; çünkü yarı çevre bütün sınırı yarıya indirir, her kenarı ayrı ayrı değil. Burada böldükten sonra toplamak da aynı sayıyı verirdi ama [[s=\\frac{a+b+c}{2}]] formülü doğru sırayı belirtir: önce sınırı toplayın, sonra yarıya indirin." },
          { "kind": "h3", "text": "Tam Çevre Yerine Neden Yarı Çevre Kullanılır?" },
          { "kind": "p", "text": "Üçgen alan formülleri sürekli yarılar üretir: ispattaki her küçük üçgen ikiye bölünmeye katkı sağlar ve yarı çevre hepsini bir kerede içine alır. Heron formülünün, [[r=\\frac{K}{s}]] iç yarıçap bağıntısının ve ardından gelen ispatın doğal değişkenidir. Bunun yerine tam çevreyi girmek sonucu iki katına çıkarır; çünkü [[K=r\\times P=2rs]] gerçek alanın iki katıdır. Hesaplayıcı tam olarak bu yüzden [[s]] ister, [[P]] değil: böylece çarpmanın başka düzeltmeye ihtiyacı kalmaz." },
          { "kind": "h3", "text": "Yarı Çevre En Uzun Kenardan Küçük Olabilir mi?" },
          { "kind": "p", "text": "Hayır. Üçgen eşitsizliği [[a+b>c]] gerektirir: iki kısa kenarın toplamı en uzun kenarı geçmelidir, yoksa üçgen kapanamaz. İki tarafa da [[c]] eklemek [[a+b+c>2c]] verir ve yarıya indirmek [[\\frac{a+b+c}{2}>c]]'yi, yani [[s>c]]'yi verir. Geçerli bir üçgende yarı çevre her zaman en uzun kenarı aşar. Bildirilen bir yarı çevre hipotenüsten küçükse, girdiler gerçek bir üçgeni tanımlayamaz." }
        ]
      },
      "sec-formula": {
        "h2": "Üçgenin Alanı Neden İç Yarıçap Çarpı Yarı Çevreye Eşittir?",
        "blocks": [
          { "kind": "p", "text": "Genel kural [[K=\\frac{\\text{base}\\times\\text{height}}{2}]] ile başlayın. İç merkezi [[I]] üç köşeye birleştirin. Üçgen, her biri bir özgün kenarı taban, iç yarıçapı dik yükseklik olarak kullanan üç küçük üçgene bölünür. Bu bölümün geri kalanı her parçayı hesaplayıp toplar; böylece [[K=r\\times s]] ezberlenmez, görülür." },
          { "kind": "h3", "text": "Birinci Küçük Üçgenin Alanı" },
          { "kind": "p", "text": "[[a]] kenarı üzerine kurulan üçgenin tabanı [[a]], yüksekliği [[r]]'dir; çünkü yarıçap, teğet noktasında [[a]] kenarına dik olarak buluşur. Alanı bu yüzden [[K_1=\\frac{ar}{2}]] olur. Dik açıyla ilgili hiçbir şey henüz kullanılmadı; bu adım her üçgenin kenarı için işler." },
          { "kind": "h3", "text": "İkinci Küçük Üçgenin Alanı" },
          { "kind": "p", "text": "[[b]] kenarı üzerine kurulan üçgen aynı örüntüyü izler: taban [[b]], dik yükseklik [[r]], alan [[K_2=\\frac{br}{2}]]. Yükseklik yine aynı [[r]] sayısıdır; çünkü iç merkez her kenara eşit uzaklıktadır. Bu ortak yükseklik bütün ispatın anahtarıdır." },
          { "kind": "h3", "text": "Üçüncü Küçük Üçgenin Alanı" },
          { "kind": "p", "text": "[[c]] kenarı üzerine kurulan üçgen seti tamamlar: [[K_3=\\frac{cr}{2}]]. Üç küçük üçgen, özgün üçgeni tam olarak döşer; ne üst üste binme ne boşluk vardır: iç merkezden köşelere çizilen parçalar iç bölgeyi ayırdığından, özgünün her noktası bunlardan birinin içindedir." },
          { "kind": "h3", "text": "Üç Alanı Toplama" },
          { "kind": "p", "text": "Parçaları toplayın: [[K=K_1+K_2+K_3]]. Yerine koymak [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]] verir. Toplamdan [[r]]'yi çarpan olarak çıkarın: [[K=\\frac{r(a+b+c)}{2}]]. [[s=\\frac{a+b+c}{2}]] olduğunu hatırlayın; yani köşeli parantez içindeki kesir tam olarak yarı çevredir ve [[[\\boxed{K=r\\times s}]]]. Üç küçük üçgenden gelen her yarı, yarı çevrenin içine gömülmüştür; bu yüzden son çarpmanın başka bölmeye ihtiyacı yoktur." },
          { "kind": "h3", "text": "Bu Formül Neden Her Üçgende İşler?" },
          { "kind": "p", "text": "Bozulmamış her üçgenin bir iç teğet çemberi ve iç merkezi vardır ve iç merkezin üç kenara olan dik uzaklığı aynı [[r]] sayısıdır. Üç küçük üçgene bölme başka hiçbir şey kullanmaz: dik açı yok, özel kenar uzunlukları yok, özel şekil yok. Üçgen ister dik, ister dar, ister geniş açılı olsun; iç merkez köşelere birleşir ve aynı cebir [[K=r\\times s]]'e ulaşır. Formül genel olarak üçgenlerin bir özelliğidir; bu yüzden geometri kitapları onu bir kez ispatlar ve her yerde kullanır." },
          { "kind": "h3", "text": "Bu Formül Dik Üçgenler İçin Neden Özellikle Kullanışlıdır?" },
          { "kind": "p", "text": "Özdeşlik aynı kalır ama iç yarıçap kolaylaşır. Genel bir üçgende iç yarıçap genellikle [[r=\\frac{K}{s}]] ile alanın kendisinden bulunur ki alan hedefse bu döngüseldir. Dik üçgen bu döngüden kaçar: iç yarıçapı, sonraki bölümde türetildiği gibi, kenarlardan doğrudan [[r=\\frac{a+b-c}{2}]] ile gelir. Bu, [[K=r\\times s]]'i dik üçgenler için yeniden düzenlenmiş bir tanım olmaktan çıkarıp gerçek bir çalışma yöntemi yapar." }
        ],
        "imgAlt": "İç merkez I noktasından yükseklikleri r olan üç küçük üçgene bölünmüş üçgen; K = r çarpı s ispatı",
        "figcaption": "Üç küçük üçgen r yüksekliğini paylaşır; alanları toplamı r çarpı s eder."
      },
      "sec-inradius": {
        "h2": "Dik Üçgenin İç Yarıçapı Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "Dik kenarları [[a]] ve [[b]], hipotenüsü [[c]] olan bir dik üçgende iç yarıçap [[[\\boxed{r=\\frac{a+b-c}{2}}]]] olur. Bu kısa yol dik üçgenlere özgüdür. Aşağıdaki ispat yalnızca çemberlerin teğet-parça özelliğini kullanır ve işlenmiş örnekler onu eylem hâlinde gösterir." },
          { "kind": "h3", "text": "İç Yarıçap Formülü Neden İşler?" },
          { "kind": "p", "text": "Aynı dış noktadan bir çembere çizilen teğet parçalarının uzunlukları eşittir. İç teğet çember iki dik kenara da değer ve bu değme noktalarına giden iki yarıçap kenarlarla dik açı yapar. Köşedeki dik açıyla birlikte köşe bölgesi kenarı [[r]] olan bir kare oluşturur; yani dik açı köşesinden iki dik kenar üzerindeki teğet noktalarına olan uzaklıkların her biri [[r]]'dir. a dik kenarındaki kalan teğet parçaya [[x]], b dik kenarındaki kalana [[y]] deyin. Her dar köşeden çıkan iki teğet parça eşit olduğundan hipotenüs aynı [[x]] ve [[y]]'ye bölünür. Bu yüzden [[a=r+x]], [[b=r+y]] ve [[c=x+y]] olur. İlk iki denklemi toplayın: [[a+b=2r+x+y]]. [[x+y=c]] olduğundan bu [[a+b=2r+c]] olur ve yeniden düzenlemek [[[\\boxed{r=\\frac{a+b-c}{2}}]]] verir." },
          { "kind": "h3", "text": "İşlenmiş Örnek: 3-4-5 Üçgeni" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]] verilsin: kısa yolda yerine koyun, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]]. 3-4-5 üçgeninin iç teğet çemberinin yarıçapı 1'dir; bu, girişteki [[r=1]] ve [[s=6]]'nın [[K=6]] verdiği örnekle uyuşur." },
          { "kind": "h3", "text": "İşlenmiş Örnek: 5-12-13 Üçgeni" },
          { "kind": "p", "text": "[[a=5]], [[b=12]], [[c=13]] verilsin: o hâlde [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]]. [[s=\\frac{5+12+13}{2}=15]] ile eşleştiğinde alan [[K=2\\times15=30]] olarak gelir; dik kenar formülü [[K=\\frac{5\\times12}{2}=30]] ile doğrulanır." },
          { "kind": "h3", "text": "İç Yarıçap İçin Alternatif Bir Formül" },
          { "kind": "p", "text": "Kısa yol [[[\\boxed{r=\\frac{ab}{a+b+c}}]]] biçiminde de yazılabilir. Bu ikinci, ilgisiz bir formül değildir. [[K=rs]] ve [[K=\\frac{ab}{2}]]'den başlayın; yani [[rs=\\frac{ab}{2}]]. [[s=\\frac{a+b+c}{2}]] olduğundan yerine koymak [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]] verir ve yarıları sadeleştirmek [[r=\\frac{ab}{a+b+c}]] bırakır. [[r=\\frac{a+b-c}{2}]] ile uyuşmalıdır: 3-4-5 ile denetleyin, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], aynı yarıçap. Cebirsel olarak, dik üçgen için [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] olduğundan iki biçim özdeştir." },
          { "kind": "h3", "text": "Bu İç Yarıçap Kısa Yolu Her Üçgende İşler mi?" },
          { "kind": "p", "text": "Hayır. Türetme dik açıya dayandı: kenarı [[r]] olan köşe karesi, ancak iki dik kenar 90 derecede buluştuğu için vardır. Genel bir üçgende iç yarıçap [[[\\boxed{r=\\frac{K}{s}}]]] formülünden ya da bilinen ölçümlere uygun bir formülden, örneğin [[r=(s-a)\\tan\\frac{A}{2}]]'den gelmelidir. [[r=\\frac{a+b-c}{2}]]'yi dik olmayan bir üçgene uygulamak, geometrik anlamı olmayan bir sayı hesaplar." }
        ],
        "imgAlt": "x ve y teğet parçaları, r = (a + b - c) / 2 iç yarıçap formülünü türetir",
        "figcaption": "Eşit teğet parçaları a = r + x, b = r + y, c = x + y verir."
      },
      "sec-howto": {
        "h2": "Yarı Çevreden Dik Üçgen Alanı Hesaplayıcı Nasıl Kullanılır",
        "blocks": [
          { "kind": "p", "text": "Hesaplayıcı tam olarak iki girdi ister ve bunlar sırayla girilir. Aşağıdaki adımlar, ölçümlerin belirlenmesinden denetlenmiş bir sonuca kadar ekrandaki düzeni takip eder." },
          { "kind": "p", "text": "Hesaplayıcının tam olarak iki girdisi vardır: iç yarıçap [[r]] ve yarı çevre [[s]]. Üç kenarı, dik kenarları, hipotenüsü ya da bir açıyı almaz. [[K=r\\times s]] çarpması gösterildiği gibi tamamdır; sonuç asla bir kez daha ikiye bölünmemelidir." }
        ],
        "steps": [
          "<strong>Dik üçgenin iç yarıçapını belirleyin.</strong> Bu, üçgenin içine çizilen çemberin yarıçapıdır. Üç kenar biliniyorsa [[r=\\frac{a+b-c}{2}]] ile hesaplayın.",
          "<strong>Yarı çevresini belirleyin.</strong> Üç kenarı toplayıp ikiye bölün: [[s=\\frac{a+b+c}{2}]]. Bu, tam çevrenin yarısıdır, çevrenin kendisi değil.",
          "<strong>İki değerin de aynı üçgene ait olduğundan emin olun.</strong> Bir üçgenden alınan iç yarıçap ile başka bir üçgenden alınan yarı çevre anlamsız bir çarpım üretir.",
          "<strong>Gerekirse ölçümleri uyumlu birimlere çevirin.</strong> İki uzunluk da aynı birimi kullanmalıdır: metre ile metre, santimetre ile santimetre, asla karışık değil.",
          "<strong>İç yarıçap r'yi ilk giriş alanına girin.</strong> Geçerli her üçgende bu, iki değerin küçüğüdür.",
          "<strong>Yarı çevre s'yi ikinci giriş alanına girin.</strong> Girilen değerin bütün çevrenin değil, çevrenin yarısının olduğundan iki kez emin olun.",
          "<strong>Calculate Area düğmesine tıklayın.</strong> Hesaplayıcı iki girdiyi doğrudan çarpar.",
          "<strong>Görüntülenen sonucu gözden geçirin.</strong> Alanı okuyun ve üçgenin boyutuna göre makul göründüğünü doğrulayın.",
          "<strong>Formül ve yerine koyma adımlarını denetleyin.</strong> Girilen değerler doldurulmuş hâlde [[K=r\\times s]]'i gösterirler.",
          "<strong>Sonucun birim kare cinsinden ifade edildiğini doğrulayın.</strong> Çarpılan uzunluk birimleri birim kare verir: girdilerle eşleşen m², cm², ft².",
          "<strong>Yeni bir hesaba girmeden önce Reset düğmesini kullanın.</strong> Temiz bir başlangıç için iki alanı da temizler."
        ]
      },
      "sec-examples": {
        "h2": "İç Yarıçap ve Yarı Çevreyle Dik Üçgen Alanının Adım Adım Örnekleri",
        "blocks": [
          { "kind": "p", "text": "Dört klasik dik üçgen bütün zinciri gösterir: kenarlardan yarı çevreye, kenarlardan iç yarıçapa, sonra tek bir çarpma. Bu örneklerde r ve s kenar uzunluklarından türetilmiştir; hesaplayıcının kendisi r ve s'yi doğrudan kabul eder." },
          { "kind": "h3", "text": "Örnek 1: 3-4-5 Dik Üçgeni" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]] verilsin. Adım 1: yarı çevreyi hesaplayın, [[s=\\frac{3+4+5}{2}]], [[s=6]]. Adım 2: iç yarıçapı hesaplayın, [[r=\\frac{3+4-5}{2}]], [[r=1]]. Adım 3: alanı hesaplayın, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Dik kenar formülüyle doğrulayın: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Örnek 2: 5-12-13 Dik Üçgeni" },
          { "kind": "p", "text": "[[a=5]], [[b=12]], [[c=13]] verilsin. Yarı çevre: [[s=\\frac{5+12+13}{2}=15]]. İç yarıçap: [[r=\\frac{5+12-13}{2}=2]]. Alan: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Doğrulayın: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Örnek 3: 8-15-17 Dik Üçgeni" },
          { "kind": "p", "text": "[[a=8]], [[b=15]], [[c=17]] verilsin. Yarı çevre: [[s=\\frac{8+15+17}{2}=20]]. İç yarıçap: [[r=\\frac{8+15-17}{2}=3]]. Alan: [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]. Doğrulayın: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Örnek 4: 7-24-25 Dik Üçgeni" },
          { "kind": "p", "text": "[[a=7]], [[b=24]], [[c=25]] verilsin. Yarı çevre: [[s=\\frac{7+24+25}{2}=28]]. İç yarıçap: [[r=\\frac{7+24-25}{2}=3]]. Alan: [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]]. Doğrulayın: [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "İşlenmiş Örneklerin Karşılaştırması" }
        ],
        "table": {
          "headers": ["Üçgen", "a Dik Kenarı", "b Dik Kenarı", "c Hipotenüsü", "r İç Yarıçapı", "s Yarı Çevresi", "K Alanı"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "İç Yarıçap ve Yarı Çevreden Dik Üçgen Alanının Gerçek Hayat Uygulamaları",
        "blocks": [
          { "kind": "p", "text": "On iki işlenmiş durum, formülü sayfadan atölyeye, şantiyeye ve stüdyoya taşır. Her biri dik üçgen bir paneli, kesiti, profili ya da basitleştirilmiş modeli adlandırır; iç yarıçapı ve yarı çevreyi formülden geçirir ve sayıların arkasındaki varsayımı belirtir. Bunlar basitleştirilmiş dik üçgen modellerdir: gerçek her pencere, çatı, bahçe, rampa, yelken ya da arsa tam bir dik üçgen oluşturmaz; düzensiz bir nesne, formül uygulanmadan önce daha basit şekillere bölünmelidir. Alan yalnızca düz geometrik yüzeyi anlatır; tek başına yapısal dayanımı, yük kapasitesini ya da inşaat güvenliğini asla belirlemez." },
          { "kind": "h3", "text": "Örnek 1: Üçgen Cam Pencere" },
          { "kind": "p", "text": "Üçgen bir cam pencerenin kenarları [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]] olsun. Yarı çevre: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. İç yarıçap: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Alan: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]. Sonuç, çerçeve payları çıkarılmadan önceki düz üçgen cam yüzeyini temsil eder. Varsayım: cam gerçek bir dik üçgendir; çerçeve ölçüleri ayrıca ele alınır." },
          { "kind": "h3", "text": "Örnek 2: Çelik Destek Konsolu" },
          { "kind": "p", "text": "Üçgen bir çelik destek plakasının kenarları [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]] olsun. Yarı çevre: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. İç yarıçap: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. Alan: [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]]. Bu, düz plaka alanıdır ve onun yapısal dayanımını belirlemez. Varsayım: konsol boşluğu dik üçgen olarak kesilmiştir; cıvata delikleri ve bükümler hariçtir." },
          { "kind": "h3", "text": "Örnek 3: Çatı Destek Kesiti" },
          { "kind": "p", "text": "Dik üçgen bir çatı destek kesitinin kenarları [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]] olsun. Yarı çevre: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. İç yarıçap: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. Alan: [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]]. Formül, malzeme tahminleri için kullanışlı olan düz üçgen destek kesitini ölçer. Varsayım: kesit dik üçgen olarak modellenmiştir; çatının bütün geometrisi farklı olabilir." },
          { "kind": "h3", "text": "Örnek 4: Üçgen Bahçe Bölümü" },
          { "kind": "p", "text": "Basitleştirilmiş dik üçgen bir bahçe bölümünün kenarları [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]] olsun. Yarı çevre: [[s=28\\text{ m}]]. İç yarıçap: [[r=3\\text{ m}]]. Alan: [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]]. Alan, örneğin çim ya da malç sipariş ederken üçgen peyzaj bölümünü tahmin etmeye yardımcı olur. Varsayım: yatak sınırları düzdür ve dik açıyla buluşur." },
          { "kind": "h3", "text": "Örnek 5: Üçgen Rampa Profili" },
          { "kind": "p", "text": "Basitleştirilmiş bir rampa yan profilinin kenarları [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]] olsun. Yarı çevre: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. İç yarıçap: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. Alan: [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]]. Bu, eğimli rampa yüzeyini değil, üçgen yan profili ölçer. Varsayım: profil, tabanda kare köşeyle modellenmiştir." },
          { "kind": "h3", "text": "Örnek 6: Kontrplak Kesim Şablonu" },
          { "kind": "p", "text": "Dik üçgen bir kontrplak şablonun kenarları [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]] olsun. Yarı çevre: [[s=24\\text{ cm}]]. İç yarıçap: [[r=4\\text{ cm}]]. Alan: [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]]. Hesap, kesim firesinden önceki düz malzeme alanını tahmin eder. Varsayım: şablon gerçek bir dik üçgendir; testere payı ve artıklar ayrıca hesaba katılır." },
          { "kind": "h3", "text": "Örnek 7: Üçgen Tabela Paneli" },
          { "kind": "p", "text": "Üçgen bir tabela panelinin kenarları [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]] olsun. Yarı çevre: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. İç yarıçap: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. Alan: [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]]. Bu, panelin düz baskı yüzeyini temsil eder. Varsayım: panel yüzü düzdür ve dik üçgendir; montaj donanımı hariçtir." },
          { "kind": "h3", "text": "Örnek 8: Arazi Ölçüm Kesiti" },
          { "kind": "p", "text": "Basitleştirilmiş dik üçgen bir arazi kesitinin kenarları [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]] olsun. Yarı çevre: [[s=45\\text{ m}]]. İç yarıçap: [[r=4\\text{ m}]]. Alan: [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]]. Formül, ölçülen üçgen kesitin alanını hesaplar. Varsayım: kesit kare köşeyle modellenmiştir; düzensiz bir arsa daha basit şekillere bölünmelidir." },
          { "kind": "h3", "text": "Örnek 9: Üçgen Kumaş Yelken" },
          { "kind": "p", "text": "Dik üçgen bir kumaş panelin kenarları [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]] olsun. Yarı çevre: [[s=30\\text{ ft}]]. İç yarıçap: [[r=5\\text{ ft}]]. Alan: [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]]. Sonuç dikişleri, kıvırmaları ve malzeme paylarını içermez. Varsayım: yelken düz modellenmiştir; gerçek yelkenler yük altında eğrilir." },
          { "kind": "h3", "text": "Örnek 10: Endüstriyel Destek Paneli" },
          { "kind": "p", "text": "Dik üçgen bir endüstriyel panelin kenarları [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]] olsun. Yarı çevre: [[s=66\\text{ m}]]. İç yarıçap: [[r=5\\text{ m}]]. Alan: [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]]. Sonuç, yapısal performansını değil, düz geometrik paneli anlatır. Varsayım: panel dik üçgen olarak modellenmiştir; kalınlık ve bağlantılar ayrı konulardır." },
          { "kind": "h3", "text": "Örnek 11: Depo Çatı Uç Kesiti" },
          { "kind": "p", "text": "Basitleştirilmiş bir depo çatı uç kesitinin kenarları [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]] olsun. Yarı çevre: [[s=91\\text{ ft}]]. İç yarıçap: [[r=6\\text{ ft}]]. Alan: [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]]. Sonuç, örneğin kaplama fiyatlandırırken üçgen uç kesiti tahmin eder. Varsayım: alınlık ucu dik üçgen olarak modellenmiştir." },
          { "kind": "h3", "text": "Örnek 12: Büyük İmalat Paneli" },
          { "kind": "p", "text": "Dik üçgen bir imalat panelinin kenarları [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]] olsun. Yarı çevre: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. İç yarıçap: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. Alan: [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]]. Bu yöntem, panelin düz üçgen alanını doğrudan çember ve sınır ölçümlerinden hesaplar. Varsayım: panel kenarları düzdür ve dik açıyla buluşur." },
          { "kind": "h3", "text": "Pratik Örneklerin Karşılaştırması" }
        ],
        "table": {
          "headers": ["Pratik uygulama", "a Dik Kenarı", "b Dik Kenarı", "c Hipotenüsü", "r İç Yarıçapı", "s Yarı Çevresi", "Hesaplanan alan", "Ölçü birimi"],
          "rows": [
            ["Cam pencere", "3", "4", "5", "1", "6", "6", "m²"],
            ["Çelik konsol", "5", "12", "13", "2", "15", "30", "cm²"],
            ["Çatı desteği", "8", "15", "17", "3", "20", "60", "ft²"],
            ["Bahçe bölümü", "7", "24", "25", "3", "28", "84", "m²"],
            ["Rampa profili", "9", "12", "15", "3", "18", "54", "m²"],
            ["Kontrplak şablon", "12", "16", "20", "4", "24", "96", "cm²"],
            ["Tabela paneli", "20", "21", "29", "6", "35", "210", "cm²"],
            ["Ölçüm kesiti", "9", "40", "41", "4", "45", "180", "m²"],
            ["Kumaş yelken", "15", "20", "25", "5", "30", "150", "ft²"],
            ["Endüstriyel panel", "11", "60", "61", "5", "66", "330", "m²"],
            ["Depo çatı ucu", "13", "84", "85", "6", "91", "546", "ft²"],
            ["İmalat paneli", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "İç Yarıçap Formülü Neden Dik Kenar Formülüyle Aynı Alanı Verir?",
        "blocks": [
          { "kind": "p", "text": "İki farklı formül, bir üçgen, bir alan. [[K=rs]] ile standart dik üçgen alanı [[K=\\frac{ab}{2}]]'den başlayın; bu [[[\\boxed{rs=\\frac{ab}{2}}]]] sonucunu zorunlu kılar. İki taraf da aynı çevrelenen yüzeyi farklı geometrik bilgilerle ölçer: biri iç teğet çemberi ve sınırı okur, diğeri birbirine dik iki dik kenarı okur." },
          { "kind": "h3", "text": "3-4-5 Üçgeniyle Sayısal Karşılaştırma" },
          { "kind": "p", "text": "İç yarıçap yöntemi: [[r=1]], [[s=6]], yani [[K=1\\times6=6]]. Dik kenar yöntemi: [[K=\\frac{3\\times4}{2}=6]]. Cevaplar uyuşur; çünkü iç yarıçap ve yarı çevre, dik kenarlarla aynı kenar bilgisini kodlar: [[r=\\frac{a+b-c}{2}]] ve [[s=\\frac{a+b+c}{2}]], [[a]], [[b]] ve [[c]]'den kurulur; bu yüzden çarpımları, dik kenarların anlattığı alanı yeniden kurmak zorundadır. Buradaki uyum tesadüf değil, cebirdir." },
          { "kind": "h3", "text": "İç Yarıçap Yöntemi Ne Zaman Daha Kullanışlıdır?" },
          { "kind": "p", "text": "r ve s zaten elinizdeyken iç yarıçap yöntemi kazanır. İç teğet çemberlerle ilgili geometri problemleri iç yarıçapı doğrudan verir. Alanı çember ölçümleriyle ifade etmesi gereken bir ispat [[K=rs]]'i doğal biçimde kullanır. Yarışma problemleri genellikle yarı çevreyi kurulumun bir parçası olarak verir. Ve bir çapraz denetim olarak, alanı iki bağımsız yoldan hesaplamak, tek bir yöntemin gizleyeceği aritmetik kaymaları yakalar. Her durumda mesele girdi kolaylığıdır: sahip olduğunuz ölçümlerden başlayın." },
          { "kind": "h3", "text": "Dik Kenar Formülü Ne Zaman Daha Basittir?" },
          { "kind": "p", "text": "Birbirine dik iki dik kenar zaten biliniyorsa [[K=\\frac{ab}{2}]] genellikle daha doğrudandır: bir çarpma, bir yarıya indirme; hesaplanacak ara r ya da s yok. Önce iç yarıçapı ve yarı çevreyi türetip sonra çarpmak, hiçbir şeyi değiştirmeyen iki adım ekler. Yarı çevre yöntemi her zaman en kolay yol değildir; iç teğet çemberin ya da sınırın doğal başlangıç noktası olduğu durumlarda en iyi yoldur; dik kenarlar gözünüzün önündeyken ise bir dolambaçtır." }
        ]
      },
      "sec-heron": {
        "h2": "Heron Formülü ile Alan = İç Yarıçap × Yarı Çevre Arasındaki Fark Nedir?",
        "blocks": [
          { "kind": "p", "text": "Heron formülü alanı üç kenar uzunluğundan hesaplar: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Yarı çevreyi ister ama iç yarıçapı istemez ve geçerli her üçgende işler. İç yarıçap formülü [[[\\boxed{K=rs}]]] ise üç kenar yerine iç yarıçapı ve yarı çevreyi ister. Fark geometride değil, girdilerdedir: ikisi de aynı çevrelenen alanı döndürür; çünkü iki formül [[r=\\frac{K}{s}]] üzerinden birbirine bağlıdır. Üç kenar da biliniyor ve çember verisi yoksa Heron formülü doğal seçimdir; iç teğet çember resmin bir parçasıysa iç yarıçap formülü doğaldır." },
          { "kind": "h3", "text": "İşlenmiş Karşılaştırma" },
          { "kind": "p", "text": "3-4-5 üçgenini kullanın. Heron formülü: [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]. İç yarıçap formülü: [[K=1\\times6]], [[[\\boxed{K=6}]]]. Cevaplar eşleşir; çünkü Heron ifadesi, aynı üç küçük üçgen bölünmesiyle [[r\\times s]]'e sadeleşir: r ve s aynı üçgenden geldiği sürece [[s(s-a)(s-b)(s-c)]]'nin karekökü [[rs]]'ye eşittir. Yine de iki aracı karıştırmayın: Heron formülü iç yarıçapı asla istemez ve [[r=\\frac{a+b-c}{2}]] iç yarıçap kısa yolu yalnızca dik üçgenlere aittir." }
        ]
      },
      "sec-consistency": {
        "h2": "İç Yarıçap ve Yarı Çevrenin Geçerli Olduğu Nasıl Denetlenir",
        "blocks": [
          { "kind": "p", "text": "Hesaplayıcı iki değeri kabul edip çarpar ama çarpım, ancak iki değer de aynı üçgeni tanımladığında bir dik üçgenin alanıdır. Aşağıdaki denetimler geçerli girdileri sahtelerinden ayırır." },
          { "kind": "h3", "text": "Temel Girdi Koşulları" },
          { "kind": "p", "text": "İki girdi de pozitif olmalıdır: [[r>0]] ve [[s>0]]. Bir uzunluk sıfır ya da negatif olamaz; bu yüzden pozitif olmayan bir girişin geometrik anlamı yoktur. Sıfır, üçgeni alansız bir çizgiye indirger; negatif bir değer hiçbir şeyi anlatmaz. Bu testi geçemeyen her girdiyi yeniden ölçün ya da yeniden türetin." },
          { "kind": "h3", "text": "Yarı Çevre İç Yarıçaptan Büyük Olmalıdır" },
          { "kind": "p", "text": "Geçerli bir üçgende yarı çevre, iç yarıçaptan kat kat büyüktür. [[K=rs]] ve pozitif dik kenarlarla [[K=\\frac{ab}{2}]]'den, ayrıca iç teğet çemberin üçgenin içine sığma geometrisinden, [[s]] her zaman [[r]]'den açıkça büyüktür: 3-4-5 üçgeninde 6'ya karşı 1; 5-12-13 üçgeninde 15'e karşı 2. Değerlerin ayrıca geçerli bir üç kenar kümesine karşılık gelmesi gerekir; bu yüzden bu karşılaştırma hızlı bir süzgeçtir, bütün doğrulama değil. Yarı çevreden büyük bir iç yarıçap hiçbir üçgenden gelemez." },
          { "kind": "h3", "text": "İleri Düzey Dik Üçgen Tutarlılık Denetimi" },
          { "kind": "p", "text": "Daha sıkı bir test için dik üçgen [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]] koşulunu sağlamalıdır, yaklaşık olarak [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]]. Fikir basittir: verilen bir r ve s için iki dik kenar, [[a+b=s+r]] ve [[ab=2rs]]'den kurulan bir ikinci dereceden denklemin pozitif çözümleri olmalıdır ve bu denklemin gerçek çözümleri ancak diskriminantı negatif olmadığında vardır. Diskriminant koşulu tam olarak bu sınıra sadeleşir. 3-4-5'i denetleyin: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], geçerli. Bu, dikkatli çalışma için isteğe bağlı bir inceliktir; yeni başlayan hesabın zorunlu bir parçası değildir." },
          { "kind": "h3", "text": "Girdiler Tutarsız Olduğunda Ne Olur?" },
          { "kind": "p", "text": "İki pozitif sayıyı çarpmak her zaman sayısal bir sonuç üretir ama bu, onların aynı dik üçgenin iç yarıçapı ve yarı çevresi olduğunu kanıtlamaz. Bir üçgenden alınan r ile başka bir üçgenden alınan s'nin çarpımı, aritmetik ne kadar düzgün görünürse görünsün, geometrik anlamı olmayan bir ürün verir. Hesaplayıcı uygulamasının doğrulama davranışı test edilmedikçe, ilişkiyi denetlediğini varsaymayın: yukarıdaki denetimleri kendiniz yapın, kenarlar biliniyorsa r ve s'yi kenarlardan yeniden hesaplayın ve alanı dik kenar formülüyle çapraz denetleyin." }
        ]
      },
      "sec-units": {
        "h2": "Ölçü Birimleri İç Yarıçap ve Yarı Çevre Hesaplarını Nasıl Etkiler",
        "blocks": [
          { "kind": "p", "text": "İç yarıçap ve yarı çevre ikisi de uzunluktur; bu yüzden diğer her uzunluk ölçümüyle aynı birim kurallarını izlerler. Cevaptaki birim kare, iki uzunluk biriminin çarpımından gelir; bu da tutarlı birimleri oyunun tamamı yapar." },
          { "kind": "h3", "text": "İki Girdi Neden Uyumlu Birimler Kullanmalıdır?" },
          { "kind": "p", "text": "[[K=r\\times s]] çarpması bir uzunluğu bir uzunlukla çarpar. r santimetre, s metre ise çarpım iki ölçeği karıştırır ve sayının temiz bir anlamı olmaz. Önce çevirin ki iki girdi tek bir birimi paylaşsın: metre, santimetre, milimetre, fit, inç ya da yarda; ama ikisi için de aynı birim. Hesaplayıcının birim seçicileri bu yüzden vardır: sayıları girmeden önce ayarlayın." },
          { "kind": "h3", "text": "İşlenmiş Birim Dönüşüm Örneği" },
          { "kind": "p", "text": "[[r=10\\text{ cm}]] ve [[s=1\\text{ m}]] verilsin. Yarı çevreyi çevirin: [[1\\text{ m}=100\\text{ cm}]]. Sonra [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]]. Alternatif olarak iç yarıçapı çevirin: [[10\\text{ cm}=0.1\\text{ m}]], sonra [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]]. İki cevap da aynı alanı anlatır; çünkü [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. Önce çevirin, sonra çarpın; iki birim yolu da doğru yere varır." },
          { "kind": "h3", "text": "Sonuç Neden Birim Kare Cinsinden İfade Edilir?" },
          { "kind": "p", "text": "Alan, yüzeyi kaplayan birim kareleri sayar: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. Birim her zaman uzunluk biriminin karesidir; çünkü iki uzunluğun çarpımı karelerin sayısıdır. Alanı 1000 cm gibi düz bir uzunluk olarak bildirmek bir kategori hatasıdır: 1000 cm bir uzunluktur, 1000 cm² ise bir yüzeydir." },
          { "kind": "h3", "text": "Ondalıklı Değerlerle Çalışma" },
          { "kind": "p", "text": "Formül ondalıkları değiştirmeden işler. [[r=2.5]] ve [[s=8.4]] verilsin: [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]]. Tam sayılar, ondalıklar ve hassas atölye ölçüleri aynı çarpmadan geçer. Hesap boyunca tam duyarlığı koruyun ve yalnızca nihai cevabı ölçümlerin haklı çıkardığı doğruluğa yuvarlayın." }
        ]
      },
      "sec-mistakes": {
        "h2": "Yarı Çevreden Dik Üçgen Alanı Hesaplarken Yaygın Hatalar",
        "blocks": [
          { "kind": "p", "text": "Bu konudaki yanlış cevapların neredeyse tamamı kötü aritmetikten değil, karışmış bir etiketten kaynaklanır. Aşağıdaki on altı hata tekrar tekrar görünenlerdir; her birinin nedeni ve çözümüyle birlikte." },
          { "kind": "h3", "text": "1. Yarı Çevreyi Tam Çevreyle Karıştırma" },
          { "kind": "p", "text": "[[P=12]]'yi [[s=6]]'nın ait olduğu yere girmek cevabı iki katına çıkarır: 6 yerine [[1\\times12=12]]. Hata, günlük dilin çevre demesi ama formülün onun yarısını istemesinden olur. Çözüm: girmeden önce sınır toplamını her zaman yarıya indirin ve girilen s'nin çevreden küçük olduğunu denetleyin." },
          { "kind": "h3", "text": "2. İç Yarıçap Yerine Çevrel Yarıçap Kullanma" },
          { "kind": "p", "text": "3-4-5 üçgeninin çevrel yarıçapı [[R=\\frac{5}{2}=2.5]]'tir; onu kullanmak [[2.5\\times6=15]] verir, gerçek alanın neredeyse üç katı. Hata, iki çemberin de yarıçap sözcüğünü paylaşmasından gelir. Çözüm: yarıçapın, köşelerden geçen çemberin değil, üçgenin içindeki ve üç kenara da değen çemberin yarıçapı olduğunu doğrulayın." },
          { "kind": "h3", "text": "3. Yarı Çevreyi Doğru Hesaplamayı Unutma" },
          { "kind": "p", "text": "Yalnızca iki kenarı toplamak ya da toplamadan önce her kenarı ikiye bölmek yanlış bir s üretir. 3-4-5 için 3 + 4'ü toplayıp bölmek 3.5 verir ve [[1\\times3.5=3.5]] anlamsızdır. Çözüm: önce üç kenarı da toplayın, sonra bir kez bölün: [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. Nihai Sonucu Bir Kez Daha İkiye Bölme" },
          { "kind": "p", "text": "[[K=1\\times6=6]]'dan sonra fazladan bir yarıya indirme 3 verir. Alışkanlık, bölmenin açıkça yazıldığı dik kenar formülünden gelir. Çözüm: yarıların yarı çevrenin içine çoktan gömüldüğünü hatırlayın; [[K=r\\times s]] tamamdır." },
          { "kind": "h3", "text": "5. Yanlış Dik Üçgen İç Yarıçap Formülü Kullanma" },
          { "kind": "p", "text": "[[r=\\frac{c-a-b}{2}]] ya da [[r=\\frac{a+b}{2}]] gibi tahminler yanlış bir yarıçap üretir. 3-4-5 için [[\\frac{5-3-4}{2}=-1]] bir uzunluk bile değildir. Çözüm: a ve b dik kenarlar, c hipotenüs olacak biçimde, tam bu düzenlemeyle [[r=\\frac{a+b-c}{2}]] kullanın." },
          { "kind": "h3", "text": "6. Dik Üçgen İç Yarıçap Kısa Yolunu Sıradan Bir Üçgene Uygulama" },
          { "kind": "p", "text": "Kısa yol dik açıya dayandığından, genel bir üçgende geometrik anlamı olmayan bir sayı hesaplar. Çözüm: dik olmayan üçgenlerde iç yarıçapı [[r=\\frac{K}{s}]]'den ya da bilinen ölçümlere uygun bir formülden bulun; asla [[r=\\frac{a+b-c}{2}]]'den değil." },
          { "kind": "h3", "text": "7. İç Yarıçapı ve Yarı Çevreyi Farklı Üçgenlerden Girme" },
          { "kind": "p", "text": "3-4-5 üçgeninden r = 1 ile 5-12-13 üçgeninden s = 15'i almak 15 verir; bu çarpım gerçek hiçbir üçgeni anlatmaz. Hata, değerler farklı işlenmiş örneklerden ya da farklı çizimlerden kopyalandığında olur. Çözüm: çarpmadan önce iki girdiyi de aynı üçgenden türetin ya da ölçün." },
          { "kind": "h3", "text": "8. Santimetre ile Metreyi Karıştırma" },
          { "kind": "p", "text": "r = 10 cm ile s = 1 m'yi çevirmeden çarpmak, temiz hiçbir anlamı olmayan 10 verir. Çözüm: önce tek bir birime çevirin: [[1\\text{ m}=100\\text{ cm}]], sonra [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. Sonucu Doğrusal Birimlerle Bildirme" },
          { "kind": "p", "text": "6 m²'lik bir alan 6 m değildir. Hata genellikle girdi birimini karesini almadan kopyalamaktan gelir. Çözüm: sayının yanına her seferinde kareli birimi yazın: m², cm², ft²." },
          { "kind": "h3", "text": "10. Sıfır ya da Negatif Ölçü Girme" },
          { "kind": "p", "text": "Uzunluklar pozitiftir. Sıfır üçgeni alansız bir çizgiye indirger, negatif uzunlukların ise burada geometrik anlamı yoktur. Çözüm: girdiyi yeniden ölçün ya da yeniden türetin; hesaplamadan önce pozitif olmayan değerleri reddedin." },
          { "kind": "h3", "text": "11. İç Merkezi Çevrel Merkezle Karıştırma" },
          { "kind": "p", "text": "İç merkez açıortayların kesişim noktasıdır; çevrel merkez kenarların orta dikmelerinin kesişim noktasıdır. Dik üçgende çevrel merkez hipotenüsün orta noktasında oturur; bambaşka bir noktadır. Bunları karıştırmak yanlış yarıçapı ölçmeye götürür. Çözüm: iç merkez [[I]], köşelere değil kenarlara eşit uzaklıkta, üçgenin içindedir." },
          { "kind": "h3", "text": "12. İç Teğet Çemberin Yalnızca İki Kenara Değdiğini Sanma" },
          { "kind": "p", "text": "Bir köşeye sıkıştırılmış çember iki kenara değer ama o iç teğet çember değildir. İç teğet çember üçüne de değer ve alan ispatı üç teğet noktasının tamamına ihtiyaç duyar. Çözüm: bir yarıçapı iç yarıçap saymadan önce kenar başına bir tane olmak üzere üç temas noktasını doğrulayın." },
          { "kind": "h3", "text": "13. Yarıçapın Her Teğet Kenarla Dik Kesiştiğini Unutma" },
          { "kind": "p", "text": "İspattaki ortak yükseklik argümanı [[r\\perp a]], [[r\\perp b]], [[r\\perp c]]'ye dayanır. İç merkezden bir kenara çizilen eğik bir parça r'den uzundur ve yükseklik olarak görev yapamaz. Çözüm: iç yarıçapı her zaman kenara dik doğrultuda, asla köşegen boyunca ölçün." },
          { "kind": "h3", "text": "14. İç Yarıçapı Çapla Karıştırma" },
          { "kind": "p", "text": "İç teğet çemberin tam genişliğini r diye girmek yarıçapı iki katına çıkarır ve alanı iki katına çıkarır. 3-4-5 üçgeninde 1 yerine 2 girmek [[2\\times6=12]] verir. Çözüm: iç yarıçap merkezden bir kenara uzanır; çemberin tam genişliğinin yarısıdır." },
          { "kind": "h3", "text": "15. Heron Formülünü Yanlış Kullanma" },
          { "kind": "p", "text": "Yaygın kaymalar arasında karekökü unutmak, [[s(s+a)(s+b)(s+c)]] gibi artı işaretleri yazmak ya da formüle tam çevreyi sokmak vardır. 3-4-5 için kökü atlamak 6 yerine 36 verir. Çözüm: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]; yarı çevre, eksi işaretleri ve kök hepsi yerinde." },
          { "kind": "h3", "text": "16. Sayısal Bir Sonucun Girdilerin Geometrik Tutarlılığını Kendiliğinden Kanıtladığını Sanma" },
          { "kind": "p", "text": "Herhangi iki pozitif sayı çarpılır; bu yüzden hesaplayıcı her zaman bir şey döndürür. O şey, ancak r ve s gerçekten bir üçgene ait olduğunda bir dik üçgenin alanıdır. Çözüm: tutarlılık denetimlerini yapın, mümkünse r ve s'yi kenarlardan yeniden hesaplayın ve sayıya güvenmeden önce dik kenar formülüyle çapraz denetleyin." },
          { "kind": "h3", "text": "Yanlışa Karşı Doğru: Somut Bir Örnek" },
          { "kind": "p", "text": "[[r=1]], [[s=6]] kullanın. Doğru: [[K=1\\times6=6]]. Yanlış biçimde bir kez daha ikiye bölmek: [[K=\\frac{1\\times6}{2}=3]]; yanlış, çünkü yarıya indirme yarı çevrenin içinde çoktan var. Yanlış biçimde yarı çevre 6 yerine tam çevre 12'yi girmek: [[K=1\\times12=12]], gerçek alanın iki katı. Üç durumda da aritmetik kendinden emin görünür; onları yalnızca geometri ayırt eder." }
        ]
      },
      "sec-verify": {
        "h2": "Dik Üçgen Alanınızın Doğru Olduğu Nasıl Denetlenir",
        "blocks": [
          { "kind": "p", "text": "Altı bağımsız denetim; hepsi 3-4-5 üçgeninde gösterildi ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]]). Farklı yollar arası uyum, bir cevabın doğru olduğunun en güçlü kanıtıdır; ödevde de pratik ölçümde de." },
          { "kind": "h3", "text": "Yöntem 1: Ana Formülü Denetleyin" },
          { "kind": "p", "text": "[[K=r\\times s]]'i yeniden çalıştırın: [[K=1\\times6=6]]. Sayıları yeniden girerek ikinci bir geçiş yapmak yazım ve tuşlama hatalarını yakalar." },
          { "kind": "h3", "text": "Yöntem 2: Yarı Çevreyi Üç Kenardan Hesaplayın" },
          { "kind": "p", "text": "[[s=\\frac{a+b+c}{2}]]'yi kenarlardan yeniden hesaplayın: [[s=\\frac{3+4+5}{2}=6]]. Yeniden hesaplanan s girilenden farklıysa girdi yanlıştır ve çarpım yeniden yapılmalıdır." },
          { "kind": "h3", "text": "Yöntem 3: İç Yarıçapı Dik Üçgenden Hesaplayın" },
          { "kind": "p", "text": "[[r=\\frac{a+b-c}{2}]]'yi yeniden hesaplayın: [[r=\\frac{3+4-5}{2}=1]]. Girilen r ile uyumsuzluk, yarıçapın farklı bir üçgenden ya da yanlış uygulanmış bir formülden geldiği anlamına gelir." },
          { "kind": "h3", "text": "Yöntem 4: Standart Dik Kenar Formülüyle Doğrulayın" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]]'yi hesaplayın: [[K=\\frac{3\\times4}{2}=6]]. Bu yol tamamen farklı girdiler kullanır; bu yüzden [[rs]] ile uyum hem girdileri hem aritmetiği doğrular." },
          { "kind": "h3", "text": "Yöntem 5: Heron Formülüyle Doğrulayın" },
          { "kind": "p", "text": "[[K=\\sqrt{s(s-a)(s-b)(s-c)}]]'yi hesaplayın: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Heron formülü kenarları ve yarı çevreyi birlikte çalıştırır; diğer denetimlerin kaçırabileceği kenar etiketleme hatalarını yakalar." },
          { "kind": "h3", "text": "Yöntem 6: Pisagor Teoremini Denetleyin" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]]'yi doğrulayın: [[3^2+4^2=9+16=25=5^2]]. Bu, diğer her hesabın arkasındaki kenar tanımlamasını denetler; yanlış bir hipotenüs, bir kenarın yanlış etiketlendiği ve r, s ile K'nin tamamının yeniden kurulması gerektiği anlamına gelir." }
        ]
      },
      "sec-applications": {
        "h2": "İç Yarıçap ve Yarı Çevre Formülünün Pratik Uygulamaları",
        "blocks": [
          { "kind": "p", "text": "Aynı iki girdili örüntü, üçgen bir panelin ya da kesitin ölçülmesi gereken ve iç teğet çember verisinin uygun başlangıç noktası olduğu her yerde karşımıza çıkar. Bir camcı pencereyi kenar uzunluklarından boyutlandırır; bir imalatçı konsol boşluğunun dik kenarlarını okur; bir haritacı arsa köşesini üç düz kenara indirger. Bu kenarlardan iç yarıçap ve yarı çevre gelir ve tek bir çarpma alanı adlandırır. Aşağıdaki dört panel örüntüyü farklı ölçeklerde gösterir: bir cam pencere (6 m²), bir çatı desteği (60 ft²), bir bahçe bölümü (84 m²) ve bir çelik plaka (30 cm²); her biri iç yarıçapı, yarı çevresi ve ortaya çıkan alanıyla etiketlenmiştir." }
        ],
        "imgAlt": "Dört panel: cam pencere 6 m2, çatı desteği 60 ft2, bahçe bölümü 84 m2, çelik plaka 30 cm2",
        "figcaption": "Dört gerçek kullanım: bir cam pencere, bir çatı desteği, bir bahçe bölümü ve bir çelik plaka."
      },
      "sec-conclusion": {
        "h2": "İki Ölçüm, Bir Çarpım",
        "blocks": [
          { "kind": "p", "text": "Bir iç yarıçap ve bir yarı çevre yeterlidir. Çarpın ve çevrelenen yüzey adlandırılır. Üç küçük üçgen ispatı, çarpmadan sonra neden bölme gelmediğini gösterir; teğet-parça argümanı, dik üçgenin neden iç yarıçap kısa yolunu kazandığını gösterir; dik kenar formülü ile Heron formülü ise her cevabı denetlemeye hazır bekler." },
          { "kind": "p", "text": "Çalışma alışkanlığı basittir: iki girdinin de aynı üçgeni tanımladığını doğrulayın, birimleri eşleştirin, ondalıkları sona kadar yuvarlamadan tutun ve ikinci bir yöntemle doğrulayın. Bu alışkanlıklarla [[K=r\\times s]], geometrideki en güvenilir alan hesaplarından biridir." }
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
        "blocks": []
      }
    }
  },
  "sv": {
    "faqs": [
      {
        "question": "Vilken formel ger arean av en rätvinklig triangel med inradie och semiperimeter?",
        "answer": "K = r × s, där r är inradien (den inskrivna cirkelns radie) och s är semiperimetern (halva omkretsen). Multiplicera de två så är produkten arean, utan något divisionssteg. För r = 1 och s = 6 blir K = 1 × 6 = 6 areaenheter. Båda indata måste beskriva samma triangel."
      },
      {
        "question": "Vad är en inradie?",
        "answer": "Inradien är radien i den inskrivna cirkeln, den cirkel som passar exakt inuti en triangel och tangerar alla tre sidorna. Den är lika med det vinkelräta avståndet från incentrum, där de tre bisektriserna möts, till valfri sida. För en rätvinklig triangel med kateterna a och b och hypotenusan c gäller genvägen r = (a + b - c) / 2."
      },
      {
        "question": "Vad är skillnaden mellan inradie och omradie?",
        "answer": "Inradien tillhör cirkeln inuti triangeln, som tangerar alla tre sidorna; omradien tillhör cirkeln som går genom alla tre hörnen. De mäter olika cirklar, så värdena skiljer sig. För en rätvinklig triangel är omradien R = c/2, exakt halva hypotenusan, medan inradien är (a + b - c)/2."
      },
      {
        "question": "Hur beräknar jag semiperimetern i en rätvinklig triangel?",
        "answer": "Addera de tre sidorna och dividera med två: s = (a + b + c) / 2. För en 3-4-5-triangel blir s = (3 + 4 + 5) / 2 = 6. Semiperimetern är halva den fulla omkretsen, så om du av misstag matar in hela omkretsen fördubblas arean i K = r × s."
      },
      {
        "question": "Hur hittar jag inradien från tre sidlängder?",
        "answer": "För en rätvinklig triangel, använd genvägen r = (a + b - c) / 2, där a och b är kateterna och c är hypotenusan. Med sidorna 5, 12, 13: r = (5 + 12 - 13) / 2 = 2. Genvägen gäller bara för rätvinkliga trianglar; andra trianglar behöver det allmänna sambandet r = K / s."
      },
      {
        "question": "Varför är arean lika med inradien multiplicerad med semiperimetern?",
        "answer": "Om du förbinder incentrum med de tre hörnen delas triangeln i tre mindre trianglar, var och en med en sida som bas och r som höjd. Deras areor är ar/2, br/2 och cr/2. Summan blir r(a + b + c)/2, och eftersom s = (a + b + c)/2 är totalen r × s."
      },
      {
        "question": "Fungerar formeln för alla trianglar?",
        "answer": "Ja. Varje icke-degenererad triangel har en inskriven cirkel och ett incentrum, så uppdelningen i tre trianglar gäller för rätvinkliga, spetsvinkliga och trubbvinkliga trianglar likadant. Den rätvinkliga triangeln är bara enklare eftersom dess inradie kan hittas från sidorna med r = (a + b - c) / 2. Den allmänna inradien kommer fortfarande från r = K / s."
      },
      {
        "question": "Är semiperimetern samma sak som omkretsen?",
        "answer": "Nej. Semiperimetern är exakt halva omkretsen: s = P/2. För en 3-4-5-triangel är omkretsen 12 och semiperimetern 6. Att mata in hela omkretsen i K = r × s ger 1 × 12 = 12, dubbelt mot den korrekta arean 6. Halvera omkretsen före multiplikationen."
      },
      {
        "question": "Behöver jag dividera slutsvaret med två?",
        "answer": "Nej. Formeln K = r × s tar redan hand om varje division: halvorna från de tre mindre trianglarna är absorberade i semiperimetern. Att dividera igen efter multiplikationen är det vanligaste misstaget. Med r = 1 och s = 6 är den korrekta arean 6, medan (1 × 6) / 2 = 3 är fel."
      },
      {
        "question": "Vad är sambandet mellan Herons formel och inradieformeln?",
        "answer": "Båda beräknar samma area men utgår från olika indata. Herons formel K = sqrt(s(s - a)(s - b)(s - c)) behöver alla tre sidorna; K = r × s behöver inradien och semiperimetern i stället. För en 3-4-5-triangel ger båda 6, vilket gör den ena formeln till en stark kontroll av den andra."
      },
      {
        "question": "Kan jag använda decimaltal för inradie och semiperimeter?",
        "answer": "Ja. Formeln hanterar decimaltal precis som heltal. Med r = 2,5 och s = 8,4 blir K = 2.5 × 8.4 = 21 areaenheter. Behåll full precision genom multiplikationen och avrunda bara slutsvaret, i linje med mätningarnas noggrannhet."
      },
      {
        "question": "Hur kan jag kontrollera att min inradie och semiperimeter stämmer?",
        "answer": "Kontrollera att båda är positiva och att s är tydligt större än r. Om sidorna är kända, räkna om s = (a + b + c)/2 och r = (a + b - c)/2 och korskontrollera sedan arean med K = ab/2 och Herons formel. Överensstämmelse mellan metoderna är starka bevis. Värden från olika trianglar ger ett tal som inte är den verkliga arean."
      }
    ],
    "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
    "relatedItems": [
      "Kalkylator för rätvinklig triangels area från kateter",
      "Kalkylator för rätvinklig triangels semiperimeter",
      "Kalkylator för rätvinklig triangels area från höjd",
      "Kalkylator för rätvinklig triangels area från vinkel",
      "Kalkylator för rätvinklig triangels omkrets",
      "Kalkylator för rätvinklig triangels area"
    ],
    "relatedIntro": "Olika mätningar kräver olika kalkylatorer.",
    "faqHeading": "Vanliga frågor",
    "tocHeading": "I den här guiden",
    "tocItems": {
      "sec-intro": "Så beräknar du arean av en rätvinklig triangel med dess inradie och semiperimeter",
      "sec-right-triangle": "Vad är en rätvinklig triangel?",
      "sec-incircle": "Förstå den inskrivna cirkeln i en rätvinklig triangel",
      "sec-semiperimeter": "Förstå en triangels semiperimeter",
      "sec-formula": "Varför är en triangels area lika med inradien gånger semiperimetern?",
      "sec-inradius": "Så beräknar du inradien i en rätvinklig triangel",
      "sec-howto": "Så använder du kalkylatorn för rätvinklig triangels area från semiperimeter",
      "sec-examples": "Steg-för-steg-exempel på rätvinklig triangels area med inradie och semiperimeter",
      "sec-practical": "Verkliga tillämpningar av rätvinklig triangels area från inradie och semiperimeter",
      "sec-legs-comparison": "Varför ger inradieformeln samma area som katetformeln?",
      "sec-heron": "Vad är skillnaden mellan Herons formel och area = inradie × semiperimeter?",
      "sec-consistency": "Så kontrollerar du att inradien och semiperimetern är giltiga",
      "sec-units": "Hur mätenheter påverkar beräkningar med inradie och semiperimeter",
      "sec-mistakes": "Vanliga misstag när man beräknar rätvinklig triangels area från semiperimeter",
      "sec-verify": "Så kontrollerar du att din rätvinkliga triangels area stämmer",
      "sec-applications": "Praktiska tillämpningar av formeln med inradie och semiperimeter",
      "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "sec-faq": "Vanliga frågor",
      "sec-conclusion": "Två mätningar, en produkt"
    },
    "sections": {
      "sec-intro": {
        "h2": "Så beräknar du arean av en rätvinklig triangel med dess inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Ta [[r=1]], [[s=6]]. Tillämpa [[K=r\\times s]]: [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Resultatet namnger den totala plana ytan som triangelns tre sidor omsluter: sex areaenheter. Det är exakt vad kalkylatorn för rätvinklig triangels area från semiperimeter returnerar för dessa två indata." },
          { "kind": "p", "text": "Inradien är radien i cirkeln som ligger instoppad inuti triangeln och tangerar alla tre sidorna. Semiperimetern är halva längden av randen: summan av de tre sidorna dividerad med två. Två mätningar räcker, eftersom inradien fungerar som en gemensam vinkelrät höjd för tre mindre trianglar byggda från incentrum, medan semiperimetern samlar deras baser i en enda faktor." },
          { "kind": "p", "text": "Resonemanget fungerar för varje triangel, eftersom var och en äger en inskriven cirkel. Den rätvinkliga triangeln lägger till en bonus: dess inradie följer från de tre sidorna genom en kort formel, så r och s är ofta redan kända. Metoden glänser i problem där den inskrivna cirkeln eller semiperimetern är given, eftersom ingen katet eller vinkel behöver mätas." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Vad är en rätvinklig triangel?",
        "blocks": [
          { "kind": "p", "text": "Innan den inskrivna cirkeln kommer in i bilden måste själva triangeln märkas upp felfritt. Symbolerna nedan förblir fasta genom hela guiden, och kalkylatorn använder samma namn." },
          { "kind": "h3", "text": "Definition av en rätvinklig triangel" },
          { "kind": "p", "text": "En rätvinklig triangel är en tresidig polygon som innehåller exakt en inre vinkel på 90 grader. Den har tre hörn, tre sidor, två spetsiga vinklar och en rät vinkel som vanligen markeras med en liten kvadrat. De två sidor som bildar den räta vinkeln är kateterna; sidan mittemot är hypotenusan. Eftersom [[C=90^\\circ]] följer [[[\\boxed{A+B=90^\\circ}]]]: de två spetsiga vinklarna är komplementvinklar, så att känna den ena bestämmer den andra." },
          { "kind": "h3", "text": "Förstå de två kateterna" },
          { "kind": "p", "text": "Katet [[a]] ligger mittemot vinkel [[A]]; katet [[b]] ligger mittemot vinkel [[B]]. De två kateterna möts i det rätvinkliga hörnet och står vinkelrätt mot varandra. De bidrar direkt till arean, eftersom varje katet kan fungera som bas medan den andra fungerar som den vinkelräta höjden. För den här sidan matar de också inradien, eftersom genvägen [[r=\\frac{a+b-c}{2}]] är byggd av båda kateterna och hypotenusan." },
          { "kind": "h3", "text": "Förstå hypotenusan" },
          { "kind": "p", "text": "Hypotenusan är sidan mittemot 90-gradersvinkeln, alltid triangelns längsta sida. Den bildar aldrig den räta vinkeln; den sträcker sig tvärs över från den. I kateternas areaformel spelar den ingen roll, men här spelar den roll: hypotenusan ingår både i semiperimetern [[s=\\frac{a+b+c}{2}]] och i inradiegenvägen [[r=\\frac{a+b-c}{2}]]. Om båda kateterna är kända återvinner Pythagoras sats den genom [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Vad skiljer den här triangeln från andra trianglar?" },
          { "kind": "p", "text": "Det 90-gradiga hörnet är hela historien. Det gör kateterna vinkelräta utan någon konstruktion, vilket förenklar standardareaformeln, och det gör den inskrivna cirkelns tangentsegment nära den räta vinkeln lika med själva inradien, vilket förenklar inradieformeln. Andra trianglar uppfyller fortfarande [[K=r\\times s]], men att hitta deras inradie kräver vanligen arean först. Den rätvinkliga triangeln är det enda fallet där inradien faller ut direkt ur sidlängderna." }
        ]
      },
      "sec-incircle": {
        "h2": "Förstå den inskrivna cirkeln i en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Inradien blir begriplig först när den inskrivna cirkeln är tydligt avbildad. Det här avsnittet bygger idén från själva cirkeln ner till tangentpunkterna där radien möter varje sida." },
          { "kind": "h3", "text": "Definition av en inskriven cirkel" },
          { "kind": "p", "text": "En inskriven cirkel är en cirkel placerad inuti en triangel så att den tangerar alla tre sidorna. Den ligger i det inre, tangerar varje sida i exakt en punkt, och den kan inte korsa en sida eftersom tangeringen håller den på plats. Varje icke-degenererad triangel äger exakt en inskriven cirkel: krymp en cirkel inuti hörnområdena så finns det en enda största storlek som kysser alla tre sidorna. De tre tangentpunkterna, en per sida, är de platser där inradien senare ska mätas." },
          { "kind": "h3", "text": "Vad är incentrum?" },
          { "kind": "p", "text": "Incentrum, märkt [[I]], är den punkt där de tre inre bisektriserna möts. Varje bisektris delar ett hörns vinkel i två lika delar, och varje punkt på en bisektris ligger på lika vinkelrätt avstånd från de två sidor som bildar vinkeln. Skärningen av alla tre bisektriserna ligger därför på lika avstånd från alla tre sidorna, vilket är exakt varför den kan fungera som centrum i en cirkel som tangerar varje sida. Incentrum ligger inuti varje giltig triangel, aldrig på en kant eller utanför." },
          { "kind": "h3", "text": "Vad är inradien?" },
          { "kind": "p", "text": "Inradien är det vinkelräta avståndet från incentrum till valfri sida av triangeln: [[[\\boxed{r=\\text{distance from the incenter to a side}}]]]. Eftersom incentrum är lika långt från alla tre sidorna är värdet detsamma oavsett vilken sida som väljs. Det enda talet är den inskrivna cirkelns radie, längden av vart och ett av de tre korta segmenten från centrum till tangentpunkterna, och den gemensamma höjd som får areabeviset i ett senare avsnitt att fungera." },
          { "kind": "h3", "text": "Förstå tangentrelationen" },
          { "kind": "p", "text": "En radie dragen till en tangentpunkt står vinkelrätt mot den sida den vidrör. Tillämpat på de tre kontaktpunkterna ger detta [[r\\perp a]], [[r\\perp b]] och [[r\\perp c]]. Varje påstående beskriver ett eget hörn av diagrammet: radien som slutar på katet a står rät mot katet a, och likadant för katet b och hypotenusan. Denna vinkelräthet är inte dekorativ; den är egenskapen som låter varje radie fungera som höjd i en av de tre mindre trianglarna i areabeviset." },
          { "kind": "h3", "text": "Skillnaden mellan inskriven och omskriven cirkel" },
          { "kind": "p", "text": "Den inskrivna cirkeln lever inuti triangeln och tangerar alla tre sidorna; den omskrivna cirkeln går genom alla tre hörnen och omsluter triangeln. Deras radier är olika mätningar och får aldrig bytas mot varandra. För en rätvinklig triangel har omradien sin egen enkla regel, [[[\\boxed{R=\\frac{c}{2}}]]], eftersom hypotenusan är en diameter i den omskrivna cirkeln: hypotenusans mittpunkt är det omskrivna centrumet. Inradien [[r]] är den mindre av de två och tillhör cirkeln inuti." }
        ],
        "imgAlt": "Rätvinklig triangel ABC med inskriven cirkel: incentrum I, tre tangentpunkter, vinkelräta radier med längden r",
        "figcaption": "Triangel ABC med sin inskrivna cirkel: tre vinkelräta radier, var och en med längden r."
      },
      "sec-semiperimeter": {
        "h2": "Förstå en triangels semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Semiperimetern ser ut som ett simpelt halvmått, men den bär ändå det mesta av areaberäkningen. Att förstå varför geometrin ständigt sträcker sig efter halva omkretsen förbereder marken för beviset." },
          { "kind": "h3", "text": "Definition av semiperimeter" },
          { "kind": "p", "text": "Semiperimetern är exakt halva den totala omkretsen: [[[\\boxed{s=\\frac{P}{2}}]]]. För en triangel blir detta [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Omkretsen [[P]] är den fulla randlängden, summan av de tre sidorna; semiperimetern är den summan halverad. De två hänger ihop genom [[P=2s]], och att blanda ihop dem är det enskilt dyraste indatamisstaget på den här sidan." },
          { "kind": "h3", "text": "Så beräknar du semiperimetern" },
          { "kind": "p", "text": "Ta [[a=3]], [[b=4]], [[c=5]]. Addera först de tre sidorna och dividera sedan en gång: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]]. Additionen måste komma före divisionen, eftersom semiperimetern halverar hela randen, inte varje sida för sig. Att addera efter att ha dividerat skulle fortfarande ge samma tal här, men formeln [[s=\\frac{a+b+c}{2}]] anger den korrekta ordningen: summera randen, halvera den sedan." },
          { "kind": "h3", "text": "Varför används semiperimeter i stället för full omkrets?" },
          { "kind": "p", "text": "Triangelns areaformler producerar ständigt halvor: varje liten triangel i beviset bidrar med en division med två, och semiperimetern absorberar dem alla på en gång. Den är den naturliga variabeln i Herons formel, i inradiesambandet [[r=\\frac{K}{s}]] och i beviset som följer. Att mata in den fulla omkretsen i stället skulle fördubbla resultatet, eftersom [[K=r\\times P=2rs]] är dubbelt mot den sanna arean. Kalkylatorn frågar efter [[s]], inte [[P]], just för att multiplikationen inte ska behöva någon ytterligare justering." },
          { "kind": "h3", "text": "Kan semiperimetern vara mindre än den längsta sidan?" },
          { "kind": "p", "text": "Nej. Triangelolikheten kräver [[a+b>c]]: de två kortare sidorna tillsammans måste överstiga den längsta sidan, annars kan triangeln inte slutas. Att addera [[c]] på båda sidor ger [[a+b+c>2c]], och halvering ger [[\\frac{a+b+c}{2}>c]], vilket är [[s>c]]. Semiperimetern överstiger alltid den längsta sidan i en giltig triangel. Om en rapporterad semiperimeter är mindre än hypotenusan kan indata inte beskriva en verklig triangel." }
        ]
      },
      "sec-formula": {
        "h2": "Varför är en triangels area lika med inradien gånger semiperimetern?",
        "blocks": [
          { "kind": "p", "text": "Börja med den allmänna regeln [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Förbind incentrum [[I]] med alla tre hörnen. Triangeln delas i tre mindre trianglar, var och en med en ursprunglig sida som bas och inradien som vinkelrät höjd. Resten av det här avsnittet beräknar varje del och adderar dem, så att [[K=r\\times s]] ses, inte bara memoreras." },
          { "kind": "h3", "text": "Arean av den första mindre triangeln" },
          { "kind": "p", "text": "Triangeln byggd på sida [[a]] har basen [[a]] och höjden [[r]], eftersom radien möter sida [[a]] vinkelrätt i sin tangentpunkt. Dess area är därför [[K_1=\\frac{ar}{2}]]. Inget om den räta vinkeln används ännu; det här steget fungerar för sidan i vilken triangel som helst." },
          { "kind": "h3", "text": "Arean av den andra mindre triangeln" },
          { "kind": "p", "text": "Triangeln byggd på sida [[b]] följer samma mönster: bas [[b]], vinkelrät höjd [[r]], area [[K_2=\\frac{br}{2}]]. Höjden är samma tal [[r]] igen, eftersom incentrum är lika långt från varje sida. Den gemensamma höjden är nyckeln till hela beviset." },
          { "kind": "h3", "text": "Arean av den tredje mindre triangeln" },
          { "kind": "p", "text": "Triangeln byggd på sida [[c]] fullbordar uppsättningen: [[K_3=\\frac{cr}{2}]]. De tre mindre trianglarna kaklar den ursprungliga triangeln exakt, utan överlapp och utan glapp: varje punkt i ursprunget ligger i en av dem, eftersom segmenten från incentrum till hörnen partitionerar det inre." },
          { "kind": "h3", "text": "Att addera de tre areorna" },
          { "kind": "p", "text": "Addera delarna: [[K=K_1+K_2+K_3]]. Substitution ger [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Bryt ut [[r]] ur summan: [[K=\\frac{r(a+b+c)}{2}]]. Kom ihåg att [[s=\\frac{a+b+c}{2}]], så den hakparenteserade bråken är exakt semiperimetern, och [[[\\boxed{K=r\\times s}]]]. Varje halvering från de tre små trianglarna har absorberats i semiperimetern, vilket är varför den slutliga multiplikationen inte behöver någon ytterligare division." },
          { "kind": "h3", "text": "Varför fungerar den här formeln för varje triangel?" },
          { "kind": "p", "text": "Varje icke-degenererad triangel har en inskriven cirkel och ett incentrum, och incentrums vinkelräta avstånd till alla tre sidorna är samma tal [[r]]. Uppdelningen i tre trianglar använder inget annat: ingen rät vinkel, inga särskilda sidlängder, ingen särskild form. Oavsett om triangeln är rätvinklig, spetsvinklig eller trubbvinklig förenar sig incentrum med hörnen och samma algebra landar på [[K=r\\times s]]. Formeln är en egenskap hos trianglar i allmänhet, vilket är varför geometriböcker bevisar den en gång och använder den överallt." },
          { "kind": "h3", "text": "Varför är den här formeln särskilt användbar för rätvinkliga trianglar?" },
          { "kind": "p", "text": "Identiteten förblir densamma, men inradien blir enkel. I en allmän triangel hittas inradien vanligen från arean själv genom [[r=\\frac{K}{s}]], vilket är cirkulärt om arean är målet. En rätvinklig triangel undkommer cirkeln: dess inradie följer direkt från sidorna via [[r=\\frac{a+b-c}{2}]], härledd i nästa avsnitt. Det gör [[K=r\\times s]] till en äkta arbetsmetod för rätvinkliga trianglar snarare än en omarrangerad definition." }
        ],
        "imgAlt": "Triangel delad från incentrum I i tre mindre trianglar med höjden r, bevisar K = r gånger s",
        "figcaption": "Tre mindre trianglar delar höjden r; deras areor summerar till r gånger s."
      },
      "sec-inradius": {
        "h2": "Så beräknar du inradien i en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "För en rätvinklig triangel med kateterna [[a]] och [[b]] och hypotenusan [[c]] är inradien [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Den här genvägen är specifik för rätvinkliga trianglar. Beviset nedan använder bara cirklars tangentsegmentegenskap, och de genomräknade exemplen visar den i aktion." },
          { "kind": "h3", "text": "Varför fungerar inradieformeln?" },
          { "kind": "p", "text": "Tangentsegment dragna från samma yttre punkt till en cirkel har lika längder. Den inskrivna cirkeln tangerar båda kateterna, och de två radierna till dessa beröringspunkter möter sidorna i räta vinklar. Tillsammans med den räta vinkeln vid hörnet bildar hörnregionen en kvadrat med sidan [[r]], så avstånden från det rätvinkliga hörnet till de två kateternas tangentpunkter är vart och ett [[r]]. Kalla det återstående tangentsegmentet på katet a för [[x]] och det återstående på katet b för [[y]]. De två tangentsegmenten från varje spetsigt hörn är lika, så hypotenusan delas i samma [[x]] och [[y]]. Därför är [[a=r+x]], [[b=r+y]] och [[c=x+y]]. Addera de två första ekvationerna: [[a+b=2r+x+y]]. Eftersom [[x+y=c]] blir detta [[a+b=2r+c]], och omskrivning ger [[[\\boxed{r=\\frac{a+b-c}{2}}]]]." },
          { "kind": "h3", "text": "Genomräknat exempel: 3-4-5-triangel" },
          { "kind": "p", "text": "Givet [[a=3]], [[b=4]], [[c=5]]: sätt in i genvägen, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]]. Den inskrivna cirkeln i 3-4-5-triangeln har radien 1, vilket matchar introexemplet där [[r=1]] och [[s=6]] gav [[K=6]]." },
          { "kind": "h3", "text": "Genomräknat exempel: 5-12-13-triangel" },
          { "kind": "p", "text": "Givet [[a=5]], [[b=12]], [[c=13]]: då blir [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]]. Tillsammans med [[s=\\frac{5+12+13}{2}=15]] följer arean som [[K=2\\times15=30]], bekräftad av katetformeln [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "En alternativ formel för inradien" },
          { "kind": "p", "text": "Genvägen kan också skrivas som [[[\\boxed{r=\\frac{ab}{a+b+c}}]]]. Detta är inte en andra, orelaterad formel. Börja från [[K=rs]] och [[K=\\frac{ab}{2}]], så [[rs=\\frac{ab}{2}]]. Eftersom [[s=\\frac{a+b+c}{2}]] ger substitution [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]], och att förkorta halvorna lämnar [[r=\\frac{ab}{a+b+c}]]. Den måste stämma med [[r=\\frac{a+b-c}{2}]]: kontrollera med 3-4-5, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], samma radie. Algebraiskt är [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] för en rätvinklig triangel, så de två formerna är identiska." },
          { "kind": "h3", "text": "Fungerar den här inradiegenvägen för varje triangel?" },
          { "kind": "p", "text": "Nej. Härledningen lutade sig mot den räta vinkeln: hörnkvadraten med sidan [[r]] existerar bara för att de två kateterna möts i 90 grader. För en allmän triangel måste inradien komma från [[[\\boxed{r=\\frac{K}{s}}]]] eller från en formel anpassad till de kända mätningarna, till exempel [[r=(s-a)\\tan\\frac{A}{2}]]. Att tillämpa [[r=\\frac{a+b-c}{2}]] på en icke-rätvinklig triangel beräknar ett tal utan geometrisk mening." }
        ],
        "imgAlt": "Tangentsegmenten x och y härleder inradieformeln r = (a + b - c) / 2",
        "figcaption": "Lika tangentsegment ger a = r + x, b = r + y, c = x + y."
      },
      "sec-howto": {
        "h2": "Så använder du kalkylatorn för rätvinklig triangels area från semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Kalkylatorn behöver exakt två indata, inmatade i ordning. Stegen nedan följer layouten på skärmen från att identifiera mätningarna till ett kontrollerat resultat." },
          { "kind": "p", "text": "Kalkylatorn har exakt två indata, inradien [[r]] och semiperimetern [[s]]. Den tar inte de tre sidorna, kateterna, hypotenusan eller en vinkel. Multiplikationen [[K=r\\times s]] är komplett som visat; resultatet får aldrig divideras med två igen." }
        ],
        "steps": [
          "<strong>Bestäm den rätvinkliga triangelns inradie.</strong> Det är radien i cirkeln inskriven i triangeln. Om de tre sidorna är kända, beräkna den med [[r=\\frac{a+b-c}{2}]].",
          "<strong>Bestäm dess semiperimeter.</strong> Addera de tre sidorna och dividera med två: [[s=\\frac{a+b+c}{2}]]. Det är halva den fulla omkretsen, inte omkretsen själv.",
          "<strong>Se till att båda värdena tillhör samma triangel.</strong> En inradie från en triangel och en semiperimeter från en annan ger en meningslös produkt.",
          "<strong>Konvertera mätningarna till kompatibla enheter vid behov.</strong> Båda längderna måste använda samma enhet: meter med meter, centimeter med centimeter, aldrig blandat.",
          "<strong>Mata in inradien r i det första inmatningsfältet.</strong> Det är det mindre av de två värdena i varje giltig triangel.",
          "<strong>Mata in semiperimetern s i det andra inmatningsfältet.</strong> Dubbelkolla att värdet är halva omkretsen, inte hela omkretsen.",
          "<strong>Klicka på Calculate Area.</strong> Kalkylatorn multiplicerar de två indata direkt.",
          "<strong>Granska det visade resultatet.</strong> Läs av arean och bekräfta att den ser rimlig ut för triangelns storlek.",
          "<strong>Kontrollera formel- och substitutionsstegen.</strong> De visar [[K=r\\times s]] med de inmatade värdena ifyllda.",
          "<strong>Bekräfta att resultatet uttrycks i kvadratenheter.</strong> Multiplicerade längdenheter ger kvadratenheter: m², cm², ft², matchande indata.",
          "<strong>Använd Reset innan du matar in en ny beräkning.</strong> Den rensar båda fälten för en ren start."
        ]
      },
      "sec-examples": {
        "h2": "Steg-för-steg-exempel på rätvinklig triangels area med inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Fyra klassiska rätvinkliga trianglar visar hela kedjan: sidor till semiperimeter, sidor till inradie, sedan den enda multiplikationen. I dessa exempel härleds r och s från sidlängderna; själva kalkylatorn accepterar r och s direkt." },
          { "kind": "h3", "text": "Exempel 1: 3-4-5 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[a=3]], [[b=4]], [[c=5]]. Steg 1: beräkna semiperimetern, [[s=\\frac{3+4+5}{2}]], [[s=6]]. Steg 2: beräkna inradien, [[r=\\frac{3+4-5}{2}]], [[r=1]]. Steg 3: beräkna arean, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Verifiera med katetformeln: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Exempel 2: 5-12-13 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[a=5]], [[b=12]], [[c=13]]. Semiperimeter: [[s=\\frac{5+12+13}{2}=15]]. Inradie: [[r=\\frac{5+12-13}{2}=2]]. Area: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Verifiera: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Exempel 3: 8-15-17 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[a=8]], [[b=15]], [[c=17]]. Semiperimeter: [[s=\\frac{8+15+17}{2}=20]]. Inradie: [[r=\\frac{8+15-17}{2}=3]]. Area: [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]. Verifiera: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Exempel 4: 7-24-25 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[a=7]], [[b=24]], [[c=25]]. Semiperimeter: [[s=\\frac{7+24+25}{2}=28]]. Inradie: [[r=\\frac{7+24-25}{2}=3]]. Area: [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]]. Verifiera: [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "Jämförelse av genomräknade exempel" }
        ],
        "table": {
          "headers": ["Triangel", "Katet a", "Katet b", "Hypotenusa c", "Inradie r", "Semiperimeter s", "Area K"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Verkliga tillämpningar av rätvinklig triangels area från inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Tolv genomräknade situationer bär formeln från sidan till verkstaden, byggplatsen och studion. Var och en namnger en rätvinklig panel, sektion, profil eller förenklad modell, arbetar inradien och semiperimetern genom formeln och anger antagandet bakom talen. Detta är förenklade rätvinkliga modeller: inte varje verkligt fönster, tak, trädgård, ramp, segel eller tomt bildar en exakt rätvinklig triangel, och ett oregelbundet föremål måste delas i enklare former innan formeln tillämpas. Arean beskriver endast den plana geometriska ytan; den fastställer aldrig strukturell styrka, bärförmåga eller byggsäkerhet på egen hand." },
          { "kind": "h3", "text": "Exempel 1: Triangulärt glasfönster" },
          { "kind": "p", "text": "Ett triangulärt glasfönster har sidorna [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Semiperimeter: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Inradie: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Area: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]. Resultatet representerar den plana triangulära glasytan innan karmmått dragits av. Antagande: rutan är en äkta rätvinklig triangel; karmdimensionerna hanteras separat." },
          { "kind": "h3", "text": "Exempel 2: Stålfäste i stål" },
          { "kind": "p", "text": "En triangulär stödplatta i stål har sidorna [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Semiperimeter: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. Inradie: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. Area: [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]]. Detta är den plana plåtarean och fastställer inte dess strukturella styrka. Antagande: fästesämnet är skuret som en rätvinklig triangel; bulthål och böjar är undantagna." },
          { "kind": "h3", "text": "Exempel 3: Takstödssektion" },
          { "kind": "p", "text": "En rätvinklig takstödssektion har sidorna [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Semiperimeter: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. Inradie: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. Area: [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]]. Formeln mäter den plana triangulära stödssektionen, användbar för materialuppskattningar. Antagande: sektionen modelleras som en rätvinklig triangel; takets fulla geometri kan skilja sig." },
          { "kind": "h3", "text": "Exempel 4: Triangulär trädgårdsyta" },
          { "kind": "p", "text": "En förenklad rätvinklig trädgårdsyta har sidorna [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Semiperimeter: [[s=28\\text{ m}]]. Inradie: [[r=3\\text{ m}]]. Area: [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]]. Arean hjälper till att uppskatta den triangulära planteringsytan, till exempel vid beställning av grästorv eller täckbark. Antagande: rabattgränserna är raka och möts i rät vinkel." },
          { "kind": "h3", "text": "Exempel 5: Triangulär rampprofil" },
          { "kind": "p", "text": "En förenklad rampsidoprofil har sidorna [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]]. Semiperimeter: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. Inradie: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. Area: [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]]. Detta mäter den triangulära sidoprofilen, inte den lutande rampytan. Antagande: profilen modelleras med ett kvadratiskt hörn vid basen." },
          { "kind": "h3", "text": "Exempel 6: Skärmall i plywood" },
          { "kind": "p", "text": "En rätvinklig plywoodmall har sidorna [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Semiperimeter: [[s=24\\text{ cm}]]. Inradie: [[r=4\\text{ cm}]]. Area: [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]]. Beräkningen uppskattar den plana materialarean före skärspill. Antagande: mallen är en äkta rätvinklig triangel; sågsnitt och spillbitar tillkommer." },
          { "kind": "h3", "text": "Exempel 7: Triangulär skyltpanel" },
          { "kind": "p", "text": "En triangulär skyltpanel har sidorna [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Semiperimeter: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. Inradie: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. Area: [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]]. Detta representerar panelens plana tryckbara yta. Antagande: panelytan är plan och rätvinklig; monteringsdetaljer är undantagna." },
          { "kind": "h3", "text": "Exempel 8: Lantmäterisektion" },
          { "kind": "p", "text": "En förenklad rätvinklig tomtsektion har sidorna [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Semiperimeter: [[s=45\\text{ m}]]. Inradie: [[r=4\\text{ m}]]. Area: [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]]. Formeln beräknar arean av den inmätta triangulära sektionen. Antagande: sektionen modelleras med ett kvadratiskt hörn; en oregelbunden tomt behöver delas i enklare former." },
          { "kind": "h3", "text": "Exempel 9: Triangulärt tygsegel" },
          { "kind": "p", "text": "En rätvinklig tygpanel har sidorna [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Semiperimeter: [[s=30\\text{ ft}]]. Inradie: [[r=5\\text{ ft}]]. Area: [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]]. Resultatet exkluderar sömmar, fållar och materialtillägg. Antagande: seglet modelleras plant; verkliga segel böjer sig under last." },
          { "kind": "h3", "text": "Exempel 10: Industristödpanel" },
          { "kind": "p", "text": "En rätvinklig industripanel har sidorna [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Semiperimeter: [[s=66\\text{ m}]]. Inradie: [[r=5\\text{ m}]]. Area: [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]]. Resultatet beskriver den plana geometriska panelen snarare än dess strukturella prestanda. Antagande: panelen modelleras som en rätvinklig triangel; tjocklek och infästningar är separata frågor." },
          { "kind": "h3", "text": "Exempel 11: Lagerbyggnads gavelände" },
          { "kind": "p", "text": "En förenklad gaveländesektion på ett lager har sidorna [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Semiperimeter: [[s=91\\text{ ft}]]. Inradie: [[r=6\\text{ ft}]]. Area: [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]]. Resultatet uppskattar den triangulära ändsektionen, till exempel vid prissättning av fasadbeklädnad. Antagande: gaveländen modelleras som en rätvinklig triangel." },
          { "kind": "h3", "text": "Exempel 12: Stor tillverkningspanel" },
          { "kind": "p", "text": "En rätvinklig tillverkningspanel har sidorna [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]]. Semiperimeter: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. Inradie: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. Area: [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]]. Den här metoden beräknar panelens plana triangulära area direkt från dess cirkel- och randmätningar. Antagande: panelkanterna är raka och möts i rät vinkel." },
          { "kind": "h3", "text": "Jämförelse av praktiska exempel" }
        ],
        "table": {
          "headers": ["Praktisk tillämpning", "Katet a", "Katet b", "Hypotenusa c", "Inradie r", "Semiperimeter s", "Beräknad area", "Måttenhet"],
          "rows": [
            ["Glasfönster", "3", "4", "5", "1", "6", "6", "m²"],
            ["Stålfäste", "5", "12", "13", "2", "15", "30", "cm²"],
            ["Takstöd", "8", "15", "17", "3", "20", "60", "ft²"],
            ["Trädgårdsyta", "7", "24", "25", "3", "28", "84", "m²"],
            ["Rampprofil", "9", "12", "15", "3", "18", "54", "m²"],
            ["Plywoodmall", "12", "16", "20", "4", "24", "96", "cm²"],
            ["Skyltpanel", "20", "21", "29", "6", "35", "210", "cm²"],
            ["Mätsektion", "9", "40", "41", "4", "45", "180", "m²"],
            ["Tygsegel", "15", "20", "25", "5", "30", "150", "ft²"],
            ["Industripanel", "11", "60", "61", "5", "66", "330", "m²"],
            ["Lagergavel", "13", "84", "85", "6", "91", "546", "ft²"],
            ["Tillverkningspanel", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "Varför ger inradieformeln samma area som katetformeln?",
        "blocks": [
          { "kind": "p", "text": "Två olika formler, en triangel, en area. Börja med [[K=rs]] och den rätvinkliga triangelns standardarea [[K=\\frac{ab}{2}]], vilket tvingar fram [[[\\boxed{rs=\\frac{ab}{2}}]]]. Båda sidorna mäter samma omslutna yta med olika geometrisk information: den ena läser den inskrivna cirkeln och randen, den andra läser de två vinkelräta kateterna." },
          { "kind": "h3", "text": "Numerisk jämförelse med en 3-4-5-triangel" },
          { "kind": "p", "text": "Inradiemetoden: [[r=1]], [[s=6]], alltså [[K=1\\times6=6]]. Katetmetoden: [[K=\\frac{3\\times4}{2}=6]]. Svaren stämmer överens eftersom inradien och semiperimetern kodar samma sidinformation som kateterna: [[r=\\frac{a+b-c}{2}]] och [[s=\\frac{a+b+c}{2}]] är byggda av [[a]], [[b]] och [[c]], så deras produkt måste rekonstruera den area kateterna beskriver. Överensstämmelsen här är ingen slump; det är algebra." },
          { "kind": "h3", "text": "När är inradiemetoden mest användbar?" },
          { "kind": "p", "text": "Inradiemetoden vinner när r och s redan finns till hands. Geometriska problem om inskrivna cirklar överlämnar inradien direkt. Ett bevis som behöver arean uttryckt genom cirkelmätningar använder [[K=rs]] naturligt. Tävlingsproblem levererar ofta semiperimetern som en del av upplägget. Och som korskontroll fångar beräkning av arean på två oberoende sätt räknefel som en enda metod skulle dölja. I varje fall är poängen indataens bekvämlighet: utgå från de mätningar du har." },
          { "kind": "h3", "text": "När är katetformeln enklare?" },
          { "kind": "p", "text": "Om båda vinkelräta kateterna redan är kända är [[K=\\frac{ab}{2}]] vanligen mer direkt: en multiplikation, en halvering, inget mellanliggande r eller s att beräkna. Att först härleda inradien och semiperimetern och sedan multiplicera lägger till två steg som inte förändrar något. Semiperimetermetoden är inte alltid den enklaste vägen; den är den bästa vägen när den inskrivna cirkeln eller randen är den naturliga utgångspunkten, och en omväg när kateterna sitter framför dig." }
        ]
      },
      "sec-heron": {
        "h2": "Vad är skillnaden mellan Herons formel och area = inradie × semiperimeter?",
        "blocks": [
          { "kind": "p", "text": "Herons formel beräknar arean från de tre sidlängderna: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Den kräver semiperimetern men inte inradien, och den fungerar för varje giltig triangel. Inradieformeln [[[\\boxed{K=rs}]]] behöver i stället inradien och semiperimetern i stället för de tre sidorna. Skillnaden ligger i indata, inte i geometrin: båda returnerar samma omslutna area, eftersom de två formlerna är länkade genom [[r=\\frac{K}{s}]]. Herons formel är det naturliga valet när alla tre sidorna är kända och inga cirkeldata finns; inradieformeln är naturlig när den inskrivna cirkeln är en del av bilden." },
          { "kind": "h3", "text": "Genomräknad jämförelse" },
          { "kind": "p", "text": "Använd en 3-4-5-triangel. Herons formel: [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]. Inradieformeln: [[K=1\\times6]], [[[\\boxed{K=6}]]]. Svaren matchar eftersom Herons uttryck förenklas, genom samma uppdelning i tre trianglar, till [[r\\times s]]: kvadratroten ur [[s(s-a)(s-b)(s-c)]] är lika med [[rs]] närhelst r och s kommer från samma triangel. Blanda ändå inte ihop de två verktygen: Herons formel frågar aldrig efter inradien, och inradiegenvägen [[r=\\frac{a+b-c}{2}]] tillhör bara rätvinkliga trianglar." }
        ]
      },
      "sec-consistency": {
        "h2": "Så kontrollerar du att inradien och semiperimetern är giltiga",
        "blocks": [
          { "kind": "p", "text": "Kalkylatorn accepterar två värden och multiplicerar dem, men produkten är arean av en rätvinklig triangel bara när båda värdena beskriver samma triangel. Kontrollerna nedan skiljer giltiga indata från bedragare." },
          { "kind": "h3", "text": "Grundläggande indatavillkor" },
          { "kind": "p", "text": "Båda indata måste vara positiva: [[r>0]] och [[s>0]]. En längd kan inte vara noll eller negativ, så en icke-positiv post har ingen geometrisk mening. Noll skulle kollapsa triangeln till en linje utan area; ett negativt värde beskriver ingenting alls. Mät om eller härled om varje indata som fallerar detta test." },
          { "kind": "h3", "text": "Semiperimetern måste vara större än inradien" },
          { "kind": "p", "text": "I en giltig triangel dvärgar semiperimetern inradien. Från [[K=rs]] och [[K=\\frac{ab}{2}]] med positiva kateter, och från geometrin hos den inskrivna cirkeln som passar inuti triangeln, är [[s]] alltid tydligt större än [[r]]: för 3-4-5-triangeln 6 mot 1; för 5-12-13, 15 mot 2. Värdena måste också motsvara en giltig uppsättning av tre sidor, så den här jämförelsen är ett snabbt filter, inte hela valideringen. En inradie större än semiperimetern kan inte komma från någon triangel." },
          { "kind": "h3", "text": "Avancerad konsistenskontroll för rätvinkliga trianglar" },
          { "kind": "p", "text": "För ett strängare test måste en rätvinklig triangel uppfylla [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]], ungefär [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]]. Idén är enkel: från ett givet r och s måste de två kateterna vara de positiva lösningarna till en andragradsekvation byggd från [[a+b=s+r]] och [[ab=2rs]], och den ekvationen har reella lösningar bara när dess diskriminant förblir icke-negativ. Diskriminantvillkoret förenklas till exakt denna gräns. Kontrollera 3-4-5: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], giltig. Detta är en valfri förfining för noggrant arbete, inte en obligatorisk del av nybörjarens beräkning." },
          { "kind": "h3", "text": "Vad händer när indata är inkonsistenta?" },
          { "kind": "p", "text": "Att multiplicera två positiva tal ger alltid ett numeriskt resultat, men det bevisar inte att de representerar inradien och semiperimetern hos samma rätvinkliga triangel. Ett r från en triangel parat med ett s från en annan ger en produkt utan geometrisk mening, hur prydlig aritmetiken än ser ut. Om inte kalkylatorimplementationen har testats för valideringsbeteende, anta inte att den kontrollerar sambandet: kör kontrollerna ovan själv, räkna om r och s från sidorna när sidorna är kända, och korskontrollera arean med katetformeln." }
        ]
      },
      "sec-units": {
        "h2": "Hur mätenheter påverkar beräkningar med inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Inradien och semiperimetern är båda längder, så de följer samma enhetsregler som varje annan längdmätning. Kvadratenheten i svaret kommer från att multiplicera två längdenheter, vilket gör konsekventa enheter till hela spelet." },
          { "kind": "h3", "text": "Varför måste båda indata använda kompatibla enheter?" },
          { "kind": "p", "text": "Produkten [[K=r\\times s]] multiplicerar en längd med en längd. Om r är i centimeter och s är i meter blandar produkten de två skalorna och talet får ingen ren mening. Konvertera först så att båda indata delar en enhet: meter, centimeter, millimeter, fot, tum eller yard, men samma för båda. Kalkylatorn har enhetsväljare av denna anledning: ställ in dem innan du matar in talen." },
          { "kind": "h3", "text": "Genomräknat enhetskonverteringsexempel" },
          { "kind": "p", "text": "Givet [[r=10\\text{ cm}]] och [[s=1\\text{ m}]]. Konvertera semiperimetern: [[1\\text{ m}=100\\text{ cm}]]. Sedan [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]]. Alternativt, konvertera inradien: [[10\\text{ cm}=0.1\\text{ m}]], sedan [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]]. Båda svaren beskriver samma area, eftersom [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. Konvertera först, multiplicera sedan, och båda enhetsvägarna landar rätt." },
          { "kind": "h3", "text": "Varför uttrycks resultatet i kvadratenheter?" },
          { "kind": "p", "text": "Area räknar enhetskvadrater som täcker ytan: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. Enheten är alltid längdenheten i kvadrat, eftersom produkten av två längder är ett antal kvadrater. Att rapportera en area som en ren längd, till exempel 1000 cm, är ett kategorifel: 1000 cm är en längd, medan 1000 cm² är en yta." },
          { "kind": "h3", "text": "Att arbeta med decimaltal" },
          { "kind": "p", "text": "Formeln hanterar decimaltal utan modifiering. Givet [[r=2.5]] och [[s=8.4]]: [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]]. Heltal, decimaltal och fina verkstadsmätningar flödar alla genom samma multiplikation. Behåll full precision genom beräkningen och avrunda bara slutsvaret till den noggrannhet mätningarna motiverar." }
        ]
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag när man beräknar rätvinklig triangels area från semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Nästan varje fel svar i det här ämnet spåras till en förväxlad etikett snarare än dålig aritmetik. De sexton misstagen nedan är de som dyker upp om och om igen, vart och ett med sin orsak och sin åtgärd." },
          { "kind": "h3", "text": "1. Att förväxla semiperimeter med full omkrets" },
          { "kind": "p", "text": "Att mata in [[P=12]] där [[s=6]] hör hemma fördubblar svaret: [[1\\times12=12]] i stället för 6. Misstaget händer eftersom vardagsspråket säger omkrets medan formeln vill ha hälften av den. Åtgärd: halvera alltid randsumman innan du matar in den, och kontrollera att det inmatade s är mindre än omkretsen." },
          { "kind": "h3", "text": "2. Att använda omradie i stället för inradie" },
          { "kind": "p", "text": "Omradien i 3-4-5-triangeln är [[R=\\frac{5}{2}=2.5]]; att använda den ger [[2.5\\times6=15]], nästan tredubbelt mot den sanna arean. Misstaget kommer av att de två cirklarna delar ordet radie. Åtgärd: bekräfta att radien tillhör cirkeln inuti triangeln, som tangerar alla tre sidorna, inte den genom hörnen." },
          { "kind": "h3", "text": "3. Att glömma beräkna semiperimetern korrekt" },
          { "kind": "p", "text": "Att addera bara två sidor, eller dividera varje sida med två före additionen, ger ett felaktigt s. För 3-4-5 ger addition av 3 + 4 och division 3,5, och [[1\\times3.5=3.5]] är meningslöst. Åtgärd: summera alla tre sidorna först och dividera sedan en gång: [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. Att dividera slutresultatet med två igen" },
          { "kind": "p", "text": "Efter [[K=1\\times6=6]] ger en extra halvering 3. Vanan kommer från katetformeln, där divisionen är explicit. Åtgärd: kom ihåg att halvorna redan är absorberade i semiperimetern; [[K=r\\times s]] är komplett." },
          { "kind": "h3", "text": "5. Att använda fel inradieformel för rätvinklig triangel" },
          { "kind": "p", "text": "Att gissa [[r=\\frac{c-a-b}{2}]] eller [[r=\\frac{a+b}{2}]] ger en felaktig radie. För 3-4-5 är [[\\frac{5-3-4}{2}=-1]] inte ens en längd. Åtgärd: använd [[r=\\frac{a+b-c}{2}]] med a och b som kateter och c som hypotenusa, exakt i den ordningen." },
          { "kind": "h3", "text": "6. Att tillämpa den rätvinkliga triangelns inradiegenväg på en vanlig triangel" },
          { "kind": "p", "text": "Genvägen lutar sig mot den räta vinkeln, så på en allmän triangel beräknar den ett tal utan geometrisk mening. Åtgärd: för icke-rätvinkliga trianglar, hitta inradien från [[r=\\frac{K}{s}]] eller en formel anpassad till de kända mätningarna, aldrig från [[r=\\frac{a+b-c}{2}]]." },
          { "kind": "h3", "text": "7. Att mata in inradie och semiperimeter från olika trianglar" },
          { "kind": "p", "text": "Att ta r = 1 från en 3-4-5-triangel och s = 15 från en 5-12-13-triangel ger 15, en produkt som inte beskriver någon verklig triangel. Misstaget händer när värden kopieras från olika genomräknade exempel eller olika ritningar. Åtgärd: härled eller mät båda indata från samma triangel innan du multiplicerar." },
          { "kind": "h3", "text": "8. Att blanda centimeter och meter" },
          { "kind": "p", "text": "Att multiplicera r = 10 cm med s = 1 m utan att konvertera ger 10 av ingenting rent. Åtgärd: konvertera till en enhet först: [[1\\text{ m}=100\\text{ cm}]], sedan [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. Att rapportera resultatet i linjära enheter" },
          { "kind": "p", "text": "En area på 6 m² är inte 6 m. Misstaget kommer vanligen från att kopiera indataenheten utan att kvadrera den. Åtgärd: skriv den kvadrerade enheten med talet varje gång: m², cm², ft²." },
          { "kind": "h3", "text": "10. Att mata in noll eller negativa mätningar" },
          { "kind": "p", "text": "Längder är positiva. Noll kollapsar triangeln till en linje utan area, och negativa längder har ingen geometrisk mening här. Åtgärd: mät om eller härled om indata; avvisa icke-positiva värden före beräkningen." },
          { "kind": "h3", "text": "11. Att förväxla incentrum med det omskrivna centrumet" },
          { "kind": "p", "text": "Incentrum är mötespunkten för bisektriserna; det omskrivna centrumet är mötespunkten för sidornas mittpunktsnormaler. För en rätvinklig triangel sitter det omskrivna centrumet vid hypotenusans mittpunkt, en helt annan punkt. Att blanda ihop dem leder till att man mäter fel radie. Åtgärd: incentrum [[I]] ligger inuti triangeln på lika avstånd från sidorna, inte från hörnen." },
          { "kind": "h3", "text": "12. Att anta att den inskrivna cirkeln bara tangerar två sidor" },
          { "kind": "p", "text": "En cirkel inklämd i ett hörn tangerar två sidor, men det är inte den inskrivna cirkeln. Den inskrivna cirkeln tangerar alla tre, och areabeviset behöver alla tre tangentpunkterna. Åtgärd: verifiera tre kontaktpunkter, en per sida, innan du behandlar en radie som inradien." },
          { "kind": "h3", "text": "13. Att glömma att radien möter varje tangentsida vinkelrätt" },
          { "kind": "p", "text": "Argumentet om gemensam höjd i beviset beror på [[r\\perp a]], [[r\\perp b]], [[r\\perp c]]. Ett snett segment från incentrum till en sida är längre än r och kan inte fungera som höjden. Åtgärd: mät inradien längs normalen till sidan, aldrig längs en diagonal." },
          { "kind": "h3", "text": "14. Att förväxla inradien med diametern" },
          { "kind": "p", "text": "Att mata in den inskrivna cirkelns fulla bredd som r fördubblar radien och fördubblar arean. För 3-4-5-triangeln ger inmatning av 2 i stället för 1 [[2\\times6=12]]. Åtgärd: inradien löper från centrum till en sida, halva cirkelns fulla bredd." },
          { "kind": "h3", "text": "15. Att använda Herons formel felaktigt" },
          { "kind": "p", "text": "Vanliga felslipningar inkluderar att glömma kvadratroten, att skriva [[s(s+a)(s+b)(s+c)]] med plustecken, eller att mata in den fulla omkretsen i formeln. För 3-4-5 ger en utelämnad rot 36 i stället för 6. Åtgärd: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], med semiperimetern, minustecknen och roten alla på plats." },
          { "kind": "h3", "text": "16. Att anta att ett numeriskt resultat automatiskt bevisar att indata är geometriskt konsistenta" },
          { "kind": "p", "text": "Vilka två positiva tal som helst multipliceras, så kalkylatorn returnerar alltid något. Det något är arean av en rätvinklig triangel bara när r och s verkligen tillhör en. Åtgärd: kör konsistenskontrollerna, räkna om r och s från sidorna när det är möjligt, och korskontrollera med katetformeln innan du litar på talet." },
          { "kind": "h3", "text": "Fel mot rätt: ett konkret exempel" },
          { "kind": "p", "text": "Använd [[r=1]], [[s=6]]. Rätt: [[K=1\\times6=6]]. Felaktigt att dividera med två igen: [[K=\\frac{1\\times6}{2}=3]], fel eftersom halveringen redan finns inuti semiperimetern. Felaktigt att mata in den fulla omkretsen 12 i stället för semiperimetern 6: [[K=1\\times12=12]], dubbelt mot den sanna arean. Aritmetiken ser självsäker ut i alla tre fallen; bara geometrin skiljer dem åt." }
        ]
      },
      "sec-verify": {
        "h2": "Så kontrollerar du att din rätvinkliga triangels area stämmer",
        "blocks": [
          { "kind": "p", "text": "Sex oberoende kontroller, alla demonstrerade på 3-4-5-triangeln ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]]). Överensstämmelse mellan olika vägar är det starkaste beviset för att ett svar är rätt, i läxor och i praktisk mätning likadant." },
          { "kind": "h3", "text": "Metod 1: Kontrollera huvudformeln" },
          { "kind": "p", "text": "Kör [[K=r\\times s]] på nytt: [[K=1\\times6=6]]. Ett andra pass med talen inmatade på nytt fångar skrivfel och felknappade siffror." },
          { "kind": "h3", "text": "Metod 2: Beräkna semiperimetern från tre sidor" },
          { "kind": "p", "text": "Räkna om [[s=\\frac{a+b+c}{2}]] från sidorna: [[s=\\frac{3+4+5}{2}=6]]. Om det omräknade s skiljer sig från det inmatade var indata felaktig och produkten måste göras om." },
          { "kind": "h3", "text": "Metod 3: Beräkna inradien från den rätvinkliga triangeln" },
          { "kind": "p", "text": "Räkna om [[r=\\frac{a+b-c}{2}]]: [[r=\\frac{3+4-5}{2}=1]]. En avvikelse mot det inmatade r betyder att radien kom från en annan triangel eller en felaktigt tillämpad formel." },
          { "kind": "h3", "text": "Metod 4: Verifiera med standardkatetformeln" },
          { "kind": "p", "text": "Beräkna [[K=\\frac{ab}{2}]]: [[K=\\frac{3\\times4}{2}=6]]. Den här vägen använder helt andra indata, så överensstämmelse med [[rs]] bekräftar både indata och aritmetiken." },
          { "kind": "h3", "text": "Metod 5: Verifiera med Herons formel" },
          { "kind": "p", "text": "Beräkna [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Herons formel övar sidorna och semiperimetern tillsammans och fångar sidmärkningsfel som de andra kontrollerna kan missa." },
          { "kind": "h3", "text": "Metod 6: Kontrollera Pythagoras sats" },
          { "kind": "p", "text": "Bekräfta [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Detta kontrollerar sididentifieringen bakom varje annan beräkning; en felaktig hypotenusa betyder att en sida märkts fel och att r, s och K alla behöver byggas om." }
        ]
      },
      "sec-applications": {
        "h2": "Praktiska tillämpningar av formeln med inradie och semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Samma tvåindatamönster dyker upp överallt där en triangulär panel eller sektion behöver mätas och den inskrivna cirkelns data är den bekväma utgångspunkten. En glasmästare dimensionerar ett fönster från dess kantlängder; en tillverkare läser kateterna på ett fästesämne; en lantmätare reducerar ett tomthörn till tre raka sidor. Från de sidorna kommer inradien och semiperimetern, och en multiplikation namnger arean. De fyra panelerna nedan visar mönstret i olika skalor: ett glasfönster (6 m²), ett takstöd (60 ft²), en trädgårdsyta (84 m²) och en stålplatta (30 cm²), var och en märkt med sin inradie, sin semiperimeter och den resulterande arean." }
        ],
        "imgAlt": "Fyra paneler: glasfönster 6 m2, takstöd 60 ft2, trädgårdsyta 84 m2, stålplatta 30 cm2",
        "figcaption": "Fyra verkliga användningar: ett glasfönster, ett takstöd, en trädgårdsyta och en stålplatta."
      },
      "sec-conclusion": {
        "h2": "Två mätningar, en produkt",
        "blocks": [
          { "kind": "p", "text": "En inradie och en semiperimeter räcker. Multiplicera dem, och den omslutna ytan är namngiven. Beviset med tre trianglar visar varför ingen division följer multiplikationen, tangentsegmentargumentet visar varför den rätvinkliga triangeln får sin inradiegenväg, och katetformeln plus Herons formel står redo att kontrollera varje svar." },
          { "kind": "p", "text": "Arbetsvanan är enkel: bekräfta att båda indata beskriver samma triangel, matcha enheterna, håll decimaltal oavrundade till slutet och verifiera genom en andra metod. Med de vanorna är [[K=r\\times s]] en av de mest pålitliga areaberäkningarna i geometrin." }
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
        "blocks": []
      }
    }
  },
  "zh": {
    "faqs": [
      {
        "question": "用内切圆半径和半周长求直角三角形面积的公式是什么？",
        "answer": "K = r × s，其中 r 是内切圆半径（内切圆的半径），s 是半周长（周长的一半）。把两者相乘，乘积就是面积，不需要除法步骤。当 r = 1、s = 6 时，K = 1 × 6 = 6 平方单位。两个输入必须描述同一个三角形。"
      },
      {
        "question": "什么是内切圆半径？",
        "answer": "内切圆半径是内切圆的半径，内切圆是恰好位于三角形内部并与三条边都相切的圆。它等于从内心（即三条角平分线的交点）到任意一条边的垂直距离。对于直角边为 a、b、斜边为 c 的直角三角形，有简便公式 r = (a + b - c) / 2。"
      },
      {
        "question": "内切圆半径和外接圆半径有什么区别？",
        "answer": "内切圆半径属于三角形内部、与三条边都相切的圆；外接圆半径属于经过三个顶点的圆。它们度量的是不同的圆，所以数值不同。对于直角三角形，外接圆半径为 R = c/2，恰好是斜边的一半，而内切圆半径是 (a + b - c)/2。"
      },
      {
        "question": "如何计算直角三角形的半周长？",
        "answer": "把三条边相加再除以二：s = (a + b + c) / 2。对于 3-4-5 三角形，s = (3 + 4 + 5) / 2 = 6。半周长是完整周长的一半，所以在使用 K = r × s 时如果误输入完整周长，面积会翻倍。"
      },
      {
        "question": "已知三条边长时如何求内切圆半径？",
        "answer": "对于直角三角形，使用简便公式 r = (a + b - c) / 2，其中 a、b 是直角边，c 是斜边。当边长为 5、12、13 时，r = (5 + 12 - 13) / 2 = 2。这个简便公式只适用于直角三角形；其他三角形需要用一般关系式 r = K / s。"
      },
      {
        "question": "为什么面积等于内切圆半径乘以半周长？",
        "answer": "把内心与三个顶点连起来，三角形就被分成三个小三角形，每个小三角形以一条原边为底、以 r 为高。它们的面积分别是 ar/2、br/2 和 cr/2。相加得到 r(a + b + c)/2，而 s = (a + b + c)/2，所以总和为 r × s。"
      },
      {
        "question": "这个公式对所有三角形都成立吗？",
        "answer": "成立。每个非退化三角形都有内切圆和内心，所以分成三个小三角形的论证对直角、锐角和钝角三角形同样成立。直角三角形只是更简单，因为它的内切圆半径可以直接由边长通过 r = (a + b - c) / 2 求出。一般的内切圆半径仍来自 r = K / s。"
      },
      {
        "question": "半周长和周长是同一个概念吗？",
        "answer": "不是。半周长恰好是周长的一半：s = P/2。对于 3-4-5 三角形，周长是 12，半周长是 6。把完整周长代入 K = r × s 会得到 1 × 12 = 12，是正确面积 6 的两倍。乘法之前先把周长减半。"
      },
      {
        "question": "最终答案需要除以二吗？",
        "answer": "不需要。公式 K = r × s 已经包含了所有的除法：三个小三角形带来的二分之一都被吸收进了半周长。乘完之后再除一次是最常见的错误。当 r = 1、s = 6 时，正确面积是 6，而 (1 × 6) / 2 = 3 是错的。"
      },
      {
        "question": "海伦公式和内切圆半径公式有什么关系？",
        "answer": "两者计算的是同一个面积，但出发的输入不同。海伦公式 K = sqrt(s(s - a)(s - b)(s - c)) 需要三条边；K = r × s 需要的是内切圆半径和半周长。对于 3-4-5 三角形两者都给出 6，这使得一个公式成为另一个公式的有力检验。"
      },
      {
        "question": "内切圆半径和半周长可以用小数吗？",
        "answer": "可以。公式处理小数和处理整数完全一样。当 r = 2.5、s = 8.4 时，K = 2.5 × 8.4 = 21 平方单位。乘法过程中保持完整精度，只在最后按测量精度对最终答案取整。"
      },
      {
        "question": "如何验证我的内切圆半径和半周长是否正确？",
        "answer": "检查两者都为正数，且 s 明显大于 r。如果已知边长，重新计算 s = (a + b + c)/2 和 r = (a + b - c)/2，再用 K = ab/2 和海伦公式交叉检验面积。不同方法之间的一致是强有力的证据。来自不同三角形的值算出的数字不是真正的面积。"
      }
    ],
    "relatedHeading": "探索相关的直角三角形计算器",
    "relatedItems": [
      "直角边求直角三角形面积计算器",
      "直角三角形半周长计算器",
      "高求直角三角形面积计算器",
      "角求直角三角形面积计算器",
      "直角三角形周长计算器",
      "直角三角形面积计算器"
    ],
    "relatedIntro": "不同的测量需要不同的计算器。",
    "faqHeading": "常见问题",
    "tocHeading": "本指南内容",
    "tocItems": {
      "sec-intro": "如何用内切圆半径和半周长计算直角三角形的面积",
      "sec-right-triangle": "什么是直角三角形？",
      "sec-incircle": "理解直角三角形的内切圆",
      "sec-semiperimeter": "理解三角形的半周长",
      "sec-formula": "为什么三角形的面积等于内切圆半径乘以半周长？",
      "sec-inradius": "如何计算直角三角形的内切圆半径",
      "sec-howto": "如何使用直角三角形面积（半周长）计算器",
      "sec-examples": "用内切圆半径和半周长求直角三角形面积的分步示例",
      "sec-practical": "用内切圆半径和半周长求直角三角形面积的实际应用",
      "sec-legs-comparison": "为什么内切圆半径公式与直角边公式给出相同的面积？",
      "sec-heron": "海伦公式与面积 = 内切圆半径 × 半周长有什么区别？",
      "sec-consistency": "如何检验内切圆半径和半周长是否有效",
      "sec-units": "测量单位如何影响内切圆半径和半周长的计算",
      "sec-mistakes": "用半周长计算直角三角形面积时的常见错误",
      "sec-verify": "如何检验你的直角三角形面积是否正确",
      "sec-applications": "内切圆半径与半周长公式的实际应用",
      "sec-related": "探索相关的直角三角形计算器",
      "sec-faq": "常见问题",
      "sec-conclusion": "两个测量值，一次乘法"
    },
    "sections": {
      "sec-intro": {
        "h2": "如何用内切圆半径和半周长计算直角三角形的面积",
        "blocks": [
          { "kind": "p", "text": "取 [[r=1]]、[[s=6]]。应用 [[K=r\\times s]]：[[K=1\\times6]]，[[[\\boxed{K=6\\text{ square units}}]]]。结果命名了三角形三条边所围成的总平面面积：六个平方单位。这正是\"直角三角形面积（半周长）计算器\"对这两个输入返回的结果。" },
          { "kind": "p", "text": "内切圆半径是藏在三角形内部、与三条边都相切的圆的半径。半周长是边界长度的一半：三条边的总和除以二。两个测量值就够了，因为内切圆半径充当了从内心出发构建的三个小三角形的公共垂直高，而半周长则把它们的底边收拢成一个因子。" },
          { "kind": "p", "text": "这个推理对每个三角形都成立，因为每个三角形都有自己的内切圆。直角三角形多了一个便利：它的内切圆半径可以通过一个简短公式从三条边得出，所以 r 和 s 往往已知。这个方法在内切圆或半周长已知的问题中大放异彩，因为不需要测量直角边或角度。" }
        ]
      },
      "sec-right-triangle": {
        "h2": "什么是直角三角形？",
        "blocks": [
          { "kind": "p", "text": "在内切圆登场之前，必须先把三角形本身标注得毫无差错。下面的符号在整个指南中保持固定，计算器也使用同样的名称。" },
          { "kind": "h3", "text": "直角三角形的定义" },
          { "kind": "p", "text": "直角三角形是恰好含有一个 90 度内角的三边形。它有三个顶点、三条边、两个锐角和一个通常用小正方形标记的直角。构成直角的两条边是直角边；对面的边是斜边。由于 [[C=90^\\circ]]，可得 [[[\\boxed{A+B=90^\\circ}]]]：两个锐角互余，所以知道一个就能确定另一个。" },
          { "kind": "h3", "text": "理解两条直角边" },
          { "kind": "p", "text": "直角边 [[a]] 与角 [[A]] 相对；直角边 [[b]] 与角 [[B]] 相对。两条直角边在直角顶点处相交且互相垂直。它们直接贡献面积，因为每条直角边都可以作底，另一条作垂直高。在本页中它们还为内切圆半径提供输入，因为简便公式 [[r=\\frac{a+b-c}{2}]] 正是由两条直角边和斜边构成的。" },
          { "kind": "h3", "text": "理解斜边" },
          { "kind": "p", "text": "斜边是 90 度角的对边，永远是三角形最长的边。它从不构成直角，而是横跨在直角对面。在直角边面积公式中它没有戏份，但在这里很重要：斜边同时进入半周长 [[s=\\frac{a+b+c}{2}]] 和内切圆半径简便公式 [[r=\\frac{a+b-c}{2}]]。如果两条直角边已知，勾股定理可以通过 [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] 把它求回来。" },
          { "kind": "h3", "text": "这种三角形与其他三角形有什么不同？" },
          { "kind": "p", "text": "90 度的角就是全部的故事。它让直角边无需任何作图就互相垂直，从而简化了标准面积公式；它还让直角附近内切圆的切线段长度等于内切圆半径本身，从而简化了内切圆半径公式。其他三角形同样满足 [[K=r\\times s]]，但求它们的内切圆半径通常要先知道面积。只有直角三角形是内切圆半径能直接从边长中得出的特例。" }
        ]
      },
      "sec-incircle": {
        "h2": "理解直角三角形的内切圆",
        "blocks": [
          { "kind": "p", "text": "只有把内切圆清晰地画在脑海里，内切圆半径才有意义。本节从圆本身出发，一步步讲到半径与每条边相交的切点。" },
          { "kind": "h3", "text": "内切圆的定义" },
          { "kind": "p", "text": "内切圆是位于三角形内部、与三条边都相切的圆。它处在内部区域，与每条边恰好相切于一点，并且不能穿过任何一条边，因为相切把它固定住了。每个非退化三角形恰好拥有一个内切圆：在角落区域里放入一个圆并不断放大，只有一个最大的尺寸能同时亲吻三条边。三个切点（每条边一个）就是之后测量内切圆半径的位置。" },
          { "kind": "h3", "text": "什么是内心？" },
          { "kind": "p", "text": "记为 [[I]] 的内心是三条内角平分线的交点。每条平分线把一个角分成相等的两半，而平分线上的任意一点到构成该角的两条边的垂直距离都相等。因此三条平分线的交点到三条边的距离相等，这正是它能作为与每条边都相切的圆的圆心的原因。内心位于每个有效三角形的内部，绝不会在边上或外部。" },
          { "kind": "h3", "text": "什么是内切圆半径？" },
          { "kind": "p", "text": "内切圆半径是从内心到三角形任意一条边的垂直距离：[[[\\boxed{r=\\text{distance from the incenter to a side}}]]]。因为内心到三条边等距，所以无论选哪条边，这个值都一样。这个唯一的数就是内切圆的半径，是从圆心到切点画出的三条短线段中每一条的长度，也是后面一节面积证明得以成立的公共高。" },
          { "kind": "h3", "text": "理解相切关系" },
          { "kind": "p", "text": "画到切点的半径垂直于它所接触的边。应用到三个接触点，得到 [[r\\perp a]]、[[r\\perp b]] 和 [[r\\perp c]]。每句话描述的是图形的不同角落：止于直角边 a 的半径与直角边 a 成直角，直角边 b 和斜边同理。这种垂直不是装饰，而是让每条半径都能充当面积证明中三个小三角形之一的高的性质。" },
          { "kind": "h3", "text": "内切圆与外接圆的区别" },
          { "kind": "p", "text": "内切圆住在三角形内部，与三条边都相切；外接圆经过三个顶点，把三角形包在里面。它们的半径是不同的度量，绝不能互换。对于直角三角形，外接圆半径有自己的简单规则 [[[\\boxed{R=\\frac{c}{2}}]]]，因为斜边是外接圆的一条直径：斜边的中点就是外心。内切圆半径 [[r]] 是两者中较小的那个，属于里面的圆。" }
        ],
        "imgAlt": "带内切圆的直角三角形 ABC：内心 I、三个切点、长度为 r 的垂直半径",
        "figcaption": "带内切圆的三角形 ABC：三条垂直半径，每条长度都是 r。"
      },
      "sec-semiperimeter": {
        "h2": "理解三角形的半周长",
        "blocks": [
          { "kind": "p", "text": "半周长看起来只是个不起眼的\"一半\"度量，却承担了面积计算的大部分工作。理解几何为什么总爱用周长的一半，就为证明铺好了路。" },
          { "kind": "h3", "text": "半周长的定义" },
          { "kind": "p", "text": "半周长恰好是总周长的一半：[[[\\boxed{s=\\frac{P}{2}}]]]。对三角形而言就是 [[[\\boxed{s=\\frac{a+b+c}{2}}]]]。周长 [[P]] 是完整的边界长度，即三条边之和；半周长是这个和的一半。两者通过 [[P=2s]] 联系，混淆它们是本页代价最高的输入错误。" },
          { "kind": "h3", "text": "如何计算半周长" },
          { "kind": "p", "text": "取 [[a=3]]、[[b=4]]、[[c=5]]。先把三条边相加，再除一次：[[s=\\frac{3+4+5}{2}]]，[[[\\boxed{s=6}]]]。加法必须在除法之前，因为半周长是对整个边界减半，而不是对每条边分别减半。在这里先除后加也会得到同一个数，但公式 [[s=\\frac{a+b+c}{2}]] 规定了正确的顺序：先把边界加起来，再减半。" },
          { "kind": "h3", "text": "为什么用半周长而不用完整周长？" },
          { "kind": "p", "text": "三角形面积公式总在产生二分之一：证明中的每个小三角形都贡献一次除以二，而半周长一次性把它们全部吸收。它是海伦公式、内切圆半径关系 [[r=\\frac{K}{s}]] 以及接下来证明的自然变量。如果输入完整周长，结果会翻倍，因为 [[K=r\\times P=2rs]] 是真实面积的两倍。计算器要求输入 [[s]] 而不是 [[P]]，正是为了让乘法之后不再需要任何调整。" },
          { "kind": "h3", "text": "半周长可能比最长的边还小吗？" },
          { "kind": "p", "text": "不可能。三角形不等式要求 [[a+b>c]]：两条较短边的和必须超过最长边，否则三角形无法闭合。两边同时加上 [[c]] 得到 [[a+b+c>2c]]，再减半得到 [[\\frac{a+b+c}{2}>c]]，即 [[s>c]]。在有效三角形中，半周长永远大于最长边。如果报告的半周长比斜边还小，这些输入不可能描述一个真实的三角形。" }
        ]
      },
      "sec-formula": {
        "h2": "为什么三角形的面积等于内切圆半径乘以半周长？",
        "blocks": [
          { "kind": "p", "text": "从一般规则 [[K=\\frac{\\text{base}\\times\\text{height}}{2}]] 出发。把内心 [[I]] 与三个顶点连起来。三角形被分成三个小三角形，每个都以一条原边为底、以内切圆半径为垂直高。本节的其余部分逐个计算每一块再相加，于是 [[K=r\\times s]] 是被\"看见\"的，而不只是被记住的。" },
          { "kind": "h3", "text": "第一个小三角形的面积" },
          { "kind": "p", "text": "建在边 [[a]] 上的三角形底为 [[a]]、高为 [[r]]，因为半径在切点处与边 [[a]] 垂直相交。它的面积因此是 [[K_1=\\frac{ar}{2}]]。直角在这里还没有派上用场，这一步对任何三角形的边都成立。" },
          { "kind": "h3", "text": "第二个小三角形的面积" },
          { "kind": "p", "text": "建在边 [[b]] 上的三角形遵循同样的模式：底为 [[b]]，垂直高为 [[r]]，面积 [[K_2=\\frac{br}{2}]]。高仍然是同一个数 [[r]]，因为内心到每条边等距。这个公共高是整个证明的关键。" },
          { "kind": "h3", "text": "第三个小三角形的面积" },
          { "kind": "p", "text": "建在边 [[c]] 上的三角形补全了这组：[[K_3=\\frac{cr}{2}]]。三个小三角形恰好铺满原三角形，既无重叠也无缝隙：因为从内心到顶点的线段划分了内部区域，原三角形的每一点都落在其中之一里面。" },
          { "kind": "h3", "text": "把三个面积加起来" },
          { "kind": "p", "text": "把各部分相加：[[K=K_1+K_2+K_3]]。代入得到 [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]。从和中提取公因子 [[r]]：[[K=\\frac{r(a+b+c)}{2}]]。回忆 [[s=\\frac{a+b+c}{2}]]，方括号里的分式恰好就是半周长，于是 [[[\\boxed{K=r\\times s}]]]。三个小三角形带来的每一次减半都被吸收进了半周长，这就是最后的乘法不再需要除法的原因。" },
          { "kind": "h3", "text": "为什么这个公式对每个三角形都成立？" },
          { "kind": "p", "text": "每个非退化三角形都有内切圆和内心，内心到三条边的垂直距离都是同一个数 [[r]]。分成三个三角形的论证没有用到别的：没有直角、没有特殊的边长、没有特殊的形状。无论三角形是直角、锐角还是钝角，内心与顶点相连，同样的代数都会落到 [[K=r\\times s]]。这个公式是一般三角形的性质，这就是几何教材证明一次、到处使用的原因。" },
          { "kind": "h3", "text": "为什么这个公式对直角三角形特别有用？" },
          { "kind": "p", "text": "恒等式不变，但内切圆半径变简单了。在一般三角形中，内切圆半径通常要通过 [[r=\\frac{K}{s}]] 从面积本身求出，如果面积正是目标，这就成了循环论证。直角三角形跳出了这个循环：它的内切圆半径可以直接从边长经由 [[r=\\frac{a+b-c}{2}]] 得出（推导见下一节）。这让 [[K=r\\times s]] 成为直角三角形真正的工作方法，而不只是一个改写过的定义。" }
        ],
        "imgAlt": "从内心 I 分成三个高为 r 的小三角形的三角形，证明 K = r 乘以 s",
        "figcaption": "三个小三角形共享高 r；它们的面积之和等于 r 乘以 s。"
      },
      "sec-inradius": {
        "h2": "如何计算直角三角形的内切圆半径",
        "blocks": [
          { "kind": "p", "text": "对于直角边为 [[a]]、[[b]]、斜边为 [[c]] 的直角三角形，内切圆半径为 [[[\\boxed{r=\\frac{a+b-c}{2}}]]]。这个简便公式是直角三角形特有的。下面的证明只用到圆的切线段性质，例题会展示它的实际用法。" },
          { "kind": "h3", "text": "内切圆半径公式为什么成立？" },
          { "kind": "p", "text": "从同一个外部点向圆引的两条切线段长度相等。内切圆与两条直角边都相切，通向这两个切点的两条半径与边成直角。加上顶点处的直角，角落区域形成一个边长为 [[r]] 的正方形，所以从直角顶点到两条直角边上切点的距离各为 [[r]]。把直角边 a 上剩余的切线段记为 [[x]]，直角边 b 上剩余的记为 [[y]]。从每个锐角顶点引出的两条切线段相等，所以斜边被分成同样的 [[x]] 和 [[y]]。于是 [[a=r+x]]、[[b=r+y]]、[[c=x+y]]。把前两个方程相加：[[a+b=2r+x+y]]。由于 [[x+y=c]]，它变成 [[a+b=2r+c]]，整理得到 [[[\\boxed{r=\\frac{a+b-c}{2}}]]]。" },
          { "kind": "h3", "text": "例题：3-4-5 三角形" },
          { "kind": "p", "text": "已知 [[a=3]]、[[b=4]]、[[c=5]]：代入简便公式，[[r=\\frac{3+4-5}{2}]]，[[r=\\frac{2}{2}]]，[[[\\boxed{r=1}]]]。3-4-5 三角形的内切圆半径为 1，这与引言中 [[r=1]]、[[s=6]] 得出 [[K=6]] 的例子一致。" },
          { "kind": "h3", "text": "例题：5-12-13 三角形" },
          { "kind": "p", "text": "已知 [[a=5]]、[[b=12]]、[[c=13]]：则 [[r=\\frac{5+12-13}{2}]]，[[r=\\frac{4}{2}]]，[[[\\boxed{r=2}]]]。配上 [[s=\\frac{5+12+13}{2}=15]]，面积为 [[K=2\\times15=30]]，直角边公式 [[K=\\frac{5\\times12}{2}=30]] 可以验证。" },
          { "kind": "h3", "text": "内切圆半径的另一种公式" },
          { "kind": "p", "text": "简便公式也可以写成 [[[\\boxed{r=\\frac{ab}{a+b+c}}]]]。这不是第二个不相关的公式。从 [[K=rs]] 和 [[K=\\frac{ab}{2}]] 出发，得 [[rs=\\frac{ab}{2}]]。由于 [[s=\\frac{a+b+c}{2}]]，代入得到 [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]]，约去二分之一后剩下 [[r=\\frac{ab}{a+b+c}]]。它必须与 [[r=\\frac{a+b-c}{2}]] 一致：用 3-4-5 检验，[[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]]，半径相同。代数上，对直角三角形有 [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]]，所以两种形式完全等价。" },
          { "kind": "h3", "text": "这个内切圆半径简便公式对每个三角形都成立吗？" },
          { "kind": "p", "text": "不成立。推导依赖于直角：边长为 [[r]] 的角落正方形之所以存在，是因为两条直角边以 90 度相交。对于一般三角形，内切圆半径必须来自 [[[\\boxed{r=\\frac{K}{s}}]]]，或来自与已知测量相匹配的公式，例如 [[r=(s-a)\\tan\\frac{A}{2}]]。把 [[r=\\frac{a+b-c}{2}]] 用在非直角三角形上，算出的是一个没有几何意义的数。" }
        ],
        "imgAlt": "切线段 x 和 y 推导出内切圆半径公式 r = (a + b - c) / 2",
        "figcaption": "相等的切线段给出 a = r + x、b = r + y、c = x + y。"
      },
      "sec-howto": {
        "h2": "如何使用直角三角形面积（半周长）计算器",
        "blocks": [
          { "kind": "p", "text": "计算器只需要两个输入，按顺序填写。下面的步骤从识别测量值开始，跟随屏幕布局一直走到一个经过检验的结果。" },
          { "kind": "p", "text": "计算器恰好有两个输入：内切圆半径 [[r]] 和半周长 [[s]]。它不接受三条边、直角边、斜边或角度。乘法 [[K=r\\times s]] 如所示已经完整，结果绝不能再除以二。" }
        ],
        "steps": [
          "<strong>确定直角三角形的内切圆半径。</strong>它是三角形内切圆的半径。如果三条边已知，用 [[r=\\frac{a+b-c}{2}]] 计算。",
          "<strong>确定它的半周长。</strong>把三条边相加再除以二：[[s=\\frac{a+b+c}{2}]]。这是完整周长的一半，不是周长本身。",
          "<strong>确保两个值属于同一个三角形。</strong>一个三角形的内切圆半径配上另一个三角形的半周长，乘积毫无意义。",
          "<strong>必要时把测量值换算成兼容的单位。</strong>两个长度必须使用同一单位：米配米、厘米配厘米，绝不混用。",
          "<strong>把内切圆半径 r 填入第一个输入框。</strong>在任何有效三角形中，它都是两个值中较小的那个。",
          "<strong>把半周长 s 填入第二个输入框。</strong>再三确认填的是周长的一半，而不是整个周长。",
          "<strong>点击 Calculate Area。</strong>计算器直接把两个输入相乘。",
          "<strong>查看显示的结果。</strong>读出面积，确认它对这个三角形的尺寸来说合理。",
          "<strong>检查公式和代入步骤。</strong>它们展示了填入所输数值后的 [[K=r\\times s]]。",
          "<strong>确认结果以平方单位表示。</strong>长度单位相乘得到平方单位：与输入匹配的 m²、cm²、ft²。",
          "<strong>输入下一次计算前先用 Reset。</strong>它会清空两个输入框，重新开始。"
        ]
      },
      "sec-examples": {
        "h2": "用内切圆半径和半周长求直角三角形面积的分步示例",
        "blocks": [
          { "kind": "p", "text": "四个经典的直角三角形展示了完整链条：从边到半周长、从边到内切圆半径，然后是一次乘法。在这些例子中 r 和 s 是从边长推导出来的；计算器本身直接接受 r 和 s。" },
          { "kind": "h3", "text": "示例 1：3-4-5 直角三角形" },
          { "kind": "p", "text": "已知 [[a=3]]、[[b=4]]、[[c=5]]。第 1 步：计算半周长，[[s=\\frac{3+4+5}{2}]]，[[s=6]]。第 2 步：计算内切圆半径，[[r=\\frac{3+4-5}{2}]]，[[r=1]]。第 3 步：计算面积，[[K=1\\times6]]，[[[\\boxed{K=6\\text{ square units}}]]]。用直角边公式验证：[[K=\\frac{3\\times4}{2}=6]]。" },
          { "kind": "h3", "text": "示例 2：5-12-13 直角三角形" },
          { "kind": "p", "text": "已知 [[a=5]]、[[b=12]]、[[c=13]]。半周长：[[s=\\frac{5+12+13}{2}=15]]。内切圆半径：[[r=\\frac{5+12-13}{2}=2]]。面积：[[K=2\\times15]]，[[[\\boxed{K=30\\text{ square units}}]]]。验证：[[K=\\frac{5\\times12}{2}=30]]。" },
          { "kind": "h3", "text": "示例 3：8-15-17 直角三角形" },
          { "kind": "p", "text": "已知 [[a=8]]、[[b=15]]、[[c=17]]。半周长：[[s=\\frac{8+15+17}{2}=20]]。内切圆半径：[[r=\\frac{8+15-17}{2}=3]]。面积：[[K=3\\times20]]，[[[\\boxed{K=60\\text{ square units}}]]]。验证：[[K=\\frac{8\\times15}{2}=60]]。" },
          { "kind": "h3", "text": "示例 4：7-24-25 直角三角形" },
          { "kind": "p", "text": "已知 [[a=7]]、[[b=24]]、[[c=25]]。半周长：[[s=\\frac{7+24+25}{2}=28]]。内切圆半径：[[r=\\frac{7+24-25}{2}=3]]。面积：[[K=3\\times28]]，[[[\\boxed{K=84\\text{ square units}}]]]。验证：[[K=\\frac{7\\times24}{2}=84]]。" },
          { "kind": "h3", "text": "例题对比" }
        ],
        "table": {
          "headers": ["三角形", "直角边 a", "直角边 b", "斜边 c", "内切圆半径 r", "半周长 s", "面积 K"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "用内切圆半径和半周长求直角三角形面积的实际应用",
        "blocks": [
          { "kind": "p", "text": "十二个完整算例把公式从纸面带到车间、工地和工作室。每一个都点出一块直角三角形面板、截面、型材或简化模型，把内切圆半径和半周长代入公式算一遍，并说明数字背后的假设。这些都是简化的直角三角形模型：现实中的窗户、屋顶、花坛、坡道、船帆或地块并不都是精确的直角三角形，不规则物体在套用公式之前必须先分成更简单的形状。面积只描述平面的几何表面，它本身绝不能证明结构强度、承载能力或施工安全。" },
          { "kind": "h3", "text": "示例 1：三角形玻璃窗" },
          { "kind": "p", "text": "一扇三角形玻璃窗的三条边为 [[a=3\\text{ m}]]、[[b=4\\text{ m}]]、[[c=5\\text{ m}]]。半周长：[[s=\\frac{3+4+5}{2}=6\\text{ m}]]。内切圆半径：[[r=\\frac{3+4-5}{2}=1\\text{ m}]]。面积：[[K=1\\times6]]，[[[\\boxed{K=6\\text{ m}^2}]]]。结果表示扣除窗框余量之前的平面三角形玻璃面积。假设：窗格是真正的直角三角形，窗框尺寸另行处理。" },
          { "kind": "h3", "text": "示例 2：钢支架" },
          { "kind": "p", "text": "一块三角形钢支撑板的三条边为 [[a=5\\text{ cm}]]、[[b=12\\text{ cm}]]、[[c=13\\text{ cm}]]。半周长：[[s=\\frac{5+12+13}{2}=15\\text{ cm}]]。内切圆半径：[[r=\\frac{5+12-13}{2}=2\\text{ cm}]]。面积：[[K=2\\times15]]，[[[\\boxed{K=30\\text{ cm}^2}]]]。这是平面钢板面积，不能证明它的结构强度。假设：支架毛坯按直角三角形切割，螺栓孔和折弯不计在内。" },
          { "kind": "h3", "text": "示例 3：屋顶支撑截面" },
          { "kind": "p", "text": "一个直角三角形屋顶支撑截面的三条边为 [[a=8\\text{ ft}]]、[[b=15\\text{ ft}]]、[[c=17\\text{ ft}]]。半周长：[[s=\\frac{8+15+17}{2}=20\\text{ ft}]]。内切圆半径：[[r=\\frac{8+15-17}{2}=3\\text{ ft}]]。面积：[[K=3\\times20]]，[[[\\boxed{K=60\\text{ ft}^2}]]]。公式度量的是平面三角形支撑截面，可用于估算材料。假设：该截面建模为直角三角形，屋顶的整体几何可能不同。" },
          { "kind": "h3", "text": "示例 4：三角形花坛" },
          { "kind": "p", "text": "一块简化的直角三角形花坛的三条边为 [[a=7\\text{ m}]]、[[b=24\\text{ m}]]、[[c=25\\text{ m}]]。半周长：[[s=28\\text{ m}]]。内切圆半径：[[r=3\\text{ m}]]。面积：[[K=3\\times28]]，[[[\\boxed{K=84\\text{ m}^2}]]]。面积有助于估算三角形绿化区域，比如订购草皮或覆盖物时。假设：花坛边界是直线并以直角相交。" },
          { "kind": "h3", "text": "示例 5：三角形坡道剖面" },
          { "kind": "p", "text": "一个简化的坡道侧剖面的三条边为 [[a=9\\text{ m}]]、[[b=12\\text{ m}]]、[[c=15\\text{ m}]]。半周长：[[s=\\frac{9+12+15}{2}=18\\text{ m}]]。内切圆半径：[[r=\\frac{9+12-15}{2}=3\\text{ m}]]。面积：[[K=3\\times18]]，[[[\\boxed{K=54\\text{ m}^2}]]]。这度量的是三角形侧剖面，不是倾斜的坡道表面。假设：剖面在底部按直角建模。" },
          { "kind": "h3", "text": "示例 6：胶合板切割模板" },
          { "kind": "p", "text": "一块直角三角形胶合板模板的三条边为 [[a=12\\text{ cm}]]、[[b=16\\text{ cm}]]、[[c=20\\text{ cm}]]。半周长：[[s=24\\text{ cm}]]。内切圆半径：[[r=4\\text{ cm}]]。面积：[[K=4\\times24]]，[[[\\boxed{K=96\\text{ cm}^2}]]]。计算估算的是切割损耗之前的平面材料面积。假设：模板是真正的直角三角形，锯路和边角料另计。" },
          { "kind": "h3", "text": "示例 7：三角形标牌" },
          { "kind": "p", "text": "一块三角形标牌的三条边为 [[a=20\\text{ cm}]]、[[b=21\\text{ cm}]]、[[c=29\\text{ cm}]]。半周长：[[s=\\frac{20+21+29}{2}=35\\text{ cm}]]。内切圆半径：[[r=\\frac{20+21-29}{2}=6\\text{ cm}]]。面积：[[K=6\\times35]]，[[[\\boxed{K=210\\text{ cm}^2}]]]。这表示标牌平面的可印刷面积。假设：标牌面是平的直角三角形，安装五金件不计在内。" },
          { "kind": "h3", "text": "示例 8：土地测量区块" },
          { "kind": "p", "text": "一块简化的直角三角形地块的三条边为 [[a=9\\text{ m}]]、[[b=40\\text{ m}]]、[[c=41\\text{ m}]]。半周长：[[s=45\\text{ m}]]。内切圆半径：[[r=4\\text{ m}]]。面积：[[K=4\\times45]]，[[[\\boxed{K=180\\text{ m}^2}]]]。公式计算的是所测三角形区块的面积。假设：该区块按直角建模，不规则地块需要细分成更简单的形状。" },
          { "kind": "h3", "text": "示例 9：三角形布帆" },
          { "kind": "p", "text": "一块直角三角形布料的三条边为 [[a=15\\text{ ft}]]、[[b=20\\text{ ft}]]、[[c=25\\text{ ft}]]。半周长：[[s=30\\text{ ft}]]。内切圆半径：[[r=5\\text{ ft}]]。面积：[[K=5\\times30]]，[[[\\boxed{K=150\\text{ ft}^2}]]]。结果不含缝份、折边和材料余量。假设：船帆按平面建模，真实的帆在受力时会弯曲。" },
          { "kind": "h3", "text": "示例 10：工业支撑板" },
          { "kind": "p", "text": "一块直角三角形工业板的三条边为 [[a=11\\text{ m}]]、[[b=60\\text{ m}]]、[[c=61\\text{ m}]]。半周长：[[s=66\\text{ m}]]。内切圆半径：[[r=5\\text{ m}]]。面积：[[K=5\\times66]]，[[[\\boxed{K=330\\text{ m}^2}]]]。结果描述的是平面几何板材，而不是它的结构性能。假设：板材建模为直角三角形，厚度和固定件是另外的问题。" },
          { "kind": "h3", "text": "示例 11：仓库屋顶端部截面" },
          { "kind": "p", "text": "一个简化的仓库屋顶端部截面的三条边为 [[a=13\\text{ ft}]]、[[b=84\\text{ ft}]]、[[c=85\\text{ ft}]]。半周长：[[s=91\\text{ ft}]]。内切圆半径：[[r=6\\text{ ft}]]。面积：[[K=6\\times91]]，[[[\\boxed{K=546\\text{ ft}^2}]]]。结果估算的是三角形端部截面，比如给覆层报价时用。假设：山墙端部建模为直角三角形。" },
          { "kind": "h3", "text": "示例 12：大型加工板" },
          { "kind": "p", "text": "一块直角三角形加工板的三条边为 [[a=28\\text{ cm}]]、[[b=45\\text{ cm}]]、[[c=53\\text{ cm}]]。半周长：[[s=\\frac{28+45+53}{2}=63\\text{ cm}]]。内切圆半径：[[r=\\frac{28+45-53}{2}=10\\text{ cm}]]。面积：[[K=10\\times63]]，[[[\\boxed{K=630\\text{ cm}^2}]]]。这个方法直接从圆和边界测量值得出板材的平面三角形面积。假设：板材边缘是直线并以直角相交。" },
          { "kind": "h3", "text": "实际示例对比" }
        ],
        "table": {
          "headers": ["实际应用", "直角边 a", "直角边 b", "斜边 c", "内切圆半径 r", "半周长 s", "计算面积", "测量单位"],
          "rows": [
            ["玻璃窗", "3", "4", "5", "1", "6", "6", "m²"],
            ["钢支架", "5", "12", "13", "2", "15", "30", "cm²"],
            ["屋顶支撑", "8", "15", "17", "3", "20", "60", "ft²"],
            ["花坛", "7", "24", "25", "3", "28", "84", "m²"],
            ["坡道剖面", "9", "12", "15", "3", "18", "54", "m²"],
            ["胶合板模板", "12", "16", "20", "4", "24", "96", "cm²"],
            ["标牌", "20", "21", "29", "6", "35", "210", "cm²"],
            ["测量区块", "9", "40", "41", "4", "45", "180", "m²"],
            ["布帆", "15", "20", "25", "5", "30", "150", "ft²"],
            ["工业板", "11", "60", "61", "5", "66", "330", "m²"],
            ["仓库屋顶端部", "13", "84", "85", "6", "91", "546", "ft²"],
            ["加工板", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "为什么内切圆半径公式与直角边公式给出相同的面积？",
        "blocks": [
          { "kind": "p", "text": "两个不同的公式，一个三角形，一个面积。从 [[K=rs]] 和直角三角形的标准面积 [[K=\\frac{ab}{2}]] 出发，必然得到 [[[\\boxed{rs=\\frac{ab}{2}}]]]。两边用不同的几何信息度量同一块被围住的表面：一个读内切圆和边界，另一个读两条互相垂直的直角边。" },
          { "kind": "h3", "text": "用 3-4-5 三角形做数值对比" },
          { "kind": "p", "text": "内切圆半径法：[[r=1]]、[[s=6]]，所以 [[K=1\\times6=6]]。直角边法：[[K=\\frac{3\\times4}{2}=6]]。答案一致，因为内切圆半径和半周长编码的边信息与直角边相同：[[r=\\frac{a+b-c}{2}]] 和 [[s=\\frac{a+b+c}{2}]] 都是由 [[a]]、[[b]]、[[c]] 构成的，所以它们的乘积必然还原出直角边所描述的面积。这里的一致不是巧合，而是代数。" },
          { "kind": "h3", "text": "内切圆半径法什么时候更管用？" },
          { "kind": "p", "text": "当 r 和 s 已经在手边时，内切圆半径法胜出。关于内切圆的几何题会直接给出内切圆半径。需要把面积用圆的度量表达的证明会自然地使用 [[K=rs]]。竞赛题常常把半周长作为已知条件给出。而作为交叉检验，用两种独立的方法算面积，能抓住单一方法会掩盖的算术失误。每种情况下关键都是输入的便利：从你已有的测量出发。" },
          { "kind": "h3", "text": "直角边公式什么时候更简单？" },
          { "kind": "p", "text": "如果两条互相垂直的直角边已知，[[K=\\frac{ab}{2}]] 通常更直接：一次乘法、一次减半，不需要先算出中间的 r 或 s。先推导内切圆半径和半周长再相乘，多了两个于事无补的步骤。半周长法并不总是最近的路；当内切圆或边界是自然的起点时，它是最佳路线；当直角边就摆在眼前时，它就是绕远路。" }
        ]
      },
      "sec-heron": {
        "h2": "海伦公式与面积 = 内切圆半径 × 半周长有什么区别？",
        "blocks": [
          { "kind": "p", "text": "海伦公式从三条边长计算面积：[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]。它需要半周长但不需要内切圆半径，对任何有效三角形都成立。内切圆半径公式 [[[\\boxed{K=rs}]]] 需要的则是内切圆半径和半周长，而不是三条边。区别在输入，不在几何：两者返回的是同一块被围住的面积，因为两个公式通过 [[r=\\frac{K}{s}]] 联系在一起。三条边都已知、没有圆的数据时，海伦公式是自然的选择；内切圆是题目的一部分时，内切圆半径公式更自然。" },
          { "kind": "h3", "text": "对比算例" },
          { "kind": "p", "text": "用 3-4-5 三角形。海伦公式：[[s=6]]，[[K=\\sqrt{6(6-3)(6-4)(6-5)}]]，[[K=\\sqrt{6\\times3\\times2\\times1}]]，[[[\\boxed{K=6}]]]。内切圆半径公式：[[K=1\\times6]]，[[[\\boxed{K=6}]]]。答案吻合，因为海伦表达式经过同样的三分三角形分解可以化简为 [[r\\times s]]：只要 r 和 s 来自同一个三角形，[[s(s-a)(s-b)(s-c)]] 的平方根就等于 [[rs]]。不过别把两个工具搞混：海伦公式从不索要内切圆半径，而内切圆半径简便公式 [[r=\\frac{a+b-c}{2}]] 只属于直角三角形。" }
        ]
      },
      "sec-consistency": {
        "h2": "如何检验内切圆半径和半周长是否有效",
        "blocks": [
          { "kind": "p", "text": "计算器接受两个值并相乘，但只有当两个值描述同一个三角形时，乘积才是直角三角形的面积。下面的检查把有效输入和冒牌货区分开。" },
          { "kind": "h3", "text": "基本输入条件" },
          { "kind": "p", "text": "两个输入都必须为正：[[r>0]] 和 [[s>0]]。长度不能为零或负数，所以非正的输入没有几何意义。零会把三角形压成一条没有面积的线，负值什么也描述不了。凡是通不过这项测试的输入，都要重新测量或重新推导。" },
          { "kind": "h3", "text": "半周长必须大于内切圆半径" },
          { "kind": "p", "text": "在有效三角形中，半周长远大于内切圆半径。从 [[K=rs]]、直角边为正时的 [[K=\\frac{ab}{2}]]，以及内切圆装进三角形的几何来看，[[s]] 永远明显大于 [[r]]：3-4-5 三角形中是 6 对 1，5-12-13 三角形中是 15 对 2。这些值还必须对应一组有效的三条边，所以这个比较只是快速筛选，不是全部验证。比半周长还大的内切圆半径不可能来自任何三角形。" },
          { "kind": "h3", "text": "进阶的直角三角形一致性检验" },
          { "kind": "p", "text": "更严格的测试要求直角三角形满足 [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]]，约等于 [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]]。想法很简单：给定 r 和 s，两条直角边必须是根据 [[a+b=s+r]] 和 [[ab=2rs]] 建立的二次方程的正数解，而这个方程只有在判别式非负时才有实数解。判别式条件化简后恰好就是这个界。用 3-4-5 检验：[[\\frac{1}{6}\\approx0.1667\\leq0.1716]]，有效。这是给细致工作的可选加分项，不是初学者计算的必备部分。" },
          { "kind": "h3", "text": "输入不一致时会发生什么？" },
          { "kind": "p", "text": "两个正数相乘总会得到一个数值结果，但这不能证明它们是同一个直角三角形的内切圆半径和半周长。一个三角形的 r 配上另一个三角形的 s，乘积再整齐也没有几何意义。除非计算器的实现已经过验证行为测试，否则不要假设它会检查这种关系：自己动手做上面的检查，边长已知时从边重新算出 r 和 s，再用直角边公式交叉检验面积。" }
        ]
      },
      "sec-units": {
        "h2": "测量单位如何影响内切圆半径和半周长的计算",
        "blocks": [
          { "kind": "p", "text": "内切圆半径和半周长都是长度，所以它们遵循与其他任何长度测量相同的单位规则。答案里的平方单位来自两个长度单位的乘积，这让\"单位一致\"成了整场游戏。" },
          { "kind": "h3", "text": "为什么两个输入必须使用兼容的单位？" },
          { "kind": "p", "text": "乘积 [[K=r\\times s]] 是长度乘以长度。如果 r 用厘米、s 用米，乘积就把两种尺度搅在一起，数字没有干净的意义。先换算，让两个输入共用一个单位：米、厘米、毫米、英尺、英寸或码，但两个必须相同。计算器里的单位选择器就是为此准备的：输入数字之前先设置好。" },
          { "kind": "h3", "text": "单位换算例题" },
          { "kind": "p", "text": "已知 [[r=10\\text{ cm}]] 和 [[s=1\\text{ m}]]。换算半周长：[[1\\text{ m}=100\\text{ cm}]]。然后 [[K=10\\times100]]，[[[\\boxed{K=1000\\text{ cm}^2}]]]。或者换算内切圆半径：[[10\\text{ cm}=0.1\\text{ m}]]，然后 [[K=0.1\\times1]]，[[[\\boxed{K=0.1\\text{ m}^2}]]]。两个答案描述的是同一块面积，因为 [[0.1\\text{ m}^2=1000\\text{ cm}^2]]。先换算、后相乘，两条单位路线都走得到。" },
          { "kind": "h3", "text": "为什么结果用平方单位表示？" },
          { "kind": "p", "text": "面积数的是覆盖表面的单位正方形：[[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]、[[\\text{m}\\times\\text{m}=\\text{m}^2]]、[[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]。单位永远是长度单位的平方，因为两个长度的乘积就是正方形的个数。把面积报成 1000 cm 这样的纯长度是概念错误：1000 cm 是长度，1000 cm² 才是表面。" },
          { "kind": "h3", "text": "处理小数值" },
          { "kind": "p", "text": "公式处理小数不需要任何改动。已知 [[r=2.5]]、[[s=8.4]]：[[K=2.5\\times8.4]]，[[[\\boxed{K=21\\text{ square units}}]]]。整数、小数和精细的车间测量都走同一道乘法。计算全程保持完整精度，只在最后按测量精度对答案取整。" }
        ]
      },
      "sec-mistakes": {
        "h2": "用半周长计算直角三角形面积时的常见错误",
        "blocks": [
          { "kind": "p", "text": "这个主题里几乎每个错误答案都源于标签混淆，而不是算术不好。下面十六个错误是反复出现的，每一个都附带原因和修正方法。" },
          { "kind": "h3", "text": "1. 把半周长当成完整周长" },
          { "kind": "p", "text": "把 [[P=12]] 填在该填 [[s=6]] 的地方，答案翻倍：得到 [[1\\times12=12]] 而不是 6。错误的原因是日常语言说\"周长\"，而公式要的是它的一半。修正：输入前永远先把边界和减半，并检查输入的 s 比周长小。" },
          { "kind": "h3", "text": "2. 用外接圆半径代替内切圆半径" },
          { "kind": "p", "text": "3-4-5 三角形的外接圆半径是 [[R=\\frac{5}{2}=2.5]]；用它会得到 [[2.5\\times6=15]]，接近真实面积的三倍。错误源于两个圆都叫\"半径\"。修正：确认半径属于三角形内部、与三条边都相切的圆，而不是经过顶点的那个圆。" },
          { "kind": "h3", "text": "3. 半周长算错了" },
          { "kind": "p", "text": "只加两条边，或者先把每条边除以二再加，都会得到错误的 s。对 3-4-5，只加 3 + 4 再除得到 3.5，[[1\\times3.5=3.5]] 毫无意义。修正：先把三条边加起来，再除一次：[[s=\\frac{a+b+c}{2}]]。" },
          { "kind": "h3", "text": "4. 把最终结果又除了一次二" },
          { "kind": "p", "text": "在 [[K=1\\times6=6]] 之后多除一次得到 3。这个习惯来自除法写在明处的直角边公式。修正：记住所有的二分之一已经被吸收进半周长，[[K=r\\times s]] 已经完整。" },
          { "kind": "h3", "text": "5. 用了错误的直角三角形内切圆半径公式" },
          { "kind": "p", "text": "猜成 [[r=\\frac{c-a-b}{2}]] 或 [[r=\\frac{a+b}{2}]] 会得到错误的半径。对 3-4-5，[[\\frac{5-3-4}{2}=-1]] 连长度都不是。修正：a、b 为直角边、c 为斜边，严格按这个安排使用 [[r=\\frac{a+b-c}{2}]]。" },
          { "kind": "h3", "text": "6. 把直角三角形的内切圆半径简便公式用在普通三角形上" },
          { "kind": "p", "text": "简便公式依赖直角，用在一般三角形上算出的是没有几何意义的数。修正：非直角三角形用 [[r=\\frac{K}{s}]] 或与已知测量匹配的公式求内切圆半径，绝不用 [[r=\\frac{a+b-c}{2}]]。" },
          { "kind": "h3", "text": "7. 内切圆半径和半周长来自不同的三角形" },
          { "kind": "p", "text": "从 3-4-5 三角形取 r = 1，又从 5-12-13 三角形取 s = 15，得到 15，这个乘积不描述任何真实三角形。错误发生在从不同例题或不同图形里抄数值的时候。修正：乘法之前，先从同一个三角形推导或测量两个输入。" },
          { "kind": "h3", "text": "8. 厘米和米混用" },
          { "kind": "p", "text": "r = 10 cm 乘以 s = 1 m 而不换算，得到的是 10 个说不清的东西。修正：先统一到一个单位：[[1\\text{ m}=100\\text{ cm}]]，再算 [[K=10\\times100=1000\\text{ cm}^2]]。" },
          { "kind": "h3", "text": "9. 结果用了线性单位" },
          { "kind": "p", "text": "6 m² 的面积不是 6 m。错误通常来自照抄输入单位却忘了平方。修正：每次都在数字旁边写上平方单位：m²、cm²、ft²。" },
          { "kind": "h3", "text": "10. 输入了零或负的测量值" },
          { "kind": "p", "text": "长度是正数。零会把三角形压成一条没有面积的线，负长度在这里没有几何意义。修正：重新测量或重新推导输入，计算前拒绝非正值。" },
          { "kind": "h3", "text": "11. 把内心和外心搞混" },
          { "kind": "p", "text": "内心是角平分线的交点，外心是边的中垂线的交点。对直角三角形，外心在斜边的中点，是完全不同的点。搞混会导致量错半径。修正：内心 [[I]] 在三角形内部，到边的距离相等，而不是到顶点。" },
          { "kind": "h3", "text": "12. 以为内切圆只和两条边相切" },
          { "kind": "p", "text": "卡在角落里的圆只碰两条边，但那不是内切圆。内切圆三条边都碰，面积证明需要全部三个切点。修正：把一条半径当内切圆半径之前，先确认三个接触点，每条边一个。" },
          { "kind": "h3", "text": "13. 忘了半径与每条切边都垂直" },
          { "kind": "p", "text": "证明里的公共高论证依赖 [[r\\perp a]]、[[r\\perp b]]、[[r\\perp c]]。从内心到边的斜线段比 r 长，不能充当高。修正：永远沿着边的垂线方向量内切圆半径，绝不沿斜线。" },
          { "kind": "h3", "text": "14. 把内切圆半径当成直径" },
          { "kind": "p", "text": "把内切圆的整个宽度当 r 输入，半径翻倍，面积也翻倍。对 3-4-5 三角形，输入 2 而不是 1 会得到 [[2\\times6=12]]。修正：内切圆半径从圆心到一条边，是圆整个宽度的一半。" },
          { "kind": "h3", "text": "15. 海伦公式用错了" },
          { "kind": "p", "text": "常见失误包括漏掉平方根、写成 [[s(s+a)(s+b)(s+c)]] 这样的加号，或者把完整周长塞进公式。对 3-4-5，漏掉根号会得到 36 而不是 6。修正：[[K=\\sqrt{s(s-a)(s-b)(s-c)}]]，半周长、减号、根号一个都不能少。" },
          { "kind": "h3", "text": "16. 以为算出数字就自动证明了输入几何一致" },
          { "kind": "p", "text": "任意两个正数都能相乘，所以计算器永远会吐出一个数。只有当 r 和 s 真的属于同一个三角形时，这个数才是直角三角形的面积。修正：做一致性检查，能从边算就从边重新算出 r 和 s，信这个数字之前先用直角边公式交叉检验。" },
          { "kind": "h3", "text": "错与对：一个具体例子" },
          { "kind": "p", "text": "用 [[r=1]]、[[s=6]]。正确：[[K=1\\times6=6]]。错误地再除以二：[[K=\\frac{1\\times6}{2}=3]]，错在减半已经含在半周长里。错误地输入完整周长 12 而不是半周长 6：[[K=1\\times12=12]]，是真实面积的两倍。三种情况的算术看起来都很自信，只有几何能把它们区分开。" }
        ]
      },
      "sec-verify": {
        "h2": "如何检验你的直角三角形面积是否正确",
        "blocks": [
          { "kind": "p", "text": "六个独立的检查，都在 3-4-5 三角形上演示（[[a=3]]、[[b=4]]、[[c=5]]、[[r=1]]、[[s=6]]、[[K=6]]）。不同路线之间的一致，是答案正确的最强证据，做作业和实际测量都一样。" },
          { "kind": "h3", "text": "方法 1：检查主公式" },
          { "kind": "p", "text": "重新跑一遍 [[K=r\\times s]]：[[K=1\\times6=6]]。把数字重新输一遍再算一次，能抓住笔误和按错的键。" },
          { "kind": "h3", "text": "方法 2：从三条边计算半周长" },
          { "kind": "p", "text": "从边重新算 [[s=\\frac{a+b+c}{2}]]：[[s=\\frac{3+4+5}{2}=6]]。如果重算的 s 和输入的不一样，说明输入错了，乘积必须重做。" },
          { "kind": "h3", "text": "方法 3：从直角三角形计算内切圆半径" },
          { "kind": "p", "text": "重新算 [[r=\\frac{a+b-c}{2}]]：[[r=\\frac{3+4-5}{2}=1]]。和输入的 r 对不上，说明半径来自另一个三角形或用错了公式。" },
          { "kind": "h3", "text": "方法 4：用标准直角边公式验证" },
          { "kind": "p", "text": "算 [[K=\\frac{ab}{2}]]：[[K=\\frac{3\\times4}{2}=6]]。这条路用的输入完全不同，所以它和 [[rs]] 的一致同时验证了输入和算术。" },
          { "kind": "h3", "text": "方法 5：用海伦公式验证" },
          { "kind": "p", "text": "算 [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]：[[K=\\sqrt{6\\times3\\times2\\times1}=6]]。海伦公式把边和半周长一起练一遍，能抓住其他检查可能漏掉的边标签错误。" },
          { "kind": "h3", "text": "方法 6：检查勾股定理" },
          { "kind": "p", "text": "确认 [[a^2+b^2=c^2]]：[[3^2+4^2=9+16=25=5^2]]。这检查的是其他所有计算背后的边认定；斜边错了就意味着某条边标错了，r、s、K 都要重建。" }
        ]
      },
      "sec-applications": {
        "h2": "内切圆半径与半周长公式的实际应用",
        "blocks": [
          { "kind": "p", "text": "同样的双输入模式出现在任何需要测量三角形面板或截面、而内切圆数据又是最顺手的起点的地方。玻璃工按边长给窗户定尺寸，加工商读出支架毛坯的直角边，测量员把地块拐角化成三条直线。从这些边得出内切圆半径和半周长，一次乘法就命名了面积。下面四个面板在不同尺度上展示这个模式：一扇玻璃窗（6 m²）、一个屋顶支撑（60 ft²）、一块花坛（84 m²）和一块钢板（30 cm²），每个都标着它的内切圆半径、半周长和得出的面积。" }
        ],
        "imgAlt": "四个面板：玻璃窗 6 m2、屋顶支撑 60 ft2、花坛 84 m2、钢板 30 cm2",
        "figcaption": "四个实际用途：玻璃窗、屋顶支撑、花坛和钢板。"
      },
      "sec-conclusion": {
        "h2": "两个测量值，一次乘法",
        "blocks": [
          { "kind": "p", "text": "一个内切圆半径加一个半周长就够了。乘起来，被围住的表面就有了名字。三分三角形的证明说明了乘法之后为什么不再有除法，切线段的论证说明了直角三角形为什么有内切圆半径简便公式，直角边公式和海伦公式则随时待命检验每一个答案。" },
          { "kind": "p", "text": "工作习惯很简单：确认两个输入描述同一个三角形，统一单位，小数留到最后再取整，再用第二种方法验证。有了这些习惯，[[K=r\\times s]] 就是几何里最可靠的面积计算之一。" }
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
        "blocks": []
      }
    }
  }
};
