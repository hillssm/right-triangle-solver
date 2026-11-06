// inradiusGuideTranslations.bid.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B5_ID = {
  "id": {
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "answer": "Rumusnya adalah [[r = \\frac{a+b-c}{2}]], dengan [[a]] dan [[b]] adalah sisi-sisi tegak, [[c]] adalah sisi miring, dan [[r]] adalah jari-jari lingkaran dalam. Jumlahkan kedua sisi tegak, kurangkan sisi miring, lalu bagi dengan dua. Sebagai contoh, segitiga 6-8-10 menghasilkan jari-jari lingkaran dalam 2.",
          "question": "Apa rumus jari-jari lingkaran dalam segitiga siku-siku?",
        },
        {
          "answer": "Jari-jari lingkaran dalam adalah jari-jari lingkaran dalam, yaitu lingkaran yang muat di dalam segitiga dan menyentuh ketiga sisinya. Jari-jari itu adalah jarak tegak lurus dari pusat lingkaran dalam ke sisi mana pun. Pada segitiga 6-8-10, jari-jari lingkaran dalam adalah 2, sehingga lingkaran dalam memiliki jari-jari 2 satuan.",
          "question": "Apa yang diwakili oleh jari-jari lingkaran dalam?",
        },
        {
          "answer": "Lingkaran dalam adalah lingkaran yang digambar seluruhnya di dalam sebuah segitiga sehingga menyentuh ketiga sisinya, satu titik singgung pada setiap sisi. Setiap segitiga memiliki tepat satu lingkaran dalam. Lingkaran dalam berbeda dari lingkaran luar, yang melewati ketiga titik sudut sebagai gantinya.",
          "question": "Apa itu lingkaran dalam?",
        },
        {
          "answer": "Pusat lingkaran dalam adalah titik tempat ketiga garis bagi sudut dalam segitiga bertemu. Pusat itu selalu terletak di dalam segitiga. Pada segitiga siku-siku dengan sudut siku-siku di C, pusat itu terletak di sepanjang garis bagi sudut 90 derajat, pada jarak [[r]] dari setiap sisi.",
          "question": "Di mana letak pusat lingkaran dalam?",
        },
        {
          "answer": "Ruas-ruas garis singgung dari titik sudut siku-siku memiliki panjang [[r]], sehingga sisi-sisi tegak adalah [[a = r+x]] dan [[b = r+y]] sedangkan sisi miring adalah [[c = x+y]]. Menjumlahkan sisi-sisi tegak menghasilkan [[a+b = 2r+c]], sehingga mengurangkan [[c]] menyisakan [[2r]]. Pengurangan itu menghilangkan panjang garis singgung yang sama dan mengisolasi jari-jari lingkaran dalam.",
          "question": "Mengapa rumus jari-jari lingkaran dalam mengurangkan sisi miring?",
        },
        {
          "answer": "Menjumlahkan kedua sisi tegak menghitung jari-jari lingkaran dalam dua kali, sekali pada setiap sisi tegak, karena setiap sisi tegak mengandung ruas garis singgung dengan panjang [[r]] dari titik sudut siku-siku. Jumlah [[a+b-c]] karena itu sama dengan [[2r]], bukan [[r]], sehingga membagi dengan dua menghasilkan jari-jari lingkaran dalam yang tunggal.",
          "question": "Mengapa kita membagi dengan dua?",
        },
        {
          "answer": "Tidak secara langsung, karena rumusnya juga membutuhkan sisi miring. Pertama, carilah sisi miring dengan [[c = \\sqrt{a^2+b^2}]], lalu gunakan [[r = \\frac{a+b-c}{2}]]. Untuk sisi tegak 6 dan 8, sisi miringnya adalah 10 dan jari-jari lingkaran dalamnya adalah 2. Gunakan kalkulator sisi untuk mencari sisi miring yang belum diketahui.",
          "question": "Dapatkah saya menghitung jari-jari lingkaran dalam hanya dengan menggunakan dua sisi tegak?",
        },
        {
          "answer": "Ya. Rumusnya adalah [[r = \\frac{A}{s}]], dengan [[A]] adalah luas dan [[s]] adalah setengah keliling. Untuk segitiga siku-siku, [[A = \\frac{ab}{2}]] dan [[s = \\frac{a+b+c}{2}]]. Untuk segitiga 6-8-10, [[A = 24]] dan [[s = 12]], sehingga [[r = 2]]. Kalkulator di halaman ini menggunakan rumus tiga sisi, jadi perlakukan jalan luas sebagai pemeriksaan independen.",
          "question": "Dapatkah saya menghitung jari-jari lingkaran dalam menggunakan luas dan setengah keliling?",
        },
        {
          "answer": "Tidak. Jari-jari lingkaran dalam adalah jari-jari lingkaran di dalam segitiga yang menyentuh sisi-sisinya, [[r = \\frac{a+b-c}{2}]], sedangkan jari-jari lingkaran luar adalah jari-jari lingkaran yang melewati titik-titik sudut, [[R = \\frac{c}{2}]]. Pada segitiga 6-8-10, keduanya adalah 2 dan 5.",
          "question": "Apakah jari-jari lingkaran dalam sama dengan jari-jari lingkaran luar?",
        },
        {
          "answer": "Tidak. Jari-jari lingkaran dalam selalu lebih kecil daripada salah satu sisi tegak, karena lingkaran dalam harus muat di dalam segitiga. Pada segitiga 3-4-5, jari-jari lingkaran dalam adalah 1, lebih kecil daripada sisi tegak terpendek, yaitu 3. Jawaban yang lebih besar daripada sisi tegak terpendek menandakan kesalahan, biasanya sebuah sisi tegak yang dimasukkan sebagai sisi miring.",
          "question": "Dapatkah jari-jari lingkaran dalam lebih besar daripada sisi tegak terpendek segitiga?",
        },
        {
          "answer": "Sisi miring berada di seberang sudut siku-siku, sudut terbesar dalam segitiga, dan sisi terpanjang selalu terletak di seberang sudut terbesar. Teorema Pythagoras juga memaksanya: [[c^2 = a^2+b^2]] lebih besar daripada [[a^2]] maupun [[b^2]] saja, sehingga [[c]] lebih panjang daripada [[a]] dan lebih panjang daripada [[b]].",
          "question": "Mengapa sisi miring harus menjadi sisi terpanjang?",
        },
        {
          "answer": "Hitung ulang dengan rumus aslinya, lalu periksa dengan luas dan setengah keliling, [[r = \\frac{A}{s}]], dan pastikan [[a^2+b^2 = c^2]] untuk sisi-sisinya. Pastikan juga jawabannya positif, lebih kecil daripada salah satu sisi tegak, dan dalam satuan yang sama dengan sisi-sisinya. Jika keempat pemeriksaan itu sepakat, jawabannya benar.",
          "question": "Bagaimana cara memeriksa apakah perhitungan jari-jari lingkaran dalam saya benar?",
        },
      ],
      "meta": {
        "description": "Gunakan kalkulator jari-jari lingkaran dalam segitiga siku-siku untuk mencari r dari sisi tegak a dan b serta sisi miring c, beserta rumus, contoh soal 6-8-10, dan pemeriksaan langkah demi langkah.",
        "primaryKeyword": "Kalkulator Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        "slug": "right-triangle-inradius-calculator",
        "title": "Kalkulator Jari-Jari Lingkaran Dalam Segitiga Siku-Siku - Cari r dari Sisi-Sisinya",
      },
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Setiap kalkulator di bawah ini menangani satu tugas segitiga siku-siku tertentu, jadi pilih alat yang sesuai dengan ukuran yang perlu Anda cari.",
      "relatedItems": [
        "Kalkulator Jari-Jari Segitiga Siku-Siku",
        "Kalkulator Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
        "Kalkulator Luas Segitiga Siku-Siku",
        "Kalkulator Setengah Keliling Segitiga Siku-Siku",
        "Kalkulator Sisi Segitiga Siku-Siku",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Penggunaan yang paling langsung adalah pekerjaan rumah geometri dan pekerjaan kelas, di mana soal jari-jari lingkaran dalam menguji apakah siswa dapat mengenali sisi miring, menerapkan [[r = \\frac{a+b-c}{2}]], dan memeriksa hasilnya dengan luas dan setengah keliling. Latihan menggambar lingkaran menggunakan gagasan yang sama: jika diberikan sebuah segitiga siku-siku, gambarlah lingkaran dalamnya dengan mencari pusat lingkaran dalam tempat garis-garis bagi sudut bertemu dan mengatur jangka pada jari-jari lingkaran dalam.",
            },
            {
              "kind": "p",
              "text": "Gambar teknis menggunakan lingkaran dalam saat sebuah lingkaran harus muat tepat di dalam bingkai segitiga atau saat sebuah sudut membulat harus menyentuh dua tepi sebuah bentuk. Pemodelan geometris dan geometri koordinat menggunakan pusat lingkaran dalam sebagai titik di dalam segitiga yang berjarak sama dari ketiga sisinya, yang merupakan pusat alami untuk sebuah bentuk dalam.",
            },
            {
              "kind": "p",
              "text": "Guru menggunakan topik ini sebagai pelajaran penghubung antara segitiga dan lingkaran, karena lingkaran dalam adalah salah satu tempat pertama di mana kedua subjek itu bertemu. Panjang garis singgung, garis bagi sudut, luas, dan setengah keliling semuanya muncul dalam satu gambar, sehingga jari-jari lingkaran dalam adalah cara yang ringkas untuk meninjau semuanya bersama-sama. Proyek desain nyata yang membutuhkan lingkaran dalam juga membutuhkan toleransi dan batas material di luar halaman ini, jadi perlakukan hasilnya sebagai nilai geometris yang tepat dan tambahkan margin praktis secara terpisah.",
            },
          ],
          "h2": "Penerapan Praktis Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        },
        "sec-area-semiperimeter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ada cara kedua untuk mencari jari-jari lingkaran dalam, dengan menggunakan luas dan setengah keliling segitiga:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[A]] adalah luas segitiga dan [[s]] adalah setengah keliling, yaitu setengah dari keliling. Untuk segitiga siku-siku, luasnya adalah setengah hasil kali sisi-sisi tegak, [[A = \\frac{ab}{2}]], karena kedua sisi tegak berperan sebagai alas dan tinggi. Setengah kelilingnya adalah [[s = \\frac{a+b+c}{2}]]. <a href=\"/right-triangle-area-calculator/\">Kalkulator luas segitiga siku-siku</a> mencari [[A]] dari dua sisi tegak, dan <a href=\"/right-triangle-semiperimeter-calculator/\">kalkulator setengah keliling segitiga siku-siku</a> mencari [[s]] dari ketiga sisi.",
            },
            {
              "kind": "p",
              "text": "Mensubstitusikan ungkapan-ungkapan segitiga siku-siku itu menghasilkan [[r = \\frac{ab/2}{(a+b+c)/2}]], dan bagian setengahnya saling meniadakan sehingga tersisa [[r = \\frac{ab}{a+b+c}]]. Rumus ini adalah rumus sisi yang setara dari awal panduan, dan rumus ini menghasilkan jawaban yang sama dengan [[r = \\frac{a+b-c}{2}]] untuk setiap segitiga siku-siku yang sah, karena kedua ungkapan itu sama kapan pun [[a^2+b^2 = c^2]].",
            },
            {
              "kind": "p",
              "text": "Gunakan segitiga 6-8-10 untuk melihat kedua jalan itu sepakat. Luasnya adalah [[A = \\frac{6 \\times 8}{2} = 24]], dan setengah kelilingnya adalah [[s = \\frac{6+8+10}{2} = 12]], sehingga [[r = \\frac{24}{12} = 2]]. Rumus standar menghasilkan hasil yang sama, [[r = \\frac{6+8-10}{2} = 2]]. Kalkulator di halaman ini menggunakan rumus tiga sisi, dan jalan luas adalah pemeriksaan independen yang berguna.",
            },
          ],
          "h2": "Cara Menghitung Jari-Jari Lingkaran Dalam Menggunakan Luas dan Setengah Keliling",
          "image": {
            "alt": "Segitiga siku-siku dibagi menjadi tiga segitiga kecil yang berbagi pusat lingkaran dalam, menunjukkan luas sama dengan r kali s",
            "caption": "Tiga segitiga yang berbagi I: luas-luasnya berjumlah A = r kali s.",
            "src": "inradius-area-semiperimeter.svg",
          },
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator di halaman ini memiliki tiga kolom masukan, satu untuk setiap sisi segitiga, dan satu hasil. Masukkan ketiga panjang sisi, semuanya dalam satuan yang sama, lalu klik Hitung Jari-Jari Lingkaran Dalam r. Hasilnya adalah sebuah panjang, yaitu jari-jari lingkaran dalam, yang diberikan dalam satuan yang sama.",
            },
            {
              "kind": "p",
              "text": "Sisi tegak a adalah sisi pertama yang membentuk sudut siku-siku, dan sisi tegak b adalah sisi kedua. Tidak masalah sisi tegak mana yang Anda sebut [[a]] dan mana yang Anda sebut [[b]], karena rumusnya menjumlahkan keduanya. Sisi miring [[c]] adalah sisi di seberang sudut siku-siku, dan sisi itu harus merupakan sisi terpanjang segitiga. Jika angka yang dimasukkan untuk [[c]] lebih pendek daripada sebuah sisi tegak, ketiga panjang itu tidak dapat membentuk segitiga siku-siku, dan hasilnya tidak akan bermakna.",
            },
            {
              "kind": "p",
              "text": "Jaga agar satuannya sama di ketiga kolom. Jika [[a]] dan [[b]] dalam sentimeter, [[c]] juga harus dalam sentimeter, dan jawabannya keluar dalam sentimeter. Bacalah jawaban sebagai jari-jari, bukan diameter: jari-jari berjalan dari pusat lingkaran ke tepinya, sedangkan diameter berjalan melintasi seluruh lingkaran. Gunakan Atur Ulang untuk mengosongkan kolom sebelum memulai soal baru.",
            },
          ],
          "h2": "Menghitung Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram ini menunjukkan segitiga ABC dengan sudut siku-siku di C. Sisi AC adalah sisi tegak [[a]], sisi BC adalah sisi tegak [[b]], dan sisi AB adalah sisi miring [[c]]. Titik [[I]] menandai pusat lingkaran dalam di dalam segitiga, dan sebuah lingkaran yang berpusat di [[I]] menyentuh ketiga sisi.",
            },
            {
              "kind": "p",
              "text": "Bacalah diagram dengan urutan ini. Mulailah dari A, susuri sisi tegak [[a]] ke bawah menuju C, lalu susuri sisi tegak [[b]] ke B, kemudian kembali menyusuri sisi miring dari B ke A. Lingkaran dalam terletak di dalam batas ini, menyentuh sisi tegak [[a]] pada satu titik, sisi tegak [[b]] pada titik kedua, dan sisi miring pada titik ketiga. Dari [[I]], tiga ruas pendek berjalan ke ketiga titik itu, dan masing-masing adalah jari-jari dengan panjang [[r]].",
            },
            {
              "kind": "p",
              "text": "Setiap jari-jari bertemu dengan sisinya pada sudut siku-siku, yang merupakan tanda sebuah garis singgung: sisi itu hanya menyentuh lingkaran pada titik itu, bukan memotongnya. Ketiga jari-jari memiliki panjang yang sama, dan itulah sebabnya satu lingkaran dapat menyentuh ketiga sisi sekaligus. Lingkaran itu tidak melewati titik sudut mana pun: titik-titik sudut terletak di luar lingkaran, dan ruas-ruas garis singgung dari setiap titik sudut ke lingkaran adalah panjang [[r]], [[x]], dan [[y]] yang digunakan dalam penurunan rumus di atas.",
            },
          ],
          "h2": "Penjelasan Diagram Lingkaran Dalam Segitiga Siku-Siku",
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "h3",
              "text": "Contoh 1: Segitiga 3-4-5 Dasar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 3]], [[b = 4]], dan [[c = 5]], rumusnya menghasilkan [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]]. Lingkaran dalam memiliki jari-jari 1 satuan. Periksa segitiganya terlebih dahulu: [[3^2+4^2 = 9+16 = 25 = 5^2]], sehingga segitiga itu adalah segitiga siku-siku yang sah.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Segitiga 6-8-10 yang Sudah Ada",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 6]], [[b = 8]], dan [[c = 10]], [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. Lingkaran dalam memiliki jari-jari 2 satuan, dua kali jari-jari segitiga 3-4-5, karena segitiga ini adalah segitiga 3-4-5 yang diperbesar dengan faktor 2. Periksa: [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Segitiga 5-12-13",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 5]], [[b = 12]], dan [[c = 13]], [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. Jari-jari lingkaran dalam adalah 2 satuan, sama dengan segitiga 6-8-10, meskipun segitiganya lebih besar dan bentuknya berbeda. Periksa: [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Segitiga 8-15-17",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 8]], [[b = 15]], dan [[c = 17]], [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. Lingkaran dalam memiliki jari-jari 3 satuan. Periksa: [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 9]], [[b = 12]], dan [[c = 15]], [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. Ini adalah segitiga 3-4-5 yang diperbesar dengan faktor 3, sehingga jari-jari lingkaran dalamnya adalah 3 kali jari-jari lingkaran dalam segitiga 3-4-5, yaitu 1. Periksa: [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 4.5]], [[b = 6]], dan [[c = 7.5]], [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. Jari-jari lingkaran dalam adalah 1.5 satuan. Desimal tidak mengubah apa pun tentang caranya: jumlahkan, kurangkan, bagi dengan dua. Periksa: [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Satuan yang Berbeda",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 30]] cm, [[b = 40]] cm, dan [[c = 0.5]] m, ubah sisi miringnya terlebih dahulu: 0.5 m sama dengan 50 cm, karena 1 m adalah 100 cm. Sekarang ketiga sisi memakai sentimeter, sehingga [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm. Periksa: [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Mencampur meter dan sentimeter tanpa mengubahnya akan menghasilkan jawaban yang salah, jadi selalu ubah dulu satuannya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Nilai Desimal yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 7.2]], [[b = 9.6]], dan [[c = 12]], [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. Jari-jari lingkaran dalam adalah 2.4 satuan. Ini adalah segitiga 3-4-5 yang diperbesar dengan faktor 2.4, sehingga jari-jari lingkaran dalamnya adalah 2.4 kali jari-jari lingkaran dalam segitiga 3-4-5, yaitu 1. Periksa: [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
          "h2": "Contoh Soal Menghitung Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus jari-jari lingkaran dalam segitiga siku-siku cukup singkat untuk diingat sekilas:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[r]] adalah jari-jari lingkaran dalam, [[a]] adalah sisi tegak pertama, [[b]] adalah sisi tegak kedua, dan [[c]] adalah sisi miring. Rumus ini bekerja dalam tiga tahap, dan setiap tahap memiliki makna yang jelas.",
            },
            {
              "kind": "p",
              "text": "Tahap 1: jumlahkan kedua sisi tegak, [[a+b]]. Panjang gabungan ini selalu lebih panjang daripada sisi miring, karena kedua sisi tegak bersama-sama membentang lebih jauh daripada garis lurus di seberangnya. Tahap 2: kurangkan sisi miring, [[a+b-c]]. Hasilnya adalah jumlah kelebihan sisi-sisi tegak atas sisi miring. Tahap 3: bagi dengan dua, [[r = \\frac{a+b-c}{2}]]. Pembagian itu mengubah sisa panjang tersebut menjadi jari-jari lingkaran dalam, dan bagian penurunan rumus di bawah ini menunjukkan mengapa membagi dua tepat benar.",
            },
            {
              "kind": "p",
              "text": "Ambil segitiga 6-8-10: [[a+b = 14]], lalu [[14-10 = 4]], lalu [[\\frac{4}{2} = 2]], sehingga [[r = 2]]. Rumus ini khusus untuk segitiga siku-siku. Untuk segitiga yang bukan siku-siku, jari-jari lingkaran dalam tetap sama dengan luas dibagi setengah keliling, [[r = \\frac{A}{s}]], tetapi jalan pintas [[r = \\frac{a+b-c}{2}]] tidak berlaku, karena pembuktiannya bergantung pada sudut siku-siku.",
            },
          ],
          "h2": "Rumus Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
          "image": {
            "alt": "Segitiga siku-siku berlabel sisi tegak a dan b, sisi miring c, pusat lingkaran dalam I, dan jari-jari lingkaran dalam r di samping rumus r sama dengan a tambah b kurang c per dua",
            "caption": "Rumus ini menggunakan ketiga sisi: jumlahkan sisi-sisi tegak, kurangkan sisi miring, bagi dengan dua.",
            "src": "inradius-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Empat belas langkah singkat membawa Anda dari segitiga berlabel ke jawaban yang sudah diperiksa. Langkah-langkah itu secara berurutan adalah:",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenali segitiga siku-siku dalam soal Anda dan pastikan segitiga itu memiliki sudut siku-siku.",
                "Temukan titik sudut siku-sikunya, yang biasanya ditandai dengan persegi kecil, dan sebut titik itu C.",
                "Kenali sisi tegak pertama, a, salah satu dari dua sisi yang membentuk sudut siku-siku.",
                "Kenali sisi tegak kedua, b, sisi lain yang membentuk sudut siku-siku.",
                "Kenali sisi miring yang utuh, c, sisi di seberang sudut siku-siku.",
                "Pastikan c adalah sisi terpanjang. Jika bukan, beri label ulang pada diagram sebelum melanjutkan.",
                "Periksa bahwa ketiga sisi memenuhi teorema Pythagoras, [[a^2+b^2 = c^2]].",
                "Pilih satuan pengukuran yang sesuai dan ubah ukuran apa pun yang memakai satuan berbeda.",
                "Masukkan sisi tegak a pada kolom Sisi Tegak a.",
                "Masukkan sisi tegak b pada kolom Sisi Tegak b.",
                "Masukkan sisi miring c pada kolom Hipotenusa c.",
                "Klik Hitung Jari-Jari Lingkaran Dalam r dan bacalah hasilnya.",
                "Periksa hasilnya: hasilnya harus positif, dalam satuan yang sama dengan sisi-sisinya, dan lebih kecil daripada salah satu sisi tegak.",
                "Gunakan Atur Ulang saat memulai perhitungan lain.",
              ],
            },
            {
              "kind": "p",
              "text": "Memasukkan sisi yang salah sebagai [[c]] adalah kesalahan yang paling banyak menimbulkan masalah. Jika sebuah sisi tegak dimasukkan pada kolom sisi miring, rumus itu mengurangkan sebuah sisi tegak sebagai pengganti sisi miring, dan jawabannya menjadi terlalu besar. Selalu periksa bahwa nilai pada kolom sisi miring adalah yang terpanjang di antara ketiganya sebelum mengklik Hitung.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        },
        "sec-incenter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pusat lingkaran dalam sebuah segitiga adalah titik tempat ketiga garis bagi sudut dalamnya bertemu. Garis bagi sudut adalah garis yang membagi sebuah sudut menjadi dua bagian yang sama. Gambarlah garis bagi sudut A, garis bagi sudut B, dan garis bagi sudut C, dan ketiganya berpotongan pada satu titik. Titik itu adalah pusat lingkaran dalam [[I]], dan titik itu adalah pusat lingkaran dalam.",
            },
            {
              "kind": "p",
              "text": "Pusat lingkaran dalam berjarak sama dari ketiga sisi karena sifat garis bagi sudut. Setiap titik pada garis bagi sebuah sudut berjarak sama dari kedua sisi yang membentuk sudut itu. Titik yang terletak pada dua garis bagi sekaligus karena itu berjarak sama dari ketiga sisi, dan pusat lingkaran dalam terletak pada ketiga garis bagi. Jarak bersama itu adalah jari-jari lingkaran dalam [[r]], sehingga lingkaran yang berpusat di [[I]] dengan jari-jari [[r]] menyentuh setiap sisi.",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga siku-siku dengan sudut siku-siku di C, pusat lingkaran dalam terletak di sepanjang garis bagi sudut 90 derajat, yang berjalan secara diagonal melintasi sudut di C pada 45 derajat terhadap setiap sisi tegak. Pusat lingkaran dalam selalu terletak di dalam segitiga, tidak pernah pada sebuah sisi atau di luarnya, karena ketiga garis bagi bertemu di bagian dalam. Itulah sebabnya lingkaran dalam muat di dalam segitiga, bukan tumpah keluar darinya.",
            },
          ],
          "h2": "Memahami Pusat Lingkaran Dalam Segitiga Siku-Siku",
          "image": {
            "alt": "Segitiga siku-siku dengan ketiga garis bagi sudut dalam bertemu di pusat lingkaran dalam I",
            "caption": "Ketiga garis bagi sudut bertemu di I, pusat lingkaran dalam, pada jarak r dari setiap sisi.",
            "src": "inradius-angle-bisectors.svg",
          },
        },
        "sec-incircle": {
          "blocks": [
            {
              "kind": "p",
              "text": "Lingkaran dalam adalah lingkaran yang digambar seluruhnya di dalam sebuah segitiga sehingga menyentuh, atau bersinggungan dengan, ketiga sisinya. Setiap sisi segitiga adalah garis singgung terhadap lingkaran: garis itu bertemu dengan lingkaran pada tepat satu titik dan tidak memotongnya. Ketiga titik pertemuan itu disebut titik-titik singgung, satu pada setiap sisi.",
            },
            {
              "kind": "p",
              "text": "Jari-jari yang ditarik dari pusat lingkaran dalam ke sebuah titik singgung selalu tegak lurus terhadap sisi itu. Ini adalah fakta umum tentang lingkaran: jari-jari ke titik singgung bertemu dengan garis singgung pada sudut siku-siku. Karena pusat lingkaran dalam berjarak sama dari ketiga sisi, ketiga jari-jari ke ketiga titik singgung semuanya memiliki panjang yang sama, yaitu [[r]], sehingga satu lingkaran muat pada ketiga sisi sekaligus.",
            },
            {
              "kind": "p",
              "text": "Setiap segitiga memiliki tepat satu lingkaran dalam. Ketiga garis bagi sudut sebuah segitiga bertemu pada satu titik, yaitu pusat lingkaran dalam, dan jarak dari titik itu ke sisi-sisinya menentukan jari-jarinya. Lingkaran kedua yang berbeda tidak mungkin menyentuh ketiga sisi dari dalam, karena pusatnya juga harus berjarak sama dari ketiga sisi, dan hanya pusat lingkaran dalam yang memiliki sifat itu. Perhatikan bahwa lingkaran dalam bukanlah lingkaran yang melewati titik-titik sudut: lingkaran dalam menyentuh sisi-sisi dari dalam dan tidak pernah mencapai sebuah titik sudut.",
            },
          ],
          "h2": "Apa Itu Lingkaran Dalam dalam Geometri Segitiga Siku-Siku?",
          "image": {
            "alt": "Lingkaran dalam menyentuh ketiga sisi segitiga siku-siku pada tiga titik singgung dengan jari-jari yang tegak lurus",
            "caption": "Tiga titik singgung: setiap jari-jari bertemu dengan sisinya pada 90 derajat.",
            "src": "inradius-tangency-points.svg",
          },
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Temukan jari-jari lingkaran dalam segitiga siku-siku dari dua sisi tegak dan sisi miringnya.",
            },
            {
              "kind": "p",
              "text": "Jari-jari lingkaran dalam adalah jari-jari lingkaran dalam, yaitu lingkaran yang muat di dalam segitiga dan menyentuh ketiga sisinya. Kalkulator ini membutuhkan tiga angka: sisi tegak [[a]], sisi tegak [[b]], dan sisi miring [[c]], dengan [[a]] dan [[b]] adalah sisi-sisi yang membentuk sudut siku-siku dan [[c]] adalah sisi di seberang sudut itu. Rumusnya adalah [[r = \\frac{a+b-c}{2}]], dengan [[r]] adalah jari-jari lingkaran dalam. Rumus itu menjumlahkan kedua sisi tegak, mengurangkan sisi miring, lalu membagi hasilnya dengan dua.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, segitiga 6-8-10 menghasilkan [[r = \\frac{6+8-10}{2} = 2]]. Angka 2 itu adalah jari-jari lingkaran di dalam segitiga, yang diukur dalam satuan yang sama dengan sisi-sisinya. Lingkaran itu menyentuh setiap sisi pada tepat satu titik, dan pusatnya, yaitu pusat lingkaran dalam, terletak pada jarak yang sama dari ketiga sisi.",
            },
          ],
          "h2": "Kalkulator Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        },
        "sec-legs-known": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator di halaman ini membutuhkan ketiga panjang sisi, sehingga kalkulator ini tidak dapat berjalan hanya dengan dua sisi tegak. Jika hanya [[a]] dan [[b]] yang diketahui, carilah sisi miring terlebih dahulu dengan teorema Pythagoras, lalu gunakan rumus jari-jari lingkaran dalam. Kedua langkah itu adalah:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{a^2+b^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 6]] dan [[b = 8]]. Pertama, hitung sisi miringnya: [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Lalu hitung jari-jari lingkaran dalam: [[r = \\frac{6+8-10}{2} = 2]]. <a href=\"/right-triangle-side-calculator/\">Kalkulator sisi segitiga siku-siku</a> mencari sisi miring yang belum diketahui dari dua sisi tegak, yang merupakan langkah pertama yang sama seperti yang digunakan di sini, dan <a href=\"/pythagorean-theorem-calculator/\">kalkulator teorema Pythagoras</a> melakukan perhitungan yang sama secara langsung. Jangan lewati langkah pertama: memasukkan sebuah sisi tegak pada kolom sisi miring menghasilkan jari-jari lingkaran dalam yang salah, seperti yang ditunjukkan bagian kesalahan di bawah ini.",
            },
          ],
          "h2": "Cara Menghitung Jari-Jari Lingkaran Dalam Jika Hanya Dua Sisi Tegak Diketahui",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Menggunakan rumus jari-jari lingkaran luar sebagai pengganti rumus jari-jari lingkaran dalam: [[R = \\frac{c}{2}]] menghasilkan 5 untuk segitiga 6-8-10, sedangkan jari-jari lingkaran dalamnya adalah 2. Kedua rumus itu menjawab pertanyaan yang berbeda.",
                "Memasukkan c sebagai sisi tegak, bukan sebagai sisi miring: jika 8 dimasukkan sebagai c dan 10 sebagai b, rumusnya menghasilkan [[\\frac{6+10-8}{2} = 4]], bukan 2. Selalu masukkan sisi terpanjang pada kolom sisi miring.",
                "Lupa mengurangkan c: menjumlahkan sisi-sisi tegak lalu membagi dua, [[\\frac{6+8}{2} = 7]], menghasilkan angka yang jauh lebih besar daripada jari-jari lingkaran dalam yang benar, yaitu 2.",
                "Lupa membagi dua: [[6+8-10 = 4]] adalah dua kali jari-jari lingkaran dalam. Pembagian dengan dua adalah bagian dari rumus, bukan langkah akhir yang boleh dilewati.",
                "Memasukkan ukuran sisi yang tidak sah: sisi 3, 4, dan 6 tidak memenuhi [[3^2+4^2 = 6^2]], karena 25 tidak sama dengan 36, sehingga rumus jari-jari lingkaran dalam tidak berlaku untuk sisi-sisi itu.",
                "Mengabaikan hubungan Pythagoras: tiga panjang apa pun dapat dimasukkan ke dalam rumus, tetapi hanya segitiga siku-siku yang sesungguhnya yang menghasilkan jari-jari lingkaran dalam yang bermakna. Periksa [[a^2+b^2 = c^2]] terlebih dahulu.",
                "Mencampur satuan ukuran: sisi-sisi tegak dalam sentimeter dan sisi miring dalam meter menghasilkan jawaban yang salah. Ubah setiap ukuran ke satu satuan sebelum menghitung.",
                "Mencampuradukkan jari-jari lingkaran dalam dengan diameter: jari-jari lingkaran dalam adalah jarak dari pusat ke tepi. Diameter lingkaran dalam adalah dua kali jari-jari lingkaran dalam, sehingga untuk segitiga 6-8-10 diameternya adalah 4, bukan 2.",
                "Mencampuradukkan pusat lingkaran dalam dengan pusat lingkaran luar: pusat lingkaran dalam berada di dalam segitiga tempat garis-garis bagi sudut bertemu, sedangkan pusat lingkaran luar adalah titik tengah sisi miring. Keduanya adalah titik yang berbeda.",
                "Menganggap lingkaran dalam melewati titik-titik sudut segitiga: lingkaran dalam menyentuh sisi-sisinya dan tidak pernah mencapai sebuah titik sudut. Lingkaran yang melewati titik-titik sudut adalah lingkaran luar.",
                "Menganggap jari-jari diukur di sepanjang sebuah sisi, bukan tegak lurus terhadapnya: jari-jari lingkaran dalam adalah jarak tegak lurus dari pusat lingkaran dalam ke sebuah sisi, yang merupakan jarak terpendek ke sisi itu.",
                "Membulatkan perhitungan antara terlalu dini: pertahankan ketelitian penuh selama penjumlahan dan pengurangan, dan bulatkan hanya jawaban akhirnya. Pembulatan dini menggeser hasilnya.",
                "Menggunakan hanya dua panjang sisi tanpa menghitung sisi miring terlebih dahulu: rumus ini membutuhkan ketiga sisi. Carilah [[c]] dengan teorema Pythagoras sebelum menggunakannya.",
                "Mencampuradukkan keliling dengan setengah keliling: setengah keliling adalah setengah dari keliling, [[s = \\frac{a+b+c}{2}]]. Menggunakan keliling penuh dalam [[r = \\frac{A}{s}]] akan membagi dua jawaban yang benar.",
              ],
            },
          ],
          "h2": "Kesalahan Umum saat Menghitung Jari-Jari Lingkaran Dalam",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cobalah keenam soal itu di atas kertas sebelum membaca jawabannya. Tidak ada satu pun nilai yang mengulang contoh soal, dan setiap solusi dikerjakan selengkapnya di bawah ini.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi tegak [[a = 20]] cm dan [[b = 21]] cm serta sisi miring [[c = 29]] cm. Carilah jari-jari lingkaran dalam [[r]].",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Ukuran Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 10.5]] m, [[b = 14]] m, dan [[c = 17.5]] m, carilah jari-jari lingkaran dalam [[r]] dalam meter.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Konversi Satuan",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi tegak [[a = 1.5]] m dan [[b = 2]] m serta sisi miring [[c = 250]] cm. Carilah jari-jari lingkaran dalam dalam meter.",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Mencari Sisi Miring dari Dua Sisi Tegak",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi tegak [[a = 12]] cm dan [[b = 16]] cm. Carilah sisi miringnya terlebih dahulu, lalu jari-jari lingkaran dalamnya.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Luas dan Setengah Keliling",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi tegak [[a = 15]] cm dan [[b = 20]] cm serta sisi miring [[c = 25]] cm. Carilah luas dan setengah kelilingnya, lalu carilah jari-jari lingkaran dalam dengan [[r = \\frac{A}{s}]], dan konfirmasikan dengan rumus tiga sisi.",
            },
            {
              "kind": "h3",
              "text": "Soal 6: Mengenali Segitiga Siku-Siku yang Tidak Sah",
            },
            {
              "kind": "p",
              "text": "Seorang siswa diberi [[a = 7]] cm, [[b = 10]] cm, dan [[c = 12]] cm lalu diminta mencari jari-jari lingkaran dalam. Tunjukkan mengapa sisi-sisi ini tidak membentuk segitiga siku-siku, dan jelaskan apa yang sebaiknya dilakukan siswa itu sebagai pengganti menerapkan rumus.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Jawaban 1: [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Periksa: [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Jawaban 2: [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Periksa: [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Jawaban 3: Ubah sisi miringnya: 250 cm sama dengan 2.5 m. Lalu [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, yaitu 50 cm. Periksa: [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Jawaban 4: [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, lalu [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 5: [[A = \\frac{15 \\times 20}{2} = 150]] sentimeter persegi dan [[s = \\frac{15+20+25}{2} = 30]] cm, sehingga [[r = \\frac{150}{30} = 5]] cm. Rumus tiga sisi sepakat: [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 6: [[7^2+10^2 = 49+100 = 149]], sedangkan [[12^2 = 144]], sehingga [[a^2+b^2]] tidak sama dengan [[c^2]] dan segitiga itu bukan siku-siku. Siswa itu sebaiknya tidak menerapkan rumus jari-jari lingkaran dalam: pertama, periksa kembali ukurannya, dan jika ukurannya benar, gunakan rumus umum [[r = \\frac{A}{s}]] untuk segitiga yang bukan siku-siku.",
            },
          ],
          "h2": "Soal Latihan Beserta Jawaban",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sembilan sifat mengikuti langsung dari rumus dan geometri lingkaran dalam. Masing-masing juga berfungsi sebagai pemeriksaan kewajaran untuk jawaban baru.",
            },
            {
              "items": [
                "Jari-jari lingkaran dalam selalu positif untuk segitiga yang sah dan tidak degenerat, karena [[a+b]] selalu lebih besar daripada [[c]].",
                "Pusat lingkaran dalam terletak di dalam segitiga, tempat ketiga garis bagi sudut bertemu.",
                "Jari-jari lingkaran dalam adalah jarak tegak lurus terpendek dari pusat lingkaran dalam ke setiap sisi, dan ketiga jarak itu sama dengan [[r]].",
                "Lingkaran dalam menyentuh ketiga sisi, satu titik singgung pada setiap sisi.",
                "Ruas-ruas garis singgung dari titik luar yang sama memiliki panjang yang sama, dan itulah fakta yang menjadi dasar penurunan rumus.",
                "Memperbesar skala keseluruhan segitiga akan memperbesar jari-jari lingkaran dalam dengan faktor skala yang sama: menggandakan setiap sisi akan menggandakan [[r]], dan melipatgandakan tiga kali setiap sisi akan melipatgandakan tiga kali [[r]].",
                "Jari-jari lingkaran dalam tidak sama dengan jari-jari lingkaran luar. Pada segitiga 6-8-10, [[r = 2]] sedangkan [[R = 5]].",
                "Jari-jari lingkaran dalam bergantung pada bentuk segitiga dan juga ukurannya: segitiga 5-12-13 dan segitiga 6-8-10 keduanya memiliki [[r = 2]], meskipun sisi-sisinya berbeda.",
                "Jari-jari lingkaran dalam dapat dihitung dari panjang sisi dengan [[r = \\frac{a+b-c}{2}]] atau dari luas dan setengah keliling dengan [[r = \\frac{A}{s}]], dan kedua jalan itu menghasilkan jawaban yang sama.",
              ],
              "kind": "list",
            },
          ],
          "h2": "Sifat-Sifat Penting Jari-Jari Lingkaran Dalam pada Segitiga Siku-Siku",
        },
        "sec-semiperimeter-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setengah keliling [[s]] adalah setengah dari keliling segitiga:",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Setengah keliling disebut demikian karena semi berarti setengah: keliling penuhnya adalah [[P = a+b+c]], dan setengah keliling adalah setengah dari itu. Jangan tertukar antara keduanya. Keliling adalah panjang total mengelilingi segitiga, sedangkan setengah keliling adalah nilai pembantu yang lebih pendek yang muncul dalam rumus luas dan dalam rumus jari-jari lingkaran dalam [[r = \\frac{A}{s}]].",
            },
            {
              "kind": "p",
              "text": "Setengah keliling saja tidak dapat menentukan jari-jari lingkaran dalam, karena rumus [[r = \\frac{A}{s}]] juga membutuhkan luas [[A]]. Dua segitiga dapat berbagi setengah keliling yang sama dan memiliki luas yang berbeda, dan jari-jari lingkaran dalamnya pun berbeda. Luas membawa informasi tentang bentuk yang tidak dibawa oleh setengah keliling. Untuk segitiga 6-8-10, [[s = 12]] dan [[A = 24]], sehingga [[r = \\frac{24}{12} = 2]]. Segitiga berbeda dengan [[s = 12]] tetapi luas yang lebih kecil akan memiliki jari-jari lingkaran dalam yang lebih kecil.",
            },
            {
              "kind": "p",
              "text": "Ada cara yang rapi untuk melihat mengapa [[A = rs]] berlaku. Hubungkan pusat lingkaran dalam [[I]] ke ketiga titik sudut, sehingga segitiga itu terbagi menjadi tiga segitiga yang lebih kecil. Setiap segitiga kecil memiliki tinggi [[r]] dan alas yang sama dengan satu sisi segitiga besar, sehingga luas-luasnya adalah [[\\frac{ra}{2}]], [[\\frac{rb}{2}]], dan [[\\frac{rc}{2}]]. Menjumlahkannya menghasilkan [[A = \\frac{r(a+b+c)}{2} = r \\times s]], karena [[s = \\frac{a+b+c}{2}]]. Membagi dengan [[s]] menghasilkan [[r = \\frac{A}{s}]].",
            },
          ],
          "h2": "Hubungan antara Jari-Jari Lingkaran Dalam dan Setengah Keliling",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan contoh dari bagian atas halaman, [[a = 6]], [[b = 8]], dan [[c = 10]]. Lima langkah di bawah ini menunjukkan seluruh pengerjaannya, tanpa ada yang dilewati.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tuliskan rumusnya: [[r = \\frac{a+b-c}{2}]].",
                "Substitusikan nilainya: [[r = \\frac{6+8-10}{2}]].",
                "Jumlahkan sisi-sisi tegak: [[r = \\frac{14-10}{2}]].",
                "Kurangkan sisi miring: [[r = \\frac{4}{2}]].",
                "Bagi: [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "Jawaban 2 berarti lingkaran dalam memiliki jari-jari 2 satuan, dalam satuan yang sama dengan sisi-sisinya. Pusatnya terletak 2 satuan dari setiap sisi, dan lingkaran itu menyentuh setiap sisi pada tepat satu titik.",
            },
            {
              "kind": "p",
              "text": "Periksa bahwa ukuran-ukurannya membentuk segitiga siku-siku sebelum mempercayai jawabannya: [[6^2+8^2 = 36+64 = 100 = 10^2]], sehingga teorema Pythagoras berlaku dan segitiga itu benar-benar siku-siku. Pemeriksaan kedua menggunakan luas dan setengah keliling, [[A = \\frac{6 \\times 8}{2} = 24]] dan [[s = \\frac{6+8+10}{2} = 12]], yang menghasilkan [[r = \\frac{24}{12} = 2]], jawaban yang sama melalui jalan yang berbeda.",
            },
          ],
          "h2": "Contoh Langkah demi Langkah Mencari Jari-Jari Lingkaran Dalam",
          "image": {
            "alt": "Contoh soal dengan a sama dengan 6, b sama dengan 8, c sama dengan 10, dan jari-jari lingkaran dalam r sama dengan 2, lingkaran dalam menyentuh ketiga sisi",
            "caption": "Contoh soal: a = 6, b = 8, c = 10 menghasilkan r = 2, diperiksa dengan luas dan setengah keliling.",
            "src": "inradius-example-6-8-10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Empat pemeriksaan independen menangkap hampir setiap kesalahan. Jalankan setidaknya satu pemeriksaan pada setiap jawaban, dan keempatnya saat soalnya penting. Contoh di bawah ini menggunakan segitiga 6-8-10, dengan [[r = 2]], di seluruh bagian.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 1: Rumus Asli",
            },
            {
              "kind": "p",
              "text": "Hitung ulang dengan [[r = \\frac{a+b-c}{2}]] dari awal, tanpa melihat pengerjaan pertama Anda. Di sini [[r = \\frac{6+8-10}{2} = 2]]. Perhitungan baru menangkap kesalahan dalam perhitungan pertama, terutama pengurangan yang dilakukan dalam urutan yang salah.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 2: Luas dan Setengah Keliling",
            },
            {
              "kind": "p",
              "text": "Periksa dengan [[r = \\frac{A}{s}]]. Di sini [[A = \\frac{6 \\times 8}{2} = 24]] dan [[s = \\frac{6+8+10}{2} = 12]], sehingga [[r = \\frac{24}{12} = 2]]. Jalan ini menggunakan perkalian dan pembagian sebagai pengganti penjumlahan dan pengurangan, sehingga jalan ini menangkap jenis kesalahan yang berbeda.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 3: Teorema Pythagoras",
            },
            {
              "kind": "p",
              "text": "Periksa [[a^2+b^2 = c^2]]. Di sini [[6^2+8^2 = 36+64 = 100 = 10^2]], sehingga ketiga sisi membentuk segitiga siku-siku yang sesungguhnya. Jika pemeriksaan ini gagal, rumus jari-jari lingkaran dalam sama sekali tidak berlaku, dan tidak ada nilai [[r]] darinya yang dapat dipercaya.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 4: Kewajaran Geometris",
            },
            {
              "kind": "p",
              "text": "Pastikan [[r]] positif, lebih kecil daripada salah satu sisi tegak, dan dalam satuan yang benar. Di sini 2 positif dan lebih kecil daripada 6 maupun 8, dan satuannya sesuai dengan sisi-sisinya. Lingkaran itu harus muat di dalam segitiga, sehingga jari-jari lingkaran dalam yang lebih besar daripada sisi tegak terpendek adalah mustahil dan menandakan kesalahan, biasanya sebuah sisi tegak yang dimasukkan sebagai sisi miring.",
            },
          ],
          "h2": "Cara Memeriksa Perhitungan Jari-Jari Lingkaran Dalam Anda",
        },
        "sec-vs-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jari-jari lingkaran dalam [[r]] dan jari-jari lingkaran luar [[R]] adalah dua jari-jari segitiga siku-siku, dan keduanya menggambarkan dua lingkaran yang berbeda. Jari-jari lingkaran dalam adalah jari-jari lingkaran dalam, yaitu lingkaran di dalam segitiga yang menyentuh ketiga sisinya. Jari-jari lingkaran luar adalah jari-jari lingkaran luar, yaitu lingkaran di luar segitiga yang melewati ketiga titik sudutnya. Satu lingkaran berada di dalam segitiga, lingkaran lainnya mengelilinginya.",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga siku-siku, jari-jari lingkaran luar adalah [[R = \\frac{c}{2}]], karena sisi miring adalah diameter lingkaran luar. Jari-jari lingkaran dalam adalah [[r = \\frac{a+b-c}{2}]], yang membutuhkan ketiga sisi, karena seberapa rapat lingkaran dalam itu muat bergantung pada bentuk segitiga, bukan hanya pada sisi terpanjangnya. Gunakan segitiga 6-8-10 untuk melihat perbedaan angkanya: [[r = 2]] dan [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Pusatnya juga berbeda. Pusat lingkaran dalam terletak di dalam segitiga, tempat garis-garis bagi sudut bertemu, pada jarak [[r]] dari setiap sisi. Pusat lingkaran luar terletak di titik tengah sisi miring, pada batas segitiga, pada jarak [[R]] dari setiap titik sudut. Untuk soal tentang lingkaran luar, gunakan <a href=\"/right-triangle-circumradius-calculator/\">kalkulator jari-jari lingkaran luar segitiga siku-siku</a>, yang menerapkan [[R = \\frac{c}{2}]] secara langsung.",
            },
          ],
          "h2": "Hubungan antara Jari-Jari Lingkaran Dalam dan Jari-Jari Lingkaran Luar",
          "image": {
            "alt": "Segitiga siku-siku dengan lingkaran dalam kecil di dalamnya dan lingkaran luar besar yang melewati titik-titik sudutnya, segitiga 6-8-10",
            "caption": "Lingkaran dalam (r = 2) di dalam segitiga, lingkaran luar (R = 5) di sekelilingnya, segitiga 6-8-10.",
            "src": "inradius-vs-circumcircle.svg",
          },
          "table": {
            "headers": [
              "Fitur",
              "Jari-Jari Lingkaran Dalam r",
              "Jari-Jari Lingkaran Luar R",
            ],
            "rows": [
              [
                "Lingkaran",
                "Lingkaran dalam",
                "Lingkaran luar",
              ],
              [
                "Posisi",
                "Di dalam segitiga",
                "Di sekeliling segitiga",
              ],
              [
                "Sentuhan",
                "Menempel pada sisi-sisi",
                "Melewati titik-titik sudut",
              ],
              [
                "Rumus segitiga siku-siku",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Pusat",
                "Pusat lingkaran dalam",
                "Pusat lingkaran luar",
              ],
              [
                "Nilai 6-8-10",
                "2",
                "5",
              ],
            ],
          },
        },
        "sec-what-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jari-jari lingkaran dalam segitiga siku-siku adalah jari-jari lingkaran dalamnya, yaitu lingkaran terbesar yang muat di dalam segitiga. Bayangkan segitiga ABC dengan sudut siku-siku di C, sisi tegak AC disebut [[a]], sisi tegak BC disebut [[b]], dan sisi miring AB disebut [[c]]. Sekarang gambarlah lingkaran terbesar yang dapat Anda gambar di dalam segitiga itu tanpa melintasi sisi mana pun. Lingkaran itu menyentuh ketiga sisi, dan jari-jarinya adalah jari-jari lingkaran dalam, yang ditulis [[r]].",
            },
            {
              "kind": "p",
              "text": "Pusat lingkaran dalam disebut pusat lingkaran dalam, yang ditulis [[I]]. Pusat lingkaran dalam terletak pada jarak tegak lurus yang sama dari ketiga sisi, dan jarak itu adalah [[r]]. Setiap jari-jari yang ditarik dari [[I]] ke sebuah sisi bertemu dengan sisi itu pada sudut siku-siku, dan itulah sebabnya lingkaran itu hanya menyentuh sisi tersebut, bukan melintasinya. Lingkaran dalam tetap berada di dalam segitiga karena setiap titik pada lingkaran berjarak [[r]] atau kurang dari [[I]], dan [[I]] sendiri berada di dalam segitiga.",
            },
            {
              "kind": "p",
              "text": "Contoh kecil membuat gagasan itu nyata. Pada segitiga 3-4-5, jari-jari lingkaran dalamnya adalah [[r = \\frac{3+4-5}{2} = 1]]. Lingkaran dalam memiliki jari-jari 1 satuan, sehingga pusatnya terletak 1 satuan dari setiap sisi. <a href=\"/right-triangle-radius-calculator/\">Kalkulator jari-jari segitiga siku-siku</a> mencakup kedua jari-jari segitiga siku-siku dalam satu halaman, jika Anda ingin membandingkan lingkaran dalam dengan lingkaran yang melewati titik-titik sudut.",
            },
          ],
          "h2": "Apa Itu Jari-Jari Lingkaran Dalam Segitiga Siku-Siku?",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan lingkaran dalam di dalamnya, pusat I, dan jari-jari r yang menyentuh ketiga sisi",
            "caption": "Segitiga ABC beserta lingkaran dalamnya: pusat I terletak pada jarak r dari setiap sisi.",
            "src": "inradius-main-incircle.svg",
          },
        },
        "sec-why-formula-works": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus ini berasal dari fakta sederhana tentang garis singgung: dua ruas garis singgung yang ditarik dari titik yang sama di luar sebuah lingkaran ke lingkaran itu memiliki panjang yang sama. Setiap titik sudut segitiga terletak di luar lingkaran dalam, dan kedua sisi yang bertemu di titik sudut itu sama-sama bersinggungan dengan lingkaran. Jadi kedua ruas garis singgung dari setiap titik sudut adalah sama panjang.",
            },
            {
              "kind": "p",
              "text": "Mulailah dari titik sudut siku-siku C. Kedua sisi yang bertemu di C adalah sisi-sisi tegak, dan lingkaran dalam menyentuh setiap sisi tegak pada sebuah titik yang berjarak [[r]] dari C sepanjang sisi itu. Hal ini terjadi karena kedua jari-jari dari pusat lingkaran dalam ke sisi-sisi tegak, bersama dengan dua ruas pendek di sepanjang sisi-sisi tegak, membentuk sebuah persegi dengan sisi [[r]] di sudut C. Jadi ruas garis singgung dari C di sepanjang salah satu sisi tegak memiliki panjang [[r]].",
            },
            {
              "kind": "p",
              "text": "Sekarang lihatlah dua titik sudut lainnya. Misalkan [[x]] adalah panjang garis singgung dari titik sudut A di sepanjang sisi-sisinya, dan misalkan [[y]] adalah panjang garis singgung dari titik sudut B. Di titik sudut A, satu garis singgung berjalan di sepanjang sisi tegak [[a]] menuju C dan garis singgung lainnya berjalan di sepanjang sisi miring menuju B, sehingga keduanya memiliki panjang [[x]]. Di titik sudut B, kedua garis singgung memiliki panjang [[y]]. Panjang sisi-sisi itu kemudian tersusun dari bagian-bagian ini:",
            },
            {
              "kind": "p",
              "text": "[[[a = r + x]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = r + y]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = x + y]]]",
            },
            {
              "kind": "p",
              "text": "Jumlahkan dua persamaan pertama: [[a+b = 2r+x+y]]. Karena [[x+y = c]], persamaan ini menjadi [[a+b = 2r+c]]. Menyusun ulang menghasilkan [[2r = a+b-c]], dan membagi dengan dua menghasilkan rumusnya, [[r = \\frac{a+b-c}{2}]]. Setiap langkah mengikuti kesamaan panjang garis singgung, sehingga rumus ini bukanlah trik untuk dihafal, melainkan hasil langsung dari cara lingkaran dalam menyentuh sisi-sisinya.",
            },
          ],
          "h2": "Mengapa Rumus Jari-Jari Lingkaran Dalam Segitiga Siku-Siku Berlaku?",
        },
      },
      "tocHeading": "Isi Panduan",
      "tocItems": {
        "sec-applications": "Penerapan Praktis Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        "sec-area-semiperimeter": "Cara Menghitung Jari-Jari Lingkaran Dalam Menggunakan Luas dan Setengah Keliling",
        "sec-calculate": "Menghitung Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        "sec-diagram": "Penjelasan Diagram Lingkaran Dalam Segitiga Siku-Siku",
        "sec-examples": "Contoh Soal Menghitung Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
        "sec-formula": "Rumus Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        "sec-how-to-use": "Cara Menggunakan Kalkulator Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        "sec-incenter": "Memahami Pusat Lingkaran Dalam Segitiga Siku-Siku",
        "sec-incircle": "Apa Itu Lingkaran Dalam dalam Geometri Segitiga Siku-Siku?",
        "sec-intro": "Kalkulator Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        "sec-legs-known": "Cara Menghitung Jari-Jari Lingkaran Dalam Jika Hanya Dua Sisi Tegak Diketahui",
        "sec-mistakes": "Kesalahan Umum saat Menghitung Jari-Jari Lingkaran Dalam",
        "sec-practice": "Soal Latihan Beserta Jawaban",
        "sec-properties": "Sifat-Sifat Penting Jari-Jari Lingkaran Dalam pada Segitiga Siku-Siku",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-semiperimeter-relation": "Hubungan antara Jari-Jari Lingkaran Dalam dan Setengah Keliling",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Jari-Jari Lingkaran Dalam",
        "sec-verify": "Cara Memeriksa Perhitungan Jari-Jari Lingkaran Dalam Anda",
        "sec-vs-circumradius": "Hubungan antara Jari-Jari Lingkaran Dalam dan Jari-Jari Lingkaran Luar",
        "sec-what-inradius": "Apa Itu Jari-Jari Lingkaran Dalam Segitiga Siku-Siku?",
        "sec-why-formula-works": "Mengapa Rumus Jari-Jari Lingkaran Dalam Segitiga Siku-Siku Berlaku?",
      },
    },
};
