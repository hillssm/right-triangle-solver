// projectionQGuideTranslations.bid.ts: Right Triangle Projection Q
// Guide (Page 36 of 45) translation.
export const PROJQ_B5_ID = {
  "id": {
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "answer": "Rumusnya adalah [[q = \\frac{b^2}{c}]], dengan b adalah kaki yang berkaitan dengan q dan c adalah hipotenusa lengkap. Kuadratkan kaki b terlebih dahulu, lalu bagi dengan c. Sebagai contoh, [[b = 8]] cm dan [[c = 10]] cm menghasilkan [[q = 6.4]] cm.",
          "question": "Apa rumus untuk proyeksi q?",
        },
        {
          "answer": "Proyeksi q adalah ruas hipotenusa di samping titik sudut B, yang terbentuk ketika garis tinggi dari sudut siku-siku bertemu hipotenusa di titik D. Pada segitiga ABC, [[q = DB]], yaitu bagian hipotenusa yang berkaitan dengan kaki b.",
          "question": "Apa yang diwakili oleh proyeksi q?",
        },
        {
          "answer": "Kuadrat itu berasal dari segitiga sebangun: segitiga CBD sebangun dengan segitiga ABC, sehingga [[\\frac{q}{b} = \\frac{b}{c}]], dan kaki b muncul di kedua perbandingan. Perkalian silang menghasilkan [[b^2 = c \\times q]], jadi kuadrat itu sudah melekat pada geometrinya.",
          "question": "Mengapa kaki b dikuadratkan?",
        },
        {
          "answer": "Pembagian memisahkan q. Teorema proyeksi menyatakan [[b^2 = c \\times q]], dengan q dikalikan c, sehingga membagi kedua ruas dengan c membuat q berdiri sendiri. Pembagian juga mengubah panjang yang dikuadratkan menjadi panjang biasa.",
          "question": "Mengapa kita membagi dengan hipotenusa?",
        },
        {
          "answer": "Tidak. Kaki b adalah sisi BC, salah satu sisi yang membentuk sudut siku-siku, sedangkan proyeksi q adalah ruas DB sepanjang hipotenusa. Pada segitiga 6-8-10, kaki b adalah 8 cm dan proyeksi q hanya 6,4 cm.",
          "question": "Apakah proyeksi q sama dengan kaki b?",
        },
        {
          "answer": "Proyeksi q terletak di samping titik sudut B dan berpasangan dengan kaki b, sedangkan proyeksi p terletak di samping titik sudut A dan berpasangan dengan kaki a. Keduanya adalah dua ruas yang dibuat garis tinggi pada hipotenusa: [[p + q = c]].",
          "question": "Mengapa q dikaitkan dengan kaki b, bukan dengan kaki a?",
        },
        {
          "answer": "Proyeksi p terletak di samping titik sudut A dan berpasangan dengan kaki a, sedangkan proyeksi q terletak di samping titik sudut B dan berpasangan dengan kaki b. Keduanya adalah dua ruas yang dibuat garis tinggi pada hipotenusa: [[p + q = c]]. Pada segitiga 6-8-10, p adalah 3.6 cm dan q adalah 6.4 cm, jadi q adalah ruas yang lebih panjang.",
          "question": "Apa perbedaan antara proyeksi p dan proyeksi q?",
        },
        {
          "answer": "Ya. Kurangkan q dari hipotenusa: [[p = c - q]]. Dengan [[c = 10]] cm dan [[q = 6.4]] cm, [[p = 3.6]] cm. Anda juga dapat mencari p langsung dari kaki a dengan [[p = \\frac{a^2}{c}]].",
          "question": "Dapatkah saya menghitung proyeksi p jika saya sudah mengetahui q?",
        },
        {
          "answer": "Tidak. Proyeksi q hanya sebagian dari hipotenusa, jadi nilainya harus lebih kecil dari c. Jika q sama dengan c, p akan menjadi nol dan segitiganya merosot. Hasil yang lebih besar dari c selalu menandakan kesalahan masukan atau pelabelan.",
          "question": "Dapatkah proyeksi q lebih besar dari hipotenusa?",
        },
        {
          "answer": "Anda juga memerlukan p atau c. Cari p dengan [[p = c - q]], lalu gunakan [[h = \\sqrt{p \\times q}]]. Dengan [[q = 6.4]] cm dan [[c = 10]] cm, [[p = 3.6]] cm dan [[h = 4.8]] cm. Proyeksi q saja tidak dapat menentukan garis tinggi.",
          "question": "Bagaimana cara mencari garis tinggi ketika q diketahui?",
        },
        {
          "answer": "Hitung ulang [[q = \\frac{b^2}{c}]], lalu periksa [[p + q = c]] setelah mencari p dengan pengurangan, dan pastikan q positif dan lebih kecil dari c. Anda juga dapat mencari kaki a dari p dan memeriksa [[a^2 + b^2 = c^2]].",
          "question": "Bagaimana cara memeriksa perhitungan proyeksi q?",
        },
        {
          "answer": "Garis tinggi jatuh di titik tengah hipotenusa, dan kedua kakinya sama panjang, sehingga segitiganya sama kaki. Dengan [[c = 10]] cm dan [[p = q = 5]] cm, kedua kaki sama dengan [[\\sqrt{50}]] cm, sekitar 7,071 cm.",
          "question": "Apa yang terjadi ketika p dan q sama besar?",
        },
      ],
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Setiap kalkulator di bawah ini menangani satu tugas segitiga siku-siku tertentu, jadi pilihlah alat yang sesuai dengan ukuran yang sudah Anda ketahui.",
      "relatedItems": [
        "Kalkulator Proyeksi Segitiga Siku-Siku",
        "Kalkulator Proyeksi P Segitiga Siku-Siku",
        "Kalkulator Kaki B dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Hipotenusa dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Tinggi dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Sisi Segitiga Siku-Siku",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Penggunaan yang paling langsung adalah pekerjaan rumah dan kerja kelas geometri, di mana soal proyeksi menguji apakah siswa dapat memberi label pada diagram dan menerapkan [[q = \\frac{b^2}{c}]] alih-alih langsung memakai teorema Pythagoras karena kebiasaan. Latihan segitiga sebangun memakai susunan yang sama, karena pembuktiannya sendiri merupakan latihan mencocokkan sisi-sisi yang bersesuaian.",
            },
            {
              "kind": "p",
              "text": "Gambar teknis memakai teorema ini ketika sebuah segitiga siku-siku harus direkonstruksi dari ukuran sebagian: jika sebuah gambar memberikan hipotenusa dan kaki garis tinggi, proyeksi yang hilang dapat diperoleh tanpa mengukur ulang bentuknya. Guru juga memakai susunan ini sebagai pelajaran penghubung antara penjumlahan ruas dan kesebangunan.",
            },
            {
              "kind": "p",
              "text": "Satu syarat membatasi setiap penerapan: geometri segitiga siku-siku yang diperlukan harus benar-benar ada. Teorema ini menjelaskan hubungan geometris yang tepat, bukan ukuran lapangan yang bersifat perkiraan, sehingga teorema ini tidak pernah menggantikan survei yang cermat atau pengukuran teknik profesional.",
            },
          ],
          "h2": "Penerapan Praktis Perhitungan Proyeksi Segitiga Siku-Siku",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini memiliki dua kolom masukan. Kolom pertama menerima kaki b, sisi tegak yang berkaitan dengan proyeksi q. Kolom kedua menerima hipotenusa c, sisi lengkap yang berhadapan dengan sudut siku-siku. Kedua panjang harus memakai satuan yang sama, jadi lakukan konversi terlebih dahulu jika satu ukuran dalam sentimeter dan yang lain dalam meter.",
            },
            {
              "kind": "p",
              "text": "Hipotenusa harus lebih panjang dari kaki b, karena kaki adalah salah satu sisi sudut siku-siku sedangkan hipotenusa membentang di seluruh segitiga. Jika nilai b Anda lebih besar dari c, Anda mungkin telah memasukkan sebuah proyeksi, garis tinggi, atau sisi yang salah.",
            },
            {
              "kind": "p",
              "text": "Klik Hitung Proyeksi q untuk melihat hasilnya, dan gunakan Atur Ulang untuk mengosongkan kedua kolom sebelum soal baru. Hasilnya adalah panjang dalam satuan yang Anda masukkan, jadi kaki 8 cm dan hipotenusa 10 cm menghasilkan 6,4 cm. Hasilnya adalah panjang ruas sepanjang hipotenusa.",
            },
          ],
          "h2": "Hitung Proyeksi Q Segitiga Siku-Siku",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram utama menunjukkan segitiga ABC dengan sudut siku-siku di C. Sisi AC adalah kaki a, sisi BC adalah kaki b, dan sisi AB adalah hipotenusa c. Garis tinggi CD turun dari C tegak lurus ke AB dan menyentuhnya di D.",
            },
            {
              "kind": "p",
              "text": "Titik D membagi hipotenusa menjadi dua bagian: ruas AD adalah proyeksi p dan ruas DB adalah proyeksi q. Kaki b dan proyeksi q diberi sorotan karena keduanya adalah pasangan yang dibahas di halaman ini. Telusuri labelnya dalam urutan ini: mulai di B, jalani kaki b ke C, lalu kaki a ke A, kemudian kembali sepanjang hipotenusa dari A ke B, dan berhenti di D untuk melihat pembagian menjadi p dan q.",
            },
            {
              "kind": "p",
              "text": "Pasangan b dengan q menjadi terlihat pada segitiga kecil CBD, di mana kaki b adalah hipotenusa dan q adalah sisi yang terletak sepanjang hipotenusa besar. Karena segitiga CBD sebangun dengan segitiga ABC, perbandingan q terhadap b pada segitiga kecil sama dengan perbandingan b terhadap c pada segitiga besar.",
            },
          ],
          "h2": "Penjelasan Diagram Proyeksi Q Segitiga Siku-Siku",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan sudut siku-siku di C, garis tinggi CD ke hipotenusa AB, kaki b dan proyeksi q diberi sorotan, dengan kaki a dan b, hipotenusa c, proyeksi p dan q, serta garis tinggi h diberi label",
            "caption": "Garis tinggi CD membagi hipotenusa AB menjadi proyeksi p (AD) dan proyeksi q (DB), dengan kaki b (BC) diberi sorotan.",
            "src": "projection-q-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap contoh menyatakan nilai yang diketahui, substitusinya, dan jawaban akhirnya, dan setiap contoh menjaga satuannya tetap konsisten dari awal sampai akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 8]] cm dan [[c = 10]] cm, rumusnya menghasilkan [[q = \\frac{8^2}{10} = \\frac{64}{10}]], jadi [[q = 6.4]] cm. Kaki yang dikuadratkan, 64, adalah nilai antara, dan membaginya dengan hipotenusa mengubahnya kembali menjadi panjang. Kaki lain segitiga ini adalah 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Pembagian Kuadrat Sempurna",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 12]] cm dan [[c = 24]] cm, [[q = \\frac{12^2}{24} = \\frac{144}{24} = 6]] cm. Kaki yang dikuadratkan habis dibagi, jadi jawabannya tepat. Proyeksi lain di sini adalah 18 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Hasil Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 7]] cm dan [[c = 14]] cm, [[q = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Hasil desimal adalah hal yang wajar: proyeksi tidak harus berupa bilangan bulat meskipun kedua masukannya bulat. Proyeksi lain adalah 10,5 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Ukuran yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 15]] m dan [[c = 25]] m, [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] m. Angka yang lebih besar tidak mengubah caranya: kuadratkan, lalu bagi. Proyeksi lain adalah 16 m, yang berpasangan dengan kaki 20 m.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran Kecil",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 30]] mm dan [[c = 50]] mm, [[q = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Ukuran kecil bekerja dengan cara yang sama, dan menjaga satuan dalam milimeter sepanjang perhitungan menghindari konversi apa pun. Proyeksi lain adalah 32 mm, yang berpasangan dengan kaki 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = \\frac{3}{4}]] ft dan [[c = \\frac{3}{2}]] ft, kuadratkan kaki terlebih dahulu: [[b^2 = \\frac{9}{16}]] kaki persegi. Kemudian [[q = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Membagi dengan pecahan berarti mengalikan dengan kebalikannya, dan langkah inilah yang paling sering terlewat siswa pada ukuran pecahan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Satuan Berbeda",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 80]] cm dan [[c = 1]] m, lakukan konversi terlebih dahulu: 1 m sama dengan 100 cm. Kemudian [[q = \\frac{80^2}{100} = \\frac{6400}{100} = 64]] cm. Menggunakan 1 alih-alih 100 akan menghasilkan 6400 cm, proyeksi yang jauh lebih panjang dari hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Nilai Desimal yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 4.5]] m dan [[c = 7.5]] m, [[q = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Masukan desimal memerlukan ketelitian yang sama seperti bilangan bulat: kuadratkan desimal secara utuh, lalu bagi. Proyeksi lain adalah 4,8 m, yang berpasangan dengan kaki 6 m.",
            },
          ],
          "h2": "Contoh Soal Menghitung Proyeksi Q",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema proyeksi menyatakan bahwa kuadrat kaki b sama dengan hipotenusa dikalikan proyeksinya:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Membagi kedua ruas dengan c memisahkan q dan menghasilkan rumus kerja untuk halaman ini:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Perhitungan berjalan dalam dua tahap. Tahap 1 mengkuadratkan kaki b, yaitu mengalikannya dengan dirinya sendiri. Tahap 2 membagi panjang yang dikuadratkan itu dengan hipotenusa lengkap c, dan hasilnya adalah panjang biasa, bukan panjang yang dikuadratkan.",
            },
            {
              "kind": "p",
              "text": "Satuan memerlukan perhatian di kedua tahap. Jika b dan c keduanya dalam sentimeter, [[b^2]] dalam sentimeter persegi, dan membaginya dengan sentimeter menghasilkan sentimeter. Mencampur satuan, misalnya meter untuk b dan sentimeter untuk c, menghasilkan hasil bagi yang tidak bermakna, jadi lakukan konversi ke satu satuan sebelum menghitung.",
            },
            {
              "kind": "p",
              "text": "Dengan [[b = 8]] cm dan [[c = 10]] cm, tahap 1 menghasilkan [[8^2 = 64]], dan tahap 2 menghasilkan [[q = \\frac{64}{10} = 6.4]] cm. Angka 64 sendiri tidak menjawab pertanyaan apa pun: hanya setelah pembagian, angka itu menjadi panjang proyeksi.",
            },
          ],
          "h2": "Rumus Proyeksi Q Segitiga Siku-Siku",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan garis tinggi CD, menunjukkan proyeksi q sama dengan kaki b kuadrat dibagi hipotenusa c",
            "caption": "Rumus proyeksi: q sama dengan b kuadrat dibagi c, dengan kaki garis tinggi D membagi hipotenusa.",
            "src": "projection-q-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sebelas langkah singkat membawa Anda dari diagram berlabel menuju jawaban yang sudah diperiksa.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenali segitiga siku-siku dalam soal Anda dan pastikan segitiga itu memiliki sudut siku-siku.",
                "Temukan titik sudut siku-siku dan garis tinggi dari titik itu ke hipotenusa.",
                "Kenali kaki tegak yang berkaitan dengan proyeksi q, yaitu kaki yang menyentuh titik sudut B.",
                "Kenali hipotenusa lengkap c, sisi yang berhadapan dengan sudut siku-siku.",
                "Pastikan c lebih besar dari b. Jika tidak, beri label ulang pada diagram sebelum melanjutkan.",
                "Pilih satuan yang sesuai dan lakukan konversi jika ukurannya memakai satuan berbeda.",
                "Masukkan kaki b pada kolom Kaki b.",
                "Masukkan hipotenusa c pada kolom Hipotenusa c.",
                "Klik Hitung Proyeksi q dan baca hasilnya.",
                "Periksa hasilnya: q harus positif dan lebih kecil dari c.",
                "Gunakan Atur Ulang saat memulai perhitungan baru.",
              ],
            },
            {
              "kind": "p",
              "text": "Memasukkan kaki a alih-alih kaki b menghasilkan proyeksi yang berbeda. Kaki a berpasangan dengan p, jadi kalkulator akan menghasilkan ruas di samping titik sudut A, bukan ruas di samping B. Pemeriksaan label pada langkah 3 adalah yang paling penting.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Proyeksi Q Segitiga Siku-Siku",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mencari proyeksi q dari sebuah segitiga siku-siku ketika Anda mengetahui kaki b dan hipotenusa lengkap c. Proyeksi q adalah ruas hipotenusa yang terletak di samping kaki b, yang terbentuk ketika garis tinggi dari sudut siku-siku bertemu hipotenusa. Rumusnya adalah [[q = \\frac{b^2}{c}]], dengan b adalah kaki tegak dan c adalah hipotenusa penuh.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, dengan [[b = 8]] cm dan [[c = 10]] cm, perhitungannya adalah [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Nilai 6,4 cm adalah bagian hipotenusa yang berkaitan dengan kaki b, bukan kaki itu sendiri dan bukan seluruh hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Kalkulator berada di bagian atas halaman ini, diikuti oleh rumus, diagram berlabel, pembuktian, contoh soal, dan pemeriksaan yang dapat Anda jalankan pada jawaban apa pun.",
            },
          ],
          "h2": "Kalkulator Proyeksi Q Segitiga Siku-Siku",
        },
        "sec-leg-b-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki dua sisi tegak lurus, yang disebut kaki, dan satu sisi terpanjang, yang disebut hipotenusa. Kedua kaki bertemu di sudut siku-siku, dan hipotenusa terletak berhadapan dengan sudut itu. Di sini segitiganya adalah ABC dengan sudut siku-siku di C: kaki a adalah AC, kaki b adalah BC, dan hipotenusa c adalah AB.",
            },
            {
              "kind": "p",
              "text": "Kaki b adalah salah satu dari dua sisi yang membentuk sudut siku-siku, jadi kaki b adalah sisi asli segitiga, bukan ruas yang digambar di dalamnya. Proyeksi q terletak datar sepanjang hipotenusa, sedangkan kaki b berjalan dari titik sudut B ke titik sudut siku-siku C.",
            },
            {
              "kind": "p",
              "text": "Hipotenusa selalu menjadi sisi terpanjang pada segitiga siku-siku yang tidak merosot, karena hipotenusa terletak berhadapan dengan sudut terbesar, yaitu sudut siku-siku. Itulah sebabnya rumus mensyaratkan [[0 < b < c]] dan kalkulator mengharapkan hipotenusa yang lebih panjang dari kaki.",
            },
            {
              "kind": "p",
              "text": "Posisi kaki b menentukan ruas mana yang disebut q: kaki b menyentuh titik sudut B, jadi ruas di samping B adalah q. Selalu periksa label pada diagram Anda sendiri sebelum memilih kaki mana yang akan dimasukkan.",
            },
          ],
          "h2": "Memahami Kaki B dan Hipotenusa",
          "table": {
            "headers": [
              "Simbol",
              "Arti",
            ],
            "rows": [
              [
                "a",
                "Kaki tegak lurus lainnya",
              ],
              [
                "b",
                "Kaki yang berkaitan dengan q",
              ],
              [
                "c",
                "Hipotenusa lengkap",
              ],
              [
                "p",
                "Proyeksi yang berkaitan dengan a",
              ],
              [
                "q",
                "Proyeksi yang berkaitan dengan b",
              ],
              [
                "h",
                "Garis tinggi ke hipotenusa",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap kesalahan di bawah ini diikuti oleh perbaikannya. Sebagian besar berawal dari pelabelan, bukan dari hitungan.",
            },
            {
              "kind": "steps",
              "steps": [
                "Memakai kaki a alih-alih kaki b: memasukkan a menghasilkan p. Dengan a = 6 dan c = 10, hasil 3,6 cm adalah p, bukan q.",
                "Lupa mengkuadratkan kaki b: membagi b dengan c alih-alih b kuadrat dengan c menghasilkan 0,8 cm, bukan 6,4 cm.",
                "Membagi c dengan b kuadrat alih-alih b kuadrat dengan c: hasil baginya harus [[b^2/c]], bukan [[c/b^2]]. Dengan b = 8 dan c = 10, urutan yang salah menghasilkan sekitar 0,156, yang tidak memiliki satuan yang valid.",
                "Tertukar antara proyeksi p dan proyeksi q: q terletak di samping titik sudut B dan p di samping titik sudut A. Beri label pada kedua ruas sebelum menghitung.",
                "Menganggap q sebagai kaki tegak yang sebenarnya: q adalah ruas hipotenusa, bukan sisi BC. Pada segitiga 6-8-10, kaki b adalah 8 cm sedangkan q hanya 6,4 cm.",
                "Memasukkan nilai kaki yang lebih besar dari atau sama dengan c: segitiga seperti itu tidak ada, karena hipotenusa adalah sisi terpanjang.",
                "Mencampur sentimeter dan meter: lakukan konversi terlebih dahulu, seperti pada Contoh 7, di mana 1 m menjadi 100 cm.",
                "Lupa bahwa c menyatakan hipotenusa lengkap: memakai proyeksi atau kaki sebagai penyebut akan merusak hasilnya.",
                "Membulatkan perhitungan antara terlalu dini: membulatkan kaki yang dikuadratkan sebelum membagi akan menggeser jawabannya.",
                "Tertukar antara b dan b kuadrat: 64 pada contoh 6-8-10 adalah panjang yang dikuadratkan, sedangkan 6,4 cm adalah proyeksinya.",
                "Menerapkan rumus pada segitiga yang bukan siku-siku: teorema proyeksi memerlukan garis tinggi dari sudut siku-siku.",
                "Menganggap q sebagai seluruh hipotenusa: q ditambah p sama dengan c, jadi hasil sebesar c atau lebih menandakan kesalahan.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika sebuah jawaban tampak salah, berhentilah dan beri label ulang pada diagram sebelum menghitung ulang. Sebagian besar kesalahan di atas hilang begitu p dan q ditandai dengan jelas pada hipotenusa.",
            },
          ],
          "h2": "Kesalahan Umum Saat Menghitung Proyeksi Q",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Coba kerjakan keenam soal di atas kertas sebelum membaca jawabannya. Tidak ada nilai yang mengulang contoh soal.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki kaki [[b = 9]] cm dan hipotenusa [[c = 15]] cm. Carilah proyeksi q.",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Nilai Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = 1.5]] m dan [[c = 2.5]] m, carilah proyeksi q.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[b = \\frac{5}{6}]] ft dan [[c = \\frac{5}{3}]] ft, carilah q sebagai pecahan.",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Konversi Satuan",
            },
            {
              "kind": "p",
              "text": "Sebuah kaki berukuran [[b = 80]] cm dan hipotenusanya berukuran [[c = 2]] m. Carilah q dalam sentimeter.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Cari p Setelah Menghitung q",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki hipotenusa [[c = 25]] cm dan kaki [[b = 15]] cm. Carilah q, lalu p.",
            },
            {
              "kind": "h3",
              "text": "Soal 6: Bertahap dengan Proyeksi q dan Garis Tinggi h",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 25]] cm dan [[b = 15]] cm, carilah q, lalu p, lalu garis tinggi h.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Jawaban 1: [[q = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 2: [[q = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Jawaban 3: [[b^2 = \\frac{25}{36}]], jadi [[q = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Jawaban 4: Ubah 2 m menjadi 200 cm, lalu [[q = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 5: [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, lalu [[p = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 6: [[q = 9]] cm dan [[p = 16]] cm, jadi [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Soal Latihan Beserta Jawabannya",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pembuktian ini bertumpu pada segitiga sebangun. Menggambar garis tinggi CD membagi segitiga ABC menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD, dan keduanya sebangun dengan segitiga aslinya. Salah satu perbandingan sisinya langsung menghasilkan teorema proyeksi.",
            },
            {
              "kind": "p",
              "text": "Perhatikan segitiga CBD dan segitiga utuh ABC. Keduanya memuat sudut di B, dan keduanya memuat sudut siku-siku, sehingga sudut ketiganya juga harus sama. Mencocokkan sisi-sisi yang terletak pada posisi yang sama menghasilkan perbandingan:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang substitusikan simbol standarnya: [[DB = q]], [[BC = b]], dan [[AB = c]]. Perbandingan itu menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Perkalian silang menghilangkan pecahan. Pembilang kiri dikali penyebut kanan sama dengan pembilang kanan dikali penyebut kiri, sehingga [[q \\times c = b \\times b]], yaitu:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Membagi kedua ruas dengan c menyelesaikan pembuktian, sehingga diperoleh [[q = \\frac{b^2}{c}]]. Argumen yang sama yang diterapkan pada segitiga kecil lainnya, ACD, menghasilkan [[a^2 = c \\times p]].",
            },
          ],
          "h2": "Mengapa Rumus Proyeksi Q Berlaku?",
          "image": {
            "alt": "Segitiga siku-siku asli ABC di samping segitiga sebangun yang lebih kecil, ACD dan CBD, yang menunjukkan perbandingan q per b sama dengan b per c",
            "caption": "Pembuktian segitiga sebangun: q per b sama dengan b per c, sehingga perkalian silang menghasilkan b kuadrat sama dengan c kali q.",
            "src": "projection-q-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sembilan sifat berikut langsung dari [[q = \\frac{b^2}{c}]]. Masing-masing juga berfungsi sebagai pemeriksaan kewajaran untuk jawaban baru.",
            },
            {
              "items": [
                "Proyeksi q selalu lebih pendek dari hipotenusa lengkap pada segitiga yang tidak merosot, karena q hanya sebagian dari c.",
                "Memperbesar kaki b sambil menjaga c tetap akan memperbesar q, karena kaki yang dikuadratkan pada pembilang membesar.",
                "Memperbesar c sambil menjaga b tetap akan memperkecil q, karena penyebutnya membesar.",
                "Jika b dan c keduanya dikalikan dengan faktor positif yang sama, q berskala dengan faktor itu.",
                "Jika p sama dengan q, kedua kaki tegak sama panjang, dan segitiganya adalah segitiga siku-siku sama kaki.",
                "Proyeksi q selalu positif pada segitiga valid yang tidak merosot. Nilai nol atau negatif tidak menggambarkan segitiga nyata.",
                "Proyeksi q adalah panjang, bukan luas. Kaki yang dikuadratkan hanya langkah antara, dan membaginya dengan c mengembalikan satuan panjang biasa.",
                "Proyeksi q secara khusus berkaitan dengan kaki b. Memakainya bersama kaki a menjawab pertanyaan yang sama sekali berbeda.",
                "Menukar p dan q mengubah kaki mana yang berkaitan dengan masing-masing proyeksi, jadi labelnya harus tetap cocok dengan titik sudutnya.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Ketika garis tinggi jatuh di titik tengah hipotenusa, kedua kaki harus sama, seperti yang ditunjukkan diagram di bawah ini.",
            },
          ],
          "h2": "Sifat Penting Proyeksi Q",
          "image": {
            "alt": "Dua segitiga siku-siku berdampingan, satu dengan proyeksi p dan q yang sama, yaitu 5, dan satu dengan proyeksi yang tidak sama, p sama dengan 3,6 dan q sama dengan 6,4",
            "caption": "Proyeksi yang sama (p = q = 5) menghasilkan kaki yang sama, sedangkan proyeksi yang tidak sama (p = 3,6, q = 6,4) menghasilkan kaki yang tidak sama.",
            "src": "projection-q-equal-vs-unequal.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beberapa soal meminta proyeksi yang lain. Rumus yang bersesuaian adalah cerminan rumus untuk q, dengan kaki a menggantikan kaki b:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 6]] cm dan [[c = 10]] cm. Kemudian [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Hasil itu cocok dengan proyeksi lain dari segitiga 6-8-10 pada contoh sebelumnya, di mana q adalah 6,4 cm dan kedua proyeksi berjumlah 10 cm.",
            },
            {
              "kind": "p",
              "text": "Rumus ini memakai a, bukan b, karena setiap kaki berpasangan dengan proyeksi di samping titik sudutnya sendiri. Kaki a menyentuh titik sudut A, dan p adalah ruas di samping A. Memasukkan b ke dalam rumus ini akan menghasilkan q, bukan p. Kalkulator di halaman ini hanya menerima b dan c, jadi gunakan <a href=\"/right-triangle-projection-p-calculator/\">kalkulator proyeksi p</a> ketika Anda perlu mencari p dari a dan c.",
            },
          ],
          "h2": "Cara Menghitung Proyeksi P dari Kaki yang Lain",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema proyeksi dan teorema Pythagoras cocok secara tepat, dan aljabar menunjukkan alasannya. Mulailah dari dua rumus proyeksi, [[a^2 = c \\times p]] dan [[b^2 = c \\times q]], lalu jumlahkan keduanya:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Memfaktorkan c dari ruas kanan menghasilkan [[a^2 + b^2 = c(p + q)]]. Karena [[p + q = c]], substitusi menghasilkan hasil yang sudah dikenal:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Pemeriksaan angka dengan segitiga 6-8-10 mengonfirmasinya: [[a^2 + b^2 = 36 + 64 = 100]] dan [[c^2 = 10^2 = 100]]. Teorema proyeksi membagi hubungan Pythagoras menjadi satu bagian per kaki, dan menjumlahkan bagian-bagian itu membangunnya kembali.",
            },
            {
              "kind": "p",
              "text": "Pembagian itulah yang membuat rumus proyeksi berguna: teorema Pythagoras saja tidak dapat mencari proyeksi dari kaki dan hipotenusa, karena teorema itu membahas kedua kaki secara bersamaan.",
            },
          ],
          "h2": "Hubungan antara Proyeksi Q dan Teorema Pythagoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Proyeksi q juga terhubung dengan garis tinggi melalui hubungan rata-rata geometris kedua. Garis tinggi h adalah rata-rata geometris dari kedua proyeksi:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Karena [[p = c - q]], garis tinggi juga dapat ditulis hanya dengan q dan c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{q(c - q)}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[q = 6.4]] cm dan [[c = 10]] cm. Pertama carilah p: [[p = 10 - 6.4 = 3.6]] cm. Kemudian [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Garis tinggi lebih pendek dari kedua kaki, sebagaimana mestinya.",
            },
            {
              "kind": "p",
              "text": "Proyeksi q saja tidak menentukan garis tinggi: dua segitiga yang berbeda dapat memiliki q yang sama dengan hipotenusa yang berbeda. Hipotenusa lengkap, atau proyeksi lainnya, selalu diperlukan juga. <a href=\"/right-triangle-altitude-from-projections-calculator/\">Kalkulator tinggi dari proyeksi</a> menangani perhitungan itu ketika kedua proyeksi diketahui.",
            },
          ],
          "h2": "Hubungan antara Proyeksi Q dan Garis Tinggi",
        },
        "sec-relationship-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus proyeksi dapat disusun ulang untuk mencari kaki b, bukan q. Mulai dari [[b^2 = c \\times q]], ambil akar kuadrat positif dari kedua ruas:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Periksalah dengan angka yang sudah dikenal: [[b = 8]] cm, [[c = 10]] cm, dan [[q = 6.4]] cm. Hasil kali di dalam akar adalah [[c \\times q = 10 \\times 6.4 = 64]], dan [[\\sqrt{64} = 8]] cm, yaitu kaki yang kita mulai.",
            },
            {
              "kind": "p",
              "text": "Hubungannya adalah hubungan rata-rata geometris: kaki b adalah rata-rata geometris dari hipotenusa dan proyeksinya. Itulah sebabnya kaki muncul dalam bentuk kuadrat pada teorema dan akar kuadrat muncul ketika menyelesaikan untuk kaki. Untuk soal yang berawal dari q dan c, <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator kaki b dari proyeksi</a> menjalankan rumus yang disusun ulang ini secara langsung.",
            },
          ],
          "h2": "Hubungan antara Proyeksi Q dan Kaki B",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua proyeksi adalah dua bagian dari satu sisi lurus, jadi keduanya berjumlah sama dengan seluruh hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Menyusun ulang menghasilkan [[p = c - q]]. Dengan [[c = 10]] cm dan [[q = 6.4]] cm, pengurangannya adalah [[p = 10 - 6.4 = 3.6]] cm. Pengurangan yang sama berlaku sebaliknya: [[q = c - p]]. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Kalkulator hipotenusa dari proyeksi</a> membangun kembali c dari p dan q ketika hipotenusa itu sendiri tidak diketahui.",
            },
            {
              "kind": "p",
              "text": "Membandingkan p dan q memberi tahu Anda tentang bentuk segitiga. Ketika q sama dengan p, garis tinggi jatuh di titik tengah hipotenusa dan kedua kaki sama panjang, sehingga segitiganya sama kaki. Ketika q lebih besar dari p, kaki b lebih panjang dari kaki a, dan ketika p lebih besar, kaki a lebih panjang. Proyeksi yang lebih panjang selalu dimiliki oleh kaki yang lebih panjang.",
            },
            {
              "kind": "p",
              "text": "Pada segitiga 6-8-10, q adalah 6,4 cm dan p adalah 3,6 cm, jadi q lebih besar, dan kaki b sebesar 8 cm memang lebih panjang dari kaki a sebesar 6 cm.",
            },
          ],
          "h2": "Hubungan antara Proyeksi P dan Proyeksi Q",
          "image": {
            "alt": "Segitiga siku-siku yang membandingkan proyeksi q yang berpasangan dengan kaki b dengan proyeksi p yang berpasangan dengan kaki a, dengan c sama dengan 10, q sama dengan 6,4, dan p sama dengan 3,6",
            "caption": "q memakai b (64 dibagi 10 = 6,4) dan p memakai a (36 dibagi 10 = 3,6).",
            "src": "projection-q-vs-p.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[b = 8]] cm dan [[c = 10]] cm. Keempat langkah di bawah ini menunjukkan pengerjaan lengkap, tanpa ada yang dilewati.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis rumusnya: [[q = \\frac{b^2}{c}]].",
                "Substitusikan nilainya: [[q = \\frac{8^2}{10}]].",
                "Kuadratkan kakinya: [[q = \\frac{64}{10}]].",
                "Bagi: [[q = 6.4]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawaban 6,4 cm adalah ruas hipotenusa di samping kaki b, bukan sisi tegak dan bukan luas. Pemeriksaan singkat menutup lingkaran: [[b^2 = 8^2 = 64]] dan [[c \\times q = 10 \\times 6.4 = 64]], jadi kedua ruas teorema cocok.",
            },
            {
              "kind": "p",
              "text": "Sebagai rujukan, proyeksi lainnya adalah [[p = 10 - 6.4 = 3.6]] cm, kaki a adalah [[a = \\sqrt{10 \\times 3.6} = 6]] cm, dan garis tingginya adalah [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, yang mengonfirmasi segitiga siku-siku 6-8-10 yang sudah dikenal.",
            },
          ],
          "h2": "Contoh Langkah demi Langkah Mencari Proyeksi Q",
          "image": {
            "alt": "Segitiga siku-siku dengan kaki b 8 cm dan hipotenusa 10 cm, dikerjakan hingga menghasilkan proyeksi q sama dengan 6,4 cm",
            "caption": "Contoh soal: b = 8 cm dan c = 10 cm menghasilkan q = 64 dibagi 10 = 6,4 cm.",
            "src": "projection-q-example-b8-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Empat pemeriksaan mandiri menangkap hampir setiap kesalahan. Jalankan setidaknya satu pada setiap jawaban, dan keempatnya ketika soalnya penting. Contoh di bawah ini memakai [[b = 8]] cm, [[c = 10]] cm, dan [[q = 6.4]] cm sepanjang pembahasan.",
            },
            {
              "kind": "h3",
              "text": "Cara 1: Pemeriksaan Teorema Proyeksi",
            },
            {
              "kind": "p",
              "text": "Periksa [[q = \\frac{b^2}{c}]] secara langsung. Di sini [[\\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm, yang cocok dengan jawabannya. Jika perhitungan ulang berbeda, pengkuadratan atau pembagiannya yang salah.",
            },
            {
              "kind": "h3",
              "text": "Cara 2: Penjumlahan Ruas",
            },
            {
              "kind": "p",
              "text": "Carilah p dengan pengurangan: [[p = 10 - 6.4 = 3.6]] cm. Kemudian periksa [[p + q = 3.6 + 6.4 = 10]] cm, yang sama dengan c. Jumlah yang tidak sama dengan c menunjukkan kesalahan pengurangan.",
            },
            {
              "kind": "h3",
              "text": "Cara 3: Pemeriksaan Teorema Pythagoras",
            },
            {
              "kind": "p",
              "text": "Hitung kaki a dari p: [[a = \\sqrt{10 \\times 3.6} = 6]] cm. Kemudian periksa [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Pemeriksaan ini menguji seluruh segitiga, jadi pemeriksaan ini menangkap kesalahan pelabelan yang dapat terlewat oleh pemeriksaan pertama. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Kalkulator kaki a dari proyeksi</a> menjalankan langkah a secara langsung.",
            },
            {
              "kind": "h3",
              "text": "Cara 4: Kewajaran Geometris",
            },
            {
              "kind": "p",
              "text": "Pastikan q positif, lebih kecil dari c, dalam satuan yang benar, dan merupakan ruas hipotenusa, bukan sisi tegak. Di sini 6,4 cm positif, lebih kecil dari 10 cm, dalam sentimeter, dan lebih pendek dari kaki b sebesar 8 cm.",
            },
          ],
          "h2": "Cara Memeriksa Perhitungan Proyeksi Q Anda",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gambarlah garis tinggi dari titik sudut siku-siku C tegak lurus ke hipotenusa AB. Garis itu bertemu hipotenusa di sebuah titik yang disebut kaki, diberi label D, dan membaginya menjadi dua ruas yang berdampingan: AD adalah proyeksi p, dan DB adalah proyeksi q.",
            },
            {
              "kind": "p",
              "text": "Proyeksi q dimiliki oleh kaki b karena proyeksi itu terletak di samping titik sudut B, titik sudut yang sama dengan tempat kaki b bermula. Pada segitiga kecil CBD, kaki b adalah hipotenusa dan q adalah salah satu kakinya, dan hubungan geometris inilah yang membuat teorema proyeksi berlaku. Proyeksi p, dengan penalaran yang sama, dimiliki oleh kaki a, yang menyentuh titik sudut A.",
            },
            {
              "kind": "p",
              "text": "Proyeksi adalah panjang sepanjang hipotenusa, diukur dalam satuan yang sama dengan sisi-sisi lainnya. Proyeksi tidak tegak lurus terhadap apa pun, dan bukan sisi dari segitiga aslinya. <a href=\"/right-triangle-projection-calculator/\">Kalkulator proyeksi segitiga siku-siku</a> mencari kedua proyeksi ketika kaki dan hipotenusa diketahui.",
            },
            {
              "kind": "p",
              "text": "Karena p dan q adalah dua bagian dari satu sisi lurus, keduanya berjumlah sama dengan seluruh hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Dengan [[c = 10]] cm dan [[q = 6.4]] cm, proyeksi lainnya adalah [[p = 10 - 6.4 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Proyeksi q tidak sama dengan kaki b. Kaki b adalah sisi BC, salah satu sisi yang membentuk sudut siku-siku, sedangkan q adalah ruas DB sepanjang hipotenusa. Pada segitiga 6-8-10, kaki b adalah 8 cm dan proyeksi q hanya 6,4 cm.",
            },
          ],
          "h2": "Apa Itu Proyeksi Q pada Segitiga Siku-Siku?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kuadrat itu ada karena teorema proyeksi adalah pernyataan tentang kaki yang dikuadratkan: teorema itu menyatakan kuadrat kaki b sama dengan hasil kali c dan q, [[b^2 = c \\times q]], dan rumus untuk q adalah hasil yang diperoleh dengan membagi kedua ruas dengan c.",
            },
            {
              "kind": "p",
              "text": "Alasannya berakar pada segitiga sebangun. Pada segitiga CBD, kaki b berperan sebagai hipotenusa, sedangkan q adalah salah satu kakinya. Membandingkan segitiga kecil dengan segitiga utuh menghasilkan perbandingan [[\\frac{q}{b} = \\frac{b}{c}]], dan kaki b muncul dua kali, satu kali di setiap perbandingan. Perkalian silang menempatkan b di kedua ruas, dan itulah tepatnya mengapa kuadrat muncul.",
            },
            {
              "kind": "p",
              "text": "Hubungan rata-rata geometris menyatakan hal yang sama dengan kata yang berbeda: kaki b adalah rata-rata geometris dari hipotenusa c dan proyeksinya q, yang berarti [[b = \\sqrt{c \\times q}]]. Mengkuadratkan kedua ruas menghasilkan [[b^2 = c \\times q]], dan membaginya dengan c memisahkan q.",
            },
            {
              "kind": "p",
              "text": "Pembagian adalah langkah yang memisahkan q. Perkalian dalam teorema mengikat q dengan c, dan membagi dengan c melepaskan ikatan itu. Tanpa kuadrat, rumus akan mencampur panjang dengan luas, dan satuannya tidak akan cocok.",
            },
          ],
          "h2": "Mengapa Kaki B Dikuadratkan dalam Rumus Proyeksi?",
        },
      },
      "tocHeading": "Isi Panduan",
      "tocItems": {
        "sec-applications": "Penerapan Praktis Perhitungan Proyeksi Segitiga Siku-Siku",
        "sec-calculate": "Hitung Proyeksi Q Segitiga Siku-Siku",
        "sec-diagram": "Penjelasan Diagram Proyeksi Q Segitiga Siku-Siku",
        "sec-examples": "Contoh Soal Menghitung Proyeksi Q",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
        "sec-formula": "Rumus Proyeksi Q Segitiga Siku-Siku",
        "sec-how-to-use": "Cara Menggunakan Kalkulator Proyeksi Q Segitiga Siku-Siku",
        "sec-intro": "Kalkulator Proyeksi Q Segitiga Siku-Siku",
        "sec-leg-b-hypotenuse": "Memahami Kaki B dan Hipotenusa",
        "sec-mistakes": "Kesalahan Umum Saat Menghitung Proyeksi Q",
        "sec-practice": "Soal Latihan Beserta Jawabannya",
        "sec-projection-p": "Cara Menghitung Proyeksi P dari Kaki yang Lain",
        "sec-proof": "Mengapa Rumus Proyeksi Q Berlaku?",
        "sec-properties": "Sifat Penting Proyeksi Q",
        "sec-pythagoras": "Hubungan antara Proyeksi Q dan Teorema Pythagoras",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-relationship-altitude": "Hubungan antara Proyeksi Q dan Garis Tinggi",
        "sec-relationship-leg-b": "Hubungan antara Proyeksi Q dan Kaki B",
        "sec-relationship-pq": "Hubungan antara Proyeksi P dan Proyeksi Q",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Proyeksi Q",
        "sec-verify": "Cara Memeriksa Perhitungan Proyeksi Q Anda",
        "sec-what-projection-q": "Apa Itu Proyeksi Q pada Segitiga Siku-Siku?",
        "sec-why-squared": "Mengapa Kaki B Dikuadratkan dalam Rumus Proyeksi?",
      },
    },
};
