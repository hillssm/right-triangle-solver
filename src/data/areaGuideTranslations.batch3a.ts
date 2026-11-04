// Batch 3a: Indonesian (id) and Arabic (ar) translations for the Right Triangle Area Guide (Page 16 of 45).
export const AREA_TRANSLATIONS_BATCH3A = {
  "id": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Apa Itu Kalkulator Luas Segitiga Siku-Siku?",
      "sec-triangle": "Berapa Luas Segitiga Siku-Siku?",
      "sec-legs": "Luas Segitiga Siku-Siku Menggunakan Dua Sisi Siku-Sikunya",
      "sec-angle-a": "Mencari Luas Segitiga Siku-Siku Menggunakan Sisi b, Sisi Miring c, dan Sudut A",
      "sec-angle-b": "Mencari Luas Segitiga Siku-Siku Menggunakan Sisi a, Sisi Miring c, dan Sudut B",
      "sec-inradius": "Mencari Luas Segitiga Siku-Siku Menggunakan Inradius dan Semiperimeter",
      "sec-altitude": "Mencari Luas Segitiga Siku-Siku Menggunakan Sisi Miring dan Tinggi",
      "sec-choose": "Rumus Luas Segitiga Siku-Siku Mana yang Harus Anda Gunakan?",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Segitiga Siku-Siku",
      "sec-applications": "Penerapan Perhitungan Luas Segitiga Siku-Siku dalam Kehidupan Nyata",
      "sec-verify": "Cara Memverifikasi Luas Segitiga Siku-Siku",
      "sec-mistakes": "Kesalahan Umum Saat Menghitung Luas Segitiga Siku-Siku",
      "sec-validate": "Cara Memeriksa Apakah Hasil Luas Anda Valid",
      "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "sec-faq": "Tanya Jawab",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Apa Itu Kalkulator Luas Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Kalkulator luas segitiga siku-siku mencari luas dua dimensi yang dibatasi oleh ketiga sisi segitiga siku-siku. Misalnya, segitiga siku-siku dengan sisi siku-siku [[a=3\\text{ m}]] dan [[b=4\\text{ m}]] memiliki luas [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]: segitiga tersebut menempati enam meter persegi permukaan. Luas diukur dalam satuan persegi karena menghitung ruang datar, bukan panjang." },
          { "kind": "p", "text": "Sisi-sisi siku-siku yang tegak lurus sangat menyederhanakan perhitungan. Karena kedua sisi siku-siku bertemu pada sudut 90 derajat, satu sisi dapat berfungsi sebagai alas dan sisi lainnya sebagai tinggi, sehingga luasnya hanyalah setengah dari hasil kali keduanya. Kesederhanaan inilah salah satu alasan rumus sisi siku-siku menjadi metode pertama yang dipelajari sebagian besar siswa." },
          { "kind": "p", "text": "Ada beberapa metode untuk luas yang sama karena soal nyata memberi Anda ukuran yang berbeda. Seorang tukang kayu mengukur dua sisi siku-siku sebuah panel; seorang surveyor mengukur sisi miring dan sebuah sudut; seorang ahli geometri yang bekerja dengan lingkaran dalam segitiga mengetahui inradius dan semiperimeter. Setiap metode mengubah kumpulan nilai yang diketahuinya menjadi luas yang sama. Kalkulator pada halaman ini menawarkan lima mode yang sesuai dengan situasi tersebut: Luas dari Sisi Siku-Siku, Variasi Luas (Sudut A), Variasi Luas (Sudut B), Luas dari Semiperimeter, dan Variasi Luas (Tinggi). Metode terbaik biasanya adalah metode yang menggunakan ukuran yang sudah Anda miliki, tanpa memaksa konversi tambahan terlebih dahulu." }
        ]
      },
      "sec-triangle": {
        "h2": "Berapa Luas Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Panduan ini menggunakan satu notasi yang konsisten di seluruh isinya: [[A]] dan [[B]] adalah dua sudut lancip, [[C=90^\\circ]] adalah sudut siku-siku, sisi [[a]] berhadapan dengan sudut [[A]], sisi [[b]] berhadapan dengan sudut [[B]], sisi [[c]] adalah sisi miring yang berhadapan dengan sudut [[C]], [[h]] adalah tinggi tegak lurus dari titik sudut [[C]] ke sisi miring, [[r]] adalah inradius, [[s]] adalah semiperimeter, dan [[K]] adalah luas." },
          { "kind": "h3", "text": "Apa Itu Segitiga Siku-Siku?" },
          { "kind": "p", "text": "Segitiga siku-siku memiliki satu sudut tepat 90 derajat. Kedua sisi siku-sikunya bertemu pada sudut siku-siku, dan sisi miring terletak berhadapan dengan sudut tersebut. Sisi miring selalu merupakan sisi terpanjang, dan dua sudut lainnya lancip: karena ketiga sudut berjumlah 180 derajat, [[A+B=90^\\circ]]. Kedua sisi siku-siku saling tegak lurus, dan sifat inilah yang membuat rumus luasnya begitu langsung." },
          { "kind": "h3", "text": "Apa Arti Luas?" },
          { "kind": "p", "text": "Luas mengukur ruang dua dimensi yang dibatasi oleh ketiga sisi segitiga. Luas berbeda dari keliling, yang mengukur total panjang batas, dari panjang sisi, yang mengukur satu dimensi, dan dari volume, yang mengukur ruang tiga dimensi. Selembar kertas berbentuk segitiga memiliki luas sebesar kertas yang ditutupinya; bagian taman berbentuk segitiga memiliki luas sebesar tanah yang ditempatinya. Keduanya dilaporkan dalam satuan persegi seperti meter persegi, karena luas menghitung persegi satuan yang muat di dalam bangun." },
          { "kind": "h3", "text": "Mengapa Luas Dibagi Dua?" },
          { "kind": "p", "text": "Dua segitiga siku-siku identik dapat digabungkan sepanjang sisi miringnya membentuk persegi panjang. Jika setiap segitiga memiliki sisi siku-siku yang tegak lurus [[a]] dan [[b]], persegi panjang tersebut memiliki luas [[ab]]. Satu segitiga menempati tepat setengah dari persegi panjang itu, sehingga [[[\\boxed{K=\\frac{ab}{2}}]]] Pembagian dengan dua bukanlah faktor penyesuaian: pembagian itu adalah konsekuensi geometris dari segitiga yang merupakan setengah persegi panjang, dan ia muncul dalam setiap metode luas pada halaman ini dalam satu bentuk atau lainnya." },
          { "kind": "h3", "text": "Mengapa Segitiga yang Sama Dapat Memiliki Lima Rumus Luas?" },
          { "kind": "p", "text": "Luas segitiga tidak berubah ketika metode pengukuran yang berbeda digunakan. Setiap metode hanya berangkat dari nilai-nilai yang diketahui yang berbeda. Dua sisi siku-siku memberikan rumus paling sederhana. Sebuah sisi siku-siku, sisi miring, dan sudut lancip yang diapit memungkinkan rumus berbasis sinus. Inradius dan semiperimeter memberikan hubungan geometris alternatif. Sisi miring dan tinggi tegak lurus menggunakan aturan umum alas-tinggi. Kelima metode harus menghasilkan luas yang sama ketika masukannya menggambarkan segitiga valid yang sama, dan kesepakatan itulah verifikasi terkuat yang tersedia: dua metode, satu segitiga, satu jawaban." }
        ],
        "imgAlt": "Anatomi segitiga siku-siku: sisi siku-siku a dan b, sisi miring c, sudut siku-siku C, tinggi h ke sisi miring, K = ab/2",
        "figcaption": "Anatomi segitiga siku-siku: C adalah sudut siku-siku, a dan b adalah sisi siku-siku, c adalah sisi miring, dan h adalah tinggi ke sisi miring."
      },
      "sec-legs": {
        "h2": "Luas Segitiga Siku-Siku Menggunakan Dua Sisi Siku-Sikunya",
        "blocks": [
          { "kind": "p", "text": "Rumus sisi siku-siku adalah titik awal untuk luas segitiga siku-siku: [[[\\boxed{K=\\frac{ab}{2}}]]] Rumus ini hanya memerlukan dua sisi yang tegak lurus, dan segala hal lain pada halaman ini dapat dipandang sebagai variasi yang memperoleh kembali besaran yang sama dari masukan yang berbeda." },
          { "kind": "h3", "text": "Kapan Anda Harus Menggunakan Rumus Sisi Siku-Siku?" },
          { "kind": "p", "text": "Gunakan metode ini setiap kali kedua sisi yang tegak lurus diketahui. Tidak diperlukan perhitungan sudut, sisi miring, inradius, atau tinggi terlebih dahulu. Pengukuran langsung kedua sisi siku-siku umum dalam pertukangan, pemasangan ubin, dan soal-soal kelas, sehingga mode Luas dari Sisi Siku-Siku menjadi pilihan bawaan untuk sebagian besar perhitungan sehari-hari." },
          { "kind": "h3", "text": "Cara Kerja Rumus Ini" },
          { "kind": "p", "text": "Kedua sisi siku-siku membentuk alas dan tinggi tegak lurus segitiga. Rumus umum luas segitiga adalah [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]; karena sisi-sisi siku-siku saling tegak lurus, alas dan tinggi dapat langsung diambil sebagai [[a]] dan [[b]], sehingga menghasilkan [[K=ab/2]]. Tidak ada trigonometri yang terlibat, dan tidak ada sisi tambahan yang perlu dicari terlebih dahulu." },
          { "kind": "h3", "text": "Contoh Lengkap: Segitiga 3-4-5" },
          { "kind": "p", "text": "Diketahui [[a=3\\text{ m}]] dan [[b=4\\text{ m}]]. Langkah 1: tulis rumusnya [[K=ab/2]]. Langkah 2: substitusikan nilainya, [[K=(3\\times4)/2]]. Langkah 3: kalikan, [[K=12/2]]. Langkah 4: bagi dua, [[[\\boxed{K=6\\text{ m}^2}]]] Jawabannya adalah enam meter persegi, bukan enam meter: satuan membawa makna besaran tersebut." },
          { "kind": "h3", "text": "Bisakah Kedua Sisi Siku-Siku Ditukar?" },
          { "kind": "p", "text": "Ya. Perkalian bersifat komutatif, sehingga [[ab=ba]] dan karena itu [[ab/2=ba/2]]. Luas tidak berubah jika kedua sisi siku-siku dimasukkan dalam urutan berlawanan, asalkan kolom kalkulator sesuai dengan panjang sisi siku-siku yang benar. Simetri ini hanya berlaku untuk sisi siku-siku: menukar sisi siku-siku dengan sisi miring akan merusak rumus." },
          { "kind": "h3", "text": "Bagaimana Jika Sisi Siku-Siku Bernilai Desimal?" },
          { "kind": "p", "text": "Ukuran desimal bekerja dalam rumus yang sama. Dengan [[a=3.5\\text{ cm}]] dan [[b=9.2\\text{ cm}]]: [[K=(3.5\\times9.2)/2]], [[K=32.2/2]], [[[\\boxed{K=16.1\\text{ cm}^2}]]] Aritmetikanya identik; hanya ketelitian masukan yang berubah, jadi simpan cukup banyak digit dan bulatkan di akhir." },
          { "kind": "h3", "text": "Bagaimana Jika Satu Sisi Siku-Siku Tidak Diketahui?" },
          { "kind": "p", "text": "Sisi siku-siku yang hilang terkadang dapat dicari terlebih dahulu menggunakan teorema Pythagoras atau sudut yang diketahui, lalu rumus sisi siku-siku diterapkan setelahnya. Perhatikan bahwa mode sisi siku-siku sendiri memerlukan kedua sisi siku-siku: mode ini tidak menemukan sisi yang hilang secara otomatis. Jika hanya satu sisi siku-siku dan sisi miring yang diketahui, perhitungan sisi yang hilang adalah langkah terpisah sebelum mode ini dapat digunakan." }
        ]
      },
      "sec-angle-a": {
        "h2": "Mencari Luas Segitiga Siku-Siku Menggunakan Sisi b, Sisi Miring c, dan Sudut A",
        "blocks": [
          { "kind": "p", "text": "Metode ini berguna ketika sisi [[b]], sisi miring [[c]], dan sudut lancip [[A]] diketahui: [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] Mode ini adalah mode Variasi Luas (Sudut A) pada kalkulator." },
          { "kind": "h3", "text": "Mengapa Rumus Ini Menggunakan Sinus?" },
          { "kind": "p", "text": "Rumus umum luas untuk dua sisi dan sudut apitnya adalah [[K=\\frac12 xy\\sin(\\theta)]]. Sudut [[A]] terletak di antara sisi [[b]] dan [[c]], sehingga dengan mensubstitusikan [[x=b]], [[y=c]], [[\\theta=A]] diperoleh [[K=\\frac12 bc\\sin(A)]]. Sinus memperhitungkan komponen tegak lurus dari satu sisi: hanya bagian sisi [[c]] yang berdiri tegak lurus terhadap [[b]] yang berkontribusi sebagai tinggi, dan bagian tegak lurus itu adalah [[c\\sin(A)]]." },
          { "kind": "h3", "text": "Contoh Lengkap: Segitiga 3-4-5" },
          { "kind": "p", "text": "Diketahui [[b=4\\text{ m}]], [[c=5\\text{ m}]], dan [[A\\approx36.87^\\circ]]. Karena [[\\sin(36.87^\\circ)\\approx0.6]], substitusikan: [[K=(4\\times5\\times0.6)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Hasil ini cocok dengan rumus sisi siku-siku karena 0,6 tepat merupakan rasio [[a/c=3/5]]: bentuk sinus adalah bentuk sisi siku-siku yang tersamar, dengan [[c\\sin(A)]] berperan sebagai sisi siku-siku lainnya." },
          { "kind": "h3", "text": "Apa yang Terjadi Jika Sudutnya Berubah?" },
          { "kind": "p", "text": "Faktor sinus mengubah luas ketika kedua panjang sisi dan sudut apit divariasikan dalam segitiga yang valid. Jangan membayangkan sudut berubah sementara setiap panjang sisi tetap: dalam segitiga nyata, sisi dan sudut saling terkait, sehingga mengubah sudut mengubah bentuk segitiga dan menggerakkan luas bersamanya. Sudut apit sangat penting bagi rumus ini justru karena ia mengodekan seberapa terbuka atau tertutup segitiga tersebut." },
          { "kind": "h3", "text": "Kesalahan Umum dalam Mode Sudut A" },
          { "kind": "p", "text": "Lima kesalahan berulang dalam mode ini. Memasangkan sudut [[A]] dengan sisi yang salah adalah yang paling sering: rumus ini memerlukan sisi [[b]], bukan sisi [[a]], karena [[b]] dan [[c]] adalah sisi-sisi yang mengapit sudut [[A]]. Memasukkan sudut dalam satuan yang salah merusak nilai sinus: kalkulator ini mengharapkan derajat, sehingga 36,87 derajat tidak boleh dimasukkan sebagai 0,6435 radian. Lupa membagi dua menggandakan jawaban. Dan memasukkan sudut siku-siku atau sudut yang tidak lancip ke kolom sudut lancip tidak menggambarkan masukan valid untuk mode ini; sudut harus berada tepat di antara 0 dan 90 derajat." }
        ]
      },
      "sec-angle-b": {
        "h2": "Mencari Luas Segitiga Siku-Siku Menggunakan Sisi a, Sisi Miring c, dan Sudut B",
        "blocks": [
          { "kind": "p", "text": "Mode ini menggunakan sudut lancip lainnya dan dua sisi yang mengapitnya: [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]] Mode ini adalah mode Variasi Luas (Sudut B) pada kalkulator." },
          { "kind": "h3", "text": "Mengapa Rumus Ini Berlaku?" },
          { "kind": "p", "text": "Sisi [[a]] dan [[c]] mengapit sudut [[B]]. Berangkat dari rumus umum [[K=\\frac12 xy\\sin(\\theta)]] dan mensubstitusikan [[x=a]], [[y=c]], [[\\theta=B]] diperoleh [[K=\\frac12 ac\\sin(B)]]. Strukturnya identik dengan rumus Sudut A; hanya label yang berpindah, karena geometri kedua sudut lancip saling mencerminkan." },
          { "kind": "h3", "text": "Contoh Lengkap: Segitiga 3-4-5 yang Sama" },
          { "kind": "p", "text": "Diketahui [[a=3\\text{ m}]], [[c=5\\text{ m}]], dan [[B\\approx53.13^\\circ]]. Karena [[\\sin(53.13^\\circ)\\approx0.8]], hitung: [[K=(3\\times5\\times0.8)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Hasilnya cocok dengan metode sisi siku-siku dan metode Sudut A, sebagaimana mestinya: ketiganya menggambarkan segitiga yang sama." },
          { "kind": "h3", "text": "Bagaimana Hubungan Sudut A dan Sudut B?" },
          { "kind": "p", "text": "Kedua sudut lancip saling berkomplemen: [[[\\boxed{A+B=90^\\circ}]]] Ini memberikan identitas [[\\sin(A)=\\cos(B)]] dan [[\\sin(B)=\\cos(A)]]. Pada segitiga 3-4-5, [[\\sin(A)=0.6=\\cos(B)]] dan [[\\sin(B)=0.8=\\cos(A)]]. Hubungan-hubungan ini menjelaskan mengapa kedua mode berbasis sudut menghitung luas yang sama ketika masukannya konsisten: sinus satu mode adalah kosinus mode lainnya, dan geometri segitiga tidak berubah dari sudut lancip mana pun Anda memulai." },
          { "kind": "h3", "text": "Kesalahan Umum dalam Mode Sudut B" },
          { "kind": "p", "text": "Kesalahan cerminan muncul di sini: menggunakan sisi [[b]] alih-alih sisi [[a]], memasangkan sudut [[B]] dengan sisi yang salah, dan mempertukarkan kedua sudut lancip satu sama lain. Lupa fungsi sinus atau lupa membagi dua adalah kekeliruan aritmetika yang sama seperti pada mode Sudut A. Terakhir, sudut yang tidak sesuai dengan segitiga yang diukur, misalnya memasukkan 36,87 derajat di tempat yang seharusnya 53,13 derajat, secara diam-diam menghasilkan luas yang salah tetapi tampak masuk akal, jadi selalu periksa bahwa sudut cocok dengan pasangan sisinya." }
        ]
      },
      "sec-inradius": {
        "h2": "Mencari Luas Segitiga Siku-Siku Menggunakan Inradius dan Semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Metode ini hanya memerlukan dua angka, inradius [[r]] dan semiperimeter [[s]]: [[[\\boxed{K=rs}]]] Inradius adalah jari-jari lingkaran yang tertulis di dalam segitiga, lingkaran yang menyentuh ketiga sisinya. Semiperimeter adalah setengah keliling segitiga: [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Mode ini adalah mode Luas dari Semiperimeter pada kalkulator." },
          { "kind": "h3", "text": "Mengapa Luas Sama dengan Inradius Kali Semiperimeter?" },
          { "kind": "p", "text": "Hubungkan incenter, pusat lingkaran dalam, ke ketiga titik sudut. Ini membagi segitiga menjadi tiga segitiga yang lebih kecil. Setiap segitiga kecil memiliki tinggi tegak lurus yang sama [[r]], karena inradius adalah jarak tegak lurus dari incenter ke setiap sisi. Menjumlahkan luasnya menghasilkan [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]. Faktorkan [[r/2]]: [[K=\\frac12 r(a+b+c)]]. Karena [[s=(a+b+c)/2]], maka diperoleh [[[\\boxed{K=rs}]]] Hubungan ini berlaku untuk segitiga valid apa pun, bukan hanya segitiga siku-siku, asalkan inradius dan semiperimeter yang benar diketahui." },
          { "kind": "h3", "text": "Mencari Inradius Segitiga Siku-Siku" },
          { "kind": "p", "text": "Untuk segitiga siku-siku ada jalan pintas yang mudah: [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Perlakukan ini sebagai jalan pintas segitiga siku-siku, bukan sebagai rumus umum inradius: untuk segitiga umum, inradius berasal dari [[r=K/s]], yang bersifat melingkar jika Anda sedang mencari luasnya. Jalan pintas ini berlaku karena dua panjang garis singgung dari titik sudut siku-siku adalah sama dan aljabarnya menyusut rapi untuk kasus 90 derajat." },
          { "kind": "h3", "text": "Contoh Lengkap: Segitiga 3-4-5" },
          { "kind": "p", "text": "Diketahui [[a=3]], [[b=4]], [[c=5]]. Pertama semiperimeternya: [[s=(3+4+5)/2]], [[[\\boxed{s=6}]]] Kemudian inradiusnya: [[r=(3+4-5)/2]], [[[\\boxed{r=1}]]] Luasnya adalah [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Jawabannya cocok dengan rumus sisi siku-siku, mengonfirmasi bahwa pandangan lingkaran dalam dan pandangan sisi siku-siku menggambarkan segitiga yang sama." },
          { "kind": "h3", "text": "Contoh Lengkap: Segitiga 5-12-13" },
          { "kind": "p", "text": "Diketahui [[a=5]], [[b=12]], [[c=13]]. Semiperimeter: [[s=(5+12+13)/2=15]]. Inradius: [[r=(5+12-13)/2=2]]. Luas: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Verifikasi dengan rumus sisi siku-siku: [[K=(5\\times12)/2=30]]. Kedua metode sepakat, yang merupakan hasil yang diharapkan setiap kali ukuran sisi konsisten." },
          { "kind": "h3", "text": "Kesalahan Umum" },
          { "kind": "p", "text": "Mempertukarkan inradius dengan circumradius adalah kesalahan khas: inradius menyentuh sisi-sisi dari dalam, sedangkan circumradius mencapai titik-titik sudut dari luar, dan keduanya adalah angka yang berbeda. Menggunakan keliling penuh alih-alih semiperimeter menggandakan jawaban. Menerapkan jalan pintas inradius segitiga siku-siku [[r=(a+b-c)/2]] pada segitiga yang bukan siku-siku menghasilkan nilai yang tak bermakna. Lupa bahwa hasil kali [[rs]] memiliki satuan persegi, serta memasukkan ukuran sisi yang tidak konsisten ke dalam perhitungan [[r]] dan [[s]], melengkapi kegagalan umum." }
        ]
      },
      "sec-altitude": {
        "h2": "Mencari Luas Segitiga Siku-Siku Menggunakan Sisi Miring dan Tinggi",
        "blocks": [
          { "kind": "p", "text": "Metode ini menggunakan sisi miring [[c]] sebagai alas dan tinggi tegak lurus [[h]] sebagai tingginya: [[[\\boxed{K=\\frac{ch}{2}}]]] Mode ini adalah mode Variasi Luas (Tinggi) pada kalkulator." },
          { "kind": "h3", "text": "Apa Itu Tinggi?" },
          { "kind": "p", "text": "Tinggi adalah garis tegak lurus yang ditarik dari sebuah titik sudut ke sisi di hadapannya. Dalam mode ini, tinggi dimulai dari titik sudut siku-siku [[C]] dan bertemu sisi miring pada sudut 90 derajat. Tinggi ini tidak sama dengan sisi siku-siku [[a]] maupun [[b]]: sisi-sisi siku-siku terletak di sepanjang tepi segitiga, sedangkan tinggi turun ke bagian dalam dan mendarat di sisi miring. Penanda sudut siku-siku di tempat [[h]] bertemu [[c]] adalah jaminan visual bahwa syarat tegak lurus terpenuhi." },
          { "kind": "h3", "text": "Mengapa Rumus Ini Berlaku?" },
          { "kind": "p", "text": "Rumus ini adalah rumus umum alas-tinggi dengan pilihan alas tertentu. Mulai dari [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Pilih sisi miring sebagai alas, [[\\text{base}=c]], dan tinggi tegak lurus sebagai tingginya, [[\\text{height}=h]]. Oleh karena itu [[K=ch/2]]. Tidak ada yang spesifik segitiga siku-siku dalam penurunan ini: luas segitiga apa pun dapat ditulis dengan cara ini, tetapi rumus sisi siku-siku segitiga siku-siku hanyalah lebih cepat ketika sisi-sisi siku-sikunya diketahui." },
          { "kind": "h3", "text": "Contoh Lengkap: Segitiga 6-8-10" },
          { "kind": "p", "text": "Diketahui [[c=10\\text{ m}]] dan [[h=4.8\\text{ m}]]. Hitung: [[K=(10\\times4.8)/2]], [[K=48/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Ini adalah luas yang sama dengan segitiga siku-siku yang sisi siku-sikunya berukuran 6 m dan 8 m, karena [[(6\\times8)/2=24]]. Dua deskripsi berbeda, satu luas." },
          { "kind": "h3", "text": "Bagaimana Tinggi Dapat Dihitung?" },
          { "kind": "p", "text": "Ketika kedua sisi siku-siku dan sisi miring diketahui, tinggi diperoleh dari menyamakan kedua rumus luas: [[ab/2=ch/2]], sehingga [[[\\boxed{h=\\frac{ab}{c}}]]] Untuk segitiga 6-8-10: [[h=(6\\times8)/10=4.8\\text{ m}]]. Tinggi lebih pendek daripada sisi miring, sebagaimana mestinya: garis tegak lurus adalah lintasan terpendek dari titik sudut ke garis tersebut. Perhatikan bahwa mode tinggi tidak menghitung tinggi yang hilang dengan sendirinya; tinggi harus diketahui atau diturunkan terlebih dahulu." }
        ]
      },
      "sec-choose": {
        "h2": "Rumus Luas Segitiga Siku-Siku Mana yang Harus Anda Gunakan?",
        "blocks": [
          { "kind": "p", "text": "Lima metode, satu luas. Perbandingan di bawah memetakan setiap kumpulan ukuran yang diketahui ke rumus dan mode kalkulatornya. Pilih baris yang cocok dengan angka yang sudah ada di tangan Anda." },
          { "kind": "h3", "text": "Mengapa Rumus Sisi Siku-Siku Seringkali Paling Sederhana" },
          { "kind": "p", "text": "Rumus sisi siku-siku hanya memerlukan dua ukuran dan tanpa trigonometri. Kalikan, bagi dua, selesai. Setiap kali kedua sisi yang tegak lurus tersedia, setiap metode lain adalah rute yang lebih panjang menuju angka yang sama." },
          { "kind": "h3", "text": "Kapan Rumus Sinus Berguna" },
          { "kind": "p", "text": "Metode berbasis sudut mendapatkan tempatnya ketika ukuran yang tersedia mencakup sudut lancip, satu sisi siku-siku, dan sisi miring, seperti pada garis bidik survei atau segitiga navigasi. Jika sudutnya tidak diketahui, Anda harus menemukan sisi siku-siku yang hilang terlebih dahulu sebelum rumus sisi siku-siku dapat digunakan; bentuk sinus melewati jalan memutar itu." },
          { "kind": "h3", "text": "Kapan Metode Semiperimeter Berguna" },
          { "kind": "p", "text": "Rumus inradius-semiperimeter cocok untuk soal geometri yang sudah melibatkan lingkaran dalam, atau situasi di mana [[r]] dan [[s]] diketahui dari langkah-langkah sebelumnya. Rumus ini juga merupakan pemeriksaan silang independen yang sangat baik: karena tidak berbagi aritmetika dengan rumus sisi siku-siku, kesepakatan antara keduanya sangat menunjukkan bahwa keduanya benar." },
          { "kind": "h3", "text": "Kapan Rumus Tinggi Berguna" },
          { "kind": "p", "text": "Metode tinggi adalah pilihan alami ketika sisi miring dan tinggi tegak lurusnya adalah besaran yang diketahui, yang terjadi pada soal dekomposisi di mana segitiga dibagi sepanjang tingginya. Seperti rumus sisi siku-siku, ini adalah perhitungan alas-tinggi biasa tanpa trigonometri." }
        ],
        "table": {
          "headers": ["Ukuran yang diketahui", "Metode yang disarankan", "Rumus"],
          "rows": [
            ["Kedua sisi siku-siku yang tegak lurus [[a]], [[b]]", "Luas dari Sisi Siku-Siku", "[[K=ab/2]]"],
            ["Sisi siku-siku [[b]], sisi miring [[c]], sudut [[A]]", "Variasi Luas (Sudut A)", "[[K=bc\\sin(A)/2]]"],
            ["Sisi siku-siku [[a]], sisi miring [[c]], sudut [[B]]", "Variasi Luas (Sudut B)", "[[K=ac\\sin(B)/2]]"],
            ["Inradius [[r]], semiperimeter [[s]]", "Luas dari Semiperimeter", "[[K=rs]]"],
            ["Sisi miring [[c]], tinggi tegak lurus [[h]]", "Variasi Luas (Tinggi)", "[[K=ch/2]]"]
          ]
        },
        "imgAlt": "Lima panel yang menunjukkan rumus luas K=ab/2, K=bc sin(A)/2, K=ac sin(B)/2, K=rs, dan K=ch/2",
        "figcaption": "Lima rumus luas dan ukuran yang dibutuhkan masing-masing."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Ikuti langkah-langkah ini untuk kelima mode mana pun. Memilih mode yang benar lebih penting daripada hal lain: mode menentukan rumus mana yang dijalankan, sehingga rumus yang benar dengan mode yang salah tetap menjawab pertanyaan yang salah." },
          { "kind": "h3", "text": "Panduan Lengkap: Kelima Mode pada Segitiga 3-4-5" },
          { "kind": "p", "text": "Diketahui [[a=3]], [[b=4]], [[c=5]], dengan [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]], dan [[h=2.4]], berikut adalah kebutuhan dan hasil setiap mode. Setiap mode mengembalikan [[[\\boxed{K=6\\text{ square units}}]]]" }
        ],
        "steps": [
          "<strong>Identifikasi ukuran yang sudah diketahui.</strong> Daftarkan sisi siku-siku, sisi miring, sudut, inradius, semiperimeter, atau tinggi mana yang benar-benar Anda miliki.",
          "<strong>Pilih mode kalkulator yang sesuai dengan ukuran tersebut.</strong> Luas dari Sisi Siku-Siku, Variasi Luas (Sudut A), Variasi Luas (Sudut B), Luas dari Semiperimeter, atau Variasi Luas (Tinggi).",
          "<strong>Baca label kolom masukan yang diperlukan.</strong> Setiap mode hanya menampilkan kolom yang dibutuhkan rumusnya.",
          "<strong>Identifikasi sisi siku-siku, sisi miring, sudut, inradius, semiperimeter, atau tinggi sebagaimana mestinya.</strong> Cocokkan setiap ukuran yang diketahui dengan labelnya, menggunakan notasi panduan ini.",
          "<strong>Masukkan ukuran pertama yang diperlukan.</strong> Misalnya, \"Leg a\" pada mode sisi siku-siku.",
          "<strong>Masukkan ukuran-ukuran yang tersisa.</strong> Jaga agar nilai tetap berada di kolom yang dijelaskan labelnya.",
          "<strong>Pilih satuan yang kompatibel menggunakan pemilih satuan yang tersedia.</strong> Semua masukan panjang harus berbagi satu sistem satuan sebelum dikalikan.",
          "<strong>Untuk mode berbasis sudut, masukkan sudut lancip yang benar.</strong> Kalkulator ini mengharapkan sudut dalam derajat. Masukkan sudut [[A]] pada mode Sudut A dan sudut [[B]] pada mode Sudut B, jangan pernah sudut siku-siku.",
          "<strong>Periksa bahwa semua masukan positif dan menggambarkan segitiga yang valid.</strong> Panjang harus positif, dan sisi miring harus lebih panjang dari kedua sisi siku-siku.",
          "<strong>Klik Hitung Area.</strong> Tombol ini menjalankan rumus mode yang dipilih.",
          "<strong>Tinjau hasil luas dan langkah penyelesaiannya.</strong> Kalkulator menampilkan rumus, substitusi, dan luas akhir dalam satuan persegi.",
          "<strong>Gunakan visualisasi segitiga langsung untuk memverifikasi label.</strong> Pastikan label sisi dan sudut pada diagram sesuai dengan ukuran yang Anda maksudkan.",
          "<strong>Gunakan Atur Ulang saat memulai perhitungan baru.</strong> Tombol Atur Ulang mengosongkan semua kolom sehingga perhitungan berikutnya dimulai dengan bersih."
        ],
        "closingParagraphs": [
          "<strong>Luas dari Sisi Siku-Siku.</strong> Masukkan \"Leg a\" = 3 dan \"Leg b\" = 4. Rumus: [[K=ab/2]]. Substitusi: [[K=(3\\times4)/2]]. Hasil: 6 satuan persegi.",
          "<strong>Variasi Luas (Sudut A).</strong> Masukkan \"Leg b\" = 4, \"Hypotenuse c\" = 5, \"Angle A\" = 36.87. Rumus: [[K=bc\\sin(A)/2]]. Substitusi: [[K=(4\\times5\\times0.6)/2]]. Hasil: 6 satuan persegi.",
          "<strong>Variasi Luas (Sudut B).</strong> Masukkan \"Leg a\" = 3, \"Hypotenuse c\" = 5, \"Angle B\" = 53.13. Rumus: [[K=ac\\sin(B)/2]]. Substitusi: [[K=(3\\times5\\times0.8)/2]]. Hasil: 6 satuan persegi.",
          "<strong>Luas dari Semiperimeter.</strong> Masukkan \"Inradius r\" = 1 dan \"Semiperimeter s\" = 6. Rumus: [[K=rs]]. Substitusi: [[K=1\\times6]]. Hasil: 6 satuan persegi.",
          "<strong>Variasi Luas (Tinggi).</strong> Masukkan \"Hypotenuse c\" = 5 dan \"Altitude h\" = 2.4. Rumus: [[K=ch/2]]. Substitusi: [[K=(5\\times2.4)/2]]. Hasil: 6 satuan persegi.",
          "Setiap mode menggunakan kumpulan nilai yang diketahui yang berbeda, dan tidak ada yang memerlukan kolom masukan yang sama. Jawaban bersama itulah intinya: lima deskripsi, satu segitiga, satu luas."
        ]
      },
      "sec-applications": {
        "h2": "Penerapan Perhitungan Luas Segitiga Siku-Siku dalam Kehidupan Nyata",
        "blocks": [
          { "kind": "p", "text": "Setiap contoh menyebutkan situasinya, ukuran yang diketahui, mode kalkulator yang cocok, alasan mode itu cocok, rumus, substitusi langkah demi langkah, jawaban akhir dalam satuan persegi, interpretasi dalam bahasa sederhana, ide verifikasi bila berguna, dan asumsi di balik model segitiga." },
          { "kind": "h3", "text": "Contoh 1: Menghitung Luas Taman Berbentuk Segitiga" },
          { "kind": "p", "text": "Sebuah taman memiliki bagian penanaman berbentuk segitiga siku-siku dengan sisi siku-siku tegak lurus 6 m dan 8 m. Pilih Luas dari Sisi Siku-Siku, pilihan alami ketika kedua sisi siku-siku diukur langsung: [[K=(6\\times8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Bagian tersebut mencakup 24 meter persegi permukaan penanaman. Ini mengasumsikan bagian taman secara akurat diwakili oleh segitiga siku-siku dengan tepi lurus." },
          { "kind": "h3", "text": "Contoh 2: Mengukur Panel Kayu Lapis Berbentuk Segitiga" },
          { "kind": "p", "text": "Seorang tukang kayu memotong panel segitiga siku-siku dengan sisi siku-siku berukuran 1,2 m dan 0,8 m. Pilih Luas dari Sisi Siku-Siku: [[K=(1.2\\times0.8)/2]], [[K=0.96/2]], [[[\\boxed{K=0.48\\text{ m}^2}]]] Panel tersebut mencakup hampir setengah meter persegi, yang membantu memperkirakan cakupan bahan. Kelonggaran pemotongan dan sisa bahan tidak termasuk dalam luas geometris ini." },
          { "kind": "h3", "text": "Contoh 3: Mencari Luas Layar Segitiga" },
          { "kind": "p", "text": "Bagian layar segitiga memiliki sisi siku-siku tegak lurus 5 m dan 12 m. Pilih Luas dari Sisi Siku-Siku: [[K=(5\\times12)/2]], [[[\\boxed{K=30\\text{ m}^2}]]] Rumus ini memberikan luas datar bagian segitiga, berguna untuk perkiraan kain sebelum jahitan dan lengkungan diperhitungkan." },
          { "kind": "h3", "text": "Contoh 4: Memperkirakan Bidang Lahan Segitiga Siku-Siku" },
          { "kind": "p", "text": "Survei lahan mengidentifikasi bagian segitiga siku-siku dengan sisi tegak lurus 30 m dan 40 m. Pilih Luas dari Sisi Siku-Siku: [[K=(30\\times40)/2]], [[[\\boxed{K=600\\text{ m}^2}]]] Ini adalah luas bagian segitiga yang ditentukan, belum tentu total luas properti di sekitarnya. Batas lahan nyata mungkin memerlukan survei yang lebih rinci daripada model satu segitiga." },
          { "kind": "h3", "text": "Contoh 5: Menghitung Luas Pelana Atap Menggunakan Sudut A" },
          { "kind": "p", "text": "Bagian atap segitiga yang disederhanakan memiliki [[b=6\\text{ m}]], [[c=10\\text{ m}]], dan [[A\\approx53.13^\\circ]]. Pilih Variasi Luas (Sudut A), karena sisi siku-siku, sisi miring, dan sudut apit adalah data yang diukur. Dengan [[\\sin(53.13^\\circ)\\approx0.8]]: [[K=(6\\times10\\times0.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Hasilnya adalah luas penampang segitiga. Total luas permukaan atap nyata bergantung pada geometri tiga dimensinya dan bagian atap lainnya." },
          { "kind": "h3", "text": "Contoh 6: Mencari Luas Tenda Segitiga" },
          { "kind": "p", "text": "Bagian tenda segitiga siku-siku memiliki [[b=4\\text{ m}]], [[c=5\\text{ m}]], dan [[A\\approx36.87^\\circ]]. Pilih Variasi Luas (Sudut A): [[K=bc\\sin(A)/2]], dan dengan [[\\sin(36.87^\\circ)\\approx0.6]], [[K=(4\\times5\\times0.6)/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Ini mengasumsikan ukuran menggambarkan segitiga siku-siku datar, yang berlaku untuk tenda persegi panjang yang dikencangkan dan dipotong secara diagonal." },
          { "kind": "h3", "text": "Contoh 7: Menghitung Panel Penyangga Segitiga Menggunakan Sudut B" },
          { "kind": "p", "text": "Panel penyangga memiliki [[a=3\\text{ m}]], [[c=5\\text{ m}]], dan [[B\\approx53.13^\\circ]]. Pilih Variasi Luas (Sudut B): [[K=(3\\times5\\times0.8)/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Rumus berbasis sudut menemukan luas tanpa memasukkan kedua sisi siku-siku secara langsung, yang membantu ketika sisi siku-siku kedua tidak pernah diukur." },
          { "kind": "h3", "text": "Contoh 8: Mencari Luas Bagian Rangka Atap" },
          { "kind": "p", "text": "Bagian rangka atap segitiga siku-siku memiliki [[a=5\\text{ m}]], [[c=13\\text{ m}]], dan [[B\\approx67.38^\\circ]]. Pilih Variasi Luas (Sudut B). Karena [[\\sin(67.38^\\circ)\\approx12/13]]: [[K=(5\\times13\\times(12/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]] Ini adalah luas geometris bagian segitiga, bukan perhitungan kapasitas beban struktural." },
          { "kind": "h3", "text": "Contoh 9: Menghitung Luas dari Inradius dan Semiperimeter" },
          { "kind": "p", "text": "Perhatikan segitiga siku-siku 3-4-5 dengan [[r=1]] dan [[s=6]]. Pilih Luas dari Semiperimeter: [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Inradius dan semiperimeter memberikan rute alternatif yang tidak pernah mengalikan kedua sisi siku-siku, namun sampai pada jawaban yang sama." },
          { "kind": "h3", "text": "Contoh 10: Mencari Luas Lahan Segitiga 5-12-13" },
          { "kind": "p", "text": "Lahan segitiga siku-siku memiliki sisi [[a=5]], [[b=12]], [[c=13]]. Pilih Luas dari Semiperimeter. Semiperimeter: [[s=(5+12+13)/2=15]]. Inradius: [[r=(5+12-13)/2=2]]. Luas: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Verifikasi dengan rumus sisi siku-siku: [[K=(5\\times12)/2=30]]. Kedua metode sepakat karena keduanya menggambarkan lahan yang sama." },
          { "kind": "h3", "text": "Contoh 11: Memperkirakan Luas Panel Segitiga dari Tinggi" },
          { "kind": "p", "text": "Panel segitiga diwakili oleh segitiga siku-siku yang sisi miringnya berukuran 10 m dan tinggi tegak lurus ke sisi miringnya 4,8 m. Pilih Variasi Luas (Tinggi): [[K=ch/2]], [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Tinggi harus tegak lurus terhadap sisi miring: garis lain dari titik sudut ke sisi miring lebih panjang dan akan melebihkan luas." },
          { "kind": "h3", "text": "Contoh 12: Menghitung Bidang Segitiga dari Sisi Miring dan Tinggi" },
          { "kind": "p", "text": "Bidang segitiga siku-siku memiliki sisi miring 20 m dan tinggi tegak lurus 9 m. Pilih Variasi Luas (Tinggi): [[K=(20\\times9)/2]], [[[\\boxed{K=90\\text{ m}^2}]]] Ini adalah luas segitiga ketika ukuran menggambarkan segitiga siku-siku valid yang sama, yang memang demikian di sini: 9 m jauh di bawah panjang sisi miring, sebagaimana mestinya garis tegak lurus." },
          { "kind": "h3", "text": "Perbandingan Contoh Praktis" }
        ],
        "table": {
          "headers": ["Situasi", "Nilai yang diketahui", "Mode kalkulator", "Rumus", "Luas akhir", "Interpretasi"],
          "rows": [
            ["Petak taman", "Sisi siku-siku 6 m, 8 m", "Luas dari Sisi Siku-Siku", "[[K=ab/2]]", "24 m²", "Permukaan penanaman"],
            ["Panel kayu lapis", "Sisi siku-siku 1,2 m, 0,8 m", "Luas dari Sisi Siku-Siku", "[[K=ab/2]]", "0.48 m²", "Cakupan bahan"],
            ["Layar", "Sisi siku-siku 5 m, 12 m", "Luas dari Sisi Siku-Siku", "[[K=ab/2]]", "30 m²", "Luas kain datar"],
            ["Bidang lahan", "Sisi siku-siku 30 m, 40 m", "Luas dari Sisi Siku-Siku", "[[K=ab/2]]", "600 m²", "Bidang, bukan seluruh properti"],
            ["Pelana atap", "b 6 m, c 10 m, A 53,13°", "Variasi Luas (Sudut A)", "[[K=bc\\sin(A)/2]]", "24 m²", "Hanya penampang"],
            ["Tenda", "b 4 m, c 5 m, A 36,87°", "Variasi Luas (Sudut A)", "[[K=bc\\sin(A)/2]]", "6 m²", "Luas kain datar"],
            ["Panel penyangga", "a 3 m, c 5 m, B 53,13°", "Variasi Luas (Sudut B)", "[[K=ac\\sin(B)/2]]", "6 m²", "Sisi siku-siku kedua tak perlu"],
            ["Bagian rangka atap", "a 5 m, c 13 m, B 67,38°", "Variasi Luas (Sudut B)", "[[K=ac\\sin(B)/2]]", "30 m²", "Geometri, bukan kapasitas beban"],
            ["Segitiga 3-4-5", "r 1, s 6", "Luas dari Semiperimeter", "[[K=rs]]", "6 satuan persegi", "Pandangan lingkaran dalam atas luas"],
            ["Lahan 5-12-13", "r 2, s 15", "Luas dari Semiperimeter", "[[K=rs]]", "30 satuan persegi", "Cocok dengan pemeriksaan sisi siku-siku"],
            ["Panel segitiga", "c 10 m, h 4,8 m", "Variasi Luas (Tinggi)", "[[K=ch/2]]", "24 m²", "Tinggi harus tegak lurus"],
            ["Bidang segitiga", "c 20 m, h 9 m", "Variasi Luas (Tinggi)", "[[K=ch/2]]", "90 m²", "Segitiga siku-siku valid"]
          ]
        },
        "imgAlt": "Empat panel: taman 24 m², pelana atap 24 m², rangka atap 30 m², dan panel 24 m², masing-masing dengan segitiganya",
        "figcaption": "Empat perhitungan dunia nyata: taman, pelana atap, rangka atap, dan panel, masing-masing dengan segitiga dan luas akhirnya."
      },
      "sec-verify": {
        "h2": "Cara Memverifikasi Luas Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Satu segitiga 3-4-5, lima metode, satu jawaban. Diketahui [[a=3]], [[b=4]], [[c=5]], dengan [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]], dan [[h=ab/c=12/5=2.4]]:" },
          { "kind": "p", "text": "<strong>Metode 1, Sisi Siku-Siku:</strong> [[K=(3\\times4)/2=6]]. <strong>Metode 2, Sudut A:</strong> [[K=(4\\times5\\times0.6)/2=6]]. <strong>Metode 3, Sudut B:</strong> [[K=(3\\times5\\times0.8)/2=6]]. <strong>Metode 4, Inradius dan semiperimeter:</strong> [[K=1\\times6=6]]. <strong>Metode 5, Sisi miring dan tinggi:</strong> [[K=(5\\times2.4)/2=6]]." },
          { "kind": "p", "text": "Ini adalah lima rute matematis menuju besaran geometris yang sama. Luas segitiga tidak bergantung pada rumus benar mana yang digunakan; luas bergantung pada geometri aktual segitiga. Setiap kali dua metode independen sepakat mengenai segitiga Anda, Anda dapat mempercayai angka tersebut." }
        ],
        "imgAlt": "Segitiga 3-4-5 dengan lima panel: sisi siku-siku, sudut A, sudut B, inradius-semiperimeter, tinggi, semuanya memberi luas 6",
        "figcaption": "Masukan berbeda, rumus berbeda, luas segitiga yang sama."
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum Saat Menghitung Luas Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Kesalahan luas jarang merupakan kegagalan aritmetika. Kesalahan itu adalah kegagalan pelabelan, campur aduk rumus, dan selip satuan. Delapan belas di bawah ini mencakup hampir setiap jawaban salah yang dapat dihasilkan kalkulator pada halaman ini." },
          { "kind": "h3", "text": "1. Lupa Membagi dengan Dua" },
          { "kind": "p", "text": "Mengalikan sisi siku-siku tanpa membagi dua menghasilkan luas persegi panjang, bukan luas segitiga. Dengan sisi siku-siku 3 dan 4, [[3\\times4=12]] salah; [[(3\\times4)/2=6]] benar. Perbaikan: akhiri setiap perhitungan sisi siku-siku atau alas-tinggi dengan pembagian dua." },
          { "kind": "h3", "text": "2. Menggunakan Sisi Miring sebagai Salah Satu Sisi Siku-Siku yang Tegak Lurus" },
          { "kind": "p", "text": "Sisi miring tidak pernah merupakan sisi siku-siku. Memasukkan c = 5 sebagai sisi siku-siku bersama sisi siku-siku lainnya 3 menghasilkan [[(5\\times3)/2=7.5]] alih-alih 6. Perbaikan: identifikasi sisi terpanjang terlebih dahulu dan cadangkan untuk kolom sisi miring." },
          { "kind": "h3", "text": "3. Memasangkan Sudut A dengan Sisi yang Salah" },
          { "kind": "p", "text": "Rumus Sudut A memerlukan sisi [[b]], sisi yang mengapit sudut [[A]] bersama sisi miring. Memasukkan sisi [[a]] justru menghitung hasil kali yang salah. Perbaikan: periksa bahwa sudut [[A]] terletak di antara sisi [[b]] dan [[c]] sebelum memasukkan nilai." },
          { "kind": "h3", "text": "4. Memasangkan Sudut B dengan Sisi yang Salah" },
          { "kind": "p", "text": "Cerminannya: rumus Sudut B memerlukan sisi [[a]], bukan sisi [[b]]. Perbaikan: pastikan sudut [[B]] terletak di antara sisi [[a]] dan [[c]]." },
          { "kind": "h3", "text": "5. Menggunakan Sudut Apit yang Salah dalam Rumus Sinus" },
          { "kind": "p", "text": "Memasukkan 36,87 derajat di tempat yang seharusnya 53,13 derajat, atau sebaliknya, menghasilkan luas yang masuk akal tetapi salah. Perbaikan: cocokkan sudut dengan pasangan sisinya: Sudut A berpasangan dengan [[b]] dan [[c]], Sudut B dengan [[a]] dan [[c]]." },
          { "kind": "h3", "text": "6. Mempertukarkan Tinggi dengan Sisi Siku-Siku" },
          { "kind": "p", "text": "Tinggi [[h]] turun dari titik sudut siku-siku ke sisi miring; sisi siku-siku berjalan di sepanjang tepi segitiga. Memasukkan sisi siku-siku sebagai tinggi melebihkan tinggi. Perbaikan: tinggi harus mendarat di sisi miring dengan penanda sudut siku-siku." },
          { "kind": "h3", "text": "7. Menggunakan Garis yang Tidak Tegak Lurus sebagai Tinggi" },
          { "kind": "p", "text": "Garis tak tegak lurus dari titik sudut ke sisi miring lebih panjang daripada tinggi sebenarnya, sehingga luasnya keluar terlalu besar. Perbaikan: verifikasi ketegaklurusan, melalui konstruksi atau pemeriksaan [[h=ab/c]], sebelum menggunakan mode tinggi." },
          { "kind": "h3", "text": "8. Mempertukarkan Inradius dengan Circumradius" },
          { "kind": "p", "text": "Inradius menyentuh sisi-sisi dari dalam; circumradius mencapai titik-titik sudut dari luar. Dalam segitiga siku-siku, circumradius adalah [[c/2]], selalu lebih besar daripada inradius. Memasukkan circumradius ke rumus [[K=rs]] menggembungkan luas. Perbaikan: gunakan [[r=(a+b-c)/2]] untuk inradius segitiga siku-siku." },
          { "kind": "h3", "text": "9. Menggunakan Keliling Penuh Alih-Alih Semiperimeter" },
          { "kind": "p", "text": "Rumusnya adalah [[K=rs]] dengan [[s]] sebagai semiperimeter. Memasukkan keliling penuh 12 alih-alih 6 pada segitiga 3-4-5 menghasilkan 12 alih-alih 6. Perbaikan: bagi dua keliling sebelum mengalikannya dengan [[r]]." },
          { "kind": "h3", "text": "10. Mencampur Satuan Ukur yang Tidak Kompatibel" },
          { "kind": "p", "text": "Sisi siku-siku 3 meter dan 40 sentimeter bukanlah 3 dan 40 dalam satu rumus. Perbaikan: ubah setiap masukan ke satu satuan, misalnya 3 m dan 0,4 m, sebelum menghitung." },
          { "kind": "h3", "text": "11. Melaporkan Meter Persegi sebagai Meter" },
          { "kind": "p", "text": "Luas 6 m² bukanlah 6 m. Satuan persegi adalah bagian dari makna jawabannya: satuan itu menyatakan berapa permukaan, bukan berapa panjang. Perbaikan: selalu tulis satuan persegi bersama angkanya." },
          { "kind": "h3", "text": "12. Membulatkan Nilai Sinus Terlalu Dini" },
          { "kind": "p", "text": "Menggunakan 0,6 untuk sinus ketika nilai sebenarnya adalah 0,6000 tidak berbahaya, tetapi membulatkan 0,9231 menjadi 0,9 di tengah perhitungan menggeser hasilnya. Perbaikan: jaga ketelitian penuh di setiap langkah dan bulatkan hanya jawaban akhirnya." },
          { "kind": "h3", "text": "13. Memasukkan Sudut Siku-Siku atau Sudut Tidak Valid ke Kolom Sudut Lancip" },
          { "kind": "p", "text": "Mode sudut mengharapkan sudut lancip antara 0 dan 90 derajat. Memasukkan 90 derajat atau nilai negatif tidak menggambarkan masukan valid untuk mode ini. Perbaikan: masukkan sudut lancip yang sebenarnya dimiliki segitiga, dalam derajat." },
          { "kind": "h3", "text": "14. Mengira Kelima Mode Memerlukan Ukuran yang Sama" },
          { "kind": "p", "text": "Setiap mode meminta kumpulan masukan yang berbeda: mode sisi siku-siku memerlukan dua sisi siku-siku, mode Sudut A memerlukan sisi siku-siku, sisi miring, dan sudut, dan mode semiperimeter memerlukan inradius dan semiperimeter. Perbaikan: baca label kolom mode yang Anda pilih." },
          { "kind": "h3", "text": "15. Mengira Keliling yang Lebih Besar Selalu Berarti Luas yang Lebih Besar Secara Proporsional" },
          { "kind": "p", "text": "Keliling dan luas berskala berbeda: menggandakan semua sisi melipatgandakan luas empat kali. Segitiga dengan keliling lebih besar bahkan dapat memiliki luas lebih kecil jika bentuknya panjang dan ramping. Perbaikan: bandingkan luas dengan rumus luas, jangan pernah dengan keliling." },
          { "kind": "h3", "text": "16. Lupa Bahwa Luas yang Sama Dapat Dihitung dengan Berbagai Cara" },
          { "kind": "p", "text": "Memperlakukan setiap metode sebagai fakta terpisah melewatkan verifikasi bawaan: jika dua metode tidak sepakat, ada yang salah dengan masukan atau pilihan mode. Perbaikan: jalankan metode kedua dan selidiki setiap ketidakcocokan." },
          { "kind": "h3", "text": "17. Memasukkan Panjang Sisi yang Tidak Dapat Menggambarkan Segitiga yang Dimaksud" },
          { "kind": "p", "text": "Sisi-sisi yang gagal dalam pemeriksaan Pythagoras, seperti 2, 3, dan 10, tidak menggambarkan segitiga siku-siku sama sekali. Perbaikan: verifikasi [[a^2+b^2=c^2]] sebelum mempercayai luas apa pun yang dibangun dari sisi-sisi tersebut." },
          { "kind": "h3", "text": "18. Menggunakan Jalan Pintas Inradius Segitiga Siku-Siku untuk Segitiga yang Bukan Siku-Siku" },
          { "kind": "p", "text": "Rumus [[r=(a+b-c)/2]] diturunkan dari geometri 90 derajat. Menerapkannya pada segitiga lancip atau tumpul menghasilkan inradius yang tak bermakna. Perbaikan: gunakan jalan pintas ini hanya ketika segitiga dipastikan siku-siku." },
          { "kind": "h3", "text": "Salah Versus Benar: Contoh Konkret" },
          { "kind": "p", "text": "Diketahui [[a=3]] dan [[b=4]], perhitungan yang salah melewatkan pembagian dua: [[K=3\\times4=12]]. Itu adalah luas persegi panjang 3-kali-4 yang bersesuaian, bukan segitiga siku-sikunya. Perhitungan yang benar adalah [[K=(3\\times4)/2=6]]. Segitiga menempati setengah persegi panjang, sehingga pembagian dua itulah yang mengubah jawaban persegi panjang menjadi jawaban segitiga." }
        ]
      },
      "sec-validate": {
        "h2": "Cara Memeriksa Apakah Hasil Luas Anda Valid",
        "blocks": [
          { "kind": "p", "text": "Enam pemeriksaan menangkap sebagian besar hasil tidak valid sebelum meninggalkan halaman." },
          { "kind": "h3", "text": "Pemeriksaan 1: Ukuran Positif" },
          { "kind": "p", "text": "Semua panjang yang diperlukan harus positif: [[a>0]], [[b>0]], [[c>0]]. Untuk mode inradius, [[r>0]] dan [[s>0]], dan tinggi juga harus positif. Masukan nol atau negatif tidak menggambarkan segitiga." },
          { "kind": "h3", "text": "Pemeriksaan 2: Panjang Sisi Segitiga yang Valid" },
          { "kind": "p", "text": "Untuk segitiga siku-siku, [[a^2+b^2=c^2]] harus berlaku, dan sisi miring harus lebih panjang daripada kedua sisi siku-siku. Jika sisi-sisi gagal dalam pemeriksaan ini, masukannya tidak konsisten dan luasnya tak bermakna." },
          { "kind": "h3", "text": "Pemeriksaan 3: Pemasangan Sudut-Sisi yang Benar" },
          { "kind": "p", "text": "Sudut [[A]] berpasangan dengan sisi [[b]] dan [[c]] dalam rumus sudut apit; sudut [[B]] berpasangan dengan sisi [[a]] dan [[c]]. Pastikan pasangannya sebelum menerima hasil berbasis sudut." },
          { "kind": "h3", "text": "Pemeriksaan 4: Tinggi yang Benar" },
          { "kind": "p", "text": "Tinggi [[h]] harus tegak lurus terhadap sisi miring [[c]]. Uji kewarasan cepat: tinggi selalu lebih pendek daripada sisi miring dan lebih pendek daripada kedua sisi siku-siku." },
          { "kind": "h3", "text": "Pemeriksaan 5: Satuan Luas yang Benar" },
          { "kind": "p", "text": "Jika panjang masukan dalam meter, luas harus dalam meter persegi; sentimeter menghasilkan sentimeter persegi. Satuan jawabannya adalah kuadrat dari satuan masukan, bukan satuan masukan itu sendiri." },
          { "kind": "h3", "text": "Pemeriksaan 6: Pemeriksaan Silang dengan Metode Lain" },
          { "kind": "p", "text": "Gunakan segitiga 3-4-5 untuk membandingkan rumus sisi siku-siku dengan rumus semiperimeter: [[(3\\times4)/2=6]] dan [[1\\times6=6]]. Keduanya harus menghasilkan 6 satuan persegi. Perbedaan kecil dalam perhitungan berbasis sudut mungkin berasal dari ukuran sudut yang dibulatkan atau nilai trigonometri yang dibulatkan; perbedaan yang lebih besar menandakan kesalahan nyata. Panduan ini tidak menyatakan toleransi ketelitian atau jaminan akurasi apa pun untuk kalkulator: pemeriksaan ini tentang konsistensi, bukan tentang ketelitian yang dijanjikan." }
        ]
      },
      "sec-conclusion": {
        "h2": "Satu Segitiga, Lima Metode, Satu Luas",
        "blocks": [
          { "kind": "p", "text": "Setiap metode pada halaman ini menjawab pertanyaan yang sama dari titik awal yang berbeda. Sisi siku-siku ketika Anda memiliki kedua sisi yang tegak lurus, sinus ketika Anda memiliki sudut apit, inradius dan semiperimeter ketika lingkaran dalam terlihat, tinggi ketika sisi miring dan tingginya diketahui. Cocokkan mode dengan ukuran Anda, masukkan ke kolom yang benar dengan satuan yang kompatibel, dan biarkan kalkulator mengerjakan aritmetikanya. Kemudian verifikasi dengan metode kedua: dua rute menuju angka yang sama adalah tanda paling pasti bahwa geometrinya benar." }
        ]
      }
    },
    "faqs": [
      { "question": "Apa rumus luas segitiga siku-siku?", "answer": "Rumus standarnya adalah K = ab/2, dengan a dan b sebagai dua sisi siku-siku yang tegak lurus. Empat metode setara mencakup ukuran lain yang diketahui: K = bc sin(A)/2, K = ac sin(B)/2, K = rs (inradius kali semiperimeter), dan K = ch/2 (sisi miring kali tinggi, dibagi dua)." },
      { "question": "Mengapa dibagi dua saat menghitung luas segitiga?", "answer": "Dua segitiga siku-siku identik bergabung sepanjang sisi miringnya membentuk persegi panjang seluas ab. Satu segitiga tepat setengah dari persegi panjang itu, sehingga luasnya ab/2. Pembagian dua bersifat geometris, bukan sembarang, dan muncul dalam setiap metode luas pada halaman ini." },
      { "question": "Bisakah saya menghitung luas tanpa mengetahui sisi miring?", "answer": "Ya. Rumus sisi siku-siku K = ab/2 tidak memerlukan sisi miring, dan rumus inradius-semiperimeter K = rs juga tidak memerlukannya. Sisi miring hanya diperlukan untuk mode berbasis sudut dan mode tinggi." },
      { "question": "Bagaimana cara mencari luas menggunakan satu sisi dan sebuah sudut?", "answer": "Gunakan bentuk sudut apit. Dengan sisi siku-siku b, sisi miring c, dan sudut A, luasnya adalah K = bc sin(A)/2. Dengan sisi siku-siku a, sisi miring c, dan sudut B, luasnya adalah K = ac sin(B)/2. Masukkan sudut dalam derajat, dan pastikan sudut itu adalah sudut lancip di antara kedua sisi yang diketahui." },
      { "question": "Mengapa rumus berbasis sudut menggunakan sinus?", "answer": "Rumus umum untuk dua sisi dan sudut apitnya adalah K = 1/2 xy sin(theta). Sinus mengekstrak komponen tegak lurus dari satu sisi relatif terhadap sisi lainnya, yang merupakan tinggi efektif. Untuk sudut A yang diapit sisi b dan c, itu menghasilkan K = bc sin(A)/2." },
      { "question": "Apa inradius segitiga siku-siku?", "answer": "Inradius adalah jari-jari lingkaran yang tertulis di dalam segitiga, menyentuh ketiga sisinya. Untuk segitiga siku-siku, inradius dapat dihitung sebagai r = (a + b - c)/2. Inradius bukanlah circumradius, yang mencapai titik-titik sudut dan sama dengan c/2 pada segitiga siku-siku." },
      { "question": "Apa perbedaan keliling dan semiperimeter?", "answer": "Keliling adalah total panjang batas, a + b + c. Semiperimeter adalah setengahnya, s = (a + b + c)/2. Rumus luas K = rs menggunakan semiperimeter; menggunakan keliling penuh akan menggandakan jawaban." },
      { "question": "Bagaimana cara menghitung luas menggunakan sisi miring dan tinggi?", "answer": "Gunakan K = ch/2, dengan c sebagai sisi miring dan h sebagai tinggi tegak lurus dari titik sudut siku-siku ke sisi miring. Tinggi harus bertemu sisi miring pada 90 derajat; tinggi bukanlah salah satu sisi siku-siku. Jika hanya sisi siku-siku yang diketahui, cari tingginya terlebih dahulu dengan h = ab/c." },
      { "question": "Mengapa kelima metode luas memberikan hasil yang sama?", "answer": "Karena semuanya adalah deskripsi aljabar yang berbeda dari besaran geometris yang sama. Rumus sisi siku-siku, bentuk sinus, hasil kali inradius-semiperimeter, dan bentuk sisi miring-tinggi semuanya terbukti sama untuk segitiga siku-siku yang konsisten. Kesepakatan antara dua metode adalah verifikasi terbaik bahwa masukan dan mode sudah benar." },
      { "question": "Satuan apa yang harus saya gunakan untuk luas?", "answer": "Satuan persegi yang sesuai dengan panjang masukan: meter menghasilkan meter persegi, sentimeter menghasilkan sentimeter persegi. Ubah semua masukan ke satu satuan sebelum menghitung, dan laporkan hasilnya dengan satuan persegi, jangan pernah satuan linear." },
      { "question": "Bisakah saya menghitung luas jika hanya mengetahui sisi miring?", "answer": "Tidak. Sisi miring saja tidak menentukan segitiga siku-siku yang unik, sehingga luasnya tidak tetap. Anda memerlukan setidaknya satu ukuran independen lagi: sisi siku-siku, sudut lancip, tinggi, atau inradius beserta semiperimeter." },
      { "question": "Bagaimana cara memeriksa apakah perhitungan luas saya benar?", "answer": "Jalankan metode kedua pada segitiga yang sama dan bandingkan. Untuk segitiga 3-4-5, rumus sisi siku-siku menghasilkan (3 x 4)/2 = 6 dan metode semiperimeter menghasilkan 1 x 6 = 6. Verifikasi juga bahwa sisi-sisinya memenuhi teorema Pythagoras, pastikan pasangan sudut-sisi, dan periksa bahwa tinggi tegak lurus terhadap sisi miring." }
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedItems": [
      "Kalkulator Luas Segitiga Siku-Siku dari Sisi Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku dari Sudut",
      "Kalkulator Luas Segitiga Siku-Siku dari Semiperimeter",
      "Kalkulator Luas Segitiga Siku-Siku dari Tinggi",
      "Kalkulator Keliling dan Semiperimeter Segitiga Siku-Siku",
      "Kalkulator Inradius dan Circumradius Segitiga Siku-Siku",
      "Kalkulator Sisi Segitiga Siku-Siku"
    ]
  },
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "sec-intro": "ما هي حاسبة مساحة المثلث القائم الزاوية؟",
      "sec-triangle": "ما هي مساحة المثلث القائم الزاوية؟",
      "sec-legs": "مساحة المثلث القائم الزاوية باستخدام ضلعيه القائمين",
      "sec-angle-a": "إيجاد مساحة المثلث القائم الزاوية باستخدام الضلع b والوتر c والزاوية A",
      "sec-angle-b": "إيجاد مساحة المثلث القائم الزاوية باستخدام الضلع a والوتر c والزاوية B",
      "sec-inradius": "إيجاد مساحة المثلث القائم الزاوية باستخدام نصف قطر الدائرة الداخلية ونصف المحيط",
      "sec-altitude": "إيجاد مساحة المثلث القائم الزاوية باستخدام الوتر والارتفاع",
      "sec-choose": "أي صيغة لمساحة المثلث القائم الزاوية يجب أن تستخدم؟",
      "sec-howto": "كيفية استخدام حاسبة مساحة المثلث القائم الزاوية",
      "sec-applications": "تطبيقات حساب مساحة المثلث القائم الزاوية في الحياة الواقعية",
      "sec-verify": "كيفية التحقق من مساحة المثلث القائم الزاوية",
      "sec-mistakes": "أخطاء شائعة عند حساب مساحة المثلث القائم الزاوية",
      "sec-validate": "كيفية التحقق من صحة نتيجة المساحة",
      "sec-related": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
      "sec-faq": "الأسئلة الشائعة",
      "sec-conclusion": "الخلاصة"
    },
    "sections": {
      "sec-intro": {
        "h2": "ما هي حاسبة مساحة المثلث القائم الزاوية؟",
        "blocks": [
          { "kind": "p", "text": "تجد حاسبة مساحة المثلث القائم الزاوية المساحة ثنائية الأبعاد المحصورة بين أضلاع المثلث القائم الزاوية الثلاثة. فعلى سبيل المثال، المثلث القائم الزاوية الذي ضلعاه القائمان [[a=3\\text{ m}]] و[[b=4\\text{ m}]] مساحته [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]: أي أن المثلث يشغل ستة أمتار مربعة من السطح. وتُقاس المساحة بالوحدات المربعة لأنها تحصي مساحة مسطحة، لا طولاً." },
          { "kind": "p", "text": "الضلعان القائمان المتعامدان يبسّطان الحساب تبسيطاً كبيراً. وبما أن الضلعين القائمين يلتقيان عند 90 درجة، يمكن لأحدهما أن يكون القاعدة والآخر الارتفاع، فتكون المساحة مجرد نصف حاصل ضربهما. وهذه البساطة هي أحد أسباب كون صيغة الضلعين القائمين أول طريقة يتعلمها معظم الطلاب." },
          { "kind": "p", "text": "توجد عدة طرق للمساحة نفسها لأن المسائل الواقعية تعطيك قياسات مختلفة. فالنجار يقيس الضلعين القائمين للوحة، والمسّاح يقيس الوتر وزاوية، والهندسي الذي يعمل مع دائرة داخلية يعرف نصف قطر الدائرة الداخلية ونصف المحيط. وكل طريقة تحوّل مجموعتها الخاصة من القيم المعروفة إلى المساحة نفسها. وتقدم الحاسبة في هذه الصفحة خمسة أوضاع تطابق هذه الحالات: المساحة من الضلعين القائمين، وتغير المساحة (الزاوية A)، وتغير المساحة (الزاوية B)، والمساحة من نصف المحيط، وتغير المساحة (الارتفاع). وأفضل طريقة عادة هي التي تستخدم القياسات التي لديك فعلاً، دون فرض تحويلات إضافية أولاً." }
        ]
      },
      "sec-triangle": {
        "h2": "ما هي مساحة المثلث القائم الزاوية؟",
        "blocks": [
          { "kind": "p", "text": "يستخدم هذا الدليل ترميزاً واحداً متسقاً في كل أجزائه: [[A]] و[[B]] هما الزاويتان الحادتان، و[[C=90^\\circ]] هي الزاوية القائمة، والضلع [[a]] يقابل الزاوية [[A]]، والضلع [[b]] يقابل الزاوية [[B]]، والضلع [[c]] هو الوتر المقابل للزاوية [[C]]، و[[h]] هو الارتفاع العمودي من الرأس [[C]] إلى الوتر، و[[r]] هو نصف قطر الدائرة الداخلية، و[[s]] هو نصف المحيط، و[[K]] هي المساحة." },
          { "kind": "h3", "text": "ما هو المثلث القائم الزاوية؟" },
          { "kind": "p", "text": "المثلث القائم الزاوية له زاوية واحدة قياسها 90 درجة بالضبط. ويلتقي ضلعاه القائمان عند الزاوية القائمة، ويقع الوتر مقابل تلك الزاوية. والوتر هو دائماً أطول ضلع، والزاويتان الأخريان حادتان: لأن مجموع الزوايا الثلاث 180 درجة، فإن [[A+B=90^\\circ]]. والضلعان القائمان متعامدان، وهذه هي الخاصية التي تجعل صيغة المساحة مباشرة إلى هذا الحد." },
          { "kind": "h3", "text": "ماذا تعني المساحة؟" },
          { "kind": "p", "text": "تقيس المساحة الفضاء ثنائي الأبعاد المحصور بين أضلاع المثلث الثلاثة. وتختلف المساحة عن المحيط الذي يقيس الطول الكلي للحدود، وعن طول الضلع الذي يقيس بعداً واحداً، وعن الحجم الذي يقيس فضاءً ثلاثي الأبعاد. فقطعة الورق المثلثة مساحتها تساوي مقدار الورق الذي تغطيه، وقطعة الحديقة المثلثة مساحتها تساوي الأرض التي تشغلها. وتُذكر كلتاهما بالوحدات المربعة مثل المتر المربع، لأن المساحة تحصي مربعات الوحدة التي تتسع داخل الشكل." },
          { "kind": "h3", "text": "لماذا تُقسم المساحة على اثنين؟" },
          { "kind": "p", "text": "يمكن دمج مثلثين قائمي الزاوية متطابقين على طول وتريهما لتكوين مستطيل. فإذا كان لكل مثلث ضلعان قائمان متعامدان [[a]] و[[b]]، فإن مساحة المستطيل هي [[ab]]. ويشغل المثلث الواحد نصف ذلك المستطيل بالضبط، لذا [[[\\boxed{K=\\frac{ab}{2}}]]] والقسمة على اثنين ليست عامل تصحيح: بل هي النتيجة الهندسية لكون المثلث نصف مستطيل، وهي تظهر في كل طريقة مساحة في هذه الصفحة بشكل أو بآخر." },
          { "kind": "h3", "text": "لماذا يمكن أن يكون للمثلث نفسه خمس صيغ للمساحة؟" },
          { "kind": "p", "text": "لا تتغير مساحة المثلث عند استخدام طريقة قياس مختلفة. فالطرق تبدأ فقط بقيم معروفة مختلفة. فالضلعان القائمان يعطيان أبسط صيغة. والضلع القائم والوتر والزاوية الحادة المحصورة يتيحان صيغة قائمة على الجيب. ونصف قطر الدائرة الداخلية ونصف المحيط يقدمان علاقة هندسية بديلة. والوتر والارتفاع العمودي يستخدمان قاعدة القاعدة والارتفاع العامة. ويجب أن تعطي الطرق الخمس المساحة نفسها عندما تصف المدخلات المثلث الصحيح نفسه، وهذا الاتفاق هو أقوى تحقق متاح: طريقتان، ومثلث واحد، وإجابة واحدة." }
        ],
        "imgAlt": "تشريح مثلث قائم الزاوية: الضلعان القائمان a وb، الوتر c، الزاوية القائمة C، الارتفاع h إلى الوتر، K = ab/2",
        "figcaption": "تشريح المثلث القائم الزاوية: C هي الزاوية القائمة، وa وb هما الضلعان القائمان، وc هو الوتر، وh هو الارتفاع إلى الوتر."
      },
      "sec-legs": {
        "h2": "مساحة المثلث القائم الزاوية باستخدام ضلعيه القائمين",
        "blocks": [
          { "kind": "p", "text": "صيغة الضلعين القائمين هي نقطة البداية لمساحة المثلث القائم الزاوية: [[[\\boxed{K=\\frac{ab}{2}}]]] فهي تحتاج فقط إلى الضلعين المتعامدين، وكل ما عداها في هذه الصفحة يمكن اعتباره تغيراً يستعيد الكمية نفسها من مدخلات مختلفة." },
          { "kind": "h3", "text": "متى يجب استخدام صيغة الضلعين القائمين؟" },
          { "kind": "p", "text": "استخدم هذه الطريقة كلما كان الضلعان المتعامدان معروفين. فلا حاجة لحساب زاوية أو وتر أو نصف قطر دائرة داخلية أو ارتفاع أولاً. والقياس المباشر للضلعين القائمين شائع في النجارة وتركيب البلاط ومسائل الفصل الدراسي، ولهذا فإن وضع المساحة من الضلعين القائمين هو الخيار الافتراضي لمعظم الحسابات اليومية." },
          { "kind": "h3", "text": "كيف تعمل الصيغة؟" },
          { "kind": "p", "text": "يشكل الضلعان القائمان القاعدة والارتفاع العمودي للمثلث. والصيغة العامة لمساحة المثلث هي [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]؛ وبما أن الضلعين القائمين متعامدان، يمكن أخذ القاعدة والارتفاع مباشرة على أنهما [[a]] و[[b]]، فينتج [[K=ab/2]]. ولا يدخل حساب المثلثات هنا، ولا حاجة لإيجاد ضلع إضافي أولاً." },
          { "kind": "h3", "text": "مثال محلول بالكامل: مثلث 3-4-5" },
          { "kind": "p", "text": "المعطى [[a=3\\text{ m}]] و[[b=4\\text{ m}]]. الخطوة 1: اكتب الصيغة [[K=ab/2]]. الخطوة 2: عوّض القيم، [[K=(3\\times4)/2]]. الخطوة 3: اضرب، [[K=12/2]]. الخطوة 4: اقسم على اثنين، [[[\\boxed{K=6\\text{ m}^2}]]] والجواب ستة أمتار مربعة، لا ستة أمتار: فالوحدة تحمل معنى الكمية." },
          { "kind": "h3", "text": "هل يمكن تبديل الضلعين القائمين؟" },
          { "kind": "p", "text": "نعم. فالضرب عملية تبديلية، لذا [[ab=ba]] ومن ثم [[ab/2=ba/2]]. ولا تتغير المساحة إذا أُدخل الضلعان القائمان بترتيب معاكس، بشرط أن تطابق حقول الحاسبة أطوال الضلعين الصحيحة. وهذا التماثل يصح للضلعين القائمين فقط: فتبديل ضلع قائم مع الوتر يكسر الصيغة." },
          { "kind": "h3", "text": "ماذا لو كانت قيم الضلعين القائمين عشرية؟" },
          { "kind": "p", "text": "تعمل القياسات العشرية في الصيغة نفسها. فمع [[a=3.5\\text{ cm}]] و[[b=9.2\\text{ cm}]]: [[K=(3.5\\times9.2)/2]]، [[K=32.2/2]]، [[[\\boxed{K=16.1\\text{ cm}^2}]]] والحساب متماثل؛ فدقة المدخلات فقط هي التي تتغير، لذا احتفظ بأرقام كافية وقرّب في النهاية." },
          { "kind": "h3", "text": "ماذا لو كان أحد الضلعين القائمين مجهولاً؟" },
          { "kind": "p", "text": "يمكن أحياناً إيجاد الضلع القائم المفقود أولاً باستخدام نظرية فيثاغورس أو زاوية معروفة، ثم تطبيق صيغة الضلعين القائمين بعد ذلك. ولاحظ أن وضع الضلعين القائمين نفسه يحتاج إلى الضلعين معاً: فهو لا يستعيد الضلع المفقود تلقائياً. فإذا كان المعروف ضلعاً قائماً واحداً والوتر فقط، فإن حساب الضلع المفقود خطوة منفصلة قبل أن يمكن استخدام هذا الوضع." }
        ]
      },
      "sec-angle-a": {
        "h2": "إيجاد مساحة المثلث القائم الزاوية باستخدام الضلع b والوتر c والزاوية A",
        "blocks": [
          { "kind": "p", "text": "هذه الطريقة مفيدة عندما تكون [[b]] و[[c]] والزاوية الحادة [[A]] معروفة: [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] وهي وضع تغير المساحة (الزاوية A) في الحاسبة." },
          { "kind": "h3", "text": "لماذا تستخدم هذه الصيغة الجيب؟" },
          { "kind": "p", "text": "الصيغة العامة للمساحة لضلعين والزاوية المحصورة بينهما هي [[K=\\frac12 xy\\sin(\\theta)]]. وتقع الزاوية [[A]] بين الضلعين [[b]] و[[c]]، لذا بتعويض [[x=b]] و[[y=c]] و[[\\theta=A]] نحصل على [[K=\\frac12 bc\\sin(A)]]. ويفسر الجيب المكوّن العمودي لأحد الضلعين: فالجزء من الضلع [[c]] الذي يقف عمودياً على [[b]] وحده هو الذي يسهم في الارتفاع، وهذا الجزء العمودي هو [[c\\sin(A)]]." },
          { "kind": "h3", "text": "مثال محلول بالكامل: مثلث 3-4-5" },
          { "kind": "p", "text": "المعطى [[b=4\\text{ m}]] و[[c=5\\text{ m}]] و[[A\\approx36.87^\\circ]]. وبما أن [[\\sin(36.87^\\circ)\\approx0.6]]، عوّض: [[K=(4\\times5\\times0.6)/2]]، [[K=12/2]]، [[[\\boxed{K=6\\text{ m}^2}]]] وهذا يتفق مع صيغة الضلعين القائمين لأن 0.6 هي بالضبط النسبة [[a/c=3/5]]: فصيغة الجيب هي صيغة الضلعين القائمين متنكرة، حيث يلعب [[c\\sin(A)]] دور الضلع القائم الآخر." },
          { "kind": "h3", "text": "ماذا يحدث إذا تغيرت الزاوية؟" },
          { "kind": "p", "text": "يغيّر عامل الجيب المساحة عندما تتغير طولا الضلعين والزاوية المحصورة داخل مثلث صحيح. ولا تتخيل زاوية تتغير بينما تبقى كل أطوال الأضلاع ثابتة: ففي المثلث الحقيقي ترتبط الأضلاع والزوايا ببعضها، لذا فإن تغيير الزاوية يعيد تشكيل المثلث ويحرك المساحة معه. والزاوية المحصورة أساسية لهذه الصيغة تحديداً لأنها ترمّز مدى انفتاح المثلث أو انغلاقه." },
          { "kind": "h3", "text": "أخطاء شائعة في وضع الزاوية A" },
          { "kind": "p", "text": "تتكرر خمسة أخطاء في هذا الوضع. فإقران الزاوية [[A]] بالضلع الخطأ هو الأكثر شيوعاً: فهذه الصيغة تحتاج الضلع [[b]]، لا الضلع [[a]]، لأن [[b]] و[[c]] هما الضلعان المحيطان بالزاوية [[A]]. وإدخال الزاوية بالوحدة الخطأ يفسد قيمة الجيب: فهذه الحاسبة تتوقع الدرجات، لذا لا يجوز إدخال 36.87 درجة على أنها 0.6435 راديان. ونسيان القسمة على اثنين يضاعف الجواب. وإدخال زاوية قائمة أو زاوية غير حادة في حقل الزاوية الحادة لا يصف مدخلاً صحيحاً لهذا الوضع؛ فيجب أن تكون الزاوية بين 0 و90 درجة حصراً." }
        ]
      },
      "sec-angle-b": {
        "h2": "إيجاد مساحة المثلث القائم الزاوية باستخدام الضلع a والوتر c والزاوية B",
        "blocks": [
          { "kind": "p", "text": "يستخدم هذا الوضع الزاوية الحادة الأخرى وضلعيها المحيطين: [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]] وهو وضع تغير المساحة (الزاوية B) في الحاسبة." },
          { "kind": "h3", "text": "لماذا تعمل هذه الصيغة؟" },
          { "kind": "p", "text": "يحيط الضلعان [[a]] و[[c]] بالزاوية [[B]]. وبالانطلاق من الصيغة العامة [[K=\\frac12 xy\\sin(\\theta)]] وتعويض [[x=a]] و[[y=c]] و[[\\theta=B]] نحصل على [[K=\\frac12 ac\\sin(B)]]. والبنية متماثلة مع صيغة الزاوية A؛ فالتسميات وحدها هي التي تتحرك، لأن هندسة الزاويتين الحادتين تعكس إحداهما الأخرى." },
          { "kind": "h3", "text": "مثال محلول بالكامل: المثلث 3-4-5 نفسه" },
          { "kind": "p", "text": "المعطى [[a=3\\text{ m}]] و[[c=5\\text{ m}]] و[[B\\approx53.13^\\circ]]. وبما أن [[\\sin(53.13^\\circ)\\approx0.8]]، احسب: [[K=(3\\times5\\times0.8)/2]]، [[K=12/2]]، [[[\\boxed{K=6\\text{ m}^2}]]] والنتيجة تطابق طريقة الضلعين القائمين وطريقة الزاوية A، كما يجب: فالثلاثة تصف المثلث نفسه." },
          { "kind": "h3", "text": "كيف ترتبط الزاويتان A وB؟" },
          { "kind": "p", "text": "الزاويتان الحادتان متتامتان: [[[\\boxed{A+B=90^\\circ}]]] وهذا يعطي المتطابقتين [[\\sin(A)=\\cos(B)]] و[[\\sin(B)=\\cos(A)]]. ففي مثلث 3-4-5، [[\\sin(A)=0.6=\\cos(B)]] و[[\\sin(B)=0.8=\\cos(A)]]. وتفسر هذه العلاقات لماذا يحسب وضعا الزاويتين المساحة نفسها عندما تكون المدخلات متسقة: فجيب أحد الوضعين هو جيب تمام الوضع الآخر، وهندسة المثلث لا تتغير أياً كانت الزاوية الحادة التي تبدأ منها." },
          { "kind": "h3", "text": "أخطاء شائعة في وضع الزاوية B" },
          { "kind": "p", "text": "تظهر هنا الأخطاء المعكوسة: استخدام الضلع [[b]] بدلاً من الضلع [[a]]، وإقران الزاوية [[B]] بالضلع الخطأ، والخلط بين الزاويتين الحادتين. ونسيان دالة الجيب أو نسيان القسمة على اثنين هما زلتا الحساب نفسهما كما في وضع الزاوية A. وأخيراً، فالزاوية التي لا تطابق المثلث المقاس، مثل إدخال 36.87 درجة حيث ينبغي 53.13 درجة، تنتج بصمت مساحة خاطئة تبدو معقولة، لذا تحقق دائماً من أن الزاوية تطابق زوج الضلعين." }
        ]
      },
      "sec-inradius": {
        "h2": "إيجاد مساحة المثلث القائم الزاوية باستخدام نصف قطر الدائرة الداخلية ونصف المحيط",
        "blocks": [
          { "kind": "p", "text": "تحتاج هذه الطريقة إلى رقمين فقط، نصف قطر الدائرة الداخلية [[r]] ونصف المحيط [[s]]: [[[\\boxed{K=rs}]]] ونصف قطر الدائرة الداخلية هو نصف قطر الدائرة المرسومة داخل المثلث، الدائرة التي تمس أضلاعه الثلاثة. ونصف المحيط هو نصف محيط المثلث: [[[\\boxed{s=\\frac{a+b+c}{2}}]]] وهي وضع المساحة من نصف المحيط في الحاسبة." },
          { "kind": "h3", "text": "لماذا تساوي المساحة نصف قطر الدائرة الداخلية مضروباً في نصف المحيط؟" },
          { "kind": "p", "text": "صِل مركز الدائرة الداخلية، وهو مركز الدائرة المرسومة داخل المثلث، برؤوسه الثلاثة. فهذا يقسم المثلث إلى ثلاثة مثلثات أصغر. ولكل مثلث صغير الارتفاع العمودي نفسه [[r]]، لأن نصف قطر الدائرة الداخلية هو المسافة العمودية من المركز إلى كل ضلع. وجمع مساحاتها يعطي [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]. وبإخراج [[r/2]] عاملاً مشتركاً: [[K=\\frac12 r(a+b+c)]]. وبما أن [[s=(a+b+c)/2]]، يتبع ذلك [[[\\boxed{K=rs}]]] وهذه العلاقة تصح لأي مثلث صحيح، لا للمثلث القائم الزاوية فقط، بشرط معرفة نصف قطر الدائرة الداخلية ونصف المحيط الصحيحين." },
          { "kind": "h3", "text": "إيجاد نصف قطر الدائرة الداخلية للمثلث القائم الزاوية" },
          { "kind": "p", "text": "للمثلث القائم الزاوية يوجد اختصار مريح: [[[\\boxed{r=\\frac{a+b-c}{2}}]]] وعامله كاختصار للمثلث القائم الزاوية، لا كالصيغة العامة لنصف قطر الدائرة الداخلية: ففي المثلث العام يأتي نصف قطر الدائرة الداخلية من [[r=K/s]]، وهذا دائري إذا كنت تحاول إيجاد المساحة. وينجح الاختصار لأن طولي المماسين من رأس الزاوية القائمة متساويان ولأن الجبر ينهار بدقة في حالة الدرجات التسعين." },
          { "kind": "h3", "text": "مثال محلول بالكامل: مثلث 3-4-5" },
          { "kind": "p", "text": "المعطى [[a=3]] و[[b=4]] و[[c=5]]. أولاً نصف المحيط: [[s=(3+4+5)/2]]، [[[\\boxed{s=6}]]] ثم نصف قطر الدائرة الداخلية: [[r=(3+4-5)/2]]، [[[\\boxed{r=1}]]] والمساحة هي [[K=rs]]، [[K=1\\times6]]، [[[\\boxed{K=6\\text{ square units}}]]] والجواب يطابق صيغة الضلعين القائمين، مؤكداً أن منظوري الدائرة الداخلية والضلعين القائمين يصفان المثلث نفسه." },
          { "kind": "h3", "text": "مثال محلول بالكامل: مثلث 5-12-13" },
          { "kind": "p", "text": "المعطى [[a=5]] و[[b=12]] و[[c=13]]. نصف المحيط: [[s=(5+12+13)/2=15]]. نصف قطر الدائرة الداخلية: [[r=(5+12-13)/2=2]]. المساحة: [[K=2\\times15]]، [[[\\boxed{K=30\\text{ square units}}]]] تحقق بصيغة الضلعين القائمين: [[K=(5\\times12)/2=30]]. وتتفق الطريقتان، وهي النتيجة المتوقعة كلما كانت قياسات الأضلاع متسقة." },
          { "kind": "h3", "text": "أخطاء شائعة" },
          { "kind": "p", "text": "الخلط بين نصف قطر الدائرة الداخلية ونصف قطر الدائرة الخارجية هو الخطأ المميز: فنصف قطر الدائرة الداخلية يمس الأضلاع من الداخل، بينما يصل نصف قطر الدائرة الخارجية إلى الرؤوس من الخارج، وهما رقمان مختلفان. واستخدام المحيط الكامل بدلاً من نصف المحيط يضاعف الجواب. وتطبيق اختصار نصف قطر الدائرة الداخلية للمثلث القائم الزاوية [[r=(a+b-c)/2]] على مثلث غير قائم الزاوية يعطي قيمة لا معنى لها. ونسيان أن حاصل الضرب [[rs]] له وحدات مربعة، وإدخال قياسات أضلاع غير متسقة في حسابي [[r]] و[[s]]، يكملان الإخفاقات الشائعة." }
        ]
      },
      "sec-altitude": {
        "h2": "إيجاد مساحة المثلث القائم الزاوية باستخدام الوتر والارتفاع",
        "blocks": [
          { "kind": "p", "text": "تستخدم هذه الطريقة الوتر [[c]] قاعدة والارتفاع العمودي [[h]] ارتفاعاً: [[[\\boxed{K=\\frac{ch}{2}}]]] وهي وضع تغير المساحة (الارتفاع) في الحاسبة." },
          { "kind": "h3", "text": "ما هو الارتفاع؟" },
          { "kind": "p", "text": "الارتفاع خط عمودي يُرسم من رأس إلى الضلع المقابل. وفي هذا الوضع يبدأ الارتفاع عند رأس الزاوية القائمة [[C]] ويلتقي الوتر عند 90 درجة. وهو ليس الضلع [[a]] ولا الضلع [[b]]: فالضلعان القائمان يقعان على حافتي المثلث، بينما ينحدر الارتفاع إلى الداخل ويقع على الوتر. وعلامة الزاوية القائمة حيث يلتقي [[h]] مع [[c]] هي الضمان البصري على تحقق شرط العمودية." },
          { "kind": "h3", "text": "لماذا تعمل الصيغة؟" },
          { "kind": "p", "text": "إنها صيغة القاعدة والارتفاع العامة مع اختيار معين للقاعدة. ابدأ من [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. واختر الوتر قاعدة، [[\\text{base}=c]]، والارتفاع العمودي ارتفاعاً، [[\\text{height}=h]]. لذا [[K=ch/2]]. ولا شيء في هذا الاشتقاق خاص بالمثلثات القائمة الزاوية: فمساحة أي مثلث يمكن كتابتها بهذه الطريقة، لكن صيغة الضلعين القائمين للمثلث القائم الزاوية أسرع ببساطة عندما يكون الضلعان القائمان معروفين." },
          { "kind": "h3", "text": "مثال محلول بالكامل: مثلث 6-8-10" },
          { "kind": "p", "text": "المعطى [[c=10\\text{ m}]] و[[h=4.8\\text{ m}]]. احسب: [[K=(10\\times4.8)/2]]، [[K=48/2]]، [[[\\boxed{K=24\\text{ m}^2}]]] وهذه هي المساحة نفسها لمثلث قائم الزاوية ضلعاه القائمان 6 م و8 م، لأن [[(6\\times8)/2=24]]. وصفان مختلفان، ومساحة واحدة." },
          { "kind": "h3", "text": "كيف يمكن حساب الارتفاع؟" },
          { "kind": "p", "text": "عندما يكون الضلعان القائمان والوتر معروفين، يُستنتج الارتفاع من مساواة صيغتي المساحة: [[ab/2=ch/2]]، لذا [[[\\boxed{h=\\frac{ab}{c}}]]] ففي مثلث 6-8-10: [[h=(6\\times8)/10=4.8\\text{ m}]]. والارتفاع أقصر من الوتر، كما يجب: فالعمودي هو أقصر طريق من الرأس إلى الخط. ولاحظ أن وضع الارتفاع لا يحسب الارتفاع المفقود بنفسه؛ فيجب أن يكون الارتفاع معروفاً أو مستنتجاً أولاً." }
        ]
      },
      "sec-choose": {
        "h2": "أي صيغة لمساحة المثلث القائم الزاوية يجب أن تستخدم؟",
        "blocks": [
          { "kind": "p", "text": "خمس طرق، ومساحة واحدة. والمقارنة أدناه تربط كل مجموعة من القياسات المعروفة بصيغتها ووضع الحاسبة الخاص بها. اختر الصف الذي يطابق الأرقام التي في يدك فعلاً." },
          { "kind": "h3", "text": "لماذا تكون صيغة الضلعين القائمين غالباً الأبسط" },
          { "kind": "p", "text": "تحتاج صيغة الضلعين القائمين إلى قياسين فقط ولا حساب مثلثات. اضرب، ثم انصف، وانتهى. وكلما توفر الضلعان المتعامدان، كانت كل طريقة أخرى طريقاً أطول إلى الرقم نفسه." },
          { "kind": "h3", "text": "متى تكون صيغة الجيب مفيدة" },
          { "kind": "p", "text": "تستحق الطريقة القائمة على الزاوية مكانتها عندما تشمل القياسات المتاحة زاوية حادة وضلعاً قائماً والوتر، كما في خطوط رؤية المساحة أو مثلثات الملاحة. فلو لم تكن الزاوية معروفة، لوجب عليك أولاً استعادة الضلع القائم المفقود قبل أن يمكن استخدام صيغة الضلعين القائمين؛ فصيغة الجيب تتخطى ذلك الالتفاف." },
          { "kind": "h3", "text": "متى تكون طريقة نصف المحيط مفيدة" },
          { "kind": "p", "text": "تناسب صيغة نصف قطر الدائرة الداخلية ونصف المحيط مسائل الهندسة التي تتضمن دائرة داخلية فعلاً، أو الحالات التي يكون فيها [[r]] و[[s]] معروفين من خطوات سابقة. وهي أيضاً تحقق متقاطع مستقل ممتاز: فبما أنها لا تشترك في أي حساب مع صيغة الضلعين القائمين، فإن اتفاقهما يشير بقوة إلى صحة كليهما." },
          { "kind": "h3", "text": "متى تكون صيغة الارتفاع مفيدة" },
          { "kind": "p", "text": "طريقة الارتفاع هي الخيار الطبيعي عندما يكون الوتر وارتفاعه العمودي هما الكميتين المعروفتين، وهذا يحدث في مسائل التحليل حيث يُقسَّم المثلث على طول ارتفاعه. وكصيغة الضلعين القائمين، هي حساب قاعدة وارتفاع عادي بلا حساب مثلثات." }
        ],
        "table": {
          "headers": ["القياسات المعروفة", "الطريقة الموصى بها", "الصيغة"],
          "rows": [
            ["الضلعان القائمان المتعامدان [[a]]، [[b]]", "المساحة من الضلعين القائمين", "[[K=ab/2]]"],
            ["الضلع القائم [[b]]، الوتر [[c]]، الزاوية [[A]]", "تغير المساحة (الزاوية A)", "[[K=bc\\sin(A)/2]]"],
            ["الضلع القائم [[a]]، الوتر [[c]]، الزاوية [[B]]", "تغير المساحة (الزاوية B)", "[[K=ac\\sin(B)/2]]"],
            ["نصف قطر الدائرة الداخلية [[r]]، نصف المحيط [[s]]", "المساحة من نصف المحيط", "[[K=rs]]"],
            ["الوتر [[c]]، الارتفاع العمودي [[h]]", "تغير المساحة (الارتفاع)", "[[K=ch/2]]"]
          ]
        },
        "imgAlt": "خمس لوحات تعرض صيغ المساحة K=ab/2، K=bc sin(A)/2، K=ac sin(B)/2، K=rs، وK=ch/2",
        "figcaption": "صيغ المساحة الخمس والقياسات التي تحتاجها كل واحدة."
      },
      "sec-howto": {
        "h2": "كيفية استخدام حاسبة مساحة المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "اتبع هذه الخطوات لأي من الأوضاع الخمسة. فاختيار الوضع الصحيح أهم من أي شيء آخر: فالوضع يحدد الصيغة التي ستعمل، لذا فالصيغة الصحيحة مع الوضع الخطأ تجيب عن السؤال الخطأ." },
          { "kind": "h3", "text": "جولة كاملة: الأوضاع الخمسة على مثلث 3-4-5" },
          { "kind": "p", "text": "بالمعطيات [[a=3]] و[[b=4]] و[[c=5]]، مع [[A\\approx36.87^\\circ]] و[[B\\approx53.13^\\circ]] و[[r=1]] و[[s=6]] و[[h=2.4]]، إليك ما يحتاجه كل وضع وما يعيده. ويعيد كل وضع [[[\\boxed{K=6\\text{ square units}}]]]" }
        ],
        "steps": [
          "<strong>حدد القياسات المعروفة لديك فعلاً.</strong> اذكر أياً من الأضلاع القائمة والوتر والزوايا ونصف قطر الدائرة الداخلية ونصف المحيط والارتفاع تملك فعلاً.",
          "<strong>اختر وضع الحاسبة المطابق لتلك القياسات.</strong> المساحة من الضلعين القائمين، أو تغير المساحة (الزاوية A)، أو تغير المساحة (الزاوية B)، أو المساحة من نصف المحيط، أو تغير المساحة (الارتفاع).",
          "<strong>اقرأ تسميات حقول الإدخال المطلوبة.</strong> فكل وضع يعرض فقط الحقول التي تحتاجها صيغته.",
          "<strong>حدد الأضلاع القائمة والوتر والزاوية ونصف قطر الدائرة الداخلية ونصف المحيط والارتفاع حسب الاقتضاء.</strong> وطابق كل قياس معروف مع تسميته، مستخدماً ترميز هذا الدليل.",
          "<strong>أدخل أول قياس مطلوب.</strong> فعلى سبيل المثال، \"Leg a\" في وضع الضلعين القائمين.",
          "<strong>أدخل القياسات المتبقية.</strong> وأبقِ القيم في الحقول التي تصفها تسمياتها.",
          "<strong>اختر وحدات متوافقة باستخدام محددات الوحدات المتاحة.</strong> فيجب أن تشترك كل مدخلات الأطوال في نظام وحدات واحد قبل ضربها.",
          "<strong>في الأوضاع القائمة على الزاوية، أدخل الزاوية الحادة الصحيحة.</strong> فهذه الحاسبة تتوقع الزوايا بالدرجات. أدخل الزاوية [[A]] في وضع الزاوية A والزاوية [[B]] في وضع الزاوية B، ولا تدخل الزاوية القائمة أبداً.",
          "<strong>تحقق من أن كل المدخلات موجبة وتصف مثلثاً صحيحاً.</strong> فيجب أن تكون الأطوال موجبة، وأن يتجاوز الوتر أياً من الضلعين القائمين.",
          "<strong>انقر على احسب Area.</strong> فالزر يشغّل صيغة الوضع المحدد.",
          "<strong>راجع نتيجة المساحة وخطوات الحل.</strong> فالحاسبة تعرض الصيغة والتعويض والمساحة النهائية بالوحدات المربعة.",
          "<strong>استخدم التصور الحي للمثلث للتحقق من التسميات.</strong> وتأكد من أن تسميات الأضلاع والزوايا في الرسم تطابق قياساتك المقصودة.",
          "<strong>استخدم إعادة تعيين عند بدء حساب جديد.</strong> فزر إعادة تعيين يمسح كل الحقول ليبدأ الحساب التالي نظيفاً."
        ],
        "closingParagraphs": [
          "<strong>المساحة من الضلعين القائمين.</strong> أدخل \"Leg a\" = 3 و\"Leg b\" = 4. الصيغة: [[K=ab/2]]. التعويض: [[K=(3\\times4)/2]]. النتيجة: 6 وحدات مربعة.",
          "<strong>تغير المساحة (الزاوية A).</strong> أدخل \"Leg b\" = 4 و\"Hypotenuse c\" = 5 و\"Angle A\" = 36.87. الصيغة: [[K=bc\\sin(A)/2]]. التعويض: [[K=(4\\times5\\times0.6)/2]]. النتيجة: 6 وحدات مربعة.",
          "<strong>تغير المساحة (الزاوية B).</strong> أدخل \"Leg a\" = 3 و\"Hypotenuse c\" = 5 و\"Angle B\" = 53.13. الصيغة: [[K=ac\\sin(B)/2]]. التعويض: [[K=(3\\times5\\times0.8)/2]]. النتيجة: 6 وحدات مربعة.",
          "<strong>المساحة من نصف المحيط.</strong> أدخل \"Inradius r\" = 1 و\"Semiperimeter s\" = 6. الصيغة: [[K=rs]]. التعويض: [[K=1\\times6]]. النتيجة: 6 وحدات مربعة.",
          "<strong>تغير المساحة (الارتفاع).</strong> أدخل \"Hypotenuse c\" = 5 و\"Altitude h\" = 2.4. الصيغة: [[K=ch/2]]. التعويض: [[K=(5\\times2.4)/2]]. النتيجة: 6 وحدات مربعة.",
          "يستخدم كل وضع مجموعة مختلفة من القيم المعروفة، ولا يتطلب أي منها حقول الإدخال نفسها. والجواب المشترك هو المقصود: خمسة أوصاف، ومثلث واحد، ومساحة واحدة."
        ]
      },
      "sec-applications": {
        "h2": "تطبيقات حساب مساحة المثلث القائم الزاوية في الحياة الواقعية",
        "blocks": [
          { "kind": "p", "text": "يذكر كل مثال الموقف والقياسات المعروفة ووضع الحاسبة المناسب وسبب مناسبته والصيغة والتعويض خطوة بخطوة والجواب النهائي بالوحدات المربعة وتفسيراً بلغة بسيطة وفكرة للتحقق عند الفائدة والافتراضات الكامنة وراء نموذج المثلث." },
          { "kind": "h3", "text": "مثال 1: حساب مساحة حديقة مثلثة الشكل" },
          { "kind": "p", "text": "تحتوي حديقة على قسم زراعة مثلث قائم الزاوية ضلعاه القائمان المتعامدان 6 م و8 م. اختر المساحة من الضلعين القائمين، وهو الملائم الطبيعي عندما يُقاس الضلعان القائمان مباشرة: [[K=(6\\times8)/2]]، [[[\\boxed{K=24\\text{ m}^2}]]] ويغطي القسم 24 متراً مربعاً من سطح الزراعة. وهذا يفترض أن قسم الحديقة يُمثَّل بدقة بمثلث قائم الزاوية ذي حواف مستقيمة." },
          { "kind": "h3", "text": "مثال 2: قياس لوح خشب رقائقي مثلث" },
          { "kind": "p", "text": "يقطع نجار لوحة مثلثة قائمة الزاوية ضلعاها القائمان 1.2 م و0.8 م. اختر المساحة من الضلعين القائمين: [[K=(1.2\\times0.8)/2]]، [[K=0.96/2]]، [[[\\boxed{K=0.48\\text{ m}^2}]]] وتغطي اللوحة أقل بقليل من نصف متر مربع، مما يساعد على تقدير تغطية المادة. ولا تدخل بدلات القطع وهدر المادة في هذه المساحة الهندسية." },
          { "kind": "h3", "text": "مثال 3: إيجاد مساحة شراع مثلث" },
          { "kind": "p", "text": "لقسم شراع مثلث ضلعان قائمان متعامدان 5 م و12 م. اختر المساحة من الضلعين القائمين: [[K=(5\\times12)/2]]، [[[\\boxed{K=30\\text{ m}^2}]]] وتعطي الصيغة المساحة المسطحة للقسم المثلث، وهي مفيدة لتقديرات القماش قبل احتساب اللحامات والانحناء." },
          { "kind": "h3", "text": "مثال 4: تقدير مساحة قطعة أرض مثلثة قائمة الزاوية" },
          { "kind": "p", "text": "حدد مسح أرض قسماً مثلثاً قائم الزاوية ضلعاه المتعامدان 30 م و40 م. اختر المساحة من الضلعين القائمين: [[K=(30\\times40)/2]]، [[[\\boxed{K=600\\text{ m}^2}]]] وهذه مساحة القسم المثلث المحدد، وليست بالضرورة المساحة الكلية للعقار المحيط. وقد تتطلب حدود الأراضي الواقعية مسحاً أكثر تفصيلاً من نموذج المثلث الواحد." },
          { "kind": "h3", "text": "مثال 5: حساب مساحة جبهة سقف باستخدام الزاوية A" },
          { "kind": "p", "text": "لقسم سقف مثلث مبسط [[b=6\\text{ m}]] و[[c=10\\text{ m}]] و[[A\\approx53.13^\\circ]]. اختر تغير المساحة (الزاوية A)، لأن الضلع القائم والوتر والزاوية المحصورة هي البيانات المقاسة. ومع [[\\sin(53.13^\\circ)\\approx0.8]]: [[K=(6\\times10\\times0.8)/2]]، [[[\\boxed{K=24\\text{ m}^2}]]] والنتيجة هي مساحة المقطع المثلث. وتعتمد مساحة سطح السقف الحقيقية الكلية على هندسته ثلاثية الأبعاد وأقسام السقف الأخرى." },
          { "kind": "h3", "text": "مثال 6: إيجاد مساحة مظلة مثلثة" },
          { "kind": "p", "text": "لقسم مظلة مثلث قائم الزاوية [[b=4\\text{ m}]] و[[c=5\\text{ m}]] و[[A\\approx36.87^\\circ]]. اختر تغير المساحة (الزاوية A): [[K=bc\\sin(A)/2]]، ومع [[\\sin(36.87^\\circ)\\approx0.6]]، [[K=(4\\times5\\times0.6)/2]]، [[[\\boxed{K=6\\text{ m}^2}]]] وهذا يفترض أن القياسات تصف مثلثاً قائم الزاوية مسطحاً، وهو ما يصح لمظلة مستطيلة مشدودة مقطوعة على القطر." },
          { "kind": "h3", "text": "مثال 7: حساب لوحة دعم مثلثة باستخدام الزاوية B" },
          { "kind": "p", "text": "للوحة دعم [[a=3\\text{ m}]] و[[c=5\\text{ m}]] و[[B\\approx53.13^\\circ]]. اختر تغير المساحة (الزاوية B): [[K=(3\\times5\\times0.8)/2]]، [[[\\boxed{K=6\\text{ m}^2}]]] وتجد صيغة الزاوية المساحة دون إدخال الضلعين القائمين مباشرة، مما يساعد عندما لم يُقَس الضلع القائم الثاني أبداً." },
          { "kind": "h3", "text": "مثال 8: إيجاد مساحة قسم جمالون مثلث" },
          { "kind": "p", "text": "لقسم جمالون مثلث قائم الزاوية [[a=5\\text{ m}]] و[[c=13\\text{ m}]] و[[B\\approx67.38^\\circ]]. اختر تغير المساحة (الزاوية B). وبما أن [[\\sin(67.38^\\circ)\\approx12/13]]: [[K=(5\\times13\\times(12/13))/2]]، [[[\\boxed{K=30\\text{ m}^2}]]] وهذه هي المساحة الهندسية للقسم المثلث، لا حساب قدرة التحمل الإنشائية." },
          { "kind": "h3", "text": "مثال 9: حساب المساحة من نصف قطر الدائرة الداخلية ونصف المحيط" },
          { "kind": "p", "text": "تأمل مثلثاً قائم الزاوية 3-4-5 مع [[r=1]] و[[s=6]]. اختر المساحة من نصف المحيط: [[K=rs]]، [[K=1\\times6]]، [[[\\boxed{K=6\\text{ square units}}]]] ويعطي نصف قطر الدائرة الداخلية ونصف المحيط طريقاً بديلاً لا يضرب الضلعين القائمين أبداً، ومع ذلك يصل إلى الجواب نفسه." },
          { "kind": "h3", "text": "مثال 10: إيجاد مساحة قطعة أرض مثلثة 5-12-13" },
          { "kind": "p", "text": "لقطعة أرض مثلثة قائمة الزاوية أضلاعها [[a=5]] و[[b=12]] و[[c=13]]. اختر المساحة من نصف المحيط. نصف المحيط: [[s=(5+12+13)/2=15]]. نصف قطر الدائرة الداخلية: [[r=(5+12-13)/2=2]]. المساحة: [[K=2\\times15]]، [[[\\boxed{K=30\\text{ square units}}]]] تحقق بصيغة الضلعين القائمين: [[K=(5\\times12)/2=30]]. وتتفق الطريقتان لأن كلتيهما تصف القطعة نفسها." },
          { "kind": "h3", "text": "مثال 11: تقدير مساحة لوحة مثلثة من الارتفاع" },
          { "kind": "p", "text": "تُمثَّل لوحة مثلثة بمثلث قائم الزاوية وتره 10 م وارتفاعه العمودي إلى الوتر 4.8 م. اختر تغير المساحة (الارتفاع): [[K=ch/2]]، [[K=(10\\times4.8)/2]]، [[[\\boxed{K=24\\text{ m}^2}]]] ويجب أن يكون الارتفاع عمودياً على الوتر: فأي خط آخر من الرأس إلى الوتر أطول وسيبالغ في المساحة." },
          { "kind": "h3", "text": "مثال 12: حساب قسم مثلث من الوتر والارتفاع" },
          { "kind": "p", "text": "لقسم مثلث قائم الزاوية وتره 20 م وارتفاعه العمودي 9 م. اختر تغير المساحة (الارتفاع): [[K=(20\\times9)/2]]، [[[\\boxed{K=90\\text{ m}^2}]]] وهذه هي مساحة المثلث عندما تصف القياسات المثلث القائم الزاوية الصحيح نفسه، وهو كذلك هنا: فـ 9 م أقل بكثير من طول الوتر، كما يجب أن يكون العمودي." },
          { "kind": "h3", "text": "مقارنة الأمثلة العملية" }
        ],
        "table": {
          "headers": ["الموقف", "القيم المعروفة", "وضع الحاسبة", "الصيغة", "المساحة النهائية", "التفسير"],
          "rows": [
            ["حوض الحديقة", "الضلعان القائمان 6 م، 8 م", "المساحة من الضلعين القائمين", "[[K=ab/2]]", "24 م²", "سطح الزراعة"],
            ["لوح الخشب الرقائقي", "الضلعان القائمان 1.2 م، 0.8 م", "المساحة من الضلعين القائمين", "[[K=ab/2]]", "0.48 م²", "تغطية المادة"],
            ["الشراع", "الضلعان القائمان 5 م، 12 م", "المساحة من الضلعين القائمين", "[[K=ab/2]]", "30 م²", "مساحة القماش المسطحة"],
            ["قسم الأرض", "الضلعان القائمان 30 م، 40 م", "المساحة من الضلعين القائمين", "[[K=ab/2]]", "600 م²", "القسم، لا العقار كله"],
            ["جبهة السقف", "b 6 م، c 10 م، A 53.13°", "تغير المساحة (الزاوية A)", "[[K=bc\\sin(A)/2]]", "24 م²", "المقطع فقط"],
            ["المظلة", "b 4 م، c 5 م، A 36.87°", "تغير المساحة (الزاوية A)", "[[K=bc\\sin(A)/2]]", "6 م²", "مساحة القماش المسطحة"],
            ["لوحة الدعم", "a 3 م، c 5 م، B 53.13°", "تغير المساحة (الزاوية B)", "[[K=ac\\sin(B)/2]]", "6 م²", "لا حاجة للضلع القائم الثاني"],
            ["قسم الجمالون", "a 5 م، c 13 م، B 67.38°", "تغير المساحة (الزاوية B)", "[[K=ac\\sin(B)/2]]", "30 م²", "هندسة، لا قدرة تحمل"],
            ["مثلث 3-4-5", "r 1، s 6", "المساحة من نصف المحيط", "[[K=rs]]", "6 وحدات مربعة", "منظور الدائرة الداخلية للمساحة"],
            ["قطعة 5-12-13", "r 2، s 15", "المساحة من نصف المحيط", "[[K=rs]]", "30 وحدة مربعة", "يطابق فحص الضلعين القائمين"],
            ["اللوحة المثلثة", "c 10 م، h 4.8 م", "تغير المساحة (الارتفاع)", "[[K=ch/2]]", "24 م²", "يجب أن يكون الارتفاع عمودياً"],
            ["القسم المثلث", "c 20 م، h 9 م", "تغير المساحة (الارتفاع)", "[[K=ch/2]]", "90 م²", "مثلث قائم الزاوية صحيح"]
          ]
        },
        "imgAlt": "أربع لوحات: حديقة 24 م²، جبهة سقف 24 م²، جمالون 30 م²، ولوحة 24 م²، كل منها مع مثلثها",
        "figcaption": "أربع حسابات من الواقع: الحديقة وجبهة السقف والجمالون واللوحة، كل منها مع مثلثها ومساحتها النهائية."
      },
      "sec-verify": {
        "h2": "كيفية التحقق من مساحة المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "مثلث 3-4-5 واحد، وخمس طرق، وجواب واحد. بالمعطيات [[a=3]] و[[b=4]] و[[c=5]]، مع [[A\\approx36.87^\\circ]] و[[B\\approx53.13^\\circ]] و[[r=1]] و[[s=6]] و[[h=ab/c=12/5=2.4]]:" },
          { "kind": "p", "text": "<strong>الطريقة 1، الضلعان القائمان:</strong> [[K=(3\\times4)/2=6]]. <strong>الطريقة 2، الزاوية A:</strong> [[K=(4\\times5\\times0.6)/2=6]]. <strong>الطريقة 3، الزاوية B:</strong> [[K=(3\\times5\\times0.8)/2=6]]. <strong>الطريقة 4، نصف قطر الدائرة الداخلية ونصف المحيط:</strong> [[K=1\\times6=6]]. <strong>الطريقة 5، الوتر والارتفاع:</strong> [[K=(5\\times2.4)/2=6]]." },
          { "kind": "p", "text": "هذه خمس طرق رياضية إلى الكمية الهندسية نفسها. فمساحة المثلث لا تعتمد على الصيغة الصحيحة المستخدمة؛ بل تعتمد على الهندسة الفعلية للمثلث. وكلما اتفقت طريقتان مستقلتان على مثلثك، أمكنك الوثوق بالرقم." }
        ],
        "imgAlt": "مثلث 3-4-5 مع خمس لوحات: الضلعان القائمان، الزاوية A، الزاوية B، نصف القطر الداخلي ونصف المحيط، الارتفاع، كلها تعطي مساحة 6",
        "figcaption": "مدخلات مختلفة، وصيغ مختلفة، ومساحة المثلث نفسها."
      },
      "sec-mistakes": {
        "h2": "أخطاء شائعة عند حساب مساحة المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "نادراً ما تكون أخطاء المساحة إخفاقات حسابية. بل هي إخفاقات تسمية وخلط صيغ وزلات وحدات. وتغطي الثمانية عشر أدناه كل جواب خاطئ تقريباً يمكن أن تنتجه حاسبة هذه الصفحة." },
          { "kind": "h3", "text": "1. نسيان القسمة على اثنين" },
          { "kind": "p", "text": "فضرب الضلعين القائمين دون تنصيف يعطي مساحة المستطيل، لا مساحة المثلث. فمع الضلعين 3 و4، [[3\\times4=12]] خطأ؛ و[[(3\\times4)/2=6]] صواب. الحل: أنهِ كل حساب للضلعين القائمين أو القاعدة والارتفاع بالقسمة على اثنين." },
          { "kind": "h3", "text": "2. استخدام الوتر كأحد الضلعين القائمين المتعامدين" },
          { "kind": "p", "text": "فالوتر ليس ضلعاً قائماً أبداً. وإدخال c = 5 كضلع قائم مع الضلع القائم الآخر 3 يعطي [[(5\\times3)/2=7.5]] بدلاً من 6. الحل: حدد أطول ضلع أولاً واحتفظ به لحقل الوتر." },
          { "kind": "h3", "text": "3. إقران الزاوية A بالضلع الخطأ" },
          { "kind": "p", "text": "تحتاج صيغة الزاوية A إلى الضلع [[b]]، الضلع المحيط بالزاوية [[A]] مع الوتر. فإدخال الضلع [[a]] بدلاً منه يحسب حاصل الضرب الخطأ. الحل: تحقق من أن الزاوية [[A]] تقع بين الضلعين [[b]] و[[c]] قبل إدخال القيم." },
          { "kind": "h3", "text": "4. إقران الزاوية B بالضلع الخطأ" },
          { "kind": "p", "text": "الصورة المعكوسة: تحتاج صيغة الزاوية B إلى الضلع [[a]]، لا الضلع [[b]]. الحل: تأكد من أن الزاوية [[B]] تقع بين الضلعين [[a]] و[[c]]." },
          { "kind": "h3", "text": "5. استخدام الزاوية المحصورة الخطأ في صيغة الجيب" },
          { "kind": "p", "text": "فإدخال 36.87 درجة حيث ينبغي 53.13 درجة، أو العكس، يعطي مساحة معقولة لكنها خاطئة. الحل: طابق الزاوية مع زوج الضلعين: فالزاوية A تذهب مع [[b]] و[[c]]، والزاوية B مع [[a]] و[[c]]." },
          { "kind": "h3", "text": "6. الخلط بين الارتفاع والضلع القائم" },
          { "kind": "p", "text": "ينحدر الارتفاع [[h]] من رأس الزاوية القائمة إلى الوتر؛ بينما يمتد الضلع القائم على حافة المثلث. وإدخال ضلع قائم كارتفاع يبالغ في الارتفاع. الحل: يجب أن يقع الارتفاع على الوتر مع علامة الزاوية القائمة." },
          { "kind": "h3", "text": "7. استخدام خط غير عمودي كارتفاع" },
          { "kind": "p", "text": "فأي خط غير عمودي من الرأس إلى الوتر أطول من الارتفاع الحقيقي، فتخرج المساحة أكبر من اللازم. الحل: تحقق من العمودية، بالإنشاء أو بفحص [[h=ab/c]]، قبل استخدام وضع الارتفاع." },
          { "kind": "h3", "text": "8. الخلط بين نصف قطر الدائرة الداخلية ونصف قطر الدائرة الخارجية" },
          { "kind": "p", "text": "يمس نصف قطر الدائرة الداخلية الأضلاع من الداخل؛ بينما يصل نصف قطر الدائرة الخارجية إلى الرؤوس من الخارج. وفي المثلث القائم الزاوية يكون نصف قطر الدائرة الخارجية [[c/2]]، وهو دائماً أكبر من نصف قطر الدائرة الداخلية. وإدخال نصف قطر الدائرة الخارجية في صيغة [[K=rs]] يضخّم المساحة. الحل: استخدم [[r=(a+b-c)/2]] لنصف قطر الدائرة الداخلية للمثلث القائم الزاوية." },
          { "kind": "h3", "text": "9. استخدام المحيط الكامل بدلاً من نصف المحيط" },
          { "kind": "p", "text": "الصيغة هي [[K=rs]] حيث [[s]] هو نصف المحيط. فإدخال المحيط الكامل 12 بدلاً من 6 في مثلث 3-4-5 يعطي 12 بدلاً من 6. الحل: انصف المحيط قبل ضربه في [[r]]." },
          { "kind": "h3", "text": "10. خلط وحدات قياس غير متوافقة" },
          { "kind": "p", "text": "فضلعا 3 أمتار و40 سنتيمتراً ليسا 3 و40 في صيغة واحدة. الحل: حوّل كل مدخل إلى وحدة واحدة، مثل 3 م و0.4 م، قبل الحساب." },
          { "kind": "h3", "text": "11. الإبلاغ عن الأمتار المربعة كأمتار" },
          { "kind": "p", "text": "فمساحة 6 م² ليست 6 م. فالوحدة المربعة جزء من معنى الجواب: فهي تقول مقدار السطح، لا مقدار الطول. الحل: اكتب الوحدة المربعة مع الرقم دائماً." },
          { "kind": "h3", "text": "12. تقريب قيمة الجيب مبكراً جداً" },
          { "kind": "p", "text": "فاستخدام 0.6 للجيب عندما تكون القيمة الحقيقية 0.6000 لا ضرر فيه، لكن تقريب 0.9231 إلى 0.9 في منتصف الحساب يحرّك النتيجة. الحل: احتفظ بالدقة الكاملة في كل خطوة وقرّب الجواب النهائي فقط." },
          { "kind": "h3", "text": "13. إدخال زاوية قائمة أو زاوية غير صالحة في حقل الزاوية الحادة" },
          { "kind": "p", "text": "تتوقع أوضاع الزاوية زاوية حادة بين 0 و90 درجة. فإدخال 90 درجة أو قيمة سالبة لا يصف مدخلاً صحيحاً لهذه الأوضاع. الحل: أدخل الزاوية الحادة التي يملكها المثلث فعلاً، بالدرجات." },
          { "kind": "h3", "text": "14. افتراض أن الأوضاع الخمسة تتطلب القياسات نفسها" },
          { "kind": "p", "text": "يطلب كل وضع مجموعة مدخلات مختلفة: فوضع الضلعين القائمين يحتاج ضلعين قائمين، ووضع الزاوية A يحتاج ضلعاً قائماً والوتر وزاوية، ووضع نصف المحيط يحتاج نصف قطر دائرة داخلية ونصف محيط. الحل: اقرأ تسميات حقول الوضع الذي اخترته." },
          { "kind": "h3", "text": "15. افتراض أن المحيط الأكبر يعني دائماً مساحة أكبر تناسبياً" },
          { "kind": "p", "text": "يتدرج المحيط والمساحة بشكل مختلف: فمضاعفة كل الأضلاع تربع المساحة. وقد يكون لمثلث ذي محيط أكبر مساحة أصغر إذا كان طويلاً ورفيعاً. الحل: قارن المساحات بصيغ المساحة، ولا تقارنها بالمحيطات أبداً." },
          { "kind": "h3", "text": "16. نسيان أن المساحة نفسها يمكن حسابها بطرق متعددة" },
          { "kind": "p", "text": "فمعاملة كل طريقة كحقيقة منفصلة يفوّت التحقق المدمج: فإذا اختلفت طريقتان، فثمة خطأ في المدخلات أو اختيار الوضع. الحل: شغّل طريقة ثانية وحقق في أي عدم تطابق." },
          { "kind": "h3", "text": "17. إدخال أطوال أضلاع لا يمكن أن تصف المثلث المقصود" },
          { "kind": "p", "text": "فالأضلاع التي تفشل في فحص فيثاغورس، مثل 2 و3 و10، لا تصف مثلثاً قائم الزاوية أصلاً. الحل: تحقق من [[a^2+b^2=c^2]] قبل الوثوق بأي مساحة مبنية على تلك الأضلاع." },
          { "kind": "h3", "text": "18. استخدام اختصار نصف قطر الدائرة الداخلية للمثلث القائم الزاوية لمثلث غير قائم الزاوية" },
          { "kind": "p", "text": "فصيغة [[r=(a+b-c)/2]] مشتقة من هندسة الدرجات التسعين. وتطبيقها على مثلث حاد أو منفرج يعطي نصف قطر دائرة داخلية لا معنى له. الحل: استخدم هذا الاختصار فقط عندما يُتأكد أن المثلث قائم الزاوية." },
          { "kind": "h3", "text": "خطأ مقابل صواب: مثال ملموس" },
          { "kind": "p", "text": "بالمعطيات [[a=3]] و[[b=4]]، يتخطى الحساب الخاطئ التنصيف: [[K=3\\times4=12]]. وهذه هي مساحة المستطيل 3 في 4 المقابل، لا المثلث القائم الزاوية. والحساب الصحيح هو [[K=(3\\times4)/2=6]]. ويشغل المثلث نصف المستطيل، فالقسمة على اثنين هي ما يحوّل جواب المستطيل إلى جواب المثلث." }
        ]
      },
      "sec-validate": {
        "h2": "كيفية التحقق من صحة نتيجة المساحة",
        "blocks": [
          { "kind": "p", "text": "ستة فحوصات تلتقط الغالبية العظمى من النتائج غير الصالحة قبل أن تغادر الصفحة." },
          { "kind": "h3", "text": "فحص 1: قياسات موجبة" },
          { "kind": "p", "text": "يجب أن تكون كل الأطوال المطلوبة موجبة: [[a>0]] و[[b>0]] و[[c>0]]. وفي وضع نصف قطر الدائرة الداخلية، [[r>0]] و[[s>0]]، ويجب أن يكون الارتفاع موجباً أيضاً. فالمدخلات الصفرية أو السالبة لا تصف مثلثاً." },
          { "kind": "h3", "text": "فحص 2: أطوال أضلاع مثلث صالحة" },
          { "kind": "p", "text": "في المثلث القائم الزاوية يجب أن يتحقق [[a^2+b^2=c^2]]، وأن يكون الوتر أطول من أي من الضلعين القائمين. فإذا فشلت الأضلاع في هذا الفحص، كانت المدخلات غير متسقة والمساحة لا معنى لها." },
          { "kind": "h3", "text": "فحص 3: إقران الزاوية بالضلع الصحيح" },
          { "kind": "p", "text": "تُقرَن الزاوية [[A]] بالضلعين [[b]] و[[c]] في صيغة الزاوية المحصورة؛ وتُقرَن الزاوية [[B]] بالضلعين [[a]] و[[c]]. وتأكد من الإقران قبل قبول نتيجة قائمة على زاوية." },
          { "kind": "h3", "text": "فحص 4: الارتفاع الصحيح" },
          { "kind": "p", "text": "يجب أن يكون الارتفاع [[h]] عمودياً على الوتر [[c]]. واختبار سريع للمعقولية: فالارتفاع أقصر من الوتر دائماً وأقصر من أي من الضلعين القائمين." },
          { "kind": "h3", "text": "فحص 5: وحدات المساحة الصحيحة" },
          { "kind": "p", "text": "فإذا كانت أطوال المدخلات بالأمتار، وجب أن تكون المساحة بالأمتار المربعة؛ والسنتيمترات تعطي سنتيمترات مربعة. ووحدة الجواب هي مربع وحدة المدخلات، لا وحدة المدخلات نفسها أبداً." },
          { "kind": "h3", "text": "فحص 6: التحقق المتقاطع بطريقة أخرى" },
          { "kind": "p", "text": "استخدم مثلث 3-4-5 لمقارنة صيغة الضلعين القائمين مع صيغة نصف المحيط: [[(3\\times4)/2=6]] و[[1\\times6=6]]. فيجب أن تعطي كلتاهما 6 وحدات مربعة. وقد تنشأ فروق صغيرة في الحسابات القائمة على الزاوية من قياسات زوايا مقرّبة أو قيم مثلثية مقرّبة؛ أما الفروق الأكبر فتشير إلى خطأ حقيقي. ولا يذكر هذا الدليل أي تسامح في الدقة أو ضمان دقة للحاسبة: فالفحص يتعلق بالاتساق، لا بالدقة الموعودة." }
        ]
      },
      "sec-conclusion": {
        "h2": "مثلث واحد، وخمس طرق، ومساحة واحدة",
        "blocks": [
          { "kind": "p", "text": "تجيب كل طريقة في هذه الصفحة عن السؤال نفسه من نقطة بداية مختلفة. فالضلعان القائمان عندما يكون لديك الضلعان المتعامدان، والجيب عندما تكون لديك زاوية محصورة، ونصف قطر الدائرة الداخلية ونصف المحيط عندما تكون الدائرة الداخلية في المشهد، والارتفاع عندما يكون الوتر وارتفاعه معروفين. وطابق الوضع مع قياساتك، وأدخلها في الحقول الصحيحة بوحدات متوافقة، ودع الحاسبة تقوم بالحساب. ثم تحقق بطريقة ثانية: فطريقان إلى الرقم نفسه هما أضمن علامة على صحة الهندسة." }
        ]
      }
    },
    "faqs": [
      { "question": "ما هي صيغة مساحة المثلث القائم الزاوية؟", "answer": "الصيغة القياسية هي K = ab/2، حيث a وb هما الضلعان القائمان المتعامدان. وتغطي أربع طرق مكافئة القياسات المعروفة الأخرى: K = bc sin(A)/2، وK = ac sin(B)/2، وK = rs (نصف قطر الدائرة الداخلية مضروباً في نصف المحيط)، وK = ch/2 (الوتر مضروباً في الارتفاع، مقسوماً على اثنين)." },
      { "question": "لماذا نقسم على اثنين عند حساب مساحة المثلث؟", "answer": "يلتحم مثلثان قائما الزاوية متطابقان على طول وتريهما لتكوين مستطيل مساحته ab. والمثلث الواحد هو نصف ذلك المستطيل بالضبط، لذا فالمساحة ab/2. والقسمة على اثنين هندسية، وليست اعتباطية، وهي تظهر في كل طريقة مساحة في هذه الصفحة." },
      { "question": "هل يمكنني حساب المساحة دون معرفة الوتر؟", "answer": "نعم. فصيغة الضلعين القائمين K = ab/2 لا تحتاج إلى وتر، وصيغة نصف قطر الدائرة الداخلية ونصف المحيط K = rs لا تحتاجه أيضاً. والوتر مطلوب فقط لأوضاع الزاوية ووضع الارتفاع." },
      { "question": "كيف أجد المساحة باستخدام ضلع واحد وزاوية؟", "answer": "استخدم صيغة الزاوية المحصورة. فمع الضلع القائم b والوتر c والزاوية A، تكون المساحة K = bc sin(A)/2. ومع الضلع القائم a والوتر c والزاوية B، تكون K = ac sin(B)/2. أدخل الزاوية بالدرجات، وتأكد من أنها الزاوية الحادة بين الضلعين المعروفين." },
      { "question": "لماذا تستخدم الصيغة القائمة على الزاوية الجيب؟", "answer": "الصيغة العامة لضلعين والزاوية المحصورة بينهما هي K = 1/2 xy sin(theta). ويستخرج الجيب المكوّن العمودي لأحد الضلعين بالنسبة إلى الآخر، وهو الارتفاع الفعّال. فبالنسبة إلى الزاوية A المحاطة بالضلعين b وc، يعطي ذلك K = bc sin(A)/2." },
      { "question": "ما هو نصف قطر الدائرة الداخلية للمثلث القائم الزاوية؟", "answer": "نصف قطر الدائرة الداخلية هو نصف قطر الدائرة المرسومة داخل المثلث، الماسة لأضلاعه الثلاثة. ويمكن حسابه للمثلث القائم الزاوية بالصيغة r = (a + b - c)/2. وهو ليس نصف قطر الدائرة الخارجية، الذي يصل إلى الرؤوس ويساوي c/2 في المثلث القائم الزاوية." },
      { "question": "ما الفرق بين المحيط ونصف المحيط؟", "answer": "المحيط هو الطول الكلي للحدود، a + b + c. ونصف المحيط هو نصف ذلك، s = (a + b + c)/2. وتستخدم صيغة المساحة K = rs نصف المحيط؛ فاستخدام المحيط الكامل سيضاعف الجواب." },
      { "question": "كيف أحسب المساحة باستخدام الوتر والارتفاع؟", "answer": "استخدم K = ch/2، حيث c هو الوتر وh هو الارتفاع العمودي من رأس الزاوية القائمة إلى الوتر. ويجب أن يلتقي الارتفاع بالوتر عند 90 درجة؛ فهو ليس أحد الضلعين القائمين. وإذا كان المعروف هو الضلعان القائمان فقط، فأوجد الارتفاع أولاً بالصيغة h = ab/c." },
      { "question": "لماذا تعطي طرق المساحة الخمس النتيجة نفسها؟", "answer": "لأنها أوصاف جبرية مختلفة للكمية الهندسية نفسها. فصيغة الضلعين القائمين وصيغ الجيب وحاصل ضرب نصف قطر الدائرة الداخلية ونصف المحيط وصيغة الوتر والارتفاع كلها متساوية ببرهان لمثلث قائم الزاوية متسق. واتفاق طريقتين هو أفضل تحقق على صحة المدخلات والوضع." },
      { "question": "ما الوحدات التي يجب استخدامها للمساحة؟", "answer": "الوحدات المربعة المطابقة لأطوال المدخلات: فالأمتار تعطي أمتاراً مربعة، والسنتيمترات تعطي سنتيمترات مربعة. وحوّل كل المدخلات إلى وحدة واحدة قبل الحساب، وأبلغ عن النتيجة بالوحدة المربعة، ولا تستخدم وحدة خطية أبداً." },
      { "question": "هل يمكنني حساب المساحة إذا كنت أعرف الوتر فقط؟", "answer": "لا. فالوتر وحده لا يحدد مثلثاً قائم الزاوية وحيداً، لذا فالمساحة غير ثابتة. وتحتاج إلى قياس مستقل واحد على الأقل: ضلع قائم، أو زاوية حادة، أو الارتفاع، أو نصف قطر الدائرة الداخلية مع نصف المحيط." },
      { "question": "كيف أتحقق من صحة حساب المساحة؟", "answer": "شغّل طريقة ثانية على المثلث نفسه وقارن. ففي مثلث 3-4-5، تعطي صيغة الضلعين القائمين (3 x 4)/2 = 6 وتعطي طريقة نصف المحيط 1 x 6 = 6. وتحقق أيضاً من أن الأضلاع تحقق نظرية فيثاغورس، وتأكد من إقران الزاوية بالضلع، وتحقق من أن الارتفاع عمودي على الوتر." }
    ],
    "faqHeading": "الأسئلة الشائعة",
    "relatedHeading": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
    "relatedItems": [
      "حاسبة مساحة المثلث القائم الزاوية من الضلعين القائمين",
      "حاسبة مساحة المثلث القائم الزاوية من الزاوية",
      "حاسبة مساحة المثلث القائم الزاوية من نصف المحيط",
      "حاسبة مساحة المثلث القائم الزاوية من الارتفاع",
      "حاسبة محيط ونصف محيط المثلث القائم الزاوية",
      "حاسبة نصف قطر الدائرة الداخلية والخارجية للمثلث القائم الزاوية",
      "حاسبة أضلاع المثلث القائم الزاوية"
    ]
  }
};
