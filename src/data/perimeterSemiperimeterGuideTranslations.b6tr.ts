export const B6_TR = {
  "tr": {
    "tocHeading": "Bu kılavuzda",
    "tocItems": {
      "sec-intro": "Dik Üçgende Çevre ve Yarı Çevre Nasıl Hesaplanır",
      "sec-right-triangle": "Dik Üçgen Nedir?",
      "sec-perimeter": "Dik Üçgenin Çevresi Nedir?",
      "sec-semiperimeter": "Dik Üçgenin Yarı Çevresi Nedir?",
      "sec-difference": "Çevre ile Yarı Çevre Arasındaki Fark Nedir?",
      "sec-modes": "Hesaplayıcının İki Modunu Anlama",
      "sec-howto": "Dik Üçgen Çevre ve Yarı Çevre Hesaplayıcısı Nasıl Kullanılır",
      "sec-examples": "Dik Üçgen Çevre ve Yarı Çevre Adım Adım Örnekleri",
      "sec-practical": "Dik Üçgen Çevre ve Yarı Çevrenin Gerçek Hayatta Kullanımları",
      "sec-missing-side": "Bir Kenar Eksikken Çevre Nasıl Hesaplanır",
      "sec-pythagoras": "Pisagor Teoremi Dik Üçgen Çevresiyle Nasıl İlişkilidir?",
      "sec-advanced": "Yarı Çevre Diğer Üçgen Formüllerinde Nasıl Kullanılır?",
      "sec-perimeter-area": "Çevre ile Alan Arasındaki Fark Nedir?",
      "sec-units": "Çevre ve Yarı Çevre Hesaplamalarında Ölçü Birimlerini Anlama",
      "sec-scaling": "Kenar Uzunluklarındaki Değişiklikler Çevre ve Yarı Çevreyi Nasıl Etkiler?",
      "sec-applications": "Dik Üçgen Çevresinin Pratik Uygulamaları",
      "sec-mistakes": "Dik Üçgen Çevre ve Yarı Çevre Hesaplarken Yapılan Yaygın Hatalar",
      "sec-verify": "Dik Üçgen Çevrenizin Doğru Olduğu Nasıl Kontrol Edilir",
      "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "sec-faq": "Sık Sorulan Sorular",
      "sec-conclusion": "Tek Sınır, İki Yararlı Ölçü"
    },
    "sections": {
      "sec-intro": {
        "h2": "Dik Üçgende Çevre ve Yarı Çevre Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]] alalım. Çevre [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]] olur. Yarı çevre [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]] olur. Dik Üçgen Çevre ve Yarı Çevre Hesaplayıcısı bu üç giriş için tam olarak bu değerleri döndürür." },
          { "kind": "p", "text": "Çevre, üçgenin tam sınırını tanımlar: üç kenarı da yürüyüp başlangıç noktasına döndüğünüzde kat edeceğiniz toplam uzunluk. Yarı çevre, bu sayısal toplamın yarısıdır. İkisi de uzunluktur; metre, santimetre, fit veya inç gibi birimlerle ölçülür. Hiçbiri alan değildir ve hiçbiri kare birimlerle ifade edilmez." },
          { "kind": "p", "text": "Üç kenar ölçüsü gerekir, çünkü sınırın üç kenarı vardır ve hipotenüs de dahil edilmelidir: dik açıya hiç değmese de üç kenardan biridir. Yarı çevre, çevrenin yarısıdır, çünkü Heron formülü ve iç yarıçap bağıntısı dahil birçok ileri formül tüm sınır yerine sınırın yarısı üzerine kuruludur. Bu iki hesap, üçgen bir dış çizginin ölçülmesi gereken her yerde işe yarar: bir bahçeyi çevrelerken, bir çerçeveyi kaplarken ya da daha uzun bir problemde bir sonraki formüle uzunluk girerken." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Dik Üçgen Nedir?",
        "blocks": [
          { "kind": "p", "text": "Toplamaya başlamadan önce üç kenar hatasız etiketlenmelidir. Aşağıdaki semboller kılavuzun tamamında sabit kalır ve hesaplayıcı da aynı adları kullanır." },
          { "kind": "h3", "text": "Dik Üçgen Tanımı" },
          { "kind": "p", "text": "Dik üçgen, içinde tam olarak bir tane 90 derecelik iç açı barındıran üç kenarlı bir çokgendir. Üç köşesi, üç kenarı, iki dar açısı ve genellikle küçük bir kare ile işaretlenen bir dik açısı vardır. Dik açıyı oluşturan iki kenar dik kenarlardır; karşıdaki kenar hipotenüstür. Her üçgenin açıları toplamı 180 derece olduğundan, [[A+B+C=180^\\circ]] ve [[C=90^\\circ]] ile [[[\\boxed{A+B=90^\\circ}]]] elde edilir: iki dar açı tümlerdir, yani birini bilmek diğerini belirler." },
          { "kind": "h3", "text": "İki Dik Kenar Nedir?" },
          { "kind": "p", "text": "[[a]] kenarı [[A]] açısının karşısındadır; [[b]] kenarı [[B]] açısının karşısındadır. İki dik kenar dik açının köşesinde buluşur ve birbirine diktir: her biri diğerine 90 derece durur. Üçgenin kare köşesini oluştururlar; duvar köşesi boyunca ya da masa kenarı boyunca ölçeceğiniz türden bir kenardır. Çevre hesaplarında rolleri basittir: ikisi de sınır kenarıdır, bu yüzden ikisi de toplama girer." },
          { "kind": "h3", "text": "Hipotenüs Nedir?" },
          { "kind": "p", "text": "Hipotenüs, dik açının karşısındaki kenardır ve her zaman üçgenin en uzun kenarıdır. Dik açıyı asla oluşturmaz; onun karşısından uzanarak iki dik kenarın uzak uçlarını birleştirir. Konum ve uzunluk bakımından dik kenarlardan farklıdır: dik kenarlar 90 derecede buluşurken, hipotenüs her dik kenarla dar açıda buluşur. Tam çevre hesaplanırken dahil edilmelidir, çünkü üç kenar da sayılmadan sınır tamamlanmış olmaz. İki dik kenar da biliniyorsa, Pisagor teoremi onu [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] ile bulur." },
          { "kind": "h3", "text": "Dik Açı Neden Önemlidir?" },
          { "kind": "p", "text": "Dik açı, üçgeni dik üçgen yapan şeydir ve geri kalan her şey ondan gelir. Şekli bir çizimde veya sahada tanımlar: kare köşeyi bulun, kenar etiketleri yerine oturur. Pisagor teoreminin uygulanabilmesi için gereken koşuldur. İnşaat ölçümlerinde ve mühendislik çizimlerinde dik açı, her şeyin ona göre gönyelendiği referanstır: duvarlar, çerçeveler ve braketler onunla kontrol edilir. Doğrulama için dik açı, üç kenar uzunluğunun [[a^2+b^2=c^2]] aracılığıyla tutması gereken sözdür." },
          { "kind": "h3", "text": "Doğru Kenar Etiketleri Nasıl Belirlenir?" },
          { "kind": "p", "text": "[[a]] ve [[b]] dik kenarlardır, [[c]] hipotenüstür ve yozlaşmamış bir dik üçgende [[c]] en uzun kenardır. Dik açı [[c]]'nin karşısındadır, bu yüzden kare işaretini taşıyan köşe size [[c]]'nin hangi kenar olduğunu söyler: o köşeye değmeyen kenardır. Hızlı bir sıralama kontrolü yardımcı olur: üç sayıyı sıralayın, en büyük olan [[c]] rolünü oynamalıdır. En büyük kenar kare köşenin karşısında değilse etiketler yanlıştır ve üzerine kurulan her hesap da yanlış olur." }
        ],
        "imgAlt": "Dik kenarları a ve b, hipotenüsü c, dik açı işareti ve P = a+b+c, s = (a+b+c)/2 formülleri olan ABC dik üçgeni",
        "figcaption": "Dik kenarları a ve b, hipotenüsü c olan ABC üçgeni ve iki sınır formülü."
      },
      "sec-perimeter": {
        "h2": "Dik Üçgenin Çevresi Nedir?",
        "blocks": [
          { "kind": "p", "text": "Çevre, iki boyutlu bir şeklin dış sınırının çevresindeki toplam mesafedir. Bir üçgen için üç kenar uzunluğunun toplamıdır, [[[\\boxed{P=a+b+c}]]], ve her kenar dahil edilmelidir, çünkü her kenar sınırın parçasıdır. Birini dışarıda bırakırsanız sonuç çevre değil, yarım bir yürüyüş olur." },
          { "kind": "h3", "text": "Hipotenüs Çevreye Neden Dahil Edilir?" },
          { "kind": "p", "text": "Çevre, yalnızca iki dik kenarı değil, tam dış sınırı ölçer. Hipotenüs dik açının karşısında dursa da üç sınır kenarından biri olmaya devam eder: üçgeni yürüyünce hipotenüsü de yürürsünüz. Onu dışarıda bırakmak, kapalı bir üçgenin dış çizgisini değil, kırık bir yolun iki kenarını ölçer. Formülde üç terim vardır, çünkü şeklin üç kenarı vardır; üçgen sayfada ya da zeminde nasıl durursa dursun hiçbir kenar isteğe bağlı değildir." },
          { "kind": "h3", "text": "Çevre Adım Adım Nasıl Hesaplanır" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]] kullanın. Formülde yerine koyun: [[P=3+4+5]]. İlk iki uzunluğu toplayın: [[P=7+5]]. Sonuç: [[[\\boxed{P=12\\text{ units}}]]]. Fiziksel olarak 12 birim, üç kenarın tamamı boyunca uç uca serilmiş bir mezuranın uzunluğudur: üçgenin tam dış çizgisinin tek bir sürekli uzunluk olarak ifadesi." },
          { "kind": "h3", "text": "Çevre Pratik Çalışmada Ne Söyler?" },
          { "kind": "p", "text": "Birçok meslek grubunda tek bir soruyu yanıtlar: dış çizgi ne kadar malzeme tüketir? Buna bordür malzemeleri, pencere pervazları, çit kenarlıkları, koruyucu şeritler, dekoratif çerçeveler, kablo güzergâhları, kumaş bordürleri ve metal kenar profilleri dahildir. Her durumda çevre, tedarikçiye götürülen sayıdır. Üçgenin tam dış çizgisinin uzunluğunu tanımlar, içindeki yüzey miktarını değil: 12 metrelik pervaz, pencerenin kapladığı alan hakkında hiçbir şey söylemez ve bunun için de tasarlanmamıştır." }
        ]
      },
      "sec-semiperimeter": {
        "h2": "Dik Üçgenin Yarı Çevresi Nedir?",
        "blocks": [
          { "kind": "p", "text": "Yarı çevre, üçgenin tam çevresinin tam olarak yarısıdır: [[[\\boxed{s=\\frac{P}{2}}]]]. [[P=a+b+c]] olduğundan, [[[\\boxed{s=\\frac{a+b+c}{2}}]]] elde edilir. Toplama bölmeden önce gelir, çünkü yarı çevre tüm sınırı yarıya böler, her kenarı ayrı ayrı değil. Önce her kenarı bölüp sonra toplamak burada aynı sayıyı verirdi, ancak formül doğru düşünce sırasını belirtir: önce sınırı topla, sonra yarıya böl." },
          { "kind": "h3", "text": "Yarı Çevre Adım Adım Nasıl Hesaplanır" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]] kullanın. Üç kenarı toplayın: [[s=\\frac{3+4+5}{2}]]. Toplamı sadeleştirin: [[s=\\frac{12}{2}]]. Sonuç: [[[\\boxed{s=6\\text{ units}}]]]. Yarı çevre, birkaç önemli üçgen formülünde kullanılan türetilmiş bir geometrik ölçüdür; bir mezura ile doğrudan ölçeceğiniz bir şeyi nadiren tanımlar, bu yüzden hesaplayıcı onu sizin için hesaplar." },
          { "kind": "h3", "text": "Yarı Çevre Geometride Neden Kullanılır?" },
          { "kind": "p", "text": "Heron formülünün, iç yarıçap bağıntısı [[K=rs]]'nin ve genel olarak iç teğet çember geometrisinin doğal değişkenidir. Üçgen alan formülleri sürekli yarılar üretir ve yarı çevre bunların hepsini bir kerede içine alır; bu yüzden ispatlar ve ileri formüller tam çevre yerine onu tercih eder. Bir formül [[s]] istediğinde bunun yerine [[P]] girmek sonucu iki katına çıkarır ya da başka şekilde bozar, bu yüzden ayrımı en baştan net tutmak gerekir." },
          { "kind": "h3", "text": "Yarı Çevre Fiziksel Olarak Sınırın Yarısı mıdır?" },
          { "kind": "p", "text": "Şart değil. Yarı çevre, sayısal çevrenin yarısıdır: çevre 12 iken 6 birim. Üçgenin sınırının yarısını kaplayan sürekli bir fiziksel yolu mutlaka tanımlamaz. Çevrenin tam yürüyüş olduğu gibi yarı çevre olan, kenarlar boyunca tek bir yürüyüş yoktur: yarım bir sayı değil, bir sayı bir rotadır. [[s]]'yi fiziksel bir yarım döngü gibi ele almak kafa karışıklığına yol açar; onu toplamın yarısı, yani formüllerin ihtiyaç duyduğu değer olarak ele alın." },
          { "kind": "h3", "text": "Yarı Çevre En Uzun Kenardan Küçük Olabilir mi?" },
          { "kind": "p", "text": "Hayır. Üçgen eşitsizliği [[a+b>c]] gerektirir: iki kısa kenarın toplamı en uzun kenarı aşmalıdır, yoksa üçgen kapanamaz. Her iki tarafa [[c]] eklemek [[a+b+c>2c]] verir ve yarıya bölmek [[[\\boxed{s>c}]]] verir. Geçerli, yozlaşmamış bir üçgen için yarı çevre en uzun kenardan büyüktür. Bu yararlı bir matematiksel kontroldür: bildirilen bir yarı çevre hipotenüsten küçükse, ölçümler gerçek bir üçgen oluşturamaz." }
        ]
      },
      "sec-difference": {
        "h2": "Çevre ile Yarı Çevre Arasındaki Fark Nedir?",
        "blocks": [
          { "kind": "p", "text": "Çevre: üçgenin çevresindeki toplam uzunluk, [[P=a+b+c]]. Yarı çevre: toplam çevrenin yarısı, [[s=\\frac{a+b+c}{2}]]. Aynı üç kenar, farklı geometrik büyüklükler: biri bütün, diğeri yarım. [[s=\\frac{P}{2}]] ve [[P=2s]] ile ilişkilidirler ve hesaplayıcı iki sembolü asla birbirinin yerine kullanmaz." },
          { "kind": "h3", "text": "Sayısal Karşılaştırma" },
          { "kind": "p", "text": "6-8-10 dik üçgenini kullanın. Çevre: [[P=6+8+10]], [[[\\boxed{P=24}]]]. Yarı çevre: [[s=\\frac{24}{2}]], [[[\\boxed{s=12}]]]. İki sayı her zaman iki kat fark eder: [[s=\\frac{P}{2}]] ve [[P=2s]]. Fark farklı bir şekil ya da farklı bir üçgen değildir; aynı sınırın bir kez sayılması ile yarım sayılması arasındaki farktır." },
          { "kind": "h3", "text": "Hangi Ölçüyü Kullanmalısınız?" },
          { "kind": "p", "text": "Bir nesnenin çevresinde bordürleme, çerçeveleme, kenarlık, çit ve malzeme tahminleri için çevreyi kullanın: sorunun dış çizginin ne kadar malzeme tükettiği olduğu her iş. Heron formülü, iç yarıçap bağıntıları, iç teğet çember hesapları ve üçgen kenar uzunluklarını içeren geometri problemleri için yarı çevreyi kullanın: bir formülün girdi olarak sınırın yarısını istediği her iş. Seçimi görev belirler, tercih değil: pervaz tahmini [[P]], alan ispatı [[s]] ister." },
          { "kind": "h3", "text": "Yarı Çevre Üçgenin Alanının Yarısını mı Ölçer?" },
          { "kind": "p", "text": "Hayır. Çevre de yarı çevre de doğrusal ölçülerdir: metre ya da fit cinsinden uzunluklar, asla metrekare değil. Alan, üçgenin çevrelediği iki boyutlu yüzeyi ölçer ve kare birimler kullanır. Bir uzunluğu yarıya bölmek yine uzunluk verir. Uyarı tekrarı hak ediyor, çünkü adlar ilişkili gibi duruyor: yarı çevre çevrenin yarısıdır, alanın yarısı değil; bir sınırın hiçbir bölünmesi yüzey üretemez." }
        ],
        "imgAlt": "6-8-10 üçgeni: 24 birimlik çevre çubuğunun 12 birimlik yarı çevre çubuğuna yarıya bölünmesi",
        "figcaption": "P = 24'ün s = 12'ye yarıya bölünmesi: önce tam sınır, sonra onun yarısı."
      },
      "sec-modes": {
        "h2": "Hesaplayıcının İki Modunu Anlama",
        "blocks": [
          { "kind": "p", "text": "Hesaplayıcı iki hesabı iki ayrı modda tutar, çünkü aynı üç girişten farklı soruları yanıtlarlar. Modu seçmek, hangi sorunun sorulduğunu seçmektir." },
          { "kind": "h3", "text": "Çevre Hesaplayıcı Modu" },
          { "kind": "p", "text": "Bu mod toplam sınır uzunluğunu hesaplar. Girdiler: [[a]] dik kenarı, [[b]] dik kenarı, [[c]] hipotenüsü. Formül: [[P=a+b+c]]. Çıktı: [[P]] çevresi. Sonuç, üçgen bir dış çizginin çevresinde gereken toplam malzeme uzunluğunu tahmin etmek için yararlıdır: iş kenarlık, pervaz ya da çerçeve ise tedarikçiye götürdüğünüz sayıdır." },
          { "kind": "h3", "text": "Yarı Çevre Hesaplayıcı Modu" },
          { "kind": "p", "text": "Bu mod toplam çevrenin yarısını hesaplar. Girdiler: [[a]] dik kenarı, [[b]] dik kenarı, [[c]] hipotenüsü. Formül: [[s=\\frac{a+b+c}{2}]]. Çıktı: [[s]] yarı çevresi. Sonuç, ileri üçgen hesaplarında ara değer olarak yararlıdır: problem sınırın ötesine devam ettiğinde Heron formülüne ya da iç yarıçap bağıntısına beslediğiniz sayıdır." },
          { "kind": "h3", "text": "Neden İki Ayrı Mod Var?" },
          { "kind": "p", "text": "İki hesap da aynı üç kenar ölçüsünü kullanır ama farklı geometrik büyüklükler döndürür ve bunları karıştırmak bu konuda en yaygın hatalardan biridir. Etiketli iki mod niyeti açık tutar: düğme Calculate Perimeter ya da Calculate Semiperimeter der ve sonuç [[P]] ya da [[s]] olarak etiketlenir. İki mod, kullanıcıları elle hesap yapmaktan kurtarırken iki yanıtı karıştırılamaz tutar. Yarı çevre modunu alan hesaplayıcı olarak tanımlamayın: çıktısı bir uzunluktur ve uzunluk olarak kalır." }
        ]
      },
      "sec-howto": {
        "h2": "Dik Üçgen Çevre ve Yarı Çevre Hesaplayıcısı Nasıl Kullanılır",
        "blocks": [
          { "kind": "p", "text": "Aşağıdaki adımlar, ölçümlerin belirlenmesinden kontrol edilmiş bir sonuca kadar her modun ekran düzenini izler. İki mod aynı üç girişi paylaşır ve yalnızca son hesapta farklılaşır." },
          { "kind": "h3", "text": "Çevre Modu" },
          { "kind": "steps", "steps": [
            "<strong>Perimeter modunu seçin.</strong> Bu, hesaplayıcıya amacın toplam sınır uzunluğu olduğunu söyler.",
            "<strong>a dik kenarını belirleyin.</strong> Bu, dik açıyı oluşturan iki kenardan biridir.",
            "<strong>b dik kenarını belirleyin.</strong> Bu, dik açıyı oluşturan diğer kenardır.",
            "<strong>c hipotenüsünü belirleyin.</strong> Bu, dik açının karşısındaki en uzun kenardır.",
            "<strong>a dik kenarını girin.</strong> Ölçülen uzunluğu ilk alana yazın.",
            "<strong>b dik kenarını girin.</strong> Ölçülen uzunluğu ikinci alana yazın.",
            "<strong>c hipotenüsünü girin.</strong> Ölçülen uzunluğu üçüncü alana yazın.",
            "<strong>Uygun birimleri seçin.</strong> Toplamanın anlamlı olması için üç kenar da tek bir birimi paylaşmalıdır.",
            "<strong>Calculate Perimeter düğmesine tıklayın.</strong> Hesaplayıcı üç kenarı toplar.",
            "<strong>Sonucu gözden geçirin.</strong> Çevrenin en uzun kenarı aştığını doğrulayın.",
            "<strong>Görüntülenen çözüm adımlarını kontrol edin.</strong> Bunlar [[P=a+b+c]] formülünü girilen değerlerle doldurulmuş olarak gösterir.",
            "<strong>Çıktının doğrusal bir ölçü birimi kullandığını doğrulayın.</strong> Metre, santimetre, fit ya da inç: asla kare birim değil."
          ] },
          { "kind": "h3", "text": "Yarı Çevre Modu" },
          { "kind": "steps", "steps": [
            "<strong>Semiperimeter modunu seçin.</strong> Bu, hesaplayıcıya amacın sınırın yarısı olduğunu söyler.",
            "<strong>a dik kenarını girin.</strong> Çevre modundaki belirleme ile aynı.",
            "<strong>b dik kenarını girin.</strong> Dik açıyı oluşturan ikinci kenar.",
            "<strong>c hipotenüsünü girin.</strong> Dik açının karşısındaki en uzun kenar.",
            "<strong>Uyumlu ölçü birimleri seçin.</strong> Üç kenar için tek birim.",
            "<strong>Calculate Semiperimeter düğmesine tıklayın.</strong> Hesaplayıcı üç kenarı toplar ve toplamı yarıya böler.",
            "<strong>Sonucu gözden geçirin.</strong> Çevreden belirgin şekilde küçük olmalıdır.",
            "<strong>Sonucun tam olarak çevrenin yarısı olduğunu doğrulayın.</strong> Çevre modu çıktısına karşı [[s=\\frac{P}{2}]] kontrolü yapın.",
            "<strong>Çözüm adımlarını ve canlı görselleştirmeyi kontrol edin.</strong> Adımlar toplama ve yarıya bölmeyi gösterir; çizim bu sayıların geldiği üçgeni gösterir.",
            "<strong>Yeni bir hesaba başlarken Reset kullanın.</strong> Üç alanı da temiz bir başlangıç için sıfırlar."
          ] },
          { "kind": "p", "text": "Canlı görselleştirme, üçgeni girilen kenarlardan çizer; bu, sayılara güvenilmeden önce yanlış etiketlenmiş bir hipotenüsü yakalamaya yardımcı olur. Formül şeması, her kenarın [[P=a+b+c]] ya da [[s=\\frac{a+b+c}{2}]] içinde nerede durduğunu gösterir. Hiçbir mod iki kenarı kabul etmez: hesaplayıcının üç sınır uzunluğunun tamamına ihtiyacı vardır, bu yüzden eksik bir kenar önce bulunmalıdır; bunu eksik kenar bölümü açıklar." }
        ]
      },
      "sec-examples": {
        "h2": "Dik Üçgen Çevre ve Yarı Çevre Adım Adım Örnekleri",
        "blocks": [
          { "kind": "p", "text": "Bilinen dört Pisagor üçlüsü, iki ölçünün de tam hesabını gösterir. Her biri çevre için üç kenarı toplar, sonra yarı çevre için toplamı yarıya böler. Aritmetik, örüntünün tartışmasız olması için bilerek eksiksiz gösterilmiştir." },
          { "kind": "h3", "text": "Örnek 1: 3-4-5 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=3]], [[b=4]], [[c=5]]. Çevreyi hesaplayın: [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]]. Yarı çevreyi hesaplayın: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]]. İki sonuç da doğrudur, çünkü çevre her sınır kenarını bir kez sayar ve yarı çevre tam olarak bu sayının yarısıdır." },
          { "kind": "h3", "text": "Örnek 2: 6-8-10 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=6]], [[b=8]], [[c=10]]. Çevre: [[P=6+8+10]], [[[\\boxed{P=24\\text{ units}}]]]. Yarı çevre: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ units}}]]]. Üç kenarı da iki katına çıkarmak iki ölçüyü de iki katına çıkarır: 24, 12'nin iki katıdır; 12, 6'nın iki katıdır. Üçgeni ölçeklemek, sınır ölçülerini aynı çarpanla ölçekler." },
          { "kind": "h3", "text": "Örnek 3: 5-12-13 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=5]], [[b=12]], [[c=13]]. Çevre: [[P=5+12+13]], [[[\\boxed{P=30\\text{ units}}]]]. Yarı çevre: [[s=\\frac{30}{2}]], [[[\\boxed{s=15\\text{ units}}]]]. Üçgen eşitsizliği kontrolünün gerektirdiği gibi 15'in hipotenüs 13'ü aştığına dikkat edin." },
          { "kind": "h3", "text": "Örnek 4: 8-15-17 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=8]], [[b=15]], [[c=17]]. Çevre: [[P=8+15+17]], [[[\\boxed{P=40\\text{ units}}]]]. Yarı çevre: [[s=\\frac{40}{2}]], [[[\\boxed{s=20\\text{ units}}]]]. Yine yarı çevre en uzun kenarı geçer: 20'ye karşı 17." },
          { "kind": "h3", "text": "Temel Örneklerin Karşılaştırması" },
          { "kind": "p", "text": "Üçgen boyutları büyüdükçe [[P]] de [[s]] de kenarlarla birlikte büyür. Tablo iki örüntüyü birden gösterir: her satırın çevresi üç kenarının düz toplamıdır ve her satırın çevresi tam olarak yarı çevresinin iki katıdır. 3-4-5 ve 6-8-10 satırları ölçeklemeyi de doğrudan gösterir: her kenar iki katına, iki sınır ölçüsü de iki katına." }
        ],
        "table": {
          "headers": ["Üçgen", "Dik kenar a", "Dik kenar b", "Hipotenüs c", "Çevre P", "Yarı çevre s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["6-8-10", "6", "8", "10", "24", "12"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Dik Üçgen Çevre ve Yarı Çevrenin Gerçek Hayatta Kullanımları",
        "blocks": [
          { "kind": "p", "text": "Çözülmüş on iki durum, sayfadaki iki formülü atölyeye ve sahaya taşır. Her biri basitleştirilmiş bir dik üçgen nesnesini ya da modelini adlandırır, çevre ve yarı çevreyi formüllerle hesaplar ve sonucun pratik okumasını belirtir. Bunlar basitleştirilmiş modellerdir: gerçek hayattaki her pencere, çatı, bahçe, tente, panel ya da destek yapısı tam bir dik üçgen oluşturmaz; düzensiz bir nesne, formüller uygulanmadan önce daha basit şekillere bölünmelidir. Malzeme payları gerekebilir, kesim firesi dahil değildir, eğri sınırlar farklı hesaplar gerektirir, yapısal dayanım yalnızca çevreyle belirlenemez ve malzeme satın almadan önce gerçek inşaat ölçüleri doğrulanmalıdır." },
          { "kind": "h3", "text": "Örnek 1: Üçgen Cam Pencere Çerçevesi" },
          { "kind": "p", "text": "Bir dik üçgen pencere [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]] boyutlarındadır. Çevre: [[P=3+4+5]], [[[\\boxed{P=12\\text{ m}}]]]. Yarı çevre: [[s=\\frac{12}{2}]], [[[\\boxed{s=6\\text{ m}}]]]. On iki metre, pencerenin üçgen dış çizgisinin çevresindeki toplam uzunluktur: gönye ve fire paylarından önce sipariş edilecek çerçeve stoğu." },
          { "kind": "h3", "text": "Örnek 2: Çatı Kenar Kaplaması" },
          { "kind": "p", "text": "Üçgen bir çatı ucu bölümü [[a=6\\text{ ft}]], [[b=8\\text{ ft}]], [[c=10\\text{ ft}]] boyutlarındadır. Çevre: [[P=6+8+10]], [[[\\boxed{P=24\\text{ ft}}]]]. Yarı çevre: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ ft}}]]]. Çevre, çatı ucunun üçgen dış çizgisi çevresindeki kaplama uzunluğunu tahmin eder." },
          { "kind": "h3", "text": "Örnek 3: Bahçe Bordürü" },
          { "kind": "p", "text": "Dik üçgen bir bahçe bölümü [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]] boyutlarındadır. Çevre: [[P=5+12+13]], [[[\\boxed{P=30\\text{ m}}]]]. Yarı çevre: [[s=15\\text{ m}]]. Çevre, bölümün çevresindeki bahçe kenarlığının tam uzunluğunu tahmin eder." },
          { "kind": "h3", "text": "Örnek 4: Çelik Destek Braketi" },
          { "kind": "p", "text": "Üçgen bir metal braket [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]] boyutlarındadır. Çevre: [[P=8+15+17]], [[[\\boxed{P=40\\text{ cm}}]]]. Yarı çevre: [[[\\boxed{s=20\\text{ cm}}]]]. Çevre, braketin dış kenarını tanımlar; kenar finisajı belirtilirken yararlıdır." },
          { "kind": "h3", "text": "Örnek 5: Üçgen Kumaş Panel" },
          { "kind": "p", "text": "Dik üçgen bir kumaş panel [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]] boyutlarındadır. Çevre: [[P=9+12+15]], [[[\\boxed{P=36\\text{ ft}}]]]. Yarı çevre: [[[\\boxed{s=18\\text{ ft}}]]]. Çevre, dikiş payları eklenmeden önceki kenar uzunluğunu tahmin eder." },
          { "kind": "h3", "text": "Örnek 6: Üçgen Tabela Çerçevesi" },
          { "kind": "p", "text": "Bir tabela [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]] boyutlarıyla dik üçgen şeklindedir. Çevre: [[P=12+16+20]], [[[\\boxed{P=48\\text{ cm}}]]]. Yarı çevre: [[[\\boxed{s=24\\text{ cm}}]]]. Toplam çevre, tabela için çerçeve malzemesini tahmin eder." },
          { "kind": "h3", "text": "Örnek 7: Peyzaj Sınırı" },
          { "kind": "p", "text": "Dik üçgen bir peyzaj bölümü [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]] boyutlarındadır. Çevre: [[P=7+24+25]], [[[\\boxed{P=56\\text{ m}}]]]. Yarı çevre: [[[\\boxed{s=28\\text{ m}}]]]. Çevre, bölümün çevresindeki bordür malzemesini tahmin eder." },
          { "kind": "h3", "text": "Örnek 8: Üçgen Güneş Paneli Desteği" },
          { "kind": "p", "text": "Basitleştirilmiş üçgen bir destek çerçevesi [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]] boyutlarındadır. Çevre: [[P=9+40+41]], [[[\\boxed{P=90\\text{ m}}]]]. Yarı çevre: [[[\\boxed{s=45\\text{ m}}]]]. Bunlar, modellenen üçgen çerçevenin üç kenarının uzunluklarıdır; eleman boyutlandırmanın başlangıç noktası." },
          { "kind": "h3", "text": "Örnek 9: Üçgen Tente Kenarı" },
          { "kind": "p", "text": "Dik üçgen bir tente bölümü [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]] boyutlarındadır. Çevre: [[P=15+20+25]], [[[\\boxed{P=60\\text{ ft}}]]]. Yarı çevre: [[[\\boxed{s=30\\text{ ft}}]]]. Çevre, tente kenarı için bordür malzemesini tahmin eder." },
          { "kind": "h3", "text": "Örnek 10: Depo Çatı Ucu Çerçevesi" },
          { "kind": "p", "text": "Basitleştirilmiş dik üçgen bir çatı ucu çerçevesi [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]] boyutlarındadır. Çevre: [[P=11+60+61]], [[[\\boxed{P=132\\text{ m}}]]]. Yarı çevre: [[[\\boxed{s=66\\text{ m}}]]]. Sonuç, üçgen bölümün tam dış çizgisini temsil eder." },
          { "kind": "h3", "text": "Örnek 11: Üçgen İmalat Paneli" },
          { "kind": "p", "text": "Dik üçgen bir endüstriyel panel [[a=13\\text{ cm}]], [[b=84\\text{ cm}]], [[c=85\\text{ cm}]] boyutlarındadır. Çevre: [[P=13+84+85]], [[[\\boxed{P=182\\text{ cm}}]]]. Yarı çevre: [[[\\boxed{s=91\\text{ cm}}]]]. Çevre, panel için koruyucu kenar profillerini tahmin eder." },
          { "kind": "h3", "text": "Örnek 12: Büyük Üçgen Destek Yapısı" },
          { "kind": "p", "text": "Dik üçgen bir destek yapısı [[a=28\\text{ m}]], [[b=45\\text{ m}]], [[c=53\\text{ m}]] boyutlarındadır. Çevre: [[P=28+45+53]], [[[\\boxed{P=126\\text{ m}}]]]. Yarı çevre: [[[\\boxed{s=63\\text{ m}}]]]. Bu ölçüler, ilerideki mühendislik hesapları için geometrik girdi görevi görür." },
          { "kind": "h3", "text": "Pratik Örneklerin Karşılaştırması" }
        ],
        "table": {
          "headers": ["Pratik uygulama", "Dik kenar a", "Dik kenar b", "Hipotenüs c", "Çevre P", "Yarı çevre s", "Ölçü birimi"],
          "rows": [
            ["Cam pencere çerçevesi", "3", "4", "5", "12", "6", "m"],
            ["Çatı kenar kaplaması", "6", "8", "10", "24", "12", "ft"],
            ["Bahçe bordürü", "5", "12", "13", "30", "15", "m"],
            ["Çelik braket", "8", "15", "17", "40", "20", "cm"],
            ["Kumaş panel", "9", "12", "15", "36", "18", "ft"],
            ["Tabela çerçevesi", "12", "16", "20", "48", "24", "cm"],
            ["Peyzaj sınırı", "7", "24", "25", "56", "28", "m"],
            ["Güneş paneli desteği", "9", "40", "41", "90", "45", "m"],
            ["Tente kenarı", "15", "20", "25", "60", "30", "ft"],
            ["Depo çatı ucu", "11", "60", "61", "132", "66", "m"],
            ["İmalat paneli", "13", "84", "85", "182", "91", "cm"],
            ["Destek yapısı", "28", "45", "53", "126", "63", "m"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Bir Kenar Eksikken Çevre Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "Bu sayfadaki hesaplayıcı üç kenar uzunluğunun da girilmesini ister. Bir kenar bilinmiyorsa, önce Pisagor teoremi ile hesaplayın. Çevre iki kenardan tamamlanamaz: iki uzunluk kapalı bir sınırı değil, açık bir köşeyi tanımlar." },
          { "kind": "h3", "text": "İki Dik Kenar Bilinirken Hipotenüsü Bulma" },
          { "kind": "p", "text": "Pisagor teoremini hipotenüs biçiminde kullanın: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]. Örnek: [[a=6]], [[b=8]]. O zaman [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[c=\\sqrt{100}]], [[[\\boxed{c=10}]]]. Artık çevre hesaplanabilir: [[P=6+8+10]], [[[\\boxed{P=24}]]], yarıya bölmeden [[s=12]] elde edilir." },
          { "kind": "h3", "text": "Hipotenüs Bilinirken Eksik Dik Kenarı Bulma" },
          { "kind": "p", "text": "Bilinmeyen dik kenarı yalnız bırakmak için [[a^2+b^2=c^2]]'yi yeniden düzenleyin: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]. Örnek: [[c=13]], [[b=12]]. O zaman [[a=\\sqrt{13^2-12^2}]], [[a=\\sqrt{169-144}]], [[a=\\sqrt{25}]], [[[\\boxed{a=5}]]]. Çevre gelir: [[P=5+12+13=30]], [[s=15]]. Kök içindeki çıkarma, eksik dik kenarın imzasıdır; eksik hipotenüs her zaman toplar." },
          { "kind": "h3", "text": "Eksik Kenar Neden Önce Hesaplanmalıdır?" },
          { "kind": "p", "text": "Çevre üç sınır uzunluğunun da olmasını gerektirir. Eksik bir kenar, gerekçesizce göz ardı edilemez ya da tahmin edilemez: iki kenar bir üçgeni çevrelemez ve tahmin edilen üçüncü kenar toplamı kurgu yapar. Yalnızca iki kenar biliniyorsa, <a href=\"/missing-leg-from-c-and-a-calculator/\" class=\"text-primary underline\">Dik Üçgen Kenar Hesaplayıcı</a> bu sayfanın hesaplayıcısı devralmadan önce üçüncüyü bulur. Bunun bir öğretim yöntemi olduğunu, mevcut hesaplayıcıda ek bir giriş modu olmadığını unutmayın: çevre ve yarı çevre modları hâlâ üçer kenar alır." }
        ],
        "imgAlt": "Dik kenarları 6 ve 8 olan dik üçgen, bilinmeyen hipotenüs 10 olarak çözüldü ve çevre 24 bulundu",
        "figcaption": "6 ve 8 dik kenarları c = 10 verir, yani P = 24 ve s = 12."
      },
      "sec-pythagoras": {
        "h2": "Pisagor Teoremi Dik Üçgen Çevresiyle Nasıl İlişkilidir?",
        "blocks": [
          { "kind": "p", "text": "Teorem [[[\\boxed{a^2+b^2=c^2}]]] der. İki dik kenar ile hipotenüs arasındaki ilişkiyi kurar: kare köşe üç uzunluğu tam bu dengeye zorlar. Çevre çalışmalarında teorem, eksik bir ölçüm kümesi ile tam sınır arasındaki köprüdür." },
          { "kind": "h3", "text": "Çevre İçin Neden Önemlidir?" },
          { "kind": "p", "text": "İki dik kenar biliniyorsa, tam çevre bulunmadan önce hipotenüs hesaplanabilir. Teorem olmadan eksik bir kenar hesabı tamamen tıkardı; teoremle iki bilinen kenar üçüncüyü geri getirmeye ve toplamı bitirmeye yeter. Teorem diğer yönde de işler: bilinen bir hipotenüs ve bilinen bir dik kenar diğer dik kenarı geri getirir. Her iki durumda da iki kenarlı bir problemi üç kenarlı bir çevreye dönüştürür." },
          { "kind": "h3", "text": "Çözümlü Örnek" },
          { "kind": "p", "text": "Verilenler [[a=5]], [[b=12]]. [[c]]'yi bulun: [[c=\\sqrt{5^2+12^2}]], [[c=\\sqrt{25+144}]], [[c=\\sqrt{169}]], [[[\\boxed{c=13}]]]. Çevreyi hesaplayın: [[P=5+12+13]], [[[\\boxed{P=30}]]]. Yarı çevreyi hesaplayın: [[s=\\frac{30}{2}]], [[[\\boxed{s=15}]]]. Bir teorem, bir toplama, bir yarıya bölme: iki dik kenardan iki sınır ölçüsüne giden tam zincir." },
          { "kind": "h3", "text": "Bir Dik Üçgen Nasıl Doğrulanır?" },
          { "kind": "p", "text": "Üç ölçüm de [[a^2+b^2=c^2]]'yi sağlamalı ve hipotenüs en uzun kenar olmalıdır. Üçgen eşitsizliğini de kontrol edin: geçerli her üçgen için [[a+b>c]], [[a+c>b]] ve [[b+c>a]]. Bu koşullar ölçümleri kontrol ederken önemlidir: başarısız bir Pisagor kontrolü üçgenin dik açılı olmadığı ya da bir kenarın yanlış etiketlendiği anlamına gelir; başarısız bir üçgen eşitsizliği üç uzunluğun hiçbir üçgen oluşturamayacağı anlamına gelir. Saha ölçümlerinden kurulan bir çevreye güvenmeden önce iki kontrolü de çalıştırın." }
        ]
      },
      "sec-advanced": {
        "h2": "Yarı Çevre Diğer Üçgen Formüllerinde Nasıl Kullanılır?",
        "blocks": [
          { "kind": "p", "text": "Bu bölüm, sayfayı başka bir hesaplayıcının öğreticisine dönüştürmeden yarı çevreye matematiksel derinliğini kazandırır. Yarı çevre, bir çevrenin yarısından fazlasıdır: kenar uzunluklarını alana ve çember geometrisine bağlayan büyüklüktür ve aşağıdaki formüller onun değerini gösterdiği yerlerdir." },
          { "kind": "h3", "text": "Yarı Çevre ile İç Yarıçap Arasındaki Bağıntı" },
          { "kind": "p", "text": "Yozlaşmamış her üçgenin alanı, iç yarıçapı ile yarı çevresinin çarpımına eşittir: [[[\\boxed{K=rs}]]], burada [[K]] alan, [[r]] iç yarıçap ve [[s]] yarı çevredir. Bu bağıntı yalnızca dik üçgenler için değil, tüm yozlaşmamış üçgenler için geçerlidir. Bir dik üçgen için iç yarıçap, kenarlardan [[[\\boxed{r=\\frac{a+b-c}{2}}]]] ile de hesaplanabilir. 3-4-5 üçgenini alın: [[s=6]], [[r=\\frac{3+4-5}{2}=1]], o zaman [[K=1\\times6]], [[[\\boxed{K=6}]]]. Yarı çevre bu hesapta önemli bir ara ölçüdür: sınır bilgisini taşırken iç yarıçap çember bilgisini taşır." },
          { "kind": "h3", "text": "Heron Formülüyle Bağıntı" },
          { "kind": "p", "text": "Heron formülü, alanı üç kenar ve yarı çevreden hesaplar: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Üç kenar uzunluğunu da kullanır, yarı çevreyi kullanır, üçgenin alanını hesaplar ve her geçerli üçgen için işler. [[s=6]] ile 3-4-5 üçgenini kullanın: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[K=\\sqrt{36}]], [[[\\boxed{K=6}]]]. Yarı çevre kökün içinde dört kez görünür; bu onun ne kadar merkezi olduğunu gösterir: Heron formülü onsuz yazılamaz bile." },
          { "kind": "h3", "text": "Yarı Çevre Neden Temel Bir Ölçüdür?" },
          { "kind": "p", "text": "Bir çevrenin yarısından fazlasıdır. Kenar uzunluklarını alana ve çember geometrisine bağlayan yararlı bir matematiksel büyüklüktür: iç yarıçap bağıntısı onu [[r]]'nin doğal ortağı olarak görür ve Heron formülü tüm alanı onun üzerine kurar. Bir formülün sınırı tek bir elverişli sayıya damıtması gerektiğinde, [[s]] o sayıdır. Bu sayfa tam bir Heron formülü ya da iç yarıçap öğreticisine dönüşmez; bağlantıyı not eder ki yarı çevre modunun çıktısının gidecek bir yeri olsun." }
        ]
      },
      "sec-perimeter-area": {
        "h2": "Çevre ile Alan Arasındaki Fark Nedir?",
        "blocks": [
          { "kind": "p", "text": "Geometrideki en kalıcı karışıklıklardan biri, dış çizgi ile yüzeyi karıştırmaktır. Çevre ve alan aynı üçgeni paylaşır ama farklı şeyleri, farklı birimlerle ölçer ve farklı soruları yanıtlar." },
          { "kind": "h3", "text": "Çevre Sınırı Ölçer" },
          { "kind": "p", "text": "[[P=a+b+c]]. Üçgenin çevresindeki toplam uzunluğu ölçer: kenarlık, pervaz, çit hattı. Birimler doğrusaldır: metre, santimetre, fit, inç. Tek boyutludur, bir uzunluktur ve başka bir şey değildir." },
          { "kind": "h3", "text": "Alan Çevrelenen Yüzeyi Ölçer" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ab}{2}}]]]. Dik üçgenin içindeki düz, iki boyutlu bölgeyi ölçer: penceredeki cam, bahçe bölümündeki çim. Birimler karedir: metrekare, santimetrekare, fitkare, inçkare. İki boyutludur, bir yüzey sayısıdır ve başka bir şey değildir." },
          { "kind": "h3", "text": "İki Üçgenin Çevresi Aynı, Alanları Farklı Olabilir mi?" },
          { "kind": "p", "text": "Evet. Üçgen 1: [[a=5]], [[b=12]], [[c=13]]. O zaman [[P=5+12+13=30]] ve [[K=\\frac{5\\times12}{2}=30]]. Üçgen 2: [[a=7.5]], [[b=10]], [[c=12.5]]. Dik açıyı kontrol edin: [[7.5^2+10^2=56.25+100=156.25=12.5^2]], yani gerçek bir dik üçgendir. Çevresi [[P=7.5+10+12.5=30]], aynı 30, ancak alanı [[K=\\frac{7.5\\times10}{2}=37.5]], açıkça farklı. Eşit çevre otomatik olarak eşit alan anlamına gelmez: dış çizginin uzunluğu toplam kenarlığı sabitler, ama üçgenin şekli bu kenarlığın ne kadar yüzey çevrelediğine karar verir." },
          { "kind": "h3", "text": "Çevre Asla Kare Birimlerle Neden Bildirilmemelidir?" },
          { "kind": "p", "text": "Çevre tek boyutlu bir uzunluktur; kare birimler iki boyutlu bir yüzeyi tanımlar. Bir çevre için 12 m² bildirmek, yalnızca bir dış çizginin ölçüldüğü yerde bir yüzey iddia eder ve sayıyı okuyan herkes yanlış şeyi hayal eder. Birimleri dürüst tutun: uzunluklar m, cm, ft, in; alanlar m², cm², ft², in². Birim yanıtın parçasıdır ve yanlış birim doğru yanıtı yanlışa çevirir." }
        ]
      },
      "sec-units": {
        "h2": "Çevre ve Yarı Çevre Hesaplamalarında Ölçü Birimlerini Anlama",
        "blocks": [
          { "kind": "p", "text": "Metre, santimetre, milimetre, kilometre, fit, inç, yarda, mil: uzunluk birimleri birçok boyuttadır ve çevre formülü hepsini kabul eder. Tek kural uyumdur: toplanmadan önce üç kenar da aynı birimi konuşmalıdır." },
          { "kind": "h3", "text": "Üç Kenar Uzunluğu Neden Uyumlu Birimler Kullanmalıdır?" },
          { "kind": "p", "text": "Çevre, uzunlukların toplamıdır. Dönüştürmeden 48 inçe 3 fit eklemek iki ölçeği karıştırır ve toplamın temiz bir anlamı olmaz: 56 ne? Ölçümleri toplamadan önce ortak bir birime dönüştürün. Hesaplayıcının birim seçicileri tam bu adım içindir ve aşağıdaki çözümlü örnek, dönüştürmenin sessiz ama yaşamsal işini nasıl yaptığını gösterir." },
          { "kind": "h3", "text": "Çözümlü Birim Dönüştürme Örneği" },
          { "kind": "p", "text": "Verilenler [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Ortadaki kenarı dönüştürün: [[48\\text{ inches}=4\\text{ ft}]]. O zaman [[P=3+4+5]], [[[\\boxed{P=12\\text{ ft}}]]]. Yarı çevre: [[[\\boxed{s=6\\text{ ft}}]]]. Dönüştürülen üçlünün tanıdık 3-4-5 olduğuna dikkat edin; bu, dönüştürmeyi bağımsız şekilde doğrular: inçler ham eklenmiş olsaydı, çevre tutarlı hiçbir şeyin 56'sı olurdu." },
          { "kind": "h3", "text": "Ondalıklı Kenar Ölçüleriyle Hesaplama" },
          { "kind": "p", "text": "[[a=2.5]], [[b=6]], [[c=6.5]] kullanın. Önce dik açıyı doğrulayın: [[2.5^2+6^2=6.25+36=42.25=6.5^2]]. Çevreyi hesaplayın: [[P=2.5+6+6.5]], [[[\\boxed{P=15\\text{ units}}]]]. Sonra yarı çevreyi: [[s=\\frac{15}{2}]], [[[\\boxed{s=7.5\\text{ units}}]]]. Ondalıklar, tam sayılarla aynı toplama ve yarıya bölmeden geçer; formüller asla tam sayı istemez ve atölye ölçümleri de nadiren tam sayıdır." },
          { "kind": "h3", "text": "Neden Erken Yuvarlamaktan Kaçınmalısınız?" },
          { "kind": "p", "text": "Ölçüm hesapları ondalıklı değerler içerebilir ve her ara yuvarlama, sonraki adımların gideremeyeceği bir hata enjekte eder. Ara adımlarda yeterli duyarlılığı koruyun ve ölçümün gerektirdiği doğruluğa göre yalnızca nihai yanıtı yuvarlayın. Hesabın ortasında 2.5'i 3'e yuvarlamak hem [[P]]'yi hem [[s]]'yi bozardı; hesaplayıcı sonuna kadar tam duyarlılığı korur ve elle hesaplar da aynısını yapmalıdır." }
        ]
      },
      "sec-scaling": {
        "h2": "Kenar Uzunluklarındaki Değişiklikler Çevre ve Yarı Çevreyi Nasıl Etkiler?",
        "blocks": [
          { "kind": "p", "text": "Çevre doğrusal bir ölçüdür, bu yüzden üçgenle doğrusal ölçeklenir: her kenarı bir çarpanla gerin ve sınır tam o çarpanla gerilir. Yarı çevre de onu izler, çünkü her zaman çevrenin yarısıdır." },
          { "kind": "h3", "text": "Her Kenar İki Katına Çıkarsa Ne Olur?" },
          { "kind": "p", "text": "[[P=a+b+c]]'den başlayın. Her kenar iki katına çıkarsa yeni çevre [[P_2=2a+2b+2c]] olur, bu da [[P_2=2(a+b+c)]] olarak çarpanlarına ayrılır. Dolayısıyla [[[\\boxed{P_2=2P}]]]. Yarı çevre de iki katına çıkar, çünkü iki katına çıkmış bir toplamı yarıya bölmek yarıyı da iki katına çıkarır. 3-4-5'ten 6-8-10'a çift, bunu sayılarla gösterir: 12 olur 24, 6 olur 12." },
          { "kind": "h3", "text": "Her Kenar Üç Katına Çıkarsa Ne Olur?" },
          { "kind": "p", "text": "Üç çarpanıyla aynı cebir [[[\\boxed{P_2=3P}]]] ve [[[\\boxed{s_2=3s}]]] verir. Doğrusal ölçekleme bağıntısı her [[k]] ölçek çarpanı için geçerlidir: her kenarı [[k]] ile çarpın ve iki sınır ölçüsü de [[k]] ile çarpılır. Ölçekli çizimlerin bu kadar düzgün davranmasının nedeni budur: çizimi ölçün, ölçek çarpanıyla çarpın ve gerçek çevre hazırdır." },
          { "kind": "h3", "text": "Yalnızca Bir Kenar Değişirse Ne Olur?" },
          { "kind": "p", "text": "Diğer ikisini sabit tutup bir kenarı büyütmek, çevreyi aynı miktarda değiştirir: bir kenara 2 birim ekleyin ve [[P]] tam olarak 2 büyür, çünkü çevre düz bir toplamdır. Ancak bir dik üçgende kenar uzunlukları Pisagor teoremiyle birbirine bağlıdır, bu yüzden keyfi kenar değişiklikleri dik açı koşulunu korumayabilir. Hipotenüsü ayarlamadan bir dik kenarı uzatmak [[a^2+b^2=c^2]]'yi bozar ve şekil artık dik açılı olmaz: çevre formülü hâlâ üç sayıyı toplar, ama bunlar artık bir dik üçgeni tanımlamaz." },
          { "kind": "h3", "text": "İki Dik Üçgeni Karşılaştırma" },
          { "kind": "p", "text": "3-4-5'i 6-8-10'un yanına koyun. Kenar uzunlukları: her kenar iki katına, ölçek çarpanı 2. Çevre: 12'ye karşı 24. Yarı çevre: 6'ya karşı 12. Tüm kenar uzunluklarını iki katına çıkarmak iki sınır ölçüsünü de iki katına çıkarır, tam da cebirin öngördüğü gibi. Karşılaştırma ters yönde de işler: iki üçgenin çevreleri 2:1 oranında ve ikisi de dik açılıysa, kenarları da o orandadır." }
        ]
      },
      "sec-applications": {
        "h2": "Dik Üçgen Çevresinin Pratik Uygulamaları",
        "blocks": [
          { "kind": "p", "text": "Aynı iki adımlı örüntü, yani önce topla sonra yarıya böl, üçgen bir dış çizginin ölçülmesi ve bir formülün yarısını istemesi gereken her yerde karşımıza çıkar. Bir camcı, bir pencere çerçevesini kenar uzunluklarından toplar; bir çatıcı, alınlık çevresindeki kaplamayı toplar; bir peyzajcı, bir yatak çevresindeki kenarlığı toplar; bir imalatçı, bir panel çevresindeki kenar profilini toplar. Üç kenardan, malzeme siparişi için çevre ve sonraki geometri için yarı çevre gelir. Aşağıdaki dört panel, örüntüyü farklı ölçeklerde gösterir: bir pencere çerçevesi (12 m), çatı kenar kaplaması (24 ft), bir bahçe bordürü (56 m) ve çelik bir destek çerçevesi (40 cm); her biri çevresi ve yarı çevresiyle etiketlenmiştir." }
        ],
        "imgAlt": "Dört panel: pencere çerçevesi 12 m, çatı kaplaması 24 ft, bahçe bordürü 56 m, çelik çerçeve 40 cm çevreleri",
        "figcaption": "Dört gerçek kullanım: bir pencere çerçevesi, çatı kenar kaplaması, bir bahçe bordürü ve çelik bir çerçeve."
      },
      "sec-mistakes": {
        "h2": "Dik Üçgen Çevre ve Yarı Çevre Hesaplarken Yapılan Yaygın Hatalar",
        "blocks": [
          { "kind": "p", "text": "Bu konudaki neredeyse her yanlış yanıt, kötü aritmetikten değil, atlanan bir kenardan ya da karıştırılan bir etiketten kaynaklanır. Aşağıdaki on altı hata tekrar tekrar ortaya çıkanlardır; her biri nedeni ve düzeltmesiyle verilmiştir." },
          { "kind": "h3", "text": "1. Hipotenüsü Dahil Etmeyi Unutmak" },
          { "kind": "p", "text": "3-4-5 üçgeninde [[P=a+b]] kullanmak 12 değil 7 verir. Hata, hipotenüsün dik açıya hiç değmemesi yüzünden olur; bu yüzden üçgenin asıl parçasından ayrı gibi hissettirir. Düzeltme: sınırın üç kenarı vardır; üçünü de sayın, [[P=a+b+c]]." },
          { "kind": "h3", "text": "2. Çevreyi Yarı Çevreyle Karıştırmak" },
          { "kind": "p", "text": "12'nin ait olduğu yere 6 girmek ya da tersi, malzeme tahminini yarıya indirir ya da iki katına çıkarır. Hata, iki değerin aynı üç kenarı paylaşmasından gelir. Düzeltme: her sonucu [[P]] ya da [[s]] olarak etiketleyin ve devam etmeden önce [[s=\\frac{P}{2}]] kontrolü yapın." },
          { "kind": "h3", "text": "3. Çevre Hesaplarken Çevreyi İkiye Bölmek" },
          { "kind": "p", "text": "[[\\frac{3+4+5}{2}=6]] hesaplayıp bunu çevre diye adlandırmak sınırı yarı yarıya eksik gösterir. Hata, alışkanlıkla yarı çevre formülünü çalıştırmaktır. Düzeltme: [[P=a+b+c]]'de bölme yoktur; yarıya bölme yalnızca [[s]]'ye aittir." },
          { "kind": "h3", "text": "4. Yarı Çevre Hesaplarken İkiye Bölmeyi Unutmak" },
          { "kind": "p", "text": "3-4-5 üçgeni için [[s=12]] bildirmek, Heron formülünü iki katına çıkmış bir [[s]] ile besler ve alanı bozar. Düzeltme: [[s=\\frac{a+b+c}{2}]] her zaman yarıya bölmeyle biter; onsuz sayı çevredir." },
          { "kind": "h3", "text": "5. Yanlış Kenarı Hipotenüs Olarak Kullanmak" },
          { "kind": "p", "text": "Örneğin a=5, b=4, c=3 girerek bir dik kenarı [[c]] gibi ele almak, sonraki her formülü karıştırır. Hata genellikle kenarların yanlış sırada okunmasından gelir. Düzeltme: [[c]] dik açının karşısındaki en uzun kenardır; üç sayıyı sıralayın ve [[c]]'yi en büyüğe atayın." },
          { "kind": "h3", "text": "6. Dik Üçgen Oluşturmayan Ölçüler Girmek" },
          { "kind": "p", "text": "2, 3, 4 kenarları aritmetik olarak [[P=9]] verir, ancak [[2^2+3^2=13\\neq16]], bu yüzden dik açı yoktur ve sayfanın formülleri yanlış bir önermeye dayanır. Düzeltme: hesaplamadan önce [[a^2+b^2=c^2]]'yi doğrulayın." },
          { "kind": "h3", "text": "7. Santimetre ile Metreyi Karıştırmak" },
          { "kind": "p", "text": "3 m, 40 cm ve 5 m'yi [[3+40+5=48]] olarak toplamak 48 hiçlik üretir. Düzeltme: önce tek birime dönüştürün: [[40\\text{ cm}=0.4\\text{ m}]], sonra [[P=8.4\\text{ m}]]." },
          { "kind": "h3", "text": "8. Fit ile İnci Karıştırmak" },
          { "kind": "p", "text": "3 ft, 48 in ve 5 ft'yi 56 olarak toplamak, İngiliz birimlerinde aynı ölçek hatasını tekrarlar. Düzeltme: [[48\\text{ in}=4\\text{ ft}]], sonra [[P=12\\text{ ft}]]." },
          { "kind": "h3", "text": "9. Çevreyi Kare Birimlerle Bildirmek" },
          { "kind": "p", "text": "[[P=12\\text{ m}^2]] yazmak. Hata genellikle alan problemlerinden sonra alışkanlıkla bir alan birimini kopyalamaktan gelir. Düzeltme: çevreler uzunluktur, yani [[P=12\\text{ m}]]." },
          { "kind": "h3", "text": "10. Yarı Çevreyi Alan Olarak Bildirmek" },
          { "kind": "p", "text": "[[s=6]]'yı 6 kare birim gibi ele almak. Yarı çevre bir uzunluktur, sınırın yarısıdır, yüzey değil. Düzeltme: [[s=6]] uzunluk birimidir; tartışmaya kapalı." },
          { "kind": "h3", "text": "11. Erken Yuvarlama" },
          { "kind": "p", "text": "Toplamadan önce 2.5'i 3'e yuvarlamak, gerçek 15 yerine [[3+6+6.5=15.5]] verir. Hata zararsız hissettirir, çünkü yuvarlama küçük görünür. Düzeltme: hesap boyunca tam duyarlılığı koruyun ve yalnızca nihai yanıtı yuvarlayın." },
          { "kind": "h3", "text": "12. Mevcut Hesaplayıcıda Yalnızca İki Kenar Kullanmak" },
          { "kind": "p", "text": "[[a=3]], [[b=4]] girip [[c]]'yi girmemek sınırı açık bırakır. Hesaplayıcı üç uzunluğun da girilmesini ister, çünkü çevre kapalı bir toplamdır. Düzeltme: önce Pisagor teoremiyle eksik kenarı bulun, sonra hesaplayın." },
          { "kind": "h3", "text": "13. Üçgen Eşitsizliğini Göz Ardı Etmek" },
          { "kind": "p", "text": "2, 3, 10 kenarları aritmetik olarak [[P=15]] verir, ancak [[2+3<10]], bu yüzden hiçbir üçgen yoktur. Düzeltme: üç sayıdan kurulan herhangi bir sonuca güvenmeden önce [[a+b>c]] kontrolü yapın." },
          { "kind": "h3", "text": "14. Yarı Çevrenin Fiziksel Bir Yarım Sınır Yolu Olduğunu Varsaymak" },
          { "kind": "p", "text": "3-4-5 kenarları boyunca 6 birimlik bir yürüyüş aramak. Genel olarak [[s]]'ye eşit tek bir sürekli yarım yol yoktur; [[s]] sayısal toplamın yarısıdır. Düzeltme: [[s]]'yi yürülecek bir rota değil, formüller için bir sayı olarak ele alın." },
          { "kind": "h3", "text": "15. Çevreyi Yalnızca Dik Kenarların Toplamıyla Karıştırmak" },
          { "kind": "p", "text": "Hipotenüs iç süsleme gibiymişçesine [[a+b=7]] hesaplayıp durmak. Düzeltme: hipotenüs bir sınır kenarıdır; [[P=a+b+c]], üç terim de, her seferinde." },
          { "kind": "h3", "text": "16. Çevrenin Tek Başına Üçgenin Alanını Belirlediğini Varsaymak" },
          { "kind": "p", "text": "[[P=30]]'un [[K]]'yi sabitlediğine inanmak. 5-12-13 üçgeni ([[K=30]]) ve 7.5-10-12.5 üçgeni ([[K=37.5]]) farklı alanlarla [[P=30]]'u paylaşır. Düzeltme: alan sınır toplamından fazlasını ister; dik kenarları ya da Heron formülünü kullanın." },
          { "kind": "h3", "text": "Yanlışa Karşı Doğru: Somut Bir Örnek" },
          { "kind": "p", "text": "Verilenler [[a=3]], [[b=4]], [[c=5]]. Doğru çevre: [[P=3+4+5=12]]. Hipotenüsü yanlışlıkla dışarıda bırakmak: [[3+4=7]]. Yedi tam çevre değildir, çünkü sınırın üçüncü kenarı hiç sayılmadı. Doğru yarı çevre: [[s=\\frac{12}{2}=6]]. Altı tam sınır uzunluğu değildir: onun yarısıdır, Heron gibi formüllerin ihtiyaç duyduğu değerdir. Üç durumda da aritmetik kendinden emin görünür; onları yalnızca geometri ayırt eder." }
        ]
      },
      "sec-verify": {
        "h2": "Dik Üçgen Çevrenizin Doğru Olduğu Nasıl Kontrol Edilir",
        "blocks": [
          { "kind": "p", "text": "Hepsi 3-4-5 üçgeni üzerinde gösterilen yedi bağımsız kontrol ([[a=3]], [[b=4]], [[c=5]], [[P=12]], [[s=6]]). Farklı yollar arasındaki uyum, ev ödevinde de pratik ölçümde de bir yanıtın doğru olduğunun en güçlü kanıtıdır." },
          { "kind": "h3", "text": "Yöntem 1: Üç Kenarı Yeniden Toplayın" },
          { "kind": "p", "text": "[[P=a+b+c]]'yi baştan çalıştırın: [[P=3+4+5=12]]. Sayılar yeniden girilerek yapılan ikinci geçiş, tek geçişin gizlediği yazım ve yanlış tuşlama hatalarını yakalar." },
          { "kind": "h3", "text": "Yöntem 2: Çevreyi İkiye Bölün" },
          { "kind": "p", "text": "[[s=\\frac{P}{2}]] hesaplayın: [[s=\\frac{12}{2}=6]]. Yarıya bölme yarı çevre modunun çıktısıyla eşleşmezse, iki hesaptan biri yanlış gitmiştir ve ikisi de ikinci bir bakışı hak eder." },
          { "kind": "h3", "text": "Yöntem 3: Yarı Çevreyi İki Katına Çıkarın" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]] kontrolü yapın: [[P=2\\times6=12]]. Bu, Yöntem 2'nin tersidir ve aynı hata sınıfını diğer yönden yakalar: yanlış bir [[s]], ilk toplama iyi görünse bile burada başarısız olur." },
          { "kind": "h3", "text": "Yöntem 4: Pisagor Bağıntısını Doğrulayın" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]]'yi onaylayın: [[3^2+4^2=9+16=25=5^2]]. Bu, diğer her hesabın arkasındaki kenar belirlemeyi kontrol eder; yanlış bir hipotenüs bir kenarın yanlış etiketlendiği anlamına gelir ve [[P]] ile [[s]] yeniden kurulmalıdır." },
          { "kind": "h3", "text": "Yöntem 5: Üçgen Eşitsizliğini Kontrol Edin" },
          { "kind": "p", "text": "[[a+b>c]]'yi onaylayın: [[3+4=7>5]]. Üç uzunluk, dik açı kontrolü bir şey ifade etmeden önce bir üçgen oluşturabilmelidir. Buradaki başarısızlık sizi aritmetiğe değil ölçümlere geri gönderir." },
          { "kind": "h3", "text": "Yöntem 6: Ölçü Birimlerini Kontrol Edin" },
          { "kind": "p", "text": "Üç kenarın da uyumlu birimler kullandığını doğrulayın. Karışık birimler bu konunun en sessiz hatasıdır: aritmetik temiz görünürken ölçek yanlıştır. Toplama güvenmeden önce her girdinin birim seçicisini yeniden okuyun." },
          { "kind": "h3", "text": "Yöntem 7: Canlı Görselleştirmeyle Karşılaştırın" },
          { "kind": "p", "text": "Hesaplayıcı, üçgeni girilen kenarlardan çizer. Çizim ölçülen nesneye hiç benzemiyorsa bir kenar yanlış atanmıştır: girilen en uzun kenar kare köşenin karşısında durmalıdır. Resim bağımsız bir tanıktır ve sayılar bir siparişe ya da rapora girmeden önce bir bakışı hak eder." }
        ]
      },
      "sec-related": {
        "h2": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
        "blocks": [
          { "kind": "p", "text": "Farklı ölçüler farklı hesaplayıcılar ister." }
        ]
      },
      "sec-faq": {
        "h2": "Sık Sorulan Sorular",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Tek Sınır, İki Yararlı Ölçü",
        "blocks": [
          { "kind": "p", "text": "Çevre sınırı toplar; yarı çevre bu toplamı, ona ihtiyaç duyan formüller için yarıya böler. 3-4-5 üçgeni tüm hikâyeyi minyatürde taşır: malzeme siparişi için [[P=12]] birim dış çizgi, Heron formülü ya da iç yarıçap bağıntısı için hazır [[s=6]] birim. Bir toplama ve bir yarıya bölme iki işi de kapsar." },
          { "kind": "p", "text": "Çalışma alışkanlığı basittir: hipotenüsü doğru etiketleyin, üç kenarı da dahil edin, birimleri eşleştirin, ondalıkları sona kadar yuvarlanmamış tutun ve ikinci bir yöntemle doğrulayın. Bu alışkanlıklarla [[P=a+b+c]] ve [[s=\\frac{a+b+c}{2}]] geometrinin en güvenilir ölçüleri arasındadır." }
        ]
      }
    },
    "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
    "relatedIntro": "Farklı ölçüler farklı hesaplayıcılar ister.",
    "relatedItems": [
      { "href": "/right-triangle-perimeter-calculator/", "label": "Dik Üçgen Çevre Hesaplayıcı" },
      { "href": "/right-triangle-semiperimeter-calculator/", "label": "Dik Üçgen Yarı Çevre Hesaplayıcı" },
      { "href": "/right-triangle-area-from-semiperimeter-calculator/", "label": "Dik Üçgen Yarı Çevreden Alan Hesaplayıcı" },
      { "href": "/right-triangle-area-from-legs-calculator/", "label": "Dik Üçgen Dik Kenarlardan Alan Hesaplayıcı" },
      { "href": "/pythagorean-theorem-calculator/", "label": "Pisagor Teoremi Hesaplayıcı" },
      { "href": "/missing-leg-from-c-and-a-calculator/", "label": "Dik Üçgen Eksik Kenar Hesaplayıcı" }
    ],
    "faqHeading": "Sık Sorulan Sorular",
    "faqs": [
      {
        "question": "Dik üçgenin çevre formülü nedir?",
        "answer": "P = a + b + c; burada a ve b iki dik kenar, c hipotenüstür. Üç kenar uzunluğunu da toplayın; toplam, doğrusal birimlerle tam sınır uzunluğudur. 3-4-5 üçgeni için P = 3 + 4 + 5 = 12 birim. Üç sınır kenarından biri olduğu için hipotenüs dahil her kenar eklenmelidir."
      },
      {
        "question": "Dik üçgenin yarı çevre formülü nedir?",
        "answer": "s = (a + b + c) / 2, tam olarak çevrenin yarısı; eşdeğer olarak s = P / 2. Önce üç kenarı toplayın, sonra bir kez bölün. 3-4-5 üçgeni için s = (3 + 4 + 5) / 2 = 6 birim. Bu bir uzunluktur, alan değildir ve Heron gibi formüllerin beklediği girdidir."
      },
      {
        "question": "Çevre ile yarı çevre arasındaki fark nedir?",
        "answer": "Çevre tüm sınırdır, P = a + b + c; yarı çevre onun yarısıdır, s = P / 2. 6-8-10 üçgeni için P = 24 ve s = 12. Bir dış çizgi çevresindeki malzeme tahminleri için P'yi, ileri geometri formüllerinin girdisi olarak s'yi kullanın. İkisi her zaman tam olarak iki kat fark eder."
      },
      {
        "question": "Hipotenüs çevreye neden dahil edilir?",
        "answer": "Çünkü çevre tam dış sınırı ölçer ve hipotenüs onun üç kenarından biridir. Üçgeni yürümek hipotenüsü de yürümek demektir. Onu dışarıda bırakmak kapalı bir dış çizgiyi değil, açık bir yolu ölçer. 3-4-5 için 5'i dışarıda bırakmak 7 verir; bu, bu kenarlara sahip hiçbir üçgenin çevresi değildir."
      },
      {
        "question": "Bir kenar eksikken çevre hesaplanabilir mi?",
        "answer": "Doğrudan değil: formülün üç sınır uzunluğunun da olmasını ister. Önce Pisagor teoremiyle eksik kenarı bulun: eksik hipotenüs için c = sqrt(a^2 + b^2), eksik dik kenar için a = sqrt(c^2 - b^2). a = 6 ve b = 8 iken c = 10, sonra P = 6 + 8 + 10 = 24. Bu sayfadaki hesaplayıcı üç kenarın da girilmesini ister."
      },
      {
        "question": "Çevre hesaplamadan önce hipotenüsü nasıl bulurum?",
        "answer": "İki bilinen dik kenarla c = sqrt(a^2 + b^2) kullanın. a = 5 ve b = 12 için: c = sqrt(25 + 144) = sqrt(169) = 13. Sonra üç kenarı da toplayın: P = 5 + 12 + 13 = 30. Sonucun en uzun kenar olduğunu doğrulayın; değilse dik kenarlar yanlış etiketlenmiştir."
      },
      {
        "question": "Yarı çevre geometride neden yararlıdır?",
        "answer": "Heron formülünün, K = sqrt(s(s - a)(s - b)(s - c)) ve iç yarıçap bağıntısı K = r x s'nin doğal değişkenidir. Alan formülleri sürekli yarılar üretir ve yarı çevre bunları tek bir elverişli sayıya toplar. 3-4-5 için s = 6 iki formülü de besler ve ikisi de K = 6 döndürür. Kenar uzunluklarını alana ve çember geometrisine bağlar."
      },
      {
        "question": "Yarı çevre üçgenin alanının yarısı mıdır?",
        "answer": "Hayır. Yarı çevre çevrenin yarısıdır; metre ya da fit gibi birimlerle ölçülen bir uzunluktur. Alan, kare birimlerle ölçülen iki boyutlu bir yüzeydir. 3-4-5 üçgeni için s = 6 birimken alan 6 kare birimdir; eşleşen sayılar bu üçgene özgü bir tesadüftür, kural değil."
      },
      {
        "question": "Çevre için hangi birimleri kullanmalıyım?",
        "answer": "Üç kenar da paylaşmak kaydıyla her doğrusal birim: metre, santimetre, milimetre, kilometre, fit, inç, yarda ya da mil. Toplamadan önce dönüştürün: 3 ft, 48 in, 5 ft olur 3 ft, 4 ft, 5 ft ve P = 12 ft elde edilir. Çevreyi asla kare birimlerle bildirmeyin; o bir yüzey değil, uzunluktur."
      },
      {
        "question": "Ondalıklı ölçülerle çevre hesaplayabilir miyim?",
        "answer": "Evet. Formüller ondalıkları tam sayılar gibi işler. a = 2.5, b = 6, c = 6.5 iken: P = 2.5 + 6 + 6.5 = 15 birim ve s = 15 / 2 = 7.5 birim. Toplama boyunca tam duyarlılığı koruyun ve yalnızca nihai yanıtı, ölçümlerin doğruladığı hassasiyete yuvarlayın."
      },
      {
        "question": "Üç kenarın geçerli bir dik üçgen oluşturduğu nasıl kontrol edilir?",
        "answer": "c en uzun kenar olmak üzere Pisagor bağıntısı a^2 + b^2 = c^2'yi doğrulayın ve üçgen eşitsizliği a + b > c'yi doğrulayın. 3, 4, 5 için: 9 + 16 = 25 ve 3 + 4 > 5, yani üçgen geçerli ve dik açılıdır. İki testten birinin başarısız olması, herhangi bir çevreye güvenilmeden önce ölçümlerin yeniden kontrol edilmesi gerektiği anlamına gelir."
      },
      {
        "question": "Yarı çevre, iç yarıçap ve Heron formülü arasındaki bağıntı nedir?",
        "answer": "Yarı çevre ikisini de besler: K = r x s onu iç yarıçapa bağlar ve K = sqrt(s(s - a)(s - b)(s - c)) onun üzerine kurulu Heron formülüdür. Bir dik üçgen için iç yarıçap kenarlardan r = (a + b - c) / 2 olarak da gelir. 3-4-5 ile s = 6 ve r = 1, yani K = 1 x 6 = 6; bu, Heron'un sonucuyla eşleşir."
      }
    ]
  }
};
