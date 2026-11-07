// pythagoreanTriplesGuideTranslations.btr.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B6_TR = {
  "tr": {
      "meta": {
        "title": "Pisagor Üçlüleri Hesaplayıcı - Üçlüleri Kontrol Edin ve Oluşturun",
        "description": "Üç tam sayının bir Pisagor üçlüsü oluşturup oluşturmadığını kontrol edin ve Öklid formülüyle üçlüler oluşturun. İlkel üçlüler, ölçeklendirme ve çözümlü örnekler hakkında bilgi edinin.",
        "primaryKeyword": "Pisagor Üçlüleri Hesaplayıcı",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Bölüm Gezintisi",
      "tocItems": {
        "sec-intro": "Pisagor Üçlüleri Hesaplayıcı",
        "sec-calculate": "Hesaplayıcıyla Pisagor Üçlülerini Kontrol Edin veya Oluşturun",
        "sec-what": "Pisagor Üçlüsü Nedir?",
        "sec-pythagorean": "Pisagor Teoremini Anlamak",
        "sec-check": "Üç Sayının Pisagor Üçlüsü Oluşturup Oluşturmadığı Nasıl Kontrol Edilir",
        "sec-euclid": "Öklid Formülüyle Pisagor Üçlüleri Nasıl Oluşturulur",
        "sec-proof": "Öklid Formülünün Matematiksel İspatı",
        "sec-primitive": "İlkel Pisagor Üçlüsü Nedir?",
        "sec-nonprimitive": "İlkel Olmayan Pisagor Üçlüsü Nedir?",
        "sec-conditions": "İlkel Pisagor Üçlüleri Oluşturma Koşulları",
        "sec-difference": "İlkel ve İlkel Olmayan Üçlüler Arasındaki Fark",
        "sec-scaling": "Mevcut Üçlüleri Ölçeklendirerek Daha Fazla Üçlü Nasıl Oluşturulur",
        "sec-examples": "Yaygın Pisagor Üçlüsü Örnekleri",
        "sec-worked": "Hesaplayıcıyla Adım Adım Çözümlü Örnekler",
        "sec-infinite": "Neden Sonsuz Sayıda Pisagor Üçlüsü Vardır?",
        "sec-recognize": "Tahmin Etmeden Pisagor Üçlüsü Nasıl Tanınır",
        "sec-ordinary": "Pisagor Üçlüleri ve Sıradan Dik Üçgenler",
        "sec-mistakes": "Pisagor Üçlüleri Hesaplayıcısını Kullanırken Yapılan Yaygın Hatalar",
        "sec-practice": "Cevaplı Alıştırma Problemleri",
        "sec-related": "İlgili Dik Üçgen Hesaplayıcıları",
        "sec-faq": "Sıkça Sorulan Sorular",
      },
      "sections": {
        "sec-intro": {
          "h2": "Pisagor Üçlüleri Hesaplayıcı",
          "blocks": [
            {
              "kind": "p",
              "text": "Tam sayı üçlülerini kontrol edin ve Öklid formülüyle yenilerini oluşturun.",
            },
            {
              "kind": "p",
              "text": "Pisagor üçlüsü, bir dik üçgenin kenarları olabilen üç pozitif tam sayıdan oluşan bir kümedir. İki kısa sayı dik kenarlardır, en büyük sayı hipotenüstür ve üç değer Pisagor teoremini sağlar.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Pisagor Üçlüleri Hesaplayıcı iki iş yapar. Kontrol modunda üç tam sayı girersiniz ve hesaplayıcı bunların geçerli bir üçlü oluşturup oluşturmadığını test eder. Oluşturma modunda iki tam sayı, [[m]] ve [[n]], girersiniz ve hesaplayıcı Öklid formülüyle yeni bir üçlü oluşturur. Kontrol etmek ve oluşturmak farklı görevlerdir ve bu sayfa her ikisini de adım adım açıklar.",
            },
            {
              "kind": "p",
              "text": "En bilinen örnek [[3]], [[4]] ve [[5]] sayılarıdır. Dik kenarların karelerini alıp toplamak [[3^2+4^2=9+16=25]] sonucunu verir ve bu da [[5^2]] değerine eşittir. İki taraf tam olarak eşit olduğundan [[(3, 4, 5)]] geçerli bir üçlüdür. İlkel üçlü, üç sayının [[1]] değerinden büyük ortak bir böleni olmadığı üçlüdür; [[3]], [[4]] ve [[5]] sayılarının ortak bir böleni yoktur, bu nedenle [[(3, 4, 5)]] ilkeldir. Aşağıdaki bölümler, herhangi üç sayının nasıl kontrol edileceğini, her boyutta üçlülerin nasıl oluşturulacağını ve ilkel üçlülerin ölçeklenmiş kopyalardan nasıl ayırt edileceğini gösterir.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Hesaplayıcıyla Pisagor Üçlülerini Kontrol Edin veya Oluşturun",
          "blocks": [
            {
              "kind": "p",
              "text": "İki mod, tek sayfa: bir sayı kümesini kontrol edin veya yeni bir üçlü oluşturun.",
            },
            {
              "kind": "h3",
              "text": "Mod 1: Pisagor Üçlüsü Kontrolü",
            },
            {
              "kind": "p",
              "text": "Üç kenar uzunluğunu [[a]], [[b]] ve [[c]] olarak girin; [[c]] en büyük değer olsun. Hesaplayıcı [[a]] ve [[b]] sayılarının karelerini alır, sonuçları toplar, [[c]] sayısının karesini alır ve denklemin iki tarafını karşılaştırır.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "İki taraf eşit olduğunda üç sayı geçerli bir Pisagor üçlüsü oluşturur ve sonuç bunu belirtir. Farklı olduklarında sayılar üçlü oluşturmaz ve sonuç, ne kadar fark olduğunu görebilmeniz için iki eşit olmayan toplamı gösterir. Üç girdinin de pozitif tam sayı olması ve üçünde de aynı birimin kullanılması gerekir.",
            },
            {
              "kind": "h3",
              "text": "Mod 2: Pisagor Üçlüleri Oluşturma",
            },
            {
              "kind": "p",
              "text": "[[m]] değerinin [[n]] değerinden büyük olduğu iki pozitif tam sayı, [[m]] ve [[n]], girin. Hesaplayıcı, üç tam sayı kenar uzunluğu üretmek için Öklid formülünü uygular.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "Sonuç her zaman geçerli bir üçlüdür, çünkü Öklid formülü Pisagor teoremini sağlayacak şekilde kurulmuştur. İki dik kenar her iki sırada da görünebilir, ancak [[c]] her zaman hipotenüstür. Hesaplayıcıyı kullanmak için bir mod seçin, geçerli sayılar girin, Hesapla düğmesine tıklayın ve sonucu adım adım çözümüyle birlikte okuyun. Alanları temizlemek ve yeniden başlamak için Sıfırla düğmesine tıklayın.",
            },
          ],
        },
        "sec-what": {
          "h2": "Pisagor Üçlüsü Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "Pisagor teoremine tam olarak uyan üç pozitif tam sayı.",
            },
            {
              "kind": "p",
              "text": "Pisagor üçlüsü, [[a^2+b^2=c^2]] denklemini sağlayan [[(a, b, c)]] biçiminde yazılan üç pozitif tam sayı kümesidir. Burada [[a]] ve [[b]] dik kenarlardır, yani dik açıda buluşan iki kenardır; [[c]] ise hipotenüstür, dik açının karşısındaki kenardır ve her zaman üçün en uzunudur.",
            },
            {
              "kind": "p",
              "text": "Denklem tam olarak sağlanmalıdır. Yakın bir sonuç üçlü sayılmaz: kareli dik kenarların toplamı kareli hipotenüsten bir birim bile farklıysa üç sayı testi geçemez. Bu katı eşitlik, üçlüyü inşaatta ve marangozlukta yararlı kılar; [[3]]-[[4]]-[[5]] kontrolü, ölçüm hatası olmadan kare bir köşe işaretler.",
            },
            {
              "kind": "p",
              "text": "Üç sayının da tam ve pozitif olması gerekir. Dik kenarları [[1.5]] ve [[2]], hipotenüsü [[2.5]] olan ondalıklı kenar uzunluklarına sahip bir dik üçgen Pisagor teoremini sağlar, ancak tanım tam sayılar gerektirdiğinden Pisagor üçlüsü değildir. Benzer şekilde, dik kenarları [[1]] ve [[1]], hipotenüsü [[\\sqrt{2}]] olan bir üçgen dik üçgendir, ancak üçlü değildir. Üçlü sözcüğü yalnızca pozitif tam sayı çözümleri için ayrılmıştır.",
            },
            {
              "kind": "p",
              "text": "[[(3, 4, 5)]] üçlüsü doğal ilk örnektir. Dik kenarları [[3]] ve [[4]], hipotenüsü [[5]] tir ve [[9+16=25]] denklemi doğrular. Dik kenarların sırası önemli değildir: [[(4, 3, 5)]] aynı üçgeni tanımlar. Önemli olan, iki küçük sayının dik kenarlar ve en büyük sayının hipotenüs olmasıdır.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Kenarları 3, 4 ve 5 olan kareler; alanları 9, 16 ve 25; 9 artı 16 eşittir 25",
            "caption": "Kenarları 3, 4 ve 5 olan karelerin alanları 9, 16 ve 25 tir. 9 + 16 = 25 olduğundan 3, 4 ve 5 sayıları bir Pisagor üçlüsü oluşturur.",
          },
        },
        "sec-pythagorean": {
          "h2": "Pisagor Teoremini Anlamak",
          "blocks": [
            {
              "kind": "p",
              "text": "Her üçlünün arkasındaki teorem: dik kenarların kareleri, hipotenüsün karesine eşittir.",
            },
            {
              "kind": "p",
              "text": "Pisagor teoremi, herhangi bir dik üçgende hipotenüsün karesinin diğer iki kenarın karelerinin toplamına eşit olduğunu belirtir. Dik kenarlar [[a]] ve [[b]], hipotenüs [[c]] olmak üzere teorem şu şekildedir.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Bunu görmenin açık bir yolu alanlardır. Üçgenin her kenarına bir kare çizin. [[a]] kenarı üzerindeki karenin alanı [[a^2]], [[b]] kenarı üzerindeki karenin alanı [[b^2]] ve hipotenüs üzerindeki karenin alanı [[c^2]] dir. Teorem, ilk iki alanın toplamının üçüncüye eşit olduğunu söyler. [[3]]-[[4]]-[[5]] üçgeninde karelerin alanları [[9]], [[16]] ve [[25]] tir ve [[9+16=25]] dengeyi doğrudan gösterir.",
            },
            {
              "kind": "p",
              "text": "Bu alan görünümü, [[3]]-[[4]]-[[5]] üçlüsünün neden geçerli bir dik üçgen olduğunu da açıklar. Kenar uzunlukları alan dengesini tam olarak sağlar, bu nedenle dik kenarlar arasındaki açı dik açı olmalıdır. Her Pisagor üçlüsü teoremi sağlar, çünkü üçlü bu denklemle tanımlanır. Tersi doğru değildir: pek çok dik üçgenin kenar uzunlukları tam sayı değildir, bu nedenle üçlü olmadan teoremi sağlarlar. Tam sayı üçlüleri yerine ondalıklı veya bilinmeyen kenarları olan bir üçgen için <a href=\"/pythagorean-theorem-calculator/\">Pisagor teoremi hesaplayıcı</a> kullanın.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "ABC dik üçgeni; a eşittir 3 ve b eşittir 4 dik kenarları, c eşittir 5 hipotenüsü, dik açı işareti ve a kare artı b kare eşittir c kare formülü",
            "caption": "ABC dik üçgeni; a = 3 ve b = 4 dik kenarları ve c = 5 hipotenüsü. Dik açı işareti C köşesindedir ve 3 ün karesi artı 4 ün karesi, 5 in karesine eşittir.",
          },
        },
        "sec-check": {
          "h2": "Üç Sayının Pisagor Üçlüsü Oluşturup Oluşturmadığı Nasıl Kontrol Edilir",
          "blocks": [
            {
              "kind": "p",
              "text": "Sekiz kısa adım, herhangi üç tam sayıyı açık bir evet veya hayır cevabına dönüştürür.",
            },
            {
              "kind": "steps",
              "steps": [
                "Üç değerin en büyüğünü belirleyin.",
                "En büyük değeri hipotenüs olan [[c]] değerine atayın.",
                "Diğer iki değeri dik kenarlar olan [[a]] ve [[b]] değerlerine atayın.",
                "[[a]] sayısının karesini alın.",
                "[[b]] sayısının karesini alın.",
                "İki kareyi toplayın.",
                "[[c]] sayısının karesini alın.",
                "İki sonucu karşılaştırın: eşitlik geçerli bir üçlü, eşitsizlik üçlü olmadığı anlamına gelir.",
              ],
            },
            {
              "kind": "p",
              "text": "İşte geçerli bir örnek. [[7]], [[24]] ve [[25]] sayılarını kontrol edin: en büyük değer [[25]] tir, yani hipotenüstür. Dik kenarların karelerini alıp toplayın.",
            },
            {
              "kind": "p",
              "text": "[[[7^2+24^2=25^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[49+576=625]]]",
            },
            {
              "kind": "p",
              "text": "[[625=625]] olduğundan iki taraf eşleşir, bu nedenle [[(7, 24, 25)]] geçerli bir Pisagor üçlüsüdür. Aynı zamanda ilkeldir, çünkü [[7]], [[24]] ve [[25]] sayılarının [[1]] değerinden büyük ortak bir böleni yoktur.",
            },
            {
              "kind": "p",
              "text": "Şimdi geçersiz bir örnek. [[4]], [[5]] ve [[6]] sayılarını kontrol edin: en büyük değer [[6]] dır, yani hipotenüstür.",
            },
            {
              "kind": "p",
              "text": "[[[4^2+5^2 \\neq 6^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[16+25=41]]]",
            },
            {
              "kind": "p",
              "text": "[[[6^2=36]]]",
            },
            {
              "kind": "p",
              "text": "[[41]] sayısı [[36]] sayısına eşit olmadığından bu değerler Pisagor üçlüsü oluşturmaz. Aynı sekiz adım, büyük veya küçük her pozitif tam sayı girdisi için geçerlidir, bu nedenle tam doğrulama hiçbir zaman hafızaya veya tahmine bağlı değildir.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "7, 24, 25 kontrolü için adım adım akış: dik kenarların kareleri 49 ve 576, toplam 625, hipotenüsün karesi 625 ve eşitlik doğrulandı",
            "caption": "7, 24, 25 sayılarını adım adım kontrol etme: 49 + 576 = 625 ve 25 in karesi = 625, yani iki taraf eşleşir ve üçlü geçerlidir.",
          },
        },
        "sec-euclid": {
          "h2": "Öklid Formülüyle Pisagor Üçlüleri Nasıl Oluşturulur",
          "blocks": [
            {
              "kind": "p",
              "text": "İki küçük tam sayı girer, tam bir üçlü çıkar: Öklid formülü budur.",
            },
            {
              "kind": "p",
              "text": "Öklid formülü, [[m]] değerinin [[n]] değerinden büyük olduğu iki pozitif tam sayıdan, [[m]] ve [[n]] den bir Pisagor üçlüsü oluşturur. [[m]] parametresi büyük tam sayı, [[n]] parametresi küçük tam sayıdır ve her ikisi de tam sayı olmalıdır. Üç formül iki dik kenarı ve hipotenüsü üretir.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[m>n>0]] koşulu önemlidir. [[m]] sayısı [[n]] sayısına eşitse ilk dik kenar sıfır olur ve bu bir üçgen kenarı değildir. [[m]] sayısı [[n]] sayısından küçükse ilk dik kenar negatif olur ve bu da imkânsızdır. [[m]] ve [[n]] ondalık değerleri de burada geçerli değildir, çünkü formül tam sayı kenarlar üreten tam sayı parametreler için tasarlanmıştır.",
            },
            {
              "kind": "p",
              "text": "[[m=2]] ve [[n=1]] değerlerini deneyin. İlk dik kenar [[a=2^2-1^2=4-1=3]], ikinci dik kenar [[b=2(2)(1)=4]] ve hipotenüs [[c=2^2+1^2=4+1=5]] tir. Sonuç [[(3, 4, 5)]] üçlüsüdür. Oluşturulan dik kenarların her iki sırada da görünebileceğine dikkat edin: formül daha büyük dik kenarı önce veya sonra verebilir, ancak [[c]] her zaman hipotenüstür. Bir sonraki bölüm, bu formüllerin neden her zaman Pisagor teoremini sağladığını ispatlar.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "m eşittir 3 ve n eşittir 2 değerleriyle 5, 12 ve 13 üreten Öklid formülü akış şeması",
            "caption": "m = 3 ve n = 2 ile Öklid formülü: m kare eksi n kare 5 tir, 2mn 12 dir ve m kare artı n kare 13 tür; bu da 5, 12, 13 üçlüsünü verir.",
          },
        },
        "sec-proof": {
          "h2": "Öklid Formülünün Matematiksel İspatı",
          "blocks": [
            {
              "kind": "p",
              "text": "Kısa bir cebir ispatı, Öklid formülünün neden asla başarısız olamayacağını gösterir.",
            },
            {
              "kind": "p",
              "text": "İki dik kenar formülüyle, [[a=m^2-n^2]] ve [[b=2mn]], başlayın ve [[c=m^2+n^2]] olduğunda [[a^2+b^2]] ifadesinin [[c^2]] değerine eşit olup olmadığını test edin. Formülleri Pisagor denkleminin sol tarafına yerleştirin.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Her iki kareyi de açın. İlk kare [[m^4-2m^2n^2+n^4]] ifadesine, ikincisi [[4m^2n^2]] ifadesine açılır; toplam şu ifade olur.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Ortadaki terimleri birleştirin: [[-2m^2n^2+4m^2n^2]] ifadesi [[+2m^2n^2]] dir. İfade artık gizlenmiş bir tam karedir.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Çarpanlarına ayırın. Sonuç, tam olarak [[c]] olan [[m^2+n^2]] ifadesinin karesidir.",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "[[c=m^2+n^2]] olduğundan sağ taraf [[c^2]] dir ve ispat tamamlanır.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Kilit adım, ortadaki terimlerin kısmen sadeleşmesidir: ilk kareden gelen [[-2m^2n^2]] ile ikinci kareden gelen [[+4m^2n^2]] terimi, tam kareyi tamamlamak için gereken [[+2m^2n^2]] terimini bırakır. Bu, [[m>n>0]] koşulunu sağlayan her [[m]] ve [[n]] tam sayısı için geçerli olduğundan her çift gerçek bir Pisagor üçlüsü üretir. İspat, ilkellik hakkında hiçbir şey söylemez: sonucun ilkel olup olmadığı aşağıdaki bölümlerdeki ek koşullara bağlıdır.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "İlkel Pisagor Üçlüsü Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "İlkel üçlü, en sade biçimindeki üçlüdür ve ortak böleni yoktur.",
            },
            {
              "kind": "p",
              "text": "İlkel Pisagor üçlüsü, üç kenar uzunluğunun [[1]] değerinden büyük ortak bir pozitif tam sayı böleni olmadığı üçlüdür. Sembollerle, üç kenarın en büyük ortak böleni [[1]] dir.",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "[[(3, 4, 5)]] üçlüsü ilkeldir, çünkü [[\\gcd(3,4,5)=1]] dir: [[1]] değerinden büyük hiçbir tam sayı üç sayıyı da bölmez. Aynı durum [[(5, 12, 13)]], [[(8, 15, 17)]] ve [[(7, 24, 25)]] için de geçerlidir. Bunların her biri, bölme yoluyla daha küçük bir tam sayı üçlüsüne indirgenemeyen temel üçlülerdir.",
            },
            {
              "kind": "p",
              "text": "İlkel olmak, üçlünün her anlamda olası en küçük üçlü olduğu anlamına gelmez. Yalnızca üç değerin [[1]] dışında ortak bir böleni olmadığı anlamına gelir. [[(20, 21, 29)]] gibi büyük bir ilkel üçlü hâlâ ilkeldir, çünkü [[20]], [[21]] ve [[29]] sayılarının ortak bir böleni yoktur. Aşağıdaki tablo, ilkel bir üçlünün ve ölçeklenmiş bir kopyasının bölenlerini karşılaştırır.",
            },
          ],
          "table": {
            "headers": [
              "Üçlü",
              "Ortak bölenler",
              "İlkel mi?",
            ],
            "rows": [
              [
                "[[(3, 4, 5)]]",
                "[[1]]",
                "Evet",
              ],
              [
                "[[(5, 12, 13)]]",
                "[[1]]",
                "Evet",
              ],
              [
                "[[(8, 15, 17)]]",
                "[[1]]",
                "Evet",
              ],
              [
                "[[(6, 8, 10)]]",
                "[[1, 2]]",
                "Hayır",
              ],
              [
                "[[(9, 12, 15)]]",
                "[[1, 3]]",
                "Hayır",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-primitive-vs-scaled.svg",
            "alt": "3-4-5 ve 6-8-10 iki dik üçgen; ikincisi birincinin iki katıdır ve yalnızca birincisi ilkeldir",
            "caption": "3-4-5 üçgeni ilkeldir, 6-8-10 ise her kenarda iki kat büyüktür: gcd(3, 4, 5) = 1, ancak gcd(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "İlkel Olmayan Pisagor Üçlüsü Nedir?",
          "blocks": [
            {
              "kind": "p",
              "text": "İlkel olmayan üçlü, ilkel bir üçlünün ölçeklenmiş kopyasıdır.",
            },
            {
              "kind": "p",
              "text": "İlkel olmayan Pisagor üçlüsü, üç değerin [[1]] değerinden büyük ortak bir tam sayı bölenini paylaştığı üçlüdür. [[a^2+b^2=c^2]] denklemini tam olarak sağladığından hâlâ geçerli bir üçlüdür. Yalnızca en sade biçimde değildir.",
            },
            {
              "kind": "p",
              "text": "İlkel [[(3, 4, 5)]] üçlüsüyle başlayın ve her kenarı [[2]] ile çarpın. Sonuç [[(6, 8, 10)]] olur ve kontrol hâlâ geçerlidir: [[36+64=100]]. Bunun yerine [[3]] ile çarpın ve sonuç [[(9, 12, 15)]] olur; [[81+144=225]] tir. Ölçeklenmiş üçlülerin her ikisi de geçerlidir ve hiçbiri ilkel değildir, çünkü birincisi [[2]] bölenini, ikincisi [[3]] bölenini paylaşır.",
            },
            {
              "kind": "p",
              "text": "Ortak böleni bulmak basittir: üç kenarın en büyük ortak bölenini alın. [[(6, 8, 10)]] için bu [[2]] dir; [[(9, 12, 15)]] için [[3]] tür. Her kenarı bu bölenle bölmek, alttaki ilkel üçlüyü geri verir. Yani [[(6, 8, 10)]] sayısını [[2]] ye bölmek [[(3, 4, 5)]] değerini, [[(9, 12, 15)]] sayısını [[3]] e bölmek de [[(3, 4, 5)]] değerini verir. Her ilkel olmayan üçlü bu yolla tam olarak bir ilkel üçlüye indirgenir.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "İlkel Pisagor Üçlüleri Oluşturma Koşulları",
          "blocks": [
            {
              "kind": "p",
              "text": "Öklid formülü, ancak her iki parametre koşulu da sağlandığında ilkel bir üçlü oluşturur.",
            },
            {
              "kind": "p",
              "text": "[[m]] ve [[n]] üzerindeki iki koşul, Öklid formülünün ilkel bir üçlü üretip üretmediğine karar verir. Her ikisi de aynı anda sağlanmalıdır ve tek başına hiçbiri yeterli değildir.",
            },
            {
              "kind": "h3",
              "text": "Koşul 1: Aralarında Asal Parametreler",
            },
            {
              "kind": "p",
              "text": "Parametreler aralarında asal olmalıdır, yani [[1]] değerinden büyük ortak bir bölenleri olmamalıdır.",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "[[m]] ve [[n]] bir bölen paylaştığında bu bölen, oluşturulan üç kenara da sızar. Örneğin, [[m=4]] ve [[n=2]] sayıları [[2]] bölenini paylaşır ve formül, kenarlarının tümü [[4]] bölenini paylaşan [[(12, 16, 20)]] üçlüsünü üretir. Sonuç ilkel değildir.",
            },
            {
              "kind": "h3",
              "text": "Koşul 2: Zıt Tek Çiftlik",
            },
            {
              "kind": "p",
              "text": "Bir parametre çift, diğeri tek olmalıdır. Her iki parametre de tek olduğunda oluşturulan dik kenarlar ve hipotenüs çift çıkar, bu nedenle üçlü [[2]] bölenini paylaşır ve ilkel olamaz. Örneğin, [[m=3]] ve [[n=1]] sayıları aralarında asaldır, ancak ikisi de tektir ve formül, dik kenarları farklı sırada olan ilkel olmayan [[(6, 8, 10)]] üçlüsü [[(8, 6, 10)]] değerini üretir.",
            },
            {
              "kind": "p",
              "text": "Üç parametre çifti, koşulların birlikte nasıl çalıştığını gösterir. [[(2, 1)]] çifti aralarında asaldır ve zıt tek çiftliğe sahiptir; ilkel [[(3, 4, 5)]] üçlüsünü verir. [[(3, 2)]] çifti aralarında asaldır ve zıt tek çiftliğe sahiptir; ilkel [[(5, 12, 13)]] üçlüsünü verir. [[(3, 1)]] çifti aralarında asaldır, ancak ikisi de tektir; bu nedenle ilkel olmayan [[(6, 8, 10)]] üçlüsünü verir. Zıt tek çiftlik olmadan aralarında asallık yeterli değildir ve aralarında asallık olmadan zıt tek çiftlik de yeterli değildir.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "İki parametre örneği: m eşittir 3 ve n eşittir 2 ilkel 5-12-13 verir; m eşittir 3 ve n eşittir 1 ilkel olmayan 6-8-10 verir",
            "caption": "m = 3, n = 2 parametreleri aralarında asaldır ve zıt tek çiftliğe sahiptir; ilkel 5-12-13 üçlüsünü verir. m = 3, n = 1 parametreleri ikisi de tektir ve ilkel olmayan 6-8-10 üçlüsünü verir.",
          },
        },
        "sec-difference": {
          "h2": "İlkel ve İlkel Olmayan Üçlüler Arasındaki Fark",
          "blocks": [
            {
              "kind": "p",
              "text": "Aynı teorem, farklı biçim: tek bir tablo tüm ayrımı özetler.",
            },
            {
              "kind": "p",
              "text": "Her iki üçlü türü de Pisagor teoremini tam olarak sağlar, bu nedenle her ikisi de gerçek dik üçgenleri tanımlar. Fark yalnızca ortak bölenler ve üçlünün nasıl üretildiğiyle ilgilidir. İlkel üçlü temel bir kalıptır; ilkel olmayan üçlü genellikle onun bir katıdır.",
            },
          ],
          "table": {
            "headers": [
              "Özellik",
              "İlkel",
              "İlkel olmayan",
            ],
            "rows": [
              [
                "Ortak bölen",
                "Yalnızca [[1]]",
                "[[1]] değerinden büyük",
              ],
              [
                "Kenar uzunlukları",
                "Daha küçük bir tam sayı üçlüsüne indirgenemez",
                "Ortak bir bölenle bölünebilir",
              ],
              [
                "Örnek",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Oluşturma",
                "Zıt tek çiftlikli aralarında asal [[m]], [[n]]",
                "Diğer parametre kombinasyonları veya tam sayı katları",
              ],
              [
                "İlişki",
                "Temel tam sayı üçlüsü",
                "Genellikle ilkel bir üçlünün katı",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "Mevcut Üçlüleri Ölçeklendirerek Daha Fazla Üçlü Nasıl Oluşturulur",
          "blocks": [
            {
              "kind": "p",
              "text": "Her kenarı aynı tam sayıyla çarpın; üçlü geçerli kalır.",
            },
            {
              "kind": "p",
              "text": "Herhangi bir pozitif tam sayı [[k]] için, bir Pisagor üçlüsü [[(a, b, c)]] nin her kenarını [[k]] ile çarpmak başka bir Pisagor üçlüsü olan [[(ka, kb, kc)]] değerini verir.",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "Nedeni basit bir cebirdir. Ölçeklenmiş dik kenarların kareleri [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]] sonucunu verir ve [[k^2]] parantezine almak [[k^2(a^2+b^2)]] sonucunu verir. Orijinal üçlü [[a^2+b^2=c^2]] koşulunu sağladığından ölçeklenmiş toplam [[k^2c^2]] değerine eşittir ve bu da [[(kc)^2]] dir. Ölçeklenmiş üçlü bu nedenle teoremi tam olarak sağlar.",
            },
            {
              "kind": "p",
              "text": "[[(3, 4, 5)]] üçlüsünü [[2]] ile ölçeklendirmek [[(6, 8, 10)]] sonucunu, [[3]] ile ölçeklendirmek [[(9, 12, 15)]] sonucunu verir. [[(5, 12, 13)]] üçlüsünü [[2]] ile ölçeklendirmek [[(10, 24, 26)]] sonucunu, [[(8, 15, 17)]] üçlüsünü [[3]] ile ölçeklendirmek [[(24, 45, 51)]] sonucunu verir. Her sonuç geçerli bir üçlüdür ve her biri ilkel değildir, çünkü çarpan üç kenarın da ortak böleni olur.",
            },
            {
              "kind": "p",
              "text": "Tam sayı çarpanı tam sayı kenar uzunluklarını korur; bu nedenle ölçeklendirme, yeni üçlüler oluşturmanın güvenilir bir yoludur. [[1.5]] gibi rastgele bir gerçel çarpan, üçgeni aynı şekle sahip bir dik üçgen olarak korur, ancak kenarlar tam sayı olmaktan çıkabilir: [[(3, 4, 5)]] üçlüsünü [[1.5]] ile ölçeklendirmek [[(4.5, 6, 7.5)]] sonucunu verir ve bu bir dik üçgendir, ancak Pisagor üçlüsü değildir. Hesaplayıcının kendisinde ayrı bir çarpan alanı olmadığını unutmayın; ölçeklendirme, hesaplayıcının kontrol ettiği veya oluşturduğu üçlülerle yaptığınız el ile bir hesaplamadır.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "3-4-5 üçlüsü 2, 3 ve 4 ile çarpılarak 6-8-10, 9-12-15 ve 12-16-20 elde edilir",
            "caption": "3-4-5 üçlüsünü 2, 3 ve 4 ile ölçeklendirmek 6-8-10, 9-12-15 ve 12-16-20 sonuçlarını verir. Ölçeklenmiş her küme hâlâ geçerli bir Pisagor üçlüsüdür.",
          },
        },
        "sec-examples": {
          "h2": "Yaygın Pisagor Üçlüsü Örnekleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Ezberlemeye değer on üçlü; her biri doğrulanmıştır.",
            },
            {
              "kind": "p",
              "text": "Aşağıdaki tablo on iyi bilinen Pisagor üçlüsünü listeler. Her satır Pisagor teoremine göre kontrol edilmiştir ve ölçeklenmiş katın belirtildiği yer dışında her satır ilkeldir. Her satırdaki dik kenarlar her iki sırada da listelenebilir: [[(4, 3, 5)]], [[(3, 4, 5)]] ile aynı üçgendir.",
            },
          ],
          "table": {
            "headers": [
              "Birinci dik kenar",
              "İkinci dik kenar",
              "Hipotenüs",
            ],
            "rows": [
              [
                "[[3]]",
                "[[4]]",
                "[[5]]",
              ],
              [
                "[[5]]",
                "[[12]]",
                "[[13]]",
              ],
              [
                "[[8]]",
                "[[15]]",
                "[[17]]",
              ],
              [
                "[[7]]",
                "[[24]]",
                "[[25]]",
              ],
              [
                "[[20]]",
                "[[21]]",
                "[[29]]",
              ],
              [
                "[[12]]",
                "[[35]]",
                "[[37]]",
              ],
              [
                "[[9]]",
                "[[40]]",
                "[[41]]",
              ],
              [
                "[[28]]",
                "[[45]]",
                "[[53]]",
              ],
              [
                "[[11]]",
                "[[60]]",
                "[[61]]",
              ],
              [
                "[[16]]",
                "[[63]]",
                "[[65]]",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-compare.svg",
            "alt": "Ölçekli çizilmiş üç dik üçgen: 3-4-5, 5-12-13 ve 8-15-17; farklı şekiller gösterir",
            "caption": "Ölçekli çizilmiş üç ilkel üçlü: 3-4-5, 5-12-13 ve 8-15-17. Her birinin farklı bir şekli ve farklı dar açıları vardır.",
          },
        },
        "sec-worked": {
          "h2": "Hesaplayıcıyla Adım Adım Çözümlü Örnekler",
          "blocks": [
            {
              "kind": "p",
              "text": "Her iki modu kapsayan sekiz örnek: dört kontrol ve dört oluşturma.",
            },
            {
              "kind": "h3",
              "text": "Örnek 1: 3, 4, 5 Kontrolü",
            },
            {
              "kind": "p",
              "text": "Kontrol modunda [[a=3]], [[b=4]] ve [[c=5]] girin. Dik kenarların karelerini alıp toplayın: [[3^2+4^2=9+16=25]]. Hipotenüsün karesini alın: [[5^2=25]]. [[25=25]] olduğundan sonuç geçerli bir üçlüdür. İlkeldir, çünkü [[3]], [[4]] ve [[5]] sayılarının ortak bir böleni yoktur.",
            },
            {
              "kind": "h3",
              "text": "Örnek 2: 5, 12, 13 Kontrolü",
            },
            {
              "kind": "p",
              "text": "[[a=5]], [[b=12]] ve [[c=13]] girin. Dik kenarlar [[5^2+12^2=25+144=169]] sonucunu, hipotenüs [[13^2=169]] sonucunu verir. [[169=169]] olduğundan sonuç geçerli bir üçlüdür. İlkeldir, çünkü [[\\gcd(5,12,13)=1]] dir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 3: 6, 8, 10 Kontrolü",
            },
            {
              "kind": "p",
              "text": "[[a=6]], [[b=8]] ve [[c=10]] girin. Dik kenarlar [[6^2+8^2=36+64=100]] sonucunu, hipotenüs [[10^2=100]] sonucunu verir. [[100=100]] olduğundan sonuç geçerli bir üçlüdür. İlkel değildir, çünkü üç kenar da [[2]] bölenini paylaşır; [[2]] ye bölmek ilkel [[(3, 4, 5)]] üçlüsünü verir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 4: 7, 24, 25 Kontrolü",
            },
            {
              "kind": "p",
              "text": "[[a=7]], [[b=24]] ve [[c=25]] girin. Dik kenarlar [[7^2+24^2=49+576=625]] sonucunu, hipotenüs [[25^2=625]] sonucunu verir. [[625=625]] olduğundan sonuç geçerli bir üçlüdür. İlkeldir, çünkü [[7]], [[24]] ve [[25]] sayılarının ortak bir böleni yoktur.",
            },
            {
              "kind": "h3",
              "text": "Örnek 5: m = 2, n = 1 ile Oluşturma",
            },
            {
              "kind": "p",
              "text": "Oluşturma modunda [[m=2]] ve [[n=1]] girin. İlk dik kenar [[a=2^2-1^2=3]], ikinci dik kenar [[b=2(2)(1)=4]] ve hipotenüs [[c=2^2+1^2=5]] tir. Sonuç [[(3, 4, 5)]] üçlüsüdür; ilkel bir üçlüdür.",
            },
            {
              "kind": "h3",
              "text": "Örnek 6: m = 3, n = 2 ile Oluşturma",
            },
            {
              "kind": "p",
              "text": "[[m=3]] ve [[n=2]] girin. İlk dik kenar [[a=3^2-2^2=9-4=5]], ikinci dik kenar [[b=2(3)(2)=12]] ve hipotenüs [[c=3^2+2^2=13]] tir. Sonuç [[(5, 12, 13)]] üçlüsüdür; ilkel bir üçlüdür, çünkü [[3]] ve [[2]] aralarında asaldır ve zıt tek çiftliğe sahiptir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 7: m = 4, n = 1 ile Oluşturma",
            },
            {
              "kind": "p",
              "text": "[[m=4]] ve [[n=1]] girin. Formüller [[a=4^2-1^2=15]], [[b=2(4)(1)=8]] ve [[c=4^2+1^2=17]] sonuçlarını verir. Dik kenarlar artan sırada listelendiğinde sonuç [[(8, 15, 17)]] olur. İlkeldir, çünkü [[4]] ve [[1]] aralarında asaldır ve zıt tek çiftliğe sahiptir.",
            },
            {
              "kind": "h3",
              "text": "Örnek 8: m = 3, n = 1 ile Oluşturma",
            },
            {
              "kind": "p",
              "text": "[[m=3]] ve [[n=1]] girin. Formüller [[a=3^2-1^2=8]], [[b=2(3)(1)=6]] ve [[c=3^2+1^2=10]] sonuçlarını verir. Dik kenarlar artan sırada listelendiğinde sonuç [[(6, 8, 10)]] olur. Bu üçlü ilkel değildir: [[3]] ve [[1]] aralarında asaldır, ancak ikisi de tektir, bu nedenle zıt tek çiftlik koşulu sağlanmaz ve her kenar çift çıkar. [[2]] ye bölmek ilkel [[(3, 4, 5)]] üçlüsünü verir.",
            },
          ],
        },
        "sec-infinite": {
          "h2": "Neden Sonsuz Sayıda Pisagor Üçlüsü Vardır?",
          "blocks": [
            {
              "kind": "p",
              "text": "Öklid formülünün girdileri asla tükenmez, bu nedenle üçlüleri de asla tükenmez.",
            },
            {
              "kind": "p",
              "text": "Öklid formülü, [[m]] değerinin [[n]] değerinden büyük olduğu her [[m]] ve [[n]] pozitif tam sayı çiftini kabul eder ve bu tür sonsuz sayıda çift vardır. Her yeni çift bir üçlü üretir ve farklı çiftler genellikle farklı üçlüler üretir. [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]] ve [[(5, 2)]] çiftleri sırasıyla [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]] ve [[(20, 21, 29)]] üçlülerini verir ve liste sürer: [[(5, 4)]] çifti [[(9, 40, 41)]] üçlüsünü, [[(6, 1)]] çifti [[(12, 35, 37)]] üçlüsünü verir. Daha büyük [[m]] değerleri sonu gelmeden daha büyük üçlüler üretmeye devam eder.",
            },
            {
              "kind": "p",
              "text": "Tam sayı katları daha da fazlasını ekler. Her ilkel üçlü, ölçeklenmiş kopyalardan oluşan tam bir aile üretir: yalnızca [[(3, 4, 5)]] üçlüsü [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]] ve benzerlerini sonsuza dek verir. Sonsuz parametre çiftleri ile sonsuz katlar arasında Pisagor üçlülerinin sayısı sonsuzdur. Dikkatli ifadeye dikkat edin: her parametre çifti ilkel bir üçlü üretmez, ancak her çift geçerli bir üçlü üretir ve ilkel üçlüler de sonsuzdur.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "Tahmin Etmeden Pisagor Üçlüsü Nasıl Tanınır",
          "blocks": [
            {
              "kind": "p",
              "text": "Birkaç alışkanlık, tanıdık üçlülerin hesaplamadan önce göze çarpmasını sağlar.",
            },
            {
              "kind": "p",
              "text": "Önce, kontrol adımlarında anlatıldığı gibi en büyük değeri hipotenüs olarak ele alın ve kareli değerleri karşılaştırın. Alıştıkça yaygın üçlüler tanıdık gelir: [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]] ve [[7]]-[[24]]-[[25]] ders kitaplarında ve sınavlarda o kadar sık görünür ki bunları tanımak gerçek zaman kazandırır.",
            },
            {
              "kind": "p",
              "text": "Sonra ortak bölenlere bakın. Üç sayı da çiftse [[2]] ye bölün ve geriye ne kaldığına bakın. [[6]]-[[8]]-[[10]] kümesi, [[2]] böleni fark edildiğinde [[3]]-[[4]]-[[5]] üçlüsünün iki katı olarak hemen tanınır. İlkel olmayan bir üçlüyü ilkel biçimine indirgemek, genellikle daha büyük sayıların arkasına gizlenmiş tanıdık bir kalıbı ortaya çıkarır.",
            },
            {
              "kind": "p",
              "text": "Yeni bir üçlüye kontrol yerine ihtiyaç duyduğunuzda Öklid formülü güvenilir yoldur: [[m]] ve [[n]] için küçük değerler seçin ve oluşturun. Tanıma yararlı bir kısayoldur, ancak tam doğrulama her zaman son sözdür. Tanıdık görünen bir üçlü bile güvenmeden önce kare alma ve karşılaştırma testinden geçmelidir.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Pisagor Üçlüleri ve Sıradan Dik Üçgenler",
          "blocks": [
            {
              "kind": "p",
              "text": "Her üçlü bir dik üçgendir, ancak çoğu dik üçgen üçlü değildir.",
            },
            {
              "kind": "p",
              "text": "Bir dik üçgenin kenar uzunlukları tam sayı, ondalık sayı veya irrasyonel sayı olabilir. Yalnızca ilk kategori Pisagor üçlüsü oluşturabilir. [[(3, 4, 5)]] üçlüsü tam sayılı bir dik üçgendir ve niteliklidir. Dik kenarları [[1]] ve [[1]], hipotenüsü [[\\sqrt{2}]] olan bir üçgen, [[1+1=2]] olduğundan gerçek bir dik üçgendir, ancak hipotenüsü irrasyonel olduğundan üçlü değildir. Kenarları [[3]], [[4]] ve [[5.1]] olan bir üçgen denklemi sağlamaz, çünkü [[9+16=25]] ve [[5.1^2=26.01]] tir; bu nedenle dik üçgen bile değildir.",
            },
            {
              "kind": "p",
              "text": "Bu ayrım pratikte önemlidir. İnşaatçılar [[3]]-[[4]]-[[5]] üçlüsünü kullanır, çünkü tam sayıları şerit metreyle ölçmek kolaydır. Kenarları [[3]], [[4]] ve [[5.1]] olan bir üçgen neredeyse dik görünür, ancak gözle görülür bir açı farkı vardır ve hiçbir tam sayı kontrolü bunu geçirmez. Pisagor teoremi, kenar uzunlukları ne olursa olsun tüm dik üçgenler için geçerlidir. Pisagor üçlüsü terimi yalnızca pozitif tam sayı çözümlerini ifade eder ve üçlüleri özel kılan da bu dar anlamdır.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Pisagor Üçlüleri Hesaplayıcısını Kullanırken Yapılan Yaygın Hatalar",
          "blocks": [
            {
              "kind": "p",
              "text": "On beş hata; her birinin yanında düzeltmesi var.",
            },
            {
              "kind": "list",
              "items": [
                "[[c]] değerini daha küçük bir kenar olarak girmek: hipotenüs en büyük değer olmalıdır, bu nedenle kontrol etmeden önce her zaman en büyük sayıyı [[c]] değerine atayın.",
                "Değerlerin karesini almayı unutmak: teorem kareleri karşılaştırır, kenar uzunluklarının kendilerini değil; bu nedenle önce [[a]], [[b]] ve [[c]] sayılarının karelerini alın.",
                "Kenarları kareleri yerine toplamak: [[a+b]] yanlış toplamdır; kontrol [[a^2+b^2]] toplamını [[c^2]] ile karşılaştırmalıdır.",
                "[[a^2+b^2=c^2]] yerine [[a+b=c]] kullanmak: iki kenarın düz toplamı bir dik üçgende hiçbir zaman hipotenüse eşit olmaz.",
                "Hipotenüsü dik kenarla karıştırmak: hipotenüs dik açının karşısındadır ve her zaman en uzun kenardır.",
                "Ondalık değerler kullanıp tam sayı üçlüsü beklemek: ondalık sayılar dik üçgen oluşturabilir, ancak yalnızca pozitif tam sayılar Pisagor üçlüsü oluşturur.",
                "Sıfır veya negatif kenar uzunlukları girmek: kenar uzunlukları pozitif olmalıdır ve sıfır veya negatif girdiler reddedilir.",
                "[[m]] değerini [[n]] değerine eşit kullanmak: ilk dik kenar [[m^2-n^2=0]] olur ve bu bir üçgen kenarı değildir.",
                "[[m]] değerini [[n]] değerinden küçük kullanmak: ilk dik kenar negatif olur ve bu bir kenar uzunluğu için imkânsızdır.",
                "Ondalık [[m]] ve [[n]] değerleri girmek: Öklid formülü, tam sayı kenarlar üretmek için pozitif tam sayı parametrelerine ihtiyaç duyar.",
                "Oluşturulan her üçlünün ilkel olduğunu varsaymak: oluşturma yalnızca geçerli bir üçlü garanti eder ve ilkellik, zıt tek çiftlikli aralarında asal parametreler gerektirir.",
                "Tüm ilkel üçlülerin [[3]]-[[4]]-[[5]] üçlüsünün katları olduğunu varsaymak: [[5]]-[[12]]-[[13]] ve [[8]]-[[15]]-[[17]] üçlüleri bağımsız ilkel üçlülerdir, [[3]]-[[4]]-[[5]] üçlüsünün katları değildir.",
                "Zıt tek çiftlik koşulunu unutmak: iki tek parametre çift, ilkel olmayan bir üçlü üretir; bunu [[m=3]], [[n=1]] gösterir.",
                "Ortak bölenleri kontrol etmeyi unutmak: [[(12, 16, 20)]] gibi bir üçlü, ortak [[4]] böleni onun ölçeklenmiş bir [[(3, 4, 5)]] olduğunu ortaya çıkarana dek yeni görünür.",
                "Geçerli bir dik üçgeni tam sayılı Pisagor üçlüsüyle karıştırmak: irrasyonel veya ondalıklı kenarları olan bir üçgen, üçlü olmadan teoremi sağlayabilir.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Cevaplı Alıştırma Problemleri",
          "blocks": [
            {
              "kind": "p",
              "text": "Sekiz problem; dört kontrol ve dört oluşturma; tam çözümleriyle birlikte.",
            },
            {
              "kind": "list",
              "items": [
                "[[8]], [[15]] ve [[17]] sayılarının üçlü oluşturup oluşturmadığını kontrol edin. Cevap: evet, ilkel. [[8^2+15^2=64+225=289=17^2]] ve üç sayının ortak bir böleni yoktur.",
                "[[6]], [[8]] ve [[11]] sayılarının üçlü oluşturup oluşturmadığını kontrol edin. Cevap: hayır. [[6^2+8^2=36+64=100]], ancak [[11^2=121]] tir; bu nedenle iki taraf farklıdır.",
                "[[9]], [[12]] ve [[15]] sayılarının ilkel olup olmadığını belirleyin. Cevap: ilkel değil. Sayılar [[3]] bölenini paylaşır ve [[3]] e bölmek ilkel [[(3, 4, 5)]] üçlüsünü verir.",
                "[[m=2]] ve [[n=1]] kullanarak bir üçlü oluşturun. Cevap: [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "[[m=3]] ve [[n=2]] kullanarak bir üçlü oluşturun. Cevap: [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "[[m=4]] ve [[n=1]] kullanarak bir üçlü oluşturun. Cevap: [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]]; dik kenarlar artan sırada.",
                "[[m=3]] ve [[n=1]] sayılarının ilkel bir üçlü üretip üretmediğini belirleyin. Cevap: hayır. Parametreler aralarında asaldır, ancak ikisi de tektir; bu nedenle sonuç ilkel olmayan [[(6, 8, 10)]] üçlüsüdür.",
                "[[3]]-[[4]]-[[5]] ile [[15]]-[[20]]-[[25]] arasındaki ortak çarpanı bulun. Cevap: [[5]]. [[(3, 4, 5)]] üçlüsünün her kenarını [[5]] ile çarpmak [[(15, 20, 25)]] sonucunu verir.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "İlgili Dik Üçgen Hesaplayıcıları",
      "relatedIntro": "Aşağıdaki hesaplayıcıların her biri farklı bir dik üçgen görevini yerine getirir; bu nedenle ihtiyacınız olan ölçüme uyan aracı seçin.",
      "relatedItems": [
        "Dik Üçgen Hesaplayıcı",
        "Pisagor Teoremi Hesaplayıcı",
        "3-4-5 Üçgen Hesaplayıcı",
        "5-12-13 Üçgen Hesaplayıcı",
        "Dik Üçgen Kenar Hesaplayıcı",
        "Özel Dik Üçgen Hesaplayıcı",
      ],
      "faqHeading": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "Pisagor üçlüsü nedir?",
          "answer": "Pisagor üçlüsü, [[a^2+b^2=c^2]] denklemini sağlayan [[(a, b, c)]] biçiminde yazılan üç pozitif tam sayı kümesidir. İki küçük sayı bir dik üçgenin dik kenarları, en büyük sayı hipotenüstür. En bilinen örnek [[(3, 4, 5)]] üçlüsüdür, çünkü [[9+16=25]] tir.",
        },
        {
          "question": "Pisagor Üçlüleri Hesaplayıcı nasıl çalışır?",
          "answer": "İki modu vardır. Kontrol modu üç tam sayı alır ve [[a^2+b^2=c^2]] denkleminin sağlanıp sağlanmadığını test eder. Oluşturma modu iki tam sayı, [[m]] ve [[n]], alır ve yeni bir üçlü oluşturmak için Öklid formülünü uygular. Her iki mod da sonuçla birlikte adım adım çözümü gösterir.",
        },
        {
          "question": "Üç sayının Pisagor üçlüsü oluşturup oluşturmadığı nasıl kontrol edilir?",
          "answer": "En büyük değeri hipotenüs [[c]], diğer ikisini dik kenarlar [[a]] ve [[b]] olarak alın. Üçünün de karesini alın, [[a^2+b^2]] toplamını hesaplayın ve [[c^2]] ile karşılaştırın. Eşit toplamlar geçerli bir üçlü, eşit olmayan toplamlar sayıların üçlü oluşturmadığı anlamına gelir.",
        },
        {
          "question": "Öklid formülü nedir?",
          "answer": "Öklid formülü, [[m]] değerinin [[n]] değerinden büyük olduğu iki pozitif tam sayıdan, [[m]] ve [[n]] den bir Pisagor üçlüsü oluşturur. Formüller [[a=m^2-n^2]], [[b=2mn]] ve [[c=m^2+n^2]] dir. Bu sayfadaki cebir ispatının gösterdiği gibi her çift geçerli bir üçlü üretir.",
        },
        {
          "question": "Pisagor üçlüsü formülündeki m ve n nedir?",
          "answer": "[[m]] ve [[n]] değerleri, Öklid formülündeki pozitif tam sayı parametrelerdir. [[m]] değeri büyük tam sayı, [[n]] değeri küçük tam sayıdır ve [[m>n>0]] koşulu geçerlidir. Daha büyük [[m]] değerleri daha büyük üçlüler üretir ve farklı çiftler farklı üçlüler üretir.",
        },
        {
          "question": "İlkel Pisagor üçlüsü nedir?",
          "answer": "İlkel üçlü, üç kenar uzunluğunun [[1]] değerinden büyük ortak bir böleni olmadığı üçlüdür; yani [[\\gcd(a,b,c)=1]] dir. Örnekler arasında [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]] ve [[(7, 24, 25)]] yer alır. İlkel üçlüler daha küçük bir tam sayı üçlüsüne indirgenemez.",
        },
        {
          "question": "İlkel olmayan Pisagor üçlüsü nedir?",
          "answer": "İlkel olmayan üçlü, üç kenarının [[1]] değerinden büyük ortak bir böleni paylaştığı geçerli bir üçlüdür. Örneğin, [[(6, 8, 10)]] üçlüsü [[(3, 4, 5)]] üçlüsünün iki katı, [[(9, 12, 15)]] üçlüsü [[(3, 4, 5)]] üçlüsünün üç katıdır. Ortak bölenle bölmek, alttaki ilkel üçlüyü geri verir.",
        },
        {
          "question": "Oluşturulan bir üçlünün ilkel olup olmadığını nasıl anlarım?",
          "answer": "İki parametre koşulunu kontrol edin: [[m]] ve [[n]] aralarında asal olmalıdır, yani [[\\gcd(m,n)=1]] dir ve zıt tek çiftliğe sahip olmalıdırlar; yani biri çift, diğeri tektir. Her iki koşul da sağlanırsa oluşturulan üçlü ilkeldir. Koşullardan biri sağlanmazsa ilkel değildir.",
        },
        {
          "question": "Ondalık sayılar Pisagor üçlüsü oluşturabilir mi?",
          "answer": "Hayır. Pisagor üçlüsü üç pozitif tam sayı olarak tanımlanır, bu nedenle ondalıklı kenar uzunlukları hiçbir zaman nitelikli olamaz. Ondalık sayılar, [[1.5]] ve [[2]] dik kenarları ile [[2.5]] hipotenüsü gibi [[a^2+b^2=c^2]] denklemini sağlayan bir dik üçgen oluşturabilir, ancak bu üçgen Pisagor üçlüsü değildir.",
        },
        {
          "question": "Sonsuz sayıda Pisagor üçlüsü var mıdır?",
          "answer": "Evet. Öklid formülü sonsuz sayıda [[(m, n)]] tam sayı çiftini kabul eder ve her çift bir üçlü üretir. Tam sayı katları daha fazlasını ekler: her ilkel üçlü, ölçeklenmiş kopyalardan oluşan sonsuz bir aile üretir. Üçlü sayısı asla tükenmez.",
        },
        {
          "question": "Her Pisagor üçlüsü Öklid formülüyle oluşturulabilir mi?",
          "answer": "Evet, her ilkel üçlü Öklid formülünden uygun aralarında asal ve zıt tek çiftlikli parametrelerle gelir ve her ilkel olmayan üçlü ilkel bir üçlünün katıdır. Bu nedenle her Pisagor üçlüsüne Öklid formülü ve pozitif bir tam sayıyla ölçeklendirme yoluyla ulaşılabilir.",
        },
        {
          "question": "En yaygın Pisagor üçlüsü hangisidir?",
          "answer": "[[(3, 4, 5)]] üçlüsü en yaygın ve en bilinen üçlüdür. En küçük ilkel üçlüdür, hatırlanması kolaydır ve inşaatçılar ile marangozlar kare köşeleri kontrol etmek için yüzyıllardır onu kullanır. Sonraki en tanıdık üçlüler [[(5, 12, 13)]] ve [[(8, 15, 17)]] dir.",
        },
      ],
    },
};
