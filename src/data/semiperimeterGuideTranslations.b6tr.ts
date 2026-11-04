// semiperimeterGuideTranslations.b6tr.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for Turkish (tr).
export const B6_TR = {
  "tr": {
    "tocHeading": "Bölüm Gezintisi",
    "tocItems": {
      "sec-intro": "Dik Üçgenin Yarı Çevresi Nasıl Hesaplanır",
      "sec-geometry": "Dik Üçgen Nedir?",
      "sec-meaning": "Dik Üçgenin Yarı Çevresi Nedir?",
      "sec-formula": "Dik Üçgen Yarı Çevre Formülü",
      "sec-calculator": "Dik Üçgen Yarı Çevre Hesaplayıcısı Nasıl Kullanılır",
      "sec-examples": "Dik Üçgen Yarı Çevresi İçin Adım Adım Örnekler",
      "sec-practical": "Dik Üçgen Yarı Çevresinin Gerçek Hayat Uygulamaları",
      "sec-inradius": "Yarı Çevre, Dik Üçgenin İç Yarıçapıyla Nasıl İlişkilidir?",
      "sec-heron": "Yarı Çevre, Heron Formülünde Nasıl Kullanılır?",
      "sec-vs-perimeter": "Çevre ile Yarı Çevre Arasındaki Fark Nedir?",
      "sec-missing-side": "Bir Kenar Eksikken Yarı Çevre Nasıl Hesaplanır",
      "sec-properties": "Dik Üçgen Yarı Çevresinin Önemli Özellikleri",
      "sec-units": "Yarı Çevre Hesaplamalarında Ölçü Birimlerini Anlamak",
      "sec-mistakes": "Dik Üçgen Yarı Çevresi Hesaplarken Yaygın Hatalar",
      "sec-verify": "Yarı Çevre Sonucunuzun Doğru Olduğu Nasıl Kontrol Edilir",
      "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "sec-faq": "Sık Sorulan Sorular",
      "sec-conclusion": "Sınırın Yarısı, Tam Anlayış"
    },
    "sections": {
      "sec-intro": {
        "h2": "Dik Üçgenin Yarı Çevresi Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "Bir dik üçgenin üç kenarını toplayın, sonra toplamı ikiye bölün." },
          { "kind": "p", "text": "Hesaplamanın tamamı budur ve bu hesaplayıcı, iki dik kenarı ve hipotenüsü girdiğinizde bunu her dik üçgen için gerçekleştirir. Üç kenar ölçüsüne ihtiyaç vardır çünkü üçgenin üç kenarı vardır ve hipotenüs dahil edilmelidir: dik açıya asla değmese de bu üç kenardan biridir. Toplam ikiye bölünür çünkü yarı çevre, tam çevrenin tam olarak yarısı olarak tanımlanır; bu, üçgen geometrisinde tekrar tekrar karşımıza çıkan bir büyüklüktür." },
          { "kind": "p", "text": "Hızlı bir örnek fikri gösterir. Verilenler [[a=3]], [[b=4]] ve [[c=5]]:" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "Tam çevre 12 birimdir, dolayısıyla yarı çevresi 6 birimdir. Yarı çevrenin doğrusal bir ölçüm olduğuna, bir alan ölçümü olmadığına dikkat edin: o bir uzunluktur; metre, fit veya sade birim cinsinden bildirilir, asla birim kare cinsinden değil. Bir formül çevrenin yarısını istediğinde işe yarar; bu, alan için Heron formülünde, iç yarıçap ilişkisinde ve tam çevrenin yalnızca işleri zorlaştıracağı birkaç geometrik ispatta karşımıza çıkar." }
        ]
      },
      "sec-geometry": {
        "h2": "Dik Üçgen Nedir?",
        "blocks": [
          { "kind": "p", "text": "İkiye bölme işleminden önce üç kenar doğru şekilde etiketlenmelidir. Aşağıdaki semboller bu kılavuzun tamamında sabit kalır ve hesaplayıcı da aynı adları kullanır." },
          { "kind": "h3", "text": "Dik Üçgenin Tanımı" },
          { "kind": "p", "text": "Dik üçgen, bir iç açısı tam 90 derece olan üçgendir. Üç köşesi, üç kenarı, iki dar açısı ve genellikle küçük bir kareyle işaretlenen bir dik açısı vardır. Dik açıyı oluşturan iki kenar dik kenarlardır; dik açının karşısındaki kenar hipotenüstür. Her üçgenin açıları toplamı 180 derece olduğundan, [[A+B+C=180^\\circ]] ve [[C=90^\\circ]] ile [[[\\boxed{A+B=90^\\circ}]]] elde edilir: iki dar açı bütünler açılardır, dolayısıyla birini bilmek diğerini belirler. Bu tabloyu doğru kurmak önemlidir çünkü yarı çevre formülü her kenarı bir sınır kenarı olarak ele alır ve yanlış etiketlenmiş bir kenar, bölme başlamadan toplamı bozar." },
          { "kind": "h3", "text": "İki Dik Kenar Nedir?" },
          { "kind": "p", "text": "[[a]] dik kenarı ve [[b]] dik kenarı, dik açının köşesinde birbirine dik olarak birleşen iki kenardır. Üçgenin yönüne göre ikisi de yatay veya dikey çizilebilir; onları tanımlayan, sayfadaki yönleri değil oluşturdukları 90 derecelik köşedir. Konum ve uzunluk bakımından hipotenüsten farklıdırlar: her dik kenar dik açıya değer ve her dik kenar hipotenüsten kısadır. Yarı çevre hesabında rolleri basittir: ikisi de sınır kenarıdır, dolayısıyla ikisi de yarıya bölünecek toplama girer." },
          { "kind": "h3", "text": "Hipotenüs Nedir?" },
          { "kind": "p", "text": "Hipotenüs, dik açının karşısındaki kenardır ve her zaman üçgenin en uzun kenarıdır. Dik açıyı asla oluşturmaz; onun karşısından uzanır ve iki dik kenarın uzak uçlarını birleştirir. Konum ve uzunluk bakımından dik kenarlardan farklıdır: dik kenarlar 90 derecede buluşurken hipotenüs her dik kenarla dar açıyla buluşur. Üçgensel sınırı tamamlar, bu yüzden yarı çevre hesabına dahil edilmelidir. İki dik kenar da bilindiğinde Pisagor teoremi onu bulur: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Doğru Kenar Etiketleri Nasıl Belirlenir" },
          { "kind": "p", "text": "[[a]] ve [[b]], 90 derecede buluşan iki kenardır; [[c]] ise dik açının karşısındadır. Dejenere olmayan bir dik üçgende [[c]] en uzun kenardır. Dik açı işareti, hangi kenarın [[c]] olduğunu söyler: o köşeye değmeyen kenardır. Hızlı bir sıralama kontrolü yardımcı olur: üç sayıyı sıralayın ve en büyüğü [[c]] rolünü oynamalıdır. En büyük kenar kare köşenin karşısında durmuyorsa etiketler yanlıştır ve onlara dayanarak hesaplanan yarı çevre de yanlış olur." },
          { "kind": "h3", "text": "Yarı Çevre Neden Üç Kenara da Bağlıdır?" },
          { "kind": "p", "text": "Yarı çevre, tam çevreden türetilir ve tam çevre sınırın her kenarını sayar. [[a]] ve [[b]] dik olsalar da hipotenüs üçgenin dış sınırının bir parçası olmaya devam eder: şekli kapatan kenardır. [[c]]'yi dışlamak daha kısa bir yarı çevre vermez; farklı, yanlış bir büyüklük verir. [[a=3]], [[b=4]], [[c=5]] için hipotenüsü dışarıda bırakmak [[(3+4)/2=3.5]] verir, oysa gerçek yarı çevre [[(3+4+5)/2=6]]'dır. Eksik 2,5 birim hipotenüsün payıdır ve hiçbir doğru formül onu atlayamaz." }
        ],
        "imgAlt": "a ve b dik kenarlı, c hipotenüslü, C köşesinde dik açılı, P = a+b+c ve s = (a+b+c)/2 değerlerini gösteren ABC dik üçgeni",
        "figcaption": "ABC üçgeni: a ve b dik kenarları C dik açısında buluşur, c hipotenüsü sınırı kapatır ve s = (a + b + c) / 2 çevrenin yarısıdır."
      },
      "sec-meaning": {
        "h2": "Dik Üçgenin Yarı Çevresi Nedir?",
        "blocks": [
          { "kind": "h3", "text": "Yarı Çevrenin Tanımı" },
          { "kind": "p", "text": "Yarı çevre, bir üçgenin tam çevresinin tam olarak yarısıdır. [[P]] üçgenin çevresindeki tam mesafe ise yarı çevre [[s]], [[[\\boxed{s=\\frac{P}{2}}]]] olur. Bir dik üçgen için tam çevre [[P=a+b+c]] olduğundan tanım [[[\\boxed{s=\\frac{a+b+c}{2}}]]] halini alır. Üç kenar uzunluğunun hepsi bölmeden önce toplanır: toplam tüm sınırı bir araya getirir ve ikiye bölme onu yarıya indirir. Hiçbir şey dışarıda bırakılmaz ve hiçbir şey iki kez sayılmaz." },
          { "kind": "h3", "text": "Neden Yarı Çevre Denir?" },
          { "kind": "p", "text": "Ad, parçalarına ayrıldığında kendini açıklar. <em>Yarı</em> yarım demektir, <em>çevre</em> ise tam sınır uzunluğu demektir. Bir araya gelince yarı çevre, çevrenin yarısı demektir. [[s]] harfi standart matematik sembolüdür ve pek çok üçgen formülünde görülür; bunun nedeni, yarıya indirilmiş sınır uzunluklarının çok sık karşımıza çıkmasıdır. Bir formül [[s]] istediğinde, istediği bu tek sayıdır: [[a+b+c]]'nin yarısı." },
          { "kind": "h3", "text": "Yarı Çevre Fiziksel Bir Yarım Sınır Yolu mu Anlatır?" },
          { "kind": "p", "text": "Bu, doğru kavranmaya değer ince bir noktadır. Yarı çevre, üç kenar uzunluğunun sayısal toplamının yarısıdır; ancak üçgenin sınırının yarısını kaplayan kesintisiz fiziksel bir güzergâhı anlatmak zorunda değildir. Örneğin 3-4-5 üçgeninin kenarları boyunca 6 birim yürümek, iki dik kenarı yürümek (3 + 4 = 7 zaten fazla gelir) veya bir dik kenar ile hipotenüsün bir kısmını yürümek anlamına gelebilir; tek bir doğal yarı yol yoktur. Yarı çevre öncelikle türetilmiş bir geometrik ölçümdür, yani formüllerin kullandığı elverişli bir ara değerdir; yerde adımlayacağınız bir mesafe değildir." },
          { "kind": "h3", "text": "Yarı Çevre Bir Uzunluk mu, Alan mı?" },
          { "kind": "p", "text": "Yarı çevre tek boyutlu bir ölçümdür: bir uzunluktur. Kenar uzunlukları metre ise [[s]] metredir; santimetre ise santimetredir; fit ise fittir; inç ise inçtir. Asla birim kare cinsinden ifade edilmemelidir. İkiye bölme sayının büyüklüğünü değiştirir, boyutunu değil: bir uzunluğu yarıya indirmek yine bir uzunluk bırakır. [[s]]'yi alanla karıştırmak en yaygın acemi hatalarından biridir ve birimleri düzgün tutmak bundan kaçınmanın en basit yoludur." },
          { "kind": "h3", "text": "Yarı Çevre Her Zaman En Uzun Kenardan Büyük müdür?" },
          { "kind": "p", "text": "Evet, her geçerli dejenere olmayan üçgen için ve üçgen eşitsizliği nedenini gösterir. Her üçgen [[a+b>c]] koşulunu sağlar: iki kısa kenarın toplamı en uzunu geçer. Her iki tarafa [[c]] ekleyin, [[a+b+c>2c]] elde edilir; ikiye bölünce sonuç [[[\\boxed{s>c}]]] olur. Bir dik üçgen için bu, yarı çevrenin her zaman hipotenüsten büyük olduğu anlamına gelir. 3-4-5 için [[s=6]], [[c=5]]'i geçer. Bu, elverişli bir sağduyu kontrolü sağlar: hesapladığınız yarı çevre hipotenüsten küçükse kenar etiketleri veya aritmetik yanlıştır." }
        ]
      },
      "sec-formula": {
        "h2": "Dik Üçgen Yarı Çevre Formülü",
        "blocks": [
          { "kind": "p", "text": "Aynı formülün, bilinenlere göre iki biçimi kullanılır. Kısa biçim tam çevreden başlar:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Genişletilmiş biçim üç kenardan başlar:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Her Değişkeni Anlamak" },
          { "kind": "p", "text": "[[s]] hesaplanan sonuç olan yarı çevredir. [[P]] tam çevre, yani tam sınır uzunluğudur. [[a]] birinci dik kenar, [[b]] ikinci dik kenardır; bu iki kenar birbirine diktir. [[c]] hipotenüstür: en uzun kenar, dik açının karşısındadır. [[P]] ile [[s]]'yi asla karıştırmayın: biri tüm sınırdır, diğeri onun yarısıdır." },
          { "kind": "h3", "text": "Neden İkiye Bölüyoruz?" },
          { "kind": "p", "text": "Bölme işlemi, bu büyüklüğü çevre değil <em>yarı</em>çevre yapan şeydir. [[a=3]], [[b=4]], [[c=5]] alın. Önce tam çevreyi hesaplayın: [[P=3+4+5]], yani [[P=12]]. Sonra ikiye bölün: [[s=12/2]], sonuç [[[\\boxed{s=6}]]] Matematiksel olarak bölme, sınır toplamını Heron formülü gibi formüllerin beklediği yarı değere ölçekler. Bunu atlamak farklı bir soruyu yanıtlar: yarı çevreyi değil, tam çevreyi." },
          { "kind": "h3", "text": "Neden Yalnızca İki Dik Kenarı Kullanamayız?" },
          { "kind": "p", "text": "Çünkü yalnızca dik kenarlar tüm sınır değildir. Hatalı yaklaşım [[s=(3+4)/2]] 3,5 verir; bu, bu üçgen için geometrik anlamı olmayan bir sayıdır: şeklin gerçek bir kenarı olan hipotenüsü yok sayar. Doğru yaklaşım önce üç kenarı da toplar: [[s=(3+4+5)/2]], sonuç [[[\\boxed{s=6}]]] Ayartıcı bir kestirme, her kenarı yarıya indirip sonra toplamaktır: [[1.5+2+2.5=6]]: bölme toplama üzerine dağıldığı için aritmetik burada tesadüfen tutar; ancak bu, formülün yapısını gizler ve hataya davetiye çıkarır. Önce toplayın, sonra bir kez bölün." },
          { "kind": "h3", "text": "Çevre ile Yarı Çevre Nasıl İlişkilidir?" },
          { "kind": "p", "text": "Aynı ölçümün iki farklı ölçekteki halidir. Yarı çevreyi iki katına çıkarmak çevreyi geri verir, çevreyi yarıya indirmek yarı çevreyi geri verir:" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Biri bilindiğinde diğer değer bulunabilir. Bir problem çevrenin 30 olduğunu söylüyorsa yarı çevre hemen 15'tir; bir hesaplama [[s=20]] veriyorsa tam çevre 40'tır. Bu iki yönlü ilişki aynı zamanda bir doğrulama aracıdır: [[s]]'yi kenarlardan hesapladıktan sonra onu iki katına çıkarmak kenar toplamını geri vermelidir." }
        ]
      },
      "sec-calculator": {
        "h2": "Dik Üçgen Yarı Çevre Hesaplayıcısı Nasıl Kullanılır",
        "blocks": [
          { "kind": "p", "text": "Bu sayfadaki hesaplayıcının tek işi vardır: bir dik üçgenin üç kenar uzunluğunu alır ve işlemin her adımını göstererek yarı çevreyi döndürür. Aşağıdaki adımlar mevcut arayüzle birebir uyumludur." },
          { "kind": "p", "text": "<strong>Adım 1: Yarı Çevre Hesaplayıcısını bulun.</strong> Sayfanın üst kısmına yakın, H1 başlığının altında, üç etiketli giriş alanıyla durur." },
          { "kind": "p", "text": "<strong>Adım 2: a dik kenarını belirleyin.</strong> Dik açıyı oluşturan iki kenardan birini seçin. Dik olan her kenar [[a]] olabilir." },
          { "kind": "p", "text": "<strong>Adım 3: b dik kenarını belirleyin.</strong> Diğer dik kenar [[b]] olur." },
          { "kind": "p", "text": "<strong>Adım 4: c hipotenüsünü belirleyin.</strong> Dik açının karşısındaki en uzun kenar [[c]]'dir. Üç ölçüyü sıralayıp en büyüğünü bu alana yerleştirmek en yaygın giriş hatasını önler." },
          { "kind": "p", "text": "<strong>Adım 5: Birinci dik kenarı girin.</strong> [[a]] değerini a Dik Kenarı alanına yazın." },
          { "kind": "p", "text": "<strong>Adım 6: İkinci dik kenarı girin.</strong> [[b]] değerini b Dik Kenarı alanına yazın." },
          { "kind": "p", "text": "<strong>Adım 7: Hipotenüsü girin.</strong> [[c]] değerini c Hipotenüsü alanına yazın." },
          { "kind": "p", "text": "<strong>Adım 8: Uygun ölçü birimlerini seçin.</strong> Her girişin kendi birim seçicisi vardır. Üç kenar da toplanmadan önce uyumlu birimler kullanmalıdır; metre ile santimetreyi karıştırmak toplamı bozar." },
          { "kind": "p", "text": "<strong>Adım 9: Yarı Çevreyi Hesapla düğmesine tıklayın.</strong> Araç üç kenarı toplar ve toplamı ikiye böler." },
          { "kind": "p", "text": "<strong>Adım 10: Gösterilen yarı çevreyi inceleyin.</strong> Sonuç birimiyle birlikte görünür; örneğin 3-4-5 üçgeni için [[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "<strong>Adım 11: Çözüm adımlarını kontrol edin.</strong> Hesaplayıcı yerine koymayı ve bölmeyi gösterir, böylece aritmetiği satır satır izleyebilirsiniz." },
          { "kind": "p", "text": "<strong>Adım 12: Çıktının tam çevrenin yarısı olduğunu doğrulayın.</strong> Sonucu iki katına çıkarın: 3-4-5 için [[2\\times6=12]], bu da [[3+4+5]] ile eşleşir." },
          { "kind": "p", "text": "<strong>Adım 13: Yeni bir hesaplamaya başlarken Sıfırla'yı kullanın.</strong> Sıfırla düğmesi üç girişi de temizler, böylece sonraki üçgen temiz bir başlangıç yapar." },
          { "kind": "h3", "text": "Her Girdi Ne Anlama Gelir?" },
          { "kind": "p", "text": "Üç girdi, üç sınır kenarına karşılık gelir. a Dik Kenarı ve b Dik Kenarı dik olan iki kenarı kabul eder; c Hipotenüsü en uzun kenarı kabul eder. Hesaplayıcı tam olarak girdiğinizi toplar ve toplamı yarıya indirir, dolayısıyla her alanın rolü sabittir: bir dik kenar değerini hipotenüs alanına yazmak toplamı değiştirir ve yanlış bir yarı çevre üretir." },
          { "kind": "h3", "text": "Ölçü Birimleri Neden Önemlidir?" },
          { "kind": "p", "text": "Yarı çevre, üç uzunluğun toplanmasıyla hesaplanır ve toplama uyumlu birimler gerektirir. Dönüştürme yapmadan 3 metreye 40 santimetre eklemek anlamsız bir toplam verir. Her girişin birim seçicisi, yazdığınız birimi bildirmenize olanak tanır; toplama benzerleri benzerlerle birleştirsin diye gerçek ölçümleri anlatan seçicileri tercih edin." },
          { "kind": "h3", "text": "Sonuç Ekranını Anlamak" },
          { "kind": "p", "text": "Sonuç ekranı yarı çevreyi doğrusal birimiyle gösterir. Bunun ardında hesaplayıcı tam olarak iki işlem gerçekleştirdi: üç kenarı da topladı, sonra toplamı ikiye böldü. Başka bir hesaplama söz konusu değildir ve araç tek başına alan veya iç yarıçap hesaplamaz; bu formüller bu kılavuzdaki destekleyici açıklamalardır, hesaplayıcının ek çıktıları değildir." },
          { "kind": "h3", "text": "Çözüm Adımlarını Anlamak" },
          { "kind": "p", "text": "Çözüm adımları paneli hesaplamayı yeniden oynatır: girilen kenar değerleri, toplamları, ikiye bölme ve nihai sonuç. Bu görünür işlem, bir yazım hatasını yakalamanın en hızlı yoludur: bir adımda 40 demek istediğiniz yerde 4 görünüyorsa hata, yanıt başka bir yerde kullanılmadan önce bellidir." }
        ]
      },
      "sec-examples": {
        "h2": "Dik Üçgen Yarı Çevresi İçin Adım Adım Örnekler",
        "blocks": [
          { "kind": "p", "text": "Aşağıdaki dört örnek mevcut çözülmüş örnekleri korur ve açıklamalarını genişletir. Her biri üç kenarı yerine koyar, toplar, ikiye böler ve sonra yanıtı doğrular." },
          { "kind": "h3", "text": "Örnek 1: 3-4-5 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=3,\\;b=4,\\;c=5]], formül [[s=\\frac{a+b+c}{2}]]'dir. Yerine koyun: [[s=\\frac{3+4+5}{2}]]. Toplayın: [[s=\\frac{12}{2}]]. Nihai sonuç [[[\\boxed{s=6\\text{ units}}]]] olur. Doğrulama: [[P=2s=12]], bu da doğrudan toplam [[3+4+5]] ile eşleşir. Sonuç doğrudur çünkü bölmeden önce her sınır kenarı tam olarak bir kez sayıldı." },
          { "kind": "h3", "text": "Örnek 2: 5-12-13 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=5,\\;b=12,\\;c=13]]: [[s=\\frac{5+12+13}{2}]], yani [[s=\\frac{30}{2}]], sonuç [[[\\boxed{s=15\\text{ units}}]]] Tam çevre 30'dur ve 30'un yarısı 15'tir. Bir kontrol olarak [[5^2+12^2=13^2]] dik açıyı doğrular, dolayısıyla kenar etiketleri güvenilirdir." },
          { "kind": "h3", "text": "Örnek 3: 8-15-17 Dik Üçgeni" },
          { "kind": "p", "text": "Verilenler [[a=8,\\;b=15,\\;c=17]]: [[s=\\frac{8+15+17}{2}]], yani [[s=\\frac{40}{2}]], sonuç [[[\\boxed{s=20\\text{ units}}]]] Örnekler arasındaki örüntüye dikkat edin: üçgen büyüdükçe yarı çevre de kenarlarla adım adım büyür, her zaman tam çevrenin tam olarak yarısıdır." },
          { "kind": "h3", "text": "Örnek 4: Ondalıklı Kenar Ölçümleri" },
          { "kind": "p", "text": "Verilenler [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], yani [[s=\\frac{15}{2}]], sonuç [[[\\boxed{s=7.5\\text{ units}}]]] Ondalıklı değerler formülü değiştirmez: aynı önce-topla-sonra-böl sırası uygulanır. Pisagor kontrolü [[2.5^2+6^2=6.5^2]] bu kenarların gerçekten bir dik üçgen oluşturduğunu doğrular." }
        ],
        "table": {
          "headers": ["Üçgen", "Dik Kenar a", "Dik Kenar b", "Hipotenüs c", "Tam Çevre P", "Yarı Çevre s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["Tablo örüntüyü açıkça gösteriyor: üç boyut da arttığında yarı çevre orantılı olarak artar ve her zaman tam çevrenin tam olarak yarısında seyreder. Satırları karşılaştırmak, benzer üçgenlerin birlikte ölçeklendiğini de ortaya koyar; her kenarı iki katına çıkarın, yarı çevre de iki katına çıkar."],
        "imgAlt": "Hesap adımlarıyla 3-4-5 üçgeni: 12 için kenarları topla, 2'ye böl, yarı çevre s eşittir 6",
        "figcaption": "Üç kenarı toplayarak P = 12 bulunur, sonra 2'ye bölünür: yarı çevre s = 6."
      },
      "sec-practical": {
        "h2": "Dik Üçgen Yarı Çevresinin Gerçek Hayat Uygulamaları",
        "blocks": [
          { "kind": "p", "text": "Örneklere geçmeden bir uyarı: yarı çevre, normalde üçgen bir nesnenin çevresindeki kenarlık veya çitin yarısını satın almak için kullanılan büyüklük değildir. Gerçek rolü, geometrik bir ara ölçümdür; iç yarıçapa, alan kontrollerine ve tasarım hesaplamalarına giden basamaktır. Aşağıdaki her örnek basitleştirilmiş bir dik üçgensel geometrik modeldir ve her biri, ilişkiler görünür kalsın diye yarı çevreyi tam çevre, alan ve iç yarıçapla birlikte hesaplar." },
          { "kind": "h3", "text": "Örnek 1: Dairesel Süs Ek Parçalı Üçgen Pencere" },
          { "kind": "p", "text": "Üçgen bir pencere modelinin kenarları [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]'dir. Yarı çevre: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]; tam çevre [[P=12\\text{ m}]]. Alan [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] ve iç yarıçap [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. İç yarıçapı hesaplanabilir kılan yarı çevredir: üç kenar uzunluğunu, alanı idealleştirilmiş üçgen modelin üç kenarına da teğet olan çemberin yarıçapına bağlayan tek sayıya dönüştürür." },
          { "kind": "h3", "text": "Örnek 2: Dairesel Boşluklu Metal Destek Braketi" },
          { "kind": "p", "text": "Dik üçgensel bir braketin kenarları [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]'dir. O halde [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] ve [[P=30\\text{ cm}]]. Alan [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] iç yarıçapı [[r=\\frac{30}{15}=2\\text{ cm}]] verir. Bu değer, idealleştirilmiş üçgendeki içteğet çember yarıçapını anlatır ve dairesel bir kesim için geometrik boşluk çalışmalarına yol gösterebilir. Tek başına yapısal güvenliği belirlemez." },
          { "kind": "h3", "text": "Örnek 3: Dairesel Havalandırma Tasarımlı Çatı Alınlığı" },
          { "kind": "p", "text": "Basitleştirilmiş dik üçgensel bir çatı ucu modelinin kenarları [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]'dir. Yarı çevre [[s=\\frac{6+8+10}{2}=12\\text{ ft}]]; çevre [[P=24\\text{ ft}]]. Alan [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] ve iç yarıçap [[r=\\frac{24}{12}=2\\text{ ft}]]. Yarı çevre, alınlığın üç kenar uzunluğunu basitleştirilmiş modelin içteğet çember yarıçapına dönüştürür. Gerçek havalandırma montajı, bu geometrinin ötesinde ayrı yapı ve boşluk ölçümleri gerektirir." },
          { "kind": "h3", "text": "Örnek 4: Üçgen Bahçe Tasarımı" },
          { "kind": "p", "text": "Dik üçgensel bir bahçe modelinin kenarları [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]'dir. O halde [[s=\\frac{7+24+25}{2}=28\\text{ m}]] ve [[P=56\\text{ m}]]. Alan [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] iç yarıçapı [[r=\\frac{84}{28}=3\\text{ m}]] verir. İçteğet çember, idealleştirilmiş üçgenin içine üç kenara da değerken sığan en büyük çemberdir; tasarım aşamasında dairesel bir yatak veya fıskiye yerleştirmek için kullanışlıdır." },
          { "kind": "h3", "text": "Örnek 5: CNC Üçgen Üretim Paneli" },
          { "kind": "p", "text": "Üçgen bir panelin kenarları [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]'dir. Yarı çevre [[s=\\frac{8+15+17}{2}=20\\text{ cm}]]; çevre [[P=40\\text{ cm}]]. Alan [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] ve iç yarıçap [[r=\\frac{60}{20}=3\\text{ cm}]]. Yarı çevre ve iç yarıçap burada CAD modellemede geometrik referans değerleri olarak hizmet eder; örneğin panelin kenarlarına göre dairesel bir öğeyi konumlandırırken." },
          { "kind": "h3", "text": "Örnek 6: Dairesel Amblemli Üçgen Tabela" },
          { "kind": "p", "text": "Bir tabela panelinin kenarları [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]'dir. O halde [[s=\\frac{9+12+15}{2}=18\\text{ in}]] ve [[P=36\\text{ in}]]. Alan [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] iç yarıçapı [[r=\\frac{54}{18}=3\\text{ in}]] verir. İç yarıçap, gerçek tabelanın gerçek kenar boşlukları ve montaj kısıtlarına tabi olmak üzere, sığabilecek en büyük dairesel amblem için matematiksel bir referans sağlar." },
          { "kind": "h3", "text": "Örnek 7: Endüstriyel Üçgen Plaka" },
          { "kind": "p", "text": "Dik üçgensel bir plakanın kenarları [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]'dir. Yarı çevre [[s=\\frac{9+40+41}{2}=45\\text{ cm}]]; çevre [[P=90\\text{ cm}]]. Alan [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] ve iç yarıçap [[r=\\frac{180}{45}=4\\text{ cm}]]. Yarı çevre, idealleştirilmiş bir endüstriyel panel için geometrik hesaplamaları destekler; örneğin üç kenardan da uzak durması gereken dairesel bir çıkıntının boyutlandırılmasında." },
          { "kind": "h3", "text": "Örnek 8: Üçgen Vitray Tasarımı" },
          { "kind": "p", "text": "Dik üçgensel bir cam bölümün kenarları [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]'dir. O halde [[s=\\frac{12+16+20}{2}=24\\text{ in}]] ve [[P=48\\text{ in}]]. Alan [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] iç yarıçapı [[r=\\frac{96}{24}=4\\text{ in}]] verir. İlişki doğrudandır: yarı çevre sınırı yarıya indirir ve alanı bu yarı sınıra bölmek, tasarım yerleşimi için içteğet çemberin yarıçapını verir." },
          { "kind": "h3", "text": "Örnek 9: Ölçülmüş Üçgen Arazi Parseli" },
          { "kind": "p", "text": "Basitleştirilmiş dik üçgensel bir parsel modelinin kenarları [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]'dir. Yarı çevre [[s=\\frac{20+21+29}{2}=35\\text{ m}]]; çevre [[P=70\\text{ m}]]. Alan [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] ve iç yarıçap [[r=\\frac{210}{35}=6\\text{ m}]]. Basitleştirilmiş bir arazi ölçüm modelinde yarı çevre, alan ve iç yarıçap kontrolleri için derli toplu bir girdi işlevi görür; örneğin hesaplanan parsel alanını Heron formülüyle doğrularken." },
          { "kind": "h3", "text": "Örnek 10: Mimari Üçgen Çerçeve" },
          { "kind": "p", "text": "Dik üçgensel bir mimari çerçevenin kenarları [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]'dir. O halde [[s=\\frac{12+35+37}{2}=42\\text{ m}]] ve [[P=84\\text{ m}]]. Alan [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] iç yarıçapı [[r=\\frac{210}{42}=5\\text{ m}]] verir. Bu değer, üçgen çerçevenin içindeki dairesel bir öğenin matematiksel modellenmesini destekleyebilir; örneğin içmerkeze ortalanmış yuvarlak bir pencerenin." },
          { "kind": "h3", "text": "Örnek 11: Büyük Üçgen Zemin Tasarımı" },
          { "kind": "p", "text": "Dik üçgensel bir zemin bölümünün kenarları [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]'dir. Yarı çevre [[s=\\frac{28+45+53}{2}=63\\text{ m}]]; çevre [[P=126\\text{ m}]]. Alan [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] ve iç yarıçap [[r=\\frac{630}{63}=10\\text{ m}]]. Burada yarı çevre, kenar ölçümleriyle modelin içteğet çember geometrisini birbirine bağlar: tek bir sayı sınırla sığabilecek en büyük çember arasında köprü kurar." },
          { "kind": "h3", "text": "Örnek 12: Endüstriyel Üçgen Destek Plakası" },
          { "kind": "p", "text": "Büyük dik üçgensel bir plakanın kenarları [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]'dir. O halde [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] ve [[P=154\\text{ cm}]]. Alan [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] iç yarıçapı [[r=\\frac{924}{77}=12\\text{ cm}]] verir. Bu ölçümler, dairesel bir bağlantı parçası veya iç tasarım öğesi için bir geometrik modeli besler; yarı çevre, iç yarıçapın kilidini açan ara değerdir." }
        ],
        "table": {
          "headers": ["Pratik Uygulama", "Dik Kenar a", "Dik Kenar b", "Hipotenüs c", "Çevre P", "Yarı Çevre s", "Alan K", "İç Yarıçap r", "Birim"],
          "rows": [
            ["Üçgen pencere", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Metal braket", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Çatı alınlığı havalandırması", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Bahçe tasarımı", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["CNC paneli", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Tabela amblemi", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Endüstriyel plaka", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Vitray", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Ölçülmüş parsel", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Mimari çerçeve", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Zemin tasarımı", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Destek plakası", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Yukarıdaki her satır için birkaç hatırlatma geçerlidir. Her uygulama basitleştirilmiş bir geometrik modeldir, bir inşaat şartnamesi değildir: gerçek boyutlar ayrı doğrulama gerektirir, yapısal dayanım yarı çevreden okunamaz ve gerçek dairesel açıklıklar ek üretim boşlukları gerektirebilir. Yarı çevre matematiksel bir ara değerdir, iç yarıçap içteğet çemberin yarıçapıdır ve içteğet çember üç kenara da değer."]
      },
      "sec-inradius": {
        "h2": "Yarı Çevre, Dik Üçgenin İç Yarıçapıyla Nasıl İlişkilidir?",
        "blocks": [
          { "kind": "p", "text": "Bu, makalenin en önemli bölümlerinden biridir çünkü iç yarıçap, yarı çevrenin adlandırılmış bir büyüklük olarak var olmasının temel nedenidir. İçteğet çember, üç kenara da değerken bir üçgenin içine sığan en büyük çemberdir ve yarıçapına iç yarıçap denir; [[r]] ile gösterilir." },
          { "kind": "h3", "text": "Alan ile Yarı Çevre İlişkisi" },
          { "kind": "p", "text": "Her üçgen için alan, iç yarıçap ve yarı çevre tek bir derli toplu formülle birbirine bağlıdır:" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "burada [[K]] üçgenin alanı, [[r]] iç yarıçap ve [[s]] yarı çevredir. Yeniden düzenlenince iç yarıçapı çözer:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Yarı çevreyi ve alanı bilmek, dolayısıyla iç yarıçapı doğrudan hesaplamanızı sağlar: alanı yarı çevreye bölün. Yarı çevrenin pratik getirisi budur. Üç kenar uzunluğunu, alanla birlikte içteğet çemberi ortaya çıkaran tek bir sayıya sıkıştırır." },
          { "kind": "h3", "text": "Dik Üçgenler İçin Özel İç Yarıçap Formülü" },
          { "kind": "p", "text": "Bir dik üçgen için alan [[K=\\frac{ab}{2}]] ve yarı çevre [[s=\\frac{a+b+c}{2}]]'dir. İkisini de [[r=\\frac{K}{s}]] içine koyarsak:" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "Sadeleştirince:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "Alanı tamamen devre dışı bırakan eşdeğer bir dik üçgen formülü de vardır:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Bu iki ifade, Pisagor ilişkisi sayesinde bir dik üçgen için eşdeğerdir: [[a^2+b^2=c^2]] uygulandığında cebir çöker. Her iki biçim de aynı iç yarıçapı verir; ikincisi elle hesaplamada genellikle daha hızlıdır." },
          { "kind": "h3", "text": "Tam Çözümlü 3-4-5 Örneği" },
          { "kind": "p", "text": "Verilenler [[a=3,\\;b=4,\\;c=5]]: yarı çevre [[s=\\frac{3+4+5}{2}=6]], alan [[K=\\frac{3\\times4}{2}=6]], iç yarıçap [[r=\\frac{6}{6}]], yani [[[\\boxed{r=1}]]] Kestirme yolla doğrulayın: [[r=\\frac{3+4-5}{2}]], sonuç [[[\\boxed{r=1}]]] İki yöntem de aynı yanıtı verir çünkü ikisi aynı matematiğin iki yazımıdır: biri alandan geçer, diğeri onu cebirsel olarak sadeleştirir." },
          { "kind": "h3", "text": "Yarı Çevre İçteğet Çember Hesaplamalarında Neden Önemlidir?" },
          { "kind": "p", "text": "Yarı çevre, üçgenin sınırı ile içteğet çemberi arasındaki köprüdür. Tasarımcılar onu üçgensel parçaların içindeki dairesel boşlukları boyutlandırırken, geometrik tasarımda içteğet dairesel öğeleri yerleştirirken, mühendislik çizimlerini ölçülendirirken ve alanı yarıçapla ilişkilendiren matematiksel ispatlarla çalışırken kullanır. İç yarıçap aynı zamanda alan doğrulamasına da bağlanır: [[K]], [[r]] ve [[s]] [[K=rs]] koşulunu sağlamıyorsa zincirde bir şey yanlıştır. Bu hesaplayıcı iç yarıçapı otomatik hesaplamaz; yarı çevreyi verir, yukarıdaki formüller gerisini halleder." }
        ],
        "imgAlt": "Yarıçapı 1 olan içteğet çemberli 3-4-5 dik üçgeni; yarı çevre s = 6, alan K = 6, r = K/s",
        "figcaption": "İçteğet çember üç kenara da değer; s = 6 ve K = 6 ile iç yarıçap r = K / s = 1 olur."
      },
      "sec-heron": {
        "h2": "Yarı Çevre, Heron Formülünde Nasıl Kullanılır?",
        "blocks": [
          { "kind": "p", "text": "Heron formülü, bir üçgenin alanını üç kenar uzunluğundan, ayrıca verilen bir yüksekliğe gerek duymadan hesaplar. Yarı çevre onun ana bileşenidir: formül [[s]] ve [[s]] ile her kenar arasındaki farklar cinsinden yazılır." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Burada [[K]] üçgenin alanı, [[s]] yarı çevre ve [[a]], [[b]], [[c]] üç kenar uzunluğudur." },
          { "kind": "h3", "text": "Heron Formülü Neden Yarı Çevre Kullanır?" },
          { "kind": "p", "text": "Yarı çevre önce hesaplanır çünkü ifadeyi ortalar: her [[s-a]], [[s-b]], [[s-c]] çarpanı, yarım çevrenin bir kenarı ne kadar aştığını ölçer. Bu üç fazlalığı [[s]]'nin kendisiyle çarpıp karekökünü almak, sınır bilgisini alana dönüştürür. Formül yalnızca dik üçgenler için değil, her geçerli üçgen için çalışır; bu yüzden yarı çevre, bir dik üçgen merakı olmaktan çıkıp genel bir geometrik araç olarak yerini kazanır." },
          { "kind": "h3", "text": "Tam Çözümlü 3-4-5 Örneği" },
          { "kind": "p", "text": "Verilenler [[a=3,\\;b=4,\\;c=5]], önce yarı çevreyi hesaplayın: [[s=\\frac{3+4+5}{2}=6]]. Heron formülünde yerine koyun: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Sadeleştirin: [[K=\\sqrt{6\\times3\\times2\\times1}]], sonra [[K=\\sqrt{36}]], sonuç [[[\\boxed{K=6\\text{ square units}}]]]" },
          { "kind": "h3", "text": "Sonucu Dik Üçgen Alan Formülüyle Doğrulayın" },
          { "kind": "p", "text": "Doğrudan dik üçgen alan formülü [[K=\\frac{ab}{2}]]'dir. Yerine koyunca: [[K=\\frac{3\\times4}{2}]], sonuç [[[\\boxed{K=6\\text{ square units}}]]] İki formül de aynı alanı verir ki asıl mesele de budur: yarı çevre üzerine kurulu Heron formülü, daha basit hesaplamayı bağımsız olarak doğrular." },
          { "kind": "h3", "text": "Bu Neden Faydalıdır?" },
          { "kind": "p", "text": "Dik üçgenlerin daha basit bir doğrudan alan formülü vardır, dolayısıyla Heron formülü alana giden en hızlı yol nadiren olur. Değeri; alan hesaplamalarını kontrol etmekte, kenar uzunluklarının tek başına alanı nasıl belirlediğini anlamakta, yükseklik verilmediğinde kenar uzunluğuna dayalı problemleri çözmekte ve matematiksel çözümleri bağımsız bir yolla doğrulamakta yatar. Birbirinden bağımsız iki formül alanda uzlaştığında yanıta duyulan güven keskin biçimde artar." }
        ],
        "imgAlt": "3-4-5 üçgeninde Heron formülü: yarı çevre 6, alan 6; K = ab/2 ile doğrulandı",
        "figcaption": "Beş adım: kenarlar, yarı çevre s = 6, Heron yerine koyma, alan K = 6, K = ab / 2 ile kontrol."
      },
      "sec-vs-perimeter": {
        "h2": "Çevre ile Yarı Çevre Arasındaki Fark Nedir?",
        "blocks": [
          { "kind": "p", "text": "İki büyüklük aynı sınırı farklı ölçeklerde anlatır ve onları karıştırmak üçgen çalışmalarındaki en sık hatalardandır. Bu bölüm çizgiyi açıkça çeker." },
          { "kind": "h3", "text": "Çevre Tam Sınırı Ölçer" },
          { "kind": "p", "text": "Çevre, üçgenin çevresindeki toplam uzunluktur:" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Üç kenarın tamamı boyunca yapılan tam turu temsil eder. 3-4-5 üçgeni için [[P=12]] birimdir." },
          { "kind": "h3", "text": "Yarı Çevre Toplamın Yarısıdır" },
          { "kind": "p", "text": "Yarı çevre, sayısal çevrenin yarısıdır:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "Aynı 3-4-5 üçgeni için [[s=6]] birimdir. Aynı üçgen, aynı sınır; ancak sayı yarıya indirilmiştir çünkü onu kullanan formüller, yani Heron formülü ve iç yarıçap ilişkisi, yarı değer için yazılmıştır." },
          { "kind": "h3", "text": "Sayısal Karşılaştırma" },
          { "kind": "p", "text": "6-8-10 dik üçgenini kullanın. Çevre: [[P=6+8+10]], yani [[[\\boxed{P=24}]]] Yarı çevre: [[s=\\frac{24}{2}]], yani [[[\\boxed{s=12}]]] Çevre \"tüm sınır ne kadar uzun?\" sorusunu yanıtlar; yarı çevre \"formülümün ihtiyaç duyduğu yarı sınır değeri nedir?\" sorusunu yanıtlar." },
          { "kind": "h3", "text": "Her Ölçüm Ne Zaman Kullanılmalı?" },
          { "kind": "p", "text": "Çevreyi, iş tam sınır uzunluğuyla ilgiliyken kullanın: üçgen bir şekli çerçevelemek, üçgen bir araziyi çitlemek, bordür malzemelerini tahmin etmek veya kenar kaplaması ölçmek. Yarı çevreyi, iş matematiksel olduğunda kullanın: Heron formülü, iç yarıçap hesaplamaları, alan-yarıçap ilişkileri, ileri geometri ispatları veya bir alan sonucunun bağımsız doğrulanması. Pratik kural basittir: fiziksel sınır işleri [[P]] ister; formül işleri [[s]] ister." },
          { "kind": "h3", "text": "Yarı Çevre Alanın Yarısı mıdır?" },
          { "kind": "p", "text": "Hayır ve bu karışıklık net bir düzeltmeyi gerektirir. Yarı çevre doğrusal bir ölçümdür: 3-4-5 için 6 birimdir. Alan iki boyutlu bir ölçümdür: 3-4-5 için 6 birim karedir. Sayılar burada tesadüfen çakışır, ancak büyüklükler tür olarak farklıdır. Bir uzunluğu yarıya indirmek asla bir alan üretmez; tıpkı bir çevreyi yarıya indirmenin asla bir yüzey üretmemesi gibi." }
        ],
        "table": {
          "headers": ["Ölçüm", "Sembol", "Formül", "Anlamı", "Birim", "Yaygın Uygulama"],
          "rows": [
            ["Çevre", "[[P]]", "[[P=a+b+c]]", "Tam sınır uzunluğu", "Doğrusal (m, ft, in)", "Çit, çerçeve, kaplama"],
            ["Yarı çevre", "[[s]]", "[[s=(a+b+c)/2]]", "Sınır uzunluğunun yarısı", "Doğrusal (m, ft, in)", "Heron formülü, iç yarıçap"],
            ["Alan", "[[K]]", "[[K=ab/2]]", "Çevrili yüzey", "Kare (m², ft², in²)", "Yüzey kaplama, malzeme"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Bir Kenar Eksikken Yarı Çevre Nasıl Hesaplanır",
        "blocks": [
          { "kind": "p", "text": "Bu sayfadaki hesaplayıcı üç kenar uzunluğunun hepsini ister: toplayamadığı bir toplamı yarıya indiremez. Bir kenar bilinmiyorsa önce Pisagor teoremiyle onu hesaplayın, sonra her zamanki gibi yarı çevreye geçin." },
          { "kind": "h3", "text": "Hipotenüsü Bulmak" },
          { "kind": "p", "text": "İki dik kenar da bilindiğinde [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] kullanın. Örnek: [[a=6]], [[b=8]]. O halde [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], sonuç [[[\\boxed{c=10}]]] Şimdi yarı çevre gelir: [[s=\\frac{6+8+10}{2}]], yani [[[\\boxed{s=12}]]]" },
          { "kind": "h3", "text": "Eksik Bir Dik Kenarı Bulmak" },
          { "kind": "p", "text": "Hipotenüs ve bir dik kenar bilindiğinde [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] kullanın. Örnek: [[c=13]], [[b=12]]. O halde [[a=\\sqrt{169-144}]], sonuç [[[\\boxed{a=5}]]] Sonra [[s=\\frac{5+12+13}{2}]], yani [[[\\boxed{s=15}]]]" },
          { "kind": "h3", "text": "Eksik Kenar Neden Önce Bulunmalıdır?" },
          { "kind": "p", "text": "Yarı çevre, üç kenarın tam toplamını gerektirir; bilinmeyen bir kenar görmezden gelinemez veya sıfır sayılamaz. Pisagor'un hipotenüs biçimi kareleri toplar; dik kenar biçimi çıkarır; yanlışını uygulamak var olmayan bir kenar uydurur. Eksik kenar bulunduktan sonra, <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Dik Üçgen Kenar Hesaplayıcısı</a> değeri iki kez kontrol edebilir ve yarı çevre hesabı sağlam zeminde ilerler. Bu eksik kenar adımları öğretici destekleyici yöntemlerdir; mevcut hesaplayıcının ek girişleri değildir." }
        ]
      },
      "sec-properties": {
        "h2": "Dik Üçgen Yarı Çevresinin Önemli Özellikleri",
        "blocks": [
          { "kind": "p", "text": "Yarı çevre öngörülebilir davranır. Bu özellikler hem hızlı zihinsel kontroller hem de geometrik akıl yürütmede araçlar olarak iki kat iş görür." },
          { "kind": "h3", "text": "Yarı Çevre Hipotenüsten Büyüktür" },
          { "kind": "p", "text": "Her geçerli üçgen için [[a+b>c]]. Her iki tarafa [[c]] eklemek [[a+b+c>2c]] verir ve ikiye bölmek [[[\\boxed{s>c}]]] sonucunu verir. Yarı çevre her zaman en uzun kenarı geçer. Bir hesaplama [[s]]'yi [[c]]'den küçük döndürürse etiketler veya aritmetik yanlıştır." },
          { "kind": "h3", "text": "Yarı Çevre Dik Kenarların Toplamından Küçüktür" },
          { "kind": "p", "text": "Üçgen eşitsizliği [[c<a+b]] sonucunu da verir. Her iki tarafa [[a+b]] eklemek [[a+b+c<2(a+b)]] üretir ve yarıya indirmek [[[\\boxed{s<a+b}]]] verir. Dolayısıyla yarı çevre, hipotenüs ile dik kenarların toplamı arasında sıkıca durur: [[c<s<a+b]]. 3-4-5 için: [[5<6<7]]. Bu sandviç, her yanıt için hızlı bir makullük kontrolüdür." },
          { "kind": "h3", "text": "Her Kenarı İki Katına Çıkarmak Yarı Çevreyi İki Katına Çıkarır" },
          { "kind": "p", "text": "3-4-5 üçgenini ikiyle ölçekleyin: [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] kenarları 6, 8, 10 verir. O halde [[s_2=\\frac{2a+2b+2c}{2}]], yani [[[\\boxed{s_2=2s}]]] Sayısal olarak [[s_2=12=2\\times6]]. Yarı çevre doğrusal bir ölçümdür, dolayısıyla tekdüze ölçekleme onu aynı çarpanla ölçekler." },
          { "kind": "h3", "text": "Her Kenarı Üç Katına Çıkarmak Yarı Çevreyi Üç Katına Çıkarır" },
          { "kind": "p", "text": "Aynı doğrusallık her ölçek çarpanı için geçerlidir. Her kenarı üç katına çıkarın, toplam üç katına çıkar; üç katına çıkmış toplamı yarıya indirmek asıl yarı çevrenin üç katını verir: [[[\\boxed{s_2=3s}]]] Genel olarak tüm kenarları [[k]] ile ölçeklemek [[s]]'yi [[k]] ile ölçekler. Benzer üçgenlerin orantılı yarı çevrelere sahip olmasının nedeni budur." },
          { "kind": "h3", "text": "Yalnızca Bir Kenar Değişirse Ne Olur?" },
          { "kind": "p", "text": "Diğer ikisini sabit tutarken bir kenarı değiştirmek, sayısal yarı çevreyi kenar uzunluğundaki değişimin yarısı kadar değiştirir; çünkü toplamın yalnızca bir terimi hareket eder. Ancak bir püf noktası vardır: ortaya çıkan ölçümler yine geçerli bir üçgeni ve bu sayfa için bir dik üçgeni anlatmalıdır. Örneğin 3-4-5 üçgeninin hipotenüsünü 6'ya uzatmak [[a^2+b^2=c^2]] ilişkisini bozar; dolayısıyla yeni sayılar artık bir dik üçgeni hiç anlatmaz. Bir dik üçgenin bir kenarını ayarlayın, dik açıyı korumak için diğerleri de ayarlanmalıdır." },
          { "kind": "h3", "text": "45-45-90 Üçgeninin Yarı Çevresi" },
          { "kind": "p", "text": "İki dik kenar da [[k]] olsun. Hipotenüs [[c=k\\sqrt{2}]]'dir, dolayısıyla yarı çevre [[s=\\frac{k+k+k\\sqrt{2}}{2}]] olur; bu da [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]] biçiminde sadeleşir. Eşit dik kenarlar simetrik katkı sağlar ve irrasyonel hipotenüs izini sonuca bırakır: [[k=1]] için [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "30-60-90 Üçgeninin Yarı Çevresi" },
          { "kind": "p", "text": "Kısa dik kenar [[k]] ise kenarlar [[k]], [[k\\sqrt{3}]] ve [[2k]]'dir. Dolayısıyla [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], sonuç [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]] Sayısal olarak [[k=2]] ile kenarlar 2, [[2\\sqrt{3}\\approx3.464]] ve 4'tür; yani [[s\\approx4.732]]. Burada tam köklü biçim tercih edilir: Heron veya iç yarıçap hesaplamalarının sonrakilerinde tam hassasiyeti korur." }
        ]
      },
      "sec-units": {
        "h2": "Yarı Çevre Hesaplamalarında Ölçü Birimlerini Anlamak",
        "blocks": [
          { "kind": "p", "text": "Yarı çevre her uzunluk biriminde çalışır: metre, santimetre, milimetre, kilometre, fit, inç, yarda veya mil; çünkü o yalnızca uzunlukların yarıya indirilmiş bir toplamıdır. Yanıtın birimi her zaman girdilerin birimiyle eşleşir. Tek katı kural tutarlılıktır: toplama yapılmadan önce her kenar aynı birimde ifade edilmelidir." },
          { "kind": "h3", "text": "Üç Kenar Ölçümü Neden Uyumlu Birimler Kullanmalıdır?" },
          { "kind": "p", "text": "Yarı çevre üç uzunluğun toplanmasıyla hesaplanır ve farklı birimlerdeki uzunluklar doğrudan toplanmaz. 3 metreye 40 santimetreyi ikisi de sade sayıymış gibi eklemek, anlamlı hiçbir şeyin 43'ünü verir. Toplam ancak her terim tek bir birimi paylaştığında geçerlidir; dolayısıyla dönüştürme toplamadan önce gelir, asla sonra değil." },
          { "kind": "h3", "text": "Çözümlü Birim Dönüştürme Örneği" },
          { "kind": "p", "text": "Verilenler [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Önce inçleri fite çevirin: [[48\\text{ inches}=4\\text{ ft}]]. Artık üç kenar da fit cinsindendir: [[s=\\frac{3+4+5}{2}]], sonuç [[[\\boxed{s=6\\text{ ft}}]]] Ölçümler toplamadan önce dönüştürülmelidir çünkü formül ham sayıları toplar; siz dönüştürmedikçe 48'in inç anlamına geldiğini bilemez." },
          { "kind": "h3", "text": "Hesaplayıcının Birim Seçicileri Nasıl Yardımcı Olur?" },
          { "kind": "p", "text": "Bu sayfadaki her girişin kendi ölçü birimi seçicisi vardır; bu, yazdığınız sayının birimini bildirmenizi sağlar. Her seçiciyi, girdisinin gerçek birimine uyacak şekilde ayarlayın ki araç değerleri tutarlı bir temelde birleştirsin. Arayüzün gösterdiklerinin ötesinde dönüştürme özellikleri varsaymayın: seçiciler girdilerinizi anlatır ve yarı çevre, girildiği haliyle değerlerden hesaplanır." },
          { "kind": "h3", "text": "Ondalıklı Kenar Ölçümleriyle Çalışmak" },
          { "kind": "p", "text": "Ondalıklar aynı formülü izler. [[a=2.5,\\;b=6,\\;c=6.5]] ile: [[s=\\frac{2.5+6+6.5}{2}]], yani [[s=\\frac{15}{2}]], sonuç [[[\\boxed{s=7.5\\text{ units}}]]] Toplama ve bölme boyunca tam ondalık hassasiyeti koruyun; yalnızca görüntülenen nihai yanıtı yuvarlayın ve yalnızca problem gerektiriyorsa." },
          { "kind": "h3", "text": "İrrasyonel Kenar Uzunluklarıyla Çalışmak" },
          { "kind": "p", "text": "Bazı dik üçgenlerin irrasyonel kenarları vardır ve formül onları aynı şekilde ele alır. [[a=1,\\;b=1,\\;c=\\sqrt{2}]] olan bir 45-45-90 üçgenini alın: [[s=\\frac{1+1+\\sqrt{2}}{2}]], tam biçim [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]], yaklaşık [[s\\approx1.7071]]. Tam köklü gösterim matematikte değerlidir çünkü tam hassasiyeti korur: [[s]]'nin Heron formülünde veya bir iç yarıçap hesabında sonraki her kullanımı gerçek değerden başlar, yuvarlanmış olandan değil." },
          { "kind": "h3", "text": "Erken Yuvarlamadan Neden Kaçınmalısınız?" },
          { "kind": "p", "text": "Erken yuvarlama, sonraki her hesaplamaya hata enjekte eder ve yarı çevre genellikle nihai yanıt değil bir ara değerdir. [[s]]'yi Heron formülüne vermeden önce iki ondalığa yuvarlamak, orada dört kez göründüğü için hatayı belirgin biçimde katlar. Ara adımlarda yeterli hassasiyeti koruyun: tam ondalığı veya tam köklü biçimi taşıyın ve yalnızca sonda, problemin gerektirdiği hassasiyete bir kez yuvarlayın." }
        ]
      },
      "sec-mistakes": {
        "h2": "Dik Üçgen Yarı Çevresi Hesaplarken Yaygın Hatalar",
        "blocks": [
          { "kind": "p", "text": "On altı hata, neredeyse her yanlış yarı çevrenin hesabını verir. Her biri neyin yanlış gittiği, neden olduğu ve doğru yaklaşımıyla açıklanır." },
          { "kind": "p", "text": "<strong>1. Toplamı ikiye bölmeyi unutmak.</strong> 3 + 4 + 5 = 12'yi toplayıp durmak çevreyi verir, yarı çevreyi değil. Her zaman bölmeyle bitirin: [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Formülü anlamadan her kenarı bölmek.</strong> Kenarları tek tek yarıya indirip sonra toplamak aritmetik olarak tutar ama formülün yapısını gizler. Önce toplayın, bir kez bölün: [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Hipotenüsü dahil etmeyi unutmak.</strong> Hipotenüs bir sınır kenarıdır. 3-4-5 üçgeninden çıkarmak 6 yerine [[(3+4)/2=3.5]] verir." },
          { "kind": "p", "text": "<strong>4. Yalnızca iki dik kenarı kullanmak.</strong> Farklı kılıkta aynı hata. Yalnızca dik kenarlar tüm sınır değildir; hipotenüs şekli kapatır ve sayılmalıdır." },
          { "kind": "p", "text": "<strong>5. Yarı çevreyi tam çevreyle karıştırmak.</strong> 3-4-5 üçgeni için 12 bildirmek, soru s'yi isterken \"P nedir?\" sorusunu yanıtlar. Unutmayın: [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Yarı çevreyi alanla karıştırmak.</strong> 3-4-5 için ikisi de sayısal olarak 6'ya eşittir ve bu, karışıklığa davetiye çıkarır. Tür olarak farklıdırlar: 6 birim uzunluk ile 6 birim kare yüzey." },
          { "kind": "p", "text": "<strong>7. Sonucu birim kare cinsinden bildirmek.</strong> 6 cm kare yarı çevre bir kategori hatasıdır. Bir uzunluğu yarıya indirmek uzunluk bırakır: 6 cm² değil, 6 cm." },
          { "kind": "p", "text": "<strong>8. Yanlış bir hipotenüs kullanmak.</strong> Hipotenüs değeri yanlışsa toplam yanlıştır ve yarı çevre de yanlıştır. Hipotenüs ölçülmek yerine hesaplandıysa [[c=\\sqrt{a^2+b^2}]] ile doğrulayın." },
          { "kind": "p", "text": "<strong>9. Dik üçgen oluşturmayan ölçümler girmek.</strong> \"Dik üçgen\" etiketine güvenmeden önce [[a^2+b^2=c^2]] testi yapın. Toplama yine çalışır ama geometrik anlam değişir." },
          { "kind": "p", "text": "<strong>10. Santimetre ile metreyi karıştırmak.</strong> 3 m'ye 40 cm eklemek hiçbir şeyin 43'ünü vermez. Önce tek bir birime dönüştürün." },
          { "kind": "p", "text": "<strong>11. Fit ile inçi karıştırmak.</strong> Klasik emperyal tuzak. Toplamadan önce inçleri fite çevirin (12'ye bölün) veya birim seçicileri eşleşecek şekilde ayarlayın." },
          { "kind": "p", "text": "<strong>12. Çok erken yuvarlamak.</strong> Toplamadan önce [[\\sqrt{2}]]'yi 1,4'e yuvarlamak hata biriktirir. Yalnızca nihai yanıtı yuvarlayın." },
          { "kind": "p", "text": "<strong>13. Eksik bir kenarı hesaplamadan kullanmak.</strong> İki bilinen kenar bir yarı çevre değildir. Önce Pisagor teoremiyle üçüncüyü bulun, sonra toplayıp yarıya indirin." },
          { "kind": "p", "text": "<strong>14. Heron formülünü yanlış uygulamak.</strong> Çarpanlar [[s-a]], [[s-b]] ve [[s-c]]'dir: her kenar başka bir kenardan değil, yarı çevreden çıkarılır. Çıkarmaları karıştırmak alanı bozar." },
          { "kind": "p", "text": "<strong>15. İç yarıçapı dış yarıçapla karıştırmak.</strong> İç yarıçap [[r=K/s]] içeriden üç kenara da değer; dış yarıçap köşelerden geçer ve bir dik üçgen için [[c/2]]'ye eşittir. Farklı çemberler, farklı formüller." },
          { "kind": "p", "text": "<strong>16. Yarı çevrenin fiziksel bir yarım sınır yolu anlattığını varsaymak.</strong> O, sayısal toplamın yarısıdır; üçgenin çevresinde işaretlenmiş bir yarı yol değildir. Ona, olduğu türetilmiş ara değer gibi davranın." },
          { "kind": "p", "text": "<strong>Yanlışa karşı doğru, yan yana.</strong> Verilenler [[a=3,\\;b=4,\\;c=5]]: yanlış olan [[s=3+4+5=12]]'dir; bölmeyi atlar ve tam çevreyi bildirir. [[s=(3+4)/2=3.5]] de yanlıştır; hipotenüsü dışlar. Doğru olan [[s=\\frac{3+4+5}{2}]]'dir, sonuç [[[\\boxed{s=6}]]]" }
        ]
      },
      "sec-verify": {
        "h2": "Yarı Çevre Sonucunuzun Doğru Olduğu Nasıl Kontrol Edilir",
        "blocks": [
          { "kind": "p", "text": "Sekiz bağımsız kontrol neredeyse her hatayı yakalar. 3-4-5 üçgeni her birini gösterir. Bağımsız kontroller önemlidir çünkü farklı şekillerde başarısız olurlar: birbirinden bağımsız yöntemler uzlaştığında yanıt güvenini kazanmış olur." },
          { "kind": "p", "text": "<strong>Yöntem 1: Yarı çevreyi iki katına çıkarın.</strong> [[[\\boxed{P=2s}]]] tam çevreye eşit olmalıdır: [[2\\times6=12=3+4+5]]. İki katına çıkarmak kenar toplamını geri vermezse bölme veya toplama yanlış gitmiştir." },
          { "kind": "p", "text": "<strong>Yöntem 2: Üç kenardan yeniden hesaplayın.</strong> [[s=\\frac{a+b+c}{2}]]'yi sıfırdan yeniden hesaplayın: [[(3+4+5)/2=6]]. İkinci bir geçiş, tuş ve aritmetik kaymalarını yakalar." },
          { "kind": "p", "text": "<strong>Yöntem 3: Pisagor ilişkisini doğrulayın.</strong> [[a^2+b^2=c^2]] kontrolü yapın: [[9+16=25]]. Bu, kenarların bir dik üçgen oluşturduğunu doğrular; bu da yarı çevrenin dayandığı kenar etiketlerini geçerli kılar." },
          { "kind": "p", "text": "<strong>Yöntem 4: Hipotenüsü kontrol edin.</strong> [[c>a]] ve [[c>b]] olduğunu doğrulayın: 5, 3'ten de 4'ten de büyüktür. Sözde hipotenüs en uzun kenar değilse etiketler yanlıştır." },
          { "kind": "p", "text": "<strong>Yöntem 5: Üçgen eşitsizliğini kontrol edin.</strong> [[a+b>c]] olduğunu doğrulayın: [[3+4=7>5]]. Dik kenarların toplamı hipotenüsü aşmalıdır, yoksa üçgen yoktur." },
          { "kind": "p", "text": "<strong>Yöntem 6: Yarı çevre sınırını doğrulayın.</strong> [[[\\boxed{s>c}]]] geçerli olmalıdır: [[6>5]]. Bu tek eşitsizlik şaşırtıcı sayıda etiketleme hatasını yakalar." },
          { "kind": "p", "text": "<strong>Yöntem 7: Birimleri kontrol edin.</strong> Üç kenar uzunluğunun da uyumlu birimler kullandığını ve çıktının doğrusal bir ölçüm olduğunu doğrulayın. Karışık birimler, aritmetik kusursuz olsa bile toplamı geçersiz kılar." },
          { "kind": "p", "text": "<strong>Yöntem 8: Hesaplayıcının çözüm adımlarıyla karşılaştırın.</strong> Görüntülenen sonuç ve hesaplama adımları hataları belirlemeye yardımcı olur: bir adımda yanlış yazılmış bir kenar veya atlanmış bir bölme görünüyorsa hata, yanıt kullanılmadan önce bellidir." }
        ]
      },
      "sec-conclusion": {
        "h2": "Sınırın Yarısı, Tam Anlayış",
        "blocks": [
          { "kind": "p", "text": "Bir dik üçgenin yarı çevresi, etkisi geniş küçük bir fikirdir. Bir toplama ve bir bölme; iç yarıçapın kilidini açan, Heron formülüne güç veren ve alan doğrulamasını keskinleştiren bir sayı üretir. Formül üç kenar ister çünkü sınırın üç kenarı vardır ve hipotenüs, şekli kapatan kenar olarak toplamdaki yerini kazanır. Bu kılavuzdaki her şey; çözümlü örnekler, on iki uygulama, özellikler, birim dönüştürmeleri, on altı hata, sekiz doğrulama kontrolü; inandırıcı görünen yanlış yanıtlar üreten küçük etiketleme ve birim hatalarına karşı o tek yarıya indirilmiş toplamı korumak için vardır." },
          { "kind": "p", "text": "Üç kenar da ölçülmüşse bu sayfanın hesaplayıcısını kullanın, ölçülmemişse Pisagor teoremiyle eksik kenarı bulun ve sayı bir çizime veya modele girmeden önce sonucu c < s < a + b sınırlarıyla kontrol edin. Soru sınırın içindeki yüzeye döndüğünde Heron formülü ve alan hesaplayıcısı bekliyor; üçgenin içindeki çembere döndüğünde iç yarıçap bir bölme uzaklıkta." }
        ]
      }
    },
    "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
    "relatedIntro": "Bu araçların her biri yarı çevre hesabını bir yönde genişletir: tam sınır, yüzey, yarı çevreden alana giden yol, içteğet çember veya hepsinin ardındaki eksik kenarlar.",
    "relatedItems": [
      "Dik Üçgen Çevre Hesaplayıcısı",
      "Dik Üçgen Alan Hesaplayıcısı",
      "Dik Üçgen Yarı Çevreden Alan Hesaplayıcısı",
      "Dik Üçgen İç Yarıçap Hesaplayıcısı",
      "Dik Üçgen Kenar Hesaplayıcısı"
    ],
    "faqHeading": "Sık Sorulan Sorular",
    "faqs": [
      {
        "question": "Dik üçgenin yarı çevresinin formülü nedir?",
        "answer": "Formül s = (a + b + c) / 2'dir; burada a ve b 90 derecelik açıyı oluşturan iki dik kenar, c ise en uzun kenar olan hipotenüstür. Üç kenar uzunluğunu da toplayın, sonra toplamı ikiye bölün. Eşdeğer olarak, s = P / 2'dir; burada P tam çevredir."
      },
      {
        "question": "Yarı çevre ne anlama gelir?",
        "answer": "Yarı çevre, çevrenin yarısı anlamına gelir. Yarı yarım demektir, çevre ise tam sınır uzunluğu demektir; dolayısıyla yarı çevre, üçgenin çevresindeki toplam mesafenin tam olarak yarısıdır. Pek çok üçgen formülünde ara değer olarak kullanılan, türetilmiş bir geometrik ölçümdür."
      },
      {
        "question": "Yarı çevre neden çevrenin yarısıdır?",
        "answer": "Bu onun tanımıdır: yarı çevre, tam çevre alınıp ikiye bölünerek kurulur. Yarım değerin, Heron formülü ve K = rs iç yarıçap ilişkisi gibi formüllerin yazıldığı büyüklük olduğu ortaya çıkar; bu yüzden kendi adını ve s sembolünü kazandı."
      },
      {
        "question": "Yarı çevreyi hesaplamak için üç kenara da ihtiyacım var mı?",
        "answer": "Evet. Yarı çevre, üç kenar uzunluğunun toplamının yarısıdır; dolayısıyla hipotenüs dahil her kenar bilinmelidir. Bir kenar eksikse önce Pisagor teoremiyle onu bulun: eksik hipotenüs için c = √(a² + b²) veya eksik dik kenar için a = √(c² − b²)."
      },
      {
        "question": "Çevre ile yarı çevre arasındaki fark nedir?",
        "answer": "Çevre P = a + b + c tam sınır uzunluğudur, yarı çevre s = (a + b + c) / 2 ise onun yarısıdır. Çevreyi çit çekme veya çerçeveleme gibi fiziksel sınır işlerinde, yarı çevreyi ise Heron formülü, iç yarıçap hesaplamaları ve geometrik ispatlar gibi formül işlerinde kullanın. 3-4-5 üçgeni için P = 12 ve s = 6'dır."
      },
      {
        "question": "Yarı çevre birim kareyle mi ölçülür?",
        "answer": "Hayır. Yarı çevre tek boyutlu bir uzunluk ölçümüdür, dolayısıyla kenar uzunluklarıyla eşleşen doğrusal birimler alır: metre, santimetre, fit veya inç. Birim kare alana aittir. 6 cm² yarı çevre bildirmek bir kategori hatasıdır; doğru birim 6 cm'dir."
      },
      {
        "question": "3-4-5 dik üçgeninin yarı çevresi nedir?",
        "answer": "Kenarları toplayın: 3 + 4 + 5 = 12, sonra ikiye bölün: s = 6 birim. Tam çevre 12 birimdir. Kenarlar 3² + 4² = 5² koşulunu sağlar; bu dik açıyı doğrular ve yarı çevre 6, her geçerli üçgen için olması gerektiği gibi hipotenüs 5'i geçer."
      },
      {
        "question": "Yarı çevre Heron formülünde neden kullanılır?",
        "answer": "Heron formülü, K = √(s(s − a)(s − b)(s − c)), alanı yalnızca kenar uzunluklarından hesaplar ve yarı çevre s ile s − a, s − b, s − c farkları cinsinden yazılır. Önce s'yi hesaplamak ifadeyi ortalar ve derli toplu tutar. 3-4-5 için s = 6, K = √(6 × 3 × 2 × 1) = 6 birim kare verir."
      },
      {
        "question": "Yarı çevre iç yarıçapla nasıl ilişkilidir?",
        "answer": "Alan, iç yarıçap ve yarı çevre K = rs koşulunu sağlar; dolayısıyla r = K / s. Bir dik üçgen için bu, r = (a + b − c) / 2 biçiminde sadeleşir. 3-4-5 için: s = 6, K = 6, yani r = 1. Yarı çevre, üç kenar uzunluğunu içteğet çemberin yarıçapına dönüştüren köprüdür."
      },
      {
        "question": "Bir kenar eksikse yarı çevreyi hesaplayabilir miyim?",
        "answer": "Evet, ancak önce eksik kenarı bulun. 6 ve 8 dik kenarlarıyla hipotenüs √(36 + 64) = 10'dur; yani s = (6 + 8 + 10) / 2 = 12. Hipotenüs 13 ve dik kenar 12 iken eksik dik kenar √(169 − 144) = 5'tir; yani s = (5 + 12 + 13) / 2 = 15. Bu sayfadaki hesaplayıcının üç kenarın da girilmesine ihtiyacı vardır."
      },
      {
        "question": "Yarı çevre yanıtımı nasıl doğrulayabilirim?",
        "answer": "İki katına çıkarın: 2s, a + b + c tam çevresine eşit olmalıdır. s'nin hipotenüsü geçtiğini (s > c) ve dik kenarların toplamının altında kaldığını (s < a + b) kontrol edin. a² + b² = c² Pisagor ilişkisini doğrulayın, üç kenarın da tek bir birimi paylaştığını kontrol edin ve hesaplayıcının çözüm adımlarıyla karşılaştırın."
      },
      {
        "question": "Yarı çevre üçgen alanını hesaplamak için kullanılabilir mi?",
        "answer": "Evet, Heron formülü aracılığıyla: K = √(s(s − a)(s − b)(s − c)). Doğrudan dik üçgen formülü K = ab / 2 üzerinde bağımsız bir kontroldür. 3-4-5 için ikisi de 6 birim kare verir. Heron formülü, yükseklik bilinmediğinde veya alanı doğrulayan ikinci, bağımsız bir hesaplama istediğinizde en değerlidir."
      }
    ]
  }
};
