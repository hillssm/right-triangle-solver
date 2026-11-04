// areaFromSemiperimeterGuideTranslations.batch5.ts: Right Triangle Area From Semiperimeter Guide (Page 23 of 45) translations for Indonesian (id), Arabic (ar), and Bulgarian (bg).

export const AREA_FROM_SEMIPERIMETER_TRANSLATIONS_BATCH5 = {
  "id": {
    "faqs": [
      {
        "question": "Apa rumus luas segitiga siku-siku dengan jari-jari dalam dan semiperimeter?",
        "answer": "K = r × s, dengan r adalah jari-jari dalam (radius lingkaran dalam) dan s adalah semiperimeter (setengah keliling). Kalikan keduanya dan hasilnya adalah luas, tanpa langkah pembagian. Untuk r = 1 dan s = 6, K = 1 × 6 = 6 satuan luas. Kedua masukan harus menggambarkan segitiga yang sama."
      },
      {
        "question": "Apa itu jari-jari dalam?",
        "answer": "Jari-jari dalam adalah radius lingkaran dalam, yaitu lingkaran yang pas di dalam segitiga dan menyentuh ketiga sisinya. Ia sama dengan jarak tegak lurus dari pusat lingkaran dalam, tempat ketiga garis bagi sudut bertemu, ke sisi mana pun. Untuk segitiga siku-siku dengan kaki a dan b serta hipotenusa c, ada rumus pintas r = (a + b - c) / 2."
      },
      {
        "question": "Apa perbedaan jari-jari dalam dan jari-jari lingkaran luar?",
        "answer": "Jari-jari dalam milik lingkaran di dalam segitiga yang menyentuh ketiga sisinya; jari-jari lingkaran luar milik lingkaran yang melalui ketiga titik sudut. Keduanya mengukur lingkaran yang berbeda, sehingga nilainya berbeda. Untuk segitiga siku-siku, jari-jari lingkaran luar adalah R = c/2, tepat setengah hipotenusa, sedangkan jari-jari dalamnya (a + b - c)/2."
      },
      {
        "question": "Bagaimana cara menghitung semiperimeter segitiga siku-siku?",
        "answer": "Jumlahkan ketiga sisi lalu bagi dua: s = (a + b + c) / 2. Untuk segitiga 3-4-5, s = (3 + 4 + 5) / 2 = 6. Semiperimeter adalah setengah keliling penuh, sehingga memasukkan keliling penuh secara keliru akan menggandakan luas saat menggunakan K = r × s."
      },
      {
        "question": "Bagaimana cara menemukan jari-jari dalam dari tiga panjang sisi?",
        "answer": "Untuk segitiga siku-siku, gunakan rumus pintas r = (a + b - c) / 2, dengan a dan b sebagai kaki dan c sebagai hipotenusa. Dengan sisi 5, 12, 13: r = (5 + 12 - 13) / 2 = 2. Rumus pintas ini hanya berlaku untuk segitiga siku-siku; segitiga lain memerlukan hubungan umum r = K / s."
      },
      {
        "question": "Mengapa luas sama dengan jari-jari dalam dikalikan semiperimeter?",
        "answer": "Menghubungkan pusat lingkaran dalam ke ketiga titik sudut membelah segitiga menjadi tiga segitiga yang lebih kecil, masing-masing beralas satu sisi dan bertinggi r. Luasnya adalah ar/2, br/2, dan cr/2. Menjumlahkannya menghasilkan r(a + b + c)/2, dan karena s = (a + b + c)/2, totalnya adalah r × s."
      },
      {
        "question": "Apakah rumusnya berlaku untuk semua segitiga?",
        "answer": "Ya. Setiap segitiga yang tidak degenerat memiliki lingkaran dalam dan pusat lingkaran dalam, sehingga pembelahan menjadi tiga segitiga berlaku untuk segitiga siku-siku, lancip, maupun tumpul. Segitiga siku-siku hanya lebih mudah karena jari-jari dalamnya dapat ditemukan dari sisi-sisinya dengan r = (a + b - c) / 2. Jari-jari dalam umumnya tetap berasal dari r = K / s."
      },
      {
        "question": "Apakah semiperimeter sama dengan keliling?",
        "answer": "Tidak. Semiperimeter tepat setengah keliling: s = P/2. Untuk segitiga 3-4-5, kelilingnya 12 dan semiperimeternya 6. Memasukkan keliling penuh ke K = r × s menghasilkan 1 × 12 = 12, dua kali luas yang benar yaitu 6. Bagi dua kelilingnya sebelum mengalikan."
      },
      {
        "question": "Apakah saya perlu membagi jawaban akhir dengan dua?",
        "answer": "Tidak. Rumus K = r × s sudah memperhitungkan setiap pembagian: pembagian dua dari ketiga segitiga kecil terserap ke dalam semiperimeter. Membagi lagi setelah mengalikan adalah kesalahan yang paling umum. Dengan r = 1 dan s = 6, luas yang benar adalah 6, sedangkan (1 × 6) / 2 = 3 salah."
      },
      {
        "question": "Apa hubungan rumus Heron dengan rumus jari-jari dalam?",
        "answer": "Keduanya menghitung luas yang sama tetapi berangkat dari masukan yang berbeda. Rumus Heron, K = sqrt(s(s - a)(s - b)(s - c)), membutuhkan ketiga sisinya; K = r × s membutuhkan jari-jari dalam dan semiperimeter sebagai gantinya. Untuk segitiga 3-4-5 keduanya menghasilkan 6, sehingga satu rumus menjadi pemeriksaan yang kuat untuk rumus lainnya."
      },
      {
        "question": "Dapatkah saya menggunakan nilai desimal untuk jari-jari dalam dan semiperimeter?",
        "answer": "Ya. Rumusnya memperlakukan desimal persis seperti bilangan bulat. Dengan r = 2.5 dan s = 8.4, K = 2.5 × 8.4 = 21 satuan luas. Pertahankan ketelitian penuh selama perkalian dan bulatkan hanya jawaban akhirnya, mengikuti ketelitian pengukurannya."
      },
      {
        "question": "Bagaimana cara memeriksa apakah jari-jari dalam dan semiperimeter saya benar?",
        "answer": "Periksa bahwa keduanya positif dan s jelas lebih besar dari r. Jika sisi-sisinya diketahui, hitung ulang s = (a + b + c)/2 dan r = (a + b - c)/2, lalu silang-periksa luasnya dengan K = ab/2 dan rumus Heron. Kecocokan antar metode adalah bukti yang kuat. Nilai dari segitiga yang berbeda menghasilkan angka yang bukan luas sebenarnya."
      }
    ],
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedItems": [
      "Kalkulator Luas Segitiga Siku-Siku dari Kaki",
      "Kalkulator Semiperimeter Segitiga Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku dari Tinggi",
      "Kalkulator Luas Segitiga Siku-Siku dari Sudut",
      "Kalkulator Keliling Segitiga Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku"
    ],
    "relatedIntro": "Pengukuran yang berbeda membutuhkan kalkulator yang berbeda.",
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Menghitung Luas Segitiga Siku-Siku Menggunakan Jari-Jari Dalam dan Semiperimeternya",
      "sec-right-triangle": "Apa Itu Segitiga Siku-Siku?",
      "sec-incircle": "Memahami Lingkaran Dalam Segitiga Siku-Siku",
      "sec-semiperimeter": "Memahami Semiperimeter Segitiga",
      "sec-formula": "Mengapa Luas Segitiga Sama dengan Jari-Jari Dalam Kali Semiperimeter?",
      "sec-inradius": "Cara Menghitung Jari-Jari Dalam Segitiga Siku-Siku",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Segitiga Siku-Siku dari Semiperimeter",
      "sec-examples": "Contoh Langkah demi Langkah Luas Segitiga Siku-Siku Menggunakan Jari-Jari Dalam dan Semiperimeter",
      "sec-practical": "Penerapan Nyata Luas Segitiga Siku-Siku dari Jari-Jari Dalam dan Semiperimeter",
      "sec-legs-comparison": "Mengapa Rumus Jari-Jari Dalam Memberi Luas yang Sama dengan Rumus Kaki?",
      "sec-heron": "Apa Perbedaan Rumus Heron dan Luas = Jari-Jari Dalam × Semiperimeter?",
      "sec-consistency": "Cara Memeriksa Apakah Jari-Jari Dalam dan Semiperimeter Valid",
      "sec-units": "Bagaimana Satuan Ukuran Mempengaruhi Perhitungan Jari-Jari Dalam dan Semiperimeter",
      "sec-mistakes": "Kesalahan Umum Saat Menghitung Luas Segitiga Siku-Siku dari Semiperimeter",
      "sec-verify": "Cara Memeriksa Apakah Luas Segitiga Siku-Siku Anda Benar",
      "sec-applications": "Penerapan Praktis Rumus Jari-Jari Dalam dan Semiperimeter",
      "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "sec-faq": "Pertanyaan yang Sering Diajukan",
      "sec-conclusion": "Dua Pengukuran, Satu Hasil Kali"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Menghitung Luas Segitiga Siku-Siku Menggunakan Jari-Jari Dalam dan Semiperimeternya",
        "blocks": [
          { "kind": "p", "text": "Ambil [[r=1]], [[s=6]]. Terapkan [[K=r\\times s]]: [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Hasilnya menyatakan total permukaan datar yang dikelilingi ketiga sisi segitiga: enam satuan luas. Inilah tepatnya yang dikembalikan Kalkulator Luas Segitiga Siku-Siku dari Semiperimeter untuk dua masukan ini." },
          { "kind": "p", "text": "Jari-jari dalam adalah radius lingkaran yang terselip di dalam segitiga dan menyentuh ketiga sisinya. Semiperimeter adalah setengah panjang batasnya: jumlah ketiga sisi dibagi dua. Dua pengukuran sudah cukup karena jari-jari dalam berfungsi sebagai tinggi tegak lurus bersama untuk tiga segitiga kecil yang dibangun dari pusat lingkaran dalam, sedangkan semiperimeter menghimpun alas-alasnya menjadi satu faktor." },
          { "kind": "p", "text": "Penalaran ini berlaku untuk setiap segitiga, karena masing-masing memiliki lingkaran dalam. Segitiga siku-siku mendapat bonus: jari-jari dalamnya mengikuti dari ketiga sisi melalui rumus pendek, sehingga r dan s sering sudah diketahui. Metode ini bersinar pada soal yang memberikan lingkaran dalam atau semiperimeternya, karena tidak ada kaki atau sudut yang perlu diukur." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Apa Itu Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Sebelum lingkaran dalam masuk ke pembahasan, segitiganya sendiri harus dilabeli tanpa kesalahan. Simbol-simbol di bawah ini tetap dipakai di seluruh panduan, dan kalkulator memakai nama yang sama." },
          { "kind": "h3", "text": "Definisi Segitiga Siku-Siku" },
          { "kind": "p", "text": "Segitiga siku-siku adalah poligon tiga sisi yang memuat tepat satu sudut dalam sebesar 90 derajat. Ia memiliki tiga titik sudut, tiga sisi, dua sudut lancip, dan satu sudut siku-siku yang biasanya ditandai dengan persegi kecil. Dua sisi yang membentuk sudut siku-siku adalah kaki; sisi di hadapannya adalah hipotenusa. Karena [[C=90^\\circ]], maka [[[\\boxed{A+B=90^\\circ}]]]: kedua sudut lancip saling berkomplemen, sehingga mengetahui salah satunya menentukan yang lainnya." },
          { "kind": "h3", "text": "Memahami Dua Kaki" },
          { "kind": "p", "text": "Kaki [[a]] terletak berhadapan dengan sudut [[A]]; kaki [[b]] terletak berhadapan dengan sudut [[B]]. Kedua kaki bertemu di titik sudut siku-siku dan saling tegak lurus. Keduanya berkontribusi langsung pada luas, karena tiap kaki dapat berfungsi sebagai alas sementara kaki lainnya sebagai tinggi tegak lurus. Untuk halaman ini keduanya juga memberi makan jari-jari dalam, karena rumus pintas [[r=\\frac{a+b-c}{2}]] dibangun dari kedua kaki dan hipotenusa." },
          { "kind": "h3", "text": "Memahami Hipotenusa" },
          { "kind": "p", "text": "Hipotenusa adalah sisi yang berhadapan dengan sudut 90 derajat, selalu sisi terpanjang segitiga. Ia tidak pernah membentuk sudut siku-siku; ia membentang melintasinya. Dalam rumus luas kaki ia tidak berperan, tetapi di sini ia penting: hipotenusa masuk ke semiperimeter [[s=\\frac{a+b+c}{2}]] maupun rumus pintas jari-jari dalam [[r=\\frac{a+b-c}{2}]]. Jika kedua kaki diketahui, teorema Pythagoras menemukannya kembali melalui [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Apa yang Membedakan Segitiga Ini dari Segitiga Lain?" },
          { "kind": "p", "text": "Sudut siku 90 derajat adalah seluruh ceritanya. Ia membuat kaki-kaki tegak lurus tanpa konstruksi apa pun, sehingga menyederhanakan rumus luas baku, dan ia membuat segmen garis singgung lingkaran dalam di dekat sudut siku-siku sama dengan jari-jari dalam itu sendiri, sehingga menyederhanakan rumus jari-jari dalam. Segitiga lain tetap memenuhi [[K=r\\times s]], tetapi menemukan jari-jari dalamnya biasanya membutuhkan luasnya terlebih dahulu. Segitiga siku-siku adalah satu-satunya kasus di mana jari-jari dalam keluar langsung dari panjang sisi-sisinya." }
        ]
      },
      "sec-incircle": {
        "h2": "Memahami Lingkaran Dalam Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Jari-jari dalam hanya masuk akal setelah lingkaran dalamnya terbayang dengan jelas. Bagian ini membangun gagasannya dari lingkaran itu sendiri hingga titik-titik singgung tempat radius bertemu tiap sisi." },
          { "kind": "h3", "text": "Definisi Lingkaran Dalam" },
          { "kind": "p", "text": "Lingkaran dalam adalah lingkaran yang diposisikan di dalam segitiga sehingga menyentuh ketiga sisinya. Ia berada di bagian dalam, bersinggungan dengan tiap sisi di tepat satu titik, dan tidak dapat melintasi sisi karena singgungan menahannya di tempat. Setiap segitiga yang tidak degenerat memiliki tepat satu lingkaran dalam: kecilkan sebuah lingkaran di dalam wilayah sudut-sudutnya dan ada satu ukuran terbesar yang mencium ketiga sisinya. Ketiga titik singgung, satu per sisi, adalah tempat jari-jari dalam nantinya diukur." },
          { "kind": "h3", "text": "Apa Itu Pusat Lingkaran Dalam?" },
          { "kind": "p", "text": "Pusat lingkaran dalam, dilabeli [[I]], adalah titik pertemuan ketiga garis bagi sudut dalam. Setiap garis bagi membelah satu sudut pojok menjadi dua bagian sama besar, dan setiap titik pada garis bagi berada pada jarak tegak lurus yang sama dari kedua sisi pembentuk sudut itu. Perpotongan ketiga garis bagi karenanya berjarak sama dari ketiga sisi, dan itulah tepatnya mengapa ia dapat berfungsi sebagai pusat lingkaran yang menyentuh tiap sisi. Pusat lingkaran dalam terletak di dalam setiap segitiga yang valid, tidak pernah di tepi atau di luar." },
          { "kind": "h3", "text": "Apa Itu Jari-Jari Dalam?" },
          { "kind": "p", "text": "Jari-jari dalam adalah jarak tegak lurus dari pusat lingkaran dalam ke sisi mana pun dari segitiga: [[[\\boxed{r=\\text{distance from the incenter to a side}}]]] Karena pusat lingkaran dalam berjarak sama dari ketiga sisi, nilainya sama tidak peduli sisi mana yang dipilih. Angka tunggal itu adalah radius lingkaran dalam, panjang tiap-tiap dari tiga segmen pendek yang ditarik dari pusat ke titik-titik singgung, dan tinggi bersama yang membuat pembuktian luas di bagian berikutnya bekerja." },
          { "kind": "h3", "text": "Memahami Hubungan Garis Singgung" },
          { "kind": "p", "text": "Radius yang ditarik ke titik singgung tegak lurus terhadap sisi yang disentuhnya. Diterapkan pada ketiga titik singgung, ini menghasilkan [[r\\perp a]], [[r\\perp b]], dan [[r\\perp c]]. Tiap pernyataan menggambarkan sudut diagram yang berbeda: radius yang berakhir pada kaki a berdiri tegak lurus terhadap kaki a, dan begitu pula untuk kaki b dan hipotenusa. Ketegaklurusan ini bukan hiasan; inilah sifat yang memungkinkan tiap radius bertindak sebagai tinggi salah satu dari tiga segitiga kecil dalam pembuktian luas." },
          { "kind": "h3", "text": "Perbedaan Lingkaran Dalam dan Lingkaran Luar" },
          { "kind": "p", "text": "Lingkaran dalam hidup di dalam segitiga dan menyentuh ketiga sisinya; lingkaran luar melalui ketiga titik sudut dan melingkupi segitiga. Radius keduanya adalah pengukuran yang berbeda dan tidak boleh tertukar. Untuk segitiga siku-siku, jari-jari lingkaran luar memiliki aturannya sendiri yang sederhana, [[[\\boxed{R=\\frac{c}{2}}]]], karena hipotenusa adalah diameter lingkaran luar: titik tengah hipotenusa adalah pusat lingkaran luar. Jari-jari dalam [[r]] adalah yang lebih kecil dari keduanya dan milik lingkaran di dalam." }
        ],
        "imgAlt": "Segitiga siku-siku ABC dengan lingkaran dalam: pusat lingkaran dalam I, tiga titik singgung, radius tegak lurus sepanjang r",
        "figcaption": "Segitiga ABC beserta lingkaran dalamnya: tiga radius tegak lurus, masing-masing sepanjang r."
      },
      "sec-semiperimeter": {
        "h2": "Memahami Semiperimeter Segitiga",
        "blocks": [
          { "kind": "p", "text": "Semiperimeter tampak seperti setengah ukuran belaka, tetapi ia memikul sebagian besar perhitungan luas. Memahami mengapa geometri terus meraih setengah keliling menyiapkan landasan bagi pembuktian." },
          { "kind": "h3", "text": "Definisi Semiperimeter" },
          { "kind": "p", "text": "Semiperimeter tepat setengah dari total keliling: [[[\\boxed{s=\\frac{P}{2}}]]] Untuk segitiga, ini menjadi [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Keliling [[P]] adalah panjang batas penuh, jumlah ketiga sisi; semiperimeter adalah jumlah itu yang dibagi dua. Keduanya terkait melalui [[P=2s]], dan menukar keduanya adalah kesalahan masukan termahal di halaman ini." },
          { "kind": "h3", "text": "Cara Menghitung Semiperimeter" },
          { "kind": "p", "text": "Ambil [[a=3]], [[b=4]], [[c=5]]. Jumlahkan ketiga sisi dahulu, lalu bagi sekali: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]] Penjumlahan harus didahulukan sebelum pembagian karena semiperimeter membagi dua seluruh batas, bukan tiap sisi satu per satu. Menjumlah setelah membagi tetap menghasilkan angka yang sama di sini, tetapi rumus [[s=\\frac{a+b+c}{2}]] menyatakan urutan yang benar: jumlahkan batasnya, lalu bagi dua." },
          { "kind": "h3", "text": "Mengapa Semiperimeter Dipakai, Bukan Keliling Penuh?" },
          { "kind": "p", "text": "Rumus luas segitiga terus menghasilkan pembagian dua: tiap segitiga kecil dalam pembuktian menyumbang satu pembagian dua, dan semiperimeter menyerap semuanya sekaligus. Ia adalah variabel alami rumus Heron, hubungan jari-jari dalam [[r=\\frac{K}{s}]], dan pembuktian yang mengikuti. Memasukkan keliling penuh sebagai gantinya akan menggandakan hasil, karena [[K=r\\times P=2rs]] adalah dua kali luas sebenarnya. Kalkulator meminta [[s]], bukan [[P]], tepat agar perkaliannya tidak perlu penyesuaian lebih lanjut." },
          { "kind": "h3", "text": "Dapatkah Semiperimeter Lebih Kecil dari Sisi Terpanjang?" },
          { "kind": "p", "text": "Tidak. Ketaksamaan segitiga mensyaratkan [[a+b>c]]: dua sisi terpendek bersama-sama harus melebihi sisi terpanjang, atau segitiganya tidak dapat tertutup. Menambahkan [[c]] ke kedua ruas menghasilkan [[a+b+c>2c]], dan membagi dua menghasilkan [[\\frac{a+b+c}{2}>c]], yaitu [[s>c]]. Semiperimeter selalu melebihi sisi terpanjang pada segitiga yang valid. Jika semiperimeter yang dilaporkan lebih kecil dari hipotenusa, masukan-masukan itu tidak dapat menggambarkan segitiga nyata." }
        ]
      },
      "sec-formula": {
        "h2": "Mengapa Luas Segitiga Sama dengan Jari-Jari Dalam Kali Semiperimeter?",
        "blocks": [
          { "kind": "p", "text": "Mulailah dari aturan umum [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Hubungkan pusat lingkaran dalam [[I]] ke ketiga titik sudut. Segitiga terbagi menjadi tiga segitiga yang lebih kecil, masing-masing menggunakan satu sisi asli sebagai alas dan jari-jari dalam sebagai tinggi tegak lurusnya. Sisa bagian ini menghitung tiap potongan dan menjumlahkannya, sehingga [[K=r\\times s]] terlihat, bukan sekadar dihafal." },
          { "kind": "h3", "text": "Luas Segitiga Kecil Pertama" },
          { "kind": "p", "text": "Segitiga yang dibangun pada sisi [[a]] beralas [[a]] dan bertinggi [[r]], karena radius bertemu sisi [[a]] secara tegak lurus di titik singgungnya. Luasnya karenanya adalah [[K_1=\\frac{ar}{2}]]. Belum ada yang memakai sudut siku-siku di sini; langkah ini berlaku untuk sisi segitiga mana pun." },
          { "kind": "h3", "text": "Luas Segitiga Kecil Kedua" },
          { "kind": "p", "text": "Segitiga yang dibangun pada sisi [[b]] mengikuti pola yang sama: alas [[b]], tinggi tegak lurus [[r]], luas [[K_2=\\frac{br}{2}]]. Tingginya lagi-lagi angka [[r]] yang sama, karena pusat lingkaran dalam berjarak sama dari setiap sisi. Tinggi bersama inilah kunci seluruh pembuktian." },
          { "kind": "h3", "text": "Luas Segitiga Kecil Ketiga" },
          { "kind": "p", "text": "Segitiga yang dibangun pada sisi [[c]] melengkapi himpunan: [[K_3=\\frac{cr}{2}]]. Ketiga segitiga kecil menyusun ulang segitiga asli dengan tepat, tanpa tumpang tindih dan tanpa celah: setiap titik dari segitiga asli terletak di salah satunya, karena segmen-segmen dari pusat lingkaran dalam ke titik-titik sudut mempartisi bagian dalam." },
          { "kind": "h3", "text": "Menjumlahkan Ketiga Luas" },
          { "kind": "p", "text": "Jumlahkan potongan-potongannya: [[K=K_1+K_2+K_3]]. Substitusikan menghasilkan [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Faktorkan [[r]] keluar dari jumlah: [[K=\\frac{r(a+b+c)}{2}]]. Ingat bahwa [[s=\\frac{a+b+c}{2}]], sehingga pecahan dalam kurung tepat adalah semiperimeter, dan [[[\\boxed{K=r\\times s}]]] Setiap pembagian dua dari tiga segitiga kecil telah terserap ke dalam semiperimeter, dan itulah mengapa perkalian akhir tidak memerlukan pembagian lanjutan." },
          { "kind": "h3", "text": "Mengapa Rumus Ini Berlaku untuk Setiap Segitiga?" },
          { "kind": "p", "text": "Setiap segitiga yang tidak degenerat memiliki lingkaran dalam dan pusat lingkaran dalam, dan jarak tegak lurus pusat ke ketiga sisinya adalah angka [[r]] yang sama. Dekomposisi tiga segitiga tidak memakai apa pun selain itu: tidak ada sudut siku-siku, tidak ada panjang sisi tertentu, tidak ada bentuk istimewa. Baik segitiganya siku-siku, lancip, maupun tumpul, pusat lingkaran dalam bergabung ke titik-titik sudut dan aljabar yang sama mendarat pada [[K=r\\times s]]. Rumus ini adalah sifat segitiga secara umum, dan itulah mengapa buku teks geometri membuktikannya sekali lalu memakainya di mana-mana." },
          { "kind": "h3", "text": "Mengapa Rumus Ini Terutama Berguna untuk Segitiga Siku-Siku?" },
          { "kind": "p", "text": "Identitasnya tetap sama, tetapi jari-jari dalamnya menjadi mudah. Pada segitiga umum, jari-jari dalam biasanya ditemukan dari luasnya sendiri melalui [[r=\\frac{K}{s}]], yang melingkar jika luas adalah tujuannya. Segitiga siku-siku lolos dari lingkaran itu: jari-jari dalamnya mengikuti langsung dari sisi-sisinya melalui [[r=\\frac{a+b-c}{2}]], yang diturunkan di bagian berikutnya. Itu membuat [[K=r\\times s]] menjadi metode kerja yang sesungguhnya untuk segitiga siku-siku, bukan sekadar definisi yang disusun ulang." }
        ],
        "imgAlt": "Segitiga yang dibelah dari pusat lingkaran dalam I menjadi tiga segitiga kecil bertinggi r, membuktikan K = r kali s",
        "figcaption": "Tiga segitiga kecil berbagi tinggi r; luas-luasnya dijumlahkan menjadi r kali s."
      },
      "sec-inradius": {
        "h2": "Cara Menghitung Jari-Jari Dalam Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Untuk segitiga siku-siku dengan kaki [[a]] dan [[b]] serta hipotenusa [[c]], jari-jari dalamnya adalah [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Rumus pintas ini khusus untuk segitiga siku-siku. Pembuktian di bawah hanya memakai sifat segmen garis singgung lingkaran, dan contoh-contoh yang dikerjakan menunjukkan penerapannya." },
          { "kind": "h3", "text": "Mengapa Rumus Jari-Jari Dalam Bekerja?" },
          { "kind": "p", "text": "Segmen-segmen garis singgung yang ditarik dari titik luar yang sama ke sebuah lingkaran memiliki panjang yang sama. Lingkaran dalam menyentuh kedua kaki, dan kedua radius ke titik-titik sentuh itu bertemu sisi-sisinya pada sudut siku-siku. Bersama dengan sudut siku-siku di titik sudutnya, wilayah pojok membentuk persegi bersisi [[r]], sehingga jarak dari titik sudut siku-siku ke kedua titik singgung kaki masing-masing [[r]]. Sebut sisa segmen garis singgung pada kaki a sebagai [[x]] dan sisa pada kaki b sebagai [[y]]. Kedua segmen garis singgung dari tiap titik sudut lancip sama besar, sehingga hipotenusa terbagi menjadi [[x]] dan [[y]] yang sama. Oleh karena itu [[a=r+x]], [[b=r+y]], dan [[c=x+y]]. Jumlahkan dua persamaan pertama: [[a+b=2r+x+y]]. Karena [[x+y=c]], ini menjadi [[a+b=2r+c]], dan menyusun ulang menghasilkan [[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "h3", "text": "Contoh yang Dikerjakan: Segitiga 3-4-5" },
          { "kind": "p", "text": "Diketahui [[a=3]], [[b=4]], [[c=5]]: substitusikan ke rumus pintas, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]] Lingkaran dalam segitiga 3-4-5 berjari-jari 1, yang cocok dengan contoh pengantar di mana [[r=1]] dan [[s=6]] menghasilkan [[K=6]]." },
          { "kind": "h3", "text": "Contoh yang Dikerjakan: Segitiga 5-12-13" },
          { "kind": "p", "text": "Diketahui [[a=5]], [[b=12]], [[c=13]]: maka [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]] Dipasangkan dengan [[s=\\frac{5+12+13}{2}=15]], luasnya mengikuti sebagai [[K=2\\times15=30]], dikonfirmasi rumus kaki [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Rumus Alternatif untuk Jari-Jari Dalam" },
          { "kind": "p", "text": "Rumus pintas juga dapat ditulis sebagai [[[\\boxed{r=\\frac{ab}{a+b+c}}]]] Ini bukan rumus kedua yang tak berkaitan. Mulailah dari [[K=rs]] dan [[K=\\frac{ab}{2}]], sehingga [[rs=\\frac{ab}{2}]]. Karena [[s=\\frac{a+b+c}{2}]], substitusi menghasilkan [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]], dan pembatalan pembagian dua menyisakan [[r=\\frac{ab}{a+b+c}]]. Ia harus cocok dengan [[r=\\frac{a+b-c}{2}]]: periksa dengan 3-4-5, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], radius yang sama. Secara aljabar, [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] untuk segitiga siku-siku, sehingga kedua bentuk identik." },
          { "kind": "h3", "text": "Apakah Rumus Pintas Jari-Jari Dalam Ini Berlaku untuk Setiap Segitiga?" },
          { "kind": "p", "text": "Tidak. Penurunannya bersandar pada sudut siku-siku: persegi pojok bersisi [[r]] hanya ada karena kedua kaki bertemu pada 90 derajat. Untuk segitiga umum, jari-jari dalam harus berasal dari [[[\\boxed{r=\\frac{K}{s}}]]] atau dari rumus yang sesuai dengan pengukuran yang diketahui, seperti [[r=(s-a)\\tan\\frac{A}{2}]]. Menerapkan [[r=\\frac{a+b-c}{2}]] pada segitiga non-siku-siku menghitung angka yang tidak memiliki makna geometris." }
        ],
        "imgAlt": "Segmen garis singgung x dan y menurunkan rumus jari-jari dalam r = (a + b - c) / 2",
        "figcaption": "Segmen-segmen garis singgung yang sama menghasilkan a = r + x, b = r + y, c = x + y."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segitiga Siku-Siku dari Semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Kalkulator membutuhkan tepat dua masukan, yang dimasukkan berurutan. Langkah-langkah di bawah mengikuti tata letak layar dari mengidentifikasi pengukuran hingga hasil yang diperiksa." },
          { "kind": "p", "text": "Kalkulator memiliki tepat dua masukan, jari-jari dalam [[r]] dan semiperimeter [[s]]. Ia tidak menerima ketiga sisi, kaki-kaki, hipotenusa, maupun sudut. Perkalian [[K=r\\times s]] sudah lengkap seperti yang ditampilkan; hasilnya tidak boleh dibagi dua lagi." }
        ],
        "steps": [
          "<strong>Tentukan jari-jari dalam segitiga siku-siku.</strong> Ini adalah jari-jari lingkaran yang terukir di dalam segitiga. Jika ketiga sisinya diketahui, hitung dengan [[r=\\frac{a+b-c}{2}]].",
          "<strong>Tentukan semiperimeternya.</strong> Jumlahkan ketiga sisi lalu bagi dua: [[s=\\frac{a+b+c}{2}]]. Ini adalah setengah keliling penuh, bukan kelilingnya sendiri.",
          "<strong>Pastikan kedua nilai berasal dari segitiga yang sama.</strong> Jari-jari dalam dari satu segitiga dan semiperimeter dari segitiga lain menghasilkan hasil kali yang tak bermakna.",
          "<strong>Samakan satuannya bila perlu.</strong> Kedua panjang harus memakai satuan yang sama: meter dengan meter, sentimeter dengan sentimeter, jangan pernah dicampur.",
          "<strong>Masukkan jari-jari dalam r ke kolom masukan pertama.</strong> Pada segitiga yang valid, ini adalah nilai yang lebih kecil dari keduanya.",
          "<strong>Masukkan semiperimeter s ke kolom masukan kedua.</strong> Periksa ulang bahwa nilainya adalah setengah keliling, bukan seluruh keliling.",
          "<strong>Klik Calculate Area.</strong> Kalkulator mengalikan kedua masukan secara langsung.",
          "<strong>Tinjau hasil yang ditampilkan.</strong> Baca luasnya dan pastikan terlihat masuk akal untuk ukuran segitiganya.",
          "<strong>Periksa langkah rumus dan substitusinya.</strong> Di sana ditampilkan [[K=r\\times s]] dengan nilai yang dimasukkan sudah terisi.",
          "<strong>Pastikan hasilnya dinyatakan dalam satuan persegi.</strong> Satuan panjang yang dikalikan menghasilkan satuan persegi: m², cm², ft², sesuai masukannya.",
          "<strong>Gunakan Reset sebelum memulai perhitungan baru.</strong> Tombol ini membersihkan kedua kolom untuk awal yang bersih."
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Luas Segitiga Siku-Siku Menggunakan Jari-Jari Dalam dan Semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Empat segitiga siku-siku klasik menunjukkan rantai penuh: sisi ke semiperimeter, sisi ke jari-jari dalam, lalu satu perkalian. Dalam contoh-contoh ini r dan s diturunkan dari panjang sisi; kalkulator itu sendiri menerima r dan s secara langsung." },
          { "kind": "h3", "text": "Contoh 1: Segitiga Siku-Siku 3-4-5" },
          { "kind": "p", "text": "Diketahui [[a=3]], [[b=4]], [[c=5]]. Langkah 1: hitung semiperimeter, [[s=\\frac{3+4+5}{2}]], [[s=6]]. Langkah 2: hitung jari-jari dalam, [[r=\\frac{3+4-5}{2}]], [[r=1]]. Langkah 3: hitung luas, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Verifikasi dengan rumus kaki: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Contoh 2: Segitiga Siku-Siku 5-12-13" },
          { "kind": "p", "text": "Diketahui [[a=5]], [[b=12]], [[c=13]]. Semiperimeter: [[s=\\frac{5+12+13}{2}=15]]. Jari-jari dalam: [[r=\\frac{5+12-13}{2}=2]]. Luas: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Verifikasi: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Contoh 3: Segitiga Siku-Siku 8-15-17" },
          { "kind": "p", "text": "Diketahui [[a=8]], [[b=15]], [[c=17]]. Semiperimeter: [[s=\\frac{8+15+17}{2}=20]]. Jari-jari dalam: [[r=\\frac{8+15-17}{2}=3]]. Luas: [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]] Verifikasi: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Contoh 4: Segitiga Siku-Siku 7-24-25" },
          { "kind": "p", "text": "Diketahui [[a=7]], [[b=24]], [[c=25]]. Semiperimeter: [[s=\\frac{7+24+25}{2}=28]]. Jari-jari dalam: [[r=\\frac{7+24-25}{2}=3]]. Luas: [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]] Verifikasi: [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "Perbandingan Contoh-Contoh yang Dikerjakan" }
        ],
        "table": {
          "headers": ["Segitiga", "Kaki a", "Kaki b", "Hipotenusa c", "Jari-jari dalam r", "Semiperimeter s", "Luas K"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Penerapan Nyata Luas Segitiga Siku-Siku dari Jari-Jari Dalam dan Semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi yang dikerjakan membawa rumus dari halaman ke bengkel, lokasi proyek, dan studio. Masing-masing menyebutkan panel, bagian, profil, atau model sederhana berbentuk segitiga siku-siku, mengerjakan jari-jari dalam dan semiperimeter melalui rumus, dan menyatakan asumsi di balik angka-angkanya. Ini adalah model segitiga siku-siku yang disederhanakan: tidak setiap jendela, atap, kebun, ramp, layar, atau petak tanah nyata membentuk segitiga siku-siku yang tepat, dan objek tak beraturan harus dipecah menjadi bentuk-bentuk yang lebih sederhana sebelum rumus diterapkan. Luas menggambarkan permukaan geometris datar saja; ia tidak pernah berdiri sendiri sebagai penetapan kekuatan struktural, daya dukung beban, atau keamanan konstruksi." },
          { "kind": "h3", "text": "Contoh 1: Jendela Kaca Segitiga" },
          { "kind": "p", "text": "Sebuah jendela kaca segitiga memiliki sisi [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Semiperimeter: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Jari-jari dalam: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Luas: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]] Hasilnya menyatakan permukaan kaca segitiga datar sebelum kelonggaran bingkai dikurangkan. Asumsi: panelnya adalah segitiga siku-siku sejati; dimensi bingkai ditangani terpisah." },
          { "kind": "h3", "text": "Contoh 2: Braket Penyangga Baja" },
          { "kind": "p", "text": "Sebuah pelat baja segitiga penyangga memiliki sisi [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Semiperimeter: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. Jari-jari dalam: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. Luas: [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]] Ini adalah luas pelat datar dan tidak menetapkan kekuatan strukturalnya. Asumsi: blanko braket dipotong sebagai segitiga siku-siku; lubang baut dan tekukan dikecualikan." },
          { "kind": "h3", "text": "Contoh 3: Bagian Penyangga Atap" },
          { "kind": "p", "text": "Bagian penyangga atap segitiga siku-siku memiliki sisi [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Semiperimeter: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. Jari-jari dalam: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. Luas: [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]] Rumus mengukur bagian penyangga segitiga datar, berguna untuk estimasi material. Asumsi: bagian dimodelkan sebagai segitiga siku-siku; geometri atap keseluruhan bisa berbeda." },
          { "kind": "h3", "text": "Contoh 4: Bagian Kebun Segitiga" },
          { "kind": "p", "text": "Bagian kebun segitiga siku-siku yang disederhanakan memiliki sisi [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Semiperimeter: [[s=28\\text{ m}]]. Jari-jari dalam: [[r=3\\text{ m}]]. Luas: [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]] Luasnya membantu memperkirakan bagian lanskap segitiga, misalnya saat memesan rumput atau mulsa. Asumsi: batas-batas bedeng lurus dan bertemu pada sudut siku-siku." },
          { "kind": "h3", "text": "Contoh 5: Profil Sisi Ramp" },
          { "kind": "p", "text": "Profil sisi ramp yang disederhanakan memiliki sisi [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]]. Semiperimeter: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. Jari-jari dalam: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. Luas: [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]] Ini mengukur profil sisi segitiga, bukan permukaan ramp yang miring. Asumsi: profil dimodelkan dengan sudut siku di alasnya." },
          { "kind": "h3", "text": "Contoh 6: Templat Potong Kayu Lapis" },
          { "kind": "p", "text": "Templat kayu lapis segitiga siku-siku memiliki sisi [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Semiperimeter: [[s=24\\text{ cm}]]. Jari-jari dalam: [[r=4\\text{ cm}]]. Luas: [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]] Perhitungannya memperkirakan luas material datar sebelum limbah potongan. Asumsi: templat adalah segitiga siku-siku sejati; lebar gergaji dan sisa potongan adalah tambahan." },
          { "kind": "h3", "text": "Contoh 7: Panel Rambu Segitiga" },
          { "kind": "p", "text": "Panel rambu segitiga memiliki sisi [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Semiperimeter: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. Jari-jari dalam: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. Luas: [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]] Ini menyatakan permukaan datar panel yang dapat dicetak. Asumsi: muka panel datar dan berbentuk segitiga siku-siku; perangkat pemasangan dikecualikan." },
          { "kind": "h3", "text": "Contoh 8: Bagian Survei Tanah" },
          { "kind": "p", "text": "Bagian lahan segitiga siku-siku yang disederhanakan memiliki sisi [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Semiperimeter: [[s=45\\text{ m}]]. Jari-jari dalam: [[r=4\\text{ m}]]. Luas: [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]] Rumus menghitung luas bagian segitiga yang disurvei. Asumsi: bagian dimodelkan dengan sudut siku; lot yang tidak beraturan perlu dipecah menjadi bentuk-bentuk yang lebih sederhana." },
          { "kind": "h3", "text": "Contoh 9: Layar Kain Segitiga" },
          { "kind": "p", "text": "Panel kain segitiga siku-siku memiliki sisi [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Semiperimeter: [[s=30\\text{ ft}]]. Jari-jari dalam: [[r=5\\text{ ft}]]. Luas: [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]] Hasilnya tidak termasuk jahitan, keliman, dan kelonggaran bahan. Asumsi: layar dimodelkan datar; layar asli melengkung saat terbebani." },
          { "kind": "h3", "text": "Contoh 10: Panel Industri" },
          { "kind": "p", "text": "Panel industri segitiga siku-siku memiliki sisi [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Semiperimeter: [[s=66\\text{ m}]]. Jari-jari dalam: [[r=5\\text{ m}]]. Luas: [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]] Hasilnya menggambarkan panel geometris datar, bukan kinerja strukturalnya. Asumsi: panel dimodelkan sebagai segitiga siku-siku; ketebalan dan pengencang adalah urusan terpisah." },
          { "kind": "h3", "text": "Contoh 11: Bagian Ujung Atap Gudang" },
          { "kind": "p", "text": "Bagian ujung atap gudang yang disederhanakan memiliki sisi [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Semiperimeter: [[s=91\\text{ ft}]]. Jari-jari dalam: [[r=6\\text{ ft}]]. Luas: [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]] Hasilnya memperkirakan bagian ujung segitiga, misalnya saat menghitung harga pelapis. Asumsi: ujung atap dimodelkan sebagai segitiga siku-siku." },
          { "kind": "h3", "text": "Contoh 12: Panel Fabrikasi Besar" },
          { "kind": "p", "text": "Panel fabrikasi segitiga siku-siku memiliki sisi [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]]. Semiperimeter: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. Jari-jari dalam: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. Luas: [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]] Metode ini menghitung luas segitiga datar panel langsung dari pengukuran lingkaran dan batasnya. Asumsi: tepi-tepi panel lurus dan bertemu pada sudut siku-siku." },
          { "kind": "h3", "text": "Perbandingan Contoh-Contoh Praktis" }
        ],
        "table": {
          "headers": ["Penerapan praktis", "Kaki a", "Kaki b", "Hipotenusa c", "Jari-jari dalam r", "Semiperimeter s", "Luas yang dihitung", "Satuan ukuran"],
          "rows": [
            ["Jendela kaca", "3", "4", "5", "1", "6", "6", "m²"],
            ["Braket baja", "5", "12", "13", "2", "15", "30", "cm²"],
            ["Penyangga atap", "8", "15", "17", "3", "20", "60", "ft²"],
            ["Bagian kebun", "7", "24", "25", "3", "28", "84", "m²"],
            ["Profil ramp", "9", "12", "15", "3", "18", "54", "m²"],
            ["Templat kayu lapis", "12", "16", "20", "4", "24", "96", "cm²"],
            ["Panel rambu", "20", "21", "29", "6", "35", "210", "cm²"],
            ["Bagian survei", "9", "40", "41", "4", "45", "180", "m²"],
            ["Layar kain", "15", "20", "25", "5", "30", "150", "ft²"],
            ["Panel industri", "11", "60", "61", "5", "66", "330", "m²"],
            ["Ujung atap gudang", "13", "84", "85", "6", "91", "546", "ft²"],
            ["Panel fabrikasi", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "Mengapa Rumus Jari-Jari Dalam Memberi Luas yang Sama dengan Rumus Kaki?",
        "blocks": [
          { "kind": "p", "text": "Dua rumus berbeda, satu segitiga, satu luas. Mulailah dengan [[K=rs]] dan luas baku segitiga siku-siku [[K=\\frac{ab}{2}]], yang memaksa [[[\\boxed{rs=\\frac{ab}{2}}]]] Kedua ruas mengukur permukaan tertutup yang sama dengan informasi geometris yang berbeda: satu membaca lingkaran dalam dan batasnya, yang lain membaca dua kaki yang tegak lurus." },
          { "kind": "h3", "text": "Perbandingan Numerik Menggunakan Segitiga 3-4-5" },
          { "kind": "p", "text": "Metode jari-jari dalam: [[r=1]], [[s=6]], sehingga [[K=1\\times6=6]]. Metode kaki: [[K=\\frac{3\\times4}{2}=6]]. Jawabannya cocok karena jari-jari dalam dan semiperimeter mengodekan informasi sisi yang sama dengan kaki-kaki: [[r=\\frac{a+b-c}{2}]] dan [[s=\\frac{a+b+c}{2}]] dibangun dari [[a]], [[b]], dan [[c]], sehingga hasil kalinya harus merekonstruksi luas yang dideskripsikan kaki-kaki. Kecocokan di sini bukan kebetulan; ini aljabar." },
          { "kind": "h3", "text": "Kapan Metode Jari-Jari Dalam Lebih Berguna?" },
          { "kind": "p", "text": "Metode jari-jari dalam menang ketika r dan s sudah ada di tangan. Soal-soal geometri tentang lingkaran dalam menyerahkan jari-jari dalam secara langsung. Pembuktian yang membutuhkan luas dinyatakan melalui pengukuran lingkaran memakai [[K=rs]] secara alami. Soal-soal kompetisi sering menyediakan semiperimeter sebagai bagian dari susunan soalnya. Dan sebagai silang-periksa, menghitung luas dengan dua cara independen menangkap selip aritmetika yang disembunyikan satu metode. Dalam tiap kasus, intinya adalah kenyamanan masukan: mulailah dari pengukuran yang Anda miliki." },
          { "kind": "h3", "text": "Kapan Rumus Kaki Lebih Sederhana?" },
          { "kind": "p", "text": "Jika kedua kaki tegak lurus sudah diketahui, [[K=\\frac{ab}{2}]] biasanya lebih langsung: satu perkalian, satu pembagian dua, tanpa r atau s perantara yang perlu dihitung. Menurunkan jari-jari dalam dan semiperimeter dahulu lalu mengalikannya menambah dua langkah yang tidak mengubah apa pun. Metode semiperimeter tidak selalu rute termudah; ia rute terbaik ketika lingkaran dalam atau batasnya adalah titik awal yang alami, dan menjadi jalan memutar ketika kaki-kakinya sudah ada di depan mata." }
        ]
      },
      "sec-heron": {
        "h2": "Apa Perbedaan Rumus Heron dan Luas = Jari-Jari Dalam × Semiperimeter?",
        "blocks": [
          { "kind": "p", "text": "Rumus Heron menghitung luas dari tiga panjang sisi: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Ia membutuhkan semiperimeter tetapi tidak jari-jari dalam, dan berlaku untuk segitiga valid mana pun. Rumus jari-jari dalam [[[\\boxed{K=rs}]]] membutuhkan jari-jari dalam dan semiperimeter sebagai pengganti ketiga sisi. Perbedaannya soal masukan, bukan soal geometri: keduanya mengembalikan luas tertutup yang sama, karena kedua rumus terhubung melalui [[r=\\frac{K}{s}]]. Rumus Heron adalah pilihan alami ketika ketiga sisi diketahui dan tidak ada data lingkaran; rumus jari-jari dalam alami ketika lingkaran dalam adalah bagian dari gambarannya." },
          { "kind": "h3", "text": "Perbandingan yang Dikerjakan" },
          { "kind": "p", "text": "Gunakan segitiga 3-4-5. Rumus Heron: [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]] Rumus jari-jari dalam: [[K=1\\times6]], [[[\\boxed{K=6}]]] Jawabannya cocok karena ungkapan Heron menyederhanakan, melalui dekomposisi tiga segitiga yang sama, menjadi [[r\\times s]]: akar kuadrat dari [[s(s-a)(s-b)(s-c)]] sama dengan [[rs]] kapan pun r dan s berasal dari segitiga yang sama. Namun jangan tertukar kedua alat itu: rumus Heron tidak pernah meminta jari-jari dalam, dan rumus pintas jari-jari dalam [[r=\\frac{a+b-c}{2}]] hanya milik segitiga siku-siku." }
        ]
      },
      "sec-consistency": {
        "h2": "Cara Memeriksa Apakah Jari-Jari Dalam dan Semiperimeter Valid",
        "blocks": [
          { "kind": "p", "text": "Kalkulator menerima dua nilai dan mengalikannya, tetapi hasil kalinya adalah luas segitiga siku-siku hanya ketika kedua nilai menggambarkan segitiga yang sama. Pemeriksaan di bawah memisahkan masukan valid dari yang palsu." },
          { "kind": "h3", "text": "Kondisi Masukan Dasar" },
          { "kind": "p", "text": "Kedua masukan harus positif: [[r>0]] dan [[s>0]]. Panjang tidak bisa nol atau negatif, sehingga entri non-positif tidak memiliki makna geometris. Nol akan meruntuhkan segitiga menjadi garis tanpa luas; nilai negatif tidak menggambarkan apa pun. Ukur ulang atau turunkan ulang setiap masukan yang gagal dalam uji ini." },
          { "kind": "h3", "text": "Semiperimeter Harus Lebih Besar dari Jari-Jari Dalam" },
          { "kind": "p", "text": "Pada segitiga yang valid, semiperimeter jauh melampaui jari-jari dalam. Dari [[K=rs]] dan [[K=\\frac{ab}{2}]] dengan kaki positif, dan dari geometri lingkaran dalam yang pas di dalam segitiga, [[s]] selalu jelas lebih besar dari [[r]]: untuk segitiga 3-4-5, 6 melawan 1; untuk 5-12-13, 15 melawan 2. Nilai-nilai juga harus sesuai dengan himpunan tiga sisi yang valid, sehingga perbandingan ini adalah saringan cepat, bukan seluruh validasi. Jari-jari dalam yang lebih besar dari semiperimeter tidak dapat berasal dari segitiga mana pun." },
          { "kind": "h3", "text": "Pemeriksaan Konsistensi Segitiga Siku-Siku Lanjutan" },
          { "kind": "p", "text": "Untuk uji yang lebih ketat, segitiga siku-siku harus memenuhi [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]], kira-kira [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]] Idenya sederhana: dari r dan s yang diberikan, kedua kaki harus menjadi solusi positif dari persamaan kuadrat yang dibangun dari [[a+b=s+r]] dan [[ab=2rs]], dan kuadrat itu memiliki solusi real hanya ketika diskriminannya tetap non-negatif. Kondisi diskriminan menyederhanakan menjadi tepat batas ini. Periksa 3-4-5: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], valid. Ini adalah penyempurnaan opsional untuk pekerjaan yang teliti, bukan bagian wajib dari perhitungan pemula." },
          { "kind": "h3", "text": "Apa yang Terjadi Ketika Masukannya Tidak Konsisten?" },
          { "kind": "p", "text": "Mengalikan dua bilangan positif selalu menghasilkan hasil numerik, tetapi itu tidak membuktikan keduanya mewakili jari-jari dalam dan semiperimeter dari segitiga siku-siku yang sama. Sebuah r dari satu segitiga dipasangkan dengan s dari segitiga lain menghasilkan hasil kali tanpa makna geometris, betapa pun rapi aritmetikanya. Kecuali implementasi kalkulatornya telah teruji memiliki perilaku validasi, jangan berasumsi ia memeriksa hubungannya: jalankan pemeriksaan di atas sendiri, hitung ulang r dan s dari sisi-sisinya ketika sisi-sisinya diketahui, dan silang-periksa luasnya dengan rumus kaki." }
        ]
      },
      "sec-units": {
        "h2": "Bagaimana Satuan Ukuran Mempengaruhi Perhitungan Jari-Jari Dalam dan Semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Jari-jari dalam dan semiperimeter keduanya panjang, sehingga keduanya mengikuti aturan satuan yang sama seperti pengukuran panjang lainnya. Satuan persegi dalam jawabannya berasal dari mengalikan dua satuan panjang, yang membuat satuan yang konsisten menjadi seluruh permainan." },
          { "kind": "h3", "text": "Mengapa Kedua Masukan Harus Memakai Satuan yang Serasi?" },
          { "kind": "p", "text": "Hasil kali [[K=r\\times s]] mengalikan panjang dengan panjang. Jika r dalam sentimeter dan s dalam meter, hasil kalinya mencampur kedua skala dan angkanya tidak memiliki makna yang bersih. Ubah dahulu agar kedua masukan berbagi satu satuan: meter, sentimeter, milimeter, kaki, inci, atau yard, tetapi yang sama untuk keduanya. Kalkulator memiliki pemilih satuan untuk alasan ini: atur sebelum memasukkan angka-angkanya." },
          { "kind": "h3", "text": "Contoh Konversi Satuan yang Dikerjakan" },
          { "kind": "p", "text": "Diketahui [[r=10\\text{ cm}]] dan [[s=1\\text{ m}]]. Ubah semiperimeternya: [[1\\text{ m}=100\\text{ cm}]]. Maka [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]] Sebagai alternatif, ubah jari-jari dalamnya: [[10\\text{ cm}=0.1\\text{ m}]], maka [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]] Kedua jawaban menggambarkan luas yang sama, karena [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. Ubah dahulu, kalikan kemudian, dan jalur satuan mana pun mendarat di tempat yang benar." },
          { "kind": "h3", "text": "Mengapa Hasilnya Dinyatakan dalam Satuan Persegi?" },
          { "kind": "p", "text": "Luas menghitung persegi-persegi satuan yang menutupi permukaan: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. Satuannya selalu satuan panjang yang dikuadratkan, karena hasil kali dua panjang adalah hitungan persegi. Melaporkan luas sebagai panjang polos, seperti 1000 cm, adalah kesalahan kategori: 1000 cm adalah panjang, sedangkan 1000 cm² adalah permukaan." },
          { "kind": "h3", "text": "Bekerja dengan Nilai Desimal" },
          { "kind": "p", "text": "Rumus menangani desimal tanpa modifikasi. Diketahui [[r=2.5]] dan [[s=8.4]]: [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]] Bilangan bulat, desimal, dan pengukuran bengkel yang halus semuanya mengalir melalui perkalian yang sama. Pertahankan ketelitian penuh selama perhitungan dan bulatkan hanya jawaban akhirnya sesuai ketelitian yang dibenarkan pengukurannya." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum Saat Menghitung Luas Segitiga Siku-Siku dari Semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Hampir setiap jawaban salah dalam topik ini berakar pada label yang tertukar, bukan aritmetika yang buruk. Keenam belas kesalahan di bawah adalah yang muncul berulang kali, masing-masing dengan penyebab dan perbaikannya." },
          { "kind": "h3", "text": "1. Menukar Semiperimeter dengan Keliling Penuh" },
          { "kind": "p", "text": "Memasukkan [[P=12]] di tempat [[s=6]] menggandakan jawaban: [[1\\times12=12]] alih-alih 6. Kesalahan terjadi karena bahasa sehari-hari menyebut keliling sementara rumusnya menginginkan setengahnya. Perbaikan: selalu bagi dua jumlah batasnya sebelum memasukkannya, dan periksa bahwa s yang dimasukkan lebih kecil dari kelilingnya." },
          { "kind": "h3", "text": "2. Menggunakan Jari-Jari Lingkaran Luar, Bukan Jari-Jari Dalam" },
          { "kind": "p", "text": "Jari-jari lingkaran luar segitiga 3-4-5 adalah [[R=\\frac{5}{2}=2.5]]; memakainya menghasilkan [[2.5\\times6=15]], hampir tiga kali luas sebenarnya. Kesalahan berasal dari kedua lingkaran yang berbagi kata radius. Perbaikan: pastikan radiusnya milik lingkaran di dalam segitiga yang menyentuh ketiga sisinya, bukan lingkaran yang melalui titik-titik sudut." },
          { "kind": "h3", "text": "3. Lupa Menghitung Semiperimeter dengan Benar" },
          { "kind": "p", "text": "Menjumlahkan hanya dua sisi, atau membagi tiap sisi dengan dua sebelum menjumlah, menghasilkan s yang salah. Untuk 3-4-5, menjumlah 3 + 4 dan membagi menghasilkan 3.5, dan [[1\\times3.5=3.5]] tidak bermakna. Perbaikan: jumlahkan ketiga sisi dahulu, lalu bagi sekali: [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. Membagi Hasil Akhir dengan Dua Lagi" },
          { "kind": "p", "text": "Setelah [[K=1\\times6=6]], pembagian dua tambahan menghasilkan 3. Kebiasaan ini berasal dari rumus kaki, di mana pembagiannya eksplisit. Perbaikan: ingat bahwa pembagian duanya sudah terserap ke dalam semiperimeter; [[K=r\\times s]] sudah lengkap." },
          { "kind": "h3", "text": "5. Menggunakan Rumus Jari-Jari Dalam Segitiga Siku-Siku yang Salah" },
          { "kind": "p", "text": "Menebak [[r=\\frac{c-a-b}{2}]] atau [[r=\\frac{a+b}{2}]] menghasilkan radius yang salah. Untuk 3-4-5, [[\\frac{5-3-4}{2}=-1]] bahkan bukan sebuah panjang. Perbaikan: gunakan [[r=\\frac{a+b-c}{2}]] dengan a dan b sebagai kaki dan c sebagai hipotenusa, tepat dalam susunan itu." },
          { "kind": "h3", "text": "6. Menerapkan Rumus Pintas Jari-Jari Dalam Segitiga Siku-Siku pada Segitiga Biasa" },
          { "kind": "p", "text": "Rumus pintas bersandar pada sudut siku-siku, sehingga pada segitiga umum ia menghitung angka tanpa makna geometris. Perbaikan: untuk segitiga non-siku-siku temukan jari-jari dalam dari [[r=\\frac{K}{s}]] atau rumus yang sesuai dengan pengukuran yang diketahui, tidak pernah dari [[r=\\frac{a+b-c}{2}]]." },
          { "kind": "h3", "text": "7. Memasukkan Jari-Jari Dalam dan Semiperimeter dari Segitiga yang Berbeda" },
          { "kind": "p", "text": "Mengambil r = 1 dari segitiga 3-4-5 dan s = 15 dari segitiga 5-12-13 menghasilkan 15, hasil kali yang tidak menggambarkan segitiga nyata mana pun. Kesalahan terjadi ketika nilai-nilai disalin dari contoh yang dikerjakan berbeda atau gambar yang berbeda. Perbaikan: turunkan atau ukur kedua masukan dari segitiga yang sama sebelum mengalikan." },
          { "kind": "h3", "text": "8. Mencampur Sentimeter dan Meter" },
          { "kind": "p", "text": "Mengalikan r = 10 cm dengan s = 1 m tanpa mengubah menghasilkan 10 tanpa makna yang bersih. Perbaikan: ubah ke satu satuan dahulu: [[1\\text{ m}=100\\text{ cm}]], lalu [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. Melaporkan Hasil dalam Satuan Linear" },
          { "kind": "p", "text": "Luas 6 m² bukanlah 6 m. Kesalahan biasanya berasal dari menyalin satuan masukan tanpa mengkuadratkannya. Perbaikan: tulis satuan kuadratnya bersama angka setiap kali: m², cm², ft²." },
          { "kind": "h3", "text": "10. Memasukkan Pengukuran Nol atau Negatif" },
          { "kind": "p", "text": "Panjang itu positif. Nol meruntuhkan segitiga menjadi garis tanpa luas, dan panjang negatif tidak memiliki makna geometris di sini. Perbaikan: ukur ulang atau turunkan ulang masukannya; tolak nilai non-positif sebelum menghitung." },
          { "kind": "h3", "text": "11. Menukar Pusat Lingkaran Dalam dengan Pusat Lingkaran Luar" },
          { "kind": "p", "text": "Pusat lingkaran dalam adalah titik pertemuan garis-garis bagi sudut; pusat lingkaran luar adalah titik pertemuan garis-garis sumbu sisi. Untuk segitiga siku-siku, pusat lingkaran luar berada di titik tengah hipotenusa, titik yang sama sekali berbeda. Menukar keduanya mengarah pada pengukuran radius yang salah. Perbaikan: pusat lingkaran dalam [[I]] berada di dalam segitiga pada jarak yang sama dari sisi-sisinya, bukan dari titik-titik sudutnya." },
          { "kind": "h3", "text": "12. Menganggap Lingkaran Dalam Hanya Menyentuh Dua Sisi" },
          { "kind": "p", "text": "Lingkaran yang terjepit di sudut menyentuh dua sisi, tetapi itu bukan lingkaran dalam. Lingkaran dalam menyentuh ketiganya, dan pembuktian luas membutuhkan ketiga titik singgung. Perbaikan: verifikasi tiga titik kontak, satu per sisi, sebelum memperlakukan sebuah radius sebagai jari-jari dalam." },
          { "kind": "h3", "text": "13. Lupa Bahwa Radius Bertemu Tiap Sisi Singgung Secara Tegak Lurus" },
          { "kind": "p", "text": "Argumen tinggi bersama dalam pembuktian bergantung pada [[r\\perp a]], [[r\\perp b]], [[r\\perp c]]. Segmen miring dari pusat lingkaran dalam ke sebuah sisi lebih panjang dari r dan tidak dapat berfungsi sebagai tinggi. Perbaikan: ukur jari-jari dalam sepanjang garis tegak lurus ke sisi, tidak pernah sepanjang diagonal." },
          { "kind": "h3", "text": "14. Menukar Jari-Jari Dalam dengan Diameter" },
          { "kind": "p", "text": "Memasukkan lebar penuh lingkaran dalam sebagai r menggandakan radius dan menggandakan luas. Untuk segitiga 3-4-5, memasukkan 2 alih-alih 1 menghasilkan [[2\\times6=12]]. Perbaikan: jari-jari dalam membentang dari pusat ke satu sisi, setengah lebar penuh lingkaran." },
          { "kind": "h3", "text": "15. Menggunakan Rumus Heron dengan Salah" },
          { "kind": "p", "text": "Selip umum termasuk lupa akar kuadrat, menulis [[s(s+a)(s+b)(s+c)]] dengan tanda plus, atau memasukkan keliling penuh ke dalam rumus. Untuk 3-4-5, menghilangkan akarnya menghasilkan 36 alih-alih 6. Perbaikan: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], dengan semiperimeter, tanda minus, dan akar semuanya pada tempatnya." },
          { "kind": "h3", "text": "16. Menganggap Hasil Numerik Otomatis Membuktikan Masuknya Konsisten Secara Geometris" },
          { "kind": "p", "text": "Dua bilangan positif apa pun dapat dikalikan, sehingga kalkulator selalu mengembalikan sesuatu. Sesuatu itu adalah luas segitiga siku-siku hanya ketika r dan s benar-benar milik satu segitiga. Perbaikan: jalankan pemeriksaan konsistensi, hitung ulang r dan s dari sisi-sisinya bila memungkinkan, dan silang-periksa dengan rumus kaki sebelum mempercayai angkanya." },
          { "kind": "h3", "text": "Salah Versus Benar: Contoh Konkret" },
          { "kind": "p", "text": "Gunakan [[r=1]], [[s=6]]. Benar: [[K=1\\times6=6]]. Salah karena membagi dua lagi: [[K=\\frac{1\\times6}{2}=3]], keliru karena pembagian duanya sudah ada di dalam semiperimeter. Salah karena memasukkan keliling penuh 12 alih-alih semiperimeter 6: [[K=1\\times12=12]], dua kali luas sebenarnya. Aritmetikanya tampak percaya diri dalam ketiga kasus; hanya geometri yang membedakannya." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Apakah Luas Segitiga Siku-Siku Anda Benar",
        "blocks": [
          { "kind": "p", "text": "Enam pemeriksaan independen, semuanya didemonstrasikan pada segitiga 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]]). Kecocokan antar rute yang berbeda adalah bukti terkuat bahwa jawaban benar, dalam PR maupun pengukuran praktis." },
          { "kind": "h3", "text": "Metode 1: Periksa Rumus Utama" },
          { "kind": "p", "text": "Jalankan [[K=r\\times s]] dari awal: [[K=1\\times6=6]]. Putaran kedua dengan angka-angka yang dimasukkan ulang menangkap salah ketik dan digit yang salah tombol." },
          { "kind": "h3", "text": "Metode 2: Hitung Semiperimeter dari Tiga Sisi" },
          { "kind": "p", "text": "Hitung ulang [[s=\\frac{a+b+c}{2}]] dari sisi-sisinya: [[s=\\frac{3+4+5}{2}=6]]. Jika s yang dihitung ulang berbeda dari yang dimasukkan, masukannya salah dan hasil kalinya harus dikerjakan ulang." },
          { "kind": "h3", "text": "Metode 3: Hitung Jari-Jari Dalam dari Segitiga Siku-Siku" },
          { "kind": "p", "text": "Hitung ulang [[r=\\frac{a+b-c}{2}]]: [[r=\\frac{3+4-5}{2}=1]]. Ketidakcocokan terhadap r yang dimasukkan berarti radiusnya berasal dari segitiga lain atau rumus yang salah diterapkan." },
          { "kind": "h3", "text": "Metode 4: Verifikasi Menggunakan Rumus Kaki Baku" },
          { "kind": "p", "text": "Hitung [[K=\\frac{ab}{2}]]: [[K=\\frac{3\\times4}{2}=6]]. Rute ini memakai masukan yang sama sekali berbeda, sehingga kecocokan dengan [[rs]] mengonfirmasi masukan maupun aritmetikanya." },
          { "kind": "h3", "text": "Metode 5: Verifikasi Menggunakan Rumus Heron" },
          { "kind": "p", "text": "Hitung [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Rumus Heron melatih sisi-sisi dan semiperimeter bersama-sama, menangkap kesalahan label sisi yang mungkin lolos dari pemeriksaan lain." },
          { "kind": "h3", "text": "Metode 6: Periksa Teorema Pythagoras" },
          { "kind": "p", "text": "Konfirmasi [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Ini memeriksa identifikasi sisi di balik setiap perhitungan lain; hipotenusa yang salah berarti ada sisi yang salah label dan r, s, serta K semuanya perlu dibangun ulang." }
        ]
      },
      "sec-applications": {
        "h2": "Penerapan Praktis Rumus Jari-Jari Dalam dan Semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Pola dua masukan yang sama muncul di mana pun panel atau bagian segitiga perlu diukur dan data lingkaran dalam adalah titik awal yang nyaman. Tukang kaca mengukur jendela dari panjang tepinya; fabrikator membaca kaki-kaki blanko braket; surveyor mereduksi sudut lot menjadi tiga sisi lurus. Dari sisi-sisi itu muncul jari-jari dalam dan semiperimeter, dan satu perkalian menamai luasnya. Empat panel di bawah menunjukkan pola itu pada skala yang berbeda: jendela kaca (6 m²), penyangga atap (60 ft²), bagian kebun (84 m²), dan pelat baja (30 cm²), masing-masing dilabeli dengan jari-jari dalamnya, semiperimeternya, dan luas yang dihasilkan." }
        ],
        "imgAlt": "Empat panel: jendela kaca 6 m2, penyangga atap 60 ft2, bagian kebun 84 m2, pelat baja 30 cm2",
        "figcaption": "Empat kegunaan nyata: jendela kaca, penyangga atap, bagian kebun, dan pelat baja."
      },
      "sec-related": {
        "h2": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "blocks": [
          { "kind": "p", "text": "Pengukuran yang berbeda membutuhkan kalkulator yang berbeda." }
        ]
      },
      "sec-faq": {
        "h2": "Pertanyaan yang Sering Diajukan",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Dua Pengukuran, Satu Hasil Kali",
        "blocks": [
          { "kind": "p", "text": "Jari-jari dalam dan semiperimeter sudah cukup. Kalikan keduanya, dan permukaan yang tertutup pun ternamai. Pembuktian tiga segitiga menunjukkan mengapa tidak ada pembagian setelah perkalian, argumen segmen garis singgung menunjukkan mengapa segitiga siku-siku mendapatkan rumus pintas jari-jari dalamnya, dan rumus kaki beserta rumus Heron siaga untuk memeriksa setiap jawaban." },
          { "kind": "p", "text": "Kebiasaan kerjanya sederhana: pastikan kedua masukan menggambarkan segitiga yang sama, samakan satuannya, pertahankan desimal tanpa pembulatan hingga akhir, dan verifikasi melalui metode kedua. Dengan kebiasaan-kebiasaan itu, [[K=r\\times s]] adalah salah satu perhitungan luas paling andal dalam geometri." }
        ]
      }
    }
  },
  "ar": {
    "faqs": [
      {
        "question": "ما صيغة مساحة المثلث القائم الزاوية باستخدام نصف القطر الداخلي ونصف المحيط؟",
        "answer": "K = r × s، حيث r هو نصف القطر الداخلي (نصف قطر الدائرة الداخلية) وs هو نصف المحيط (نصف محيط المثلث). اضرب العددين ويكون الناتج هو المساحة، دون أي خطوة قسمة. عند r = 1 وs = 6 تكون K = 1 × 6 = 6 وحدات مربعة. يجب أن يصف كلا المدخلين المثلث نفسه."
      },
      {
        "question": "ما هو نصف القطر الداخلي؟",
        "answer": "نصف القطر الداخلي هو نصف قطر الدائرة الداخلية، وهي الدائرة التي تتسع تماما داخل المثلث وتمس أضلاعه الثلاثة. وهو يساوي المسافة العمودية من مركز الدائرة الداخلية، حيث تلتقي منصفات الزوايا الثلاث، إلى أي ضلع. وفي المثلث القائم الزاوية ذي الضلعين القائمين a وb والوتر c، توجد صيغة مختصرة: r = (a + b - c) / 2."
      },
      {
        "question": "ما الفرق بين نصف القطر الداخلي ونصف قطر الدائرة المحيطة؟",
        "answer": "نصف القطر الداخلي يخص الدائرة الموجودة داخل المثلث والتي تمس أضلاعه الثلاثة، أما نصف قطر الدائرة المحيطة فيخص الدائرة المارة برؤوس المثلث الثلاثة. إنهما يقيسان دائرتين مختلفتين، لذا تختلف قيمتاهما. وفي المثلث القائم الزاوية يكون نصف قطر الدائرة المحيطة R = c/2، أي نصف الوتر تماما، بينما نصف القطر الداخلي هو (a + b - c)/2."
      },
      {
        "question": "كيف أحسب نصف محيط المثلث القائم الزاوية؟",
        "answer": "اجمع الأضلاع الثلاثة واقسم على اثنين: s = (a + b + c) / 2. وفي المثلث 3-4-5 يكون s = (3 + 4 + 5) / 2 = 6. نصف المحيط هو نصف المحيط الكامل، لذا فإن إدخال المحيط الكامل بالخطأ يضاعف المساحة عند استخدام K = r × s."
      },
      {
        "question": "كيف أجد نصف القطر الداخلي باستخدام أطوال الأضلاع الثلاثة؟",
        "answer": "في المثلث القائم الزاوية استخدم الصيغة المختصرة r = (a + b - c) / 2، حيث a وb هما الضلعان القائمان وc هو الوتر. ومع الأضلاع 5 و12 و13: r = (5 + 12 - 13) / 2 = 2. وهذه الصيغة المختصرة تنطبق على المثلثات القائمة فقط؛ أما المثلثات الأخرى فتحتاج العلاقة العامة r = K / s."
      },
      {
        "question": "لماذا تساوي المساحة نصف القطر الداخلي مضروبا في نصف المحيط؟",
        "answer": "إن وصل مركز الدائرة الداخلية بالرؤوس الثلاثة يقسم المثلث إلى ثلاثة مثلثات أصغر، قاعدة كل منها تساوي أحد الأضلاع وارتفاعها يساوي r. ومساحاتها هي ar/2 وbr/2 وcr/2. وبجمعها نحصل على r(a + b + c)/2، وبما أن s = (a + b + c)/2 فإن المجموع الكلي يساوي r × s."
      },
      {
        "question": "هل تنطبق الصيغة على جميع المثلثات؟",
        "answer": "نعم. فكل مثلث غير منحط له دائرة داخلية ومركز دائرة داخلية، لذا يصح تقسيم المثلثات الثلاثة للمثلثات القائمة والحادة والمنفرجة على حد سواء. والمثلث القائم الزاوية أسهل ببساطة لأن نصف قطره الداخلي يمكن إيجاده من الأضلاع بالصيغة r = (a + b - c) / 2. أما نصف القطر الداخلي العام فيظل يأتي من r = K / s."
      },
      {
        "question": "هل نصف المحيط هو نفسه المحيط؟",
        "answer": "لا. نصف المحيط يساوي نصف المحيط تماما: s = P/2. وفي المثلث 3-4-5 يكون المحيط 12 ونصف المحيط 6. وإدخال المحيط الكامل في K = r × s يعطي 1 × 12 = 12، أي ضعف المساحة الصحيحة 6. اقسم المحيط على اثنين قبل الضرب."
      },
      {
        "question": "هل أحتاج إلى قسمة الناتج النهائي على اثنين؟",
        "answer": "لا. فالصيغة K = r × s تأخذ كل قسمة في الحسبان سلفا: أنصاف المثلثات الثلاثة الصغيرة ممتصة في نصف المحيط. والقسمة مرة أخرى بعد الضرب هي الخطأ الأكثر شيوعا. فمع r = 1 وs = 6 تكون المساحة الصحيحة 6، بينما (1 × 6) / 2 = 3 خطأ."
      },
      {
        "question": "ما العلاقة بين صيغة هيرون وصيغة نصف القطر الداخلي؟",
        "answer": "كلتاهما تحسبان المساحة نفسها لكن بمدخلات مختلفة. فصيغة هيرون K = sqrt(s(s - a)(s - b)(s - c)) تحتاج الأضلاع الثلاثة، بينما K = r × s تحتاج نصف القطر الداخلي ونصف المحيط بدلا منها. وفي المثلث 3-4-5 تعطي كلتاهما 6، مما يجعل إحدى الصيغتين تحققا قويا للأخرى."
      },
      {
        "question": "هل يمكنني استخدام قيم عشرية لنصف القطر الداخلي ونصف المحيط؟",
        "answer": "نعم. فالصيغة تتعامل مع الكسور العشرية تماما كما تتعامل مع الأعداد الصحيحة. فمع r = 2.5 وs = 8.4 تكون K = 2.5 × 8.4 = 21 وحدة مربعة. حافظ على الدقة الكاملة أثناء الضرب وقرب الناتج النهائي فقط بما يناسب دقة القياسات."
      },
      {
        "question": "كيف أتحقق من صحة نصف القطر الداخلي ونصف المحيط؟",
        "answer": "تحقق من أن كليهما موجب وأن s أكبر بوضوح من r. وإذا كانت الأضلاع معروفة فأعد حساب s = (a + b + c)/2 وr = (a + b - c)/2، ثم تحقق من المساحة متقاطعا مع K = ab/2 وصيغة هيرون. فالتوافق بين الطرق دليل قوي. أما القيم المأخوذة من مثلثات مختلفة فتعطي عددا ليس هو المساحة الحقيقية."
      }
    ],
    "relatedHeading": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
    "relatedItems": [
      "حاسبة مساحة المثلث القائم الزاوية من الضلعين القائمين",
      "حاسبة نصف محيط المثلث القائم الزاوية",
      "حاسبة مساحة المثلث القائم الزاوية من الارتفاع",
      "حاسبة مساحة المثلث القائم الزاوية من الزاوية",
      "حاسبة محيط المثلث القائم الزاوية",
      "حاسبة مساحة المثلث القائم الزاوية"
    ],
    "relatedIntro": "القياسات المختلفة تتطلب حاسبات مختلفة.",
    "faqHeading": "الأسئلة الشائعة",
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "sec-intro": "كيفية حساب مساحة المثلث القائم الزاوية باستخدام نصف قطره الداخلي ونصف محيطه",
      "sec-right-triangle": "ما هو المثلث القائم الزاوية؟",
      "sec-incircle": "فهم الدائرة الداخلية للمثلث القائم الزاوية",
      "sec-semiperimeter": "فهم نصف محيط المثلث",
      "sec-formula": "لماذا تساوي مساحة المثلث نصف القطر الداخلي مضروبا في نصف المحيط؟",
      "sec-inradius": "كيفية حساب نصف القطر الداخلي للمثلث القائم الزاوية",
      "sec-howto": "كيفية استخدام حاسبة مساحة المثلث القائم الزاوية من نصف المحيط",
      "sec-examples": "أمثلة خطوة بخطوة لمساحة المثلث القائم الزاوية باستخدام نصف القطر الداخلي ونصف المحيط",
      "sec-practical": "تطبيقات واقعية لمساحة المثلث القائم الزاوية من نصف القطر الداخلي ونصف المحيط",
      "sec-legs-comparison": "لماذا تعطي صيغة نصف القطر الداخلي المساحة نفسها التي تعطيها صيغة الضلعين القائمين؟",
      "sec-heron": "ما الفرق بين صيغة هيرون والمساحة = نصف القطر الداخلي × نصف المحيط؟",
      "sec-consistency": "كيفية التحقق من صلاحية نصف القطر الداخلي ونصف المحيط",
      "sec-units": "كيف تؤثر وحدات القياس في حسابات نصف القطر الداخلي ونصف المحيط",
      "sec-mistakes": "أخطاء شائعة عند حساب مساحة المثلث القائم الزاوية من نصف المحيط",
      "sec-verify": "كيفية التحقق من صحة مساحة المثلث القائم الزاوية",
      "sec-applications": "تطبيقات عملية لصيغة نصف القطر الداخلي ونصف المحيط",
      "sec-related": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
      "sec-faq": "الأسئلة الشائعة",
      "sec-conclusion": "قياسان وضرب واحد"
    },
    "sections": {
      "sec-intro": {
        "h2": "كيفية حساب مساحة المثلث القائم الزاوية باستخدام نصف قطره الداخلي ونصف محيطه",
        "blocks": [
          { "kind": "p", "text": "خذ [[r=1]] و[[s=6]]. طبق [[K=r\\times s]]: [[K=1\\times6]]، [[[\\boxed{K=6\\text{ square units}}]]] والنتيجة تسمي إجمالي المساحة المسطحة المحصورة بأضلاع المثلث الثلاثة: ست وحدات مربعة. وهذا بالضبط ما ترجعه حاسبة مساحة المثلث القائم الزاوية من نصف المحيط لهذين المدخلين." },
          { "kind": "p", "text": "نصف القطر الداخلي هو نصف قطر الدائرة المحشورة داخل المثلث والتي تمس أضلاعه الثلاثة. ونصف المحيط هو نصف طول الحدود: مجموع الأضلاع الثلاثة مقسوما على اثنين. ويكفي قياسان لأن نصف القطر الداخلي يعمل ارتفاعا عموديا مشتركا لثلاثة مثلثات أصغر مبنية من مركز الدائرة الداخلية، بينما يجمع نصف المحيط قواعدها في عامل واحد." },
          { "kind": "p", "text": "والمنطق يصح لكل مثلث، لأن لكل مثلث دائرة داخلية. ويضيف المثلث القائم الزاوية ميزة: فنصف قطره الداخلي يتبع من الأضلاع الثلاثة بصيغة قصيرة، لذا كثيرا ما يكون r وs معروفين سلفا. وتتألق هذه الطريقة في المسائل التي تعطى فيها الدائرة الداخلية أو نصف المحيط، إذ لا حاجة لقياس ضلع قائم أو زاوية." }
        ]
      },
      "sec-right-triangle": {
        "h2": "ما هو المثلث القائم الزاوية؟",
        "blocks": [
          { "kind": "p", "text": "قبل أن تدخل الدائرة الداخلية إلى الصورة، يجب تسمية المثلث نفسه دون خطأ. وتبقى الرموز التالية ثابتة طوال الدليل، وتستخدم الحاسبة الأسماء نفسها." },
          { "kind": "h3", "text": "تعريف المثلث القائم الزاوية" },
          { "kind": "p", "text": "المثلث القائم الزاوية هو مضلع ثلاثي الأضلاع يحتوي زاوية داخلية واحدة قياسها 90 درجة بالضبط. وله ثلاثة رؤوس وثلاثة أضلاع وزاويتان حادتان وزاوية قائمة واحدة توسم عادة بمربع صغير. والضلعان اللذان يشكلان الزاوية القائمة هما الضلعان القائمان، والضلع المقابل لها هو الوتر. وبما أن [[C=90^\\circ]] فإنه يترتب على ذلك [[[\\boxed{A+B=90^\\circ}]]]: فالزاويتان الحادتان متتامتان، ومعرفة إحداهما تحدد الأخرى." },
          { "kind": "h3", "text": "فهم الضلعين القائمين" },
          { "kind": "p", "text": "الضلع [[a]] يقابل الزاوية [[A]]، والضلع [[b]] يقابل الزاوية [[B]]. ويلتقي الضلعان القائمان عند رأس الزاوية القائمة وهما متعامدان. ويسهمان في المساحة مباشرة، لأن كل ضلع قائم يمكن أن يكون قاعدة بينما يكون الآخر الارتفاع العمودي. وفي هذه الصفحة يغذيان أيضا نصف القطر الداخلي، لأن الصيغة المختصرة [[r=\\frac{a+b-c}{2}]] مبنية من الضلعين القائمين والوتر." },
          { "kind": "h3", "text": "فهم الوتر" },
          { "kind": "p", "text": "الوتر هو الضلع المقابل للزاوية 90 درجة، وهو دائما أطول أضلاع المثلث. وهو لا يشكل الزاوية القائمة أبدا بل يمتد عبرها. وفي صيغة مساحة الضلعين القائمين لا دور له، لكنه هنا مهم: فالوتر يدخل في نصف المحيط [[s=\\frac{a+b+c}{2}]] وفي الصيغة المختصرة لنصف القطر الداخلي [[r=\\frac{a+b-c}{2}]]. وإذا عرف الضلعان القائمان استرجعته نظرية فيثاغورس عبر [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "ما الذي يميز هذا المثلث عن غيره من المثلثات؟" },
          { "kind": "p", "text": "الزاوية القائمة 90 درجة هي كل الحكاية. فهي تجعل الضلعين القائمين متعامدين دون أي إنشاء، مما يبسط صيغة المساحة القياسية، وتجعل قطعتي المماس للدائرة الداخلية قرب الزاوية القائمة مساويتين لنصف القطر الداخلي نفسه، مما يبسط صيغة نصف القطر الداخلي. والمثلثات الأخرى ما تزال تحقق [[K=r\\times s]]، لكن إيجاد نصف قطرها الداخلي يتطلب عادة معرفة المساحة أولا. والمثلث القائم الزاوية هو الحالة الوحيدة التي يخرج فيها نصف القطر الداخلي مباشرة من أطوال الأضلاع." }
        ]
      },
      "sec-incircle": {
        "h2": "فهم الدائرة الداخلية للمثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "لا يصبح نصف القطر الداخلي مفهوما إلا بعد تصور الدائرة الداخلية بوضوح. ويبني هذا القسم الفكرة من الدائرة نفسها وصولا إلى نقاط التماس حيث يلتقي نصف القطر بكل ضلع." },
          { "kind": "h3", "text": "تعريف الدائرة الداخلية" },
          { "kind": "p", "text": "الدائرة الداخلية هي دائرة موضوعة داخل المثلث بحيث تمس أضلاعه الثلاثة. وهي تقع في الداخل، مماسة لكل ضلع عند نقطة واحدة بالضبط، ولا يمكنها أن تعبر ضلعا لأن التماس يثبتها في مكانها. وكل مثلث غير منحط يملك دائرة داخلية واحدة بالضبط: صغر دائرة داخل مناطق الزوايا وستجد حجما واحدا أكبر يقبل الأضلاع الثلاثة. ونقاط التماس الثلاث، واحدة لكل ضلع، هي المواضع التي سيقاس عندها نصف القطر الداخلي لاحقا." },
          { "kind": "h3", "text": "ما هو مركز الدائرة الداخلية؟" },
          { "kind": "p", "text": "مركز الدائرة الداخلية، الموسوم [[I]]، هو النقطة التي تلتقي عندها منصفات الزوايا الداخلية الثلاثة. وكل منصف يقسم زاوية الرأس إلى جزأين متساويين، وأي نقطة على المنصف تقع على مسافة عمودية متساوية من الضلعين المشكلين لتلك الزاوية. ولذلك فإن تقاطع المنصفات الثلاثة يقع على مسافة متساوية من الأضلاع الثلاثة، وهذا بالضبط ما يجعله صالحا مركزا لدائرة تمس كل ضلع. ويقع مركز الدائرة الداخلية داخل كل مثلث صالح، ولا يقع أبدا على حافة أو خارجا." },
          { "kind": "h3", "text": "ما هو نصف القطر الداخلي؟" },
          { "kind": "p", "text": "نصف القطر الداخلي هو المسافة العمودية من مركز الدائرة الداخلية إلى أي ضلع من أضلاع المثلث: [[[\\boxed{r=\\text{distance from the incenter to a side}}]]] وبما أن مركز الدائرة الداخلية على مسافة متساوية من الأضلاع الثلاثة، فالقيمة واحدة أيا كان الضلع المختار. وهذا العدد الواحد هو نصف قطر الدائرة الداخلية، وطول كل من القطع الثلاث القصيرة المرسومة من المركز إلى نقاط التماس، والارتفاع المشترك الذي يجعل برهان المساحة في قسم لاحق يعمل." },
          { "kind": "h3", "text": "فهم علاقة المماس" },
          { "kind": "p", "text": "نصف القطر المرسوم إلى نقطة التماس عمودي على الضلع الذي يمسه. وبتطبيق ذلك على نقاط التماس الثلاث نحصل على [[r\\perp a]] و[[r\\perp b]] و[[r\\perp c]]. وكل عبارة تصف زاوية مختلفة من الشكل: فنصف القطر المنتهي على الضلع a يقف عموديا على الضلع a، وهكذا مع الضلع b والوتر. وهذا التعامد ليس زخرفة، بل هو الخاصية التي تتيح لكل نصف قطر أن يعمل ارتفاعا لأحد المثلثات الثلاثة الأصغر في برهان المساحة." },
          { "kind": "h3", "text": "الفرق بين الدائرة الداخلية والدائرة المحيطة" },
          { "kind": "p", "text": "الدائرة الداخلية تعيش داخل المثلث وتمس أضلاعه الثلاثة، أما الدائرة المحيطة فتمر بالرؤوس الثلاثة وتحيط بالمثلث. ونصفا قطريهما قياسان مختلفان ولا يجوز الخلط بينهما أبدا. وللمثلث القائم الزاوية قاعدة بسيطة خاصة بنصف قطر الدائرة المحيطة، وهي [[[\\boxed{R=\\frac{c}{2}}]]]، لأن الوتر قطر في الدائرة المحيطة: فمنتصف الوتر هو مركز الدائرة المحيطة. ونصف القطر الداخلي [[r]] هو الأصغر منهما ويخص الدائرة الموجودة في الداخل." }
        ],
        "imgAlt": "المثلث القائم الزاوية ABC مع الدائرة الداخلية: مركز الدائرة الداخلية I، ونقاط التماس الثلاث، وأنصاف أقطار عمودية طولها r",
        "figcaption": "المثلث ABC مع دائرته الداخلية: ثلاثة أنصاف أقطار عمودية، طول كل منها r."
      },
      "sec-semiperimeter": {
        "h2": "فهم نصف محيط المثلث",
        "blocks": [
          { "kind": "p", "text": "يبدو نصف المحيط مجرد نصف قياس، لكنه يحمل معظم حساب المساحة. وفهم سبب لجوء الهندسة الدائم إلى نصف المحيط يمهد الطريق للبرهان." },
          { "kind": "h3", "text": "تعريف نصف المحيط" },
          { "kind": "p", "text": "نصف المحيط يساوي نصف المحيط الكلي بالضبط: [[[\\boxed{s=\\frac{P}{2}}]]] وفي المثلث يصبح [[[\\boxed{s=\\frac{a+b+c}{2}}]]] والمحيط [[P]] هو طول الحدود الكامل، أي مجموع الأضلاع الثلاثة، ونصف المحيط هو ذلك المجموع مقسوما على اثنين. ويرتبط الاثنان بالعلاقة [[P=2s]]، والخلط بينهما هو أغلى خطأ إدخال في هذه الصفحة." },
          { "kind": "h3", "text": "كيفية حساب نصف المحيط" },
          { "kind": "p", "text": "خذ [[a=3]] و[[b=4]] و[[c=5]]. اجمع الأضلاع الثلاثة أولا ثم اقسم مرة واحدة: [[s=\\frac{3+4+5}{2}]]، [[[\\boxed{s=6}]]] ويجب أن يسبق الجمع القسمة لأن نصف المحيط ينصف الحدود كلها، لا كل ضلع على حدة. والجمع بعد القسمة يعطي هنا العدد نفسه، لكن الصيغة [[s=\\frac{a+b+c}{2}]] تنص على الترتيب الصحيح: اجمع الحدود ثم انصفها." },
          { "kind": "h3", "text": "لماذا يستخدم نصف المحيط بدلا من المحيط الكامل؟" },
          { "kind": "p", "text": "صيغ مساحة المثلث تنتج الأنصاف باستمرار: فكل مثلث صغير في البرهان يسهم بقسمة على اثنين، ونصف المحيط يمتصها كلها دفعة واحدة. وهو المتغير الطبيعي لصيغة هيرون، ولعلاقة نصف القطر الداخلي [[r=\\frac{K}{s}]]، وللبرهان التالي. وإدخال المحيط الكامل بدلا منه يضاعف النتيجة، لأن [[K=r\\times P=2rs]] ضعف المساحة الحقيقية. وتطلب الحاسبة [[s]] لا [[P]] لكي لا يحتاج الضرب إلى أي تعديل إضافي." },
          { "kind": "h3", "text": "هل يمكن أن يكون نصف المحيط أصغر من أطول ضلع؟" },
          { "kind": "p", "text": "لا. فمتباينة المثلث تشترط [[a+b>c]]: أي أن مجموع الضلعين الأقصر يجب أن يتجاوز أطول ضلع، وإلا لم ينغلق المثلث. وبإضافة [[c]] إلى الطرفين نحصل على [[a+b+c>2c]]، وبالتنصيف نحصل على [[\\frac{a+b+c}{2}>c]] أي [[s>c]]. فنصف المحيط يتجاوز أطول ضلع دائما في المثلث الصالح. وإذا كان نصف المحيط المذكور أصغر من الوتر، فلا يمكن للمدخلات أن تصف مثلثا حقيقيا." }
        ]
      },
      "sec-formula": {
        "h2": "لماذا تساوي مساحة المثلث نصف القطر الداخلي مضروبا في نصف المحيط؟",
        "blocks": [
          { "kind": "p", "text": "ابدأ بالقاعدة العامة [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. وصل مركز الدائرة الداخلية [[I]] بالرؤوس الثلاثة. فينقسم المثلث إلى ثلاثة مثلثات أصغر، يستخدم كل منها أحد الأضلاع الأصلية قاعدة ونصف القطر الداخلي ارتفاعا عموديا. ويحسب بقية هذا القسم كل قطعة ويجمعها، ليرى [[K=r\\times s]] رأي العين لا حفظا فقط." },
          { "kind": "h3", "text": "مساحة المثلث الأصغر الأول" },
          { "kind": "p", "text": "المثلث المبني على الضلع [[a]] قاعدته [[a]] وارتفاعه [[r]]، لأن نصف القطر يلتقي بالضلع [[a]] عموديا عند نقطة تماسه. فمساحته إذن [[K_1=\\frac{ar}{2}]]. ولم يستخدم شيء من الزاوية القائمة بعد؛ فهذه الخطوة تعمل لضلع أي مثلث." },
          { "kind": "h3", "text": "مساحة المثلث الأصغر الثاني" },
          { "kind": "p", "text": "المثلث المبني على الضلع [[b]] يتبع النمط نفسه: قاعدة [[b]] وارتفاع عمودي [[r]] ومساحة [[K_2=\\frac{br}{2}]]. والارتفاع هو العدد [[r]] نفسه مرة أخرى، لأن مركز الدائرة الداخلية على مسافة متساوية من كل ضلع. وهذا الارتفاع المشترك هو مفتاح البرهان كله." },
          { "kind": "h3", "text": "مساحة المثلث الأصغر الثالث" },
          { "kind": "p", "text": "المثلث المبني على الضلع [[c]] يكمل المجموعة: [[K_3=\\frac{cr}{2}]]. والمثلثات الثلاثة الأصغر تبلط المثلث الأصلي تماما، دون تداخل ودون فجوة: فكل نقطة من الأصلي تقع في أحدها، لأن القطع من مركز الدائرة الداخلية إلى الرؤوس تقسم الداخل." },
          { "kind": "h3", "text": "جمع المساحات الثلاث" },
          { "kind": "p", "text": "اجمع القطع: [[K=K_1+K_2+K_3]]. وبالتعويض نحصل على [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. أخرج [[r]] عاملا مشتركا من المجموع: [[K=\\frac{r(a+b+c)}{2}]]. وتذكر أن [[s=\\frac{a+b+c}{2}]]، فالكسر بين القوسين هو نصف المحيط بالضبط، و[[[\\boxed{K=r\\times s}]]] وكل تنصيف من المثلثات الثلاثة الصغيرة قد امتص في نصف المحيط، ولهذا لا يحتاج الضرب النهائي إلى قسمة إضافية." },
          { "kind": "h3", "text": "لماذا تعمل هذه الصيغة لكل مثلث؟" },
          { "kind": "p", "text": "كل مثلث غير منحط له دائرة داخلية ومركز دائرة داخلية، والمسافة العمودية من المركز إلى الأضلاع الثلاثة هي العدد [[r]] نفسه. وتقسيم المثلثات الثلاثة لا يستخدم شيئا آخر: لا زاوية قائمة، ولا أطوال أضلاع معينة، ولا شكلا خاصا. وسواء كان المثلث قائما أو حادا أو منفرجا، فإن المركز يتصل بالرؤوس ويصل الجبر نفسه إلى [[K=r\\times s]]. والصيغة خاصية للمثلثات عامة، ولهذا تبرهنها كتب الهندسة مرة واحدة وتستخدمها في كل مكان." },
          { "kind": "h3", "text": "لماذا هذه الصيغة مفيدة بصفة خاصة للمثلثات القائمة؟" },
          { "kind": "p", "text": "تبقى المتطابقة نفسها، لكن نصف القطر الداخلي يصبح سهلا. ففي المثلث العام يوجد نصف القطر الداخلي عادة من المساحة نفسها عبر [[r=\\frac{K}{s}]]، وهو دوران في حلقة مفرغة إذا كانت المساحة هي الهدف. أما المثلث القائم الزاوية فيفلت من الحلقة: فنصف قطره الداخلي يتبع مباشرة من الأضلاع عبر [[r=\\frac{a+b-c}{2}]]، المشتقة في القسم التالي. وهذا يجعل [[K=r\\times s]] طريقة عمل حقيقية للمثلثات القائمة لا تعريفا معاد ترتيبه." }
        ],
        "imgAlt": "مثلث مقسم من مركز الدائرة الداخلية I إلى ثلاثة مثلثات أصغر بارتفاع r، يثبت أن K = r مضروبا في s",
        "figcaption": "المثلثات الثلاثة الأصغر تشترك في الارتفاع r؛ ومجموع مساحاتها يساوي r مضروبا في s."
      },
      "sec-inradius": {
        "h2": "كيفية حساب نصف القطر الداخلي للمثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "في المثلث القائم الزاوية ذي الضلعين القائمين [[a]] و[[b]] والوتر [[c]]، يكون نصف القطر الداخلي [[[\\boxed{r=\\frac{a+b-c}{2}}]]] وهذه الصيغة المختصرة خاصة بالمثلثات القائمة. ويستخدم البرهان التالي خاصية قطع المماس للدائرة فقط، والأمثلة المحلولة توضحها عمليا." },
          { "kind": "h3", "text": "لماذا تعمل صيغة نصف القطر الداخلي؟" },
          { "kind": "p", "text": "قطعتا المماس المرسومتان من نقطة خارجية واحدة إلى دائرة متساويتا الطول. والدائرة الداخلية تمس الضلعين القائمين، ونصفا القطر إلى نقطتي التماس يلتقيان بالضلعين بزاوية قائمة. ومع الزاوية القائمة عند الرأس، تشكل منطقة الركن مربعا ضلعه [[r]]، فتكون المسافة من رأس الزاوية القائمة إلى نقطتي تماس الضلعين القائمين [[r]] لكل منهما. وسم الباقي من قطعة المماس على الضلع a بـ[[x]] والباقي على الضلع b بـ[[y]]. وقطعتا المماس من كل رأس حاد متساويتان، فينقسم الوتر إلى [[x]] و[[y]] نفسيهما. ومن ثم [[a=r+x]] و[[b=r+y]] و[[c=x+y]]. واجمع المعادلتين الأوليين: [[a+b=2r+x+y]]. وبما أن [[x+y=c]] تصبح [[a+b=2r+c]]، وبإعادة الترتيب نحصل على [[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "h3", "text": "مثال محلول: المثلث 3-4-5" },
          { "kind": "p", "text": "المعطى [[a=3]] و[[b=4]] و[[c=5]]: عوض في الصيغة المختصرة، [[r=\\frac{3+4-5}{2}]]، [[r=\\frac{2}{2}]]، [[[\\boxed{r=1}]]] فالدائرة الداخلية للمثلث 3-4-5 نصف قطرها 1، وهو ما يطابق مثال المقدمة حيث أعطى [[r=1]] و[[s=6]] النتيجة [[K=6]]." },
          { "kind": "h3", "text": "مثال محلول: المثلث 5-12-13" },
          { "kind": "p", "text": "المعطى [[a=5]] و[[b=12]] و[[c=13]]: فيكون [[r=\\frac{5+12-13}{2}]]، [[r=\\frac{4}{2}]]، [[[\\boxed{r=2}]]] ومع [[s=\\frac{5+12+13}{2}=15]] تتبع المساحة [[K=2\\times15=30]]، وتؤكدها صيغة الضلعين القائمين [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "صيغة بديلة لنصف القطر الداخلي" },
          { "kind": "p", "text": "يمكن كتابة الصيغة المختصرة أيضا على الصورة [[[\\boxed{r=\\frac{ab}{a+b+c}}]]] وهذه ليست صيغة ثانية لا علاقة لها بالأولى. ابدأ من [[K=rs]] و[[K=\\frac{ab}{2}]] فيكون [[rs=\\frac{ab}{2}]]. وبما أن [[s=\\frac{a+b+c}{2}]] يعطي التعويض [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]]، وبإلغاء التنصيف يبقى [[r=\\frac{ab}{a+b+c}]]. ويجب أن تتفق مع [[r=\\frac{a+b-c}{2}]]: تحقق بالمثلث 3-4-5، [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]]، وهو نصف القطر نفسه. وجبريا، [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] للمثلث القائم الزاوية، فالصورتان متطابقتان." },
          { "kind": "h3", "text": "هل تعمل هذه الصيغة المختصرة لنصف القطر الداخلي لكل مثلث؟" },
          { "kind": "p", "text": "لا. فالاشتقاق اعتمد على الزاوية القائمة: فمربع الركن ذو الضلع [[r]] لا يوجد إلا لأن الضلعين القائمين يلتقيان عند 90 درجة. أما المثلث العام فيجب أن يأتي نصف قطره الداخلي من [[[\\boxed{r=\\frac{K}{s}}]]] أو من صيغة مطابقة للقياسات المعروفة، مثل [[r=(s-a)\\tan\\frac{A}{2}]]. وتطبيق [[r=\\frac{a+b-c}{2}]] على مثلث غير قائم يحسب عددا لا معنى هندسي له." }
        ],
        "imgAlt": "قطعتا المماس x وy تستنتجان صيغة نصف القطر الداخلي r = (a + b - c) / 2",
        "figcaption": "قطعتا المماس المتساويتان تعطيان a = r + x وb = r + y وc = x + y."
      },
      "sec-howto": {
        "h2": "كيفية استخدام حاسبة مساحة المثلث القائم الزاوية من نصف المحيط",
        "blocks": [
          { "kind": "p", "text": "تحتاج الحاسبة إلى مدخلين بالضبط، يدخلان بالترتيب. وتتبع الخطوات التالية تخطيط الشاشة من تحديد القياسات إلى نتيجة متحقق منها." },
          { "kind": "p", "text": "للحاسبة مدخلان بالضبط: نصف القطر الداخلي [[r]] ونصف المحيط [[s]]. وهي لا تأخذ الأضلاع الثلاثة ولا الضلعين القائمين ولا الوتر ولا زاوية. والضرب [[K=r\\times s]] كامل كما هو معروض؛ ولا يجوز قسمة النتيجة على اثنين مرة أخرى." }
        ],
        "steps": [
          "<strong>حدد نصف القطر الداخلي للمثلث القائم الزاوية.</strong> وهو نصف قطر الدائرة المحصورة داخل المثلث. فإذا كانت الأضلاع الثلاثة معروفة فاحسبه بالصيغة [[r=\\frac{a+b-c}{2}]].",
          "<strong>حدد نصف محيطه.</strong> اجمع الأضلاع الثلاثة واقسم على اثنين: [[s=\\frac{a+b+c}{2}]]. وهذا نصف المحيط الكامل، وليس المحيط نفسه.",
          "<strong>تأكد من أن القيمتين تنتميان إلى المثلث نفسه.</strong> فنصف قطر داخلي من مثلث ونصف محيط من مثلث آخر يعطيان ضربا لا معنى له.",
          "<strong>وحد الوحدات عند الحاجة.</strong> يجب أن يستخدم الطولان الوحدة نفسها: أمتار مع أمتار، وسنتيمترات مع سنتيمترات، ولا تخلط أبدا.",
          "<strong>أدخل نصف القطر الداخلي r في حقل الإدخال الأول.</strong> وهو القيمة الأصغر من الاثنتين في أي مثلث صالح.",
          "<strong>أدخل نصف المحيط s في حقل الإدخال الثاني.</strong> وتأكد مرة أخرى من أن القيمة هي نصف المحيط لا المحيط كله.",
          "<strong>انقر Calculate Area.</strong> تضرب الحاسبة المدخلين مباشرة.",
          "<strong>راجع النتيجة المعروضة.</strong> اقرأ المساحة وتأكد من أنها تبدو معقولة لحجم المثلث.",
          "<strong>تحقق من خطوات الصيغة والتعويض.</strong> فهي تعرض [[K=r\\times s]] مع ملء القيم المدخلة.",
          "<strong>تأكد من أن النتيجة معبر عنها بوحدات مربعة.</strong> فحاصل ضرب وحدتي طول يعطي وحدات مربعة: m² وcm² وft²، بما يطابق المدخلات.",
          "<strong>استخدم Reset قبل إدخال عملية حسابية أخرى.</strong> فهو يمسح الحقلين لبداية نظيفة."
        ]
      },
      "sec-examples": {
        "h2": "أمثلة خطوة بخطوة لمساحة المثلث القائم الزاوية باستخدام نصف القطر الداخلي ونصف المحيط",
        "blocks": [
          { "kind": "p", "text": "توضح أربعة مثلثات قائمة كلاسيكية السلسلة الكاملة: من الأضلاع إلى نصف المحيط، ومن الأضلاع إلى نصف القطر الداخلي، ثم ضرب واحد. وفي هذه الأمثلة يستنتج r وs من أطوال الأضلاع؛ أما الحاسبة نفسها فتقبل r وs مباشرة." },
          { "kind": "h3", "text": "مثال 1: المثلث القائم 3-4-5" },
          { "kind": "p", "text": "المعطى [[a=3]] و[[b=4]] و[[c=5]]. الخطوة 1: احسب نصف المحيط، [[s=\\frac{3+4+5}{2}]]، [[s=6]]. الخطوة 2: احسب نصف القطر الداخلي، [[r=\\frac{3+4-5}{2}]]، [[r=1]]. الخطوة 3: احسب المساحة، [[K=1\\times6]]، [[[\\boxed{K=6\\text{ square units}}]]] تحقق بصيغة الضلعين القائمين: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "مثال 2: المثلث القائم 5-12-13" },
          { "kind": "p", "text": "المعطى [[a=5]] و[[b=12]] و[[c=13]]. نصف المحيط: [[s=\\frac{5+12+13}{2}=15]]. نصف القطر الداخلي: [[r=\\frac{5+12-13}{2}=2]]. المساحة: [[K=2\\times15]]، [[[\\boxed{K=30\\text{ square units}}]]] تحقق: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "مثال 3: المثلث القائم 8-15-17" },
          { "kind": "p", "text": "المعطى [[a=8]] و[[b=15]] و[[c=17]]. نصف المحيط: [[s=\\frac{8+15+17}{2}=20]]. نصف القطر الداخلي: [[r=\\frac{8+15-17}{2}=3]]. المساحة: [[K=3\\times20]]، [[[\\boxed{K=60\\text{ square units}}]]] تحقق: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "مثال 4: المثلث القائم 7-24-25" },
          { "kind": "p", "text": "المعطى [[a=7]] و[[b=24]] و[[c=25]]. نصف المحيط: [[s=\\frac{7+24+25}{2}=28]]. نصف القطر الداخلي: [[r=\\frac{7+24-25}{2}=3]]. المساحة: [[K=3\\times28]]، [[[\\boxed{K=84\\text{ square units}}]]] تحقق: [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "مقارنة الأمثلة المحلولة" }
        ],
        "table": {
          "headers": ["المثلث", "الضلع القائم a", "الضلع القائم b", "الوتر c", "نصف القطر الداخلي r", "نصف المحيط s", "المساحة K"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "تطبيقات واقعية لمساحة المثلث القائم الزاوية من نصف القطر الداخلي ونصف المحيط",
        "blocks": [
          { "kind": "p", "text": "تحمل اثنتا عشرة حالة محلولة الصيغة من الصفحة إلى الورشة والموقع والاستوديو. وتسمي كل واحدة لوحا مثلثيا قائما أو قسما أو مقطعا أو نموذجا مبسطا، وتعمل نصف القطر الداخلي ونصف المحيط عبر الصيغة، وتبين الافتراض وراء الأرقام. وهذه نماذج مثلثية قائمة مبسطة: فليست كل نافذة أو سقف أو حديقة أو منحدر أو شراع أو قطعة أرض حقيقية مثلثا قائما بالضبط، والجسم غير المنتظم يجب تقسيمه إلى أشكال أبسط قبل تطبيق الصيغة. والمساحة تصف السطح الهندسي المسطح فقط؛ وهي لا تثبت وحدها المتانة الإنشائية أو قدرة التحمل أو سلامة البناء." },
          { "kind": "h3", "text": "مثال 1: نافذة زجاجية مثلثة" },
          { "kind": "p", "text": "نافذة زجاجية مثلثة أضلاعها [[a=3\\text{ m}]] و[[b=4\\text{ m}]] و[[c=5\\text{ m}]]. نصف المحيط: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. نصف القطر الداخلي: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. المساحة: [[K=1\\times6]]، [[[\\boxed{K=6\\text{ m}^2}]]] والنتيجة تمثل سطح الزجاج المثلث المسطح قبل خصم بدلات الإطار. الافتراض: اللوح مثلث قائم حقيقي؛ وأبعاد الإطار تعالج على حدة." },
          { "kind": "h3", "text": "مثال 2: دعامة فولاذية مثلثة" },
          { "kind": "p", "text": "لوح فولاذي مثلث للدعامة أضلاعه [[a=5\\text{ cm}]] و[[b=12\\text{ cm}]] و[[c=13\\text{ cm}]]. نصف المحيط: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. نصف القطر الداخلي: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. المساحة: [[K=2\\times15]]، [[[\\boxed{K=30\\text{ cm}^2}]]] وهذه مساحة اللوح المسطح ولا تثبت متانته الإنشائية. الافتراض: خام الدعامة مقطوع مثلثا قائما؛ وثقوب البراغي والانحناءات مستبعدة." },
          { "kind": "h3", "text": "مثال 3: قسم دعم سقف" },
          { "kind": "p", "text": "قسم دعم سقف مثلث قائم أضلاعه [[a=8\\text{ ft}]] و[[b=15\\text{ ft}]] و[[c=17\\text{ ft}]]. نصف المحيط: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. نصف القطر الداخلي: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. المساحة: [[K=3\\times20]]، [[[\\boxed{K=60\\text{ ft}^2}]]] وتقيس الصيغة قسم الدعم المثلث المسطح، وهي مفيدة لتقدير المواد. الافتراض: القسم منمذج مثلثا قائما؛ وهندسة السقف الكلية قد تختلف." },
          { "kind": "h3", "text": "مثال 4: قسم حديقة مثلث" },
          { "kind": "p", "text": "قسم حديقة مثلث قائم مبسط أضلاعه [[a=7\\text{ m}]] و[[b=24\\text{ m}]] و[[c=25\\text{ m}]]. نصف المحيط: [[s=28\\text{ m}]]. نصف القطر الداخلي: [[r=3\\text{ m}]]. المساحة: [[K=3\\times28]]، [[[\\boxed{K=84\\text{ m}^2}]]] وتساعد المساحة في تقدير قسم التنسيق المثلث، مثلا عند طلب العشب أو المهاد. الافتراض: حدود الحوض مستقيمة وتلتقي بزاوية قائمة." },
          { "kind": "h3", "text": "مثال 5: مقطع جانبي لمنحدر" },
          { "kind": "p", "text": "مقطع جانبي مبسط لمنحدر أضلاعه [[a=9\\text{ m}]] و[[b=12\\text{ m}]] و[[c=15\\text{ m}]]. نصف المحيط: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. نصف القطر الداخلي: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. المساحة: [[K=3\\times18]]، [[[\\boxed{K=54\\text{ m}^2}]]] وهذا يقيس المقطع الجانبي المثلث لا سطح المنحدر المائل. الافتراض: المقطع منمذج بركن قائم عند القاعدة." },
          { "kind": "h3", "text": "مثال 6: قالب قطع من الخشب الرقائقي" },
          { "kind": "p", "text": "قالب خشب رقائقي مثلث قائم أضلاعه [[a=12\\text{ cm}]] و[[b=16\\text{ cm}]] و[[c=20\\text{ cm}]]. نصف المحيط: [[s=24\\text{ cm}]]. نصف القطر الداخلي: [[r=4\\text{ cm}]]. المساحة: [[K=4\\times24]]، [[[\\boxed{K=96\\text{ cm}^2}]]] ويقدر الحساب مساحة المادة المسطحة قبل هدر القطع. الافتراض: القالب مثلث قائم حقيقي؛ وعرض المنشار والبقايا إضافية." },
          { "kind": "h3", "text": "مثال 7: لوحة إعلانية مثلثة" },
          { "kind": "p", "text": "لوحة إعلانية مثلثة أضلاعها [[a=20\\text{ cm}]] و[[b=21\\text{ cm}]] و[[c=29\\text{ cm}]]. نصف المحيط: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. نصف القطر الداخلي: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. المساحة: [[K=6\\times35]]، [[[\\boxed{K=210\\text{ cm}^2}]]] وهذا يمثل السطح المسطح القابل للطباعة من اللوحة. الافتراض: وجه اللوحة مسطح ومثلث قائم؛ ومعدات التثبيت مستبعدة." },
          { "kind": "h3", "text": "مثال 8: قسم مساحة أرض" },
          { "kind": "p", "text": "قسم أرض مثلث قائم مبسط أضلاعه [[a=9\\text{ m}]] و[[b=40\\text{ m}]] و[[c=41\\text{ m}]]. نصف المحيط: [[s=45\\text{ m}]]. نصف القطر الداخلي: [[r=4\\text{ m}]]. المساحة: [[K=4\\times45]]، [[[\\boxed{K=180\\text{ m}^2}]]] وتحسب الصيغة مساحة القسم المثلث الممسوح. الافتراض: القسم منمذج بركن قائم؛ والقطعة غير المنتظمة تحتاج تقسيما إلى أشكال أبسط." },
          { "kind": "h3", "text": "مثال 9: شراع قماشي مثلث" },
          { "kind": "p", "text": "لوح قماشي مثلث قائم أضلاعه [[a=15\\text{ ft}]] و[[b=20\\text{ ft}]] و[[c=25\\text{ ft}]]. نصف المحيط: [[s=30\\text{ ft}]]. نصف القطر الداخلي: [[r=5\\text{ ft}]]. المساحة: [[K=5\\times30]]، [[[\\boxed{K=150\\text{ ft}^2}]]] والنتيجة تستبعد الدرزات والحواف وبدلات المادة. الافتراض: الشراع منمذج مسطحا؛ والأشرعة الحقيقية تنحني تحت الحمل." },
          { "kind": "h3", "text": "مثال 10: لوح صناعي" },
          { "kind": "p", "text": "لوح صناعي مثلث قائم أضلاعه [[a=11\\text{ m}]] و[[b=60\\text{ m}]] و[[c=61\\text{ m}]]. نصف المحيط: [[s=66\\text{ m}]]. نصف القطر الداخلي: [[r=5\\text{ m}]]. المساحة: [[K=5\\times66]]، [[[\\boxed{K=330\\text{ m}^2}]]] والنتيجة تصف اللوح الهندسي المسطح لا أداءه الإنشائي. الافتراض: اللوح منمذج مثلثا قائما؛ والسماكة والمثبتات شأن منفصل." },
          { "kind": "h3", "text": "مثال 11: قسم نهاية سقف مستودع" },
          { "kind": "p", "text": "قسم نهاية سقف مستودع مبسط أضلاعه [[a=13\\text{ ft}]] و[[b=84\\text{ ft}]] و[[c=85\\text{ ft}]]. نصف المحيط: [[s=91\\text{ ft}]]. نصف القطر الداخلي: [[r=6\\text{ ft}]]. المساحة: [[K=6\\times91]]، [[[\\boxed{K=546\\text{ ft}^2}]]] وتقدر النتيجة قسم النهاية المثلث، مثلا عند تسعير الكسوة. الافتراض: نهاية الجملون منمذجة مثلثا قائما." },
          { "kind": "h3", "text": "مثال 12: لوح تصنيع كبير" },
          { "kind": "p", "text": "لوح تصنيع مثلث قائم أضلاعه [[a=28\\text{ cm}]] و[[b=45\\text{ cm}]] و[[c=53\\text{ cm}]]. نصف المحيط: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. نصف القطر الداخلي: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. المساحة: [[K=10\\times63]]، [[[\\boxed{K=630\\text{ cm}^2}]]] وتحسب هذه الطريقة مساحة اللوح المثلثة المسطحة مباشرة من قياسات دائرته وحدوده. الافتراض: حواف اللوح مستقيمة وتلتقي بزاوية قائمة." },
          { "kind": "h3", "text": "مقارنة الأمثلة العملية" }
        ],
        "table": {
          "headers": ["التطبيق العملي", "الضلع القائم a", "الضلع القائم b", "الوتر c", "نصف القطر الداخلي r", "نصف المحيط s", "المساحة المحسوبة", "وحدة القياس"],
          "rows": [
            ["نافذة زجاجية", "3", "4", "5", "1", "6", "6", "m²"],
            ["دعامة فولاذية", "5", "12", "13", "2", "15", "30", "cm²"],
            ["دعامة سقف", "8", "15", "17", "3", "20", "60", "ft²"],
            ["قسم حديقة", "7", "24", "25", "3", "28", "84", "m²"],
            ["مقطع منحدر", "9", "12", "15", "3", "18", "54", "m²"],
            ["قالب خشب رقائقي", "12", "16", "20", "4", "24", "96", "cm²"],
            ["لوحة إعلانية", "20", "21", "29", "6", "35", "210", "cm²"],
            ["قسم مساحة", "9", "40", "41", "4", "45", "180", "m²"],
            ["شراع قماشي", "15", "20", "25", "5", "30", "150", "ft²"],
            ["لوح صناعي", "11", "60", "61", "5", "66", "330", "m²"],
            ["نهاية سقف مستودع", "13", "84", "85", "6", "91", "546", "ft²"],
            ["لوح تصنيع", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "لماذا تعطي صيغة نصف القطر الداخلي المساحة نفسها التي تعطيها صيغة الضلعين القائمين؟",
        "blocks": [
          { "kind": "p", "text": "صيغتان مختلفتان ومثلث واحد ومساحة واحدة. ابدأ بـ[[K=rs]] ومساحة المثلث القائم القياسية [[K=\\frac{ab}{2}]]، مما يفرض [[[\\boxed{rs=\\frac{ab}{2}}]]] ويقيس الطرفان السطح المحصور نفسه بمعلومات هندسية مختلفة: أحدهما يقرأ الدائرة الداخلية والحدود، والآخر يقرأ الضلعين القائمين المتعامدين." },
          { "kind": "h3", "text": "مقارنة عددية باستخدام المثلث 3-4-5" },
          { "kind": "p", "text": "طريقة نصف القطر الداخلي: [[r=1]] و[[s=6]]، فيكون [[K=1\\times6=6]]. طريقة الضلعين القائمين: [[K=\\frac{3\\times4}{2}=6]]. وتتفق الإجابتان لأن نصف القطر الداخلي ونصف المحيط يشفرن معلومات الأضلاع نفسها التي يشفرها الضلعان القائمان: فـ[[r=\\frac{a+b-c}{2}]] و[[s=\\frac{a+b+c}{2}]] مبنيتان من [[a]] و[[b]] و[[c]]، لذا يجب أن يعيد ضربهما بناء المساحة التي يصفها الضلعان القائمان. والتوافق هنا ليس مصادفة بل جبر." },
          { "kind": "h3", "text": "متى تكون طريقة نصف القطر الداخلي أنفع؟" },
          { "kind": "p", "text": "تفوز طريقة نصف القطر الداخلي عندما يكون r وs في متناول اليد سلفا. فمسائل الهندسة عن الدوائر الداخلية تعطي نصف القطر الداخلي مباشرة. والبرهان الذي يحتاج المساحة معبرا عنها بقياسات الدائرة يستخدم [[K=rs]] طبيعيا. ومسائل المسابقات تزود نصف المحيط غالبا ضمن المعطيات. وكتحقق متقاطع، فإن حساب المساحة بطريقتين مستقلتين يكشف زلات الحساب التي تخفيها طريقة واحدة. وفي كل حالة الفكرة هي راحة المدخلات: ابدأ من القياسات التي لديك." },
          { "kind": "h3", "text": "متى تكون صيغة الضلعين القائمين أبسط؟" },
          { "kind": "p", "text": "إذا كان الضلعان القائمان المتعامدان معروفين سلفا، فـ[[K=\\frac{ab}{2}]] عادة أكثر مباشرة: ضرب واحد وتنصيف واحد، دون r أو s وسيطين يجب حسابهما. واشتقاق نصف القطر الداخلي ونصف المحيط أولا ثم ضربهما يضيف خطوتين لا تغيران شيئا. وطريقة نصف المحيط ليست دائما أسهل طريق؛ بل هي أفضل طريق عندما تكون الدائرة الداخلية أو الحدود نقطة البداية الطبيعية، وتصبح التفافا عندما يكون الضلعان القائمان أمامك." }
        ]
      },
      "sec-heron": {
        "h2": "ما الفرق بين صيغة هيرون والمساحة = نصف القطر الداخلي × نصف المحيط؟",
        "blocks": [
          { "kind": "p", "text": "تحسب صيغة هيرون المساحة من أطوال الأضلاع الثلاثة: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] وهي تحتاج نصف المحيط لا نصف القطر الداخلي، وتعمل لأي مثلث صالح. أما صيغة نصف القطر الداخلي [[[\\boxed{K=rs}]]] فتحتاج نصف القطر الداخلي ونصف المحيط بدلا من الأضلاع الثلاثة. والفرق في المدخلات لا في الهندسة: فكلتاهما ترجعان المساحة المحصورة نفسها، لأن الصيغتين مرتبطتان عبر [[r=\\frac{K}{s}]]. وصيغة هيرون هي الخيار الطبيعي عندما تكون الأضلاع الثلاثة معروفة ولا توجد بيانات دائرة؛ وصيغة نصف القطر الداخلي طبيعية عندما تكون الدائرة الداخلية جزءا من الصورة." },
          { "kind": "h3", "text": "مقارنة محلولة" },
          { "kind": "p", "text": "استخدم المثلث 3-4-5. صيغة هيرون: [[s=6]]، [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]، [[K=\\sqrt{6\\times3\\times2\\times1}]]، [[[\\boxed{K=6}]]] صيغة نصف القطر الداخلي: [[K=1\\times6]]، [[[\\boxed{K=6}]]] وتتفق الإجابتان لأن تعبير هيرون يتبسط، عبر تقسيم المثلثات الثلاثة نفسه، إلى [[r\\times s]]: فالجذر التربيعي لـ[[s(s-a)(s-b)(s-c)]] يساوي [[rs]] متى جاء r وs من المثلث نفسه. لكن لا تخلط بين الأداتين: فصيغة هيرون لا تطلب نصف القطر الداخلي أبدا، والصيغة المختصرة لنصف القطر الداخلي [[r=\\frac{a+b-c}{2}]] تخص المثلثات القائمة فقط." }
        ]
      },
      "sec-consistency": {
        "h2": "كيفية التحقق من صلاحية نصف القطر الداخلي ونصف المحيط",
        "blocks": [
          { "kind": "p", "text": "تقبل الحاسبة قيمتين وتضربهما، لكن الضرب هو مساحة مثلث قائم فقط عندما تصف القيمتان المثلث نفسه. والفحوص التالية تفصل المدخلات الصالحة عن الدخيلة." },
          { "kind": "h3", "text": "شروط الإدخال الأساسية" },
          { "kind": "p", "text": "يجب أن يكون المدخلان موجبين: [[r>0]] و[[s>0]]. فالطول لا يمكن أن يكون صفرا أو سالبا، والإدخال غير الموجب لا معنى هندسي له. والصفر ينهار بالمثلث إلى خط بلا مساحة، والقيمة السالبة لا تصف شيئا على الإطلاق. أعد قياس أو اشتقاق أي مدخل يفشل في هذا الاختبار." },
          { "kind": "h3", "text": "يجب أن يكون نصف المحيط أكبر من نصف القطر الداخلي" },
          { "kind": "p", "text": "في المثلث الصالح يطغى نصف المحيط على نصف القطر الداخلي. فمن [[K=rs]] و[[K=\\frac{ab}{2}]] مع ضلعين قائمين موجبين، ومن هندسة الدائرة الداخلية المحصورة داخل المثلث، يكون [[s]] دائما أكبر بوضوح من [[r]]: ففي المثلث 3-4-5 يكون 6 مقابل 1، وفي 5-12-13 يكون 15 مقابل 2. ويجب أن تتوافق القيمتان أيضا مع مجموعة أضلاع ثلاثة صالحة، فهذه المقارنة مرشح سريع لا التحقق الكامل. ونصف قطر داخلي أكبر من نصف المحيط لا يمكن أن يأتي من أي مثلث." },
          { "kind": "h3", "text": "فحص اتساق المثلث القائم المتقدم" },
          { "kind": "p", "text": "لاختبار أشد، يجب أن يحقق المثلث القائم [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]]، أي تقريبا [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]] والفكرة بسيطة: فمن r وs معطاة، يجب أن يكون الضلعان القائمان الحلين الموجبين لمعادلة تربيعية مبنية من [[a+b=s+r]] و[[ab=2rs]]، وهذه المعادلة لا حلول حقيقية لها إلا إذا بقي مميزها غير سالب. ويتبسط شرط المميز إلى هذا الحد بالضبط. تحقق بالمثلث 3-4-5: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]]، صالح. وهذا تحسين اختياري للعمل الدقيق، لا جزء إلزامي من حساب المبتدئ." },
          { "kind": "h3", "text": "ماذا يحدث عندما تكون المدخلات غير متسقة؟" },
          { "kind": "p", "text": "ضرب عددين موجبين يعطي دائما نتيجة عددية، لكن ذلك لا يثبت أنهما يمثلان نصف القطر الداخلي ونصف المحيط للمثلث القائم نفسه. فر من مثلث مقترن بس من مثلث آخر يعطي ضربا لا معنى هندسي له، مهما بدا الحساب أنيقا. وما لم يكن تطبيق الحاسبة مختبرا لسلوك التحقق، فلا تفترض أنه يفحص العلاقة: نفذ الفحوص أعلاه بنفسك، وأعد حساب r وs من الأضلاع عندما تكون الأضلاع معروفة، وتحقق من المساحة متقاطعا مع صيغة الضلعين القائمين." }
        ]
      },
      "sec-units": {
        "h2": "كيف تؤثر وحدات القياس في حسابات نصف القطر الداخلي ونصف المحيط",
        "blocks": [
          { "kind": "p", "text": "نصف القطر الداخلي ونصف المحيط طولان، فيتبعان قواعد الوحدات نفسها المتبعة لأي قياس طول آخر. والوحدة المربعة في الإجابة تأتي من ضرب وحدتي طول، مما يجعل اتساق الوحدات هو كل اللعبة." },
          { "kind": "h3", "text": "لماذا يجب أن يستخدم المدخلان وحدات متوافقة؟" },
          { "kind": "p", "text": "الضرب [[K=r\\times s]] يضرب طولا في طول. فإذا كان r بالسنتيمترات وs بالأمتار خلط الضرب المقياسين ولم يعد للعدد معنى نظيف. وحول أولا ليشترك المدخلان في وحدة واحدة: أمتار أو سنتيمترات أو مليمترات أو أقدام أو بوصات أو ياردات، لكن الوحدة نفسها لكليهما. وللحاسبة منتقيات وحدات لهذا السبب: اضبطها قبل إدخال الأرقام." },
          { "kind": "h3", "text": "مثال محلول لتحويل الوحدات" },
          { "kind": "p", "text": "المعطى [[r=10\\text{ cm}]] و[[s=1\\text{ m}]]. حول نصف المحيط: [[1\\text{ m}=100\\text{ cm}]]. ثم [[K=10\\times100]]، [[[\\boxed{K=1000\\text{ cm}^2}]]] أو حول نصف القطر الداخلي: [[10\\text{ cm}=0.1\\text{ m}]]، فيكون [[K=0.1\\times1]]، [[[\\boxed{K=0.1\\text{ m}^2}]]] والإجابتان تصفان المساحة نفسها، لأن [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. حول أولا ثم اضرب، وأي مسار وحدات يصل إلى المكان الصحيح." },
          { "kind": "h3", "text": "لماذا يعبر عن النتيجة بوحدات مربعة؟" },
          { "kind": "p", "text": "المساحة تعد المربعات الوحدية التي تغطي السطح: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]] و[[\\text{m}\\times\\text{m}=\\text{m}^2]] و[[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. والوحدة دائما وحدة الطول مربعة، لأن ضرب طولين هو عد للمربعات. والإبلاغ عن مساحة كطول مجرد، مثل 1000 cm، خطأ في التصنيف: فـ1000 cm طول، بينما 1000 cm² سطح." },
          { "kind": "h3", "text": "العمل مع القيم العشرية" },
          { "kind": "p", "text": "تتعامل الصيغة مع الكسور العشرية دون تعديل. المعطى [[r=2.5]] و[[s=8.4]]: [[K=2.5\\times8.4]]، [[[\\boxed{K=21\\text{ square units}}]]] فالأعداد الصحيحة والكسور العشرية وقياسات الورشة الدقيقة كلها تمر بالضرب نفسه. وحافظ على الدقة الكاملة أثناء الحساب وقرب الإجابة النهائية فقط بما تبرره دقة القياسات." }
        ]
      },
      "sec-mistakes": {
        "h2": "أخطاء شائعة عند حساب مساحة المثلث القائم الزاوية من نصف المحيط",
        "blocks": [
          { "kind": "p", "text": "كل إجابة خاطئة تقريبا في هذا الموضوع ترجع إلى تسمية مرتبكة لا إلى حساب سيئ. والأخطاء الستة عشر التالية هي التي تتكرر مرارا، ولكل منها سببه وإصلاحه." },
          { "kind": "h3", "text": "1. الخلط بين نصف المحيط والمحيط الكامل" },
          { "kind": "p", "text": "إدخال [[P=12]] حيث يجب [[s=6]] يضاعف الإجابة: [[1\\times12=12]] بدلا من 6. ويحدث الخطأ لأن اللغة اليومية تقول المحيط بينما تريد الصيغة نصفه. الإصلاح: انصف دائما مجموع الحدود قبل إدخاله، وتأكد من أن s المدخل أصغر من المحيط." },
          { "kind": "h3", "text": "2. استخدام نصف قطر الدائرة المحيطة بدلا من نصف القطر الداخلي" },
          { "kind": "p", "text": "نصف قطر الدائرة المحيطة للمثلث 3-4-5 هو [[R=\\frac{5}{2}=2.5]]؛ واستخدامه يعطي [[2.5\\times6=15]]، أي قرابة ثلاثة أضعاف المساحة الحقيقية. ويأتي الخطأ من اشتراك الدائرتين في كلمة نصف القطر. الإصلاح: تأكد من أن نصف القطر يخص الدائرة داخل المثلث التي تمس الأضلاع الثلاثة، لا الدائرة المارة بالرؤوس." },
          { "kind": "h3", "text": "3. نسيان حساب نصف المحيط بطريقة صحيحة" },
          { "kind": "p", "text": "جمع ضلعين فقط، أو قسمة كل ضلع على اثنين قبل الجمع، يعطي s خاطئا. ففي 3-4-5 جمع 3 + 4 والقسمة يعطي 3.5، و[[1\\times3.5=3.5]] لا معنى له. الإصلاح: اجمع الأضلاع الثلاثة أولا ثم اقسم مرة واحدة: [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. قسمة الناتج النهائي على اثنين مرة أخرى" },
          { "kind": "p", "text": "بعد [[K=1\\times6=6]] يعطي التنصيف الإضافي 3. وتأتي العادة من صيغة الضلعين القائمين حيث القسمة صريحة. الإصلاح: تذكر أن الأنصاف ممتصة سلفا في نصف المحيط؛ فـ[[K=r\\times s]] كاملة." },
          { "kind": "h3", "text": "5. استخدام صيغة خاطئة لنصف القطر الداخلي للمثلث القائم" },
          { "kind": "p", "text": "تخمين [[r=\\frac{c-a-b}{2}]] أو [[r=\\frac{a+b}{2}]] يعطي نصف قطر خاطئا. ففي 3-4-5 يكون [[\\frac{5-3-4}{2}=-1]] وليس طولا أصلا. الإصلاح: استخدم [[r=\\frac{a+b-c}{2}]] مع a وb ضلعين قائمين وc وترا، بهذا الترتيب بالضبط." },
          { "kind": "h3", "text": "6. تطبيق الصيغة المختصرة لنصف القطر الداخلي للمثلث القائم على مثلث عادي" },
          { "kind": "p", "text": "الصيغة المختصرة تعتمد على الزاوية القائمة، فعلى المثلث العام تحسب عددا لا معنى هندسي له. الإصلاح: للمثلثات غير القائمة أوجد نصف القطر الداخلي من [[r=\\frac{K}{s}]] أو صيغة مطابقة للقياسات المعروفة، ولا تستخدم [[r=\\frac{a+b-c}{2}]] أبدا." },
          { "kind": "h3", "text": "7. إدخال نصف القطر الداخلي ونصف المحيط من مثلثين مختلفين" },
          { "kind": "p", "text": "أخذ r = 1 من مثلث 3-4-5 وs = 15 من مثلث 5-12-13 يعطي 15، وهو ضرب لا يصف أي مثلث حقيقي. ويحدث الخطأ عند نسخ القيم من أمثلة محلولة مختلفة أو رسوم مختلفة. الإصلاح: اشتق المدخلين أو قسهما من المثلث نفسه قبل الضرب." },
          { "kind": "h3", "text": "8. خلط السنتيمترات بالأمتار" },
          { "kind": "p", "text": "ضرب r = 10 cm في s = 1 m دون تحويل يعطي 10 لا معنى نظيف لها. الإصلاح: حول إلى وحدة واحدة أولا: [[1\\text{ m}=100\\text{ cm}]]، ثم [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. الإبلاغ عن النتيجة بوحدات خطية" },
          { "kind": "p", "text": "مساحة 6 m² ليست 6 m. ويأتي الخطأ عادة من نسخ وحدة المدخل دون تربيعها. الإصلاح: اكتب الوحدة المربعة مع العدد في كل مرة: m² وcm² وft²." },
          { "kind": "h3", "text": "10. إدخال قياسات صفرية أو سالبة" },
          { "kind": "p", "text": "الأطوال موجبة. والصفر ينهار بالمثلث إلى خط بلا مساحة، والأطوال السالبة لا معنى هندسي لها هنا. الإصلاح: أعد قياس المدخل أو اشتقاقه؛ وارفض القيم غير الموجبة قبل الحساب." },
          { "kind": "h3", "text": "11. الخلط بين مركز الدائرة الداخلية ومركز الدائرة المحيطة" },
          { "kind": "p", "text": "مركز الدائرة الداخلية هو ملتقى منصفات الزوايا؛ ومركز الدائرة المحيطة هو ملتقى الأعمدة المنصفة للأضلاع. وفي المثلث القائم الزاوية يقع مركز الدائرة المحيطة عند منتصف الوتر، وهي نقطة مختلفة تماما. والخلط بينهما يؤدي إلى قياس نصف القطر الخطأ. الإصلاح: مركز الدائرة الداخلية [[I]] داخل المثلث على مسافة متساوية من الأضلاع لا من الرؤوس." },
          { "kind": "h3", "text": "12. افتراض أن الدائرة الداخلية تمس ضلعين فقط" },
          { "kind": "p", "text": "الدائرة المحشورة في ركن تمس ضلعين، لكنها ليست الدائرة الداخلية. فالدائرة الداخلية تمس الثلاثة، وبرهان المساحة يحتاج نقاط التماس الثلاث. الإصلاح: تحقق من ثلاث نقاط تماس، واحدة لكل ضلع، قبل معاملة نصف قطر كنصف قطر داخلي." },
          { "kind": "h3", "text": "13. نسيان أن نصف القطر يلتقي بكل ضلع مماس عموديا" },
          { "kind": "p", "text": "تعتمد حجة الارتفاع المشترك في البرهان على [[r\\perp a]] و[[r\\perp b]] و[[r\\perp c]]. والقطعة المائلة من مركز الدائرة الداخلية إلى ضلع أطول من r ولا تصلح ارتفاعا. الإصلاح: قس نصف القطر الداخلي على العمودي إلى الضلع، ولا تقسه أبدا على قطري." },
          { "kind": "h3", "text": "14. الخلط بين نصف القطر الداخلي والقطر" },
          { "kind": "p", "text": "إدخال العرض الكامل للدائرة الداخلية كـr يضاعف نصف القطر ويضاعف المساحة. ففي المثلث 3-4-5 إدخال 2 بدلا من 1 يعطي [[2\\times6=12]]. الإصلاح: نصف القطر الداخلي يمتد من المركز إلى ضلع واحد، أي نصف العرض الكامل للدائرة." },
          { "kind": "h3", "text": "15. استخدام صيغة هيرون بطريقة خاطئة" },
          { "kind": "p", "text": "من الزلات الشائعة نسيان الجذر التربيعي، أو كتابة [[s(s+a)(s+b)(s+c)]] بإشارات جمع، أو تغذية المحيط الكامل في الصيغة. ففي 3-4-5 إسقاط الجذر يعطي 36 بدلا من 6. الإصلاح: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]، مع نصف المحيط وإشارات الناقص والجذر كل في موضعه." },
          { "kind": "h3", "text": "16. افتراض أن النتيجة العددية تثبت تلقائيا الاتساق الهندسي للمدخلات" },
          { "kind": "p", "text": "أي عددين موجبين يقبلان الضرب، فترجع الحاسبة شيئا دائما. وهذا الشيء هو مساحة مثلث قائم فقط عندما ينتمي r وs حقا إلى مثلث واحد. الإصلاح: نفذ فحوص الاتساق، وأعد حساب r وs من الأضلاع عند الإمكان، وتحقق متقاطعا مع صيغة الضلعين القائمين قبل الوثوق بالعدد." },
          { "kind": "h3", "text": "خطأ مقابل صواب: مثال ملموس" },
          { "kind": "p", "text": "استخدم [[r=1]] و[[s=6]]. الصواب: [[K=1\\times6=6]]. والخطأ بقسمة اثنين مرة أخرى: [[K=\\frac{1\\times6}{2}=3]]، خطأ لأن التنصيف موجود سلفا داخل نصف المحيط. والخطأ بإدخال المحيط الكامل 12 بدلا من نصف المحيط 6: [[K=1\\times12=12]]، ضعف المساحة الحقيقية. ويبدو الحساب واثقا في الحالات الثلاث؛ والهندسة وحدها هي التي تميز بينها." }
        ]
      },
      "sec-verify": {
        "h2": "كيفية التحقق من صحة مساحة المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "ستة فحوص مستقلة، كلها موضحة على المثلث 3-4-5 ([[a=3]] و[[b=4]] و[[c=5]] و[[r=1]] و[[s=6]] و[[K=6]]). والتوافق بين طرق مختلفة هو أقوى دليل على صحة الإجابة، في الواجب المدرسي وفي القياس العملي على حد سواء." },
          { "kind": "h3", "text": "الطريقة 1: تحقق من الصيغة الرئيسية" },
          { "kind": "p", "text": "شغل [[K=r\\times s]] من جديد: [[K=1\\times6=6]]. فالمرور الثاني بالأرقام المعاد إدخالها يكشف أخطاء الكتابة والأرقام المدخلة خطأ." },
          { "kind": "h3", "text": "الطريقة 2: احسب نصف المحيط من الأضلاع الثلاثة" },
          { "kind": "p", "text": "أعد حساب [[s=\\frac{a+b+c}{2}]] من الأضلاع: [[s=\\frac{3+4+5}{2}=6]]. فإذا اختلف s المعاد حسابه عن المدخل، كان المدخل خاطئا ويجب إعادة الضرب." },
          { "kind": "h3", "text": "الطريقة 3: احسب نصف القطر الداخلي من المثلث القائم" },
          { "kind": "p", "text": "أعد حساب [[r=\\frac{a+b-c}{2}]]: [[r=\\frac{3+4-5}{2}=1]]. فعدم التطابق مع r المدخل يعني أن نصف القطر جاء من مثلث مختلف أو من صيغة مطبقة خطأ." },
          { "kind": "h3", "text": "الطريقة 4: تحقق باستخدام صيغة الضلعين القائمين القياسية" },
          { "kind": "p", "text": "احسب [[K=\\frac{ab}{2}]]: [[K=\\frac{3\\times4}{2}=6]]. فهذا المسار يستخدم مدخلات مختلفة تماما، لذا يؤكد توافقه مع [[rs]] المدخلات والحساب معا." },
          { "kind": "h3", "text": "الطريقة 5: تحقق باستخدام صيغة هيرون" },
          { "kind": "p", "text": "احسب [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. فصيغة هيرون تمرن الأضلاع ونصف المحيط معا، وتكشف أخطاء تسمية الأضلاع التي قد تفوتها الفحوص الأخرى." },
          { "kind": "h3", "text": "الطريقة 6: تحقق من نظرية فيثاغورس" },
          { "kind": "p", "text": "أكد [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. فهذا يفحص تحديد الأضلاع وراء كل حساب آخر؛ والوتر الخطأ يعني أن ضلعا سمي خطأ وأن r وs وK كلها تحتاج إعادة بناء." }
        ]
      },
      "sec-applications": {
        "h2": "تطبيقات عملية لصيغة نصف القطر الداخلي ونصف المحيط",
        "blocks": [
          { "kind": "p", "text": "يظهر نمط المدخلين نفسه أينما احتاج لوح أو قسم مثلث إلى قياس وكانت بيانات الدائرة الداخلية نقطة البداية المريحة. فالزجاجي يقيس النافذة من أطوال حوافها، والصانع يقرأ ضلعي خام الدعامة القائمين، والمساح يختزل ركن القطعة إلى ثلاثة أضلاع مستقيمة. ومن تلك الأضلاع يأتي نصف القطر الداخلي ونصف المحيط، وضرب واحد يسمي المساحة. وتعرض اللوحات الأربع التالية النمط بمقاييس مختلفة: نافذة زجاجية (6 m²) ودعامة سقف (60 ft²) وقسم حديقة (84 m²) ولوح فولاذي (30 cm²)، وكل لوحة موسومة بنصف قطرها الداخلي ونصف محيطها والمساحة الناتجة." }
        ],
        "imgAlt": "أربع لوحات: نافذة زجاجية 6 m2 ودعامة سقف 60 ft2 وقسم حديقة 84 m2 ولوح فولاذي 30 cm2",
        "figcaption": "أربعة استخدامات حقيقية: نافذة زجاجية ودعامة سقف وقسم حديقة ولوح فولاذي."
      },
      "sec-related": {
        "h2": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
        "blocks": [
          { "kind": "p", "text": "القياسات المختلفة تتطلب حاسبات مختلفة." }
        ]
      },
      "sec-faq": {
        "h2": "الأسئلة الشائعة",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "قياسان وضرب واحد",
        "blocks": [
          { "kind": "p", "text": "نصف قطر داخلي ونصف محيط يكفيان. اضربهما ويسم السطح المحصور. ويبين برهان المثلثات الثلاثة لماذا لا تتبع الضرب قسمة، وتبين حجة قطع المماس لماذا يحصل المثلث القائم على صيغته المختصرة لنصف القطر الداخلي، وتقف صيغة الضلعين القائمين وصيغة هيرون جاهزتين للتحقق من كل إجابة." },
          { "kind": "p", "text": "وعادة العمل بسيطة: تأكد من أن المدخلين يصفان المثلث نفسه، ووحد الوحدات، واحتفظ بالكسور العشرية دون تقريب حتى النهاية، وتحقق بطريقة ثانية. وبهذه العادات تكون [[K=r\\times s]] من أكثر حسابات المساحة اعتمادا في الهندسة." }
        ]
      }
    }
  },
  "bg": {
    "faqs": [
      {
        "question": "Каква е формулата за лице на правоъгълен триъгълник чрез вътрешния радиус и полупериметъра?",
        "answer": "K = r × s, където r е вътрешният радиус (радиусът на вписания кръг), а s е полупериметърът (половината от периметъра). Умножете двете числа и произведението е лицето, без стъпка на делене. При r = 1 и s = 6 получаваме K = 1 × 6 = 6 квадратни единици. И двата входа трябва да описват един и същ триъгълник."
      },
      {
        "question": "Какво е вътрешен радиус?",
        "answer": "Вътрешният радиус е радиусът на вписания кръг, кръгът, който се побира точно вътре в триъгълника и докосва и трите му страни. Той е равен на перпендикулярното разстояние от центъра на вписания кръг, където се срещат трите ъглополовящи, до която и да е страна. За правоъгълен триъгълник с катети a и b и хипотенуза c съществува кратката формула r = (a + b - c) / 2."
      },
      {
        "question": "Каква е разликата между вътрешния радиус и радиуса на описания кръг?",
        "answer": "Вътрешният радиус принадлежи на кръга вътре в триъгълника, който докосва и трите страни; радиусът на описания кръг принадлежи на кръга, минаващ през трите върха. Те измерват различни кръгове, затова стойностите им се различават. За правоъгълен триъгълник радиусът на описания кръг е R = c/2, точно половината от хипотенузата, докато вътрешният радиус е (a + b - c)/2."
      },
      {
        "question": "Как да изчисля полупериметъра на правоъгълен триъгълник?",
        "answer": "Съберете трите страни и разделете на две: s = (a + b + c) / 2. За триъгълник 3-4-5 получаваме s = (3 + 4 + 5) / 2 = 6. Полупериметърът е половината от пълния периметър, затова погрешно въведеният пълен периметър удвоява лицето при K = r × s."
      },
      {
        "question": "Как да намеря вътрешния радиус по три дължини на страни?",
        "answer": "За правоъгълен триъгълник използвайте кратката формула r = (a + b - c) / 2, където a и b са катетите, а c е хипотенузата. При страни 5, 12, 13: r = (5 + 12 - 13) / 2 = 2. Тази кратка формула важи само за правоъгълни триъгълници; останалите триъгълници се нуждаят от общата зависимост r = K / s."
      },
      {
        "question": "Защо лицето е равно на вътрешния радиус, умножен по полупериметъра?",
        "answer": "Свързването на центъра на вписания кръг с трите върха разделя триъгълника на три по-малки триъгълника, всеки с основа, равна на една страна, и височина, равна на r. Техните лица са ar/2, br/2 и cr/2. Събирането им дава r(a + b + c)/2, а тъй като s = (a + b + c)/2, сборът е r × s."
      },
      {
        "question": "Формулата важи ли за всички триъгълници?",
        "answer": "Да. Всеки неизроден триъгълник има вписан кръг и център на вписания кръг, затова разлагането на три триъгълника важи еднакво за правоъгълни, остроъгълни и тъпоъгълни триъгълници. Правоъгълният триъгълник просто е по-лесен, защото вътрешният му радиус се намира от страните чрез r = (a + b - c) / 2. Общият вътрешен радиус все пак идва от r = K / s."
      },
      {
        "question": "Полупериметърът същото ли е като периметъра?",
        "answer": "Не. Полупериметърът е точно половината от периметъра: s = P/2. За триъгълник 3-4-5 периметърът е 12, а полупериметърът е 6. Въвеждането на пълния периметър в K = r × s дава 1 × 12 = 12, двойно на правилното лице 6. Разделете периметъра на две, преди да умножите."
      },
      {
        "question": "Трябва ли да разделя крайния отговор на две?",
        "answer": "Не. Формулата K = r × s вече отчита всяко делене: половините от трите по-малки триъгълника са погълнати в полупериметъра. Повторното делене след умножението е най-честата грешка. При r = 1 и s = 6 правилното лице е 6, докато (1 × 6) / 2 = 3 е грешно."
      },
      {
        "question": "Каква е връзката между формулата на Херон и формулата с вътрешния радиус?",
        "answer": "И двете изчисляват едно и също лице, но тръгват от различни входни данни. Формулата на Херон, K = sqrt(s(s - a)(s - b)(s - c)), се нуждае от трите страни; K = r × s се нуждае от вътрешния радиус и полупериметъра вместо тях. За триъгълник 3-4-5 и двете дават 6, което прави едната формула силна проверка на другата."
      },
      {
        "question": "Мога ли да използвам десетични стойности за вътрешния радиус и полупериметъра?",
        "answer": "Да. Формулата се справя с десетичните точно както с целите числа. При r = 2.5 и s = 8.4 получаваме K = 2.5 × 8.4 = 21 квадратни единици. Пазете пълната точност по време на умножението и закръгляйте само крайния отговор според точността на измерванията."
      },
      {
        "question": "Как да проверя дали вътрешният ми радиус и полупериметър са правилни?",
        "answer": "Проверете дали и двете стойности са положителни и s е осезаемо по-голямо от r. Ако страните са известни, преизчислете s = (a + b + c)/2 и r = (a + b - c)/2, след което кръстосано проверете лицето с K = ab/2 и формулата на Херон. Съгласието между методите е силно доказателство. Стойности от различни триъгълници дават число, което не е истинското лице."
      }
    ],
    "relatedHeading": "Разгледайте свързаните калкулатори за правоъгълен триъгълник",
    "relatedItems": [
      "Калкулатор за лице на правоъгълен триъгълник от катети",
      "Калкулатор за полупериметър на правоъгълен триъгълник",
      "Калкулатор за лице на правоъгълен триъгълник от височина",
      "Калкулатор за лице на правоъгълен триъгълник от ъгъл",
      "Калкулатор за периметър на правоъгълен триъгълник",
      "Калкулатор за лице на правоъгълен триъгълник"
    ],
    "relatedIntro": "Различните измервания изискват различни калкулатори.",
    "faqHeading": "Често задавани въпроси",
    "tocHeading": "В това ръководство",
    "tocItems": {
      "sec-intro": "Как да изчислим лице на правоъгълен триъгълник по вътрешния му радиус и полупериметъра",
      "sec-right-triangle": "Какво е правоъгълен триъгълник?",
      "sec-incircle": "Разбиране на вписания кръг на правоъгълен триъгълник",
      "sec-semiperimeter": "Разбиране на полупериметъра на триъгълник",
      "sec-formula": "Защо лицето на триъгълник е равно на вътрешния радиус по полупериметъра?",
      "sec-inradius": "Как да изчислим вътрешния радиус на правоъгълен триъгълник",
      "sec-howto": "Как да използвате калкулатора за лице на правоъгълен триъгълник от полупериметъра",
      "sec-examples": "Примери стъпка по стъпка за лице на правоъгълен триъгълник чрез вътрешния радиус и полупериметъра",
      "sec-practical": "Приложения в реалния живот на лицето на правоъгълен триъгълник от вътрешния радиус и полупериметъра",
      "sec-legs-comparison": "Защо формулата с вътрешния радиус дава същото лице като формулата с катетите?",
      "sec-heron": "Каква е разликата между формулата на Херон и лицето = вътрешен радиус × полупериметър?",
      "sec-consistency": "Как да проверим дали вътрешният радиус и полупериметърът са валидни",
      "sec-units": "Как мерните единици влияят на изчисленията с вътрешния радиус и полупериметъра",
      "sec-mistakes": "Чести грешки при изчисляване на лице на правоъгълен триъгълник от полупериметъра",
      "sec-verify": "Как да проверим дали лицето на нашия правоъгълен триъгълник е правилно",
      "sec-applications": "Практически приложения на формулата с вътрешния радиус и полупериметъра",
      "sec-related": "Разгледайте свързаните калкулатори за правоъгълен триъгълник",
      "sec-faq": "Често задавани въпроси",
      "sec-conclusion": "Две измервания, едно произведение"
    },
    "sections": {
      "sec-intro": {
        "h2": "Как да изчислим лице на правоъгълен триъгълник по вътрешния му радиус и полупериметъра",
        "blocks": [
          { "kind": "p", "text": "Вземете [[r=1]], [[s=6]]. Приложете [[K=r\\times s]]: [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Резултатът назовава общата плоска площ, затворена от трите страни на триъгълника: шест квадратни единици. Точно това връща калкулаторът за лице на правоъгълен триъгълник от полупериметъра за тези два входа." },
          { "kind": "p", "text": "Вътрешният радиус е радиусът на кръга, скътан вътре в триъгълника и докосващ трите му страни. Полупериметърът е половината от дължината на границата: сборът на трите страни, разделен на две. Две измервания стигат, защото вътрешният радиус служи като обща перпендикулярна височина за трите по-малки триъгълника, построени от центъра на вписания кръг, докато полупериметърът събира основите им в един множител." },
          { "kind": "p", "text": "Разсъждението важи за всеки триъгълник, защото всеки притежава вписан кръг. Правоъгълният триъгълник добавя бонус: вътрешният му радиус следва от трите страни чрез кратка формула, затова r и s често са вече известни. Този метод блести в задачи, в които вписаният кръг или полупериметърът са дадени, тъй като не се налага да се мери катет или ъгъл." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Какво е правоъгълен триъгълник?",
        "blocks": [
          { "kind": "p", "text": "Преди вписаният кръг да влезе в картината, самият триъгълник трябва да бъде надписан без грешка. Символите по-долу остават фиксирани през цялото ръководство, а калкулаторът използва същите имена." },
          { "kind": "h3", "text": "Определение за правоъгълен триъгълник" },
          { "kind": "p", "text": "Правоъгълният триъгълник е тристранен многоъгълник, съдържащ точно един вътрешен ъгъл от 90 градуса. Той има три върха, три страни, два остри ъгъла и един прав ъгъл, обикновено отбелязан с малко квадратче. Двете страни, образуващи правия ъгъл, са катетите; срещуположната страна е хипотенузата. Тъй като [[C=90^\\circ]], следва, че [[[\\boxed{A+B=90^\\circ}]]]: двата остри ъгъла са комплементарни, така че познаването на единия определя другия." },
          { "kind": "h3", "text": "Разбиране на двата катета" },
          { "kind": "p", "text": "Катетът [[a]] лежи срещу ъгъла [[A]]; катетът [[b]] лежи срещу ъгъла [[B]]. Двата катета се срещат във върха на правия ъгъл и са перпендикулярни един на друг. Те допринасят пряко за лицето, защото всеки катет може да служи за основа, докато другият служи за перпендикулярна височина. За тази страница те подхранват и вътрешния радиус, тъй като кратката формула [[r=\\frac{a+b-c}{2}]] е изградена от двата катета и хипотенузата." },
          { "kind": "h3", "text": "Разбиране на хипотенузата" },
          { "kind": "p", "text": "Хипотенузата е страната срещу ъгъла от 90 градуса, винаги най-дългата страна на триъгълника. Тя никога не образува правия ъгъл; тя се простира срещу него. Във формулата за лице чрез катетите тя не играе роля, но тук е важна: хипотенузата влиза както в полупериметъра [[s=\\frac{a+b+c}{2}]], така и в кратката формула за вътрешния радиус [[r=\\frac{a+b-c}{2}]]. Ако двата катета са известни, Питагоровата теорема я възстановява чрез [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Какво отличава този триъгълник от останалите триъгълници?" },
          { "kind": "p", "text": "Ъгълът от 90 градуса е цялата история. Той прави катетите перпендикулярни без никакво построение, което опростява стандартната формула за лице, и прави допирателните отсечки на вписания кръг близо до правия ъгъл равни на самия вътрешен радиус, което опростява формулата за вътрешния радиус. Останалите триъгълници все още удовлетворяват [[K=r\\times s]], но намирането на вътрешния им радиус обикновено изисква първо лицето. Правоъгълният триъгълник е единственият случай, в който вътрешният радиус излиза пряко от дължините на страните." }
        ]
      },
      "sec-incircle": {
        "h2": "Разбиране на вписания кръг на правоъгълен триъгълник",
        "blocks": [
          { "kind": "p", "text": "Вътрешният радиус има смисъл едва след като вписаният кръг се види ясно. Този раздел изгражда идеята от самия кръг до допирните точки, където радиусът среща всяка страна." },
          { "kind": "h3", "text": "Определение за вписан кръг" },
          { "kind": "p", "text": "Вписаният кръг е кръг, разположен вътре в триъгълника така, че докосва и трите му страни. Той стои във вътрешността, допирателен до всяка страна в точно една точка, и не може да пресече страна, защото допирът го държи на място. Всеки неизроден триъгълник притежава точно един вписан кръг: свийте кръг в ъгловите области и съществува един-единствен най-голям размер, който целува трите страни. Трите допирни точки, по една на страна, са местата, където по-късно ще се измерва вътрешният радиус." },
          { "kind": "h3", "text": "Какво е центърът на вписания кръг?" },
          { "kind": "p", "text": "Центърът на вписания кръг, означен с [[I]], е точката, където се срещат трите вътрешни ъглополовящи. Всяка ъглополовяща дели един ъгъл на върха на две равни части, а всяка точка върху ъглополовяща е на равно перпендикулярно разстояние от двете страни, образуващи този ъгъл. Пресечната точка на трите ъглополовящи следователно е на равно разстояние от трите страни, което е точно причината да може да служи като център на кръг, докосващ всяка страна. Центърът на вписания кръг лежи вътре във всеки валиден триъгълник, никога върху ръб или отвън." },
          { "kind": "h3", "text": "Какво е вътрешният радиус?" },
          { "kind": "p", "text": "Вътрешният радиус е перпендикулярното разстояние от центъра на вписания кръг до която и да е страна на триъгълника: [[[\\boxed{r=\\text{distance from the incenter to a side}}]]] Тъй като центърът на вписания кръг е равноотдалечен от трите страни, стойността е една и съща, независимо коя страна е избрана. Това единствено число е радиусът на вписания кръг, дължината на всяка от трите къси отсечки, изтеглени от центъра до допирните точки, и общата височина, благодарение на която доказателството за лицето в по-късен раздел работи." },
          { "kind": "h3", "text": "Разбиране на допирателната връзка" },
          { "kind": "p", "text": "Радиус, изтеглен до допирна точка, е перпендикулярен на страната, която докосва. Приложено към трите точки на допир, това дава [[r\\perp a]], [[r\\perp b]] и [[r\\perp c]]. Всяко твърдение описва различен ъгъл на чертежа: радиусът, завършващ върху катета a, стои под прав ъгъл спрямо катета a, и същото важи за катета b и хипотенузата. Тази перпендикулярност не е украса; тя е свойството, което позволява на всеки радиус да действа като височина на един от трите по-малки триъгълника в доказателството за лицето." },
          { "kind": "h3", "text": "Разлика между вписан и описан кръг" },
          { "kind": "p", "text": "Вписаният кръг живее вътре в триъгълника и докосва трите му страни; описаният кръг минава през трите върха и обгръща триъгълника. Радиусите им са различни измервания и никога не бива да се разменят. За правоъгълен триъгълник радиусът на описания кръг има свое просто правило, [[[\\boxed{R=\\frac{c}{2}}]]], защото хипотенузата е диаметър на описания кръг: средата на хипотенузата е центърът на описания кръг. Вътрешният радиус [[r]] е по-малкият от двата и принадлежи на кръга вътре." }
        ],
        "imgAlt": "Правоъгълен триъгълник ABC с вписан кръг: център на вписания кръг I, три допирни точки, перпендикулярни радиуси с дължина r",
        "figcaption": "Триъгълник ABC с вписания си кръг: три перпендикулярни радиуса, всеки с дължина r."
      },
      "sec-semiperimeter": {
        "h2": "Разбиране на полупериметъра на триъгълник",
        "blocks": [
          { "kind": "p", "text": "Полупериметърът изглежда като обикновена половин мярка, но носи по-голямата част от изчислението на лицето. Разбирането защо геометрията все посяга към половината периметър подготвя почвата за доказателството." },
          { "kind": "h3", "text": "Определение за полупериметър" },
          { "kind": "p", "text": "Полупериметърът е точно половината от общия периметър: [[[\\boxed{s=\\frac{P}{2}}]]] За триъгълник това става [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Периметърът [[P]] е пълната дължина на границата, сборът на трите страни; полупериметърът е този сбор, разделен на две. Двете са свързани чрез [[P=2s]], а объркването им е най-скъпата входна грешка на тази страница." },
          { "kind": "h3", "text": "Как да изчислим полупериметъра" },
          { "kind": "p", "text": "Вземете [[a=3]], [[b=4]], [[c=5]]. Първо съберете трите страни, после разделете веднъж: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]] Събирането трябва да предшества деленето, защото полупериметърът разполовява цялата граница, а не всяка страна поотделно. Събирането след деленето би дало същото число тук, но формулата [[s=\\frac{a+b+c}{2}]] заявява правилния ред: съберете границата, после я разполовете." },
          { "kind": "h3", "text": "Защо се използва полупериметърът вместо пълния периметър?" },
          { "kind": "p", "text": "Формулите за лице на триъгълник все произвеждат половини: всеки малък триъгълник в доказателството допринася с деление на две, а полупериметърът ги поглъща всички наведнъж. Той е естествената променлива на формулата на Херон, на зависимостта за вътрешния радиус [[r=\\frac{K}{s}]] и на следващото доказателство. Въвеждането на пълния периметър вместо него би удвоило резултата, защото [[K=r\\times P=2rs]] е двойно на истинското лице. Калкулаторът иска [[s]], а не [[P]], именно за да не се нуждае умножението от допълнителна корекция." },
          { "kind": "h3", "text": "Може ли полупериметърът да е по-малък от най-дългата страна?" },
          { "kind": "p", "text": "Не. Неравенството на триъгълника изисква [[a+b>c]]: двете по-къси страни заедно трябва да надвишават най-дългата страна, иначе триъгълникът не може да се затвори. Добавянето на [[c]] към двете страни дава [[a+b+c>2c]], а разполовяването дава [[\\frac{a+b+c}{2}>c]], което е [[s>c]]. Полупериметърът винаги надвишава най-дългата страна във валиден триъгълник. Ако съобщеният полупериметър е по-малък от хипотенузата, входовете не могат да описват истински триъгълник." }
        ]
      },
      "sec-formula": {
        "h2": "Защо лицето на триъгълник е равно на вътрешния радиус по полупериметъра?",
        "blocks": [
          { "kind": "p", "text": "Започнете с общото правило [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Свържете центъра на вписания кръг [[I]] с трите върха. Триъгълникът се разпада на три по-малки триъгълника, всеки използващ една оригинална страна за основа и вътрешния радиус за перпендикулярна височина. Останалата част от този раздел изчислява всяка част и ги събира, така че [[K=r\\times s]] се вижда, а не просто се запомня." },
          { "kind": "h3", "text": "Лицето на първия по-малък триъгълник" },
          { "kind": "p", "text": "Триъгълникът, построен върху страната [[a]], има основа [[a]] и височина [[r]], защото радиусът среща страната [[a]] перпендикулярно в нейната допирна точка. Лицето му следователно е [[K_1=\\frac{ar}{2}]]. Все още нищо за правия ъгъл не е използвано; тази стъпка работи за страната на всеки триъгълник." },
          { "kind": "h3", "text": "Лицето на втория по-малък триъгълник" },
          { "kind": "p", "text": "Триъгълникът, построен върху страната [[b]], следва същия модел: основа [[b]], перпендикулярна височина [[r]], лице [[K_2=\\frac{br}{2}]]. Височината отново е същото число [[r]], защото центърът на вписания кръг е равноотдалечен от всяка страна. Тази обща височина е ключът към цялото доказателство." },
          { "kind": "h3", "text": "Лицето на третия по-малък триъгълник" },
          { "kind": "p", "text": "Триъгълникът, построен върху страната [[c]], завършва множеството: [[K_3=\\frac{cr}{2}]]. Трите по-малки триъгълника запълват оригиналния триъгълник точно, без припокриване и без празнина: всяка точка от оригинала лежи в един от тях, тъй като отсечките от центъра на вписания кръг до върховете разделят вътрешността." },
          { "kind": "h3", "text": "Събиране на трите лица" },
          { "kind": "p", "text": "Съберете частите: [[K=K_1+K_2+K_3]]. Заместването дава [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Извадете [[r]] пред скоби от сбора: [[K=\\frac{r(a+b+c)}{2}]]. Припомнете си, че [[s=\\frac{a+b+c}{2}]], така че дробта в скобите е точно полупериметърът, и [[[\\boxed{K=r\\times s}]]] Всяко разполовяване от трите малки триъгълника е погълнато в полупериметъра, затова крайното умножение не се нуждае от допълнително деление." },
          { "kind": "h3", "text": "Защо тази формула работи за всеки триъгълник?" },
          { "kind": "p", "text": "Всеки неизроден триъгълник има вписан кръг и център на вписания кръг, а перпендикулярното разстояние на центъра до трите страни е едно и също число [[r]]. Разлагането на три триъгълника не използва нищо друго: нито прав ъгъл, нито конкретни дължини на страни, нито специална форма. Независимо дали триъгълникът е правоъгълен, остроъгълен или тъпоъгълен, центърът се свързва с върховете и същата алгебра стига до [[K=r\\times s]]. Формулата е свойство на триъгълниците изобщо, затова учебниците по геометрия я доказват веднъж и я използват навсякъде." },
          { "kind": "h3", "text": "Защо тази формула е особено полезна за правоъгълни триъгълници?" },
          { "kind": "p", "text": "Тъждеството остава същото, но вътрешният радиус става лесен. В общия триъгълник вътрешният радиус обикновено се намира от самото лице чрез [[r=\\frac{K}{s}]], което е кръг, ако лицето е целта. Правоъгълният триъгълник избягва кръга: вътрешният му радиус следва пряко от страните чрез [[r=\\frac{a+b-c}{2}]], изведено в следващия раздел. Това прави [[K=r\\times s]] истински работен метод за правоъгълни триъгълници, а не пренаредено определение." }
        ],
        "imgAlt": "Триъгълник, разделен от центъра на вписания кръг I на три по-малки триъгълника с височина r, доказващ K = r по s",
        "figcaption": "Трите по-малки триъгълника споделят височината r; лицата им се събират до r по s."
      },
      "sec-inradius": {
        "h2": "Как да изчислим вътрешния радиус на правоъгълен триъгълник",
        "blocks": [
          { "kind": "p", "text": "За правоъгълен триъгълник с катети [[a]] и [[b]] и хипотенуза [[c]] вътрешният радиус е [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Тази кратка формула е специфична за правоъгълни триъгълници. Доказателството по-долу използва само свойството на допирателните отсечки на кръга, а решените примери я показват в действие." },
          { "kind": "h3", "text": "Защо формулата за вътрешния радиус работи?" },
          { "kind": "p", "text": "Допирателните отсечки, изтеглени от една и съща външна точка към кръг, имат равни дължини. Вписаният кръг докосва двата катета, а двата радиуса до тези допирни точки срещат страните под прав ъгъл. Заедно с правия ъгъл при върха, ъгловата област образува квадрат със страна [[r]], така че разстоянията от върха на правия ъгъл до двете допирни точки на катетите са всяко [[r]]. Наречете оставащата допирателна отсечка върху катета a [[x]], а оставащата върху катета b [[y]]. Двете допирателни отсечки от всеки остър връх са равни, затова хипотенузата се разделя на същите [[x]] и [[y]]. Следователно [[a=r+x]], [[b=r+y]] и [[c=x+y]]. Съберете първите две уравнения: [[a+b=2r+x+y]]. Тъй като [[x+y=c]], това става [[a+b=2r+c]], а пренареждането дава [[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "h3", "text": "Решен пример: триъгълник 3-4-5" },
          { "kind": "p", "text": "Дадено [[a=3]], [[b=4]], [[c=5]]: заместете в кратката формула, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]] Вписаният кръг на триъгълника 3-4-5 има радиус 1, което съвпада с въвеждащия пример, където [[r=1]] и [[s=6]] дадоха [[K=6]]." },
          { "kind": "h3", "text": "Решен пример: триъгълник 5-12-13" },
          { "kind": "p", "text": "Дадено [[a=5]], [[b=12]], [[c=13]]: тогава [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]] В двойка с [[s=\\frac{5+12+13}{2}=15]] лицето следва като [[K=2\\times15=30]], потвърдено от формулата с катетите [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Алтернативна формула за вътрешния радиус" },
          { "kind": "p", "text": "Кратката формула може да се запише и като [[[\\boxed{r=\\frac{ab}{a+b+c}}]]] Това не е втора, несвързана формула. Започнете от [[K=rs]] и [[K=\\frac{ab}{2}]], така че [[rs=\\frac{ab}{2}]]. Тъй като [[s=\\frac{a+b+c}{2}]], заместването дава [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]], а съкращаването на половините оставя [[r=\\frac{ab}{a+b+c}]]. Тя трябва да съвпадне с [[r=\\frac{a+b-c}{2}]]: проверете с 3-4-5, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], същият радиус. Алгебрично, [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] за правоъгълен триъгълник, така че двете форми са идентични." },
          { "kind": "h3", "text": "Тази кратка формула за вътрешния радиус работи ли за всеки триъгълник?" },
          { "kind": "p", "text": "Не. Изводът се опираше на правия ъгъл: ъгловият квадрат със страна [[r]] съществува само защото двата катета се срещат под 90 градуса. За общ триъгълник вътрешният радиус трябва да дойде от [[[\\boxed{r=\\frac{K}{s}}]]] или от формула, съобразена с известните измервания, като [[r=(s-a)\\tan\\frac{A}{2}]]. Прилагането на [[r=\\frac{a+b-c}{2}]] върху неправоъгълен триъгълник изчислява число без геометричен смисъл." }
        ],
        "imgAlt": "Допирателни отсечки x и y извеждат формулата за вътрешния радиус r = (a + b - c) / 2",
        "figcaption": "Равните допирателни отсечки дават a = r + x, b = r + y, c = x + y."
      },
      "sec-howto": {
        "h2": "Как да използвате калкулатора за лице на правоъгълен триъгълник от полупериметъра",
        "blocks": [
          { "kind": "p", "text": "Калкулаторът се нуждае от точно два входа, въведени по ред. Стъпките по-долу следват екранното оформление от разпознаването на измерванията до проверения резултат." },
          { "kind": "p", "text": "Калкулаторът има точно два входа: вътрешния радиус [[r]] и полупериметъра [[s]]. Той не приема трите страни, катетите, хипотенузата или ъгъл. Умножението [[K=r\\times s]] е завършено, както е показано; резултатът никога не бива да се дели отново на две." }
        ],
        "steps": [
          "<strong>Определете вътрешния радиус на правоъгълния триъгълник.</strong> Това е радиусът на кръга, вписан в триъгълника. Ако трите страни са известни, изчислете го с [[r=\\frac{a+b-c}{2}]].",
          "<strong>Определете полупериметъра му.</strong> Съберете трите страни и разделете на две: [[s=\\frac{a+b+c}{2}]]. Това е половината от пълния периметър, а не самият периметър.",
          "<strong>Уверете се, че двете стойности принадлежат на един и същ триъгълник.</strong> Вътрешен радиус от един триъгълник и полупериметър от друг дават безсмислено произведение.",
          "<strong>Приведете измерванията в съвместими единици, ако е необходимо.</strong> И двете дължини трябва да използват една и съща единица: метри с метри, сантиметри със сантиметри, никога смесени.",
          "<strong>Въведете вътрешния радиус r в първото поле за вход.</strong> Това е по-малката от двете стойности във всеки валиден триъгълник.",
          "<strong>Въведете полупериметъра s във второто поле за вход.</strong> Проверете отново дали стойността е половината от периметъра, а не целият периметър.",
          "<strong>Натиснете Calculate Area.</strong> Калкулаторът умножава двата входа директно.",
          "<strong>Прегледайте показания резултат.</strong> Прочетете лицето и се убедете, че изглежда разумно за размера на триъгълника.",
          "<strong>Проверете стъпките на формулата и заместването.</strong> Те показват [[K=r\\times s]] с въведените стойности, вече попълнени.",
          "<strong>Уверете се, че резултатът е изразен в квадратни единици.</strong> Единиците за дължина, умножени, дават квадратни единици: m², cm², ft², според входовете.",
          "<strong>Използвайте Reset, преди да въведете друго изчисление.</strong> Той изчиства и двете полета за чисто начало."
        ]
      },
      "sec-examples": {
        "h2": "Примери стъпка по стъпка за лице на правоъгълен триъгълник чрез вътрешния радиус и полупериметъра",
        "blocks": [
          { "kind": "p", "text": "Четири класически правоъгълни триъгълника показват пълната верига: от страни към полупериметър, от страни към вътрешен радиус, после едно умножение. В тези примери r и s са изведени от дължините на страните; самият калкулатор приема r и s директно." },
          { "kind": "h3", "text": "Пример 1: правоъгълен триъгълник 3-4-5" },
          { "kind": "p", "text": "Дадено [[a=3]], [[b=4]], [[c=5]]. Стъпка 1: изчислете полупериметъра, [[s=\\frac{3+4+5}{2}]], [[s=6]]. Стъпка 2: изчислете вътрешния радиус, [[r=\\frac{3+4-5}{2}]], [[r=1]]. Стъпка 3: изчислете лицето, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Проверете с формулата чрез катетите: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Пример 2: правоъгълен триъгълник 5-12-13" },
          { "kind": "p", "text": "Дадено [[a=5]], [[b=12]], [[c=13]]. Полупериметър: [[s=\\frac{5+12+13}{2}=15]]. Вътрешен радиус: [[r=\\frac{5+12-13}{2}=2]]. Лице: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Проверка: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Пример 3: правоъгълен триъгълник 8-15-17" },
          { "kind": "p", "text": "Дадено [[a=8]], [[b=15]], [[c=17]]. Полупериметър: [[s=\\frac{8+15+17}{2}=20]]. Вътрешен радиус: [[r=\\frac{8+15-17}{2}=3]]. Лице: [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]] Проверка: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Пример 4: правоъгълен триъгълник 7-24-25" },
          { "kind": "p", "text": "Дадено [[a=7]], [[b=24]], [[c=25]]. Полупериметър: [[s=\\frac{7+24+25}{2}=28]]. Вътрешен радиус: [[r=\\frac{7+24-25}{2}=3]]. Лице: [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]] Проверка: [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "Сравнение на решените примери" }
        ],
        "table": {
          "headers": ["Триъгълник", "Катет a", "Катет b", "Хипотенуза c", "Вътрешен радиус r", "Полупериметър s", "Лице K"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Приложения в реалния живот на лицето на правоъгълен триъгълник от вътрешния радиус и полупериметъра",
        "blocks": [
          { "kind": "p", "text": "Дванадесет решени ситуации пренасят формулата от страницата в работилницата, обекта и студиото. Всяка назовава правоъгълен триъгълен панел, секция, профил или опростен модел, прекарва вътрешния радиус и полупериметъра през формулата и заявява допускането зад числата. Това са опростени правоъгълни триъгълни модели: не всеки реален прозорец, покрив, градина, рампа, платно или парцел образува точен правоъгълен триъгълник, а неправилен обект трябва да се раздели на по-прости форми, преди формулата да се приложи. Лицето описва само плоската геометрична повърхност; то никога не установява само по себе си конструктивна якост, товароносимост или строителна безопасност." },
          { "kind": "h3", "text": "Пример 1: триъгълен стъклен прозорец" },
          { "kind": "p", "text": "Триъгълен стъклен прозорец има страни [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Полупериметър: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Вътрешен радиус: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Лице: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]] Резултатът представя плоската триъгълна стъклена повърхност преди изваждане на допуска за рамката. Допускане: стъклото е истински правоъгълен триъгълник; размерите на рамката се обработват отделно." },
          { "kind": "h3", "text": "Пример 2: стоманена скоба" },
          { "kind": "p", "text": "Триъгълна стоманена пластина за скоба има страни [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Полупериметър: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. Вътрешен радиус: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. Лице: [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]] Това е лицето на плоската пластина и не установява конструктивната ѝ якост. Допускане: заготовката за скобата е изрязана като правоъгълен триъгълник; отворите за болтове и огъванията са изключени." },
          { "kind": "h3", "text": "Пример 3: покривна опора" },
          { "kind": "p", "text": "Правоъгълна триъгълна покривна опора има страни [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Полупериметър: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. Вътрешен радиус: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. Лице: [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]] Формулата измерва плоската триъгълна опорна секция, полезно за оценка на материалите. Допускане: секцията е моделирана като правоъгълен триъгълник; цялостната геометрия на покрива може да се различава." },
          { "kind": "h3", "text": "Пример 4: градинска секция" },
          { "kind": "p", "text": "Опростена правоъгълна триъгълна градинска секция има страни [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Полупериметър: [[s=28\\text{ m}]]. Вътрешен радиус: [[r=3\\text{ m}]]. Лице: [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]] Лицето помага за оценка на триъгълната озеленителна секция, например при поръчка на трева или мулч. Допускане: границите на лехата са прави и се срещат под прав ъгъл." },
          { "kind": "h3", "text": "Пример 5: профил на рампа" },
          { "kind": "p", "text": "Опростен страничен профил на рампа има страни [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]]. Полупериметър: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. Вътрешен радиус: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. Лице: [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]] Това измерва триъгълния страничен профил, а не наклонената повърхност на рампата. Допускане: профилът е моделиран с прав ъгъл в основата." },
          { "kind": "h3", "text": "Пример 6: шаблон от шперплат" },
          { "kind": "p", "text": "Правоъгълен триъгълен шаблон от шперплат има страни [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Полупериметър: [[s=24\\text{ cm}]]. Вътрешен радиус: [[r=4\\text{ cm}]]. Лице: [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]] Изчислението оценява плоската материална площ преди отпадъците от рязане. Допускане: шаблонът е истински правоъгълен триъгълник; ширината на триона и обрезките са допълнително." },
          { "kind": "h3", "text": "Пример 7: указателен панел" },
          { "kind": "p", "text": "Триъгълен указателен панел има страни [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Полупериметър: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. Вътрешен радиус: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. Лице: [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]] Това представя плоската печатна повърхност на панела. Допускане: лицето на панела е плоско и правоъгълно триъгълно; монтажните елементи са изключени." },
          { "kind": "h3", "text": "Пример 8: геодезическа секция" },
          { "kind": "p", "text": "Опростена правоъгълна триъгълна земна секция има страни [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Полупериметър: [[s=45\\text{ m}]]. Вътрешен радиус: [[r=4\\text{ m}]]. Лице: [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]] Формулата изчислява лицето на измерената триъгълна секция. Допускане: секцията е моделирана с прав ъгъл; неправилен парцел се нуждае от разделяне на по-прости форми." },
          { "kind": "h3", "text": "Пример 9: платнено платно" },
          { "kind": "p", "text": "Правоъгълен триъгълен платнен панел има страни [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Полупериметър: [[s=30\\text{ ft}]]. Вътрешен радиус: [[r=5\\text{ ft}]]. Лице: [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]] Резултатът изключва шевове, подгъви и материални допуски. Допускане: платното е моделирано плоско; истинските платна се извиват под натоварване." },
          { "kind": "h3", "text": "Пример 10: индустриален панел" },
          { "kind": "p", "text": "Правоъгълен триъгълен индустриален панел има страни [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Полупериметър: [[s=66\\text{ m}]]. Вътрешен радиус: [[r=5\\text{ m}]]. Лице: [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]] Резултатът описва плоския геометричен панел, а не конструктивното му поведение. Допускане: панелът е моделиран като правоъгълен триъгълник; дебелината и крепежите са отделна грижа." },
          { "kind": "h3", "text": "Пример 11: фронтон на склад" },
          { "kind": "p", "text": "Опростена фронтонна секция на склад има страни [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Полупериметър: [[s=91\\text{ ft}]]. Вътрешен радиус: [[r=6\\text{ ft}]]. Лице: [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]] Резултатът оценява триъгълната крайна секция, например при ценообразуване на облицовка. Допускане: фронтонът е моделиран като правоъгълен триъгълник." },
          { "kind": "h3", "text": "Пример 12: производствен панел" },
          { "kind": "p", "text": "Правоъгълен триъгълен производствен панел има страни [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]]. Полупериметър: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. Вътрешен радиус: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. Лице: [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]] Този метод изчислява плоското триъгълно лице на панела директно от измерванията на кръга и границата му. Допускане: ръбовете на панела са прави и се срещат под прав ъгъл." },
          { "kind": "h3", "text": "Сравнение на практическите примери" }
        ],
        "table": {
          "headers": ["Практическо приложение", "Катет a", "Катет b", "Хипотенуза c", "Вътрешен радиус r", "Полупериметър s", "Изчислено лице", "Мерна единица"],
          "rows": [
            ["Стъклен прозорец", "3", "4", "5", "1", "6", "6", "m²"],
            ["Стоманена скоба", "5", "12", "13", "2", "15", "30", "cm²"],
            ["Покривна опора", "8", "15", "17", "3", "20", "60", "ft²"],
            ["Градинска секция", "7", "24", "25", "3", "28", "84", "m²"],
            ["Профил на рампа", "9", "12", "15", "3", "18", "54", "m²"],
            ["Шаблон от шперплат", "12", "16", "20", "4", "24", "96", "cm²"],
            ["Указателен панел", "20", "21", "29", "6", "35", "210", "cm²"],
            ["Геодезическа секция", "9", "40", "41", "4", "45", "180", "m²"],
            ["Платнено платно", "15", "20", "25", "5", "30", "150", "ft²"],
            ["Индустриален панел", "11", "60", "61", "5", "66", "330", "m²"],
            ["Фронтон на склад", "13", "84", "85", "6", "91", "546", "ft²"],
            ["Производствен панел", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "Защо формулата с вътрешния радиус дава същото лице като формулата с катетите?",
        "blocks": [
          { "kind": "p", "text": "Две различни формули, един триъгълник, едно лице. Започнете с [[K=rs]] и стандартното лице на правоъгълен триъгълник [[K=\\frac{ab}{2}]], което налага [[[\\boxed{rs=\\frac{ab}{2}}]]] Двете страни измерват една и съща затворена повърхност с различна геометрична информация: едната чете вписания кръг и границата, другата чете двата перпендикулярни катета." },
          { "kind": "h3", "text": "Числово сравнение с триъгълник 3-4-5" },
          { "kind": "p", "text": "Метод с вътрешния радиус: [[r=1]], [[s=6]], така че [[K=1\\times6=6]]. Метод с катетите: [[K=\\frac{3\\times4}{2}=6]]. Отговорите съвпадат, защото вътрешният радиус и полупериметърът кодират същата информация за страните като катетите: [[r=\\frac{a+b-c}{2}]] и [[s=\\frac{a+b+c}{2}]] са изградени от [[a]], [[b]] и [[c]], затова произведението им трябва да възстанови лицето, което катетите описват. Съвпадението тук не е случайност; то е алгебра." },
          { "kind": "h3", "text": "Кога методът с вътрешния радиус е по-полезен?" },
          { "kind": "p", "text": "Методът с вътрешния радиус печели, когато r и s са вече под ръка. Задачите по геометрия за вписани кръгове подават вътрешния радиус директно. Доказателство, което се нуждае от лицето, изразено чрез измервания на кръга, използва [[K=rs]] естествено. Състезателните задачи често предоставят полупериметъра като част от условието. А като кръстосана проверка изчисляването на лицето по два независими начина улавя аритметични грешки, които един метод би скрил. Във всеки случай смисълът е удобството на входа: тръгнете от измерванията, които имате." },
          { "kind": "h3", "text": "Кога формулата с катетите е по-проста?" },
          { "kind": "p", "text": "Ако двата перпендикулярни катета са вече известни, [[K=\\frac{ab}{2}]] обикновено е по-пряко: едно умножение, едно разполовяване, без междинни r или s за изчисляване. Извеждането първо на вътрешния радиус и полупериметъра и после умножаването им добавя две стъпки, които не променят нищо. Методът с полупериметъра не винаги е най-лесният път; той е най-добрият път, когато вписаният кръг или границата е естествената отправна точка, и отклонение, когато катетите са пред вас." }
        ]
      },
      "sec-heron": {
        "h2": "Каква е разликата между формулата на Херон и лицето = вътрешен радиус × полупериметър?",
        "blocks": [
          { "kind": "p", "text": "Формулата на Херон изчислява лицето от трите дължини на страни: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Тя изисква полупериметъра, но не и вътрешния радиус, и работи за всеки валиден триъгълник. Формулата с вътрешния радиус [[[\\boxed{K=rs}]]] се нуждае от вътрешния радиус и полупериметъра вместо трите страни. Разликата е във входовете, не в геометрията: и двете връщат същото затворено лице, защото двете формули са свързани чрез [[r=\\frac{K}{s}]]. Формулата на Херон е естественият избор, когато трите страни са известни и няма данни за кръг; формулата с вътрешния радиус е естествена, когато вписаният кръг е част от картината." },
          { "kind": "h3", "text": "Решено сравнение" },
          { "kind": "p", "text": "Използвайте триъгълник 3-4-5. Формулата на Херон: [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]] Формулата с вътрешния радиус: [[K=1\\times6]], [[[\\boxed{K=6}]]] Отговорите съвпадат, защото изразът на Херон се опростява, чрез същото разлагане на три триъгълника, до [[r\\times s]]: коренът квадратен от [[s(s-a)(s-b)(s-c)]] е равен на [[rs]], когато r и s идват от един и същ триъгълник. Не бъркайте обаче двата инструмента: формулата на Херон никога не пита за вътрешния радиус, а кратката формула за вътрешния радиус [[r=\\frac{a+b-c}{2}]] принадлежи само на правоъгълните триъгълници." }
        ]
      },
      "sec-consistency": {
        "h2": "Как да проверим дали вътрешният радиус и полупериметърът са валидни",
        "blocks": [
          { "kind": "p", "text": "Калкулаторът приема две стойности и ги умножава, но произведението е лице на правоъгълен триъгълник само когато двете стойности описват един и същ триъгълник. Проверките по-долу отделят валидните входове от измамниците." },
          { "kind": "h3", "text": "Основни условия за входа" },
          { "kind": "p", "text": "И двата входа трябва да са положителни: [[r>0]] и [[s>0]]. Дължината не може да е нула или отрицателна, затова неположителен запис няма геометричен смисъл. Нулата би срутила триъгълника до линия без лице; отрицателната стойност не описва нищо. Измерете наново или изведете наново всеки вход, който не издържи този тест." },
          { "kind": "h3", "text": "Полупериметърът трябва да е по-голям от вътрешния радиус" },
          { "kind": "p", "text": "Във валиден триъгълник полупериметърът засенчва вътрешния радиус. От [[K=rs]] и [[K=\\frac{ab}{2}]] с положителни катети, както и от геометрията на вписания кръг, побран вътре в триъгълника, [[s]] винаги е осезаемо по-голямо от [[r]]: за триъгълника 3-4-5 това е 6 срещу 1; за 5-12-13 е 15 срещу 2. Стойностите трябва да съответстват и на валиден набор от три страни, затова това сравнение е бърз филтър, а не цялата проверка. Вътрешен радиус, по-голям от полупериметъра, не може да дойде от никой триъгълник." },
          { "kind": "h3", "text": "Задълбочена проверка за съгласуваност на правоъгълен триъгълник" },
          { "kind": "p", "text": "За по-строг тест правоъгълният триъгълник трябва да удовлетворява [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]], приблизително [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]] Идеята е проста: от дадени r и s двата катета трябва да са положителните решения на квадратно уравнение, изградено от [[a+b=s+r]] и [[ab=2rs]], а това квадратно уравнение има реални решения само когато дискриминантата му остане неотрицателна. Условието за дискриминантата се опростява точно до тази граница. Проверете 3-4-5: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], валидно. Това е незадължително усъвършенстване за внимателна работа, а не задължителна част от начинаещото изчисление." },
          { "kind": "h3", "text": "Какво се случва, когато входовете са несъгласувани?" },
          { "kind": "p", "text": "Умножаването на две положителни числа винаги произвежда числов резултат, но това не доказва, че те представляват вътрешния радиус и полупериметъра на един и същ правоъгълен триъгълник. r от един триъгълник, съчетано със s от друг, дава произведение без геометричен смисъл, колкото и подредена да изглежда аритметиката. Освен ако реализацията на калкулатора не е тествана за поведение на проверка, не приемайте, че той проверява връзката: изпълнете горните проверки сами, преизчислете r и s от страните, когато страните са известни, и кръстосано проверете лицето с формулата чрез катетите." }
        ]
      },
      "sec-units": {
        "h2": "Как мерните единици влияят на изчисленията с вътрешния радиус и полупериметъра",
        "blocks": [
          { "kind": "p", "text": "Вътрешният радиус и полупериметърът са дължини, затова следват същите правила за единици като всяко друго измерване на дължина. Квадратната единица в отговора идва от умножаването на две единици за дължина, което прави съгласуваните единици цялата игра." },
          { "kind": "h3", "text": "Защо двата входа трябва да използват съвместими единици?" },
          { "kind": "p", "text": "Произведението [[K=r\\times s]] умножава дължина по дължина. Ако r е в сантиметри, а s е в метри, произведението смесва двата мащаба и числото няма чист смисъл. Първо преобразувайте, така че двата входа да споделят една единица: метри, сантиметри, милиметри, футове, инчове или ярдове, но една и съща и за двата. Калкулаторът има избор на единици именно заради това: настройте ги, преди да въведете числата." },
          { "kind": "h3", "text": "Решен пример за преобразуване на единици" },
          { "kind": "p", "text": "Дадено [[r=10\\text{ cm}]] и [[s=1\\text{ m}]]. Преобразувайте полупериметъра: [[1\\text{ m}=100\\text{ cm}]]. Тогава [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]] Алтернативно преобразувайте вътрешния радиус: [[10\\text{ cm}=0.1\\text{ m}]], тогава [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]] И двата отговора описват едно и също лице, тъй като [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. Преобразувайте първо, умножете после, и всеки път на единиците стига на правилното място." },
          { "kind": "h3", "text": "Защо резултатът се изразява в квадратни единици?" },
          { "kind": "p", "text": "Лицето брои единичните квадрати, покриващи повърхността: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. Единицата винаги е единицата за дължина на квадрат, защото произведението на две дължини е броене на квадрати. Отчитането на лице като обикновена дължина, например 1000 cm, е категорийна грешка: 1000 cm е дължина, докато 1000 cm² е повърхност." },
          { "kind": "h3", "text": "Работа с десетични стойности" },
          { "kind": "p", "text": "Формулата се справя с десетичните без модификация. Дадено [[r=2.5]] и [[s=8.4]]: [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]] Цели числа, десетични и фини работилнични измервания преминават през едно и също умножение. Пазете пълната точност по време на изчислението и закръгляйте само крайния отговор до точността, която измерванията оправдават." }
        ]
      },
      "sec-mistakes": {
        "h2": "Чести грешки при изчисляване на лице на правоъгълен триъгълник от полупериметъра",
        "blocks": [
          { "kind": "p", "text": "Почти всеки грешен отговор в тази тема води началото си от объркан надпис, а не от лоша аритметика. Шестнадесетте грешки по-долу са тези, които се появяват отново и отново, всяка със своята причина и поправка." },
          { "kind": "h3", "text": "1. Объркване на полупериметъра с пълния периметър" },
          { "kind": "p", "text": "Въвеждането на [[P=12]], където принадлежи [[s=6]], удвоява отговора: [[1\\times12=12]] вместо 6. Грешката се случва, защото ежедневният език казва периметър, докато формулата иска половината му. Поправка: винаги разполовявайте сбора на границата, преди да го въведете, и проверете дали въведеното s е по-малко от периметъра." },
          { "kind": "h3", "text": "2. Използване на радиуса на описания кръг вместо вътрешния радиус" },
          { "kind": "p", "text": "Радиусът на описания кръг на триъгълника 3-4-5 е [[R=\\frac{5}{2}=2.5]]; използването му дава [[2.5\\times6=15]], почти тройно на истинското лице. Грешката идва от това, че двата кръга споделят думата радиус. Поправка: потвърдете, че радиусът принадлежи на кръга вътре в триъгълника, докосващ трите страни, а не на този през върховете." },
          { "kind": "h3", "text": "3. Забравяне да се изчисли правилно полупериметърът" },
          { "kind": "p", "text": "Събирането само на две страни или деленето на всяка страна на две преди събирането дава грешно s. За 3-4-5 събирането на 3 + 4 и деленето дава 3.5, а [[1\\times3.5=3.5]] е безсмислено. Поправка: първо съберете трите страни, после разделете веднъж: [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. Повторно делене на крайния резултат на две" },
          { "kind": "p", "text": "След [[K=1\\times6=6]] допълнителното разполовяване дава 3. Навикът идва от формулата с катетите, където деленето е изрично. Поправка: помнете, че половините вече са погълнати в полупериметъра; [[K=r\\times s]] е завършено." },
          { "kind": "h3", "text": "5. Използване на грешна формула за вътрешния радиус на правоъгълен триъгълник" },
          { "kind": "p", "text": "Налучкването на [[r=\\frac{c-a-b}{2}]] или [[r=\\frac{a+b}{2}]] дава грешен радиус. За 3-4-5 [[\\frac{5-3-4}{2}=-1]] дори не е дължина. Поправка: използвайте [[r=\\frac{a+b-c}{2}]] с a и b като катети и c като хипотенуза, точно в този ред." },
          { "kind": "h3", "text": "6. Прилагане на кратката формула за вътрешния радиус на правоъгълен триъгълник върху обикновен триъгълник" },
          { "kind": "p", "text": "Кратката формула се опира на правия ъгъл, затова върху общ триъгълник тя изчислява число без геометричен смисъл. Поправка: за неправоъгълни триъгълници намерете вътрешния радиус от [[r=\\frac{K}{s}]] или формула, съобразена с известните измервания, никога от [[r=\\frac{a+b-c}{2}]]." },
          { "kind": "h3", "text": "7. Въвеждане на вътрешен радиус и полупериметър от различни триъгълници" },
          { "kind": "p", "text": "Вземането на r = 1 от триъгълник 3-4-5 и s = 15 от триъгълник 5-12-13 дава 15, произведение, което не описва истински триъгълник. Грешката се случва, когато стойностите се копират от различни решени примери или различни чертежи. Поправка: изведете или измерете двата входа от един и същ триъгълник, преди да умножите." },
          { "kind": "h3", "text": "8. Смесване на сантиметри и метри" },
          { "kind": "p", "text": "Умножаването на r = 10 cm по s = 1 m без преобразуване дава 10 без чист смисъл. Поправка: първо преобразувайте към една единица: [[1\\text{ m}=100\\text{ cm}]], после [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. Отчитане на резултата в линейни единици" },
          { "kind": "p", "text": "Лице от 6 m² не е 6 m. Грешката обикновено идва от копиране на входната единица без да се повдигне на квадрат. Поправка: пишете квадратната единица с числото всеки път: m², cm², ft²." },
          { "kind": "h3", "text": "10. Въвеждане на нулеви или отрицателни измервания" },
          { "kind": "p", "text": "Дължините са положителни. Нулата срутва триъгълника до линия без лице, а отрицателните дължини нямат геометричен смисъл тук. Поправка: измерете наново или изведете наново входа; отхвърляйте неположителни стойности, преди да изчислявате." },
          { "kind": "h3", "text": "11. Объркване на центъра на вписания кръг с центъра на описания кръг" },
          { "kind": "p", "text": "Центърът на вписания кръг е срещната точка на ъглополовящите; центърът на описания кръг е срещната точка на симетралите на страните. За правоъгълен триъгълник центърът на описания кръг стои в средата на хипотенузата, съвсем различна точка. Объркването им води до измерване на грешния радиус. Поправка: центърът на вписания кръг [[I]] е вътре в триъгълника на равно разстояние от страните, а не от върховете." },
          { "kind": "h3", "text": "12. Предположението, че вписаният кръг докосва само две страни" },
          { "kind": "p", "text": "Кръг, заклещен в ъгъл, докосва две страни, но това не е вписаният кръг. Вписаният кръг докосва и трите, а доказателството за лицето се нуждае от трите допирни точки. Поправка: потвърдете три точки на допир, по една на страна, преди да третирате радиус като вътрешен радиус." },
          { "kind": "h3", "text": "13. Забравяне, че радиусът среща всяка допирателна страна перпендикулярно" },
          { "kind": "p", "text": "Аргументът за общата височина в доказателството зависи от [[r\\perp a]], [[r\\perp b]], [[r\\perp c]]. Наклонена отсечка от центъра на вписания кръг до страна е по-дълга от r и не може да служи за височина. Поправка: измервайте вътрешния радиус по перпендикуляра към страната, никога по диагонал." },
          { "kind": "h3", "text": "14. Объркване на вътрешния радиус с диаметъра" },
          { "kind": "p", "text": "Въвеждането на пълната ширина на вписания кръг като r удвоява радиуса и удвоява лицето. За триъгълника 3-4-5 въвеждането на 2 вместо 1 дава [[2\\times6=12]]. Поправка: вътрешният радиус се простира от центъра до една страна, половината от пълната ширина на кръга." },
          { "kind": "h3", "text": "15. Неправилно използване на формулата на Херон" },
          { "kind": "p", "text": "Честите пропуски включват забравяне на корена квадратен, записване на [[s(s+a)(s+b)(s+c)]] с плюсове или подаване на пълния периметър във формулата. За 3-4-5 пропускането на корена дава 36 вместо 6. Поправка: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], с полупериметъра, знаците минус и корена на място." },
          { "kind": "h3", "text": "16. Предположението, че числовият резултат автоматично доказва геометричната съгласуваност на входовете" },
          { "kind": "p", "text": "Които и да е две положителни числа се умножават, затова калкулаторът винаги връща нещо. Това нещо е лице на правоъгълен триъгълник само когато r и s наистина принадлежат на един триъгълник. Поправка: изпълнете проверките за съгласуваност, преизчислете r и s от страните, когато е възможно, и кръстосано проверете с формулата чрез катетите, преди да се доверите на числото." },
          { "kind": "h3", "text": "Грешно срещу правилно: конкретен пример" },
          { "kind": "p", "text": "Използвайте [[r=1]], [[s=6]]. Правилно: [[K=1\\times6=6]]. Неправилно делене на две отново: [[K=\\frac{1\\times6}{2}=3]], грешно, защото разполовяването вече е вътре в полупериметъра. Неправилно въвеждане на пълния периметър 12 вместо полупериметъра 6: [[K=1\\times12=12]], двойно на истинското лице. Аритметиката изглежда уверена и в трите случая; само геометрията ги различава." }
        ]
      },
      "sec-verify": {
        "h2": "Как да проверим дали лицето на нашия правоъгълен триъгълник е правилно",
        "blocks": [
          { "kind": "p", "text": "Шест независими проверки, всички демонстрирани върху триъгълника 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]]). Съгласието между различни пътища е най-силното доказателство, че отговорът е верен, както в домашното, така и в практическото измерване." },
          { "kind": "h3", "text": "Метод 1: Проверете основната формула" },
          { "kind": "p", "text": "Пуснете [[K=r\\times s]] наново: [[K=1\\times6=6]]. Второ минаване с наново въведените числа улавя правописни грешки и сбъркани цифри." },
          { "kind": "h3", "text": "Метод 2: Изчислете полупериметъра от трите страни" },
          { "kind": "p", "text": "Преизчислете [[s=\\frac{a+b+c}{2}]] от страните: [[s=\\frac{3+4+5}{2}=6]]. Ако преизчисленото s се различава от въведеното, входът е грешен и произведението трябва да се направи наново." },
          { "kind": "h3", "text": "Метод 3: Изчислете вътрешния радиус от правоъгълния триъгълник" },
          { "kind": "p", "text": "Преизчислете [[r=\\frac{a+b-c}{2}]]: [[r=\\frac{3+4-5}{2}=1]]. Несъответствие с въведеното r означава, че радиусът е дошъл от друг триъгълник или от неправилно приложена формула." },
          { "kind": "h3", "text": "Метод 4: Проверете със стандартната формула чрез катетите" },
          { "kind": "p", "text": "Изчислете [[K=\\frac{ab}{2}]]: [[K=\\frac{3\\times4}{2}=6]]. Този път използва съвсем различни входове, затова съгласието с [[rs]] потвърждава и входовете, и аритметиката." },
          { "kind": "h3", "text": "Метод 5: Проверете с формулата на Херон" },
          { "kind": "p", "text": "Изчислете [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Формулата на Херон упражнява страните и полупериметъра заедно, улавяйки грешки в надписването на страните, които другите проверки може да пропуснат." },
          { "kind": "h3", "text": "Метод 6: Проверете Питагоровата теорема" },
          { "kind": "p", "text": "Потвърдете [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Това проверява разпознаването на страните зад всяко друго изчисление; грешна хипотенуза означава, че страна е надписана погрешно и r, s и K трябва да се изградят наново." }
        ]
      },
      "sec-applications": {
        "h2": "Практически приложения на формулата с вътрешния радиус и полупериметъра",
        "blocks": [
          { "kind": "p", "text": "Същият модел с два входа се появява навсякъде, където триъгълен панел или секция се нуждае от измерване, а данните за вписания кръг са удобната отправна точка. Стъклар оразмерява прозорец от дължините на ръбовете му; производител чете катетите на заготовка за скоба; геодезист свежда ъгъл на парцел до три прави страни. От тези страни идват вътрешният радиус и полупериметърът, а едно умножение назовава лицето. Четирите панела по-долу показват модела в различни мащаби: стъклен прозорец (6 m²), покривна опора (60 ft²), градинска секция (84 m²) и стоманена пластина (30 cm²), всеки означен с вътрешния си радиус, полупериметъра си и полученото лице." }
        ],
        "imgAlt": "Четири панела: стъклен прозорец 6 m2, покривна опора 60 ft2, градинска секция 84 m2, стоманена пластина 30 cm2",
        "figcaption": "Четири реални употреби: стъклен прозорец, покривна опора, градинска секция и стоманена пластина."
      },
      "sec-related": {
        "h2": "Разгледайте свързаните калкулатори за правоъгълен триъгълник",
        "blocks": [
          { "kind": "p", "text": "Различните измервания изискват различни калкулатори." }
        ]
      },
      "sec-faq": {
        "h2": "Често задавани въпроси",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Две измервания, едно произведение",
        "blocks": [
          { "kind": "p", "text": "Вътрешен радиус и полупериметър стигат. Умножете ги и затворената повърхност е назована. Доказателството с трите триъгълника показва защо след умножението не следва деление, аргументът с допирателните отсечки показва защо правоъгълният триъгълник получава кратката си формула за вътрешния радиус, а формулата с катетите и формулата на Херон стоят готови да проверят всеки отговор." },
          { "kind": "p", "text": "Работният навик е прост: потвърдете, че двата входа описват един и същ триъгълник, уеднаквете единиците, пазете десетичните незакръглени до края и проверявайте чрез втори метод. С тези навици [[K=r\\times s]] е едно от най-надеждните изчисления на лице в геометрията." }
        ]
      }
    }
  }
};
