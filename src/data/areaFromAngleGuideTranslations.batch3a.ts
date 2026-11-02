// areaFromAngleGuideTranslations.batch3a.ts: Right Triangle Area From Angle Guide (Page 18 of 45)
// translations for Indonesian (id) and Arabic (ar).
export const AREA_FROM_ANGLE_TRANSLATIONS_BATCH3A = {
  "id": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Menghitung Luas Segitiga Siku-Siku dari Sudut",
      "sec-geometry": "Memahami Sisi dan Sudut Segitiga Siku-Siku",
      "sec-sine": "Mengapa Rumus Luas Menggunakan Sinus?",
      "sec-mode1": "Cara Mencari Luas Menggunakan Sisi b, Sisi Miring c, dan Sudut A",
      "sec-mode2": "Cara Mencari Luas Menggunakan Sisi a, Sisi Miring c, dan Sudut B",
      "sec-same": "Dua Rumus Berbasis Sudut, Satu Segitiga Siku-Siku",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Segitiga Siku-Siku dari Sudut",
      "sec-foundations": "Contoh Langkah demi Langkah Luas Segitiga Siku-Siku dari Sudut",
      "sec-applications": "Penerapan Nyata Luas Segitiga Siku-Siku dari Sudut",
      "sec-consistency": "Cara Memeriksa Apakah Panjang Sisi dan Sudut Membentuk Segitiga Siku-Siku",
      "sec-alternatives": "Cara Alternatif Mencari Luas Segitiga Siku-Siku Menggunakan Sudut",
      "sec-angle-effect": "Bagaimana Sudut Lancip Memengaruhi Luas Segitiga Siku-Siku?",
      "sec-units": "Satuan Luas, Derajat, dan Pembulatan",
      "sec-mistakes": "Kesalahan Umum Saat Menghitung Luas Segitiga Siku-Siku dari Sudut",
      "sec-verify": "Cara Memeriksa Apakah Luas yang Dihitung Sudah Benar",
      "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "sec-faq": "Tanya Jawab",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Menghitung Luas Segitiga Siku-Siku dari Sudut",
        "blocks": [
          { "kind": "p", "text": "Misalkan sebuah segitiga siku-siku memiliki sisi siku-siku [[b=4\\text{ m}]], sisi miring [[c=5\\text{ m}]], dan sudut lancip di antara kedua sisi itu berukuran sekitar [[A\\approx36.87^\\circ]]. Luasnya langsung diperoleh: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Karena [[\\sin(36.87^\\circ)\\approx0.6]], luasnya kira-kira [[[\\boxed{K=6\\text{ m}^2}]]]. Segitiga itu menutupi 6 meter persegi permukaan datar." },
          { "kind": "p", "text": "Kalkulator ini menangani situasi tersebut: dengan satu sisi siku-siku, sisi miring, dan sudut lancip di antara keduanya, sinus mengubah sisi miring menjadi tinggi tegak lurus yang hilang, dan setengah dari alas kali tinggi memberikan luas dalam satuan persegi. Sudut apit harus terletak di antara dua sisi yang dimasukkan, dan setiap mode memasangkan satu sudut tertentu dengan dua sisinya." },
          { "kind": "p", "text": "Sudut [[36.87^\\circ]] dibulatkan dari sekitar [[36.8699^\\circ]]; menjaga presisi penuh pada kalkulator memberikan hasil yang paling akurat." }
        ]
      },
      "sec-geometry": {
        "h2": "Memahami Sisi dan Sudut Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Panduan ini menggunakan satu notasi yang konsisten di seluruh isinya: [[A]] dan [[B]] adalah dua sudut lancip, [[C=90^\\circ]] adalah sudut siku-siku, sisi [[a]] berhadapan dengan sudut [[A]], sisi [[b]] berhadapan dengan sudut [[B]], sisi [[c]] adalah sisi miring, dan [[K]] adalah luas." },
          { "kind": "h3", "text": "Apa Itu Segitiga Siku-Siku?" },
          { "kind": "p", "text": "Segitiga siku-siku memiliki satu sudut dalam tepat [[90^\\circ]]. Kedua sisi siku-sikunya bertemu pada sudut siku-siku itu, dan sisi miring terletak berhadapan dengannya. Sisi miring selalu merupakan sisi terpanjang. Dua sudut sisanya lancip, dan karena ketiga sudut dalam berjumlah 180 derajat, [[A+B+C=180^\\circ]]. Karena [[C=90^\\circ]], sudut-sudut lancip memenuhi [[A+B=90^\\circ]]: mengetahui satu berarti mengetahui yang lain." },
          { "kind": "h3", "text": "Apa Itu Sisi Miring?" },
          { "kind": "p", "text": "Sisi miring adalah sisi yang berhadapan dengan sudut siku-siku, diberi label [[c]] pada kedua mode kalkulator. Untuk menemukannya pada segitiga yang digambar dalam orientasi apa pun, carilah sisi yang tidak menyentuh penanda sudut persegi: sisi itulah sisi miringnya. Sisi ini lebih panjang daripada kedua sisi siku-siku, karena membentang di seluruh sudut siku-siku sedangkan setiap sisi siku-siku hanya membentang pada sudut lancip. Setiap rumus luas di halaman ini menggunakan [[c]] sebagai salah satu dari dua sisinya, jadi mengidentifikasinya dengan benar adalah keterampilan pertama yang perlu dilatih." },
          { "kind": "h3", "text": "Apa Itu Sisi Samping?" },
          { "kind": "p", "text": "Sisi samping adalah sisi siku-siku yang menyentuh sudut acuan yang dipilih tanpa menjadi sisi miring. Untuk sudut [[A]] sisi sampingnya adalah [[b]]; untuk sudut [[B]] sisi sampingnya adalah [[a]]. Sebutkan dulu sudut acuannya, lalu baca sisi sampingnya. Menukar sudut acuan secara diam-diam menukar sisi mana yang dihitung sebagai sisi samping, dan pertukaran itulah yang melatarbelakangi banyak kesalahan umum yang tercantum di halaman ini." },
          { "kind": "h3", "text": "Apa Itu Sisi Depan?" },
          { "kind": "p", "text": "Sisi depan terletak tepat di seberang sudut yang dipilih, tidak menyentuhnya. Untuk sudut [[A]] sisi [[a]] adalah sisi depan; untuk sudut [[B]] sisi [[b]] adalah sisi depan. Label berubah mengikuti sudut acuan, tetapi sisi miring tetap [[c]] pada kedua kasus. Menahan sudut acuan tetap selagi memberi label segitiga menjaga setiap langkah berikutnya tetap konsisten." },
          { "kind": "h3", "text": "Apa Itu Sudut Apit?" },
          { "kind": "p", "text": "Sudut apit adalah sudut yang terletak di antara dua sisi yang ditentukan. Sudut [[A]] diapit oleh sisi [[b]] dan [[c]]; sudut [[B]] diapit oleh sisi [[a]] dan [[c]]. Rumus luas sinus umum hanya berlaku bila sudutnya adalah sudut yang diapit oleh dua sisi yang digunakan, karena rumus membaca tinggi tegak lurus dari sudut tersebut. Memasangkan sisi dengan sudut yang tidak menyentuhnya merusak geometri yang menjadi sandaran rumus." }
        ],
        "imgAlt": "Segitiga siku-siku ABC menunjukkan kedua mode luas: sudut A di antara sisi b dan c, sudut B di antara sisi a dan c",
        "figcaption": "Kedua mode kalkulator menggunakan segitiga yang sama. Mode 1 memasangkan sisi b, sisi miring c, dan sudut apit A; Mode 2 memasangkan sisi a, sisi miring c, dan sudut apit B."
      },
      "sec-sine": {
        "h2": "Mengapa Rumus Luas Menggunakan Sinus?",
        "blocks": [
          { "kind": "p", "text": "Kedua mode kalkulator bersandar pada satu rumus umum untuk luas segitiga apa pun jika diketahui dua sisi dan sudut apitnya:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { "kind": "p", "text": "Di sini [[x]] dan [[y]] adalah dua panjang sisi, [[\\theta]] adalah sudut yang diapit di antara keduanya, dan [[K]] adalah luas. Suku sinus inilah yang membangun tinggi tegak lurus dari sisi kedua." },
          { "kind": "h3", "text": "Cara Kerja Rumus Umum" },
          { "kind": "p", "text": "Aturan luas segitiga yang dikenal adalah [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Bila tinggi tegak lurus tidak diukur langsung, sinus dapat memulihkannya dari sisi lain. Ambil alas sepanjang [[x]] dan sisi kedua sepanjang [[y]] yang bertemu pada sudut [[\\theta]]. Komponen tegak lurus dari sisi kedua itu, yaitu tinggi yang dihitung untuk luas, adalah [[h=y\\sin(\\theta)]]. Substitusi ke aturan alas-tinggi menghasilkan [[K=\\frac12 x(y\\sin(\\theta))]], rumus umum di atas. Sudut apit harus sesuai dengan dua sisi yang dipilih; sudut dari bagian segitiga yang lain mengukur garis tegak lurus yang berbeda." },
          { "kind": "h3", "text": "Mengapa Luas Dibagi Dua?" },
          { "kind": "p", "text": "Segitiga menempati setengah luas jajar genjang yang dibangun pada alas yang sama dengan tinggi tegak lurus yang sama. Dengan alas [[x]] dan tinggi [[h]], hasil kali [[x\\times h]] adalah jajar genjang penuh, dan segitiga tepat setengahnya. Mengalikan kedua sisi dan nilai sinus tanpa pembagian dua akan menghasilkan dua kali luas yang diinginkan." },
          { "kind": "h3", "text": "Mengapa Sisi Miring Dapat Digunakan" },
          { "kind": "p", "text": "Salah satu dari dua sisi dalam rumus sudut apit dapat berupa sisi miring. Dipasangkan dengan sisi siku-siku yang tepat dan sudut lancip di antara keduanya, sisi miring membawa informasi yang cukup untuk membangun luas: komponen sinusnya tepat merupakan tinggi tegak lurus terhadap sisi siku-siku itu sebagai alas. Inilah alasan kalkulator tidak pernah menanyakan sisi siku-siku kedua. Sisi miring bukanlah pengecualian khusus terhadap rumus; ia adalah pilihan sisi yang biasa, yang terletak pada sudut apit yang biasa." },
          { "kind": "h3", "text": "Mengapa Sudutnya Harus Tepat" },
          { "kind": "p", "text": "Mengganti sudut [[A]] dengan sudut [[B]] sambil mempertahankan pasangan sisi yang sama biasanya memberikan hasil yang salah. Ambil segitiga 3-4-5 dengan [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Perhitungan Mode 1 yang benar adalah [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]. Substitusi sudut yang lain justru menghasilkan [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]], karena [[\\sin(53.13^\\circ)\\approx0.8]]. Jawaban 8 bukanlah artefak pembulatan; itu adalah luas konfigurasi yang berbeda, di mana pasangan sisi tidak lagi cocok dengan sudut apitnya. Memasangkan sudut dan sisi dengan benar adalah salah satu pelajaran terpenting halaman ini." }
        ],
        "imgAlt": "Segitiga siku-siku 3-4-5 menunjukkan a sama dengan c kali sin A sama dengan 3 sebagai tinggi tegak lurus untuk luas",
        "figcaption": "Sinus sudut A mengubah sisi miring menjadi tinggi tegak lurus a = 3, sehingga rumus umum K = ba/2 dan rumus langsung K = bc sin(A)/2 saling cocok."
      },
      "sec-mode1": {
        "h2": "Cara Mencari Luas Menggunakan Sisi b, Sisi Miring c, dan Sudut A",
        "blocks": [
          { "kind": "p", "text": "Mode 1 kalkulator menggunakan:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { "kind": "p", "text": "Variabel-variabelnya adalah: [[b]] sisi siku-siku yang bersebelahan dengan sudut [[A]], [[c]] sisi miring, [[A]] sudut lancip apit di antara [[b]] dan [[c]], dan [[K]] luas." },
          { "kind": "h3", "text": "Penurunan Rumus Langkah demi Langkah" },
          { "kind": "p", "text": "Mulai dari rumus luas sisi siku-siku [[K=ab/2]]. Dari perbandingan sinus pada sudut [[A]], [[\\sin(A)=a/c]], sehingga [[a=c\\sin(A)]]. Sisi depan [[a]] sedang ditulis ulang sebagai komponen sinus dari sisi miring. Substitusi menghasilkan [[K=\\frac{b(c\\sin(A))}{2}]], dan penataan ulang menghasilkan [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Sisi depan yang tidak diketahui tidak perlu dimasukkan karena rumus membangunnya dari sisi miring dan sudut di balik layar." },
          { "kind": "h3", "text": "Contoh Pengerjaan Lengkap" },
          { "kind": "p", "text": "Diketahui [[b=4\\text{ m}]], [[c=5\\text{ m}]], [[A\\approx36.87^\\circ]]:" },
          { "kind": "p", "text": "Jawaban tersebut menyatakan segitiga menutupi sekitar 6 meter persegi. Karena sudut masukan dibulatkan, kata kira-kira layak ada dalam laporan, meskipun dengan presisi penuh masukan yang sama menghasilkan tepat 6." },
          { "kind": "h3", "text": "Verifikasi Menggunakan Sisi yang Hilang" },
          { "kind": "p", "text": "Sisi yang hilang mengikuti teorema Pythagoras: [[a=\\sqrt{c^2-b^2}]], sehingga [[a=\\sqrt{25-16}=3]]. Kemudian [[K=(3\\times4)/2=6]]. Kedua jalur cocok karena menggambarkan segitiga yang sama: jalur sinus membangun sisi yang hilang dari sudut, sedangkan jalur sisi menggunakan sisi itu secara langsung." },
          { "kind": "h3", "text": "Kapan Sebaiknya Menggunakan Mode 1?" },
          { "kind": "p", "text": "Gunakan Mode 1 bila pengukuran yang diketahui adalah sisi siku-siku yang bersebelahan dengan sudut lancip yang diketahui, sisi miring, dan sudut itu sendiri. Jika kedua sisi sudah diketahui, rumus sisi langsung lebih sederhana dan melewatkan sudut sepenuhnya. Mode 1 cocok untuk situasi lapangan yang umum, di mana sudut dan dua panjang berasal dari pengaturan pengukuran yang sama, dan sisi kedua tidak pernah dicatat." }
        ],
        "steps": [
          "<strong>Tulis rumusnya.</strong> [[K=bc\\sin(A)/2]].",
          "<strong>Substitusikan.</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]].",
          "<strong>Hitung sinusnya.</strong> [[\\sin(36.87^\\circ)\\approx0.6]].",
          "<strong>Kalikan.</strong> [[K\\approx(20\\times0.6)/2]].",
          "<strong>Bagi.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ]
      },
      "sec-mode2": {
        "h2": "Cara Mencari Luas Menggunakan Sisi a, Sisi Miring c, dan Sudut B",
        "blocks": [
          { "kind": "p", "text": "Mode 2 kalkulator menggunakan:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { "kind": "p", "text": "Variabel-variabelnya adalah: [[a]] sisi siku-siku yang bersebelahan dengan sudut [[B]], yang berhadapan dengan sudut [[A]]; [[c]] sisi miring; [[B]] sudut lancip apit di antara [[a]] dan [[c]]; dan [[K]] luas." },
          { "kind": "h3", "text": "Penurunan Rumus Langkah demi Langkah" },
          { "kind": "p", "text": "Mulai lagi dari [[K=ab/2]]. Perbandingan sinus yang diukur pada sudut [[B]] berbunyi [[\\sin(B)=b/c]], karena dari sudut pandang [[B]] sisi depannya adalah [[b]]. Maka [[b=c\\sin(B)]]. Substitusi menghasilkan [[K=\\frac{a(c\\sin(B))}{2}]], sehingga [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. Rumus menggunakan sisi [[a]] meskipun [[a]] disebut sisi depan dalam notasi utama halaman ini; label depan milik sudut [[A]], sedangkan relatif terhadap sudut [[B]] sisi yang sama adalah sisi samping. Label sisi selalu relatif terhadap sudut acuan yang dipilih." },
          { "kind": "h3", "text": "Contoh Pengerjaan Lengkap" },
          { "kind": "p", "text": "Diketahui [[a=3\\text{ m}]], [[c=5\\text{ m}]], [[B\\approx53.13^\\circ]]:" },
          { "kind": "p", "text": "Hasilnya sama, 6 meter persegi, seperti contoh Mode 1, karena kedua contoh menggambarkan segitiga 3-4-5 yang sama dilihat dari dua sudut lancipnya." },
          { "kind": "h3", "text": "Verifikasi Menggunakan Sisi yang Hilang" },
          { "kind": "p", "text": "Hitung [[b=\\sqrt{c^2-a^2}]], sehingga [[b=\\sqrt{25-9}=4]]. Kemudian [[K=(3\\times4)/2=6]]. Kecocokan ini sudah diduga: rumus sinus diam-diam merekonstruksi sisi yang hilang [[b]] dari sisi miring dan sudut." },
          { "kind": "h3", "text": "Kapan Sebaiknya Menggunakan Mode 2?" },
          { "kind": "p", "text": "Gunakan Mode 2 bila sisi yang diketahui adalah [[a]], sisi miring [[c]] diketahui, dan sudut yang diukur adalah sudut yang menyentuh sisi [[a]], yaitu sudut [[B]]. Kedua mode tidak dapat dipertukarkan tanpa sekaligus mengubah label sisi dan sudut; memasukkan masukan Mode 1 ke Mode 2 menghitung luas segitiga yang berbeda." }
        ],
        "steps": [
          "<strong>Tulis rumusnya.</strong> [[K=ac\\sin(B)/2]].",
          "<strong>Substitusikan.</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]].",
          "<strong>Hitung sinusnya.</strong> [[\\sin(53.13^\\circ)\\approx0.8]].",
          "<strong>Kalikan dan bagi.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ]
      },
      "sec-same": {
        "h2": "Dua Rumus Berbasis Sudut, Satu Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Kedua mode menghitung luas objek geometri yang sama, sehingga keduanya harus cocok. Untuk Mode 1, [[K=bc\\sin(A)/2]], dan karena [[\\sin(A)=a/c]] untuk segitiga siku-siku yang valid, [[bc\\sin(A)=ab]]. Untuk Mode 2, [[K=ac\\sin(B)/2]], dan karena [[\\sin(B)=b/c]], [[ac\\sin(B)=ab]]. Kedua rumus menyederhanakan menjadi [[[\\boxed{K=\\frac{ab}{2}}]]], rumus sisi yang dikenal. Kedua mode adalah dua jalur masukan yang berbeda menuju satu besaran." },
          { "kind": "p", "text": "Pengukuran sudut yang dibulatkan dapat menimbulkan perbedaan numerik kecil antara kedua mode, karena [[36.87^\\circ]] hanyalah pendekatan dari [[36.8699^\\circ]] yang sebenarnya. Selisih beberapa perseratus adalah efek pembulatan, bukan ketidaksepakatan antar rumus." }
        ],
        "table": {
          "headers": ["Metode", "Masukan", "Hasil"],
          "rows": [
            ["Rumus sisi siku-siku", "[[a=3,\\;b=4]]", "6 satuan persegi"],
            ["Mode 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "Sekitar 6"],
            ["Mode 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "Sekitar 6"]
          ]
        },
        "imgAlt": "Segitiga 3-4-5 yang sama dihitung dengan Mode 1 dan Mode 2, keduanya memberi luas 6",
        "figcaption": "Dua sudut apit, dua rumus yang setara, satu luas segitiga."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segitiga Siku-Siku dari Sudut",
        "blocks": [
          { "kind": "p", "text": "Panduan ini mengikuti antarmuka kalkulator yang sebenarnya di halaman ini, langkah demi langkah." }
        ],
        "steps": [
          "<strong>Identifikasi pengukuran yang sudah diketahui.</strong> Pastikan Anda memiliki satu sisi siku-siku, sisi miring, dan sudut lancip dari segitiga yang sama.",
          "<strong>Pilih mode yang tepat.</strong> Pilih Mode 1 untuk sisi [[b]], sisi miring [[c]], dan sudut [[A]]; pilih Mode 2 untuk sisi [[a]], sisi miring [[c]], dan sudut [[B]].",
          "<strong>Pastikan sudut lancip mana yang sedang diukur.</strong> Sudutnya harus salah satu dari dua sudut lancip, bukan sudut siku-siku.",
          "<strong>Identifikasi sisi siku-siku yang sesuai.</strong> Sisi harus menyentuh sudut yang diukur; periksa definisi sisi samping dan sisi depan di atas bila ragu.",
          "<strong>Masukkan panjang sisi siku-siku.</strong> Ketik sisi yang diukur ke kolom sisi pada mode yang dipilih.",
          "<strong>Masukkan panjang sisi miring.</strong> Ketik ke kolom sisi miring; panjangnya harus yang terpanjang di antara kedua panjang.",
          "<strong>Pilih satuan pengukuran yang kompatibel.</strong> Kedua panjang harus memakai satuan yang sama sebelum menghitung.",
          "<strong>Masukkan sudut lancip dalam derajat.</strong> Kalkulator mengharapkan derajat, bukan radian.",
          "<strong>Pastikan sudutnya benar-benar di antara [[0^\\circ]] dan [[90^\\circ]].</strong> Nilai batas menggambarkan bangun yang merosot, bukan segitiga.",
          "<strong>Pastikan sisi miring lebih panjang daripada sisi siku-siku.</strong> Sisi yang sama dengan atau lebih panjang daripada sisi miring tidak dapat menjadi bagian segitiga siku-siku.",
          "<strong>Periksa bahwa sisi, sisi miring, dan sudut menggambarkan segitiga siku-siku yang sama.</strong> Uji konsistensi di bagian validasi menunjukkan caranya.",
          "<strong>Klik Hitung Luas.</strong> Hasilnya muncul beserta langkah penyelesaian yang ditampilkan.",
          "<strong>Tinjau hasil dan langkah penyelesaian.</strong> Telusuri setiap substitusi untuk memastikan masukan yang dimaksud telah digunakan.",
          "<strong>Tafsirkan hasil dalam satuan persegi.</strong> Satuan luas adalah kuadrat dari satuan panjang yang dipilih.",
          "<strong>Gunakan Atur Ulang untuk menghapus perhitungan sebelumnya.</strong> Ini mengosongkan semua kolom sebelum segitiga berikutnya dimasukkan."
        ],
        "closingParagraphs": [
          "Perhatikan bahwa setiap mode meminta sisi dan sudut yang berbeda. Mode-mode itu berbeda karena pasangan sudut apitnya berbeda, bukan karena satu mode adalah jalan pintas dari mode lainnya."
        ]
      },
      "sec-foundations": {
        "h2": "Contoh Langkah demi Langkah Luas Segitiga Siku-Siku dari Sudut",
        "blocks": [
          { "kind": "p", "text": "Empat contoh membangun metode ini pada segitiga-segitiga yang dikenal, dari tripel 3-4-5 hingga kasus sudut istimewa." },
          { "kind": "h3", "text": "Contoh 1: Segitiga 3-4-5 Menggunakan Sudut A" },
          { "kind": "p", "text": "Diketahui [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]], gunakan [[K=bc\\sin(A)/2]]. Kemudian [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], [[K\\approx(20\\times0.6)/2]], sehingga [[[\\boxed{K\\approx6}]]]. Luasnya 6 satuan persegi karena segitiga menutupi enam persegi satuan permukaan datar; dengan sudut presisi penuh nilainya tepat 6." },
          { "kind": "h3", "text": "Contoh 2: Segitiga yang Sama Menggunakan Sudut B" },
          { "kind": "p", "text": "Diketahui [[a=3]], [[c=5]], [[B\\approx53.13^\\circ]], gunakan [[K=ac\\sin(B)/2]]. Kemudian [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]], [[K\\approx(15\\times0.8)/2]], sehingga [[[\\boxed{K\\approx6}]]]. Hasilnya cocok dengan Contoh 1 karena kedua contoh menggambarkan segitiga yang sama; kedua sudut adalah pandangan berkomplemen dari satu bangun." },
          { "kind": "h3", "text": "Contoh 3: Segitiga 30-60-90" },
          { "kind": "p", "text": "Ambil [[c=10]] dan [[A=30^\\circ]]. Sisinya mengikuti [[b=c\\cos(30^\\circ)=5\\sqrt{3}]]. Kemudian [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]], dan karena [[\\sin(30^\\circ)=1/2]], [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]]. Nilai sudut istimewa seperti [[\\sin(30^\\circ)]] dan [[\\cos(30^\\circ)]] memberikan bentuk eksak sebelum pembulatan desimal apa pun, itulah sebabnya segitiga-segitiga ini berguna untuk memeriksa kalkulator dengan tangan." },
          { "kind": "h3", "text": "Contoh 4: Segitiga 45-45-90" },
          { "kind": "p", "text": "Diketahui [[c=10]] dan [[A=45^\\circ]], sisi-sisinya sama: [[a=b=5\\sqrt{2}]]. Kemudian [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]], dan karena [[\\sin(45^\\circ)=\\sqrt{2}/2]], hasil kalinya menyederhanakan menjadi [[[\\boxed{K=25}]]]. Ini adalah segitiga siku-siku sama kaki, dan seperti ditunjukkan nanti, segitiga ini juga memiliki luas maksimum yang mungkin untuk segitiga siku-siku dengan sisi miring 10 satuan." }
        ]
      },
      "sec-applications": {
        "h2": "Penerapan Nyata Luas Segitiga Siku-Siku dari Sudut",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi yang dikerjakan penuh, enam untuk setiap mode kalkulator. Setiap contoh menyatakan pengukurannya, memilih modenya, menerapkan rumusnya, dan menafsirkan jawabannya. Nilai sudut ditampilkan hingga dua desimal sedangkan aritmetikanya menjaga presisi penuh di baliknya." },
          { "kind": "h3", "text": "Contoh Praktis 1: Atap Pelana Segitiga" },
          { "kind": "p", "text": "Penampang atap pelana segitiga siku-siku yang disederhanakan memiliki sisi samping [[b=4\\text{ m}]], sisi miring [[c=5\\text{ m}]], dan sudut apit [[A\\approx36.87^\\circ]]. Gunakan Mode 1: [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], sehingga [[[\\boxed{K\\approx6\\text{ m}^2}]]]. Ini luas penampang datar, bukan total permukaan atap. Periksa: [[K=(3\\times4)/2=6]]." },
          { "kind": "h3", "text": "Contoh Praktis 2: Panel Samping Ram Segitiga" },
          { "kind": "p", "text": "Panel samping ram segitiga siku-siku memiliki [[b=2.4\\text{ m}]], [[c=2.5\\text{ m}]], dan [[A\\approx16.26^\\circ]]. Sisi depan yang mendasarinya adalah 0,7 m, sehingga [[\\sin(A)=0.7/2.5=0.28]]. Gunakan Mode 1: [[K=(2.4\\times2.5\\times0.28)/2]], sehingga [[[\\boxed{K\\approx0.84\\text{ m}^2}]]]. Ini luas panel samping, bukan permukaan ram yang miring. Periksa: [[K=(0.7\\times2.4)/2=0.84]]." },
          { "kind": "h3", "text": "Contoh Praktis 3: Layar Segitiga" },
          { "kind": "p", "text": "Penampang layar segitiga siku-siku yang datar memiliki [[b=12\\text{ ft}]], [[c=13\\text{ ft}]], dan [[A\\approx22.62^\\circ]]. Sisi depannya 5 ft, sehingga [[\\sin(A)=5/13]]. Gunakan Mode 1: [[K=(12\\times13\\times(5/13))/2]], sehingga [[[\\boxed{K=30\\text{ ft}^2}]]]. Ini luas geometris datar, sebelum jahitan atau sisa bahan. Periksa: [[K=(5\\times12)/2=30]]." },
          { "kind": "h3", "text": "Contoh Praktis 4: Petak Tanah Segitiga Siku-Siku" },
          { "kind": "p", "text": "Sketsa survei menggambarkan petak segitiga siku-siku dengan [[b=40\\text{ m}]], [[c=50\\text{ m}]], dan [[A\\approx36.87^\\circ]]. Karena [[\\sin(A)=30/50=0.6]], Mode 1 menghasilkan [[K=(40\\times50\\times0.6)/2]], sehingga [[[\\boxed{K=600\\text{ m}^2}]]]. Ini luas petak planar dalam model datar. Periksa: [[K=(30\\times40)/2=600]]." },
          { "kind": "h3", "text": "Contoh Praktis 5: Panel Penyangga Baja" },
          { "kind": "p", "text": "Panel baja segitiga datar memiliki [[b=1.5\\text{ m}]], [[c=1.7\\text{ m}]], dan [[A\\approx28.07^\\circ]]. Sisi depannya 0,8 m, sehingga [[\\sin(A)=0.8/1.7]]. Gunakan Mode 1: [[K=(1.5\\times1.7\\times(0.8/1.7))/2]], sehingga [[[\\boxed{K=0.6\\text{ m}^2}]]]. Hanya luas planar, bukan kapasitas beban. Periksa: [[K=(0.8\\times1.5)/2=0.6]]." },
          { "kind": "h3", "text": "Contoh Praktis 6: Profil Samping Tangga" },
          { "kind": "p", "text": "Panel samping tangga yang disederhanakan memiliki sisi horizontal [[b=3.2\\text{ m}]], sisi miring [[c=4\\text{ m}]], dan [[A\\approx36.87^\\circ]]. Dengan [[\\sin(A)=0.6]], Mode 1 menghasilkan [[K=(3.2\\times4\\times0.6)/2]], sehingga [[[\\boxed{K=3.84\\text{ m}^2}]]]. Ini profil samping, bukan luas anak tangga. Periksa: dengan sisi lainnya 2,4 m, [[K=(2.4\\times3.2)/2=3.84]]." },
          { "kind": "h3", "text": "Contoh Praktis 7: Jendela Kaca Segitiga" },
          { "kind": "p", "text": "Jendela segitiga siku-siku memiliki sisi [[a=0.6\\text{ m}]], sisi miring [[c=1\\text{ m}]], dan sudut apit [[B\\approx53.13^\\circ]]. Dengan [[\\sin(B)=0.8]], Mode 2 menghasilkan [[K=(0.6\\times1\\times0.8)/2]], sehingga [[[\\boxed{K=0.24\\text{ m}^2}]]]. Ini luas kaca sebelum kelonggaran bingkai. Periksa: [[K=(0.6\\times0.8)/2=0.24]]." },
          { "kind": "h3", "text": "Contoh Praktis 8: Kanopi Segitiga" },
          { "kind": "p", "text": "Penampang kanopi segitiga siku-siku yang datar memiliki [[a=1.2\\text{ m}]], [[c=2\\text{ m}]], dan [[B\\approx53.13^\\circ]]. Gunakan Mode 2: [[K=(1.2\\times2\\times0.8)/2]], sehingga [[[\\boxed{K=0.96\\text{ m}^2}]]]. Periksa: [[K=(1.2\\times1.6)/2=0.96]]." },
          { "kind": "h3", "text": "Contoh Praktis 9: Pola Potong Tripleks" },
          { "kind": "p", "text": "Potongan tripleks segitiga siku-siku memiliki [[a=0.9\\text{ m}]], [[c=1.5\\text{ m}]], dan [[B\\approx53.13^\\circ]]. Gunakan Mode 2: [[K=(0.9\\times1.5\\times0.8)/2]], sehingga [[[\\boxed{K=0.54\\text{ m}^2}]]]. Ini luas bahan yang terpakai, tidak termasuk sisa potongan. Periksa: [[K=(0.9\\times1.2)/2=0.54]]." },
          { "kind": "h3", "text": "Contoh Praktis 10: Survei Ladang Segitiga" },
          { "kind": "p", "text": "Pengukuran ladang segitiga yang disederhanakan menghasilkan [[a=7\\text{ m}]], [[c=25\\text{ m}]], dan [[B\\approx73.74^\\circ]]. Sisi lainnya 24 m, sehingga [[\\sin(B)=24/25=0.96]]. Gunakan Mode 2: [[K=(7\\times25\\times0.96)/2]], sehingga [[[\\boxed{K=84\\text{ m}^2}]]]. Ini luas penampang planar. Periksa: [[K=(7\\times24)/2=84]]." },
          { "kind": "h3", "text": "Contoh Praktis 11: Panel Layang-Layang Segitiga" },
          { "kind": "p", "text": "Panel layang-layang atau kain segitiga siku-siku memiliki [[a=20\\text{ cm}]], [[c=25\\text{ cm}]], dan [[B\\approx36.87^\\circ]]. Karena [[\\sin(B)=15/25=0.6]], Mode 2 menghasilkan [[K=(20\\times25\\times0.6)/2]], sehingga [[[\\boxed{K=150\\text{ cm}^2}]]]. Satuan sentimeter persegi, sesuai masukannya. Periksa: [[K=(20\\times15)/2=150]]." },
          { "kind": "h3", "text": "Contoh Praktis 12: Panel Samping Dudukan Surya" },
          { "kind": "p", "text": "Panel sisi penyangga segitiga siku-siku yang datar memiliki [[a=1.8\\text{ m}]], [[c=3\\text{ m}]], dan sudut apit [[B\\approx53.13^\\circ]]. Dengan [[\\sin(B)=0.8]], Mode 2 menghasilkan [[K=(1.8\\times3\\times0.8)/2]], sehingga [[[\\boxed{K=2.16\\text{ m}^2}]]]. Ini luas panel, bukan keluaran atau kapasitas listrik. Periksa: [[K=(1.8\\times2.4)/2=2.16]]." }
        ],
        "table": {
          "headers": ["Situasi", "Mode", "Sisi / Sisi miring", "Sudut", "Luas", "Penafsiran"],
          "rows": [
            ["Atap pelana", "1", "4 m / 5 m", "[[A\\approx36.87^\\circ]]", "6 m²", "Luas penampang datar"],
            ["Panel samping ram", "1", "2.4 m / 2.5 m", "[[A\\approx16.26^\\circ]]", "0.84 m²", "Panel samping, bukan kemiringan"],
            ["Layar", "1", "12 ft / 13 ft", "[[A\\approx22.62^\\circ]]", "30 ft²", "Luas datar sebelum jahitan"],
            ["Petak tanah", "1", "40 m / 50 m", "[[A\\approx36.87^\\circ]]", "600 m²", "Luas petak datar"],
            ["Panel baja", "1", "1.5 m / 1.7 m", "[[A\\approx28.07^\\circ]]", "0.6 m²", "Hanya luas datar"],
            ["Profil samping tangga", "1", "3.2 m / 4 m", "[[A\\approx36.87^\\circ]]", "3.84 m²", "Profil samping, bukan anak tangga"],
            ["Jendela kaca", "2", "0.6 m / 1 m", "[[B\\approx53.13^\\circ]]", "0.24 m²", "Sebelum kelonggaran bingkai"],
            ["Kanopi", "2", "1.2 m / 2 m", "[[B\\approx53.13^\\circ]]", "0.96 m²", "Luas penampang segitiga"],
            ["Potongan tripleks", "2", "0.9 m / 1.5 m", "[[B\\approx53.13^\\circ]]", "0.54 m²", "Luas terpakai, tanpa sisa"],
            ["Survei ladang", "2", "7 m / 25 m", "[[B\\approx73.74^\\circ]]", "84 m²", "Luas lahan datar"],
            ["Panel layang-layang", "2", "20 cm / 25 cm", "[[B\\approx36.87^\\circ]]", "150 cm²", "Luas kain"],
            ["Panel samping surya", "2", "1.8 m / 3 m", "[[B\\approx53.13^\\circ]]", "2.16 m²", "Panel penyangga, bukan keluaran"]
          ]
        },
        "imgAlt": "Empat perhitungan luas segitiga siku-siku yang dikerjakan: atap pelana, jendela kaca, survei ladang, dan layar",
        "figcaption": "Empat dari situasi yang dikerjakan di atas, masing-masing dengan segitiga, sudut apit, rumus, dan luas yang terverifikasi."
      },
      "sec-consistency": {
        "h2": "Cara Memeriksa Apakah Panjang Sisi dan Sudut Membentuk Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Satu sisi siku-siku, satu sisi miring, dan satu sudut lancip membawa informasi lebih daripada yang dibutuhkan segitiga siku-siku: dua dari ketiganya menentukan yang ketiga, sehingga ketiganya harus saling cocok. Pemeriksaan di bawah memastikan angka yang dihitung menggambarkan segitiga siku-siku." },
          { "kind": "h3", "text": "Memvalidasi Mode 1" },
          { "kind": "p", "text": "Untuk Mode 1 relasi konsistensinya adalah [[\\cos(A)=b/c]], atau setara [[[\\boxed{b=c\\cos(A)}]]]. Dengan [[b=4]] dan [[c=5]], [[\\cos(A)=0.8]] menghasilkan [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Sudut sembarang seperti [[60^\\circ]] tidak akan menggambarkan segitiga siku-siku yang sama dengan panjang sisi ini: [[5\\cos(60^\\circ)=2.5\\neq4]], sehingga ketiga masukan akan saling tidak konsisten." },
          { "kind": "h3", "text": "Memvalidasi Mode 2" },
          { "kind": "p", "text": "Untuk Mode 2 relasinya adalah [[\\cos(B)=a/c]], atau setara [[[\\boxed{a=c\\cos(B)}]]]. Dengan [[a=3]] dan [[c=5]], [[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]. Sudut yang dipilih harus sesuai dengan pengukuran sebenarnya; sisi 3 dengan sisi miring 5 tidak bertemu pada sudut apit, katakanlah, [[70^\\circ]]." },
          { "kind": "h3", "text": "Mengapa Rumus Luas Umum Tetap Dapat Mengembalikan Angka" },
          { "kind": "p", "text": "Rumus [[K=\\frac12xy\\sin(\\theta)]] menghitung luas segitiga umum yang ditentukan oleh dua sisi dan sudut apitnya. Kombinasi sisi-sudut yang tidak cocok tetap mengembalikan angka, tetapi segitiga yang dihasilkan tidak siku-siku: segitiga itu adalah segitiga lain yang kebetulan berbagi ketiga masukan tersebut. Hasil aritmetika saja tidak membuktikan masukan menggambarkan segitiga siku-siku yang valid; pemeriksaan kosinus di atas yang melakukan pekerjaan itu." },
          { "kind": "h3", "text": "Cara Menangani Pengukuran Sudut yang Dibulatkan" },
          { "kind": "p", "text": "Sudut seperti [[36.87^\\circ]] mungkin merupakan tampilan yang dibulatkan dari kira-kira [[36.8699^\\circ]]. Ketidakcocokan kecil akibat pembulatan tampilan atau pengukuran harus dibedakan dari geometri yang benar-benar tidak konsisten: kelonggaran beberapa perseratus derajat adalah pembulatan, sedangkan ketidakcocokan beberapa derajat berarti masukannya tidak sepakat. Tidak ada toleransi validasi numerik yang diklaim untuk kalkulator itu sendiri; pembedaan ini adalah penilaian yang dibuat dari pengukuran yang ada." }
        ]
      },
      "sec-alternatives": {
        "h2": "Cara Alternatif Mencari Luas Segitiga Siku-Siku Menggunakan Sudut",
        "blocks": [
          { "kind": "p", "text": "Ini adalah alternatif matematis, bukan mode kalkulator tambahan; semuanya menunjukkan geometri yang sama dalam kombinasi masukan yang lain." },
          { "kind": "h3", "text": "Menggunakan Sisi Miring dan Satu Sudut Lancip" },
          { "kind": "p", "text": "Untuk segitiga siku-siku yang valid, [[a=c\\sin(A)]] dan [[b=c\\cos(A)]]. Substitusi ke [[K=ab/2]] menghasilkan [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]]. Dengan identitas sudut ganda [[\\sin(2A)=2\\sin(A)\\cos(A)]], bentuk ini menjadi [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]. Sisi miring dan satu sudut lancip menentukan segitiga sepenuhnya, sehingga tidak diperlukan pengukuran sisi sama sekali." },
          { "kind": "h3", "text": "Menggunakan Satu Sisi dan Sudut Sampingnya" },
          { "kind": "p", "text": "Jika sisi [[b]] dan sudut [[A]] diketahui, maka [[a=b\\tan(A)]], dan [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]. Pasangannya penting: [[b]] haruslah sisi yang bersebelahan dengan sudut [[A]] agar tangen menghasilkan sisi depan." },
          { "kind": "h3", "text": "Menggunakan Sisi a dan Sudut B" },
          { "kind": "p", "text": "Cerminan kasus sebelumnya untuk sudut [[B]]: [[b=a\\tan(B)]], sehingga [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]. Sisi [[a]] bersebelahan dengan sudut [[B]], dan itulah tepatnya alasan tangen kembali memulihkan sisi depan." },
          { "kind": "h3", "text": "Metode Mana yang Paling Sederhana?" },
          { "kind": "p", "text": "Rumus terbaik adalah rumus yang cocok dengan pengukuran yang tersedia. Jika kedua sisi diketahui, gunakan [[K=ab/2]] dan lewatkan trigonometri. Jika satu sisi, sisi miring, dan sudut apit diketahui, kedua mode kalkulator adalah jalur langsung. Bentuk tangen dan sudut ganda berguna untuk perhitungan tangan dengan sudut istimewa, tetapi menambah langkah yang tidak dibutuhkan masukan hanya menambah tempat bersembunyinya kesalahan." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Bagaimana Sudut Lancip Memengaruhi Luas Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Sinus bertambah seiring bertambahnya sudut lancip, sehingga sudut yang lebih besar seolah menjanjikan luas yang lebih besar. Itu hanya berlaku bila besaran lain tetap, dan dalam segitiga siku-siku sisi-sisi dan sudut tidak dapat berubah secara independen." },
          { "kind": "h3", "text": "Sisi Miring Tetap, Sudut Berubah" },
          { "kind": "p", "text": "Untuk sisi miring yang tetap, luas dapat ditulis sebagai [[K=\\frac{c^2\\sin(2A)}{4}]]. Faktor [[\\sin(2A)]] naik ketika [[A]] bergerak dari dekat [[0^\\circ]] menuju [[45^\\circ]], lalu turun ketika [[A]] mendekati [[90^\\circ]]. Luas karenanya bertambah pada paruh pertama rentang lancip dan berkurang pada paruh kedua. Kedua paruh adalah cerminan melalui hubungan sudut berkomplemen [[A+B=90^\\circ]]: menukar sudut-sudut menukar sisi-sisinya dan luasnya tidak berubah." },
          { "kind": "h3", "text": "Luas Maksimum untuk Sisi Miring Tetap" },
          { "kind": "p", "text": "Karena [[\\sin(2A)\\leq1]], luas terbesar yang mungkin adalah [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]], tercapai ketika [[A=B=45^\\circ]]. Untuk [[c=10]] luas maksimumnya adalah [[[\\boxed{K_{\\max}=25\\text{ square units}}]]]. Ini adalah segitiga siku-siku sama kaki pada Contoh 4: sisi-sisi yang sama membuat hasil kali sisi-sisinya, dan karenanya luasnya, sebesar mungkin sesuai batas sisi miring yang tetap." },
          { "kind": "h3", "text": "Mengapa Luas Tidak Begitu Saja Bertambah terhadap Sudut dalam Setiap Kasus" },
          { "kind": "p", "text": "Klaim tentang sudut yang bertambah tidak ada artinya tanpa menyebut apa yang ditahan konstan. Dengan sisi miring tetap hubungannya naik lalu turun; dengan sisi tetap hubungannya berbeda lagi. Memperlakukan luas sebagai fungsi naik sederhana dari sudut adalah penyederhanaan berlebihan yang umum, dan bagian ini ada untuk menjauhkannya dari pekerjaan Anda." }
        ]
      },
      "sec-units": {
        "h2": "Satuan Luas, Derajat, dan Pembulatan",
        "blocks": [
          { "kind": "h3", "text": "Meter Persegi" },
          { "kind": "p", "text": "Jika masukannya dalam meter, luasnya keluar dalam meter persegi: [[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]. Perkalian dua panjang selalu menghasilkan satuan persegi, apa pun sistem satuannya." },
          { "kind": "h3", "text": "Sentimeter Persegi" },
          { "kind": "p", "text": "Masukan sentimeter menghasilkan luas sentimeter persegi, seperti pada contoh panel layang-layang dengan hasilnya [[150\\text{ cm}^2]]. Konversi antar satuan persegi mengkuadratkan faktor konversi linear: 1 m² = 10.000 cm², bukan 100." },
          { "kind": "h3", "text": "Kaki Persegi" },
          { "kind": "p", "text": "Masukan kaki menghasilkan luas kaki persegi, seperti pada contoh layar dengan hasilnya [[30\\text{ ft}^2]]. Ubah semua masukan ke satu satuan panjang sebelum menghitung; kalkulator tidak dapat mencampur meter dan kaki." },
          { "kind": "h3", "text": "Derajat vs. Radian" },
          { "kind": "p", "text": "Kalkulator mengharapkan sudut dalam derajat. Untuk mengonversi, gunakan [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]. Misalnya, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Memasukkan nilai radian di tempat yang mengharapkan derajat adalah salah satu kesalahan paling merusak, karena sinus dari angka radian kecil tampak masuk akal padahal sepenuhnya salah." },
          { "kind": "h3", "text": "Mengapa Sinus Tidak Memiliki Satuan" },
          { "kind": "p", "text": "Sinus adalah perbandingan dua panjang, sehingga satuannya saling meniadakan dan nilainya tak berdimensi. Mengalikan dua panjang dengan bilangan tak berdimensi menyisakan tepat satuan persegi yang dibutuhkan luas. Inilah pula alasan nilai sinus sama baik sisi-sisinya diukur dalam meter maupun kaki, selama bentuk segitiganya sama." },
          { "kind": "h3", "text": "Mengapa Pembulatan Menengah Penting" },
          { "kind": "p", "text": "Membulatkan sudut atau nilai sinus terlalu dini dapat menggeser luas akhir. Jaga presisi penuh selama perhitungan dan bulatkan hanya hasil yang dilaporkan, hingga presisi yang didukung pengukuran masukan. Pengukuran yang diberikan hingga dua angka penting tidak menghasilkan jawaban enam desimal." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum Saat Menghitung Luas Segitiga Siku-Siku dari Sudut",
        "blocks": [
          { "kind": "h3", "text": "Contoh Salah versus Benar" },
          { "kind": "p", "text": "Ambil segitiga 3-4-5 dengan [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Benar: [[K=(4\\times5\\times\\sin(A))/2\\approx6]]. Jika sudut yang salah disubstitusikan, [[K=(4\\times5\\times\\sin(B))/2\\approx8]], bukan 6. Kesalahan ini menggunakan sudut apit yang keliru untuk sisi [[b]] dan [[c]], dan 8 hanyalah luas segitiga yang salah." }
        ],
        "steps": [
          "<strong>Menggunakan sudut B dengan Mode 1 tanpa mengubah sisi-sisinya.</strong> Mode 1 memasangkan [[b]] dan [[c]] dengan sudut [[A]]; memasukkan [[B]] menghitung luas segitiga yang berbeda.",
          "<strong>Menggunakan sudut A dengan Mode 2.</strong> Mode 2 memasangkan [[a]] dan [[c]] dengan sudut [[B]]. Periksa pemilih mode sebelum memasukkan angka.",
          "<strong>Tertukar antara sisi samping dan sisi depan.</strong> Label-label ini bergantung pada sudut acuan: tetapkan dulu sudutnya, lalu beri label sisi-sisinya relatif terhadap sudut itu.",
          "<strong>Memasukkan sisi miring ke kolom sisi siku-siku.</strong> Sisi harus lebih pendek daripada [[c]]; menukarnya merusak setiap pemeriksaan konsistensi.",
          "<strong>Menggunakan sudut apit yang salah.</strong> Sudut harus terletak di antara dua sisi yang dimasukkan, atau proyeksi sinusnya salah.",
          "<strong>Lupa fungsi sinus.</strong> [[bc/2]] saja mengalikan dua panjang yang tidak tegak lurus; hasilnya bukan luas segitiga.",
          "<strong>Lupa membagi dua.</strong> Hasil kali yang tidak dibagi dua adalah luas jajar genjang, bukan segitiga.",
          "<strong>Memasukkan radian padahal yang diharapkan derajat.</strong> [[\\sin(0.64)]] dan [[\\sin(36.87^\\circ)]] adalah bilangan yang sepenuhnya berbeda.",
          "<strong>Memasukkan 0 atau 90 derajat.</strong> Keduanya tidak menggambarkan segitiga siku-siku tak-merosot dengan masukan ini.",
          "<strong>Memasukkan panjang negatif atau nol.</strong> Panjang bernilai positif; selain itu tidak memiliki makna geometris.",
          "<strong>Memasukkan sisi yang lebih panjang daripada sisi miring.</strong> Sisi miring selalu sisi terpanjang, sehingga masukan ini bertentangan dengan pengaturannya.",
          "<strong>Menggunakan masukan yang tidak konsisten.</strong> Periksa [[b=c\\cos(A)]] atau [[a=c\\cos(B)]]; angka dari masukan yang tidak cocok bukan milik segitiga siku-siku mana pun.",
          "<strong>Mencampur satuan.</strong> Ubah semua panjang ke satu satuan dulu; meter dengan sentimeter mengskalakan jawaban sebesar 100.",
          "<strong>Melaporkan satuan linear.</strong> Satuan luas adalah kuadrat dari satuan panjang: m², bukan m.",
          "<strong>Membulatkan sudut terlalu dini.</strong> Bulatkan hanya jawaban akhir; pembulatan dini menggeser sinus.",
          "<strong>Memperlakukan mode-mode sebagai saling tertukar.</strong> Setiap mode adalah rumusnya sendiri dengan kontrak masukannya sendiri."
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Apakah Luas yang Dihitung Sudah Benar",
        "blocks": [
          { "kind": "h3", "text": "Metode 1: Periksa Teorema Pythagoras" },
          { "kind": "p", "text": "Untuk segitiga siku-siku yang valid, [[a^2+b^2=c^2]]. Untuk segitiga 3-4-5, [[9+16=25]]. Kegagalan di sini berarti masukan sisi tidak menggambarkan segitiga siku-siku sama sekali." },
          { "kind": "h3", "text": "Metode 2: Periksa Rumus Sisi Siku-Siku" },
          { "kind": "p", "text": "Hitung [[K=ab/2]] secara independen. Untuk [[a=3]] dan [[b=4]], [[K=6]]. Kecocokan dengan hasil berbasis sudut mengonfirmasi seluruh perhitungan." },
          { "kind": "h3", "text": "Metode 3: Periksa Sudut Berkomplemen" },
          { "kind": "p", "text": "Verifikasi [[A+B=90^\\circ]]. Untuk [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]]. Jumlahnya harus berlaku agar sudut yang dimasukkan menjadi sudut lancip asli dari segitiga." },
          { "kind": "h3", "text": "Metode 4: Periksa Hubungan Sinus" },
          { "kind": "p", "text": "Untuk Mode 1, [[\\sin(A)=a/c]]; untuk Mode 2, [[\\sin(B)=b/c]]. Pada segitiga 3-4-5, [[\\sin(36.87^\\circ)\\approx3/5]] dan [[\\sin(53.13^\\circ)\\approx4/5]]. Ini adalah hubungan yang sama yang digunakan rumus, diperiksa dari arah berlawanan." },
          { "kind": "h3", "text": "Metode 5: Verifikasi Konsistensi Masukan" },
          { "kind": "p", "text": "Untuk Mode 1, [[b\\approx c\\cos(A)]]; untuk Mode 2, [[a\\approx c\\cos(B)]]. Simbol pendekatan tepat digunakan bila pengukuran sudut telah dibulatkan." },
          { "kind": "h3", "text": "Metode 6: Periksa Luas Maksimum" },
          { "kind": "p", "text": "Untuk sisi miring tetap, [[K\\leq c^2/4]]. Dengan [[c=5]], tidak ada luas valid yang melebihi 6,25 satuan persegi. Luas terhitung di atas batas itu menandakan kesalahan masukan seketika." },
          { "kind": "h3", "text": "Metode 7: Periksa Satuan Persegi" },
          { "kind": "p", "text": "Pastikan hasilnya dinyatakan dalam kuadrat dari satuan panjang masukan. Ini menangkap kebiasaan yang cukup umum, yaitu melaporkan angka luas dengan satuan panjang yang tidak berubah." }
        ]
      },
      "sec-conclusion": {
        "h2": "Sudut, Sisi, dan Sisi Miring: Semua yang Anda Butuhkan",
        "blocks": [
          { "kind": "p", "text": "Metode luas berbasis sudut adalah aturan alas-tinggi dengan tinggi yang dibangun ulang dari sisi miring. Begitu sudut apit dipasangkan dengan sisi-sisi yang tepat, sinus menyediakan sisi tegak lurus, dan luasnya tinggal satu substitusi lagi. Kedua mode adalah dua pintu menuju ruangan yang sama: Mode 1 masuk melalui sudut A, Mode 2 melalui sudut B, dan keduanya tiba pada luas yang sama." },
          { "kind": "p", "text": "Disiplin yang membuat metode ini tepercaya adalah konsistensi: periksa bahwa sisi, sisi miring, dan sudut saling cocok melalui relasi kosinus, verifikasi luas terhadap rumus sisi bila sisi kedua dapat dipulihkan, dan jaga pasangan sudut-sisi tetap tepat. Dengan pemeriksaan itu, jawabannya layak dipercaya." },
          { "kind": "p", "text": "Gunakan kalkulator halaman ini kapan pun satu sisi, sisi miring, dan sudut apit adalah data yang diukur, dan beralihlah ke kalkulator sisi, tinggi, atau semiperimeter bila pengukuran mengarah ke tempat lain." }
        ]
      }
    },
    "faqs": [
      {
        "question": "Bagaimana cara mencari luas segitiga siku-siku menggunakan sudut?",
        "answer": "Gunakan K = bc sin(A)/2 jika Anda mengetahui sisi b, sisi miring c, dan sudut apit A; gunakan K = ac sin(B)/2 jika Anda mengetahui sisi a, sisi miring c, dan sudut apit B. Sinus mengubah sisi miring menjadi tinggi tegak lurus terhadap sisi yang dipilih, dan membagi dua hasilnya memberikan luas dalam satuan persegi."
      },
      {
        "question": "Apa rumus luas menggunakan sisi b, sisi miring c, dan sudut A?",
        "answer": "Rumusnya adalah K = bc sin(A)/2. Sisi b adalah sisi siku-siku yang bersebelahan dengan sudut A, c adalah sisi miring, dan A adalah sudut lancip di antara keduanya. Untuk b = 4, c = 5, dan A sekitar 36,87 derajat, sin(A) sekitar 0,6, sehingga luasnya sekitar 6 satuan persegi."
      },
      {
        "question": "Apa rumus luas menggunakan sisi a, sisi miring c, dan sudut B?",
        "answer": "Rumusnya adalah K = ac sin(B)/2. Sisi a adalah sisi siku-siku yang bersebelahan dengan sudut B, c adalah sisi miring, dan B adalah sudut lancip di antara keduanya. Untuk a = 3, c = 5, dan B sekitar 53,13 derajat, sin(B) sekitar 0,8, sehingga luasnya sekitar 6 satuan persegi, segitiga yang sama seperti contoh Mode 1."
      },
      {
        "question": "Mengapa rumus luas menggunakan sinus?",
        "answer": "Sinus membangun tinggi tegak lurus dari sisi miring. Dengan alas b dan sisi c yang bertemu pada sudut A, tingginya adalah c sin(A), sehingga K = bc sin(A)/2. Tanpa suku sinus, rumus akan mengalikan dua panjang yang tidak tegak lurus dan menjawab pertanyaan geometri yang berbeda."
      },
      {
        "question": "Apa itu sudut apit?",
        "answer": "Sudut apit terletak di antara dua sisi yang ditentukan. Sudut A diapit oleh sisi b dan c; sudut B diapit oleh sisi a dan c. Rumus luas sinus hanya berlaku dengan sudut apit dari dua sisi yang digunakan, karena rumus membaca tinggi tegak lurus dari sudut tersebut."
      },
      {
        "question": "Bisakah saya menghitung luas tanpa mengetahui kedua sisi siku-siku?",
        "answer": "Ya. Sisi miring dan sudut apit bersama-sama merekonstruksi sisi yang hilang melalui sinus, sehingga sisi kedua tidak perlu diukur sama sekali. Jika kedua sisi justru sudah diketahui, rumus yang lebih sederhana K = ab/2 adalah jalan langsung dan tidak memerlukan trigonometri apa pun."
      },
      {
        "question": "Mengapa kedua mode kalkulator memberikan luas yang sama?",
        "answer": "Kedua mode menggambarkan satu segitiga. Karena sin(A) = a/c, maka bc sin(A) = ab; karena sin(B) = b/c, maka ac sin(B) = ab. Kedua rumus menyederhanakan menjadi K = ab/2. Perbedaan kecil akibat pembulatan sudut masukan hanyalah efek pembulatan, bukan ketidaksepakatan antar rumus."
      },
      {
        "question": "Bisakah saya menggunakan sembarang sudut lancip dengan sisi dan sisi miring tertentu?",
        "answer": "Tidak. Ketiga masukan harus saling cocok: Mode 1 mensyaratkan b = c cos(A) dan Mode 2 mensyaratkan a = c cos(B). Sudut lancip sembarang dengan panjang sisi yang sama menggambarkan segitiga yang berbeda dan tidak siku-siku, dan luas yang dikembalikan rumus adalah milik segitiga itu."
      },
      {
        "question": "Bagaimana cara memverifikasi luas menggunakan rumus sisi siku-siku?",
        "answer": "Pulihkan sisi yang hilang dengan teorema Pythagoras, lalu hitung K = ab/2. Untuk b = 4 dan c = 5, a = akar(25 - 16) = 3, dan K = 12/2 = 6, cocok dengan hasil berbasis sudut. Kesepakatan antara dua jalur independen ini mengonfirmasi masukan dan aritmetikanya."
      },
      {
        "question": "Apakah sudut harus dalam derajat atau radian?",
        "answer": "Kalkulator mengharapkan derajat. Ubah radian dengan Derajat = Radian dikali 180/pi; pi/6 radian adalah 30 derajat. Nilai radian yang dimasukkan di tempat yang mengharapkan derajat menghasilkan nilai sinus yang tampak masuk akal tetapi salah, jadi periksa satuan sudutnya dengan cermat sebelum menghitung."
      },
      {
        "question": "Berapa luas maksimum untuk sisi miring tertentu?",
        "answer": "Maksimumnya adalah c kuadrat dibagi 4, tercapai ketika kedua sudut lancip 45 derajat, yaitu segitiga siku-siku sama kaki. Untuk sisi miring 10 satuan, luas maksimumnya 25 satuan persegi. Setiap luas terhitung di atas c kuadrat per 4 menandakan kesalahan masukan."
      },
      {
        "question": "Kapan saya sebaiknya menggunakan Kalkulator Luas Segitiga Siku-Siku utama?",
        "answer": "Gunakan kalkulator luas utama ketika pengukuran Anda lebih langsung cocok dengan salah satu kombinasi masukannya, misalnya kedua sisi diketahui. Simpan kalkulator berbasis sudut ini untuk kasus yang memang dirancang untuknya: satu sisi, sisi miring, dan sudut lancip apit yang diukur bersamaan."
      }
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedItems": [
      "Kalkulator Luas Segitiga Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku dari Sisi Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku dari Tinggi",
      "Kalkulator Luas Segitiga Siku-Siku dari Sisi dan Sudut",
      "Kalkulator Luas Segitiga Siku-Siku dari Semiperimeter",
      "Kalkulator Sisi Segitiga Siku-Siku dari Sinus",
      "Kalkulator Sudut Segitiga Siku-Siku dari Sinus"
    ]
  },
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "sec-intro": "كيفية حساب مساحة المثلث القائم الزاوية من زاوية",
      "sec-geometry": "فهم أضلاع وزوايا المثلث القائم الزاوية",
      "sec-sine": "لماذا تستخدم صيغة المساحة الجيب؟",
      "sec-mode1": "كيفية إيجاد المساحة باستخدام الضلع b والوتر c والزاوية A",
      "sec-mode2": "كيفية إيجاد المساحة باستخدام الضلع a والوتر c والزاوية B",
      "sec-same": "صيغتان تعتمدان على الزاوية لمثلث قائم واحد",
      "sec-howto": "كيفية استخدام حاسبة مساحة المثلث القائم الزاوية من زاوية",
      "sec-foundations": "أمثلة خطوة بخطوة لمساحة المثلث القائم الزاوية من زاوية",
      "sec-applications": "تطبيقات واقعية لمساحة المثلث القائم الزاوية من زاوية",
      "sec-consistency": "كيفية التحقق مما إذا كانت أطوال الأضلاع والزاوية تشكل مثلثًا قائم الزاوية",
      "sec-alternatives": "طرق بديلة لإيجاد مساحة المثلث القائم الزاوية باستخدام الزوايا",
      "sec-angle-effect": "كيف تؤثر الزاوية الحادة على مساحة المثلث القائم الزاوية؟",
      "sec-units": "وحدات المساحة والدرجات والتقريب",
      "sec-mistakes": "أخطاء شائعة عند حساب مساحة المثلث القائم الزاوية من زاوية",
      "sec-verify": "كيفية التحقق مما إذا كانت المساحة المحسوبة صحيحة",
      "sec-related": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
      "sec-faq": "الأسئلة الشائعة",
      "sec-conclusion": "الخلاصة"
    },
    "sections": {
      "sec-intro": {
        "h2": "كيفية حساب مساحة المثلث القائم الزاوية من زاوية",
        "blocks": [
          { "kind": "p", "text": "لنفترض أن مثلثًا قائم الزاوية له ضلع قائم [[b=4\\text{ m}]] ووتر [[c=5\\text{ m}]]، وأن الزاوية الحادة بين هذين الضلعين قياسها حوالي [[A\\approx36.87^\\circ]]. تتبع مساحته مباشرة: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. وبما أن [[\\sin(36.87^\\circ)\\approx0.6]]، فإن المساحة تساوي تقريبًا [[[\\boxed{K=6\\text{ m}^2}]]]. يحصر المثلث 6 أمتار مربعة من السطح المستوي." },
          { "kind": "p", "text": "تتعامل هذه الحاسبة مع هذه الحالة: بمعرفة ضلع قائم واحد والوتر والزاوية الحادة بينهما، يحوّل الجيب الوتر إلى الارتفاع العمودي المفقود، ونصف القاعدة مضروبًا في الارتفاع يعطي المساحة بوحدات مربعة. يجب أن تقع الزاوية المحصورة بين الضلعين المدخلين، ويقرن كل وضع زاوية محددة بضلعيها." },
          { "kind": "p", "text": "الزاوية [[36.87^\\circ]] مقربة من حوالي [[36.8699^\\circ]]؛ والحفاظ على الدقة الكاملة في الحاسبة يعطي أدق نتيجة." }
        ]
      },
      "sec-geometry": {
        "h2": "فهم أضلاع وزوايا المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "يستخدم هذا الدليل ترميزًا واحدًا متسقًا في كل أجزائه: [[A]] و[[B]] هما الزاويتان الحادتان، و[[C=90^\\circ]] هي الزاوية القائمة، والضلع [[a]] يقابل الزاوية [[A]]، والضلع [[b]] يقابل الزاوية [[B]]، والضلع [[c]] هو الوتر، و[[K]] هي المساحة." },
          { "kind": "h3", "text": "ما هو المثلث القائم الزاوية؟" },
          { "kind": "p", "text": "المثلث القائم الزاوية له زاوية داخلية واحدة قياسها بالضبط [[90^\\circ]]. يلتقي ضلعاه القائمان عند تلك الزاوية القائمة، ويقع الوتر مقابلها. الوتر هو دائمًا أطول ضلع. الزاويتان الباقيتان حادتان، وبما أن مجموع الزوايا الداخلية الثلاث 180 درجة، فإن [[A+B+C=180^\\circ]]. وبما أن [[C=90^\\circ]]، تحقق الزاويتان الحادتان [[A+B=90^\\circ]]: معرفة إحداهما تعني معرفة الأخرى." },
          { "kind": "h3", "text": "ما هو الوتر؟" },
          { "kind": "p", "text": "الوتر هو الضلع المقابل للزاوية القائمة، ويُرمز له [[c]] في وضعي الحاسبة. للعثور عليه في مثلث مرسوم بأي اتجاه، ابحث عن الضلع الذي لا يلمس علامة الزاوية المربعة: ذلك الضلع هو الوتر. وهو أطول من أي من الضلعين القائمين، لأنه يمتد عبر الزاوية القائمة كلها بينما يمتد كل ضلع قائم على زاوية حادة فقط. كل صيغة مساحة في هذه الصفحة تستخدم [[c]] كأحد ضلعيها، لذا فإن تحديده بشكل صحيح هو أول مهارة يجب التدرب عليها." },
          { "kind": "h3", "text": "ما هو الضلع المجاور؟" },
          { "kind": "p", "text": "الضلع القائم المجاور هو الضلع القائم الذي يلامس الزاوية المرجعية المختارة دون أن يكون الوتر. بالنسبة للزاوية [[A]] الضلع المجاور هو [[b]]؛ وبالنسبة للزاوية [[B]] الضلع المجاور هو [[a]]. سمِّ الزاوية المرجعية أولًا، ثم اقرأ ضلعها المجاور. تبديل الزاوية المرجعية يبدل بصمت أي ضلع يُعد مجاورًا، وهذا التبديل وراء كثير من الأخطاء الشائعة المذكورة لاحقًا في هذه الصفحة." },
          { "kind": "h3", "text": "ما هو الضلع المقابل؟" },
          { "kind": "p", "text": "الضلع المقابل يقع مباشرة عبر الزاوية المختارة، دون أن يلمسها. بالنسبة للزاوية [[A]] يكون الضلع [[a]] مقابلًا؛ وبالنسبة للزاوية [[B]] يكون الضلع [[b]] مقابلًا. تتغير التسميات مع الزاوية المرجعية، لكن الوتر يبقى [[c]] في الحالتين. تثبيت الزاوية المرجعية أثناء تسمية المثلث يحافظ على اتساق كل خطوة لاحقة." },
          { "kind": "h3", "text": "ما هي الزاوية المحصورة؟" },
          { "kind": "p", "text": "الزاوية المحصورة هي الزاوية الواقعة بين ضلعين محددين. الزاوية [[A]] محصورة بين الضلعين [[b]] و[[c]]؛ والزاوية [[B]] محصورة بين الضلعين [[a]] و[[c]]. صيغة المساحة العامة بالجيب لا تعمل إلا عندما تكون الزاوية هي المحصورة بين الضلعين المستخدمين، لأن الصيغة تقرأ الارتفاع العمودي من تلك الزاوية. إقران ضلع بزاوية لا يلمسها يكسر الهندسة التي تعتمد عليها الصيغة." }
        ],
        "imgAlt": "المثلث القائم ABC يوضح وضعي المساحة: الزاوية A بين الضلعين b وc، والزاوية B بين الضلعين a وc",
        "figcaption": "يستخدم وضعا الحاسبة المثلث نفسه. يقرن الوضع 1 الضلع b والوتر c والزاوية المحصورة A؛ ويقرن الوضع 2 الضلع a والوتر c والزاوية المحصورة B."
      },
      "sec-sine": {
        "h2": "لماذا تستخدم صيغة المساحة الجيب؟",
        "blocks": [
          { "kind": "p", "text": "يستند وضعا الحاسبة إلى صيغة عامة واحدة لمساحة أي مثلث بمعرفة ضلعين والزاوية المحصورة بينهما:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { "kind": "p", "text": "هنا [[x]] و[[y]] طولا ضلعين، و[[\\theta]] هي الزاوية المحصورة بينهما، و[[K]] هي المساحة. حد الجيب هو ما يبني الارتفاع العمودي من الضلع الثاني." },
          { "kind": "h3", "text": "كيف تعمل الصيغة العامة" },
          { "kind": "p", "text": "قاعدة مساحة المثلث المألوفة هي [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. عندما لا يُقاس الارتفاع العمودي مباشرة، يمكن للجيب استعادته من ضلع آخر. خذ قاعدة طولها [[x]] وضلعًا ثانيًا طوله [[y]] يلتقي بها عند زاوية [[\\theta]]. المركبة العمودية لذلك الضلع الثاني، أي الارتفاع المحسوب للمساحة، هي [[h=y\\sin(\\theta)]]. التعويض في قاعدة القاعدة-الارتفاع يعطي [[K=\\frac12 x(y\\sin(\\theta))]]، وهي الصيغة العامة أعلاه. يجب أن تقابل الزاوية المحصورة الضلعين المختارين؛ فزاوية من مكان آخر في المثلث تقيس عموديًا مختلفًا." },
          { "kind": "h3", "text": "لماذا تُقسم المساحة على اثنين؟" },
          { "kind": "p", "text": "يشغل المثلث نصف مساحة متوازي الأضلاع المبني على القاعدة نفسها بالارتفاع العمودي نفسه. مع القاعدة [[x]] والارتفاع [[h]]، يكون حاصل الضرب [[x\\times h]] هو متوازي الأضلاع الكامل، والمثلث هو نصفه بالضبط. ضرب الضلعين وقيمة الجيب دون التنصيف يعطي ضعف المساحة المطلوبة." },
          { "kind": "h3", "text": "لماذا يمكن استخدام الوتر" },
          { "kind": "p", "text": "يمكن أن يكون أحد الضلعين في صيغة الزاوية المحصورة هو الوتر. مقترنًا بالضلع القائم الصحيح والزاوية الحادة بينهما، يحمل الوتر معلومات كافية لبناء المساحة: فمركبته الجيبية هي بالضبط الارتفاع العمودي بالنسبة لذلك الضلع القائم كقاعدة. لهذا لا تطلب الحاسبة أبدًا الضلع القائم الثاني. الوتر ليس استثناءً خاصًا من الصيغة؛ بل هو اختيار عادي لضلع، يقع عند زاوية محصورة عادية." },
          { "kind": "h3", "text": "لماذا يجب أن تكون الزاوية صحيحة" },
          { "kind": "p", "text": "استبدال الزاوية [[A]] بالزاوية [[B]] مع إبقاء إقران الأضلاع نفسه يعطي عادة نتيجة خاطئة. خذ المثلث 3-4-5 حيث [[b=4]] و[[c=5]] و[[A\\approx36.87^\\circ]]. الحساب الصحيح للوضع 1 هو [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]. أما تعويض الزاوية الأخرى فيعطي [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]]، لأن [[\\sin(53.13^\\circ)\\approx0.8]]. الإجابة 8 ليست أثر تقريب؛ بل هي مساحة تشكيل مختلف، حيث لم يعد إقران الأضلاع يطابق الزاوية المحصورة. إصابة إقران الزاوية بالضلع من أهم دروس هذه الصفحة." }
        ],
        "imgAlt": "مثلث قائم 3-4-5 يوضح أن a تساوي c مضروبًا في جا A وتساوي 3 كارتفاع عمودي للمساحة",
        "figcaption": "جيب الزاوية A يحوّل الوتر إلى الارتفاع العمودي a = 3، فتتفق الصيغة المألوفة K = ba/2 مع الصيغة المباشرة K = bc sin(A)/2."
      },
      "sec-mode1": {
        "h2": "كيفية إيجاد المساحة باستخدام الضلع b والوتر c والزاوية A",
        "blocks": [
          { "kind": "p", "text": "يستخدم الوضع 1 من الحاسبة:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { "kind": "p", "text": "المتغيرات هي: [[b]] الضلع القائم المجاور للزاوية [[A]]، و[[c]] الوتر، و[[A]] الزاوية الحادة المحصورة بين [[b]] و[[c]]، و[[K]] المساحة." },
          { "kind": "h3", "text": "اشتقاق الصيغة خطوة بخطوة" },
          { "kind": "p", "text": "ابدأ من صيغة مساحة الضلعين القائمين [[K=ab/2]]. من نسبة الجيب عند الزاوية [[A]]، [[\\sin(A)=a/c]]، فيكون [[a=c\\sin(A)]]. يُعاد كتابة الضلع المقابل [[a]] كمركبة جيبية للوتر. يعطي التعويض [[K=\\frac{b(c\\sin(A))}{2}]]، وإعادة الترتيب تعطي [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. لا حاجة لإدخال الضلع المقابل المجهول لأن الصيغة تبنيه من الوتر والزاوية خلف الكواليس." },
          { "kind": "h3", "text": "مثال محلول كامل" },
          { "kind": "p", "text": "بمعرفة [[b=4\\text{ m}]] و[[c=5\\text{ m}]] و[[A\\approx36.87^\\circ]]:" },
          { "kind": "p", "text": "تقول الإجابة إن المثلث يغطي حوالي 6 أمتار مربعة. ولأن زاوية الإدخال مقربة، فإن كلمة تقريبًا لها مكانها في التقرير، مع أنه بالدقة الكاملة تعطي المدخلات نفسها 6 بالضبط." },
          { "kind": "h3", "text": "التحقق باستخدام الضلع المفقود" },
          { "kind": "p", "text": "يتبع الضلع المفقود نظرية فيثاغورس: [[a=\\sqrt{c^2-b^2}]]، فيكون [[a=\\sqrt{25-16}=3]]. ثم [[K=(3\\times4)/2=6]]. يتفق الطريقان لأنهما يصفان المثلث نفسه: طريق الجيب يبني الضلع المفقود من الزاوية، بينما طريق الضلعين يستخدم الضلع مباشرة." },
          { "kind": "h3", "text": "متى يجب استخدام الوضع 1؟" },
          { "kind": "p", "text": "استخدم الوضع 1 عندما تكون القياسات المعروفة هي الضلع القائم المجاور للزاوية الحادة المعروفة والوتر وتلك الزاوية نفسها. إذا كان الضلعان معروفين أصلًا، فإن صيغة الضلعين المباشرة أبسط وتتجاوز الزاوية تمامًا. الوضع 1 مخصص للحالة الميدانية الشائعة حيث تأتي الزاوية والطولان من إعداد القياس نفسه، ولم يُسجل الضلع الثاني أبدًا." }
        ],
        "steps": [
          "<strong>اكتب الصيغة.</strong> [[K=bc\\sin(A)/2]].",
          "<strong>عوّض.</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]].",
          "<strong>احسب الجيب.</strong> [[\\sin(36.87^\\circ)\\approx0.6]].",
          "<strong>اضرب.</strong> [[K\\approx(20\\times0.6)/2]].",
          "<strong>اقسم.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ]
      },
      "sec-mode2": {
        "h2": "كيفية إيجاد المساحة باستخدام الضلع a والوتر c والزاوية B",
        "blocks": [
          { "kind": "p", "text": "يستخدم الوضع 2 من الحاسبة:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { "kind": "p", "text": "المتغيرات هي: [[a]] الضلع القائم المجاور للزاوية [[B]]، وهو مقابل الزاوية [[A]]؛ و[[c]] الوتر؛ و[[B]] الزاوية الحادة المحصورة بين [[a]] و[[c]]؛ و[[K]] المساحة." },
          { "kind": "h3", "text": "اشتقاق الصيغة خطوة بخطوة" },
          { "kind": "p", "text": "ابدأ مجددًا من [[K=ab/2]]. نسبة الجيب المقاسة عند الزاوية [[B]] هي [[\\sin(B)=b/c]]، لأن الضلع المقابل من وجهة نظر [[B]] هو [[b]]. ومن ثم [[b=c\\sin(B)]]. يعطي التعويض [[K=\\frac{a(c\\sin(B))}{2}]]، فيكون [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. تستخدم الصيغة الضلع [[a]] مع أن [[a]] يُسمى الضلع المقابل في الترميز الرئيسي للصفحة؛ فتسمية المقابل تخص الزاوية [[A]]، بينما بالنسبة للزاوية [[B]] يكون الضلع نفسه مجاورًا. تسميات الأضلاع نسبية دائمًا للزاوية المرجعية المختارة." },
          { "kind": "h3", "text": "مثال محلول كامل" },
          { "kind": "p", "text": "بمعرفة [[a=3\\text{ m}]] و[[c=5\\text{ m}]] و[[B\\approx53.13^\\circ]]:" },
          { "kind": "p", "text": "النتيجة هي نفس 6 أمتار مربعة في مثال الوضع 1، لأن المثالين يصفان المثلث 3-4-5 نفسه منظورًا إليه من زاويتيه الحادتين." },
          { "kind": "h3", "text": "التحقق باستخدام الضلع المفقود" },
          { "kind": "p", "text": "احسب [[b=\\sqrt{c^2-a^2}]]، فيكون [[b=\\sqrt{25-9}=4]]. ثم [[K=(3\\times4)/2=6]]. الاتفاق متوقع: فقد أعادت صيغة الجيب بهدوء بناء الضلع المفقود [[b]] من الوتر والزاوية." },
          { "kind": "h3", "text": "متى يجب استخدام الوضع 2؟" },
          { "kind": "p", "text": "استخدم الوضع 2 عندما يكون الضلع المعروف هو [[a]]، والوتر [[c]] معروفًا، والزاوية المقاسة هي التي تلامس الضلع [[a]]، أي الزاوية [[B]]. الوضعان غير قابلين للتبديل دون تغيير تسميات الضلع والزاوية أيضًا؛ فتغذية الوضع 2 بمدخلات الوضع 1 تحسب مساحة مثلث مختلف." }
        ],
        "steps": [
          "<strong>اكتب الصيغة.</strong> [[K=ac\\sin(B)/2]].",
          "<strong>عوّض.</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]].",
          "<strong>احسب الجيب.</strong> [[\\sin(53.13^\\circ)\\approx0.8]].",
          "<strong>اضرب واقسم.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ]
      },
      "sec-same": {
        "h2": "صيغتان تعتمدان على الزاوية لمثلث قائم واحد",
        "blocks": [
          { "kind": "p", "text": "يحسب الوضعان مساحة الجسم الهندسي نفسه، لذا يجب أن يتفقا. بالنسبة للوضع 1، [[K=bc\\sin(A)/2]]، وبما أن [[\\sin(A)=a/c]] للمثلث القائم الصحيح، فإن [[bc\\sin(A)=ab]]. وبالنسبة للوضع 2، [[K=ac\\sin(B)/2]]، وبما أن [[\\sin(B)=b/c]]، فإن [[ac\\sin(B)=ab]]. تتبسط الصيغتان إلى [[[\\boxed{K=\\frac{ab}{2}}]]]، صيغة الضلعين المألوفة. الوضعان طريقا إدخال مختلفان لكمية واحدة." },
          { "kind": "p", "text": "قد تُدخل قياسات الزوايا المقربة فروقًا عددية صغيرة بين الوضعين، لأن [[36.87^\\circ]] ليست إلا تقريبًا للقيمة الحقيقية [[36.8699^\\circ]]. فرق بضعة أجزاء من المئة هو أثر تقريب، وليس اختلافًا بين الصيغتين." }
        ],
        "table": {
          "headers": ["الطريقة", "المدخلات", "النتيجة"],
          "rows": [
            ["صيغة الضلعين القائمين", "[[a=3,\\;b=4]]", "6 وحدات مربعة"],
            ["الوضع 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "6 تقريبًا"],
            ["الوضع 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "6 تقريبًا"]
          ]
        },
        "imgAlt": "المثلث 3-4-5 نفسه محلولًا بصيغتي الوضع 1 والوضع 2، وكلتاهما تعطي المساحة 6",
        "figcaption": "زاويتان محصورتان وصيغتان متكافئتان ومساحة مثلث واحدة."
      },
      "sec-howto": {
        "h2": "كيفية استخدام حاسبة مساحة المثلث القائم الزاوية من زاوية",
        "blocks": [
          { "kind": "p", "text": "يتبع هذا الشرح واجهة الحاسبة الفعلية في هذه الصفحة خطوة بخطوة." }
        ],
        "steps": [
          "<strong>حدد القياسات المعروفة أصلًا.</strong> تأكد من أن لديك ضلعًا قائمًا واحدًا والوتر وزاوية حادة من المثلث نفسه.",
          "<strong>اختر الوضع الصحيح.</strong> اختر الوضع 1 للضلع [[b]] والوتر [[c]] والزاوية [[A]]؛ واختر الوضع 2 للضلع [[a]] والوتر [[c]] والزاوية [[B]].",
          "<strong>تأكد من أي زاوية حادة تُقاس.</strong> يجب أن تكون الزاوية إحدى الزاويتين الحادتين، لا الزاوية القائمة.",
          "<strong>حدد الضلع القائم المقابل.</strong> يجب أن يلامس الضلع الزاوية المقاسة؛ راجع تعريفي المجاور والمقابل أعلاه عند الشك.",
          "<strong>أدخل طول الضلع القائم.</strong> اكتب الضلع المقاس في حقل الضلع للوضع المختار.",
          "<strong>أدخل طول الوتر.</strong> اكتبه في حقل الوتر؛ ويجب أن يكون أطول الطولين.",
          "<strong>اختر وحدات قياس متوافقة.</strong> يجب أن يستخدم الطولان الوحدة نفسها قبل الحساب.",
          "<strong>أدخل الزاوية الحادة بالدرجات.</strong> تتوقع الحاسبة الدرجات لا الراديان.",
          "<strong>تأكد من أن الزاوية بين [[0^\\circ]] و[[90^\\circ]] حصرًا.</strong> القيم الحدية تصف أشكالًا منحلة لا مثلثات.",
          "<strong>تأكد من أن الوتر أطول من الضلع القائم.</strong> فالضلع المساوي للوتر أو الأطول منه لا يمكن أن ينتمي إلى مثلث قائم.",
          "<strong>تحقق من أن الضلع والوتر والزاوية تصف المثلث القائم نفسه.</strong> توضح اختبارات الاتساق في قسم التحقق الكيفية.",
          "<strong>انقر على حساب المساحة.</strong> تظهر النتيجة مع خطوات الحل معروضة.",
          "<strong>راجع النتيجة وخطوات الحل.</strong> تتبع كل تعويض للتأكد من استخدام المدخلات المقصودة.",
          "<strong>فسّر النتيجة بوحدات مربعة.</strong> وحدة المساحة هي مربع وحدة الطول المختارة.",
          "<strong>استخدم إعادة التعيين لمسح الحساب السابق.</strong> فهذا يفرغ كل الحقول قبل إدخال المثلث التالي."
        ],
        "closingParagraphs": [
          "لاحظ أن كل وضع يطلب ضلعًا قائمًا مختلفًا وزاوية مختلفة. الوضعان متميزان لأن إقران الزاوية المحصورة مختلف، لا لأن أحدهما اختصار للآخر."
        ]
      },
      "sec-foundations": {
        "h2": "أمثلة خطوة بخطوة لمساحة المثلث القائم الزاوية من زاوية",
        "blocks": [
          { "kind": "p", "text": "تبني أربعة أمثلة الطريقة على مثلثات مألوفة، من الثلاثية 3-4-5 إلى حالات الزوايا الخاصة." },
          { "kind": "h3", "text": "المثال 1: مثلث 3-4-5 باستخدام الزاوية A" },
          { "kind": "p", "text": "بمعرفة [[b=4]] و[[c=5]] و[[A\\approx36.87^\\circ]]، استخدم [[K=bc\\sin(A)/2]]. ثم [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]] و[[K\\approx(20\\times0.6)/2]]، فيكون [[[\\boxed{K\\approx6}]]]. المساحة 6 وحدات مربعة لأن المثلث يحصر ستة مربعات وحدة من السطح المستوي؛ وبالزاوية ذات الدقة الكاملة تكون القيمة 6 بالضبط." },
          { "kind": "h3", "text": "المثال 2: المثلث نفسه باستخدام الزاوية B" },
          { "kind": "p", "text": "بمعرفة [[a=3]] و[[c=5]] و[[B\\approx53.13^\\circ]]، استخدم [[K=ac\\sin(B)/2]]. ثم [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]] و[[K\\approx(15\\times0.8)/2]]، فيكون [[[\\boxed{K\\approx6}]]]. تطابق النتيجة المثال 1 لأن المثالين يصفان المثلث نفسه؛ فالزاويتان منظران متتامان لشكل واحد." },
          { "kind": "h3", "text": "المثال 3: مثلث 30-60-90" },
          { "kind": "p", "text": "خذ [[c=10]] و[[A=30^\\circ]]. يتبع الضلع من [[b=c\\cos(30^\\circ)=5\\sqrt{3}]]. ثم [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]]، وبما أن [[\\sin(30^\\circ)=1/2]]، فيكون [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]]. قيم الزوايا الخاصة مثل [[\\sin(30^\\circ)]] و[[\\cos(30^\\circ)]] تعطي صورًا دقيقة قبل أي تقريب عشري، ولهذا تفيد هذه المثلثات في فحص الحاسبة يدويًا." },
          { "kind": "h3", "text": "المثال 4: مثلث 45-45-90" },
          { "kind": "p", "text": "بمعرفة [[c=10]] و[[A=45^\\circ]]، يتساوى الضلعان: [[a=b=5\\sqrt{2}]]. ثم [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]]، وبما أن [[\\sin(45^\\circ)=\\sqrt{2}/2]]، يتبسط حاصل الضرب إلى [[[\\boxed{K=25}]]]. هذا مثلث قائم متساوي الساقين، وكما سيُبين لاحقًا، له أيضًا أكبر مساحة ممكنة لمثلث قائم وتره 10 وحدات." }
        ]
      },
      "sec-applications": {
        "h2": "تطبيقات واقعية لمساحة المثلث القائم الزاوية من زاوية",
        "blocks": [
          { "kind": "p", "text": "اثنتا عشرة حالة محلولة بالكامل، ست لكل وضع من وضعي الحاسبة. يذكر كل مثال القياسات ويختار الوضع ويطبق الصيغة ويفسر الإجابة. تُعرض قيم الزوايا لمنزلتين عشريتين بينما يحافظ الحساب على الدقة الكاملة تحته." },
          { "kind": "h3", "text": "المثال العملي 1: جملون سقف مثلث" },
          { "kind": "p", "text": "مقطع جملون سقف قائم مثلث مبسط له ضلع مجاور [[b=4\\text{ m}]] ووتر [[c=5\\text{ m}]] وزاوية محصورة [[A\\approx36.87^\\circ]]. استخدم الوضع 1: [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]]، فيكون [[[\\boxed{K\\approx6\\text{ m}^2}]]]. وهي مساحة المقطع المستوي لا سطح السقف الكلي. تحقق: [[K=(3\\times4)/2=6]]." },
          { "kind": "h3", "text": "المثال العملي 2: لوح جانبي لمنحدر مثلث" },
          { "kind": "p", "text": "لوح جانبي لمنحدر قائم مثلث له [[b=2.4\\text{ m}]] و[[c=2.5\\text{ m}]] و[[A\\approx16.26^\\circ]]. الضلع المقابل الكامن 0.7 م، فيكون [[\\sin(A)=0.7/2.5=0.28]]. استخدم الوضع 1: [[K=(2.4\\times2.5\\times0.28)/2]]، فيكون [[[\\boxed{K\\approx0.84\\text{ m}^2}]]]. وهي مساحة اللوح الجانبي لا سطح المنحدر المائل. تحقق: [[K=(0.7\\times2.4)/2=0.84]]." },
          { "kind": "h3", "text": "المثال العملي 3: شراع مثلث" },
          { "kind": "p", "text": "مقطع شراع قائم مثلث مستوٍ له [[b=12\\text{ ft}]] و[[c=13\\text{ ft}]] و[[A\\approx22.62^\\circ]]. الضلع المقابل 5 قدم، فيكون [[\\sin(A)=5/13]]. استخدم الوضع 1: [[K=(12\\times13\\times(5/13))/2]]، فيكون [[[\\boxed{K=30\\text{ ft}^2}]]]. مساحة هندسية مستوية قبل الدرزات أو الهدر. تحقق: [[K=(5\\times12)/2=30]]." },
          { "kind": "h3", "text": "المثال العملي 4: مقطع أرض قائم مثلث" },
          { "kind": "p", "text": "يصف رسم مساحي قطعة أرض قائمة مثلثة حيث [[b=40\\text{ m}]] و[[c=50\\text{ m}]] و[[A\\approx36.87^\\circ]]. وبما أن [[\\sin(A)=30/50=0.6]]، يعطي الوضع 1 [[K=(40\\times50\\times0.6)/2]]، فيكون [[[\\boxed{K=600\\text{ m}^2}]]]. وهي مساحة القطعة المستوية في نموذج مستوٍ. تحقق: [[K=(30\\times40)/2=600]]." },
          { "kind": "h3", "text": "المثال العملي 5: لوح دعم فولاذي" },
          { "kind": "p", "text": "لوح فولاذي مثلث مستوٍ له [[b=1.5\\text{ m}]] و[[c=1.7\\text{ m}]] و[[A\\approx28.07^\\circ]]. الضلع المقابل 0.8 م، فيكون [[\\sin(A)=0.8/1.7]]. استخدم الوضع 1: [[K=(1.5\\times1.7\\times(0.8/1.7))/2]]، فيكون [[[\\boxed{K=0.6\\text{ m}^2}]]]. مساحة مستوية فقط لا قدرة تحمل. تحقق: [[K=(0.8\\times1.5)/2=0.6]]." },
          { "kind": "h3", "text": "المثال العملي 6: مقطع جانبي لسلم" },
          { "kind": "p", "text": "لوح جانبي لسلم مبسط له ضلع أفقي [[b=3.2\\text{ m}]] ووتر [[c=4\\text{ m}]] و[[A\\approx36.87^\\circ]]. مع [[\\sin(A)=0.6]]، يعطي الوضع 1 [[K=(3.2\\times4\\times0.6)/2]]، فيكون [[[\\boxed{K=3.84\\text{ m}^2}]]]. وهو المقطع الجانبي لا مساحة الدرجات. تحقق: مع الضلع الآخر 2.4 م، [[K=(2.4\\times3.2)/2=3.84]]." },
          { "kind": "h3", "text": "المثال العملي 7: نافذة زجاجية مثلثة" },
          { "kind": "p", "text": "نافذة قائمة مثلثة لها ضلع [[a=0.6\\text{ m}]] ووتر [[c=1\\text{ m}]] وزاوية محصورة [[B\\approx53.13^\\circ]]. مع [[\\sin(B)=0.8]]، يعطي الوضع 2 [[K=(0.6\\times1\\times0.8)/2]]، فيكون [[[\\boxed{K=0.24\\text{ m}^2}]]]. مساحة الزجاج قبل بدلات الإطار. تحقق: [[K=(0.6\\times0.8)/2=0.24]]." },
          { "kind": "h3", "text": "المثال العملي 8: مظلة مثلثة" },
          { "kind": "p", "text": "مقطع مظلة قائم مثلث مستوٍ له [[a=1.2\\text{ m}]] و[[c=2\\text{ m}]] و[[B\\approx53.13^\\circ]]. استخدم الوضع 2: [[K=(1.2\\times2\\times0.8)/2]]، فيكون [[[\\boxed{K=0.96\\text{ m}^2}]]]. تحقق: [[K=(1.2\\times1.6)/2=0.96]]." },
          { "kind": "h3", "text": "المثال العملي 9: نموذج قص خشب رقائقي" },
          { "kind": "p", "text": "قطعة خشب رقائقي قائمة مثلثة لها [[a=0.9\\text{ m}]] و[[c=1.5\\text{ m}]] و[[B\\approx53.13^\\circ]]. استخدم الوضع 2: [[K=(0.9\\times1.5\\times0.8)/2]]، فيكون [[[\\boxed{K=0.54\\text{ m}^2}]]]. مساحة الخامة الصالحة دون فضلات القص. تحقق: [[K=(0.9\\times1.2)/2=0.54]]." },
          { "kind": "h3", "text": "المثال العملي 10: مسح حقل مثلث" },
          { "kind": "p", "text": "يعطي قياس حقل مثلث مبسط [[a=7\\text{ m}]] و[[c=25\\text{ m}]] و[[B\\approx73.74^\\circ]]. الضلع الآخر 24 م، فيكون [[\\sin(B)=24/25=0.96]]. استخدم الوضع 2: [[K=(7\\times25\\times0.96)/2]]، فيكون [[[\\boxed{K=84\\text{ m}^2}]]]. وهي مساحة المقطع المستوية. تحقق: [[K=(7\\times24)/2=84]]." },
          { "kind": "h3", "text": "المثال العملي 11: لوح طائرة ورقية مثلث" },
          { "kind": "p", "text": "لوح طائرة ورقية أو قماش قائم مثلث له [[a=20\\text{ cm}]] و[[c=25\\text{ cm}]] و[[B\\approx36.87^\\circ]]. وبما أن [[\\sin(B)=15/25=0.6]]، يعطي الوضع 2 [[K=(20\\times25\\times0.6)/2]]، فيكون [[[\\boxed{K=150\\text{ cm}^2}]]]. سنتيمترات مربعة تطابق المدخلات. تحقق: [[K=(20\\times15)/2=150]]." },
          { "kind": "h3", "text": "المثال العملي 12: لوح جانبي لتركيب شمسي" },
          { "kind": "p", "text": "لوح جانبي داعم قائم مثلث مستوٍ له [[a=1.8\\text{ m}]] و[[c=3\\text{ m}]] وزاوية محصورة [[B\\approx53.13^\\circ]]. مع [[\\sin(B)=0.8]]، يعطي الوضع 2 [[K=(1.8\\times3\\times0.8)/2]]، فيكون [[[\\boxed{K=2.16\\text{ m}^2}]]]. مساحة اللوح لا الناتج الكهربائي أو السعة. تحقق: [[K=(1.8\\times2.4)/2=2.16]]." }
        ],
        "table": {
          "headers": ["الحالة", "الوضع", "الضلع / الوتر", "الزاوية", "المساحة", "التفسير"],
          "rows": [
            ["جملون السقف", "1", "4 م / 5 م", "[[A\\approx36.87^\\circ]]", "6 م²", "مساحة المقطع المستوي"],
            ["لوح جانبي لمنحدر", "1", "2.4 م / 2.5 م", "[[A\\approx16.26^\\circ]]", "0.84 م²", "لوح جانبي لا المنحدر"],
            ["شراع", "1", "12 قدم / 13 قدم", "[[A\\approx22.62^\\circ]]", "30 قدم²", "مساحة مستوية قبل الدرزات"],
            ["قطعة أرض", "1", "40 م / 50 م", "[[A\\approx36.87^\\circ]]", "600 م²", "مساحة القطعة المستوية"],
            ["لوح فولاذي", "1", "1.5 م / 1.7 م", "[[A\\approx28.07^\\circ]]", "0.6 م²", "المساحة المستوية فقط"],
            ["مقطع جانبي لسلم", "1", "3.2 م / 4 م", "[[A\\approx36.87^\\circ]]", "3.84 م²", "مقطع جانبي لا الدرجات"],
            ["نافذة زجاجية", "2", "0.6 م / 1 م", "[[B\\approx53.13^\\circ]]", "0.24 م²", "قبل بدلات الإطار"],
            ["مظلة", "2", "1.2 م / 2 م", "[[B\\approx53.13^\\circ]]", "0.96 م²", "مساحة المقطع المثلث"],
            ["قطعة خشب رقائقي", "2", "0.9 م / 1.5 م", "[[B\\approx53.13^\\circ]]", "0.54 م²", "المساحة الصالحة دون هدر"],
            ["مسح ميداني", "2", "7 م / 25 م", "[[B\\approx73.74^\\circ]]", "84 م²", "مساحة الحقل المستوية"],
            ["لوح طائرة ورقية", "2", "20 سم / 25 سم", "[[B\\approx36.87^\\circ]]", "150 سم²", "مساحة القماش"],
            ["لوح جانبي شمسي", "2", "1.8 م / 3 م", "[[B\\approx53.13^\\circ]]", "2.16 م²", "لوح دعم لا الناتج"]
          ]
        },
        "imgAlt": "أربعة حسابات محلولة لمساحة مثلث قائم: جملون سقف ونافذة زجاجية ومسح حقل وشراع",
        "figcaption": "أربع من الحالات المحلولة أعلاه، كل منها بمثلثه وزاويته المحصورة وصيغته ومساحته المتحقق منها."
      },
      "sec-consistency": {
        "h2": "كيفية التحقق مما إذا كانت أطوال الأضلاع والزاوية تشكل مثلثًا قائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "يحمل الضلع القائم والوتر والزاوية الحادة معلومات أكثر مما يحتاجه المثلث القائم: فاثنان من الثلاثة يحددان الثالث، لذا يجب أن تتفق الثلاثة. تؤكد الفحوص أدناه أن العدد المحسوب يصف مثلثًا قائم الزاوية." },
          { "kind": "h3", "text": "التحقق من الوضع 1" },
          { "kind": "p", "text": "بالنسبة للوضع 1 علاقة الاتساق هي [[\\cos(A)=b/c]]، أي [[[\\boxed{b=c\\cos(A)}]]]. مع [[b=4]] و[[c=5]]، يعطي [[\\cos(A)=0.8]] أن [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. زاوية عشوائية مثل [[60^\\circ]] لن تصف المثلث القائم نفسه بهذه الأطوال: [[5\\cos(60^\\circ)=2.5\\neq4]]، فتكون المدخلات الثلاثة غير متسقة." },
          { "kind": "h3", "text": "التحقق من الوضع 2" },
          { "kind": "p", "text": "بالنسبة للوضع 2 العلاقة هي [[\\cos(B)=a/c]]، أي [[[\\boxed{a=c\\cos(B)}]]]. مع [[a=3]] و[[c=5]]، [[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]. يجب أن تقابل الزاوية المختارة القياسات الفعلية؛ فضلع 3 مع وتر 5 لا يلتقيان عند زاوية محصورة [[70^\\circ]] مثلًا." },
          { "kind": "h3", "text": "لماذا يمكن للصيغة العامة للمساحة أن ترجع عددًا رغم ذلك" },
          { "kind": "p", "text": "تحسب الصيغة [[K=\\frac12xy\\sin(\\theta)]] مساحة مثلث عام يحدده ضلعان وزاويتهما المحصورة. تركيبة زاوية وضلع غير متوافقة ترجع عددًا رغم ذلك، لكن المثلث الناتج ليس قائم الزاوية: بل هو مثلث آخر يتشارك تلك المدخلات الثلاثة مصادفة. النتيجة الحسابية وحدها لا تثبت أن المدخلات تصف مثلثًا قائمًا صحيحًا؛ ففحص جيب التمام أعلاه هو من يقوم بهذا العمل." },
          { "kind": "h3", "text": "كيفية التعامل مع قياسات الزوايا المقربة" },
          { "kind": "p", "text": "قد تكون زاوية مثل [[36.87^\\circ]] عرضًا مقربًا لحوالي [[36.8699^\\circ]]. يجب التمييز بين الفروق الصغيرة الناتجة عن تقريب العرض أو القياس وبين الهندسة غير المتسقة فعلًا: فهامش بضعة أجزاء من المئة من الدرجة هو تقريب، بينما عدم تطابق بعدة درجات يعني أن المدخلات متعارضة. لا يُدعى أي تسامح تحقق عددي للحاسبة نفسها؛ فالتمييز حكم يُبنى على القياسات المتاحة." }
        ]
      },
      "sec-alternatives": {
        "h2": "طرق بديلة لإيجاد مساحة المثلث القائم الزاوية باستخدام الزوايا",
        "blocks": [
          { "kind": "p", "text": "هذه بدائل رياضية لا أوضاع حاسبة إضافية؛ فهي تُظهر الهندسة نفسها بتركيبات مدخلات أخرى." },
          { "kind": "h3", "text": "استخدام الوتر وزاوية حادة واحدة" },
          { "kind": "p", "text": "بالنسبة للمثلث القائم الصحيح، [[a=c\\sin(A)]] و[[b=c\\cos(A)]]. يعطي التعويض في [[K=ab/2]] أن [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]]. ومع متطابقة ضعف الزاوية [[\\sin(2A)=2\\sin(A)\\cos(A)]]، تصبح [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]. يحدد الوتر وزاوية حادة واحدة المثلث تمامًا، فلا حاجة لقياس أي ضلع على الإطلاق." },
          { "kind": "h3", "text": "استخدام ضلع قائم وزاويته المجاورة" },
          { "kind": "p", "text": "إذا عُرف الضلع [[b]] والزاوية [[A]]، فإن [[a=b\\tan(A)]]، ويكون [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]. الإقران مهم: يجب أن يكون [[b]] هو الضلع المجاور للزاوية [[A]] حتى يستعيد الظل الضلع المقابل." },
          { "kind": "h3", "text": "استخدام الضلع a والزاوية B" },
          { "kind": "p", "text": "على غرار الحالة السابقة للزاوية [[B]]: [[b=a\\tan(B)]]، فيكون [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]. الضلع [[a]] مجاور للزاوية [[B]]، وهذا بالضبط سبب استعادة الظل للضلع المقابل مجددًا." },
          { "kind": "h3", "text": "أي طريقة هي الأبسط؟" },
          { "kind": "p", "text": "أفضل صيغة هي التي تطابق القياسات المتاحة. إذا كان الضلعان معروفين، استخدم [[K=ab/2]] وتجاوز حساب المثلثات. وإذا عُرف ضلع قائم والوتر والزاوية المحصورة، فإن وضعي الحاسبة هما الطريق المباشر. صور الظل وضعف الزاوية مفيدة للحسابات اليدوية بالزوايا الخاصة، لكن إضافة خطوات لا تتطلبها المدخلات لا تضيف إلا مواضع تختبئ فيها الأخطاء." }
        ]
      },
      "sec-angle-effect": {
        "h2": "كيف تؤثر الزاوية الحادة على مساحة المثلث القائم الزاوية؟",
        "blocks": [
          { "kind": "p", "text": "يزداد الجيب كلما زادت الزاوية الحادة، فتبدو الزاوية الأكبر واعدة بمساحة أكبر. وهذا لا يصح إلا عندما تبقى الكميات الأخرى ثابتة، وفي المثلث القائم لا يمكن للأضلاع والزاوية أن تتغير بشكل مستقل." },
          { "kind": "h3", "text": "وتر ثابت وزاوية متغيرة" },
          { "kind": "p", "text": "لوتر ثابت، يمكن كتابة المساحة [[K=\\frac{c^2\\sin(2A)}{4}]]. يرتفع العامل [[\\sin(2A)]] كلما تحركت [[A]] من قرب [[0^\\circ]] نحو [[45^\\circ]]، ثم ينخفض كلما اقتربت [[A]] من [[90^\\circ]]. لذا تزداد المساحة على النصف الأول من المدى الحاد وتنقص على النصف الثاني. النصفان صورتان مرآويتان عبر علاقة الزاويتين المتتامتين [[A+B=90^\\circ]]: فتبديل الزاويتين يبدل الضلعين ويُبقي المساحة دون تغيير." },
          { "kind": "h3", "text": "المساحة القصوى لوتر ثابت" },
          { "kind": "p", "text": "بما أن [[\\sin(2A)\\leq1]]، فإن أكبر مساحة ممكنة هي [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]، وتتحقق عندما [[A=B=45^\\circ]]. وعند [[c=10]] تكون المساحة القصوى [[[\\boxed{K_{\\max}=25\\text{ square units}}]]]. هذا هو المثلث القائم متساوي الساقين في المثال 4: فتساوي الضلعين يجعل حاصل ضرب الضلعين، ومن ثم المساحة، أكبر ما يسمح به الوتر الثابت." },
          { "kind": "h3", "text": "لماذا لا تزداد المساحة مع الزاوية ببساطة في كل حالة" },
          { "kind": "p", "text": "أي ادعاء عن زوايا متزايدة لا معنى له دون تسمية ما يُثبت. مع وتر ثابت ترتفع العلاقة ثم تهبط؛ ومع ضلع ثابت تكون العلاقة مختلفة مجددًا. معاملة المساحة كدالة متزايدة بسيطة للزاوية تبسيط مفرط شائع، وهذا القسم موجود لإبعاده عن عملك." }
        ]
      },
      "sec-units": {
        "h2": "وحدات المساحة والدرجات والتقريب",
        "blocks": [
          { "kind": "h3", "text": "أمتار مربعة" },
          { "kind": "p", "text": "إذا كانت المدخلات بالأمتار، خرجت المساحة بأمتار مربعة: [[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]. ضرب طولين يعطي دائمًا وحدة مربعة أيًّا كان نظام الوحدات." },
          { "kind": "h3", "text": "سنتيمترات مربعة" },
          { "kind": "p", "text": "مدخلات السنتيمتر تعطي مساحات بالسنتيمتر المربع، كما في مثال لوح الطائرة الورقية بنتيجته [[150\\text{ cm}^2]]. تحويل الوحدات المربعة يربّع عامل التحويل الخطي: 1 م² = 10,000 سم² لا 100." },
          { "kind": "h3", "text": "أقدام مربعة" },
          { "kind": "p", "text": "مدخلات القدم تعطي مساحات بالقدم المربع، كما في مثال الشراع بنتيجته [[30\\text{ ft}^2]]. حوّل كل المدخلات إلى وحدة طول واحدة قبل الحساب؛ فالحاسبة لا تخلط الأمتار بالأقدام." },
          { "kind": "h3", "text": "الدرجات مقابل الراديان" },
          { "kind": "p", "text": "تتوقع الحاسبة الزوايا بالدرجات. للتحويل استخدم [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]. فمثلًا [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. إدخال قيمة بالراديان حيث تُتوقع الدرجات من أكثر الأخطاء إضرارًا، لأن جيب عدد راديان صغير يبدو معقولًا وهو خاطئ تمامًا." },
          { "kind": "h3", "text": "لماذا الجيب بلا وحدات" },
          { "kind": "p", "text": "الجيب نسبة طولين، فتتلاشى الوحدات وتبقى القيمة بلا أبعاد. ضرب طولين في عدد بلا أبعاد يُبقي بالضبط الوحدات المربعة التي تحتاجها المساحة. ولهذا أيضًا تكون قيمة الجيب نفسها سواء قِيست الأضلاع بالأمتار أم بالأقدام، ما دام شكل المثلث واحدًا." },
          { "kind": "h3", "text": "لماذا يهم التقريب الوسيط" },
          { "kind": "p", "text": "تقريب الزاوية أو قيمة الجيب مبكرًا قد يزيح المساحة النهائية. حافظ على الدقة الكاملة خلال الحساب وقرّب النتيجة المُبلغة فقط، بدقة تدعمها قياسات الإدخال. قياس معطى برقمين معنويين لا يستحق إجابة بستة أرقام عشرية." }
        ]
      },
      "sec-mistakes": {
        "h2": "أخطاء شائعة عند حساب مساحة المثلث القائم الزاوية من زاوية",
        "blocks": [
          { "kind": "h3", "text": "مثال الخطأ مقابل الصواب" },
          { "kind": "p", "text": "خذ المثلث 3-4-5 حيث [[b=4]] و[[c=5]] و[[A\\approx36.87^\\circ]]. الصواب: [[K=(4\\times5\\times\\sin(A))/2\\approx6]]. وإذا عُوّضت الزاوية الخاطئة، [[K=(4\\times5\\times\\sin(B))/2\\approx8]] لا 6. يستخدم الخطأ الزاوية المحصورة غير الصحيحة للضلعين [[b]] و[[c]]، و8 هي ببساطة مساحة المثلث الخاطئ." }
        ],
        "steps": [
          "<strong>استخدام الزاوية B مع الوضع 1 دون تغيير الأضلاع.</strong> يقرن الوضع 1 [[b]] و[[c]] بالزاوية [[A]]؛ فتغذية [[B]] تحسب مساحة مثلث مختلف.",
          "<strong>استخدام الزاوية A مع الوضع 2.</strong> يقرن الوضع 2 [[a]] و[[c]] بالزاوية [[B]]. تحقق من منتقي الوضع قبل إدخال الأرقام.",
          "<strong>الخلط بين المجاور والمقابل.</strong> تعتمد هاتان التسميتان على الزاوية المرجعية: ثبّت الزاوية أولًا ثم سمِّ الضلعين بالنسبة إليها.",
          "<strong>إدخال الوتر في حقل الضلع القائم.</strong> يجب أن يكون الضلع أقصر من [[c]]؛ فتبديلهما يكسر كل فحص اتساق.",
          "<strong>استخدام الزاوية المحصورة الخاطئة.</strong> يجب أن تقع الزاوية بين الضلعين المدخلين وإلا كان إسقاط الجيب خاطئًا.",
          "<strong>نسيان دالة الجيب.</strong> [[bc/2]] وحده يضرب طولين غير متعامدين؛ فالنتيجة ليست مساحة المثلث.",
          "<strong>نسيان القسمة على اثنين.</strong> حاصل الضرب غير المنصّف هو مساحة متوازي الأضلاع لا المثلث.",
          "<strong>إدخال الراديان حيث تُتوقع الدرجات.</strong> [[\\sin(0.64)]] و[[\\sin(36.87^\\circ)]] عددان مختلفان تمامًا.",
          "<strong>إدخال 0 أو 90 درجة.</strong> لا يصف أي منهما مثلثًا قائمًا غير منحل بهذه المدخلات.",
          "<strong>إدخال أطوال سالبة أو صفرية.</strong> الأطوال موجبة؛ وما عداها لا معنى هندسي له.",
          "<strong>إدخال ضلع أطول من الوتر.</strong> الوتر هو دائمًا أطول ضلع، فهذا الإدخال يناقض الإعداد.",
          "<strong>استخدام مدخلات غير متسقة.</strong> تحقق من [[b=c\\cos(A)]] أو [[a=c\\cos(B)]]؛ فالعدد الناتج عن مدخلات غير متطابقة لا ينتمي إلى أي مثلث قائم.",
          "<strong>خلط الوحدات.</strong> حوّل كل الأطوال إلى وحدة واحدة أولًا؛ فالأمتار مع السنتيمترات تُكبّر الإجابة 100 مرة.",
          "<strong>الإبلاغ بوحدات خطية.</strong> وحدة المساحة هي مربع وحدة الطول: م² لا م.",
          "<strong>تقريب الزاوية مبكرًا.</strong> قرّب الإجابة النهائية فقط؛ فالتقريب المبكر يزيح الجيب.",
          "<strong>معاملة الوضعين كقابلين للتبديل.</strong> كل وضع صيغته الخاصة بعقد إدخاله الخاص."
        ]
      },
      "sec-verify": {
        "h2": "كيفية التحقق مما إذا كانت المساحة المحسوبة صحيحة",
        "blocks": [
          { "kind": "h3", "text": "الطريقة 1: فحص نظرية فيثاغورس" },
          { "kind": "p", "text": "للمثلث القائم الصحيح، [[a^2+b^2=c^2]]. وبالنسبة للمثلث 3-4-5، [[9+16=25]]. الفشل هنا يعني أن مدخلات الأضلاع لا تصف أي مثلث قائم على الإطلاق." },
          { "kind": "h3", "text": "الطريقة 2: فحص صيغة الضلعين" },
          { "kind": "p", "text": "احسب [[K=ab/2]] مستقلًا. عندما [[a=3]] و[[b=4]]، [[K=6]]. اتفاق ذلك مع النتيجة المعتمدة على الزاوية يؤكد الحساب كله." },
          { "kind": "h3", "text": "الطريقة 3: فحص الزاوية المتممة" },
          { "kind": "p", "text": "تحقق من [[A+B=90^\\circ]]. عندما [[A\\approx36.87^\\circ]]، تكون [[B\\approx53.13^\\circ]]. يجب أن يتحقق المجموع لتكون الزاوية المدخلة زاوية حادة حقيقية من المثلث." },
          { "kind": "h3", "text": "الطريقة 4: فحص علاقة الجيب" },
          { "kind": "p", "text": "للوضع 1، [[\\sin(A)=a/c]]؛ وللوضع 2، [[\\sin(B)=b/c]]. في المثلث 3-4-5، [[\\sin(36.87^\\circ)\\approx3/5]] و[[\\sin(53.13^\\circ)\\approx4/5]]. هذه هي العلاقة نفسها التي تستخدمها الصيغة، مفحوصة في الاتجاه المعاكس." },
          { "kind": "h3", "text": "الطريقة 5: التحقق من اتساق المدخلات" },
          { "kind": "p", "text": "للوضع 1، [[b\\approx c\\cos(A)]]؛ وللوضع 2، [[a\\approx c\\cos(B)]]. رمز التقريب مناسب عندما يكون قياس الزاوية قد قُرّب." },
          { "kind": "h3", "text": "الطريقة 6: فحص المساحة القصوى" },
          { "kind": "p", "text": "لوتر ثابت، [[K\\leq c^2/4]]. مع [[c=5]]، لا تتجاوز أي مساحة صحيحة 6.25 وحدة مربعة. المساحة المحسوبة فوق ذلك الحد تشير إلى خطأ إدخال فورًا." },
          { "kind": "h3", "text": "الطريقة 7: فحص الوحدات المربعة" },
          { "kind": "p", "text": "تأكد من التعبير عن النتيجة بمربع وحدة طول الإدخال. فهذا يكشف العادة الشائعة بشكل مفاجئ في الإبلاغ عن عدد المساحة بوحدة الطول دون تغيير." }
        ]
      },
      "sec-conclusion": {
        "h2": "الزاوية والضلع والوتر هي كل ما تحتاجه",
        "blocks": [
          { "kind": "p", "text": "طريقة المساحة المعتمدة على الزاوية هي قاعدة القاعدة-الارتفاع مع ارتفاع أُعيد بناؤه من الوتر. فمتى أُقترنت الزاوية المحصورة بالأضلاع الصحيحة، زوّد الجيب الضلع العمودي، وأصبحت المساحة على بعد تعويض واحد. الوضعان بابان إلى الغرفة نفسها: يدخل الوضع 1 عبر الزاوية A، والوضع 2 عبر الزاوية B، وكلاهما يصل إلى المساحة نفسها." },
          { "kind": "p", "text": "الانضباط الذي يجعل الطريقة جديرة بالثقة هو الاتساق: تحقق من اتفاق الضلع والوتر والزاوية عبر علاقة جيب التمام، وتحقق من المساحة مقابل صيغة الضلعين عندما يمكن استعادة الضلع الثاني، وحافظ على إقران الزاوية بالضلع دقيقًا. وبهذه الفحوص تكسب الإجابة ثقتها." },
          { "kind": "p", "text": "استخدم حاسبة هذه الصفحة كلما كانت البيانات المقاسة ضلعًا قائمًا والوتر والزاوية المحصورة، والجأ إلى حاسبات الأضلاع أو الارتفاع أو نصف المحيط عندما تشير القياسات إلى موضع آخر." }
        ]
      }
    },
    "faqs": [
      {
        "question": "كيف تجد مساحة مثلث قائم الزاوية باستخدام زاوية؟",
        "answer": "استخدم K = bc sin(A)/2 عندما تعرف الضلع b والوتر c والزاوية المحصورة A؛ واستخدم K = ac sin(B)/2 عندما تعرف الضلع a والوتر c والزاوية المحصورة B. يحوّل الجيب الوتر إلى الارتفاع العمودي على الضلع المختار، والقسمة على اثنين تعطي المساحة بوحدات مربعة."
      },
      {
        "question": "ما هي صيغة المساحة باستخدام الضلع b والوتر c والزاوية A؟",
        "answer": "الصيغة هي K = bc sin(A)/2. الضلع b هو الضلع القائم المجاور للزاوية A، وc هو الوتر، وA هي الزاوية الحادة بينهما. عندما b = 4 وc = 5 وA حوالي 36.87 درجة، فإن sin(A) حوالي 0.6، وبذلك تكون المساحة حوالي 6 وحدات مربعة."
      },
      {
        "question": "ما هي صيغة المساحة باستخدام الضلع a والوتر c والزاوية B؟",
        "answer": "الصيغة هي K = ac sin(B)/2. الضلع a هو الضلع القائم المجاور للزاوية B، وc هو الوتر، وB هي الزاوية الحادة بينهما. عندما a = 3 وc = 5 وB حوالي 53.13 درجة، فإن sin(B) حوالي 0.8، وبذلك تكون المساحة حوالي 6 وحدات مربعة، وهو المثلث نفسه في مثال الوضع 1."
      },
      {
        "question": "لماذا تستخدم صيغة المساحة الجيب؟",
        "answer": "يبني الجيب الارتفاع العمودي من الوتر. مع القاعدة b والضلع c اللذين يلتقيان عند الزاوية A، يكون الارتفاع هو c sin(A)، وبذلك K = bc sin(A)/2. بدون حد الجيب ستضرب الصيغة طولين غير متعامدين وتجيب عن سؤال هندسي مختلف تمامًا في المثلث."
      },
      {
        "question": "ما هي الزاوية المحصورة؟",
        "answer": "الزاوية المحصورة تقع بين ضلعين محددين. الزاوية A محصورة بين الضلعين b وc؛ والزاوية B محصورة بين الضلعين a وc. صيغة المساحة بالجيب تعمل فقط مع الزاوية المحصورة بين الضلعين المستخدمين، لأن الصيغة تقرأ الارتفاع العمودي من تلك الزاوية المحددة."
      },
      {
        "question": "هل يمكنني حساب المساحة دون معرفة الضلعين القائمين؟",
        "answer": "نعم. يعيد الوتر والزاوية المحصورة معًا بناء الضلع المفقود عبر الجيب، فلا حاجة لقياس الضلع الثاني على الإطلاق. وإذا كان الضلعان القائمان معروفين بدلًا من ذلك، فإن الصيغة الأبسط K = ab/2 هي الطريق المباشر ولا تحتاج إلى أي حساب مثلثات."
      },
      {
        "question": "لماذا يعطي وضعا الحاسبة المساحة نفسها؟",
        "answer": "يصف الوضعان مثلثًا واحدًا. بما أن sin(A) = a/c فإن bc sin(A) = ab؛ وبما أن sin(B) = b/c فإن ac sin(B) = ab. تتبسط الصيغتان إلى K = ab/2. والفروق الصغيرة الناتجة عن تقريب الزوايا المدخلة هي آثار تقريب، وليست اختلافًا بين الصيغتين."
      },
      {
        "question": "هل يمكنني استخدام أي زاوية حادة مع ضلع ووتر معطيين؟",
        "answer": "لا. يجب أن تتفق المدخلات الثلاثة: يتطلب الوضع 1 أن b = c cos(A) ويتطلب الوضع 2 أن a = c cos(B). أي زاوية حادة عشوائية مع أطوال الأضلاع نفسها تصف مثلثًا مختلفًا غير قائم الزاوية، والمساحة التي ترجعها الصيغة تخص ذلك المثلث."
      },
      {
        "question": "كيف يمكنني التحقق من المساحة باستخدام صيغة الضلعين؟",
        "answer": "استعد الضلع المفقود بنظرية فيثاغورس، ثم احسب K = ab/2. عندما b = 4 وc = 5، فإن a = جذر(25 - 16) = 3، وK = 12/2 = 6، وهو ما يطابق النتيجة المعتمدة على الزاوية. اتفاق الطريقتين المستقلتين يؤكد المدخلات والحسابات."
      },
      {
        "question": "هل يجب أن تكون الزاوية بالدرجات أم بالراديان؟",
        "answer": "تتوقع الحاسبة الزوايا بالدرجات. حوّل الراديان إلى درجات باستخدام الدرجات = الراديان مضروبًا في 180/pi؛ وpi/6 راديان تساوي 30 درجة. إدخال قيمة بالراديان حيث تُتوقع الدرجات يعطي قيمة جيب تبدو معقولة لكنها خاطئة تمامًا، فتحقق من وحدة الزاوية جيدًا قبل الحساب."
      },
      {
        "question": "ما هي المساحة القصوى لوتر معطى؟",
        "answer": "القصوى هي c مربع مقسومًا على 4، وتتحقق عندما تكون الزاويتان الحادتان 45 درجة، أي المثلث القائم متساوي الساقين. لوتر طوله 10 وحدات تكون المساحة القصوى 25 وحدة مربعة. وأي مساحة محسوبة فوق c مربع على 4 تشير إلى خطأ في الإدخال."
      },
      {
        "question": "متى يجب أن أستخدم حاسبة مساحة المثلث القائم الزاوية الرئيسية بدلًا من ذلك؟",
        "answer": "استخدم حاسبة المساحة الرئيسية عندما تتطابق قياساتك بشكل مباشر مع إحدى تركيبات مدخلاتها، مثل معرفة الضلعين القائمين معًا. واحتفظ بحاسبة الزاوية هذه للحالة التي صُممت لها خصيصًا: ضلع قائم واحد والوتر والزاوية الحادة المحصورة المقاسة معًا في إعداد القياس نفسه، فهي الخيار الأنسب هناك."
      }
    ],
    "faqHeading": "الأسئلة الشائعة",
    "relatedHeading": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
    "relatedItems": [
      "حاسبة مساحة المثلث القائم الزاوية",
      "حاسبة مساحة المثلث القائم الزاوية من الضلعين القائمين",
      "حاسبة مساحة المثلث القائم الزاوية من الارتفاع",
      "حاسبة مساحة المثلث القائم الزاوية من ضلع وزاوية",
      "حاسبة مساحة المثلث القائم الزاوية من نصف المحيط",
      "حاسبة ضلع المثلث القائم الزاوية من الجيب",
      "حاسبة زاوية المثلث القائم الزاوية من الجيب"
    ]
  }
};
