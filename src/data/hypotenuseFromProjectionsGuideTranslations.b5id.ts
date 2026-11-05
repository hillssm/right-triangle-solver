// hypotenuseFromProjectionsGuideTranslations.bid.ts: Right Triangle Altitude From Projections
// Guide (Page 30 of 45) translation.
export const HFP_B5_ID = {
  "id": {
      "tocHeading": "Isi Panduan",
      "tocItems": {
        "sec-altitude": "Cara Proyeksi Hipotenusa Berkaitan dengan Garis Tinggi",
        "sec-applications": "Penerapan Praktis Perhitungan Proyeksi Hipotenusa",
        "sec-calculate": "Hitung Hipotenusa dari Dua Proyeksi",
        "sec-compare": "Hipotenusa dari Proyeksi vs. Hipotenusa dari Kaki",
        "sec-diagram": "Penjelasan Diagram Proyeksi Hipotenusa Segitiga Siku-Siku",
        "sec-examples": "Contoh Soal Hipotenusa dari Proyeksi",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
        "sec-formula": "Rumus Hipotenusa dari Proyeksi Segitiga Siku-Siku",
        "sec-how": "Cara Menggunakan Kalkulator Hipotenusa dari Proyeksi",
        "sec-intro": "Kalkulator Hipotenusa dari Proyeksi Segitiga Siku-Siku",
        "sec-legs": "Hubungan antara Proyeksi Hipotenusa dan Kaki Segitiga",
        "sec-manual": "Cara Menghitung Hipotenusa dari Proyeksi secara Manual",
        "sec-mistakes": "Kesalahan Umum saat Menghitung Hipotenusa dari Proyeksi",
        "sec-practice": "Soal Latihan Beserta Jawaban",
        "sec-pythagoras": "Proyeksi Hipotenusa dan Teorema Pythagoras",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-special": "Kasus Khusus dan Sifat Penting",
        "sec-understanding": "Memahami Hipotenusa dan Kedua Ruasnya",
        "sec-verify": "Cara Memverifikasi Perhitungan Hipotenusa Anda",
        "sec-what": "Apa Itu Proyeksi Hipotenusa pada Segitiga Siku-Siku?",
        "sec-why": "Mengapa Hipotenusa Sama dengan Jumlah Proyeksinya?",
      },
      "sections": {
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua kolom input menerima panjang proyeksi p dan q, keduanya diukur sepanjang hipotenusa. Pemilih satuan memungkinkan Anda memasukkan sentimeter, meter, milimeter, kaki, atau inci, asalkan p dan q menggunakan satuan yang kompatibel sebelum dijumlahkan.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Tekan tombol Hitung Hipotenusa c untuk melihat hasil, dan gunakan Atur Ulang untuk mengosongkan kolom sebelum soal baru. Hanya panjang positif yang diterima, karena proyeksi adalah ruas nyata dari hipotenusa, dan nilai nol atau negatif tidak dapat menggambarkannya.",
            },
            {
              "kind": "p",
              "text": "Hasilnya adalah panjang hipotenusa c yang lengkap dalam satuan pilihan Anda. Aritmetikanya hanyalah penjumlahan sederhana, tetapi bagian-bagian di bawah menjelaskan arti ruas-ruas tersebut dan cara memeriksa jawaban secara manual.",
            },
          ],
          "h2": "Hitung Hipotenusa dari Dua Proyeksi",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rumusnya adalah [[c = p + q]], di mana c adalah hipotenusa lengkap, p adalah ruas proyeksi pertama, dan q adalah ruas kedua. Rumus ini menggunakan penjumlahan, bukan perkalian atau akar kuadrat, karena kedua proyeksi adalah bagian-bagian berdekatan dari satu sisi lurus, dan penjumlahan ruas membangun kembali sisi tersebut dari bagian-bagiannya. Bayangkan mengukur dua potong papan yang sama lalu menjumlahkan pengukurannya untuk mendapatkan panjang penuh papan.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Pertanyaan yang sering muncul adalah mengapa rumusnya tidak merata-ratakan kedua ruas. Merata-ratakan akan menghasilkan setengah hipotenusa, yang menjawab pertanyaan yang berbeda. Penjumlahan membangun kembali seluruh sisi; rata-rata dan rata-rata geometris termasuk rumus lain yang dibahas kemudian dalam panduan ini.",
            },
            {
              "kind": "p",
              "text": "Ambil [[p = 7]] cm dan [[q = 11]] cm. Substitusi menghasilkan [[c = 7 + 11]], sehingga [[c = 18]] cm. Rumusnya sendiri sederhana; bagian pentingnya adalah memahami kedua ruas mana yang termasuk proyeksi.",
            },
            {
              "kind": "p",
              "text": "Kedua ruas harus menggunakan satuan yang kompatibel sebelum dijumlahkan. Jika p dalam milimeter dan q dalam sentimeter, ubah salah satunya terlebih dahulu, persis seperti yang diminta kalkulator pada halaman ini.",
            },
          ],
          "h2": "Rumus Hipotenusa dari Proyeksi Segitiga Siku-Siku",
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sembilan langkah singkat membawa Anda dari diagram berlabel ke hipotenusa yang terverifikasi.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenali segitiga siku-siku dalam soal Anda dan pastikan ia memiliki sudut siku-siku.",
                "Temukan hipotenusa: sisi di hadapan sudut siku-siku.",
                "Temukan titik di mana garis tinggi dari sudut siku-siku bertemu hipotenusa.",
                "Kenali kedua proyeksi p dan q sebagai ruas di kedua sisi titik tersebut, menggunakan panduan <a href=\"/right-triangle-projection-p-calculator/\">kalkulator proyeksi p</a> untuk ruas pertama. <a href=\"/right-triangle-projection-q-calculator/\">kalkulator proyeksi q</a> membahas ruas kedua dengan cara yang sama.",
                "Ubah kedua pengukuran ke satuan yang kompatibel bila perlu.",
                "Masukkan p ke kolom Proyeksi p dan q ke kolom Proyeksi q.",
                "Klik tombol Hitung Hipotenusa c.",
                "Baca hasil hipotenusa dalam satuan pilihan Anda.",
                "Gunakan Atur Ulang sebelum memulai soal baru.",
              ],
            },
            {
              "kind": "p",
              "text": "Identifikasi yang benar paling menentukan. Kolom-kolom tersebut mengharapkan kedua ruas dari hipotenusa itu sendiri, bukan kaki dan bukan garis tinggi. Memasukkan pasangan yang salah tetap menghasilkan jumlah, tetapi jumlah itu bukan hipotenusa.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Hipotenusa dari Proyeksi",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mencari hipotenusa segitiga siku-siku dengan menjumlahkan kedua ruas proyeksinya.",
            },
            {
              "kind": "p",
              "text": "Proyeksi p dan q adalah dua potongan hipotenusa yang terbentuk saat garis tinggi dari sudut siku-siku bertemu dengannya. Masukkan kedua panjangnya, dan kalkulator menjumlahkannya dengan rumus [[c = p + q]] untuk menghasilkan hipotenusa penuh. Misalnya, jika [[p = 4]] cm dan [[q = 9]] cm, maka [[c = 4 + 9 = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Hipotenusa adalah sisi terpanjang dari segitiga siku-siku dan terletak di hadapan sudut siku-siku. Kalkulator tampil pertama pada halaman ini, diikuti rumus, geometri di baliknya, contoh soal, dan cara memverifikasi jawaban Anda.",
            },
            {
              "kind": "p",
              "text": "Panduan ini cocok untuk siswa sekolah menengah pertama yang pertama kali bertemu proyeksi, kelas geometri sekolah menengah atas, dan siapa pun yang memeriksa pekerjaan rumah. Setiap rumus dikerjakan dengan angka nyata, sehingga Anda dapat mengikuti setiap langkah tanpa berhenti menguraikan simbol.",
            },
          ],
          "h2": "Kalkulator Hipotenusa dari Proyeksi Segitiga Siku-Siku",
        },
        "sec-manual": {
          "blocks": [
            {
              "kind": "p",
              "text": "Perhitungan manual hanyalah satu kali substitusi ke dalam [[c = p + q]]. Ambil [[p = 3.6]] cm dan [[q = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Substitusikan nilainya: [[c = 3.6 + 6.4]]. Jumlahkan: [[c = 10]] cm.",
            },
            {
              "kind": "p",
              "text": "Sejajarkan titik desimal saat menjumlahkan dengan tangan: 3.6 ditambah 6.4 menghasilkan 10.0, dan nol di belakang dapat dihilangkan menjadi [[c = 10]] cm yang rapi. Tetap sertakan satuan pada jawaban; angka tanpa satuan bukan panjang yang lengkap.",
            },
            {
              "kind": "p",
              "text": "Tidak diperlukan perhitungan Pythagoras, karena kedua panjang proyeksi sudah diketahui. Untuk memeriksa ulang, pastikan jumlahnya masuk akal: 3.6 ditambah 6.4 jelas 10, dan hipotenusa harus lebih panjang dari masing-masing proyeksi saja.",
            },
          ],
          "h2": "Cara Menghitung Hipotenusa dari Proyeksi secara Manual",
        },
        "sec-understanding": {
          "blocks": [
            {
              "kind": "p",
              "text": "Hipotenusa adalah sisi di hadapan sudut siku-siku, dan pada setiap segitiga siku-siku yang sah ia adalah sisi terpanjang. Ketika garis tinggi dari titik sudut siku-siku turun tegak lurus ke sana, hipotenusa terbagi menjadi dua ruas lebih pendek yang terletak ujung ke ujung pada satu garis lurus yang sama.",
            },
            {
              "kind": "p",
              "text": "Karena kedua ruas terletak pada satu sisi itu, mereka berperilaku seperti dua potongan penggaris yang berdekatan: menempatkannya bersebelahan membangun kembali seluruh sisi secara tepat, tanpa tumpang tindih dan tanpa celah. Itulah sebabnya proyeksi-proyeksi selalu berjumlah sama dengan hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Label-label ini sesuai dengan diagram utama di bawah. Titik A dan B adalah sudut-sudut lancip, C adalah titik sudut siku-siku, dan D adalah kaki garis tinggi CD pada hipotenusa AB, dengan [[AD = p]] dan [[DB = q]].",
            },
          ],
          "h2": "Memahami Hipotenusa dan Kedua Ruasnya",
          "table": {
            "headers": [
              "Simbol",
              "Arti",
            ],
            "rows": [
              [
                "a",
                "Kaki tegak lurus pertama",
              ],
              [
                "b",
                "Kaki tegak lurus kedua",
              ],
              [
                "c",
                "Hipotenusa lengkap",
              ],
              [
                "p",
                "Proyeksi hipotenusa pertama",
              ],
              [
                "q",
                "Proyeksi hipotenusa kedua",
              ],
              [
                "h",
                "Garis tinggi ke hipotenusa",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Mulailah dengan segitiga siku-siku lalu gambar garis tinggi dari titik sudut siku-siku tegak lurus terhadap hipotenusa. Garis tinggi menyentuh hipotenusa pada satu titik, yang disebut kaki, dan titik itu membagi hipotenusa menjadi dua ruas berdekatan. Kedua ruas tersebut adalah proyeksi hipotenusa: [[p = AD]] dan [[q = DB]] ketika segitiganya ABC dengan sudut siku-siku di C dan garis tinggi CD. <a href=\"/right-triangle-projection-calculator/\">kalkulator proyeksi</a> memperlakukan setiap ruas secara terpisah.",
            },
            {
              "kind": "p",
              "text": "Proyeksi bukanlah kaki. Kaki a dan b adalah dua sisi yang membentuk sudut siku-siku, sedangkan proyeksi p dan q terletak rata sepanjang hipotenusa itu sendiri. Tertukarnya kedua hal ini adalah kesalahan pelabelan yang paling umum, jadi selalu tanyakan: apakah panjang ini terletak pada hipotenusa, atau merupakan salah satu sisi di sekitar sudut siku-siku?",
            },
            {
              "kind": "p",
              "text": "Berikut contoh yang ramah bagi pemula. Jika garis tinggi membagi hipotenusa menjadi ruas 4 cm dan ruas 9 cm, maka [[p = 4]] cm dan [[q = 9]] cm, dan hipotenusa penuhnya adalah [[c = 4 + 9 = 13]] cm. Rumus [[c = p + q]] sekadar membangun kembali seluruh sisi dari kedua bagiannya.",
            },
            {
              "kind": "p",
              "text": "Kebiasaan pelabelan yang cepat mencegah sebagian besar kesalahan: mulai dari titik sudut siku-siku C, gambar garis tinggi ke hipotenusa, dan tandai kakinya D. Ruas yang menyentuh A adalah p dan ruas yang menyentuh B adalah q. Setelah kedua label itu ditetapkan, seluruh panduan ini dapat diterapkan langsung.",
            },
          ],
          "h2": "Apa Itu Proyeksi Hipotenusa pada Segitiga Siku-Siku?",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Proyeksi yang sama menghasilkan garis tinggi melalui teorema rata-rata geometris: [[h^2 = pq]], sehingga [[h = \\sqrt{pq}]]. Dengan [[p = 9]] cm dan [[q = 16]] cm, [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Bandingkan kedua rumus: [[c = p + q]] menjumlahkan proyeksi, sedangkan [[h = \\sqrt{pq}]] mengambil rata-rata geometrisnya. Keduanya menjawab pertanyaan yang berbeda. Hipotenusa adalah panjang sisi penuh; garis tinggi adalah tinggi tegak lurus dari sudut siku-siku turun ke sisi itu.",
            },
            {
              "kind": "p",
              "text": "Untuk soal garis tinggi, gunakan <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator garis-tinggi-dari-proyeksi</a>, yang dibangun di sekitar [[h = \\sqrt{pq}]]. Bedakan kedua hasil itu: pada segitiga ini hipotenusanya 25 cm sedangkan garis tingginya hanya 12 cm.",
            },
            {
              "kind": "p",
              "text": "Pemeriksaan akal sehat berlaku di sini: garis tinggi selalu lebih pendek dari hipotenusa. Pada contoh yang dikerjakan, 12 cm jauh di bawah 25 cm. Jika garis tinggi Anda pernah melebihi hipotenusa, periksa kembali rumus mana yang Anda gunakan.",
            },
          ],
          "h2": "Cara Proyeksi Hipotenusa Berkaitan dengan Garis Tinggi",
          "image": {
            "alt": "Segitiga siku-siku dengan proyeksi 9 dan 16 pada hipotenusa, hipotenusa 25, dan garis tinggi 12 yang ditarik tegak lurus terhadap hipotenusa",
            "caption": "Proyeksi yang sama, dua rumus: c = 9 + 16 = 25, h = akar(9 x 16) = 12.",
            "src": "hypotenuse-altitude-p9q16.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram utama menampilkan segitiga ABC dengan sudut siku-siku di C. Sisi AC adalah kaki a, sisi BC adalah kaki b, dan sisi AB adalah hipotenusa c. Garis tinggi CD turun dari C tegak lurus terhadap AB dan menyentuhnya di D.",
            },
            {
              "kind": "p",
              "text": "Urutan baca yang baik dimulai dari titik C: telusuri kaki a turun ke A, kaki b melintang ke B, lalu susuri hipotenusa c dari A ke B. Berhenti di D, kaki garis tinggi, untuk melihat pemisahan menjadi p dan q. Membaca diagram dengan cara ini menghubungkan label-label dengan rumusnya.",
            },
            {
              "kind": "p",
              "text": "Titik D membagi AB menjadi dua bagian: ruas AD adalah proyeksi p dan ruas DB adalah proyeksi q. Label-label tertera langsung pada diagram sehingga Anda dapat melihat di mana p dimulai, di mana q berakhir, dan bagaimana keduanya bersama-sama membentang di seluruh sisi dari A ke B.",
            },
            {
              "kind": "p",
              "text": "Penanda sudut siku-siku di C dan D mengonfirmasi geometrinya. Penanda di C menjadikan AB hipotenusa, dan penanda di D mengonfirmasi bahwa CD adalah garis tinggi. Segitiga asli kini terbagi menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD, yang akan kembali dibahas dalam panduan ini.",
            },
          ],
          "h2": "Penjelasan Diagram Proyeksi Hipotenusa Segitiga Siku-Siku",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan sudut siku-siku di C; garis tinggi CD ditarik tegak lurus terhadap hipotenusa AB, membaginya menjadi proyeksi p (ruas AD) dan proyeksi q (ruas DB), dengan kaki a dan b berlabel",
            "caption": "Garis tinggi CD membagi hipotenusa AB menjadi proyeksi p dan q.",
            "src": "hypotenuse-projections-main.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap contoh menyatakan nilai yang diketahui, substitusinya, dan jawaban akhir. Komentar dibuat singkat agar aritmetikanya tetap terlihat.",
            },
            {
              "kind": "p",
              "text": "Semua contoh menjaga satuan tetap konsisten dari nilai yang diketahui hingga jawaban. Ketika satuan berbeda, contoh mengonversi terlebih dahulu dan menyatakannya secara eksplisit, sehingga Anda dapat meniru kebiasaan itu dalam pekerjaan Anda sendiri.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Bilangan Bulat",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 4]] cm dan [[q = 9]] cm, rumus [[c = p + q]] menghasilkan [[c = 4 + 9]], sehingga [[c = 13]] cm. Dua proyeksi bilangan bulat menghasilkan hipotenusa bilangan bulat di sini, meski hal itu tidak selalu dijamin secara umum.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Proyeksi Sama Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 5]] cm dan [[q = 5]] cm, [[c = 5 + 5 = 10]] cm. Proyeksi yang sama besar berarti garis tinggi mengenai titik tengah hipotenusa, yang terjadi tepat ketika kedua kakinya sama: segitiga siku-siku sama kaki. Karena kakinya sama, garis tinggi juga merupakan median, itulah sebabnya ia membagi dua hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Proyeksi Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 3.6]] m dan [[q = 6.4]] m, [[c = 3.6 + 6.4 = 10]] m. Sejajarkan titik desimal dan jumlahkan seperti biasa; satuannya tetap meter sepanjang perhitungan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Proyeksi Tidak Sama Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 2]] cm dan [[q = 18]] cm, [[c = 2 + 18 = 20]] cm. Proyeksi tidak harus berdekatan ukurannya; jumlahnya tetap membangun kembali hipotenusa penuh.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Pengukuran Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 125]] mm dan [[q = 275]] mm, [[c = 125 + 275 = 400]] mm. Nilai besar tidak mengubah metodenya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Satuan Campuran",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 40]] mm dan [[q = 9]] cm, ubah dulu: 40 mm sama dengan 4 cm. Lalu [[c = 4 + 9 = 13]] cm. Menjumlahkan sebelum mengonversi akan menghasilkan 49 yang tidak bermakna.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Pengukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = \\frac{1}{2}]] ft dan [[q = \\frac{3}{4}]] ft, tulis keduanya dengan penyebut 4: [[c = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}]] ft, yaitu 1.25 ft.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Mencari Proyeksi yang Hilang",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 25]] cm dan [[p = 9]] cm, selesaikan [[q = c - p]]: [[q = 25 - 9 = 16]] cm. Langkah balik ini menunjukkan hubungan berjalan dua arah, meski kalkulator pada halaman ini menjumlahkan p dan q untuk mencari c, bukan menyelesaikan proyeksi yang hilang.",
            },
          ],
          "h2": "Contoh Soal Hipotenusa dari Proyeksi",
        },
        "sec-legs": {
          "blocks": [
            {
              "kind": "p",
              "text": "Proyeksi-proyeksi juga menentukan kaki-kaki melalui teorema proyeksi: [[a^2 = cp]] dan [[b^2 = cq]]. Setiap kaki adalah rata-rata geometris dari hipotenusa dan proyeksi yang berdekatan dengannya, fakta yang mengikuti dari kesebangunan segitiga-segitiga kecil dengan segitiga asli.",
            },
            {
              "kind": "p",
              "text": "Mengambil akar kuadrat menghasilkan [[a = \\sqrt{cp}]] dan [[b = \\sqrt{cq}]]. Dengan [[p = 9]] cm dan [[q = 16]] cm, cari dulu [[c = 9 + 16 = 25]] cm. Lalu [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm dan [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm.",
            },
            {
              "kind": "p",
              "text": "Hipotenusa dengan demikian adalah kunci yang membuka sisi-sisi yang tersisa: setelah c diketahui, setiap kaki mengikuti dari proyeksinya sendiri. <a href=\"/right-triangle-side-calculator/\">kalkulator sisi</a> menyelesaikan soal sisi yang hilang serupa secara langsung.",
            },
            {
              "kind": "p",
              "text": "Pemasangannya tidak sembarang: kaki a bersandar pada proyeksi p pada segitiga kecil ACD, yang sebangun dengan segitiga utuh, sehingga a berkaitan dengan c dan p sedangkan b berkaitan dengan c dan q. Mengingat kaki mana yang berpasangan dengan proyeksi mana menjaga akar kuadrat tetap pada ruas yang benar.",
            },
          ],
          "h2": "Hubungan antara Proyeksi Hipotenusa dan Kaki Segitiga",
          "image": {
            "alt": "Segitiga siku-siku dengan proyeksi 9 dan 16 serta hipotenusa 25, menunjukkan kaki a sama dengan 15 dari a kuadrat sama dengan 25 kali 9, dan kaki b sama dengan 20 dari b kuadrat sama dengan 25 kali 16",
            "caption": "Kaki a = akar(25 x 9) = 15; kaki b = akar(25 x 16) = 20.",
            "src": "hypotenuse-projection-theorem-legs.svg",
          },
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alasannya adalah postulat penjumlahan ruas: jika titik D terletak pada ruas AB di antara A dan B, maka panjang AB sama dengan AD ditambah DB. Di sini D adalah kaki garis tinggi dan A serta B adalah ujung-ujung hipotenusa, sehingga [[AB = AD + DB]].",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Mengganti dengan simbol standar langsung menghasilkan rumus. Pada segitiga siku-siku yang sah, kaki garis tinggi selalu jatuh di antara ujung-ujungnya, sehingga postulat selalu berlaku. Tidak diperlukan trigonometri untuk langkah ini.",
            },
            {
              "kind": "p",
              "text": "Kesebangunan segitiga adalah alat di balik hubungan proyeksi yang lebih dalam, seperti [[a^2 = cp]], tetapi penjumlahan ruas sederhana sudah cukup untuk menetapkan [[c = p + q]]. Diagram di bawah menunjukkan gagasan yang sama pada satu garis lurus.",
            },
            {
              "kind": "p",
              "text": "Satu detail perlu ditekankan: D selalu jatuh tepat di antara A dan B pada segitiga siku-siku sejati, tidak pernah di ujung dan tidak pernah di luar ruas. Penempatan itulah yang membuat postulat penjumlahan ruas dapat diterapkan, dan itulah sebabnya proyeksi nol atau negatif ditolak.",
            },
          ],
          "h2": "Mengapa Hipotenusa Sama dengan Jumlah Proyeksinya?",
          "image": {
            "alt": "Ruas lurus AB yang dibagi di titik D menjadi ruas AD berlabel p dan ruas DB berlabel q, menunjukkan seluruh ruas sama dengan p ditambah q",
            "caption": "Titik di antara A dan B membagi ruas: AB = AD + DB.",
            "src": "hypotenuse-segment-addition.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Di ruang kelas dan pekerjaan rumah, soal proyeksi menguji apakah siswa dapat memberi label pada diagram dan menerapkan [[c = p + q]] alih-alih meraih teorema Pythagoras. Latihan gambar teknik menggunakan keterampilan yang sama ketika garis tinggi membelah hipotenusa terukur pada sebuah denah.",
            },
            {
              "kind": "p",
              "text": "Model survei dan geometri arsitektural kadang mereduksi tata letak segitiga siku-siku menjadi hipotenusa yang dipotong oleh garis tegak lurus, di mana menjumlahkan dua ruas bertanda menghasilkan bentangan penuh. Konstruksi geometris di atas kertas menggunakan jumlah itu untuk mengatur lebar jangka.",
            },
            {
              "kind": "p",
              "text": "Syaratnya selalu sama: p dan q harus merupakan bagian-bagian berdekatan dari satu hipotenusa pada segitiga siku-siku sejati. Jarak sembarang tidak pernah memenuhi syarat, betapapun menggoda penjumlahannya.",
            },
            {
              "kind": "p",
              "text": "Guru dapat menggunakan susunan proyeksi sebagai pelajaran penghubung: ia mengulas penjumlahan ruas dari kelas-kelas sebelumnya sekaligus memberi gambaran teorema kesebangunan yang akan tiba kemudian dalam pelajaran geometri.",
            },
          ],
          "h2": "Penerapan Praktis Perhitungan Proyeksi Hipotenusa",
        },
        "sec-compare": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dua jalan menuju hipotenusa. Ketika ruas-ruas garis tinggi diketahui, gunakan penjumlahan ruas: [[c = p + q]]. Ketika dua sisi di sekitar sudut siku-siku justru yang diketahui, gunakan teorema Pythagoras: [[c = \\sqrt{a^2 + b^2}]].",
            },
            {
              "kind": "p",
              "text": "Pilih rumus proyeksi ketika soal memberikan kaki garis tinggi dan kedua ruasnya; pilih rumus kaki ketika soal memberikan dua sisi tegak lurus. Pada satu segitiga yang konsisten, kedua jalan menghasilkan c yang sama.",
            },
            {
              "kind": "p",
              "text": "Pemeriksaan silang cepat mengikat kedua rumus itu. Dari proyeksi [[p = 9]] dan [[q = 16]], [[c = 25]]. Kaki-kakinya adalah [[a = 15]] dan [[b = 20]], dan [[\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25]]. Kedua jalan sampai pada hipotenusa yang sama.",
            },
          ],
          "h2": "Hipotenusa dari Proyeksi vs. Hipotenusa dari Kaki",
          "table": {
            "headers": [
              "Nilai yang Diketahui",
              "Rumus",
              "Metode",
            ],
            "rows": [
              [
                "Proyeksi p dan q",
                "c = p + q",
                "Penjumlahan ruas",
              ],
              [
                "Kaki a dan b",
                "c = √(a² + b²)",
                "Teorema Pythagoras",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap kesalahan di bawah diikuti koreksinya.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mengalikan p dan q alih-alih menjumlahkannya. Dengan [[p = 4]] dan [[q = 9]], hasil kali 36 tidak bermakna di sini; hipotenusanya adalah [[4 + 9 = 13]].",
                "Menukar proyeksi dengan kaki. Kaki-kaki bertemu pada sudut siku-siku; proyeksi terletak sepanjang hipotenusa. Beri label setiap panjang sebelum menghitung.",
                "Menggunakan garis tinggi sebagai proyeksi. Garis tinggi h tegak lurus terhadap hipotenusa, bukan bagian darinya, sehingga ia tidak pernah termasuk dalam [[c = p + q]].",
                "Mencampur satuan pengukuran. [[p = 40]] mm dan [[q = 9]] cm harus menjadi 4 cm dan 9 cm sebelum dijumlahkan; jumlah mentah 49 tidak memiliki satuan yang sah.",
                "Memasukkan panjang negatif. Proyeksi menurut definisinya positif, sehingga entri negatif menandakan kesalahan data.",
                "Menukar hipotenusa dengan kaki. Hipotenusa terletak di hadapan sudut siku-siku dan merupakan sisi terpanjang; kaki tidak pernah dapat memainkan perannya.",
                "Melupakan satu ruas. Menjumlahkan hanya p menghasilkan panjang sebagian; hipotenusa membutuhkan kedua bagiannya.",
                "Menggunakan pengukuran yang tidak berkaitan. Kedua angka harus merupakan bagian-bagian berdekatan dari hipotenusa yang sama, bukan panjang sembarang dari soal.",
                "Menerapkan teorema Pythagoras pada p dan q. Nilai [[\\sqrt{p^2 + q^2}]] bukanlah hipotenusa, karena p dan q segaris, bukan tegak lurus.",
                "Menukar [[c = p + q]] dengan [[h = \\sqrt{pq}]]. Penjumlahan menemukan hipotenusa; rata-rata geometris menemukan garis tinggi. Menukar rumus berarti menukar jawabannya.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika Anda mendapati diri di tengah kesalahan, berhenti dan beri label ulang pada diagram sebelum menghitung ulang. Sebagian besar kesalahan di atas lenyap begitu p dan q ditandai jelas pada hipotenusa dan yang lainnya dicoret.",
            },
          ],
          "h2": "Kesalahan Umum saat Menghitung Hipotenusa dari Proyeksi",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Coba enam soal ini, lalu periksa jawaban yang dikerjakan di bawah. Tak satu pun nilainya mengulang contoh yang dikerjakan.",
            },
            {
              "kind": "p",
              "text": "Kerjakan setiap soal di atas kertas sebelum membaca jawabannya. Tutup jawabannya dengan tangan bila perlu; soal multi-langkah adalah ujian terbaik apakah teorema proyeksi sudah meresap.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Bilangan Bulat",
            },
            {
              "kind": "p",
              "text": "Garis tinggi segitiga siku-siku membagi hipotenusa menjadi [[p = 12]] cm dan [[q = 4]] cm. Cari c.",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 2.5]] m dan [[q = 7.5]] m, cari hipotenusanya.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Proyeksi Sama Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 7]] in dan [[q = 7]] in, cari c. Segitiga apakah ini?",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Konversi Satuan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 200]] mm dan [[q = 35]] cm, cari hipotenusa dalam sentimeter.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Proyeksi yang Hilang",
            },
            {
              "kind": "p",
              "text": "Sebuah hipotenusa berukuran [[c = 50]] cm dan salah satu proyeksinya adalah [[q = 32]] cm. Cari p.",
            },
            {
              "kind": "h3",
              "text": "Soal 6: Multi-Langkah dengan Kaki",
            },
            {
              "kind": "p",
              "text": "Diketahui [[p = 16]] cm dan [[q = 9]] cm, cari c, lalu cari kaki a dan b.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Jawaban 1: [[c = 12 + 4 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 2: [[c = 2.5 + 7.5 = 10]] m.",
            },
            {
              "kind": "p",
              "text": "Jawaban 3: [[c = 7 + 7 = 14]] in. Proyeksi yang sama besar menghasilkan segitiga siku-siku sama kaki.",
            },
            {
              "kind": "p",
              "text": "Jawaban 4: Ubah 200 mm menjadi 20 cm, lalu [[c = 20 + 35 = 55]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 5: [[p = c - q = 50 - 32 = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 6: [[c = 16 + 9 = 25]] cm. Lalu [[a = \\sqrt{25 \\times 16} = 20]] cm dan [[b = \\sqrt{25 \\times 9} = 15]] cm.",
            },
          ],
          "h2": "Soal Latihan Beserta Jawaban",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Hubungan proyeksi selaras tepat dengan teorema Pythagoras. Mulai dari teorema proyeksi: [[a^2 = cp]] dan [[b^2 = cq]]. Menjumlahkan kedua persamaan menghasilkan [[a^2 + b^2 = cp + cq]].",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c(p + q)]]]",
            },
            {
              "kind": "p",
              "text": "Memfaktorkan c sah karena ia mengalikan kedua suku. Karena [[p + q = c]], substitusi menghasilkan:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Pemeriksaan numerik dengan segitiga 9-16-25 mengonfirmasi aljabarnya: [[a^2 + b^2 = 225 + 400 = 625]] dan [[c^2 = 25^2 = 625]]. Kedua sisi cocok, persis seperti yang diprediksi bukti pemfaktoran.",
            },
            {
              "kind": "p",
              "text": "Buktinya tertutup rapi: jumlah ruas sederhana berada di jantung hubungan Pythagoras. Diagram di bawah menunjukkan asal [[a^2 = cp]] dan [[b^2 = cq]]: setiap segitiga kecil berbagi sudut-sudutnya dengan segitiga asli, sehingga sisi-sisi yang bersesuaian tetap proporsional.",
            },
          ],
          "h2": "Proyeksi Hipotenusa dan Teorema Pythagoras",
          "image": {
            "alt": "Segitiga siku-siku asli ABC di samping dua segitiga kecil yang sebangun, ACD dan CBD, dengan sudut-sudut yang cocok dan sisi-sisi yang bersesuaian berlabel",
            "caption": "Segitiga ACD dan CBD sebangun dengan ABC, menghasilkan a kuadrat sama dengan cp dan b kuadrat sama dengan cq.",
            "src": "hypotenuse-similar-triangles.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap sifat di bawah mengikuti langsung dari penjumlahan, sehingga mudah dipercaya.",
            },
            {
              "items": [
                "Proyeksi sama besar: jika [[p = q]], maka [[c = 2p]]. Garis tinggi jatuh di titik tengah, dan kedua kakinya sama, menghasilkan segitiga siku-siku sama kaki.",
                "Proyeksi tidak sama besar: pasangan positif apa pun berlaku. Garis tinggi condong ke arah proyeksi yang lebih panjang, dan kaki yang lebih dekat adalah kaki yang lebih pendek.",
                "Proyeksi sangat kecil: rumus tetap berlaku, misalnya [[p = 0.5]] mm dan [[q = 1.5]] mm menghasilkan [[c = 2]] mm.",
                "Proyeksi sangat besar: tidak ada batas atas, misalnya [[p = 1200]] m dan [[q = 800]] m menghasilkan [[c = 2000]] m.",
                "Penskalaan: menggandakan kedua proyeksi menggandakan hipotenusa, karena [[2p + 2q = 2(p + q)]].",
                "Menukar p dan q: [[p + q = q + p]], sehingga hipotenusa tidak berubah dan hanya label AD dan DB yang bertukar tempat.",
                "Proyeksi panjang nol: [[p = 0]] berarti garis tinggi berhimpit dengan sebuah kaki, sehingga segitiganya merosot dan kalkulator tidak menerimanya.",
                "Proyeksi negatif: panjang tidak bisa negatif, sehingga entri negatif selalu merupakan kesalahan data.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Diagram membandingkan dua segitiga dengan hipotenusa yang sama tetapi pembagian proyeksi berbeda, menunjukkan bagaimana bentuk berubah sementara jumlahnya tetap.",
            },
          ],
          "h2": "Kasus Khusus dan Sifat Penting",
          "image": {
            "alt": "Dua segitiga siku-siku dengan panjang hipotenusa yang sama, 10: satu dengan proyeksi sama besar 5 dan 5, yang lain dengan proyeksi 2 dan 8",
            "caption": "Hipotenusa sama, bentuk berbeda: p = q = 5 vs p = 2, q = 8.",
            "src": "hypotenuse-equal-vs-unequal.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga pemeriksaan cepat menangkap hampir setiap kesalahan perhitungan. Yang pertama adalah perhitungan langsung; dua lainnya mengonfirmasi dari sudut yang berbeda.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 1: Hitung Ulang Penjumlahan Ruas",
            },
            {
              "kind": "p",
              "text": "Jumlahkan p dan q lagi, perlahan. Dengan [[p = 4]] dan [[q = 9]], konfirmasi [[4 + 9 = 13]]. Kecerobohan di sini adalah sumber jawaban salah yang paling umum.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 2: Pastikan Kaki-Kakinya Cocok dengan Pythagoras",
            },
            {
              "kind": "p",
              "text": "Hitung kaki-kaki dari proyeksi, [[a = \\sqrt{cp}]] dan [[b = \\sqrt{cq}]], lalu verifikasi [[a^2 + b^2 = c^2]]. Untuk [[p = 9]], [[q = 16]], [[c = 25]]: [[a = 15]], [[b = 20]], dan [[225 + 400 = 625]]. Pemeriksaan geometris ini melampaui penjumlahan kalkulator.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 3: Periksa Kewajaran Diagram",
            },
            {
              "kind": "p",
              "text": "Pastikan kedua proyeksi positif, keduanya terletak pada hipotenusa yang sama, dan c lebih panjang dari masing-masing ruas saja. Jika hasilnya lebih kecil dari p atau q, suatu nilai dimasukkan ke kolom yang salah.",
            },
          ],
          "h2": "Cara Memverifikasi Perhitungan Hipotenusa Anda",
        },
      },
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "answer": "Rumusnya adalah [[c = p + q]], di mana p dan q adalah dua ruas proyeksi dari hipotenusa. Jumlahkan kedua panjang untuk mendapatkan hipotenusa penuh. Misalnya, [[p = 4]] cm dan [[q = 9]] cm menghasilkan [[c = 13]] cm.",
          "question": "Apa rumus hipotenusa dari proyeksi?",
        },
        {
          "answer": "Proyeksi adalah dua ruas yang terbentuk ketika garis tinggi dari sudut siku-siku bertemu hipotenusa. Berlabel [[p = AD]] dan [[q = DB]] pada segitiga ABC dengan garis tinggi CD, keduanya terletak ujung ke ujung sepanjang hipotenusa dan bersama-sama membentanginya sepenuhnya.",
          "question": "Apa itu proyeksi hipotenusa?",
        },
        {
          "answer": "Karena penjumlahan ruas: kaki garis tinggi terletak di antara ujung-ujung hipotenusa, sehingga seluruh sisi sama dengan jumlah bagian-bagiannya. Mengganti dengan simbol standar mengubah [[AB = AD + DB]] menjadi [[c = p + q]]. Tidak diperlukan trigonometri.",
          "question": "Mengapa kita menjumlahkan p dan q?",
        },
        {
          "answer": "Tidak. Kaki a dan b membentuk sudut siku-siku, sedangkan proyeksi p dan q terletak sepanjang hipotenusa. Menukarnya adalah kesalahan pelabelan yang paling umum, jadi periksa posisi setiap panjang pada diagram sebelum menghitung.",
          "question": "Apakah proyeksi sama dengan kaki segitiga?",
        },
        {
          "answer": "Ya. Garis tinggi jarang mengenai titik tengah tepat, sehingga p dan q biasanya tidak sama. Pasangan positif apa pun sah, dan jumlahnya tetap menghasilkan hipotenusa. Segitiganya sekadar condong ke arah proyeksi yang lebih panjang.",
          "question": "Bisakah proyeksi memiliki panjang berbeda?",
        },
        {
          "answer": "Rumusnya menjadi [[c = 2p]]. Garis tinggi membagi dua hipotenusa, kedua kakinya sama, dan segitiganya adalah segitiga siku-siku sama kaki. Secara geometris, garis tinggi jatuh tepat di titik tengah.",
          "question": "Apa yang terjadi ketika p dan q sama besar?",
        },
        {
          "answer": "Ya, dengan rumus berbeda: [[h = \\sqrt{pq}]], rata-rata geometris dari proyeksi. <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator garis-tinggi-dari-proyeksi</a> dibuat untuk perhitungan itu. Bedakan dari [[c = p + q]], yang mencari hipotenusa.",
          "question": "Bisakah saya menghitung garis tinggi menggunakan p dan q?",
        },
        {
          "answer": "Ya. Cari dulu [[c = p + q]], lalu gunakan [[a = \\sqrt{cp}]] dan [[b = \\sqrt{cq}]]. Untuk [[p = 9]], [[q = 16]], dan [[c = 25]], kaki-kakinya adalah 15 dan 20. Ini adalah perluasan edukatif, bukan fungsi utama kalkulator ini.",
          "question": "Bisakah saya menemukan kaki segitiga dari proyeksi?",
        },
        {
          "answer": "Tidak. Mencari hipotenusa dari proyeksi hanya membutuhkan penjumlahan, tanpa akar kuadrat. Teorema Pythagoras menjadi berguna ketika kakilah yang diketahui, atau ketika memverifikasi hasil melalui kaki-kaki.",
          "question": "Apakah teorema Pythagoras diperlukan untuk perhitungan ini?",
        },
        {
          "answer": "Ubah salah satu pengukuran agar keduanya menggunakan satuan yang sama sebelum menjumlahkan. Misalnya, [[p = 40]] mm menjadi 4 cm ketika [[q = 9]] cm, menghasilkan [[c = 13]] cm. Pemilih satuan kalkulator melayani tujuan yang sama.",
          "question": "Bagaimana jika p dan q memiliki satuan berbeda?",
        },
        {
          "answer": "Tidak. Proyeksi hanyalah bagian dari hipotenusa, sehingga ia harus lebih pendek dari keseluruhannya. Jika hasil Anda menunjukkan sebaliknya, suatu nilai dimasukkan ke kolom yang salah.",
          "question": "Bisakah proyeksi lebih panjang dari hipotenusa?",
        },
        {
          "answer": "Hitung ulang [[c = p + q]] perlahan, lalu pastikan kaki-kakinya memenuhi [[a^2 + b^2 = c^2]]. Periksa juga bahwa kedua proyeksi positif dan bahwa c melebihi masing-masingnya. Ketiga pemeriksaan memakan waktu kurang dari satu menit.",
          "question": "Bagaimana cara memverifikasi hasil hipotenusa?",
        },
      ],
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Pilih alat berikutnya berdasarkan pengukuran yang Anda ketahui. Setiap kalkulator di bawah menangani satu tugas segitiga siku-siku tertentu, dari ruas-ruas proyeksi individual hingga garis tinggi dan sisi-sisi segitiga.",
      "relatedItems": [
        "Kalkulator Proyeksi Segitiga Siku-Siku",
        "Kalkulator Proyeksi p Segitiga Siku-Siku",
        "Kalkulator Proyeksi q Segitiga Siku-Siku",
        "Kalkulator Garis Tinggi dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Sisi Segitiga Siku-Siku",
      ],
    },
};
