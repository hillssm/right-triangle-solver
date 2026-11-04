// altitudeFromSidesGuideTranslations.bid.ts: Right Triangle Altitude From Projections
// Guide (Page 28 of 45) translation.
export const B5_ID = {
  "id": {
      "tocHeading": "Navigasi Bagian",
      "tocItems": {
        "sec-intro": "Kalkulator Tinggi Segitiga Siku-Siku dari Sisi",
        "sec-calculate": "Menghitung Tinggi Segitiga Siku-Siku dari Panjang Sisi",
        "sec-altitude": "Apa Itu Tinggi Segitiga Siku-Siku?",
        "sec-sides": "Memahami Sisi-Sisi Segitiga Siku-Siku",
        "sec-formula": "Rumus Tinggi Segitiga Siku-Siku dari Sisi",
        "sec-use": "Cara Menggunakan Kalkulator Tinggi Segitiga Siku-Siku dari Sisi",
        "sec-manual": "Perhitungan Tinggi Langkah demi Langkah Tanpa Kalkulator",
        "sec-diagram": "Diagram Tinggi Segitiga Siku-Siku Dijelaskan",
        "sec-proof": "Mengapa Rumus Tinggi Ini Berlaku?",
        "sec-examples": "Contoh Soal Tinggi Segitiga Siku-Siku dari Sisi",
        "sec-two-sides": "Cara Mencari Tinggi Jika Hanya Dua Sisi Diketahui",
        "sec-verify": "Cara Memverifikasi Perhitungan Tinggi Anda",
        "sec-vs-projections": "Tinggi dari Sisi vs. Tinggi dari Proyeksi",
        "sec-area-rel": "Hubungan Antara Tinggi, Luas, dan Sisi Miring",
        "sec-properties": "Sifat-Sifat Khusus Tinggi ke Sisi Miring",
        "sec-mistakes": "Kesalahan Umum Saat Menghitung Tinggi Segitiga Siku-Siku",
        "sec-applications": "Kegunaan Praktis Perhitungan Tinggi Segitiga Siku-Siku",
        "sec-practice": "Soal Latihan Beserta Penyelesaian",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
        "sec-conclusion": "Kalkulator Segitiga Siku-Siku Terkait",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Tinggi Segitiga Siku-Siku dari Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Masukkan kedua kaki dan sisi miring untuk menemukan tinggi dalam hitungan detik.",
            },
            {
              "kind": "p",
              "text": "Kalkulator ini mencari tinggi segitiga siku-siku: jarak tegak lurus dari titik sudut siku-siku ke sisi miring. Masukkan kedua kaki, [[a]] dan [[b]], serta sisi miring [[c]], dan kalkulator mengembalikan [[h]] menggunakan [[h=\\frac{ab}{c}]]. Jawabannya keluar dalam satuan yang sama dengan masukan Anda.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, segitiga dengan kaki 3 cm dan 4 cm serta sisi miring 5 cm menghasilkan [[h=\\frac{3 \\times 4}{5}=2.4\\text{ cm}]]. Perhatikan bahwa 2.4 cm lebih pendek dari kedua kakinya, yang selalu berlaku untuk tinggi ke sisi miring.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Menghitung Tinggi Segitiga Siku-Siku dari Panjang Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator menerima tiga ukuran. Kaki a adalah sisi tegak lurus pertama, kaki b adalah sisi tegak lurus kedua, dan sisi miring c adalah sisi terpanjang, berhadapan dengan sudut siku-siku. Ketiganya harus menggunakan satuan yang sama, jadi ubah meter ke sentimeter atau kaki ke inci sebelum mengetik.",
            },
            {
              "kind": "p",
              "text": "Klik Calculate Altitude h untuk melihat hasil beserta substitusinya, dan gunakan Reset untuk mengosongkan kolom sebelum soal berikutnya. Kalkulator menjawab dengan rumus ringkas:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Jika Anda hanya tahu dua sisi, cari sisi ketiga dengan teorema Pythagoras terlebih dahulu, atau coba <a href=\"/right-triangle-altitude-calculator/\">kalkulator tinggi</a> umum untuk titik awal yang berbeda.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Apa Itu Tinggi Segitiga Siku-Siku?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tinggi adalah jarak tegak lurus dari sebuah titik sudut ke sisi yang berhadapan. Pada halaman ini, tinggi selalu turun dari titik sudut siku-siku lurus ke sisi miring, bertemu dengannya membentuk sudut siku-siku. Sisi miring menjadi alas karena ia satu-satunya sisi yang berhadapan dengan sudut siku-siku, dan ruas garis itu jatuh di dalam segitiga.",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki tiga tinggi, tetapi dua di antaranya sederhana: kaki [[a]] adalah tinggi ke alas [[b]], dan kaki [[b]] adalah tinggi ke alas [[a]], karena kaki-kakinya sudah saling tegak lurus. Yang menarik adalah tinggi ketiga, ke sisi miring, karena ia benar-benar ruas garis interior yang baru dan lebih pendek dari kedua kaki.",
            },
            {
              "kind": "p",
              "text": "Tinggi ketiga itulah yang dicari kalkulator ini, dan inilah yang biasanya dimaksud buku teks ketika menanyakan tinggi segitiga siku-siku.",
            },
          ],
        },
        "sec-sides": {
          "h2": "Memahami Sisi-Sisi Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Label yang benar membuat rumus bekerja. Kaki [[a]] dan [[b]] adalah dua sisi tegak lurus yang bertemu di sudut siku-siku. Sisi miring [[c]] adalah sisi terpanjang, berhadapan dengan sudut siku-siku. Tinggi [[h]] sama sekali bukan sisi, melainkan garis tegak lurus yang turun dari titik sudut siku-siku ke sisi miring.",
            },
            {
              "kind": "p",
              "text": "Selalu kenali sisi miring terlebih dahulu: ia adalah yang terpanjang dari ketiga panjang Anda. Pada segitiga 3-4-5, 5 harus menjadi [[c]], dan pemeriksaan cepat [[3^2+4^2=5^2]] mengonfirmasi pelabelannya. Melabeli 5 sebagai kaki akan membagi dengan sisi yang salah dan merusak jawabannya.",
            },
          ],
          "table": {
            "headers": [
              "Variabel",
              "Definisi",
              "Peran dalam perhitungan",
            ],
            "rows": [
              [
                "a",
                "Kaki tegak lurus pertama",
                "Dikalikan dengan b pada pembilang",
              ],
              [
                "b",
                "Kaki tegak lurus kedua",
                "Dikalikan dengan a pada pembilang",
              ],
              [
                "c",
                "Sisi miring, sisi terpanjang",
                "Membagi ab pada penyebut",
              ],
              [
                "h",
                "Tinggi ke sisi miring",
                "Hasil dari rumus",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Rumus Tinggi Segitiga Siku-Siku dari Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Rumusnya pendek dan mudah dihafal:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Kaki-kaki dikalikan karena hasil kalinya berkaitan dengan luas: luas sama dengan setengah dari [[ab]], sehingga [[ab]] adalah dua kali luas. Membagi dengan sisi miring kemudian mengisolasi [[h]], karena luas yang sama juga sama dengan setengah dari [[ch]]. Hasilnya adalah panjang biasa, itulah sebabnya ketiga masukan harus berbagi satu satuan.",
            },
            {
              "kind": "p",
              "text": "Coba segitiga 6-8-10: [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Secara geometris, 4.8 cm adalah jarak terpendek dari titik sudut siku-siku ke sisi miring. (Bukti lengkapnya ada di bagian pembuktian di bawah.)",
            },
            {
              "kind": "p",
              "text": "Kebiasaan yang berguna adalah memeriksa satuan sebelum substitusi. Jika [[a]] adalah 60 mm, [[b]] adalah 8 cm, dan [[c]] adalah 100 mm, ubah dulu ke satu satuan: [[a=6\\text{ cm}]], [[b=8\\text{ cm}]], [[c=10\\text{ cm}]], yang merupakan segitiga 6-8-10 yang sama dan menghasilkan [[4.8\\text{ cm}]] yang sama. Rumus tidak pernah memperbaiki satuan campuran untuk Anda, jadi satu pemeriksaan ini mencegah kesalahan yang paling memalukan.",
            },
          ],
        },
        "sec-use": {
          "h2": "Cara Menggunakan Kalkulator Tinggi Segitiga Siku-Siku dari Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Ikuti delapan langkah ini untuk hasil yang bersih setiap saat.",
            },
            {
              "kind": "steps",
              "steps": [
                "Temukan sudut siku-siku, sudut tempat dua sisi bertemu tegak lurus, sering ditandai dengan persegi kecil. Tanpa sudut siku-siku yang terkonfirmasi, rumus ini tidak berlaku.",
                "Temukan dua kaki tegak lurus yang membentuk sudut itu; sebut saja a dan b dalam urutan apa pun, karena rumus memperlakukannya secara simetris.",
                "Kenali sisi miring: sisi yang berhadapan dengan sudut siku-siku dan yang terpanjang dari ketiganya. Pastikan ia lebih panjang dari kedua kaki.",
                "Ubah ketiga ukuran ke satuan yang sama sebelum mengetik apa pun. Satuan campuran adalah kesalahan masukan yang paling umum.",
                "Masukkan a, b, dan c ke kolom yang sesuai.",
                "Klik tombol Calculate Altitude h untuk mengalikan kaki-kaki, membagi dengan sisi miring, dan menampilkan tinggi.",
                "Baca hasilnya dan periksa bahwa angka yang disubstitusi sesuai dengan yang ingin Anda masukkan.",
                "Gunakan Reset untuk mengosongkan masukan sebelum soal berikutnya, agar nilai lama tidak merusak jawaban baru.",
              ],
            },
            {
              "kind": "p",
              "text": "Sebelum mempercayai jawaban, jalankan pemeriksaan Pythagoras: [[a^2+b^2]] harus sama dengan [[c^2]]. Pembulatan pengukuran kecil tidak masalah, tetapi selisih besar berarti sisi-sisinya tidak membentuk segitiga siku-siku.",
            },
          ],
        },
        "sec-manual": {
          "h2": "Perhitungan Tinggi Langkah demi Langkah Tanpa Kalkulator",
          "blocks": [
            {
              "kind": "p",
              "text": "Anda dapat menemukan tinggi dengan tangan dalam lima langkah singkat. Ambil [[a=9\\text{ cm}]], [[b=12\\text{ cm}]], [[c=15\\text{ cm}]], dan pertama-tama pastikan segitiganya valid: [[9^2+12^2=81+144=225=15^2]].",
            },
            {
              "kind": "p",
              "text": "Langkah 1, tulis rumusnya: [[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Langkah 2, substitusi: [[[h=\\frac{9 \\times 12}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Langkah 3, kalikan kaki-kakinya: [[9 \\times 12=108]], sehingga [[[h=\\frac{108}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Langkah 4, bagi: [[108 \\div 15=7.2]], sehingga [[h=7.2\\text{ cm}]]. Langkah 5, verifikasi dengan luas. Dari kaki-kakinya, [[A=\\frac{9 \\times 12}{2}=54\\text{ cm}^2]]; dari sisi miring dan tinggi, [[A=\\frac{15 \\times 7.2}{2}=54\\text{ cm}^2]].",
            },
            {
              "kind": "p",
              "text": "Kedua luas cocok karena menggambarkan segitiga yang sama. Kaki-kaki memberi satu pasangan alas-tinggi dan sisi miring memberi pasangan lain, tetapi daerah yang dilingkupi identik. Luas yang cocok mengonfirmasi tingginya.",
            },
            {
              "kind": "p",
              "text": "Mengapa pemeriksaan luas bekerja sangat baik? Karena rumus tinggi itu sendiri berasal dari menyamakan kedua ungkapan luas, verifikasi melalui luas menutup lingkaran: kesalahan hitung apa pun dalam perkalian atau pembagian akan membuat kedua luas tidak cocok. Ketika cocok, penggunaan rumus maupun hitungannya terkonfirmasi sekaligus.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagram Tinggi Segitiga Siku-Siku Dijelaskan",
          "blocks": [
            {
              "kind": "p",
              "text": "Beri label segitiga ABC dengan sudut siku-siku di C. Maka AC adalah kaki [[a]], BC adalah kaki [[b]], dan AB adalah sisi miring [[c]]. Titik D terletak pada AB, dan ruas garis CD bertemu AB membentuk sudut siku-siku; CD adalah tinggi [[h]]. Penanda persegi kecil di C dan D menunjukkan kedua sudut siku-siku.",
            },
            {
              "kind": "p",
              "text": "Tinggi CD membagi segitiga besar menjadi dua segitiga siku-siku yang lebih kecil, ACD dan BCD, masing-masing dengan sudut siku-siku di D. Keduanya sebangun dengan segitiga asal ABC dan satu sama lain, fakta yang diandalkan bagian pembuktian dan proyeksi.",
            },
            {
              "kind": "p",
              "text": "Saat menggambar versi Anda sendiri, mulailah dengan sudut siku-siku di C, gambar kaki-kakinya, lalu hubungkan ujung-ujung bebasnya untuk sisi miring. Turunkan tingginya terakhir, pastikan ia bertemu sisi miring secara tegak lurus. Pelabelan berurutan a, b, c, h membuat setiap perhitungan berikutnya teratur.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Segitiga ABC dengan sudut siku-siku di C, tinggi CD ditarik ke sisi miring AB; AC sama dengan a, BC sama dengan b, AB sama dengan c, CD sama dengan h",
            "caption": "Tinggi CD turun dari sudut siku-siku C ke sisi miring AB; h sama dengan (a x b) / c.",
          },
        },
        "sec-proof": {
          "h2": "Mengapa Rumus Tinggi Ini Berlaku?",
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus ini mengikuti luas segitiga. Luas sama dengan setengah alas kali tinggi, dan segitiga siku-siku menawarkan dua pasangan alas-tinggi yang mudah. Dengan kaki sebagai alas dan tinggi:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{a \\times b}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dengan sisi miring sebagai alas dan tinggi sebagai tinggi:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{c \\times h}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Kedua ungkapan menggambarkan segitiga yang sama, jadi samakan keduanya:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Kalikan dengan 2, lalu bagi dengan [[c]]:",
            },
            {
              "kind": "p",
              "text": "[[[ab=ch]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Satu segitiga dapat diukur dengan pasangan alas-tinggi yang berbeda sementara luasnya tetap, sehingga menyamakan kedua ungkapan sah dan aljabar mengisolasi [[h]]. Diagram menunjukkan segitiga yang sama dua kali, sekali dengan alas [[a]] dan tinggi [[b]], sekali dengan alas [[c]] dan tinggi [[h]].",
            },
            {
              "kind": "p",
              "text": "Pembuktian ini juga menjelaskan mengapa tinggi selalu lebih pendek dari kaki-kakinya. Karena [[c]] adalah sisi terpanjang, membagi [[ab]] dengan yang terbesar dari ketiga panjang pasti menghasilkan nilai yang lebih kecil dari kedua kaki saja. Setiap rumus berikutnya di halaman ini, dari proyeksi hingga segitiga sebangun, adalah variasi dari satu ide luas ini.",
            },
          ],
          "image": {
            "src": "altitude-two-base-height.svg",
            "alt": "Segitiga siku-siku yang sama digambar dua kali: pertama dengan alas a dan tinggi b, kemudian dengan alas c dan tinggi h",
            "caption": "Segitiga yang sama, dua pasangan alas-tinggi: luas sama dengan ab/2 dan ch/2, sehingga h sama dengan ab/c.",
          },
        },
        "sec-examples": {
          "h2": "Contoh Soal Tinggi Segitiga Siku-Siku dari Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Tujuh contoh di bawah bergerak dari tripel bilangan bulat klasik ke desimal, kaki sama, dan satuan campuran. Masing-masing mengikuti irama yang sama: nyatakan yang diketahui, substitusikan ke rumus, sederhanakan, dan akhiri dengan satuan. Membacanya berurutan membangun kebiasaan memeriksa satuan dan kewajaran sebelum mempercayai jawaban apa pun.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Segitiga 3-4-5 Klasik",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tingginya adalah [[2.4\\text{ cm}]]. Contoh acuan ini layak dihafal, karena 3-4-5 adalah tripel Pythagoras yang paling umum dan 2.4 adalah desimal yang rapi.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Segitiga 5-12-13",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Tinggi pastinya adalah [[60/13]] meter, sekitar 4.615 m. Simpan pecahannya saat presisi penting, karena pembulatan dini membawa kesalahan ke pekerjaan lanjutan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Segitiga 8-15-17",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{8 \\times 15}{17}=\\frac{120}{17}\\approx 7.059\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tingginya sekitar [[7.059\\text{ cm}]]. Menukar kaki menjadi 15 dan 8 memberi hasil kali yang identik, mengonfirmasi rumus memperlakukan kaki secara simetris.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Kaki Sama dan Segitiga 45-45-90",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a=10\\text{ cm}]], [[b=10\\text{ cm}]], [[c=10\\sqrt{2}\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{10 \\times 10}{10\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7.071\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Kaki yang sama membuat segitiga 45-45-90, dan tingginya membaginya menjadi dua bagian yang kongruen. Bentuk eksak [[5\\sqrt{2}]] cm lebih baik dari desimal dalam pekerjaan teoretis.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a=1.5\\text{ m}]], [[b=2\\text{ m}]], [[c=2.5\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{1.5 \\times 2}{2.5}=\\frac{3}{2.5}=1.2\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Tingginya adalah [[1.2\\text{ m}]]. Desimal tidak butuh perlakuan khusus: kalikan dan bagi seperti biasa, dengan satuan yang sama pada jawabannya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Satuan Campuran yang Harus Disamakan Dulu",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a=30\\text{ cm}]], [[b=0.4\\text{ m}]], [[c=0.5\\text{ m}]], ubah dulu ke sentimeter: [[a=30\\text{ cm}]], [[b=40\\text{ cm}]], [[c=50\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{30 \\times 40}{50}=\\frac{1200}{50}=24\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Mengubah dulu memberi [[24\\text{ cm}]] yang bersih. Meter yang tidak dikonversi akan membesarkan jawaban 100 kali lipat.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Segitiga 20-21-29 yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a=20\\text{ ft}]], [[b=21\\text{ ft}]], [[c=29\\text{ ft}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{20 \\times 21}{29}=\\frac{420}{29}\\approx 14.483\\text{ ft}]]]",
            },
            {
              "kind": "p",
              "text": "Tingginya sekitar [[14.483\\text{ ft}]], jauh di bawah kaki terpendek 20 ft, seperti halnya tinggi ke sisi miring selalu.",
            },
          ],
          "image": {
            "src": "altitude-345.svg",
            "alt": "Segitiga siku-siku dengan kaki 3 dan 4, sisi miring 5, dan tinggi 2.4 yang digambar ke sisi miring",
            "caption": "Segitiga 3-4-5 digambar sesuai skala: tinggi h sama dengan (3 x 4) / 5 = 2.4.",
          },
        },
        "sec-two-sides": {
          "h2": "Cara Mencari Tinggi Jika Hanya Dua Sisi Diketahui",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator langsung meminta ketiga sisi, tetapi dua sisi cukup untuk menemukan sisi ketiga dengan teorema Pythagoras. Ada dua kasus, tergantung sisi mana yang Anda ketahui, dan keduanya berakhir dengan rumus tinggi yang sudah dikenal.",
            },
            {
              "kind": "p",
              "text": "Logikanya sama pada kedua kasus: teorema Pythagoras mengembalikan sisi yang hilang, dan rumus tinggi menyelesaikan sisanya. Kasus 1 menjumlahkan kaki di bawah akar kuadrat untuk mencari sisi miring, sedangkan Kasus 2 mengurangkan untuk menemukan kaki. Perhatikan bahwa Kasus 2 hanya berlaku bila sisi yang diketahui benar-benar sisi miring; jika [[a>c]], akar kuadratnya menjadi negatif dan segitiga semacam itu tidak ada.",
            },
            {
              "kind": "h3",
              "text": "Kasus 1: Kedua Kaki Diketahui",
            },
            {
              "kind": "p",
              "text": "Ambil [[a=7]] dan [[b=24]]. Cari dulu sisi miringnya: [[[c=\\sqrt{7^2+24^2}=\\sqrt{49+576}=\\sqrt{625}=25]]] Lalu tingginya mengikuti: [[[h=\\frac{7 \\times 24}{25}=\\frac{168}{25}=6.72]]]",
            },
            {
              "kind": "h3",
              "text": "Kasus 2: Satu Kaki dan Sisi Miring Diketahui",
            },
            {
              "kind": "p",
              "text": "Ambil [[a=8]] dan [[c=10]]. Temukan kaki yang hilang dengan teorema Pythagoras yang disusun ulang: [[[b=\\sqrt{c^2-a^2}=\\sqrt{100-64}=\\sqrt{36}=6]]] Maka tingginya adalah: [[[h=\\frac{8 \\times 6}{10}=\\frac{48}{10}=4.8]]]",
            },
            {
              "kind": "p",
              "text": "Anggap ini sebagai alternatif edukatif, karena kalkulator mengharapkan tiga ukuran. <a href=\"/right-triangle-side-calculator/\">Kalkulator sisi</a> khusus dapat menemukan panjang yang hilang sebelum Anda lanjut di sini.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cara Memverifikasi Perhitungan Tinggi Anda",
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga pemeriksaan independen mengonfirmasi jawaban tinggi. Ketiganya di bawah menggunakan segitiga 3-4-5, dengan tinggi 2.4. Gunakan setidaknya salah satunya setiap kali jawaban akan dipakai untuk pekerjaan lanjutan, karena tinggi yang salah diam-diam merusak semua yang dibangun di atasnya.",
            },
            {
              "kind": "h3",
              "text": "Metode 1: Perbandingan Luas",
            },
            {
              "kind": "p",
              "text": "Hitung luas dengan kedua cara dan minta hasilnya cocok. Dari kaki-kaki: [[[A=\\frac{3 \\times 4}{2}=6]]] Dari sisi miring dan tinggi: [[[A=\\frac{5 \\times 2.4}{2}=6]]] Luas yang cocok mengonfirmasi tingginya sendiri.",
            },
            {
              "kind": "h3",
              "text": "Metode 2: Proyeksi Sisi Miring",
            },
            {
              "kind": "p",
              "text": "Bagi sisi miring menjadi proyeksi kaki [[p=\\frac{a^2}{c}=\\frac{9}{5}=1.8]] dan [[q=\\frac{b^2}{c}=\\frac{16}{5}=3.2]]. Tingginya adalah rata-rata geometris keduanya: [[[h=\\sqrt{1.8 \\times 3.2}=\\sqrt{5.76}=2.4]]] Mendapatkan kembali 2.4 dari rumus yang berbeda adalah bukti kuat.",
            },
            {
              "kind": "h3",
              "text": "Metode 3: Pemeriksaan Pythagoras",
            },
            {
              "kind": "p",
              "text": "Pastikan sisi-sisinya membentuk segitiga siku-siku: [[[3^2+4^2=9+16=25=5^2]]] Ini memvalidasi panjang sisi, bukan tingginya. Jalankan dulu saat soal memberi Anda sisi-sisinya, lalu gunakan pemeriksaan luas atau proyeksi untuk memvalidasi tingginya.",
            },
          ],
        },
        "sec-vs-projections": {
          "h2": "Tinggi dari Sisi vs. Tinggi dari Proyeksi",
          "blocks": [
            {
              "kind": "p",
              "text": "Tinggi dapat dicari dengan dua cara. Metode sisi di halaman ini adalah [[h=\\frac{ab}{c}]], dimulai dari tiga panjang sisi. Metode proyeksi adalah [[h=\\sqrt{pq}]], dimulai dari dua ruas tempat tinggi membagi sisi miring. Keduanya menggambarkan ruas yang sama dan selalu cocok untuk segitiga yang sama; pilihannya tergantung ukuran mana yang Anda miliki. Untuk rute kedua, lihat halaman <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator tinggi dari proyeksi</a>.",
            },
          ],
          "table": {
            "headers": [
              "Metode",
              "Masukan yang dibutuhkan",
              "Rumus",
              "Kasus penggunaan terbaik",
            ],
            "rows": [
              [
                "Tinggi dari sisi",
                "Kaki a dan b, sisi miring c",
                "h = ab / c",
                "Panjang sisi diketahui; tidak perlu akar kuadrat",
              ],
              [
                "Tinggi dari proyeksi",
                "Ruas sisi miring p dan q",
                "h = akar kuadrat dari (p kali q)",
                "Kaki tinggi membagi sisi miring menjadi bagian-bagian yang diketahui",
              ],
            ],
          },
          "image": {
            "src": "altitude-projections-similar.svg",
            "alt": "Segitiga siku-siku dengan tinggi h yang menunjukkan proyeksi p dan q serta dua segitiga sebangun yang lebih kecil",
            "caption": "Tinggi membagi sisi miring menjadi p dan q; rumus sisi dan rumus proyeksi memberi h yang sama.",
          },
        },
        "sec-area-rel": {
          "h2": "Hubungan Antara Tinggi, Luas, dan Sisi Miring",
          "blocks": [
            {
              "kind": "p",
              "text": "Tinggi, luas, dan sisi miring terhubung melalui dua ungkapan untuk satu luas. Dari kaki-kaki: [[[A=\\frac{ab}{2}]]] Dari sisi miring dan tinggi: [[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Menyelesaikan ungkapan kedua untuk [[h]] memberi susunan ulang yang praktis: [[[h=\\frac{2A}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Ini menawarkan rute kedua saat luas diketahui langsung. Untuk segitiga dengan luas [[54\\text{ cm}^2]] dan sisi miring [[15\\text{ cm}]], [[[h=\\frac{2 \\times 54}{15}=\\frac{108}{15}=7.2\\text{ cm}]]], jawaban yang sama yang diberikan rumus sisi untuk segitiga 9-12-15. Jika Anda membutuhkan luasnya dulu, <a href=\"/right-triangle-area-calculator/\">kalkulator luas</a> menangani langkah itu, dan <a href=\"/right-triangle-area-from-altitude-calculator/\">kalkulator luas dari tinggi</a> membalik perhitungan setelah [[h]] diketahui.",
            },
            {
              "kind": "p",
              "text": "Rute ini bersinar saat soal menyatakan luas secara langsung, seperti banyak soal buku teks, atau saat luas dihitung di bagian sebelumnya. Alih-alih berburu kaki satu per satu, Anda membagi dua kali luas dengan sisi miring dan selesai dalam satu baris. Ini tinggi yang sama yang diberikan rumus sisi, dicapai dari titik awal yang berbeda.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Sifat-Sifat Khusus Tinggi ke Sisi Miring",
          "blocks": [
            {
              "kind": "p",
              "text": "Tinggi ke sisi miring selalu lebih pendek dari kedua kaki dan lebih pendek dari sisi miring itu sendiri, karena [[h=ab/c]] jatuh di bawah [[a]] setiap kali [[b<c]]. Kaki yang sama memberi segitiga 45-45-90 simetris di mana tinggi membagi dua sisi miring. Untuk sisi miring tetap, tinggi terbesar saat kaki-kakinya sama: dengan sisi miring 10, segitiga 45-45-90 memberi [[h=5]] sedangkan segitiga 6-8-10 hanya memberi 4.8.",
            },
            {
              "kind": "p",
              "text": "Tidak ada pembagian sisi miring yang sama yang mengalahkan maksimum itu, yaitu ketaksamaan [[h \\le \\frac{c}{2}]], dengan kesamaan hanya pada kasus 45-45-90. Penskalaan juga berperilaku sederhana: menggandakan setiap sisi menggandakan tinggi, sehingga 3-4-5 pada 2.4 menjadi 6-8-10 pada 4.8. Terakhir, tinggi membagi segitiga menjadi dua segitiga lebih kecil yang sebangun dengan aslinya, itulah sebabnya hubungan proyeksi dan luas semuanya cocok.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dua segitiga siku-siku berbagi sisi miring 10: segitiga 45-45-90 dengan tinggi 5 dan segitiga 6-8-10 dengan tinggi 4.8",
            "caption": "Sisi miring 10 yang sama: kaki yang sama memberi tinggi tertinggi, 5.",
          },
        },
        "sec-mistakes": {
          "h2": "Kesalahan Umum Saat Menghitung Tinggi Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Hindari sembilan kesalahan ini dan hampir setiap perhitungan tinggi berjalan lancar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tertukar antara sisi miring dan kaki. Perbaikan: pilih sisi terpanjang sebagai c terlebih dahulu; pada segitiga 3-4-5, 5 harus menjadi c.",
                "Mengalikan ketiga sisi. Menghitung abc tidak punya makna geometris di sini. Perbaikan: kalikan hanya kaki-kakinya, lalu bagi dengan sisi miring.",
                "Lupa membagi dengan c. Berhenti di ab hanya memberi dua kali luas, bukan panjang. Perbaikan: selalu akhiri dengan pembagian.",
                "Mencampur satuan. Memasukkan a dalam sentimeter dan c dalam meter merusak pembagian secara diam-diam. Perbaikan: ubah semuanya ke satu satuan dulu.",
                "Menggunakan sisi yang tidak membentuk segitiga siku-siku. Rumus mengasumsikan sudut siku-siku, jadi 2, 3, 4 menghasilkan omong kosong. Perbaikan: periksa dulu a^2 + b^2 = c^2.",
                "Tertukar antara tinggi dan salah satu kaki. Buku teks yang menanyakan tinggi biasanya maksudnya yang ke sisi miring. Perbaikan: pastikan tinggi mana yang diminta soal.",
                "Membulatkan nilai antara terlalu dini. Membulatkan 60/13 menjadi 4.6 di tengah perhitungan menyuntikkan kesalahan. Perbaikan: bulatkan hanya jawaban akhirnya.",
                "Menggunakan rumus luas secara keliru. Menulis Luas = c kali h tanpa setengah menggandakan jawaban. Perbaikan: gunakan Luas = ch/2 saat mencari h.",
                "Tertukar antara tinggi ke sisi miring dan tinggi relatif terhadap kaki. Ini ruas yang berbeda. Perbaikan: tinggi ke sisi miring adalah ruas interior yang lebih pendek, h = ab/c.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Kegunaan Praktis Perhitungan Tinggi Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Siswa menjumpai tinggi ini dalam PR geometri tentang luas, kesebangunan, dan rata-rata geometris, sementara guru menggunakannya untuk menghubungkan teorema Pythagoras dengan rumus luas dalam satu gambar, karena satu diagram memuat [[ab/2]] dan [[ch/2]]. Juru gambar dan desainer menggunakannya saat panel atau braket segitiga harus didimensikan dari tingginya, dan tata letak penguat segitiga kadang membutuhkan jarak silang terpendek antara sambungan dan batang.",
            },
            {
              "kind": "p",
              "text": "Surveyor yang bekerja dengan garis pandang segitiga siku-siku menggunakan hubungan yang sama untuk memeriksa jarak hitungan terhadap jarak ukur. Anggap ini sebagai model matematis dengan pengukuran ideal: pekerjaan teknik atau konstruksi nyata membutuhkan metode pengukuran yang sesuai, asumsi desain yang dinyatakan, dan standar profesional sebelum hasil rumus dipercaya di lapangan.",
            },
            {
              "kind": "p",
              "text": "Di kelas, tinggi juga berfungsi sebagai topik jembatan: ia mengikat teorema Pythagoras, rumus luas, dan segitiga sebangun dalam satu gambar. Satu diagram yang digambar baik dapat memuat seluruh pelajaran, itulah sebabnya konstruksi ini begitu sering muncul di buku teks.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Soal Latihan Beserta Penyelesaian",
          "blocks": [
            {
              "kind": "p",
              "text": "Coba setiap soal sendiri, lalu periksa jawaban yang dikerjakan di bawah.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki kaki 6 cm dan 8 cm serta sisi miring 10 cm. Cari tinggi ke sisi miring.",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Tripel Pythagoras",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki kaki 12 m dan 16 m serta sisi miring 20 m. Cari tinggi ke sisi miring.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Ukuran Desimal",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki kaki 4.5 in dan 6 in serta sisi miring 7.5 in. Cari tinggi ke sisi miring.",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Kaki Sama",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki dua kaki sama masing-masing 14 ft. Cari sisi miringnya lalu tinggi ke sisi miring.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Konversi Satuan",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi 2.4 m, 70 cm, dan 2.5 m. Samakan dulu satuannya, lalu cari tinggi ke sisi miring.",
            },
            {
              "kind": "h3",
              "text": "Kunci Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Pola 3-4-5 yang diskalakan memberi desimal yang bersih.",
            },
            {
              "kind": "p",
              "text": "2. [[12^2+16^2=144+256=400=20^2]] mengonfirmasi tripelnya, lalu [[h=\\frac{12 \\times 16}{20}=\\frac{192}{20}=9.6\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\frac{4.5 \\times 6}{7.5}=\\frac{27}{7.5}=3.6\\text{ in}]]. Desimal terbagi rapi saat tripelnya konsisten.",
            },
            {
              "kind": "p",
              "text": "4. [[c=\\sqrt{14^2+14^2}=14\\sqrt{2}\\text{ ft}]], lalu [[h=\\frac{14 \\times 14}{14\\sqrt{2}}=7\\sqrt{2}\\approx 9.899\\text{ ft}]], tepat setengah sisi miring seperti yang diharapkan untuk 45-45-90.",
            },
            {
              "kind": "p",
              "text": "5. Dalam sentimeter: [[a=240]], [[b=70]], [[c=250]], dan [[2.4^2+0.7^2=5.76+0.49=6.25=2.5^2]] cocok. Lalu [[h=\\frac{240 \\times 70}{250}=\\frac{16800}{250}=67.2\\text{ cm}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Kalkulator Segitiga Siku-Siku Terkait",
          "blocks": [
            {
              "kind": "p",
              "text": "Dengan rumus tinggi di tangan, pilih alat berikutnya berdasarkan yang Anda ketahui. Jika Anda tahu ruas sisi miring alih-alih sisi-sisinya, pergilah ke kalkulator proyeksi. Jika Anda tahu tingginya dan ingin luasnya, alat <a href=\"/right-triangle-area-from-hypotenuse-and-altitude-calculator/\">luas dari sisi miring dan tinggi</a> membalik perhitungan dari bagian luas. Lima kalkulator terkait di bawah mencakup setiap perhitungan tetangga. Mulailah dengan alat yang cocok dengan ukuran yang sudah Anda miliki, dan biarkan setiap hasil memeriksa yang berikutnya.",
            },
          ],
        },
      },
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Apa rumus tinggi dari tiga sisi?",
          "answer": "Rumusnya adalah [[h=\\frac{ab}{c}]], di mana [[a]] dan [[b]] adalah dua kaki tegak lurus dan [[c]] adalah sisi miring. Kalikan kaki-kakinya, lalu bagi dengan sisi miring. Hasilnya adalah panjang dalam satuan yang sama dengan sisi yang Anda masukkan.",
        },
        {
          "question": "Bagaimana cara mencari tinggi segitiga siku-siku?",
          "answer": "Kenali sudut siku-siku, beri label dua kaki [[a]] dan [[b]] serta sisi miring [[c]], pastikan semua satuan cocok. Lalu hitung [[h=\\frac{ab}{c}]]. Untuk segitiga 3-4-5 ini memberi [[h=\\frac{12}{5}=2.4]], ruas yang lebih pendek dari kedua kaki.",
        },
        {
          "question": "Mengapa sisi miring ada di penyebut?",
          "answer": "Ini berasal dari bukti luas. Luas sama dengan [[ab/2]] memakai kaki dan [[ch/2]] memakai sisi miring sebagai alas. Menyamakan keduanya memberi [[ab=ch]], dan menyelesaikan untuk [[h]] menempatkan [[c]] di penyebut. Semakin panjang sisi miring, semakin pendek tinggi untuk luas tertentu.",
        },
        {
          "question": "Bisakah saya menghitung tinggi hanya dengan dua sisi?",
          "answer": "Ya, dengan satu langkah tambahan. Jika Anda tahu kedua kaki, cari dulu sisi miring dengan [[c=\\sqrt{a^2+b^2}]]. Jika Anda tahu satu kaki dan sisi miring, cari kaki lainnya dengan [[b=\\sqrt{c^2-a^2}]]. Lalu gunakan [[h=\\frac{ab}{c}]] seperti biasa.",
        },
        {
          "question": "Apakah altitude sama dengan height?",
          "answer": "Tergantung tinggi mana yang dimaksud. Height biasanya berarti jarak tegak lurus ke alas yang dipilih, sehingga altitude ke sisi miring adalah height ketika sisi miring menjadi alasnya. Jika sebuah kaki dipilih sebagai alas, height-nya adalah kaki yang lain, ruas yang sama sekali berbeda.",
        },
        {
          "question": "Apakah tinggi selalu lebih pendek dari kaki-kakinya?",
          "answer": "Ya, tinggi ke sisi miring selalu lebih pendek dari kedua kaki segitiga yang sama. Ia adalah ruas terpendek dari titik sudut siku-siku ke sisi miring, sedangkan setiap kaki adalah jalur yang lebih panjang ke sisi yang sama. Ia juga lebih pendek dari sisi miring itu sendiri.",
        },
        {
          "question": "Bisakah saya memakai rumus ini untuk segitiga apa pun?",
          "answer": "Tidak, hanya untuk segitiga siku-siku. Turunannya bergantung pada kaki yang saling tegak lurus, yang memberi luas [[ab/2]]. Untuk segitiga lancip atau tumpul, cari tingginya dengan rumus luas umum atau trigonometri. Selalu pastikan dulu sudut siku-sikunya.",
        },
        {
          "question": "Bagaimana jika panjang sisi saya tidak memenuhi teorema Pythagoras?",
          "answer": "Maka sisi-sisi itu tidak membentuk segitiga siku-siku dan rumusnya tidak berlaku. Ukur ulang sisi-sisinya atau periksa lagi pelabelannya, karena sisi terpanjang harus menjadi sisi miring. Selisih pembulatan kecil tidak masalah, tetapi selisih besar berarti segitiganya tidak siku-siku.",
        },
        {
          "question": "Bagaimana cara mencari tinggi segitiga 3-4-5?",
          "answer": "Kalikan kaki-kakinya dan bagi dengan sisi miring: [[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]] (atau satuan apa pun yang dipakai sisi Anda). Segitiga 3-4-5 adalah contoh kerja klasik karena ketiga sisinya bilangan bulat.",
        },
        {
          "question": "Berapa tinggi segitiga 5-12-13?",
          "answer": "Tingginya adalah [[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615]], dalam satuan sisinya. Simpan pecahan eksak [[60/13]] saat Anda butuh presisi penuh, dan bulatkan ke 4.615 hanya untuk jawaban akhir yang dilaporkan.",
        },
        {
          "question": "Apa hubungan tinggi dengan luas?",
          "answer": "Luas dapat ditulis dua cara: [[A=\\frac{ab}{2}]] dan [[A=\\frac{ch}{2}]]. Menyusun ulang yang kedua memberi [[h=\\frac{2A}{c}]], sehingga mengetahui luas dan sisi miring adalah rute lain menuju tinggi yang sama. Kedua bentuk menggambarkan segitiga yang identik.",
        },
        {
          "question": "Apa bedanya tinggi dari sisi dan tinggi dari proyeksi?",
          "answer": "Tinggi dari sisi memakai [[h=\\frac{ab}{c}]] dengan tiga panjang sisi. Tinggi dari proyeksi memakai [[h=\\sqrt{pq}]] dengan dua ruas sisi miring. Keduanya mencari ruas yang sama; pilihannya tergantung ukuran mana yang Anda miliki.",
        },
      ],
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Pilih kalkulator yang cocok dengan ukuran yang sudah Anda miliki.",
      "relatedItems": [
        "Kalkulator Tinggi Segitiga Siku-Siku",
        "Kalkulator Tinggi Segitiga Siku-Siku dari Proyeksi",
        "Kalkulator Proyeksi Segitiga Siku-Siku",
        "Kalkulator Luas Segitiga Siku-Siku",
        "Kalkulator Luas Segitiga Siku-Siku dari Tinggi",
      ],
    },
};
