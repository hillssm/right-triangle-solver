export const B5_ID = {
  "id": {
    "tocHeading": "Di Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Menghitung Keliling dan Setengah Keliling Segitiga Siku-Siku",
      "sec-right-triangle": "Apa Itu Segitiga Siku-Siku?",
      "sec-perimeter": "Apa Itu Keliling Segitiga Siku-Siku?",
      "sec-semiperimeter": "Apa Itu Setengah Keliling Segitiga Siku-Siku?",
      "sec-difference": "Keliling vs. Setengah Keliling: Apa Perbedaannya?",
      "sec-modes": "Memahami Dua Mode Kalkulator",
      "sec-howto": "Cara Menggunakan Kalkulator Keliling dan Setengah Keliling Segitiga Siku-Siku",
      "sec-examples": "Contoh Langkah demi Langkah Keliling dan Setengah Keliling Segitiga Siku-Siku",
      "sec-practical": "Penerapan Nyata Keliling dan Setengah Keliling Segitiga Siku-Siku",
      "sec-missing-side": "Cara Menghitung Keliling Ketika Satu Sisi Tidak Diketahui",
      "sec-pythagoras": "Bagaimana Teorema Pythagoras Berkaitan dengan Keliling Segitiga Siku-Siku?",
      "sec-advanced": "Bagaimana Setengah Keliling Digunakan dalam Rumus Segitiga Lain?",
      "sec-perimeter-area": "Apa Perbedaan antara Keliling dan Luas?",
      "sec-units": "Memahami Satuan Ukur dalam Perhitungan Keliling dan Setengah Keliling",
      "sec-scaling": "Bagaimana Perubahan Panjang Sisi Mempengaruhi Keliling dan Setengah Keliling?",
      "sec-applications": "Penerapan Praktis Keliling Segitiga Siku-Siku",
      "sec-mistakes": "Kesalahan Umum dalam Menghitung Keliling dan Setengah Keliling Segitiga Siku-Siku",
      "sec-verify": "Cara Memeriksa Apakah Keliling Segitiga Siku-Siku Anda Benar",
      "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "sec-faq": "Pertanyaan yang Sering Diajukan",
      "sec-conclusion": "Satu Batas, Dua Ukuran yang Berguna"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Menghitung Keliling dan Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Ambil [[a=3]], [[b=4]], [[c=5]]. Kelilingnya adalah [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]]. Setengah kelilingnya adalah [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]]. Inilah tepatnya yang dikembalikan Kalkulator Keliling dan Setengah Keliling Segitiga Siku-Siku untuk ketiga masukan ini." },
          { "kind": "p", "text": "Keliling menggambarkan batas keseluruhan segitiga: total panjang yang akan Anda telusuri jika berjalan mengelilingi ketiga sisinya lalu kembali ke titik awal. Setengah keliling adalah setengah dari total angka tersebut. Keduanya adalah panjang, diukur dalam satuan seperti meter, sentimeter, kaki, atau inci. Keduanya bukan luas, dan keduanya tidak dinyatakan dalam satuan persegi." },
          { "kind": "p", "text": "Tiga ukuran sisi diperlukan karena batasnya memiliki tiga rusuk, dan hipotenusa harus disertakan: ia adalah salah satu dari tiga rusuk meskipun tidak pernah menyentuh sudut siku-siku. Setengah keliling adalah setengah keliling karena beberapa rumus tingkat lanjut, termasuk rumus Heron dan hubungan jari-jari lingkaran dalam, dibangun di sekitar setengah batas, bukan keseluruhannya. Kedua perhitungan ini berguna kapan pun garis luar segitiga perlu diukur: memberi pembatas pada taman, memasang lis pada bingkai, atau memasukkan suatu panjang ke rumus berikutnya dalam soal yang lebih panjang." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Apa Itu Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Sebelum penjumlahan apa pun dimulai, ketiga sisi harus diberi label tanpa kesalahan. Simbol-simbol di bawah ini tetap sama di seluruh panduan, dan kalkulator menggunakan nama yang sama." },
          { "kind": "h3", "text": "Definisi Segitiga Siku-Siku" },
          { "kind": "p", "text": "Segitiga siku-siku adalah poligon bersisi tiga yang memuat tepat satu sudut dalam sebesar 90 derajat. Ia memiliki tiga titik sudut, tiga sisi, dua sudut lancip, dan satu sudut siku-siku yang biasanya ditandai dengan kotak kecil. Dua sisi yang membentuk sudut siku-siku adalah kaki-kakinya; sisi yang berhadapan adalah hipotenusa. Karena sudut-sudut segitiga mana pun berjumlah 180 derajat, [[A+B+C=180^\\circ]], dan dengan [[C=90^\\circ]] maka [[[\\boxed{A+B=90^\\circ}]]]: kedua sudut lancip saling berpenyiku, sehingga mengetahui salah satunya menentukan yang lain." },
          { "kind": "h3", "text": "Apa Itu Dua Kaki?" },
          { "kind": "p", "text": "Kaki [[a]] berhadapan dengan sudut [[A]]; kaki [[b]] berhadapan dengan sudut [[B]]. Kedua kaki bertemu di titik sudut siku-siku dan saling tegak lurus: masing-masing membentuk 90 derajat terhadap yang lain. Keduanya membentuk sudut kotak segitiga, jenis rusuk yang akan Anda ukur di sepanjang sudut dinding atau tepi meja. Untuk pekerjaan keliling, peran keduanya sederhana: keduanya adalah rusuk batas, sehingga keduanya ikut dijumlahkan." },
          { "kind": "h3", "text": "Apa Itu Hipotenusa?" },
          { "kind": "p", "text": "Hipotenusa adalah sisi yang berhadapan dengan sudut siku-siku, selalu sisi terpanjang pada segitiga. Ia tidak pernah membentuk sudut siku-siku; ia membentang menyeberanginya, menghubungkan ujung-ujung jauh kedua kaki. Ia berbeda dari kaki-kaki dalam posisi maupun panjang: kaki-kaki bertemu pada 90 derajat, sedangkan hipotenusa bertemu setiap kaki pada sudut lancip. Ia harus disertakan saat menghitung keliling keseluruhan, karena batasnya belum lengkap sampai ketiga rusuk dihitung. Jika kedua kaki diketahui, teorema Pythagoras menentukannya melalui [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Mengapa Sudut Siku-Siku Penting?" },
          { "kind": "p", "text": "Sudut siku-siku inilah yang menjadikan segitiga sebagai segitiga siku-siku, dan segala hal lain mengikutinya. Ia mengidentifikasi bentuk pada gambar atau di lapangan: temukan sudut kotaknya, maka pelabelan sisi pun jelas. Ia adalah syarat yang dibutuhkan teorema Pythagoras sebelum dapat diterapkan. Dalam pengukuran konstruksi dan gambar teknik, sudut siku-siku adalah acuan yang menjadi patokan penyikuan segala sesuatu: dinding, rangka, dan braket diperiksa dengannya. Untuk verifikasi, sudut siku-siku adalah janji yang harus dipenuhi ketiga panjang sisi melalui [[a^2+b^2=c^2]]." },
          { "kind": "h3", "text": "Bagaimana Cara Mengidentifikasi Label Sisi yang Benar?" },
          { "kind": "p", "text": "[[a]] dan [[b]] adalah kaki-kaki, [[c]] adalah hipotenusa, dan pada segitiga siku-siku tak merosot [[c]] adalah sisi terpanjang. Sudut siku-siku berhadapan dengan [[c]], sehingga titik sudut yang membawa penanda kotak memberi tahu sisi mana yang merupakan [[c]]: yaitu sisi yang tidak menyentuh titik sudut tersebut. Pemeriksaan urutan cepat membantu: urutkan ketiga angka, dan yang terbesar harus berperan sebagai [[c]]. Jika sisi terbesar tidak berhadapan dengan sudut kotak, labelnya salah, dan setiap perhitungan yang dibangun di atasnya juga akan salah." }
        ],
        "imgAlt": "Segitiga siku-siku ABC dengan kaki a dan b, hipotenusa c, penanda sudut siku-siku, dan rumus P = a+b+c, s = (a+b+c)/2",
        "figcaption": "Segitiga ABC dengan kaki a dan b, hipotenusa c, dan kedua rumus batas."
      },
      "sec-perimeter": {
        "h2": "Apa Itu Keliling Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Keliling adalah total jarak mengelilingi batas luar suatu bangun datar. Untuk segitiga, ia adalah jumlah panjang ketiga sisinya, [[[\\boxed{P=a+b+c}]]], dan setiap sisi harus disertakan karena setiap sisi adalah bagian dari batas. Jika satu sisi dilewatkan, hasilnya bukan keliling; ia hanyalah lintasan sebagian." },
          { "kind": "h3", "text": "Mengapa Hipotenusa Ikut Dihitung dalam Keliling?" },
          { "kind": "p", "text": "Keliling mengukur batas luar yang lengkap, bukan hanya dua sisi yang saling tegak lurus. Meskipun hipotenusa berhadapan dengan sudut siku-siku, ia tetap salah satu dari tiga rusuk batas: telusuri segitiganya dan Anda juga akan menelusuri hipotenusanya. Melewatkannya berarti mengukur dua sisi dari lintasan yang terputus, bukan garis luar segitiga yang tertutup. Rumusnya memiliki tiga suku karena bentuknya memiliki tiga rusuk; tidak ada rusuk yang opsional, bagaimana pun orientasi segitiga di atas kertas atau di lapangan." },
          { "kind": "h3", "text": "Cara Menghitung Keliling Langkah demi Langkah" },
          { "kind": "p", "text": "Gunakan [[a=3]], [[b=4]], [[c=5]]. Substitusikan ke rumus: [[P=3+4+5]]. Jumlahkan dua panjang pertama: [[P=7+5]]. Hasil akhir: [[[\\boxed{P=12\\text{ units}}]]]. Secara fisik, 12 satuan adalah panjang pita ukur yang dibentangkan di sepanjang ketiga rusuk dari ujung ke ujung: garis luar segitiga yang utuh dinyatakan sebagai satu panjang yang kontinu." },
          { "kind": "h3", "text": "Apa yang Diberitahukan Keliling dalam Pekerjaan Praktis?" },
          { "kind": "p", "text": "Ia menjawab satu pertanyaan di banyak bidang: berapa banyak bahan yang dihabiskan garis luarnya? Ini mencakup bahan pembatas, lis jendela, pembatas pagar, strip pelindung, bingkai dekoratif, jalur kabel, tepi kain, dan profil logam tepi. Dalam setiap kasus, keliling adalah angka yang dibawa ke pemasok. Ia menggambarkan panjang garis luar segitiga yang utuh, bukan jumlah permukaan di dalamnya: 12 meter lis tidak memberi tahu apa pun tentang luas yang dicakup jendela, dan memang tidak pernah dimaksudkan demikian." }
        ]
      },
      "sec-semiperimeter": {
        "h2": "Apa Itu Setengah Keliling Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Setengah keliling tepat setengah dari keliling penuh segitiga: [[[\\boxed{s=\\frac{P}{2}}]]]. Karena [[P=a+b+c]], maka [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Penjumlahan dilakukan sebelum pembagian karena setengah keliling membagi dua seluruh batas, bukan setiap sisi secara terpisah. Membagi dua setiap sisi terlebih dahulu lalu menjumlahkannya akan menghasilkan angka yang sama di sini, tetapi rumus ini menyatakan urutan gagasan yang benar: jumlahkan batasnya, lalu bagi dua." },
          { "kind": "h3", "text": "Cara Menghitung Setengah Keliling Langkah demi Langkah" },
          { "kind": "p", "text": "Gunakan [[a=3]], [[b=4]], [[c=5]]. Jumlahkan ketiga sisi: [[s=\\frac{3+4+5}{2}]]. Sederhanakan totalnya: [[s=\\frac{12}{2}]]. Hasil akhir: [[[\\boxed{s=6\\text{ units}}]]]. Setengah keliling adalah ukuran geometris turunan yang dipakai dalam beberapa rumus segitiga penting; ia jarang menggambarkan sesuatu yang akan Anda ukur langsung dengan pita ukur, itulah sebabnya kalkulator menghitungnya untuk Anda." },
          { "kind": "h3", "text": "Mengapa Setengah Keliling Dipakai dalam Geometri?" },
          { "kind": "p", "text": "Ia adalah variabel alami rumus Heron, hubungan jari-jari lingkaran dalam [[K=rs]], dan geometri lingkaran dalam secara umum. Rumus-rumus luas segitiga terus menghasilkan setengah-setengah, dan setengah keliling menyerap semuanya sekaligus, itulah sebabnya bukti-bukti dan rumus tingkat lanjut lebih menyukainya daripada keliling penuh. Ketika suatu rumus meminta [[s]], memasukkan [[P]] sebagai gantinya akan menggandakan atau merusak hasilnya dengan cara lain, sehingga perbedaan ini layak dijaga ketajamannya sejak awal." },
          { "kind": "h3", "text": "Apakah Setengah Keliling Merupakan Setengah Batas Secara Fisik?" },
          { "kind": "p", "text": "Tidak selalu. Setengah keliling adalah setengah dari keliling numerik: 6 satuan ketika kelilingnya 12. Ia tidak selalu menggambarkan lintasan fisik kontinu yang mencakup setengah batas segitiga. Tidak ada satu pun perjalanan di sepanjang rusuk-rusuk yang merupakan \"setengah keliling\" sebagaimana keliling adalah perjalanan penuh: setengahnya adalah angka, bukan rute. Memperlakukan [[s]] sebagai putaran setengah fisik menimbulkan kebingungan; perlakukan ia sebagai setengah dari total, nilai yang dibutuhkan rumus-rumus." },
          { "kind": "h3", "text": "Dapatkah Setengah Keliling Lebih Kecil dari Sisi Terpanjang?" },
          { "kind": "p", "text": "Tidak. Ketidaksamaan segitiga mensyaratkan [[a+b>c]]: dua sisi yang lebih pendek jika digabung harus melebihi sisi terpanjang, atau segitiga tidak dapat tertutup. Menambahkan [[c]] ke kedua ruas menghasilkan [[a+b+c>2c]], dan membagi dua menghasilkan [[[\\boxed{s>c}]]]. Untuk segitiga tak merosot yang valid, setengah keliling lebih besar dari sisi terpanjang. Ini adalah pemeriksaan matematis yang berguna: jika setengah keliling yang dilaporkan lebih kecil dari hipotenusa, ukuran-ukurannya tidak dapat membentuk segitiga nyata." }
        ]
      },
      "sec-difference": {
        "h2": "Keliling vs. Setengah Keliling: Apa Perbedaannya?",
        "blocks": [
          { "kind": "p", "text": "Keliling: total panjang mengelilingi segitiga, [[P=a+b+c]]. Setengah keliling: setengah dari total keliling, [[s=\\frac{a+b+c}{2}]]. Tiga sisi yang sama, besaran geometris yang berbeda: yang satu utuh, yang lain setengah. Keduanya berkaitan melalui [[s=\\frac{P}{2}]] dan [[P=2s]], dan kalkulator tidak pernah memakai kedua simbol secara bergantian." },
          { "kind": "h3", "text": "Perbandingan Numerik" },
          { "kind": "p", "text": "Gunakan segitiga siku-siku 6-8-10. Keliling: [[P=6+8+10]], [[[\\boxed{P=24}]]]. Setengah keliling: [[s=\\frac{24}{2}]], [[[\\boxed{s=12}]]]. Kedua angka berbeda dengan faktor dua, selalu: [[s=\\frac{P}{2}]] dan [[P=2s]]. Perbedaannya bukan bentuk yang berbeda atau segitiga yang berbeda; ia adalah batas yang sama yang dihitung sekali versus dihitung sebagai setengah." },
          { "kind": "h3", "text": "Ukuran Mana yang Sebaiknya Anda Gunakan?" },
          { "kind": "p", "text": "Gunakan keliling untuk memberi pembatas, membingkai, melis, memagar, dan memperkirakan bahan di sekitar suatu objek: pekerjaan apa pun yang pertanyaannya adalah berapa banyak bahan yang dihabiskan garis luar. Gunakan setengah keliling untuk rumus Heron, hubungan jari-jari lingkaran dalam, perhitungan lingkaran dalam, dan soal geometri yang melibatkan panjang sisi segitiga: pekerjaan apa pun yang rumusnya meminta setengah batas sebagai masukannya. Pilihan ditentukan oleh tugasnya, bukan oleh selera: perkiraan lis menginginkan [[P]], bukti luas menginginkan [[s]]." },
          { "kind": "h3", "text": "Apakah Setengah Keliling Mengukur Setengah Luas Segitiga?" },
          { "kind": "p", "text": "Tidak. Keliling maupun setengah keliling adalah ukuran linear: panjang, dilaporkan dalam meter atau kaki, tidak pernah meter persegi. Luas mengukur permukaan dua dimensi yang dilingkupi segitiga dan memakai satuan persegi. Membagi dua suatu panjang tetap menghasilkan panjang. Peringatan ini layak diulang karena namanya terdengar berkaitan: setengah keliling adalah setengah dari keliling, bukan setengah dari luas, dan tidak ada pembagian suatu batas yang dapat menghasilkan permukaan." }
        ],
        "imgAlt": "Segitiga 6-8-10: batang keliling 24 satuan dibagi dua menjadi batang setengah keliling 12 satuan",
        "figcaption": "P = 24 dibagi dua menjadi s = 12: batas yang utuh, lalu setengahnya."
      },
      "sec-modes": {
        "h2": "Memahami Dua Mode Kalkulator",
        "blocks": [
          { "kind": "p", "text": "Kalkulator menyimpan kedua perhitungan dalam dua mode terpisah karena keduanya menjawab pertanyaan yang berbeda dari tiga masukan yang sama. Memilih mode berarti memilih pertanyaan mana yang sedang diajukan." },
          { "kind": "h3", "text": "Mode Kalkulator Keliling" },
          { "kind": "p", "text": "Mode ini menghitung total panjang batas. Masukan: kaki [[a]], kaki [[b]], hipotenusa [[c]]. Rumus: [[P=a+b+c]]. Keluaran: keliling [[P]]. Hasilnya berguna untuk memperkirakan total panjang bahan yang dibutuhkan di sekitar garis luar segitiga: angka yang Anda bawa ke pemasok ketika pekerjaannya adalah pembatas, lis, atau bingkai." },
          { "kind": "h3", "text": "Mode Kalkulator Setengah Keliling" },
          { "kind": "p", "text": "Mode ini menghitung setengah dari total keliling. Masukan: kaki [[a]], kaki [[b]], hipotenusa [[c]]. Rumus: [[s=\\frac{a+b+c}{2}]]. Keluaran: setengah keliling [[s]]. Hasilnya berguna sebagai nilai antara dalam perhitungan segitiga tingkat lanjut: angka yang Anda masukkan ke rumus Heron atau hubungan jari-jari lingkaran dalam ketika soal berlanjut melewati batas." },
          { "kind": "h3", "text": "Mengapa Ada Dua Mode Terpisah?" },
          { "kind": "p", "text": "Kedua perhitungan memakai tiga ukuran sisi yang sama tetapi menghasilkan besaran geometris yang berbeda, dan mencampuradukkannya adalah salah satu kesalahan paling umum dalam topik ini. Dua mode berlabel menjaga niat tetap eksplisit: tombolnya bertuliskan Calculate Perimeter atau Calculate Semiperimeter, dan hasilnya diberi label [[P]] atau [[s]]. Kedua mode menghemat pengguna dari perhitungan manual sekaligus menjaga kedua jawaban mustahil tertukar. Jangan gambarkan mode setengah keliling sebagai kalkulator luas: keluarannya adalah panjang, dan tetap panjang." }
        ]
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Keliling dan Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Langkah-langkah di bawah ini mengikuti tata letak di layar untuk setiap mode, dari mengidentifikasi ukuran hingga hasil yang terverifikasi. Kedua mode memakai tiga masukan yang sama dan hanya berbeda pada perhitungan akhirnya." },
          { "kind": "h3", "text": "Mode Keliling" },
          { "kind": "steps", "steps": [
            "<strong>Pilih mode Perimeter.</strong> Ini memberi tahu kalkulator bahwa tujuannya adalah total panjang batas.",
            "<strong>Identifikasi kaki a.</strong> Ini adalah salah satu dari dua sisi yang membentuk sudut siku-siku.",
            "<strong>Identifikasi kaki b.</strong> Ini adalah sisi lain yang membentuk sudut siku-siku.",
            "<strong>Identifikasi hipotenusa c.</strong> Ini adalah sisi terpanjang, berhadapan dengan sudut siku-siku.",
            "<strong>Masukkan kaki a.</strong> Ketikkan panjang yang terukur ke kolom pertama.",
            "<strong>Masukkan kaki b.</strong> Ketikkan panjang yang terukur ke kolom kedua.",
            "<strong>Masukkan hipotenusa c.</strong> Ketikkan panjang yang terukur ke kolom ketiga.",
            "<strong>Pilih satuan yang sesuai.</strong> Ketiga sisi harus memakai satu satuan yang sama sebelum penjumlahan bermakna.",
            "<strong>Klik Calculate Perimeter.</strong> Kalkulator menjumlahkan ketiga sisi.",
            "<strong>Tinjau hasilnya.</strong> Pastikan keliling melebihi sisi terpanjang.",
            "<strong>Periksa langkah penyelesaian yang ditampilkan.</strong> Langkah-langkah itu menunjukkan [[P=a+b+c]] dengan nilai yang dimasukkan terisi.",
            "<strong>Pastikan keluarannya memakai satuan ukur linear.</strong> Meter, sentimeter, kaki, atau inci: tidak pernah satuan persegi."
          ] },
          { "kind": "h3", "text": "Mode Setengah Keliling" },
          { "kind": "steps", "steps": [
            "<strong>Pilih mode Semiperimeter.</strong> Ini memberi tahu kalkulator bahwa tujuannya adalah setengah batas.",
            "<strong>Masukkan kaki a.</strong> Identifikasi yang sama seperti pada mode keliling.",
            "<strong>Masukkan kaki b.</strong> Sisi kedua yang membentuk sudut siku-siku.",
            "<strong>Masukkan hipotenusa c.</strong> Sisi terpanjang, berhadapan dengan sudut siku-siku.",
            "<strong>Pilih satuan ukur yang selaras.</strong> Satu satuan untuk ketiga sisi.",
            "<strong>Klik Calculate Semiperimeter.</strong> Kalkulator menjumlahkan ketiga sisi lalu membagi dua totalnya.",
            "<strong>Tinjau hasilnya.</strong> Hasilnya harus jelas lebih kecil dari keliling.",
            "<strong>Pastikan hasilnya tepat setengah dari keliling.</strong> Periksa [[s=\\frac{P}{2}]] terhadap keluaran mode keliling.",
            "<strong>Periksa langkah penyelesaian dan visualisasi langsungnya.</strong> Langkah-langkah menunjukkan penjumlahan dan pembagian dua; gambarnya menunjukkan segitiga asal angka-angka itu.",
            "<strong>Gunakan Reset saat memulai perhitungan baru.</strong> Ini mengosongkan ketiga kolom untuk awal yang bersih."
          ] },
          { "kind": "p", "text": "Visualisasi langsung menggambar segitiga dari sisi-sisi yang dimasukkan, yang membantu menangkap hipotenusa yang salah label sebelum angka-angkanya dipercaya. Diagram rumus menunjukkan di mana setiap sisi berada dalam [[P=a+b+c]] atau [[s=\\frac{a+b+c}{2}]]. Tidak satu pun mode menerima dua sisi: kalkulator membutuhkan ketiga panjang batas, sehingga sisi yang hilang harus ditemukan terlebih dahulu, seperti yang dijelaskan bagian sisi-hilang." }
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Keliling dan Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Empat tripel Pythagoras yang terkenal menunjukkan perhitungan lengkap untuk kedua ukuran. Masing-masing menjumlahkan ketiga sisi untuk keliling, lalu membagi dua totalnya untuk setengah keliling. Aritmetikanya sengaja ditampilkan lengkap agar polanya tidak mungkin salah tafsir." },
          { "kind": "h3", "text": "Contoh 1: Segitiga Siku-Siku 3-4-5" },
          { "kind": "p", "text": "Diketahui [[a=3]], [[b=4]], [[c=5]]. Hitung keliling: [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]]. Hitung setengah keliling: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]]. Kedua hasil benar karena keliling menghitung setiap rusuk batas satu kali, dan setengah keliling tepat setengah dari hitungan itu." },
          { "kind": "h3", "text": "Contoh 2: Segitiga Siku-Siku 6-8-10" },
          { "kind": "p", "text": "Diketahui [[a=6]], [[b=8]], [[c=10]]. Keliling: [[P=6+8+10]], [[[\\boxed{P=24\\text{ units}}]]]. Setengah keliling: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ units}}]]]. Menggandakan ketiga sisi menggandakan kedua ukuran: 24 adalah dua kali 12, dan 12 adalah dua kali 6. Menskalakan segitiga menskalakan ukuran-ukuran batasnya dengan faktor yang sama." },
          { "kind": "h3", "text": "Contoh 3: Segitiga Siku-Siku 5-12-13" },
          { "kind": "p", "text": "Diketahui [[a=5]], [[b=12]], [[c=13]]. Keliling: [[P=5+12+13]], [[[\\boxed{P=30\\text{ units}}]]]. Setengah keliling: [[s=\\frac{30}{2}]], [[[\\boxed{s=15\\text{ units}}]]]. Perhatikan bahwa 15 melebihi hipotenusa 13, sebagaimana disyaratkan pemeriksaan ketidaksamaan segitiga." },
          { "kind": "h3", "text": "Contoh 4: Segitiga Siku-Siku 8-15-17" },
          { "kind": "p", "text": "Diketahui [[a=8]], [[b=15]], [[c=17]]. Keliling: [[P=8+15+17]], [[[\\boxed{P=40\\text{ units}}]]]. Setengah keliling: [[s=\\frac{40}{2}]], [[[\\boxed{s=20\\text{ units}}]]]. Sekali lagi setengah keliling melampaui sisi terpanjang: 20 berbanding 17." },
          { "kind": "h3", "text": "Perbandingan Contoh-Contoh Dasar" },
          { "kind": "p", "text": "Seiring bertambahnya dimensi segitiga, [[P]] maupun [[s]] tumbuh seiring sisi-sisinya. Tabel menunjukkan dua pola sekaligus: keliling setiap baris adalah jumlah polos ketiga sisinya, dan keliling setiap baris tepat dua kali setengah kelilingnya. Baris 3-4-5 dan 6-8-10 juga menunjukkan penskalaan secara langsung: setiap sisi digandakan, kedua ukuran batas digandakan." }
        ],
        "table": {
          "headers": ["Segitiga", "Kaki a", "Kaki b", "Hipotenusa c", "Keliling P", "Setengah keliling s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["6-8-10", "6", "8", "10", "24", "12"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Penerapan Nyata Keliling dan Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi yang dikerjakan membawa kedua rumus dari halaman ini ke bengkel dan lapangan. Masing-masing menyebutkan objek atau model segitiga siku-siku yang disederhanakan, mengerjakan keliling dan setengah keliling melalui rumus-rumusnya, dan menyatakan tafsir praktis dari hasilnya. Ini adalah model yang disederhanakan: tidak setiap jendela, atap, taman, kanopi, panel, atau struktur penyangga nyata membentuk segitiga siku-siku yang tepat, dan objek tak beraturan harus dibagi menjadi bentuk-bentuk yang lebih sederhana sebelum rumus-rumusnya berlaku. Kelonggaran bahan mungkin diperlukan, sisa potongan tidak termasuk, batas melengkung memerlukan perhitungan berbeda, kekuatan struktur tidak dapat ditentukan hanya dari keliling, dan ukuran konstruksi aktual harus diverifikasi sebelum membeli bahan." },
          { "kind": "h3", "text": "Contoh 1: Bingkai Jendela Kaca Segitiga" },
          { "kind": "p", "text": "Sebuah jendela segitiga siku-siku memiliki [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Keliling: [[P=3+4+5]], [[[\\boxed{P=12\\text{ m}}]]]. Setengah keliling: [[s=\\frac{12}{2}]], [[[\\boxed{s=6\\text{ m}}]]]. Dua belas meter adalah total panjang mengelilingi garis luar segitiga jendela: stok bingkai yang dipesan sebelum kelonggaran miter dan sisa potongan." },
          { "kind": "h3", "text": "Contoh 2: Lis Tepi Atap" },
          { "kind": "p", "text": "Sebuah penampang ujung atap segitiga memiliki [[a=6\\text{ ft}]], [[b=8\\text{ ft}]], [[c=10\\text{ ft}]]. Keliling: [[P=6+8+10]], [[[\\boxed{P=24\\text{ ft}}]]]. Setengah keliling: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ ft}}]]]. Keliling memperkirakan panjang lis di sekitar garis luar segitiga ujung atap." },
          { "kind": "h3", "text": "Contoh 3: Pembatas Taman" },
          { "kind": "p", "text": "Sebuah petak taman segitiga siku-siku memiliki [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Keliling: [[P=5+12+13]], [[[\\boxed{P=30\\text{ m}}]]]. Setengah keliling: [[s=15\\text{ m}]]. Keliling memperkirakan panjang penuh pembatas taman di sekitar petak." },
          { "kind": "h3", "text": "Contoh 4: Braket Penyangga Baja" },
          { "kind": "p", "text": "Sebuah braket logam segitiga memiliki [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Keliling: [[P=8+15+17]], [[[\\boxed{P=40\\text{ cm}}]]]. Setengah keliling: [[[\\boxed{s=20\\text{ cm}}]]]. Keliling menggambarkan tepi luar braket, berguna saat menentukan penyelesaian tepi." },
          { "kind": "h3", "text": "Contoh 5: Panel Kain Segitiga" },
          { "kind": "p", "text": "Sebuah panel kain segitiga siku-siku memiliki [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Keliling: [[P=9+12+15]], [[[\\boxed{P=36\\text{ ft}}]]]. Setengah keliling: [[[\\boxed{s=18\\text{ ft}}]]]. Keliling memperkirakan panjang tepi sebelum kampuh ditambahkan." },
          { "kind": "h3", "text": "Contoh 6: Bingkai Papan Tanda" },
          { "kind": "p", "text": "Sebuah papan tanda berbentuk segitiga siku-siku dengan [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Keliling: [[P=12+16+20]], [[[\\boxed{P=48\\text{ cm}}]]]. Setengah keliling: [[[\\boxed{s=24\\text{ cm}}]]]. Total keliling memperkirakan bahan bingkai untuk papan tanda." },
          { "kind": "h3", "text": "Contoh 7: Batas Lansekap" },
          { "kind": "p", "text": "Sebuah petak lansekap segitiga siku-siku memiliki [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Keliling: [[P=7+24+25]], [[[\\boxed{P=56\\text{ m}}]]]. Setengah keliling: [[[\\boxed{s=28\\text{ m}}]]]. Keliling memperkirakan bahan pembatas di sekitar petak." },
          { "kind": "h3", "text": "Contoh 8: Penyangga Panel Surya Segitiga" },
          { "kind": "p", "text": "Sebuah rangka penyangga segitiga yang disederhanakan memiliki [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Keliling: [[P=9+40+41]], [[[\\boxed{P=90\\text{ m}}]]]. Setengah keliling: [[[\\boxed{s=45\\text{ m}}]]]. Ini adalah panjang ketiga sisi rangka segitiga yang dimodelkan, titik awal untuk penentuan dimensi batang." },
          { "kind": "h3", "text": "Contoh 9: Tepi Kanopi Segitiga" },
          { "kind": "p", "text": "Sebuah petak kanopi segitiga siku-siku memiliki [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Keliling: [[P=15+20+25]], [[[\\boxed{P=60\\text{ ft}}]]]. Setengah keliling: [[[\\boxed{s=30\\text{ ft}}]]]. Keliling memperkirakan bahan pembatas untuk tepi kanopi." },
          { "kind": "h3", "text": "Contoh 10: Rangka Ujung Atap Gudang" },
          { "kind": "p", "text": "Sebuah rangka ujung atap segitiga siku-siku yang disederhanakan memiliki [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Keliling: [[P=11+60+61]], [[[\\boxed{P=132\\text{ m}}]]]. Setengah keliling: [[[\\boxed{s=66\\text{ m}}]]]. Hasilnya mewakili garis luar penuh penampang segitiga." },
          { "kind": "h3", "text": "Contoh 11: Panel Fabrikasi Segitiga" },
          { "kind": "p", "text": "Sebuah panel industri segitiga siku-siku memiliki [[a=13\\text{ cm}]], [[b=84\\text{ cm}]], [[c=85\\text{ cm}]]. Keliling: [[P=13+84+85]], [[[\\boxed{P=182\\text{ cm}}]]]. Setengah keliling: [[[\\boxed{s=91\\text{ cm}}]]]. Keliling memperkirakan profil pelindung tepi untuk panel." },
          { "kind": "h3", "text": "Contoh 12: Struktur Penyangga Segitiga Besar" },
          { "kind": "p", "text": "Sebuah struktur penyangga segitiga siku-siku memiliki [[a=28\\text{ m}]], [[b=45\\text{ m}]], [[c=53\\text{ m}]]. Keliling: [[P=28+45+53]], [[[\\boxed{P=126\\text{ m}}]]]. Setengah keliling: [[[\\boxed{s=63\\text{ m}}]]]. Ukuran-ukuran ini berfungsi sebagai masukan geometris untuk perhitungan teknik lanjutan." },
          { "kind": "h3", "text": "Perbandingan Contoh-Contoh Praktis" }
        ],
        "table": {
          "headers": ["Penerapan praktis", "Kaki a", "Kaki b", "Hipotenusa c", "Keliling P", "Setengah keliling s", "Satuan ukur"],
          "rows": [
            ["Bingkai jendela kaca", "3", "4", "5", "12", "6", "m"],
            ["Lis tepi atap", "6", "8", "10", "24", "12", "ft"],
            ["Pembatas taman", "5", "12", "13", "30", "15", "m"],
            ["Braket baja", "8", "15", "17", "40", "20", "cm"],
            ["Panel kain", "9", "12", "15", "36", "18", "ft"],
            ["Bingkai papan tanda", "12", "16", "20", "48", "24", "cm"],
            ["Batas lansekap", "7", "24", "25", "56", "28", "m"],
            ["Penyangga panel surya", "9", "40", "41", "90", "45", "m"],
            ["Tepi kanopi", "15", "20", "25", "60", "30", "ft"],
            ["Ujung atap gudang", "11", "60", "61", "132", "66", "m"],
            ["Panel fabrikasi", "13", "84", "85", "182", "91", "cm"],
            ["Struktur penyangga", "28", "45", "53", "126", "63", "m"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Cara Menghitung Keliling Ketika Satu Sisi Tidak Diketahui",
        "blocks": [
          { "kind": "p", "text": "Kalkulator di halaman ini memerlukan ketiga panjang sisi. Jika satu sisi tidak diketahui, hitung terlebih dahulu dengan teorema Pythagoras. Keliling tidak dapat dilengkapi dari dua sisi: dua panjang menggambarkan sudut yang terbuka, bukan batas yang tertutup." },
          { "kind": "h3", "text": "Menemukan Hipotenusa Ketika Kedua Kaki Diketahui" },
          { "kind": "p", "text": "Gunakan teorema Pythagoras dalam bentuk hipotenusanya: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]. Contoh: [[a=6]], [[b=8]]. Maka [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[c=\\sqrt{100}]], [[[\\boxed{c=10}]]]. Kini keliling dapat dihitung: [[P=6+8+10]], [[[\\boxed{P=24}]]], dengan [[s=12]] yang mengikuti dari pembagian dua." },
          { "kind": "h3", "text": "Menemukan Kaki yang Hilang Ketika Hipotenusa Diketahui" },
          { "kind": "p", "text": "Susun ulang [[a^2+b^2=c^2]] untuk mengisolasi kaki yang tidak diketahui: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]. Contoh: [[c=13]], [[b=12]]. Maka [[a=\\sqrt{13^2-12^2}]], [[a=\\sqrt{169-144}]], [[a=\\sqrt{25}]], [[[\\boxed{a=5}]]]. Keliling mengikutinya: [[P=5+12+13=30]], [[s=15]]. Pengurangan di dalam akar adalah ciri khas kaki yang hilang; hipotenusa yang hilang selalu menjumlahkan." },
          { "kind": "h3", "text": "Mengapa Sisi yang Hilang Harus Dihitung Terlebih Dahulu?" },
          { "kind": "p", "text": "Keliling memerlukan ketiga panjang batas. Sisi yang hilang tidak bisa begitu saja diabaikan atau diperkirakan tanpa alasan: dua sisi tidak membatasi segitiga, dan sisi ketiga yang ditebak menjadikan totalnya fiksi. Jika hanya dua sisi yang diketahui, <a href=\"/missing-leg-from-c-and-a-calculator/\" class=\"text-primary underline\">Kalkulator Sisi Segitiga Siku-Siku</a> menemukan sisi ketiga sebelum kalkulator halaman ini mengambil alih. Perhatikan bahwa ini adalah metode edukatif, bukan mode masukan tambahan pada kalkulator yang sudah ada: mode keliling dan setengah keliling tetap menerima tiga sisi masing-masing." }
        ],
        "imgAlt": "Segitiga siku-siku dengan kaki 6 dan 8, hipotenusa yang tidak diketahui dipecahkan menjadi 10, menghasilkan keliling 24",
        "figcaption": "Kaki 6 dan 8 menghasilkan c = 10, sehingga P = 24 dan s = 12."
      },
      "sec-pythagoras": {
        "h2": "Bagaimana Teorema Pythagoras Berkaitan dengan Keliling Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Teorema ini menyatakan [[[\\boxed{a^2+b^2=c^2}]]]. Ia menetapkan hubungan antara kedua kaki dan hipotenusa: sudut kotak memaksa ketiga panjang ke dalam keseimbangan yang tepat ini. Untuk pekerjaan keliling, teorema ini adalah jembatan antara sekumpulan ukuran yang belum lengkap dan batas yang lengkap." },
          { "kind": "h3", "text": "Mengapa Ia Penting untuk Keliling?" },
          { "kind": "p", "text": "Jika kedua kaki diketahui, hipotenusa dapat dihitung sebelum menemukan keliling yang lengkap. Tanpa teorema, sisi yang hilang akan memblokir seluruh perhitungan; dengannya, dua sisi yang diketahui cukup untuk menemukan sisi ketiga dan menyelesaikan penjumlahan. Teorema ini juga berlaku sebaliknya: hipotenusa yang diketahui dan satu kaki yang diketahui menemukan kaki lainnya. Bagaimanapun, ia mengubah soal dua sisi menjadi keliling tiga sisi." },
          { "kind": "h3", "text": "Contoh yang Dikerjakan" },
          { "kind": "p", "text": "Diketahui [[a=5]], [[b=12]]. Tentukan [[c]]: [[c=\\sqrt{5^2+12^2}]], [[c=\\sqrt{25+144}]], [[c=\\sqrt{169}]], [[[\\boxed{c=13}]]]. Hitung keliling: [[P=5+12+13]], [[[\\boxed{P=30}]]]. Hitung setengah keliling: [[s=\\frac{30}{2}]], [[[\\boxed{s=15}]]]. Satu teorema, satu penjumlahan, satu pembagian dua: rantai lengkap dari dua kaki ke kedua ukuran batas." },
          { "kind": "h3", "text": "Bagaimana Cara Memverifikasi Segitiga Siku-Siku?" },
          { "kind": "p", "text": "Ketiga ukuran harus memenuhi [[a^2+b^2=c^2]], dengan hipotenusa sebagai sisi terpanjang. Periksa juga ketidaksamaan segitiga: untuk segitiga valid mana pun, [[a+b>c]], [[a+c>b]], dan [[b+c>a]]. Syarat-syarat ini penting saat memeriksa ukuran: pemeriksaan Pythagoras yang gagal berarti segitiga tidak siku-siku, atau suatu sisi salah label; ketidaksamaan segitiga yang gagal berarti ketiga panjang tidak dapat membentuk segitiga sama sekali. Jalankan kedua pemeriksaan sebelum mempercayai keliling yang dibangun dari ukuran lapangan." }
        ]
      },
      "sec-advanced": {
        "h2": "Bagaimana Setengah Keliling Digunakan dalam Rumus Segitiga Lain?",
        "blocks": [
          { "kind": "p", "text": "Bagian ini memberi setengah keliling kedalaman matematisnya tanpa mengubah halaman ini menjadi tutorial kalkulator lain. Setengah keliling lebih dari sekadar setengah keliling: ia adalah besaran yang menghubungkan panjang sisi dengan luas dan geometri lingkaran, dan rumus-rumus di bawah ini adalah tempat ia membuktikan nilainya." },
          { "kind": "h3", "text": "Hubungan antara Setengah Keliling dan Jari-Jari Lingkaran Dalam" },
          { "kind": "p", "text": "Luas segitiga tak merosot mana pun sama dengan jari-jari lingkaran dalamnya dikali setengah kelilingnya: [[[\\boxed{K=rs}]]], dengan [[K]] adalah luas, [[r]] jari-jari lingkaran dalam, dan [[s]] setengah keliling. Hubungan ini berlaku untuk semua segitiga tak merosot, bukan hanya yang siku-siku. Untuk segitiga siku-siku, jari-jari lingkaran dalam juga dapat dihitung dari sisi-sisinya memakai [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Ambil segitiga 3-4-5: [[s=6]], [[r=\\frac{3+4-5}{2}=1]], maka [[K=1\\times6]], [[[\\boxed{K=6}]]]. Setengah keliling adalah ukuran antara yang penting dalam perhitungan ini: ia membawa informasi batas sedangkan jari-jari lingkaran dalam membawa informasi lingkaran." },
          { "kind": "h3", "text": "Hubungan dengan Rumus Heron" },
          { "kind": "p", "text": "Rumus Heron menghitung luas dari ketiga sisi dan setengah keliling: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Ia memakai ketiga panjang sisi, ia memakai setengah keliling, ia menghitung luas segitiga, dan ia berlaku untuk segitiga valid mana pun. Gunakan segitiga 3-4-5 dengan [[s=6]]: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[K=\\sqrt{36}]], [[[\\boxed{K=6}]]]. Setengah keliling muncul empat kali di dalam akar, yang menunjukkan betapa sentralnya ia: rumus Heron bahkan tidak dapat ditulis tanpanya." },
          { "kind": "h3", "text": "Mengapa Setengah Keliling Merupakan Ukuran Dasar?" },
          { "kind": "p", "text": "Ia lebih dari sekadar setengah keliling. Ia adalah besaran matematis yang berguna yang menghubungkan panjang sisi dengan luas dan geometri lingkaran: hubungan jari-jari lingkaran dalam memperlakukannya sebagai pasangan alami [[r]], dan rumus Heron membangun seluruh luas di atasnya. Kapan pun suatu rumus membutuhkan batas yang disuling menjadi satu angka yang nyaman, [[s]] adalah angka itu. Halaman ini tidak berubah menjadi tutorial lengkap rumus Heron atau jari-jari lingkaran dalam; ia mencatat hubungannya agar keluaran mode setengah keliling memiliki kelanjutan." }
        ]
      },
      "sec-perimeter-area": {
        "h2": "Apa Perbedaan antara Keliling dan Luas?",
        "blocks": [
          { "kind": "p", "text": "Salah satu kebingungan paling awet dalam geometri adalah mencampuradukkan garis luar dengan permukaan. Keliling dan luas berbagi segitiga yang sama tetapi mengukur hal yang berbeda, dalam satuan yang berbeda, menjawab pertanyaan yang berbeda." },
          { "kind": "h3", "text": "Keliling Mengukur Batas" },
          { "kind": "p", "text": "[[P=a+b+c]]. Ia mengukur total panjang mengelilingi segitiga: pembatas, lis, garis pagar. Satuannya linear: meter, sentimeter, kaki, inci. Ia satu dimensi, panjang dan tidak lebih." },
          { "kind": "h3", "text": "Luas Mengukur Permukaan yang Dilingkupi" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ab}{2}}]]]. Ia mengukur daerah datar dua dimensi di dalam segitiga siku-siku: kaca pada jendela, rumput pada petak taman. Satuannya persegi: meter persegi, sentimeter persegi, kaki persegi, inci persegi. Ia dua dimensi, hitungan permukaan dan tidak lebih." },
          { "kind": "h3", "text": "Dapatkah Dua Segitiga Memiliki Keliling Sama tetapi Luas Berbeda?" },
          { "kind": "p", "text": "Ya. Segitiga 1: [[a=5]], [[b=12]], [[c=13]]. Maka [[P=5+12+13=30]] dan [[K=\\frac{5\\times12}{2}=30]]. Segitiga 2: [[a=7.5]], [[b=10]], [[c=12.5]]. Periksa sudut siku-sikunya: [[7.5^2+10^2=56.25+100=156.25=12.5^2]], sehingga ia segitiga siku-siku sejati. Kelilingnya adalah [[P=7.5+10+12.5=30]], sama 30, tetapi luasnya adalah [[K=\\frac{7.5\\times10}{2}=37.5]], jelas berbeda. Keliling yang sama tidak otomatis berarti luas yang sama: panjang garis luar menetapkan total pembatas, tetapi bentuk segitiga menentukan berapa banyak permukaan yang dilingkupi pembatas itu." },
          { "kind": "h3", "text": "Mengapa Anda Tidak Boleh Melaporkan Keliling dalam Satuan Persegi?" },
          { "kind": "p", "text": "Keliling adalah panjang satu dimensi; satuan persegi menggambarkan permukaan dua dimensi. Melaporkan 12 m\u00b2 untuk keliling mengklaim permukaan di tempat hanya garis luar yang diukur, dan siapa pun yang membaca angka itu akan membayangkan hal yang salah. Jaga kejujuran satuan: panjang dalam m, cm, ft, in; luas dalam m\u00b2, cm\u00b2, ft\u00b2, in\u00b2. Satuan adalah bagian dari jawaban, dan satuan yang salah mengubah jawaban benar menjadi salah." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Satuan Ukur dalam Perhitungan Keliling dan Setengah Keliling",
        "blocks": [
          { "kind": "p", "text": "Meter, sentimeter, milimeter, kilometer, kaki, inci, yard, mil: satuan panjang hadir dalam banyak ukuran, dan rumus keliling menerima semuanya. Satu-satunya aturan adalah keselarasan: ketiga sisi harus berbicara dalam satuan yang sama sebelum dijumlahkan." },
          { "kind": "h3", "text": "Mengapa Ketiga Panjang Sisi Harus Memakai Satuan yang Selaras?" },
          { "kind": "p", "text": "Keliling adalah jumlah dari panjang-panjang. Menambahkan 3 kaki ke 48 inci tanpa konversi mencampur dua skala, dan totalnya tidak memiliki makna yang bersih: 56 dari apa? Sebelum menjumlahkan ukuran, ubah semuanya ke satuan yang sama. Pemilih satuan kalkulator ada tepat untuk langkah ini, dan contoh yang dikerjakan di bawah menunjukkan konversi melakukan pekerjaannya yang tenang dan penting." },
          { "kind": "h3", "text": "Contoh Konversi Satuan yang Dikerjakan" },
          { "kind": "p", "text": "Diketahui [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Ubah sisi tengah: [[48\\text{ inches}=4\\text{ ft}]]. Maka [[P=3+4+5]], [[[\\boxed{P=12\\text{ ft}}]]]. Setengah keliling: [[[\\boxed{s=6\\text{ ft}}]]]. Perhatikan bahwa tripel yang dikonversi adalah 3-4-5 yang familier, yang mengonfirmasi konversi secara independen: seandainya inci-inci itu dijumlahkan mentah, \"keliling\"-nya akan menjadi 56 dari sesuatu yang tidak koheren." },
          { "kind": "h3", "text": "Menghitung dengan Ukuran Sisi Desimal" },
          { "kind": "p", "text": "Gunakan [[a=2.5]], [[b=6]], [[c=6.5]]. Pertama pastikan sudut siku-sikunya: [[2.5^2+6^2=6.25+36=42.25=6.5^2]]. Hitung keliling: [[P=2.5+6+6.5]], [[[\\boxed{P=15\\text{ units}}]]]. Lalu setengah keliling: [[s=\\frac{15}{2}]], [[[\\boxed{s=7.5\\text{ units}}]]]. Desimal mengalir melalui penjumlahan dan pembagian dua yang sama seperti bilangan bulat; rumus-rumus tidak pernah menuntut bilangan bulat, dan ukuran bengkel jarang bulat." },
          { "kind": "h3", "text": "Mengapa Anda Harus Menghindari Pembulatan Terlalu Dini?" },
          { "kind": "p", "text": "Perhitungan ukuran dapat memuat nilai desimal, dan setiap pembulatan antara menyuntikkan kesalahan yang tidak dapat dihapus langkah-langkah berikutnya. Jaga presisi yang cukup pada langkah-langkah antara dan bulatkan hanya jawaban akhirnya sesuai ketelitian ukur yang dituntut. Membulatkan 2.5 menjadi 3 di tengah perhitungan akan merusak [[P]] maupun [[s]]; kalkulator menjaga presisi penuh sampai akhir, dan perhitungan tangan sebaiknya melakukan hal yang sama." }
        ]
      },
      "sec-scaling": {
        "h2": "Bagaimana Perubahan Panjang Sisi Mempengaruhi Keliling dan Setengah Keliling?",
        "blocks": [
          { "kind": "p", "text": "Keliling adalah ukuran linear, sehingga ia berskala linear terhadap segitiga: regangkan setiap sisi dengan suatu faktor dan batasnya meregang tepat dengan faktor itu. Setengah keliling mengikutinya, karena ia selalu setengah dari keliling." },
          { "kind": "h3", "text": "Apa yang Terjadi Ketika Setiap Sisi Digandakan?" },
          { "kind": "p", "text": "Mulai dari [[P=a+b+c]]. Jika setiap sisi digandakan, keliling barunya adalah [[P_2=2a+2b+2c]], yang difaktorkan menjadi [[P_2=2(a+b+c)]]. Oleh karena itu [[[\\boxed{P_2=2P}]]]. Setengah keliling juga berlipat dua, karena membagi dua total yang digandakan tetap menggandakan setengahnya. Pasangan 3-4-5 ke 6-8-10 menunjukkannya dalam angka: 12 menjadi 24, dan 6 menjadi 12." },
          { "kind": "h3", "text": "Apa yang Terjadi Ketika Setiap Sisi Dilipat Tigakan?" },
          { "kind": "p", "text": "Aljabar yang sama dengan faktor tiga menghasilkan [[[\\boxed{P_2=3P}]]] dan [[[\\boxed{s_2=3s}]]]. Hubungan penskalaan linear berlaku untuk faktor skala [[k]] mana pun: kalikan setiap sisi dengan [[k]] dan kedua ukuran batas dikalikan dengan [[k]]. Inilah sebabnya gambar berskala berperilaku sangat baik: ukur gambarnya, kalikan dengan faktor skala, dan keliling sebenarnya selesai." },
          { "kind": "h3", "text": "Apa yang Terjadi Ketika Hanya Satu Sisi Berubah?" },
          { "kind": "p", "text": "Menambah satu sisi sambil menjaga dua lainnya tetap mengubah keliling dengan jumlah yang sama: tambah 2 satuan ke satu sisi dan [[P]] tumbuh tepat 2, karena keliling adalah jumlah polos. Tetapi pada segitiga siku-siku panjang sisi-sisi terikat oleh teorema Pythagoras, sehingga perubahan sisi sembarang mungkin tidak mempertahankan syarat sudut siku-siku. Memanjangkan kaki tanpa menyesuaikan hipotenusa merusak [[a^2+b^2=c^2]], dan bentuknya tidak lagi siku-siku: rumus keliling tetap menjumlahkan tiga angka, tetapi angka-angka itu tidak lagi menggambarkan segitiga siku-siku." },
          { "kind": "h3", "text": "Membandingkan Dua Segitiga Siku-Siku" },
          { "kind": "p", "text": "Letakkan 3-4-5 di samping 6-8-10. Panjang sisi: setiap sisi digandakan, faktor skala 2. Keliling: 12 berbanding 24. Setengah keliling: 6 berbanding 12. Menggandakan semua panjang sisi menggandakan kedua ukuran batas, tepat seperti yang diprediksi aljabar. Perbandingan ini juga berlaku sebaliknya: jika keliling dua segitiga berdiri dalam rasio 2:1 dan keduanya siku-siku, sisi-sisinya pun berdiri dalam rasio itu." }
        ]
      },
      "sec-applications": {
        "h2": "Penerapan Praktis Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Pola dua langkah yang sama, jumlahkan lalu bagi dua, muncul di mana pun garis luar segitiga perlu diukur dan suatu rumus membutuhkan setengahnya. Tukang kaca menjumlahkan bingkai jendela dari panjang rusuknya; tukang atap menjumlahkan lis di sekitar ujung atap pelana; penata lansekap menjumlahkan pembatas di sekitar petak; fabrikator menjumlahkan profil tepi di sekitar panel. Dari ketiga sisi datanglah keliling untuk pesanan bahan dan setengah keliling untuk geometri lanjutannya. Empat panel di bawah menunjukkan polanya pada skala berbeda: bingkai jendela (12 m), lis tepi atap (24 ft), pembatas taman (56 m), dan rangka baja penyangga (40 cm), masing-masing diberi label keliling dan setengah kelilingnya." }
        ],
        "imgAlt": "Empat panel: bingkai jendela 12 m, lis atap 24 ft, pembatas taman 56 m, rangka baja 40 cm keliling-kelilingnya",
        "figcaption": "Empat kegunaan nyata: bingkai jendela, lis tepi atap, pembatas taman, dan rangka baja."
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum dalam Menghitung Keliling dan Setengah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Hampir setiap jawaban salah dalam topik ini bermula dari sisi yang terlewat atau label yang tertukar, bukan aritmetika yang buruk. Keenam belas kesalahan di bawah adalah yang muncul berulang kali, masing-masing dengan penyebab dan perbaikannya." },
          { "kind": "h3", "text": "1. Lupa Menyertakan Hipotenusa" },
          { "kind": "p", "text": "Memakai [[P=a+b]] pada segitiga 3-4-5 menghasilkan 7, bukan 12. Kesalahan terjadi karena hipotenusa tidak pernah menyentuh sudut siku-siku, sehingga terasa terpisah dari segitiga itu sendiri. Perbaikan: batas memiliki tiga rusuk; hitung ketiganya, [[P=a+b+c]]." },
          { "kind": "h3", "text": "2. Mencampuradukkan Keliling dengan Setengah Keliling" },
          { "kind": "p", "text": "Memasukkan 6 di tempat 12 berada, atau sebaliknya, membagi dua atau menggandakan perkiraan bahan. Kesalahan berasal dari kedua nilai yang berbagi tiga sisi yang sama. Perbaikan: beri label setiap hasil [[P]] atau [[s]], dan periksa [[s=\\frac{P}{2}]] sebelum melangkah." },
          { "kind": "h3", "text": "3. Membagi Keliling dengan Dua Saat Menghitung Keliling" },
          { "kind": "p", "text": "Menghitung [[\\frac{3+4+5}{2}=6]] dan menyebutnya keliling meremehkan batas hingga setengahnya. Kesalahannya adalah menjalankan rumus setengah keliling karena kebiasaan. Perbaikan: [[P=a+b+c]] tidak memiliki pembagian; pembagian dua hanya milik [[s]]." },
          { "kind": "h3", "text": "4. Lupa Membagi dengan Dua Saat Menghitung Setengah Keliling" },
          { "kind": "p", "text": "Melaporkan [[s=12]] untuk segitiga 3-4-5 memasukkan [[s]] yang digandakan ke rumus Heron dan merusak luasnya. Perbaikan: [[s=\\frac{a+b+c}{2}]] selalu diakhiri pembagian dua; tanpanya, angka itu adalah keliling." },
          { "kind": "h3", "text": "5. Memakai Sisi yang Salah sebagai Hipotenusa" },
          { "kind": "p", "text": "Memperlakukan kaki sebagai [[c]], misalnya memasukkan a=5, b=4, c=3, mengacaukan setiap rumus berikutnya. Kesalahan biasanya berasal dari membaca sisi-sisi dalam urutan yang salah. Perbaikan: [[c]] adalah sisi terpanjang, berhadapan dengan sudut siku-siku; urutkan ketiga angka dan tetapkan [[c]] ke yang terbesar." },
          { "kind": "h3", "text": "6. Memasukkan Ukuran yang Tidak Membentuk Segitiga Siku-Siku" },
          { "kind": "p", "text": "Sisi 2, 3, 4 menghasilkan [[P=9]] secara aritmetika, tetapi [[2^2+3^2=13\\neq16]], sehingga tidak ada sudut siku-siku dan rumus-rumus halaman ini bertumpu pada premis yang salah. Perbaikan: verifikasi [[a^2+b^2=c^2]] sebelum menghitung." },
          { "kind": "h3", "text": "7. Mencampur Sentimeter dan Meter" },
          { "kind": "p", "text": "Menjumlahkan 3 m, 40 cm, dan 5 m sebagai [[3+40+5=48]] menghasilkan 48 dari ketiadaan. Perbaikan: ubah ke satu satuan terlebih dahulu: [[40\\text{ cm}=0.4\\text{ m}]], lalu [[P=8.4\\text{ m}]]." },
          { "kind": "h3", "text": "8. Mencampur Kaki dan Inci" },
          { "kind": "p", "text": "Menjumlahkan 3 ft, 48 in, dan 5 ft sebagai 56 mengulangi kesalahan skala yang sama dalam satuan imperial. Perbaikan: [[48\\text{ in}=4\\text{ ft}]], lalu [[P=12\\text{ ft}]]." },
          { "kind": "h3", "text": "9. Melaporkan Keliling dalam Satuan Persegi" },
          { "kind": "p", "text": "Menulis [[P=12\\text{ m}^2]]. Kesalahan biasanya berasal dari menyalin satuan luas karena kebiasaan setelah mengerjakan soal luas. Perbaikan: keliling adalah panjang, sehingga [[P=12\\text{ m}]]." },
          { "kind": "h3", "text": "10. Melaporkan Setengah Keliling sebagai Luas" },
          { "kind": "p", "text": "Memperlakukan [[s=6]] sebagai 6 satuan persegi. Setengah keliling adalah panjang, setengah batas, bukan permukaan. Perbaikan: [[s=6]] satuan panjang, titik." },
          { "kind": "h3", "text": "11. Membulatkan Terlalu Dini" },
          { "kind": "p", "text": "Membulatkan 2.5 menjadi 3 sebelum menjumlahkan menghasilkan [[3+6+6.5=15.5]] alih-alih 15 yang benar. Kesalahannya terasa tidak berbahaya karena pembulatannya tampak kecil. Perbaikan: jaga presisi penuh selama perhitungan dan bulatkan hanya jawaban akhirnya." },
          { "kind": "h3", "text": "12. Hanya Memakai Dua Sisi pada Kalkulator yang Ada" },
          { "kind": "p", "text": "Memasukkan [[a=3]], [[b=4]] dan tanpa [[c]] membiarkan batas terbuka. Kalkulator membutuhkan ketiga panjang karena keliling adalah total yang tertutup. Perbaikan: temukan dulu sisi yang hilang dengan teorema Pythagoras, lalu hitung." },
          { "kind": "h3", "text": "13. Mengabaikan Ketidaksamaan Segitiga" },
          { "kind": "p", "text": "Sisi 2, 3, 10 menghasilkan [[P=15]] secara aritmetika, tetapi [[2+3<10]], sehingga tidak ada segitiga sama sekali. Perbaikan: periksa [[a+b>c]] sebelum mempercayai hasil apa pun yang dibangun dari ketiga angka." },
          { "kind": "h3", "text": "14. Menganggap Setengah Keliling sebagai Lintasan Setengah Batas Fisik" },
          { "kind": "p", "text": "Mencari \"perjalanan 6 satuan\" di sepanjang rusuk 3-4-5. Tidak ada satu pun lintasan setengah kontinu yang sama dengan [[s]] secara umum; [[s]] adalah setengah dari total numerik. Perbaikan: perlakukan [[s]] sebagai angka untuk rumus, bukan rute untuk ditempuh." },
          { "kind": "h3", "text": "15. Mencampuradukkan Keliling dengan Jumlah Kaki-Kaki Tegak Lurus Saja" },
          { "kind": "p", "text": "Menghitung [[a+b=7]] lalu berhenti, seolah hipotenusa adalah hiasan interior. Perbaikan: hipotenusa adalah rusuk batas; [[P=a+b+c]], ketiga sukunya, setiap saat." },
          { "kind": "h3", "text": "16. Menganggap Keliling Saja Menentukan Luas Segitiga" },
          { "kind": "p", "text": "Meyakini [[P=30]] menetapkan [[K]]. Segitiga 5-12-13 ([[K=30]]) dan segitiga 7.5-10-12.5 ([[K=37.5]]) berbagi [[P=30]] dengan luas berbeda. Perbaikan: luas membutuhkan lebih dari total batas; gunakan kaki-kaki atau rumus Heron." },
          { "kind": "h3", "text": "Salah vs. Benar: Contoh Konkret" },
          { "kind": "p", "text": "Diketahui [[a=3]], [[b=4]], [[c=5]]. Keliling yang benar: [[P=3+4+5=12]]. Salah menghilangkan hipotenusa: [[3+4=7]]. Tujuh bukan keliling yang lengkap karena rusuk ketiga batas tidak pernah dihitung. Setengah keliling yang benar: [[s=\\frac{12}{2}=6]]. Enam bukan panjang batas yang utuh: ia setengahnya, nilai yang dibutuhkan rumus-rumus seperti Heron. Aritmetikanya tampak meyakinkan dalam ketiga kasus; hanya geometri yang membedakannya." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Apakah Keliling Segitiga Siku-Siku Anda Benar",
        "blocks": [
          { "kind": "p", "text": "Tujuh pemeriksaan independen, semuanya didemonstrasikan pada segitiga 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[P=12]], [[s=6]]). Kesepakatan antara rute-rute yang berbeda adalah bukti terkuat bahwa suatu jawaban benar, dalam PR maupun pengukuran praktis." },
          { "kind": "h3", "text": "Metode 1: Jumlahkan Lagi Ketiga Sisi" },
          { "kind": "p", "text": "Jalankan [[P=a+b+c]] dari awal: [[P=3+4+5=12]]. Lintasan kedua dengan angka yang dimasukkan ulang menangkap salah ketik dan digit yang tertukar yang disembunyikan lintasan tunggal." },
          { "kind": "h3", "text": "Metode 2: Bagi Keliling dengan Dua" },
          { "kind": "p", "text": "Hitung [[s=\\frac{P}{2}]]: [[s=\\frac{12}{2}=6]]. Jika pembagian dua tidak cocok dengan keluaran mode setengah keliling, salah satu dari dua perhitungan keliru dan keduanya layak dilihat ulang." },
          { "kind": "h3", "text": "Metode 3: Gandakan Setengah Keliling" },
          { "kind": "p", "text": "Periksa [[[\\boxed{P=2s}]]]: [[P=2\\times6=12]]. Ini kebalikan dari Metode 2 dan menangkap kelas kesalahan yang sama dari arah lain: [[s]] yang salah gagal di sini bahkan ketika penjumlahan awalnya tampak baik." },
          { "kind": "h3", "text": "Metode 4: Verifikasi Hubungan Pythagoras" },
          { "kind": "p", "text": "Pastikan [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Ini memeriksa identifikasi sisi di balik setiap perhitungan lain; hipotenusa yang salah berarti suatu sisi salah label, dan [[P]] maupun [[s]] perlu dibangun ulang." },
          { "kind": "h3", "text": "Metode 5: Periksa Ketidaksamaan Segitiga" },
          { "kind": "p", "text": "Pastikan [[a+b>c]]: [[3+4=7>5]]. Ketiga panjang harus mampu membentuk segitiga sebelum pemeriksaan sudut siku-siku berarti apa-apa. Kegagalan di sini mengembalikan Anda ke ukuran-ukurannya, bukan ke aritmetikanya." },
          { "kind": "h3", "text": "Metode 6: Periksa Satuan Ukur" },
          { "kind": "p", "text": "Pastikan ketiga sisi memakai satuan yang selaras. Satuan campuran adalah kesalahan paling senyap dalam topik ini: aritmetikanya tampak bersih sementara skalanya salah. Baca ulang pemilih satuan setiap masukan sebelum mempercayai totalnya." },
          { "kind": "h3", "text": "Metode 7: Bandingkan dengan Visualisasi Langsung" },
          { "kind": "p", "text": "Kalkulator menggambar segitiga dari sisi-sisi yang dimasukkan. Jika gambarnya sama sekali tidak mirip objek yang diukur, suatu sisi salah tempat: sisi terpanjang yang dimasukkan seharusnya berada di hadapan sudut kotak. Gambar adalah saksi independen, dan layak dilirik sebelum angka-angka masuk ke pesanan atau laporan." }
        ]
      },
      "sec-related": {
        "h2": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "blocks": [
          { "kind": "p", "text": "Ukuran yang berbeda membutuhkan kalkulator yang berbeda." }
        ]
      },
      "sec-faq": {
        "h2": "Pertanyaan yang Sering Diajukan",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Satu Batas, Dua Ukuran yang Berguna",
        "blocks": [
          { "kind": "p", "text": "Keliling menjumlahkan batas; setengah keliling membagi dua total itu untuk rumus-rumus yang membutuhkannya. Segitiga 3-4-5 memuat seluruh kisah dalam miniatur: [[P=12]] satuan garis luar untuk pesanan bahan, [[s=6]] satuan siap untuk rumus Heron atau hubungan jari-jari lingkaran dalam. Satu penjumlahan dan satu pembagian dua mencakup kedua pekerjaan." },
          { "kind": "p", "text": "Kebiasaan kerjanya sederhana: beri label hipotenusa dengan benar, sertakan ketiga sisi, selaraskan satuannya, jaga desimal tanpa pembulatan sampai akhir, dan verifikasi melalui metode kedua. Dengan kebiasaan-kebiasaan itu, [[P=a+b+c]] dan [[s=\\frac{a+b+c}{2}]] adalah dua ukuran paling andal dalam geometri." }
        ]
      }
    },
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedIntro": "Ukuran yang berbeda membutuhkan kalkulator yang berbeda.",
    "relatedItems": [
      { "href": "/right-triangle-perimeter-calculator/", "label": "Kalkulator Keliling Segitiga Siku-Siku" },
      { "href": "/right-triangle-semiperimeter-calculator/", "label": "Kalkulator Setengah Keliling Segitiga Siku-Siku" },
      { "href": "/right-triangle-area-from-semiperimeter-calculator/", "label": "Kalkulator Luas Segitiga Siku-Siku dari Setengah Keliling" },
      { "href": "/right-triangle-area-from-legs-calculator/", "label": "Kalkulator Luas Segitiga Siku-Siku dari Kaki-Kaki" },
      { "href": "/pythagorean-theorem-calculator/", "label": "Kalkulator Teorema Pythagoras" },
      { "href": "/missing-leg-from-c-and-a-calculator/", "label": "Kalkulator Kaki Hilang Segitiga Siku-Siku" }
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      {
        "question": "Apa rumus keliling segitiga siku-siku?",
        "answer": "P = a + b + c, dengan a dan b adalah kedua kaki dan c adalah hipotenusa. Jumlahkan ketiga panjang sisi; totalnya adalah panjang batas keseluruhan dalam satuan linear. Untuk segitiga 3-4-5, P = 3 + 4 + 5 = 12 satuan. Setiap sisi harus disertakan, termasuk hipotenusa, karena ia salah satu dari tiga rusuk batas."
      },
      {
        "question": "Apa rumus setengah keliling segitiga siku-siku?",
        "answer": "s = (a + b + c) / 2, tepat setengah keliling, atau s = P / 2. Jumlahkan ketiga sisi terlebih dahulu, lalu bagi sekali. Untuk segitiga 3-4-5, s = (3 + 4 + 5) / 2 = 6 satuan. Ia adalah panjang, bukan luas, dan ia adalah masukan yang diharapkan rumus-rumus seperti Heron."
      },
      {
        "question": "Apa perbedaan antara keliling dan setengah keliling?",
        "answer": "Keliling adalah seluruh batas, P = a + b + c; setengah keliling adalah setengahnya, s = P / 2. Untuk segitiga 6-8-10, P = 24 dan s = 12. Gunakan P untuk perkiraan bahan di sekitar garis luar dan s sebagai masukan rumus-rumus geometri tingkat lanjut. Keduanya berbeda tepat dengan faktor dua, selalu."
      },
      {
        "question": "Mengapa hipotenusa disertakan dalam keliling?",
        "answer": "Karena keliling mengukur batas luar yang lengkap, dan hipotenusa adalah salah satu dari tiga rusuknya. Menelusuri segitiga berarti menelusuri hipotenusa juga. Melewatkannya mengukur lintasan terbuka, bukan garis luar yang tertutup. Untuk 3-4-5, menghilangkan angka 5 menghasilkan 7, yang bukan keliling segitiga mana pun dengan sisi-sisi itu."
      },
      {
        "question": "Dapatkah saya menghitung keliling jika satu sisi tidak diketahui?",
        "answer": "Tidak langsung: rumusnya membutuhkan ketiga panjang batas. Temukan dulu sisi yang hilang dengan teorema Pythagoras: c = sqrt(a^2 + b^2) untuk hipotenusa yang hilang, atau a = sqrt(c^2 - b^2) untuk kaki yang hilang. Dengan a = 6 dan b = 8, c = 10, maka P = 6 + 8 + 10 = 24. Kalkulator di halaman ini memerlukan ketiga sisi."
      },
      {
        "question": "Bagaimana cara menemukan hipotenusa sebelum menghitung keliling?",
        "answer": "Gunakan c = sqrt(a^2 + b^2) dengan kedua kaki yang diketahui. Untuk a = 5 dan b = 12: c = sqrt(25 + 144) = sqrt(169) = 13. Lalu jumlahkan ketiga sisi: P = 5 + 12 + 13 = 30. Pastikan hasilnya adalah sisi terpanjang; jika tidak, kaki-kakinya salah label."
      },
      {
        "question": "Mengapa setengah keliling berguna dalam geometri?",
        "answer": "Ia adalah variabel alami rumus Heron, K = sqrt(s(s - a)(s - b)(s - c)), dan hubungan jari-jari lingkaran dalam K = r x s. Rumus-rumus luas terus menghasilkan setengah-setengah, dan setengah keliling menyerapnya menjadi satu angka yang nyaman. Untuk 3-4-5, s = 6 mengisi kedua rumus dan keduanya menghasilkan K = 6. Ia menghubungkan panjang sisi dengan luas dan geometri lingkaran."
      },
      {
        "question": "Apakah setengah keliling setengah dari luas segitiga?",
        "answer": "Tidak. Setengah keliling adalah setengah dari keliling, panjang yang diukur dalam satuan seperti meter atau kaki. Luas adalah permukaan dua dimensi yang diukur dalam satuan persegi. Untuk segitiga 3-4-5, s = 6 satuan sedangkan luasnya 6 satuan persegi; angka-angka yang cocok adalah kebetulan segitiga khusus ini, bukan aturan."
      },
      {
        "question": "Satuan apa yang sebaiknya saya pakai untuk keliling?",
        "answer": "Satuan linear apa pun, asalkan ketiga sisi memakainya: meter, sentimeter, milimeter, kilometer, kaki, inci, yard, atau mil. Ubah sebelum menjumlahkan: 3 ft, 48 in, 5 ft menjadi 3 ft, 4 ft, 5 ft, menghasilkan P = 12 ft. Jangan pernah melaporkan keliling dalam satuan persegi; ia adalah panjang, bukan permukaan."
      },
      {
        "question": "Dapatkah saya menghitung keliling memakai ukuran desimal?",
        "answer": "Ya. Rumus-rumus menangani desimal persis seperti bilangan bulat. Dengan a = 2.5, b = 6, c = 6.5: P = 2.5 + 6 + 6.5 = 15 satuan dan s = 15 / 2 = 7.5 satuan. Jaga presisi penuh selama penjumlahan dan bulatkan hanya jawaban akhirnya sesuai ketelitian yang dibenarkan ukuran-ukurannya."
      },
      {
        "question": "Bagaimana cara memeriksa apakah tiga sisi membentuk segitiga siku-siku yang valid?",
        "answer": "Pastikan hubungan Pythagoras a^2 + b^2 = c^2 dengan c sebagai sisi terpanjang, dan pastikan ketidaksamaan segitiga a + b > c. Untuk 3, 4, 5: 9 + 16 = 25 dan 3 + 4 > 5, sehingga segitiganya valid dan siku-siku. Gagal dalam salah satu uji berarti ukuran-ukurannya perlu diperiksa ulang sebelum keliling apa pun dipercaya."
      },
      {
        "question": "Apa hubungan antara setengah keliling, jari-jari lingkaran dalam, dan rumus Heron?",
        "answer": "Setengah keliling mengisi keduanya: K = r x s menghubungkannya dengan jari-jari lingkaran dalam, dan K = sqrt(s(s - a)(s - b)(s - c)) adalah rumus Heron yang dibangun di atasnya. Untuk segitiga siku-siku, jari-jari lingkaran dalam juga mengikuti dari sisi-sisinya sebagai r = (a + b - c) / 2. Dengan 3-4-5, s = 6 dan r = 1, sehingga K = 1 x 6 = 6, cocok dengan hasil Heron."
      }
    ]
  }
};
