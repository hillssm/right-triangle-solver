// legAFromProjectionGuideTranslations.bid.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B5_ID = {
  "id": {
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "answer": "Rumusnya adalah [[a = \\sqrt{c \\times p}]], dengan c adalah hipotenusa penuh dan p adalah proyeksi yang dimiliki kaki a. Sebagai contoh, [[c = 10]] cm dan [[p = 3.6]] cm menghasilkan [[a = 6]] cm.",
          "question": "Apa rumus mencari kaki a dari proyeksi p?",
        },
        {
          "answer": "Perkalian berasal dari segitiga-segitiga sebangun. Segitiga ACD sebangun dengan segitiga ABC, sehingga menghasilkan [[p / a = a / c]], dan perkalian silang menghasilkan [[a^2 = c \\times p]]. Hasil kali itu adalah kuadrat kaki, bukan kaki itu sendiri.",
          "question": "Mengapa kita mengalikan c dan p?",
        },
        {
          "answer": "Karena hasil kali cp sama dengan a kuadrat, bukan a. Akar kuadrat membatalkan penguadratan dan mengembalikan panjang biasa. Tanpa akar kuadrat, Anda akan melaporkan 36, bukan 6, dalam contoh c = 10, p = 3.6.",
          "question": "Mengapa akar kuadrat diperlukan?",
        },
        {
          "answer": "Proyeksi p adalah ruas hipotenusa di samping titik sudut A, yang terbentuk ketika garis tinggi dari sudut siku-siku bertemu hipotenusa. Dalam segitiga ABC dengan garis tinggi CD, [[p = AD]], dan ruas itu terletak di sepanjang hipotenusa.",
          "question": "Apa yang diwakili proyeksi p?",
        },
        {
          "answer": "Tidak. Kaki a adalah sisi AC, salah satu sisi yang membentuk sudut siku-siku, sedangkan proyeksi p adalah ruas AD di sepanjang hipotenusa. Keduanya adalah panjang yang berbeda pada posisi yang berbeda, yang hanya dihubungkan oleh [[a^2 = c \\times p]].",
          "question": "Apakah proyeksi p sama dengan kaki a?",
        },
        {
          "answer": "Tidak secara langsung. Proyeksi q berpasangan dengan kaki b, sehingga memasukkan q menghasilkan kaki b. Untuk mencari kaki a dari q, pulihkan dulu p dengan [[p = c - q]], lalu gunakan [[a = \\sqrt{c \\times p}]].",
          "question": "Dapatkah saya menggunakan proyeksi q untuk mencari kaki a?",
        },
        {
          "answer": "Kurangkan dari hipotenusa: [[p = c - q]]. Dengan [[c = 25]] cm dan [[q = 16]] cm, [[p = 9]] cm, lalu [[a = \\sqrt{25 \\times 9} = 15]] cm.",
          "question": "Bagaimana jika saya hanya mengetahui proyeksi q?",
        },
        {
          "answer": "Tidak. Proyeksi p hanya sebagian dari hipotenusa, sehingga harus lebih kecil daripada c. Jika p sama dengan c, q akan menjadi nol dan segitiga itu menjadi degenerat, bukan segitiga siku-siku yang asli.",
          "question": "Dapatkah proyeksi p sama dengan hipotenusa?",
        },
        {
          "answer": "Kuadratkan jawabannya dan periksa bahwa hasilnya sama dengan [[c \\times p]]. Anda juga dapat mencari kaki b dari q dan memeriksa [[a^2 + b^2 = c^2]], serta memastikan p lebih kecil daripada c dan kaki a lebih pendek daripada hipotenusa.",
          "question": "Bagaimana cara memeriksa kaki yang dihitung?",
        },
        {
          "answer": "Garis tinggi jatuh di titik tengah hipotenusa, dan kedua kakinya sama, sehingga segitiga itu adalah segitiga siku-siku sama kaki. Dengan [[c = 20]] cm dan [[p = q = 10]] cm, kedua kaki sama dengan [[10\\sqrt{2}]] cm, sekitar 14.142 cm.",
          "question": "Apa yang terjadi ketika p dan q sama?",
        },
        {
          "answer": "Ya, dengan rumus cerminannya [[b = \\sqrt{c \\times q}]]. Kaki b berpasangan dengan proyeksi q, sama seperti kaki a berpasangan dengan p. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Kalkulator kaki b dari proyeksi</a> dibuat untuk perhitungan itu.",
          "question": "Dapatkah saya mencari kaki b dengan teorema yang sama?",
        },
        {
          "answer": "Ya. Menjumlahkan kedua rumus proyeksi menghasilkan [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], karena [[p + q = c]]. Teorema proyeksi membagi hubungan Pythagoras menjadi satu bagian per kaki.",
          "question": "Apakah teorema proyeksi berkaitan dengan teorema Pythagoras?",
        },
      ],
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Pilih alat berikutnya berdasarkan ukuran yang sudah Anda ketahui, karena setiap kalkulator di bawah ini menangani satu tugas segitiga siku-siku yang spesifik.",
      "relatedItems": [
        "Kalkulator Proyeksi Segitiga Siku-Siku",
        "Kalkulator Proyeksi P Segitiga Siku-Siku",
        "Kalkulator Proyeksi Q Segitiga Siku-Siku",
        "Kalkulator Kaki B dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Hipotenusa dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Garis Tinggi dari Proyeksi Segitiga Siku-Siku",
        "Kalkulator Sisi Segitiga Siku-Siku",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mencari kaki a dari segitiga siku-siku ketika Anda mengetahui hipotenusa penuh c dan proyeksi p yang dimiliki kaki a. Anda memasukkan kedua panjang tersebut, dan kalkulator mengembalikan panjang sisi kaki a yang sebenarnya, bukan nilai kuadrat dan bukan ruas proyeksi. Rumusnya adalah [[a = \\sqrt{c \\times p}]], dengan c adalah hipotenusa lengkap dan p adalah ruas hipotenusa di samping kaki a.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, jika [[c = 10]] cm dan [[p = 3.6]] cm, maka [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Hasil kali 36 hanya langkah perantara. Mengambil akar kuadrat mengubahnya kembali menjadi panjang, dan panjang itulah sisi yang Anda cari.",
            },
            {
              "kind": "p",
              "text": "Kalkulator terletak di bagian atas halaman ini, diikuti rumus, diagram berlabel, bukti teorema proyeksi, contoh soal, dan pemeriksaan yang dapat Anda jalankan untuk jawaban apa pun. Panduan ini cocok untuk siswa sekolah menengah pertama dan sekolah menengah atas, guru, tutor, dan orang tua yang membantu pekerjaan rumah geometri.",
            },
          ],
          "h2": "Kalkulator Kaki A Segitiga Siku-Siku dari Proyeksi",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini memiliki dua kolom masukan. Kolom pertama menerima hipotenusa c, yaitu sisi penuh di hadapan sudut siku-siku. Kolom kedua menerima proyeksi p, yaitu ruas hipotenusa yang dimiliki kaki a. Kedua panjang harus menggunakan satuan yang sama, jadi ubahlah dulu jika satu ukuran dalam sentimeter dan ukuran lainnya dalam meter.",
            },
            {
              "kind": "p",
              "text": "Proyeksi p harus lebih kecil daripada c. Aturan itu sudah melekat pada geometrinya: p hanya sebagian dari hipotenusa, sehingga tidak pernah bisa sama dengan atau melebihi seluruh sisi itu. Jika nilai p Anda lebih besar daripada c, Anda mungkin telah memasukkan sebuah kaki, garis tinggi, atau proyeksi yang salah.",
            },
            {
              "kind": "p",
              "text": "Klik Calculate Leg a untuk melihat hasilnya, dan gunakan Reset untuk mengosongkan kedua kolom sebelum soal baru. Hasilnya adalah panjang dalam satuan yang Anda masukkan, jadi hipotenusa 10 cm dan proyeksi 3.6 cm menghasilkan 6 cm, tanpa langkah konversi tambahan.",
            },
          ],
          "h2": "Menghitung Kaki A Segitiga Siku-Siku dari Proyeksi",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki dua sisi tegak lurus, yang disebut kaki, dan satu sisi terpanjang, yang disebut hipotenusa. Kedua kaki bertemu di sudut siku-siku, dan hipotenusa terletak di hadapan sudut itu. Dalam panduan ini segitiganya adalah ABC dengan sudut siku-siku di C, kaki a adalah sisi AC, kaki b adalah sisi BC, dan hipotenusa c adalah sisi AB.",
            },
            {
              "kind": "p",
              "text": "Kaki a adalah salah satu dari dua sisi yang membentuk sudut siku-siku, jadi ia adalah sisi asli segitiga. Ia bukan ruas yang digambar di dalam segitiga, dan bukan proyeksi p. Proyeksi p terletak datar di sepanjang hipotenusa, sedangkan kaki a membentang dari titik sudut A ke titik sudut siku-siku C. Memisahkan kedua peran itu adalah langkah pertama untuk menggunakan rumus dengan benar.",
            },
            {
              "kind": "p",
              "text": "Kaki a berbeda dari kaki b hanya dari segi posisi: kaki a menyentuh titik sudut A, dan kaki b menyentuh titik sudut B. Setiap kaki memiliki proyeksinya sendiri, itulah sebabnya rumus untuk a menggunakan p sedangkan rumus untuk b menggunakan q, pasangan yang ditetapkan oleh penamaan tersebut.",
            },
            {
              "kind": "p",
              "text": "Dalam segitiga siku-siku yang tidak degenerat, kaki a selalu lebih pendek daripada hipotenusa. Hal itu memberikan pemeriksaan cepat untuk setiap jawaban: jika kaki a hasil hitungan Anda ternyata lebih panjang daripada c, ada yang salah pada masukan atau hitungannya, dan label diagram adalah tempat pertama yang perlu diperiksa.",
            },
          ],
          "h2": "Apa Itu Kaki A dalam Segitiga Siku-Siku?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gambarlah garis tinggi dari titik sudut siku-siku C yang tegak lurus terhadap hipotenusa AB. Garis itu bertemu hipotenusa di sebuah titik yang disebut kaki garis tinggi, berlabel D. Titik itu membagi hipotenusa menjadi dua ruas yang berdekatan, dan ruas-ruas itulah proyeksinya. Ruas AD adalah proyeksi p, dan ruas DB adalah proyeksi q.",
            },
            {
              "kind": "p",
              "text": "Proyeksi p dimiliki kaki a karena letaknya di samping titik sudut A, titik sudut yang sama dengan tempat kaki a bermula. Dalam segitiga kecil ACD, kaki a adalah hipotenusa dan p adalah salah satu kakinya, dan itulah kaitan geometris yang membuat teorema proyeksi berlaku. Proyeksi q, dengan penalaran yang sama, dimiliki kaki b, yang menyentuh titik sudut B.",
            },
            {
              "kind": "p",
              "text": "Proyeksi adalah panjang di sepanjang hipotenusa, diukur dengan satuan yang sama dengan sisi-sisi lainnya. Proyeksi tidak tegak lurus terhadap apa pun, dan bukan sisi dari segitiga aslinya. Proyeksi paling mudah dibayangkan sebagai bayangan yang dilemparkan sebuah kaki ke hipotenusa ketika garis tinggi jatuh tegak lurus ke sana.",
            },
            {
              "kind": "p",
              "text": "Karena p dan q adalah dua bagian dari satu sisi lurus, keduanya dijumlahkan menjadi seluruh hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Penjumlahan itu berguna dengan sendirinya. Jika Anda mengetahui c dan satu proyeksi, Anda dapat menemukan proyeksi lainnya dengan pengurangan, langkah yang dibahas tuntas pada bagian tentang proyeksi lainnya di bawah.",
            },
          ],
          "h2": "Apa Itu Proyeksi P dalam Segitiga Siku-Siku?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema proyeksi menyatakan bahwa kuadrat kaki a sama dengan hipotenusa dikalikan proyeksinya:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil akar kuadrat positif dari kedua ruas menghasilkan rumus kerja untuk halaman ini:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Perhitungan berjalan dalam dua tahap yang berbeda. Tahap 1 mengalikan hipotenusa dengan proyeksi, dan hasilnya adalah panjang kuadrat, bukan sisi. Tahap 2 mengambil akar kuadrat positif, yang mengubah panjang kuadrat itu kembali menjadi panjang biasa. Melewatkan tahap 2 adalah kesalahan paling umum dalam rumus ini, dan bagian berikutnya menjelaskan mengapa akar kuadrat tidak boleh dihilangkan.",
            },
            {
              "kind": "p",
              "text": "Satuan perlu diperhatikan pada kedua tahap. Jika c dan p sama-sama dalam sentimeter, hasil kalinya dalam sentimeter persegi, dan akar kuadratnya mengembalikan sentimeter. Mencampur satuan, misalnya meter untuk c dan sentimeter untuk p, menghasilkan hasil kali yang tidak bermakna, jadi ubahlah ke satu satuan sebelum mengalikan. Akar positif digunakan karena panjang sisi selalu positif.",
            },
            {
              "kind": "p",
              "text": "Contoh numerik kecil menunjukkan kedua tahap itu bekerja. Dengan [[c = 10]] cm dan [[p = 3.6]] cm, tahap 1 menghasilkan [[10 \\times 3.6 = 36]], dan tahap 2 menghasilkan [[a = \\sqrt{36} = 6]] cm. Angka 36 sendiri tidak menjawab pertanyaan apa pun. Hanya setelah akar kuadrat, angka itu menjadi panjang kaki.",
            },
          ],
          "h2": "Rumus Kaki A Segitiga Siku-Siku dari Proyeksi",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan garis tinggi CD, menunjukkan kuadrat kaki a sama dengan hipotenusa c dikalikan proyeksi p",
            "caption": "Teorema proyeksi: a kuadrat sama dengan c kali p, sehingga a sama dengan akar kuadrat dari c kali p.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Akar kuadrat ada di sana karena perkalian menghasilkan besaran kuadrat. Teorema itu tidak mengatakan bahwa kaki a sama dengan hasil kali c dan p. Teorema itu mengatakan bahwa kuadrat kaki a sama dengan hasil kali itu. Membatalkan kuadrat memerlukan akar kuadrat, sama seperti membatalkan penggandaan memerlukan pembagian dua.",
            },
            {
              "kind": "p",
              "text": "Ambil [[c = 10]] dan [[p = 3.6]]. Hasil kali keduanya adalah 36, yaitu [[a^2]], kuadrat dari kaki. Kaki itu sendiri adalah bilangan yang dikalikan dengan dirinya sendiri menghasilkan 36, yaitu 6. Menulis [[a = 36]] berarti mengklaim sisi sepanjang 36 satuan dalam segitiga yang hipotenusanya hanya 10, yang jelas mustahil.",
            },
            {
              "kind": "p",
              "text": "Tabel di bawah ini memisahkan ketiga besaran itu, karena mencampuradukkannya menyebabkan sebagian besar kesalahan dalam rumus ini.",
            },
          ],
          "h2": "Mengapa Ada Akar Kuadrat dalam Rumusnya?",
          "table": {
            "headers": [
              "Besaran",
              "Arti",
              "Contoh dengan c = 10, p = 3.6",
            ],
            "rows": [
              [
                "a",
                "Panjang kaki itu sendiri",
                "6",
              ],
              [
                "a kuadrat",
                "Panjang kaki dikalikan dengan dirinya sendiri",
                "36",
              ],
              [
                "c kali p",
                "Hasil kali yang disamakan teorema dengan a kuadrat",
                "36",
              ],
              [
                "Akar kuadrat dari cp",
                "Langkah yang memulihkan a dari a kuadrat",
                "6",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh langkah singkat membawa Anda dari diagram berlabel menuju jawaban yang sudah diperiksa.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenali segitiga siku-siku dalam soal Anda dan pastikan segitiga itu memiliki sudut siku-siku.",
                "Temukan garis tinggi dari sudut siku-siku dan tandai tempat garis itu bertemu hipotenusa.",
                "Kenali hipotenusa penuh c, yaitu sisi di hadapan sudut siku-siku.",
                "Kenali proyeksi p, yaitu ruas hipotenusa di samping titik sudut A, tempat kaki a bermula.",
                "Periksa bahwa p lebih kecil daripada c. Jika tidak, beri label ulang pada diagram sebelum melanjutkan.",
                "Ubah c dan p ke satuan yang sama jika keduanya diberikan dalam satuan yang berbeda.",
                "Masukkan c pada kolom Hypotenuse c.",
                "Masukkan p pada kolom Projection p. Jangan masukkan q di sini, karena itu akan menghasilkan kaki b.",
                "Klik Calculate Leg a dan baca hasilnya.",
                "Gunakan Reset sebelum memulai soal baru.",
              ],
            },
            {
              "kind": "p",
              "text": "Kalkulator ini tidak menerima q, jadi soal yang hanya memberikan q memerlukan satu langkah pengurangan tambahan, yang dibahas di bawah. Memasukkan q pada kolom p tetap menghasilkan angka, tetapi angka itu adalah kaki yang salah, sehingga pemeriksaan label pada langkah 4 paling penting.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Kaki A Segitiga Siku-Siku",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[c = 10]] cm dan [[p = 3.6]] cm. Empat langkah di bawah ini menunjukkan seluruh pengerjaannya, tanpa ada yang dilewati.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis rumusnya: a = sqrt(cp).",
                "Substitusikan nilainya: a = sqrt(10 x 3.6).",
                "Kalikan di dalam akar: a = sqrt(36).",
                "Ambil akar kuadratnya: a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawaban 6 cm adalah sisi tegak lurus AC yang sebenarnya, bukan proyeksi dan bukan luas. Pemeriksaan singkat menutup rangkaian ini: [[a^2 = 6^2 = 36]] dan [[c \\times p = 10 \\times 3.6 = 36]], sehingga kedua ruas teorema sama.",
            },
            {
              "kind": "p",
              "text": "Sebagai referensi, proyeksi lainnya adalah [[q = 10 - 3.6 = 6.4]] cm, kaki b adalah [[b = \\sqrt{10 \\times 6.4} = 8]] cm, dan garis tingginya adalah [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, yang mengonfirmasi segitiga siku-siku 6-8-10 yang sudah dikenal.",
            },
          ],
          "h2": "Contoh Langkah demi Langkah Mencari Kaki A",
          "image": {
            "alt": "Segitiga siku-siku dengan hipotenusa 10 cm dan proyeksi 3.6 cm, dikerjakan hingga menghasilkan kaki a sama dengan 6 cm",
            "caption": "Contoh soal: c = 10 cm dan p = 3.6 cm menghasilkan a = sqrt(36) = 6 cm.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram utama menunjukkan segitiga ABC dengan sudut siku-siku di C. Sisi AC adalah kaki a, sisi BC adalah kaki b, dan sisi AB adalah hipotenusa c. Garis tinggi CD jatuh dari C tegak lurus terhadap AB dan menyentuhnya di D, dan penanda sudut siku-siku di D mengonfirmasi bahwa CD benar-benar tegak lurus.",
            },
            {
              "kind": "p",
              "text": "Titik D membagi hipotenusa menjadi dua bagian: ruas AD adalah proyeksi p dan ruas DB adalah proyeksi q. Kaki a dan proyeksi p disorot karena keduanya adalah pasangan yang dibahas halaman ini. Telusuri diagram dengan urutan ini untuk menetapkan labelnya: mulai dari A, susuri kaki a ke C, lalu kaki b ke B, kemudian kembali menyusuri hipotenusa dari B ke A, berhenti di D untuk melihat pembagiannya menjadi q dan p.",
            },
            {
              "kind": "p",
              "text": "Pasangan a dengan p menjadi terlihat dalam segitiga kecil ACD, tempat kaki a adalah hipotenusa dan p adalah sisi yang terletak di sepanjang hipotenusa besar. Karena segitiga ACD sebangun dengan segitiga ABC, perbandingan p terhadap a dalam segitiga kecil sama dengan perbandingan a terhadap c dalam segitiga besar, yang diubah bagian bukti menjadi [[a^2 = cp]].",
            },
          ],
          "h2": "Penjelasan Diagram Kaki A Segitiga Siku-Siku dari Proyeksi",
          "image": {
            "alt": "Segitiga siku-siku ABC dengan sudut siku-siku di C, garis tinggi CD ke hipotenusa AB, kaki a dan proyeksi p disorot, dengan kaki a dan b, hipotenusa c, proyeksi p dan q, serta garis tinggi h berlabel",
            "caption": "Segitiga utama ABC: garis tinggi CD membagi hipotenusa AB menjadi proyeksi p (AD) dan proyeksi q (DB), dengan kaki a (AC) disorot.",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti ini bertumpu pada segitiga-segitiga sebangun. Menggambar garis tinggi CD membagi segitiga ABC menjadi dua segitiga siku-siku yang lebih kecil, ACD dan CBD, dan keduanya sebangun dengan segitiga aslinya. Kesebangunan berarti sisi-sisi yang bersesuaian tetap berada dalam perbandingan yang sama, dan salah satu perbandingan itu langsung menghasilkan teorema proyeksi.",
            },
            {
              "kind": "p",
              "text": "Fokuslah pada segitiga ACD dan seluruh segitiga ABC. Keduanya memuat sudut di A, dan keduanya memuat sudut siku-siku, sehingga sudut ketiga keduanya juga harus sama. Mencocokkan sisi-sisi yang terletak pada posisi yang sama menghasilkan perbandingan:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang substitusikan simbol standarnya: [[AD = p]], [[AC = a]], dan [[AB = c]]. Perbandingan itu menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Perkalian silang menghilangkan pecahan. Pembilang kiri dikalikan penyebut kanan sama dengan pembilang kanan dikalikan penyebut kiri, sehingga [[p \\times c = a \\times a]], yaitu:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Mengambil akar kuadrat positif dari kedua ruas menyelesaikan bukti, menghasilkan [[a = \\sqrt{c \\times p}]]. Penalaran yang sama diterapkan pada segitiga kecil lainnya, CBD, menghasilkan [[b^2 = c \\times q]]. Kesebangunan mengerjakan semuanya: sisi-sisi segitiga sebangun yang bersesuaian tetap proporsional.",
            },
          ],
          "h2": "Mengapa Teorema Proyeksi Berlaku?",
          "image": {
            "alt": "Segitiga siku-siku asli ABC di samping segitiga-segitiga kecil sebangun ACD dan CBD, menunjukkan perbandingan p per a sama dengan a per c",
            "caption": "Bukti segitiga sebangun: p per a sama dengan a per c, sehingga perkalian silang menghasilkan a kuadrat sama dengan c kali p.",
            "src": "leg-a-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap contoh menyatakan nilai yang diberikan, substitusinya, dan jawaban akhirnya. Komentarnya tetap singkat agar hitungannya tetap terlihat, dan setiap contoh menjaga satuannya konsisten dari awal sampai akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 10]] cm dan [[p = 4]] cm, rumusnya menghasilkan [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]], sehingga [[a \\approx 6.325]] cm. Hasil kali 40 bukan kuadrat sempurna, jadi jawabannya tetap sebagai pendekatan yang dibulatkan menjadi tiga tempat desimal. Perhatikan bahwa 6.325 cm lebih pendek daripada hipotenusa 10 cm, sebagaimana mestinya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Hasil Kuadrat Sempurna",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 10]] cm dan [[p = 3.6]] cm, [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Ketika hasil kalinya kuadrat sempurna, jawabannya eksak, tanpa pembulatan. Ini adalah segitiga yang sama dengan contoh langkah demi langkah, dan kaki lainnya adalah 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Segitiga yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 25]] m dan [[p = 9]] m, [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m. Bilangan yang lebih besar tidak mengubah metodenya: kalikan, lalu ambil akarnya. Proyeksi lainnya di sini adalah 16 m, yang berpasangan dengan kaki 20 m, sehingga membentuk segitiga klasik 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Ukuran Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 12.5]] cm dan [[p = 3.2]] cm, [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], sehingga [[a \\approx 6.325]] cm. Hasil ini sama nilainya dengan Contoh 1 karena kedua hasil kalinya sama dengan 40, pengingat yang berguna bahwa masukan yang berbeda dapat memiliki hasil kali yang sama. Pertahankan hasil kali penuh di dalam akar sampai langkah pembulatan akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Proyeksi Hipotenusa yang Sama",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 20]] cm dan [[p = 10]] cm, [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, sehingga [[a \\approx 14.142]] cm. Proyeksi yang sama berarti garis tinggi mengenai titik tengah hipotenusa, yang terjadi tepat ketika kedua kakinya sama. Segitiga itu karena itu adalah segitiga siku-siku sama kaki, dan kaki b sama dengan kaki a.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Kecil",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 8]] mm dan [[p = 2]] mm, [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm. Satuan kecil bekerja persis seperti satuan besar, dan jawabannya tetap dalam milimeter karena kedua masukan dalam milimeter. Memperkecil skala soal tidak pernah mengubah langkah-langkahnya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Satuan yang Berbeda",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 0.5]] m dan [[p = 20]] cm, ubahlah dulu: 0.5 m sama dengan 50 cm. Kemudian [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]], sehingga [[a \\approx 31.623]] cm. Mengalikan 0.5 dengan 20 tanpa konversi akan menghasilkan akar 10, jawaban yang salah tanpa satuan yang sah di belakangnya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 16]] ft dan [[p = 4]] ft, [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft. Hasil kali 64 adalah kuadrat sempurna, sehingga jawabannya eksak. Pemeriksaan cepat lolos: 8 ft adalah setengah hipotenusa, dan kaki lainnya menjadi sekitar 13.856 ft, yang lebih panjang daripada a tetapi tetap lebih pendek daripada 16 ft.",
            },
          ],
          "h2": "Contoh Soal Mencari Kaki A dari Proyeksi",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sebagian soal memberikan q, bukan p. Kalkulator pada halaman ini tidak menerima q, tetapi itu hanya jalan memutar satu langkah, bukan jalan buntu. Karena kedua proyeksi dijumlahkan menjadi hipotenusa, kurangkan dulu untuk memulihkan p:",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "Ambil [[c = 25]] cm dan [[q = 16]] cm. Pengurangan menghasilkan [[p = 25 - 16 = 9]] cm. Sekarang rumus biasa berlaku: [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Jika Anda memasukkan 16 langsung sebagai p, kalkulator akan mengembalikan 20 cm, yaitu kaki b, bukan kaki a.",
            },
            {
              "kind": "p",
              "text": "<a href=\"/right-triangle-projection-q-calculator/\">kalkulator proyeksi q</a> dapat membantu ketika q sendiri perlu dicari, dan <a href=\"/right-triangle-projection-p-calculator/\">kalkulator proyeksi p</a> mencakup langkah sebaliknya. Bagaimanapun, aturannya tetap sama: cari p dulu, lalu gunakan [[a = \\sqrt{c \\times p}]].",
            },
          ],
          "h2": "Cara Mencari Kaki A Ketika Proyeksi Lainnya Diketahui",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Satu teorema menghubungkan tiga besaran, jadi menyusun ulangnya dapat menemukan besaran mana pun yang hilang. Ketiga bentuknya adalah:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Tabel di bawah ini menunjukkan setiap susunan ulang, apa yang dicarinya, dan apa yang harus diketahui terlebih dahulu.",
            },
          ],
          "h2": "Hubungan antara Kaki A, Hipotenusa, dan Proyeksi P",
          "table": {
            "headers": [
              "Besaran yang Hilang",
              "Rumus",
              "Nilai yang Diketahui yang Diperlukan",
            ],
            "rows": [
              [
                "Kaki a",
                "a = sqrt(cp)",
                "Hipotenusa c dan proyeksi p",
              ],
              [
                "Hipotenusa c",
                "c = a kuadrat / p",
                "Kaki a dan proyeksi p",
              ],
              [
                "Proyeksi p",
                "p = a kuadrat / c",
                "Kaki a dan hipotenusa c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kaki b mengikuti cerminan rumus kaki a. Di mana kaki a berpasangan dengan proyeksi p, kaki b berpasangan dengan proyeksi q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan satu segitiga yang konsisten untuk melihat kedua kaki bersama-sama: [[c = 25]], [[p = 9]], dan [[q = 16]]. Kemudian [[a = \\sqrt{25 \\times 9} = 15]] dan [[b = \\sqrt{25 \\times 16} = 20]]. Kedua kaki berbagi hipotenusa yang sama tetapi menggunakan proyeksi yang berbeda, itulah sebabnya mengenali p dan q dengan benar menentukan kaki mana yang Anda peroleh.",
            },
            {
              "kind": "p",
              "text": "Kedua kaki juga saling membatasi melalui teorema Pythagoras, yang dibahas dua bagian di bawah: mengetahui satu kaki dan hipotenusa menentukan kaki lainnya. Untuk soal yang berawal dari q, bukan p, <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator kaki b dari proyeksi</a> menjalankan metode yang sama dengan pasangan lainnya.",
            },
          ],
          "h2": "Hubungan antara Kaki A dan Kaki B",
          "image": {
            "alt": "Segitiga siku-siku yang membandingkan proyeksi p yang berpasangan dengan kaki a dengan proyeksi q yang berpasangan dengan kaki b, dengan c sama dengan 25, p sama dengan 9, dan q sama dengan 16",
            "caption": "Dipasangkan dengan benar: a menggunakan p (sqrt(25 x 9) = 15) dan b menggunakan q (sqrt(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema proyeksi dan teorema Pythagoras sama persis, dan aljabarnya menunjukkan alasannya. Mulailah dari kedua rumus proyeksi:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Tambahkan rumus yang cocok untuk kaki b, [[b^2 = c \\times q]], untuk memperoleh:",
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
              "text": "Pemeriksaan numerik dengan segitiga 9-16-25 mengonfirmasinya: [[a^2 + b^2 = 225 + 400 = 625]] dan [[c^2 = 25^2 = 625]]. Kedua teorema itu bukan pesaing. Teorema proyeksi membagi hubungan Pythagoras menjadi satu bagian per kaki, dan menjumlahkan bagian-bagian itu membangunnya kembali.",
            },
          ],
          "h2": "Hubungan antara Proyeksi P dan Teorema Pythagoras",
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
              "text": "Kuadratkan jawaban Anda dan bandingkan dengan hasil kali c dan p. Untuk [[c = 25]], [[p = 9]], dan [[a = 15]]: [[a^2 = 225]] dan [[c \\times p = 225]], sehingga jawabannya lolos. Jika kedua bilangan itu berbeda, masukan atau langkah akar kuadratnya salah.",
            },
            {
              "kind": "h3",
              "text": "Metode 2: Pemeriksaan Teorema Pythagoras",
            },
            {
              "kind": "p",
              "text": "Cari kaki b dari q, lalu periksa [[a^2 + b^2 = c^2]]. Dengan [[p = 9]], [[q = 16]], dan [[c = 25]]: [[a = 15]], [[b = 20]], dan [[225 + 400 = 625 = 25^2]]. Pemeriksaan ini melampaui kalkulator, karena menguji seluruh segitiga, bukan hanya satu rumus.",
            },
            {
              "kind": "h3",
              "text": "Metode 3: Pemeriksaan Ukuran dan Penjumlahan",
            },
            {
              "kind": "p",
              "text": "Pastikan p lebih kecil daripada c, bahwa [[p + q = c]] ketika q diketahui, dan bahwa kaki a lebih pendek daripada hipotenusa. Dalam contoh ini, 9 lebih kecil daripada 25, [[9 + 16 = 25]], dan 15 lebih pendek daripada 25. Kegagalan apa pun di sini menunjuk pada kesalahan pelabelan, bukan kesalahan hitung.",
            },
          ],
          "h2": "Cara Memeriksa Kaki A yang Dihitung",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Delapan sifat mengikuti langsung dari [[a = \\sqrt{c \\times p}]] dan geometri di baliknya. Masing-masing sekaligus menjadi pemeriksaan kewajaran untuk jawaban baru.",
            },
            {
              "items": [
                "Kaki a selalu lebih pendek daripada hipotenusa dalam segitiga siku-siku yang tidak degenerat, karena p hanya sebagian dari c.",
                "Proyeksi p selalu lebih kecil daripada c, dan selalu positif. Proyeksi nol atau negatif tidak menggambarkan segitiga nyata.",
                "Meningkatkan p sambil mempertahankan c tetap meningkatkan a, karena hasil kali di dalam akar bertambah.",
                "Meningkatkan c sambil mempertahankan p tetap meningkatkan a secara matematis, asalkan nilai-nilai baru itu tetap menggambarkan segitiga nyata dengan p lebih kecil daripada c.",
                "Menukar p dan q mengubah kaki mana yang dihitung: p menghasilkan kaki a dan q menghasilkan kaki b.",
                "Proyeksi yang sama menghasilkan kaki yang sama. Dengan c = 20 dan p = q = 10, kedua kaki sama dengan 10 kali akar kuadrat dari 2, sekitar 14.142.",
                "Hasilnya adalah panjang, bukan luas. Hasil kali kuadrat hanya langkah perantara, dan akar kuadrat mengembalikan satuan panjang biasa.",
                "Mengalikan semua ukuran dengan faktor yang sama mengalikan kaki a dengan faktor itu. Menggandakan c dan p menggandakan a, karena hasil kalinya menjadi empat kali lipat dan akarnya menjadi dua kali lipat.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Ketika garis tinggi jatuh tepat di titik tengah hipotenusa, segitiga itu sama kaki, dan kedua kakinya harus sama, seperti ditunjukkan diagram di bawah.",
            },
          ],
          "h2": "Sifat Penting Kaki A dari Proyeksi",
          "image": {
            "alt": "Segitiga siku-siku sama kaki dengan hipotenusa 20, proyeksi p dan q yang sama sebesar 10, dan kaki a dan b masing-masing sama dengan 10 akar 2",
            "caption": "Proyeksi yang sama: c = 20 dengan p = q = 10 menghasilkan a = b = 10 akar 2, sekitar 14.142.",
            "src": "leg-a-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap kesalahan di bawah ini diikuti koreksinya. Sebagian besar kesalahan itu berakar pada pelabelan, bukan hitungan.",
            },
            {
              "kind": "steps",
              "steps": [
                "Melupakan akar kuadrat: melaporkan cp sebagai jawaban. Dengan c = 10 dan p = 3.6, jawabannya adalah 6 cm, bukan 36.",
                "Mengacaukan a dengan a kuadrat: 36 adalah a kuadrat dalam contoh itu, sedangkan 6 adalah kakinya. Nyatakan mana yang Anda maksud sebelum menuliskan angka.",
                "Menggunakan proyeksi q, bukan p: memasukkan q menghasilkan kaki b. Dengan c = 25 dan q = 16, hasil 20 adalah kaki b, bukan kaki a.",
                "Memasukkan kaki pada kolom hipotenusa: hipotenusa adalah sisi di hadapan sudut siku-siku dan sisi terpanjang. Kaki yang dimasukkan sebagai c merusak setiap langkah berikutnya.",
                "Mengacaukan hipotenusa dengan proyeksi: c adalah seluruh sisi, sedangkan p hanya sebagiannya. Periksa bahwa p lebih kecil daripada c sebelum menghitung.",
                "Menggunakan p yang lebih besar daripada atau sama dengan c: segitiga seperti itu tidak ada, karena p adalah bagian dari c. Periksa kembali label diagram jika hal ini terjadi.",
                "Mencampur sentimeter dan meter: ubahlah dulu, seperti pada Contoh 7, ketika 0.5 m menjadi 50 cm sebelum dikalikan dengan 20 cm.",
                "Menggunakan ukuran negatif: panjang selalu positif, jadi masukan negatif menandakan kesalahan data, bukan kaki negatif.",
                "Menerapkan rumus pada segitiga bukan siku-siku: teorema proyeksi memerlukan garis tinggi dari sudut siku-siku. Tanpa sudut siku-siku, tidak ada proyeksi p dalam pengertian ini.",
                "Membulatkan terlalu dini: membulatkan hasil kali sebelum mengambil akar menggeser jawaban. Pertahankan ketelitian penuh sampai langkah akhir.",
                "Menggunakan korespondensi sisi yang salah pada diagram: memasangkan p dengan b, atau q dengan a, menukar kedua kaki. Pasangkan p dengan kaki yang menyentuh titik sudut A.",
                "Memperlakukan garis tinggi sebagai proyeksi: garis tinggi h tegak lurus terhadap hipotenusa, bukan bagian dari hipotenusa, sehingga tidak pernah masuk ke kolom p.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika jawaban tampak salah, berhentilah dan beri label ulang pada diagram sebelum menghitung ulang. Sebagian besar kesalahan di atas hilang begitu p dan q ditandai dengan jelas pada hipotenusa dan segala hal lainnya disisihkan.",
            },
          ],
          "h2": "Kesalahan Umum Saat Mencari Kaki A dari Proyeksi",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Penggunaan paling langsung adalah pekerjaan rumah geometri dan kerja kelas, ketika soal proyeksi menguji apakah siswa dapat memberi label pada diagram dan menerapkan [[a^2 = c \\times p]] alih-alih langsung menggunakan teorema Pythagoras karena kebiasaan. Latihan segitiga sebangun menggunakan susunan yang sama, karena buktinya sendiri adalah latihan mencocokkan sisi-sisi yang bersesuaian.",
            },
            {
              "kind": "p",
              "text": "Gambar teknik menggunakan teorema ini ketika segitiga siku-siku harus direkonstruksi dari ukuran sebagian: jika gambar memberikan hipotenusa dan kaki garis tinggi, kaki yang hilang dapat ditemukan tanpa mengukur ulang bentuknya. Guru juga menggunakan susunan ini sebagai pelajaran jembatan antara penjumlahan ruas dan kesebangunan.",
            },
            {
              "kind": "p",
              "text": "Satu syarat membatasi setiap penerapan: geometri segitiga siku-siku yang dibutuhkan harus benar-benar ada. Teorema ini menggambarkan hubungan geometris yang eksak, bukan ukuran lapangan yang mendekati, sehingga tidak pernah menggantikan survei yang cermat atau pengukuran teknik profesional. Dalam latar yang tepat, teorema ini mengubah dua panjang yang diketahui menjadi panjang ketiga dengan satu perkalian dan satu akar kuadrat.",
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
              "text": "Segitiga siku-siku memiliki hipotenusa [[c = 36]] cm dan proyeksi [[p = 4]] cm. Carilah kaki a.",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Proyeksi Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 26]] cm dan [[p = 6.5]] cm, carilah kaki a.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Hipotenusa Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 100]] cm dan [[p = 64]] cm, carilah kaki a.",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Konversi Satuan",
            },
            {
              "kind": "p",
              "text": "Hipotenusa berukuran [[c = 1.2]] m dan proyeksinya p berukuran 30 cm. Carilah kaki a dalam sentimeter.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Cari p dari q dan c Terlebih Dahulu",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki hipotenusa [[c = 65]] cm dan proyeksi [[q = 49]] cm. Carilah kaki a.",
            },
            {
              "kind": "h3",
              "text": "Soal 6: Bertahap dengan Kaki b dan Pythagoras",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 50]] cm dan [[p = 18]] cm, carilah kaki a, lalu carilah kaki b dan periksa hasilnya dengan teorema Pythagoras.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Jawaban 1: [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 2: [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 3: [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 4: Ubah 1.2 m menjadi 120 cm, lalu [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 5: Pertama [[p = 65 - 49 = 16]] cm, lalu [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 6: [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Proyeksi lainnya adalah [[q = 50 - 18 = 32]] cm, sehingga [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Periksa: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Soal Latihan Beserta Jawabannya",
        },
      },
      "tocHeading": "Isi Panduan",
      "tocItems": {
        "sec-intro": "Kalkulator Kaki A Segitiga Siku-Siku dari Proyeksi",
        "sec-calculate": "Menghitung Kaki A Segitiga Siku-Siku dari Proyeksi",
        "sec-what-leg-a": "Apa Itu Kaki A dalam Segitiga Siku-Siku?",
        "sec-what-projection-p": "Apa Itu Proyeksi P dalam Segitiga Siku-Siku?",
        "sec-formula": "Rumus Kaki A Segitiga Siku-Siku dari Proyeksi",
        "sec-why-sqrt": "Mengapa Ada Akar Kuadrat dalam Rumusnya?",
        "sec-how": "Cara Menggunakan Kalkulator Kaki A Segitiga Siku-Siku",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Kaki A",
        "sec-diagram": "Penjelasan Diagram Kaki A Segitiga Siku-Siku dari Proyeksi",
        "sec-proof": "Mengapa Teorema Proyeksi Berlaku?",
        "sec-examples": "Contoh Soal Mencari Kaki A dari Proyeksi",
        "sec-other-projection": "Cara Mencari Kaki A Ketika Proyeksi Lainnya Diketahui",
        "sec-relationship": "Hubungan antara Kaki A, Hipotenusa, dan Proyeksi P",
        "sec-leg-b": "Hubungan antara Kaki A dan Kaki B",
        "sec-pythagoras": "Hubungan antara Proyeksi P dan Teorema Pythagoras",
        "sec-verify": "Cara Memeriksa Kaki A yang Dihitung",
        "sec-properties": "Sifat Penting Kaki A dari Proyeksi",
        "sec-mistakes": "Kesalahan Umum Saat Mencari Kaki A dari Proyeksi",
        "sec-applications": "Penerapan Praktis Teorema Proyeksi",
        "sec-practice": "Soal Latihan Beserta Jawabannya",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
      },
    },
};
