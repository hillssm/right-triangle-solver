// perimeterGuideTranslations.b6tr.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for Turkish (tr).
export const B6_TR = {
  "tr": {
    "tocHeading": "Bölüm Gezinmesi",
    "tocItems": {
      "sec-intro": "Dik Üçgenin Çevresi Nasıl Hesaplanır",
      "sec-geometry": "Dik Üçgen Nedir?",
      "sec-definition": "Dik Üçgenin Çevresi Nedir?",
      "sec-howto": "Dik Üçgenin Çevresi Nasıl Bulunur",
      "sec-examples": "Dik Üçgen Çevresine Adım Adım Örnekler",
      "sec-missing": "Bir Kenarı Eksik Dik Üçgenin Çevresi Nasıl Hesaplanır",
      "sec-applications": "Dik Üçgen Çevresinin Gerçek Hayattaki Kullanımları",
      "sec-properties": "Dik Üçgen Çevresinin Özel Özellikleri",
      "sec-vs-area": "Çevre ile Alan Arasındaki Fark Nedir?",
      "sec-semiperimeter": "Çevre ile Yarı Çevre Arasındaki İlişki Nedir?",
      "sec-units": "Dik Üçgen Çevre Hesaplamalarında Ölçü Birimlerini Anlama",
      "sec-mistakes": "Dik Üçgen Çevresi Hesaplarken Yapılan Yaygın Hatalar",
      "sec-verify": "Dik Üçgen Çevrenizin Doğru Olduğu Nasıl Kontrol Edilir",
      "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "sec-faq": "SSS",
      "sec-conclusion": "Sonuç"
    },
    "sections": {
      "sec-intro": {
        "h2": "Dik Üçgenin Çevresi Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "Kenarları [[a=3]], [[b=4]] ve [[c=5]] olan bir dik üçgen alın. Çevresi [[P=3+4+5]], yani [[[\\boxed{P=12\\text{ units}}]]] olur. 12 sayısı, üçgensel sınırın tamamı etrafındaki toplam mesafeyi söyler: üç kenarı da yürüdüğünüzde 12 birim yol kat etmiş olursunuz." },
          { "kind": "p", "text": "Bu hesaplayıcı herhangi bir dik üçgen için tam olarak bu toplamayı yapar. İki dik kenarı ve hipotenüsü girersiniz; size adım adım çözüm ve canlı bir diyagramla birlikte toplam sınır uzunluğunu verir. Sınırın üç kenarı olduğu için üç kenar uzunluğu gerekir ve hipotenüs de dahil edilmelidir: dik açıya hiç değmese de bu üç kenardan biridir. İki dik kenar kare köşeyi oluşturur, hipotenüs ise karşısından uzanarak şekli kapatır." },
          { "kind": "p", "text": "Çevre, bir alan ölçüsü değil, doğrusal bir ölçüdür. 'İçeride ne kadar yüzey var?' sorusunu değil, 'Ne kadar kenar şeridi gerekir?' sorusunu yanıtlar. Bu ayrım, dik üçgensel bir şeklin etrafındaki çit, pervaz, çerçeve, tel, ip veya kumaş bordürü tahmin ettiğiniz her durumda onu doğru sayı yapar." }
        ]
      },
      "sec-geometry": {
        "h2": "Dik Üçgen Nedir?",
        "blocks": [
          { "kind": "p", "text": "Herhangi bir toplamaya başlamadan önce üç kenar doğru etiketlenmelidir. Aşağıdaki semboller bu kılavuzun tamamında sabit kalır ve hesaplayıcı da aynı adları kullanır." },
          { "kind": "h3", "text": "Dik Üçgenin Tanımı" },
          { "kind": "p", "text": "Dik üçgen, tam olarak 90 derece ölçen bir iç açı içeren üçgendir. Üç köşesi, üç kenarı, iki dar açısı ve genellikle küçük bir kareyle işaretlenen bir dik açısı vardır. Dik açıyı oluşturan iki kenar dik kenarlardır; dik açının karşısındaki kenar hipotenüstür. Her üçgenin açılarının toplamı 180 derece olduğundan, [[A+B+C=180^\\circ]] ve [[C=90^\\circ]] ile [[[\\boxed{A+B=90^\\circ}]]] elde edilir: iki dar açı tümlerdir, yani birini bilmek diğerini belirler. Açı toplamı, bir dik üçgeni belirlerken önemlidir, çünkü kenar uzunluklarının geçmesi gereken test odur: ancak gerçek bir 90 derecelik köşe, bu kılavuzun geri kalanının dayandığı kenar ilişkisini üretir." },
          { "kind": "h3", "text": "İki Dik Kenar Nedir?" },
          { "kind": "p", "text": "[[a]] kenarı ve [[b]] kenarı, dik açı köşesinde buluşan, birbirine dik iki kenardır. Üçgenin yönelimine bağlı olarak biri yatay, diğeri dikey çizilebilir; onları tanımlayan sayfadaki yönleri değil, oluşturdukları 90 derecelik köşedir. Hipotenüsten konum ve uzunluk olarak farklıdırlar: her dik kenar dik açıya değer ve her dik kenar hipotenüsten kısadır. Çevre çalışmasındaki rolleri basittir: ikisi de sınır kenarıdır, bu yüzden ikisi de toplama girer." },
          { "kind": "h3", "text": "Hipotenüs Nedir?" },
          { "kind": "p", "text": "Hipotenüs, dik açının karşısındaki kenardır ve her zaman üçgenin en uzun kenarıdır. Dik açıyı asla oluşturmaz; onun karşısından uzanarak iki dik kenarın uzak uçlarını birleştirir. Dik kenarlardan hem konum hem de uzunluk olarak farklıdır: dik kenarlar 90 derecede buluşurken hipotenüs her dik kenarla dar açıda buluşur. Üçgensel sınırı tamamlar, bu yüzden çevre hesaplamalarına dahil edilmelidir. İki dik kenar da biliniyorsa, Pisagor teoremi onu geri kazanır: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Doğru Kenar Etiketleri Nasıl Belirlenir" },
          { "kind": "p", "text": "[[a]] ve [[b]], 90 derecede buluşan iki kenardır, [[c]] ise dik açının karşısındadır. Yozlaşmamış bir dik üçgende [[c]] en uzun kenardır. Dik açı işareti size hangi kenarın [[c]] olduğunu söyler: o köşeye değmeyen kenardır. Hızlı bir sıralama kontrolü yardımcı olur: üç sayıyı sıralayın ve en büyük olan [[c]] rolünü oynamalıdır. En büyük kenar kare köşenin karşısında değilse etiketler yanlıştır ve üzerine kurulan her hesap da yanlış olur." },
          { "kind": "h3", "text": "Çevre Formülü Yalnızca Dik Üçgenlerde mi İşler?" },
          { "kind": "p", "text": "Burada önemli bir matematiksel ayrım var. [[P=a+b+c]] formülü her üçgen için işler, dik olsun olmasın: üç kenarlı herhangi bir sınır aynı şekilde toplanır. Dik açı koşulunun eklediği özel şey, [[a^2+b^2=c^2]] ilişkisidir; bu, eksik kenarları bulmakta ve ölçümlerin gerçekten bir dik üçgen tanımlayıp tanımlamadığını kontrol etmekte işe yarar. Çevre formülü evrenseldir; Pisagor ilişkisi dik üçgenin bonusudur." }
        ],
        "imgAlt": "Hipotenüsü c, dik kenarları a ve b, C'de dik açılı ABC dik üçgeni ve vurgulu çevre sınırı",
        "figcaption": "ABC üçgeni: a ve b dik kenarları C dik açısında buluşur, c hipotenüsü sınırı kapatır ve P = a + b + c üç kenarın izini de sürer."
      },
      "sec-definition": {
        "h2": "Dik Üçgenin Çevresi Nedir?",
        "blocks": [
          { "kind": "h3", "text": "Çevre Tanımı" },
          { "kind": "p", "text": "Çevre, iki boyutlu bir şeklin dış sınırının çevresindeki toplam mesafedir. Bir üçgen için bu, üç kenar uzunluğunun toplamıdır: [[[\\boxed{P=a+b+c}]]] Üç kenar da dahil edilmelidir, çünkü her kenar sayılmadan sınır tamamlanmaz. Birini dışarıda bırakmak daha kısa bir çevre vermez; farklı, yanlış bir büyüklük verir." },
          { "kind": "h3", "text": "Hipotenüs Çevreye Neden Dahil Edilir?" },
          { "kind": "p", "text": "Çevre, tam dış sınırı ölçer ve hipotenüs isteğe bağlı ya da içsel bir ölçüm değildir. Üç dış kenardan biridir. [[a=3]], [[b=4]], [[c=5]] alın. Yanlış hesap [[3+4=7]] yalnızca iki dik kenarı, kare köşenin kenarlarını sayar. Doğru hesap [[3+4+5=12]] tüm üçgeni yürüyüp başlangıca döner. 7 değeri iki dik kenarın toplam uzunluğudur, tam çevre değildir, çünkü [[b]] kenarının ucundan [[a]] kenarının başlangıcına giden yol hipotenüs boyunca uzanır." },
          { "kind": "h3", "text": "Çevre Formülü Nasıl İşler?" },
          { "kind": "p", "text": "Formül üç parçaya ayrılır. Birinci kenar: [[a]]. İkinci kenar: [[b]]. Üçüncü kenar: [[c]]. Birleşik: [[P=a+b+c]]. Toplama yeterlidir, çünkü çevre bir uzunluk toplamıdır ve tek bir yol üzerindeki uzunluklar basitçe toplanır. Bölme gerekmez, kare alma gerekmez, trigonometri gerekmez: formül, sınır tanımının mümkün olan en basit kullanımıdır." },
          { "kind": "h3", "text": "Çevre Gerçek Hayatta Neyi Temsil Eder?" },
          { "kind": "p", "text": "Çevre, toplam sınır uzunluğudur: bir nesnenin etrafında bir kez dolanmak için gereken malzeme. Bu onu kenar ölçülerinin, çerçeve ölçülerinin, bordür uzunluklarının, çit gereksinimlerinin, pervaz ve kalıpların, ip ve tel uzunluklarının arkasındaki sayı yapar. Dış sınırı ölçmek, üçgenin içinde kalan yüzeyi ölçmekten farklı bir iştir. Üçgensel bir bahçeyi çitle çevirmek çevre gerektirir; aynı bahçeyi çimle kaplamak alan gerektirir. İkisini karıştırmak yanlış malzeme satın aldırır." }
        ]
      },
      "sec-howto": {
        "h2": "Dik Üçgenin Çevresi Nasıl Bulunur",
        "blocks": [
          { "kind": "p", "text": "Hesap net bir sıra izler. Her adımın bir amacı vardır: belirleme, kontrol, yerine koyma, toplama ve doğrulama. 3-4-5 üçgeni her adımı gösterir." },
          { "kind": "p", "text": "<strong>Adım 1: Üç kenarı belirleyin.</strong> [[a=3]], [[b=4]], [[c=5]] ölçümlerini toplayın. Bu adım, herhangi bir aritmetikten önce ham veriyi toplar." },
          { "kind": "p", "text": "<strong>Adım 2: İki dik kenarı belirleyin.</strong> 3 ve 4'ün dik kenarlar, 90 derecelik köşeyi oluşturan kenarlar olduğunu doğrulayın. Bu, [[a]] ve [[b]]'ye doğru rollerini verir." },
          { "kind": "p", "text": "<strong>Adım 3: Dik açının karşısındaki hipotenüsü belirleyin.</strong> 5'in hipotenüs olduğunu doğrulayın: en uzun kenardır ve kare köşenin karşısında durur. Bu, en yaygın etiketleme hatasını önler." },
          { "kind": "p", "text": "<strong>Adım 4: Üç ölçümün de uyumlu birim kullandığını doğrulayın.</strong> Burada üçü de düz birimlerdir, bu yüzden dönüşüm gerekmez. Bu adım, metreleri fitlerle toplamaya karşı korur." },
          { "kind": "p", "text": "<strong>Adım 5: Formülü yazın.</strong> [[P=a+b+c]]. Formülü yazmak, yerine koyma sırasında yapıyı görünür tutar." },
          { "kind": "p", "text": "<strong>Adım 6: Bilinen ölçümleri yerine koyun.</strong> [[P=3+4+5]]. Her sembol sayısıyla değiştirilir." },
          { "kind": "p", "text": "<strong>Adım 7: Üç değeri toplayın.</strong> [[P=12]]. Tek bir toplama, tüm aritmetiktir." },
          { "kind": "p", "text": "<strong>Adım 8: Doğru doğrusal ölçü birimini ekleyin.</strong> [[[\\boxed{P=12\\text{ units}}]]] Çevre bir uzunluktur, bu yüzden doğrusal birimler alır, asla kare birimler değil." },
          { "kind": "p", "text": "<strong>Adım 9: Sonucu doğrulayın.</strong> [[3^2+4^2=5^2]] ifadesini kontrol edin: [[9+16=25]]. Kenarlar Pisagor teoremini sağlıyor, yani üçgen gerçekten dik açılı ve çevre güvenilir." },
          { "kind": "h3", "text": "Kenarları Doğru Belirlemek Neden Önemlidir?" },
          { "kind": "p", "text": "Yanlış etiketleme, sonraki her şeyi etkiler. Hipotenüs yanlış etiketlendiğinde matematiksel doğrulama başarısız olur, çünkü Pisagor kontrolü [[c]]'nin en uzun kenar olmasını bekler. Eksik kenar hesaplamaları, eksik dik kenar ile eksik hipotenüs için farklı formüller kullanır, bu yüzden karışmış bir etiket yanlışını uygular. Hesaplayıcı girişleri [[a]], [[b]] ve [[c]]'ye bağlıdır, bu yüzden karışmış değerler makul görünümlü ama yanlış bir yanıt üretir. Canlı üçgen görselleştirmesi de bir dik kenar değeri hipotenüs yerine oturduğunda bozuk görünür. Etiketleri bir kez doğru yapmak, sonraki her adımı korur." },
          { "kind": "h3", "text": "Hipotenüsü Bilmeden Çevre Hesaplayabilir miyim?" },
          { "kind": "p", "text": "Evet, önce tek bir ek adımla. İki dik kenar da biliniyorsa, hipotenüs Pisagor teoremiyle bulunabilir: [[c=\\sqrt{a^2+b^2}]]. [[c]] bilindikten sonra çevre sıradan toplamayla gelir. Bu, mevcut çevre hesaplayıcısının yalnızca iki kenar kabul ettiği anlamına gelmez: hesaplayıcı üç girdiye de ihtiyaç duyar, bu yüzden eksik kenar önce elle (veya kenar hesaplayıcısıyla) hesaplanıp sonra değerler girilmelidir." }
        ]
      },
      "sec-examples": {
        "h2": "Dik Üçgen Çevresine Adım Adım Örnekler",
        "blocks": [
          { "kind": "p", "text": "Aşağıdaki dört örnek, mevcut çözümlü örnekleri koruyup açıklamalarını genişletir. Her biri yerine koyar, toplar ve ardından Pisagor teoremiyle doğrular." },
          { "kind": "h3", "text": "Örnek 1: 3-4-5 Dik Üçgeni" },
          { "kind": "p", "text": "Verilen: [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Formül: [[P=a+b+c]]" },
          { "kind": "p", "text": "Yerine koyma: [[P=3+4+5]]" },
          { "kind": "p", "text": "Toplama: [[P=12]]" },
          { "kind": "p", "text": "Son yanıt: [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Doğrulama: [[3^2+4^2=5^2]], yani [[9+16=25]]. Ölçümler Pisagor teoremini sağlıyor, bu yüzden bir dik üçgen oluşturuyorlar: dik kenarlar üzerine kurulan iki küçük kare, hipotenüs üzerine kurulan kareyi tam olarak doldurur." },
          { "kind": "h3", "text": "Örnek 2: 5-12-13 Dik Üçgeni" },
          { "kind": "p", "text": "Verilen: [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Yerine koyma: [[P=5+12+13]]" },
          { "kind": "p", "text": "Son yanıt: [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "p", "text": "Doğrulama: [[5^2+12^2=13^2]], yani [[25+144=169]]. Eşitlik geçerli bir dik üçgeni doğrular." },
          { "kind": "h3", "text": "Örnek 3: 8-15-17 Dik Üçgeni" },
          { "kind": "p", "text": "Verilen: [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Yerine koyma: [[P=8+15+17]]" },
          { "kind": "p", "text": "Son yanıt: [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "p", "text": "Doğrulama: [[8^2+15^2=17^2]], yani [[64+225=289]]. Yine kareler dengeleniyor, dik açıyı doğruluyor." },
          { "kind": "h3", "text": "Örnek 4: Ondalıklı Kenar Uzunlukları" },
          { "kind": "p", "text": "Verilen: [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Yerine koyma: [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Son yanıt: [[[\\boxed{P=15\\text{ units}}]]]" },
          { "kind": "p", "text": "Doğrulama: [[2.5^2+6^2=6.5^2]], yani [[6.25+36=42.25]]. Ondalıklı değerler formülü değiştirmez: toplama tam sayılar ve ondalıklar için aynı şekilde işler ve doğrulama aritmetiği aynıdır." }
        ],
        "table": {
          "headers": ["Üçgen", "Dik kenar a", "Dik kenar b", "Hipotenüs c", "Çevre P", "Doğrulama"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["Tablo, aynı iki adımlı ritim, önce topla sonra doğrula, değişmeden kalırken farklı kenar uzunluklarının farklı sınır ölçümleri ürettiğini gösteriyor."]
      },
      "sec-missing": {
        "h2": "Bir Kenarı Eksik Dik Üçgenin Çevresi Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "Mevcut çevre hesaplayıcısı üç kenar uzunluğunun da girilmesini ister. Bir kenar bilinmiyorsa, önce Pisagor teoremiyle hesaplayın, sonra toplayın. Aşağıdaki üç durum her olasılığı kapsar." },
          { "kind": "h3", "text": "Durum 1: Eksik Hipotenüsü Bulma" },
          { "kind": "p", "text": "İki dik kenar da bilindiğinde: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "p", "text": "Örnek: [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Şimdi hesaplayın: [[P=6+8+10]], yani [[[\\boxed{P=24\\text{ units}}]]]" },
          { "kind": "h3", "text": "Durum 2: Eksik Bir Dik Kenarı Bulma" },
          { "kind": "p", "text": "Hipotenüs [[c]] ve dik kenar [[a]] bilindiğinde: [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]" },
          { "kind": "p", "text": "Örnek: [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Şimdi hesaplayın: [[P=5+12+13]], yani [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "h3", "text": "Durum 3: Diğer Eksik Dik Kenarı Bulma" },
          { "kind": "p", "text": "Hipotenüs [[c]] ve dik kenar [[b]] bilindiğinde: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]" },
          { "kind": "p", "text": "Örnek: [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Şimdi hesaplayın: [[P=8+15+17]], yani [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "h3", "text": "Eksik Kenar Neden Önce Bulunmalıdır?" },
          { "kind": "p", "text": "Çevre tam sınırı temsil eder. Bilinmeyen bir kenarı görmezden gelmek eksik bir sonuç üretir: iki bilinen kenar kısmi bir yol verir, çevre değil. Bu eksik kenar hesapları, mevcut çevre hesaplayıcısındaki ek modlar değil, destekleyici matematiksel yöntemlerdir. Yalnızca iki kenar biliyorsanız, Dik Üçgen Kenar Hesaplayıcısı üçüncüyü bulur, sonra çevre hesaplayıcısı işi bitirir." }
        ],
        "imgAlt": "6 ve 8 dik kenarlı dik üçgen; Pisagor ile bulunan 10 hipotenüs ve 24 çevre",
        "figcaption": "6 ve 8 dik kenarları Pisagor teoremiyle c = 10 verir, sonra P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Dik Üçgen Çevresinin Gerçek Hayattaki Kullanımları",
        "blocks": [
          { "kind": "p", "text": "On iki gerçekçi, tamamen çözülmüş örnek aşağıda. Her biri bir durumu adlandırır, üç kenar ölçüsü verir, toplamayı gösterir ve sonucun neyi tahmin etmeye yardımcı olduğunu açıklar. Her birini basitleştirilmiş bir dik üçgensel geometrik model olarak ele alın: gerçek nesneler nadiren mükemmel üçgendir, bu yüzden malzeme payları, kesim firesi ve inşaat doğrulaması çevre sayısının dışında kalır." },
          { "kind": "h3", "text": "Örnek 1: Üçgensel Cam Pencere Çerçevesi" },
          { "kind": "p", "text": "Üçgensel bir pencere çerçevesi [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]] ölçülerine sahiptir. O halde [[P=3+4+5]], yani [[[\\boxed{P=12\\text{ m}}]]] 12 metre, pencerenin üçgensel dış çizgisi etrafındaki toplam uzunluğu, kesilecek çerçeve stoğunun uzunluğunu temsil eder. Çerçeve ek yerleri ve kesim payları 12 metrenin ötesinde ek malzeme gerektirebilir." },
          { "kind": "h3", "text": "Örnek 2: Çatı Kenar Kaplaması" },
          { "kind": "p", "text": "Dik üçgensel bir çatı kesitinin [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]] ölçüsü vardır. O halde [[P=6+8+10]], yani [[[\\boxed{P=24\\text{ ft}}]]] Çevre, üçgensel çatı ucu dış çizgisi etrafındaki kaplamayı tahmin eder. Saçaklardaki köşeler ve bindirmeler satın alınan uzunluğa eklenir." },
          { "kind": "h3", "text": "Örnek 3: Üçgensel Bahçe Çiti" },
          { "kind": "p", "text": "Üçgensel bir bahçe bölümünün [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]] ölçüsü vardır. O halde [[P=5+12+13]], yani [[[\\boxed{P=30\\text{ m}}]]] Toplam sınır uzunluğu bahçenin etrafında gereken çiti tahmin eder. Kapılar, direkler, bindirmeler ve montaj payları 30 metrelik çit hattından ayrı sayılır." },
          { "kind": "h3", "text": "Örnek 4: Çelik Destek Braketi" },
          { "kind": "p", "text": "Dik üçgensel bir metal braketin [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]] ölçüsü vardır. O halde [[P=8+15+17]], yani [[[\\boxed{P=40\\text{ cm}}]]] Çevre, braketin dış kenarını tanımlar ve koruyucu kenar malzemesini tahmin etmeye yardımcı olur. Yapısal dayanımı belirlemez; bu, kenar uzunluğundan ziyade kalınlığa, alaşıma ve yük yollarına bağlıdır." },
          { "kind": "h3", "text": "Örnek 5: Üçgensel Kumaş Pankart" },
          { "kind": "p", "text": "Bir kumaş pankartın [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]] ölçüsü vardır. O halde [[P=9+12+15]], yani [[[\\boxed{P=36\\text{ ft}}]]] Çevre, kenar kıvırma veya bordür gerektiren toplam kenar uzunluğunu tahmin eder. Dikiş ve katlama için ek kumaş 36 fitin dışındadır." },
          { "kind": "h3", "text": "Örnek 6: Üçgensel Tabela Çerçevesi" },
          { "kind": "p", "text": "Dik üçgensel bir tabela panelinin [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]] ölçüsü vardır. O halde [[P=12+16+20]], yani [[[\\boxed{P=48\\text{ in}}]]] Çevre, panelin etrafındaki çerçeveyi veya dekoratif bordürü tahmin eder." },
          { "kind": "h3", "text": "Örnek 7: Peyzaj Bordürü" },
          { "kind": "p", "text": "Dik üçgensel bir peyzaj bölümünün [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]] ölçüsü vardır. O halde [[P=7+24+25]], yani [[[\\boxed{P=56\\text{ m}}]]] Bu sonuç, fire ve ek yeri bindirmesinden önce bölüm için peyzaj kenar şeridinin tam uzunluğunu tahmin eder." },
          { "kind": "h3", "text": "Örnek 8: Güneş Paneli Destek Çerçevesi" },
          { "kind": "p", "text": "Küçük dik üçgensel bir destek çerçevesinin [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]] ölçüsü vardır. O halde [[P=9+40+41]], yani [[[\\boxed{P=90\\text{ cm}}]]] Çevre, çerçevenin tam üçgensel dış çizgisini tanımlar." },
          { "kind": "h3", "text": "Örnek 9: Üçgensel Tente Bordürü" },
          { "kind": "p", "text": "Dik üçgensel bir tente bölümünün [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]] ölçüsü vardır. O halde [[P=15+20+25]], yani [[[\\boxed{P=60\\text{ ft}}]]] Çevre, bağlantı donanımı hariç, kumaşın etrafında gereken bordür malzemesini tahmin eder." },
          { "kind": "h3", "text": "Örnek 10: Depo Çatı Ucu Kaplaması" },
          { "kind": "p", "text": "Basitleştirilmiş bir depo çatı ucu bölümünün [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]] ölçüsü vardır. O halde [[P=11+60+61]], yani [[[\\boxed{P=132\\text{ ft}}]]] Toplam çevre, modellenen üçgensel bölümün üç dış kenarını temsil eder." },
          { "kind": "h3", "text": "Örnek 11: Endüstriyel Üretim Paneli" },
          { "kind": "p", "text": "Dik üçgensel bir üretim panelinin [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]] ölçüsü vardır. O halde [[P=13+84+85]], yani [[[\\boxed{P=182\\text{ cm}}]]] Sonuç, panel için koruyucu kenar profillerini veya bordür malzemesini tahmin etmeye yardımcı olur." },
          { "kind": "h3", "text": "Örnek 12: Kontrplak Destek Köşebendi" },
          { "kind": "p", "text": "Dik üçgensel bir kontrplak destek plakasının [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]] ölçüsü vardır. O halde [[P=28+45+53]], yani [[[\\boxed{P=126\\text{ cm}}]]] Çevre, kontrplak plakanın tam dış kenarını temsil eder." }
        ],
        "table": {
          "headers": ["Pratik uygulama", "Dik kenar a", "Dik kenar b", "Hipotenüs c", "Çevre P", "Birim"],
          "rows": [
            ["Üçgensel cam pencere çerçevesi", "3", "4", "5", "12", "m"],
            ["Çatı kenar kaplaması", "6", "8", "10", "24", "ft"],
            ["Üçgensel bahçe çiti", "5", "12", "13", "30", "m"],
            ["Çelik destek braketi", "8", "15", "17", "40", "cm"],
            ["Üçgensel kumaş pankart", "9", "12", "15", "36", "ft"],
            ["Üçgensel tabela çerçevesi", "12", "16", "20", "48", "in"],
            ["Peyzaj bordürü", "7", "24", "25", "56", "m"],
            ["Güneş paneli destek çerçevesi", "9", "40", "41", "90", "cm"],
            ["Üçgensel tente bordürü", "15", "20", "25", "60", "ft"],
            ["Depo çatı ucu kaplaması", "11", "60", "61", "132", "ft"],
            ["Endüstriyel üretim paneli", "13", "84", "85", "182", "cm"],
            ["Kontrplak destek köşebendi", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["Pratik sınırları unutmayın: malzeme payları gerekebilir, kesim firesi dahil değildir, çerçeve ek yerleri malzeme gereksinimini artırabilir, kapılar ve açıklıklar çit miktarlarını etkiler, gerçek inşaat ölçüleri doğrulanmalıdır ve çevre tek başına yapısal dayanımı veya yük kapasitesini belirlemez."],
        "imgAlt": "Gerçek dünyadan dört dik üçgen çevre örneği: pencere çerçevesi, çatı kaplaması, bahçe bordürü, çelik braket",
        "figcaption": "Pencere, çatı, bahçe ve braket: her panel üçgensel sınırı ve çevresinin izini sürer."
      },
      "sec-properties": {
        "h2": "Dik Üçgen Çevresinin Özel Özellikleri",
        "blocks": [
          { "kind": "p", "text": "Basit toplamanın ötesinde, dik üçgenin çevresi birkaç keskin eşitsizliğe uyar. Bunlar hesaplanan herhangi bir sonucun hızlı kontrolleri olarak da işe yarar." },
          { "kind": "h3", "text": "Çevre, Hipotenüsün İki Katından Büyüktür" },
          { "kind": "p", "text": "Geçerli her üçgen için üçgen eşitsizliği [[a+b>c]] verir. Her iki tarafa [[c]] ekleyin: [[a+b+c>2c]]. Dolayısıyla [[[\\boxed{P>2c}]]] Düz bir dille: iki dik kenarın toplamı her zaman hipotenüsten uzundur, bu yüzden iki tarafa da hipotenüsü eklemek eşitsizliğin yönünü aynı tutar. 3-4-5 üçgeni için [[P=12]] ve [[2c=10]] olur ve 12 gerçekten 10'dan büyüktür." },
          { "kind": "h3", "text": "Çevre, Hipotenüsün Üç Katından Küçüktür" },
          { "kind": "p", "text": "Hipotenüs her iki dik kenardan da uzun olduğundan, [[a<c]] ve [[b<c]]. Dolayısıyla [[a+b<2c]]. [[c]] eklemek [[[\\boxed{P<3c}]]] verir. Bu yararlı bir hızlı kontroldür: hipotenüsün üç katına eşit ya da onu aşan herhangi bir çevre iddiası geçerli bir dik üçgene ait olamaz. 3-4-5 üçgeni için [[3c=15]] olur ve 12 onun rahatça altındadır." },
          { "kind": "h3", "text": "45-45-90 Üçgenin Çevresi" },
          { "kind": "p", "text": "45-45-90 üçgeninde iki dik kenarın uzunluğu aynıdır. Her dik kenar [[k]]'ya eşit olsun. Hipotenüs [[c=k\\sqrt{2}]] olur. Dolayısıyla [[P=k+k+k\\sqrt{2}]], yani [[[\\boxed{P=k(2+\\sqrt{2})}]]] [[k=5]] ile çevre [[5(2+\\sqrt{2})\\approx17.07]] olur: 5'lik iki dik kenar artı yaklaşık 7.07'lik bir hipotenüs." },
          { "kind": "h3", "text": "30-60-90 Üçgenin Çevresi" },
          { "kind": "p", "text": "En kısa dik kenar [[k]] ise, uzun dik kenar [[k\\sqrt{3}]] ve hipotenüs [[2k]] olur. Dolayısıyla [[P=k+k\\sqrt{3}+2k]], yani [[[\\boxed{P=k(3+\\sqrt{3})}]]] [[k=4]] ile kenarlar 4, yaklaşık 6.93 ve 8 olur; çevre yaklaşık 18.93 verir." },
          { "kind": "h3", "text": "Sabit Bir Hipotenüs İçin En Büyük Çevreye Hangi Dik Üçgen Sahiptir?" },
          { "kind": "p", "text": "Sezgisel olarak, hipotenüs sabit kalırken iki dik kenar birlikte büyüdükçe çevre büyür ve hiçbir dik kenar aç kalmadığında, yani iki dik kenar eşit olduğunda en büyük olur. Bu 45-45-90 üçgenidir. Kesin ifade [[a+b\\leq\\sqrt{2(a^2+b^2)}]] eşitsizliğini kullanır. [[a^2+b^2=c^2]] olduğundan, [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]] elde edilir ve eşitlik tam olarak [[a=b]] iken olur. Yani bir hipotenüsü paylaşan tüm dik üçgenler arasında çevre yarışını ikizkenar dik üçgen kazanır." }
        ]
      },
      "sec-vs-area": {
        "h2": "Çevre ile Alan Arasındaki Fark Nedir?",
        "blocks": [
          { "kind": "p", "text": "Çevre ve alan ikisi de bir üçgeni tanımlar ama farklı soruları yanıtlar. Bu bölüm çizgiyi dikkatle çeker." },
          { "kind": "h3", "text": "Çevre Dış Sınırı Ölçer" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] üçgenin etrafındaki toplam mesafeyi ölçer. Birimleri doğrusaldır: metre, santimetre, milimetre, fit, inç. Kenarın izini süren malzemenin ne kadar olduğunu söyler." },
          { "kind": "h3", "text": "Alan Kapalı Yüzeyi Ölçer" },
          { "kind": "p", "text": "Dik üçgen için [[[\\boxed{K=\\frac{ab}{2}}]]] İki dik kenar taban ve yükseklik görevi görür, bu yüzden formülde hipotenüs görünmez. Alan kare birimler kullanır: metrekare, santimetrekare, fitkare, inçkare. Sınırın içinde kalan yüzeyin ne kadar olduğunu söyler." },
          { "kind": "h3", "text": "3-4-5 Üçgeni Kullanan Karşılaştırmalı Örnek" },
          { "kind": "p", "text": "Çevre: [[P=3+4+5]], yani [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Alan: [[K=\\frac{3\\times4}{2}]], yani [[[\\boxed{K=6\\text{ square units}}]]]" },
          { "kind": "p", "text": "12 ve 6 sayıları aynı üçgenin tamamen farklı özelliklerini tanımlar: biri onun etrafındaki yürüyüş, diğeri kapladığı zemindir." },
          { "kind": "h3", "text": "İki Dik Üçgen Aynı Çevreye ama Farklı Alanlara Sahip Olabilir mi?" },
          { "kind": "p", "text": "Evet. Çevre tek başına alanı benzersiz biçimde belirlemez; üçgenin şekli ve oranları kapladığı alanı etkiler. 3-4-5 üçgeninin çevresi 12, alanı 6'dır. 45-45-90 üçgeninin çevresi de 12 olabilir: [[P=k(2+\\sqrt{2})=12]]'den dik kenar [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]] olur ve alanı [[K=\\frac{k^2}{2}\\approx6.18]] birimkare olur, 6'dan biraz büyük. Aynı sınır uzunluğu, farklı iç mekan: ikizkenar şekil biraz daha fazlasını içine alır." }
        ],
        "imgAlt": "3-4-5 üçgeni: vurgulu sınırda P eşittir 12, gölgeli iç alanda K eşittir 6",
        "figcaption": "Vurgulu kenar çevredir; gölgeli iç alan alandır. İki farklı ölçüm."
      },
      "sec-semiperimeter": {
        "h2": "Çevre ile Yarı Çevre Arasındaki İlişki Nedir?",
        "blocks": [
          { "kind": "p", "text": "Yarı çevre, tam çevrenin yarısıdır: [[[\\boxed{s=\\frac{P}{2}}]]] Dik üçgen için bu [[[\\boxed{s=\\frac{a+b+c}{2}}]]] olur. Bu sayfada destekleyici bir ölçüm olarak kalır, ikinci bir ana konu olarak değil." },
          { "kind": "h3", "text": "Sayısal Örnek" },
          { "kind": "p", "text": "[[a=3,\\;b=4,\\;c=5]] kullanın. Çevre [[P=12]] olur, yani yarı çevre [[s=\\frac{12}{2}=6]] olur. İkisi de aynı birimlerde doğrusal ölçümlerdir; biri diğerinin yarısıdır." },
          { "kind": "h3", "text": "Yarı Çevre Neden Yararlıdır?" },
          { "kind": "p", "text": "Yarı çevre, üçgen geometrisinde önemli bir ara ölçümdür. Heron'un alan formülünde, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], iç yarıçap bağıntısında [[K=rs]] ve birkaç ileri geometri ispatını basitleştirmede görünür. Bir formül [[s]] istediğinde önce çevreyi hesaplayıp yarıya bölün. Özel bir araç için Dik Üçgen Yarı Çevre Hesaplayıcısını kullanın." }
        ]
      },
      "sec-units": {
        "h2": "Dik Üçgen Çevre Hesaplamalarında Ölçü Birimlerini Anlama",
        "blocks": [
          { "kind": "p", "text": "Çevre her uzunluk biriminde işler: metre, santimetre, milimetre, kilometre, fit, inç, yarda veya mil. Sayı birimle değişir ama üçgen değişmez." },
          { "kind": "h3", "text": "Üç Kenar Ölçümü de Neden Uyumlu Birimler Kullanmalıdır?" },
          { "kind": "p", "text": "Çevre toplamayla hesaplanır ve toplama yalnızca benzer büyüklükler arasında anlamlıdır. Dönüşümsüz 3 fite 48 inç eklemek iki ölçeği karıştırır ve anlamsız bir toplam üretir. Önce her kenarı tek bir ortak birime dönüştürün, sonra toplayın." },
          { "kind": "h3", "text": "Çözümlü Birim Dönüşüm Örneği" },
          { "kind": "p", "text": "Verilen [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. İnçleri fite çevirin: [[48\\text{ inches}=4\\text{ ft}]]. Artık üç kenar da fit cinsinden, yani [[P=3+4+5]] ve [[[\\boxed{P=12\\text{ ft}}]]] Dönüşüm toplamadan önce yapılmalıdır, sonra değil." },
          { "kind": "h3", "text": "Hesaplayıcının Birim Seçicileri Nasıl Yardımcı Olur" },
          { "kind": "p", "text": "Bu sayfadaki üç girdinin her biri kendi birim seçicisini taşır. Farklı kenarlar için farklı birimler seçtiğinizde, hesaplayıcı toplamadan önce her girdiyi otomatik olarak ortak birime dönüştürür: ilk kenar için seçilen birimi okur ve diğer ikisini tam uzunluk oranlarını kullanarak (1 inç = 0.0254 m, 1 fit = 0.3048 m ve benzeri) eşleşecek şekilde ölçekler. Sonuç o ortak birimde raporlanır. Yukarıda gösterildiği gibi elle de dönüştürebilirsiniz ama seçiciler aritmetiği ortadan kaldırır." },
          { "kind": "h3", "text": "Ondalıklı Ölçümlerle Çalışma" },
          { "kind": "p", "text": "[[a=2.5,\\;b=6,\\;c=6.5]] kullanın. O halde [[P=2.5+6+6.5]], yani [[[\\boxed{P=15\\text{ units}}]]] Ondalıklı değerler tam sayılarla tamamen aynı şekilde toplanır; ondalık noktalar toplamda basitçe hizalanır." },
          { "kind": "h3", "text": "İrrasyonel Kenar Uzunluklarıyla Çalışma" },
          { "kind": "p", "text": "[[a=1,\\;b=1,\\;c=\\sqrt{2}]] olan bir üçgen alın. O halde [[P=1+1+\\sqrt{2}]], yani [[[\\boxed{P=2+\\sqrt{2}}]]], yaklaşık olarak [[P\\approx3.4142]]. Tam köklü biçimi korumak matematiksel problemlerde yararlıdır, çünkü tam hassasiyeti korur; ondalık yaklaşım nihai raporlama içindir." },
          { "kind": "h3", "text": "Neden Çok Erken Yuvarlamaktan Kaçınmalısınız?" },
          { "kind": "p", "text": "Erken yuvarlama, nihai toplamanın sonra sakladığı küçük hatalar sokar. Bir kenar [[\\sqrt{2}]] gibi irrasyonelse, toplama yapmadan önce 1.41'e yuvarlamak gerçek uzunluğun bir kısmını tıraşlar ve birkaç böyle kenar varsa hata birikir. Ara hesaplamalarda tam hassasiyeti koruyun ve yalnızca nihai sonucu problemin gerektirdiği doğrulukta yuvarlayın." }
        ]
      },
      "sec-mistakes": {
        "h2": "Dik Üçgen Çevresi Hesaplarken Yapılan Yaygın Hatalar",
        "blocks": [
          { "kind": "p", "text": "On altı hata yanlış çevrenin neredeyse tamamını açıklar. Her biri nedeni ve doğru yaklaşımla açıklanır." },
          { "kind": "p", "text": "<strong>1. Hipotenüsü dahil etmeyi unutmak.</strong> En yaygın hata: iki dik kenarı toplayıp durmak. 3-4-5'te bu 12 yerine 7 verir. Her zaman üç kenarı da toplayın." },
          { "kind": "p", "text": "<strong>2. Yalnızca iki dik kenarı kullanmak.</strong> Yukarıdakiyle aynı kök neden, çoğunlukla problemi yanlış okumaktan. Sınırın üç kenarı vardır; üçünü de sayın." },
          { "kind": "p", "text": "<strong>3. Çevreyi alanla karıştırmak.</strong> Çevre [[a+b+c]] doğrusal birimlerdedir; alan [[ab/2]] kare birimlerdedir. Soruyu okuyun: 'etrafında' çevre, 'içinde' alan demektir." },
          { "kind": "p", "text": "<strong>4. Hipotenüsü dik kenar olarak girmek.</strong> En uzun değeri dik kenar alanına koymak geometriyi bozar. Hipotenüs yuvasında en uzun kenar olmalıdır." },
          { "kind": "p", "text": "<strong>5. Yanlış kenarı hipotenüs seçmek.</strong> 5 dik kenar alanında dururken 4 [[c]] olarak girilirse her kontrol başarısız olur. Önce değerleri sıralayın: en büyük olan [[c]]'dir." },
          { "kind": "p", "text": "<strong>6. Dik üçgen oluşturmayan ölçümler kullanmak.</strong> 'Dik üçgen' etiketine güvenmeden önce [[a^2+b^2=c^2]]'yi test edin. Başarısız olursa çevre formülü yine toplar ama üçgen dik açılı değildir." },
          { "kind": "p", "text": "<strong>7. Santimetreleri metrelerle karıştırmak.</strong> 3 m'ye 40 cm eklemek hiçbir şeyin 43'ü olmaz. Önce tek birime dönüştürün." },
          { "kind": "p", "text": "<strong>8. Fitleri inçlerle karıştırmak.</strong> Klasik emperyal tuzak. Toplamadan önce inçleri fite çevirin (12'ye bölün) ya da birim seçicilerinin yapmasına izin verin." },
          { "kind": "p", "text": "<strong>9. Çevreyi kare birimlerle raporlamak.</strong> 12 cm karelik bir çevre kategori hatasıdır: üçgenin etrafındaki yürüyüş bir uzunluktur, cm, m, ft veya inç ile ölçülür." },
          { "kind": "p", "text": "<strong>10. Ölçümleri çok erken yuvarlamak.</strong> Toplamadan önce [[\\sqrt{2}]]'yi 1.4'e yuvarlamak hata biriktirir. Yalnızca nihai yanıtı yuvarlayın." },
          { "kind": "p", "text": "<strong>11. Eksik kenarı hesaplamayı unutmak.</strong> İki bilinen kenar bir çevre değildir. Önce Pisagor teoremiyle üçüncüyü bulun, sonra toplayın." },
          { "kind": "p", "text": "<strong>12. Pisagor teoremini yanlış kullanmak.</strong> Hipotenüs biçimi kareleri toplar ([[c=\\sqrt{a^2+b^2}]]); dik kenar biçimi çıkarır ([[b=\\sqrt{c^2-a^2}]]). İkisini karıştırmak var olmayan bir kenar uydurur." },
          { "kind": "p", "text": "<strong>13. Negatif veya sıfır kenar uzunlukları girmek.</strong> Uzunluklar pozitiftir. Sıfır veya negatif bir girdi hiçbir üçgen tanımlamaz ve hesaplayıcı onu haklı olarak reddeder." },
          { "kind": "p", "text": "<strong>14. Üçgen eşitsizliğini görmezden gelmek.</strong> [[a+b\\leq c]] ise, üç uzunluk hiç üçgen oluşturamaz. Hesaplamadan önce kontrol edin." },
          { "kind": "p", "text": "<strong>15. Yarı çevrenin tam çevre olduğunu varsaymak.</strong> Toplamı 2'ye bölmek [[s]]'yi verir, [[P]]'yi değil. 3-4-5 için [[(3+4+5)/2=6]] yarı çevredir; çevre 12'dir." },
          { "kind": "p", "text": "<strong>16. Çevrenin tek başına üçgenin alanını belirlediğini varsaymak.</strong> 3-4-5 ile 45-45-90 karşılaştırmasının gösterdiği gibi, eşit çevreler farklı alanları gizleyebilir. Çevre sınırı sabitler, iç mekanı değil." },
          { "kind": "p", "text": "<strong>Yanlış ve doğru, yan yana.</strong> [[a=3,\\;b=4,\\;c=5]] verildiğinde: yanlış olan [[P=3+4=7]]'dir; hipotenüsü atlar ve yalnızca iki dik kenarı ölçer. Doğru olan [[P=3+4+5=12]]'dir. Ve [[(3+4+5)/2=6]] yarı çevredir, kendine özgü kullanımları olan farklı bir büyüklük, tam çevre değil." }
        ]
      },
      "sec-verify": {
        "h2": "Dik Üçgen Çevrenizin Doğru Olduğu Nasıl Kontrol Edilir",
        "blocks": [
          { "kind": "p", "text": "Yedi bağımsız kontrol neredeyse her hatayı yakalar. 3-4-5 üçgeni her birini gösterir. Bağımsız kontroller önemlidir, çünkü farklı şekillerde başarısız olurlar: iki ilgisiz yöntem hemfikir olduğunda yanıt, ödeve, teknik çizimlere ya da malzeme planlamasına girerken güvenini kazanmıştır." },
          { "kind": "p", "text": "<strong>Yöntem 1: Üç kenarı da yeniden toplayın.</strong> [[P=a+b+c]]'yi sıfırdan yeniden hesaplayın: [[3+4+5=12]]. İkinci bir geçiş tuş vuruşu ve aritmetik kaymaları yakalar." },
          { "kind": "p", "text": "<strong>Yöntem 2: Pisagor ilişkisini doğrulayın.</strong> [[a^2+b^2=c^2]]'yi kontrol edin: [[9+16=25]]. Bu, kenarların bir dik üçgen oluşturduğunu doğrular; çevrenin dayandığı kenar etiketlerini geçerli kılar." },
          { "kind": "p", "text": "<strong>Yöntem 3: Hipotenüsü kontrol edin.</strong> [[c>a]] ve [[c>b]] olduğunu doğrulayın: 5, 3'ten de 4'ten de büyüktür. Sözde hipotenüs en uzun kenar değilse etiketler yanlıştır." },
          { "kind": "p", "text": "<strong>Yöntem 4: Üçgen eşitsizliğini kontrol edin.</strong> [[a+b>c]] olduğunu doğrulayın: [[3+4=7>5]]. Herhangi iki kenarın toplamı üçüncüyü aşmalıdır, yoksa üçgen yoktur." },
          { "kind": "p", "text": "<strong>Yöntem 5: Çevre sınırlarını kontrol edin.</strong> [[2c<P<3c]] olduğunu doğrulayın: [[10<12<15]]. Bu sınırlar geçerli her dik üçgen için hızlı zihinsel kontrollerdir." },
          { "kind": "p", "text": "<strong>Yöntem 6: Ölçü birimlerini kontrol edin.</strong> Üç girdinin de tek bir birimi paylaştığını doğrulayın. Karışık birimler, aritmetik mükemmel olsa bile toplamı geçersiz kılar." },
          { "kind": "p", "text": "<strong>Yöntem 7: Sonucu canlı görselleştirmeyle karşılaştırın.</strong> Bu sayfadaki mevcut diyagram üçgeni girdilerinizden yeniden çizer. Bir kenar yanlış etiketlendiyse veya bir değer yanlış yazıldıysa resim yanlış görünür: dik kenardan kısa bir hipotenüs ya da kapanmayan bir şekil. Sayı ile resim anlaşmadığında resme güvenin, sonra girdi hatasını bulun." }
        ]
      },
      "sec-conclusion": {
        "h2": "Üç Kenar, Tek Sınır, Kestirme Yok",
        "blocks": [
          { "kind": "p", "text": "Dik üçgenin çevresi bu sayfadaki en basit fikirdir ve ihmal yoluyla en kolay yanlış hesaplanandır. Formül üç sayı ister, çünkü sınırın üç kenarı vardır ve hipotenüs, şekli kapatan kenar olarak toplamdaki yerini hak eder. Diğer her şey, adım adım yöntem, eksik kenar kurtarma, eşitsizlikler, doğrulama kontrolleri, makul görünümlü yanlış yanıtlar üreten küçük etiketleme ve birim hatalarına karşı o tek toplamayı korumak için vardır." },
          { "kind": "p", "text": "Üç kenar da ölçülmüşken bu sayfanın hesaplayıcısını kullanın, değilken Pisagor teoremiyle eksik kenarı kurtarın ve sayı bir malzeme siparişine girmeden önce sonucu 2c < P < 3c sınırlarına karşı kontrol edin. Soru sınırın içindeki yüzeye döndüğünde alan hesaplayıcısı sizi bekliyor; daha derin bir formül için sınırın yarısına döndüğünde yarı çevre hesaplayıcısı devralıyor." }
        ]
      }
    },
    "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
    "relatedIntro": "Bu araçların her biri çevre hesaplamasını tek bir yönde genişletir: eksik kenarlar, yarı çevreler, yüzeyler, birleşik ölçümler ya da her şeyin arkasındaki teorem.",
    "relatedItems": [
      "Dik Üçgen Ölçümleri Hesaplayıcısı",
      "Dik Üçgen Yarı Çevre Hesaplayıcısı",
      "Dik Üçgen Kenar Hesaplayıcısı",
      "Dik Üçgen Alan Hesaplayıcısı",
      "Pisagor Teoremi Hesaplayıcısı"
    ],
    "faqHeading": "Sık Sorulan Sorular",
    "faqs": [
      { "question": "Dik üçgenin çevre formülü nedir?", "answer": "Formül P = a + b + c'dir; burada a ve b 90 derecelik açıyı oluşturan iki dik kenar, c ise en uzun kenar olan hipotenüstür. Üç kenar uzunluğunu da toplayın; sonuç doğrusal birimlerde toplam sınır uzunluğudur." },
      { "question": "Dik üçgenin çevresini nasıl hesaplarım?", "answer": "İki dik kenarı ve hipotenüsü belirleyin, üçünün de aynı birimi kullandığını doğrulayın, P = a + b + c formülünde yerine koyun ve toplayın. 3-4-5 üçgeni için: P = 3 + 4 + 5 = 12 birim. Bu sayfadaki hesaplayıcı aynı adımları uygular ve çalışmasını gösterir." },
      { "question": "Hipotenüsü neden dahil etmeliyim?", "answer": "Hipotenüs, üçgenin üç dış kenarından biridir, bu yüzden olmadan sınır eksik kalır. 3-4-5 üçgeninde yalnızca iki dik kenarı toplamak 7 verir; bu, birleşik dik kenar uzunluğudur, çevre değil. Üçgenin etrafındaki tam yürüyüş 3 + 4 + 5 = 12'dir." },
      { "question": "Bir kenar eksikse çevreyi hesaplayabilir miyim?", "answer": "Evet, ama önce eksik kenarı Pisagor teoremiyle kurtarın. 6 ve 8 dik kenarlarıyla hipotenüs sqrt(36 + 64) = 10 olur, yani çevre 6 + 8 + 10 = 24'tür. Hipotenüsü 13, dik kenarı 5 ise eksik dik kenar sqrt(169 - 25) = 12 olur, yani çevre 30'dur." },
      { "question": "Çevreyi hesaplamadan önce hipotenüsü nasıl bulurum?", "answer": "İki dik kenar da biliniyorsa c = sqrt(a^2 + b^2) kullanın. 6 ve 8 dik kenarları için: c = sqrt(36 + 64) = sqrt(100) = 10. Hipotenüs bilindikten sonra çevreyi bulmak için üç kenarı da toplayın." },
      { "question": "Çevre formülü dik üçgen için farklı mı?", "answer": "Hayır. P = a + b + c her üçgen için işler. Dik üçgende özel olan Pisagor ilişkisi a^2 + b^2 = c^2'dir; bu, eksik bir kenarı bulmanızı ya da ölçümlerin gerçekten bir dik üçgen oluşturduğunu doğrulamanızı sağlar." },
      { "question": "3-4-5 dik üçgenin çevresi nedir?", "answer": "Çevre 3 + 4 + 5 = 12 birimdir. Kenarlar 9 + 16 = 25'i sağlar, dik açıyı doğrular. 6-8-10 veya 9-12-15 gibi ölçekli sürümler orantılı olarak daha büyük çevrelerle aynı şekli korur." },
      { "question": "Üç kenarın dik üçgen oluşturduğunu nasıl doğrularım?", "answer": "c en uzun kenar olmak üzere a^2 + b^2 = c^2 olduğunu kontrol edin. 3, 4, 5 için: 9 + 16 = 25, yani üçgen dik açılıdır. Eşitlik başarısız olursa çevre formülü yine toplar ama üçgen dik üçgen değildir." },
      { "question": "Çevre ile alan arasındaki fark nedir?", "answer": "Çevre (P = a + b + c), metre veya fit gibi doğrusal birimlerde üçgenin etrafındaki toplam mesafeyi ölçer. Alan (K = ab/2), metrekare gibi kare birimlerde üçgenin içindeki yüzeyi ölçer. 3-4-5 üçgeninde çevre 12 birim, alan 6 birimkaredir." },
      { "question": "Çevre hesaplayıcısı ondalıklı değerleri destekliyor mu?", "answer": "Evet. Ondalıklı kenar uzunlukları tam sayılarla tamamen aynı şekilde işler: a = 2.5, b = 6, c = 6.5 için çevre 2.5 + 6 + 6.5 = 15 birimdir. Hesap sırasında tam hassasiyeti koruyun ve yalnızca nihai yanıtı yuvarlayın." },
      { "question": "Çevre için hangi birimleri kullanmalıyım?", "answer": "Her uzunluk birimi işler: metre, santimetre, milimetre, fit, inç, yarda veya mil. Toplamadan önce üç kenar da aynı birimi paylaşmalıdır. Hesaplayıcı, her girdi için birim seçicileri aracılığıyla her girdiyi otomatik olarak ortak birime dönüştürür." },
      { "question": "Çevre ile yarı çevre arasındaki ilişki nedir?", "answer": "Yarı çevre tam olarak çevrenin yarısıdır: s = P/2. 3-4-5 üçgeninde P = 12 ve s = 6'dır. Yarı çevre, Heron'un alan formülü ve iç yarıçap bağıntısı K = rs gibi ileri formüllerde görünür." }
    ]
  }
};
