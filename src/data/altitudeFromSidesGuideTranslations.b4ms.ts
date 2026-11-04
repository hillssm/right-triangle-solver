// altitudeFromSidesGuideTranslations.bms.ts: Right Triangle Altitude From Projections
// Guide (Page 28 of 45) translation.
export const B4_MS = {
  "ms": {
      "tocHeading": "Navigasi Bahagian",
      "tocItems": {
        "sec-intro": "Kalkulator Tinggi Segi Tiga Bersudut Tegak Daripada Sisi",
        "sec-calculate": "Kira Tinggi Segi Tiga Bersudut Tegak Daripada Panjang Sisi",
        "sec-altitude": "Apakah Tinggi Segi Tiga Bersudut Tegak?",
        "sec-sides": "Memahami Sisi-Sisi Segi Tiga Bersudut Tegak",
        "sec-formula": "Formula Tinggi Segi Tiga Bersudut Tegak Daripada Sisi",
        "sec-use": "Cara Menggunakan Kalkulator Tinggi Segi Tiga Bersudut Tegak Daripada Sisi",
        "sec-manual": "Pengiraan Tinggi Langkah Demi Langkah Tanpa Kalkulator",
        "sec-diagram": "Penjelasan Rajah Tinggi Segi Tiga Bersudut Tegak",
        "sec-proof": "Mengapa Formula Tinggi Berfungsi?",
        "sec-examples": "Contoh Kerja Tinggi Segi Tiga Bersudut Tegak Daripada Sisi",
        "sec-two-sides": "Cara Mencari Tinggi Apabila Hanya Dua Sisi Diketahui",
        "sec-verify": "Cara Mengesahkan Pengiraan Tinggi Anda",
        "sec-vs-projections": "Tinggi Daripada Sisi lwn Tinggi Daripada Unjuran",
        "sec-area-rel": "Hubungan Antara Tinggi, Luas dan Hipotenus",
        "sec-properties": "Sifat Khas Tinggi ke Hipotenus",
        "sec-mistakes": "Kesilapan Lazim Ketika Mengira Tinggi Segi Tiga Bersudut Tegak",
        "sec-applications": "Kegunaan Praktikal Pengiraan Tinggi Segi Tiga Bersudut Tegak",
        "sec-practice": "Soalan Latihan Beserta Penyelesaian",
        "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
        "sec-faq": "Soalan Lazim",
        "sec-conclusion": "Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Tinggi Segi Tiga Bersudut Tegak Daripada Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Masukkan dua kaki dan hipotenus untuk mencari tinggi dalam beberapa saat.",
            },
            {
              "kind": "p",
              "text": "Kalkulator ini mencari tinggi segi tiga bersudut tegak: jarak serenjang dari bucu sudut tegak ke hipotenus. Masukkan dua kaki, [[a]] dan [[b]], serta hipotenus [[c]], dan ia mengembalikan [[h]] menggunakan [[h=\\frac{ab}{c}]]. Jawapan keluar dalam unit yang sama seperti input anda.",
            },
            {
              "kind": "p",
              "text": "Contohnya, segi tiga dengan kaki 3 cm dan 4 cm serta hipotenus 5 cm memberi [[h=\\frac{3 \\times 4}{5}=2.4\\text{ cm}]]. Perhatikan bahawa 2.4 cm lebih pendek daripada mana-mana kaki, yang sentiasa benar untuk tinggi ke hipotenus.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Kira Tinggi Segi Tiga Bersudut Tegak Daripada Panjang Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator mengambil tiga ukuran. Kaki a ialah sisi serenjang pertama, kaki b ialah sisi serenjang kedua, dan hipotenus c ialah sisi terpanjang, bertentangan dengan sudut tegak. Ketiga-tiganya mesti menggunakan unit yang sama, jadi tukarkan meter kepada sentimeter atau kaki kepada inci sebelum menaip.",
            },
            {
              "kind": "p",
              "text": "Klik Kira Tinggi h untuk melihat hasil beserta penggantiannya, dan gunakan Tetapkan Semula untuk memadamkan medan bagi soalan seterusnya. Kalkulator menjawab dengan formula ringkas:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Jika anda hanya tahu dua sisi, dapatkan sisi ketiga dengan teorem Pythagoras terlebih dahulu, atau cuba <a href=\"/right-triangle-altitude-calculator/\">kalkulator tinggi</a> umum untuk titik permulaan yang berbeza.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Apakah Tinggi Segi Tiga Bersudut Tegak?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tinggi ialah jarak serenjang dari sesuatu bucu ke sisi bertentangan. Pada halaman ini ia sentiasa turun dari bucu sudut tegak terus ke hipotenus, bertemu dengannya pada sudut tegak. Hipotenus ialah tapak kerana ia satu-satunya sisi yang bertentangan dengan sudut tegak, dan segmen itu mendarat di dalam segi tiga.",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai tiga tinggi, tetapi dua daripadanya tidak menarik: kaki [[a]] ialah tinggi ke tapak [[b]], dan kaki [[b]] ialah tinggi ke tapak [[a]], kerana kaki-kaki sudah berserenjang. Yang menarik ialah tinggi ketiga, ke hipotenus, kerana ia segmen dalaman yang benar-benar baharu dan lebih pendek daripada mana-mana kaki.",
            },
            {
              "kind": "p",
              "text": "Tinggi ketiga itulah yang dicari kalkulator ini, dan inilah yang biasanya dimaksudkan buku teks apabila meminta tinggi segi tiga bersudut tegak.",
            },
          ],
        },
        "sec-sides": {
          "h2": "Memahami Sisi-Sisi Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Label yang betul menjadikan formula berfungsi. Kaki [[a]] dan [[b]] ialah dua sisi berserenjang yang bertemu pada sudut tegak. Hipotenus [[c]] ialah sisi terpanjang, bertentangan dengan sudut tegak. Tinggi [[h]] bukan sisi langsung tetapi turunan serenjang dari bucu sudut tegak ke hipotenus.",
            },
            {
              "kind": "p",
              "text": "Kenal pasti hipotenus dahulu: ia yang terpanjang daripada tiga panjang itu. Dalam segi tiga 3-4-5, 5 mestilah [[c]], dan semakan pantas [[3^2+4^2=5^2]] mengesahkan label itu. Melabelkan 5 sebagai kaki akan membahagi dengan sisi yang salah dan merosakkan jawapan.",
            },
          ],
          "table": {
            "headers": [
              "Pembolehubah",
              "Definisi",
              "Peranan dalam pengiraan",
            ],
            "rows": [
              [
                "a",
                "Kaki serenjang pertama",
                "Didarab dengan b dalam pengangka",
              ],
              [
                "b",
                "Kaki serenjang kedua",
                "Didarab dengan a dalam pengangka",
              ],
              [
                "c",
                "Hipotenus, sisi terpanjang",
                "Membahagi ab dalam penyebut",
              ],
              [
                "h",
                "Tinggi ke hipotenus",
                "Hasil formula",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Formula Tinggi Segi Tiga Bersudut Tegak Daripada Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Formulanya pendek dan mudah dihafal:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Kaki didarab kerana hasil darabnya berkait dengan luas: luas bersamaan separuh daripada [[ab]], jadi [[ab]] ialah dua kali luas. Membahagi dengan hipotenus kemudian mengasingkan [[h]], kerana luas yang sama juga bersamaan separuh daripada [[ch]]. Hasilnya ialah panjang biasa, sebab itulah ketiga-tiga input mesti berkongsi satu unit.",
            },
            {
              "kind": "p",
              "text": "Cuba segi tiga 6-8-10: [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Secara geometri, 4.8 cm ialah laluan terpendek dari bucu sudut tegak ke hipotenus. (Bukti penuh terdapat dalam bahagian bukti di bawah.)",
            },
            {
              "kind": "p",
              "text": "Satu kebiasaan berguna ialah menyemak unit sebelum menggantikan. Jika [[a]] ialah 60 mm, [[b]] ialah 8 cm, dan [[c]] ialah 100 mm, tukarkan kepada satu unit dahulu: [[a=6\\text{ cm}]], [[b=8\\text{ cm}]], [[c=10\\text{ cm}]], iaitu segi tiga 6-8-10 yang sama dan memberi [[4.8\\text{ cm}]] yang sama. Formula tidak pernah membetulkan unit bercampur untuk anda, jadi satu semakan ini mencegah kesilapan paling memalukan.",
            },
          ],
        },
        "sec-use": {
          "h2": "Cara Menggunakan Kalkulator Tinggi Segi Tiga Bersudut Tegak Daripada Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Ikuti lapan langkah ini untuk hasil yang kemas setiap kali.",
            },
            {
              "kind": "steps",
              "steps": [
                "Cari sudut tegak, penjuru tempat dua sisi bertemu dengan tepat, selalunya ditanda dengan petak kecil. Tanpa sudut tegak yang disahkan, formula ini tidak terpakai.",
                "Kenal pasti dua kaki serenjang yang membentuk penjuru itu; namakannya a dan b mengikut sebarang susunan, kerana formula melayannya secara simetri.",
                "Kenal pasti hipotenus: sisi yang bertentangan dengan sudut tegak dan yang terpanjang daripada tiga sisi. Sahkan ia lebih panjang daripada kedua-dua kaki.",
                "Tukarkan ketiga-tiga ukuran kepada unit yang sama sebelum menaip apa-apa. Unit bercampur ialah ralat input paling lazim.",
                "Masukkan a, b, dan c ke dalam medan sepadan masing-masing.",
                "Klik butang Kira Tinggi h untuk mendarab kaki, membahagi dengan hipotenus, dan memaparkan tinggi.",
                "Baca hasil dan semak bahawa nombor yang digantikan sepadan dengan apa yang anda niatkan untuk masukkan.",
                "Gunakan Tetapkan Semula untuk memadam input sebelum soalan seterusnya, supaya nilai lama tidak boleh merosakkan jawapan baharu.",
              ],
            },
            {
              "kind": "p",
              "text": "Sebelum mempercayai sesuatu jawapan, jalankan semakan Pythagoras: [[a^2+b^2]] sepatutnya sama dengan [[c^2]]. Pembundaran ukuran kecil tidak mengapa, tetapi ketidakpadanan besar bermakna sisi-sisi itu tidak membentuk segi tiga bersudut tegak.",
            },
          ],
        },
        "sec-manual": {
          "h2": "Pengiraan Tinggi Langkah Demi Langkah Tanpa Kalkulator",
          "blocks": [
            {
              "kind": "p",
              "text": "Anda boleh mencari tinggi dengan tangan dalam lima langkah pendek. Ambil [[a=9\\text{ cm}]], [[b=12\\text{ cm}]], [[c=15\\text{ cm}]], dan sahkan dahulu segi tiga itu sah: [[9^2+12^2=81+144=225=15^2]].",
            },
            {
              "kind": "p",
              "text": "Langkah 1, tulis formula: [[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Langkah 2, gantikan: [[[h=\\frac{9 \\times 12}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Langkah 3, darabkan kaki: [[9 \\times 12=108]], jadi [[[h=\\frac{108}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Langkah 4, bahagi: [[108 \\div 15=7.2]], jadi [[h=7.2\\text{ cm}]]. Langkah 5, sahkan dengan luas. Daripada kaki, [[A=\\frac{9 \\times 12}{2}=54\\text{ cm}^2]]; daripada hipotenus dan tinggi, [[A=\\frac{15 \\times 7.2}{2}=54\\text{ cm}^2]].",
            },
            {
              "kind": "p",
              "text": "Kedua-dua luas sepadan kerana ia menghuraikan segi tiga yang sama. Kaki memberi satu pasangan tapak-tinggi dan hipotenus memberi satu lagi, tetapi rantau yang dikurung adalah sama. Luas yang sepadan mengesahkan tinggi.",
            },
            {
              "kind": "p",
              "text": "Mengapa semakan luas berfungsi begitu baik? Kerana formula tinggi itu sendiri datang daripada menyamakan dua ungkapan luas, mengesahkan melalui luas menutup lingkaran: sebarang kesilapan aritmetik dalam pendaraban atau pembahagian akan membuatkan dua luas itu tidak sepadan. Apabila ia sepadan, penggunaan formula dan aritmetik disahkan dalam satu langkah.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Penjelasan Rajah Tinggi Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Labelkan segi tiga ABC dengan sudut tegak pada C. Maka AC ialah kaki [[a]], BC ialah kaki [[b]], dan AB ialah hipotenus [[c]]. Titik D terletak pada AB, dan segmen CD bertemu AB pada sudut tegak; CD ialah tinggi [[h]]. Penanda petak kecil pada C dan D menunjukkan kedua-dua sudut tegak.",
            },
            {
              "kind": "p",
              "text": "Tinggi CD membelah segi tiga besar kepada dua segi tiga bersudut tegak yang lebih kecil, ACD dan BCD, masing-masing dengan sudut tegaknya pada D. Kedua-duanya sebangun dengan segi tiga asal ABC dan antara satu sama lain, fakta yang menjadi sandaran bahagian bukti dan unjuran.",
            },
            {
              "kind": "p",
              "text": "Apabila melakar versi anda sendiri, mulakan dengan sudut tegak pada C, lukis kaki-kaki, kemudian sambungkan hujung bebasnya untuk hipotenus. Turunkan tinggi terakhir, pastikan ia bertemu hipotenus dengan tepat. Melabel mengikut susunan a, b, c, h memastikan setiap pengiraan kemudian tersusun.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Segi tiga ABC dengan sudut tegak pada C, tinggi CD dilukis ke hipotenus AB; AC bersamaan a, BC bersamaan b, AB bersamaan c, CD bersamaan h",
            "caption": "Tinggi CD turun dari sudut tegak C ke hipotenus AB; h bersamaan (a x b) / c.",
          },
        },
        "sec-proof": {
          "h2": "Mengapa Formula Tinggi Berfungsi?",
          "blocks": [
            {
              "kind": "p",
              "text": "Formula terbit daripada luas segi tiga. Luas bersamaan separuh tapak darab tinggi, dan segi tiga bersudut tegak menawarkan dua pasangan tapak-tinggi yang mudah. Dengan kaki sebagai tapak dan tinggi:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{a \\times b}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dengan hipotenus sebagai tapak dan tinggi sebagai ketinggian:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{c \\times h}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Kedua-dua ungkapan menghuraikan segi tiga yang sama, jadi samakan:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Darab dengan 2, kemudian bahagi dengan [[c]]:",
            },
            {
              "kind": "p",
              "text": "[[[ab=ch]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Satu segi tiga boleh diukur dengan pasangan tapak-tinggi yang berbeza sementara luasnya kekal tetap, jadi menyamakan dua ungkapan adalah sah dan algebra mengasingkan [[h]]. Rajah menunjukkan segi tiga yang sama dua kali, sekali dengan tapak [[a]] dan tinggi [[b]], sekali dengan tapak [[c]] dan tinggi [[h]].",
            },
            {
              "kind": "p",
              "text": "Bukti juga menjelaskan mengapa tinggi sentiasa lebih pendek daripada kaki. Kerana [[c]] ialah sisi terpanjang, membahagi [[ab]] dengan yang terbesar daripada tiga panjang mesti menghasilkan nilai lebih kecil daripada mana-mana kaki sahaja. Setiap formula kemudian pada halaman ini, daripada unjuran hingga segi tiga sebangun, ialah variasi pada satu idea luas ini.",
            },
          ],
          "image": {
            "src": "altitude-two-base-height.svg",
            "alt": "Segi tiga bersudut tegak yang sama dilukis dua kali: pertama dengan tapak a dan tinggi b, kemudian dengan tapak c dan tinggi h",
            "caption": "Segi tiga yang sama, dua pasangan tapak-tinggi: luas bersamaan ab/2 dan ch/2, jadi h bersamaan ab/c.",
          },
        },
        "sec-examples": {
          "h2": "Contoh Kerja Tinggi Segi Tiga Bersudut Tegak Daripada Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Tujuh contoh di bawah bergerak dari rangkap tiga nombor bulat klasik kepada perpuluhan, kaki sama, dan unit bercampur. Setiap satu mengikut rentak yang sama: nyatakan yang diberi, gantikan ke dalam formula, permudahkan, dan akhiri dengan unit. Membacanya mengikut susunan membina tabiat menyemak unit dan kemunasabahan sebelum mempercayai sebarang jawapan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Segi Tiga 3-4-5 Klasik",
            },
            {
              "kind": "p",
              "text": "Diberi [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tinggi ialah [[2.4\\text{ cm}]]. Contoh penanda aras ini berbaloi dihafal, kerana 3-4-5 ialah rangkap tiga Pythagoras paling lazim dan 2.4 ialah perpuluhan yang kemas.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Segi Tiga 5-12-13",
            },
            {
              "kind": "p",
              "text": "Diberi [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Tinggi tepat ialah [[60/13]] meter, kira-kira 4.615 m. Kekalkan pecahan apabila ketepatan penting, kerana pembundaran awal membawa ralat ke kerja susulan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Segi Tiga 8-15-17",
            },
            {
              "kind": "p",
              "text": "Diberi [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{8 \\times 15}{17}=\\frac{120}{17}\\approx 7.059\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tinggi kira-kira [[7.059\\text{ cm}]]. Menukar kaki kepada 15 dan 8 memberi hasil darab yang sama, mengesahkan formula melayan kaki secara simetri.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Kaki Sama dan Segi Tiga 45-45-90",
            },
            {
              "kind": "p",
              "text": "Diberi [[a=10\\text{ cm}]], [[b=10\\text{ cm}]], [[c=10\\sqrt{2}\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{10 \\times 10}{10\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7.071\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Kaki sama menjadikan segi tiga 45-45-90, dan tinggi membelahnya kepada dua separuh yang kongruen. Bentuk tepat [[5\\sqrt{2}]] cm lebih baik daripada perpuluhan dalam kerja teori.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[a=1.5\\text{ m}]], [[b=2\\text{ m}]], [[c=2.5\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{1.5 \\times 2}{2.5}=\\frac{3}{2.5}=1.2\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Tinggi ialah [[1.2\\text{ m}]]. Perpuluhan tidak memerlukan layanan khas: darab dan bahagi seperti biasa, kekalkan unit yang sama pada jawapan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Unit Bercampur Yang Mesti Diselaraskan Dahulu",
            },
            {
              "kind": "p",
              "text": "Diberi [[a=30\\text{ cm}]], [[b=0.4\\text{ m}]], [[c=0.5\\text{ m}]], tukarkan kepada sentimeter dahulu: [[a=30\\text{ cm}]], [[b=40\\text{ cm}]], [[c=50\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{30 \\times 40}{50}=\\frac{1200}{50}=24\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Menukar dahulu memberi [[24\\text{ cm}]] yang kemas. Meter yang tidak ditukar akan membesarkan jawapan sebanyak faktor 100.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Segi Tiga 20-21-29 yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[a=20\\text{ ft}]], [[b=21\\text{ ft}]], [[c=29\\text{ ft}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{20 \\times 21}{29}=\\frac{420}{29}\\approx 14.483\\text{ ft}]]]",
            },
            {
              "kind": "p",
              "text": "Tinggi kira-kira [[14.483\\text{ ft}]], selesa di bawah kaki lebih pendek 20 ft, seperti yang sentiasa berlaku untuk tinggi ke hipotenus.",
            },
          ],
          "image": {
            "src": "altitude-345.svg",
            "alt": "Segi tiga bersudut tegak dengan kaki 3 dan 4, hipotenus 5, dan tinggi 2.4 dilukis ke hipotenus",
            "caption": "Segi tiga 3-4-5 dilukis mengikut skala: tinggi h bersamaan (3 x 4) / 5 = 2.4.",
          },
        },
        "sec-two-sides": {
          "h2": "Cara Mencari Tinggi Apabila Hanya Dua Sisi Diketahui",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator langsung meminta ketiga-tiga sisi, tetapi dua sisi sudah cukup untuk mendapatkan sisi ketiga dengan teorem Pythagoras. Terdapat dua kes, bergantung pada sisi mana yang anda tahu, dan kedua-duanya berakhir dengan formula tinggi yang biasa.",
            },
            {
              "kind": "p",
              "text": "Logiknya sama dalam kedua-dua kes: teorem Pythagoras memulihkan sisi yang hilang, dan formula tinggi menyelesaikan selebihnya. Kes 1 menambah kaki di bawah punca kuasa dua untuk mencari hipotenus, manakala Kes 2 menolak untuk mendapatkan semula kaki. Perhatikan Kes 2 hanya berfungsi apabila sisi yang diketahui benar-benar hipotenus; jika [[a>c]], punca kuasa dua menjadi negatif dan segi tiga sebegitu tidak wujud.",
            },
            {
              "kind": "h3",
              "text": "Kes 1: Kedua-dua Kaki Diketahui",
            },
            {
              "kind": "p",
              "text": "Ambil [[a=7]] dan [[b=24]]. Cari hipotenus dahulu: [[[c=\\sqrt{7^2+24^2}=\\sqrt{49+576}=\\sqrt{625}=25]]] Kemudian tinggi menyusul: [[[h=\\frac{7 \\times 24}{25}=\\frac{168}{25}=6.72]]]",
            },
            {
              "kind": "h3",
              "text": "Kes 2: Satu Kaki dan Hipotenus Diketahui",
            },
            {
              "kind": "p",
              "text": "Ambil [[a=8]] dan [[c=10]]. Dapatkan semula kaki yang hilang dengan teorem Pythagoras yang disusun semula: [[[b=\\sqrt{c^2-a^2}=\\sqrt{100-64}=\\sqrt{36}=6]]] Kemudian tinggi ialah: [[[h=\\frac{8 \\times 6}{10}=\\frac{48}{10}=4.8]]]",
            },
            {
              "kind": "p",
              "text": "Anggap ini sebagai alternatif pendidikan, kerana kalkulator menjangkakan tiga ukuran. <a href=\"/right-triangle-side-calculator/\">Kalkulator sisi</a> khusus boleh mendapatkan semula panjang yang hilang sebelum anda meneruskan di sini.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cara Mengesahkan Pengiraan Tinggi Anda",
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga semakan bebas mengesahkan jawapan tinggi. Ketiga-tiganya di bawah menggunakan segi tiga 3-4-5, yang tingginya 2.4. Gunakan sekurang-kurangnya satu daripadanya setiap kali jawapan akan dimasukkan ke kerja lanjutan, kerana tinggi yang salah secara senyap merosakkan semua yang dibina di atasnya.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 1: Perbandingan Luas",
            },
            {
              "kind": "p",
              "text": "Kira luas dengan kedua-dua cara dan perlukan persetujuan. Daripada kaki: [[[A=\\frac{3 \\times 4}{2}=6]]] Daripada hipotenus dan tinggi: [[[A=\\frac{5 \\times 2.4}{2}=6]]] Luas yang sepadan mengesahkan tinggi itu sendiri.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 2: Unjuran Hipotenus",
            },
            {
              "kind": "p",
              "text": "Belahkan hipotenus kepada unjuran kaki [[p=\\frac{a^2}{c}=\\frac{9}{5}=1.8]] dan [[q=\\frac{b^2}{c}=\\frac{16}{5}=3.2]]. Tinggi ialah min geometrinya: [[[h=\\sqrt{1.8 \\times 3.2}=\\sqrt{5.76}=2.4]]] Mendapatkan semula 2.4 daripada formula berbeza ialah bukti kukuh.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 3: Semakan Pythagoras",
            },
            {
              "kind": "p",
              "text": "Sahkan sisi-sisi membentuk segi tiga bersudut tegak: [[[3^2+4^2=9+16=25=5^2]]] Ini mengesahkan panjang sisi, bukan tinggi. Jalankan dahulu apabila soalan memberi anda sisi-sisi, kemudian gunakan semakan luas atau unjuran untuk mengesahkan tinggi.",
            },
          ],
        },
        "sec-vs-projections": {
          "h2": "Tinggi Daripada Sisi lwn Tinggi Daripada Unjuran",
          "blocks": [
            {
              "kind": "p",
              "text": "Tinggi boleh dicari dengan dua cara. Kaedah sisi pada halaman ini ialah [[h=\\frac{ab}{c}]], bermula daripada tiga panjang sisi. Kaedah unjuran ialah [[h=\\sqrt{pq}]], bermula daripada dua segmen tempat tinggi membelah hipotenus. Kedua-duanya menghuraikan segmen yang sama dan sentiasa sepadan untuk segi tiga yang sama; pilihan bergantung pada ukuran mana yang anda ada. Untuk laluan kedua, lihat halaman <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator tinggi-daripada-unjuran</a>.",
            },
          ],
          "table": {
            "headers": [
              "Kaedah",
              "Input yang diperlukan",
              "Formula",
              "Kes penggunaan terbaik",
            ],
            "rows": [
              [
                "Tinggi daripada sisi",
                "Kaki a dan b, hipotenus c",
                "h = ab / c",
                "Panjang sisi diketahui; tiada punca kuasa dua diperlukan",
              ],
              [
                "Tinggi daripada unjuran",
                "Segmen hipotenus p dan q",
                "h = punca kuasa dua (p darab q)",
                "Kaki tinggi membelah hipotenus kepada bahagian yang diketahui",
              ],
            ],
          },
          "image": {
            "src": "altitude-projections-similar.svg",
            "alt": "Segi tiga bersudut tegak dengan tinggi h menunjukkan unjuran p dan q serta dua segi tiga sebangun yang lebih kecil",
            "caption": "Tinggi membelah hipotenus kepada p dan q; formula sisi dan formula unjuran memberi h yang sama.",
          },
        },
        "sec-area-rel": {
          "h2": "Hubungan Antara Tinggi, Luas dan Hipotenus",
          "blocks": [
            {
              "kind": "p",
              "text": "Tinggi, luas, dan hipotenus berhubung melalui dua ungkapan untuk satu luas. Daripada kaki: [[[A=\\frac{ab}{2}]]] Daripada hipotenus dan tinggi: [[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Menyelesaikan ungkapan kedua untuk [[h]] memberi susunan semula yang berguna: [[[h=\\frac{2A}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Ini menawarkan laluan kedua apabila luas diketahui secara langsung. Untuk segi tiga dengan luas [[54\\text{ cm}^2]] dan hipotenus [[15\\text{ cm}]], [[[h=\\frac{2 \\times 54}{15}=\\frac{108}{15}=7.2\\text{ cm}]]], jawapan yang sama yang diberikan formula sisi untuk segi tiga 9-12-15. Jika anda memerlukan luas dahulu, <a href=\"/right-triangle-area-calculator/\">kalkulator luas</a> mengendalikan langkah itu, dan <a href=\"/right-triangle-area-from-altitude-calculator/\">kalkulator luas-daripada-tinggi</a> membalikkan pengiraan sebaik [[h]] diketahui.",
            },
            {
              "kind": "p",
              "text": "Laluan ini menyerlah apabila soalan menyatakan luas secara langsung, seperti yang dilakukan banyak soalan buku teks, atau apabila luas telah dikira dalam bahagian sebelumnya. Daripada mencari kaki-kaki individu, anda bahagi dua kali luas dengan hipotenus dan selesai dalam satu baris. Ia tinggi yang sama yang diberikan formula sisi, dicapai daripada titik permulaan berbeza.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Sifat Khas Tinggi ke Hipotenus",
          "blocks": [
            {
              "kind": "p",
              "text": "Tinggi ke hipotenus sentiasa lebih pendek daripada mana-mana kaki dan lebih pendek daripada hipotenus itu sendiri, kerana [[h=ab/c]] jatuh di bawah [[a]] setiap kali [[b<c]]. Kaki sama memberi segi tiga 45-45-90 simetri yang tingginya membahagi dua hipotenus. Untuk hipotenus tetap, tinggi paling besar apabila kaki sama: dengan hipotenus 10, segi tiga 45-45-90 memberi [[h=5]] manakala segi tiga 6-8-10 memberi hanya 4.8.",
            },
            {
              "kind": "p",
              "text": "Tiada belahan hipotenus yang sama mengalahkan maksimum itu, iaitu ketaksamaan [[h \\le \\frac{c}{2}]], dengan kesamaan hanya dalam kes 45-45-90. Penskalaan juga berkelakuan ringkas: menggandakan setiap sisi menggandakan tinggi, jadi 3-4-5 pada 2.4 menjadi 6-8-10 pada 4.8. Akhir sekali, tinggi membahagi segi tiga kepada dua segi tiga lebih kecil yang sebangun dengan yang asal, sebab itulah hubungan unjuran dan luas semuanya sepadan.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dua segi tiga bersudut tegak berkongsi hipotenus 10: segi tiga 45-45-90 dengan tinggi 5 dan segi tiga 6-8-10 dengan tinggi 4.8",
            "caption": "Hipotenus 10 yang sama: kaki sama memberi tinggi tertinggi, 5.",
          },
        },
        "sec-mistakes": {
          "h2": "Kesilapan Lazim Ketika Mengira Tinggi Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Elakkan sembilan kesilapan ini dan hampir setiap pengiraan tinggi berjalan lancar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mengelirukan hipotenus dengan kaki. Pembetulan: pilih sisi terpanjang sebagai c dahulu; dalam segi tiga 3-4-5, 5 mestilah c.",
                "Mendarab ketiga-tiga sisi. Mengira abc tiada makna geometri di sini. Pembetulan: darab hanya kaki, kemudian bahagi dengan hipotenus.",
                "Lupa membahagi dengan c. Berhenti pada ab meninggalkan dua kali luas, bukan panjang. Pembetulan: sentiasa akhiri dengan pembahagian.",
                "Mencampur unit. Memasukkan a dalam sentimeter dan c dalam meter merosakkan pembahagian secara senyap. Pembetulan: tukarkan semuanya kepada satu unit dahulu.",
                "Menggunakan sisi yang tidak membentuk segi tiga bersudut tegak. Formula mengandaikan sudut tegak, jadi 2, 3, 4 memberi bukan-bukan. Pembetulan: semak a^2 + b^2 = c^2 dahulu.",
                "Mengelirukan tinggi dengan salah satu kaki. Buku teks yang meminta tinggi biasanya bermaksud tinggi ke hipotenus. Pembetulan: sahkan tinggi mana yang dikehendaki soalan.",
                "Membundarkan nilai perantaraan terlalu awal. Membundarkan 60/13 kepada 4.6 di tengah pengiraan menyuntik ralat. Pembetulan: bundarkan hanya jawapan akhir.",
                "Menggunakan formula luas secara salah. Menulis Luas = c darab h tanpa separuh menggandakan jawapan. Pembetulan: gunakan Luas = ch/2 apabila menyelesaikan untuk h.",
                "Mengelirukan tinggi ke hipotenus dengan ketinggian relatif kepada kaki. Ini segmen berbeza. Pembetulan: tinggi ke hipotenus ialah segmen dalaman yang lebih pendek h = ab/c.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Kegunaan Praktikal Pengiraan Tinggi Segi Tiga Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Pelajar bertemu tinggi ini dalam kerja rumah geometri tentang luas, kesebangunan, dan min geometri, manakala guru menggunakannya untuk menghubungkan teorem Pythagoras dengan formula luas dalam satu gambar, kerana satu rajah membawa kedua-dua [[ab/2]] dan [[ch/2]]. Pelukis pelan dan pereka menggunakannya apabila panel atau pendakap segi tiga mesti didimensi daripada tingginya, dan susun atur pendakap segi tiga kadangkala memerlukan jarak silang terpendek antara sambungan dan anggota.",
            },
            {
              "kind": "p",
              "text": "Juru ukur yang bekerja dengan garis pandang segi tiga bersudut tegak menggunakan hubungan yang sama untuk menyemak jarak yang dikira berbanding yang diukur. Anggap ini sebagai model matematik dengan ukuran ideal: kerja kejuruteraan atau pembinaan sebenar memerlukan kaedah pengukuran yang sesuai, andaian reka bentuk yang dinyatakan, dan piawaian profesional sebelum sebarang hasil formula dipercayai di tapak.",
            },
            {
              "kind": "p",
              "text": "Di dalam kelas tinggi juga berfungsi sebagai topik jambatan: ia mengikat teorem Pythagoras, formula luas, dan segi tiga sebangun dalam satu rajah. Satu rajah yang dilukis dengan baik boleh membawa satu pelajaran penuh, sebab itulah pembinaan ini begitu kerap muncul dalam buku teks.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Soalan Latihan Beserta Penyelesaian",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuba setiap soalan sendiri, kemudian semak jawapan kerja di bawah.",
            },
            {
              "kind": "h3",
              "text": "Soalan 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai kaki 6 cm dan 8 cm serta hipotenus 10 cm. Cari tinggi ke hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Soalan 2: Rangkap Tiga Pythagoras",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai kaki 12 m dan 16 m serta hipotenus 20 m. Cari tinggi ke hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Soalan 3: Ukuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai kaki 4.5 in dan 6 in serta hipotenus 7.5 in. Cari tinggi ke hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Soalan 4: Kaki Sama",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai dua kaki sama 14 ft setiap satu. Cari hipotenus dan kemudian tinggi ke hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Soalan 5: Penukaran Unit",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai sisi 2.4 m, 70 cm, dan 2.5 m. Tukarkan unit dahulu, kemudian cari tinggi ke hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Jawapan Soalan Latihan",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Corak 3-4-5 yang diskalakan memberi perpuluhan yang kemas.",
            },
            {
              "kind": "p",
              "text": "2. [[12^2+16^2=144+256=400=20^2]] mengesahkan rangkap tiga, kemudian [[h=\\frac{12 \\times 16}{20}=\\frac{192}{20}=9.6\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\frac{4.5 \\times 6}{7.5}=\\frac{27}{7.5}=3.6\\text{ in}]]. Perpuluhan membahagi dengan kemas apabila rangkap tiga konsisten.",
            },
            {
              "kind": "p",
              "text": "4. [[c=\\sqrt{14^2+14^2}=14\\sqrt{2}\\text{ ft}]], kemudian [[h=\\frac{14 \\times 14}{14\\sqrt{2}}=7\\sqrt{2}\\approx 9.899\\text{ ft}]], tepat separuh hipotenus seperti yang dijangkakan untuk 45-45-90.",
            },
            {
              "kind": "p",
              "text": "5. Dalam sentimeter: [[a=240]], [[b=70]], [[c=250]], dan [[2.4^2+0.7^2=5.76+0.49=6.25=2.5^2]] ternyata betul. Kemudian [[h=\\frac{240 \\times 70}{250}=\\frac{16800}{250}=67.2\\text{ cm}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
          "blocks": [
            {
              "kind": "p",
              "text": "Dengan formula tinggi di tangan, pilih alat seterusnya mengikut apa yang anda tahu. Jika anda tahu segmen hipotenus dan bukan sisi, tujulah kalkulator unjuran. Jika anda tahu tinggi dan mahukan luas, alat <a href=\"/right-triangle-area-from-hypotenuse-and-altitude-calculator/\">luas daripada hipotenus dan tinggi</a> membalikkan pengiraan daripada bahagian luas. Lima kalkulator berkaitan di bawah merangkumi setiap pengiraan jiran. Mulakan dengan alat yang sepadan dengan ukuran yang anda sudah ada, dan biarkan setiap hasil menyemak yang seterusnya.",
            },
          ],
        },
      },
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "question": "Apakah formula tinggi daripada tiga sisi?",
          "answer": "Formulanya ialah [[h=\\frac{ab}{c}]], dengan [[a]] dan [[b]] ialah dua kaki berserenjang dan [[c]] ialah hipotenus. Darabkan kaki, kemudian bahagikan dengan hipotenus. Hasilnya ialah panjang dalam unit yang sama seperti sisi yang anda masukkan.",
        },
        {
          "question": "Bagaimana anda mencari tinggi segi tiga bersudut tegak?",
          "answer": "Kenal pasti sudut tegak, labelkan dua kaki [[a]] dan [[b]] serta hipotenus [[c]], pastikan semua unit sepadan. Kemudian kira [[h=\\frac{ab}{c}]]. Untuk segi tiga 3-4-5 ini memberi [[h=\\frac{12}{5}=2.4]], segmen yang lebih pendek daripada mana-mana kaki.",
        },
        {
          "question": "Mengapa hipotenus berada dalam penyebut?",
          "answer": "Ia datang daripada bukti luas. Luas bersamaan [[ab/2]] menggunakan kaki dan [[ch/2]] menggunakan hipotenus sebagai tapak. Menyamakan kedua-duanya memberi [[ab=ch]], dan menyelesaikan untuk [[h]] meletakkan [[c]] dalam penyebut. Semakin panjang hipotenus, semakin pendek tinggi untuk luas yang diberi.",
        },
        {
          "question": "Bolehkah saya mengira tinggi menggunakan hanya dua sisi?",
          "answer": "Ya, dengan satu langkah tambahan. Jika anda tahu kedua-dua kaki, cari hipotenus dengan [[c=\\sqrt{a^2+b^2}]] dahulu. Jika anda tahu satu kaki dan hipotenus, cari kaki lain dengan [[b=\\sqrt{c^2-a^2}]]. Kemudian gunakan [[h=\\frac{ab}{c}]] seperti biasa.",
        },
        {
          "question": "Adakah tinggi sama dengan ketinggian?",
          "answer": "Ia bergantung pada ketinggian mana yang dimaksudkan. Ketinggian biasanya bermaksud jarak serenjang ke tapak yang dipilih, jadi tinggi ke hipotenus ialah ketinggian apabila hipotenus ialah tapak. Jika kaki dipilih sebagai tapak, ketinggiannya ialah kaki yang lain, segmen yang berbeza sama sekali.",
        },
        {
          "question": "Adakah tinggi sentiasa lebih pendek daripada kaki?",
          "answer": "Ya, tinggi ke hipotenus sentiasa lebih pendek daripada mana-mana kaki segi tiga yang sama. Ia segmen terpendek dari bucu sudut tegak ke hipotenus, manakala setiap kaki ialah laluan yang lebih panjang ke sisi yang sama. Ia juga lebih pendek daripada hipotenus itu sendiri.",
        },
        {
          "question": "Bolehkah saya menggunakan formula ini untuk sebarang segi tiga?",
          "answer": "Tidak, hanya untuk segi tiga bersudut tegak. Terbitannya bergantung pada kaki yang berserenjang, yang memberi luas sebagai [[ab/2]]. Untuk segi tiga tirus atau cakah, cari tinggi dengan formula luas umum atau trigonometri sebaliknya. Sentiasa sahkan sudut tegak dahulu.",
        },
        {
          "question": "Bagaimana jika panjang sisi saya tidak memenuhi teorem Pythagoras?",
          "answer": "Maka ia tidak membentuk segi tiga bersudut tegak dan formula tidak terpakai. Ukur semula sisi atau semak semula label, kerana sisi terpanjang mestilah hipotenus. Perbezaan pembundaran kecil tidak mengapa, tetapi ketidakpadanan besar bermakna segi tiga itu tidak bersudut tegak.",
        },
        {
          "question": "Bagaimana saya mencari tinggi segi tiga 3-4-5?",
          "answer": "Darabkan kaki dan bahagikan dengan hipotenus: [[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]] (atau apa sahaja unit yang digunakan sisi anda). Segi tiga 3-4-5 ialah contoh kerja klasik kerana ketiga-tiga sisi ialah nombor bulat.",
        },
        {
          "question": "Berapakah tinggi segi tiga 5-12-13?",
          "answer": "Ia ialah [[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615]], dalam unit sisi. Kekalkan pecahan tepat [[60/13]] apabila anda memerlukan ketepatan penuh, dan bundarkan kepada 4.615 hanya untuk jawapan akhir yang dilaporkan.",
        },
        {
          "question": "Bagaimana tinggi berkait dengan luas?",
          "answer": "Luas boleh ditulis dua cara: [[A=\\frac{ab}{2}]] dan [[A=\\frac{ch}{2}]]. Menyusun semula yang kedua memberi [[h=\\frac{2A}{c}]], jadi mengetahui luas dan hipotenus ialah laluan lain ke tinggi yang sama. Kedua-dua bentuk menghuraikan segi tiga yang serupa.",
        },
        {
          "question": "Apakah perbezaan antara tinggi daripada sisi dan tinggi daripada unjuran?",
          "answer": "Tinggi daripada sisi menggunakan [[h=\\frac{ab}{c}]] dengan tiga panjang sisi. Tinggi daripada unjuran menggunakan [[h=\\sqrt{pq}]] dengan dua segmen hipotenus. Kedua-duanya mencari segmen yang sama; pilihan bergantung pada ukuran mana yang anda ada.",
        },
      ],
      "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "relatedIntro": "Pilih kalkulator yang sepadan dengan ukuran yang anda sudah ada.",
      "relatedItems": [
        "Kalkulator Tinggi Segi Tiga Bersudut Tegak",
        "Kalkulator Tinggi Segi Tiga Bersudut Tegak Daripada Unjuran",
        "Kalkulator Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Luas Segi Tiga Bersudut Tegak",
        "Kalkulator Luas Segi Tiga Bersudut Tegak Daripada Tinggi",
      ],
    },
};
