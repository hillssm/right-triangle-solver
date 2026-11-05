// legBFromProjectionGuideTranslations.bid.ts: Right Triangle Leg B From Projection
// Guide (Page 32 of 45) translation.
export const LBP_B5_ID = {
  "id": {
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Apa rumus mencari kaki b dari proyeksi q?",
          "answer": "Rumusnya adalah [[b = \\sqrt{c \\times q}]], dengan c adalah hipotenusa penuh dan q adalah proyeksi milik kaki b. Misalnya, [[c = 10]] cm dan [[q = 6.4]] cm menghasilkan [[b = 8]] cm.",
        },
        {
          "question": "Mengapa c dan q dikalikan?",
          "answer": "Perkalian berasal dari segitiga-segitiga yang sebangun. Segitiga CBD sebangun dengan segitiga ABC, sehingga [[q / b = b / c]], dan perkalian silang menghasilkan [[b^2 = c \\times q]]. Hasil kali itu adalah kuadrat kaki, bukan kaki itu sendiri.",
        },
        {
          "question": "Mengapa akar kuadrat diperlukan?",
          "answer": "Karena hasil kali cq sama dengan b kuadrat, bukan b. Akar kuadrat membatalkan pengkuadratan dan mengembalikan panjang biasa. Tanpa akar kuadrat, Anda akan melaporkan 64, bukan 8, dalam contoh c = 10, q = 6.4.",
        },
        {
          "question": "Apa yang dimaksud proyeksi q?",
          "answer": "Proyeksi q adalah ruas hipotenusa di samping titik sudut B, yang terbentuk ketika garis tinggi dari sudut siku-siku bertemu hipotenusa. Pada segitiga ABC dengan garis tinggi CD, [[q = DB]], dan ruas itu terletak di sepanjang hipotenusa.",
        },
        {
          "question": "Apakah proyeksi q sama dengan kaki b?",
          "answer": "Tidak. Kaki b adalah sisi BC, salah satu sisi yang membentuk sudut siku-siku, sedangkan proyeksi q adalah ruas DB di sepanjang hipotenusa. Keduanya berbeda panjang dan berbeda posisi, hanya dihubungkan oleh [[b^2 = c \\times q]].",
        },
        {
          "question": "Mengapa digunakan q, bukan p?",
          "answer": "Karena setiap kaki berpasangan dengan proyeksi di samping titik sudutnya sendiri. Kaki b menyentuh titik sudut B, dan q adalah ruas di samping B. Menggunakan p akan menghasilkan kaki a, karena p berpasangan dengan kaki yang menyentuh titik sudut A.",
        },
        {
          "question": "Dapatkah saya mencari kaki b jika hanya proyeksi p yang diketahui?",
          "answer": "Ya. Kurangkan p dari hipotenusa terlebih dahulu: [[q = c - p]]. Dengan [[c = 25]] cm dan [[p = 9]] cm, [[q = 16]] cm, lalu [[b = \\sqrt{25 \\times 16} = 20]] cm.",
        },
        {
          "question": "Dapatkah proyeksi q lebih besar daripada hipotenusa?",
          "answer": "Tidak. Proyeksi q hanya sebagian dari hipotenusa, jadi harus lebih kecil dari c. Jika q sama dengan c, p akan bernilai nol dan segitiganya menjadi degenerat, bukan segitiga siku-siku yang sebenarnya.",
        },
        {
          "question": "Bagaimana cara memverifikasi kaki yang dihitung?",
          "answer": "Kuadratkan jawabannya dan periksa apakah hasilnya sama dengan [[c \\times q]]. Anda juga dapat mencari kaki a dari p dan memeriksa [[a^2 + b^2 = c^2]], serta memastikan q lebih kecil dari c dan kaki b lebih pendek daripada hipotenusa.",
        },
        {
          "question": "Apa yang terjadi ketika p dan q sama besar?",
          "answer": "Garis tinggi jatuh tepat di tengah hipotenusa, dan kedua kakinya sama panjang, sehingga segitiganya adalah segitiga siku-siku sama kaki. Dengan [[c = 20]] cm dan [[p = q = 10]] cm, kedua kaki sama dengan [[10\\sqrt{2}]] cm, sekitar 14.142 cm.",
        },
        {
          "question": "Dapatkah saya mencari kaki a dengan teorema yang sama?",
          "answer": "Ya, dengan rumus cermin [[a = \\sqrt{c \\times p}]]. Kaki a berpasangan dengan proyeksi p, sama seperti kaki b berpasangan dengan q. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">kalkulator kaki a dari proyeksi</a> dibuat untuk perhitungan itu.",
        },
        {
          "question": "Apakah teorema proyeksi berkaitan dengan teorema Pythagoras?",
          "answer": "Ya. Menjumlahkan kedua rumus proyeksi menghasilkan [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], karena [[p + q = c]]. Teorema proyeksi membagi hubungan Pythagoras menjadi satu bagian untuk setiap kaki.",
        },
      ],
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Pilih alat berikutnya berdasarkan ukuran yang sudah Anda ketahui, karena setiap kalkulator di bawah ini menangani satu tugas segitiga siku-siku tertentu.",
      "relatedItems": [
        "Kalkulator Proyeksi Segitiga Siku-Siku",
        "Kalkulator Proyeksi P Segitiga Siku-Siku",
        "Kalkulator Proyeksi Q Segitiga Siku-Siku",
        "Kalkulator Kaki A dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Hipotenusa dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Garis Tinggi dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Sisi Segitiga Siku-Siku",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mencari kaki b dari sebuah segitiga siku-siku ketika Anda mengetahui hipotenusa penuh c dan proyeksi q yang menjadi milik kaki b. Anda memasukkan kedua panjang itu, dan kalkulator mengembalikan panjang sisi kaki b yang sebenarnya, bukan nilai kuadrat dan bukan ruas proyeksi. Rumusnya adalah [[b = \\sqrt{c \\times q}]], dengan c adalah hipotenusa lengkap dan q adalah ruas hipotenusa di samping kaki b.",
            },
            {
              "kind": "p",
              "text": "Misalnya, jika [[c = 10]] cm dan [[q = 6.4]] cm, maka [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64} = 8]] cm. Hasil kali 64 hanyalah langkah perantara. Mengambil akar kuadrat mengubahnya kembali menjadi panjang, dan panjang itulah sisi yang Anda cari.",
            },
            {
              "kind": "p",
              "text": "Kalkulator terletak di bagian atas halaman ini, diikuti rumus, diagram berlabel, bukti teorema proyeksi, contoh soal, dan pemeriksaan yang dapat Anda jalankan pada jawaban apa pun. Panduan ini cocok untuk siswa sekolah menengah pertama dan sekolah menengah atas, guru, tutor, dan orang tua yang membantu pekerjaan rumah geometri.",
            },
          ],
          "h2": "Kalkulator Kaki B Segitiga Siku-Siku dari Proyeksi",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini memiliki dua kolom isian. Kolom pertama menerima hipotenusa c, sisi penuh yang berhadapan dengan sudut siku-siku. Kolom kedua menerima proyeksi q, ruas hipotenusa yang menjadi milik kaki b. Kedua panjang harus menggunakan satuan yang sama, jadi ubahlah dahulu jika satu ukuran dalam sentimeter dan yang lain dalam meter.",
            },
            {
              "kind": "p",
              "text": "Proyeksi q harus lebih kecil dari c. Aturan itu sudah melekat pada geometrinya: q hanya sebagian dari hipotenusa, sehingga tidak pernah bisa sama dengan atau melebihi seluruh sisi. Jika nilai q Anda lebih besar dari c, kemungkinan Anda memasukkan sebuah kaki, garis tinggi, atau proyeksi yang salah.",
            },
            {
              "kind": "p",
              "text": "Klik Calculate Leg b untuk melihat hasilnya, dan gunakan Reset untuk mengosongkan kedua kolom sebelum soal baru. Hasilnya adalah panjang dalam satuan yang Anda masukkan, jadi hipotenusa 10 cm dan proyeksi 6.4 cm menghasilkan 8 cm, tanpa langkah konversi tambahan.",
            },
          ],
          "h2": "Menghitung Kaki B Segitiga Siku-Siku dari Proyeksi",
        },
        "sec-what-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki dua sisi tegak lurus, yang disebut kaki, dan satu sisi terpanjang, yang disebut hipotenusa. Kedua kaki bertemu di sudut siku-siku, dan hipotenusa terletak berhadapan dengan sudut itu. Dalam panduan ini segitiganya adalah ABC dengan sudut siku-siku di C, kaki a adalah sisi AC, kaki b adalah sisi BC, dan hipotenusa c adalah sisi AB.",
            },
            {
              "kind": "p",
              "text": "Kaki b adalah salah satu dari dua sisi yang membentuk sudut siku-siku, jadi ia adalah sisi segitiga yang sebenarnya. Ia bukan ruas yang digambar di dalam segitiga, dan bukan proyeksi q. Proyeksi q terletak datar di sepanjang hipotenusa, sedangkan kaki b membentang dari titik sudut B ke titik sudut siku-siku C. Membedakan kedua peran itu adalah langkah pertama untuk menggunakan rumus dengan benar.",
            },
            {
              "kind": "p",
              "text": "Kaki b berbeda dari kaki a hanya karena posisinya: kaki b menyentuh titik sudut B, dan kaki a menyentuh titik sudut A. Setiap kaki memiliki proyeksinya sendiri, itulah sebabnya rumus untuk b menggunakan q sedangkan rumus untuk a menggunakan p, pasangan yang ditetapkan oleh pelabelan.",
            },
            {
              "kind": "p",
              "text": "Pada segitiga siku-siku yang tidak degenerat, kaki b selalu lebih pendek daripada hipotenusa. Hal itu memberikan pemeriksaan cepat untuk setiap jawaban: jika kaki b hasil hitungan Anda lebih panjang dari c, ada yang salah pada masukan atau hitungannya, dan label diagram adalah tempat pertama yang perlu diperiksa.",
            },
          ],
          "h2": "Apa Itu Kaki B dalam Segitiga Siku-Siku?",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gambarlah garis tinggi dari titik sudut siku-siku C yang tegak lurus terhadap hipotenusa AB. Garis itu bertemu hipotenusa di sebuah titik yang disebut kaki garis tinggi, berlabel D. Titik itu membagi hipotenusa menjadi dua ruas yang berdekatan, dan ruas-ruas itu adalah proyeksinya. Ruas AD adalah proyeksi p, dan ruas DB adalah proyeksi q.",
            },
            {
              "kind": "p",
              "text": "Proyeksi q menjadi milik kaki b karena terletak di samping titik sudut B, titik sudut yang sama tempat kaki b bermula. Pada segitiga kecil CBD, kaki b adalah hipotenusa dan q adalah salah satu kakinya, dan hubungan geometris inilah yang membuat teorema proyeksi bekerja. Proyeksi p, dengan penalaran yang sama, menjadi milik kaki a, yang menyentuh titik sudut A.",
            },
            {
              "kind": "p",
              "text": "Proyeksi adalah panjang di sepanjang hipotenusa, diukur dalam satuan yang sama dengan sisi-sisi lainnya. Proyeksi tidak tegak lurus terhadap apa pun, dan bukan sisi segitiga aslinya. Proyeksi paling baik dibayangkan sebagai bayangan yang dilemparkan sebuah kaki ke hipotenusa ketika garis tinggi jatuh lurus ke bawah.",
            },
            {
              "kind": "p",
              "text": "Karena p dan q adalah dua bagian dari satu sisi lurus, keduanya berjumlah sama dengan seluruh hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Penjumlahan itu berguna dengan sendirinya. Jika Anda mengetahui c dan satu proyeksi, Anda dapat mencari proyeksi lainnya dengan pengurangan, langkah yang dibahas tuntas pada bagian tentang proyeksi lainnya di bawah.",
            },
          ],
          "h2": "Apa Itu Proyeksi Q dalam Segitiga Siku-Siku?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema proyeksi menyatakan bahwa kuadrat kaki b sama dengan hipotenusa dikali proyeksinya:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil akar kuadrat positif dari kedua ruas menghasilkan rumus kerja untuk halaman ini:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Perhitungan berjalan dalam dua tahap yang berbeda. Tahap 1 mengalikan hipotenusa dengan proyeksi, dan hasilnya adalah panjang kuadrat, bukan sebuah sisi. Tahap 2 mengambil akar kuadrat positif, yang mengubah panjang kuadrat itu kembali menjadi panjang biasa. Melewatkan tahap 2 adalah kesalahan paling umum pada rumus ini, dan bagian berikutnya menjelaskan mengapa akar kuadrat tidak boleh dihilangkan.",
            },
            {
              "kind": "p",
              "text": "Satuan perlu diperhatikan pada kedua tahap. Jika c dan q keduanya dalam sentimeter, hasil kalinya dalam sentimeter persegi, dan akar kuadratnya mengembalikan sentimeter. Mencampur satuan, misalnya meter untuk c dan sentimeter untuk q, menghasilkan perkalian yang tidak bermakna, jadi ubahlah ke satu satuan sebelum mengalikan. Akar positif digunakan karena panjang sisi selalu positif.",
            },
            {
              "kind": "p",
              "text": "Contoh numerik kecil menunjukkan kedua tahap bekerja. Dengan [[c = 10]] cm dan [[q = 6.4]] cm, tahap 1 menghasilkan [[10 \\times 6.4 = 64]], dan tahap 2 menghasilkan [[b = \\sqrt{64} = 8]] cm. Angka 64 sendiri tidak menjawab pertanyaan apa pun. Hanya setelah akar kuadrat, angka itu menjadi panjang kaki.",
            },
          ],
          "h2": "Rumus Kaki B Segitiga Siku-Siku dari Proyeksi",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan garis tinggi CD, menunjukkan kaki b kuadrat sama dengan hipotenusa c dikali proyeksi q",
            "caption": "Teorema proyeksi: b kuadrat sama dengan c kali q, jadi b sama dengan akar kuadrat dari c kali q.",
            "src": "leg-b-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Akar kuadrat ada di sana karena perkalian menghasilkan besaran kuadrat. Teorema tidak menyatakan bahwa kaki b sama dengan hasil kali c dan q. Teorema menyatakan bahwa kuadrat kaki b sama dengan hasil kali itu. Membatalkan kuadrat memerlukan akar kuadrat, sama seperti membatalkan penggandaan memerlukan pembagian dua.",
            },
            {
              "kind": "p",
              "text": "Ambil [[c = 10]] dan [[q = 6.4]]. Hasil kali keduanya adalah 64, yaitu [[b^2]], kuadrat kaki. Kaki itu sendiri adalah bilangan yang dikalikan dengan dirinya sendiri menghasilkan 64, yaitu 8. Menulis [[b = 64]] berarti mengklaim sisi sepanjang 64 satuan pada segitiga yang hipotenusanya hanya 10, yang jelas mustahil.",
            },
            {
              "kind": "p",
              "text": "Tabel di bawah ini memisahkan ketiga besaran itu, karena mencampuradukkannya menyebabkan sebagian besar kesalahan pada rumus ini.",
            },
          ],
          "h2": "Mengapa Ada Akar Kuadrat dalam Rumus?",
          "table": {
            "headers": [
              "Besaran",
              "Arti",
              "Contoh dengan c = 10, q = 6.4",
            ],
            "rows": [
              [
                "[[b]]",
                "Panjang kaki itu sendiri",
                "8",
              ],
              [
                "[[b^2]]",
                "Panjang kaki dikalikan dengan dirinya sendiri",
                "64",
              ],
              [
                "[[c \\times q]]",
                "Hasil kali yang disamakan teorema dengan [[b^2]]",
                "64",
              ],
              [
                "[[\\sqrt{cq}]]",
                "Langkah yang memulihkan b dari [[b^2]]",
                "8",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh langkah singkat membawa Anda dari diagram berlabel ke jawaban yang sudah diperiksa.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenali segitiga siku-siku dalam soal Anda dan pastikan segitiga itu memiliki sudut siku-siku.",
                "Temukan garis tinggi dari sudut siku-siku dan tandai tempat garis itu bertemu hipotenusa.",
                "Kenali hipotenusa penuh c, sisi yang berhadapan dengan sudut siku-siku.",
                "Kenali proyeksi q, ruas hipotenusa di samping titik sudut B, tempat kaki b bermula.",
                "Periksa bahwa q lebih kecil dari c. Jika tidak, beri label ulang pada diagram sebelum melanjutkan.",
                "Ubah c dan q ke satuan yang sama jika keduanya diberikan dalam satuan berbeda.",
                "Masukkan c pada kolom Hypotenuse c.",
                "Masukkan q pada kolom Projection q. Jangan masukkan p di sini, karena itu akan menghasilkan kaki a.",
                "Klik Calculate Leg b dan baca hasilnya.",
                "Gunakan Reset sebelum memulai soal baru.",
              ],
            },
            {
              "kind": "p",
              "text": "Kalkulator tidak menerima p, jadi soal yang hanya memberikan p memerlukan satu langkah pengurangan tambahan, yang dibahas di bawah. Memasukkan p pada kolom q tetap menghasilkan angka, tetapi angka itu adalah kaki yang salah, jadi pemeriksaan label pada langkah 4 paling penting.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Kaki B Segitiga Siku-Siku",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[c = 10]] cm dan [[q = 6.4]] cm. Empat langkah di bawah ini menunjukkan seluruh pengerjaan, tanpa ada yang dilewati.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis rumusnya: b = sqrt(cq).",
                "Substitusikan nilainya: b = sqrt(10 x 6.4).",
                "Kalikan di dalam akar: b = sqrt(64).",
                "Ambil akar kuadratnya: b = 8 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawaban 8 cm adalah sisi tegak lurus BC yang sebenarnya, bukan proyeksi dan bukan luas. Verifikasi singkat menutup lingkaran: [[b^2 = 8^2 = 64]] dan [[c \\times q = 10 \\times 6.4 = 64]], jadi kedua ruas teorema cocok.",
            },
            {
              "kind": "p",
              "text": "Sebagai referensi, proyeksi lainnya adalah [[p = 10 - 6.4 = 3.6]] cm, kaki a adalah [[a = \\sqrt{10 \\times 3.6} = 6]] cm, dan garis tingginya adalah [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, yang menegaskan segitiga siku-siku 6-8-10 yang sudah dikenal.",
            },
          ],
          "h2": "Contoh Langkah demi Langkah Mencari Kaki B",
          "image": {
            "alt": "Segitiga siku-siku dengan hipotenusa 10 cm dan proyeksi 6.4 cm, dikerjakan hingga kaki b sama dengan 8 cm",
            "caption": "Contoh soal: c = 10 cm dan q = 6.4 cm menghasilkan b = sqrt(64) = 8 cm.",
            "src": "leg-b-example-c10-q64.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram utama menunjukkan segitiga ABC dengan sudut siku-siku di C. Sisi AC adalah kaki a, sisi BC adalah kaki b, dan sisi AB adalah hipotenusa c. Garis tinggi CD jatuh dari C tegak lurus ke AB dan menyentuhnya di D, dan tanda sudut siku-siku di D menegaskan bahwa CD benar-benar tegak lurus.",
            },
            {
              "kind": "p",
              "text": "Titik D membagi hipotenusa menjadi dua bagian: ruas AD adalah proyeksi p dan ruas DB adalah proyeksi q. Kaki b dan proyeksi q disorot karena keduanya adalah pasangan yang dibahas halaman ini. Telusuri diagram dengan urutan ini untuk menetapkan labelnya: mulai dari B, jalani kaki b ke C, lalu kaki a ke A, kemudian kembali sepanjang hipotenusa dari A ke B, berhenti di D untuk melihat pembagian menjadi p dan q.",
            },
            {
              "kind": "p",
              "text": "Pasangan b dengan q menjadi terlihat pada segitiga kecil CBD, tempat kaki b adalah hipotenusa dan q adalah sisi yang terletak di sepanjang hipotenusa besar. Karena segitiga CBD sebangun dengan segitiga ABC, perbandingan q terhadap b pada segitiga kecil sama dengan perbandingan b terhadap c pada segitiga besar, yang diubah bagian bukti menjadi [[b^2 = cq]].",
            },
          ],
          "h2": "Penjelasan Diagram Kaki B Segitiga Siku-Siku dari Proyeksi",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan sudut siku-siku di C, garis tinggi CD ke hipotenusa AB, kaki b dan proyeksi q disorot, dengan kaki a dan b, hipotenusa c, proyeksi p dan q, serta garis tinggi h diberi label",
            "caption": "Segitiga utama ABC: garis tinggi CD membagi hipotenusa AB menjadi proyeksi p (AD) dan proyeksi q (DB), dengan kaki b (BC) disorot.",
            "src": "leg-b-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti ini bertumpu pada segitiga-segitiga yang sebangun. Menggambar garis tinggi CD membagi segitiga ABC menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD, dan keduanya sebangun dengan segitiga aslinya. Kesebangunan berarti sisi-sisi yang bersesuaian tetap dalam perbandingan yang sama, dan salah satu perbandingan itu langsung menghasilkan teorema proyeksi.",
            },
            {
              "kind": "p",
              "text": "Fokus pada segitiga CBD dan segitiga utuh ABC. Keduanya memuat sudut di B, dan keduanya memuat sudut siku-siku, jadi sudut ketiganya pun harus cocok. Mencocokkan sisi-sisi yang berada pada posisi yang sama menghasilkan perbandingan:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang substitusikan simbol standar: [[DB = q]], [[BC = b]], dan [[AB = c]]. Perbandingan itu menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Perkalian silang menghilangkan pecahan. Pembilang kiri dikali penyebut kanan sama dengan pembilang kanan dikali penyebut kiri, jadi [[q \\times c = b \\times b]], yaitu:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil akar kuadrat positif dari kedua ruas menyelesaikan bukti, menghasilkan [[b = \\sqrt{c \\times q}]]. Penalaran yang sama diterapkan pada segitiga kecil lainnya, ACD, menghasilkan [[a^2 = c \\times p]]. Kesebangunan melakukan semua pekerjaan: sisi-sisi yang bersesuaian dari segitiga-segitiga yang sebangun tetap proporsional.",
            },
          ],
          "h2": "Mengapa Teorema Proyeksi Berlaku?",
          "image": {
            "alt": "Segitiga siku-siku ABC asli di samping segitiga-segitiga kecil yang sebangun ACD dan CBD, menunjukkan perbandingan q per b sama dengan b per c",
            "caption": "Bukti segitiga sebangun: q per b sama dengan b per c, jadi perkalian silang menghasilkan b kuadrat sama dengan c kali q.",
            "src": "leg-b-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap contoh menyatakan nilai yang diketahui, substitusinya, dan jawaban akhirnya. Komentarnya dibuat singkat agar aritmetikanya tetap terlihat, dan setiap contoh menjaga satuannya konsisten dari awal sampai akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 10]] cm dan [[q = 6.4]] cm, rumusnya menghasilkan [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64}]], jadi [[b = 8]] cm. Hasil kali 64 adalah kuadrat sempurna, jadi jawabannya tepat, tanpa pembulatan. Ini segitiga yang sama dengan contoh langkah demi langkah, dan kaki lainnya adalah 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Hasil Kuadrat Sempurna",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 25]] cm dan [[q = 9]] cm, [[b = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Ketika hasil kalinya adalah kuadrat sempurna, jawabannya tepat. Proyeksi lainnya di sini adalah 16 cm, yang berpasangan dengan kaki 20 cm, membentuk segitiga klasik 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Bukan Kuadrat Sempurna",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 12]] cm dan [[q = 5]] cm, [[b = \\sqrt{12 \\times 5} = \\sqrt{60}]], jadi [[b \\approx 7.746]] cm. Hasil kali 60 bukan kuadrat sempurna, jadi jawabannya tetap berupa pendekatan yang dibulatkan ke tiga tempat desimal. Perhatikan bahwa 7.746 cm lebih pendek dari hipotenusa 12 cm, sebagaimana mestinya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Pengukuran Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 12.5]] cm dan [[q = 3.2]] cm, [[b = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], jadi [[b \\approx 6.325]] cm. Nilai ini cocok dengan nilai dari panduan kaki a, tempat hasil kali yang sama, 40, muncul dengan peran p dan q yang ditukar, pengingat yang berguna bahwa masukan yang berbeda dapat berbagi hasil kali. Simpan seluruh hasil kali di dalam akar sampai langkah pembulatan terakhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Segitiga yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 50]] cm dan [[q = 32]] cm, [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Bilangan yang lebih besar tidak mengubah apa pun tentang metodenya: kalikan, lalu ambil akarnya. Proyeksi lainnya di sini adalah 18 cm, yang berpasangan dengan kaki 30 cm, membentuk segitiga klasik 30-40-50.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Proyeksi yang Sama Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 20]] cm dan [[q = 10]] cm, [[b = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, jadi [[b \\approx 14.142]] cm. Proyeksi yang sama besar berarti garis tinggi mengenai titik tengah hipotenusa, yang terjadi tepat ketika kedua kakinya sama panjang. Segitiga itu karena itu adalah segitiga siku-siku sama kaki, dan kaki a sama dengan kaki b.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Satuan yang Berbeda",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 0.5]] m dan [[q = 20]] cm, ubah dahulu: 0.5 m sama dengan 50 cm. Lalu [[b = \\sqrt{50 \\times 20} = \\sqrt{1000}]], jadi [[b \\approx 31.623]] cm. Mengalikan 0.5 dengan 20 tanpa konversi akan menghasilkan akar 10, jawaban yang salah tanpa satuan yang sah di belakangnya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Pengukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 16]] ft dan [[q = 9]] ft, [[b = \\sqrt{16 \\times 9} = \\sqrt{144} = 12]] ft. Hasil kali 144 adalah kuadrat sempurna, jadi jawabannya tepat. Pemeriksaan cepat lolos: 12 ft adalah tiga perempat hipotenusa, dan kaki lainnya adalah sekitar 10.583 ft, yang lebih pendek dari b tetapi tetap sisi nyata dari segitiga yang sama.",
            },
          ],
          "h2": "Contoh Soal Mencari Kaki B dari Proyeksi",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beberapa soal memberikan p, bukan q. Kalkulator di halaman ini tidak menerima p, tetapi itu hanya jalan memutar satu langkah, bukan jalan buntu. Karena kedua proyeksi berjumlah sama dengan hipotenusa, kurangkan dahulu untuk mendapatkan q:",
            },
            {
              "kind": "p",
              "text": "[[[q = c - p]]]",
            },
            {
              "kind": "p",
              "text": "Ambil [[c = 25]] cm dan [[p = 9]] cm. Pengurangan menghasilkan [[q = 25 - 9 = 16]] cm. Sekarang rumus biasa berlaku: [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Jika Anda memasukkan 9 langsung sebagai q, kalkulator akan mengembalikan 15 cm, yaitu kaki a, bukan kaki b.",
            },
            {
              "kind": "p",
              "text": "Kalkulator <a href=\"/right-triangle-projection-p-calculator/\">kalkulator proyeksi p</a> dapat membantu ketika p sendiri perlu dicari, dan <a href=\"/right-triangle-projection-q-calculator/\">kalkulator proyeksi q</a> mencakup langkah sebaliknya. Bagaimanapun, aturannya tetap sama: cari q dahulu, lalu gunakan [[b = \\sqrt{c \\times q}]].",
            },
          ],
          "h2": "Cara Mencari Kaki B Saat Proyeksi Lain Diketahui",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Satu teorema menghubungkan tiga besaran, jadi menyusun ulangnya akan menemukan besaran mana pun yang hilang. Ketiga bentuknya adalah:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Tabel di bawah ini menunjukkan setiap penyusunan ulang, apa yang dicarinya, dan apa yang harus diketahui terlebih dahulu.",
            },
          ],
          "h2": "Hubungan antara Kaki B, Hipotenusa, dan Proyeksi Q",
          "table": {
            "headers": [
              "Besaran yang Hilang",
              "Rumus",
              "Nilai yang Diketahui yang Diperlukan",
            ],
            "rows": [
              [
                "Kaki b",
                "[[b = \\sqrt{c \\times q}]]",
                "Hipotenusa c dan proyeksi q",
              ],
              [
                "Hipotenusa c",
                "[[c = \frac{b^2}{q}]]",
                "Kaki b dan proyeksi q",
              ],
              [
                "Proyeksi q",
                "[[q = \frac{b^2}{c}]]",
                "Kaki b dan hipotenusa c",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kaki a mengikuti cerminan rumus kaki b. Di mana kaki b berpasangan dengan proyeksi q, kaki a berpasangan dengan proyeksi p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan satu segitiga yang konsisten untuk melihat kedua kaki bersama-sama: [[c = 25]], [[p = 9]], dan [[q = 16]]. Maka [[a = \\sqrt{25 \\times 9} = 15]] dan [[b = \\sqrt{25 \\times 16} = 20]]. Kedua kaki berbagi hipotenusa yang sama tetapi mengambil proyeksi yang berbeda, itulah sebabnya mengidentifikasi p dan q dengan benar menentukan kaki mana yang Anda dapatkan.",
            },
            {
              "kind": "p",
              "text": "Kedua kaki juga saling membatasi melalui teorema Pythagoras, yang dibahas dua bagian di bawah: mengetahui satu kaki dan hipotenusa menentukan kaki lainnya. Untuk soal yang berawal dari p, bukan q, <a href=\"/right-triangle-leg-a-from-projection-calculator/\">kalkulator kaki a dari proyeksi</a> menjalankan metode yang sama dengan pasangan yang lain.",
            },
          ],
          "h2": "Hubungan antara Kaki B dan Kaki A",
          "image": {
            "alt": "Segitiga siku-siku yang membandingkan proyeksi p yang berpasangan dengan kaki a dengan proyeksi q yang berpasangan dengan kaki b, dengan c sama dengan 25, p sama dengan 9, dan q sama dengan 16",
            "caption": "Dipasangkan dengan benar: a menggunakan p (sqrt(25 x 9) = 15) dan b menggunakan q (sqrt(25 x 16) = 20).",
            "src": "leg-b-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema proyeksi dan teorema Pythagoras cocok persis, dan aljabar menunjukkan alasannya. Mulailah dari kedua rumus proyeksi:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Tambahkan rumus yang cocok untuk kaki a, [[a^2 = c \\times p]], untuk mendapatkan:",
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
              "text": "Pemeriksaan numerik dengan segitiga 9-16-25 mengonfirmasinya: [[a^2 + b^2 = 225 + 400 = 625]] dan [[c^2 = 25^2 = 625]]. Kedua teorema itu bukan saingan. Teorema proyeksi membagi hubungan Pythagoras menjadi satu bagian untuk setiap kaki, dan menjumlahkan bagian-bagiannya membangunnya kembali.",
            },
          ],
          "h2": "Hubungan antara Proyeksi Q dan Teorema Pythagoras",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga pemeriksaan independen menangkap hampir setiap kesalahan. Jalankan setidaknya satu pemeriksaan pada setiap jawaban, dan jalankan ketiganya ketika soalnya penting.",
            },
            {
              "kind": "h3",
              "text": "Metode 1: Pemeriksaan Teorema Proyeksi",
            },
            {
              "kind": "p",
              "text": "Kuadratkan jawaban Anda dan bandingkan dengan hasil kali c dan q. Untuk [[c = 25]], [[q = 16]], dan [[b = 20]]: [[b^2 = 400]] dan [[c \\times q = 400]], jadi jawabannya lolos. Jika kedua bilangan itu berbeda, masukan atau langkah akar kuadratnya salah.",
            },
            {
              "kind": "h3",
              "text": "Metode 2: Pemeriksaan Teorema Pythagoras",
            },
            {
              "kind": "p",
              "text": "Cari kaki a dari p, lalu periksa [[a^2 + b^2 = c^2]]. Dengan [[p = 9]], [[q = 16]], dan [[c = 25]]: [[a = 15]], [[b = 20]], dan [[225 + 400 = 625 = 25^2]]. Pemeriksaan ini melampaui kalkulator, karena menguji seluruh segitiga, bukan hanya satu rumus.",
            },
            {
              "kind": "h3",
              "text": "Metode 3: Pemeriksaan Ukuran dan Penjumlahan",
            },
            {
              "kind": "p",
              "text": "Pastikan q lebih kecil dari c, bahwa [[p + q = c]] ketika p diketahui, dan bahwa kaki b lebih pendek daripada hipotenusa. Dalam contoh ini, 16 lebih kecil dari 25, [[9 + 16 = 25]], dan 20 lebih pendek dari 25. Kegagalan apa pun di sini menunjukkan kesalahan pelabelan, bukan kekeliruan aritmetika.",
            },
          ],
          "h2": "Cara Memverifikasi Kaki B yang Dihitung",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Delapan sifat mengikuti langsung dari [[b = \\sqrt{c \\times q}]] dan geometri di baliknya. Masing-masing berfungsi ganda sebagai pemeriksaan kewajaran untuk jawaban baru.",
            },
            {
              "items": [
                "Kaki b selalu lebih pendek daripada hipotenusa pada segitiga siku-siku yang tidak degenerat, karena q hanya sebagian dari c.",
                "Proyeksi q selalu lebih kecil dari c, dan selalu positif. Proyeksi nol atau negatif tidak menggambarkan segitiga nyata.",
                "Memperbesar q sambil mempertahankan c tetap akan memperbesar b, karena hasil kali di dalam akar bertambah.",
                "Memperbesar c sambil mempertahankan q tetap akan memperbesar b secara matematis, asalkan nilai-nilai baru itu masih menggambarkan segitiga nyata dengan q lebih kecil dari c.",
                "Menukar p dan q mengubah kaki mana yang dihitung: q menghasilkan kaki b dan p menghasilkan kaki a.",
                "Proyeksi yang sama besar menghasilkan kaki yang sama besar. Dengan c = 20 dan p = q = 10, kedua kaki sama dengan 10 kali akar kuadrat dari 2, sekitar 14.142.",
                "Hasilnya adalah panjang, bukan luas. Hasil kali kuadrat hanyalah langkah perantara, dan akar kuadrat mengembalikan satuan panjang biasa.",
                "Mengalikan semua ukuran dengan faktor yang sama akan mengalikan kaki b dengan faktor itu. Menggandakan c dan q akan menggandakan b, karena hasil kalinya menjadi empat kali lipat dan akarnya menjadi dua kali lipat.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Ketika garis tinggi jatuh tepat di titik tengah hipotenusa, segitiganya sama kaki, dan kedua kakinya harus cocok, seperti ditunjukkan diagram di bawah.",
            },
          ],
          "h2": "Sifat-Sifat Penting Kaki B dari Proyeksi",
          "image": {
            "alt": "Segitiga siku-siku sama kaki dengan hipotenusa 20, proyeksi p dan q yang sama besar yaitu 10, dan kaki a dan b masing-masing sama dengan 10 akar 2",
            "caption": "Proyeksi yang sama besar: c = 20 dengan p = q = 10 menghasilkan a = b = 10 akar 2, sekitar 14.142.",
            "src": "leg-b-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap kesalahan di bawah ini diikuti koreksinya. Sebagian besar berakar pada pelabelan, bukan aritmetika.",
            },
            {
              "kind": "steps",
              "steps": [
                "Melupakan akar kuadrat: melaporkan cq sebagai jawaban. Dengan c = 10 dan q = 6.4, jawabannya adalah 8 cm, bukan 64.",
                "Mencampuradukkan b dengan b kuadrat: 64 adalah b kuadrat dalam contoh itu, sedangkan 8 adalah kakinya. Sebutkan mana yang Anda maksud sebelum menulis angka.",
                "Menggunakan proyeksi p, bukan q: memasukkan p menghasilkan kaki a. Dengan c = 25 dan p = 9, hasil 15 adalah kaki a, bukan kaki b.",
                "Memasukkan kaki pada kolom hipotenusa: hipotenusa adalah sisi yang berhadapan dengan sudut siku-siku dan sisi terpanjang. Kaki yang dimasukkan sebagai c merusak setiap langkah berikutnya.",
                "Mencampuradukkan hipotenusa dengan proyeksi: c adalah seluruh sisi, sedangkan q hanya sebagiannya. Periksa bahwa q lebih kecil dari c sebelum menghitung.",
                "Menggunakan q yang lebih besar dari atau sama dengan c: segitiga seperti itu tidak ada, karena q adalah bagian dari c. Periksa kembali label diagram jika hal ini terjadi.",
                "Mencampur sentimeter dan meter: ubah dahulu, seperti pada Contoh 7, ketika 0.5 m menjadi 50 cm sebelum dikalikan dengan 20 cm.",
                "Menggunakan ukuran negatif: panjang bernilai positif, jadi entri negatif menandakan kesalahan data, bukan kaki negatif.",
                "Menerapkan rumus pada segitiga yang bukan siku-siku: teorema proyeksi memerlukan garis tinggi dari sudut siku-siku. Tanpa sudut siku-siku, tidak ada proyeksi q dalam pengertian ini.",
                "Membulatkan terlalu dini: membulatkan hasil kali sebelum mengambil akar akan menggeser jawabannya. Pertahankan ketelitian penuh sampai langkah terakhir.",
                "Menggunakan korespondensi sisi yang salah pada diagram: memasangkan q dengan a, atau p dengan b, akan menukar kedua kaki. Cocokkan q dengan kaki yang menyentuh titik sudut B.",
                "Memperlakukan garis tinggi sebagai proyeksi: garis tinggi h tegak lurus terhadap hipotenusa, bukan bagian darinya, jadi garis tinggi tidak pernah masuk ke kolom q.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika sebuah jawaban tampak salah, berhentilah dan beri label ulang pada diagram sebelum menghitung ulang. Sebagian besar kesalahan di atas hilang begitu p dan q ditandai dengan jelas pada hipotenusa dan segala hal lain disisihkan.",
            },
          ],
          "h2": "Kesalahan Umum Saat Mencari Kaki B dari Proyeksi",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Penggunaan paling langsung adalah pekerjaan rumah geometri dan pekerjaan kelas, tempat soal proyeksi menguji apakah siswa dapat memberi label pada diagram dan menerapkan [[b^2 = c \\times q]] alih-alih meraih teorema Pythagoras karena kebiasaan. Latihan segitiga sebangun menggunakan susunan yang sama, karena buktinya sendiri adalah latihan mencocokkan sisi-sisi yang bersesuaian.",
            },
            {
              "kind": "p",
              "text": "Gambar teknik menggunakan teorema ini ketika segitiga siku-siku harus direkonstruksi dari ukuran parsial: jika sebuah gambar memberikan hipotenusa dan kaki garis tinggi, kaki yang hilang dapat ditemukan tanpa mengukur ulang bentuknya. Guru juga menggunakan susunan ini sebagai pelajaran penghubung antara penjumlahan ruas dan kesebangunan.",
            },
            {
              "kind": "p",
              "text": "Satu syarat membatasi setiap penerapan: geometri segitiga siku-siku yang diperlukan harus benar-benar ada. Teorema ini menggambarkan hubungan geometris yang tepat, bukan ukuran lapangan yang bersifat perkiraan, jadi teorema ini tidak pernah menggantikan survei yang cermat atau pengukuran teknik profesional. Dalam lingkup yang tepat, teorema ini mengubah dua panjang yang diketahui menjadi panjang ketiga dengan satu perkalian dan satu akar kuadrat.",
            },
          ],
          "h2": "Penerapan Praktis Teorema Proyeksi",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cobalah keenam soal di atas kertas sebelum membaca jawabannya. Tidak ada nilai yang mengulang contoh soal, dan soal terakhir menggabungkan beberapa gagasan dari panduan ini.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki hipotenusa [[c = 36]] cm dan proyeksi [[q = 9]] cm. Carilah kaki b.",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Proyeksi Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 26]] cm dan [[q = 6.5]] cm, carilah kaki b.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Hipotenusa Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 100]] cm dan [[q = 36]] cm, carilah kaki b.",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Konversi Satuan",
            },
            {
              "kind": "p",
              "text": "Sebuah hipotenusa berukuran [[c = 1.5]] m dan proyeksinya q berukuran 24 cm. Carilah kaki b dalam sentimeter.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Cari q dari p dan c Terlebih Dahulu",
            },
            {
              "kind": "p",
              "text": "Sebuah segitiga siku-siku memiliki hipotenusa [[c = 65]] cm dan proyeksi [[p = 49]] cm. Carilah kaki b.",
            },
            {
              "kind": "h3",
              "text": "Soal 6: Multi-Langkah dengan Kaki a dan Pythagoras",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 50]] cm dan [[q = 32]] cm, carilah kaki b, lalu carilah kaki a dan periksa hasilnya dengan teorema Pythagoras.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Jawaban 1: [[b = \\sqrt{36 \\times 9} = \\sqrt{324} = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 2: [[b = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 3: [[b = \\sqrt{100 \\times 36} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 4: Ubah 1.5 m menjadi 150 cm, lalu [[b = \\sqrt{150 \\times 24} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 5: Pertama [[q = 65 - 49 = 16]] cm, lalu [[b = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 6: [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Proyeksi lainnya adalah [[p = 50 - 32 = 18]] cm, jadi [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Periksa: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Soal Latihan Beserta Jawaban",
        },
      },
      "tocHeading": "Isi Panduan",
      "tocItems": {
        "sec-intro": "Kalkulator Kaki B Segitiga Siku-Siku dari Proyeksi",
        "sec-calculate": "Menghitung Kaki B Segitiga Siku-Siku dari Proyeksi",
        "sec-what-leg-b": "Apa Itu Kaki B dalam Segitiga Siku-Siku?",
        "sec-what-projection-q": "Apa Itu Proyeksi Q dalam Segitiga Siku-Siku?",
        "sec-formula": "Rumus Kaki B Segitiga Siku-Siku dari Proyeksi",
        "sec-why-sqrt": "Mengapa Ada Akar Kuadrat dalam Rumus?",
        "sec-how": "Cara Menggunakan Kalkulator Kaki B Segitiga Siku-Siku",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Kaki B",
        "sec-diagram": "Penjelasan Diagram Kaki B Segitiga Siku-Siku dari Proyeksi",
        "sec-proof": "Mengapa Teorema Proyeksi Berlaku?",
        "sec-examples": "Contoh Soal Mencari Kaki B dari Proyeksi",
        "sec-other-projection": "Cara Mencari Kaki B Saat Proyeksi Lain Diketahui",
        "sec-relationship": "Hubungan antara Kaki B, Hipotenusa, dan Proyeksi Q",
        "sec-leg-a": "Hubungan antara Kaki B dan Kaki A",
        "sec-pythagoras": "Hubungan antara Proyeksi Q dan Teorema Pythagoras",
        "sec-verify": "Cara Memverifikasi Kaki B yang Dihitung",
        "sec-properties": "Sifat-Sifat Penting Kaki B dari Proyeksi",
        "sec-mistakes": "Kesalahan Umum Saat Mencari Kaki B dari Proyeksi",
        "sec-applications": "Penerapan Praktis Teorema Proyeksi",
        "sec-practice": "Soal Latihan Beserta Jawaban",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
      },
    },
};
