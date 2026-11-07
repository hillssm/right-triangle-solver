// fortyFiveGuideTranslations.bid.ts: 45-45-90 Triangle
// Guide (Page 40 of 45) translation.
export const FORTYFIVE_B5_ID = {
  "id": {
      "meta": {
        "title": "Kalkulator Segitiga 45-45-90 - Hipotenusa, Kaki, Luas, Keliling",
        "description": "Cari hipotenusa, kaki yang belum diketahui, luas, dan keliling segitiga 45-45-90 dari satu kaki yang diketahui menggunakan perbandingan tetap 1:1:√2 dan jawaban bentuk akar yang eksak.",
        "primaryKeyword": "45-45-90 Triangle Calculator",
        "slug": "45-45-90-triangle-calculator",
      },
      "tocHeading": "Navigasi Bagian",
      "tocItems": {
        "sec-intro": "Kalkulator Segitiga 45-45-90",
        "sec-calculate": "Menghitung Hipotenusa, Kaki, Luas, atau Keliling",
        "sec-what": "Apa Itu Segitiga 45-45-90?",
        "sec-isosceles": "Mengapa Disebut Segitiga Siku-Siku Sama Kaki?",
        "sec-legs": "Memahami Dua Kaki yang Sama dan Hipotenusa",
        "sec-ratio": "Perbandingan Sisi Segitiga 45-45-90",
        "sec-why-sqrt2": "Mengapa Akar Kuadrat dari 2 Muncul?",
        "sec-hypotenuse": "Rumus Mencari Hipotenusa dari Satu Kaki",
        "sec-leg-hyp": "Rumus Mencari Kaki dari Hipotenusa",
        "sec-area": "Cara Menghitung Luas Segitiga 45-45-90",
        "sec-perimeter": "Cara Menghitung Keliling Segitiga 45-45-90",
        "sec-square": "Bagaimana Diagonal Persegi Membentuk Segitiga 45-45-90",
        "sec-step-example": "Contoh Langkah demi Langkah Menyelesaikan Segitiga 45-45-90",
        "sec-examples": "Contoh Soal Perhitungan Segitiga 45-45-90",
        "sec-exact": "Jawaban Eksak versus Pendekatan Desimal",
        "sec-verify": "Cara Memeriksa Perhitungan Segitiga 45-45-90 Anda",
        "sec-properties": "Sifat-Sifat Penting Segitiga 45-45-90",
        "sec-vs-3060": "Perbedaan Segitiga 45-45-90 dan 30-60-90",
        "sec-mistakes": "Kesalahan Umum Saat Menyelesaikan Segitiga 45-45-90",
        "sec-applications": "Penerapan Praktis Segitiga 45-45-90",
        "sec-practice": "Soal Latihan Beserta Jawabannya",
        "sec-related": "Kalkulator Segitiga Siku-Siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Cari hipotenusa, kaki yang belum diketahui, luas, dan keliling segitiga 45-45-90 dari satu sisi yang diketahui.",
            },
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 adalah segitiga siku-siku yang ketiga sudutnya berukuran 45°, 45°, dan 90°. Segitiga ini disebut segitiga siku-siku sama kaki karena kedua kakinya sama panjang, dan disebut segitiga siku-siku istimewa karena sisi-sisinya selalu mengikuti perbandingan tetap yang sama, sebesar apa pun segitiganya. Kalkulator segitiga 45-45-90 di halaman ini menggunakan perbandingan tersebut untuk mencari hipotenusa, kaki yang belum diketahui, luas, dan keliling dari satu panjang sisi yang Anda masukkan.",
            },
            {
              "kind": "p",
              "text": "Dalam segitiga ABC, sudut A adalah 45°, sudut B adalah 45°, dan sudut C adalah 90°. Sisi BC adalah kaki pertama [[a]], sisi AC adalah kaki kedua [[b]], dan sisi AB adalah hipotenusa [[c]]. Karena kedua sudut lancip sama besar, kedua kakinya sama panjang, [[a = b]], dan ketiga sisinya selalu memenuhi perbandingan [[a : b : c = 1 : 1 : \\sqrt{2}]], yang berarti [[c = a\\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Jika [[a = 5]] cm, maka kaki kedua adalah [[b = 5]] cm, hipotenusanya adalah [[c = 5\\sqrt{2} \\approx 7.071]] cm, dan luasnya adalah [[A = \\frac{25}{2} = 12.5]] cm². Kalkulator ini juga dapat menghitung keliling dari kaki yang sama, jadi satu ukuran saja sudah cukup untuk menggambarkan seluruh segitiga. Bagian-bagian di bawah ini menjelaskan perbandingan, keempat mode kalkulator, dan rumus-rumusnya, dengan contoh soal pada setiap langkah.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Menghitung Hipotenusa, Kaki, Luas, atau Keliling",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat mode mencakup semua cara memulai dari satu sisi yang diketahui.",
            },
            {
              "kind": "p",
              "text": "Kalkulator di halaman ini memiliki empat mode, satu untuk setiap ukuran yang dapat dicari. Pilih mode yang sesuai dengan sisi yang Anda ketahui dan ukuran yang Anda butuhkan. Setiap mode hanya meminta satu masukan, karena perbandingan tetap akan melengkapi sisanya. Tabel di bawah ini mencantumkan keempat mode beserta masukan yang dibutuhkan dan hasil yang dikembalikan.",
            },
            {
              "kind": "p",
              "text": "Untuk menggunakan sebuah mode, tentukan dulu sisi mana yang Anda ketahui. Sisi yang berhadapan dengan sudut 45° adalah kaki, dan kedua kaki dapat dipakai sebagai [[a]], karena kaki-kakinya sama panjang. Sisi yang berhadapan dengan sudut 90° adalah hipotenusa [[c]]. Masukkan ukuran tersebut sebagai bilangan positif, pilih satuan, lalu klik tombol Hitung. Hasilnya muncul beserta langkah-langkah pengerjaan, sehingga Anda dapat melihat rumus dan substitusinya, bukan hanya jawabannya. Gunakan Atur Ulang untuk mengosongkan kolom sebelum memulai soal baru.",
            },
            {
              "kind": "p",
              "text": "Mode yang berbeda membutuhkan rumus yang berbeda karena masing-masing berawal dari sisi yang berbeda. Mencari hipotenusa dari kaki berarti mengalikan dengan √2, sedangkan mencari kaki dari hipotenusa berarti membagi dengan √2. Mode luas menguadratkan kaki lalu membagi hasilnya dengan dua, dan mode keliling menjumlahkan ketiga sisinya. Anda tidak perlu menghitung sisi yang belum diketahui sendiri sebelum menggunakan mode luas atau keliling, karena kalkulator akan mencarinya terlebih dahulu secara internal.",
            },
            {
              "kind": "p",
              "text": "Keempat rumusnya adalah [[c = a\\sqrt{2}]] untuk hipotenusa, [[a = \\frac{c}{\\sqrt{2}}]] untuk kaki, [[A = \\frac{a^2}{2}]] untuk luas, dan [[P = a(2 + \\sqrt{2})]] untuk keliling. Jaga agar satuannya tetap sama selama perhitungan: kaki yang dimasukkan dalam sentimeter menghasilkan hipotenusa dalam sentimeter dan luas dalam sentimeter persegi. Kalkulator ini tidak mencari jari-jari lingkaran luar, jari-jari lingkaran dalam, atau ukuran untuk segitiga yang bukan segitiga 45-45-90, jadi pastikan sudut-sudutnya sebelum Anda menggunakannya.",
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
                "Mencari hipotenusa dari kaki",
                "Kaki a",
                "Hipotenusa c",
              ],
              [
                "Mencari kaki dari hipotenusa",
                "Hipotenusa c",
                "Kaki a",
              ],
              [
                "Mencari luas dari kaki",
                "Kaki a",
                "Luas A",
              ],
              [
                "Mencari keliling dari kaki",
                "Kaki a",
                "Keliling P",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Apa Itu Segitiga 45-45-90?",
          "blocks": [
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 dinamai berdasarkan ketiga sudutnya.",
            },
            {
              "kind": "p",
              "text": "Segitiga ini adalah segitiga siku-siku, yang berarti salah satu sudutnya tepat 90°. Dua sudut lainnya sama-sama 45°, dan namanya mencantumkan ketiga sudut secara berurutan. Karena sudut siku-sikunya tetap dan kedua sudut lainnya juga tetap, bentuk segitiga ini sepenuhnya ditentukan: setiap segitiga 45-45-90 memiliki bentuk yang sama, dan dua segitiga semacam itu hanya berbeda ukuran.",
            },
            {
              "kind": "p",
              "text": "Segitiga ini disebut segitiga siku-siku istimewa karena panjang sisi-sisinya mengikuti perbandingan tetap. Pada kebanyakan segitiga siku-siku, mengetahui satu sisi tidak memberi tahu apa pun tentang sisi lainnya. Pada segitiga 45-45-90, mengetahui satu sisi berarti mengetahui semuanya, karena perbandingan [[1 : 1 : \\sqrt{2}]] mengunci ketiga sisi menjadi satu. Karena itulah kalkulator dapat mencari hipotenusa, luas, dan keliling hanya dari satu masukan.",
            },
            {
              "kind": "p",
              "text": "Ketiga sudut berjumlah 180°, sebagaimana mestinya pada setiap segitiga:",
            },
            {
              "kind": "p",
              "text": "[[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenusa adalah sisi terpanjang, karena sisi ini berhadapan dengan sudut terbesar, yaitu sudut 90°. Kedua kakinya sama panjang, karena keduanya berhadapan dengan sudut yang sama besar. Segitiga ini bisa sekecil beberapa milimeter atau sebesar sebidang tanah bangunan, dan sudut-sudutnya tetap sama sementara sisi-sisinya membesar bersama-sama. Perbandingannya pun tetap sama, jadi segitiga dengan kaki 5 cm dan segitiga dengan kaki 5 m memiliki bentuk yang sama pada ukuran yang berbeda.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-main.svg",
            "alt": "Segitiga 45-45-90 ABC berlabel dengan sudut 45, 45, dan 90 derajat, kaki a dan b yang sama panjang, serta hipotenusa c",
            "caption": "Segitiga ABC: sudut 45°, 45°, dan 90°, dengan kaki a dan b yang sama panjang serta hipotenusa c.",
          },
        },
        "sec-isosceles": {
          "h2": "Mengapa Disebut Segitiga Siku-Siku Sama Kaki?",
          "blocks": [
            {
              "kind": "p",
              "text": "Nama ini terdiri dari dua bagian, dan masing-masing menjelaskan satu fakta.",
            },
            {
              "kind": "p",
              "text": "Sama kaki berarti segitiga dengan dua sisi yang sama panjang. Pada segitiga 45-45-90, kedua sisi yang sama panjang itu adalah kaki [[a]] dan [[b]]. Segitiga siku-siku berarti segitiga dengan satu sudut 90°. Gabungkan kedua kata itu dan namanya menjelaskan dengan tepat apa segitiga ini: segitiga siku-siku dengan dua sisi yang sama panjang.",
            },
            {
              "kind": "p",
              "text": "Kaki-kaki yang sama panjang mengikuti sudut-sudut yang sama besar. Pada segitiga apa pun, sudut yang sama besar berhadapan dengan sisi yang sama panjang. Di sini kedua sudut lancip sama-sama 45°, jadi sisi-sisi yang berhadapan dengannya harus sama panjang. Sisi yang berhadapan dengan sudut A adalah [[a]], dan sisi yang berhadapan dengan sudut B adalah [[b]], sehingga [[a = b]]. Ini bukan kebetulan pada satu gambar saja: hal ini berlaku untuk setiap segitiga 45-45-90, karena sudut-sudutnya selalu sama.",
            },
            {
              "kind": "p",
              "text": "Segitiga ini simetris terhadap garis tinggi yang ditarik dari titik sudut siku-siku ke hipotenusa. Garis tinggi itu bertemu hipotenusa di titik tengahnya dan membentuk sudut siku-siku, dan garis itu membagi segitiga besar menjadi dua segitiga kecil yang kongruen satu sama lain. Setiap segitiga kecil memiliki sudut 45°, 45°, dan 90°, sehingga masing-masing juga merupakan segitiga 45-45-90, pada skala setengahnya. Simetri itu adalah cara lain untuk melihat mengapa kedua kaki harus sama: lipatan sepanjang garis tinggi memetakan satu kaki ke kaki lainnya.",
            },
            {
              "kind": "p",
              "text": "Garis tinggi dari titik sudut siku-siku ke hipotenusa juga memiliki panjang yang berguna: panjangnya sama dengan setengah hipotenusa. Untuk segitiga dengan hipotenusa [[c]], garis tingginya adalah [[\\frac{c}{2}]]. Fakta ini berguna ketika soal menanyakan tinggi segitiga yang diukur dari hipotenusa, dan fakta ini adalah satu lagi akibat dari simetri bentuknya.",
            },
          ],
        },
        "sec-legs": {
          "h2": "Memahami Dua Kaki yang Sama dan Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Dua kaki bertemu di sudut siku-siku, dan hipotenusa berada di seberangnya.",
            },
            {
              "kind": "p",
              "text": "Kaki [[a]] adalah satu sisi tegak lurus, sisi BC pada segitiga ABC. Kaki [[b]] adalah sisi tegak lurus lainnya, sisi AC. Kedua kaki bertemu di titik sudut C, tempat keduanya membentuk sudut 90°, sehingga keduanya saling tegak lurus. Kedua kaki dapat dipakai sebagai alas segitiga, dengan kaki lainnya sebagai tinggi, itulah sebabnya rumus luas dapat menggunakan kedua kaki secara langsung.",
            },
            {
              "kind": "p",
              "text": "Hipotenusa [[c]] adalah sisi AB, yang berhadapan dengan sudut 90°. Sisi ini adalah sisi terpanjang pada segitiga, karena sudut terbesar selalu berhadapan dengan sisi terpanjang. Sisi ini juga satu-satunya sisi yang bukan kaki, jadi jangan sampai tertukar dengan salah satu kaki. Kedua kakinya sama panjang, tetapi hipotenusa tidak sama dengan keduanya: panjangnya √2 kali kaki mana pun, sekitar 1.414 kali lebih panjang.",
            },
            {
              "kind": "p",
              "text": "Karena kaki-kakinya sama panjang, salah satu dari keduanya dapat dipakai sebagai kaki yang diketahui pada kalkulator. Jika soal memberikan kaki [[b]] bukan kaki [[a]], masukkan nilai itu sebagai kaki: hasilnya sama, karena [[a = b]]. Kebebasan yang sama tidak berlaku untuk hipotenusa, yang membutuhkan modenya sendiri. Mengenali hipotenusa itu mudah pada gambar apa pun: carilah tanda persegi kecil pada sudut siku-siku, dan sisi yang berada di seberangnya adalah hipotenusa.",
            },
          ],
          "table": {
            "headers": [
              "Sisi",
              "Sudut berhadapan",
              "Panjang",
            ],
            "rows": [
              [
                "Kaki a (BC)",
                "45°",
                "a",
              ],
              [
                "Kaki b (AC)",
                "45°",
                "a, sama dengan kaki a",
              ],
              [
                "Hipotenusa c (AB)",
                "90°",
                "a√2, sisi terpanjang",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Perbandingan Sisi Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Perbandingan 1:1:√2 menentukan setiap segitiga 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Perbandingan sisi segitiga 45-45-90 adalah:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : 1 : \\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Setiap bagian perbandingan menggambarkan satu sisi. Kaki pertama mewakili satu satuan, kaki kedua juga mewakili satu satuan, dan hipotenusa mewakili √2 satuan. Ditulis dengan kaki sebagai [[a]], ketiga sisinya adalah [[a = a]], [[b = a]], dan [[c = a\\sqrt{2}]]. Jika kakinya 1 cm, kaki lainnya 1 cm dan hipotenusanya √2 cm. Jika kakinya 10 cm, kaki lainnya 10 cm dan hipotenusanya [[10\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Perbandingan ini tetap sama berapa pun ukuran segitiganya, karena semua segitiga 45-45-90 sebangun. Memperbesar atau memperkecil segitiga akan mengalikan setiap sisi dengan faktor yang sama, sehingga proporsi antar sisi tidak berubah. Ambil [[a = 4]] cm sebagai contoh: kaki kedua adalah [[b = 4]] cm dan hipotenusanya adalah [[c = 4\\sqrt{2} \\approx 5.657]] cm, dan perbandingan [[4 : 4 : 5.657]] sama dengan [[1 : 1 : \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Nilai √2 kira-kira 1.41421356. Bilangan ini irasional, sehingga ekspansi desimalnya tidak pernah berakhir dan tidak pernah berulang, dan tidak ada desimal yang sama persis dengannya. Pertahankan bentuk akar yang eksak kapan pun Anda bisa: menulis [[4\\sqrt{2}]] cm adalah eksak, sedangkan 5.657 cm adalah pendekatan yang dibulatkan. Gunakan bentuk eksak dalam pengerjaan Anda dan dalam jawaban akhir ketika soal meminta nilai eksak, dan berikan desimal hanya ketika jawaban pendekatan yang dibutuhkan.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-ratio.svg",
            "alt": "Tiga batang yang membandingkan dua kaki yang sama panjang dan hipotenusa dalam perbandingan 1 banding 1 banding akar kuadrat dari 2",
            "caption": "Perbandingan tetap 1:1:√2 membandingkan dua kaki yang sama panjang dengan hipotenusa.",
          },
        },
        "sec-why-sqrt2": {
          "h2": "Mengapa Akar Kuadrat dari 2 Muncul?",
          "blocks": [
            {
              "kind": "p",
              "text": "Akar kuadrat dari 2 berasal langsung dari teorema Pythagoras.",
            },
            {
              "kind": "p",
              "text": "Mulailah dengan kaki-kaki yang sama panjang, [[a = b]], lalu terapkan teorema Pythagoras, yang berlaku untuk setiap segitiga siku-siku:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Substitusikan kaki-kaki yang sama panjang, ganti [[b]] dengan [[a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Gabungkan kedua suku yang sama:",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ambil akar kuadrat positif dari kedua ruas. Panjang sisi bernilai positif, jadi akar negatif dibuang:",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Itulah seluruh alasan √2 muncul: dua kuadrat yang sama dijumlahkan menjadi dua kali satu kuadrat, dan akar kuadrat dari 2 adalah bilangan yang membatalkan penggandaan itu. Ini adalah hubungan istimewa, bukan jalan pintas pendekatan. Hubungan ini mengikuti kaki-kaki yang sama panjang ditambah Pythagoras, dan berlaku untuk setiap segitiga 45-45-90 tanpa kecuali.",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 5]] cm sebagai pemeriksaan numerik:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{5^2 + 5^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{50}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Langkah dari √50 ke [[5\\sqrt{2}]] berhasil karena [[50 = 25 \\times 2]], dan akar kuadrat dari 25 adalah 5. Menyederhanakan bentuk akar dengan cara ini menjaga jawaban tetap eksak dan membuat polanya terlihat: hipotenusa selalu sama dengan kaki dikali √2, berapa pun panjang kakinya.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-pythagoras.svg",
            "alt": "Penurunan Pythagoras yang menunjukkan a kuadrat ditambah a kuadrat sama dengan c kuadrat, sehingga c sama dengan a kali akar kuadrat dari 2",
            "caption": "Dari a² + a² = c², hipotenusa harus a√2.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Rumus Mencari Hipotenusa dari Satu Kaki",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalikan salah satu kaki dengan √2 untuk mendapatkan hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[c]] adalah hipotenusa dan [[a]] adalah salah satu kaki. Rumus ini adalah pembacaan langsung dari perbandingan sisi: hipotenusa mewakili √2 satuan untuk setiap 1 satuan kaki, sehingga hipotenusa adalah √2 kali kaki. Perkalian diperlukan karena perbandingan ini adalah hubungan penskalaan, dan √2 muncul karena Pythagoras memaksa hipotenusa menjadi sepanjang itu dibandingkan kaki.",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Hasilnya lebih panjang daripada kedua kaki, sebagaimana mestinya: √2 sekitar 1.414, jadi mengalikannya akan memperpanjang ukuran. Jawaban eksaknya adalah [[5\\sqrt{2}]] cm, dan 7.071 cm adalah pendekatan desimalnya. Pertahankan bentuk eksak ketika soal memintanya, dan bulatkan desimal hanya pada akhir pengerjaan Anda, jangan di tengah-tengah.",
            },
            {
              "kind": "p",
              "text": "Gunakan mode ini kapan pun kaki adalah sisi yang diketahui dan hipotenusa adalah sisi yang belum diketahui. Karena kaki-kakinya sama panjang, tidak masalah kaki mana yang diberikan soal: masukkan sebagai [[a]] dan rumusnya memberikan hipotenusa yang sama. Pemeriksaan cepat membantu: hipotenusa seharusnya sekitar 1.414 kali kaki. Jika jawaban Anda dua kali kaki, atau hanya sedikit lebih panjang dari kaki, Anda telah menggunakan pengali yang salah.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-hypotenuse.svg",
            "alt": "Segitiga 45-45-90 dengan kaki 5 cm dan hipotenusa berlabel 5 kali akar kuadrat dari 2, sekitar 7.071 cm",
            "caption": "Hipotenusa dari kaki: a = 5 cm menghasilkan c = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-leg-hyp": {
          "h2": "Rumus Mencari Kaki dari Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Bagi hipotenusa dengan √2 untuk mendapatkan kaki.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[a]] adalah salah satu kaki dan [[c]] adalah hipotenusa. Rumus ini berasal dari penyusunan ulang [[c = a\\sqrt{2}]]: membagi kedua ruas dengan √2 akan mengisolasi [[a]]. Membagi dengan √2 membalikkan perkalian semula, sehingga tepat membatalkan apa yang dilakukan rumus maju. Kaki lainnya memiliki panjang yang sama, jadi satu perhitungan memberikan kedua kaki sekaligus.",
            },
            {
              "kind": "p",
              "text": "Bentuk rasional biasanya lebih mudah dikerjakan:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Bentuk ini diperoleh dengan mengalikan pembilang dan penyebut [[\\frac{c}{\\sqrt{2}}]] dengan √2. Penyebutnya menjadi [[\\sqrt{2} \\times \\sqrt{2} = 2]], dan pembilangnya menjadi [[c\\sqrt{2}]]. Kedua bentuk memberikan nilai yang sama, tetapi bentuk rasional tidak memiliki akar kuadrat pada penyebut, yang merupakan bentuk yang diharapkan pada jawaban ujian.",
            },
            {
              "kind": "p",
              "text": "Gunakan [[c = 10]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{10}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Kedua kakinya adalah [[5\\sqrt{2}]] cm, masing-masing sekitar 7.071 cm. Kaki lebih pendek daripada hipotenusa, sebagaimana mestinya, karena membagi dengan bilangan yang lebih besar dari 1 akan mengecilkan nilainya. Jika jawaban Anda lebih panjang daripada hipotenusa, Anda telah mengalikan bukan membagi, atau membagi dengan bilangan yang salah.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-leg.svg",
            "alt": "Segitiga 45-45-90 dengan hipotenusa 10 cm dan setiap kaki berlabel 5 kali akar kuadrat dari 2, sekitar 7.071 cm",
            "caption": "Kaki dari hipotenusa: c = 10 cm menghasilkan a = b = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-area": {
          "h2": "Cara Menghitung Luas Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Luas hanya membutuhkan satu kaki, karena kaki-kakinya sama panjang.",
            },
            {
              "kind": "p",
              "text": "Luas segitiga siku-siku apa pun adalah setengah hasil kali kedua kakinya, karena kaki-kaki tersebut berperan sebagai alas dan tinggi yang tegak lurus:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Karena [[a = b]], substitusikan untuk mendapatkan luas hanya dari satu kaki:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Pembagian dengan dua diperlukan karena segitiga menutupi setengah persegi panjang yang dibentuk oleh kedua kakinya. Luas akhir dinyatakan dalam satuan persegi, misalnya sentimeter persegi, karena luas mengukur permukaan, bukan panjang. Persegi dengan sisi [[a]] memiliki luas [[a^2]], dan segitiga ini tepat setengah dari persegi itu, yang merupakan cara lain untuk melihat mengapa rumusnya adalah [[\\frac{a^2}{2}]].",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 6]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{36}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Mode luas pada kalkulator menerima kaki dan menghitung luas secara langsung, jadi Anda hanya memasukkan [[a]]. Jika Anda mengetahui hipotenusa bukan kaki, cari kakinya dulu dengan [[a = \\frac{c}{\\sqrt{2}}]], lalu gunakan [[A = \\frac{a^2}{2}]]. Ada juga jalan pintas dari hipotenusa saja: [[A = \\frac{c^2}{4}]], yang memberikan hasil yang sama. Untuk [[c = 10]] cm, [[A = \\frac{100}{4} = 25]] cm².",
            },
            {
              "kind": "p",
              "text": "Luas bertambah mengikuti kuadrat kaki, jadi menggandakan kaki akan melipatgandakan luas empat kali. Segitiga dengan [[a = 12]] cm memiliki luas empat kali luas segitiga [[a = 6]] cm, yaitu 72 cm² bukan 18 cm², bukan dua kali lipat. Hubungan kuadrat ini mudah terlupakan, jadi periksalah setiap kali soal memperbesar atau memperkecil segitiga.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-area-perimeter.svg",
            "alt": "Segitiga 45-45-90 dengan kaki 6 cm, hipotenusa 6 kali akar kuadrat dari 2 cm, luas 18 cm persegi dan keliling sekitar 20.485 cm",
            "caption": "Luas dan keliling dari kaki: a = 6 cm menghasilkan A = 18 cm² dan P ≈ 20.485 cm.",
          },
        },
        "sec-perimeter": {
          "h2": "Cara Menghitung Keliling Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Jumlahkan ketiga sisinya, lalu faktorkan kakinya.",
            },
            {
              "kind": "p",
              "text": "Keliling adalah panjang total mengelilingi segitiga:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Karena [[a = b]] dan [[c = a\\sqrt{2}]], substitusikan hubungan tersebut:",
            },
            {
              "kind": "p",
              "text": "[[[P = 2a + a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Faktorkan [[a]] untuk mendapatkan bentuk yang disederhanakan:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Ketiga panjang sisi disertakan, karena keliling menelusuri seluruh batas segitiga: turun sepanjang satu kaki, melintasi kaki lainnya, lalu kembali sepanjang hipotenusa. Menghilangkan satu sisi akan menghasilkan jarak yang lebih pendek dan bukan keliling. Keliling adalah ukuran linear, bukan ukuran luas, jadi jawabannya dalam satuan biasa seperti sentimeter, bukan sentimeter persegi.",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Bentuk eksaknya adalah [[10 + 5\\sqrt{2}]] cm, dan 17.071 cm adalah bentuk desimalnya. Mode keliling pada kalkulator menerima kaki dan menjumlahkan ketiga sisi secara internal. Ada juga jalan pintas dari hipotenusa saja: [[P = c(1 + \\sqrt{2})]]. Untuk [[c = 10]] cm, hasilnya [[P = 10(1 + \\sqrt{2}) \\approx 24.142]] cm. Keliling bertambah sebanding dengan kaki, jadi menggandakan kaki akan menggandakan keliling.",
            },
          ],
        },
        "sec-square": {
          "h2": "Bagaimana Diagonal Persegi Membentuk Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Satu diagonal membagi persegi menjadi dua segitiga 45-45-90 yang sama.",
            },
            {
              "kind": "p",
              "text": "Persegi memiliki empat sisi yang sama panjang dan empat sudut 90°. Tarik satu diagonal melintasinya, dari satu sudut ke sudut yang berlawanan, dan persegi terbagi menjadi dua segitiga. Setiap segitiga memiliki dua sisi yang merupakan sisi persegi, jadi kedua sisi itu sama panjang, dan sudut di antara keduanya adalah sudut persegi, 90°. Diagonal adalah sisi ketiga, yang berhadapan dengan sudut siku-siku itu, sehingga diagonal adalah hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Diagonal juga membagi dua sudut sudut yang dilaluinya. Setiap sudut persegi adalah 90°, dan diagonal membaginya menjadi dua sudut 45°. Hal itu membuat setiap segitiga memiliki sudut 45°, 45°, dan 90°, yang tepat merupakan segitiga 45-45-90. Kedua segitiga itu kongruen: keduanya memiliki panjang sisi dan sudut yang sama, karena keduanya berbagi diagonal dan masing-masing mengambil dua sisi dari persegi yang sama.",
            },
            {
              "kind": "p",
              "text": "Gunakan persegi dengan panjang sisi [[a]]. Diagonal [[d]] adalah hipotenusa segitiga, jadi Pythagoras memberikan:",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = a^2 + a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = 2a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan persegi dengan sisi 8 cm:",
            },
            {
              "kind": "p",
              "text": "[[[d = 8\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[d \\approx 11.314 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Inilah sebabnya perhitungan diagonal persegi selalu menggunakan hubungan √2 yang sama. Kapan pun Anda membutuhkan diagonal persegi, kalikan sisinya dengan √2; kapan pun Anda mengetahui diagonalnya dan membutuhkan sisinya, bagilah dengan √2. Aturan yang sama berlaku untuk ubin persegi, bingkai foto persegi, sebidang tanah persegi, dan bentuk persegi lainnya, karena setiap persegi terbagi dengan cara yang sama.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-square-diagonal.svg",
            "alt": "Persegi dengan sisi 8 cm yang dibagi diagonal menjadi dua segitiga 45-45-90 yang kongruen, diagonal sekitar 11.314 cm",
            "caption": "Diagonal persegi dengan sisi 8 cm adalah d = 8√2 ≈ 11.314 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Contoh Langkah demi Langkah Menyelesaikan Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Satu segitiga, a = 5 cm, dikerjakan dari awal sampai akhir.",
            },
            {
              "kind": "p",
              "text": "Mulailah dengan kaki [[a = 5]] cm dan cari setiap ukuran lain dari segitiga, satu rumus pada satu waktu. Setiap langkah menggunakan rumus dari bagian-bagian di atas, dan tabel ringkasan di akhir mengumpulkan hasilnya.",
            },
            {
              "kind": "steps",
              "steps": [
                "Cari kaki kedua: kaki-kakinya sama panjang, jadi [[b = 5]] cm.",
                "Cari hipotenusa: [[c = a\\sqrt{2} = 5\\sqrt{2} \\approx 7.071]] cm.",
                "Cari luas: [[A = \\frac{a^2}{2} = \\frac{25}{2} = 12.5]] sentimeter persegi.",
                "Cari keliling: [[P = a + b + c = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2} \\approx 17.071]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Keempat ukuran tersebut menggambarkan segitiga yang sama. Sisi-sisi [[5]], [[5]], dan [[7.071]] memenuhi perbandingan [[1 : 1 : \\sqrt{2}]] dan teorema Pythagoras, [[5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2]]. Luas dan keliling adalah dua jenis ukuran yang berbeda dari segitiga yang sama: luas menutupi permukaannya, sedangkan keliling menelusuri batasnya. Jika Anda mengubah kaki, setiap nilai lain ikut berubah, tetapi perbandingan antar sisi tidak pernah berubah.",
            },
          ],
          "table": {
            "headers": [
              "Ukuran",
              "Nilai eksak",
              "Nilai pendekatan",
            ],
            "rows": [
              [
                "Kaki a",
                "5 cm",
                "5 cm",
              ],
              [
                "Kaki b",
                "5 cm",
                "5 cm",
              ],
              [
                "Hipotenusa c",
                "5√2 cm",
                "7.071 cm",
              ],
              [
                "Luas A",
                "25/2 cm²",
                "12.5 cm²",
              ],
              [
                "Keliling P",
                "10 + 5√2 cm",
                "17.071 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Contoh Soal Perhitungan Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Delapan contoh soal, mencakup setiap mode kalkulator dan sebuah diagonal persegi.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Mencari Hipotenusa dari Kaki",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 4]] cm. Rumus: [[c = a\\sqrt{2}]]. Substitusi: [[c = 4\\sqrt{2}]]. Jawaban eksak: [[4\\sqrt{2}]] cm. Pendekatan desimal: [[c \\approx 5.657]] cm. Hipotenusa sekitar 1.414 kali kaki, jadi 4 cm menjadi sekitar 5.657 cm. Pertahankan bentuk eksak [[4\\sqrt{2}]] cm ketika soal meminta nilai eksak.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Mencari Hipotenusa dari Kaki yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 8]] cm. Rumus: [[c = a\\sqrt{2}]]. Substitusi: [[c = 8\\sqrt{2}]]. Jawaban eksak: [[8\\sqrt{2}]] cm. Pendekatan desimal: [[c \\approx 11.314]] cm. Ini adalah perhitungan yang sama dengan Contoh 1 pada skala dua kali lipat, dan jawabannya tepat dua kali lebih besar, yang menegaskan penskalaan linear panjang sisi. Nilai yang sama ini adalah diagonal persegi dengan sisi 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Mencari Kaki dari Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 12]] cm. Rumus: [[a = \\frac{c}{\\sqrt{2}}]]. Substitusi: [[a = \\frac{12}{\\sqrt{2}}]]. Merasionalkan menghasilkan [[a = 6\\sqrt{2}]] cm. Pendekatan desimal: [[a \\approx 8.485]] cm. Kedua kakinya adalah [[6\\sqrt{2}]] cm, karena kaki-kakinya sama panjang. Kaki lebih pendek daripada hipotenusa, sebagaimana mestinya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Mencari Kaki dari Hipotenusa yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 20]] cm. Rumus: [[a = \\frac{c\\sqrt{2}}{2}]]. Substitusi: [[a = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}]] cm. Pendekatan desimal: [[a \\approx 14.142]] cm. Kedua kakinya adalah [[10\\sqrt{2}]] cm. Pemeriksaan cepat: [[a\\sqrt{2} = 10\\sqrt{2} \\times \\sqrt{2} = 20]] cm, yang mengembalikan hipotenusa yang diberikan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Menghitung Luas",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 7]] cm. Rumus: [[A = \\frac{a^2}{2}]]. Substitusi: [[A = \\frac{49}{2}]]. Hasil: [[A = 24.5]] cm². Luas ini eksak, tanpa akar kuadrat dan tanpa pembulatan, karena [[7^2 = 49]] dibagi dua dengan bersih. Luas dinyatakan dalam satuan persegi, berbeda dengan panjang sisi, jadi satuannya cm², bukan cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Menghitung Keliling",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 6]] cm. Rumus: [[P = a(2 + \\sqrt{2})]]. Substitusi: [[P = 6(2 + \\sqrt{2})]]. Jawaban eksak: [[P = 12 + 6\\sqrt{2}]] cm. Pendekatan desimal: [[P \\approx 20.485]] cm. Menjumlahkan sisi-sisinya satu per satu memberikan hasil yang sama: [[6 + 6 + 6\\sqrt{2} = 12 + 6\\sqrt{2}]] cm. Keliling dinyatakan dalam satuan biasa, bukan satuan persegi.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Mencari Diagonal Persegi",
            },
            {
              "kind": "p",
              "text": "Diketahui persegi dengan sisi 10 m. Rumus: [[d = a\\sqrt{2}]]. Substitusi: [[d = 10\\sqrt{2}]] m. Jawaban eksak: [[10\\sqrt{2}]] m. Pendekatan desimal: [[d \\approx 14.142]] m. Diagonal membagi persegi menjadi dua segitiga 45-45-90, masing-masing dengan kaki 10 m dan hipotenusa [[10\\sqrt{2}]] m. Ini adalah rumus yang sama dengan mencari hipotenusa dari kaki, karena diagonal adalah hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Mencari Hipotenusa dari Kaki Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 2.5]] cm. Rumus: [[c = a\\sqrt{2}]]. Substitusi: [[c = 2.5\\sqrt{2}]]. Jawaban eksak: [[2.5\\sqrt{2}]] cm. Pendekatan desimal: [[c \\approx 3.536]] cm. Masukan desimal bekerja persis seperti masukan bilangan bulat: kalikan dengan √2, pertahankan bentuk eksak terlebih dahulu, dan bulatkan desimal hanya pada langkah akhir. Kaki kedua juga 2.5 cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban eksak dan pendekatan desimal memiliki tujuan yang berbeda. Bentuk eksak, seperti [[4\\sqrt{2}]] cm, tepat dan biasanya itulah yang diminta jawaban ujian. Bentuk desimal, seperti 5.657 cm, lebih mudah dibayangkan dan diukur dengan penggaris. Berikan bentuk eksak terlebih dahulu, lalu desimalnya, dan bulatkan desimal hanya pada langkah akhir.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Jawaban Eksak versus Pendekatan Desimal",
          "blocks": [
            {
              "kind": "p",
              "text": "Jawaban eksak mempertahankan √2; jawaban desimal membulatkannya.",
            },
            {
              "kind": "p",
              "text": "Bandingkan jawaban eksak [[5\\sqrt{2}]] cm dengan pendekatan desimal 7.071 cm. Yang pertama eksak: jawaban ini menyatakan panjang secara tepat, menggunakan simbol √2 untuk mewakili bilangan irasional yang kuadratnya adalah 2. Yang kedua dibulatkan: jawaban ini menyatakan panjang sampai tiga tempat desimal, yang mendekati nilai sebenarnya tetapi tidak sama dengannya. Selisihnya kecil, sekitar 0.00007 cm, tetapi nyata, dan penting dalam pembuktian dan perhitungan lanjutan.",
            },
            {
              "kind": "p",
              "text": "Bilangan √2 adalah irasional, yang berarti bilangan ini tidak dapat ditulis sebagai pecahan dari dua bilangan bulat, dan ekspansi desimalnya tidak pernah berakhir dan tidak pernah berulang. Bilangan ini dimulai dengan 1.41421356 dan berlanjut tanpa akhir. Desimal apa pun yang Anda tulis untuknya, sepanjang apa pun, adalah pendekatan. Itulah sebabnya notasi bentuk akar yang eksak lebih disukai dalam pembuktian matematika dan jawaban ujian yang meminta nilai eksak: bentuk akar mempertahankan ketelitian penuh yang hilang pada desimal.",
            },
            {
              "kind": "p",
              "text": "Pendekatan desimal lebih praktis ketika Anda perlu mengukur, memotong, atau membangun sesuatu. Penggaris tidak dapat mengukur [[5\\sqrt{2}]] cm secara langsung, tetapi dapat mengukur 7.071 cm. Tukang kayu yang memotong penopang diagonal membutuhkan desimal, sedangkan siswa yang membuktikan teorema membutuhkan bentuk eksak. Gunakan setiap bentuk pada tempatnya, dan beri label desimal sebagai pendekatan agar tidak ada yang mengira desimal itu nilai eksak.",
            },
            {
              "kind": "p",
              "text": "Pembulatan sebaiknya dilakukan pada akhir perhitungan, bukan di tengah-tengah. Jika Anda mengganti √2 dengan 1.41 di awal lalu mengalikannya, setiap langkah berikutnya membawa kesalahan itu. Untuk [[a = 5]] cm, menggunakan 1.41 menghasilkan [[c = 7.05]] cm, sedangkan pendekatan yang benar adalah 7.071 cm. Pertahankan √2 tetap eksak selama pengerjaan, dalam bentuk [[5\\sqrt{2}]], dan bulatkan hanya jawaban akhirnya. Jangan pernah menyajikan desimal yang dibulatkan seolah-olah itu nilai eksak.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cara Memeriksa Perhitungan Segitiga 45-45-90 Anda",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat pemeriksaan cepat dapat menangkap hampir semua kesalahan.",
            },
            {
              "kind": "p",
              "text": "Jalankan setidaknya satu pemeriksaan pada setiap jawaban, dan keempatnya ketika soalnya penting. Contoh di bawah ini menggunakan segitiga dengan [[a = 5]] cm, [[b = 5]] cm, dan [[c = 5\\sqrt{2} \\approx 7.071]] cm.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 1: Kaki yang Sama",
            },
            {
              "kind": "p",
              "text": "Periksa [[a = b]]. Di sini kedua kakinya 5 cm, jadi pemeriksaan lolos. Jika kedua kaki Anda berbeda, salah satunya salah, atau segitiganya sama sekali bukan segitiga 45-45-90. Ini adalah pemeriksaan tercepat, karena tidak membutuhkan hitungan: kedua kaki harus sama persis.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 2: Perbandingan Sisi",
            },
            {
              "kind": "p",
              "text": "Bagi hipotenusa dengan kaki: [[\\frac{c}{a} = \\sqrt{2} \\approx 1.414]]. Di sini [[\\frac{7.071}{5} \\approx 1.414]], jadi perbandingannya berlaku. Jika pembagiannya menghasilkan 2, Anda telah memakai penggandaan 30-60-90 karena keliru. Jika hasilnya sekitar 1.732, Anda telah memakai √3 karena keliru. Perbandingan [[\\frac{c}{a}]] harus √2, dan tidak ada yang lain.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 3: Teorema Pythagoras",
            },
            {
              "kind": "p",
              "text": "Periksa [[a^2 + b^2 = c^2]]. Di sini [[5^2 + 5^2 = 25 + 25 = 50]], dan [[(5\\sqrt{2})^2 = 25 \\times 2 = 50]], jadi teorema berlaku. Pemeriksaan ini menangkap kaki yang tertukar dan pengali yang salah, karena memakai nilai yang salah untuk sisi mana pun akan merusak kesamaan itu. <a href=\"/pythagorean-theorem-calculator/\">Kalkulator teorema Pythagoras</a> menjalankan pemeriksaan ini untuk tiga panjang sisi mana pun.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 4: Jumlah Sudut",
            },
            {
              "kind": "p",
              "text": "Periksa [[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]. Pemeriksaan ini menyangkut susunan soal bukan hitungannya: jika sudut-sudut segitiga Anda tidak berjumlah 180°, atau bukan 45°, 45°, dan 90°, rumus 45-45-90 sama sekali tidak berlaku, dan tidak ada panjang sisi darinya yang dapat dipercaya. Pastikan sudutnya terlebih dahulu, lalu percayalah pada sisi-sisinya.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Sifat-Sifat Penting Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh sifat mengikuti perbandingan tetap.",
            },
            {
              "kind": "list",
              "items": [
                "Segitiga selalu memiliki sudut 45°, 45°, dan 90°, dan sudut-sudut itu selalu berjumlah 180°.",
                "Kedua kakinya sama panjang, [[a = b]], karena keduanya berhadapan dengan sudut 45° yang sama besar.",
                "Hipotenusa adalah sisi terpanjang, karena sisi ini berhadapan dengan sudut 90°.",
                "Hipotenusa adalah √2 kali kaki mana pun, [[c = a\\sqrt{2}]], dengan [[\\sqrt{2} \\approx 1.41421356]].",
                "Semua segitiga 45-45-90 sebangun, karena ketiganya memiliki sudut yang sama dan proporsi sisi yang sama.",
                "Perbandingan sisi [[1 : 1 : \\sqrt{2}]] tidak bergantung pada ukuran segitiga, jadi memperbesar segitiga tidak mengubah perbandingannya.",
                "Garis tinggi ke hipotenusa membagi segitiga menjadi dua segitiga 45-45-90 kecil yang kongruen.",
                "Garis tinggi ke hipotenusa sama dengan setengah hipotenusa, [[\\frac{c}{2}]].",
                "Luasnya adalah setengah kuadrat kaki, [[A = \\frac{a^2}{2}]], jadi menggandakan kaki akan melipatgandakan luas empat kali.",
                "Kelilingnya adalah [[P = a(2 + \\sqrt{2})]], jadi menggandakan kaki akan menggandakan keliling.",
              ],
            },
            {
              "kind": "p",
              "text": "Setiap sifat mengikuti sudut-sudut dan perbandingannya, bukan dari satu contoh saja. Sudut-sudut yang sama memaksa kaki-kaki yang sama, kaki-kaki yang sama ditambah Pythagoras memaksa hipotenusa √2, dan hipotenusa √2 memaksa rumus luas dan keliling. Begitu Anda menerima ketiga sudutnya, semua yang lain sudah tetap, itulah sebabnya satu sisi yang diketahui sudah cukup untuk menggambarkan seluruh segitiga.",
            },
          ],
        },
        "sec-vs-3060": {
          "h2": "Perbedaan Segitiga 45-45-90 dan 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dua segitiga istimewa ini tampak mirip, tetapi perbandingannya tidak pernah tercampur.",
            },
            {
              "kind": "p",
              "text": "Keduanya adalah segitiga siku-siku istimewa, dan keduanya memungkinkan Anda mencari setiap sisi dari satu sisi yang diketahui. Perbedaannya ada pada sudut: segitiga 45-45-90 memiliki dua sudut lancip yang sama, sedangkan segitiga 30-60-90 memiliki dua sudut lancip yang berbeda. Satu perbedaan itu mengubah perbandingan sisi sepenuhnya, sehingga rumus untuk satu segitiga memberikan jawaban yang salah untuk segitiga lainnya.",
            },
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 adalah segitiga sama kaki, dengan dua kaki yang sama panjang, sedangkan segitiga 30-60-90 adalah segitiga sembarang, tanpa sisi yang sama. Pada segitiga 45-45-90 hipotenusa adalah √2 kali kaki, sedangkan pada segitiga 30-60-90 hipotenusa adalah dua kali kaki pendek. Kaki panjang segitiga 30-60-90 adalah √3 kali kaki pendek, dan tidak ada sisi yang cocok pada segitiga 45-45-90, karena kedua kakinya sama panjang. Untuk pembahasan lengkap tentang segitiga lainnya, lihat <a href=\"/30-60-90-triangle-calculator/\">Kalkulator segitiga 30-60-90</a>, yang menggunakan perbandingan 1:√3:2.",
            },
            {
              "kind": "p",
              "text": "Rumus-rumusnya tidak dapat dipertukarkan. Menggunakan [[c = 2a]] pada segitiga 45-45-90 dengan [[a = 5]] cm menghasilkan 10 cm, sedangkan hipotenusa yang benar sekitar 7.071 cm. Menggunakan [[c = a\\sqrt{2}]] pada segitiga 30-60-90 dengan kaki pendek 5 cm menghasilkan sekitar 7.071 cm, sedangkan hipotenusa yang benar adalah 10 cm. Selalu pastikan sudut-sudutnya sebelum memilih rumus: sudut lancip yang sama berarti 45-45-90, dan sudut 30° dan 60° berarti 30-60-90.",
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
                "Perbandingan sisi",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Sisi yang sama",
                "Dua kaki yang sama panjang",
                "Tidak ada kaki yang sama",
              ],
              [
                "Hipotenusa",
                "Kaki × √2",
                "Kaki pendek × 2",
              ],
              [
                "Kaki panjang",
                "Sama dengan kaki pendek",
                "Kaki pendek × √3",
              ],
              [
                "Jenis segitiga",
                "Siku-siku sama kaki",
                "Siku-siku sembarang",
              ],
            ],
          },
          "image": {
            "src": "forty-five-ninety-vs-3060.svg",
            "alt": "Dua segitiga siku-siku istimewa berdampingan, segitiga 45-45-90 dengan perbandingan 1 banding 1 banding akar kuadrat dari 2 dan segitiga 30-60-90 dengan perbandingan 1 banding akar kuadrat dari 3 banding 2",
            "caption": "45-45-90 memakai 1:1:√2; 30-60-90 memakai 1:√3:2. Perbandingan ini tidak boleh tertukar.",
          },
        },
        "sec-mistakes": {
          "h2": "Kesalahan Umum Saat Menyelesaikan Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat belas kesalahan muncul berulang kali dalam soal 45-45-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Menganggap hipotenusa sama dengan dua kali kaki: penggandaan adalah milik segitiga 30-60-90. Untuk [[a = 5]] cm, penggandaan menghasilkan 10 cm, sedangkan hipotenusa yang benar adalah [[5\\sqrt{2} \\approx 7.071]] cm. Benar: [[c = a\\sqrt{2}]].",
                "Menggunakan √3 bukan √2: √3 adalah milik segitiga 30-60-90, yang perbandingannya adalah [[1 : \\sqrt{3} : 2]]. Segitiga 45-45-90 selalu menggunakan √2. Benar: [[c = a\\sqrt{2}]].",
                "Lupa bahwa kedua kaki sama panjang: kedua kaki selalu sama panjang, jadi jika soal memberikan satu kaki, kaki lainnya sudah diketahui. Untuk [[a = 5]] cm, [[b = 5]] cm, bukan besaran baru yang belum diketahui. Benar: [[a = b]].",
                "Memperlakukan hipotenusa sebagai salah satu kaki: hipotenusa adalah sisi yang berhadapan dengan sudut 90°, dan sisi ini lebih panjang daripada kedua kaki. Menggunakannya sebagai kaki dalam rumus luas menghasilkan luas yang salah. Benar: kenali hipotenusa dari tanda sudut siku-siku terlebih dahulu.",
                "Menggunakan [[c = a\\sqrt{3}]]: ini mencampur kedua segitiga istimewa. Untuk [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm bukan hipotenusa maupun kaki segitiga ini. Benar: [[c = a\\sqrt{2} \\approx 7.071]] cm.",
                "Membagi hipotenusa dengan 2 bukan dengan √2: membagi dua menghasilkan kaki pendek 30-60-90, bukan kaki 45-45-90. Untuk [[c = 10]] cm, membagi dua menghasilkan 5 cm, sedangkan kaki yang benar adalah [[5\\sqrt{2} \\approx 7.071]] cm. Benar: [[a = \\frac{c}{\\sqrt{2}}]].",
                "Lupa menguadratkan kaki saat menghitung luas: luas membutuhkan [[a^2]], bukan [[a]]. Menggunakan [[A = \\frac{a}{2}]] untuk [[a = 6]] cm menghasilkan 3 cm², sedangkan luas yang benar adalah [[\\frac{36}{2} = 18]] cm². Benar: [[A = \\frac{a^2}{2}]].",
                "Menjumlahkan hanya kedua kaki saat menghitung keliling: keliling membutuhkan ketiga sisi. Menjumlahkan hanya kedua kaki untuk [[a = 5]] cm menghasilkan 10 cm, sedangkan keliling sebenarnya sekitar 17.071 cm. Benar: [[P = a + b + c]].",
                "Mencampuradukkan jawaban eksak dengan pendekatan desimal: [[5\\sqrt{2}]] cm adalah eksak, sedangkan 7.071 cm dibulatkan. Menulis 7.071 cm seolah-olah itu nilai eksak akan menghilangkan ketelitian yang dipertahankan bentuk akar. Benar: berikan bentuk eksak terlebih dahulu, lalu desimalnya.",
                "Membulatkan √2 terlalu dini: menggunakan 1.41 untuk √2 di tengah perhitungan akan menggeser setiap langkah berikutnya. Untuk [[a = 5]] cm, [[5 \\times 1.41 = 7.05]] cm bukan 7.071 cm. Benar: pertahankan √2 tetap eksak selama pengerjaan dan bulatkan hanya jawaban akhirnya.",
                "Mencampur satuan ukuran: kaki dalam sentimeter dan hipotenusa dalam meter tidak dapat digabungkan secara langsung. Ubah setiap ukuran ke satu satuan sebelum menghitung. Benar: 0.5 m sama dengan 50 cm, lalu hitung dalam sentimeter.",
                "Mencampuradukkan perbandingan 45-45-90 dan 30-60-90: perbandingan [[1 : 1 : \\sqrt{2}]] dan [[1 : \\sqrt{3} : 2]] adalah milik segitiga yang berbeda. Menukarnya menghasilkan hipotenusa yang salah dengan selisih besar. Benar: pastikan sudutnya, lalu pilih perbandingan yang sesuai.",
                "Lupa bahwa luas membutuhkan satuan persegi: luas 18 cm salah satuannya, meskipun angkanya benar. Luas mengukur permukaan, jadi luasnya 18 sentimeter persegi. Benar: [[A = 18]] cm².",
                "Menggunakan rumus untuk segitiga siku-siku sembarang: rumus [[c = a\\sqrt{2}]] dan [[A = \\frac{a^2}{2}]] hanya berlaku ketika sudutnya 45°, 45°, dan 90°. Segitiga siku-siku dengan sudut 40° dan 50° memiliki perbandingan yang berbeda. Benar: pastikan sudutnya terlebih dahulu, lalu gunakan rumusnya.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Penerapan Praktis Segitiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Perbandingan ini muncul di mana pun persegi dipotong menjadi dua.",
            },
            {
              "kind": "p",
              "text": "Penggunaan yang paling umum adalah mencari diagonal persegi. Ubin persegi dengan sisi 30 cm memiliki diagonal [[30\\sqrt{2} \\approx 42.426]] cm, yaitu panjang yang harus dipotong ketika ubin harus dibelah dari sudut ke sudut. Bingkai foto persegi, meja persegi, dan sebidang tanah persegi semuanya menggunakan perhitungan yang sama, karena setiap persegi terbagi menjadi dua segitiga 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Pekerjaan rumah geometri dan latihan trigonometri menggunakan soal 45-45-90 untuk menguji apakah siswa dapat mengenali kaki-kaki yang sama, menerapkan perbandingan, dan mempertahankan jawaban bentuk akar yang eksak. Siswa yang mengetahui satu sisi segitiga semacam itu dapat mencari sisanya tanpa mengukur, dan itulah inti perbandingan ini. Demonstrasi di kelas menggunakan segitiga ini untuk menunjukkan bagaimana perbandingan tetap mengubah satu ukuran menjadi gambaran lengkap sebuah bentuk, dan bagaimana memotong persegi menjadi dua menghasilkan segitiga ini.",
            },
            {
              "kind": "p",
              "text": "Gambar teknis, tata letak arsitektur, dan geometri konstruksi menggunakan hubungan 45-45-90 ketika desain membutuhkan sudut 45°, misalnya penopang diagonal, pola berbasis persegi, atau sudut yang dipotong pada 45°. Pembangun yang mengetahui satu sisi segitiga semacam itu dapat mencari jarak diagonal tanpa mengukurnya secara langsung. Pekerjaan pada bidang koordinat menggunakan gagasan yang sama: pergeseran 5 satuan ke kanan dan 5 satuan ke atas menempuh jarak diagonal [[5\\sqrt{2} \\approx 7.071]] satuan. Ini adalah penggunaan geometri itu sendiri yang realistis, bukan klaim tentang toleransi rekayasa: pekerjaan desain nyata menambahkan batas material dan margin keamanan di luar nilai geometri eksak pada halaman ini.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Soal Latihan Beserta Jawabannya",
          "blocks": [
            {
              "kind": "p",
              "text": "Kerjakan keenam soal di atas kertas sebelum membaca jawabannya.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Mencari Hipotenusa dari Kaki",
            },
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 memiliki kaki [[a = 9]] cm. Cari hipotenusa [[c]].",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Mencari Kaki dari Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 memiliki hipotenusa [[c = 14]] cm. Cari kaki [[a]].",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Menghitung Luas",
            },
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 memiliki kaki [[a = 10]] cm. Cari luas [[A]].",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Menghitung Keliling",
            },
            {
              "kind": "p",
              "text": "Segitiga 45-45-90 memiliki kaki [[a = 3]] cm. Cari keliling [[P]].",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Mencari Diagonal Persegi",
            },
            {
              "kind": "p",
              "text": "Persegi memiliki panjang sisi 12 cm. Cari panjang diagonalnya.",
            },
            {
              "kind": "h3",
              "text": "Soal 6: Memeriksa Segitiga 45-45-90 yang Diajukan",
            },
            {
              "kind": "p",
              "text": "Segitiga memiliki kaki 6 cm dan 6 cm serta hipotenusa [[6\\sqrt{2}]] cm. Gunakan teorema Pythagoras untuk memeriksa bahwa panjang sisi ini membentuk segitiga 45-45-90.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Jawaban 1: [[c = a\\sqrt{2} = 9\\sqrt{2} \\approx 12.728]] cm. Jawaban eksaknya adalah [[9\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 2: [[a = \\frac{c\\sqrt{2}}{2} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.899]] cm. Kedua kakinya adalah [[7\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 3: [[A = \\frac{a^2}{2} = \\frac{100}{2} = 50]] cm². Luas ini eksak, tanpa pembulatan.",
            },
            {
              "kind": "p",
              "text": "Jawaban 4: [[P = a(2 + \\sqrt{2}) = 3(2 + \\sqrt{2}) = 6 + 3\\sqrt{2} \\approx 10.243]] cm. Menjumlahkan sisi-sisinya satu per satu memberikan hasil yang sama: [[3 + 3 + 3\\sqrt{2} = 6 + 3\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 5: [[d = a\\sqrt{2} = 12\\sqrt{2} \\approx 16.971]] cm. Diagonal adalah hipotenusa segitiga 45-45-90 yang terbentuk dengan memotong persegi menjadi dua.",
            },
            {
              "kind": "p",
              "text": "Jawaban 6: [[a^2 + b^2 = 36 + 36 = 72]], dan [[c^2 = (6\\sqrt{2})^2 = 36 \\times 2 = 72]]. Kedua ruas sama, dan kaki-kakinya sama panjang, jadi segitiga ini adalah segitiga 45-45-90 dengan hipotenusa sekitar 8.485 cm.",
            },
          ],
        },
      },
      "relatedHeading": "Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Setiap kalkulator di bawah ini menangani tugas segitiga siku-siku yang berbeda, jadi pilih alat yang sesuai dengan ukuran yang Anda butuhkan.",
      "relatedItems": [
        "Kalkulator Segitiga Istimewa",
        "Kalkulator Segitiga 30-60-90",
        "Kalkulator Sisi Segitiga Siku-Siku",
        "Kalkulator Luas Segitiga Siku-Siku",
        "Kalkulator Keliling Segitiga Siku-Siku",
        "Kalkulator Teorema Pythagoras",
      ],
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Apa itu segitiga 45-45-90?",
          "answer": "Segitiga 45-45-90 adalah segitiga siku-siku dengan sudut 45°, 45°, dan 90°. Segitiga ini disebut segitiga siku-siku sama kaki karena kedua kakinya sama panjang. Sisi-sisinya selalu mengikuti perbandingan tetap [[1 : 1 : \\sqrt{2}]], jadi mengetahui satu sisi sudah cukup untuk mencari semua sisi lainnya.",
        },
        {
          "question": "Berapa perbandingan sisi segitiga 45-45-90?",
          "answer": "Perbandingan sisinya adalah [[a : b : c = 1 : 1 : \\sqrt{2}]], dengan [[a]] dan [[b]] sebagai kaki-kaki yang sama panjang dan [[c]] sebagai hipotenusa. Artinya [[b = a]] dan [[c = a\\sqrt{2}]]. Perbandingan ini sama untuk setiap segitiga 45-45-90, berapa pun ukurannya.",
        },
        {
          "question": "Mengapa kedua kaki sama panjang?",
          "answer": "Kedua sudut lancip sama-sama 45°, dan pada segitiga apa pun sudut yang sama besar berhadapan dengan sisi yang sama panjang. Sisi yang berhadapan dengan sudut A adalah kaki [[a]], dan sisi yang berhadapan dengan sudut B adalah kaki [[b]], sehingga [[a = b]]. Segitiga ini juga simetris terhadap garis tinggi dari sudut siku-siku ke hipotenusa.",
        },
        {
          "question": "Mengapa hipotenusa dikalikan dengan √2?",
          "answer": "Teorema Pythagoras memberikan [[a^2 + a^2 = c^2]], yang menyederhanakan menjadi [[2a^2 = c^2]]. Mengambil akar kuadratnya menghasilkan [[c = a\\sqrt{2}]]. √2 muncul karena dua kuadrat yang sama dijumlahkan menjadi dua kali satu kuadrat, jadi hipotenusa harus √2 kali kaki.",
        },
        {
          "question": "Bagaimana cara mencari hipotenusa dari satu kaki?",
          "answer": "Kalikan kaki dengan √2 menggunakan [[c = a\\sqrt{2}]]. Untuk [[a = 5]] cm, [[c = 5\\sqrt{2} \\approx 7.071]] cm. Kedua kaki mana pun dapat dipakai, karena kaki-kakinya sama panjang. Pertahankan bentuk eksak [[5\\sqrt{2}]] cm ketika soal meminta nilai eksak.",
        },
        {
          "question": "Bagaimana cara mencari kaki dari hipotenusa?",
          "answer": "Bagi hipotenusa dengan √2 menggunakan [[a = \\frac{c}{\\sqrt{2}}]], atau gunakan bentuk rasional [[a = \\frac{c\\sqrt{2}}{2}]]. Untuk [[c = 10]] cm, [[a = 5\\sqrt{2} \\approx 7.071]] cm. Kedua kaki memiliki panjang yang sama ini, karena kaki-kakinya sama panjang.",
        },
        {
          "question": "Bagaimana cara menghitung luas segitiga 45-45-90?",
          "answer": "Gunakan [[A = \\frac{a^2}{2}]], dengan [[a]] sebagai kaki. Kedua kaki berperan sebagai alas dan tinggi, dan segitiga menutupi setengah persegi yang dibentuk keduanya. Untuk [[a = 6]] cm, [[A = \\frac{36}{2} = 18]] cm². Luas selalu dinyatakan dalam satuan persegi.",
        },
        {
          "question": "Bagaimana cara menghitung kelilingnya?",
          "answer": "Jumlahkan ketiga sisi dengan [[P = a + b + c]], yang menyederhanakan menjadi [[P = a(2 + \\sqrt{2})]]. Untuk [[a = 5]] cm, [[P = 10 + 5\\sqrt{2} \\approx 17.071]] cm. Keliling adalah ukuran linear, jadi jawabannya dalam satuan biasa, bukan satuan persegi.",
        },
        {
          "question": "Mengapa diagonal persegi membentuk segitiga 45-45-90?",
          "answer": "Diagonal membagi persegi menjadi dua segitiga, masing-masing dengan dua sisi persegi dan satu sudut 90°. Diagonal juga membagi dua sudut sudut menjadi 45° masing-masing. Karena itu setiap segitiga memiliki sudut 45°, 45°, dan 90°, dan hipotenusanya adalah diagonal, [[d = a\\sqrt{2}]].",
        },
        {
          "question": "Apakah √2 bilangan eksak atau pendekatan?",
          "answer": "Simbol √2 mewakili bilangan irasional eksak yang kuadratnya adalah 2, tetapi ekspansi desimalnya tidak pernah berakhir, dimulai dengan 1.41421356. Desimal apa pun yang Anda tulis untuknya adalah pendekatan. Pertahankan bentuk akar pada jawaban eksak, dan gunakan desimal hanya ketika nilai yang diukur atau dibulatkan dibutuhkan.",
        },
        {
          "question": "Apakah semua segitiga 45-45-90 sebangun?",
          "answer": "Ya. Setiap segitiga 45-45-90 memiliki tiga sudut yang sama, 45°, 45°, dan 90°, dan perbandingan sisi yang sama [[1 : 1 : \\sqrt{2}]]. Dua segitiga semacam itu hanya berbeda ukuran, tidak pernah berbeda bentuk. Memperbesar atau memperkecil salah satunya akan mengalikan setiap sisi dengan faktor yang sama, sehingga proporsinya tetap.",
        },
        {
          "question": "Apa perbedaan segitiga 45-45-90 dan 30-60-90?",
          "answer": "Segitiga 45-45-90 memiliki sudut 45°, 45°, dan 90°, kaki yang sama panjang, dan perbandingan [[1 : 1 : \\sqrt{2}]]. Segitiga 30-60-90 memiliki sudut 30°, 60°, dan 90°, tanpa sisi yang sama, dan perbandingan [[1 : \\sqrt{3} : 2]]. Rumus-rumusnya tidak dapat dipertukarkan, jadi selalu pastikan sudutnya terlebih dahulu.",
        },
      ],
    },
};
