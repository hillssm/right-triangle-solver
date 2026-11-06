// inradiusGuideTranslations.btr.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B6_TR = {
  "tr": {
      "faqHeading": "Sık Sorulan Sorular",
      "faqs": [
        {
          "answer": "Formül [[r = \\frac{a+b-c}{2}]] şeklindedir; burada [[a]] ve [[b]] dik kenarlardır, [[c]] hipotenüstür ve [[r]] iç yarıçaptır. İki dik kenarı toplayın, hipotenüsü çıkarın ve ikiye bölün. Örneğin, 6-8-10 üçgeni 2 iç yarıçap verir.",
          "question": "Dik üçgenin iç yarıçap formülü nedir?",
        },
        {
          "answer": "İç yarıçap, üçgenin içine sığan ve üç kenara da dokunan çember olan iç teğet çemberin yarıçapıdır. İç merkezden herhangi bir kenara olan dik uzaklıktır. 6-8-10 üçgeninde iç yarıçap 2'dir, yani iç teğet çemberin yarıçapı 2 birimdir.",
          "question": "İç yarıçap neyi temsil eder?",
        },
        {
          "answer": "İç teğet çember, bir üçgenin tamamen içinde çizilen ve üç kenara da dokunan çemberdir; her kenarda bir teğet noktası vardır. Her üçgenin tam olarak bir iç teğet çemberi vardır. Üç köşeden geçen çevrel çemberden farklıdır.",
          "question": "İç teğet çember nedir?",
        },
        {
          "answer": "İç merkez, üçgenin üç iç açıortayının kesiştiği noktadır. Her zaman üçgenin içinde yer alır. Dik açısı C noktasında olan bir dik üçgende, 90 derecelik açının açıortayı üzerinde, her kenardan [[r]] uzaklıkta yer alır.",
          "question": "İç merkez nerededir?",
        },
        {
          "answer": "Dik açılı köşeden çizilen teğet parçalarının uzunluğu [[r]] değerindedir, yani dik kenarlar [[a = r+x]] ve [[b = r+y]] olurken hipotenüs [[c = x+y]] değerindedir. Dik kenarları toplamak [[a+b = 2r+c]] sonucunu verir, bu yüzden [[c]] değerini çıkarmak [[2r]] değerini bırakır. Çıkarma, paylaşılan teğet uzunluklarını giderir ve iç yarıçapı yalnız bırakır.",
          "question": "İç yarıçap formülü neden hipotenüsü çıkarır?",
        },
        {
          "answer": "İki dik kenarı toplamak, iç yarıçapı iki kez sayar; her dik kenar, dik açılı köşeden çizilen [[r]] uzunluğunda bir teğet parçası içerdiğinden bir kez her dik kenarda. Bu yüzden [[a+b-c]] toplamı [[r]] değil, [[2r]] değerine eşittir; ikiye bölmek tek iç yarıçapı verir.",
          "question": "Neden ikiye bölüyoruz?",
        },
        {
          "answer": "Doğrudan değil, çünkü formülün hipotenüse de ihtiyacı vardır. Önce [[c = \\sqrt{a^2+b^2}]] ile hipotenüsü bulun, ardından [[r = \\frac{a+b-c}{2}]] formülünü kullanın. 6 ve 8 dik kenarları için hipotenüs 10 ve iç yarıçap 2'dir. Eksik bir hipotenüs bulmak için kenar hesaplayıcıyı kullanın.",
          "question": "İç yarıçapı yalnızca iki dik kenarı kullanarak hesaplayabilir miyim?",
        },
        {
          "answer": "Evet. Formül [[r = \\frac{A}{s}]] şeklindedir; burada [[A]] alandır ve [[s]] yarı çevredir. Dik üçgen için [[A = \\frac{ab}{2}]] ve [[s = \\frac{a+b+c}{2}]] değerindedir. 6-8-10 üçgeni için [[A = 24]] ve [[s = 12]] olduğundan [[r = 2]] olur. Bu sayfadaki hesaplayıcı üç kenar formülünü kullanır, bu yüzden alan yolunu bağımsız bir kontrol olarak kabul edin.",
          "question": "İç yarıçapı alan ve yarı çevre kullanarak hesaplayabilir miyim?",
        },
        {
          "answer": "Hayır. İç yarıçap, üçgenin içinde kenarlarına dokunan çemberin yarıçapıdır, [[r = \\frac{a+b-c}{2}]]; çevrel yarıçap ise köşelerden geçen çemberin yarıçapıdır, [[R = \\frac{c}{2}]]. 6-8-10 üçgeninde bunlar 2 ve 5'tir.",
          "question": "İç yarıçap çevrel yarıçapla aynı mıdır?",
        },
        {
          "answer": "Hayır. İç yarıçap her zaman her dik kenardan küçüktür, çünkü iç teğet çember üçgenin içine sığmak zorundadır. 3-4-5 üçgeninde iç yarıçap 1'dir ve 3 olan en kısa dik kenardan küçüktür. En kısa dik kenardan büyük bir cevap bir hataya işaret eder; genellikle hipotenüs olarak girilmiş bir dik kenardır.",
          "question": "İç yarıçap, üçgenin en kısa dik kenarından büyük olabilir mi?",
        },
        {
          "answer": "Hipotenüs, üçgendeki en büyük açı olan dik açının karşısındadır ve en uzun kenar her zaman en büyük açının karşısında yer alır. Pisagor teoremi de bunu zorunlu kılar: [[c^2 = a^2+b^2]] değeri, tek başına [[a^2]] veya [[b^2]] değerinden büyüktür, yani [[c]] hem [[a]] hem de [[b]] değerinden uzundur.",
          "question": "Hipotenüs neden en uzun kenar olmalıdır?",
        },
        {
          "answer": "Orijinal formülle yeniden hesaplayın, ardından alan ve yarı çevre ile [[r = \\frac{A}{s}]] kullanarak kontrol edin ve kenarlar için [[a^2+b^2 = c^2]] eşitliğini doğrulayın. Ayrıca cevabın pozitif, her dik kenardan küçük ve kenarlarla aynı birimde olduğunu doğrulayın. Dört kontrol de uyuşuyorsa cevap sağlamdır.",
          "question": "İç yarıçap hesabımın doğru olduğunu nasıl kontrol edebilirim?",
        },
      ],
      "meta": {
        "description": "Dik üçgen iç yarıçap hesaplayıcı ile a ve b dik kenarlarından ve c hipotenüsünden r değerini bulun; formül, çözümlü 6-8-10 örneği ve adım adım kontroller içerir.",
        "primaryKeyword": "Dik Üçgen İç Yarıçap Hesaplayıcı",
        "slug": "right-triangle-inradius-calculator",
        "title": "Dik Üçgen İç Yarıçap Hesaplayıcı - Kenarlardan r Bulma",
      },
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
      "relatedIntro": "Aşağıdaki hesaplayıcıların her biri tek bir dik üçgen görevini yerine getirir, bu yüzden bulmanız gereken ölçüme uyan aracı seçin.",
      "relatedItems": [
        "Dik Üçgen Yarıçap Hesaplayıcı",
        "Dik Üçgen Çevrel Yarıçap Hesaplayıcı",
        "Dik Üçgen Alan Hesaplayıcı",
        "Dik Üçgen Yarı Çevre Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "En doğrudan kullanım, geometri ödevleri ve sınıf çalışmalarıdır; burada iç yarıçap problemleri, öğrencilerin hipotenüsü belirleyip [[r = \\frac{a+b-c}{2}]] formülünü uygulayıp uygulayamadığını ve sonucu alan ve yarı çevre ile kontrol edip edemediğini test eder. Çember çizimi alıştırmaları da aynı fikri kullanır: bir dik üçgen verildiğinde, açıortayların kesiştiği yerde iç merkezi bularak ve pergeli iç yarıçapa ayarlayarak iç teğet çemberini çizin.",
            },
            {
              "kind": "p",
              "text": "Teknik çizim, bir çemberin üçgen bir çerçevenin içine tam olarak sığması gerektiğinde veya yuvarlatılmış bir köşenin bir şeklin iki kenarına dokunması gerektiğinde iç teğet çemberi kullanır. Geometrik modelleme ve koordinat geometrisi, iç merkezi, bir üçgenin içinde üç kenara da eşit uzaklıkta olan nokta olarak kullanır; bu, içine çizilmiş bir şekil için doğal merkezdir.",
            },
            {
              "kind": "p",
              "text": "Öğretmenler bu konuyu üçgenler ile çemberler arasında bir köprü dersi olarak kullanır, çünkü iç teğet çember iki konunun buluştuğu ilk yerlerden biridir. Teğet uzunlukları, açıortaylar, alan ve yarı çevre tek bir resimde görünür, bu yüzden iç yarıçap onları birlikte gözden geçirmenin özlü bir yoludur. İç teğet çember gerektiren gerçek tasarım projelerinin de bu sayfanın ötesinde toleranslara ve malzeme sınırlarına ihtiyacı vardır, bu yüzden sonucu tam geometrik değer olarak kabul edin ve pratik payları ayrıca ekleyin.",
            },
          ],
          "h2": "Dik Üçgen İç Yarıçapının Pratik Uygulamaları",
        },
        "sec-area-semiperimeter": {
          "blocks": [
            {
              "kind": "p",
              "text": "İç yarıçapı bulmanın ikinci bir yolu da üçgenin alanını ve yarı çevresini kullanmaktır:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[A]] üçgenin alanıdır ve [[s]] yarı çevredir, yani çevrenin yarısıdır. Dik üçgende alan, dik kenarların çarpımının yarısıdır, [[A = \\frac{ab}{2}]], çünkü iki dik kenar taban ve yükseklik görevi görür. Yarı çevre [[s = \\frac{a+b+c}{2}]] değerindedir. <a href=\"/right-triangle-area-calculator/\">Dik üçgen alan hesaplayıcı</a>, [[A]] değerini iki dik kenardan bulur ve <a href=\"/right-triangle-semiperimeter-calculator/\">dik üçgen yarı çevre hesaplayıcı</a>, [[s]] değerini üç kenardan bulur.",
            },
            {
              "kind": "p",
              "text": "Dik üçgen ifadelerini yerine koymak [[r = \\frac{ab/2}{(a+b+c)/2}]] sonucunu verir ve yarılar sadeleşerek [[r = \\frac{ab}{a+b+c}]] kalır. Bu, kılavuzun başındaki kenar uzunluğu formülüne eşdeğerdir ve [[a^2+b^2 = c^2]] sağlandığı sürece her geçerli dik üçgen için [[r = \\frac{a+b-c}{2}]] ile aynı cevabı verir, çünkü iki ifade eşittir.",
            },
            {
              "kind": "p",
              "text": "İki yolun da uyuştuğunu 6-8-10 üçgeniyle görün. Alan [[A = \\frac{6 \\times 8}{2} = 24]] ve yarı çevre [[s = \\frac{6+8+10}{2} = 12]] değerindedir, yani [[r = \\frac{24}{12} = 2]]. Standart formül de aynı sonucu verir, [[r = \\frac{6+8-10}{2} = 2]]. Bu sayfadaki hesaplayıcı üç kenar formülünü kullanır ve alan yolu yararlı bir bağımsız kontroldür.",
            },
          ],
          "h2": "Alan ve Yarı Çevre Kullanarak İç Yarıçap Nasıl Hesaplanır?",
          "image": {
            "alt": "İç merkezi paylaşan üç küçük üçgene bölünmüş dik üçgen; alanın r çarpı s olduğunu gösteriyor",
            "caption": "I noktasını paylaşan üç üçgen: alanları toplamı A = r çarpı s eder.",
            "src": "inradius-area-semiperimeter.svg",
          },
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bu sayfadaki hesaplayıcının üçgenin her kenarı için birer giriş alanı ve tek bir sonucu vardır. Üç kenar uzunluğunu da aynı birimle girin, ardından İç Yarıçap r Hesapla düğmesine tıklayın. Sonuç bir uzunluktur, iç teğet çemberin yarıçapıdır ve aynı birimle verilir.",
            },
            {
              "kind": "p",
              "text": "a dik kenarı, dik açıyı oluşturan ilk kenardır ve b dik kenarı ikincisidir. Hangisine [[a]] hangisine [[b]] dediğiniz fark etmez, çünkü formül ikisini toplar. Hipotenüs [[c]], dik açının karşısındaki kenardır ve üçgenin en uzun kenarı olmalıdır. [[c]] için girilen sayı bir dik kenardan kısaysa, üç uzunluk bir dik üçgen oluşturamaz ve sonuç anlamlı olmaz.",
            },
            {
              "kind": "p",
              "text": "Üç alanda da birimleri aynı tutun. [[a]] ve [[b]] santimetre cinsindense [[c]] de santimetre cinsinden olmalıdır ve cevap santimetre cinsinden çıkar. Cevabı çap olarak değil, yarıçap olarak okuyun: yarıçap, çemberin merkezinden kenarına uzanır, çap ise baştan başa uzanır. Yeni bir probleme başlamadan önce alanları temizlemek için Sıfırla düğmesini kullanın.",
            },
          ],
          "h2": "Dik Üçgenin İç Yarıçapını Hesaplama",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diyagram, dik açısı C noktasında olan ABC üçgenini gösterir. AC kenarı [[a]] dik kenarıdır, BC kenarı [[b]] dik kenarıdır ve AB kenarı [[c]] hipotenüsüdür. [[I]] noktası üçgenin içindeki iç merkezi işaretler ve merkezi [[I]] olan bir çember üç kenara da dokunur.",
            },
            {
              "kind": "p",
              "text": "Diyagramı şu sırayla okuyun. A noktasından başlayın, [[a]] dik kenarı boyunca C noktasına gidin, ardından [[b]] dik kenarı boyunca B noktasına gidin, sonra hipotenüs boyunca B noktasından A noktasına geri dönün. İç teğet çember bu sınırın içinde yer alır; [[a]] dik kenarına bir noktada, [[b]] dik kenarına ikinci bir noktada ve hipotenüse üçüncü bir noktada dokunur. [[I]] noktasından bu üç noktaya üç kısa parça uzanır ve her biri [[r]] uzunluğunda bir yarıçaptır.",
            },
            {
              "kind": "p",
              "text": "Her yarıçap kendi kenarıyla dik açı yapar; bu, teğetin işaretidir: kenar çembere o noktada yalnızca dokunur, onu keserek geçmez. Üç yarıçapın da uzunluğu aynıdır, bu yüzden tek bir çember üç kenara da aynı anda dokunabilir. Çember hiçbir köşeden geçmez: köşeler çemberin dışında yer alır ve her köşeden çembere çizilen teğet parçaları, yukarıdaki ispatta kullanılan [[r]], [[x]] ve [[y]] uzunluklarıdır.",
            },
          ],
          "h2": "Dik Üçgen İç Teğet Çember Diyagramı Açıklaması",
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "h3",
              "text": "Örnek 1: Temel 3-4-5 Üçgeni",
            },
            {
              "kind": "p",
              "text": "[[a = 3]], [[b = 4]] ve [[c = 5]] verildiğinde, formül [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]] sonucunu verir. İç teğet çemberin yarıçapı 1 birimdir. Önce üçgeni kontrol edin: [[3^2+4^2 = 9+16 = 25 = 5^2]], yani geçerli bir dik üçgendir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Bilinen 6-8-10 Üçgeni",
            },
            {
              "kind": "p",
              "text": "[[a = 6]], [[b = 8]] ve [[c = 10]] verildiğinde, [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. İç teğet çemberin yarıçapı 2 birimdir; 3-4-5 üçgeninin iki katıdır, çünkü bu üçgen 3-4-5 üçgeninin 2 katı ölçeklenmiş hâlidir. Kontrol: [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: 5-12-13 Üçgeni",
            },
            {
              "kind": "p",
              "text": "[[a = 5]], [[b = 12]] ve [[c = 13]] verildiğinde, [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. İç yarıçap 2 birimdir; üçgen daha büyük ve farklı şekilde olmasına rağmen 6-8-10 üçgeniyle aynıdır. Kontrol: [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: 8-15-17 Üçgeni",
            },
            {
              "kind": "p",
              "text": "[[a = 8]], [[b = 15]] ve [[c = 17]] verildiğinde, [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. İç teğet çemberin yarıçapı 3 birimdir. Kontrol: [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Daha Büyük Ölçümler",
            },
            {
              "kind": "p",
              "text": "[[a = 9]], [[b = 12]] ve [[c = 15]] verildiğinde, [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. Bu, 3 kat ölçeklenmiş 3-4-5 üçgenidir, yani iç yarıçap, 1 olan 3-4-5 iç yarıçapının 3 katıdır. Kontrol: [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Ondalık Ölçümler",
            },
            {
              "kind": "p",
              "text": "[[a = 4.5]], [[b = 6]] ve [[c = 7.5]] verildiğinde, [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. İç yarıçap 1.5 birimdir. Ondalıklar yöntemi hiç değiştirmez: toplayın, çıkarın, ikiye bölün. Kontrol: [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Farklı Birimler",
            },
            {
              "kind": "p",
              "text": "[[a = 30]] cm, [[b = 40]] cm ve [[c = 0.5]] m verildiğinde, önce hipotenüsü dönüştürün: 0.5 m, 50 cm'ye eşittir, çünkü 1 m, 100 cm'dir. Artık üç kenar da santimetre cinsinden olduğundan [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm olur. Kontrol: [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Dönüştürmeden metre ve santimetreyi karıştırmak yanlış cevap verir, bu yüzden her zaman önce dönüştürün.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: Daha Büyük Ondalık Değerler",
            },
            {
              "kind": "p",
              "text": "[[a = 7.2]], [[b = 9.6]] ve [[c = 12]] verildiğinde, [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. İç yarıçap 2.4 birimdir. Bu, 2.4 kat ölçeklenmiş 3-4-5 üçgenidir, yani iç yarıçap, 1 olan 3-4-5 iç yarıçapının 2.4 katıdır. Kontrol: [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
          "h2": "Dik Üçgen İç Yarıçapı Hesaplamanın Çözümlü Örnekleri",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dik üçgenin iç yarıçap formülü, bir bakışta akılda kalacak kadar kısadır:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Burada [[r]] iç yarıçaptır, [[a]] birinci dik kenardır, [[b]] ikinci dik kenardır ve [[c]] hipotenüstür. Formül üç aşamada çalışır ve her aşamanın açık bir anlamı vardır.",
            },
            {
              "kind": "p",
              "text": "Aşama 1: iki dik kenarı toplayın, [[a+b]]. Bu toplam uzunluk her zaman hipotenüsten uzundur, çünkü iki dik kenar birlikte karşıdan geçen düz çizgiden daha uzağa uzanır. Aşama 2: hipotenüsü çıkarın, [[a+b-c]]. Bu, dik kenarların hipotenüsü ne kadar aştığını bırakır. Aşama 3: ikiye bölün, [[r = \\frac{a+b-c}{2}]]. Bölme, kalan uzunluğu iç teğet çemberin yarıçapına dönüştürür ve aşağıdaki ispat bölümü, ikiye bölmenin neden tam olarak doğru olduğunu gösterir.",
            },
            {
              "kind": "p",
              "text": "6-8-10 üçgenini alın: [[a+b = 14]], ardından [[14-10 = 4]], sonra [[\\frac{4}{2} = 2]], yani [[r = 2]]. Formül dik üçgenlere özgüdür. Dik açılı olmayan bir üçgende iç yarıçap hâlâ alanın yarı çevreye bölümüne eşittir, [[r = \\frac{A}{s}]], ancak [[r = \\frac{a+b-c}{2}]] kısayolu uygulanmaz, çünkü onun ispatı dik açıya dayanır.",
            },
          ],
          "h2": "Dik Üçgen İç Yarıçap Formülü",
          "image": {
            "alt": "a ve b dik kenarları, c hipotenüsü, I iç merkezi ve r iç yarıçapı ile etiketlenmiş dik üçgen; yanında r eşittir a artı b eksi c bölü 2 formülü",
            "caption": "Formül üç kenarı da kullanır: dik kenarları toplayın, hipotenüsü çıkarın, ikiye bölün.",
            "src": "inradius-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "On dört kısa adım, sizi etiketli bir üçgenden kontrol edilmiş bir cevaba götürür. Adımlar sırasıyla şunlardır:",
            },
            {
              "kind": "steps",
              "steps": [
                "Probleminizdeki dik üçgeni belirleyin ve bir dik açısı olduğunu doğrulayın.",
                "Dik açılı köşeyi bulun; genellikle C olarak adlandırılır ve küçük bir kare ile işaretlenir.",
                "İlk dik kenar a'yı belirleyin; dik açıyı oluşturan iki kenardan biridir.",
                "İkinci dik kenar b'yi belirleyin; dik açıyı oluşturan diğer kenardır.",
                "Hipotenüs c'nin tamamını belirleyin; dik açının karşısındaki kenardır.",
                "c'nin en uzun kenar olduğunu doğrulayın. Değilse devam etmeden önce diyagramı yeniden etiketleyin.",
                "Üç kenarın Pisagor teoremini sağladığını kontrol edin, [[a^2+b^2 = c^2]].",
                "Uyumlu ölçü birimleri seçin ve farklı bir birim kullanan her ölçümü dönüştürün.",
                "a dik kenarını a Dik Kenarı alanına girin.",
                "b dik kenarını b Dik Kenarı alanına girin.",
                "c hipotenüsünü c Hipotenüsü alanına girin.",
                "İç Yarıçap r Hesapla düğmesine tıklayın ve sonucu okuyun.",
                "Sonucu kontrol edin: pozitif olmalı, kenarlarla aynı birimde olmalı ve her dik kenardan küçük olmalıdır.",
                "Başka bir hesaba başlarken Sıfırla düğmesini kullanın.",
              ],
            },
            {
              "kind": "p",
              "text": "[[c]] olarak yanlış kenarı girmek en çok sorun çıkaran hatadır. Hipotenüs alanına bir dik kenar girilirse, formül hipotenüs yerine bir dik kenarı çıkarır ve cevap çok büyük olur. Hesapla düğmesine tıklamadan önce hipotenüs alanındaki değerin üçün en büyüğü olduğunu her zaman kontrol edin.",
            },
          ],
          "h2": "Dik Üçgen İç Yarıçap Hesaplayıcı Nasıl Kullanılır?",
        },
        "sec-incenter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bir üçgenin iç merkezi, üç iç açıortayının kesiştiği noktadır. Açıortay, bir açıyı iki eşit yarıya bölen doğrudur. A açısının açıortayını, B açısının açıortayını ve C açısının açıortayını çizin; üçü de tek bir noktada kesişir. Bu nokta iç merkez [[I]] noktasıdır ve iç teğet çemberin merkezidir.",
            },
            {
              "kind": "p",
              "text": "İç merkez, açıortayların davranışından dolayı üç kenara da eşit uzaklıktadır. Bir açının açıortayı üzerindeki her nokta, o açıyı oluşturan iki kenara aynı uzaklıktadır. İki açıortayın üzerinde aynı anda bulunan bir nokta, bu yüzden üç kenara da aynı uzaklıktadır ve iç merkez üç açıortayın üçü üzerinde de yer alır. Bu ortak uzaklık iç yarıçap [[r]] değeridir, yani merkezi [[I]] olan ve yarıçapı [[r]] olan çember her kenara dokunur.",
            },
            {
              "kind": "p",
              "text": "Dik açısı C noktasında olan bir dik üçgende iç merkez, 90 derecelik açının açıortayı üzerinde yer alır; bu açıortay, C köşesinde çapraz olarak uzanır ve her dik kenarla 45 derece yapar. İç merkez her zaman üçgenin içinde yer alır, hiçbir zaman bir kenarın üzerinde veya dışında değildir, çünkü üç açıortay üçgenin içinde kesişir. İç teğet çember bu yüzden üçgenin içinde kalır ve dışarı taşmaz.",
            },
          ],
          "h2": "Dik Üçgenin İç Merkezini Anlama",
          "image": {
            "alt": "Üç iç açıortayının da iç merkez I noktasında kesiştiği dik üçgen",
            "caption": "Üç açıortay I noktasında, yani iç merkezde kesişir ve her kenardan r uzaklıktadır.",
            "src": "inradius-angle-bisectors.svg",
          },
        },
        "sec-incircle": {
          "blocks": [
            {
              "kind": "p",
              "text": "İç teğet çember, bir üçgenin tamamen içinde çizilen ve üç kenara da dokunan, yani teğet olan çemberdir. Üçgenin her kenarı, çembere bir teğet doğrudur: çembere tam olarak bir noktada değer ve onu kesmez. Bu üç buluşma noktasına teğet noktaları denir; her kenarda bir tane vardır.",
            },
            {
              "kind": "p",
              "text": "İç merkezden bir teğet noktasına çizilen yarıçap her zaman o kenara diktir. Bu, çemberler hakkında genel bir gerçektir: bir teğet noktasına çizilen yarıçap, teğet doğruyla dik açı yapar. İç merkez üç kenara da aynı uzaklıkta olduğundan, üç teğet noktasına giden üç yarıçapın da uzunluğu aynıdır, [[r]] değerindedir; bu yüzden tek bir çember üç kenara da aynı anda uyar.",
            },
            {
              "kind": "p",
              "text": "Her üçgenin tam olarak bir iç teğet çemberi vardır. Bir üçgenin üç açıortayı tek bir noktada kesişir, bu nokta iç merkezdir ve o noktadan kenarlara olan uzaklık yarıçapı belirler. Farklı ikinci bir çember, üç kenara da içeriden dokunamaz, çünkü onun merkezinin de üç kenara eşit uzaklıkta olması gerekir ve bu özelliğe yalnızca iç merkez sahiptir. İç teğet çemberin köşelerden geçen çember olmadığını unutmayın: kenarlara içeriden dokunur ve hiçbir köşeye ulaşmaz.",
            },
          ],
          "h2": "Dik Üçgen Geometrisinde İç Teğet Çember Nedir?",
          "image": {
            "alt": "Üç kenara da üç teğet noktasında dokunan iç teğet çember ve dik yarıçaplar, dik üçgen",
            "caption": "Üç teğet noktası: her yarıçap kendi kenarıyla 90 derece yapar.",
            "src": "inradius-tangency-points.svg",
          },
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dik üçgenin iç yarıçapını iki dik kenarından ve hipotenüsünden bulun.",
            },
            {
              "kind": "p",
              "text": "İç yarıçap, üçgenin içine sığan ve üç kenara da dokunan çember olan iç teğet çemberin yarıçapıdır. Hesaplayıcının üç sayıya ihtiyacı vardır: [[a]] dik kenarı, [[b]] dik kenarı ve [[c]] hipotenüsü; burada [[a]] ve [[b]] dik açıyı oluşturan kenarlardır, [[c]] ise onun karşısındaki kenardır. Formül [[r = \\frac{a+b-c}{2}]] şeklindedir; burada [[r]] iç yarıçaptır. İki dik kenarı toplar, hipotenüsü çıkarır ve sonucu ikiye böler.",
            },
            {
              "kind": "p",
              "text": "Örneğin, 6-8-10 üçgeni [[r = \\frac{6+8-10}{2} = 2]] sonucunu verir. Bu 2, üçgenin içindeki çemberin yarıçapıdır ve kenarlarla aynı birimle ölçülür. Çember her kenara tam olarak bir noktada dokunur ve merkezi, yani iç merkez, üç kenara da aynı uzaklıktadır.",
            },
          ],
          "h2": "Dik Üçgen İç Yarıçap Hesaplayıcı",
        },
        "sec-legs-known": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bu sayfadaki hesaplayıcı üç kenar uzunluğunun üçünü de ister, bu yüzden yalnızca iki dik kenarla çalışamaz. Yalnızca [[a]] ve [[b]] biliniyorsa, önce Pisagor teoremi ile hipotenüsü bulun, ardından iç yarıçap formülünü kullanın. İki adım şunlardır:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{a^2+b^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[a = 6]] ve [[b = 8]] değerlerini kullanın. Önce hipotenüsü hesaplayın: [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Ardından iç yarıçapı hesaplayın: [[r = \\frac{6+8-10}{2} = 2]]. <a href=\"/right-triangle-side-calculator/\">Dik üçgen kenar hesaplayıcı</a>, iki dik kenardan eksik hipotenüsü bulur; bu, burada kullanılan ilk adımla aynıdır ve <a href=\"/pythagorean-theorem-calculator/\">Pisagor teoremi hesaplayıcı</a> aynı hesabı doğrudan yapar. İlk adımı atlamayın: hipotenüs alanına bir dik kenar girmek yanlış iç yarıçap verir; aşağıdaki hatalar bölümü bunu gösterir.",
            },
          ],
          "h2": "Yalnızca İki Dik Kenar Bilindiğinde İç Yarıçap Nasıl Hesaplanır?",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "İç yarıçap formülü yerine çevrel yarıçap formülünü kullanmak: [[R = \\frac{c}{2}]] 6-8-10 üçgeni için 5 verir, oysa iç yarıçap 2'dir. İki formül farklı soruları cevaplar.",
                "c olarak hipotenüs yerine bir dik kenar girmek: 8 değeri c olarak ve 10 değeri b olarak girilirse formül 2 yerine [[\\frac{6+10-8}{2} = 4]] sonucunu verir. En uzun kenarı her zaman hipotenüs alanına koyun.",
                "c'yi çıkarmayı unutmak: dik kenarları toplayıp ikiye bölmek, [[\\frac{6+8}{2} = 7]], 2 olan gerçek iç yarıçaptan çok daha büyük bir sayı verir.",
                "İkiye bölmeyi unutmak: [[6+8-10 = 4]] iç yarıçapın iki katıdır. İkiye bölme formülün bir parçasıdır, isteğe bağlı bir son adım değildir.",
                "Geçersiz kenar ölçümleri girmek: 3, 4 ve 6 kenarları [[3^2+4^2 = 6^2]] eşitliğini sağlamaz, çünkü 25, 36'ya eşit değildir; bu yüzden iç yarıçap formülü onlara uygulanmaz.",
                "Pisagor ilişkisini yok saymak: formüle herhangi üç uzunluk girilebilir, ancak anlamlı bir iç yarıçap yalnızca gerçek bir dik üçgende çıkar. Önce [[a^2+b^2 = c^2]] eşitliğini kontrol edin.",
                "Ölçü birimlerini karıştırmak: santimetre cinsinden dik kenarlar ve metre cinsinden bir hipotenüs yanlış cevap verir. Hesaplamadan önce her ölçümü tek bir birime dönüştürün.",
                "İç yarıçapı çapla karıştırmak: iç yarıçap, merkezden kenara olan uzaklıktır. İç teğet çemberin çapı iç yarıçapın iki katıdır, yani 6-8-10 üçgeni için 4'tür, 2 değildir.",
                "İç merkezi çevrel merkezle karıştırmak: iç merkez, açıortayların kesiştiği yerde, üçgenin içindedir; çevrel merkez ise hipotenüsün orta noktasıdır. Farklı noktalardır.",
                "İç teğet çemberin üçgenin köşelerinden geçtiğini varsaymak: iç teğet çember kenarlara dokunur ve hiçbir köşeye ulaşmaz. Köşelerden geçen çember çevrel çemberdir.",
                "Yarıçapın bir kenara dik olarak değil, kenar boyunca ölçüldüğünü varsaymak: iç yarıçap, iç merkezden bir kenara olan dik uzaklıktır ve o kenara olan en kısa uzaklıktır.",
                "Ara hesaplamaları çok erken yuvarlamak: toplama ve çıkarma boyunca tam duyarlılığı koruyun ve yalnızca son cevabı yuvarlayın. Erken yuvarlama sonucu kaydırır.",
                "Önce hipotenüsü hesaplamadan yalnızca iki kenar uzunluğunu kullanmak: formülün üç kenarın üçüne de ihtiyacı vardır. Önce Pisagor teoremi ile [[c]] değerini bulun.",
                "Çevre ile yarı çevreyi karıştırmak: yarı çevre, çevrenin yarısıdır, [[s = \\frac{a+b+c}{2}]]. [[r = \\frac{A}{s}]] içinde tam çevreyi kullanmak doğru cevabı yarıya indirir.",
              ],
            },
          ],
          "h2": "İç Yarıçap Hesaplarken Yapılan Yaygın Hatalar",
        },
        "sec-practice": {
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
              "text": "Bir dik üçgenin dik kenarları [[a = 20]] cm ve [[b = 21]] cm, hipotenüsü [[c = 29]] cm'dir. İç yarıçap [[r]] değerini bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Ondalık Ölçüm",
            },
            {
              "kind": "p",
              "text": "[[a = 10.5]] m, [[b = 14]] m ve [[c = 17.5]] m verildiğinde, iç yarıçap [[r]] değerini metre cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Birim Dönüşümü",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin dik kenarları [[a = 1.5]] m ve [[b = 2]] m, hipotenüsü [[c = 250]] cm'dir. İç yarıçapı metre cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 4: İki Dik Kenardan Hipotenüsü Bulma",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin dik kenarları [[a = 12]] cm ve [[b = 16]] cm'dir. Önce hipotenüsü, sonra iç yarıçapı bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Alan ve Yarı Çevre",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin dik kenarları [[a = 15]] cm ve [[b = 20]] cm, hipotenüsü [[c = 25]] cm'dir. Alanı ve yarı çevreyi bulun, ardından iç yarıçapı [[r = \\frac{A}{s}]] ile bulun ve üç kenar formülüyle doğrulayın.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Geçersiz Bir Dik Üçgeni Belirleme",
            },
            {
              "kind": "p",
              "text": "Bir öğrenciye [[a = 7]] cm, [[b = 10]] cm ve [[c = 12]] cm veriliyor ve iç yarıçap soruluyor. Bu kenarların neden bir dik üçgen oluşturmadığını gösterin ve öğrencinin formülü uygulamak yerine ne yapması gerektiğini açıklayın.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Problemlerinin Cevapları",
            },
            {
              "kind": "p",
              "text": "Cevap 1: [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Kontrol: [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Cevap 2: [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Kontrol: [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Cevap 3: Hipotenüsü dönüştürün: 250 cm, 2.5 m'ye eşittir. Ardından [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, yani 50 cm olur. Kontrol: [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Cevap 4: [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, ardından [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 5: [[A = \\frac{15 \\times 20}{2} = 150]] santimetrekare ve [[s = \\frac{15+20+25}{2} = 30]] cm, yani [[r = \\frac{150}{30} = 5]] cm. Üç kenar formülü de aynı sonucu verir: [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 6: [[7^2+10^2 = 49+100 = 149]], oysa [[12^2 = 144]] olduğundan [[a^2+b^2]], [[c^2]] değerine eşit değildir ve üçgen dik açılı değildir. Öğrenci iç yarıçap formülünü uygulamamalıdır: önce ölçümleri yeniden kontrol etmeli ve doğruysa dik açılı olmayan bir üçgen için genel formül olan [[r = \\frac{A}{s}]] formülünü kullanmalıdır.",
            },
          ],
          "h2": "Cevaplı Alıştırma Problemleri",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dokuz özellik doğrudan formülden ve iç teğet çemberin geometrisinden çıkar. Her biri aynı zamanda yeni bir cevap için bir sağduyu kontrolüdür.",
            },
            {
              "items": [
                "İç yarıçap, geçerli ve yozlaşmamış bir üçgen için her zaman pozitiftir, çünkü [[a+b]] her zaman [[c]] değerinden büyüktür.",
                "İç merkez, üç açıortayın kesiştiği yerde, üçgenin içinde yer alır.",
                "İç yarıçap, iç merkezden her kenara olan en kısa dik uzaklıktır ve üç uzaklık da [[r]] değerine eşittir.",
                "İç teğet çember üç kenara da dokunur; her kenarda bir teğet noktası vardır.",
                "Aynı dış noktadan çizilen teğet parçalarının uzunlukları eşittir; formülün türetildiği gerçek budur.",
                "Üçgenin genel ölçeğini artırmak, iç yarıçapı aynı ölçek faktörüyle artırır: her kenarı iki katına çıkarmak [[r]] değerini iki katına çıkarır ve her kenarı üç katına çıkarmak [[r]] değerini üç katına çıkarır.",
                "İç yarıçap çevrel yarıçapla aynı değildir. 6-8-10 üçgeninde [[r = 2]] iken [[R = 5]] değerindedir.",
                "İç yarıçap, üçgenin büyüklüğünün yanı sıra şekline de bağlıdır: 5-12-13 üçgeni ile 6-8-10 üçgeninin kenarları farklı olmasına rağmen ikisinin de iç yarıçapı [[r = 2]] değerindedir.",
                "İç yarıçap, kenar uzunluklarından [[r = \\frac{a+b-c}{2}]] ile veya alan ve yarı çevreden [[r = \\frac{A}{s}]] ile hesaplanabilir ve iki yol da aynı cevabı verir.",
              ],
              "kind": "list",
            },
          ],
          "h2": "Dik Üçgende İç Yarıçapın Önemli Özellikleri",
        },
        "sec-semiperimeter-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "Yarı çevre [[s]], üçgenin çevresinin yarısıdır:",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Yarı çevre denmesinin nedeni, yarı sözcüğünün yarım anlamına gelmesidir: tam çevre [[P = a+b+c]] değerindedir ve yarı çevre onun yarısıdır. İkisini karıştırmayın. Çevre, üçgenin etrafındaki toplam uzunluktur; yarı çevre ise alan formüllerinde ve iç yarıçap formülü [[r = \\frac{A}{s}]] içinde görünen daha kısa bir yardımcı değerdir.",
            },
            {
              "kind": "p",
              "text": "Yarı çevre tek başına iç yarıçapı belirleyemez, çünkü [[r = \\frac{A}{s}]] formülünün [[A]] alanına da ihtiyacı vardır. İki üçgen aynı yarı çevreye sahip olup farklı alanlara sahip olabilir ve o zaman iç yarıçapları da farklı olur. Alan, yarı çevrenin dışarıda bıraktığı şekil bilgisini taşır. 6-8-10 üçgeninde [[s = 12]] ve [[A = 24]] olduğundan [[r = \\frac{24}{12} = 2]] olur. [[s = 12]] olan ancak daha küçük alana sahip farklı bir üçgenin iç yarıçapı daha küçük olur.",
            },
            {
              "kind": "p",
              "text": "[[A = rs]] eşitliğinin neden geçerli olduğunu görmenin düzgün bir yolu vardır. İç merkez [[I]] noktasını üç köşeye birleştirin; üçgeni üç küçük üçgene bölersiniz. Her küçük üçgenin yüksekliği [[r]] ve tabanı büyük üçgenin bir kenarına eşittir, yani alanları [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] ve [[\\frac{rc}{2}]] değerindedir. Bunları toplamak [[A = \\frac{r(a+b+c)}{2} = r \\times s]] sonucunu verir, çünkü [[s = \\frac{a+b+c}{2}]] değerindedir. [[s]] değerine bölmek [[r = \\frac{A}{s}]] sonucunu verir.",
            },
          ],
          "h2": "İç Yarıçap ile Yarı Çevre Arasındaki İlişki",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sayfanın üstündeki örneği kullanın: [[a = 6]], [[b = 8]] ve [[c = 10]]. Aşağıdaki beş adım, hiçbir şey atlanmadan tüm çözümü gösterir.",
            },
            {
              "kind": "steps",
              "steps": [
                "Formülü yazın: [[r = \\frac{a+b-c}{2}]].",
                "Değerleri yerine koyun: [[r = \\frac{6+8-10}{2}]].",
                "Dik kenarları toplayın: [[r = \\frac{14-10}{2}]].",
                "Hipotenüsü çıkarın: [[r = \\frac{4}{2}]].",
                "Bölün: [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "2 cevabı, iç teğet çemberin yarıçapının 2 birim olduğu anlamına gelir ve kenarlarla aynı birimdedir. Merkezi her kenardan 2 birim uzaklıktadır ve çember her kenara tam olarak bir noktada dokunur.",
            },
            {
              "kind": "p",
              "text": "Cevaba güvenmeden önce ölçümlerin bir dik üçgen oluşturduğunu doğrulayın: [[6^2+8^2 = 36+64 = 100 = 10^2]], yani Pisagor teoremi sağlanır ve üçgen gerçekten dik açılıdır. İkinci bir kontrol alan ve yarı çevre kullanır: [[A = \\frac{6 \\times 8}{2} = 24]] ve [[s = \\frac{6+8+10}{2} = 12]], bu da [[r = \\frac{24}{12} = 2]] sonucunu verir; farklı bir yoldan aynı cevap.",
            },
          ],
          "h2": "İç Yarıçap Bulmanın Adım Adım Örneği",
          "image": {
            "alt": "a eşittir 6, b eşittir 8, c eşittir 10 ve iç yarıçap r eşittir 2 olan çözümlü örnek; iç teğet çember üç kenara da dokunuyor",
            "caption": "Çözümlü örnek: a = 6, b = 8, c = 10, r = 2 sonucunu verir; alan ve yarı çevre ile kontrol edildi.",
            "src": "inradius-example-6-8-10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dört bağımsız kontrol, neredeyse her hatayı yakalar. Her cevapta en az birini, problem önemliyse dördünü de uygulayın. Aşağıdaki örnekte baştan sona [[r = 2]] olan 6-8-10 üçgeni kullanılmıştır.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 1: Orijinal Formül",
            },
            {
              "kind": "p",
              "text": "İlk çözümünüze bakmadan [[r = \\frac{a+b-c}{2}]] ile sıfırdan yeniden hesaplayın. Burada [[r = \\frac{6+8-10}{2} = 2]]. Yeni bir hesaplama, ilk hesaplamadaki kaymaları yakalar; özellikle yanlış sırada yapılan bir çıkarmayı.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 2: Alan ve Yarı Çevre",
            },
            {
              "kind": "p",
              "text": "[[r = \\frac{A}{s}]] ile doğrulayın. Burada [[A = \\frac{6 \\times 8}{2} = 24]] ve [[s = \\frac{6+8+10}{2} = 12]] olduğundan [[r = \\frac{24}{12} = 2]] olur. Bu yol toplama ve çıkarma yerine çarpma ve bölme kullandığından farklı bir hata sınıfını yakalar.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 3: Pisagor Teoremi",
            },
            {
              "kind": "p",
              "text": "[[a^2+b^2 = c^2]] eşitliğini doğrulayın. Burada [[6^2+8^2 = 36+64 = 100 = 10^2]] olduğundan üç kenar gerçek bir dik üçgen oluşturur. Bu kontrol başarısız olursa iç yarıçap formülü hiç uygulanmaz ve ondan çıkan hiçbir [[r]] değerine güvenilemez.",
            },
            {
              "kind": "h3",
              "text": "Kontrol 4: Geometrik Mantıklılık",
            },
            {
              "kind": "p",
              "text": "[[r]] değerinin pozitif, her dik kenardan küçük ve doğru birimde olduğunu doğrulayın. Burada 2 pozitiftir ve hem 6 hem de 8'den küçüktür ve birim kenarlarla uyuşur. Çember üçgenin içine sığmak zorundadır, bu yüzden en kısa dik kenardan büyük bir iç yarıçap imkânsızdır ve bir hataya işaret eder; genellikle hipotenüs olarak girilmiş bir dik kenardır.",
            },
          ],
          "h2": "İç Yarıçap Hesabınız Nasıl Doğrulanır?",
        },
        "sec-vs-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "İç yarıçap [[r]] ve çevrel yarıçap [[R]], dik üçgenin iki yarıçapıdır ve iki farklı çemberi tanımlar. İç yarıçap, üçgenin içinde yer alan ve üç kenara da dokunan iç teğet çemberin yarıçapıdır. Çevrel yarıçap, üçgenin dışında yer alan ve üç köşeden de geçen çevrel çemberin yarıçapıdır. Bir çember üçgenin içinde yer alır, diğeri onu çevreler.",
            },
            {
              "kind": "p",
              "text": "Dik üçgen için çevrel yarıçap [[R = \\frac{c}{2}]] değerindedir, çünkü hipotenüs çevrel çemberin çapıdır. İç yarıçap [[r = \\frac{a+b-c}{2}]] değerindedir ve üç kenarın üçüne de ihtiyaç duyar, çünkü iç teğet çemberin ne kadar sıkı oturduğu yalnızca en uzun kenara değil, üçgenin şekline bağlıdır. Farkı sayılarla görmek için 6-8-10 üçgenini kullanın: [[r = 2]] ve [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Merkezler de farklıdır. İç merkez üçgenin içinde yer alır; açıortayların kesiştiği yerdedir ve her kenardan [[r]] uzaklıktadır. Çevrel merkez hipotenüsün orta noktasında, üçgenin sınırında yer alır ve her köşeden [[R]] uzaklıktadır. Çevrel çemberle ilgili problemler için [[R = \\frac{c}{2}]] formülünü doğrudan uygulayan <a href=\"/right-triangle-circumradius-calculator/\">dik üçgen çevrel yarıçap hesaplayıcı</a> kullanın.",
            },
          ],
          "h2": "İç Yarıçap ile Çevrel Yarıçap Arasındaki İlişki",
          "image": {
            "alt": "İçinde küçük iç teğet çember, köşelerinden geçen büyük çevrel çember bulunan dik üçgen, 6-8-10 üçgeni",
            "caption": "Üçgenin içindeki iç teğet çember (r = 2), çevresindeki çevrel çember (R = 5), 6-8-10 üçgeni.",
            "src": "inradius-vs-circumcircle.svg",
          },
          "table": {
            "headers": [
              "Özellik",
              "İç Yarıçap r",
              "Çevrel Yarıçap R",
            ],
            "rows": [
              [
                "Çember",
                "İç teğet çember",
                "Çevrel çember",
              ],
              [
                "Konum",
                "Üçgenin içinde",
                "Üçgenin çevresinde",
              ],
              [
                "Temas",
                "Kenarlara teğet",
                "Köşelerden geçer",
              ],
              [
                "Dik üçgen formülü",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Merkez",
                "İç merkez",
                "Çevrel merkez",
              ],
              [
                "6-8-10 değeri",
                "2",
                "5",
              ],
            ],
          },
        },
        "sec-what-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dik üçgenin iç yarıçapı, iç teğet çemberinin yarıçapıdır; iç teğet çember, üçgenin içine sığan en büyük çemberdir. Dik açısı C noktasında olan ABC üçgenini düşünün; AC dik kenarına [[a]], BC dik kenarına [[b]] ve AB hipotenüsüne [[c]] diyelim. Şimdi üçgenin içine, hiçbir kenarı kesmeden sığdırabileceğiniz en büyük çemberi çizin. Bu çember üç kenara da dokunur ve yarıçapı, [[r]] ile yazılan iç yarıçaptır.",
            },
            {
              "kind": "p",
              "text": "İç teğet çemberin merkezi iç merkez olarak adlandırılır ve [[I]] ile yazılır. İç merkez, üç kenara da aynı dik uzaklıktadır ve bu uzaklık [[r]] değeridir. [[I]] noktasından bir kenara çizilen her yarıçap, o kenarla dik açı yapar; bu yüzden çember kenara yalnızca dokunur, onu kesmez. İç teğet çember üçgenin içinde kalır, çünkü çemberin her noktası [[I]] noktasına [[r]] veya daha az uzaklıktadır ve [[I]] noktasının kendisi üçgenin içindedir.",
            },
            {
              "kind": "p",
              "text": "Küçük bir örnek fikri somutlaştırır. 3-4-5 üçgeninde iç yarıçap [[r = \\frac{3+4-5}{2} = 1]] değerindedir. İç teğet çemberin yarıçapı 1 birimdir, yani merkezi her kenardan 1 birim uzaklıktadır. <a href=\"/right-triangle-radius-calculator/\">Dik üçgen yarıçap hesaplayıcı</a>, iç teğet çemberi köşelerden geçen çemberle karşılaştırmak isterseniz dik üçgenin her iki yarıçapını da tek sayfada kapsar.",
            },
          ],
          "h2": "Dik Üçgende İç Yarıçap Nedir?",
          "image": {
            "alt": "ABC dik üçgeni, içindeki iç teğet çember; merkez I ve üç kenara da dokunan r yarıçapı",
            "caption": "ABC üçgeni ve iç teğet çemberi: I merkezi her kenardan r uzaklıktadır.",
            "src": "inradius-main-incircle.svg",
          },
        },
        "sec-why-formula-works": {
          "blocks": [
            {
              "kind": "p",
              "text": "Formül, teğetler hakkındaki basit bir gerçekten gelir: bir çemberin dışındaki aynı noktadan o çembere çizilen iki teğet parçasının uzunlukları eşittir. Üçgenin her köşesi iç teğet çemberin dışında yer alır ve o köşede buluşan iki kenar çembere teğettir. Yani her köşeden çizilen iki teğet parçası eşittir.",
            },
            {
              "kind": "p",
              "text": "Dik açılı C köşesinden başlayın. C noktasında buluşan iki kenar dik kenarlardır ve iç teğet çember her dik kenara, kenar boyunca C noktasından [[r]] uzaklıkta olan bir noktada dokunur. Bunun nedeni, iç merkezden dik kenarlara çizilen iki yarıçapın, dik kenarlar boyunca uzanan iki kısa parçayla birlikte C köşesinde kenarı [[r]] olan bir kare oluşturmasıdır. Yani C noktasından her dik kenar boyunca uzanan teğet parçasının uzunluğu [[r]] değerindedir.",
            },
            {
              "kind": "p",
              "text": "Şimdi diğer iki köşeye bakın. A köşesinden kenarlar boyunca uzanan teğet uzunluğu [[x]] ve B köşesinden uzanan teğet uzunluğu [[y]] olsun. A köşesinde bir teğet [[a]] dik kenarı boyunca C noktasına doğru, diğeri hipotenüs boyunca B noktasına doğru uzanır, yani ikisinin de uzunluğu [[x]] değerindedir. B köşesinde iki teğetin de uzunluğu [[y]] değerindedir. Kenar uzunlukları bu parçalardan oluşur:",
            },
            {
              "kind": "p",
              "text": "[[[a = r + x]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = r + y]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = x + y]]]",
            },
            {
              "kind": "p",
              "text": "İlk iki denklemi toplayın: [[a+b = 2r+x+y]]. [[x+y = c]] olduğundan, bu [[a+b = 2r+c]] olur. Düzenlemek [[2r = a+b-c]] sonucunu verir ve ikiye bölmek formülü verir, [[r = \\frac{a+b-c}{2}]]. Her adım eşit teğet uzunluklarından çıkar, yani formül ezberlenecek bir kısayol değil, iç teğet çemberin kenarlara dokunuş biçiminin doğrudan bir sonucudur.",
            },
          ],
          "h2": "Dik Üçgen İç Yarıçap Formülü Neden İşe Yarar?",
        },
      },
      "tocHeading": "Kılavuz İçindekiler",
      "tocItems": {
        "sec-applications": "Dik Üçgen İç Yarıçapının Pratik Uygulamaları",
        "sec-area-semiperimeter": "Alan ve Yarı Çevre Kullanarak İç Yarıçap Nasıl Hesaplanır?",
        "sec-calculate": "Dik Üçgenin İç Yarıçapını Hesaplama",
        "sec-diagram": "Dik Üçgen İç Teğet Çember Diyagramı Açıklaması",
        "sec-examples": "Dik Üçgen İç Yarıçapı Hesaplamanın Çözümlü Örnekleri",
        "sec-faq": "Sık Sorulan Sorular",
        "sec-formula": "Dik Üçgen İç Yarıçap Formülü",
        "sec-how-to-use": "Dik Üçgen İç Yarıçap Hesaplayıcı Nasıl Kullanılır?",
        "sec-incenter": "Dik Üçgenin İç Merkezini Anlama",
        "sec-incircle": "Dik Üçgen Geometrisinde İç Teğet Çember Nedir?",
        "sec-intro": "Dik Üçgen İç Yarıçap Hesaplayıcı",
        "sec-legs-known": "Yalnızca İki Dik Kenar Bilindiğinde İç Yarıçap Nasıl Hesaplanır?",
        "sec-mistakes": "İç Yarıçap Hesaplarken Yapılan Yaygın Hatalar",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-properties": "Dik Üçgende İç Yarıçapın Önemli Özellikleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
        "sec-semiperimeter-relation": "İç Yarıçap ile Yarı Çevre Arasındaki İlişki",
        "sec-step-example": "İç Yarıçap Bulmanın Adım Adım Örneği",
        "sec-verify": "İç Yarıçap Hesabınız Nasıl Doğrulanır?",
        "sec-vs-circumradius": "İç Yarıçap ile Çevrel Yarıçap Arasındaki İlişki",
        "sec-what-inradius": "Dik Üçgende İç Yarıçap Nedir?",
        "sec-why-formula-works": "Dik Üçgen İç Yarıçap Formülü Neden İşe Yarar?",
      },
    },
};
