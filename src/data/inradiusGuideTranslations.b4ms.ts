// inradiusGuideTranslations.bms.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B4_MS = {
  "ms": {
      "meta": {
        "title": "Kalkulator Jejari Dalaman Segi Tiga Bersudut Tegak - Cari r dari Sisi",
        "description": "Gunakan kalkulator jejari dalaman segi tiga bersudut tegak untuk mencari r daripada sisi tegak a dan b serta hipotenus c, dengan formula, contoh kerja 6-8-10, dan semakan langkah demi langkah.",
        "primaryKeyword": "Kalkulator Jejari Dalaman Segi Tiga Bersudut Tegak",
        "slug": "right-triangle-inradius-calculator",
      },
      "tocHeading": "Kandungan Panduan",
      "tocItems": {
        "sec-intro": "Kalkulator Jejari Dalaman Segi Tiga Bersudut Tegak",
        "sec-calculate": "Mengira Jejari Dalaman Segi Tiga Bersudut Tegak",
        "sec-what-inradius": "Apakah Jejari Dalaman Segi Tiga Bersudut Tegak?",
        "sec-incircle": "Apakah Bulatan Dalaman dalam Geometri Segi Tiga Bersudut Tegak?",
        "sec-incenter": "Memahami Pusat Dalaman Segi Tiga Bersudut Tegak",
        "sec-formula": "Formula Jejari Dalaman Segi Tiga Bersudut Tegak",
        "sec-why-formula-works": "Mengapakah Formula Jejari Dalaman Segi Tiga Bersudut Tegak Berfungsi?",
        "sec-how-to-use": "Cara Menggunakan Kalkulator Jejari Dalaman Segi Tiga Bersudut Tegak",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Jejari Dalaman",
        "sec-diagram": "Gambar Rajah Bulatan Dalaman Segi Tiga Bersudut Tegak Diterangkan",
        "sec-area-semiperimeter": "Cara Mengira Jejari Dalaman Menggunakan Luas dan Semiperimeter",
        "sec-semiperimeter-relation": "Hubungan Antara Jejari Dalaman dengan Semiperimeter",
        "sec-examples": "Contoh Kerja Mengira Jejari Dalaman Segi Tiga Bersudut Tegak",
        "sec-legs-known": "Cara Mengira Jejari Dalaman Apabila Hanya Dua Sisi Tegak Diketahui",
        "sec-vs-circumradius": "Hubungan Antara Jejari Dalaman dengan Jejari Lilitan",
        "sec-verify": "Cara Mengesahkan Pengiraan Jejari Dalaman Anda",
        "sec-properties": "Sifat Penting Jejari Dalaman dalam Segi Tiga Bersudut Tegak",
        "sec-mistakes": "Kesilapan Lazim Ketika Mengira Jejari Dalaman",
        "sec-applications": "Aplikasi Praktikal Jejari Dalaman Segi Tiga Bersudut Tegak",
        "sec-practice": "Soalan Latihan Berserta Jawapan",
        "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
        "sec-faq": "Soalan Lazim",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Jejari Dalaman Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Cari jejari dalaman segi tiga bersudut tegak daripada dua sisi tegak dan hipotenusnya.",
            },
            {
              "kind": "p",
              "text": "Jejari dalaman ialah jejari bulatan dalaman, iaitu bulatan yang muat di dalam segi tiga dan menyentuh ketiga-tiga sisinya. Kalkulator ini memerlukan tiga nombor: sisi tegak [[a]], sisi tegak [[b]], dan hipotenus [[c]], dengan [[a]] dan [[b]] ialah sisi yang membentuk sudut tegak dan [[c]] ialah sisi yang bertentangan dengannya. Formulanya ialah [[r = \\frac{a+b-c}{2}]], dengan [[r]] ialah jejari dalaman. Ia menambah dua sisi tegak, menolak hipotenus, dan membahagikan hasilnya kepada dua.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, segi tiga 6-8-10 memberikan [[r = \\frac{6+8-10}{2} = 2]]. Nilai 2 itu ialah jejari bulatan di dalam segi tiga, diukur dalam unit yang sama dengan sisinya. Bulatan itu menyentuh setiap sisi pada tepat satu titik, dan pusatnya, iaitu pusat dalaman, terletak pada jarak yang sama dari ketiga-tiga sisi.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Mengira Jejari Dalaman Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator pada halaman ini mempunyai tiga medan input, satu untuk setiap sisi segi tiga, dan satu hasil. Masukkan ketiga-tiga panjang sisi, semuanya dalam unit yang sama, kemudian klik Calculate Inradius r. Hasilnya ialah panjang, iaitu jejari bulatan dalaman, yang diberikan dalam unit yang sama.",
            },
            {
              "kind": "p",
              "text": "Sisi tegak a ialah sisi pertama yang membentuk sudut tegak, dan sisi tegak b ialah sisi kedua. Tidak kira sisi tegak mana yang anda panggil [[a]] dan yang mana anda panggil [[b]], kerana formula itu menambah kedua-duanya. Hipotenus [[c]] ialah sisi yang bertentangan dengan sudut tegak, dan ia mestilah sisi terpanjang segi tiga. Jika nombor yang dimasukkan untuk [[c]] lebih pendek daripada sisi tegak, ketiga-tiga panjang itu tidak boleh membentuk segi tiga bersudut tegak, dan hasilnya tidak bermakna.",
            },
            {
              "kind": "p",
              "text": "Kekalkan unit yang sama merentasi ketiga-tiga medan. Jika [[a]] dan [[b]] dalam sentimeter, [[c]] juga mestilah dalam sentimeter, dan jawapannya keluar dalam sentimeter. Baca jawapan itu sebagai jejari, bukan diameter: jejari bermula dari pusat bulatan ke tepinya, manakala diameter merentasi seluruh bulatan. Gunakan Reset untuk mengosongkan medan sebelum memulakan soalan baharu.",
            },
          ],
        },
        "sec-what-inradius": {
          "h2": "Apakah Jejari Dalaman Segi Tiga Bersudut Tegak?",
          "blocks": [
            {
              "kind": "p",
              "text": "Jejari dalaman segi tiga bersudut tegak ialah jejari bulatan dalamannya, iaitu bulatan terbesar yang muat di dalam segi tiga. Bayangkan segi tiga ABC dengan sudut tegak di C, sisi tegak AC dipanggil [[a]], sisi tegak BC dipanggil [[b]], dan hipotenus AB dipanggil [[c]]. Sekarang lukis bulatan terbesar yang boleh anda lukis di dalam segi tiga itu tanpa melintasi mana-mana sisi. Bulatan itu menyentuh ketiga-tiga sisi, dan jejarinya ialah jejari dalaman, yang ditulis [[r]].",
            },
            {
              "kind": "p",
              "text": "Pusat bulatan dalaman dipanggil pusat dalaman, yang ditulis [[I]]. Pusat dalaman terletak pada jarak serenjang yang sama dari ketiga-tiga sisi, dan jarak itu ialah [[r]]. Setiap jejari yang dilukis dari [[I]] ke satu sisi bertemu sisi itu pada sudut tegak, dan itulah sebabnya bulatan itu hanya menyentuh sisi itu dan bukannya melintasinya. Bulatan dalaman kekal di dalam segi tiga kerana setiap titik bulatan itu berada pada jarak [[r]] atau kurang dari [[I]], dan [[I]] sendiri berada di dalam segi tiga.",
            },
            {
              "kind": "p",
              "text": "Contoh kecil menjadikan idea ini jelas. Dalam segi tiga 3-4-5, jejari dalamannya ialah [[r = \\frac{3+4-5}{2} = 1]]. Bulatan dalaman mempunyai jejari 1 unit, jadi pusatnya terletak 1 unit dari setiap sisi. <a href=\"/right-triangle-radius-calculator/\">Kalkulator jejari segi tiga bersudut tegak</a> merangkumi kedua-dua jejari segi tiga bersudut tegak dalam satu halaman, jika anda ingin membandingkan bulatan dalaman dengan bulatan yang melalui bucu.",
            },
          ],
          "image": {
            "src": "inradius-main-incircle.svg",
            "alt": "Segi tiga bersudut tegak ABC dengan bulatan dalaman di dalamnya, pusat I, dan jejari r menyentuh ketiga-tiga sisi",
            "caption": "Segi tiga ABC dengan bulatan dalamannya: pusat I terletak pada jarak r dari setiap sisi.",
          },
        },
        "sec-incircle": {
          "h2": "Apakah Bulatan Dalaman dalam Geometri Segi Tiga Bersudut Tegak?",
          "blocks": [
            {
              "kind": "p",
              "text": "Bulatan dalaman ialah bulatan yang dilukis sepenuhnya di dalam segi tiga supaya ia menyentuh, atau bertangen dengan, ketiga-tiga sisinya. Setiap sisi segi tiga ialah garis tangen kepada bulatan itu: ia bertemu bulatan itu pada tepat satu titik dan tidak memotongnya. Ketiga-tiga titik pertemuan itu dipanggil titik singgung, satu pada setiap sisi.",
            },
            {
              "kind": "p",
              "text": "Jejari yang dilukis dari pusat dalaman ke titik singgung sentiasa serenjang dengan sisi itu. Ini ialah fakta umum tentang bulatan: jejari ke titik singgung bertemu garis tangen pada sudut tegak. Oleh sebab pusat dalaman berada pada jarak yang sama dari ketiga-tiga sisi, ketiga-tiga jejari ke ketiga-tiga titik singgung semuanya mempunyai panjang yang sama [[r]], jadi satu bulatan sahaja muat pada ketiga-tiga sisi sekaligus.",
            },
            {
              "kind": "p",
              "text": "Setiap segi tiga mempunyai tepat satu bulatan dalaman. Ketiga-tiga pembahagi dua sama sudut segi tiga bertemu pada satu titik, iaitu pusat dalaman, dan jarak dari titik itu ke sisi-sisi menetapkan jejari. Bulatan kedua yang berbeza tidak boleh menyentuh ketiga-tiga sisi dari dalam, kerana pusatnya juga perlu sama jauh dari ketiga-tiga sisi, dan hanya pusat dalaman yang mempunyai sifat itu. Perhatikan bahawa bulatan dalaman bukan bulatan yang melalui bucu: ia menyentuh sisi dari dalam dan tidak pernah sampai ke bucu.",
            },
          ],
          "image": {
            "src": "inradius-tangency-points.svg",
            "alt": "Bulatan dalaman menyentuh ketiga-tiga sisi segi tiga bersudut tegak pada tiga titik singgung dengan jejari serenjang",
            "caption": "Tiga titik singgung: setiap jejari bertemu sisinya pada 90 darjah.",
          },
        },
        "sec-incenter": {
          "h2": "Memahami Pusat Dalaman Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Pusat dalaman segi tiga ialah titik di mana ketiga-tiga pembahagi dua sama sudut dalamannya bertemu. Pembahagi dua sama sudut ialah garis yang membahagikan sudut kepada dua bahagian yang sama. Lukis pembahagi dua sama sudut A, pembahagi dua sama sudut B, dan pembahagi dua sama sudut C, dan ketiga-tiganya bersilang pada satu titik. Titik itu ialah pusat dalaman [[I]], dan ia merupakan pusat bulatan dalaman.",
            },
            {
              "kind": "p",
              "text": "Pusat dalaman sama jauh dari ketiga-tiga sisi kerana sifat pembahagi dua sama sudut. Setiap titik pada pembahagi dua sama sudut berada pada jarak yang sama dari dua sisi yang membentuk sudut itu. Titik yang terletak pada dua pembahagi dua sama sekaligus oleh itu sama jauh dari ketiga-tiga sisi, dan pusat dalaman terletak pada ketiga-tiga pembahagi dua sama itu. Jarak sepunya itu ialah jejari dalaman [[r]], jadi bulatan yang berpusat di [[I]] dengan jejari [[r]] menyentuh setiap sisi.",
            },
            {
              "kind": "p",
              "text": "Bagi segi tiga bersudut tegak dengan sudut tegak di C, pusat dalaman terletak di sepanjang pembahagi dua sama sudut 90 darjah, yang merentasi penjuru di C secara menyerong pada 45 darjah kepada setiap sisi tegak. Pusat dalaman sentiasa terletak di dalam segi tiga, tidak pernah pada sisi atau di luarnya, kerana ketiga-tiga pembahagi dua sama itu bertemu di bahagian dalam. Itulah sebabnya bulatan dalaman muat di dalam segi tiga dan bukannya terkeluar daripadanya.",
            },
          ],
          "image": {
            "src": "inradius-angle-bisectors.svg",
            "alt": "Segi tiga bersudut tegak dengan ketiga-tiga pembahagi dua sama sudut dalaman bertemu di pusat dalaman I",
            "caption": "Ketiga-tiga pembahagi dua sama sudut bertemu di I, pusat dalaman, pada jarak r dari setiap sisi.",
          },
        },
        "sec-formula": {
          "h2": "Formula Jejari Dalaman Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Formula jejari dalaman segi tiga bersudut tegak cukup pendek untuk diingati sepintas lalu:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[r]] ialah jejari dalaman, [[a]] ialah sisi tegak pertama, [[b]] ialah sisi tegak kedua, dan [[c]] ialah hipotenus. Formula ini berfungsi dalam tiga peringkat, dan setiap peringkat mempunyai makna yang jelas.",
            },
            {
              "kind": "p",
              "text": "Peringkat 1: tambahkan dua sisi tegak, [[a+b]]. Panjang gabungan ini sentiasa lebih panjang daripada hipotenus, kerana dua sisi tegak bersama-sama merentang lebih jauh daripada garis lurus merentasinya. Peringkat 2: tolak hipotenus, [[a+b-c]]. Ini meninggalkan jumlah yang mana sisi tegak melebihi hipotenus. Peringkat 3: bahagikan kepada dua, [[r = \\frac{a+b-c}{2}]]. Pembahagian itu menukar lebihan panjang itu menjadi jejari bulatan dalaman, dan bahagian terbitan di bawah menunjukkan mengapa membahagikan kepada dua adalah tepat.",
            },
            {
              "kind": "p",
              "text": "Ambil segi tiga 6-8-10: [[a+b = 14]], kemudian [[14-10 = 4]], kemudian [[\\frac{4}{2} = 2]], jadi [[r = 2]]. Formula ini khusus untuk segi tiga bersudut tegak. Bagi segi tiga yang bukan bersudut tegak, jejari dalaman masih sama dengan luas dibahagikan dengan semiperimeter, [[r = \\frac{A}{s}]], tetapi jalan pintas [[r = \\frac{a+b-c}{2}]] tidak terpakai, kerana buktinya bergantung pada sudut tegak.",
            },
          ],
          "image": {
            "src": "inradius-formula.svg",
            "alt": "Segi tiga bersudut tegak dilabel dengan sisi tegak a dan b, hipotenus c, pusat dalaman I, dan jejari dalaman r di samping formula r sama dengan a tambah b tolak c bahagi 2",
            "caption": "Formula ini menggunakan ketiga-tiga sisi: tambahkan sisi tegak, tolak hipotenus, bahagikan kepada dua.",
          },
        },
        "sec-why-formula-works": {
          "h2": "Mengapakah Formula Jejari Dalaman Segi Tiga Bersudut Tegak Berfungsi?",
          "blocks": [
            {
              "kind": "p",
              "text": "Formula ini datang daripada fakta mudah tentang tangen: dua segmen tangen yang dilukis dari titik yang sama di luar bulatan ke bulatan itu mempunyai panjang yang sama. Setiap bucu segi tiga terletak di luar bulatan dalaman, dan dua sisi yang bertemu di bucu itu kedua-duanya bertangen dengan bulatan. Jadi dua segmen tangen dari setiap bucu adalah sama panjang.",
            },
            {
              "kind": "p",
              "text": "Mulakan di bucu sudut tegak C. Dua sisi yang bertemu di C ialah sisi tegak, dan bulatan dalaman menyentuh setiap sisi tegak pada titik yang berjarak [[r]] dari C sepanjang sisi itu. Ini kerana dua jejari dari pusat dalaman ke sisi tegak, bersama-sama dengan dua segmen pendek sepanjang sisi tegak, membentuk segi empat sama dengan sisi [[r]] di penjuru C. Jadi segmen tangen dari C sepanjang mana-mana sisi tegak mempunyai panjang [[r]].",
            },
            {
              "kind": "p",
              "text": "Sekarang lihat dua bucu yang lain. Biarkan [[x]] menjadi panjang tangen dari bucu A sepanjang sisi, dan biarkan [[y]] menjadi panjang tangen dari bucu B. Di bucu A, satu tangen merentasi sisi tegak [[a]] ke arah C dan satu lagi merentasi hipotenus ke arah B, jadi kedua-duanya mempunyai panjang [[x]]. Di bucu B, kedua-dua tangen mempunyai panjang [[y]]. Panjang sisi kemudiannya dibina daripada bahagian-bahagian ini:",
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
              "text": "Tambahkan dua persamaan pertama: [[a+b = 2r+x+y]]. Oleh sebab [[x+y = c]], ini menjadi [[a+b = 2r+c]]. Menyusun semula memberikan [[2r = a+b-c]], dan membahagikan kepada dua memberikan formula, [[r = \\frac{a+b-c}{2}]]. Setiap langkah mengikut daripada panjang tangen yang sama, jadi formula ini bukan helah untuk dihafal, ia merupakan hasil langsung daripada cara bulatan dalaman menyentuh sisi.",
            },
          ],
        },
        "sec-how-to-use": {
          "h2": "Cara Menggunakan Kalkulator Jejari Dalaman Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat belas langkah pendek membawa anda dari segi tiga berlabel kepada jawapan yang telah disemak. Langkah-langkah mengikut urutan ialah:",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenal pasti segi tiga bersudut tegak dalam soalan anda dan pastikan ia mempunyai sudut tegak.",
                "Cari bucu sudut tegak itu, yang biasanya ditandakan dengan segi empat kecil, dan panggilnya C.",
                "Kenal pasti sisi tegak pertama a, salah satu daripada dua sisi yang membentuk sudut tegak.",
                "Kenal pasti sisi tegak kedua b, sisi lain yang membentuk sudut tegak.",
                "Kenal pasti hipotenus lengkap c, sisi yang bertentangan dengan sudut tegak.",
                "Pastikan c ialah sisi terpanjang. Jika tidak, labelkan semula gambar rajah itu sebelum meneruskan.",
                "Semak bahawa ketiga-tiga sisi memenuhi Teorem Pythagoras, [[a^2+b^2 = c^2]].",
                "Pilih unit ukuran yang serasi dan tukar mana-mana ukuran yang menggunakan unit berbeza.",
                "Masukkan sisi tegak a dalam medan Leg a.",
                "Masukkan sisi tegak b dalam medan Leg b.",
                "Masukkan hipotenus c dalam medan Hypotenuse c.",
                "Klik Calculate Inradius r dan baca hasilnya.",
                "Semak hasilnya: ia mesti positif, dalam unit yang sama dengan sisi, dan lebih kecil daripada mana-mana sisi tegak.",
                "Gunakan Reset apabila memulakan pengiraan lain.",
              ],
            },
            {
              "kind": "p",
              "text": "Memasukkan sisi yang salah sebagai [[c]] ialah kesilapan yang paling banyak menimbulkan masalah. Jika sisi tegak dimasukkan dalam medan hipotenus, formula itu menolak sisi tegak dan bukannya hipotenus, dan jawapannya terlalu besar. Sentiasa semak bahawa nilai dalam medan hipotenus ialah yang terpanjang daripada ketiga-tiganya sebelum mengklik Calculate.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Contoh Langkah demi Langkah Mencari Jejari Dalaman",
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan contoh dari bahagian atas halaman ini, [[a = 6]], [[b = 8]], dan [[c = 10]]. Lima langkah di bawah menunjukkan kerja penuh, tanpa apa-apa yang dilangkau.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis formula: [[r = \\frac{a+b-c}{2}]].",
                "Gantikan nilai: [[r = \\frac{6+8-10}{2}]].",
                "Tambahkan sisi tegak: [[r = \\frac{14-10}{2}]].",
                "Tolak hipotenus: [[r = \\frac{4}{2}]].",
                "Bahagikan: [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "Jawapan 2 bermaksud bulatan dalaman mempunyai jejari 2 unit, dalam unit yang sama dengan sisi. Pusatnya terletak 2 unit dari setiap sisi, dan bulatan itu menyentuh setiap sisi pada tepat satu titik.",
            },
            {
              "kind": "p",
              "text": "Sahkan bahawa ukuran itu membentuk segi tiga bersudut tegak sebelum mempercayai jawapannya: [[6^2+8^2 = 36+64 = 100 = 10^2]], jadi Teorem Pythagoras dipenuhi dan segi tiga itu benar-benar bersudut tegak. Semakan kedua menggunakan luas dan semiperimeter, [[A = \\frac{6 \\times 8}{2} = 24]] dan [[s = \\frac{6+8+10}{2} = 12]], memberikan [[r = \\frac{24}{12} = 2]], jawapan yang sama melalui laluan berbeza.",
            },
          ],
          "image": {
            "src": "inradius-example-6-8-10.svg",
            "alt": "Contoh kerja dengan a sama dengan 6, b sama dengan 8, c sama dengan 10, dan jejari dalaman r sama dengan 2, bulatan dalaman menyentuh ketiga-tiga sisi",
            "caption": "Contoh kerja: a = 6, b = 8, c = 10 memberikan r = 2, disemak dengan luas dan semiperimeter.",
          },
        },
        "sec-diagram": {
          "h2": "Gambar Rajah Bulatan Dalaman Segi Tiga Bersudut Tegak Diterangkan",
          "blocks": [
            {
              "kind": "p",
              "text": "Gambar rajah menunjukkan segi tiga ABC dengan sudut tegak di C. Sisi AC ialah sisi tegak [[a]], sisi BC ialah sisi tegak [[b]], dan sisi AB ialah hipotenus [[c]]. Titik [[I]] menandakan pusat dalaman di dalam segi tiga, dan bulatan yang berpusat di [[I]] menyentuh ketiga-tiga sisi.",
            },
            {
              "kind": "p",
              "text": "Baca gambar rajah ini mengikut urutan ini. Mulakan di A, ikut sisi tegak [[a]] ke bawah ke C, kemudian ikut sisi tegak [[b]] merentasi ke B, kemudian kembali sepanjang hipotenus dari B ke A. Bulatan dalaman terletak di dalam sempadan ini, menyentuh sisi tegak [[a]] pada satu titik, sisi tegak [[b]] pada titik kedua, dan hipotenus pada titik ketiga. Dari [[I]], tiga segmen pendek merentasi ke tiga titik itu, dan setiap satunya ialah jejari dengan panjang [[r]].",
            },
            {
              "kind": "p",
              "text": "Setiap jejari bertemu sisinya pada sudut tegak, yang merupakan tanda tangen: sisi itu hanya menyentuh bulatan pada titik itu dan bukannya memotongnya. Ketiga-tiga jejari mempunyai panjang yang sama, dan itulah sebabnya satu bulatan boleh menyentuh ketiga-tiga sisi sekaligus. Bulatan itu tidak melalui mana-mana bucu: bucu-bucu terletak di luar bulatan, dan segmen tangen dari setiap bucu ke bulatan ialah panjang [[r]], [[x]], dan [[y]] yang digunakan dalam terbitan di atas.",
            },
          ],
        },
        "sec-area-semiperimeter": {
          "h2": "Cara Mengira Jejari Dalaman Menggunakan Luas dan Semiperimeter",
          "blocks": [
            {
              "kind": "p",
              "text": "Ada cara kedua untuk mencari jejari dalaman, menggunakan luas dan semiperimeter segi tiga:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[A]] ialah luas segi tiga dan [[s]] ialah semiperimeter, iaitu separuh daripada perimeter. Bagi segi tiga bersudut tegak, luasnya ialah separuh daripada hasil darab sisi tegak, [[A = \\frac{ab}{2}]], kerana dua sisi tegak bertindak sebagai tapak dan tinggi. Semiperimeternya ialah [[s = \\frac{a+b+c}{2}]]. <a href=\"/right-triangle-area-calculator/\">Kalkulator luas segi tiga bersudut tegak</a> mencari [[A]] daripada dua sisi tegak, dan <a href=\"/right-triangle-semiperimeter-calculator/\">kalkulator semiperimeter segi tiga bersudut tegak</a> mencari [[s]] daripada ketiga-tiga sisi.",
            },
            {
              "kind": "p",
              "text": "Menggantikan ungkapan segi tiga bersudut tegak memberikan [[r = \\frac{ab/2}{(a+b+c)/2}]], dan bahagian separuh itu membatalkan satu sama lain lalu meninggalkan [[r = \\frac{ab}{a+b+c}]]. Ini ialah formula sisi yang setara dari permulaan panduan ini, dan ia memberikan jawapan yang sama seperti [[r = \\frac{a+b-c}{2}]] untuk setiap segi tiga bersudut tegak yang sah, kerana kedua-dua ungkapan itu sama apabila [[a^2+b^2 = c^2]].",
            },
            {
              "kind": "p",
              "text": "Gunakan segi tiga 6-8-10 untuk melihat kedua-dua laluan bersetuju. Luasnya ialah [[A = \\frac{6 \\times 8}{2} = 24]], dan semiperimeternya ialah [[s = \\frac{6+8+10}{2} = 12]], jadi [[r = \\frac{24}{12} = 2]]. Formula piawai memberikan hasil yang sama, [[r = \\frac{6+8-10}{2} = 2]]. Kalkulator pada halaman ini menggunakan formula tiga sisi, dan laluan luas ialah semakan bebas yang berguna.",
            },
          ],
          "image": {
            "src": "inradius-area-semiperimeter.svg",
            "alt": "Segi tiga bersudut tegak dibahagikan kepada tiga segi tiga yang lebih kecil yang berkongsi pusat dalaman, menunjukkan luas sama dengan r darab s",
            "caption": "Tiga segi tiga berkongsi I: luasnya bertambah kepada A = r darab s.",
          },
        },
        "sec-semiperimeter-relation": {
          "h2": "Hubungan Antara Jejari Dalaman dengan Semiperimeter",
          "blocks": [
            {
              "kind": "p",
              "text": "Semiperimeter [[s]] ialah separuh daripada perimeter segi tiga:",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ia dipanggil semiperimeter kerana semi bermaksud separuh: perimeter penuh ialah [[P = a+b+c]], dan semiperimeter ialah separuh daripadanya. Jangan kelirukan kedua-duanya. Perimeter ialah jumlah panjang mengelilingi segi tiga, manakala semiperimeter ialah nilai pembantu yang lebih pendek yang muncul dalam formula luas dan dalam formula jejari dalaman [[r = \\frac{A}{s}]].",
            },
            {
              "kind": "p",
              "text": "Semiperimeter sahaja tidak dapat menentukan jejari dalaman, kerana formula [[r = \\frac{A}{s}]] juga memerlukan luas [[A]]. Dua segi tiga boleh berkongsi semiperimeter yang sama dan mempunyai luas yang berbeza, dan kemudian jejari dalaman mereka juga berbeza. Luas membawa maklumat tentang bentuk yang ditinggalkan oleh semiperimeter. Bagi segi tiga 6-8-10, [[s = 12]] dan [[A = 24]], jadi [[r = \\frac{24}{12} = 2]]. Segi tiga berbeza dengan [[s = 12]] tetapi luas yang lebih kecil akan mempunyai jejari dalaman yang lebih kecil.",
            },
            {
              "kind": "p",
              "text": "Ada cara yang kemas untuk melihat mengapa [[A = rs]] benar. Sambungkan pusat dalaman [[I]] ke ketiga-tiga bucu, membahagikan segi tiga kepada tiga segi tiga yang lebih kecil. Setiap segi tiga kecil mempunyai tinggi [[r]] dan tapak yang sama dengan satu sisi segi tiga besar, jadi luasnya ialah [[\\frac{ra}{2}]], [[\\frac{rb}{2}]], dan [[\\frac{rc}{2}]]. Menambahkannya memberikan [[A = \\frac{r(a+b+c)}{2} = r \\times s]], kerana [[s = \\frac{a+b+c}{2}]]. Membahagikan dengan [[s]] memberikan [[r = \\frac{A}{s}]].",
            },
          ],
        },
        "sec-examples": {
          "h2": "Contoh Kerja Mengira Jejari Dalaman Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "h3",
              "text": "Contoh 1: Segi Tiga 3-4-5 Asas",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 3]], [[b = 4]], dan [[c = 5]], formula memberikan [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]]. Bulatan dalaman mempunyai jejari 1 unit. Semak segi tiga itu dahulu: [[3^2+4^2 = 9+16 = 25 = 5^2]], jadi ia merupakan segi tiga bersudut tegak yang sah.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Segi Tiga 6-8-10 yang Sedia Ada",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 6]], [[b = 8]], dan [[c = 10]], [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. Bulatan dalaman mempunyai jejari 2 unit, dua kali ganda jejari segi tiga 3-4-5, kerana segi tiga ini ialah segi tiga 3-4-5 yang diskalakan dengan faktor 2. Semakan: [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Segi Tiga 5-12-13",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 5]], [[b = 12]], dan [[c = 13]], [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. Jejari dalamannya ialah 2 unit, sama seperti segi tiga 6-8-10, walaupun segi tiga itu lebih besar dan berbeza bentuknya. Semakan: [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Segi Tiga 8-15-17",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 8]], [[b = 15]], dan [[c = 17]], [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. Bulatan dalaman mempunyai jejari 3 unit. Semakan: [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 9]], [[b = 12]], dan [[c = 15]], [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. Ini ialah segi tiga 3-4-5 yang diskalakan dengan 3, jadi jejari dalamannya ialah 3 kali ganda jejari dalaman 3-4-5 iaitu 1. Semakan: [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 4.5]], [[b = 6]], dan [[c = 7.5]], [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. Jejari dalamannya ialah 1.5 unit. Perpuluhan tidak mengubah apa-apa tentang kaedahnya: tambah, tolak, bahagikan kepada dua. Semakan: [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Unit yang Berbeza",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 30]] cm, [[b = 40]] cm, dan [[c = 0.5]] m, tukar hipotenus dahulu: 0.5 m sama dengan 50 cm, kerana 1 m ialah 100 cm. Sekarang ketiga-tiga sisi menggunakan sentimeter, jadi [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm. Semakan: [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Mencampurkan meter dengan sentimeter tanpa menukar dahulu akan memberikan jawapan yang salah, jadi sentiasa tukar dahulu.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Nilai Perpuluhan yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 7.2]], [[b = 9.6]], dan [[c = 12]], [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. Jejari dalamannya ialah 2.4 unit. Ini ialah segi tiga 3-4-5 yang diskalakan dengan 2.4, jadi jejari dalamannya ialah 2.4 kali ganda jejari dalaman 3-4-5 iaitu 1. Semakan: [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Cara Mengira Jejari Dalaman Apabila Hanya Dua Sisi Tegak Diketahui",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator pada halaman ini memerlukan ketiga-tiga panjang sisi, jadi ia tidak boleh berfungsi dengan dua sisi tegak sahaja. Jika hanya [[a]] dan [[b]] diketahui, cari hipotenus dahulu dengan Teorem Pythagoras, kemudian gunakan formula jejari dalaman. Dua langkah itu ialah:",
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
              "text": "Gunakan [[a = 6]] dan [[b = 8]]. Mula-mula kira hipotenus: [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Kemudian kira jejari dalaman: [[r = \\frac{6+8-10}{2} = 2]]. <a href=\"/right-triangle-side-calculator/\">Kalkulator sisi segi tiga bersudut tegak</a> mencari hipotenus yang tiada daripada dua sisi tegak, iaitu langkah pertama yang sama yang digunakan di sini, dan <a href=\"/pythagorean-theorem-calculator/\">kalkulator Teorem Pythagoras</a> melakukan pengiraan yang sama secara langsung. Jangan langkau langkah pertama: memasukkan sisi tegak dalam medan hipotenus memberikan jejari dalaman yang salah, seperti yang ditunjukkan oleh bahagian kesilapan di bawah.",
            },
          ],
        },
        "sec-vs-circumradius": {
          "h2": "Hubungan Antara Jejari Dalaman dengan Jejari Lilitan",
          "blocks": [
            {
              "kind": "p",
              "text": "Jejari dalaman [[r]] dan jejari lilitan [[R]] ialah dua jejari segi tiga bersudut tegak, dan ia menerangkan dua bulatan yang berbeza. Jejari dalaman ialah jejari bulatan dalaman, iaitu bulatan di dalam segi tiga yang menyentuh ketiga-tiga sisinya. Jejari lilitan ialah jejari bulatan lilitan, iaitu bulatan di luar segi tiga yang melalui ketiga-tiga bucunya. Satu bulatan terletak di dalam segi tiga, manakala satu lagi mengelilinginya.",
            },
            {
              "kind": "p",
              "text": "Bagi segi tiga bersudut tegak, jejari lilitannya ialah [[R = \\frac{c}{2}]], kerana hipotenus ialah diameter bulatan lilitan. Jejari dalamannya ialah [[r = \\frac{a+b-c}{2}]], yang memerlukan ketiga-tiga sisi, kerana sejauh mana bulatan dalaman itu muat bergantung pada bentuk segi tiga, bukan hanya pada sisi terpanjangnya. Gunakan segi tiga 6-8-10 untuk melihat perbezaan dalam nombor: [[r = 2]] dan [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Pusatnya juga berbeza. Pusat dalaman terletak di dalam segi tiga, di tempat pembahagi dua sama sudut bertemu, pada jarak [[r]] dari setiap sisi. Pusat lilitan terletak di titik tengah hipotenus, pada sempadan segi tiga, pada jarak [[R]] dari setiap bucu. Untuk soalan tentang bulatan lilitan, gunakan <a href=\"/right-triangle-circumradius-calculator/\">kalkulator jejari lilitan segi tiga bersudut tegak</a>, yang menggunakan [[R = \\frac{c}{2}]] secara langsung.",
            },
          ],
          "table": {
            "headers": [
              "Ciri",
              "Jejari Dalaman r",
              "Jejari Lilitan R",
            ],
            "rows": [
              [
                "Bulatan",
                "Bulatan dalaman",
                "Bulatan lilitan",
              ],
              [
                "Kedudukan",
                "Di dalam segi tiga",
                "Mengelilingi segi tiga",
              ],
              [
                "Sentuhan",
                "Menyentuh sisi",
                "Melalui bucu",
              ],
              [
                "Formula segi tiga bersudut tegak",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Pusat",
                "Pusat dalaman",
                "Pusat lilitan",
              ],
              [
                "Nilai 6-8-10",
                "2",
                "5",
              ],
            ],
          },
          "image": {
            "src": "inradius-vs-circumcircle.svg",
            "alt": "Segi tiga bersudut tegak dengan bulatan dalaman kecil di dalamnya dan bulatan lilitan besar yang melalui bucunya, segi tiga 6-8-10",
            "caption": "Bulatan dalaman (r = 2) di dalam segi tiga, bulatan lilitan (R = 5) mengelilinginya, segi tiga 6-8-10.",
          },
        },
        "sec-verify": {
          "h2": "Cara Mengesahkan Pengiraan Jejari Dalaman Anda",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat semakan bebas menangkap hampir setiap kesilapan. Jalankan sekurang-kurangnya satu pada setiap jawapan, dan keempat-empatnya apabila soalan itu penting. Contoh di bawah menggunakan segi tiga 6-8-10, dengan [[r = 2]], sepanjang masa.",
            },
            {
              "kind": "h3",
              "text": "Semakan 1: Formula Asal",
            },
            {
              "kind": "p",
              "text": "Kira semula dengan [[r = \\frac{a+b-c}{2}]] dari awal, tanpa melihat kerja pertama anda. Di sini [[r = \\frac{6+8-10}{2} = 2]]. Pengiraan baharu menangkap kesilapan dalam pengiraan pertama, terutamanya penolakan yang dilakukan dalam susunan yang salah.",
            },
            {
              "kind": "h3",
              "text": "Semakan 2: Luas dan Semiperimeter",
            },
            {
              "kind": "p",
              "text": "Sahkan dengan [[r = \\frac{A}{s}]]. Di sini [[A = \\frac{6 \\times 8}{2} = 24]] dan [[s = \\frac{6+8+10}{2} = 12]], jadi [[r = \\frac{24}{12} = 2]]. Laluan ini menggunakan pendaraban dan pembahagian dan bukannya penambahan dan penolakan, jadi ia menangkap kelas kesilapan yang berbeza.",
            },
            {
              "kind": "h3",
              "text": "Semakan 3: Teorem Pythagoras",
            },
            {
              "kind": "p",
              "text": "Sahkan [[a^2+b^2 = c^2]]. Di sini [[6^2+8^2 = 36+64 = 100 = 10^2]], jadi ketiga-tiga sisi membentuk segi tiga bersudut tegak yang tulen. Jika semakan ini gagal, formula jejari dalaman tidak terpakai langsung, dan tiada nilai [[r]] daripadanya yang boleh dipercayai.",
            },
            {
              "kind": "h3",
              "text": "Semakan 4: Kewajaran Geometri",
            },
            {
              "kind": "p",
              "text": "Pastikan [[r]] positif, lebih kecil daripada mana-mana sisi tegak, dan dalam unit yang betul. Di sini 2 adalah positif dan lebih kecil daripada kedua-dua 6 dan 8, dan unitnya sepadan dengan sisi. Bulatan itu mesti muat di dalam segi tiga, jadi jejari dalaman yang lebih besar daripada sisi tegak yang terpendek adalah mustahil dan menandakan kesilapan, biasanya sisi tegak yang dimasukkan sebagai hipotenus.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Sifat Penting Jejari Dalaman dalam Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Sembilan sifat mengikut secara langsung daripada formula dan geometri bulatan dalaman. Setiap satunya juga berfungsi sebagai semakan kewajaran untuk jawapan baharu.",
            },
            {
              "kind": "list",
              "items": [
                "Jejari dalaman sentiasa positif untuk segi tiga yang sah dan tidak merosot, kerana [[a+b]] sentiasa lebih besar daripada [[c]].",
                "Pusat dalaman terletak di dalam segi tiga, di tempat ketiga-tiga pembahagi dua sama sudut bertemu.",
                "Jejari dalaman ialah jarak serenjang terpendek dari pusat dalaman ke setiap sisi, dan ketiga-tiga jarak itu sama dengan [[r]].",
                "Bulatan dalaman menyentuh ketiga-tiga sisi, satu titik singgung pada setiap sisi.",
                "Segmen tangen dari titik luaran yang sama mempunyai panjang yang sama, dan inilah fakta yang menjadi asas terbitan formula itu.",
                "Membesarkan skala keseluruhan segi tiga membesarkan jejari dalaman dengan faktor skala yang sama: menggandakan setiap sisi menggandakan [[r]], dan menggandakan tiga kali ganda setiap sisi menggandakan tiga kali ganda [[r]].",
                "Jejari dalaman tidak sama dengan jejari lilitan. Dalam segi tiga 6-8-10, [[r = 2]] manakala [[R = 5]].",
                "Jejari dalaman bergantung pada bentuk segi tiga serta saiznya: segi tiga 5-12-13 dan segi tiga 6-8-10 kedua-duanya mempunyai [[r = 2]], walaupun sisinya berbeza.",
                "Jejari dalaman boleh dikira daripada panjang sisi dengan [[r = \\frac{a+b-c}{2}]] atau daripada luas dan semiperimeter dengan [[r = \\frac{A}{s}]], dan kedua-dua laluan memberikan jawapan yang sama.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Kesilapan Lazim Ketika Mengira Jejari Dalaman",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Menggunakan formula jejari lilitan dan bukannya formula jejari dalaman: [[R = \\frac{c}{2}]] memberikan 5 untuk segi tiga 6-8-10, manakala jejari dalamannya ialah 2. Kedua-dua formula itu menjawab soalan yang berbeza.",
                "Memasukkan c sebagai sisi tegak dan bukannya hipotenus: jika 8 dimasukkan sebagai c dan 10 sebagai b, formula memberikan [[\\frac{6+10-8}{2} = 4]], bukan 2. Sentiasa letakkan sisi terpanjang dalam medan hipotenus.",
                "Lupa menolak c: menambah sisi tegak dan membahagikan kepada dua, [[\\frac{6+8}{2} = 7]], memberikan nombor yang jauh lebih besar daripada jejari dalaman sebenar iaitu 2.",
                "Lupa membahagikan kepada dua: [[6+8-10 = 4]] ialah dua kali ganda jejari dalaman. Pembahagian kepada dua ialah sebahagian daripada formula, bukan langkah akhir yang boleh dipilih.",
                "Memasukkan ukuran sisi yang tidak sah: sisi 3, 4, dan 6 tidak memenuhi [[3^2+4^2 = 6^2]], kerana 25 tidak sama dengan 36, jadi formula jejari dalaman tidak terpakai kepada sisi itu.",
                "Mengabaikan hubungan Pythagoras: mana-mana tiga panjang boleh dimasukkan ke dalam formula, tetapi hanya segi tiga bersudut tegak yang tulen memberikan jejari dalaman yang bermakna. Semak [[a^2+b^2 = c^2]] dahulu.",
                "Mencampurkan unit ukuran: sisi tegak dalam sentimeter dan hipotenus dalam meter menghasilkan jawapan yang salah. Tukar setiap ukuran kepada satu unit sebelum mengira.",
                "Mengelirukan jejari dalaman dengan diameter: jejari dalaman ialah jarak dari pusat ke tepi. Diameter bulatan dalaman ialah dua kali ganda jejari dalaman, jadi bagi segi tiga 6-8-10 ia ialah 4, bukan 2.",
                "Mengelirukan pusat dalaman dengan pusat lilitan: pusat dalaman berada di dalam segi tiga di tempat pembahagi dua sama sudut bertemu, manakala pusat lilitan ialah titik tengah hipotenus. Kedua-duanya ialah titik yang berbeza.",
                "Menganggap bulatan dalaman melalui bucu segi tiga: bulatan dalaman menyentuh sisi dan tidak pernah sampai ke bucu. Bulatan yang melalui bucu ialah bulatan lilitan.",
                "Menganggap jejari diukur sepanjang sisi dan bukannya serenjang dengannya: jejari dalaman ialah jarak serenjang dari pusat dalaman ke sisi, iaitu jarak terpendek ke sisi itu.",
                "Membundarkan pengiraan perantaraan terlalu awal: kekalkan ketepatan penuh melalui penambahan dan penolakan, dan bundarkan hanya jawapan akhir. Pembundaran awal mengubah hasilnya.",
                "Menggunakan hanya dua panjang sisi tanpa mengira hipotenus dahulu: formula itu memerlukan ketiga-tiga sisi. Cari [[c]] dengan Teorem Pythagoras sebelum menggunakannya.",
                "Mengelirukan perimeter dengan semiperimeter: semiperimeter ialah separuh daripada perimeter, [[s = \\frac{a+b+c}{2}]]. Menggunakan perimeter penuh dalam [[r = \\frac{A}{s}]] membahagikan jawapan yang betul kepada dua.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplikasi Praktikal Jejari Dalaman Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Kegunaan yang paling langsung ialah kerja rumah geometri dan kerja bilik darjah, di mana soalan jejari dalaman menguji sama ada pelajar dapat mengenal pasti hipotenus, menggunakan [[r = \\frac{a+b-c}{2}]], dan menyemak hasilnya dengan luas dan semiperimeter. Latihan pembinaan bulatan menggunakan idea yang sama: diberi segi tiga bersudut tegak, lukis bulatan dalamannya dengan mencari pusat dalaman di tempat pembahagi dua sama sudut bertemu dan menetapkan jangka lukis pada jejari dalaman.",
            },
            {
              "kind": "p",
              "text": "Lukisan teknikal menggunakan bulatan dalaman apabila bulatan mesti muat tepat di dalam bingkai segi tiga atau apabila penjuru bulat mesti menyentuh dua tepi sesuatu bentuk. Pemodelan geometri dan geometri koordinat menggunakan pusat dalaman sebagai titik di dalam segi tiga yang sama jauh dari ketiga-tiga sisi, iaitu pusat semula jadi untuk bentuk terterap.",
            },
            {
              "kind": "p",
              "text": "Guru menggunakan topik ini sebagai pelajaran jambatan antara segi tiga dengan bulatan, kerana bulatan dalaman ialah salah satu tempat pertama di mana kedua-dua subjek itu bertemu. Panjang tangen, pembahagi dua sama sudut, luas, dan semiperimeter semuanya muncul dalam satu gambar, jadi jejari dalaman ialah cara yang ringkas untuk mengulang kaji semuanya bersama-sama. Projek reka bentuk sebenar yang memerlukan bulatan terterap juga memerlukan toleransi dan had bahan di luar halaman ini, jadi anggap hasilnya sebagai nilai geometri yang tepat dan tambahkan margin praktikal secara berasingan.",
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
              "text": "Segi tiga bersudut tegak mempunyai sisi tegak [[a = 20]] cm dan [[b = 21]] cm serta hipotenus [[c = 29]] cm. Cari jejari dalaman [[r]].",
            },
            {
              "kind": "h3",
              "text": "Soalan 2: Ukuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 10.5]] m, [[b = 14]] m, dan [[c = 17.5]] m, cari jejari dalaman [[r]] dalam meter.",
            },
            {
              "kind": "h3",
              "text": "Soalan 3: Penukaran Unit",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai sisi tegak [[a = 1.5]] m dan [[b = 2]] m serta hipotenus [[c = 250]] cm. Cari jejari dalaman dalam meter.",
            },
            {
              "kind": "h3",
              "text": "Soalan 4: Cari Hipotenus daripada Dua Sisi Tegak",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai sisi tegak [[a = 12]] cm dan [[b = 16]] cm. Cari hipotenus dahulu, kemudian jejari dalaman.",
            },
            {
              "kind": "h3",
              "text": "Soalan 5: Luas dan Semiperimeter",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai sisi tegak [[a = 15]] cm dan [[b = 20]] cm serta hipotenus [[c = 25]] cm. Cari luas dan semiperimeter, kemudian cari jejari dalaman dengan [[r = \\frac{A}{s}]], dan sahkannya dengan formula tiga sisi.",
            },
            {
              "kind": "h3",
              "text": "Soalan 6: Kenal Pasti Segi Tiga Bersudut Tegak yang Tidak Sah",
            },
            {
              "kind": "p",
              "text": "Seorang pelajar diberi [[a = 7]] cm, [[b = 10]] cm, dan [[c = 12]] cm dan diminta mencari jejari dalaman. Tunjukkan mengapa sisi ini tidak membentuk segi tiga bersudut tegak, dan terangkan apa yang patut dilakukan oleh pelajar itu dan bukannya menggunakan formula.",
            },
            {
              "kind": "h3",
              "text": "Jawapan Soalan Latihan",
            },
            {
              "kind": "p",
              "text": "Jawapan 1: [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Semakan: [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Jawapan 2: [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Semakan: [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Jawapan 3: Tukar hipotenus: 250 cm sama dengan 2.5 m. Kemudian [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, iaitu 50 cm. Semakan: [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Jawapan 4: [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, kemudian [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 5: [[A = \\frac{15 \\times 20}{2} = 150]] sentimeter persegi dan [[s = \\frac{15+20+25}{2} = 30]] cm, jadi [[r = \\frac{150}{30} = 5]] cm. Formula tiga sisi bersetuju: [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 6: [[7^2+10^2 = 49+100 = 149]], manakala [[12^2 = 144]], jadi [[a^2+b^2]] tidak sama dengan [[c^2]] dan segi tiga itu bukan bersudut tegak. Pelajar itu tidak patut menggunakan formula jejari dalaman: semak semula ukuran dahulu, dan jika ukuran itu betul, gunakan formula umum [[r = \\frac{A}{s}]] untuk segi tiga bukan bersudut tegak.",
            },
          ],
        },
      },
      "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "relatedIntro": "Setiap kalkulator di bawah mengendalikan satu tugas segi tiga bersudut tegak yang khusus, jadi pilih alat yang sepadan dengan ukuran yang perlu anda cari.",
      "relatedItems": [
        "Kalkulator Jejari Segi Tiga Bersudut Tegak",
        "Kalkulator Jejari Lilitan Segi Tiga Bersudut Tegak",
        "Kalkulator Luas Segi Tiga Bersudut Tegak",
        "Kalkulator Semiperimeter Segi Tiga Bersudut Tegak",
        "Kalkulator Sisi Segi Tiga Bersudut Tegak",
      ],
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "question": "Apakah formula jejari dalaman segi tiga bersudut tegak?",
          "answer": "Formulanya ialah [[r = \\frac{a+b-c}{2}]], dengan [[a]] dan [[b]] ialah sisi tegak, [[c]] ialah hipotenus, dan [[r]] ialah jejari dalaman. Tambahkan dua sisi tegak, tolak hipotenus, dan bahagikan kepada dua. Sebagai contoh, segi tiga 6-8-10 memberikan jejari dalaman 2.",
        },
        {
          "question": "Apakah yang diwakili oleh jejari dalaman?",
          "answer": "Jejari dalaman ialah jejari bulatan dalaman, iaitu bulatan yang muat di dalam segi tiga dan menyentuh ketiga-tiga sisinya. Ia ialah jarak serenjang dari pusat dalaman ke mana-mana sisi. Dalam segi tiga 6-8-10, jejari dalamannya ialah 2, jadi bulatan dalaman mempunyai jejari 2 unit.",
        },
        {
          "question": "Apakah bulatan dalaman?",
          "answer": "Bulatan dalaman ialah bulatan yang dilukis sepenuhnya di dalam segi tiga supaya ia menyentuh ketiga-tiga sisi, satu titik singgung pada setiap sisi. Setiap segi tiga mempunyai tepat satu bulatan dalaman. Ia berbeza daripada bulatan lilitan, yang melalui ketiga-tiga bucu.",
        },
        {
          "question": "Di manakah pusat dalaman terletak?",
          "answer": "Pusat dalaman ialah titik di mana ketiga-tiga pembahagi dua sama sudut dalaman segi tiga bertemu. Ia sentiasa terletak di dalam segi tiga. Dalam segi tiga bersudut tegak dengan sudut tegak di C, ia terletak di sepanjang pembahagi dua sama sudut 90 darjah, pada jarak [[r]] dari setiap sisi.",
        },
        {
          "question": "Mengapakah formula jejari dalaman menolak hipotenus?",
          "answer": "Segmen tangen dari bucu sudut tegak mempunyai panjang [[r]], jadi sisi tegak ialah [[a = r+x]] dan [[b = r+y]] manakala hipotenusnya ialah [[c = x+y]]. Menambahkan sisi tegak memberikan [[a+b = 2r+c]], jadi menolak [[c]] meninggalkan [[2r]]. Penolakan itu membuang panjang tangen yang dikongsi dan mengasingkan jejari dalaman.",
        },
        {
          "question": "Mengapakah kita membahagikan kepada dua?",
          "answer": "Menambahkan dua sisi tegak mengira jejari dalaman dua kali, sekali dalam setiap sisi tegak, kerana setiap sisi tegak mengandungi segmen tangen dengan panjang [[r]] dari bucu sudut tegak. Hasil tambah [[a+b-c]] oleh itu sama dengan [[2r]], bukan [[r]], jadi membahagikan kepada dua memberikan jejari dalaman tunggal.",
        },
        {
          "question": "Bolehkah saya mengira jejari dalaman menggunakan hanya dua sisi tegak?",
          "answer": "Tidak secara langsung, kerana formula itu juga memerlukan hipotenus. Cari hipotenus dahulu dengan [[c = \\sqrt{a^2+b^2}]], kemudian gunakan [[r = \\frac{a+b-c}{2}]]. Untuk sisi tegak 6 dan 8, hipotenusnya ialah 10 dan jejari dalamannya ialah 2. Gunakan kalkulator sisi untuk mencari hipotenus yang tiada.",
        },
        {
          "question": "Bolehkah saya mengira jejari dalaman menggunakan luas dan semiperimeter?",
          "answer": "Ya. Formulanya ialah [[r = \\frac{A}{s}]], dengan [[A]] ialah luas dan [[s]] ialah semiperimeter. Bagi segi tiga bersudut tegak, [[A = \\frac{ab}{2}]] dan [[s = \\frac{a+b+c}{2}]]. Bagi segi tiga 6-8-10, [[A = 24]] dan [[s = 12]], jadi [[r = 2]]. Kalkulator pada halaman ini menggunakan formula tiga sisi, jadi anggap laluan luas sebagai semakan bebas.",
        },
        {
          "question": "Adakah jejari dalaman sama dengan jejari lilitan?",
          "answer": "Tidak. Jejari dalaman ialah jejari bulatan di dalam segi tiga yang menyentuh sisinya, [[r = \\frac{a+b-c}{2}]], manakala jejari lilitan ialah jejari bulatan yang melalui bucu, [[R = \\frac{c}{2}]]. Dalam segi tiga 6-8-10 nilainya ialah 2 dan 5.",
        },
        {
          "question": "Bolehkah jejari dalaman lebih besar daripada sisi tegak terpendek segi tiga?",
          "answer": "Tidak. Jejari dalaman sentiasa lebih kecil daripada mana-mana sisi tegak, kerana bulatan dalaman mesti muat di dalam segi tiga. Dalam segi tiga 3-4-5, jejari dalamannya ialah 1, lebih kecil daripada sisi tegak terpendek iaitu 3. Jawapan yang lebih besar daripada sisi tegak terpendek menandakan kesilapan, biasanya sisi tegak yang dimasukkan sebagai hipotenus.",
        },
        {
          "question": "Mengapakah hipotenus mestilah sisi terpanjang?",
          "answer": "Hipotenus bertentangan dengan sudut tegak, iaitu sudut terbesar dalam segi tiga, dan sisi terpanjang sentiasa terletak bertentangan dengan sudut terbesar. Teorem Pythagoras juga memaksanya: [[c^2 = a^2+b^2]] lebih besar daripada [[a^2]] atau [[b^2]] sahaja, jadi [[c]] lebih panjang daripada [[a]] dan lebih panjang daripada [[b]].",
        },
        {
          "question": "Bagaimanakah saya boleh menyemak sama ada pengiraan jejari dalaman saya betul?",
          "answer": "Kira semula dengan formula asal, kemudian semak dengan luas dan semiperimeter, [[r = \\frac{A}{s}]], dan sahkan [[a^2+b^2 = c^2]] untuk sisi itu. Juga pastikan jawapannya positif, lebih kecil daripada mana-mana sisi tegak, dan dalam unit yang sama dengan sisi. Jika keempat-empat semakan bersetuju, jawapannya kukuh.",
        },
      ],
    },
};
