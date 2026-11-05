// legBFromProjectionGuideTranslations.bms.ts: Right Triangle Leg B From Projection
// Guide (Page 32 of 45) translation.
export const LBP_B4_MS = {
  "ms": {
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "question": "Apakah formula untuk mencari kaki b daripada unjuran q?",
          "answer": "Formulanya ialah [[b = \\sqrt{c \\times q}]], dengan c ialah hipotenus penuh dan q ialah unjuran yang dimiliki oleh kaki b. Sebagai contoh, [[c = 10]] cm dan [[q = 6.4]] cm memberikan [[b = 8]] cm.",
        },
        {
          "question": "Mengapa kita mendarab c dan q?",
          "answer": "Pendaraban datang daripada segi tiga serupa. Segi tiga CBD adalah serupa dengan segi tiga ABC, memberikan [[q / b = b / c]], dan pendaraban silang memberikan [[b^2 = c \\times q]]. Hasil darab itu ialah kuasa dua kaki itu, bukan kaki itu sendiri.",
        },
        {
          "question": "Mengapa punca kuasa dua diperlukan?",
          "answer": "Kerana hasil darab cq bersamaan dengan b kuasa dua, bukan b. Punca kuasa dua membatalkan kuasa dua itu dan mengembalikan panjang biasa. Tanpa punca kuasa dua, anda akan melaporkan 64 dan bukannya 8 dalam contoh c = 10, q = 6.4.",
        },
        {
          "question": "Apakah yang diwakili oleh unjuran q?",
          "answer": "Unjuran q ialah tembereng hipotenus yang bersebelahan dengan bucu B, yang terbentuk apabila altitud dari sudut tepat bertemu dengan hipotenus. Dalam segi tiga ABC dengan altitud CD, [[q = DB]], dan ia terletak di sepanjang hipotenus.",
        },
        {
          "question": "Adakah unjuran q sama dengan kaki b?",
          "answer": "Tidak. Kaki b ialah sisi BC, salah satu sisi yang membentuk sudut tepat, manakala unjuran q ialah tembereng DB di sepanjang hipotenus. Kedua-duanya mempunyai panjang dan kedudukan yang berbeza, dan hanya dikaitkan oleh [[b^2 = c \\times q]].",
        },
        {
          "question": "Mengapa q digunakan dan bukannya p?",
          "answer": "Kerana setiap kaki berpasangan dengan unjuran yang bersebelahan dengan bucunya sendiri. Kaki b menyentuh bucu B, dan q ialah tembereng yang bersebelahan dengan B. Menggunakan p akan memberikan kaki a, kerana p berpasangan dengan kaki yang menyentuh bucu A.",
        },
        {
          "question": "Bolehkah saya mencari kaki b jika hanya unjuran p diketahui?",
          "answer": "Ya. Tolak p daripada hipotenus dahulu: [[q = c - p]]. Dengan [[c = 25]] cm dan [[p = 9]] cm, [[q = 16]] cm, dan kemudian [[b = \\sqrt{25 \\times 16} = 20]] cm.",
        },
        {
          "question": "Bolehkah unjuran q lebih besar daripada hipotenus?",
          "answer": "Tidak. Unjuran q hanyalah sebahagian daripada hipotenus, jadi ia mestilah lebih kecil daripada c. Jika q bersamaan dengan c, p akan menjadi sifar dan segi tiga itu akan menjadi degenerat dan bukannya segi tiga tepat yang sebenar.",
        },
        {
          "question": "Bagaimanakah saya mengesahkan kaki yang dikira?",
          "answer": "Kuasa duakan jawapan dan semak bahawa ia bersamaan dengan [[c \\times q]]. Anda juga boleh mencari kaki a daripada p dan menyemak [[a^2 + b^2 = c^2]], serta mengesahkan bahawa q lebih kecil daripada c dan kaki b lebih pendek daripada hipotenus.",
        },
        {
          "question": "Apakah yang berlaku apabila p dan q sama?",
          "answer": "Altitud jatuh di titik tengah hipotenus, dan kedua-dua kaki adalah sama, jadi segi tiga itu ialah segi tiga tepat sama kaki. Dengan [[c = 20]] cm dan [[p = q = 10]] cm, kedua-dua kaki bersamaan dengan [[10\\sqrt{2}]] cm, kira-kira 14.142 cm.",
        },
        {
          "question": "Bolehkah saya mencari kaki a menggunakan teorem yang sama?",
          "answer": "Ya, dengan formula cermin [[a = \\sqrt{c \\times p}]]. Kaki a berpasangan dengan unjuran p, sama seperti kaki b berpasangan dengan q. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Kalkulator kaki a daripada unjuran</a> dibina untuk pengiraan itu.",
        },
        {
          "question": "Adakah teorem unjuran berkaitan dengan teorem Pythagoras?",
          "answer": "Ya. Menambah kedua-dua formula unjuran memberikan [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], kerana [[p + q = c]]. Teorem unjuran membahagikan hubungan Pythagoras kepada satu bahagian bagi setiap kaki.",
        },
      ],
      "relatedHeading": "Terokai Kalkulator Segi Tiga Tepat Berkaitan",
      "relatedIntro": "Pilih alat seterusnya mengikut ukuran yang anda sudah tahu, kerana setiap kalkulator di bawah mengendalikan satu tugas segi tiga tepat yang khusus.",
      "relatedItems": [
        "Kalkulator Unjuran Segi Tiga Tepat",
        "Kalkulator Unjuran P Segi Tiga Tepat",
        "Kalkulator Unjuran Q Segi Tiga Tepat",
        "Kalkulator Kaki A daripada Unjuran Segi Tiga Tepat",
        "Kalkulator Hipotenus daripada Unjuran Segi Tiga Tepat",
        "Kalkulator Altitud daripada Unjuran Segi Tiga Tepat",
        "Kalkulator Sisi Segi Tiga Tepat",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mencari kaki b bagi segi tiga tepat apabila anda mengetahui hipotenus penuh c dan unjuran q yang dimiliki oleh kaki b. Anda memasukkan kedua-dua panjang itu, dan ia mengembalikan panjang sisi sebenar kaki b, bukan nilai kuasa dua dan bukan tembereng unjuran. Formulanya ialah [[b = \\sqrt{c \\times q}]], dengan c ialah hipotenus lengkap dan q ialah tembereng hipotenus yang bersebelahan dengan kaki b.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, jika [[c = 10]] cm dan [[q = 6.4]] cm, maka [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64} = 8]] cm. Hasil darab 64 hanyalah langkah perantaraan. Mengambil punca kuasa dua mengubahnya kembali menjadi panjang, dan panjang itulah sisi yang anda cari.",
            },
            {
              "kind": "p",
              "text": "Kalkulator terletak di bahagian atas halaman ini, diikuti oleh formula, gambar rajah berlabel, bukti teorem unjuran, contoh kerja, dan semakan yang boleh anda jalankan ke atas sebarang jawapan. Panduan ini sesuai untuk pelajar sekolah menengah, guru, tutor, dan ibu bapa yang membantu kerja rumah geometri.",
            },
          ],
          "h2": "Kalkulator Kaki B Segi Tiga Tepat daripada Unjuran",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mempunyai dua medan input. Medan pertama menerima hipotenus c, iaitu sisi penuh yang bertentangan dengan sudut tepat. Medan kedua menerima unjuran q, iaitu tembereng hipotenus yang dimiliki oleh kaki b. Kedua-dua panjang mestilah menggunakan unit yang sama, jadi tukarkan dahulu jika satu ukuran dalam sentimeter dan satu lagi dalam meter.",
            },
            {
              "kind": "p",
              "text": "Unjuran q mestilah lebih kecil daripada c. Peraturan itu terbina dalam geometri: q hanyalah sebahagian daripada hipotenus, jadi ia tidak boleh sama atau melebihi keseluruhan sisi itu. Jika nilai q anda lebih besar daripada c, anda mungkin telah memasukkan kaki, altitud, atau unjuran yang salah.",
            },
            {
              "kind": "p",
              "text": "Klik Calculate Leg b untuk melihat hasilnya, dan gunakan Reset untuk mengosongkan kedua-dua medan sebelum masalah baharu. Hasilnya ialah panjang dalam unit yang anda masukkan, jadi hipotenus 10 cm dan unjuran 6.4 cm memberikan 8 cm, tanpa langkah penukaran tambahan.",
            },
          ],
          "h2": "Mengira Kaki B Segi Tiga Tepat daripada Unjuran",
        },
        "sec-what-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Segi tiga tepat mempunyai dua sisi berserenjang, yang dipanggil kaki, dan satu sisi terpanjang, yang dipanggil hipotenus. Kedua-dua kaki bertemu pada sudut tepat, dan hipotenus terletak bertentangan dengan sudut itu. Dalam panduan ini, segi tiga itu ialah ABC dengan sudut tepat di C, kaki a ialah sisi AC, kaki b ialah sisi BC, dan hipotenus c ialah sisi AB.",
            },
            {
              "kind": "p",
              "text": "Kaki b ialah salah satu daripada dua sisi yang membentuk sudut tepat, jadi ia merupakan sisi sebenar segi tiga itu. Ia bukan tembereng yang dilukis di dalam segi tiga, dan ia bukan unjuran q. Unjuran q terletak rata di sepanjang hipotenus, manakala kaki b berjalan dari bucu B ke bucu sudut tepat C. Membezakan kedua-dua peranan ini ialah langkah pertama untuk menggunakan formula dengan betul.",
            },
            {
              "kind": "p",
              "text": "Kaki b berbeza daripada kaki a hanya dari segi kedudukan: kaki b menyentuh bucu B, dan kaki a menyentuh bucu A. Setiap kaki mempunyai unjurannya sendiri, dan itulah sebabnya formula untuk b menggunakan q manakala formula untuk a menggunakan p, satu pasangan yang ditetapkan oleh pelabelan.",
            },
            {
              "kind": "p",
              "text": "Dalam mana-mana segi tiga tepat yang tidak degenerat, kaki b lebih pendek daripada hipotenus. Itu memberikan semakan pantas ke atas setiap jawapan: jika kaki b yang anda kira lebih panjang daripada c, ada sesuatu yang tidak kena pada input atau pengiraan, dan label gambar rajah ialah tempat pertama untuk dilihat.",
            },
          ],
          "h2": "Apakah Kaki B dalam Segi Tiga Tepat?",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Lukis altitud dari bucu sudut tepat C yang berserenjang dengan hipotenus AB. Ia bertemu dengan hipotenus pada satu titik yang dipanggil kaki altitud, berlabel D. Titik itu membahagikan hipotenus kepada dua tembereng bersebelahan, dan tembereng-tembereng itu ialah unjuran. Tembereng AD ialah unjuran p, dan tembereng DB ialah unjuran q.",
            },
            {
              "kind": "p",
              "text": "Unjuran q dimiliki oleh kaki b kerana ia terletak bersebelahan dengan bucu B, iaitu bucu yang sama tempat kaki b bermula. Dalam segi tiga kecil CBD, kaki b ialah hipotenus dan q ialah salah satu kakinya, dan itulah kaitan geometri yang menjadikan teorem unjuran berfungsi. Unjuran p, dengan alasan yang sama, dimiliki oleh kaki a, yang menyentuh bucu A.",
            },
            {
              "kind": "p",
              "text": "Unjuran ialah panjang di sepanjang hipotenus, diukur dalam unit yang sama seperti sisi-sisi lain. Unjuran tidak berserenjang dengan apa-apa, dan ia bukan sisi segi tiga asal. Unjuran paling baik dibayangkan sebagai bayang yang dilemparkan oleh kaki ke atas hipotenus apabila altitud jatuh tegak ke atasnya.",
            },
            {
              "kind": "p",
              "text": "Kerana p dan q ialah dua bahagian daripada satu sisi yang lurus, kedua-duanya dijumlahkan menjadi keseluruhan hipotenus:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Penambahan itu berguna dengan sendirinya. Jika anda mengetahui c dan satu unjuran, anda boleh mencari unjuran yang lain dengan penolakan, satu langkah yang dihuraikan sepenuhnya dalam bahagian kemudian tentang unjuran yang lain.",
            },
          ],
          "h2": "Apakah Unjuran Q dalam Segi Tiga Tepat?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem unjuran menyatakan bahawa kuasa dua kaki b bersamaan dengan hipotenus didarab dengan unjurannya:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil punca kuasa dua positif kedua-dua belah memberikan formula kerja untuk halaman ini:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Pengiraan berjalan dalam dua peringkat yang berbeza. Peringkat 1 mendarab hipotenus dengan unjuran, dan hasilnya ialah panjang kuasa dua, bukan sisi. Peringkat 2 mengambil punca kuasa dua positif, yang menukar panjang kuasa dua itu kembali menjadi panjang biasa. Melangkau peringkat 2 ialah kesilapan paling biasa dengan formula ini, dan bahagian seterusnya menerangkan mengapa punca kuasa dua tidak boleh ditinggalkan.",
            },
            {
              "kind": "p",
              "text": "Unit memerlukan perhatian pada kedua-dua peringkat. Jika c dan q kedua-duanya dalam sentimeter, hasil darabnya dalam sentimeter kuasa dua, dan punca kuasa dua mengembalikan sentimeter. Mencampur unit, seperti meter untuk c dan sentimeter untuk q, memberikan hasil darab yang tidak bermakna, jadi tukarkan kepada satu unit sebelum mendarab. Punca positif digunakan kerana panjang sisi sentiasa positif.",
            },
            {
              "kind": "p",
              "text": "Satu contoh berangka kecil menunjukkan kedua-dua peringkat sedang berfungsi. Dengan [[c = 10]] cm dan [[q = 6.4]] cm, peringkat 1 memberikan [[10 \\times 6.4 = 64]], dan peringkat 2 memberikan [[b = \\sqrt{64} = 8]] cm. Nombor 64 tidak menjawab sebarang soalan dengan sendirinya. Hanya selepas punca kuasa dua barulah ia menjadi panjang kaki.",
            },
          ],
          "h2": "Formula Kaki B Segi Tiga Tepat daripada Unjuran",
          "image": {
            "alt": "Segi tiga tepat ABC dengan altitud CD, menunjukkan kaki b kuasa dua bersamaan dengan hipotenus c didarab dengan unjuran q",
            "caption": "Teorem unjuran: b kuasa dua bersamaan dengan c darab q, jadi b bersamaan dengan punca kuasa dua c darab q.",
            "src": "leg-b-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Punca kuasa dua ada di situ kerana pendaraban menghasilkan kuantiti kuasa dua. Teorem itu tidak menyatakan bahawa kaki b bersamaan dengan hasil darab c dan q. Ia menyatakan bahawa kuasa dua kaki b bersamaan dengan hasil darab itu. Membatalkan kuasa dua memerlukan punca kuasa dua, sama seperti membatalkan penggandaan memerlukan pembahagian dua.",
            },
            {
              "kind": "p",
              "text": "Ambil [[c = 10]] dan [[q = 6.4]]. Hasil darabnya ialah 64, iaitu [[b^2]], kuasa dua kaki itu. Kaki itu sendiri ialah nombor yang didarab dengan dirinya sendiri untuk memberikan 64, iaitu 8. Menulis [[b = 64]] bermakna mendakwa sisi 64 unit dalam segi tiga yang hipotenusnya hanya 10, yang jelas mustahil.",
            },
            {
              "kind": "p",
              "text": "Jadual di bawah memisahkan ketiga-tiga kuantiti itu, kerana mengelirukannya menyebabkan kebanyakan kesilapan dengan formula ini.",
            },
          ],
          "h2": "Mengapa Terdapat Punca Kuasa Dua dalam Formula?",
          "table": {
            "headers": [
              "Kuantiti",
              "Maksud",
              "Contoh dengan c = 10, q = 6.4",
            ],
            "rows": [
              [
                "b",
                "Panjang kaki itu sendiri",
                "8",
              ],
              [
                "b kuasa dua",
                "Panjang kaki didarab dengan dirinya sendiri",
                "64",
              ],
              [
                "c darab q",
                "Hasil darab yang disamakan oleh teorem dengan b kuasa dua",
                "64",
              ],
              [
                "Punca kuasa dua cq",
                "Langkah yang memulihkan b daripada b kuasa dua",
                "8",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh langkah ringkas membawa anda dari gambar rajah berlabel ke jawapan yang disemak.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenal pasti segi tiga tepat dalam masalah anda dan sahkan ia mempunyai sudut tepat.",
                "Cari altitud dari sudut tepat dan tandakan tempat ia bertemu dengan hipotenus.",
                "Kenal pasti hipotenus penuh c, iaitu sisi yang bertentangan dengan sudut tepat.",
                "Kenal pasti unjuran q, iaitu tembereng hipotenus yang bersebelahan dengan bucu B, tempat kaki b bermula.",
                "Semak bahawa q lebih kecil daripada c. Jika tidak, label semula gambar rajah sebelum meneruskan.",
                "Tukarkan c dan q kepada unit yang sama jika ia diberikan dalam unit yang berbeza.",
                "Masukkan c dalam medan Hypotenuse c.",
                "Masukkan q dalam medan Projection q. Jangan masukkan p di sini, kerana itu akan memberikan kaki a.",
                "Klik Calculate Leg b dan baca hasilnya.",
                "Gunakan Reset sebelum memulakan masalah baharu.",
              ],
            },
            {
              "kind": "p",
              "text": "Kalkulator tidak menerima p, jadi masalah yang hanya memberikan p memerlukan satu langkah penolakan tambahan, yang dibincangkan di bawah. Memasukkan p dalam medan q masih menghasilkan nombor, tetapi ia akan menjadi kaki yang salah, jadi semakan label dalam langkah 4 paling penting.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Kaki B Segi Tiga Tepat",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[c = 10]] cm dan [[q = 6.4]] cm. Empat langkah di bawah menunjukkan kerja penuh, tanpa apa-apa yang dilangkau.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis formula: b = sqrt(cq).",
                "Gantikan nilai: b = sqrt(10 x 6.4).",
                "Darabkan di dalam punca: b = sqrt(64).",
                "Ambil punca kuasa dua: b = 8 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawapan 8 cm ialah sisi berserenjang sebenar BC, bukan unjuran dan bukan luas. Satu pengesahan ringkas menutup gelung itu: [[b^2 = 8^2 = 64]] dan [[c \\times q = 10 \\times 6.4 = 64]], jadi kedua-dua belah teorem itu bersetuju.",
            },
            {
              "kind": "p",
              "text": "Sebagai rujukan, unjuran yang lain ialah [[p = 10 - 6.4 = 3.6]] cm, kaki a ialah [[a = \\sqrt{10 \\times 3.6} = 6]] cm, dan altitud ialah [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, mengesahkan segi tiga tepat 6-8-10 yang biasa.",
            },
          ],
          "h2": "Contoh Langkah demi Langkah Mencari Kaki B",
          "image": {
            "alt": "Segi tiga tepat dengan hipotenus 10 cm dan unjuran 6.4 cm, dikerjakan untuk memberikan kaki b bersamaan dengan 8 cm",
            "caption": "Contoh kerja: c = 10 cm dan q = 6.4 cm memberikan b = sqrt(64) = 8 cm.",
            "src": "leg-b-example-c10-q64.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gambar rajah utama menunjukkan segi tiga ABC dengan sudut tepat di C. Sisi AC ialah kaki a, sisi BC ialah kaki b, dan sisi AB ialah hipotenus c. Altitud CD jatuh dari C berserenjang dengan AB dan menyentuhnya di D, dan penanda sudut tepat di D mengesahkan bahawa CD benar-benar berserenjang.",
            },
            {
              "kind": "p",
              "text": "Titik D membahagikan hipotenus kepada dua bahagian: tembereng AD ialah unjuran p dan tembereng DB ialah unjuran q. Kaki b dan unjuran q ditonjolkan kerana kedua-duanya ialah pasangan yang dibincangkan di halaman ini. Jejak gambar rajah mengikut urutan ini untuk menetapkan label: bermula di B, ikut kaki b ke C, kemudian ikut kaki a ke A, kemudian kembali di sepanjang hipotenus dari A ke B, berhenti di D untuk melihat pembahagian kepada p dan q.",
            },
            {
              "kind": "p",
              "text": "Pasangan b dengan q menjadi jelas dalam segi tiga kecil CBD, di mana kaki b ialah hipotenus dan q ialah sisi yang terletak di sepanjang hipotenus besar. Kerana segi tiga CBD serupa dengan segi tiga ABC, nisbah q kepada b dalam segi tiga kecil bersamaan dengan nisbah b kepada c dalam segi tiga besar, yang bahagian bukti mengubahnya menjadi [[b^2 = cq]].",
            },
          ],
          "h2": "Gambar Rajah Kaki B Segi Tiga Tepat daripada Unjuran Diterangkan",
          "image": {
            "alt": "Segi tiga tepat ABC dengan sudut tepat di C, altitud CD ke hipotenus AB, kaki b dan unjuran q ditonjolkan, dengan kaki a dan b, hipotenus c, unjuran p dan q, dan altitud h dilabel",
            "caption": "Segi tiga utama ABC: altitud CD membahagikan hipotenus AB kepada unjuran p (AD) dan unjuran q (DB), dengan kaki b (BC) ditonjolkan.",
            "src": "leg-b-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti ini bergantung pada segi tiga serupa. Melukis altitud CD membahagikan segi tiga ABC kepada dua segi tiga tepat yang lebih kecil, ACD dan CBD, dan kedua-duanya serupa dengan segi tiga asal. Keserupaan bermakna sisi-sisi yang sepadan kekal dalam nisbah yang sama, dan salah satu nisbah itu memberikan teorem unjuran secara langsung.",
            },
            {
              "kind": "p",
              "text": "Fokus pada segi tiga CBD dan keseluruhan segi tiga ABC. Kedua-duanya mengandungi sudut di B, dan kedua-duanya mengandungi sudut tepat, jadi sudut ketiga masing-masing juga mestilah sepadan. Memadankan sisi-sisi yang terletak pada kedudukan yang sama memberikan perkadaran:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang gantikan simbol piawai: [[DB = q]], [[BC = b]], dan [[AB = c]]. Perkadaran itu menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Pendaraban silang menghilangkan pecahan. Pengangka kiri didarab dengan penyebut kanan bersamaan dengan pengangka kanan didarab dengan penyebut kiri, jadi [[q \\times c = b \\times b]], iaitu:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil punca kuasa dua positif kedua-dua belah menyelesaikan bukti itu, memberikan [[b = \\sqrt{c \\times q}]]. Hujah yang sama yang digunakan pada segi tiga kecil yang lain, ACD, memberikan [[a^2 = c \\times p]]. Keserupaan melakukan semua kerja: sisi-sisi yang sepadan bagi segi tiga serupa kekal berkadaran.",
            },
          ],
          "h2": "Mengapa Teorem Unjuran Berfungsi?",
          "image": {
            "alt": "Segi tiga tepat asal ABC di samping segi tiga serupa yang lebih kecil ACD dan CBD, menunjukkan perkadaran q bahagi b bersamaan dengan b bahagi c",
            "caption": "Bukti segi tiga serupa: q bahagi b bersamaan dengan b bahagi c, jadi pendaraban silang memberikan b kuasa dua bersamaan dengan c darab q.",
            "src": "leg-b-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap contoh menyatakan nilai yang diberikan, penggantian, dan jawapan akhir. Ulasan kekal ringkas supaya pengiraan kekal jelas, dan setiap contoh mengekalkan unit yang konsisten dari awal hingga akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 10]] cm dan [[q = 6.4]] cm, formula memberikan [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64}]], jadi [[b = 8]] cm. Hasil darab 64 ialah kuasa dua sempurna, jadi jawapannya tepat, tanpa pembundaran diperlukan. Ini ialah segi tiga yang sama seperti contoh langkah demi langkah, dan kaki yang lain ialah 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Hasil Kuasa Dua Sempurna",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 25]] cm dan [[q = 9]] cm, [[b = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Apabila hasil darab ialah kuasa dua sempurna, jawapannya tepat. Unjuran yang lain di sini ialah 16 cm, yang berpasangan dengan kaki 20 cm, membentuk segi tiga klasik 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Bukan Kuasa Dua Sempurna",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 12]] cm dan [[q = 5]] cm, [[b = \\sqrt{12 \\times 5} = \\sqrt{60}]], jadi [[b \\approx 7.746]] cm. Hasil darab 60 bukan kuasa dua sempurna, jadi jawapannya kekal sebagai anggaran yang dibundarkan kepada tiga tempat perpuluhan. Perhatikan bahawa 7.746 cm lebih pendek daripada hipotenus 12 cm, sebagaimana yang sepatutnya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Ukuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 12.5]] cm dan [[q = 3.2]] cm, [[b = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], jadi [[b \\approx 6.325]] cm. Ini sepadan dengan nilai daripada panduan kaki a, di mana hasil darab 40 yang sama muncul dengan peranan p dan q ditukar, satu peringatan berguna bahawa input yang berbeza boleh berkongsi hasil darab. Kekalkan hasil darab penuh di dalam punca sehingga langkah pembundaran akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Segi Tiga Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 50]] cm dan [[q = 32]] cm, [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Nombor yang lebih besar tidak mengubah apa-apa tentang kaedah itu: darab, kemudian ambil punca. Unjuran yang lain di sini ialah 18 cm, yang berpasangan dengan kaki 30 cm, membentuk segi tiga klasik 30-40-50.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Unjuran Sama",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 20]] cm dan [[q = 10]] cm, [[b = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, jadi [[b \\approx 14.142]] cm. Unjuran yang sama bermakna altitud jatuh di titik tengah hipotenus, yang berlaku tepat apabila kedua-dua kaki sama. Segi tiga itu oleh itu ialah segi tiga tepat sama kaki, dan kaki a bersamaan dengan kaki b.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Unit Berbeza",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 0.5]] m dan [[q = 20]] cm, tukarkan dahulu: 0.5 m bersamaan dengan 50 cm. Kemudian [[b = \\sqrt{50 \\times 20} = \\sqrt{1000}]], jadi [[b \\approx 31.623]] cm. Mendarab 0.5 dengan 20 tanpa menukar akan memberikan punca 10, jawapan salah tanpa unit yang sah di sebaliknya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 16]] ft dan [[q = 9]] ft, [[b = \\sqrt{16 \\times 9} = \\sqrt{144} = 12]] ft. Hasil darab 144 ialah kuasa dua sempurna, jadi jawapannya tepat. Semakan pantas lulus: 12 ft ialah tiga perempat daripada hipotenus, dan kaki yang lain bersamaan kira-kira 10.583 ft, yang lebih pendek daripada b tetapi masih sisi sebenar bagi segi tiga yang sama.",
            },
          ],
          "h2": "Contoh Kerja Mencari Kaki B daripada Unjuran",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sesetengah masalah memberikan p dan bukannya q. Kalkulator di halaman ini tidak menerima p, tetapi itu hanyalah lencongan satu langkah, bukan jalan buntu. Oleh kerana kedua-dua unjuran dijumlahkan menjadi hipotenus, tolak untuk mendapatkan q dahulu:",
            },
            {
              "kind": "p",
              "text": "[[[q = c - p]]]",
            },
            {
              "kind": "p",
              "text": "Ambil [[c = 25]] cm dan [[p = 9]] cm. Penolakan memberikan [[q = 25 - 9 = 16]] cm. Sekarang formula biasa terpakai: [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Jika anda memasukkan 9 secara langsung sebagai q, kalkulator akan memberikan 15 cm, iaitu kaki a, bukan kaki b.",
            },
            {
              "kind": "p",
              "text": "<a href=\"/right-triangle-projection-p-calculator/\">Kalkulator unjuran p</a> boleh membantu apabila p sendiri perlu dicari, dan <a href=\"/right-triangle-projection-q-calculator/\">kalkulator unjuran q</a> merangkumi langkah songsang. Walau apa pun, peraturannya kekal sama: cari q dahulu, kemudian gunakan [[b = \\sqrt{c \\times q}]].",
            },
          ],
          "h2": "Cara Mencari Kaki B Apabila Unjuran Lain Diketahui",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Satu teorem menghubungkan tiga kuantiti, jadi menyusunnya semula dapat mencari mana-mana satu yang hilang. Ketiga-tiga bentuknya ialah:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Jadual di bawah menunjukkan setiap susunan semula, apa yang dicarinya, dan apa yang mesti diketahui dahulu.",
            },
          ],
          "h2": "Hubungan antara Kaki B, Hipotenus, dan Unjuran Q",
          "table": {
            "headers": [
              "Kuantiti yang Hilang",
              "Formula",
              "Nilai Diketahui yang Diperlukan",
            ],
            "rows": [
              [
                "Kaki b",
                "b = sqrt(cq)",
                "Hipotenus c dan unjuran q",
              ],
              [
                "Hipotenus c",
                "c = b kuasa dua / q",
                "Kaki b dan unjuran q",
              ],
              [
                "Unjuran q",
                "q = b kuasa dua / c",
                "Kaki b dan hipotenus c",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kaki a mengikut cerminan formula kaki b. Di mana kaki b berpasangan dengan unjuran q, kaki a berpasangan dengan unjuran p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan satu segi tiga yang konsisten untuk melihat kedua-dua kaki bersama-sama: [[c = 25]], [[p = 9]], dan [[q = 16]]. Kemudian [[a = \\sqrt{25 \\times 9} = 15]] dan [[b = \\sqrt{25 \\times 16} = 20]]. Kedua-dua kaki berkongsi hipotenus yang sama tetapi menggunakan unjuran yang berbeza, dan itulah sebabnya mengenal pasti p dan q dengan betul menentukan kaki yang anda peroleh.",
            },
            {
              "kind": "p",
              "text": "Kaki-kaki itu juga saling mengikat melalui teorem Pythagoras, yang dibincangkan dua bahagian di bawah: mengetahui satu kaki dan hipotenus menentukan kaki yang lain. Untuk masalah yang bermula daripada p dan bukannya q, <a href=\"/right-triangle-leg-a-from-projection-calculator/\">kalkulator kaki a daripada unjuran</a> menjalankan kaedah yang sama dengan pasangan yang lain.",
            },
          ],
          "h2": "Hubungan antara Kaki B dan Kaki A",
          "image": {
            "alt": "Segi tiga tepat yang membandingkan unjuran p berpasangan dengan kaki a dengan unjuran q berpasangan dengan kaki b, dengan c bersamaan dengan 25, p bersamaan dengan 9, dan q bersamaan dengan 16",
            "caption": "Dipasangkan dengan betul: a menggunakan p (sqrt(25 x 9) = 15) dan b menggunakan q (sqrt(25 x 16) = 20).",
            "src": "leg-b-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem unjuran dan teorem Pythagoras bersetuju dengan tepat, dan algebra menunjukkan sebabnya. Mulakan daripada dua formula unjuran:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Tambahkan formula yang sepadan untuk kaki a, [[a^2 = c \\times p]], untuk mendapatkan:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengeluarkan c sebagai faktor daripada sebelah kanan memberikan [[a^2 + b^2 = c(p + q)]]. Oleh kerana [[p + q = c]], penggantian menghasilkan keputusan yang biasa:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Semakan berangka dengan segi tiga 9-16-25 mengesahkannya: [[a^2 + b^2 = 225 + 400 = 625]] dan [[c^2 = 25^2 = 625]]. Kedua-dua teorem itu bukan saingan. Teorem unjuran membahagikan hubungan Pythagoras kepada satu bahagian bagi setiap kaki, dan menambah bahagian-bahagian itu membina semula hubungan itu.",
            },
          ],
          "h2": "Hubungan antara Unjuran Q dan Teorem Pythagoras",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga semakan bebas dapat mengesan hampir setiap kesilapan. Jalankan sekurang-kurangnya satu daripadanya ke atas setiap jawapan, dan jalankan ketiga-tiganya apabila masalah itu penting.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 1: Semakan Teorem Unjuran",
            },
            {
              "kind": "p",
              "text": "Kuasa duakan jawapan anda dan bandingkannya dengan hasil darab c dan q. Untuk [[c = 25]], [[q = 16]], dan [[b = 20]]: [[b^2 = 400]] dan [[c \\times q = 400]], jadi jawapannya lulus. Jika kedua-dua nombor itu berbeza, sama ada input atau langkah punca kuasa dua telah silap.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 2: Semakan Teorem Pythagoras",
            },
            {
              "kind": "p",
              "text": "Cari kaki a daripada p, kemudian semak [[a^2 + b^2 = c^2]]. Dengan [[p = 9]], [[q = 16]], dan [[c = 25]]: [[a = 15]], [[b = 20]], dan [[225 + 400 = 625 = 25^2]]. Semakan ini melangkaui kalkulator, kerana ia menguji keseluruhan segi tiga, bukan hanya satu formula.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 3: Semakan Saiz dan Penambahan",
            },
            {
              "kind": "p",
              "text": "Sahkan bahawa q lebih kecil daripada c, bahawa [[p + q = c]] apabila p diketahui, dan bahawa kaki b lebih pendek daripada hipotenus. Dalam contoh ini, 16 lebih kecil daripada 25, [[9 + 16 = 25]], dan 20 lebih pendek daripada 25. Sebarang kegagalan di sini menunjukkan kesilapan pelabelan, bukan kesilapan pengiraan.",
            },
          ],
          "h2": "Cara Mengesahkan Kaki B yang Dikira",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Lapan sifat berikut secara langsung daripada [[b = \\sqrt{c \\times q}]] dan geometri di sebaliknya. Setiap satunya juga berfungsi sebagai semakan akal ke atas jawapan baharu.",
            },
            {
              "items": [
                "Kaki b sentiasa lebih pendek daripada hipotenus dalam segi tiga tepat yang tidak degenerat, kerana q hanyalah sebahagian daripada c.",
                "Unjuran q sentiasa lebih kecil daripada c, dan ia sentiasa positif. Unjuran sifar atau negatif tidak menggambarkan sebarang segi tiga sebenar.",
                "Meningkatkan q sambil mengekalkan c meningkatkan b, kerana hasil darab di dalam punca bertambah.",
                "Meningkatkan c sambil mengekalkan q meningkatkan b secara matematik, dengan syarat nilai baharu itu masih menggambarkan segi tiga sebenar dengan q lebih kecil daripada c.",
                "Menukar p dan q mengubah kaki yang dikira: q memberikan kaki b dan p memberikan kaki a.",
                "Unjuran yang sama menghasilkan kaki yang sama. Dengan c = 20 dan p = q = 10, kedua-dua kaki bersamaan dengan 10 darab punca kuasa dua 2, kira-kira 14.142.",
                "Hasilnya ialah panjang, bukan luas. Hasil darab kuasa dua hanyalah langkah perantaraan, dan punca kuasa dua mengembalikan unit panjang biasa.",
                "Menskalakan semua ukuran dengan faktor yang sama akan menskalakan kaki b dengan faktor itu. Menggandakan c dan q menggandakan b, kerana hasil darab menjadi empat kali ganda dan puncanya berganda.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Apabila altitud jatuh tepat di titik tengah hipotenus, segi tiga itu ialah sama kaki, dan kedua-dua kaki mestilah sepadan, seperti yang ditunjukkan oleh gambar rajah di bawah.",
            },
          ],
          "h2": "Sifat Penting Kaki B daripada Unjuran",
          "image": {
            "alt": "Segi tiga tepat sama kaki dengan hipotenus 20, unjuran p dan q yang sama iaitu 10, dan kaki a dan b masing-masing bersamaan dengan 10 punca 2",
            "caption": "Unjuran sama: c = 20 dengan p = q = 10 memberikan a = b = 10 punca 2, kira-kira 14.142.",
            "src": "leg-b-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap kesilapan di bawah diikuti oleh pembetulannya. Kebanyakannya berpunca daripada pelabelan, bukan pengiraan.",
            },
            {
              "kind": "steps",
              "steps": [
                "Melupakan punca kuasa dua: melaporkan cq sebagai jawapan. Dengan c = 10 dan q = 6.4, jawapannya ialah 8 cm, bukan 64.",
                "Mengelirukan b dengan b kuasa dua: 64 ialah b kuasa dua dalam contoh itu, manakala 8 ialah kaki itu. Nyatakan yang mana satu yang anda maksudkan sebelum menulis nombor.",
                "Menggunakan unjuran p dan bukannya q: memasukkan p memberikan kaki a. Dengan c = 25 dan p = 9, hasil 15 ialah kaki a, bukan kaki b.",
                "Memasukkan kaki dalam medan hipotenus: hipotenus ialah sisi yang bertentangan dengan sudut tepat dan sisi terpanjang. Kaki yang dimasukkan sebagai c memesongkan setiap langkah kemudian.",
                "Mengelirukan hipotenus dengan unjuran: c ialah keseluruhan sisi, manakala q hanyalah sebahagian daripadanya. Semak bahawa q lebih kecil daripada c sebelum mengira.",
                "Menggunakan q yang lebih besar daripada atau sama dengan c: tiada segi tiga sedemikian wujud, kerana q ialah sebahagian daripada c. Semak semula label gambar rajah jika ini berlaku.",
                "Mencampur sentimeter dan meter: tukarkan dahulu, seperti dalam Contoh 7, di mana 0.5 m menjadi 50 cm sebelum didarab dengan 20 cm.",
                "Menggunakan ukuran negatif: panjang adalah positif, jadi entri negatif menandakan kesilapan data, bukan kaki negatif.",
                "Menggunakan formula pada segi tiga bukan tepat: teorem unjuran memerlukan altitud dari sudut tepat. Tanpa sudut tepat, tiada unjuran q dalam pengertian ini.",
                "Membundarkan terlalu awal: membundarkan hasil darab sebelum mengambil punca akan mengubah jawapan. Kekalkan ketepatan penuh sehingga langkah akhir.",
                "Menggunakan padanan sisi yang salah dalam gambar rajah: memasangkan q dengan a, atau p dengan b, menukar kaki-kaki itu. Padankan q dengan kaki yang menyentuh bucu B.",
                "Menganggap altitud sebagai unjuran: altitud h berserenjang dengan hipotenus, bukan sebahagian daripadanya, jadi ia tidak pernah dimiliki dalam medan q.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika jawapan kelihatan salah, berhenti dan label semula gambar rajah sebelum mengira semula. Kebanyakan kesilapan di atas hilang sebaik sahaja p dan q ditanda dengan jelas pada hipotenus dan segala yang lain diketepikan.",
            },
          ],
          "h2": "Kesilapan Biasa Apabila Mencari Kaki B daripada Unjuran",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kegunaan paling langsung ialah kerja rumah geometri dan kerja bilik darjah, di mana masalah unjuran menguji sama ada pelajar boleh melabel gambar rajah dan menggunakan [[b^2 = c \\times q]] dan bukannya mencapai teorem Pythagoras kerana kebiasaan. Latihan segi tiga serupa menggunakan persediaan yang sama, kerana buktinya sendiri merupakan latihan memadankan sisi yang sepadan.",
            },
            {
              "kind": "p",
              "text": "Lukisan teknikal menggunakan teorem itu apabila segi tiga tepat mesti dibina semula daripada ukuran separa: jika lukisan memberikan hipotenus dan kaki altitud, kaki yang hilang diperoleh tanpa mengukur semula bentuk itu. Guru juga menggunakan persediaan ini sebagai pelajaran penghubung antara penambahan tembereng dan keserupaan.",
            },
            {
              "kind": "p",
              "text": "Satu syarat mengehadkan setiap aplikasi: geometri segi tiga tepat yang diperlukan mestilah benar-benar wujud. Teorem itu menggambarkan hubungan geometri yang tepat, bukan ukuran lapangan yang anggaran, jadi ia tidak pernah menggantikan ukur tanah yang teliti atau ukuran kejuruteraan profesional. Dalam persediaan yang betul, walau bagaimanapun, ia mengubah dua panjang yang diketahui menjadi panjang ketiga dengan satu pendaraban dan satu punca kuasa dua.",
            },
          ],
          "h2": "Aplikasi Praktikal Teorem Unjuran",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cuba keenam-enam masalah di atas kertas sebelum membaca jawapannya. Tiada satu pun nilai yang mengulangi contoh kerja, dan masalah terakhir menggabungkan beberapa idea daripada panduan ini.",
            },
            {
              "kind": "h3",
              "text": "Masalah 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Segi tiga tepat mempunyai hipotenus [[c = 36]] cm dan unjuran [[q = 9]] cm. Cari kaki b.",
            },
            {
              "kind": "h3",
              "text": "Masalah 2: Unjuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 26]] cm dan [[q = 6.5]] cm, cari kaki b.",
            },
            {
              "kind": "h3",
              "text": "Masalah 3: Hipotenus Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 100]] cm dan [[q = 36]] cm, cari kaki b.",
            },
            {
              "kind": "h3",
              "text": "Masalah 4: Penukaran Unit",
            },
            {
              "kind": "p",
              "text": "Hipotenus berukuran [[c = 1.5]] m dan unjuran q berukuran 24 cm. Cari kaki b dalam sentimeter.",
            },
            {
              "kind": "h3",
              "text": "Masalah 5: Cari q daripada p dan c Dahulu",
            },
            {
              "kind": "p",
              "text": "Segi tiga tepat mempunyai hipotenus [[c = 65]] cm dan unjuran [[p = 49]] cm. Cari kaki b.",
            },
            {
              "kind": "h3",
              "text": "Masalah 6: Berbilang Langkah dengan Kaki a dan Pythagoras",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 50]] cm dan [[q = 32]] cm, cari kaki b, kemudian cari kaki a dan semak hasilnya dengan teorem Pythagoras.",
            },
            {
              "kind": "h3",
              "text": "Jawapan Soalan Latihan",
            },
            {
              "kind": "p",
              "text": "Jawapan 1: [[b = \\sqrt{36 \\times 9} = \\sqrt{324} = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 2: [[b = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 3: [[b = \\sqrt{100 \\times 36} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 4: Tukarkan 1.5 m kepada 150 cm, kemudian [[b = \\sqrt{150 \\times 24} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 5: Pertama [[q = 65 - 49 = 16]] cm, kemudian [[b = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 6: [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Unjuran yang lain ialah [[p = 50 - 32 = 18]] cm, jadi [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Semak: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Soalan Latihan Berserta Jawapan",
        },
      },
      "tocHeading": "Kandungan Panduan",
      "tocItems": {
        "sec-intro": "Kalkulator Kaki B Segi Tiga Tepat daripada Unjuran",
        "sec-calculate": "Mengira Kaki B Segi Tiga Tepat daripada Unjuran",
        "sec-what-leg-b": "Apakah Kaki B dalam Segi Tiga Tepat?",
        "sec-what-projection-q": "Apakah Unjuran Q dalam Segi Tiga Tepat?",
        "sec-formula": "Formula Kaki B Segi Tiga Tepat daripada Unjuran",
        "sec-why-sqrt": "Mengapa Terdapat Punca Kuasa Dua dalam Formula?",
        "sec-how": "Cara Menggunakan Kalkulator Kaki B Segi Tiga Tepat",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Kaki B",
        "sec-diagram": "Gambar Rajah Kaki B Segi Tiga Tepat daripada Unjuran Diterangkan",
        "sec-proof": "Mengapa Teorem Unjuran Berfungsi?",
        "sec-examples": "Contoh Kerja Mencari Kaki B daripada Unjuran",
        "sec-other-projection": "Cara Mencari Kaki B Apabila Unjuran Lain Diketahui",
        "sec-relationship": "Hubungan antara Kaki B, Hipotenus, dan Unjuran Q",
        "sec-leg-a": "Hubungan antara Kaki B dan Kaki A",
        "sec-pythagoras": "Hubungan antara Unjuran Q dan Teorem Pythagoras",
        "sec-verify": "Cara Mengesahkan Kaki B yang Dikira",
        "sec-properties": "Sifat Penting Kaki B daripada Unjuran",
        "sec-mistakes": "Kesilapan Biasa Apabila Mencari Kaki B daripada Unjuran",
        "sec-applications": "Aplikasi Praktikal Teorem Unjuran",
        "sec-practice": "Soalan Latihan Berserta Jawapan",
        "sec-related": "Terokai Kalkulator Segi Tiga Tepat Berkaitan",
        "sec-faq": "Soalan Lazim",
      },
    },
};
