/**
 * Side guide translations — batch 3: id, ar, bg, tr, sv, zh.
 * Source: theme/components/SideGuide.astro (English master).
 * KaTeX [[...]] / [[[...]]] markup preserved; render through the same rich() helper.
 * Sections: 15 content sections under `sections`; FAQs under `faqs`;
 * related calculators under relatedHeading/relatedIntro/relatedItems.
 * linkAnchorText (side-beyond): wrap with <a href="/right-triangle-side-from-angle-calculator/">.
 */
export const SIDE_GUIDE_TRANSLATIONS_BATCH3 = {
  "id": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "side-intro": "Cara Mencari Sisi yang Hilang",
      "side-anatomy": "Memahami Tiga Sisi",
      "side-pythagoras": "Teorema Pythagoras",
      "side-hypotenuse": "Mencari Hipotenusa",
      "side-leg": "Mencari Sisi Siku-siku yang Hilang",
      "side-howto": "Menggunakan Kalkulator",
      "side-formulas": "Rumus Sekilas",
      "side-applications": "Contoh dalam Kehidupan Nyata",
      "side-triples": "Tripel Pythagoras",
      "side-units": "Satuan dan Ketelitian",
      "side-invalid": "Masukan yang Tidak Valid",
      "side-verify": "Memverifikasi Jawaban Anda",
      "side-mistakes": "Kesalahan Umum",
      "side-beyond": "Saat Pythagoras Tidak Cukup",
      "side-related": "Kalkulator Terkait",
      "side-faq": "FAQ"
    },
    "sections": {
      "side-intro": {
        "h2": "Cara Mencari Sisi Segitiga Siku-siku yang Hilang",
        "paragraphs": [
          "Kalkulator sisi segitiga siku-siku menemukan panjang sisi yang belum diketahui ketika Anda mengetahui dua sisi lainnya. Kegunaan umum termasuk mengukur diagonal ruangan, memeriksa balok penyangga, atau memverifikasi jawaban PR. Kalkulator membutuhkan tepat dua panjang sisi agar bisa bekerja. Kalkulator ini menerapkan teorema Pythagoras yang menghubungkan ketiga sisi setiap segitiga siku-siku. Mencari hipotenusa menggunakan penjumlahan di bawah akar kuadrat, sedangkan mencari sisi siku-siku yang hilang menggunakan pengurangan. Metode ini hanya berlaku untuk segitiga siku-siku, karena hubungan tersebut bergantung pada sudut 90 derajat. Sebagai contoh, segitiga siku-siku dengan sisi tegak lurus 6 cm dan 8 cm memiliki hipotenusa 10 cm. Prinsip yang sama mengukur jarak nyata, dari panjang tangga hingga diagonal layar."
        ]
      },
      "side-anatomy": {
        "h2": "Memahami Tiga Sisi Segitiga Siku-siku",
        "h3s": [
          "Apa Itu Segitiga Siku-siku?",
          "Apa Itu Hipotenusa?",
          "Apa Itu Dua Sisi Siku-siku?",
          "Bagaimana Cara Mengidentifikasi Sisi yang Benar?"
        ],
        "paragraphs": [
          "Segitiga siku-siku memiliki satu sudut yang tepat 90 derajat, sama seperti sudut bujur sangkar atau persegi panjang. Dua sudut lainnya harus lancip, artinya masing-masing kurang dari 90 derajat. Karena jumlah sudut segitiga adalah 180 derajat, kedua sudut selain sudut siku-siku berjumlah 90 derajat. Ini berbeda dari segitiga lancip (semua sudut di bawah 90°) dan segitiga tumpul (satu sudut di atas 90°). Sudut siku-siku menciptakan hubungan tegak lurus yang menjadi dasar teorema Pythagoras.",
          "Hipotenusa terletak di seberang sudut siku-siku, membentang dari sudut 90 derajat. Hipotenusa selalu menjadi sisi terpanjang karena mencakup jarak terbesar antara dua titik sudut. Pada diagram yang diputar, sisi yang tidak menyentuh penanda sudut siku-siku adalah hipotenusa. Kalkulator ini menamainya c, mengikuti konvensi standar di mana c menyatakan hipotenusa dalam rumus [[a^2 + b^2 = c^2]].",
          "Sisi siku-siku adalah dua sisi yang membentuk sudut siku-siku, bertemu pada 90 derajat. Keduanya diberi nama a dan b di kalkulator ini. Menukar nama tidak mengubah hipotenusa, karena a² + b² sama dengan b² + a². Kalkulator memisahkannya agar mode sisi-hilang tahu sisi siku-siku mana yang harus dicari. Ketika Anda mengetahui kedua sisi siku-siku, urutan mana pun bisa dipakai untuk mencari hipotenusa.",
          "Temukan penanda sudut siku-siku (kotak kecil). Sisi di seberangnya adalah hipotenusa; dua sisi yang menyentuhnya adalah sisi siku-siku. Untuk diagram yang diputar, bayangkan memutar segitiga sampai sudut siku-siku berada di kiri bawah dengan satu sisi siku-siku mendatar dan yang lain tegak. Tanpa penanda sudut siku-siku, pastikan segitiga tersebut siku-siku sebelum menggunakan kalkulator ini."
        ],
        "figcaption": "Bagian-bagian segitiga siku-siku: sisi siku-siku a dan b membentuk sudut siku-siku di C, hipotenusa c berada di seberang, dengan sudut lancip A dan B.",
        "imgAlt": "Segitiga siku-siku berlabel yang menunjukkan sisi siku-siku a dan b, hipotenusa c, sudut siku-siku di C, dan sudut lancip A dan B"
      },
      "side-pythagoras": {
        "h2": "Bagaimana Teorema Pythagoras Menghitung Sisi Segitiga",
        "h3s": [
          "Memahami Mengapa Rumusnya Bekerja"
        ],
        "paragraphs": [
          "Teorema Pythagoras menyatakan bahwa [[a^2 + b^2 = c^2]], di mana a dan b adalah sisi siku-siku dan c adalah hipotenusa. Setiap variabel adalah panjang sisi. Mengkuadratkan berarti mengalikan bilangan dengan dirinya sendiri (6² = 36); akar kuadrat membalikkan proses ini (√100 = 10). Anda mengambil akar karena rumus menghubungkan panjang yang dikuadratkan, bukan panjang itu sendiri. Menjumlahkan panjang sisi siku-siku (6 + 8 = 14) itu salah; jumlahkan kuadratnya (36 + 64 = 100), lalu ambil akarnya. Teorema membutuhkan sudut 90 derajat; segitiga tidak siku-siku memerlukan Hukum Kosinus. Ketiga mode kalkulator menyusun ulang persamaan ini: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]].",
          "Gambarlah bujur sangkar pada setiap sisi: luasnya a², b², dan c². Teorema mengatakan dua luas yang lebih kecil berjumlah sama dengan yang terbesar. Untuk 3-4-5: bujur sangkar seluas 9 dan 16 satuan luas berjumlah 25, luas bujur sangkar hipotenusa. Pengkuadratan penting karena Anda membandingkan luas, bukan panjang."
        ],
        "figcaption": "Bukti visual: bujur sangkar seluas 9 dan 16 satuan luas pada sisi siku-siku digabung sama dengan bujur sangkar seluas 25 satuan luas pada hipotenusa.",
        "imgAlt": "Segitiga siku-siku 3-4-5 dengan bujur sangkar pada setiap sisi berlabel 9, 16, dan 25 satuan luas yang menunjukkan 9 tambah 16 sama dengan 25"
      },
      "side-hypotenuse": {
        "h2": "Cara Mencari Hipotenusa Menggunakan Dua Sisi Siku-siku",
        "h3s": [
          "Contoh 1: Mencari Hipotenusa Segitiga Siku-siku 6-8",
          "Contoh 2: Mencari Hipotenusa dengan Pengukuran Desimal",
          "Kapan Anda Sebaiknya Menggunakan Mode Kalkulator Ini?"
        ],
        "paragraphs": [
          "Menyelesaikan [[a^2 + b^2 = c^2]] untuk c menghasilkan [[c = \\sqrt{a^2 + b^2}]]. Prosesnya: kenali kedua sisi siku-siku, kuadratkan masing-masing, jumlahkan kuadratnya, ambil akarnya, tulis satuannya, dan pastikan hasilnya lebih besar dari kedua sisi siku-siku.",
          "Diketahui sisi siku-siku a = 6 cm dan b = 8 cm: kuadratkan masing-masing (36 dan 64), jumlahkan (100), ambil akarnya (10). Hipotenusanya 10 cm, lebih besar dari kedua sisi siku-siku seperti yang diharapkan.",
          "Diketahui a = 2.5 m, b = 6 m: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Bilangan desimal membutuhkan hitungan yang cermat; pertahankan ketelitian penuh hingga pembulatan akhir.",
          "Gunakan mode hipotenusa dengan dua sisi siku-siku yang diketahui: diagonal ruangan, penyangga miring, atau soal geometri yang memberikan sisi-sisi tegak lurus. Jika yang diketahui adalah hipotenusa plus satu sisi siku-siku, beralihlah ke mode sisi-hilang."
        ],
        "displayEquations": [
          "[[[c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}]]]",
          "[[[c = \\sqrt{2.5^2 + 6^2} = \\sqrt{6.25 + 36} = \\sqrt{42.25} = 6.5\\text{ m}]]]"
        ]
      },
      "side-leg": {
        "h2": "Cara Mencari Sisi Siku-siku Segitiga Siku-siku yang Hilang",
        "h3s": [
          "Mencari Sisi Siku-siku b Ketika Hipotenusa c dan Sisi Siku-siku a Diketahui",
          "Contoh 3: Mencari Sisi Siku-siku b dari Hipotenusa 13 cm",
          "Mencari Sisi Siku-siku a Ketika Hipotenusa c dan Sisi Siku-siku b Diketahui",
          "Contoh 4: Mencari Sisi Siku-siku yang Belum Diketahui"
        ],
        "paragraphs": [
          "Ketika Anda mengetahui hipotenusa dan satu sisi siku-siku, susun ulang teorema Pythagoras untuk mengisolasi sisi siku-siku yang belum diketahui. Mulai dari [[a^2 + b^2 = c^2]], kurangi kuadrat sisi siku-siku yang diketahui dari kedua ruas. Ini menghasilkan dua rumus, satu untuk masing-masing sisi siku-siku.",
          "Rumusnya adalah [[b = \\sqrt{c^2 - a^2}]]. Turunannya: mulai dengan [[a^2 + b^2 = c^2]], kurangi a² dari kedua ruas hingga menjadi [[b^2 = c^2 - a^2]], lalu ambil akar kuadratnya. Pengurangan mencerminkan bahwa kuadrat hipotenusa berisi kedua kuadrat sisi siku-siku, sehingga menghilangkan satu menyisakan yang lain.",
          "Diketahui c = 13 cm dan a = 5 cm, carilah sisi siku-siku b. Kuadratkan keduanya: 13² = 169 dan 5² = 25. Kurangi: 169 − 25 = 144. Ambil akarnya: √144 = 12. Sisi siku-siku b berukuran 12 cm. Verifikasi: 5² + 12² = 25 + 144 = 169 = 13². Tripel 5-12-13 mengonfirmasi hasilnya.",
          "Rumusnya adalah [[a = \\sqrt{c^2 - b^2}]]. Sisi-sisi siku-siku dapat dipertukarkan dalam hubungan Pythagoras; penamaan satu sebagai a dan lainnya sebagai b hanyalah konvensi. Kalkulator menyediakan kedua mode agar Anda bisa mencocokkan nama kolom dengan soal spesifik Anda tanpa menukar variabel secara mental.",
          "Diketahui c = 17 inci dan b = 15 inci, carilah sisi siku-siku a. Kuadratkan: 17² = 289 dan 15² = 225. Kurangi: 289 − 225 = 64. Ambil akarnya: √64 = 8. Sisi siku-siku a adalah 8 inci. Ini adalah tripel 8-15-17. Kedua mode sisi-hilang hanya berbeda pada sisi siku-siku mana yang diketahui; matematikanya identik."
        ],
        "tableHeaders": [
          "Diketahui",
          "Dicari",
          "Rumus",
          "Mode Kalkulator"
        ],
        "table": [
          [
            "c = 13, a = 5",
            "b",
            "b = √(c² − a²)",
            "Sisi Hilang dari c dan a"
          ],
          [
            "c = 17, b = 15",
            "a",
            "a = √(c² − b²)",
            "Sisi Hilang dari c dan b"
          ]
        ],
        "displayEquations": [
          "[[[b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}]]]",
          "[[[a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ inci}]]]"
        ],
        "figcaption": "Dua perhitungan sisi-hilang: mencari b dari segitiga 5-12-13 dan mencari a dari segitiga 8-15-17.",
        "imgAlt": "Diagram terpisah yang menunjukkan dua segitiga siku-siku yang menyelesaikan sisi siku-siku yang hilang menggunakan teorema Pythagoras"
      },
      "side-howto": {
        "h2": "Cara Menggunakan Kalkulator Sisi Segitiga Siku-siku",
        "steps": [
          "<strong>Kenali dua pengukuran yang Anda ketahui.</strong> Keduanya harus berupa panjang sisi, bukan sudut.",
          "<strong>Tentukan apakah nilai yang hilang adalah hipotenusa atau sisi siku-siku.</strong> Jika Anda mengetahui kedua sisi siku-siku, Anda membutuhkan hipotenusa. Jika Anda mengetahui hipotenusa dan satu sisi siku-siku, Anda membutuhkan sisi siku-siku yang lain.",
          "<strong>Pilih mode yang benar.</strong> Pilih \"Teorema Pythagoras\" untuk dua sisi siku-siku yang diketahui, \"Sisi Hilang dari c dan a\" ketika Anda mengetahui hipotenusa dan sisi siku-siku a, atau \"Sisi Hilang dari c dan b\" ketika Anda mengetahui hipotenusa dan sisi siku-siku b.",
          "<strong>Masukkan kedua pengukuran ke kolom yang sesuai.</strong> Periksa ulang bahwa setiap nilai masuk ke kolom yang benar; menukar hipotenusa dengan sisi siku-siku menimbulkan kesalahan.",
          "<strong>Pilih satuan pengukuran.</strong> Gunakan satuan yang sama untuk kedua masukan.",
          "<strong>Hitung.</strong> Hasilnya muncul beserta langkah penyelesaian yang menunjukkan substitusi dan hitungannya.",
          "<strong>Tinjau hasil dan langkahnya.</strong> Pastikan rumusnya sesuai dengan situasi Anda dan hitungannya tampak benar.",
          "<strong>Periksa apakah jawabannya masuk akal.</strong> Hipotenusa harus lebih panjang dari kedua sisi siku-siku. Sisi siku-siku yang hilang harus lebih pendek dari hipotenusa. Jika tidak memenuhi, periksa kembali masukan Anda."
        ],
        "note": "Kalkulator tidak menyimpan hasil atau membuat laporan yang bisa diunduh. Gunakan opsi reset untuk mengosongkan kolom sebelum perhitungan baru."
      },
      "side-formulas": {
        "h2": "Rumus Sisi Segitiga Siku-siku Sekilas",
        "tableHeaders": [
          "Pengukuran yang Diketahui",
          "Sisi yang Hilang",
          "Rumus",
          "Mode Kalkulator",
          "Contoh"
        ],
        "table": [
          [
            "Sisi siku-siku a dan b",
            "Hipotenusa c",
            "c = √(a² + b²)",
            "Teorema Pythagoras",
            "a=6, b=8 → c=10"
          ],
          [
            "Hipotenusa c, sisi siku-siku a",
            "Sisi siku-siku b",
            "b = √(c² − a²)",
            "Sisi Hilang dari c dan a",
            "c=13, a=5 → b=12"
          ],
          [
            "Hipotenusa c, sisi siku-siku b",
            "Sisi siku-siku a",
            "a = √(c² − b²)",
            "Sisi Hilang dari c dan b",
            "c=17, b=15 → a=8"
          ]
        ],
        "paragraph": "Anda tidak perlu menghafal tiga rumus terpisah. Ingat saja [[a^2 + b^2 = c^2]], lalu selesaikan untuk yang belum diketahui. Jika c belum diketahui, jumlahkan kuadrat sisi siku-siku lalu ambil akarnya. Jika sisi siku-siku belum diketahui, kurangi kuadrat sisi siku-siku yang diketahui dari c² lalu ambil akarnya. Nama mode kalkulator memberitahu Anda susunan mana yang dipakai."
      },
      "side-applications": {
        "h2": "Contoh Nyata Perhitungan Sisi Segitiga Siku-siku",
        "h3s": [
          "Contoh 5: Tangga Bersandar pada Dinding",
          "Contoh 6: Diagonal Ruang Persegi Panjang",
          "Contoh 7: Panjang Kasau Atap",
          "Contoh 8: Diagonal TV atau Monitor",
          "Contoh 9: Mengukur Bidang Miring",
          "Contoh 10: Jalan Setapak Taman Persegi Panjang",
          "Contoh 11: Penyangga dengan Diagonal yang Diketahui",
          "Contoh 12: Gambar Teknik dengan Nilai Desimal"
        ],
        "paragraphs": [
          "Sebuah tangga mencapai 2.4 m secara vertikal ke atas dinding, dengan alasnya 1.8 m dari dinding. Dinding dan tanah membentuk sudut siku-siku, sehingga terbentuk segitiga siku-siku di mana tangga adalah hipotenusanya. Diketahui: a = 1.8 m (alas), b = 2.4 m (tinggi). Dicari: c (panjang tangga). Rumus: [[c = \\sqrt{a^2 + b^2}]]. Substitusi: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. Tangga berukuran 3 m. Ini memberi tahu panjang tangga yang dibutuhkan untuk mencapai ketinggian tersebut pada jarak tersebut. Catatan: geometri ini tidak menilai keamanan tangga; ikuti panduan produsen dan peraturan keselamatan untuk penggunaan nyata.",
          "Sebuah ruangan berukuran 9 ft panjang dan 12 ft lebar. Diagonal antara sudut yang berlawanan membentuk hipotenusa segitiga siku-siku dengan dinding sebagai sisi siku-sikunya. Diketahui: a = 9 ft, b = 12 ft. Dicari: c. Rumus: c = √(9² + 12²) = √(81 + 144) = √225 = 15. Diagonalnya 15 ft. Ini membantu saat memeriksa apakah ruangan benar-benar siku-siku (kedua diagonal harus sama) atau menentukan jarak garis lurus terpanjang untuk penempatan furnitur.",
          "Penampang atap sederhana memiliki bentang horizontal 12 ft dan tinggi vertikal 5 ft. Kasau membentuk hipotenusa. Diketahui: bentang = 12 ft, tinggi = 5 ft. Dicari: panjang kasau. Rumus: c = √(12² + 5²) = √(144 + 25) = √169 = 13. Kasau berukuran 13 ft. Perhitungan dasar ini tidak mencakup overhang, ketebalan bubungan, dan cadangan sambungan yang dibutuhkan konstruksi nyata. Konsultasikan gambar bangunan untuk spesifikasi lengkap.",
          "Layar persegi panjang berukuran 16 inci lebar dan 9 inci tinggi. Diagonalnya adalah hipotenusa. Diketahui: lebar = 16 in, tinggi = 9 in. Dicari: diagonal. Rumus: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. Diagonalnya berukuran sekitar 18.36 inci. Ini memakai dimensi yang dinyatakan; ukuran layar komersial bisa berbeda tergantung metode pengukuran produsen.",
          "Bidang miring memiliki bentang horizontal 6 m dan tinggi 0.75 m. Permukaan miringnya adalah hipotenusa. Diketahui: bentang = 6 m, tinggi = 0.75 m. Dicari: panjang miring. Rumus: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. Panjang miringnya sekitar 6.05 m. Bentang horizontal (6 m) berbeda dari panjang miring (6.05 m); panjang miring selalu sedikit lebih panjang. Ini tidak memverifikasi kepatuhan aksesibilitas; periksa peraturan bangunan setempat untuk persyaratan bidang miring.",
          "Taman persegi panjang selebar 30 ft dan sepanjang 40 ft. Jalan setapak diagonal memotongnya. Diketahui: a = 30 ft, b = 40 ft. Dicari: panjang jalan setapak. Rumus: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. Jalan setapaknya 50 ft. Berjalan secara diagonal (50 ft) lebih pendek daripada menyusuri dua sisi (70 ft), itulah sebabnya jalan diagonal menghemat waktu.",
          "Penyangga berukuran 10 ft (hipotenusa) dan membentang 8 ft secara horizontal. Carilah jarak vertikalnya. Diketahui: c = 10 ft, a = 8 ft. Dicari: b. Rumus: b = √(c² − a²) = √(100 − 64) = √36 = 6. Jarak vertikalnya 6 ft. Pengurangan diperlukan karena kuadrat hipotenusa berisi kedua kuadrat sisi siku-siku; menghilangkan komponen horizontal yang diketahui menyisakan yang vertikal.",
          "Desain braket menentukan hipotenusa 250 mm dan satu sisi siku-siku 70 mm. Carilah sisi siku-siku lainnya. Diketahui: c = 250 mm, b = 70 mm. Dicari: a. Rumus: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. Sisi siku-sikunya berukuran 240 mm. Dengan masukan milimeter, hasilnya persis di sini, tetapi dalam praktik bulatkan sesuai ketelitian pengukuran Anda yang paling kasar. Jangan melaporkan angka desimal lebih banyak dari yang bisa diukur alat Anda."
        ],
        "figcaption": "Segitiga siku-siku sehari-hari: tangga (3 m), diagonal ruangan (15 ft), kasau atap (13 ft), dan jalan setapak taman (50 ft).",
        "imgAlt": "Empat panel yang menunjukkan tangga bersandar pada dinding, diagonal ruangan, kasau atap, dan jalan setapak taman dengan pengukuran segitiga siku-siku"
      },
      "side-triples": {
        "h2": "Tripel Pythagoras Umum dan Mengapa Penting",
        "paragraphs": [
          "Tripel Pythagoras terdiri dari tiga bilangan bulat yang memenuhi [[a^2 + b^2 = c^2]]. Tripel ini memberi pemeriksaan mental cepat; jika masukan Anda cocok dengan tripel, Anda tahu jawabannya tanpa menghitung. Tripel berskala juga berlaku: mengalikan 3-4-5 dengan 2 menghasilkan 6-8-10, yang tetap memenuhi persamaan (36 + 64 = 100). Tidak setiap segitiga siku-siku memiliki sisi bilangan bulat; kebanyakan menghasilkan desimal atau bilangan irasional.",
          "Verifikasi 5-12-13: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. Verifikasi 8-15-17: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. Ketika kalkulator Anda menghasilkan bilangan bulat, periksa apakah ia membentuk tripel dengan masukan Anda sebagai pemeriksaan kewarasan."
        ],
        "tableHeaders": [
          "Tripel",
          "Verifikasi"
        ],
        "table": [
          [
            "3-4-5",
            "9 + 16 = 25 ✓"
          ],
          [
            "5-12-13",
            "25 + 144 = 169 ✓"
          ],
          [
            "8-15-17",
            "64 + 225 = 289 ✓"
          ],
          [
            "7-24-25",
            "49 + 576 = 625 ✓"
          ],
          [
            "9-40-41",
            "81 + 1600 = 1681 ✓"
          ],
          [
            "6-8-10",
            "36 + 64 = 100 ✓ (3-4-5 yang diskalakan)"
          ]
        ]
      },
      "side-units": {
        "h2": "Satuan Ukuran, Jawaban Desimal, dan Pembulatan",
        "paragraphs": [
          "Gunakan satuan yang konsisten: milimeter, sentimeter, meter, inci, kaki, yard, atau kilometer. Satuan campuran menghasilkan jawaban salah; 3 kaki dan 6 inci harus menjadi 3.5 kaki atau 42 inci sebelum menghitung. Ubah dulu, lalu hitung. Pilih satuan yang sesuai di kalkulator untuk kedua masukan. Bulatkan hanya setelah perhitungan akhir, bukan pada langkah menengah, untuk menghindari kesalahan yang menumpuk. Jawaban pasti seperti 10 cm berbeda dari desimal yang dibulatkan seperti 6.50 m; yang terakhir menyiratkan ketelitian pengukuran. Hasil Anda tidak bisa lebih teliti dari masukan Anda yang paling kasar. Jika Anda mengukur hingga sentimeter terdekat, jangan melaporkan milimeter.",
          "Contoh dengan kaki dan inci: papan berukuran 2 ft 6 in kali 3 ft. Ubah ke inci: 30 in dan 36 in. Hitung: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in. Ubah kembali: 46.86 in = 3 ft 10.86 in, atau sekitar 3 ft 10.9 in.",
          "Catatan: mengkuadratkan panjang menghasilkan satuan luas (cm²), tetapi akar kuadrat akhir mengembalikan satuan panjang (cm). Kalkulator menanganinya secara otomatis."
        ]
      },
      "side-invalid": {
        "h2": "Mengapa Beberapa Pengukuran Segitiga Tidak Dapat Menghasilkan Jawaban yang Valid",
        "paragraphs": [
          "Segitiga siku-siku yang valid membutuhkan tiga panjang sisi positif di mana hipotenusa melebihi setiap sisi siku-siku. Untuk perhitungan sisi-hilang, nilai di bawah akar kuadrat (c² − sisi siku-siku²) harus positif.",
          "<strong>Tidak valid:</strong> c = 8, a = 10. Hipotenusa (8) lebih pendek dari sisi siku-siku (10). Ini melanggar aturan hipotenusa-terpanjang. Anda mungkin menukar namanya; 10 seharusnya menjadi hipotenusa.",
          "<strong>Tidak valid:</strong> c = 5, a = 5. Maka b = √(25 − 25) = √0 = 0. Sisi berpanjang nol meruntuhkan segitiga menjadi ruas garis, bukan segitiga yang valid.",
          "<strong>Tidak valid:</strong> a = −3, b = 4. Panjang negatif tidak bermakna geometris. Panjang sisi harus positif."
        ],
        "tableHeaders": [
          "Masalah",
          "Penyebab",
          "Solusi"
        ],
        "table": [
          [
            "Hipotenusa lebih pendek dari sisi siku-siku",
            "Nama tertukar",
            "Tetapkan sisi terpanjang sebagai c"
          ],
          [
            "Nol di bawah akar kuadrat",
            "c sama dengan sisi siku-siku yang diketahui",
            "Periksa pengukuran; segitiganya degenerat"
          ],
          [
            "Negatif di bawah akar kuadrat",
            "c lebih pendek dari sisi siku-siku yang diketahui",
            "Masukan tidak dapat membentuk segitiga siku-siku"
          ],
          [
            "Masukan negatif",
            "Salah ketik atau kesalahan tanda",
            "Gunakan hanya panjang positif"
          ],
          [
            "Masukan nol",
            "Pengukuran hilang",
            "Masukkan panjang sebenarnya"
          ],
          [
            "Satuan salah tercampur",
            "Kaki dengan inci",
            "Ubah ke satu satuan dulu"
          ],
          [
            "Segitiga tidak siku-siku",
            "Tidak ada sudut 90°",
            "Gunakan Hukum Kosinus sebagai gantinya"
          ]
        ]
      },
      "side-verify": {
        "h2": "Cara Memeriksa Apakah Sisi yang Anda Hitung Sudah Benar",
        "paragraphs": [
          "<strong>Metode 1: Substitusi kembali.</strong> Masukkan ketiga sisi ke [[a^2 + b^2 = c^2]]. Untuk segitiga 6-8-10: 36 + 64 = 100. Jika kedua ruas cocok, jawabannya benar.",
          "<strong>Metode 2: Periksa hipotenusa paling panjang.</strong> Jika Anda mencari c, pastikan ia melebihi a dan b. Jika Anda mencari sisi siku-siku, pastikan ia lebih pendek dari c.",
          "<strong>Metode 3: Bandingkan dengan tripel.</strong> Jika masukan Anda bilangan bulat, lihat apakah membentuk tripel yang dikenal. Masukan 9 dan 12 yang menghasilkan 15 cocok dengan tripel 3-4-5 berskala.",
          "<strong>Metode 4: Perkirakan kewajaran.</strong> Hipotenusa harus lebih panjang dari kedua sisi siku-siku tetapi lebih pendek dari jumlahnya. Untuk sisi siku-siku 6 dan 8, hipotenusa 10 memenuhi 8 < 10 < 14.",
          "<strong>Metode 5: Periksa satuan dan pembulatan.</strong> Pastikan satuannya cocok dengan masukan Anda dan angka desimalnya mencerminkan ketelitian pengukuran Anda.",
          "<strong>Contoh Verifikasi 1:</strong> Anda menghitung c = 13 dari a = 5, b = 12. Periksa: 5² + 12² = 25 + 144 = 169 = 13². Hipotenusa 13 melebihi kedua sisi siku-siku. Ini cocok dengan tripel 5-12-13. Valid.",
          "<strong>Contoh Verifikasi 2:</strong> Anda menghitung b = 7.5 dari c = 12.5, a = 10. Periksa: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². Sisi siku-siku 7.5 lebih pendek dari hipotenusa 12.5. Perkiraan: 10 < 12.5 < 20. Valid."
        ]
      },
      "side-mistakes": {
        "h2": "Kesalahan Umum Saat Menghitung Sisi Segitiga Siku-siku",
        "paragraphs": [
          "<strong>1. Menjumlahkan sisi siku-siku alih-alih kuadratnya.</strong> Menghitung 6 + 8 = 14 alih-alih √(36 + 64) = 10. Teorema menjumlahkan luas yang dikuadratkan, bukan panjang. Selalu kuadratkan dulu.",
          "<strong>2. Lupa akar kuadrat.</strong> Menjawab 100 alih-alih 10 untuk segitiga 6-8. Rumus memberi c²; yang Anda butuhkan adalah c. Ambil akar sebagai langkah terakhir.",
          "<strong>3. Mengurangi saat mencari hipotenusa.</strong> Menggunakan √(64 − 36) = √28 alih-alih √(64 + 36) = 10. Penjumlahan berlaku saat mencari hipotenusa dari dua sisi siku-siku.",
          "<strong>4. Menjumlah saat mencari sisi siku-siku yang hilang.</strong> Menggunakan √(169 + 25) alih-alih √(169 − 25) = 12. Pengurangan berlaku saat hipotenusa diketahui.",
          "<strong>5. Salah mengira sisi siku-siku sebagai hipotenusa.</strong> Menamai sisi terpanjang sebagai a atau b. Hipotenusa selalu di seberang sudut siku-siku dan selalu bernama c.",
          "<strong>6. Menerapkan teorema pada segitiga tidak siku-siku.</strong> Menggunakan a² + b² = c² tanpa sudut 90 derajat. Verifikasi sudut siku-siku dulu.",
          "<strong>7. Membulatkan perhitungan menengah.</strong> Membulatkan 6.25 menjadi 6.3 di tengah perhitungan, lalu mendapatkan jawaban akhir yang sedikit salah. Pertahankan ketelitian penuh sampai akhir.",
          "<strong>8. Mencampur satuan ukuran.</strong> Memasukkan 3 kaki dan 6 inci sebagai 3 dan 6. Ubah ke satu satuan sebelum menghitung.",
          "<strong>9. Memasukkan nilai ke kolom yang salah.</strong> Menaruh hipotenusa di kolom sisi siku-siku. Cocokkan setiap pengukuran dengan namanya yang benar.",
          "<strong>10. Salah menafsirkan nilai negatif di bawah akar.</strong> Melihat √(25 − 36) lalu memaksakan perhitungan. Radikan negatif berarti masukan tidak dapat membentuk segitiga siku-siku; periksa nama sisi Anda."
        ]
      },
      "side-beyond": {
        "h2": "Kapan Anda Membutuhkan Rumus Segitiga Siku-siku yang Berbeda?",
        "paragraphs": [
          "Teorema Pythagoras membutuhkan dua sisi yang diketahui. Informasi berbeda memerlukan alat berbeda.",
          "<strong>Satu sisi dan satu sudut lancip:</strong> Gunakan sinus, kosinus, atau tangen. Sinus menghubungkan sisi depan dengan hipotenusa, kosinus menghubungkan sisi samping dengan hipotenusa, dan tangen menghubungkan sisi depan dengan sisi samping. Sebagai contoh, dengan hipotenusa c dan sudut A, sisi siku-siku a = c × sin(A).",
          "<strong>Dua sudut, tanpa sisi:</strong> Tidak mungkin. Sudut menentukan bentuk tetapi bukan ukuran; segitiga 3-4-5 dan segitiga 6-8-10 berbagi sudut tetapi berbeda skala. Anda membutuhkan setidaknya satu panjang sisi.",
          "<strong>Segitiga tidak siku-siku:</strong> Gunakan Hukum Kosinus (c² = a² + b² − 2ab×cos(C)) atau Hukum Sinus. Teorema Pythagoras adalah kasus khusus Hukum Kosinus ketika C = 90°.",
          "<strong>Segitiga siku-siku istimewa:</strong> Segitiga 45-45-90 memiliki sisi siku-siku dengan perbandingan 1:1:√2, dan 30-60-90 memiliki sisi dengan perbandingan 1:√3:2. Ini memungkinkan perhitungan mental cepat. Jika Anda mengetahui satu sisi dan satu sudut lancip, gunakan Kalkulator Sisi Segitiga Siku-siku Menggunakan Sudut di situs ini.",
          "Jika Anda mengetahui satu sisi dan satu sudut lancip, gunakan Kalkulator Sisi Segitiga Siku-siku Menggunakan Sudut di situs ini."
        ],
        "linkAnchorText": "Kalkulator Sisi Segitiga Siku-siku Menggunakan Sudut"
      },
      "side-summary": {
        "h2": "Hitung Sisi Segitiga Siku-siku dengan Percaya Diri",
        "paragraphs": [
          "Kenali dulu dua sisi yang Anda ketahui. Jika keduanya sisi siku-siku, Anda membutuhkan hipotenusa; jika salah satunya hipotenusa, Anda membutuhkan sisi siku-siku yang hilang. Pilih rumus atau mode kalkulator yang sesuai. Masukkan kedua pengukuran dalam satuan yang sama. Hitung, lalu verifikasi: hipotenusa harus terpanjang, dan substitusi kembali ke a² + b² = c² harus seimbang. Periksa satuan dan pembulatan Anda. Dengan langkah-langkah ini, Anda dapat menyelesaikan soal sisi segitiga siku-siku apa pun dengan andal. Kembali ke kalkulator di bagian atas halaman ini untuk menghitung angka Anda."
        ]
      }
    },
    "faqs": [
      {
        "question": "Bagaimana cara menghitung sisi segitiga siku-siku yang hilang?",
        "answer": "Gunakan teorema Pythagoras: a² + b² = c². Jika Anda mengetahui kedua sisi siku-siku, hitung c = √(a² + b²). Jika Anda mengetahui hipotenusa dan satu sisi siku-siku, hitung sisi siku-siku yang hilang sebagai √(c² − sisi-siku-siku-diketahui²). Anda membutuhkan tepat dua panjang sisi; teorema tidak bekerja hanya dengan satu sisi atau dengan sudut saja."
      },
      {
        "question": "Bisakah Anda menemukan sisi yang hilang jika mengetahui dua sisi?",
        "answer": "Ya. Dua sisi sudah cukup. Jika kedua sisi yang diketahui adalah sisi siku-siku, gunakan rumus hipotenusa. Jika salah satu sisi yang diketahui adalah hipotenusa, gunakan rumus sisi-hilang. Kalkulator menentukan mode yang berlaku berdasarkan apakah hipotenusa termasuk di antara masukan Anda."
      },
      {
        "question": "Bagaimana cara mencari hipotenusa?",
        "answer": "Kuadratkan kedua sisi siku-siku, jumlahkan kuadratnya, lalu ambil akar kuadratnya. Untuk sisi siku-siku 6 dan 8: 6² + 8² = 36 + 64 = 100, √100 = 10. Hipotenusa selalu menjadi sisi terpanjang, jadi pastikan jawaban Anda melebihi kedua sisi siku-siku."
      },
      {
        "question": "Bagaimana cara mencari sisi siku-siku yang hilang?",
        "answer": "Kuadratkan hipotenusa dan sisi siku-siku yang diketahui, kurangi kuadrat sisi siku-siku dari kuadrat hipotenusa, lalu ambil akar kuadratnya. Untuk hipotenusa 13 dan sisi siku-siku 5: 169 − 25 = 144, √144 = 12. Hasilnya harus lebih pendek dari hipotenusa."
      },
      {
        "question": "Apa rumus teorema Pythagoras?",
        "answer": "Rumusnya adalah a² + b² = c², di mana a dan b adalah sisi siku-siku (sisi-sisi yang membentuk sudut siku-siku) dan c adalah hipotenusa (sisi di seberang sudut siku-siku). Hubungan ini berlaku untuk setiap segitiga siku-siku."
      },
      {
        "question": "Apakah hipotenusa selalu menjadi sisi terpanjang?",
        "answer": "Ya. Hipotenusa mencakup jarak terbesar antara titik sudut, di seberang sudut terbesar (90 derajat). Pada segitiga mana pun, sisi terpanjang berada di seberang sudut terbesar. Jika hipotenusa yang Anda hitung lebih pendek dari sisi siku-siku, periksa kembali masukan Anda."
      },
      {
        "question": "Bisakah teorema Pythagoras dipakai pada segitiga apa pun?",
        "answer": "Tidak, hanya pada segitiga siku-siku. Teorema bergantung pada sudut 90 derajat. Untuk segitiga lancip atau tumpul, gunakan Hukum Kosinus. Menerapkan Pythagoras pada segitiga tidak siku-siku menghasilkan jawaban yang salah."
      },
      {
        "question": "Bagaimana jika jawabannya desimal?",
        "answer": "Desimal itu normal; kebanyakan segitiga siku-siku tidak memiliki sisi bilangan bulat. Hitung dengan ketelitian penuh, lalu bulatkan jawaban akhir sesuai ketelitian masukan Anda. Contohnya, √42.25 = 6.5 persis, tetapi √50 ≈ 7.071 perlu dibulatkan."
      },
      {
        "question": "Bisakah segitiga siku-siku memiliki dua sisi siku-siku yang sama?",
        "answer": "Ya. Ini adalah segitiga siku-siku sama kaki 45-45-90, di mana sisi-sisi siku-sikunya sama dan hipotenusanya sama dengan sisi siku-siku × √2. Untuk sisi siku-siku 5, hipotenusanya adalah 5√2 ≈ 7.071."
      },
      {
        "question": "Bagaimana jika hipotenusa lebih kecil dari sisi siku-siku yang diketahui?",
        "answer": "Masukannya tidak valid. Hipotenusa harus menjadi sisi terpanjang. Anda mungkin menukar namanya; tetapkan pengukuran terpanjang sebagai hipotenusa (c) lalu hitung ulang."
      },
      {
        "question": "Bisakah saya menghitung sisi yang hilang menggunakan satu sudut dan satu sisi?",
        "answer": "Ya, tetapi tidak hanya dengan teorema Pythagoras. Gunakan perbandingan trigonometri: sinus, kosinus, atau tangen menghubungkan sisi dan sudut yang diketahui ke sisi yang belum diketahui. Situs ini menyediakan kalkulator khusus untuk soal sisi-dari-sudut."
      },
      {
        "question": "Bagaimana saya bisa memeriksa bahwa jawaban saya benar?",
        "answer": "Substitusikan ketiga sisi kembali ke a² + b² = c². Pastikan hipotenusa terpanjang. Periksa apakah bilangan-bilangannya membentuk tripel Pythagoras yang dikenal. Perkirakan bahwa hipotenusa berada di antara sisi siku-siku yang lebih panjang dan jumlah kedua sisi siku-siku."
      }
    ],
    "relatedHeading": "Kalkulator Segitiga Siku-siku Lain yang Mungkin Berguna",
    "relatedIntro": "Setelah menemukan sisi yang hilang, lanjutkan dengan kalkulator terkait ini untuk melengkapi analisis segitiga Anda.",
    "relatedItems": [
      "Kalkulator Segitiga Siku-siku",
      "Kalkulator Sudut Segitiga Siku-siku",
      "Kalkulator Sisi Segitiga Siku-siku Menggunakan Sudut",
      "Kalkulator Luas Segitiga Siku-siku",
      "Kalkulator Keliling dan Setengah Keliling Segitiga Siku-siku",
      "Kalkulator Segitiga Siku-siku Istimewa",
      "Kalkulator Tripel Pythagoras"
    ]
  },
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "side-intro": "كيفية إيجاد الضلع المفقود",
      "side-anatomy": "فهم الأضلاع الثلاثة",
      "side-pythagoras": "نظرية فيثاغورس",
      "side-hypotenuse": "إيجاد الوتر",
      "side-leg": "إيجاد الضلع المفقود",
      "side-howto": "استخدام الحاسبة",
      "side-formulas": "المعادلات باختصار",
      "side-applications": "أمثلة من الحياة اليومية",
      "side-triples": "الثلاثيات الفيثاغورسية",
      "side-units": "الوحدات والدقة",
      "side-invalid": "المدخلات غير الصالحة",
      "side-verify": "التحقق من إجابتك",
      "side-mistakes": "أخطاء شائعة",
      "side-beyond": "عندما لا تكفي نظرية فيثاغورس",
      "side-related": "حاسبات ذات صلة",
      "side-faq": "الأسئلة الشائعة"
    },
    "sections": {
      "side-intro": {
        "h2": "كيفية إيجاد الضلع المفقود في مثلث قائم الزاوية",
        "paragraphs": [
          "حاسبة أضلاع المثلث القائم تجد الطول المجهول في مثلث قائم الزاوية عندما تعرف الضلعين الآخرين. تشمل الاستخدامات الشائعة قياس أقطار الغرف، وفحص دعامات التثبيت، أو التحقق من إجابات الواجبات. تحتاج الحاسبة إلى طولين من الأضلاع فقط لتعمل. تطبق الحاسبة نظرية فيثاغورس التي تربط أضلاع كل مثلث قائم الزاوية الثلاثة. إيجاد الوتر يستخدم الجمع تحت الجذر التربيعي، بينما إيجاد الضلع المفقود يستخدم الطرح. تعمل هذه الطريقة مع المثلثات القائمة فقط، لأن العلاقة تعتمد على الزاوية القائمة (90 درجة). على سبيل المثال، مثلث قائم بضلعين متعامدين طولهما 6 سم و8 سم له وتر طوله 10 سم. وينطبق المبدأ نفسه على قياس المسافات الحقيقية، من أطوال السلالم إلى أقطار الشاشات."
        ]
      },
      "side-anatomy": {
        "h2": "فهم أضلاع المثلث القائم الزاوية الثلاثة",
        "h3s": [
          "ما هو المثلث القائم الزاوية؟",
          "ما هو الوتر؟",
          "ما هما الضلعان القائمان؟",
          "كيف تحدد الضلع الصحيح؟"
        ],
        "paragraphs": [
          "المثلث القائم الزاوية يحتوي على زاوية واحدة قياسها 90 درجة بالضبط، مثل زاوية المربع أو المستطيل. أما الزاويتان الأخريان فيجب أن تكونا حادتين، أي أن قياس كل منهما أقل من 90 درجة. وبما أن مجموع زوايا المثلث يساوي 180 درجة، فإن مجموع الزاويتين غير القائمتين يساوي 90 درجة. ويختلف هذا عن المثلثات الحادة (جميع زواياها أقل من 90 درجة) والمثلثات المنفرجة (زاوية واحدة أكبر من 90 درجة). الزاوية القائمة تخلق علاقة التعامد التي تقوم عليها نظرية فيثاغورس.",
          "الوتر هو الضلع المقابل للزاوية القائمة، ويمتد مقابل زاوية الـ 90 درجة. وهو أطول ضلع دائمًا لأنه يصل بين أبعد نقطتين من رؤوس المثلث. في الأشكال المدوَّرة، الضلع الذي لا يلامس علامة الزاوية القائمة هو الوتر. تسمّيه هذه الحاسبة c، وفقًا للاصطلاح المعياري حيث يشير c إلى الوتر في المعادلة [[a^2 + b^2 = c^2]].",
          "الضلعان القائمان هما الضلعان اللذان يشكلان الزاوية القائمة، ويلتقيان بزاوية 90 درجة. يسمّيان a و b في هذه الحاسبة. تبديل التسميات لا يغير الوتر، لأن a² + b² يساوي b² + a². تحتفظ الحاسبة بهما منفصلين حتى يعرف وضع الضلع المفقود أي ضلع يجب حلّه. عندما تعرف الضلعين، فإن أي ترتيب منهما يناسب إيجاد الوتر.",
          "حدّد علامة الزاوية القائمة (المربع الصغير). الضلع المقابل لها هو الوتر، والضلعان الملامسان لها هما الضلعان القائمان. في الأشكال المدوَّرة، تخيّل تدوير المثلث حتى تصبح الزاوية القائمة في أسفل اليسار مع ضلع أفقي وآخر عمودي. وبدون علامة الزاوية القائمة، تأكد من أن المثلث قائم الزاوية قبل استخدام هذه الحاسبة."
        ],
        "figcaption": "أجزاء المثلث القائم: الضلعان a و b يشكلان الزاوية القائمة عند C، والوتر c يقابلها، مع الزاويتين الحادتين A و B.",
        "imgAlt": "مثلث قائم الزاوية موسوم يُظهر الضلعين a و b والوتر c والزاوية القائمة عند C والزاويتين الحادتين A و B"
      },
      "side-pythagoras": {
        "h2": "كيف تحسب نظرية فيثاغورس أضلاع المثلث",
        "h3s": [
          "فهم سبب نجاح المعادلة"
        ],
        "paragraphs": [
          "تنص نظرية فيثاغورس على أن [[a^2 + b^2 = c^2]]، حيث a و b هما الضلعان القائمان و c هو الوتر. كل متغير يمثل طول ضلع. التربيع يعني ضرب العدد في نفسه (6² = 36)، والجذر التربيعي يعكس هذه العملية (√100 = 10). نأخذ الجذر لأن المعادلة تربط الأطوال المربعة، وليس الأطوال نفسها. جمع أطوال الضلعين (6 + 8 = 14) خطأ؛ اجمع مربعيهما (36 + 64 = 100) ثم خذ الجذر. تحتاج النظرية إلى الزاوية القائمة (90 درجة)؛ والمثلثات غير القائمة تتطلب قانون جيب التمام. جميع أوضاع الحاسبة الثلاثة تعيد ترتيب هذه المعادلة: [[c = \\sqrt{a^2 + b^2}]]، و[[b = \\sqrt{c^2 - a^2}]]، و[[a = \\sqrt{c^2 - b^2}]].",
          "ارسم مربعًا على كل ضلع: مساحاتها a² و b² و c². تنص النظرية على أن مجموع المساحتين الأصغر يساوي الأكبر. في مثلث 3-4-5: المربعان ذوا المساحتين 9 و16 وحدة مربعة يجمعان إلى 25، وهي مساحة مربع الوتر. التربيع مهم لأنك تقارن المساحات، لا الأطوال."
        ],
        "figcaption": "برهان بصري: مربعا الـ 9 والـ 16 وحدة مربعة على الضلعين يجتمعان ليعادلا مربع الـ 25 وحدة مربعة على الوتر.",
        "imgAlt": "مثلث قائم 3-4-5 مع مربعات مرسومة على كل ضلع موسومة 9 و16 و25 وحدة مربعة، توضح أن 9 زائد 16 يساوي 25"
      },
      "side-hypotenuse": {
        "h2": "كيفية إيجاد الوتر باستخدام الضلعين",
        "h3s": [
          "المثال 1: إيجاد وتر مثلث قائم 6-8",
          "المثال 2: إيجاد وتر بقياسات عشرية",
          "متى تستخدم وضع الحاسبة هذا؟"
        ],
        "paragraphs": [
          "حل [[a^2 + b^2 = c^2]] بالنسبة إلى c يعطي [[c = \\sqrt{a^2 + b^2}]]. الخطوات: حدّد الضلعين، ربّع كلًّا منهما، اجمع المربعين، خذ الجذر، اكتب الوحدة، وتأكد أن الناتج أكبر من الضلعين.",
          "معطى الضلعان a = 6 سم و b = 8 سم: ربّع كلًّا منهما (36 و64)، اجمع (100)، خذ الجذر (10). الوتر 10 سم، أكبر من الضلعين كما هو متوقع.",
          "معطى a = 2.5 م و b = 6 م: 2.5² + 6² = 6.25 + 36 = 42.25، √42.25 = 6.5 م. القياسات العشرية تحتاج حسابًا دقيقًا؛ احتفظ بالدقة الكاملة حتى التقريب النهائي.",
          "استخدم وضع الوتر مع ضلعين معلومين: أقطار الغرف، أو دعامات التثبيت، أو مسائل الهندسة التي تعطي ضلعين متعامدين. ومع الوتر زائد ضلع واحد، انتقل إلى وضع الضلع المفقود."
        ],
        "displayEquations": [
          "[[[c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}]]]",
          "[[[c = \\sqrt{2.5^2 + 6^2} = \\sqrt{6.25 + 36} = \\sqrt{42.25} = 6.5\\text{ m}]]]"
        ]
      },
      "side-leg": {
        "h2": "كيفية إيجاد الضلع المفقود في مثلث قائم الزاوية",
        "h3s": [
          "إيجاد الضلع b عند معرفة الوتر c والضلع a",
          "المثال 3: إيجاد الضلع b من وتر 13 سم",
          "إيجاد الضلع a عند معرفة الوتر c والضلع b",
          "المثال 4: إيجاد الضلع المجهول"
        ],
        "paragraphs": [
          "عندما تعرف الوتر وأحد الضلعين، أعد ترتيب نظرية فيثاغورس لعزل الضلع المجهول. ابدأ من [[a^2 + b^2 = c^2]]، ثم اطرح مربع الضلع المعروف من الطرفين. هذا يعطي معادلتين، واحدة لكل ضلع.",
          "المعادلة هي [[b = \\sqrt{c^2 - a^2}]]. الاشتقاق: ابدأ بـ [[a^2 + b^2 = c^2]]، واطرح a² من الطرفين لتحصل على [[b^2 = c^2 - a^2]]، ثم خذ الجذر التربيعي. الطرح يعكس أن مربع الوتر يحتوي مربعي الضلعين معًا، فإزالة أحدهما تُبقي الآخر.",
          "معطى c = 13 سم و a = 5 سم، أوجد الضلع b. ربّع كليهما: 13² = 169 و 5² = 25. اطرح: 169 − 25 = 144. خذ الجذر: √144 = 12. الضلع b طوله 12 سم. تحقق: 5² + 12² = 25 + 144 = 169 = 13². الثلاثية 5-12-13 تؤكد النتيجة.",
          "المعادلة هي [[a = \\sqrt{c^2 - b^2}]]. الضلعان قابلان للتبادل في علاقة فيثاغورس؛ وتسمية أحدهما a والآخر b مجرد اصطلاح. توفر الحاسبة الوضعين معًا لتتمكن من مطابقة حقول الإدخال مع مسألتك دون تبديل المتغيرات ذهنيًا.",
          "معطى c = 17 بوصة و b = 15 بوصة، أوجد الضلع a. التربيع: 17² = 289 و 15² = 225. الطرح: 289 − 225 = 64. الجذر: √64 = 8. الضلع a طوله 8 بوصات. هذه هي الثلاثية 8-15-17. وضعا الضلع المفقود يختلفان فقط في الضلع المعروف؛ والرياضيات متطابقة."
        ],
        "tableHeaders": [
          "المعلوم",
          "المطلوب",
          "المعادلة",
          "وضع الحاسبة"
        ],
        "table": [
          [
            "c = 13, a = 5",
            "b",
            "b = √(c² − a²)",
            "الضلع المفقود من c و a"
          ],
          [
            "c = 17, b = 15",
            "a",
            "a = √(c² − b²)",
            "الضلع المفقود من c و b"
          ]
        ],
        "displayEquations": [
          "[[[b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}]]]",
          "[[[a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ بوصة}]]]"
        ],
        "figcaption": "حسابان للضلع المفقود: إيجاد b من مثلث 5-12-13، وإيجاد a من مثلث 8-15-17.",
        "imgAlt": "مخطط منقسم يُظهر مثلثين قائمين لحل الضلعين المفقودين باستخدام نظرية فيثاغورس"
      },
      "side-howto": {
        "h2": "كيفية استخدام حاسبة أضلاع المثلث القائم",
        "steps": [
          "<strong>حدّد القياسين اللذين تعرفهما.</strong> يجب أن يكونا طولي ضلعين، لا زاويتين.",
          "<strong>حدّد ما إذا كانت القيمة المفقودة هي الوتر أم ضلعًا.</strong> إذا كنت تعرف الضلعين، فأنت تحتاج الوتر. وإذا كنت تعرف الوتر وأحد الضلعين، فأنت تحتاج الضلع الآخر.",
          "<strong>اختر الوضع الصحيح.</strong> اختر «نظرية فيثاغورس» لضلعين معلومين، أو «الضلع المفقود من c و a» عندما تعرف الوتر والضلع a، أو «الضلع المفقود من c و b» عندما تعرف الوتر والضلع b.",
          "<strong>أدخل القياسين في الحقلين المطابقين.</strong> تحقق من أن كل قيمة في الحقل الصحيح؛ فتبديل الوتر مع ضلع يسبب خطأ.",
          "<strong>اختر وحدة القياس.</strong> استخدم الوحدة نفسها لكلا المدخلين.",
          "<strong>احسب.</strong> يظهر الناتج مع خطوات الحل التي تُظهر التعويض والحساب.",
          "<strong>راجع الناتج والخطوات.</strong> تأكد أن المعادلة تناسب حالتك وأن الحساب يبدو صحيحًا.",
          "<strong>تأكد أن الإجابة معقولة.</strong> يجب أن يكون الوتر أكبر من الضلعين. ويجب أن يكون الضلع المفقود أقصر من الوتر. وإذا أخفقت هذه الشروط، أعد فحص مدخلاتك."
        ],
        "note": "لا تحفظ الحاسبة النتائج ولا تُنشئ تقارير قابلة للتنزيل. استخدم خيار التصفير لمسح الحقول لعملية حساب جديدة."
      },
      "side-formulas": {
        "h2": "معادلات أضلاع المثلث القائم باختصار",
        "tableHeaders": [
          "القياسات المعلومة",
          "الضلع المفقود",
          "المعادلة",
          "وضع الحاسبة",
          "مثال"
        ],
        "table": [
          [
            "الضلعان a و b",
            "الوتر c",
            "c = √(a² + b²)",
            "نظرية فيثاغورس",
            "a=6, b=8 → c=10"
          ],
          [
            "الوتر c والضلع a",
            "الضلع b",
            "b = √(c² − a²)",
            "الضلع المفقود من c و a",
            "c=13, a=5 → b=12"
          ],
          [
            "الوتر c والضلع b",
            "الضلع a",
            "a = √(c² − b²)",
            "الضلع المفقود من c و b",
            "c=17, b=15 → a=8"
          ]
        ],
        "paragraph": "لا تحتاج إلى حفظ ثلاث معادلات منفصلة. تذكّر فقط [[a^2 + b^2 = c^2]]، ثم حلّ من أجل المجهول. إذا كان c مجهولًا، اجمع مربعي الضلعين وخذ الجذر. وإذا كان الضلع مجهولًا، اطرح مربع الضلع المعروف من c² وخذ الجذر. أسماء أوضاع الحاسبة تخبرك بأي ترتيب تستخدم."
      },
      "side-applications": {
        "h2": "أمثلة من الحياة اليومية لحسابات أضلاع المثلث القائم",
        "h3s": [
          "المثال 5: سلم مستند إلى جدار",
          "المثال 6: قطر غرفة مستطيلة",
          "المثال 7: طول عارضة السقف",
          "المثال 8: قطر التلفاز أو الشاشة",
          "المثال 9: قياس منحدر",
          "المثال 10: ممر حديقة مستطيل",
          "المثال 11: دعامة دعم بقطر معروف",
          "المثال 12: رسم هندسي بقيم عشرية"
        ],
        "paragraphs": [
          "يصل سلم إلى ارتفاع 2.4 م عموديًا على جدار، وقاعدته على بعد 1.8 م من الجدار. يشكل الجدار والأرض زاوية قائمة، فينشأ مثلث قائم يكون فيه السلم هو الوتر. المعلوم: a = 1.8 م (القاعدة)، b = 2.4 م (الارتفاع). المطلوب: c (طول السلم). المعادلة: [[c = \\sqrt{a^2 + b^2}]]. بالتعويض: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. طول السلم 3 م. هذا يخبرك بطول السلم اللازم للوصول إلى هذا الارتفاع على هذه المسافة. ملاحظة: هذه الهندسة لا تقيّم سلامة السلم؛ اتبع إرشادات الشركة المصنعة وأنظمة السلامة عند الاستخدام الفعلي.",
          "غرفة طولها 9 أقدام وعرضها 12 قدمًا. القطر بين الزاويتين المتقابلتين يشكل وتر مثلث قائم ضلعاه الجدران. المعلوم: a = 9 قدم، b = 12 قدمًا. المطلوب: c. المعادلة: c = √(9² + 12²) = √(81 + 144) = √225 = 15. القطر 15 قدمًا. يساعد هذا في التحقق من أن الغرفة مربعة (يجب أن يتطابق القطران) أو تحديد أطول مسافة مستقيمة لوضع الأثاث.",
          "مقطع عرضي مبسط لسقف له امتداد أفقي 12 قدمًا وارتفاع عمودي 5 أقدام. العارضة تشكل الوتر. المعلوم: الامتداد = 12 قدمًا، الارتفاع = 5 أقدام. المطلوب: طول العارضة. المعادلة: c = √(12² + 5²) = √(144 + 25) = √169 = 13. العارضة طولها 13 قدمًا. هذا الحساب الأساسي يستبعد النتوءات وسمك القمة وبدلات الوصل التي يتطلبها البناء الحقيقي. راجع المخططات الإنشائية للمواصفات الكاملة.",
          "شاشة مستطيلة عرضها 16 بوصة وارتفاعها 9 بوصات. القطر هو الوتر. المعلوم: العرض = 16 بوصة، الارتفاع = 9 بوصات. المطلوب: القطر. المعادلة: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. القطر حوالي 18.36 بوصة. هذا يستخدم الأبعاد المذكورة؛ قد تختلف أحجام الشاشات التجارية حسب طرق قياس الشركة المصنعة.",
          "منحدر له امتداد أفقي 6 م وارتفاع 0.75 م. السطح المائل هو الوتر. المعلوم: الامتداد = 6 م، الارتفاع = 0.75 م. المطلوب: طول الميل. المعادلة: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. طول الميل حوالي 6.05 م. الامتداد الأفقي (6 م) يختلف عن طول الميل (6.05 م)؛ فالميل أطول قليلًا دائمًا. هذا لا يتحقق من توافق الوصول؛ راجع قوانين البناء المحلية لمتطلبات المنحدرات.",
          "حديقة مستطيلة عرضها 30 قدمًا وطولها 40 قدمًا. ممر قطري يعبرها. المعلوم: a = 30 قدمًا، b = 40 قدمًا. المطلوب: طول الممر. المعادلة: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. الممر 50 قدمًا. السير على القطر (50 قدمًا) أقصر من السير على ضلعين (70 قدمًا)، ولهذا توفر الممرات القطرية الوقت.",
          "دعامة دعم طولها 10 أقدام (الوتر) وتمتد أفقيًا 8 أقدام. أوجد المسافة العمودية. المعلوم: c = 10 أقدام، a = 8 أقدام. المطلوب: b. المعادلة: b = √(c² − a²) = √(100 − 64) = √36 = 6. المسافة العمودية 6 أقدام. الطرح ضروري لأن مربع الوتر يحتوي مربعي الضلعين معًا؛ فإزالة المكون الأفقي المعروف تُبقي المكون العمودي.",
          "تصميم دعامة يحدد وترًا بطول 250 مم وضلعًا بطول 70 مم. أوجد الضلع الآخر. المعلوم: c = 250 مم، b = 70 مم. المطلوب: a. المعادلة: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. الضلع طوله 240 مم. مع مدخلات بالمليمترات، النتيجة دقيقة هنا، لكن في الواقع قرّب إلى دقة أقل قياساتك دقة. لا تُبلغ عن منازل عشرية أكثر مما تستطيع أدواتك قياسه."
        ],
        "figcaption": "مثلثات قائمة يومية: السلم (3 م)، وقطر الغرفة (15 قدمًا)، وعارضة السقف (13 قدمًا)، وممر الحديقة (50 قدمًا).",
        "imgAlt": "أربع لوحات تُظهر سلمًا مستندًا إلى جدار، وقطر غرفة، وعارضة سقف، وممر حديقة مع قياسات المثلث القائم"
      },
      "side-triples": {
        "h2": "الثلاثيات الفيثاغورسية الشائعة وأهميتها",
        "paragraphs": [
          "الثلاثية الفيثاغورسية تتكون من ثلاثة أعداد صحيحة تحقق [[a^2 + b^2 = c^2]]. توفر هذه الثلاثيات فحصًا ذهنيًا سريعًا؛ فإذا تطابقت مدخلاتك مع ثلاثية، عرفت الإجابة دون حساب. الثلاثيات المضاعفة تعمل أيضًا: ضرب 3-4-5 في 2 يعطي 6-8-10، وما زالت تحقق المعادلة (36 + 64 = 100). ليس كل مثلث قائم له أضلاع بأعداد صحيحة؛ فمعظمها ينتج أعدادًا عشرية أو غير نسبية.",
          "تحقق من 5-12-13: 5² = 25، 12² = 144، 25 + 144 = 169، √169 = 13. تحقق من 8-15-17: 8² = 64، 15² = 225، 64 + 225 = 289، √289 = 17. عندما تُرجع الحاسبة عددًا صحيحًا، تحقق مما إذا كان يشكل ثلاثية مع مدخلاتك كفحص احترازي."
        ],
        "tableHeaders": [
          "الثلاثية",
          "التحقق"
        ],
        "table": [
          [
            "3-4-5",
            "9 + 16 = 25 ✓"
          ],
          [
            "5-12-13",
            "25 + 144 = 169 ✓"
          ],
          [
            "8-15-17",
            "64 + 225 = 289 ✓"
          ],
          [
            "7-24-25",
            "49 + 576 = 625 ✓"
          ],
          [
            "9-40-41",
            "81 + 1600 = 1681 ✓"
          ],
          [
            "6-8-10",
            "36 + 64 = 100 ✓ (نسخة مضاعفة من 3-4-5)"
          ]
        ]
      },
      "side-units": {
        "h2": "وحدات القياس والإجابات العشرية والتقريب",
        "paragraphs": [
          "استخدم وحدات متسقة: المليمترات أو السنتيمترات أو الأمتار أو البوصات أو الأقدام أو الياردات أو الكيلومترات. الوحدات المختلطة تعطي إجابات خاطئة؛ فـ 3 أقدام و6 بوصات يجب أن تصبح 3.5 قدم أو 42 بوصة قبل الحساب. حوّل أولًا، ثم احسب. اختر الوحدة المطابقة في الحاسبة لكلا المدخلين. قرّب فقط بعد الحساب النهائي، لا أثناء الخطوات الوسيطة، لتجنب تراكم الأخطاء. الإجابة الدقيقة مثل 10 سم تختلف عن العدد العشري المقرّب مثل 6.50 م؛ فالأخير يوحي بدقة قياس. لا يمكن أن تكون نتيجتك أدق من أقل مدخلاتك دقة. وإذا قست لأقرب سنتيمتر، فلا تُبلغ عن مليمترات.",
          "مثال بالأقدام والبوصات: لوح خشبي قياسه 2 قدم 6 بوصات في 3 أقدام. حوّل إلى البوصات: 30 بوصة و36 بوصة. احسب: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 بوصة. حوّل مجددًا: 46.86 بوصة = 3 أقدام 10.86 بوصة، أو حوالي 3 أقدام 10.9 بوصة.",
          "ملاحظة: تربيع الطول ينتج وحدات مربعة (سم²)، لكن الجذر التربيعي النهائي يعيد وحدات خطية (سم). تتعامل الحاسبة مع هذا تلقائيًا."
        ]
      },
      "side-invalid": {
        "h2": "لماذا لا يمكن لبعض قياسات المثلث أن تعطي إجابة صالحة",
        "paragraphs": [
          "المثلث القائم الصالح يحتاج ثلاثة أطوال موجبة بحيث يتجاوز الوتر كل ضلع. وفي حسابات الضلع المفقود، يجب أن تكون القيمة تحت الجذر التربيعي (c² − الضلع²) موجبة.",
          "<strong>غير صالح:</strong> c = 8، a = 10. الوتر (8) أقصر من الضلع (10). هذا يخالف قاعدة «الوتر هو الأطول». على الأرجح بدّلت التسميات؛ فيجب أن يكون الـ 10 هو الوتر.",
          "<strong>غير صالح:</strong> c = 5، a = 5. إذن b = √(25 − 25) = √0 = 0. ضلع بطول صفر ينهار المثلث إلى قطعة مستقيمة، وليس مثلثًا صالحًا.",
          "<strong>غير صالح:</strong> a = −3، b = 4. الأطوال السالبة ليس لها معنى هندسي. يجب أن تكون أطوال الأضلاع موجبة."
        ],
        "tableHeaders": [
          "المشكلة",
          "السبب",
          "الحل"
        ],
        "table": [
          [
            "الوتر أقصر من الضلع",
            "تبديل التسميات",
            "اجعل أطول ضلع هو c"
          ],
          [
            "صفر تحت الجذر التربيعي",
            "c يساوي الضلع المعروف",
            "تحقق من القياسات؛ المثلث منحل"
          ],
          [
            "سالب تحت الجذر التربيعي",
            "c أقصر من الضلع المعروف",
            "المدخلات لا يمكن أن تشكل مثلثًا قائمًا"
          ],
          [
            "مدخل سالب",
            "خطأ إملائي أو خطأ في الإشارة",
            "استخدم أطوالًا موجبة فقط"
          ],
          [
            "مدخل صفري",
            "قياس مفقود",
            "أدخل الطول الفعلي"
          ],
          [
            "وحدات خاطئة مختلطة",
            "أقدام مع بوصات",
            "حوّل إلى وحدة واحدة أولًا"
          ],
          [
            "مثلث غير قائم",
            "لا توجد زاوية 90 درجة",
            "استخدم قانون جيب التمام بدلًا من ذلك"
          ]
        ]
      },
      "side-verify": {
        "h2": "كيف تتحقق من صحة الضلع المحسوب",
        "paragraphs": [
          "<strong>الطريقة 1: عوّض مجددًا.</strong> ضع الأضلاع الثلاثة في [[a^2 + b^2 = c^2]]. في مثلث 6-8-10: 36 + 64 = 100. إذا تطابق الطرفان، فالإجابة صحيحة.",
          "<strong>الطريقة 2: تأكد أن الوتر هو الأطول.</strong> إذا حللت من أجل c، تأكد أنه يتجاوز a و b. وإذا حللت من أجل ضلع، تأكد أنه أقصر من c.",
          "<strong>الطريقة 3: قارن بالثلاثيات.</strong> إذا كانت مدخلاتك أعدادًا صحيحة، تحقق مما إذا كانت تشكل ثلاثية معروفة. المدخلات 9 و12 تعطي 15، وهذا يطابق الثلاثية 3-4-5 المضاعفة.",
          "<strong>الطريقة 4: قدّر المعقولية.</strong> يجب أن يكون الوتر أطول من أي ضلع لكن أقصر من مجموعهما. في الضلعين 6 و8، الوتر 10 يحقق 8 < 10 < 14.",
          "<strong>الطريقة 5: تحقق من الوحدات والتقريب.</strong> تأكد أن الوحدة تطابق مدخلاتك وأن المنازل العشرية تعكس دقة قياسك.",
          "<strong>مثال التحقق 1:</strong> حسبت c = 13 من a = 5 و b = 12. تحقق: 5² + 12² = 25 + 144 = 169 = 13². الوتر 13 يتجاوز الضلعين. هذا يطابق الثلاثية 5-12-13. صالح.",
          "<strong>مثال التحقق 2:</strong> حسبت b = 7.5 من c = 12.5 و a = 10. تحقق: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². الضلع 7.5 أقصر من الوتر 12.5. تقدير: 10 < 12.5 < 20. صالح."
        ]
      },
      "side-mistakes": {
        "h2": "أخطاء شائعة عند حساب أضلاع المثلث القائم",
        "paragraphs": [
          "<strong>1. جمع الضلعين بدلًا من مربعيهما.</strong> حساب 6 + 8 = 14 بدلًا من √(36 + 64) = 10. النظرية تجمع المساحات المربعة، لا الأطوال. ربّع أولًا دائمًا.",
          "<strong>2. نسيان الجذر التربيعي.</strong> الإجابة بـ 100 بدلًا من 10 في مثلث 6-8. المعادلة تعطي c²؛ وأنت تحتاج c. خذ الجذر كخطوة أخيرة.",
          "<strong>3. الطرح عند إيجاد الوتر.</strong> استخدام √(64 − 36) = √28 بدلًا من √(64 + 36) = 10. الجمع ينطبق عند إيجاد الوتر من ضلعين.",
          "<strong>4. الجمع عند إيجاد ضلع مفقود.</strong> استخدام √(169 + 25) بدلًا من √(169 − 25) = 12. الطرح ينطبق عندما يكون الوتر معلومًا.",
          "<strong>5. الخلط بين الضلع والوتر.</strong> تسمية أطول ضلع a أو b. الوتر دائمًا مقابل الزاوية القائمة ويُسمى دائمًا c.",
          "<strong>6. تطبيق النظرية على مثلث غير قائم.</strong> استخدام a² + b² = c² دون زاوية 90 درجة. تحقق من الزاوية القائمة أولًا.",
          "<strong>7. تقريب الحسابات الوسيطة.</strong> تقريب 6.25 إلى 6.3 في منتصف الحساب، ثم الحصول على إجابة نهائية خاطئة قليلًا. احتفظ بالدقة الكاملة حتى النهاية.",
          "<strong>8. خلط وحدات القياس.</strong> إدخال 3 أقدام و6 بوصات كـ 3 و6. حوّل إلى وحدة واحدة قبل الحساب.",
          "<strong>9. إدخال القيم في حقول خاطئة.</strong> وضع الوتر في حقل ضلع. طابق كل قياس مع تسميته الصحيحة.",
          "<strong>10. سوء تفسير السالب تحت الجذر.</strong> رؤية √(25 − 36) والإصرار على الحساب. الجذر السالب يعني أن المدخلات لا يمكن أن تشكل مثلثًا قائمًا؛ تحقق من تسمياتك."
        ]
      },
      "side-beyond": {
        "h2": "متى تحتاج معادلة مثلث قائم مختلفة؟",
        "paragraphs": [
          "تحتاج نظرية فيثاغورس إلى ضلعين معلومين. والمعلومات المختلفة تتطلب أدوات مختلفة.",
          "<strong>ضلع واحد وزاوية حادة واحدة:</strong> استخدم الجيب أو جيب التمام أو الظل. الجيب يربط المقابل بالوتر، وجيب التمام يربط المجاور بالوتر، والظل يربط المقابل بالمجاور. على سبيل المثال، مع الوتر c والزاوية A، الضلع a = c × sin(A).",
          "<strong>زاويتان دون أضلاع:</strong> مستحيل. الزوايا تحدد الشكل لا الحجم؛ فمثلث 3-4-5 ومثلث 6-8-10 يشتركان في الزوايا لكن يختلفان في المقياس. تحتاج طول ضلع واحد على الأقل.",
          "<strong>مثلث غير قائم:</strong> استخدم قانون جيب التمام (c² = a² + b² − 2ab×cos(C)) أو قانون الجيب. نظرية فيثاغورس حالة خاصة من قانون جيب التمام عندما تكون C = 90 درجة.",
          "<strong>مثلثات قائمة خاصة:</strong> مثلث 45-45-90 له أضلاع بنسبة 1:1:√2، ومثلث 30-60-90 له أضلاع بنسبة 1:√3:2. تتيح هذه حسابات ذهنية سريعة.",
          "إذا كنت تعرف ضلعًا واحدًا وزاوية حادة واحدة، فاستخدم حاسبة ضلع المثلث القائم باستخدام الزاوية على هذا الموقع."
        ],
        "linkAnchorText": "حاسبة ضلع المثلث القائم باستخدام الزاوية"
      },
      "side-summary": {
        "h2": "احسب أضلاع المثلث القائم بثقة",
        "paragraphs": [
          "حدّد ضلعيك المعروفين أولًا. إذا كانا ضلعين، فأنت تحتاج الوتر؛ وإذا كان أحدهما الوتر، فأنت تحتاج الضلع المفقود. اختر المعادلة أو وضع الحاسبة المطابق. أدخل القياسين بالوحدة نفسها. احسب، ثم تحقق: يجب أن يكون الوتر هو الأطول، والتعويض مجددًا في a² + b² = c² يجب أن يتساوى. تحقق من وحداتك وتقريبك. بهذه الخطوات يمكنك حل أي مسألة ضلع مثلث قائم بموثوقية. عد إلى الحاسبة في أعلى هذه الصفحة لتشغيل أرقامك."
        ]
      }
    },
    "faqs": [
      {
        "question": "كيف تحسب الضلع المفقود في مثلث قائم الزاوية؟",
        "answer": "استخدم نظرية فيثاغورس: a² + b² = c². إذا كنت تعرف الضلعين، احسب c = √(a² + b²). وإذا كنت تعرف الوتر وأحد الضلعين، احسب الضلع المفقود بـ √(c² − الضلع المعروف²). تحتاج طولي ضلعين بالضبط؛ ولا تعمل النظرية بضلع واحد فقط أو بالزوايا وحدها."
      },
      {
        "question": "هل يمكن إيجاد ضلع مفقود إذا عرفت ضلعين؟",
        "answer": "نعم. الضلعان كافيان. إذا كان الضلعان المعلومان هما الضلعان القائمان، استخدم معادلة الوتر. وإذا كان أحد الضلعين المعلومين هو الوتر، استخدم معادلة الضلع المفقود. تحدد الحاسبة الوضع المناسب بناءً على ما إذا كان الوتر من مدخلاتك."
      },
      {
        "question": "كيف تجد الوتر؟",
        "answer": "ربّع الضلعين، اجمع المربعين، وخذ الجذر التربيعي. في الضلعين 6 و8: 6² + 8² = 36 + 64 = 100، √100 = 10. الوتر هو أطول ضلع دائمًا، فتحقق أن إجابتك تتجاوز الضلعين."
      },
      {
        "question": "كيف تجد ضلعًا مفقودًا؟",
        "answer": "ربّع الوتر والضلع المعروف، واطرح مربع الضلع من مربع الوتر، وخذ الجذر التربيعي. في الوتر 13 والضلع 5: 169 − 25 = 144، √144 = 12. يجب أن تكون النتيجة أقصر من الوتر."
      },
      {
        "question": "ما هي معادلة نظرية فيثاغورس؟",
        "answer": "المعادلة هي a² + b² = c²، حيث a و b هما الضلعان القائمان (الضلعان اللذان يشكلان الزاوية القائمة) و c هو الوتر (الضلع المقابل للزاوية القائمة). تنطبق هذه العلاقة على كل مثلث قائم الزاوية."
      },
      {
        "question": "هل الوتر هو أطول ضلع دائمًا؟",
        "answer": "نعم. يمتد الوتر على أكبر مسافة بين الرؤوس، مقابل أكبر زاوية (90 درجة). في أي مثلث، أطول ضلع يقابل أكبر زاوية. وإذا كان الوتر المحسوب أقصر من ضلع، أعد فحص مدخلاتك."
      },
      {
        "question": "هل يمكن استخدام نظرية فيثاغورس في أي مثلث؟",
        "answer": "لا، فقط في المثلثات القائمة. تعتمد النظرية على الزاوية القائمة (90 درجة). وفي المثلثات الحادة أو المنفرجة استخدم قانون جيب التمام. تطبيق فيثاغورس على مثلث غير قائم يعطي نتائج خاطئة."
      },
      {
        "question": "ماذا لو كانت الإجابة عددًا عشريًا؟",
        "answer": "الأعداد العشرية طبيعية؛ فمعظم المثلثات القائمة ليس لها أضلاع بأعداد صحيحة. احسب بالدقة الكاملة، ثم قرّب الإجابة النهائية لتطابق دقة مدخلاتك. على سبيل المثال، √42.25 = 6.5 بالضبط، لكن √50 ≈ 7.071 يحتاج تقريبًا."
      },
      {
        "question": "هل يمكن أن يكون للمثلث القائم ضلعان متساويان؟",
        "answer": "نعم. هذا هو مثلث 45-45-90 القائم المتساوي الساقين، حيث يتساوى الضلعان ويكون الوتر = الضلع × √2. وفي ضلعين بطول 5، الوتر = 5√2 ≈ 7.071."
      },
      {
        "question": "ماذا لو كان الوتر أصغر من ضلع معروف؟",
        "answer": "المدخلات غير صالحة. يجب أن يكون الوتر هو أطول ضلع. على الأرجح بدّلت التسميات؛ اجعل أطول قياس هو الوتر (c) وأعد الحساب."
      },
      {
        "question": "هل يمكن حساب ضلع مفقود باستخدام زاوية واحدة وضلع واحد؟",
        "answer": "نعم، لكن ليس بنظرية فيثاغورس وحدها. استخدم النسب المثلثية: الجيب وجيب التمام والظل تربط الضلع المعروف والزاوية بالضلع المجهول. يوفر هذا الموقع حاسبة مخصصة لمسائل الضلع من الزاوية."
      },
      {
        "question": "كيف أتحقق من صحة إجابتي؟",
        "answer": "عوّض بالأضلاع الثلاثة مجددًا في a² + b² = c². تأكد أن الوتر هو الأطول. تحقق مما إذا كانت الأعداد تشكل ثلاثية فيثاغورسية معروفة. قدّر أن الوتر يقع بين الضلع الأطول ومجموع الضلعين."
      }
    ],
    "relatedHeading": "حاسبات المثلث القائم الأخرى التي قد تجدها مفيدة",
    "relatedIntro": "بعد إيجاد الضلع المفقود، تابع مع هذه الحاسبات ذات الصلة لإكمال تحليل مثلثك.",
    "relatedItems": [
      "حاسبة المثلث القائم",
      "حاسبة زاوية المثلث القائم",
      "حاسبة ضلع المثلث القائم باستخدام الزاوية",
      "حاسبة مساحة المثلث القائم",
      "حاسبة محيط المثلث القائم ونصف المحيط",
      "حاسبة المثلث القائم الخاص",
      "حاسبة الثلاثيات الفيثاغورسية"
    ]
  },
  "bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
      "side-intro": "Как да намерите липсваща страна",
      "side-anatomy": "Разбиране на трите страни",
      "side-pythagoras": "Питагоровата теорема",
      "side-hypotenuse": "Намиране на хипотенузата",
      "side-leg": "Намиране на липсващ катет",
      "side-howto": "Използване на калкулатора",
      "side-formulas": "Формули с един поглед",
      "side-applications": "Примери от реалния живот",
      "side-triples": "Питагорови тройки",
      "side-units": "Мерни единици и точност",
      "side-invalid": "Невалидни входни данни",
      "side-verify": "Проверка на отговора",
      "side-mistakes": "Чести грешки",
      "side-beyond": "Когато Питагор не стига",
      "side-related": "Свързани калкулатори",
      "side-faq": "Често задавани въпроси"
    },
    "sections": {
      "side-intro": {
        "h2": "Как да намерите липсващата страна на правоъгълен триъгълник",
        "paragraphs": [
          "Калкулаторът за страни на правоъгълен триъгълник намира непознатата дължина в правоъгълен триъгълник, когато знаете другите две страни. Чести приложения включват измерване на диагонали на стаи, проверка на носещи греди или потвърждаване на отговори по домашни. Калкулаторът се нуждае от точно две дължини на страни, за да работи. Той прилага Питагоровата теорема, която свързва трите страни на всеки правоъгълен триъгълник. Намирането на хипотенузата използва събиране под корен квадратен, а намирането на липсващ катет използва изваждане. Методът работи само за правоъгълни триъгълници, тъй като връзката зависи от ъгъла от 90 градуса. Например правоъгълен триъгълник с перпендикулярни страни от 6 cm и 8 cm има хипотенуза от 10 cm. Същият принцип измерва реални разстояния, от дължини на стълби до диагонали на екрани."
        ]
      },
      "side-anatomy": {
        "h2": "Разбиране на трите страни на правоъгълния триъгълник",
        "h3s": [
          "Какво е правоъгълен триъгълник?",
          "Какво е хипотенуза?",
          "Кои са двата катета?",
          "Как да определите коя страна е коя?"
        ],
        "paragraphs": [
          "Правоъгълният триъгълник съдържа един ъгъл с точно 90 градуса, същия като ъгъла на квадрат или правоъгълник. Другите два ъгъла трябва да са остри, тоест всеки е по-малък от 90 градуса. Тъй като ъглите на триъгълника се събират до 180 градуса, двата не-прави ъгъла общо правят 90 градуса. Това се различава от остроъгълните триъгълници (всички ъгли под 90°) и тъпоъгълните триъгълници (един ъгъл над 90°). Правият ъгъл създава перпендикулярната връзка зад Питагоровата теорема.",
          "Хипотенузата лежи срещу правия ъгъл, простирайки се през ъгъла от 90 градуса. Тя винаги е най-дългата страна, защото обхваща най-голямото разстояние между кои да е два върха. В завъртяни диаграми страната, която не докосва маркировката за прав ъгъл, е хипотенузата. Този калкулатор я означава с c, следвайки стандартната конвенция, при която c обозначава хипотенузата във формулата [[a^2 + b^2 = c^2]].",
          "Катетите са двете страни, които образуват правия ъгъл, срещайки се на 90 градуса. Те са означени с a и b в този калкулатор. Размяната на означенията не променя хипотенузата, тъй като a² + b² е равно на b² + a². Калкулаторът ги държи отделно, за да знаят режимите за липсващ катет кой катет да намерят. Когато знаете и двата катета, всеки ред работи за намиране на хипотенузата.",
          "Намерете маркировката за прав ъгъл (малкото квадратче). Срещуположната страна е хипотенузата; двете допиращи се страни са катетите. При завъртяни диаграми си представете, че завъртате триъгълника, докато правият ъгъл застане долу вляво, с единия катет хоризонтален, а другия вертикален. Без маркировка за прав ъгъл потвърдете, че триъгълникът е правоъгълен, преди да използвате този калкулатор."
        ],
        "figcaption": "Части на правоъгълния триъгълник: катетите a и b образуват правия ъгъл при C, хипотенузата c лежи срещу него, с острите ъгли A и B.",
        "imgAlt": "Означен правоъгълен триъгълник, показващ катети a и b, хипотенуза c, прав ъгъл при C и остри ъгли A и B"
      },
      "side-pythagoras": {
        "h2": "Как Питагоровата теорема изчислява страните на триъгълника",
        "h3s": [
          "Разбиране защо формулата работи"
        ],
        "paragraphs": [
          "Питагоровата теорема гласи, че [[a^2 + b^2 = c^2]], където a и b са катетите, а c е хипотенузата. Всяка променлива е дължина на страна. Вдигането на квадрат умножава число по самото него (6² = 36); коренът квадратен обръща това (√100 = 10). Извличате корена, защото формулата свързва вдигнатите на квадрат дължини, а не самите дължини. Събирането на дължините на катетите (6 + 8 = 14) е грешно; съберете техните квадрати (36 + 64 = 100), после извлечете корена. Теоремата се нуждае от ъгъла от 90 градуса; не-правоъгълните триъгълници изискват косинусовата теорема. И трите режима на калкулатора преформулират това уравнение: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]].",
          "Начертайте квадрат върху всяка страна: лица a², b² и c². Теоремата казва, че двете по-малки лица се събират до най-голямото. За 3-4-5: квадрати от 9 и 16 квадратни единици се събират до 25, лицето на квадрата върху хипотенузата. Вдигането на квадрат е важно, защото сравнявате лица, а не дължини."
        ],
        "figcaption": "Визуално доказателство: квадратите от 9 и 16 квадратни единици върху катетите се събират, за да дадат квадрата от 25 квадратни единици върху хипотенузата.",
        "imgAlt": "Правоъгълен триъгълник 3-4-5 с квадрати върху всяка страна, означени с 9, 16 и 25 квадратни единици, показващи, че 9 плюс 16 е равно на 25"
      },
      "side-hypotenuse": {
        "h2": "Как да намерите хипотенузата чрез двата катета",
        "h3s": [
          "Пример 1: Намиране на хипотенузата на триъгълник 6-8",
          "Пример 2: Намиране на хипотенуза с десетични измервания",
          "Кога да използвате този режим на калкулатора?"
        ],
        "paragraphs": [
          "Решаването на [[a^2 + b^2 = c^2]] спрямо c дава [[c = \\sqrt{a^2 + b^2}]]. Процесът: определете двата катета, вдигнете всеки на квадрат, съберете квадратите, извлечете корена, запишете мерната единица и потвърдете, че резултатът е по-голям от двата катета.",
          "Дадено: катети a = 6 cm и b = 8 cm: вдигнете всеки на квадрат (36 и 64), съберете (100), извлечете корена (10). Хипотенузата е 10 cm, по-голяма от двата катета, както се очаква.",
          "Дадено: a = 2.5 m, b = 6 m: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Десетичните числа изискват внимателна аритметика; запазете пълната точност до крайното закръгляне.",
          "Използвайте режима за хипотенуза с два известни катета: диагонали на стаи, носещи подпори или геометрични задачи, даващи перпендикулярни страни. При хипотенуза плюс един катет превключете на режима за липсващ катет."
        ],
        "displayEquations": [
          "[[[c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}]]]",
          "[[[c = \\sqrt{2.5^2 + 6^2} = \\sqrt{6.25 + 36} = \\sqrt{42.25} = 6.5\\text{ m}]]]"
        ]
      },
      "side-leg": {
        "h2": "Как да намерите липсващ катет на правоъгълен триъгълник",
        "h3s": [
          "Намиране на катет b, когато са известни хипотенузата c и катетът a",
          "Пример 3: Намерете катет b от хипотенуза 13 cm",
          "Намиране на катет a, когато са известни хипотенузата c и катетът b",
          "Пример 4: Намиране на непознатия катет"
        ],
        "paragraphs": [
          "Когато знаете хипотенузата и единия катет, преформулирайте Питагоровата теорема, за да отделите непознатия катет. Започвайки от [[a^2 + b^2 = c^2]], извадете квадрата на известния катет от двете страни. Това дава две формули, по една за всеки катет.",
          "Формулата е [[b = \\sqrt{c^2 - a^2}]]. Извеждане: започнете с [[a^2 + b^2 = c^2]], извадете a² от двете страни, за да получите [[b^2 = c^2 - a^2]], после извлечете корен квадратен. Изваждането отразява, че квадратът на хипотенузата съдържа квадратите и на двата катета, така че премахването на единия оставя другия.",
          "Дадено: c = 13 cm и a = 5 cm, намерете катет b. Вдигнете на квадрат и двете: 13² = 169 и 5² = 25. Извадете: 169 − 25 = 144. Извлечете корена: √144 = 12. Катет b е 12 cm. Проверка: 5² + 12² = 25 + 144 = 169 = 13². Тройката 5-12-13 потвърждава резултата.",
          "Формулата е [[a = \\sqrt{c^2 - b^2}]]. Катетите са взаимозаменяеми в питагоровата връзка; означаването на единия като a, а другия като b е конвенция. Калкулаторът предлага и двата режима, за да можете да съпоставите етикетите на полетата с вашата конкретна задача, без мислено да разменяте променливите.",
          "Дадено: c = 17 инча и b = 15 инча, намерете катет a. Вдигнете на квадрат: 17² = 289 и 15² = 225. Извадете: 289 − 225 = 64. Извлечете корена: √64 = 8. Катет a е 8 инча. Това е тройката 8-15-17. Двата режима за липсващ катет се различават само по това кой катет е известен; математиката е идентична."
        ],
        "tableHeaders": [
          "Известни",
          "Търсим",
          "Формула",
          "Режим на калкулатора"
        ],
        "table": [
          [
            "c = 13, a = 5",
            "b",
            "b = √(c² − a²)",
            "Липсващ катет от c и a"
          ],
          [
            "c = 17, b = 15",
            "a",
            "a = √(c² − b²)",
            "Липсващ катет от c и b"
          ]
        ],
        "displayEquations": [
          "[[[b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}]]]",
          "[[[a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ инча}]]]"
        ],
        "figcaption": "Две изчисления на липсващ катет: намиране на b от триъгълник 5-12-13 и намиране на a от триъгълник 8-15-17.",
        "imgAlt": "Разделена диаграма, показваща два правоъгълни триъгълника, решаващи за липсващи катети чрез Питагоровата теорема"
      },
      "side-howto": {
        "h2": "Как да използвате калкулатора за страни на правоъгълен триъгълник",
        "steps": [
          "<strong>Определете двете измервания, които знаете.</strong> И двете трябва да са дължини на страни, а не ъгли.",
          "<strong>Определете дали липсващата стойност е хипотенузата или катет.</strong> Ако знаете и двата катета, ви трябва хипотенузата. Ако знаете хипотенузата и единия катет, ви трябва другият катет.",
          "<strong>Изберете правилния режим.</strong> Изберете „Питагорова теорема“ за два известни катета, „Липсващ катет от c и a“, когато знаете хипотенузата и катет a, или „Липсващ катет от c и b“, когато знаете хипотенузата и катет b.",
          "<strong>Въведете двете измервания в съответните полета.</strong> Проверете дали всяка стойност отива в правилното поле; размяната на хипотенузата с катет води до грешка.",
          "<strong>Изберете мерната единица.</strong> Използвайте една и съща мерна единица за двете входни стойности.",
          "<strong>Изчислете.</strong> Резултатът се появява заедно със стъпките на решението, показващи заместването и аритметиката.",
          "<strong>Прегледайте резултата и стъпките.</strong> Потвърдете, че формулата съответства на вашата ситуация и аритметиката изглежда правилна.",
          "<strong>Проверете дали отговорът е разумен.</strong> Хипотенузата трябва да е по-голяма от двата катета. Липсващият катет трябва да е по-къс от хипотенузата. Ако тези проверки не преминат, проверете входните си данни."
        ],
        "note": "Калкулаторът не запазва резултати и не генерира изтегляеми отчети. Използвайте опцията за нулиране, за да изчистите полетата за ново изчисление."
      },
      "side-formulas": {
        "h2": "Формули за страни на правоъгълен триъгълник с един поглед",
        "tableHeaders": [
          "Известни измервания",
          "Липсваща страна",
          "Формула",
          "Режим на калкулатора",
          "Пример"
        ],
        "table": [
          [
            "Катети a и b",
            "Хипотенуза c",
            "c = √(a² + b²)",
            "Питагорова теорема",
            "a=6, b=8 → c=10"
          ],
          [
            "Хипотенуза c, катет a",
            "Катет b",
            "b = √(c² − a²)",
            "Липсващ катет от c и a",
            "c=13, a=5 → b=12"
          ],
          [
            "Хипотенуза c, катет b",
            "Катет a",
            "a = √(c² − b²)",
            "Липсващ катет от c и b",
            "c=17, b=15 → a=8"
          ]
        ],
        "paragraph": "Не е нужно да запомняте три отделни формули. Запомнете само [[a^2 + b^2 = c^2]], после решете спрямо непознатата. Ако c е непозната, съберете квадратите на катетите и извлечете корена. Ако катет е непознат, извадете квадрата на известния катет от c² и извлечете корена. Имената на режимите на калкулатора ви казват кое подреждане да използвате."
      },
      "side-applications": {
        "h2": "Примери от реалния живот за изчисления на страни на правоъгълен триъгълник",
        "h3s": [
          "Пример 5: Стълба, опряна на стена",
          "Пример 6: Диагонал на правоъгълна стая",
          "Пример 7: Дължина на покривна греда",
          "Пример 8: Диагонал на телевизор или монитор",
          "Пример 9: Измерване на рампа",
          "Пример 10: Диагонална пътека в правоъгълна градина",
          "Пример 11: Подпорна скоба с известен диагонал",
          "Пример 12: Инженерен чертеж с десетични стойности"
        ],
        "paragraphs": [
          "Стълба достига 2.4 m вертикално нагоре по стена, като основата й е на 1.8 m от стената. Стената и земята образуват прав ъгъл, създавайки правоъгълен триъгълник, в който стълбата е хипотенузата. Известно: a = 1.8 m (основа), b = 2.4 m (височина). Търсим: c (дължина на стълбата). Формула: [[c = \\sqrt{a^2 + b^2}]]. Заместване: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. Стълбата е 3 m. Това ви казва каква дължина на стълба е нужна, за да достигнете тази височина на това разстояние. Забележка: тази геометрия не оценява безопасността на стълбата; за реална употреба следвайте указанията на производителя и правилата за безопасност.",
          "Стая е дълга 9 ft и широка 12 ft. Диагоналът между срещуположните ъгли образува хипотенузата на правоъгълен триъгълник със стените като катети. Известно: a = 9 ft, b = 12 ft. Търсим: c. Формула: c = √(9² + 12²) = √(81 + 144) = √225 = 15. Диагоналът е 15 ft. Това помага, когато проверявате дали стаята е правоъгълна (двата диагонала трябва да съвпадат) или определяте най-дългото праволинейно разстояние за подреждане на мебели.",
          "Опростено напречно сечение на покрив има хоризонтален участък от 12 ft и вертикален наклон от 5 ft. Гредата образува хипотенузата. Известно: участък = 12 ft, наклон = 5 ft. Търсим: дължина на гредата. Формула: c = √(12² + 5²) = √(144 + 25) = √169 = 13. Гредата е 13 ft. Това основно изчисление изключва надвеси, дебелина на билото и допуски за връзки, които изисква реалното строителство. За пълни спецификации се консултирайте със строителни планове.",
          "Правоъгълен дисплей е широк 16 инча и висок 9 инча. Диагоналът е хипотенузата. Известно: ширина = 16 инча, височина = 9 инча. Търсим: диагонал. Формула: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. Диагоналът е приблизително 18.36 инча. Това използва посочените размери; търговските размери на екраните може да се различават в зависимост от методите на измерване на производителя.",
          "Рампа има хоризонтален участък от 6 m и наклон от 0.75 m. Наклонената повърхност е хипотенузата. Известно: участък = 6 m, наклон = 0.75 m. Търсим: дължина на наклона. Формула: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. Наклонът е около 6.05 m. Хоризонталният участък (6 m) се различава от дължината на наклона (6.05 m); наклонът винаги е малко по-дълъг. Това не потвърждава съответствие с изискванията за достъпност; проверете местните строителни норми за изискванията към рампите.",
          "Правоъгълна градина е широка 30 ft и дълга 40 ft. Диагонална пътека пресича през нея. Известно: a = 30 ft, b = 40 ft. Търсим: дължина на пътеката. Формула: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. Пътеката е 50 ft. Разходката по диагонала (50 ft) е по-кратка, отколкото да вървите по двете страни (70 ft), затова диагоналните пътеки спестяват време.",
          "Подпорна скоба е дълга 10 ft (хипотенуза) и обхваща 8 ft хоризонтално. Намерете вертикалното разстояние. Известно: c = 10 ft, a = 8 ft. Търсим: b. Формула: b = √(c² − a²) = √(100 − 64) = √36 = 6. Вертикалното разстояние е 6 ft. Изваждането е необходимо, защото квадратът на хипотенузата съдържа квадратите и на двата катета; премахването на известния хоризонтален компонент оставя вертикалния.",
          "Конструкцията на скоба указва хипотенуза от 250 mm и един катет от 70 mm. Намерете другия катет. Известно: c = 250 mm, b = 70 mm. Търсим: a. Формула: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. Катетът е 240 mm. При входни данни в милиметри резултатът тук е точен, но на практика закръглявайте до точността на най-неточната си мярка. Не съобщавайте повече десетични знаци, отколкото инструментите ви могат да измерят."
        ],
        "figcaption": "Ежедневни правоъгълни триъгълници: стълба (3 m), диагонал на стая (15 ft), покривна греда (13 ft) и градинска пътека (50 ft).",
        "imgAlt": "Четири панела, показващи стълба, опряна на стена, диагонал на стая, покривна греда и градинска пътека с измервания на правоъгълен триъгълник"
      },
      "side-triples": {
        "h2": "Чести питагорови тройки и защо са важни",
        "paragraphs": [
          "Питагоровата тройка се състои от три цели числа, които удовлетворяват [[a^2 + b^2 = c^2]]. Тези тройки осигуряват бързи умствени проверки; ако входните ви данни съвпадат с тройка, знаете отговора без да изчислявате. Мащабираните тройки също работят: умножаването на 3-4-5 по 2 дава 6-8-10, което все още удовлетворява уравнението (36 + 64 = 100). Не всеки правоъгълен триъгълник има страни с цели числа; повечето дават десетични или ирационални числа.",
          "Проверка на 5-12-13: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. Проверка на 8-15-17: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. Когато калкулаторът ви върне цяло число, проверете дали то образува тройка с входните ви данни като проверка за разумност."
        ],
        "tableHeaders": [
          "Тройка",
          "Проверка"
        ],
        "table": [
          [
            "3-4-5",
            "9 + 16 = 25 ✓"
          ],
          [
            "5-12-13",
            "25 + 144 = 169 ✓"
          ],
          [
            "8-15-17",
            "64 + 225 = 289 ✓"
          ],
          [
            "7-24-25",
            "49 + 576 = 625 ✓"
          ],
          [
            "9-40-41",
            "81 + 1600 = 1681 ✓"
          ],
          [
            "6-8-10",
            "36 + 64 = 100 ✓ (мащабирано 3-4-5)"
          ]
        ]
      },
      "side-units": {
        "h2": "Мерни единици, десетични отговори и закръгляне",
        "paragraphs": [
          "Използвайте съгласувани мерни единици: милиметри, сантиметри, метри, инчове, футове, ярдове или километри. Смесените единици дават грешни отговори; 3 фута и 6 инча трябва да станат 3.5 фута или 42 инча, преди да изчислявате. Първо преобразувайте, после изчислявайте. Изберете съответстващата мерна единица в калкулатора за двете входни стойности. Закръглявайте само след крайното изчисление, а не по време на междинните стъпки, за да избегнете натрупване на грешки. Точният отговор като 10 cm се различава от закръгления десетичен като 6.50 m; вторият предполага точност на измерването. Резултатът ви не може да е по-точен от най-неточната ви входна стойност. Ако измервате до най-близкия сантиметър, не съобщавайте милиметри.",
          "Пример с футове и инчове: дъска е с размери 2 фута 6 инча на 3 фута. Преобразувайте в инчове: 30 инча и 36 инча. Изчислете: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 инча. Преобразувайте обратно: 46.86 инча = 3 фута 10.86 инча, или около 3 фута 10.9 инча.",
          "Забележка: вдигането на квадрат на дължина дава квадратни единици (cm²), но крайният корен квадратен връща линейни единици (cm). Калкулаторът се справя с това автоматично."
        ]
      },
      "side-invalid": {
        "h2": "Защо някои измервания на триъгълник не могат да дадат валиден отговор",
        "paragraphs": [
          "Валидният правоъгълен триъгълник се нуждае от три положителни дължини на страни, при които хипотенузата надвишава всеки катет. При изчисления на липсващ катет стойността под корена квадратен (c² − leg²) трябва да е положителна.",
          "<strong>Невалидно:</strong> c = 8, a = 10. Хипотенузата (8) е по-къса от катета (10). Това нарушава правилото хипотенузата да е най-дълга. Вероятно сте разменили означенията; 10 трябва да е хипотенузата.",
          "<strong>Невалидно:</strong> c = 5, a = 5. Тогава b = √(25 − 25) = √0 = 0. Страна с нулева дължина срива триъгълника в отсечка, а не във валиден триъгълник.",
          "<strong>Невалидно:</strong> a = −3, b = 4. Отрицателните дължини нямат геометричен смисъл. Дължините на страните трябва да са положителни."
        ],
        "tableHeaders": [
          "Проблем",
          "Причина",
          "Поправка"
        ],
        "table": [
          [
            "Хипотенузата е по-къса от катета",
            "Разменени означения",
            "Назначете най-дългата страна като c"
          ],
          [
            "Нула под корена квадратен",
            "c е равно на известния катет",
            "Проверете измерванията; триъгълникът е изроден"
          ],
          [
            "Отрицателна стойност под корена квадратен",
            "c е по-къса от известния катет",
            "Входните данни не могат да образуват правоъгълен триъгълник"
          ],
          [
            "Отрицателна входна стойност",
            "Правописна грешка или грешка в знака",
            "Използвайте само положителни дължини"
          ],
          [
            "Нулева входна стойност",
            "Липсващо измерване",
            "Въведете действителната дължина"
          ],
          [
            "Смесени грешни единици",
            "Футове с инчове",
            "Първо преобразувайте в една мерна единица"
          ],
          [
            "Неправоъгълен триъгълник",
            "Няма ъгъл от 90°",
            "Използвайте косинусовата теорема вместо това"
          ]
        ]
      },
      "side-verify": {
        "h2": "Как да проверите дали изчислената ви страна е правилна",
        "paragraphs": [
          "<strong>Метод 1: Заместете обратно.</strong> Вкарайте и трите страни в [[a^2 + b^2 = c^2]]. За триъгълник 6-8-10: 36 + 64 = 100. Ако двете страни съвпадат, отговорът е правилен.",
          "<strong>Метод 2: Проверете, че хипотенузата е най-дълга.</strong> Ако сте решили за c, потвърдете, че надвишава и a, и b. Ако сте решили за катет, потвърдете, че е по-къс от c.",
          "<strong>Метод 3: Сравнете с тройки.</strong> Ако входните ви данни са цели числа, вижте дали образуват известна тройка. Входни данни 9 и 12, даващи 15, съответстват на мащабираната тройка 3-4-5.",
          "<strong>Метод 4: Оценете разумността.</strong> Хипотенузата трябва да е по-дълга от всеки катет, но по-къса от тяхната сума. За катети 6 и 8 хипотенузата 10 удовлетворява 8 < 10 < 14.",
          "<strong>Метод 5: Проверете единиците и закръглянето.</strong> Потвърдете, че мерната единица съответства на входните ви данни и десетичните знаци отразяват точността на измерването ви.",
          "<strong>Пример за проверка 1:</strong> Изчислявате c = 13 от a = 5, b = 12. Проверка: 5² + 12² = 25 + 144 = 169 = 13². Хипотенузата 13 надвишава двата катета. Това съответства на тройката 5-12-13. Валидно.",
          "<strong>Пример за проверка 2:</strong> Изчислявате b = 7.5 от c = 12.5, a = 10. Проверка: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². Катетът 7.5 е по-къс от хипотенузата 12.5. Оценка: 10 < 12.5 < 20. Валидно."
        ]
      },
      "side-mistakes": {
        "h2": "Чести грешки при изчисляване на страни на правоъгълен триъгълник",
        "paragraphs": [
          "<strong>1. Събиране на катетите вместо техните квадрати.</strong> Изчисляване на 6 + 8 = 14 вместо √(36 + 64) = 10. Теоремата събира вдигнати на квадрат площи, а не дължини. Винаги първо вдигайте на квадрат.",
          "<strong>2. Забравяне на корена квадратен.</strong> Отговор 100 вместо 10 за триъгълник 6-8. Формулата дава c²; ви трябва c. Извлечете корена като последна стъпка.",
          "<strong>3. Изваждане при намиране на хипотенузата.</strong> Използване на √(64 − 36) = √28 вместо √(64 + 36) = 10. Събирането се прилага при намиране на хипотенузата от два катета.",
          "<strong>4. Събиране при намиране на липсващ катет.</strong> Използване на √(169 + 25) вместо √(169 − 25) = 12. Изваждането се прилага, когато хипотенузата е известна.",
          "<strong>5. Вземане на катет за хипотенуза.</strong> Означаване на най-дългата страна като a или b. Хипотенузата винаги е срещу правия ъгъл и винаги е означена с c.",
          "<strong>6. Прилагане на теоремата върху неправоъгълен триъгълник.</strong> Използване на a² + b² = c² без ъгъл от 90 градуса. Първо проверете правия ъгъл.",
          "<strong>7. Закръгляне на междинни изчисления.</strong> Закръгляне на 6.25 до 6.3 по средата на изчислението, след което получаване на леко грешен краен отговор. Запазете пълната точност до края.",
          "<strong>8. Смесване на мерни единици.</strong> Въвеждане на 3 фута и 6 инча като 3 и 6. Преобразувайте в една мерна единица преди изчисляване.",
          "<strong>9. Въвеждане на стойности в грешни полета.</strong> Поставяне на хипотенузата в поле за катет. Съпоставете всяко измерване с правилното му означение.",
          "<strong>10. Погрешна интерпретация на отрицателна стойност под корена.</strong> Виждане на √(25 − 36) и насилствено изчисление. Отрицателният подкоренен израз означава, че входните данни не могат да образуват правоъгълен триъгълник; проверете означенията си."
        ]
      },
      "side-beyond": {
        "h2": "Кога ви е нужна различна формула за правоъгълен триъгълник?",
        "paragraphs": [
          "Питагоровата теорема се нуждае от две известни страни. Различната информация изисква различни инструменти.",
          "<strong>Една страна и един остър ъгъл:</strong> Използвайте синус, косинус или тангенс. Синусът свързва срещуположната страна с хипотенузата, косинусът свързва прилежащата страна с хипотенузата, а тангенсът свързва срещуположната страна с прилежащата. Например при хипотенуза c и ъгъл A, катет a = c × sin(A).",
          "<strong>Два ъгъла, без страни:</strong> Невъзможно. Ъглите определят формата, но не и размера; триъгълник 3-4-5 и триъгълник 6-8-10 споделят ъгли, но се различават по мащаб. Нуждаете се от поне една дължина на страна.",
          "<strong>Неправоъгълен триъгълник:</strong> Използвайте косинусовата теорема (c² = a² + b² − 2ab×cos(C)) или синусовата теорема. Питагоровата теорема е частен случай на косинусовата теорема, когато C = 90°.",
          "<strong>Специални правоъгълни триъгълници:</strong> Триъгълникът 45-45-90 има катети в отношение 1:1:√2, а 30-60-90 има страни в отношение 1:√3:2. Те позволяват бързи умствени изчисления. Ако знаете една страна и един остър ъгъл, използвайте Калкулатор за страна на правоъгълен триъгълник чрез ъгъл на този сайт.",
          "Ако знаете една страна и един остър ъгъл, използвайте Калкулатор за страна на правоъгълен триъгълник чрез ъгъл на този сайт."
        ],
        "linkAnchorText": "Калкулатор за страна на правоъгълен триъгълник чрез ъгъл"
      },
      "side-summary": {
        "h2": "Изчислявайте страните на правоъгълни триъгълници с увереност",
        "paragraphs": [
          "Първо определете двете си известни страни. Ако и двете са катети, ви трябва хипотенузата; ако едната е хипотенузата, ви трябва липсващият катет. Изберете съответстващата формула или режим на калкулатора. Въведете двете измервания в една и съща мерна единица. Изчислете, после проверете: хипотенузата трябва да е най-дълга, а заместването обратно в a² + b² = c² трябва да балансира. Проверете мерните си единици и закръглянето. С тези стъпки можете надеждно да решите всяка задача за страна на правоъгълен триъгълник. Върнете се към калкулатора в горната част на тази страница, за да изчислите вашите числа."
        ]
      }
    },
    "faqs": [
      {
        "question": "Как се изчислява липсващата страна на правоъгълен триъгълник?",
        "answer": "Използвайте Питагоровата теорема: a² + b² = c². Ако знаете и двата катета, изчислете c = √(a² + b²). Ако знаете хипотенузата и единия катет, изчислете липсващия катет като √(c² − известният катет²). Нуждаете се от точно две дължини на страни; теоремата не работи само с една страна или само с ъгли."
      },
      {
        "question": "Може ли да се намери липсваща страна, ако знаете две страни?",
        "answer": "Да. Две страни са достатъчни. Ако двете известни страни са катетите, използвайте формулата за хипотенуза. Ако едната известна страна е хипотенузата, използвайте формулата за липсващ катет. Калкулаторът определя кой режим се прилага въз основа на това дали хипотенузата е сред входните ви данни."
      },
      {
        "question": "Как се намира хипотенузата?",
        "answer": "Вдигнете на квадрат двата катета, съберете квадратите и извлечете корен квадратен. За катети 6 и 8: 6² + 8² = 36 + 64 = 100, √100 = 10. Хипотенузата винаги е най-дългата страна, така че проверете дали отговорът ви надвишава двата катета."
      },
      {
        "question": "Как се намира липсващ катет?",
        "answer": "Вдигнете на квадрат хипотенузата и известния катет, извадете квадрата на катета от квадрата на хипотенузата и извлечете корен квадратен. За хипотенуза 13 и катет 5: 169 − 25 = 144, √144 = 12. Резултатът трябва да е по-къс от хипотенузата."
      },
      {
        "question": "Каква е формулата на Питагоровата теорема?",
        "answer": "Формулата е a² + b² = c², където a и b са катетите (страните, образуващи правия ъгъл), а c е хипотенузата (страната срещу правия ъгъл). Тази връзка важи за всеки правоъгълен триъгълник."
      },
      {
        "question": "Винаги ли хипотенузата е най-дългата страна?",
        "answer": "Да. Хипотенузата обхваща най-голямото разстояние между върховете, срещу най-големия ъгъл (90 градуса). Във всеки триъгълник най-дългата страна лежи срещу най-големия ъгъл. Ако изчислената ви хипотенуза е по-къса от катет, проверете входните си данни."
      },
      {
        "question": "Може ли Питагоровата теорема да се използва за всеки триъгълник?",
        "answer": "Не, само за правоъгълни триъгълници. Теоремата зависи от ъгъла от 90 градуса. За остроъгълни или тъпоъгълни триъгълници използвайте косинусовата теорема. Прилагането на Питагор върху неправоъгълен триъгълник дава неправилни резултати."
      },
      {
        "question": "Какво да правя, ако отговорът е десетичен?",
        "answer": "Десетичните са нормални; повечето правоъгълни триъгълници нямат страни с цели числа. Изчислявайте с пълна точност, после закръглете крайния отговор, за да съответства на точността на входните ви данни. Например √42.25 = 6.5 е точно, но √50 ≈ 7.071 изисква закръгляне."
      },
      {
        "question": "Може ли правоъгълен триъгълник да има два равни катета?",
        "answer": "Да. Това е равнобедреният правоъгълен триъгълник 45-45-90, при който катетите са равни, а хипотенузата е равна на катет × √2. За катети от 5 хипотенузата е 5√2 ≈ 7.071."
      },
      {
        "question": "Какво да правя, ако хипотенузата е по-малка от известен катет?",
        "answer": "Входните данни са невалидни. Хипотенузата трябва да е най-дългата страна. Вероятно сте разменили означенията; назначете най-дългото измерване като хипотенузата (c) и изчислете отново."
      },
      {
        "question": "Мога ли да изчисля липсваща страна, използвайки един ъгъл и една страна?",
        "answer": "Да, но не само с Питагоровата теорема. Използвайте тригонометричните отношения: синус, косинус или тангенс свързват известната страна и ъгъла с непознатата страна. Този сайт предлага специален калкулатор за задачи страна-от-ъгъл."
      },
      {
        "question": "Как мога да проверя дали отговорът ми е правилен?",
        "answer": "Заместете и трите страни обратно в a² + b² = c². Потвърдете, че хипотенузата е най-дълга. Проверете дали числата образуват известна питагорова тройка. Оценете, че хипотенузата попада между по-дългия катет и сумата на двата катета."
      }
    ],
    "relatedHeading": "Други калкулатори за правоъгълен триъгълник, които може да ви бъдат полезни",
    "relatedIntro": "След като намерите липсващата си страна, продължете с тези свързани калкулатори, за да завършите анализа си на триъгълника.",
    "relatedItems": [
      "Калкулатор за правоъгълен триъгълник",
      "Калкулатор за ъгъл на правоъгълен триъгълник",
      "Калкулатор за страна на правоъгълен триъгълник чрез ъгъл",
      "Калкулатор за лице на правоъгълен триъгълник",
      "Калкулатор за периметър и полупериметър на правоъгълен триъгълник",
      "Калкулатор за специален правоъгълен триъгълник",
      "Калкулатор за питагорови тройки"
    ]
  },
  "tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "side-intro": "Eksik Kenar Nasıl Bulunur",
      "side-anatomy": "Üç Kenarı Tanımak",
      "side-pythagoras": "Pisagor Teoremi",
      "side-hypotenuse": "Hipotenüsün Bulunması",
      "side-leg": "Eksik Dik Kenarın Bulunması",
      "side-howto": "Hesap Makinesini Kullanma",
      "side-formulas": "Formüller Bir Bakışta",
      "side-applications": "Günlük Hayattan Örnekler",
      "side-triples": "Pisagor Üçlüleri",
      "side-units": "Birimler ve Hassasiyet",
      "side-invalid": "Geçersiz Girdiler",
      "side-verify": "Cevabınızı Doğrulama",
      "side-mistakes": "Sık Yapılan Hatalar",
      "side-beyond": "Pisagor'un Yetmediği Durumlar",
      "side-related": "İlgili Hesaplayıcılar",
      "side-faq": "SSS"
    },
    "sections": {
      "side-intro": {
        "h2": "Bir Dik Üçgenin Eksik Kenarı Nasıl Bulunur",
        "paragraphs": [
          "Dik üçgen kenar hesaplayıcısı, bir dik üçgende diğer iki kenarı bildiğinizde bilinmeyen uzunluğu bulur. Oda köşegenlerini ölçmek, destek kirişlerini kontrol etmek veya ödev cevaplarını doğrulamak gibi işlerde sıkça kullanılır. Hesaplayıcının çalışması için tam olarak iki kenar uzunluğu gerekir. Bu araç, her dik üçgenin üç kenarını birbirine bağlayan Pisagor teoremini uygular. Hipotenüsü bulurken karekök altında toplama, eksik dik kenarı bulurken çıkarma kullanılır. Bu yöntem yalnızca dik üçgenlerde geçerlidir, çünkü söz konusu ilişki 90 derecelik açıya dayanır. Örneğin, dik kenarları 6 cm ve 8 cm olan bir dik üçgenin hipotenüsü 10 cm'dir. Aynı ilke, merdiven uzunluğundan ekran köşegenine kadar gerçek hayattaki mesafeleri ölçer."
        ]
      },
      "side-anatomy": {
        "h2": "Bir Dik Üçgenin Üç Kenarını Anlamak",
        "h3s": [
          "Dik Üçgen Nedir?",
          "Hipotenüs Nedir?",
          "İki Dik Kenar Nedir?",
          "Doğru Kenar Nasıl Belirlenir?"
        ],
        "paragraphs": [
          "Bir dik üçgen, tıpkı bir kare ya da dikdörtgenin köşesi gibi, tam olarak 90 derece ölçen bir açı içerir. Diğer iki açı dar açı olmalıdır, yani her biri 90 dereceden küçüktür. Üçgenin iç açıları toplamı 180 derece olduğundan, dik açı dışındaki iki açının toplamı 90 derecedir. Bu özellik onu dar açılı üçgenlerden (tüm açılar 90°'den küçük) ve geniş açılı üçgenlerden (bir açı 90°'den büyük) ayırır. Dik açı, Pisagor teoreminin arkasındaki diklik ilişkisini oluşturur.",
          "Hipotenüs, dik açının karşısında yer alır ve 90 derecelik köşenin karşısına uzanır. Herhangi iki köşe arasındaki en uzun mesafeyi kat ettiği için her zaman en uzun kenardır. Döndürülmüş çizimlerde, dik açı işaretine değmeyen kenar hipotenüstür. Bu hesaplayıcı onu c olarak adlandırır ve [[a^2 + b^2 = c^2]] formülünde c harfinin hipotenüsü gösterdiği standart kuralı izler.",
          "Dik kenarlar, dik açıyı oluşturan ve 90 derecede birleşen iki kenardır. Bu hesaplayıcıda a ve b olarak adlandırılırlar. İsimleri değiştirmek hipotenüsü değiştirmez, çünkü a² + b², b² + a² ile aynıdır. Hesaplayıcı, eksik dik kenar modlarının hangi kenarı çözeceğini bilmesi için onları ayrı tutar. Her iki dik kenarı da bildiğinizde, hipotenüsü bulmak için her iki sıra da işe yarar.",
          "Dik açı işaretini (küçük kareyi) bulun. Karşısındaki kenar hipotenüstür; işarete değen iki kenar ise dik kenarlardır. Döndürülmüş çizimlerde, dik açı sol altta, bir dik kenar yatay ve diğeri dikey olacak şekilde üçgeni hayalinizde döndürün. Dik açı işareti yoksa, bu hesaplayıcıyı kullanmadan önce üçgenin gerçekten dik açılı olduğunu doğrulayın."
        ],
        "figcaption": "Bir dik üçgenin parçaları: a ve b dik kenarları C köşesinde dik açı oluşturur, c hipotenüsü karşısındadır; A ve B dar açılarıdır.",
        "imgAlt": "a ve b dik kenarları, c hipotenüsü, C'deki dik açı ve A ile B dar açıları etiketlenmiş dik üçgen"
      },
      "side-pythagoras": {
        "h2": "Pisagor Teoremi Üçgen Kenarlarını Nasıl Hesaplar",
        "h3s": [
          "Formülün Neden İşe Yaradığını Anlamak"
        ],
        "paragraphs": [
          "Pisagor teoremi, [[a^2 + b^2 = c^2]] olduğunu belirtir; burada a ve b dik kenarlar, c ise hipotenüstür. Her değişken bir kenar uzunluğudur. Bir sayının karesini almak, onu kendisiyle çarpmak demektir (6² = 36); karekök ise bunun tersidir (√100 = 10). Karekök almamızın nedeni, formülün uzunlukları değil uzunlukların karelerini birbirine bağlamasıdır. Dik kenarların kendilerini toplamak (6 + 8 = 14) yanlıştır; önce karelerini toplayın (36 + 64 = 100), sonra karekökünü alın. Teorem 90 derecelik açıyı gerektirir; dik olmayan üçgenler için Kosinüs Yasası gerekir. Hesaplayıcının üç modu da bu denklemi yeniden düzenler: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]].",
          "Her kenara bir kare çizin: alanları a², b² ve c² olur. Teorem, iki küçük alanın toplamının en büyük alana eşit olduğunu söyler. 3-4-5 için: 9 ve 16 birimkarelik karelerin toplamı, hipotenüsteki karenin alanı olan 25'e eşittir. Kare alma önemlidir, çünkü uzunlukları değil alanları karşılaştırırsınız."
        ],
        "figcaption": "Görsel ispat: dik kenarlardaki 9 ve 16 birimkarelik kareler birleşerek hipotenüsteki 25 birimkarelik kareye eşit olur.",
        "imgAlt": "Kenarlarında 9, 16 ve 25 birimkare etiketli kareler bulunan 3-4-5 dik üçgeni; 9 artı 16 eşittir 25 gösteriliyor"
      },
      "side-hypotenuse": {
        "h2": "İki Dik Kenarla Hipotenüs Nasıl Bulunur",
        "h3s": [
          "Örnek 1: 6-8 Dik Üçgeninin Hipotenüsünü Bulma",
          "Örnek 2: Ondalıklı Ölçülerle Hipotenüs Bulma",
          "Bu Hesap Makinesi Modu Ne Zaman Kullanılmalı?"
        ],
        "paragraphs": [
          "[[a^2 + b^2 = c^2]] denklemini c için çözersek [[c = \\sqrt{a^2 + b^2}]] elde ederiz. İşlem: her iki dik kenarı belirleyin, her birinin karesini alın, kareleri toplayın, karekökünü alın, birimi yazın ve sonucun her iki dik kenardan da büyük olduğunu doğrulayın.",
          "a = 6 cm ve b = 8 cm dik kenarları verilmiş: her birinin karesini alın (36 ve 64), toplayın (100), karekökünü alın (10). Hipotenüs 10 cm'dir ve beklendiği gibi her iki dik kenardan da uzundur.",
          "a = 2.5 m, b = 6 m verilmiş: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Ondalıklı sayılarda dikkatli işlem yapın; son yuvarlamaya kadar tam hassasiyeti koruyun.",
          "İki dik kenar biliniyorsa hipotenüs modunu kullanın: oda köşegenleri, destek kirişleri veya dik kenarları verilen geometri problemleri. Hipotenüs ile bir dik kenar biliniyorsa, eksik dik kenar moduna geçin."
        ],
        "displayEquations": [
          "[[[c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}]]]",
          "[[[c = \\sqrt{2.5^2 + 6^2} = \\sqrt{6.25 + 36} = \\sqrt{42.25} = 6.5\\text{ m}]]]"
        ]
      },
      "side-leg": {
        "h2": "Bir Dik Üçgenin Eksik Dik Kenarı Nasıl Bulunur",
        "h3s": [
          "Hipotenüs c ve Dik Kenar a Bilinirken b Dik Kenarını Bulma",
          "Örnek 3: 13 cm Hipotenüsten b Dik Kenarını Bulma",
          "Hipotenüs c ve Dik Kenar b Bilinirken a Dik Kenarını Bulma",
          "Örnek 4: Bilinmeyen Dik Kenarı Bulma"
        ],
        "paragraphs": [
          "Hipotenüsü ve bir dik kenarı bildiğinizde, bilinmeyen dik kenarı yalnız bırakmak için Pisagor teoremini yeniden düzenleyin. [[a^2 + b^2 = c^2]] denkleminden başlayıp denklemin her iki yanından bilinen dik kenarın karesini çıkarın. Böylece her bir dik kenar için bir formül elde edilir.",
          "Formül [[b = \\sqrt{c^2 - a^2}]] şeklindedir. Türetilişi: [[a^2 + b^2 = c^2]] ile başlayın, her iki yandan a² çıkarın ve [[b^2 = c^2 - a^2]] elde edin, sonra karekökünü alın. Çıkarma işlemi, hipotenüsün karesinin her iki dik kenarın karesini de içerdiğini yansıtır; birini çıkarınca diğeri kalır.",
          "c = 13 cm ve a = 5 cm verilmiş, b dik kenarını bulun. İkisinin de karesini alın: 13² = 169 ve 5² = 25. Çıkarın: 169 − 25 = 144. Karekökünü alın: √144 = 12. b dik kenarı 12 cm'dir. Doğrulayın: 5² + 12² = 25 + 144 = 169 = 13². 5-12-13 üçlüsü sonucu doğrular.",
          "Formül [[a = \\sqrt{c^2 - b^2}]] şeklindedir. Pisagor bağıntısında dik kenarlar birbirinin yerine geçebilir; birini a, diğerini b olarak adlandırmak yalnızca bir kuraldır. Hesaplayıcı, değişkenleri zihinsel olarak değiştirmek zorunda kalmadan alan etiketlerini kendi probleminize eşleştirebilmeniz için her iki modu da sunar.",
          "c = 17 inç ve b = 15 inç verilmiş, a dik kenarını bulun. Karelerini alın: 17² = 289 ve 15² = 225. Çıkarın: 289 − 225 = 64. Karekökünü alın: √64 = 8. a dik kenarı 8 inçtir. Bu, 8-15-17 üçlüsüdür. İki eksik dik kenar modu, yalnızca hangi dik kenarın bilindiğine göre farklılık gösterir; matematik aynıdır."
        ],
        "tableHeaders": [
          "Bilinen",
          "Bulunan",
          "Formül",
          "Hesap Makinesi Modu"
        ],
        "table": [
          [
            "c = 13, a = 5",
            "b",
            "b = √(c² − a²)",
            "c ve a'dan Eksik Dik Kenar"
          ],
          [
            "c = 17, b = 15",
            "a",
            "a = √(c² − b²)",
            "c ve b'den Eksik Dik Kenar"
          ]
        ],
        "displayEquations": [
          "[[[b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}]]]",
          "[[[a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ inç}]]]"
        ],
        "figcaption": "İki eksik dik kenar hesabı: 5-12-13 üçgeninden b'yi ve 8-15-17 üçgeninden a'yı bulma.",
        "imgAlt": "Pisagor teoremiyle eksik dik kenarların çözüldüğü iki dik üçgeni gösteren bölünmüş şema"
      },
      "side-howto": {
        "h2": "Dik Üçgen Kenar Hesaplayıcısı Nasıl Kullanılır",
        "steps": [
          "Bildiğiniz iki ölçüyü belirleyin. Bunların ikisi de kenar uzunluğu olmalı, açı değil.",
          "Eksik değerin hipotenüs mü yoksa dik kenar mı olduğuna karar verin. Her iki dik kenarı da biliyorsanız hipotenüse ihtiyacınız var demektir. Hipotenüsü ve bir dik kenarı biliyorsanız diğer dik kenara ihtiyacınız var demektir.",
          "Doğru modu seçin. İki dik kenar biliniyorsa \"Pisagor Teoremi\"ni, hipotenüs ve a dik kenarı biliniyorsa \"c ve a'dan Eksik Dik Kenar\"ı, hipotenüs ve b dik kenarı biliniyorsa \"c ve b'den Eksik Dik Kenar\"ı seçin.",
          "Her iki ölçüyü de eşleşen alanlara girin. Her değerin doğru alana gittiğini iki kez kontrol edin; hipotenüs ile dik kenarın yerini karıştırmak hata verir.",
          "Ölçü birimini seçin. Her iki girdi için de aynı birimi kullanın.",
          "Hesaplayın. Sonuç, yerine koyma ve işlem adımlarıyla birlikte görünür.",
          "Sonucu ve adımları inceleyin. Formülün durumunuza uyduğunu ve hesapların doğru göründüğünü doğrulayın.",
          "Cevabın mantıklı olduğunu kontrol edin. Hipotenüs her iki dik kenardan da uzun olmalıdır. Eksik dik kenar, hipotenüsten kısa olmalıdır. Bunlar sağlanmıyorsa girdilerinizi tekrar kontrol edin."
        ],
        "note": "Hesaplayıcı sonuçları kaydetmez veya indirilebilir rapor oluşturmaz. Yeni bir hesaplama için alanları temizlemek amacıyla sıfırlama seçeneğini kullanın."
      },
      "side-formulas": {
        "h2": "Dik Üçgen Kenar Formülleri Bir Bakışta",
        "tableHeaders": [
          "Bilinen Ölçüler",
          "Eksik Kenar",
          "Formül",
          "Hesap Makinesi Modu",
          "Örnek"
        ],
        "table": [
          [
            "a ve b dik kenarları",
            "c hipotenüsü",
            "c = √(a² + b²)",
            "Pisagor Teoremi",
            "a=6, b=8 → c=10"
          ],
          [
            "c hipotenüsü, a dik kenarı",
            "b dik kenarı",
            "b = √(c² − a²)",
            "c ve a'dan Eksik Dik Kenar",
            "c=13, a=5 → b=12"
          ],
          [
            "c hipotenüsü, b dik kenarı",
            "a dik kenarı",
            "a = √(c² − b²)",
            "c ve b'den Eksik Dik Kenar",
            "c=17, b=15 → a=8"
          ]
        ],
        "paragraph": "Üç ayrı formülü ezberlemenize gerek yok. Yalnızca [[a^2 + b^2 = c^2]] formülünü hatırlayın, sonra bilinmeyeni çözün. c bilinmiyorsa, dik kenarların karelerini toplayıp karekökünü alın. Bir dik kenar bilinmiyorsa, bilinen dik kenarın karesini c²'den çıkarıp karekökünü alın. Hesap makinesi mod adları, hangi düzenlemeyi kullanacağınızı söyler."
      },
      "side-applications": {
        "h2": "Dik Üçgen Kenar Hesaplarının Gerçek Hayattan Örnekleri",
        "h3s": [
          "Örnek 5: Duvara Dayanan Merdiven",
          "Örnek 6: Dikdörtgen Odanın Köşegeni",
          "Örnek 7: Çatı Kirişi Uzunluğu",
          "Örnek 8: TV veya Monitör Köşegeni",
          "Örnek 9: Rampa Ölçümü",
          "Örnek 10: Dikdörtgen Bahçede Patika",
          "Örnek 11: Köşegeni Bilinen Destek Kirişi",
          "Örnek 12: Ondalıklı Değerli Mühendislik Çizimi"
        ],
        "paragraphs": [
          "Bir merdiven duvara dikey olarak 2.4 m yukarı ulaşıyor, tabanı ise duvardan 1.8 m uzakta. Duvar ve zemin dik açı oluşturduğu için, merdivenin hipotenüs olduğu bir dik üçgen oluşur. Bilinen: a = 1.8 m (taban), b = 2.4 m (yükseklik). Bulunan: c (merdiven uzunluğu). Formül: [[c = \\sqrt{a^2 + b^2}]]. Yerine koyun: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. Merdiven 3 m uzunluğundadır. Bu, o yüksekliğe o mesafeden ulaşmak için gereken merdiven uzunluğunu söyler. Not: bu geometri, merdiven güvenliğini değerlendirmez; gerçek kullanımda üretici talimatlarına ve güvenlik kurallarına uyun.",
          "Bir oda 9 fit uzunluğunda ve 12 fit genişliğindedir. Karşı köşeler arasındaki köşegen, duvarların dik kenar olduğu bir dik üçgenin hipotenüsünü oluşturur. Bilinen: a = 9 fit, b = 12 fit. Bulunan: c. Formül: c = √(9² + 12²) = √(81 + 144) = √225 = 15. Köşegen 15 fit uzunluğundadır. Bu, odanın kare olup olmadığını kontrol ederken (her iki köşegen de eşit olmalı) veya mobilya yerleşimi için en uzun düz çizgi mesafesini belirlerken işe yarar.",
          "Basitleştirilmiş bir çatı kesitinde yatay açıklık 12 fit, dikey yükseklik 5 fit'tir. Çatı kirişi hipotenüsü oluşturur. Bilinen: açıklık = 12 fit, yükseklik = 5 fit. Bulunan: kiriş uzunluğu. Formül: c = √(12² + 5²) = √(144 + 25) = √169 = 13. Kiriş 13 fit uzunluğundadır. Bu temel hesap, gerçek inşaatta gerekli olan saçak çıkıntılarını, mahya kalınlığını ve bağlantı paylarını kapsamaz. Tam ölçüler için yapı planlarına başvurun.",
          "Dikdörtgen bir ekran 16 inç genişliğinde ve 9 inç yüksekliğindedir. Köşegen hipotenüstür. Bilinen: genişlik = 16 inç, yükseklik = 9 inç. Bulunan: köşegen. Formül: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. Köşegen yaklaşık 18.36 inçtir. Bu, belirtilen boyutları kullanır; ticari ekran boyutları üreticinin ölçüm yöntemlerine göre farklılık gösterebilir.",
          "Bir rampanın yatay uzunluğu 6 m, yüksekliği 0.75 m'dir. Eğimli yüzey hipotenüstür. Bilinen: yatay uzunluk = 6 m, yükseklik = 0.75 m. Bulunan: eğim uzunluğu. Formül: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. Eğim yaklaşık 6.05 m uzunluğundadır. Yatay uzunluk (6 m), eğim uzunluğundan (6.05 m) farklıdır; eğim her zaman biraz daha uzundur. Bu, erişilebilirlik uygunluğunu doğrulamaz; rampa gereksinimleri için yerel yapı yönetmeliklerine bakın.",
          "Dikdörtgen bir bahçe 30 fit genişliğinde ve 40 fit uzunluğundadır. Çapraz bir patika köşeden köşeye uzanır. Bilinen: a = 30 fit, b = 40 fit. Bulunan: patika uzunluğu. Formül: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. Patika 50 fit uzunluğundadır. Köşegenden yürümek (50 fit), iki kenardan yürümekten (70 fit) daha kısadır; çapraz patikalar bu yüzden zaman kazandırır.",
          "Bir destek kirişi 10 fit uzunluğundadır (hipotenüs) ve yatayda 8 fit uzanır. Dikey mesafeyi bulun. Bilinen: c = 10 fit, a = 8 fit. Bulunan: b. Formül: b = √(c² − a²) = √(100 − 64) = √36 = 6. Dikey mesafe 6 fit uzunluğundadır. Çıkarma işlemi zorunludur, çünkü hipotenüsün karesi her iki dik kenarın karesini de içerir; bilinen yatay bileşeni çıkarmak dikey bileşeni bırakır.",
          "Bir braket tasarımında hipotenüs 250 mm, bir dik kenar 70 mm olarak belirtilmiştir. Diğer dik kenarı bulun. Bilinen: c = 250 mm, b = 70 mm. Bulunan: a. Formül: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. Dik kenar 240 mm uzunluğundadır. Milimetre girdilerde sonuç burada tamdır, ancak pratikte en az hassas ölçünüzün hassasiyetine yuvarlayın. Ölçü aletlerinizin ölçebildiğinden fazla ondalık basamak yazmayın."
        ],
        "figcaption": "Günlük hayatta dik üçgenler: merdiven (3 m), oda köşegeni (15 fit), çatı kirişi (13 fit) ve bahçe patikası (50 fit).",
        "imgAlt": "Duvara dayanan merdiven, oda köşegeni, çatı kirişi ve bahçe patikası gösteren dört panel; dik üçgen ölçüleriyle"
      },
      "side-triples": {
        "h2": "Yaygın Pisagor Üçlüleri ve Neden Önemliler",
        "paragraphs": [
          "Bir Pisagor üçlüsü, [[a^2 + b^2 = c^2]] denklemini sağlayan üç tam sayıdan oluşur. Bu üçlüler hızlı zihinsel kontroller sağlar; girdileriniz bir üçlüyle eşleşiyorsa cevabı hesaplamadan bilirsiniz. Ölçekli üçlüler de işe yarar: 3-4-5'i 2 ile çarpmak 6-8-10 verir ve bu da denklemi sağlar (36 + 64 = 100). Her dik üçgenin tam sayı kenarları olmaz; çoğu ondalık ya da irrasyonel sayı üretir.",
          "5-12-13'ü doğrulayın: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. 8-15-17'yi doğrulayın: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. Hesap makineniz tam sayı döndürdüğünde, girdilerinizle bir üçlü oluşturup oluşturmadığını bir sağlamlık kontrolü olarak inceleyin."
        ],
        "tableHeaders": [
          "Üçlü",
          "Doğrulama"
        ],
        "table": [
          [
            "3-4-5",
            "9 + 16 = 25 ✓"
          ],
          [
            "5-12-13",
            "25 + 144 = 169 ✓"
          ],
          [
            "8-15-17",
            "64 + 225 = 289 ✓"
          ],
          [
            "7-24-25",
            "49 + 576 = 625 ✓"
          ],
          [
            "9-40-41",
            "81 + 1600 = 1681 ✓"
          ],
          [
            "6-8-10",
            "36 + 64 = 100 ✓ (ölçekli 3-4-5)"
          ]
        ]
      },
      "side-units": {
        "h2": "Ölçü Birimleri, Ondalıklı Cevaplar ve Yuvarlama",
        "paragraphs": [
          "Tutarlı birimler kullanın: milimetre, santimetre, metre, inç, fit, yarda veya kilometre. Karışık birimler yanlış sonuç verir; 3 fit ile 6 inç, hesaplamadan önce 3.5 fit veya 42 inç olmalıdır. Önce dönüştürün, sonra hesaplayın. Her iki girdi için de hesaplayıcıda eşleşen birimi seçin. Yuvarlamayı yalnızca son hesaplamadan sonra yapın, ara adımlarda değil; böylece hatalar birikmez. 10 cm gibi tam bir cevap ile 6.50 m gibi yuvarlanmış bir ondalık farklıdır; ikincisi ölçüm hassasiyetini ima eder. Sonucunuz, en az hassas girdinizden daha hassas olamaz. Santimetreye en yakın ölçüm yaptıysanız, milimetre bildirmeyin.",
          "Fit ve inç örneği: bir tahta 2 fit 6 inç ile 3 fit ölçülerinde. İnçe çevirin: 30 inç ve 36 inç. Hesaplayın: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 inç. Geri çevirin: 46.86 inç = 3 fit 10.86 inç, yani yaklaşık 3 fit 10.9 inç.",
          "Not: bir uzunluğun karesini almak kare birimler (cm²) üretir, ancak son karekök doğrusal birimler (cm) döndürür. Hesaplayıcı bunu otomatik olarak yapar."
        ]
      },
      "side-invalid": {
        "h2": "Bazı Üçgen Ölçüleri Neden Geçerli Bir Cevap Veremez",
        "paragraphs": [
          "Geçerli bir dik üçgen, hipotenüsün her dik kenardan uzun olduğu üç pozitif kenar uzunluğu gerektirir. Eksik dik kenar hesaplarında, karekökün içindeki değer (c² − dik kenar²) pozitif olmalıdır.",
          "Geçersiz: c = 8, a = 10. Hipotenüs (8), dik kenardan (10) daha kısadır. Bu, hipotenüs-en-uzundur kuralını ihlal eder. Etiketleri karıştırmış olabilirsiniz; 10, hipotenüs olmalıdır.",
          "Geçersiz: c = 5, a = 5. O zaman b = √(25 − 25) = √0 = 0. Sıfır uzunluklu bir kenar üçgeni bir doğru parçasına indirir; bu geçerli bir üçgen değildir.",
          "Geçersiz: a = −3, b = 4. Negatif uzunlukların geometrik anlamı yoktur. Kenar uzunlukları pozitif olmalıdır."
        ],
        "tableHeaders": [
          "Sorun",
          "Neden",
          "Çözüm"
        ],
        "table": [
          [
            "Hipotenüs dik kenardan kısa",
            "Etiketler karışmış",
            "En uzun kenarı c olarak atayın"
          ],
          [
            "Karekök altında sıfır",
            "c bilinen dik kenara eşit",
            "Ölçüleri kontrol edin; üçgen bozulmuş"
          ],
          [
            "Karekök altında negatif",
            "c bilinen dik kenardan kısa",
            "Girdiler dik üçgen oluşturamaz"
          ],
          [
            "Negatif girdi",
            "Yazım veya işaret hatası",
            "Yalnızca pozitif uzunluklar kullanın"
          ],
          [
            "Sıfır girdi",
            "Eksik ölçü",
            "Gerçek uzunluğu girin"
          ],
          [
            "Yanlış karışık birimler",
            "Fit ile inç karışık",
            "Önce tek birime çevirin"
          ],
          [
            "Dik olmayan üçgen",
            "90° açı yok",
            "Bunun yerine Kosinüs Yasası'nı kullanın"
          ]
        ]
      },
      "side-verify": {
        "h2": "Hesapladığınız Kenarın Doğru Olup Olmadığı Nasıl Kontrol Edilir",
        "paragraphs": [
          "Yöntem 1: Yerine koyarak kontrol edin. Üç kenarı da [[a^2 + b^2 = c^2]] denkleminde yerine koyun. 6-8-10 üçgeni için: 36 + 64 = 100. Her iki taraf da eşleşirse cevap doğrudur.",
          "Yöntem 2: Hipotenüsün en uzun olduğunu kontrol edin. c'yi çözdüyseniz, a ve b'den büyük olduğunu doğrulayın. Bir dik kenarı çözdüyseniz, c'den kısa olduğunu doğrulayın.",
          "Yöntem 3: Üçlülerle karşılaştırın. Girdileriniz tam sayıysa, bilinen bir üçlü oluşturup oluşturmadıklarına bakın. 9 ve 12 girdileriyle 15 elde etmek, ölçekli 3-4-5 üçlüsüyle eşleşir.",
          "Yöntem 4: Mantıklılığı tahmin edin. Hipotenüs, her iki dik kenardan da uzun ama toplamlarından kısa olmalıdır. 6 ve 8 dik kenarları için 10 hipotenüsü, 8 < 10 < 14 koşulunu sağlar.",
          "Yöntem 5: Birimleri ve yuvarlamayı kontrol edin. Birimin girdilerinizle eşleştiğini ve ondalık basamakların ölçüm hassasiyetinizi yansıttığını doğrulayın.",
          "Doğrulama Örneği 1: a = 5, b = 12'den c = 13 hesapladınız. Kontrol: 5² + 12² = 25 + 144 = 169 = 13². Hipotenüs 13, her iki dik kenardan da uzundur. Bu, 5-12-13 üçlüsüyle eşleşir. Geçerli.",
          "Doğrulama Örneği 2: c = 12.5, a = 10'dan b = 7.5 hesapladınız. Kontrol: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². Dik kenar 7.5, hipotenüs 12.5'ten kısadır. Tahmin: 10 < 12.5 < 20. Geçerli."
        ]
      },
      "side-mistakes": {
        "h2": "Dik Üçgen Kenarları Hesaplanırken Sık Yapılan Hatalar",
        "paragraphs": [
          "1. Dik kenarların kareleri yerine kendilerini toplamak. √(36 + 64) = 10 yerine 6 + 8 = 14 hesaplamak. Teorem, uzunlukları değil kare alınmış alanları toplar. Önce her zaman kare alın.",
          "2. Karekökü unutmak. 6-8 üçgeni için 10 yerine 100 cevaplamak. Formül c²'yi verir; size c lazım. Karekök almayı son adım yapın.",
          "3. Hipotenüsü bulurken çıkarmak. √(64 + 36) = 10 yerine √(64 − 36) = √28 kullanmak. İki dik kenardan hipotenüs bulunurken toplama uygulanır.",
          "4. Eksik dik kenarı bulurken toplamak. √(169 − 25) = 12 yerine √(169 + 25) kullanmak. Hipotenüs biliniyorsa çıkarma uygulanır.",
          "5. Dik kenarı hipotenüs sanmak. En uzun kenarı a veya b olarak etiketlemek. Hipotenüs her zaman dik açının karşısındadır ve her zaman c olarak adlandırılır.",
          "6. Teoremi dik olmayan üçgene uygulamak. 90 derecelik açı olmadan a² + b² = c² kullanmak. Önce dik açıyı doğrulayın.",
          "7. Ara hesaplamaları yuvarlamak. Hesabın ortasında 6.25'i 6.3'e yuvarlayıp sonra biraz yanlış son cevap almak. Tam hassasiyeti sona kadar koruyun.",
          "8. Ölçü birimlerini karıştırmak. 3 fit ve 6 inçi 3 ve 6 olarak girmek. Hesaplamadan önce tek birime çevirin.",
          "9. Değerleri yanlış alanlara girmek. Hipotenüsü dik kenar alanına koymak. Her ölçüyü doğru etiketle eşleştirin.",
          "10. Karekök altındaki negatifi yanlış yorumlamak. √(25 − 36) görüp zorla hesap yapmaya çalışmak. Negatif karekök içi, girdilerin dik üçgen oluşturamayacağı anlamına gelir; etiketlerinizi kontrol edin."
        ]
      },
      "side-beyond": {
        "h2": "Farklı Bir Dik Üçgen Formülüne Ne Zaman İhtiyaç Duyarsınız?",
        "paragraphs": [
          "Pisagor teoremi için iki bilinen kenar gerekir. Farklı bilgiler, farklı araçlar gerektirir.",
          "Bir kenar ve bir dar açı: sinüs, kosinüs veya tanjant kullanın. Sinüs karşı kenarı hipotenüse, kosinüs komşu kenarı hipotenüse, tanjant ise karşı kenarı komşu kenara bağlar. Örneğin, c hipotenüsü ve A açısıyla, a dik kenarı = c × sin(A).",
          "İki açı, hiç kenar yok: imkânsız. Açılar şekli belirler ama büyüklüğü değil; 3-4-5 üçgeni ile 6-8-10 üçgeni aynı açılara sahiptir ama ölçekleri farklıdır. En az bir kenar uzunluğuna ihtiyacınız vardır.",
          "Dik olmayan üçgen: Kosinüs Yasası'nı (c² = a² + b² − 2ab×cos(C)) veya Sinüs Yasası'nı kullanın. C = 90° olduğunda Pisagor teoremi, Kosinüs Yasası'nın özel bir durumudur.",
          "Özel dik üçgenler: 45-45-90 üçgeninin kenarları 1:1:√2 oranında, 30-60-90 üçgeninin kenarları 1:√3:2 oranındadır. Bunlar hızlı zihinsel hesaplara olanak tanır.",
          "Bir kenar ve bir dar açı biliyorsanız, bu sitedeki Açıdan Dik Üçgen Kenarı Hesaplayıcısı'nı kullanın."
        ],
        "linkAnchorText": "Açıdan Dik Üçgen Kenarı Hesaplayıcısı"
      },
      "side-summary": {
        "h2": "Dik Üçgen Kenarlarını Güvenle Hesaplayın",
        "paragraphs": [
          "Önce bildiğiniz iki kenarı belirleyin. İkisi de dik kenarsa hipotenüse, biri hipotenüsse eksik dik kenara ihtiyacınız var demektir. Eşleşen formülü veya hesap makinesi modunu seçin. Her iki ölçüyü de aynı birimle girin. Hesaplayın, sonra doğrulayın: hipotenüs en uzun olmalı ve a² + b² = c² denklemine yerine koyma dengeli çıkmalıdır. Birimlerinizi ve yuvarlamanızı kontrol edin. Bu adımlarla her dik üçgen kenar problemini güvenle çözebilirsiniz. Sayılarınızı çalıştırmak için bu sayfanın üstündeki hesap makinesine dönün."
        ]
      }
    },
    "faqs": [
      {
        "question": "Bir dik üçgenin eksik kenarı nasıl hesaplanır?",
        "answer": "Pisagor teoremini kullanın: a² + b² = c². Her iki dik kenarı da biliyorsanız, c = √(a² + b²) hesaplayın. Hipotenüsü ve bir dik kenarı biliyorsanız, eksik dik kenarı √(c² − bilinen dik kenar²) olarak hesaplayın. Tam olarak iki kenar uzunluğuna ihtiyacınız vardır; teorem tek kenarla veya yalnızca açılarla çalışmaz."
      },
      {
        "question": "İki kenar biliniyorsa eksik kenar bulunabilir mi?",
        "answer": "Evet. İki kenar yeterlidir. Bilinen iki kenar dik kenarlarsa hipotenüs formülünü kullanın. Bilinen kenarlardan biri hipotenüsse eksik dik kenar formülünü kullanın. Hesaplayıcı, hipotenüsün girdileriniz arasında olup olmadığına göre hangi modun geçerli olduğunu belirler."
      },
      {
        "question": "Hipotenüs nasıl bulunur?",
        "answer": "Her iki dik kenarın karesini alın, kareleri toplayın ve karekökünü alın. 6 ve 8 dik kenarları için: 6² + 8² = 36 + 64 = 100, √100 = 10. Hipotenüs her zaman en uzun kenardır; cevabınızın her iki dik kenardan da büyük olduğunu doğrulayın."
      },
      {
        "question": "Eksik dik kenar nasıl bulunur?",
        "answer": "Hipotenüsün ve bilinen dik kenarın karesini alın, dik kenarın karesini hipotenüsün karesinden çıkarın ve karekökünü alın. Hipotenüs 13 ve dik kenar 5 için: 169 − 25 = 144, √144 = 12. Sonuç hipotenüsten kısa olmalıdır."
      },
      {
        "question": "Pisagor teoremi formülü nedir?",
        "answer": "Formül a² + b² = c² şeklindedir; burada a ve b dik kenarlardır (dik açıyı oluşturan kenarlar), c ise hipotenüstür (dik açının karşısındaki kenar). Bu ilişki her dik üçgen için geçerlidir."
      },
      {
        "question": "Hipotenüs her zaman en uzun kenar mıdır?",
        "answer": "Evet. Hipotenüs, köşeler arasındaki en büyük mesafeyi kat eder ve en büyük açının (90 derece) karşısındadır. Her üçgende en uzun kenar, en büyük açının karşısındadır. Hesapladığınız hipotenüs bir dik kenardan kısaysa girdilerinizi tekrar kontrol edin."
      },
      {
        "question": "Pisagor teoremi her üçgende kullanılabilir mi?",
        "answer": "Hayır, yalnızca dik üçgenlerde. Teorem 90 derecelik açıya bağlıdır. Dar açılı veya geniş açılı üçgenlerde Kosinüs Yasası'nı kullanın. Pisagor'u dik olmayan bir üçgene uygulamak yanlış sonuç verir."
      },
      {
        "question": "Cevap ondalıklı çıkarsa ne olur?",
        "answer": "Ondalıklar normaldir; çoğu dik üçgenin tam sayı kenarları yoktur. Tam hassasiyetle hesaplayın, sonra son cevabı girdi hassasiyetinize göre yuvarlayın. Örneğin √42.25 = 6.5 tamdır, ancak √50 ≈ 7.071 yuvarlama gerektirir."
      },
      {
        "question": "Bir dik üçgenin iki dik kenarı eşit olabilir mi?",
        "answer": "Evet. Bu, dik kenarların eşit olduğu ve hipotenüsün dik kenar × √2 olduğu 45-45-90 ikizkenar dik üçgendir. 5'lik dik kenarlar için hipotenüs 5√2 ≈ 7.071'dir."
      },
      {
        "question": "Hipotenüs bilinen bir dik kenardan kısaysa ne olur?",
        "answer": "Girdiler geçersizdir. Hipotenüs en uzun kenar olmalıdır. Etiketleri karıştırmış olabilirsiniz; en uzun ölçüyü hipotenüs (c) olarak atayıp yeniden hesaplayın."
      },
      {
        "question": "Bir açı ve bir kenar kullanarak eksik kenar hesaplanabilir mi?",
        "answer": "Evet, ancak yalnızca Pisagor teoremiyle değil. Trigonometrik oranları kullanın: sinüs, kosinüs veya tanjant, bilinen kenar ve açıyı bilinmeyen kenara bağlar. Bu site, açıdan kenar problemleri için özel bir hesaplayıcı sunar."
      },
      {
        "question": "Cevabımın doğru olduğunu nasıl kontrol edebilirim?",
        "answer": "Üç kenarı da a² + b² = c² denklemine yerine koyun. Hipotenüsün en uzun olduğunu doğrulayın. Sayıların bilinen bir Pisagor üçlüsü oluşturup oluşturmadığına bakın. Hipotenüsün, uzun dik kenar ile iki dik kenarın toplamı arasında kaldığını tahmin edin."
      }
    ],
    "relatedHeading": "İlginizi Çekebilecek Diğer Dik Üçgen Hesaplayıcıları",
    "relatedIntro": "Eksik kenarı bulduktan sonra, üçgen analizinizi tamamlamak için bu ilgili hesaplayıcılarla devam edin.",
    "relatedItems": [
      "Dik Üçgen Hesaplayıcısı",
      "Dik Üçgen Açı Hesaplayıcısı",
      "Açıdan Dik Üçgen Kenarı Hesaplayıcısı",
      "Dik Üçgen Alan Hesaplayıcısı",
      "Dik Üçgen Çevre ve Yarı Çevre Hesaplayıcısı",
      "Özel Dik Üçgen Hesaplayıcısı",
      "Pisagor Üçlüleri Hesaplayıcısı"
    ]
  },
  "sv": {
    "faqs": [
      {
        "answer": "Använd Pythagoras sats: a² + b² = c². Om du känner till båda kateterna, beräkna c = √(a² + b²). Om du känner till hypotenusan och en katet, beräkna den saknade kateten som √(c² − kända kateten²). Du behöver exakt två sidolängder; satsen fungerar inte med bara en sida eller med enbart vinklar.",
        "question": "Hur beräknar man den saknade sidan i en rätvinklig triangel?"
      },
      {
        "answer": "Ja. Två sidor räcker. Om de två kända sidorna är kateterna, använd formeln för hypotenusan. Om en känd sida är hypotenusan, använd formeln för saknad katet. Kalkylatorn avgör vilket läge som gäller utifrån om hypotenusan finns bland dina inmatningar.",
        "question": "Kan man hitta en saknad sida om man känner till två sidor?"
      },
      {
        "answer": "Kvadrera båda kateterna, addera kvadraterna och dra kvadratroten. För kateterna 6 och 8: 6² + 8² = 36 + 64 = 100, √100 = 10. Hypotenusan är alltid den längsta sidan, så kontrollera att ditt svar överstiger båda kateterna.",
        "question": "Hur hittar man hypotenusan?"
      },
      {
        "answer": "Kvadrera hypotenusan och den kända kateten, subtrahera katetens kvadrat från hypotenusans kvadrat och dra kvadratroten. För hypotenusan 13 och kateten 5: 169 − 25 = 144, √144 = 12. Resultatet måste vara kortare än hypotenusan.",
        "question": "Hur hittar man en saknad katet?"
      },
      {
        "answer": "Formeln är a² + b² = c², där a och b är kateterna (sidorna som bildar den räta vinkeln) och c är hypotenusan (sidan mitt emot den räta vinkeln). Detta samband gäller för varje rätvinklig triangel.",
        "question": "Vad är formeln för Pythagoras sats?"
      },
      {
        "answer": "Ja. Hypotenusan spänner över det största avståndet mellan hörnen, mitt emot den största vinkeln (90 grader). I varje triangel ligger den längsta sidan mitt emot den största vinkeln. Om din beräknade hypotenusa är kortare än en katet, kontrollera dina inmatningar.",
        "question": "Är hypotenusan alltid den längsta sidan?"
      },
      {
        "answer": "Nej, bara på rätvinkliga trianglar. Satsen bygger på 90-gradersvinkeln. För spetsvinkliga eller trubbvinkliga trianglar, använd cosinussatsen. Att tillämpa Pythagoras på en icke-rätvinklig triangel ger felaktiga resultat.",
        "question": "Kan man använda Pythagoras sats på vilken triangel som helst?"
      },
      {
        "answer": "Decimaler är normala; de flesta rätvinkliga trianglar har inte heltalssidor. Beräkna med full precision och avrunda sedan slutsvaret till att matcha dina måtts precision. Till exempel är √42.25 = 6.5 exakt, men √50 ≈ 7.071 kräver avrundning.",
        "question": "Vad händer om svaret är ett decimaltal?"
      },
      {
        "answer": "Ja. Detta är den likbenta 45-45-90-triangeln, där kateterna är lika och hypotenusan är lika med kateten × √2. För kateter på 5 är hypotenusan 5√2 ≈ 7.071.",
        "question": "Kan en rätvinklig triangel ha två lika kateter?"
      },
      {
        "answer": "Inmatningarna är ogiltiga. Hypotenusan måste vara den längsta sidan. Du har troligen förväxlat beteckningarna; sätt det längsta måttet som hypotenusan (c) och beräkna om.",
        "question": "Vad gör man om hypotenusan är mindre än en känd katet?"
      },
      {
        "answer": "Ja, men inte med enbart Pythagoras sats. Använd trigonometriska kvoter: sinus, cosinus eller tangens relaterar den kända sidan och vinkeln till den okända sidan. Denna webbplats erbjuder en dedikerad kalkylator för sida-från-vinkel-problem.",
        "question": "Kan jag beräkna en saknad sida med en vinkel och en sida?"
      },
      {
        "answer": "Sätt tillbaka alla tre sidorna i a² + b² = c². Bekräfta att hypotenusan är längst. Kontrollera om talen bildar en känd pythagoreisk trippel. Uppskatta att hypotenusan hamnar mellan den längre kateten och summan av båda kateterna.",
        "question": "Hur kan jag kontrollera att mitt svar är korrekt?"
      }
    ],
    "relatedHeading": "Andra kalkylatorer för rätvinkliga trianglar som du kan ha nytta av",
    "relatedIntro": "När du har hittat din saknade sida, fortsätt med dessa relaterade kalkylatorer för att slutföra din triangelanalys.",
    "relatedItems": [
      "Rätvinklig triangelkalkylator",
      "Vinkelkalkylator för rätvinklig triangel",
      "Rätvinklig triangel: sidokalkylator med vinkel",
      "Areakalkylator för rätvinklig triangel",
      "Kalkylator för omkrets och semiperimeter i rätvinklig triangel",
      "Kalkylator för speciella rätvinkliga trianglar",
      "Kalkylator för pythagoreiska tripplar"
    ],
    "sections": {
      "side-intro": {
        "h2": "Så hittar du en saknad sida i en rätvinklig triangel",
        "paragraphs": [
          "En sidokalkylator för rätvinkliga trianglar hittar den okända längden i en rätvinklig triangel när du känner till de andra två sidorna. Vanliga användningsområden är att mäta rumsdiagonaler, kontrollera stödreglar eller verifiera läxsvar. Kalkylatorn behöver exakt två sidolängder för att fungera. Den tillämpar Pythagoras sats, som beskriver sambandet mellan de tre sidorna i varje rätvinklig triangel. Att hitta hypotenusan använder addition under ett rottecken, medan en saknad katet kräver subtraktion. Metoden fungerar bara för rätvinkliga trianglar, eftersom sambandet bygger på 90-gradersvinkeln. Till exempel har en rätvinklig triangel med vinkelräta sidor på 6 cm och 8 cm hypotenusan 10 cm. Samma princip mäter verkliga avstånd, från stegars längd till skärmdiagonaler."
        ]
      },
      "side-anatomy": {
        "figcaption": "Delarna av en rätvinklig triangel: kateterna a och b bildar den räta vinkeln vid C, hypotenusan c ligger mitt emot, med de spetsiga vinklarna A och B.",
        "h2": "Förstå de tre sidorna i en rätvinklig triangel",
        "h3s": [
          "Vad är en rätvinklig triangel?",
          "Vad är hypotenusan?",
          "Vad är de två kateterna?",
          "Hur identifierar man rätt sida?"
        ],
        "imgAlt": "Märkt rätvinklig triangel som visar kateterna a och b, hypotenusan c, rät vinkel vid C, samt de spetsiga vinklarna A och B",
        "paragraphs": [
          "En rätvinklig triangel innehåller en vinkel som mäter exakt 90 grader, precis som hörnet på en kvadrat eller rektangel. De andra två vinklarna måste vara spetsiga, det vill säga var och en mindre än 90 grader. Eftersom vinklarna i en triangel summerar till 180 grader blir de två icke-räta vinklarna tillsammans 90 grader. Detta skiljer sig från spetsvinkliga trianglar (alla vinklar under 90°) och trubbvinkliga trianglar (en vinkel över 90°). Den räta vinkeln skapar det vinkelräta sambandet bakom Pythagoras sats.",
          "Hypotenusan ligger mitt emot den räta vinkeln och sträcker sig tvärs över från 90-gradershörnet. Den är alltid den längsta sidan eftersom den spänner över det största avståndet mellan två hörn. I roterade diagram är den sida som inte vidrör markeringen för den räta vinkeln hypotenusan. Kalkylatorn betecknar den med c, enligt den vanliga konventionen där c står för hypotenusan i formeln [[a^2 + b^2 = c^2]].",
          "Kateterna är de två sidor som bildar den räta vinkeln och möts i 90 grader. De betecknas a och b i kalkylatorn. Att byta beteckningar ändrar inte hypotenusan, eftersom a² + b² är lika med b² + a². Kalkylatorn håller dem åtskilda så att lägena för saknad katet vet vilken katet som ska lösas ut. När du känner till båda kateterna fungerar vilken ordning som helst för att hitta hypotenusan.",
          "Hitta markeringen för den räta vinkeln (den lilla kvadraten). Den motsatta sidan är hypotenusan; de två sidor som vidrör den är kateterna. I roterade diagram kan du föreställa dig att du vrider triangeln tills den räta vinkeln sitter längst ner till vänster med ena kateten horisontellt och den andra vertikalt. Utan en markering för den räta vinkeln, bekräfta att triangeln är rätvinklig innan du använder kalkylatorn."
        ]
      },
      "side-pythagoras": {
        "figcaption": "Visuellt bevis: kvadraterna på 9 och 16 areaenheter på kateterna blir tillsammans 25 areaenheter på kvadraten på hypotenusan.",
        "h2": "Hur Pythagoras sats beräknar triangelsidor",
        "h3s": [
          "Förstå varför formeln fungerar"
        ],
        "imgAlt": "Rätvinklig 3-4-5-triangel med kvadrater på varje sida märkta 9, 16 och 25 areaenheter som visar att 9 plus 16 är lika med 25",
        "paragraphs": [
          "Pythagoras sats säger att [[a^2 + b^2 = c^2]], där a och b är kateterna och c är hypotenusan. Varje variabel är en sidolängd. Att kvadrera innebär att multiplicera ett tal med sig självt (6² = 36); kvadratroten upphäver detta (√100 = 10). Du drar roten eftersom formeln beskriver sambandet mellan kvadrerade längder, inte längderna själva. Att addera kateterna (6 + 8 = 14) är fel; addera deras kvadrater (36 + 64 = 100) och dra sedan roten. Satsen kräver den räta vinkeln; icke-rätvinkliga trianglar kräver cosinussatsen. Kalkylatorns tre lägen är omformuleringar av denna ekvation: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]].",
          "Rita en kvadrat på varje sida: areorna a², b² och c². Satsen säger att de två mindre areorna tillsammans blir den största. För 3-4-5: kvadraterna på 9 och 16 areaenheter blir tillsammans 25, arean på kvadraten på hypotenusan. Att kvadrera spelar roll eftersom du jämför areor, inte längder."
        ]
      },
      "side-hypotenuse": {
        "displayEquations": [
          "[[[c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}]]]",
          "[[[c = \\sqrt{2.5^2 + 6^2} = \\sqrt{6.25 + 36} = \\sqrt{42.25} = 6.5\\text{ m}]]]"
        ],
        "h2": "Så hittar du hypotenusan med två kateter",
        "h3s": [
          "Exempel 1: Hitta hypotenusan i en 6-8-triangel",
          "Exempel 2: Hitta en hypotenusa med decimalmått",
          "När ska du använda detta kalkylatorläge?"
        ],
        "paragraphs": [
          "Att lösa [[a^2 + b^2 = c^2]] för c ger [[c = \\sqrt{a^2 + b^2}]]. Arbetsgången: identifiera båda kateterna, kvadrera var och en, addera kvadraterna, dra roten, skriv enheten och bekräfta att resultatet överstiger båda kateterna.",
          "Givet kateterna a = 6 cm och b = 8 cm: kvadrera var och en (36 och 64), addera (100), dra roten (10). Hypotenusan är 10 cm, längre än båda kateterna som förväntat.",
          "Givet a = 2.5 m, b = 6 m: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Decimaler kräver noggrann aritmetik; behåll full precision tills den slutliga avrundningen.",
          "Använd hypotenusaläget med två kända kateter: rumsdiagonaler, stödreglar eller geometriuppgifter med vinkelräta sidor. Med hypotenusan plus en katet byter du till läget för saknad katet."
        ]
      },
      "side-leg": {
        "displayEquations": [
          "[[[b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}]]]",
          "[[[a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ tum}]]]"
        ],
        "figcaption": "Två beräkningar av saknad katet: att hitta b från 5-12-13-triangeln och att hitta a från 8-15-17-triangeln.",
        "h2": "Så hittar du en saknad katet i en rätvinklig triangel",
        "h3s": [
          "Hitta kateten b när hypotenusan c och kateten a är kända",
          "Exempel 3: Hitta kateten b från en hypotenusa på 13 cm",
          "Hitta kateten a när hypotenusan c och kateten b är kända",
          "Exempel 4: Hitta den okända kateten"
        ],
        "imgAlt": "Delat diagram som visar två rätvinkliga trianglar där saknade kateter löses ut med Pythagoras sats",
        "paragraphs": [
          "När du känner till hypotenusan och en katet omformulerar du Pythagoras sats för att isolera den okända kateten. Utgå från [[a^2 + b^2 = c^2]] och subtrahera den kända kateten i kvadrat från båda led. Det ger två formler, en för varje katet.",
          "Formeln är [[b = \\sqrt{c^2 - a^2}]]. Härled den: börja med [[a^2 + b^2 = c^2]], subtrahera a² från båda led för att få [[b^2 = c^2 - a^2]] och dra sedan kvadratroten. Subtraktionen speglar att hypotenusan i kvadrat innehåller båda kateternas kvadrater, så när en tas bort återstår den andra.",
          "Givet c = 13 cm och a = 5 cm, hitta kateten b. Kvadrera båda: 13² = 169 och 5² = 25. Subtrahera: 169 − 25 = 144. Dra roten: √144 = 12. Kateten b mäter 12 cm. Kontrollera: 5² + 12² = 25 + 144 = 169 = 13². Trippeln 5-12-13 bekräftar resultatet.",
          "Formeln är [[a = \\sqrt{c^2 - b^2}]]. Kateterna är utbytbara i det pythagoreiska sambandet; att beteckna den ena som a och den andra som b är en konvention. Kalkylatorn erbjuder båda lägena så att du kan matcha fältetiketter till just ditt problem utan att mentalt byta variabler.",
          "Givet c = 17 tum och b = 15 tum, hitta kateten a. Kvadrera: 17² = 289 och 15² = 225. Subtrahera: 289 − 225 = 64. Dra roten: √64 = 8. Kateten a är 8 tum. Detta är 8-15-17-trippeln. De två lägena för saknad katet skiljer sig bara i vilken katet som är känd; matematiken är identisk."
        ],
        "table": [
          [
            "c = 13, a = 5",
            "b",
            "b = √(c² − a²)",
            "Saknad katet från c och a"
          ],
          [
            "c = 17, b = 15",
            "a",
            "a = √(c² − b²)",
            "Saknad katet från c och b"
          ]
        ],
        "tableHeaders": [
          "Känd",
          "Sök",
          "Formel",
          "Kalkylatorläge"
        ]
      },
      "side-howto": {
        "h2": "Så använder du kalkylatorn för rätvinkliga trianglers sidor",
        "note": "Kalkylatorn sparar inte resultat och genererar inte nedladdningsbara rapporter. Använd återställningsalternativet för att rensa fälten inför en ny beräkning.",
        "steps": [
          "Identifiera de två mått du känner till. De måste båda vara sidolängder, inte vinklar.",
          "Avgör om det saknade värdet är hypotenusan eller en katet. Om du känner till båda kateterna behöver du hypotenusan. Om du känner till hypotenusan och en katet behöver du den andra kateten.",
          "Välj rätt läge. Välj \"Pythagoras sats\" för två kända kateter, \"Saknad katet från c och a\" när du känner till hypotenusan och kateten a, eller \"Saknad katet från c och b\" när du känner till hypotenusan och kateten b.",
          "Mata in båda måtten i sina matchande fält. Dubbelkolla att varje värde hamnar i rätt fält; att förväxla hypotenusan med en katet ger ett fel.",
          "Välj måttenhet. Använd samma enhet för båda inmatningarna.",
          "Beräkna. Resultatet visas med lösningsstegen som visar substitutionen och aritmetiken.",
          "Granska resultatet och stegen. Bekräfta att formeln stämmer med din situation och att aritmetiken ser korrekt ut.",
          "Kontrollera att svaret är rimligt. Hypotenusan måste överstiga båda kateterna. En saknad katet måste vara kortare än hypotenusan. Om detta inte stämmer, kontrollera dina inmatningar."
        ]
      },
      "side-formulas": {
        "h2": "Formler för rätvinkliga trianglers sidor i korthet",
        "paragraph": "Du behöver inte memorera tre separata formler. Kom bara ihåg [[a^2 + b^2 = c^2]] och lös sedan ut den okända. Om c är okänd, addera kateternas kvadrater och dra roten. Om en katet är okänd, subtrahera den kända kateten i kvadrat från c² och dra roten. Kalkylatorlägens namn talar om vilken variant du ska använda.",
        "table": [
          [
            "Kateterna a och b",
            "Hypotenusan c",
            "c = √(a² + b²)",
            "Pythagoras sats",
            "a=6, b=8 → c=10"
          ],
          [
            "Hypotenusan c, kateten a",
            "Kateten b",
            "b = √(c² − a²)",
            "Saknad katet från c och a",
            "c=13, a=5 → b=12"
          ],
          [
            "Hypotenusan c, kateten b",
            "Kateten a",
            "a = √(c² − b²)",
            "Saknad katet från c och b",
            "c=17, b=15 → a=8"
          ]
        ],
        "tableHeaders": [
          "Kända mått",
          "Saknad sida",
          "Formel",
          "Kalkylatorläge",
          "Exempel"
        ]
      },
      "side-applications": {
        "figcaption": "Vardagliga rätvinkliga trianglar: stege (3 m), rumsdiagonal (15 fot), takbalk (13 fot) och trädgårdsgång (50 fot).",
        "h2": "Verkliga exempel på sidoberäkningar i rätvinkliga trianglar",
        "h3s": [
          "Exempel 5: Stege mot en vägg",
          "Exempel 6: Diagonal i ett rektangulärt rum",
          "Exempel 7: Takbalkens längd",
          "Exempel 8: TV- eller skärmdiagonal",
          "Exempel 9: Mäta en ramp",
          "Exempel 10: Diagonal trädgårdsgång",
          "Exempel 11: Stödstag med känd diagonal",
          "Exempel 12: Teknisk ritning med decimalvärden"
        ],
        "imgAlt": "Fyra paneler som visar stege mot vägg, rumsdiagonal, takbalk och trädgårdsgång med rätvinkliga triangel-mått",
        "paragraphs": [
          "En stege når 2.4 m vertikalt upp längs en vägg, med basen 1.8 m från väggen. Väggen och marken bildar en rät vinkel, vilket skapar en rätvinklig triangel där stegen är hypotenusan. Känt: a = 1.8 m (bas), b = 2.4 m (höjd). Sök: c (stegens längd). Formel: [[c = \\sqrt{a^2 + b^2}]]. Sätt in: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. Stegen mäter 3 m. Detta talar om vilken stegeslängd som behövs för att nå den höjden på det avståndet. Obs: denna geometri bedömer inte stegsäkerhet; följ tillverkarens riktlinjer och säkerhetsföreskrifter vid verklig användning.",
          "Ett rum är 9 fot långt och 12 fot brett. Diagonalen mellan motsatta hörn bildar hypotenusan i en rätvinklig triangel med väggarna som kateter. Känt: a = 9 fot, b = 12 fot. Sök: c. Formel: c = √(9² + 12²) = √(81 + 144) = √225 = 15. Diagonalen är 15 fot. Detta hjälper när man kontrollerar om ett rum är kvadratiskt (båda diagonalerna ska matcha) eller bestämmer den längsta raka linjen för möbelplacering.",
          "Ett förenklat taktvärsnitt har en horisontell spännvidd på 12 fot och en vertikal höjd på 5 fot. Takbalken bildar hypotenusan. Känt: spännvidd = 12 fot, höjd = 5 fot. Sök: balkens längd. Formel: c = √(12² + 5²) = √(144 + 25) = √169 = 13. Balken är 13 fot lång. Denna grundläggande beräkning utesluter överhäng, nocktjocklek och infästningstillägg som verkligt byggande kräver. Konsultera bygghandlingarna för fullständiga specifikationer.",
          "En rektangulär skärm mäter 16 tum på bredden och 9 tum på höjden. Diagonalen är hypotenusan. Känt: bredd = 16 tum, höjd = 9 tum. Sök: diagonal. Formel: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. Diagonalen mäter cirka 18.36 tum. Detta använder de angivna måtten; kommersiella skärmstorlekar kan skilja sig beroende på tillverkarens mätmetoder.",
          "En ramp har en horisontell längd på 6 m och en höjd på 0.75 m. Den lutande ytan är hypotenusan. Känt: längd = 6 m, höjd = 0.75 m. Sök: lutningens längd. Formel: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. Lutningen mäter cirka 6.05 m. Den horisontella längden (6 m) skiljer sig från lutningens längd (6.05 m); lutningen är alltid lite längre. Detta verifierar inte tillgänglighetskrav; kontrollera lokala byggregler för ramper.",
          "En rektangulär trädgård är 30 fot bred och 40 fot lång. En diagonal gång skär tvärs över. Känt: a = 30 fot, b = 40 fot. Sök: gångens längd. Formel: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. Gången är 50 fot. Att gå diagonalen (50 fot) är kortare än att gå längs två sidor (70 fot), vilket är varför diagonalgångar sparar tid.",
          "Ett stödstag mäter 10 fot (hypotenusan) och spänner 8 fot horisontellt. Hitta det vertikala avståndet. Känt: c = 10 fot, a = 8 fot. Sök: b. Formel: b = √(c² − a²) = √(100 − 64) = √36 = 6. Det vertikala avståndet är 6 fot. Subtraktion är nödvändig eftersom hypotenusan i kvadrat innehåller båda kateternas kvadrater; att ta bort den kända horisontella komponenten lämnar den vertikala.",
          "En fästesritning anger en hypotenusa på 250 mm och en katet på 70 mm. Hitta den andra kateten. Känt: c = 250 mm, b = 70 mm. Sök: a. Formel: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. Kateten mäter 240 mm. Med millimetermått är resultatet exakt här, men avrunda i praktiken till precisionen på ditt minst precisa mått. Rapportera inte fler decimaler än dina verktyg kan mäta."
        ]
      },
      "side-triples": {
        "h2": "Vanliga pythagoreiska tripplar och varför de spelar roll",
        "paragraphs": [
          "En pythagoreisk trippel består av tre heltal som uppfyller [[a^2 + b^2 = c^2]]. Dessa tripplar ger snabba mentala kontroller; om dina inmatningar matchar en trippel vet du svaret utan att beräkna. Skalade tripplar fungerar också: att multiplicera 3-4-5 med 2 ger 6-8-10, vilket fortfarande uppfyller ekvationen (36 + 64 = 100). Inte varje rätvinklig triangel har heltalssidor; de flesta ger decimaler eller irrationella tal.",
          "Verifiera 5-12-13: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. Verifiera 8-15-17: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. När kalkylatorn returnerar ett heltal, kontrollera om det bildar en trippel med dina inmatningar som en rimlighetskontroll."
        ],
        "table": [
          [
            "3-4-5",
            "9 + 16 = 25 ✓"
          ],
          [
            "5-12-13",
            "25 + 144 = 169 ✓"
          ],
          [
            "8-15-17",
            "64 + 225 = 289 ✓"
          ],
          [
            "7-24-25",
            "49 + 576 = 625 ✓"
          ],
          [
            "9-40-41",
            "81 + 1600 = 1681 ✓"
          ],
          [
            "6-8-10",
            "36 + 64 = 100 ✓ (skalad 3-4-5)"
          ]
        ],
        "tableHeaders": [
          "Trippel",
          "Verifiering"
        ]
      },
      "side-units": {
        "h2": "Måttenheter, decimalsvar och avrundning",
        "paragraphs": [
          "Använd konsekventa enheter: millimeter, centimeter, meter, tum, fot, yard eller kilometer. Blandade enheter ger fel svar; 3 fot och 6 tum måste bli 3.5 fot eller 42 tum före beräkningen. Konvertera först, beräkna sedan. Välj matchande enhet i kalkylatorn för båda inmatningarna. Avrunda först efter den slutliga beräkningen, inte under mellanstegen, för att undvika ackumulerade fel. Ett exakt svar som 10 cm skiljer sig från ett avrundat decimaltal som 6.50 m; det senare antyder mätprecision. Ditt resultat kan inte vara mer precist än ditt minst precisa mått. Om du mäter till närmaste centimeter, rapportera inte millimeter.",
          "Exempel med fot och tum: en bräda mäter 2 fot 6 tum gånger 3 fot. Konvertera till tum: 30 tum och 36 tum. Beräkna: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 tum. Konvertera tillbaka: 46.86 tum = 3 fot 10.86 tum, eller cirka 3 fot 10.9 tum.",
          "Obs: att kvadrera en längd ger areaenheter (cm²), men den slutliga kvadratroten återger linjära enheter (cm). Kalkylatorn hanterar detta automatiskt."
        ]
      },
      "side-invalid": {
        "h2": "Varför vissa triangel-mått inte kan ge ett giltigt svar",
        "paragraphs": [
          "En giltig rätvinklig triangel behöver tre positiva sidolängder där hypotenusan överstiger varje katet. För beräkningar av saknad katet måste värdet under rottecknet (c² − katet²) vara positivt.",
          "Ogiltigt: c = 8, a = 10. Hypotenusan (8) är kortare än kateten (10). Detta bryter mot regeln att hypotenusan är längst. Du har troligen förväxlat beteckningarna; 10 bör vara hypotenusan.",
          "Ogiltigt: c = 5, a = 5. Då blir b = √(25 − 25) = √0 = 0. En sida med längden noll kollapsar triangeln till ett linjesegment, inte en giltig triangel.",
          "Ogiltigt: a = −3, b = 4. Negativa längder har ingen geometrisk betydelse. Sidolängder måste vara positiva."
        ],
        "table": [
          [
            "Hypotenusan kortare än kateten",
            "Beteckningarna förväxlade",
            "Sätt den längsta sidan som c"
          ],
          [
            "Noll under rottecknet",
            "c är lika med den kända kateten",
            "Kontrollera måtten; triangeln är degenererad"
          ],
          [
            "Negativt under rottecknet",
            "c kortare än den kända kateten",
            "Inmatningarna kan inte bilda en rätvinklig triangel"
          ],
          [
            "Negativ inmatning",
            "Skrivfel eller teckenfel",
            "Använd endast positiva längder"
          ],
          [
            "Nollinmatning",
            "Mått saknas",
            "Ange den verkliga längden"
          ],
          [
            "Felaktigt blandade enheter",
            "Fot med tum",
            "Konvertera till en enhet först"
          ],
          [
            "Icke-rätvinklig triangel",
            "Ingen 90°-vinkel",
            "Använd cosinussatsen i stället"
          ]
        ],
        "tableHeaders": [
          "Problem",
          "Orsak",
          "Åtgärd"
        ]
      },
      "side-verify": {
        "h2": "Så kontrollerar du att din beräknade sida är korrekt",
        "paragraphs": [
          "Metod 1: Sätt tillbaka. Sätt in alla tre sidorna i [[a^2 + b^2 = c^2]]. För 6-8-10-triangeln: 36 + 64 = 100. Om båda led stämmer är svaret korrekt.",
          "Metod 2: Kontrollera att hypotenusan är längst. Om du löste ut c, bekräfta att den överstiger både a och b. Om du löste ut en katet, bekräfta att den är kortare än c.",
          "Metod 3: Jämför med tripplar. Om dina inmatningar är heltal, se om de bildar en känd trippel. Inmatningarna 9 och 12 som ger 15 matchar den skalade 3-4-5-trippeln.",
          "Metod 4: Uppskatta rimligheten. Hypotenusan bör vara längre än vardera kateten men kortare än deras summa. För kateterna 6 och 8 uppfyller hypotenusan 10 att 8 < 10 < 14.",
          "Metod 5: Kontrollera enheter och avrundning. Bekräfta att enheten stämmer med dina inmatningar och att decimalerna speglar din mätprecision.",
          "Kontrollexempel 1: Du beräknar c = 13 från a = 5, b = 12. Kontroll: 5² + 12² = 25 + 144 = 169 = 13². Hypotenusan 13 överstiger båda kateterna. Detta matchar 5-12-13-trippeln. Giltigt.",
          "Kontrollexempel 2: Du beräknar b = 7.5 från c = 12.5, a = 10. Kontroll: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². Kateten 7.5 är kortare än hypotenusan 12.5. Uppskattning: 10 < 12.5 < 20. Giltigt."
        ]
      },
      "side-mistakes": {
        "h2": "Vanliga misstag vid beräkning av rätvinkliga trianglers sidor",
        "paragraphs": [
          "1. Att addera kateterna i stället för deras kvadrater. Att beräkna 6 + 8 = 14 i stället för √(36 + 64) = 10. Satsen adderar kvadrerade areor, inte längder. Kvadrera alltid först.",
          "2. Att glömma kvadratroten. Att svara 100 i stället för 10 för 6-8-triangeln. Formeln ger c²; du behöver c. Dra roten som sista steg.",
          "3. Att subtrahera när hypotenusan söks. Att använda √(64 − 36) = √28 i stället för √(64 + 36) = 10. Addition gäller när hypotenusan söks från två kateter.",
          "4. Att addera när en saknad katet söks. Att använda √(169 + 25) i stället för √(169 − 25) = 12. Subtraktion gäller när hypotenusan är känd.",
          "5. Att missta en katet för hypotenusan. Att beteckna den längsta sidan som a eller b. Hypotenusan ligger alltid mitt emot den räta vinkeln och betecknas alltid c.",
          "6. Att tillämpa satsen på en icke-rätvinklig triangel. Att använda a² + b² = c² utan en 90-gradersvinkel. Verifiera den räta vinkeln först.",
          "7. Att avrunda mellanberäkningar. Att avrunda 6.25 till 6.3 mitt i beräkningen och sedan få ett något felaktigt slutresultat. Behåll full precision till slutet.",
          "8. Att blanda måttenheter. Att mata in 3 fot och 6 tum som 3 och 6. Konvertera till en enda enhet före beräkning.",
          "9. Att mata in värden i fel fält. Att placera hypotenusan i ett katetfält. Matcha varje mått till rätt beteckning.",
          "10. Att misstolka ett negativt tal under roten. Att se √(25 − 36) och tvinga fram en beräkning. En negativ radikand betyder att inmatningarna inte kan bilda en rätvinklig triangel; kontrollera dina beteckningar."
        ]
      },
      "side-beyond": {
        "h2": "När behöver du en annan formel för rätvinkliga trianglar?",
        "linkAnchorText": "Rätvinklig triangel: sidokalkylator med vinkel",
        "paragraphs": [
          "Pythagoras sats kräver två kända sidor. Annan information kräver andra verktyg.",
          "En sida och en spetsig vinkel: Använd sinus, cosinus eller tangens. Sinus relaterar motstående katet till hypotenusan, cosinus relaterar närliggande katet till hypotenusan och tangens relaterar motstående till närliggande katet. Till exempel, med hypotenusan c och vinkeln A, kateten a = c × sin(A).",
          "Två vinklar, inga sidor: Omöjligt. Vinklar bestämmer form men inte storlek; en 3-4-5-triangel och en 6-8-10-triangel delar vinklar men skiljer sig i skala. Du behöver minst en sidolängd.",
          "Icke-rätvinklig triangel: Använd cosinussatsen (c² = a² + b² − 2ab×cos(C)) eller sinussatsen. Pythagoras sats är ett specialfall av cosinussatsen när C = 90°.",
          "Speciella rätvinkliga trianglar: 45-45-90-triangeln har kateter i förhållandet 1:1:√2, och 30-60-90 har sidor i förhållandet 1:√3:2. Dessa möjliggör snabba huvudräkningar.",
          "Om du känner till en sida och en spetsig vinkel, använd Rätvinklig triangel: sidokalkylator med vinkel på denna webbplats."
        ]
      },
      "side-summary": {
        "h2": "Beräkna rätvinkliga trianglers sidor med säkerhet",
        "paragraphs": [
          "Identifiera först dina två kända sidor. Om båda är kateter behöver du hypotenusan; om en är hypotenusan behöver du den saknade kateten. Välj matchande formel eller kalkylatorläge. Mata in båda måtten i samma enhet. Beräkna och verifiera sedan: hypotenusan måste vara längst, och att sätta tillbaka i a² + b² = c² ska stämma. Kontrollera enheter och avrundning. Med dessa steg kan du lösa varje sidoproblem i rätvinkliga trianglar pålitligt. Återvänd till kalkylatorn överst på sidan för att köra dina tal."
        ]
      }
    },
    "tocHeading": "I den här guiden",
    "tocItems": {
      "side-intro": "Så hittar du en saknad sida",
      "side-anatomy": "Förstå de tre sidorna",
      "side-pythagoras": "Pythagoras sats",
      "side-hypotenuse": "Hitta hypotenusan",
      "side-leg": "Hitta en saknad katet",
      "side-howto": "Använd kalkylatorn",
      "side-formulas": "Formler i korthet",
      "side-applications": "Exempel från verkligheten",
      "side-triples": "Pythagoreiska tripplar",
      "side-units": "Enheter och precision",
      "side-invalid": "Ogiltiga inmatningar",
      "side-verify": "Kontrollera ditt svar",
      "side-mistakes": "Vanliga misstag",
      "side-beyond": "När Pythagoras inte räcker",
      "side-related": "Relaterade kalkylatorer",
      "side-faq": "Vanliga frågor"
    }
  },
  "zh": {
    "tocHeading": "本指南目录",
    "tocItems": {
      "side-intro": "如何求直角三角形的缺失边",
      "side-anatomy": "认识直角三角形的三条边",
      "side-pythagoras": "勾股定理",
      "side-hypotenuse": "求斜边",
      "side-leg": "求缺失的直角边",
      "side-howto": "使用计算器",
      "side-formulas": "公式一览",
      "side-applications": "生活中的实例",
      "side-triples": "勾股数",
      "side-units": "单位与精度",
      "side-invalid": "无效输入",
      "side-verify": "验证答案",
      "side-mistakes": "常见错误",
      "side-beyond": "当勾股定理不够用时",
      "side-related": "相关计算器",
      "side-faq": "常见问题"
    },
    "sections": {
      "side-intro": {
        "h2": "如何求直角三角形的缺失边",
        "paragraphs": [
          "直角三角形边长计算器可以在已知另外两条边的情况下，求出直角三角形中未知边的长度。常见用途包括测量房间对角线、检查支撑梁，或核对作业答案。计算器正常工作需要恰好两个边长。它使用的是勾股定理，这条定理描述了所有直角三角形三条边的关系。求斜边时用的是加法开平方，求缺失直角边时用的是减法。这个方法只适用于直角三角形，因为这个关系依赖于 90 度角。例如，一个两条垂直边分别为 6 厘米和 8 厘米的直角三角形，斜边长为 10 厘米。同样的原理可以测量真实世界中的距离，从梯子长度到屏幕对角线。"
        ]
      },
      "side-anatomy": {
        "h2": "认识直角三角形的三条边",
        "h3s": [
          "什么是直角三角形？",
          "什么是斜边？",
          "两条直角边是什么？",
          "如何确定正确的边？"
        ],
        "paragraphs": [
          "直角三角形含有一个恰好为 90 度的角，就像正方形或长方形的角一样。另外两个角必须是锐角，即每个角都小于 90 度。由于三角形内角和为 180 度，两个非直角的角之和为 90 度。这与锐角三角形（所有角都小于 90°）和钝角三角形（一个角大于 90°）不同。直角形成了勾股定理背后的垂直关系。",
          "斜边位于直角对面，横跨 90 度角所在的顶点。因为它连接的两个顶点之间距离最远，所以它始终是最长的边。在旋转后的图形中，不接触直角标记的那条边就是斜边。本计算器把它记为 c，遵循标准约定，即公式 [[a^2 + b^2 = c^2]] 中的 c 表示斜边。",
          "直角边是构成直角的两条边，在 90 度处相交。在本计算器中它们分别记为 a 和 b。交换标记不会改变斜边，因为 a² + b² 等于 b² + a²。计算器把它们分开记录，是为了在“求缺失直角边”模式下知道要求解的是哪条直角边。已知两条直角边时，用任一顺序求斜边都可以。",
          "先找到直角标记（那个小正方形）。对面的边是斜边，与之相连的两条边是直角边。对于旋转后的图形，可以想象把三角形转到直角位于左下角、一条直角边水平、另一条垂直的位置。如果没有直角标记，请先确认三角形是直角三角形，再使用本计算器。"
        ],
        "figcaption": "直角三角形的组成部分：直角边 a 和 b 在 C 点形成直角，斜边 c 位于对面，A 和 B 为锐角。",
        "imgAlt": "标注好的直角三角形，显示直角边 a 和 b、斜边 c，C 处为直角，A 和 B 为锐角"
      },
      "side-pythagoras": {
        "h2": "勾股定理如何计算三角形边长",
        "h3s": [
          "理解公式为什么成立"
        ],
        "paragraphs": [
          "勾股定理指出 [[a^2 + b^2 = c^2]]，其中 a 和 b 是直角边，c 是斜边。每个变量都表示一条边的长度。平方就是一个数乘以它自身（6² = 36），开平方是逆运算（√100 = 10）。之所以要开平方，是因为公式描述的是平方后的长度之间的关系，而不是长度本身。把直角边长度直接相加（6 + 8 = 14）是错的，应该把它们的平方相加（36 + 64 = 100），再开平方。这条定理需要 90 度角，非直角三角形要用余弦定理。计算器的三种模式都是对这个方程的变形：[[c = \\sqrt{a^2 + b^2}]]、[[b = \\sqrt{c^2 - a^2}]]、[[a = \\sqrt{c^2 - b^2}]]。",
          "在每条边上各画一个正方形，面积分别为 a²、b² 和 c²。定理说的是两个较小的面积相加等于最大的面积。对于 3-4-5：面积为 9 和 16 平方单位的正方形相加得到 25，等于斜边上正方形的面积。之所以平方，是因为我们比较的是面积，而不是长度。"
        ],
        "figcaption": "直观证明：两条直角边上面积为 9 和 16 平方单位的正方形，合并后等于斜边上面积为 25 平方单位的正方形。",
        "imgAlt": "3-4-5 直角三角形，每条边上各画一个正方形，分别标注 9、16 和 25 平方单位，展示 9 加 16 等于 25"
      },
      "side-hypotenuse": {
        "h2": "如何用两条直角边求斜边",
        "h3s": [
          "例 1：求 6-8 直角三角形的斜边",
          "例 2：求带小数测量的斜边",
          "什么时候用这个计算器模式？"
        ],
        "paragraphs": [
          "把方程 [[a^2 + b^2 = c^2]] 解出 c，得到 [[c = \\sqrt{a^2 + b^2}]]。步骤是：确定两条直角边，分别平方，相加，开平方，写上单位，并确认结果大于两条直角边。",
          "已知直角边 a = 6 厘米，b = 8 厘米：分别平方（36 和 64），相加（100），开平方（10）。斜边为 10 厘米，符合预期，大于两条直角边。",
          "已知 a = 2.5 米，b = 6 米：2.5² + 6² = 6.25 + 36 = 42.25，√42.25 = 6.5 米。小数需要仔细计算，在最后一步四舍五入之前保持完整精度。",
          "当已知两条直角边时使用斜边模式：房间对角线、支撑斜梁，或者已知垂直边的几何题。已知斜边加一条直角边时，请切换到“求缺失直角边”模式。"
        ],
        "displayEquations": [
          "[[[c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ 厘米}]]]",
          "[[[c = \\sqrt{2.5^2 + 6^2} = \\sqrt{6.25 + 36} = \\sqrt{42.25} = 6.5\\text{ 米}]]]"
        ]
      },
      "side-leg": {
        "h2": "如何求直角三角形缺失的直角边",
        "h3s": [
          "已知斜边 c 和直角边 a，求直角边 b",
          "例 3：从 13 厘米的斜边求直角边 b",
          "已知斜边 c 和直角边 b，求直角边 a",
          "例 4：求未知的直角边"
        ],
        "paragraphs": [
          "已知斜边和一条直角边时，把勾股定理变形，分离出未知的直角边。从 [[a^2 + b^2 = c^2]] 出发，两边同时减去已知直角边的平方。这样得到两个公式，每条直角边各一个。",
          "公式是 [[b = \\sqrt{c^2 - a^2}]]。推导过程：从 [[a^2 + b^2 = c^2]] 开始，两边减去 a² 得到 [[b^2 = c^2 - a^2]]，再开平方。之所以是减法，是因为斜边的平方包含两条直角边的平方，去掉一条，剩下的就是另一条。",
          "已知 c = 13 厘米，a = 5 厘米，求直角边 b。两边分别平方：13² = 169，5² = 25。相减：169 − 25 = 144。开平方：√144 = 12。直角边 b 长 12 厘米。验证：5² + 12² = 25 + 144 = 169 = 13²。5-12-13 这组勾股数验证了结果。",
          "公式是 [[a = \\sqrt{c^2 - b^2}]]。在勾股关系中两条直角边可以互换，把一条记为 a、另一条记为 b 只是约定。计算器提供两种模式，是为了让你可以直接按题目对应字段输入，而不用在心里交换变量。",
          "已知 c = 17 英寸，b = 15 英寸，求直角边 a。平方：17² = 289，15² = 225。相减：289 − 225 = 64。开平方：√64 = 8。直角边 a 长 8 英寸。这是 8-15-17 勾股数。两种“求缺失直角边”模式的差别只在于已知的是哪条直角边，数学过程完全相同。"
        ],
        "tableHeaders": [
          "已知",
          "求",
          "公式",
          "计算器模式"
        ],
        "table": [
          [
            "c = 13，a = 5",
            "b",
            "b = √(c² − a²)",
            "求缺失直角边（已知 c 和 a）"
          ],
          [
            "c = 17，b = 15",
            "a",
            "a = √(c² − b²)",
            "求缺失直角边（已知 c 和 b）"
          ]
        ],
        "displayEquations": [
          "[[[b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ 厘米}]]]",
          "[[[a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ 英寸}]]]"
        ],
        "figcaption": "两个缺失直角边的计算：从 5-12-13 三角形求 b，从 8-15-17 三角形求 a。",
        "imgAlt": "并列示意图，展示两个用勾股定理求缺失直角边的直角三角形"
      },
      "side-howto": {
        "h2": "如何使用直角三角形边长计算器",
        "steps": [
          "确定你已知的两个测量值。它们必须是边长，不能是角度。",
          "判断未知的是斜边还是一条直角边。已知两条直角边，求的是斜边；已知斜边加一条直角边，求的是另一条直角边。",
          "选择正确的模式。已知两条直角边时选“勾股定理”，已知斜边和直角边 a 时选“求缺失直角边（已知 c 和 a）”，已知斜边和直角边 b 时选“求缺失直角边（已知 c 和 b）”。",
          "把两个测量值填入对应的输入框。仔细核对每个值都填对了位置，把斜边和直角边填反会报错。",
          "选择测量单位。两个输入要用同一个单位。",
          "计算。结果会连同解题步骤一起显示，展示代入和运算过程。",
          "检查结果和步骤。确认公式符合你的情况，运算过程正确。",
          "判断答案是否合理。斜边必须大于两条直角边，缺失的直角边必须小于斜边。如果不符合，重新检查输入。"
        ],
        "note": "计算器不会保存结果，也不会生成可下载的报告。换一道题时可以用重置选项清空输入框。"
      },
      "side-formulas": {
        "h2": "直角三角形边长公式一览",
        "tableHeaders": [
          "已知测量值",
          "缺失的边",
          "公式",
          "计算器模式",
          "示例"
        ],
        "table": [
          [
            "直角边 a 和 b",
            "斜边 c",
            "c = √(a² + b²)",
            "勾股定理",
            "a=6，b=8 → c=10"
          ],
          [
            "斜边 c，直角边 a",
            "直角边 b",
            "b = √(c² − a²)",
            "求缺失直角边（已知 c 和 a）",
            "c=13，a=5 → b=12"
          ],
          [
            "斜边 c，直角边 b",
            "直角边 a",
            "a = √(c² − b²)",
            "求缺失直角边（已知 c 和 b）",
            "c=17，b=15 → a=8"
          ]
        ],
        "paragraph": "不需要背三个公式。记住 [[a^2 + b^2 = c^2]] 这一个，然后解出未知数即可。未知的是 c，就把直角边平方相加再开平方；未知的是某条直角边，就从 c² 中减去已知直角边的平方再开平方。计算器的模式名称会告诉你用哪一种变形。"
      },
      "side-applications": {
        "h2": "直角三角形边长计算的真实实例",
        "h3s": [
          "例 5：梯子靠墙",
          "例 6：长方形房间的对角线",
          "例 7：屋顶椽子长度",
          "例 8：电视或显示器对角线",
          "例 9：测量坡道",
          "例 10：长方形花园小路",
          "例 11：已知对角线的支撑斜梁",
          "例 12：带小数的工程图纸"
        ],
        "paragraphs": [
          "一架梯子沿墙面竖直搭到 2.4 米高，梯脚离墙 1.8 米。墙面和地面成直角，构成一个直角三角形，梯子就是斜边。已知：a = 1.8 米（底边），b = 2.4 米（高度）。求：c（梯子长度）。公式：[[c = \\sqrt{a^2 + b^2}]]。代入：c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3。梯子长 3 米。这样就能知道在这种距离和高度下需要多长的梯子。注意：这个几何计算不评估梯子使用的安全性，实际使用请遵循厂家说明和安全规范。",
          "一个房间长 9 英尺、宽 12 英尺。对角两角之间的对角线就是以墙面为直角边的直角三角形的斜边。已知：a = 9 英尺，b = 12 英尺。求：c。公式：c = √(9² + 12²) = √(81 + 144) = √225 = 15。对角线长 15 英尺。这有助于检查房间是否方正（两条对角线应相等），或确定摆放家具时最长的直线距离。",
          "简化的屋顶剖面水平跨度为 12 英尺、垂直高度为 5 英尺，椽子构成斜边。已知：跨度 = 12 英尺，高度 = 5 英尺。求：椽子长度。公式：c = √(12² + 5²) = √(144 + 25) = √169 = 13。椽子长 13 英尺。这个基础计算不包括屋檐伸出、屋脊厚度和连接余量，实际施工请查阅建筑图纸。",
          "一块长方形显示屏宽 16 英寸、高 9 英寸，对角线就是斜边。已知：宽 = 16 英寸，高 = 9 英寸。求：对角线。公式：d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36。对角线约 18.36 英寸。这里用的是标注尺寸，市售屏幕尺寸可能因厂家测量方式而不同。",
          "一条坡道水平跨度为 6 米、高差为 0.75 米，斜坡面是斜边。已知：跨度 = 6 米，高差 = 0.75 米。求：坡面长度。公式：s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05。坡面约长 6.05 米。水平跨度（6 米）和坡面长度（6.05 米）不同，坡面总是略长一些。这不能验证无障碍合规性，坡道要求请查当地建筑规范。",
          "一个长方形花园宽 30 英尺、长 40 英尺，一条小路沿对角线穿过。已知：a = 30 英尺，b = 40 英尺。求：小路长度。公式：c = √(30² + 40²) = √(900 + 1600) = √2500 = 50。小路长 50 英尺。走对角线（50 英尺）比沿两条边走（70 英尺）短，这就是对角线小路省时间的原因。",
          "一根支撑斜梁长 10 英尺（斜边），水平跨度为 8 英尺。求垂直距离。已知：c = 10 英尺，a = 8 英尺。求：b。公式：b = √(c² − a²) = √(100 − 64) = √36 = 6。垂直距离为 6 英尺。必须用减法，因为斜边的平方包含两条直角边的平方，去掉已知的水平分量，剩下的就是垂直分量。",
          "一份支架设计图标注斜边为 250 毫米，一条直角边为 70 毫米。求另一条直角边。已知：c = 250 毫米，b = 70 毫米。求：a。公式：a = √(c² − b²) = √(62500 − 4900) = √57600 = 240。这条直角边长 240 毫米。用毫米输入时这里的结果是精确的，但实际操作中请按你精度最低的测量值四舍五入。不要报告超出测量工具精度的小数位数。"
        ],
        "figcaption": "日常生活中的直角三角形：梯子（3 米）、房间对角线（15 英尺）、屋顶椽子（13 英尺）、花园小路（50 英尺）。",
        "imgAlt": "四个分图，分别展示梯子靠墙、房间对角线、屋顶椽子和花园小路，标注直角三角形测量值"
      },
      "side-triples": {
        "h2": "常见的勾股数及其意义",
        "paragraphs": [
          "勾股数是满足 [[a^2 + b^2 = c^2]] 的三个整数。有了勾股数可以快速心算验证：如果输入正好是一组勾股数，不用计算就知道答案。成比例放大的勾股数同样成立：把 3-4-5 乘以 2 得到 6-8-10，仍然满足方程（36 + 64 = 100）。并非所有直角三角形的边都是整数，大多数会得到小数或无理数。",
          "验证 5-12-13：5² = 25，12² = 144，25 + 144 = 169，√169 = 13。验证 8-15-17：8² = 64，15² = 225，64 + 225 = 289，√289 = 17。当计算器给出整数结果时，可以检查它和输入是否构成勾股数，作为合理性验证。"
        ],
        "tableHeaders": [
          "勾股数",
          "验证"
        ],
        "table": [
          [
            "3-4-5",
            "9 + 16 = 25 ✓"
          ],
          [
            "5-12-13",
            "25 + 144 = 169 ✓"
          ],
          [
            "8-15-17",
            "64 + 225 = 289 ✓"
          ],
          [
            "7-24-25",
            "49 + 576 = 625 ✓"
          ],
          [
            "9-40-41",
            "81 + 1600 = 1681 ✓"
          ],
          [
            "6-8-10",
            "36 + 64 = 100 ✓（3-4-5 的两倍）"
          ]
        ]
      },
      "side-units": {
        "h2": "测量单位、小数答案与四舍五入",
        "paragraphs": [
          "使用统一的单位：毫米、厘米、米、英寸、英尺、码或千米。单位混用会得到错误答案，3 英尺和 6 英寸必须先换算成 3.5 英尺或 42 英寸再计算。先换算，后计算。两个输入都要在计算器中选择相同的单位。只在最后一步四舍五入，不要在中间步骤四舍五入，以免误差累积。精确答案如 10 厘米和四舍五入的小数如 6.50 米含义不同，后者暗示了测量精度。结果的精度不能超过你精度最低的输入。用厘米量，就不要报告毫米。",
          "英尺英寸混合的例子：一块板子尺寸为 2 英尺 6 英寸 × 3 英尺。换算成英寸：30 英寸和 36 英寸。计算：c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 英寸。换算回去：46.86 英寸 = 3 英尺 10.86 英寸，约 3 英尺 10.9 英寸。",
          "注意：长度平方得到的是平方单位（平方厘米），但最后开平方后回到长度单位（厘米）。计算器会自动处理。"
        ]
      },
      "side-invalid": {
        "h2": "为什么有些三角形测量值算不出有效答案",
        "paragraphs": [
          "有效的直角三角形需要三条为正的边长，且斜边大于每条直角边。求缺失直角边时，根号下（c² − 直角边²）必须为正。",
          "<strong>无效：</strong>c = 8，a = 10。斜边（8）比直角边（10）还短，违反了“斜边最长”规则。很可能是标记填反了，10 应该是斜边。",
          "<strong>无效：</strong>c = 5，a = 5。此时 b = √(25 − 25) = √0 = 0。边长为零会让三角形退化成一条线段，不是有效的三角形。",
          "<strong>无效：</strong>a = −3，b = 4。负数长度在几何中没有意义，边长必须为正。"
        ],
        "tableHeaders": [
          "问题",
          "原因",
          "解决办法"
        ],
        "table": [
          [
            "斜边比直角边短",
            "标记填反",
            "把最长的边记为 c"
          ],
          [
            "根号下为零",
            "c 等于已知直角边",
            "检查测量值，三角形已退化"
          ],
          [
            "根号下为负数",
            "c 比已知直角边短",
            "这些输入无法构成直角三角形"
          ],
          [
            "输入为负数",
            "笔误或符号错误",
            "只用正数长度"
          ],
          [
            "输入为零",
            "缺少测量值",
            "填入实际长度"
          ],
          [
            "单位混用错误",
            "英尺和英寸混用",
            "先统一成一种单位"
          ],
          [
            "非直角三角形",
            "没有 90° 角",
            "改用余弦定理"
          ]
        ]
      },
      "side-verify": {
        "h2": "如何检查算出的边长是否正确",
        "paragraphs": [
          "<strong>方法 1：代回验证。</strong> 把三条边代入 [[a^2 + b^2 = c^2]]。以 6-8-10 三角形为例：36 + 64 = 100。两边相等，答案正确。",
          "<strong>方法 2：检查斜边最长。</strong> 如果求的是 c，确认它大于 a 和 b；如果求的是直角边，确认它小于 c。",
          "<strong>方法 3：对照勾股数。</strong> 如果输入是整数，看看是否构成已知的勾股数。输入 9 和 12 得到 15，正好是放大的 3-4-5。",
          "<strong>方法 4：估算合理性。</strong> 斜边应该比任一条直角边长，但小于两条直角边之和。直角边为 6 和 8 时，斜边 10 满足 8 < 10 < 14。",
          "<strong>方法 5：检查单位和四舍五入。</strong> 确认单位与输入一致，小数位数符合测量精度。",
          "<strong>验证示例 1：</strong> 由 a = 5、b = 12 算出 c = 13。检查：5² + 12² = 25 + 144 = 169 = 13²。斜边 13 大于两条直角边，符合 5-12-13 勾股数。有效。",
          "<strong>验证示例 2：</strong> 由 c = 12.5、a = 10 算出 b = 7.5。检查：10² + 7.5² = 100 + 56.25 = 156.25 = 12.5²。直角边 7.5 小于斜边 12.5。估算：10 < 12.5 < 20。有效。"
        ]
      },
      "side-mistakes": {
        "h2": "计算直角三角形边长时的常见错误",
        "paragraphs": [
          "<strong>1. 把直角边直接相加，而不是先平方。</strong> 算成 6 + 8 = 14，而不是 √(36 + 64) = 10。定理相加的是平方后的面积，不是长度。先平方再相加。",
          "<strong>2. 忘记开平方。</strong> 6-8 三角形的答案写成 100 而不是 10。公式给出的是 c²，要求的是 c。最后一步要开平方。",
          "<strong>3. 求斜边时用了减法。</strong> 用 √(64 − 36) = √28，而不是 √(64 + 36) = 10。已知两条直角边求斜边时用加法。",
          "<strong>4. 求缺失直角边时用了加法。</strong> 用 √(169 + 25)，而不是 √(169 − 25) = 12。已知斜边时用减法。",
          "<strong>5. 把直角边当成了斜边。</strong> 把最长的边记为 a 或 b。斜边始终在直角对面，始终记为 c。",
          "<strong>6. 对非直角三角形使用定理。</strong> 没有 90 度角就用 a² + b² = c²。先确认有直角。",
          "<strong>7. 中间步骤四舍五入。</strong> 计算中途把 6.25 四舍五入成 6.3，导致最终答案有偏差。保持完整精度到最后。",
          "<strong>8. 测量单位混用。</strong> 把 3 英尺和 6 英寸直接填成 3 和 6。计算前先统一单位。",
          "<strong>9. 把数值填错了输入框。</strong> 把斜边填进了直角边的框。每个测量值都要对应正确的标记。",
          "<strong>10. 对根号下的负数强行计算。</strong> 看到 √(25 − 36) 还硬算。根号下为负说明输入无法构成直角三角形，检查标记是否填反。"
        ]
      },
      "side-beyond": {
        "h2": "什么时候需要用其他的直角三角形公式？",
        "paragraphs": [
          "勾股定理需要已知两条边。已知的信息不同，就要用不同的工具。",
          "<strong>一条边和一个锐角：</strong> 用正弦、余弦或正切。正弦是“对边比斜边”，余弦是“邻边比斜边”，正切是“对边比邻边”。例如，已知斜边 c 和角 A，直角边 a = c × sin(A)。",
          "<strong>两个角，没有边：</strong> 不可能。角度决定形状，不决定大小，3-4-5 三角形和 6-8-10 三角形的角完全一样，只是大小不同。至少需要一条边长。",
          "<strong>非直角三角形：</strong> 用余弦定理（c² = a² + b² − 2ab×cos(C)）或正弦定理。勾股定理是 C = 90° 时余弦定理的特例。",
          "<strong>特殊直角三角形：</strong> 45-45-90 三角形的边之比为 1:1:√2，30-60-90 的边之比为 1:√3:2。这些可以直接心算。",
          "如果已知一条边和一个锐角，请使用本站的直角三角形用角度求边长计算器。"
        ],
        "linkAnchorText": "直角三角形用角度求边长计算器"
      },
      "side-summary": {
        "h2": "自信地计算直角三角形的边长",
        "paragraphs": [
          "先确定你已知的两条边。两条都是直角边，求的是斜边；其中一条是斜边，求的是缺失的直角边。选择对应的公式或计算器模式，两个测量值用同一个单位。计算后验证：斜边必须最长，代回 a² + b² = c² 两边应该相等。检查单位和四舍五入。掌握这些步骤，任何直角三角形边长问题都能可靠解决。回到本页顶部的计算器，输入你的数字试试。"
        ]
      }
    },
    "faqs": [
      {
        "question": "如何计算直角三角形缺失的边？",
        "answer": "用勾股定理：a² + b² = c²。已知两条直角边，用 c = √(a² + b²) 求斜边；已知斜边和一条直角边，用“缺失直角边 = √(c² − 已知直角边²)”求另一条直角边。恰好需要两个边长，只知道一条边或只知道角度是算不出来的。"
      },
      {
        "question": "已知两条边能求出缺失的边吗？",
        "answer": "可以。两条边就够了。如果已知的两条边都是直角边，用斜边公式；如果其中一条是斜边，用缺失直角边公式。计算器会根据输入中是否包含斜边来判断用哪种模式。"
      },
      {
        "question": "如何求斜边？",
        "answer": "两条直角边分别平方，相加，再开平方。直角边为 6 和 8 时：6² + 8² = 36 + 64 = 100，√100 = 10。斜边始终是最长的边，所以算完要验证答案大于两条直角边。"
      },
      {
        "question": "如何求缺失的直角边？",
        "answer": "斜边和已知直角边分别平方，用斜边的平方减去直角边的平方，再开平方。斜边为 13、直角边为 5 时：169 − 25 = 144，√144 = 12。结果必须小于斜边。"
      },
      {
        "question": "勾股定理的公式是什么？",
        "answer": "公式是 a² + b² = c²，其中 a 和 b 是直角边（构成直角的两条边），c 是斜边（直角对面的边）。这条关系对所有直角三角形都成立。"
      },
      {
        "question": "斜边一定是最长的边吗？",
        "answer": "是的。斜边连接的两个顶点距离最远，对的是最大的角（90 度）。在任何三角形中，最长的边都对着最大的角。如果算出的斜边比某条直角边还短，重新检查输入。"
      },
      {
        "question": "勾股定理能用于任何三角形吗？",
        "answer": "不能，只能用于直角三角形。这条定理依赖于 90 度角。锐角三角形和钝角三角形请用余弦定理。把勾股定理用在非直角三角形上会得到错误结果。"
      },
      {
        "question": "答案是小数怎么办？",
        "answer": "小数很正常，大多数直角三角形的边都不是整数。全程保持完整精度计算，最后一步再按输入的精度四舍五入。例如 √42.25 = 6.5 是精确的，但 √50 ≈ 7.071 需要四舍五入。"
      },
      {
        "question": "直角三角形的两条直角边可以相等吗？",
        "answer": "可以。这就是 45-45-90 等腰直角三角形，两条直角边相等，斜边等于直角边 × √2。直角边为 5 时，斜边为 5√2 ≈ 7.071。"
      },
      {
        "question": "斜边比已知的直角边还小怎么办？",
        "answer": "输入无效。斜边必须是最长的边。很可能是标记填反了，把最长的测量值记为斜边 c，再重新计算。"
      },
      {
        "question": "已知一个角和一条边能求缺失的边吗？",
        "answer": "可以，但只用勾股定理不行。用三角函数：正弦、余弦或正切可以把已知的边和角与未知的边联系起来。本站有专门的“用角度求边长”计算器来处理这类问题。"
      },
      {
        "question": "如何检查答案是否正确？",
        "answer": "把三条边代回 a² + b² = c² 验证。确认斜边最长。看看这几个数是否构成已知的勾股数。估算一下，斜边应该介于较长的直角边和两条直角边之和之间。"
      }
    ],
    "relatedHeading": "你可能还会用到的其他直角三角形计算器",
    "relatedIntro": "求出缺失的边之后，可以继续用这些相关计算器完成三角形的分析。",
    "relatedItems": [
      "直角三角形计算器",
      "直角三角形角度计算器",
      "直角三角形用角度求边长计算器",
      "直角三角形面积计算器",
      "直角三角形周长与半周长计算器",
      "特殊直角三角形计算器",
      "勾股数计算器"
    ]
  }
};
