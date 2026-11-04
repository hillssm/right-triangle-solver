// altitudeGuideTranslations.bid.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B5_ID = {
  "id": {
      "tocHeading": "Navigasi Bagian",
      "tocItems": {
        "sec-intro": "Kalkulator Garis Tinggi Segitiga Siku-siku",
        "sec-calculate": "Menghitung Garis Tinggi Segitiga Siku-siku",
        "sec-what": "Apa Itu Garis Tinggi Segitiga Siku-siku?",
        "sec-diagram": "Penjelasan Diagram Garis Tinggi Segitiga Siku-siku",
        "sec-formulas": "Penjelasan Rumus Garis Tinggi Segitiga Siku-siku",
        "sec-how": "Cara Menggunakan Kalkulator Garis Tinggi Segitiga Siku-siku",
        "sec-method1": "Metode 1: Mencari Garis Tinggi Segitiga Siku-siku dari Panjang Sisi",
        "sec-method2": "Metode 2: Mencari Garis Tinggi dari Proyeksi Hipotenusa",
        "sec-two-sides": "Cara Mencari Garis Tinggi Jika Hanya Dua Sisi Diketahui",
        "sec-why": "Mengapa Rumus Garis Tinggi Segitiga Siku-siku Berhasil?",
        "sec-proof": "Bukti Teorema Garis Tinggi Menggunakan Segitiga Sebangun",
        "sec-examples": "Contoh Soal Garis Tinggi Segitiga Siku-siku yang Dikerjakan",
        "sec-area": "Hubungan antara Garis Tinggi dan Luas Segitiga",
        "sec-geomean": "Rata-rata Geometris dan Proyeksi Hipotenusa",
        "sec-properties": "Sifat-sifat Penting Garis Tinggi Segitiga Siku-siku",
        "sec-verify": "Cara Memeriksa Apakah Jawaban Garis Tinggi Anda Benar",
        "sec-mistakes": "Kesalahan Umum saat Menghitung Garis Tinggi",
        "sec-applications": "Penerapan Garis Tinggi Segitiga Siku-siku di Dunia Nyata",
        "sec-practice": "Soal Latihan Beserta Jawaban",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
        "sec-conclusion": "Kalkulator Segitiga Siku-siku Terkait",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Garis Tinggi Segitiga Siku-siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Panduan ini menunjukkan dua cara mencari garis tinggi segitiga siku-siku, lengkap dengan contoh yang dikerjakan untuk setiap cara.",
            },
            {
              "kind": "p",
              "text": "Garis tinggi adalah ruas garis tegak lurus yang ditarik dari titik sudut siku-siku ke hipotenusa. Kalkulator Garis Tinggi Segitiga Siku-siku menemukan panjang ini menggunakan tiga panjang sisi atau dua proyeksi hipotenusa. Pilih mode yang sesuai dengan data yang Anda ketahui, masukkan ukuran Anda, dan kalkulator akan menampilkan garis tinggi dalam satuan yang sama.",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Rumus pertama menggunakan dua sisi siku-siku [[a]] dan [[b]] bersama hipotenusa [[c]]. Rumus kedua menggunakan proyeksi [[p]] dan [[q]], yaitu dua ruas garis yang dipotong garis tinggi pada hipotenusa. Kedua rumus menemukan garis tinggi tegak lurus yang sama; keduanya hanya berangkat dari ukuran yang berbeda.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Menghitung Garis Tinggi Segitiga Siku-siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator di samping panduan ini menawarkan dua mode, dan memilih yang tepat adalah satu-satunya persiapan yang Anda butuhkan. Setiap mode meminta ukuran yang berbeda dan menerapkan rumus yang berbeda, jadi bacalah tabel terlebih dahulu dan cocokkan mode dengan nilai yang Anda ketahui.",
            },
            {
              "kind": "p",
              "text": "Mode 1, Altitude to Hypotenuse, menerima Sisi a, Sisi b, dan Hipotenusa c. Mode ini menghitung garis tinggi dengan [[h=\\frac{ab}{c}]], yang membagi hasil kali kedua sisi siku-siku dengan hipotenusa. Mode 2, Altitude Squared, menerima Proyeksi p dan Proyeksi q, yaitu dua potongan hipotenusa, dan menerapkan [[h=\\sqrt{pq}]], rata-rata geometris dari kedua proyeksi.",
            },
            {
              "kind": "p",
              "text": "Semua ukuran harus memakai satuan yang kompatibel: sentimeter dengan sentimeter, meter dengan meter. Hasilnya tampil dalam satuan panjang yang sama dengan masukan Anda. Gunakan tombol Reset untuk mengosongkan kolom sebelum memulai soal baru.",
            },
          ],
          "table": {
            "headers": [
              "Ukuran yang Diketahui",
              "Mode Kalkulator",
              "Rumus",
            ],
            "rows": [
              [
                "Sisi siku-siku a, b dan hipotenusa c",
                "Altitude to Hypotenuse",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "Proyeksi hipotenusa p dan q",
                "Altitude Squared",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Apa Itu Garis Tinggi Segitiga Siku-siku?",
          "blocks": [
            {
              "kind": "p",
              "text": "Garis tinggi adalah ruas garis tegak lurus yang ditarik dari salah satu titik sudut segitiga ke garis yang memuat sisi di hadapannya. Pada segitiga siku-siku, garis tinggi yang paling berguna berawal di titik sudut siku-siku dan bertemu hipotenusa membentuk sudut siku-siku. Titik tempat garis tinggi mendarat disebut kaki garis tinggi, dan hipotenusa adalah alas alami untuk pasangan alas-tinggi ini.",
            },
            {
              "kind": "p",
              "text": "Setiap segitiga memiliki tiga garis tinggi, dan segitiga siku-siku tidak terkecuali. Dua di antaranya berimpit dengan sisi siku-siku: jika Anda mengambil satu sisi siku-siku sebagai alas, sisi siku-siku lainnya sudah tegak lurus terhadapnya, sehingga berfungsi sebagai garis tinggi. Garis tinggi ketiga berjalan dari titik sudut siku-siku ke hipotenusa dan terletak di dalam segitiga. Halaman ini menghitung garis tinggi ketiga tersebut, satu-satunya garis tinggi yang membutuhkan perhitungan nyata.",
            },
            {
              "kind": "p",
              "text": "Karena bertemu hipotenusa membentuk sudut siku-siku, garis tinggi ini membagi segitiga semula menjadi dua segitiga siku-siku yang lebih kecil. Kedua segitiga itu sebangun satu sama lain dan sebangun dengan segitiga semula, sehingga garis tinggi menciptakan hubungan rata-rata geometris yang rapi yang dibahas lebih lanjut dalam panduan ini.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Penjelasan Diagram Garis Tinggi Segitiga Siku-siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram di bawah menunjukkan segitiga ABC dengan sudut siku-siku di C. Sisi AC dan BC bertemu di sudut siku-siku, sehingga AB berhadapan dengan sudut siku-siku dan pasti merupakan hipotenusa. Garis tinggi CD berjalan dari C ke sisi AB, bertemu di D dengan penanda sudut siku-siku yang menunjukkan hubungan tegak lurus.",
            },
            {
              "kind": "p",
              "text": "Setiap sisi memiliki label baku: AC = a, BC = b, AB = c, dan garis tinggi CD = h. Garis tinggi membagi hipotenusa menjadi dua proyeksi, AD = p dan DB = q, sehingga c = p + q. Perhatikan bahwa p terletak di samping sisi a dan q di samping sisi b, pola yang penting untuk bukti kesebangunan nanti.",
            },
            {
              "kind": "p",
              "text": "Membaca diagram dari kiri ke kanan menunjukkan keseluruhan cerita: sebuah segitiga siku-siku, garis tinggi yang turun ke hipotenusa, dua ruas proyeksi, dan segitiga semula yang terbagi menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD, yang berbagi garis tinggi sebagai sisi bersama.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Segitiga ABC dengan sudut siku-siku di C; garis tinggi CD ditarik ke hipotenusa AB, dengan AC sama dengan a, BC sama dengan b, AB sama dengan c, CD sama dengan h, AD sama dengan p, DB sama dengan q",
            "caption": "Garis tinggi CD turun dari sudut siku-siku C tegak lurus ke hipotenusa AB, membaginya menjadi proyeksi p dan q.",
          },
        },
        "sec-formulas": {
          "h2": "Penjelasan Rumus Garis Tinggi Segitiga Siku-siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat rumus menemukan garis tinggi yang sama, dan masing-masing berangkat dari ukuran yang berbeda. Kalkulator langsung menerapkan dua rumus pertama; dua rumus lainnya adalah metode manual yang dapat Anda gunakan ketika ukuran Anda tidak lengkap atau ketika Anda ingin memverifikasi hasil dengan cara lain.",
            },
            {
              "kind": "p",
              "text": "Rumus sisi [[h=\\frac{ab}{c}]] membutuhkan kedua sisi siku-siku dan hipotenusa. Rumus proyeksi [[h=\\sqrt{pq}]] hanya membutuhkan dua ruas hipotenusa, dan rumus ini setara dengan teorema garis tinggi [[h^2=pq]]. Ketika Anda mengetahui sisi siku-siku tetapi tidak mengetahui hipotenusa, substitusikan [[c=\\sqrt{a^2+b^2}]] untuk mendapatkan [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]]. Ketika Anda mengetahui luas A dan hipotenusa c, gunakan [[h=\\frac{2A}{c}]], yang berasal langsung dari rumus luas dengan hipotenusa sebagai alas.",
            },
            {
              "kind": "p",
              "text": "Jangan anggap keempatnya sebagai empat mode kalkulator. Kalkulator hanya memiliki tepat dua mode: Altitude to Hypotenuse dan Altitude Squared. Rumus-rumus lainnya adalah pembantu untuk perhitungan manual, untuk menurunkan ukuran yang hilang sebelum memasukkannya ke kalkulator, atau untuk memeriksa ulang jawaban yang dihasilkan kalkulator.",
            },
          ],
          "table": {
            "headers": [
              "Rumus",
              "Masukan yang dibutuhkan",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "Sisi siku-siku a, b dan hipotenusa c",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "Proyeksi p dan q",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "Kedua sisi siku-siku a, b",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "Luas A dan hipotenusa c",
              ],
            ],
          },
        },
        "sec-how": {
          "h2": "Cara Menggunakan Kalkulator Garis Tinggi Segitiga Siku-siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Ikuti langkah-langkah ini secara berurutan dan kalkulator akan mengerjakan sisanya. Seluruh proses memakan waktu kurang dari satu menit setelah Anda tahu ukuran apa yang Anda miliki.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenali ukuran yang Anda ketahui: apakah itu tiga panjang sisi, atau dua proyeksi hipotenusa?",
                "Pilih mode kalkulator yang sesuai: Altitude to Hypotenuse untuk tiga sisi, Altitude Squared untuk dua proyeksi.",
                "Masukkan ukuran positif dalam satuan yang kompatibel, konversikan terlebih dahulu jika satuannya tercampur.",
                "Periksa bahwa ukuran tersebut membentuk segitiga siku-siku yang valid, dengan sisi siku-siku memenuhi teorema Pythagoras.",
                "Klik tombol Calculate untuk menjalankan mode yang dipilih.",
                "Baca hasil garis tinggi dalam satuan yang sama dengan masukan Anda.",
                "Verifikasi jawaban dengan salah satu metode pemeriksaan dalam panduan ini jika soalnya penting.",
                "Klik Reset sebelum memasukkan soal baru agar nilai lama tidak tercampur dengan nilai baru.",
              ],
            },
            {
              "kind": "p",
              "text": "Pemilihan mode adalah langkah yang paling penting. Jika Anda mengetahui sisi a dan b plus hipotenusa c, mode Altitude to Hypotenuse cocok. Jika Anda hanya tahu bagaimana hipotenusa terbagi menjadi p dan q, pilih Altitude Squared. Mode yang salah akan menolak masukan yang valid, jadi mencocokkan mode dengan ukuran akan menghemat waktu Anda.",
            },
          ],
        },
        "sec-method1": {
          "h2": "Metode 1: Mencari Garis Tinggi Segitiga Siku-siku dari Panjang Sisi",
          "blocks": [
            {
              "kind": "p",
              "text": "Ketika ketiga panjang sisi diketahui, garis tinggi diperoleh dari satu pembagian. Rumus [[h=\\frac{ab}{c}]] mengalikan kedua sisi siku-siku dan membaginya dengan hipotenusa, dan setiap simbol memiliki arti tetap: a dan b adalah sisi siku-siku yang tegak lurus, c adalah hipotenusa, dan h adalah garis tinggi ke hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Segitiga 3-4-5 klasik menunjukkan setiap langkah. Diketahui a = 3 cm, b = 4 cm, dan c = 5 cm, substitusikan ke dalam rumus:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Kalikan sisi siku-siku terlebih dahulu: 3 × 4 = 12. Lalu bagi dengan hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Hasilnya adalah h = 2,4 cm. Perhatikan bahwa 2,4 lebih pendek dari kedua sisi siku-siku, yang selalu terjadi untuk garis tinggi ke hipotenusa, dan bagian bukti nanti menjelaskan mengapa pembagian dengan c secara geometris wajar.",
            },
            {
              "kind": "p",
              "text": "Gunakan metode ini kapan pun ketiga sisi diketahui atau dapat diukur langsung. Untuk alat khusus yang hanya menangani masukan sisi, coba <a href=\"/right-triangle-altitude-from-sides-calculator/\">kalkulator garis tinggi dari sisi</a>, yang membahas rumus yang sama lebih mendalam.",
            },
          ],
          "image": {
            "src": "altitude-sides-345.svg",
            "alt": "Segitiga siku-siku dengan sisi siku-siku 3 dan 4, hipotenusa 5, garis tinggi 2,4 ditarik tegak lurus ke hipotenusa",
            "caption": "Segitiga 3-4-5: garis tinggi h sama dengan (3 x 4) / 5 = 2,4.",
          },
        },
        "sec-method2": {
          "h2": "Metode 2: Mencari Garis Tinggi dari Proyeksi Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Ketika hipotenusa sudah terbagi menjadi dua proyeksinya, teorema garis tinggi memberikan jalan pintas. Teorema tersebut menyatakan [[h^2=pq]], sehingga garis tinggi adalah akar kuadrat dari hasil kali kedua proyeksi:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Ambil p = 9 cm dan q = 16 cm. Kuadratkan hubungan tersebut terlebih dahulu:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Kalikan: 9 × 16 = 144, sehingga [[h^2=144]]. Sekarang ambil akar kuadratnya:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "Hasilnya adalah h = 12 cm. Ini berarti garis tinggi adalah rata-rata geometris dari kedua proyeksi: ukurannya berada di antara keduanya, lebih dekat ke rata-ratanya daripada ke salah satu ujung, makna yang dijelaskan lebih lengkap di bagian rata-rata geometris.",
            },
            {
              "kind": "p",
              "text": "Ingat bahwa p dan q adalah ruas-ruas hipotenusa, bukan sisi siku-siku segitiga. Kesalahan umum adalah memasukkan panjang sisi sebagai proyeksi, yang menghasilkan jawaban salah. Untuk alat yang dibangun khusus dengan metode ini, lihat <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator garis tinggi dari proyeksi</a>.",
            },
          ],
          "image": {
            "src": "altitude-projections.svg",
            "alt": "Segitiga siku-siku dengan garis tinggi h membagi hipotenusa menjadi proyeksi p = 9 dan q = 16, garis tinggi h = 12",
            "caption": "Garis tinggi adalah rata-rata geometris dari proyeksi: sqrt(9 x 16) = 12.",
          },
        },
        "sec-two-sides": {
          "h2": "Cara Mencari Garis Tinggi Jika Hanya Dua Sisi Diketahui",
          "blocks": [
            {
              "kind": "p",
              "text": "Terkadang sisi ketiga hilang, tetapi teorema Pythagoras memulihkannya dalam satu langkah. Metode pemulihannya bergantung pada dua sisi mana yang Anda ketahui, jadi tangani setiap kasus secara terpisah.",
            },
            {
              "kind": "h3",
              "text": "Kasus 1: Kedua Sisi Siku-siku Diketahui",
            },
            {
              "kind": "p",
              "text": "Diketahui a = 6 cm dan b = 8 cm, cari hipotenusa terlebih dahulu dengan [[c=\\sqrt{a^2+b^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang ketiga sisi diketahui, jadi terapkan rumus sisi: h = (6 × 8) / 10 = 48 / 10 = 4,8 cm. Hipotenusa yang hilang adalah satu-satunya hambatan, dan garis tingginya langsung menyusul.",
            },
            {
              "kind": "h3",
              "text": "Kasus 2: Satu Sisi Siku-siku dan Hipotenusa Diketahui",
            },
            {
              "kind": "p",
              "text": "Diketahui a = 5 cm dan c = 13 cm, selesaikan sisi yang hilang dengan [[b=\\sqrt{c^2-a^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "Dengan b = 12 cm yang telah dipulihkan, garis tingginya adalah h = (5 × 12) / 13 = 60/13 cm ≈ 4,615 cm. Ini adalah turunan manual untuk menemukan ukuran yang dibutuhkan terlebih dahulu; kalkulator sendiri meminta masukan yang lengkap, jadi kerjakan persiapan ini di kertas sebelum memasukkan nilai.",
            },
            {
              "kind": "p",
              "text": "Jika Anda sering membutuhkan sisi yang hilang itu sendiri, <a href=\"/right-triangle-side-calculator/\">kalkulator sisi</a> menemukannya langsung sebelum Anda lanjut ke garis tinggi.",
            },
          ],
        },
        "sec-why": {
          "h2": "Mengapa Rumus Garis Tinggi Segitiga Siku-siku Berhasil?",
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus ini berhasil karena satu segitiga dapat diukur dengan dua pasangan alas-tinggi yang berbeda, dan luasnya tetap sama dalam kedua cara. Argumen luas ini adalah bukti tersingkat yang jujur dari [[h=\\frac{ab}{c}]].",
            },
            {
              "kind": "p",
              "text": "Pertama, gunakan sisi siku-siku sebagai pasangan alas-tinggi. Karena sisi siku-siku saling tegak lurus, luasnya adalah setengah hasil kalinya:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang gunakan hipotenusa sebagai alas dan garis tinggi sebagai tinggi. Segitiga yang sama memiliki luas yang sama:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dua ungkapan untuk satu luas, jadi samakan keduanya:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Kalikan kedua ruas dengan 2 untuk menghilangkan pecahan, menghasilkan ab = ch. Bagi kedua ruas dengan c:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Setiap langkah adalah aritmetika yang dapat dibalik, sehingga pembagian dengan hipotenusa bukanlah trik; itu adalah harga aljabar untuk beralih dari pasangan alas-tinggi sisi siku-siku ke pasangan alas-tinggi hipotenusa sementara luasnya tetap.",
            },
          ],
          "image": {
            "src": "altitude-area-comparison.svg",
            "alt": "Segitiga siku-siku yang sama digambar dua kali: pertama dengan alas a dan tinggi b, lalu dengan alas c dan tinggi h",
            "caption": "Segitiga yang sama, dua pasangan alas-tinggi: luas sama dengan ab/2 dan ch/2, sehingga h sama dengan ab/c.",
          },
        },
        "sec-proof": {
          "h2": "Bukti Teorema Garis Tinggi Menggunakan Segitiga Sebangun",
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus proyeksi [[h=\\sqrt{pq}]] berasal dari kesebangunan. Pertahankan pelabelan yang konsisten: segitiga ABC siku-siku di C, D terletak pada AB, CD tegak lurus terhadap AB, AD = p, DB = q, dan CD = h.",
            },
            {
              "kind": "p",
              "text": "Garis tinggi membagi ABC menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD. Sudut di A dipakai bersama oleh ABC dan ACD, sehingga keduanya sebangun; demikian pula sudut di B dipakai bersama oleh ABC dan CBD. Karena kedua segitiga kecil sebangun dengan segitiga semula, keduanya sebangun satu sama lain: segitiga ACD sebangun dengan segitiga CBD.",
            },
            {
              "kind": "p",
              "text": "Tulis kesebangunan sebagai proporsi sisi-sisi yang bersesuaian. Sisi pendek ACD adalah p dan sisi panjangnya h; pada CBD sisi pendeknya h dan sisi panjangnya q. Mencocokkannya menghasilkan:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "Kalikan silang: h × h = p × q, sehingga h² = pq. Ambil akar kuadratnya:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Hanya akar positif yang digunakan karena panjang sisi selalu positif. Akar negatif tidak memiliki makna geometris di sini. Wawasan kuncinya adalah garis tinggi merupakan rata-rata proporsional antara dua ruas hipotenusa, yang persis merupakan definisi rata-rata geometris.",
            },
          ],
          "image": {
            "src": "altitude-similar-triangles.svg",
            "alt": "Segitiga siku-siku semula ABC dengan garis tinggi CD, di samping dua segitiga sebangun yang lebih kecil ACD dan CBD dengan sisi-sisi yang bersesuaian diberi label",
            "caption": "Segitiga ACD dan CBD sebangun: p/h = h/q, sehingga h kuadrat sama dengan p kali q.",
          },
        },
        "sec-examples": {
          "h2": "Contoh Soal Garis Tinggi Segitiga Siku-siku yang Dikerjakan",
          "blocks": [
            {
              "kind": "p",
              "text": "Tujuh contoh mencakup kedua mode kalkulator, konversi satuan, dan ukuran desimal. Masing-masing menunjukkan nilai yang diketahui, rumus yang dipilih, substitusi, dan jawaban akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Segitiga 3-4-5 Klasik",
            },
            {
              "kind": "p",
              "text": "Diketahui a = 3 cm, b = 4 cm, c = 5 cm. Gunakan [[h=\\frac{ab}{c}]]: h = (3 × 4) / 5 = 12 / 5 = 2,4 cm. Garis tinggi selalu lebih pendek dari kedua sisi siku-siku.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Segitiga 5-12-13",
            },
            {
              "kind": "p",
              "text": "Diketahui a = 5 m, b = 12 m, c = 13 m. Gunakan [[h=\\frac{ab}{c}]]: h = (5 × 12) / 13 = 60/13 m ≈ 4,615 m. Pertahankan pecahannya hingga langkah terakhir untuk desimal yang rapi.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Segitiga 8-15-17",
            },
            {
              "kind": "p",
              "text": "Diketahui a = 8 cm, b = 15 cm, c = 17 cm. Gunakan [[h=\\frac{ab}{c}]]: h = (8 × 15) / 17 = 120/17 cm ≈ 7,059 cm. Sisi yang lebih besar pun tetap menghasilkan garis tinggi yang lebih kecil dari keduanya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Proyeksi Hipotenusa yang Sama",
            },
            {
              "kind": "p",
              "text": "Diketahui p = 5 cm dan q = 5 cm. Gunakan [[h=\\sqrt{pq}]]: h = √(5 × 5) = √25 = 5 cm. Proyeksi yang sama berarti garis tinggi setinggi mungkin untuk hipotenusa tersebut, dan segitiganya adalah segitiga siku-siku sama kaki: setiap sisi siku-sikunya 5√2 cm, kira-kira 7,07 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Proyeksi Hipotenusa yang Berbeda",
            },
            {
              "kind": "p",
              "text": "Diketahui p = 4 cm dan q = 25 cm. Gunakan [[h=\\sqrt{pq}]]: h = √(4 × 25) = √100 = 10 cm. Perhatikan bagaimana garis tinggi 10 berada di antara kedua proyeksi, 4 dan 25, yang merupakan ciri khas rata-rata geometris.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui a = 1,5 m, b = 2 m, c = 2,5 m. Gunakan [[h=\\frac{ab}{c}]]: h = (1,5 × 2) / 2,5 = 3 / 2,5 = 1,2 m. Desimal bekerja persis seperti bilangan bulat selama setiap nilai memakai satuan yang sama.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Satuan Ukuran yang Berbeda",
            },
            {
              "kind": "p",
              "text": "Diketahui a = 30 cm, b = 0,4 m, c = 0,5 m. Konversikan semuanya ke sentimeter terlebih dahulu: b = 40 cm, c = 50 cm. Lalu h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Mengonversi sebelum mensubstitusi menghindari kesalahan satuan yang paling umum.",
            },
          ],
        },
        "sec-area": {
          "h2": "Hubungan antara Garis Tinggi dan Luas Segitiga",
          "blocks": [
            {
              "kind": "p",
              "text": "Luas dan garis tinggi saling menentukan setelah hipotenusa diketahui. Dengan hipotenusa sebagai alas, luas A = ch/2, sehingga menyelesaikan untuk garis tinggi menghasilkan [[h=\\frac{2A}{c}]]. Ini adalah rute yang benar-benar berbeda: rute ini melewati sisi siku-siku sepenuhnya.",
            },
            {
              "kind": "p",
              "text": "Misalkan sebuah soal menyatakan luas A = 54 cm² dan hipotenusa c = 15 cm. Substitusikan:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Kalikan pembilangnya: 2 × 54 = 108. Lalu bagi: h = 108 / 15 = 7,2 cm. Garis tinggi diperoleh tanpa mengetahui masing-masing sisi siku-siku.",
            },
            {
              "kind": "p",
              "text": "Rute ini berguna ketika luas diberikan langsung, misalnya dalam soal cerita tentang lahan atau material. Rute ini juga berfungsi sebagai alat verifikasi: hitung garis tinggi dari sisi-sisinya, lalu pastikan bahwa 2A/c memberikan nilai yang sama. <a href=\"/right-triangle-area-calculator/\">Kalkulator luas</a> menemukan luas dari ukuran apa pun yang diberikan soal.",
            },
          ],
        },
        "sec-geomean": {
          "h2": "Rata-rata Geometris dan Proyeksi Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema garis tinggi menyatakan garis tinggi adalah rata-rata geometris dari kedua proyeksi, dan rata-rata geometris adalah jenis rata-rata yang spesifik. Ambil p = 4 dan q = 9. Rata-rata geometrisnya adalah √(4 × 9) = √36 = 6, sehingga segitiga dengan proyeksi tersebut memiliki garis tinggi 6.",
            },
            {
              "kind": "p",
              "text": "Bandingkan dengan rata-rata aritmetika biasa: (4 + 9) / 2 = 6,5. Kedua rata-rata ini berbeda, dan hanya 6 yang merupakan garis tinggi yang benar. Rata-rata aritmetika merata-ratakan dengan menjumlah, sedangkan rata-rata geometris merata-ratakan dengan mengalikan, yang cocok untuk panjang yang berskala bersama, bukan bertambah.",
            },
            {
              "kind": "p",
              "text": "Secara geometris, hubungan rata-rata proporsional h² = pq berarti garis tinggi berhubungan dengan setiap proyeksi dengan cara yang sama seperti kedua proyeksi berhubungan satu sama lain. Simetri inilah yang membuat kedua segitiga kecil sebangun, dan inilah mengapa garis tinggi selalu terletak di antara kedua proyeksi dalam ukuran, tidak pernah sama dengan rata-rata aritmetika kecuali p sama dengan q.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Sifat-sifat Penting Garis Tinggi Segitiga Siku-siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Tujuh sifat menggambarkan garis tinggi ke hipotenusa. Bersama-sama, sifat-sifat ini memberikan intuisi yang andal tentang nilai garis tinggi yang mungkin dan perilakunya.",
            },
            {
              "kind": "list",
              "items": [
                "Garis tinggi ke hipotenusa tegak lurus terhadapnya, sehingga merupakan jarak terpendek dari titik sudut siku-siku ke hipotenusa.",
                "Garis tinggi membagi segitiga menjadi dua segitiga yang lebih kecil, masing-masing sebangun dengan segitiga semula dan sebangun satu sama lain.",
                "Garis tinggi lebih pendek dari kedua sisi siku-siku; tidak ada sisi siku-siku yang dapat menjadi jalur terpendek ke hipotenusa.",
                "Garis tinggi lebih pendek dari hipotenusa itu sendiri, karena ruas garis tegak lurus adalah rute terpendek.",
                "Garis tinggi adalah rata-rata geometris dari kedua proyeksi hipotenusa, [[h=\\sqrt{pq}]].",
                "Untuk hipotenusa yang tetap, garis tinggi terbesar ketika kedua proyeksi sama, yang terjadi ketika kedua sisi siku-siku sama.",
                "Menskala setiap panjang sisi dengan faktor yang sama akan menskala garis tinggi dengan faktor itu; gandakan segitiganya, gandakan garis tingginya.",
              ],
            },
            {
              "kind": "p",
              "text": "Sifat keenam memiliki batas yang tepat: garis tinggi tidak pernah melebihi setengah hipotenusa, [[h \\leq \\frac{c}{2}]], dengan kesamaan hanya ketika sisi siku-sikunya sama. Segitiga 45-45-90 dengan hipotenusa 10 memiliki garis tinggi tepat 5, nilai maksimum; segitiga 6-8-10 dengan hipotenusa yang sama hanya mencapai 4,8, seperti yang ditunjukkan diagram.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dua segitiga siku-siku berbagi hipotenusa 10: segitiga 45-45-90 dengan garis tinggi 5 dan segitiga gaya 6-8-10 dengan garis tinggi 4",
            "caption": "Hipotenusa 10 yang sama: proyeksi yang sama memberikan garis tinggi tertinggi, 5.",
          },
        },
        "sec-verify": {
          "h2": "Cara Memeriksa Apakah Jawaban Garis Tinggi Anda Benar",
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga pemeriksaan independen menangkap kesalahan perhitungan. Gunakan setidaknya satu di antaranya kapan pun jawaban garis tinggi penting.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 1: Luas Segitiga",
            },
            {
              "kind": "p",
              "text": "Bandingkan ab/2 dengan ch/2 menggunakan garis tinggi Anda. Untuk segitiga 3-4-5 dengan h = 2,4: ab/2 = (3 × 4)/2 = 6, dan ch/2 = (5 × 2,4)/2 = 6. Luas yang cocok memastikan garis tinggi sesuai dengan sisi-sisinya.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 2: Rata-rata Geometris",
            },
            {
              "kind": "p",
              "text": "Verifikasi [[h^2=pq]] ketika proyeksinya diketahui. Dengan p = 9 dan q = 16: h² = 12² = 144, dan pq = 9 × 16 = 144. Kesamaan berarti garis tinggi konsisten dengan cara hipotenusa terbagi.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 3: Teorema Pythagoras",
            },
            {
              "kind": "p",
              "text": "Pastikan [[a^2+b^2=c^2]] untuk sisi-sisi yang diberikan: 9 + 16 = 25 dalam kasus 3-4-5. Pemeriksaan ini memvalidasi panjang sisi, bukan garis tinggi secara langsung, tetapi masukan sisi yang salah adalah alasan paling umum jawaban garis tinggi gagal dalam dua pemeriksaan lainnya.",
            },
            {
              "kind": "p",
              "text": "Jalankan setiap pemeriksaan dalam satuan yang konsisten. Mencampur sentimeter dengan meter merusak pemeriksaan luas secara diam-diam, jadi konversikan dulu dan verifikasi kemudian.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Kesalahan Umum saat Menghitung Garis Tinggi",
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh kesalahan muncul berulang kali. Masing-masing mudah dikenali setelah Anda tahu ciri khasnya.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mengacaukan garis tinggi dengan sisi siku-siku. Garis tinggi bertemu hipotenusa membentuk sudut siku-siku; sisi siku-siku bertemu sisi siku-siku lainnya di sudut siku-siku. Pada segitiga 3-4-5, h = 2,4, bukan 3 atau 4.",
                "Memilih mode kalkulator yang salah. Memasukkan sisi dan hipotenusa ke mode Altitude Squared, yang mengharapkan proyeksi, menghasilkan jawaban yang tidak masuk akal. Cocokkan mode dengan ukurannya.",
                "Mengacaukan proyeksi dengan sisi siku-siku. Memasukkan a = 3 dan b = 4 sebagai p dan q menghitung √(12) ≈ 3,46, yang bukan garis tinggi. Proyeksi adalah ruas-ruas hipotenusa.",
                "Menggunakan hipotenusa yang salah. Membagi ab dengan sisi siku-siku, bukan hipotenusa, misalnya 12/4 = 3, melebih-lebihkan garis tinggi. Pembaginya harus sisi terpanjang, c.",
                "Lupa akar kuadrat dalam rumus proyeksi. Berhenti di h² = 144 memberikan 144 sebagai garis tinggi; jawaban sebenarnya adalah h = 12.",
                "Mencampur sentimeter dan meter. Dengan a = 30 cm dan c = 0,5 m, mensubstitusi 0,5 langsung memberikan garis tinggi yang salah. Konversikan dulu: 50 cm.",
                "Memasukkan panjang sisi yang tidak valid. Sisi seperti 2, 3, 10 tidak memenuhi teorema Pythagoras, sehingga tidak ada segitiga siku-siku dan tidak ada garis tinggi yang terdefinisi.",
                "Membulatkan terlalu dini. Membulatkan 60/13 menjadi 4,6 sebelum langkah berikutnya membawa kesalahan ke depan. Pertahankan pecahannya dan bulatkan hanya jawaban akhir.",
                "Menganggap h² sebagai garis tinggi akhir. Jika perhitungan berakhir dengan h² = 36, garis tingginya adalah 6, bukan 36.",
                "Menerapkan rumus segitiga siku-siku pada segitiga sembarang. Rumus-rumus di sini membutuhkan sudut siku-siku; untuk segitiga lain hubungan garis tingginya berbeda.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Penerapan Garis Tinggi Segitiga Siku-siku di Dunia Nyata",
          "blocks": [
            {
              "kind": "p",
              "text": "Perhitungan garis tinggi mendukung setiap pekerjaan yang dibangun di atas geometri segitiga siku-siku. Dalam pendidikan geometri, teorema garis tinggi memberi siswa perkenalan pertama tentang bukti kesebangunan dan rata-rata geometris. Gambar teknik dan desain geometris menggunakan garis tinggi untuk menempatkan garis tegak lurus saat menata panel segitiga atau bentuk braket.",
            },
            {
              "kind": "p",
              "text": "Geometri survei menggunakan hubungan segitiga siku-siku saat memetakan bidang tanah dengan offset tegak lurus, dan model perencanaan konstruksi menggunakannya ketika rangka segitiga siku-siku harus bertemu dinding membentuk sudut siku-siku. Perhitungan luas berjalan sebaliknya: dari garis tinggi dan hipotenusa yang diketahui, [[h=\\frac{2A}{c}]] memulihkan garis tinggi tanpa mengukur sisi siku-siku.",
            },
            {
              "kind": "p",
              "text": "Ini adalah sketsa geometris hipotetis, bukan prosedur rekayasa. Pekerjaan survei dan struktural nyata membutuhkan ukuran yang sesuai, asumsi desain, dan standar profesional; teorema garis tinggi menjelaskan geometrinya, teorema ini tidak pernah menggantikan metode profesional.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Soal Latihan Beserta Jawaban",
          "blocks": [
            {
              "kind": "p",
              "text": "Lima soal menggunakan nilai yang tidak muncul dalam contoh utama. Selesaikan masing-masing, lalu periksa jawabannya di bawah.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Berbasis Sisi untuk Pemula",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki sisi siku-siku a = 9 cm dan b = 40 cm dengan hipotenusa c = 41 cm. Temukan garis tinggi ke hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Berbasis Proyeksi untuk Pemula",
            },
            {
              "kind": "p",
              "text": "Garis tinggi sebuah segitiga siku-siku membagi hipotenusa menjadi p = 16 m dan q = 36 m. Temukan garis tingginya.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Ukuran Desimal",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki a = 0,6 m, b = 0,8 m, c = 1,0 m. Temukan garis tinggi ke hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Sisi yang Hilang",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki sisi siku-siku a = 7 in dan hipotenusa c = 25 in. Temukan garis tinggi ke hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Luas Bedengan Kebun",
            },
            {
              "kind": "p",
              "text": "Bedengan kebun berbentuk segitiga siku-siku memiliki luas A = 96 m² dan hipotenusa 20 m. Temukan garis tinggi ke hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Soal 1: h = (9 × 40) / 41 = 360/41 cm ≈ 8,780 cm. Pertama pastikan sisi-sisinya: 9² + 40² = 81 + 1600 = 1681 = 41², sehingga segitiganya valid.",
            },
            {
              "kind": "p",
              "text": "Soal 2: h = √(16 × 36) = √576 = 24 m. Garis tinggi berada di antara kedua proyeksi, sebagaimana mestinya bagi rata-rata geometris.",
            },
            {
              "kind": "p",
              "text": "Soal 3: h = (0,6 × 0,8) / 1,0 = 0,48 / 1,0 = 0,48 m. Desimal membutuhkan perlakuan yang sama seperti bilangan bulat.",
            },
            {
              "kind": "p",
              "text": "Soal 4: Pulihkan sisi yang hilang: b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Lalu h = (7 × 24) / 25 = 168/25 in ≈ 6,72 in.",
            },
            {
              "kind": "p",
              "text": "Soal 5: Gunakan rute luas: h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9,6 m. Tidak diperlukan ukuran sisi siku-siku.",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Kalkulator Segitiga Siku-siku Terkait",
          "blocks": [
            {
              "kind": "p",
              "text": "Panduan ini membahas kedua mode garis tinggi: panjang sisi dan proyeksi hipotenusa. Jika Anda sudah tahu ukuran apa yang Anda miliki, alat khusus membahas lebih dalam: <a href=\"/right-triangle-altitude-from-sides-calculator/\">kalkulator garis tinggi dari sisi</a> dan <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator garis tinggi dari proyeksi</a>. <a href=\"/right-triangle-projection-calculator/\">Kalkulator proyeksi</a> menemukan p dan q sendiri ketika hanya sisi-sisinya yang diketahui.",
            },
          ],
        },
      },
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Apa itu garis tinggi segitiga siku-siku?",
          "answer": "Garis tinggi ke hipotenusa adalah ruas garis tegak lurus dari titik sudut siku-siku ke hipotenusa. Garis tinggi ini adalah garis tinggi ketiga dari segitiga siku-siku, berbeda dari kedua sisi siku-siku, dan membagi hipotenusa menjadi proyeksi p dan q.",
        },
        {
          "question": "Bagaimana cara menghitung garis tinggi segitiga siku-siku?",
          "answer": "Gunakan rumus sisi [[h=\\frac{ab}{c}]] ketika sisi siku-siku dan hipotenusa diketahui, atau rumus proyeksi [[h=\\sqrt{pq}]] ketika ruas-ruas hipotenusa diketahui. Kalkulator menerapkan mode mana pun yang sesuai dengan ukuran Anda.",
        },
        {
          "question": "Apa rumus garis tinggi yang menggunakan tiga sisi?",
          "answer": "Dengan sisi siku-siku a dan b serta hipotenusa c, garis tingginya adalah [[h=\\frac{ab}{c}]]. Kalikan kedua sisi siku-siku dan bagi dengan hipotenusa. Untuk segitiga 3-4-5, h = (3 × 4) / 5 = 2,4.",
        },
        {
          "question": "Bagaimana cara menghitung garis tinggi dari proyeksi?",
          "answer": "Teorema garis tinggi menyatakan [[h^2=pq]], jadi ambil akar kuadratnya: [[h=\\sqrt{pq}]]. Untuk p = 9 dan q = 16, h = √(9 × 16) = √144 = 12. Proyeksi adalah ruas-ruas hipotenusa, bukan sisi siku-siku.",
        },
        {
          "question": "Bisakah saya menghitung garis tinggi hanya dengan dua sisi?",
          "answer": "Bisa, dengan memulihkan sisi ketiga terlebih dahulu. Dengan kedua sisi siku-siku, cari [[c=\\sqrt{a^2+b^2}]]; dengan satu sisi siku-siku dan hipotenusa, cari [[b=\\sqrt{c^2-a^2}]]. Lalu terapkan [[h=\\frac{ab}{c}]] seperti biasa.",
        },
        {
          "question": "Apakah garis tinggi sama dengan tinggi?",
          "answer": "Pada segitiga siku-siku kedua istilah sering tumpang tindih, tetapi garis tinggi memiliki arti tepat sebagai ruas garis tegak lurus dari sebuah titik sudut ke sisi di hadapannya. Di halaman ini, garis tinggi selalu berarti garis tegak lurus dari titik sudut siku-siku ke hipotenusa.",
        },
        {
          "question": "Apakah garis tinggi selalu lebih pendek dari hipotenusa?",
          "answer": "Ya. Garis tinggi adalah jarak terpendek dari titik sudut siku-siku ke hipotenusa, dan hipotenusa lebih panjang dari ruas mana pun semacam itu. Garis tinggi juga lebih pendek dari kedua sisi siku-siku.",
        },
        {
          "question": "Bisakah garis tinggi sama dengan proyeksi hipotenusa?",
          "answer": "Bisa, ketika proyeksinya sama. Jika p = q, maka [[h=\\sqrt{p \\times p}=p]], sehingga garis tinggi sama dengan setiap proyeksi. Ini terjadi pada segitiga siku-siku sama kaki, di mana garis tinggi juga setengah dari hipotenusa.",
        },
        {
          "question": "Bagaimana teorema rata-rata geometris berkaitan dengan garis tinggi?",
          "answer": "Teorema rata-rata geometris adalah nama lain untuk teorema garis tinggi: [[h=\\sqrt{pq}]] menyatakan garis tinggi adalah rata-rata geometris dari proyeksi hipotenusa. Kesebangunan kedua segitiga kecil membuktikannya.",
        },
        {
          "question": "Bagaimana cara memeriksa perhitungan garis tinggi saya?",
          "answer": "Bandingkan kedua rumus luas ab/2 dan ch/2; keduanya harus cocok. Jika proyeksinya diketahui, pastikan [[h^2=pq]]. Verifikasi juga [[a^2+b^2=c^2]] untuk memastikan sisi-sisinya membentuk segitiga siku-siku yang valid.",
        },
        {
          "question": "Bisakah saya menggunakan kalkulator ini untuk segitiga yang tidak siku-siku?",
          "answer": "Tidak. Kedua rumus membutuhkan sudut siku-siku: argumen luas membutuhkan sisi siku-siku yang tegak lurus, dan teorema garis tinggi membutuhkan kesebangunan sudut siku-siku. Untuk segitiga lain, hubungan garis tingginya berbeda.",
        },
        {
          "question": "Mode kalkulator mana yang harus saya pilih?",
          "answer": "Pilih Altitude to Hypotenuse ketika Anda mengetahui kedua sisi siku-siku dan hipotenusa. Pilih Altitude Squared ketika Anda mengetahui kedua proyeksi hipotenusa p dan q. Mencocokkan mode dengan ukuran yang Anda ketahui adalah satu-satunya persiapan yang penting.",
        },
      ],
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-siku Terkait",
      "relatedIntro": "Pilih alat yang sesuai dengan ukuran yang sudah Anda ketahui.",
      "relatedItems": [
        "Kalkulator Garis Tinggi Segitiga Siku-siku dari Sisi",
        "Kalkulator Garis Tinggi Segitiga Siku-siku dari Proyeksi",
        "Kalkulator Luas Segitiga Siku-siku",
        "Kalkulator Sisi Segitiga Siku-siku",
        "Kalkulator Proyeksi Segitiga Siku-siku",
      ],
    },
};
