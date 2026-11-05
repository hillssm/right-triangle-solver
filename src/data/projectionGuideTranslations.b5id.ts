// projectionGuideTranslations.bid.ts: Right Triangle Projection
// Guide (Page 33 of 45) translation.
export const PRJ_B5_ID = {
  "id": {
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Apa itu proyeksi dalam segitiga siku-siku?",
          "answer": "Proyeksi adalah ruas garis pada hipotenusa yang terbentuk ketika garis tinggi dari sudut siku-siku bertemu dengan hipotenusa. Garis tinggi membagi hipotenusa menjadi dua bagian, p dan q. Setiap bagian merupakan proyeksi salah satu kaki ke hipotenusa.",
        },
        {
          "question": "Apa perbedaan antara proyeksi p dan proyeksi q?",
          "answer": "Proyeksi p terletak di samping titik sudut A dan merupakan milik kaki a, sedangkan proyeksi q terletak di samping titik sudut B dan merupakan milik kaki b. Keduanya adalah dua bagian dari hipotenusa yang sama, dan [[p + q = c]]. Menukar keduanya akan menukar kaki yang dijelaskannya.",
        },
        {
          "question": "Apa rumus untuk proyeksi p?",
          "answer": "Rumusnya adalah [[p = a^2 / c]], dengan a adalah kaki a dan c adalah hipotenusa penuh. Kuadratkan kaki a terlebih dahulu, lalu bagi dengan c. Dengan [[a = 9]] cm dan [[c = 15]] cm, [[p = 81 / 15 = 5.4]] cm.",
        },
        {
          "question": "Apa rumus untuk proyeksi q?",
          "answer": "Rumusnya adalah [[q = b^2 / c]], dengan b adalah kaki b dan c adalah hipotenusa penuh. Kuadratkan kaki b terlebih dahulu, lalu bagi dengan c. Dengan [[b = 12]] cm dan [[c = 15]] cm, [[q = 144 / 15 = 9.6]] cm.",
        },
        {
          "question": "Bagaimana cara menghitung kaki a dari proyeksi p?",
          "answer": "Gunakan [[a = \\sqrt{c \\times p}]]. Kalikan hipotenusa c dengan proyeksi p, lalu ambil akar kuadratnya. Dengan [[c = 25]] cm dan [[p = 9]] cm, [[a = \\sqrt{225} = 15]] cm. Akar kuadrat diperlukan karena cp sama dengan a kuadrat, bukan a.",
        },
        {
          "question": "Bagaimana cara menghitung kaki b dari proyeksi q?",
          "answer": "Gunakan [[b = \\sqrt{c \\times q}]]. Kalikan hipotenusa c dengan proyeksi q, lalu ambil akar kuadratnya. Dengan [[c = 25]] cm dan [[q = 16]] cm, [[b = \\sqrt{400} = 20]] cm. Akar kuadrat mengubah panjang yang dikuadratkan kembali menjadi panjang sisi.",
        },
        {
          "question": "Bagaimana cara mencari hipotenusa dari dua proyeksi?",
          "answer": "Jumlahkan kedua proyeksi: [[c = p + q]]. Garis tinggi membagi hipotenusa menjadi tepat dua ruas garis tersebut, sehingga jumlahnya membangun kembali seluruh sisi. Dengan [[p = 9]] cm dan [[q = 16]] cm, [[c = 25]] cm.",
        },
        {
          "question": "Mengapa kita menggunakan akar kuadrat dalam teorema proyeksi?",
          "answer": "Karena teorema tersebut memberikan kuadrat dari suatu kaki, bukan kaki itu sendiri. Pernyataan [[a^2 = c \\times p]] menjelaskan panjang yang dikuadratkan. Mengambil akar kuadrat membatalkan pengkuadratan dan mengembalikan panjang biasa. Melewatinya berarti melaporkan nilai kuadrat seolah-olah itu adalah sebuah sisi.",
        },
        {
          "question": "Dapatkah proyeksi menentukan garis tinggi?",
          "answer": "Ya. Garis tinggi adalah rata-rata geometris dari kedua proyeksi: [[h = \\sqrt{p \\times q}]]. Dengan [[p = 9]] cm dan [[q = 16]] cm, [[h = \\sqrt{144} = 12]] cm. Halaman ini tidak memiliki mode garis tinggi, jadi gunakan kalkulator garis tinggi dari proyeksi khusus untuk langkah tersebut.",
        },
        {
          "question": "Bagaimana hubungan proyeksi dengan teorema Pythagoras?",
          "answer": "Menjumlahkan kedua rumus proyeksi menghasilkan [[a^2 + b^2 = c \\times p + c \\times q = c(p + q)]]. Karena [[p + q = c]], ini menjadi [[a^2 + b^2 = c^2]]. Teorema proyeksi membagi hubungan Pythagoras menjadi satu bagian per kaki.",
        },
        {
          "question": "Mode kalkulator mana yang harus saya pilih?",
          "answer": "Sesuaikan mode dengan nilai yang Anda ketahui. Gunakan ruas p ketika Anda mengetahui a dan c, ruas q ketika Anda mengetahui b dan c, kaki a ketika Anda mengetahui c dan p, kaki b ketika Anda mengetahui c dan q, dan jumlah proyeksi menjadi c ketika Anda mengetahui p dan q.",
        },
        {
          "question": "Apakah proyeksi sama dengan kaki segitiga siku-siku?",
          "answer": "Tidak. Kaki adalah dua sisi yang membentuk sudut siku-siku, sedangkan proyeksi adalah ruas garis di sepanjang hipotenusa. Proyeksi lebih pendek daripada kakinya dalam sebagian besar kasus, dan terletak mendatar pada hipotenusa, bukan di sepanjang sisi segitiga.",
        },
      ],
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Pilih alat berikutnya berdasarkan pengukuran yang Anda butuhkan, karena setiap kalkulator di bawah ini menangani satu tugas proyeksi tertentu.",
      "relatedItems": [
        "Kalkulator Proyeksi P Segitiga Siku-Siku",
        "Kalkulator Proyeksi Q Segitiga Siku-Siku",
        "Kalkulator Kaki A dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Kaki B dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Hipotenusa dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Garis Tinggi dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Garis Tinggi Segitiga Siku-Siku",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Proyeksi dalam segitiga siku-siku adalah bayangan yang dilemparkan sebuah kaki ke hipotenusa. Turunkan garis tinggi dari titik sudut siku-siku ke hipotenusa, dan garis itu membagi sisi tersebut menjadi dua ruas garis, yang disebut p dan q. Ruas p merupakan milik kaki a, dan ruas q merupakan milik kaki b.",
            },
            {
              "kind": "p",
              "text": "Kalkulator Proyeksi Segitiga Siku-Siku ini bekerja dengan kelima hubungan proyeksi. Kalkulator ini mencari proyeksi p dari kaki a, proyeksi q dari kaki b, kaki a dari proyeksi p, kaki b dari proyeksi q, dan hipotenusa penuh dari p dan q. Setiap tugas adalah mode terpisah, jadi Anda memilih mode yang sesuai dengan pengukuran yang sudah Anda ketahui.",
            },
            {
              "kind": "p",
              "text": "Dua proyeksi yang sama juga dapat membangun kembali seluruh segitiga. Sebagai contoh, jika [[p = 9]] cm dan [[q = 16]] cm, maka [[c = 9 + 16 = 25]] cm, dan garis tingginya adalah [[h = \\sqrt{9 \\times 16} = 12]] cm. Panduan ini menjelaskan setiap mode, menunjukkan rumusnya, mengerjakan contoh-contoh, dan mengajarkan cara memeriksa setiap jawaban.",
            },
          ],
          "h2": "Kalkulator Proyeksi Segitiga Siku-Siku",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator pada halaman ini menawarkan lima mode, satu untuk setiap hubungan proyeksi. Setiap mode meminta dua pengukuran yang diketahui dan mengembalikan satu nilai yang belum diketahui. Anda tidak perlu menyelesaikan seluruh segitiga terlebih dahulu: pilih mode yang sesuai dengan angka Anda, masukkan angka tersebut, dan baca hasilnya.",
            },
            {
              "kind": "p",
              "text": "Tabel di bawah ini adalah cara tercepat untuk memilih. Temukan baris yang pengukuran diketahuinya cocok dengan milik Anda, dan baris itu menyebutkan mode yang harus digunakan. Bagian-bagian berikutnya menjelaskan setiap mode secara rinci, dengan contoh pengerjaan untuk masing-masing mode.",
            },
          ],
          "h2": "Menghitung Proyeksi Segitiga Siku-Siku dan Ruas Hipotenusa",
          "table": {
            "headers": [
              "Mode Kalkulator",
              "Pengukuran yang Diketahui",
              "Hasil",
            ],
            "rows": [
              [
                "Ruas Hipotenusa p",
                "Kaki a dan hipotenusa c",
                "Proyeksi p",
              ],
              [
                "Ruas Hipotenusa q",
                "Kaki b dan hipotenusa c",
                "Proyeksi q",
              ],
              [
                "Kaki a dari Proyeksi Kuadrat",
                "Hipotenusa c dan proyeksi p",
                "Kaki a",
              ],
              [
                "Kaki b dari Proyeksi Kuadrat",
                "Hipotenusa c dan proyeksi q",
                "Kaki b",
              ],
              [
                "Jumlah Proyeksi Menjadi c",
                "Proyeksi p dan proyeksi q",
                "Hipotenusa c",
              ],
            ],
          },
        },
        "sec-what-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ambil segitiga siku-siku ABC, dengan sudut siku-siku di C. Dua sisi yang membentuk sudut siku-siku adalah kaki-kaki, AC dan BC. Sisi yang berhadapan dengan sudut siku-siku adalah hipotenusa, AB. Sekarang tarik garis tinggi dari C lurus ke hipotenusa, hingga bertemu di sebuah titik yang disebut D. Garis tinggi itu tegak lurus terhadap hipotenusa, sehingga bertemu dengan AB pada sudut siku-siku.",
            },
            {
              "kind": "p",
              "text": "Titik D membagi hipotenusa menjadi dua ruas garis yang berdekatan. Ruas di samping titik sudut A, yang disebut AD, adalah proyeksi p. Ruas di samping titik sudut B, yang disebut DB, adalah proyeksi q. Bersama-sama keduanya membentuk seluruh hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Setiap proyeksi merupakan milik kaki yang menyentuh titik sudutnya. Kaki a menyentuh titik sudut A, sehingga proyeksinya adalah p. Kaki b menyentuh titik sudut B, sehingga proyeksinya adalah q. Pasangan ini tidak pernah berubah: a berpasangan dengan p, dan b berpasangan dengan q.",
            },
            {
              "kind": "p",
              "text": "Proyeksi terletak mendatar di sepanjang hipotenusa. Proyeksi bukan sisi segitiga, dan tidak tegak lurus terhadap apa pun. Bayangkan masing-masing proyeksi sebagai bayangan yang dilemparkan kakinya ke hipotenusa ketika garis tinggi turun lurus ke arahnya.",
            },
          ],
          "h2": "Apa Itu Proyeksi dalam Segitiga Siku-Siku?",
        },
        "sec-sides-segments": {
          "blocks": [
            {
              "kind": "p",
              "text": "Satu segitiga memiliki enam bagian bernama, dan masing-masing memiliki posisi tetap. Tabel di bawah ini mencantumkan setiap bagian beserta simbol, arti, dan letaknya. Pelajari tabel ini sekali, dan setiap rumus dalam panduan ini akan terbaca dengan jelas.",
            },
            {
              "kind": "p",
              "text": "Mengidentifikasi ruas yang benar penting karena setiap mode kalkulator mengharapkan masukan tertentu. Memasukkan proyeksi di tempat kaki seharusnya berada, atau memasukkan p di tempat q seharusnya berada, tetap menghasilkan sebuah angka, tetapi angka itu menjawab pertanyaan yang berbeda dari yang Anda ajukan. Beri label pada diagram terlebih dahulu, lalu cocokkan label dengan modenya.",
            },
          ],
          "h2": "Memahami Sisi dan Ruas Garis Segitiga Siku-Siku",
          "table": {
            "headers": [
              "Simbol",
              "Nama",
              "Posisi",
            ],
            "rows": [
              [
                "a",
                "Kaki a (sisi AC)",
                "Sisi tegak lurus yang menyentuh titik sudut A",
              ],
              [
                "b",
                "Kaki b (sisi BC)",
                "Sisi tegak lurus yang menyentuh titik sudut B",
              ],
              [
                "c",
                "Hipotenusa (sisi AB)",
                "Sisi terpanjang, berhadapan dengan sudut siku-siku",
              ],
              [
                "p",
                "Proyeksi p (ruas AD)",
                "Bagian hipotenusa di samping titik sudut A",
              ],
              [
                "q",
                "Proyeksi q (ruas DB)",
                "Bagian hipotenusa di samping titik sudut B",
              ],
              [
                "h",
                "Garis tinggi (ruas CD)",
                "Garis tegak lurus dari C ke hipotenusa",
              ],
            ],
          },
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Lima rumus mencakup setiap mode pada halaman ini. Dua rumus pertama mencari proyeksi dari kaki. Dua rumus berikutnya mendapatkan kembali kaki dari proyeksi. Rumus terakhir membangun kembali hipotenusa dari kedua bagiannya.",
            },
            {
              "kind": "p",
              "text": "Proyeksi p, dari kaki a dan hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Proyeksi q, dari kaki b dan hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Kaki a, dari hipotenusa dan proyeksi p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Kaki b, dari hipotenusa dan proyeksi q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenusa, dari kedua proyeksi:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Mencari proyeksi berarti mengkuadratkan sebuah kaki dan membaginya dengan hipotenusa. Mencari kaki berarti mengalikan hipotenusa dengan sebuah proyeksi dan mengambil akar kuadratnya. Mencari hipotenusa berarti menjumlahkan dua ruas garis. Akar kuadrat hanya muncul ketika mendapatkan kembali sebuah kaki, karena hanya rumus kaki yang berawal dari panjang yang dikuadratkan. Semua pengukuran harus menggunakan satuan yang sama, jadi ubahlah satuannya sebelum Anda menghitung.",
            },
          ],
          "h2": "Rumus Proyeksi Segitiga Siku-Siku Dijelaskan",
        },
        "sec-choose-mode": {
          "blocks": [
            {
              "kind": "p",
              "text": "Memilih mode adalah latihan mencocokkan: temukan mode yang meminta dua pengukuran yang Anda ketahui, dan kalkulator akan mengembalikan pengukuran yang belum diketahui.",
            },
            {
              "kind": "h3",
              "text": "Mode 1: Ruas Hipotenusa p",
            },
            {
              "kind": "p",
              "text": "Pilih mode ini ketika Anda mengetahui kaki a dan hipotenusa c. Rumusnya adalah [[p = a^2 / c]]. Kuadratkan kaki a, lalu bagi dengan c. Gunakan mode ini ketika sebuah soal memberi Anda sebuah kaki dan seluruh hipotenusa lalu menanyakan berapa bagian hipotenusa yang merupakan milik kaki tersebut.",
            },
            {
              "kind": "h3",
              "text": "Mode 2: Ruas Hipotenusa q",
            },
            {
              "kind": "p",
              "text": "Pilih mode ini ketika Anda mengetahui kaki b dan hipotenusa c. Rumusnya adalah [[q = b^2 / c]]. Mode ini adalah cerminan dari mode 1, dengan kaki b menggantikan kaki a. Gunakan mode ini ketika kaki yang diketahui adalah kaki yang menyentuh titik sudut B.",
            },
            {
              "kind": "h3",
              "text": "Mode 3: Kaki a dari Proyeksi Kuadrat",
            },
            {
              "kind": "p",
              "text": "Pilih mode ini ketika Anda mengetahui hipotenusa c dan proyeksi p. Rumusnya adalah [[a = \\sqrt{c \\times p}]]. Kalikan terlebih dahulu, lalu ambil akar kuadratnya. Gunakan mode ini ketika sebuah soal memberi hipotenusa dan ruas di samping A lalu menanyakan kakinya.",
            },
            {
              "kind": "h3",
              "text": "Mode 4: Kaki b dari Proyeksi Kuadrat",
            },
            {
              "kind": "p",
              "text": "Pilih mode ini ketika Anda mengetahui hipotenusa c dan proyeksi q. Rumusnya adalah [[b = \\sqrt{c \\times q}]]. Mode ini adalah cerminan dari mode 3, dengan q menggantikan p. Gunakan mode ini ketika ruas yang diketahui adalah ruas di samping B.",
            },
            {
              "kind": "h3",
              "text": "Mode 5: Jumlah Proyeksi Menjadi c",
            },
            {
              "kind": "p",
              "text": "Pilih mode ini ketika Anda mengetahui kedua proyeksi, p dan q. Rumusnya adalah [[c = p + q]], penjumlahan biasa tanpa pengkuadratan dan tanpa akar kuadrat.",
            },
            {
              "kind": "p",
              "text": "Panduan keputusan cepat: kaki dengan c menghasilkan proyeksi, c dengan proyeksi menghasilkan kaki, dan kedua proyeksi bersama-sama menghasilkan c. Jika nilai yang Anda ketahui tidak cocok dengan pasangan-pasangan ini, Anda membutuhkan pengukuran lain terlebih dahulu.",
            },
          ],
          "h2": "Cara Memilih Mode Kalkulator yang Benar",
          "image": {
            "alt": "Lima mode kalkulator beserta nilai yang diketahui dan hasilnya: ruas p dari a dan c, ruas q dari b dan c, kaki a dari c dan p, kaki b dari c dan q, dan hipotenusa c dari p dan q",
            "caption": "Lima mode, satu untuk setiap pasangan yang diketahui: kaki dengan c menghasilkan proyeksi, c dengan proyeksi menghasilkan kaki, dan p dengan q menghasilkan c.",
            "src": "projection-five-modes.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Proyeksi p adalah bagian hipotenusa yang merupakan milik kaki a. Rumusnya membagi kuadrat kaki a dengan hipotenusa penuh:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 9]] cm dan [[c = 15]] cm. Langkah 1 menuliskan rumusnya, [[p = a^2 / c]]. Langkah 2 menggantikan nilainya, [[p = 9^2 / 15 = 81 / 15]]. Langkah 3 membaginya, sehingga diperoleh [[p = 5.4]] cm. Jawabannya adalah panjang di sepanjang hipotenusa, yang diukur dalam satuan yang sama dengan a dan c.",
            },
            {
              "kind": "p",
              "text": "Pemeriksaan singkat mengonfirmasi hasilnya. Kaki lain pada segitiga ini adalah 12 cm, sehingga proyeksinya adalah [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Menjumlahkan kedua proyeksi menghasilkan [[5.4 + 9.6 = 15]] cm, yang tepat sama dengan c. Jika kedua proyeksi Anda tidak berjumlah c, salah satu masukannya salah. <a href=\"/right-triangle-projection-p-calculator/\">kalkulator proyeksi p</a> menangani perhitungan ini sendiri ketika Anda sering membutuhkannya.",
            },
          ],
          "h2": "Cara Menghitung Proyeksi P dari Kaki A dan Hipotenusa",
          "image": {
            "alt": "Segitiga siku-siku yang menunjukkan kaki a kuadrat dibagi hipotenusa c menghasilkan proyeksi p, dengan a sama dengan 9 cm dan c sama dengan 15 cm sehingga p sama dengan 5,4 cm",
            "caption": "Proyeksi p dari kaki a: p sama dengan a kuadrat dibagi c, sehingga 81 dibagi 15 menghasilkan 5,4 cm.",
            "src": "projection-p-leg-a.svg",
          },
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Proyeksi q adalah bagian hipotenusa yang merupakan milik kaki b. Rumusnya membagi kuadrat kaki b dengan hipotenusa penuh:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[b = 12]] cm dan [[c = 15]] cm. Langkah 1 menuliskan rumusnya, [[q = b^2 / c]]. Langkah 2 menggantikan nilainya, [[q = 12^2 / 15 = 144 / 15]]. Langkah 3 membaginya, sehingga diperoleh [[q = 9.6]] cm. Jawabannya adalah ruas di samping titik sudut B, di sisi berlawanan dari kaki garis tinggi terhadap p.",
            },
            {
              "kind": "p",
              "text": "Bandingkan kedua proyeksi sebelum melanjutkan. Di sini p adalah 5,4 cm dan q adalah 9,6 cm, sehingga q lebih besar, yang sesuai dengan kaki b yang lebih panjang daripada kaki a. Kaki yang lebih panjang selalu melemparkan proyeksi yang lebih panjang. Jika kaki Anda yang lebih panjang menghasilkan proyeksi yang lebih pendek, Anda telah menukar p dan q. <a href=\"/right-triangle-projection-q-calculator/\">kalkulator proyeksi q</a> menangani perhitungan ini sendiri ketika Anda sering membutuhkannya.",
            },
          ],
          "h2": "Cara Menghitung Proyeksi Q dari Kaki B dan Hipotenusa",
          "image": {
            "alt": "Segitiga siku-siku yang menunjukkan kaki b kuadrat dibagi hipotenusa c menghasilkan proyeksi q, dengan b sama dengan 12 cm dan c sama dengan 15 cm sehingga q sama dengan 9,6 cm",
            "caption": "Proyeksi q dari kaki b: q sama dengan b kuadrat dibagi c, sehingga 144 dibagi 15 menghasilkan 9,6 cm.",
            "src": "projection-q-leg-b.svg",
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Untuk mendapatkan kembali kaki a, kalikan hipotenusa dengan proyeksi p lalu ambil akar kuadratnya:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[c = 25]] cm dan [[p = 9]] cm. Hasil kalinya adalah [[25 \\times 9 = 225]], dan akar kuadrat dari 225 adalah 15, sehingga [[a = 15]] cm. Hasil kali 225 adalah panjang yang dikuadratkan, bukan sebuah sisi, sehingga akar kuadrat tidak boleh dilewatkan. Melaporkan 225 sebagai kaki sama dengan mengklaim sebuah sisi sembilan kali lebih panjang daripada hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Langkah akar kuadrat adalah inti dari mode ini. Teorema proyeksi menyatakan [[a^2 = c \\times p]], sehingga hasil kali memberikan kuadrat dari kaki tersebut. Membatalkan kuadrat membutuhkan akar kuadrat, sama seperti membatalkan penggandaan membutuhkan pembagian dua. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">kalkulator kaki a dari proyeksi</a> membahas perhitungan ini secara lengkap ketika Anda membutuhkannya sendiri.",
            },
          ],
          "h2": "Cara Mencari Kaki A dari Proyeksi P",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Untuk mendapatkan kembali kaki b, kalikan hipotenusa dengan proyeksi q lalu ambil akar kuadratnya:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[c = 25]] cm dan [[q = 16]] cm. Hasil kalinya adalah [[25 \\times 16 = 400]], dan akar kuadrat dari 400 adalah 20, sehingga [[b = 20]] cm. Caranya adalah cerminan dari perhitungan kaki a, dengan q menggantikan p. Pasangannya ditetapkan oleh label segitiga, sehingga memasukkan p di sini akan mengembalikan kaki a.",
            },
            {
              "kind": "p",
              "text": "Periksa jawaban terhadap ukuran segitiga. Kaki b harus lebih pendek daripada hipotenusa, dan 20 cm lebih pendek daripada 25 cm, sehingga hasilnya lolos pemeriksaan akal sehat pertama. Mengkuadratkannya menghasilkan [[20^2 = 400]], yang sama dengan [[c \\times q = 25 \\times 16 = 400]], sehingga teorema berlaku tepat. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator kaki b dari proyeksi</a> membahas perhitungan ini secara lengkap ketika Anda membutuhkannya sendiri.",
            },
          ],
          "h2": "Cara Mencari Kaki B dari Proyeksi Q",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua proyeksi adalah dua bagian dari satu sisi lurus, sehingga hipotenusa adalah jumlah keduanya:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[p = 9]] cm dan [[q = 16]] cm. Penjumlahan menghasilkan [[c = 9 + 16 = 25]] cm. Ini adalah prinsip penjumlahan ruas garis: ketika sebuah titik membagi sebuah ruas garis menjadi dua bagian, seluruh ruas garis sama dengan jumlah bagian-bagiannya. Kaki garis tinggi D membagi hipotenusa AB menjadi AD dan DB, sehingga AB sama dengan AD ditambah DB.",
            },
            {
              "kind": "p",
              "text": "Mode ini juga merupakan pemeriksaan tercepat untuk keempat mode lainnya. Setiap kali Anda menghitung p dan q secara terpisah, jumlahkan keduanya dan bandingkan dengan c. Pada segitiga 9-12-15, [[p = 5.4]] cm dan [[q = 9.6]] cm berjumlah 15 cm, sehingga mengonfirmasi kedua proyeksi sekaligus. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">kalkulator hipotenusa dari proyeksi</a> membahas perhitungan ini secara lengkap ketika Anda membutuhkannya sendiri.",
            },
          ],
          "h2": "Cara Menghitung Hipotenusa Lengkap dari Proyeksi",
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh langkah singkat membawa Anda dari diagram berlabel menuju jawaban yang sudah diperiksa. Langkah-langkahnya sama untuk setiap mode; hanya mode yang Anda pilih dan angka yang Anda masukkan yang berubah.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tentukan pengukuran mana yang diketahui.",
                "Buka pemilih mode kalkulator.",
                "Pilih mode perhitungan yang sesuai.",
                "Masukkan pengukuran pertama yang diperlukan.",
                "Masukkan pengukuran kedua yang diperlukan.",
                "Pilih satuan pengukuran yang sesuai.",
                "Klik tombol Hitung yang relevan.",
                "Baca hasil yang ditampilkan.",
                "Periksa jawaban menggunakan hubungan geometris lain bila perlu.",
                "Gunakan Reset sebelum memulai perhitungan lain.",
              ],
            },
            {
              "kind": "p",
              "text": "Langkah 1 melakukan sebagian besar pekerjaan. Beri label pada segitiga, tandai p dan q pada hipotenusa, dan catat kaki mana yang dimiliki setiap proyeksi. Setelah label ditetapkan, pilihan mode mengikuti tabel di dekat bagian atas panduan ini, dan kalkulator menangani aritmetikanya. Jangan menjelaskan atau mengharapkan fitur yang tidak dimiliki halaman ini: halaman ini tidak menghitung garis tinggi, sudut, atau luas secara otomatis.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Proyeksi Segitiga Siku-Siku",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram utama menunjukkan segitiga ABC dengan sudut siku-siku di C. Sisi AC adalah kaki a, sisi BC adalah kaki b, dan sisi AB adalah hipotenusa c. Garis tinggi CD turun dari C tegak lurus ke AB dan menyentuhnya di D. Dua persegi kecil menandai sudut siku-siku: satu di C, di antara kedua kaki, dan satu di D, di antara garis tinggi dan hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Titik D membagi hipotenusa menjadi ruas AD, yaitu proyeksi p, dan ruas DB, yaitu proyeksi q. Garis tinggi CD diberi label h. Telusuri diagram dengan urutan ini untuk menetapkan labelnya: mulai dari A, susuri kaki a ke C, lalu kaki b ke B, kemudian kembali sepanjang hipotenusa dari B ke A, sambil berhenti di D untuk melihat pembagian menjadi q dan p.",
            },
            {
              "kind": "p",
              "text": "Garis tinggi membentuk dua segitiga siku-siku yang lebih kecil, ACD dan CBD, di dalam segitiga aslinya. Pada segitiga ACD, hipotenusanya adalah kaki a dan salah satu kakinya adalah proyeksi p. Pada segitiga CBD, hipotenusanya adalah kaki b dan salah satu kakinya adalah proyeksi q.",
            },
          ],
          "h2": "Memahami Diagram Proyeksi Segitiga Siku-Siku",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan sudut siku-siku di C, garis tinggi CD ke hipotenusa AB, kaki a dan b, hipotenusa c, proyeksi p dan q, serta garis tinggi h yang diberi label",
            "caption": "Segitiga utama ABC: garis tinggi CD membagi hipotenusa AB menjadi proyeksi p (AD) dan proyeksi q (DB).",
            "src": "projection-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti ini bertumpu pada segitiga sebangun. Menggambar garis tinggi CD membagi segitiga ABC menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD, dan keduanya sebangun dengan segitiga aslinya. Kesebangunan berarti sisi-sisi yang bersesuaian tetap dalam perbandingan yang sama, dan salah satu perbandingan itu langsung menghasilkan teorema proyeksi.",
            },
            {
              "kind": "p",
              "text": "Mulailah dengan kaki a. Segitiga ACD berbagi sudut di A dengan segitiga ABC, dan keduanya memiliki sudut siku-siku, sehingga sudut ketiganya juga harus sama. Mencocokkan sisi-sisi yang berada pada posisi yang sama menghasilkan perbandingan:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang gantikan dengan simbol standar: [[AD = p]], [[AC = a]], dan [[AB = c]]. Perbandingan itu menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Perkalian silang menghilangkan pecahan: [[p \\times c = a \\times a]], yang berarti [[a^2 = c \\times p]]. Argumen yang sama yang diterapkan pada segitiga kecil lainnya, CBD, menghasilkan [[b^2 = c \\times q]], karena segitiga CBD berbagi sudut di B dengan seluruh segitiga. Kesebangunan melakukan semua pekerjaan: sisi-sisi yang bersesuaian pada segitiga sebangun tetap sebanding, dan teorema proyeksi adalah bentuk perbandingan itu setelah perkalian silang.",
            },
          ],
          "h2": "Mengapa Teorema Proyeksi Berlaku?",
          "image": {
            "alt": "Segitiga siku-siku asli ABC di samping segitiga-segitiga kecil yang sebangun ACD dan CBD, yang menunjukkan perbandingan p per a sama dengan a per c dan q per b sama dengan b per c",
            "caption": "Bukti segitiga sebangun: p per a sama dengan a per c, dan q per b sama dengan b per c.",
            "src": "projection-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap contoh menyatakan nilai yang diberikan, modenya, penggantiannya, dan jawaban akhirnya. Dua contoh mencakup masing-masing dari lima mode, sehingga Anda dapat melihat setiap mode dua kali dengan angka yang berbeda.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Mencari Proyeksi P",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 9]] cm dan [[c = 15]] cm, gunakan mode 1, Ruas Hipotenusa p. Rumusnya menghasilkan [[p = 9^2 / 15 = 81 / 15 = 5.4]] cm. ",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Mencari Proyeksi P",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 12]] m dan [[c = 20]] m, gunakan mode 1. Rumusnya menghasilkan [[p = 12^2 / 20 = 144 / 20 = 7.2]] m. Proyeksi lainnya adalah 12,8 m, dan [[7.2 + 12.8 = 20]] m mengonfirmasi hasilnya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Mencari Proyeksi Q",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 12]] cm dan [[c = 15]] cm, gunakan mode 2, Ruas Hipotenusa q. Rumusnya menghasilkan [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Ini adalah segitiga yang sama dengan Contoh 1, dilihat dari kaki lainnya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Mencari Proyeksi Q",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 8]] m dan [[c = 10]] m, gunakan mode 2. Rumusnya menghasilkan [[q = 8^2 / 10 = 64 / 10 = 6.4]] m. Proyeksi lainnya adalah 3,6 m, dan ini adalah segitiga 6-8-10 yang sudah dikenal.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Mencari Kaki A",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 25]] cm dan [[p = 9]] cm, gunakan mode 3, Kaki a dari Proyeksi Kuadrat. Rumusnya menghasilkan [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Hasil kalinya adalah kuadrat sempurna, sehingga jawabannya tepat, tanpa pembulatan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Mencari Kaki A",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 10]] cm dan [[p = 4]] cm, gunakan mode 3. Rumusnya menghasilkan [[a = \\sqrt{10 \\times 4} = \\sqrt{40} \\approx 6.325]] cm. Hasil kali 40 bukan kuadrat sempurna, sehingga jawabannya adalah perkiraan yang dibulatkan ke tiga tempat desimal.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Mencari Kaki B",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 25]] cm dan [[q = 16]] cm, gunakan mode 4, Kaki b dari Proyeksi Kuadrat. Rumusnya menghasilkan [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Ini adalah segitiga yang sama dengan Contoh 5, dilihat dari proyeksi lainnya, dan kedua kaki 15 dan 20 melengkapi segitiga 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Mencari Kaki B",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 10]] cm dan [[q = 6]] cm, gunakan mode 4. Rumusnya menghasilkan [[b = \\sqrt{10 \\times 6} = \\sqrt{60} \\approx 7.746]] cm. Kaki a yang cocok adalah sekitar 6,325 cm, dari Contoh 6.",
            },
            {
              "kind": "h3",
              "text": "Contoh 9: Mencari Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 9]] cm dan [[q = 16]] cm, gunakan mode 5, Jumlah Proyeksi Menjadi c. Rumusnya menghasilkan [[c = 9 + 16 = 25]] cm. Tidak diperlukan pengkuadratan dan akar kuadrat, karena kedua ruas garis itu hanya bergabung menjadi seluruh sisi.",
            },
            {
              "kind": "h3",
              "text": "Contoh 10: Mencari Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 3.5]] m dan [[q = 6.5]] m, gunakan mode 5. Rumusnya menghasilkan [[c = 3.5 + 6.5 = 10]] m. Proyeksi desimal dijumlahkan dengan cara yang sama seperti bilangan bulat, jadi sejajarkan titik desimalnya lalu jumlahkan.",
            },
          ],
          "h2": "Contoh Pengerjaan Menggunakan Kelima Mode Kalkulator",
        },
        "sec-all-measurements": {
          "blocks": [
            {
              "kind": "p",
              "text": "Mengetahui kedua proyeksi sudah cukup untuk membangun kembali seluruh segitiga. Gunakan [[p = 9]] cm dan [[q = 16]] cm. Pertama, hipotenusanya adalah [[c = 9 + 16 = 25]] cm. Kemudian kaki a adalah [[a = \\sqrt{25 \\times 9} = 15]] cm, dan kaki b adalah [[b = \\sqrt{25 \\times 16} = 20]] cm. Garis tingginya adalah [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Satu pasang angka menghasilkan empat panjang: c, a, b, dan h. Itulah kekuatan hubungan proyeksi: dua ruas pada hipotenusa membawa seluruh bentuk segitiga. Pemeriksaan akhir menutup lingkaran: [[15^2 + 20^2 = 225 + 400 = 625 = 25^2]], sehingga teorema Pythagoras mengonfirmasi seluruh segitiga sekaligus.",
            },
            {
              "kind": "p",
              "text": "Ingatlah bahwa ini adalah hubungan matematis, bukan mode kalkulator terpisah. Halaman ini menghitung satu nilai per mode. Membangun kembali seluruh segitiga berarti menjalankan satu mode, lalu menggunakan hasilnya pada mode berikutnya, atau mengerjakan langkah-langkahnya dengan tangan seperti yang ditunjukkan di atas.",
            },
          ],
          "h2": "Cara Menghitung Semua Pengukuran Utama Segitiga Siku-Siku",
          "image": {
            "alt": "Segitiga siku-siku dengan proyeksi p sama dengan 9 dan q sama dengan 16, hipotenusa 25, kaki 15 dan 20, serta garis tinggi 12, yang menunjukkan keenam pengukuran pada satu diagram",
            "caption": "Satu pasang proyeksi membangun kembali segitiga: c = 25, a = 15, b = 20, h = 12.",
            "src": "projection-numerical-example.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema proyeksi dan teorema Pythagoras cocok secara tepat, dan aljabar menunjukkan alasannya. Mulailah dari dua rumus proyeksi:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Tambahkan rumus yang cocok untuk kaki b, [[b^2 = c \\times q]], sehingga diperoleh:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Memfaktorkan c dari sisi kanan menghasilkan [[a^2 + b^2 = c(p + q)]]. Karena [[p + q = c]], penggantian menghasilkan hasil yang sudah dikenal:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Pemeriksaan numerik dengan segitiga 9-16-25 mengonfirmasinya: [[a^2 + b^2 = 225 + 400 = 625]] dan [[c^2 = 25^2 = 625]]. Kedua teorema itu bukan saingan. Teorema proyeksi membagi hubungan Pythagoras menjadi satu bagian per kaki, dan menjumlahkan bagian-bagiannya membangunnya kembali. Itulah sebabnya setiap hasil pada halaman ini dapat diperiksa dengan teorema Pythagoras.",
            },
          ],
          "h2": "Hubungan antara Proyeksi dan Teorema Pythagoras",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Garis tinggi adalah rata-rata geometris dari kedua proyeksi:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[p = 9]] cm dan [[q = 16]] cm. Hasil kalinya adalah [[9 \\times 16 = 144]], dan akar kuadrat dari 144 adalah 12, sehingga [[h = 12]] cm. Garis tinggi adalah ruas tegak lurus dari sudut siku-siku ke hipotenusa, dan panjangnya sudah tetap begitu p dan q diketahui. Ini adalah gagasan rata-rata geometris yang sama yang menghubungkan kaki dengan proyeksi, yang diterapkan pada garis tinggi.",
            },
            {
              "kind": "p",
              "text": "Perhatikan bahwa halaman ini tidak memiliki mode garis tinggi khusus. Kalkulator mengembalikan proyeksi, kaki, dan hipotenusa, tetapi bukan h. Untuk halaman yang menyelesaikan garis tinggi secara langsung, gunakan <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator garis tinggi dari proyeksi</a>, yang menerima p dan q lalu mengembalikan h. <a href=\"/right-triangle-altitude-calculator/\">kalkulator garis tinggi</a> membahas cara lain untuk mencari h, dari kaki-kaki atau dari luas.",
            },
          ],
          "h2": "Hubungan antara Proyeksi dan Garis Tinggi",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Empat pemeriksaan independen menangkap hampir setiap kesalahan. Jalankan setidaknya satu pemeriksaan pada setiap jawaban, dan jalankan keempatnya ketika soalnya penting. Setiap pemeriksaan menggunakan hubungan yang berbeda, sehingga kesalahan yang lolos dari satu pemeriksaan biasanya tertangkap oleh pemeriksaan lain.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 1: Penjumlahan Proyeksi",
            },
            {
              "kind": "p",
              "text": "Konfirmasikan bahwa [[p + q = c]]. Dengan [[p = 9]] cm, [[q = 16]] cm, dan [[c = 25]] cm, [[9 + 16 = 25]], sehingga ruas-ruasnya cocok. Jika jumlahnya berbeda dari c, salah satu proyeksinya salah.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 2: Teorema Proyeksi untuk Kaki A",
            },
            {
              "kind": "p",
              "text": "Kuadratkan kaki a dan bandingkan dengan [[c \\times p]]. Dengan [[a = 15]] cm, [[c = 25]] cm, dan [[p = 9]] cm, [[a^2 = 225]] dan [[c \\times p = 225]], sehingga jawabannya lolos. Jika kedua angka itu berbeda, kaki atau proyeksinya salah.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 3: Teorema Proyeksi untuk Kaki B",
            },
            {
              "kind": "p",
              "text": "Kuadratkan kaki b dan bandingkan dengan [[c \\times q]]. Dengan [[b = 20]] cm, [[c = 25]] cm, dan [[q = 16]] cm, [[b^2 = 400]] dan [[c \\times q = 400]], sehingga jawabannya lolos. Gunakan pemeriksaan ini setiap kali jawaban Anda adalah sebuah kaki.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 4: Teorema Pythagoras",
            },
            {
              "kind": "p",
              "text": "Konfirmasikan bahwa [[a^2 + b^2 = c^2]]. Dengan [[a = 15]] cm, [[b = 20]] cm, dan [[c = 25]] cm, [[225 + 400 = 625 = 25^2]]. Pemeriksaan ini menguji seluruh segitiga sekaligus, bukan hanya satu rumus, sehingga merupakan yang terkuat di antara keempatnya.",
            },
          ],
          "h2": "Cara Memverifikasi Perhitungan Proyeksi Anda",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sebagian besar kesalahan di bawah ini berakar pada pelabelan, bukan aritmetika, jadi beri label ulang pada diagram sebelum menghitung ulang ketika sebuah jawaban tampak salah.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mencampuradukkan proyeksi p dengan proyeksi q: p terletak di samping A dan merupakan milik kaki a, sedangkan q terletak di samping B dan merupakan milik kaki b.",
                "Memasangkan kaki a dengan q, bukan p: kaki a menggunakan p, sehingga [[a = \\sqrt{c \\times p}]]. Menggunakan q akan mengembalikan kaki b, bukan kaki a.",
                "Memasangkan kaki b dengan p, bukan q: kaki b menggunakan q, sehingga [[b = \\sqrt{c \\times q}]]. Menggunakan p akan mengembalikan kaki a, bukan kaki b.",
                "Lupa akar kuadrat saat menghitung sebuah kaki: hasil kali cp adalah a kuadrat, bukan a. Dengan c = 25 dan p = 9, kakinya adalah 15 cm, bukan 225.",
                "Mencampur satuan pengukuran yang berbeda: ubah dulu satuannya. Mengalikan meter dengan sentimeter menghasilkan hasil kali yang tidak bermakna, jadi samakan kedua masukan dalam satu satuan.",
                "Menggunakan mode kalkulator yang salah: cocokkan mode dengan nilai yang Anda ketahui menggunakan tabel di dekat bagian atas panduan ini.",
                "Memperlakukan p atau q sebagai kaki tegak lurus: proyeksi terletak mendatar di sepanjang hipotenusa. Proyeksi adalah ruas-ruas hipotenusa, bukan sisi segitiga.",
                "Lupa bahwa c = p + q: kedua proyeksi harus berjumlah sama dengan hipotenusa.",
                "Menggunakan panjang yang tidak valid atau negatif: panjang selalu positif, sehingga masukan negatif menandakan kesalahan data, dan proyeksi nol tidak menggambarkan segitiga nyata.",
                "Membulatkan terlalu dini: pertahankan presisi penuh hingga langkah terakhir, lalu bulatkan sekali.",
                "Menerapkan rumus pada segitiga sembarang: teorema ini membutuhkan sudut siku-siku dan garis tingginya, sehingga tanpa keduanya tidak ada proyeksi p dan q dalam pengertian ini.",
                "Mencampuradukkan panjang sisi yang dikuadratkan dengan panjang sisi sebenarnya: 225 adalah a kuadrat, sedangkan 15 adalah a. Sebutkan mana yang Anda maksud sebelum menuliskan sebuah angka.",
              ],
            },
          ],
          "h2": "Kesalahan Umum Saat Menggunakan Kalkulator Proyeksi Segitiga Siku-Siku",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Enam sifat mengikuti langsung dari rumus proyeksi. Masing-masing juga berfungsi sebagai pemeriksaan akal sehat untuk jawaban baru.",
            },
            {
              "kind": "list",
              "items": [
                "Proyeksi yang sama menghasilkan kaki yang sama. Dengan [[p = q = 5]] dan [[c = 10]], kedua kaki sama dengan [[\\sqrt{50} \\approx 7.071]], dan segitiganya adalah segitiga siku-siku sama kaki.",
                "Proyeksi yang tidak sama menghasilkan kaki yang tidak sama: proyeksi yang lebih panjang merupakan milik kaki yang lebih panjang.",
                "Menukar p dan q menukar panjang kaki yang bersesuaian tetapi tidak mengubah total hipotenusa, karena [[p + q = c]] dalam kedua kasus.",
                "Mengalikan semua pengukuran dengan faktor positif yang sama akan mengalikan setiap hasil dengan faktor tersebut. Menggandakan p dan q menggandakan c, a, b, dan h.",
                "Proyeksi selalu positif dan selalu lebih kecil daripada c dalam segitiga siku-siku tak degenerat yang valid. Proyeksi yang sama dengan c akan membuat proyeksi lainnya menjadi nol.",
                "Kaki yang lebih panjang selalu melemparkan proyeksi yang lebih panjang. Membandingkan panjang kaki dengan panjang proyeksi adalah cara cepat untuk menemukan label yang tertukar.",
              ],
            },
            {
              "kind": "p",
              "text": "Diagram di bawah ini menunjukkan kedua kasus dengan hipotenusa yang dipertahankan pada 10. Proyeksi yang sama membaginya secara merata dan menghasilkan kaki yang sama, sedangkan proyeksi yang tidak sama menghasilkan kaki dengan panjang yang berbeda.",
            },
          ],
          "h2": "Kasus Khusus dan Sifat Penting Proyeksi",
          "image": {
            "alt": "Dua segitiga siku-siku dengan hipotenusa 10: satu dengan proyeksi p dan q yang sama sebesar 5 sehingga kakinya sama, dan satu dengan p sama dengan 2 dan q sama dengan 8 sehingga kakinya tidak sama",
            "caption": "Proyeksi yang sama menghasilkan kaki yang sama; proyeksi yang tidak sama menghasilkan kaki yang tidak sama, dengan hipotenusa yang sama sebesar 10.",
            "src": "projection-equal-vs-unequal.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Penggunaan yang paling langsung adalah pekerjaan rumah geometri dan pekerjaan kelas, di mana soal proyeksi menguji apakah siswa dapat memberi label pada diagram dan menerapkan [[a^2 = c \\times p]] alih-alih langsung menggunakan teorema Pythagoras karena kebiasaan. Latihan segitiga sebangun menggunakan susunan yang sama, karena buktinya sendiri adalah latihan mencocokkan sisi-sisi yang bersesuaian.",
            },
            {
              "kind": "p",
              "text": "Gambar teknik menggunakan teorema ini ketika segitiga siku-siku harus dibangun kembali dari pengukuran sebagian: jika sebuah gambar memberikan hipotenusa dan kaki garis tinggi, kaki yang hilang dapat diperoleh tanpa mengukur ulang bentuknya.",
            },
            {
              "kind": "p",
              "text": "Satu syarat membatasi setiap penerapan: geometri segitiga siku-siku yang diperlukan harus benar-benar ada. Teorema ini menjelaskan hubungan geometris yang tepat, bukan pengukuran lapangan yang bersifat perkiraan, sehingga tidak pernah menggantikan survei yang cermat atau pengukuran teknik profesional. Namun, dalam konteks yang tepat, teorema ini mengubah dua panjang yang diketahui menjadi panjang ketiga dengan satu perkalian dan satu akar kuadrat.",
            },
          ],
          "h2": "Penerapan Praktis Hubungan Proyeksi Segitiga Siku-Siku",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Coba kerjakan keenam soal di atas kertas sebelum membaca jawabannya. Tidak ada nilai yang mengulang contoh pengerjaan, dan soal terakhir menggabungkan beberapa gagasan dari panduan ini.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Mencari Proyeksi P",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki kaki [[a = 6]] cm dan hipotenusa [[c = 10]] cm. Carilah proyeksi p.",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Mencari Proyeksi Q",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki kaki [[b = 15]] cm dan hipotenusa [[c = 25]] cm. Carilah proyeksi q.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Mencari Kaki A",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki hipotenusa [[c = 17]] cm dan proyeksi [[p = 8]] cm. Carilah kaki a.",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Mencari Kaki B",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki hipotenusa [[c = 13]] cm dan proyeksi [[q = 9]] cm. Carilah kaki b.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Mencari Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki proyeksi [[p = 5]] cm dan [[q = 20]] cm. Carilah hipotenusa c.",
            },
            {
              "kind": "h3",
              "text": "Soal 6: Teorema Proyeksi Bertahap",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki proyeksi [[p = 4]] cm dan [[q = 9]] cm. Carilah hipotenusa, kedua kaki, dan garis tinggi, lalu periksa hasilnya dengan teorema Pythagoras.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Jawaban 1: [[p = 6^2 / 10 = 36 / 10 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 2: [[q = 15^2 / 25 = 225 / 25 = 9]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 3: [[a = \\sqrt{17 \\times 8} = \\sqrt{136} \\approx 11.662]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 4: [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 5: [[c = 5 + 20 = 25]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 6: [[c = 4 + 9 = 13]] cm, [[a = \\sqrt{13 \\times 4} = \\sqrt{52} \\approx 7.211]] cm, [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm, [[h = \\sqrt{4 \\times 9} = 6]] cm. Periksa: [[52 + 117 = 169 = 13^2]].",
            },
          ],
          "h2": "Soal Latihan Beserta Jawabannya",
        },
      },
      "tocHeading": "Isi Panduan",
      "tocItems": {
        "sec-intro": "Kalkulator Proyeksi Segitiga Siku-Siku",
        "sec-calculate": "Menghitung Proyeksi Segitiga Siku-Siku dan Ruas Hipotenusa",
        "sec-what-projections": "Apa Itu Proyeksi dalam Segitiga Siku-Siku?",
        "sec-sides-segments": "Memahami Sisi dan Ruas Garis Segitiga Siku-Siku",
        "sec-formulas": "Rumus Proyeksi Segitiga Siku-Siku Dijelaskan",
        "sec-choose-mode": "Cara Memilih Mode Kalkulator yang Benar",
        "sec-projection-p": "Cara Menghitung Proyeksi P dari Kaki A dan Hipotenusa",
        "sec-projection-q": "Cara Menghitung Proyeksi Q dari Kaki B dan Hipotenusa",
        "sec-leg-a": "Cara Mencari Kaki A dari Proyeksi P",
        "sec-leg-b": "Cara Mencari Kaki B dari Proyeksi Q",
        "sec-hypotenuse": "Cara Menghitung Hipotenusa Lengkap dari Proyeksi",
        "sec-how-to-use": "Cara Menggunakan Kalkulator Proyeksi Segitiga Siku-Siku",
        "sec-diagram": "Memahami Diagram Proyeksi Segitiga Siku-Siku",
        "sec-proof": "Mengapa Teorema Proyeksi Berlaku?",
        "sec-examples": "Contoh Pengerjaan Menggunakan Kelima Mode Kalkulator",
        "sec-all-measurements": "Cara Menghitung Semua Pengukuran Utama Segitiga Siku-Siku",
        "sec-pythagoras": "Hubungan antara Proyeksi dan Teorema Pythagoras",
        "sec-altitude": "Hubungan antara Proyeksi dan Garis Tinggi",
        "sec-verify": "Cara Memverifikasi Perhitungan Proyeksi Anda",
        "sec-mistakes": "Kesalahan Umum Saat Menggunakan Kalkulator Proyeksi Segitiga Siku-Siku",
        "sec-properties": "Kasus Khusus dan Sifat Penting Proyeksi",
        "sec-applications": "Penerapan Praktis Hubungan Proyeksi Segitiga Siku-Siku",
        "sec-practice": "Soal Latihan Beserta Jawabannya",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
      },
    },
};
