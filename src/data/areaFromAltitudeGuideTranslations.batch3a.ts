// Batch 3a: Indonesian (id) and Arabic (ar) translations for the Right Triangle Area From Altitude Guide (Page 17 of 45).
export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3A = {
  "id": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Menghitung Luas Segitiga Siku-Siku dari Tinggi",
      "sec-understand": "Memahami Sisi Miring dan Tinggi Segitiga Siku-Siku",
      "sec-formula": "Rumus Luas Segitiga Siku-Siku dari Tinggi",
      "sec-steps": "Contoh Perhitungan Langkah demi Langkah",
      "sec-howto": "Cara Menggunakan Kalkulator Luas dari Tinggi",
      "sec-examples": "Contoh Soal Luas dari Sisi Miring dan Tinggi",
      "sec-applications": "Penerapan dalam Kehidupan Nyata",
      "sec-equal": "Mengapa Kedua Rumus Luas Memberi Jawaban Sama",
      "sec-geomean": "Bagaimana Tinggi Membagi Segitiga Siku-Siku",
      "sec-max": "Tinggi Maksimum yang Mungkin",
      "sec-find-altitude": "Mencari Tinggi Jika Belum Diketahui",
      "sec-units": "Satuan Persegi dan Konversi",
      "sec-mistakes": "Kesalahan Umum",
      "sec-verify": "Cara Memverifikasi Jawaban Anda",
      "sec-compare": "Luas dari Tinggi vs. Luas dari Dua Sisi Siku-Siku",
      "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "sec-faq": "Tanya Jawab",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Menghitung Luas Segitiga Siku-Siku dari Tinggi",
        "blocks": [
          { "kind": "p", "text": "Misalkan sebuah segitiga siku-siku memiliki sisi miring 10 m, dan jarak tegak lurus dari sudut siku-siku ke sisi miring itu berukuran 4,8 m. Luasnya langsung diperoleh: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Segitiga itu menutupi 24 meter persegi permukaan datar." },
          { "kind": "p", "text": "Kalkulator ini ada tepat untuk situasi tersebut. Ketika Anda mengetahui sisi terpanjang segitiga siku-siku, yaitu sisi miring [[c]], dan tinggi tegak lurus dari titik sudut siku-siku ke sisi itu, [[h]], kedua sisi siku-siku tidak diperlukan. Sisi miring berfungsi sebagai alas, tinggi berfungsi sebagai tinggi tegak lurus yang bersesuaian, dan luas setiap segitiga adalah setengah hasil kali alas dan tinggi yang bersesuaian: [[K=ch/2]]." },
          { "kind": "p", "text": "Tinggi harus bertemu sisi miring pada sudut siku-siku; ruas garis miring yang tidak tegak lurus menghasilkan tinggi yang salah dan luas yang salah. Masukkan kedua ukuran dalam satuan panjang yang sama, dan kalkulator mengembalikan luas dalam satuan persegi yang bersesuaian, lengkap dengan setiap langkah substitusi yang ditampilkan." }
        ]
      },
      "sec-understand": {
        "h2": "Memahami Sisi Miring dan Tinggi Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Panduan ini menggunakan satu notasi yang konsisten di seluruh isinya: [[A]] dan [[B]] adalah dua sudut lancip, [[C=90^\\circ]] adalah sudut siku-siku, sisi [[a]] berhadapan dengan sudut [[A]], sisi [[b]] berhadapan dengan sudut [[B]], sisi [[c]] adalah sisi miring yang berhadapan dengan sudut [[C]], [[h]] adalah tinggi tegak lurus dari titik sudut [[C]] ke sisi miring yang bertemu di titik [[D]], [[p]] dan [[q]] adalah ruas-ruas sisi miring [[AD]] dan [[DB]], dan [[K]] adalah luas." },
          { "kind": "h3", "text": "Apa Itu Segitiga Siku-Siku?" },
          { "kind": "p", "text": "Segitiga siku-siku memiliki tepat satu sudut 90 derajat. Kedua sisi siku-sikunya bertemu pada sudut siku-siku, dan sisi miring terletak berhadapan dengan sudut tersebut. Sisi miring selalu merupakan sisi terpanjang. Dua sudut lainnya lancip, dan karena ketiga sudut berjumlah 180 derajat, [[A+B=90^\\circ]]. Fakta-fakta ini penting karena metode tinggi bersandar padanya: alas haruslah sisi miring, dan tinggi harus turun dari titik sudut siku-siku." },
          { "kind": "h3", "text": "Apa Itu Sisi Miring?" },
          { "kind": "p", "text": "Sisi miring adalah sisi yang berhadapan dengan sudut siku-siku, diberi label [[c]] pada kalkulator. Untuk mengenalinya dalam orientasi apa pun, carilah sisi yang tidak menyentuh penanda sudut siku-siku: sisi itulah sisi miringnya. Dalam rumus tinggi, ia berperan sebagai alas, sehingga mengenalinya dengan benar adalah keterampilan pertama yang diajarkan halaman ini." },
          { "kind": "h3", "text": "Apa Itu Tinggi?" },
          { "kind": "p", "text": "Tinggi adalah ruas garis tegak lurus dari titik sudut segitiga ke garis yang memuat sisi di hadapannya. Di sini tinggi [[h]] berjalan dari titik sudut siku-siku [[C]] ke sisi miring [[AB]] dan bertemu di titik [[D]], sehingga [[CD\\perp AB]]. Ia adalah jarak tegak lurus, bukan sekadar garis apa pun yang digambar di dalam segitiga: hanya ruas yang bertemu sisi miring pada 90 derajat yang memenuhi syarat." },
          { "kind": "h3", "text": "Apakah Tinggi Sama dengan Sisi Siku-Siku?" },
          { "kind": "p", "text": "Tidak. Sisi siku-siku [[a]] dan [[b]] bertemu pada sudut siku-siku semula, sedangkan tinggi adalah ruas garis terpisah dari titik sudut yang sama ke sisi di hadapannya. Ambil segitiga 6-8-10: [[a=6]], [[b=8]], [[c=10]]. Tingginya adalah [[h=(6\\times8)/10=4.8]]. Tidak satu pun sisi siku-siku berukuran 4,8, tetapi tinggi ke sisi miring tepat 4,8. Mengacaukan sisi siku-siku dengan tinggi adalah salah satu kesalahan paling umum di halaman ini." },
          { "kind": "h3", "text": "Mengapa Tinggi Jatuh di Dalam Segitiga" },
          { "kind": "p", "text": "Untuk segitiga siku-siku yang tidak degenerat, garis tegak lurus dari titik sudut siku-siku mendarat pada sisi miring di antara kedua ujungnya, tidak pernah di luar. Ia membagi segitiga semula menjadi dua segitiga siku-siku yang lebih kecil. Kedua segitiga itu berbagi ukuran sudut lancip dengan segitiga semula, sehingga ketiga segitiga saling sebangun. Kesebangunan itulah alasan tinggi memenuhi hubungan yang begitu rapi, yang dibahas pada bagian rata-rata geometri di bawah." }
        ],
        "imgAlt": "Segitiga ABC: sisi siku-siku a dan b, sisi miring c sebagai alas, tinggi h dari C ke D, K = ch/2",
        "figcaption": "Anatomi metode tinggi: sisi miring c adalah alas, tinggi h bertemu dengannya pada 90 derajat di titik D, dan luasnya adalah K = ch/2."
      },
      "sec-formula": {
        "h2": "Rumus Luas Segitiga Siku-Siku dari Tinggi",
        "blocks": [
          { "kind": "p", "text": "Rumus luas dari tinggi adalah [[[\\boxed{K=\\frac{ch}{2}}]]]. Di sini [[K]] adalah luas, [[c]] adalah sisi miring yang berfungsi sebagai alas, dan [[h]] adalah tinggi tegak lurus ke sisi miring. Tiga simbol, satu perkalian, satu pembagian dua." },
          { "kind": "h3", "text": "Mengapa Kita Mengalikan Sisi Miring dengan Tinggi?" },
          { "kind": "p", "text": "Rumus umum luas segitiga adalah [[K=\\frac{\\text{base}\\times\\text{height}}{2}]], dan alas serta tinggi harus saling tegak lurus. Memilih sisi miring sebagai alas memaksa tinggi menjadi jarak tegak lurus ke sisi itu, yang tepat adalah tinggi: [[\\text{base}=c]] dan [[\\text{height}=h]], sehingga [[K=ch/2]]. Ini berlaku bagaimanapun segitiga diputar atau digambar: ketegaklurusan adalah hubungan geometris, bukan arah layar, sehingga sisi miring yang miring berfungsi sebagai alas sama baiknya dengan yang horizontal." },
          { "kind": "h3", "text": "Mengapa Hasilnya Dibagi Dua?" },
          { "kind": "p", "text": "Sebuah segitiga menempati setengah dari jajar genjang yang dibangun pada alas yang sama dengan tinggi tegak lurus yang sama. Dengan [[c=10]] dan [[h=4.8]], hasil kali [[c\\times h=48]] adalah luas jajar genjang itu. Segitiga adalah setengahnya, sehingga [[K=48/2=24]]. Melaporkan 48 akan menjawab pertanyaan berbeda: luas jajar genjang penuh, bukan segitiga di dalamnya." },
          { "kind": "h3", "text": "Apakah Rumus Ini Berlaku untuk Setiap Segitiga?" },
          { "kind": "p", "text": "Aturan alas-tinggi berlaku untuk setiap segitiga, asalkan tingginya tegak lurus terhadap alas yang dipilih. Yang istimewa di sini adalah pilihan alasnya: sisi miring segitiga siku-siku, dengan tinggi yang dijatuhkan dari titik sudut siku-siku. Pilihan itu membawa batasan geometris tambahan, seperti tinggi tidak pernah melebihi setengah sisi miring, yang tidak berlaku untuk segitiga umum." },
          { "kind": "h3", "text": "Mengapa Rumus Ini Tidak Memerlukan Kedua Sisi Siku-Siku" },
          { "kind": "p", "text": "Luas hanya memerlukan satu sisi dan tinggi tegak lurus yang bersesuaian, tidak lebih. Ketika [[c]] dan [[h]] sudah diketahui, sisi siku-siku tidak menambah informasi baru tentang luas. Rumus sisi siku-siku [[K=ab/2]] hanyalah rute masukan berbeda menuju besaran yang sama, berguna ketika data yang terukur adalah kedua sisi yang tegak lurus." }
        ],
        "imgAlt": "Diagram: luas segitiga = setengah alas kali tinggi; c = 10, h = 4,8, 10 x 4,8 = 48, dibagi 2 = 24",
        "figcaption": "Hasil kali c kali h adalah persegi panjang penuh; segitiga mengisi tepat setengahnya, itulah sebabnya rumus membagi dua."
      },
      "sec-steps": {
        "h2": "Contoh Langkah demi Langkah Menghitung Luas dari Tinggi",
        "blocks": [
          { "kind": "p", "text": "Satu perhitungan lengkap, dari pengukuran hingga jawaban terverifikasi, menggunakan [[c=10\\text{ m}]] dan [[h=4.8\\text{ m}]]." }
        ],
        "steps": [
          "<strong>Identifikasi ukuran yang diberikan.</strong> Sisi miringnya adalah [[c=10\\text{ m}]] dan tinggi tegak lurus ke sisi itu adalah [[h=4.8\\text{ m}]]. Pastikan tinggi bertemu sisi miring pada sudut siku-siku.",
          "<strong>Tulis rumusnya.</strong> [[K=ch/2]].",
          "<strong>Substitusikan ukurannya.</strong> [[K=(10\\times4.8)/2]].",
          "<strong>Kalikan.</strong> [[10\\times4.8=48]], sehingga [[K=48/2]].",
          "<strong>Bagi dua.</strong> [[[\\boxed{K=24\\text{ m}^2}]]].",
          "<strong>Tafsirkan jawabannya.</strong> Segitiga itu menutupi 24 meter persegi luas datar.",
          "<strong>Periksa kelayakannya.</strong> Segitiga siku-siku yang valid memerlukan [[h\\leq c/2]]; di sini [[4.8\\leq5]], sehingga ukuran-ukuran itu dapat menggambarkan segitiga siku-siku nyata.",
          "<strong>Verifikasi menggunakan sisi siku-siku.</strong> Segitiga 6-8-10 memiliki sisi miring dan tinggi yang sama, dan [[K=(6\\times8)/2=24]]. Kedua rute sepakat."
        ]
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segitiga Siku-Siku dari Tinggi",
        "blocks": [
          { "kind": "p", "text": "Kalkulator pada halaman ini hanya memerlukan dua masukan. Panduan di bawah mengikuti urutan pada layar, sehingga pengguna pertama kali dapat beralih dari segitiga yang digambar atau diukur ke luas yang terverifikasi." }
        ],
        "steps": [
          "<strong>Identifikasi segitiga siku-sikunya.</strong> Pastikan satu sudutnya 90 derajat; metode ini hanya berlaku untuk segitiga siku-siku.",
          "<strong>Temukan sisi miringnya [[c]].</strong> Ia adalah sisi yang berhadapan dengan sudut siku-siku dan sisi terpanjang.",
          "<strong>Identifikasi tinggi tegak lurus [[h]].</strong> Ia berjalan dari titik sudut siku-siku ke sisi miring dan bertemu pada 90 derajat.",
          "<strong>Ukur atau peroleh kedua nilainya.</strong> Ukur langsung, atau hitung tingginya terlebih dahulu dengan [[h=ab/c]] ketika sisi siku-siku diketahui.",
          "<strong>Masukkan sisi miring ke kolom Hypotenuse c.</strong>",
          "<strong>Masukkan tinggi ke kolom Altitude h.</strong>",
          "<strong>Pilih satuan panjang yang kompatibel.</strong> Kedua masukan harus menggunakan satuan yang sama sebelum rumus diterapkan.",
          "<strong>Pastikan kedua nilai positif.</strong> Panjang nol atau negatif tidak menggambarkan segitiga.",
          "<strong>Periksa bahwa [[h]] tidak lebih besar dari setengah sisi miring.</strong> Untuk [[c=10]], tinggi berapa pun di atas 5 tidak dapat dimiliki segitiga siku-siku dengan sisi miring itu.",
          "<strong>Klik Calculate Area.</strong>",
          "<strong>Tinjau hasil luasnya.</strong> Ia muncul dalam satuan persegi yang sesuai dengan satuan masukan.",
          "<strong>Baca langkah penyelesaian yang ditampilkan.</strong> Langkah-langkah itu menunjukkan rumus, substitusi, dan aritmetikanya.",
          "<strong>Periksa visualisasi langsungnya.</strong> Pastikan sisi miring dan tinggi pada diagram sesuai dengan ukuran yang dimaksud.",
          "<strong>Gunakan Reset untuk perhitungan baru.</strong> Ia mengosongkan kedua kolom sehingga perhitungan berikutnya dimulai dengan bersih."
        ],
        "closingParagraphs": [
          "Kalkulator tidak meminta kedua sisi siku-siku atau sebuah sudut, karena metode tinggi memang tidak memerlukannya."
        ]
      },
      "sec-examples": {
        "h2": "Contoh Soal Luas Segitiga Siku-Siku dari Sisi Miring dan Tinggi",
        "blocks": [
          { "kind": "p", "text": "Empat contoh soal membangun metode ini dari segitiga-segitiga yang sudah dikenal ke atas. Masing-masing menghitung tinggi dari sisi siku-siku bila diperlukan, menerapkan [[K=ch/2]], dan memeriksa silang terhadap rumus sisi siku-siku." },
          { "kind": "h3", "text": "Contoh 1: Segitiga Siku-Siku 3-4-5" },
          { "kind": "p", "text": "Diketahui [[a=3]], [[b=4]], [[c=5]]. Tingginya adalah [[h=ab/c]], sehingga [[h=(3\\times4)/5=2.4]]. Luasnya adalah [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ square units}}]]]. Memeriksa dengan sisi siku-siku, [[K=(3\\times4)/2=6]]. Kedua rumus menggambarkan segitiga yang sama, sehingga keduanya harus sepakat, dan memang sepakat." },
          { "kind": "h3", "text": "Contoh 2: Segitiga Siku-Siku 5-12-13" },
          { "kind": "p", "text": "Diketahui [[a=5]], [[b=12]], [[c=13]]. Tingginya adalah [[h=(5\\times12)/13=60/13\\approx4.61538]]. Dengan mempertahankan pecahan eksak, [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ square units}}]]]. Mempertahankan [[60/13]] alih-alih desimal yang dibulatkan menghindari kesalahan pembulatan dini: angka 13 saling meniadakan secara eksak, menyisakan 30 yang bersih." },
          { "kind": "h3", "text": "Contoh 3: Segitiga Siku-Siku 6-8-10" },
          { "kind": "p", "text": "Diketahui [[c=10]] dan [[h=4.8]] secara langsung. Maka [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]. Dengan sisi siku-siku 6 dan 8, [[K=(6\\times8)/2=24]], yang mengonfirmasi rute tinggi." },
          { "kind": "h3", "text": "Contoh 4: Segitiga Siku-Siku Sama Kaki" },
          { "kind": "p", "text": "Diketahui [[c=10]] dan [[h=5]]. Maka [[K=(10\\times5)/2]], [[[\\boxed{K=25\\text{ square units}}]]]. Ini adalah luas terbesar yang dapat dimiliki segitiga siku-siku dengan sisi miring 10. Tinggi sama dengan setengah sisi miring hanya ketika sisi siku-sikunya sama panjang, membuat setiap sudut lancip [[45^\\circ]], dan tidak ada segitiga siku-siku valid dengan sisi miring ini yang dapat melebihi 25 satuan persegi." }
        ]
      },
      "sec-applications": {
        "h2": "Penerapan Luas Segitiga Siku-Siku dari Tinggi dalam Kehidupan Nyata",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi yang dikerjakan menunjukkan rumus ini pada skala dan satuan yang berbeda. Masing-masing menyebutkan segitiga dalam adegannya, kedua ukuran, substitusi, luas, dan asumsi di balik modelnya." },
          { "kind": "h3", "text": "Contoh 1: Bagian Taman Segitiga" },
          { "kind": "p", "text": "Bagian taman berbentuk segitiga siku-siku memiliki batas terpanjang 10 m, dan jarak tegak lurus dari sudut siku-siku ke batas itu adalah 4,8 m. Jadi [[c=10\\text{ m}]] dan [[h=4.8\\text{ m}]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Bagian itu menempati 24 meter persegi. Ini mengasumsikan batasnya lurus dan sudutnya benar-benar siku-siku." },
          { "kind": "h3", "text": "Contoh 2: Panel Tripleks Segitiga" },
          { "kind": "p", "text": "Panel tripleks berbentuk segitiga siku-siku memiliki sisi miring 1 m dan tinggi tegak lurus 0,48 m: [[K=(1\\times0.48)/2]], [[[\\boxed{K=0.24\\text{ m}^2}]]]. Itu adalah permukaan datar satu sisi, berguna untuk estimasi cakupan. Sisa potongan dan kelonggaran bahan adalah pertimbangan terpisah." },
          { "kind": "h3", "text": "Contoh 3: Jendela Kaca Segitiga Siku-Siku" },
          { "kind": "p", "text": "Panel kaca berbentuk segitiga siku-siku memiliki sisi miring 1,3 m dan tinggi 0,6 m yang tegak lurus terhadap sisi itu: [[K=(1.3\\times0.6)/2]], [[[\\boxed{K=0.39\\text{ m}^2}]]]. Ini adalah luas kaca geometris sebelum cakupan bingkai atau kelonggaran pemasangan diperhitungkan." },
          { "kind": "h3", "text": "Contoh 4: Survei Bagian Segitiga" },
          { "kind": "p", "text": "Gambar survei memuat segitiga siku-siku dengan sisi miring 13 m dan tinggi [[60/13]] m. Dengan mempertahankan pecahan: [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Gambar itu mewakili bagian seluas 30 meter persegi. Pekerjaan lapangan aktual mungkin masih memerlukan koreksi instrumen di luar gambar." },
          { "kind": "h3", "text": "Contoh 5: Mengukur Ubin Segitiga" },
          { "kind": "p", "text": "Ubin berbentuk segitiga siku-siku memiliki sisi miring 25 cm dan tinggi tegak lurus 6,72 cm: [[K=(25\\times6.72)/2]], [[[\\boxed{K=84\\text{ cm}^2}]]]. Satu ubin menutupi 84 sentimeter persegi, yang membantu memperkirakan berapa banyak ubin yang dibutuhkan sebuah permukaan. Celah nat dan susut potongan dihitung terpisah." },
          { "kind": "h3", "text": "Contoh 6: Panel Penyangga Baja" },
          { "kind": "p", "text": "Panel penyangga datar berbentuk segitiga siku-siku memiliki sisi miring 1,7 m dengan sisi siku-siku 0,8 m dan 1,5 m. Tingginya adalah [[h=(0.8\\times1.5)/1.7=12/17]] m. Maka [[K=(1.7\\times(12/17))/2]], [[[\\boxed{K=0.6\\text{ m}^2}]]]. Itu adalah luas panel geometris, bukan kapasitas dukung bebannya." },
          { "kind": "h3", "text": "Contoh 7: Panel Sisi Jalan Miring Segitiga" },
          { "kind": "p", "text": "Panel sisi jalan miring yang disederhanakan membentuk segitiga siku-siku dengan sisi miring 5 m dan tinggi tegak lurus 2,4 m ke sisi miring itu: [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Ini adalah luas datar bagian sisi segitiga, bukan permukaan jalan miringnya, dan perhitungan ini tidak menetapkan kepatuhan aksesibilitas." },
          { "kind": "h3", "text": "Contoh 8: Bagian Atap Pelana" },
          { "kind": "p", "text": "Bagian atap pelana berbentuk segitiga siku-siku memiliki sisi miring 6,5 m dan tinggi tegak lurus [[30/13]] m: [[K=(6.5\\times(30/13))/2]], [[[\\boxed{K=7.5\\text{ m}^2}]]]. Hasilnya menggambarkan bidang segitiga yang diberikan oleh ukuran-ukurannya. Total luas permukaan atap nyata adalah soal pengukuran tiga dimensi yang terpisah." },
          { "kind": "h3", "text": "Contoh 9: Petak Tanah Segitiga Siku-Siku" },
          { "kind": "p", "text": "Bagian tanah berbentuk segitiga siku-siku memiliki sisi miring 50 m dan tinggi tegak lurus 24 m: [[K=(50\\times24)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]. Batas-batas yang terukur menutupi 600 meter persegi. Angka luas resmi mungkin masih memerlukan verifikasi survei." },
          { "kind": "h3", "text": "Contoh 10: Petak Survei Segitiga Besar" },
          { "kind": "p", "text": "Bagian segitiga siku-siku hasil survei memiliki sisi miring 100 m dan tinggi tegak lurus 48 m: [[K=(100\\times48)/2]], [[[\\boxed{K=2400\\text{ m}^2}]]]. Itu adalah luas planar bagian segitiga. Ia mewakili seluruh properti hanya jika properti itu semata-mata terdiri dari segitiga tersebut." },
          { "kind": "h3", "text": "Contoh 11: Bagian Layar Segitiga" },
          { "kind": "p", "text": "Desain layar datar berbentuk segitiga siku-siku memiliki sisi miring 15 ft dan tinggi tegak lurus 7,2 ft: [[K=(15\\times7.2)/2]], [[[\\boxed{K=54\\text{ ft}^2}]]]. Ini adalah luas planar layar yang diidealkan. Kain melengkung, jahitan, dan kelonggaran tepi memerlukan pertimbangan terpisah." },
          { "kind": "h3", "text": "Contoh 12: Braket Mekanis Kecil" },
          { "kind": "p", "text": "Braket datar berbentuk segitiga siku-siku memiliki sisi miring 250 mm dan tinggi tegak lurus 120 mm: [[K=(250\\times120)/2]], [[[\\boxed{K=15000\\text{ mm}^2}]]]. Jawabannya dalam milimeter persegi karena masukannya dalam milimeter. Karena [[1\\text{ cm}^2=100\\text{ mm}^2]], ini sama dengan [[[\\boxed{150\\text{ cm}^2}]]]. Mengonversi satuan linear dan mengonversi satuan persegi adalah operasi yang berbeda, seperti yang dijelaskan bagian satuan." },
          { "kind": "h3", "text": "Perbandingan Contoh Praktis" }
        ],
        "table": {
          "headers": ["Situasi", "Sisi miring c", "Tinggi h", "Rumus", "Luas terhitung", "Tafsiran praktis"],
          "rows": [
            ["Bagian taman", "10 m", "4,8 m", "[[K=ch/2]]", "24 m²", "Permukaan tanam"],
            ["Panel tripleks", "1 m", "0,48 m", "[[K=ch/2]]", "0,24 m²", "Cakupan bahan, tanpa sisa"],
            ["Jendela kaca", "1,3 m", "0,6 m", "[[K=ch/2]]", "0,39 m²", "Luas kaca sebelum bingkai"],
            ["Gambar survei", "13 m", "60/13 m", "[[K=ch/2]]", "30 m²", "Luas rencana bagian"],
            ["Ubin", "25 cm", "6,72 cm", "[[K=ch/2]]", "84 cm²", "Permukaan satu ubin"],
            ["Panel baja", "1,7 m", "12/17 m", "[[K=ch/2]]", "0,6 m²", "Geometri, bukan kapasitas beban"],
            ["Panel sisi jalan miring", "5 m", "2,4 m", "[[K=ch/2]]", "6 m²", "Bagian sisi, bukan permukaan jalan"],
            ["Atap pelana", "6,5 m", "30/13 m", "[[K=ch/2]]", "7,5 m²", "Penampang segitiga"],
            ["Petak tanah", "50 m", "24 m", "[[K=ch/2]]", "600 m²", "Luas tertutup, verifikasi dengan survei"],
            ["Petak survei", "100 m", "48 m", "[[K=ch/2]]", "2400 m²", "Bagian, bukan seluruh properti"],
            ["Bagian layar", "15 ft", "7,2 ft", "[[K=ch/2]]", "54 ft²", "Layar datar ideal"],
            ["Braket", "250 mm", "120 mm", "[[K=ch/2]]", "15000 mm²", "Sama dengan 150 cm²"]
          ]
        },
        "imgAlt": "Empat contoh: taman, panel kaca, petak tanah, braket, masing-masing dengan sisi miring c, tinggi h, luas",
        "figcaption": "Rumus yang sama pada empat skala: taman, panel kaca, petak tanah, dan braket mesin."
      },
      "sec-equal": {
        "h2": "Mengapa Kedua Rumus Luas Segitiga Siku-Siku Memberi Jawaban Sama",
        "blocks": [
          { "kind": "p", "text": "Segitiga siku-siku dapat diukur melalui dua sisi siku-siku yang tegak lurus atau melalui sisi miring dan tingginya. Rumus sisi siku-siku adalah [[K=ab/2]] dan rumus tinggi adalah [[K=ch/2]]. Karena keduanya menggambarkan luas segitiga yang sama, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Kalikan kedua ruas dengan dua: [[ab=ch]]. Selesaikan untuk [[h]]: [[[\\boxed{h=\\frac{ab}{c}}]]]. Tinggi adalah hasil kali sisi siku-siku dibagi sisi miring, itulah sebabnya kedua rumus tidak pernah bisa berbeda pada segitiga yang konsisten." },
          { "kind": "p", "text": "Verifikasi numerik: untuk [[a=6]], [[b=8]], [[c=10]], tingginya adalah [[h=(6\\times8)/10=4.8]]. Dengan sisi siku-siku: [[K=(6\\times8)/2=24]]. Dengan tinggi: [[K=(10\\times4.8)/2=24]]. Segitiga yang sama, luas yang sama, dua rute." },
          { "kind": "p", "text": "Ketika hanya sisi miring dan tinggi yang diketahui, luasnya sudah tetap: tidak perlu merekonstruksi sisi siku-siku terlebih dahulu. Panjang sisi siku-siku masih dapat dipulihkan dari [[c]] dan [[h]] yang valid melalui hubungan ruas di bawah, tetapi itu adalah perhitungan terpisah dari mencari luas. Ketika sisi siku-siku adalah data yang diketahui, <a href=\"/right-triangle-area-from-legs-calculator/\">Kalkulator Luas Segitiga Siku-Siku dari Sisi Siku-Siku</a> menerimanya secara langsung." }
        ]
      },
      "sec-geomean": {
        "h2": "Bagaimana Tinggi Membagi Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Tinggi bertemu sisi miring di [[D]], membaginya menjadi ruas-ruas [[AD=p]] dan [[DB=q]], sehingga [[p+q=c]]. Pembagian itu menciptakan dua segitiga siku-siku yang lebih kecil bersarang di dalam segitiga semula, dan proporsinya sangat rapi." },
          { "kind": "h3", "text": "Dua Segitiga Siku-Siku Kecil yang Sebangun" },
          { "kind": "p", "text": "Tinggi membagi segitiga semula menjadi dua segitiga siku-siku yang lebih kecil, masing-masing berbagi satu sudut lancip dengan segitiga semula dan masing-masing memuat sudut siku-siku. Berbagi dua ukuran sudut membuat ketiga segitiga sebangun. Kesebangunan inilah yang memaksa hubungan proporsional yang bersih antara tinggi, ruas-ruas, dan sisi siku-siku." },
          { "kind": "h3", "text": "Teorema Rata-Rata Geometris Tinggi" },
          { "kind": "p", "text": "Kesebangunan menghasilkan [[[\\boxed{h^2=pq}]]], atau setara [[[\\boxed{h=\\sqrt{pq}}]]]. Tinggi adalah rata-rata geometris dari dua ruas sisi miring: kuadratnya sama dengan hasil kali keduanya. Contoh soal: dengan [[p=6.4]] dan [[q=3.6]], [[c=p+q=10]], dan [[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]], [[[\\boxed{h=4.8}]]]. Luasnya mengikuti: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]. Teorema ruas memverifikasi tinggi yang diukur atau dihitung dengan cara lain." },
          { "kind": "h3", "text": "Hubungan Antara Ruas dan Sisi Siku-Siku" },
          { "kind": "p", "text": "Kesebangunan yang sama menghasilkan [[b^2=cp]] dan [[a^2=cq]]. Dengan [[c=10]], [[p=6.4]], [[q=3.6]]: [[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]] dan [[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]. Segitiga 6-8-10 semula dipulihkan secara eksak, yang menunjukkan betapa eratnya ruas-ruas, tinggi, dan sisi siku-siku terikat bersama." }
        ]
      },
      "sec-max": {
        "h2": "Seberapa Besar Tinggi Segitiga Siku-Siku Bisa?",
        "blocks": [
          { "kind": "p", "text": "Tidak setiap pasangan bilangan positif dapat menjadi sisi miring dan tinggi. Untuk segitiga siku-siku yang valid dan tidak degenerat, [[[\\boxed{0<h\\leq\\frac{c}{2}}]]]. Tinggi harus positif dan tidak pernah dapat melebihi setengah sisi miring." },
          { "kind": "h3", "text": "Mengapa Tinggi Tidak Dapat Melebihi Setengah Sisi Miring" },
          { "kind": "p", "text": "Dari [[h^2=pq]] dengan [[p+q=c]], hasil kali [[pq]] terbesar ketika kedua ruas sama, [[p=q=c/2]]. Oleh karena itu [[h^2\\leq c^2/4]], dan untuk panjang positif [[h\\leq c/2]]. Dengan kata sederhana: tinggi paling tinggi ketika membagi sisi miring menjadi dua bagian sama, dan bahkan saat itu ia hanya mencapai setengah sisi miring." },
          { "kind": "h3", "text": "Luas Maksimum untuk Sisi Miring Tetap" },
          { "kind": "p", "text": "Karena [[K=ch/2]] dan [[h\\leq c/2]], luas terbesar yang mungkin adalah [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]. Maksimum ini dimiliki segitiga siku-siku sama kaki, yang kedua sisi siku-sikunya sama. Dengan [[c=10]], tinggi valid tertinggi adalah [[h_{\\max}=5]], menghasilkan [[K_{\\max}=(10\\times5)/2=25]]. Tinggi 6 dengan sisi miring 10 mustahil untuk segitiga siku-siku." },
          { "kind": "h3", "text": "Apa yang Terjadi Jika Tingginya Terlalu Besar?" },
          { "kind": "p", "text": "Ambil [[c=10]] dan [[h=6]]: [[6>5]], sehingga tidak ada segitiga siku-siku yang memiliki ukuran-ukuran ini. Aritmetika [[(10\\times6)/2=30]] adalah luas yang valid untuk suatu segitiga dalam konteks yang lebih umum, tetapi tidak menjadikan [[c=10]], [[h=6]] masukan segitiga siku-siku yang valid. Halaman ini tidak mengklaim kalkulator otomatis menolak masukan semacam itu; pemeriksaan itu tugas Anda untuk dijalankan." },
          { "kind": "h3", "text": "Bisakah Tinggi Sama dengan Setengah Sisi Miring?" },
          { "kind": "p", "text": "Ya. Kesamaan menghasilkan segitiga siku-siku sama kaki dengan dua sisi siku-siku yang sama, segitiga yang valid dan tidak degenerat. Ini adalah kasus batas, bukan kasus yang rusak." }
        ],
        "imgAlt": "Dua diagram: segitiga 6-8-10 dengan p = 6,4 dan q = 3,6, dan segitiga sama kaki pada tinggi maksimum c/2",
        "figcaption": "Kiri: tinggi adalah rata-rata geometris ruas-ruas sisi miring. Kanan: tinggi tertinggi yang mungkin adalah setengah sisi miring, menghasilkan luas maksimum."
      },
      "sec-find-altitude": {
        "h2": "Cara Menghitung Tinggi Jika Belum Diketahui",
        "blocks": [
          { "kind": "p", "text": "Kalkulator ini menerima [[h]] sebagai masukan, sehingga tinggi yang belum diketahui harus dicari atau diukur terlebih dahulu. Tiga rute standar mencakup kasus-kasus umum. Ketika sisi-sisinya diketahui dan tinggi adalah bagian yang hilang, <a href=\"/right-triangle-altitude-from-sides-calculator/\">Kalkulator Tinggi Segitiga Siku-Siku dari Sisi</a> menghitungnya secara langsung." },
          { "kind": "h3", "text": "Metode 1: Menggunakan Kedua Sisi Siku-Siku dan Sisi Miring" },
          { "kind": "p", "text": "[[[\\boxed{h=\\frac{ab}{c}}]]]. Dengan [[a=6]], [[b=8]], [[c=10]]: [[h=(6\\times8)/10=4.8]]." },
          { "kind": "h3", "text": "Metode 2: Menggunakan Ruas-Ruas Sisi Miring" },
          { "kind": "p", "text": "[[[\\boxed{h=\\sqrt{pq}}]]]. Dengan [[p=6.4]] dan [[q=3.6]]: [[h=\\sqrt{23.04}=4.8]]." },
          { "kind": "h3", "text": "Metode 3: Menggunakan Luas dan Sisi Miring yang Diketahui" },
          { "kind": "p", "text": "Menyusun ulang [[K=ch/2]] menghasilkan [[[\\boxed{h=\\frac{2K}{c}}]]]. Dengan [[K=24]] dan [[c=10]]: [[h=(2\\times24)/10=4.8]]." },
          { "kind": "p", "text": "Ini adalah penyusunan ulang matematis, bukan mode kalkulator tambahan: kalkulator luas-dari-tinggi itu sendiri tetap mengharapkan tinggi sebagai masukan." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Satuan Persegi dalam Perhitungan Luas Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Luas bersifat dua dimensi. Mengalikan dua panjang juga mengalikan satuannya: [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Satuan luas selalu merupakan kuadrat dari satuan panjang." },
          { "kind": "h3", "text": "Meter Persegi" },
          { "kind": "p", "text": "Dengan [[c=10\\text{ m}]] dan [[h=4.8\\text{ m}]], [[K=24\\text{ m}^2]]. Bacalah sebagai 24 meter persegi permukaan." },
          { "kind": "h3", "text": "Sentimeter Persegi" },
          { "kind": "p", "text": "Dengan [[c=25\\text{ cm}]] dan [[h=6.72\\text{ cm}]], [[K=84\\text{ cm}^2]]." },
          { "kind": "h3", "text": "Milimeter Persegi" },
          { "kind": "p", "text": "Dengan [[c=250\\text{ mm}]] dan [[h=120\\text{ mm}]], [[K=15000\\text{ mm}^2]]." },
          { "kind": "h3", "text": "Mengonversi Satuan Luas" },
          { "kind": "p", "text": "[[1\\text{ m}^2=10000\\text{ cm}^2]] dan [[1\\text{ cm}^2=100\\text{ mm}^2]]. Konversi linear dikalikan 10, 100, atau 1000, tetapi konversi luas mengkuadratkan faktor itu: 100 cm dalam satu meter menjadi [[100^2=10000]] sentimeter persegi dalam satu meter persegi. Mengonversi panjang dan mengonversi luas adalah operasi yang berbeda." },
          { "kind": "h3", "text": "Bagaimana Jika Masukannya Menggunakan Satuan Berbeda?" },
          { "kind": "p", "text": "Konversi dulu, hitung kemudian. Sisi miring dalam meter dan tinggi dalam sentimeter harus disatukan satuannya, misalnya 2 m dan 150 cm menjadi 2 m dan 1,5 m, sebelum rumus diterapkan. Satuan campuran dalam rumus menghasilkan angka tanpa makna dengan satuan yang tidak bersih." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum Saat Menggunakan Rumus Luas dari Tinggi",
        "blocks": [
          { "kind": "p", "text": "Sebagian besar jawaban salah di halaman ini berasal dari masukan yang salah label, bukan aritmetika yang buruk. Delapan belas kesalahan di bawah mencakup hampir semuanya." },
          { "kind": "h3", "text": "1. Menggunakan Sisi Siku-Siku Alih-alih Tinggi" },
          { "kind": "p", "text": "Tinggi [[h]] turun dari titik sudut siku-siku ke sisi miring; sisi siku-siku berjalan sepanjang tepi segitiga. Pada segitiga 6-8-10, memasukkan sisi siku-siku 6 sebagai tinggi menghasilkan [[(10\\times6)/2=30]] alih-alih 24. Perbaikan: tinggi harus mendarat pada sisi miring dengan penanda sudut siku-siku." },
          { "kind": "h3", "text": "2. Mengacaukan Tinggi dengan Sisi Miring" },
          { "kind": "p", "text": "Menukar [[c]] dan [[h]] mengubah makna hasil kalinya. Dengan [[c=10]] dan [[h=4.8]], angka-angkanya komutatif dalam perkalian, tetapi pemeriksaan kelayakan [[h\\leq c/2]] rusak: masukan yang tertukar mengklaim tinggi 10 pada sisi miring 4,8, yang mustahil. Perbaikan: sisi miring selalu merupakan sisi terpanjang." },
          { "kind": "h3", "text": "3. Menggambar Tinggi dari Titik Sudut yang Salah" },
          { "kind": "p", "text": "Hanya tinggi dari titik sudut siku-siku [[C]] yang berpasangan dengan sisi miring sebagai alasnya. Garis tegak lurus dari titik sudut lancip mendarat pada sisi siku-siku, bukan sisi miring, dan tidak termasuk dalam rumus ini. Perbaikan: mulailah dari sudut persegi." },
          { "kind": "h3", "text": "4. Mengukur Tinggi pada Sudut yang Tidak Tegak Lurus" },
          { "kind": "p", "text": "Ruas garis tidak tegak lurus apa pun dari [[C]] ke sisi miring lebih panjang dari tinggi sebenarnya, sehingga luasnya keluar terlalu besar. Perbaikan: verifikasi pertemuan 90 derajat, dengan konstruksi atau dengan [[h=ab/c]]." },
          { "kind": "h3", "text": "5. Menggunakan Tinggi yang Sesuai dengan Alas Berbeda" },
          { "kind": "p", "text": "Tinggi ke sisi miring hanya berpasangan dengan sisi miring. Memasangkannya dengan sisi siku-siku, seperti pada [[(8\\times4.8)/2=19.2]], mencampur dua pasangan alas-tinggi yang berbeda. Perbaikan: setiap tinggi hanya dimiliki oleh satu alas." },
          { "kind": "h3", "text": "6. Lupa Membagi Dua" },
          { "kind": "p", "text": "[[10\\times4.8=48]] adalah luas jajar genjang, bukan luas segitiga. Perbaikan: akhiri setiap perhitungan alas-tinggi dengan pembagian dua." },
          { "kind": "h3", "text": "7. Mengalikan Panjang dengan Satuan yang Tidak Kompatibel" },
          { "kind": "p", "text": "Sisi miring 2 m dengan tinggi 150 cm bukanlah [[(2\\times150)/2=150]] dari apa pun yang bermakna. Perbaikan: konversi ke satu satuan terlebih dahulu, di sini 2 m dan 1,5 m, menghasilkan 1,5 m²." },
          { "kind": "h3", "text": "8. Melaporkan Jawaban dalam Satuan Linear" },
          { "kind": "p", "text": "Luas 24 m² bukanlah 24 m. Perbaikan: selalu tulis satuan persegi bersama angkanya." },
          { "kind": "h3", "text": "9. Memasukkan Panjang Nol atau Negatif" },
          { "kind": "p", "text": "[[c>0]] dan [[h>0]] disyaratkan; masukan nol atau negatif tidak menggambarkan segitiga. Perbaikan: ukur ulang." },
          { "kind": "h3", "text": "10. Memasukkan Tinggi Lebih Besar dari Setengah Sisi Miring" },
          { "kind": "p", "text": "[[c=10]], [[h=6]] melanggar [[h\\leq c/2]]. Perbaikan: periksa ulang ruas mana yang diukur; itu bukan tinggi tegak lurus." },
          { "kind": "h3", "text": "11. Menganggap Setiap Pasangan Positif Membentuk Segitiga Siku-Siku" },
          { "kind": "p", "text": "Positivitas saja tidak cukup; batas tinggi juga harus dipenuhi. Perbaikan: jalankan pemeriksaan [[h\\leq c/2]] pada setiap pasangan baru." },
          { "kind": "h3", "text": "12. Mengacaukan Tinggi dengan Sisi Siku-Siku Vertikal" },
          { "kind": "p", "text": "Pada diagram, tinggi mungkin tampak vertikal sementara sisi siku-siku tampak miring, atau sebaliknya setelah rotasi. Vertikal di layar tidak berarti apa-apa. Perbaikan: kenali sisi berdasarkan peran geometrisnya, bukan arah layarnya." },
          { "kind": "h3", "text": "13. Membulatkan Tinggi Terlalu Dini" },
          { "kind": "p", "text": "Menggunakan 4,6 untuk [[60/13\\approx4.61538]] lalu menghitung menghasilkan luas yang sedikit salah, sedangkan pecahan eksak saling meniadakan dengan bersih menjadi 30. Perbaikan: pertahankan presisi penuh hingga jawaban akhir." },
          { "kind": "h3", "text": "14. Menganggap Sisi Miring Harus Horizontal" },
          { "kind": "p", "text": "Sisi miring dapat berada pada sudut berapa pun; rumus menggunakan panjang, bukan orientasi. Perbaikan: percayai ukurannya, bukan rotasi gambarnya." },
          { "kind": "h3", "text": "15. Mengacaukan Teorema Tinggi dengan Teorema Pythagoras" },
          { "kind": "p", "text": "[[h^2=pq]] menghubungkan tinggi dengan ruas-ruas sisi miring; [[a^2+b^2=c^2]] menghubungkan ketiga sisi. Keduanya menjawab pertanyaan berbeda. Perbaikan: cocokkan teorema dengan besaran yang Anda miliki." },
          { "kind": "h3", "text": "16. Menggunakan Tinggi yang Diukur dari Segitiga Berbeda" },
          { "kind": "p", "text": "Tinggi dimiliki oleh satu segitiga tertentu. Meminjam 4,8 dari segitiga 6-8-10 untuk sisi miring yang berbeda menghasilkan luas yang salah. Perbaikan: setiap perhitungan menggunakan ukuran segitiganya sendiri." },
          { "kind": "h3", "text": "17. Menganggap Luas Menentukan Setiap Panjang Sisi" },
          { "kind": "p", "text": "Banyak segitiga siku-siku berbeda berbagi satu luas. Mengetahui [[K=24]] tidak menetapkan [[c]] maupun [[h]] secara tersendiri. Perbaikan: perlakukan luas sebagai satu persamaan, bukan deskripsi lengkap." },
          { "kind": "h3", "text": "18. Memperlakukan Luas Geometris sebagai Bahan Tepat untuk Dibeli" },
          { "kind": "p", "text": "Rumus memberikan luas geometris ideal. Proyek nyata memerlukan sisa, tumpang tindih, dan kelonggaran potongan di atasnya. Perbaikan: tambahkan margin proyek setelah geometrinya selesai." },
          { "kind": "h3", "text": "Salah vs. Benar: Contoh Konkret" },
          { "kind": "p", "text": "Diketahui [[c=10]] dan [[h=4.8]], perhitungan yang salah melewatkan pembagian dua: [[K=10\\times4.8=48]]. Itu adalah luas jajar genjang yang bersesuaian. Perhitungan yang benar adalah [[K=(10\\times4.8)/2]], [[[\\boxed{K=24}]]]. Ilustrasi kedua: mensubstitusikan sisi siku-siku 8 untuk tinggi menghasilkan [[(10\\times8)/2=40]], salah karena 8 tidak tegak lurus terhadap sisi miring. Tinggi, dan hanya tinggi, yang berpasangan dengan [[c]]." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Apakah Perhitungan Luas Anda Benar",
        "blocks": [
          { "kind": "p", "text": "Tujuh pemeriksaan menangkap sebagian besar hasil buruk sebelum meninggalkan halaman." },
          { "kind": "h3", "text": "Pemeriksaan 1: Masukan Positif" },
          { "kind": "p", "text": "Untuk segitiga siku-siku yang valid, [[c>0]] dan [[h>0]]. Panjang nol atau negatif tidak menggambarkan segitiga." },
          { "kind": "h3", "text": "Pemeriksaan 2: Batas Tinggi" },
          { "kind": "p", "text": "Konfirmasi [[h\\leq c/2]]. Satu ketidaksamaan ini menyingkirkan masukan mustahil yang paling umum, seperti [[c=10]] dengan [[h=6]]." },
          { "kind": "h3", "text": "Pemeriksaan 3: Konfirmasi Sudut Siku-Siku" },
          { "kind": "p", "text": "Tinggi harus tegak lurus terhadap sisi miring. Jika gambar atau pengukuran tidak dapat mengonfirmasi pertemuan 90 derajat, masukannya bukan tinggi." },
          { "kind": "h3", "text": "Pemeriksaan 4: Satuan Persegi" },
          { "kind": "p", "text": "Masukan meter menghasilkan meter persegi, masukan sentimeter menghasilkan sentimeter persegi. Satuan jawabannya adalah kuadrat dari satuan masukan, tidak pernah satuan masukan itu sendiri." },
          { "kind": "h3", "text": "Pemeriksaan 5: Periksa Silang dengan Rumus Sisi Siku-Siku" },
          { "kind": "p", "text": "Untuk segitiga 6-8-10, [[(6\\times8)/2=24]] dan [[(10\\times4.8)/2=24]]. Dua metode, satu segitiga, satu jawaban: kesepakatan adalah verifikasi terkuat yang tersedia." },
          { "kind": "h3", "text": "Pemeriksaan 6: Hubungan Rata-Rata Geometris" },
          { "kind": "p", "text": "Ketika ruas-ruas sisi miring diketahui, verifikasi [[h^2=pq]]: [[4.8^2=6.4\\times3.6]], [[23.04=23.04]]. Ketidakcocokan berarti tinggi, ruas-ruas, atau identifikasi segitiganya salah." },
          { "kind": "h3", "text": "Pemeriksaan 7: Bandingkan dengan Luas Maksimum yang Mungkin" },
          { "kind": "p", "text": "Untuk sisi miring tetap, [[K\\leq c^2/4]]. Dengan [[c=10]], luas segitiga siku-siku berapa pun yang diklaim di atas 25 satuan persegi mustahil. Halaman ini tidak mengklaim apa pun tentang perilaku validasi kalkulator itu sendiri; pemeriksaannya tugas Anda untuk dijalankan." }
        ]
      },
      "sec-compare": {
        "h2": "Luas dari Tinggi vs. Luas dari Dua Sisi Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Dua rumus, satu luas. [[K=ab/2]] memerlukan dua sisi siku-siku yang tegak lurus; [[K=ch/2]] memerlukan sisi miring dan tingginya. Tidak ada yang lebih benar; keduanya adalah besaran yang sama yang dicapai dari ukuran yang berbeda." }
        ],
        "table": {
          "headers": ["Metode", "Ukuran yang diperlukan", "Keunggulan utama"],
          "rows": [
            ["Luas dari sisi siku-siku", "[[a]], [[b]]", "Paling sederhana ketika kedua sisi siku-siku diketahui"],
            ["Luas dari tinggi", "[[c]], [[h]]", "Langsung ketika sisi miring dan tinggi tegak lurus diketahui"],
            ["Luas dari sudut", "Sisi-sisi yang sesuai dan sudut yang diapit", "Berguna ketika sudut lancip diketahui"],
            ["Luas dari inradius", "[[r]], [[s]]", "Berguna dalam soal lingkaran dalam dan semiperimeter"]
          ]
        },
        "closingParagraphs": [
          "Luas segitiga siku-siku yang sama tidak berubah ketika metode valid lain digunakan. Pilih baris yang sesuai dengan angka yang sudah ada; ketika dua baris tersedia, kesepakatannya adalah pemeriksaan kebenaran gratis."
        ]
      },
      "sec-conclusion": {
        "h2": "Sisi Miring dan Tingginya Adalah Semua yang Anda Butuhkan",
        "blocks": [
          { "kind": "p", "text": "Metode tinggi adalah aturan alas-tinggi yang diarahkan ke sisi terpanjang. Setelah sisi miring dikenali dan tinggi tegak lurus ada di tangan, luas hanya berjarak satu perkalian dan satu pembagian dua, tanpa perlu memulihkan sisi siku-siku terlebih dahulu." },
          { "kind": "p", "text": "Kekuatan sebenarnya adalah disiplin: ketegaklurusan, batas tinggi, dan hubungan rata-rata geometris mengubah sketsa segitiga yang samar menjadi angka-angka yang dapat diperiksa. Jalankan pemeriksaannya, bandingkan dengan rumus sisi siku-siku ketika sisi siku-siku tersedia, dan jawabannya layak dipercaya." },
          { "kind": "p", "text": "Simpan kalkulator halaman ini untuk kasus-kasus ketika sisi miring dan tinggi adalah data yang terukur, dan gunakan kalkulator sisi siku-siku, sudut, atau semiperimeter ketika ukurannya menunjuk ke tempat lain." }
        ]
      }
    },
    "faqs": [
      { "question": "Apa rumus luas segitiga siku-siku menggunakan tinggi?", "answer": "Rumusnya adalah K = ch/2, dengan c adalah sisi miring dan h adalah tinggi tegak lurus dari titik sudut siku-siku ke sisi miring. Kalikan kedua panjang lalu bagi dua. Hasilnya dalam satuan persegi yang sesuai dengan masukan, sehingga masukan meter menghasilkan meter persegi. Tinggi harus bertemu sisi miring pada 90 derajat agar rumus berlaku." },
      { "question": "Apa arti tinggi h pada segitiga siku-siku?", "answer": "Tinggi h adalah ruas garis tegak lurus dari titik sudut siku-siku C ke sisi miring, yang bertemu di titik D. Ia adalah jarak terpendek dari titik sudut itu ke sisi miring dan tinggi yang berpasangan dengan sisi miring sebagai alas. Ia bukan sisi siku-siku, dan bukan sembarang garis yang digambar di dalam segitiga." },
      { "question": "Apakah tinggi sama dengan salah satu sisi siku-siku?", "answer": "Tidak. Sisi siku-siku a dan b membentuk sudut siku-siku, sedangkan tinggi adalah ruas garis terpisah dari titik sudut itu ke sisi di hadapannya. Pada segitiga 6-8-10, tingginya 4,8, yang tidak sama dengan sisi siku-siku mana pun. Memasukkan sisi siku-siku di tempat tinggi adalah salah satu kesalahan paling umum pada rumus ini." },
      { "question": "Mengapa sisi miring dapat digunakan sebagai alas?", "answer": "Sisi mana pun dari segitiga dapat berfungsi sebagai alas setelah tinggi tegak lurus yang bersesuaian diketahui. Untuk sisi miring, tinggi itu adalah tinggi dari titik sudut siku-siku. Karena keduanya tegak lurus, aturan umum setengah alas kali tinggi berlaku langsung, menghasilkan K = ch/2." },
      { "question": "Mengapa hasil kali sisi miring dan tinggi dibagi dua?", "answer": "Hasil kali c kali h adalah luas jajar genjang yang dibangun pada alas yang sama dengan tinggi yang sama. Segitiga mengisi tepat setengah dari jajar genjang itu, sehingga hasil kali harus dibagi dua. Melewatkan pembagian menjawab pertanyaan berbeda: dengan c = 10 dan h = 4,8, 48 adalah jajar genjang sedangkan 24 adalah segitiga." },
      { "question": "Bagaimana mencari tinggi jika kedua sisi siku-siku diketahui?", "answer": "Gunakan h = ab/c. Kalikan kedua sisi siku-siku dan bagi dengan sisi miring, yang dapat diperoleh dari teorema Pythagoras bila diperlukan. Untuk sisi siku-siku 6 dan 8 dengan sisi miring 10, h = 48/10 = 4,8. Kalkulator tinggi-dari-sisi pada situs ini melakukan tepat perhitungan ini ketika sisi-sisinya diketahui." },
      { "question": "Apa itu teorema rata-rata geometris untuk tinggi segitiga siku-siku?", "answer": "Teorema ini menyatakan bahwa h kuadrat sama dengan p kali q, dengan p dan q adalah dua ruas yang dipotong tinggi dari sisi miring. Tinggi karena itu adalah rata-rata geometris kedua ruas. Untuk p = 6,4 dan q = 3,6, h = akar(23,04) = 4,8, yang juga memverifikasi tinggi yang ditemukan dengan cara lain." },
      { "question": "Bisakah tinggi lebih panjang dari setengah sisi miring?", "answer": "Tidak. Untuk segitiga siku-siku yang valid, h harus memenuhi 0 < h <= c/2. Tinggi paling tinggi ketika membagi sisi miring menjadi dua bagian sama, mencapai tepat c/2 pada kasus sama kaki. Nilai yang lebih besar, seperti h = 6 dengan c = 10, tidak dapat dimiliki segitiga siku-siku dengan sisi miring itu." },
      { "question": "Bagaimana menghitung luas jika hanya sisi miring dan tinggi yang diketahui?", "answer": "Terapkan K = ch/2 secara langsung. Rekonstruksi sisi siku-siku tidak diperlukan karena luas sudah ditentukan oleh satu sisi dan tinggi yang bersesuaian. Misalnya, c = 10 dan h = 4,8 menghasilkan K = 24 satuan persegi. Pastikan saja tingginya tegak lurus dan tidak lebih besar dari setengah sisi miring terlebih dahulu." },
      { "question": "Mengapa rumus berbasis tinggi memberi hasil sama dengan rumus sisi siku-siku?", "answer": "Keduanya menghitung luas segitiga yang sama. Menyetarakan ab/2 dengan ch/2 dan mengalikan dengan dua menghasilkan ab = ch, sehingga h = ab/c. Kedua rumus setara secara aljabar untuk segitiga siku-siku konsisten mana pun, itulah sebabnya menghitung keduanya adalah pemeriksaan yang sangat kuat: kesepakatan mengonfirmasi masukannya." },
      { "question": "Satuan apa yang harus digunakan untuk hasil luas?", "answer": "Satuan persegi yang sesuai dengan panjang masukan: meter menghasilkan meter persegi, sentimeter menghasilkan sentimeter persegi, milimeter menghasilkan milimeter persegi. Konversi semua masukan ke satu satuan sebelum menghitung. Ingat bahwa konversi luas mengkuadratkan faktor linear, sehingga satu meter persegi sama dengan 10.000 sentimeter persegi." },
      { "question": "Bisakah rumus berbasis tinggi digunakan untuk segitiga lain?", "answer": "Aturan alas-tinggi setengah alas kali tinggi berlaku untuk setiap segitiga dengan pasangan tegak lurus yang sesuai. Yang istimewa di sini adalah batasan segitiga siku-siku: tinggi harus turun dari titik sudut siku-siku, dan h tidak pernah boleh melebihi c/2. Batasan itu tidak berlaku untuk segitiga lancip atau tumpul." }
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedItems": [
      "Kalkulator Luas Segitiga Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku dari Sisi Siku-Siku",
      "Kalkulator Tinggi Segitiga Siku-Siku dari Sisi",
      "Kalkulator Luas Segitiga Siku-Siku dari Semiperimeter",
      "Kalkulator Luas Segitiga Siku-Siku dari Sudut",
      "Kalkulator Keliling Segitiga Siku-Siku",
      "Kalkulator Sisi Segitiga Siku-Siku"
    ]
  },
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "sec-intro": "كيفية حساب مساحة المثلث القائم الزاوية من الارتفاع",
      "sec-understand": "فهم الوتر والارتفاع في المثلث القائم الزاوية",
      "sec-formula": "صيغة مساحة المثلث القائم الزاوية من الارتفاع",
      "sec-steps": "مثال حساب خطوة بخطوة",
      "sec-howto": "كيفية استخدام حاسبة المساحة من الارتفاع",
      "sec-examples": "أمثلة محلولة: الوتر والارتفاع",
      "sec-applications": "تطبيقات من الحياة الواقعية",
      "sec-equal": "لماذا تعطي صيغتا المساحة الإجابة نفسها",
      "sec-geomean": "كيف يقسم الارتفاع المثلث القائم الزاوية",
      "sec-max": "أقصى ارتفاع ممكن",
      "sec-find-altitude": "إيجاد الارتفاع عندما يكون مجهولًا",
      "sec-units": "الوحدات المربعة والتحويلات",
      "sec-mistakes": "الأخطاء الشائعة",
      "sec-verify": "كيفية التحقق من إجابتك",
      "sec-compare": "المساحة من الارتفاع مقابل المساحة من الضلعين",
      "sec-related": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
      "sec-faq": "الأسئلة الشائعة",
      "sec-conclusion": "الخاتمة"
    },
    "sections": {
      "sec-intro": {
        "h2": "كيفية حساب مساحة المثلث القائم الزاوية من الارتفاع",
        "blocks": [
          { "kind": "p", "text": "لنفترض أن مثلثًا قائم الزاوية له وتر طوله 10 م، وأن المسافة العمودية من زاوية القائمة إلى ذلك الوتر تساوي 4.8 م. فإن مساحته تُحسب مباشرة: [[K=(10\\times4.8)/2]]، [[[\\boxed{K=24\\text{ m}^2}]]]. يغطي المثلث 24 مترًا مربعًا من السطح المستوي." },
          { "kind": "p", "text": "هذه الحاسبة موجودة لهذه الحالة بالضبط. عندما تعرف أطول ضلع في المثلث القائم الزاوية، أي الوتر [[c]]، والارتفاع العمودي من رأس الزاوية القائمة إلى ذلك الضلع، [[h]]، فلن تحتاج إلى الضلعين القائمين. يعمل الوتر كقاعدة، ويعمل الارتفاع كالارتفاع العمودي المقابل له، ومساحة أي مثلث هي نصف حاصل ضرب قاعدة في ارتفاعها المقابل: [[K=ch/2]]." },
          { "kind": "p", "text": "يجب أن يلتقي الارتفاع بالوتر بزاوية قائمة؛ فأي قطعة مائلة غير عمودية تعطي ارتفاعًا خاطئًا ومساحة خاطئة. أدخل القياسين بوحدتي طول متطابقتين، وستعيد الحاسبة المساحة بالوحدات المربعة المقابلة، مع عرض كل خطوة تعويض." }
        ]
      },
      "sec-understand": {
        "h2": "فهم الوتر والارتفاع في المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "يستخدم هذا الدليل ترميزًا واحدًا متسقًا في كل أجزائه: [[A]] و[[B]] هما الزاويتان الحادتان، و[[C=90^\\circ]] هي الزاوية القائمة، والضلع [[a]] يقابل الزاوية [[A]]، والضلع [[b]] يقابل الزاوية [[B]]، والضلع [[c]] هو الوتر المقابل للزاوية [[C]]، و[[h]] هو الارتفاع العمودي من الرأس [[C]] إلى الوتر ملاقيًا إياه عند النقطة [[D]]، و[[p]] و[[q]] هما قطعتا الوتر [[AD]] و[[DB]]، و[[K]] هي المساحة." },
          { "kind": "h3", "text": "ما هو المثلث القائم الزاوية؟" },
          { "kind": "p", "text": "المثلث القائم الزاوية يحتوي على زاوية واحدة قياسها 90 درجة بالضبط. يلتقي الضلعان القائمان عند الزاوية القائمة، ويقع الوتر مقابلها. الوتر هو دائمًا أطول الأضلاع. أما الزاويتان الأخريان فحادتان، وبما أن مجموع الزوايا الثلاث 180 درجة، فإن [[A+B=90^\\circ]]. هذه الحقائق مهمة لأن طريقة الارتفاع تعتمد عليها: يجب أن تكون القاعدة هي الوتر، ويجب أن ينزل الارتفاع من رأس الزاوية القائمة." },
          { "kind": "h3", "text": "ما هو الوتر؟" },
          { "kind": "p", "text": "الوتر هو الضلع المقابل للزاوية القائمة، ويرمز له بـ [[c]] في الحاسبة. ولتحديده في أي اتجاه، ابحث عن الضلع الذي لا يلامس علامة الزاوية القائمة: ذلك الضلع هو الوتر. وفي صيغة الارتفاع يؤدي دور القاعدة، لذا فإن تحديده الصحيح هو أول مهارة يعلمها هذا الدليل." },
          { "kind": "h3", "text": "ما هو الارتفاع؟" },
          { "kind": "p", "text": "الارتفاع هو قطعة عمودية من رأس المثلث إلى الخط الحامل للضلع المقابل. وهنا يمتد الارتفاع [[h]] من رأس الزاوية القائمة [[C]] إلى الوتر [[AB]] ملاقيًا إياه عند النقطة [[D]]، أي أن [[CD\\perp AB]]. إنه مسافة عمودية، وليس مجرد أي خط يُرسم داخل المثلث: فقط القطعة التي تلتقي بالوتر بزاوية 90 درجة هي التي تستوفي الشرط." },
          { "kind": "h3", "text": "هل الارتفاع هو نفسه أحد الضلعين؟" },
          { "kind": "p", "text": "لا. يلتقي الضلعان القائمان [[a]] و[[b]] عند الزاوية القائمة الأصلية، بينما الارتفاع قطعة منفصلة من الرأس نفسه إلى الضلع المقابل. خذ مثلث 6-8-10: [[a=6]]، و[[b=8]]، و[[c=10]]. وارتفاعه هو [[h=(6\\times8)/10=4.8]]. لا يساوي أيٌّ من الضلعين 4.8، لكن الارتفاع إلى الوتر يساوي 4.8 بالضبط. والخلط بين الضلع والارتفاع من أكثر الأخطاء شيوعًا في هذه الصفحة." },
          { "kind": "h3", "text": "لماذا يقع الارتفاع داخل المثلث" },
          { "kind": "p", "text": "في المثلث القائم الزاوية غير المنحل، يسقط العمود من رأس الزاوية القائمة على الوتر بين طرفيه، ولا يقع خارجه أبدًا. وهو يقسم المثلث الأصلي إلى مثلثين قائمي الزاوية أصغر. يشترك هذان المثلثان مع المثلث الأصلي في قياسي الزاويتين الحادتين، مما يجعل المثلثات الثلاثة متشابهة فيما بينها. وهذا التشابه هو سبب استيفاء الارتفاع لعلاقات مرتبة كهذه، وهي موضع البحث في قسم الوسط الهندسي أدناه." }
        ],
        "imgAlt": "مثلث ABC قائم الزاوية: الضلعان a وb، والوتر c كقاعدة، والارتفاع h من C إلى D، والصيغة K = ch/2",
        "figcaption": "تشريح طريقة الارتفاع: الوتر c هو القاعدة، والارتفاع h يلاقيه بزاوية 90 درجة عند النقطة D، والمساحة هي K = ch/2."
      },
      "sec-formula": {
        "h2": "صيغة مساحة المثلث القائم الزاوية من الارتفاع",
        "blocks": [
          { "kind": "p", "text": "صيغة المساحة من الارتفاع هي [[[\\boxed{K=\\frac{ch}{2}}]]]. هنا [[K]] هي المساحة، و[[c]] هو الوتر الذي يعمل كقاعدة، و[[h]] هو الارتفاع العمودي على الوتر. ثلاثة رموز، وضرب واحد، وقسمة على اثنين." },
          { "kind": "h3", "text": "لماذا نضرب الوتر في الارتفاع؟" },
          { "kind": "p", "text": "الصيغة العامة لمساحة المثلث هي [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]، ويجب أن تكون القاعدة والارتفاع عموديين على بعضهما. اختيار الوتر كقاعدة يجبر الارتفاع على أن يكون المسافة العمودية إليه، وهو الارتفاع نفسه بالضبط: [[\\text{base}=c]] و[[\\text{height}=h]]، ومن ثم [[K=ch/2]]. وهذا صحيح مهما كان دوران المثلث أو رسمه: التعامد علاقة هندسية وليس اتجاه شاشة، فوتر مائل يعمل كقاعدة بنفس كفاءة الوتر الأفقي." },
          { "kind": "h3", "text": "لماذا نقسم الناتج على اثنين؟" },
          { "kind": "p", "text": "يشغل المثلث نصف متوازي الأضلاع المبني على القاعدة نفسها بالارتفاع العمودي نفسه. مع [[c=10]] و[[h=4.8]]، فإن الحاصل [[c\\times h=48]] هو مساحة متوازي الأضلاع. والمثلث نصفه، أي أن [[K=48/2=24]]. والإبلاغ عن 48 يجيب عن سؤال مختلف: مساحة متوازي الأضلاع الكامل، لا المثلث الذي بداخله." },
          { "kind": "h3", "text": "هل تعمل هذه الصيغة مع كل مثلث؟" },
          { "kind": "p", "text": "تعمل قاعدة القاعدة-الارتفاع مع كل مثلث، بشرط أن يكون الارتفاع عموديًا على القاعدة المختارة. وما يميز الأمر هنا هو اختيار القاعدة: وتر المثلث القائم الزاوية، مع إنزال الارتفاع من رأس الزاوية القائمة. وهذا الاختيار يجلب قيودًا هندسية إضافية، مثل أن الارتفاع لا يتجاوز نصف الوتر أبدًا، وهي قيود لا تنطبق على المثلثات العامة." },
          { "kind": "h3", "text": "لماذا لا تحتاج الصيغة إلى الضلعين" },
          { "kind": "p", "text": "تحتاج المساحة إلى ضلع واحد وارتفاعه العمودي المقابل، لا أكثر. وعندما تكون [[c]] و[[h]] معروفين سلفًا، لا يضيف الضلعان أي معلومة جديدة عن المساحة. وصيغة الضلعين [[K=ab/2]] ليست سوى طريق إدخال مختلف إلى الكمية نفسها، وهي مفيدة عندما تكون البيانات المقاسة هي الضلعين المتعامدين بدلًا من ذلك." }
        ],
        "imgAlt": "رسم يوضح أن مساحة المثلث هي نصف القاعدة في الارتفاع: c = 10 وh = 4.8 و10 × 4.8 = 48 والقسمة على 2 تعطي 24 وحدة مربعة",
        "figcaption": "حاصل ضرب c في h هو المستطيل الكامل؛ ويملأ المثلث نصفه بالضبط، ولهذا تقسم الصيغة على اثنين."
      },
      "sec-steps": {
        "h2": "مثال خطوة بخطوة لحساب المساحة من الارتفاع",
        "blocks": [
          { "kind": "p", "text": "حساب كامل واحد، من القياسات إلى الإجابة المتحقق منها، باستخدام [[c=10\\text{ m}]] و[[h=4.8\\text{ m}]]." }
        ],
        "steps": [
          "<strong>حدد القياسات المعطاة.</strong> الوتر هو [[c=10\\text{ m}]] والارتفاع العمودي عليه هو [[h=4.8\\text{ m}]]. تأكد من أن الارتفاع يلتقي بالوتر بزاوية قائمة.",
          "<strong>اكتب الصيغة.</strong> [[K=ch/2]].",
          "<strong>عوض بالقياسات.</strong> [[K=(10\\times4.8)/2]].",
          "<strong>اضرب.</strong> [[10\\times4.8=48]]، أي أن [[K=48/2]].",
          "<strong>اقسم على اثنين.</strong> [[[\\boxed{K=24\\text{ m}^2}]]].",
          "<strong>فسّر الإجابة.</strong> يغطي المثلث 24 مترًا مربعًا من المساحة المستوية.",
          "<strong>تحقق من الإمكانية.</strong> يتطلب المثلث القائم الزاوية الصحيح [[h\\leq c/2]]؛ وهنا [[4.8\\leq5]]، لذا يمكن أن تصف القياسات مثلثًا قائم الزاوية حقيقيًا.",
          "<strong>تحقق باستخدام الضلعين.</strong> مثلث 6-8-10 له الوتر والارتفاع نفسهما، و[[K=(6\\times8)/2=24]]. يتفق الطريقان."
        ]
      },
      "sec-howto": {
        "h2": "كيفية استخدام حاسبة مساحة المثلث القائم الزاوية من الارتفاع",
        "blocks": [
          { "kind": "p", "text": "تحتاج الحاسبة في هذه الصفحة إلى مدخلين اثنين فقط. يتبع الشرح أدناه الترتيب الظاهر على الشاشة، ليتمكن المستخدم الجديد من الانتقال من مثلث مرسوم أو مقاس إلى مساحة متحقق منها." }
        ],
        "steps": [
          "<strong>حدد المثلث القائم الزاوية.</strong> تأكد من أن إحدى الزوايا 90 درجة؛ فالطريقة تنطبق على المثلثات القائمة فقط.",
          "<strong>حدد وتره [[c]].</strong> إنه الضلع المقابل للزاوية القائمة وأطول الأضلاع.",
          "<strong>حدد الارتفاع العمودي [[h]].</strong> يمتد من رأس الزاوية القائمة إلى الوتر ويلاقيه بزاوية 90 درجة.",
          "<strong>قس القيمتين أو احصل عليهما.</strong> قس مباشرة، أو احسب الارتفاع أولًا بـ [[h=ab/c]] عندما يكون الضلعان معروفين.",
          "<strong>أدخل الوتر في حقل Hypotenuse c.</strong>",
          "<strong>أدخل الارتفاع في حقل Altitude h.</strong>",
          "<strong>اختر وحدتي طول متوافقتين.</strong> يجب أن يستخدم المدخلان الوحدة نفسها قبل تطبيق الصيغة.",
          "<strong>تأكد من أن القيمتين موجبتان.</strong> الأطوال الصفرية أو السالبة لا تصف أي مثلث.",
          "<strong>تحقق من أن [[h]] لا يتجاوز نصف الوتر.</strong> عند [[c=10]]، لا يمكن لأي ارتفاع فوق 5 أن ينتمي إلى مثلث قائم الزاوية بذلك الوتر.",
          "<strong>انقر Calculate Area.</strong>",
          "<strong>راجع نتيجة المساحة.</strong> تظهر بالوحدات المربعة المطابقة لوحدة الإدخال.",
          "<strong>اقرأ خطوات الحل المعروضة.</strong> فهي تعرض الصيغة والتعويض والحساب.",
          "<strong>افحص التصور المباشر.</strong> تأكد من أن وتر الرسم وارتفاعه يطابقان القياسات المقصودة.",
          "<strong>استخدم Reset لحساب جديد.</strong> فهو يمسح الحقلين ليبدأ الحساب التالي نظيفًا."
        ],
        "closingParagraphs": [
          "لا تطلب الحاسبة الضلعين ولا زاوية، لأن طريقة الارتفاع لا تحتاجهما فعلًا."
        ]
      },
      "sec-examples": {
        "h2": "أمثلة محلولة لمساحة المثلث القائم الزاوية من الوتر والارتفاع",
        "blocks": [
          { "kind": "p", "text": "تبني أربعة أمثلة محلولة هذه الطريقة انطلاقًا من مثلثات مألوفة. يحسب كل مثال الارتفاع من الضلعين عند الحاجة، ويطبق [[K=ch/2]]، ويتحقق تقاطعيًا مقابل صيغة الضلعين." },
          { "kind": "h3", "text": "المثال 1: مثلث قائم الزاوية 3-4-5" },
          { "kind": "p", "text": "المعطى [[a=3]]، و[[b=4]]، و[[c=5]]. الارتفاع هو [[h=ab/c]]، أي أن [[h=(3\\times4)/5=2.4]]. والمساحة هي [[K=(5\\times2.4)/2]]، [[[\\boxed{K=6\\text{ square units}}]]]. وبالتحقق بالضلعين، [[K=(3\\times4)/2=6]]. تصف الصيغتان المثلث نفسه، لذا يجب أن تتفقا، وهما متفقتان فعلًا." },
          { "kind": "h3", "text": "المثال 2: مثلث قائم الزاوية 5-12-13" },
          { "kind": "p", "text": "المعطى [[a=5]]، و[[b=12]]، و[[c=13]]. الارتفاع هو [[h=(5\\times12)/13=60/13\\approx4.61538]]. وبالاحتفاظ بالكسر الدقيق، [[K=(13\\times(60/13))/2]]، [[[\\boxed{K=30\\text{ square units}}]]]. إن الاحتفاظ بـ [[60/13]] بدلًا من عشري مقرب يجنّب خطأ التقريب المبكر: يلغي العدد 13 بعضه بعضًا تمامًا، فيبقى 30 نظيفة." },
          { "kind": "h3", "text": "المثال 3: مثلث قائم الزاوية 6-8-10" },
          { "kind": "p", "text": "المعطى [[c=10]] و[[h=4.8]] مباشرة. إذن [[K=(10\\times4.8)/2]]، [[[\\boxed{K=24\\text{ square units}}]]]. ومع الضلعين 6 و8، [[K=(6\\times8)/2=24]]، مما يؤكد طريق الارتفاع." },
          { "kind": "h3", "text": "المثال 4: مثلث قائم الزاوية متساوي الساقين" },
          { "kind": "p", "text": "المعطى [[c=10]] و[[h=5]]. إذن [[K=(10\\times5)/2]]، [[[\\boxed{K=25\\text{ square units}}]]]. هذه أكبر مساحة يمكن أن يمتلكها مثلث قائم الزاوية بوتر 10. ويساوي الارتفاع نصف الوتر فقط عندما يتساوى الضلعان، فتصبح كل زاوية حادة [[45^\\circ]]، ولا يمكن لأي مثلث قائم الزاوية صحيح بهذا الوتر أن يتجاوز 25 وحدة مربعة." }
        ]
      },
      "sec-applications": {
        "h2": "تطبيقات واقعية لمساحة المثلث القائم الزاوية من الارتفاع",
        "blocks": [
          { "kind": "p", "text": "تعرض اثنتا عشرة حالة محلولة الصيغة بمقاييس ووحدات مختلفة. تسمي كل حالة المثلث في المشهد، والقياسين، والتعويض، والمساحة، والافتراض الكامن وراء النموذج." },
          { "kind": "h3", "text": "المثال 1: قسم حديقة مثلث" },
          { "kind": "p", "text": "لقسم حديقة مثلث قائم الزاوية حدٌّ أطول طوله 10 م، والمسافة العمودية من زاوية القائمة إلى ذلك الحد 4.8 م. إذن [[c=10\\text{ m}]] و[[h=4.8\\text{ m}]]: [[K=(10\\times4.8)/2]]، [[[\\boxed{K=24\\text{ m}^2}]]]. يحتل القسم 24 مترًا مربعًا. وهذا يفترض أن الحد مستقيم وأن الزاوية قائمة حقًا." },
          { "kind": "h3", "text": "المثال 2: لوح خشب رقائقي مثلث" },
          { "kind": "p", "text": "للوح خشب رقائقي مثلث قائم الزاوية وتر طوله 1 م وارتفاع عمودي 0.48 م: [[K=(1\\times0.48)/2]]، [[[\\boxed{K=0.24\\text{ m}^2}]]]. هذه هي سطح الوجه الواحد المستوي، وهي مفيدة لتقديرات التغطية. أما هدر القطع وبدلات المواد فاعتبارات منفصلة." },
          { "kind": "h3", "text": "المثال 3: نافذة زجاجية مثلثة قائمة" },
          { "kind": "p", "text": "للوح زجاجي مثلث قائم الزاوية وتر طوله 1.3 م وارتفاع 0.6 م عمودي على ذلك الضلع: [[K=(1.3\\times0.6)/2]]، [[[\\boxed{K=0.39\\text{ m}^2}]]]. هذه هي مساحة الزجاج الهندسية قبل احتساب تغطية الإطار أو بدلات التركيب." },
          { "kind": "h3", "text": "المثال 4: مسح قسم مثلث" },
          { "kind": "p", "text": "يحتوي رسم مساحي على مثلث قائم الزاوية بوتر 13 م وارتفاع [[60/13]] م. وبالاحتفاظ بالكسر: [[K=(13\\times(60/13))/2]]، [[[\\boxed{K=30\\text{ m}^2}]]]. يمثل الرسم قسمًا مساحته 30 مترًا مربعًا. وقد يظل العمل الميداني الفعلي بحاجة إلى تصحيحات الأجهزة تتجاوز المخطط." },
          { "kind": "h3", "text": "المثال 5: قياس بلاطة مثلثة" },
          { "kind": "p", "text": "لبلاطة مثلثة قائمة الزاوية وتر طوله 25 سم وارتفاع عمودي 6.72 سم: [[K=(25\\times6.72)/2]]، [[[\\boxed{K=84\\text{ cm}^2}]]]. تغطي البلاطة الواحدة 84 سنتيمترًا مربعًا، مما يساعد على تقدير عدد البلاطات التي يحتاجها سطح ما. وتُحسب فجوات الجص وخسائر القطع على حدة." },
          { "kind": "h3", "text": "المثال 6: لوح دعم فولاذي" },
          { "kind": "p", "text": "للوح دعم مسطح مثلث قائم الزاوية وتر طوله 1.7 م وضلعاه 0.8 م و1.5 م. وارتفاعه هو [[h=(0.8\\times1.5)/1.7=12/17]] م. إذن [[K=(1.7\\times(12/17))/2]]، [[[\\boxed{K=0.6\\text{ m}^2}]]]. هذه هي مساحة اللوح الهندسية، لا قدرته على تحمل الأحمال." },
          { "kind": "h3", "text": "المثال 7: لوح جانبي لمنحدر مثلث" },
          { "kind": "p", "text": "يشكل لوح جانبي مبسط لمنحدر مثلثًا قائم الزاوية بوتر طوله 5 م وارتفاع عمودي 2.4 م على ذلك الوتر: [[K=(5\\times2.4)/2]]، [[[\\boxed{K=6\\text{ m}^2}]]]. هذه هي المساحة المستوية للمقطع الجانبي المثلث، لا سطح المنحدر المائل، والحساب لا يثبت الامتثال لمعايير إمكانية الوصول." },
          { "kind": "h3", "text": "المثال 8: قسم جملون سقف" },
          { "kind": "p", "text": "لقسم جملون سقف مثلث قائم الزاوية وتر طوله 6.5 م وارتفاع عمودي [[30/13]] م: [[K=(6.5\\times(30/13))/2]]، [[[\\boxed{K=7.5\\text{ m}^2}]]]. تصف النتيجة المستوي المثلث الذي تحددها القياسات. أما المساحة السطحية الكلية لسقف حقيقي فهي مسألة قياس ثلاثية الأبعاد منفصلة." },
          { "kind": "h3", "text": "المثال 9: قطعة أرض مثلثة قائمة" },
          { "kind": "p", "text": "لقسم أرض مثلث قائم الزاوية وتر طوله 50 م وارتفاع عمودي 24 م: [[K=(50\\times24)/2]]، [[[\\boxed{K=600\\text{ m}^2}]]]. تحصر الحدود المقاسة 600 متر مربع. وقد يظل الرقم الرسمي للمساحة بحاجة إلى تحقق مساحي." },
          { "kind": "h3", "text": "المثال 10: قطعة مسح مثلثة كبيرة" },
          { "kind": "p", "text": "لقسم مثلث قائم الزاوية ممسوح وتره 100 م وارتفاعه العمودي 48 م: [[K=(100\\times48)/2]]، [[[\\boxed{K=2400\\text{ m}^2}]]]. هذه هي المساحة المستوية للمقطع المثلث. وهي تمثل العقار كله فقط عندما يتكون العقار من ذلك المثلث وحده." },
          { "kind": "h3", "text": "المثال 11: قسم شراع مثلث" },
          { "kind": "p", "text": "لتصميم شراع مسطح مثلث قائم الزاوية وتره 15 قدمًا وارتفاعه العمودي 7.2 قدم: [[K=(15\\times7.2)/2]]، [[[\\boxed{K=54\\text{ ft}^2}]]]. هذه هي المساحة المستوية للشراع المثالي. أما القماش المنحني والدرزات وبدلات الحواف فتتطلب اعتبارًا منفصلًا." },
          { "kind": "h3", "text": "المثال 12: دعامة ميكانيكية صغيرة" },
          { "kind": "p", "text": "لدعامة مسطحة مثلثة قائمة الزاوية وترها 250 مم وارتفاعها العمودي 120 مم: [[K=(250\\times120)/2]]، [[[\\boxed{K=15000\\text{ mm}^2}]]]. والإجابة بالمليمترات المربعة لأن المدخلات بالمليمترات. وبما أن [[1\\text{ cm}^2=100\\text{ mm}^2]]، فهذا يساوي [[[\\boxed{150\\text{ cm}^2}]]]. تحويل الوحدة الخطية وتحويل الوحدة المربعة عمليتان مختلفتان، كما يشرح قسم الوحدات." },
          { "kind": "h3", "text": "مقارنة الأمثلة العملية" }
        ],
        "table": {
          "headers": ["الحالة العملية", "الوتر c", "الارتفاع h", "الصيغة", "المساحة المحسوبة", "التفسير العملي"],
          "rows": [
            ["قسم الحديقة", "10 م", "4.8 م", "[[K=ch/2]]", "24 م²", "سطح الزراعة"],
            ["لوح الخشب الرقائقي", "1 م", "0.48 م", "[[K=ch/2]]", "0.24 م²", "تغطية المواد بلا هدر"],
            ["النافذة الزجاجية", "1.3 م", "0.6 م", "[[K=ch/2]]", "0.39 م²", "مساحة الزجاج قبل الإطار"],
            ["رسم المسح", "13 م", "60/13 م", "[[K=ch/2]]", "30 م²", "مساحة القسم في المخطط"],
            ["البلاطة", "25 سم", "6.72 سم", "[[K=ch/2]]", "84 سم²", "سطح البلاطة الواحدة"],
            ["اللوح الفولاذي", "1.7 م", "12/17 م", "[[K=ch/2]]", "0.6 م²", "هندسة لا قدرة تحمل"],
            ["اللوح الجانبي للمنحدر", "5 م", "2.4 م", "[[K=ch/2]]", "6 م²", "المقطع الجانبي لا سطح المنحدر"],
            ["جملون السقف", "6.5 م", "30/13 م", "[[K=ch/2]]", "7.5 م²", "مقطع مثلث"],
            ["قطعة الأرض", "50 م", "24 م", "[[K=ch/2]]", "600 م²", "المساحة المحصورة، تحقق بالمسح"],
            ["قطعة المسح", "100 م", "48 م", "[[K=ch/2]]", "2400 م²", "القسم لا العقار كله"],
            ["قسم الشراع", "15 قدمًا", "7.2 قدم", "[[K=ch/2]]", "54 قدم²", "شراع مسطح مثالي"],
            ["الدعامة", "250 مم", "120 مم", "[[K=ch/2]]", "15000 مم²", "يساوي 150 سم²"]
          ]
        },
        "imgAlt": "أربعة أمثلة واقعية: حديقة ولوح زجاجي وقطعة أرض ودعامة، يعرض كل منها الوتر c والارتفاع h والمساحة المحسوبة",
        "figcaption": "الصيغة نفسها بأربعة مقاييس: حديقة ولوح زجاجي وقطعة أرض ودعامة آلية."
      },
      "sec-equal": {
        "h2": "لماذا تعطي صيغتا مساحة المثلث القائم الزاوية الإجابة نفسها",
        "blocks": [
          { "kind": "p", "text": "يمكن قياس المثلث القائم الزاوية عبر ضلعيه القائمين المتعامدين أو عبر وتره وارتفاعه. صيغة الضلعين هي [[K=ab/2]] وصيغة الارتفاع هي [[K=ch/2]]. وبما أن كليهما يصف مساحة المثلث نفسه، فإن [[\\frac{ab}{2}=\\frac{ch}{2}]]. وبضرب الطرفين في اثنين: [[ab=ch]]. وبحل المعادلة لـ [[h]]: [[[\\boxed{h=\\frac{ab}{c}}]]]. الارتفاع هو حاصل ضرب الضلعين مقسومًا على الوتر، ولهذا لا يمكن أن تختلف الصيغتان أبدًا على مثلث متسق." },
          { "kind": "p", "text": "تحقق عددي: عند [[a=6]]، و[[b=8]]، و[[c=10]]، يكون الارتفاع [[h=(6\\times8)/10=4.8]]. بالضلعين: [[K=(6\\times8)/2=24]]. بالارتفاع: [[K=(10\\times4.8)/2=24]]. المثلث نفسه، والمساحة نفسها، وطريقان." },
          { "kind": "p", "text": "عندما يكون الوتر والارتفاع فقط هما المعروفين، تكون المساحة محددة سلفًا: لا حاجة لإعادة بناء الضلعين أولًا. ولا يزال بالإمكان استعادة طولي الضلعين من [[c]] و[[h]] الصحيحين عبر علاقات القطع أدناه، لكنه حساب منفصل عن إيجاد المساحة. وعندما يكون الضلعان هما البيانات المعروفة بدلًا من ذلك، فإن <a href=\"/right-triangle-area-from-legs-calculator/\">حاسبة مساحة المثلث القائم الزاوية من الضلعين</a> تأخذهما مباشرة." }
        ]
      },
      "sec-geomean": {
        "h2": "كيف يقسم الارتفاع المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "يلتقي الارتفاع بالوتر عند [[D]]، فيقسمه إلى القطعتين [[AD=p]] و[[DB=q]]، أي أن [[p+q=c]]. يخلق هذا التقسيم مثلثين قائمي الزاوية أصغر متداخلين داخل المثلث الأصلي، ونسبهما مرتبة بشكل لافت." },
          { "kind": "h3", "text": "مثلثان قائما الزاوية أصغر متشابهان" },
          { "kind": "p", "text": "يقسم الارتفاع المثلث الأصلي إلى مثلثين قائمي الزاوية أصغر، يشترك كل منهما مع المثلث الأصلي في زاوية حادة واحدة ويحتوي على زاوية قائمة. ويجعل اشتراك قياسي زاويتين المثلثات الثلاثة متشابهة. وهذا التشابه هو ما يفرض العلاقات النسبية النظيفة بين الارتفاع والقطع والضلعين." },
          { "kind": "h3", "text": "نظرية الوسط الهندسي للارتفاع" },
          { "kind": "p", "text": "يعطي التشابه [[[\\boxed{h^2=pq}]]]، أو ما يكافئه [[[\\boxed{h=\\sqrt{pq}}]]]. الارتفاع هو الوسط الهندسي لقطعتي الوتر: مربعه يساوي حاصل ضربهما. مثال محلول: مع [[p=6.4]] و[[q=3.6]]، [[c=p+q=10]]، و[[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]]، [[[\\boxed{h=4.8}]]]. وتتبع المساحة: [[K=(10\\times4.8)/2]]، [[[\\boxed{K=24\\text{ square units}}]]]. تتحقق نظرية القطع من ارتفاع قيس أو حُسب بطريقة أخرى." },
          { "kind": "h3", "text": "العلاقة بين القطع والضلعين" },
          { "kind": "p", "text": "ينتج عن التشابه نفسه [[b^2=cp]] و[[a^2=cq]]. ومع [[c=10]]، و[[p=6.4]]، و[[q=3.6]]: [[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]] و[[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]. يُستعاد مثلث 6-8-10 الأصلي بدقة، مما يبين مدى الترابط الوثيق بين القطع والارتفاع والضلعين." }
        ]
      },
      "sec-max": {
        "h2": "كم يمكن أن يكون ارتفاع المثلث القائم الزاوية؟",
        "blocks": [
          { "kind": "p", "text": "ليس كل زوج من الأعداد الموجبة يمكن أن يكون وترًا وارتفاعًا. ففي المثلث القائم الزاوية الصحيح غير المنحل، [[[\\boxed{0<h\\leq\\frac{c}{2}}]]]. يجب أن يكون الارتفاع موجبًا ولا يمكن أن يتجاوز نصف الوتر أبدًا." },
          { "kind": "h3", "text": "لماذا لا يمكن أن يتجاوز الارتفاع نصف الوتر" },
          { "kind": "p", "text": "من [[h^2=pq]] مع [[p+q=c]]، يكون الحاصل [[pq]] أكبر ما يمكن عندما تتساوى القطعتان، [[p=q=c/2]]. ومن ثم [[h^2\\leq c^2/4]]، وللأطوال الموجبة [[h\\leq c/2]]. وبعبارة بسيطة: يكون الارتفاع أطول ما يمكن عندما يقسم الوتر إلى نصفين متساويين، وحتى حينها لا يبلغ إلا نصف الوتر." },
          { "kind": "h3", "text": "المساحة القصوى لوتر ثابت" },
          { "kind": "p", "text": "بما أن [[K=ch/2]] و[[h\\leq c/2]]، فإن أكبر مساحة ممكنة هي [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]. تنتمي هذه القصوى إلى المثلث القائم الزاوية متساوي الساقين، حيث يتساوى الضلعان. ومع [[c=10]]، يكون أطول ارتفاع صحيح [[h_{\\max}=5]]، فيعطي [[K_{\\max}=(10\\times5)/2=25]]. وارتفاع 6 مع وتر 10 مستحيل في مثلث قائم الزاوية." },
          { "kind": "h3", "text": "ماذا يحدث إذا كان الارتفاع كبيرًا جدًا؟" },
          { "kind": "p", "text": "خذ [[c=10]] و[[h=6]]: [[6>5]]، فلا يوجد مثلث قائم الزاوية بهذه القياسات. الحساب [[(10\\times6)/2=30]] مساحة صحيحة لمثلث ما في سياق أعم، لكنه لا يجعل [[c=10]] و[[h=6]] مدخلًا صحيحًا لمثلث قائم الزاوية. لا تدعي هذه الصفحة أن الحاسبة ترفض مثل هذا الإدخال تلقائيًا؛ فالتحقق مهمتك أنت." },
          { "kind": "h3", "text": "هل يمكن أن يساوي الارتفاع نصف الوتر؟" },
          { "kind": "p", "text": "نعم. تعطي المساواة المثلث القائم الزاوية متساوي الساقين بضلعين متساويين، وهو مثلث صحيح غير منحل. إنها الحالة الحدية، لا الحالة المعطوبة." }
        ],
        "imgAlt": "رسم من جزأين: مثلث 6-8-10 يقسم الارتفاع وتره إلى p = 6.4 وq = 3.6، ومثلث متساوي الساقين بأقصى ارتفاع c/2",
        "figcaption": "يسارًا: الارتفاع هو الوسط الهندسي لقطعتي الوتر. يمينًا: أطول ارتفاع ممكن هو نصف الوتر، ويعطي المساحة القصوى."
      },
      "sec-find-altitude": {
        "h2": "كيفية حساب الارتفاع عندما يكون مجهولًا",
        "blocks": [
          { "kind": "p", "text": "تأخذ هذه الحاسبة [[h]] كمدخل، لذا يجب إيجاد الارتفاع المجهول أو قياسه أولًا. تغطي ثلاثة طرق معيارية الحالات الشائعة. وعندما تكون الأضلاع معروفة والارتفاع هو القطعة المفقودة، فإن <a href=\"/right-triangle-altitude-from-sides-calculator/\">حاسبة ارتفاع المثلث القائم الزاوية من الأضلاع</a> تحسبه مباشرة." },
          { "kind": "h3", "text": "الطريقة 1: باستخدام الضلعين والوتر" },
          { "kind": "p", "text": "[[[\\boxed{h=\\frac{ab}{c}}]]]. مع [[a=6]]، و[[b=8]]، و[[c=10]]: [[h=(6\\times8)/10=4.8]]." },
          { "kind": "h3", "text": "الطريقة 2: باستخدام قطعتي الوتر" },
          { "kind": "p", "text": "[[[\\boxed{h=\\sqrt{pq}}]]]. مع [[p=6.4]] و[[q=3.6]]: [[h=\\sqrt{23.04}=4.8]]." },
          { "kind": "h3", "text": "الطريقة 3: باستخدام المساحة والوتر المعروفين" },
          { "kind": "p", "text": "إعادة ترتيب [[K=ch/2]] تعطي [[[\\boxed{h=\\frac{2K}{c}}]]]. مع [[K=24]] و[[c=10]]: [[h=(2\\times24)/10=4.8]]." },
          { "kind": "p", "text": "هذه إعادة ترتيبات رياضية، لا أوضاع حاسبة إضافية: فحاسبة المساحة من الارتفاع نفسها ما زالت تتوقع الارتفاع كمدخل." }
        ]
      },
      "sec-units": {
        "h2": "فهم الوحدات المربعة في حسابات مساحة المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "المساحة ثنائية الأبعاد. وضرب طولين يضرب وحدتيهما أيضًا: [[\\text{m}\\times\\text{m}=\\text{m}^2]]. وحدة المساحة هي دائمًا مربع وحدة الطول." },
          { "kind": "h3", "text": "الأمتار المربعة" },
          { "kind": "p", "text": "مع [[c=10\\text{ m}]] و[[h=4.8\\text{ m}]]، [[K=24\\text{ m}^2]]. اقرأها 24 مترًا مربعًا من السطح." },
          { "kind": "h3", "text": "السنتيمترات المربعة" },
          { "kind": "p", "text": "مع [[c=25\\text{ cm}]] و[[h=6.72\\text{ cm}]]، [[K=84\\text{ cm}^2]]." },
          { "kind": "h3", "text": "المليمترات المربعة" },
          { "kind": "p", "text": "مع [[c=250\\text{ mm}]] و[[h=120\\text{ mm}]]، [[K=15000\\text{ mm}^2]]." },
          { "kind": "h3", "text": "تحويل وحدات المساحة" },
          { "kind": "p", "text": "[[1\\text{ m}^2=10000\\text{ cm}^2]] و[[1\\text{ cm}^2=100\\text{ mm}^2]]. التحويل الخطي يضرب في 10 أو 100 أو 1000، لكن تحويل المساحة يربع ذلك العامل: 100 سم في المتر تصبح [[100^2=10000]] سنتيمتر مربع في المتر المربع. تحويل الطول وتحويل المساحة عمليتان مختلفتان." },
          { "kind": "h3", "text": "ماذا لو استخدمت المدخلات وحدات مختلفة؟" },
          { "kind": "p", "text": "حوّل أولًا، ثم احسب. الوتر بالأمتار والارتفاع بالسنتيمترات يجب توحيدهما إلى وحدة واحدة، فمثلًا 2 م و150 سم يصبحان 2 م و1.5 م، قبل تطبيق الصيغة. الوحدات المختلطة في الصيغة تنتج رقمًا بلا معنى ولا وحدة نظيفة." }
        ]
      },
      "sec-mistakes": {
        "h2": "الأخطاء الشائعة عند استخدام صيغة المساحة من الارتفاع",
        "blocks": [
          { "kind": "p", "text": "معظم الإجابات الخاطئة في هذه الصفحة تأتي من مدخلات مسماة خطأ، لا من حساب سيئ. تغطي الأخطاء الثمانية عشر أدناه كلها تقريبًا." },
          { "kind": "h3", "text": "1. استخدام ضلع بدلًا من الارتفاع" },
          { "kind": "p", "text": "ينزل الارتفاع [[h]] من رأس الزاوية القائمة إلى الوتر؛ بينما يمتد الضلع على حافة المثلث. في مثلث 6-8-10، إدخال الضلع 6 كارتفاع يعطي [[(10\\times6)/2=30]] بدلًا من 24. الحل: يجب أن يسقط الارتفاع على الوتر مع علامة الزاوية القائمة." },
          { "kind": "h3", "text": "2. الخلط بين الارتفاع والوتر" },
          { "kind": "p", "text": "تبديل [[c]] و[[h]] يغير معنى الحاصل. مع [[c=10]] و[[h=4.8]]، تتبادل الأعداد في الضرب، لكن فحص الإمكانية [[h\\leq c/2]] ينهار: الإدخال المبدل يدعي ارتفاعًا 10 على وتر 4.8، وهو مستحيل. الحل: الوتر هو دائمًا أطول ضلع." },
          { "kind": "h3", "text": "3. رسم الارتفاع من الرأس الخطأ" },
          { "kind": "p", "text": "فقط الارتفاع من رأس الزاوية القائمة [[C]] يقترن بالوتر كقاعدته. العمود من رأس حاد يسقط على ضلع لا على الوتر، ولا ينتمي إلى هذه الصيغة. الحل: ابدأ من الزاوية المربعة." },
          { "kind": "h3", "text": "4. قياس الارتفاع بزاوية غير عمودية" },
          { "kind": "p", "text": "أي قطعة غير عمودية من [[C]] إلى الوتر أطول من الارتفاع الحقيقي، فتخرج المساحة أكبر مما يجب. الحل: تحقق من الالتقاء بزاوية 90 درجة، بالإنشاء أو بـ [[h=ab/c]]." },
          { "kind": "h3", "text": "5. استخدام ارتفاع يقابل قاعدة مختلفة" },
          { "kind": "p", "text": "يقترن الارتفاع إلى الوتر بالوتر فقط. وإقرانه بضلع، كما في [[(8\\times4.8)/2=19.2]]، يخلط زوجي قاعدة-ارتفاع مختلفين. الحل: لكل ارتفاع قاعدة واحدة بالضبط." },
          { "kind": "h3", "text": "6. نسيان القسمة على اثنين" },
          { "kind": "p", "text": "[[10\\times4.8=48]] هي مساحة متوازي الأضلاع، لا مساحة المثلث. الحل: اختم كل حساب قاعدة-ارتفاع بالقسمة على اثنين." },
          { "kind": "h3", "text": "7. ضرب أطوال بوحدات غير متوافقة" },
          { "kind": "p", "text": "وتر 2 م مع ارتفاع 150 سم ليس [[(2\\times150)/2=150]] لأي شيء ذي معنى. الحل: حوّل إلى وحدة واحدة أولًا، هنا 2 م و1.5 م، فيعطي 1.5 م²." },
          { "kind": "h3", "text": "8. الإبلاغ عن الإجابة بوحدات خطية" },
          { "kind": "p", "text": "مساحة 24 م² ليست 24 م. الحل: اكتب الوحدة المربعة مع الرقم دائمًا." },
          { "kind": "h3", "text": "9. إدخال أطوال صفرية أو سالبة" },
          { "kind": "p", "text": "يشترط [[c>0]] و[[h>0]]؛ فالمدخلات الصفرية أو السالبة لا تصف أي مثلث. الحل: أعد القياس." },
          { "kind": "h3", "text": "10. إدخال ارتفاع أكبر من نصف الوتر" },
          { "kind": "p", "text": "[[c=10]] و[[h=6]] يخالفان [[h\\leq c/2]]. الحل: أعد فحص أي قطعة قستها؛ فهي لم تكن الارتفاع العمودي." },
          { "kind": "h3", "text": "11. افتراض أن كل زوج موجب يشكل مثلثًا قائم الزاوية" },
          { "kind": "p", "text": "الإيجابية وحدها لا تكفي؛ فيجب أن يتحقق حد الارتفاع أيضًا. الحل: نفذ فحص [[h\\leq c/2]] مع كل زوج جديد." },
          { "kind": "h3", "text": "12. الخلط بين الارتفاع والضلع العمودي" },
          { "kind": "p", "text": "في الرسم قد يبدو الارتفاع عموديًا بينما يبدو الضلع مائلًا، أو العكس بعد الدوران. العمودية على الشاشة لا تعني شيئًا. الحل: حدد الأضلاع بدورها الهندسي لا باتجاهها على الشاشة." },
          { "kind": "h3", "text": "13. تقريب الارتفاع مبكرًا جدًا" },
          { "kind": "p", "text": "استخدام 4.6 بدلًا من [[60/13\\approx4.61538]] ثم الحساب يعطي مساحة خاطئة قليلًا، بينما يلغي الكسر الدقيق بعضه بعضًا بنظافة ليبقى 30. الحل: احتفظ بالدقة الكاملة حتى الإجابة النهائية." },
          { "kind": "h3", "text": "14. افتراض أن الوتر يجب أن يكون أفقيًا" },
          { "kind": "p", "text": "يمكن أن يقع الوتر بأي زاوية؛ فالصيغة تستخدم الأطوال لا الاتجاهات. الحل: ثق بالقياسات لا بدوران الرسم." },
          { "kind": "h3", "text": "15. الخلط بين نظرية الارتفاع ونظرية فيثاغورس" },
          { "kind": "p", "text": "[[h^2=pq]] تربط الارتفاع بقطعتي الوتر؛ و[[a^2+b^2=c^2]] تربط الأضلاع الثلاثة. تجيب كل منهما عن سؤال مختلف. الحل: طابق النظرية مع الكميات التي تملكها." },
          { "kind": "h3", "text": "16. استخدام ارتفاع مقاس من مثلث مختلف" },
          { "kind": "p", "text": "ينتمي الارتفاع إلى مثلث محدد واحد. استعارة 4.8 من مثلث 6-8-10 لوتر مختلف تعطي مساحة خاطئة. الحل: يستخدم كل حساب قياسات مثلثه." },
          { "kind": "h3", "text": "17. افتراض أن المساحة تحدد كل طول ضلع" },
          { "kind": "p", "text": "تشترك مثلثات قائمة زاوية مختلفة كثيرة في مساحة واحدة. معرفة [[K=24]] لا تحدد [[c]] ولا [[h]] كلًا على حدة. الحل: عامل المساحة كمعادلة واحدة لا كوصف كامل." },
          { "kind": "h3", "text": "18. معاملة المساحة الهندسية كمادة دقيقة للشراء" },
          { "kind": "p", "text": "تعطي الصيغة المساحة الهندسية المثالية. تحتاج المشاريع الحقيقية إلى الهدر والتداخلات وبدلات القطع فوقها. الحل: أضف هامش المشروع بعد انتهاء الهندسة." },
          { "kind": "h3", "text": "خطأ مقابل صواب: مثال ملموس" },
          { "kind": "p", "text": "مع [[c=10]] و[[h=4.8]]، يتخطى الحساب الخاطئ القسمة على اثنين: [[K=10\\times4.8=48]]. تلك هي مساحة متوازي الأضلاع المقابل. والحساب الصحيح هو [[K=(10\\times4.8)/2]]، [[[\\boxed{K=24}]]]. وتوضيح ثانٍ: تعويض الضلع 8 مكان الارتفاع يعطي [[(10\\times8)/2=40]]، وهو خطأ لأن 8 ليست عمودية على الوتر. الارتفاع، وحده الارتفاع، هو الذي يقترن بـ [[c]]." }
        ]
      },
      "sec-verify": {
        "h2": "كيفية التحقق من صحة حساب المساحة",
        "blocks": [
          { "kind": "p", "text": "تلتقط سبعة فحوصات الغالبية العظمى من النتائج السيئة قبل أن تغادر الصفحة." },
          { "kind": "h3", "text": "الفحص 1: مدخلات موجبة" },
          { "kind": "p", "text": "في المثلث القائم الزاوية الصحيح، [[c>0]] و[[h>0]]. الأطوال الصفرية أو السالبة لا تصف أي مثلث." },
          { "kind": "h3", "text": "الفحص 2: حد الارتفاع" },
          { "kind": "p", "text": "تأكد من [[h\\leq c/2]]. تستبعد هذه المتباينة الواحدة أكثر المدخلات المستحيلة شيوعًا، مثل [[c=10]] مع [[h=6]]." },
          { "kind": "h3", "text": "الفحص 3: تأكيد الزاوية القائمة" },
          { "kind": "p", "text": "يجب أن يكون الارتفاع عموديًا على الوتر. فإذا تعذر على الرسم أو القياس تأكيد الالتقاء بزاوية 90 درجة، فالمدخل ليس ارتفاعًا." },
          { "kind": "h3", "text": "الفحص 4: الوحدات المربعة" },
          { "kind": "p", "text": "المدخلات بالأمتار تعطي أمتارًا مربعة، والمدخلات بالسنتيمترات تعطي سنتيمترات مربعة. وحدة الإجابة هي مربع وحدة الإدخال، وليست وحدة الإدخال نفسها أبدًا." },
          { "kind": "h3", "text": "الفحص 5: التحقق التقاطعي بصيغة الضلعين" },
          { "kind": "p", "text": "في مثلث 6-8-10، [[(6\\times8)/2=24]] و[[(10\\times4.8)/2=24]]. طريقتان، ومثلث واحد، وإجابة واحدة: الاتفاق هو أقوى تحقق متاح." },
          { "kind": "h3", "text": "الفحص 6: علاقة الوسط الهندسي" },
          { "kind": "p", "text": "عندما تكون قطعتا الوتر معروفتين، تحقق من [[h^2=pq]]: [[4.8^2=6.4\\times3.6]]، [[23.04=23.04]]. أي عدم تطابق يعني أن الارتفاع أو القطع أو تحديد المثلث خطأ." },
          { "kind": "h3", "text": "الفحص 7: المقارنة مع أقصى مساحة ممكنة" },
          { "kind": "p", "text": "لوتر ثابت، [[K\\leq c^2/4]]. مع [[c=10]]، أي مساحة مثلث قائم زاوية مدعاة فوق 25 وحدة مربعة مستحيلة. لا تدعي هذه الصفحة شيئًا عن سلوك التحقق في الحاسبة نفسها؛ فالفحص مهمتك أنت." }
        ]
      },
      "sec-compare": {
        "h2": "المساحة من الارتفاع مقابل المساحة من الضلعين",
        "blocks": [
          { "kind": "p", "text": "صيغتان ومساحة واحدة. [[K=ab/2]] تحتاج إلى الضلعين القائمين المتعامدين؛ و[[K=ch/2]] تحتاج إلى الوتر وارتفاعه. لا إحداهما أصح؛ فهما الكمية نفسها من قياسات مختلفة." }
        ],
        "table": {
          "headers": ["الطريقة", "القياسات المطلوبة", "الميزة الرئيسية"],
          "rows": [
            ["المساحة من الضلعين", "[[a]]، [[b]]", "الأبسط عندما يكون الضلعان معروفين"],
            ["المساحة من الارتفاع", "[[c]]، [[h]]", "مباشرة عندما يكون الوتر والارتفاع العمودي معروفين"],
            ["المساحة من الزاوية", "الأضلاع المناسبة والزاوية المحصورة", "مفيدة عندما تكون الزاوية الحادة معروفة"],
            ["المساحة من نصف قطر الدائرة الداخلية", "[[r]]، [[s]]", "مفيدة في مسائل الدائرة الداخلية ونصف المحيط"]
          ]
        },
        "closingParagraphs": [
          "لا تتغير مساحة المثلث القائم الزاوية نفسه عند استخدام طريقة صحيحة أخرى. اختر الصف الذي يطابق الأرقام التي في يدك؛ وعند توفر صفين، يكون اتفاقهما فحص صحة مجانيًا."
        ]
      },
      "sec-conclusion": {
        "h2": "الوتر وارتفاعه هما كل ما تحتاج",
        "blocks": [
          { "kind": "p", "text": "طريقة الارتفاع هي قاعدة القاعدة-الارتفاع موجهة إلى أطول ضلع. وبمجرد تحديد الوتر والحصول على الارتفاع العمودي، تصبح المساحة على بعد ضرب واحد وقسمة على اثنين، دون حاجة لاستعادة الضلعين أولًا." },
          { "kind": "p", "text": "تكمن قوتها الحقيقية في الانضباط: التعامد، وحد الارتفاع، وعلاقات الوسط الهندسي تحول رسومات المثلثات الغامضة إلى أرقام قابلة للفحص. نفذ الفحوصات، وقارن بصيغة الضلعين عندما تكون الضلعان متاحين، وستكسب الإجابة ثقتها." },
          { "kind": "p", "text": "احتفظ بحاسبة هذه الصفحة للحالات التي يكون فيها الوتر والارتفاع هما البيانات المقاسة، والجأ إلى حاسبات الضلعين أو الزاوية أو نصف المحيط عندما تشير القياسات إلى مكان آخر." }
        ]
      }
    },
    "faqs": [
      { "question": "ما صيغة مساحة المثلث القائم الزاوية باستخدام الارتفاع؟", "answer": "الصيغة هي K = ch/2، حيث c هو الوتر وh هو الارتفاع العمودي من رأس الزاوية القائمة إلى الوتر. اضرب الطولين واقسم على اثنين. تكون النتيجة بالوحدات المربعة المطابقة للمدخلات، فمدخلات الأمتار تعطي أمتارًا مربعة. ويجب أن يلتقي الارتفاع بالوتر بزاوية 90 درجة لتنطبق الصيغة." },
      { "question": "ماذا يعني الارتفاع h في المثلث القائم الزاوية؟", "answer": "الارتفاع h هو القطعة العمودية من رأس الزاوية القائمة C إلى الوتر، ملاقية إياه عند النقطة D. وهو أقصر مسافة من ذلك الرأس إلى الوتر، والارتفاع الذي يقترن بالوتر كقاعدة. وهو ليس ضلعًا، وليس مجرد أي خط يُرسم داخل المثلث." },
      { "question": "هل الارتفاع هو نفسه أحد الضلعين؟", "answer": "لا. يشكل الضلعان a وb الزاوية القائمة، بينما الارتفاع قطعة منفصلة من ذلك الرأس إلى الضلع المقابل. في مثلث 6-8-10 يكون الارتفاع 4.8، وهو لا يساوي أي ضلع. وإدخال ضلع مكان الارتفاع من أكثر الأخطاء شيوعًا عند استخدام هذه الصيغة." },
      { "question": "لماذا يمكن استخدام الوتر كقاعدة؟", "answer": "يمكن لأي ضلع في المثلث أن يعمل كقاعدة متى عُرف ارتفاعه العمودي المقابل. وبالنسبة للوتر، يكون ذلك الارتفاع هو الارتفاع من رأس الزاوية القائمة. وبما أنهما متعامدان، تنطبق قاعدة نصف القاعدة في الارتفاع العامة مباشرة، فينتج عن ذلك K = ch/2." },
      { "question": "لماذا نقسم حاصل ضرب الوتر والارتفاع على اثنين؟", "answer": "حاصل ضرب c في h هو مساحة متوازي الأضلاع المبني على القاعدة نفسها بالارتفاع نفسه. يملأ المثلث نصف متوازي الأضلاع بالضبط، لذا يجب قسمة الحاصل. وتخطي القسمة يجيب عن سؤال مختلف: مع c = 10 وh = 4.8، فإن 48 هي متوازي الأضلاع بينما 24 هي المثلث." },
      { "question": "كيف تجد الارتفاع إذا كان الضلعان معروفين؟", "answer": "استخدم h = ab/c. اضرب الضلعين واقسم على الوتر، الذي يمكن الحصول عليه من نظرية فيثاغورس عند الحاجة. فمع الضلعين 6 و8 والوتر 10، يكون h = 48/10 = 4.8. وتجري حاسبة الارتفاع من الأضلاع في هذا الموقع هذا الحساب بالضبط عندما تكون الأضلاع معروفة." },
      { "question": "ما نظرية الوسط الهندسي لارتفاع المثلث القائم الزاوية؟", "answer": "تنص على أن h مربعًا يساوي p في q، حيث p وq هما القطعتان اللتان يقطعهما الارتفاع من الوتر. الارتفاع إذن هو الوسط الهندسي لتلك القطع. فمع p = 6.4 وq = 3.6، يكون h = جذر(23.04) = 4.8، مما يتحقق أيضًا من ارتفاع وُجد بطريقة أخرى." },
      { "question": "هل يمكن أن يكون الارتفاع أطول من نصف الوتر؟", "answer": "لا. في المثلث القائم الزاوية الصحيح يجب أن يحقق h الشرط 0 < h <= c/2. يكون الارتفاع أطول ما يمكن عندما يقسم الوتر إلى نصفين متساويين، فيبلغ c/2 بالضبط في الحالة متساوية الساقين. وقيمة أكبر، مثل h = 6 مع c = 10، لا يمكن أن تنتمي إلى مثلث قائم الزاوية بذلك الوتر." },
      { "question": "كيف تحسب المساحة عندما يكون الوتر والارتفاع فقط هما المعروفين؟", "answer": "طبق K = ch/2 مباشرة. لا حاجة لإعادة بناء الضلعين لأن المساحة محددة سلفًا بضلع واحد وارتفاعه المقابل. فمثلًا، c = 10 وh = 4.8 يعطيان K = 24 وحدة مربعة. وتأكد فقط من أن الارتفاع عمودي ولا يتجاوز نصف الوتر أولًا." },
      { "question": "لماذا تعطي الصيغة القائمة على الارتفاع النتيجة نفسها كصيغة الضلعين؟", "answer": "تحسب كلتاهما مساحة المثلث نفسه. وبمساواة ab/2 مع ch/2 والضرب في اثنين نحصل على ab = ch، أي أن h = ab/c. الصيغتان متكافئتان جبريًا لأي مثلث قائم زاوية متسق، ولهذا فإن حساب كلتيهما معًا فحص قوي جدًا: الاتفاق يؤكد المدخلات." },
      { "question": "ما الوحدات التي يجب أن تستخدمها نتيجة المساحة؟", "answer": "الوحدات المربعة المطابقة لأطوال الإدخال: الأمتار تعطي أمتارًا مربعة، والسنتيمترات تعطي سنتيمترات مربعة، والمليمترات تعطي مليمترات مربعة. حوّل كل المدخلات إلى وحدة قياس واحدة قبل بدء الحساب. وتذكر أن تحويلات المساحة تربع العامل الخطي، فالمتر المربع الواحد يساوي 10,000 سنتيمتر مربع." },
      { "question": "هل يمكن استخدام الصيغة القائمة على الارتفاع مع مثلثات أخرى؟", "answer": "تعمل قاعدة القاعدة-الارتفاع نصف القاعدة في الارتفاع مع كل مثلث له زوج عمودي مقابل. وما يميز الأمر هنا قيود المثلث القائم الزاوية: يجب أن ينزل الارتفاع من رأس الزاوية القائمة، ولا يمكن أن يتجاوز h قيمة c/2 أبدًا. وهذه الحدود لا تنطبق على المثلثات الحادة أو المنفرجة." }
    ],
    "faqHeading": "الأسئلة الشائعة",
    "relatedHeading": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
    "relatedItems": [
      "حاسبة مساحة المثلث القائم الزاوية",
      "حاسبة مساحة المثلث القائم الزاوية من الضلعين",
      "حاسبة ارتفاع المثلث القائم الزاوية من الأضلاع",
      "حاسبة مساحة المثلث القائم الزاوية من نصف المحيط",
      "حاسبة مساحة المثلث القائم الزاوية من الزاوية",
      "حاسبة محيط المثلث القائم الزاوية",
      "حاسبة أضلاع المثلث القائم الزاوية"
    ]
  }
};
