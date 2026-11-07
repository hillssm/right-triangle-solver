// specialGuideTranslations.bid.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B5_ID = {
  "id": {
      "meta": {
        "title": "Kalkulator Segitiga Siku-Siku Istimewa - Rasio 45-45-90 dan 30-60-90",
        "description": "Selesaikan segitiga 45-45-90 dan 30-60-90 dengan Kalkulator Segitiga Siku-Siku Istimewa. Gunakan rasio tetap 1:1:√2 dan 1:√3:2 untuk menemukan sisi yang hilang dengan cepat.",
        "primaryKeyword": "Kalkulator Segitiga Siku-Siku Istimewa",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Navigasi Bagian",
      "tocItems": {
        "sec-intro": "Kalkulator Segitiga Siku-Siku Istimewa",
        "sec-calculate": "Menghitung Sisi yang Hilang pada Segitiga Siku-Siku Istimewa",
        "sec-what": "Apa Itu Segitiga Siku-Siku Istimewa?",
        "sec-types": "Dua Jenis Utama Segitiga Siku-Siku Istimewa",
        "sec-454590": "Memahami Segitiga 45-45-90",
        "sec-derive-454590": "Menurunkan Rasio Sisi 45-45-90",
        "sec-306090": "Memahami Segitiga 30-60-90",
        "sec-derive-306090": "Menurunkan Rasio Sisi 30-60-90",
        "sec-compare": "Membandingkan Rasio Sisi Kedua Segitiga Istimewa",
        "sec-how-hyp-45": "Cara Menggunakan Kalkulator Hipotenusa 45-45-90",
        "sec-how-leg-45": "Cara Mencari Kaki dari Hipotenusa 45-45-90",
        "sec-how-long-30": "Cara Menggunakan Kalkulator Kaki Panjang 30-60-90",
        "sec-how-hyp-30": "Cara Menggunakan Kalkulator Hipotenusa 30-60-90",
        "sec-examples": "Contoh Langkah demi Langkah untuk Kedua Jenis Segitiga Istimewa",
        "sec-area-perimeter": "Hubungan Luas dan Keliling pada Segitiga Siku-Siku Istimewa",
        "sec-exact": "Jawaban Akar Eksak versus Pendekatan Desimal",
        "sec-verify": "Cara Memverifikasi Perhitungan Segitiga Siku-Siku Istimewa",
        "sec-mistakes": "Kesalahan Umum saat Menyelesaikan Segitiga Siku-Siku Istimewa",
        "sec-applications": "Penerapan Praktis Segitiga Siku-Siku Istimewa",
        "sec-practice": "Soal Latihan Beserta Jawabannya",
        "sec-related": "Kalkulator Segitiga Siku-Siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Segitiga Siku-Siku Istimewa",
          "blocks": [
            {
              "kind": "p",
              "text": "Selesaikan segitiga 45-45-90 dan 30-60-90 dari satu sisi yang diketahui, dengan menggunakan rasio sisi tetapnya.",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku istimewa adalah segitiga siku-siku yang sudut-sudutnya menghasilkan rasio sisi tetap yang tidak pernah berubah, sebesar apa pun segitiganya. Hanya dua pola sudut yang berlaku seperti ini dalam geometri sekolah: segitiga 45-45-90 dan segitiga 30-60-90. Kalkulator Segitiga Siku-Siku Istimewa di halaman ini mencakup kedua jenis tersebut, sehingga satu sisi yang diketahui sudah cukup untuk menemukan semua sisi lainnya.",
            },
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 memiliki dua kaki yang sama panjang, dan sisi-sisinya mengikuti rasio [[a : b : c = 1 : 1 : \\sqrt{2}]]. Segitiga 30-60-90 memiliki tiga panjang sisi yang berbeda, dan sisi-sisinya mengikuti rasio [[a : b : c = 1 : \\sqrt{3} : 2]]. Di sini [[a]] dan [[b]] adalah kaki-kaki dan [[c]] adalah hipotenusa, dan arti [[a]] dan [[b]] berubah menurut jenis segitiganya, sehingga bagian-bagian di bawah ini selalu menyatakan jenis yang digunakan.",
            },
            {
              "kind": "p",
              "text": "Jika segitiga 45-45-90 memiliki kaki 5 cm, kaki lainnya juga 5 cm dan hipotenusanya adalah [[c = 5\\sqrt{2} \\approx 7.071]] cm. Jika segitiga 30-60-90 memiliki kaki pendek 5 cm, kaki panjangnya adalah [[b = 5\\sqrt{3} \\approx 8.660]] cm dan hipotenusanya adalah [[c = 10]] cm. Keempat mode kalkulator di halaman ini melakukan tepat langkah-langkah tersebut, dan panduan di bawah ini menjelaskan dari mana setiap rasio berasal, cara memilih mode yang tepat, dan cara memeriksa setiap jawaban.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Menghitung Sisi yang Hilang pada Segitiga Siku-Siku Istimewa",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator di halaman ini memiliki empat mode, satu untuk setiap sisi yang hilang yang biasanya ditanyakan dalam soal segitiga siku-siku istimewa. Pilih jenis segitiganya terlebih dahulu, lalu pilih sisi yang diketahui dan sisi yang dibutuhkan. Tabel di bawah ini mencantumkan setiap mode beserta masukan, rumus, dan hasilnya.",
            },
          ],
          "table": {
            "headers": [
              "Mode kalkulator",
              "Masukan yang diperlukan",
              "Hasil",
            ],
            "rows": [
              [
                "45-45-90: Hipotenusa",
                "Kaki a",
                "Hipotenusa c",
              ],
              [
                "45-45-90: Kaki",
                "Hipotenusa c",
                "Kaki a",
              ],
              [
                "30-60-90: Kaki panjang",
                "Kaki pendek a",
                "Kaki panjang b",
              ],
              [
                "30-60-90: Hipotenusa",
                "Kaki pendek a",
                "Hipotenusa c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Mode 1 mencari hipotenusa segitiga 45-45-90 dari salah satu kaki yang sama panjang.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Mode 2 mencari kaki segitiga 45-45-90 dari hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Mode 3 mencari kaki panjang segitiga 30-60-90 dari kaki pendek.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Mode 4 mencari hipotenusa segitiga 30-60-90 dari kaki pendek.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Untuk menggunakan mode apa pun, pastikan jenis segitiga dari sudut-sudutnya, tentukan sisi yang diketahui, masukkan ukuran positif, pilih satuan yang sesuai dengan soal lainnya, lalu klik Hitung. Gunakan Atur Ulang sebelum perhitungan baru agar nilai lama tidak terbawa ke jawaban berikutnya. Setiap mode membutuhkan rumus yang berbeda karena setiap mode berawal dari sisi yang diketahui yang berbeda, dan kedua jenis segitiga memiliki rasio yang berbeda, sehingga rumus 45-45-90 tidak pernah cocok untuk soal 30-60-90.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Diagram alir empat mode Kalkulator Segitiga Siku-Siku Istimewa: kaki 45-45-90 ke hipotenusa, hipotenusa 45-45-90 ke kaki, kaki pendek 30-60-90 ke kaki panjang, dan kaki pendek 30-60-90 ke hipotenusa",
            "caption": "Keempat mode kalkulator: masing-masing berawal dari sisi yang diketahui dan menerapkan satu rasio tetap.",
          },
        },
        "sec-what": {
          "h2": "Apa Itu Segitiga Siku-Siku Istimewa?",
          "blocks": [
            {
              "kind": "p",
              "text": "Segitiga siku-siku istimewa adalah segitiga siku-siku yang ketiga sudutnya tetap pada nilai yang memaksa sisi-sisinya ke dalam satu rasio yang tidak berubah. Sebagian besar segitiga siku-siku tidak memiliki jalan pintas seperti ini: mengetahui satu sisi tidak memberi tahu apa pun tentang sisi lainnya sampai Anda juga mengetahui sebuah sudut atau sisi kedua. Pada segitiga siku-siku istimewa, sudut-sudutnya saja sudah menentukan bentuknya, sehingga satu panjang sisi menentukan seluruh segitiga.",
            },
            {
              "kind": "p",
              "text": "Teorema Pythagoras tetap berlaku, dan teorema inilah yang menghasilkan kedua rasio tersebut. Pada segitiga 45-45-90, kedua kaki yang sama membuat teorema itu menyusut menjadi [[2a^2 = c^2]], yang menghasilkan [[c = a\\sqrt{2}]]. Pada segitiga 30-60-90, hipotenusa adalah dua kali kaki pendek, sehingga teorema itu menghasilkan [[b^2 = (2a)^2 - a^2 = 3a^2]], yang menghasilkan [[b = a\\sqrt{3}]]. Penurunan lengkapnya ada pada bagiannya masing-masing di bawah ini.",
            },
            {
              "kind": "p",
              "text": "Rasio itu tetap sama pada semua ukuran karena segitiga-segitiga tersebut sebangun dalam jenisnya masing-masing. Segitiga 45-45-90 dengan kaki 1 cm dan segitiga dengan kaki 100 cm memiliki bentuk yang sama, sudut yang sama, dan rasio 1:1:√2 yang sama. Kemandirian terhadap skala inilah yang membuat segitiga-segitiga ini sangat berguna dalam geometri dan trigonometri: begitu Anda mengenali pola sudutnya, Anda dapat menuliskan setiap sisi tanpa mengukur atau menggunakan sinus dan kosinus.",
            },
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 dan 30-60-90 adalah dua keluarga yang berbeda, bukan dua nama untuk bentuk yang sama. Yang satu memiliki dua kaki yang sama dan yang lain memiliki tiga panjang sisi yang berbeda. Mencampuradukkan keduanya adalah kesalahan paling umum dalam topik ini, sehingga bagian berikutnya memperkenalkan setiap keluarga secara terpisah sebelum panduan ini membandingkannya berdampingan.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Dua segitiga siku-siku istimewa berdampingan: segitiga 45-45-90 dengan rasio 1:1:√2 dan segitiga 30-60-90 dengan rasio 1:√3:2",
            "caption": "Dua segitiga siku-siku istimewa: 45-45-90 dengan kaki yang sama, dan 30-60-90 dengan tiga sisi yang berbeda.",
          },
        },
        "sec-types": {
          "h2": "Dua Jenis Utama Segitiga Siku-Siku Istimewa",
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua segitiga istimewa adalah segitiga siku-siku, sehingga masing-masing memiliki sudut 90° dan hipotenusa di hadapannya. Yang berbeda adalah pasangan sudut lancipnya, dan sudut lancip itulah yang menentukan rasio sisinya. Pelajari setiap jenis secara terpisah terlebih dahulu, dan perbandingan di bagian selanjutnya dalam panduan ini akan mudah diikuti.",
            },
            {
              "kind": "h3",
              "text": "Segitiga 45-45-90",
            },
            {
              "kind": "list",
              "items": [
                "Sudut: 45°, 45°, 90°.",
                "Dua kaki sama panjang, sehingga kaki mana pun dapat digunakan sebagai masukan yang diketahui.",
                "Hipotenusa sama dengan kaki dikali √2, [[c = a\\sqrt{2}]].",
                "Rasio sisi: [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "Disebut juga segitiga siku-siku sama kaki.",
              ],
            },
            {
              "kind": "h3",
              "text": "Segitiga 30-60-90",
            },
            {
              "kind": "list",
              "items": [
                "Sudut: 30°, 60°, 90°.",
                "Kaki pendek [[a]] berhadapan dengan sudut 30°, kaki panjang [[b]] berhadapan dengan sudut 60°.",
                "Hipotenusa sama dengan dua kali kaki pendek, [[c = 2a]].",
                "Kaki panjang sama dengan kaki pendek dikali √3, [[b = a\\sqrt{3}]].",
                "Rasio sisi: [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "Segitiga siku-siku tak sama sisi, karena ketiga sisinya berbeda.",
              ],
            },
            {
              "kind": "p",
              "text": "Perbedaan visualnya jelas begitu Anda mencarinya. Pada segitiga 45-45-90 kedua kakinya tampak sama panjang, dan hipotenusanya membentuk sudut 45° dengan masing-masing kaki. Pada segitiga 30-60-90 kaki di hadapan sudut 30° terlihat jelas sebagai sisi terpendek, kaki di hadapan sudut 60° lebih panjang, dan hipotenusanya tepat dua kali kaki pendek. Tabel di bawah ini merangkum perbandingannya.",
            },
          ],
          "table": {
            "headers": [
              "Fitur",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Sudut",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Rasio sisi",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Kaki sama panjang",
                "Ya",
                "Tidak",
              ],
              [
                "Sisi terpendek",
                "Kedua kaki",
                "Kaki pendek (berhadapan dengan 30°)",
              ],
              [
                "Sisi terpanjang",
                "Hipotenusa",
                "Hipotenusa",
              ],
              [
                "Rumus hipotenusa",
                "a√2",
                "2a",
              ],
              [
                "Rumus kaki panjang",
                "Tidak berlaku",
                "a√3",
              ],
              [
                "Jenis segitiga",
                "Siku-siku sama kaki",
                "Siku-siku tak sama sisi",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "Memahami Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 adalah segitiga siku-siku sama kaki. Kedua sudut lancipnya sama-sama 45°, sehingga sudut-sudutnya berjumlah [[45° + 45° + 90° = 180°]], seperti yang harus dipenuhi setiap segitiga. Karena kedua sudut lancipnya sama, sisi-sisi di hadapannya pun sama, itulah sebabnya kedua kakinya sama panjang.",
            },
            {
              "kind": "p",
              "text": "Sebut kakinya [[a]] dan [[b]] dan hipotenusanya [[c]]. Kaki yang sama berarti [[a = b]], dan rasio sisinya adalah [[a : b : c = 1 : 1 : \\sqrt{2}]]. Hipotenusa adalah sisi terpanjang, seperti pada setiap segitiga siku-siku, dan lebih panjang dari salah satu kaki dengan faktor √2, sekitar 1.414.",
            },
            {
              "kind": "p",
              "text": "Dua rumus kerja yang berlaku adalah hipotenusa dari kaki dan kaki dari hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Ambil kaki 5 cm. Kaki lainnya 5 cm, dan hipotenusanya adalah [[c = 5\\sqrt{2} \\approx 7.071]] cm. Langkah yang sama berlaku pada semua ukuran: kaki 12 cm menghasilkan hipotenusa [[12\\sqrt{2} \\approx 16.971]] cm, dan kaki 1 satuan menghasilkan hipotenusa √2 satuan. <a href=\"/45-45-90-triangle-calculator/\">Kalkulator segitiga 45-45-90</a> membahas jenis segitiga ini secara lengkap, termasuk luas dan keliling.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "Segitiga 45-45-90 dengan dua kaki sama panjang yang ditandai kongruen, sudut 45°, 45°, 90°, dan hipotenusa berlabel a√2",
            "caption": "Segitiga 45-45-90: kaki sama panjang, sudut lancip sama besar, dan hipotenusa a√2.",
          },
        },
        "sec-derive-454590": {
          "h2": "Menurunkan Rasio Sisi 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Rasio 1:1:√2 bukan aturan yang harus dihafal begitu saja. Rasio ini mengikuti dalam beberapa langkah dari teorema Pythagoras, dan melihat langkah-langkahnya sekali saja membuat rasio itu sulit dilupakan. Mulailah dari fakta bahwa kaki-kakinya sama panjang.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Terapkan teorema Pythagoras pada kaki-kaki dan hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ganti [[b]] dengan [[a]], karena kaki-kakinya sama.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Gabungkan kedua suku yang sama.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ambil akar kuadrat positif dari kedua ruas. Panjang selalu positif, sehingga akar negatif dibuang.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Tetapkan [[a = 1]] dan rasionya langsung terlihat: kaki 1 dan 1, hipotenusa √2, sehingga rasionya adalah [[1 : 1 : \\sqrt{2}]]. Rasio yang sama juga menjelaskan diagonal persegi. Persegi dengan sisi [[a]] memiliki diagonal yang membaginya menjadi dua segitiga 45-45-90 yang kongruen, dan diagonal itu adalah hipotenusa dari salah satunya, sehingga diagonal sama dengan [[a\\sqrt{2}]]. Persegi dengan sisi 8 cm memiliki diagonal [[8\\sqrt{2} \\approx 11.314]] cm.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "Segitiga 45-45-90 berlabel yang menunjukkan penurunan Pythagoras a kuadrat ditambah a kuadrat sama dengan c kuadrat, menghasilkan c sama dengan a dikali akar 2",
              "caption": "Penurunan Pythagoras: kaki yang sama mengubah a² + b² = c² menjadi 2a² = c².",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "Persegi dengan sisi 8 cm dan diagonal 8 akar 2 cm, dibagi menjadi dua segitiga 45-45-90 yang kongruen",
              "caption": "Diagonal persegi membagi persegi menjadi dua segitiga 45-45-90 yang kongruen.",
            },
          ],
        },
        "sec-306090": {
          "h2": "Memahami Segitiga 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Segitiga 30-60-90 memiliki tiga sudut yang berbeda, sehingga memiliki tiga panjang sisi yang berbeda. Sisi di hadapan sudut terkecil adalah sisi terpendek, sisi di hadapan sudut tengah adalah sisi tengah, dan sisi di hadapan sudut 90° adalah hipotenusa. Aturan sisi di hadapan sudut itu adalah kunci utama untuk memberi label pada segitiga ini dengan benar.",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a]] untuk kaki pendek di hadapan 30°, [[b]] untuk kaki panjang di hadapan 60°, dan [[c]] untuk hipotenusa di hadapan 90°. Dua rumus kerja yang berlaku adalah kaki panjang dari kaki pendek dan hipotenusa dari kaki pendek.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Rasio sisinya adalah [[a : b : c = 1 : \\sqrt{3} : 2]], dengan √3 sekitar 1.732. Ambil kaki pendek 5 cm. Kaki panjangnya adalah [[b = 5\\sqrt{3} \\approx 8.660]] cm dan hipotenusanya adalah [[c = 10]] cm. Periksa dengan teorema Pythagoras: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], yang memastikan ketiga sisi itu cocok satu sama lain.",
            },
            {
              "kind": "p",
              "text": "Hipotenusa selalu tepat dua kali kaki pendek, dan inilah pemeriksaan tercepat dalam topik ini. Jika soal menyebutkan hipotenusa 14 cm, kaki pendeknya langsung 7 cm, dan kaki panjangnya mengikuti sebagai [[7\\sqrt{3} \\approx 12.124]] cm. <a href=\"/30-60-90-triangle-calculator/\">Kalkulator segitiga 30-60-90</a> membahas jenis segitiga ini secara lengkap, termasuk penurunan segitiga sama sisinya.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "Segitiga 30-60-90 dengan kaki pendek a berhadapan dengan 30 derajat, kaki panjang a akar 3 berhadapan dengan 60 derajat, dan hipotenusa 2a berhadapan dengan 90 derajat",
            "caption": "Segitiga 30-60-90: kaki pendek terletak di hadapan 30°, kaki panjang di hadapan 60°.",
          },
        },
        "sec-derive-306090": {
          "h2": "Menurunkan Rasio Sisi 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Rasio 1:√3:2 berasal dari segitiga sama sisi, dan konstruksinya layak diikuti langkah demi langkah. Mulailah dengan segitiga sama sisi yang panjang sisinya [[2a]]. Ketiga sudutnya adalah 60° dan ketiga sisinya sama panjang.",
            },
            {
              "kind": "p",
              "text": "Gambar garis tinggi dari satu titik sudut ke sisi di hadapannya. Garis tinggi itu melakukan tiga hal sekaligus: membagi segitiga sama sisi menjadi dua segitiga siku-siku yang kongruen, memotong alas menjadi dua ruas sepanjang [[a]], dan membagi satu sudut 60° menjadi dua sudut 30°. Setiap bagiannya kini menjadi segitiga dengan sudut 30°, 60°, dan 90°.",
            },
            {
              "kind": "p",
              "text": "Pada salah satu bagiannya, hipotenusa adalah sisi segitiga sama sisi semula, [[2a]], dan kaki pendeknya adalah setengah alas, [[a]]. Sebut garis tinggi itu, yang merupakan kaki panjang, [[b]]. Terapkan teorema Pythagoras pada segitiga setengah itu.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Kembangkan kuadratnya.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Sederhanakan.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Ambil akar kuadrat positif.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Tetapkan [[a = 1]] dan rasionya terlihat: kaki pendek 1, kaki panjang √3, hipotenusa 2, sehingga rasionya adalah [[1 : \\sqrt{3} : 2]]. Tinggi segitiga sama sisi dengan sisi 10 cm karena itu adalah [[5\\sqrt{3} \\approx 8.660]] cm, karena tinggi itu adalah kaki panjang segitiga 30-60-90 dengan kaki pendek 5 cm.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "Segitiga sama sisi dengan sisi 2a yang dibagi oleh garis tinggi menjadi dua segitiga 30-60-90 yang kongruen, masing-masing dengan kaki pendek a, kaki panjang a akar 3, dan hipotenusa 2a",
            "caption": "Garis tinggi membagi segitiga sama sisi menjadi dua segitiga 30-60-90 yang kongruen.",
          },
        },
        "sec-compare": {
          "h2": "Membandingkan Rasio Sisi Kedua Segitiga Istimewa",
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua rasio itu tampak mirip sekilas, dan justru itulah sebabnya keduanya tertukar. Keduanya mengandung akar kuadrat dan bilangan bulat kecil, dan keduanya menggambarkan segitiga siku-siku. Namun angka-angkanya terletak di tempat yang berbeda: pada 1:1:√2 akar itu milik hipotenusa, sedangkan pada 1:√3:2 akar itu milik kaki panjang dan hipotenusanya adalah bilangan bulat 2.",
            },
          ],
          "table": {
            "headers": [
              "Fitur",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Sudut",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Rasio sisi",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Kaki sama panjang",
                "Ya",
                "Tidak",
              ],
              [
                "Sisi terpendek",
                "Kedua kaki",
                "Kaki pendek",
              ],
              [
                "Sisi terpanjang",
                "Hipotenusa",
                "Hipotenusa",
              ],
              [
                "Rumus hipotenusa",
                "a√2",
                "2a",
              ],
              [
                "Rumus kaki panjang",
                "Tidak berlaku",
                "a√3",
              ],
              [
                "Jenis segitiga",
                "Siku-siku sama kaki",
                "Siku-siku tak sama sisi",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Rumus-rumusnya tidak dapat dipertukarkan. Mengalikan kaki pendek 30-60-90 dengan √2 menghasilkan hipotenusa yang salah, dan menggandakan kaki 45-45-90 menghasilkan hipotenusa yang salah. Kedua segitiga itu berasal dari konstruksi yang berbeda, diagonal persegi untuk 45-45-90 dan garis tinggi segitiga sama sisi untuk 30-60-90, sehingga rasionya menjawab pertanyaan geometri yang berbeda.",
            },
            {
              "kind": "p",
              "text": "Satu contoh numerik untuk setiap jenis menunjukkan selisihnya. Segitiga 45-45-90 dengan kaki 5 cm memiliki hipotenusa [[5\\sqrt{2} \\approx 7.071]] cm. Segitiga 30-60-90 dengan kaki pendek 5 cm memiliki hipotenusa 10 cm dan kaki panjang [[5\\sqrt{3} \\approx 8.660]] cm. Angka awal yang sama, jawaban yang sangat berbeda, dan satu-satunya cara membedakannya adalah pola sudutnya.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "Perbandingan berdampingan rasio 45-45-90 1:1:√2 dan rasio 30-60-90 1:√3:2 pada skala yang sama",
            "caption": "Kedua rasio pada skala yang sama: akar terletak pada hipotenusa untuk 45-45-90, pada kaki panjang untuk 30-60-90.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "Cara Menggunakan Kalkulator Hipotenusa 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Mode 1 adalah mode yang paling sering digunakan di halaman ini, dan hanya butuh beberapa detik begitu jenis segitiganya dipastikan. Ikuti langkah-langkahnya secara berurutan.",
            },
            {
              "kind": "steps",
              "steps": [
                "Pastikan segitiganya adalah 45-45-90: kedua sudut lancipnya berukuran 45°.",
                "Pilih salah satu kaki yang sama panjang sebagai sisi yang diketahui, karena kedua kakinya sama panjang.",
                "Pilih mode hipotenusa 45-45-90 pada kalkulator.",
                "Masukkan panjang kaki sebagai bilangan positif.",
                "Pilih satuan yang sesuai dengan soal lainnya.",
                "Klik Hitung Hipotenusa c.",
                "Baca hasilnya, yaitu hipotenusa dalam satuan yang sama.",
                "Gunakan Atur Ulang sebelum memulai perhitungan baru.",
              ],
            },
            {
              "kind": "p",
              "text": "Mode ini menerapkan rumus di bawah ini.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dengan kaki 7 cm, hipotenusanya adalah [[c = 7\\sqrt{2} \\approx 9.899]] cm. Rumus ini hanya berlaku bila kedua sudut lancipnya 45°, jadi periksa sudut-sudutnya sebelum mempercayai jawabannya. Jika sudutnya 30° dan 60°, beralihlah ke mode 30-60-90.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "Cara Mencari Kaki dari Hipotenusa 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Mode 2 bekerja mundur dari hipotenusa ke kaki. Mode ini membagi dengan √2, langkah yang paling sering dilupakan. Rumusnya ditunjukkan di bawah ini.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Hasil yang sama dapat ditulis dalam bentuk rasional, yang menghindari akar pada penyebut.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Untuk menggunakan mode ini, pastikan pola sudut 45-45-90, pilih mode kaki 45-45-90, masukkan hipotenusa, pilih satuan, lalu klik Hitung. Dengan hipotenusa 10 cm, kakinya adalah [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm. Kedua kaki memiliki panjang ini, karena kaki-kakinya sama, sehingga satu jawaban menggambarkan seluruh segitiga. Pemeriksaan cepat: [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]], yang sesuai dengan kuadrat hipotenusa.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "Cara Menggunakan Kalkulator Kaki Panjang 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Mode 3 mencari kaki panjang dari kaki pendek, dan satu-satunya bagian yang sulit adalah menentukan kaki pendek dengan benar. Kaki pendek adalah sisi di hadapan sudut 30°, dan selalu merupakan sisi terpendek segitiga.",
            },
            {
              "kind": "steps",
              "steps": [
                "Pastikan segitiganya adalah 30-60-90 dari sudut-sudutnya.",
                "Temukan sisi di hadapan sudut 30°: itulah kaki pendek.",
                "Pilih mode kaki panjang 30-60-90 pada kalkulator.",
                "Masukkan kaki pendek sebagai bilangan positif.",
                "Pilih satuan yang sesuai dengan soal lainnya.",
                "Klik Hitung Kaki Panjang.",
                "Baca hasilnya, yaitu kaki panjang dalam satuan yang sama.",
              ],
            },
            {
              "kind": "p",
              "text": "Mode ini menerapkan rumus di bawah ini.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Dengan kaki pendek 6 cm, kaki panjangnya adalah [[b = 6\\sqrt{3} \\approx 10.392]] cm. Memasukkan hipotenusa atau kaki panjang karena keliru menghasilkan jawaban yang salah, jadi beri label pada sisi-sisinya terlebih dahulu dan masukkan hanya kaki pendeknya.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "Cara Menggunakan Kalkulator Hipotenusa 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Mode 4 adalah mode paling sederhana di halaman ini, karena hipotenusa segitiga 30-60-90 tepat dua kali kaki pendek. Tidak ada akar kuadrat yang terlibat, sehingga jawabannya mudah diperiksa dengan tangan.",
            },
            {
              "kind": "steps",
              "steps": [
                "Pastikan segitiganya adalah 30-60-90 dari sudut-sudutnya.",
                "Tentukan kaki pendek, sisi di hadapan sudut 30°.",
                "Pilih mode hipotenusa 30-60-90 pada kalkulator.",
                "Masukkan kaki pendek sebagai bilangan positif.",
                "Pilih satuan yang sesuai dengan soal lainnya.",
                "Klik Hitung Hipotenusa c.",
                "Baca hasilnya, yaitu hipotenusa dalam satuan yang sama.",
              ],
            },
            {
              "kind": "p",
              "text": "Mode ini menerapkan rumus di bawah ini.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Dengan kaki pendek 8 cm, hipotenusanya adalah [[c = 16]] cm. Kaki panjang segitiga yang sama adalah [[8\\sqrt{3} \\approx 13.856]] cm, yang terletak di antara kaki pendek dan hipotenusa, sebagaimana mestinya. Jika hasil yang keluar lebih kecil dari kaki pendek, mode yang dipilih salah.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Contoh Langkah demi Langkah untuk Kedua Jenis Segitiga Istimewa",
          "blocks": [
            {
              "kind": "p",
              "text": "Dua contoh pengerjaan ini menyelesaikan semua sisi dari setiap jenis segitiga dari satu sisi yang diketahui. Luas dan keliling muncul di sini sebagai perhitungan manual tambahan, bukan sebagai mode kalkulator: kalkulator di halaman ini hanya mencari panjang sisi.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Segitiga 45-45-90",
            },
            {
              "kind": "p",
              "text": "Diketahui segitiga 45-45-90 dengan kaki [[a = 5]] cm, carilah kaki lainnya, hipotenusa, luas, dan keliling.",
            },
            {
              "kind": "p",
              "text": "Kaki-kakinya sama, sehingga kaki lainnya adalah [[b = 5]] cm. Hipotenusa mengikuti dari rasionya.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "Luasnya adalah setengah hasil kali kedua kaki.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Keliling adalah jumlah ketiga sisinya.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Segitiga 30-60-90",
            },
            {
              "kind": "p",
              "text": "Diketahui segitiga 30-60-90 dengan kaki pendek [[a = 5]] cm, carilah kaki panjang, hipotenusa, luas, dan keliling.",
            },
            {
              "kind": "p",
              "text": "Kaki panjang adalah kaki pendek dikali √3, dan hipotenusa adalah dua kali kaki pendek.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "Luasnya adalah setengah hasil kali kedua kaki.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Keliling adalah jumlah ketiga sisinya.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Kedua contoh itu benar menurut teorema Pythagoras. Untuk yang pertama, [[5^2 + 5^2 = 50]] dan [[7.071^2 \\approx 50]]. Untuk yang kedua, [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]].",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Hubungan Luas dan Keliling pada Segitiga Siku-Siku Istimewa",
          "blocks": [
            {
              "kind": "p",
              "text": "Luas dan keliling adalah perhitungan lanjutan yang berguna setelah sisi-sisinya diketahui, tetapi keduanya adalah hubungan manual, bukan fungsi kalkulator di halaman ini. Rumus-rumus di bawah ini menggunakan label sisi yang sama seperti bagian lain panduan ini, dengan [[a]] sebagai kaki yang diketahui untuk 45-45-90 dan kaki pendek untuk 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga 45-45-90, luasnya adalah setengah kuadrat sebuah kaki, dan kelilingnya adalah kaki dikali [[2 + \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga 30-60-90, luasnya adalah setengah hasil kali kedua kaki, dan kelilingnya adalah kaki pendek dikali [[3 + \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Ambil segitiga 45-45-90 dengan kaki 6 cm. Luasnya adalah [[A = \\frac{36}{2} = 18]] cm², dan kelilingnya adalah [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm. Ambil segitiga 30-60-90 dengan kaki pendek 6 cm. Luasnya adalah [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm², dan kelilingnya adalah [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm. Perhatikan satuannya: luas selalu dalam satuan persegi dan keliling dalam satuan panjang, sehingga jawaban 18 cm untuk luas adalah kesalahan satuan, bukan kesalahan pembulatan.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Jawaban Akar Eksak versus Pendekatan Desimal",
          "blocks": [
            {
              "kind": "p",
              "text": "Akar kuadrat dalam panduan ini adalah bilangan irasional, yang berarti ekspansi desimalnya tidak pernah berakhir dan tidak pernah berulang. Dua nilai yang perlu diketahui ditunjukkan di bawah ini.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Jawaban eksak mempertahankan akarnya, seperti [[5\\sqrt{2}]], sedangkan jawaban desimal menggantinya dengan pendekatan, seperti [[5\\sqrt{2} \\approx 7.071]]. Jawaban eksak lebih disukai dalam matematika sekolah karena tidak mengandung kesalahan pembulatan dan menunjukkan struktur soalnya. Seorang guru dapat langsung melihat bahwa [[5\\sqrt{2}]] berasal dari segitiga 45-45-90, sedangkan 7.071 bisa berasal dari mana saja.",
            },
            {
              "kind": "p",
              "text": "Desimal lebih baik untuk pengukuran praktis, ketika penggaris atau alat potong membutuhkan angka, bukan simbol. Jika desimal dibutuhkan, bulatkan hanya pada akhir perhitungan, jangan pernah di tengah. Membulatkan √2 menjadi 1.41 sebelum mengalikannya dengan 5 menghasilkan 7.05, yang meleset 0.021 dari nilai benar 7.071, dan kesalahannya membesar pada angka yang lebih besar. Beri label setiap desimal dengan tanda kurang-lebih sama dengan, agar pembaca tidak pernah mengira [[5\\sqrt{3} \\approx 8.660]] sebagai kesamaan eksak.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cara Memverifikasi Perhitungan Segitiga Siku-Siku Istimewa",
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap jawaban segitiga istimewa dapat diperiksa dalam waktu kurang dari satu menit dengan tiga pengujian: rasio sisi, teorema Pythagoras, dan jumlah sudut. Jalankan setidaknya dua di antaranya sebelum mempercayai sebuah hasil.",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga 45-45-90, periksa bahwa kaki-kakinya sama, [[a = b]], dan sisi-sisinya memenuhi teorema Pythagoras, [[a^2 + b^2 = c^2]]. Dengan [[a = 5]] cm dan [[c = 7.071]] cm, pemeriksaannya adalah [[25 + 25 = 50]] terhadap [[7.071^2 \\approx 50]], yang cocok.",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga 30-60-90, periksa bahwa kaki panjang adalah kaki pendek dikali √3, [[b = a\\sqrt{3}]], bahwa hipotenusa adalah dua kali kaki pendek, [[c = 2a]], dan bahwa [[a^2 + b^2 = c^2]]. Dengan [[a = 5]] cm, [[b = 8.660]] cm, dan [[c = 10]] cm, pemeriksaannya adalah [[25 + 75 = 100 = 10^2]], yang cocok.",
            },
            {
              "kind": "p",
              "text": "Periksa juga jumlah sudutnya: ketiga sudut harus berjumlah 180°. Segitiga 45-45-90 menghasilkan [[45° + 45° + 90° = 180°]], dan segitiga 30-60-90 menghasilkan [[30° + 60° + 90° = 180°]]. Jika rasio, teorema, dan sudut-sudutnya semuanya cocok, jawabannya kokoh. Jika salah satu gagal, jenis segitiganya salah dikenali atau rumus yang digunakan salah.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Kesalahan Umum saat Menyelesaikan Segitiga Siku-Siku Istimewa",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat belas kesalahan menyebabkan hampir setiap jawaban salah dalam topik ini. Masing-masing tercantum di bawah ini beserta pendekatan yang benar, sehingga Anda dapat menemukan kesalahan Anda sendiri dengan cepat.",
            },
            {
              "kind": "list",
              "items": [
                "Mencampuradukkan segitiga 45-45-90 dengan 30-60-90. Periksa sudutnya terlebih dahulu: dua sudut 45° berarti 45-45-90, sedangkan 30° dan 60° berarti 30-60-90.",
                "Menggunakan √3 sebagai pengganti √2. Hipotenusa 45-45-90 adalah [[c = a\\sqrt{2}]], bukan [[a\\sqrt{3}]].",
                "Menggunakan √2 sebagai pengganti √3. Kaki panjang 30-60-90 adalah [[b = a\\sqrt{3}]], bukan [[a\\sqrt{2}]].",
                "Menganggap kedua kaki sama panjang pada segitiga 30-60-90. Hanya segitiga 45-45-90 yang memiliki kaki sama panjang; pada 30-60-90 kaki panjangnya √3 kali kaki pendek.",
                "Menganggap kaki pendek dan kaki panjang sama. Kaki pendek terletak di hadapan 30° dan kaki panjang di hadapan 60°, sehingga keduanya berbeda dengan faktor √3.",
                "Lupa bahwa hipotenusa 30-60-90 sama dengan dua kali kaki pendek. Hipotenusa itu adalah [[c = 2a]], penggandaan bilangan bulat tanpa akar kuadrat.",
                "Menggunakan sisi masukan yang salah. Mode 3 dan Mode 4 sama-sama membutuhkan kaki pendek, sehingga memasukkan kaki panjang atau hipotenusa menghasilkan jawaban yang salah.",
                "Mencampuradukkan kaki pendek dengan hipotenusa. Hipotenusa adalah sisi terpanjang dan terletak di hadapan sudut 90°; kaki pendek adalah sisi terpendek.",
                "Lupa membagi dengan √2 saat mencari kaki 45-45-90. Kakinya adalah [[a = \\frac{c}{\\sqrt{2}}]], bukan [[a = c\\sqrt{2}]], yang akan membuat kaki lebih panjang dari hipotenusa.",
                "Lupa mengalikan dengan √3 saat mencari kaki panjang 30-60-90. Kaki panjangnya adalah [[b = a\\sqrt{3}]], dan menggunakan [[a]] saja hanya mengembalikan kaki pendek.",
                "Membulatkan akar terlalu dini. Pertahankan [[\\sqrt{2}]] dan [[\\sqrt{3}]] tetap eksak di setiap langkah dan bulatkan hanya jawaban akhirnya.",
                "Mencampur satuan. Kaki dalam cm dan hipotenusa dalam mm tidak dapat berbagi satu rumus; ubah dulu satuannya, baru hitung.",
                "Mencampuradukkan luas dan keliling. Luas menggunakan satuan persegi dan rumus [[A = \\frac{a^2}{2}]] untuk 45-45-90, sedangkan keliling menggunakan satuan panjang dan [[P = a(2 + \\sqrt{2})]].",
                "Menerapkan rumus segitiga istimewa pada segitiga siku-siku sembarang. Rasio 1:1:√2 dan 1:√3:2 hanya berlaku untuk pola sudutnya masing-masing; segitiga 20-70-90 membutuhkan trigonometri.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Penerapan Praktis Segitiga Siku-Siku Istimewa",
          "blocks": [
            {
              "kind": "p",
              "text": "Segitiga siku-siku istimewa muncul di mana pun persegi, segitiga sama sisi, dan sudut standar muncul. Diagonal persegi adalah soal 45-45-90: meja persegi dengan sisi 60 cm memiliki diagonal [[60\\sqrt{2} \\approx 84.853]] cm. Tinggi segitiga sama sisi adalah soal 30-60-90: papan tanda segitiga dengan sisi 40 cm memiliki tinggi [[20\\sqrt{3} \\approx 34.641]] cm.",
            },
            {
              "kind": "p",
              "text": "Di kelas, segitiga-segitiga ini membuat tugas geometri dan latihan trigonometri lebih cepat, karena sudut standar seperti 30°, 45°, dan 60° memiliki nilai sinus dan kosinus eksak yang langsung berasal dari rasio-rasio ini. Dalam gambar teknik dan penggambaran sudut standar, penggaris segitiga 45° dan 30-60 dibangun tepat di atas segitiga-segitiga ini, sehingga seorang juru gambar dapat membuat garis 45° atau garis 30° dengan mengetahui proporsi sisinya terlebih dahulu.",
            },
            {
              "kind": "p",
              "text": "Konsep arsitektur dan desain menggunakan pola yang sama untuk penguat diagonal, kemiringan atap, dan susunan ubin, dan geometri konstruksi menggunakannya untuk pemeriksaan cepat di lapangan, seperti memastikan sudut siku-siku dengan mengukur diagonal gaya 3-4-5 atau diagonal 45-45-90. Pemodelan matematika dan demonstrasi kelas juga menggunakannya, karena jawaban akar eksak membuat penalarannya tetap terlihat, bukan tersembunyi di dalam kalkulator. Perlakukan ini sebagai jalan pintas geometri untuk perencanaan dan pemeriksaan, bukan sebagai pengganti pengukuran teknik yang benar ketika ketelitian diperlukan.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Soal Latihan Beserta Jawabannya",
          "blocks": [
            {
              "kind": "p",
              "text": "Kerjakan setiap soal sendiri, lalu periksa penyelesaiannya. Soal luas dan keliling adalah latihan manual, bukan mode kalkulator. Gunakan angka yang berbeda dari contoh utama agar polanya harus diterapkan dari awal.",
            },
            {
              "kind": "h3",
              "text": "Soal 45-45-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Segitiga 45-45-90 memiliki kaki 7 cm. Carilah hipotenusanya. Penyelesaian: [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "Segitiga 45-45-90 memiliki hipotenusa 12 cm. Carilah sebuah kaki. Penyelesaian: [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "Segitiga 45-45-90 memiliki kaki 9 cm. Carilah luasnya. Penyelesaian: [[A = \\frac{81}{2} = 40.5]] cm².",
                "Segitiga 45-45-90 memiliki kaki 4 cm. Carilah kelilingnya. Penyelesaian: [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "Soal 30-60-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Segitiga 30-60-90 memiliki kaki pendek 7 cm. Carilah kaki panjangnya. Penyelesaian: [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "Segitiga 30-60-90 memiliki kaki pendek 9 cm. Carilah hipotenusanya. Penyelesaian: [[c = 2 \\times 9 = 18]] cm.",
                "Segitiga 30-60-90 memiliki kaki pendek 6 cm. Carilah luasnya. Penyelesaian: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "Segitiga 30-60-90 memiliki kaki pendek 10 cm. Carilah kelilingnya. Penyelesaian: [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Setiap alat di bawah ini menyelesaikan jenis soal segitiga siku-siku yang berbeda. Pilih yang sesuai dengan informasi yang sudah Anda miliki.",
      "relatedItems": [
        "Kalkulator Segitiga 45-45-90",
        "Kalkulator Segitiga 30-60-90",
        "Kalkulator Sisi Segitiga Siku-Siku",
        "Kalkulator Rasio Trigonometri",
        "Kalkulator Sudut Segitiga Siku-Siku",
        "Kalkulator Teorema Pythagoras",
      ],
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Apa itu segitiga siku-siku istimewa?",
          "answer": "Segitiga siku-siku istimewa adalah segitiga siku-siku yang sudut-sudutnya menentukan rasio sisinya, sehingga satu sisi yang diketahui menentukan semua sisi lainnya. Kedua jenisnya adalah segitiga 45-45-90, dengan rasio [[1 : 1 : \\sqrt{2}]], dan segitiga 30-60-90, dengan rasio [[1 : \\sqrt{3} : 2]].",
        },
        {
          "question": "Segitiga siku-siku istimewa apa saja yang dicakup kalkulator ini?",
          "answer": "Kalkulator ini mencakup segitiga 45-45-90 dan segitiga 30-60-90, dua segitiga siku-siku istimewa yang digunakan dalam geometri sekolah. Kalkulator ini memiliki empat mode: hipotenusa 45-45-90 dari kaki, kaki 45-45-90 dari hipotenusa, kaki panjang 30-60-90 dari kaki pendek, dan hipotenusa 30-60-90 dari kaki pendek.",
        },
        {
          "question": "Berapa rasio sisi segitiga 45-45-90?",
          "answer": "Rasio sisi segitiga 45-45-90 adalah [[1 : 1 : \\sqrt{2}]]. Kedua kakinya sama panjang, dan hipotenusanya adalah kaki dikali √2, sekitar 1.414. Dengan kaki 5 cm, hipotenusanya adalah [[5\\sqrt{2} \\approx 7.071]] cm.",
        },
        {
          "question": "Berapa rasio sisi segitiga 30-60-90?",
          "answer": "Rasio sisi segitiga 30-60-90 adalah [[1 : \\sqrt{3} : 2]]. Kaki pendek terletak di hadapan 30°, kaki panjang di hadapan 60°, dan hipotenusa di hadapan 90°. Dengan kaki pendek 5 cm, kaki panjangnya adalah [[5\\sqrt{3} \\approx 8.660]] cm dan hipotenusanya 10 cm.",
        },
        {
          "question": "Mengapa √2 muncul pada segitiga 45-45-90?",
          "answer": "√2 berasal dari teorema Pythagoras yang diterapkan pada dua kaki yang sama. Dengan [[a = b]], teorema itu menghasilkan [[a^2 + a^2 = c^2]], sehingga [[2a^2 = c^2]] dan [[c = a\\sqrt{2}]]. Akar itu adalah harga yang harus dibayar untuk mengubah dua kuadrat yang sama menjadi satu kuadrat hipotenusa.",
        },
        {
          "question": "Mengapa √3 muncul pada segitiga 30-60-90?",
          "answer": "√3 berasal dari membagi segitiga sama sisi menjadi dua. Garis tinggi membagi segitiga sama sisi dengan sisi [[2a]] menjadi dua segitiga 30-60-90, dan teorema Pythagoras pada salah satu bagiannya menghasilkan [[b^2 = 3a^2]], sehingga kaki panjangnya adalah [[b = a\\sqrt{3}]].",
        },
        {
          "question": "Bagaimana cara mencari hipotenusa segitiga 45-45-90?",
          "answer": "Kalikan salah satu kaki yang sama dengan √2. Rumusnya adalah [[c = a\\sqrt{2}]]. Contohnya, kaki 7 cm menghasilkan hipotenusa [[7\\sqrt{2} \\approx 9.899]] cm. Pilih mode hipotenusa 45-45-90, masukkan kakinya, lalu klik Hitung.",
        },
        {
          "question": "Bagaimana cara mencari kaki panjang segitiga 30-60-90?",
          "answer": "Kalikan kaki pendek dengan √3. Rumusnya adalah [[b = a\\sqrt{3}]]. Contohnya, kaki pendek 6 cm menghasilkan kaki panjang [[6\\sqrt{3} \\approx 10.392]] cm. Pastikan Anda memasukkan kaki pendek, sisi di hadapan sudut 30°, bukan hipotenusa.",
        },
        {
          "question": "Bisakah saya menghitung kaki yang hilang dari hipotenusa?",
          "answer": "Ya, untuk segitiga 45-45-90. Bagilah hipotenusa dengan √2, menggunakan [[a = \\frac{c}{\\sqrt{2}}]] atau bentuk rasional [[a = \\frac{c\\sqrt{2}}{2}]]. Hipotenusa 10 cm menghasilkan kaki [[5\\sqrt{2} \\approx 7.071]] cm, dan kedua kaki berbagi panjang itu.",
        },
        {
          "question": "Apakah semua segitiga siku-siku istimewa sebangun dalam jenisnya masing-masing?",
          "answer": "Ya. Setiap segitiga 45-45-90 memiliki sudut yang sama dan rasio 1:1:√2 yang sama, sehingga dua segitiga mana pun sebangun. Setiap segitiga 30-60-90 juga berbagi rasio 1:√3:2. Segitiga 45-45-90 tidak pernah sebangun dengan segitiga 30-60-90, karena sudut-sudutnya berbeda.",
        },
        {
          "question": "Apa perbedaan antara kedua jenis segitiga istimewa?",
          "answer": "Segitiga 45-45-90 memiliki dua kaki sama panjang dan rasio 1:1:√2, sedangkan segitiga 30-60-90 memiliki tiga sisi yang berbeda dan rasio 1:√3:2. Yang pertama berasal dari diagonal persegi, yang kedua dari garis tinggi segitiga sama sisi, dan rumus-rumusnya tidak dapat ditukar.",
        },
        {
          "question": "Bagaimana cara memverifikasi panjang sisi yang saya hitung?",
          "answer": "Periksa rasio sisi, teorema Pythagoras, dan jumlah sudut. Untuk 45-45-90, pastikan [[a = b]] dan [[a^2 + b^2 = c^2]]. Untuk 30-60-90, pastikan [[b = a\\sqrt{3}]], [[c = 2a]], dan [[a^2 + b^2 = c^2]]. Jika ketiga pemeriksaan itu cocok, jawabannya kokoh.",
        },
      ],
    },
};
