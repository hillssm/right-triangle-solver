// altitudeFromProjectionsGuideTranslations.bms.ts: Right Triangle Altitude From Projections
// Guide (Page 27 of 45) translation.
export const B4_MS = {
  "ms": {
      "tocHeading": "Navigasi Bahagian",
      "tocItems": {
        "sec-intro": "Kira Altitud Segi Tiga Bersudut Tepat daripada Unjuran",
        "sec-altitude": "Apakah Altitud Segi Tiga Bersudut Tepat?",
        "sec-projections": "Apakah Unjuran dalam Segi Tiga Bersudut Tepat?",
        "sec-formula": "Formula Altitud Segi Tiga Bersudut Tepat daripada Unjuran",
        "sec-steps": "Cara Mengira Altitud daripada Unjuran Langkah demi Langkah",
        "sec-diagram": "Penjelasan Rajah Altitud Segi Tiga Bersudut Tepat",
        "sec-proof": "Mengapa Formula Altitud Berfungsi? Bukti Menggunakan Segi Tiga Serupa",
        "sec-examples": "Contoh Kerja Altitud daripada Unjuran",
        "sec-verify": "Cara Menyemak Pengiraan Altitud Anda",
        "sec-relationships": "Hubungan Antara Altitud, Hipotenus dan Kaki Segi Tiga",
        "sec-geomean": "Teorem Min Geometri dan Altitud Segi Tiga Bersudut Tepat",
        "sec-special": "Kes Khas dan Sifat Penting",
        "sec-mistakes": "Kesilapan Biasa Semasa Mencari Altitud daripada Unjuran",
        "sec-applications": "Aplikasi Praktikal Teorem Altitud",
        "sec-practice": "Masalah Latihan dengan Jawapan",
        "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
        "sec-faq": "Soalan Lazim",
        "sec-conclusion": "Satu Punca Kuasa Dua, Kefahaman Penuh",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kira Altitud Segi Tiga Bersudut Tepat daripada Unjuran",
          "blocks": [
            {
              "kind": "p",
              "text": "Darabkan kedua-dua unjuran hipotenus, kemudian ambil punca kuasa dua.",
            },
            {
              "kind": "p",
              "text": "Kalkulator Altitud Segi Tiga Bersudut Tepat daripada Unjuran mencari altitud segi tiga bersudut tepat daripada dua unjuran, [[p]] dan [[q]], yang dipotong oleh altitud pada hipotenus. Tiada kaki atau sudut diperlukan. Masukkan unjuran [[p]] dan unjuran [[q]] dalam unit yang sama, dan kalkulator akan mengembalikan altitud [[h]] dengan teorem altitud:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Formula ini berfungsi kerana melukis altitud dari bucu sudut tepat menghasilkan dua segi tiga yang lebih kecil yang serupa antara satu sama lain. Keserupaan memaksa altitud menjadi min geometri bagi kedua-dua unjuran. Sebagai gambaran ringkas, jika [[p=9\\text{ cm}]] dan [[q=16\\text{ cm}]], darabkan [[9]] dengan [[16]] untuk mendapat [[144]], kemudian ambil punca kuasa dua untuk mendapat altitud [[12\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "Taipkan segmen hipotenus pertama ke dalam medan Unjuran [[p]] dan segmen kedua ke dalam medan Unjuran [[q]], kekalkan kedua-duanya dalam unit yang sama. Tekan Calculate untuk melihat altitud, dan Reset mengosongkan medan untuk masalah baharu. Hasilnya membawa unit yang sama seperti input. Jika anda tahu kaki segi tiga tersebut, cuba <a href=\"/right-triangle-altitude-calculator/\">kalkulator altitud</a> yang dibina untuk kes itu.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Apakah Altitud Segi Tiga Bersudut Tepat?",
          "blocks": [
            {
              "kind": "p",
              "text": "Altitud segi tiga bersudut tepat ialah segmen serenjang yang dilukis dari bucu sudut tepat ke hipotenus. Panjangnya mengukur jarak terpendek dari bucu tersebut ke hipotenus, kerana garis serenjang sentiasa laluan terpendek dari satu titik ke satu garis.",
            },
            {
              "kind": "p",
              "text": "Lukiskan altitud dan ia mendarat pada hipotenus di satu titik yang dipanggil kaki altitud, biasanya dilabelkan D. Dari D, altitud naik pada tepat 90 darjah untuk bertemu bucu sudut tepat C. Pertemuan sudut tepat inilah yang menjadikan CD altitud dan bukan sekadar segmen lain.",
            },
            {
              "kind": "p",
              "text": "Pemula kadang-kadang keliru antara altitud dengan salah satu kaki. Kaki-kaki, AC dan BC, bertemu pada sudut tepat dan membentuk sisi luar segi tiga. Altitud CD berjalan di dalam segi tiga dari bucu C ke sisi AB. Ia adalah segmen ketiga yang berbeza dengan panjang [[h]] tersendiri, dan ia hanya wujud setelah altitud benar-benar dilukis.",
            },
            {
              "kind": "p",
              "text": "Hipotenus boleh berfungsi sebagai tapak kerana mana-mana sisi boleh menjadi tapak setelah altitud yang sepadan dilukis, membolehkan luas ditulis sebagai separuh darab hipotenus darab altitud ini. Melukis altitud juga membahagikan segi tiga kepada dua segi tiga bersudut tepat yang lebih kecil, ACD dan CBD, yang membawa hubungan segi tiga serupa di sebalik setiap formula pada halaman ini.",
            },
          ],
        },
        "sec-projections": {
          "h2": "Apakah Unjuran dalam Segi Tiga Bersudut Tepat?",
          "blocks": [
            {
              "kind": "p",
              "text": "Apabila altitud CD bertemu hipotenus AB, kaki D membahagikan AB kepada dua segmen yang lebih kecil: AD, dipanggil [[p]], dan DB, dipanggil [[q]]. Kedua-dua segmen ini ialah unjuran kaki-kaki ke atas hipotenus. Setiap satunya ialah bayang yang dilemparkan oleh kaki ke atas hipotenus apabila cahaya bersinar lurus ke bawah sepanjang altitud.",
            },
            {
              "kind": "p",
              "text": "Unjuran [[p]] terletak bersebelahan kaki AC, dan unjuran [[q]] terletak bersebelahan kaki BC. Kerana ia adalah dua bahagian hipotenus, jumlahnya tepat:",
            },
            {
              "kind": "p",
              "text": "[[[p+q=c]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[c]] ialah hipotenus penuh. Hubungan tambah ini membantu menyemak jawapan dan mendapatkan semula unjuran yang hilang apabila hipotenus dan satu unjuran diketahui. Jika anda memerlukan pengiraan sebaliknya, iaitu mencari unjuran daripada panjang sisi, <a href=\"/right-triangle-projection-calculator/\">kalkulator unjuran</a> mengendalikan arah itu.",
            },
            {
              "kind": "p",
              "text": "Kedua-dua unjuran mestilah panjang positif. Nilai sifar atau negatif tidak menggambarkan sebarang segi tiga sebenar, hanya bentuk terdegenerasi. Dan unjuran bukanlah kaki-kaki itu sendiri: kaki AC dan BC condong ke sisi, manakala [[p]] dan [[q]] terletak rata sepanjang hipotenus. Mencampuradukkan kedua-duanya ialah salah satu kesilapan paling biasa dilakukan pelajar.",
            },
          ],
          "table": {
            "headers": [
              "Ukuran",
              "Maksud",
            ],
            "rows": [
              [
                "[[p]]",
                "Segmen hipotenus pertama",
              ],
              [
                "[[q]]",
                "Segmen hipotenus kedua",
              ],
              [
                "[[h]]",
                "Altitud serenjang",
              ],
              [
                "[[c]]",
                "Hipotenus lengkap",
              ],
              [
                "[[a]]",
                "Kaki segi tiga pertama",
              ],
              [
                "[[b]]",
                "Kaki segi tiga kedua",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Formula Altitud Segi Tiga Bersudut Tepat daripada Unjuran",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem altitud menyatakan:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil punca kuasa dua positif kedua-dua belah memberikan formula kerja:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Setiap simbol mempunyai maksud yang tetap. Huruf [[h]] mewakili altitud ke hipotenus, iaitu kuantiti yang anda mahukan. Huruf [[p]] dan [[q]] mewakili kedua-dua unjuran hipotenus, iaitu kuantiti yang anda masukkan. Pendaraban menggabungkan unjuran, dan punca kuasa dua membatalkan hasil darab itu untuk mengembalikan panjang.",
            },
            {
              "kind": "p",
              "text": "Pendaraban muncul kerana keserupaan antara dua segi tiga kecil menghasilkan kadaran [[\\frac{h}{p}=\\frac{q}{h}]]. Pendaraban silang kadaran itu memberikan [[h^2=p\\times q]]. Punca kuasa dua muncul kerana [[h]] ialah panjang, dan hanya punca positif [[h^2]] menamakan jarak sebenar.",
            },
            {
              "kind": "p",
              "text": "Unit memerlukan perhatian. Jika [[p]] dan [[q]] kedua-duanya diukur dalam sentimeter, hasil darabnya berada dalam sentimeter persegi, yang betul untuk langkah pertengahan seperti luas. Mengambil punca kuasa dua menukarkan sentimeter persegi kembali kepada sentimeter biasa untuk altitud akhir. Inilah sebabnya kedua-dua input mestilah berkongsi unit yang sama: mencampurkan unit akan merosakkan hasil darab dan jawapannya. Cara ringkas untuk mengingati formula ini ialah bahawa altitud ialah min geometri bagi kedua-dua unjuran, kerana min geometri dua nombor ialah punca kuasa dua hasil darabnya.",
            },
          ],
        },
        "sec-steps": {
          "h2": "Cara Mengira Altitud daripada Unjuran Langkah demi Langkah",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Kenal pasti kedua-dua unjuran hipotenus. Cari segmen-segmen yang membahagikan hipotenus oleh kaki altitud, dan labelkan yang bersebelahan kaki AC sebagai [[p]] dan yang bersebelahan kaki BC sebagai [[q]].",
                "Pastikan kedua-dua ukuran menggunakan unit yang sama. Jika satu dalam milimeter dan satu lagi dalam sentimeter, tukarkan salah satu sebelum menyentuh formula.",
                "Darabkan [[p]] dan [[q]]. Hasil darab [[h^2]] ialah nilai pertengahan seperti luas, jadi unitnya ialah kuasa dua unit input.",
                "Ambil punca kuasa dua positif hasil darab tersebut. Punca negatif dibuang kerana panjang tidak boleh negatif.",
                "Tuliskan jawapan akhir dengan unitnya. Nombor tanpa unit mengundang kesilapan kemudian, terutamanya apabila ia digunakan dalam pengiraan yang lebih panjang.",
                "Semak bahawa jawapannya munasabah. Altitud sentiasa terletak antara kedua-dua unjuran, dan ia tidak boleh melebihi separuh hipotenus.",
              ],
            },
            {
              "kind": "p",
              "text": "Inilah kaedah yang digunakan pada contoh penuh. Andaikan [[p=4\\text{ cm}]] dan [[q=9\\text{ cm}]]. Pertama darabkan: [[4\\times 9=36]], jadi [[h^2=36\\text{ cm}^2]]. Kemudian ambil punca kuasa dua positif:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Altitud ialah [[6\\text{ cm}]]. Sebagai semakan kewarasan, [[6]] terletak antara unjuran [[4]] dan [[9]], sepadan dengan tingkah laku min geometri yang diterangkan kemudian dalam panduan ini.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Penjelasan Rajah Altitud Segi Tiga Bersudut Tepat",
          "blocks": [
            {
              "kind": "p",
              "text": "Segi tiga ABC mempunyai sudut tepatnya di C. Dari C, altitud CD turun serenjang ke hipotenus AB, bertemu dengannya pada kaki D. Segmen AD dilabelkan [[p]], DB dilabelkan [[q]], dan CD dilabelkan [[h]], manakala hipotenus AB ialah [[c]] dan kaki AC dan BC ialah [[a]] dan [[b]].",
            },
            {
              "kind": "p",
              "text": "Dua segi empat sama kecil menandakan dua sudut tepat: satu di C dalam segi tiga asal, dan satu di D tempat altitud bertemu hipotenus. Altitud CD kelihatan sebagai segmen dalaman yang kemas, berbeza secara visual daripada dua kaki yang membentuk bingkai luar segi tiga.",
            },
            {
              "kind": "p",
              "text": "Altitud membahagikan ABC kepada dua segi tiga bersudut tepat yang lebih kecil, ACD dan CBD, yang serupa antara satu sama lain dan dengan segi tiga asal. Dalam soalan buku teks, unjuran sering digambarkan sebagai dua segmen hipotenus, atau ringkasnya sebagai nombor yang terletak di kedua-dua belah kaki altitud. Labelkan mereka [[p]] dan [[q]] sebelum mengira apa-apa.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Segi tiga bersudut tepat ABC dengan sudut tepat di C, altitud CD ke hipotenus AB, unjuran AD = [[p]] dan DB = [[q]], altitud CD = [[h]]",
            "caption": "Altitud CD membahagikan hipotenus AB kepada unjuran [[p]] dan [[q]]; [[h]] ialah min geometri bagi [[p]] dan [[q]].",
          },
        },
        "sec-proof": {
          "h2": "Mengapa Formula Altitud Berfungsi? Bukti Menggunakan Segi Tiga Serupa",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem altitud bukanlah peraturan untuk dihafal secara membuta tuli. Ia terhasil daripada keserupaan dua segi tiga yang diwujudkan oleh altitud.",
            },
            {
              "kind": "p",
              "text": "Dalam segi tiga ACD, sudut-sudut tirus di A dan C berjumlah 90 darjah, dan dalam segi tiga besar ABC, sudut A dan B juga berjumlah 90 darjah. Jadi sudut di C dalam ACD sama dengan sudut B, dan sudut di A sama dengan sudut di C dalam CBD. Kedua-dua segi tiga kecil berkongsi ketiga-tiga sudut, yang menjadikan mereka serupa.",
            },
            {
              "kind": "p",
              "text": "Keserupaan bermakna sisi-sisi sepadan kekal dalam nisbah yang sama. Dalam segi tiga ACD, sisi bertentangan sudut A ialah altitud [[h]]. Dalam segi tiga CBD, sisi bertentangan sudut yang sama di C ialah unjuran [[q]]. Pasangan sepadan yang lain ialah unjuran [[p]] (bertentangan sudut tirus kedua dalam ACD) dibahagikan altitud [[h]] (bertentangan sudut sepadan dalam CBD). Menyamakan ini memberikan kadaran:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{h}{p}=\\frac{q}{h}]]]",
            },
            {
              "kind": "p",
              "text": "Pendaraban silang menukarkan kadaran itu kepada:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil punca kuasa dua kedua-dua belah memberikan [[h=\\sqrt{p\\times q}]]. Persamaan [[h^2=p\\times q]] mempunyai dua punca algebra, positif dan negatif, tetapi panjang ialah kuantiti positif, jadi hanya punca positif menggambarkan altitud.",
            },
          ],
          "image": {
            "src": "altitude-proof.svg",
            "alt": "Dua segi tiga bersudut tepat yang lebih kecil ACD dan CBD dengan sisi-sisi sepadan dilabel untuk menunjukkan [[\\frac{h}{p}=\\frac{q}{h}]]",
            "caption": "Segi tiga ACD dan CBD adalah serupa, jadi [[\\frac{h}{p}=\\frac{q}{h}]] dan [[h]] kuasa dua sama dengan [[p]] darab [[q]].",
          },
        },
        "sec-examples": {
          "h2": "Contoh Kerja Altitud daripada Unjuran",
          "blocks": [
            {
              "kind": "h3",
              "text": "Contoh 1: Nombor Penuh Mudah",
            },
            {
              "kind": "p",
              "text": "Diberi [[p=4\\text{ cm}]] dan [[q=9\\text{ cm}]], gantikan ke dalam formula:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Altitud ialah [[6\\text{ cm}]], nombor penuh kerana [[36]] ialah kuasa dua sempurna.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Unjuran Sama",
            },
            {
              "kind": "p",
              "text": "Diberi [[p=5\\text{ cm}]] dan [[q=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 5}=\\sqrt{25}=5\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Apabila unjuran-unjuran adalah sama, altitud sama dengan setiap unjuran: kes segi tiga bersudut tepat sama kaki, di mana altitud tepat separuh hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Unjuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[p=3.6\\text{ m}]] dan [[q=6.4\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{3.6 \\times 6.4}=\\sqrt{23.04}=4.8\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Perpuluhan tidak mengubah apa-apa: [[23.04]] ialah kuasa dua sempurna, jadi altitud ialah tepat [[4.8\\text{ m}]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Unjuran Tidak Sama",
            },
            {
              "kind": "p",
              "text": "Diberi [[p=2\\text{ cm}]] dan [[q=18\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{2 \\times 18}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Altitud ialah [[6\\text{ cm}]], bukan [[10\\text{ cm}]]. Memuratakan memberikan min aritmetik, [[10]], tetapi altitud ialah min geometri, yang lebih rendah untuk input yang tidak sama.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Bukan Kuasa Dua Sempurna",
            },
            {
              "kind": "p",
              "text": "Diberi [[p=5\\text{ cm}]] dan [[q=7\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 7}=\\sqrt{35}\\text{ cm}\\approx 5.916\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[35]] bukan kuasa dua sempurna, jadi jawapan tepat ialah [[\\sqrt{35}\\text{ cm}]]. Gunakan penghampiran [[5.916\\text{ cm}]] untuk kerja praktikal, tetapi kekalkan bentuk tepat apabila jawapan digunakan untuk pengiraan lanjutan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Unit Input Berbeza",
            },
            {
              "kind": "p",
              "text": "Diberi [[p=40\\text{ mm}]] dan [[q=9\\text{ cm}]]. Unit-unit berbeza, jadi tukarkan dahulu: [[40\\text{ mm}=4\\text{ cm}]]. Kemudian:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Menukar dahulu ialah satu-satunya langkah selamat: memasukkan [[40]] dan [[9]] secara langsung memberikan [[\\sqrt{40\\times 9}=\\sqrt{360}]], nombor yang salah dan tanpa unit.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cara Menyemak Pengiraan Altitud Anda",
          "blocks": [
            {
              "kind": "h3",
              "text": "Kaedah 1: Semakan Min Geometri",
            },
            {
              "kind": "p",
              "text": "Kuasa duakan altitud anda dan bandingkannya dengan hasil darab unjuran. Kedua-dua nilai mestilah sepadan. Untuk [[p=4]] dan [[q=9]] dengan [[h=6]]: [[6^2=36]] dan [[4\\times 9=36]]. Persetujuan mengesahkan aritmetiknya.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 2: Hubungan Hipotenus dan Kaki",
            },
            {
              "kind": "p",
              "text": "Bina semula seluruh segi tiga dan semak silang dengan formula kedua. Pertama tambahkan unjuran: [[c=4+9=13]]. Kemudian dapatkan semula kaki dengan hubungan unjuran-kaki: [[a=\\sqrt{p\\times c}=\\sqrt{52}\\approx 7.211]] dan [[b=\\sqrt{q\\times c}=\\sqrt{117}\\approx 10.817]]. Sekarang sahkan dengan [[h=ab/c]]: [[(7.211\\times 10.817)/13\\approx 78/13=6]], yang sepadan. <a href=\"/right-triangle-side-calculator/\">Kalkulator sisi</a> memastikan aritmetik kaki kemas semasa anda menyemak.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 3: Hubungan Luas Segi Tiga",
            },
            {
              "kind": "p",
              "text": "Segi tiga yang sama mempunyai dua ungkapan untuk luasnya. Menggunakan kaki: Luas = [[(a\\times b)/2=(7.211\\times 10.817)/2\\approx 39]]. Menggunakan hipotenus dan altitud: Luas = [[(c\\times h)/2=(13\\times 6)/2=39]]. Kedua-dua ungkapan bersetuju, yang secara bebas mengesahkan [[h=6]]. Alat <a href=\"/right-triangle-area-from-altitude-calculator/\">luas daripada altitud</a> dibina berdasarkan hubungan yang sama ini.",
            },
          ],
        },
        "sec-relationships": {
          "h2": "Hubungan Antara Altitud, Hipotenus dan Kaki Segi Tiga",
          "blocks": [
            {
              "kind": "p",
              "text": "Lima formula mengikat keenam-enam bahagian berlabel bersama. Jadual di bawah meringkaskan apa yang dicari oleh setiap formula dan apa yang diperlukannya.",
            },
            {
              "kind": "p",
              "text": "Empat formula pertama memerlukan sekurang-kurangnya satu unjuran. Mereka datang daripada segi tiga serupa yang diwujudkan oleh altitud, jadi ia hanya terpakai apabila altitud dilukis dari bucu sudut tepat. Formula kelima, [[h=ab/c]], tidak memerlukan sebarang unjuran: ia datang daripada menyamakan dua ungkapan luas, dan ia berfungsi apabila kaki dan hipotenus diketahui.",
            },
            {
              "kind": "p",
              "text": "Inilah perbezaan praktikal antara dua kalkulator altitud di laman ini. Apabila anda tahu unjuran, teorem altitud memberikan [[h]] secara langsung dalam satu langkah. Apabila anda tahu sisi pula, <a href=\"/right-triangle-altitude-from-sides-calculator/\">mencari altitud daripada sisi</a> menggunakan laluan luas. Pilih alat yang sepadan dengan data yang diberikan.",
            },
            {
              "kind": "p",
              "text": "Satu lagi bacaan berguna bagi [[a^2=p\\times c]]: setiap kaki ialah min geometri hipotenus dan unjuran bersebelahannya, mencerminkan bagaimana altitud ialah min geometri bagi kedua-dua unjuran.",
            },
          ],
          "table": {
            "headers": [
              "Formula",
              "Mencari",
              "Memerlukan",
            ],
            "rows": [
              [
                "[[c=p+q]]",
                "Hipotenus",
                "Kedua-dua unjuran",
              ],
              [
                "[[h^2=p\\times q]]",
                "Altitud",
                "Kedua-dua unjuran",
              ],
              [
                "[[a^2=p\\times c]]",
                "Kaki bersebelahan unjuran [[p]]",
                "Unjuran [[p]] dan hipotenus",
              ],
              [
                "[[b^2=q\\times c]]",
                "Kaki bersebelahan unjuran [[q]]",
                "Unjuran [[q]] dan hipotenus",
              ],
              [
                "[[h=ab/c]]",
                "Altitud",
                "Kedua-dua kaki dan hipotenus",
              ],
            ],
          },
        },
        "sec-geomean": {
          "h2": "Teorem Min Geometri dan Altitud Segi Tiga Bersudut Tepat",
          "blocks": [
            {
              "kind": "p",
              "text": "Min geometri dua nombor positif ialah punca kuasa dua hasil darabnya. Untuk [[p]] dan [[q]] ia ialah [[\\sqrt{p\\times q}]], yang tepat ialah formula altitud. Jadi mengatakan altitud ialah min geometri unjuran hanyalah menyatakan semula teorem dalam perkataan yang berbeza.",
            },
            {
              "kind": "p",
              "text": "Min aritmetik ialah purata yang biasa: [[(p+q)/2]]. Untuk [[p=4]] dan [[q=9]], min geometri ialah [[\\sqrt{36}=6]] manakala min aritmetik ialah [[13/2=6.5]]. Altitud sama dengan [[6]], bukan [[6.5]], kerana kadaran segi tiga serupa memaksa hubungan pendaraban, bukan hubungan tambah.",
            },
            {
              "kind": "p",
              "text": "Min geometri tidak pernah melebihi min aritmetik untuk input positif, dengan kesamaan hanya apabila [[p=q]]. Itulah sebabnya altitud adalah terbesar, relatif kepada hipotenus, apabila unjuran-unjuran adalah sama. Sebuah segi empat tepat [[4]] dengan [[9]] dan sebuah segi empat sama [[6]] dengan [[6]] mempunyai luas yang sama, [[36]], yang merupakan idea yang sama dilukis sebagai bentuk: altitud ialah sisi segi empat sama yang luasnya sama dengan segi empat tepat.",
            },
          ],
          "image": {
            "src": "altitude-geometric-mean.svg",
            "alt": "Segi empat tepat [[4]] dengan [[9]] dan segi empat sama [[6]] dengan [[6]] dengan luas yang sama, serta garis nombor yang membandingkan min geometri [[6]] dan min aritmetik [[6.5]]",
            "caption": "Untuk [[p=4]] dan [[q=9]], min geometri [[6]] (altitud) terletak di bawah min aritmetik [[6.5]].",
          },
        },
        "sec-special": {
          "h2": "Kes Khas dan Sifat Penting",
          "blocks": [
            {
              "kind": "h3",
              "text": "Unjuran Sama",
            },
            {
              "kind": "p",
              "text": "Apabila [[p=q]], altitud sama dengan nilai sepunya itu: [[h=\\sqrt{p\\times p}=p]]. Kaki altitud mendarat pada titik tengah hipotenus, kaki-kaki adalah sama, dan segi tiga ialah segi tiga bersudut tepat sama kaki dengan sudut tirus 45 darjah, memberikan altitud maksimum untuk hipotenus yang tetap.",
            },
            {
              "kind": "h3",
              "text": "Unjuran Sangat Tidak Sama",
            },
            {
              "kind": "p",
              "text": "Apabila [[p]] kecil dan [[q]] besar, altitud kekal sederhana: [[p=1]] dan [[q=100]] memberikan [[h=10]], jauh di bawah titik tengah unjuran. Min geometri memberatkan input kecil lebih berat daripada purata.",
            },
            {
              "kind": "h3",
              "text": "Hipotenus Tetap",
            },
            {
              "kind": "p",
              "text": "Kekalkan hipotenus [[c=p+q]] tetap dan ubah pembahagiannya. Hasil darab [[p\\times q]], dan oleh itu altitud, memuncak apabila pembahagian sekata. Secara algebra, [[h\\le\\frac{p+q}{2}]], dengan kesamaan tepat apabila [[p=q]]. Dalam bahasa mudah, tiada altitud boleh melebihi separuh hipotenusnya.",
            },
            {
              "kind": "h3",
              "text": "Unjuran Sifar",
            },
            {
              "kind": "p",
              "text": "Menetapkan [[p=0]] memberikan [[h=0]]: kaki altitud bertindih dengan bucu A, segi tiga runtuh menjadi segmen, dan tiada segi tiga tulen kekal. Anggap unjuran sifar sebagai terdegenerasi, bukan input kalkulator yang sah.",
            },
            {
              "kind": "h3",
              "text": "Unjuran Negatif",
            },
            {
              "kind": "p",
              "text": "Unjuran ialah panjang, dan panjang tidak boleh negatif. Input negatif tidak mempunyai makna geometri dan tidak menghasilkan altitud yang sah; kesilapan terletak di hulu, pada cara segmen diukur.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dua segi tiga bersudut tepat dengan hipotenus yang sama tetapi pembahagian unjuran yang berbeza menunjukkan altitud yang berbeza",
            "caption": "Hipotenus sama, pembahagian berbeza: unjuran sama memberikan altitud tertinggi.",
          },
        },
        "sec-mistakes": {
          "h2": "Kesilapan Biasa Semasa Mencari Altitud daripada Unjuran",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Menambah unjuran dan bukannya mendarabkannya. Kadaran segi tiga serupa memerlukan hasil darab: dengan [[p=4]] dan [[q=9]], [[\\sqrt{4+9}\\approx 3.606]] adalah salah, manakala [[\\sqrt{4\\times 9}=6]] adalah betul.",
                "Lupa punca kuasa dua. Berhenti pada [[h^2=36]] meninggalkan nombor seperti luas di tempat panjang sepatutnya. Sentiasa ambil punca kuasa dua positif untuk selesai.",
                "Keliru antara unjuran dengan kaki segi tiga. Kaki condong keluar dari hipotenus manakala [[p]] dan [[q]] terletak rata sepanjangnya; hanya segmen hipotenus tergolong dalam teorem altitud.",
                "Mencampurkan unit tanpa menukar. Dengan [[p=40\\text{ mm}]] dan [[q=9\\text{ cm}]], tukarkan dahulu ([[40\\text{ mm}=4\\text{ cm}]]), kemudian kira [[h=\\sqrt{4\\times 9}=6\\text{ cm}]].",
                "Memasukkan ukuran negatif. Unjuran negatif tidak bermakna dan boleh menghasilkan keputusan khayalan. Pastikan kedua-dua [[p]] dan [[q]] adalah positif sebelum mengira.",
                "Membawa [[h^2]] ke hadapan sebagai [[h]] dalam penyelesaian yang lebih panjang. Kekalkan label dengan betul: [[h^2=36]] ialah langkah kuasa dua, [[h=6]] ialah altitud.",
                "Membundarkan terlalu awal. Kekalkan bentuk tepat seperti [[\\sqrt{35}]] selama mungkin dan bundarkan hanya jawapan akhir.",
                "Menggunakan formula pada segi tiga bukan bersudut tepat. Kadaran [[\\frac{h}{p}=\\frac{q}{h}]] memerlukan sudut tepat di C; tanpanya, hujah keserupaan runtuh dan formula tidak terpakai.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplikasi Praktikal Teorem Altitud",
          "blocks": [
            {
              "kind": "p",
              "text": "Kelas geometri menggunakan teorem ini selalu. Masalah altitud menguji sama ada pelajar dapat mengesan unjuran, memilih formula yang betul, dan mengesahkan dengan teorem Pythagoras, dan latihan buku teks sering memberikan unjuran sebagai nombor biasa pada rajah berlabel.",
            },
            {
              "kind": "p",
              "text": "Dalam masalah geometri gaya pembinaan, teorem melengkapkan segi tiga bersudut tepat apabila hanya ukuran separa diketahui. Merangka kekuda segi tiga mungkin menetapkan segmen hipotenus dahulu, dengan altitud menentukan ketinggian puncak, dan bukti keserupaan menggunakan kadaran [[\\frac{h}{p}=\\frac{q}{h}]] yang sama secara langsung.",
            },
            {
              "kind": "p",
              "text": "Lakaran ukur dan kejuruteraan kadang-kadang memodelkan garis pandang sebagai altitud segi tiga bersudut tepat, dengan unjuran dibaca dari garis dasar. Dua jarak tanah sewenang-wenangnya tidak menentukan ketinggian dengan sendirinya; geometri segi tiga bersudut tepat mesti benar-benar terpakai sebelum teorem digunakan.",
            },
            {
              "kind": "p",
              "text": "Lukisan seni bina bagi hujung gable atau bumbung plat lipat menggunakan hubungan yang sama untuk mendapatkan semula dimensi yang hilang, dengan syarat sudut tepat benar-benar wujud.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Masalah Latihan dengan Jawapan",
          "blocks": [
            {
              "kind": "h3",
              "text": "Masalah 1: Permulaan",
            },
            {
              "kind": "p",
              "text": "Unjuran-unjuran segi tiga bersudut tepat ialah [[p=25\\text{ cm}]] dan [[q=16\\text{ cm}]]. Cari altitud.",
            },
            {
              "kind": "h3",
              "text": "Masalah 2: Permulaan-Pertengahan",
            },
            {
              "kind": "p",
              "text": "Sebuah segi tiga bersudut tepat mempunyai unjuran [[p=12\\text{ m}]] dan [[q=27\\text{ m}]]. Cari altitud ke hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Masalah 3: Pertengahan",
            },
            {
              "kind": "p",
              "text": "Kaki altitud membahagikan hipotenus kepada segmen [[7\\text{ in}]] dan [[28\\text{ in}]]. Apakah altitud?",
            },
            {
              "kind": "h3",
              "text": "Masalah 4: Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Sebuah segi tiga bersudut tepat mempunyai unjuran [[p=2.5\\text{ ft}]] dan [[q=14.4\\text{ ft}]]. Kira altitud.",
            },
            {
              "kind": "h3",
              "text": "Masalah 5: Aplikasi",
            },
            {
              "kind": "p",
              "text": "Kekuda bumbung segi tiga bersudut tepat mempunyai rasuk pengikat sebagai hipotenusnya. Kaki altitud membelah rasuk pengikat kepada segmen [[3.2\\text{ m}]] dan [[12.8\\text{ m}]]. Cari ketinggian kekuda pada altitud.",
            },
            {
              "kind": "h3",
              "text": "Jawapan Masalah Latihan",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\sqrt{25\\times 16}=\\sqrt{400}=20\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "2. [[h=\\sqrt{12\\times 27}=\\sqrt{324}=18\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\sqrt{7\\times 28}=\\sqrt{196}=14\\text{ in}]].",
            },
            {
              "kind": "p",
              "text": "4. [[h=\\sqrt{2.5\\times 14.4}=\\sqrt{36}=6\\text{ ft}]].",
            },
            {
              "kind": "p",
              "text": "5. [[h=\\sqrt{3.2\\times 12.8}=\\sqrt{40.96}=6.4\\text{ m}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Satu Punca Kuasa Dua, Kefahaman Penuh",
          "blocks": [
            {
              "kind": "p",
              "text": "Satu punca kuasa dua merangkumi seluruh idea: altitud segi tiga bersudut tepat ialah min geometri bagi kedua-dua unjuran pada hipotenusnya. Darabkan [[p]] dan [[q]], ambil punca kuasa dua positif, dan kekalkan unit konsisten, maka jawapan sudah di tangan.",
            },
            {
              "kind": "p",
              "text": "Di sebalik pengiraan ringkas itu terletak sepotong geometri yang kemas. Altitud mewujudkan dua segi tiga serupa, keserupaan memberikan kadaran, dan kadaran memberikan formula. Apabila anda dapat melihat rantaian itu, menyemak jawapan, mengelakkan kesilapan, dan mengenal pasti unjuran dalam masalah baharu semuanya menjadi rutin.",
            },
          ],
        },
      },
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "question": "Apakah formula altitud daripada unjuran?",
          "answer": "Formulanya ialah [[h=\\sqrt{p\\times q}]], di mana [[h]] ialah altitud ke hipotenus dan [[p]] dan [[q]] ialah dua unjuran. Kedua-dua unjuran mestilah panjang positif yang diukur dalam unit yang sama. Darabkan mereka, kemudian ambil punca kuasa dua positif. Hasilnya ialah altitud dalam unit yang sama seperti input.",
        },
        {
          "question": "Apakah unjuran hipotenus?",
          "answer": "Unjuran ialah dua segmen yang membahagikan hipotenus oleh kaki altitud. Dalam segi tiga ABC dengan sudut tepat di C dan altitud CD, segmen AD ialah unjuran [[p]] dan DB ialah unjuran [[q]]. Bersama-sama mereka membentuk hipotenus penuh, jadi [[p+q=c]]. Mereka ialah segmen rata sepanjang hipotenus, bukan kaki segi tiga.",
        },
        {
          "question": "Mengapa altitud ialah min geometri dua unjuran?",
          "answer": "Kerana altitud mewujudkan dua segi tiga serupa. Dalam segi tiga ACD dan CBD, sisi sepadan memberikan kadaran [[\\frac{h}{p}=\\frac{q}{h}]]. Pendaraban silang menghasilkan [[h^2=p\\times q]], jadi [[h=\\sqrt{p\\times q}]]. Oleh kerana min geometri dua nombor ialah punca kuasa dua hasil darabnya, altitud tepat ialah min geometri bagi [[p]] dan [[q]].",
        },
        {
          "question": "Bolehkah saya mencari altitud tanpa mengetahui kaki segi tiga?",
          "answer": "Ya. Teorem altitud hanya memerlukan dua unjuran, jadi kaki adalah input yang tidak perlu. Masukkan [[p]] dan [[q]] ke dalam kalkulator dan ia mengembalikan [[h]] secara langsung. Ini ialah laluan terpantas apabila rajah atau pernyataan masalah memberikan segmen hipotenus. Jika anda tahu kaki pula, formula yang berbeza, [[h=ab/c]], terpakai.",
        },
        {
          "question": "Bolehkah kedua-dua unjuran mempunyai panjang yang berbeza?",
          "answer": "Ya, dan biasanya begitu. Unjuran ialah mana-mana dua panjang positif, sama atau tidak sama, dan formula mengendalikan kedua-duanya. Dengan [[p=2]] dan [[q=18]], altitud ialah [[6]], terletak antara kedua-dua nilai. Unjuran sama hanyalah kes khas yang menghasilkan segi tiga bersudut tepat sama kaki.",
        },
        {
          "question": "Apakah yang berlaku apabila kedua-dua unjuran adalah sama?",
          "answer": "Apabila [[p=q]], altitud sama dengan nilai sepunya itu, kerana [[\\sqrt{p\\times p}=p]]. Kaki altitud mendarat pada titik tengah hipotenus, dan segi tiga menjadi segi tiga bersudut tepat sama kaki dengan dua kaki sama dan sudut tirus [[45^\\circ]]. Untuk hipotenus yang tetap, pembahagian ini juga memberikan altitud tertinggi yang mungkin.",
        },
        {
          "question": "Bolehkah altitud lebih panjang daripada mana-mana unjuran?",
          "answer": "Ia boleh melebihi unjuran yang lebih kecil. Dengan [[p=2]] dan [[q=18]], altitud ialah [[6]], yang lebih panjang daripada [[p=2]]. Min geometri sentiasa terletak antara kedua-dua input, jadi altitud jatuh antara [[p]] dan [[q]]. Ia tidak boleh melebihi unjuran yang lebih besar, dan tidak boleh melebihi separuh hipotenus.",
        },
        {
          "question": "Bagaimana jika unjuran menggunakan unit yang berbeza?",
          "answer": "Tukarkan salah satu supaya kedua-duanya berkongsi unit sebelum mengira. Sebagai contoh, tukar [[40\\text{ mm}]] kepada [[4\\text{ cm}]] apabila unjuran lain ialah [[9\\text{ cm}]], kemudian kira [[h=\\sqrt{4\\times 9}=6\\text{ cm}]]. Mencampurkan unit tanpa menukar merosakkan hasil darab. Kalkulator menganggap unit sepadan, jadi sentiasa seragamkan dahulu.",
        },
        {
          "question": "Bolehkah altitud lebih besar daripada separuh hipotenus?",
          "answer": "Tidak. Untuk sebarang [[p]] dan [[q]] yang positif, min geometri tidak pernah melebihi min aritmetik, jadi [[h=\\sqrt{p\\times q}\\le\\frac{p+q}{2}=\\frac{c}{2}]]. Altitud sama dengan tepat separuh hipotenus hanya apabila [[p=q]]. Sebarang hasil kalkulator yang lebih besar daripada separuh hipotenus menandakan kesilapan input atau aritmetik.",
        },
        {
          "question": "Bagaimana saya menyemak pengiraan altitud saya?",
          "answer": "Kuasa duakan altitud dan pastikan ia sama dengan [[p\\times q]]. Untuk semakan lebih mendalam, bina semula segi tiga: [[c=p+q]], [[a=\\sqrt{p\\times c}]], [[b=\\sqrt{q\\times c}]], kemudian sahkan [[h=ab/c]]. Anda juga boleh membandingkan dua ungkapan luas, [[(a\\times b)/2]] dan [[(c\\times h)/2]], yang mestilah bersetuju. Jika ketiga-tiga semakan lulus, jawapannya kukuh.",
        },
        {
          "question": "Adakah teorem altitud berkaitan dengan teorem Pythagoras?",
          "answer": "Mereka menggambarkan segi tiga bersudut tepat yang sama dari sudut yang berbeza. Teorem altitud datang daripada keserupaan, manakala teorem Pythagoras menghubungkan tiga sisi: [[a^2+b^2=c^2]]. Mereka saling mengukuhkan: dengan [[p=4]] dan [[q=9]], kaki [[\\sqrt{52}]] dan [[\\sqrt{117}]] memenuhi [[52+117=169=13^2]], mengesahkan segi tiga yang digambarkan oleh teorem altitud.",
        },
        {
          "question": "Bolehkah saya menggunakan formula ini untuk segi tiga bukan bersudut tepat?",
          "answer": "Tidak. Kadaran [[\\frac{h}{p}=\\frac{q}{h}]] bergantung pada segi tiga serupa yang diwujudkan oleh altitud yang dilukis dari bucu sudut tepat. Tanpa sudut tepat itu, hujah keserupaan gagal dan [[h^2=p\\times q]] tidak terpakai. Untuk segi tiga am, gunakan formula altitud berasaskan luas atau trigonometri yang sesuai dengan data yang diberikan.",
        },
      ],
      "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
      "relatedIntro": "Alat-alat ini mengendalikan pengiraan berkaitan: mencari unjuran, mencari altitud daripada panjang sisi, dan menukar altitud menjadi luas. Setiap satunya berpasangan secara semula jadi dengan teorem altitud pada halaman ini.",
      "relatedItems": [
        "Kalkulator Altitud Segi Tiga Bersudut Tepat",
        "Kalkulator Altitud Segi Tiga Bersudut Tepat daripada Sisi",
        "Kalkulator Unjuran Segi Tiga Bersudut Tepat",
        "Kalkulator Luas Segi Tiga Bersudut Tepat daripada Altitud",
        "Kalkulator Sisi Segi Tiga Bersudut Tepat",
      ],
    },
};
