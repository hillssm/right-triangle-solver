/**
 * angleTranslations.batch3.ts
 * Translations of the Right Triangle Angle Calculator guide (AngleGuide.astro)
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese Simplified (zh).
 *
 * Structure per language:
 * - tocHeading, tocItems (15 entries keyed by section id)
 * - sections (15 entries: angle-intro, angle-anatomy, angle-inverse, angle-complement,
 *   angle-howto, angle-arcsin, angle-arccos, angle-arctan, angle-choose, angle-applications,
 *   angle-mistakes, angle-precision, angle-verify, angle-related, angle-conclusion)
 * - faqs (12 question/answer pairs, top-level)
 * - relatedHeading, relatedIntro, relatedItems (6 calculator names)
 *
 * Formulas, KaTeX markup, variable names, numbers, URLs, and HTML IDs are preserved
 * exactly as in the English source.
 */

export const ANGLE_TRANSLATIONS_BATCH3 = {
  "id": {
    "faqs": [
      {
        "answer": "Gunakan fungsi trigonometri invers pada rasio sisi. Dengan sisi berhadapan dan hipotenusa, hitung arcsin(sisi berhadapan/hipotenusa). Dengan sisi bersebelahan dan hipotenusa, gunakan arccos(sisi bersebelahan/hipotenusa). Dengan kedua sisi siku-siku, gunakan arctan(sisi berhadapan/sisi bersebelahan). Hasilnya adalah sudut dalam derajat.",
        "question": "Bagaimana cara mencari sudut dalam segitiga siku-siku?"
      },
      {
        "answer": "Sinus menerima sudut dan mengembalikan rasio: sin(30°) = 0.5. Arcsin membaliknya: ia menerima rasio dan mengembalikan sudut, sehingga arcsin(0.5) = 30°. Gunakan sinus ketika Anda mengetahui sudut dan membutuhkan sisi; gunakan arcsin ketika Anda mengetahui sisi dan membutuhkan sudut.",
        "question": "Apa perbedaan sin dan arcsin?"
      },
      {
        "answer": "Gunakan arctan ketika Anda mengetahui kedua sisi siku-siku (berhadapan dan bersebelahan) tetapi bukan hipotenusa. Arctan melewati hipotenusa sepenuhnya, menghemat satu langkah dalam pengukuran lapangan seperti kemiringan atap di mana tinggi dan jarak horizontal diukur langsung. Gunakan arcsin ketika hipotenusa adalah salah satu sisi yang diketahui.",
        "question": "Kapan saya harus menggunakan arctan, bukan arcsin?"
      },
      {
        "answer": "Jumlah sudut segitiga selalu 180 derajat. Sudut siku-siku mengambil 90 di antaranya, menyisakan 90 untuk dua sudut lainnya. Artinya A + B = 90°, sehingga menemukan satu sudut lancip langsung memberi sudut lainnya melalui pengurangan.",
        "question": "Mengapa kedua sudut lancip berjumlah 90 derajat?"
      },
      {
        "answer": "Tidak. Sudut 90 derajat adalah sudut siku-siku di titik sudut C, yang sudah diketahui. Kalkulator ini mencari kedua sudut lancip A dan B, yang masing-masing tepat di antara 0° dan 90°. Jika hasil Anda mencapai 0° atau 90°, masukannya menggambarkan segitiga degenerat, bukan segitiga yang valid.",
        "question": "Bisakah sudutnya 90 derajat?"
      },
      {
        "answer": "Untuk arcsin dan arccos, rasio di atas 1 tidak mungkin dan menandakan sisi salah diberi label. Hipotenusa harus menjadi sisi terpanjang dan penyebut. Tetapkan kembali pengukuran terpanjang sebagai hipotenusa (c) dan hitung ulang. Rasio arctan boleh melebihi 1 secara sah.",
        "question": "Bagaimana jika rasio sisi saya lebih dari 1?"
      },
      {
        "answer": "Pilih sudut acuan terlebih dahulu. Sisi berhadapan berada di seberang sudut itu (tidak menyentuh titik sudutnya). Sisi bersebelahan menyentuh titik sudut tetapi bukan hipotenusa. Sisi fisik yang sama berhadapan untuk satu sudut lancip dan bersebelahan untuk sudut lainnya.",
        "question": "Bagaimana saya tahu sisi mana yang berhadapan dan mana yang bersebelahan?"
      },
      {
        "answer": "Karena ketiganya menggambarkan sudut geometris yang sama melalui pasangan sisi yang berbeda. Dalam segitiga 3-4-5, arcsin(3/5), arccos(4/5), dan arctan(3/4) semuanya sama dengan 36.87°. Kesepakatan ini adalah verifikasi yang kuat: jika dua metode tidak sepakat, ada sisi yang salah diberi label.",
        "question": "Mengapa arcsin, arccos, dan arctan memberikan jawaban yang sama?"
      },
      {
        "answer": "Kalkulator ini menggunakan derajat, standar untuk konstruksi, navigasi, dan geometri kelas. Jika Anda menghitung manual dengan kalkulator ilmiah, pastikan dalam mode derajat. Hasil mode radian seperti 0.64 untuk segitiga 3-4-5 berubah menjadi 36.87° dengan mengalikan 180/π.",
        "question": "Haruskah sudut dalam derajat atau radian?"
      },
      {
        "answer": "Sesuaikan dengan presisi masukan Anda. Jika sisi diukur hingga sentimeter terdekat, dua tempat desimal (36.87°) sudah tepat. Untuk perkiraan lapangan kasar, derajat bulat sudah cukup. Pertahankan presisi penuh selama perhitungan dan bulatkan hanya jawaban akhirnya.",
        "question": "Seberapa presisi jawaban sudut saya?"
      },
      {
        "answer": "Tidak. Satu sisi tidak cukup; ada tak berhingga segitiga siku-siku yang berbagi satu panjang sisi. Anda membutuhkan dua sisi (untuk trig invers) atau satu sisi ditambah satu sudut lancip (untuk aturan komplemen). Kalkulator membutuhkan tepat dua masukan.",
        "question": "Bisakah saya mencari sudut hanya dengan satu sisi yang diketahui?"
      },
      {
        "answer": "Tiga pemeriksaan: kedua sudut harus berada di antara 0° dan 90°, keduanya harus berjumlah tepat 90°, dan penghitungan ulang dengan fungsi invers yang berbeda harus memberikan hasil yang sama. Untuk segitiga 3-4-5, arcsin(3/5) = 36.87° dan arctan(3/4) = 36.87° saling mengonfirmasi.",
        "question": "Bagaimana cara memeriksa bahwa sudut saya benar?"
      }
    ],
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedIntro": "Setelah menemukan sudut Anda, lanjutkan dengan kalkulator terkait berikut untuk melengkapi analisis segitiga Anda.",
    "relatedItems": [
      "Kalkulator Sisi Segitiga Siku-Siku",
      "Kalkulator Sisi Segitiga Siku-Siku dari Sudut",
      "Kalkulator Rasio Trigonometri",
      "Kalkulator Segitiga Siku-Siku (Serba Guna)",
      "Kalkulator Teorema Pythagoras",
      "Kalkulator Segitiga Siku-Siku Khusus"
    ],
    "sections": {
      "angle-anatomy": {
        "figcaption": "Anatomi sudut: C adalah sudut siku-siku 90 derajat, A dan B lancip dan berjumlah 90 derajat. Sisi a, b, c diberi label relatif terhadap sudut A.",
        "h2": "Memahami Sudut dalam Segitiga Siku-Siku",
        "h3s": [
          "Apa Saja Ketiga Sudutnya?",
          "Bagaimana Sisi Dinamai Relatif terhadap Sudut?",
          "Mengapa Sudut Acuan Penting?"
        ],
        "imgAlt": "Segitiga siku-siku dengan sudut A, B, C diberi label, sisi a, b, c ditampilkan, sudut siku-siku di C",
        "paragraphs": [
          "Setiap segitiga siku-siku memiliki tiga sudut: satu sudut siku-siku yang tepat 90 derajat, dan dua sudut lancip yang masing-masing kurang dari 90 derajat. Sudut siku-siku berada di titik sudut C. Sudut-sudut lancip berada di titik sudut A dan B. Karena jumlah sudut segitiga adalah 180 derajat, kedua sudut lancip harus berjumlah 90 derajat.",
          "Nama sisi bergantung pada sudut yang sedang Anda ukur. Untuk sudut A: sisi di seberang A (tidak menyentuh titik sudut A) disebut sisi berhadapan, diberi label a. Sisi yang menyentuh titik sudut A tetapi bukan hipotenusa adalah sisi bersebelahan, diberi label b. Hipotenusa, diberi label c, berada di seberang sudut siku-siku dan selalu menjadi sisi terpanjang. Jika Anda beralih mengukur sudut B, labelnya bertukar: sisi di seberang B menjadi sisi berhadapan yang baru.",
          "Sisi fisik yang sama bisa menjadi sisi berhadapan untuk satu sudut dan sisi bersebelahan untuk sudut lainnya. Dalam segitiga 3-4-5, jika sudut A berada di antara sisi sepanjang 4 dan hipotenusa, maka sisi sepanjang 3 berhadapan dengan A. Untuk sudut B di sudut lainnya, sisi sepanjang 3 menjadi bersebelahan dan sisi sepanjang 4 menjadi berhadapan. Selalu tentukan sudut acuan Anda sebelum memilih rumus."
        ]
      },
      "angle-applications": {
        "figcaption": "Soal sudut di dunia nyata: kemiringan atap dari tinggi dan jarak horizontal, sudut keamanan tangga, kemiringan ramp aksesibilitas, dan sudut pandang tinggi pohon.",
        "h2": "Penerapan dalam Kehidupan Nyata",
        "h3s": [
          "Konstruksi dan Pertukangan",
          "Keselamatan dan Aksesibilitas",
          "Survei dan Kegiatan Luar Ruang"
        ],
        "imgAlt": "Empat panel yang menunjukkan perhitungan kemiringan atap, sudut tangga, kemiringan ramp, dan sudut ketinggian pohon",
        "paragraphs": [
          "Perhitungan sudut muncul di mana pun kemiringan, pitch, dan garis pandang penting. Keenam belas contoh di atas mencakup konstruksi, aksesibilitas, survei, dan pendidikan. Berikut pola di baliknya.",
          "Kemiringan atap (Contoh 5: 18.43°), sudut kasau (Contoh 10: 22.62°), dan kemiringan tangga (Contoh 12: 34.99°) semuanya menggunakan arctan atau arccos pada pengukuran lapangan langsung. Tukang kayu bekerja dengan tinggi per jarak horizontal karena itulah dimensi pada gambar rencana. Kalkulator mengubah dimensi tersebut menjadi sudut potong untuk gergaji.",
          "Penempatan tangga (Contoh 6: 66.04°) dan ramp kursi roda (Contoh 7: 4.76°) memiliki ambang keselamatan yang dinyatakan sebagai sudut. Tangga pada 66° terlalu landai; pedoman 75° sesuai dengan rasio 3.73 banding 1. Ramp pada 4.76° memenuhi maksimum aksesibilitas 1:12. Kalkulator mengubah pemeriksaan lulus-gagal berbasis sudut menjadi verifikasi cepat.",
          "Sudut tinggi pohon (Contoh 8: 30.96°), grade bukit (Contoh 15: 13.34°), dan garis pandang survei (Contoh 13: 30.26°) menggunakan pembacaan klinometer dan jarak yang diukur dengan pita. Sudut menjembatani kesenjangan antara apa yang dapat Anda ukur di tanah dan apa yang perlu Anda ketahui tentang ketinggian atau kemiringan."
        ]
      },
      "angle-arccos": {
        "h2": "Mencari Sudut dengan Arccos",
        "h3s": [
          "Contoh 10: Sudut Kasau (Arccos)",
          "Contoh: Segitiga 5-12-13",
          "Kapan Arccos Mengungguli Arcsin"
        ],
        "paragraphs": [
          "Gunakan arccos jika Anda mengetahui sisi bersebelahan dengan sudut target dan hipotenusa. Rumusnya adalah [[A = \\cos^{-1}(b/c)]]. Seperti arcsin, rasio harus berada di antara 0 dan 1. Arccos terasa alami ketika sisi bersebelahan paling mudah diukur, misalnya jarak horizontal atap atau jarak dasar dalam survei.",
          "Sebuah kasau memiliki jarak horizontal 6 meter dan panjang kasau (hipotenusa) 6.5 meter. Cari sudut kemiringan di lisplang.",
          "A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°. Ini adalah kemiringan atap yang sedang. Komplemennya, 67.38°, adalah sudut antara kasau dan dinding vertikal.",
          "Diketahui sisi bersebelahan b = 12 dan hipotenusa c = 13, cari sudut A.",
          "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. Komplemennya B = 67.38°. Perhatikan bahwa arccos(5/13) akan langsung menghasilkan 67.38°, dengan memperlakukan sisi sepanjang 5 sebagai sisi bersebelahan sudut B.",
          "Pilih arccos ketika pengukuran sisi bersebelahan lebih andal daripada sisi berhadapan. Dalam konstruksi rangka atap, jarak horizontal sering diukur langsung di sepanjang balok langit-langit, sedangkan tinggi vertikal harus diukur tegak lurus. Masukan yang lebih akurat menghasilkan sudut yang lebih akurat. Kedua fungsi setara secara matematis untuk segitiga yang sama; pilihannya soal kualitas pengukuran."
        ]
      },
      "angle-arcsin": {
        "h2": "Mencari Sudut dengan Arcsin",
        "h3s": [
          "Contoh 1: Segitiga 3-4-5",
          "Contoh 2: Segitiga yang Sama, Pemeriksaan Arccos",
          "Contoh 3: Segitiga yang Sama, Pemeriksaan Arctan",
          "Contoh 4: Mencari Komplemen",
          "Contoh 11: Lereng Curam (Arcsin)"
        ],
        "paragraphs": [
          "Gunakan arcsin jika Anda mengetahui sisi di seberang sudut target dan hipotenusa. Rumusnya adalah [[A = \\sin^{-1}(a/c)]]. Rasio harus berada di antara 0 dan 1. Jika rasio Anda melebihi 1, Anda salah memberi label sisi: hipotenusa harus menjadi penyebut.",
          "Diketahui sisi berhadapan a = 3 dan hipotenusa c = 5, cari sudut A.",
          "Langkah 1: Tulis rumusnya. A = arcsin(a/c).<br />\nLangkah 2: Substitusikan. A = arcsin(3/5).<br />\nLangkah 3: Hitung rasionya. 3/5 = 0.6.<br />\nLangkah 4: Terapkan arcsin. A = arcsin(0.6) ≈ 36.87°.",
          "Sudutnya sekitar 36.87 derajat. Komplemennya B = 90° − 36.87° = 53.13°.",
          "Diketahui sisi bersebelahan b = 4 dan hipotenusa c = 5, cari sudut A menggunakan arccos.",
          "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. Hasil ini sama persis dengan Contoh 1, mengonfirmasi bahwa kedua metode menggambarkan sudut yang sama. Ketika dua metode sepakat, label sisi Anda benar.",
          "Diketahui sisi berhadapan a = 3 dan sisi bersebelahan b = 4, cari sudut A menggunakan arctan.",
          "A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°. Ketiga fungsi invers bertemu pada jawaban yang sama untuk segitiga yang sama. Kesepakatan tiga arah ini adalah verifikasi terkuat yang tersedia.",
          "Diketahui sudut A = 36.87° dari Contoh 1, cari sudut B.",
          "B = 90° − A = 90° − 36.87° = 53.13°. Tidak perlu trigonometri. Anda dapat memverifikasi dengan menghitung arcsin(4/5) = 53.13°, memperlakukan sisi sepanjang 4 sebagai sisi berhadapan sudut B.",
          "Sebuah bentangan kabel naik 7 meter sepanjang jarak hipotenusa 25 meter. Cari sudut kemiringannya.",
          "A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°. Ini adalah lereng yang landai, khas untuk ramp aksesibel atau tanjakan konveyor. Sudut yang dangkal berarti sebagian besar panjang kabel digunakan untuk jarak horizontal, bukan ketinggian."
        ]
      },
      "angle-arctan": {
        "h2": "Mencari Sudut dengan Arctan",
        "h3s": [
          "Contoh 5: Kemiringan Atap (Arctan)",
          "Contoh 6: Penempatan Tangga (Arctan)",
          "Contoh 7: Ramp Kursi Roda (Arctan)",
          "Contoh 8: Sudut Ketinggian Pohon (Arctan)",
          "Contoh 9: Ramp Bongkar Muat (Arctan)",
          "Contoh 14: Penyangga Diagonal (Arctan)",
          "Contoh 15: Kemiringan Bukit (Arcsin)",
          "Contoh 12: Kemiringan Tangga (Arctan)",
          "Contoh 13: Grade Survei (Arctan)",
          "Contoh 16: Jalan Pintas Komplemen"
        ],
        "paragraphs": [
          "Gunakan arctan jika Anda mengetahui kedua sisi siku-siku tetapi bukan hipotenusa. Rumusnya adalah [[A = \\tan^{-1}(a/b)]]. Rasio a/b bisa berupa nilai positif apa pun. Arctan adalah andalan pekerjaan lapangan: tinggi per jarak horizontal adalah pasangan pengukuran paling umum dalam konstruksi, pertamanan, dan desain jalan.",
          "Atap naik 4 kaki sepanjang jarak horizontal 12 kaki. Cari sudut kemiringannya.",
          "Langkah 1: Tentukan sisi berhadapan (tinggi) = 4, sisi bersebelahan (jarak horizontal) = 12.<br />\nLangkah 2: A = arctan(4/12) = arctan(0.3333).<br />\nLangkah 3: A ≈ 18.43°.",
          "Kemiringan 18.43 derajat adalah kemiringan atap rumah yang umum, cukup curam untuk mengalirkan air tetapi masih bisa dilalui dengan hati-hati. Dalam istilah atap, ini adalah kemiringan 4-in-12.",
          "Sebuah tangga mencapai 4.5 meter ke atas dinding dengan kakinya 2 meter dari dinding. Cari sudut antara tangga dan tanah.",
          "A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°. Pedoman keselamatan merekomendasikan sudut tangga mendekati 75 derajat (rasio 4 banding 1). Pada 66 derajat, tangga ini terlalu landai dan harus digeser lebih dekat ke dinding.",
          "Sebuah ramp naik 0.75 meter sepanjang jarak 9 meter. Cari sudut kemiringannya.",
          "A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°. Standar aksesibilitas biasanya mensyaratkan kemiringan tidak lebih curam dari sekitar 4.8 derajat (rasio 1:12). Ramp ini pada 4.76° baru saja memenuhi pedoman.",
          "Seorang pengamat berdiri 20 meter dari sebuah pohon. Klinometer membaca puncak pohon pada sudut yang sesuai dengan sisi berhadapan 12 meter. Cari sudut pandangnya.",
          "A = arctan(12/20) = arctan(0.6) ≈ 30.96°. Dikombinasikan dengan tinggi mata pengamat, sudut ini memungkinkan rimbawan memperkirakan tinggi pohon tanpa memanjat.",
          "Sebuah ramp bongkar muat naik 2.5 meter sepanjang jarak 10 meter. Cari sudut kemiringannya.",
          "A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°. Nilai terverifikasi adalah 14.48°, mencerminkan nilai masukan yang presisi. Bagaimanapun, ini adalah kemiringan sedang yang cocok untuk troli tangan tetapi curam untuk dongkrak palet berat.",
          "Sebuah penyangga diagonal membentang 1.2 meter secara vertikal dan 3.5 meter secara horizontal. Cari sudut penyangganya.",
          "A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°. Sudut yang dangkal ini berarti penyangga bekerja terutama menahan geser horizontal, bukan memindahkan beban vertikal.",
          "Sebuah jalan setapak di bukit menanjak 3 meter sepanjang jarak lereng 13 meter. Cari sudut kemiringannya.",
          "A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°. Ini adalah tanjakan pendakian yang cukup curam. Perancang jalur menggunakan sudut-sudut ini untuk merencanakan jalan berliku ketika rute langsung melebihi sudut pendakian yang nyaman.",
          "Sebuah tangga naik 2.8 meter sepanjang jarak horizontal 4 meter. Cari sudut kemiringannya.",
          "A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°. Ini adalah kemiringan tangga yang nyaman. Peraturan bangunan biasanya membatasi sudut tangga hingga maksimum sekitar 37 derajat untuk penggunaan residensial, sehingga desain ini memenuhi aturan.",
          "Seorang surveyor mengukur perubahan elevasi 7 meter sepanjang jarak horizontal 12 meter. Cari sudut gradenya.",
          "A = arctan(7/12) = arctan(0.5833) ≈ 30.26°. Grade yang curam ini membutuhkan jalan berliku untuk jalan raya atau jalur pendakian. Insinyur sipil menggunakan sudut-sudut ini untuk menentukan kebutuhan galian dan timbunan.",
          "Diketahui sudut A = 32°, cari sudut B tanpa trigonometri.",
          "B = 90° − 32° = 58°. Mode komplemen ini adalah perhitungan tercepat di halaman ini ketika satu sudut lancip sudah diketahui dari busur derajat, waterpass digital, atau perhitungan sebelumnya."
        ]
      },
      "angle-choose": {
        "h2": "Kapan Menggunakan Setiap Metode",
        "h3s": [
          "Arcsin Terbaik Ketika",
          "Arccos Terbaik Ketika",
          "Arctan Terbaik Ketika",
          "Komplemen Terbaik Ketika"
        ],
        "paragraphs": [
          "Ketiga fungsi invers memberikan sudut yang sama untuk segitiga yang sama. Pilihannya bergantung pada sisi mana yang Anda ketahui dan pengukuran mana yang paling andal.",
          "Anda mengetahui sisi di seberang sudut target dan hipotenusa. Ini terjadi pada soal ketinggian: tinggi vertikal berhadapan dengan sudut di permukaan tanah, dan jarak lereng adalah hipotenusa. Soal tinggi pohon, elevasi bangunan, dan lendutan kabel cocok dengan arcsin.",
          "Anda mengetahui sisi bersebelahan dengan sudut target dan hipotenusa. Konstruksi rangka atap cocok dengan arccos karena jarak horizontal (sisi bersebelahan) diukur langsung di sepanjang balok. Garis dasar survei juga cocok dengan arccos ketika jarak di tanah adalah pengukuran yang andal.",
          "Anda mengetahui kedua sisi siku-siku tetapi bukan hipotenusa. Ini adalah situasi lapangan paling umum: tinggi dan jarak horizontal diukur langsung, sedangkan hipotenusa membutuhkan perhitungan terpisah. Arctan melewati hipotenusa sepenuhnya. Kapan pun Anda dapat mengukur kedua sisi siku-siku, arctan adalah jalan tercepat.",
          "Anda sudah mengetahui satu sudut lancip. Tidak perlu pengukuran sisi. Gunakan setelah perhitungan invers apa pun untuk mendapatkan sudut kedua, atau ketika busur derajat atau inklinometer digital memberi Anda satu sudut secara langsung."
        ],
        "table": {
          "headers": [
            "Sisi yang diketahui",
            "Metode",
            "Rumus"
          ],
          "rows": [
            [
              "Sisi berhadapan (a) dan hipotenusa (c)",
              "Arcsin",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "Sisi bersebelahan (b) dan hipotenusa (c)",
              "Arccos",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "Sisi berhadapan (a) dan sisi bersebelahan (b)",
              "Arctan",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "Satu sudut lancip",
              "Komplemen",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-complement": {
        "h2": "Sudut Komplementer: A + B = 90 Derajat",
        "paragraphs": [
          "Kedua sudut lancip dalam segitiga siku-siku bersifat komplementer, artinya jumlahnya tepat 90 derajat. Ini menghasilkan hubungan [[A + B = 90^\\circ]]. Setelah Anda menemukan satu sudut lancip, sudut lainnya langsung didapat dengan pengurangan: B = 90 derajat dikurangi A.",
          "Ini bukan metode pengukuran yang terpisah. Ini adalah pemeriksaan konsistensi dan jalan pintas. Jika arcsin menghasilkan A = 36.87 derajat, maka B = 53.13 derajat tanpa trigonometri lebih lanjut. Kalkulator ini menggunakan hubungan tersebut dalam mode jumlah sudutnya.",
          "Hubungan komplementer ini juga menjelaskan mengapa sin(A) sama dengan cos(B). Dalam segitiga 3-4-5, sin(36.87°) adalah 0.6 dan cos(53.13°) juga 0.6. Sinus dari satu sudut lancip selalu sama dengan kosinus sudut lancip lainnya, karena sisi di seberang satu sudut bersebelahan dengan sudut lainnya."
        ]
      },
      "angle-conclusion": {
        "h2": "Temukan Sudut Segitiga Siku-Siku Apa Pun dengan Percaya Diri",
        "paragraphs": [
          "Mulailah dengan memberi label segitiga Anda: hipotenusa terlebih dahulu, lalu sisi berhadapan dan bersebelahan relatif terhadap sudut target. Pilih fungsi invers yang sesuai dengan sisi yang diketahui: arcsin untuk sisi berhadapan dan hipotenusa, arccos untuk sisi bersebelahan dan hipotenusa, arctan untuk kedua sisi siku-siku. Masukkan pengukurannya, baca sudut dalam derajat, lalu dapatkan sudut kedua dari 90 dikurangi yang pertama. Verifikasi dengan pemeriksaan rentang, pemeriksaan jumlah, dan perhitungan metode silang. Dengan langkah-langkah ini, soal sudut segitiga siku-siku apa pun menjadi rutinitas yang andal. Kembali ke kalkulator di bagian atas halaman ini untuk menghitung angka Anda."
        ]
      },
      "angle-howto": {
        "figcaption": "Alur kerja empat langkah: beri label sisi relatif terhadap sudut acuan Anda, pilih rasio yang sesuai dengan sisi yang diketahui, terapkan fungsi invers, lalu verifikasi dengan komplemen.",
        "h2": "Cara Menggunakan Kalkulator Sudut Segitiga Siku-Siku",
        "imgAlt": "Proses empat langkah untuk menemukan sudut A: beri label sisi, pilih rasio, terapkan trig invers, verifikasi",
        "listItems": [
          "<strong>Tentukan sudut siku-siku.</strong> Pastikan segitiga memiliki sudut 90 derajat. Kalkulator ini hanya bekerja untuk segitiga siku-siku.",
          "<strong>Beri label hipotenusa.</strong> Temukan sisi terpanjang, yang berada di seberang sudut siku-siku. Beri label c.",
          "<strong>Pilih sudut acuan Anda.</strong> Putuskan apakah Anda mencari sudut A atau sudut B. Ini menentukan sisi mana yang berhadapan dan bersebelahan.",
          "<strong>Pilih mode yang sesuai.</strong> Jika Anda mengetahui sisi berhadapan dan hipotenusa, gunakan arcsin. Jika Anda mengetahui sisi bersebelahan dan hipotenusa, gunakan arccos. Jika Anda mengetahui kedua sisi siku-siku, gunakan arctan. Jika Anda mengetahui satu sudut lancip, gunakan mode komplemen.",
          "<strong>Masukkan kedua panjang sisi.</strong> Gunakan satuan yang sama untuk keduanya (keduanya dalam meter, keduanya dalam kaki, dll.). Satuan saling meniadakan dalam rasio, tetapi mencampur satuan akan merusak rasio.",
          "<strong>Baca hasil dalam derajat.</strong> Kalkulator mengeluarkan sudut dalam derajat, satuan standar untuk konstruksi, navigasi, dan geometri kelas.",
          "<strong>Temukan sudut kedua.</strong> Kurangi dari 90 derajat, atau jalankan kalkulator lagi dengan sudut lainnya sebagai acuan.",
          "<strong>Verifikasi.</strong> Periksa bahwa kedua sudut berada di antara 0 dan 90 derajat dan berjumlah 90. Periksa silang dengan metode rasio kedua jika presisi penting."
        ],
        "paragraphs": [
          "Ikuti langkah-langkah berikut untuk menemukan sudut yang tidak diketahui:"
        ]
      },
      "angle-intro": {
        "h2": "Apa Itu Kalkulator Sudut Segitiga Siku-Siku?",
        "paragraphs": [
          "Kalkulator sudut segitiga siku-siku menemukan sudut-sudut lancip yang tidak diketahui dalam segitiga siku-siku ketika Anda mengetahui panjang sisi-sisinya. Teorema Pythagoras menemukan sisi yang hilang, sedangkan fungsi trigonometri invers menemukan sudut yang hilang. Kalkulator ini menerima dua sisi yang diketahui, menghitung rasionya, lalu menerapkan arcsin, arccos, atau arctan untuk memperoleh sudut dalam derajat.",
          "Penggunaan umum meliputi menentukan kemiringan atap dari pengukuran tinggi dan jarak horizontal, mencari sudut penempatan tangga agar aman saat memanjat, menghitung kemiringan ramp untuk memenuhi standar aksesibilitas, dan menyelesaikan tugas geometri. Kalkulator ini membutuhkan tepat dua panjang sisi agar dapat bekerja. Ia mengembalikan sudut A (di antara sisi siku-siku yang bersebelahan dan hipotenusa) dan sudut B (komplemennya, di antara sisi siku-siku yang berhadapan dan hipotenusa).",
          "Sebagai contoh, segitiga siku-siku dengan sisi berhadapan 3 dan hipotenusa 5 memiliki sudut A = arcsin(3/5), yaitu sekitar 36.87 derajat. Sudut lancip lainnya adalah 90 dikurangi 36.87, atau 53.13 derajat. Panduan ini menjelaskan setiap fungsi invers, menunjukkan kapan menggunakan masing-masing, membahas enam belas contoh yang dikerjakan langkah demi langkah, dan mengulas kesalahan yang menghasilkan jawaban salah.",
          "Pencarian sudut adalah kebalikan dari pencarian sisi. Kalkulator sisi berangkat dari sudut dan menghasilkan panjang; kalkulator ini berangkat dari panjang dan menghasilkan sudut. Keduanya bersama-sama menyelesaikan segitiga siku-siku apa pun secara lengkap: jika dua sisi diketahui, cari sisi ketiga dengan Pythagoras, lalu cari kedua sudut lancip dengan metode di bawah ini. Tidak perlu busur derajat, dan hasilnya memiliki presisi kalkulator penuh."
        ]
      },
      "angle-inverse": {
        "figcaption": "Ketiga fungsi invers: arcsin menggunakan sisi berhadapan per hipotenusa, arccos menggunakan sisi bersebelahan per hipotenusa, arctan menggunakan sisi berhadapan per sisi bersebelahan.",
        "h2": "Penjelasan Fungsi Trigonometri Invers",
        "h3s": [
          "Arcsin: Sisi Berhadapan dan Hipotenusa",
          "Arccos: Sisi Bersebelahan dan Hipotenusa",
          "Arctan: Sisi Berhadapan dan Sisi Bersebelahan"
        ],
        "imgAlt": "Tiga panel yang menunjukkan rumus arcsin, arccos, dan arctan beserta rasio sisinya",
        "paragraphs": [
          "Fungsi trigonometri biasa menerima sudut dan mengembalikan rasio. Sinus dari 30 derajat adalah 0.5. Fungsi trigonometri invers membaliknya: mereka menerima rasio dan mengembalikan sudut. Arcsin dari 0.5 adalah 30 derajat. Kalkulator ini menggunakan tiga fungsi invers, masing-masing dipasangkan dengan pasangan sisi yang diketahui.",
          "Jika Anda mengetahui sisi berhadapan (a) dan hipotenusa (c), gunakan arcsin. Rumusnya adalah [[A = \\sin^{-1}(a/c)]]. Rasio a/c harus berada di antara 0 dan 1, karena sisi berhadapan selalu lebih pendek dari hipotenusa. Untuk segitiga 3-4-5, A = arcsin(3/5) = arcsin(0.6), yaitu sekitar 36.87 derajat.",
          "Jika Anda mengetahui sisi bersebelahan (b) dan hipotenusa (c), gunakan arccos. Rumusnya adalah [[A = \\cos^{-1}(b/c)]]. Seperti arcsin, rasio b/c harus berada di antara 0 dan 1. Untuk segitiga 3-4-5 yang sama, A = arccos(4/5) = arccos(0.8), yang juga sekitar 36.87 derajat. Kedua metode sepakat karena keduanya menggambarkan sudut yang sama.",
          "Jika Anda mengetahui kedua sisi siku-siku (a dan b) tetapi bukan hipotenusa, gunakan arctan. Rumusnya adalah [[A = \\tan^{-1}(a/b)]]. Rasio a/b bisa berupa bilangan positif apa pun. Untuk segitiga 3-4-5, A = arctan(3/4) = arctan(0.75), yaitu sekitar 36.87 derajat. Arctan adalah pilihan paling praktis untuk pengukuran lapangan seperti kemiringan atap, di mana kedua sisi siku-siku (tinggi dan jarak horizontal) adalah dimensi yang paling mudah diukur."
        ]
      },
      "angle-mistakes": {
        "h2": "Kesalahan Umum dalam Mencari Sudut",
        "h3s": [
          "Tertukarnya Sisi Berhadapan dan Bersebelahan",
          "Menggunakan Fungsi Invers yang Salah",
          "Lupa Bahwa Rasio Harus Valid",
          "Mencampur Derajat dan Radian",
          "Memasukkan Sisi dalam Satuan Berbeda",
          "Membulatkan Rasio Terlalu Dini",
          "Mengira Kalkulator Mencari Sisi"
        ],
        "paragraphs": [
          "Kesalahan paling sering. Label bergantung pada sudut acuan Anda. Jika Anda menghitung arctan(4/3) = 53.13° padahal maksud Anda arctan(3/4) = 36.87°, Anda telah menyelesaikan sudut yang salah. Perbaikan: buat sketsa segitiga, tandai sudut acuan Anda, lalu beri label sisi berhadapan (di seberangnya) dan sisi bersebelahan (menyentuhnya).",
          "Menerapkan arcsin pada rasio sisi bersebelahan per hipotenusa menghasilkan komplemen dari sudut yang dimaksud, bukan pesan kesalahan. Arcsin(4/5) = 53.13° adalah sudut B, bukan sudut A. Perbaikan: cocokkan fungsi dengan sisi yang diketahui menggunakan tabel di atas.",
          "Arcsin dan arccos membutuhkan rasio di antara 0 dan 1. Jika Anda memasukkan sisi berhadapan = 5 dan hipotenusa = 3, rasio 1.67 tidak memiliki arcsin. Ini selalu berarti sisi salah diberi label: hipotenusa harus menjadi sisi terpanjang dan penyebut. Perbaikan: tetapkan kembali pengukuran terpanjang sebagai hipotenusa.",
          "Trig invers pada kalkulator dan dalam kode sering default ke radian. Arctan(1) = 45° dalam derajat tetapi 0.785 dalam radian. Kalkulator ini mengeluarkan derajat. Jika perhitungan manual Anda menghasilkan 0.64 untuk segitiga 3-4-5, Anda berada dalam mode radian; kalikan dengan 180/π untuk mendapatkan 36.87°.",
          "Sisi berhadapan dalam inci dan hipotenusa dalam kaki merusak rasio. Ubah ke satuan yang sama terlebih dahulu. Rasio tidak bersatuan, tetapi hanya jika kedua masukan berbagi satuan yang sama.",
          "Arcsin(0.6) = 36.87°, tetapi arcsin(0.60) yang dibulatkan dari 0.596 menghasilkan 36.58°. Kesalahan rasio kecil membesar di dekat 0 dan 1, di mana fungsi invers paling curam. Pertahankan presisi penuh selama perhitungan, bulatkan hanya sudut akhirnya.",
          "Halaman ini mencari sudut dari sisi. Ia tidak mencari sisi dari sudut. Untuk soal sisi dari sudut, gunakan kalkulator sisi khusus. Setiap alat memiliki satu tugas."
        ]
      },
      "angle-precision": {
        "h2": "Presisi dan Satuan Sudut",
        "h3s": [
          "Bagaimana Kesalahan Masukan Memengaruhi Sudut",
          "Derajat vs. Derajat-Menit-Detik",
          "Kapan Derajat Bulat Cukup"
        ],
        "paragraphs": [
          "Hasil sudut hanya sepresisi pengukuran sisi di baliknya. Pembacaan meteran hingga milimeter terdekat mendukung dua tempat desimal pada sudut. Jarak yang diukur dengan langkah di lapangan paling baik mendukung derajat bulat. Kalkulator menghitung dengan presisi floating-point penuh; keputusan pembulatannya ada di tangan Anda.",
          "Kesalahan sisi kecil menyebabkan kesalahan sudut lebih besar ketika rasio berada di dekat 0 atau 1, di mana fungsi invers paling curam. Untuk arctan di dekat 45°, kesalahan rasio 1% menggeser sudut sekitar 0.3°. Di dekat 5° atau 85°, kesalahan rasio 1% yang sama menggeser sudut lebih dari 0.5°. Ukur dengan cermat pada sudut ekstrem, atau ambil beberapa pengukuran dan rata-ratakan.",
          "Surveyor kadang menyatakan sudut sebagai derajat, menit, dan detik (DMS). Untuk mengubah 36.87° ke DMS: derajat utuhnya adalah 36, pecahan 0.87° dikali 60 menghasilkan 52.2 menit, dan 0.2 menit dikali 60 menghasilkan 12 detik, sehingga menjadi 36° 52′ 12″. Kalkulator ini mengeluarkan derajat desimal; kalikan pecahannya dengan 60 untuk mendapatkan menit.",
          "Sudut potong pertukangan, pemeriksaan penempatan tangga, dan perkiraan grade kasar jarang membutuhkan desimal. Kemiringan atap hingga derajat terdekat sudah cukup untuk memesan material. Simpan presisi dua desimal untuk permesinan, penyelarasan optik, dan perhitungan teknik di mana toleransinya ketat."
        ]
      },
      "angle-related": {
        "h2": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait"
      },
      "angle-verify": {
        "h2": "Memverifikasi Jawaban Sudut Anda",
        "listItems": [
          "<strong>Pemeriksaan rentang.</strong> Kedua sudut lancip harus berada tepat di antara 0° dan 90°. Sudut 0°, 90°, atau lebih menandakan masukan tidak valid atau segitiga salah diberi label.",
          "<strong>Pemeriksaan jumlah.</strong> A + B harus sama dengan tepat 90°. Jika kedua sudut Anda berjumlah 89.9° atau 90.1°, pembulatan menjelaskannya. Selisih yang lebih besar menandakan kesalahan.",
          "<strong>Pemeriksaan metode silang.</strong> Hitung ulang sudut yang sama dengan fungsi invers yang berbeda. Jika arcsin(3/5) = 36.87° dan arctan(3/4) = 36.87°, jawabannya kuat. Ketidaksepakatan menunjuk pada kesalahan pelabelan."
        ],
        "paragraphs": [
          "Tiga pemeriksaan mengonfirmasi perhitungan sudut yang benar:",
          "Untuk pekerjaan kritis, verifikasi juga bahwa sisi-sisinya memenuhi teorema Pythagoras. Dalam segitiga 3-4-5, 9 + 16 = 25 mengonfirmasi sisi-sisinya sebelum Anda mempercayai sudut yang diturunkan darinya."
        ]
      }
    },
    "tocHeading": "Di Panduan Ini",
    "tocItems": {
      "angle-anatomy": "Memahami Sudut dalam Segitiga Siku-Siku",
      "angle-applications": "Penerapan dalam Kehidupan Nyata",
      "angle-arccos": "Mencari Sudut dengan Arccos",
      "angle-arcsin": "Mencari Sudut dengan Arcsin",
      "angle-arctan": "Mencari Sudut dengan Arctan",
      "angle-choose": "Kapan Menggunakan Setiap Metode",
      "angle-complement": "Sudut Komplementer",
      "angle-faq": "FAQ",
      "angle-howto": "Cara Menggunakan Kalkulator Sudut",
      "angle-intro": "Apa Itu Kalkulator Sudut Segitiga Siku-Siku?",
      "angle-inverse": "Fungsi Trigonometri Invers",
      "angle-mistakes": "Kesalahan Umum",
      "angle-precision": "Presisi dan Satuan Sudut",
      "angle-related": "Kalkulator Terkait",
      "angle-verify": "Memverifikasi Jawaban Anda"
    }
  },
  "ar": {
    "faqs": [
      {
        "answer": "استخدم دالة مثلثية عكسية على نسبة أضلاع. فمع المقابل والوتر، احسب قوس الجيب (المقابل/الوتر). ومع المجاور والوتر، استخدم قوس جيب التمام (المجاور/الوتر). ومع الضلعين القائمين، استخدم قوس الظل (المقابل/المجاور). والنتيجة هي الزاوية بالدرجات.",
        "question": "كيف تجد زاوية في مثلث قائم الزاوية؟"
      },
      {
        "answer": "الجيب يأخذ زاوية ويُرجع نسبة: فجيب 30° يساوي 0.5. وقوس الجيب يعكس ذلك: يأخذ نسبة ويُرجع الزاوية، فقوس جيب 0.5 يساوي 30°. استخدم الجيب عندما تعرف الزاوية وتحتاج ضلعاً؛ واستخدم قوس الجيب عندما تعرف الأضلاع وتحتاج الزاوية.",
        "question": "ما الفرق بين الجيب وقوس الجيب؟"
      },
      {
        "answer": "استخدم قوس الظل عندما تعرف الضلعين القائمين (المقابل والمجاور) دون الوتر. فيتجاوز قوس الظل الوتر تماماً، مما يوفر خطوة في القياسات الميدانية مثل ميل السقف حيث يُقاس الارتفاع والامتداد الأفقي مباشرة. واستخدم قوس الجيب عندما يكون الوتر أحد أضلاعك المعلومة.",
        "question": "متى أستخدم قوس الظل بدلاً من قوس الجيب؟"
      },
      {
        "answer": "مجموع زوايا المثلث دائماً 180 درجة. وتأخذ الزاوية القائمة 90 منها، فيبقى 90 للزاويتين الأخريين معاً. وهذا يعني أن A + B = 90°، فإيجاد إحدى الزاويتين الحادتين يعطي الأخرى فوراً بالطرح.",
        "question": "لماذا يساوي مجموع الزاويتين الحادتين 90 درجة؟"
      },
      {
        "answer": "لا. فالزاوية 90 درجة هي الزاوية القائمة عند الرأس C، وهي معطاة. وتوجد الحاسبة الزاويتين الحادتين A وB، وكل منهما بين 0° و90° حصراً. فإذا بلغت نتيجتك 0° أو 90°، فالمدخلات تصف مثلثاً منحلاً لا مثلثاً صالحاً.",
        "question": "هل يمكن أن تكون الزاوية 90 درجة؟"
      },
      {
        "answer": "بالنسبة إلى قوس الجيب وقوس جيب التمام، النسبة فوق 1 مستحيلة وتشير إلى خطأ في تسمية الأضلاع. فيجب أن يكون الوتر أطول ضلع والمقام. أعد تعيين أطول قياس كوتر (c) وأعد الحساب. ويمكن أن تتجاوز نسب قوس الظل 1 بشكل مشروع.",
        "question": "ماذا لو كانت نسبة أضلاعي أكبر من 1؟"
      },
      {
        "answer": "اختر زاوية المرجع أولاً. فالضلع المقابل يقع قبالة تلك الزاوية (لا يمس رأسها). والضلع المجاور يمس رأس الزاوية لكنه ليس الوتر. والضلع الفيزيائي نفسه مقابل لإحدى الزاويتين الحادتين ومجاور للأخرى.",
        "question": "كيف أعرف أي ضلع مقابل وأي ضلع مجاور؟"
      },
      {
        "answer": "لأنها تصف الزاوية الهندسية نفسها عبر أزواج أضلاع مختلفة. ففي مثلث 3-4-5، قوس جيب (3/5) وقوس جيب تمام (4/5) وقوس ظل (3/4) كلها تساوي 36.87°. وهذا الاتفاق تحقق قوي: فإذا اختلفت طريقتان، فأحد الأضلاع مسمى خطأ.",
        "question": "لماذا يعطي قوس الجيب وقوس جيب التمام وقوس الظل الإجابة نفسها؟"
      },
      {
        "answer": "تستخدم هذه الحاسبة الدرجات، وهي المعيار في البناء والملاحة وهندسة المدارس. فإذا حسبت يدوياً على حاسبة علمية، تأكد أنها في وضع الدرجات. فالنتيجة بالراديان مثل 0.64 لمثلث 3-4-5 تتحول إلى 36.87° بالضرب في 180/π.",
        "question": "هل تكون الزوايا بالدرجات أم بالراديان؟"
      },
      {
        "answer": "طابق دقة مدخلاتك. فإذا قِيست الأضلاع إلى أقرب سنتيمتر، فمنزلتان عشريتان (36.87°) مناسبتان. وللتقديرات الميدانية التقريبية، تكفي الدرجات الصحيحة. وحافظ على الدقة الكاملة أثناء الحساب وقرّب الإجابة النهائية فقط.",
        "question": "ما مدى دقة إجابة الزاوية؟"
      },
      {
        "answer": "لا. فضلع واحد لا يكفي؛ فعدداً لا نهائياً من المثلثات القائمة يتشارك طول ضلع واحد. تحتاج إلى ضلعين (للمثلثات العكسية) أو ضلع واحد مع زاوية حادة واحدة (لقاعدة المتممة). وتتطلب الحاسبة مدخلين بالضبط.",
        "question": "هل يمكن إيجاد زاوية بمعرفة ضلع واحد فقط؟"
      },
      {
        "answer": "ثلاثة فحوص: يجب أن تقع الزاويتان بين 0° و90°، وأن يساوي مجموعهما 90° بالضبط، وأن إعادة الحساب بدالة عكسية مختلفة تعطي النتيجة نفسها. ففي مثلث 3-4-5، قوس جيب (3/5) = 36.87° وقوس ظل (3/4) = 36.87° يؤكد أحدهما الآخر.",
        "question": "كيف أتحقق من صحة زاويتي؟"
      }
    ],
    "relatedHeading": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
    "relatedIntro": "بعد إيجاد زاويتك، تابع مع هذه الحاسبات ذات الصلة لاستكمال تحليل مثلثك.",
    "relatedItems": [
      "حاسبة أضلاع المثلث القائم الزاوية",
      "حاسبة ضلع المثلث القائم الزاوية من الزاوية",
      "حاسبة النسب المثلثية",
      "حاسبة المثلث القائم الزاوية (شاملة)",
      "حاسبة نظرية فيثاغورس",
      "حاسبة المثلث القائم الزاوية الخاص"
    ],
    "sections": {
      "angle-anatomy": {
        "figcaption": "تشريح الزوايا: C هي الزاوية القائمة 90 درجة، وA وB حادتان ومجموعهما 90 درجة. الأضلاع a وb وc مسماة نسبةً إلى الزاوية A.",
        "h2": "فهم الزوايا في المثلث القائم الزاوية",
        "h3s": [
          "ما هي الزوايا الثلاث؟",
          "كيف تُسمى الأضلاع نسبةً إلى الزاوية؟",
          "لماذا تهم زاوية المرجع؟"
        ],
        "imgAlt": "مثلث قائم الزاوية مع تسمية الزوايا A وB وC، وعرض الأضلاع a وb وc، والزاوية القائمة عند C",
        "paragraphs": [
          "كل مثلث قائم الزاوية له ثلاث زوايا: زاوية قائمة قياسها 90 درجة بالضبط، وزاويتان حادتان قياس كل منهما أقل من 90 درجة. تقع الزاوية القائمة عند الرأس C. وتقع الزاويتان الحادتان عند الرأسين A وB. وبما أن مجموع زوايا المثلث 180 درجة، فإن مجموع الزاويتين الحادتين يجب أن يكون 90 درجة.",
          "تعتمد أسماء الأضلاع على الزاوية التي تقيسها. فبالنسبة إلى الزاوية A: الضلع المقابل لـ A (الذي لا يمس الرأس A) يُسمى الضلع المقابل، ويُرمز له بـ a. والضلع الذي يمس الرأس A وليس الوتر هو الضلع المجاور، ويُرمز له بـ b. أما الوتر، ويرمز له بـ c، فيقع مقابل الزاوية القائمة وهو دائماً أطول الأضلاع. وإذا انتقلت إلى قياس الزاوية B، تتبادل التسميات: يصبح الضلع المقابل لـ B هو الضلع المقابل الجديد.",
          "يمكن للضلع الفيزيائي نفسه أن يكون مقابلاً لزاوية ومجاوراً للأخرى. ففي مثلث 3-4-5، إذا كانت الزاوية A تقع بين الضلع الذي طوله 4 والوتر، فإن الضلع الذي طوله 3 هو المقابل لـ A. أما بالنسبة إلى الزاوية B عند الركن الآخر، فيصبح الضلع الذي طوله 3 مجاوراً والضلع الذي طوله 4 مقابلاً. حدد دائماً زاوية المرجع قبل اختيار الصيغة."
        ]
      },
      "angle-applications": {
        "figcaption": "مسائل الزوايا الواقعية: ميل السقف من الارتفاع والامتداد الأفقي، وزاوية سلامة السلم، وميل منحدر الوصول، وزاوية رؤية ارتفاع الشجرة.",
        "h2": "تطبيقات من الحياة الواقعية",
        "h3s": [
          "البناء والنجارة",
          "السلامة وإمكانية الوصول",
          "المساحة والأنشطة الخارجية"
        ],
        "imgAlt": "أربع لوحات تعرض حسابات ميل السقف وزاوية السلم وميل المنحدر وزاوية ارتفاع الشجرة",
        "paragraphs": [
          "تظهر حسابات الزوايا حيثما تهم الميول والانحدارات وخطوط الرؤية. وتغطي الأمثلة الستة عشر أعلاه البناء والوصول والمساحة والتعليم. وفيما يلي الأنماط الكامنة وراءها.",
          "ميل السقف (المثال 5: 18.43°)، وزوايا العوارض (المثال 10: 22.62°)، وميل الدرج (المثال 12: 34.99°) كلها تستخدم قوس الظل أو قوس جيب التمام على قياسات ميدانية مباشرة. يعمل النجارون بالارتفاع على الامتداد الأفقي لأنها الأبعاد الموجودة في المخططات. وتحول الحاسبة تلك الأبعاد إلى زوايا قطع للمناشير.",
          "لوضع السلم (المثال 6: 66.04°) ومنحدرات كراسي المتحركة (المثال 7: 4.76°) عتبات سلامة معبر عنها بالزوايا. فالسلم عند 66° مائل أكثر من اللازم؛ وإرشادات 75° تقابل نسبة 3.73 إلى 1. والمنحدر عند 4.76° يستوفي الحد الأقصى للوصول 1:12. وتحول الحاسبة فحوص النجاح والرسوب المعبر عنها بالزوايا إلى تحققات سريعة.",
          "زوايا ارتفاع الأشجار (المثال 8: 30.96°)، ودرجات التلال (المثال 15: 13.34°)، وخطوط رؤية المساحة (المثال 13: 30.26°) تستخدم قراءات الميلان والمسافات المقاسة بالشريط. فالزاوية تسد الفجوة بين ما يمكنك قياسه على الأرض وما تحتاج معرفته عن الارتفاع أو الميل."
        ]
      },
      "angle-arccos": {
        "h2": "إيجاد الزوايا باستخدام قوس جيب التمام",
        "h3s": [
          "المثال 10: زاوية العارضة (قوس جيب التمام)",
          "مثال: مثلث 5-12-13",
          "متى يتفوق قوس جيب التمام على قوس الجيب"
        ],
        "paragraphs": [
          "استخدم قوس جيب التمام عندما تعرف الضلع المجاور لزاويتك المستهدفة والوتر. الصيغة هي [[A = \\cos^{-1}(b/c)]]. ومثل قوس الجيب، يجب أن تقع النسبة بين 0 و1. وقوس جيب التمام طبيعي عندما يكون الضلع المجاور أسهل قياساً، مثل الامتداد الأفقي للسقف أو المسافة الأساسية في المساحة.",
          "لعارضة سقف امتداد أفقي 6 أمتار وطول عارضة (وتر) 6.5 أمتار. أوجد زاوية الميل عند الطنف.",
          "A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°. هذا ميل سقف معتدل. والمتممة 67.38° هي الزاوية بين العارضة والجدار العمودي.",
          "بمعرفة المجاور b = 12 والوتر c = 13، أوجد الزاوية A.",
          "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. والمتممة B = 67.38°. لاحظ أن arccos(5/13) يعطي 67.38° مباشرة، معتبراً الضلع الذي طوله 5 مجاوراً للزاوية B.",
          "اختر قوس جيب التمام عندما يكون قياس الضلع المجاور أكثر موثوقية من المقابل. ففي هياكل الأسقف، يُقاس الامتداد الأفقي مباشرة على عارضة السقف، بينما يجب قياس الارتفاع العمودي بميزان الشاقول. والمدخل الأكثر دقة ينتج زاوية أكثر دقة. والدالتان متكافئتان رياضياً للمثلث نفسه؛ فالاختيار مسألة جودة القياس."
        ]
      },
      "angle-arcsin": {
        "h2": "إيجاد الزوايا باستخدام قوس الجيب",
        "h3s": [
          "المثال 1: مثلث 3-4-5",
          "المثال 2: المثلث نفسه، فحص بقوس جيب التمام",
          "المثال 3: المثلث نفسه، فحص بقوس الظل",
          "المثال 4: إيجاد المتممة",
          "المثال 11: منحدر شديد (قوس الجيب)"
        ],
        "paragraphs": [
          "استخدم قوس الجيب عندما تعرف الضلع المقابل لزاويتك المستهدفة والوتر. الصيغة هي [[A = \\sin^{-1}(a/c)]]. يجب أن تكون النسبة بين 0 و1. فإذا تجاوزت نسبتك 1، فقد أخطأت في تسمية الأضلاع: يجب أن يكون الوتر هو المقام.",
          "بمعرفة الضلع المقابل a = 3 والوتر c = 5، أوجد الزاوية A.",
          "الخطوة 1: اكتب الصيغة. A = arcsin(a/c).<br />\nالخطوة 2: عوّض. A = arcsin(3/5).<br />\nالخطوة 3: احسب النسبة. 3/5 = 0.6.<br />\nالخطوة 4: طبق قوس الجيب. A = arcsin(0.6) ≈ 36.87°.",
          "الزاوية حوالي 36.87 درجة. والمتممة B = 90° − 36.87° = 53.13°.",
          "بمعرفة الضلع المجاور b = 4 والوتر c = 5، أوجد الزاوية A باستخدام قوس جيب التمام.",
          "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. يطابق هذا المثال 1 تماماً، مؤكداً أن الطريقتين تصفان الزاوية نفسها. فعندما تتفق طريقتان، تكون تسميات أضلاعك صحيحة.",
          "بمعرفة المقابل a = 3 والمجاور b = 4، أوجد الزاوية A باستخدام قوس الظل.",
          "A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°. تتقارب الدوال العكسية الثلاث على الإجابة نفسها للمثلث نفسه. وهذا الاتفاق الثلاثي هو أقوى تحقق متاح.",
          "بمعرفة الزاوية A = 36.87° من المثال 1، أوجد الزاوية B.",
          "B = 90° − A = 90° − 36.87° = 53.13°. لا حاجة إلى حسابات مثلثية. ويمكنك التحقق بحساب arcsin(4/5) = 53.13°، معتبراً الضلع الذي طوله 4 مقابلاً للزاوية B.",
          "يرتفع امتداد كبل 7 أمتار على مسافة وتر 25 متراً. أوجد زاوية الميل.",
          "A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°. هذا منحدر لطيف، نموذجي للمنحدرات الميسرة أو منحدرات الناقلات. فالزاوية الضحلة تعني أن معظم طول الكبل يذهب إلى المسافة الأفقية لا إلى الارتفاع."
        ]
      },
      "angle-arctan": {
        "h2": "إيجاد الزوايا باستخدام قوس الظل",
        "h3s": [
          "المثال 5: ميل السقف (قوس الظل)",
          "المثال 6: وضع السلم (قوس الظل)",
          "المثال 7: منحدر كراسي المتحركة (قوس الظل)",
          "المثال 8: زاوية ارتفاع الشجرة (قوس الظل)",
          "المثال 9: منحدر التحميل (قوس الظل)",
          "المثال 14: دعامة داعمة (قوس الظل)",
          "المثال 15: ميل التلة (قوس الجيب)",
          "المثال 12: ميل الدرج (قوس الظل)",
          "المثال 13: درجة المساحة (قوس الظل)",
          "المثال 16: اختصار المتممة"
        ],
        "paragraphs": [
          "استخدم قوس الظل عندما تعرف الضلعين القائمين دون الوتر. الصيغة هي [[A = \\tan^{-1}(a/b)]]. يمكن أن تكون النسبة a/b أي قيمة موجبة. وقوس الظل هو عماد العمل الميداني: فالارتفاع على الامتداد الأفقي هو أكثر أزواج القياسات شيوعاً في البناء وتنسيق الحدائق وتصميم الطرق.",
          "يرتفع سقف 4 أقدام على امتداد أفقي 12 قدماً. أوجد زاوية الميل.",
          "الخطوة 1: حدد المقابل (الارتفاع) = 4، والمجاور (الامتداد) = 12.<br />\nالخطوة 2: A = arctan(4/12) = arctan(0.3333).<br />\nالخطوة 3: A ≈ 18.43°.",
          "ميل 18.43 درجة ميل سقف سكني شائع، شديد بما يكفي لتصريف الماء لكنه صالح للمشي بحذر. وبمصطلحات التسقيف، هذا ميل 4-in-12.",
          "يصل سلم إلى ارتفاع 4.5 أمتار على جدار وقاعدته على بعد 2 متر من الجدار. أوجد الزاوية بين السلم والأرض.",
          "A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°. توصي إرشادات السلامة بزوايا سلم قرب 75 درجة (نسبة 4 إلى 1). فعند 66 درجة، يكون هذا السلم مائلاً أكثر من اللازم ويجب تقريبه من الجدار.",
          "يرتفع منحدر 0.75 متر على امتداد 9 أمتار. أوجد زاوية الميل.",
          "A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°. تشترط معايير الوصول عادة ميلاً لا يزيد على حوالي 4.8 درجات (نسبة 1:12). وهذا المنحدر عند 4.76° يستوفي الإرشادات بالكاد.",
          "يقف مراقب على بعد 20 متراً من شجرة. ويقرأ الميلان قمة الشجرة عند زاوية تقابل ضلعاً مقابلاً 12 متراً. أوجد زاوية الرؤية.",
          "A = arctan(12/20) = arctan(0.6) ≈ 30.96°. مع ارتفاع عين المراقب، تتيح هذه الزاوية لعلماء الغابات تقدير ارتفاع الشجرة دون تسلقها.",
          "يرتفع منحدر تحميل 2.5 متر على امتداد 10 أمتار. أوجد زاوية الميل.",
          "A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°. والقيمة المتحقق منها هي 14.48°، وتعكس قيم مدخلات دقيقة. وعلى أي حال، هذا ميل معتدل مناسب لعربات اليد لكنه شديد لرافعات البالتات الثقيلة.",
          "تمتد دعامة قطرية 1.2 متر رأسياً و3.5 أمتار أفقياً. أوجد زاوية الدعامة.",
          "A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°. تعني هذه الزاوية الضحلة أن الدعامة تعمل أساساً في مقاومة القص الأفقي لا في نقل الحمل العمودي.",
          "يتسلق ممر جبلي 3 أمتار على مسافة منحدر 13 متراً. أوجد زاوية الميل.",
          "A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°. هذه درجة تسلق شديدة الاعتدال. يستخدم مصممو المسارات هذه الزوايا لتخطيط المنعطفات المتعرجة عندما يتجاوز المسار المباشر زوايا التسلق المريحة.",
          "يرتفع درج 2.8 متر على امتداد أفقي 4 أمتار. أوجد زاوية الميل.",
          "A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°. هذا ميل درج مريح. وتحدد قوانين البناء عادة زوايا الدرج بحد أقصى حوالي 37 درجة للاستخدام السكني، فيمتثل هذا التصميم.",
          "يقيس مساح تغير ارتفاع 7 أمتار على مسافة أفقية 12 متراً. أوجد زاوية الدرجة.",
          "A = arctan(7/12) = arctan(0.5833) ≈ 30.26°. هذه الدرجة الشديدة تتطلب منعطفات متعرجة للطريق أو الممر. ويستخدم المهندسون المدنيون هذه الزوايا لتحديد متطلبات الحفر والردم.",
          "بمعرفة الزاوية A = 32°، أوجد الزاوية B دون حسابات مثلثية.",
          "B = 90° − 32° = 58°. وضع المتممة هذا هو أسرع حساب في هذه الصفحة عندما تكون إحدى الزاويتين الحادتين معلومة من منقلة أو ميزان رقمي أو حساب سابق."
        ]
      },
      "angle-choose": {
        "h2": "متى تستخدم كل طريقة",
        "h3s": [
          "قوس الجيب أفضل عندما",
          "قوس جيب التمام أفضل عندما",
          "قوس الظل أفضل عندما",
          "المتممة أفضل عندما"
        ],
        "paragraphs": [
          "تعطي الدوال العكسية الثلاث الزاوية نفسها للمثلث نفسه. ويعتمد الاختيار على الأضلاع التي تعرفها وعلى القياسات الأكثر موثوقية.",
          "تعرف الضلع المقابل لزاويتك المستهدفة والوتر. ويحدث هذا في مسائل الارتفاع: فالارتفاع العمودي يقابل زاوية مستوى الأرض، ومسافة المنحدر هي الوتر. ومسائل ارتفاع الأشجار وارتفاع المباني وترهل الكابلات تفضل قوس الجيب.",
          "تعرف الضلع المجاور لزاويتك المستهدفة والوتر. تفضل هياكل الأسقف قوس جيب التمام لأن الامتداد الأفقي (المجاور) يُقاس مباشرة على العارضة. كما تفضل خطوط الأساس المساحية قوس جيب التمام عندما تكون المسافة الأرضية هي القياس الموثوق.",
          "تعرف الضلعين القائمين دون الوتر. وهذه أكثر حالات الميدان شيوعاً: فالارتفاع والامتداد الأفقي يُقاسان مباشرة، بينما يتطلب الوتر حساباً منفصلاً. ويتجاوز قوس الظل الوتر تماماً. فمتى أمكنك قياس الضلعين القائمين، كان قوس الظل أسرع طريق.",
          "تعرف إحدى الزاويتين الحادتين مسبقاً. لا حاجة إلى قياسات أضلاع. استخدمه بعد أي حساب عكسي للحصول على الزاوية الثانية، أو عندما تعطيك منقلة أو مقياس ميل رقمي إحدى الزاويتين مباشرة."
        ],
        "table": {
          "headers": [
            "الأضلاع المعلومة",
            "الطريقة",
            "الصيغة"
          ],
          "rows": [
            [
              "المقابل (a) والوتر (c)",
              "قوس الجيب",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "المجاور (b) والوتر (c)",
              "قوس جيب التمام",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "المقابل (a) والمجاور (b)",
              "قوس الظل",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "زاوية حادة واحدة",
              "المتممة",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-complement": {
        "h2": "الزوايا المتممة: A + B = 90 درجة",
        "paragraphs": [
          "الزاويتان الحادتان في المثلث القائم الزاوية متممتان، أي أن مجموعهما 90 درجة بالضبط. وهذا يعطي العلاقة [[A + B = 90^\\circ]]. وبمجرد إيجاد إحدى الزاويتين الحادتين، تُستخرج الأخرى فوراً بالطرح: B = 90 درجة ناقص A.",
          "هذه ليست طريقة قياس منفصلة، بل فحص اتساق واختصار. فإذا أعطى قوس الجيب A = 36.87 درجة، فإن B = 53.13 درجة دون أي حسابات مثلثية إضافية. وتستخدم الحاسبة هذه العلاقة في أوضاع مجموع الزوايا.",
          "تفسر العلاقة التكميلية أيضاً سبب تساوي sin(A) مع cos(B). ففي مثلث 3-4-5، sin(36.87°) يساوي 0.6 وcos(53.13°) يساوي 0.6 أيضاً. فجيب إحدى الزاويتين الحادتين يساوي دائماً جيب تمام الأخرى، لأن الضلع المقابل لإحدى الزاويتين مجاور للأخرى."
        ]
      },
      "angle-conclusion": {
        "h2": "أوجد أي زاوية في مثلث قائم الزاوية بثقة",
        "paragraphs": [
          "ابدأ بتسمية مثلثك: الوتر أولاً، ثم المقابل والمجاور نسبةً إلى زاويتك المستهدفة. واختر الدالة العكسية المطابقة لأضلاعك المعلومة: قوس الجيب للمقابل والوتر، وقوس جيب التمام للمجاور والوتر، وقوس الظل للضلعين القائمين. أدخل القياسات، واقرأ الزاوية بالدرجات، ثم استخرج الزاوية الثانية من 90 ناقص الأولى. وتحقق بفحص النطاق وفحص المجموع وحساب الطريقة المتقاطعة. وبهذه الخطوات، تصبح أي مسألة زاوية في مثلث قائم الزاوية روتيناً موثوقاً. عُد إلى الحاسبة أعلى هذه الصفحة لتشغيل أرقامك."
        ]
      },
      "angle-howto": {
        "figcaption": "سير العمل من أربع خطوات: سمِّ الأضلاع نسبةً إلى زاوية المرجع، واختر النسبة المطابقة لأضلاعك المعلومة، وطبق الدالة العكسية، ثم تحقق بالمتممة.",
        "h2": "كيفية استخدام حاسبة زوايا المثلث القائم الزاوية",
        "imgAlt": "عملية من أربع خطوات لإيجاد الزاوية A: تسمية الأضلاع، واختيار النسبة، وتطبيق المثلثات العكسية، والتحقق",
        "listItems": [
          "<strong>حدد الزاوية القائمة.</strong> تأكد من أن المثلث له ركن 90 درجة. فالحاسبة تعمل مع المثلثات القائمة فقط.",
          "<strong>سمِّ الوتر.</strong> جد أطول ضلع، المقابل للزاوية القائمة، وسمِّه c.",
          "<strong>اختر زاوية المرجع.</strong> قرر ما إذا كنت تحل للزاوية A أم الزاوية B، فهذا يحدد أي الأضلاع مقابل وأيها مجاور.",
          "<strong>اختر الوضع المطابق.</strong> إذا كنت تعرف المقابل والوتر، استخدم قوس الجيب. وإذا كنت تعرف المجاور والوتر، استخدم قوس جيب التمام. وإذا كنت تعرف الضلعين القائمين، استخدم قوس الظل. وإذا كنت تعرف إحدى الزاويتين الحادتين، استخدم وضع المتممة.",
          "<strong>أدخل طولي الضلعين.</strong> استخدم الوحدة نفسها لكليهما (كلاهما بالمتر أو كلاهما بالقدم، وهكذا). فالوحدات تتلاشى في النسبة، لكن خلط الوحدات يفسدها.",
          "<strong>اقرأ النتيجة بالدرجات.</strong> تُخرج الحاسبة الزوايا بالدرجات، وهي الوحدة المعيارية في البناء والملاحة وهندسة المدارس.",
          "<strong>أوجد الزاوية الثانية.</strong> اطرح من 90 درجة، أو شغّل الحاسبة مرة أخرى مع الزاوية الأخرى كمرجع.",
          "<strong>تحقق.</strong> تأكد من أن الزاويتين بين 0 و90 درجة ومجموعهما 90. وقارن بطريقة نسبة ثانية إذا كانت الدقة مهمة."
        ],
        "paragraphs": [
          "اتبع هذه الخطوات لإيجاد الزاوية المجهولة:"
        ]
      },
      "angle-intro": {
        "h2": "ما هي حاسبة زوايا المثلث القائم الزاوية؟",
        "paragraphs": [
          "تحسب حاسبة زوايا المثلث القائم الزاوية الزوايا الحادة المجهولة في مثلث قائم الزاوية عندما تعرف أطوال أضلاعه. فبينما تُستخدم نظرية فيثاغورس لإيجاد الأضلاع المفقودة، تُستخدم الدوال المثلثية العكسية لإيجاد الزوايا المفقودة. تأخذ الحاسبة ضلعين معلومين، وتحسب نسبتهما، ثم تطبق قوس الجيب أو قوس جيب التمام أو قوس الظل لاستعادة الزاوية بالدرجات.",
          "تشمل الاستخدامات الشائعة تحديد ميل السقف من قياسات الارتفاع والامتداد الأفقي، وإيجاد زوايا وضع السلم لتسلق آمن، وحساب ميل المنحدرات للامتثال لمعايير الوصول، وحل واجبات الهندسة. تحتاج الحاسبة إلى طولي ضلعين بالضبط لتعمل. وهي تُرجع الزاوية A (بين الضلع المجاور والوتر) والزاوية B (المتممة، بين الضلع المقابل والوتر).",
          "على سبيل المثال، المثلث القائم الذي ضلعه المقابل 3 ووتره 5 تكون فيه الزاوية A = arcsin(3/5)، أي حوالي 36.87 درجة. والزاوية الحادة الأخرى هي 90 ناقص 36.87، أي 53.13 درجة. يشرح هذا الدليل كل دالة عكسية، ويبين متى تُستخدم كل واحدة، ويتناول ستة عشر مثالاً محلولاً خطوة بخطوة، ويغطي الأخطاء التي تؤدي إلى إجابات خاطئة.",
          "إيجاد الزوايا هو عكس إيجاد الأضلاع. فحاسبة الأضلاع تبدأ من الزوايا وتنتج الأطوال؛ بينما تبدأ هذه الحاسبة من الأطوال وتنتج الزوايا. معاً تحلان أي مثلث قائم الزاوية حلاً كاملاً: بمعرفة أي ضلعين، أوجد الضلع الثالث بفيثاغورس، ثم أوجد الزاويتين الحادتين بالطرق أدناه. لا حاجة إلى منقلة، والنتائج بدقة الحاسبة الكاملة."
        ]
      },
      "angle-inverse": {
        "figcaption": "الدوال العكسية الثلاث: قوس الجيب يستخدم المقابل على الوتر، وقوس جيب التمام يستخدم المجاور على الوتر، وقوس الظل يستخدم المقابل على المجاور.",
        "h2": "شرح الدوال المثلثية العكسية",
        "h3s": [
          "قوس الجيب: المقابل والوتر",
          "قوس جيب التمام: المجاور والوتر",
          "قوس الظل: المقابل والمجاور"
        ],
        "imgAlt": "ثلاث لوحات تعرض صيغ قوس الجيب وقوس جيب التمام وقوس الظل مع نسب أضلاعها",
        "paragraphs": [
          "تأخذ الدوال المثلثية العادية زاوية وتُرجع نسبة. فجيب 30 درجة يساوي 0.5. أما الدوال المثلثية العكسية فتعكس ذلك: تأخذ نسبة وتُرجع الزاوية. فقوس جيب 0.5 يساوي 30 درجة. تستخدم الحاسبة ثلاث دوال عكسية، كل واحدة مقترنة بزوج محدد من الأضلاع المعلومة.",
          "عندما تعرف الضلع المقابل (a) والوتر (c)، استخدم قوس الجيب. الصيغة هي [[A = \\sin^{-1}(a/c)]]. يجب أن تقع النسبة a/c بين 0 و1، لأن الضلع المقابل أقصر من الوتر دائماً. ففي مثلث 3-4-5، A = arcsin(3/5) = arcsin(0.6)، أي حوالي 36.87 درجة.",
          "عندما تعرف الضلع المجاور (b) والوتر (c)، استخدم قوس جيب التمام. الصيغة هي [[A = \\cos^{-1}(b/c)]]. ومثل قوس الجيب، يجب أن تقع النسبة b/c بين 0 و1. ففي مثلث 3-4-5 نفسه، A = arccos(4/5) = arccos(0.8)، أي حوالي 36.87 درجة أيضاً. تتفق الطريقتان لأنهما تصفان الزاوية نفسها.",
          "عندما تعرف الضلعين القائمين (a وb) دون الوتر، استخدم قوس الظل. الصيغة هي [[A = \\tan^{-1}(a/b)]]. يمكن أن تكون النسبة a/b أي عدد موجب. ففي مثلث 3-4-5، A = arctan(3/4) = arctan(0.75)، أي حوالي 36.87 درجة. قوس الظل هو الخيار الأكثر عملية للقياسات الميدانية مثل ميل السقف، حيث يكون الضلعان القائمان (الارتفاع والامتداد الأفقي) أسهل الأبعاد قياساً."
        ]
      },
      "angle-mistakes": {
        "h2": "الأخطاء الشائعة عند إيجاد الزوايا",
        "h3s": [
          "تبديل المقابل والمجاور",
          "استخدام الدالة العكسية الخاطئة",
          "نسيان أن النسبة يجب أن تكون صالحة",
          "خلط الدرجات والراديان",
          "إدخال الأضلاع بوحدات مختلفة",
          "تقريب النسبة مبكراً",
          "الظن بأن الحاسبة توجد الأضلاع"
        ],
        "paragraphs": [
          "الخطأ الأكثر شيوعاً. فالتسميات تعتمد على زاوية المرجع. فإذا حسبت arctan(4/3) = 53.13° بينما قصدت arctan(3/4) = 36.87°، فقد حللت للزاوية الخاطئة. الحل: ارسم المثلث، وعلّم زاوية المرجع، ثم سمِّ المقابل (الذي يقابلها) والمجاور (الذي يمسها).",
          "تطبيق قوس الجيب على نسبة المجاور إلى الوتر يعطي متممة الزاوية المقصودة، لا رسالة خطأ. فـ Arcsin(4/5) = 53.13° هي الزاوية B لا الزاوية A. الحل: طابق الدالة مع أضلاعك المعلومة باستخدام الجدول أعلاه.",
          "يتطلب قوس الجيب وقوس جيب التمام نسباً بين 0 و1. فإذا أدخلت المقابل = 5 والوتر = 3، فالنسبة 1.67 ليس لها قوس جيب. وهذا يعني دائماً خطأ في تسمية الأضلاع: يجب أن يكون الوتر أطول ضلع والمقام. الحل: أعد تعيين أطول قياس كوتر.",
          "المثلثات العكسية في الحاسبات والبرمجة غالباً ما تكون افتراضياً بالراديان. فـ Arctan(1) = 45° بالدرجات لكنه 0.785 بالراديان. وتُخرج هذه الحاسبة الدرجات. فإذا أعطاك حسابك اليدوي 0.64 لمثلث 3-4-5، فأنت في وضع الراديان؛ اضرب في 180/π للحصول على 36.87°.",
          "المقابل بالبوصة والوتر بالقدم يفسد النسبة. حوّل إلى وحدة مشتركة أولاً. فالنسبة بلا وحدة، لكن فقط عندما يتشارك المدخلان الوحدة نفسها.",
          "Arcsin(0.6) = 36.87°، لكن arcsin(0.60) المقربة من 0.596 تعطي 36.58°. فأخطاء النسبة الصغيرة تتضخم قرب 0 و1، حيث تكون الدوال العكسية أشد انحداراً. حافظ على الدقة الكاملة خلال الحساب، وقرّب الزاوية النهائية فقط.",
          "هذه الصفحة توجد الزوايا من الأضلاع، ولا توجد الأضلاع من الزوايا. فلمسائل الضلع من الزاوية، استخدم حاسبة الأضلاع المخصصة. فلكل أداة مهمة واحدة."
        ]
      },
      "angle-precision": {
        "h2": "دقة الزوايا ووحداتها",
        "h3s": [
          "كيف يؤثر خطأ المدخلات في الزاوية",
          "الدرجات مقابل الدرجات والدقائق والثواني",
          "متى تكفي الدرجات الصحيحة"
        ],
        "paragraphs": [
          "نتائج الزوايا دقيقة بقدر دقة قياسات الأضلاع خلفها. فقراءة شريط القياس إلى أقرب مليمتر تدعم منزلتين عشريتين في الزاوية. أما المسافة المقاسة بالخطوات في الميدان فتدعم الدرجات الصحيحة في أحسن الأحوال. وتحسب الحاسبة بدقة النقطة العائمة الكاملة؛ وقرار التقريب لك.",
          "تسبب أخطاء الأضلاع الصغيرة أخطاء زوايا أكبر عندما تقع النسبة قرب 0 أو 1، حيث تكون الدوال العكسية أشد انحداراً. فقرب 45° لقوس الظل، يزيح خطأ النسبة 1% الزاوية حوالي 0.3°. وقرب 5° أو 85°، يزيح خطأ النسبة 1% نفسه الزاوية أكثر من 0.5°. قِس بعناية عند الزوايا القصوى، أو خذ قراءات متعددة ووسّطها.",
          "يعبّر المساحون أحياناً عن الزوايا بالدرجات والدقائق والثواني (DMS). فلتحويل 36.87° إلى DMS: الدرجات الصحيحة 36، والكسر 0.87° مضروباً في 60 يعطي 52.2 دقيقة، و0.2 دقيقة مضروباً في 60 يعطي 12 ثانية، فينتج 36° 52′ 12″. وتُخرج هذه الحاسبة الدرجات العشرية؛ اضرب الكسر في 60 للدقائق.",
          "زوايا قطع النجارة وفحوص وضع السلم وتقديرات الدرجة التقريبية نادراً ما تحتاج الكسور العشرية. فميل السقف إلى أقرب درجة كافٍ لطلب المواد. واحتفظ بدقة المنزلتين العشريتين للتشغيل الآلي والمحاذاة البصرية والحسابات الهندسية حيث تكون التفاوتات ضيقة."
        ]
      },
      "angle-related": {
        "h2": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة"
      },
      "angle-verify": {
        "h2": "التحقق من إجابة الزاوية",
        "listItems": [
          "<strong>فحص النطاق.</strong> يجب أن تقع الزاويتان الحادتان بين 0° و90° حصراً. فزاوية 0° أو 90° أو أكثر تشير إلى مدخلات غير صالحة أو مثلث مسمى خطأ.",
          "<strong>فحص المجموع.</strong> يجب أن يساوي A + B بالضبط 90°. فإذا كان مجموع زاويتيك 89.9° أو 90.1°، فالتقريب يفسر ذلك. والفجوات الأكبر تشير إلى خطأ.",
          "<strong>فحص الطريقة المتقاطعة.</strong> أعد حساب الزاوية نفسها بدالة عكسية مختلفة. فإذا كان arcsin(3/5) = 36.87° وarctan(3/4) = 36.87°، فالإجابة متينة. والاختلاف يشير إلى خطأ في التسمية."
        ],
        "paragraphs": [
          "ثلاثة فحوص تؤكد صحة حساب الزاوية:",
          "للأعمال الحرجة، تحقق أيضاً من أن الأضلاع تحقق نظرية فيثاغورس. ففي مثلث 3-4-5، 9 + 16 = 25 يؤكد الأضلاع قبل أن تثق بالزوايا المشتقة منها."
        ]
      }
    },
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "angle-anatomy": "فهم الزوايا في المثلث القائم الزاوية",
      "angle-applications": "تطبيقات من الحياة الواقعية",
      "angle-arccos": "إيجاد الزوايا باستخدام قوس جيب التمام",
      "angle-arcsin": "إيجاد الزوايا باستخدام قوس الجيب",
      "angle-arctan": "إيجاد الزوايا باستخدام قوس الظل",
      "angle-choose": "متى تستخدم كل طريقة",
      "angle-complement": "الزوايا المتممة",
      "angle-faq": "الأسئلة الشائعة",
      "angle-howto": "كيفية استخدام حاسبة الزوايا",
      "angle-intro": "ما هي حاسبة زوايا المثلث القائم الزاوية؟",
      "angle-inverse": "الدوال المثلثية العكسية",
      "angle-mistakes": "الأخطاء الشائعة",
      "angle-precision": "دقة الزوايا ووحداتها",
      "angle-related": "حاسبات ذات صلة",
      "angle-verify": "التحقق من إجابتك"
    }
  },
  "bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
      "angle-intro": "Какво е калкулатор за ъгли на правоъгълен триъгълник?",
      "angle-anatomy": "Разбиране на ъглите в правоъгълен триъгълник",
      "angle-inverse": "Обратни тригонометрични функции",
      "angle-complement": "Комплементарни ъгли",
      "angle-howto": "Как да използвате калкулатора за ъгли",
      "angle-arcsin": "Намиране на ъгли с арксинус",
      "angle-arccos": "Намиране на ъгли с арккосинус",
      "angle-arctan": "Намиране на ъгли с арктангенс",
      "angle-choose": "Кога да използвате всеки метод",
      "angle-applications": "Приложения в реалния живот",
      "angle-mistakes": "Чести грешки",
      "angle-precision": "Точност на ъгъла и мерни единици",
      "angle-verify": "Проверка на отговора",
      "angle-related": "Свързани калкулатори",
      "angle-faq": "ЧЗВ"
    },
    "sections": {
      "angle-intro": {
        "h2": "Какво е калкулатор за ъгли на правоъгълен триъгълник?",
        "paragraphs": [
          "Калкулаторът за ъгли на правоъгълен триъгълник намира неизвестните остри ъгли в правоъгълен триъгълник, когато знаете дължините на страните. Докато Питагоровата теорема намира липсващи страни, обратните тригонометрични функции намират липсващи ъгли. Калкулаторът приема две известни страни, изчислява тяхното отношение, след което прилага арксинус, арккосинус или арктангенс, за да възстанови ъгъла в градуси.",
          "Чести приложения включват определяне на наклона на покрив от измервания на височина и хоризонтално разстояние, намиране на ъгли за поставяне на стълба за безопасно изкачване, изчисляване на наклони на рампи за съответствие с изискванията за достъпност и решаване на домашни задачи по геометрия. Калкулаторът се нуждае от точно две дължини на страни, за да работи. Той връща ъгъл A (между прилежащия катет и хипотенузата) и ъгъл B (комплементарния, между срещулежащия катет и хипотенузата).",
          "Например, правоъгълен триъгълник със срещулежаща страна 3 и хипотенуза 5 има ъгъл A = arcsin(3/5), което е приблизително 36.87 градуса. Другият остър ъгъл е 90 минус 36.87, или 53.13 градуса. Това ръководство обяснява всяка обратна функция, показва кога да използвате коя, преминава през шестнадесет решени примера и разглежда грешките, които водят до грешни отговори.",
          "Намирането на ъгли е обратното на намирането на страни. Калкулаторът за страни започва с ъгли и произвежда дължини; този калкулатор започва с дължини и произвежда ъгли. Заедно те решават напълно всеки правоъгълен триъгълник: при дадени кои да е две страни, намерете третата страна с Питагор, след което намерете и двата остри ъгъла с методите по-долу. Не е нужен транспортир, а резултатите носят пълна точност на калкулатора."
        ]
      },
      "angle-anatomy": {
        "h2": "Разбиране на ъглите в правоъгълен триъгълник",
        "h3s": [
          "Какви са трите ъгъла?",
          "Как се назовават страните спрямо даден ъгъл?",
          "Защо референтният ъгъл е важен?"
        ],
        "paragraphs": [
          "Всеки правоъгълен триъгълник има три ъгъла: един прав ъгъл с мярка точно 90 градуса и два остри ъгъла, всеки с мярка под 90 градуса. Правият ъгъл се намира във връх C. Острите ъгли се намират във върхове A и B. Тъй като ъглите на триъгълника се сумират до 180 градуса, двата остри ъгъла трябва да дават общо 90 градуса.",
          "Имената на страните зависят от това кой ъгъл измервате. За ъгъл A: страната срещу A (тази, която не докосва връх A) се нарича срещулежаща страна, означена с a. Страната, докосваща връх A, която не е хипотенузата, е прилежащата страна, означена с b. Хипотенузата, означена с c, се намира срещу правия ъгъл и винаги е най-дългата страна. Ако преминете към измерване на ъгъл B, означенията се разменят: страната срещу B става новата срещулежаща страна.",
          "Една и съща физическа страна може да е срещулежаща за единия ъгъл и прилежаща за другия. В триъгълник 3-4-5, ако ъгъл A се намира между страната с дължина 4 и хипотенузата, тогава страната с дължина 3 е срещулежаща на A. За ъгъл B в другия ъгъл, страната с дължина 3 става прилежаща, а страната с дължина 4 става срещулежаща. Винаги определяйте референтния си ъгъл, преди да изберете формула."
        ],
        "imgAlt": "Правоъгълен триъгълник с означени ъгли A, B, C, показани страни a, b, c, прав ъгъл при C",
        "figcaption": "Анатомия на ъглите: C е правият ъгъл от 90 градуса, A и B са остри и се сумират до 90 градуса. Страните a, b, c са означени спрямо ъгъл A."
      },
      "angle-inverse": {
        "h2": "Обяснение на обратните тригонометрични функции",
        "h3s": [
          "Арксинус: срещулежаща и хипотенуза",
          "Арккосинус: прилежаща и хипотенуза",
          "Арктангенс: срещулежаща и прилежаща"
        ],
        "paragraphs": [
          "Обикновените тригонометрични функции приемат ъгъл и връщат отношение. Синусът от 30 градуса е 0.5. Обратните тригонометрични функции обръщат това: те приемат отношение и връщат ъгъла. Арксинусът от 0.5 е 30 градуса. Калкулаторът използва три обратни функции, всяка съчетана с конкретна двойка известни страни.",
          "Когато знаете срещулежащата страна (a) и хипотенузата (c), използвайте арксинус. Формулата е [[A = \\sin^{-1}(a/c)]]. Отношението a/c трябва да е между 0 и 1, тъй като срещулежащата страна винаги е по-къса от хипотенузата. За триъгълник 3-4-5, A = arcsin(3/5) = arcsin(0.6), което е приблизително 36.87 градуса.",
          "Когато знаете прилежащата страна (b) и хипотенузата (c), използвайте арккосинус. Формулата е [[A = \\cos^{-1}(b/c)]]. Подобно на арксинуса, отношението b/c трябва да е между 0 и 1. За същия триъгълник 3-4-5, A = arccos(4/5) = arccos(0.8), което също е приблизително 36.87 градуса. И двата метода съвпадат, защото описват един и същ ъгъл.",
          "Когато знаете и двата катета (a и b), но не и хипотенузата, използвайте арктангенс. Формулата е [[A = \\tan^{-1}(a/b)]]. Отношението a/b може да е всяко положително число. За триъгълника 3-4-5, A = arctan(3/4) = arctan(0.75), което е приблизително 36.87 градуса. Арктангенсът е най-практичният избор за полеви измервания като наклон на покрив, където двата катета (височина и хоризонтално разстояние) са най-лесните размери за измерване."
        ],
        "imgAlt": "Три панела, показващи формулите на арксинус, арккосинус и арктангенс с техните отношения на страни",
        "figcaption": "Трите обратни функции: арксинусът използва срещулежаща върху хипотенуза, арккосинусът използва прилежаща върху хипотенуза, арктангенсът използва срещулежаща върху прилежаща."
      },
      "angle-complement": {
        "h2": "Комплементарни ъгли: A + B = 90 градуса",
        "paragraphs": [
          "Двата остри ъгъла в правоъгълен триъгълник са комплементарни, което означава, че се сумират до точно 90 градуса. Това дава зависимостта [[A + B = 90^\\circ]]. След като намерите единия остър ъгъл, другият следва незабавно чрез изваждане: B = 90 градуса минус A.",
          "Това не е отделен метод за измерване. Това е проверка за съгласуваност и пряк път. Ако арксинусът даде A = 36.87 градуса, тогава B = 53.13 градуса без никаква допълнителна тригонометрия. Калкулаторът използва тази зависимост в режимите си за сума на ъглите.",
          "Комплементарната зависимост обяснява също защо sin(A) е равен на cos(B). В триъгълник 3-4-5, sin(36.87°) е 0.6, а cos(53.13°) също е 0.6. Синусът на единия остър ъгъл винаги е равен на косинуса на другия, защото страната срещу единия ъгъл е прилежаща на другия."
        ]
      },
      "angle-howto": {
        "h2": "Как да използвате калкулатора за ъгли на правоъгълен триъгълник",
        "paragraphs": [
          "Следвайте тези стъпки, за да намерите неизвестен ъгъл:"
        ],
        "listItems": [
          "<strong>Определете правия ъгъл.</strong> Уверете се, че триъгълникът има ъгъл от 90 градуса. Калкулаторът работи само за правоъгълни триъгълници.",
          "<strong>Означете хипотенузата.</strong> Намерете най-дългата страна, срещу правия ъгъл. Означете я с c.",
          "<strong>Изберете референтния си ъгъл.</strong> Решете дали търсите ъгъл A или ъгъл B. Това определя кои страни са срещулежащи и прилежащи.",
          "<strong>Изберете съответстващия режим.</strong> Ако знаете срещулежаща и хипотенуза, използвайте арксинус. Ако знаете прилежаща и хипотенуза, използвайте арккосинус. Ако знаете и двата катета, използвайте арктангенс. Ако знаете един остър ъгъл, използвайте комплементарния режим.",
          "<strong>Въведете двете дължини на страни.</strong> Използвайте една и съща мерна единица и за двете (и двете в метри, и двете във футове и т.н.). Единиците се съкращават в отношението, но смесването на единици разваля отношението.",
          "<strong>Прочетете резултата в градуси.</strong> Калкулаторът извежда ъгли в градуси, стандартната единица за строителство, навигация и класна геометрия.",
          "<strong>Намерете втория ъгъл.</strong> Извадете от 90 градуса или пуснете калкулатора отново с другия ъгъл като референтен.",
          "<strong>Проверете.</strong> Уверете се, че и двата ъгъла са между 0 и 90 градуса и се сумират до 90. Проверете отново с втори метод на отношение, ако точността е важна."
        ],
        "imgAlt": "Четиристъпков процес за намиране на ъгъл A: означете страните, изберете отношение, приложете обратна тригонометрия, проверете",
        "figcaption": "Четиристъпковият работен процес: означете страните спрямо референтния си ъгъл, изберете отношението, съответстващо на известните ви страни, приложете обратната функция, след което проверете с комплемента."
      },
      "angle-arcsin": {
        "h2": "Намиране на ъгли с арксинус",
        "h3s": [
          "Пример 1: триъгълникът 3-4-5",
          "Пример 2: същият триъгълник, проверка с арккосинус",
          "Пример 3: същият триъгълник, проверка с арктангенс",
          "Пример 4: намиране на комплемента",
          "Пример 11: стръмен наклон (арксинус)"
        ],
        "paragraphs": [
          "Използвайте арксинус, когато знаете страната срещу целевия си ъгъл и хипотенузата. Формулата е [[A = \\sin^{-1}(a/c)]]. Отношението трябва да е между 0 и 1. Ако отношението ви надвишава 1, сте сбъркали означенията на страните: хипотенузата трябва да е знаменателят.",
          "Дадена е срещулежаща страна a = 3 и хипотенуза c = 5, намерете ъгъл A. Стъпка 1: Запишете формулата. A = arcsin(a/c).<br /> Стъпка 2: Заместете. A = arcsin(3/5).<br /> Стъпка 3: Изчислете отношението. 3/5 = 0.6.<br /> Стъпка 4: Приложете арксинус. A = arcsin(0.6) ≈ 36.87°. Ъгълът е приблизително 36.87 градуса. Комплементът B = 90° − 36.87° = 53.13°.",
          "Дадена е прилежаща страна b = 4 и хипотенуза c = 5, намерете ъгъл A с арккосинус. A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. Това съвпада точно с Пример 1, потвърждавайки, че и двата метода описват един и същ ъгъл. Когато два метода съвпадат, означенията на страните ви са правилни.",
          "Дадена е срещулежаща a = 3 и прилежаща b = 4, намерете ъгъл A с арктангенс. A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°. И трите обратни функции стигат до един и същ отговор за един и същ триъгълник. Това тройно съвпадение е най-силната налична проверка.",
          "Даден е ъгъл A = 36.87° от Пример 1, намерете ъгъл B. B = 90° − A = 90° − 36.87° = 53.13°. Не е нужна тригонометрия. Можете да проверите, като изчислите arcsin(4/5) = 53.13°, третирайки страната с дължина 4 като срещулежаща на ъгъл B.",
          "Въжена линия се издига 7 метра върху разстояние по хипотенузата 25 метра. Намерете ъгъла на наклона. A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°. Това е лек наклон, типичен за достъпни рампи или конвейерни наклони. Плиткият ъгъл означава, че по-голямата част от дължината на въжето отива в хоризонтално разстояние, а не във височина."
        ]
      },
      "angle-arccos": {
        "h2": "Намиране на ъгли с арккосинус",
        "h3s": [
          "Пример 10: ъгъл на греда (арккосинус)",
          "Пример: триъгълник 5-12-13",
          "Кога арккосинусът е по-добър от арксинуса"
        ],
        "paragraphs": [
          "Използвайте арккосинус, когато знаете страната, прилежаща на целевия си ъгъл, и хипотенузата. Формулата е [[A = \\cos^{-1}(b/c)]]. Подобно на арксинуса, отношението трябва да е между 0 и 1. Арккосинусът е естествен, когато прилежащата страна е най-лесната за измерване, като хоризонталното разстояние на покрив или базисното разстояние в геодезията.",
          "Греда на покрив има хоризонтално разстояние 6 метра и дължина на гредата (хипотенуза) 6.5 метра. Намерете ъгъла на наклона при стрехата. A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°. Това е умерен наклон на покрив. Комплементът, 67.38°, е ъгълът между гредата и вертикалната стена.",
          "Дадена е прилежаща b = 12 и хипотенуза c = 13, намерете ъгъл A. A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. Комплементът B = 67.38°. Обърнете внимание, че arccos(5/13) би дал директно 67.38°, третирайки страната с дължина 5 като прилежаща на ъгъл B.",
          "Изберете арккосинус, когато измерването на прилежащата страна е по-надеждно от това на срещулежащата. При изграждане на покривни конструкции хоризонталното разстояние често се измерва директно по таванната греда, докато вертикалната височина трябва да се отвесира. По-точното измерване дава по-точен ъгъл. И двете функции са математически еквивалентни за един и същ триъгълник; изборът е въпрос на качество на измерването."
        ]
      },
      "angle-arctan": {
        "h2": "Намиране на ъгли с арктангенс",
        "h3s": [
          "Пример 5: наклон на покрив (арктангенс)",
          "Пример 6: поставяне на стълба (арктангенс)",
          "Пример 7: рампа за инвалидни колички (арктангенс)",
          "Пример 8: ъгъл към върха на дърво (арктангенс)",
          "Пример 9: товарна рампа (арктангенс)",
          "Пример 14: подпорна скоба (арктангенс)",
          "Пример 15: наклон на хълм (арксинус)",
          "Пример 12: наклон на стълбище (арктангенс)",
          "Пример 13: геодезически наклон (арктангенс)",
          "Пример 16: пряк път с комплемента"
        ],
        "paragraphs": [
          "Използвайте арктангенс, когато знаете и двата катета, но не и хипотенузата. Формулата е [[A = \\tan^{-1}(a/b)]]. Отношението a/b може да е всяко положително число. Арктангенсът е работният кон на полевата работа: височина върху хоризонтално разстояние е най-честата двойка измервания в строителството, ландшафтния дизайн и пътното проектиране.",
          "Покрив се издига 4 фута върху хоризонтално разстояние 12 фута. Намерете ъгъла на наклона. Стъпка 1: Определете срещулежаща (височина) = 4, прилежаща (разстояние) = 12.<br /> Стъпка 2: A = arctan(4/12) = arctan(0.3333).<br /> Стъпка 3: A ≈ 18.43°. Наклон от 18.43 градуса е често срещан жилищен наклон на покрив, достатъчно стръмен да оттича вода, но проходим с внимание. В покривни термини това е наклон 4 към 12.",
          "Стълба достига 4.5 метра нагоре по стена с основа на 2 метра от стената. Намерете ъгъла между стълбата и земята. A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°. Насоките за безопасност препоръчват ъгли на стълби близо до 75 градуса (съотношение 4 към 1). При 66 градуса тази стълба е поставена твърде полегато и трябва да се премести по-близо до стената.",
          "Рампа се издига 0.75 метра върху 9-метрово разстояние. Намерете ъгъла на наклона. A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°. Стандартите за достъпност обикновено изискват наклони не по-стръмни от около 4.8 градуса (съотношение 1:12). Тази рампа при 4.76° едва отговаря на изискването.",
          "Наблюдател стои на 20 метра от дърво. Клинометърът отчита върха на дървото под ъгъл, съответстващ на 12-метрова срещулежаща страна. Намерете зрителния ъгъл. A = arctan(12/20) = arctan(0.6) ≈ 30.96°. Заедно с височината на очите на наблюдателя този ъгъл позволява на лесовъдите да оценят височината на дървото без изкачване.",
          "Товарна рампа се издига 2.5 метра върху 10-метрово разстояние. Намерете ъгъла на наклона. A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°. Проверената стойност е 14.48°, отразяваща прецизни входни стойности. И в двата случая това е умерен наклон, подходящ за ръчни колички, но стръмен за тежки палетни колички.",
          "Диагонална скоба обхваща 1.2 метра вертикално и 3.5 метра хоризонтално. Намерете ъгъла на скобата. A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°. Този плитък ъгъл означава, че скобата действа предимно в хоризонтално срязващо съпротивление, а не във вертикално пренасяне на товар.",
          "Пътека по хълм се изкачва 3 метра по 13-метрово разстояние на наклона. Намерете ъгъла на наклона. A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°. Това е умерено стръмен пешеходен наклон. Проектантите на пътеки използват тези ъгли, за да планират серпентини, когато директният маршрут надвишава удобните ъгли за изкачване.",
          "Стълбище се издига 2.8 метра върху хоризонтално разстояние 4 метра. Намерете ъгъла на наклона. A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°. Това е удобен наклон на стълбище. Строителните норми обикновено ограничават ъглите на стълби до около 37 градуса максимум за жилищна употреба, така че този проект отговаря.",
          "Геодезист измерва 7-метрова промяна във височината върху 12-метрово хоризонтално разстояние. Намерете ъгъла на наклона. A = arctan(7/12) = arctan(0.5833) ≈ 30.26°. Този стръмен наклон би изисквал серпентини за път или пътека. Строителните инженери използват тези ъгли, за да определят изискванията за изкоп и насип.",
          "Даден е ъгъл A = 32°, намерете ъгъл B без тригонометрия. B = 90° − 32° = 58°. Този комплементарен режим е най-бързото изчисление на страницата, когато единият остър ъгъл вече е известен от транспортир, цифров нивелир или предишно изчисление."
        ]
      },
      "angle-choose": {
        "h2": "Кога да използвате всеки метод",
        "paragraphs": [
          "И трите обратни функции дават един и същ ъгъл за един и същ триъгълник. Изборът зависи от това кои страни знаете и кои измервания са най-надеждни.",
          "Знаете страната срещу целевия си ъгъл и хипотенузата. Това се случва при задачи за височина: вертикалната височина е срещу ъгъла на нивото на земята, а разстоянието по наклона е хипотенузата. Задачи за височина на дървета, височина на сгради и провисване на въжета предпочитат арксинус.",
          "Знаете страната, прилежаща на целевия си ъгъл, и хипотенузата. Изграждането на покриви предпочита арккосинус, защото хоризонталното разстояние (прилежащо) се измерва директно по гредата. Геодезическите базисни линии също предпочитат арккосинус, когато наземното разстояние е надеждното измерване.",
          "Знаете и двата катета, но не и хипотенузата. Това е най-честата полева ситуация: височината и разстоянието се измерват директно, докато хипотенузата би изисквала отделно изчисление. Арктангенсът пропуска хипотенузата изцяло. Когато можете да измерите и двата катета, арктангенсът е най-бързият път.",
          "Вече знаете единия остър ъгъл. Не са нужни измервания на страни. Използвайте го след всяко обратно изчисление, за да получите втория ъгъл, или когато транспортир или цифров инклинометър ви даде единия ъгъл директно."
        ],
        "h3s": [
          "Кога арксинусът е най-добър",
          "Кога арккосинусът е най-добър",
          "Кога арктангенсът е най-добър",
          "Кога комплементът е най-добър"
        ],
        "table": {
          "headers": [
            "Известни страни",
            "Метод",
            "Формула"
          ],
          "rows": [
            [
              "Срещулежаща (a) и хипотенуза (c)",
              "Арксинус",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "Прилежаща (b) и хипотенуза (c)",
              "Арккосинус",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "Срещулежаща (a) и прилежаща (b)",
              "Арктангенс",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "Един остър ъгъл",
              "Комплемент",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-applications": {
        "h2": "Приложения в реалния живот",
        "h3s": [
          "Строителство и дърводелство",
          "Безопасност и достъпност",
          "Геодезия и открито"
        ],
        "paragraphs": [
          "Изчисленията на ъгли се появяват навсякъде, където наклони, наклони на покриви и зрителни линии имат значение. Шестнадесетте примера по-горе обхващат строителство, достъпност, геодезия и образование. Ето моделите зад тях.",
          "Наклон на покрив (Пример 5: 18.43°), ъгли на греди (Пример 10: 22.62°) и наклон на стълбище (Пример 12: 34.99°) използват арктангенс или арккосинус върху директни полеви измервания. Дърводелците работят с височина върху разстояние, защото това са размерите в плановете. Калкулаторът превръща тези размери в ъгли за рязане с триони.",
          "Поставяне на стълба (Пример 6: 66.04°) и рампи за инвалидни колички (Пример 7: 4.76°) имат прагове за безопасност, изразени като ъгли. Стълба при 66° е твърде полегата; изискването от 75° съответства на съотношение 3.73 към 1. Рампа при 4.76° отговаря на максималното изискване за достъпност 1:12. Калкулаторът превръща проверките за ъгли от типа издържа/не издържа в бързи верификации.",
          "Ъгли към върха на дървета (Пример 8: 30.96°), наклони на хълмове (Пример 15: 13.34°) и геодезически зрителни линии (Пример 13: 30.26°) използват показания на клинометър и измерени с рулетка разстояния. Ъгълът свързва това, което можете да измерите на земята, с това, което трябва да знаете за височината или наклона."
        ],
        "imgAlt": "Четири панела, показващи изчисления на наклон на покрив, ъгъл на стълба, наклон на рампа и зрителен ъгъл към дърво",
        "figcaption": "Ъглови задачи от реалния свят: наклон на покрив от височина и разстояние, ъгъл за безопасност на стълба, наклон на рампа за достъпност и зрителен ъгъл към височината на дърво."
      },
      "angle-mistakes": {
        "h2": "Чести грешки при намиране на ъгли",
        "h3s": [
          "Размяна на срещулежаща и прилежаща",
          "Използване на грешна обратна функция",
          "Забравяне, че отношението трябва да е валидно",
          "Смесване на градуси и радиани",
          "Въвеждане на страни в различни мерни единици",
          "Преждевременно закръгляване на отношението",
          "Предполагане, че калкулаторът намира страни"
        ],
        "paragraphs": [
          "Най-честата грешка. Означенията зависят от референтния ви ъгъл. Ако изчислите arctan(4/3) = 53.13°, когато сте имали предвид arctan(3/4) = 36.87°, сте решили за грешния ъгъл. Решение: скицирайте триъгълника, маркирайте референтния си ъгъл, след което означете срещулежаща (срещу него) и прилежаща (докосваща го).",
          "Прилагането на арксинус върху отношение прилежаща върху хипотенуза дава комплемента на търсения ъгъл, а не съобщение за грешка. Arcsin(4/5) = 53.13° е ъгъл B, а не ъгъл A. Решение: съчетайте функцията с известните си страни, като използвате таблицата по-горе.",
          "Арксинусът и арккосинусът изискват отношения между 0 и 1. Ако въведете срещулежаща = 5 и хипотенуза = 3, отношението 1.67 няма арксинус. Това винаги означава сбъркани означения на страни: хипотенузата трябва да е най-дългата страна и знаменателят. Решение: преназначете най-дългото измерване като хипотенуза.",
          "Обратната тригонометрия в калкулатори и код често по подразбиране е в радиани. Arctan(1) = 45° в градуси, но 0.785 в радиани. Този калкулатор извежда градуси. Ако ръчното ви изчисление даде 0.64 за триъгълник 3-4-5, сте в радиани; умножете по 180/π, за да получите 36.87°.",
          "Срещулежаща в инчове и хипотенуза във футове развалят отношението. Първо преобразувайте в обща единица. Отношението е безразмерно, но само когато и двата входа споделят единицата.",
          "Arcsin(0.6) = 36.87°, но arcsin(0.60), закръглено от 0.596, дава 36.58°. Малки грешки в отношението се усилват близо до 0 и 1, където обратните функции са най-стръмни. Пазете пълна точност през цялото изчисление, закръгляйте само крайния ъгъл.",
          "Тази страница намира ъгли от страни. Тя не намира страни от ъгли. За задачи страна-от-ъгъл използвайте специализирания калкулатор за страни. Всеки инструмент има една задача."
        ]
      },
      "angle-precision": {
        "h2": "Точност на ъгъла и мерни единици",
        "h3s": [
          "Как грешката във входа влияе на ъгъла",
          "Градуси спрямо градуси-минути-секунди",
          "Кога целите градуси са достатъчни"
        ],
        "paragraphs": [
          "Резултатите за ъгли са толкова точни, колкото са измерванията на страните зад тях. Отчитане с ролетка до най-близкия милиметър поддържа два знака след десетичната запетая в ъгъла. Премерено с крачки разстояние на терен поддържа в най-добрия случай цели градуси. Калкулаторът изчислява с пълна точност на числата с плаваща запетая; решението за закръгляване е ваше.",
          "Малки грешки в страните причиняват по-големи грешки в ъгъла, когато отношението е близо до 0 или 1, където обратните функции са най-стръмни. За арктангенс близо до 45°, грешка от 1% в отношението измества ъгъла с около 0.3°. Близко до 5° или 85°, същата грешка от 1% в отношението измества ъгъла с над 0.5°. Измервайте внимателно при крайни ъгли или направете няколко измервания и усреднете.",
          "Геодезистите понякога изразяват ъглите като градуси, минути и секунди (ГМС). За да преобразувате 36.87° в ГМС: целите градуси са 36, дробните 0.87° по 60 дават 52.2 минути, а 0.2 минути по 60 дават 12 секунди, което дава 36° 52′ 12″. Този калкулатор извежда десетични градуси; умножете дробта по 60 за минути.",
          "Ъглите за рязане в дърводелството, проверките за поставяне на стълби и грубите оценки на наклони рядко се нуждаят от десетични знаци. Наклон на покрив до най-близкия градус е напълно достатъчен за поръчка на материали. Запазете точността до два знака за машинна обработка, оптично подравняване и инженерни изчисления, където допуските са строги."
        ]
      },
      "angle-verify": {
        "h2": "Проверка на отговора за ъгъла",
        "paragraphs": [
          "Три проверки потвърждават правилно изчисление на ъгъл:",
          "За критична работа проверете също дали страните удовлетворяват Питагоровата теорема. В триъгълник 3-4-5, 9 + 16 = 25 потвърждава страните, преди да се доверите на ъглите, получени от тях."
        ],
        "listItems": [
          "<strong>Проверка на диапазона.</strong> И двата остри ъгъла трябва да са строго между 0° и 90°. Ъгъл от 0°, 90° или повече сигнализира невалидни входове или сбъркано означение на триъгълника.",
          "<strong>Проверка на сумата.</strong> A + B трябва да е равно точно на 90°. Ако двата ви ъгъла се сумират до 89.9° или 90.1°, закръглянето го обяснява. По-големи разлики показват грешка.",
          "<strong>Проверка с друг метод.</strong> Преизчислете същия ъгъл с различна обратна функция. Ако arcsin(3/5) = 36.87° и arctan(3/4) = 36.87°, отговорът е солиден. Несъгласието сочи към грешка в означението."
        ]
      },
      "angle-related": {
        "h2": "Разгледайте свързани калкулатори за правоъгълен триъгълник"
      },
      "angle-conclusion": {
        "h2": "Намерете всеки ъгъл на правоъгълен триъгълник с увереност",
        "paragraphs": [
          "Започнете, като означите триъгълника си: първо хипотенузата, след това срещулежащата и прилежащата спрямо целевия си ъгъл. Изберете обратната функция, съответстваща на известните ви страни: арксинус за срещулежаща и хипотенуза, арккосинус за прилежаща и хипотенуза, арктангенс за двата катета. Въведете измерванията, прочетете ъгъла в градуси, след което получете втория ъгъл от 90 минус първия. Проверете с проверката на диапазона, проверката на сумата и изчисление с друг метод. С тези стъпки всяка задача за ъгъл на правоъгълен триъгълник се свежда до надеждна рутина. Върнете се към калкулатора в горната част на тази страница, за да изчислите числата си."
        ]
      }
    },
    "faqs": [
      {
        "question": "Как се намира ъгъл в правоъгълен триъгълник?",
        "answer": "Използвайте обратна тригонометрична функция върху отношение на страни. При срещулежаща и хипотенуза изчислете arcsin(срещулежаща/хипотенуза). При прилежаща и хипотенуза използвайте arccos(прилежаща/хипотенуза). При двата катета използвайте arctan(срещулежаща/прилежаща). Резултатът е ъгълът в градуси."
      },
      {
        "question": "Каква е разликата между sin и arcsin?",
        "answer": "Синусът приема ъгъл и връща отношение: sin(30°) = 0.5. Арксинусът обръща това: той приема отношение и връща ъгъла, така че arcsin(0.5) = 30°. Използвайте синус, когато знаете ъгъла и ви трябва страна; използвайте арксинус, когато знаете страните и ви трябва ъгълът."
      },
      {
        "question": "Кога да използвам арктангенс вместо арксинус?",
        "answer": "Използвайте арктангенс, когато знаете и двата катета (срещулежаща и прилежаща), но не и хипотенузата. Арктангенсът пропуска хипотенузата изцяло, което спестява стъпка при полеви измервания като наклон на покрив, където височината и разстоянието се измерват директно. Използвайте арксинус, когато хипотенузата е една от известните ви страни."
      },
      {
        "question": "Защо двата остри ъгъла се сумират до 90 градуса?",
        "answer": "Ъглите на триъгълника винаги се сумират до 180 градуса. Правият ъгъл взема 90 от тях, оставяйки 90 за другите два заедно. Това означава A + B = 90°, така че намирането на единия остър ъгъл веднага дава другия чрез изваждане."
      },
      {
        "question": "Може ли ъгълът да е 90 градуса?",
        "answer": "Не. Ъгълът от 90 градуса е правият ъгъл във връх C, който е даден. Калкулаторът намира двата остри ъгъла A и B, всеки строго между 0° и 90°. Ако резултатът ви достигне 0° или 90°, входовете описват изроден триъгълник, а не валиден."
      },
      {
        "question": "Какво ако отношението на страните ми е по-голямо от 1?",
        "answer": "За арксинус и арккосинус отношение над 1 е невъзможно и сигнализира сбъркани означения на страни. Хипотенузата трябва да е най-дългата страна и знаменателят. Преназначете най-дългото измерване като хипотенуза (c) и преизчислете. Отношенията на арктангенса могат законно да надвишават 1."
      },
      {
        "question": "Как да разбера коя страна е срещулежаща и коя прилежаща?",
        "answer": "Първо изберете референтния си ъгъл. Срещулежащата страна се намира срещу този ъгъл (без да докосва върха му). Прилежащата страна докосва върха на ъгъла, но не е хипотенузата. Една и съща физическа страна е срещулежаща за единия остър ъгъл и прилежаща за другия."
      },
      {
        "question": "Защо арксинусът, арккосинусът и арктангенсът дават един и същ отговор?",
        "answer": "Защото описват един и същ геометричен ъгъл чрез различни двойки страни. В триъгълник 3-4-5, arcsin(3/5), arccos(4/5) и arctan(3/4) са равни на 36.87°. Това съвпадение е мощна проверка: ако два метода се разминават, някоя страна е сбъркано означена."
      },
      {
        "question": "Ъглите трябва ли да са в градуси или радиани?",
        "answer": "Този калкулатор използва градуси, стандартът за строителство, навигация и класна геометрия. Ако изчислявате на ръка с научен калкулатор, проверете дали е в режим градуси. Резултат в радиани като 0.64 за триъгълник 3-4-5 се преобразува в 36.87° чрез умножение по 180/π."
      },
      {
        "question": "Колко точен трябва да е отговорът ми за ъгъла?",
        "answer": "Съобразете се с точността на входа си. Ако страните са измерени до най-близкия сантиметър, два знака след десетичната запетая (36.87°) са подходящи. За груби полеви оценки целите градуси са достатъчни. Пазете пълна точност по време на изчислението и закръгляйте само крайния отговор."
      },
      {
        "question": "Мога ли да намеря ъгъл само с една известна страна?",
        "answer": "Не. Една страна не е достатъчна; безкрайно много правоъгълни триъгълници споделят една дължина на страна. Нуждаете се от две страни (за обратна тригонометрия) или една страна плюс един остър ъгъл (за правилото на комплемента). Калкулаторът изисква точно два входа."
      },
      {
        "question": "Как мога да проверя дали ъгълът ми е правилен?",
        "answer": "Три проверки: и двата ъгъла трябва да са между 0° и 90°, те трябва да се сумират до точно 90°, а преизчисляването с различна обратна функция трябва да даде същия резултат. За триъгълник 3-4-5, arcsin(3/5) = 36.87° и arctan(3/4) = 36.87° се потвърждават взаимно."
      }
    ],
    "relatedHeading": "Разгледайте свързани калкулатори за правоъгълен триъгълник",
    "relatedIntro": "След като намерите ъгъла си, продължете с тези свързани калкулатори, за да завършите анализа на триъгълника си.",
    "relatedItems": [
      "Калкулатор за страни на правоъгълен триъгълник",
      "Калкулатор за страна на правоъгълен триъгълник от ъгъл",
      "Калкулатор за тригонометрични отношения",
      "Калкулатор за правоъгълен триъгълник (всичко в едно)",
      "Калкулатор за Питагорова теорема",
      "Калкулатор за специален правоъгълен триъгълник"
    ]
  },
  "tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "angle-intro": "Dik Üçgen Açı Hesaplayıcısı Nedir?",
      "angle-anatomy": "Dik Üçgendeki Açıları Anlama",
      "angle-inverse": "Ters Trigonometrik Fonksiyonlar",
      "angle-complement": "Tümler Açılar",
      "angle-howto": "Açı Hesaplayıcısı Nasıl Kullanılır",
      "angle-arcsin": "Arksinüs ile Açı Bulma",
      "angle-arccos": "Arkkosinüs ile Açı Bulma",
      "angle-arctan": "Arktanjant ile Açı Bulma",
      "angle-choose": "Her Yöntem Ne Zaman Kullanılır",
      "angle-applications": "Gerçek Hayat Uygulamaları",
      "angle-mistakes": "Yaygın Hatalar",
      "angle-precision": "Açı Hassasiyeti ve Birimleri",
      "angle-verify": "Cevabınızı Doğrulama",
      "angle-related": "İlgili Hesaplayıcılar",
      "angle-faq": "SSS"
    },
    "sections": {
      "angle-intro": {
        "h2": "Dik Üçgen Açı Hesaplayıcısı Nedir?",
        "paragraphs": [
          "Dik üçgen açı hesaplayıcısı, kenar uzunluklarını bildiğinizde bir dik üçgendeki bilinmeyen dar açıları bulur. Pisagor teoremi eksik kenarları bulurken, ters trigonometrik fonksiyonlar eksik açıları bulur. Hesaplayıcı iki bilinen kenarı alır, oranlarını hesaplar, ardından açıyı derece cinsinden bulmak için arksinüs, arkkosinüs veya arktanjant uygular.",
          "Yaygın kullanımlar arasında yükselti ve yatay mesafe ölçümlerinden çatı eğimini belirleme, güvenli tırmanış için merdiven yerleşim açılarını bulma, erişilebilirlik standartlarına uyum için rampa eğimlerini hesaplama ve geometri ödevlerini çözme yer alır. Hesaplayıcının çalışması için tam olarak iki kenar uzunluğuna ihtiyacı vardır. A açısını (bitişik dik kenar ile hipotenüs arasında) ve B açısını (tümler açı, karşı dik kenar ile hipotenüs arasında) verir.",
          "Örneğin, karşı kenarı 3 ve hipotenüsü 5 olan bir dik üçgende A açısı = arcsin(3/5) olur, bu da yaklaşık 36.87 derecedir. Diğer dar açı 90 eksi 36.87, yani 53.13 derecedir. Bu kılavuz her bir ters fonksiyonu açıklar, hangisinin ne zaman kullanılacağını gösterir, on altı çözümlü örnek üzerinden geçer ve yanlış sonuçlara yol açan hataları ele alır.",
          "Açı bulma, kenar bulmanın tersidir. Kenar hesaplayıcısı açılarla başlar ve uzunluklar üretir; bu hesaplayıcı uzunluklarla başlar ve açılar üretir. Birlikte her dik üçgeni tamamen çözerler: herhangi iki kenar verildiğinde üçüncü kenarı Pisagor ile bulun, ardından aşağıdaki yöntemlerle iki dar açıyı da bulun. İletki gerekmez ve sonuçlar tam hesaplayıcı hassasiyeti taşır."
        ]
      },
      "angle-anatomy": {
        "h2": "Dik Üçgendeki Açıları Anlama",
        "h3s": [
          "Üç Açı Nedir?",
          "Kenarlar Bir Açıya Göre Nasıl Adlandırılır?",
          "Referans Açı Neden Önemlidir?"
        ],
        "paragraphs": [
          "Her dik üçgenin üç açısı vardır: tam 90 derece olan bir dik açı ve her biri 90 dereceden küçük iki dar açı. Dik açı C köşesindedir. Dar açılar A ve B köşelerindedir. Üçgenin açıları toplamı 180 derece olduğundan, iki dar açının toplamı 90 derece olmalıdır.",
          "Kenar adları hangi açıyı ölçtüğünüze bağlıdır. A açısı için: A'nın karşısındaki kenar (A köşesine değmeyen kenar) karşı kenar olarak adlandırılır ve a ile gösterilir. A köşesine değen ancak hipotenüs olmayan kenar bitişik kenardır ve b ile gösterilir. c ile gösterilen hipotenüs dik açının karşısındadır ve her zaman en uzun kenardır. B açısını ölçmeye geçerseniz etiketler değişir: B'nin karşısındaki kenar yeni karşı kenar olur.",
          "Aynı fiziksel kenar bir açı için karşı, diğeri için bitişik olabilir. 3-4-5 üçgeninde, A açısı uzunluğu 4 olan kenar ile hipotenüs arasındaysa, uzunluğu 3 olan kenar A'nın karşısındadır. Diğer köşedeki B açısı için uzunluğu 3 olan kenar bitişik, uzunluğu 4 olan kenar karşı olur. Formül seçmeden önce her zaman referans açınızı belirleyin."
        ],
        "imgAlt": "A, B, C açıları etiketlenmiş, a, b, c kenarları gösterilmiş, C'de dik açı olan dik üçgen",
        "figcaption": "Açı anatomisi: C 90 derecelik dik açıdır, A ve B dar açılardır ve toplamları 90 derecedir. a, b, c kenarları A açısına göre etiketlenmiştir."
      },
      "angle-inverse": {
        "h2": "Ters Trigonometrik Fonksiyonlar",
        "h3s": [
          "Arksinüs: Karşı ve Hipotenüs",
          "Arkkosinüs: Bitişik ve Hipotenüs",
          "Arktanjant: Karşı ve Bitişik"
        ],
        "paragraphs": [
          "Normal trigonometrik fonksiyonlar bir açı alır ve bir oran verir. 30 derecenin sinüsü 0.5'tir. Ters trigonometrik fonksiyonlar bunu tersine çevirir: bir oran alırlar ve açıyı verirler. 0.5'in arksinüsü 30 derecedir. Hesaplayıcı, her biri belirli bir bilinen kenar çiftine eşlenmiş üç ters fonksiyon kullanır.",
          "Karşı kenarı (a) ve hipotenüsü (c) bildiğinizde arksinüs kullanın. Formül [[A = \\sin^{-1}(a/c)]] şeklindedir. Karşı kenar her zaman hipotenüsten kısa olduğundan a/c oranı 0 ile 1 arasında olmalıdır. 3-4-5 üçgeni için A = arcsin(3/5) = arcsin(0.6), bu da yaklaşık 36.87 derecedir.",
          "Bitişik kenarı (b) ve hipotenüsü (c) bildiğinizde arkkosinüs kullanın. Formül [[A = \\cos^{-1}(b/c)]] şeklindedir. Arksinüs gibi b/c oranı da 0 ile 1 arasında olmalıdır. Aynı 3-4-5 üçgeni için A = arccos(4/5) = arccos(0.8), bu da yaklaşık 36.87 derecedir. İki yöntem de aynı açıyı tanımladığı için sonuçlar uyumludur.",
          "İki dik kenarı (a ve b) biliyor ancak hipotenüsü bilmiyorsanız arktanjant kullanın. Formül [[A = \\tan^{-1}(a/b)]] şeklindedir. a/b oranı herhangi bir pozitif sayı olabilir. 3-4-5 üçgeni için A = arctan(3/4) = arctan(0.75), bu da yaklaşık 36.87 derecedir. Arktanjant, iki dik kenarın (yükselti ve yatay mesafe) ölçülmesi en kolay boyutlar olduğu çatı eğimi gibi saha ölçümleri için en pratik seçimdir."
        ],
        "imgAlt": "Arksinüs, arkkosinüs ve arktanjant formüllerini kenar oranlarıyla gösteren üç panel",
        "figcaption": "Üç ters fonksiyon: arksinüs karşı bölü hipotenüs kullanır, arkkosinüs bitişik bölü hipotenüs kullanır, arktanjant karşı bölü bitişik kullanır."
      },
      "angle-complement": {
        "h2": "Tümler Açılar: A + B = 90 Derece",
        "paragraphs": [
          "Dik üçgendeki iki dar açı tümlerdir, yani toplamları tam 90 derecedir. Bu, [[A + B = 90^\\circ]] ilişkisini verir. Bir dar açıyı bulduktan sonra diğeri hemen çıkarma ile bulunur: B = 90 derece eksi A.",
          "Bu ayrı bir ölçüm yöntemi değildir. Bir tutarlılık kontrolü ve bir kısayoldur. Arksinüs A = 36.87 derece verirse, başka trigonometri gerekmeden B = 53.13 derece olur. Hesaplayıcı bu ilişkiyi açı toplamı modlarında kullanır.",
          "Tümlerlik ilişkisi sin(A)'nın neden cos(B)'ye eşit olduğunu da açıklar. 3-4-5 üçgeninde sin(36.87°) 0.6'tır ve cos(53.13°) de 0.6'tır. Bir dar açının sinüsü her zaman diğerinin kosinüsüne eşittir, çünkü bir açının karşısındaki kenar diğer açının bitişiğidir."
        ]
      },
      "angle-howto": {
        "h2": "Dik Üçgen Açı Hesaplayıcısı Nasıl Kullanılır",
        "paragraphs": [
          "Bilinmeyen bir açıyı bulmak için şu adımları izleyin:"
        ],
        "listItems": [
          "<strong>Dik açıyı belirleyin.</strong> Üçgenin 90 derecelik bir köşesi olduğunu doğrulayın. Hesaplayıcı yalnızca dik üçgenler için çalışır.",
          "<strong>Hipotenüsü etiketleyin.</strong> Dik açının karşısındaki en uzun kenarı bulun. Bunu c olarak etiketleyin.",
          "<strong>Referans açınızı seçin.</strong> A açısını mı yoksa B açısını mı çözdüğünüze karar verin. Bu, hangi kenarların karşı ve bitişik olduğunu belirler.",
          "<strong>Eşleşen modu seçin.</strong> Karşı ve hipotenüsü biliyorsanız arksinüs kullanın. Bitişik ve hipotenüsü biliyorsanız arkkosinüs kullanın. İki dik kenarı da biliyorsanız arktanjant kullanın. Bir dar açıyı biliyorsanız tümler modunu kullanın.",
          "<strong>İki kenar uzunluğunu girin.</strong> İkisi için de aynı birimi kullanın (ikisi de metre, ikisi de fit vb.). Birimler oranda sadeleşir, ancak birimleri karıştırmak oranı bozar.",
          "<strong>Sonucu derece cinsinden okuyun.</strong> Hesaplayıcı açıları derece cinsinden verir; bu, inşaat, navigasyon ve sınıf geometrisi için standart birimdir.",
          "<strong>İkinci açıyı bulun.</strong> 90 dereceden çıkarın veya hesaplayıcıyı diğer açıyı referans alarak tekrar çalıştırın.",
          "<strong>Doğrulayın.</strong> İki açının da 0 ile 90 derece arasında olduğunu ve toplamlarının 90 olduğunu kontrol edin. Hassasiyet önemliyse ikinci bir oran yöntemiyle çapraz kontrol yapın."
        ],
        "imgAlt": "A açısını bulmak için dört adımlı süreç: kenarları etiketle, oranı seç, ters trig uygula, doğrula",
        "figcaption": "Dört adımlı iş akışı: kenarları referans açınıza göre etiketleyin, bilinen kenarlarınıza uyan oranı seçin, ters fonksiyonu uygulayın, ardından tümler ile doğrulayın."
      },
      "angle-arcsin": {
        "h2": "Arksinüs ile Açı Bulma",
        "h3s": [
          "Örnek 1: 3-4-5 Üçgeni",
          "Örnek 2: Aynı Üçgen, Arkkosinüs Kontrolü",
          "Örnek 3: Aynı Üçgen, Arktanjant Kontrolü",
          "Örnek 4: Tümleri Bulma",
          "Örnek 11: Dik Eğim (Arksinüs)"
        ],
        "paragraphs": [
          "Hedef açınızın karşısındaki kenarı ve hipotenüsü bildiğinizde arksinüs kullanın. Formül [[A = \\sin^{-1}(a/c)]] şeklindedir. Oran 0 ile 1 arasında olmalıdır. Oranınız 1'i aşıyorsa kenarları yanlış etiketlemişsinizdir: hipotenüs payda olmalıdır.",
          "Karşı kenar a = 3 ve hipotenüs c = 5 verildiğinde A açısını bulun. Adım 1: Formülü yazın. A = arcsin(a/c).<br /> Adım 2: Yerine koyun. A = arcsin(3/5).<br /> Adım 3: Oranı hesaplayın. 3/5 = 0.6.<br /> Adım 4: Arksinüs uygulayın. A = arcsin(0.6) ≈ 36.87°. Açı yaklaşık 36.87 derecedir. Tümler B = 90° − 36.87° = 53.13°.",
          "Bitişik kenar b = 4 ve hipotenüs c = 5 verildiğinde arkkosinüs ile A açısını bulun. A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. Bu, Örnek 1 ile tam olarak eşleşiyor ve iki yöntemin de aynı açıyı tanımladığını doğruluyor. İki yöntem uyuştuğunda kenar etiketleriniz doğrudur.",
          "Karşı a = 3 ve bitişik b = 4 verildiğinde arktanjant ile A açısını bulun. A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°. Üç ters fonksiyon da aynı üçgen için aynı cevaba ulaşır. Bu üçlü uyum, mevcut en güçlü doğrulamadır.",
          "Örnek 1'den A = 36.87° açısı verildiğinde B açısını bulun. B = 90° − A = 90° − 36.87° = 53.13°. Trigonometri gerekmez. Uzunluğu 4 olan kenarı B açısının karşısı kabul ederek arcsin(4/5) = 53.13° hesaplayarak doğrulayabilirsiniz.",
          "Bir kablo hattı, 25 metrelik hipotenüs mesafesi boyunca 7 metre yükselir. Eğim açısını bulun. A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°. Bu, erişilebilir rampalar veya konveyör eğimleri için tipik, hafif bir eğimdir. Sığ açı, kablo uzunluğunun çoğunun yüksekliğe değil yatay mesafeye gittiği anlamına gelir."
        ]
      },
      "angle-arccos": {
        "h2": "Arkkosinüs ile Açı Bulma",
        "h3s": [
          "Örnek 10: Mertek Açısı (Arkkosinüs)",
          "Örnek: 5-12-13 Üçgeni",
          "Arkkosinüs Arksinüsü Ne Zaman Geçer"
        ],
        "paragraphs": [
          "Hedef açınıza bitişik kenarı ve hipotenüsü bildiğinizde arkkosinüs kullanın. Formül [[A = \\cos^{-1}(b/c)]] şeklindedir. Arksinüs gibi oran 0 ile 1 arasında olmalıdır. Bitişik kenarın ölçülmesi en kolay olduğu durumlarda, örneğin bir çatının yatay mesafesi veya ölçümdeki baz mesafesi gibi, arkkosinüs doğaldır.",
          "Bir merteğin yatay mesafesi 6 metre, mertek uzunluğu (hipotenüs) 6.5 metredir. Saçaktaki eğim açısını bulun. A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°. Bu orta düzey bir çatı eğimidir. Tümler açı 67.38°, mertek ile dikey duvar arasındaki açıdır.",
          "Bitişik b = 12 ve hipotenüs c = 13 verildiğinde A açısını bulun. A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. Tümler B = 67.38°. Uzunluğu 5 olan kenarı B açısının bitişiği kabul ederek arccos(5/13) ifadesinin doğrudan 67.38° vereceğine dikkat edin.",
          "Bitişik ölçüm karşı ölçümden daha güvenilir olduğunda arkkosinüs seçin. Çatı karkasında yatay mesafe genellikle tavan kirişi boyunca doğrudan ölçülürken dikey yükselti çekül ile alınmalıdır. Daha doğru girdi daha doğru açı üretir. İki fonksiyon da aynı üçgen için matematiksel olarak eşdeğerdir; seçim ölçüm kalitesiyle ilgilidir."
        ]
      },
      "angle-arctan": {
        "h2": "Arktanjant ile Açı Bulma",
        "h3s": [
          "Örnek 5: Çatı Eğimi (Arktanjant)",
          "Örnek 6: Merdiven Yerleşimi (Arktanjant)",
          "Örnek 7: Tekerlekli Sandalye Rampası (Arktanjant)",
          "Örnek 8: Ağaç Yüksekliği Açısı (Arktanjant)",
          "Örnek 9: Yükleme Rampası (Arktanjant)",
          "Örnek 14: Destek Payandası (Arktanjant)",
          "Örnek 15: Yamaç Eğimi (Arksinüs)",
          "Örnek 12: Merdiven Eğimi (Arktanjant)",
          "Örnek 13: Harita Ölçüm Eğimi (Arktanjant)",
          "Örnek 16: Tümler Kısayolu"
        ],
        "paragraphs": [
          "İki dik kenarı biliyor ancak hipotenüsü bilmiyorsanız arktanjant kullanın. Formül [[A = \\tan^{-1}(a/b)]] şeklindedir. a/b oranı herhangi bir pozitif değer olabilir. Arktanjant saha çalışmalarının bel kemiğidir: yükselti bölü yatay mesafe, inşaat, peyzaj ve yol tasarımındaki en yaygın ölçüm çiftidir.",
          "Bir çatı, 12 fitlik yatay mesafe boyunca 4 fit yükselir. Eğim açısını bulun. Adım 1: Karşıyı (yükselti) = 4, bitişiği (mesafe) = 12 olarak belirleyin.<br /> Adım 2: A = arctan(4/12) = arctan(0.3333).<br /> Adım 3: A ≈ 18.43°. 18.43 derecelik eğim, suyu akıtacak kadar dik ancak dikkatle yürünebilecek yaygın bir konut çatı eğimidir. Çatı terimleriyle bu, 12'de 4 eğimdir.",
          "Bir merdiven, tabanı duvardan 2 metre uzakta olacak şekilde duvara 4.5 metre yükselir. Merdiven ile zemin arasındaki açıyı bulun. A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°. Güvenlik yönergeleri 75 dereceye yakın merdiven açılarını önerir (4'e 1 oranı). 66 derecede bu merdiven fazla yatık kurulmuştur ve duvara yaklaştırılmalıdır.",
          "Bir rampa, 9 metrelik mesafe boyunca 0.75 metre yükselir. Eğim açısını bulun. A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°. Erişilebilirlik standartları genellikle yaklaşık 4.8 dereceden (1:12 oranı) dik olmayan eğimler gerektirir. 4.76°'deki bu rampa yönergeyi ancak karşılar.",
          "Bir gözlemci ağaçtan 20 metre uzakta durur. Klinometre, ağacın tepesini 12 metrelik karşı kenara karşılık gelen bir açıda okur. Görüş açısını bulun. A = arctan(12/20) = arctan(0.6) ≈ 30.96°. Gözlemcinin göz yüksekliğiyle birlikte bu açı, ormancıların tırmanmadan ağaç yüksekliğini tahmin etmesini sağlar.",
          "Bir yükleme rampası, 10 metrelik mesafe boyunca 2.5 metre yükselir. Eğim açısını bulun. A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°. Doğrulanmış değer 14.48°'dir ve hassas girdi değerlerini yansıtır. Her iki durumda da bu, el arabaları için uygun ancak ağır transpaletler için dik, orta düzey bir eğimdir.",
          "Çapraz bir payanda dikeyde 1.2 metre, yatayda 3.5 metre uzanır. Payanda açısını bulun. A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°. Bu sığ açı, payandanın dikey yük aktarımından çok yatay kesme direncinde çalıştığı anlamına gelir.",
          "Bir yamaç patikası, 13 metrelik eğim mesafesi boyunca 3 metre tırmanır. Eğim açısını bulun. A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°. Bu orta derecede dik bir yürüyüş eğimidir. Patika tasarımcıları, doğrudan rota konforlu tırmanış açılarını aştığında zigzag planlamak için bu açıları kullanır.",
          "Bir merdiven, 4 metrelik yatay mesafe boyunca 2.8 metre yükselir. Eğim açısını bulun. A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°. Bu konforlu bir merdiven eğimidir. Yapı yönetmelikleri genellikle konut kullanımında merdiven açılarını maksimum yaklaşık 37 dereceyle sınırlar, bu nedenle bu tasarım uygundur.",
          "Bir haritacı, 12 metrelik yatay mesafede 7 metrelik yükselti değişimi ölçer. Eğim açısını bulun. A = arctan(7/12) = arctan(0.5833) ≈ 30.26°. Bu dik eğim, bir yol veya patika için zigzag gerektirir. İnşaat mühendisleri kazı ve dolgu gereksinimlerini belirlemek için bu açıları kullanır.",
          "A = 32° açısı verildiğinde trigonometri olmadan B açısını bulun. B = 90° − 32° = 58°. Bir dar açı iletki, dijital eğimölçer veya önceki bir hesaplamadan zaten biliniyorsa, bu tümler modu sayfadaki en hızlı hesaplamadır."
        ]
      },
      "angle-choose": {
        "h2": "Her Yöntem Ne Zaman Kullanılır",
        "paragraphs": [
          "Üç ters fonksiyon da aynı üçgen için aynı açıyı verir. Seçim, hangi kenarları bildiğinize ve hangi ölçümlerin en güvenilir olduğuna bağlıdır.",
          "Hedef açınızın karşısındaki kenarı ve hipotenüsü biliyorsunuz. Bu, yükseklik problemlerinde olur: dikey yükseklik zemin seviyesindeki açının karşısındadır ve eğim mesafesi hipotenüstür. Ağaç yüksekliği, bina yüksekliği ve kablo sarkması problemleri arksinüsü tercih eder.",
          "Hedef açınıza bitişik kenarı ve hipotenüsü biliyorsunuz. Çatı karkası arkkosinüsü tercih eder çünkü yatay mesafe (bitişik) kiriş boyunca doğrudan ölçülür. Zemin mesafesi güvenilir ölçüm olduğunda harita baz çizgileri de arkkosinüsü tercih eder.",
          "İki dik kenarı da biliyor ancak hipotenüsü bilmiyorsunuz. Bu en yaygın saha durumudur: yükselti ve mesafe doğrudan ölçülürken hipotenüs ayrı bir hesaplama gerektirir. Arktanjant hipotenüsü tamamen atlar. İki dik kenarı da ölçebildiğinizde arktanjant en hızlı yoldur.",
          "Bir dar açıyı zaten biliyorsunuz. Kenar ölçümüne gerek yok. Herhangi bir ters hesaplamadan sonra ikinci açıyı almak için veya bir iletki ya da dijital eğimölçer size bir açıyı doğrudan verdiğinde kullanın."
        ],
        "h3s": [
          "Arksinüs Ne Zaman En İyidir",
          "Arkkosinüs Ne Zaman En İyidir",
          "Arktanjant Ne Zaman En İyidir",
          "Tümler Ne Zaman En İyidir"
        ],
        "table": {
          "headers": [
            "Bilinen kenarlar",
            "Yöntem",
            "Formül"
          ],
          "rows": [
            [
              "Karşı (a) ve hipotenüs (c)",
              "Arksinüs",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "Bitişik (b) ve hipotenüs (c)",
              "Arkkosinüs",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "Karşı (a) ve bitişik (b)",
              "Arktanjant",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "Bir dar açı",
              "Tümler",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-applications": {
        "h2": "Gerçek Hayat Uygulamaları",
        "h3s": [
          "İnşaat ve Marangozluk",
          "Güvenlik ve Erişilebilirlik",
          "Haritacılık ve Açık Alan"
        ],
        "paragraphs": [
          "Açı hesaplamaları, eğimlerin, çatı meyillerinin ve görüş çizgilerinin önemli olduğu her yerde karşımıza çıkar. Yukarıdaki on altı örnek inşaat, erişilebilirlik, haritacılık ve eğitimi kapsar. İşte arkalarındaki örüntüler.",
          "Çatı eğimi (Örnek 5: 18.43°), mertek açıları (Örnek 10: 22.62°) ve merdiven eğimi (Örnek 12: 34.99°), doğrudan saha ölçümlerinde arktanjant veya arkkosinüs kullanır. Marangozlar yükselti bölü mesafe ile çalışır çünkü planlardaki boyutlar bunlardır. Hesaplayıcı bu boyutları testereler için kesim açılarına dönüştürür.",
          "Merdiven yerleşimi (Örnek 6: 66.04°) ve tekerlekli sandalye rampaları (Örnek 7: 4.76°), açı olarak ifade edilen güvenlik eşiklerine sahiptir. 66°'deki bir merdiven fazla yatıktır; 75° yönergesi 3.73'e 1 oranına karşılık gelir. 4.76°'deki bir rampa 1:12 erişilebilirlik maksimumunu karşılar. Hesaplayıcı, geçer/kalır açı kontrollerini hızlı doğrulamalara dönüştürür.",
          "Ağaç yüksekliği açıları (Örnek 8: 30.96°), yamaç eğimleri (Örnek 15: 13.34°) ve harita görüş çizgileri (Örnek 13: 30.26°), klinometre okumaları ve şeritle ölçülmüş mesafeler kullanır. Açı, yerde ölçebildikleriniz ile yükseklik veya eğim hakkında bilmeniz gerekenler arasındaki boşluğu kapatır."
        ],
        "imgAlt": "Çatı eğimi, merdiven açısı, rampa eğimi ve ağaç yüksekliği açısı hesaplamalarını gösteren dört panel",
        "figcaption": "Gerçek dünya açı problemleri: yükselti ve mesafeden çatı eğimi, merdiven güvenlik açısı, rampa erişilebilirlik eğimi ve ağaç yüksekliği görüş açısı."
      },
      "angle-mistakes": {
        "h2": "Açı Bulurken Yapılan Yaygın Hatalar",
        "h3s": [
          "Karşı ve Bitişik Kenarları Karıştırma",
          "Yanlış Ters Fonksiyonu Kullanma",
          "Oranın Geçerli Olması Gerektiğini Unutma",
          "Derece ve Radyanı Karıştırma",
          "Kenarları Farklı Birimlerle Girme",
          "Oranı Erken Yuvarlama",
          "Hesaplayıcının Kenar Bulduğunu Varsayma"
        ],
        "paragraphs": [
          "En sık yapılan hata. Etiketler referans açınıza bağlıdır. arctan(3/4) = 36.87° demek isterken arctan(4/3) = 53.13° hesaplarsanız yanlış açıyı çözmüşsünüzdür. Çözüm: üçgeni çizin, referans açınızı işaretleyin, ardından karşıyı (karşısında) ve bitişiği (ona değen) etiketleyin.",
          "Arksinüsü bitişik bölü hipotenüs oranına uygulamak bir hata mesajı değil, hedeflenen açının tümlerini verir. Arcsin(4/5) = 53.13°, A açısı değil B açısıdır. Çözüm: fonksiyonu yukarıdaki tabloyu kullanarak bilinen kenarlarınızla eşleştirin.",
          "Arksinüs ve arkkosinüs 0 ile 1 arasında oranlar gerektirir. Karşı = 5 ve hipotenüs = 3 girerseniz, 1.67 oranının arksinüsü yoktur. Bu her zaman kenarların yanlış etiketlendiği anlamına gelir: hipotenüs en uzun kenar ve payda olmalıdır. Çözüm: en uzun ölçümü hipotenüs (c) olarak yeniden atayın.",
          "Hesaplayıcılarda ve kodda ters trigonometri genellikle varsayılan olarak radyandır. Arctan(1) derece olarak 45°'dir ancak radyan olarak 0.785'tir. Bu hesaplayıcı derece verir. 3-4-5 üçgeni için el hesabınız 0.64 veriyorsa radyandasınızdır; 36.87° elde etmek için 180/π ile çarpın.",
          "Karşıyı inç, hipotenüsü fit cinsinden girmek oranı bozar. Önce ortak bir birime dönüştürün. Oran birimsizdir, ancak yalnızca iki girdi de aynı birimi paylaştığında.",
          "Arcsin(0.6) = 36.87°'dir, ancak 0.596'dan yuvarlanan arcsin(0.60) 36.58° verir. Ters fonksiyonların en dik olduğu 0 ve 1'e yakın yerlerde küçük oran hataları büyür. Hesaplama boyunca tam hassasiyeti koruyun, yalnızca son açıyı yuvarlayın.",
          "Bu sayfa kenarlardan açı bulur. Açılardan kenar bulmaz. Açıdan kenar problemleri için özel kenar hesaplayıcısını kullanın. Her aracın tek bir işi vardır."
        ]
      },
      "angle-precision": {
        "h2": "Açı Hassasiyeti ve Birimleri",
        "h3s": [
          "Girdi Hatası Açıyı Nasıl Etkiler",
          "Derece ve Derece-Dakika-Saniye",
          "Tam Dereceler Ne Zaman Yeterlidir"
        ],
        "paragraphs": [
          "Açı sonuçları, arkasındaki kenar ölçümleri kadar hassastır. Milimetreye kadar okunan bir şerit metre, açıda iki ondalık basamağı destekler. Arazide adımla ölçülen bir mesafe en iyi ihtimalle tam dereceleri destekler. Hesaplayıcı tam kayan nokta hassasiyetiyle hesaplar; yuvarlama kararı sizindir.",
          "Ters fonksiyonların en dik olduğu, oranın 0 veya 1'e yakın olduğu durumlarda küçük kenar hataları daha büyük açı hatalarına yol açar. 45°'ye yakın arktanjant için orandaki %1'lik hata açıyı yaklaşık 0.3° kaydırır. 5° veya 85°'ye yakınken orandaki aynı %1'lik hata açıyı 0.5°'den fazla kaydırır. Aşırı açılarda dikkatle ölçün veya birden fazla ölçüm alıp ortalamasını kullanın.",
          "Haritacılar açıları bazen derece, dakika ve saniye (DMS) olarak ifade eder. 36.87°'yi DMS'ye dönüştürmek için: tam dereceler 36'dır, kesirli 0.87°'nin 60 ile çarpımı 52.2 dakika verir ve 0.2 dakikanın 60 ile çarpımı 12 saniye verir, sonuç 36° 52′ 12″ olur. Bu hesaplayıcı ondalık derece verir; dakika için kesri 60 ile çarpın.",
          "Marangozluk kesim açıları, merdiven yerleşim kontrolleri ve kaba eğim tahminleri nadiren ondalık basamak gerektirir. Malzeme siparişi için en yakın dereceye yuvarlanmış çatı eğimi fazlasıyla yeterlidir. Toleransların sıkı olduğu talaşlı imalat, optik hizalama ve mühendislik hesaplamaları için iki ondalık basamak hassasiyetini saklayın."
        ]
      },
      "angle-verify": {
        "h2": "Açı Cevabınızı Doğrulama",
        "paragraphs": [
          "Üç kontrol, doğru bir açı hesaplamasını doğrular:",
          "Kritik işler için kenarların Pisagor teoremini sağladığını da doğrulayın. 3-4-5 üçgeninde 9 + 16 = 25, onlardan türetilen açılara güvenmeden önce kenarları doğrular."
        ],
        "listItems": [
          "<strong>Aralık kontrolü.</strong> İki dar açı da kesinlikle 0° ile 90° arasında olmalıdır. 0°, 90° veya üzeri bir açı, geçersiz girdileri veya yanlış etiketlenmiş bir üçgeni gösterir.",
          "<strong>Toplam kontrolü.</strong> A + B tam olarak 90°'ye eşit olmalıdır. İki açınızın toplamı 89.9° veya 90.1° ise bunu yuvarlama açıklar. Daha büyük farklar bir hataya işaret eder.",
          "<strong>Yöntemler arası kontrol.</strong> Aynı açıyı farklı bir ters fonksiyonla yeniden hesaplayın. arcsin(3/5) = 36.87° ve arctan(3/4) = 36.87° ise cevap sağlamdır. Uyuşmazlık bir etiketleme hatasına işaret eder."
        ]
      },
      "angle-related": {
        "h2": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin"
      },
      "angle-conclusion": {
        "h2": "Her Dik Üçgen Açısını Güvenle Bulun",
        "paragraphs": [
          "Üçgeninizi etiketleyerek başlayın: önce hipotenüs, ardından hedef açınıza göre karşı ve bitişik kenar. Bilinen kenarlarınıza uyan ters fonksiyonu seçin: karşı ve hipotenüs için arksinüs, bitişik ve hipotenüs için arkkosinüs, iki dik kenar için arktanjant. Ölçümleri girin, açıyı derece cinsinden okuyun, ardından ikinci açıyı 90 eksi birinciden bulun. Aralık kontrolü, toplam kontrolü ve yöntemler arası hesaplamayla doğrulayın. Bu adımlarla her dik üçgen açı problemi güvenilir bir rutine indirgenir. Sayılarınızı hesaplamak için bu sayfanın üstündeki hesaplayıcıya dönün."
        ]
      }
    },
    "faqs": [
      {
        "question": "Dik üçgende açı nasıl bulunur?",
        "answer": "Bir kenar oranı üzerinde ters trigonometrik fonksiyon kullanın. Karşı ve hipotenüs ile arcsin(karşı/hipotenüs) hesaplayın. Bitişik ve hipotenüs ile arccos(bitişik/hipotenüs) kullanın. İki dik kenar ile arctan(karşı/bitişik) kullanın. Sonuç, açının derece cinsinden değeridir."
      },
      {
        "question": "Sin ile arcsin arasındaki fark nedir?",
        "answer": "Sinüs bir açı alır ve bir oran verir: sin(30°) = 0.5. Arksinüs bunu tersine çevirir: bir oran alır ve açıyı verir, yani arcsin(0.5) = 30°. Açıyı biliyor ve bir kenara ihtiyacınız varsa sinüs kullanın; kenarları biliyor ve açıya ihtiyacınız varsa arksinüs kullanın."
      },
      {
        "question": "Arksinüs yerine arktanjantı ne zaman kullanmalıyım?",
        "answer": "İki dik kenarı (karşı ve bitişik) biliyor ancak hipotenüsü bilmiyorsanız arktanjant kullanın. Arktanjant hipotenüsü tamamen atlar, bu da yükseltinin ve mesafenin doğrudan ölçüldüğü çatı eğimi gibi saha ölçümlerinde bir adım kazandırır. Hipotenüs bilinen kenarlarınızdan biriyse arksinüs kullanın."
      },
      {
        "question": "İki dar açının toplamı neden 90 derecedir?",
        "answer": "Üçgenin açılarının toplamı her zaman 180 derecedir. Dik açı bunun 90'ını alır ve diğer ikisinin toplamına 90 kalır. Bu, A + B = 90° anlamına gelir; yani bir dar açıyı bulmak diğerini hemen çıkarma ile verir."
      },
      {
        "question": "Açı 90 derece olabilir mi?",
        "answer": "Hayır. 90 derecelik açı, verilen C köşesindeki dik açıdır. Hesaplayıcı, her biri kesinlikle 0° ile 90° arasında olan iki dar açı A ve B'yi bulur. Sonucunuz 0° veya 90°'ye ulaşırsa, girdiler geçerli bir üçgeni değil, yozlaşmış bir üçgeni tanımlar."
      },
      {
        "question": "Kenar oranım 1'den büyükse ne olur?",
        "answer": "Arksinüs ve arkkosinüs için 1'in üzerindeki bir oran imkânsızdır ve kenarların yanlış etiketlendiğini gösterir. Hipotenüs en uzun kenar ve payda olmalıdır. En uzun ölçümü hipotenüs (c) olarak yeniden atayın ve yeniden hesaplayın. Arktanjant oranları meşru şekilde 1'i aşabilir."
      },
      {
        "question": "Hangi kenarın karşı, hangisinin bitişik olduğunu nasıl anlarım?",
        "answer": "Önce referans açınızı seçin. Karşı kenar bu açının karşısındadır (köşesine değmez). Bitişik kenar açı köşesine değer ancak hipotenüs değildir. Aynı fiziksel kenar bir dar açı için karşı, diğeri için bitişiktir."
      },
      {
        "question": "Arksinüs, arkkosinüs ve arktanjant neden aynı cevabı verir?",
        "answer": "Çünkü aynı geometrik açıyı farklı kenar çiftleri üzerinden tanımlarlar. 3-4-5 üçgeninde arcsin(3/5), arccos(4/5) ve arctan(3/4) hepsi 36.87°'ye eşittir. Bu uyum güçlü bir doğrulamadır: iki yöntem uyuşmazsa bir kenar yanlış etiketlenmiştir."
      },
      {
        "question": "Açılar derece mi yoksa radyan mı olmalı?",
        "answer": "Bu hesaplayıcı derece kullanır; bu, inşaat, navigasyon ve sınıf geometrisi için standarttır. Bilimsel hesaplayıcıyla el ile hesaplıyorsanız derece modunda olduğunu kontrol edin. 3-4-5 üçgeni için 0.64 gibi bir radyan sonucu, 180/π ile çarpılarak 36.87°'ye dönüştürülür."
      },
      {
        "question": "Açı cevabım ne kadar hassas olmalı?",
        "answer": "Girdi hassasiyetinize uyun. Kenarlar en yakın santimetreye kadar ölçülmüşse iki ondalık basamak (36.87°) uygundur. Kaba saha tahminleri için tam dereceler yeterlidir. Hesaplama sırasında tam hassasiyeti koruyun ve yalnızca son cevabı yuvarlayın."
      },
      {
        "question": "Yalnızca bir kenar biliniyorsa açı bulunabilir mi?",
        "answer": "Hayır. Bir kenar yeterli değildir; sonsuz sayıda dik üçgen tek bir kenar uzunluğunu paylaşır. İki kenara (ters trig için) veya bir kenar artı bir dar açıya (tümler kuralı için) ihtiyacınız vardır. Hesaplayıcı tam olarak iki girdi gerektirir."
      },
      {
        "question": "Açımın doğru olduğunu nasıl kontrol edebilirim?",
        "answer": "Üç kontrol: iki açının da 0° ile 90° arasında olması gerekir, toplamları tam olarak 90° olmalıdır ve farklı bir ters fonksiyonla yeniden hesaplama aynı sonucu vermelidir. 3-4-5 üçgeni için arcsin(3/5) = 36.87° ve arctan(3/4) = 36.87° birbirini doğrular."
      }
    ],
    "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
    "relatedIntro": "Açınızı bulduktan sonra, üçgen analizinizi tamamlamak için bu ilgili hesaplayıcılarla devam edin.",
    "relatedItems": [
      "Dik Üçgen Kenar Hesaplayıcısı",
      "Açıdan Dik Üçgen Kenar Hesaplayıcısı",
      "Trigonometrik Oranlar Hesaplayıcısı",
      "Dik Üçgen Hesaplayıcısı (Hepsi Bir Arada)",
      "Pisagor Teoremi Hesaplayıcısı",
      "Özel Dik Üçgen Hesaplayıcısı"
    ]
  },
  "sv": {
    "faqs": [
      {
        "answer": "Använd en invers trigonometrisk funktion på en sidkvot. Med motstående och hypotenusa, beräkna arcsin(motstående/hypotenusa). Med närliggande och hypotenusa, använd arccos(närliggande/hypotenusa). Med båda kateterna, använd arctan(motstående/närliggande). Resultatet är vinkeln i grader.",
        "question": "Hur hittar man en vinkel i en rätvinklig triangel?"
      },
      {
        "answer": "Sinus tar en vinkel och returnerar en kvot: sin(30°) = 0.5. Arcsin vänder på detta: det tar en kvot och returnerar vinkeln, så arcsin(0.5) = 30°. Använd sinus när du känner till vinkeln och behöver en sida; använd arcsin när du känner till sidorna och behöver vinkeln.",
        "question": "Vad är skillnaden mellan sin och arcsin?"
      },
      {
        "answer": "Använd arctan när du känner till båda kateterna (motstående och närliggande) men inte hypotenusan. Arctan hoppar helt över hypotenusan, vilket sparar ett steg i fältmätningar som taklutning där stigning och löpning mäts direkt. Använd arcsin när hypotenusan är en av dina kända sidor.",
        "question": "När ska jag använda arctan istället för arcsin?"
      },
      {
        "answer": "Triangelns vinklar summerar alltid till 180 grader. Den räta vinkeln tar 90 av dem, vilket lämnar 90 till de andra två tillsammans. Detta betyder att A + B = 90°, så att hitta en spetsig vinkel ger omedelbart den andra genom subtraktion.",
        "question": "Varför summerar de två spetsiga vinklarna till 90 grader?"
      },
      {
        "answer": "Nej. 90-gradersvinkeln är den räta vinkeln i hörn C, som är given. Räknaren hittar de två spetsiga vinklarna A och B, vardera strikt mellan 0° och 90°. Om ditt resultat når 0° eller 90° beskriver indata en degenererad triangel, inte en giltig.",
        "question": "Kan vinkeln vara 90 grader?"
      },
      {
        "answer": "För arcsin och arccos är en kvot över 1 omöjlig och signalerar felmärkta sidor. Hypotenusan måste vara den längsta sidan och nämnaren. Tilldela den längsta mätningen som hypotenusa (c) och räkna om. Arctan-kvoter kan legitimt överstiga 1.",
        "question": "Vad händer om min sidkvot är större än 1?"
      },
      {
        "answer": "Välj din referensvinkel först. Den motstående sidan sitter mitt emot den vinkeln (rör inte dess hörn). Den närliggande sidan rör vinkelhörnet men är inte hypotenusan. Samma fysiska sida är motstående för den ena spetsiga vinkeln och närliggande för den andra.",
        "question": "Hur vet jag vilken sida som är motstående och vilken som är närliggande?"
      },
      {
        "answer": "Eftersom de beskriver samma geometriska vinkel genom olika sidpar. I en 3-4-5-triangel är arcsin(3/5), arccos(4/5) och arctan(3/4) alla lika med 36.87°. Denna överensstämmelse är en kraftfull verifiering: om två metoder inte stämmer överens är en sida felmärkt.",
        "question": "Varför ger arcsin, arccos och arctan samma svar?"
      },
      {
        "answer": "Denna räknare använder grader, standarden för bygg, navigation och skolgeometri. Om du räknar för hand på en vetenskaplig räknare, kontrollera att den är i gradläge. Ett radianlägesresultat som 0.64 för en 3-4-5-triangel konverteras till 36.87° genom att multiplicera med 180/π.",
        "question": "Ska vinklar vara i grader eller radianer?"
      },
      {
        "answer": "Matcha din inmatningsprecision. Om sidor mäts till närmaste centimeter är två decimaler (36.87°) lämpligt. För grova fältuppskattningar räcker hela grader. Behåll full precision under beräkningen och avrunda endast det slutliga svaret.",
        "question": "Hur precis ska mitt vinkelsvar vara?"
      },
      {
        "answer": "Nej. En sida räcker inte; oändligt många rätvinkliga trianglar delar en enskild sidlängd. Du behöver två sidor (för invers trig) eller en sida plus en spetsig vinkel (för komplementregeln). Räknaren kräver exakt två indata.",
        "question": "Kan jag hitta en vinkel med bara en känd sida?"
      },
      {
        "answer": "Tre kontroller: båda vinklarna måste ligga mellan 0° och 90°, de måste summera till exakt 90°, och omräkning med en annan invers funktion bör ge samma resultat. För en 3-4-5-triangel bekräftar arcsin(3/5) = 36.87° och arctan(3/4) = 36.87° varandra.",
        "question": "Hur kan jag kontrollera att min vinkel är korrekt?"
      }
    ],
    "relatedHeading": "Utforska relaterade rätvinkliga triangelräknare",
    "relatedIntro": "När du har hittat din vinkel, fortsätt med dessa relaterade räknare för att slutföra din triangelanalys.",
    "relatedItems": [
      "Rätvinklig triangel sidräknare",
      "Räknare för sida från vinkel i rätvinklig triangel",
      "Räknare för trigonometriska kvoter",
      "Rätvinklig triangelräknare (allt-i-ett)",
      "Pythagoras sats-räknare",
      "Räknare för speciella rätvinkliga trianglar"
    ],
    "sections": {
      "angle-anatomy": {
        "figcaption": "Vinkelanatomi: C är den 90-graders räta vinkeln, A och B är spetsiga och summerar till 90 grader. Sidorna a, b, c är betecknade i förhållande till vinkel A.",
        "h2": "Förstå vinklar i en rätvinklig triangel",
        "h3s": [
          "Vilka är de tre vinklarna?",
          "Hur namnges sidorna i förhållande till en vinkel?",
          "Varför spelar referensvinkeln någon roll?"
        ],
        "imgAlt": "Rätvinklig triangel med vinklarna A, B, C markerade, sidorna a, b, c visade, rät vinkel vid C",
        "paragraphs": [
          "Varje rätvinklig triangel har tre vinklar: en rät vinkel som mäter exakt 90 grader, och två spetsiga vinklar som vardera mäter mindre än 90 grader. Den räta vinkeln sitter i hörn C. De spetsiga vinklarna sitter i hörn A och B. Eftersom triangelns vinklar summerar till 180 grader måste de två spetsiga vinklarna tillsammans bli 90 grader.",
          "Sidornas namn beror på vilken vinkel du mäter. För vinkel A: sidan mitt emot A (som inte rör hörn A) kallas den motstående sidan, betecknad a. Sidan som rör hörn A men inte är hypotenusan är den närliggande sidan, betecknad b. Hypotenusan, betecknad c, ligger mitt emot den räta vinkeln och är alltid den längsta sidan. Om du byter till att mäta vinkel B byter beteckningarna plats: sidan mitt emot B blir den nya motstående sidan.",
          "Samma fysiska sida kan vara motstående för den ena vinkeln och närliggande för den andra. I en 3-4-5-triangel, om vinkel A sitter mellan sidan med längden 4 och hypotenusan, är sidan med längden 3 motstående A. För vinkel B i det andra hörnet blir sidan med längden 3 närliggande och sidan med längden 4 blir motstående. Identifiera alltid din referensvinkel innan du väljer formel."
        ]
      },
      "angle-applications": {
        "figcaption": "Verkliga vinkelproblem: taklutning från stigning och löpning, stegsäkerhetsvinkel, ramptillgänglighetslutning och trädhöjdssynvinkel.",
        "h2": "Användningsområden i verkligheten",
        "h3s": [
          "Bygg och snickeri",
          "Säkerhet och tillgänglighet",
          "Inmätning och friluftsliv"
        ],
        "imgAlt": "Fyra paneler som visar beräkningar av taklutning, stegvinkel, ramplutning och trädhjdsvinkel",
        "paragraphs": [
          "Vinkelberäkningar dyker upp överallt där lutningar, fall och siktlinjer spelar roll. De sexton exemplen ovan spänner över bygg, tillgänglighet, inmätning och utbildning. Här är mönstren bakom dem.",
          "Taklutning (exempel 5: 18.43°), takstolsvinklar (exempel 10: 22.62°) och trapplutning (exempel 12: 34.99°) använder alla arctan eller arccos på direkta fältmätningar. Snickare arbetar i stigning-över-löpning eftersom det är dimensionerna på ritningarna. Räknaren omvandlar dessa dimensioner till sågvinklar.",
          "Stegplacering (exempel 6: 66.04°) och rullstolsramper (exempel 7: 4.76°) har säkerhetströsklar uttryckta som vinklar. En stege vid 66° står för flackt; riktlinjen på 75° motsvarar ett 3.73-mot-1-förhållande. En ramp vid 4.76° uppfyller tillgänglighetsmaximet 1:12. Räknaren gör godkänt/icke-godkänt-vinkelkontroller till snabba verifieringar.",
          "Trädhjdsvinklar (exempel 8: 30.96°), backlutningar (exempel 15: 13.34°) och inmätningssiktlinjer (exempel 13: 30.26°) använder klinometeravläsningar och uppmätta sträckor. Vinkeln överbryggar klyftan mellan vad du kan mäta på marken och vad du behöver veta om höjd eller lutning."
        ]
      },
      "angle-arccos": {
        "h2": "Hitta vinklar med arccos",
        "h3s": [
          "Exempel 10: Takstolsvinkel (arccos)",
          "Exempel: 5-12-13-triangeln",
          "När arccos slår arcsin"
        ],
        "paragraphs": [
          "Använd arccos när du känner till sidan närliggande din målvinkel och hypotenusan. Formeln är [[A = \\cos^{-1}(b/c)]]. Precis som med arcsin måste kvoten ligga mellan 0 och 1. Arccos är naturligt när den närliggande sidan är enklast att mäta, till exempel takets horisontella löpning eller basavståndet vid inmätning.",
          "En takstol har en horisontell löpning på 6 meter och en takstolslängd (hypotenusa) på 6.5 meter. Hitta lutningsvinkeln vid takfoten. A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°. Detta är en måttlig taklutning. Komplementet, 67.38°, är vinkeln mellan takstolen och den vertikala väggen.",
          "Givet närliggande b = 12 och hypotenusa c = 13, hitta vinkel A. A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. Komplementet B = 67.38°. Observera att arccos(5/13) skulle ge 67.38° direkt, med sidan med längden 5 som närliggande vinkel B.",
          "Välj arccos när den närliggande mätningen är mer tillförlitlig än den motstående. Vid takstolsbygge mäts den horisontella löpningen ofta direkt längs takbjälken, medan den vertikala stigningen måste lodas. Ju noggrannare indata, desto noggrannare vinkel. Båda funktionerna är matematiskt likvärdiga för samma triangel; valet handlar om mätnoggrannhet."
        ]
      },
      "angle-arcsin": {
        "h2": "Hitta vinklar med arcsin",
        "h3s": [
          "Exempel 1: 3-4-5-triangeln",
          "Exempel 2: Samma triangel, arccos-kontroll",
          "Exempel 3: Samma triangel, arctan-kontroll",
          "Exempel 4: Hitta komplementet",
          "Exempel 11: Brant lutning (arcsin)"
        ],
        "paragraphs": [
          "Använd arcsin när du känner till sidan mitt emot din målvinkel och hypotenusan. Formeln är [[A = \\sin^{-1}(a/c)]]. Kvoten måste ligga mellan 0 och 1. Om din kvot överstiger 1 har du felmärkt sidorna: hypotenusan måste vara nämnaren.",
          "Givet motstående sida a = 3 och hypotenusa c = 5, hitta vinkel A. Steg 1: Skriv formeln. A = arcsin(a/c).<br />Steg 2: Sätt in. A = arcsin(3/5).<br />Steg 3: Beräkna kvoten. 3/5 = 0.6.<br />Steg 4: Tillämpa arcsin. A = arcsin(0.6) ≈ 36.87°. Vinkeln är cirka 36.87 grader. Komplementet B = 90° − 36.87° = 53.13°.",
          "Givet närliggande sida b = 4 och hypotenusa c = 5, hitta vinkel A med arccos. A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. Detta stämmer exakt med exempel 1, vilket bekräftar att båda metoderna beskriver samma vinkel. När två metoder stämmer överens är dina sidbeteckningar korrekta.",
          "Givet motstående a = 3 och närliggande b = 4, hitta vinkel A med arctan. A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°. Alla tre inversa funktioner landar på samma svar för samma triangel. Denna tredubbla överensstämmelse är den starkaste verifiering som finns.",
          "Givet vinkel A = 36.87° från exempel 1, hitta vinkel B. B = 90° − A = 90° − 36.87° = 53.13°. Ingen trigonometri behövs. Du kan verifiera genom att beräkna arcsin(4/5) = 53.13° och behandla sidan med längden 4 som motstående vinkel B.",
          "En kabellina stiger 7 meter över en hypotenuslängd på 25 meter. Hitta lutningsvinkeln. A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°. Detta är en mild lutning, typisk för tillgängliga ramper eller transportörlutningar. Den flacka vinkeln innebär att det mesta av kabellängden går åt horisontell sträcka snarare än höjd."
        ]
      },
      "angle-arctan": {
        "h2": "Hitta vinklar med arctan",
        "h3s": [
          "Exempel 5: Taklutning (arctan)",
          "Exempel 6: Stegplacering (arctan)",
          "Exempel 7: Rullstolsramp (arctan)",
          "Exempel 8: Trädhjdsvinkel (arctan)",
          "Exempel 9: Lastramp (arctan)",
          "Exempel 14: Stödstag (arctan)",
          "Exempel 15: Backsluttning (arcsin)",
          "Exempel 12: Trapplutning (arctan)",
          "Exempel 13: Inmätningslutning (arctan)",
          "Exempel 16: Komplementgenväg"
        ],
        "paragraphs": [
          "Använd arctan när du känner till båda kateterna men inte hypotenusan. Formeln är [[A = \\tan^{-1}(a/b)]]. Kvoten a/b kan vara vilket positivt värde som helst. Arctan är fältarbetets arbetshäst: stigning över löpning är det vanligaste måttparet inom bygg, trädgårdsanläggning och vägdesign.",
          "Ett tak stiger 4 fot över en horisontell löpning på 12 fot. Hitta lutningsvinkeln. Steg 1: Identifiera motstående (stigning) = 4, närliggande (löpning) = 12.<br />Steg 2: A = arctan(4/12) = arctan(0.3333).<br />Steg 3: A ≈ 18.43°. En lutning på 18.43 grader är en vanlig taklutning för bostadshus, tillräckligt brant för att leda bort vatten men gångbar med försiktighet. I taktermer är detta en 4-på-12-lutning.",
          "En stege når 4.5 meter upp på en vägg med basen 2 meter från väggen. Hitta vinkeln mellan stegen och marken. A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°. Säkerhetsriktlinjer rekommenderar stegvinklar nära 75 grader (ett 4-mot-1-förhållande). Vid 66 grader står stegen för flackt och bör flyttas närmare väggen.",
          "En ramp stiger 0.75 meter över en 9-meters löpning. Hitta lutningsvinkeln. A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°. Tillgänglighetsstandarder kräver vanligtvis lutningar som inte är brantare än cirka 4.8 grader (ett 1:12-förhållande). Denna ramp på 4.76° uppfyller precis riktlinjen.",
          "En observatör står 20 meter från ett träd. Klinometern visar trädtoppen i en vinkel som motsvarar en 12-meters motstående sida. Hitta synvinkeln. A = arctan(12/20) = arctan(0.6) ≈ 30.96°. Tillsammans med observatörens ögonhöjd låter denna vinkel skogsmätare uppskatta trädhöjden utan att klättra.",
          "En lastramp stiger 2.5 meter över en 10-meters löpning. Hitta lutningsvinkeln. A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°. Det verifierade värdet är 14.48°, vilket återspeglar exakta inmatade värden. Hur som helst är detta en måttlig lutning som passar handtruckar men är brant för tunga palldragare.",
          "Ett diagonalt stag spänner 1.2 meter vertikalt och 3.5 meter horisontellt. Hitta stagets vinkel. A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°. Denna flacka vinkel innebär att staget främst verkar i horisontellt skjuvmotstånd snarare än vertikal lastöverföring.",
          "En backstig klättrar 3 meter längs en 13-meters lutningssträcka. Hitta lutningsvinkeln. A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°. Detta är en måttligt brant vandringsgrad. Stigdesigners använder dessa vinklar för att planera serpentinvägar när den direkta rutten överstiger bekväma klättringsvinklar.",
          "En trappa stiger 2.8 meter över en horisontell löpning på 4 meter. Hitta lutningsvinkeln. A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°. Detta är en bekväm trapplutning. Byggregler begränsar vanligtvis trappvinklar till cirka 37 grader max för bostäder, så denna design uppfyller kraven.",
          "En lantmätare mäter en 7-meters höjdskillnad över en 12-meters horisontell sträcka. Hitta lutningsvinkeln. A = arctan(7/12) = arctan(0.5833) ≈ 30.26°. Denna branta lutning skulle kräva serpentinvägar för en väg eller stig. Väg- och vatteningenjörer använder dessa vinklar för att bestämma schakt- och fyllningsbehov.",
          "Givet vinkel A = 32°, hitta vinkel B utan trigonometri. B = 90° − 32° = 58°. Detta komplementläge är den snabbaste beräkningen på sidan när en spetsig vinkel redan är känd från en gradskiva, en digital lutningsmätare eller en tidigare beräkning."
        ]
      },
      "angle-choose": {
        "h2": "När ska man använda varje metod",
        "h3s": [
          "Arcsin är bäst när",
          "Arccos är bäst när",
          "Arctan är bäst när",
          "Komplement är bäst när"
        ],
        "paragraphs": [
          "Alla tre inversa funktioner ger samma vinkel för samma triangel. Valet beror på vilka sidor du känner till och vilka mätningar som är mest tillförlitliga.",
          "Du känner till sidan mitt emot din målvinkel och hypotenusan. Detta händer i höjdproblem: den vertikala höjden är mitt emot marknivåvinkeln, och lutningssträckan är hypotenusan. Trädhöjd, byggnadshöjd och kabelhängproblem gynnar arcsin.",
          "Du känner till sidan närliggande din målvinkel och hypotenusan. Takstolsbygge gynnar arccos eftersom den horisontella löpningen (närliggande) mäts direkt längs bjälken. Inmätningsbaslinjer gynnar också arccos när markavståndet är den tillförlitliga mätningen.",
          "Du känner till båda kateterna men inte hypotenusan. Detta är den vanligaste fältsituationen: stigning och löpning mäts direkt, medan hypotenusan skulle kräva en separat beräkning. Arctan hoppar helt över hypotenusan. Närhelst du kan mäta båda kateterna är arctan den snabbaste vägen.",
          "Du känner redan till en spetsig vinkel. Inga sidmätningar behövs. Använd den efter varje invers beräkning för att få den andra vinkeln, eller när en gradskiva eller digital lutningsmätare ger dig en vinkel direkt."
        ],
        "table": {
          "headers": [
            "Kända sidor",
            "Metod",
            "Formel"
          ],
          "rows": [
            [
              "Motstående (a) och hypotenusa (c)",
              "Arcsin",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "Närliggande (b) och hypotenusa (c)",
              "Arccos",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "Motstående (a) och närliggande (b)",
              "Arctan",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "En spetsig vinkel",
              "Komplement",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-complement": {
        "h2": "Komplementvinklar: A + B = 90 grader",
        "paragraphs": [
          "De två spetsiga vinklarna i en rätvinklig triangel är komplementära, vilket betyder att de summerar till exakt 90 grader. Detta ger sambandet [[A + B = 90^\\circ]]. När du har hittat en spetsig vinkel följer den andra omedelbart genom subtraktion: B = 90 grader minus A.",
          "Detta är inte en separat mätmetod. Det är en konsekvenskontroll och en genväg. Om arcsin ger A = 36.87 grader är B = 53.13 grader utan ytterligare trigonometri. Räknaren använder detta samband i sina vinkelsummalägen.",
          "Komplementsambandet förklarar också varför sin(A) är lika med cos(B). I en 3-4-5-triangel är sin(36.87°) 0.6 och cos(53.13°) är också 0.6. Sinus för den ena spetsiga vinkeln är alltid lika med cosinus för den andra, eftersom sidan mitt emot den ena vinkeln är närliggande den andra."
        ]
      },
      "angle-conclusion": {
        "h2": "Hitta varje rätvinklig triangelvinkel med självförtroende",
        "paragraphs": [
          "Börja med att namnge din triangel: hypotenusan först, sedan motstående och närliggande i förhållande till din målvinkel. Välj den inversa funktion som matchar dina kända sidor: arcsin för motstående och hypotenusa, arccos för närliggande och hypotenusa, arctan för båda kateterna. Ange mätningarna, läs vinkeln i grader och få sedan den andra vinkeln från 90 minus den första. Verifiera med intervallkontrollen, sumkontrollen och en korsmetodberäkning. Med dessa steg reduceras varje vinkelproblem för rätvinkliga trianglar till en pålitlig rutin. Gå tillbaka till räknaren överst på sidan för att köra dina siffror."
        ]
      },
      "angle-howto": {
        "figcaption": "Det fyrastegs arbetsflödet: namnge sidorna i förhållande till din referensvinkel, välj kvoten som matchar dina kända sidor, tillämpa den inversa funktionen och verifiera sedan med komplementet.",
        "h2": "Så använder du vinkelräknaren för rätvinkliga trianglar",
        "imgAlt": "Fyrstegsprocess för att hitta vinkel A: namnge sidor, välj kvot, tillämpa invers trig, verifiera",
        "listItems": [
          "<strong>Identifiera den räta vinkeln.</strong> Bekräfta att triangeln har ett 90-graders hörn. Räknaren fungerar endast för rätvinkliga trianglar.",
          "<strong>Namnge hypotenusan.</strong> Hitta den längsta sidan, mitt emot den räta vinkeln. Beteckna den c.",
          "<strong>Välj din referensvinkel.</strong> Bestäm om du löser för vinkel A eller vinkel B. Detta avgör vilka sidor som är motstående och närliggande.",
          "<strong>Välj det matchande läget.</strong> Om du känner till motstående och hypotenusa, använd arcsin. Om du känner till närliggande och hypotenusa, använd arccos. Om du känner till båda kateterna, använd arctan. Om du känner till en spetsig vinkel, använd komplementläget.",
          "<strong>Ange de två sidlängderna.</strong> Använd samma enhet för båda (båda i meter, båda i fot osv.). Enheterna tar ut varandra i kvoten, men blandade enheter förstör kvoten.",
          "<strong>Läs resultatet i grader.</strong> Räknaren visar vinklar i grader, standardenheten för byggande, navigation och skolgeometri.",
          "<strong>Hitta den andra vinkeln.</strong> Subtrahera från 90 grader, eller kör räknaren igen med den andra vinkeln som referens.",
          "<strong>Verifiera.</strong> Kontrollera att båda vinklarna ligger mellan 0 och 90 grader och summerar till 90. Jämför med en andra kvotmetod om precisionen är viktig."
        ],
        "paragraphs": [
          "Följ dessa steg för att hitta en okänd vinkel:"
        ]
      },
      "angle-intro": {
        "h2": "Vad är en vinkelräknare för rätvinkliga trianglar?",
        "paragraphs": [
          "En vinkelräknare för rätvinkliga trianglar hittar de okända spetsiga vinklarna i en rätvinklig triangel när du känner till sidlängderna. Medan Pythagoras sats hittar saknade sidor, hittar inversa trigonometriska funktioner saknade vinklar. Räknaren tar två kända sidor, beräknar deras kvot och tillämpar sedan arcsin, arccos eller arctan för att få tillbaka vinkeln i grader.",
          "Vanliga användningsområden är att bestämma taklutning utifrån stigning och löpande mått, hitta stegvinklar för säker klättring, beräkna ramplutningar för tillgänglighetskrav och lösa geometriläxor. Räknaren behöver exakt två sidlängder för att fungera. Den returnerar vinkel A (mellan den närliggande kateten och hypotenusan) och vinkel B (komplementet, mellan den motstående kateten och hypotenusan).",
          "Till exempel har en rätvinklig triangel med motstående sida 3 och hypotenusa 5 vinkeln A = arcsin(3/5), vilket är cirka 36.87 grader. Den andra spetsiga vinkeln är 90 minus 36.87, alltså 53.13 grader. Den här guiden förklarar varje invers funktion, visar när du ska använda vilken, går igenom sexton genomarbetade exempel och tar upp de misstag som ger fel svar.",
          "Vinkelfinnande är motsatsen till sidfinnande. Sidräknaren börjar med vinklar och ger längder; den här räknaren börjar med längder och ger vinklar. Tillsammans löser de varje rätvinklig triangel fullständigt: med två givna sidor hittar du den tredje sidan med Pythagoras och sedan båda spetsiga vinklarna med metoderna nedan. Ingen gradskiva behövs, och resultaten har full räknarprecision."
        ]
      },
      "angle-inverse": {
        "figcaption": "De tre inversa funktionerna: arcsin använder motstående över hypotenusa, arccos använder närliggande över hypotenusa, arctan använder motstående över närliggande.",
        "h2": "Inversa trigonometriska funktioner förklarade",
        "h3s": [
          "Arcsin: motstående sida och hypotenusa",
          "Arccos: närliggande sida och hypotenusa",
          "Arctan: motstående och närliggande sida"
        ],
        "imgAlt": "Tre paneler som visar formlerna för arcsin, arccos och arctan med deras sidkvoter",
        "paragraphs": [
          "Vanliga trigonometriska funktioner tar en vinkel och returnerar en kvot. Sinus för 30 grader är 0.5. Inversa trigonometriska funktioner vänder på detta: de tar en kvot och returnerar vinkeln. Arcsin för 0.5 är 30 grader. Räknaren använder tre inversa funktioner, var och en kopplad till ett specifikt par kända sidor.",
          "När du känner till den motstående sidan (a) och hypotenusan (c), använd arcsin. Formeln är [[A = \\sin^{-1}(a/c)]]. Kvoten a/c måste ligga mellan 0 och 1, eftersom den motstående sidan alltid är kortare än hypotenusan. För en 3-4-5-triangel är A = arcsin(3/5) = arcsin(0.6), vilket är cirka 36.87 grader.",
          "När du känner till den närliggande sidan (b) och hypotenusan (c), använd arccos. Formeln är [[A = \\cos^{-1}(b/c)]]. Precis som med arcsin måste kvoten b/c ligga mellan 0 och 1. För samma 3-4-5-triangel är A = arccos(4/5) = arccos(0.8), vilket också är cirka 36.87 grader. Båda metoderna stämmer överens eftersom de beskriver samma vinkel.",
          "När du känner till båda kateterna (a och b) men inte hypotenusan, använd arctan. Formeln är [[A = \\tan^{-1}(a/b)]]. Kvoten a/b kan vara vilket positivt tal som helst. För 3-4-5-triangeln är A = arctan(3/4) = arctan(0.75), vilket är cirka 36.87 grader. Arctan är det mest praktiska valet för fältmätningar som taklutning, där de två kateterna (stigning och löpning) är de enklaste dimensionerna att mäta."
        ]
      },
      "angle-mistakes": {
        "h2": "Vanliga misstag vid vinkelfinnande",
        "h3s": [
          "Byta plats på motstående och närliggande",
          "Använda fel invers funktion",
          "Glömma att kvoten måste vara giltig",
          "Blanda grader och radianer",
          "Ange sidor i olika enheter",
          "Avrunda kvoten för tidigt",
          "Anta att räknaren hittar sidor"
        ],
        "paragraphs": [
          "Det vanligaste felet. Beteckningarna beror på din referensvinkel. Om du beräknar arctan(4/3) = 53.13° när du menade arctan(3/4) = 36.87° har du löst för fel vinkel. Åtgärd: skissa triangeln, markera din referensvinkel och namnge sedan motstående (mitt emot den) och närliggande (rör vid den).",
          "Att tillämpa arcsin på en närliggande-över-hypotenusa-kvot ger komplementet till den avsedda vinkeln, inte ett felmeddelande. Arcsin(4/5) = 53.13° är vinkel B, inte vinkel A. Åtgärd: matcha funktionen till dina kända sidor med tabellen ovan.",
          "Arcsin och arccos kräver kvoter mellan 0 och 1. Om du anger motstående = 5 och hypotenusa = 3 har kvoten 1.67 ingen arcsin. Detta betyder alltid felmärkta sidor: hypotenusan måste vara den längsta sidan och nämnaren. Åtgärd: tilldela den längsta mätningen som hypotenusa.",
          "Invers trig på räknare och i kod använder ofta radianer som standard. Arctan(1) = 45° i grader men 0.785 i radianer. Denna räknare visar grader. Om din handberäkning ger 0.64 för en 3-4-5-triangel är du i radianer; multiplicera med 180/π för att få 36.87°.",
          "Motstående i tum och hypotenusa i fot förstör kvoten. Konvertera till en gemensam enhet först. Kvoten är enhetslös, men bara när båda indata delar enhet.",
          "Arcsin(0.6) = 36.87°, men arcsin(0.60) avrundat från 0.596 ger 36.58°. Små kvotfel förstoras nära 0 och 1 där de inversa funktionerna är brantast. Behåll full precision genom beräkningen, avrunda endast den slutliga vinkeln.",
          "Denna sida hittar vinklar från sidor. Den hittar inte sidor från vinklar. För sida-från-vinkel-problem, använd den dedikerade sidräknaren. Varje verktyg har ett jobb."
        ]
      },
      "angle-precision": {
        "h2": "Vinkelprecision och enheter",
        "h3s": [
          "Hur inmatningsfel påverkar vinkeln",
          "Grader kontra grader-minuter-sekunder",
          "När hela grader räcker"
        ],
        "paragraphs": [
          "Vinkelresultat är bara så precisa som sidmätningarna bakom dem. En måttbandsavläsning till närmaste millimeter stöder två decimaler i vinkeln. En uppskattad sträcka i fält stöder i bästa fall hela grader. Räknaren beräknar med full flyttalsprecision; avrundningsbeslutet är ditt.",
          "Små sidfel orsakar större vinkelfel när kvoten ligger nära 0 eller 1, där inversa funktioner är brantast. För arctan nära 45° flyttar ett 1%-fel i kvoten vinkeln med cirka 0.3°. Nära 5° eller 85° flyttar samma 1%-kvotfel vinkeln med över 0.5°. Mät noggrant vid extrema vinklar, eller ta flera avläsningar och medelvärda.",
          "Lantmätare uttrycker ibland vinklar som grader, minuter och sekunder (DMS). För att konvertera 36.87° till DMS: de hela graderna är 36, den bråkdelade 0.87° gånger 60 ger 52.2 minuter, och 0.2 minuter gånger 60 ger 12 sekunder, vilket ger 36° 52′ 12″. Denna räknare visar decimalgrader; multiplicera bråkdelen med 60 för minuter.",
          "Snickeriets sågvinklar, stegplaceringskontroller och grova lutningsuppskattningar behöver sällan decimaler. Taklutning till närmaste grad räcker gott för materialbeställning. Spara två decimalers precision för maskinbearbetning, optisk uppriktning och ingenjörsberäkningar där toleranserna är snäva."
        ]
      },
      "angle-related": {
        "h2": "Utforska relaterade rätvinkliga triangelräknare"
      },
      "angle-verify": {
        "h2": "Verifiera ditt vinkelsvar",
        "listItems": [
          "<strong>Intervallkontroll.</strong> Båda spetsiga vinklarna måste ligga strikt mellan 0° och 90°. En vinkel på 0°, 90° eller däröver signalerar ogiltiga indata eller en felmärkt triangel.",
          "<strong>Sumkontroll.</strong> A + B måste vara exakt 90°. Om dina två vinklar summerar till 89.9° eller 90.1° förklarar avrundning det. Större glapp tyder på ett fel.",
          "<strong>Korsmetodkontroll.</strong> Räkna om samma vinkel med en annan invers funktion. Om arcsin(3/5) = 36.87° och arctan(3/4) = 36.87° är svaret solitt. Oenighet pekar på ett märkningsfel."
        ],
        "paragraphs": [
          "Tre kontroller bekräftar en korrekt vinkelberäkning:",
          "För kritiskt arbete, verifiera också att sidorna uppfyller Pythagoras sats. I en 3-4-5-triangel bekräftar 9 + 16 = 25 sidorna innan du litar på vinklarna som härletts från dem."
        ]
      }
    },
    "tocHeading": "I den här guiden",
    "tocItems": {
      "angle-anatomy": "Förstå vinklar i en rätvinklig triangel",
      "angle-applications": "Användningsområden i verkligheten",
      "angle-arccos": "Hitta vinklar med arccos",
      "angle-arcsin": "Hitta vinklar med arcsin",
      "angle-arctan": "Hitta vinklar med arctan",
      "angle-choose": "När ska man använda varje metod",
      "angle-complement": "Komplementvinklar",
      "angle-faq": "Vanliga frågor",
      "angle-howto": "Så använder du vinkelräknaren",
      "angle-intro": "Vad är en vinkelräknare för rätvinkliga trianglar?",
      "angle-inverse": "Inversa trigonometriska funktioner",
      "angle-mistakes": "Vanliga misstag",
      "angle-precision": "Vinkelprecision och enheter",
      "angle-related": "Relaterade räknare",
      "angle-verify": "Kontrollera ditt svar"
    }
  },
  "zh": {
    "faqs": [
      {
        "answer": "对边比值使用反三角函数。已知对边和斜边，计算 arcsin(对边/斜边)；已知邻边和斜边，使用 arccos(邻边/斜边)；已知两条直角边，使用 arctan(对边/邻边)。结果即为以度为单位的角度。",
        "question": "如何在直角三角形中求角度？"
      },
      {
        "answer": "正弦取一个角并返回比值：sin(30°) = 0.5。反正弦则相反：取比值并返回角度，所以 arcsin(0.5) = 30°。已知角求边时用正弦；已知边求角时用反正弦。",
        "question": "sin 和 arcsin 有什么区别？"
      },
      {
        "answer": "已知两条直角边（对边和邻边）但不知斜边时用反正切。反正切完全跳过斜边，在屋顶坡度这类高度和水平距离直接测量的野外测量中省去一步。斜边是已知边之一时用反正弦。",
        "question": "什么时候用 arctan 而不用 arcsin？"
      },
      {
        "answer": "三角形内角和恒为 180 度。直角占去 90 度，剩下 90 度分给另外两角。这意味着 A + B = 90°，所以求出一个锐角后，减法立即给出另一个。",
        "question": "为什么两个锐角相加为 90 度？"
      },
      {
        "answer": "不可以。90 度的角是顶点 C 处的直角，是已知的。计算器求的是两个锐角 A 和 B，每个都严格在 0° 和 90° 之间。如果结果触及 0° 或 90°，输入描述的是退化三角形，而非有效三角形。",
        "question": "角度可以是 90 度吗？"
      },
      {
        "answer": "对反正弦和反余弦而言，大于 1 的比值不可能出现，说明边标错了。斜边必须是最长的边且为分母。把最长的测量值重新指定为斜边 (c) 再计算。反正切的比值大于 1 是合法的。",
        "question": "如果边比值大于 1 怎么办？"
      },
      {
        "answer": "先选定参考角。对边位于该角对面（不接触其顶点）；邻边接触角的顶点但不是斜边。同一条物理边，对一个锐角是对边，对另一个锐角就是邻边。",
        "question": "怎么判断哪条边是对边、哪条是邻边？"
      },
      {
        "answer": "因为它们通过不同的边组合描述同一个几何角。在 3-4-5 三角形中，arcsin(3/5)、arccos(4/5) 和 arctan(3/4) 都等于 36.87°。这种一致是强有力的验证：若两种方法不一致，说明某条边标错了。",
        "question": "为什么反正弦、反余弦、反正切给出相同答案？"
      },
      {
        "answer": "本计算器使用度，这是建筑、导航和课堂几何的标准。如果用科学计算器手算，请检查是否处于角度模式。3-4-5 三角形在弧度模式下的结果如 0.64，乘以 180/π 即可换算为 36.87°。",
        "question": "角度应该用度还是弧度？"
      },
      {
        "answer": "与输入精度匹配。边量到厘米时，两位小数（36.87°）合适；粗略的野外估算用整数度即可。计算全程保持完整精度，只对最终答案舍入。",
        "question": "角度答案应该精确到什么程度？"
      },
      {
        "answer": "不能。一条边不够；无数个直角三角形可以共用同一条边长。你需要两条边（用反三角函数）或一条边加一个锐角（用互余规则）。计算器恰好需要两个输入。",
        "question": "只知道一条边能求角度吗？"
      },
      {
        "answer": "三项检查：两角都必须在 0° 和 90° 之间，两角之和必须恰好为 90°，用另一种反函数重新计算应得到相同结果。对于 3-4-5 三角形，arcsin(3/5) = 36.87° 与 arctan(3/4) = 36.87° 相互印证。",
        "question": "如何检查我的角度是否正确？"
      }
    ],
    "relatedHeading": "探索相关的直角三角形计算器",
    "relatedIntro": "求出角度后，继续使用这些相关计算器，完成你的三角形分析。",
    "relatedItems": [
      "直角三角形边长计算器",
      "直角三角形由角求边计算器",
      "三角比计算器",
      "直角三角形计算器（全能版）",
      "勾股定理计算器",
      "特殊直角三角形计算器"
    ],
    "sections": {
      "angle-anatomy": {
        "figcaption": "角度结构：C 是 90 度的直角，A 和 B 是锐角且相加为 90 度。边 a、b、c 相对于角 A 标注。",
        "h2": "理解直角三角形中的角度",
        "h3s": [
          "三个角分别是什么？",
          "边如何相对于角命名？",
          "为什么参考角很重要？"
        ],
        "imgAlt": "标注了角 A、B、C 的直角三角形，显示边 a、b、c，直角位于 C",
        "paragraphs": [
          "每个直角三角形有三个角：一个恰好 90 度的直角，以及两个各小于 90 度的锐角。直角位于顶点 C。两个锐角位于顶点 A 和 B。由于三角形内角和为 180 度，两个锐角之和必须为 90 度。",
          "边的名称取决于你要测量的角。对于角 A：与 A 相对（不接触顶点 A）的边称为对边，记为 a；接触顶点 A 但不是斜边的边称为邻边，记为 b。斜边记为 c，位于直角对面，始终是最长的边。如果改测角 B，标记互换：与 B 相对的边成为新的对边。",
          "同一条物理边，对一个角可能是对边，对另一个角可能是邻边。在 3-4-5 三角形中，若角 A 位于长度为 4 的边与斜边之间，则长度为 3 的边是 A 的对边。对于另一角的角 B，长度为 3 的边变为邻边，长度为 4 的边变为对边。选择公式之前，务必先确定你的参考角。"
        ]
      },
      "angle-applications": {
        "figcaption": "现实中的角度问题：由高度和水平距离求屋顶坡度、梯子安全角度、坡道无障碍坡度、树高视角。",
        "h2": "实际应用",
        "h3s": [
          "建筑与木工",
          "安全与无障碍",
          "测量与户外"
        ],
        "imgAlt": "四个面板分别展示屋顶坡度、梯子角度、坡道坡度和树高视角的计算",
        "paragraphs": [
          "凡是涉及坡度、倾角和视线的地方都会用到角度计算。上面的十六个例题涵盖建筑、无障碍、测量和教育。以下是它们背后的规律。",
          "屋顶坡度（例题 5：18.43°）、椽子角度（例题 10：22.62°）和楼梯坡度（例题 12：34.99°）都对直接野外测量使用反正切或反余弦。木工按高度比水平距离工作，因为那是图纸上的尺寸。计算器把这些尺寸转换为锯切角度。",
          "梯子放置（例题 6：66.04°）和轮椅坡道（例题 7：4.76°）有以角度表示的安全阈值。66° 的梯子太缓；75° 的指南对应 3.73 比 1 的比例。4.76° 的坡道符合 1:12 的无障碍上限。计算器把合格与否的角度检查变成快速验证。",
          "树高视角（例题 8：30.96°）、山坡坡度（例题 15：13.34°）和测量视线（例题 13：30.26°）使用测角仪读数和卷尺距离。角度架起了桥梁，连接你在地面上能测到的量和你需要知道的高度或坡度。"
        ]
      },
      "angle-arccos": {
        "h2": "用反余弦求角度",
        "h3s": [
          "例题 10：椽子角度（反余弦）",
          "例题：5-12-13 三角形",
          "何时反余弦优于反正弦"
        ],
        "paragraphs": [
          "已知目标角的邻边和斜边时使用反余弦。公式为 [[A = \\cos^{-1}(b/c)]]。与反正弦一样，比值必须在 0 和 1 之间。当邻边最容易测量时，反余弦最自然，例如屋顶的水平距离或测量中的基线距离。",
          "一根椽子的水平距离为 6 米，椽子长度（斜边）为 6.5 米。求屋檐处的坡度角。A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°。这是一个中等屋顶坡度。余角 67.38° 是椽子与垂直墙面之间的夹角。",
          "已知邻边 b = 12、斜边 c = 13，求角 A。A = arccos(12/13) = arccos(0.9231) ≈ 22.62°。余角 B = 67.38°。注意，arccos(5/13) 可直接得到 67.38°，将长度为 5 的边视为角 B 的邻边。",
          "当邻边测量比对边测量更可靠时，选择反余弦。在屋架施工中，水平距离常沿天花板搁栅直接测量，而垂直高度必须用铅垂测量。输入越准确，角度越准确。两种函数对同一三角形在数学上等价；选择取决于测量质量。"
        ]
      },
      "angle-arcsin": {
        "h2": "用反正弦求角度",
        "h3s": [
          "例题 1：3-4-5 三角形",
          "例题 2：同一三角形，反余弦检验",
          "例题 3：同一三角形，反正切检验",
          "例题 4：求互余角",
          "例题 11：陡坡（反正弦）"
        ],
        "paragraphs": [
          "已知目标角的对边和斜边时使用反正弦。公式为 [[A = \\sin^{-1}(a/c)]]。比值必须在 0 和 1 之间。如果比值超过 1，说明你标错了边：斜边必须是分母。",
          "已知对边 a = 3、斜边 c = 5，求角 A。第一步：写出公式。A = arcsin(a/c)。<br />第二步：代入。A = arcsin(3/5)。<br />第三步：计算比值。3/5 = 0.6。<br />第四步：应用反正弦。A = arcsin(0.6) ≈ 36.87°。该角约为 36.87 度。余角 B = 90° − 36.87° = 53.13°。",
          "已知邻边 b = 4、斜边 c = 5，用反余弦求角 A。A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°。这与例题 1 完全一致，确认两种方法描述的是同一个角。当两种方法一致时，你的边标记就是正确的。",
          "已知对边 a = 3、邻边 b = 4，用反正切求角 A。A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°。三个反函数对同一三角形收敛于同一答案。这种三重一致是最有力的验证。",
          "已知例题 1 中角 A = 36.87°，求角 B。B = 90° − A = 90° − 36.87° = 53.13°。无需三角运算。你也可以计算 arcsin(4/5) = 53.13° 来验证，将长度为 4 的边视为角 B 的对边。",
          "一段缆线在 25 米的斜边距离上上升 7 米。求倾斜角。A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°。这是一个平缓的坡度，常见于无障碍坡道或输送机斜坡。较小的角度意味着缆线的大部分长度用于水平距离而非高度。"
        ]
      },
      "angle-arctan": {
        "h2": "用反正切求角度",
        "h3s": [
          "例题 5：屋顶坡度（反正切）",
          "例题 6：梯子放置（反正切）",
          "例题 7：轮椅坡道（反正切）",
          "例题 8：树高视角（反正切）",
          "例题 9：装卸坡道（反正切）",
          "例题 14：支撑斜杆（反正切）",
          "例题 15：山坡倾角（反正弦）",
          "例题 12：楼梯坡度（反正切）",
          "例题 13：测量坡度（反正切）",
          "例题 16：互余捷径"
        ],
        "paragraphs": [
          "已知两条直角边但不知斜边时使用反正切。公式为 [[A = \\tan^{-1}(a/b)]]。比值 a/b 可以是任意正数。反正切是野外作业的主力：高度比水平距离是建筑、园林和道路设计中最常见的测量组合。",
          "屋顶在 12 英尺的水平距离上升高 4 英尺。求坡度角。第一步：确定对边（高度）= 4，邻边（水平距离）= 12。<br />第二步：A = arctan(4/12) = arctan(0.3333)。<br />第三步：A ≈ 18.43°。18.43 度的坡度是常见的住宅屋顶坡度，足够陡以排水，又可在小心行走。用屋顶术语说，这是 4 比 12 的坡度。",
          "梯子靠墙高达 4.5 米，梯脚距墙 2 米。求梯子与地面的夹角。A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°。安全指南建议梯子角度接近 75 度（4 比 1 的比例）。66 度时梯子放得太缓，应向墙靠近。",
          "坡道在 9 米的水平距离上升高 0.75 米。求坡度角。A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°。无障碍标准通常要求坡度不陡于约 4.8 度（1:12 的比例）。该坡道 4.76° 刚好符合标准。",
          "观察者站在距树 20 米处。测角仪测得树顶对应 12 米的对边。求视角。A = arctan(12/20) = arctan(0.6) ≈ 30.96°。结合观察者的眼睛高度，这个角度让林业人员无需爬树即可估算树高。",
          "装卸坡道在 10 米的水平距离上升高 2.5 米。求倾斜角。A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°。经核实的精确值为 14.48°，反映了精确的输入值。无论如何，这是适合手推车但对重型托盘搬运车偏陡的中等坡度。",
          "一根斜撑垂直跨度 1.2 米、水平跨度 3.5 米。求斜杆角度。A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°。这个小角度意味着斜杆主要承担水平抗剪作用，而非垂直荷载传递。",
          "山间小路沿 13 米的坡面距离爬升 3 米。求倾斜角。A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°。这是中等偏陡的徒步坡度。当直线路线超过舒适的爬升角度时，步道设计者用这些角度规划之字形路线。",
          "楼梯在 4 米的水平距离上升高 2.8 米。求坡度角。A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°。这是一个舒适的楼梯坡度。建筑规范通常将住宅楼梯角度限制在约 37 度以内，因此该设计符合规范。",
          "测量员测得 12 米水平距离内高差 7 米。求坡度角。A = arctan(7/12) = arctan(0.5833) ≈ 30.26°。这样陡的坡度若修路或步道需要之字形路线。土木工程师用这些角度确定挖填方量。",
          "已知角 A = 32°，不用三角运算求角 B。B = 90° − 32° = 58°。当一个锐角已由量角器、数字水平仪或之前的计算得出时，互余模式是本页最快的计算。"
        ]
      },
      "angle-choose": {
        "h2": "何时使用每种方法",
        "h3s": [
          "反正弦最适合",
          "反余弦最适合",
          "反正切最适合",
          "互余最适合"
        ],
        "paragraphs": [
          "三种反函数对同一三角形给出相同的角度。选择取决于你已知哪些边，以及哪些测量最可靠。",
          "你已知目标角的对边和斜边。这出现在高度问题中：垂直高度是地面角的对边，坡面距离是斜边。树高、建筑高度和缆线垂度问题适合用反正弦。",
          "你已知目标角的邻边和斜边。屋架施工适合用反余弦，因为水平距离（邻边）沿搁栅直接测量。当地面距离是可靠测量时，测量基线也适合用反余弦。",
          "你已知两条直角边但不知斜边。这是最常见的野外情形：高度和水平距离直接测量，而斜边需要单独计算。反正切完全跳过斜边。只要能测出两条直角边，反正切就是最快的路径。",
          "你已知道一个锐角。无需边长测量。在任何反函数计算后用它求第二个角，或当量角器、数字倾角仪直接给出一个角时使用。"
        ],
        "table": {
          "headers": [
            "已知边",
            "方法",
            "公式"
          ],
          "rows": [
            [
              "对边 (a) 和斜边 (c)",
              "反正弦",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "邻边 (b) 和斜边 (c)",
              "反余弦",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "对边 (a) 和邻边 (b)",
              "反正切",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "一个锐角",
              "互余",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-complement": {
        "h2": "互余角：A + B = 90 度",
        "paragraphs": [
          "直角三角形中的两个锐角互余，即它们之和恰好为 90 度。由此得到关系式 [[A + B = 90^\\circ]]。求出一个锐角后，另一个立即由减法得到：B = 90 度减 A。",
          "这不是一种独立的测量方法，而是一致性检验和捷径。若反正弦给出 A = 36.87 度，则 B = 53.13 度，无需进一步三角运算。计算器在其角度求和模式中使用这一关系。",
          "互余关系也解释了为什么 sin(A) 等于 cos(B)。在 3-4-5 三角形中，sin(36.87°) 为 0.6，cos(53.13°) 也为 0.6。一个锐角的正弦恒等于另一个锐角的余弦，因为一个角的对边正是另一个角的邻边。"
        ]
      },
      "angle-conclusion": {
        "h2": "自信地求出任何直角三角形的角度",
        "paragraphs": [
          "先标注三角形：先标斜边，再相对于目标角标出对边和邻边。根据已知边选择匹配的反函数：对边和斜边用反正弦，邻边和斜边用反余弦，两条直角边用反正切。输入测量值，以度读取角度，再用 90 减去第一个角得到第二个角。用范围检查、求和检查和交叉方法计算进行验证。有了这些步骤，任何直角三角形角度问题都化为可靠的常规流程。回到本页顶部的计算器，运行你的数据吧。"
        ]
      },
      "angle-howto": {
        "figcaption": "四步工作流程：相对于参考角标注边，选择与已知边匹配的比值，应用反函数，然后用互余角验证。",
        "h2": "如何使用直角三角形角度计算器",
        "imgAlt": "求角 A 的四步流程：标注边、选择比值、应用反三角函数、验证",
        "listItems": [
          "<strong>确定直角。</strong>确认三角形有一个 90 度的角。本计算器只适用于直角三角形。",
          "<strong>标出斜边。</strong>找出最长的边，即直角对面的边。将其记为 c。",
          "<strong>选择参考角。</strong>决定要求角 A 还是角 B。这决定了哪些边是对边、哪些是邻边。",
          "<strong>选择匹配的模式。</strong>已知对边和斜边用反正弦；已知邻边和斜边用反余弦；已知两条直角边用反正切；已知一个锐角用互余模式。",
          "<strong>输入两条边长。</strong>两条边使用相同单位（都是米、都是英尺等）。单位在比值中会相互抵消，但混用单位会破坏比值。",
          "<strong>以度为单位读取结果。</strong>计算器输出以度为单位的角度，这是建筑、导航和课堂几何的标准单位。",
          "<strong>求出第二个角。</strong>用 90 度减去第一个角，或以另一个角为参考重新运行计算器。",
          "<strong>验证。</strong>检查两个角都在 0 到 90 度之间且相加为 90。如需高精度，用第二种比值方法交叉检验。"
        ],
        "paragraphs": [
          "按以下步骤求出未知角度："
        ]
      },
      "angle-intro": {
        "h2": "什么是直角三角形角度计算器？",
        "paragraphs": [
          "直角三角形角度计算器在已知边长时，求出直角三角形中未知的锐角。勾股定理用于求缺失的边，而反三角函数用于求缺失的角。计算器取两条已知边，计算它们的比值，然后应用反正弦、反余弦或反正切，还原出以度为单位的角度。",
          "常见用途包括根据高度和水平距离测量确定屋顶坡度、求出安全攀爬的梯子放置角度、计算符合无障碍标准的坡道坡度，以及解答几何作业。计算器恰好需要两条边长才能工作。它返回角 A（邻边与斜边之间的角）和角 B（余角，即对边与斜边之间的角）。",
          "例如，对边为 3、斜边为 5 的直角三角形，角 A = arcsin(3/5)，约为 36.87 度。另一个锐角为 90 减 36.87，即 53.13 度。本指南将解释每个反函数，说明何时使用哪一个，逐步讲解十六个例题，并涵盖会导致错误答案的常见失误。",
          "求角是求边的逆过程。边长计算器从角度出发求长度；本计算器从长度出发求角度。两者结合可以完整解出任何直角三角形：已知任意两条边，先用勾股定理求第三条边，再用下面的方法求出两个锐角。不需要量角器，结果保留计算器的全部精度。"
        ]
      },
      "angle-inverse": {
        "figcaption": "三个反函数：反正弦用对边比斜边，反余弦用邻边比斜边，反正切用对边比邻边。",
        "h2": "反三角函数详解",
        "h3s": [
          "反正弦：对边与斜边",
          "反余弦：邻边与斜边",
          "反正切：对边与邻边"
        ],
        "imgAlt": "三个面板分别展示反正弦、反余弦和反正切公式及其边比",
        "paragraphs": [
          "普通三角函数取一个角并返回一个比值。30 度的正弦是 0.5。反三角函数则相反：取一个比值并返回角度。0.5 的反正弦是 30 度。计算器使用三个反函数，每个对应一对特定的已知边。",
          "已知对边 (a) 和斜边 (c) 时，使用反正弦。公式为 [[A = \\sin^{-1}(a/c)]]。比值 a/c 必须在 0 和 1 之间，因为对边始终短于斜边。对于 3-4-5 三角形，A = arcsin(3/5) = arcsin(0.6)，约为 36.87 度。",
          "已知邻边 (b) 和斜边 (c) 时，使用反余弦。公式为 [[A = \\cos^{-1}(b/c)]]。与反正弦一样，比值 b/c 必须在 0 和 1 之间。对于同一个 3-4-5 三角形，A = arccos(4/5) = arccos(0.8)，同样约为 36.87 度。两种方法结果一致，因为它们描述的是同一个角。",
          "已知两条直角边 (a 和 b) 但不知斜边时，使用反正切。公式为 [[A = \\tan^{-1}(a/b)]]。比值 a/b 可以是任意正数。对于 3-4-5 三角形，A = arctan(3/4) = arctan(0.75)，约为 36.87 度。反正切是野外测量最实用的选择，例如屋顶坡度，两条直角边（高度和水平距离）是最容易测量的尺寸。"
        ]
      },
      "angle-mistakes": {
        "h2": "求角度时的常见错误",
        "h3s": [
          "混淆对边和邻边",
          "用错反函数",
          "忘记比值必须有效",
          "混用角度和弧度",
          "边长单位不一致",
          "过早舍入比值",
          "以为计算器能求边"
        ],
        "paragraphs": [
          "最常见的错误。标记取决于你的参考角。如果你算出 arctan(4/3) = 53.13°，而本意是 arctan(3/4) = 36.87°，那你求的是另一个角。修正方法：画出三角形，标出参考角，然后标出对边（它对面的边）和邻边（接触它的边）。",
          "对邻边比斜边的比值用反正弦，得到的是目标角的余角，而不是报错信息。arcsin(4/5) = 53.13° 是角 B，不是角 A。修正方法：对照上表，根据已知边匹配函数。",
          "反正弦和反余弦要求比值在 0 和 1 之间。如果你输入对边 = 5、斜边 = 3，比值 1.67 没有反正弦。这一定意味着边标错了：斜边必须是最长的边且为分母。修正方法：把最长的测量值重新指定为斜边。",
          "计算器和代码中的反三角函数常默认使用弧度。arctan(1) 以度为单位是 45°，以弧度为单位是 0.785。本计算器输出度。如果手算 3-4-5 三角形得到 0.64，说明你在弧度模式；乘以 180/π 即可得到 36.87°。",
          "对边用英寸、斜边用英尺会破坏比值。先换算成统一单位。比值是无量纲的，但前提是两个输入使用相同单位。",
          "arcsin(0.6) = 36.87°，但由 0.596 舍入得到的 arcsin(0.60) 为 36.58°。在反函数最陡的 0 和 1 附近，微小的比值误差会被放大。计算全程保持完整精度，只对最终角度舍入。",
          "本页面由边求角，不能由角求边。求边问题请使用专门的边长计算器。每个工具各司其职。"
        ]
      },
      "angle-precision": {
        "h2": "角度精度与单位",
        "h3s": [
          "输入误差如何影响角度",
          "度与度分秒",
          "何时整数度就够了"
        ],
        "paragraphs": [
          "角度结果的精度取决于背后边测量的精度。卷尺读到毫米，角度可支持两位小数；野外步测的距离，最多支持整数度。计算器以完整浮点精度计算；舍入的决定权在你。",
          "当比值接近 0 或 1（反函数最陡处）时，微小的边误差会引起更大的角度误差。反正切在 45° 附近时，比值 1% 的误差使角度偏移约 0.3°；在 5° 或 85° 附近，同样的 1% 比值误差使角度偏移超过 0.5°。在极端角度下仔细测量，或多次测量取平均。",
          "测量员有时用度、分、秒（DMS）表示角度。将 36.87° 转换为 DMS：整数度为 36，小数 0.87° 乘以 60 得 52.2 分，0.2 分乘以 60 得 12 秒，即 36° 52′ 12″。本计算器输出十进制度；小数部分乘以 60 即为分。",
          "木工锯切角度、梯子放置检查和粗略坡度估算很少需要小数。屋顶坡度精确到整度足以订购材料。两位小数的精度留给公差严格的机械加工、光学对准和工程计算。"
        ]
      },
      "angle-related": {
        "h2": "探索相关的直角三角形计算器"
      },
      "angle-verify": {
        "h2": "验证你的角度答案",
        "listItems": [
          "<strong>范围检查。</strong>两个锐角都必须严格在 0° 和 90° 之间。出现 0°、90° 或更大的角度，说明输入无效或三角形标错。",
          "<strong>求和检查。</strong>A + B 必须恰好等于 90°。若两角之和为 89.9° 或 90.1°，舍入可以解释；更大的偏差说明有错误。",
          "<strong>交叉方法检查。</strong>用另一种反函数重新计算同一角度。若 arcsin(3/5) = 36.87° 且 arctan(3/4) = 36.87°，答案可靠。若不一致，说明标记有误。"
        ],
        "paragraphs": [
          "以下三项检查可确认角度计算正确：",
          "对于关键工作，还应验证边满足勾股定理。在 3-4-5 三角形中，9 + 16 = 25 确认了边，在此之后再信任由它们导出的角度。"
        ]
      }
    },
    "tocHeading": "本指南内容",
    "tocItems": {
      "angle-anatomy": "理解直角三角形中的角度",
      "angle-applications": "实际应用",
      "angle-arccos": "用反余弦求角度",
      "angle-arcsin": "用反正弦求角度",
      "angle-arctan": "用反正切求角度",
      "angle-choose": "何时使用每种方法",
      "angle-complement": "互余角",
      "angle-faq": "常见问题",
      "angle-howto": "如何使用角度计算器",
      "angle-intro": "什么是直角三角形角度计算器？",
      "angle-inverse": "反三角函数",
      "angle-mistakes": "常见错误",
      "angle-precision": "角度精度与单位",
      "angle-related": "相关计算器",
      "angle-verify": "验证你的答案"
    }
  }
};
