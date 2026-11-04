// semiperimeterGuideTranslations.b5id.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for Indonesian (id).
export const B5_ID = {
  "id": {
    "tocHeading": "Navigasi Bagian",
    "tocItems": {
      "sec-intro": "Cara Menghitung Setengah Keliling Segitiga Siku-Siku",
      "sec-geometry": "Apa Itu Segitiga Siku-Siku?",
      "sec-meaning": "Apa Itu Setengah Keliling Segitiga Siku-Siku?",
      "sec-formula": "Rumus Setengah Keliling Segitiga Siku-Siku",
      "sec-calculator": "Cara Menggunakan Kalkulator Setengah Keliling Segitiga Siku-Siku",
      "sec-examples": "Contoh Langkah demi Langkah Setengah Keliling Segitiga Siku-Siku",
      "sec-practical": "Penerapan Setengah Keliling Segitiga Siku-Siku dalam Kehidupan Nyata",
      "sec-inradius": "Bagaimana Setengah Keliling Berhubungan dengan Jari-Jari Lingkaran Dalam Segitiga Siku-Siku?",
      "sec-heron": "Bagaimana Setengah Keliling Digunakan dalam Rumus Heron?",
      "sec-vs-perimeter": "Apa Perbedaan Keliling dan Setengah Keliling?",
      "sec-missing-side": "Cara Menghitung Setengah Keliling Saat Satu Sisi Hilang",
      "sec-properties": "Sifat Penting Setengah Keliling Segitiga Siku-Siku",
      "sec-units": "Memahami Satuan Ukuran dalam Perhitungan Setengah Keliling",
      "sec-mistakes": "Kesalahan Umum Saat Menghitung Setengah Keliling Segitiga Siku-Siku",
      "sec-verify": "Cara Memeriksa Apakah Jawaban Setengah Keliling Anda Benar",
      "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "sec-faq": "Pertanyaan yang Sering Diajukan",
      "sec-conclusion": "Setengah Batas, Pemahaman Penuh"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Menghitung Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Jumlahkan ketiga sisi segitiga siku-siku, lalu bagi totalnya dengan dua." },
          { "kind": "p", "text": "Itulah seluruh perhitungannya, dan kalkulator ini melakukannya untuk setiap segitiga siku-siku setelah Anda memasukkan kedua kaki dan hipotenusa. Tiga ukuran sisi diperlukan karena segitiga memiliki tiga sisi, dan hipotenusa harus disertakan: hipotenusa adalah salah satu dari ketiga sisi itu meskipun tidak pernah menyentuh sudut siku-siku. Total dibagi dua karena setengah keliling didefinisikan sebagai tepat setengah dari keliling penuh, sebuah besaran yang muncul berulang kali dalam geometri segitiga." },
          { "kind": "p", "text": "Contoh cepat menunjukkan idenya. Diketahui [[a=3]], [[b=4]], dan [[c=5]]:" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "Keliling penuhnya adalah 12 satuan, sehingga setengah kelilingnya adalah 6 satuan. Perhatikan bahwa setengah keliling adalah pengukuran panjang, bukan pengukuran luas: ini adalah panjang, dinyatakan dalam meter, kaki, atau satuan biasa, tidak pernah dalam satuan persegi. Setengah keliling berguna setiap kali suatu rumus membutuhkan setengah keliling, yang terjadi dalam rumus Heron untuk luas, dalam hubungan jari-jari lingkaran dalam, dan dalam beberapa pembuktian geometris di mana keliling penuh hanya akan menghalangi." }
        ]
      },
      "sec-geometry": {
        "h2": "Apa Itu Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Sebelum pembagian dua dilakukan, ketiga sisi harus diberi label dengan benar. Simbol-simbol di bawah ini tetap sama di seluruh panduan, dan kalkulator menggunakan nama yang sama." },
          { "kind": "h3", "text": "Definisi Segitiga Siku-Siku" },
          { "kind": "p", "text": "Segitiga siku-siku adalah segitiga yang memiliki satu sudut dalam berukuran tepat 90 derajat. Ia memiliki tiga titik sudut, tiga sisi, dua sudut lancip, dan satu sudut siku-siku, biasanya ditandai dengan kotak kecil. Dua sisi yang membentuk sudut siku-siku disebut kaki; sisi yang berhadapan dengan sudut siku-siku disebut hipotenusa. Karena jumlah sudut segitiga mana pun adalah 180 derajat, [[A+B+C=180^\\circ]], dan dengan [[C=90^\\circ]] maka diperoleh [[[\\boxed{A+B=90^\\circ}]]]: kedua sudut lancip saling komplementer, sehingga mengetahui salah satunya menentukan yang lain. Gambaran yang benar penting karena rumus setengah keliling memperlakukan setiap sisi sebagai sisi batas, dan sisi yang salah label merusak total sebelum pembagian dimulai." },
          { "kind": "h3", "text": "Apa Saja Kedua Kaki Itu?" },
          { "kind": "p", "text": "Kaki [[a]] dan kaki [[b]] adalah dua sisi yang bertemu di titik sudut siku-siku, tegak lurus satu sama lain. Salah satunya bisa digambar horizontal atau vertikal tergantung orientasi segitiga; yang mendefinisikannya adalah sudut 90 derajat yang mereka bentuk, bukan arahnya di halaman. Keduanya berbeda dari hipotenusa dalam posisi dan panjang: setiap kaki menyentuh sudut siku-siku, dan setiap kaki lebih pendek dari hipotenusa. Dalam pekerjaan setengah keliling, perannya sederhana: keduanya adalah sisi batas, sehingga keduanya masuk ke jumlah yang dibagi dua." },
          { "kind": "h3", "text": "Apa Itu Hipotenusa?" },
          { "kind": "p", "text": "Hipotenusa adalah sisi yang berhadapan dengan sudut siku-siku, selalu sisi terpanjang segitiga. Ia tidak pernah membentuk sudut siku-siku; ia melintasi sudut itu, menghubungkan ujung-ujung jauh kedua kaki. Ia berbeda dari kaki dalam posisi maupun panjang: kaki bertemu pada 90 derajat, sedangkan hipotenusa bertemu setiap kaki pada sudut lancip. Hipotenusa melengkapi batas segitiga, itulah mengapa ia harus disertakan dalam perhitungan setengah keliling. Ketika kedua kaki diketahui, teorema Pythagoras menemukannya: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Cara Mengenali Label Sisi yang Benar" },
          { "kind": "p", "text": "[[a]] dan [[b]] adalah dua sisi yang bertemu pada 90 derajat, dan [[c]] berhadapan dengan sudut siku-siku. Dalam segitiga siku-siku yang tidak merosot, [[c]] adalah sisi terpanjang. Tanda sudut siku-siku memberi tahu sisi mana yang merupakan [[c]]: yaitu sisi yang tidak menyentuh titik sudut tersebut. Pemeriksaan urutan cepat membantu: urutkan ketiga angka, dan yang terbesar harus berperan sebagai [[c]]. Jika sisi terbesar tidak duduk berhadapan dengan sudut kotak, labelnya salah, dan setengah keliling yang dibangun di atasnya juga akan salah." },
          { "kind": "h3", "text": "Mengapa Setengah Keliling Bergantung pada Ketiga Sisi?" },
          { "kind": "p", "text": "Setengah keliling diturunkan dari keliling penuh, dan keliling penuh menghitung setiap sisi batas. Meskipun [[a]] dan [[b]] tegak lurus, hipotenusa tetap bagian dari batas luar segitiga: hipotenusa adalah sisi yang menutup bangun. Mengeluarkan [[c]] tidak memberi setengah keliling yang lebih pendek; ia memberi besaran yang berbeda dan salah. Untuk [[a=3]], [[b=4]], [[c=5]], menghilangkan hipotenusa menghasilkan [[(3+4)/2=3.5]], sedangkan setengah keliling yang benar adalah [[(3+4+5)/2=6]]. Selisih 2,5 satuan adalah bagian hipotenusa, dan tidak ada rumus benar yang bisa melewatkannya." }
        ],
        "imgAlt": "Segitiga siku-siku ABC: kaki a dan b, hipotenusa c, sudut siku-siku di C, dengan P = a+b+c dan s = (a+b+c)/2",
        "figcaption": "Segitiga ABC: kaki a dan b bertemu di sudut siku-siku C, hipotenusa c menutup batasnya, dan s = (a + b + c) / 2 adalah setengah keliling."
      },
      "sec-meaning": {
        "h2": "Apa Itu Setengah Keliling Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "h3", "text": "Definisi Setengah Keliling" },
          { "kind": "p", "text": "Setengah keliling adalah tepat setengah dari keliling penuh segitiga. Jika [[P]] adalah jarak penuh mengelilingi segitiga, maka setengah keliling [[s]] adalah [[[\\boxed{s=\\frac{P}{2}}]]] Untuk segitiga siku-siku, keliling penuhnya adalah [[P=a+b+c]], sehingga definisinya menjadi [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Ketiga panjang sisi dijumlahkan sebelum pembagian: jumlah itu mengumpulkan seluruh batas, dan pembagian dua membaginya menjadi setengah. Tidak ada yang terlewat dan tidak ada yang dihitung dua kali." },
          { "kind": "h3", "text": "Mengapa Disebut Setengah Keliling?" },
          { "kind": "p", "text": "Namanya menjelaskan dirinya sendiri setelah dipecah. <em>Semi</em> berarti setengah, dan <em>perimeter</em> berarti panjang batas seluruhnya. Digabungkan, setengah keliling berarti setengah dari keliling. Huruf [[s]] adalah simbol matematika standar, dan ia muncul dalam banyak rumus segitiga justru karena panjang batas yang dibelah dua sangat sering muncul. Ketika suatu rumus meminta [[s]], yang diminta adalah satu angka ini: setengah dari [[a+b+c]]." },
          { "kind": "h3", "text": "Apakah Setengah Keliling Mewakili Lintasan Fisik Setengah Batas?" },
          { "kind": "p", "text": "Ini adalah poin halus yang layak dipahami dengan benar. Setengah keliling adalah setengah dari total numerik ketiga panjang sisi, tetapi tidak selalu menggambarkan rute fisik kontinu yang mencakup setengah batas segitiga. Berjalan 6 satuan sepanjang sisi segitiga 3-4-5, misalnya, bisa berarti berjalan menyusuri kedua kaki (3 + 4 = 7 sudah terlalu jauh) atau satu kaki ditambah sebagian hipotenusa; tidak ada satu lintasan setengah jalan yang alami. Setengah keliling pada dasarnya adalah pengukuran geometris turunan, nilai antara yang mudah digunakan rumus, bukan jarak yang akan Anda ukur di tanah." },
          { "kind": "h3", "text": "Apakah Setengah Keliling Itu Panjang atau Luas?" },
          { "kind": "p", "text": "Setengah keliling adalah pengukuran satu dimensi: sebuah panjang. Jika panjang sisi dalam meter, [[s]] dalam meter; dalam sentimeter, maka dalam sentimeter; dalam kaki, maka dalam kaki; dalam inci, maka dalam inci. Ia tidak boleh dinyatakan dalam satuan persegi. Pembagian dua mengubah besar angka, bukan dimensinya: membelah panjang tetap menghasilkan panjang. Mencampuradukkan [[s]] dengan luas adalah salah satu kesalahan pemula yang paling umum, dan menjaga satuan tetap konsisten adalah cara paling sederhana untuk menghindarinya." },
          { "kind": "h3", "text": "Apakah Setengah Keliling Selalu Lebih Besar dari Sisi Terpanjang?" },
          { "kind": "p", "text": "Ya, untuk setiap segitiga valid yang tidak merosot, dan ketidaksamaan segitiga menunjukkan alasannya. Setiap segitiga memenuhi [[a+b>c]]: dua sisi yang lebih pendek bersama-sama melebihi sisi terpanjang. Tambahkan [[c]] ke kedua ruas dan diperoleh [[a+b+c>2c]]; bagi dua dan hasilnya adalah [[[\\boxed{s>c}]]] Untuk segitiga siku-siku ini berarti setengah keliling selalu lebih besar dari hipotenusa. Untuk 3-4-5, [[s=6]] melebihi [[c=5]]. Ini menjadi pemeriksaan kewarasan yang praktis: jika setengah keliling yang Anda hitung lebih kecil dari hipotenusa, label sisi atau aritmetikanya salah." }
        ]
      },
      "sec-formula": {
        "h2": "Rumus Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Dua bentuk rumus yang sama digunakan, tergantung pada apa yang diketahui. Bentuk ringkas berangkat dari keliling penuh:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Bentuk yang diperluas berangkat dari ketiga sisi:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Memahami Setiap Variabel" },
          { "kind": "p", "text": "[[s]] adalah setengah keliling, jawaban yang sedang dihitung. [[P]] adalah keliling penuh, panjang batas seluruhnya. [[a]] adalah kaki pertama dan [[b]] kaki kedua, dua sisi yang saling tegak lurus. [[c]] adalah hipotenusa, sisi terpanjang, berhadapan dengan sudut siku-siku. Jangan pernah menukar [[P]] dan [[s]]: satu adalah seluruh batas, yang lain adalah setengahnya." },
          { "kind": "h3", "text": "Mengapa Kita Membagi dengan Dua?" },
          { "kind": "p", "text": "Pembagian itulah yang membuat besaran ini menjadi <em>setengah</em> keliling, bukan keliling. Ambil [[a=3]], [[b=4]], [[c=5]]. Pertama hitung keliling penuh: [[P=3+4+5]], sehingga [[P=12]]. Lalu bagi dua: [[s=12/2]], menghasilkan [[[\\boxed{s=6}]]] Secara matematis, pembagian mengubah skala total batas menjadi nilai setengah yang diharapkan rumus seperti rumus Heron. Melewatkannya menjawab pertanyaan yang berbeda: keliling penuh, bukan setengah keliling." },
          { "kind": "h3", "text": "Mengapa Kita Tidak Bisa Hanya Menggunakan Kedua Kaki?" },
          { "kind": "p", "text": "Karena kaki saja bukan seluruh batas. Cara yang salah [[s=(3+4)/2]] menghasilkan 3,5, angka yang tidak memiliki makna geometris untuk segitiga ini: ia mengabaikan hipotenusa, yang merupakan sisi nyata dari bangun. Cara yang benar menjumlahkan ketiga sisi terlebih dahulu: [[s=(3+4+5)/2]], menghasilkan [[[\\boxed{s=6}]]] Jalan pintas yang menggoda adalah membelah setiap sisi lalu menjumlahkan, [[1.5+2+2.5=6]]: aritmetikanya kebetulan benar di sini karena pembagian menyebar atas penjumlahan, tetapi ia mengaburkan struktur rumus dan mengundang kesalahan. Jumlahkan dulu, lalu bagi sekali." },
          { "kind": "h3", "text": "Bagaimana Keliling dan Setengah Keliling Berhubungan?" },
          { "kind": "p", "text": "Keduanya adalah pengukuran yang sama pada dua skala. Menggandakan setengah keliling memulihkan keliling, dan membelah keliling memulihkan setengah keliling:" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Salah satu nilai bisa dipulihkan ketika yang lain diketahui. Jika soal menyatakan kelilingnya 30, setengah kelilingnya langsung 15; jika perhitungan menghasilkan [[s=20]], keliling penuhnya adalah 40. Hubungan dua arah ini juga merupakan alat verifikasi: setelah menghitung [[s]] dari sisi-sisi, menggandakannya harus menghasilkan kembali jumlah sisi." }
        ]
      },
      "sec-calculator": {
        "h2": "Cara Menggunakan Kalkulator Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Kalkulator di halaman ini memiliki satu tugas: ia menerima tiga panjang sisi segitiga siku-siku dan mengembalikan setengah keliling, sambil menunjukkan setiap langkah pengerjaannya. Langkah-langkah di bawah ini persis sesuai dengan antarmuka yang ada." },
          { "kind": "p", "text": "<strong>Langkah 1: Temukan Kalkulator Setengah Keliling.</strong> Letaknya di dekat bagian atas halaman, di bawah judul H1, dengan tiga kolom input berlabel." },
          { "kind": "p", "text": "<strong>Langkah 2: Kenali kaki a.</strong> Pilih salah satu dari dua sisi yang membentuk sudut siku-siku. Sisi tegak lurus mana pun bisa menjadi [[a]]." },
          { "kind": "p", "text": "<strong>Langkah 3: Kenali kaki b.</strong> Sisi tegak lurus lainnya menjadi [[b]]." },
          { "kind": "p", "text": "<strong>Langkah 4: Kenali hipotenusa c.</strong> Sisi terpanjang, berhadapan dengan sudut siku-siku, adalah [[c]]. Mengurutkan tiga ukuran dan menempatkan yang terbesar di kolom ini mencegah kesalahan input yang paling umum." },
          { "kind": "p", "text": "<strong>Langkah 5: Masukkan kaki pertama.</strong> Ketik nilai [[a]] ke kolom Kaki a." },
          { "kind": "p", "text": "<strong>Langkah 6: Masukkan kaki kedua.</strong> Ketik nilai [[b]] ke kolom Kaki b." },
          { "kind": "p", "text": "<strong>Langkah 7: Masukkan hipotenusa.</strong> Ketik nilai [[c]] ke kolom Hipotenusa c." },
          { "kind": "p", "text": "<strong>Langkah 8: Pilih satuan ukuran yang sesuai.</strong> Setiap input memiliki pemilih satuan sendiri. Ketiga sisi harus menggunakan satuan yang sesuai sebelum dijumlahkan; mencampur meter dengan sentimeter merusak jumlahnya." },
          { "kind": "p", "text": "<strong>Langkah 9: Klik Hitung Setengah Keliling.</strong> Alat ini menjumlahkan ketiga sisi dan membagi totalnya dengan dua." },
          { "kind": "p", "text": "<strong>Langkah 10: Tinjau setengah keliling yang ditampilkan.</strong> Hasil muncul beserta satuannya, misalnya [[[\\boxed{s=6\\text{ units}}]]] untuk segitiga 3-4-5." },
          { "kind": "p", "text": "<strong>Langkah 11: Periksa langkah penyelesaian.</strong> Kalkulator menunjukkan substitusi dan pembagian, sehingga Anda bisa mengikuti aritmetikanya baris demi baris." },
          { "kind": "p", "text": "<strong>Langkah 12: Pastikan hasilnya adalah setengah dari keliling penuh.</strong> Gandakan hasilnya: untuk 3-4-5, [[2\\times6=12]], yang cocok dengan [[3+4+5]]." },
          { "kind": "p", "text": "<strong>Langkah 13: Gunakan Atur Ulang saat memulai perhitungan baru.</strong> Tombol Atur Ulang mengosongkan ketiga input sehingga segitiga berikutnya dimulai dari keadaan bersih." },
          { "kind": "h3", "text": "Apa yang Diwakili Setiap Input?" },
          { "kind": "p", "text": "Ketiga input sesuai dengan tiga sisi batas. Kaki a dan Kaki b menerima dua sisi yang tegak lurus; Hipotenusa c menerima sisi terpanjang. Kalkulator menjumlahkan persis apa yang Anda masukkan dan membelah totalnya, sehingga peran setiap kolom tetap: menukar nilai kaki ke kolom hipotenusa mengubah jumlahnya dan menghasilkan setengah keliling yang salah." },
          { "kind": "h3", "text": "Mengapa Satuan Ukuran Penting?" },
          { "kind": "p", "text": "Setengah keliling dihitung dengan menjumlahkan tiga panjang, dan penjumlahan membutuhkan satuan yang sesuai. Menambahkan 3 meter ke 40 sentimeter tanpa konversi menghasilkan total yang tidak bermakna. Pemilih satuan setiap input memungkinkan Anda menyatakan satuan yang Anda ketik; pilih pemilih yang menggambarkan ukuran sebenarnya sehingga penjumlahan menggabungkan yang sejenis dengan yang sejenis." },
          { "kind": "h3", "text": "Memahami Tampilan Hasil" },
          { "kind": "p", "text": "Tampilan hasil menunjukkan setengah keliling beserta satuan panjangnya. Di baliknya, kalkulator melakukan tepat dua operasi: ia menjumlahkan ketiga sisi, lalu membagi totalnya dengan dua. Tidak ada perhitungan lain yang terlibat, dan alat ini tidak menghitung luas atau jari-jari lingkaran dalam dengan sendirinya; rumus-rumus itu adalah penjelasan pendukung dalam panduan ini, bukan keluaran tambahan kalkulator." },
          { "kind": "h3", "text": "Memahami Langkah Penyelesaian" },
          { "kind": "p", "text": "Panel langkah penyelesaian mengulang perhitungan: nilai sisi yang dimasukkan, totalnya, pembagian dua, dan hasil akhirnya. Pengerjaan yang terlihat ini adalah cara tercepat menangkap salah ketik: jika sebuah langkah menunjukkan 4 padahal maksud Anda 40, kesalahannya jelas terlihat sebelum jawaban digunakan di tempat lain." }
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Empat contoh di bawah ini mempertahankan kasus pengerjaan yang sudah ada dan memperluas penjelasannya. Masing-masing mensubstitusikan ketiga sisi, menjumlahkannya, membagi dua, lalu memverifikasi jawabannya." },
          { "kind": "h3", "text": "Contoh 1: Segitiga Siku-Siku 3-4-5" },
          { "kind": "p", "text": "Diketahui [[a=3,\\;b=4,\\;c=5]], rumusnya adalah [[s=\\frac{a+b+c}{2}]]. Substitusikan: [[s=\\frac{3+4+5}{2}]]. Jumlahkan: [[s=\\frac{12}{2}]]. Hasil akhirnya adalah [[[\\boxed{s=6\\text{ units}}]]] Verifikasi: [[P=2s=12]], yang cocok dengan jumlah langsung [[3+4+5]]. Hasilnya benar karena setiap sisi batas dihitung tepat satu kali sebelum pembagian." },
          { "kind": "h3", "text": "Contoh 2: Segitiga Siku-Siku 5-12-13" },
          { "kind": "p", "text": "Diketahui [[a=5,\\;b=12,\\;c=13]]: [[s=\\frac{5+12+13}{2}]], sehingga [[s=\\frac{30}{2}]], menghasilkan [[[\\boxed{s=15\\text{ units}}]]] Keliling penuhnya adalah 30, dan setengah dari 30 adalah 15. Sebagai pemeriksaan, [[5^2+12^2=13^2]] menegaskan sudut siku-siku, sehingga label sisi dapat dipercaya." },
          { "kind": "h3", "text": "Contoh 3: Segitiga Siku-Siku 8-15-17" },
          { "kind": "p", "text": "Diketahui [[a=8,\\;b=15,\\;c=17]]: [[s=\\frac{8+15+17}{2}]], sehingga [[s=\\frac{40}{2}]], menghasilkan [[[\\boxed{s=20\\text{ units}}]]] Perhatikan pola di seluruh contoh: seiring segitiga membesar, setengah keliling tumbuh seiring sisi-sisinya, selalu tepat setengah keliling penuh." },
          { "kind": "h3", "text": "Contoh 4: Ukuran Sisi Desimal" },
          { "kind": "p", "text": "Diketahui [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], sehingga [[s=\\frac{15}{2}]], menghasilkan [[[\\boxed{s=7.5\\text{ units}}]]] Nilai desimal tidak mengubah rumus: urutan jumlahkan-lalu-bagi yang sama berlaku. Pemeriksaan Pythagoras [[2.5^2+6^2=6.5^2]] menegaskan bahwa sisi-sisi ini benar-benar membentuk segitiga siku-siku." }
        ],
        "imgAlt": "Segitiga 3-4-5 dengan langkah perhitungan: jumlahkan sisi menjadi 12, bagi 2, setengah keliling s sama dengan 6",
        "figcaption": "Jumlahkan ketiga sisi menjadi P = 12, lalu bagi 2: setengah keliling s = 6.",
        "table": {
          "headers": ["Segitiga", "Kaki a", "Kaki b", "Hipotenusa c", "Keliling penuh P", "Setengah keliling s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["Tabel menunjukkan pola dengan jelas: ketika ketiga ukuran bertambah, setengah keliling bertambah secara proporsional, selalu tepat setengah dari keliling penuh. Membandingkan baris juga menunjukkan bahwa segitiga yang sebangun berskala bersama-sama; gandakan setiap sisi dan setengah keliling ikut berlipat dua."]
      },
      "sec-practical": {
        "h2": "Penerapan Setengah Keliling Segitiga Siku-Siku dalam Kehidupan Nyata",
        "blocks": [
          { "kind": "p", "text": "Satu peringatan sebelum contoh-contohnya: setengah keliling biasanya bukan besaran yang digunakan untuk membeli setengah bahan tepi atau pagar di sekitar benda segitiga. Peran sebenarnya adalah sebagai pengukuran antara geometris, batu loncatan menuju jari-jari lingkaran dalam, pemeriksaan luas, dan perhitungan desain. Setiap contoh di bawah ini adalah model geometris segitiga siku-siku yang disederhanakan, dan masing-masing menghitung setengah keliling bersama keliling penuh, luas, dan jari-jari lingkaran dalam agar hubungannya tetap terlihat." },
          { "kind": "h3", "text": "Contoh 1: Jendela Segitiga dengan Sisipan Hiasan Melingkar" },
          { "kind": "p", "text": "Model jendela segitiga memiliki [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Setengah keliling: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]; keliling penuh [[P=12\\text{ m}]]. Luas [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] dan jari-jari lingkaran dalam [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. Setengah keliling inilah yang membuat jari-jari lingkaran dalam bisa dihitung: ia mengubah tiga panjang sisi menjadi satu angka yang menghubungkan luas dengan jari-jari lingkaran yang menyinggung ketiga sisi model segitiga yang diidealkan." },
          { "kind": "h3", "text": "Contoh 2: Braket Penyangga Logam dengan Ruang Bebas Melingkar" },
          { "kind": "p", "text": "Braket segitiga siku-siku memiliki [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]. Maka [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] dan [[P=30\\text{ cm}]]. Luas [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] menghasilkan jari-jari lingkaran dalam [[r=\\frac{30}{15}=2\\text{ cm}]]. Nilai ini menggambarkan jari-jari lingkaran dalam pada segitiga yang diidealkan dan bisa memandu studi ruang bebas geometris untuk lubang melingkar. Nilai ini sendiri tidak menentukan keamanan struktural." },
          { "kind": "h3", "text": "Contoh 3: Atap Pelana dengan Desain Ventilasi Melingkar" },
          { "kind": "p", "text": "Model ujung atap segitiga siku-siku yang disederhanakan memiliki [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Setengah keliling [[s=\\frac{6+8+10}{2}=12\\text{ ft}]]; keliling [[P=24\\text{ ft}]]. Luas [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] dan jari-jari lingkaran dalam [[r=\\frac{24}{12}=2\\text{ ft}]]. Setengah keliling mengubah tiga panjang sisi atap pelana menjadi jari-jari lingkaran dalam model yang disederhanakan. Pemasangan ventilasi nyata membutuhkan pengukuran bangunan dan ruang bebas terpisah di luar geometri ini." },
          { "kind": "h3", "text": "Contoh 4: Desain Taman Segitiga" },
          { "kind": "p", "text": "Model taman segitiga siku-siku memiliki [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Maka [[s=\\frac{7+24+25}{2}=28\\text{ m}]] dan [[P=56\\text{ m}]]. Luas [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] menghasilkan jari-jari lingkaran dalam [[r=\\frac{84}{28}=3\\text{ m}]]. Lingkaran dalam adalah lingkaran terbesar yang muat di dalam segitiga yang diidealkan sambil menyentuh ketiga sisi, berguna untuk menempatkan bedeng atau air mancur melingkar pada tahap desain." },
          { "kind": "h3", "text": "Contoh 5: Panel Fabrikasi Segitiga CNC" },
          { "kind": "p", "text": "Panel segitiga memiliki [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Setengah keliling [[s=\\frac{8+15+17}{2}=20\\text{ cm}]]; keliling [[P=40\\text{ cm}]]. Luas [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] dan jari-jari lingkaran dalam [[r=\\frac{60}{20}=3\\text{ cm}]]. Setengah keliling dan jari-jari lingkaran dalam di sini berfungsi sebagai nilai acuan geometris dalam pemodelan CAD, misalnya saat menempatkan fitur melingkar relatif terhadap sisi-sisi panel." },
          { "kind": "h3", "text": "Contoh 6: Papan Tanda Segitiga dengan Lambang Melingkar" },
          { "kind": "p", "text": "Panel papan tanda memiliki [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]. Maka [[s=\\frac{9+12+15}{2}=18\\text{ in}]] dan [[P=36\\text{ in}]]. Luas [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] menghasilkan jari-jari lingkaran dalam [[r=\\frac{54}{18}=3\\text{ in}]]. Jari-jari lingkaran dalam menyediakan acuan matematis untuk lambang melingkar tertulis terbesar, sesuai margin dan batas pemasangan papan tanda yang sebenarnya." },
          { "kind": "h3", "text": "Contoh 7: Pelat Segitiga Industri" },
          { "kind": "p", "text": "Pelat segitiga siku-siku memiliki [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Setengah keliling [[s=\\frac{9+40+41}{2}=45\\text{ cm}]]; keliling [[P=90\\text{ cm}]]. Luas [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] dan jari-jari lingkaran dalam [[r=\\frac{180}{45}=4\\text{ cm}]]. Setengah keliling mendukung perhitungan geometris untuk panel industri yang diidealkan, misalnya menentukan ukuran bos melingkar yang harus tetap berjarak dari ketiga sisi." },
          { "kind": "h3", "text": "Contoh 8: Desain Kaca Patri Segitiga" },
          { "kind": "p", "text": "Bagian kaca segitiga siku-siku memiliki [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Maka [[s=\\frac{12+16+20}{2}=24\\text{ in}]] dan [[P=48\\text{ in}]]. Luas [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] menghasilkan jari-jari lingkaran dalam [[r=\\frac{96}{24}=4\\text{ in}]]. Hubungannya langsung: setengah keliling membelah batas menjadi dua, dan membagi luas dengan setengah batas itu menghasilkan jari-jari lingkaran tertulis untuk tata letak desain." },
          { "kind": "h3", "text": "Contoh 9: Bagian Lahan Segitiga yang Disurvei" },
          { "kind": "p", "text": "Model petak segitiga siku-siku yang disederhanakan memiliki [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]. Setengah keliling [[s=\\frac{20+21+29}{2}=35\\text{ m}]]; keliling [[P=70\\text{ m}]]. Luas [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] dan jari-jari lingkaran dalam [[r=\\frac{210}{35}=6\\text{ m}]]. Dalam model survei lahan yang disederhanakan, setengah keliling berfungsi sebagai input ringkas untuk pemeriksaan luas dan jari-jari lingkaran dalam, misalnya saat memverifikasi luas petak yang dihitung terhadap rumus Heron." },
          { "kind": "h3", "text": "Contoh 10: Bingkai Segitiga Arsitektural" },
          { "kind": "p", "text": "Bingkai arsitektural segitiga siku-siku memiliki [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]. Maka [[s=\\frac{12+35+37}{2}=42\\text{ m}]] dan [[P=84\\text{ m}]]. Luas [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] menghasilkan jari-jari lingkaran dalam [[r=\\frac{210}{42}=5\\text{ m}]]. Nilai ini dapat mendukung pemodelan matematis fitur melingkar di dalam bingkai segitiga, seperti jendela bundar yang berpusat pada titik pusat lingkaran dalam." },
          { "kind": "h3", "text": "Contoh 11: Desain Lantai Segitiga Besar" },
          { "kind": "p", "text": "Bagian lantai segitiga siku-siku memiliki [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]. Setengah keliling [[s=\\frac{28+45+53}{2}=63\\text{ m}]]; keliling [[P=126\\text{ m}]]. Luas [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] dan jari-jari lingkaran dalam [[r=\\frac{630}{63}=10\\text{ m}]]. Di sini setengah keliling menghubungkan ukuran sisi dengan geometri lingkaran dalam model: satu angka menjembatani batas dan lingkaran terbesar yang bisa muat." },
          { "kind": "h3", "text": "Contoh 12: Pelat Penyangga Segitiga Industri" },
          { "kind": "p", "text": "Pelat segitiga siku-siku besar memiliki [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]. Maka [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] dan [[P=154\\text{ cm}]]. Luas [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] menghasilkan jari-jari lingkaran dalam [[r=\\frac{924}{77}=12\\text{ cm}]]. Ukuran-ukuran ini mengisi model geometris untuk fitting melingkar atau fitur desain internal, dengan setengah keliling sebagai nilai antara yang membuka jalan ke jari-jari lingkaran dalam." }
        ],
        "table": {
          "headers": ["Penerapan praktis", "Kaki a", "Kaki b", "Hipotenusa c", "Keliling P", "Setengah keliling s", "Luas K", "Jari-jari dalam r", "Satuan"],
          "rows": [
            ["Jendela segitiga", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Braket logam", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Ventilasi atap pelana", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Desain taman", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["Panel CNC", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Lambang papan", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Pelat industri", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Kaca patri", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Petak survei", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Bingkai arsitektural", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Desain lantai", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Pelat penyangga", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Beberapa pengingat berlaku untuk setiap baris di atas. Setiap penerapan adalah model geometris yang disederhanakan, bukan spesifikasi konstruksi: dimensi aktual memerlukan verifikasi terpisah, kekuatan struktural tidak bisa dibaca dari setengah keliling, dan lubang melingkar nyata mungkin membutuhkan ruang bebas manufaktur tambahan. Setengah keliling adalah nilai antara matematis, jari-jari lingkaran dalam adalah jari-jari lingkaran dalam, dan lingkaran dalam menyentuh ketiga sisi."]
      },
      "sec-inradius": {
        "h2": "Bagaimana Setengah Keliling Berhubungan dengan Jari-Jari Lingkaran Dalam Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Ini adalah salah satu bagian terpenting artikel, karena jari-jari lingkaran dalam adalah alasan utama setengah keliling ada sebagai besaran bernama. Lingkaran dalam adalah lingkaran terbesar yang muat di dalam segitiga sambil menyentuh ketiga sisi, dan jari-jarinya disebut jari-jari lingkaran dalam, dilambangkan dengan [[r]]." },
          { "kind": "h3", "text": "Hubungan Luas dan Setengah Keliling" },
          { "kind": "p", "text": "Untuk segitiga mana pun, luas, jari-jari lingkaran dalam, dan setengah keliling dihubungkan oleh satu rumus ringkas:" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "di mana [[K]] adalah luas segitiga, [[r]] adalah jari-jari lingkaran dalam, dan [[s]] adalah setengah keliling. Disusun ulang, ia memecahkan jari-jari lingkaran dalam:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Mengetahui setengah keliling dan luas memungkinkan Anda menghitung jari-jari lingkaran dalam secara langsung: bagi luas dengan setengah keliling. Inilah hasil praktis dari setengah keliling. Ia memampatkan tiga panjang sisi menjadi satu angka yang, bersama luas, mengungkapkan lingkaran tertulis." },
          { "kind": "h3", "text": "Rumus Jari-Jari Lingkaran Dalam Khusus untuk Segitiga Siku-Siku" },
          { "kind": "p", "text": "Untuk segitiga siku-siku, luasnya adalah [[K=\\frac{ab}{2}]] dan setengah kelilingnya adalah [[s=\\frac{a+b+c}{2}]]. Mensubstitusikan keduanya ke dalam [[r=\\frac{K}{s}]] menghasilkan:" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "Sederhanakan:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "Ada juga rumus segitiga siku-siku yang setara dan sepenuhnya menghindari luas:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Kedua ungkapan ini setara untuk segitiga siku-siku karena hubungan Pythagoras: aljabarnya menyusut setelah [[a^2+b^2=c^2]] diterapkan. Kedua bentuk memberikan jari-jari lingkaran dalam yang sama; bentuk kedua sering lebih cepat dikerjakan manual." },
          { "kind": "h3", "text": "Contoh 3-4-5 yang Dikerjakan Penuh" },
          { "kind": "p", "text": "Diketahui [[a=3,\\;b=4,\\;c=5]]: setengah keliling [[s=\\frac{3+4+5}{2}=6]], luas [[K=\\frac{3\\times4}{2}=6]], jari-jari lingkaran dalam [[r=\\frac{6}{6}]], sehingga [[[\\boxed{r=1}]]] Verifikasi dengan jalan pintas: [[r=\\frac{3+4-5}{2}]], menghasilkan [[[\\boxed{r=1}]]] Kedua metode menghasilkan jawaban yang sama karena keduanya adalah matematika yang sama ditulis dua cara: satu melalui luas, yang lain menghilangkan luas secara aljabar." },
          { "kind": "h3", "text": "Mengapa Setengah Keliling Penting untuk Perhitungan Lingkaran Dalam?" },
          { "kind": "p", "text": "Setengah keliling adalah jembatan antara batas segitiga dan lingkaran tertulisnya. Desainer menggunakannya saat menentukan ukuran ruang bebas melingkar di dalam bagian segitiga, saat menempatkan fitur melingkar tertulis dalam desain geometris, saat memberi dimensi pada diagram teknik, dan saat mengerjakan pembuktian matematis yang menghubungkan luas dengan jari-jari. Jari-jari lingkaran dalam juga terhubung kembali ke verifikasi luas: jika [[K]], [[r]], dan [[s]] tidak memenuhi [[K=rs]], ada yang salah dalam rantai perhitungan. Kalkulator ini tidak menghitung jari-jari lingkaran dalam secara otomatis; ia menyediakan setengah keliling, dan rumus di atas melanjutkan dari sana." }
        ],
        "imgAlt": "Segitiga siku-siku 3-4-5 dengan lingkaran dalam berjari-jari 1; setengah keliling s = 6, luas K = 6, r = K/s",
        "figcaption": "Lingkaran dalam menyentuh ketiga sisi; dengan s = 6 dan K = 6, jari-jari lingkaran dalam r = K / s = 1."
      },
      "sec-heron": {
        "h2": "Bagaimana Setengah Keliling Digunakan dalam Rumus Heron?",
        "blocks": [
          { "kind": "p", "text": "Rumus Heron menghitung luas segitiga dari ketiga panjang sisinya, tanpa membutuhkan tinggi yang diberikan terpisah. Setengah keliling adalah bahan utamanya: rumus ini ditulis dalam [[s]] dan selisih antara [[s]] dengan setiap sisi." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Di sini [[K]] adalah luas segitiga, [[s]] adalah setengah keliling, dan [[a]], [[b]], [[c]] adalah ketiga panjang sisi." },
          { "kind": "h3", "text": "Mengapa Rumus Heron Menggunakan Setengah Keliling?" },
          { "kind": "p", "text": "Setengah keliling dihitung terlebih dahulu karena ia memusatkan ungkapan: setiap faktor [[s-a]], [[s-b]], [[s-c]] mengukur seberapa besar setengah keliling melebihi satu sisi. Mengalikan ketiga kelebihan itu dengan [[s]] sendiri lalu mengambil akar kuadrat mengubah informasi batas menjadi luas. Rumus ini berlaku untuk segitiga valid mana pun, bukan hanya segitiga siku-siku, itulah mengapa setengah keliling layak digunakan sebagai alat geometris umum, bukan sekadar keingintahuan segitiga siku-siku." },
          { "kind": "h3", "text": "Contoh 3-4-5 yang Dikerjakan Penuh" },
          { "kind": "p", "text": "Diketahui [[a=3,\\;b=4,\\;c=5]], hitung dulu setengah kelilingnya: [[s=\\frac{3+4+5}{2}=6]]. Substitusikan ke rumus Heron: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Sederhanakan: [[K=\\sqrt{6\\times3\\times2\\times1}]], lalu [[K=\\sqrt{36}]], menghasilkan [[[\\boxed{K=6\\text{ square units}}]]]" },
          { "kind": "h3", "text": "Verifikasi Hasil Menggunakan Rumus Luas Segitiga Siku-Siku" },
          { "kind": "p", "text": "Rumus luas segitiga siku-siku langsung adalah [[K=\\frac{ab}{2}]]. Mensubstitusikan: [[K=\\frac{3\\times4}{2}]], menghasilkan [[[\\boxed{K=6\\text{ square units}}]]] Kedua rumus menghasilkan luas yang sama, dan itulah intinya: rumus Heron, yang dibangun di atas setengah keliling, secara independen menegaskan perhitungan yang lebih sederhana." },
          { "kind": "h3", "text": "Mengapa Ini Berguna?" },
          { "kind": "p", "text": "Segitiga siku-siku memiliki rumus luas langsung yang lebih sederhana, sehingga rumus Heron jarang menjadi jalan tercepat menuju luas. Nilainya terletak pada pemeriksaan perhitungan luas, pada pemahaman bahwa panjang sisi saja menentukan luas, pada penyelesaian soal berbasis panjang sisi di mana tidak ada tinggi yang diberikan, dan pada verifikasi solusi matematis melalui jalur independen. Setiap kali dua rumus yang tidak terkait sepakat tentang luasnya, kepercayaan pada jawaban meningkat tajam." }
        ],
        "imgAlt": "Rumus Heron diterapkan pada segitiga 3-4-5: setengah keliling 6 memberi luas 6, diverifikasi dengan K = ab/2",
        "figcaption": "Lima langkah: sisi, setengah keliling s = 6, substitusi Heron, luas K = 6, periksa dengan K = ab / 2."
      },
      "sec-vs-perimeter": {
        "h2": "Apa Perbedaan Keliling dan Setengah Keliling?",
        "blocks": [
          { "kind": "p", "text": "Kedua besaran menggambarkan batas yang sama pada skala berbeda, dan mencampuradukkannya adalah salah satu kesalahan paling sering dalam pekerjaan segitiga. Bagian ini menarik garis batasnya dengan jelas." },
          { "kind": "h3", "text": "Keliling Mengukur Seluruh Batas" },
          { "kind": "p", "text": "Keliling adalah total panjang mengelilingi segitiga:" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Ia mewakili perjalanan penuh mengelilingi ketiga sisi. Untuk segitiga 3-4-5, [[P=12]] satuan." },
          { "kind": "h3", "text": "Setengah Keliling Adalah Setengah dari Total" },
          { "kind": "p", "text": "Setengah keliling adalah setengah dari keliling numerik:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "Untuk segitiga 3-4-5 yang sama, [[s=6]] satuan. Segitiga yang sama, batas yang sama, tetapi angkanya dibelah dua karena rumus yang menggunakannya, rumus Heron dan hubungan jari-jari lingkaran dalam, ditulis untuk nilai setengah." },
          { "kind": "h3", "text": "Perbandingan Numerik" },
          { "kind": "p", "text": "Gunakan segitiga siku-siku 6-8-10. Keliling: [[P=6+8+10]], sehingga [[[\\boxed{P=24}]]] Setengah keliling: [[s=\\frac{24}{2}]], sehingga [[[\\boxed{s=12}]]] Keliling menjawab \"berapa panjang seluruh batasnya?\"; setengah keliling menjawab \"berapa nilai setengah batas yang dibutuhkan rumusku?\"" },
          { "kind": "h3", "text": "Kapan Setiap Pengukuran Harus Digunakan?" },
          { "kind": "p", "text": "Gunakan keliling ketika pekerjaannya menyangkut panjang batas penuh: membingkai bangun segitiga, memagari petak segitiga, memperkirakan bahan pembatas, atau mengukur lis tepi. Gunakan setengah keliling ketika pekerjaannya matematis: rumus Heron, perhitungan jari-jari lingkaran dalam, hubungan luas-jari-jari, pembuktian geometri lanjutan, atau verifikasi independen hasil luas. Aturan praktisnya sederhana: pekerjaan batas fisik menggunakan [[P]]; pekerjaan rumus menggunakan [[s]]." },
          { "kind": "h3", "text": "Apakah Setengah Keliling Itu Setengah Luas?" },
          { "kind": "p", "text": "Tidak, dan kebingungan ini perlu dikoreksi dengan tegas. Setengah keliling adalah pengukuran panjang: untuk 3-4-5 besarnya 6 satuan. Luas adalah pengukuran dua dimensi: untuk 3-4-5 besarnya 6 satuan persegi. Angka-angkanya kebetulan sama di sini, tetapi besaran-besaran itu berbeda jenisnya. Membelah panjang tidak pernah menghasilkan luas, sama seperti membelah keliling tidak pernah menghasilkan permukaan." }
        ],
        "table": {
          "headers": ["Pengukuran", "Simbol", "Rumus", "Arti", "Satuan", "Penerapan umum"],
          "rows": [
            ["Keliling", "[[P]]", "[[P=a+b+c]]", "Panjang batas penuh", "Panjang (m, ft, in)", "Pagar, bingkai, lis"],
            ["Setengah keliling", "[[s]]", "[[s=(a+b+c)/2]]", "Setengah panjang batas", "Panjang (m, ft, in)", "Rumus Heron, jari-jari lingkaran dalam"],
            ["Luas", "[[K]]", "[[K=ab/2]]", "Permukaan yang dikelilingi", "Persegi (m², ft², in²)", "Penutup permukaan, bahan"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Cara Menghitung Setengah Keliling Saat Satu Sisi Hilang",
        "blocks": [
          { "kind": "p", "text": "Kalkulator di halaman ini membutuhkan ketiga panjang sisi: ia tidak bisa membelah total yang tidak bisa dijumlahkan. Jika satu sisi tidak diketahui, hitung dulu dengan teorema Pythagoras, lalu lanjutkan dengan setengah keliling seperti biasa." },
          { "kind": "h3", "text": "Mencari Hipotenusa" },
          { "kind": "p", "text": "Ketika kedua kaki diketahui, gunakan [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Contoh: [[a=6]], [[b=8]]. Maka [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], menghasilkan [[[\\boxed{c=10}]]] Sekarang setengah keliling mengikuti: [[s=\\frac{6+8+10}{2}]], sehingga [[[\\boxed{s=12}]]]" },
          { "kind": "h3", "text": "Mencari Kaki yang Hilang" },
          { "kind": "p", "text": "Ketika hipotenusa dan satu kaki diketahui, gunakan [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Contoh: [[c=13]], [[b=12]]. Maka [[a=\\sqrt{169-144}]], menghasilkan [[[\\boxed{a=5}]]] Lalu [[s=\\frac{5+12+13}{2}]], sehingga [[[\\boxed{s=15}]]]" },
          { "kind": "h3", "text": "Mengapa Sisi yang Hilang Harus Ditemukan Terlebih Dahulu?" },
          { "kind": "p", "text": "Setengah keliling membutuhkan total lengkap ketiga sisi, dan sisi yang tidak diketahui tidak bisa begitu saja diabaikan atau dianggap nol. Bentuk Pythagoras untuk hipotenusa menjumlahkan kuadrat; bentuk kaki mengurangkannya; menerapkan yang salah menciptakan sisi yang tidak ada. Setelah sisi yang hilang dipulihkan, <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Kalkulator Sisi Segitiga Siku-Siku</a> dapat memeriksa ulang nilainya, dan perhitungan setengah keliling berjalan di atas dasar yang kokoh. Langkah-langkah sisi hilang ini adalah metode pendukung edukatif, bukan input tambahan dalam kalkulator yang ada." }
        ]
      },
      "sec-properties": {
        "h2": "Sifat Penting Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Setengah keliling berperilaku secara terprediksi. Sifat-sifat ini berfungsi ganda sebagai pemeriksaan mental cepat dan sebagai alat dalam penalaran geometris." },
          { "kind": "h3", "text": "Setengah Keliling Lebih Besar dari Hipotenusa" },
          { "kind": "p", "text": "Untuk setiap segitiga valid, [[a+b>c]]. Menambahkan [[c]] ke kedua ruas menghasilkan [[a+b+c>2c]], dan membagi dua menghasilkan [[[\\boxed{s>c}]]] Setengah keliling selalu melebihi sisi terpanjang. Jika perhitungan menghasilkan [[s]] lebih kecil dari [[c]], label atau aritmetikanya salah." },
          { "kind": "h3", "text": "Setengah Keliling Lebih Kecil dari Jumlah Kedua Kaki" },
          { "kind": "p", "text": "Ketidaksamaan segitiga juga menghasilkan [[c<a+b]]. Menambahkan [[a+b]] ke kedua ruas menghasilkan [[a+b+c<2(a+b)]], dan membelah dua menghasilkan [[[\\boxed{s<a+b}]]] Jadi setengah keliling berada tepat di antara hipotenusa dan jumlah kedua kaki: [[c<s<a+b]]. Untuk 3-4-5: [[5<6<7]]. Ketidaksamaan ganda c < s < a + b ini merupakan pemeriksaan kewajaran cepat untuk setiap jawaban." },
          { "kind": "h3", "text": "Menggandakan Setiap Sisi Menggandakan Setengah Keliling" },
          { "kind": "p", "text": "Skalakan segitiga 3-4-5 dengan dua: [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] menghasilkan sisi 6, 8, 10. Maka [[s_2=\\frac{2a+2b+2c}{2}]], sehingga [[[\\boxed{s_2=2s}]]] Secara numerik, [[s_2=12=2\\times6]]. Setengah keliling adalah pengukuran panjang, sehingga penskalaan seragam menskalakannya dengan faktor yang sama." },
          { "kind": "h3", "text": "Melipat Tigakan Setiap Sisi Melipat Tigakan Setengah Keliling" },
          { "kind": "p", "text": "Linearitas yang sama berlaku untuk faktor skala apa pun. Lipat tigakan setiap sisi dan jumlahnya ikut berlipat tiga; membelah dua jumlah yang dilipat tiga menghasilkan tiga kali setengah keliling semula: [[[\\boxed{s_2=3s}]]] Secara umum, menskala semua sisi dengan [[k]] menskala [[s]] dengan [[k]]. Inilah mengapa segitiga yang sebangun memiliki setengah keliling yang proporsional." },
          { "kind": "h3", "text": "Apa yang Terjadi Ketika Hanya Satu Sisi Berubah?" },
          { "kind": "p", "text": "Mengubah satu sisi sambil mempertahankan dua lainnya mengubah setengah keliling numerik sebesar setengah perubahan panjang sisi, karena hanya satu suku jumlah yang bergerak. Tetapi ada jebakannya: ukuran yang dihasilkan harus tetap menggambarkan segitiga valid, dan untuk halaman ini, segitiga siku-siku. Memanjangkan hipotenusa segitiga 3-4-5 menjadi 6, misalnya, merusak [[a^2+b^2=c^2]], sehingga angka baru tidak lagi menggambarkan segitiga siku-siku sama sekali. Sesuaikan satu sisi segitiga siku-siku dan sisi lainnya harus menyesuaikan untuk mempertahankan sudut siku-siku." },
          { "kind": "h3", "text": "Setengah Keliling Segitiga 45-45-90" },
          { "kind": "p", "text": "Misalkan kedua kaki sama dengan [[k]]. Hipotenusanya adalah [[c=k\\sqrt{2}]], sehingga setengah kelilingnya adalah [[s=\\frac{k+k+k\\sqrt{2}}{2}]], yang disederhanakan menjadi [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]] Kaki yang sama berkontribusi secara simetris, dan hipotenusa irasional meninggalkan jejaknya pada hasil: untuk [[k=1]], [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "Setengah Keliling Segitiga 30-60-90" },
          { "kind": "p", "text": "Jika kaki yang lebih pendek adalah [[k]], sisi-sisinya adalah [[k]], [[k\\sqrt{3}]], dan [[2k]]. Oleh karena itu [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], menghasilkan [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]] Secara numerik, dengan [[k=2]] sisi-sisinya adalah 2, [[2\\sqrt{3}\\approx3.464]], dan 4, sehingga [[s\\approx4.732]]. Bentuk radikal eksak lebih disukai di sini: ia menjaga presisi penuh untuk perhitungan Heron atau jari-jari lingkaran dalam berikutnya." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Satuan Ukuran dalam Perhitungan Setengah Keliling",
        "blocks": [
          { "kind": "p", "text": "Setengah keliling bekerja dalam satuan panjang apa pun, meter, sentimeter, milimeter, kilometer, kaki, inci, yard, atau mil, karena ia hanyalah jumlah panjang, dibelah dua. Satuan jawaban selalu cocok dengan satuan input. Satu-satunya aturan ketat adalah konsistensi: setiap sisi harus dinyatakan dalam satuan yang sama sebelum penjumlahan." },
          { "kind": "h3", "text": "Mengapa Ketiga Ukuran Sisi Harus Menggunakan Satuan yang Sesuai?" },
          { "kind": "p", "text": "Setengah keliling dihitung dengan menjumlahkan tiga panjang, dan panjang dalam satuan berbeda tidak bisa dijumlahkan langsung. Menambahkan 3 meter ke 40 sentimeter seolah keduanya angka biasa menghasilkan 43 yang tidak bermakna. Jumlah hanya valid ketika setiap suku berbagi satu satuan, sehingga konversi dilakukan sebelum penjumlahan, tidak pernah sesudahnya." },
          { "kind": "h3", "text": "Contoh Konversi Satuan yang Dikerjakan" },
          { "kind": "p", "text": "Diketahui [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Konversi inci ke kaki terlebih dahulu: [[48\\text{ inches}=4\\text{ ft}]]. Sekarang ketiga sisi dalam kaki: [[s=\\frac{3+4+5}{2}]], menghasilkan [[[\\boxed{s=6\\text{ ft}}]]] Ukuran harus dikonversi sebelum penjumlahan karena rumus menjumlahkan angka mentah; ia tidak bisa tahu bahwa 48 berarti inci kecuali Anda mengonversinya." },
          { "kind": "h3", "text": "Bagaimana Pemilih Satuan Kalkulator Membantu?" },
          { "kind": "p", "text": "Setiap input di halaman ini memiliki pemilih satuan ukurannya sendiri, yang memungkinkan Anda menyatakan satuan angka yang Anda ketik. Atur setiap pemilih agar cocok dengan satuan sebenarnya inputnya sehingga alat menggabungkan nilai-nilai atas dasar yang konsisten. Jangan menganggap ada fitur konversi di luar yang ditampilkan antarmuka: pemilih menggambarkan input Anda, dan setengah keliling dihitung dari nilai sebagaimana dimasukkan." },
          { "kind": "h3", "text": "Bekerja dengan Ukuran Sisi Desimal" },
          { "kind": "p", "text": "Desimal mengikuti rumus yang sama. Dengan [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], sehingga [[s=\\frac{15}{2}]], menghasilkan [[[\\boxed{s=7.5\\text{ units}}]]] Jaga presisi desimal penuh sepanjang penjumlahan dan pembagian; bulatkan hanya jawaban akhir yang ditampilkan, dan hanya jika soal memerlukannya." },
          { "kind": "h3", "text": "Bekerja dengan Panjang Sisi Irasional" },
          { "kind": "p", "text": "Beberapa segitiga siku-siku memiliki sisi irasional, dan rumusnya menanganinya dengan cara yang sama. Ambil segitiga 45-45-90 dengan [[a=1,\\;b=1,\\;c=\\sqrt{2}]]: [[s=\\frac{1+1+\\sqrt{2}}{2}]], menghasilkan bentuk eksak [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]], kira-kira [[s\\approx1.7071]]. Notasi radikal eksak berharga dalam matematika karena ia menjaga presisi penuh: penggunaan [[s]] berikutnya dalam rumus Heron atau perhitungan jari-jari lingkaran dalam dimulai dari nilai sebenarnya, bukan yang dibulatkan." },
          { "kind": "h3", "text": "Mengapa Sebaiknya Tidak Membulatkan Terlalu Dini?" },
          { "kind": "p", "text": "Pembulatan dini menyuntikkan kesalahan ke setiap perhitungan berikutnya, dan setengah keliling sering menjadi nilai antara, bukan jawaban akhir. Membulatkan [[s]] ke dua desimal sebelum memasukkannya ke rumus Heron, di mana ia muncul empat kali, memperbesar kesalahan secara nyata. Jaga presisi yang cukup selama langkah antara: bawa desimal penuh atau radikal eksak, dan bulatkan sekali, di akhir, sesuai presisi yang dibutuhkan soal." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum Saat Menghitung Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Enam belas kesalahan menyebabkan hampir setiap setengah keliling yang salah. Masing-masing dijelaskan beserta apa yang salah, mengapa terjadi, dan cara yang benar." },
          { "kind": "p", "text": "<strong>1. Lupa membagi total dengan dua.</strong> Menjumlahkan 3 + 4 + 5 = 12 lalu berhenti menghasilkan keliling, bukan setengah keliling. Selalu akhiri dengan pembagian: [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Membagi setiap sisi sebelum memahami rumusnya.</strong> Membelah sisi satu per satu lalu menjumlahkan benar secara aritmetika tetapi menyembunyikan struktur rumus. Jumlahkan dulu, bagi sekali: [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Lupa menyertakan hipotenusa.</strong> Hipotenusa adalah sisi batas. Menghilangkannya dari segitiga 3-4-5 menghasilkan [[(3+4)/2=3.5]] alih-alih 6." },
          { "kind": "p", "text": "<strong>4. Hanya menggunakan dua kaki yang tegak lurus.</strong> Kesalahan yang sama seperti di atas dalam kemasan berbeda. Kaki saja bukan seluruh batas; hipotenusa menutup bangun dan harus dihitung." },
          { "kind": "p", "text": "<strong>5. Mencampuradukkan setengah keliling dengan keliling penuh.</strong> Melaporkan 12 untuk segitiga 3-4-5 menjawab \"berapa P?\" padahal pertanyaannya meminta s. Ingat: [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Mencampuradukkan setengah keliling dengan luas.</strong> Untuk 3-4-5 keduanya sama-sama 6 secara numerik, yang mengundang kekeliruan. Keduanya berbeda jenis: 6 satuan panjang versus 6 satuan persegi permukaan." },
          { "kind": "p", "text": "<strong>7. Melaporkan hasil dalam satuan persegi.</strong> Setengah keliling 6 cm persegi adalah kesalahan kategori. Membelah panjang tetap menghasilkan panjang: 6 cm, bukan 6 cm²." },
          { "kind": "p", "text": "<strong>8. Menggunakan hipotenusa yang salah.</strong> Jika nilai hipotenusa salah, jumlahnya salah dan setengah kelilingnya pun salah. Verifikasi [[c=\\sqrt{a^2+b^2}]] ketika hipotenusa dihitung bukan diukur." },
          { "kind": "p", "text": "<strong>9. Memasukkan ukuran yang tidak membentuk segitiga siku-siku.</strong> Uji [[a^2+b^2=c^2]] sebelum mempercayai label \"segitiga siku-siku\". Penjumlahannya tetap bekerja, tetapi makna geometrisnya berubah." },
          { "kind": "p", "text": "<strong>10. Mencampur sentimeter dan meter.</strong> Menambahkan 3 m ke 40 cm tidak menghasilkan 43 dalam satuan apa pun. Konversi ke satu satuan terlebih dahulu." },
          { "kind": "p", "text": "<strong>11. Mencampur kaki dan inci.</strong> Jebakan imperial klasik. Konversi inci ke kaki (bagi 12) sebelum menjumlahkan, atau atur pemilih satuan agar cocok." },
          { "kind": "p", "text": "<strong>12. Membulatkan terlalu dini.</strong> Membulatkan [[\\sqrt{2}]] menjadi 1,4 sebelum menjumlahkan menumpuk kesalahan. Bulatkan hanya jawaban akhirnya." },
          { "kind": "p", "text": "<strong>13. Menggunakan sisi yang hilang tanpa menghitungnya.</strong> Dua sisi yang diketahui bukan setengah keliling. Pulihkan yang ketiga dengan teorema Pythagoras terlebih dahulu, lalu jumlahkan dan belah dua." },
          { "kind": "p", "text": "<strong>14. Menerapkan rumus Heron secara salah.</strong> Faktor-faktornya adalah [[s-a]], [[s-b]], dan [[s-c]]: setiap sisi dikurangkan dari setengah keliling, bukan dari sisi lain. Mencampuradukkan pengurangan merusak luasnya." },
          { "kind": "p", "text": "<strong>15. Mencampuradukkan jari-jari lingkaran dalam dengan jari-jari lingkaran luar.</strong> Jari-jari lingkaran dalam [[r=K/s]] menyentuh ketiga sisi dari dalam; jari-jari lingkaran luar melewati titik-titik sudut dan sama dengan [[c/2]] untuk segitiga siku-siku. Lingkaran berbeda, rumus berbeda." },
          { "kind": "p", "text": "<strong>16. Menganggap setengah keliling menggambarkan lintasan fisik setengah batas.</strong> Ia adalah setengah dari total numerik, bukan rute setengah jalan bertanda mengelilingi segitiga. Perlakukan sebagai nilai antara turunan yang sebenarnya." },
          { "kind": "p", "text": "<strong>Salah versus benar, berdampingan.</strong> Diketahui [[a=3,\\;b=4,\\;c=5]]: yang salah adalah [[s=3+4+5=12]], yang melewatkan pembagian dan melaporkan keliling penuh. Yang salah juga adalah [[s=(3+4)/2=3.5]], yang menghilangkan hipotenusa. Yang benar adalah [[s=\\frac{3+4+5}{2}]], menghasilkan [[[\\boxed{s=6}]]]" }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Apakah Jawaban Setengah Keliling Anda Benar",
        "blocks": [
          { "kind": "p", "text": "Delapan pemeriksaan independen menangkap hampir setiap kesalahan. Segitiga 3-4-5 mendemonstrasikan masing-masing. Pemeriksaan independen penting karena gagal dengan cara berbeda: ketika metode yang tidak terkait sepakat, jawaban telah mendapatkan kepercayaannya." },
          { "kind": "p", "text": "<strong>Metode 1: Gandakan setengah keliling.</strong> [[[\\boxed{P=2s}]]] harus sama dengan keliling penuh: [[2\\times6=12=3+4+5]]. Jika penggandaan tidak menghasilkan kembali jumlah sisi, pembagian atau penjumlahannya salah." },
          { "kind": "p", "text": "<strong>Metode 2: Hitung ulang dari ketiga sisi.</strong> Hitung ulang [[s=\\frac{a+b+c}{2}]] dari awal: [[(3+4+5)/2=6]]. Putaran kedua menangkap kesalahan ketik dan aritmetika." },
          { "kind": "p", "text": "<strong>Metode 3: Verifikasi hubungan Pythagoras.</strong> Periksa [[a^2+b^2=c^2]]: [[9+16=25]]. Ini menegaskan sisi-sisi membentuk segitiga siku-siku, yang memvalidasi label sisi tempat setengah keliling bergantung." },
          { "kind": "p", "text": "<strong>Metode 4: Periksa hipotenusa.</strong> Pastikan [[c>a]] dan [[c>b]]: 5 lebih besar dari 3 dan lebih besar dari 4. Jika hipotenusa yang diduga bukan sisi terpanjang, labelnya salah." },
          { "kind": "p", "text": "<strong>Metode 5: Periksa ketidaksamaan segitiga.</strong> Pastikan [[a+b>c]]: [[3+4=7>5]]. Jumlah kedua kaki harus melebihi hipotenusa, atau tidak ada segitiga." },
          { "kind": "p", "text": "<strong>Metode 6: Verifikasi batas setengah keliling.</strong> [[[\\boxed{s>c}]]] harus berlaku: [[6>5]]. Ketidaksamaan tunggal ini menangkap banyak kesalahan pelabelan." },
          { "kind": "p", "text": "<strong>Metode 7: Periksa satuannya.</strong> Pastikan ketiga panjang sisi menggunakan satuan yang sesuai dan keluarannya adalah pengukuran panjang. Satuan campuran membatalkan jumlahnya bahkan ketika aritmetikanya sempurna." },
          { "kind": "p", "text": "<strong>Metode 8: Bandingkan dengan langkah penyelesaian kalkulator.</strong> Hasil dan langkah perhitungan yang ditampilkan membantu mengidentifikasi kesalahan: jika sebuah langkah menunjukkan sisi yang salah ketik atau pembagian yang terlewat, kesalahannya terlihat sebelum jawaban digunakan." }
        ]
      },
      "sec-conclusion": {
        "h2": "Setengah Batas, Pemahaman Penuh",
        "blocks": [
          { "kind": "p", "text": "Setengah keliling segitiga siku-siku adalah gagasan kecil dengan jangkauan jauh. Satu penjumlahan dan satu pembagian menghasilkan angka yang membuka jalan ke jari-jari lingkaran dalam, menggerakkan rumus Heron, dan mempertajam verifikasi luas. Rumusnya meminta tiga sisi karena batasnya memiliki tiga sisi, dan hipotenusa mendapatkan tempatnya dalam jumlah sebagai sisi yang menutup bangun. Segala hal lain dalam panduan ini, contoh yang dikerjakan, dua belas penerapan, sifat-sifat, konversi satuan, enam belas kesalahan, delapan pemeriksaan verifikasi, ada untuk melindungi satu total yang dibelah dua itu dari kesalahan pelabelan dan satuan kecil yang menghasilkan jawaban salah yang tampak masuk akal." },
          { "kind": "p", "text": "Gunakan kalkulator halaman ini setiap kali ketiga sisi terukur, pulihkan sisi yang hilang melalui teorema Pythagoras ketika tidak, dan periksa hasilnya terhadap batas c < s < a + b sebelum angkanya masuk ke gambar atau model. Ketika pertanyaan beralih ke permukaan di dalam batas, rumus Heron dan kalkulator luas sudah menunggu; ketika beralih ke lingkaran di dalam segitiga, jari-jari lingkaran dalam tinggal satu pembagian lagi." }
        ]
      }
    },
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedIntro": "Masing-masing alat ini memperluas perhitungan setengah keliling ke satu arah: batas penuh, permukaan, rute luas-dari-setengah-keliling, lingkaran tertulis, atau sisi-sisi hilang di balik semuanya.",
    "relatedItems": [
      "Kalkulator Keliling Segitiga Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku dari Setengah Keliling",
      "Kalkulator Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
      "Kalkulator Sisi Segitiga Siku-Siku"
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      {
        "question": "Apa rumus setengah keliling segitiga siku-siku?",
        "answer": "Rumusnya adalah s = (a + b + c) / 2, di mana a dan b adalah dua kaki yang membentuk sudut 90 derajat dan c adalah hipotenusa, sisi terpanjang. Jumlahkan ketiga panjang sisi, lalu bagi totalnya dengan dua. Setara, s = P / 2, di mana P adalah keliling penuh."
      },
      {
        "question": "Apa arti setengah keliling?",
        "answer": "Setengah keliling berarti setengah dari keliling. Semi berarti setengah dan perimeter berarti panjang batas seluruhnya, sehingga setengah keliling adalah tepat setengah dari total jarak mengelilingi segitiga. Ia adalah pengukuran geometris turunan yang digunakan sebagai nilai antara dalam banyak rumus segitiga."
      },
      {
        "question": "Mengapa setengah keliling itu setengah dari keliling?",
        "answer": "Itu definisinya: setengah keliling dibangun dengan mengambil keliling penuh dan membagi dua. Nilai setengah ternyata menjadi besaran yang menjadi tujuan penulisan rumus seperti rumus Heron dan hubungan jari-jari lingkaran dalam K = rs, itulah mengapa ia mendapatkan nama dan simbolnya sendiri, s."
      },
      {
        "question": "Apakah saya membutuhkan ketiga sisi untuk menghitung setengah keliling?",
        "answer": "Ya. Setengah keliling adalah setengah dari jumlah ketiga panjang sisi, sehingga setiap sisi harus diketahui, termasuk hipotenusa. Jika satu sisi hilang, pulihkan dulu dengan teorema Pythagoras: c = √(a² + b²) untuk hipotenusa yang hilang, atau a = √(c² − b²) untuk kaki yang hilang."
      },
      {
        "question": "Apa perbedaan keliling dan setengah keliling?",
        "answer": "Keliling P = a + b + c adalah panjang batas penuh, sedangkan setengah keliling s = (a + b + c) / 2 adalah setengahnya. Gunakan keliling untuk pekerjaan batas fisik seperti pagar atau bingkai, dan setengah keliling untuk pekerjaan rumus seperti rumus Heron, perhitungan jari-jari lingkaran dalam, dan pembuktian geometris. Untuk segitiga 3-4-5, P = 12 dan s = 6."
      },
      {
        "question": "Apakah setengah keliling diukur dalam satuan persegi?",
        "answer": "Tidak. Setengah keliling adalah pengukuran panjang satu dimensi, sehingga menggunakan satuan panjang: meter, sentimeter, kaki, atau inci, sesuai panjang sisi. Satuan persegi milik luas. Melaporkan setengah keliling 6 cm² adalah kesalahan kategori; satuan yang benar adalah 6 cm."
      },
      {
        "question": "Berapa setengah keliling segitiga siku-siku 3-4-5?",
        "answer": "Jumlahkan sisi-sisinya: 3 + 4 + 5 = 12, lalu bagi dua: s = 6 satuan. Keliling penuhnya adalah 12 satuan. Sisi-sisinya memenuhi 3² + 4² = 5², menegaskan sudut siku-siku, dan setengah keliling 6 melebihi hipotenusa 5, sebagaimana harusnya untuk segitiga valid mana pun."
      },
      {
        "question": "Mengapa setengah keliling digunakan dalam rumus Heron?",
        "answer": "Rumus Heron, K = √(s(s − a)(s − b)(s − c)), menghitung luas dari panjang sisi saja, dan ditulis dalam setengah keliling s serta selisih s − a, s − b, s − c. Menghitung s terlebih dahulu memusatkan ungkapan dan membuatnya ringkas. Untuk 3-4-5, s = 6 memberi K = √(6 × 3 × 2 × 1) = 6 satuan persegi."
      },
      {
        "question": "Bagaimana setengah keliling berhubungan dengan jari-jari lingkaran dalam?",
        "answer": "Luas, jari-jari lingkaran dalam, dan setengah keliling memenuhi K = rs, sehingga r = K / s. Untuk segitiga siku-siku ini disederhanakan menjadi r = (a + b − c) / 2. Untuk 3-4-5: s = 6, K = 6, sehingga r = 1. Setengah keliling adalah jembatan yang mengubah tiga panjang sisi menjadi jari-jari lingkaran tertulis."
      },
      {
        "question": "Bisakah saya menghitung setengah keliling jika satu sisi hilang?",
        "answer": "Ya, tetapi temukan dulu sisi yang hilang. Dengan kaki 6 dan 8, hipotenusanya adalah √(36 + 64) = 10, sehingga s = (6 + 8 + 10) / 2 = 12. Dengan hipotenusa 13 dan kaki 12, kaki yang hilang adalah √(169 − 144) = 5, sehingga s = (5 + 12 + 13) / 2 = 15. Kalkulator di halaman ini membutuhkan ketiga sisi dimasukkan."
      },
      {
        "question": "Bagaimana saya bisa memverifikasi jawaban setengah keliling saya?",
        "answer": "Gandakan: 2s harus sama dengan keliling penuh a + b + c. Periksa bahwa s melebihi hipotenusa (s > c) dan berada di bawah jumlah kedua kaki (s < a + b). Pastikan hubungan Pythagoras a² + b² = c², verifikasi ketiga sisi berbagi satu satuan, dan bandingkan dengan langkah penyelesaian kalkulator."
      },
      {
        "question": "Bisakah setengah keliling digunakan untuk menghitung luas segitiga?",
        "answer": "Ya, melalui rumus Heron: K = √(s(s − a)(s − b)(s − c)). Ia adalah pemeriksaan independen atas rumus langsung segitiga siku-siku K = ab / 2. Untuk 3-4-5 keduanya menghasilkan 6 satuan persegi. Rumus Heron paling berharga ketika tidak ada tinggi yang diketahui atau ketika Anda menginginkan perhitungan kedua yang tidak terkait untuk menegaskan luasnya."
      }
    ]
  }
};
