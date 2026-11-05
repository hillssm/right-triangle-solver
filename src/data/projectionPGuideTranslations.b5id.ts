// projectionPGuideTranslations.bid.ts: Right Triangle Projection P
// Guide (Page 34 of 45) translation.
export const PROJP_B5_ID = {
  "id": {
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "answer": "Rumusnya adalah [[p = \\frac{a^2}{c}]], dengan a adalah kaki yang berkaitan dengan p dan c adalah sisi miring lengkap. Kuadratkan kaki a dahulu, lalu bagi dengan c. Sebagai contoh, [[a = 6]] cm dan [[c = 10]] cm menghasilkan [[p = 3.6]] cm.",
          "question": "Apa rumus untuk proyeksi p?",
        },
        {
          "answer": "Proyeksi p adalah ruas sisi miring di sebelah titik sudut A, terbentuk ketika garis tinggi dari sudut siku-siku bertemu sisi miring di titik D. Pada segitiga ABC, [[p = AD]], bagian sisi miring yang berkaitan dengan kaki a.",
          "question": "Apa yang diwakili proyeksi p?",
        },
        {
          "answer": "Kuadrat itu berasal dari segitiga sebangun: segitiga ACD sebangun dengan segitiga ABC, menghasilkan [[\\frac{p}{a} = \\frac{a}{c}]], dan kaki a muncul pada kedua perbandingan. Perkalian silang menghasilkan [[a^2 = c \\times p]], jadi kuadrat itu sudah melekat pada geometrinya.",
          "question": "Mengapa kaki a dikuadratkan?",
        },
        {
          "answer": "Pembagian mengisolasi p. Teorema proyeksi menyatakan [[a^2 = c \\times p]], dengan p dikalikan c, jadi membagi kedua sisi dengan c membuat p berdiri sendiri. Pembagian juga mengubah panjang kuadrat menjadi panjang biasa.",
          "question": "Mengapa kita membagi dengan sisi miring?",
        },
        {
          "answer": "Tidak. Kaki a adalah sisi AC, salah satu sisi yang membentuk sudut siku-siku, sedangkan proyeksi p adalah ruas AD sepanjang sisi miring. Pada segitiga 6-8-10, kaki a adalah 6 cm dan proyeksi p hanya 3.6 cm.",
          "question": "Apakah proyeksi p sama dengan kaki a?",
        },
        {
          "answer": "Tidak. Proyeksi p hanyalah bagian dari sisi miring, jadi proyeksi p harus lebih kecil dari c. Jika p sama dengan c, q akan menjadi nol dan segitiganya degenerat. Hasil yang lebih besar dari c selalu menandakan kesalahan masukan atau pelabelan.",
          "question": "Bisakah proyeksi p lebih besar dari sisi miring?",
        },
        {
          "answer": "Proyeksi p terletak di sebelah titik sudut A dan berpasangan dengan kaki a, sedangkan proyeksi q terletak di sebelah titik sudut B dan berpasangan dengan kaki b. Keduanya adalah dua ruas yang dibuat garis tinggi pada sisi miring: [[p + q = c]].",
          "question": "Apa bedanya proyeksi p dan q?",
        },
        {
          "answer": "Tidak. Kaki a hanya berpasangan dengan proyeksi p. Untuk mencari q Anda membutuhkan kaki b, dengan [[q = \\frac{b^2}{c}]], atau mengurangkan: [[q = c - p]] setelah p diketahui. <a href=\"/right-triangle-projection-q-calculator/\">kalkulator proyeksi q</a> mencari q dari b dan c.",
          "question": "Bisakah saya menghitung proyeksi q menggunakan kaki a?",
        },
        {
          "answer": "Anda juga membutuhkan q atau c. Carilah q dengan [[q = c - p]], lalu gunakan [[h = \\sqrt{p \\times q}]]. Dengan [[p = 3.6]] cm dan [[c = 10]] cm, [[q = 6.4]] cm dan [[h = 4.8]] cm. Proyeksi p saja tidak dapat menentukan garis tinggi.",
          "question": "Bagaimana cara mencari garis tinggi ketika proyeksi p diketahui?",
        },
        {
          "answer": "Hitung ulang [[p = \\frac{a^2}{c}]], lalu periksa [[p + q = c]] setelah menemukan q dengan pengurangan, dan pastikan p positif dan lebih kecil dari c. Anda juga dapat menemukan kaki b dari q dan memeriksa [[a^2 + b^2 = c^2]].",
          "question": "Bagaimana cara memeriksa proyeksi p?",
        },
        {
          "answer": "Garis tinggi jatuh di titik tengah sisi miring, dan kedua kaki sama besar, jadi segitiganya sama kaki. Dengan [[c = 10]] cm dan [[p = q = 5]] cm, kedua kaki sama dengan [[\\sqrt{50}]] cm, sekitar 7.071 cm.",
          "question": "Apa yang terjadi ketika p dan q sama besar?",
        },
        {
          "answer": "Sisi miring terletak berhadapan dengan sudut siku-siku, sudut terbesar pada segitiga, dan sisi yang berhadapan dengan sudut terbesar selalu menjadi sisi terpanjang. Jika a sama dengan atau melebihi c, tidak ada segitiga siku-siku seperti itu yang dapat ada.",
          "question": "Mengapa sisi miring harus lebih panjang dari kaki a?",
        },
      ],
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Setiap kalkulator di bawah ini menangani satu tugas segitiga siku-siku tertentu, jadi pilih alat yang sesuai dengan ukuran yang sudah Anda ketahui.",
      "relatedItems": [
        "Kalkulator Proyeksi Segitiga Siku-Siku",
        "Kalkulator Proyeksi Q Segitiga Siku-Siku",
        "Kalkulator Kaki A dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Kaki B dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Sisi Miring dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Garis Tinggi dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Sisi Segitiga Siku-Siku",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Penggunaan yang paling langsung adalah pekerjaan rumah geometri dan kerja kelas, dengan soal proyeksi menguji apakah siswa dapat memberi label pada diagram dan menerapkan [[p = \\frac{a^2}{c}]] sebagai pengganti meraih teorema Pythagoras karena kebiasaan. Latihan segitiga sebangun menggunakan susunan yang sama, karena buktinya sendiri adalah latihan mencocokkan sisi-sisi yang bersesuaian.",
            },
            {
              "kind": "p",
              "text": "Gambar teknik menggunakan teorema ini ketika segitiga siku-siku harus direkonstruksi dari ukuran parsial: jika gambar memberikan sisi miring dan kaki garis tinggi, proyeksi yang hilang dapat ditemukan tanpa mengukur ulang bentuknya. Guru juga menggunakan susunan ini sebagai pelajaran penghubung antara penjumlahan ruas dan kesebangunan.",
            },
            {
              "kind": "p",
              "text": "Satu syarat membatasi setiap penerapan: geometri segitiga siku-siku yang diperlukan harus benar-benar ada. Teorema ini menggambarkan hubungan geometris yang tepat, bukan ukuran lapangan yang bersifat perkiraan, jadi teorema ini tidak pernah menggantikan survei yang cermat atau pengukuran teknik profesional.",
            },
          ],
          "h2": "Penerapan Praktis Perhitungan Proyeksi Segitiga Siku-Siku",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator memiliki dua kolom masukan. Kolom pertama menerima kaki a, sisi tegak lurus yang berkaitan dengan proyeksi p. Kolom kedua menerima sisi miring c, sisi lengkap yang berhadapan dengan sudut siku-siku. Kedua panjang harus menggunakan satuan yang sama, jadi ubahlah dahulu jika satu ukuran dalam sentimeter dan yang lain dalam meter.",
            },
            {
              "kind": "p",
              "text": "Sisi miring harus lebih panjang dari kaki a, karena kaki adalah salah satu sisi sudut siku-siku sedangkan sisi miring membentang di seluruh segitiga. Jika nilai a Anda lebih besar dari c, kemungkinan Anda memasukkan sebuah proyeksi, garis tinggi, atau sisi yang salah.",
            },
            {
              "kind": "p",
              "text": "Klik Hitung Proyeksi p untuk melihat hasilnya, dan gunakan Reset untuk mengosongkan kedua kolom sebelum soal baru. Hasilnya adalah panjang dalam satuan yang Anda masukkan, jadi kaki 6 cm dan sisi miring 10 cm menghasilkan 3.6 cm. Hasilnya adalah panjang ruas sepanjang sisi miring.",
            },
          ],
          "h2": "Hitung Proyeksi P Segitiga Siku-Siku",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram utama menunjukkan segitiga ABC dengan sudut siku-siku di C. Sisi AC adalah kaki a, sisi BC adalah kaki b, dan sisi AB adalah sisi miring c. Garis tinggi CD turun dari C tegak lurus ke AB dan menyentuhnya di D.",
            },
            {
              "kind": "p",
              "text": "Titik D membagi sisi miring menjadi dua bagian: ruas AD adalah proyeksi p dan ruas DB adalah proyeksi q. Kaki a dan proyeksi p disorot karena keduanya adalah pasangan yang dibahas halaman ini. Telusuri label dengan urutan ini: mulai dari A, ikuti kaki a ke C, lalu kaki b ke B, kemudian kembali sepanjang sisi miring dari B ke A, berhenti di D untuk melihat pembagian menjadi p dan q.",
            },
            {
              "kind": "p",
              "text": "Pasangan a dengan p menjadi terlihat pada segitiga kecil ACD, dengan kaki a sebagai sisi miring dan p sebagai sisi yang terletak sepanjang sisi miring besar. Karena segitiga ACD sebangun dengan segitiga ABC, perbandingan p terhadap a pada segitiga kecil sama dengan perbandingan a terhadap c pada segitiga besar.",
            },
          ],
          "h2": "Diagram Proyeksi P Segitiga Siku-Siku Dijelaskan",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan sudut siku-siku di C, garis tinggi CD ke sisi miring AB, kaki a dan proyeksi p disorot, dengan kaki a dan b, sisi miring c, proyeksi p dan q, serta garis tinggi h diberi label",
            "caption": "Garis tinggi CD membagi sisi miring AB menjadi proyeksi p (AD) dan proyeksi q (DB), dengan kaki a (AC) disorot.",
            "src": "projection-p-main-triangle.svg",
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
              "text": "Diketahui [[a = 6]] cm dan [[c = 10]] cm, rumus menghasilkan [[p = \\frac{6^2}{10} = \\frac{36}{10}]], jadi [[p = 3.6]] cm. Kaki kuadrat 36 adalah nilai perantara, dan membaginya dengan sisi miring mengubahnya kembali menjadi panjang. Kaki lain segitiga ini adalah 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Pembagian Kuadrat Sempurna",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 8]] cm dan [[c = 16]] cm, [[p = \\frac{8^2}{16} = \\frac{64}{16} = 4]] cm. Kaki kuadrat habis dibagi, jadi jawabannya tepat. Proyeksi lainnya di sini adalah 12 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Hasil Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 7]] cm dan [[c = 14]] cm, [[p = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Hasil desimal adalah hal yang normal: proyeksi tidak harus berupa bilangan bulat meskipun kedua masukannya bulat. Proyeksi lainnya adalah 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Ukuran yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 12]] m dan [[c = 20]] m, [[p = \\frac{12^2}{20} = \\frac{144}{20} = 7.2]] m. Angka yang lebih besar tidak mengubah metodenya: kuadratkan, lalu bagi. Proyeksi lainnya adalah 12.8 m, yang berpasangan dengan kaki 16 m.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran yang Kecil",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 30]] mm dan [[c = 50]] mm, [[p = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Ukuran kecil bekerja dengan cara yang sama, dan menjaga satuan dalam milimeter sepanjang perhitungan menghindari konversi apa pun. Proyeksi lainnya adalah 32 mm, yang berpasangan dengan kaki 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = \\frac{3}{4}]] ft dan [[c = \\frac{3}{2}]] ft, kuadratkan kakinya dahulu: [[a^2 = \\frac{9}{16}]] kaki persegi. Kemudian [[p = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Membagi dengan pecahan berarti mengalikan dengan kebalikannya, dan inilah langkah yang paling sering terlewat siswa pada ukuran pecahan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Satuan yang Berbeda",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 60]] cm dan [[c = 1]] m, ubah dahulu: 1 m sama dengan 100 cm. Kemudian [[p = \\frac{60^2}{100} = \\frac{3600}{100} = 36]] cm. Menggunakan 1 sebagai pengganti 100 akan menghasilkan 3600 cm, proyeksi yang jauh lebih panjang dari sisi miring.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Nilai Desimal yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 4.5]] m dan [[c = 7.5]] m, [[p = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Masukan desimal membutuhkan ketelitian yang sama seperti bilangan bulat: kuadratkan desimal penuhnya, lalu bagi. Proyeksi lainnya adalah 4.8 m, yang berpasangan dengan kaki 6 m.",
            },
          ],
          "h2": "Contoh Soal Menghitung Proyeksi P",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema proyeksi menyatakan bahwa kuadrat kaki a sama dengan sisi miring dikalikan proyeksinya:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Membagi kedua sisi dengan c mengisolasi p dan menghasilkan rumus kerja untuk halaman ini:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Perhitungan berjalan dalam dua tahap. Tahap 1 mengkuadratkan kaki a, mengalikannya dengan dirinya sendiri. Tahap 2 membagi panjang kuadrat itu dengan sisi miring lengkap c, dan hasilnya adalah panjang biasa, bukan panjang kuadrat.",
            },
            {
              "kind": "p",
              "text": "Satuan perlu diperhatikan pada kedua tahap. Jika a dan c sama-sama dalam sentimeter, maka [[a^2]] dalam sentimeter persegi, dan membaginya dengan sentimeter menghasilkan sentimeter. Mencampur satuan, misalnya meter untuk a dan sentimeter untuk c, menghasilkan hasil bagi yang tidak bermakna, jadi ubahlah ke satu satuan sebelum menghitung.",
            },
            {
              "kind": "p",
              "text": "Dengan [[a = 6]] cm dan [[c = 10]] cm, tahap 1 menghasilkan [[6^2 = 36]], dan tahap 2 menghasilkan [[p = \\frac{36}{10} = 3.6]] cm. Angka 36 sendiri tidak menjawab pertanyaan apa pun: hanya setelah pembagian barulah angka itu menjadi panjang proyeksi.",
            },
          ],
          "h2": "Rumus Proyeksi P Segitiga Siku-Siku",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan garis tinggi CD, menunjukkan proyeksi p sama dengan kuadrat kaki a dibagi sisi miring c",
            "caption": "Rumus proyeksi: p sama dengan a kuadrat dibagi c, dengan kaki garis tinggi D membagi sisi miring.",
            "src": "projection-p-formula.svg",
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
                "Temukan titik sudut siku-siku dan garis tinggi dari titik itu ke sisi miring.",
                "Kenali kaki tegak lurus yang berkaitan dengan proyeksi p, yaitu kaki yang menyentuh titik sudut A.",
                "Kenali sisi miring lengkap c, sisi yang berhadapan dengan sudut siku-siku.",
                "Pastikan c lebih besar dari a. Jika tidak, beri label ulang pada diagram sebelum melanjutkan.",
                "Pilih satuan yang cocok dan ubah satuan jika ukuran-ukuran itu menggunakan satuan yang berbeda.",
                "Masukkan kaki a pada kolom Kaki a.",
                "Masukkan sisi miring c pada kolom Sisi miring c.",
                "Klik Hitung Proyeksi p dan baca hasilnya.",
                "Periksa hasilnya: p harus positif dan lebih kecil dari c.",
                "Gunakan Reset saat memulai perhitungan baru.",
              ],
            },
            {
              "kind": "p",
              "text": "Memasukkan kaki b sebagai pengganti kaki a menghasilkan proyeksi yang berbeda. Kaki b berpasangan dengan q, jadi kalkulator akan menghasilkan ruas di sebelah titik sudut B, bukan ruas di sebelah A. Pemeriksaan label pada langkah 3 adalah yang paling penting.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Proyeksi P Segitiga Siku-Siku",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mencari proyeksi p dari sebuah segitiga siku-siku ketika Anda mengetahui kaki a dan sisi miring c yang lengkap. Proyeksi p adalah ruas garis pada sisi miring yang terletak di sebelah kaki a, terbentuk ketika garis tinggi dari sudut siku-siku bertemu sisi miring. Rumusnya adalah [[p = \\frac{a^2}{c}]], dengan a adalah kaki tegak lurus dan c adalah sisi miring penuh.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, dengan [[a = 6]] cm dan [[c = 10]] cm, perhitungannya adalah [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Nilai 3.6 cm adalah bagian dari sisi miring yang berkaitan dengan kaki a, bukan kaki itu sendiri dan bukan seluruh sisi miring.",
            },
            {
              "kind": "p",
              "text": "Kalkulator berada di bagian atas halaman ini, diikuti oleh rumus, diagram berlabel, bukti, contoh soal, dan pemeriksaan yang dapat Anda jalankan pada jawaban apa pun.",
            },
          ],
          "h2": "Kalkulator Proyeksi P Segitiga Siku-Siku",
        },
        "sec-leg-a-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki dua sisi tegak lurus, yang disebut kaki, dan satu sisi terpanjang, yang disebut sisi miring. Kedua kaki bertemu di sudut siku-siku, dan sisi miring terletak berhadapan dengan sudut itu. Di sini segitiganya adalah ABC dengan sudut siku-siku di C: kaki a adalah AC, kaki b adalah BC, dan sisi miring c adalah AB.",
            },
            {
              "kind": "p",
              "text": "Kaki a adalah salah satu dari dua sisi yang membentuk sudut siku-siku, jadi kaki a adalah sisi asli segitiga, bukan ruas yang digambar di dalamnya. Proyeksi p terletak datar sepanjang sisi miring, sedangkan kaki a membentang dari titik sudut A ke titik sudut siku-siku C.",
            },
            {
              "kind": "p",
              "text": "Sisi miring selalu menjadi sisi terpanjang pada segitiga siku-siku yang tidak degenerat, karena sisi miring terletak berhadapan dengan sudut terbesar, yaitu sudut siku-siku. Itulah sebabnya rumus mensyaratkan [[0 < a < c]] dan kalkulator mengharapkan sisi miring yang lebih panjang dari kaki.",
            },
            {
              "kind": "p",
              "text": "Posisi kaki a menentukan ruas mana yang disebut p: kaki a menyentuh titik sudut A, jadi ruas di sebelah A adalah p. Selalu periksa label pada diagram Anda sendiri sebelum memilih kaki mana yang dimasukkan.",
            },
          ],
          "h2": "Memahami Kaki A dan Sisi Miring",
          "table": {
            "headers": [
              "Simbol",
              "Arti",
            ],
            "rows": [
              [
                "a",
                "Kaki tegak lurus yang berkaitan dengan p",
              ],
              [
                "b",
                "Kaki tegak lurus lainnya",
              ],
              [
                "c",
                "Sisi miring lengkap",
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
                "Garis tinggi ke sisi miring",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap kesalahan di bawah ini diikuti oleh perbaikannya. Sebagian besar berakar pada pelabelan, bukan aritmetika.",
            },
            {
              "kind": "steps",
              "steps": [
                "Lupa mengkuadratkan kaki a: membagi a dengan c sebagai pengganti a kuadrat dengan c menghasilkan 0.6 cm sebagai pengganti 3.6 cm.",
                "Membagi c dengan a kuadrat sebagai pengganti a kuadrat dengan c: hasil baginya harus [[a^2/c]], bukan [[c/a^2]]. Dengan a = 6 dan c = 10, urutan yang salah menghasilkan sekitar 0.278, yang tidak memiliki satuan yang valid.",
                "Menggunakan kaki b sebagai pengganti kaki a: memasukkan b menghasilkan q. Dengan b = 8 dan c = 10, hasilnya 6.4 cm adalah q, bukan p.",
                "Mencampuradukkan proyeksi p dengan proyeksi q: p terletak di sebelah titik sudut A dan q di sebelah titik sudut B. Beri label pada kedua ruas sebelum menghitung.",
                "Memperlakukan p sebagai kaki tegak lurus yang sebenarnya: p adalah ruas sisi miring, bukan sisi AC. Pada segitiga 6-8-10, kaki a adalah 6 cm sedangkan p hanya 3.6 cm.",
                "Memasukkan nilai a yang lebih besar dari atau sama dengan c: tidak ada segitiga seperti itu, karena sisi miring adalah sisi terpanjang.",
                "Mencampur satuan ukuran: ubah dahulu, seperti pada Contoh 7, dengan 1 m menjadi 100 cm.",
                "Lupa bahwa sisi miring lengkap adalah c: menggunakan proyeksi atau kaki sebagai penyebut akan merusak hasilnya.",
                "Membulatkan perhitungan perantara terlalu dini: membulatkan kaki kuadrat sebelum membagi akan menggeser jawabannya.",
                "Mencampuradukkan panjang kuadrat dengan panjang biasa: 36 pada contoh 6-8-10 adalah panjang kuadrat, sedangkan 3.6 cm adalah proyeksi.",
                "Menerapkan rumus pada segitiga yang tidak siku-siku: teorema proyeksi membutuhkan garis tinggi dari sudut siku-siku.",
                "Lupa bahwa p hanyalah satu ruas sisi miring: p ditambah q sama dengan c, jadi hasil sebesar c atau lebih menandakan kesalahan.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika sebuah jawaban tampak salah, berhentilah dan beri label ulang pada diagram sebelum menghitung kembali. Sebagian besar kesalahan di atas hilang begitu p dan q ditandai dengan jelas pada sisi miring.",
            },
          ],
          "h2": "Kesalahan Umum saat Menghitung Proyeksi P",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cobalah keenam soal di atas kertas sebelum membaca jawabannya. Tidak satu pun nilainya mengulang contoh soal.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki kaki [[a = 9]] cm dan sisi miring [[c = 15]] cm. Carilah proyeksi p.",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Nilai Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = 1.5]] m dan [[c = 2.5]] m, carilah proyeksi p.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[a = \\frac{5}{6}]] ft dan [[c = \\frac{5}{3}]] ft, carilah p sebagai pecahan.",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Konversi Satuan",
            },
            {
              "kind": "p",
              "text": "Sebuah kaki berukuran [[a = 80]] cm dan sisi miring berukuran [[c = 2]] m. Carilah p dalam sentimeter.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Cari q Setelah Menghitung p",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi miring [[c = 25]] cm dan kaki [[a = 15]] cm. Carilah p, lalu q.",
            },
            {
              "kind": "h3",
              "text": "Soal 6: Bertahap dengan Proyeksi p dan Garis Tinggi h",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 25]] cm dan [[a = 15]] cm, carilah p, lalu q, lalu garis tinggi h.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Jawaban 1: [[p = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 2: [[p = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Jawaban 3: [[a^2 = \\frac{25}{36}]], jadi [[p = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Jawaban 4: Ubah 2 m menjadi 200 cm, lalu [[p = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 5: [[p = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, lalu [[q = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 6: [[p = 9]] cm dan [[q = 16]] cm, jadi [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Soal Latihan Beserta Jawabannya",
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beberapa soal menanyakan proyeksi lainnya. Rumus yang bersesuaian adalah cerminan dari rumus untuk p, dengan kaki b menggantikan kaki a:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[b = 8]] cm dan [[c = 10]] cm. Kemudian [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Hasil itu cocok dengan proyeksi lain segitiga 6-8-10 dari contoh sebelumnya, dengan p sebesar 3.6 cm dan kedua proyeksi berjumlah 10 cm.",
            },
            {
              "kind": "p",
              "text": "Rumus menggunakan b sebagai pengganti a karena setiap kaki berpasangan dengan proyeksi di sebelah titik sudutnya sendiri. Kaki b menyentuh titik sudut B, dan q adalah ruas di sebelah B. Memasukkan a ke rumus ini akan menghasilkan p, bukan q. Kalkulator pada halaman ini hanya menerima a dan c, jadi gunakan <a href=\"/right-triangle-projection-q-calculator/\">kalkulator proyeksi q</a> ketika Anda perlu mencari q dari b dan c.",
            },
          ],
          "h2": "Cara Menghitung Proyeksi Q dari Kaki Lainnya",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti ini bertumpu pada segitiga sebangun. Menggambar garis tinggi CD membagi segitiga ABC menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD, dan keduanya sebangun dengan segitiga aslinya. Salah satu perbandingan sisinya menghasilkan teorema proyeksi secara langsung.",
            },
            {
              "kind": "p",
              "text": "Fokus pada segitiga ACD dan seluruh segitiga ABC. Keduanya memuat sudut di A, dan keduanya memuat sudut siku-siku, sehingga sudut ketiganya pun harus sama. Mencocokkan sisi-sisi yang berada pada posisi yang sama menghasilkan perbandingan:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang substitusikan simbol standar: [[AD = p]], [[AC = a]], dan [[AB = c]]. Perbandingan itu menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Perkalian silang menghilangkan pecahan. Pembilang kiri dikali penyebut kanan sama dengan pembilang kanan dikali penyebut kiri, sehingga [[p \\times c = a \\times a]], yaitu:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Membagi kedua sisi dengan c menyelesaikan bukti, menghasilkan [[p = \\frac{a^2}{c}]]. Argumen yang sama diterapkan pada segitiga kecil lainnya, CBD, menghasilkan [[b^2 = c \\times q]].",
            },
          ],
          "h2": "Mengapa Rumus Proyeksi P Berlaku?",
          "image": {
            "alt": "Segitiga siku-siku asli ABC di samping segitiga-segitiga kecil yang sebangun ACD dan CBD, menunjukkan perbandingan p terhadap a sama dengan a terhadap c",
            "caption": "Bukti segitiga sebangun: p terhadap a sama dengan a terhadap c, jadi perkalian silang menghasilkan a kuadrat sama dengan c dikali p.",
            "src": "projection-p-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Delapan sifat berikut langsung dari [[p = \\frac{a^2}{c}]]. Masing-masing juga berfungsi sebagai pemeriksaan kewajaran untuk jawaban baru.",
            },
            {
              "items": [
                "Proyeksi p selalu lebih pendek dari sisi miring lengkap pada segitiga yang tidak degenerat, karena p hanya bagian dari c.",
                "Memperbesar kaki a sambil menjaga c tetap akan memperbesar p, karena kaki kuadrat pada pembilang membesar.",
                "Memperbesar c sambil menjaga a tetap akan memperkecil p, karena penyebut membesar.",
                "Jika a dan c sama-sama dikalikan dengan faktor positif yang sama, p berskala dengan faktor itu.",
                "Jika p sama dengan q, kedua kaki sama besar, dan segitiganya adalah segitiga siku-siku sama kaki.",
                "Proyeksi p selalu positif pada segitiga yang valid dan tidak degenerat. Nilai nol atau negatif tidak menggambarkan segitiga nyata.",
                "Proyeksi p adalah panjang, bukan luas. Kaki kuadrat hanyalah langkah perantara, dan membagi dengan c mengembalikan satuan panjang biasa.",
                "Proyeksi p berkaitan khusus dengan kaki a. Menggunakannya dengan kaki b menjawab pertanyaan yang sama sekali berbeda.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Ketika garis tinggi jatuh di titik tengah sisi miring, kedua kaki harus sama, seperti yang ditunjukkan diagram di bawah ini.",
            },
          ],
          "h2": "Sifat-Sifat Penting Proyeksi P",
          "image": {
            "alt": "Dua segitiga siku-siku berdampingan, satu dengan proyeksi p dan q yang sama sebesar 5 dan satu dengan proyeksi yang tidak sama, p sama dengan 3.6 dan q sama dengan 6.4",
            "caption": "Proyeksi yang sama (p = q = 5) menghasilkan kaki yang sama, sedangkan proyeksi yang tidak sama (p = 3.6, q = 6.4) menghasilkan kaki yang tidak sama.",
            "src": "projection-p-equal-vs-unequal.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema proyeksi dan teorema Pythagoras cocok persis, dan aljabar menunjukkan alasannya. Mulai dari dua rumus proyeksi, [[a^2 = c \\times p]] dan [[b^2 = c \\times q]], dan jumlahkan keduanya:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Memfaktorkan c dari sisi kanan menghasilkan [[a^2 + b^2 = c(p + q)]]. Karena [[p + q = c]], substitusi menghasilkan hasil yang sudah dikenal:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Pemeriksaan numerik dengan segitiga 6-8-10 mengonfirmasinya: [[a^2 + b^2 = 36 + 64 = 100]] dan [[c^2 = 10^2 = 100]]. Teorema proyeksi membagi hubungan Pythagoras menjadi satu bagian per kaki, dan menjumlahkan bagian-bagian itu membangunnya kembali.",
            },
            {
              "kind": "p",
              "text": "Pembagian itulah yang membuat rumus proyeksi berguna: teorema Pythagoras saja tidak dapat menemukan proyeksi dari kaki dan sisi miring, karena teorema itu berbicara tentang kaki-kaki secara bersamaan.",
            },
          ],
          "h2": "Hubungan antara Proyeksi P dan Teorema Pythagoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Proyeksi p juga terhubung dengan garis tinggi melalui hubungan rata-rata geometris kedua. Garis tinggi h adalah rata-rata geometris dari kedua proyeksi:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Karena [[q = c - p]], garis tinggi juga dapat ditulis hanya dengan p dan c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p(c - p)}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[p = 3.6]] cm dan [[c = 10]] cm. Cari q dahulu: [[q = 10 - 3.6 = 6.4]] cm. Kemudian [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Garis tinggi lebih pendek dari kedua kaki, seperti seharusnya.",
            },
            {
              "kind": "p",
              "text": "Proyeksi p saja tidak menentukan garis tinggi: dua segitiga yang berbeda dapat berbagi p yang sama dengan sisi miring yang berbeda. Sisi miring lengkap, atau proyeksi lainnya, selalu diperlukan juga. <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator garis tinggi dari proyeksi</a> menangani perhitungan itu ketika kedua proyeksi diketahui.",
            },
          ],
          "h2": "Hubungan antara Proyeksi P dan Garis Tinggi",
        },
        "sec-relationship-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus proyeksi dapat disusun ulang untuk mencari kaki a sebagai pengganti p. Mulai dari [[a^2 = c \\times p]], ambil akar kuadrat positif dari kedua sisi:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Periksa dengan angka yang sudah dikenal: [[a = 6]] cm, [[c = 10]] cm, dan [[p = 3.6]] cm. Hasil kali di dalam akar adalah [[c \\times p = 10 \\times 3.6 = 36]], dan [[\\sqrt{36} = 6]] cm, yaitu kaki yang kita mulai.",
            },
            {
              "kind": "p",
              "text": "Kaitannya adalah hubungan rata-rata geometris: kaki a adalah rata-rata geometris dari sisi miring dan proyeksinya. Itulah sebabnya kaki muncul dalam bentuk kuadrat pada teorema dan mengapa akar kuadrat muncul saat menyelesaikan untuk kaki. Untuk soal yang berawal dari p dan c, <a href=\"/right-triangle-leg-a-from-projection-calculator/\">kalkulator kaki a dari proyeksi</a> menjalankan rumus yang disusun ulang ini secara langsung.",
            },
          ],
          "h2": "Hubungan antara Proyeksi P dan Kaki A",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua proyeksi adalah dua bagian dari satu sisi lurus, jadi keduanya dijumlahkan menjadi seluruh sisi miring:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Menyusun ulang menghasilkan [[q = c - p]]. Dengan [[c = 10]] cm dan [[p = 3.6]] cm, pengurangannya adalah [[q = 10 - 3.6 = 6.4]] cm. Pengurangan yang sama berlaku sebaliknya: [[p = c - q]]. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">kalkulator sisi miring dari proyeksi</a> membangun kembali c dari p dan q ketika sisi miring itu sendiri tidak diketahui.",
            },
            {
              "kind": "p",
              "text": "Membandingkan p dan q memberi tahu Anda tentang bentuk segitiga. Ketika p sama dengan q, garis tinggi jatuh di titik tengah sisi miring dan kedua kaki sama besar, jadi segitiganya sama kaki. Ketika p lebih besar dari q, kaki a lebih panjang dari kaki b, dan ketika q lebih besar, kaki b lebih panjang. Proyeksi yang lebih panjang selalu milik kaki yang lebih panjang.",
            },
            {
              "kind": "p",
              "text": "Pada segitiga 6-8-10, q adalah 6.4 cm dan p adalah 3.6 cm, jadi q lebih besar, dan kaki b sebesar 8 cm memang lebih panjang dari kaki a sebesar 6 cm.",
            },
          ],
          "h2": "Hubungan antara Proyeksi P dan Proyeksi Q",
          "image": {
            "alt": "Segitiga siku-siku yang membandingkan proyeksi p yang berpasangan dengan kaki a dengan proyeksi q yang berpasangan dengan kaki b, dengan c sama dengan 10, p sama dengan 3.6, dan q sama dengan 6.4",
            "caption": "p menggunakan a (36 dibagi 10 = 3.6) dan q menggunakan b (64 dibagi 10 = 6.4).",
            "src": "projection-p-vs-q.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[a = 6]] cm dan [[c = 10]] cm. Empat langkah di bawah ini menunjukkan seluruh pengerjaan, tanpa ada yang dilewati.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis rumusnya: [[p = \\frac{a^2}{c}]].",
                "Substitusikan nilainya: [[p = \\frac{6^2}{10}]].",
                "Kuadratkan kakinya: [[p = \\frac{36}{10}]].",
                "Bagi: [[p = 3.6]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawaban 3.6 cm adalah ruas sisi miring di sebelah kaki a, bukan sisi tegak lurus dan bukan luas. Pemeriksaan singkat menutup lingkaran: [[a^2 = 6^2 = 36]] dan [[c \\times p = 10 \\times 3.6 = 36]], jadi kedua sisi teorema cocok.",
            },
            {
              "kind": "p",
              "text": "Sebagai referensi, proyeksi lainnya adalah [[q = 10 - 3.6 = 6.4]] cm, kaki b adalah [[b = \\sqrt{10 \\times 6.4} = 8]] cm, dan garis tingginya adalah [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, yang mengonfirmasi segitiga siku-siku 6-8-10 yang sudah dikenal.",
            },
          ],
          "h2": "Contoh Langkah demi Langkah Mencari Proyeksi P",
          "image": {
            "alt": "Segitiga siku-siku dengan kaki a 6 cm dan sisi miring 10 cm, dikerjakan hingga menghasilkan proyeksi p sama dengan 3.6 cm",
            "caption": "Contoh soal: a = 6 cm dan c = 10 cm menghasilkan p = 36 dibagi 10 = 3.6 cm.",
            "src": "projection-p-example-a6-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Empat pemeriksaan independen menangkap hampir semua kesalahan. Jalankan setidaknya satu pada setiap jawaban, dan keempatnya ketika soal itu penting. Contoh di bawah ini menggunakan [[a = 6]] cm, [[c = 10]] cm, dan [[p = 3.6]] cm di seluruh bagiannya.",
            },
            {
              "kind": "h3",
              "text": "Metode 1: Pemeriksaan Teorema Proyeksi",
            },
            {
              "kind": "p",
              "text": "Periksa [[p = \\frac{a^2}{c}]] secara langsung. Di sini [[\\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm, yang cocok dengan jawabannya. Jika perhitungan ulang berbeda, pengkuadratan atau pembagiannya salah.",
            },
            {
              "kind": "h3",
              "text": "Metode 2: Penjumlahan Ruas",
            },
            {
              "kind": "p",
              "text": "Carilah q dengan pengurangan: [[q = 10 - 3.6 = 6.4]] cm. Lalu periksa [[p + q = 3.6 + 6.4 = 10]] cm, yang sama dengan c. Jumlah yang tidak sama dengan c menunjukkan kesalahan pengurangan.",
            },
            {
              "kind": "h3",
              "text": "Metode 3: Pemeriksaan Teorema Pythagoras",
            },
            {
              "kind": "p",
              "text": "Hitung kaki b dari q: [[b = \\sqrt{10 \\times 6.4} = 8]] cm. Lalu periksa [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Pemeriksaan ini menguji seluruh segitiga, jadi pemeriksaan ini menangkap kesalahan pelabelan yang tidak dapat ditangkap pemeriksaan pertama. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator kaki b dari proyeksi</a> menjalankan langkah b secara langsung.",
            },
            {
              "kind": "h3",
              "text": "Metode 4: Kewajaran Geometris",
            },
            {
              "kind": "p",
              "text": "Pastikan p positif, lebih kecil dari c, dalam satuan yang benar, dan merupakan ruas sisi miring, bukan sisi tegak lurus. Di sini 3.6 cm positif, lebih kecil dari 10 cm, dalam sentimeter, dan jauh lebih pendek dari kaki a sebesar 6 cm.",
            },
          ],
          "h2": "Cara Memeriksa Perhitungan Proyeksi P Anda",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gambarlah garis tinggi dari titik sudut siku-siku C tegak lurus ke sisi miring AB. Garis tinggi itu bertemu sisi miring di sebuah titik yang disebut kaki garis tinggi, diberi label D, dan membaginya menjadi dua ruas yang bersebelahan: AD adalah proyeksi p, dan DB adalah proyeksi q.",
            },
            {
              "kind": "p",
              "text": "Proyeksi p termasuk kaki a karena proyeksi p terletak di sebelah titik sudut A, titik sudut yang sama dengan tempat kaki a bermula. Pada segitiga kecil ACD, kaki a adalah sisi miring dan p adalah salah satu kakinya, dan inilah kaitan geometris yang membuat teorema proyeksi berlaku. Proyeksi q, dengan penalaran yang sama, termasuk kaki b, yang menyentuh titik sudut B.",
            },
            {
              "kind": "p",
              "text": "Proyeksi adalah panjang sepanjang sisi miring, diukur dalam satuan yang sama dengan sisi-sisi lainnya. Proyeksi tidak tegak lurus terhadap apa pun, dan proyeksi bukan sisi segitiga aslinya. <a href=\"/right-triangle-projection-calculator/\">kalkulator proyeksi segitiga siku-siku</a> mencari kedua proyeksi ketika kaki-kaki dan sisi miring diketahui.",
            },
            {
              "kind": "p",
              "text": "Karena p dan q adalah dua bagian dari satu sisi lurus, keduanya dijumlahkan menjadi seluruh sisi miring:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Dengan [[c = 10]] cm dan [[p = 3.6]] cm, proyeksi lainnya adalah [[q = 10 - 3.6 = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Proyeksi p tidak sama dengan kaki a. Kaki a adalah sisi AC, salah satu sisi yang membentuk sudut siku-siku, sedangkan p adalah ruas AD sepanjang sisi miring. Pada segitiga 6-8-10, kaki a adalah 6 cm dan proyeksi p hanya 3.6 cm.",
            },
          ],
          "h2": "Apa Itu Proyeksi P pada Segitiga Siku-Siku?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kuadrat itu ada karena teorema proyeksi adalah pernyataan tentang kaki yang dikuadratkan: teorema itu menyatakan kuadrat kaki a sama dengan hasil kali c dan p, [[a^2 = c \\times p]], dan rumus untuk p adalah hasil yang Anda peroleh dengan membagi kedua sisi dengan c.",
            },
            {
              "kind": "p",
              "text": "Alasannya berakar pada segitiga sebangun. Pada segitiga ACD, kaki a berperan sebagai sisi miring, sedangkan p adalah salah satu kakinya. Membandingkan segitiga kecil dengan segitiga utuh menghasilkan perbandingan [[\\frac{p}{a} = \\frac{a}{c}]], dan kaki a muncul dua kali, satu kali pada setiap perbandingan. Perkalian silang menempatkan a pada kedua sisi, dan inilah tepatnya mengapa kuadrat itu muncul.",
            },
            {
              "kind": "p",
              "text": "Hubungan rata-rata geometris menyatakan hal yang sama dengan kata yang berbeda: kaki a adalah rata-rata geometris dari sisi miring c dan proyeksinya p, yang berarti [[a = \\sqrt{c \\times p}]]. Mengkuadratkan kedua sisi menghasilkan [[a^2 = c \\times p]], dan membagi dengan c mengisolasi p.",
            },
            {
              "kind": "p",
              "text": "Pembagian adalah langkah yang mengisolasi p. Perkalian dalam teorema mengikat p pada c, dan membagi dengan c melepaskan ikatan itu. Tanpa kuadrat, rumus akan mencampur panjang dengan luas, dan satuannya tidak akan cocok.",
            },
          ],
          "h2": "Mengapa Kaki A Dikuadratkan dalam Rumus Proyeksi?",
        },
      },
      "tocHeading": "Isi Panduan",
      "tocItems": {
        "sec-applications": "Penerapan Praktis Perhitungan Proyeksi Segitiga Siku-Siku",
        "sec-calculate": "Hitung Proyeksi P Segitiga Siku-Siku",
        "sec-diagram": "Diagram Proyeksi P Segitiga Siku-Siku Dijelaskan",
        "sec-examples": "Contoh Soal Menghitung Proyeksi P",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
        "sec-formula": "Rumus Proyeksi P Segitiga Siku-Siku",
        "sec-how-to-use": "Cara Menggunakan Kalkulator Proyeksi P Segitiga Siku-Siku",
        "sec-intro": "Kalkulator Proyeksi P Segitiga Siku-Siku",
        "sec-leg-a-hypotenuse": "Memahami Kaki A dan Sisi Miring",
        "sec-mistakes": "Kesalahan Umum saat Menghitung Proyeksi P",
        "sec-practice": "Soal Latihan Beserta Jawabannya",
        "sec-projection-q": "Cara Menghitung Proyeksi Q dari Kaki Lainnya",
        "sec-proof": "Mengapa Rumus Proyeksi P Berlaku?",
        "sec-properties": "Sifat-Sifat Penting Proyeksi P",
        "sec-pythagoras": "Hubungan antara Proyeksi P dan Teorema Pythagoras",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-relationship-altitude": "Hubungan antara Proyeksi P dan Garis Tinggi",
        "sec-relationship-leg-a": "Hubungan antara Proyeksi P dan Kaki A",
        "sec-relationship-pq": "Hubungan antara Proyeksi P dan Proyeksi Q",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Proyeksi P",
        "sec-verify": "Cara Memeriksa Perhitungan Proyeksi P Anda",
        "sec-what-projection-p": "Apa Itu Proyeksi P pada Segitiga Siku-Siku?",
        "sec-why-squared": "Mengapa Kaki A Dikuadratkan dalam Rumus Proyeksi?",
      },
    },
};
