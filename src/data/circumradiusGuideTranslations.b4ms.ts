// circumradiusGuideTranslations.bms.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B4_MS = {
  "ms": {
      "tocHeading": "Kandungan Panduan",
      "tocItems": {
        "sec-intro": "Kalkulator Jejari Lilitan Segi Tiga Bersudut Tegak",
        "sec-calculate": "Mengira Jejari Lilitan Segi Tiga Bersudut Tegak",
        "sec-what-circumradius": "Apakah Jejari Lilitan Segi Tiga Bersudut Tegak?",
        "sec-circumcircle": "Apakah Bulatan Lilitan dalam Geometri Segi Tiga Bersudut Tegak?",
        "sec-formula": "Formula Jejari Lilitan Segi Tiga Bersudut Tegak",
        "sec-why-diameter": "Mengapakah Hipotenus Merupakan Diameter Bulatan Lilitan?",
        "sec-circumcenter": "Apakah Pusat Lilitan Segi Tiga Bersudut Tegak?",
        "sec-how-to-use": "Cara Menggunakan Kalkulator Jejari Lilitan Segi Tiga Bersudut Tegak",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Jejari Lilitan",
        "sec-diagram": "Gambar Rajah Bulatan Lilitan Segi Tiga Bersudut Tegak Diterangkan",
        "sec-proof": "Mengapakah Formula Jejari Lilitan Berfungsi?",
        "sec-thales": "Memahami Teorem Thales dan Bulatan Lilitan",
        "sec-examples": "Contoh Kerja Mengira Jejari Lilitan Segi Tiga Bersudut Tegak",
        "sec-legs-known": "Cara Mencari Jejari Lilitan Apabila Dua Sisi Tegak Diketahui",
        "sec-diameter": "Hubungan Antara Jejari Lilitan dengan Diameter",
        "sec-vs-inradius": "Jejari Lilitan lawan Jejari Dalaman Segi Tiga Bersudut Tegak",
        "sec-pythagoras": "Hubungan Antara Jejari Lilitan dengan Teorem Pythagoras",
        "sec-verify": "Cara Mengesahkan Pengiraan Jejari Lilitan Anda",
        "sec-properties": "Sifat Penting Jejari Lilitan dalam Segi Tiga Bersudut Tegak",
        "sec-mistakes": "Kesilapan Lazim Ketika Mengira Jejari Lilitan",
        "sec-applications": "Aplikasi Praktikal Jejari Lilitan",
        "sec-practice": "Soalan Latihan Berserta Jawapan",
        "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
        "sec-faq": "Soalan Lazim",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Jejari Lilitan Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Cari jejari lilitan segi tiga bersudut tegak dalam satu pembahagian: bahagikan hipotenus kepada dua.",
            },
            {
              "kind": "p",
              "text": "Jejari lilitan ialah jejari bulatan yang melalui ketiga-tiga bucu segi tiga, yang dipanggil bulatan lilitan. Hipotenus c ialah sisi yang bertentangan dengan sudut tegak, dan ia merupakan satu-satunya ukuran yang diperlukan oleh kalkulator ini, kerana hipotenus juga merupakan diameter bulatan lilitan. Formulanya ialah [[R = \\frac{c}{2}]], dengan [[R]] ialah jejari lilitan dan [[c]] ialah hipotenus yang lengkap.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, jika [[c = 10]] cm, maka [[R = \\frac{10}{2} = 5]] cm. Nilai 5 cm itu ialah jarak dari pusat bulatan lilitan ke setiap bucu segi tiga. Jarak yang sama sampai ke bucu A, bucu B, dan bucu C, dan inilah yang menyebabkan bulatan itu melalui ketiga-tiganya.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Mengira Jejari Lilitan Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator pada halaman ini mempunyai satu medan input, untuk hipotenus c. Hipotenus ialah sisi yang bertentangan dengan sudut tegak, dan ia juga merupakan sisi terpanjang segi tiga. Ukur ia dari satu hujung ke hujung yang lain, dalam apa-apa unit yang anda gunakan, dan masukkan nombor tunggal itu.",
            },
            {
              "kind": "p",
              "text": "Hipotenus sahaja sudah cukup kerana jejari lilitan tidak bergantung pada apa-apa yang lain. Itulah sebabnya kalkulator ini tidak memerlukan input kedua atau ketiga.",
            },
            {
              "kind": "p",
              "text": "Masukkan panjang yang positif. Hipotenus sifar atau negatif tidak menggambarkan mana-mana segi tiga sebenar, dan kalkulator tidak mempunyai apa-apa yang munasabah untuk dibahagikan kepada dua. Kekalkan unit yang konsisten dengan soalan anda: jika c dalam sentimeter, jawapannya dalam sentimeter, dan jika c dalam meter, jawapannya dalam meter.",
            },
            {
              "kind": "p",
              "text": "Klik Calculate Circumradius R untuk melihat hasilnya, dan gunakan Reset untuk mengosongkan medan sebelum soalan baharu. Baca jawapan itu sebagai jejari, bukan diameter. Jika kalkulator menunjukkan 5 cm untuk hipotenus 10 cm, lebar penuh bulatan itu ialah 10 cm, dan 5 cm ialah jarak dari pusatnya ke tepinya.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "Apakah Jejari Lilitan Segi Tiga Bersudut Tegak?",
          "blocks": [
            {
              "kind": "p",
              "text": "Jejari lilitan segi tiga bersudut tegak ialah jejari bulatan lilitannya, iaitu bulatan yang dilukis melalui ketiga-tiga bucu. Ambil segi tiga ABC dengan sudut tegak di C. Lukis sebuah bulatan yang melalui tepat A, B, dan C. Jarak dari pusat bulatan itu ke mana-mana satu daripada tiga bucu tersebut ialah jejari lilitan, yang ditulis [[R]].",
            },
            {
              "kind": "p",
              "text": "Pusat bulatan itu dipanggil pusat lilitan, yang ditulis [[O]]. Dalam segi tiga bersudut tegak, [[O]] terletak di titik tengah hipotenus AB. Oleh sebab [[O]] ialah pusat, jarak dari [[O]] ke ketiga-tiga bucu adalah sama semuanya, jadi [[AO = BO = CO = R]]. Satu nombor, [[R]], menerangkan ketiga-tiga jarak itu sekaligus.",
            },
            {
              "kind": "p",
              "text": "Contoh mudah menjadikannya jelas. Dalam segi tiga 6-8-10, hipotenus ialah 10 cm, jadi jejari lilitannya ialah 5 cm. Pusatnya terletak 5 cm dari A, 5 cm dari B, dan 5 cm dari C. Sisi tegak, 6 cm dan 8 cm, ialah sisi segi tiga, bukan jejari, dan tidak satu pun daripadanya sama dengan jejari lilitan di sini.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "Segi tiga bersudut tegak ABC di dalam bulatan lilitannya dengan pusat O di titik tengah hipotenus AB",
            "caption": "Segi tiga ABC di dalam bulatan lilitannya: O ialah pusat, dan AO, BO, dan CO masing-masing sama dengan R.",
          },
        },
        "sec-circumcircle": {
          "h2": "Apakah Bulatan Lilitan dalam Geometri Segi Tiga Bersudut Tegak?",
          "blocks": [
            {
              "kind": "p",
              "text": "Bulatan lilitan ialah bulatan yang melalui setiap bucu sesebuah poligon. Bagi segi tiga, ini bermaksud bulatan itu melalui ketiga-tiga penjuru dan tiada apa-apa lagi yang diperlukan daripadanya. Setiap segi tiga mempunyai tepat satu bulatan lilitan, kerana tiga titik yang tidak segaris menentukan satu bulatan sahaja.",
            },
            {
              "kind": "p",
              "text": "Dalam segi tiga bersudut tegak, bulatan lilitan mempunyai bentuk yang istimewa. Segi tiga itu terletak di dalam bulatan dengan hipotenusnya terbentang lurus merentasi bahagian tengah, dari satu sisi bulatan ke sisi yang lain. Bucu ketiga, iaitu bucu sudut tegak C, terletak pada bulatan di antara keduanya. Tiada bahagian segi tiga yang terkeluar dari bulatan, dan bulatan itu ialah bulatan terkecil yang boleh melalui ketiga-tiga bucu.",
            },
            {
              "kind": "p",
              "text": "Bulatan lilitan berbeza daripada bulatan dalaman. Bulatan dalaman terletak di dalam segi tiga dan menyentuh ketiga-tiga sisi dari dalam. Bulatan lilitan mengelilingi segi tiga dan menyentuhnya hanya pada ketiga-tiga bucu. Mencampurkan kedua-dua bulatan ini ialah punca kekeliruan yang paling biasa pada halaman ini, dan bahagian perbandingan di bawah meletakkannya bersebelahan.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Formula Jejari Lilitan Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Formula jejari lilitan segi tiga bersudut tegak cukup pendek untuk diingati sepintas lalu:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[R]] ialah jejari lilitan, iaitu jejari bulatan lilitan, dan [[c]] ialah hipotenus yang lengkap, iaitu sisi yang bertentangan dengan sudut tegak. Formula itu bermaksud: ambil hipotenus dan bahagikan kepada dua.",
            },
            {
              "kind": "p",
              "text": "Pengiraan ini mempunyai dua langkah. Pertama, kenal pasti hipotenus dengan betul. Ia ialah sisi yang bertentangan dengan sudut tegak, dan ia sentiasa merupakan sisi terpanjang. Kedua, bahagikan panjangnya kepada dua. Tiada pengkuadratan, tiada punca kuasa dua, dan tiada ukuran kedua yang perlu dicari dahulu, selagi hipotenus sudah diketahui.",
            },
            {
              "kind": "p",
              "text": "Sebab pembahagian ini berfungsi ialah hipotenus merupakan diameter bulatan lilitan. Jejari sentiasa separuh daripada diameter, jadi [[R = \\frac{D}{2}]], dengan [[D]] ialah diameter. Dalam segi tiga bersudut tegak [[D = c]], jadi dengan menggantikan kita memperoleh [[R = \\frac{c}{2}]]. Formula ini sebenarnya ialah hubungan jejari-diameter yang biasa, yang digunakan pada diameter yang kebetulan merupakan sisi segi tiga.",
            },
            {
              "kind": "p",
              "text": "Untuk segi tiga umum, iaitu segi tiga yang tidak semestinya bersudut tegak, jejari lilitannya mengikut formula [[R = \\frac{abc}{4A}]], dengan [[a]], [[b]], dan [[c]] ialah ketiga-tiga sisi dan [[A]] ialah luas segi tiga. Untuk segi tiga bersudut tegak ia dipermudahkan menjadi [[R = \\frac{c}{2}]], kerana luasnya ialah [[A = \\frac{ab}{2}]]. Gunakan formula umum hanya untuk segi tiga yang bukan bersudut tegak.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "Mengapakah Hipotenus Merupakan Diameter Bulatan Lilitan?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ini ialah idea yang menjadi teras seluruh halaman ini, jadi ia wajar diteliti dengan teliti. Ambil segi tiga bersudut tegak ABC dengan sudut tegak di C, dan biarkan [[O]] menjadi titik tengah hipotenus AB. Dakwaannya ialah [[O]] sama jauh dari ketiga-tiga bucu, yang menjadikannya pusat bulatan lilitan, dan AB, yang melalui [[O]] dengan kedua-dua hujung pada bulatan, ialah diameter.",
            },
            {
              "kind": "p",
              "text": "Fakta utamanya ialah sifat titik tengah segi tiga bersudut tegak: titik tengah hipotenus sama jauh dari ketiga-tiga bucu. Dalam simbol, [[OA = OB = OC]]. Oleh sebab [[O]] ialah titik tengah AB, [[OA]] dan [[OB]] masing-masing separuh daripada hipotenus, jadi [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Mengapakah [[OC]] sama dengan separuh hipotenus? Salah satu cara untuk melihatnya ialah dengan melengkapkan segi empat tepat. Lukis salinan segi tiga ABC yang diputar separuh pusingan mengelilingi [[O]], supaya kedua-dua segi tiga itu bersama-sama membentuk segi empat tepat dengan AB sebagai salah satu pepenjurunya. Pepenjuru segi empat tepat adalah sama panjang dan membahagikan satu sama lain kepada dua, jadi [[OC = \\frac{c}{2}]] juga.",
            },
            {
              "kind": "p",
              "text": "Setelah [[OA = OB = OC]] dibuktikan, selebihnya menyusul. Bulatan yang berpusat di [[O]] dengan jejari [[\\frac{c}{2}]] melalui A, B, dan C, jadi ia ialah bulatan lilitan, [[O]] ialah pusat lilitan, dan [[\\frac{c}{2}]] ialah jejari lilitan. Oleh sebab A dan B ialah hujung yang bertentangan pada garis yang melalui pusat, AB ialah diameter, jadi [[AB = 2R]], iaitu [[c = 2R]] dan oleh itu [[R = \\frac{c}{2}]].",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "Hipotenus AB ditunjukkan sebagai diameter bulatan lilitan dengan AO dan OB sama dengan R",
            "caption": "Hipotenus AB ialah diameter: AO dan OB masing-masing sama dengan R, dan AB sama dengan 2R.",
          },
        },
        "sec-circumcenter": {
          "h2": "Apakah Pusat Lilitan Segi Tiga Bersudut Tegak?",
          "blocks": [
            {
              "kind": "p",
              "text": "Pusat lilitan segi tiga ialah titik yang sama jauh dari ketiga-tiga bucu, dan ia merupakan pusat bulatan lilitan. Ia ditemui di tempat pembahagi dua sama serenjang bagi sisi-sisi itu bertemu.",
            },
            {
              "kind": "p",
              "text": "Untuk segi tiga bersudut tegak, pembahagi dua sama serenjang itu bertemu pada titik yang boleh anda cari tanpa melukisnya: titik tengah hipotenus. Bahagikan AB kepada dua dan anda memperoleh pusat lilitan [[O]]. Membahagikan mana-mana sisi tegak kepada dua memberikan garis yang melalui titik yang sama, dan ini merupakan semakan yang berguna apabila anda membina pusat itu dengan jangka lukis dan pembaris lurus.",
            },
            {
              "kind": "p",
              "text": "Pusat lilitan terletak pada hipotenus itu sendiri, tepat di tengah-tengahnya. Itulah ciri istimewa segi tiga bersudut tegak. Dalam segi tiga tirus, ketiga-tiga sudut kurang daripada 90 darjah dan pusat lilitan terletak di dalam segi tiga. Segi tiga bersudut tegak ialah kes sempadan, dengan pusatnya terletak pada sempadan segi tiga, pada sisi terpanjangnya.",
            },
            {
              "kind": "p",
              "text": "Pusat lilitan bukanlah bucu sudut tegak. Bucu C ialah titik pada bulatan, pada jarak [[R]] dari [[O]], manakala [[O]] ialah pusat. Mengelirukan kedua-duanya ialah kesilapan yang biasa, kerana C ialah penjuru segi tiga yang paling menarik perhatian. Ingatlah bahawa pusat mesti sama jauh dari A, B, dan C, dan C tidak sama jauh dari A dan B melainkan segi tiga itu sama kaki dengan cara tertentu, jadi C tidak boleh menjadi pusat secara umum.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "Pusat lilitan O di titik tengah hipotenus, sama jauh dari ketiga-tiga bucu",
            "caption": "O ialah titik tengah AB, dengan OA, OB, dan OC semuanya sama dengan R.",
          },
        },
        "sec-how-to-use": {
          "h2": "Cara Menggunakan Kalkulator Jejari Lilitan Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Sembilan langkah pendek membawa anda dari segi tiga berlabel kepada jawapan yang telah disemak. Sisi tegak tidak diperlukan pada bila-bila masa, kerana hipotenus sahaja menentukan jejari lilitan.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenal pasti segi tiga bersudut tegak dalam soalan anda dan pastikan ia mempunyai sudut tegak.",
                "Cari sudut tegak itu, yang biasanya ditandakan dengan segi empat kecil di bucu C.",
                "Kenal pasti sisi yang bertentangan dengan sudut tegak; sisi itu ialah hipotenus c.",
                "Pastikan sisi ini ialah sisi terpanjang segi tiga. Jika tidak, labelkan semula gambar rajah itu sebelum meneruskan.",
                "Pilih unit yang sesuai dan tukar semua ukuran supaya semuanya menggunakan unit itu.",
                "Masukkan panjang hipotenus dalam medan Hypotenuse c.",
                "Klik Calculate Circumradius R dan baca hasilnya.",
                "Semak hasilnya: ia mesti positif, dalam unit yang sama dengan c, dan tepat separuh daripada c.",
                "Gunakan Reset apabila memulakan pengiraan lain.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika soalan anda memberikan dua sisi tegak dan bukannya hipotenus, cari c dahulu dengan Teorem Pythagoras, [[c = \\sqrt{a^2 + b^2}]], kemudian masukkan nilai itu. <a href=\"/right-triangle-side-calculator/\">Kalkulator sisi segi tiga bersudut tegak</a> boleh mencari hipotenus yang tiada itu untuk anda, dan bahagian tentang sisi tegak di bawah mengerjakan satu contoh penuh.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Contoh Langkah demi Langkah Mencari Jejari Lilitan",
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[c = 10]] cm. Tiga langkah di bawah menunjukkan kerja penuh, tanpa apa-apa yang dilangkau.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis formula: [[R = \\frac{c}{2}]].",
                "Gantikan nilai yang diketahui: [[R = \\frac{10}{2}]].",
                "Bahagikan: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawapan 5 cm bermaksud bulatan lilitan mempunyai jejari 5 cm. Pusatnya, iaitu titik tengah hipotenus, terletak 5 cm dari setiap bucu segi tiga, dan bulatan itu melalui ketiga-tiga bucu. Diameter bulatan itu ialah 10 cm, sama dengan hipotenus.",
            },
            {
              "kind": "p",
              "text": "Sahkan jawapan itu dengan hubungan diameter, [[2R = c]]. Menggandakan jejari memberikan [[2 \\times 5 = 10]] cm, yang tepat sama dengan hipotenus. Jika menggandakan jawapan anda tidak mengembalikan hipotenus yang anda mulakan, pembahagian itu telah tersilap di suatu tempat, dan semakan ini menangkapnya serta-merta.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Contoh kerja dengan hipotenus 10 cm dan jejari lilitan 5 cm di dalam bulatan lilitan",
            "caption": "Contoh kerja: c = 10 cm memberikan R = 5 cm, dan 2 kali 5 cm sama dengan 10 cm.",
          },
        },
        "sec-diagram": {
          "h2": "Gambar Rajah Bulatan Lilitan Segi Tiga Bersudut Tegak Diterangkan",
          "blocks": [
            {
              "kind": "p",
              "text": "Gambar rajah menunjukkan segi tiga ABC dengan sudut tegak di C. Sisi AC ialah sisi tegak a, sisi BC ialah sisi tegak b, dan sisi AB ialah hipotenus c. Titik [[O]] menandakan titik tengah AB, dan bulatan yang berpusat di [[O]] melalui A, B, dan C.",
            },
            {
              "kind": "p",
              "text": "Baca gambar rajah ini mengikut urutan ini. Mulakan di A, ikut sisi tegak a ke C, kemudian ikut sisi tegak b ke B, kemudian kembali sepanjang hipotenus dari B ke A, melalui [[O]] dalam perjalanan. Segmen dari [[O]] ke A, B, dan C semuanya jejari, masing-masing dilabel [[R]].",
            },
            {
              "kind": "p",
              "text": "Segmen AB melalui pusat [[O]] dan mempunyai kedua-dua hujung pada bulatan, dan itulah takrif diameter. Itulah sebabnya AB dilukis sebagai garis lurus merentasi bahagian tengah bulatan dan bukannya sebagai perentas di satu sisi. Sudut tegak di C terletak pada bulatan itu sendiri, dan inilah gambaran yang diterangkan oleh Teorem Thales.",
            },
          ],
        },
        "sec-proof": {
          "h2": "Mengapakah Formula Jejari Lilitan Berfungsi?",
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti ini menggunakan titik tengah hipotenus dan hakikat bahawa ia sama jauh dari ketiga-tiga bucu. Biarkan [[M]] menjadi titik tengah AB dalam segi tiga bersudut tegak ABC, dengan sudut tegak di C. Maka [[AM = BM = \\frac{c}{2}]] mengikut takrif titik tengah. Langkah yang memerlukan bukti ialah [[MA = MB = MC]], iaitu dakwaan bahawa jarak ketiga sama dengan dua jarak pertama.",
            },
            {
              "kind": "p",
              "text": "Salah satu cara yang kemas untuk menunjukkannya ialah dengan memanjangkan median CM ke titik D supaya [[MD = MC]], dan menyambung D ke A dan B. Segi empat ACBD mempunyai pepenjuru AB dan CD yang membahagikan satu sama lain kepada dua di [[M]], jadi ia ialah segi empat selari. Sudutnya di C ialah sudut tegak, dan segi empat selari dengan satu sudut tegak ialah segi empat tepat, jadi ACBD ialah segi empat tepat.",
            },
            {
              "kind": "p",
              "text": "Pepenjuru segi empat tepat adalah sama panjang, jadi [[CD = AB = c]]. Oleh sebab [[M]] membahagikan CD kepada dua, [[MC = \\frac{CD}{2} = \\frac{c}{2}]]. Ini sama dengan [[MA]] dan [[MB]], jadi [[MA = MB = MC = \\frac{c}{2}]]. Titik [[M]] sama jauh dari A, B, dan C, yang menjadikannya pusat lilitan, dan jarak sepunya [[\\frac{c}{2}]] ialah jejari lilitan. Oleh itu [[R = \\frac{c}{2}]].",
            },
          ],
        },
        "sec-thales": {
          "h2": "Memahami Teorem Thales dan Bulatan Lilitan",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem Thales menyatakan bahawa sudut yang dicangkum oleh diameter pada satu titik di bulatan ialah sudut tegak. Dalam gambar, AB ialah diameter sebuah bulatan dan C ialah mana-mana titik pada bulatan selain A atau B. Maka sudut ACB ialah 90 darjah. Teorem ini dinamakan sempena Thales dari Miletus, yang dikreditkan dengan bukti pertama yang diketahui tentangnya.",
            },
            {
              "kind": "p",
              "text": "Akasan teorem inilah yang digunakan oleh halaman ini: jika segi tiga mempunyai sudut tegak, hipotenusnya boleh dianggap sebagai diameter bulatan yang melalui ketiga-tiga bucu. Ambil segi tiga ABC dengan sudut C sama dengan 90 darjah. Akasan itu menyatakan C terletak pada bulatan dengan diameter AB, jadi bulatan itu ialah bulatan lilitan segi tiga, dan jejarinya ialah separuh daripada AB.",
            },
            {
              "kind": "p",
              "text": "Kedua-dua arah itu bersama-sama memberikan ujian yang lengkap. Titik C pada bulatan dengan diameter AB sentiasa memberikan sudut tegak di C, dan sudut tegak di C sentiasa meletakkan C pada bulatan itu.",
            },
            {
              "kind": "p",
              "text": "Teorem ini juga menjelaskan kedudukan pusat lilitan. Pusat bulatan ialah titik tengah diameternya, dan diameter itu ialah hipotenus, jadi pusatnya ialah titik tengah hipotenus. Tiada apa-apa lagi tentang segi tiga yang perlu diketahui. Itulah sebabnya kalkulator hanya meminta satu nombor.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "Gambar rajah Teorem Thales dengan diameter AB dan titik C pada bulatan membentuk sudut tegak",
            "caption": "Teorem Thales: AB ialah diameter, C terletak pada bulatan, dan sudut C ialah 90 darjah.",
          },
        },
        "sec-examples": {
          "h2": "Contoh Kerja Mengira Jejari Lilitan Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "h3",
              "text": "Contoh 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 10]] cm, formula memberikan [[R = \\frac{10}{2} = 5]] cm. Bulatan lilitan mempunyai diameter 10 cm dan jejari 5 cm, dan pusatnya ialah titik tengah hipotenus, 5 cm dari setiap bucu.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Ukuran yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m. Nombor yang lebih besar tidak mengubah apa-apa tentang kaedahnya: bahagikan hipotenus kepada dua dan kekalkan unitnya. Bulatan selebar 24 m mempunyai jejari 12 m.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Ukuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. Hipotenus perpuluhan memberikan jejari lilitan perpuluhan, dan ini normal. Semak dengan menggandakan: [[2 \\times 3.75 = 7.5]] cm, yang mengembalikan hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Hipotenus Ganjil",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Nombor bulat ganjil yang dibahagikan kepada dua memberikan nombor yang berakhir dengan .5. Ini ialah segi tiga 5-12-13, yang sisi tegaknya 5 cm dan 12 cm, kerana [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran Milimeter",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm. Unit kecil berfungsi dengan cara yang sama, dan mengekalkan unit dalam milimeter sepanjang pengiraan mengelakkan sebarang penukaran. Dalam sentimeter, jawapan yang sama ialah 9 cm, kerana 90 mm sama dengan 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = \\frac{15}{2}]] ft, [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft, iaitu 3.75 ft. Membahagikan kepada 2 bermaksud mendarabkan penyebut dengan 2, jadi penyebut bertambah dari 2 kepada 4. Bentuk perpuluhan, 3.75 ft, ialah jawapan yang sama yang ditulis dengan cara berbeza.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Unit yang Berbeza",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m. Apabila ditukar kepada sentimeter, 0.6 m sama dengan 60 cm, kerana 1 m ialah 100 cm. Mana-mana unit pun betul, tetapi jawapan mesti menyatakan unit yang digunakannya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Ukuran Perpuluhan yang Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 125.6]] m, [[R = \\frac{125.6}{2} = 62.8]] m. Menggandakan 62.8 mengembalikan 125.6, dan ini mengesahkan pembahagian itu.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Cara Mencari Jejari Lilitan Apabila Dua Sisi Tegak Diketahui",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator pada halaman ini meminta hipotenus, tetapi banyak soalan memberikan dua sisi tegak sebagai gantinya. Dalam kes itu, cari hipotenus dahulu dengan Teorem Pythagoras, kemudian bahagikannya kepada dua. Dua langkah itu bergabung menjadi satu formula, [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]], dengan [[a]] dan [[b]] ialah sisi tegak.",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 6]] cm dan [[b = 8]] cm. Mula-mula kuasa duakan kedua-dua sisi tegak dan tambahkan: [[a^2 + b^2 = 36 + 64 = 100]]. Kemudian ambil punca kuasa dua untuk memperoleh hipotenus: [[c = \\sqrt{100} = 10]] cm. Kemudian bahagikannya kepada dua: [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "<a href=\"/pythagorean-theorem-calculator/\">Kalkulator Teorem Pythagoras</a> mencari hipotenus yang tiada daripada dua sisi tegak, yang merupakan langkah pertama yang sama yang digunakan di sini. <a href=\"/right-triangle-area-calculator/\">Kalkulator luas segi tiga bersudut tegak</a> menggunakan dua sisi tegak yang sama dengan cara yang berbeza, dengan mengira [[A = \\frac{ab}{2}]], iaitu 24 sentimeter persegi untuk segi tiga 6-8-10.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Hubungan Antara Jejari Lilitan dengan Diameter",
          "blocks": [
            {
              "kind": "p",
              "text": "Jejari dan diameter menerangkan bulatan yang sama dalam dua cara. Diameter [[D]] ialah jarak lurus merentasi bulatan melalui pusatnya, dan jejari [[R]] ialah jarak dari pusat ke tepi, jadi [[D = 2R]] dan [[R = \\frac{D}{2}]]. Menggandakan jejari memberikan diameter, dan membahagikan diameter kepada dua memberikan jejari.",
            },
            {
              "kind": "p",
              "text": "Untuk segi tiga bersudut tegak, diameter mempunyai identiti kedua: ia sama dengan hipotenus. Hipotenus terbentang merentasi bulatan lilitan dari satu sisi ke sisi yang lain, melalui pusat, jadi [[D = c]]. Menggabungkan kedua-dua hubungan itu memberikan [[c = 2R]] dan [[R = \\frac{c}{2}]], iaitu formula yang menjadi asas halaman ini.",
            },
            {
              "kind": "p",
              "text": "Contoh berangka memastikan ketiga-tiga panjang itu jelas. Dalam segi tiga dengan [[c = 18]] cm, diameternya ialah [[D = 18]] cm dan jejari lilitannya ialah [[R = 9]] cm. Hipotenus, 18 cm, dan diameter, 18 cm, ialah garis yang sama yang diukur dalam dua peranan, manakala jejari, 9 cm, ialah separuh daripada garis itu.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Jejari Lilitan lawan Jejari Dalaman Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Jejari lilitan dan jejari dalaman ialah dua jejari segi tiga bersudut tegak, dan ia menerangkan dua bulatan yang berbeza. Jejari lilitan [[R]] ialah jejari bulatan lilitan, yang melalui ketiga-tiga bucu. Jejari dalaman [[r]] ialah jejari bulatan dalaman, yang terletak di dalam segi tiga dan menyentuh ketiga-tiga sisi. Satu bulatan mengelilingi segi tiga, manakala satu lagi terletak di dalamnya.",
            },
            {
              "kind": "p",
              "text": "Untuk segi tiga bersudut tegak, jejari lilitannya ialah [[R = \\frac{c}{2}]], manakala jejari dalamannya ialah [[r = \\frac{a + b - c}{2}]], dengan [[a]] dan [[b]] ialah sisi tegak dan [[c]] ialah hipotenus. Jejari lilitan hanya memerlukan hipotenus; jejari dalaman memerlukan ketiga-tiga sisi, kerana sejauh mana bulatan dalaman itu muat bergantung pada bentuk segi tiga, bukan hanya pada sisi terpanjangnya.",
            },
            {
              "kind": "p",
              "text": "Pusatnya juga berbeza. Pusat lilitan ialah titik tengah hipotenus, pada sempadan segi tiga. Pusat dalaman terletak di dalam segi tiga, di tempat pembahagi dua sama sudut bertemu, pada jarak [[r]] dari setiap sisi.",
            },
            {
              "kind": "p",
              "text": "Gunakan segi tiga 6-8-10 untuk melihat perbezaan dalam nombor. Jejari lilitannya ialah [[R = \\frac{10}{2} = 5]] cm, dan jejari dalamannya ialah [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Untuk soalan tentang bulatan dalaman, gunakan <a href=\"/right-triangle-inradius-calculator/\">kalkulator jejari dalaman segi tiga bersudut tegak</a>, yang menggunakan [[r = \\frac{a + b - c}{2}]] secara langsung. <a href=\"/right-triangle-radius-calculator/\">Kalkulator jejari segi tiga bersudut tegak</a> merangkumi kedua-dua jejari dalam satu halaman apabila anda perlu membandingkannya.",
            },
          ],
          "table": {
            "headers": [
              "Ciri",
              "Jejari Lilitan R",
              "Jejari Dalaman r",
            ],
            "rows": [
              [
                "Bulatan",
                "Bulatan lilitan",
                "Bulatan dalaman",
              ],
              [
                "Kedudukan",
                "Mengelilingi segi tiga",
                "Di dalam segi tiga",
              ],
              [
                "Sentuhan",
                "Melalui bucu",
                "Menyentuh sisi",
              ],
              [
                "Formula segi tiga bersudut tegak",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Pusat",
                "Pusat lilitan",
                "Pusat dalaman",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "Bulatan lilitan yang melalui bucu di samping bulatan dalaman yang menyentuh sisi, segi tiga 6-8-10",
            "caption": "Bulatan lilitan (R = 5 cm) mengelilingi segi tiga, bulatan dalaman (r = 2 cm) di dalamnya, segi tiga 6-8-10.",
          },
        },
        "sec-pythagoras": {
          "h2": "Hubungan Antara Jejari Lilitan dengan Teorem Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem Pythagoras menyatakan bahawa dalam segi tiga bersudut tegak, [[a^2 + b^2 = c^2]], dengan [[a]] dan [[b]] ialah sisi tegak dan [[c]] ialah hipotenus. Ia merupakan kaitan antara sisi tegak dengan hipotenus, dan melalui hipotenus ia juga merupakan kaitan dengan jejari lilitan.",
            },
            {
              "kind": "p",
              "text": "Oleh sebab [[R = \\frac{c}{2}]], dan teorem itu memberikan [[c = \\sqrt{a^2 + b^2}]], penggantian memberikan [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Formula gabungan itu mencari jejari lilitan daripada dua sisi tegak dalam satu langkah, tanpa menulis hipotenus secara berasingan. Ia merupakan pengiraan dua langkah yang sama seperti dalam bahagian sisi tegak, yang ditulis sebagai satu ungkapan.",
            },
            {
              "kind": "p",
              "text": "Semak dengan segi tiga 6-8-10. Sisi tegak memberikan [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm untuk hipotenus, dan membahagikannya kepada dua memberikan [[R = 5]] cm. Teorem Pythagoras membekalkan hipotenus, dan formula jejari lilitan membahagikannya kepada dua.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cara Mengesahkan Pengiraan Jejari Lilitan Anda",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat semakan bebas menangkap hampir setiap kesilapan. Jalankan sekurang-kurangnya satu pada setiap jawapan, dan keempat-empatnya apabila soalan itu penting. Contoh di bawah menggunakan segi tiga 6-8-10, dengan [[c = 10]] cm dan [[R = 5]] cm, sepanjang masa.",
            },
            {
              "kind": "h3",
              "text": "Semakan 1: Hubungan Diameter",
            },
            {
              "kind": "p",
              "text": "Gandakan jejari lilitan dan bandingkan dengan hipotenus: [[2R = c]]. Di sini [[2 \\times 5 = 10]] cm, yang tepat sama dengan c. Jika menggandakan jawapan anda tidak mengembalikan hipotenus, pembahagian kepada dua telah tersilap.",
            },
            {
              "kind": "h3",
              "text": "Semakan 2: Hubungan Titik Tengah",
            },
            {
              "kind": "p",
              "text": "Pusat lilitan mesti terletak di tengah-tengah sepanjang hipotenus. Ukur dari mana-mana hujung hipotenus ke pusat: setiap separuh mesti sama dengan [[R]]. Di sini setiap separuh ialah 5 cm, sama dengan jejari lilitan. Pusat yang bukan di titik tengah bukanlah pusat lilitan.",
            },
            {
              "kind": "h3",
              "text": "Semakan 3: Jarak yang Sama",
            },
            {
              "kind": "p",
              "text": "Sahkan [[OA = OB = OC = R]]. Pusat mesti sama jauh dari ketiga-tiga bucu. Dalam segi tiga 6-8-10, setiap jarak ialah 5 cm. Jika jarak ke bucu sudut tegak berbeza daripada jarak ke hujung hipotenus, pusat atau jejarinya salah.",
            },
            {
              "kind": "h3",
              "text": "Semakan 4: Teorem Pythagoras",
            },
            {
              "kind": "p",
              "text": "Apabila sisi tegak diketahui, sahkan [[a^2 + b^2 = c^2]] dan bandingkan hipotenus yang terhasil dengan [[2R]]. Di sini [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]], jadi [[c = 10]] cm, dan [[2R = 10]] cm bersetuju. Semakan ini menguji seluruh segi tiga, jadi ia menangkap kesilapan pelabelan yang mungkin terlepas oleh semakan pertama.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Sifat Penting Jejari Lilitan dalam Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Sembilan sifat mengikut secara langsung daripada [[R = \\frac{c}{2}]]. Setiap satunya juga berfungsi sebagai semakan kewajaran untuk jawapan baharu.",
            },
            {
              "kind": "list",
              "items": [
                "Jejari lilitan tepat separuh daripada hipotenus, [[R = \\frac{c}{2}]], tanpa sebarang anggaran.",
                "Hipotenus ialah diameter bulatan lilitan, jadi [[D = c]] dan [[c = 2R]].",
                "Pusat lilitan terletak di titik tengah hipotenus, pada sisi terpanjang segi tiga.",
                "Jejari lilitan sentiasa positif untuk segi tiga yang tidak merosot, kerana hipotenus ialah panjang yang positif.",
                "Jejari lilitan sama dengan separuh hipotenus, dan oleh sebab hipotenus ialah sisi terpanjang, jejari lilitan kurang daripada hipotenus. Sama ada ia lebih besar atau lebih kecil daripada sisi tegak tertentu bergantung pada segi tiga: dalam segi tiga 6-8-10, [[R = 5]] cm lebih kecil daripada sisi tegak 8 cm, manakala dalam segi tiga 5-12-13, [[R = 6.5]] cm lebih besar daripada sisi tegak 5 cm.",
                "Membesarkan hipotenus membesarkan jejari lilitan secara berkadar, kerana [[R]] ialah separuh daripada [[c]].",
                "Menggandakan hipotenus menggandakan jejari lilitan: jika [[c]] menjadi [[2c]], maka [[R]] menjadi [[c]].",
                "Sisi tegak tidak diperlukan apabila hipotenus sudah diketahui; formula hanya menggunakan [[c]] sahaja.",
                "Ketiga-tiga bucu sama jauh dari pusat lilitan, dengan [[AO = BO = CO = R]].",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Kesilapan Lazim Ketika Mengira Jejari Lilitan",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Memasukkan sisi tegak dan bukannya hipotenus: membahagikan sisi tegak kepada dua memberikan separuh sisi tegak, bukan jejari lilitan. Dalam segi tiga 6-8-10, membahagikan 6 cm kepada dua memberikan 3 cm, manakala jejari lilitan yang sebenar ialah 5 cm.",
                "Lupa membahagikan kepada dua: melaporkan hipotenus sebagai jawapan memberikan diameter, bukan jejari. Dengan [[c = 10]] cm, jawapannya ialah 5 cm, bukan 10 cm.",
                "Menganggap hipotenus sebagai jejari: ini ialah kesilapan yang sama dari arah yang bertentangan. Hipotenus merentangi lebar penuh bulatan, jadi ia ialah diameter, dan jejarinya ialah separuh daripadanya.",
                "Mengelirukan jejari lilitan dengan jejari dalaman: jejari dalaman segi tiga 6-8-10 ialah 2 cm, manakala jejari lilitannya ialah 5 cm. Kedua-dua bulatan itu berbeza, dan formulanya juga berbeza.",
                "Mengelirukan pusat lilitan dengan bucu sudut tegak: pusat lilitan ialah titik tengah hipotenus, bukan bucu C. Bucu C ialah titik pada bulatan, pada jarak [[R]] dari pusat.",
                "Menganggap pusat sentiasa berada di dalam segi tiga: dalam segi tiga bersudut tegak pusat lilitan terletak pada hipotenus, dan dalam segi tiga cakah ia terletak di luar. ",
                "Menggunakan formula pada segi tiga sewenang-wenangnya: [[R = \\frac{c}{2}]] hanya sah untuk segi tiga bersudut tegak. Untuk segi tiga umum, gunakan [[R = \\frac{abc}{4A}]], dengan [[A]] ialah luas.",
                "Mencampurkan unit ukuran: hipotenus dalam meter dan jawapan yang dilaporkan dalam sentimeter berbeza dengan faktor 100. Tukar dahulu, kemudian bahagikan kepada dua.",
                "Menggunakan nilai hipotenus sifar atau negatif: panjang tidak boleh sifar atau negatif dalam segi tiga sebenar. Input sifar atau negatif bermaksud ukuran itu salah.",
                "Mengelirukan diameter dengan jejari: diameter ialah dua kali jejari. Jika jawapan anda dua kali ganda nilai yang dijangkakan, anda mungkin melaporkan [[D]] dan bukannya [[R]].",
                "Menganggap bulatan lilitan menyentuh ketiga-tiga sisi: bulatan lilitan melalui bucu dan menyentuh segi tiga hanya pada tiga titik itu. Bulatan yang menyentuh sisi ialah bulatan dalaman.",
                "Lupa bahawa bulatan itu melalui ketiga-tiga bucu: ketiga-tiganya mesti terletak padanya, dan inilah yang dijamin oleh [[OA = OB = OC]].",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplikasi Praktikal Jejari Lilitan",
          "blocks": [
            {
              "kind": "p",
              "text": "Kegunaan yang paling langsung ialah kerja rumah geometri dan kerja bilik darjah, di mana soalan jejari lilitan menguji sama ada pelajar dapat mengenal pasti hipotenus dan menggunakan [[R = \\frac{c}{2}]] dan bukannya menggunakan formula yang lebih rumit. Latihan pembinaan bulatan menggunakan idea yang sama: diberi segi tiga bersudut tegak, lukis bulatan lilitannya dengan membahagikan hipotenus kepada dua dan menetapkan jangka lukis pada jejari itu.",
            },
            {
              "kind": "p",
              "text": "Lukisan teknikal menggunakan hubungan ini apabila segi tiga bersudut tegak mesti diletakkan di dalam bingkai bulat atau apabila lengkok bulat mesti melalui tiga titik yang diberikan. Pemodelan geometri dan geometri koordinat menggunakan fakta yang sama untuk meletakkan pusat lilitan segi tiga pada titik tengah hipotenusnya.",
            },
            {
              "kind": "p",
              "text": "Guru menggunakan topik ini sebagai pelajaran jambatan antara segi tiga dengan bulatan, kerana ia merupakan salah satu tempat pertama di mana kedua-dua subjek itu bertemu. Teorem Thales, sifat titik tengah, dan hubungan jejari-diameter semuanya muncul dalam satu gambar, jadi jejari lilitan ialah cara yang ringkas untuk mengulang kaji semuanya bersama-sama.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Soalan Latihan Berserta Jawapan",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuba keenam-enam soalan di atas kertas sebelum membaca jawapannya. Tiada satu pun nilai yang mengulangi contoh kerja, dan setiap penyelesaian dikerjakan sepenuhnya di bawah.",
            },
            {
              "kind": "h3",
              "text": "Soalan 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai hipotenus [[c = 26]] cm. Cari jejari lilitan [[R]].",
            },
            {
              "kind": "h3",
              "text": "Soalan 2: Hipotenus Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 9.4]] m, cari jejari lilitan [[R]] dalam meter.",
            },
            {
              "kind": "h3",
              "text": "Soalan 3: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = \\frac{9}{4}]] ft, cari [[R]] sebagai pecahan, kemudian sebagai perpuluhan.",
            },
            {
              "kind": "h3",
              "text": "Soalan 4: Penukaran Unit",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai hipotenus [[c = 240]] cm. Cari jejari lilitan dalam meter.",
            },
            {
              "kind": "h3",
              "text": "Soalan 5: Cari Hipotenus daripada Dua Sisi Tegak",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai sisi tegak [[a = 9]] cm dan [[b = 12]] cm. Cari hipotenus, kemudian jejari lilitan.",
            },
            {
              "kind": "h3",
              "text": "Soalan 6: Jejari Lilitan atau Jejari Dalaman?",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai sisi tegak 5 cm dan 12 cm serta hipotenus 13 cm. Cari kedua-dua jejari lilitan [[R]] dan jejari dalaman [[r]], dan nyatakan bulatan mana yang dipunyai oleh setiap satunya.",
            },
            {
              "kind": "h3",
              "text": "Jawapan Soalan Latihan",
            },
            {
              "kind": "p",
              "text": "Jawapan 1: [[R = \\frac{26}{2} = 13]] cm. Semakan: [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 2: [[R = \\frac{9.4}{2} = 4.7]] m. Semakan: [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Jawapan 3: [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, iaitu 1.125 ft. Membahagikan kepada 2 menggandakan penyebut dari 4 kepada 8.",
            },
            {
              "kind": "p",
              "text": "Jawapan 4: [[R = \\frac{240}{2} = 120]] cm, dan 120 cm sama dengan 1.2 m, kerana 100 cm ialah 1 m.",
            },
            {
              "kind": "p",
              "text": "Jawapan 5: [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, kemudian [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 6: Jejari lilitan dipunyai oleh bulatan lilitan, [[R = \\frac{13}{2} = 6.5]] cm, dan jejari dalaman dipunyai oleh bulatan dalaman, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Bulatan lilitan melalui bucu; bulatan dalaman menyentuh sisi.",
            },
          ],
        },
      },
      "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "relatedIntro": "Setiap kalkulator di bawah mengendalikan satu tugas segi tiga bersudut tegak yang khusus, jadi pilih alat yang sepadan dengan ukuran yang perlu anda cari.",
      "relatedItems": [
        "Kalkulator Jejari Segi Tiga Bersudut Tegak",
        "Kalkulator Jejari Dalaman Segi Tiga Bersudut Tegak",
        "Kalkulator Sisi Segi Tiga Bersudut Tegak",
        "Kalkulator Luas Segi Tiga Bersudut Tegak",
        "Kalkulator Teorem Pythagoras",
      ],
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "question": "Apakah formula jejari lilitan segi tiga bersudut tegak?",
          "answer": "Formulanya ialah [[R = \\frac{c}{2}]], dengan [[R]] ialah jejari lilitan dan [[c]] ialah hipotenus. Kenal pasti sisi yang bertentangan dengan sudut tegak, kemudian bahagikan panjangnya kepada dua. Sebagai contoh, hipotenus 10 cm memberikan jejari lilitan 5 cm.",
        },
        {
          "question": "Mengapakah hipotenus merupakan diameter bulatan lilitan?",
          "answer": "Titik tengah hipotenus sama jauh dari ketiga-tiga bucu, jadi ia ialah pusat lilitan. Hipotenus melalui pusat itu dengan kedua-dua hujung pada bulatan, dan itulah takrif diameter. Membahagikannya kepada dua oleh itu memberikan jejari.",
        },
        {
          "question": "Di manakah pusat lilitan segi tiga bersudut tegak?",
          "answer": "Pusat lilitan terletak di titik tengah hipotenus, pada sisi terpanjang segi tiga. Ia sama jauh dari ketiga-tiga bucu, dengan [[AO = BO = CO = R]]. Ia bukan bucu sudut tegak, yang merupakan titik pada bulatan.",
        },
        {
          "question": "Apakah maksud jejari lilitan?",
          "answer": "Jejari lilitan bermaksud jejari bulatan lilitan, iaitu bulatan yang melalui ketiga-tiga bucu segi tiga. Ia ialah jarak dari pusat lilitan ke mana-mana bucu. Dalam segi tiga bersudut tegak ia sama dengan separuh hipotenus.",
        },
        {
          "question": "Adakah saya memerlukan kedua-dua sisi tegak untuk mengira jejari lilitan?",
          "answer": "Tidak. Hipotenus sahaja sudah cukup, kerana [[R = \\frac{c}{2}]]. Sisi tegak diperlukan hanya apabila hipotenus tidak diketahui, dan dalam kes itu carilah dahulu dengan [[c = \\sqrt{a^2 + b^2}]] kemudian bahagikannya kepada dua. Itulah sebabnya kalkulator ini hanya meminta satu nilai, dan ia memastikan setiap pengiraan ringkas dan mudah.",
        },
        {
          "question": "Adakah jejari lilitan separuh daripada hipotenus?",
          "answer": "Ya, sentiasa, untuk segi tiga bersudut tegak. Hipotenus ialah diameter bulatan lilitan, dan jejari ialah separuh diameter, jadi [[R = \\frac{c}{2}]]. Menggandakan jejari lilitan sentiasa mengembalikan hipotenus. Sebagai contoh, hipotenus 14 cm memberikan jejari lilitan 7 cm, dan menggandakan 7 cm mengembalikan 14 cm.",
        },
        {
          "question": "Adakah jejari lilitan sama dengan jejari dalaman?",
          "answer": "Tidak. Jejari lilitan ialah jejari bulatan yang melalui bucu, [[R = \\frac{c}{2}]], manakala jejari dalaman ialah jejari bulatan di dalam segi tiga yang menyentuh sisinya, [[r = \\frac{a + b - c}{2}]]. Dalam segi tiga 6-8-10 nilainya ialah 5 cm dan 2 cm.",
        },
        {
          "question": "Bolehkah pusat lilitan terletak di luar segi tiga?",
          "answer": "Ya, untuk segi tiga cakah pusat lilitan terletak di luar. Untuk segi tiga tirus ia terletak di dalam. Segi tiga bersudut tegak ialah kes sempadan: pusat lilitannya terletak pada hipotenus, tepat di titik tengahnya. Jadi pusat itu tidak pernah berada di dalam kawasan segi tiga bersudut tegak, tetapi ia juga tidak pernah berada di luar segi tiga itu.",
        },
        {
          "question": "Bagaimanakah Teorem Thales berkait dengan jejari lilitan?",
          "answer": "Teorem Thales menyatakan sudut yang dicangkum oleh diameter ialah sudut tegak, dan akasannya menyatakan hipotenus segi tiga bersudut tegak ialah diameter. Ini menjadikan titik tengah hipotenus sebagai pusat dan separuh hipotenus sebagai jejari.",
        },
        {
          "question": "Bolehkah saya mencari jejari lilitan menggunakan dua sisi tegak?",
          "answer": "Ya. Mula-mula cari hipotenus dengan [[c = \\sqrt{a^2 + b^2}]], kemudian bahagikannya kepada dua: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Untuk sisi tegak 6 cm dan 8 cm, hipotenusnya ialah 10 cm dan jejari lilitannya ialah 5 cm. Gunakan dua langkah yang sama untuk mana-mana pasangan sisi tegak, dan semak hasilnya dengan ujian diameter.",
        },
        {
          "question": "Apakah yang berlaku jika hipotenus digandakan?",
          "answer": "Jejari lilitan turut digandakan, kerana [[R]] ialah separuh daripada [[c]]. Jika hipotenus 10 cm memberikan [[R = 5]] cm, hipotenus 20 cm memberikan [[R = 10]] cm. Hubungannya berkadar terus, jadi menggandakan hipotenus tiga kali ganda turut menggandakan jejari lilitan tiga kali ganda.",
        },
        {
          "question": "Adakah bulatan lilitan melalui ketiga-tiga bucu?",
          "answer": "Ya. Itulah takrif bulatan lilitan: bulatan yang melalui setiap bucu segi tiga. Dalam segi tiga bersudut tegak, pusatnya ialah titik tengah hipotenus dan setiap bucu terletak tepat [[R]] jauh daripadanya.",
        },
      ],
    },
};
