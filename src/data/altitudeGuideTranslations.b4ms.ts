// altitudeGuideTranslations.bms.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B4_MS = {
  "ms": {
      "tocHeading": "Navigasi Bahagian",
      "tocItems": {
        "sec-intro": "Kalkulator Ketinggian Segi Tiga Bersudut Tegak",
        "sec-calculate": "Kira Ketinggian Segi Tiga Bersudut Tegak",
        "sec-what": "Apakah Ketinggian Segi Tiga Bersudut Tegak?",
        "sec-diagram": "Penjelasan Rajah Ketinggian Segi Tiga Bersudut Tegak",
        "sec-formulas": "Penjelasan Formula Ketinggian Segi Tiga Bersudut Tegak",
        "sec-how": "Cara Menggunakan Kalkulator Ketinggian Segi Tiga Bersudut Tegak",
        "sec-method1": "Kaedah 1: Cari Ketinggian Segi Tiga Bersudut Tegak Daripada Panjang Sisi",
        "sec-method2": "Kaedah 2: Cari Ketinggian Daripada Unjuran Hipotenus",
        "sec-two-sides": "Cara Mencari Ketinggian Apabila Hanya Dua Sisi Diketahui",
        "sec-why": "Mengapakah Formula Ketinggian Segi Tiga Bersudut Tegak Berfungsi?",
        "sec-proof": "Bukti Teorem Ketinggian Menggunakan Segi Tiga Serupa",
        "sec-examples": "Contoh Kerja Ketinggian Segi Tiga Bersudut Tegak",
        "sec-area": "Hubungan Antara Ketinggian dan Luas Segi Tiga",
        "sec-geomean": "Min Geometri dan Unjuran Hipotenus",
        "sec-properties": "Sifat Penting Ketinggian Segi Tiga Bersudut Tegak",
        "sec-verify": "Cara Menyemak Sama Ada Jawapan Ketinggian Anda Betul",
        "sec-mistakes": "Kesilapan Lazim Semasa Mengira Ketinggian",
        "sec-applications": "Aplikasi Dunia Sebenar Ketinggian Segi Tiga Bersudut Tegak",
        "sec-practice": "Latihan dengan Jawapan",
        "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
        "sec-faq": "Soalan Lazim",
        "sec-conclusion": "Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Ketinggian Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Panduan ini menunjukkan dua cara untuk mencari ketinggian segi tiga bersudut tegak, dengan contoh kerja bagi setiap cara.",
            },
            {
              "kind": "p",
              "text": "Ketinggian ialah segmen serenjang yang dijatuhkan dari bucu bersudut tegak ke hipotenus. Kalkulator Ketinggian Segi Tiga Bersudut Tegak mencari panjang ini menggunakan sama ada tiga panjang sisi atau dua unjuran hipotenus. Pilih mod yang sepadan dengan apa yang anda tahu, masukkan ukuran anda, dan kalkulator mengembalikan ketinggian dalam unit yang sama.",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Formula pertama menggunakan dua kaki [[a]] dan [[b]] dengan hipotenus [[c]]. Formula kedua menggunakan unjuran [[p]] dan [[q]], iaitu dua segmen yang dipotong oleh ketinggian pada hipotenus. Kedua-dua formula mencari ketinggian serenjang yang sama; ia hanya bermula daripada ukuran yang diketahui yang berbeza.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Kira Ketinggian Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator di sisi panduan ini menawarkan dua mod, dan memilih mod yang betul ialah satu-satunya persediaan yang anda perlukan. Setiap mod meminta ukuran yang berbeza dan menggunakan formula yang berbeza, jadi baca jadual terlebih dahulu dan padankan mod dengan nilai yang anda ketahui.",
            },
            {
              "kind": "p",
              "text": "Mod 1, Altitude to Hypotenuse, menerima Kaki a, Kaki b, dan Hipotenus c. Ia mengira ketinggian dengan [[h=\\frac{ab}{c}]], iaitu hasil darab dua kaki dibahagi dengan hipotenus. Mod 2, Altitude Squared, menerima Unjuran p dan Unjuran q, iaitu dua bahagian hipotenus, dan menggunakan [[h=\\sqrt{pq}]], min geometri unjuran tersebut.",
            },
            {
              "kind": "p",
              "text": "Semua ukuran mesti menggunakan unit yang serasi: sentimeter dengan sentimeter, meter dengan meter. Hasilnya diberi dalam unit panjang sepunya bagi input anda. Gunakan butang Reset untuk mengosongkan medan sebelum memulakan masalah baharu.",
            },
          ],
          "table": {
            "headers": [
              "Ukuran yang Diketahui",
              "Mod Kalkulator",
              "Formula",
            ],
            "rows": [
              [
                "Kaki a, b dan hipotenus c",
                "Altitude to Hypotenuse",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "Unjuran hipotenus p dan q",
                "Altitude Squared",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Apakah Ketinggian Segi Tiga Bersudut Tegak?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ketinggian ialah segmen serenjang yang dilukis dari satu bucu segi tiga ke garis yang mengandungi sisi bertentangan. Dalam segi tiga bersudut tegak, ketinggian yang paling berguna bermula di bucu bersudut tegak dan bertemu hipotenus pada sudut tegak. Titik tempat ia mendarat dipanggil kaki ketinggian, dan hipotenus ialah tapak semula jadi bagi pasangan tapak-tinggi ini.",
            },
            {
              "kind": "p",
              "text": "Setiap segi tiga mempunyai tiga ketinggian, dan segi tiga bersudut tegak tidak terkecuali. Dua daripadanya bertepatan dengan kaki-kaki: jika anda mengambil satu kaki sebagai tapak, kaki yang satu lagi sudah serenjang dengannya, jadi ia berfungsi sebagai ketinggian. Ketinggian ketiga berjalan dari bucu bersudut tegak ke hipotenus dan terletak di dalam segi tiga. Halaman ini mengira ketinggian ketiga itu, satu-satunya ketinggian yang memerlukan pengiraan sebenar.",
            },
            {
              "kind": "p",
              "text": "Oleh kerana ia bertemu hipotenus pada sudut tegak, ketinggian ini membahagikan segi tiga asal kepada dua segi tiga bersudut tegak yang lebih kecil. Kedua-dua segi tiga itu serupa antara satu sama lain dan serupa dengan segi tiga asal, sebab itulah ketinggian mencipta hubungan min geometri yang kemas yang diterokai kemudian dalam panduan ini.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Penjelasan Rajah Ketinggian Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Rajah di bawah menunjukkan segi tiga ABC dengan sudut tegak di C. Sisi AC dan BC bertemu pada sudut tegak, jadi AB bertentangan dengan sudut tegak dan mesti menjadi hipotenus. Ketinggian CD berjalan dari C ke sisi AB, bertemu di D dengan tanda sudut tegak yang menunjukkan hubungan serenjang.",
            },
            {
              "kind": "p",
              "text": "Setiap sisi mempunyai label standard: AC = a, BC = b, AB = c, dan ketinggian CD = h. Ketinggian membahagikan hipotenus kepada dua unjuran, AD = p dan DB = q, jadi c = p + q. Perhatikan bahawa p terletak bersebelahan kaki a dan q terletak bersebelahan kaki b, corak yang penting untuk bukti keserupaan kemudian.",
            },
            {
              "kind": "p",
              "text": "Membaca rajah dari kiri ke kanan menunjukkan keseluruhan cerita: sebuah segi tiga bersudut tegak, ketinggian yang dijatuhkan ke hipotenus, dua segmen unjuran, dan segi tiga asal yang dibahagikan kepada dua segi tiga bersudut tegak yang lebih kecil, ACD dan CBD, yang berkongsi ketinggian sebagai sisi sepunya.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Segi tiga ABC dengan sudut tegak di C; ketinggian CD dilukis ke hipotenus AB, dengan AC sama dengan a, BC sama dengan b, AB sama dengan c, CD sama dengan h, AD sama dengan p, DB sama dengan q",
            "caption": "Ketinggian CD dijatuhkan dari sudut tegak C serenjang kepada hipotenus AB, membahagikannya kepada unjuran p dan q.",
          },
        },
        "sec-formulas": {
          "h2": "Penjelasan Formula Ketinggian Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat formula mencari ketinggian yang sama, dan setiap satu bermula daripada ukuran yang diketahui yang berbeza. Kalkulator langsung melaksanakan dua yang pertama secara langsung; dua yang lain ialah kaedah manual yang boleh anda gunakan apabila ukuran anda tidak lengkap atau apabila anda ingin mengesahkan hasil dengan cara lain.",
            },
            {
              "kind": "p",
              "text": "Formula sisi [[h=\\frac{ab}{c}]] memerlukan kedua-dua kaki dan hipotenus. Formula unjuran [[h=\\sqrt{pq}]] hanya memerlukan dua segmen hipotenus, dan ia bersamaan dengan teorem ketinggian [[h^2=pq]]. Apabila anda mengetahui kaki tetapi bukan hipotenus, gantikan [[c=\\sqrt{a^2+b^2}]] untuk mendapatkan [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]]. Apabila anda mengetahui luas A dan hipotenus c, gunakan [[h=\\frac{2A}{c}]], yang diperoleh terus daripada formula luas dengan hipotenus sebagai tapak.",
            },
            {
              "kind": "p",
              "text": "Jangan anggap ini sebagai empat mod kalkulator. Kalkulator hanya mengekalkan dua mod: Altitude to Hypotenuse dan Altitude Squared. Formula yang selebihnya ialah pembantu untuk pengiraan manual, untuk menerbitkan ukuran yang tiada sebelum memasukkan ke dalam kalkulator, atau untuk menyemak semula jawapan yang dihasilkan oleh kalkulator.",
            },
          ],
          "table": {
            "headers": [
              "Formula",
              "Input yang diperlukan",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "Kaki a, b dan hipotenus c",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "Unjuran p dan q",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "Kedua-dua kaki a, b",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "Luas A dan hipotenus c",
              ],
            ],
          },
        },
        "sec-how": {
          "h2": "Cara Menggunakan Kalkulator Ketinggian Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Ikuti langkah-langkah ini mengikut turutan dan kalkulator akan melakukan selebihnya. Keseluruhan proses mengambil masa kurang seminit sebaik sahaja anda tahu ukuran yang anda ada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenal pasti ukuran yang anda ketahui: adakah ia tiga panjang sisi, atau dua unjuran hipotenus?",
                "Pilih mod kalkulator yang sepadan: Altitude to Hypotenuse untuk tiga sisi, Altitude Squared untuk dua unjuran.",
                "Masukkan ukuran positif dalam unit yang serasi, tukarkan terlebih dahulu jika ia diberi dalam unit bercampur.",
                "Semak bahawa ukuran tersebut membentuk segi tiga bersudut tegak yang sah, dengan kaki-kaki memenuhi teorem Pythagoras.",
                "Klik butang Calculate untuk menjalankan mod yang dipilih.",
                "Baca hasil ketinggian dalam unit sepunya bagi input anda.",
                "Sahkan jawapan dengan salah satu kaedah semakan dalam panduan ini jika masalah itu penting.",
                "Klik Reset sebelum memasukkan masalah baharu supaya nilai lama tidak bercampur dengan nilai baharu.",
              ],
            },
            {
              "kind": "p",
              "text": "Pilihan mod ialah langkah yang paling penting. Jika anda mengetahui kaki a dan b serta hipotenus c, mod Altitude to Hypotenuse sesuai. Jika anda hanya tahu bagaimana hipotenus terbahagi kepada p dan q, pilih Altitude Squared. Mod yang salah menolak input yang sah, jadi memadankan mod dengan ukuran menjimatkan masa.",
            },
          ],
        },
        "sec-method1": {
          "h2": "Kaedah 1: Cari Ketinggian Segi Tiga Bersudut Tegak Daripada Panjang Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Apabila ketiga-tiga panjang sisi diketahui, ketinggian diperoleh daripada satu pembahagian. Formula [[h=\\frac{ab}{c}]] mendarabkan dua kaki dan membahagi dengan hipotenus, dan setiap simbol mempunyai maksud tetap: a dan b ialah kaki-kaki yang serenjang, c ialah hipotenus, dan h ialah ketinggian kepada hipotenus.",
            },
            {
              "kind": "p",
              "text": "Segi tiga klasik 3-4-5 menunjukkan setiap langkah. Diberi a = 3 cm, b = 4 cm, dan c = 5 cm, gantikan ke dalam formula:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Darabkan kaki terlebih dahulu: 3 × 4 = 12. Kemudian bahagikan dengan hipotenus:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Hasilnya ialah h = 2.4 cm. Perhatikan bahawa 2.4 lebih pendek daripada kedua-dua kaki, yang sentiasa berlaku bagi ketinggian kepada hipotenus, dan bahagian bukti kemudian menjelaskan mengapa pembahagian dengan c adalah semula jadi secara geometri.",
            },
            {
              "kind": "p",
              "text": "Gunakan kaedah ini apabila ketiga-tiga sisi diketahui atau boleh diukur secara langsung. Untuk alat khusus yang hanya mengendalikan input sisi, cuba <a href=\"/right-triangle-altitude-from-sides-calculator/\">kalkulator ketinggian-daripada-sisi</a>, yang membimbing melalui formula yang sama dengan lebih mendalam.",
            },
          ],
          "image": {
            "src": "altitude-sides-345.svg",
            "alt": "Segi tiga bersudut tegak dengan kaki 3 dan 4, hipotenus 5, ketinggian 2.4 dilukis serenjang kepada hipotenus",
            "caption": "Segi tiga 3-4-5: ketinggian h sama dengan (3 x 4) / 5 = 2.4.",
          },
        },
        "sec-method2": {
          "h2": "Kaedah 2: Cari Ketinggian Daripada Unjuran Hipotenus",
          "blocks": [
            {
              "kind": "p",
              "text": "Apabila hipotenus sudah terbahagi kepada dua unjurannya, teorem ketinggian memberi jalan pintas. Teorem menyatakan [[h^2=pq]], jadi ketinggian ialah punca kuasa dua hasil darab dua unjuran:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Ambil p = 9 cm dan q = 16 cm. Kuasa duakan hubungan itu terlebih dahulu:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Darabkan: 9 × 16 = 144, jadi [[h^2=144]]. Sekarang ambil punca kuasa dua:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "Hasilnya ialah h = 12 cm. Ini mengatakan ketinggian ialah min geometri dua unjuran: ia terletak di antara keduanya dari segi saiz, lebih dekat kepada purata mereka daripada kepada mana-mana hujung, maksud yang dijelaskan dengan lebih penuh dalam bahagian min geometri.",
            },
            {
              "kind": "p",
              "text": "Ingat bahawa p dan q ialah segmen hipotenus, bukan kaki-kaki segi tiga. Kesilapan lazim ialah memasukkan panjang kaki sebagai unjuran, yang menghasilkan jawapan yang salah. Untuk alat yang dibina khas untuk kaedah ini sahaja, lihat <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator ketinggian-daripada-unjuran</a>.",
            },
          ],
          "image": {
            "src": "altitude-projections.svg",
            "alt": "Segi tiga bersudut tegak dengan ketinggian h membahagikan hipotenus kepada unjuran p = 9 dan q = 16, ketinggian h = 12",
            "caption": "Ketinggian ialah min geometri unjuran: sqrt(9 x 16) = 12.",
          },
        },
        "sec-two-sides": {
          "h2": "Cara Mencari Ketinggian Apabila Hanya Dua Sisi Diketahui",
          "blocks": [
            {
              "kind": "p",
              "text": "Kadangkala sisi ketiga tiada, tetapi teorem Pythagoras memulihkannya dalam satu langkah. Kaedah pemulihan bergantung pada dua sisi yang anda ketahui, jadi kendalikan setiap kes secara berasingan.",
            },
            {
              "kind": "h3",
              "text": "Kes 1: Kedua-Dua Kaki Diketahui",
            },
            {
              "kind": "p",
              "text": "Diberi a = 6 cm dan b = 8 cm, cari hipotenus terlebih dahulu dengan [[c=\\sqrt{a^2+b^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang ketiga-tiga sisi diketahui, jadi gunakan formula sisi: h = (6 × 8) / 10 = 48 / 10 = 4.8 cm. Hipotenus yang tiada adalah satu-satunya halangan, dan ketinggian diperoleh secara langsung.",
            },
            {
              "kind": "h3",
              "text": "Kes 2: Satu Kaki dan Hipotenus Diketahui",
            },
            {
              "kind": "p",
              "text": "Diberi a = 5 cm dan c = 13 cm, selesaikan untuk kaki yang tiada dengan [[b=\\sqrt{c^2-a^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "Dengan b = 12 cm dipulihkan, ketinggian ialah h = (5 × 12) / 13 = 60/13 cm ≈ 4.615 cm. Ini ialah terbitan manual untuk mencari ukuran yang diperlukan terlebih dahulu; kalkulator itu sendiri meminta input yang lengkap, jadi lakukan kerja awal ini di atas kertas sebelum memasukkan nilai.",
            },
            {
              "kind": "p",
              "text": "Jika anda kerap memerlukan sisi yang tiada itu sendiri, <a href=\"/right-triangle-side-calculator/\">kalkulator sisi</a> mencarinya secara langsung sebelum anda beralih kepada ketinggian.",
            },
          ],
        },
        "sec-why": {
          "h2": "Mengapakah Formula Ketinggian Segi Tiga Bersudut Tegak Berfungsi?",
          "blocks": [
            {
              "kind": "p",
              "text": "Formula berfungsi kerana satu segi tiga boleh diukur dengan dua pasangan tapak-tinggi yang berbeza, dan luasnya kekal sama sama ada cara. Hujah luas ini ialah bukti jujur yang paling ringkas bagi [[h=\\frac{ab}{c}]].",
            },
            {
              "kind": "p",
              "text": "Pertama, gunakan kaki sebagai pasangan tapak-tinggi. Oleh kerana kaki-kaki serenjang, luasnya ialah setengah hasil darab mereka:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang gunakan hipotenus sebagai tapak dan ketinggian sebagai tinggi. Segi tiga yang sama mempunyai luas yang sama:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dua ungkapan bagi satu luas, jadi samakan mereka:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Darabkan kedua-dua sisi dengan 2 untuk menghilangkan pecahan, memberi ab = ch. Bahagikan kedua-dua sisi dengan c:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Setiap langkah ialah aritmetik yang boleh dibalikkan, jadi pembahagian dengan hipotenus bukan helah; ia ialah harga algebra untuk bertukar daripada pasangan tapak-tinggi kaki kepada pasangan tapak-tinggi hipotenus sementara luas kekal tetap.",
            },
          ],
          "image": {
            "src": "altitude-area-comparison.svg",
            "alt": "Segi tiga bersudut tegak yang sama dilukis dua kali: pertama dengan tapak a dan tinggi b, kemudian dengan tapak c dan tinggi h",
            "caption": "Segi tiga yang sama, dua pasangan tapak-tinggi: luas sama dengan ab/2 dan ch/2, jadi h sama dengan ab/c.",
          },
        },
        "sec-proof": {
          "h2": "Bukti Teorem Ketinggian Menggunakan Segi Tiga Serupa",
          "blocks": [
            {
              "kind": "p",
              "text": "Formula unjuran [[h=\\sqrt{pq}]] berasal daripada keserupaan. Kekalkan pelabelan yang konsisten: segi tiga ABC bersudut tegak di C, D terletak pada AB, CD serenjang kepada AB, AD = p, DB = q, dan CD = h.",
            },
            {
              "kind": "p",
              "text": "Ketinggian membahagikan ABC kepada dua segi tiga bersudut tegak yang lebih kecil, ACD dan CBD. Sudut di A dikongsi antara ABC dan ACD, jadi kedua-duanya serupa; begitu juga sudut di B dikongsi antara ABC dan CBD. Oleh kerana kedua-dua segi tiga yang lebih kecil serupa dengan segi tiga asal, ia serupa antara satu sama lain: segi tiga ACD serupa dengan segi tiga CBD.",
            },
            {
              "kind": "p",
              "text": "Tulis keserupaan sebagai kadaran sisi sepadan. Kaki pendek ACD ialah p dan kaki panjang ialah h; dalam CBD kaki pendek ialah h dan kaki panjang ialah q. Memadankan mereka memberi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "Darab silang: h × h = p × q, jadi h² = pq. Ambil punca kuasa dua:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Hanya punca positif digunakan kerana panjang sisi adalah positif. Punca negatif tidak mempunyai maksud geometri di sini. Wawasan utama ialah ketinggian ialah perkadaran min antara dua segmen hipotenus, yang tepat ialah apa itu min geometri.",
            },
          ],
          "image": {
            "src": "altitude-similar-triangles.svg",
            "alt": "Segi tiga bersudut tegak asal ABC dengan ketinggian CD, di samping dua segi tiga serupa yang lebih kecil ACD dan CBD dengan sisi sepadan dilabel",
            "caption": "Segi tiga ACD dan CBD serupa: p/h = h/q, jadi h kuasa dua sama dengan p kali q.",
          },
        },
        "sec-examples": {
          "h2": "Contoh Kerja Ketinggian Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Tujuh contoh merangkumi kedua-dua mod kalkulator, penukaran unit, dan ukuran perpuluhan. Setiap satu menunjukkan nilai yang diberi, formula yang dipilih, penggantian, dan jawapan akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Segi Tiga Klasik 3-4-5",
            },
            {
              "kind": "p",
              "text": "Diberi a = 3 cm, b = 4 cm, c = 5 cm. Gunakan [[h=\\frac{ab}{c}]]: h = (3 × 4) / 5 = 12 / 5 = 2.4 cm. Ketinggian lebih pendek daripada mana-mana kaki, seperti selalu.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Segi Tiga 5-12-13",
            },
            {
              "kind": "p",
              "text": "Diberi a = 5 m, b = 12 m, c = 13 m. Gunakan [[h=\\frac{ab}{c}]]: h = (5 × 12) / 13 = 60/13 m ≈ 4.615 m. Kekalkan pecahan sehingga langkah terakhir untuk perpuluhan yang kemas.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Segi Tiga 8-15-17",
            },
            {
              "kind": "p",
              "text": "Diberi a = 8 cm, b = 15 cm, c = 17 cm. Gunakan [[h=\\frac{ab}{c}]]: h = (8 × 15) / 17 = 120/17 cm ≈ 7.059 cm. Kaki yang lebih besar masih memberi ketinggian yang lebih kecil daripada kedua-duanya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Unjuran Hipotenus Sama",
            },
            {
              "kind": "p",
              "text": "Diberi p = 5 cm dan q = 5 cm. Gunakan [[h=\\sqrt{pq}]]: h = √(5 × 5) = √25 = 5 cm. Unjuran yang sama bermakna ketinggian setinggi mungkin bagi hipotenus itu, dan segi tiga ialah segi tiga bersudut tegak sama kaki: setiap kaki ialah 5√2 cm, kira-kira 7.07 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Unjuran Hipotenus Tidak Sama",
            },
            {
              "kind": "p",
              "text": "Diberi p = 4 cm dan q = 25 cm. Gunakan [[h=\\sqrt{pq}]]: h = √(4 × 25) = √100 = 10 cm. Perhatikan bagaimana ketinggian 10 terletak di antara dua unjuran, 4 dan 25, yang merupakan ciri min geometri.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi a = 1.5 m, b = 2 m, c = 2.5 m. Gunakan [[h=\\frac{ab}{c}]]: h = (1.5 × 2) / 2.5 = 3 / 2.5 = 1.2 m. Perpuluhan berfungsi tepat seperti nombor bulat selagi setiap nilai menggunakan unit yang sama.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Unit Ukuran Berbeza",
            },
            {
              "kind": "p",
              "text": "Diberi a = 30 cm, b = 0.4 m, c = 0.5 m. Tukarkan semuanya kepada sentimeter terlebih dahulu: b = 40 cm, c = 50 cm. Kemudian h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Menukar sebelum menggantikan mengelakkan kesilapan unit yang paling lazim.",
            },
          ],
        },
        "sec-area": {
          "h2": "Hubungan Antara Ketinggian dan Luas Segi Tiga",
          "blocks": [
            {
              "kind": "p",
              "text": "Luas dan ketinggian menentukan satu sama lain apabila hipotenus diketahui. Dengan hipotenus sebagai tapak, luas A = ch/2, jadi menyelesaikan untuk ketinggian memberi [[h=\\frac{2A}{c}]]. Ini ialah laluan yang benar-benar berbeza: ia melangkau kaki-kaki sepenuhnya.",
            },
            {
              "kind": "p",
              "text": "Katakan masalah menyatakan luas A = 54 cm² dan hipotenus c = 15 cm. Gantikan:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Darabkan pengangka: 2 × 54 = 108. Kemudian bahagikan: h = 108 / 15 = 7.2 cm. Ketinggian diperoleh tanpa pengetahuan tentang kaki-kaki individu.",
            },
            {
              "kind": "p",
              "text": "Laluan ini berguna apabila luas diberi secara langsung, contohnya dalam masalah perkataan tentang tanah atau bahan. Ia juga berfungsi sebagai alat pengesahan: kira ketinggian daripada sisi, kemudian sahkan bahawa 2A/c memberi nilai yang sama. <a href=\"/right-triangle-area-calculator/\">kalkulator luas</a> mencari luas daripada apa jua ukuran yang diberi oleh masalah.",
            },
          ],
        },
        "sec-geomean": {
          "h2": "Min Geometri dan Unjuran Hipotenus",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem ketinggian mengatakan ketinggian ialah min geometri dua unjuran, dan min geometri ialah sejenis purata tertentu. Ambil p = 4 dan q = 9. Min geometri mereka ialah √(4 × 9) = √36 = 6, jadi segi tiga dengan unjuran itu mempunyai ketinggian 6.",
            },
            {
              "kind": "p",
              "text": "Bandungkan dengan min aritmetik biasa: (4 + 9) / 2 = 6.5. Kedua-dua purata berbeza, dan hanya 6 ialah ketinggian yang betul. Min aritmetik mempuratakan dengan menambah, manakala min geometri mempuratakan dengan mendarab, yang sesuai untuk panjang yang berskala bersama dan bukan bertambah.",
            },
            {
              "kind": "p",
              "text": "Secara geometri, hubungan perkadaran min h² = pq bermakna ketinggian berkaitan dengan setiap unjuran dengan cara yang sama unjuran itu berkaitan antara satu sama lain. Simetri inilah yang menjadikan dua segi tiga yang lebih kecil serupa, dan inilah sebabnya ketinggian sentiasa terletak di antara dua unjuran dari segi saiz, tidak pernah sama dengan min aritmetik kecuali p sama dengan q.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Sifat Penting Ketinggian Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Tujuh sifat menghuraikan ketinggian kepada hipotenus. Bersama-sama mereka memberi gerak hati yang boleh dipercayai tentang nilai ketinggian yang mungkin dan bagaimana ia berkelakuan.",
            },
            {
              "kind": "list",
              "items": [
                "Ketinggian kepada hipotenus serenjang kepadanya, jadi ia ialah jarak terpendek dari bucu bersudut tegak ke hipotenus.",
                "Ketinggian membahagikan segi tiga kepada dua segi tiga yang lebih kecil, setiap satu serupa dengan segi tiga asal dan serupa antara satu sama lain.",
                "Ketinggian lebih pendek daripada kedua-dua kaki; tiada kaki boleh menjadi laluan terpendek ke hipotenus.",
                "Ketinggian lebih pendek daripada hipotenus itu sendiri, kerana segmen serenjang ialah laluan terpendek.",
                "Ketinggian ialah min geometri dua unjuran hipotenus, [[h=\\sqrt{pq}]].",
                "Bagi hipotenus tetap, ketinggian paling besar apabila dua unjuran sama, yang berlaku apabila dua kaki sama.",
                "Menskalakan setiap panjang sisi dengan faktor yang sama menskalakan ketinggian dengan faktor itu; gandakan segi tiga, gandakan ketinggian.",
              ],
            },
            {
              "kind": "p",
              "text": "Sifat keenam mempunyai had yang tepat: ketinggian tidak boleh melebihi separuh hipotenus, [[h \\leq \\frac{c}{2}]], dengan kesamaan hanya apabila kaki-kaki sama. Segi tiga 45-45-90 dengan hipotenus 10 mempunyai ketinggian tepat 5, iaitu maksimum; segi tiga 6-8-10 dengan hipotenus yang sama hanya mencapai 4.8, seperti yang ditunjukkan oleh rajah.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dua segi tiga bersudut tegak berkongsi hipotenus 10: segi tiga 45-45-90 dengan ketinggian 5 dan segi tiga gaya 6-8-10 dengan ketinggian 4",
            "caption": "Hipotenus yang sama 10: unjuran yang sama memberi ketinggian tertinggi, 5.",
          },
        },
        "sec-verify": {
          "h2": "Cara Menyemak Sama Ada Jawapan Ketinggian Anda Betul",
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga semakan bebas menangkap kesilapan pengiraan. Gunakan sekurang-kurangnya satu daripadanya apabila jawapan ketinggian penting.",
            },
            {
              "kind": "h3",
              "text": "Semakan 1: Luas Segi Tiga",
            },
            {
              "kind": "p",
              "text": "Bandungkan ab/2 dengan ch/2 menggunakan ketinggian anda. Untuk segi tiga 3-4-5 dengan h = 2.4: ab/2 = (3 × 4)/2 = 6, dan ch/2 = (5 × 2.4)/2 = 6. Luas yang sepadan mengesahkan ketinggian sesuai dengan sisi.",
            },
            {
              "kind": "h3",
              "text": "Semakan 2: Min Geometri",
            },
            {
              "kind": "p",
              "text": "Sahkan [[h^2=pq]] apabila unjuran diketahui. Dengan p = 9 dan q = 16: h² = 12² = 144, dan pq = 9 × 16 = 144. Kesamaan bermakna ketinggian konsisten dengan cara hipotenus terbahagi.",
            },
            {
              "kind": "h3",
              "text": "Semakan 3: Teorem Pythagoras",
            },
            {
              "kind": "p",
              "text": "Sahkan [[a^2+b^2=c^2]] bagi sisi yang diberi: 9 + 16 = 25 dalam kes 3-4-5. Semakan ini mengesahkan panjang sisi, bukan ketinggian secara langsung, tetapi entri sisi yang salah ialah sebab paling lazim jawapan ketinggian gagal dalam dua semakan yang lain.",
            },
            {
              "kind": "p",
              "text": "Jalankan setiap semakan dalam unit yang konsisten. Mencampurkan sentimeter dengan meter merosakkan semakan luas secara senyap, jadi tukar dahulu dan sahkan kemudian.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Kesilapan Lazim Semasa Mengira Ketinggian",
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh kesilapan muncul berulang kali. Setiap satu mudah dikesan apabila anda tahu tandanya.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mengelirukan ketinggian dengan kaki. Ketinggian bertemu hipotenus pada sudut tegak; kaki bertemu kaki yang satu lagi pada sudut tegak. Dalam segi tiga 3-4-5, h = 2.4, bukan 3 atau 4.",
                "Memilih mod kalkulator yang salah. Memasukkan kaki dan hipotenus ke dalam mod Altitude Squared, yang menjangkakan unjuran, menghasilkan karut. Padankan mod dengan ukuran.",
                "Mengelirukan unjuran dengan kaki. Memasukkan a = 3 dan b = 4 sebagai p dan q mengira √(12) ≈ 3.46, yang bukan ketinggian. Unjuran ialah segmen hipotenus.",
                "Menggunakan hipotenus yang salah. Membahagikan ab dengan kaki dan bukan hipotenus, contohnya 12/4 = 3, melebih-lebihkan ketinggian. Pembahagi mestilah sisi terpanjang, c.",
                "Terlupa punca kuasa dua dalam formula unjuran. Berhenti pada h² = 144 memberi 144 sebagai ketinggian; jawapan sebenar ialah h = 12.",
                "Mencampurkan sentimeter dan meter. Dengan a = 30 cm dan c = 0.5 m, menggantikan 0.5 secara langsung memberi ketinggian yang salah. Tukar dahulu: 50 cm.",
                "Memasukkan panjang sisi yang tidak sah. Sisi seperti 2, 3, 10 tidak memenuhi teorem Pythagoras, jadi tiada segi tiga bersudut tegak wujud dan tiada ketinggian ditakrifkan.",
                "Membundar terlalu awal. Membundarkan 60/13 kepada 4.6 sebelum langkah lanjut membawa kesilapan ke hadapan. Kekalkan pecahan dan bundarkan hanya jawapan akhir.",
                "Menganggap h² sebagai ketinggian akhir. Jika pengiraan berakhir dengan h² = 36, ketinggian ialah 6, bukan 36.",
                "Menggunakan formula segi tiga bersudut tegak pada segi tiga sebarangan. Formula di sini memerlukan sudut tegak; bagi segi tiga lain hubungan ketinggian berbeza.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplikasi Dunia Sebenar Ketinggian Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Pengiraan ketinggian menyokong sebarang kerja yang dibina atas geometri segi tiga bersudut tegak. Dalam pendidikan geometri, teorem ketinggian memberi pelajar rasa pertama tentang bukti keserupaan dan min geometri. Lukisan teknikal dan reka bentuk geometri menggunakan ketinggian untuk meletakkan garis serenjang semasa membentangkan panel segi tiga atau bentuk kurungan.",
            },
            {
              "kind": "p",
              "text": "Geometri ukur menggunakan hubungan segi tiga bersudut tegak semasa memetakan petak dengan ofset serenjang, dan model perancangan pembinaan menggunakannya apabila rangka segi tiga bersudut tegak mesti bertemu dinding pada sudut tegak. Pengiraan luas berjalan ke arah sebaliknya: daripada ketinggian dan hipotenus yang diketahui, [[h=\\frac{2A}{c}]] memulihkan ketinggian tanpa mengukur kaki-kaki.",
            },
            {
              "kind": "p",
              "text": "Ini ialah lakaran geometri hipotetikal, bukan prosedur kejuruteraan. Kerja ukur dan struktur sebenar memerlukan ukuran yang sesuai, andaian reka bentuk, dan piawaian profesional; teorem ketinggian menghuraikan geometri, ia tidak menggantikan kaedah profesional.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Latihan dengan Jawapan",
          "blocks": [
            {
              "kind": "p",
              "text": "Lima masalah menggunakan nilai yang tidak dilihat dalam contoh utama. Selesaikan setiap satu, kemudian semak jawapan di bawah.",
            },
            {
              "kind": "h3",
              "text": "Masalah 1: Permulaan Berasaskan Sisi",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai kaki a = 9 cm dan b = 40 cm dengan hipotenus c = 41 cm. Cari ketinggian kepada hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Masalah 2: Permulaan Berasaskan Unjuran",
            },
            {
              "kind": "p",
              "text": "Ketinggian segi tiga bersudut tegak membahagikan hipotenus kepada p = 16 m dan q = 36 m. Cari ketinggian.",
            },
            {
              "kind": "h3",
              "text": "Masalah 3: Ukuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai a = 0.6 m, b = 0.8 m, c = 1.0 m. Cari ketinggian kepada hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Masalah 4: Sisi Hilang",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai kaki a = 7 in dan hipotenus c = 25 in. Cari ketinggian kepada hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Masalah 5: Luas Petak Kebun",
            },
            {
              "kind": "p",
              "text": "Petak kebun segi tiga bersudut tegak mempunyai luas A = 96 m² dan hipotenus 20 m. Cari ketinggian kepada hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Jawapan Masalah Latihan",
            },
            {
              "kind": "p",
              "text": "Masalah 1: h = (9 × 40) / 41 = 360/41 cm ≈ 8.780 cm. Mula-mula sahkan sisi: 9² + 40² = 81 + 1600 = 1681 = 41², jadi segi tiga itu sah.",
            },
            {
              "kind": "p",
              "text": "Masalah 2: h = √(16 × 36) = √576 = 24 m. Ketinggian terletak di antara dua unjuran, seperti yang mesti bagi min geometri.",
            },
            {
              "kind": "p",
              "text": "Masalah 3: h = (0.6 × 0.8) / 1.0 = 0.48 / 1.0 = 0.48 m. Perpuluhan memerlukan layanan yang sama seperti nombor bulat.",
            },
            {
              "kind": "p",
              "text": "Masalah 4: Pulihkan kaki yang tiada: b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Kemudian h = (7 × 24) / 25 = 168/25 in ≈ 6.72 in.",
            },
            {
              "kind": "p",
              "text": "Masalah 5: Gunakan laluan luas: h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9.6 m. Tiada ukuran kaki diperlukan.",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
          "blocks": [
            {
              "kind": "p",
              "text": "Panduan ini merangkumi kedua-dua mod ketinggian: panjang sisi dan unjuran hipotenus. Jika anda sudah tahu ukuran yang anda ada, alat khusus menyelidiki lebih mendalam: <a href=\"/right-triangle-altitude-from-sides-calculator/\">kalkulator ketinggian-daripada-sisi</a> dan <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator ketinggian-daripada-unjuran</a>. <a href=\"/right-triangle-projection-calculator/\">kalkulator unjuran</a> mencari p dan q sendiri apabila hanya sisi diketahui.",
            },
          ],
        },
      },
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "question": "Apakah ketinggian segi tiga bersudut tegak?",
          "answer": "Ketinggian kepada hipotenus ialah segmen serenjang dari bucu bersudut tegak ke hipotenus. Ia ialah ketinggian ketiga bagi segi tiga bersudut tegak, berbeza daripada dua kaki, dan ia membahagikan hipotenus kepada unjuran p dan q.",
        },
        {
          "question": "Bagaimana cara mengira ketinggian segi tiga bersudut tegak?",
          "answer": "Gunakan formula sisi [[h=\\frac{ab}{c}]] apabila kaki dan hipotenus diketahui, atau formula unjuran [[h=\\sqrt{pq}]] apabila segmen hipotenus diketahui. Kalkulator menggunakan mod yang sepadan dengan ukuran anda.",
        },
        {
          "question": "Apakah formula ketinggian menggunakan tiga sisi?",
          "answer": "Dengan kaki a dan b serta hipotenus c, ketinggian ialah [[h=\\frac{ab}{c}]]. Darabkan dua kaki dan bahagikan dengan hipotenus. Bagi segi tiga 3-4-5, h = (3 × 4) / 5 = 2.4.",
        },
        {
          "question": "Bagaimana cara mengira ketinggian daripada unjuran?",
          "answer": "Teorem ketinggian mengatakan [[h^2=pq]], jadi ambil punca kuasa dua: [[h=\\sqrt{pq}]]. Bagi p = 9 dan q = 16, h = √(9 × 16) = √144 = 12. Unjuran ialah segmen hipotenus, bukan kaki-kaki.",
        },
        {
          "question": "Bolehkah saya mengira ketinggian menggunakan hanya dua sisi?",
          "answer": "Ya, dengan memulihkan sisi ketiga terlebih dahulu. Dengan kedua-dua kaki, cari [[c=\\sqrt{a^2+b^2}]]; dengan satu kaki dan hipotenus, cari [[b=\\sqrt{c^2-a^2}]]. Kemudian gunakan [[h=\\frac{ab}{c}]] seperti biasa.",
        },
        {
          "question": "Adakah ketinggian sama dengan tinggi?",
          "answer": "Dalam segi tiga bersudut tegak kedua-dua istilah sering bertindih, tetapi ketinggian mempunyai maksud tepat sebagai segmen serenjang dari bucu ke sisi bertentangan. Di halaman ini, ketinggian sentiasa bermakna segmen serenjang dari bucu bersudut tegak ke hipotenus.",
        },
        {
          "question": "Adakah ketinggian sentiasa lebih pendek daripada hipotenus?",
          "answer": "Ya. Ketinggian ialah jarak terpendek dari bucu bersudut tegak ke hipotenus, dan hipotenus lebih panjang daripada mana-mana segmen sedemikian. Ia juga lebih pendek daripada kedua-dua kaki.",
        },
        {
          "question": "Bolehkah ketinggian sama dengan unjuran hipotenus?",
          "answer": "Ya, apabila unjuran sama. Jika p = q, maka [[h=\\sqrt{p \\times p}=p]], jadi ketinggian sama dengan setiap unjuran. Ini berlaku dalam segi tiga bersudut tegak sama kaki, di mana ketinggian juga separuh hipotenus.",
        },
        {
          "question": "Bagaimanakah teorem min geometri berkaitan dengan ketinggian?",
          "answer": "Teorem min geometri ialah nama lain bagi teorem ketinggian: [[h=\\sqrt{pq}]] mengatakan ketinggian ialah min geometri unjuran hipotenus. Keserupaan dua segi tiga yang lebih kecil membuktikannya.",
        },
        {
          "question": "Bagaimana cara menyemak pengiraan ketinggian saya?",
          "answer": "Bandungkan dua formula luas ab/2 dan ch/2; keduanya mesti sepadan. Jika unjuran diketahui, sahkan [[h^2=pq]]. Juga sahkan [[a^2+b^2=c^2]] untuk memastikan sisi membentuk segi tiga bersudut tegak yang sah.",
        },
        {
          "question": "Bolehkah saya menggunakan kalkulator ini untuk segi tiga bukan bersudut tegak?",
          "answer": "Tidak. Kedua-dua formula memerlukan sudut tegak: hujah luas memerlukan kaki yang serenjang, dan teorem ketinggian memerlukan keserupaan sudut tegak. Bagi segi tiga lain, hubungan ketinggian adalah berbeza.",
        },
        {
          "question": "Mod kalkulator yang manakah harus saya pilih?",
          "answer": "Pilih Altitude to Hypotenuse apabila anda mengetahui dua kaki dan hipotenus. Pilih Altitude Squared apabila anda mengetahui dua unjuran hipotenus p dan q. Memadankan mod dengan ukuran yang diketahui ialah satu-satunya persediaan yang penting.",
        },
      ],
      "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "relatedIntro": "Pilih alat yang sepadan dengan ukuran yang anda sudah ketahui.",
      "relatedItems": [
        "Kalkulator Ketinggian Segi Tiga Bersudut Tegak Daripada Sisi",
        "Kalkulator Ketinggian Segi Tiga Bersudut Tegak Daripada Unjuran",
        "Kalkulator Luas Segi Tiga Bersudut Tegak",
        "Kalkulator Sisi Segi Tiga Bersudut Tegak",
        "Kalkulator Unjuran Segi Tiga Bersudut Tegak",
      ],
    },
};
