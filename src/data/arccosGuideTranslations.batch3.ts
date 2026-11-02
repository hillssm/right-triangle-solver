/**
 * arccosGuideTranslations.batch3.ts
 * Translations of the Right Triangle Angle From Cosine Calculator guide (ArccosGuide.astro)
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese (zh).
 *
 * Structure per language:
 * - tocHeading, tocItems (13 entries keyed by section id)
 * - sections (11 entries: arccos-intro, arccos-what, arccos-vs, arccos-anatomy,
 *   arccos-howto, arccos-examples, arccos-special, arccos-mistakes, arccos-verify,
 *   arccos-applications, arccos-conclusion)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), optional steps,
 *   imgAlt, figcaption.
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedItems (8 calculator names)
 *
 * Formulas, KaTeX markup ([[...]]), variable names, numbers, and HTML tags are preserved
 * exactly as in the English source.
 */

export const ARCCOS_TRANSLATIONS_BATCH3 = {
  "id": {
    "faqs": [
      {
        "question": "Apa arti sebenarnya dari A = arccos(b / c)?",
        "answer": "Artinya Anda membagi sisi samping dengan hipotenusa, lalu bekerja mundur dari desimal tersebut untuk menemukan sudut yang kosinusnya sama dengan nilai itu. Hasilnya adalah sudut lancip antara sisi samping dan hipotenusa."
      },
      {
        "question": "Kapan saya harus menggunakan arccos daripada arcsin?",
        "answer": "Gunakan arccos jika Anda mengetahui sisi samping dan hipotenusa. Gunakan arcsin jika Anda mengetahui sisi depan dan hipotenusa. Keduanya memberikan sudut yang sama untuk segitiga yang sama; pilihannya tergantung pada sisi mana yang Anda ukur."
      },
      {
        "question": "Mengapa saya mendapatkan kesalahan matematika dari arccos?",
        "answer": "Penyebab paling umum adalah rasio yang lebih besar dari 1, yang terjadi ketika sisi samping yang dimasukkan lebih panjang dari hipotenusa. Dalam segitiga siku-siku yang valid hipotenusa selalu paling panjang, jadi periksa label sisi Anda."
      },
      {
        "question": "Bisakah saya menggunakan arccos tanpa mengetahui sisi depan?",
        "answer": "Ya. Itulah keunggulan utama arccos: ia hanya membutuhkan sisi samping dan hipotenusa. Sisi depan tidak pernah masuk dalam perhitungan."
      },
      {
        "question": "Apa perbedaan antara cos dan arccos?",
        "answer": "Kosinus mengambil sudut dan mengembalikan rasio: cos(60 derajat) = 0,5. Arccos membaliknya: ia mengambil rasio dan mengembalikan sudut, jadi arccos(0,5) = 60 derajat. Gunakan kosinus jika Anda tahu sudutnya; gunakan arccos jika Anda tahu sisinya."
      },
      {
        "question": "Mengapa arccos, arcsin, dan arctan memberikan jawaban yang sama?",
        "answer": "Karena ketiganya mendeskripsikan sudut geometris yang sama melalui pasangan sisi yang berbeda. Dalam segitiga 3-4-5, arccos(4/5), arcsin(3/5), dan arctan(3/4) semuanya sama dengan 36,87 derajat. Kesepakatan antar metode memastikan label sisi sudah benar."
      },
      {
        "question": "Apa artinya jika b/c tepat sama dengan 0,5?",
        "answer": "Sudutnya tepat 60 derajat. Ini adalah segitiga khusus 30-60-90, di mana sisi yang bersebelahan dengan sudut 60 derajat adalah setengah dari hipotenusa."
      },
      {
        "question": "Haruskah jawabannya dalam derajat atau radian?",
        "answer": "Kalkulator ini menggunakan derajat, standar untuk konstruksi, survei, dan geometri kelas. Jika Anda menghitung manual, pastikan kalkulator dalam mode derajat; hasil mode radian seperti 0,64 dikonversi menjadi 36,87 derajat dengan mengalikan 180/pi."
      },
      {
        "question": "Bagaimana cara menemukan sudut lancip lainnya?",
        "answer": "Kurangi dari 90 derajat. Jika arccos memberikan A = 36,87 derajat, maka B = 90 - 36,87 = 53,13 derajat. Tidak diperlukan trigonometri lebih lanjut."
      },
      {
        "question": "Bisakah hasil arccos menjadi 90 derajat?",
        "answer": "Hanya sebagai batas: arccos(0) = 90 derajat, tetapi sisi samping nol berarti segitiga degenerasi, bukan segitiga nyata. Sudut segitiga siku-siku yang valid dari arccos selalu berada di antara 0 dan 90 derajat."
      },
      {
        "question": "Bagaimana cara memeriksa jawaban arccos saya?",
        "answer": "Hitung cos(A) dan pastikan sama dengan b/c. Hitung ulang juga dengan arcsin atau arctan menggunakan sisi ketiga; semua metode harus sepakat. Terakhir, periksa bahwa kedua sudut lancip berjumlah tepat 90 derajat."
      },
      {
        "question": "Apakah memperbesar segitiga mengubah hasil arccos?",
        "answer": "Tidak. Segitiga sebangun memiliki sudut yang identik. Segitiga 3-4-5 dan segitiga 6-8-10 keduanya memberikan arccos(0,8) = 36,87 derajat, karena rasio b/c tidak berubah oleh penskalaan."
      }
    ],
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedItems": [
      "Kalkulator Sudut Segitiga Siku-Siku",
      "Kalkulator Sudut Segitiga Siku-Siku dari Sinus",
      "Kalkulator Sudut Segitiga Siku-Siku dari Tangen",
      "Kalkulator Sisi Segitiga Siku-Siku dari Kosinus",
      "Kalkulator Sisi Segitiga Siku-Siku",
      "Kalkulator Sudut Hilang Segitiga Siku-Siku",
      "Kalkulator Rasio Trigonometri Segitiga Siku-Siku",
      "Kalkulator Rasio Kosinus"
    ],
    "sections": {
      "arccos-anatomy": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos membutuhkan tepat dua sisi: sisi samping b dan hipotenusa c. Memberi label yang benar pada keduanya adalah seluruh tantangannya. Selebihnya hanya aritmetika."
          },
          {
            "kind": "h3",
            "text": "Mengidentifikasi Sisi Samping"
          },
          {
            "kind": "p",
            "text": "Sisi samping adalah kaki yang menyentuh sudut A. Ia membentuk salah satu tepi sudut itu sendiri. Pada diagram di bawah, sisi b membentang di sepanjang bawah dari sudut siku-siku ke sudut A. Jika Anda menyelesaikan sudut lancip B yang lain, labelnya bertukar: sisi yang bersebelahan dengan B adalah sisi yang menyentuh B."
          },
          {
            "kind": "h3",
            "text": "Mengidentifikasi Hipotenusa"
          },
          {
            "kind": "p",
            "text": "Hipotenusa adalah sisi yang berhadapan dengan sudut siku-siku. Ia selalu merupakan sisi terpanjang segitiga. Ia tidak pernah menyentuh titik sudut siku-siku. Jika \"hipotenusa\" Anda bukan yang terpanjang dari ketiga pengukuran Anda, beri label ulang sebelum menghitung."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sisi Depan Tidak Diikutsertakan"
          },
          {
            "kind": "p",
            "text": "Kosinus didefinisikan sebagai samping dibagi hipotenusa. Sisi depan sama sekali tidak muncul dalam rasio ini. Itulah inti kalkulator ini: ketika sisi depan tidak diketahui, tersembunyi, atau tidak relevan dengan pengaturan pengukuran Anda, arccos tetap memberikan sudutnya. Anda tidak mengabaikan sisi depan; Anda menggunakan rasio yang memang tidak pernah membutuhkannya."
          }
        ],
        "figcaption": "Anatomi untuk arccos: b adalah sisi samping yang menyentuh sudut A, c adalah hipotenusa yang berhadapan dengan sudut siku-siku.",
        "h2": "Sisi Samping dan Hipotenusa: Dua Masukan",
        "imgAlt": "Segitiga siku-siku dengan sisi samping b dan hipotenusa c disorot untuk rumus arccos"
      },
      "arccos-applications": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos muncul di mana pun jarak lereng dan jarak horizontal adalah pengukuran yang alami. Hipotenusa diukur sepanjang lereng itu sendiri, dan sisi samping adalah komponen horizontalnya."
          },
          {
            "kind": "h3",
            "text": "Survei Lereng"
          },
          {
            "kind": "p",
            "text": "Seorang surveyor mengukur 65 meter sepanjang lereng dan 60 meter secara horizontal. Sudut lerengnya adalah arccos(60/65), sekitar 22,6 derajat. Ini adalah situasi arccos standar: jarak miring mudah diukur dengan pita, jarak horizontal berasal dari peta atau waterpas, dan sisi depan (elevasi) adalah yang mungkin Anda hitung berikutnya."
          },
          {
            "kind": "h3",
            "text": "Ketinggian Matahari dari Bayangan"
          },
          {
            "kind": "p",
            "text": "Sinar cahaya 10 meter menghasilkan bayangan 8 meter. Sudut elevasi matahari adalah arccos(8/10), sekitar 36,9 derajat. Soal bayangan adalah soal arccos alami karena bayangan terletak di tanah (samping) dan sinar adalah hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Kemiringan Kasau Atap"
          },
          {
            "kind": "p",
            "text": "Sebuah kasau membentang 6,5 meter dengan bentangan horizontal 6 meter. Sudut kemiringan di lisplang adalah arccos(6/6,5), sekitar 22,6 derajat. Tukang kayu mengukur kasau secara langsung dan bentangan sepanjang balok, sehingga arccos sesuai dengan pengukuran apa adanya."
          },
          {
            "kind": "h3",
            "text": "Penopang Rekayasa"
          },
          {
            "kind": "p",
            "text": "Penopang diagonal berukuran 4 meter dengan alas horizontal 3,5 meter. Sudut penopangnya adalah arccos(3,5/4), sekitar 28,96 derajat. Sketsa struktural memberikan panjang penopang dan tapaknya; arccos mengubahnya menjadi sudut pemasangan."
          }
        ],
        "figcaption": "Soal arccos dunia nyata: sudut lereng, elevasi matahari, kemiringan kasau, dan sudut pemasangan penopang.",
        "h2": "Penerapan Arccos dalam Kehidupan Nyata",
        "imgAlt": "Empat panel menunjukkan perhitungan sudut arccos untuk survei, bayangan, kasau atap, dan penopang"
      },
      "arccos-conclusion": {
        "blocks": [
          {
            "kind": "p",
            "text": "Mulailah dengan mengidentifikasi sisi samping: kaki yang menyentuh sudut target Anda. Pastikan hipotenusa adalah sisi terpanjang. Bagi, terapkan arccos, dan baca sudutnya dalam derajat. Dapatkan sudut kedua dari 90 dikurangi yang pertama. Verifikasi dengan pemeriksaan bolak-balik, perhitungan lintas metode, dan jumlah sudut. Dengan langkah-langkah ini, setiap soal sisi-samping-dan-hipotenusa menjadi rutinitas yang andal. Kembali ke kalkulator di bagian atas halaman ini untuk menjalankan angka Anda."
          }
        ],
        "h2": "Temukan Setiap Sudut dari Kosinus dengan Percaya Diri"
      },
      "arccos-examples": {
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh mengikuti empat langkah yang sama: tulis rumus, substitusi, bagi, terapkan arccos. Sudut dibulatkan hingga dua desimal."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: Segitiga 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 4 dan hipotenusa c = 5, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0,8) [[\\\\approx 36.87^\\\\circ]]. Komplemen B = 53,13[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Segitiga 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 12 dan hipotenusa c = 13, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0,9231) [[\\\\approx 22.62^\\\\circ]]. Komplemen B = 67,38[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segitiga 8-15-17"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 8 dan hipotenusa c = 17, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0,4706) [[\\\\approx 61.93^\\\\circ]]. Komplemen B = 28,07[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Segitiga Sama, Sudut Lain"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 15 dan hipotenusa c = 17 (menyelesaikan sudut B dari segitiga 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0,8824) [[\\\\approx 28.07^\\\\circ]]. Perhatikan 61,93 + 28,07 = 90, sesuai yang disyaratkan."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: 5-12-13, Sudut Lain"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 5 dan hipotenusa c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0,3846) [[\\\\approx 67.38^\\\\circ]]. Ini cocok dengan komplemen dari Contoh 2."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: 3-4-5, Sudut Lain"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 3 dan hipotenusa c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0,6) [[\\\\approx 53.13^\\\\circ]]. Ini cocok dengan komplemen dari Contoh 1."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Kasus Khusus 60 Derajat"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 1 dan hipotenusa c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0,5) = 60[[\\\\^\\\\circ]] tepat. Ini adalah segitiga khusus 30-60-90."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Segitiga 7-24-25"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 7 dan hipotenusa c = 25, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0,28) [[\\\\approx 73.74^\\\\circ]]. Komplemen B = 16,26[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: 7-24-25, Sudut Lain"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 24 dan hipotenusa c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0,96) [[\\\\approx 16.26^\\\\circ]]. Cocok dengan komplemen dari Contoh 8."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Segitiga 9-40-41"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 9 dan hipotenusa c = 41, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0,2195) [[\\\\approx 77.32^\\\\circ]]. Sisi samping yang kecil memberikan sudut yang lebar."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: 9-40-41, Sudut Lain"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 40 dan hipotenusa c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0,9756) [[\\\\approx 12.68^\\\\circ]]. Perhatikan 77,32 + 12,68 = 90."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Segitiga 20-21-29"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 20 dan hipotenusa c = 29, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0,6897) [[\\\\approx 46.40^\\\\circ]]. Komplemen B = 43,60[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: 20-21-29, Sudut Lain"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 21 dan hipotenusa c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0,7241) [[\\\\approx 43.60^\\\\circ]]. Cocok dengan komplemen dari Contoh 12."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Segitiga 6-8-10"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 6 dan hipotenusa c = 10, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0,6) [[\\\\approx 53.13^\\\\circ]]. Sudut yang sama seperti Contoh 6, karena 6-8-10 adalah 3-4-5 yang diperbesar."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: 6-8-10, Sudut Lain"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 8 dan hipotenusa c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0,8) [[\\\\approx 36.87^\\\\circ]]. Sama seperti Contoh 1, mengonfirmasi segitiga sebangun berbagi sudut."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Segitiga 12-16-20"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi samping b = 12 dan hipotenusa c = 20, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0,6) [[\\\\approx 53.13^\\\\circ]]. 3-4-5 yang diperbesar lagi, sudut yang sama lagi. Memperbesar sisi tidak pernah mengubah sudut."
          }
        ],
        "h2": "16 Contoh Pengerjaan"
      },
      "arccos-howto": {
        "blocks": [],
        "figcaption": "Contoh pengerjaan: b = 4, c = 5 menghasilkan A = arccos(0,8), sekitar 36,87 derajat, diverifikasi dengan bolak-balik.",
        "h2": "Cara Menggunakan Kalkulator Sudut dari Kosinus",
        "imgAlt": "Contoh empat langkah arccos dengan b sama dengan 4 dan c sama dengan 5",
        "steps": [
          "<strong>Pastikan sudut siku-siku.</strong> Kalkulator hanya berfungsi untuk segitiga siku-siku. Identifikasi sudut 90 derajat terlebih dahulu.",
          "<strong>Pilih sudut target Anda.</strong> Tentukan apakah Anda menyelesaikan sudut A atau sudut B. Sisi samping didefinisikan relatif terhadap pilihan ini.",
          "<strong>Ukur sisi samping b.</strong> Ini adalah kaki yang menyentuh sudut target Anda. Catat dalam satuan apa pun.",
          "<strong>Ukur hipotenusa c.</strong> Ini adalah sisi terpanjang, berhadapan dengan sudut siku-siku. Gunakan satuan yang sama dengan b.",
          "<strong>Periksa bahwa b lebih kecil dari c.</strong> Jika tidak, sisinya salah label. Hipotenusa harus paling panjang.",
          "<strong>Masukkan kedua nilai dan tekan Hitung.</strong> Alat menghitung b/c, menerapkan arccos, dan mengembalikan sudut A dalam derajat.",
          "<strong>Temukan sudut kedua.</strong> Kurangi dari 90 derajat: B = 90[[\\\\^\\\\circ]] dikurangi A.",
          "<strong>Verifikasi.</strong> Hitung cos(A) pada kalkulator dan pastikan sama dengan b/c. Jika ya, jawabannya kokoh."
        ]
      },
      "arccos-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator sudut segitiga siku-siku dari kosinus menemukan sudut lancip ketika Anda mengetahui sisi samping dan hipotenusa. Ia menerapkan fungsi kosinus invers, ditulis arccos atau cos[[-1]], pada rasio kedua sisi tersebut. Hasilnya adalah sudut A dalam derajat."
          },
          {
            "kind": "p",
            "text": "Alat ini ada untuk situasi pengukuran tertentu: Anda dapat mengukur sisi di sebelah sudut target Anda dan sisi terpanjang segitiga, tetapi sisi depan tidak diketahui atau sulit dijangkau. Alih-alih menghitung sisi depan terlebih dahulu, arccos melewatinya sepenuhnya dan mengubah rasio samping-atas-hipotenusa langsung menjadi sudut."
          },
          {
            "kind": "p",
            "text": "Misalnya, sisi samping 4 dan hipotenusa 5 memberikan rasio 0,8. Arccos dari 0,8 adalah sekitar 36,87 derajat. Itulah sudut A. Sudut lancip lainnya mengikuti aturan komplemen: 90 dikurangi 36,87, atau 53,13 derajat."
          },
          {
            "kind": "p",
            "text": "Arccos adalah salah satu dari tiga alat trigonometri invers di situs ini. Jika sisi yang Anda ketahui adalah sisi depan dan hipotenusa, <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">kalkulator sudut dari sinus</a> adalah pilihan yang tepat. Jika Anda mengetahui kedua kaki tetapi bukan hipotenusa, gunakan <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">kalkulator sudut dari tangen</a>. Halaman ini membahas kasus kosinus secara mendalam."
          }
        ],
        "h2": "Apa Itu Kalkulator Sudut Segitiga Siku-Siku dari Kosinus?"
      },
      "arccos-mistakes": {
        "blocks": [
          {
            "kind": "h3",
            "text": "Menggunakan Sisi Depan Alih-alih Sisi Samping"
          },
          {
            "kind": "p",
            "text": "Kesalahan paling umum. Arccos membutuhkan sisi yang menyentuh sudut A, bukan sisi yang berhadapan dengannya. Jika Anda memasukkan sisi depan ke arccos, Anda mendapatkan komplemen dari sudut yang dimaksud. Dalam segitiga 3-4-5, arccos(3/5) = 53,13 derajat adalah sudut B, bukan sudut A. Perbaikan: buat sketsa segitiga, tandai sudut target Anda, dan telusuri kaki mana yang menyentuhnya."
          },
          {
            "kind": "h3",
            "text": "Menaruh Hipotenusa di Pembilang"
          },
          {
            "kind": "p",
            "text": "Arccos mengharapkan samping dibagi hipotenusa, angka di bawah 1. Memasukkan c/b alih-alih b/c memberikan rasio di atas 1, dan kalkulator mengembalikan kesalahan matematika. Perbaikan: hipotenusa selalu menjadi penyebut dalam rasio arccos."
          },
          {
            "kind": "h3",
            "text": "Mencampuradukkan Arccos dengan Kosinus"
          },
          {
            "kind": "p",
            "text": "Pada banyak kalkulator, tombol kosinus dan tombol kosinus invers (sering berlabel cos[[-1]] atau arccos) berdekatan. Menekan cos(0,8) alih-alih arccos(0,8) memberikan 0,6967, rasio yang tak bermakna, alih-alih 36,87 derajat. Perbaikan: periksa bahwa kalkulator Anda dalam mode derajat dan bahwa Anda menekan tombol invers."
          },
          {
            "kind": "h3",
            "text": "Mencampur Derajat dan Radian"
          },
          {
            "kind": "p",
            "text": "Arccos(0,8) adalah 36,87 derajat tetapi 0,6435 radian. Jika perhitungan manual Anda memberikan 0,64 untuk segitiga 3-4-5, kalkulator dalam mode radian. Kalikan dengan 180/pi untuk mengonversi, atau alihkan mode ke derajat. Kalkulator ini mengeluarkan derajat."
          },
          {
            "kind": "h3",
            "text": "Memasukkan Sisi dalam Satuan Berbeda"
          },
          {
            "kind": "p",
            "text": "Sisi samping dalam inci dan hipotenusa dalam kaki merusak rasio. Konversi ke satuan umum terlebih dahulu. Rasio tidak bersatuan, tetapi hanya jika kedua masukan berbagi satuan."
          },
          {
            "kind": "h3",
            "text": "Membulatkan Rasio Terlalu Dini"
          },
          {
            "kind": "p",
            "text": "Arccos(0,8) = 36,87 derajat, tetapi arccos(0,80) yang dibulatkan dari 0,795 memberikan 37,24 derajat. Di dekat rasio 0 dan 1, di mana arccos paling curam, kesalahan rasio kecil membesar. Pertahankan presisi penuh selama pembagian dan bulatkan hanya sudut akhirnya."
          },
          {
            "kind": "h3",
            "text": "Lupa Sudut Mana yang Diselesaikan"
          },
          {
            "kind": "p",
            "text": "Arccos mengembalikan sudut yang sisi sampingnya Anda masukkan. Jika Anda memasukkan sisi yang menyentuh sudut B, hasilnya adalah sudut B. Beri label jawaban dengan nama sudut yang benar, atau verifikasi dengan komplemen: kedua sudut lancip harus berjumlah 90 derajat."
          }
        ],
        "h2": "Kesalahan Umum Saat Menggunakan Arccos"
      },
      "arccos-special": {
        "blocks": [
          {
            "kind": "p",
            "text": "Beberapa nilai arccos muncul begitu sering sehingga mengenalinya menghemat waktu. Nilai-nilai itu berasal dari segitiga siku-siku khusus."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1) = 0^\\\\circ]]: sisi samping sama dengan hipotenusa, sehingga sudutnya menyusut menjadi nol. Ini adalah kasus degenerasi, bukan segitiga nyata, tetapi ia menjangkar skala."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{3}/2) \\\\approx 30^\\\\circ]]: dari segitiga 30-60-90. Ketika sisi samping sekitar 86,6 persen dari hipotenusa, sudutnya 30 derajat."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{2}/2) = 45^\\\\circ]]: dari segitiga 45-45-90. Kaki yang sama memberikan nilai eksak ini."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1/2) = 60^\\\\circ]]: dari segitiga 30-60-90, kasus dalam Contoh 7. Ketika sisi samping tepat setengah dari hipotenusa, sudutnya tepat 60 derajat."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(0) = 90^\\\\circ]]: sisi samping menyusut menjadi nol, sehingga sudut membuka hingga sudut siku-siku. Seperti kasus nol, ini adalah batas, bukan sudut segitiga nyata."
          },
          {
            "kind": "p",
            "text": "Di antara tonggak ini, arccos menurun mulus seiring rasio meningkat. Menghafal lima titik jangkar memungkinkan Anda memperkirakan setiap arccos secara mental: rasio 0,7 berada di antara 0,5 (60 derajat) dan 0,866 (30 derajat), sedikit lebih dekat ke 45 derajat. Nilai sebenarnya sekitar 45,57 derajat."
          }
        ],
        "h2": "Nilai Sudut Khusus yang Layak Dihafal"
      },
      "arccos-verify": {
        "blocks": [
          {
            "kind": "p",
            "text": "Tiga pemeriksaan memastikan perhitungan arccos yang benar:"
          },
          {
            "kind": "p",
            "text": "Untuk segitiga 3-4-5, verifikasi juga bahwa sisi-sisinya memenuhi teorema Pythagoras: 9 + 16 = 25. Mengonfirmasi sisi-sisi sebelum memercayai sudut yang diturunkan darinya adalah praktik yang baik."
          },
          {
            "kind": "p",
            "text": "Pemeriksaan keempat menggunakan komplemen. Hitung B = 90[[\\\\^\\\\circ]] dikurangi A, lalu verifikasi arccos dari rasio lainnya memberikan B. Dalam Contoh 1, arccos(3/5) = 53,13[[\\\\^\\\\circ]], yang cocok dengan 90 dikurangi 36,87. Ketika keempat pemeriksaan lolos, jawabannya tidak diragukan lagi."
          }
        ],
        "h2": "Memverifikasi Jawaban Arccos Anda",
        "steps": [
          "<strong>Pemeriksaan rentang.</strong> Hasil harus berada di antara 0 dan 90 derajat. Apa pun di luar itu menandakan masukan tidak valid atau sisi salah label.",
          "<strong>Pemeriksaan bolak-balik.</strong> Hitung cos(A) dan pastikan sama dengan b/c. Untuk Contoh 1, cos(36,87[[\\\\^\\\\circ]]) [[\\\\approx]] 0,8 = 4/5. Jika bolak-balik gagal, sudutnya salah.",
          "<strong>Pemeriksaan lintas metode.</strong> Hitung ulang dengan arcsin atau arctan menggunakan sisi ketiga. Jika arccos(4/5) = 36,87[[\\\\^\\\\circ]] dan arctan(3/4) = 36,87[[\\\\^\\\\circ]], jawabannya kokoh. Ketidaksepakatan menunjukkan kesalahan pelabelan."
        ]
      },
      "arccos-vs": {
        "blocks": [
          {
            "kind": "p",
            "text": "Ketiga fungsi invers menemukan sudut yang sama ketika diterapkan pada segitiga yang sama. Perbedaannya hanya pada sisi mana yang mereka butuhkan. Memilih dengan benar menghemat Anda dari menghitung sisi yang tidak diperlukan."
          },
          {
            "kind": "p",
            "text": "Gunakan <strong>arccos</strong> ketika Anda mengetahui sisi samping (b) dan hipotenusa (c). Rumusnya adalah [[A = \\\\cos^{-1}(b/c)]]. Ini adalah pilihan alami ketika hipotenusa diukur langsung, misalnya dengan pita sepanjang lereng, dan jarak horizontal diketahui."
          },
          {
            "kind": "p",
            "text": "Gunakan <strong>arcsin</strong> ketika Anda mengetahui sisi depan (a) dan hipotenusa (c). Rumusnya adalah [[A = \\\\sin^{-1}(a/c)]]. Soal ketinggian cenderung memakai arcsin: kenaikan vertikal berhadapan dengan sudut di permukaan tanah."
          },
          {
            "kind": "p",
            "text": "Gunakan <strong>arctan</strong> ketika Anda mengetahui kedua kaki (a dan b) tetapi bukan hipotenusa. Rumusnya adalah [[A = \\\\tan^{-1}(a/b)]]. Pengukuran lapangan seperti kenaikan atap dibagi bentangan cenderung memakai arctan karena kedua kaki diukur langsung."
          },
          {
            "kind": "h3",
            "text": "Ketiganya Harus Sepakat"
          },
          {
            "kind": "p",
            "text": "Untuk setiap segitiga tunggal, arccos(b/c), arcsin(a/c), dan arctan(a/b) menghasilkan sudut yang identik. Dalam segitiga 3-4-5, arccos(4/5), arcsin(3/5), dan arctan(3/4) semuanya sama dengan 36,87 derajat. Jika dua metode tidak sepakat, sebuah sisi salah label. Pemeriksaan silang ini adalah verifikasi paling andal yang tersedia."
          },
          {
            "kind": "h3",
            "text": "Mengapa Tidak Selalu Menggunakan Arctan?"
          },
          {
            "kind": "p",
            "text": "Arctan membutuhkan kedua kaki. Jika sisi depan tidak diketahui dan sulit diukur, menghitungnya terlebih dahulu hanya untuk menggunakan arctan menambah langkah yang tidak perlu dan peluang kesalahan ekstra. Arccos langsung berangkat dari dua sisi yang Anda miliki menuju sudut yang Anda inginkan. Sesuaikan fungsi dengan pengukuran Anda, bukan dengan kebiasaan."
          }
        ],
        "h2": "Arccos vs. Arcsin vs. Arctan: Kapan Menggunakan Masing-masing"
      },
      "arccos-what": {
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinus biasa mengambil sudut dan mengembalikan rasio. Kosinus dari 60 derajat adalah 0,5. Arccos membaliknya: ia mengambil rasio dan mengembalikan sudut. Arccos dari 0,5 adalah 60 derajat. Kedua fungsi saling meniadakan, itulah mengapa arccos juga ditulis sebagai cos[[-1]]."
          },
          {
            "kind": "p",
            "text": "Rumus yang digunakan kalkulator ini adalah [[A = \\\\cos^{-1}(b/c)]]. Di sini b adalah sisi samping, c adalah hipotenusa, dan A adalah sudut di antara keduanya. Rasio b/c selalu berada di antara 0 dan 1 untuk segitiga siku-siku yang valid, karena sisi samping selalu lebih pendek dari hipotenusa."
          },
          {
            "kind": "p",
            "text": "Anggap arccos sebagai pertanyaan: \"Sudut mana yang memiliki nilai kosinus ini?\" Jika b/c sama dengan 0,8, pertanyaannya menjadi \"sudut mana yang kosinusnya 0,8?\" Jawabannya, 36,87 derajat, adalah sudut yang sisi sampingnya 80 persen sepanjang hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Rasio Menceritakan Kisah"
          },
          {
            "kind": "p",
            "text": "Nilai b/c menggambarkan bentuk segitiga. Rasio mendekati 1 berarti sisi samping hampir sepanjang hipotenusa, sehingga sudut di antara keduanya sangat kecil. Rasio mendekati 0 berarti sisi samping sangat pendek dibandingkan hipotenusa, sehingga sudut membuka lebar menuju 90 derajat. Rasio tepat 0,5 selalu berarti 60 derajat."
          },
          {
            "kind": "h3",
            "text": "Domain Arccos"
          },
          {
            "kind": "p",
            "text": "Arccos hanya menerima masukan dari 0 hingga 1 dalam konteks geometris ini. Rasio di atas 1 mustahil untuk segitiga siku-siku dan menandakan kesalahan pelabelan: hipotenusa harus menjadi penyebut dan harus menjadi sisi terpanjang. Rasio negatif akan mendeskripsikan sudut tumpul, yang tidak dapat muncul sebagai sudut A dalam segitiga siku-siku."
          }
        ],
        "figcaption": "Cara kerja arccos: bagi sisi samping dengan hipotenusa, lalu terapkan kosinus invers untuk mendapatkan kembali sudutnya.",
        "h2": "Memahami Arccos (Kosinus Invers)",
        "imgAlt": "Diagram yang menunjukkan dua langkah arccos: bagi b dengan c, lalu terapkan arccos untuk mendapatkan sudut"
      }
    },
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "arccos-anatomy": "Sisi Samping dan Hipotenusa",
      "arccos-applications": "Penerapan dalam Kehidupan Nyata",
      "arccos-conclusion": "Temukan Setiap Sudut dari Kosinus dengan Percaya Diri",
      "arccos-examples": "16 Contoh Pengerjaan",
      "arccos-faq": "Tanya Jawab",
      "arccos-howto": "Cara Menggunakan Kalkulator",
      "arccos-intro": "Apa Itu Kalkulator Sudut dari Kosinus?",
      "arccos-mistakes": "Kesalahan Umum",
      "arccos-special": "Nilai Sudut Khusus",
      "arccos-verify": "Memverifikasi Jawaban Anda",
      "arccos-vs": "Arccos vs. Arcsin vs. Arctan",
      "arccos-what": "Memahami Arccos (Kosinus Invers)"
    }
  },
  "ar": {
    "faqs": [
      {
        "question": "ماذا تعني A = arccos(b / c) فعلياً؟",
        "answer": "تعني أنك تقسم الضلع المجاور على الوتر، ثم تعمل بشكل عكسي من ذلك العدد العشري لإيجاد الزاوية التي جيب تمامها يساويها. النتيجة هي الزاوية الحادة بين الضلع المجاور والوتر."
      },
      {
        "question": "متى يجب أن أستخدم arccos بدلاً من arcsin؟",
        "answer": "استخدم arccos عندما تعرف الضلع المجاور والوتر. استخدم arcsin عندما تعرف الضلع المقابل والوتر. كلاهما يعطي نفس الزاوية للمثلث نفسه؛ الاختيار يعتمد على الأضلاع التي قستها."
      },
      {
        "question": "لماذا أحصل على خطأ رياضي من arccos؟",
        "answer": "السبب الأكثر شيوعاً هو نسبة أكبر من 1، وهذا يحدث عندما يكون الضلع المجاور المدخل أطول من الوتر. في المثلث القائم الصحيح يكون الوتر هو الأطول دائماً، لذا تحقق من تسمية الأضلاع."
      },
      {
        "question": "هل يمكنني استخدام arccos دون معرفة الضلع المقابل؟",
        "answer": "نعم. هذه هي الميزة الرئيسية لـ arccos: فهو يحتاج فقط إلى الضلع المجاور والوتر. الضلع المقابل لا يدخل في الحساب أبداً."
      },
      {
        "question": "ما الفرق بين cos و arccos؟",
        "answer": "جيب التمام يأخذ زاوية ويعيد نسبة: cos(60 درجة) = 0.5. أما arccos فيعكس ذلك: يأخذ نسبة ويعيد الزاوية، لذا arccos(0.5) = 60 درجة. استخدم جيب التمام عندما تعرف الزاوية؛ واستخدم arccos عندما تعرف الأضلاع."
      },
      {
        "question": "لماذا تعطي arccos و arcsin و arctan نفس الإجابة؟",
        "answer": "لأنها تصف نفس الزاوية الهندسية من خلال أزواج أضلاع مختلفة. في مثلث 3-4-5، فإن arccos(4/5) و arcsin(3/5) و arctan(3/4) كلها تساوي 36.87 درجة. الاتفاق بين الطرق يؤكد صحة تسمية الأضلاع."
      },
      {
        "question": "ماذا يعني أن b/c تساوي 0.5 تماماً؟",
        "answer": "الزاوية هي 60 درجة تماماً. هذا هو المثلث الخاص 30-60-90، حيث الضلع المجاور للزاوية 60 درجة هو نصف الوتر."
      },
      {
        "question": "هل يجب أن تكون الإجابة بالدرجات أم بالراديان؟",
        "answer": "هذه الحاسبة تستخدم الدرجات، وهو المعيار في البناء والمساحة وهندسة الفصول الدراسية. إذا حسبت يدوياً، تأكد أن الآلة الحاسبة في وضع الدرجات؛ فنتيجة وضع الراديان مثل 0.64 تتحول إلى 36.87 درجة بالضرب في 180/pi."
      },
      {
        "question": "كيف أجد الزاوية الحادة الأخرى؟",
        "answer": "اطرح من 90 درجة. إذا أعطى arccos أن A = 36.87 درجة، فإن B = 90 - 36.87 = 53.13 درجة. لا حاجة لمزيد من حساب المثلثات."
      },
      {
        "question": "هل يمكن أن تكون نتيجة arccos هي 90 درجة؟",
        "answer": "فقط كنهاية: arccos(0) = 90 درجة، لكن الضلع المجاور الصفري يعني مثلثاً منحلاً وليس مثلثاً حقيقياً. زوايا المثلث القائم الصحيحة من arccos تقع دائماً بين 0 و 90 درجة حصراً."
      },
      {
        "question": "كيف أتحقق من إجابة arccos الخاصة بي؟",
        "answer": "احسب cos(A) وتأكد أنها تساوي b/c. وأعد الحساب أيضاً باستخدام arcsin أو arctan مع الضلع الثالث؛ يجب أن تتفق جميع الطرق. وأخيراً، تحقق من أن الزاويتين الحادتين مجموعهما 90 درجة تماماً."
      },
      {
        "question": "هل تكبير المثلث يغير نتيجة arccos؟",
        "answer": "لا. المثلثات المتشابهة لها زوايا متطابقة. مثلث 3-4-5 ومثلث 6-8-10 كلاهما يعطي arccos(0.8) = 36.87 درجة، لأن النسبة b/c لا تتغير بالتكبير."
      }
    ],
    "relatedHeading": "استكشف حاسبات المثلث القائم ذات الصلة",
    "relatedItems": [
      "حاسبة زاوية المثلث القائم",
      "حاسبة زاوية المثلث القائم من الجيب",
      "حاسبة زاوية المثلث القائم من الظل",
      "حاسبة ضلع المثلث القائم من جيب التمام",
      "حاسبة ضلع المثلث القائم",
      "حاسبة الزاوية المفقودة للمثلث القائم",
      "حاسبة النسب المثلثية للمثلث القائم",
      "حاسبة نسبة جيب التمام"
    ],
    "sections": {
      "arccos-anatomy": {
        "blocks": [
          {
            "kind": "p",
            "text": "يحتاج arccos إلى ضلعين بالضبط: الضلع المجاور b والوتر c. تسميتهما بشكل صحيح هي المعركة كلها. كل ما بعد ذلك هو حساب."
          },
          {
            "kind": "h3",
            "text": "تحديد الضلع المجاور"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور هو الساق التي تلامس الزاوية A. وهي تشكل إحدى حافتي الزاوية نفسها. في الرسم أدناه، يمتد الضلع b على طول القاعدة من الزاوية القائمة إلى الزاوية A. إذا كنت تحل الزاوية الحادة B الأخرى، تنعكس التسميات: الضلع المجاور لـ B هو الذي يلامس B."
          },
          {
            "kind": "h3",
            "text": "تحديد الوتر"
          },
          {
            "kind": "p",
            "text": "الوتر هو الضلع المقابل للزاوية القائمة. وهو دائماً أطول أضلاع المثلث. ولا يلامس أبداً رأس الزاوية القائمة. إذا لم يكن \"الوتر\" لديك هو الأطول بين قياساتك الثلاثة، فأعد التسمية قبل الحساب."
          },
          {
            "kind": "h3",
            "text": "لماذا يبقى الضلع المقابل خارجاً"
          },
          {
            "kind": "p",
            "text": "يُعرَّف جيب التمام بأنه المجاور على الوتر. الضلع المقابل لا يظهر في هذه النسبة أبداً. هذه هي فكرة هذه الحاسبة: عندما يكون الضلع المقابل مجهولاً أو مدفوناً أو غير ذي صلة بإعداد القياس، فإن arccos يقدم الزاوية على أي حال. أنت لا تتجاهل الضلع المقابل؛ بل تستخدم نسبة لم تحتجه أصلاً."
          }
        ],
        "figcaption": "تشريح arccos: b هو الضلع المجاور الذي يلامس الزاوية A، و c هو الوتر المقابل للزاوية القائمة.",
        "h2": "الضلع المجاور والوتر: المُدخلان",
        "imgAlt": "مثلث قائم مع إبراز الضلع المجاور b والوتر c لصيغة arccos"
      },
      "arccos-applications": {
        "blocks": [
          {
            "kind": "p",
            "text": "يظهر arccos حيثما تكون مسافة المنحدر والمسافة الأفقية هما القياسين الطبيعيين. يُقاس الوتر على طول المنحدر نفسه، والضلع المجاور هو المركبة الأفقية."
          },
          {
            "kind": "h3",
            "text": "مسح المنحدرات"
          },
          {
            "kind": "p",
            "text": "يقيس المساح 65 متراً على طول منحدر و 60 متراً أفقياً. زاوية المنحدر هي arccos(60/65)، أي حوالي 22.6 درجة. هذه هي حالة arccos القياسية: مسافة الميل سهلة القياس بالشريط، والمسافة الأفقية تأتي من الخريطة أو ميزان التسوية، والضلع المقابل (الارتفاع) هو ما قد تحسبه بعد ذلك."
          },
          {
            "kind": "h3",
            "text": "ارتفاع الشمس من الظلال"
          },
          {
            "kind": "p",
            "text": "شعاع ضوء طوله 10 أمتار يلقي ظلاً طوله 8 أمتار. زاوية ارتفاع الشمس هي arccos(8/10)، أي حوالي 36.9 درجة. مسائل الظل هي مسائل arccos طبيعية لأن الظل يقع على الأرض (المجاور) والشعاع هو الوتر."
          },
          {
            "kind": "h3",
            "text": "ميل عارضة السقف"
          },
          {
            "kind": "p",
            "text": "تمتد عارضة 6.5 متر مع امتداد أفقي 6 أمتار. زاوية الميل عند الطنف هي arccos(6/6.5)، أي حوالي 22.6 درجة. يقيس النجار العارضة مباشرة والامتداد على طول الرافدة، لذا يناسب arccos القياسات كما أُخذت."
          },
          {
            "kind": "h3",
            "text": "دعامات هندسية"
          },
          {
            "kind": "p",
            "text": "دعامة قطرية طولها 4 أمتار بقاعدة أفقية 3.5 متر. زاوية الدعامة هي arccos(3.5/4)، أي حوالي 28.96 درجة. تعطي المخططات الإنشائية طول الدعامة وبصمتها؛ ويحول arccos ذلك إلى زاوية التركيب."
          }
        ],
        "figcaption": "مسائل arccos من العالم الحقيقي: زوايا المنحدرات، وارتفاع الشمس، وميل العوارض، وزوايا تركيب الدعامات.",
        "h2": "تطبيقات arccos في الحياة الواقعية",
        "imgAlt": "أربع لوحات تعرض حسابات زوايا arccos للمسح والظل وعارضة السقف والدعامة"
      },
      "arccos-conclusion": {
        "blocks": [
          {
            "kind": "p",
            "text": "ابدأ بتحديد الضلع المجاور: الساق التي تلامس زاويتك المستهدفة. تأكد أن الوتر هو أطول ضلع. اقسم، وطبق arccos، واقرأ الزاوية بالدرجات. احصل على الزاوية الثانية من 90 ناقص الأولى. تحقق بفحص الذهاب والإياب، وحساب عبر طريقة أخرى، ومجموع الزوايا. بهذه الخطوات، تتحول أي مسألة ضلع-مجاور-ووتر إلى روتين موثوق. عُد إلى الحاسبة أعلى هذه الصفحة لتشغيل أرقامك."
          }
        ],
        "h2": "جد أي زاوية من جيب التمام بثقة"
      },
      "arccos-examples": {
        "blocks": [
          {
            "kind": "p",
            "text": "يتبع كل مثال نفس الخطوات الأربع: اكتب الصيغة، وعوّض، واقسم، وطبق arccos. الزوايا مقربة إلى منزلتين عشريتين."
          },
          {
            "kind": "h3",
            "text": "مثال 1: مثلث 3-4-5"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 4 والوتر c = 5، جد الزاوية A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) [[\\\\approx 36.87^\\\\circ]]. المتممة B = 53.13[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "مثال 2: مثلث 5-12-13"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 12 والوتر c = 13، جد الزاوية A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) [[\\\\approx 22.62^\\\\circ]]. المتممة B = 67.38[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "مثال 3: مثلث 8-15-17"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 8 والوتر c = 17، جد الزاوية A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) [[\\\\approx 61.93^\\\\circ]]. المتممة B = 28.07[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "مثال 4: نفس المثلث، الزاوية الأخرى"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 15 والوتر c = 17 (حل الزاوية B من مثلث 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) [[\\\\approx 28.07^\\\\circ]]. لاحظ أن 61.93 + 28.07 = 90، كما هو مطلوب."
          },
          {
            "kind": "h3",
            "text": "مثال 5: 5-12-13، الزاوية الأخرى"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 5 والوتر c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) [[\\\\approx 67.38^\\\\circ]]. وهذا يطابق المتممة من مثال 2."
          },
          {
            "kind": "h3",
            "text": "مثال 6: 3-4-5، الزاوية الأخرى"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 3 والوتر c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) [[\\\\approx 53.13^\\\\circ]]. وهذا يطابق المتممة من مثال 1."
          },
          {
            "kind": "h3",
            "text": "مثال 7: الحالة الخاصة 60 درجة"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 1 والوتر c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60[[\\\\^\\\\circ]] بالضبط. هذا هو المثلث الخاص 30-60-90."
          },
          {
            "kind": "h3",
            "text": "مثال 8: مثلث 7-24-25"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 7 والوتر c = 25، جد الزاوية A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) [[\\\\approx 73.74^\\\\circ]]. المتممة B = 16.26[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "مثال 9: 7-24-25، الزاوية الأخرى"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 24 والوتر c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) [[\\\\approx 16.26^\\\\circ]]. يطابق المتممة من مثال 8."
          },
          {
            "kind": "h3",
            "text": "مثال 10: مثلث 9-40-41"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 9 والوتر c = 41، جد الزاوية A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) [[\\\\approx 77.32^\\\\circ]]. الضلع المجاور الصغير يعطي زاوية واسعة."
          },
          {
            "kind": "h3",
            "text": "مثال 11: 9-40-41، الزاوية الأخرى"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 40 والوتر c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) [[\\\\approx 12.68^\\\\circ]]. لاحظ أن 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "مثال 12: مثلث 20-21-29"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 20 والوتر c = 29، جد الزاوية A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) [[\\\\approx 46.40^\\\\circ]]. المتممة B = 43.60[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "مثال 13: 20-21-29، الزاوية الأخرى"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 21 والوتر c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) [[\\\\approx 43.60^\\\\circ]]. يطابق المتممة من مثال 12."
          },
          {
            "kind": "h3",
            "text": "مثال 14: مثلث 6-8-10"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 6 والوتر c = 10، جد الزاوية A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) [[\\\\approx 53.13^\\\\circ]]. نفس زاوية مثال 6، لأن 6-8-10 هو 3-4-5 مكبر."
          },
          {
            "kind": "h3",
            "text": "مثال 15: 6-8-10، الزاوية الأخرى"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 8 والوتر c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) [[\\\\approx 36.87^\\\\circ]]. مثل مثال 1، مما يؤكد أن المثلثات المتشابهة تشترك في الزوايا."
          },
          {
            "kind": "h3",
            "text": "مثال 16: مثلث 12-16-20"
          },
          {
            "kind": "p",
            "text": "بمعلومية الضلع المجاور b = 12 والوتر c = 20، جد الزاوية A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) [[\\\\approx 53.13^\\\\circ]]. 3-4-5 مكبر مرة أخرى، ونفس الزاوية مجدداً. تكبير الأضلاع لا يغير الزوايا أبداً."
          }
        ],
        "h2": "16 مثالاً محلولاً"
      },
      "arccos-howto": {
        "blocks": [],
        "figcaption": "مثال محلول: b = 4 و c = 5 يعطي A = arccos(0.8)، أي حوالي 36.87 درجة، تم التحقق منه بالذهاب والإياب.",
        "h2": "كيفية استخدام حاسبة الزاوية من جيب التمام",
        "imgAlt": "مثال arccos من أربع خطوات حيث b تساوي 4 و c تساوي 5",
        "steps": [
          "<strong>تأكد من الزاوية القائمة.</strong> تعمل الحاسبة فقط مع المثلثات القائمة. حدد ركن الـ 90 درجة أولاً.",
          "<strong>اختر زاويتك المستهدفة.</strong> قرر ما إذا كنت تحل الزاوية A أو الزاوية B. يُعرَّف الضلع المجاور نسبة إلى هذا الاختيار.",
          "<strong>قس الضلع المجاور b.</strong> هذه هي الساق التي تلامس زاويتك المستهدفة. سجلها بأي وحدة.",
          "<strong>قس الوتر c.</strong> هذا هو أطول ضلع، المقابل للزاوية القائمة. استخدم نفس وحدة b.",
          "<strong>تحقق أن b أقل من c.</strong> إن لم يكن كذلك، فالأضلاع مسماة خطأ. يجب أن يكون الوتر هو الأطول.",
          "<strong>أدخل القيمتين واضغط احسب.</strong> تحسب الأداة b/c، وتطبق arccos، وتعيد الزاوية A بالدرجات.",
          "<strong>جد الزاوية الثانية.</strong> اطرح من 90 درجة: B = 90[[\\\\^\\\\circ]] ناقص A.",
          "<strong>تحقق.</strong> احسب cos(A) على الآلة الحاسبة وتأكد أنها تساوي b/c. إن كان كذلك، فالإجابة سليمة."
        ]
      },
      "arccos-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "تجد حاسبة زاوية المثلث القائم من جيب التمام زاوية حادة عندما تعرف الضلع المجاور والوتر. وهي تطبق دالة جيب التمام العكسية، المكتوبة arccos أو cos[[-1]]، على نسبة هذين الضلعين. النتيجة هي الزاوية A بالدرجات."
          },
          {
            "kind": "p",
            "text": "توجد هذه الأداة لحالة قياس محددة: يمكنك قياس الضلع المجاور لزاويتك المستهدفة وأطول ضلع في المثلث، لكن الضلع المقابل مجهول أو يصعب الوصول إليه. فبدلاً من حساب الضلع المقابل أولاً، يتجاوزه arccos تماماً ويحول نسبة المجاور-على-الوتر مباشرة إلى الزاوية."
          },
          {
            "kind": "p",
            "text": "على سبيل المثال، الضلع المجاور 4 والوتر 5 يعطيان النسبة 0.8. و arccos لـ 0.8 هو حوالي 36.87 درجة. تلك هي الزاوية A. أما الزاوية الحادة الأخرى فتتبع قاعدة المتممة: 90 ناقص 36.87، أي 53.13 درجة."
          },
          {
            "kind": "p",
            "text": "إن arccos واحدة من ثلاث أدوات مثلثية عكسية في هذا الموقع. إذا كانت الأضلاع المعروفة لديك هي الضلع المقابل والوتر، فإن <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">حاسبة الزاوية من الجيب</a> هي الخيار الصحيح. وإذا كنت تعرف الساقين لكن ليس الوتر، فاستخدم <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">حاسبة الزاوية من الظل</a>. تغطي هذه الصفحة حالة جيب التمام بعمق كامل."
          }
        ],
        "h2": "ما هي حاسبة زاوية المثلث القائم من جيب التمام؟"
      },
      "arccos-mistakes": {
        "blocks": [
          {
            "kind": "h3",
            "text": "استخدام الضلع المقابل بدلاً من الضلع المجاور"
          },
          {
            "kind": "p",
            "text": "الخطأ الأكثر شيوعاً. يحتاج arccos إلى الضلع الذي يلامس الزاوية A، وليس الضلع المقابل لها. إذا أدخلت الضلع المقابل في arccos، فستحصل على متممة الزاوية المقصودة. في مثلث 3-4-5، فإن arccos(3/5) = 53.13 درجة هي الزاوية B وليست الزاوية A. الحل: ارسم المثلث، وعلّم زاويتك المستهدفة، وتتبع أي ساق تلامسها."
          },
          {
            "kind": "h3",
            "text": "وضع الوتر في البسط"
          },
          {
            "kind": "p",
            "text": "يتوقع arccos المجاور على الوتر، وهو عدد أقل من 1. إدخال c/b بدلاً من b/c يعطي نسبة أكبر من 1، وتعيد الحاسبة خطأ رياضياً. الحل: الوتر هو المقام دائماً في نسبة arccos."
          },
          {
            "kind": "h3",
            "text": "الخلط بين arccos وجيب التمام"
          },
          {
            "kind": "p",
            "text": "في كثير من الآلات الحاسبة، يقع مفتاح جيب التمام ومفتاح جيب التمام العكسي (المسمى غالباً cos[[-1]] أو arccos) بالقرب من بعضهما. الضغط على cos(0.8) بدلاً من arccos(0.8) يعطي 0.6967، وهي نسبة لا معنى لها، بدلاً من 36.87 درجة. الحل: تحقق أن آلتك الحاسبة في وضع الدرجات وأنك ضغطت المفتاح العكسي."
          },
          {
            "kind": "h3",
            "text": "خلط الدرجات والراديان"
          },
          {
            "kind": "p",
            "text": "إن arccos(0.8) هو 36.87 درجة لكنه 0.6435 راديان. إذا أعطاك حسابك اليدوي 0.64 لمثلث 3-4-5، فالآلة الحاسبة في وضع الراديان. اضرب في 180/pi للتحويل، أو بدّل الوضع إلى الدرجات. هذه الحاسبة تخرج الدرجات."
          },
          {
            "kind": "h3",
            "text": "إدخال الأضلاع بوحدات مختلفة"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور بالبوصة والوتر بالقدم يفسد النسبة. حوّل إلى وحدة مشتركة أولاً. النسبة بلا وحدة، لكن فقط عندما يتشارك المُدخلان الوحدة."
          },
          {
            "kind": "h3",
            "text": "تقريب النسبة مبكراً جداً"
          },
          {
            "kind": "p",
            "text": "إن arccos(0.8) = 36.87 درجة، لكن arccos(0.80) المقرب من 0.795 يعطي 37.24 درجة. بالقرب من النسبتين 0 و 1، حيث يكون arccos أشد انحداراً، تتضخم أخطاء النسبة الصغيرة. حافظ على الدقة الكاملة خلال القسمة وقرّب الزاوية النهائية فقط."
          },
          {
            "kind": "h3",
            "text": "نسيان أي زاوية تم حلها"
          },
          {
            "kind": "p",
            "text": "يعيد arccos الزاوية التي أدخلت ضلعها المجاور. إذا أدخلت الضلع الذي يلامس الزاوية B، فالنتيجة هي الزاوية B. سمِّ الإجابة باسم الزاوية الصحيح، أو تحقق بالمتممة: يجب أن يكون مجموع الزاويتين الحادتين 90 درجة."
          }
        ],
        "h2": "أخطاء شائعة عند استخدام arccos"
      },
      "arccos-special": {
        "blocks": [
          {
            "kind": "p",
            "text": "تظهر بعض قيم arccos بتكرار كبير يجعل التعرف عليها يوفر الوقت. وهي تأتي من المثلثات القائمة الخاصة."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1) = 0^\\\\circ]]: الضلع المجاور يساوي الوتر، فتنهار الزاوية إلى الصفر. هذه حالة منحلة وليست مثلثاً حقيقياً، لكنها تثبت المقياس."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{3}/2) \\\\approx 30^\\\\circ]]: من مثلث 30-60-90. عندما يكون الضلع المجاور حوالي 86.6 بالمائة من الوتر، تكون الزاوية 30 درجة."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{2}/2) = 45^\\\\circ]]: من مثلث 45-45-90. الساقان المتساويتان تعطيان هذه القيمة الدقيقة."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1/2) = 60^\\\\circ]]: من مثلث 30-60-90، وهي حالة مثال 7. عندما يكون الضلع المجاور نصف الوتر تماماً، تكون الزاوية 60 درجة تماماً."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(0) = 90^\\\\circ]]: يتقلص الضلع المجاور إلى الصفر، فتنفتح الزاوية إلى زاوية قائمة. ومثل حالة الصفر، هذا حد وليس زاوية مثلث حقيقية."
          },
          {
            "kind": "p",
            "text": "بين هذه العلامات، يتناقص arccos بسلاسة مع زيادة النسبة. حفظ نقاط الارتكاز الخمس يتيح لك تقدير أي arccos ذهنياً: النسبة 0.7 تقع بين 0.5 (60 درجة) و 0.866 (30 درجة)، وأقرب قليلاً إلى 45 درجة. القيمة الحقيقية حوالي 45.57 درجة."
          }
        ],
        "h2": "قيم الزوايا الخاصة الجديرة بالحفظ"
      },
      "arccos-verify": {
        "blocks": [
          {
            "kind": "p",
            "text": "ثلاثة فحوصات تؤكد صحة حساب arccos:"
          },
          {
            "kind": "p",
            "text": "لمثلث 3-4-5، تحقق أيضاً من أن الأضلاع تحقق نظرية فيثاغورس: 9 + 16 = 25. تأكيد الأضلاع قبل الوثوق بالزاوية المشتقة منها ممارسة جيدة."
          },
          {
            "kind": "p",
            "text": "الفحص الرابع يستخدم المتممة. احسب B = 90[[\\\\^\\\\circ]] ناقص A، ثم تحقق أن arccos للنسبة الأخرى يعطي B. في مثال 1، فإن arccos(3/5) = 53.13[[\\\\^\\\\circ]]، وهو يطابق 90 ناقص 36.87. عندما تنجح الفحوصات الأربعة، تصبح الإجابة فوق الشك."
          }
        ],
        "h2": "التحقق من إجابة arccos الخاصة بك",
        "steps": [
          "<strong>فحص النطاق.</strong> يجب أن تقع النتيجة بين 0 و 90 درجة حصراً. أي شيء خارج ذلك يشير إلى مُدخلات غير صالحة أو أضلاع مسماة خطأ.",
          "<strong>فحص الذهاب والإياب.</strong> احسب cos(A) وتأكد أنها تساوي b/c. لمثال 1، فإن cos(36.87[[\\\\^\\\\circ]]) [[\\\\approx]] 0.8 = 4/5. إذا فشل الذهاب والإياب، فالزاوية خاطئة.",
          "<strong>فحص عبر الطرق.</strong> أعد الحساب باستخدام arcsin أو arctan مع الضلع الثالث. إذا كان arccos(4/5) = 36.87[[\\\\^\\\\circ]] و arctan(3/4) = 36.87[[\\\\^\\\\circ]]، فالإجابة سليمة. الاختلاف يشير إلى خطأ في التسمية."
        ]
      },
      "arccos-vs": {
        "blocks": [
          {
            "kind": "p",
            "text": "تجد الدوال العكسية الثلاث نفس الزاوية عند تطبيقها على المثلث نفسه. وهي تختلف فقط في الأضلاع التي تتطلبها. الاختيار الصحيح يوفر عليك حساب ضلع لا تحتاجه."
          },
          {
            "kind": "p",
            "text": "استخدم <strong>arccos</strong> عندما تعرف الضلع المجاور (b) والوتر (c). الصيغة هي [[A = \\\\cos^{-1}(b/c)]]. هذا هو الخيار الطبيعي عندما يُقاس الوتر مباشرة، مثلاً بشريط على طول منحدر، والمسافة الأفقية معروفة."
          },
          {
            "kind": "p",
            "text": "استخدم <strong>arcsin</strong> عندما تعرف الضلع المقابل (a) والوتر (c). الصيغة هي [[A = \\\\sin^{-1}(a/c)]]. مسائل الارتفاع تفضل arcsin: الارتفاع الرأسي يقابل زاوية مستوى الأرض."
          },
          {
            "kind": "p",
            "text": "استخدم <strong>arctan</strong> عندما تعرف الساقين (a و b) لكن ليس الوتر. الصيغة هي [[A = \\\\tan^{-1}(a/b)]]. قياسات الميدان مثل ارتفاع السقف على الامتداد تفضل arctan لأن الساقين يُقاسان مباشرة."
          },
          {
            "kind": "h3",
            "text": "يجب أن تتفق"
          },
          {
            "kind": "p",
            "text": "لأي مثلث واحد، فإن arccos(b/c) و arcsin(a/c) و arctan(a/b) تنتج الزاوية نفسها. في مثلث 3-4-5، فإن arccos(4/5) و arcsin(3/5) و arctan(3/4) كلها تساوي 36.87 درجة. إذا اختلفت طريقتان، فأحد الأضلاع مسمى خطأ. هذا الفحص المتقاطع هو التحقق الأكثر موثوقية المتاح."
          },
          {
            "kind": "h3",
            "text": "لماذا لا نستخدم arctan دائماً؟"
          },
          {
            "kind": "p",
            "text": "يحتاج arctan إلى الساقين معاً. إذا كان الضلع المقابل مجهولاً ويصعب قياسه، فإن حسابه أولاً لمجرد استخدام arctan يضيف خطوة غير ضرورية وفرصة إضافية للخطأ. ينتقل arccos مباشرة من الضلعين اللذين لديك إلى الزاوية التي تريدها. طابق الدالة مع قياساتك، لا مع العادة."
          }
        ],
        "h2": "arccos مقابل arcsin مقابل arctan: متى تستخدم كلاً منها"
      },
      "arccos-what": {
        "blocks": [
          {
            "kind": "p",
            "text": "جيب التمام العادي يأخذ زاوية ويعيد نسبة. جيب تمام 60 درجة هو 0.5. أما arccos فيعكس ذلك: يأخذ نسبة ويعيد الزاوية. فـ arccos لـ 0.5 هو 60 درجة. الدالتان تلغي إحداهما الأخرى، ولهذا يُكتب arccos أيضاً على شكل cos[[-1]]."
          },
          {
            "kind": "p",
            "text": "الصيغة التي تستخدمها هذه الحاسبة هي [[A = \\\\cos^{-1}(b/c)]]. هنا b هو الضلع المجاور، و c هو الوتر، و A هي الزاوية بينهما. تقع النسبة b/c دائماً بين 0 و 1 في المثلث القائم الصحيح، لأن الضلع المجاور أقصر دائماً من الوتر."
          },
          {
            "kind": "p",
            "text": "اعتبر arccos سؤالاً: \"أي زاوية جيب تمامها هذه القيمة؟\" إذا كانت b/c تساوي 0.8، يصبح السؤال \"أي زاوية جيب تمامها 0.8؟\" والإجابة، 36.87 درجة، هي الزاوية التي ضلعها المجاور 80 بالمائة بطول الوتر."
          },
          {
            "kind": "h3",
            "text": "النسبة تحكي قصة"
          },
          {
            "kind": "p",
            "text": "تصف قيمة b/c شكل المثلث. النسبة القريبة من 1 تعني أن الضلع المجاور يكاد يساوي الوتر طولاً، فتكون الزاوية بينهما ضئيلة. والنسبة القريبة من 0 تعني أن الضلع المجاور قصير جداً مقارنة بالوتر، فتنفتح الزاوية على اتساعها نحو 90 درجة. والنسبة 0.5 بالضبط تعني دائماً 60 درجة."
          },
          {
            "kind": "h3",
            "text": "مجال arccos"
          },
          {
            "kind": "p",
            "text": "يقبل arccos فقط مُدخلات من 0 إلى 1 في هذا السياق الهندسي. النسبة فوق 1 مستحيلة في المثلث القائم وتشير إلى خطأ في التسمية: يجب أن يكون الوتر هو المقام ويجب أن يكون أطول ضلع. أما النسبة السالبة فتصف زاوية منفرجة، ولا يمكن أن تظهر كزاوية A في مثلث قائم."
          }
        ],
        "figcaption": "كيف يعمل arccos: اقسم الضلع المجاور على الوتر، ثم طبق جيب التمام العكسي لاستعادة الزاوية.",
        "h2": "فهم arccos (جيب التمام العكسي)",
        "imgAlt": "رسم يوضح خطوتي arccos: اقسم b على c، ثم طبق arccos للحصول على الزاوية"
      }
    },
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "arccos-anatomy": "الضلع المجاور والوتر",
      "arccos-applications": "تطبيقات الحياة الواقعية",
      "arccos-conclusion": "جد أي زاوية من جيب التمام بثقة",
      "arccos-examples": "16 مثالاً محلولاً",
      "arccos-faq": "الأسئلة الشائعة",
      "arccos-howto": "كيفية استخدام الحاسبة",
      "arccos-intro": "ما هي حاسبة الزاوية من جيب التمام؟",
      "arccos-mistakes": "أخطاء شائعة",
      "arccos-special": "قيم الزوايا الخاصة",
      "arccos-verify": "التحقق من إجابتك",
      "arccos-vs": "arccos مقابل arcsin مقابل arctan",
      "arccos-what": "فهم arccos (جيب التمام العكسي)"
    }
  },
  "bg": {
    "faqs": [
      {
        "question": "Какво всъщност означава A = arccos(b / c)?",
        "answer": "Означава, че разделяте прилежащия катет на хипотенузата, след което работите наобратно от това десетично число, за да намерите ъгъла, чийто косинус е равен на него. Резултатът е острият ъгъл между прилежащия катет и хипотенузата."
      },
      {
        "question": "Кога да използвам arccos вместо arcsin?",
        "answer": "Използвайте arccos, когато знаете прилежащия катет и хипотенузата. Използвайте arcsin, когато знаете срещулежащия катет и хипотенузата. И двете дават един и същ ъгъл за един и същ триъгълник; изборът зависи от това кои страни сте измерили."
      },
      {
        "question": "Защо получавам математическа грешка от arccos?",
        "answer": "Най-честата причина е отношение, по-голямо от 1, което се случва, когато въведеният прилежащ катет е по-дълъг от хипотенузата. Във валиден правоъгълен триъгълник хипотенузата винаги е най-дълга, затова проверете означенията на страните."
      },
      {
        "question": "Мога ли да използвам arccos, без да знам срещулежащия катет?",
        "answer": "Да. Това е основното предимство на arccos: нужен му е само прилежащият катет и хипотенузата. Срещулежащият катет никога не влиза в изчислението."
      },
      {
        "question": "Каква е разликата между cos и arccos?",
        "answer": "Косинусът взема ъгъл и връща отношение: cos(60 градуса) = 0.5. Arccos обръща това: взема отношение и връща ъгъл, така че arccos(0.5) = 60 градуса. Използвайте косинус, когато знаете ъгъла; използвайте arccos, когато знаете страните."
      },
      {
        "question": "Защо arccos, arcsin и arctan дават един и същ отговор?",
        "answer": "Защото описват един и същ геометричен ъгъл чрез различни двойки страни. В триъгълник 3-4-5, arccos(4/5), arcsin(3/5) и arctan(3/4) са равни на 36.87 градуса. Съгласието между методите потвърждава правилните означения на страните."
      },
      {
        "question": "Какво означава, ако b/c е точно равно на 0.5?",
        "answer": "Ъгълът е точно 60 градуса. Това е специалният триъгълник 30-60-90, при който страната, прилежаща на ъгъла от 60 градуса, е половината от хипотенузата."
      },
      {
        "question": "Отговорът трябва ли да е в градуси или радиани?",
        "answer": "Този калкулатор използва градуси, стандартът за строителство, геодезия и училищна геометрия. Ако изчислявате на ръка, уверете се, че калкулаторът е в режим на градуси; резултат в радиани като 0.64 се преобразува в 36.87 градуса чрез умножение по 180/pi."
      },
      {
        "question": "Как да намеря другия остър ъгъл?",
        "answer": "Извадете от 90 градуса. Ако arccos даде A = 36.87 градуса, тогава B = 90 - 36.87 = 53.13 градуса. Не е нужна допълнителна тригонометрия."
      },
      {
        "question": "Може ли резултатът от arccos да бъде 90 градуса?",
        "answer": "Само като граница: arccos(0) = 90 градуса, но нулев прилежащ катет означава изроден триъгълник, а не истински. Валидните ъгли на правоъгълен триъгълник от arccos винаги са строго между 0 и 90 градуса."
      },
      {
        "question": "Как да проверя отговора си от arccos?",
        "answer": "Изчислете cos(A) и потвърдете, че е равен на b/c. Преизчислете също с arcsin или arctan, използвайки третата страна; всички методи трябва да съвпаднат. Накрая проверете дали двата остри ъгъла сумарно дават точно 90 градуса."
      },
      {
        "question": "Променя ли мащабирането на триъгълника резултата от arccos?",
        "answer": "Не. Подобните триъгълници имат еднакви ъгли. Триъгълник 3-4-5 и триъгълник 6-8-10 дават arccos(0.8) = 36.87 градуса, защото отношението b/c не се променя при мащабиране."
      }
    ],
    "relatedHeading": "Разгледайте свързани калкулатори за правоъгълен триъгълник",
    "relatedItems": [
      "Калкулатор за ъгъл на правоъгълен триъгълник",
      "Калкулатор за ъгъл на правоъгълен триъгълник от синус",
      "Калкулатор за ъгъл на правоъгълен триъгълник от тангенс",
      "Калкулатор за страна на правоъгълен триъгълник от косинус",
      "Калкулатор за страна на правоъгълен триъгълник",
      "Калкулатор за липсващ ъгъл на правоъгълен триъгълник",
      "Калкулатор за тригонометрични отношения на правоъгълен триъгълник",
      "Калкулатор за косинусово отношение"
    ],
    "sections": {
      "arccos-anatomy": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos се нуждае от точно две страни: прилежащия катет b и хипотенузата c. Правилното им означаване е цялата битка. Всичко след това е аритметика."
          },
          {
            "kind": "h3",
            "text": "Разпознаване на прилежащия катет"
          },
          {
            "kind": "p",
            "text": "Прилежащият катет е катетът, който докосва ъгъл A. Той образува единия ръб на самия ъгъл. На диаграмата по-долу страна b минава по дъното от правия ъгъл до ъгъл A. Ако решавате за другия остър ъгъл B, означенията се разменят: страната, прилежаща на B, е тази, която докосва B."
          },
          {
            "kind": "h3",
            "text": "Разпознаване на хипотенузата"
          },
          {
            "kind": "p",
            "text": "Хипотенузата е страната срещу правия ъгъл. Тя винаги е най-дългата страна на триъгълника. Тя никога не докосва върха на правия ъгъл. Ако вашата \"хипотенуза\" не е най-дългата от трите ви измервания, преозначете преди изчисление."
          },
          {
            "kind": "h3",
            "text": "Защо срещулежащият катет остава извън"
          },
          {
            "kind": "p",
            "text": "Косинусът е дефиниран като прилежащ върху хипотенуза. Срещулежащият катет изобщо не се появява в това отношение. Това е смисълът на този калкулатор: когато срещулежащият катет е неизвестен, скрит или без значение за вашата измервателна постановка, arccos все пак дава ъгъла. Вие не пренебрегвате срещулежащия катет; използвате отношение, което никога не го е нуждаело."
          }
        ],
        "figcaption": "Анатомия за arccos: b е прилежащият катет, докосващ ъгъл A, c е хипотенузата срещу правия ъгъл.",
        "h2": "Прилежащ катет и хипотенуза: двата входа",
        "imgAlt": "Правоъгълен триъгълник с подчертани прилежащ катет b и хипотенуза c за формулата на arccos"
      },
      "arccos-applications": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos се появява навсякъде, където разстоянието по наклона и хоризонталното разстояние са естествените измервания. Хипотенузата се измерва по самия наклон, а прилежащият катет е хоризонталната компонента."
          },
          {
            "kind": "h3",
            "text": "Геодезия на наклони"
          },
          {
            "kind": "p",
            "text": "Геодезист измерва 65 метра по наклон и 60 метра хоризонтално. Ъгълът на наклона е arccos(60/65), около 22.6 градуса. Това е стандартната ситуация за arccos: наклоненото разстояние се измерва лесно с ролетка, хоризонталното идва от картата или нивелира, а срещулежащият катет (височината) е това, което може да изчислите след това."
          },
          {
            "kind": "h3",
            "text": "Височина на слънцето от сенки"
          },
          {
            "kind": "p",
            "text": "Светлинен лъч от 10 метра хвърля сянка от 8 метра. Ъгълът на издигане на слънцето е arccos(8/10), около 36.9 градуса. Задачите със сенки са естествени задачи за arccos, защото сянката лежи на земята (прилежащ), а лъчът е хипотенузата."
          },
          {
            "kind": "h3",
            "text": "Наклон на покривна греда"
          },
          {
            "kind": "p",
            "text": "Греда обхваща 6.5 метра с хоризонтален участък от 6 метра. Ъгълът на наклона при стрехата е arccos(6/6.5), около 22.6 градуса. Дърводелците измерват гредата директно и участъка по гредата, така че arccos пасва на измерванията такива, каквито са взети."
          },
          {
            "kind": "h3",
            "text": "Инженерни подпори"
          },
          {
            "kind": "p",
            "text": "Диагонална подпора е с размери 4 метра с хоризонтална основа 3.5 метра. Ъгълът на подпората е arccos(3.5/4), около 28.96 градуса. Конструктивните скици дават дължината на подпората и нейния отпечатък; arccos ги превръща в монтажния ъгъл."
          }
        ],
        "figcaption": "Задачи с arccos от реалния свят: ъгли на наклони, височина на слънцето, наклон на греди и монтажни ъгли на подпори.",
        "h2": "Приложения на arccos в реалния живот",
        "imgAlt": "Четири панела, показващи изчисления на ъгли с arccos за геодезия, сянка, покривна греда и подпора"
      },
      "arccos-conclusion": {
        "blocks": [
          {
            "kind": "p",
            "text": "Започнете с разпознаване на прилежащия катет: катетът, докосващ целевия ви ъгъл. Потвърдете, че хипотенузата е най-дългата страна. Разделете, приложете arccos и прочетете ъгъла в градуси. Вземете втория ъгъл от 90 минус първия. Проверете с проверката за отиване и връщане, изчисление по кръстосан метод и сумата на ъглите. С тези стъпки всяка задача с прилежащ катет и хипотенуза се свежда до надеждна рутина. Върнете се към калкулатора в горната част на тази страница, за да изчислите вашите числа."
          }
        ],
        "h2": "Намерете всеки ъгъл от косинус с увереност"
      },
      "arccos-examples": {
        "blocks": [
          {
            "kind": "p",
            "text": "Всеки пример следва едни и същи четири стъпки: напишете формулата, заместете, разделете, приложете arccos. Ъглите са закръглени до два десетични знака."
          },
          {
            "kind": "h3",
            "text": "Пример 1: Триъгълник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 4 и хипотенуза c = 5, намерете ъгъл A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) [[\\\\approx 36.87^\\\\circ]]. Допълнението B = 53.13[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Пример 2: Триъгълник 5-12-13"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 12 и хипотенуза c = 13, намерете ъгъл A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) [[\\\\approx 22.62^\\\\circ]]. Допълнението B = 67.38[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Пример 3: Триъгълник 8-15-17"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 8 и хипотенуза c = 17, намерете ъгъл A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) [[\\\\approx 61.93^\\\\circ]]. Допълнението B = 28.07[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Пример 4: Същият триъгълник, другият ъгъл"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 15 и хипотенуза c = 17 (решаване за ъгъл B на триъгълник 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) [[\\\\approx 28.07^\\\\circ]]. Забележете, че 61.93 + 28.07 = 90, както се изисква."
          },
          {
            "kind": "h3",
            "text": "Пример 5: 5-12-13, другият ъгъл"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 5 и хипотенуза c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) [[\\\\approx 67.38^\\\\circ]]. Това съвпада с допълнението от пример 2."
          },
          {
            "kind": "h3",
            "text": "Пример 6: 3-4-5, другият ъгъл"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 3 и хипотенуза c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) [[\\\\approx 53.13^\\\\circ]]. Това съвпада с допълнението от пример 1."
          },
          {
            "kind": "h3",
            "text": "Пример 7: Специалният случай 60 градуса"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 1 и хипотенуза c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60[[\\\\^\\\\circ]] точно. Това е специалният триъгълник 30-60-90."
          },
          {
            "kind": "h3",
            "text": "Пример 8: Триъгълник 7-24-25"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 7 и хипотенуза c = 25, намерете ъгъл A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) [[\\\\approx 73.74^\\\\circ]]. Допълнението B = 16.26[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Пример 9: 7-24-25, другият ъгъл"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 24 и хипотенуза c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) [[\\\\approx 16.26^\\\\circ]]. Съвпада с допълнението от пример 8."
          },
          {
            "kind": "h3",
            "text": "Пример 10: Триъгълник 9-40-41"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 9 и хипотенуза c = 41, намерете ъгъл A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) [[\\\\approx 77.32^\\\\circ]]. Малък прилежащ катет дава широк ъгъл."
          },
          {
            "kind": "h3",
            "text": "Пример 11: 9-40-41, другият ъгъл"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 40 и хипотенуза c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) [[\\\\approx 12.68^\\\\circ]]. Забележете, че 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "Пример 12: Триъгълник 20-21-29"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 20 и хипотенуза c = 29, намерете ъгъл A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) [[\\\\approx 46.40^\\\\circ]]. Допълнението B = 43.60[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Пример 13: 20-21-29, другият ъгъл"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 21 и хипотенуза c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) [[\\\\approx 43.60^\\\\circ]]. Съвпада с допълнението от пример 12."
          },
          {
            "kind": "h3",
            "text": "Пример 14: Триъгълник 6-8-10"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 6 и хипотенуза c = 10, намерете ъгъл A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) [[\\\\approx 53.13^\\\\circ]]. Същият ъгъл като в пример 6, тъй като 6-8-10 е мащабиран 3-4-5."
          },
          {
            "kind": "h3",
            "text": "Пример 15: 6-8-10, другият ъгъл"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 8 и хипотенуза c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) [[\\\\approx 36.87^\\\\circ]]. Същото като в пример 1, потвърждавайки, че подобните триъгълници споделят ъгли."
          },
          {
            "kind": "h3",
            "text": "Пример 16: Триъгълник 12-16-20"
          },
          {
            "kind": "p",
            "text": "Дадено: прилежащ катет b = 12 и хипотенуза c = 20, намерете ъгъл A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) [[\\\\approx 53.13^\\\\circ]]. Отново мащабиран 3-4-5, отново същият ъгъл. Мащабирането на страните никога не променя ъглите."
          }
        ],
        "h2": "16 решени примера"
      },
      "arccos-howto": {
        "blocks": [],
        "figcaption": "Решен пример: b = 4, c = 5 дава A = arccos(0.8), приблизително 36.87 градуса, проверено чрез отиване и връщане.",
        "h2": "Как да използвате калкулатора за ъгъл от косинус",
        "imgAlt": "Пример за arccos в четири стъпки с b равно на 4 и c равно на 5",
        "steps": [
          "<strong>Потвърдете правия ъгъл.</strong> Калкулаторът работи само за правоъгълни триъгълници. Първо определете 90-градусовия ъгъл.",
          "<strong>Изберете целевия си ъгъл.</strong> Решете дали решавате за ъгъл A или ъгъл B. Прилежащият катет се дефинира спрямо този избор.",
          "<strong>Измерете прилежащия катет b.</strong> Това е катетът, докосващ целевия ви ъгъл. Запишете го в каквато и да е мерна единица.",
          "<strong>Измерете хипотенузата c.</strong> Това е най-дългата страна, срещу правия ъгъл. Използвайте същата мерна единица като за b.",
          "<strong>Проверете дали b е по-малко от c.</strong> Ако не е, страните са означени грешно. Хипотенузата трябва да е най-дълга.",
          "<strong>Въведете двете стойности и натиснете Изчисли.</strong> Инструментът изчислява b/c, прилага arccos и връща ъгъл A в градуси.",
          "<strong>Намерете втория ъгъл.</strong> Извадете от 90 градуса: B = 90[[\\\\^\\\\circ]] минус A.",
          "<strong>Проверете.</strong> Изчислете cos(A) на калкулатор и потвърдете, че е равен на b/c. Ако е така, отговорът е солиден."
        ]
      },
      "arccos-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "Калкулаторът за ъгъл на правоъгълен триъгълник от косинус намира остър ъгъл, когато знаете прилежащия катет и хипотенузата. Той прилага обратната косинусова функция, записана arccos или cos[[-1]], върху отношението на тези две страни. Резултатът е ъгъл A в градуси."
          },
          {
            "kind": "p",
            "text": "Този инструмент съществува за конкретна измервателна ситуация: можете да измерите страната до целевия си ъгъл и най-дългата страна на триъгълника, но срещулежащият катет е неизвестен или труднодостъпен. Вместо първо да изчислявате срещулежащия катет, arccos го прескача изцяло и преобразува отношението прилежащ-върху-хипотенуза директно в ъгъл."
          },
          {
            "kind": "p",
            "text": "Например, прилежащ катет 4 и хипотенуза 5 дават отношение 0.8. Arccos от 0.8 е приблизително 36.87 градуса. Това е ъгъл A. Другият остър ъгъл следва от правилото за допълнение: 90 минус 36.87, или 53.13 градуса."
          },
          {
            "kind": "p",
            "text": "Arccos е един от трите обратни тригонометрични инструмента на този сайт. Ако известните ви страни са срещулежащият катет и хипотенузата, <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">калкулаторът за ъгъл от синус</a> е правилният избор. Ако знаете двата катета, но не и хипотенузата, използвайте <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">калкулатора за ъгъл от тангенс</a>. Тази страница обхваща косинусовия случай в пълна дълбочина."
          }
        ],
        "h2": "Какво представлява калкулаторът за ъгъл на правоъгълен триъгълник от косинус?"
      },
      "arccos-mistakes": {
        "blocks": [
          {
            "kind": "h3",
            "text": "Използване на срещулежащия катет вместо прилежащия"
          },
          {
            "kind": "p",
            "text": "Най-честата грешка. Arccos се нуждае от страната, докосваща ъгъл A, а не от страната срещу него. Ако подадете срещулежащия катет на arccos, получавате допълнението на търсения ъгъл. В триъгълник 3-4-5, arccos(3/5) = 53.13 градуса е ъгъл B, а не ъгъл A. Поправка: скицирайте триъгълника, отбележете целевия си ъгъл и проследете кой катет го докосва."
          },
          {
            "kind": "h3",
            "text": "Поставяне на хипотенузата в числителя"
          },
          {
            "kind": "p",
            "text": "Arccos очаква прилежащ върху хипотенуза, число под 1. Въвеждането на c/b вместо b/c дава отношение над 1 и калкулаторът връща математическа грешка. Поправка: хипотенузата винаги е знаменателят в отношението за arccos."
          },
          {
            "kind": "h3",
            "text": "Объркване на arccos с косинус"
          },
          {
            "kind": "p",
            "text": "На много калкулатори клавишът за косинус и клавишът за обратен косинус (често означен cos[[-1]] или arccos) са един до друг. Натискането на cos(0.8) вместо arccos(0.8) дава 0.6967, безсмислено отношение, вместо 36.87 градуса. Поправка: проверете дали калкулаторът ви е в режим на градуси и дали сте натиснали обратния клавиш."
          },
          {
            "kind": "h3",
            "text": "Смесване на градуси и радиани"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) е 36.87 градуса, но 0.6435 радиана. Ако ръчното ви изчисление даде 0.64 за триъгълник 3-4-5, калкулаторът е в радиани. Умножете по 180/pi за преобразуване или превключете режима на градуси. Този калкулатор извежда градуси."
          },
          {
            "kind": "h3",
            "text": "Въвеждане на страни в различни мерни единици"
          },
          {
            "kind": "p",
            "text": "Прилежащ катет в инчове и хипотенуза във футове разваля отношението. Първо преобразувайте в обща мерна единица. Отношението е безразмерно, но само когато и двата входа споделят мерната единица."
          },
          {
            "kind": "h3",
            "text": "Преждевременно закръгляне на отношението"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 градуса, но arccos(0.80), закръглено от 0.795, дава 37.24 градуса. Близо до отношения 0 и 1, където arccos е най-стръмен, малките грешки в отношението се усилват. Запазете пълна точност по време на делението и закръглете само крайния ъгъл."
          },
          {
            "kind": "h3",
            "text": "Забравяне кой ъгъл е решен"
          },
          {
            "kind": "p",
            "text": "Arccos връща ъгъла, чийто прилежащ катет сте въвели. Ако сте въвели страната, докосваща ъгъл B, резултатът е ъгъл B. Означете отговора с правилното име на ъгъла или проверете с допълнението: двата остри ъгъла трябва да сумират 90 градуса."
          }
        ],
        "h2": "Често срещани грешки при използване на arccos"
      },
      "arccos-special": {
        "blocks": [
          {
            "kind": "p",
            "text": "Някои стойности на arccos се появяват толкова често, че разпознаването им спестява време. Те идват от специалните правоъгълни триъгълници."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1) = 0^\\\\circ]]: прилежащият катет е равен на хипотенузата, така че ъгълът се свива до нула. Това е изроден случай, а не истински триъгълник, но той закотвя скалата."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{3}/2) \\\\approx 30^\\\\circ]]: от триъгълник 30-60-90. Когато прилежащият катет е около 86.6 процента от хипотенузата, ъгълът е 30 градуса."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{2}/2) = 45^\\\\circ]]: от триъгълник 45-45-90. Равните катети дават тази точна стойност."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1/2) = 60^\\\\circ]]: от триъгълник 30-60-90, случаят в пример 7. Когато прилежащият катет е точно половината от хипотенузата, ъгълът е точно 60 градуса."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(0) = 90^\\\\circ]]: прилежащият катет се свива до нула, така че ъгълът се отваря до прав ъгъл. Подобно на нулевия случай, това е граница, а не ъгъл на истински триъгълник."
          },
          {
            "kind": "p",
            "text": "Между тези ориентири arccos намалява плавно с увеличаване на отношението. Запомнянето на петте опорни точки ви позволява да оцените всеки arccos наум: отношение 0.7 е между 0.5 (60 градуса) и 0.866 (30 градуса), малко по-близо до 45 градуса. Истинската стойност е около 45.57 градуса."
          }
        ],
        "h2": "Специални стойности на ъгли, които си струва да запомните"
      },
      "arccos-verify": {
        "blocks": [
          {
            "kind": "p",
            "text": "Три проверки потвърждават правилно изчисление с arccos:"
          },
          {
            "kind": "p",
            "text": "За триъгълник 3-4-5 проверете също дали страните удовлетворяват Питагоровата теорема: 9 + 16 = 25. Потвърждаването на страните, преди да се доверите на ъгъла, изведен от тях, е добра практика."
          },
          {
            "kind": "p",
            "text": "Четвърта проверка използва допълнението. Изчислете B = 90[[\\\\^\\\\circ]] минус A, след което проверете дали arccos от другото отношение дава B. В пример 1, arccos(3/5) = 53.13[[\\\\^\\\\circ]], което съвпада с 90 минус 36.87. Когато и четирите проверки преминат, отговорът е извън съмнение."
          }
        ],
        "h2": "Проверка на вашия отговор от arccos",
        "steps": [
          "<strong>Проверка на диапазона.</strong> Резултатът трябва да е строго между 0 и 90 градуса. Всичко извън това сигнализира за невалидни входове или грешно означени страни.",
          "<strong>Проверка за отиване и връщане.</strong> Изчислете cos(A) и потвърдете, че е равен на b/c. За пример 1, cos(36.87[[\\\\^\\\\circ]]) [[\\\\approx]] 0.8 = 4/5. Ако отиването и връщането се провали, ъгълът е грешен.",
          "<strong>Кръстосана проверка по метод.</strong> Преизчислете с arcsin или arctan, използвайки третата страна. Ако arccos(4/5) = 36.87[[\\\\^\\\\circ]] и arctan(3/4) = 36.87[[\\\\^\\\\circ]], отговорът е солиден. Несъгласието сочи грешка в означаването."
        ]
      },
      "arccos-vs": {
        "blocks": [
          {
            "kind": "p",
            "text": "И трите обратни функции намират един и същ ъгъл, когато се приложат към един и същ триъгълник. Те се различават само по това кои страни изискват. Правилният избор ви спестява изчисляването на страна, която не ви трябва."
          },
          {
            "kind": "p",
            "text": "Използвайте <strong>arccos</strong>, когато знаете прилежащия катет (b) и хипотенузата (c). Формулата е [[A = \\\\cos^{-1}(b/c)]]. Това е естественият избор, когато хипотенузата е измерена директно, например с ролетка по наклон, а хоризонталното разстояние е известно."
          },
          {
            "kind": "p",
            "text": "Използвайте <strong>arcsin</strong>, когато знаете срещулежащия катет (a) и хипотенузата (c). Формулата е [[A = \\\\sin^{-1}(a/c)]]. Задачите за височина предпочитат arcsin: вертикалното издигане е срещу ъгъла на нивото на земята."
          },
          {
            "kind": "p",
            "text": "Използвайте <strong>arctan</strong>, когато знаете двата катета (a и b), но не и хипотенузата. Формулата е [[A = \\\\tan^{-1}(a/b)]]. Теренните измервания като издигане на покрив върху участък предпочитат arctan, защото двата катета се измерват директно."
          },
          {
            "kind": "h3",
            "text": "Те трябва да съвпадат"
          },
          {
            "kind": "p",
            "text": "За всеки отделен триъгълник arccos(b/c), arcsin(a/c) и arctan(a/b) дават еднакъв ъгъл. В триъгълник 3-4-5, arccos(4/5), arcsin(3/5) и arctan(3/4) са равни на 36.87 градуса. Ако два метода не съвпадат, някоя страна е означена грешно. Тази кръстосана проверка е най-надеждната налична проверка."
          },
          {
            "kind": "h3",
            "text": "Защо не винаги да използваме arctan?"
          },
          {
            "kind": "p",
            "text": "Arctan се нуждае от двата катета. Ако срещулежащият катет е неизвестен и труден за измерване, изчисляването му първо само за да използвате arctan добавя ненужна стъпка и допълнителен шанс за грешка. Arccos отива директно от двете страни, които имате, към ъгъла, който искате. Съобразете функцията с измерванията си, а не с навика."
          }
        ],
        "h2": "Arccos срещу arcsin срещу arctan: кога да използвате всяка"
      },
      "arccos-what": {
        "blocks": [
          {
            "kind": "p",
            "text": "Обикновеният косинус взема ъгъл и връща отношение. Косинусът от 60 градуса е 0.5. Arccos обръща това: взема отношение и връща ъгъл. Arccos от 0.5 е 60 градуса. Двете функции се неутрализират взаимно, затова arccos се записва и като cos[[-1]]."
          },
          {
            "kind": "p",
            "text": "Формулата, използвана от този калкулатор, е [[A = \\\\cos^{-1}(b/c)]]. Тук b е прилежащият катет, c е хипотенузата, а A е ъгълът между тях. Отношението b/c винаги е между 0 и 1 за валиден правоъгълен триъгълник, защото прилежащият катет винаги е по-къс от хипотенузата."
          },
          {
            "kind": "p",
            "text": "Мислете за arccos като за въпрос: \"Кой ъгъл има тази косинусова стойност?\" Ако b/c е равно на 0.8, въпросът става \"кой ъгъл има косинус 0.8?\" Отговорът, 36.87 градуса, е ъгълът, чийто прилежащ катет е 80 процента от дължината на хипотенузата."
          },
          {
            "kind": "h3",
            "text": "Отношението разказва история"
          },
          {
            "kind": "p",
            "text": "Стойността на b/c описва формата на триъгълника. Отношение близо до 1 означава, че прилежащият катет е почти колкото хипотенузата, така че ъгълът между тях е мъничък. Отношение близо до 0 означава, че прилежащият катет е много къс в сравнение с хипотенузата, така че ъгълът се отваря широко към 90 градуса. Отношение точно 0.5 винаги означава 60 градуса."
          },
          {
            "kind": "h3",
            "text": "Дефиниционна област на arccos"
          },
          {
            "kind": "p",
            "text": "Arccos приема само входове от 0 до 1 в този геометричен контекст. Отношение над 1 е невъзможно за правоъгълен триъгълник и сигнализира грешка в означаването: хипотенузата трябва да е знаменателят и трябва да е най-дългата страна. Отрицателно отношение би описало тъп ъгъл, който не може да се появи като ъгъл A в правоъгълен триъгълник."
          }
        ],
        "figcaption": "Как работи arccos: разделете прилежащия катет на хипотенузата, след което приложете обратен косинус, за да възстановите ъгъла.",
        "h2": "Разбиране на arccos (обратен косинус)",
        "imgAlt": "Диаграма, показваща двете стъпки на arccos: разделете b на c, след което приложете arccos, за да получите ъгъла"
      }
    },
    "tocHeading": "В това ръководство",
    "tocItems": {
      "arccos-anatomy": "Прилежащ катет и хипотенуза",
      "arccos-applications": "Приложения в реалния живот",
      "arccos-conclusion": "Намерете всеки ъгъл от косинус с увереност",
      "arccos-examples": "16 решени примера",
      "arccos-faq": "Често задавани въпроси",
      "arccos-howto": "Как да използвате калкулатора",
      "arccos-intro": "Какво представлява калкулаторът за ъгъл от косинус?",
      "arccos-mistakes": "Често срещани грешки",
      "arccos-special": "Специални стойности на ъгли",
      "arccos-verify": "Проверка на вашия отговор",
      "arccos-vs": "Arccos срещу arcsin срещу arctan",
      "arccos-what": "Разбиране на arccos (обратен косинус)"
    }
  },
  "tr": {
    "faqs": [
      {
        "question": "A = arccos(b / c) gerçekte ne anlama geliyor?",
        "answer": "Komşu kenarı hipotenüse böldüğünüz, ardından kosinüsü bu değere eşit olan açıyı bulmak için ondalık sayıdan geriye doğru çalıştığınız anlamına gelir. Sonuç, komşu kenar ile hipotenüs arasındaki dar açıdır."
      },
      {
        "question": "Arcsin yerine ne zaman arccos kullanmalıyım?",
        "answer": "Komşu kenarı ve hipotenüsü bildiğinizde arccos kullanın. Karşı kenarı ve hipotenüsü bildiğinizde arcsin kullanın. İkisi de aynı üçgen için aynı açıyı verir; seçim, hangi kenarları ölçtüğünüze bağlıdır."
      },
      {
        "question": "Arccos neden matematik hatası veriyor?",
        "answer": "En yaygın neden 1'den büyük bir orandır; bu, girilen komşu kenarın hipotenüsten uzun olması durumunda olur. Geçerli bir dik üçgende hipotenüs her zaman en uzundur, bu nedenle kenar etiketlerinizi kontrol edin."
      },
      {
        "question": "Karşı kenarı bilmeden arccos kullanabilir miyim?",
        "answer": "Evet. Bu, arccos'un temel avantajıdır: yalnızca komşu kenara ve hipotenüse ihtiyaç duyar. Karşı kenar hesaba hiç girmez."
      },
      {
        "question": "Cos ile arccos arasındaki fark nedir?",
        "answer": "Kosinüs bir açı alıp bir oran verir: cos(60 derece) = 0,5. Arccos bunu tersine çevirir: bir oran alıp açıyı verir, yani arccos(0,5) = 60 derecedir. Açıyı biliyorsanız kosinüs kullanın; kenarları biliyorsanız arccos kullanın."
      },
      {
        "question": "Arccos, arcsin ve arctan neden aynı cevabı veriyor?",
        "answer": "Çünkü üçü de aynı geometrik açıyı farklı kenar çiftleri üzerinden tanımlar. 3-4-5 üçgeninde arccos(4/5), arcsin(3/5) ve arctan(3/4) hepsi 36,87 dereceye eşittir. Yöntemler arası uyum, doğru kenar etiketlerini doğrular."
      },
      {
        "question": "b/c tam olarak 0,5'e eşitse ne anlama gelir?",
        "answer": "Açı tam olarak 60 derecedir. Bu, 30-60-90 özel üçgenidir; 60 derecelik açıya komşu kenar hipotenüsün yarısıdır."
      },
      {
        "question": "Cevap derece mi yoksa radyan mı olmalı?",
        "answer": "Bu hesaplayıcı derece kullanır; bu, inşaat, haritacılık ve sınıf geometrisinde standarttır. Elle hesaplıyorsanız hesap makinenizin derece modunda olduğundan emin olun; 0,64 gibi bir radyan modu sonucu 180/pi ile çarpılarak 36,87 dereceye dönüştürülür."
      },
      {
        "question": "Diğer dar açıyı nasıl bulurum?",
        "answer": "90 dereceden çıkarın. Arccos A = 36,87 derece verirse, B = 90 - 36,87 = 53,13 derecedir. Başka trigonometri gerekmez."
      },
      {
        "question": "Arccos sonucu hiç 90 derece olabilir mi?",
        "answer": "Yalnızca limit olarak: arccos(0) = 90 derecedir, ancak sıfır komşu kenar dejenere bir üçgen demektir, gerçek bir üçgen değil. Arccos'tan gelen geçerli dik üçgen açıları her zaman 0 ile 90 derece arasındadır."
      },
      {
        "question": "Arccos cevabımı nasıl kontrol edebilirim?",
        "answer": "cos(A) değerini hesaplayıp b/c'ye eşit olduğunu doğrulayın. Ayrıca üçüncü kenarı kullanarak arcsin veya arctan ile yeniden hesaplayın; tüm yöntemler uyuşmalıdır. Son olarak iki dar açının toplamının tam 90 derece olduğunu kontrol edin."
      },
      {
        "question": "Üçgeni ölçeklendirmek arccos sonucunu değiştirir mi?",
        "answer": "Hayır. Benzer üçgenlerin açıları aynıdır. 3-4-5 üçgeni ile 6-8-10 üçgeni ikisi de arccos(0,8) = 36,87 derece verir, çünkü b/c oranı ölçeklendirmeyle değişmez."
      }
    ],
    "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
    "relatedItems": [
      "Dik Üçgen Açı Hesaplayıcı",
      "Sinüsten Dik Üçgen Açı Hesaplayıcı",
      "Tanjanttan Dik Üçgen Açı Hesaplayıcı",
      "Kosinüsten Dik Üçgen Kenar Hesaplayıcı",
      "Dik Üçgen Kenar Hesaplayıcı",
      "Dik Üçgen Kayıp Açı Hesaplayıcı",
      "Dik Üçgen Trigonometrik Oran Hesaplayıcı",
      "Kosinüs Oran Hesaplayıcı"
    ],
    "sections": {
      "arccos-anatomy": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos tam olarak iki kenara ihtiyaç duyar: komşu kenar b ve hipotenüs c. Bunları doğru etiketlemek işin tamamıdır. Sonrası aritmetiktir."
          },
          {
            "kind": "h3",
            "text": "Komşu Kenarı Belirleme"
          },
          {
            "kind": "p",
            "text": "Komşu kenar, A açısına dokunan dik kenardır. Açının kendi kenarlarından birini oluşturur. Aşağıdaki şemada b kenarı dik açıdan A açısına kadar alt kısım boyunca uzanır. Diğer dar açı olan B'yi çözüyorsanız etiketler yer değiştirir: B'ye komşu kenar, B'ye dokunan kenardır."
          },
          {
            "kind": "h3",
            "text": "Hipotenüsü Belirleme"
          },
          {
            "kind": "p",
            "text": "Hipotenüs, dik açının karşısındaki kenardır. Her zaman üçgenin en uzun kenarıdır. Dik açının köşesine asla dokunmaz. \"Hipotenüs\"ünüz üç ölçümünüzün en uzunu değilse, hesaplamadan önce yeniden etiketleyin."
          },
          {
            "kind": "h3",
            "text": "Karşı Kenar Neden Dışarıda Kalır"
          },
          {
            "kind": "p",
            "text": "Kosinüs, komşu bölü hipotenüs olarak tanımlanır. Karşı kenar bu oranda hiç görünmez. Bu hesaplayıcının amacı budur: karşı kenar bilinmediğinde, ulaşılamadığında veya ölçüm düzeninizle ilgisiz olduğunda arccos yine de açıyı verir. Karşı kenarı yok saymıyorsunuz; ona hiç ihtiyaç duymayan bir oranı kullanıyorsunuz."
          }
        ],
        "figcaption": "Arccos anatomisi: b, A açısına dokunan komşu kenardır; c, dik açının karşısındaki hipotenüstür.",
        "h2": "Komşu Kenar ve Hipotenüs: İki Girdi",
        "imgAlt": "Arccos formülü için komşu b kenarı ve c hipotenüsü vurgulanmış dik üçgen"
      },
      "arccos-applications": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos, eğim mesafesi ile yatay mesafenin doğal ölçümler olduğu her yerde karşımıza çıkar. Hipotenüs eğimin kendisi boyunca ölçülür, komşu kenar ise yatay bileşendir."
          },
          {
            "kind": "h3",
            "text": "Eğim Haritacılığı"
          },
          {
            "kind": "p",
            "text": "Bir haritacı eğim boyunca 65 metre, yatayda 60 metre ölçer. Eğim açısı arccos(60/65), yani yaklaşık 22,6 derecedir. Bu standart arccos durumudur: eğik mesafe şeritle kolayca ölçülür, yatay mesafe haritadan veya nivodan gelir, karşı kenar (yükselti) ise sonra hesaplayabileceğiniz değerdir."
          },
          {
            "kind": "h3",
            "text": "Gölgeden Güneş Yüksekliği"
          },
          {
            "kind": "p",
            "text": "10 metrelik bir ışık hüzmesi 8 metrelik gölge oluşturur. Güneş yükselme açısı arccos(8/10), yani yaklaşık 36,9 derecedir. Gölge problemleri doğal arccos problemleridir çünkü gölge zeminde (komşu) uzanır, hüzme ise hipotenüstür."
          },
          {
            "kind": "h3",
            "text": "Çatı Kiriş Eğimi"
          },
          {
            "kind": "p",
            "text": "Bir kiriş 6,5 metre uzanır, yatay açıklığı 6 metredir. Saçaktaki eğim açısı arccos(6/6,5), yani yaklaşık 22,6 derecedir. Marangozlar kirişi doğrudan, açıklığı ise aşık boyunca ölçer; bu yüzden arccos ölçümlere alındığı gibi uyar."
          },
          {
            "kind": "h3",
            "text": "Mühendislik Payandaları"
          },
          {
            "kind": "p",
            "text": "Köşegen bir payanda 4 metre, yatay tabanı 3,5 metredir. Payanda açısı arccos(3,5/4), yani yaklaşık 28,96 derecedir. Yapısal eskizler payanda uzunluğunu ve tabanını verir; arccos bunları montaj açısına dönüştürür."
          }
        ],
        "figcaption": "Gerçek dünya arccos problemleri: eğim açıları, güneş yüksekliği, kiriş eğimi ve payanda montaj açıları.",
        "h2": "Arccos'un Gerçek Hayattaki Uygulamaları",
        "imgAlt": "Haritacılık, gölge, çatı kirişi ve payanda için arccos açı hesaplarını gösteren dört panel"
      },
      "arccos-conclusion": {
        "blocks": [
          {
            "kind": "p",
            "text": "Önce komşu kenarı belirleyin: hedef açınıza dokunan dik kenar. Hipotenüsün en uzun kenar olduğunu doğrulayın. Bölün, arccos uygulayın ve açıyı derece olarak okuyun. İkinci açıyı 90'dan birinciyi çıkararak bulun. Gidiş-dönüş kontrolü, çapraz yöntem hesabı ve açı toplamıyla doğrulayın. Bu adımlarla her komşu-kenar-ve-hipotenüs problemi güvenilir bir rutine indirgenir. Sayılarınızı çalıştırmak için bu sayfanın üstündeki hesaplayıcıya dönün."
          }
        ],
        "h2": "Her Açıyı Kosinüsten Güvenle Bulun"
      },
      "arccos-examples": {
        "blocks": [
          {
            "kind": "p",
            "text": "Her örnek aynı dört adımı izler: formülü yazın, yerine koyun, bölün, arccos uygulayın. Açılar iki ondalık basamağa yuvarlanmıştır."
          },
          {
            "kind": "h3",
            "text": "Örnek 1: 3-4-5 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 4 ve hipotenüs c = 5 verildiğinde A açısını bulun."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0,8) [[\\\\approx 36.87^\\\\circ]]. Tümler B = 53,13[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Örnek 2: 5-12-13 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 12 ve hipotenüs c = 13 verildiğinde A açısını bulun."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0,9231) [[\\\\approx 22.62^\\\\circ]]. Tümler B = 67,38[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Örnek 3: 8-15-17 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 8 ve hipotenüs c = 17 verildiğinde A açısını bulun."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0,4706) [[\\\\approx 61.93^\\\\circ]]. Tümler B = 28,07[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Örnek 4: Aynı Üçgen, Diğer Açı"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 15 ve hipotenüs c = 17 verildiğinde (8-15-17 üçgeninin B açısı çözülüyor)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0,8824) [[\\\\approx 28.07^\\\\circ]]. 61,93 + 28,07 = 90 olduğuna dikkat edin, gerektiği gibi."
          },
          {
            "kind": "h3",
            "text": "Örnek 5: 5-12-13, Diğer Açı"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 5 ve hipotenüs c = 13 verildiğinde."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0,3846) [[\\\\approx 67.38^\\\\circ]]. Bu, Örnek 2'deki tümlerle eşleşir."
          },
          {
            "kind": "h3",
            "text": "Örnek 6: 3-4-5, Diğer Açı"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 3 ve hipotenüs c = 5 verildiğinde."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0,6) [[\\\\approx 53.13^\\\\circ]]. Bu, Örnek 1'deki tümlerle eşleşir."
          },
          {
            "kind": "h3",
            "text": "Örnek 7: 60 Derece Özel Durumu"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 1 ve hipotenüs c = 2 verildiğinde."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0,5) = 60[[\\\\^\\\\circ]] tam olarak. Bu 30-60-90 özel üçgenidir."
          },
          {
            "kind": "h3",
            "text": "Örnek 8: 7-24-25 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 7 ve hipotenüs c = 25 verildiğinde A açısını bulun."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0,28) [[\\\\approx 73.74^\\\\circ]]. Tümler B = 16,26[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Örnek 9: 7-24-25, Diğer Açı"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 24 ve hipotenüs c = 25 verildiğinde."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0,96) [[\\\\approx 16.26^\\\\circ]]. Örnek 8'deki tümlerle eşleşir."
          },
          {
            "kind": "h3",
            "text": "Örnek 10: 9-40-41 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 9 ve hipotenüs c = 41 verildiğinde A açısını bulun."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0,2195) [[\\\\approx 77.32^\\\\circ]]. Küçük komşu kenar geniş açı verir."
          },
          {
            "kind": "h3",
            "text": "Örnek 11: 9-40-41, Diğer Açı"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 40 ve hipotenüs c = 41 verildiğinde."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0,9756) [[\\\\approx 12.68^\\\\circ]]. 77,32 + 12,68 = 90 olduğuna dikkat edin."
          },
          {
            "kind": "h3",
            "text": "Örnek 12: 20-21-29 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 20 ve hipotenüs c = 29 verildiğinde A açısını bulun."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0,6897) [[\\\\approx 46.40^\\\\circ]]. Tümler B = 43,60[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Örnek 13: 20-21-29, Diğer Açı"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 21 ve hipotenüs c = 29 verildiğinde."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0,7241) [[\\\\approx 43.60^\\\\circ]]. Örnek 12'deki tümlerle eşleşir."
          },
          {
            "kind": "h3",
            "text": "Örnek 14: 6-8-10 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 6 ve hipotenüs c = 10 verildiğinde A açısını bulun."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0,6) [[\\\\approx 53.13^\\\\circ]]. Örnek 6 ile aynı açı, çünkü 6-8-10 ölçeklenmiş bir 3-4-5'tir."
          },
          {
            "kind": "h3",
            "text": "Örnek 15: 6-8-10, Diğer Açı"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 8 ve hipotenüs c = 10 verildiğinde."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0,8) [[\\\\approx 36.87^\\\\circ]]. Örnek 1 ile aynı; benzer üçgenlerin açıları paylaştığını doğrular."
          },
          {
            "kind": "h3",
            "text": "Örnek 16: 12-16-20 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Komşu kenar b = 12 ve hipotenüs c = 20 verildiğinde A açısını bulun."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0,6) [[\\\\approx 53.13^\\\\circ]]. Yine ölçeklenmiş 3-4-5, yine aynı açı. Kenarları ölçeklendirmek açıları asla değiştirmez."
          }
        ],
        "h2": "16 Çözümlü Örnek"
      },
      "arccos-howto": {
        "blocks": [],
        "figcaption": "Çözümlü örnek: b = 4, c = 5; A = arccos(0,8), yaklaşık 36,87 derece, gidiş-dönüş ile doğrulandı.",
        "h2": "Kosinüsten Açı Hesaplayıcı Nasıl Kullanılır",
        "imgAlt": "b eşittir 4 ve c eşittir 5 ile dört adımlı arccos örneği",
        "steps": [
          "<strong>Dik açıyı doğrulayın.</strong> Hesaplayıcı yalnızca dik üçgenlerde çalışır. Önce 90 derecelik köşeyi belirleyin.",
          "<strong>Hedef açınızı seçin.</strong> A açısını mı B açısını mı çözdüğünüze karar verin. Komşu kenar bu seçime göre tanımlanır.",
          "<strong>Komşu b kenarını ölçün.</strong> Bu, hedef açınıza dokunan dik kenardır. Herhangi bir birimle kaydedin.",
          "<strong>c hipotenüsünü ölçün.</strong> Bu en uzun kenardır, dik açının karşısındadır. b ile aynı birimi kullanın.",
          "<strong>b'nin c'den küçük olduğunu kontrol edin.</strong> Değilse kenarlar yanlış etiketlenmiştir. Hipotenüs en uzun olmalıdır.",
          "<strong>İki değeri girip Hesapla'ya basın.</strong> Araç b/c'yi hesaplar, arccos uygular ve A açısını derece olarak verir.",
          "<strong>İkinci açıyı bulun.</strong> 90 dereceden çıkarın: B = 90[[\\\\^\\\\circ]] eksi A.",
          "<strong>Doğrulayın.</strong> Bir hesap makinesinde cos(A) değerini hesaplayıp b/c'ye eşit olduğunu onaylayın. Öyleyse cevap sağlamdır."
        ]
      },
      "arccos-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "Dik üçgenin kosinüsten açı hesaplayıcısı, komşu kenar ile hipotenüs bilindiğinde dar açıyı bulur. Ters kosinüs fonksiyonunu, arccos veya cos[[-1]] olarak yazılır, bu iki kenarın oranına uygular. Sonuç derece cinsinden A açısıdır."
          },
          {
            "kind": "p",
            "text": "Bu araç belirli bir ölçüm durumu içindir: hedef açınızın yanındaki kenarı ve üçgenin en uzun kenarını ölçebilirsiniz, ancak karşı kenar bilinmiyor veya ulaşılması zordur. Karşı kenarı önce hesaplamak yerine arccos onu tamamen atlar ve komşu-bölü-hipotenüs oranını doğrudan açıya dönüştürür."
          },
          {
            "kind": "p",
            "text": "Örneğin komşu kenar 4 ve hipotenüs 5 ise oran 0,8 olur. 0,8'in arccos'u yaklaşık 36,87 derecedir. Bu A açısıdır. Diğer dar açı tümler kuralından gelir: 90 eksi 36,87, yani 53,13 derece."
          },
          {
            "kind": "p",
            "text": "Arccos bu sitedeki üç ters trigonometrik araçtan biridir. Bildiğiniz kenarlar karşı kenar ve hipotenüsse <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">sinüsten açı hesaplayıcı</a> doğru seçimdir. İki dik kenarı biliyor ama hipotenüsü bilmiyorsanız <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">tanjanttan açı hesaplayıcı</a> kullanın. Bu sayfa kosinüs durumunu tüm derinliğiyle kapsar."
          }
        ],
        "h2": "Dik Üçgenin Kosinüsten Açı Hesaplayıcısı Nedir?"
      },
      "arccos-mistakes": {
        "blocks": [
          {
            "kind": "h3",
            "text": "Komşu Kenar Yerine Karşı Kenarı Kullanma"
          },
          {
            "kind": "p",
            "text": "En sık yapılan hata. Arccos, A açısına dokunan kenara ihtiyaç duyar, karşısındaki kenara değil. Karşı kenarı arccos'a verirseniz amaçlanan açının tümlerini elde edersiniz. 3-4-5 üçgeninde arccos(3/5) = 53,13 derece B açısıdır, A açısı değil. Çözüm: üçgeni çizin, hedef açınızı işaretleyin ve hangi dik kenarın ona dokunduğunu izleyin."
          },
          {
            "kind": "h3",
            "text": "Hipotenüsü Paya Koyma"
          },
          {
            "kind": "p",
            "text": "Arccos komşu bölü hipotenüs bekler, 1'in altında bir sayı. b/c yerine c/b girmek 1'in üstünde oran verir ve hesaplayıcı matematik hatası döndürür. Çözüm: hipotenüs arccos oranında her zaman paydadır."
          },
          {
            "kind": "h3",
            "text": "Arccos ile Kosinüsü Karıştırma"
          },
          {
            "kind": "p",
            "text": "Birçok hesap makinesinde kosinüs tuşu ile ters kosinüs tuşu (genellikle cos[[-1]] veya arccos etiketli) yan yanadır. arccos(0,8) yerine cos(0,8)'e basmak 36,87 derece yerine 0,6967 gibi anlamsız bir oran verir. Çözüm: hesap makinenizin derece modunda olduğunu ve ters tuşa bastığınızı kontrol edin."
          },
          {
            "kind": "h3",
            "text": "Derece ile Radyanı Karıştırma"
          },
          {
            "kind": "p",
            "text": "Arccos(0,8) 36,87 derecedir ama 0,6435 radyandır. 3-4-5 üçgeni için el hesabınız 0,64 verdiyse hesap makinesi radyan modundadır. Dönüştürmek için 180/pi ile çarpın veya modu dereceye alın. Bu hesaplayıcı derece çıktı verir."
          },
          {
            "kind": "h3",
            "text": "Kenarları Farklı Birimlerle Girme"
          },
          {
            "kind": "p",
            "text": "Komşu kenar inç, hipotenüs fit cinsinden oranı bozar. Önce ortak birime dönüştürün. Oran birimsizdir ama yalnızca iki girdi aynı birimi paylaştığında."
          },
          {
            "kind": "h3",
            "text": "Oranı Erken Yuvarlama"
          },
          {
            "kind": "p",
            "text": "Arccos(0,8) = 36,87 derecedir, ancak 0,795'ten yuvarlanan arccos(0,80) 37,24 derece verir. Arccos'un en dik olduğu 0 ve 1'e yakın oranlarda küçük oran hataları büyür. Bölme boyunca tam duyarlılığı koruyun ve yalnızca son açıyı yuvarlayın."
          },
          {
            "kind": "h3",
            "text": "Hangi Açının Çözüldüğünü Unutma"
          },
          {
            "kind": "p",
            "text": "Arccos, komşu kenarını girdiğiniz açıyı döndürür. B açısına dokunan kenarı girdiyseniz sonuç B açısıdır. Cevabı doğru açı adıyla etiketleyin veya tümlerle doğrulayın: iki dar açının toplamı 90 derece olmalıdır."
          }
        ],
        "h2": "Arccos Kullanırken Yaygın Hatalar"
      },
      "arccos-special": {
        "blocks": [
          {
            "kind": "p",
            "text": "Bazı arccos değerleri o kadar sık karşımıza çıkar ki onları tanımak zaman kazandırır. Bunlar özel dik üçgenlerden gelir."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1) = 0^\\\\circ]]: komşu kenar hipotenüse eşittir, bu yüzden açı sıfıra çöker. Bu dejenere bir durumdur, gerçek bir üçgen değil, ama ölçeği sabitler."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{3}/2) \\\\approx 30^\\\\circ]]: 30-60-90 üçgeninden. Komşu kenar hipotenüsün yaklaşık yüzde 86,6'sı olduğunda açı 30 derecedir."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{2}/2) = 45^\\\\circ]]: 45-45-90 üçgeninden. Eşit dik kenarlar bu tam değeri verir."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1/2) = 60^\\\\circ]]: 30-60-90 üçgeninden, Örnek 7'deki durum. Komşu kenar hipotenüsün tam yarısı olduğunda açı tam 60 derecedir."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(0) = 90^\\\\circ]]: komşu kenar sıfıra küçülür, açı dik açıya açılır. Sıfır durumunda olduğu gibi bu bir sınırdır, gerçek bir üçgen açısı değil."
          },
          {
            "kind": "p",
            "text": "Bu kilometre taşları arasında arccos oran arttıkça düzgünce azalır. Beş dayanak noktasını ezberlemek her arccos'u zihinden tahmin etmenizi sağlar: 0,7 oranı 0,5 (60 derece) ile 0,866 (30 derece) arasındadır, 45 dereceye biraz daha yakındır. Gerçek değer yaklaşık 45,57 derecedir."
          }
        ],
        "h2": "Ezberlemeye Değer Özel Açı Değerleri"
      },
      "arccos-verify": {
        "blocks": [
          {
            "kind": "p",
            "text": "Doğru bir arccos hesabını üç kontrol doğrular:"
          },
          {
            "kind": "p",
            "text": "3-4-5 üçgeni için ayrıca kenarların Pisagor teoremini sağladığını doğrulayın: 9 + 16 = 25. Kendisinden türetilen açıya güvenmeden önce kenarları doğrulamak iyi bir uygulamadır."
          },
          {
            "kind": "p",
            "text": "Dördüncü kontrol tümleri kullanır. B = 90[[\\\\^\\\\circ]] eksi A'yı hesaplayın, ardından diğer oranın arccos'unun B'yi verdiğini doğrulayın. Örnek 1'de arccos(3/5) = 53,13[[\\\\^\\\\circ]], bu 90 eksi 36,87 ile eşleşir. Dört kontrol de geçtiğinde cevap kuşku götürmez."
          }
        ],
        "h2": "Arccos Cevabınızı Doğrulama",
        "steps": [
          "<strong>Aralık kontrolü.</strong> Sonuç kesinlikle 0 ile 90 derece arasında olmalıdır. Dışındaki her şey geçersiz girdi veya yanlış etiketlenmiş kenarlara işaret eder.",
          "<strong>Gidiş-dönüş kontrolü.</strong> cos(A) değerini hesaplayıp b/c'ye eşit olduğunu onaylayın. Örnek 1 için cos(36,87[[\\\\^\\\\circ]]) [[\\\\approx]] 0,8 = 4/5. Gidiş-dönüş başarısız olursa açı yanlıştır.",
          "<strong>Çapraz yöntem kontrolü.</strong> Üçüncü kenarı kullanarak arcsin veya arctan ile yeniden hesaplayın. arccos(4/5) = 36,87[[\\\\^\\\\circ]] ve arctan(3/4) = 36,87[[\\\\^\\\\circ]] ise cevap sağlamdır. Uyuşmazlık etiketleme hatasına işaret eder."
        ]
      },
      "arccos-vs": {
        "blocks": [
          {
            "kind": "p",
            "text": "Üç ters fonksiyon da aynı üçgene uygulandığında aynı açıyı bulur. Yalnızca ihtiyaç duydukları kenarlarda farklılaşırlar. Doğru seçim, ihtiyaç duymadığınız bir kenarı hesaplamaktan kurtarır."
          },
          {
            "kind": "p",
            "text": "Komşu kenarı (b) ve hipotenüsü (c) bildiğinizde <strong>arccos</strong> kullanın. Formül [[A = \\\\cos^{-1}(b/c)]]'dir. Hipotenüs doğrudan ölçüldüğünde, örneğin eğim boyunca şeritle, ve yatay mesafe bilindiğinde bu doğal seçimdir."
          },
          {
            "kind": "p",
            "text": "Karşı kenarı (a) ve hipotenüsü (c) bildiğinizde <strong>arcsin</strong> kullanın. Formül [[A = \\\\sin^{-1}(a/c)]]'dir. Yükseklik problemleri arcsin'i tercih eder: düşey yükselti, zemin seviyesindeki açının karşısındadır."
          },
          {
            "kind": "p",
            "text": "İki dik kenarı (a ve b) biliyor ama hipotenüsü bilmiyorsanız <strong>arctan</strong> kullanın. Formül [[A = \\\\tan^{-1}(a/b)]]'dir. Çatı yükseltisi bölü açıklık gibi saha ölçümleri arctan'ı tercih eder çünkü iki kenar da doğrudan ölçülür."
          },
          {
            "kind": "h3",
            "text": "Uyuşmak Zorundalar"
          },
          {
            "kind": "p",
            "text": "Tek bir üçgen için arccos(b/c), arcsin(a/c) ve arctan(a/b) aynı açıyı üretir. 3-4-5 üçgeninde arccos(4/5), arcsin(3/5) ve arctan(3/4) hepsi 36,87 dereceye eşittir. İki yöntem uyuşmazsa bir kenar yanlış etiketlenmiştir. Bu çapraz kontrol, mevcut en güvenilir doğrulamadır."
          },
          {
            "kind": "h3",
            "text": "Neden Hep Arctan Kullanmıyoruz?"
          },
          {
            "kind": "p",
            "text": "Arctan iki dik kenara da ihtiyaç duyar. Karşı kenar bilinmiyorsa ve ölçülmesi zorsa, sırf arctan kullanmak için önce onu hesaplamak gereksiz bir adım ve ekstra bir hata şansı ekler. Arccos, sahip olduğunuz iki kenardan istediğiniz açıya doğrudan gider. Fonksiyonu alışkanlığınıza değil ölçümlerinize uydurun."
          }
        ],
        "h2": "Arccos, Arcsin ve Arctan: Her Biri Ne Zaman Kullanılır"
      },
      "arccos-what": {
        "blocks": [
          {
            "kind": "p",
            "text": "Sıradan kosinüs bir açı alıp bir oran verir. 60 derecenin kosinüsü 0,5'tir. Arccos bunu tersine çevirir: bir oran alıp açıyı verir. 0,5'in arccos'u 60 derecedir. İki fonksiyon birbirini geri alır; bu yüzden arccos aynı zamanda cos[[-1]] olarak yazılır."
          },
          {
            "kind": "p",
            "text": "Bu hesaplayıcının kullandığı formül [[A = \\\\cos^{-1}(b/c)]]'dir. Burada b komşu kenar, c hipotenüs, A ise aralarındaki açıdır. Geçerli bir dik üçgende b/c oranı her zaman 0 ile 1 arasındadır, çünkü komşu kenar her zaman hipotenüsten kısadır."
          },
          {
            "kind": "p",
            "text": "Arccos'u bir soru olarak düşünün: \"Kosinüs değeri bu olan açı hangisi?\" b/c 0,8'e eşitse soru \"kosinüsü 0,8 olan açı hangisi?\" olur. Cevap, 36,87 derece, komşu kenarı hipotenüsün yüzde 80'i uzunluğunda olan açıdır."
          },
          {
            "kind": "h3",
            "text": "Oran Bir Hikaye Anlatır"
          },
          {
            "kind": "p",
            "text": "b/c değeri üçgenin şeklini tanımlar. 1'e yakın oran, komşu kenarın neredeyse hipotenüs kadar uzun olduğu, dolayısıyla aralarındaki açının minicik olduğu anlamına gelir. 0'a yakın oran, komşu kenarın hipotenüse göre çok kısa olduğu, dolayısıyla açının 90 dereceye doğru geniş açıldığı anlamına gelir. Tam 0,5 oranı her zaman 60 derece demektir."
          },
          {
            "kind": "h3",
            "text": "Arccos'un Tanım Kümesi"
          },
          {
            "kind": "p",
            "text": "Arccos bu geometrik bağlamda yalnızca 0 ile 1 arasındaki girdileri kabul eder. 1'in üstünde bir oran dik üçgen için imkansızdır ve bir etiketleme hatasına işaret eder: hipotenüs payda olmalı ve en uzun kenar olmalıdır. Negatif bir oran geniş açıyı tanımlardı; bu, dik üçgende A açısı olarak görünemez."
          }
        ],
        "figcaption": "Arccos nasıl çalışır: komşu kenarı hipotenüse bölün, ardından açıyı geri kazanmak için ters kosinüs uygulayın.",
        "h2": "Arccos'u Anlama (Ters Kosinüs)",
        "imgAlt": "Arccos'un iki adımını gösteren şema: b'yi c'ye bölün, ardından açıyı bulmak için arccos uygulayın"
      }
    },
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "arccos-anatomy": "Komşu Kenar ve Hipotenüs",
      "arccos-applications": "Gerçek Hayattaki Uygulamalar",
      "arccos-conclusion": "Her Açıyı Kosinüsten Güvenle Bulun",
      "arccos-examples": "16 Çözümlü Örnek",
      "arccos-faq": "SSS",
      "arccos-howto": "Hesaplayıcı Nasıl Kullanılır",
      "arccos-intro": "Kosinüsten Açı Hesaplayıcı Nedir?",
      "arccos-mistakes": "Yaygın Hatalar",
      "arccos-special": "Özel Açı Değerleri",
      "arccos-verify": "Cevabınızı Doğrulama",
      "arccos-vs": "Arccos, Arcsin ve Arctan",
      "arccos-what": "Arccos'u Anlama (Ters Kosinüs)"
    }
  },
  "sv": {
    "faqs": [
      {
        "question": "Vad betyder egentligen A = arccos(b / c)?",
        "answer": "Det betyder att du dividerar den närliggande kateten med hypotenusan och sedan arbetar dig bakåt från det decimaltalet för att hitta den vinkel vars cosinus är lika med det. Resultatet är den spetsiga vinkeln mellan den närliggande kateten och hypotenusan."
      },
      {
        "question": "När ska jag använda arccos i stället för arcsin?",
        "answer": "Använd arccos när du känner till den närliggande kateten och hypotenusan. Använd arcsin när du känner till den motstående kateten och hypotenusan. Båda ger samma vinkel för samma triangel; valet beror på vilka sidor du har mätt."
      },
      {
        "question": "Varför får jag ett matematiskt fel från arccos?",
        "answer": "Den vanligaste orsaken är ett förhållande större än 1, vilket inträffar när den inmatade närliggande kateten är längre än hypotenusan. I en giltig rätvinklig triangel är hypotenusan alltid längst, så kontrollera sidbeteckningarna."
      },
      {
        "question": "Kan jag använda arccos utan att känna till den motstående kateten?",
        "answer": "Ja. Det är den stora fördelen med arccos: den behöver bara den närliggande kateten och hypotenusan. Den motstående kateten ingår aldrig i beräkningen."
      },
      {
        "question": "Vad är skillnaden mellan cos och arccos?",
        "answer": "Cosinus tar en vinkel och ger ett förhållande: cos(60 grader) = 0,5. Arccos vänder på det: den tar ett förhållande och ger vinkeln, så arccos(0,5) = 60 grader. Använd cosinus när du känner till vinkeln; använd arccos när du känner till sidorna."
      },
      {
        "question": "Varför ger arccos, arcsin och arctan samma svar?",
        "answer": "Därför att de beskriver samma geometriska vinkel genom olika sidpar. I en 3-4-5-triangel är arccos(4/5), arcsin(3/5) och arctan(3/4) alla lika med 36,87 grader. Överensstämmelse mellan metoderna bekräftar korrekta sidbeteckningar."
      },
      {
        "question": "Vad betyder det om b/c är exakt lika med 0,5?",
        "answer": "Vinkeln är exakt 60 grader. Detta är den speciella 30-60-90-triangeln, där sidan intill 60-gradersvinkeln är hälften av hypotenusan."
      },
      {
        "question": "Bör svaret vara i grader eller radianer?",
        "answer": "Denna kalkylator använder grader, standarden för bygg, lantmäteri och skolgeometri. Om du räknar för hand, se till att räknaren är i gradläge; ett radianlägesresultat som 0,64 omvandlas till 36,87 grader genom multiplikation med 180/pi."
      },
      {
        "question": "Hur hittar jag den andra spetsiga vinkeln?",
        "answer": "Subtrahera från 90 grader. Om arccos ger A = 36,87 grader är B = 90 - 36,87 = 53,13 grader. Ingen ytterligare trigonometri behövs."
      },
      {
        "question": "Kan arccos-resultatet någonsin bli 90 grader?",
        "answer": "Endast som gränsvärde: arccos(0) = 90 grader, men en närliggande katet på noll betyder en degenererad triangel, inte en riktig. Giltiga rätvinkliga triangelvinklar från arccos ligger alltid strikt mellan 0 och 90 grader."
      },
      {
        "question": "Hur kan jag kontrollera mitt arccos-svar?",
        "answer": "Beräkna cos(A) och bekräfta att det är lika med b/c. Räkna också om med arcsin eller arctan med hjälp av den tredje sidan; alla metoder måste stämma överens. Kontrollera slutligen att de två spetsiga vinklarna summerar till exakt 90 grader."
      },
      {
        "question": "Ändrar skalning av triangeln arccos-resultatet?",
        "answer": "Nej. Likformiga trianglar har identiska vinklar. En 3-4-5-triangel och en 6-8-10-triangel ger båda arccos(0,8) = 36,87 grader, eftersom förhållandet b/c inte ändras vid skalning."
      }
    ],
    "relatedHeading": "Utforska relaterade rätvinkliga triangelkalkylatorer",
    "relatedItems": [
      "Rätvinklig triangel vinkelkalkylator",
      "Rätvinklig triangel vinkel från sinus-kalkylator",
      "Rätvinklig triangel vinkel från tangens-kalkylator",
      "Rätvinklig triangel sida från cosinus-kalkylator",
      "Rätvinklig triangel sidkalkylator",
      "Rätvinklig triangel saknad vinkel-kalkylator",
      "Rätvinklig triangel trigonometriska förhållanden-kalkylator",
      "Cosinusförhållande-kalkylator"
    ],
    "sections": {
      "arccos-anatomy": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos behöver exakt två sidor: den närliggande kateten b och hypotenusan c. Att beteckna dem rätt är hela utmaningen. Allt därefter är aritmetik."
          },
          {
            "kind": "h3",
            "text": "Identifiera den närliggande kateten"
          },
          {
            "kind": "p",
            "text": "Den närliggande kateten är den katet som vidrör vinkel A. Den bildar ena kanten av själva vinkeln. I diagrammet nedan löper sida b längs botten från den räta vinkeln till vinkel A. Om du löser för den andra spetsiga vinkeln B byter beteckningarna plats: den sida som är närliggande B är den som vidrör B."
          },
          {
            "kind": "h3",
            "text": "Identifiera hypotenusan"
          },
          {
            "kind": "p",
            "text": "Hypotenusan är sidan mittemot den räta vinkeln. Den är alltid triangelns längsta sida. Den vidrör aldrig den räta vinkelns hörn. Om din \"hypotenusa\" inte är den längsta av dina tre mätningar, beteckna om innan du beräknar."
          },
          {
            "kind": "h3",
            "text": "Varför den motstående kateten hålls utanför"
          },
          {
            "kind": "p",
            "text": "Cosinus definieras som närliggande över hypotenusa. Den motstående kateten förekommer inte alls i detta förhållande. Det är poängen med denna kalkylator: när den motstående kateten är okänd, oåtkomlig eller irrelevant för din mätuppställning levererar arccos ändå vinkeln. Du ignorerar inte den motstående kateten; du använder ett förhållande som aldrig behövde den."
          }
        ],
        "figcaption": "Anatomi för arccos: b är den närliggande kateten som vidrör vinkel A, c är hypotenusan mittemot den räta vinkeln.",
        "h2": "Närliggande katet och hypotenusa: de två indata",
        "imgAlt": "Rätvinklig triangel med närliggande katet b och hypotenusa c markerade för arccos-formeln"
      },
      "arccos-applications": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos dyker upp överallt där lutningsavstånd och horisontellt avstånd är de naturliga mätningarna. Hypotenusan mäts längs själva lutningen och den närliggande kateten är den horisontella komponenten."
          },
          {
            "kind": "h3",
            "text": "Lantmäteri av sluttningar"
          },
          {
            "kind": "p",
            "text": "En lantmätare mäter 65 meter längs en sluttning och 60 meter horisontellt. Sluttningens vinkel är arccos(60/65), cirka 22,6 grader. Detta är standardsituationen för arccos: det sluttande avståndet är lätt att mäta med måttband, det horisontella kommer från kartan eller avvägningsinstrumentet, och den motstående kateten (höjden) är det du kanske beräknar härnäst."
          },
          {
            "kind": "h3",
            "text": "Solhöjd från skuggor"
          },
          {
            "kind": "p",
            "text": "En 10 meter lång ljusstråle kastar en 8 meter lång skugga. Solens höjdvinkel är arccos(8/10), cirka 36,9 grader. Skuggproblem är naturliga arccos-problem eftersom skuggan ligger längs marken (närliggande) och strålen är hypotenusan."
          },
          {
            "kind": "h3",
            "text": "Takstolslutning"
          },
          {
            "kind": "p",
            "text": "En takstol spänner över 6,5 meter med en horisontell sträcka på 6 meter. Lutningsvinkeln vid takfoten är arccos(6/6,5), cirka 22,6 grader. Snickare mäter takstolen direkt och sträckan längs bjälken, så arccos passar mätningarna som de togs."
          },
          {
            "kind": "h3",
            "text": "Konstruktionsstag"
          },
          {
            "kind": "p",
            "text": "Ett diagonalt stag mäter 4 meter med en 3,5 meter horisontell bas. Stagets vinkel är arccos(3,5/4), cirka 28,96 grader. Konstruktionsskisser ger stagets längd och dess fotavtryck; arccos omvandlar dem till monteringsvinkeln."
          }
        ],
        "figcaption": "Arccos-problem från verkligheten: sluttningsvinklar, solhöjd, takstolslutning och monteringsvinklar för stag.",
        "h2": "Verkliga tillämpningar av arccos",
        "imgAlt": "Fyra paneler som visar arccos-vinkelberäkningar för lantmäteri, skugga, takstol och stag"
      },
      "arccos-conclusion": {
        "blocks": [
          {
            "kind": "p",
            "text": "Börja med att identifiera den närliggande kateten: den katet som vidrör din målvinkel. Bekräfta att hypotenusan är den längsta sidan. Dividera, tillämpa arccos och läs av vinkeln i grader. Få den andra vinkeln från 90 minus den första. Verifiera med tur-och-retur-kontrollen, en beräkning med en annan metod och vinkelsumman. Med dessa steg reduceras varje problem med närliggande katet och hypotenusa till en pålitlig rutin. Återvänd till kalkylatorn högst upp på denna sida för att köra dina tal."
          }
        ],
        "h2": "Hitta varje vinkel från cosinus med tillförsikt"
      },
      "arccos-examples": {
        "blocks": [
          {
            "kind": "p",
            "text": "Varje exempel följer samma fyra steg: skriv formeln, sätt in, dividera, tillämpa arccos. Vinklarna är avrundade till två decimaler."
          },
          {
            "kind": "h3",
            "text": "Exempel 1: 3-4-5-triangeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 4 och hypotenusa c = 5, finn vinkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0,8) [[\\\\approx 36.87^\\\\circ]]. Komplementet B = 53,13[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exempel 2: 5-12-13-triangeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 12 och hypotenusa c = 13, finn vinkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0,9231) [[\\\\approx 22.62^\\\\circ]]. Komplementet B = 67,38[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exempel 3: 8-15-17-triangeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 8 och hypotenusa c = 17, finn vinkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0,4706) [[\\\\approx 61.93^\\\\circ]]. Komplementet B = 28,07[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exempel 4: Samma triangel, andra vinkeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 15 och hypotenusa c = 17 (löser vinkel B i 8-15-17-triangeln)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0,8824) [[\\\\approx 28.07^\\\\circ]]. Notera att 61,93 + 28,07 = 90, som krävs."
          },
          {
            "kind": "h3",
            "text": "Exempel 5: 5-12-13, andra vinkeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 5 och hypotenusa c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0,3846) [[\\\\approx 67.38^\\\\circ]]. Detta stämmer med komplementet från exempel 2."
          },
          {
            "kind": "h3",
            "text": "Exempel 6: 3-4-5, andra vinkeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 3 och hypotenusa c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0,6) [[\\\\approx 53.13^\\\\circ]]. Detta stämmer med komplementet från exempel 1."
          },
          {
            "kind": "h3",
            "text": "Exempel 7: Specialfallet 60 grader"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 1 och hypotenusa c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0,5) = 60[[\\\\^\\\\circ]] exakt. Detta är den speciella 30-60-90-triangeln."
          },
          {
            "kind": "h3",
            "text": "Exempel 8: 7-24-25-triangeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 7 och hypotenusa c = 25, finn vinkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0,28) [[\\\\approx 73.74^\\\\circ]]. Komplementet B = 16,26[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exempel 9: 7-24-25, andra vinkeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 24 och hypotenusa c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0,96) [[\\\\approx 16.26^\\\\circ]]. Stämmer med komplementet från exempel 8."
          },
          {
            "kind": "h3",
            "text": "Exempel 10: 9-40-41-triangeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 9 och hypotenusa c = 41, finn vinkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0,2195) [[\\\\approx 77.32^\\\\circ]]. En liten närliggande katet ger en vid vinkel."
          },
          {
            "kind": "h3",
            "text": "Exempel 11: 9-40-41, andra vinkeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 40 och hypotenusa c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0,9756) [[\\\\approx 12.68^\\\\circ]]. Notera att 77,32 + 12,68 = 90."
          },
          {
            "kind": "h3",
            "text": "Exempel 12: 20-21-29-triangeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 20 och hypotenusa c = 29, finn vinkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0,6897) [[\\\\approx 46.40^\\\\circ]]. Komplementet B = 43,60[[\\\\^\\\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exempel 13: 20-21-29, andra vinkeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 21 och hypotenusa c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0,7241) [[\\\\approx 43.60^\\\\circ]]. Stämmer med komplementet från exempel 12."
          },
          {
            "kind": "h3",
            "text": "Exempel 14: 6-8-10-triangeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 6 och hypotenusa c = 10, finn vinkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0,6) [[\\\\approx 53.13^\\\\circ]]. Samma vinkel som i exempel 6, eftersom 6-8-10 är en skalad 3-4-5."
          },
          {
            "kind": "h3",
            "text": "Exempel 15: 6-8-10, andra vinkeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 8 och hypotenusa c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0,8) [[\\\\approx 36.87^\\\\circ]]. Samma som i exempel 1, vilket bekräftar att likformiga trianglar delar vinklar."
          },
          {
            "kind": "h3",
            "text": "Exempel 16: 12-16-20-triangeln"
          },
          {
            "kind": "p",
            "text": "Givet närliggande katet b = 12 och hypotenusa c = 20, finn vinkel A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0,6) [[\\\\approx 53.13^\\\\circ]]. Ännu en skalad 3-4-5, samma vinkel igen. Att skala sidorna ändrar aldrig vinklarna."
          }
        ],
        "h2": "16 lösta exempel"
      },
      "arccos-howto": {
        "blocks": [],
        "figcaption": "Löst exempel: b = 4, c = 5 ger A = arccos(0,8), cirka 36,87 grader, verifierat med tur och retur.",
        "h2": "Så använder du vinkel-från-cosinus-kalkylatorn",
        "imgAlt": "Fyrstegs arccos-exempel med b lika med 4 och c lika med 5",
        "steps": [
          "<strong>Bekräfta den räta vinkeln.</strong> Kalkylatorn fungerar endast för rätvinkliga trianglar. Identifiera 90-gradershörnet först.",
          "<strong>Välj din målvinkel.</strong> Bestäm om du löser för vinkel A eller vinkel B. Den närliggande kateten definieras i förhållande till detta val.",
          "<strong>Mät den närliggande kateten b.</strong> Detta är den katet som vidrör din målvinkel. Anteckna den i valfri enhet.",
          "<strong>Mät hypotenusan c.</strong> Detta är den längsta sidan, mittemot den räta vinkeln. Använd samma enhet som för b.",
          "<strong>Kontrollera att b är mindre än c.</strong> Om så inte är fallet är sidorna felbetecknade. Hypotenusan måste vara längst.",
          "<strong>Ange båda värdena och tryck på Beräkna.</strong> Verktyget beräknar b/c, tillämpar arccos och returnerar vinkel A i grader.",
          "<strong>Hitta den andra vinkeln.</strong> Subtrahera från 90 grader: B = 90[[\\\\^\\\\circ]] minus A.",
          "<strong>Verifiera.</strong> Beräkna cos(A) på en räknare och bekräfta att det är lika med b/c. Om så är fallet är svaret gediget."
        ]
      },
      "arccos-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkylatorn för rätvinklig triangelvinkel från cosinus hittar en spetsig vinkel när du känner till den närliggande kateten och hypotenusan. Den tillämpar den inversa cosinusfunktionen, skriven arccos eller cos[[-1]], på förhållandet mellan dessa två sidor. Resultatet är vinkel A i grader."
          },
          {
            "kind": "p",
            "text": "Detta verktyg finns för en specifik mätsituation: du kan mäta sidan intill din målvinkel och triangelns längsta sida, men den motstående kateten är okänd eller svår att nå. I stället för att först beräkna den motstående kateten hoppar arccos helt över den och omvandlar förhållandet närliggande-över-hypotenusa direkt till vinkeln."
          },
          {
            "kind": "p",
            "text": "Till exempel ger en närliggande katet på 4 och en hypotenusa på 5 förhållandet 0,8. Arccos för 0,8 är cirka 36,87 grader. Det är vinkel A. Den andra spetsiga vinkeln följer av komplementregeln: 90 minus 36,87, eller 53,13 grader."
          },
          {
            "kind": "p",
            "text": "Arccos är ett av tre inversa trigonometriska verktyg på denna webbplats. Om dina kända sidor är den motstående kateten och hypotenusan är <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">vinkel-från-sinus-kalkylatorn</a> rätt val. Om du känner till båda kateterna men inte hypotenusan, använd <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">vinkel-från-tangens-kalkylatorn</a>. Denna sida täcker cosinusfallet på fullt djup."
          }
        ],
        "h2": "Vad är kalkylatorn för rätvinklig triangelvinkel från cosinus?"
      },
      "arccos-mistakes": {
        "blocks": [
          {
            "kind": "h3",
            "text": "Använda den motstående kateten i stället för den närliggande"
          },
          {
            "kind": "p",
            "text": "Det vanligaste felet. Arccos behöver den sida som vidrör vinkel A, inte den sida som ligger mittemot den. Om du matar in den motstående kateten i arccos får du komplementet till den avsedda vinkeln. I en 3-4-5-triangel är arccos(3/5) = 53,13 grader vinkel B, inte vinkel A. Åtgärd: skissa triangeln, markera din målvinkel och följ vilken katet som vidrör den."
          },
          {
            "kind": "h3",
            "text": "Sätta hypotenusan i täljaren"
          },
          {
            "kind": "p",
            "text": "Arccos förväntar sig närliggande över hypotenusa, ett tal under 1. Att mata in c/b i stället för b/c ger ett förhållande över 1 och kalkylatorn returnerar ett matematiskt fel. Åtgärd: hypotenusan är alltid nämnaren i arccos-förhållandet."
          },
          {
            "kind": "h3",
            "text": "Förväxla arccos med cosinus"
          },
          {
            "kind": "p",
            "text": "På många räknare sitter cosinustangenten och den inversa cosinustangenten (ofta märkt cos[[-1]] eller arccos) nära varandra. Att trycka på cos(0,8) i stället för arccos(0,8) ger 0,6967, ett meningslöst förhållande, i stället för 36,87 grader. Åtgärd: kontrollera att räknaren är i gradläge och att du tryckte på den inversa tangenten."
          },
          {
            "kind": "h3",
            "text": "Blanda grader och radianer"
          },
          {
            "kind": "p",
            "text": "Arccos(0,8) är 36,87 grader men 0,6435 radianer. Om din handberäkning ger 0,64 för en 3-4-5-triangel är räknaren i radianläge. Multiplicera med 180/pi för att omvandla, eller växla läget till grader. Denna kalkylator matar ut grader."
          },
          {
            "kind": "h3",
            "text": "Mata in sidor i olika enheter"
          },
          {
            "kind": "p",
            "text": "Närliggande katet i tum och hypotenusa i fot förstör förhållandet. Omvandla till en gemensam enhet först. Förhållandet är enhetslöst, men bara när båda indata delar enhet."
          },
          {
            "kind": "h3",
            "text": "Avrunda förhållandet för tidigt"
          },
          {
            "kind": "p",
            "text": "Arccos(0,8) = 36,87 grader, men arccos(0,80) avrundat från 0,795 ger 37,24 grader. Nära förhållandena 0 och 1, där arccos är brantast, förstärks små förhållandefel. Behåll full precision genom divisionen och avrunda endast den slutliga vinkeln."
          },
          {
            "kind": "h3",
            "text": "Glömma vilken vinkel som löstes"
          },
          {
            "kind": "p",
            "text": "Arccos returnerar den vinkel vars närliggande katet du matade in. Om du matade in den sida som vidrör vinkel B är resultatet vinkel B. Märk svaret med rätt vinkelnamn, eller verifiera med komplementet: de två spetsiga vinklarna måste summera till 90 grader."
          }
        ],
        "h2": "Vanliga misstag vid användning av arccos"
      },
      "arccos-special": {
        "blocks": [
          {
            "kind": "p",
            "text": "Vissa arccos-värden förekommer så ofta att det sparar tid att känna igen dem. De kommer från de speciella rätvinkliga trianglarna."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1) = 0^\\\\circ]]: den närliggande kateten är lika med hypotenusan, så vinkeln krymper till noll. Detta är ett degenererat fall, inte en riktig triangel, men det förankrar skalan."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{3}/2) \\\\approx 30^\\\\circ]]: från 30-60-90-triangeln. När den närliggande kateten är cirka 86,6 procent av hypotenusan är vinkeln 30 grader."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{2}/2) = 45^\\\\circ]]: från 45-45-90-triangeln. Lika kateter ger detta exakta värde."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1/2) = 60^\\\\circ]]: från 30-60-90-triangeln, fallet i exempel 7. När den närliggande kateten är exakt hälften av hypotenusan är vinkeln exakt 60 grader."
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(0) = 90^\\\\circ]]: den närliggande kateten krymper till noll, så vinkeln öppnar sig till en rät vinkel. Liksom nollfallet är detta en gräns, inte en riktig triangelvinkel."
          },
          {
            "kind": "p",
            "text": "Mellan dessa riktmärken avtar arccos mjukt när förhållandet ökar. Att memorera de fem ankarpunkterna låter dig uppskatta varje arccos mentalt: ett förhållande på 0,7 ligger mellan 0,5 (60 grader) och 0,866 (30 grader), lite närmare 45 grader. Det sanna värdet är cirka 45,57 grader."
          }
        ],
        "h2": "Speciella vinkelvärden värda att memorera"
      },
      "arccos-verify": {
        "blocks": [
          {
            "kind": "p",
            "text": "Tre kontroller bekräftar en korrekt arccos-beräkning:"
          },
          {
            "kind": "p",
            "text": "För 3-4-5-triangeln, verifiera också att sidorna uppfyller Pythagoras sats: 9 + 16 = 25. Att bekräfta sidorna innan du litar på den vinkel som härletts från dem är god praxis."
          },
          {
            "kind": "p",
            "text": "En fjärde kontroll använder komplementet. Beräkna B = 90[[\\\\^\\\\circ]] minus A och verifiera sedan att arccos för det andra förhållandet ger B. I exempel 1 är arccos(3/5) = 53,13[[\\\\^\\\\circ]], vilket stämmer med 90 minus 36,87. När alla fyra kontrollerna passerar är svaret bortom tvivel."
          }
        ],
        "h2": "Verifiera ditt arccos-svar",
        "steps": [
          "<strong>Intervallkontroll.</strong> Resultatet måste ligga strikt mellan 0 och 90 grader. Allt utanför signalerar ogiltiga indata eller felbetecknade sidor.",
          "<strong>Tur-och-retur-kontroll.</strong> Beräkna cos(A) och bekräfta att det är lika med b/c. För exempel 1 är cos(36,87[[\\\\^\\\\circ]]) [[\\\\approx]] 0,8 = 4/5. Om tur och retur misslyckas är vinkeln fel.",
          "<strong>Kontroll med annan metod.</strong> Räkna om med arcsin eller arctan med hjälp av den tredje sidan. Om arccos(4/5) = 36,87[[\\\\^\\\\circ]] och arctan(3/4) = 36,87[[\\\\^\\\\circ]] är svaret gediget. Oenighet pekar på ett beteckningsfel."
        ]
      },
      "arccos-vs": {
        "blocks": [
          {
            "kind": "p",
            "text": "Alla tre inversa funktioner hittar samma vinkel när de tillämpas på samma triangel. De skiljer sig endast i vilka sidor de kräver. Att välja rätt sparar dig från att beräkna en sida du inte behöver."
          },
          {
            "kind": "p",
            "text": "Använd <strong>arccos</strong> när du känner till den närliggande kateten (b) och hypotenusan (c). Formeln är [[A = \\\\cos^{-1}(b/c)]]. Detta är det naturliga valet när hypotenusan mättes direkt, till exempel med ett måttband längs en sluttning, och det horisontella avståndet är känt."
          },
          {
            "kind": "p",
            "text": "Använd <strong>arcsin</strong> när du känner till den motstående kateten (a) och hypotenusan (c). Formeln är [[A = \\\\sin^{-1}(a/c)]]. Höjdproblem gynnar arcsin: den vertikala stigningen ligger mittemot marknivåvinkeln."
          },
          {
            "kind": "p",
            "text": "Använd <strong>arctan</strong> när du känner till båda kateterna (a och b) men inte hypotenusan. Formeln är [[A = \\\\tan^{-1}(a/b)]]. Fältmätningar som takhöjning över sträcka gynnar arctan eftersom båda kateterna mäts direkt."
          },
          {
            "kind": "h3",
            "text": "De måste stämma överens"
          },
          {
            "kind": "p",
            "text": "För varje enskild triangel ger arccos(b/c), arcsin(a/c) och arctan(a/b) identisk vinkel. I en 3-4-5-triangel är arccos(4/5), arcsin(3/5) och arctan(3/4) alla lika med 36,87 grader. Om två metoder inte stämmer överens är en sida felbetecknad. Denna korskontroll är den mest tillförlitliga verifiering som finns."
          },
          {
            "kind": "h3",
            "text": "Varför inte alltid använda arctan?"
          },
          {
            "kind": "p",
            "text": "Arctan behöver båda kateterna. Om den motstående kateten är okänd och svår att mäta lägger det till ett onödigt steg och en extra felchans att först beräkna den bara för att använda arctan. Arccos går direkt från de två sidor du har till den vinkel du vill ha. Matcha funktionen mot dina mätningar, inte mot vanan."
          }
        ],
        "h2": "Arccos kontra arcsin kontra arctan: när ska var och en användas"
      },
      "arccos-what": {
        "blocks": [
          {
            "kind": "p",
            "text": "Vanlig cosinus tar en vinkel och ger ett förhållande. Cosinus för 60 grader är 0,5. Arccos vänder på det: den tar ett förhållande och ger vinkeln. Arccos för 0,5 är 60 grader. De två funktionerna upphäver varandra, vilket är varför arccos också skrivs som cos[[-1]]."
          },
          {
            "kind": "p",
            "text": "Formeln som denna kalkylator använder är [[A = \\\\cos^{-1}(b/c)]]. Här är b den närliggande kateten, c är hypotenusan och A är vinkeln mellan dem. Förhållandet b/c ligger alltid mellan 0 och 1 för en giltig rätvinklig triangel, eftersom den närliggande kateten alltid är kortare än hypotenusan."
          },
          {
            "kind": "p",
            "text": "Se arccos som en fråga: \"Vilken vinkel har detta cosinusvärde?\" Om b/c är lika med 0,8 blir frågan \"vilken vinkel har cosinus 0,8?\" Svaret, 36,87 grader, är den vinkel vars närliggande katet är 80 procent så lång som hypotenusan."
          },
          {
            "kind": "h3",
            "text": "Förhållandet berättar en historia"
          },
          {
            "kind": "p",
            "text": "Värdet på b/c beskriver triangelns form. Ett förhållande nära 1 betyder att den närliggande kateten är nästan lika lång som hypotenusan, så vinkeln mellan dem är pytteliten. Ett förhållande nära 0 betyder att den närliggande kateten är mycket kort jämfört med hypotenusan, så vinkeln öppnar sig brett mot 90 grader. Ett förhållande på exakt 0,5 betyder alltid 60 grader."
          },
          {
            "kind": "h3",
            "text": "Arccos definitionsmängd"
          },
          {
            "kind": "p",
            "text": "Arccos accepterar endast indata från 0 till 1 i detta geometriska sammanhang. Ett förhållande över 1 är omöjligt för en rätvinklig triangel och signalerar ett beteckningsfel: hypotenusan måste vara nämnaren och måste vara den längsta sidan. Ett negativt förhållande skulle beskriva en trubbig vinkel, som inte kan förekomma som vinkel A i en rätvinklig triangel."
          }
        ],
        "figcaption": "Så fungerar arccos: dividera den närliggande kateten med hypotenusan och tillämpa sedan invers cosinus för att återfå vinkeln.",
        "h2": "Förstå arccos (invers cosinus)",
        "imgAlt": "Diagram som visar arccos två steg: dividera b med c och tillämpa sedan arccos för att få vinkeln"
      }
    },
    "tocHeading": "I den här guiden",
    "tocItems": {
      "arccos-anatomy": "Närliggande katet och hypotenusa",
      "arccos-applications": "Verkliga tillämpningar",
      "arccos-conclusion": "Hitta varje vinkel från cosinus med tillförsikt",
      "arccos-examples": "16 lösta exempel",
      "arccos-faq": "Vanliga frågor",
      "arccos-howto": "Så använder du kalkylatorn",
      "arccos-intro": "Vad är vinkel-från-cosinus-kalkylatorn?",
      "arccos-mistakes": "Vanliga misstag",
      "arccos-special": "Speciella vinkelvärden",
      "arccos-verify": "Verifiera ditt svar",
      "arccos-vs": "Arccos kontra arcsin kontra arctan",
      "arccos-what": "Förstå arccos (invers cosinus)"
    }
  },
  "zh": {
    "faqs": [
      {
        "question": "A = arccos(b / c) 实际上是什么意思？",
        "answer": "它的意思是：用邻边除以斜边，然后从这个小数值反向求出余弦值等于它的角。结果是邻边与斜边之间的锐角。"
      },
      {
        "question": "什么时候该用 arccos 而不是 arcsin？",
        "answer": "已知邻边和斜边时用 arccos。已知对边和斜边时用 arcsin。两者对同一个三角形给出相同的角；选择取决于你实际测量了哪些边。"
      },
      {
        "question": "为什么 arccos 会报数学错误？",
        "answer": "最常见的原因是比值大于 1，也就是输入的邻边比斜边还长。在有效的直角三角形中，斜边永远最长，所以请检查边的标注。"
      },
      {
        "question": "不知道对边也能用 arccos 吗？",
        "answer": "可以。这正是 arccos 的主要优势：它只需要邻边和斜边。对边从不参与计算。"
      },
      {
        "question": "cos 和 arccos 有什么区别？",
        "answer": "余弦取一个角返回一个比值：cos(60°) = 0.5。Arccos 则反过来：取一个比值返回角，所以 arccos(0.5) = 60°。已知角时用余弦；已知边时用 arccos。"
      },
      {
        "question": "为什么 arccos、arcsin 和 arctan 给出相同的答案？",
        "answer": "因为它们通过不同的边组合描述同一个几何角。在 3-4-5 三角形中，arccos(4/5)、arcsin(3/5) 和 arctan(3/4) 都等于 36.87°。方法之间的一致确认了边的标注正确。"
      },
      {
        "question": "如果 b/c 恰好等于 0.5 意味着什么？",
        "answer": "角恰好是 60°。这是特殊的 30-60-90 三角形，其中 60° 角的邻边恰为斜边的一半。"
      },
      {
        "question": "答案应该用角度还是弧度？",
        "answer": "本计算器使用角度，这是建筑、测量和课堂几何的标准。如果你手算，请确保计算器处于角度模式；0.64 这样的弧度模式结果乘以 180/pi 即可换算为 36.87°。"
      },
      {
        "question": "怎么求另一个锐角？",
        "answer": "用 90° 减去即可。如果 arccos 给出 A = 36.87°，那么 B = 90 - 36.87 = 53.13°。不需要更多的三角运算。"
      },
      {
        "question": "arccos 的结果可能是 90° 吗？",
        "answer": "只能作为极限：arccos(0) = 90°，但邻边为零意味着退化三角形，而不是真正的三角形。arccos 给出的有效直角三角形角永远严格介于 0° 和 90° 之间。"
      },
      {
        "question": "如何验证我的 arccos 答案？",
        "answer": "计算 cos(A) 并确认它等于 b/c。再用第三条边以 arcsin 或 arctan 重算一遍；所有方法必须一致。最后检查两个锐角之和恰为 90°。"
      },
      {
        "question": "放大三角形会改变 arccos 结果吗？",
        "answer": "不会。相似三角形的角完全相同。3-4-5 三角形和 6-8-10 三角形都给出 arccos(0.8) = 36.87°，因为比值 b/c 不随缩放改变。"
      }
    ],
    "relatedHeading": "探索相关的直角三角形计算器",
    "relatedItems": [
      "直角三角形角度计算器",
      "直角三角形正弦求角计算器",
      "直角三角形正切求角计算器",
      "直角三角形余弦求边计算器",
      "直角三角形边长计算器",
      "直角三角形缺角计算器",
      "直角三角形三角比计算器",
      "余弦比计算器"
    ],
    "sections": {
      "arccos-anatomy": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos 恰好需要两条边：邻边 b 和斜边 c。把它们标注正确就是全部的较量，之后全是算术。"
          },
          {
            "kind": "h3",
            "text": "识别邻边"
          },
          {
            "kind": "p",
            "text": "邻边是贴着角 A 的那条直角边，它构成这个角本身的一条边。在下图中，边 b 沿底部从直角延伸到角 A。如果你要求的是另一个锐角 B，标注就互换：贴着 B 的那条边才是 B 的邻边。"
          },
          {
            "kind": "h3",
            "text": "识别斜边"
          },
          {
            "kind": "p",
            "text": "斜边是直角对面的边，它永远是三角形最长的边，绝不接触直角顶点。如果你的\"斜边\"不是三次测量中最长的，请先重新标注再计算。"
          },
          {
            "kind": "h3",
            "text": "为什么对边不参与"
          },
          {
            "kind": "p",
            "text": "余弦定义为邻边比斜边，对边根本不出现在这个比值里。这正是本计算器的意义：当对边未知、难以触及或与你的测量 setup 无关时，arccos 照样给出角度。你并没有忽略对边，你用的比值本来就不需要它。"
          }
        ],
        "figcaption": "arccos 的构造：b 是贴着角 A 的邻边，c 是直角对面的斜边。",
        "h2": "邻边与斜边：两个输入",
        "imgAlt": "直角三角形，突出显示 arccos 公式用的邻边 b 和斜边 c"
      },
      "arccos-applications": {
        "blocks": [
          {
            "kind": "p",
            "text": "只要坡面距离和水平距离是自然的测量量，arccos 就会出现。斜边沿坡面本身测量，邻边是水平分量。"
          },
          {
            "kind": "h3",
            "text": "坡度测量"
          },
          {
            "kind": "p",
            "text": "测量员沿坡面量得 65 米，水平量得 60 米，坡角为 arccos(60/65)，约 22.6°。这是标准的 arccos 场景：斜距用卷尺很容易量，水平距来自地图或水准仪，而对边（高差）是你接下来可能要算的。"
          },
          {
            "kind": "h3",
            "text": "由影子求太阳高度角"
          },
          {
            "kind": "p",
            "text": "10 米长的光线投下 8 米长的影子，太阳高度角为 arccos(8/10)，约 36.9°。影子问题是天然的 arccos 问题，因为影子落在地面上（邻边），光线就是斜边。"
          },
          {
            "kind": "h3",
            "text": "屋架坡度"
          },
          {
            "kind": "p",
            "text": "一根椽子跨度 6.5 米，水平投影 6 米，檐口处的坡角为 arccos(6/6.5)，约 22.6°。木工直接量椽子、沿檩条量投影，所以 arccos 与实测方式天然吻合。"
          },
          {
            "kind": "h3",
            "text": "工程斜撑"
          },
          {
            "kind": "p",
            "text": "一根斜撑长 4 米，水平底座 3.5 米，斜撑角度为 arccos(3.5/4)，约 28.96°。结构草图给出撑的长度和占地，arccos 把它们变成安装角度。"
          }
        ],
        "figcaption": "现实中的 arccos 问题：坡角、太阳高度、屋架坡度和斜撑安装角。",
        "h2": "Arccos 在现实生活中的应用",
        "imgAlt": "四个面板，分别展示测量、影子、屋架和斜撑的 arccos 角度计算"
      },
      "arccos-conclusion": {
        "blocks": [
          {
            "kind": "p",
            "text": "先认出邻边：贴着目标角的那条直角边；确认斜边最长；相除、套 arccos、用角度读数；第二角用 90° 减去第一角；再以回程检验、跨方法验算和角之和验证。有了这些步骤，任何邻边加斜边的问题都变成可靠的常规操作。回到本页顶部的计算器，输入你的数字算一算吧。"
          }
        ],
        "h2": "自信地用余弦求出任意角"
      },
      "arccos-examples": {
        "blocks": [
          {
            "kind": "p",
            "text": "每个例子都遵循相同的四步：写公式、代入、相除、套 arccos。角度保留两位小数。"
          },
          {
            "kind": "h3",
            "text": "例 1：3-4-5 三角形"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 4、斜边 c = 5，求角 A。"
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) [[\\\\approx 36.87^\\\\circ]]。余角 B = 53.13[[\\\\^\\\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例 2：5-12-13 三角形"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 12、斜边 c = 13，求角 A。"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) [[\\\\approx 22.62^\\\\circ]]。余角 B = 67.38[[\\\\^\\\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例 3：8-15-17 三角形"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 8、斜边 c = 17，求角 A。"
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) [[\\\\approx 61.93^\\\\circ]]。余角 B = 28.07[[\\\\^\\\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例 4：同一三角形，求另一角"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 15、斜边 c = 17（求 8-15-17 三角形的角 B）。"
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) [[\\\\approx 28.07^\\\\circ]]。注意 61.93 + 28.07 = 90，符合要求。"
          },
          {
            "kind": "h3",
            "text": "例 5：5-12-13，求另一角"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 5、斜边 c = 13。"
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) [[\\\\approx 67.38^\\\\circ]]。与例 2 的余角一致。"
          },
          {
            "kind": "h3",
            "text": "例 6：3-4-5，求另一角"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 3、斜边 c = 5。"
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) [[\\\\approx 53.13^\\\\circ]]。与例 1 的余角一致。"
          },
          {
            "kind": "h3",
            "text": "例 7：60° 特殊情形"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 1、斜边 c = 2。"
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60[[\\\\^\\\\circ]]（精确值）。这是 30-60-90 特殊三角形。"
          },
          {
            "kind": "h3",
            "text": "例 8：7-24-25 三角形"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 7、斜边 c = 25，求角 A。"
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) [[\\\\approx 73.74^\\\\circ]]。余角 B = 16.26[[\\\\^\\\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例 9：7-24-25，求另一角"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 24、斜边 c = 25。"
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) [[\\\\approx 16.26^\\\\circ]]。与例 8 的余角一致。"
          },
          {
            "kind": "h3",
            "text": "例 10：9-40-41 三角形"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 9、斜边 c = 41，求角 A。"
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) [[\\\\approx 77.32^\\\\circ]]。邻边越短，角越开阔。"
          },
          {
            "kind": "h3",
            "text": "例 11：9-40-41，求另一角"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 40、斜边 c = 41。"
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) [[\\\\approx 12.68^\\\\circ]]。注意 77.32 + 12.68 = 90。"
          },
          {
            "kind": "h3",
            "text": "例 12：20-21-29 三角形"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 20、斜边 c = 29，求角 A。"
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) [[\\\\approx 46.40^\\\\circ]]。余角 B = 43.60[[\\\\^\\\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例 13：20-21-29，求另一角"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 21、斜边 c = 29。"
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) [[\\\\approx 43.60^\\\\circ]]。与例 12 的余角一致。"
          },
          {
            "kind": "h3",
            "text": "例 14：6-8-10 三角形"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 6、斜边 c = 10，求角 A。"
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) [[\\\\approx 53.13^\\\\circ]]。与例 6 同角，因为 6-8-10 是放大的 3-4-5。"
          },
          {
            "kind": "h3",
            "text": "例 15：6-8-10，求另一角"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 8、斜边 c = 10。"
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) [[\\\\approx 36.87^\\\\circ]]。与例 1 相同，证实相似三角形共享角度。"
          },
          {
            "kind": "h3",
            "text": "例 16：12-16-20 三角形"
          },
          {
            "kind": "p",
            "text": "已知邻边 b = 12、斜边 c = 20，求角 A。"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) [[\\\\approx 53.13^\\\\circ]]。又是放大的 3-4-5，角度依然相同。缩放边长永远不改变角度。"
          }
        ],
        "h2": "16 个例题详解"
      },
      "arccos-howto": {
        "blocks": [],
        "figcaption": "例题演示：b = 4、c = 5，得 A = arccos(0.8) ≈ 36.87°，经回程检验确认。",
        "h2": "如何使用余弦求角计算器",
        "imgAlt": "b 等于 4、c 等于 5 的四步 arccos 示例",
        "steps": [
          "<strong>确认直角。</strong>本计算器只适用于直角三角形，先找到 90° 的角。",
          "<strong>选定目标角。</strong>确定要求的是角 A 还是角 B，邻边的定义取决于这个选择。",
          "<strong>量出邻边 b。</strong>即贴着目标角的那条直角边，用任意单位记录。",
          "<strong>量出斜边 c。</strong>即最长的边，在直角对面，与 b 用同一单位。",
          "<strong>检查 b 是否小于 c。</strong>若不是，说明边的标注错了，斜边必须最长。",
          "<strong>输入两个值并按计算。</strong>工具先算 b/c，再套 arccos，以角度返回角 A。",
          "<strong>求第二个角。</strong>用 90° 减去：B = 90[[\\\\^\\\\circ]] 减 A。",
          "<strong>验证。</strong>在计算器上算 cos(A)，确认它等于 b/c；若成立，答案可靠。"
        ]
      },
      "arccos-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "直角三角形余弦求角计算器在已知邻边和斜边时求出锐角。它把反余弦函数（记作 arccos 或 cos[[-1]]）作用于这两条边的比值，结果是以角度表示的角 A。"
          },
          {
            "kind": "p",
            "text": "这个工具针对特定的测量场景：你能量到目标角旁边的边和三角形最长的边，但对边未知或难以触及。与其先算对边，arccos 直接跳过它，把邻边比斜边的比值直接换算成角度。"
          },
          {
            "kind": "p",
            "text": "例如邻边 4、斜边 5，比值为 0.8，arccos(0.8) 约为 36.87°，这就是角 A。另一个锐角由余角规则得出：90 减 36.87，即 53.13°。"
          },
          {
            "kind": "p",
            "text": "Arccos 是本站三个反三角工具之一。若已知的是对边和斜边，<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">正弦求角计算器</a>才是正确选择；若已知两条直角边而不知斜边，请用<a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">正切求角计算器</a>。本页深入讲解余弦的情形。"
          }
        ],
        "h2": "什么是直角三角形余弦求角计算器？"
      },
      "arccos-mistakes": {
        "blocks": [
          {
            "kind": "h3",
            "text": "误把对边当邻边"
          },
          {
            "kind": "p",
            "text": "最常见的错误。Arccos 要的是贴着角 A 的边，而不是它对面的边。若把对边喂给 arccos，得到的是目标角的余角。在 3-4-5 三角形中，arccos(3/5) = 53.13° 是角 B 而不是角 A。修正：画出三角形，标出目标角，再看清哪条直角边贴着它。"
          },
          {
            "kind": "h3",
            "text": "把斜边放到分子上"
          },
          {
            "kind": "p",
            "text": "Arccos 要的是邻边比斜边，一个小于 1 的数。输入 c/b 而不是 b/c 会得到大于 1 的比值，计算器报数学错误。修正：斜边在 arccos 比值里永远是分母。"
          },
          {
            "kind": "h3",
            "text": "把 arccos 和余弦搞混"
          },
          {
            "kind": "p",
            "text": "很多计算器上余弦键和反余弦键（常标为 cos[[-1]] 或 arccos）挨得很近。按成 cos(0.8) 而不是 arccos(0.8)，会得到 0.6967 这样无意义的比值，而不是 36.87°。修正：检查计算器处于角度模式，并且按的是反函数键。"
          },
          {
            "kind": "h3",
            "text": "角度和弧度混用"
          },
          {
            "kind": "p",
            "text": "arccos(0.8) 是 36.87°，但也是 0.6435 弧度。若手算 3-4-5 得到 0.64，说明计算器在弧度模式，乘以 180/pi 换算或切换到角度模式。本计算器输出角度。"
          },
          {
            "kind": "h3",
            "text": "两条边用了不同单位"
          },
          {
            "kind": "p",
            "text": "邻边用英寸、斜边用英尺会破坏比值，先统一单位。比值本身无量纲，但前提是两个输入共用单位。"
          },
          {
            "kind": "h3",
            "text": "过早对比值取整"
          },
          {
            "kind": "p",
            "text": "arccos(0.8) = 36.87°，但由 0.795 取整来的 arccos(0.80) 会给出 37.24°。在接近 0 和 1、arccos 最陡峭的区域，微小的比值误差会被放大。相除时保持全精度，只对最终角度取整。"
          },
          {
            "kind": "h3",
            "text": "忘了求的是哪个角"
          },
          {
            "kind": "p",
            "text": "arccos 返回的是你输入其邻边的那个角。若输入的是贴着角 B 的边，结果就是角 B。用正确的角名标注答案，或用余角验证：两锐角之和必须为 90°。"
          }
        ],
        "h2": "使用 arccos 时的常见错误"
      },
      "arccos-special": {
        "blocks": [
          {
            "kind": "p",
            "text": "有些 arccos 值出现得极其频繁，认出它们能省不少时间，它们都来自特殊直角三角形。"
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1) = 0^\\\\circ]]：邻边等于斜边，角坍缩为零。这是退化情形，不是真正的三角形，但它锚定了尺度。"
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{3}/2) \\\\approx 30^\\\\circ]]：来自 30-60-90 三角形。邻边约为斜边 86.6% 时，角为 30°。"
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(\\\\sqrt{2}/2) = 45^\\\\circ]]：来自 45-45-90 三角形。两条直角边相等给出这个精确值。"
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(1/2) = 60^\\\\circ]]：来自 30-60-90 三角形，即例 7 的情形。邻边恰为斜边一半时，角恰为 60°。"
          },
          {
            "kind": "p",
            "text": "[[\\\\cos^{-1}(0) = 90^\\\\circ]]：邻边缩为零，角张开成直角。和零的情形一样，这是边界，不是真正的三角形角。"
          },
          {
            "kind": "p",
            "text": "在这些界标之间，arccos 随比值增大而平滑减小。记住五个锚点就能心算任何 arccos：比值 0.7 介于 0.5（60°）和 0.866（30°）之间，略靠近 45°，真值约 45.57°。"
          }
        ],
        "h2": "值得记住的特殊角度值"
      },
      "arccos-verify": {
        "blocks": [
          {
            "kind": "p",
            "text": "三项检查确认 arccos 计算正确："
          },
          {
            "kind": "p",
            "text": "对 3-4-5 三角形，还要验证边满足勾股定理：9 + 16 = 25。在信任由边导出的角之前先确认边，是良好的习惯。"
          },
          {
            "kind": "p",
            "text": "第四项检查用余角。算出 B = 90[[\\\\^\\\\circ]] 减 A，再验证另一比值的 arccos 给出 B。例 1 中 arccos(3/5) = 53.13[[\\\\^\\\\circ]]，恰等于 90 减 36.87。四项全过，答案无可置疑。"
          }
        ],
        "h2": "验证你的 arccos 答案",
        "steps": [
          "<strong>范围检查。</strong>结果必须严格介于 0° 和 90° 之间，超出即说明输入无效或边的标注有误。",
          "<strong>回程检查。</strong>算出 cos(A) 并确认它等于 b/c。例 1 中 cos(36.87[[\\\\^\\\\circ]]) [[\\\\approx]] 0.8 = 4/5，回程失败则角必错。",
          "<strong>跨方法检查。</strong>用第三条边以 arcsin 或 arctan 重算；若 arccos(4/5) = 36.87[[\\\\^\\\\circ]] 且 arctan(3/4) = 36.87[[\\\\^\\\\circ]]，答案就站得住脚。不一致指向标注错误。"
        ]
      },
      "arccos-vs": {
        "blocks": [
          {
            "kind": "p",
            "text": "三个反函数用于同一三角形时求的是同一个角，区别只在各自需要的边。选对了，就省掉算一条不需要的边的功夫。"
          },
          {
            "kind": "p",
            "text": "已知邻边 (b) 和斜边 (c) 时用 <strong>arccos</strong>，公式为 [[A = \\\\cos^{-1}(b/c)]]。当斜边是直接量到的（比如沿坡面拉卷尺）而水平距已知时，这是最自然的选择。"
          },
          {
            "kind": "p",
            "text": "已知对边 (a) 和斜边 (c) 时用 <strong>arcsin</strong>，公式为 [[A = \\\\sin^{-1}(a/c)]]。求高度的问题偏爱 arcsin：竖向升高正对着地面处的角。"
          },
          {
            "kind": "p",
            "text": "已知两条直角边 (a、b) 而不知斜边时用 <strong>arctan</strong>，公式为 [[A = \\\\tan^{-1}(a/b)]]。屋面起坡比跨度这类实测两条直角边的场景偏爱 arctan。"
          },
          {
            "kind": "h3",
            "text": "三者必须一致"
          },
          {
            "kind": "p",
            "text": "对同一个三角形，arccos(b/c)、arcsin(a/c)、arctan(a/b) 给出完全相同的角。在 3-4-5 三角形中三者都等于 36.87°。若两种方法不一致，一定是某条边标错了，这种交叉检验是最可靠的验证。"
          },
          {
            "kind": "h3",
            "text": "为什么不总是用 arctan？"
          },
          {
            "kind": "p",
            "text": "arctan 需要两条直角边。若对边未知又难测，为了用 arctan 而先去算它，只会多添一步和一次出错机会。arccos 从你手头的两条边直达想要的角，让函数去贴合你的测量，而不是迁就习惯。"
          }
        ],
        "h2": "Arccos、arcsin、arctan：何时用哪一个"
      },
      "arccos-what": {
        "blocks": [
          {
            "kind": "p",
            "text": "普通余弦取一个角返回一个比值：60° 的余弦是 0.5。Arccos 反过来：取一个比值返回角，arccos(0.5) = 60°。两函数互为逆运算，所以 arccos 也记作 cos[[-1]]。"
          },
          {
            "kind": "p",
            "text": "本计算器用的公式是 [[A = \\\\cos^{-1}(b/c)]]，其中 b 为邻边、c 为斜边、A 为其夹角。有效直角三角形的 b/c 永远介于 0 和 1 之间，因为邻边永远短于斜边。"
          },
          {
            "kind": "p",
            "text": "把 arccos 想成一个提问：\"余弦值是这个数的角是哪个？\"若 b/c = 0.8，问题就变成\"余弦为 0.8 的角是哪个？\"答案 36.87°，就是邻边为斜边 80% 长的那个角。"
          },
          {
            "kind": "h3",
            "text": "比值会讲故事"
          },
          {
            "kind": "p",
            "text": "b/c 的大小描绘三角形的形状：接近 1 说明邻边几乎与斜边等长，夹角极小；接近 0 说明邻边相对斜边很短，角向 90° 大大张开；恰为 0.5 则永远是 60°。"
          },
          {
            "kind": "h3",
            "text": "arccos 的定义域"
          },
          {
            "kind": "p",
            "text": "在此几何语境下 arccos 只接受 0 到 1 的输入。大于 1 的比值对直角三角形不可能，说明标注有误：斜边必须是分母且必须最长。负比值对应钝角，不可能作为直角三角形的角 A 出现。"
          }
        ],
        "figcaption": "arccos 的工作原理：邻边除以斜边，再套反余弦找回角度。",
        "h2": "理解 arccos（反余弦）",
        "imgAlt": "示意图展示 arccos 的两步：b 除以 c，再套 arccos 得到角度"
      }
    },
    "tocHeading": "本指南内容",
    "tocItems": {
      "arccos-anatomy": "邻边与斜边",
      "arccos-applications": "现实生活中的应用",
      "arccos-conclusion": "自信地用余弦求出任意角",
      "arccos-examples": "16 个例题详解",
      "arccos-faq": "常见问题",
      "arccos-howto": "如何使用计算器",
      "arccos-intro": "什么是直角三角形余弦求角计算器？",
      "arccos-mistakes": "常见错误",
      "arccos-special": "特殊角度值",
      "arccos-verify": "验证你的答案",
      "arccos-vs": "arccos、arcsin、arctan 对比",
      "arccos-what": "理解 arccos（反余弦）"
    }
  }
}
