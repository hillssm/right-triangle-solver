// altitudeFromProjectionsGuideTranslations.bid.ts: Right Triangle Altitude From Projections
// Guide (Page 27 of 45) translation.
export const B5_ID = {
  "id": {
      "tocHeading": "Navigasi Bagian",
      "tocItems": {
        "sec-intro": "Menghitung Tinggi Segitiga Siku-Siku dari Proyeksi",
        "sec-altitude": "Apa Itu Tinggi Segitiga Siku-Siku?",
        "sec-projections": "Apa Itu Proyeksi dalam Segitiga Siku-Siku?",
        "sec-formula": "Rumus Tinggi Segitiga Siku-Siku dari Proyeksi",
        "sec-steps": "Cara Menghitung Tinggi dari Proyeksi Langkah demi Langkah",
        "sec-diagram": "Penjelasan Diagram Tinggi Segitiga Siku-Siku",
        "sec-proof": "Mengapa Rumus Tinggi Segitiga Berlaku? Bukti dengan Segitiga Sebangun",
        "sec-examples": "Contoh Soal Tinggi Segitiga dari Proyeksi",
        "sec-verify": "Cara Memeriksa Perhitungan Tinggi Segitiga",
        "sec-relationships": "Hubungan antara Tinggi, Hipotenusa, dan Kaki Segitiga",
        "sec-geomean": "Teorema Rata-rata Geometri dan Tinggi Segitiga Siku-Siku",
        "sec-special": "Kasus Khusus dan Sifat Penting",
        "sec-mistakes": "Kesalahan Umum dalam Mencari Tinggi dari Proyeksi",
        "sec-applications": "Penerapan Praktis Teorema Tinggi Segitiga",
        "sec-practice": "Soal Latihan Beserta Jawaban",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
        "sec-conclusion": "Satu Akar Kuadrat, Pemahaman Penuh",
      },
      "sections": {
        "sec-intro": {
          "h2": "Menghitung Tinggi Segitiga Siku-Siku dari Proyeksi",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalikan kedua proyeksi pada hipotenusa, lalu ambil akar kuadratnya.",
            },
            {
              "kind": "p",
              "text": "Kalkulator Tinggi Segitiga Siku-Siku dari Proyeksi mencari tinggi segitiga siku-siku dari dua proyeksi, [[p]] dan [[q]], yang dipotong oleh garis tinggi pada hipotenusa. Tidak diperlukan kaki segitiga maupun sudut. Masukkan proyeksi [[p]] dan proyeksi [[q]] dalam satuan yang sama, dan kalkulator akan menampilkan tinggi [[h]] dengan teorema tinggi segitiga:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Rumus ini berlaku karena menurunkan garis tinggi dari titik sudut siku-siku membentuk dua segitiga yang lebih kecil yang sebangun satu sama lain. Kesebangunan membuat tinggi segitiga menjadi rata-rata geometri dari kedua proyeksi. Sebagai gambaran cepat, jika [[p=9\\text{ cm}]] dan [[q=16\\text{ cm}]], kalikan [[9]] dengan [[16]] untuk mendapatkan [[144]], lalu ambil akar kuadratnya untuk mendapatkan tinggi [[12\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "Ketik segmen hipotenusa pertama ke kolom Proyeksi [[p]] dan segmen kedua ke kolom Proyeksi [[q]], dengan keduanya dalam satuan yang sama. Tekan Hitung untuk melihat tingginya, dan Atur Ulang akan mengosongkan kolom untuk soal baru. Hasilnya memakai satuan yang sama dengan masukan. Jika yang Anda ketahui justru kaki-kaki segitiga, coba <a href=\"/right-triangle-altitude-calculator/\">kalkulator tinggi segitiga</a> yang dibuat untuk kasus tersebut.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Apa Itu Tinggi Segitiga Siku-Siku?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tinggi segitiga siku-siku adalah ruas garis tegak lurus yang ditarik dari titik sudut siku-siku ke hipotenusa. Panjangnya mengukur jarak terpendek dari titik tersebut ke hipotenusa, karena garis tegak lurus selalu merupakan jalur terpendek dari suatu titik ke sebuah garis.",
            },
            {
              "kind": "p",
              "text": "Gambarkan garis tingginya dan ia akan mendarat di hipotenusa pada sebuah titik yang disebut kaki garis tinggi, biasanya diberi label D. Dari D, garis tinggi naik tepat 90 derajat hingga bertemu titik sudut siku-siku C. Pertemuan tegak lurus inilah yang menjadikan CD sebagai garis tinggi, bukan sekadar ruas garis biasa.",
            },
            {
              "kind": "p",
              "text": "Pemula terkadang keliru membedakan garis tinggi dengan salah satu kaki segitiga. Kaki-kaki segitiga, AC dan BC, bertemu pada sudut siku-siku dan membentuk sisi-sisi luar segitiga. Garis tinggi CD berjalan di dalam segitiga dari titik C ke sisi AB. Ia adalah ruas garis ketiga yang berbeda dengan panjangnya sendiri, [[h]], dan ia ada hanya setelah garis tingginya benar-benar digambarkan.",
            },
            {
              "kind": "p",
              "text": "Hipotenusa dapat berfungsi sebagai alas karena setiap sisi bisa menjadi alas setelah garis tinggi yang sesuai digambarkan, sehingga luas dapat ditulis sebagai setengah kali hipotenusa kali tinggi ini. Menggambar garis tinggi juga membelah segitiga menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD, yang membawa hubungan segitiga-sebangun di balik setiap rumus di halaman ini.",
            },
          ],
        },
        "sec-projections": {
          "h2": "Apa Itu Proyeksi dalam Segitiga Siku-Siku?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ketika garis tinggi CD bertemu hipotenusa AB, kaki D membagi AB menjadi dua ruas garis yang lebih kecil: AD, yang disebut [[p]], dan DB, yang disebut [[q]]. Kedua ruas garis ini adalah proyeksi dari kaki-kaki segitiga pada hipotenusa. Masing-masing adalah bayangan yang dilemparkan sebuah kaki segitiga ke hipotenusa ketika cahaya bersinar lurus ke bawah sepanjang garis tinggi.",
            },
            {
              "kind": "p",
              "text": "Proyeksi [[p]] terletak di samping kaki AC, dan proyeksi [[q]] terletak di samping kaki BC. Karena keduanya adalah dua potongan hipotenusa, jumlahnya pas menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[p+q=c]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[c]] adalah hipotenusa penuh. Hubungan penjumlahan ini membantu memeriksa jawaban dan menemukan kembali proyeksi yang hilang ketika hipotenusa dan satu proyeksi diketahui. Jika Anda membutuhkan perhitungan sebaliknya, yaitu mencari proyeksi dari panjang sisi, <a href=\"/right-triangle-projection-calculator/\">kalkulator proyeksi</a> menangani arah tersebut.",
            },
            {
              "kind": "p",
              "text": "Kedua proyeksi harus berupa panjang yang positif. Nilai nol atau negatif tidak menggambarkan segitiga nyata, hanya bentuk yang degenerat. Dan proyeksi bukanlah kaki-kaki segitiga itu sendiri: kaki AC dan BC bersandar ke samping, sedangkan [[p]] dan [[q]] terletak datar sepanjang hipotenusa. Tertukar antara keduanya adalah salah satu kesalahan paling umum yang dilakukan siswa.",
            },
          ],
          "table": {
            "headers": [
              "Pengukuran",
              "Arti",
            ],
            "rows": [
              [
                "[[p]]",
                "Segmen hipotenusa pertama",
              ],
              [
                "[[q]]",
                "Segmen hipotenusa kedua",
              ],
              [
                "[[h]]",
                "Tinggi yang tegak lurus",
              ],
              [
                "[[c]]",
                "Hipotenusa penuh",
              ],
              [
                "[[a]]",
                "Kaki segitiga pertama",
              ],
              [
                "[[b]]",
                "Kaki segitiga kedua",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Rumus Tinggi Segitiga Siku-Siku dari Proyeksi",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema tinggi segitiga menyatakan:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil akar kuadrat positif dari kedua sisi menghasilkan rumus yang dipakai:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Setiap simbol memiliki arti yang tetap. Huruf [[h]] melambangkan tinggi terhadap hipotenusa, besaran yang ingin dicari. Huruf [[p]] dan [[q]] melambangkan dua proyeksi pada hipotenusa, besaran yang Anda masukkan. Perkalian menggabungkan kedua proyeksi, dan akar kuadrat membatalkan hasil kali itu untuk mengembalikan sebuah panjang.",
            },
            {
              "kind": "p",
              "text": "Perkalian muncul karena kesebangunan antara dua segitiga kecil menghasilkan perbandingan [[\\frac{h}{p}=\\frac{q}{h}]]. Perkalian silang pada perbandingan itu menghasilkan [[h^2=p\\times q]]. Akar kuadrat muncul karena [[h]] adalah sebuah panjang, dan hanya akar positif dari [[h^2]] yang menamai jarak yang nyata.",
            },
            {
              "kind": "p",
              "text": "Satuan perlu diperhatikan. Jika [[p]] dan [[q]] keduanya diukur dalam sentimeter, hasil kalinya berada dalam sentimeter persegi, yang benar untuk langkah antara yang mirip luas. Mengambil akar kuadrat mengubah sentimeter persegi kembali menjadi sentimeter biasa untuk tinggi akhir. Inilah alasan kedua masukan harus memiliki satuan yang sama: mencampur satuan akan merusak hasil kali dan jawabannya. Cara ringkas mengingat rumusnya adalah bahwa tinggi segitiga adalah rata-rata geometri dari kedua proyeksi, karena rata-rata geometri dua bilangan adalah akar kuadrat dari hasil kali keduanya.",
            },
          ],
        },
        "sec-steps": {
          "h2": "Cara Menghitung Tinggi dari Proyeksi Langkah demi Langkah",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Kenali kedua proyeksi pada hipotenusa. Carilah ruas garis tempat kaki garis tinggi membagi hipotenusa, dan beri label yang di samping kaki AC sebagai [[p]] serta yang di samping kaki BC sebagai [[q]].",
                "Pastikan kedua pengukuran memakai satuan yang sama. Jika satu dalam milimeter dan yang lain dalam sentimeter, konversikan salah satunya sebelum menyentuh rumus.",
                "Kalikan [[p]] dan [[q]]. Hasil kali [[h^2]] adalah nilai antara yang mirip luas, sehingga satuannya adalah kuadrat dari satuan masukan.",
                "Ambil akar kuadrat positif dari hasil kali. Akar negatif dibuang karena panjang tidak bisa negatif.",
                "Tulis jawaban akhir beserta satuannya. Angka tanpa satuan mengundang kesalahan di kemudian hari, terutama ketika ia menjadi masukan perhitungan yang lebih panjang.",
                "Periksa bahwa jawabannya masuk akal. Tinggi segitiga selalu terletak di antara kedua proyeksi, dan tidak pernah bisa melebihi setengah hipotenusa.",
              ],
            },
            {
              "kind": "p",
              "text": "Berikut metode tersebut diterapkan pada contoh lengkap. Misalkan [[p=4\\text{ cm}]] dan [[q=9\\text{ cm}]]. Pertama kalikan: [[4\\times 9=36]], sehingga [[h^2=36\\text{ cm}^2]]. Kemudian ambil akar kuadrat positifnya:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tingginya adalah [[6\\text{ cm}]]. Sebagai pemeriksaan kewajaran, [[6]] terletak di antara proyeksi [[4]] dan [[9]], sesuai perilaku rata-rata geometri yang dijelaskan nanti dalam panduan ini.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Penjelasan Diagram Tinggi Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Segitiga ABC memiliki sudut siku-siku di C. Dari C, garis tinggi CD turun tegak lurus ke hipotenusa AB, dan bertemu di kaki D. Ruas AD diberi label [[p]], DB diberi label [[q]], dan CD diberi label [[h]], sedangkan hipotenusa AB adalah [[c]] dan kaki AC dan BC adalah [[a]] dan [[b]].",
            },
            {
              "kind": "p",
              "text": "Dua kotak kecil menandai kedua sudut siku-siku: satu di C di dalam segitiga asli, dan satu di D tempat garis tinggi bertemu hipotenusa. Garis tinggi CD tampak sebagai ruas garis interior yang jelas, secara visual berbeda dari dua kaki yang membentuk kerangka luar segitiga.",
            },
            {
              "kind": "p",
              "text": "Garis tinggi membagi ABC menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD, yang sebangun satu sama lain dan juga dengan segitiga aslinya. Dalam soal buku teks, proyeksi sering digambarkan sebagai dua ruas garis hipotenusa, atau sederhananya sebagai angka-angka yang duduk di kedua sisi kaki garis tinggi. Beri label [[p]] dan [[q]] sebelum menghitung apa pun.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Segitiga siku-siku ABC dengan sudut siku-siku di C, garis tinggi CD ke hipotenusa AB, proyeksi AD = p dan DB = q, tinggi CD = h",
            "caption": "Garis tinggi CD membelah hipotenusa AB menjadi proyeksi [[p]] dan [[q]]; [[h]] adalah rata-rata geometri dari [[p]] dan [[q]].",
          },
        },
        "sec-proof": {
          "h2": "Mengapa Rumus Tinggi Segitiga Berlaku? Bukti dengan Segitiga Sebangun",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema tinggi segitiga bukanlah aturan yang dihafal begitu saja. Ia mengikuti kesebangunan dua segitiga yang dibentuk oleh garis tinggi.",
            },
            {
              "kind": "p",
              "text": "Dalam segitiga ACD, sudut-sudut lancip di A dan C berjumlah 90 derajat, dan dalam segitiga besar ABC, sudut A dan B juga berjumlah 90 derajat. Jadi sudut di C dalam ACD sama dengan sudut B, dan sudut di A sama dengan sudut di C dalam CBD. Kedua segitiga kecil memiliki ketiga sudut yang sama, yang membuat keduanya sebangun.",
            },
            {
              "kind": "p",
              "text": "Kesebangunan berarti sisi-sisi yang bersesuaian tetap dalam perbandingan yang sama. Dalam segitiga ACD, sisi di depan sudut A adalah garis tinggi [[h]]. Dalam segitiga CBD, sisi di depan sudut yang sama di C adalah proyeksi [[q]]. Pasangan lain yang bersesuaian adalah proyeksi [[p]] (di depan sudut lancip kedua dalam ACD) terhadap garis tinggi [[h]] (di depan sudut yang bersesuaian dalam CBD). Menyamakan keduanya menghasilkan perbandingan:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{h}{p}=\\frac{q}{h}]]]",
            },
            {
              "kind": "p",
              "text": "Perkalian silang mengubah perbandingan menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil akar kuadrat dari kedua sisi menghasilkan [[h=\\sqrt{p\\times q}]]. Persamaan [[h^2=p\\times q]] memiliki dua akar aljabar, positif dan negatif, tetapi panjang adalah besaran positif, sehingga hanya akar positif yang menggambarkan garis tinggi.",
            },
          ],
          "image": {
            "src": "altitude-proof.svg",
            "alt": "Dua segitiga siku-siku yang lebih kecil, ACD dan CBD, dengan sisi-sisi yang bersesuaian diberi label untuk menunjukkan h/p=q/h",
            "caption": "Segitiga ACD dan CBD sebangun, sehingga [[\\frac{h}{p}=\\frac{q}{h}]] dan kuadrat [[h]] sama dengan [[p]] kali [[q]].",
          },
        },
        "sec-examples": {
          "h2": "Contoh Soal Tinggi Segitiga dari Proyeksi",
          "blocks": [
            {
              "kind": "h3",
              "text": "Contoh 1: Bilangan Bulat Sederhana",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p=4\\text{ cm}]] dan [[q=9\\text{ cm}]], substitusikan ke rumus:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tingginya adalah [[6\\text{ cm}]], sebuah bilangan bulat karena [[36]] adalah kuadrat sempurna.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Proyeksi Sama Panjang",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p=5\\text{ cm}]] dan [[q=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 5}=\\sqrt{25}=5\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Ketika proyeksinya sama panjang, tinggi segitiga sama dengan masing-masing proyeksi: kasus segitiga siku-siku sama kaki, di mana tingginya tepat setengah hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Proyeksi Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p=3.6\\text{ m}]] dan [[q=6.4\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{3.6 \\times 6.4}=\\sqrt{23.04}=4.8\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Desimal tidak mengubah apa pun: [[23.04]] adalah kuadrat sempurna, sehingga tingginya tepat [[4.8\\text{ m}]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Proyeksi Tidak Sama Panjang",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p=2\\text{ cm}]] dan [[q=18\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{2 \\times 18}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tingginya adalah [[6\\text{ cm}]], bukan [[10\\text{ cm}]]. Merata-ratakan menghasilkan rata-rata aritmetika, [[10]], tetapi tingginya adalah rata-rata geometri, yang lebih rendah untuk masukan yang tidak sama.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Bukan Kuadrat Sempurna",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p=5\\text{ cm}]] dan [[q=7\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 7}=\\sqrt{35}\\text{ cm}\\approx 5.916\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[35]] bukan kuadrat sempurna, sehingga jawaban tepatnya adalah [[\\sqrt{35}\\text{ cm}]]. Gunakan hampiran [[5.916\\text{ cm}]] untuk pekerjaan praktis, tetapi pertahankan bentuk tepatnya ketika jawaban menjadi masukan perhitungan lanjutan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Satuan Masukan Berbeda",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p=40\\text{ mm}]] dan [[q=9\\text{ cm}]]. Satuannya berbeda, jadi konversikan dulu: [[40\\text{ mm}=4\\text{ cm}]]. Lalu:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Mengkonversi terlebih dahulu adalah satu-satunya langkah aman: memasukkan [[40]] dan [[9]] secara langsung menghasilkan [[\\sqrt{40\\times 9}=\\sqrt{360}]], angka yang salah dan tanpa satuan.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cara Memeriksa Perhitungan Tinggi Segitiga",
          "blocks": [
            {
              "kind": "h3",
              "text": "Metode 1: Pemeriksaan Rata-rata Geometri",
            },
            {
              "kind": "p",
              "text": "Kuadratkan tinggi Anda dan bandingkan dengan hasil kali proyeksi. Kedua nilai harus cocok. Untuk [[p=4]] dan [[q=9]] dengan [[h=6]]: [[6^2=36]] dan [[4\\times 9=36]]. Kecocokan memastikan aritmetikanya benar.",
            },
            {
              "kind": "h3",
              "text": "Metode 2: Hubungan Hipotenusa dan Kaki Segitiga",
            },
            {
              "kind": "p",
              "text": "Bangun kembali seluruh segitiga dan periksa silang dengan rumus kedua. Pertama jumlahkan proyeksi: [[c=4+9=13]]. Kemudian temukan kembali kaki-kaki segitiga dengan hubungan proyeksi-kaki: [[a=\\sqrt{p\\times c}=\\sqrt{52}\\approx 7.211]] dan [[b=\\sqrt{q\\times c}=\\sqrt{117}\\approx 10.817]]. Sekarang verifikasi dengan [[h=ab/c]]: [[(7.211\\times 10.817)/13\\approx 78/13=6]], yang cocok. Sebuah <a href=\"/right-triangle-side-calculator/\">kalkulator sisi segitiga</a> menjaga aritmetika kaki segitiga tetap rapi saat Anda memeriksa.",
            },
            {
              "kind": "h3",
              "text": "Metode 3: Hubungan Luas Segitiga",
            },
            {
              "kind": "p",
              "text": "Segitiga yang sama memiliki dua ungkapan untuk luasnya. Menggunakan kaki-kaki segitiga: Luas = [[(a\\times b)/2=(7.211\\times 10.817)/2\\approx 39]]. Menggunakan hipotenusa dan tinggi: Luas = [[(c\\times h)/2=(13\\times 6)/2=39]]. Kedua ungkapan cocok, yang secara independen mengonfirmasi [[h=6]]. Alat <a href=\"/right-triangle-area-from-altitude-calculator/\">luas dari tinggi segitiga</a> dibangun di atas hubungan yang sama ini.",
            },
          ],
        },
        "sec-relationships": {
          "h2": "Hubungan antara Tinggi, Hipotenusa, dan Kaki Segitiga",
          "blocks": [
            {
              "kind": "p",
              "text": "Lima rumus menghubungkan keenam bagian berlabel itu. Tabel di bawah merangkum apa yang dicari masing-masing rumus dan apa yang dibutuhkannya.",
            },
            {
              "kind": "p",
              "text": "Empat rumus pertama membutuhkan setidaknya satu proyeksi. Mereka berasal dari segitiga-segitiga sebangun yang dibentuk garis tinggi, sehingga hanya berlaku ketika garis tinggi ditarik dari titik sudut siku-siku. Rumus kelima, [[h=ab/c]], tidak membutuhkan proyeksi sama sekali: ia berasal dari menyamakan dua ungkapan luas, dan berlaku kapan pun kaki-kaki dan hipotenusa diketahui.",
            },
            {
              "kind": "p",
              "text": "Inilah perbedaan praktis antara dua kalkulator tinggi segitiga di situs ini. Ketika Anda mengetahui proyeksi, teorema tinggi segitiga memberikan [[h]] langsung dalam satu langkah. Ketika yang Anda ketahui justru sisi-sisinya, <a href=\"/right-triangle-altitude-from-sides-calculator/\">mencari tinggi segitiga dari sisi-sisinya</a> memakai jalur luas. Pilih alat mana pun yang cocok dengan data yang diberikan.",
            },
            {
              "kind": "p",
              "text": "Satu bacaan berguna lainnya dari [[a^2=p\\times c]]: setiap kaki segitiga adalah rata-rata geometri dari hipotenusa dan proyeksi yang berdekatan dengannya, mencerminkan bagaimana tinggi segitiga adalah rata-rata geometri dari kedua proyeksi.",
            },
          ],
          "table": {
            "headers": [
              "Rumus",
              "Mencari",
              "Membutuhkan",
            ],
            "rows": [
              [
                "[[c=p+q]]",
                "Hipotenusa",
                "Kedua proyeksi",
              ],
              [
                "[[h^2=p\\times q]]",
                "Tinggi segitiga",
                "Kedua proyeksi",
              ],
              [
                "[[a^2=p\\times c]]",
                "Kaki segitiga di samping proyeksi [[p]]",
                "Proyeksi [[p]] dan hipotenusa",
              ],
              [
                "[[b^2=q\\times c]]",
                "Kaki segitiga di samping proyeksi [[q]]",
                "Proyeksi [[q]] dan hipotenusa",
              ],
              [
                "[[h=ab/c]]",
                "Tinggi segitiga",
                "Kedua kaki segitiga dan hipotenusa",
              ],
            ],
          },
        },
        "sec-geomean": {
          "h2": "Teorema Rata-rata Geometri dan Tinggi Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Rata-rata geometri dari dua bilangan positif adalah akar kuadrat dari hasil kalinya. Untuk [[p]] dan [[q]], ia adalah [[\\sqrt{p\\times q}]], yang tepat sama dengan rumus tinggi segitiga. Jadi mengatakan tinggi segitiga adalah rata-rata geometri dari proyeksi hanyalah menyatakan ulang teorema dengan kata yang berbeda.",
            },
            {
              "kind": "p",
              "text": "Rata-rata aritmetika adalah rata-rata yang umum dikenal: [[(p+q)/2]]. Untuk [[p=4]] dan [[q=9]], rata-rata geometrinya adalah [[\\sqrt{36}=6]] sedangkan rata-rata aritmetikanya adalah [[13/2=6.5]]. Tingginya sama dengan [[6]], bukan [[6.5]], karena perbandingan segitiga-sebangun memaksa hubungan yang bersifat perkalian, bukan penjumlahan.",
            },
            {
              "kind": "p",
              "text": "Rata-rata geometri tidak pernah melebihi rata-rata aritmetika untuk masukan positif, dengan kesamaan hanya ketika [[p=q]]. Itulah alasan tinggi segitiga paling besar, relatif terhadap hipotenusa, ketika proyeksinya sama panjang. Sebuah persegi panjang [[4]] kali [[9]] dan sebuah persegi [[6]] kali [[6]] memiliki luas yang sama, [[36]], yang merupakan gagasan yang sama digambar sebagai bentuk: tinggi segitiga adalah sisi persegi yang luasnya sama dengan luas persegi panjang itu.",
            },
          ],
          "image": {
            "src": "altitude-geometric-mean.svg",
            "alt": "Persegi panjang 4 kali 9 dan persegi 6 kali 6 dengan luas yang sama, plus garis bilangan yang membandingkan rata-rata geometri 6 dan rata-rata aritmetika 6.5",
            "caption": "Untuk [[p=4]] dan [[q=9]], rata-rata geometri [[6]] (tinggi segitiga) berada di bawah rata-rata aritmetika [[6.5]].",
          },
        },
        "sec-special": {
          "h2": "Kasus Khusus dan Sifat Penting",
          "blocks": [
            {
              "kind": "h3",
              "text": "Proyeksi Sama Panjang",
            },
            {
              "kind": "p",
              "text": "Ketika [[p=q]], tingginya sama dengan nilai bersama itu: [[h=\\sqrt{p\\times p}=p]]. Kaki garis tinggi mendarat di titik tengah hipotenusa, kaki-kaki segitiga sama panjang, dan segitiganya adalah segitiga siku-siku sama kaki dengan sudut lancip 45 derajat, yang memberikan tinggi maksimum untuk hipotenusa tetap.",
            },
            {
              "kind": "h3",
              "text": "Proyeksi yang Sangat Tidak Seimbang",
            },
            {
              "kind": "p",
              "text": "Ketika [[p]] sangat kecil dan [[q]] sangat besar, tingginya tetap sedang: [[p=1]] dan [[q=100]] menghasilkan [[h=10]], jauh di bawah titik tengah proyeksi. Rata-rata geometri lebih menekankan masukan kecil daripada rata-rata biasa.",
            },
            {
              "kind": "h3",
              "text": "Hipotenusa Tetap",
            },
            {
              "kind": "p",
              "text": "Pertahankan hipotenusa [[c=p+q]] tetap dan variasikan pembagiannya. Hasil kali [[p\\times q]], dan dengan demikian tingginya, mencapai puncak ketika pembagiannya seimbang. Secara aljabar, [[h\\le\\frac{p+q}{2}]], dengan kesamaan tepat ketika [[p=q]]. Dalam bahasa sederhana, tidak ada tinggi segitiga yang bisa melebihi setengah hipotenusanya.",
            },
            {
              "kind": "h3",
              "text": "Proyeksi Nol",
            },
            {
              "kind": "p",
              "text": "Menetapkan [[p=0]] menghasilkan [[h=0]]: kaki garis tinggi berhimpit dengan titik A, segitiga runtuh menjadi sebuah ruas garis, dan tidak ada segitiga sejati yang tersisa. Perlakukan proyeksi nol sebagai degenerat, bukan masukan kalkulator yang valid.",
            },
            {
              "kind": "h3",
              "text": "Proyeksi Negatif",
            },
            {
              "kind": "p",
              "text": "Proyeksi adalah sebuah panjang, dan panjang tidak bisa negatif. Masukan negatif tidak memiliki makna geometris dan tidak menghasilkan tinggi yang valid; kesalahannya terletak di hulu, pada cara ruas garis itu diukur.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dua segitiga siku-siku dengan hipotenusa yang sama tetapi pembagian proyeksi berbeda menunjukkan tinggi yang berbeda",
            "caption": "Hipotenusa sama, pembagian berbeda: proyeksi sama panjang menghasilkan tinggi tertinggi.",
          },
        },
        "sec-mistakes": {
          "h2": "Kesalahan Umum dalam Mencari Tinggi dari Proyeksi",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Menjumlahkan proyeksi alih-alih mengalikannya. Perbandingan segitiga-sebangun membutuhkan hasil kali: dengan [[p=4]] dan [[q=9]], [[\\sqrt{4+9}\\approx 3.606]] salah, sedangkan [[\\sqrt{4\\times 9}=6]] benar.",
                "Lupa mengambil akar kuadrat. Berhenti di [[h^2=36]] meninggalkan angka mirip luas di tempat yang seharusnya panjang. Selalu ambil akar kuadrat positif untuk menyelesaikan.",
                "Tertukar antara proyeksi dengan kaki segitiga. Kaki-kaki segitiga bersandar dari hipotenusa sedangkan [[p]] dan [[q]] terletak datar sepanjangnya; hanya segmen-segmen hipotenusa yang termasuk dalam teorema tinggi segitiga.",
                "Mencampur satuan tanpa mengkonversi. Dengan [[p=40\\text{ mm}]] dan [[q=9\\text{ cm}]], konversikan dulu ([[40\\text{ mm}=4\\text{ cm}]]), lalu hitung [[h=\\sqrt{4\\times 9}=6\\text{ cm}]].",
                "Memasukkan pengukuran negatif. Proyeksi negatif tidak bermakna dan bisa menghasilkan hasil imajiner. Pastikan [[p]] dan [[q]] keduanya positif sebelum menghitung.",
                "Membawa [[h^2]] maju sebagai [[h]] dalam penyelesaian yang lebih panjang. Luruskan labelnya: [[h^2=36]] adalah langkah kuadrat, [[h=6]] adalah tingginya.",
                "Membulatkan terlalu dini. Pertahankan bentuk tepat seperti [[\\sqrt{35}]] selama mungkin dan bulatkan hanya jawaban akhirnya.",
                "Menerapkan rumus pada segitiga yang tidak siku-siku. Perbandingan [[\\frac{h}{p}=\\frac{q}{h}]] membutuhkan sudut siku-siku di C; tanpanya, argumen kesebangunan runtuh dan rumusnya tidak berlaku.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Penerapan Praktis Teorema Tinggi Segitiga",
          "blocks": [
            {
              "kind": "p",
              "text": "Kelas-kelas geometri menggunakan teorema ini terus-menerus. Soal-soal tinggi segitiga menguji apakah siswa dapat menemukan proyeksi, memilih rumus yang tepat, dan memverifikasi dengan teorema Pythagoras, dan latihan buku teks sering memberikan proyeksi sebagai angka biasa pada diagram berlabel.",
            },
            {
              "kind": "p",
              "text": "Dalam soal-soal geometri bergaya konstruksi, teorema ini melengkapi segitiga siku-siku ketika hanya sebagian pengukuran yang diketahui. Merancang rangka segitiga mungkin menetapkan segmen hipotenusa terlebih dahulu, dengan garis tinggi menentukan tinggi puncak, dan bukti kesebangunan menggunakan langsung perbandingan [[\\frac{h}{p}=\\frac{q}{h}]] yang sama.",
            },
            {
              "kind": "p",
              "text": "Sketsa survei dan teknik terkadang memodelkan garis bidik sebagai tinggi segitiga siku-siku, dengan proyeksi dibaca dari garis dasar. Dua jarak tanah sembarangan tidak menentukan tinggi dengan sendirinya; geometri segitiga siku-siku harus benar-benar berlaku sebelum teorema diterapkan.",
            },
            {
              "kind": "p",
              "text": "Gambar arsitektur ujung pelana atau atap pelat lipat menggunakan hubungan yang sama untuk menemukan kembali dimensi yang hilang, asalkan sudut siku-sikunya benar-benar ada.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Soal Latihan Beserta Jawaban",
          "blocks": [
            {
              "kind": "h3",
              "text": "Soal 1: Pemula",
            },
            {
              "kind": "p",
              "text": "Proyeksi sebuah segitiga siku-siku adalah [[p=25\\text{ cm}]] dan [[q=16\\text{ cm}]]. Carilah tingginya.",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Pemula-Menengah",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki proyeksi [[p=12\\text{ m}]] dan [[q=27\\text{ m}]]. Carilah tinggi terhadap hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Menengah",
            },
            {
              "kind": "p",
              "text": "Kaki garis tinggi membagi hipotenusa menjadi segmen-segmen [[7\\text{ in}]] dan [[28\\text{ in}]]. Berapa tingginya?",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Desimal",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki proyeksi [[p=2.5\\text{ ft}]] dan [[q=14.4\\text{ ft}]]. Hitunglah tingginya.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Penerapan",
            },
            {
              "kind": "p",
              "text": "Sebuah rangka atap segitiga siku-siku memiliki balok pengikat sebagai hipotenusanya. Kaki garis tinggi membelah balok pengikat menjadi segmen-segmen [[3.2\\text{ m}]] dan [[12.8\\text{ m}]]. Carilah tinggi rangka pada garis tingginya.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\sqrt{25\\times 16}=\\sqrt{400}=20\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "2. [[h=\\sqrt{12\\times 27}=\\sqrt{324}=18\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\sqrt{7\\times 28}=\\sqrt{196}=14\\text{ in}]].",
            },
            {
              "kind": "p",
              "text": "4. [[h=\\sqrt{2.5\\times 14.4}=\\sqrt{36}=6\\text{ ft}]].",
            },
            {
              "kind": "p",
              "text": "5. [[h=\\sqrt{3.2\\times 12.8}=\\sqrt{40.96}=6.4\\text{ m}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Satu Akar Kuadrat, Pemahaman Penuh",
          "blocks": [
            {
              "kind": "p",
              "text": "Satu akar kuadrat menangkap seluruh gagasan: tinggi segitiga siku-siku adalah rata-rata geometri dari dua proyeksi pada hipotenusanya. Kalikan [[p]] dan [[q]], ambil akar kuadrat positif, dan jaga satuan tetap konsisten, maka jawabannya sudah di tangan.",
            },
            {
              "kind": "p",
              "text": "Di balik perhitungan singkat itu ada sepotong geometri yang rapi. Garis tinggi menciptakan dua segitiga sebangun, kesebangunan memberikan perbandingan, dan perbandingan memberikan rumus. Ketika Anda bisa melihat rantai itu, memeriksa jawaban, menghindari kesalahan, dan mengenali proyeksi dalam soal-soal baru semuanya menjadi rutin.",
            },
          ],
        },
      },
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Apa rumus tinggi segitiga dari proyeksi?",
          "answer": "Rumusnya adalah [[h=\\sqrt{p\\times q}]], dengan [[h]] sebagai tinggi terhadap hipotenusa dan [[p]] serta [[q]] sebagai kedua proyeksi. Kedua proyeksi harus berupa panjang positif yang diukur dalam satuan yang sama. Kalikan keduanya, lalu ambil akar kuadrat positifnya. Hasilnya adalah tinggi dalam satuan yang sama dengan masukan.",
        },
        {
          "question": "Apa itu proyeksi hipotenusa?",
          "answer": "Proyeksi adalah dua ruas garis tempat kaki garis tinggi membagi hipotenusa. Dalam segitiga ABC dengan sudut siku-siku di C dan garis tinggi CD, ruas AD adalah proyeksi [[p]] dan DB adalah proyeksi [[q]]. Bersama-sama keduanya membentuk hipotenusa penuh, sehingga [[p+q=c]]. Keduanya adalah ruas garis datar sepanjang hipotenusa, bukan kaki-kaki segitiga.",
        },
        {
          "question": "Mengapa tinggi segitiga adalah rata-rata geometri dari dua proyeksi?",
          "answer": "Karena garis tinggi menciptakan dua segitiga sebangun. Dalam segitiga ACD dan CBD, sisi-sisi yang bersesuaian menghasilkan perbandingan [[\\frac{h}{p}=\\frac{q}{h}]]. Perkalian silang menghasilkan [[h^2=p\\times q]], sehingga [[h=\\sqrt{p\\times q}]]. Karena rata-rata geometri dua bilangan adalah akar kuadrat dari hasil kalinya, tinggi segitiga tepat merupakan rata-rata geometri dari [[p]] dan [[q]].",
        },
        {
          "question": "Bisakah saya mencari tinggi tanpa mengetahui kaki-kaki segitiga?",
          "answer": "Bisa. Teorema tinggi segitiga hanya membutuhkan kedua proyeksi, sehingga kaki-kaki segitiga bukan masukan yang diperlukan. Masukkan [[p]] dan [[q]] ke kalkulator dan ia akan menampilkan [[h]] secara langsung. Ini rute tercepat ketika diagram atau pernyataan soal memberikan segmen-segmen hipotenusa. Jika yang Anda ketahui justru kaki-kaki segitiga, rumus lain berlaku, yaitu [[h=ab/c]].",
        },
        {
          "question": "Bisakah kedua proyeksi memiliki panjang yang berbeda?",
          "answer": "Bisa, dan biasanya memang begitu. Proyeksi adalah dua panjang positif apa pun, sama atau tidak, dan rumusnya menangani keduanya. Dengan [[p=2]] dan [[q=18]], tingginya adalah [[6]], yang terletak di antara kedua nilai itu. Proyeksi sama panjang hanyalah kasus khusus yang menghasilkan segitiga siku-siku sama kaki.",
        },
        {
          "question": "Apa yang terjadi ketika kedua proyeksi sama panjang?",
          "answer": "Ketika [[p=q]], tingginya sama dengan nilai bersama itu, karena [[\\sqrt{p\\times p}=p]]. Kaki garis tinggi mendarat di titik tengah hipotenusa, dan segitiga menjadi segitiga siku-siku sama kaki dengan dua kaki sama panjang dan sudut lancip [[45^\\circ]]. Untuk hipotenusa tetap, pembagian ini juga memberikan tinggi tertinggi yang mungkin.",
        },
        {
          "question": "Bisakah tinggi segitiga lebih panjang daripada salah satu proyeksi?",
          "answer": "Ia bisa melebihi proyeksi yang lebih kecil. Dengan [[p=2]] dan [[q=18]], tingginya adalah [[6]], yang lebih panjang daripada [[p=2]]. Rata-rata geometri selalu terletak di antara kedua masukan, sehingga tinggi segitiga jatuh di antara [[p]] dan [[q]]. Ia tidak pernah bisa melebihi proyeksi yang lebih besar, dan tidak pernah bisa melebihi setengah hipotenusa.",
        },
        {
          "question": "Bagaimana jika proyeksi menggunakan satuan yang berbeda?",
          "answer": "Konversikan salah satunya agar keduanya memiliki satuan yang sama sebelum menghitung. Misalnya, ubah [[40\\text{ mm}]] menjadi [[4\\text{ cm}]] ketika proyeksi lainnya adalah [[9\\text{ cm}]], lalu hitung [[h=\\sqrt{4\\times 9}=6\\text{ cm}]]. Mencampur satuan tanpa mengkonversi merusak hasil kali. Kalkulator mengasumsikan satuan yang cocok, jadi selalu standarkan dulu.",
        },
        {
          "question": "Bisakah tinggi segitiga lebih besar daripada setengah hipotenusa?",
          "answer": "Tidak. Untuk [[p]] dan [[q]] positif apa pun, rata-rata geometri tidak pernah melebihi rata-rata aritmetika, sehingga [[h=\\sqrt{p\\times q}\\le\\frac{p+q}{2}=\\frac{c}{2}]]. Tinggi segitiga sama dengan tepat setengah hipotenusa hanya ketika [[p=q]]. Setiap hasil kalkulator yang lebih besar daripada setengah hipotenusa menandakan kesalahan masukan atau aritmetika.",
        },
        {
          "question": "Bagaimana cara memeriksa perhitungan tinggi saya?",
          "answer": "Kuadratkan tinggi dan pastikan hasilnya sama dengan [[p\\times q]]. Untuk pemeriksaan yang lebih dalam, bangun kembali segitiganya: [[c=p+q]], [[a=\\sqrt{p\\times c}]], [[b=\\sqrt{q\\times c}]], lalu verifikasi [[h=ab/c]]. Anda juga bisa membandingkan dua ungkapan luas, [[(a\\times b)/2]] dan [[(c\\times h)/2]], yang harus cocok. Jika ketiga pemeriksaan lolos, jawabannya kokoh.",
        },
        {
          "question": "Apakah teorema tinggi segitiga berkaitan dengan teorema Pythagoras?",
          "answer": "Keduanya menggambarkan segitiga siku-siku yang sama dari sudut yang berbeda. Teorema tinggi segitiga berasal dari kesebangunan, sedangkan teorema Pythagoras menghubungkan ketiga sisi: [[a^2+b^2=c^2]]. Keduanya saling menguatkan: dengan [[p=4]] dan [[q=9]], kaki-kaki [[\\sqrt{52}]] dan [[\\sqrt{117}]] memenuhi [[52+117=169=13^2]], mengonfirmasi segitiga yang digambarkan teorema tinggi segitiga.",
        },
        {
          "question": "Bisakah saya memakai rumus ini untuk segitiga yang tidak siku-siku?",
          "answer": "Tidak. Perbandingan [[\\frac{h}{p}=\\frac{q}{h}]] bergantung pada segitiga-segitiga sebangun yang dibentuk oleh garis tinggi yang diturunkan dari titik sudut siku-siku. Tanpa sudut siku-siku itu, argumen kesebangunan gagal dan [[h^2=p\\times q]] tidak berlaku. Untuk segitiga umum, gunakan rumus tinggi berbasis luas atau trigonometri yang sesuai dengan data yang diberikan.",
        },
      ],
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Alat-alat ini menangani perhitungan yang berdekatan: mencari proyeksi, mencari tinggi dari panjang sisi, dan mengubah tinggi menjadi luas. Masing-masing berpasangan secara alami dengan teorema tinggi segitiga di halaman ini.",
      "relatedItems": [
        "Kalkulator Tinggi Segitiga Siku-Siku",
        "Kalkulator Tinggi Segitiga Siku-Siku dari Sisi",
        "Kalkulator Proyeksi Segitiga Siku-Siku",
        "Kalkulator Luas Segitiga Siku-Siku dari Tinggi",
        "Kalkulator Sisi Segitiga Siku-Siku",
      ],
    },
};
