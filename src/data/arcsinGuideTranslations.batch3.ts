/**
 * arcsinGuideTranslations.batch3.ts
 * Translations of the ArcsinGuide (Right Triangle Angle From Sine Calculator guide)
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese Simplified (zh).
 *
 * Structure per language:
 * - tocHeading, tocItems (keyed by section id)
 * - sections (15 entries: arcsin-intro, arcsin-anatomy, arcsin-what, arcsin-formula,
 *   arcsin-howto, arcsin-examples, arcsin-applications, arcsin-ratio, arcsin-units,
 *   arcsin-mistakes, arcsin-verify, arcsin-choose, arcsin-faq, arcsin-related,
 *   arcsin-conclusion)
 * - faqs (12 question/answer pairs, top-level)
 * - relatedHeading, relatedIntro, relatedItems (8 calculator names)
 *
 * Formulas, KaTeX markup, variable names, numbers, URLs, and HTML IDs are preserved
 * exactly as in the English source. No em dashes. Arabic uses RTL-appropriate text.
 */

export const ARCSIN_TRANSLATIONS_BATCH3 = {
  "id": {
    "faqs": [
      {
        "answer": "Rumus ini mencari sudut lancip yang sinusnya sama dengan rasio sisi berhadapan terhadap hipotenusa. Bagi panjang sisi berhadapan dengan panjang hipotenusa, lalu terapkan sinus invers untuk mengubah desimal tersebut menjadi sudut dalam derajat.",
        "question": "Apa yang dihitung rumus A = arcsin(a/c)?"
      },
      {
        "answer": "Tentukan sisi berhadapan dan hipotenusa, bagi yang pertama dengan yang kedua untuk mendapatkan rasio antara 0 dan 1, lalu terapkan arcsin. Misalnya, sisi berhadapan 3 dan hipotenusa 5 menghasilkan arcsin(0.6), yaitu sekitar 36.87 derajat.",
        "question": "Bagaimana cara mencari sudut menggunakan sinus invers?"
      },
      {
        "answer": "Karena sinus didefinisikan sebagai sisi berhadapan dibagi hipotenusa. Kedua sisi tersebut sepenuhnya menentukan rasio, dan rasio sepenuhnya menentukan sudut. Tidak diperlukan pengukuran lain, dan sisi bersebelahan tidak pernah masuk ke dalam rumus.",
        "question": "Mengapa saya membutuhkan sisi berhadapan dan hipotenusa?"
      },
      {
        "answer": "Bisa. Itulah gunanya kalkulator ini. Arcsin hanya menggunakan sisi berhadapan dan hipotenusa, sehingga sisi bersebelahan boleh tetap tidak diketahui.",
        "question": "Bisakah saya menghitung sudut tanpa mengetahui sisi bersebelahan?"
      },
      {
        "answer": "Sinus menerima sudut dan mengembalikan rasio: sin(30 derajat) = 0.5. Sinus invers membaliknya: ia menerima rasio dan mengembalikan sudut, sehingga arcsin(0.5) = 30 derajat. Gunakan sinus ketika Anda mengetahui sudut; gunakan arcsin ketika Anda mengetahui sisi-sisinya.",
        "question": "Apa perbedaan sinus dan sinus invers?"
      },
      {
        "answer": "Ya. Arcsin(x) dan sin^-1(x) adalah dua notasi untuk fungsi sinus invers yang sama. Pangkat -1 tidak berarti kebalikan; kebalikan dari sinus adalah kosekan, ditulis csc(x).",
        "question": "Apakah arcsin sama dengan sin^-1?"
      },
      {
        "answer": "Hipotenusa selalu merupakan sisi terpanjang dari segitiga siku-siku. Jika masukan sisi berhadapan Anda lebih panjang, sisi-sisinya salah diberi label: menurut definisi, pengukuran terpanjang dari ketiga pengukuran Anda adalah hipotenusa.",
        "question": "Mengapa hipotenusa harus lebih panjang dari sisi berhadapan?"
      },
      {
        "answer": "Rasionya menjadi 1 dan arcsin(1) = 90 derajat. Namun sudut lancip 90 derajat mustahil dalam segitiga siku-siku yang tidak degenerat; sisi yang sama menggambarkan kasus batas yang runtuh, bukan segitiga nyata.",
        "question": "Apa yang terjadi jika sisi berhadapan sama dengan hipotenusa?"
      },
      {
        "answer": "Rasio yang lebih besar berarti sudut yang lebih besar. Rasio 0.2 menghasilkan sekitar 11.54 derajat, 0.5 menghasilkan tepat 30 derajat, dan 0.8 menghasilkan sekitar 53.13 derajat. Saat sisi berhadapan mendekati panjang hipotenusa, sudut mendekati 90 derajat.",
        "question": "Bagaimana rasio sisi berhadapan terhadap hipotenusa memengaruhi sudut?"
      },
      {
        "answer": "Tiga pemeriksaan independen: hitung sin(A) dan pastikan sama dengan a/c; hitung komplemen B = 90 - A dan pastikan segitiga tetap masuk akal; turunkan sisi bersebelahan dengan teorema Pythagoras dan pastikan a^2 + b^2 = c^2.",
        "question": "Bagaimana cara memverifikasi sudut yang saya hitung?"
      },
      {
        "answer": "Bisa, untuk geometrinya. Masukkan kenaikan vertikal sebagai sisi berhadapan dan panjang miring sebagai hipotenusa. Ingat bahwa hasilnya hanya sudut geometris; ia tidak mensertifikasi keamanan struktural atau kepatuhan terhadap kode bangunan.",
        "question": "Bisakah saya menggunakan kalkulator ini untuk memperkirakan sudut atap, ramp, atau tangga?"
      },
      {
        "answer": "Biasanya karena pembulatan: buku teks mungkin membulatkan rasio sebelum menerapkan arcsin, atau membulatkan sudut akhir secara berbeda. Pertahankan presisi penuh selama perhitungan dan bulatkan hanya di akhir, maka jawabannya akan cocok hingga digit yang ditampilkan.",
        "question": "Mengapa jawaban yang saya hitung sedikit berbeda dari jawaban buku teks?"
      }
    ],
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedIntro": "Setelah menemukan sudut Anda, lanjutkan dengan kalkulator terkait berikut untuk melengkapi analisis segitiga Anda.",
    "relatedItems": [
      "Kalkulator Sudut Segitiga Siku-Siku",
      "Kalkulator Sudut Segitiga Siku-Siku dari Kosinus",
      "Kalkulator Sudut Segitiga Siku-Siku dari Tangen",
      "Kalkulator Sisi Segitiga Siku-Siku dari Sinus",
      "Kalkulator Sisi Segitiga Siku-Siku",
      "Kalkulator Sudut Hilang Segitiga Siku-Siku",
      "Kalkulator Rasio Trigonometri Segitiga Siku-Siku",
      "Kalkulator Rasio Sinus"
    ],
    "sections": {
      "arcsin-intro": {
        "h2": "Cara Mencari Sudut Menggunakan Sinus",
        "paragraphs": [
          "Bayangkan sebuah ramp kursi roda: Anda tahu permukaan miringnya berukuran 9.5 meter dan naik 0.75 meter dari tanah. Berapa sudut kemiringan ramp tersebut? Kalkulator sudut segitiga siku-siku dari sinus menjawab tepat pertanyaan semacam ini. Ia menerima sisi berhadapan dan hipotenusa dari segitiga siku-siku lalu mengembalikan sudut lancip di antara keduanya.",
          "Dua pengukuran ini sudah cukup karena sinus didefinisikan sebagai rasio sisi berhadapan terhadap hipotenusa. Setelah rasio tersebut diketahui, sinus invers mengubahnya kembali menjadi sudut. Sisi bersebelahan tidak pernah masuk perhitungan, sehingga ini adalah alat yang tepat kapan pun sisi berhadapan dan hipotenusa adalah besaran yang benar-benar Anda ukur.",
          "Sepanjang panduan ini, [[A]] adalah sudut lancip acuan yang dihitung, [[a]] adalah sisi di seberang sudut [[A]], dan [[c]] adalah hipotenusa. Sudut yang dihitung adalah kemiringan tempat hipotenusa bertemu sisi bersebelahan, diukur dalam derajat."
        ]
      },
      "arcsin-anatomy": {
        "figcaption": "Anatomi untuk arcsin: sisi a terletak di seberang sudut A, dan sisi c adalah hipotenusa di seberang sudut siku-siku.",
        "h2": "Memahami Sisi Berhadapan dan Hipotenusa",
        "h3s": [
          "Apa Itu Segitiga Siku-Siku?",
          "Apa Itu Sisi Berhadapan?",
          "Apa Itu Hipotenusa?",
          "Apa Itu Sisi Bersebelahan?"
        ],
        "imgAlt": "Segitiga siku-siku dengan sisi berhadapan a dan hipotenusa c disorot untuk arcsin",
        "paragraphs": [
          "Segitiga siku-siku memiliki satu sudut tepat 90 derajat. Dua sudut lainnya lancip, artinya masing-masing kurang dari 90 derajat, dan keduanya selalu berjumlah 90 derajat. Hubungan komplemen inilah mengapa menemukan satu sudut lancip langsung memberi Anda sudut lainnya melalui pengurangan.",
          "Syarat sudut siku-siku penting karena sinus, kosinus, dan tangen didefinisikan melalui rasio sisi tetap pada segitiga siku-siku. Tanpa sudut 90 derajat, rasio [[a/c]] tidak memiliki hubungan tetap dengan sudut mana pun, dan sinus invers tidak dapat memulihkan satu sudut pun.",
          "Sisi berhadapan adalah sisi yang tepat berada di seberang sudut [[A]]. Ia tidak pernah menyentuh titik sudut dari sudut [[A]]. Dalam soal ketinggian, sisi ini biasanya mewakili kenaikan vertikal: ketinggian yang dicapai tangga pada dinding, kenaikan sebuah ramp, atau komponen vertikal dari lengan derek.",
          "Labelnya bersifat relatif. Jika Anda mengganti sudut acuan dari [[A]] ke [[B]], sisi yang tadinya berhadapan menjadi bersebelahan dan sebaliknya. Selalu pastikan sudut mana yang sedang Anda cari sebelum memberi label sisi.",
          "Hipotenusa adalah sisi di seberang sudut siku-siku, diwakili oleh [[c]]. Ia selalu merupakan sisi terpanjang segitiga. Ia tidak pernah menyentuh titik sudut siku-siku. Dalam situasi praktis, hipotenusa sering kali adalah panjang miring itu sendiri: tangga, kasau, permukaan ramp, atau jarak pandang garis lurus.",
          "Ketika sebuah segitiga digambar dalam posisi miring, kenali hipotenusa terlebih dahulu dengan menemukan sisi di seberang penanda sudut siku-siku berbentuk kotak. Segala sesuatunya mengikuti dari identifikasi tersebut.",
          "Sisi [[b]] adalah kaki yang menyentuh sudut [[A]] tanpa menjadi hipotenusa. Kalkulator ini tidak memerlukannya. Jika nanti Anda membutuhkan sisi bersebelahan, teorema Pythagoras memberikannya sebagai [[b = \\sqrt{c^2 - a^2}]]."
        ]
      },
      "arcsin-what": {
        "figcaption": "Cara kerja arcsin: bagi sisi berhadapan dengan hipotenusa, lalu terapkan sinus invers untuk memulihkan sudut.",
        "h2": "Apa Itu Sinus dalam Segitiga Siku-Siku?",
        "h3s": [
          "Apa Itu Sinus Invers?",
          "Apakah Arcsin Sama dengan Sinus Invers?",
          "Mengapa Rumus Menggunakan Sisi Berhadapan?"
        ],
        "imgAlt": "Diagram yang menunjukkan pembagian a dengan c lalu penerapan arcsin untuk mendapatkan sudut",
        "paragraphs": [
          "Sinus mengukur berapa proporsi hipotenusa yang diwakili oleh sisi berhadapan. Definisinya adalah:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "Di sini [[\\sin(A)]] adalah sinus dari sudut [[A]], [[a]] adalah sisi berhadapan, dan [[c]] adalah hipotenusa. Jika sisi berhadapan 3 satuan dan hipotenusa 5 satuan, maka [[\\sin(A) = 3/5 = 0.6]]. Rasio ini tak berdimensi: meter dibagi meter saling meniadakan, sehingga 0.6 yang sama dihasilkan baik Anda mengukur dalam meter, kaki, maupun sentimeter.",
          "Sinus biasa berawal dari sudut dan menghasilkan rasio. Sinus invers berawal dari rasio yang valid dan mengembalikan sudut yang sesuai. Jika [[\\sin(A) = 0.6]], maka [[A = \\arcsin(0.6) \\approx 36.87^\\circ]]. Sinus invers membalikkan hubungan sinus untuk memulihkan sudut awal Anda.",
          "Ya. Notasi [[\\arcsin(x)]] dan [[\\sin^{-1}(x)]] merujuk pada fungsi yang sama. Pangkat [[-1]] tidak berarti kebalikan. Kebalikan dari sinus adalah fungsi yang sama sekali berbeda: kosekan, ditulis [[\\csc(x)]].",
          "Sinus adalah rasio yang memasangkan sisi berhadapan dengan hipotenusa, yang tepat merupakan pasangan yang diterima kalkulator ini. Bantuan ingatan SOH-CAH-TOA merangkum ketiga pasangan: SOH berarti Sinus sama dengan Sisi Berhadapan (Opposite) per Hipotenusa, CAH berarti Kosinus sama dengan Sisi Bersebelahan (Adjacent) per Hipotenusa, dan TOA berarti Tangen sama dengan Sisi Berhadapan (Opposite) per Sisi Bersebelahan (Adjacent). Ketika sisi yang diketahui adalah sisi berhadapan dan hipotenusa, SOH berlaku, sehingga arcsin adalah fungsi invers yang benar."
        ]
      },
      "arcsin-formula": {
        "h2": "Cara Kerja Rumus Sinus Invers",
        "paragraphs": [
          "Mulailah dengan definisi sinus:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "Panjang sisi yang diketahui memungkinkan Anda menghitung rasio di sebelah kanan. Lalu terapkan sinus invers pada kedua sisi untuk mengisolasi sudut:",
          "[[[A=\\arcsin\\left(\\frac{a}{c}\\right)]]]",
          "Sinus invers diterapkan pada seluruh rasio karena rasio secara keseluruhan adalah nilai sinus. Kerjakan contoh numerik. Diketahui [[a = 3]] cm dan [[c = 5]] cm:",
          "Langkah 1: Bagi sisi berhadapan dengan hipotenusa: [[3/5 = 0.6]].",
          "Langkah 2: Terapkan sinus invers: [[A = \\arcsin(0.6)]].",
          "Langkah 3: Hitung sudutnya: [[A \\approx 36.87^\\circ]].",
          "Hasilnya adalah perkiraan yang dibulatkan hingga dua tempat desimal. Dalam bahasa sederhana: sudut yang sinusnya 0.6 berukuran sekitar 36.87 derajat."
        ]
      },
      "arcsin-howto": {
        "h2": "Cara Menggunakan Kalkulator Sudut Segitiga Siku-Siku dari Sinus",
        "listItems": [
          "<strong>Tentukan sudut siku-siku.</strong> Kalkulator hanya bekerja untuk segitiga siku-siku, jadi temukan sudut 90 derajat terlebih dahulu.",
          "<strong>Temukan sisi berhadapan [[a]].</strong> Ia terletak tepat di seberang sudut [[A]] dan tidak pernah menyentuh titik sudutnya.",
          "<strong>Kenali hipotenusa [[c]].</strong> Ia berada di seberang sudut 90 derajat dan merupakan sisi terpanjang.",
          "<strong>Ukur atau peroleh kedua panjang sisi.</strong> Gunakan meteran pita, gambar rencana, atau data soal yang diberikan.",
          "<strong>Masukkan panjang sisi berhadapan</strong> ke kolom masukan yang sesuai.",
          "<strong>Masukkan panjang hipotenusa</strong> ke kolom masukannya.",
          "<strong>Pilih satuan yang kompatibel</strong> dengan pemilih satuan agar kedua sisi menggunakan satuan yang sama.",
          "<strong>Periksa bahwa hipotenusa lebih panjang dari sisi berhadapan.</strong> Jika tidak, sisi-sisinya salah diberi label.",
          "<strong>Tekan Hitung Sudut A.</strong> Alat ini membagi, menerapkan arcsin, dan mengembalikan sudut.",
          "<strong>Baca sudut yang dihitung dalam derajat</strong> dan perhatikan apakah terlihat masuk akal untuk segitiga tersebut.",
          "<strong>Verifikasi hasilnya</strong> dengan salah satu pemeriksaan di bagian verifikasi di bawah.",
          "<strong>Gunakan Atur Ulang</strong> untuk menghapus masukan dan memulai perhitungan baru."
        ]
      },
      "arcsin-examples": {
        "h2": "Contoh Langkah Demi Langkah Mencari Sudut Menggunakan Sinus",
        "h3s": [
          "Contoh 1: Segitiga Siku-Siku 3-4-5 Dasar",
          "Contoh 2: Ketika Sisi Berhadapan Setengah dari Hipotenusa",
          "Contoh 3: Segitiga dengan Rasio Sisi Berhadapan terhadap Hipotenusa 0.8",
          "Contoh 4: Sisi Berhadapan yang Kecil"
        ],
        "paragraphs": [
          "Diketahui sisi berhadapan [[a = 3]] cm dan hipotenusa [[c = 5]] cm, cari sudut [[A]].",
          "Langkah 1: Tulis rumusnya: [[A = \\arcsin(a/c)]].",
          "Langkah 2: Substitusikan nilainya: [[A = \\arcsin(3/5)]].",
          "Langkah 3: Hitung rasionya: [[3/5 = 0.6]].",
          "Langkah 4: Terapkan sinus invers: [[A = \\arcsin(0.6) \\approx 36.87^\\circ]].",
          "Sudut ini adalah kemiringan antara hipotenusa dan sisi bersebelahan, dengan sisi 3 cm berdiri di seberangnya.",
          "Diketahui [[a = 5]] m dan [[c = 10]] m: [[A = \\arcsin(5/10) = \\arcsin(0.5) = 30^\\circ]] tepat. Ini adalah segitiga istimewa 30-60-90 yang umum, di mana sisi di seberang sudut 30 derajat adalah setengah dari hipotenusa.",
          "Diketahui [[a = 8]] m dan [[c = 10]] m: [[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Sudutnya lebih besar dari 30 derajat karena sisi berhadapan mewakili proporsi hipotenusa yang lebih besar.",
          "Diketahui [[a = 2]] ft dan [[c = 10]] ft: [[A = \\arcsin(2/10) = \\arcsin(0.2) \\approx 11.54^\\circ]]. Sisi berhadapan yang relatif pendek menghasilkan sudut kecil, karena segitiga tersebut panjang dan dangkal."
        ]
      },
      "arcsin-applications": {
        "figcaption": "Empat contoh praktis arcsin: atap, tangga, ramp, dan survei, masing-masing dengan sisi yang diukur dan sudut yang dihasilkan.",
        "h2": "Contoh Kehidupan Nyata Menghitung Sudut Menggunakan Sinus",
        "h3s": [
          "Contoh 5: Mencari Sudut Kemiringan Atap",
          "Contoh 6: Mencari Sudut Tangga",
          "Contoh 7: Menghitung Kemiringan Ramp",
          "Contoh 8: Mencari Sudut dalam Survei",
          "Contoh 9: Menghitung Sudut Kawat Penyangga",
          "Contoh 10: Mencari Kemiringan Tangga (Staircase)",
          "Contoh 11: Menghitung Sudut Pendakian Pesawat",
          "Contoh 12: Mencari Sudut Penyangga Mekanis",
          "Contoh 13: Menghitung Kemiringan Lengan Derek",
          "Contoh 14: Memperkirakan Sudut Elevasi Pohon",
          "Contoh 15: Menghitung Kemiringan Rute Pendakian",
          "Contoh 16: Mencari Sudut Penyangga Kanopi"
        ],
        "imgAlt": "Empat panel: contoh arcsin kasau atap, tangga, ramp, dan survei",
        "paragraphs": [
          "Sebuah kasau atap memiliki panjang 6.5 m dan naik 4 m secara vertikal di atas level titik awalnya. Cari sudut antara kasau dan bidang horizontal. Kasau dan kenaikan vertikal membentuk segitiga siku-siku: kenaikan berada di seberang sudut kemiringan, dan kasau adalah hipotenusa. Sinus invers tepat digunakan karena pasangan yang diketahui adalah sisi berhadapan dan hipotenusa.",
          "[[A = \\arcsin(4/6.5) = \\arcsin(0.61538) \\approx 37.98^\\circ]]. Atap naik sekitar 38 derajat dari horizontal. Perhatikan bahwa perhitungan geometris ini bukan penilaian desain atap yang lengkap; faktor struktural adalah hal terpisah.",
          "Sebuah tangga memiliki panjang 5.5 m dan mencapai 4.5 m ke atas dinding. Hitung sudut antara tangga dan tanah yang rata. Tinggi dinding berada di seberang sudut tanah, dan tangga itu sendiri adalah hipotenusa, sehingga arcsin berlaku.",
          "[[A = \\arcsin(4.5/5.5) \\approx 54.90^\\circ]]. Tangga bersandar sekitar 54.9 derajat. Perhitungan ini saja tidak menentukan apakah tangga diposisikan dengan aman.",
          "Sebuah ramp memiliki panjang miring 9.5 m dan kenaikan vertikal 0.75 m. Cari sudutnya relatif terhadap horizontal. Permukaan miring adalah hipotenusa dan kenaikan vertikal berada di seberang sudut kemiringan.",
          "[[A = \\arcsin(0.75/9.5) \\approx 4.53^\\circ]]. Ramp naik dengan lembut sebesar 4.53 derajat. Jangan klaim bahwa ramp yang dihitung memenuhi persyaratan aksesibilitas atau kode bangunan.",
          "Pengukuran survei yang disederhanakan mencatat perbedaan vertikal 30 m dan jarak miring garis lurus 50 m. Hitung sudut antara garis miring dan horizontal. Perbedaan vertikal berada di seberang sudut; jarak miring adalah hipotenusa.",
          "[[A = \\arcsin(30/50) = \\arcsin(0.6) \\approx 36.87^\\circ]]. Survei nyata dapat memerlukan koreksi tinggi instrumen dan penyesuaian medan di luar model yang disederhanakan ini.",
          "Sebuah kawat penyangga (guy wire) memiliki panjang 18 m, dengan pemisahan vertikal 10 m antara kedua ujungnya. Cari sudut antara kawat dan horizontal. Pemisahan vertikal adalah sisi berhadapan dan kawat adalah hipotenusa.",
          "[[A = \\arcsin(10/18) \\approx 33.75^\\circ]]. Hasilnya hanya menggambarkan geometri; ia tidak menentukan tegangan kawat, kekuatan jangkar, atau keamanan struktural.",
          "Sebuah tangga yang disederhanakan memiliki kenaikan vertikal 2.8 m dan panjang stringer miring 5 m. Hitung sudut antara stringer dan horizontal. Kenaikan dan stringer masing-masing adalah sisi berhadapan dan hipotenusa.",
          "[[A = \\arcsin(2.8/5) = \\arcsin(0.56) \\approx 34.06^\\circ]]. Perhitungan ini tidak menentukan kepatuhan terhadap kode bangunan.",
          "Untuk segmen penerbangan yang disederhanakan, sebuah pesawat naik 1,500 m ketinggian sambil menempuh 5,000 m sepanjang jalur penerbangan lurus. Perkirakan sudut pendakian relatif terhadap horizontal. Kenaikan ketinggian berada di seberang sudut pendakian; jalur penerbangan adalah hipotenusa.",
          "[[A = \\arcsin(1500/5000) = \\arcsin(0.3) \\approx 17.46^\\circ]]. Ini adalah model segmen lurus, bukan analisis lengkap dari jalur penerbangan yang berubah.",
          "Sebuah penyangga mekanis memiliki panjang 1,700 mm dan kenaikan vertikal 800 mm. Hitung sudutnya relatif terhadap horizontal. Rumus bekerja sama dalam milimeter: kenaikan berada di seberang, panjang penyangga adalah hipotenusa.",
          "[[A = \\arcsin(800/1700) \\approx 28.07^\\circ]]. Hasilnya menggambarkan geometri, bukan kekuatan struktural.",
          "Lengan derek yang disederhanakan memiliki panjang 10 m dan komponen vertikal 8 m. Cari sudut antara lengan dan horizontal. Panjang lengan adalah hipotenusa dan komponen vertikal berada di seberang sudut.",
          "[[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Jangan anggap hasilnya sebagai penentu kapasitas derek atau keamanan operasional.",
          "Seseorang mengamati puncak pohon dari titik di mana perbedaan vertikal ke puncak pohon adalah 12 m dan jarak pandang garis lurus adalah 20 m. Cari sudut elevasinya. Perbedaan vertikal berada di seberang sudut; garis pandang adalah hipotenusa.",
          "[[A = \\arcsin(12/20) = \\arcsin(0.6) \\approx 36.87^\\circ]]. Ini memberikan sudut dari level pengamatan; ia tidak otomatis memberikan tinggi total pohon di atas tanah.",
          "Bagian pendakian lurus yang disederhanakan memiliki panjang miring 100 m dan kenaikan vertikal 80 m. Cari sudut kemiringannya. Kenaikan dan jarak miring adalah sisi berhadapan dan hipotenusa.",
          "[[A = \\arcsin(80/100) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Ini adalah kemiringan ilustratif yang curam; rute pendakian aktual bervariasi gradasinya sepanjang jalurnya.",
          "Sebuah penyangga kanopi diagonal memiliki panjang 3.5 m dan naik 1.2 m secara vertikal. Hitung sudut antara penyangga dan horizontal. Kenaikan vertikal berada di seberang sudut dan penyangga adalah hipotenusa.",
          "[[A = \\arcsin(1.2/3.5) \\approx 20.05^\\circ]]. Hasilnya tidak memverifikasi kesesuaian struktural penyangga."
        ]
      },
      "arcsin-ratio": {
        "figcaption": "Dengan hipotenusa tetap 10 satuan, sisi berhadapan yang lebih besar menghasilkan sudut lancip yang lebih besar: 11.54, 30, lalu 53.13 derajat.",
        "h2": "Bagaimana Rasio Sisi Berhadapan terhadap Hipotenusa Mengubah Sudut",
        "imgAlt": "Tiga panel yang menunjukkan sisi berhadapan yang lebih besar menghasilkan sudut yang lebih besar pada hipotenusa tetap",
        "paragraphs": [
          "Rasio [[a/c]] menentukan sudut [[A]]. Sisi berhadapan yang lebih besar relatif terhadap hipotenusa menghasilkan sudut lancip yang lebih besar, karena lebih banyak panjang hipotenusa berdiri vertikal. Rasio kecil menghasilkan sudut kecil: segitiga tersebut panjang dan dangkal.",
          "Ketika sisi berhadapan tepat setengah dari hipotenusa, sudutnya 30 derajat. Segitiga yang proporsional berbagi sudut terlepas dari ukurannya: menskalakan setiap sisi dengan faktor yang sama membuat setiap rasio tidak berubah, sehingga sudut-sudutnya tetap. Mengubah satuan dari meter ke sentimeter tidak mengubah apa pun dengan alasan yang sama.",
          "Rasio harus berada di antara 0 dan 1 untuk segitiga siku-siku biasa. Rasio 0 berarti tidak ada sisi berhadapan sama sekali, dan rasio 1 berarti sisi berhadapan sama dengan hipotenusa; keduanya adalah kasus batas degenerat, bukan segitiga nyata dengan tiga sisi positif."
        ]
      },
      "arcsin-units": {
        "h2": "Memahami Satuan Sudut dan Presisi Pengukuran",
        "h3s": [
          "Contoh: Apakah Satuan Pengukuran Mengubah Sudut?"
        ],
        "paragraphs": [
          "Kalkulator ini mengembalikan sudut dalam derajat, satuan standar untuk konstruksi, survei, dan geometri kelas. Satu derajat membagi lingkaran penuh menjadi 360 bagian. Radian adalah alternatifnya: lingkaran penuh adalah [[2\\pi]] radian. Sinus invers pada kalkulator genggam dapat mengembalikan salah satunya, tergantung pengaturan modenya.",
          "Konversikan di antaranya dengan: [[\\text{Degrees} = \\text{Radians} \\times \\frac{180^\\circ}{\\pi}]]. Rasio sisi masukan sendiri tidak memiliki satuan, dan kedua sisi harus menggunakan satuan yang kompatibel: meter dengan meter, atau milimeter dengan milimeter.",
          "Ambil [[a = 3]] m dan [[c = 5]] m. Rasionya 0.6 dan sudutnya 36.87 derajat. Dalam sentimeter, [[a = 300]] cm dan [[c = 500]] cm memberikan rasio yang sama 0.6 dan sudut yang sama. Menskalakan kedua pengukuran dengan faktor yang sama saling meniadakan.",
          "Simpan digit tambahan selama langkah antara dan bulatkan hanya sudut akhirnya. Presisi yang dibenarkan tergantung pada pengukuran masukan: pengukuran lapangan kasar mendukung satu tempat desimal, sedangkan pengukuran bengkel yang presisi dapat mendukung dua tempat desimal."
        ]
      },
      "arcsin-mistakes": {
        "h2": "Kesalahan Umum Saat Menghitung Sudut Menggunakan Sinus",
        "listItems": [
          "<strong>Menggunakan sisi bersebelahan alih-alih sisi berhadapan.</strong> Periksa di titik sudut mana sudut Anda berada, lalu ambil sisi di seberangnya. Jika Anda menggunakan kaki yang menyentuh, Anda menghitung arccos, bukan arcsin.",
          "<strong>Menggunakan hipotenusa sebagai pembilang.</strong> Rumusnya adalah [[a/c]], sisi berhadapan per hipotenusa. Membaliknya menghasilkan rasio di atas 1 dan galat domain.",
          "<strong>Membalik rasio.</strong> [[\\arcsin(c/a)]] bukan sudut yang sama. Untuk 3-4-5, [[\\arcsin(3/5) = 36.87^\\circ]] tetapi [[\\arcsin(5/3)]] tidak terdefinisi.",
          "<strong>Menggunakan sinus biasa alih-alih sinus invers.</strong> Sinus membutuhkan masukan sudut. Jika Anda sudah mengetahui sisi-sisinya dan membutuhkan sudut, Anda membutuhkan fungsi invers.",
          "<strong>Mengacaukan sinus invers dengan kebalikan sinus.</strong> [[\\sin^{-1}(x)]] adalah arcsin; [[1/\\sin(x)]] adalah kosekan. Keduanya tidak terkait.",
          "<strong>Memasukkan sisi berhadapan yang lebih panjang dari hipotenusa.</strong> Mustahil secara geometris dalam segitiga siku-siku. Beri label ulang sisi Anda: pengukuran terpanjang adalah hipotenusa.",
          "<strong>Memasukkan panjang sisi nol atau negatif.</strong> Panjang harus positif. Sisi berhadapan nol menggambarkan garis datar, bukan segitiga.",
          "<strong>Mencampur satuan pengukuran.</strong> Memasukkan sisi berhadapan dalam meter dan hipotenusa dalam sentimeter merusak rasio. Konversikan terlebih dahulu.",
          "<strong>Membulatkan rasio terlalu dini.</strong> Membulatkan 0.61538 menjadi 0.62 sebelum menerapkan arcsin menggeser contoh atap dari 37.98 menjadi 38.32 derajat. Pertahankan presisi penuh hingga akhir.",
          "<strong>Melaporkan radian padahal derajat yang diharapkan.</strong> Jawaban 0.64 biasanya berarti kalkulator dalam mode radian; kalikan dengan [[180/\\pi]] untuk mendapatkan 36.87 derajat.",
          "<strong>Menghitung sudut B padahal alat mencari sudut A.</strong> Kalkulator mengembalikan sudut di seberang sisi [[a]]. Sudut lancip lainnya adalah [[90^\\circ - A]].",
          "<strong>Menganggap sudut memverifikasi keamanan struktural.</strong> Sudut adalah geometri murni. Stabilitas tangga, kekuatan atap, dan kepatuhan ramp memerlukan pemeriksaan teknis terpisah.",
          "<strong>Mengacaukan kenaikan vertikal dengan jarak miring.</strong> Dalam contoh ramp, 9.5 m adalah permukaan miring (hipotenusa), bukan jarak horizontal. Menukarnya mengubah segitiga sepenuhnya.",
          "<strong>Menganggap rasio yang mustahil sebagai valid.</strong> Jika [[a/c]] yang Anda hitung melebihi 1, berhenti: tidak ada segitiga siku-siku yang memiliki sisi-sisi tersebut. Cari kesalahan pelabelan alih-alih memaksakan perhitungan."
        ]
      },
      "arcsin-verify": {
        "h2": "Cara Memeriksa Apakah Sudut yang Dihitung Valid",
        "h3s": [
          "Metode 1: Periksa rasio sinus",
          "Metode 2: Periksa sudut komplemen",
          "Metode 3: Gunakan teorema Pythagoras"
        ],
        "paragraphs": [
          "Segitiga siku-siku yang valid dan tidak degenerat memerlukan: sisi berhadapan positif, hipotenusa positif, hipotenusa lebih panjang secara ketat dari sisi berhadapan, rasio [[a/c]] berada di antara 0 dan 1 secara ketat, dan sudut yang dihasilkan berada di antara 0 dan 90 derajat secara ketat.",
          "Jika [[a = c]], arcsin mengembalikan 90 derajat, sebuah kasus batas degenerat alih-alih segitiga nyata. Jika [[a > c]], segitiga tersebut mustahil secara geometris.",
          "Verifikasi [[\\sin(A) \\approx a/c]] menggunakan sudut yang tidak dibulatkan. Untuk contoh 3-4-5, [[\\sin(36.87^\\circ) \\approx 0.6 = 3/5]].",
          "Hitung [[B = 90^\\circ - A]]. Kedua sudut lancip harus berjumlah tepat 90 derajat. Lalu pastikan segitiga masuk akal dengan sudut [[B]] sebagai acuan.",
          "Hitung sisi bersebelahan [[b = \\sqrt{c^2 - a^2}]], lalu verifikasi [[a^2 + b^2 \\approx c^2]]. Untuk [[a = 3]] dan [[c = 5]]: [[b = \\sqrt{25 - 9} = 4]], dan [[9 + 16 = 25]]. Perbedaan kecil berasal dari pembulatan sudut yang ditampilkan, bukan dari kalkulator."
        ]
      },
      "arcsin-choose": {
        "h2": "Memilih Kalkulator Segitiga Siku-Siku yang Tepat",
        "paragraphs": [
          "<strong>Kalkulator Sudut Segitiga Siku-Siku dari Sinus:</strong> gunakan ketika Anda mengetahui sisi berhadapan dan hipotenusa dan membutuhkan sudut [[A]]. Ini adalah halaman tempat Anda berada.",
          "<strong>Kalkulator Sudut Segitiga Siku-Siku dari Kosinus:</strong> gunakan ketika Anda mengetahui sisi bersebelahan dan hipotenusa. Sudut yang sama, pasangan sisi yang berbeda.",
          "<strong>Kalkulator Sudut Segitiga Siku-Siku dari Tangen:</strong> gunakan ketika Anda mengetahui kedua kaki tetapi bukan hipotenusa. Umum untuk pengukuran lapangan kenaikan per jarak horizontal.",
          "<strong>Kalkulator Sudut Segitiga Siku-Siku:</strong> membantu Anda memilih metode yang tepat ketika Anda tidak yakin sisi mana yang Anda miliki.",
          "<strong>Kalkulator Sisi Segitiga Siku-Siku dari Sinus:</strong> membalik arah: dengan sudut dan hipotenusa yang diketahui, ia mencari sisi berhadapan.",
          "<strong>Kalkulator Sisi Segitiga Siku-Siku:</strong> mencari panjang sisi yang hilang dari pengukuran segitiga yang diketahui.",
          "Sesuaikan alat dengan pengukuran Anda. Jika sisi berhadapan tidak diketahui dan sulit diukur, jangan menghitungnya hanya untuk menggunakan arcsin; pilih fungsi invers yang sesuai dengan sisi yang sudah Anda miliki."
        ]
      },
      "arcsin-faq": {
        "h2": "Pertanyaan yang Sering Diajukan"
      },
      "arcsin-related": {
        "h2": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait"
      },
      "arcsin-conclusion": {
        "h2": "Temukan Sudut Apa Pun dari Sinus dengan Percaya Diri",
        "paragraphs": [
          "Mulailah dengan mengidentifikasi sisi berhadapan: sisi di seberang sudut target Anda. Pastikan hipotenusa adalah sisi terpanjang. Bagi, terapkan arcsin, dan baca sudut dalam derajat. Dapatkan sudut kedua dari 90 dikurangi yang pertama. Verifikasi dengan pemeriksaan sinus bolak-balik, perhitungan metode silang, dan teorema Pythagoras. Dengan langkah-langkah ini, soal sisi-berhadapan-dan-hipotenusa apa pun menjadi rutinitas yang andal. Kembali ke kalkulator di bagian atas halaman ini untuk menghitung angka Anda."
        ]
      }
    },
    "tocHeading": "Di Panduan Ini",
    "tocItems": {
      "arcsin-anatomy": "Memahami Sisi Berhadapan dan Hipotenusa",
      "arcsin-applications": "Contoh dalam Kehidupan Nyata",
      "arcsin-choose": "Memilih Kalkulator yang Tepat",
      "arcsin-conclusion": "Temukan Sudut Apa Pun dari Sinus dengan Percaya Diri",
      "arcsin-examples": "Contoh Langkah Demi Langkah",
      "arcsin-faq": "FAQ",
      "arcsin-formula": "Cara Kerja Rumus Sinus Invers",
      "arcsin-howto": "Cara Menggunakan Kalkulator",
      "arcsin-intro": "Cara Mencari Sudut Menggunakan Sinus",
      "arcsin-mistakes": "Kesalahan Umum",
      "arcsin-ratio": "Bagaimana Rasio Mengubah Sudut",
      "arcsin-related": "Jelajahi Kalkulator Segitiga Terkait",
      "arcsin-units": "Satuan Sudut dan Presisi Pengukuran",
      "arcsin-verify": "Memeriksa Sudut yang Dihitung",
      "arcsin-what": "Apa Itu Sinus dalam Segitiga Siku-Siku?"
    }
  },
  "ar": {
    "faqs": [
      {
        "answer": "إنها تجد الزاوية الحادة التي يساوي جيبها نسبة الضلع المقابل إلى الوتر. اقسم طول الضلع المقابل على طول الوتر، ثم طبق الجيب العكسي لتحويل ذلك العدد العشري إلى الزاوية بالدرجات.",
        "question": "ماذا تحسب الصيغة A = arcsin(a/c)؟"
      },
      {
        "answer": "حدد الضلع المقابل والوتر، واقسم الأول على الثاني للحصول على نسبة بين 0 و1، ثم طبق قوس الجيب. فمثلاً، مقابل 3 ووتر 5 يعطيان arcsin(0.6)، أي نحو 36.87 درجة.",
        "question": "كيف تجد زاوية باستخدام الجيب العكسي؟"
      },
      {
        "answer": "لأن الجيب يُعرَّف بأنه المقابل على الوتر. وهذان الضلعان يحددان النسبة تماماً، والنسبة تحدد الزاوية تماماً. ولا حاجة لأي قياس آخر، والضلع المجاور لا يدخل الصيغة أبداً.",
        "question": "لماذا أحتاج الضلع المقابل والوتر؟"
      },
      {
        "answer": "نعم. فهذه هي فائدة هذه الحاسبة. فقوس الجيب يستخدم الضلع المقابل والوتر فقط، فيمكن أن يبقى الضلع المجاور مجهولاً طوال الوقت.",
        "question": "هل يمكنني حساب الزاوية دون معرفة الضلع المجاور؟"
      },
      {
        "answer": "الجيب يأخذ زاوية ويُرجع نسبة: فجيب 30 درجة يساوي 0.5. والجيب العكسي يعكس ذلك: يأخذ نسبة ويُرجع الزاوية، فقوس جيب 0.5 يساوي 30 درجة. استخدم الجيب عندما تعرف الزاوية؛ واستخدم قوس الجيب عندما تعرف الأضلاع.",
        "question": "ما الفرق بين الجيب والجيب العكسي؟"
      },
      {
        "answer": "نعم. فـ Arcsin(x) وsin^-1(x) تدوينان للدالة العكسية نفسها. والأس -1 لا يعني المقلوب؛ فمقلوب الجيب هو قاطع التمام، ويُكتب csc(x).",
        "question": "هل قوس الجيب هو نفسه sin^-1؟"
      },
      {
        "answer": "الوتر هو دائماً أطول أضلاع المثلث القائم الزاوية. فإذا كان مدخل الضلع المقابل لديك أطول، فالأضلاع مسماة خطأ: فأطول قياساتك الثلاثة هو الوتر بالتعريف.",
        "question": "لماذا يجب أن يكون الوتر أطول من الضلع المقابل؟"
      },
      {
        "answer": "تصبح النسبة 1 ويكون arcsin(1) = 90 درجة. لكن زاوية حادة قياسها 90 درجة مستحيلة في مثلث قائم غير منحل؛ فتساوي الضلعين يصف حالة حدية منهارة لا مثلثاً حقيقياً.",
        "question": "ماذا يحدث إذا تساوى الضلع المقابل مع الوتر؟"
      },
      {
        "answer": "النسبة الأكبر تعني زاوية أكبر. فالنسبة 0.2 تعطي نحو 11.54 درجة، و0.5 تعطي 30 درجة بالضبط، و0.8 تعطي نحو 53.13 درجة. وكلما اقترب طول الضلع المقابل من طول الوتر اقتربت الزاوية من 90 درجة.",
        "question": "كيف تؤثر نسبة المقابل إلى الوتر على الزاوية؟"
      },
      {
        "answer": "ثلاثة فحوصات مستقلة: احسب sin(A) وتأكد أنه يساوي a/c؛ واحسب المتممة B = 90 - A وتأكد أن المثلث ما زال معقولاً؛ واشتق الضلع المجاور بنظرية فيثاغورس وتأكد أن a^2 + b^2 = c^2.",
        "question": "كيف أتحقق من الزاوية التي حسبتها؟"
      },
      {
        "answer": "نعم، للهندسة. أدخل الارتفاع العمودي كضلع مقابل والطول المائل كوتر. وتذكر أن النتيجة زاوية هندسية فقط؛ فهي لا تشهد على السلامة الإنشائية أو الامتثال لكود البناء.",
        "question": "هل يمكنني استخدام هذه الحاسبة لتقدير زاوية سقف أو منحدر أو سلم؟"
      },
      {
        "answer": "عادة بسبب التقريب: فقد تقرب الكتب النسبة قبل تطبيق قوس الجيب، أو تقرب الزاوية النهائية بشكل مختلف. حافظ على الدقة الكاملة أثناء الحساب وقرب في النهاية فقط، وستتطابق الإجابات حتى الأرقام المعروضة.",
        "question": "لماذا قد تختلف إجابتي المحسوبة قليلاً عن إجابة الكتاب؟"
      }
    ],
    "relatedHeading": "استكشف حاسبات المثلثات ذات الصلة",
    "relatedIntro": "بعد إيجاد زاويتك، تابع مع الحاسبات ذات الصلة التالية لإكمال تحليل مثلثك.",
    "relatedItems": [
      "حاسبة زاوية المثلث القائم الزاوية",
      "حاسبة زاوية المثلث القائم من جيب التمام",
      "حاسبة زاوية المثلث القائم من الظل",
      "حاسبة ضلع المثلث القائم من الجيب",
      "حاسبة أضلاع المثلث القائم الزاوية",
      "حاسبة الزاوية المفقودة للمثلث القائم",
      "حاسبة النسب المثلثية للمثلث القائم",
      "حاسبة نسبة الجيب"
    ],
    "sections": {
      "arcsin-intro": {
        "h2": "كيف تجد زاوية باستخدام الجيب",
        "paragraphs": [
          "تخيل منحدر كرسي متحرك: تعرف أن سطحه المائل يبلغ 9.5 أمتار ويرتفع 0.75 متر عن الأرض. فما زاوية ميل المنحدر؟ تجيب حاسبة زاوية المثلث القائم من الجيب عن هذا النوع من الأسئلة بالضبط. فهي تأخذ الضلع المقابل والوتر في مثلث قائم الزاوية وتُرجع الزاوية الحادة بينهما.",
          "يكفي هذان القياسان لأن الجيب يُعرَّف بأنه نسبة الضلع المقابل إلى الوتر. فمتى عُرفت تلك النسبة، حوَّلها الجيب العكسي إلى الزاوية. ولا يدخل الضلع المجاور في الحساب أبداً، وهذا ما يجعلها الأداة المناسبة كلما كان الضلع المقابل والوتر هما الكميتين اللتين قستهما فعلاً.",
          "في هذا الدليل، [[A]] هي الزاوية الحادة المرجعية المحسوبة، و[[a]] هو الضلع المقابل للزاوية [[A]]، و[[c]] هو الوتر. والزاوية المحسوبة هي الميل حيث يلتقي الوتر بالضلع المجاور، وتُقاس بالدرجات."
        ]
      },
      "arcsin-anatomy": {
        "figcaption": "تشريح قوس الجيب: الضلع a يقع قبالة الزاوية A، والضلع c هو الوتر قبالة الزاوية القائمة.",
        "h2": "فهم الضلع المقابل والوتر",
        "h3s": [
          "ما هو المثلث القائم الزاوية؟",
          "ما هو الضلع المقابل؟",
          "ما هو الوتر؟",
          "ما هو الضلع المجاور؟"
        ],
        "imgAlt": "مثلث قائم الزاوية مع إبراز الضلع المقابل a والوتر c لقوس الجيب",
        "paragraphs": [
          "للمثلث القائم الزاوية زاوية واحدة قياسها 90 درجة بالضبط. والزاويتان الأخريان حادتان، أي أن كلاً منهما أقل من 90 درجة حصراً، ومجموعهما دائماً 90 درجة. وعلاقة التتام هذه هي سبب أن إيجاد إحدى الزاويتين الحادتين يعطيك الأخرى فوراً بالطرح.",
          "شرط الزاوية القائمة مهم لأن الجيب وجيب التمام والظل تُعرَّف عبر نسب الأضلاع الثابتة في المثلثات القائمة. فمن دون ركن الـ90 درجة، لا تربط النسبة [[a/c]] أي زاوية بعلاقة ثابتة، ولا يستطيع الجيب العكسي استعادة زاوية.",
          "الضلع المقابل هو الضلع الذي يقع قبالة الزاوية [[A]] مباشرة. ولا يمس رأس الزاوية [[A]] أبداً. وفي مسائل الارتفاع يمثل هذا الضلع عادة الارتفاع العمودي: الارتفاع الذي يبلغه السلم على الجدار، أو ارتفاع المنحدر، أو المركبة العمودية لذراع رافعة.",
          "التسمية نسبية. فإذا بدلت زاوية المرجع من [[A]] إلى [[B]]، صار الضلع الذي كان مقابلاً مجاوراً وبالعكس. فتأكد دائماً من الزاوية التي تحل لها قبل تسمية الأضلاع.",
          "الوتر هو الضلع المقابل للزاوية القائمة، ويرمز له بـ[[c]]. وهو دائماً أطول أضلاع المثلث. ولا يمس رأس الزاوية القائمة أبداً. وفي السياقات العملية يكون الوتر غالباً هو الطول المائل نفسه: السلم، أو عارضة السقف، أو سطح المنحدر، أو مسافة الرؤية المستقيمة.",
          "عندما يُرسم المثلث مدوراً، حدد الوتر أولاً بإيجاد الضلع المقابل لعلامة الزاوية القائمة المربعة. وكل ما عداه يتبع من ذلك التحديد.",
          "الضلع [[b]] هو الساق التي تمس الزاوية [[A]] دون أن تكون الوتر. وهذه الحاسبة لا تحتاجه. وإذا احتجت الضلع المجاور لاحقاً، تعطيك نظرية فيثاغورس إياه بصيغة [[b = \\sqrt{c^2 - a^2}]]."
        ]
      },
      "arcsin-what": {
        "figcaption": "كيف يعمل قوس الجيب: اقسم الضلع المقابل على الوتر، ثم طبق الجيب العكسي لاستعادة الزاوية.",
        "h2": "ما هو الجيب في المثلث القائم الزاوية؟",
        "h3s": [
          "ما هو الجيب العكسي؟",
          "هل قوس الجيب هو نفسه الجيب العكسي؟",
          "لماذا تستخدم الصيغة الضلع المقابل؟"
        ],
        "imgAlt": "رسم يوضح قسمة a على c ثم تطبيق قوس الجيب للحصول على الزاوية",
        "paragraphs": [
          "يقيس الجيب نسبة ما يمثله الضلع المقابل من الوتر. والتعريف هو:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "هنا [[\\sin(A)]] هو جيب الزاوية [[A]]، و[[a]] هو الضلع المقابل، و[[c]] هو الوتر. فإذا كان الضلع المقابل 3 وحدات والوتر 5 وحدات، فإن [[\\sin(A) = 3/5 = 0.6]]. والنسبة بلا أبعاد: فالأمتار مقسومة على الأمتار تتلاشى، فتكون النتيجة 0.6 نفسها سواء قست بالأمتار أو الأقدام أو السنتيمترات.",
          "الجيب العادي يبدأ بزاوية وينتج نسبة. والجيب العكسي يبدأ بنسبة صالحة ويُرجع الزاوية المقابلة. فإذا كان [[\\sin(A) = 0.6]]، فإن [[A = \\arcsin(0.6) \\approx 36.87^\\circ]]. يعكس الجيب العكسي علاقة الجيب لاستعادة الزاوية التي بدأت منها.",
          "نعم. فالتدوينان [[\\arcsin(x)]] و[[\\sin^{-1}(x)]] يشيران إلى الدالة نفسها. والأس [[-1]] لا يعني المقلوب. فمقلوب الجيب دالة مختلفة تماماً: قاطع التمام، ويُكتب [[\\csc(x)]].",
          "الجيب هو النسبة التي تربط الضلع المقابل بالوتر، وهذا هو بالضبط الزوج الذي تقبله هذه الحاسبة. وتلخص وسيلة التذكر SOH-CAH-TOA الأزواج الثلاثة: فـ SOH تعني أن الجيب يساوي المقابل على الوتر، وCAH تعني أن جيب التمام يساوي المجاور على الوتر، وTOA تعني أن الظل يساوي المقابل على المجاور. وعندما يكون ضلعاك المعلومان هما المقابل والوتر، ينطبق SOH، فقوس الجيب هو الدالة العكسية الصحيحة."
        ]
      },
      "arcsin-formula": {
        "h2": "كيف تعمل صيغة الجيب العكسي",
        "paragraphs": [
          "ابدأ بتعريف الجيب:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "تتيح لك أطوال الأضلاع المعلومة حساب النسبة على اليمين. ثم طبق الجيب العكسي على الطرفين لعزل الزاوية:",
          "[[[A=\\arcsin\\left(\\frac{a}{c}\\right)]]]",
          "يطبق الجيب العكسي على النسبة كاملة لأن النسبة ككل هي قيمة الجيب. لنحل مثالاً عددياً. بمعلومية [[a = 3]] سم و[[c = 5]] سم:",
          "الخطوة 1: اقسم الضلع المقابل على الوتر: [[3/5 = 0.6]].",
          "الخطوة 2: طبق الجيب العكسي: [[A = \\arcsin(0.6)]].",
          "الخطوة 3: احسب الزاوية: [[A \\approx 36.87^\\circ]].",
          "النتيجة تقريب مقرَّب إلى منزلتين عشريتين. وبلغة بسيطة: الزاوية التي جيبها 0.6 قياسها نحو 36.87 درجة."
        ]
      },
      "arcsin-howto": {
        "h2": "كيف تستخدم حاسبة زاوية المثلث القائم من الجيب",
        "listItems": [
          "<strong>حدد الزاوية القائمة.</strong> تعمل الحاسبة للمثلثات القائمة فقط، فحدد ركن الـ90 درجة أولاً.",
          "<strong>حدد الضلع المقابل [[a]].</strong> يقع قبالة الزاوية [[A]] مباشرة ولا يمس رأسها أبداً.",
          "<strong>حدد الوتر [[c]].</strong> يقع قبالة الزاوية 90 درجة وهو أطول ضلع.",
          "<strong>قس طولي الضلعين أو احصل عليهما.</strong> استخدم شريط قياس أو رسم مخطط أو بيانات المسألة المعطاة.",
          "<strong>أدخل طول الضلع المقابل</strong> في حقل الإدخال المقابل.",
          "<strong>أدخل طول الوتر</strong> في حقل إدخاله.",
          "<strong>اختر وحدات متوافقة</strong> بمحددات الوحدات بحيث يستخدم الضلعان الوحدة نفسها.",
          "<strong>تأكد أن الوتر أطول من الضلع المقابل.</strong> فإن لم يكن، فالأضلاع مسماة خطأ.",
          "<strong>اضغط احسب الزاوية A.</strong> تقسم الأداة وتطبق قوس الجيب وتُرجع الزاوية.",
          "<strong>اقرأ الزاوية المحسوبة بالدرجات</strong> ولاحظ هل تبدو معقولة للمثلث.",
          "<strong>تحقق من النتيجة</strong> بأحد الفحوصات في قسم التحقق أدناه.",
          "<strong>استخدم إعادة التعيين</strong> لمسح المدخلات وبدء حساب جديد."
        ]
      },
      "arcsin-examples": {
        "h2": "أمثلة خطوة بخطوة لإيجاد زاوية باستخدام الجيب",
        "h3s": [
          "مثال 1: مثلث قائم أساسي 3-4-5",
          "مثال 2: عندما يكون الضلع المقابل نصف الوتر",
          "مثال 3: مثلث بنسبة مقابل إلى وتر 0.8",
          "مثال 4: ضلع مقابل صغير"
        ],
        "paragraphs": [
          "بمعلومية الضلع المقابل [[a = 3]] سم والوتر [[c = 5]] سم، أوجد الزاوية [[A]].",
          "الخطوة 1: اكتب الصيغة: [[A = \\arcsin(a/c)]].",
          "الخطوة 2: عوّض القيم: [[A = \\arcsin(3/5)]].",
          "الخطوة 3: احسب النسبة: [[3/5 = 0.6]].",
          "الخطوة 4: طبق الجيب العكسي: [[A = \\arcsin(0.6) \\approx 36.87^\\circ]].",
          "هذه الزاوية هي الميل بين الوتر والضلع المجاور، والضلع 3 سم يقف قبالته.",
          "بمعلومية [[a = 5]] م و[[c = 10]] م: [[A = \\arcsin(5/10) = \\arcsin(0.5) = 30^\\circ]] بالضبط. وهذا هو مثلث 30-60-90 الخاص المألوف، حيث الضلع المقابل للزاوية 30 درجة يساوي نصف الوتر.",
          "بمعلومية [[a = 8]] م و[[c = 10]] م: [[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. والزاوية أكبر من 30 درجة لأن الضلع المقابل يمثل نسبة أكبر من الوتر.",
          "بمعلومية [[a = 2]] قدم و[[c = 10]] قدم: [[A = \\arcsin(2/10) = \\arcsin(0.2) \\approx 11.54^\\circ]]. فالضلع المقابل القصير نسبياً ينتج زاوية صغيرة، إذ المثلث طويل وضحل."
        ]
      },
      "arcsin-applications": {
        "figcaption": "أربعة أمثلة عملية لقوس الجيب: السقف والسلم والمنحدر والمساحة، لكل منها أضلاعه المقاسة وزاويته الناتجة.",
        "h2": "أمثلة من الحياة الواقعية لحساب الزوايا باستخدام الجيب",
        "h3s": [
          "مثال 5: إيجاد زاوية ميل السقف",
          "مثال 6: إيجاد زاوية السلم",
          "مثال 7: حساب ميل منحدر",
          "مثال 8: إيجاد زاوية في المساحة",
          "مثال 9: حساب زاوية سلك الشد",
          "مثال 10: إيجاد ميل درج",
          "مثال 11: حساب زاوية صعود طائرة",
          "مثال 12: إيجاد زاوية دعامة ميكانيكية",
          "مثال 13: حساب ميل ذراع رافعة",
          "مثال 14: تقدير زاوية ارتفاع شجرة",
          "مثال 15: حساب ميل مسار مشي جبلي",
          "مثال 16: إيجاد زاوية دعامة مظلة"
        ],
        "imgAlt": "أربع لوحات: أمثلة قوس الجيب لعارضة السقف والسلم والمنحدر والمساحة",
        "paragraphs": [
          "عارضة سقف طولها 6.5 م وترتفع 4 م عمودياً فوق مستوى نقطة بدايتها. أوجد الزاوية بين العارضة والأفقي. تشكل العارضة والارتفاع العمودي مثلثاً قائماً: فالارتفاع مقابل لزاوية الميل، والعارضة هي الوتر. والجيب العكسي مناسب لأن الزوج المعلوم هو المقابل والوتر.",
          "[[A = \\arcsin(4/6.5) = \\arcsin(0.61538) \\approx 37.98^\\circ]]. يصعد السقف نحو 38 درجة عن الأفقي. لاحظ أن هذا الحساب الهندسي ليس تقييماً كاملاً لتصميم السقف؛ فالعوامل الإنشائية أمر منفصل.",
          "سلم طوله 5.5 م ويبلغ 4.5 م على الجدار. احسب الزاوية بين السلم والأرض المستوية. فارتفاع الجدار مقابل لزاوية الأرض، والسلم نفسه هو الوتر، فينطبق قوس الجيب.",
          "[[A = \\arcsin(4.5/5.5) \\approx 54.90^\\circ]]. يميل السلم نحو 54.9 درجة. وهذا الحساب وحده لا يثبت أن السلم موضوع بأمان.",
          "منحدر طوله المائل 9.5 م وارتفاعه العمودي 0.75 م. أوجد زاويته بالنسبة إلى الأفقي. فالسطح المائل هو الوتر والارتفاع العمودي مقابل لزاوية الميل.",
          "[[A = \\arcsin(0.75/9.5) \\approx 4.53^\\circ]]. يرتفع المنحدر بلطف 4.53 درجات. ولا تدَّعِ أن المنحدر المحسوب يفي بمتطلبات إمكانية الوصول أو كود البناء.",
          "يسجل قياس مساحي مبسط فرقاً عمودياً 30 م ومسافة مائلة بخط مستقيم 50 م. احسب الزاوية بين الخط المائل والأفقي. فالفرق العمودي مقابل للزاوية؛ والمسافة المائلة هي الوتر.",
          "[[A = \\arcsin(30/50) = \\arcsin(0.6) \\approx 36.87^\\circ]]. وقد تتطلب المساحة الحقيقية تصحيحات ارتفاع الجهاز وتعديلات التضاريس تتجاوز هذا النموذج المبسط.",
          "سلك شد طوله 18 م، بفاصل عمودي 10 م بين طرفيه. أوجد الزاوية بين السلك والأفقي. فالفاصل العمودي هو الضلع المقابل والسلك هو الوتر.",
          "[[A = \\arcsin(10/18) \\approx 33.75^\\circ]]. تصف النتيجة الهندسة فقط؛ ولا تحدد شد السلك أو قوة المرساة أو السلامة الإنشائية.",
          "درج مبسط بارتفاع عمودي 2.8 م وطول عارضة مائلة 5 م. احسب الزاوية بين العارضة والأفقي. فالارتفاع والعارضة هما الضلع المقابل والوتر على الترتيب.",
          "[[A = \\arcsin(2.8/5) = \\arcsin(0.56) \\approx 34.06^\\circ]]. ولا يثبت هذا الحساب الامتثال لكود البناء.",
          "في مقطع طيران مبسط، تكسب طائرة 1,500 م من الارتفاع أثناء قطع 5,000 م على مسار طيران مستقيم. قدّر زاوية الصعود بالنسبة إلى الأفقي. فكسب الارتفاع مقابل لزاوية الصعود؛ ومسار الطيران هو الوتر.",
          "[[A = \\arcsin(1500/5000) = \\arcsin(0.3) \\approx 17.46^\\circ]]. وهذا نموذج مقطع مستقيم، وليس تحليلاً كاملاً لمسار طيران متغير.",
          "دعامة ميكانيكية طولها 1,700 مم وارتفاعها العمودي 800 مم. احسب زاويتها بالنسبة إلى الأفقي. تعمل الصيغة بالمليمترات أيضاً: فالارتفاع مقابل، وطول الدعامة هو الوتر.",
          "[[A = \\arcsin(800/1700) \\approx 28.07^\\circ]]. تصف النتيجة الهندسة لا القوة الإنشائية.",
          "ذراع رافعة مبسطة طولها 10 م ومركبتها العمودية 8 م. أوجد الزاوية بين الذراع والأفقي. فطول الذراع هو الوتر والمركبة العمودية مقابلة للزاوية.",
          "[[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. ولا تعتبر النتيجة مثبتة لقدرة الرافعة أو سلامة التشغيل.",
          "يراقب شخص قمة شجرة من نقطة حيث الفرق العمودي إلى قمة الشجرة 12 م ومسافة الرؤية بخط مستقيم 20 م. أوجد زاوية الارتفاع. فالفرق العمودي مقابل للزاوية؛ وخط الرؤية هو الوتر.",
          "[[A = \\arcsin(12/20) = \\arcsin(0.6) \\approx 36.87^\\circ]]. يعطي هذا الزاوية من مستوى المراقبة؛ ولا يعطي تلقائياً الارتفاع الكلي للشجرة فوق الأرض.",
          "مقطع مشي مستقيم مبسط بطول مائل 100 م وارتفاع عمودي 80 م. أوجد زاوية الميل. فالارتفاع والمسافة المائلة هما الضلع المقابل والوتر.",
          "[[A = \\arcsin(80/100) = \\arcsin(0.8) \\approx 53.13^\\circ]]. وهذا ميل توضيحي شديد الانحدار؛ فمسارات المشي الفعلية تتفاوت في انحدارها على طولها.",
          "دعامة مظلة قطرية طولها 3.5 م وترتفع 1.2 م عمودياً. احسب الزاوية بين الدعامة والأفقي. فالارتفاع العمودي مقابل للزاوية والدعامة هي الوتر.",
          "[[A = \\arcsin(1.2/3.5) \\approx 20.05^\\circ]]. ولا تتحقق النتيجة من ملاءمة الدعامة إنشائياً."
        ]
      },
      "arcsin-ratio": {
        "figcaption": "مع ثبات الوتر عند 10 وحدات، ينتج الضلع المقابل الأكبر زاوية حادة أكبر: 11.54 ثم 30 ثم 53.13 درجة.",
        "h2": "كيف تغير نسبة المقابل إلى الوتر الزاوية",
        "imgAlt": "ثلاث لوحات توضح أن الضلع المقابل الأكبر يعطي زاوية أكبر عند ثبات الوتر",
        "paragraphs": [
          "تحدد النسبة [[a/c]] الزاوية [[A]]. فالضلع المقابل الأكبر بالنسبة إلى الوتر ينتج زاوية حادة أكبر، لأن قدراً أكبر من طول الوتر يقف عمودياً. والنسبة الصغيرة تنتج زاوية صغيرة: فالمثلث طويل وضحل.",
          "عندما يكون الضلع المقابل نصف الوتر بالضبط، تكون الزاوية 30 درجة. وتشترك المثلثات المتناسبة في الزوايا مهما كان حجمها: فتكبير كل ضلع بالعامل نفسه يبقي كل نسبة ثابتة، فتبقى الزوايا ثابتة. وتغيير الوحدات من الأمتار إلى السنتيمترات لا يغير شيئاً للسبب نفسه.",
          "يجب أن تبقى النسبة بين 0 و1 للمثلث القائم العادي. فالنسبة 0 تعني غياب الضلع المقابل تماماً، والنسبة 1 تعني تساوي الضلع المقابل مع الوتر؛ وكلتاهما حالتان حديتان منحلتان لا مثلث حقيقي بثلاثة أضلاع موجبة."
        ]
      },
      "arcsin-units": {
        "h2": "فهم وحدات الزوايا ودقة القياس",
        "h3s": [
          "مثال: هل تغير وحدة القياس الزاوية؟"
        ],
        "paragraphs": [
          "تُرجع هذه الحاسبة الزوايا بالدرجات، وهي الوحدة المعيارية في البناء والمساحة وهندسة المدارس. تقسم الدرجة الدائرة الكاملة إلى 360 جزءاً. والراديان هو البديل: فالدائرة الكاملة [[2\\pi]] راديان. وقد يُرجع الجيب العكسي في الحاسبة اليدوية أياً منهما حسب إعداد الوضع.",
          "حوّل بينهما بـ: [[\\text{Degrees} = \\text{Radians} \\times \\frac{180^\\circ}{\\pi}]]. ونسبة الضلع المدخلة نفسها بلا وحدة، ويجب أن يستخدم الضلعان وحدتين متوافقتين: أمتار مع أمتار، أو مليمترات مع مليمترات.",
          "خذ [[a = 3]] م و[[c = 5]] م. فالنسبة 0.6 والزاوية 36.87 درجة. وبالسنتيمترات، [[a = 300]] سم و[[c = 500]] سم يعطيان النسبة نفسها 0.6 والزاوية نفسها. فتكبير القياسين بالعامل نفسه يتلاشى.",
          "احتفظ بأرقام إضافية أثناء الخطوات الوسيطة وقرب الزاوية النهائية فقط. وتعتمد الدقة المبررة على قياسات المدخلات: فالقياسات الميدانية التقريبية تدعم منزلة عشرية واحدة، بينما القياسات الدقيقة في الورشة قد تدعم منزلتين."
        ]
      },
      "arcsin-mistakes": {
        "h2": "أخطاء شائعة عند حساب زاوية باستخدام الجيب",
        "listItems": [
          "<strong>استخدام الضلع المجاور بدل الضلع المقابل.</strong> تحقق من الرأس الذي تقع فيه زاويتك، ثم خذ الضلع القبالته. فإن استخدمت الساق الماسة، فقد حسبت قوس جيب التمام لا قوس الجيب.",
          "<strong>استخدام الوتر كبسط.</strong> فالصيغة هي [[a/c]]، المقابل على الوتر. وقلبها يعطي نسبة فوق 1 وخطأ في المجال.",
          "<strong>عكس النسبة.</strong> فـ[[\\arcsin(c/a)]] ليست الزاوية نفسها. ففي 3-4-5، [[\\arcsin(3/5) = 36.87^\\circ]] لكن [[\\arcsin(5/3)]] غير معرف.",
          "<strong>استخدام الجيب العادي بدل الجيب العكسي.</strong> يحتاج الجيب مدخل زاوية. فإن كنت تعرف الأضلاع وتحتاج الزاوية، فأنت بحاجة إلى الدالة العكسية.",
          "<strong>الخلط بين الجيب العكسي ومقلوب الجيب.</strong> فـ[[\\sin^{-1}(x)]] هو قوس الجيب؛ و[[1/\\sin(x)]] هو قاطع التمام. ولا علاقة بينهما.",
          "<strong>إدخال ضلع مقابل أطول من الوتر.</strong> مستحيل هندسياً في مثلث قائم. أعد تسمية أضلاعك: فأطول قياس هو الوتر.",
          "<strong>إدخال أطوال أضلاع صفرية أو سالبة.</strong> يجب أن تكون الأطوال موجبة. فالضلع المقابل الصفري يصف خطاً مسطحاً لا مثلثاً.",
          "<strong>خلط وحدات القياس.</strong> فإدخال الضلع المقابل بالأمتار والوتر بالسنتيمترات يفسد النسبة. حوّل أولاً.",
          "<strong>تقريب النسبة مبكراً.</strong> فتقريب 0.61538 إلى 0.62 قبل تطبيق قوس الجيب يزحزح مثال السقف من 37.98 إلى 38.32 درجة. حافظ على الدقة الكاملة حتى النهاية.",
          "<strong>الإبلاغ بالراديان بينما الدرجات متوقعة.</strong> فالإجابة 0.64 تعني عادة أن الحاسبة في وضع الراديان؛ اضرب في [[180/\\pi]] للحصول على 36.87 درجة.",
          "<strong>حساب الزاوية B بينما الأداة تجد الزاوية A.</strong> تُرجع الحاسبة الزاوية المقابلة للضلع [[a]]. والزاوية الحادة الأخرى هي [[90^\\circ - A]].",
          "<strong>افتراض أن الزاوية تثبت السلامة الإنشائية.</strong> فالزاوية هندسة محضة. ويحتاج استقرار السلم وقوة السقف وامتثال المنحدر فحوصات هندسية منفصلة.",
          "<strong>الخلط بين الارتفاع العمودي والمسافة المائلة.</strong> ففي مثال المنحدر، الـ9.5 م هي السطح المائل (الوتر) لا الامتداد الأفقي. وتبديلهما يغير المثلث كلياً.",
          "<strong>اعتبار نسبة مستحيلة صالحة.</strong> فإن تجاوزت [[a/c]] المحسوبة 1، فتوقف: فلا مثلث قائم له تلك الأضلاع. وابحث عن خطأ التسمية بدل فرض الحساب."
        ]
      },
      "arcsin-verify": {
        "h2": "كيف تتحقق من صحة الزاوية المحسوبة",
        "h3s": [
          "الطريقة 1: تحقق من نسبة الجيب",
          "الطريقة 2: تحقق من الزاوية المتممة",
          "الطريقة 3: استخدم نظرية فيثاغورس"
        ],
        "paragraphs": [
          "يتطلب المثلث القائم الصالح غير المنحل: ضلعاً مقابلاً موجباً، ووتراً موجباً، ووتراً أطول من الضلع المقابل حصراً، والنسبة [[a/c]] بين 0 و1 حصراً، والزاوية الناتجة بين 0 و90 درجة حصراً.",
          "فإذا كان [[a = c]]، يُرجع قوس الجيب 90 درجة، وهي حالة حدية منحلة لا مثلث حقيقي. وإذا كان [[a > c]]، فالمثلث مستحيل هندسياً.",
          "تحقق من [[\\sin(A) \\approx a/c]] باستخدام الزاوية غير المقربة. ففي مثال 3-4-5، [[\\sin(36.87^\\circ) \\approx 0.6 = 3/5]].",
          "احسب [[B = 90^\\circ - A]]. فيجب أن يكون مجموع الزاويتين الحادتين 90 درجة بالضبط. ثم تأكد أن المثلث معقول مع اعتبار الزاوية [[B]] مرجعاً.",
          "احسب الضلع المجاور [[b = \\sqrt{c^2 - a^2}]]، ثم تحقق من [[a^2 + b^2 \\approx c^2]]. فلـ[[a = 3]] و[[c = 5]]: [[b = \\sqrt{25 - 9} = 4]]، و[[9 + 16 = 25]]. وتنشأ الفروق الصغيرة عن تقريب الزاوية المعروضة لا عن الحاسبة."
        ]
      },
      "arcsin-choose": {
        "h2": "اختيار حاسبة المثلث القائم المناسبة",
        "paragraphs": [
          "<strong>حاسبة زاوية المثلث القائم من الجيب:</strong> استخدمها عندما تعرف الضلع المقابل والوتر وتحتاج الزاوية [[A]]. وهذه هي الصفحة التي أنت فيها.",
          "<strong>حاسبة زاوية المثلث القائم من جيب التمام:</strong> استخدمها عندما تعرف الضلع المجاور والوتر. الزاوية نفسها، وزوج أضلاع مختلف.",
          "<strong>حاسبة زاوية المثلث القائم من الظل:</strong> استخدمها عندما تعرف الساقين دون الوتر. وهي شائعة لقياسات الارتفاع على الامتداد الأفقي الميدانية.",
          "<strong>حاسبة زاوية المثلث القائم:</strong> تساعدك على اختيار الطريقة الصحيحة عندما لا تكون متأكداً من الأضلاع التي لديك.",
          "<strong>حاسبة ضلع المثلث القائم من الجيب:</strong> تعكس الاتجاه: فبمعلومية زاوية ووتر، تجد الضلع المقابل.",
          "<strong>حاسبة أضلاع المثلث القائم الزاوية:</strong> تجد أطوال الأضلاع المفقودة من قياسات المثلث المعلومة.",
          "طابق الأداة مع قياساتك. فإن كان الضلع المقابل مجهولاً ويصعب قياسه، فلا تحسبه لمجرد استخدام قوس الجيب؛ بل اختر الدالة العكسية التي تناسب الأضلاع التي لديك فعلاً."
        ]
      },
      "arcsin-faq": {
        "h2": "أسئلة شائعة"
      },
      "arcsin-related": {
        "h2": "استكشف حاسبات المثلثات ذات الصلة"
      },
      "arcsin-conclusion": {
        "h2": "أوجد أي زاوية من الجيب بثقة",
        "paragraphs": [
          "ابدأ بتحديد الضلع المقابل: الضلع القبالة لزاويتك المستهدفة. وتأكد أن الوتر هو أطول ضلع. اقسم، وطبق قوس الجيب، واقرأ الزاوية بالدرجات. واحصل على الزاوية الثانية من 90 ناقص الأولى. وتحقق بالفحص الذهاب والإياب للجيب، وحساب بطريقة متقاطعة، ونظرية فيثاغورس. وبهذه الخطوات، تتحول أي مسألة مقابل ووتر إلى روتين موثوق. وعد إلى الحاسبة أعلى هذه الصفحة لتشغيل أرقامك."
        ]
      }
    },
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "arcsin-anatomy": "فهم الضلع المقابل والوتر",
      "arcsin-applications": "أمثلة من الحياة الواقعية",
      "arcsin-choose": "اختيار الحاسبة المناسبة",
      "arcsin-conclusion": "أوجد أي زاوية من الجيب بثقة",
      "arcsin-examples": "أمثلة خطوة بخطوة",
      "arcsin-faq": "أسئلة شائعة",
      "arcsin-formula": "كيف تعمل صيغة الجيب العكسي",
      "arcsin-howto": "كيف تستخدم الحاسبة",
      "arcsin-intro": "كيف تجد زاوية باستخدام الجيب",
      "arcsin-mistakes": "أخطاء شائعة",
      "arcsin-ratio": "كيف تغير النسبة الزاوية",
      "arcsin-related": "استكشف حاسبات المثلثات ذات الصلة",
      "arcsin-units": "وحدات الزوايا ودقة القياس",
      "arcsin-verify": "التحقق من الزاوية المحسوبة",
      "arcsin-what": "ما هو الجيب في المثلث القائم الزاوية؟"
    }
  },
  "bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
      "arcsin-intro": "Как да намерим ъгъл чрез синус",
      "arcsin-anatomy": "Разбиране на срещулежащата страна и хипотенузата",
      "arcsin-what": "Какво е синус в правоъгълен триъгълник?",
      "arcsin-formula": "Как работи формулата за обратен синус",
      "arcsin-howto": "Как да използвате калкулатора",
      "arcsin-examples": "Решени примери стъпка по стъпка",
      "arcsin-applications": "Примери от реалния живот",
      "arcsin-ratio": "Как отношението променя ъгъла",
      "arcsin-units": "Мерни единици за ъгли и точност на измерването",
      "arcsin-mistakes": "Чести грешки",
      "arcsin-verify": "Проверка на изчисления ъгъл",
      "arcsin-choose": "Избор на подходящ калкулатор",
      "arcsin-faq": "ЧЗВ",
      "arcsin-related": "Свързани калкулатори",
      "arcsin-conclusion": "Намерете всеки ъгъл чрез синус с увереност"
    },
    "sections": {
      "arcsin-intro": {
        "h2": "Как да намерим ъгъл чрез синус",
        "paragraphs": [
          "Представете си рампа за инвалидни колички: знаете, че наклонената ѝ повърхност е 9.5 метра и тя се издига 0.75 метра над земята. Какъв е ъгълът на наклон на рампата? Калкулаторът за ъгъл на правоъгълен триъгълник от синус отговаря точно на такива въпроси. Той приема срещулежащата страна и хипотенузата на правоъгълен триъгълник и връща острия ъгъл между тях.",
          "Тези две измервания са достатъчни, защото синусът е дефиниран като отношение на срещулежащата страна към хипотенузата. Щом това отношение е известно, обратният синус го превръща обратно в ъгъл. Прилежащата страна никога не участва в изчислението, което прави този инструмент правилният, когато срещулежащата страна и хипотенузата са величините, които действително сте измерили.",
          "В това ръководство [[A]] е острият референтен ъгъл, който се изчислява, [[a]] е страната срещу ъгъл [[A]], а [[c]] е хипотенузата. Изчисленият ъгъл е наклонът, където хипотенузата среща прилежащата страна, измерен в градуси."
        ]
      },
      "arcsin-anatomy": {
        "h2": "Разбиране на срещулежащата страна и хипотенузата",
        "h3s": [
          "Какво е правоъгълен триъгълник?",
          "Какво е срещулежаща страна?",
          "Какво е хипотенуза?",
          "Какво е прилежаща страна?"
        ],
        "paragraphs": [
          "Правоъгълният триъгълник има един ъгъл от точно 90 градуса. Другите два ъгъла са остри, което означава, че всеки е строго под 90 градуса, и заедно винаги дават 90 градуса. Тази комплементарна връзка е причината намирането на един остър ъгъл незабавно да дава другия чрез изваждане.",
          "Условието за прав ъгъл е важно, защото синусът, косинусът и тангенсът са дефинирани чрез фиксираните отношения на страните на правоъгълни триъгълници. Без ъгъла от 90 градуса отношението [[a/c]] няма фиксирана връзка с никой ъгъл и обратният синус не може да възстанови такъв.",
          "Срещулежащата страна е страната точно срещу ъгъл [[A]]. Тя никога не докосва върха на ъгъл [[A]]. В задачите за височина тази страна обикновено представлява вертикалното издигане: височината, на която стълба достига по стената, издигането на рампа или вертикалната съставка на стрела на кран.",
          "Означението е относително. Ако смените референтния си ъгъл от [[A]] на [[B]], страната, която е била срещулежаща, става прилежаща и обратно. Винаги потвърждавайте кой ъгъл решавате, преди да означите страните.",
          "Хипотенузата е страната срещу правия ъгъл, означена с [[c]]. Тя винаги е най-дългата страна на триъгълника. Тя никога не докосва върха на правия ъгъл. В практически условия хипотенузата често е самата наклонена дължина: стълбата, покривната греда, повърхността на рампата или правата линия на видимост.",
          "Когато триъгълникът е нарисуван завъртян, първо идентифицирайте хипотенузата, като намерите страната срещу квадратния маркер за прав ъгъл. Всичко останало следва от тази идентификация.",
          "Страна [[b]] е катетът, който докосва ъгъл [[A]], без да е хипотенузата. Този калкулатор не се нуждае от него. Ако по-късно ви потрябва прилежащата страна, Питагоровата теорема я дава като [[b = \\sqrt{c^2 - a^2}]]."
        ],
        "imgAlt": "Правоъгълен триъгълник със срещулежаща страна a и хипотенуза c, подчертани за арксинус",
        "figcaption": "Анатомия за арксинус: страна a е срещу ъгъл A, а страна c е хипотенузата срещу правия ъгъл."
      },
      "arcsin-what": {
        "h2": "Какво е синус в правоъгълен триъгълник?",
        "h3s": [
          "Какво е обратен синус?",
          "Арксинусът същият ли е като обратния синус?",
          "Защо формулата използва срещулежащата страна?"
        ],
        "paragraphs": [
          "Синусът измерва каква част от хипотенузата представлява срещулежащата страна. Дефиницията е:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "Тук [[\\sin(A)]] е синусът на ъгъл [[A]], [[a]] е срещулежащата страна, а [[c]] е хипотенузата. Ако срещулежащата страна е 3 единици, а хипотенузата е 5 единици, тогава [[\\sin(A) = 3/5 = 0.6]]. Отношението е безразмерно: метри, разделени на метри, се съкращават, така че същите 0.6 се получават независимо дали измервате в метри, футове или сантиметри.",
          "Обикновеният синус започва с ъгъл и произвежда отношение. Обратният синус започва с валидно отношение и връща съответния ъгъл. Ако [[\\sin(A) = 0.6]], тогава [[A = \\arcsin(0.6) \\approx 36.87^\\circ]]. Обратният синус обръща синусната връзка, за да възстанови ъгъла, от който сте тръгнали.",
          "Да. Нотациите [[\\arcsin(x)]] и [[\\sin^{-1}(x)]] се отнасят до една и съща функция. Горният индекс [[-1]] не означава реципрочна стойност. Реципрочната стойност на синуса е съвсем различна функция: косеканс, записан като [[\\csc(x)]].",
          "Синусът е отношението, което съчетава срещулежащата страна с хипотенузата, което е точно двойката, която този калкулатор приема. Паметната помощ SOH-CAH-TOA обобщава трите съчетания: SOH означава синус е равен на срещулежаща върху хипотенуза, CAH означава косинус е равен на прилежаща върху хипотенуза, а TOA означава тангенс е равен на срещулежаща върху прилежаща. Когато известните ви страни са срещулежаща и хипотенуза, се прилага SOH, така че арксинусът е правилната обратна функция."
        ],
        "imgAlt": "Диаграма, показваща как да разделите a на c и след това да приложите арксинус, за да получите ъгъла",
        "figcaption": "Как работи арксинусът: разделете срещулежащата страна на хипотенузата, след което приложете обратния синус, за да възстановите ъгъла."
      },
      "arcsin-formula": {
        "h2": "Как работи формулата за обратен синус",
        "paragraphs": [
          "Започнете с дефиницията за синус:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "Известните дължини на страните ви позволяват да изчислите отношението вдясно. След това приложете обратен синус от двете страни, за да изолирате ъгъла:",
          "[[[A=\\arcsin\\left(\\frac{a}{c}\\right)]]]",
          "Обратният синус се прилага върху цялото отношение, защото отношението като цяло е синусната стойност. Преминете през числов пример. Дадени [[a = 3]] cm и [[c = 5]] cm:",
          "Стъпка 1: Разделете срещулежащата страна на хипотенузата: [[3/5 = 0.6]].",
          "Стъпка 2: Приложете обратен синус: [[A = \\arcsin(0.6)]].",
          "Стъпка 3: Изчислете ъгъла: [[A \\approx 36.87^\\circ]].",
          "Резултатът е приближение, закръглено до два знака след десетичната запетая. С прости думи: ъгълът, чийто синус е 0.6, е приблизително 36.87 градуса."
        ]
      },
      "arcsin-howto": {
        "h2": "Как да използвате калкулатора за ъгъл на правоъгълен триъгълник от синус",
        "listItems": [
          "<strong>Идентифицирайте правия ъгъл.</strong> Калкулаторът работи само за правоъгълни триъгълници, затова първо намерете ъгъла от 90 градуса.",
          "<strong>Намерете срещулежащата страна [[a]].</strong> Тя е точно срещу ъгъл [[A]] и никога не докосва неговия връх.",
          "<strong>Идентифицирайте хипотенузата [[c]].</strong> Тя е срещу ъгъла от 90 градуса и е най-дългата страна.",
          "<strong>Измерете или вземете и двете дължини на страните.</strong> Използвайте ролетка, план или дадени данни от задачата.",
          "<strong>Въведете дължината на срещулежащата страна</strong> в съответното поле за въвеждане.",
          "<strong>Въведете дължината на хипотенузата</strong> в нейното поле за въвеждане.",
          "<strong>Изберете съвместими мерни единици</strong> с избиращите елементи за единици, така че двете страни да използват една и съща единица.",
          "<strong>Проверете дали хипотенузата е по-дълга от срещулежащата страна.</strong> Ако не е, страните са грешно означени.",
          "<strong>Натиснете Изчисли ъгъл A.</strong> Инструментът дели, прилага арксинус и връща ъгъла.",
          "<strong>Прочетете изчисления ъгъл в градуси</strong> и отбележете дали изглежда разумен за триъгълника.",
          "<strong>Проверете резултата</strong> с една от проверките в раздела за проверка по-долу.",
          "<strong>Използвайте Нулиране</strong>, за да изчистите входните данни и да започнете ново изчисление."
        ]
      },
      "arcsin-examples": {
        "h2": "Решени примери стъпка по стъпка за намиране на ъгъл чрез синус",
        "h3s": [
          "Пример 1: Основен правоъгълен триъгълник 3-4-5",
          "Пример 2: Когато срещулежащата страна е половината от хипотенузата",
          "Пример 3: Триъгълник с отношение срещулежаща към хипотенуза 0.8",
          "Пример 4: Малка срещулежаща страна"
        ],
        "paragraphs": [
          "Дадена срещулежаща страна [[a = 3]] cm и хипотенуза [[c = 5]] cm, намерете ъгъл [[A]].",
          "Стъпка 1: Запишете формулата: [[A = \\arcsin(a/c)]].",
          "Стъпка 2: Заместете стойностите: [[A = \\arcsin(3/5)]].",
          "Стъпка 3: Изчислете отношението: [[3/5 = 0.6]].",
          "Стъпка 4: Приложете обратен синус: [[A = \\arcsin(0.6) \\approx 36.87^\\circ]].",
          "Този ъгъл е наклонът между хипотенузата и прилежащата страна, като страната от 3 cm е срещу него.",
          "Дадени [[a = 5]] m и [[c = 10]] m: [[A = \\arcsin(5/10) = \\arcsin(0.5) = 30^\\circ]] точно. Това е познатият специален триъгълник 30-60-90, където страната срещу ъгъла от 30 градуса е половината от хипотенузата.",
          "Дадени [[a = 8]] m и [[c = 10]] m: [[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Ъгълът е по-голям от 30 градуса, защото срещулежащата страна представлява по-голяма част от хипотенузата.",
          "Дадени [[a = 2]] ft и [[c = 10]] ft: [[A = \\arcsin(2/10) = \\arcsin(0.2) \\approx 11.54^\\circ]]. Сравнително къса срещулежаща страна дава малък ъгъл, тъй като триъгълникът е дълъг и полегат."
        ]
      },
      "arcsin-applications": {
        "h2": "Примери от реалния живот за изчисляване на ъгли чрез синус",
        "h3s": [
          "Пример 5: Намиране на ъгъла на наклон на покрив",
          "Пример 6: Намиране на ъгъла на стълба",
          "Пример 7: Изчисляване на наклона на рампа",
          "Пример 8: Намиране на ъгъл в геодезията",
          "Пример 9: Изчисляване на ъгъла на разтягащо въже",
          "Пример 10: Намиране на наклона на стълбище",
          "Пример 11: Изчисляване на ъгъла на изкачване на самолет",
          "Пример 12: Намиране на ъгъла на механична разпонка",
          "Пример 13: Изчисляване на наклона на стрела на кран",
          "Пример 14: Оценка на ъгъла на възвишение към дърво",
          "Пример 15: Изчисляване на наклона на туристически маршрут",
          "Пример 16: Намиране на ъгъла на опора на тента"
        ],
        "paragraphs": [
          "Покривна греда е дълга 6.5 m и се издига 4 m вертикално над нивото на началната си точка. Намерете ъгъла между гредата и хоризонталата. Гредата и вертикалното издигане образуват правоъгълен триъгълник: издигането е срещу ъгъла на наклон, а гредата е хипотенузата. Обратният синус е подходящ, защото известната двойка е срещулежаща и хипотенуза.",
          "[[A = \\arcsin(4/6.5) = \\arcsin(0.61538) \\approx 37.98^\\circ]]. Покривът се издига под приблизително 38 градуса спрямо хоризонталата. Забележете, че това геометрично изчисление не е пълна оценка на покривната конструкция; конструктивните фактори са отделни.",
          "Стълба е дълга 5.5 m и достига 4.5 m по стената. Изчислете ъгъла между стълбата и хоризонталната земя. Височината по стената е срещу ъгъла при земята, а самата стълба е хипотенузата, така че се прилага арксинус.",
          "[[A = \\arcsin(4.5/5.5) \\approx 54.90^\\circ]]. Стълбата е наклонена под около 54.9 градуса. Това изчисление само по себе си не установява дали стълбата е безопасно поставена.",
          "Рампа има наклонена дължина 9.5 m и вертикално издигане 0.75 m. Намерете нейния ъгъл спрямо хоризонталата. Наклонената повърхност е хипотенузата, а вертикалното издигане е срещу ъгъла на наклон.",
          "[[A = \\arcsin(0.75/9.5) \\approx 4.53^\\circ]]. Рампата се издига под лек ъгъл от 4.53 градуса. Не твърдете, че изчислената рампа отговаря на изискванията за достъпност или строителните норми.",
          "Опростено геодезично измерване отчита вертикална разлика 30 m и права наклонена дистанция 50 m. Изчислете ъгъла между наклонената линия и хоризонталата. Вертикалната разлика е срещу ъгъла; наклонената дистанция е хипотенузата.",
          "[[A = \\arcsin(30/50) = \\arcsin(0.6) \\approx 36.87^\\circ]]. Истинската геодезия може да изисква корекции за височина на инструмента и теренни корекции извън този опростен модел.",
          "Разтягащо въже е дълго 18 m, с вертикално разстояние 10 m между краищата му. Намерете ъгъла между въжето и хоризонталата. Вертикалното разстояние е срещулежащата страна, а въжето е хипотенузата.",
          "[[A = \\arcsin(10/18) \\approx 33.75^\\circ]]. Резултатът описва само геометрия; той не определя опъна на въжето, якостта на котвата или конструктивната безопасност.",
          "Опростено стълбище има вертикално издигане 2.8 m и наклонена дължина на носещата греда 5 m. Изчислете ъгъла между гредата и хоризонталата. Издигането и гредата са съответно срещулежащата страна и хипотенузата.",
          "[[A = \\arcsin(2.8/5) = \\arcsin(0.56) \\approx 34.06^\\circ]]. Това изчисление не установява съответствие със строителните норми.",
          "За опростен полетен участък самолет набира 1500 m височина, докато изминава 5000 m по права траектория. Оценете ъгъла на изкачване спрямо хоризонталата. Набраната височина е срещу ъгъла на изкачване; траекторията е хипотенузата.",
          "[[A = \\arcsin(1500/5000) = \\arcsin(0.3) \\approx 17.46^\\circ]]. Това е модел с прав участък, а не пълен анализ на променяща се траектория.",
          "Механична разпонка е дълга 1700 mm и има вертикално издигане 800 mm. Изчислете нейния ъгъл спрямо хоризонталата. Формулата работи идентично в милиметри: издигането е срещулежащо, дължината на разпонката е хипотенузата.",
          "[[A = \\arcsin(800/1700) \\approx 28.07^\\circ]]. Резултатът описва геометрия, а не конструктивна якост.",
          "Опростена стрела на кран е дълга 10 m и има вертикална съставка 8 m. Намерете ъгъла между стрелата и хоризонталата. Дължината на стрелата е хипотенузата, а вертикалната съставка е срещу ъгъла.",
          "[[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Не приемайте резултата като установяване на товароносимост на крана или оперативна безопасност.",
          "Човек наблюдава върха на дърво от точка, където вертикалната разлика до върха е 12 m, а правата линия на видимост е 20 m. Намерете ъгъла на възвишение. Вертикалната разлика е срещу ъгъла; линията на видимост е хипотенузата.",
          "[[A = \\arcsin(12/20) = \\arcsin(0.6) \\approx 36.87^\\circ]]. Това дава ъгъла от нивото на наблюдение; то не дава автоматично общата височина на дървото над земята.",
          "Опростен прав туристически участък има наклонена дължина 100 m и вертикално издигане 80 m. Намерете ъгъла на наклон. Издигането и наклонената дистанция са срещулежащата страна и хипотенузата.",
          "[[A = \\arcsin(80/100) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Това е стръмен илюстративен наклон; реалните туристически маршрути варират в наклона си по дължината.",
          "Диагонална опора на тента е дълга 3.5 m и се издига 1.2 m вертикално. Изчислете ъгъла между опората и хоризонталата. Вертикалното издигане е срещу ъгъла, а опората е хипотенузата.",
          "[[A = \\arcsin(1.2/3.5) \\approx 20.05^\\circ]]. Резултатът не проверява конструктивната годност на опората."
        ],
        "table": {
          "headers": [
            "Ситуация",
            "Срещулежаща",
            "Хипотенуза",
            "Формула",
            "Ъгъл",
            "Значение"
          ],
          "rows": [
            [
              "Покривна греда",
              "4 m",
              "6.5 m",
              "arcsin(4/6.5)",
              "37.98 градуса",
              "Наклон на покрив спрямо хоризонталата"
            ],
            [
              "Стълба",
              "4.5 m",
              "5.5 m",
              "arcsin(4.5/5.5)",
              "54.90 градуса",
              "Ъгъл на наклон от земята"
            ],
            [
              "Рампа",
              "0.75 m",
              "9.5 m",
              "arcsin(0.75/9.5)",
              "4.53 градуса",
              "Лек наклон в стил достъпност"
            ],
            [
              "Геодезия",
              "30 m",
              "50 m",
              "arcsin(30/50)",
              "36.87 градуса",
              "Ъгъл на наклон на измерената линия"
            ],
            [
              "Разтягащо въже",
              "10 m",
              "18 m",
              "arcsin(10/18)",
              "33.75 градуса",
              "Ъгъл на въжето спрямо хоризонталата"
            ],
            [
              "Стълбище",
              "2.8 m",
              "5 m",
              "arcsin(2.8/5)",
              "34.06 градуса",
              "Наклон на носещата греда"
            ],
            [
              "Изкачване на самолет",
              "1500 m",
              "5000 m",
              "arcsin(1500/5000)",
              "17.46 градуса",
              "Оценка на ъгъла на изкачване"
            ],
            [
              "Разпонка",
              "800 mm",
              "1700 mm",
              "arcsin(800/1700)",
              "28.07 градуса",
              "Ъгъл на разпонката спрямо хоризонталата"
            ],
            [
              "Стрела на кран",
              "8 m",
              "10 m",
              "arcsin(8/10)",
              "53.13 градуса",
              "Повдигане на стрелата"
            ],
            [
              "Наблюдение на дърво",
              "12 m",
              "20 m",
              "arcsin(12/20)",
              "36.87 градуса",
              "Ъгъл на възвишение"
            ],
            [
              "Туристически маршрут",
              "80 m",
              "100 m",
              "arcsin(80/100)",
              "53.13 градуса",
              "Стръмен наклон на пътека"
            ],
            [
              "Опора на тента",
              "1.2 m",
              "3.5 m",
              "arcsin(1.2/3.5)",
              "20.05 градуса",
              "Ъгъл на опората спрямо хоризонталата"
            ]
          ]
        },
        "imgAlt": "Четири панела: примери за арксинус с покривна греда, стълба, рампа и геодезия",
        "figcaption": "Четири практически примера с арксинус: покрив, стълба, рампа и геодезия, всеки с измерените си страни и получения ъгъл."
      },
      "arcsin-ratio": {
        "h2": "Как отношението срещулежаща към хипотенуза променя ъгъла",
        "paragraphs": [
          "Отношението [[a/c]] определя ъгъл [[A]]. По-голяма срещулежаща страна спрямо хипотенузата дава по-голям остър ъгъл, защото по-голяма част от дължината на хипотенузата стои вертикално. Малко отношение дава малък ъгъл: триъгълникът е дълъг и полегат.",
          "Когато срещулежащата страна е точно половината от хипотенузата, ъгълът е 30 градуса. Пропорционалните триъгълници споделят ъгли независимо от размера: мащабиране на всяка страна със същия множител оставя всяко отношение непроменено, така че ъглите остават фиксирани. Смяната на единиците от метри в сантиметри не променя нищо по същата причина.",
          "Отношението трябва да остане между 0 и 1 за обикновен правоъгълен триъгълник. Отношение 0 би означавало изобщо никаква срещулежаща страна, а отношение 1 би означавало срещулежащата страна да е равна на хипотенузата; и двете са изродени гранични случаи, а не реални триъгълници с три положителни страни."
        ],
        "table": {
          "headers": [
            "Срещулежаща страна a",
            "Хипотенуза c",
            "Отношение a/c",
            "Ъгъл A"
          ],
          "rows": [
            [
              "2",
              "10",
              "0.2",
              "Приблизително 11.54 градуса"
            ],
            [
              "5",
              "10",
              "0.5",
              "30 градуса"
            ],
            [
              "8",
              "10",
              "0.8",
              "Приблизително 53.13 градуса"
            ]
          ]
        },
        "imgAlt": "Три панела, показващи как по-голяма срещулежаща страна дава по-голям ъгъл при фиксирана хипотенуза",
        "figcaption": "При хипотенуза, фиксирана на 10 единици, по-голяма срещулежаща страна дава по-голям остър ъгъл: 11.54, 30, след това 53.13 градуса."
      },
      "arcsin-units": {
        "h2": "Разбиране на мерните единици за ъгли и точността на измерване",
        "h3s": [
          "Пример: Променя ли мерната единица ъгъла?"
        ],
        "paragraphs": [
          "Този калкулатор връща ъгли в градуси, стандартната единица за строителство, геодезия и училищна геометрия. Градусът дели пълния кръг на 360 части. Радианите са алтернативата: пълният кръг е [[2\\pi]] радиана. Обратният синус на джобен калкулатор може да върне и двете, в зависимост от настройката на режима му.",
          "Преобразувайте между тях с: [[\\text{Degrees} = \\text{Radians} \\times \\frac{180^\\circ}{\\pi}]]. Самото входно отношение на страни няма единица, а двете страни трябва да използват съвместими единици: метри с метри или милиметри с милиметри.",
          "Вземете [[a = 3]] m и [[c = 5]] m. Отношението е 0.6, а ъгълът е 36.87 градуса. В сантиметри, [[a = 300]] cm и [[c = 500]] cm дават същото отношение 0.6 и същия ъгъл. Мащабирането на двете измервания с един и същ множител се съкращава.",
          "Запазвайте допълнителни цифри по време на междинните стъпки и закръгляйте само крайния ъгъл. Оправданата точност зависи от входните измервания: грубите теренни измервания подкрепят един знак след десетичната запетая, докато прецизните работилнични измервания могат да подкрепят два."
        ]
      },
      "arcsin-mistakes": {
        "h2": "Чести грешки при изчисляване на ъгъл чрез синус",
        "listItems": [
          "<strong>Използване на прилежащата страна вместо срещулежащата.</strong> Проверете в кой връх се намира вашият ъгъл, след което вземете страната срещу него. Ако сте използвали докосващия катет, сте изчислили арккосинус, а не арксинус.",
          "<strong>Използване на хипотенузата като числител.</strong> Формулата е [[a/c]], срещулежаща върху хипотенуза. Обръщането ѝ дава отношение над 1 и грешка на дефиниционната област.",
          "<strong>Обръщане на отношението.</strong> [[\\arcsin(c/a)]] не е същият ъгъл. За 3-4-5, [[\\arcsin(3/5) = 36.87^\\circ]], но [[\\arcsin(5/3)]] е недефиниран.",
          "<strong>Използване на обикновен синус вместо обратен синус.</strong> Синусът се нуждае от входен ъгъл. Ако вече знаете страните и ви трябва ъгълът, ви трябва обратната функция.",
          "<strong>Объркване на обратния синус с реципрочния синус.</strong> [[\\sin^{-1}(x)]] е арксинус; [[1/\\sin(x)]] е косеканс. Те са несвързани.",
          "<strong>Въвеждане на срещулежаща страна, по-дълга от хипотенузата.</strong> Геометрично невъзможно в правоъгълен триъгълник. Преозначете страните си: най-дългото измерване е хипотенузата.",
          "<strong>Въвеждане на нулеви или отрицателни дължини на страни.</strong> Дължините трябва да са положителни. Нулева срещулежаща страна описва плоска линия, а не триъгълник.",
          "<strong>Смесване на мерни единици.</strong> Въвеждането на срещулежащата страна в метри, а хипотенузата в сантиметри разваля отношението. Първо преобразувайте.",
          "<strong>Твърде ранно закръгляне на отношението.</strong> Закръглянето на 0.61538 до 0.62 преди прилагане на арксинус измества примера с покрива от 37.98 на 38.32 градуса. Запазете пълна точност до края.",
          "<strong>Отчитане на радиани, когато се очакват градуси.</strong> Отговор 0.64 обикновено означава, че калкулаторът е бил в радиаен режим; умножете по [[180/\\pi]], за да получите 36.87 градуса.",
          "<strong>Изчисляване на ъгъл B, когато инструментът намира ъгъл A.</strong> Калкулаторът връща ъгъла срещу страна [[a]]. Другият остър ъгъл е [[90^\\circ - A]].",
          "<strong>Предполагане, че ъгълът проверява конструктивна безопасност.</strong> Ъгълът е чиста геометрия. Стабилността на стълба, якостта на покрив и съответствието на рампа се нуждаят от отделни инженерни проверки.",
          "<strong>Объркване на вертикалното издигане с наклонената дистанция.</strong> В примера с рампата 9.5 m е наклонената повърхност (хипотенуза), а не хоризонталният отрязък. Размяната им променя изцяло триъгълника.",
          "<strong>Третиране на невъзможно отношение като валидно.</strong> Ако изчисленото ви [[a/c]] надвишава 1, спрете: няма правоъгълен триъгълник с такива страни. Намерете грешката в означаването, вместо да насилвате изчислението."
        ]
      },
      "arcsin-verify": {
        "h2": "Как да проверите дали изчисленият ъгъл е валиден",
        "h3s": [
          "Метод 1: Проверете синусното отношение",
          "Метод 2: Проверете комплементарния ъгъл",
          "Метод 3: Използвайте Питагоровата теорема"
        ],
        "paragraphs": [
          "Валиден, неизроден правоъгълен триъгълник изисква: срещулежащата страна да е положителна, хипотенузата да е положителна, хипотенузата да е строго по-дълга от срещулежащата страна, отношението [[a/c]] да е строго между 0 и 1 и полученият ъгъл да е строго между 0 и 90 градуса.",
          "Ако [[a = c]], арксинусът връща 90 градуса, изроден граничен случай, а не реален триъгълник. Ако [[a > c]], триъгълникът е геометрично невъзможен.",
          "Проверете [[\\sin(A) \\approx a/c]], като използвате незакръгления ъгъл. За примера 3-4-5, [[\\sin(36.87^\\circ) \\approx 0.6 = 3/5]].",
          "Изчислете [[B = 90^\\circ - A]]. Двата остри ъгъла трябва да дадат точно 90 градуса. След това потвърдете, че триъгълникът има смисъл с ъгъл [[B]] като референтен.",
          "Изчислете прилежащата страна [[b = \\sqrt{c^2 - a^2}]], след което проверете [[a^2 + b^2 \\approx c^2]]. За [[a = 3]] и [[c = 5]]: [[b = \\sqrt{25 - 9} = 4]], а [[9 + 16 = 25]]. Малките разминавания идват от закръглянето на показания ъгъл, а не от калкулатора."
        ]
      },
      "arcsin-choose": {
        "h2": "Избор на подходящ калкулатор за правоъгълен триъгълник",
        "paragraphs": [
          "<strong>Калкулатор за ъгъл на правоъгълен триъгълник от синус:</strong> използвайте, когато знаете срещулежащата страна и хипотенузата и ви трябва ъгъл [[A]]. Това е страницата, на която се намирате.",
          "<strong>Калкулатор за ъгъл на правоъгълен триъгълник от косинус:</strong> използвайте, когато знаете прилежащата страна и хипотенузата. Същият ъгъл, различна известна двойка.",
          "<strong>Калкулатор за ъгъл на правоъгълен триъгълник от тангенс:</strong> използвайте, когато знаете и двата катета, но не и хипотенузата. Често за полеви измервания на издигане върху хоризонтално разстояние.",
          "<strong>Калкулатор за ъгъл на правоъгълен триъгълник:</strong> помага ви да изберете правилния метод, когато не сте сигурни кои страни имате.",
          "<strong>Калкулатор за страна на правоъгълен триъгълник от синус:</strong> обръща посоката: при даден ъгъл и хипотенуза намира срещулежащата страна.",
          "<strong>Калкулатор за страни на правоъгълен триъгълник:</strong> намира липсващи дължини на страни от известни измервания на триъгълника.",
          "Съобразете инструмента с измерванията си. Ако срещулежащата страна е неизвестна и трудна за измерване, не я изчислявайте само за да използвате арксинус; изберете обратната функция, която отговаря на страните, които вече имате."
        ]
      },
      "arcsin-faq": {
        "h2": "Често задавани въпроси"
      },
      "arcsin-related": {
        "h2": "Разгледайте свързани калкулатори за правоъгълен триъгълник"
      },
      "arcsin-conclusion": {
        "h2": "Намерете всеки ъгъл чрез синус с увереност",
        "paragraphs": [
          "Започнете, като идентифицирате срещулежащата страна: страната срещу целевия ви ъгъл. Потвърдете, че хипотенузата е най-дългата страна. Разделете, приложете арксинус и прочетете ъгъла в градуси. Вземете втория ъгъл от 90 минус първия. Проверете с обратната проверка чрез синус, изчисление с кръстосан метод и Питагоровата теорема. С тези стъпки всяка задача със срещулежаща и хипотенуза се свежда до надеждна рутина. Върнете се към калкулатора в горната част на тази страница, за да пресметнете числата си."
        ]
      }
    },
    "faqs": [
      {
        "question": "Какво изчислява формулата A = arcsin(a/c)?",
        "answer": "Тя намира острия ъгъл, чийто синус е равен на отношението на срещулежащата страна към хипотенузата. Разделете дължината на срещулежащата страна на дължината на хипотенузата, след което приложете обратен синус, за да превърнете това десетично число в ъгъл в градуси."
      },
      {
        "question": "Как се намира ъгъл чрез обратен синус?",
        "answer": "Идентифицирайте срещулежащата страна и хипотенузата, разделете първата на втората, за да получите отношение между 0 и 1, след което приложете арксинус. Например срещулежаща 3 и хипотенуза 5 дават arcsin(0.6), което е приблизително 36.87 градуса."
      },
      {
        "question": "Защо са ми нужни срещулежащата страна и хипотенузата?",
        "answer": "Защото синусът е дефиниран като срещулежаща върху хипотенуза. Тези две страни напълно определят отношението, а отношението напълно определя ъгъла. Не е нужно друго измерване, а прилежащата страна никога не влиза във формулата."
      },
      {
        "question": "Мога ли да изчисля ъгъла, без да знам прилежащата страна?",
        "answer": "Да. Това е смисълът на този калкулатор. Арксинусът използва само срещулежащата страна и хипотенузата, така че прилежащата страна може да остане неизвестна през цялото време."
      },
      {
        "question": "Каква е разликата между синус и обратен синус?",
        "answer": "Синусът приема ъгъл и връща отношение: sin(30 градуса) = 0.5. Обратният синус обръща това: той приема отношение и връща ъгъла, така че arcsin(0.5) = 30 градуса. Използвайте синус, когато знаете ъгъла; използвайте арксинус, когато знаете страните."
      },
      {
        "question": "Арксинусът същият ли е като sin^-1?",
        "answer": "Да. Arcsin(x) и sin^-1(x) са две нотации за една и съща функция за обратен синус. Горният индекс -1 не означава реципрочна стойност; реципрочната стойност на синуса е косеканс, записан като csc(x)."
      },
      {
        "question": "Защо хипотенузата трябва да е по-дълга от срещулежащата страна?",
        "answer": "Хипотенузата винаги е най-дългата страна на правоъгълен триъгълник. Ако въведената ви срещулежаща страна е по-дълга, страните са грешно означени: най-дългото от трите ви измервания по дефиниция е хипотенузата."
      },
      {
        "question": "Какво се случва, ако срещулежащата страна е равна на хипотенузата?",
        "answer": "Отношението става 1 и arcsin(1) = 90 градуса. Но остър ъгъл от 90 градуса е невъзможен в неизроден правоъгълен триъгълник; равните страни описват свит граничен случай, а не реален триъгълник."
      },
      {
        "question": "Как отношението срещулежаща към хипотенуза влияе на ъгъла?",
        "answer": "По-голямото отношение означава по-голям ъгъл. Отношение 0.2 дава около 11.54 градуса, 0.5 дава точно 30 градуса, а 0.8 дава около 53.13 градуса. Когато срещулежащата страна се приближи по дължина до хипотенузата, ъгълът се приближава до 90 градуса."
      },
      {
        "question": "Как мога да проверя изчисления си ъгъл?",
        "answer": "Три независими проверки: изчислете sin(A) и потвърдете, че е равно на a/c; изчислете комплемента B = 90 - A и потвърдете, че триъгълникът все още има смисъл; изведете прилежащата страна с Питагоровата теорема и потвърдете a^2 + b^2 = c^2."
      },
      {
        "question": "Мога ли да използвам този калкулатор, за да оценя ъгъл на покрив, рампа или стълба?",
        "answer": "Да, за геометрията. Въведете вертикалното издигане като срещулежаща страна, а наклонената дължина като хипотенуза. Помнете, че резултатът е само геометричен ъгъл; той не удостоверява конструктивна безопасност или съответствие с нормите."
      },
      {
        "question": "Защо изчисленият ми отговор може леко да се различава от отговор в учебник?",
        "answer": "Обикновено закръгляне: учебниците може да закръглят отношението преди да приложат арксинус или да закръглят крайния ъгъл по различен начин. Запазете пълна точност през изчислението и закръгляйте само в края, и отговорите ще съвпадат до показаните цифри."
      }
    ],
    "relatedHeading": "Разгледайте свързани калкулатори за правоъгълен триъгълник",
    "relatedIntro": "След като намерите ъгъла си, продължете с тези свързани калкулатори, за да завършите анализа на триъгълника си.",
    "relatedItems": [
      "Калкулатор за ъгъл на правоъгълен триъгълник",
      "Калкулатор за ъгъл на правоъгълен триъгълник от косинус",
      "Калкулатор за ъгъл на правоъгълен триъгълник от тангенс",
      "Калкулатор за страна на правоъгълен триъгълник от синус",
      "Калкулатор за страни на правоъгълен триъгълник",
      "Калкулатор за липсващ ъгъл на правоъгълен триъгълник",
      "Калкулатор за тригонометрични съотношения в правоъгълен триъгълник",
      "Калкулатор за синусово съотношение"
    ]
  },
  "tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "arcsin-intro": "Sinüs Kullanarak Açı Nasıl Bulunur",
      "arcsin-anatomy": "Karşı Kenar ve Hipotenüsü Anlama",
      "arcsin-what": "Dik Üçgende Sinüs Nedir?",
      "arcsin-formula": "Ters Sinüs Formülü Nasıl Çalışır",
      "arcsin-howto": "Hesaplayıcı Nasıl Kullanılır",
      "arcsin-examples": "Adım Adım Örnekler",
      "arcsin-applications": "Gerçek Hayattan Örnekler",
      "arcsin-ratio": "Oran Açıyı Nasıl Değiştirir",
      "arcsin-units": "Açı Birimleri ve Ölçüm Hassasiyeti",
      "arcsin-mistakes": "Yaygın Hatalar",
      "arcsin-verify": "Hesaplanan Açıyı Doğrulama",
      "arcsin-choose": "Doğru Hesaplayıcıyı Seçme",
      "arcsin-faq": "SSS",
      "arcsin-related": "İlgili Hesaplayıcılar",
      "arcsin-conclusion": "Her Açıyı Sinüsten Güvenle Bulun"
    },
    "sections": {
      "arcsin-intro": {
        "h2": "Sinüs Kullanarak Açı Nasıl Bulunur",
        "paragraphs": [
          "Bir tekerlekli sandalye rampası düşünün: eğimli yüzeyinin 9.5 metre olduğunu ve yerden 0.75 metre yükseldiğini biliyorsunuz. Rampanın eğim açısı nedir? Dik üçgen sinüsten açı hesaplayıcısı tam da bu tür soruları yanıtlar. Bir dik üçgenin karşı kenarını ve hipotenüsünü alır ve aralarındaki dar açıyı verir.",
          "Bu iki ölçüm yeterlidir çünkü sinüs, karşı kenarın hipotenüse oranı olarak tanımlanır. Bu oran bilindiğinde ters sinüs onu tekrar açıya dönüştürür. Bitişik kenar hiçbir zaman hesaplamaya girmez; bu da onu, karşı kenar ile hipotenüsün gerçekten ölçtüğünüz büyüklükler olduğu durumlarda doğru araç yapar.",
          "Bu kılavuz boyunca [[A]] hesaplanan dar referans açıdır, [[a]] [[A]] açısının karşısındaki kenardır ve [[c]] hipotenüstür. Hesaplanan açı, hipotenüsün bitişik kenarla buluştuğu eğimdir ve derece cinsinden ölçülür."
        ]
      },
      "arcsin-anatomy": {
        "h2": "Karşı Kenar ve Hipotenüsü Anlama",
        "h3s": [
          "Dik Üçgen Nedir?",
          "Karşı Kenar Nedir?",
          "Hipotenüs Nedir?",
          "Bitişik Kenar Nedir?"
        ],
        "paragraphs": [
          "Bir dik üçgenin tam 90 derecelik bir açısı vardır. Diğer iki açı dardır, yani her biri kesinlikle 90 dereceden küçüktür ve toplamları her zaman 90 derecedir. Bu tümler ilişki, bir dar açıyı bulmanın diğerini çıkarma yoluyla hemen vermesinin nedenidir.",
          "Dik açı koşulu önemlidir çünkü sinüs, kosinüs ve tanjant dik üçgenlerin sabit kenar oranları üzerinden tanımlanır. 90 derecelik köşe olmadan [[a/c]] oranının hiçbir açıyla sabit bir ilişkisi olmaz ve ters sinüs bir açıyı geri kazanamaz.",
          "Karşı kenar, [[A]] açısının tam karşısındaki kenardır. [[A]] açısının köşesine asla değmez. Yükseklik problemlerinde bu kenar genellikle dikey yükselmeyi temsil eder: bir merdivenin duvarda ulaştığı yükseklik, bir rampanın yükseltisi veya bir vinç bomunun dikey bileşeni.",
          "Etiket görecelidir. Referans açınızı [[A]] açısından [[B]] açısına değiştirirseniz, karşı olan kenar bitişik olur ve tersi de geçerlidir. Kenarları etiketlemeden önce her zaman hangi açıyı çözdüğünüzü doğrulayın.",
          "Hipotenüs, dik açının karşısındaki kenardır ve [[c]] ile gösterilir. Her zaman üçgenin en uzun kenarıdır. Dik açının köşesine asla değmez. Pratik durumlarda hipotenüs genellikle eğimli uzunluğun kendisidir: merdiven, çatı kirişi, rampa yüzeyi veya düz görüş mesafesi.",
          "Bir üçgen döndürülmüş olarak çizildiğinde, önce kare dik açı işaretinin karşısındaki kenarı bularak hipotenüsü belirleyin. Diğer her şey bu belirlemeden sonra gelir.",
          "[[b]] kenarı, hipotenüs olmadan [[A]] açısına değen dik kenardır. Bu hesaplayıcının ona ihtiyacı yoktur. Bitişik kenara daha sonra ihtiyacınız olursa Pisagor teoremi onu [[b = \\sqrt{c^2 - a^2}]] olarak verir."
        ],
        "imgAlt": "Arksinüs için karşı kenar a ve hipotenüs c vurgulanmış dik üçgen",
        "figcaption": "Arksinüs anatomisi: a kenarı A açısının karşısındadır ve c kenarı dik açının karşısındaki hipotenüstür."
      },
      "arcsin-what": {
        "h2": "Dik Üçgende Sinüs Nedir?",
        "h3s": [
          "Ters Sinüs Nedir?",
          "Arksinüs Ters Sinüs ile Aynı Şey midir?",
          "Formül Neden Karşı Kenarı Kullanır?"
        ],
        "paragraphs": [
          "Sinüs, hipotenüsün ne kadarının karşı kenar tarafından temsil edildiğini ölçer. Tanım şudur:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "Burada [[\\sin(A)]] [[A]] açısının sinüsüdür, [[a]] karşı kenardır ve [[c]] hipotenüstür. Karşı kenar 3 birim ve hipotenüs 5 birimse [[\\sin(A) = 3/5 = 0.6]] olur. Oran boyutsuzdur: metre bölü metre sadeleşir, dolayısıyla metre, fit veya santimetre ile ölçmeniz fark etmez, sonuç hep 0.6 olur.",
          "Normal sinüs bir açıyla başlar ve bir oran üretir. Ters sinüs geçerli bir oranla başlar ve karşılık gelen açıyı verir. [[\\sin(A) = 0.6]] ise [[A = \\arcsin(0.6) \\approx 36.87^\\circ]] olur. Ters sinüs, başladığınız açıyı geri kazanmak için sinüs ilişkisini tersine çevirir.",
          "Evet. [[\\arcsin(x)]] ve [[\\sin^{-1}(x)]] gösterimleri aynı fonksiyonu ifade eder. [[-1]] üst simgesi çarpmaya göre ters anlamına gelmez. Sinüsün çarpmaya göre tersi bambaşka bir fonksiyondur: [[\\csc(x)]] olarak yazılan kosekant.",
          "Sinüs, karşı kenarı hipotenüsle eşleştiren orandır ve bu, hesaplayıcının kabul ettiği çiftin ta kendisidir. SOH-CAH-TOA anımsatıcısı üç eşleşmeyi özetler: SOH, sinüsün karşı bölü hipotenüse eşit olduğu, CAH, kosinüsün bitişik bölü hipotenüse eşit olduğu, TOA ise tanjantın karşı bölü bitişiğe eşit olduğu anlamına gelir. Bilinen kenarlarınız karşı ve hipotenüs olduğunda SOH geçerlidir, dolayısıyla arksinüs doğru ters fonksiyondur."
        ],
        "imgAlt": "a'yı c'ye bölüp ardından açıyı bulmak için arksinüs uygulamayı gösteren diyagram",
        "figcaption": "Arksinüsün çalışma şekli: karşı kenarı hipotenüse bölün, ardından açıyı geri kazanmak için ters sinüs uygulayın."
      },
      "arcsin-formula": {
        "h2": "Ters Sinüs Formülü Nasıl Çalışır",
        "paragraphs": [
          "Sinüs tanımıyla başlayın:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "Bilinen kenar uzunlukları sağdaki oranı hesaplamanıza olanak tanır. Ardından açıyı yalnız bırakmak için iki tarafa da ters sinüs uygulayın:",
          "[[[A=\\arcsin\\left(\\frac{a}{c}\\right)]]]",
          "Ters sinüs tüm orana uygulanır çünkü oran bir bütün olarak sinüs değeridir. Sayısal bir örnek üzerinden geçin. [[a = 3]] cm ve [[c = 5]] cm verildiğinde:",
          "Adım 1: Karşı kenarı hipotenüse bölün: [[3/5 = 0.6]].",
          "Adım 2: Ters sinüs uygulayın: [[A = \\arcsin(0.6)]].",
          "Adım 3: Açıyı hesaplayın: [[A \\approx 36.87^\\circ]].",
          "Sonuç, iki ondalık basamağa yuvarlanmış bir yaklaşıktır. Düz bir dille: sinüsü 0.6 olan açı yaklaşık 36.87 derecedir."
        ]
      },
      "arcsin-howto": {
        "h2": "Dik Üçgen Sinüsten Açı Hesaplayıcısı Nasıl Kullanılır",
        "listItems": [
          "<strong>Dik açıyı belirleyin.</strong> Hesaplayıcı yalnızca dik üçgenler için çalışır, bu yüzden önce 90 derecelik köşeyi bulun.",
          "<strong>Karşı kenarı [[a]] bulun.</strong> [[A]] açısının tam karşısındadır ve köşesine asla değmez.",
          "<strong>Hipotenüsü [[c]] belirleyin.</strong> 90 derecelik açının karşısındadır ve en uzun kenardır.",
          "<strong>İki kenar uzunluğunu da ölçün veya edinin.</strong> Bir mezura, bir plan çizimi veya verilen problem verilerini kullanın.",
          "<strong>Karşı kenar uzunluğunu</strong> ilgili giriş alanına girin.",
          "<strong>Hipotenüs uzunluğunu</strong> kendi giriş alanına girin.",
          "<strong>Uyumlu birimler seçin</strong>: birim seçicilerle iki kenarın da aynı birimi kullanmasını sağlayın.",
          "<strong>Hipotenüsün karşı kenardan uzun olduğunu kontrol edin.</strong> Değilse kenarlar yanlış etiketlenmiştir.",
          "<strong>A Açısını Hesapla düğmesine basın.</strong> Araç böler, arksinüs uygular ve açıyı verir.",
          "<strong>Hesaplanan açıyı derece cinsinden okuyun</strong> ve üçgen için makul görünüp görünmediğine dikkat edin.",
          "<strong>Sonucu doğrulayın</strong>: aşağıdaki doğrulama bölümündeki kontrollerden biriyle.",
          "<strong>Sıfırla</strong> düğmesiyle girişleri temizleyin ve yeni bir hesaplamaya başlayın."
        ]
      },
      "arcsin-examples": {
        "h2": "Sinüs Kullanarak Açı Bulmanın Adım Adım Örnekleri",
        "h3s": [
          "Örnek 1: Temel 3-4-5 Dik Üçgeni",
          "Örnek 2: Karşı Kenar Hipotenüsün Yarısı Olduğunda",
          "Örnek 3: Karşı Kenar Hipotenüs Oranı 0.8 Olan Bir Üçgen",
          "Örnek 4: Küçük Bir Karşı Kenar"
        ],
        "paragraphs": [
          "Karşı kenar [[a = 3]] cm ve hipotenüs [[c = 5]] cm verildiğinde [[A]] açısını bulun.",
          "Adım 1: Formülü yazın: [[A = \\arcsin(a/c)]].",
          "Adım 2: Değerleri yerine koyun: [[A = \\arcsin(3/5)]].",
          "Adım 3: Oranı hesaplayın: [[3/5 = 0.6]].",
          "Adım 4: Ters sinüs uygulayın: [[A = \\arcsin(0.6) \\approx 36.87^\\circ]].",
          "Bu açı, hipotenüs ile bitişik kenar arasındaki eğimdir; 3 cm'lik kenar onun karşısındadır.",
          "[[a = 5]] m ve [[c = 10]] m verildiğinde: [[A = \\arcsin(5/10) = \\arcsin(0.5) = 30^\\circ]] tam olarak. Bu, 30 derecelik açının karşısındaki kenarın hipotenüsün yarısı olduğu tanıdık 30-60-90 özel üçgenidir.",
          "[[a = 8]] m ve [[c = 10]] m verildiğinde: [[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Açı 30 dereceden büyüktür çünkü karşı kenar hipotenüsün daha büyük bir kısmını temsil eder.",
          "[[a = 2]] ft ve [[c = 10]] ft verildiğinde: [[A = \\arcsin(2/10) = \\arcsin(0.2) \\approx 11.54^\\circ]]. Görece kısa bir karşı kenar küçük bir açı üretir, çünkü üçgen uzun ve sığdır."
        ]
      },
      "arcsin-applications": {
        "h2": "Sinüs Kullanarak Açı Hesaplamanın Gerçek Hayattan Örnekleri",
        "h3s": [
          "Örnek 5: Bir Çatının Eğim Açısını Bulma",
          "Örnek 6: Bir Merdivenin Açısını Bulma",
          "Örnek 7: Bir Rampanın Eğimini Hesaplama",
          "Örnek 8: Ölçümde Açı Bulma",
          "Örnek 9: Bir Gergi Telinin Açısını Hesaplama",
          "Örnek 10: Bir Basamaklı Merdivenin Eğimini Bulma",
          "Örnek 11: Bir Uçağın Tırmanış Açısını Hesaplama",
          "Örnek 12: Bir Mekanik Desteğin Açısını Bulma",
          "Örnek 13: Bir Vinç Bomunun Eğimini Hesaplama",
          "Örnek 14: Bir Ağacın Yükselme Açısını Tahmin Etme",
          "Örnek 15: Bir Yürüyüş Rotasının Eğimini Hesaplama",
          "Örnek 16: Bir Tente Desteğinin Açısını Bulma"
        ],
        "paragraphs": [
          "Bir çatı kirişi 6.5 m uzunluğundadır ve başlangıç noktasının seviyesinden 4 m dikey olarak yükselir. Kiriş ile yatay arasındaki açıyı bulun. Kiriş ve dikey yükselme bir dik üçgen oluşturur: yükselme eğim açısının karşısındadır ve kiriş hipotenüstür. Bilinen çift karşı ve hipotenüs olduğu için ters sinüs uygundur.",
          "[[A = \\arcsin(4/6.5) = \\arcsin(0.61538) \\approx 37.98^\\circ]]. Çatı yataydan yaklaşık 38 derece yükselir. Bu geometrik hesaplamanın eksiksiz bir çatı tasarım değerlendirmesi olmadığını unutmayın; yapısal faktörler ayrıdır.",
          "Bir merdiven 5.5 m uzunluğundadır ve duvarda 4.5 m yüksekliğe ulaşır. Merdiven ile yatay zemin arasındaki açıyı hesaplayın. Duvar yüksekliği zemin açısının karşısındadır ve merdivenin kendisi hipotenüstür, dolayısıyla arksinüs uygulanır.",
          "[[A = \\arcsin(4.5/5.5) \\approx 54.90^\\circ]]. Merdiven yaklaşık 54.9 derece eğimlidir. Bu hesaplamanın tek başına merdivenin güvenli konumlandığını kanıtlamadığını unutmayın.",
          "Bir rampanın eğimli uzunluğu 9.5 m ve dikey yükseltisi 0.75 m'dir. Yataya göre açısını bulun. Eğimli yüzey hipotenüs, dikey yükselti ise eğim açısının karşısındadır.",
          "[[A = \\arcsin(0.75/9.5) \\approx 4.53^\\circ]]. Rampa 4.53 derecelik yumuşak bir açıyla yükselir. Hesaplanan rampanın erişilebilirlik veya yapı yönetmeliği gerekliliklerini karşıladığını iddia etmeyin.",
          "Basitleştirilmiş bir arazi ölçümü 30 m dikey fark ve 50 m düz eğimli mesafe kaydeder. Eğimli çizgi ile yatay arasındaki açıyı hesaplayın. Dikey fark açının karşısındadır; eğimli mesafe hipotenüstür.",
          "[[A = \\arcsin(30/50) = \\arcsin(0.6) \\approx 36.87^\\circ]]. Gerçek arazi ölçümü bu basitleştirilmiş modelin ötesinde alet yüksekliği düzeltmeleri ve arazi ayarlamaları gerektirebilir.",
          "Bir gergi teli 18 m uzunluğundadır ve uçları arasında 10 m dikey ayrım vardır. Tel ile yatay arasındaki açıyı bulun. Dikey ayrım karşı kenar, tel ise hipotenüstür.",
          "[[A = \\arcsin(10/18) \\approx 33.75^\\circ]]. Sonuç yalnızca geometriyi tanımlar; tel gerilimini, ankraj dayanımını veya yapısal güvenliği belirlemez.",
          "Basitleştirilmiş bir basamaklı merdivenin dikey yükseltisi 2.8 m ve eğimli kiriş uzunluğu 5 m'dir. Kiriş ile yatay arasındaki açıyı hesaplayın. Yükselti ve kiriş sırasıyla karşı kenar ve hipotenüstür.",
          "[[A = \\arcsin(2.8/5) = \\arcsin(0.56) \\approx 34.06^\\circ]]. Bu hesaplama yapı yönetmeliğine uygunluğu kanıtlamaz.",
          "Basitleştirilmiş bir uçuş kesiti için bir uçak düz bir uçuş yolu boyunca 5,000 m yol alırken 1,500 m irtifa kazanır. Yataya göre tırmanış açısını tahmin edin. İrtifa kazancı tırmanış açısının karşısındadır; uçuş yolu hipotenüstür.",
          "[[A = \\arcsin(1500/5000) = \\arcsin(0.3) \\approx 17.46^\\circ]]. Bu düz kesit modelidir, değişen bir uçuş yolunun tam analizi değildir.",
          "Bir mekanik desteğin uzunluğu 1,700 mm ve dikey yükseltisi 800 mm'dir. Yataya göre açısını hesaplayın. Formül milimetrede de aynı şekilde çalışır: yükselti karşıdadır, destek uzunluğu hipotenüstür.",
          "[[A = \\arcsin(800/1700) \\approx 28.07^\\circ]]. Sonuç geometriyi tanımlar, yapısal dayanımı değil.",
          "Basitleştirilmiş bir vinç bomu 10 m uzunluğunda ve 8 m dikey bileşenlidir. Bom ile yatay arasındaki açıyı bulun. Bom uzunluğu hipotenüs, dikey bileşen ise açının karşısındadır.",
          "[[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Sonucu vinç kapasitesini veya işletme güvenliğini kanıtlayan bir değer olarak değerlendirmeyin.",
          "Bir kişi bir ağacın tepesini, ağaç tepesine olan dikey farkın 12 m ve düz görüş mesafesinin 20 m olduğu bir noktadan gözlemler. Yükselme açısını bulun. Dikey fark açının karşısındadır; görüş çizgisi hipotenüstür.",
          "[[A = \\arcsin(12/20) = \\arcsin(0.6) \\approx 36.87^\\circ]]. Bu, gözlem seviyesinden açıyı verir; ağacın yerden toplam yüksekliğini otomatik olarak vermez.",
          "Basitleştirilmiş düz bir yürüyüş kesitinin eğimli uzunluğu 100 m ve dikey yükseltisi 80 m'dir. Eğim açısını bulun. Yükselti ve eğimli mesafe karşı kenar ve hipotenüstür.",
          "[[A = \\arcsin(80/100) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Bu dik bir örnek eğimdir; gerçek yürüyüş rotaları eğim bakımından uzunluk boyunca değişir.",
          "Çapraz bir tente desteği 3.5 m uzunluğundadır ve dikey olarak 1.2 m yükselir. Destek ile yatay arasındaki açıyı hesaplayın. Dikey yükselti açının karşısındadır ve destek hipotenüstür.",
          "[[A = \\arcsin(1.2/3.5) \\approx 20.05^\\circ]]. Sonuç desteğin yapısal uygunluğunu doğrulamaz."
        ],
        "table": {
          "headers": [
            "Durum",
            "Karşı",
            "Hipotenüs",
            "Formül",
            "Açı",
            "Anlam"
          ],
          "rows": [
            [
              "Çatı kirişi",
              "4 m",
              "6.5 m",
              "arcsin(4/6.5)",
              "37.98 derece",
              "Yataydan çatı eğimi"
            ],
            [
              "Merdiven",
              "4.5 m",
              "5.5 m",
              "arcsin(4.5/5.5)",
              "54.90 derece",
              "Zeminden eğim açısı"
            ],
            [
              "Rampa",
              "0.75 m",
              "9.5 m",
              "arcsin(0.75/9.5)",
              "4.53 derece",
              "Yumuşak erişilebilirlik tarzı eğim"
            ],
            [
              "Ölçüm",
              "30 m",
              "50 m",
              "arcsin(30/50)",
              "36.87 derece",
              "Ölçülen çizginin eğim açısı"
            ],
            [
              "Gergi teli",
              "10 m",
              "18 m",
              "arcsin(10/18)",
              "33.75 derece",
              "Yataydan tel açısı"
            ],
            [
              "Basamaklı merdiven",
              "2.8 m",
              "5 m",
              "arcsin(2.8/5)",
              "34.06 derece",
              "Kiriş eğimi"
            ],
            [
              "Uçak tırmanışı",
              "1500 m",
              "5000 m",
              "arcsin(1500/5000)",
              "17.46 derece",
              "Tırmanış açısı tahmini"
            ],
            [
              "Destek",
              "800 mm",
              "1700 mm",
              "arcsin(800/1700)",
              "28.07 derece",
              "Yataydan destek açısı"
            ],
            [
              "Vinç bomu",
              "8 m",
              "10 m",
              "arcsin(8/10)",
              "53.13 derece",
              "Bom yükseltisi"
            ],
            [
              "Ağaç gözlemi",
              "12 m",
              "20 m",
              "arcsin(12/20)",
              "36.87 derece",
              "Yükselme açısı"
            ],
            [
              "Yürüyüş rotası",
              "80 m",
              "100 m",
              "arcsin(80/100)",
              "53.13 derece",
              "Dik patika eğimi"
            ],
            [
              "Tente desteği",
              "1.2 m",
              "3.5 m",
              "arcsin(1.2/3.5)",
              "20.05 derece",
              "Yataydan destek açısı"
            ]
          ]
        },
        "imgAlt": "Dört panel: çatı kirişi, merdiven, rampa ve ölçüm arksinüs örnekleri",
        "figcaption": "Dört pratik arksinüs örneği: çatı, merdiven, rampa ve ölçüm; her birinde ölçülen kenarlar ve sonuç açısı."
      },
      "arcsin-ratio": {
        "h2": "Karşı Kenar Hipotenüs Oranı Açıyı Nasıl Değiştirir",
        "paragraphs": [
          "[[a/c]] oranı [[A]] açısını belirler. Hipotenüse göre daha büyük bir karşı kenar daha büyük bir dar açı üretir, çünkü hipotenüsün uzunluğunun daha fazlası dikey durur. Küçük bir oran küçük bir açı üretir: üçgen uzun ve sığdır.",
          "Karşı kenar hipotenüsün tam yarısı olduğunda açı 30 derecedir. Orantılı üçgenler büyüklükten bağımsız olarak açıları paylaşır: her kenarı aynı çarpanla ölçeklemek her oranı değiştirmeden bırakır, dolayısıyla açılar sabit kalır. Birimleri metreden santimetreye değiştirmek aynı nedenle hiçbir şeyi değiştirmez.",
          "Oran, sıradan bir dik üçgen için 0 ile 1 arasında kalmalıdır. 0 oranı hiç karşı kenar olmadığı, 1 oranı ise karşı kenarın hipotenüse eşit olduğu anlamına gelir; ikisi de üç pozitif kenarlı gerçek üçgenler değil, dejenere sınır durumlarıdır."
        ],
        "table": {
          "headers": [
            "Karşı kenar a",
            "Hipotenüs c",
            "Oran a/c",
            "A Açısı"
          ],
          "rows": [
            [
              "2",
              "10",
              "0.2",
              "Yaklaşık 11.54 derece"
            ],
            [
              "5",
              "10",
              "0.5",
              "30 derece"
            ],
            [
              "8",
              "10",
              "0.8",
              "Yaklaşık 53.13 derece"
            ]
          ]
        },
        "imgAlt": "Hipotenüs sabitken daha büyük karşı kenarın daha büyük açı verdiğini gösteren üç panel",
        "figcaption": "Hipotenüs 10 birimde sabitken, daha büyük karşı kenar daha büyük bir dar açı üretir: 11.54, 30, ardından 53.13 derece."
      },
      "arcsin-units": {
        "h2": "Açı Birimlerini ve Ölçüm Hassasiyetini Anlama",
        "h3s": [
          "Örnek: Ölçüm Birimi Açıyı Değiştirir mi?"
        ],
        "paragraphs": [
          "Bu hesaplayıcı açıları, inşaat, ölçüm ve sınıf geometrisi için standart birim olan derece cinsinden verir. Bir derece tam daireyi 360 parçaya böler. Radyan alternatiftir: tam daire [[2\\pi]] radyandır. El hesaplayıcısındaki ters sinüs, mod ayarına bağlı olarak ikisini de verebilir.",
          "İkisi arasında şu formülle dönüştürün: [[\\text{Degrees} = \\text{Radians} \\times \\frac{180^\\circ}{\\pi}]]. Girdi kenar oranının kendisinin birimi yoktur ve iki kenar uyumlu birimler kullanmalıdır: metre ile metre veya milimetre ile milimetre.",
          "[[a = 3]] m ve [[c = 5]] m alın. Oran 0.6 ve açı 36.87 derecedir. Santimetre cinsinden [[a = 300]] cm ve [[c = 500]] cm aynı 0.6 oranını ve aynı açıyı verir. İki ölçümü de aynı çarpanla ölçeklemek sadeleşir.",
          "Ara adımlarda fazladan basamak tutun ve yalnızca son açıyı yuvarlayın. Haklı hassasiyet girdi ölçümlerine bağlıdır: kaba saha ölçümleri bir ondalık basamağı desteklerken, hassas atölye ölçümleri iki basamağı destekleyebilir."
        ]
      },
      "arcsin-mistakes": {
        "h2": "Sinüs Kullanarak Açı Hesaplarken Yaygın Hatalar",
        "listItems": [
          "<strong>Karşı kenar yerine bitişik kenarı kullanma.</strong> Açınızın hangi köşede olduğunu kontrol edin, ardından karşısındaki kenarı alın. Değen dik kenarı kullandıysanız arksinüs değil arkkosinüs hesapladınız.",
          "<strong>Hipotenüsü pay olarak kullanma.</strong> Formül [[a/c]] şeklindedir, karşı bölü hipotenüs. Ters çevirmek 1'in üzerinde bir oran ve tanım kümesi hatası verir.",
          "<strong>Oranı ters çevirme.</strong> [[\\arcsin(c/a)]] aynı açı değildir. 3-4-5 için [[\\arcsin(3/5) = 36.87^\\circ]], ancak [[\\arcsin(5/3)]] tanımsızdır.",
          "<strong>Ters sinüs yerine normal sinüs kullanma.</strong> Sinüs bir açı girdisine ihtiyaç duyar. Kenarları zaten biliyor ve açıya ihtiyacınız varsa ters fonksiyona ihtiyacınız vardır.",
          "<strong>Ters sinüsü çarpmaya göre ters sinüsle karıştırma.</strong> [[\\sin^{-1}(x)]] arksinüstür; [[1/\\sin(x)]] kosekanttır. İkisi ilişkisizdir.",
          "<strong>Hipotenüsten uzun bir karşı kenar girme.</strong> Dik üçgende geometrik olarak imkansızdır. Kenarlarınızı yeniden etiketleyin: en uzun ölçüm hipotenüstür.",
          "<strong>Sıfır veya negatif kenar uzunlukları girme.</strong> Uzunluklar pozitif olmalıdır. Sıfır karşı kenar bir üçgeni değil, düz bir çizgiyi tanımlar.",
          "<strong>Ölçü birimlerini karıştırma.</strong> Karşı kenarı metre, hipotenüsü santimetre cinsinden girmek oranı bozar. Önce dönüştürün.",
          "<strong>Oranı çok erken yuvarlama.</strong> Arksinüs uygulamadan önce 0.61538'i 0.62'ye yuvarlamak çatı örneğini 37.98'den 38.32 dereceye kaydırır. Sona kadar tam hassasiyeti koruyun.",
          "<strong>Derece beklenirken radyan raporlama.</strong> 0.64 gibi bir cevap genellikle hesaplayıcının radyan modunda olduğu anlamına gelir; 36.87 dereceyi bulmak için [[180/\\pi]] ile çarpın.",
          "<strong>Araç A açısını bulurken B açısını hesaplama.</strong> Hesaplayıcı [[a]] kenarının karşısındaki açıyı verir. Diğer dar açı [[90^\\circ - A]] şeklindedir.",
          "<strong>Açının yapısal güvenliği doğruladığını varsayma.</strong> Açı saf geometridir. Merdiven kararlılığı, çatı dayanımı ve rampa uygunluğu ayrı mühendislik kontrolleri gerektirir.",
          "<strong>Dikey yükselmeyi eğimli mesafeyle karıştırma.</strong> Rampa örneğinde 9.5 m eğimli yüzeydir (hipotenüs), yatay uzunluk değildir. Bunları değiştirmek üçgeni tamamen değiştirir.",
          "<strong>İmkansız bir oranı geçerli sayma.</strong> Hesapladığınız [[a/c]] 1'i aşıyorsa durun: bu kenarlara sahip hiçbir dik üçgen yoktur. Hesaplamayı zorlamak yerine etiketleme hatasını bulun."
        ]
      },
      "arcsin-verify": {
        "h2": "Hesaplanan Açınızın Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
        "h3s": [
          "Yöntem 1: Sinüs oranını kontrol edin",
          "Yöntem 2: Tümler açıyı kontrol edin",
          "Yöntem 3: Pisagor teoremini kullanın"
        ],
        "paragraphs": [
          "Geçerli, dejenere olmayan bir dik üçgen şunları gerektirir: karşı kenar pozitif, hipotenüs pozitif, hipotenüs karşı kenardan kesinlikle uzun, [[a/c]] oranı kesinlikle 0 ile 1 arasında ve sonuç açısı kesinlikle 0 ile 90 derece arasında.",
          "[[a = c]] ise arksinüs 90 derece verir; bu gerçek bir üçgen değil, dejenere bir sınır durumudur. [[a > c]] ise üçgen geometrik olarak imkansızdır.",
          "Yuvarlanmamış açıyı kullanarak [[\\sin(A) \\approx a/c]] değerini doğrulayın. 3-4-5 örneği için [[\\sin(36.87^\\circ) \\approx 0.6 = 3/5]].",
          "[[B = 90^\\circ - A]] değerini hesaplayın. İki dar açının toplamı tam 90 derece olmalıdır. Ardından [[B]] açısını referans alarak üçgenin mantıklı olduğunu doğrulayın.",
          "Bitişik kenarı [[b = \\sqrt{c^2 - a^2}]] olarak hesaplayın, ardından [[a^2 + b^2 \\approx c^2]] değerini doğrulayın. [[a = 3]] ve [[c = 5]] için: [[b = \\sqrt{25 - 9} = 4]] ve [[9 + 16 = 25]]. Küçük farklar hesaplayıcıdan değil, görüntülenen açının yuvarlanmasından kaynaklanır."
        ]
      },
      "arcsin-choose": {
        "h2": "Doğru Dik Üçgen Hesaplayıcısını Seçme",
        "paragraphs": [
          "<strong>Dik Üçgen Sinüsten Açı Hesaplayıcısı:</strong> karşı kenarı ve hipotenüsü biliyor ve [[A]] açısına ihtiyacınız olduğunda kullanın. Şu an bulunduğunuz sayfa budur.",
          "<strong>Dik Üçgen Kosinüsten Açı Hesaplayıcısı:</strong> bitişik kenarı ve hipotenüsü bildiğinizde kullanın. Aynı açı, farklı bilinen çift.",
          "<strong>Dik Üçgen Tanjanttan Açı Hesaplayıcısı:</strong> iki dik kenarı biliyor ancak hipotenüsü bilmiyorsanız kullanın. Yükselti bölü yatay mesafe saha ölçümleri için yaygındır.",
          "<strong>Dik Üçgen Açı Hesaplayıcısı:</strong> hangi kenarlara sahip olduğunuzdan emin olmadığınızda doğru yöntemi seçmenize yardımcı olur.",
          "<strong>Dik Üçgen Sinüsten Kenar Hesaplayıcısı:</strong> yönü tersine çevirir: bir açı ve hipotenüs verildiğinde karşı kenarı bulur.",
          "<strong>Dik Üçgen Kenar Hesaplayıcısı:</strong> bilinen üçgen ölçümlerinden eksik kenar uzunluklarını bulur.",
          "Aracı ölçümlerinize eşleştirin. Karşı kenar bilinmiyorsa ve ölçülmesi zorsa, yalnızca arksinüs kullanmak için onu hesaplamayın; zaten sahip olduğunuz kenarlara uyan ters fonksiyonu seçin."
        ]
      },
      "arcsin-faq": {
        "h2": "Sık Sorulan Sorular"
      },
      "arcsin-related": {
        "h2": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin"
      },
      "arcsin-conclusion": {
        "h2": "Her Açıyı Sinüsten Güvenle Bulun",
        "paragraphs": [
          "Karşı kenarı belirleyerek başlayın: hedef açınızın karşısındaki kenar. Hipotenüsün en uzun kenar olduğunu doğrulayın. Bölün, arksinüs uygulayın ve açıyı derece cinsinden okuyun. İkinci açıyı 90 eksi birinciden bulun. Gidiş dönüş sinüs kontrolü, çapraz yöntem hesaplaması ve Pisagor teoremiyle doğrulayın. Bu adımlarla her karşı ve hipotenüs problemi güvenilir bir rutine indirgenir. Sayılarınızı hesaplamak için bu sayfanın üstündeki hesaplayıcıya dönün."
        ]
      }
    },
    "faqs": [
      {
        "question": "A = arcsin(a/c) formülü neyi hesaplar?",
        "answer": "Sinüsü karşı kenarın hipotenüse oranına eşit olan dar açıyı bulur. Karşı kenar uzunluğunu hipotenüs uzunluğuna bölün, ardından bu ondalığı derece cinsinden açıya dönüştürmek için ters sinüs uygulayın."
      },
      {
        "question": "Ters sinüs kullanarak açı nasıl bulunur?",
        "answer": "Karşı kenarı ve hipotenüsü belirleyin, 0 ile 1 arasında bir oran elde etmek için ilkini ikinciye bölün, ardından arksinüs uygulayın. Örneğin karşı 3 ve hipotenüs 5, arcsin(0.6) verir; bu da yaklaşık 36.87 derecedir."
      },
      {
        "question": "Neden karşı kenara ve hipotenüse ihtiyacım var?",
        "answer": "Çünkü sinüs, karşı bölü hipotenüs olarak tanımlanır. Bu iki kenar oranı tamamen belirler ve oran da açıyı tamamen belirler. Başka bir ölçüme gerek yoktur ve bitişik kenar formüle hiçbir zaman girmez."
      },
      {
        "question": "Bitişik kenarı bilmeden açıyı hesaplayabilir miyim?",
        "answer": "Evet. Bu hesaplayıcının amacı budur. Arksinüs yalnızca karşı kenarı ve hipotenüsü kullanır, dolayısıyla bitişik kenar baştan sona bilinmeden kalabilir."
      },
      {
        "question": "Sinüs ile ters sinüs arasındaki fark nedir?",
        "answer": "Sinüs bir açı alır ve bir oran verir: sin(30 derece) = 0.5. Ters sinüs bunu tersine çevirir: bir oran alır ve açıyı verir, dolayısıyla arcsin(0.5) = 30 derecedir. Açıyı biliyorsanız sinüs kullanın; kenarları biliyorsanız arksinüs kullanın."
      },
      {
        "question": "Arksinüs sin^-1 ile aynı şey midir?",
        "answer": "Evet. Arcsin(x) ve sin^-1(x), aynı ters sinüs fonksiyonunun iki gösterimidir. -1 üst simgesi çarpmaya göre ters anlamına gelmez; sinüsün çarpmaya göre tersi, csc(x) olarak yazılan kosekanttır."
      },
      {
        "question": "Hipotenüs neden karşı kenardan uzun olmalıdır?",
        "answer": "Hipotenüs her zaman bir dik üçgenin en uzun kenarıdır. Girdiğiniz karşı kenar daha uzunsa kenarlar yanlış etiketlenmiştir: tanım gereği üç ölçümünüzün en uzunu hipotenüstür."
      },
      {
        "question": "Karşı kenar hipotenüse eşitse ne olur?",
        "answer": "Oran 1 olur ve arcsin(1) = 90 derecedir. Ancak 90 derecelik bir dar açı, dejenere olmayan bir dik üçgende imkansızdır; eşit kenarlar gerçek bir üçgeni değil, çökmüş bir sınır durumunu tanımlar."
      },
      {
        "question": "Karşı kenar hipotenüs oranı açıyı nasıl etkiler?",
        "answer": "Daha büyük oran daha büyük açı demektir. 0.2 oranı yaklaşık 11.54 derece, 0.5 tam 30 derece ve 0.8 yaklaşık 53.13 derece verir. Karşı kenar uzunluk olarak hipotenüse yaklaştıkça açı 90 dereceye yaklaşır."
      },
      {
        "question": "Hesaplanan açımı nasıl doğrulayabilirim?",
        "answer": "Üç bağımsız kontrol: sin(A) değerini hesaplayın ve a/c'ye eşit olduğunu doğrulayın; tümler B = 90 - A açısını hesaplayın ve üçgenin hâlâ mantıklı olduğunu doğrulayın; Pisagor teoremiyle bitişik kenarı türetin ve a^2 + b^2 = c^2 olduğunu doğrulayın."
      },
      {
        "question": "Bu hesaplayıcıyı çatı, rampa veya merdiven açısı tahmin etmek için kullanabilir miyim?",
        "answer": "Evet, geometri için. Dikey yükselmeyi karşı kenar, eğimli uzunluğu hipotenüs olarak girin. Sonucun yalnızca geometrik bir açı olduğunu unutmayın; yapısal güvenliği veya yönetmelik uyumunu belgelendirmez."
      },
      {
        "question": "Hesapladığım cevap neden bir ders kitabı cevabından biraz farklı olabilir?",
        "answer": "Genellikle yuvarlama: ders kitapları arksinüs uygulamadan önce oranı yuvarlayabilir veya son açıyı farklı yuvarlayabilir. Hesaplama boyunca tam hassasiyeti koruyun ve yalnızca sonda yuvarlayın; cevaplar görüntülenen basamaklara kadar uyuşur."
      }
    ],
    "relatedHeading": "İlgili Dik Üçgen Hesaplayıcılarını Keşfedin",
    "relatedIntro": "Açınızı bulduktan sonra, üçgen analizinizi tamamlamak için bu ilgili hesaplayıcılarla devam edin.",
    "relatedItems": [
      "Dik Üçgen Açı Hesaplayıcısı",
      "Dik Üçgen Kosinüsten Açı Hesaplayıcısı",
      "Dik Üçgen Tanjanttan Açı Hesaplayıcısı",
      "Dik Üçgen Sinüsten Kenar Hesaplayıcısı",
      "Dik Üçgen Kenar Hesaplayıcısı",
      "Dik Üçgen Eksik Açı Hesaplayıcısı",
      "Dik Üçgen Trigonometrik Oran Hesaplayıcı",
      "Sinüs Oran Hesaplayıcı"
    ]
  },
  "sv": {
    "faqs": [
      {
        "question": "Vad beräknar formeln A = arcsin(a/c)?",
        "answer": "Den hittar den spetsiga vinkeln vars sinus är lika med förhållandet mellan den motstående kateten och hypotenusan. Dividera den motstående katetens längd med hypotenusans längd och tillämpa sedan invers sinus för att omvandla decimaltalet till vinkeln i grader."
      },
      {
        "question": "Hur hittar man en vinkel med invers sinus?",
        "answer": "Identifiera den motstående kateten och hypotenusan, dividera den första med den andra för att få ett förhållande mellan 0 och 1, och tillämpa sedan arcus sinus. Till exempel ger motstående katet 3 och hypotenusa 5 arcsin(0.6), vilket är cirka 36.87 grader."
      },
      {
        "question": "Varför behöver jag den motstående kateten och hypotenusan?",
        "answer": "Eftersom sinus definieras som motstående katet genom hypotenusan. Dessa två sidor bestämmer förhållandet fullständigt, och förhållandet bestämmer vinkeln fullständigt. Ingen annan mätning behövs, och den närliggande kateten ingår aldrig i formeln."
      },
      {
        "question": "Kan jag beräkna vinkeln utan att känna den närliggande kateten?",
        "answer": "Ja. Det är poängen med denna kalkylator. Arcus sinus använder endast den motstående kateten och hypotenusan, så den närliggande kateten kan förbli okänd hela tiden."
      },
      {
        "question": "Vad är skillnaden mellan sinus och invers sinus?",
        "answer": "Sinus tar en vinkel och returnerar ett förhållande: sin(30 grader) = 0.5. Invers sinus vänder på detta: den tar ett förhållande och returnerar vinkeln, så arcsin(0.5) = 30 grader. Använd sinus när du känner vinkeln; använd arcus sinus när du känner sidorna."
      },
      {
        "question": "Är arcus sinus samma sak som sin^-1?",
        "answer": "Ja. Arcsin(x) och sin^-1(x) är två beteckningar för samma inversa sinusfunktion. Exponenten -1 betyder inte reciprokt värde; sinus reciproka funktion är cosekans, skriven csc(x)."
      },
      {
        "question": "Varför måste hypotenusan vara längre än den motstående kateten?",
        "answer": "Hypotenusan är alltid den längsta sidan i en rätvinklig triangel. Om din motstående katet är längre har sidorna märkts fel: den längsta av dina tre mätningar är hypotenusan per definition."
      },
      {
        "question": "Vad händer om den motstående kateten är lika med hypotenusan?",
        "answer": "Förhållandet blir 1 och arcsin(1) = 90 grader. Men en spetsig vinkel på 90 grader är omöjlig i en icke-degenererad rätvinklig triangel; lika sidor beskriver ett kollapsat gränsfall, inte en riktig triangel."
      },
      {
        "question": "Hur påverkar förhållandet mellan motstående katet och hypotenusan vinkeln?",
        "answer": "Ett större förhållande betyder en större vinkel. Ett förhållande på 0.2 ger cirka 11.54 grader, 0.5 ger exakt 30 grader och 0.8 ger cirka 53.13 grader. När den motstående kateten närmar sig hypotenusans längd närmar sig vinkeln 90 grader."
      },
      {
        "question": "Hur kan jag verifiera min beräknade vinkel?",
        "answer": "Tre oberoende kontroller: beräkna sin(A) och bekräfta att det är lika med a/c; beräkna komplementet B = 90 - A och bekräfta att triangeln fortfarande är rimlig; härled den närliggande kateten med Pythagoras sats och bekräfta att a^2 + b^2 = c^2."
      },
      {
        "question": "Kan jag använda denna kalkylator för att uppskatta en tak-, ramp- eller stegevinkel?",
        "answer": "Ja, för geometrin. Ange den vertikala stigningen som den motstående kateten och den lutande längden som hypotenusan. Kom ihåg att resultatet endast är en geometrisk vinkel; det certifierar inte konstruktionssäkerhet eller att byggregler uppfylls."
      },
      {
        "question": "Varför kan mitt beräknade svar skilja sig något från ett lärobokssvar?",
        "answer": "Vanligtvis avrundning: läroböcker kan avrunda förhållandet innan arcus sinus tillämpas, eller avrunda den slutliga vinkeln annorlunda. Behåll full precision genom beräkningen och avrunda endast i slutet, så stämmer svaren överens till de visade siffrorna."
      }
    ],
    "relatedHeading": "Utforska relaterade triangelkalkylatorer",
    "relatedIntro": "När du har beräknat din vinkel, fortsätt med dessa relaterade kalkylatorer för att slutföra din triangelanalys.",
    "relatedItems": [
      "Vinkelkalkylator för rätvinklig triangel",
      "Vinkelkalkylator för rätvinklig triangel med cosinus",
      "Vinkelkalkylator för rätvinklig triangel med tangens",
      "Sidokalkylator för rätvinklig triangel med sinus",
      "Sidokalkylator för rätvinklig triangel",
      "Kalkylator för saknad vinkel i rätvinklig triangel",
      "Kalkylator för trigförhållanden i rätvinklig triangel",
      "Sinusförhållandekalkylator"
    ],
    "sections": {
      "arcsin-intro": {
        "h2": "Så hittar du en vinkel med hjälp av sinus",
        "paragraphs": [
          "Föreställ dig en rullstolsramp: du vet att dess lutande yta mäter 9.5 meter och att den stiger 0.75 meter från marken. Vilken lutningsvinkel har rampen? Vinkelkalkylatorn för rätvinklig triangel med sinus svarar på precis den här typen av frågor. Den tar den motstående kateten och hypotenusan i en rätvinklig triangel och returnerar den spetsiga vinkeln mellan dem.",
          "Dessa två mätningar räcker eftersom sinus definieras som förhållandet mellan den motstående kateten och hypotenusan. När förhållandet är känt omvandlar invers sinus det tillbaka till vinkeln. Den närliggande kateten ingår aldrig i beräkningen, vilket gör detta till rätt verktyg när den motstående kateten och hypotenusan är de storheter du faktiskt har mätt.",
          "I den här guiden är [[A]] den spetsiga referensvinkeln som beräknas, [[a]] är sidan mitt emot vinkel [[A]], och [[c]] är hypotenusan. Den beräknade vinkeln är lutningen där hypotenusan möter den närliggande kateten, mätt i grader."
        ]
      },
      "arcsin-anatomy": {
        "h2": "Förstå motstående katet och hypotenusan",
        "h3s": [
          "Vad är en rätvinklig triangel?",
          "Vad är den motstående kateten?",
          "Vad är hypotenusan?",
          "Vad är den närliggande kateten?"
        ],
        "paragraphs": [
          "En rätvinklig triangel har en vinkel på exakt 90 grader. De andra två vinklarna är spetsiga, det vill säga var och en strikt mindre än 90 grader, och tillsammans blir de alltid 90 grader. Det är tack vare detta komplementförhållande som du direkt får den andra spetsiga vinkeln genom subtraktion när du har hittat den ena.",
          "Villkoret med den räta vinkeln är viktigt eftersom sinus, cosinus och tangens definieras genom de fasta sidförhållandena i rätvinkliga trianglar. Utan 90-gradershörnet har förhållandet [[a/c]] inget fast samband med någon vinkel, och invers sinus kan inte återfå någon.",
          "Den motstående kateten är sidan rakt mitt emot vinkel [[A]]. Den vidrör aldrig spetsen för vinkel [[A]]. I höjdproblem representerar denna sida vanligtvis den vertikala höjningen: hur högt en stege når upp längs en vägg, en ramps stigning eller den vertikala komponenten hos en kranbom.",
          "Benämningen är relativ. Om du byter referensvinkel från [[A]] till [[B]] blir sidan som var motstående närliggande och vice versa. Bekräfta alltid vilken vinkel du löser för innan du märker sidorna.",
          "Hypotenusan är sidan mitt emot den räta vinkeln, representerad av [[c]]. Den är alltid triangelns längsta sida. Den vidrör aldrig den räta vinkelns spets. I praktiska sammanhang är hypotenusan ofta själva den lutande längden: stegen, takbjälken, rampytan eller den räta siktsträckan.",
          "När en triangel är ritad roterad identifierar du hypotenusan först genom att hitta sidan mitt emot den kvadratiska rätvinkelsmarkeringen. Allt annat följer av den identifieringen.",
          "Sida [[b]] är den katet som vidrör vinkel [[A]] utan att vara hypotenusan. Denna kalkylator behöver den inte. Om du senare behöver den närliggande kateten ger Pythagoras sats den som [[b = \\sqrt{c^2 - a^2}]]."
        ],
        "imgAlt": "Rätvinklig triangel där motstående katet a och hypotenusan c är markerade för arcus sinus",
        "figcaption": "Anatomin för arcus sinus: sida a ligger mitt emot vinkel A, och sida c är hypotenusan mitt emot den räta vinkeln."
      },
      "arcsin-what": {
        "h2": "Vad är sinus i en rätvinklig triangel?",
        "h3s": [
          "Vad är invers sinus?",
          "Är arcus sinus samma sak som invers sinus?",
          "Varför använder formeln den motstående kateten?"
        ],
        "paragraphs": [
          "Sinus mäter vilken andel av hypotenusan som den motstående kateten representerar. Definitionen är:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "Här är [[\\sin(A)]] sinus för vinkel [[A]], [[a]] är den motstående kateten och [[c]] är hypotenusan. Om den motstående kateten är 3 enheter och hypotenusan är 5 enheter blir [[\\sin(A) = 3/5 = 0.6]]. Förhållandet är dimensionslöst: meter dividerat med meter förkortas bort, så samma 0.6 fås oavsett om du mäter i meter, fot eller centimeter.",
          "Vanlig sinus börjar med en vinkel och ger ett förhållande. Invers sinus börjar med ett giltigt förhållande och returnerar motsvarande vinkel. Om [[\\sin(A) = 0.6]] blir [[A = \\arcsin(0.6) \\approx 36.87^\\circ]]. Invers sinus vänder på sinusrelationen för att återfå den vinkel du utgick från.",
          "Ja. Beteckningarna [[\\arcsin(x)]] och [[\\sin^{-1}(x)]] avser samma funktion. Exponenten [[-1]] betyder inte reciprokt värde. Sinus reciproka funktion är en helt annan funktion: cosekans, skriven [[\\csc(x)]].",
          "Sinus är det förhållande som parar den motstående kateten med hypotenusan, vilket är exakt det par som denna kalkylator accepterar. Minnesregeln SOH-CAH-TOA sammanfattar de tre parningarna: SOH betyder att sinus är motstående katet genom hypotenusan, CAH betyder att cosinus är närliggande katet genom hypotenusan, och TOA betyder att tangens är motstående katet genom närliggande katet. När dina kända sidor är motstående katet och hypotenusan gäller SOH, så arcus sinus är rätt invers funktion."
        ],
        "imgAlt": "Diagram som visar att man dividerar a med c och sedan tillämpar arcus sinus för att få vinkeln",
        "figcaption": "Så här fungerar arcus sinus: dividera den motstående kateten med hypotenusan och tillämpa sedan invers sinus för att återfå vinkeln."
      },
      "arcsin-formula": {
        "h2": "Så fungerar formeln för invers sinus",
        "paragraphs": [
          "Börja med sinusdefinitionen:",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "De kända sidlängderna låter dig beräkna förhållandet till höger. Tillämpa sedan invers sinus på båda sidor för att isolera vinkeln:",
          "[[[A=\\arcsin\\left(\\frac{a}{c}\\right)]]]",
          "Invers sinus tillämpas på hela förhållandet eftersom förhållandet som helhet är sinusvärdet. Gå igenom ett numeriskt exempel. Givet [[a = 3]] cm och [[c = 5]] cm:",
          "Steg 1: Dividera den motstående kateten med hypotenusan: [[3/5 = 0.6]].",
          "Steg 2: Tillämpa invers sinus: [[A = \\arcsin(0.6)]].",
          "Steg 3: Beräkna vinkeln: [[A \\approx 36.87^\\circ]].",
          "Resultatet är en approximation avrundad till två decimaler. Med vanliga ord: vinkeln vars sinus är 0.6 mäter cirka 36.87 grader."
        ]
      },
      "arcsin-howto": {
        "h2": "Så använder du vinkelkalkylatorn för rätvinklig triangel med sinus",
        "listItems": [
          "<strong>Identifiera den räta vinkeln.</strong> Kalkylatorn fungerar bara för rätvinkliga trianglar, så hitta 90-gradershörnet först.",
          "<strong>Hitta den motstående kateten [[a]].</strong> Den ligger rakt mitt emot vinkel [[A]] och vidrör aldrig dess spets.",
          "<strong>Identifiera hypotenusan [[c]].</strong> Den ligger mitt emot 90-gradersvinkeln och är den längsta sidan.",
          "<strong>Mät eller ta fram båda sidlängderna.</strong> Använd ett måttband, en ritning eller givna uppgifter.",
          "<strong>Ange den motstående katetens längd</strong> i motsvarande inmatningsfält.",
          "<strong>Ange hypotenusans längd</strong> i dess inmatningsfält.",
          "<strong>Välj kompatibla enheter</strong> med enhetsväljarna så att båda sidorna använder samma enhet.",
          "<strong>Kontrollera att hypotenusan är längre än den motstående kateten.</strong> Om den inte är det har sidorna märkts fel.",
          "<strong>Tryck på Beräkna vinkel A.</strong> Verktyget dividerar, tillämpar arcus sinus och returnerar vinkeln.",
          "<strong>Läs av den beräknade vinkeln i grader</strong> och notera om den ser rimlig ut för triangeln.",
          "<strong>Verifiera resultatet</strong> med en av kontrollerna i verifieringsavsnittet nedan.",
          "<strong>Använd Återställ</strong> för att rensa inmatningarna och börja en ny beräkning."
        ]
      },
      "arcsin-examples": {
        "h2": "Steg-för-steg-exempel på att hitta en vinkel med sinus",
        "h3s": [
          "Exempel 1: En grundläggande 3-4-5-rätvinklig triangel",
          "Exempel 2: När den motstående kateten är hälften av hypotenusan",
          "Exempel 3: En triangel med förhållandet 0.8 mellan motstående katet och hypotenusan",
          "Exempel 4: En liten motstående katet"
        ],
        "paragraphs": [
          "Givet motstående katet [[a = 3]] cm och hypotenusa [[c = 5]] cm, hitta vinkel [[A]].",
          "Steg 1: Skriv formeln: [[A = \\arcsin(a/c)]].",
          "Steg 2: Sätt in värdena: [[A = \\arcsin(3/5)]].",
          "Steg 3: Beräkna förhållandet: [[3/5 = 0.6]].",
          "Steg 4: Tillämpa invers sinus: [[A = \\arcsin(0.6) \\approx 36.87^\\circ]].",
          "Denna vinkel är lutningen mellan hypotenusan och den närliggande kateten, med 3 cm-sidan stående mitt emot den.",
          "Givet [[a = 5]] m och [[c = 10]] m: [[A = \\arcsin(5/10) = \\arcsin(0.5) = 30^\\circ]] exakt. Detta är den välkända 30-60-90-specialtriangeln, där sidan mitt emot 30-gradersvinkeln är hälften av hypotenusan.",
          "Givet [[a = 8]] m och [[c = 10]] m: [[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Vinkeln är större än 30 grader eftersom den motstående kateten representerar en större andel av hypotenusan.",
          "Givet [[a = 2]] fot och [[c = 10]] fot: [[A = \\arcsin(2/10) = \\arcsin(0.2) \\approx 11.54^\\circ]]. En relativt kort motstående katet ger en liten vinkel, eftersom triangeln är lång och flack."
        ]
      },
      "arcsin-applications": {
        "h2": "Exempel från verkligheten på att beräkna vinklar med sinus",
        "h3s": [
          "Exempel 5: Hitta ett taks lutningsvinkel",
          "Exempel 6: Hitta en steges vinkel",
          "Exempel 7: Beräkna en ramps lutning",
          "Exempel 8: Hitta en vinkel i lantmäteri",
          "Exempel 9: Beräkna en staglinas vinkel",
          "Exempel 10: Hitta en trappas lutning",
          "Exempel 11: Beräkna ett flygplans stigvinkel",
          "Exempel 12: Hitta en mekanisk stagboms vinkel",
          "Exempel 13: Beräkna en kranboms lutning",
          "Exempel 14: Uppskatta ett träds elevationsvinkel",
          "Exempel 15: Beräkna en vandringsleds lutning",
          "Exempel 16: Hitta ett markisstöds vinkel"
        ],
        "paragraphs": [
          "En takbjälke är 6.5 m lång och stiger 4 m vertikalt över nivån vid sin startpunkt. Hitta vinkeln mellan takbjälken och horisontalplanet. Takbjälken och den vertikala höjningen bildar en rätvinklig triangel: höjningen är motstående lutningsvinkeln, och takbjälken är hypotenusan. Invers sinus är lämplig eftersom det kända paret är motstående katet och hypotenusan.",
          "[[A = \\arcsin(4/6.5) = \\arcsin(0.61538) \\approx 37.98^\\circ]]. Taket stiger med cirka 38 grader från horisontalplanet. Observera att denna geometriska beräkning inte är en fullständig takkonstruktionsbedömning; hållfasthetsfaktorer är separata.",
          "En stege är 5.5 m lång och når 4.5 m upp längs en vägg. Beräkna vinkeln mellan stegen och plan mark. Väggens höjd är motstående markvinkeln, och stegen själv är hypotenusan, så arcus sinus gäller.",
          "[[A = \\arcsin(4.5/5.5) \\approx 54.90^\\circ]]. Stegen lutar med cirka 54.9 grader. Denna beräkning ensam fastställer inte om stegen står säkert.",
          "En ramp har en lutande längd på 9.5 m och en vertikal stigning på 0.75 m. Hitta dess vinkel i förhållande till horisontalplanet. Den lutande ytan är hypotenusan och den vertikala stigningen är motstående lutningsvinkeln.",
          "[[A = \\arcsin(0.75/9.5) \\approx 4.53^\\circ]]. Rampen stiger med en flack lutning på 4.53 grader. Påstå inte att den beräknade rampen uppfyller tillgänglighets- eller byggregler.",
          "En förenklad lantmäterimätning registrerar en vertikal skillnad på 30 m och en rak lutande sträcka på 50 m. Beräkna vinkeln mellan den lutande linjen och horisontalplanet. Den vertikala skillnaden är motstående vinkeln; den lutande sträckan är hypotenusan.",
          "[[A = \\arcsin(30/50) = \\arcsin(0.6) \\approx 36.87^\\circ]]. Verkligt lantmäteri kan kräva korrigeringar för instrumenthöjd och terränganpassningar utöver denna förenklade modell.",
          "En staglina är 18 m lång, med en vertikal separation på 10 m mellan sina ändpunkter. Hitta vinkeln mellan linan och horisontalplanet. Den vertikala separationen är den motstående kateten och linan är hypotenusan.",
          "[[A = \\arcsin(10/18) \\approx 33.75^\\circ]]. Resultatet beskriver endast geometri; det bestämmer inte linans spänning, förankringens styrka eller konstruktionssäkerhet.",
          "En förenklad trappa har en vertikal stigning på 2.8 m och en lutande vanglängd på 5 m. Beräkna vinkeln mellan vangen och horisontalplanet. Stigningen och vangen är den motstående kateten respektive hypotenusan.",
          "[[A = \\arcsin(2.8/5) = \\arcsin(0.56) \\approx 34.06^\\circ]]. Denna beräkning fastställer inte att byggreglerna uppfylls.",
          "För ett förenklat flygsegment vinner ett flygplan 1,500 m i höjd medan det färdas 5,000 m längs en rak flygväg. Uppskatta stigvinkeln i förhållande till horisontalplanet. Höjdökningen är motstående stigvinkeln; flygvägen är hypotenusan.",
          "[[A = \\arcsin(1500/5000) = \\arcsin(0.3) \\approx 17.46^\\circ]]. Detta är en modell för ett rakt segment, inte en fullständig analys av en föränderlig flygväg.",
          "En mekanisk stagbom har en längd på 1,700 mm och en vertikal stigning på 800 mm. Beräkna dess vinkel i förhållande till horisontalplanet. Formeln fungerar likadant i millimeter: stigningen är motstående, bomlängden är hypotenusan.",
          "[[A = \\arcsin(800/1700) \\approx 28.07^\\circ]]. Resultatet beskriver geometri, inte hållfasthet.",
          "En förenklad kranbom har en längd på 10 m och en vertikal komponent på 8 m. Hitta vinkeln mellan bommen och horisontalplanet. Bomlängden är hypotenusan och den vertikala komponenten är motstående vinkeln.",
          "[[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Behandla inte resultatet som att det fastställer krankapacitet eller driftsäkerhet.",
          "En person observerar toppen av ett träd från en punkt där den vertikala skillnaden till trädtoppen är 12 m och den räta siktsträckan är 20 m. Hitta elevationsvinkeln. Den vertikala skillnaden är motstående vinkeln; synlinjen är hypotenusan.",
          "[[A = \\arcsin(12/20) = \\arcsin(0.6) \\approx 36.87^\\circ]]. Detta ger vinkeln från observationsnivån; det ger inte automatiskt trädets totala höjd över marken.",
          "En förenklad rak vandringssträcka har en lutande längd på 100 m och en vertikal stigning på 80 m. Hitta lutningsvinkeln. Stigningen och den lutande sträckan är den motstående kateten och hypotenusan.",
          "[[A = \\arcsin(80/100) = \\arcsin(0.8) \\approx 53.13^\\circ]]. Detta är en brant illustrativ lutning; verkliga vandringsleder varierar i lutning längs sin sträckning.",
          "Ett diagonalt markisstöd är 3.5 m långt och stiger 1.2 m vertikalt. Beräkna vinkeln mellan stödet och horisontalplanet. Den vertikala stigningen är motstående vinkeln och stödet är hypotenusan.",
          "[[A = \\arcsin(1.2/3.5) \\approx 20.05^\\circ]]. Resultatet verifierar inte stödets konstruktionsmässiga lämplighet."
        ],
        "table": {
          "headers": [
            "Situation",
            "Motstående katet",
            "Hypotenusa",
            "Formel",
            "Vinkel",
            "Betydelse"
          ],
          "rows": [
            [
              "Takbjälke",
              "4 m",
              "6.5 m",
              "arcsin(4/6.5)",
              "37.98 grader",
              "Taklutning från horisontalplanet"
            ],
            [
              "Stege",
              "4.5 m",
              "5.5 m",
              "arcsin(4.5/5.5)",
              "54.90 grader",
              "Lutningsvinkel från marken"
            ],
            [
              "Ramp",
              "0.75 m",
              "9.5 m",
              "arcsin(0.75/9.5)",
              "4.53 grader",
              "Flack lutning i tillgänglighetsstil"
            ],
            [
              "Lantmäteri",
              "30 m",
              "50 m",
              "arcsin(30/50)",
              "36.87 grader",
              "Lutningsvinkel för den uppmätta linjen"
            ],
            [
              "Staglina",
              "10 m",
              "18 m",
              "arcsin(10/18)",
              "33.75 grader",
              "Linans vinkel från horisontalplanet"
            ],
            [
              "Trappa",
              "2.8 m",
              "5 m",
              "arcsin(2.8/5)",
              "34.06 grader",
              "Vangens lutning"
            ],
            [
              "Flygplansstigning",
              "1500 m",
              "5000 m",
              "arcsin(1500/5000)",
              "17.46 grader",
              "Uppskattad stigvinkel"
            ],
            [
              "Stagbom",
              "800 mm",
              "1700 mm",
              "arcsin(800/1700)",
              "28.07 grader",
              "Stagbommens vinkel från horisontalplanet"
            ],
            [
              "Kranbom",
              "8 m",
              "10 m",
              "arcsin(8/10)",
              "53.13 grader",
              "Bommens elevation"
            ],
            [
              "Trädobservation",
              "12 m",
              "20 m",
              "arcsin(12/20)",
              "36.87 grader",
              "Elevationsvinkel"
            ],
            [
              "Vandringsled",
              "80 m",
              "100 m",
              "arcsin(80/100)",
              "53.13 grader",
              "Brant stiglutning"
            ],
            [
              "Markisstöd",
              "1.2 m",
              "3.5 m",
              "arcsin(1.2/3.5)",
              "20.05 grader",
              "Stödets vinkel från horisontalplanet"
            ]
          ]
        },
        "imgAlt": "Fyra paneler: exempel på arcus sinus för takbjälke, stege, ramp och lantmäteri",
        "figcaption": "Fyra praktiska exempel på arcus sinus: tak, stege, ramp och lantmäteri, vart och ett med sina uppmätta sidor och resulterande vinkel."
      },
      "arcsin-ratio": {
        "h2": "Hur förhållandet mellan motstående katet och hypotenusan ändrar vinkeln",
        "paragraphs": [
          "Förhållandet [[a/c]] bestämmer vinkel [[A]]. En större motstående katet i förhållande till hypotenusan ger en större spetsig vinkel, eftersom mer av hypotenusans längd står vertikalt. Ett litet förhållande ger en liten vinkel: triangeln är lång och flack.",
          "När den motstående kateten är exakt hälften av hypotenusan är vinkeln 30 grader. Proportionella trianglar delar vinklar oavsett storlek: att skala varje sida med samma faktor lämnar varje förhållande oförändrat, så vinklarna förblir fasta. Att byta enheter från meter till centimeter ändrar ingenting av samma anledning.",
          "Förhållandet måste ligga mellan 0 och 1 för en vanlig rätvinklig triangel. Ett förhållande på 0 skulle betyda att det inte finns någon motstående katet alls, och ett förhållande på 1 skulle betyda att den motstående kateten är lika med hypotenusan; båda är degenererade gränsfall, inte riktiga trianglar med tre positiva sidor."
        ],
        "table": {
          "headers": [
            "Motstående katet a",
            "Hypotenusa c",
            "Förhållande a/c",
            "Vinkel A"
          ],
          "rows": [
            [
              "2",
              "10",
              "0.2",
              "Cirka 11.54 grader"
            ],
            [
              "5",
              "10",
              "0.5",
              "30 grader"
            ],
            [
              "8",
              "10",
              "0.8",
              "Cirka 53.13 grader"
            ]
          ]
        },
        "imgAlt": "Tre paneler som visar hur en större motstående katet ger större vinkel vid fast hypotenusa",
        "figcaption": "Med hypotenusan fast på 10 enheter ger en större motstående katet en större spetsig vinkel: 11.54, 30 och sedan 53.13 grader."
      },
      "arcsin-units": {
        "h2": "Förstå vinkelenheter och mätprecision",
        "h3s": [
          "Exempel: Ändrar mätenheten vinkeln?"
        ],
        "paragraphs": [
          "Denna kalkylator returnerar vinklar i grader, standardenheten för byggande, lantmäteri och skolgeometri. En grad delar en full cirkel i 360 delar. Radianer är alternativet: en full cirkel är [[2\\pi]] radianer. Invers sinus på en handhållen miniräknare kan returnera antingen, beroende på dess lägesinställning.",
          "Konvertera mellan dem med: [[\\text{Degrees} = \\text{Radians} \\times \\frac{180^\\circ}{\\pi}]]. Själva sidförhållandet har ingen enhet, och de två sidorna måste använda kompatibla enheter: meter med meter, eller millimeter med millimeter.",
          "Ta [[a = 3]] m och [[c = 5]] m. Förhållandet är 0.6 och vinkeln är 36.87 grader. I centimeter ger [[a = 300]] cm och [[c = 500]] cm samma förhållande 0.6 och samma vinkel. Att skala båda mätningarna med samma faktor tar ut varandra.",
          "Behåll extra siffror under mellanstegen och avrunda endast den slutliga vinkeln. Den motiverade precisionen beror på inmätningarna: grova fältmätningar stöder en decimal, medan precisa verkstadsmätningar kan stödja två."
        ]
      },
      "arcsin-mistakes": {
        "h2": "Vanliga misstag när man beräknar en vinkel med sinus",
        "listItems": [
          "<strong>Att använda den närliggande kateten i stället för den motstående.</strong> Kontrollera vid vilken spets din vinkel sitter och ta sedan sidan mitt emot den. Om du använde den vidrörande kateten beräknade du arccos, inte arcus sinus.",
          "<strong>Att använda hypotenusan som täljare.</strong> Formeln är [[a/c]], motstående genom hypotenusan. Att vända på det ger ett förhållande över 1 och ett definitionsmängdsfel.",
          "<strong>Att vända på förhållandet.</strong> [[\\arcsin(c/a)]] är inte samma vinkel. För 3-4-5 gäller [[\\arcsin(3/5) = 36.87^\\circ]] men [[\\arcsin(5/3)]] är odefinierat.",
          "<strong>Att använda vanlig sinus i stället för invers sinus.</strong> Sinus behöver en vinkel som indata. Om du redan känner sidorna och behöver vinkeln behöver du den inversa funktionen.",
          "<strong>Att förväxla invers sinus med reciprok sinus.</strong> [[\\sin^{-1}(x)]] är arcus sinus; [[1/\\sin(x)]] är cosekans. De är obesläktade.",
          "<strong>Att ange en motstående katet som är längre än hypotenusan.</strong> Geometriskt omöjligt i en rätvinklig triangel. Märk om sidorna: den längsta mätningen är hypotenusan.",
          "<strong>Att ange noll eller negativa sidlängder.</strong> Längder måste vara positiva. En motstående katet på noll beskriver en platt linje, inte en triangel.",
          "<strong>Att blanda mätenheter.</strong> Att ange den motstående kateten i meter och hypotenusan i centimeter förstör förhållandet. Konvertera först.",
          "<strong>Att avrunda förhållandet för tidigt.</strong> Att avrunda 0.61538 till 0.62 innan arcus sinus tillämpas flyttar takexemplet från 37.98 till 38.32 grader. Behåll full precision till slutet.",
          "<strong>Att rapportera radianer när grader förväntas.</strong> Ett svar på 0.64 betyder vanligtvis att miniräknaren var i radianläge; multiplicera med [[180/\\pi]] för att få 36.87 grader.",
          "<strong>Att beräkna vinkel B när verktyget hittar vinkel A.</strong> Kalkylatorn returnerar vinkeln mitt emot sida [[a]]. Den andra spetsiga vinkeln är [[90^\\circ - A]].",
          "<strong>Att anta att vinkeln verifierar konstruktionssäkerhet.</strong> Vinkeln är ren geometri. Stegens stabilitet, takets styrka och rampens regeluppfyllelse behöver separata ingenjörskontroller.",
          "<strong>Att förväxla vertikal stigning med lutande sträcka.</strong> I rampexemplet är 9.5 m den lutande ytan (hypotenusan), inte den horisontella sträckan. Att byta dem ändrar triangeln helt.",
          "<strong>Att behandla ett omöjligt förhållande som giltigt.</strong> Om ditt beräknade [[a/c]] överstiger 1, stanna: ingen rätvinklig triangel har de sidorna. Hitta märkningsfelet i stället för att tvinga fram en beräkning."
        ]
      },
      "arcsin-verify": {
        "h2": "Så kontrollerar du om din beräknade vinkel är giltig",
        "h3s": [
          "Metod 1: Kontrollera sinusförhållandet",
          "Metod 2: Kontrollera komplementvinkeln",
          "Metod 3: Använd Pythagoras sats"
        ],
        "paragraphs": [
          "En giltig, icke-degenererad rätvinklig triangel kräver: den motstående kateten positiv, hypotenusan positiv, hypotenusan strikt längre än den motstående kateten, förhållandet [[a/c]] strikt mellan 0 och 1, och den resulterande vinkeln strikt mellan 0 och 90 grader.",
          "Om [[a = c]] returnerar arcus sinus 90 grader, ett degenererat gränsfall snarare än en riktig triangel. Om [[a > c]] är triangeln geometriskt omöjlig.",
          "Verifiera [[\\sin(A) \\approx a/c]] med den oavrundade vinkeln. För 3-4-5-exemplet gäller [[\\sin(36.87^\\circ) \\approx 0.6 = 3/5]].",
          "Beräkna [[B = 90^\\circ - A]]. De två spetsiga vinklarna måste summera till exakt 90 grader. Bekräfta sedan att triangeln är rimlig med vinkel [[B]] som referens.",
          "Beräkna den närliggande kateten [[b = \\sqrt{c^2 - a^2}]] och verifiera sedan [[a^2 + b^2 \\approx c^2]]. För [[a = 3]] och [[c = 5]]: [[b = \\sqrt{25 - 9} = 4]], och [[9 + 16 = 25]]. Små avvikelser kommer från avrundning av den visade vinkeln, inte från kalkylatorn."
        ]
      },
      "arcsin-choose": {
        "h2": "Välj rätt kalkylator för rätvinklig triangel",
        "paragraphs": [
          "<strong>Vinkelkalkylator för rätvinklig triangel med sinus:</strong> använd när du känner den motstående kateten och hypotenusan och behöver vinkel [[A]]. Detta är sidan du befinner dig på.",
          "<strong>Vinkelkalkylator för rätvinklig triangel med cosinus:</strong> använd när du känner den närliggande kateten och hypotenusan. Samma vinkel, annat känt par.",
          "<strong>Vinkelkalkylator för rätvinklig triangel med tangens:</strong> använd när du känner båda kateterna men inte hypotenusan. Vanligt för mätningar av stigning per sträcka i fält.",
          "<strong>Vinkelkalkylator för rätvinklig triangel:</strong> hjälper dig att välja rätt metod när du är osäker på vilka sidor du har.",
          "<strong>Sidokalkylator för rätvinklig triangel med sinus:</strong> vänder på riktningen: givet en vinkel och hypotenusan hittar den den motstående kateten.",
          "<strong>Sidokalkylator för rätvinklig triangel:</strong> hittar saknade sidlängder från kända triangel­mått.",
          "Anpassa verktyget efter dina mätningar. Om den motstående kateten är okänd och svår att mäta, beräkna den inte bara för att använda arcus sinus; välj den inversa funktion som passar de sidor du redan har."
        ]
      },
      "arcsin-faq": {
        "h2": "Vanliga frågor"
      },
      "arcsin-related": {
        "h2": "Utforska relaterade triangelkalkylatorer"
      },
      "arcsin-conclusion": {
        "h2": "Hitta valfri vinkel från sinus med självförtroende",
        "paragraphs": [
          "Börja med att identifiera den motstående kateten: sidan mitt emot din målvinkel. Bekräfta att hypotenusan är den längsta sidan. Dividera, tillämpa arcus sinus och läs av vinkeln i grader. Få den andra vinkeln från 90 minus den första. Verifiera med sinus-kontrollen tur och retur, en beräkning med en annan metod och Pythagoras sats. Med dessa steg reduceras varje problem med motstående katet och hypotenusan till en tillförlitlig rutin. Gå tillbaka till kalkylatorn högst upp på denna sida för att köra dina siffror."
        ]
      }
    },
    "tocHeading": "I den här guiden",
    "tocItems": {
      "arcsin-intro": "Så hittar du en vinkel med hjälp av sinus",
      "arcsin-anatomy": "Förstå motstående katet och hypotenusan",
      "arcsin-what": "Vad är sinus i en rätvinklig triangel?",
      "arcsin-formula": "Så fungerar formeln för invers sinus",
      "arcsin-howto": "Så använder du kalkylatorn",
      "arcsin-examples": "Steg-för-steg-exempel",
      "arcsin-applications": "Exempel från verkligheten",
      "arcsin-ratio": "Hur förhållandet ändrar vinkeln",
      "arcsin-units": "Vinkelenheter och mätprecision",
      "arcsin-mistakes": "Vanliga misstag",
      "arcsin-verify": "Kontrollera din beräknade vinkel",
      "arcsin-choose": "Välj rätt kalkylator",
      "arcsin-faq": "Vanliga frågor"
    }
  },
  "zh": {
    "faqs": [
      {
        "question": "公式 A = arcsin(a/c) 计算的是什么？",
        "answer": "它求的是正弦值等于对边与斜边之比的锐角。先用对边长度除以斜边长度，再应用反正弦，把这个小数转换成以度为单位的角度。"
      },
      {
        "question": "如何用反正弦求角度？",
        "answer": "先确定对边和斜边，前者除以后者得到一个介于 0 和 1 之间的比值，再应用反正弦。例如，对边为 3、斜边为 5 时得到 arcsin(0.6)，约为 36.87 度。"
      },
      {
        "question": "为什么需要对边和斜边？",
        "answer": "因为正弦的定义就是对边比斜边。这两条边完全决定了比值，比值又完全决定了角度。不需要其他测量值，邻边从不进入公式。"
      },
      {
        "question": "不知道邻边也能求出角度吗？",
        "answer": "可以，这正是本计算器的意义所在。反正弦只用对边和斜边，邻边可以始终未知。"
      },
      {
        "question": "正弦和反正弦有什么区别？",
        "answer": "正弦接收角度返回比值：sin(30 度) = 0.5。反正弦反过来：它接收比值返回角度，所以 arcsin(0.5) = 30 度。已知角度求边用正弦，已知边求角度用反正弦。"
      },
      {
        "question": "反正弦和 sin^-1 是同一个东西吗？",
        "answer": "是的。arcsin(x) 和 sin^-1(x) 是同一个反正弦函数的两种记法。上标 -1 不是倒数的意思，正弦的倒数是余割，记作 csc(x)。"
      },
      {
        "question": "为什么斜边必须比对边长？",
        "answer": "斜边始终是直角三角形中最长的边。如果输入的对边更长，说明边的标记有误：按定义，你的三个测量值中最长的那个就是斜边。"
      },
      {
        "question": "如果对边等于斜边会怎样？",
        "answer": "比值变为 1，arcsin(1) = 90 度。但在非退化的直角三角形中，90 度的锐角不可能存在；相等的边描述的是一种坍缩的极限情形，而不是真实的三角形。"
      },
      {
        "question": "对边与斜边的比值如何影响角度？",
        "answer": "比值越大，角度越大。比值为 0.2 时约 11.54 度，0.5 时恰为 30 度，0.8 时约 53.13 度。当对边长度接近斜边时，角度趋近 90 度。"
      },
      {
        "question": "如何验证计算出的角度？",
        "answer": "三项独立检验：计算 sin(A) 并确认它等于 a/c；计算余角 B = 90 - A 并确认三角形仍然合理；用勾股定理求出邻边，确认 a^2 + b^2 = c^2。"
      },
      {
        "question": "可以用这个计算器估算屋顶、坡道或梯子的角度吗？",
        "answer": "可以，只限几何层面。把垂直升高量作为对边、斜向长度作为斜边输入。记住结果只是一个几何角度，不能证明结构安全或符合规范。"
      },
      {
        "question": "为什么我的计算结果与课本答案略有出入？",
        "answer": "通常是取整造成的：课本可能在应用反正弦之前先对比值取整，或对最终角度的取整方式不同。整个计算过程保留完整精度，只在最后取整，答案就会在显示的位数上一致。"
      }
    ],
    "relatedHeading": "探索相关的三角形计算器",
    "relatedIntro": "求出角度后，可以用以下相关计算器继续完成三角形的分析。",
    "relatedItems": [
      "直角三角形角度计算器",
      "直角三角形用余弦求角度计算器",
      "直角三角形用正切求角度计算器",
      "直角三角形用正弦求边长计算器",
      "直角三角形求边长计算器",
      "直角三角形缺失角度计算器",
      "直角三角形三角比计算器",
      "正弦比值计算器"
    ],
    "sections": {
      "arcsin-intro": {
        "h2": "如何用正弦求角度",
        "paragraphs": [
          "想象一个轮椅坡道：已知它的斜面长 9.5 米，从地面升起 0.75 米。坡道的倾角是多少？直角三角形用正弦求角度计算器正是用来回答这类问题的。它接收直角三角形的对边和斜边，返回它们之间的锐角。",
          "这两个测量值就足够了，因为正弦被定义为对边与斜边的比值。已知比值后，反正弦把它转换回角度。邻边从不参与计算，因此当对边和斜边正是你实际测得的量时，这个工具就是正确的选择。",
          "在本指南中，[[A]] 是待求的锐角参考角，[[a]] 是角 [[A]] 的对边，[[c]] 是斜边。计算出的角度是斜边与邻边相交处的倾斜角，以度为单位。"
        ]
      },
      "arcsin-anatomy": {
        "h2": "认识对边和斜边",
        "h3s": [
          "什么是直角三角形？",
          "什么是对边？",
          "什么是斜边？",
          "什么是邻边？"
        ],
        "paragraphs": [
          "直角三角形有一个恰好为 90 度的角。另外两个角是锐角，即每个角都严格小于 90 度，且两者之和恒为 90 度。正是因为这种互余关系，求出一个锐角后，用减法就能立即得到另一个。",
          "直角条件很重要，因为正弦、余弦和正切都是通过直角三角形固定的边长比来定义的。没有这个 90 度的角，比值 [[a/c]] 与任何角度都没有固定关系，反正弦也就无法还原出角度。",
          "对边是正对着角 [[A]] 的那条边，它从不接触角 [[A]] 的顶点。在高度问题中，这条边通常表示垂直上升的高度：梯子沿墙达到的高度、坡道的升起高度，或起重机吊臂的垂直分量。",
          "边的命名是相对的。如果你把参考角从 [[A]] 换成 [[B]]，原来是“对边”的那条边就变成了“邻边”，反之亦然。在标记各边之前，务必先确认要求解的是哪个角。",
          "斜边是直角对面的边，用 [[c]] 表示，它始终是三角形中最长的边。它从不接触直角的顶点。在实际场景中，斜边往往就是斜向的长度本身：梯子、屋架椽、坡道斜面，或直线视距。",
          "当三角形被旋转绘制时，先找出直角标记对面的边来确定斜边，其他边的确定都由此展开。",
          "边 [[b]] 是接触角 [[A]] 但不是斜边的那条直角边，本计算器不需要它。如果以后需要求邻边，用勾股定理可得 [[b = \\sqrt{c^2 - a^2}]]。"
        ],
        "imgAlt": "直角三角形，其中对边 a 和斜边 c 为反正弦计算而突出显示",
        "figcaption": "反正弦的构成：边 a 位于角 A 的对面，边 c 是直角对面的斜边。"
      },
      "arcsin-what": {
        "h2": "直角三角形中的正弦是什么？",
        "h3s": [
          "什么是反正弦？",
          "反正弦和逆正弦是同一个概念吗？",
          "为什么公式用的是对边？"
        ],
        "paragraphs": [
          "正弦衡量的是对边占斜边的比例，定义为：",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "其中 [[\\sin(A)]] 是角 [[A]] 的正弦，[[a]] 是对边，[[c]] 是斜边。如果对边为 3 个单位、斜边为 5 个单位，则 [[\\sin(A) = 3/5 = 0.6]]。这个比值是无量纲的：米除以米相互约去，所以无论用米、英尺还是厘米测量，结果都是 0.6。",
          "普通正弦从角度出发得到比值，而反正弦从一个合法的比值出发返回对应的角度。如果 [[\\sin(A) = 0.6]]，那么 [[A = \\arcsin(0.6) \\approx 36.87^\\circ]]。反正弦把正弦关系反过来，还原出你最初的角度。",
          "是的。记号 [[\\arcsin(x)]] 和 [[\\sin^{-1}(x)]] 指的是同一个函数。上标 [[-1]] 不是倒数的意思。正弦的倒数是另一个完全不同的函数：余割，记作 [[\\csc(x)]]。",
          "正弦是把对边和斜边配成一对的比值，而这正是本计算器接收的一对边。记忆口诀 SOH-CAH-TOA 概括了这三种配对：SOH 表示正弦等于对边比斜边，CAH 表示余弦等于邻边比斜边，TOA 表示正切等于对边比邻边。当已知边是对边和斜边时，适用 SOH，所以反正弦是正确的反函数。"
        ],
        "imgAlt": "示意图：先用 a 除以 c，再用反正弦求出角度",
        "figcaption": "反正弦的工作原理：用对边除以斜边，再用反正弦还原角度。"
      },
      "arcsin-formula": {
        "h2": "反正弦公式的工作原理",
        "paragraphs": [
          "从正弦的定义出发：",
          "[[[\\sin(A)=\\frac{a}{c}]]]",
          "已知边长后，就可以算出右边的比值。然后在等式两边同时应用反正弦，把角度分离出来：",
          "[[[A=\\arcsin\\left(\\frac{a}{c}\\right)]]]",
          "反正弦作用于整个比值，因为这个比值整体就是正弦值。下面用一个数值例子走一遍。已知 [[a = 3]] 厘米、[[c = 5]] 厘米：",
          "第 1 步：用对边除以斜边：[[3/5 = 0.6]]。",
          "第 2 步：应用反正弦：[[A = \\arcsin(0.6)]]。",
          "第 3 步：算出角度：[[A \\approx 36.87^\\circ]]。",
          "结果是保留两位小数的近似值。用通俗的话说：正弦值为 0.6 的角约为 36.87 度。"
        ]
      },
      "arcsin-howto": {
        "h2": "如何使用直角三角形用正弦求角度计算器",
        "listItems": [
          "<strong>确定直角。</strong>本计算器只适用于直角三角形，所以先找到那个 90 度的角。",
          "<strong>找到对边 [[a]]。</strong>它正对着角 [[A]]，从不接触角 [[A]] 的顶点。",
          "<strong>确定斜边 [[c]]。</strong>它位于 90 度角的对面，是最长的边。",
          "<strong>测量或获取两条边的长度。</strong>可以用卷尺、平面图纸，或题目给出的数据。",
          "<strong>在对应的输入框中输入对边的长度</strong>。",
          "<strong>在对应的输入框中输入斜边的长度</strong>。",
          "<strong>用单位选择器选择一致的单位</strong>，让两条边使用相同的单位。",
          "<strong>检查斜边是否长于对边。</strong>如果不是，说明边的标记有误。",
          "<strong>点击“计算角度 A”。</strong>工具会先做除法，再应用反正弦，返回角度。",
          "<strong>读取以度为单位的计算结果</strong>，并判断它对这个三角形是否合理。",
          "<strong>用下方检验部分的方法验证结果</strong>。",
          "<strong>使用“重置”</strong>清空输入，开始下一次计算。"
        ]
      },
      "arcsin-examples": {
        "h2": "用正弦求角度的分步示例",
        "h3s": [
          "示例 1：基本的 3-4-5 直角三角形",
          "示例 2：对边为斜边一半的情形",
          "示例 3：对边与斜边之比为 0.8 的三角形",
          "示例 4：对边较小"
        ],
        "paragraphs": [
          "已知对边 [[a = 3]] 厘米、斜边 [[c = 5]] 厘米，求角 [[A]]。",
          "第 1 步：写出公式：[[A = \\arcsin(a/c)]]。",
          "第 2 步：代入数值：[[A = \\arcsin(3/5)]]。",
          "第 3 步：计算比值：[[3/5 = 0.6]]。",
          "第 4 步：应用反正弦：[[A = \\arcsin(0.6) \\approx 36.87^\\circ]]。",
          "这个角是斜边与邻边之间的倾角，3 厘米的边正对着它。",
          "已知 [[a = 5]] 米、[[c = 10]] 米：[[A = \\arcsin(5/10) = \\arcsin(0.5) = 30^\\circ]]，恰好成立。这就是常见的 30-60-90 特殊三角形，其中 30 度角的对边恰为斜边的一半。",
          "已知 [[a = 8]] 米、[[c = 10]] 米：[[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]。这个角大于 30 度，因为对边占斜边的比例更大。",
          "已知 [[a = 2]] 英尺、[[c = 10]] 英尺：[[A = \\arcsin(2/10) = \\arcsin(0.2) \\approx 11.54^\\circ]]。对边相对较短时角度较小，三角形又长又扁。"
        ]
      },
      "arcsin-applications": {
        "h2": "用正弦计算角度的生活实例",
        "h3s": [
          "示例 5：求屋顶的倾角",
          "示例 6：求梯子的角度",
          "示例 7：计算坡道的坡度",
          "示例 8：测量中的求角",
          "示例 9：计算拉线的角度",
          "示例 10：求楼梯的坡度",
          "示例 11：计算飞机的爬升角",
          "示例 12：求机械斜撑的角度",
          "示例 13：计算起重机吊臂的倾角",
          "示例 14：估算树木的仰角",
          "示例 15：计算徒步路线的坡度",
          "示例 16：求遮阳篷斜撑的角度"
        ],
        "paragraphs": [
          "一根屋架椽长 6.5 米，从起点水平面垂直升高 4 米。求椽与水平面之间的夹角。椽和垂直升高构成一个直角三角形：升高量正对着倾角，椽是斜边。已知的一对边是对边和斜边，所以适用反正弦。",
          "[[A = \\arcsin(4/6.5) = \\arcsin(0.61538) \\approx 37.98^\\circ]]。屋顶相对水平面约倾斜 38 度。注意，这个几何计算不是完整的屋顶设计评估，结构因素需要另行考虑。",
          "一把梯子长 5.5 米，沿墙达到 4.5 米高。计算梯子与水平地面之间的夹角。墙的高度正对着地面处的角，梯子本身是斜边，所以用反正弦。",
          "[[A = \\arcsin(4.5/5.5) \\approx 54.90^\\circ]]。梯子约倾斜 54.9 度。仅凭这个计算不能断定梯子放置是否安全。",
          "一条坡道斜面长 9.5 米，垂直升高 0.75 米。求它相对水平面的角度。斜面是斜边，垂直升高量正对着倾角。",
          "[[A = \\arcsin(0.75/9.5) \\approx 4.53^\\circ]]。坡道以 4.53 度的缓坡上升。不要断言算出的坡道符合无障碍或建筑规范要求。",
          "一次简化的测量记录了 30 米的垂直高差和 50 米的直线斜距。计算斜线与水平面之间的夹角。垂直高差正对着这个角，斜距是斜边。",
          "[[A = \\arcsin(30/50) = \\arcsin(0.6) \\approx 36.87^\\circ]]。实际测量可能还需要仪器高度改正和地形调整，超出这个简化模型的范围。",
          "一根拉线长 18 米，两端点之间的垂直距离为 10 米。求拉线与水平面之间的夹角。垂直距离是对边，拉线是斜边。",
          "[[A = \\arcsin(10/18) \\approx 33.75^\\circ]]。结果只描述几何关系，不能确定拉线的张力、锚固强度或结构安全。",
          "一段简化的楼梯垂直升高 2.8 米，楼梯斜梁的斜长为 5 米。计算斜梁与水平面之间的夹角。升高量和斜梁分别是对边和斜边。",
          "[[A = \\arcsin(2.8/5) = \\arcsin(0.56) \\approx 34.06^\\circ]]。这个计算不能证明其符合建筑规范。",
          "在一个简化的航段中，飞机沿直线航迹飞行 5000 米，高度增加 1500 米。估算相对水平面的爬升角。高度增量正对着爬升角，航迹是斜边。",
          "[[A = \\arcsin(1500/5000) = \\arcsin(0.3) \\approx 17.46^\\circ]]。这是直线航段模型，不是变化航迹的完整分析。",
          "一根机械斜撑长 1700 毫米，垂直升高 800 毫米。计算它相对水平面的角度。公式在毫米单位下同样适用：升高量是对边，斜撑长度是斜边。",
          "[[A = \\arcsin(800/1700) \\approx 28.07^\\circ]]。结果描述的是几何关系，不是结构强度。",
          "一台简化的起重机吊臂长 10 米，垂直分量为 8 米。求吊臂与水平面之间的夹角。吊臂长度是斜边，垂直分量正对着这个角。",
          "[[A = \\arcsin(8/10) = \\arcsin(0.8) \\approx 53.13^\\circ]]。不要把这个结果当作起重能力或作业安全的依据。",
          "有人在一点观察树顶，该点到树顶的垂直高差为 12 米，直线视距为 20 米。求仰角。垂直高差正对着这个角，视线是斜边。",
          "[[A = \\arcsin(12/20) = \\arcsin(0.6) \\approx 36.87^\\circ]]。这是从观察高度算出的角度，它不会自动给出树木高出地面的总高度。",
          "一段简化的直线徒步路段斜长 100 米，垂直升高 80 米。求坡度角。升高量和斜距分别是对边和斜边。",
          "[[A = \\arcsin(80/100) = \\arcsin(0.8) \\approx 53.13^\\circ]]。这是一个很陡的示例坡度，实际徒步路线的坡度沿途是变化的。",
          "一根斜向的遮阳篷斜撑长 3.5 米，垂直升高 1.2 米。计算斜撑与水平面之间的夹角。垂直升高量正对着这个角，斜撑是斜边。",
          "[[A = \\arcsin(1.2/3.5) \\approx 20.05^\\circ]]。结果不能验证该斜撑在结构上是否适用。"
        ],
        "table": {
          "headers": [
            "情形",
            "对边",
            "斜边",
            "公式",
            "角度",
            "含义"
          ],
          "rows": [
            [
              "屋架椽",
              "4 米",
              "6.5 米",
              "arcsin(4/6.5)",
              "37.98 度",
              "相对水平面的屋顶坡度"
            ],
            [
              "梯子",
              "4.5 米",
              "5.5 米",
              "arcsin(4.5/5.5)",
              "54.90 度",
              "相对地面的倾斜角"
            ],
            [
              "坡道",
              "0.75 米",
              "9.5 米",
              "arcsin(0.75/9.5)",
              "4.53 度",
              "缓坡（无障碍式）"
            ],
            [
              "测量",
              "30 米",
              "50 米",
              "arcsin(30/50)",
              "36.87 度",
              "测量线的坡度角"
            ],
            [
              "拉线",
              "10 米",
              "18 米",
              "arcsin(10/18)",
              "33.75 度",
              "拉线相对水平面的角度"
            ],
            [
              "楼梯",
              "2.8 米",
              "5 米",
              "arcsin(2.8/5)",
              "34.06 度",
              "楼梯斜梁的坡度"
            ],
            [
              "飞机爬升",
              "1500 米",
              "5000 米",
              "arcsin(1500/5000)",
              "17.46 度",
              "爬升角估算"
            ],
            [
              "斜撑",
              "800 毫米",
              "1700 毫米",
              "arcsin(800/1700)",
              "28.07 度",
              "斜撑相对水平面的角度"
            ],
            [
              "起重机吊臂",
              "8 米",
              "10 米",
              "arcsin(8/10)",
              "53.13 度",
              "吊臂仰角"
            ],
            [
              "树木观测",
              "12 米",
              "20 米",
              "arcsin(12/20)",
              "36.87 度",
              "仰角"
            ],
            [
              "徒步路线",
              "80 米",
              "100 米",
              "arcsin(80/100)",
              "53.13 度",
              "陡峭的山路坡度"
            ],
            [
              "遮阳篷斜撑",
              "1.2 米",
              "3.5 米",
              "arcsin(1.2/3.5)",
              "20.05 度",
              "斜撑相对水平面的角度"
            ]
          ]
        },
        "imgAlt": "四个面板：屋架椽、梯子、坡道和测量的反正弦示例",
        "figcaption": "四个实用的反正弦示例：屋顶、梯子、坡道和测量，每个都给出了测量边长和求得的角度。"
      },
      "arcsin-ratio": {
        "h2": "对边与斜边的比值如何改变角度",
        "paragraphs": [
          "比值 [[a/c]] 决定角 [[A]] 的大小。对边相对斜边越大，锐角就越大，因为斜边的长度中有更多部分是竖直的。比值小则角度小：三角形又长又扁。",
          "当对边恰为斜边的一半时，角度为 30 度。成比例的三角形无论大小都共享相同的角度：把每条边按相同比例缩放，每条比值都不变，所以角度保持不变。出于同样的原因，把单位从米换成厘米不会改变任何结果。",
          "在普通的直角三角形中，比值必须介于 0 和 1 之间。比值为 0 意味着根本没有对边，比值为 1 意味着对边等于斜边，两者都是退化的边界情形，而不是具有三条正数边的真实三角形。"
        ],
        "table": {
          "headers": [
            "对边 a",
            "斜边 c",
            "比值 a/c",
            "角度 A"
          ],
          "rows": [
            [
              "2",
              "10",
              "0.2",
              "约 11.54 度"
            ],
            [
              "5",
              "10",
              "0.5",
              "30 度"
            ],
            [
              "8",
              "10",
              "0.8",
              "约 53.13 度"
            ]
          ]
        },
        "imgAlt": "三个面板展示在斜边固定时，对边越大角度越大",
        "figcaption": "当斜边固定为 10 个单位时，对边越大，锐角越大：分别为 11.54 度、30 度和 53.13 度。"
      },
      "arcsin-units": {
        "h2": "角度单位与测量精度",
        "h3s": [
          "示例：测量单位会改变角度吗？"
        ],
        "paragraphs": [
          "本计算器返回以度为单位的角度，这是建筑、测量和课堂几何的标准单位。一度把一个整圆分成 360 份。弧度是另一种单位：整圆为 [[2\\pi]] 弧度。手持计算器上的反正弦可能返回度，也可能返回弧度，取决于它的模式设置。",
          "两者之间的换算公式为：[[\\text{Degrees} = \\text{Radians} \\times \\frac{180^\\circ}{\\pi}]]。边长比值本身没有单位，但两条边必须使用一致的单位：米配米，毫米配毫米。",
          "取 [[a = 3]] 米、[[c = 5]] 米。比值为 0.6，角度为 36.87 度。换成厘米，[[a = 300]] 厘米、[[c = 500]] 厘米得到相同的比值 0.6 和相同的角度。把两个测量值按相同倍数缩放会相互抵消。",
          "中间步骤保留多余的位数，只在最后对角度取整。合理的精度取决于输入的测量值：粗略的野外测量支持一位小数，精密的车间测量可以支持两位小数。"
        ]
      },
      "arcsin-mistakes": {
        "h2": "用正弦求角度时的常见错误",
        "listItems": [
          "<strong>用了邻边而不是对边。</strong>先确认要求的角位于哪个顶点，再取它对面的边。如果你用的是接触该顶点的直角边，算出的就是反余弦，而不是反正弦。",
          "<strong>把斜边当成了分子。</strong>公式是 [[a/c]]，即对边比斜边。颠倒后比值会大于 1，导致定义域错误。",
          "<strong>把比值写反了。</strong>[[\\arcsin(c/a)]] 不是同一个角。对于 3-4-5 三角形，[[\\arcsin(3/5) = 36.87^\\circ]]，而 [[\\arcsin(5/3)]] 无定义。",
          "<strong>用了普通正弦而不是反正弦。</strong>正弦需要输入角度。如果你已知边长要求角度，需要的是反函数。",
          "<strong>把反正弦和正弦的倒数混淆。</strong>[[\\sin^{-1}(x)]] 是反正弦，[[1/\\sin(x)]] 是余割，两者毫无关系。",
          "<strong>输入的对边比斜边还长。</strong>这在直角三角形中几何上不可能。重新标记各边：最长的测量值就是斜边。",
          "<strong>输入了零或负的边长。</strong>长度必须为正数。对边为零描述的是一条直线，不是三角形。",
          "<strong>混用了测量单位。</strong>对边用米、斜边用厘米输入会破坏比值，先换算成同一单位。",
          "<strong>过早对比值取整。</strong>在应用反正弦之前把 0.61538 取整为 0.62，会让屋顶示例从 37.98 度变成 38.32 度。保留完整精度直到最后。",
          "<strong>该用度却报告了弧度。</strong>答案为 0.64 通常意味着计算器处于弧度模式，乘以 [[180/\\pi]] 可得到 36.87 度。",
          "<strong>工具求的是角 A，你却算了角 B。</strong>计算器返回的是边 [[a]] 对面的角，另一个锐角是 [[90^\\circ - A]]。",
          "<strong>以为角度能验证结构安全。</strong>角度只是纯几何。梯子的稳定性、屋顶的强度、坡道的规范符合性都需要另做工程检查。",
          "<strong>把垂直升高和斜距混淆。</strong>在坡道示例中，9.5 米是斜面（斜边），不是水平距离。两者调换会彻底改变这个三角形。",
          "<strong>把不可能的比值当作有效值。</strong>如果算出的 [[a/c]] 大于 1，请停下来：没有任何直角三角形具有这样的边长。去找标记错误，而不是强行计算。"
        ]
      },
      "arcsin-verify": {
        "h2": "如何检验计算出的角度是否有效",
        "h3s": [
          "方法 1：检验正弦比值",
          "方法 2：检验余角",
          "方法 3：用勾股定理"
        ],
        "paragraphs": [
          "一个有效的非退化直角三角形要求：对边为正数，斜边为正数，斜边严格长于对边，比值 [[a/c]] 严格介于 0 和 1 之间，所得角度严格介于 0 度和 90 度之间。",
          "如果 [[a = c]]，反正弦返回 90 度，这是一种退化的极限情形，而不是真实的三角形。如果 [[a > c]]，这样的三角形在几何上不可能存在。",
          "用未取整的角度验证 [[\\sin(A) \\approx a/c]]。对于 3-4-5 示例，[[\\sin(36.87^\\circ) \\approx 0.6 = 3/5]]。",
          "计算 [[B = 90^\\circ - A]]。两个锐角之和必须恰好为 90 度。然后以角 [[B]] 为参考，确认三角形仍然合理。",
          "先求出邻边 [[b = \\sqrt{c^2 - a^2}]]，再验证 [[a^2 + b^2 \\approx c^2]]。当 [[a = 3]]、[[c = 5]] 时：[[b = \\sqrt{25 - 9} = 4]]，且 [[9 + 16 = 25]]。微小的差异来自显示角度的取整，而不是计算器的错误。"
        ]
      },
      "arcsin-choose": {
        "h2": "选择合适的直角三角形计算器",
        "paragraphs": [
          "<strong>直角三角形用正弦求角度计算器：</strong>已知对边和斜边、要求角 [[A]] 时使用，就是你当前所在的页面。",
          "<strong>直角三角形用余弦求角度计算器：</strong>已知邻边和斜边时使用。求的是同一个角，但已知边对不同。",
          "<strong>直角三角形用正切求角度计算器：</strong>已知两条直角边但不知斜边时使用，常见于野外按“升高比水平距离”测量的情形。",
          "<strong>直角三角形角度计算器：</strong>当你不确定手头是哪些边时，它帮你选对方法。",
          "<strong>直角三角形用正弦求边长计算器：</strong>方向相反：已知角度和斜边，求对边。",
          "<strong>直角三角形求边长计算器：</strong>根据已知的三角形测量值求缺失的边长。",
          "让工具匹配你的测量值。如果对边未知且难以测量，不要为了用反正弦而去算它，直接选择与已有边匹配的反函数。"
        ]
      },
      "arcsin-faq": {
        "h2": "常见问题"
      },
      "arcsin-related": {
        "h2": "探索相关的三角形计算器"
      },
      "arcsin-conclusion": {
        "h2": "自信地用正弦求出任意角度",
        "paragraphs": [
          "先确定对边：目标角对面的那条边。确认斜边是最长的边。做除法，应用反正弦，以度为单位读出角度。用 90 减去第一个角得到第二个角。再用正弦往返检验、换一种方法的交叉计算和勾股定理加以验证。有了这些步骤，任何“对边加斜边”的问题都变成可靠的常规操作。回到本页顶部的计算器，输入你的数据算一算吧。"
        ]
      }
    },
    "tocHeading": "本指南目录",
    "tocItems": {
      "arcsin-intro": "如何用正弦求角度",
      "arcsin-anatomy": "认识对边和斜边",
      "arcsin-what": "直角三角形中的正弦是什么？",
      "arcsin-formula": "反正弦公式的工作原理",
      "arcsin-howto": "如何使用计算器",
      "arcsin-examples": "分步示例",
      "arcsin-applications": "生活中的实例",
      "arcsin-ratio": "比值如何改变角度",
      "arcsin-units": "角度单位与测量精度",
      "arcsin-mistakes": "常见错误",
      "arcsin-verify": "检验计算出的角度",
      "arcsin-choose": "选择合适的计算器",
      "arcsin-faq": "常见问题"
    }
  }
};
