// legAFromProjectionGuideTranslations.btr.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B6_TR = {
  "tr": {
      "faqHeading": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "A dik kenarını p izdüşümünden bulma formülü nedir?",
          "answer": "Formül [[a = \\sqrt{c \\times p}]] şeklindedir; burada c tam hipotenüstür ve p, a dik kenarına ait izdüşümdür. Örneğin, [[c = 10]] cm ve [[p = 3.6]] cm için [[a = 6]] cm bulunur.",
        },
        {
          "question": "c ile p neden çarpılır?",
          "answer": "Çarpma, benzer üçgenlerden gelir. ACD üçgeni ABC üçgenine benzerdir ve bu benzerlik [[p / a = a / c]] oranını verir; içler dışlar çarpımı da [[a^2 = c \\times p]] sonucunu verir. Çarpım, dik kenarın kendisi değil, dik kenarın karesidir.",
        },
        {
          "question": "Karekök neden gereklidir?",
          "answer": "Çünkü cp çarpımı a değil, a kareye eşittir. Karekök, kare alma işlemini geri alır ve sıradan bir uzunluk döndürür. Karekök alınmazsa c = 10, p = 3.6 örneğinde 6 yerine 36 yazılmış olur.",
        },
        {
          "question": "p izdüşümü neyi temsil eder?",
          "answer": "p izdüşümü, dik açıdan çizilen yüksekliğin hipotenüsle kesişmesiyle oluşan ve A köşesinin yanındaki hipotenüs parçasıdır. Hipotenüsü CD yüksekliğiyle bölen ABC üçgeninde [[p = AD]] olur ve p, hipotenüs boyunca uzanır.",
        },
        {
          "question": "p izdüşümü a dik kenarı ile aynı mıdır?",
          "answer": "Hayır. a dik kenarı, dik açıyı oluşturan kenarlardan biri olan AC kenarıdır; p izdüşümü ise hipotenüs boyunca uzanan AD parçasıdır. Bunlar farklı konumlarda farklı uzunluklardır ve yalnızca [[a^2 = c \\times p]] bağıntısıyla ilişkilidir.",
        },
        {
          "question": "a dik kenarını bulmak için q izdüşümü kullanılabilir mi?",
          "answer": "Doğrudan kullanılamaz. q izdüşümü b dik kenarıyla eşleştiği için q girildiğinde b dik kenarı elde edilir. q ile a dik kenarını bulmak için önce [[p = c - q]] ile p değerini bulun, sonra [[a = \\sqrt{c \\times p}]] formülünü kullanın.",
        },
        {
          "question": "Yalnızca q izdüşümü biliniyorsa ne yapılır?",
          "answer": "q değerini hipotenüsten çıkarın: [[p = c - q]]. [[c = 25]] cm ve [[q = 16]] cm için [[p = 9]] cm olur, ardından [[a = \\sqrt{25 \\times 9} = 15]] cm bulunur.",
        },
        {
          "question": "p izdüşümü hipotenüse eşit olabilir mi?",
          "answer": "Hayır. p izdüşümü hipotenüsün yalnızca bir parçası olduğu için c değerinden küçük olmak zorundadır. p, c değerine eşit olsaydı q sıfır olurdu ve üçgen gerçek bir dik üçgen değil, bozulmuş bir üçgen olurdu.",
        },
        {
          "question": "Hesaplanan dik kenar nasıl doğrulanır?",
          "answer": "Cevabın karesini alın ve [[c \\times p]] çarpımına eşit olup olmadığını kontrol edin. Ayrıca q değerinden b dik kenarını bulup [[a^2 + b^2 = c^2]] eşitliğini kontrol edebilir, p değerinin c değerinden küçük olduğunu ve a dik kenarının hipotenüsten kısa olduğunu doğrulayabilirsiniz.",
        },
        {
          "question": "p ve q eşit olduğunda ne olur?",
          "answer": "Yükseklik hipotenüsün orta noktasına iner ve iki dik kenar eşit olur, bu nedenle üçgen ikizkenar dik üçgen olur. [[c = 20]] cm ve [[p = q = 10]] cm için her iki dik kenar da [[10\\sqrt{2}]] cm, yani yaklaşık 14.142 cm olur.",
        },
        {
          "question": "Aynı teoremle b dik kenarı bulunabilir mi?",
          "answer": "Evet, simetrik formül [[b = \\sqrt{c \\times q}]] ile bulunabilir. b dik kenarı q izdüşümüyle eşleşir, tıpkı a dik kenarının p ile eşleşmesi gibi. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">izdüşümden b dik kenarı hesaplayıcı</a> bu hesap için hazırlanmıştır.",
        },
        {
          "question": "İzdüşüm teoremi Pisagor teoremiyle ilişkili midir?",
          "answer": "Evet. İki izdüşüm formülünün toplanması [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]] sonucunu verir, çünkü [[p + q = c]] olur. İzdüşüm teoremi, Pisagor bağıntısını her dik kenar için bir parçaya böler.",
        },
      ],
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları Keşfedin",
      "relatedIntro": "Hangi ölçümleri bildiğinize göre sonraki aracı seçin, çünkü aşağıdaki her hesaplayıcı tek bir dik üçgen görevini yerine getirir.",
      "relatedItems": [
        "Dik Üçgen İzdüşüm Hesaplayıcı",
        "Dik Üçgen P İzdüşümü Hesaplayıcı",
        "Dik Üçgen Q İzdüşümü Hesaplayıcı",
        "Dik Üçgen İzdüşümden B Dik Kenarı Hesaplayıcı",
        "Dik Üçgen İzdüşümlerden Hipotenüs Hesaplayıcı",
        "Dik Üçgen İzdüşümlerden Yükseklik Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bu hesaplayıcı, tam hipotenüs c ve a dik kenarına ait p izdüşümü bilindiğinde bir dik üçgenin a dik kenarını bulur. İki uzunluğu girersiniz ve hesaplayıcı, kareli bir değer ya da bir izdüşüm parçası değil, a dik kenarının gerçek kenar uzunluğunu döndürür. Formül [[a = \\sqrt{c \\times p}]] şeklindedir; burada c tam hipotenüstür ve p, a dik kenarının yanındaki hipotenüs parçasıdır.",
            },
            {
              "kind": "p",
              "text": "Örneğin, [[c = 10]] cm ve [[p = 3.6]] cm ise [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm olur. 36 çarpımı yalnızca bir ara adımdır. Karekök almak bu değeri yeniden bir uzunluğa dönüştürür ve bu uzunluk aradığınız kenardır.",
            },
            {
              "kind": "p",
              "text": "Hesaplayıcı bu sayfanın üst kısmında yer alır; ardından formül, etiketli bir şema, izdüşüm teoreminin ispatı, çözümlü örnekler ve her cevaba uygulanabilecek kontroller gelir. Bu rehber, ortaokul ve lise öğrencilerine, öğretmenlere, özel ders verenlere ve geometri ödevlerine yardımcı olan velilere uygundur.",
            },
          ],
          "h2": "Dik Üçgende İzdüşümden A Dik Kenarı Hesaplayıcı",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Hesaplayıcıda iki giriş alanı vardır. İlki, dik açının karşısındaki tam kenar olan hipotenüs c değerini alır. İkincisi, a dik kenarına ait hipotenüs parçası olan p izdüşümünü alır. Her iki uzunluk da aynı birimle verilmelidir, bu nedenle bir ölçüm santimetre, diğeri metre ise önce birim dönüşümü yapın.",
            },
            {
              "kind": "p",
              "text": "p izdüşümü c değerinden küçük olmak zorundadır. Bu kural geometrinin kendisinden gelir: p, hipotenüsün yalnızca bir parçasıdır, bu nedenle hiçbir zaman tam kenara eşit ya da ondan büyük olamaz. p değeriniz c değerinden büyükse büyük olasılıkla bir dik kenar, yükseklik ya da yanlış izdüşüm girmişsinizdir.",
            },
            {
              "kind": "p",
              "text": "Sonucu görmek için A Dik Kenarını Hesapla düğmesine tıklayın ve yeni bir problem için her iki alanı da temizlemek üzere Sıfırla düğmesini kullanın. Sonuç, girdiğiniz birimle bir uzunluktur, bu nedenle 10 cm hipotenüs ve 3.6 cm izdüşüm 6 cm sonucunu verir ve ek bir dönüşüm adımı gerekmez.",
            },
          ],
          "h2": "Dik Üçgende İzdüşümden A Dik Kenarını Hesaplama",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bir dik üçgenin birbirine dik iki kenarı vardır ve bunlara dik kenar denir; en uzun kenarına ise hipotenüs denir. İki dik kenar dik açıda birleşir ve hipotenüs bu açının karşısında yer alır. Bu rehberde üçgen, dik açısı C köşesinde olan ABC üçgenidir; a dik kenarı AC kenarı, b dik kenarı BC kenarı ve hipotenüs c ise AB kenarıdır.",
            },
            {
              "kind": "p",
              "text": "a dik kenarı, dik açıyı oluşturan iki kenardan biridir, bu nedenle üçgenin gerçek bir kenarıdır. Üçgenin içine çizilmiş bir parça değildir ve p izdüşümü de değildir. p izdüşümü hipotenüs boyunca düz bir şekilde uzanırken a dik kenarı A köşesinden dik açının bulunduğu C köşesine uzanır. Bu iki rolü birbirinden ayırmak, formülü doğru kullanmanın ilk adımıdır.",
            },
            {
              "kind": "p",
              "text": "a dik kenarı b dik kenarından yalnızca konumuyla ayrılır: a dik kenarı A köşesine, b dik kenarı ise B köşesine dokunur. Her dik kenarın kendi izdüşümü vardır, bu nedenle a için formül p değerini, b için formül ise q değerini kullanır; bu eşleşme etiketlemeyle sabittir.",
            },
            {
              "kind": "p",
              "text": "Bozulmamış herhangi bir dik üçgende a dik kenarı hipotenüsten kısadır. Bu, her cevap için hızlı bir sağduyu kontrolü sağlar: hesaplanan a dik kenarı c değerinden uzun çıkarsa girdilerde ya da işlemde bir sorun vardır ve şema etiketleri ilk bakılacak yerdir.",
            },
          ],
          "h2": "Dik Üçgende A Dik Kenarı Nedir?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dik açının bulunduğu C köşesinden hipotenüs AB üzerine dik bir yükseklik çizin. Bu yükseklik hipotenüsle, ayak noktası olarak adlandırılan ve D ile gösterilen bir noktada kesişir. Bu nokta hipotenüsü iki bitişik parçaya böler ve bu parçalar izdüşümlerdir. AD parçası p izdüşümü, DB parçası ise q izdüşümüdür.",
            },
            {
              "kind": "p",
              "text": "p izdüşümü a dik kenarına aittir, çünkü a dik kenarının başladığı A köşesinin yanında yer alır. Küçük ACD üçgeninde a dik kenarı hipotenüs, p ise onun bir dik kenarıdır ve izdüşüm teoremini çalıştıran geometrik bağ tam olarak budur. Aynı gerekçeyle q izdüşümü, B köşesine dokunan b dik kenarına aittir.",
            },
            {
              "kind": "p",
              "text": "İzdüşümler, diğer kenarlarla aynı birimle ölçülen, hipotenüs boyunca uzanan uzunluklardır. Hiçbir şeye dik değildirler ve özgün üçgenin kenarları da değildirler. Bir izdüşümü en iyi, yükseklik hipotenüse dik olarak indiğinde bir dik kenarın hipotenüs üzerine düşürdüğü gölge olarak düşünebilirsiniz.",
            },
            {
              "kind": "p",
              "text": "p ve q, tek bir doğru kenarın iki parçası olduğu için toplamları tam hipotenüse eşittir:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Bu toplama kendi başına da işe yarar. c değerini ve bir izdüşümü biliyorsanız diğerini çıkarma işlemiyle bulabilirsiniz; bu adımı, diğer izdüşümle ilgili bölüm ayrıntılı olarak ele alır.",
            },
          ],
          "h2": "Dik Üçgende P İzdüşümü Nedir?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "İzdüşüm teoremi, a dik kenarının karesinin, hipotenüs ile onun izdüşümünün çarpımına eşit olduğunu söyler:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Her iki tarafın pozitif karekökünü almak, bu sayfanın çalışma formülünü verir:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Hesap iki ayrı aşamada ilerler. 1. aşama hipotenüsü izdüşümle çarpar ve sonuç bir kenar değil, kareli bir uzunluktur. 2. aşama pozitif karekökü alır ve bu kareli uzunluğu yeniden sıradan bir uzunluğa dönüştürür. 2. aşamayı atlamak, bu formülle yapılan en yaygın hatadır ve sonraki bölüm karekökün neden atlanamayacağını açıklar.",
            },
            {
              "kind": "p",
              "text": "Her iki aşamada da birimlere dikkat etmek gerekir. c ve p ikisi de santimetre ise çarpımları santimetrekare olur ve karekök santimetre döndürür. c için metre, p için santimetre gibi birimleri karıştırmak anlamsız bir çarpım verir, bu nedenle çarpmadan önce tek bir birime dönüştürün. Pozitif kök kullanılır, çünkü bir kenar uzunluğu her zaman pozitiftir.",
            },
            {
              "kind": "p",
              "text": "Küçük bir sayısal örnek her iki aşamayı da çalışırken gösterir. [[c = 10]] cm ve [[p = 3.6]] cm ile 1. aşama [[10 \\times 3.6 = 36]] sonucunu, 2. aşama ise [[a = \\sqrt{36} = 6]] cm sonucunu verir. 36 sayısı tek başına hiçbir soruyu yanıtlamaz. Ancak karekök alındıktan sonra dik kenar uzunluğuna dönüşür.",
            },
          ],
          "h2": "Dik Üçgende İzdüşümden A Dik Kenarı Formülü",
          "image": {
            "alt": "CD yüksekliğine sahip ABC dik üçgeni; a karenin, hipotenüs c ile p izdüşümünün çarpımına eşit olduğunu gösteriyor",
            "caption": "İzdüşüm teoremi: a kare, c çarpı p değerine eşittir, bu nedenle a, c çarpı p değerinin kareköküne eşittir.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Karekök oradadır, çünkü çarpma kareli bir nicelik üretir. Teorem, a dik kenarının c ile p çarpımına eşit olduğunu söylemez. a dik kenarının karesinin bu çarpıma eşit olduğunu söyler. Bir kareyi geri almak karekök gerektirir, tıpkı iki katına çıkarmayı geri almanın yarıya bölmeyi gerektirmesi gibi.",
            },
            {
              "kind": "p",
              "text": "[[c = 10]] ve [[p = 3.6]] değerlerini alın. Çarpımları 36 olur ve bu değer, dik kenarın karesi olan [[a^2]] değeridir. Dik kenarın kendisi, kendisiyle çarpıldığında 36 veren sayıdır, yani 6 olur. [[a = 36]] yazmak, hipotenüsü yalnızca 10 olan bir üçgende 36 birimlik bir kenar olduğunu iddia etmek olur ve bu açıkça imkansızdır.",
            },
            {
              "kind": "p",
              "text": "Aşağıdaki tablo bu üç niceliği birbirinden ayrı tutar, çünkü bunları karıştırmak bu formülle yapılan hataların çoğuna yol açar.",
            },
          ],
          "h2": "Formülde Neden Karekök Var?",
          "table": {
            "headers": [
              "Nicelik",
              "Anlamı",
              "c = 10, p = 3.6 ile örnek",
            ],
            "rows": [
              [
                "a",
                "Dik kenarın kendisi",
                "6",
              ],
              [
                "a kare",
                "Dik kenarın kendisiyle çarpımı",
                "36",
              ],
              [
                "c çarpı p",
                "Teoremin a kareye eşitlediği çarpım",
                "36",
              ],
              [
                "cp karekökü",
                "a kareden a değerini geri getiren adım",
                "6",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "On kısa adım, sizi etiketli bir şemadan kontrol edilmiş bir cevaba götürür.",
            },
            {
              "kind": "steps",
              "steps": [
                "Probleminizdeki dik üçgeni belirleyin ve bir dik açısı olduğunu doğrulayın.",
                "Dik açıdan çizilen yüksekliği bulun ve hipotenüsle kesiştiği yeri işaretleyin.",
                "Dik açının karşısındaki kenar olan tam hipotenüs c değerini belirleyin.",
                "a dik kenarının başladığı A köşesinin yanındaki hipotenüs parçası olan p izdüşümünü belirleyin.",
                "p değerinin c değerinden küçük olduğunu kontrol edin. Küçük değilse devam etmeden önce şemayı yeniden etiketleyin.",
                "c ve p farklı birimlerle verildiyse ikisini de aynı birime dönüştürün.",
                "c değerini Hipotenüs c alanına girin.",
                "p değerini P İzdüşümü alanına girin. Buraya q girmeyin, çünkü bu durumda b dik kenarı döndürülür.",
                "A Dik Kenarını Hesapla düğmesine tıklayın ve sonucu okuyun.",
                "Yeni bir probleme başlamadan önce Sıfırla düğmesini kullanın.",
              ],
            },
            {
              "kind": "p",
              "text": "Hesaplayıcı q değerini kabul etmez, bu nedenle yalnızca q verilen bir problem bir ek çıkarma adımı gerektirir ve bu adım aşağıda ele alınır. p alanına q girmek yine de bir sayı üretir, ancak bu yanlış dik kenar olur, bu nedenle 4. adımdaki etiket kontrolü en önemlisidir.",
            },
          ],
          "h2": "Dik Üçgende A Dik Kenarı Hesaplayıcı Nasıl Kullanılır?",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "[[c = 10]] cm ve [[p = 3.6]] cm değerlerini kullanın. Aşağıdaki dört adım, hiçbir şey atlanmadan tam çözümü gösterir.",
            },
            {
              "kind": "steps",
              "steps": [
                "Formülü yazın: a = sqrt(cp).",
                "Değerleri yerine koyun: a = sqrt(10 x 3.6).",
                "Kök içinde çarpın: a = sqrt(36).",
                "Karekökü alın: a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "6 cm cevabı, gerçek dik kenar AC uzunluğudur; bir izdüşüm ya da bir alan değildir. Kısa bir doğrulama döngüyü kapatır: [[a^2 = 6^2 = 36]] ve [[c \\times p = 10 \\times 3.6 = 36]] olur, bu nedenle teoremin iki tarafı da aynı sonucu verir.",
            },
            {
              "kind": "p",
              "text": "Bilgi olarak, diğer izdüşüm [[q = 10 - 3.6 = 6.4]] cm, b dik kenarı [[b = \\sqrt{10 \\times 6.4} = 8]] cm ve yükseklik [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm olur; bu da tanıdık 6-8-10 dik üçgenini doğrular.",
            },
          ],
          "h2": "A Dik Kenarını Bulmanın Adım Adım Örneği",
          "image": {
            "alt": "Hipotenüsü 10 cm ve izdüşümü 3.6 cm olan dik üçgen; çözüm a dik kenarını 6 cm olarak veriyor",
            "caption": "Çözümlü örnek: c = 10 cm ve p = 3.6 cm, a = sqrt(36) = 6 cm sonucunu verir.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ana şema, dik açısı C köşesinde olan ABC üçgenini gösterir. AC kenarı a dik kenarı, BC kenarı b dik kenarı ve AB kenarı hipotenüs c değeridir. CD yüksekliği C köşesinden AB üzerine dik olarak iner ve AB ile D noktasında kesişir; D noktasındaki dik açı işareti, CD değerinin gerçekten dik olduğunu doğrular.",
            },
            {
              "kind": "p",
              "text": "D noktası hipotenüsü iki parçaya böler: AD parçası p izdüşümü, DB parçası ise q izdüşümüdür. a dik kenarı ve p izdüşümü vurgulanmıştır, çünkü bu sayfanın konusu olan çift bunlardır. Etiketleri pekiştirmek için şemayı şu sırayla izleyin: A noktasından başlayın, a dik kenarı boyunca C noktasına gidin, ardından b dik kenarı boyunca B noktasına gidin, sonra hipotenüs boyunca B noktasından A noktasına geri dönün ve q ile p bölünmesini görmek için D noktasında durun.",
            },
            {
              "kind": "p",
              "text": "a ile p eşleşmesi, a dik kenarının hipotenüs ve p değerinin büyük hipotenüs boyunca uzanan kenar olduğu küçük ACD üçgeninde görünür hale gelir. ACD üçgeni ABC üçgenine benzer olduğu için küçük üçgendeki p ile a oranı, büyük üçgendeki a ile c oranına eşittir ve ispat bölümü bu oranı [[a^2 = cp]] bağıntısına dönüştürür.",
            },
          ],
          "h2": "Dik Üçgende İzdüşümden A Dik Kenarı Şeması Açıklaması",
          "image": {
            "alt": "Dik açısı C köşesinde olan ABC dik üçgeni; AB hipotenüsüne CD yüksekliği çizilmiş, a dik kenarı ve p izdüşümü vurgulanmış; a ve b dik kenarları, c hipotenüsü, p ve q izdüşümleri ve h yüksekliği etiketlenmiş",
            "caption": "Ana ABC üçgeni: CD yüksekliği AB hipotenüsünü p izdüşümüne (AD) ve q izdüşümüne (DB) böler ve a dik kenarı (AC) vurgulanmıştır.",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "İspat, benzer üçgenlere dayanır. CD yüksekliğini çizmek ABC üçgenini iki küçük dik üçgene, ACD ve CBD üçgenlerine böler ve her ikisi de özgün üçgene benzerdir. Benzerlik, karşılıklı kenarların aynı oranda kalması anlamına gelir ve bu oranlardan biri izdüşüm teoremini doğrudan verir.",
            },
            {
              "kind": "p",
              "text": "ACD üçgenine ve bütün ABC üçgenine odaklanın. Her ikisi de A köşesindeki açıyı içerir ve her ikisi de bir dik açı içerir, bu nedenle üçüncü açıları da eşleşmek zorundadır. Aynı konumlarda yer alan kenarları eşleştirmek şu orantıyı verir:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Şimdi standart sembolleri yerine koyun: [[AD = p]], [[AC = a]] ve [[AB = c]]. Orantı şu biçimi alır:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "İçler dışlar çarpımı kesirleri ortadan kaldırır. Sol pay ile sağ paydanın çarpımı, sağ pay ile sol paydanın çarpımına eşittir, bu nedenle [[p \\times c = a \\times a]] olur ve bu da şudur:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Her iki tarafın pozitif karekökünü almak ispatı tamamlar ve [[a = \\sqrt{c \\times p}]] sonucunu verir. Aynı gerekçe diğer küçük üçgen olan CBD üçgenine uygulandığında [[b^2 = c \\times q]] elde edilir. Benzerlik tüm işi yapar: benzer üçgenlerin eşleşen kenarları orantılı kalır.",
            },
          ],
          "h2": "İzdüşüm Teoremi Neden Geçerlidir?",
          "image": {
            "alt": "Özgün ABC dik üçgeninin yanında, p bölü a değerinin a bölü c değerine eşit olduğunu gösteren daha küçük benzer ACD ve CBD üçgenleri",
            "caption": "Benzer üçgenler ispatı: p bölü a, a bölü c değerine eşittir, bu nedenle içler dışlar çarpımı a karenin c çarpı p değerine eşit olduğunu verir.",
            "src": "leg-a-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Her örnek verilen değerleri, yerine koyma işlemini ve son cevabı belirtir. Yorumlar kısa tutulur, böylece işlem görünür kalır ve her örnek birimlerini baştan sona tutarlı kullanır.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: Temel Tam Sayılar",
            },
            {
              "kind": "p",
              "text": "[[c = 10]] cm ve [[p = 4]] cm verildiğinde formül [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]] sonucunu verir, bu nedenle [[a \\approx 6.325]] cm olur. 40 çarpımı tam kare değildir, bu nedenle cevap üç ondalık basamağa yuvarlanmış bir yaklaşık değer olarak kalır. 6.325 cm değerinin, olması gerektiği gibi 10 cm hipotenüsten kısa olduğuna dikkat edin.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: Tam Kare Sonuç",
            },
            {
              "kind": "p",
              "text": "[[c = 10]] cm ve [[p = 3.6]] cm verildiğinde [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm olur. Çarpım tam kare olduğunda cevap kesindir ve yuvarlama gerekmez. Bu, adım adım örnekteki üçgenin aynısıdır ve diğer dik kenarı 8 cm olur.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: Daha Büyük Üçgen",
            },
            {
              "kind": "p",
              "text": "[[c = 25]] m ve [[p = 9]] m verildiğinde [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m olur. Daha büyük sayılar yöntem hakkında hiçbir şeyi değiştirmez: önce çarpın, sonra kök alın. Buradaki diğer izdüşüm 16 m olur ve bu da 20 m uzunluğunda bir dik kenarla eşleşir; böylece klasik 15-20-25 üçgeni oluşur.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: Ondalıklı Ölçümler",
            },
            {
              "kind": "p",
              "text": "[[c = 12.5]] cm ve [[p = 3.2]] cm verildiğinde [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]] olur, bu nedenle [[a \\approx 6.325]] cm olur. Bu, her iki çarpım da 40 değerine eşit olduğu için Örnek 1 ile değer olarak aynıdır; bu, farklı girdilerin aynı çarpımı paylaşabileceğini gösteren yararlı bir hatırlatmadır. Son yuvarlama adımına kadar tam çarpımı kök içinde tutun.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: Eşit Hipotenüs İzdüşümleri",
            },
            {
              "kind": "p",
              "text": "[[c = 20]] cm ve [[p = 10]] cm verildiğinde [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm olur, bu nedenle [[a \\approx 14.142]] cm olur. Eşit izdüşümler, yüksekliğin hipotenüsün orta noktasına çarptığı anlamına gelir ve bu tam olarak iki dik kenar eşit olduğunda olur. Bu nedenle üçgen ikizkenar dik üçgendir ve b dik kenarı a dik kenarına eşittir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: Küçük Ölçümler",
            },
            {
              "kind": "p",
              "text": "[[c = 8]] mm ve [[p = 2]] mm verildiğinde [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm olur. Küçük birimler büyük birimlerle tamamen aynı şekilde çalışır ve cevap, her iki girdi de milimetre olduğu için milimetre olarak kalır. Bir problemi küçültmek adımları hiçbir zaman değiştirmez.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: Farklı Birimler",
            },
            {
              "kind": "p",
              "text": "[[c = 0.5]] m ve [[p = 20]] cm verildiğinde önce dönüştürün: 0.5 m, 50 cm değerine eşittir. Ardından [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]] olur, bu nedenle [[a \\approx 31.623]] cm olur. Dönüştürmeden 0.5 ile 20 değerini çarpmak, arkasında geçerli bir birim olmayan yanlış bir 10 kök cevabı verirdi.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: Kesirli Ölçümler",
            },
            {
              "kind": "p",
              "text": "[[c = 16]] ft ve [[p = 4]] ft verildiğinde [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft olur. 64 çarpımı tam karedir, bu nedenle cevap kesindir. Hızlı bir sağduyu kontrolü geçer: 8 ft, hipotenüsün yarısıdır ve diğer dik kenar yaklaşık 13.856 ft olur; bu değer a değerinden uzundur ama yine de 16 ft değerinden kısadır.",
            },
          ],
          "h2": "İzdüşümden A Dik Kenarını Bulmanın Çözümlü Örnekleri",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bazı problemler p yerine q değerini verir. Bu sayfadaki hesaplayıcı q değerini kabul etmez, ancak bu yalnızca tek adımlık bir sapmadır, çıkmaz değildir. İki izdüşümün toplamı hipotenüse eşit olduğu için önce çıkarma işlemiyle p değerini bulun:",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "[[c = 25]] cm ve [[q = 16]] cm değerlerini alın. Çıkarma işlemi [[p = 25 - 16 = 9]] cm sonucunu verir. Şimdi sıradan formül uygulanır: [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. 16 değerini doğrudan p olarak girseydiniz hesaplayıcı 20 cm döndürürdü ve bu, a dik kenarı değil, b dik kenarı olurdu.",
            },
            {
              "kind": "p",
              "text": "q değerinin kendisinin bulunması gerektiğinde <a href=\"/right-triangle-projection-q-calculator/\">q izdüşümü hesaplayıcı</a> yardımcı olabilir ve <a href=\"/right-triangle-projection-p-calculator/\">p izdüşümü hesaplayıcı</a> ters adımı kapsar. Her durumda kural aynı kalır: önce p değerini bulun, sonra [[a = \\sqrt{c \\times p}]] formülünü kullanın.",
            },
          ],
          "h2": "Diğer İzdüşüm Bilindiğinde A Dik Kenarı Nasıl Bulunur?",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bir teorem üç niceliği birbirine bağlar, bu nedenle teoremi düzenlemek eksik olan niceliği bulur. Üç biçim şunlardır:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Aşağıdaki tablo her düzenlemeyi, bulduğu niceliği ve önceden bilinmesi gerekenleri gösterir.",
            },
          ],
          "h2": "A Dik Kenarı, Hipotenüs ve P İzdüşümü Arasındaki İlişki",
          "table": {
            "headers": [
              "Eksik Nicelik",
              "Formül",
              "Bilinen Değerler",
            ],
            "rows": [
              [
                "A dik kenarı",
                "a = sqrt(cp)",
                "Hipotenüs c ve p izdüşümü",
              ],
              [
                "Hipotenüs c",
                "c = a kare / p",
                "A dik kenarı ve p izdüşümü",
              ],
              [
                "P izdüşümü",
                "p = a kare / c",
                "A dik kenarı ve hipotenüs c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "b dik kenarı, a dik kenarı formülünün simetrik karşılığını izler. a dik kenarı p izdüşümüyle eşleşirken b dik kenarı q izdüşümüyle eşleşir:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Her iki dik kenarı birlikte görmek için tutarlı bir üçgen kullanın: [[c = 25]], [[p = 9]] ve [[q = 16]]. Bu durumda [[a = \\sqrt{25 \\times 9} = 15]] ve [[b = \\sqrt{25 \\times 16} = 20]] olur. İki dik kenar aynı hipotenüsü paylaşır ama farklı izdüşümlerden yararlanır; bu nedenle p ve q değerlerini doğru belirlemek hangi dik kenarı elde edeceğinizi belirler.",
            },
            {
              "kind": "p",
              "text": "Dik kenarlar, iki bölüm aşağıda ele alınan Pisagor teoremi aracılığıyla birbirlerini de sınırlar: bir dik kenarı ve hipotenüsü bilmek diğerini belirler. p yerine q değerinden başlayan problemler için <a href=\"/right-triangle-leg-b-from-projection-calculator/\">izdüşümden b dik kenarı hesaplayıcı</a>, diğer eşleşmeyle aynı yöntemi uygular.",
            },
          ],
          "h2": "A Dik Kenarı ile B Dik Kenarı Arasındaki İlişki",
          "image": {
            "alt": "p izdüşümüyle eşleşen a dik kenarı ile q izdüşümüyle eşleşen b dik kenarını karşılaştıran dik üçgen; c eşittir 25, p eşittir 9 ve q eşittir 16",
            "caption": "Doğru eşleşme: a, p değerini kullanır (sqrt(25 x 9) = 15) ve b, q değerini kullanır (sqrt(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "İzdüşüm teoremi ile Pisagor teoremi tam olarak uyuşur ve cebir bunun nedenini gösterir. İki izdüşüm formülünden başlayın:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "b dik kenarı için eşleşen formül olan [[b^2 = c \\times q]] formülünü ekleyerek şunu elde edin:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Sağ taraftan c çarpanını ayırmak [[a^2 + b^2 = c(p + q)]] sonucunu verir. [[p + q = c]] olduğu için yerine koymak tanıdık sonucu verir:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "9-16-25 üçgeniyle yapılan sayısal kontrol bunu doğrular: [[a^2 + b^2 = 225 + 400 = 625]] ve [[c^2 = 25^2 = 625]] olur. İki teorem rakip değildir. İzdüşüm teoremi, Pisagor bağıntısını her dik kenar için bir parçaya böler ve parçaları toplamak onu yeniden oluşturur.",
            },
          ],
          "h2": "P İzdüşümü ile Pisagor Teoremi Arasındaki İlişki",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Üç bağımsız kontrol, hataların neredeyse tamamını yakalar. Her cevapta en az birini uygulayın ve problem önemliyse üçünü de uygulayın.",
            },
            {
              "kind": "h3",
              "text": "Yöntem 1: İzdüşüm Teoremi Kontrolü",
            },
            {
              "kind": "p",
              "text": "Cevabınızın karesini alın ve c ile p çarpımıyla karşılaştırın. [[c = 25]], [[p = 9]] ve [[a = 15]] için: [[a^2 = 225]] ve [[c \\times p = 225]] olur, bu nedenle cevap geçer. İki sayı farklıysa girdiler ya da karekök adımı yanlış gitmiştir.",
            },
            {
              "kind": "h3",
              "text": "Yöntem 2: Pisagor Teoremi Kontrolü",
            },
            {
              "kind": "p",
              "text": "q değerinden b dik kenarını bulun, ardından [[a^2 + b^2 = c^2]] eşitliğini kontrol edin. [[p = 9]], [[q = 16]] ve [[c = 25]] ile: [[a = 15]], [[b = 20]] ve [[225 + 400 = 625 = 25^2]] olur. Bu kontrol hesaplayıcının ötesine geçer, çünkü yalnızca tek formülü değil, bütün üçgeni sınar.",
            },
            {
              "kind": "h3",
              "text": "Yöntem 3: Büyüklük ve Toplama Kontrolleri",
            },
            {
              "kind": "p",
              "text": "p değerinin c değerinden küçük olduğunu, q biliniyorsa [[p + q = c]] olduğunu ve a dik kenarının hipotenüsten kısa olduğunu doğrulayın. Örnekte 9, 25 değerinden küçüktür, [[9 + 16 = 25]] olur ve 15, 25 değerinden kısadır. Buradaki herhangi bir başarısızlık, işlem hatasına değil, etiketleme hatasına işaret eder.",
            },
          ],
          "h2": "Hesaplanan A Dik Kenarı Nasıl Doğrulanır?",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sekiz özellik doğrudan [[a = \\sqrt{c \\times p}]] formülünden ve arkasındaki geometriden çıkar. Her biri yeni bir cevap için sağduyu kontrolü olarak da işe yarar.",
            },
            {
              "items": [
                "a dik kenarı, bozulmamış bir dik üçgende her zaman hipotenüsten kısadır, çünkü p, c değerinin yalnızca bir parçasıdır.",
                "p izdüşümü her zaman c değerinden küçüktür ve her zaman pozitiftir. Sıfır ya da negatif izdüşümler gerçek bir üçgen tanımlamaz.",
                "c sabit tutulurken p artırılırsa a artar, çünkü kök içindeki çarpım büyür.",
                "p sabit tutulurken c artırılırsa a matematiksel olarak artar, ancak yeni değerlerin p değeri c değerinden küçük olacak şekilde gerçek bir üçgen tanımlaması gerekir.",
                "p ile q yer değiştirmek hesaplanan dik kenarı değiştirir: p, a dik kenarını ve q, b dik kenarını verir.",
                "Eşit izdüşümler eşit dik kenarlar üretir. c = 20 ve p = q = 10 ile her iki dik kenar da 2 sayısının karekökünün 10 katına, yani yaklaşık 14.142 değerine eşittir.",
                "Sonuç bir alan değil, bir uzunluktur. Kareli çarpım yalnızca bir ara adımdır ve karekök sıradan uzunluk birimlerini geri getirir.",
                "Tüm ölçümleri aynı çarpanla ölçeklemek a dik kenarını da aynı çarpanla ölçekler. c ve p değerlerini iki katına çıkarmak a değerini iki katına çıkarır, çünkü çarpım dört katına çıkar ve kökü iki katına çıkar.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Yükseklik tam olarak hipotenüsün orta noktasına indiğinde üçgen ikizkenardır ve iki dik kenar eşleşmek zorundadır; bunu aşağıdaki şema gösterir.",
            },
          ],
          "h2": "İzdüşümden Elde Edilen A Dik Kenarının Önemli Özellikleri",
          "image": {
            "alt": "Hipotenüsü 20, eşit p ve q izdüşümleri 10 olan ikizkenar dik üçgen; a ve b dik kenarlarının her biri 10 kök 2 değerine eşit",
            "caption": "Eşit izdüşümler: c = 20 ve p = q = 10 ile a = b = 10 kök 2, yani yaklaşık 14.142 olur.",
            "src": "leg-a-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Aşağıdaki her hatanın ardından düzeltmesi gelir. Bunların çoğu işlemden değil, etiketlemeden kaynaklanır.",
            },
            {
              "kind": "steps",
              "steps": [
                "Karekökü unutmak: cp değerini cevap olarak yazmak. c = 10 ve p = 3.6 ile cevap 36 değil, 6 cm olur.",
                "a ile a kareyi karıştırmak: bu örnekte 36, a kare değeridir; 6 ise dik kenardır. Bir sayı yazmadan önce hangisini kastettiğinizi söyleyin.",
                "p yerine q izdüşümünü kullanmak: q girmek b dik kenarını döndürür. c = 25 ve q = 16 ile 20 sonucu b dik kenarıdır, a dik kenarı değildir.",
                "Hipotenüs alanına bir dik kenar girmek: hipotenüs, dik açının karşısındaki ve en uzun kenardır. c olarak girilen bir dik kenar sonraki her adımı bozar.",
                "Hipotenüsü bir izdüşümle karıştırmak: c tam kenardır, p ise yalnızca onun bir parçasıdır. Hesaplamadan önce p değerinin c değerinden küçük olduğunu kontrol edin.",
                "p değerini c değerine eşit ya da ondan büyük kullanmak: böyle bir üçgen yoktur, çünkü p, c değerinin bir parçasıdır. Bu durum olursa şema etiketlerini yeniden kontrol edin.",
                "Santimetre ile metreyi karıştırmak: önce dönüştürün; Örnek 7 de olduğu gibi 0.5 m, 20 cm ile çarpılmadan önce 50 cm olmuştur.",
                "Negatif ölçümler kullanmak: uzunluklar pozitiftir, bu nedenle negatif bir girdi, negatif bir dik kenar değil, bir veri hatası anlamına gelir.",
                "Formülü dik olmayan bir üçgene uygulamak: izdüşüm teoremi, dik açıdan çizilen yüksekliği gerektirir. Dik açı olmadan bu anlamda bir p izdüşümü yoktur.",
                "Çok erken yuvarlamak: kök almadan önce çarpımı yuvarlamak cevabı kaydırır. Son adıma kadar tam kesinliği koruyun.",
                "Şemada yanlış kenar eşleşmesi kullanmak: p değerini b ile ya da q değerini a ile eşleştirmek dik kenarları yer değiştirir. p değerini A köşesine dokunan dik kenarla eşleştirin.",
                "Yüksekliği bir izdüşüm olarak görmek: h yüksekliği hipotenüse diktir, onun bir parçası değildir, bu nedenle hiçbir zaman p alanına ait değildir.",
              ],
            },
            {
              "kind": "p",
              "text": "Bir cevap yanlış görünüyorsa durun ve yeniden hesaplamadan önce şemayı yeniden etiketleyin. Yukarıdaki hataların çoğu, p ve q değerleri hipotenüs üzerinde açıkça işaretlenip geri kalan her şey bir kenara bırakıldığında ortadan kalkar.",
            },
          ],
          "h2": "İzdüşümden A Dik Kenarını Bulurken Yapılan Yaygın Hatalar",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "En doğrudan kullanım, geometri ödevleri ve sınıf çalışmalarıdır; burada izdüşüm problemleri, öğrencilerin bir şemayı etiketleyip alışkanlıkla Pisagor teoremine uzanmak yerine [[a^2 = c \\times p]] formülünü uygulayabilmelerini sınar. Benzer üçgen alıştırmaları aynı kurulumu kullanır, çünkü ispatın kendisi karşılıklı kenarları eşleştirme alıştırmasıdır.",
            },
            {
              "kind": "p",
              "text": "Teknik çizim, bir dik üçgenin kısmi ölçümlerden yeniden kurulması gerektiğinde bu teoremi kullanır: bir çizim hipotenüsü ve yüksekliğin ayağını veriyorsa eksik dik kenar, şekli yeniden ölçmeden bulunur. Öğretmenler ayrıca bu kurulumu, parça toplama ile benzerlik arasında bir köprü dersi olarak kullanır.",
            },
            {
              "kind": "p",
              "text": "Bir koşul her uygulamayı sınırlar: gerekli dik üçgen geometrisinin gerçekten var olması gerekir. Teorem, yaklaşık arazi ölçümlerini değil, kesin geometrik ilişkileri tanımlar, bu nedenle hiçbir zaman dikkatli ölçümün ya da profesyonel mühendislik ölçümünün yerini almaz. Ancak kendi uygun bağlamında, tek bir çarpma ve bir karekök ile iki bilinen uzunluğu üçüncü bir uzunluğa dönüştürür.",
            },
          ],
          "h2": "İzdüşüm Teoreminin Pratik Uygulamaları",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cevapları okumadan önce altı problemi de kağıt üzerinde deneyin. Değerlerin hiçbiri çözümlü örnekleri tekrar etmez ve son problem bu rehberdeki birkaç fikri birleştirir.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: Temel Tam Sayılar",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin hipotenüsü [[c = 36]] cm ve izdüşümü [[p = 4]] cm olur. a dik kenarını bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Ondalıklı İzdüşüm",
            },
            {
              "kind": "p",
              "text": "[[c = 26]] cm ve [[p = 6.5]] cm verildiğinde a dik kenarını bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Büyük Hipotenüs",
            },
            {
              "kind": "p",
              "text": "[[c = 100]] cm ve [[p = 64]] cm verildiğinde a dik kenarını bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 4: Birim Dönüşümü",
            },
            {
              "kind": "p",
              "text": "Bir hipotenüs [[c = 1.2]] m ölçülür ve p izdüşümü 30 cm ölçülür. a dik kenarını santimetre cinsinden bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Önce q ve c Değerlerinden p Değerini Bulma",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin hipotenüsü [[c = 65]] cm ve izdüşümü [[q = 49]] cm olur. a dik kenarını bulun.",
            },
            {
              "kind": "h3",
              "text": "Problem 6: b Dik Kenarı ve Pisagor ile Çok Adımlı Problem",
            },
            {
              "kind": "p",
              "text": "[[c = 50]] cm ve [[p = 18]] cm verildiğinde a dik kenarını bulun, ardından b dik kenarını bulun ve sonucu Pisagor teoremiyle kontrol edin.",
            },
            {
              "kind": "h3",
              "text": "Alıştırma Problemlerinin Cevapları",
            },
            {
              "kind": "p",
              "text": "Cevap 1: [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 2: [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 3: [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Cevap 4: 1.2 m değerini 120 cm değerine dönüştürün, ardından [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm olur.",
            },
            {
              "kind": "p",
              "text": "Cevap 5: Önce [[p = 65 - 49 = 16]] cm olur, ardından [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm olur.",
            },
            {
              "kind": "p",
              "text": "Cevap 6: [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Diğer izdüşüm [[q = 50 - 18 = 32]] cm olur, bu nedenle [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm olur. Kontrol: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Cevaplı Alıştırma Problemleri",
        },
      },
      "tocHeading": "Rehber İçeriği",
      "tocItems": {
        "sec-intro": "Dik Üçgende İzdüşümden A Dik Kenarı Hesaplayıcı",
        "sec-calculate": "Dik Üçgende İzdüşümden A Dik Kenarını Hesaplama",
        "sec-what-leg-a": "Dik Üçgende A Dik Kenarı Nedir?",
        "sec-what-projection-p": "Dik Üçgende P İzdüşümü Nedir?",
        "sec-formula": "Dik Üçgende İzdüşümden A Dik Kenarı Formülü",
        "sec-why-sqrt": "Formülde Neden Karekök Var?",
        "sec-how": "Dik Üçgende A Dik Kenarı Hesaplayıcı Nasıl Kullanılır?",
        "sec-step-example": "A Dik Kenarını Bulmanın Adım Adım Örneği",
        "sec-diagram": "Dik Üçgende İzdüşümden A Dik Kenarı Şeması Açıklaması",
        "sec-proof": "İzdüşüm Teoremi Neden Geçerlidir?",
        "sec-examples": "İzdüşümden A Dik Kenarını Bulmanın Çözümlü Örnekleri",
        "sec-other-projection": "Diğer İzdüşüm Bilindiğinde A Dik Kenarı Nasıl Bulunur?",
        "sec-relationship": "A Dik Kenarı, Hipotenüs ve P İzdüşümü Arasındaki İlişki",
        "sec-leg-b": "A Dik Kenarı ile B Dik Kenarı Arasındaki İlişki",
        "sec-pythagoras": "P İzdüşümü ile Pisagor Teoremi Arasındaki İlişki",
        "sec-verify": "Hesaplanan A Dik Kenarı Nasıl Doğrulanır?",
        "sec-properties": "İzdüşümden Elde Edilen A Dik Kenarının Önemli Özellikleri",
        "sec-mistakes": "İzdüşümden A Dik Kenarını Bulurken Yapılan Yaygın Hatalar",
        "sec-applications": "İzdüşüm Teoreminin Pratik Uygulamaları",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları Keşfedin",
        "sec-faq": "Sıkça Sorulan Sorular",
      },
    },
};
