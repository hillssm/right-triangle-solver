// legAFromProjectionGuideTranslations.bms.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B4_MS = {
  "ms": {
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "question": "Apakah formula untuk mencari kaki a daripada unjuran p?",
          "answer": "Formulanya ialah [[a = \\sqrt{c \\times p}]], dengan c ialah hipotenus penuh dan p ialah unjuran yang dimiliki oleh kaki a. Sebagai contoh, [[c = 10]] cm dan [[p = 3.6]] cm memberikan [[a = 6]] cm.",
        },
        {
          "question": "Mengapakah kita mendarab c dan p?",
          "answer": "Pendaraban ini datang daripada segi tiga yang serupa. Segi tiga ACD adalah serupa dengan segi tiga ABC, memberikan [[p / a = a / c]], dan pendaraban silang memberikan [[a^2 = c \\times p]]. Hasil darab itu ialah kuasa dua kaki itu, bukan kaki itu sendiri.",
        },
        {
          "question": "Mengapakah punca kuasa dua diperlukan?",
          "answer": "Kerana hasil darab cp bersamaan dengan a kuasa dua, bukan a. Punca kuasa dua membatalkan pengkuasaan dua dan mengembalikan panjang biasa. Tanpa punca kuasa dua, anda akan melaporkan 36 dan bukannya 6 dalam contoh c = 10, p = 3.6.",
        },
        {
          "question": "Apakah yang diwakili oleh unjuran p?",
          "answer": "Unjuran p ialah segmen hipotenus yang bersebelahan dengan bucu A, yang terbentuk apabila altitud dari sudut tepat bertemu dengan hipotenus. Dalam segi tiga ABC dengan altitud CD, [[p = AD]], dan ia terletak di sepanjang hipotenus.",
        },
        {
          "question": "Adakah unjuran p sama dengan kaki a?",
          "answer": "Tidak. Kaki a ialah sisi AC, salah satu sisi yang membentuk sudut tepat, manakala unjuran p ialah segmen AD di sepanjang hipotenus. Kedua-duanya berbeza dari segi panjang dan kedudukan, dan hanya dihubungkan oleh [[a^2 = c \\times p]].",
        },
        {
          "question": "Bolehkah saya menggunakan unjuran q untuk mencari kaki a?",
          "answer": "Tidak secara langsung. Unjuran q berpasangan dengan kaki b, jadi memasukkan q akan mengembalikan kaki b. Untuk mencari kaki a daripada q, pulihkan p dahulu dengan [[p = c - q]], kemudian gunakan [[a = \\sqrt{c \\times p}]].",
        },
        {
          "question": "Bagaimana jika saya hanya tahu unjuran q?",
          "answer": "Tolakkan q daripada hipotenus: [[p = c - q]]. Dengan [[c = 25]] cm dan [[q = 16]] cm, [[p = 9]] cm, dan kemudian [[a = \\sqrt{25 \\times 9} = 15]] cm.",
        },
        {
          "question": "Bolehkah unjuran p sama dengan hipotenus?",
          "answer": "Tidak. Unjuran p hanyalah sebahagian daripada hipotenus, jadi ia mestilah lebih kecil daripada c. Jika p sama dengan c, q akan menjadi sifar dan segi tiga itu akan menjadi merosot, bukannya segi tiga tepat yang sebenar.",
        },
        {
          "question": "Bagaimanakah saya mengesahkan kaki yang dikira?",
          "answer": "Kuasa duakan jawapan itu dan semak bahawa ia bersamaan dengan [[c \\times p]]. Anda juga boleh mencari kaki b daripada q dan menyemak [[a^2 + b^2 = c^2]], serta mengesahkan bahawa p lebih kecil daripada c dan kaki a lebih pendek daripada hipotenus.",
        },
        {
          "question": "Apakah yang berlaku apabila p dan q sama?",
          "answer": "Altitud itu jatuh di titik tengah hipotenus, dan kedua-dua kaki adalah sama, jadi segi tiga itu ialah segi tiga tepat sama kaki. Dengan [[c = 20]] cm dan [[p = q = 10]] cm, kedua-dua kaki bersamaan dengan [[10\\sqrt{2}]] cm, iaitu kira-kira 14.142 cm.",
        },
        {
          "question": "Bolehkah saya mencari kaki b menggunakan teorem yang sama?",
          "answer": "Ya, dengan formula cermin [[b = \\sqrt{c \\times q}]]. Kaki b berpasangan dengan unjuran q, sama seperti kaki a berpasangan dengan p. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Kalkulator kaki b daripada unjuran</a> dibina untuk pengiraan itu.",
        },
        {
          "question": "Adakah teorem unjuran berkaitan dengan teorem Pythagoras?",
          "answer": "Ya. Menambah kedua-dua formula unjuran memberikan [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], kerana [[p + q = c]]. Teorem unjuran membahagikan hubungan Pythagoras kepada satu bahagian bagi setiap kaki.",
        },
      ],
      "relatedHeading": "Terokai Kalkulator Segi Tiga Tepat Berkaitan",
      "relatedIntro": "Pilih alat seterusnya berdasarkan ukuran yang anda sudah tahu, kerana setiap kalkulator di bawah mengendalikan satu tugas segi tiga tepat yang khusus.",
      "relatedItems": [
        "Kalkulator Unjuran Segi Tiga Tepat",
        "Kalkulator Unjuran P Segi Tiga Tepat",
        "Kalkulator Unjuran Q Segi Tiga Tepat",
        "Kalkulator Kaki B daripada Unjuran Segi Tiga Tepat",
        "Kalkulator Hipotenus daripada Unjuran Segi Tiga Tepat",
        "Kalkulator Altitud daripada Unjuran Segi Tiga Tepat",
        "Kalkulator Sisi Segi Tiga Tepat",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mencari kaki a bagi sebuah segi tiga tepat apabila anda tahu hipotenus penuh c dan unjuran p yang dimiliki oleh kaki a. Anda memasukkan kedua-dua panjang itu, dan ia mengembalikan panjang sisi sebenar kaki a, bukan nilai kuasa dua dan bukan segmen unjuran. Formulanya ialah [[a = \\sqrt{c \\times p}]], dengan c ialah hipotenus lengkap dan p ialah segmen hipotenus yang bersebelahan dengan kaki a.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, jika [[c = 10]] cm dan [[p = 3.6]] cm, maka [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Hasil darab 36 hanyalah langkah perantaraan. Mengambil punca kuasa dua menukarkannya kembali kepada panjang, dan panjang itulah sisi yang anda cari.",
            },
            {
              "kind": "p",
              "text": "Kalkulator ini terletak di bahagian atas halaman ini, diikuti oleh formula, rajah berlabel, bukti teorem unjuran, contoh kerja, dan semakan yang boleh anda jalankan ke atas sebarang jawapan. Panduan ini sesuai untuk pelajar sekolah menengah, guru, tutor, dan ibu bapa yang membantu anak-anak dengan kerja rumah geometri.",
            },
          ],
          "h2": "Kalkulator Kaki A Segi Tiga Tepat daripada Unjuran",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mempunyai dua medan input. Medan pertama menerima hipotenus c, iaitu sisi penuh yang bertentangan dengan sudut tepat. Medan kedua menerima unjuran p, iaitu segmen hipotenus yang dimiliki oleh kaki a. Kedua-dua panjang mestilah menggunakan unit yang sama, jadi tukarkan dahulu jika satu ukuran dalam sentimeter dan satu lagi dalam meter.",
            },
            {
              "kind": "p",
              "text": "Unjuran p mestilah lebih kecil daripada c. Peraturan ini terbina dalam geometri: p hanyalah sebahagian daripada hipotenus, jadi ia tidak boleh sama dengan atau melebihi keseluruhan sisi itu. Jika nilai p anda lebih besar daripada c, anda mungkin telah memasukkan kaki, altitud, atau unjuran yang salah.",
            },
            {
              "kind": "p",
              "text": "Klik Calculate Leg a untuk melihat hasilnya, dan gunakan Reset untuk mengosongkan kedua-dua medan sebelum masalah baharu. Hasilnya ialah panjang dalam unit yang anda masukkan, jadi hipotenus 10 cm dan unjuran 3.6 cm mengembalikan 6 cm, tanpa langkah penukaran tambahan.",
            },
          ],
          "h2": "Kira Kaki A Segi Tiga Tepat daripada Unjuran",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sebuah segi tiga tepat mempunyai dua sisi yang berserenjang, yang disebut kaki, dan satu sisi terpanjang, yang disebut hipotenus. Kedua-dua kaki bertemu pada sudut tepat, dan hipotenus terletak bertentangan dengan sudut itu. Dalam panduan ini, segi tiga itu ialah ABC dengan sudut tepat di C, kaki a ialah sisi AC, kaki b ialah sisi BC, dan hipotenus c ialah sisi AB.",
            },
            {
              "kind": "p",
              "text": "Kaki a ialah salah satu daripada dua sisi yang membentuk sudut tepat, jadi ia ialah sisi sebenar segi tiga itu. Ia bukan segmen yang dilukis di dalam segi tiga, dan ia bukan unjuran p. Unjuran p terletak rata di sepanjang hipotenus, manakala kaki a bermula dari bucu A ke bucu sudut tepat C. Membezakan kedua-dua peranan ini ialah langkah pertama untuk menggunakan formula dengan betul.",
            },
            {
              "kind": "p",
              "text": "Kaki a berbeza daripada kaki b hanya dari segi kedudukan: kaki a menyentuh bucu A, dan kaki b menyentuh bucu B. Setiap kaki mempunyai unjurannya sendiri, dan inilah sebabnya formula untuk a menggunakan p manakala formula untuk b menggunakan q, iaitu pasangan yang ditetapkan oleh pelabelan.",
            },
            {
              "kind": "p",
              "text": "Dalam mana-mana segi tiga tepat yang tidak merosot, kaki a lebih pendek daripada hipotenus. Hal ini memberikan semakan pantas ke atas setiap jawapan: jika kaki a yang anda kira didapati lebih panjang daripada c, sesuatu telah tersilap pada input atau pengiraan, dan label rajah ialah tempat pertama yang perlu diperiksa.",
            },
          ],
          "h2": "Apakah Kaki A dalam Segi Tiga Tepat?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Lukis altitud dari bucu sudut tepat C secara berserenjang dengan hipotenus AB. Ia bertemu dengan hipotenus pada satu titik yang disebut kaki altitud, berlabel D. Titik itu membahagikan hipotenus kepada dua segmen bersebelahan, dan segmen-segmen itu ialah unjuran. Segmen AD ialah unjuran p, dan segmen DB ialah unjuran q.",
            },
            {
              "kind": "p",
              "text": "Unjuran p dimiliki oleh kaki a kerana ia terletak bersebelahan dengan bucu A, iaitu bucu yang sama dengan tempat kaki a bermula. Dalam segi tiga kecil ACD, kaki a ialah hipotenus dan p ialah salah satu kakinya, dan inilah kaitan geometri yang menjadikan teorem unjuran berfungsi. Unjuran q, dengan penaakulan yang sama, dimiliki oleh kaki b, yang menyentuh bucu B.",
            },
            {
              "kind": "p",
              "text": "Unjuran ialah panjang di sepanjang hipotenus, diukur dalam unit yang sama dengan sisi-sisi lain. Unjuran tidak berserenjang dengan apa-apa, dan bukan sisi segi tiga asal. Unjuran paling baik digambarkan sebagai bayang yang dilemparkan oleh kaki ke atas hipotenus apabila altitud jatuh lurus ke atasnya.",
            },
            {
              "kind": "p",
              "text": "Oleh sebab p dan q ialah dua bahagian bagi satu sisi lurus, kedua-duanya menambah kepada keseluruhan hipotenus:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Penambahan ini berguna dengan sendirinya. Jika anda tahu c dan satu unjuran, anda boleh mencari unjuran yang satu lagi dengan penolakan, iaitu langkah yang dihuraikan sepenuhnya dalam bahagian kemudian tentang unjuran yang satu lagi.",
            },
          ],
          "h2": "Apakah Unjuran P dalam Segi Tiga Tepat?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem unjuran menyatakan bahawa kuasa dua kaki a bersamaan dengan hipotenus didarab dengan unjurannya:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil punca kuasa dua positif bagi kedua-dua belah memberikan formula kerja untuk halaman ini:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Pengiraan ini berjalan dalam dua peringkat yang berbeza. Peringkat 1 mendarab hipotenus dengan unjuran, dan hasilnya ialah panjang kuasa dua, bukan sisi. Peringkat 2 mengambil punca kuasa dua positif, yang menukarkan panjang kuasa dua itu kembali kepada panjang biasa. Melangkau peringkat 2 ialah kesilapan paling lazim dengan formula ini, dan bahagian seterusnya menjelaskan mengapa punca kuasa dua tidak boleh ditinggalkan.",
            },
            {
              "kind": "p",
              "text": "Unit memerlukan perhatian pada kedua-dua peringkat. Jika c dan p kedua-duanya dalam sentimeter, hasil darabnya dalam sentimeter persegi, dan punca kuasa dua mengembalikan sentimeter. Mencampurkan unit, seperti meter untuk c dan sentimeter untuk p, memberikan hasil darab yang tidak bermakna, jadi tukarkan kepada satu unit sebelum mendarab. Punca positif digunakan kerana panjang sisi sentiasa positif.",
            },
            {
              "kind": "p",
              "text": "Satu contoh berangka kecil menunjukkan kedua-dua peringkat ini sedang berfungsi. Dengan [[c = 10]] cm dan [[p = 3.6]] cm, peringkat 1 memberikan [[10 \\times 3.6 = 36]], dan peringkat 2 memberikan [[a = \\sqrt{36} = 6]] cm. Nombor 36 sendiri tidak menjawab sebarang soalan. Hanya selepas punca kuasa dua barulah ia menjadi panjang kaki.",
            },
          ],
          "h2": "Formula Kaki A Segi Tiga Tepat daripada Unjuran",
          "image": {
            "alt": "Segi tiga tepat ABC dengan altitud CD, menunjukkan kaki a kuasa dua bersamaan dengan hipotenus c didarab dengan unjuran p",
            "caption": "Teorem unjuran: a kuasa dua bersamaan dengan c darab p, jadi a bersamaan dengan punca kuasa dua c darab p.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Punca kuasa dua wujud kerana pendaraban itu menghasilkan kuantiti kuasa dua. Teorem ini tidak mengatakan bahawa kaki a bersamaan dengan hasil darab c dan p. Ia mengatakan bahawa kuasa dua kaki a bersamaan dengan hasil darab itu. Membatalkan kuasa dua memerlukan punca kuasa dua, sama seperti membatalkan penggandaan memerlukan pembahagian dua.",
            },
            {
              "kind": "p",
              "text": "Ambil [[c = 10]] dan [[p = 3.6]]. Hasil darabnya ialah 36, iaitu [[a^2]], kuasa dua kaki itu. Kaki itu sendiri ialah nombor yang apabila didarab dengan dirinya sendiri memberikan 36, iaitu 6. Menulis [[a = 36]] bererti mendakwa sisi sepanjang 36 unit dalam segi tiga yang hipotenusnya hanya 10, yang jelas mustahil.",
            },
            {
              "kind": "p",
              "text": "Jadual di bawah membezakan ketiga-tiga kuantiti ini, kerana mengelirukannya menyebabkan kebanyakan kesilapan dengan formula ini.",
            },
          ],
          "h2": "Mengapakah Terdapat Punca Kuasa Dua dalam Formula?",
          "table": {
            "headers": [
              "Kuantiti",
              "Maksud",
              "Contoh dengan c = 10, p = 3.6",
            ],
            "rows": [
              [
                "a",
                "Panjang kaki itu sendiri",
                "6",
              ],
              [
                "a kuasa dua",
                "Panjang kaki didarab dengan dirinya sendiri",
                "36",
              ],
              [
                "c darab p",
                "Hasil darab yang disamakan oleh teorem dengan a kuasa dua",
                "36",
              ],
              [
                "Punca kuasa dua cp",
                "Langkah yang memulihkan a daripada a kuasa dua",
                "6",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh langkah pendek membawa anda dari rajah berlabel kepada jawapan yang disemak.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenal pasti segi tiga tepat dalam masalah anda dan sahkan ia mempunyai sudut tepat.",
                "Cari altitud dari sudut tepat dan tandakan tempat ia bertemu dengan hipotenus.",
                "Kenal pasti hipotenus penuh c, iaitu sisi yang bertentangan dengan sudut tepat.",
                "Kenal pasti unjuran p, iaitu segmen hipotenus yang bersebelahan dengan bucu A, tempat kaki a bermula.",
                "Semak bahawa p lebih kecil daripada c. Jika tidak, labelkan semula rajah itu sebelum meneruskan.",
                "Tukarkan c dan p kepada unit yang sama jika ia diberikan dalam unit yang berbeza.",
                "Masukkan c dalam medan Hypotenuse c.",
                "Masukkan p dalam medan Projection p. Jangan masukkan q di sini, kerana itu akan mengembalikan kaki b.",
                "Klik Calculate Leg a dan baca hasilnya.",
                "Gunakan Reset sebelum memulakan masalah baharu.",
              ],
            },
            {
              "kind": "p",
              "text": "Kalkulator ini tidak menerima q, jadi masalah yang hanya memberikan q memerlukan satu langkah penolakan tambahan, yang dihuraikan di bawah. Memasukkan q dalam medan p masih menghasilkan nombor, tetapi ia akan menjadi kaki yang salah, jadi semakan label dalam langkah 4 paling penting.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Kaki A Segi Tiga Tepat",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[c = 10]] cm dan [[p = 3.6]] cm. Empat langkah di bawah menunjukkan kerja penuh, tanpa apa-apa yang dilangkau.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis formula: a = sqrt(cp).",
                "Gantikan nilai: a = sqrt(10 x 3.6).",
                "Darab di dalam punca: a = sqrt(36).",
                "Ambil punca kuasa dua: a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawapan 6 cm ialah sisi berserenjang sebenar AC, bukan unjuran dan bukan luas. Satu pengesahan ringkas menutup gelung: [[a^2 = 6^2 = 36]] dan [[c \\times p = 10 \\times 3.6 = 36]], jadi kedua-dua belah teorem itu bersetuju.",
            },
            {
              "kind": "p",
              "text": "Sebagai rujukan, unjuran yang satu lagi ialah [[q = 10 - 3.6 = 6.4]] cm, kaki b ialah [[b = \\sqrt{10 \\times 6.4} = 8]] cm, dan altitud ialah [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, mengesahkan segi tiga tepat 6-8-10 yang biasa.",
            },
          ],
          "h2": "Contoh Langkah demi Langkah Mencari Kaki A",
          "image": {
            "alt": "Segi tiga tepat dengan hipotenus 10 cm dan unjuran 3.6 cm, dikerjakan sehingga memberikan kaki a bersamaan dengan 6 cm",
            "caption": "Contoh kerja: c = 10 cm dan p = 3.6 cm memberikan a = sqrt(36) = 6 cm.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rajah utama menunjukkan segi tiga ABC dengan sudut tepat di C. Sisi AC ialah kaki a, sisi BC ialah kaki b, dan sisi AB ialah hipotenus c. Altitud CD jatuh dari C secara berserenjang dengan AB dan menyentuhnya di D, dan penanda sudut tepat di D mengesahkan bahawa CD benar-benar berserenjang.",
            },
            {
              "kind": "p",
              "text": "Titik D membahagikan hipotenus kepada dua bahagian: segmen AD ialah unjuran p dan segmen DB ialah unjuran q. Kaki a dan unjuran p diserlahkan kerana kedua-duanya ialah pasangan yang dibincangkan di halaman ini. Jejak rajah ini mengikut urutan berikut untuk menetapkan label: mulakan di A, ikut kaki a ke C, kemudian ikut kaki b ke B, kemudian kembali di sepanjang hipotenus dari B ke A, dan berhenti di D untuk melihat pembahagian kepada q dan p.",
            },
            {
              "kind": "p",
              "text": "Pasangan a dengan p menjadi jelas dalam segi tiga kecil ACD, dengan kaki a sebagai hipotenus dan p sebagai sisi yang terletak di sepanjang hipotenus besar. Oleh sebab segi tiga ACD serupa dengan segi tiga ABC, nisbah p kepada a dalam segi tiga kecil bersamaan dengan nisbah a kepada c dalam segi tiga besar, dan bahagian bukti menukarkan nisbah itu kepada [[a^2 = cp]].",
            },
          ],
          "h2": "Rajah Kaki A Segi Tiga Tepat daripada Unjuran Diterangkan",
          "image": {
            "alt": "Segi tiga tepat ABC dengan sudut tepat di C, altitud CD ke hipotenus AB, kaki a dan unjuran p diserlahkan, dengan kaki a dan b, hipotenus c, unjuran p dan q, dan altitud h berlabel",
            "caption": "Segi tiga utama ABC: altitud CD membahagikan hipotenus AB kepada unjuran p (AD) dan unjuran q (DB), dengan kaki a (AC) diserlahkan.",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti ini bersandarkan segi tiga yang serupa. Melukis altitud CD membahagikan segi tiga ABC kepada dua segi tiga tepat yang lebih kecil, ACD dan CBD, dan kedua-duanya serupa dengan segi tiga asal. Keserupaan bermakna sisi-sisi yang sepadan kekal dalam nisbah yang sama, dan salah satu nisbah itu memberikan teorem unjuran secara langsung.",
            },
            {
              "kind": "p",
              "text": "Tumpukan perhatian pada segi tiga ACD dan keseluruhan segi tiga ABC. Kedua-duanya mengandungi sudut di A, dan kedua-duanya mengandungi sudut tepat, jadi sudut ketiga masing-masing mestilah sepadan juga. Memadankan sisi-sisi yang terletak pada kedudukan yang sama memberikan perkadaran:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang gantikan simbol piawai: [[AD = p]], [[AC = a]], dan [[AB = c]]. Perkadaran itu menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Pendaraban silang menghilangkan pecahan. Pengangka kiri didarab dengan penyebut kanan bersamaan dengan pengangka kanan didarab dengan penyebut kiri, jadi [[p \\times c = a \\times a]], iaitu:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil punca kuasa dua positif bagi kedua-dua belah melengkapkan bukti, memberikan [[a = \\sqrt{c \\times p}]]. Hujah yang sama yang dikenakan pada segi tiga kecil yang satu lagi, CBD, memberikan [[b^2 = c \\times q]]. Keserupaan melakukan semua kerja: sisi-sisi sepadan bagi segi tiga yang serupa kekal berkadaran.",
            },
          ],
          "h2": "Mengapakah Teorem Unjuran Berfungsi?",
          "image": {
            "alt": "Segi tiga tepat asal ABC di samping segi tiga kecil yang serupa ACD dan CBD, menunjukkan perkadaran p per a bersamaan dengan a per c",
            "caption": "Bukti segi tiga serupa: p per a bersamaan dengan a per c, jadi pendaraban silang memberikan a kuasa dua bersamaan dengan c darab p.",
            "src": "leg-a-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap contoh menyatakan nilai yang diberikan, penggantian, dan jawapan akhir. Ulasan dikekalkan ringkas supaya pengiraan kekal jelas, dan setiap contoh mengekalkan unitnya yang konsisten dari mula hingga akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 10]] cm dan [[p = 4]] cm, formula memberikan [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]], jadi [[a \\approx 6.325]] cm. Hasil darab 40 bukan kuasa dua sempurna, jadi jawapannya kekal sebagai anggaran yang dibundarkan kepada tiga tempat perpuluhan. Perhatikan bahawa 6.325 cm lebih pendek daripada hipotenus 10 cm, seperti yang sepatutnya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Hasil Kuasa Dua Sempurna",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 10]] cm dan [[p = 3.6]] cm, [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Apabila hasil darab ialah kuasa dua sempurna, jawapannya tepat, tanpa pembundaran diperlukan. Ini ialah segi tiga yang sama dengan contoh langkah demi langkah, dan kaki yang satu lagi ialah 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Segi Tiga Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 25]] m dan [[p = 9]] m, [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m. Nombor yang lebih besar tidak mengubah apa-apa tentang kaedahnya: darab, kemudian ambil puncanya. Unjuran yang satu lagi di sini ialah 16 m, yang berpasangan dengan kaki 20 m, menjadikan segi tiga klasik 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Ukuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 12.5]] cm dan [[p = 3.2]] cm, [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], jadi [[a \\approx 6.325]] cm. Ini sepadan dengan Contoh 1 dari segi nilai kerana kedua-dua hasil darab bersamaan dengan 40, satu peringatan berguna bahawa input yang berbeza boleh berkongsi hasil darab yang sama. Kekalkan hasil darab penuh di dalam punca sehingga langkah pembundaran akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Unjuran Hipotenus Sama",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 20]] cm dan [[p = 10]] cm, [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, jadi [[a \\approx 14.142]] cm. Unjuran yang sama bermakna altitud mengenai titik tengah hipotenus, yang berlaku tepat apabila kedua-dua kaki sama. Segi tiga itu dengan itu ialah segi tiga tepat sama kaki, dan kaki b bersamaan dengan kaki a.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Kecil",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 8]] mm dan [[p = 2]] mm, [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm. Unit kecil berfungsi tepat seperti unit besar, dan jawapannya kekal dalam milimeter kerana kedua-dua input dalam milimeter. Mengecilkan masalah tidak pernah mengubah langkah-langkahnya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Unit Berbeza",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 0.5]] m dan [[p = 20]] cm, tukarkan dahulu: 0.5 m bersamaan dengan 50 cm. Kemudian [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]], jadi [[a \\approx 31.623]] cm. Mendarab 0.5 dengan 20 tanpa penukaran akan memberikan punca 10, iaitu jawapan salah tanpa unit sah di sebaliknya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 16]] ft dan [[p = 4]] ft, [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft. Hasil darab 64 ialah kuasa dua sempurna, jadi jawapannya tepat. Semakan pantas lulus: 8 ft ialah separuh hipotenus, dan kaki yang satu lagi ialah kira-kira 13.856 ft, yang lebih panjang daripada a tetapi masih lebih pendek daripada 16 ft.",
            },
          ],
          "h2": "Contoh Kerja Mencari Kaki A daripada Unjuran",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sesetengah masalah memberikan q dan bukannya p. Kalkulator di halaman ini tidak menerima q, tetapi itu hanya lencongan satu langkah, bukan jalan buntu. Oleh sebab kedua-dua unjuran menambah kepada hipotenus, tolakkan dahulu untuk memulihkan p:",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "Ambil [[c = 25]] cm dan [[q = 16]] cm. Penolakan memberikan [[p = 25 - 16 = 9]] cm. Sekarang formula biasa boleh digunakan: [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Jika anda memasukkan 16 secara langsung sebagai p, kalkulator akan mengembalikan 20 cm, iaitu kaki b, bukan kaki a.",
            },
            {
              "kind": "p",
              "text": "Kalkulator <a href=\"/right-triangle-projection-q-calculator/\">unjuran q</a> boleh membantu apabila q sendiri perlu dicari, dan <a href=\"/right-triangle-projection-p-calculator/\">kalkulator unjuran p</a> merangkumi langkah songsang. Walau apa pun, peraturannya kekal sama: cari p dahulu, kemudian gunakan [[a = \\sqrt{c \\times p}]].",
            },
          ],
          "h2": "Cara Mencari Kaki A Apabila Unjuran Lain Diketahui",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Satu teorem menghubungkan tiga kuantiti, jadi menyusunnya semula dapat mencari mana-mana satu yang hilang. Ketiga-tiga bentuknya ialah:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Jadual di bawah menunjukkan setiap susunan semula, apa yang dicarinya, dan apa yang mesti diketahui dahulu.",
            },
          ],
          "h2": "Hubungan antara Kaki A, Hipotenus, dan Unjuran P",
          "table": {
            "headers": [
              "Kuantiti Hilang",
              "Formula",
              "Nilai Diketahui yang Diperlukan",
            ],
            "rows": [
              [
                "Kaki a",
                "a = sqrt(cp)",
                "Hipotenus c dan unjuran p",
              ],
              [
                "Hipotenus c",
                "c = a kuasa dua / p",
                "Kaki a dan unjuran p",
              ],
              [
                "Unjuran p",
                "p = a kuasa dua / c",
                "Kaki a dan hipotenus c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kaki b mengikut imej cermin bagi formula kaki a. Di mana kaki a berpasangan dengan unjuran p, kaki b berpasangan dengan unjuran q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan satu segi tiga yang konsisten untuk melihat kedua-dua kaki bersama-sama: [[c = 25]], [[p = 9]], dan [[q = 16]]. Kemudian [[a = \\sqrt{25 \\times 9} = 15]] dan [[b = \\sqrt{25 \\times 16} = 20]]. Kedua-dua kaki berkongsi hipotenus yang sama tetapi menggunakan unjuran yang berbeza, dan inilah sebabnya mengenal pasti p dan q dengan betul menentukan kaki yang anda peroleh.",
            },
            {
              "kind": "p",
              "text": "Kaki-kaki itu juga saling membataskan melalui teorem Pythagoras, yang dihuraikan dua bahagian di bawah: mengetahui satu kaki dan hipotenus menentukan kaki yang satu lagi. Bagi masalah yang bermula dari q dan bukannya p, <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator kaki b daripada unjuran</a> menjalankan kaedah yang sama dengan pasangan yang satu lagi.",
            },
          ],
          "h2": "Hubungan antara Kaki A dan Kaki B",
          "image": {
            "alt": "Segi tiga tepat yang membandingkan unjuran p yang berpasangan dengan kaki a dengan unjuran q yang berpasangan dengan kaki b, dengan c bersamaan dengan 25, p bersamaan dengan 9, dan q bersamaan dengan 16",
            "caption": "Dipasangkan dengan betul: a menggunakan p (sqrt(25 x 9) = 15) dan b menggunakan q (sqrt(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem unjuran dan teorem Pythagoras bersetuju dengan tepat, dan algebra menunjukkan sebabnya. Mulakan daripada kedua-dua formula unjuran:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Tambahkan formula sepadan untuk kaki b, [[b^2 = c \\times q]], untuk memperoleh:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengeluarkan c sebagai faktor dari sebelah kanan memberikan [[a^2 + b^2 = c(p + q)]]. Oleh sebab [[p + q = c]], penggantian menghasilkan keputusan yang biasa:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Semakan berangka dengan segi tiga 9-16-25 mengesahkannya: [[a^2 + b^2 = 225 + 400 = 625]] dan [[c^2 = 25^2 = 625]]. Kedua-dua teorem ini bukan pesaing. Teorem unjuran membahagikan hubungan Pythagoras kepada satu bahagian bagi setiap kaki, dan menambah bahagian-bahagian itu membina semula hubungan tersebut.",
            },
          ],
          "h2": "Hubungan antara Unjuran P dan Teorem Pythagoras",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga semakan bebas menangkap hampir setiap kesilapan. Jalankan sekurang-kurangnya satu daripadanya ke atas setiap jawapan, dan jalankan ketiga-tiganya apabila masalah itu penting.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 1: Semakan Teorem Unjuran",
            },
            {
              "kind": "p",
              "text": "Kuasa duakan jawapan anda dan bandingkan dengan hasil darab c dan p. Bagi [[c = 25]], [[p = 9]], dan [[a = 15]]: [[a^2 = 225]] dan [[c \\times p = 225]], jadi jawapannya lulus. Jika kedua-dua nombor itu berbeza, sama ada input atau langkah punca kuasa dua telah tersilap.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 2: Semakan Teorem Pythagoras",
            },
            {
              "kind": "p",
              "text": "Cari kaki b daripada q, kemudian semak [[a^2 + b^2 = c^2]]. Dengan [[p = 9]], [[q = 16]], dan [[c = 25]]: [[a = 15]], [[b = 20]], dan [[225 + 400 = 625 = 25^2]]. Semakan ini melangkaui kalkulator, kerana ia menguji keseluruhan segi tiga, bukan hanya satu formula.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 3: Semakan Saiz dan Penambahan",
            },
            {
              "kind": "p",
              "text": "Sahkan bahawa p lebih kecil daripada c, bahawa [[p + q = c]] apabila q diketahui, dan bahawa kaki a lebih pendek daripada hipotenus. Dalam contoh ini, 9 lebih kecil daripada 25, [[9 + 16 = 25]], dan 15 lebih pendek daripada 25. Sebarang kegagalan di sini menunjuk kepada kesilapan pelabelan, bukan kesilapan aritmetik.",
            },
          ],
          "h2": "Cara Mengesahkan Kaki A yang Dikira",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Lapan sifat berikut secara langsung daripada [[a = \\sqrt{c \\times p}]] dan geometri di sebaliknya. Setiap satunya juga berfungsi sebagai semakan akal ke atas jawapan baharu.",
            },
            {
              "items": [
                "Kaki a sentiasa lebih pendek daripada hipotenus dalam segi tiga tepat yang tidak merosot, kerana p hanyalah sebahagian daripada c.",
                "Unjuran p sentiasa lebih kecil daripada c, dan sentiasa positif. Unjuran sifar atau negatif tidak menggambarkan sebarang segi tiga sebenar.",
                "Meningkatkan p sambil mengekalkan c meningkatkan a, kerana hasil darab di dalam punca bertambah.",
                "Meningkatkan c sambil mengekalkan p meningkatkan a dari segi matematik, dengan syarat nilai baharu masih menggambarkan segi tiga sebenar dengan p lebih kecil daripada c.",
                "Menukar p dan q mengubah kaki yang dikira: p memberikan kaki a dan q memberikan kaki b.",
                "Unjuran yang sama menghasilkan kaki yang sama. Dengan c = 20 dan p = q = 10, kedua-dua kaki bersamaan dengan 10 darab punca kuasa dua 2, iaitu kira-kira 14.142.",
                "Hasilnya ialah panjang, bukan luas. Hasil darab kuasa dua hanyalah langkah perantaraan, dan punca kuasa dua mengembalikan unit panjang biasa.",
                "Mengskalakan semua ukuran dengan faktor yang sama mengskalakan kaki a dengan faktor itu. Menggandakan c dan p menggandakan a, kerana hasil darab menjadi empat kali ganda dan puncanya menjadi dua kali ganda.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Apabila altitud jatuh tepat di titik tengah hipotenus, segi tiga itu sama kaki, dan kedua-dua kakinya mestilah sepadan, seperti yang ditunjukkan oleh rajah di bawah.",
            },
          ],
          "h2": "Sifat Penting Kaki A daripada Unjuran",
          "image": {
            "alt": "Segi tiga tepat sama kaki dengan hipotenus 20, unjuran p dan q yang sama iaitu 10, dan kaki a dan b masing-masing bersamaan dengan 10 punca 2",
            "caption": "Unjuran sama: c = 20 dengan p = q = 10 memberikan a = b = 10 punca 2, kira-kira 14.142.",
            "src": "leg-a-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap kesilapan di bawah diikuti oleh pembetulannya. Kebanyakannya berpunca daripada pelabelan, bukan aritmetik.",
            },
            {
              "kind": "steps",
              "steps": [
                "Melupakan punca kuasa dua: melaporkan cp sebagai jawapan. Dengan c = 10 dan p = 3.6, jawapannya ialah 6 cm, bukan 36.",
                "Mengelirukan a dengan a kuasa dua: 36 ialah a kuasa dua dalam contoh itu, manakala 6 ialah kaki itu. Nyatakan yang mana satu yang anda maksudkan sebelum menulis nombor.",
                "Menggunakan unjuran q dan bukannya p: memasukkan q mengembalikan kaki b. Dengan c = 25 dan q = 16, hasil 20 ialah kaki b, bukan kaki a.",
                "Memasukkan kaki dalam medan hipotenus: hipotenus ialah sisi yang bertentangan dengan sudut tepat dan sisi terpanjang. Kaki yang dimasukkan sebagai c memesongkan setiap langkah kemudian.",
                "Mengelirukan hipotenus dengan unjuran: c ialah keseluruhan sisi, manakala p hanyalah sebahagiannya. Semak bahawa p lebih kecil daripada c sebelum mengira.",
                "Menggunakan p yang lebih besar daripada atau sama dengan c: tiada segi tiga sedemikian wujud, kerana p ialah sebahagian daripada c. Semak semula label rajah jika ini berlaku.",
                "Mencampurkan sentimeter dan meter: tukarkan dahulu, seperti dalam Contoh 7, di mana 0.5 m menjadi 50 cm sebelum didarab dengan 20 cm.",
                "Menggunakan ukuran negatif: panjang adalah positif, jadi entri negatif menandakan ralat data, bukan kaki negatif.",
                "Menggunakan formula pada segi tiga bukan tepat: teorem unjuran memerlukan altitud dari sudut tepat. Tanpa sudut tepat, tiada unjuran p dalam pengertian ini.",
                "Membundar terlalu awal: membundarkan hasil darab sebelum mengambil punca mengubah jawapan. Kekalkan ketepatan penuh sehingga langkah akhir.",
                "Menggunakan kesepadanan sisi yang salah dalam rajah: memasangkan p dengan b, atau q dengan a, menukar kaki-kaki itu. Padankan p dengan kaki yang menyentuh bucu A.",
                "Menganggap altitud sebagai unjuran: altitud h berserenjang dengan hipotenus, bukan sebahagiannya, jadi ia tidak pernah dimasukkan dalam medan p.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika jawapan kelihatan salah, berhenti dan labelkan semula rajah itu sebelum mengira semula. Kebanyakan kesilapan di atas hilang sebaik sahaja p dan q ditandakan dengan jelas pada hipotenus dan segala-galanya diketepikan.",
            },
          ],
          "h2": "Kesilapan Lazim Apabila Mencari Kaki A daripada Unjuran",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kegunaan paling langsung ialah kerja rumah geometri dan kerja bilik darjah, dengan masalah unjuran menguji sama ada pelajar boleh melabel rajah dan menggunakan [[a^2 = c \\times p]] dan bukannya mencapai teorem Pythagoras secara kebiasaan. Latihan segi tiga serupa menggunakan persediaan yang sama, kerana bukti itu sendiri ialah latihan dalam memadankan sisi-sisi sepadan.",
            },
            {
              "kind": "p",
              "text": "Lukisan teknikal menggunakan teorem ini apabila segi tiga tepat mesti dibina semula daripada ukuran separa: jika lukisan memberikan hipotenus dan kaki altitud, kaki yang hilang dapat diperoleh tanpa mengukur semula bentuk itu. Guru juga menggunakan persediaan ini sebagai pelajaran jambatan antara penambahan segmen dan keserupaan.",
            },
            {
              "kind": "p",
              "text": "Satu syarat menghadkan setiap penggunaan: geometri segi tiga tepat yang diperlukan mestilah benar-benar wujud. Teorem ini menggambarkan hubungan geometri yang tepat, bukan ukuran lapangan anggaran, jadi ia tidak pernah menggantikan pengukuran tinjauan yang teliti atau pengukuran kejuruteraan profesional. Dalam persekitarannya yang betul, walau bagaimanapun, ia menukar dua panjang yang diketahui kepada panjang ketiga dengan satu pendaraban dan satu punca kuasa dua.",
            },
          ],
          "h2": "Aplikasi Praktikal Teorem Unjuran",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cuba keenam-enam masalah ini di atas kertas sebelum membaca jawapannya. Tiada satu pun nilai yang mengulangi contoh kerja, dan masalah terakhir menggabungkan beberapa idea daripada panduan ini.",
            },
            {
              "kind": "h3",
              "text": "Masalah 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Sebuah segi tiga tepat mempunyai hipotenus [[c = 36]] cm dan unjuran [[p = 4]] cm. Cari kaki a.",
            },
            {
              "kind": "h3",
              "text": "Masalah 2: Unjuran Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 26]] cm dan [[p = 6.5]] cm, cari kaki a.",
            },
            {
              "kind": "h3",
              "text": "Masalah 3: Hipotenus Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 100]] cm dan [[p = 64]] cm, cari kaki a.",
            },
            {
              "kind": "h3",
              "text": "Masalah 4: Penukaran Unit",
            },
            {
              "kind": "p",
              "text": "Sebuah hipotenus berukuran [[c = 1.2]] m dan unjurannya p berukuran 30 cm. Cari kaki a dalam sentimeter.",
            },
            {
              "kind": "h3",
              "text": "Masalah 5: Cari p daripada q dan c Dahulu",
            },
            {
              "kind": "p",
              "text": "Sebuah segi tiga tepat mempunyai hipotenus [[c = 65]] cm dan unjuran [[q = 49]] cm. Cari kaki a.",
            },
            {
              "kind": "h3",
              "text": "Masalah 6: Berbilang Langkah dengan Kaki b dan Pythagoras",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 50]] cm dan [[p = 18]] cm, cari kaki a, kemudian cari kaki b dan semak hasilnya dengan teorem Pythagoras.",
            },
            {
              "kind": "h3",
              "text": "Jawapan Masalah Latihan",
            },
            {
              "kind": "p",
              "text": "Jawapan 1: [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 2: [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 3: [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 4: Tukarkan 1.2 m kepada 120 cm, kemudian [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 5: Pertama [[p = 65 - 49 = 16]] cm, kemudian [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 6: [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Unjuran yang satu lagi ialah [[q = 50 - 18 = 32]] cm, jadi [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Semak: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Masalah Latihan dengan Jawapan",
        },
      },
      "tocHeading": "Kandungan Panduan",
      "tocItems": {
        "sec-intro": "Kalkulator Kaki A Segi Tiga Tepat daripada Unjuran",
        "sec-calculate": "Kira Kaki A Segi Tiga Tepat daripada Unjuran",
        "sec-what-leg-a": "Apakah Kaki A dalam Segi Tiga Tepat?",
        "sec-what-projection-p": "Apakah Unjuran P dalam Segi Tiga Tepat?",
        "sec-formula": "Formula Kaki A Segi Tiga Tepat daripada Unjuran",
        "sec-why-sqrt": "Mengapakah Terdapat Punca Kuasa Dua dalam Formula?",
        "sec-how": "Cara Menggunakan Kalkulator Kaki A Segi Tiga Tepat",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Kaki A",
        "sec-diagram": "Rajah Kaki A Segi Tiga Tepat daripada Unjuran Diterangkan",
        "sec-proof": "Mengapakah Teorem Unjuran Berfungsi?",
        "sec-examples": "Contoh Kerja Mencari Kaki A daripada Unjuran",
        "sec-other-projection": "Cara Mencari Kaki A Apabila Unjuran Lain Diketahui",
        "sec-relationship": "Hubungan antara Kaki A, Hipotenus, dan Unjuran P",
        "sec-leg-b": "Hubungan antara Kaki A dan Kaki B",
        "sec-pythagoras": "Hubungan antara Unjuran P dan Teorem Pythagoras",
        "sec-verify": "Cara Mengesahkan Kaki A yang Dikira",
        "sec-properties": "Sifat Penting Kaki A daripada Unjuran",
        "sec-mistakes": "Kesilapan Lazim Apabila Mencari Kaki A daripada Unjuran",
        "sec-applications": "Aplikasi Praktikal Teorem Unjuran",
        "sec-practice": "Masalah Latihan dengan Jawapan",
        "sec-related": "Terokai Kalkulator Segi Tiga Tepat Berkaitan",
        "sec-faq": "Soalan Lazim",
      },
    },
};
