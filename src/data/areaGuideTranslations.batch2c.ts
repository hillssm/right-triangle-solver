// areaGuideTranslations.batch2c.ts - Area Guide (Page 16) translations for ms and pl.
// Schema: AREA_TRANSLATION_SCHEMA.md. KaTeX math kept byte-identical to EN; only prose translated.
export const AREA_TRANSLATIONS_BATCH2C = {
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Apakah Kalkulator Luas Segi Tiga Bersudut Tepat?",
      "sec-triangle": "Apakah Luas Segi Tiga Bersudut Tepat?",
      "sec-legs": "Luas Segi Tiga Bersudut Tepat Menggunakan Dua Kakinya",
      "sec-angle-a": "Mencari Luas Segi Tiga Bersudut Tepat Menggunakan Sisi b, Hipotenus c, dan Sudut A",
      "sec-angle-b": "Mencari Luas Segi Tiga Bersudut Tepat Menggunakan Sisi a, Hipotenus c, dan Sudut B",
      "sec-inradius": "Mencari Luas Segi Tiga Bersudut Tepat Menggunakan Jejari Dalam dan Separuh Perimeter",
      "sec-altitude": "Mencari Luas Segi Tiga Bersudut Tepat Menggunakan Hipotenus dan Altitud",
      "sec-choose": "Formula Luas Segi Tiga Bersudut Tepat yang Manakah Patut Anda Gunakan?",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Segi Tiga Bersudut Tepat",
      "sec-applications": "Aplikasi Kehidupan Sebenar Pengiraan Luas Segi Tiga Bersudut Tepat",
      "sec-verify": "Cara Mengesahkan Luas Segi Tiga Bersudut Tepat",
      "sec-mistakes": "Kesilapan Lazim Semasa Mengira Luas Segi Tiga Bersudut Tepat",
      "sec-validate": "Cara Memeriksa Sama Ada Hasil Luas Anda Sah",
      "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
      "sec-faq": "Soalan Lazim",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Apakah Kalkulator Luas Segi Tiga Bersudut Tepat?",
        "blocks": [
          { "kind": "p", "text": "Kalkulator luas segi tiga bersudut tepat mencari luas dua dimensi yang dikelilingi oleh tiga sisi sebuah segi tiga bersudut tepat. Sebagai contoh, segi tiga bersudut tepat dengan kaki [[a=3\\text{ m}]] dan [[b=4\\text{ m}]] mempunyai luas [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]: segi tiga itu menempati enam meter persegi permukaan. Luas diukur dalam unit persegi kerana ia mengira ruang rata, bukan panjang." },
          { "kind": "p", "text": "Kaki yang berserenjang memudahkan pengiraan dengan ketara. Oleh kerana kedua-dua kaki bertemu pada 90 darjah, satu kaki boleh dijadikan tapak dan kaki yang satu lagi sebagai tinggi, jadi luasnya hanyalah separuh daripada hasil darabnya. Kesederhanaan inilah salah satu sebab formula kaki merupakan kaedah pertama yang dipelajari oleh kebanyakan pelajar." },
          { "kind": "p", "text": "Beberapa kaedah wujud untuk luas yang sama kerana masalah sebenar memberi anda ukuran yang berbeza. Seorang tukang kayu mengukur dua kaki sebuah panel; seorang juruukur mengukur hipotenus dan sudut; seorang ahli geometri yang bekerja dengan bulatan terterap mengetahui jejari dalam dan separuh perimeter. Setiap kaedah menukar set nilai yang diketahuinya kepada luas yang sama. Kalkulator di halaman ini menawarkan lima mod yang sepadan dengan situasi ini: Area dari Kaki, Variasi Area (Sudut A), Variasi Area (Sudut B), Area dari Separuh Perimeter, dan Variasi Area (Altitud). Kaedah terbaik biasanya ialah kaedah yang menggunakan ukuran yang telah anda miliki, tanpa memaksa penukaran tambahan terlebih dahulu." }
        ]
      },
      "sec-triangle": {
        "h2": "Apakah Luas Segi Tiga Bersudut Tepat?",
        "blocks": [
          { "kind": "p", "text": "Panduan ini menggunakan satu tatatanda yang konsisten: [[A]] dan [[B]] ialah dua sudut tirus, [[C=90^\\circ]] ialah sudut tepat, sisi [[a]] terletak bertentangan dengan sudut [[A]], sisi [[b]] terletak bertentangan dengan sudut [[B]], sisi [[c]] ialah hipotenus yang bertentangan dengan sudut [[C]], [[h]] ialah altitud berserenjang dari bucu [[C]] ke hipotenus, [[r]] ialah jejari dalam, [[s]] ialah separuh perimeter, dan [[K]] ialah luas." },
          { "kind": "h3", "text": "Apakah Segi Tiga Bersudut Tepat?" },
          { "kind": "p", "text": "Segi tiga bersudut tepat mempunyai satu sudut tepat 90 darjah. Kedua-dua kakinya bertemu pada sudut tepat, dan hipotenus terletak bertentangan dengan sudut itu. Hipotenus sentiasa merupakan sisi terpanjang, dan dua sudut yang lain ialah sudut tirus: kerana jumlah ketiga-tiga sudut ialah 180 darjah, [[A+B=90^\\circ]]. Kedua-dua kaki adalah berserenjang, dan sifat inilah yang menjadikan formula luasnya begitu langsung." },
          { "kind": "h3", "text": "Apakah Maksud Luas?" },
          { "kind": "p", "text": "Luas mengukur ruang dua dimensi yang dikelilingi oleh tiga sisi segi tiga. Ia berbeza daripada perimeter, yang mengukur jumlah panjang sempadan, daripada panjang sisi, yang mengukur satu dimensi, dan daripada isi padu, yang mengukur ruang tiga dimensi. Sekeping kertas berbentuk segi tiga mempunyai luas yang sama dengan jumlah kertas yang diliputinya; seksyen taman berbentuk segi tiga mempunyai luas yang sama dengan tanah yang ditempatinya. Kedua-duanya dilaporkan dalam unit persegi seperti meter persegi, kerana luas mengira petak unit yang muat di dalam bentuk itu." },
          { "kind": "h3", "text": "Mengapakah Luas Dibahagi dengan Dua?" },
          { "kind": "p", "text": "Dua segi tiga bersudut tepat yang serupa boleh digabungkan sepanjang hipotenus masing-masing untuk membentuk segi empat tepat. Jika setiap segi tiga mempunyai kaki berserenjang [[a]] dan [[b]], segi empat tepat itu mempunyai luas [[ab]]. Satu segi tiga menempati tepat separuh daripada segi empat tepat itu, jadi [[[\\boxed{K=\\frac{ab}{2}}]]]. Pembahagian dengan dua bukanlah faktor rekaan: ia adalah akibat geometri bahawa segi tiga ialah separuh segi empat tepat, dan ia muncul dalam setiap kaedah luas di halaman ini dalam satu bentuk atau yang lain." },
          { "kind": "h3", "text": "Mengapakah Segi Tiga yang Sama Boleh Mempunyai Lima Formula Luas?" },
          { "kind": "p", "text": "Luas segi tiga tidak berubah apabila kaedah ukuran yang berbeza digunakan. Kaedah-kaedah itu hanya bermula dengan nilai yang diketahui berbeza. Dua kaki memberi formula yang paling mudah. Satu kaki, hipotenus, dan sudut tirus yang diapit membolehkan formula berasaskan sinus. Jejari dalam dan separuh perimeter menyediakan hubungan geometri alternatif. Hipotenus dan altitud berserenjang menggunakan peraturan tapak-tinggi yang umum. Kelima-lima kaedah mesti menghasilkan luas yang sama apabila inputnya menggambarkan segi tiga yang sah yang sama, dan persetujuan itu ialah pengesahan terkuat yang tersedia: dua kaedah, satu segi tiga, satu jawapan." }
        ],
        "imgAlt": "Anatomi segi tiga bersudut tepat: kaki a dan b, hipotenus c, sudut tepat C, altitud h ke hipotenus, formula K = ab/2",
        "figcaption": "Anatomi segi tiga bersudut tepat: C ialah sudut tepat, a dan b ialah kaki, c ialah hipotenus, dan h ialah altitud ke hipotenus."
      },
      "sec-legs": {
        "h2": "Luas Segi Tiga Bersudut Tepat Menggunakan Dua Kakinya",
        "blocks": [
          { "kind": "p", "text": "Formula kaki ialah titik permulaan bagi luas segi tiga bersudut tepat: [[[\\boxed{K=\\frac{ab}{2}}]]]. Ia hanya memerlukan dua sisi yang berserenjang, dan semua yang lain di halaman ini boleh dilihat sebagai variasi yang mendapatkan semula kuantiti yang sama ini daripada input yang berbeza." },
          { "kind": "h3", "text": "Bilakah Anda Patut Menggunakan Formula Kaki?" },
          { "kind": "p", "text": "Gunakan kaedah ini apabila kedua-dua sisi berserenjang diketahui. Tiada pengiraan sudut, hipotenus, jejari dalam, atau altitud yang diperlukan terlebih dahulu. Ukuran langsung kedua-dua kaki adalah biasa dalam kerja kayu, kerja jubin, dan masalah bilik darjah, justeru mod Area dari Kaki ialah pilihan lalai bagi kebanyakan pengiraan harian." },
          { "kind": "h3", "text": "Bagaimana Formula Ini Berfungsi" },
          { "kind": "p", "text": "Kedua-dua kaki membentuk tapak dan tinggi berserenjang bagi segi tiga. Formula luas segi tiga yang umum ialah [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]; oleh kerana kaki adalah berserenjang, tapak dan tinggi boleh diambil terus sebagai [[a]] dan [[b]], memberi [[K=ab/2]]. Tiada trigonometri yang terlibat, dan tiada sisi tambahan yang perlu dicari terlebih dahulu." },
          { "kind": "h3", "text": "Contoh Terperinci Penuh: Segi Tiga 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3\\text{ m}]] dan [[b=4\\text{ m}]]. Langkah 1: tulis formula [[K=ab/2]]. Langkah 2: gantikan nilai, [[K=(3\\times4)/2]]. Langkah 3: darabkan, [[K=12/2]]. Langkah 4: bahagikan dengan dua, [[[\\boxed{K=6\\text{ m}^2}]]]. Jawapannya ialah enam meter persegi, bukan enam meter: unit itu membawa maksud kuantiti." },
          { "kind": "h3", "text": "Bolehkah Anda Menukar Kedua-dua Kaki?" },
          { "kind": "p", "text": "Ya. Pendaraban adalah kalis tukar tertib, jadi [[ab=ba]] dan oleh itu [[ab/2=ba/2]]. Luas tidak berubah jika kedua-dua kaki dimasukkan dalam susunan yang bertentangan, dengan syarat medan kalkulator sepadan dengan panjang kaki yang betul. Simetri ini hanya berlaku untuk kaki: menukar kaki dengan hipotenus akan merosakkan formula." },
          { "kind": "h3", "text": "Bagaimana Jika Kaki Mempunyai Nilai Perpuluhan?" },
          { "kind": "p", "text": "Ukuran perpuluhan berfungsi dalam formula yang sama. Dengan [[a=3.5\\text{ cm}]] dan [[b=9.2\\text{ cm}]]: [[K=(3.5\\times9.2)/2]], [[K=32.2/2]], [[[\\boxed{K=16.1\\text{ cm}^2}]]]. Aritmetiknya serupa; hanya ketepatan input yang berubah, jadi kekalkan digit yang mencukupi dan bundarkan pada akhirnya." },
          { "kind": "h3", "text": "Bagaimana Jika Satu Kaki Tidak Diketahui?" },
          { "kind": "p", "text": "Kaki yang hilang kadangkala boleh dicari terlebih dahulu menggunakan teorem Pythagoras atau sudut yang diketahui, dan formula kaki digunakan selepas itu. Perhatikan bahawa mod kaki sendiri memerlukan kedua-dua kaki: ia tidak mendapatkan semula sisi yang hilang secara automatik. Jika hanya satu kaki dan hipotenus diketahui, pengiraan kaki yang hilang ialah langkah berasingan sebelum mod ini boleh digunakan." }
        ]
      },
      "sec-angle-a": {
        "h2": "Mencari Luas Segi Tiga Bersudut Tepat Menggunakan Sisi b, Hipotenus c, dan Sudut A",
        "blocks": [
          { "kind": "p", "text": "Kaedah ini berguna apabila sisi [[b]], hipotenus [[c]], dan sudut tirus [[A]] diketahui: [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Ia merupakan mod Variasi Area (Sudut A) kalkulator." },
          { "kind": "h3", "text": "Mengapakah Formula Ini Menggunakan Sinus?" },
          { "kind": "p", "text": "Formula luas umum untuk dua sisi dan sudut yang diapitnya ialah [[K=\\frac12 xy\\sin(\\theta)]]. Sudut [[A]] terletak di antara sisi [[b]] dan [[c]], jadi menggantikan [[x=b]], [[y=c]], [[\\theta=A]] memberi [[K=\\frac12 bc\\sin(A)]]. Sinus mengambil kira komponen berserenjang satu sisi: hanya bahagian sisi [[c]] yang berdiri berserenjang dengan [[b]] yang menyumbang tinggi, dan bahagian berserenjang itu ialah [[c\\sin(A)]]." },
          { "kind": "h3", "text": "Contoh Terperinci Penuh: Segi Tiga 3-4-5" },
          { "kind": "p", "text": "Diberi [[b=4\\text{ m}]], [[c=5\\text{ m}]], dan [[A\\approx36.87^\\circ]]. Oleh kerana [[\\sin(36.87^\\circ)\\approx0.6]], gantikan: [[K=(4\\times5\\times0.6)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Ini sepadan dengan formula kaki kerana 0.6 tepat ialah nisbah [[a/c=3/5]]: bentuk sinus ialah bentuk kaki yang menyamar, dengan [[c\\sin(A)]] memainkan peranan kaki yang satu lagi." },
          { "kind": "h3", "text": "Apakah yang Berlaku Jika Sudut Berubah?" },
          { "kind": "p", "text": "Faktor sinus mengubah luas apabila dua panjang sisi dan sudut yang diapit diubah dalam segi tiga yang sah. Jangan bayangkan sudut berubah manakala setiap panjang sisi kekal tetap: dalam segi tiga sebenar, sisi dan sudut saling berkait, jadi mengubah sudut membentuk semula segi tiga dan menggerakkan luas bersamanya. Sudut yang diapit adalah penting untuk formula ini tepat kerana ia mengekod sejauh mana segi tiga itu terbuka atau tertutup." },
          { "kind": "h3", "text": "Kesilapan Lazim dalam Mod Sudut A" },
          { "kind": "p", "text": "Lima kesilapan berulang dalam mod ini. Memadankan sudut [[A]] dengan sisi yang salah adalah yang paling kerap: formula ini memerlukan sisi [[b]], bukan sisi [[a]], kerana [[b]] dan [[c]] ialah sisi yang mengepung sudut [[A]]. Memasukkan sudut dalam unit yang salah merosakkan nilai sinus: kalkulator ini menjangkakan darjah, jadi 36.87 darjah tidak boleh dimasukkan sebagai 0.6435 radian. Lupa membahagi dengan dua menggandakan jawapan. Dan memasukkan sudut tepat atau sudut bukan tirus yang lain dalam medan sudut tirus menggambarkan tiada input yang sah untuk mod ini; sudut itu mesti terletak dengan ketat antara 0 dan 90 darjah." }
        ]
      },
      "sec-angle-b": {
        "h2": "Mencari Luas Segi Tiga Bersudut Tepat Menggunakan Sisi a, Hipotenus c, dan Sudut B",
        "blocks": [
          { "kind": "p", "text": "Mod ini menggunakan sudut tirus yang satu lagi dan dua sisi bersebelahannya: [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. Ia merupakan mod Variasi Area (Sudut B) kalkulator." },
          { "kind": "h3", "text": "Mengapakah Formula Ini Berfungsi?" },
          { "kind": "p", "text": "Sisi [[a]] dan [[c]] mengepung sudut [[B]]. Bermula dari formula umum [[K=\\frac12 xy\\sin(\\theta)]] dan menggantikan [[x=a]], [[y=c]], [[\\theta=B]] memberi [[K=\\frac12 ac\\sin(B)]]. Strukturnya serupa dengan formula Sudut A; hanya label yang bergerak, kerana geometri kedua-dua sudut tirus mencerminkan dirinya sendiri." },
          { "kind": "h3", "text": "Contoh Terperinci Penuh: Segi Tiga 3-4-5 yang Sama" },
          { "kind": "p", "text": "Diberi [[a=3\\text{ m}]], [[c=5\\text{ m}]], dan [[B\\approx53.13^\\circ]]. Oleh kerana [[\\sin(53.13^\\circ)\\approx0.8]], kirakan: [[K=(3\\times5\\times0.8)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Hasilnya sepadan dengan kaedah kaki dan kaedah Sudut A, sebagaimana mestinya: ketiga-tiganya menggambarkan segi tiga yang sama." },
          { "kind": "h3", "text": "Bagaimanakah Sudut A dan B Berkaitan?" },
          { "kind": "p", "text": "Kedua-dua sudut tirus adalah pelengkap: [[[\\boxed{A+B=90^\\circ}]]]. Ini memberi identiti [[\\sin(A)=\\cos(B)]] dan [[\\sin(B)=\\cos(A)]]. Dalam segi tiga 3-4-5, [[\\sin(A)=0.6=\\cos(B)]] dan [[\\sin(B)=0.8=\\cos(A)]]. Hubungan ini menjelaskan mengapa kedua-dua mod berasaskan sudut mengira luas yang sama apabila inputnya konsisten: sinus satu mod ialah kosinus mod yang satu lagi, dan geometri segi tiga tidak berubah walau dari sudut tirus mana anda bermula." },
          { "kind": "h3", "text": "Kesilapan Lazim dalam Mod Sudut B" },
          { "kind": "p", "text": "Kesilapan imej cermin muncul di sini: menggunakan sisi [[b]] bukannya sisi [[a]], memadankan sudut [[B]] dengan sisi yang salah, dan mengelirukan kedua-dua sudut tirus antara satu sama lain. Lupa fungsi sinus atau lupa membahagi dengan dua adalah kesilapan aritmetik yang sama seperti dalam mod Sudut A. Akhir sekali, sudut yang tidak sepadan dengan segi tiga yang diukur, contohnya memasukkan 36.87 darjah di tempat 53.13 darjah sepatutnya, secara senyap menghasilkan luas yang salah tetapi kelihatan munasabah, jadi sentiasa semak bahawa sudut itu sepadan dengan pasangan sisi." }
        ]
      },
      "sec-inradius": {
        "h2": "Mencari Luas Segi Tiga Bersudut Tepat Menggunakan Jejari Dalam dan Separuh Perimeter",
        "blocks": [
          { "kind": "p", "text": "Kaedah ini hanya memerlukan dua nombor, jejari dalam [[r]] dan separuh perimeter [[s]]: [[[\\boxed{K=rs}]]]. Jejari dalam ialah jejari bulatan yang terterap di dalam segi tiga, bulatan yang menyentuh ketiga-tiga sisi. Separuh perimeter ialah separuh daripada perimeter segi tiga: [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Ia merupakan mod Area dari Separuh Perimeter kalkulator." },
          { "kind": "h3", "text": "Mengapakah Luas Sama dengan Jejari Dalam Darab Separuh Perimeter?" },
          { "kind": "p", "text": "Sambungkan pusat dalam, pusat bulatan terterap, ke ketiga-tiga bucu. Ini membahagikan segi tiga kepada tiga segi tiga yang lebih kecil. Setiap segi tiga yang lebih kecil mempunyai tinggi berserenjang [[r]] yang sama, kerana jejari dalam ialah jarak berserenjang dari pusat dalam ke setiap sisi. Menjumlahkan luasnya memberi [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]. Keluarkan [[r/2]] sebagai faktor: [[K=\\frac12 r(a+b+c)]]. Oleh kerana [[s=(a+b+c)/2]], maka [[[\\boxed{K=rs}]]]. Hubungan ini berlaku untuk mana-mana segi tiga yang sah, bukan hanya segi tiga bersudut tepat, dengan syarat jejari dalam dan separuh perimeter yang betul diketahui." },
          { "kind": "h3", "text": "Mencari Jejari Dalam Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Untuk segi tiga bersudut tepat terdapat jalan pintas yang mudah: [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Anggaplah ia sebagai jalan pintas segi tiga bersudut tepat, bukan sebagai formula jejari dalam yang umum: untuk segi tiga umum, jejari dalam diperoleh daripada [[r=K/s]], yang bersifat membulat jika anda cuba mencari luas. Jalan pintas ini berfungsi kerana dua panjang tangen dari bucu sudut tepat adalah sama dan algebranya runtuh dengan kemas untuk kes 90 darjah." },
          { "kind": "h3", "text": "Contoh Terperinci Penuh: Segi Tiga 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]], [[c=5]]. Pertama separuh perimeter: [[s=(3+4+5)/2]], [[[\\boxed{s=6}]]]. Kemudian jejari dalam: [[r=(3+4-5)/2]], [[[\\boxed{r=1}]]]. Luasnya ialah [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Jawapannya sepadan dengan formula kaki, mengesahkan bahawa pandangan bulatan terterap dan pandangan kaki menggambarkan segi tiga yang sama." },
          { "kind": "h3", "text": "Contoh Terperinci Penuh: Segi Tiga 5-12-13" },
          { "kind": "p", "text": "Diberi [[a=5]], [[b=12]], [[c=13]]. Separuh perimeter: [[s=(5+12+13)/2=15]]. Jejari dalam: [[r=(5+12-13)/2=2]]. Luas: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Sahkan dengan formula kaki: [[K=(5\\times12)/2=30]]. Kedua-dua kaedah sepadan, yang merupakan hasil yang dijangkakan apabila ukuran sisi adalah konsisten." },
          { "kind": "h3", "text": "Kesilapan Lazim" },
          { "kind": "p", "text": "Mengelirukan jejari dalam dengan jejari luar ialah kesilapan utama: jejari dalam menyentuh sisi dari dalam, manakala jejari luar mencapai bucu dari luar, dan kedua-duanya nombor yang berbeza. Menggunakan perimeter penuh bukannya separuh perimeter menggandakan jawapan. Menggunakan jalan pintas jejari dalam segi tiga bersudut tepat [[r=(a+b-c)/2]] pada segi tiga bukan bersudut tepat menghasilkan nilai yang tidak bermakna. Lupa bahawa hasil darab [[rs]] mempunyai unit persegi, dan memasukkan ukuran sisi yang tidak konsisten ke dalam pengiraan [[r]] dan [[s]], melengkapkan kegagalan lazim." }
        ]
      },
      "sec-altitude": {
        "h2": "Mencari Luas Segi Tiga Bersudut Tepat Menggunakan Hipotenus dan Altitud",
        "blocks": [
          { "kind": "p", "text": "Kaedah ini menggunakan hipotenus [[c]] sebagai tapak dan altitud berserenjang [[h]] sebagai tinggi: [[[\\boxed{K=\\frac{ch}{2}}]]]. Ia merupakan mod Variasi Area (Altitud) kalkulator." },
          { "kind": "h3", "text": "Apakah Altitud?" },
          { "kind": "p", "text": "Altitud ialah garis berserenjang yang dilukis dari bucu ke sisi bertentangan. Dalam mod ini altitud bermula di bucu sudut tepat [[C]] dan bertemu hipotenus pada 90 darjah. Ia bukan sama dengan mana-mana kaki [[a]] atau [[b]]: kaki terletak di sepanjang tepi segi tiga, manakala altitud jatuh ke bahagian dalam dan mendarat di hipotenus. Penanda sudut tepat di tempat [[h]] bertemu [[c]] ialah jaminan visual bahawa syarat keserenjangan dipenuhi." },
          { "kind": "h3", "text": "Mengapakah Formula Ini Berfungsi?" },
          { "kind": "p", "text": "Ia ialah formula tapak-tinggi yang umum dengan pilihan tapak tertentu. Bermula dari [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Pilih hipotenus sebagai tapak, [[\\text{base}=c]], dan altitud berserenjang sebagai tinggi, [[\\text{height}=h]]. Oleh itu [[K=ch/2]]. Tiada apa-apa tentang terbitan ini yang khusus untuk segi tiga bersudut tepat: luas mana-mana segi tiga boleh ditulis begini, tetapi formula kaki segi tiga bersudut tepat hanyalah lebih pantas apabila kaki diketahui." },
          { "kind": "h3", "text": "Contoh Terperinci Penuh: Segi Tiga 6-8-10" },
          { "kind": "p", "text": "Diberi [[c=10\\text{ m}]] dan [[h=4.8\\text{ m}]]. Kirakan: [[K=(10\\times4.8)/2]], [[K=48/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Ini ialah luas yang sama seperti segi tiga bersudut tepat yang kakinya berukuran 6 m dan 8 m, kerana [[(6\\times8)/2=24]]. Dua huraian berbeza, satu luas." },
          { "kind": "h3", "text": "Bagaimanakah Altitud Boleh Dikira?" },
          { "kind": "p", "text": "Apabila kedua-dua kaki dan hipotenus diketahui, altitud diperoleh daripada menyamakan dua formula luas: [[ab/2=ch/2]], jadi [[[\\boxed{h=\\frac{ab}{c}}]]]. Untuk segi tiga 6-8-10: [[h=(6\\times8)/10=4.8\\text{ m}]]. Altitud lebih pendek daripada hipotenus, sebagaimana mestinya: garis berserenjang ialah laluan terpendek dari bucu ke garis itu. Perhatikan bahawa mod altitud tidak mengira altitud yang hilang dengan sendirinya; altitud mesti diketahui atau diterbitkan terlebih dahulu." }
        ]
      },
      "sec-choose": {
        "h2": "Formula Luas Segi Tiga Bersudut Tepat yang Manakah Patut Anda Gunakan?",
        "blocks": [
          { "kind": "p", "text": "Lima kaedah, satu luas. Perbandingan di bawah memetakan setiap set ukuran yang diketahui kepada formula dan mod kalkulatornya. Pilih baris yang sepadan dengan nombor yang telah ada di tangan anda." },
          { "kind": "h3", "text": "Mengapa Formula Kaki Selalunya Paling Mudah" },
          { "kind": "p", "text": "Formula kaki hanya memerlukan dua ukuran dan tiada trigonometri. Darab, bahagikan dua, selesai. Apabila kedua-dua sisi berserenjang tersedia, setiap kaedah lain ialah laluan yang lebih panjang kepada nombor yang sama." },
          { "kind": "h3", "text": "Bila Formula Sinus Berguna" },
          { "kind": "p", "text": "Kaedah berasaskan sudut mendapat tempatnya apabila ukuran yang tersedia termasuk sudut tirus, satu kaki, dan hipotenus, seperti dalam garis pandang ukur tanah atau segi tiga navigasi. Jika sudut tidak diketahui, anda perlu mendapatkan semula kaki yang hilang terlebih dahulu sebelum formula kaki boleh digunakan; bentuk sinus melangkau lencongan itu." },
          { "kind": "h3", "text": "Bila Kaedah Separuh Perimeter Berguna" },
          { "kind": "p", "text": "Formula jejari dalam-separuh perimeter sesuai untuk masalah geometri yang telah melibatkan bulatan terterap, atau situasi di mana [[r]] dan [[s]] diketahui daripada langkah terdahulu. Ia juga merupakan semakan silang bebas yang sangat baik: kerana ia tidak berkongsi aritmetik dengan formula kaki, persetujuan antara keduanya amat menunjukkan kedua-duanya betul." },
          { "kind": "h3", "text": "Bila Formula Altitud Berguna" },
          { "kind": "p", "text": "Kaedah altitud ialah pilihan semula jadi apabila hipotenus dan tinggi berserenjangnya ialah kuantiti yang diketahui, yang berlaku dalam masalah penguraian di mana segi tiga dibelah sepanjang altitudnya. Seperti formula kaki, ia merupakan pengiraan tapak-tinggi biasa tanpa trigonometri." }
        ],
        "table": {
          "headers": ["Ukuran yang diketahui", "Kaedah yang disyorkan", "Formula"],
          "rows": [
            ["Kedua-dua kaki berserenjang [[a]], [[b]]", "Area dari Kaki", "[[K=ab/2]]"],
            ["Kaki [[b]], hipotenus [[c]], sudut [[A]]", "Variasi Area (Sudut A)", "[[K=bc\\sin(A)/2]]"],
            ["Kaki [[a]], hipotenus [[c]], sudut [[B]]", "Variasi Area (Sudut B)", "[[K=ac\\sin(B)/2]]"],
            ["Jejari dalam [[r]], separuh perimeter [[s]]", "Area dari Separuh Perimeter", "[[K=rs]]"],
            ["Hipotenus [[c]], altitud berserenjang [[h]]", "Variasi Area (Altitud)", "[[K=ch/2]]"]
          ]
        },
        "imgAlt": "Lima panel menunjukkan formula luas K=ab/2, K=bc sin(A)/2, K=ac sin(B)/2, K=rs, dan K=ch/2",
        "figcaption": "Lima formula luas dan ukuran yang diperlukan oleh setiap satu."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segi Tiga Bersudut Tepat",
        "blocks": [
          { "kind": "p", "text": "Ikuti langkah-langkah ini untuk mana-mana lima mod. Memilih mod yang betul lebih penting daripada segala-galanya: mod menentukan formula yang berjalan, jadi formula yang betul dengan mod yang salah tetap menjawab soalan yang salah." },
          { "kind": "h3", "text": "Contoh Langkah Penuh: Kelima-lima Mod pada Segi Tiga 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]], [[c=5]], dengan [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]], dan [[h=2.4]], inilah yang diperlukan dan dikembalikan oleh setiap mod. Setiap mod mengembalikan [[[\\boxed{K=6\\text{ square units}}]]]." }
        ],
        "steps": [
          "<strong>Kenal pasti ukuran yang telah diketahui.</strong> Senaraikan kaki, hipotenus, sudut, jejari dalam, separuh perimeter, atau altitud yang sebenarnya anda miliki.",
          "<strong>Pilih mod kalkulator yang sepadan dengan ukuran itu.</strong> Area dari Kaki, Variasi Area (Sudut A), Variasi Area (Sudut B), Area dari Separuh Perimeter, atau Variasi Area (Altitud).",
          "<strong>Baca label medan input yang diperlukan.</strong> Setiap mod hanya menunjukkan medan yang diperlukan oleh formulanya.",
          "<strong>Kenal pasti kaki, hipotenus, sudut, jejari dalam, separuh perimeter, atau altitud mengikut kesesuaian.</strong> Padankan setiap ukuran yang diketahui dengan labelnya, menggunakan tatatanda panduan ini.",
          "<strong>Masukkan ukuran pertama yang diperlukan.</strong> Contohnya, \"Leg a\" dalam mod kaki.",
          "<strong>Masukkan ukuran yang selebihnya.</strong> Kekalkan nilai dalam medan yang dihuraikan oleh labelnya.",
          "<strong>Pilih unit yang serasi menggunakan pemilih unit yang tersedia.</strong> Semua input panjang mesti berkongsi satu sistem unit sebelum didarabkan.",
          "<strong>Untuk mod berasaskan sudut, masukkan sudut tirus yang betul.</strong> Kalkulator ini menjangkakan sudut dalam darjah. Masukkan sudut [[A]] dalam mod Sudut A dan sudut [[B]] dalam mod Sudut B, jangan sesekali sudut tepat.",
          "<strong>Semak bahawa semua input positif dan menggambarkan segi tiga yang sah.</strong> Panjang mesti positif, dan hipotenus mesti melebihi mana-mana kaki.",
          "<strong>Klik Kira Area.</strong> Butang itu menjalankan formula mod yang dipilih.",
          "<strong>Semak hasil luas dan langkah penyelesaian.</strong> Kalkulator menunjukkan formula, penggantian, dan luas akhir dalam unit persegi.",
          "<strong>Gunakan visualisasi segi tiga langsung untuk mengesahkan label.</strong> Pastikan label sisi dan sudut rajah sepadan dengan ukuran yang anda maksudkan.",
          "<strong>Gunakan Tetapkan semula semasa memulakan pengiraan baharu.</strong> Butang Tetapkan semula mengosongkan semua medan supaya pengiraan seterusnya bermula dengan bersih."
        ],
        "closingParagraphs": [
          "1. <strong>Area dari Kaki.</strong> Masukkan \"Leg a\" = 3 dan \"Leg b\" = 4. Formula: [[K=ab/2]]. Penggantian: [[K=(3\\times4)/2]]. Hasil: 6 unit persegi.",
          "2. <strong>Variasi Area (Sudut A).</strong> Masukkan \"Leg b\" = 4, \"Hypotenuse c\" = 5, \"Angle A\" = 36.87. Formula: [[K=bc\\sin(A)/2]]. Penggantian: [[K=(4\\times5\\times0.6)/2]]. Hasil: 6 unit persegi.",
          "3. <strong>Variasi Area (Sudut B).</strong> Masukkan \"Leg a\" = 3, \"Hypotenuse c\" = 5, \"Angle B\" = 53.13. Formula: [[K=ac\\sin(B)/2]]. Penggantian: [[K=(3\\times5\\times0.8)/2]]. Hasil: 6 unit persegi.",
          "4. <strong>Area dari Separuh Perimeter.</strong> Masukkan \"Inradius r\" = 1 dan \"Semiperimeter s\" = 6. Formula: [[K=rs]]. Penggantian: [[K=1\\times6]]. Hasil: 6 unit persegi.",
          "5. <strong>Variasi Area (Altitud).</strong> Masukkan \"Hypotenuse c\" = 5 dan \"Altitude h\" = 2.4. Formula: [[K=ch/2]]. Penggantian: [[K=(5\\times2.4)/2]]. Hasil: 6 unit persegi.",
          "Setiap mod menggunakan set nilai yang diketahui berbeza, dan tiada satu pun memerlukan medan input yang sama. Jawapan yang dikongsi ialah intipatinya: lima huraian, satu segi tiga, satu luas."
        ]
      },
      "sec-applications": {
        "h2": "Aplikasi Kehidupan Sebenar Pengiraan Luas Segi Tiga Bersudut Tepat",
        "blocks": [
          { "kind": "p", "text": "Setiap contoh menamakan situasi, ukuran yang diketahui, mod kalkulator yang sesuai, mengapa mod itu sesuai, formula, penggantian langkah demi langkah, jawapan akhir dalam unit persegi, tafsiran bahasa biasa, idea pengesahan di mana berguna, dan andaian di sebalik model segi tiga." },
          { "kind": "h3", "text": "Contoh 1: Mengira Luas Taman Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Sebuah taman mengandungi seksyen tanaman berbentuk segi tiga bersudut tepat dengan kaki berserenjang 6 m dan 8 m. Pilih Area dari Kaki, padanan semula jadi apabila kedua-dua kaki diukur secara langsung: [[K=(6\\times8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Seksyen itu meliputi 24 meter persegi permukaan tanaman. Ini mengandaikan seksyen taman diwakili dengan tepat oleh segi tiga bersudut tepat dengan tepi yang lurus." },
          { "kind": "h3", "text": "Contoh 2: Mengukur Panel Papan Lapis Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Seorang tukang kayu memotong panel berbentuk segi tiga bersudut tepat dengan kaki berukuran 1.2 m dan 0.8 m. Pilih Area dari Kaki: [[K=(1.2\\times0.8)/2]], [[K=0.96/2]], [[[\\boxed{K=0.48\\text{ m}^2}]]]. Panel itu meliputi hampir setengah meter persegi, yang membantu menganggar liputan bahan. Elaun pemotongan dan sisa bahan tidak termasuk dalam luas geometri ini." },
          { "kind": "h3", "text": "Contoh 3: Mencari Luas Layar Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Seksyen layar berbentuk segi tiga mempunyai kaki berserenjang 5 m dan 12 m. Pilih Area dari Kaki: [[K=(5\\times12)/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Formula ini memberi luas rata seksyen segi tiga, berguna untuk anggaran kain sebelum jahitan dan kelengkungan diambil kira." },
          { "kind": "h3", "text": "Contoh 4: Menganggar Seksyen Tanah Berbentuk Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Tinjauan tanah mengenal pasti seksyen berbentuk segi tiga bersudut tepat dengan sisi berserenjang 30 m dan 40 m. Pilih Area dari Kaki: [[K=(30\\times40)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]. Ini ialah luas seksyen segi tiga yang dinyatakan, bukan semestinya jumlah luas harta sekeliling. Sempadan tanah sebenar mungkin memerlukan tinjauan yang lebih terperinci daripada satu model segi tiga." },
          { "kind": "h3", "text": "Contoh 5: Mengira Luas Gabel Bumbung Menggunakan Sudut A" },
          { "kind": "p", "text": "Seksyen bumbung segi tiga yang dipermudah mempunyai [[b=6\\text{ m}]], [[c=10\\text{ m}]], dan [[A\\approx53.13^\\circ]]. Pilih Variasi Area (Sudut A), kerana kaki, hipotenus, dan sudut yang diapit ialah data yang diukur. Dengan [[\\sin(53.13^\\circ)\\approx0.8]]: [[K=(6\\times10\\times0.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Hasilnya ialah luas keratan rentas segi tiga. Jumlah luas permukaan bumbung sebenar bergantung pada geometri tiga dimensinya dan seksyen bumbung yang lain." },
          { "kind": "h3", "text": "Contoh 6: Mencari Luas Kanopi Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Seksyen kanopi berbentuk segi tiga bersudut tepat mempunyai [[b=4\\text{ m}]], [[c=5\\text{ m}]], dan [[A\\approx36.87^\\circ]]. Pilih Variasi Area (Sudut A): [[K=bc\\sin(A)/2]], dan dengan [[\\sin(36.87^\\circ)\\approx0.6]], [[K=(4\\times5\\times0.6)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Ini mengandaikan ukuran menggambarkan segi tiga bersudut tepat yang rata, yang berlaku untuk kanopi segi empat tepat yang ditegangkan dan dipotong pada pepenjuru." },
          { "kind": "h3", "text": "Contoh 7: Mengira Panel Sokongan Berbentuk Segi Tiga Menggunakan Sudut B" },
          { "kind": "p", "text": "Panel sokongan mempunyai [[a=3\\text{ m}]], [[c=5\\text{ m}]], dan [[B\\approx53.13^\\circ]]. Pilih Variasi Area (Sudut B): [[K=(3\\times5\\times0.8)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Formula berasaskan sudut mencari luas tanpa memasukkan kedua-dua kaki secara langsung, yang membantu apabila kaki kedua tidak pernah diukur." },
          { "kind": "h3", "text": "Contoh 8: Mencari Luas Seksyen Kekuda" },
          { "kind": "p", "text": "Seksyen kekuda berbentuk segi tiga bersudut tepat mempunyai [[a=5\\text{ m}]], [[c=13\\text{ m}]], dan [[B\\approx67.38^\\circ]]. Pilih Variasi Area (Sudut B). Oleh kerana [[\\sin(67.38^\\circ)\\approx12/13]]: [[K=(5\\times13\\times(12/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Ini ialah luas geometri seksyen segi tiga, bukan pengiraan kapasiti beban struktur." },
          { "kind": "h3", "text": "Contoh 9: Mengira Luas dari Jejari Dalam dan Separuh Perimeter" },
          { "kind": "p", "text": "Pertimbangkan segi tiga bersudut tepat 3-4-5 dengan [[r=1]] dan [[s=6]]. Pilih Area dari Separuh Perimeter: [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Jejari dalam dan separuh perimeter memberi laluan alternatif yang tidak pernah mendarabkan kedua-dua kaki, namun tiba pada jawapan yang sama." },
          { "kind": "h3", "text": "Contoh 10: Mencari Luas Plot Segi Tiga 5-12-13" },
          { "kind": "p", "text": "Plot berbentuk segi tiga bersudut tepat mempunyai sisi [[a=5]], [[b=12]], [[c=13]]. Pilih Area dari Separuh Perimeter. Separuh perimeter: [[s=(5+12+13)/2=15]]. Jejari dalam: [[r=(5+12-13)/2=2]]. Luas: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Sahkan dengan formula kaki: [[K=(5\\times12)/2=30]]. Kedua-dua kaedah sepadan kerana kedua-duanya menggambarkan plot yang sama." },
          { "kind": "h3", "text": "Contoh 11: Menganggar Luas Panel Berbentuk Segi Tiga dari Altitud" },
          { "kind": "p", "text": "Panel berbentuk segi tiga diwakili oleh segi tiga bersudut tepat yang hipotenusnya berukuran 10 m dan altitud berserenjangnya ke hipotenus ialah 4.8 m. Pilih Variasi Area (Altitud): [[K=ch/2]], [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Altitud mesti berserenjang dengan hipotenus: mana-mana garis lain dari bucu ke hipotenus lebih panjang dan akan melebih-lebihkan luas." },
          { "kind": "h3", "text": "Contoh 12: Mengira Seksyen Segi Tiga dari Hipotenus dan Altitud" },
          { "kind": "p", "text": "Seksyen berbentuk segi tiga bersudut tepat mempunyai hipotenus 20 m dan altitud berserenjang 9 m. Pilih Variasi Area (Altitud): [[K=(20\\times9)/2]], [[[\\boxed{K=90\\text{ m}^2}]]]. Ini ialah luas segi tiga apabila ukuran menggambarkan segi tiga bersudut tepat yang sah yang sama, yang memang berlaku di sini: 9 m jauh di bawah panjang hipotenus, sebagaimana garis berserenjang mestilah." },
          { "kind": "h3", "text": "Perbandingan Contoh Praktikal" }
        ],
        "table": {
          "headers": ["Situasi", "Nilai yang diketahui", "Mod kalkulator", "Formula", "Luas akhir", "Tafsiran"],
          "rows": [
            ["Petak taman", "Kaki 6 m, 8 m", "Area dari Kaki", "[[K=ab/2]]", "24 m²", "Permukaan tanaman"],
            ["Panel papan lapis", "Kaki 1.2 m, 0.8 m", "Area dari Kaki", "[[K=ab/2]]", "0.48 m²", "Liputan bahan"],
            ["Layar", "Kaki 5 m, 12 m", "Area dari Kaki", "[[K=ab/2]]", "30 m²", "Luas kain rata"],
            ["Seksyen tanah", "Kaki 30 m, 40 m", "Area dari Kaki", "[[K=ab/2]]", "600 m²", "Seksyen, bukan keseluruhan harta"],
            ["Gabel bumbung", "b 6 m, c 10 m, A 53.13°", "Variasi Area (Sudut A)", "[[K=bc\\sin(A)/2]]", "24 m²", "Keratan rentas sahaja"],
            ["Kanopi", "b 4 m, c 5 m, A 36.87°", "Variasi Area (Sudut A)", "[[K=bc\\sin(A)/2]]", "6 m²", "Luas fabrik rata"],
            ["Panel sokongan", "a 3 m, c 5 m, B 53.13°", "Variasi Area (Sudut B)", "[[K=ac\\sin(B)/2]]", "6 m²", "Kaki kedua tidak diperlukan"],
            ["Seksyen kekuda", "a 5 m, c 13 m, B 67.38°", "Variasi Area (Sudut B)", "[[K=ac\\sin(B)/2]]", "30 m²", "Geometri, bukan kapasiti beban"],
            ["Segi tiga 3-4-5", "r 1, s 6", "Area dari Separuh Perimeter", "[[K=rs]]", "6 unit persegi", "Pandangan bulatan terterap terhadap luas"],
            ["Plot 5-12-13", "r 2, s 15", "Area dari Separuh Perimeter", "[[K=rs]]", "30 unit persegi", "Sepadan dengan semakan kaki"],
            ["Panel segi tiga", "c 10 m, h 4.8 m", "Variasi Area (Altitud)", "[[K=ch/2]]", "24 m²", "Altitud mesti berserenjang"],
            ["Seksyen segi tiga", "c 20 m, h 9 m", "Variasi Area (Altitud)", "[[K=ch/2]]", "90 m²", "Segi tiga bersudut tepat yang sah"]
          ]
        },
        "imgAlt": "Empat panel: taman 24 m², gabel bumbung 24 m², kekuda 30 m², dan panel 24 m², masing-masing dengan segi tiganya",
        "figcaption": "Empat pengiraan dunia sebenar: taman, gabel bumbung, kekuda, dan panel, masing-masing dengan segi tiga dan luas akhirnya."
      },
      "sec-verify": {
        "h2": "Cara Mengesahkan Luas Segi Tiga Bersudut Tepat",
        "blocks": [
          { "kind": "p", "text": "Satu segi tiga 3-4-5, lima kaedah, satu jawapan. Diberi [[a=3]], [[b=4]], [[c=5]], dengan [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]], dan [[h=ab/c=12/5=2.4]]:" },
          { "kind": "p", "text": "<strong>Kaedah 1, Kaki:</strong> [[K=(3\\times4)/2=6]]. <strong>Kaedah 2, Sudut A:</strong> [[K=(4\\times5\\times0.6)/2=6]]. <strong>Kaedah 3, Sudut B:</strong> [[K=(3\\times5\\times0.8)/2=6]]. <strong>Kaedah 4, Jejari dalam dan separuh perimeter:</strong> [[K=1\\times6=6]]. <strong>Kaedah 5, Hipotenus dan altitud:</strong> [[K=(5\\times2.4)/2=6]]." },
          { "kind": "p", "text": "Ini ialah lima laluan matematik kepada kuantiti geometri yang sama. Luas segi tiga tidak bergantung pada formula betul yang digunakan; ia bergantung pada geometri sebenar segi tiga. Apabila dua kaedah bebas sepadan pada segi tiga anda, anda boleh mempercayai nombor itu." }
        ],
        "imgAlt": "Segi tiga 3-4-5 dengan lima panel: kaki, sudut A, sudut B, jejari dalam, separuh perimeter, altitud, memberi luas 6",
        "figcaption": "Input berbeza, formula berbeza, luas segi tiga yang sama."
      },
      "sec-mistakes": {
        "h2": "Kesilapan Lazim Semasa Mengira Luas Segi Tiga Bersudut Tepat",
        "blocks": [
          { "kind": "p", "text": "Kesilapan luas jarang kegagalan aritmetik. Ia kegagalan pelabelan, kekeliruan formula, dan kesilapan unit. Lapan belas di bawah meliputi hampir setiap jawapan salah yang boleh dihasilkan oleh kalkulator halaman ini." },
          { "kind": "h3", "text": "1. Lupa Membahagi dengan Dua" },
          { "kind": "p", "text": "Mendarab kaki tanpa membahagikan dua memberi luas segi empat tepat, bukan luas segi tiga. Dengan kaki 3 dan 4, [[3\\times4=12]] adalah salah; [[(3\\times4)/2=6]] adalah betul. Pembetulan: akhiri setiap pengiraan kaki atau tapak-tinggi dengan pembahagian dua." },
          { "kind": "h3", "text": "2. Menggunakan Hipotenus sebagai Salah Satu Kaki Berserenjang" },
          { "kind": "p", "text": "Hipotenus tidak pernah menjadi kaki. Memasukkan c = 5 sebagai kaki bersama kaki 3 yang satu lagi memberi [[(5\\times3)/2=7.5]] bukannya 6. Pembetulan: kenal pasti sisi terpanjang terlebih dahulu dan simpannya untuk medan hipotenus." },
          { "kind": "h3", "text": "3. Memadankan Sudut A dengan Sisi yang Salah" },
          { "kind": "p", "text": "Formula Sudut A memerlukan sisi [[b]], sisi yang mengepung sudut [[A]] bersama hipotenus. Memasukkan sisi [[a]] sebaliknya mengira hasil darab yang salah. Pembetulan: semak bahawa sudut [[A]] terletak di antara sisi [[b]] dan [[c]] sebelum memasukkan nilai." },
          { "kind": "h3", "text": "4. Memadankan Sudut B dengan Sisi yang Salah" },
          { "kind": "p", "text": "Imej cermin: formula Sudut B memerlukan sisi [[a]], bukan sisi [[b]]. Pembetulan: sahkan bahawa sudut [[B]] terletak di antara sisi [[a]] dan [[c]]." },
          { "kind": "h3", "text": "5. Menggunakan Sudut yang Diapit yang Salah dalam Formula Sinus" },
          { "kind": "p", "text": "Memasukkan 36.87 darjah di tempat 53.13 darjah sepatutnya, atau sebaliknya, menghasilkan luas yang munasabah tetapi salah. Pembetulan: padankan sudut dengan pasangan sisi: Sudut A bersama [[b]] dan [[c]], Sudut B bersama [[a]] dan [[c]]." },
          { "kind": "h3", "text": "6. Mengelirukan Altitud dengan Kaki" },
          { "kind": "p", "text": "Altitud [[h]] jatuh dari bucu sudut tepat ke hipotenus; kaki berjalan di sepanjang tepi segi tiga. Memasukkan kaki sebagai altitud melebih-lebihkan tinggi. Pembetulan: altitud mesti mendarat di hipotenus dengan penanda sudut tepat." },
          { "kind": "h3", "text": "7. Menggunakan Garis yang Tidak Berserenjang sebagai Altitud" },
          { "kind": "p", "text": "Mana-mana garis tidak berserenjang dari bucu ke hipotenus lebih panjang daripada altitud sebenar, jadi luas keluar terlalu besar. Pembetulan: sahkan keserenjangan, melalui pembinaan atau semakan [[h=ab/c]], sebelum menggunakan mod altitud." },
          { "kind": "h3", "text": "8. Mengelirukan Jejari Dalam dengan Jejari Luar" },
          { "kind": "p", "text": "Jejari dalam menyentuh sisi dari dalam; jejari luar mencapai bucu dari luar. Dalam segi tiga bersudut tepat, jejari luar ialah [[c/2]], sentiasa lebih besar daripada jejari dalam. Memasukkan jejari luar ke dalam formula [[K=rs]] membesarkan luas. Pembetulan: gunakan [[r=(a+b-c)/2]] untuk jejari dalam segi tiga bersudut tepat." },
          { "kind": "h3", "text": "9. Menggunakan Perimeter Penuh Bukannya Separuh Perimeter" },
          { "kind": "p", "text": "Formulanya ialah [[K=rs]] dengan [[s]] separuh perimeter. Memasukkan perimeter penuh 12 bukannya 6 dalam segi tiga 3-4-5 memberi 12 bukannya 6. Pembetulan: bahagikan dua perimeter sebelum mendarab dengan [[r]]." },
          { "kind": "h3", "text": "10. Mencampurkan Unit Ukuran yang Tidak Serasi" },
          { "kind": "p", "text": "Kaki 3 meter dan 40 sentimeter bukanlah 3 dan 40 dalam satu formula. Pembetulan: tukarkan setiap input kepada satu unit, contohnya 3 m dan 0.4 m, sebelum mengira." },
          { "kind": "h3", "text": "11. Melaporkan Meter Persegi sebagai Meter" },
          { "kind": "p", "text": "Luas 6 m² bukanlah 6 m. Unit persegi adalah sebahagian daripada maksud jawapan: ia menyatakan berapa banyak permukaan, bukan berapa banyak panjang. Pembetulan: sentiasa tulis unit persegi bersama nombor." },
          { "kind": "h3", "text": "12. Membundarkan Nilai Sinus Terlalu Awal" },
          { "kind": "p", "text": "Menggunakan 0.6 untuk sinus apabila nilai sebenar ialah 0.6000 tidak memudaratkan, tetapi membundarkan 0.9231 kepada 0.9 di pertengahan pengiraan menganjakkan hasil. Pembetulan: kekalkan ketepatan penuh melalui setiap langkah dan bundarkan hanya jawapan akhir." },
          { "kind": "h3", "text": "13. Memasukkan Sudut Tepat atau Sudut Tidak Sah ke dalam Medan Sudut Tirus" },
          { "kind": "p", "text": "Mod sudut menjangkakan sudut tirus antara 0 dan 90 darjah. Memasukkan 90 darjah atau nilai negatif menggambarkan tiada input yang sah untuk mod ini. Pembetulan: masukkan sudut tirus yang sebenarnya dimiliki segi tiga, dalam darjah." },
          { "kind": "h3", "text": "14. Menganggap Kelima-lima Mod Memerlukan Ukuran yang Sama" },
          { "kind": "p", "text": "Setiap mod meminta set input yang berbeza: mod kaki memerlukan dua kaki, mod Sudut A memerlukan kaki, hipotenus, dan sudut, dan mod separuh perimeter memerlukan jejari dalam dan separuh perimeter. Pembetulan: baca label medan mod yang anda pilih." },
          { "kind": "h3", "text": "15. Menganggap Perimeter yang Lebih Besar Sentiasa Bermaksud Luas yang Lebih Besar Secara Berkadar" },
          { "kind": "p", "text": "Perimeter dan luas berskala berbeza: menggandakan semua sisi menggandakan empat luas. Segi tiga dengan perimeter yang lebih besar boleh mempunyai luas yang lebih kecil jika ia panjang dan nipis. Pembetulan: bandingkan luas dengan formula luas, jangan sesekali dengan perimeter." },
          { "kind": "h3", "text": "16. Lupa Bahawa Luas yang Sama Boleh Dikira dalam Pelbagai Cara" },
          { "kind": "p", "text": "Menganggap setiap kaedah sebagai fakta berasingan melepaskan pengesahan terbina dalam: jika dua kaedah tidak sepadan, sesuatu yang salah dengan input atau pilihan mod. Pembetulan: jalankan kaedah kedua dan siasat sebarang ketidakpadanan." },
          { "kind": "h3", "text": "17. Memasukkan Panjang Sisi yang Tidak Dapat Menggambarkan Segi Tiga yang Dimaksudkan" },
          { "kind": "p", "text": "Sisi yang gagal semakan Pythagoras, seperti 2, 3, dan 10, tidak menggambarkan sebarang segi tiga bersudut tepat. Pembetulan: sahkan [[a^2+b^2=c^2]] sebelum mempercayai sebarang luas yang dibina daripada sisi itu." },
          { "kind": "h3", "text": "18. Menggunakan Jalan Pintas Jejari Dalam Segi Tiga Bersudut Tepat untuk Segi Tiga Bukan Bersudut Tepat" },
          { "kind": "p", "text": "Formula [[r=(a+b-c)/2]] diterbitkan daripada geometri 90 darjah. Menggunakannya pada segi tiga tirus atau cakah menghasilkan jejari dalam yang tidak bermakna. Pembetulan: gunakan jalan pintas ini hanya apabila segi tiga disahkan bersudut tepat." },
          { "kind": "h3", "text": "Salah Lawan Betul: Contoh Konkrit" },
          { "kind": "p", "text": "Diberi [[a=3]] dan [[b=4]], pengiraan yang salah melangkau pembahagian dua: [[K=3\\times4=12]]. Itu ialah luas segi empat tepat 3-kali-4 yang sepadan, bukan segi tiga bersudut tepat. Pengiraan yang betul ialah [[K=(3\\times4)/2=6]]. Segi tiga menempati separuh segi empat tepat, jadi pembahagian dengan dua inilah yang menukar jawapan segi empat tepat kepada jawapan segi tiga." }
        ]
      },
      "sec-validate": {
        "h2": "Cara Memeriksa Sama Ada Hasil Luas Anda Sah",
        "blocks": [
          { "kind": "p", "text": "Enam semakan menangkap sebahagian besar hasil yang tidak sah sebelum ia meninggalkan halaman." },
          { "kind": "h3", "text": "Semakan 1: Ukuran Positif" },
          { "kind": "p", "text": "Semua panjang yang diperlukan mestilah positif: [[a>0]], [[b>0]], [[c>0]]. Untuk mod jejari dalam, [[r>0]] dan [[s>0]], dan altitud juga mestilah positif. Input sifar atau negatif tidak menggambarkan sebarang segi tiga." },
          { "kind": "h3", "text": "Semakan 2: Panjang Sisi Segi Tiga yang Sah" },
          { "kind": "p", "text": "Untuk segi tiga bersudut tepat, [[a^2+b^2=c^2]] mesti dipenuhi, dan hipotenus mesti lebih panjang daripada mana-mana kaki. Jika sisi gagal semakan ini, input tidak konsisten dan luasnya tidak bermakna." },
          { "kind": "h3", "text": "Semakan 3: Pemadanan Sudut-Sisi yang Betul" },
          { "kind": "p", "text": "Sudut [[A]] berpasangan dengan sisi [[b]] dan [[c]] dalam formula sudut yang diapit; sudut [[B]] berpasangan dengan sisi [[a]] dan [[c]]. Sahkan pemadanan sebelum menerima hasil berasaskan sudut." },
          { "kind": "h3", "text": "Semakan 4: Altitud yang Betul" },
          { "kind": "p", "text": "Altitud [[h]] mestilah berserenjang dengan hipotenus [[c]]. Ujian kewarasan yang pantas: altitud sentiasa lebih pendek daripada hipotenus dan lebih pendek daripada mana-mana kaki." },
          { "kind": "h3", "text": "Semakan 5: Unit Luas yang Betul" },
          { "kind": "p", "text": "Jika panjang input dalam meter, luas mestilah dalam meter persegi; sentimeter memberi sentimeter persegi. Unit jawapan ialah kuasa dua unit input, bukan unit input itu sendiri." },
          { "kind": "h3", "text": "Semakan 6: Semakan Silang dengan Kaedah Lain" },
          { "kind": "p", "text": "Gunakan segi tiga 3-4-5 untuk membandingkan formula kaki dengan formula separuh perimeter: [[(3\\times4)/2=6]] dan [[1\\times6=6]]. Kedua-duanya mesti memberi 6 unit persegi. Percanggahan kecil dalam pengiraan berasaskan sudut mungkin datang daripada ukuran sudut yang dibundarkan atau nilai trigonometri yang dibundarkan; yang lebih besar menandakan ralat sebenar. Panduan ini tidak menyatakan sebarang toleransi ketepatan atau jaminan ketepatan untuk kalkulator: semakan ini tentang konsistensi, bukan tentang ketepatan yang dijanjikan." }
        ]
      },
      "sec-conclusion": {
        "h2": "Satu Segi Tiga, Lima Kaedah, Satu Luas",
        "blocks": [
          { "kind": "p", "text": "Setiap kaedah di halaman ini menjawab soalan yang sama dari titik permulaan yang berbeza. Kaki apabila anda mempunyai kedua-dua sisi berserenjang, sinus apabila anda mempunyai sudut yang diapit, jejari dalam dan separuh perimeter apabila bulatan terterap dalam pandangan, altitud apabila hipotenus dan tingginya diketahui. Padankan mod dengan ukuran anda, masukkannya dalam medan yang betul dengan unit yang serasi, dan biarkan kalkulator melakukan aritmetik. Kemudian sahkan dengan kaedah kedua: dua laluan kepada nombor yang sama ialah tanda paling pasti bahawa geometrinya betul." }
        ]
      }
    },
    "faqs": [
      { "question": "Apakah formula untuk luas segi tiga bersudut tepat?", "answer": "Formula piawai ialah K = ab/2, dengan a dan b ialah dua kaki yang berserenjang. Empat kaedah setara meliputi ukuran lain yang diketahui: K = bc sin(A)/2, K = ac sin(B)/2, K = rs (jejari dalam darab separuh perimeter), dan K = ch/2 (hipotenus darab altitud, dibahagi dengan dua)." },
      { "question": "Mengapakah anda membahagi dengan dua semasa mengira luas segi tiga?", "answer": "Dua segi tiga bersudut tepat yang serupa bercantum sepanjang hipotenusnya untuk membentuk segi empat tepat berluas ab. Satu segi tiga tepat ialah separuh daripada segi empat tepat itu, jadi luasnya ialah ab/2. Pembahagian dengan dua adalah geometri, bukan sewenang-wenangnya, dan ia muncul dalam setiap kaedah luas di halaman ini." },
      { "question": "Bolehkah saya mengira luas tanpa mengetahui hipotenus?", "answer": "Ya. Formula kaki K = ab/2 tidak memerlukan hipotenus, dan formula jejari dalam-separuh perimeter K = rs juga tidak memerlukannya. Hipotenus hanya diperlukan untuk mod berasaskan sudut dan mod altitud." },
      { "question": "Bagaimanakah saya mencari luas menggunakan satu sisi dan sudut?", "answer": "Gunakan bentuk sudut yang diapit. Dengan kaki b, hipotenus c, dan sudut A, luasnya ialah K = bc sin(A)/2. Dengan kaki a, hipotenus c, dan sudut B, ia ialah K = ac sin(B)/2. Masukkan sudut dalam darjah, dan pastikan ia ialah sudut tirus di antara dua sisi yang diketahui." },
      { "question": "Mengapakah formula berasaskan sudut menggunakan sinus?", "answer": "Formula umum untuk dua sisi dan sudut yang diapitnya ialah K = 1/2 xy sin(theta). Sinus mengekstrak komponen berserenjang satu sisi relatif kepada yang satu lagi, iaitu tinggi berkesan. Untuk sudut A yang diapit oleh sisi b dan c, itu memberi K = bc sin(A)/2." },
      { "question": "Apakah jejari dalam segi tiga bersudut tepat?", "answer": "Jejari dalam ialah jejari bulatan yang terterap di dalam segi tiga, menyentuh ketiga-tiga sisi. Untuk segi tiga bersudut tepat ia boleh dikira sebagai r = (a + b - c)/2. Ia bukan jejari luar, yang mencapai bucu dan sama dengan c/2 dalam segi tiga bersudut tepat." },
      { "question": "Apakah perbezaan antara perimeter dan separuh perimeter?", "answer": "Perimeter ialah jumlah panjang sempadan, a + b + c. Separuh perimeter ialah separuh daripadanya, s = (a + b + c)/2. Formula luas K = rs menggunakan separuh perimeter; menggunakan perimeter penuh akan menggandakan jawapan." },
      { "question": "Bagaimanakah saya mengira luas menggunakan hipotenus dan altitud?", "answer": "Gunakan K = ch/2, dengan c ialah hipotenus dan h ialah altitud berserenjang dari bucu sudut tepat ke hipotenus. Altitud mesti bertemu hipotenus pada 90 darjah; ia bukan salah satu kaki. Jika hanya kaki diketahui, cari altitud terlebih dahulu dengan h = ab/c." },
      { "question": "Mengapakah kelima-lima kaedah luas memberi hasil yang sama?", "answer": "Kerana ia huraian algebra yang berbeza bagi kuantiti geometri yang sama. Formula kaki, bentuk sinus, hasil darab jejari dalam-separuh perimeter, dan bentuk hipotenus-altitud semuanya terbukti sama untuk segi tiga bersudut tepat yang konsisten. Persetujuan antara dua kaedah ialah pengesahan terbaik bahawa input dan mod adalah betul." },
      { "question": "Unit apakah yang patut saya gunakan untuk luas?", "answer": "Unit persegi yang sepadan dengan panjang input: meter memberi meter persegi, sentimeter memberi sentimeter persegi. Tukarkan semua input kepada satu unit sebelum mengira, dan laporkan hasil dengan unit persegi, jangan sesekali unit linear." },
      { "question": "Bolehkah saya mengira luas jika saya hanya mengetahui hipotenus?", "answer": "Tidak. Hipotenus sahaja tidak menentukan segi tiga bersudut tepat yang unik, jadi luasnya tidak tetap. Anda memerlukan sekurang-kurangnya satu lagi ukuran bebas: kaki, sudut tirus, altitud, atau jejari dalam bersama separuh perimeter." },
      { "question": "Bagaimanakah saya boleh menyemak sama ada pengiraan luas saya betul?", "answer": "Jalankan kaedah kedua pada segi tiga yang sama dan bandingkan. Untuk segi tiga 3-4-5, formula kaki memberi (3 x 4)/2 = 6 dan kaedah separuh perimeter memberi 1 x 6 = 6. Juga sahkan sisi memenuhi teorem Pythagoras, sahkan pemadanan sudut-sisi, dan semak altitud berserenjang dengan hipotenus." }
    ],
    "faqHeading": "Soalan Lazim",
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
    "relatedItems": [
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Kaki",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Sudut",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Separuh Perimeter",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Altitud",
      "Kalkulator Perimeter dan Separuh Perimeter Segi Tiga Bersudut Tepat",
      "Kalkulator Jejari Dalam dan Jejari Luar Segi Tiga Bersudut Tepat",
      "Kalkulator Sisi Segi Tiga Bersudut Tepat"
    ]
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Co to jest kalkulator pola trójkąta prostokątnego?",
      "sec-triangle": "Co to jest pole trójkąta prostokątnego?",
      "sec-legs": "Pole trójkąta prostokątnego z dwóch przyprostokątnych",
      "sec-angle-a": "Wyznaczanie pola trójkąta prostokątnego z boku b, przeciwprostokątnej c i kąta A",
      "sec-angle-b": "Wyznaczanie pola trójkąta prostokątnego z boku a, przeciwprostokątnej c i kąta B",
      "sec-inradius": "Wyznaczanie pola trójkąta prostokątnego z promienia okręgu wpisanego i półobwodu",
      "sec-altitude": "Wyznaczanie pola trójkąta prostokątnego z przeciwprostokątnej i wysokości",
      "sec-choose": "Którego wzoru na pole trójkąta prostokątnego użyć?",
      "sec-howto": "Jak korzystać z kalkulatora pola trójkąta prostokątnego",
      "sec-applications": "Zastosowania obliczeń pola trójkąta prostokątnego w życiu codziennym",
      "sec-verify": "Jak zweryfikować pole trójkąta prostokątnego",
      "sec-mistakes": "Typowe błędy przy obliczaniu pola trójkąta prostokątnego",
      "sec-validate": "Jak sprawdzić, czy wynik pola jest prawidłowy",
      "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "sec-faq": "Częste pytania",
      "sec-conclusion": "Podsumowanie"
    },
    "sections": {
      "sec-intro": {
        "h2": "Co to jest kalkulator pola trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "Kalkulator pola trójkąta prostokątnego wyznacza dwuwymiarowe pole powierzchni zamknięte przez trzy boki trójkąta prostokątnego. Na przykład trójkąt prostokątny o przyprostokątnych [[a=3\\text{ m}]] i [[b=4\\text{ m}]] ma pole [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]: trójkąt zajmuje sześć metrów kwadratowych powierzchni. Pole mierzy się w jednostkach kwadratowych, ponieważ liczy płaską przestrzeń, a nie długość." },
          { "kind": "p", "text": "Prostopadłe przyprostokątne ogromnie upraszczają obliczenia. Ponieważ obie przyprostokątne spotykają się pod kątem 90 stopni, jedna przyprostokątna może służyć za podstawę, a druga za wysokość, więc pole to po prostu połowa ich iloczynu. Ta prostota jest jednym z powodów, dla których wzór z przyprostokątnymi jest pierwszą metodą, której uczy się większość uczniów." },
          { "kind": "p", "text": "Istnieje kilka metod obliczania tego samego pola, ponieważ rzeczywiste zadania dostarczają różnych pomiarów. Stolarz mierzy dwie przyprostokątne panelu; geodeta mierzy przeciwprostokątną i kąt; geometra pracujący z okręgiem wpisanym zna promień okręgu wpisanego i półobwód. Każda metoda zamienia własny zestaw znanych wartości w to samo pole. Kalkulator na tej stronie oferuje pięć trybów odpowiadających tym sytuacjom: Pole z przyprostokątnych, Wariant pola (kąt A), Wariant pola (kąt B), Pole z półobwodu oraz Wariant pola (wysokość). Najlepsza metoda to zwykle ta, która wykorzystuje pomiary, które już posiadasz, bez wymuszania dodatkowych przeliczeń." }
        ]
      },
      "sec-triangle": {
        "h2": "Co to jest pole trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "W tym przewodniku stosowana jest jedna spójna notacja: [[A]] i [[B]] to dwa kąty ostre, [[C=90^\\circ]] to kąt prosty, bok [[a]] leży naprzeciw kąta [[A]], bok [[b]] leży naprzeciw kąta [[B]], bok [[c]] to przeciwprostokątna naprzeciw kąta [[C]], [[h]] to wysokość prostopadła poprowadzona z wierzchołka [[C]] do przeciwprostokątnej, [[r]] to promień okręgu wpisanego, [[s]] to półobwód, a [[K]] to pole." },
          { "kind": "h3", "text": "Co to jest trójkąt prostokątny?" },
          { "kind": "p", "text": "Trójkąt prostokątny ma jeden kąt równy dokładnie 90 stopni. Jego dwie przyprostokątne spotykają się przy kącie prostym, a przeciwprostokątna leży naprzeciw tego kąta. Przeciwprostokątna jest zawsze najdłuższym bokiem, a pozostałe dwa kąty są ostre: ponieważ suma trzech kątów wynosi 180 stopni, [[A+B=90^\\circ]]. Obie przyprostokątne są prostopadłe, i to właśnie ta własność sprawia, że wzór na pole jest tak bezpośredni." },
          { "kind": "h3", "text": "Co oznacza pole?" },
          { "kind": "p", "text": "Pole mierzy dwuwymiarową przestrzeń zamkniętą przez trzy boki trójkąta. Różni się od obwodu, który mierzy całkowitą długość granicy, od długości boku, która mierzy jeden wymiar, oraz od objętości, która mierzy przestrzeń trójwymiarową. Trójkątny kawałek papieru ma pole równe ilości papieru, którą pokrywa; trójkątny fragment ogrodu ma pole równe gruntowi, który zajmuje. Oba podaje się w jednostkach kwadratowych, takich jak metry kwadratowe, ponieważ pole liczy kwadraty jednostkowe mieszczące się wewnątrz figury." },
          { "kind": "h3", "text": "Dlaczego pole dzieli się przez dwa?" },
          { "kind": "p", "text": "Dwa identyczne trójkąty prostokątne można połączyć wzdłuż przeciwprostokątnych, tworząc prostokąt. Jeśli każdy trójkąt ma prostopadłe przyprostokątne [[a]] i [[b]], prostokąt ma pole [[ab]]. Jeden trójkąt zajmuje dokładnie połowę tego prostokąta, więc [[[\\boxed{K=\\frac{ab}{2}}]]]. Dzielenie przez dwa nie jest sztucznym współczynnikiem: jest geometryczną konsekwencją tego, że trójkąt jest połową prostokąta, i pojawia się w każdej metodzie obliczania pola na tej stronie w tej czy innej postaci." },
          { "kind": "h3", "text": "Dlaczego ten sam trójkąt może mieć pięć wzorów na pole?" },
          { "kind": "p", "text": "Pole trójkąta nie zmienia się, gdy zastosuje się inną metodę pomiaru. Metody po prostu zaczynają od różnych znanych wartości. Dwie przyprostokątne dają najprostszy wzór. Przyprostokątna, przeciwprostokątna i zawarty między nimi kąt ostry pozwalają na wzór z sinusem. Promień okręgu wpisanego i półobwód dają alternatywną zależność geometryczną. Przeciwprostokątna i wysokość prostopadła korzystają z ogólnej reguły podstawa-wysokość. Wszystkie pięć metod musi dać to samo pole, gdy dane wejściowe opisują ten sam prawidłowy trójkąt, a ta zgodność jest najsilniejszą dostępną weryfikacją: dwie metody, jeden trójkąt, jedna odpowiedź." }
        ],
        "imgAlt": "Anatomia trójkąta prostokątnego: przyprostokątne a, b, przeciwprostokątna c, kąt prosty C, wysokość h, wzór K = ab/2",
        "figcaption": "Anatomia trójkąta prostokątnego: C to kąt prosty, a i b to przyprostokątne, c to przeciwprostokątna, a h to wysokość poprowadzona do przeciwprostokątnej."
      },
      "sec-legs": {
        "h2": "Pole trójkąta prostokątnego z dwóch przyprostokątnych",
        "blocks": [
          { "kind": "p", "text": "Wzór z przyprostokątnymi jest punktem wyjścia do obliczania pola trójkąta prostokątnego: [[[\\boxed{K=\\frac{ab}{2}}]]]. Potrzebuje tylko dwóch prostopadłych boków, a wszystko inne na tej stronie można postrzegać jako odmianę, która odzyskuje tę samą wielkość z różnych danych wejściowych." },
          { "kind": "h3", "text": "Kiedy stosować wzór z przyprostokątnymi?" },
          { "kind": "p", "text": "Stosuj tę metodę, gdy znane są oba prostopadłe boki. Nie jest potrzebne żadne wcześniejsze obliczenie kąta, przeciwprostokątnej, promienia okręgu wpisanego ani wysokości. Bezpośredni pomiar obu przyprostokątnych jest powszechny w stolarce, układaniu płytek i zadaniach szkolnych, dlatego tryb Pole z przyprostokątnych jest domyślnym wyborem w większości codziennych obliczeń." },
          { "kind": "h3", "text": "Jak działa wzór" },
          { "kind": "p", "text": "Dwie przyprostokątne tworzą podstawę i prostopadłą wysokość trójkąta. Ogólny wzór na pole trójkąta to [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]; ponieważ przyprostokątne są prostopadłe, podstawę i wysokość można przyjąć bezpośrednio jako [[a]] i [[b]], co daje [[K=ab/2]]. Nie ma tu trygonometrii i nie trzeba najpierw znajdować żadnego dodatkowego boku." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład: trójkąt 3-4-5" },
          { "kind": "p", "text": "Dane: [[a=3\\text{ m}]] i [[b=4\\text{ m}]]. Krok 1: zapisz wzór [[K=ab/2]]. Krok 2: podstaw wartości, [[K=(3\\times4)/2]]. Krok 3: pomnóż, [[K=12/2]]. Krok 4: podziel przez dwa, [[[\\boxed{K=6\\text{ m}^2}]]]. Odpowiedź to sześć metrów kwadratowych, a nie sześć metrów: jednostka niesie znaczenie wielkości." },
          { "kind": "h3", "text": "Czy można zamienić dwie przyprostokątne?" },
          { "kind": "p", "text": "Tak. Mnożenie jest przemienne, więc [[ab=ba]], a zatem [[ab/2=ba/2]]. Pole nie zmienia się, jeśli obie przyprostokątne zostaną wprowadzone w odwrotnej kolejności, pod warunkiem że pola kalkulatora odpowiadają właściwym długościom przyprostokątnych. Ta symetria dotyczy tylko przyprostokątnych: zamiana przyprostokątnej z przeciwprostokątną złamałaby wzór." },
          { "kind": "h3", "text": "Co jeśli przyprostokątne mają wartości dziesiętne?" },
          { "kind": "p", "text": "Pomiary dziesiętne działają w tym samym wzorze. Dla [[a=3.5\\text{ cm}]] i [[b=9.2\\text{ cm}]]: [[K=(3.5\\times9.2)/2]], [[K=32.2/2]], [[[\\boxed{K=16.1\\text{ cm}^2}]]]. Arytmetyka jest identyczna; zmienia się tylko precyzja danych wejściowych, więc zachowaj wystarczającą liczbę cyfr i zaokrąglaj na końcu." },
          { "kind": "h3", "text": "Co jeśli jedna przyprostokątna jest nieznana?" },
          { "kind": "p", "text": "Brakującą przyprostokątną można czasem najpierw wyznaczyć z twierdzenia Pitagorasa lub ze znanego kąta, a następnie zastosować wzór z przyprostokątnymi. Zauważ, że sam tryb przyprostokątnych potrzebuje obu przyprostokątnych: nie odtwarza automatycznie brakującego boku. Jeśli znane są tylko jedna przyprostokątna i przeciwprostokątna, obliczenie brakującej przyprostokątnej jest osobnym krokiem, zanim będzie można użyć tego trybu." }
        ]
      },
      "sec-angle-a": {
        "h2": "Wyznaczanie pola trójkąta prostokątnego z boku b, przeciwprostokątnej c i kąta A",
        "blocks": [
          { "kind": "p", "text": "Ta metoda jest przydatna, gdy znane są bok [[b]], przeciwprostokątna [[c]] i kąt ostry [[A]]: [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Jest to tryb Wariant pola (kąt A) kalkulatora." },
          { "kind": "h3", "text": "Dlaczego ten wzór używa sinusa?" },
          { "kind": "p", "text": "Ogólny wzór na pole z dwóch boków i zawartego między nimi kąta to [[K=\\frac12 xy\\sin(\\theta)]]. Kąt [[A]] leży między bokami [[b]] i [[c]], więc podstawienie [[x=b]], [[y=c]], [[\\theta=A]] daje [[K=\\frac12 bc\\sin(A)]]. Sinus uwzględnia składową prostopadłą jednego boku: tylko ta część boku [[c]], która stoi prostopadle do [[b]], wnosi wysokość, a tą prostopadłą częścią jest [[c\\sin(A)]]." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład: trójkąt 3-4-5" },
          { "kind": "p", "text": "Dane: [[b=4\\text{ m}]], [[c=5\\text{ m}]] oraz [[A\\approx36.87^\\circ]]. Ponieważ [[\\sin(36.87^\\circ)\\approx0.6]], podstaw: [[K=(4\\times5\\times0.6)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Wynik zgadza się ze wzorem z przyprostokątnymi, ponieważ 0.6 to dokładnie stosunek [[a/c=3/5]]: postać z sinusem to wzór z przyprostokątnymi w przebraniu, w którym [[c\\sin(A)]] pełni rolę drugiej przyprostokątnej." },
          { "kind": "h3", "text": "Co się dzieje, gdy zmienia się kąt?" },
          { "kind": "p", "text": "Czynnik sinusoidalny zmienia pole, gdy dwa boki i zawarty kąt są zmieniane w ramach prawidłowego trójkąta. Nie wyobrażaj sobie kąta zmieniającego się przy stałych długościach wszystkich boków: w prawdziwym trójkącie boki i kąty są powiązane, więc zmiana kąta przekształca trójkąt i pociąga za sobą pole. Kąt zawarty jest istotny dla tego wzoru dokładnie dlatego, że koduje, jak bardzo trójkąt jest otwarty lub zamknięty." },
          { "kind": "h3", "text": "Typowe błędy w trybie kąta A" },
          { "kind": "p", "text": "W tym trybie powtarza się pięć błędów. Najczęstszy to sparowanie kąta [[A]] z niewłaściwym bokiem: ten wzór potrzebuje boku [[b]], a nie boku [[a]], ponieważ [[b]] i [[c]] to boki zawierające kąt [[A]]. Wprowadzenie kąta w niewłaściwej jednostce psuje wartość sinusa: ten kalkulator oczekuje stopni, więc 36.87 stopnia nie wolno wprowadzać jako 0.6435 radiana. Zapomnienie o podzieleniu przez dwa podwaja odpowiedź. A wprowadzenie kąta prostego lub innego kąta nieostrego w pole kąta ostrego nie opisuje żadnego prawidłowego wejścia dla tego trybu; kąt musi leżeć ściśle między 0 a 90 stopni." }
        ]
      },
      "sec-angle-b": {
        "h2": "Wyznaczanie pola trójkąta prostokątnego z boku a, przeciwprostokątnej c i kąta B",
        "blocks": [
          { "kind": "p", "text": "Ten tryb korzysta z drugiego kąta ostrego i jego dwóch przyległych boków: [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. Jest to tryb Wariant pola (kąt B) kalkulatora." },
          { "kind": "h3", "text": "Dlaczego ten wzór działa?" },
          { "kind": "p", "text": "Boki [[a]] i [[c]] zawierają kąt [[B]]. Zaczynając od ogólnego wzoru [[K=\\frac12 xy\\sin(\\theta)]] i podstawiając [[x=a]], [[y=c]], [[\\theta=B]], otrzymujemy [[K=\\frac12 ac\\sin(B)]]. Struktura jest identyczna jak we wzorze dla kąta A; przesuwają się tylko oznaczenia, ponieważ geometria obu kątów ostrych odbija się w sobie jak w lustrze." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład: ten sam trójkąt 3-4-5" },
          { "kind": "p", "text": "Dane: [[a=3\\text{ m}]], [[c=5\\text{ m}]] oraz [[B\\approx53.13^\\circ]]. Ponieważ [[\\sin(53.13^\\circ)\\approx0.8]], oblicz: [[K=(3\\times5\\times0.8)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Wynik zgadza się z metodą przyprostokątnych i metodą kąta A, jak musi: wszystkie trzy opisują ten sam trójkąt." },
          { "kind": "h3", "text": "Jak kąty A i B są ze sobą powiązane?" },
          { "kind": "p", "text": "Oba kąty ostre są dopełniające: [[[\\boxed{A+B=90^\\circ}]]]. Daje to tożsamości [[\\sin(A)=\\cos(B)]] i [[\\sin(B)=\\cos(A)]]. W trójkącie 3-4-5 [[\\sin(A)=0.6=\\cos(B)]] oraz [[\\sin(B)=0.8=\\cos(A)]]. Te zależności wyjaśniają, dlaczego oba tryby kątowe obliczają to samo pole, gdy ich dane wejściowe są spójne: sinus jednego trybu jest cosinusem drugiego trybu, a geometria trójkąta nie zmienia się niezależnie od tego, od którego kąta ostrego zaczniesz." },
          { "kind": "h3", "text": "Typowe błędy w trybie kąta B" },
          { "kind": "p", "text": "Pojawiają się tu lustrzane błędy: użycie boku [[b]] zamiast boku [[a]], sparowanie kąta [[B]] z niewłaściwym bokiem oraz mylenie obu kątów ostrych ze sobą. Zapomnienie funkcji sinus lub zapomnienie o podzieleniu przez dwa to te same potknięcia arytmetyczne co w trybie kąta A. Wreszcie kąt nieodpowiadający zmierzonemu trójkątowi, na przykład wprowadzenie 36.87 stopnia tam, gdzie należy 53.13 stopnia, po cichu daje błędne, ale wiarygodnie wyglądające pole, więc zawsze sprawdzaj, czy kąt pasuje do pary boków." }
        ]
      },
      "sec-inradius": {
        "h2": "Wyznaczanie pola trójkąta prostokątnego z promienia okręgu wpisanego i półobwodu",
        "blocks": [
          { "kind": "p", "text": "Ta metoda potrzebuje tylko dwóch liczb: promienia okręgu wpisanego [[r]] i półobwodu [[s]]: [[[\\boxed{K=rs}]]]. Promień okręgu wpisanego to promień koła wpisanego w trójkąt, koła stykającego się ze wszystkimi trzema bokami. Półobwód to połowa obwodu trójkąta: [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Jest to tryb Pole z półobwodu kalkulatora." },
          { "kind": "h3", "text": "Dlaczego pole równa się promieniowi okręgu wpisanego razy półobwód?" },
          { "kind": "p", "text": "Połącz środek okręgu wpisanego ze wszystkimi trzema wierzchołkami. Dzieli to trójkąt na trzy mniejsze trójkąty. Każdy mniejszy trójkąt ma tę samą wysokość prostopadłą [[r]], ponieważ promień okręgu wpisanego jest prostopadłą odległością od środka okręgu do każdego boku. Dodanie ich pól daje [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]. Wyłącz [[r/2]] przed nawias: [[K=\\frac12 r(a+b+c)]]. Ponieważ [[s=(a+b+c)/2]], wynika stąd, że [[[\\boxed{K=rs}]]]. Ta zależność zachodzi dla każdego prawidłowego trójkąta, nie tylko prostokątnego, pod warunkiem że znane są właściwy promień okręgu wpisanego i półobwód." },
          { "kind": "h3", "text": "Wyznaczanie promienia okręgu wpisanego w trójkąt prostokątny" },
          { "kind": "p", "text": "Dla trójkąta prostokątnego istnieje wygodny skrót: [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Traktuj go jako skrót dla trójkąta prostokątnego, a nie jako ogólny wzór na promień okręgu wpisanego: dla ogólnego trójkąta promień okręgu wpisanego pochodzi z [[r=K/s]], co jest błędnym kołem, jeśli próbujesz wyznaczyć pole. Skrót działa, ponieważ dwie długości stycznych z wierzchołka kąta prostego są równe, a algebra zgrabnie upraszcza się dla przypadku 90 stopni." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład: trójkąt 3-4-5" },
          { "kind": "p", "text": "Dane: [[a=3]], [[b=4]], [[c=5]]. Najpierw półobwód: [[s=(3+4+5)/2]], [[[\\boxed{s=6}]]]. Następnie promień okręgu wpisanego: [[r=(3+4-5)/2]], [[[\\boxed{r=1}]]]. Pole wynosi [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Odpowiedź zgadza się ze wzorem z przyprostokątnymi, co potwierdza, że ujęcie z okręgiem wpisanym i ujęcie z przyprostokątnymi opisują ten sam trójkąt." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład: trójkąt 5-12-13" },
          { "kind": "p", "text": "Dane: [[a=5]], [[b=12]], [[c=13]]. Półobwód: [[s=(5+12+13)/2=15]]. Promień okręgu wpisanego: [[r=(5+12-13)/2=2]]. Pole: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Zweryfikuj wzorem z przyprostokątnymi: [[K=(5\\times12)/2=30]]. Obie metody są zgodne, co jest oczekiwanym wynikiem, gdy pomiary boków są spójne." },
          { "kind": "h3", "text": "Typowe błędy" },
          { "kind": "p", "text": "Mylenie promienia okręgu wpisanego z promieniem okręgu opisanego to charakterystyczny błąd: promień okręgu wpisanego dotyka boków od wewnątrz, podczas gdy promień okręgu opisanego sięga wierzchołków od zewnątrz, i są to różne liczby. Użycie pełnego obwodu zamiast półobwodu podwaja odpowiedź. Zastosowanie skrótu na promień okręgu wpisanego w trójkącie prostokątnym [[r=(a+b-c)/2]] do trójkąta nieprostokątnego daje bezsensowną wartość. Zapomnienie, że iloczyn [[rs]] ma jednostki kwadratowe, oraz wprowadzanie niespójnych pomiarów boków do obliczeń [[r]] i [[s]], dopełniają listę typowych niepowodzeń." }
        ]
      },
      "sec-altitude": {
        "h2": "Wyznaczanie pola trójkąta prostokątnego z przeciwprostokątnej i wysokości",
        "blocks": [
          { "kind": "p", "text": "Ta metoda używa przeciwprostokątnej [[c]] jako podstawy i wysokości prostopadłej [[h]] jako wysokości: [[[\\boxed{K=\\frac{ch}{2}}]]]. Jest to tryb Wariant pola (wysokość) kalkulatora." },
          { "kind": "h3", "text": "Co to jest wysokość?" },
          { "kind": "p", "text": "Wysokość to prosta prostopadła poprowadzona z wierzchołka do przeciwległego boku. W tym trybie wysokość zaczyna się w wierzchołku kąta prostego [[C]] i spotyka przeciwprostokątną pod kątem 90 stopni. Nie jest tym samym co żadna z przyprostokątnych [[a]] ani [[b]]: przyprostokątne leżą wzdłuż krawędzi trójkąta, podczas gdy wysokość opada do wnętrza i ląduje na przeciwprostokątnej. Znacznik kąta prostego w miejscu, gdzie [[h]] spotyka [[c]], jest wizualną gwarancją spełnienia warunku prostopadłości." },
          { "kind": "h3", "text": "Dlaczego wzór działa?" },
          { "kind": "p", "text": "Jest to ogólny wzór podstawa-wysokość przy szczególnym wyborze podstawy. Zacznij od [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Wybierz przeciwprostokątną jako podstawę, [[\\text{base}=c]], a wysokość prostopadłą jako wysokość, [[\\text{height}=h]]. Stąd [[K=ch/2]]. Nic w tym wyprowadzeniu nie jest specyficzne dla trójkątów prostokątnych: pole każdego trójkąta można zapisać w ten sposób, ale wzór z przyprostokątnymi trójkąta prostokątnego jest po prostu szybszy, gdy przyprostokątne są znane." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład: trójkąt 6-8-10" },
          { "kind": "p", "text": "Dane: [[c=10\\text{ m}]] i [[h=4.8\\text{ m}]]. Oblicz: [[K=(10\\times4.8)/2]], [[K=48/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. To to samo pole co trójkąt prostokątny o przyprostokątnych 6 m i 8 m, ponieważ [[(6\\times8)/2=24]]. Dwa różne opisy, jedno pole." },
          { "kind": "h3", "text": "Jak można obliczyć wysokość?" },
          { "kind": "p", "text": "Gdy znane są obie przyprostokątne i przeciwprostokątna, wysokość wynika z przyrównania dwóch wzorów na pole: [[ab/2=ch/2]], więc [[[\\boxed{h=\\frac{ab}{c}}]]]. Dla trójkąta 6-8-10: [[h=(6\\times8)/10=4.8\\text{ m}]]. Wysokość jest krótsza niż przeciwprostokątna, jak musi być: prostopadła to najkrótsza droga od wierzchołka do prostej. Zauważ, że tryb wysokości nie oblicza samodzielnie brakującej wysokości; wysokość musi być znana lub najpierw wyprowadzona." }
        ]
      },
      "sec-choose": {
        "h2": "Którego wzoru na pole trójkąta prostokątnego użyć?",
        "blocks": [
          { "kind": "p", "text": "Pięć metod, jedno pole. Poniższe porównanie przyporządkowuje każdy zestaw znanych pomiarów do jego wzoru i trybu kalkulatora. Wybierz wiersz pasujący do liczb, które już masz w ręku." },
          { "kind": "h3", "text": "Dlaczego wzór z przyprostokątnymi jest często najprostszy" },
          { "kind": "p", "text": "Wzór z przyprostokątnymi potrzebuje tylko dwóch pomiarów i żadnej trygonometrii. Pomnóż, podziel na pół, gotowe. Gdy dostępne są oba prostopadłe boki, każda inna metoda jest dłuższą drogą do tej samej liczby." },
          { "kind": "h3", "text": "Kiedy wzór z sinusem jest przydatny" },
          { "kind": "p", "text": "Metoda kątowa zasługuje na swoje miejsce, gdy dostępne pomiary obejmują kąt ostry, jedną przyprostokątną i przeciwprostokątną, jak w geodezyjnych liniach celowania czy trójkątach nawigacyjnych. Gdyby kąt nie był znany, trzeba by najpierw odzyskać brakującą przyprostokątną, zanim można by użyć wzoru z przyprostokątnymi; postać z sinusem pomija ten objazd." },
          { "kind": "h3", "text": "Kiedy metoda z półobwodem jest przydatna" },
          { "kind": "p", "text": "Wzór z promieniem okręgu wpisanego i półobwodem pasuje do zadań geometrycznych, które już dotyczą okręgu wpisanego, lub sytuacji, w których [[r]] i [[s]] są znane z wcześniejszych kroków. Jest też doskonałą niezależną kontrolą: ponieważ nie dzieli arytmetyki ze wzorem z przyprostokątnymi, zgodność obu silnie sugeruje, że oba są poprawne." },
          { "kind": "h3", "text": "Kiedy wzór z wysokością jest przydatny" },
          { "kind": "p", "text": "Metoda z wysokością jest naturalnym wyborem, gdy przeciwprostokątna i jej prostopadła wysokość są znanymi wielkościami, co zdarza się w zadaniach dekompozycji, w których trójkąt dzieli się wzdłuż wysokości. Podobnie jak wzór z przyprostokątnymi, jest to zwykłe obliczenie podstawa-wysokość bez trygonometrii." }
        ],
        "table": {
          "headers": ["Znane pomiary", "Zalecana metoda", "Wzór"],
          "rows": [
            ["Obie prostopadłe przyprostokątne [[a]], [[b]]", "Pole z przyprostokątnych", "[[K=ab/2]]"],
            ["Przyprostokątna [[b]], przeciwprostokątna [[c]], kąt [[A]]", "Wariant pola (kąt A)", "[[K=bc\\sin(A)/2]]"],
            ["Przyprostokątna [[a]], przeciwprostokątna [[c]], kąt [[B]]", "Wariant pola (kąt B)", "[[K=ac\\sin(B)/2]]"],
            ["Promień okręgu wpisanego [[r]], półobwód [[s]]", "Pole z półobwodu", "[[K=rs]]"],
            ["Przeciwprostokątna [[c]], wysokość prostopadła [[h]]", "Wariant pola (wysokość)", "[[K=ch/2]]"]
          ]
        },
        "imgAlt": "Pięć paneli ze wzorami na pole: K=ab/2, K=bc sin(A)/2, K=ac sin(B)/2, K=rs oraz K=ch/2",
        "figcaption": "Pięć wzorów na pole oraz pomiary, których każdy z nich wymaga."
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora pola trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Wykonaj te kroki dla każdego z pięciu trybów. Wybór właściwego trybu ma większe znaczenie niż cokolwiek innego: tryb decyduje, który wzór się uruchomi, więc poprawny wzór przy złym trybie wciąż odpowiada na złe pytanie." },
          { "kind": "h3", "text": "Pełny przebieg: wszystkie pięć trybów na trójkącie 3-4-5" },
          { "kind": "p", "text": "Dane: [[a=3]], [[b=4]], [[c=5]], przy czym [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] oraz [[h=2.4]]; oto co każdy tryb potrzebuje i zwraca. Każdy tryb zwraca [[[\\boxed{K=6\\text{ square units}}]]]." }
        ],
        "steps": [
          "<strong>Zidentyfikuj pomiary, które już znasz.</strong> Wypisz, które z przyprostokątnych, przeciwprostokątnej, kątów, promienia okręgu wpisanego, półobwodu lub wysokości faktycznie posiadasz.",
          "<strong>Wybierz tryb kalkulatora pasujący do tych pomiarów.</strong> Pole z przyprostokątnych, Wariant pola (kąt A), Wariant pola (kąt B), Pole z półobwodu lub Wariant pola (wysokość).",
          "<strong>Przeczytaj etykiety wymaganych pól wejściowych.</strong> Każdy tryb pokazuje tylko pola potrzebne jego wzorowi.",
          "<strong>Zidentyfikuj przyprostokątne, przeciwprostokątną, kąt, promień okręgu wpisanego, półobwód lub wysokość, stosownie do potrzeb.</strong> Dopasuj każdy znany pomiar do jego etykiety, korzystając z notacji tego przewodnika.",
          "<strong>Wprowadź pierwszy wymagany pomiar.</strong> Na przykład \"Leg a\" w trybie przyprostokątnych.",
          "<strong>Wprowadź pozostałe pomiary.</strong> Trzymaj wartości w polach opisanych ich etykietami.",
          "<strong>Wybierz zgodne jednostki za pomocą dostępnych selektorów jednostek.</strong> Wszystkie dane wejściowe długości muszą mieć jeden wspólny system jednostek, zanim zostaną pomnożone.",
          "<strong>W trybach kątowych wprowadź właściwy kąt ostry.</strong> Ten kalkulator oczekuje kątów w stopniach. Wprowadź kąt [[A]] w trybie kąta A i kąt [[B]] w trybie kąta B, nigdy kąta prostego.",
          "<strong>Sprawdź, czy wszystkie dane wejściowe są dodatnie i opisują prawidłowy trójkąt.</strong> Długości muszą być dodatnie, a przeciwprostokątna musi przekraczać każdą przyprostokątną.",
          "<strong>Kliknij Oblicz Area.</strong> Przycisk uruchamia wzór wybranego trybu.",
          "<strong>Przejrzyj wynik pola i kroki rozwiązania.</strong> Kalkulator pokazuje wzór, podstawienie oraz końcowe pole w jednostkach kwadratowych.",
          "<strong>Użyj podglądu trójkąta na żywo, aby zweryfikować etykiety.</strong> Potwierdź, że etykiety boków i kątów na diagramie odpowiadają zamierzonym pomiarom.",
          "<strong>Użyj przycisku Resetuj, gdy zaczynasz nowe obliczenie.</strong> Przycisk Resetuj czyści wszystkie pola, aby kolejne obliczenie zaczynało się od czystego arkusza."
        ],
        "closingParagraphs": [
          "1. <strong>Pole z przyprostokątnych.</strong> Wprowadź \"Leg a\" = 3 i \"Leg b\" = 4. Wzór: [[K=ab/2]]. Podstawienie: [[K=(3\\times4)/2]]. Wynik: 6 jednostek kwadratowych.",
          "2. <strong>Wariant pola (kąt A).</strong> Wprowadź \"Leg b\" = 4, \"Hypotenuse c\" = 5, \"Angle A\" = 36.87. Wzór: [[K=bc\\sin(A)/2]]. Podstawienie: [[K=(4\\times5\\times0.6)/2]]. Wynik: 6 jednostek kwadratowych.",
          "3. <strong>Wariant pola (kąt B).</strong> Wprowadź \"Leg a\" = 3, \"Hypotenuse c\" = 5, \"Angle B\" = 53.13. Wzór: [[K=ac\\sin(B)/2]]. Podstawienie: [[K=(3\\times5\\times0.8)/2]]. Wynik: 6 jednostek kwadratowych.",
          "4. <strong>Pole z półobwodu.</strong> Wprowadź \"Inradius r\" = 1 i \"Semiperimeter s\" = 6. Wzór: [[K=rs]]. Podstawienie: [[K=1\\times6]]. Wynik: 6 jednostek kwadratowych.",
          "5. <strong>Wariant pola (wysokość).</strong> Wprowadź \"Hypotenuse c\" = 5 i \"Altitude h\" = 2.4. Wzór: [[K=ch/2]]. Podstawienie: [[K=(5\\times2.4)/2]]. Wynik: 6 jednostek kwadratowych.",
          "Każdy tryb używa innego zestawu znanych wartości i żaden nie wymaga tych samych pól wejściowych. Wspólna odpowiedź jest sednem: pięć opisów, jeden trójkąt, jedno pole."
        ]
      },
      "sec-applications": {
        "h2": "Zastosowania obliczeń pola trójkąta prostokątnego w życiu codziennym",
        "blocks": [
          { "kind": "p", "text": "Każdy przykład podaje sytuację, znane pomiary, pasujący tryb kalkulatora, dlaczego ten tryb pasuje, wzór, podstawienie krok po kroku, końcową odpowiedź w jednostkach kwadratowych, interpretację prostym językiem, pomysł na weryfikację tam, gdzie jest przydatny, oraz założenia leżące u podstaw modelu trójkąta." },
          { "kind": "h3", "text": "Przykład 1: Obliczanie pola trójkątnego ogrodu" },
          { "kind": "p", "text": "Ogród zawiera trójkątną, prostokątną grządkę o prostopadłych przyprostokątnych 6 m i 8 m. Wybierz Pole z przyprostokątnych, naturalne dopasowanie, gdy obie przyprostokątne zmierzono bezpośrednio: [[K=(6\\times8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Grządka pokrywa 24 metry kwadratowe powierzchni sadzenia. Zakłada się przy tym, że fragment ogrodu jest wiernie odwzorowany przez trójkąt prostokątny o prostych krawędziach." },
          { "kind": "h3", "text": "Przykład 2: Mierzenie trójkątnego panelu ze sklejki" },
          { "kind": "p", "text": "Stolarz wycina trójkątny, prostokątny panel o przyprostokątnych 1.2 m i 0.8 m. Wybierz Pole z przyprostokątnych: [[K=(1.2\\times0.8)/2]], [[K=0.96/2]], [[[\\boxed{K=0.48\\text{ m}^2}]]]. Panel pokrywa nieco mniej niż pół metra kwadratowego, co pomaga oszacować pokrycie materiału. Dodatki na cięcie i odpady materiału nie są wliczone w to pole geometryczne." },
          { "kind": "h3", "text": "Przykład 3: Wyznaczanie pola trójkątnego żagla" },
          { "kind": "p", "text": "Trójkątny fragment żagla ma prostopadłe przyprostokątne 5 m i 12 m. Wybierz Pole z przyprostokątnych: [[K=(5\\times12)/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Wzór daje płaskie pole trójkątnego fragmentu, przydatne do szacowania tkaniny, zanim uwzględni się szwy i krzywiznę." },
          { "kind": "h3", "text": "Przykład 4: Szacowanie pola trójkątnej działki gruntu" },
          { "kind": "p", "text": "Pomiar geodezyjny identyfikuje trójkątny, prostokątny fragment o prostopadłych bokach 30 m i 40 m. Wybierz Pole z przyprostokątnych: [[K=(30\\times40)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]. Jest to pole określonego trójkątnego fragmentu, niekoniecznie całkowite pole otaczającej nieruchomości. Rzeczywiste granice działki mogą wymagać dokładniejszego pomiaru niż jeden model trójkąta." },
          { "kind": "h3", "text": "Przykład 5: Obliczanie pola szczytu dachu z kątem A" },
          { "kind": "p", "text": "Uproszczony trójkątny przekrój dachu ma [[b=6\\text{ m}]], [[c=10\\text{ m}]] oraz [[A\\approx53.13^\\circ]]. Wybierz Wariant pola (kąt A), ponieważ przyprostokątna, przeciwprostokątna i zawarty kąt to zmierzone dane. Przy [[\\sin(53.13^\\circ)\\approx0.8]]: [[K=(6\\times10\\times0.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Wynik to pole trójkątnego przekroju poprzecznego. Całkowita powierzchnia prawdziwego dachu zależy od jego trójwymiarowej geometrii i pozostałych połaci dachu." },
          { "kind": "h3", "text": "Przykład 6: Wyznaczanie pola trójkątnej markizy" },
          { "kind": "p", "text": "Trójkątny, prostokątny fragment markizy ma [[b=4\\text{ m}]], [[c=5\\text{ m}]] oraz [[A\\approx36.87^\\circ]]. Wybierz Wariant pola (kąt A): [[K=bc\\sin(A)/2]], a przy [[\\sin(36.87^\\circ)\\approx0.6]], [[K=(4\\times5\\times0.6)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Zakłada się, że pomiary opisują płaski trójkąt prostokątny, co ma miejsce dla napiętej prostokątnej markizy przeciętej po przekątnej." },
          { "kind": "h3", "text": "Przykład 7: Obliczanie trójkątnego panelu wspornikowego z kątem B" },
          { "kind": "p", "text": "Panel wspornikowy ma [[a=3\\text{ m}]], [[c=5\\text{ m}]] oraz [[B\\approx53.13^\\circ]]. Wybierz Wariant pola (kąt B): [[K=(3\\times5\\times0.8)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Wzór kątowy wyznacza pole bez bezpośredniego wprowadzania obu przyprostokątnych, co pomaga, gdy druga przyprostokątna nigdy nie została zmierzona." },
          { "kind": "h3", "text": "Przykład 8: Wyznaczanie pola sekcji kratownicy" },
          { "kind": "p", "text": "Trójkątna, prostokątna sekcja kratownicy ma [[a=5\\text{ m}]], [[c=13\\text{ m}]] oraz [[B\\approx67.38^\\circ]]. Wybierz Wariant pola (kąt B). Ponieważ [[\\sin(67.38^\\circ)\\approx12/13]]: [[K=(5\\times13\\times(12/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Jest to pole geometryczne trójkątnej sekcji, a nie obliczenie nośności konstrukcji." },
          { "kind": "h3", "text": "Przykład 9: Obliczanie pola z promienia okręgu wpisanego i półobwodu" },
          { "kind": "p", "text": "Rozważ trójkąt prostokątny 3-4-5 o [[r=1]] i [[s=6]]. Wybierz Pole z półobwodu: [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Promień okręgu wpisanego i półobwód dają alternatywną drogę, która nigdy nie mnoży obu przyprostokątnych, a mimo to prowadzi do tej samej odpowiedzi." },
          { "kind": "h3", "text": "Przykład 10: Wyznaczanie pola trójkątnej działki 5-12-13" },
          { "kind": "p", "text": "Trójkątna, prostokątna działka ma boki [[a=5]], [[b=12]], [[c=13]]. Wybierz Pole z półobwodu. Półobwód: [[s=(5+12+13)/2=15]]. Promień okręgu wpisanego: [[r=(5+12-13)/2=2]]. Pole: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Zweryfikuj wzorem z przyprostokątnymi: [[K=(5\\times12)/2=30]]. Obie metody są zgodne, ponieważ obie opisują tę samą działkę." },
          { "kind": "h3", "text": "Przykład 11: Szacowanie pola trójkątnego panelu z wysokości" },
          { "kind": "p", "text": "Trójkątny panel jest odwzorowany przez trójkąt prostokątny, którego przeciwprostokątna mierzy 10 m, a prostopadła wysokość do przeciwprostokątnej wynosi 4.8 m. Wybierz Wariant pola (wysokość): [[K=ch/2]], [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Wysokość musi być prostopadła do przeciwprostokątnej: każda inna linia od wierzchołka do przeciwprostokątnej jest dłuższa i zawyżyłaby pole." },
          { "kind": "h3", "text": "Przykład 12: Obliczanie trójkątnej sekcji z przeciwprostokątnej i wysokości" },
          { "kind": "p", "text": "Trójkątna, prostokątna sekcja ma przeciwprostokątną 20 m i prostopadłą wysokość 9 m. Wybierz Wariant pola (wysokość): [[K=(20\\times9)/2]], [[[\\boxed{K=90\\text{ m}^2}]]]. Jest to pole trójkąta, gdy pomiary opisują ten sam prawidłowy trójkąt prostokątny, co ma tu miejsce: 9 m jest znacznie poniżej długości przeciwprostokątnej, jak musi być dla prostopadłej." },
          { "kind": "h3", "text": "Porównanie przykładów praktycznych" }
        ],
        "table": {
          "headers": ["Sytuacja", "Znane wartości", "Tryb kalkulatora", "Wzór", "Końcowe pole", "Interpretacja"],
          "rows": [
            ["Grządka ogrodowa", "Przyprostokątne 6 m, 8 m", "Pole z przyprostokątnych", "[[K=ab/2]]", "24 m²", "Powierzchnia sadzenia"],
            ["Panel ze sklejki", "Przyprostokątne 1.2 m, 0.8 m", "Pole z przyprostokątnych", "[[K=ab/2]]", "0.48 m²", "Pokrycie materiału"],
            ["Żagiel", "Przyprostokątne 5 m, 12 m", "Pole z przyprostokątnych", "[[K=ab/2]]", "30 m²", "Płaska powierzchnia materiału"],
            ["Działka gruntu", "Przyprostokątne 30 m, 40 m", "Pole z przyprostokątnych", "[[K=ab/2]]", "600 m²", "Działka, nie cała nieruchomość"],
            ["Szczyt dachu", "b 6 m, c 10 m, A 53.13°", "Wariant pola (kąt A)", "[[K=bc\\sin(A)/2]]", "24 m²", "Tylko przekrój poprzeczny"],
            ["Markiza", "b 4 m, c 5 m, A 36.87°", "Wariant pola (kąt A)", "[[K=bc\\sin(A)/2]]", "6 m²", "Płaska powierzchnia tkaniny"],
            ["Panel wspornikowy", "a 3 m, c 5 m, B 53.13°", "Wariant pola (kąt B)", "[[K=ac\\sin(B)/2]]", "6 m²", "Nie potrzeba drugiej przyprostokątnej"],
            ["Sekcja kratownicy", "a 5 m, c 13 m, B 67.38°", "Wariant pola (kąt B)", "[[K=ac\\sin(B)/2]]", "30 m²", "Geometria, nie nośność"],
            ["Trójkąt 3-4-5", "r 1, s 6", "Pole z półobwodu", "[[K=rs]]", "6 jednostek kwadratowych", "Ujęcie okręgu wpisanego na pole"],
            ["Działka 5-12-13", "r 2, s 15", "Pole z półobwodu", "[[K=rs]]", "30 jednostek kwadratowych", "Zgodne z kontrolą przyprostokątnych"],
            ["Panel trójkątny", "c 10 m, h 4.8 m", "Wariant pola (wysokość)", "[[K=ch/2]]", "24 m²", "Wysokość musi być prostopadła"],
            ["Sekcja trójkątna", "c 20 m, h 9 m", "Wariant pola (wysokość)", "[[K=ch/2]]", "90 m²", "Prawidłowy trójkąt prostokątny"]
          ]
        },
        "imgAlt": "Cztery panele: ogród 24 m², szczyt dachu 24 m², kratownica 30 m² i panel 24 m², każdy z własnym trójkątem",
        "figcaption": "Cztery obliczenia z życia codziennego: ogród, szczyt dachu, kratownica i panel, każdy z własnym trójkątem i końcowym polem."
      },
      "sec-verify": {
        "h2": "Jak zweryfikować pole trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Jeden trójkąt 3-4-5, pięć metod, jedna odpowiedź. Dane: [[a=3]], [[b=4]], [[c=5]], przy czym [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] oraz [[h=ab/c=12/5=2.4]]:" },
          { "kind": "p", "text": "<strong>Metoda 1, przyprostokątne:</strong> [[K=(3\\times4)/2=6]]. <strong>Metoda 2, kąt A:</strong> [[K=(4\\times5\\times0.6)/2=6]]. <strong>Metoda 3, kąt B:</strong> [[K=(3\\times5\\times0.8)/2=6]]. <strong>Metoda 4, promień okręgu wpisanego i półobwód:</strong> [[K=1\\times6=6]]. <strong>Metoda 5, przeciwprostokątna i wysokość:</strong> [[K=(5\\times2.4)/2=6]]." },
          { "kind": "p", "text": "To pięć matematycznych dróg do tej samej wielkości geometrycznej. Pole trójkąta nie zależy od tego, który poprawny wzór zostanie użyty; zależy od rzeczywistej geometrii trójkąta. Gdy dwie niezależne metody zgadzają się w Twoim trójkącie, możesz zaufać liczbie." }
        ],
        "imgAlt": "Trójkąt 3-4-5 z pięcioma panelami: przyprostokątne, kąt A, kąt B, promień wpisany-półobwód, wysokość, wszystkie dają pole 6",
        "figcaption": "Różne dane, różne wzory, to samo pole trójkąta."
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy obliczaniu pola trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Błędy w polu rzadko są porażkami arytmetycznymi. To porażki etykietowania, pomyłki wzorów i potknięcia jednostek. Osiemnaście poniższych obejmuje niemal każdą błędną odpowiedź, jaką może wyprodukować kalkulator na tej stronie." },
          { "kind": "h3", "text": "1. Zapomnienie o podzieleniu przez dwa" },
          { "kind": "p", "text": "Mnożenie przyprostokątnych bez dzielenia na pół daje pole prostokąta, a nie trójkąta. Dla przyprostokątnych 3 i 4 [[3\\times4=12]] jest błędne; [[(3\\times4)/2=6]] jest poprawne. Poprawka: każde obliczenie z przyprostokątnymi lub podstawa-wysokość kończ dzieleniem przez dwa." },
          { "kind": "h3", "text": "2. Użycie przeciwprostokątnej jako jednej z prostopadłych przyprostokątnych" },
          { "kind": "p", "text": "Przeciwprostokątna nigdy nie jest przyprostokątną. Wprowadzenie c = 5 jako przyprostokątnej wraz z drugą przyprostokątną 3 daje [[(5\\times3)/2=7.5]] zamiast 6. Poprawka: najpierw zidentyfikuj najdłuższy bok i zarezerwuj go dla pola przeciwprostokątnej." },
          { "kind": "h3", "text": "3. Sparowanie kąta A z niewłaściwym bokiem" },
          { "kind": "p", "text": "Wzór dla kąta A potrzebuje boku [[b]], boku zawierającego kąt [[A]] wraz z przeciwprostokątną. Wprowadzenie boku [[a]] zamiast niego oblicza błędny iloczyn. Poprawka: przed wprowadzeniem wartości sprawdź, czy kąt [[A]] leży między bokami [[b]] i [[c]]." },
          { "kind": "h3", "text": "4. Sparowanie kąta B z niewłaściwym bokiem" },
          { "kind": "p", "text": "Lustrzany obraz: wzór dla kąta B potrzebuje boku [[a]], a nie boku [[b]]. Poprawka: potwierdź, że kąt [[B]] leży między bokami [[a]] i [[c]]." },
          { "kind": "h3", "text": "5. Użycie niewłaściwego kąta zawartego we wzorze z sinusem" },
          { "kind": "p", "text": "Wprowadzenie 36.87 stopnia tam, gdzie należy 53.13 stopnia, lub odwrotnie, daje wiarygodne, ale błędne pole. Poprawka: dopasuj kąt do pary boków: kąt A idzie z [[b]] i [[c]], kąt B z [[a]] i [[c]]." },
          { "kind": "h3", "text": "6. Mylenie wysokości z przyprostokątną" },
          { "kind": "p", "text": "Wysokość [[h]] opada z wierzchołka kąta prostego na przeciwprostokątną; przyprostokątna biegnie wzdłuż krawędzi trójkąta. Wprowadzenie przyprostokątnej jako wysokości zawyża wysokość. Poprawka: wysokość musi lądować na przeciwprostokątnej ze znacznikiem kąta prostego." },
          { "kind": "h3", "text": "7. Użycie linii nieprostopadłej jako wysokości" },
          { "kind": "p", "text": "Każda nieprostopadła linia od wierzchołka do przeciwprostokątnej jest dłuższa niż prawdziwa wysokość, więc pole wychodzi za duże. Poprawka: przed użyciem trybu wysokości zweryfikuj prostopadłość, konstrukcyjnie lub kontrolą [[h=ab/c]]." },
          { "kind": "h3", "text": "8. Mylenie promienia okręgu wpisanego z promieniem okręgu opisanego" },
          { "kind": "p", "text": "Promień okręgu wpisanego dotyka boków od wewnątrz; promień okręgu opisanego sięga wierzchołków od zewnątrz. W trójkącie prostokątnym promień okręgu opisanego wynosi [[c/2]], zawsze więcej niż promień okręgu wpisanego. Wprowadzenie promienia okręgu opisanego do wzoru [[K=rs]] zawyża pole. Poprawka: użyj [[r=(a+b-c)/2]] dla promienia okręgu wpisanego w trójkąt prostokątny." },
          { "kind": "h3", "text": "9. Użycie pełnego obwodu zamiast półobwodu" },
          { "kind": "p", "text": "Wzór to [[K=rs]], gdzie [[s]] to półobwód. Wprowadzenie pełnego obwodu 12 zamiast 6 w trójkącie 3-4-5 daje 12 zamiast 6. Poprawka: przed pomnożeniem przez [[r]] podziel obwód na pół." },
          { "kind": "h3", "text": "10. Mieszanie niezgodnych jednostek pomiaru" },
          { "kind": "p", "text": "Przyprostokątne 3 metry i 40 centymetrów to nie 3 i 40 w jednym wzorze. Poprawka: przed obliczeniem przelicz każde wejście na jedną jednostkę, na przykład 3 m i 0.4 m." },
          { "kind": "h3", "text": "11. Podawanie metrów kwadratowych jako metrów" },
          { "kind": "p", "text": "Pole 6 m² to nie 6 m. Jednostka kwadratowa jest częścią znaczenia odpowiedzi: mówi, ile powierzchni, a nie ile długości. Poprawka: zawsze zapisuj jednostkę kwadratową wraz z liczbą." },
          { "kind": "h3", "text": "12. Zaokrąglanie wartości sinusa zbyt wcześnie" },
          { "kind": "p", "text": "Użycie 0.6 dla sinusa, gdy prawdziwa wartość to 0.6000, jest nieszkodliwe, ale zaokrąglenie 0.9231 do 0.9 w trakcie obliczeń przesuwa wynik. Poprawka: zachowaj pełną precyzję przez każdy krok i zaokrąglaj tylko końcową odpowiedź." },
          { "kind": "h3", "text": "13. Wprowadzanie kąta prostego lub nieprawidłowego kąta do pola kąta ostrego" },
          { "kind": "p", "text": "Tryby kątowe oczekują kąta ostrego między 0 a 90 stopni. Wprowadzenie 90 stopni lub wartości ujemnej nie opisuje żadnego prawidłowego wejścia dla tych trybów. Poprawka: wprowadź kąt ostry, który trójkąt faktycznie ma, w stopniach." },
          { "kind": "h3", "text": "14. Zakładanie, że wszystkie pięć trybów wymaga tych samych pomiarów" },
          { "kind": "p", "text": "Każdy tryb pyta o inny zestaw danych: tryb przyprostokątnych potrzebuje dwóch przyprostokątnych, tryb kąta A potrzebuje przyprostokątnej, przeciwprostokątnej i kąta, a tryb półobwodu potrzebuje promienia okręgu wpisanego i półobwodu. Poprawka: przeczytaj etykiety pól wybranego trybu." },
          { "kind": "h3", "text": "15. Zakładanie, że większy obwód zawsze oznacza proporcjonalnie większe pole" },
          { "kind": "p", "text": "Obwód i pole skalują się inaczej: podwojenie wszystkich boków poczwórnia pole. Trójkąt o większym obwodzie może mieć nawet mniejsze pole, jeśli jest długi i cienki. Poprawka: porównuj pola wzorami na pole, nigdy obwodami." },
          { "kind": "h3", "text": "16. Zapominanie, że to samo pole można obliczyć na wiele sposobów" },
          { "kind": "p", "text": "Traktowanie każdej metody jako osobnego faktu mija się z wbudowaną weryfikacją: jeśli dwie metody się nie zgadzają, coś jest nie tak z danymi wejściowymi lub wyborem trybu. Poprawka: uruchom drugą metodę i zbadaj każdą niezgodność." },
          { "kind": "h3", "text": "17. Wprowadzanie długości boków, które nie mogą opisywać zamierzonego trójkąta" },
          { "kind": "p", "text": "Boki, które nie przechodzą kontroli Pitagorasa, takie jak 2, 3 i 10, nie opisują żadnego trójkąta prostokątnego. Poprawka: przed zaufaniem jakiemukolwiek polu zbudowanemu z tych boków zweryfikuj [[a^2+b^2=c^2]]." },
          { "kind": "h3", "text": "18. Używanie skrótu na promień okręgu wpisanego w trójkącie prostokątnym dla trójkąta nieprostokątnego" },
          { "kind": "p", "text": "Wzór [[r=(a+b-c)/2]] wyprowadzono z geometrii 90 stopni. Zastosowanie go do trójkąta ostrokątnego lub rozwartokątnego daje bezsensowny promień okręgu wpisanego. Poprawka: używaj tego skrótu tylko wtedy, gdy potwierdzono, że trójkąt jest prostokątny." },
          { "kind": "h3", "text": "Błędnie a poprawnie: konkretny przykład" },
          { "kind": "p", "text": "Dane: [[a=3]] i [[b=4]]; błędne obliczenie pomija dzielenie na pół: [[K=3\\times4=12]]. To pole odpowiadającego prostokąta 3 na 4, a nie trójkąta prostokątnego. Poprawne obliczenie to [[K=(3\\times4)/2=6]]. Trójkąt zajmuje połowę prostokąta, więc dzielenie przez dwa jest tym, co zamienia odpowiedź prostokąta w odpowiedź trójkąta." }
        ]
      },
      "sec-validate": {
        "h2": "Jak sprawdzić, czy wynik pola jest prawidłowy",
        "blocks": [
          { "kind": "p", "text": "Sześć kontroli wychwytuje zdecydowaną większość nieprawidłowych wyników, zanim opuszczą stronę." },
          { "kind": "h3", "text": "Kontrola 1: Dodatnie pomiary" },
          { "kind": "p", "text": "Wszystkie wymagane długości muszą być dodatnie: [[a>0]], [[b>0]], [[c>0]]. Dla trybu promienia okręgu wpisanego [[r>0]] i [[s>0]], a wysokość też musi być dodatnia. Zerowe lub ujemne dane wejściowe nie opisują żadnego trójkąta." },
          { "kind": "h3", "text": "Kontrola 2: Prawidłowe długości boków trójkąta" },
          { "kind": "p", "text": "Dla trójkąta prostokątnego musi zachodzić [[a^2+b^2=c^2]], a przeciwprostokątna musi być dłuższa niż każda przyprostokątna. Jeśli boki nie przechodzą tej kontroli, dane wejściowe są niespójne, a pole jest bezsensowne." },
          { "kind": "h3", "text": "Kontrola 3: Poprawne sparowanie kąta z bokami" },
          { "kind": "p", "text": "Kąt [[A]] paruje się z bokami [[b]] i [[c]] we wzorze z kątem zawartym; kąt [[B]] paruje się z bokami [[a]] i [[c]]. Potwierdź sparowanie, zanim zaakceptujesz wynik kątowy." },
          { "kind": "h3", "text": "Kontrola 4: Poprawna wysokość" },
          { "kind": "p", "text": "Wysokość [[h]] musi być prostopadła do przeciwprostokątnej [[c]]. Szybki test zdrowego rozsądku: wysokość jest zawsze krótsza niż przeciwprostokątna i krótsza niż każda przyprostokątna." },
          { "kind": "h3", "text": "Kontrola 5: Poprawne jednostki pola" },
          { "kind": "p", "text": "Jeśli długości wejściowe są w metrach, pole musi być w metrach kwadratowych; centymetry dają centymetry kwadratowe. Jednostka odpowiedzi jest kwadratem jednostki wejściowej, nigdy samą jednostką wejściową." },
          { "kind": "h3", "text": "Kontrola 6: Kontrola krzyżowa inną metodą" },
          { "kind": "p", "text": "Użyj trójkąta 3-4-5, aby porównać wzór z przyprostokątnymi ze wzorem z półobwodem: [[(3\\times4)/2=6]] i [[1\\times6=6]]. Oba muszą dać 6 jednostek kwadratowych. Małe rozbieżności w obliczeniach kątowych mogą pochodzić z zaokrąglonych pomiarów kątów lub zaokrąglonych wartości trygonometrycznych; większe sygnalizują prawdziwy błąd. Ten przewodnik nie podaje żadnej tolerancji precyzji ani gwarancji dokładności kalkulatora: ta kontrola dotyczy spójności, a nie obiecanej precyzji." }
        ]
      },
      "sec-conclusion": {
        "h2": "Jeden trójkąt, pięć metod, jedno pole",
        "blocks": [
          { "kind": "p", "text": "Każda metoda na tej stronie odpowiada na to samo pytanie z innego punktu startowego. Przyprostokątne, gdy masz oba prostopadłe boki; sinus, gdy masz zawarty kąt; promień okręgu wpisanego i półobwód, gdy w grę wchodzi okrąg wpisany; wysokość, gdy znane są przeciwprostokątna i jej wysokość. Dopasuj tryb do swoich pomiarów, wprowadź je we właściwe pola w zgodnych jednostkach i pozwól kalkulatorowi wykonać arytmetykę. Następnie zweryfikuj drugą metodą: dwie drogi do tej samej liczby to najpewniejszy znak, że geometria jest poprawna." }
        ]
      }
    },
    "faqs": [
      { "question": "Jaki jest wzór na pole trójkąta prostokątnego?", "answer": "Standardowy wzór to K = ab/2, gdzie a i b to dwie prostopadłe przyprostokątne. Cztery równoważne metody obejmują inne znane pomiary: K = bc sin(A)/2, K = ac sin(B)/2, K = rs (promień okręgu wpisanego razy półobwód) oraz K = ch/2 (przeciwprostokątna razy wysokość, podzielone przez dwa)." },
      { "question": "Dlaczego przy obliczaniu pola trójkąta dzieli się przez dwa?", "answer": "Dwa identyczne trójkąty prostokątne łączą się wzdłuż przeciwprostokątnych, tworząc prostokąt o polu ab. Jeden trójkąt to dokładnie połowa tego prostokąta, więc pole wynosi ab/2. Dzielenie przez dwa jest geometryczne, nie arbitralne, i pojawia się w każdej metodzie obliczania pola na tej stronie." },
      { "question": "Czy mogę obliczyć pole, nie znając przeciwprostokątnej?", "answer": "Tak. Wzór z przyprostokątnymi K = ab/2 nie potrzebuje przeciwprostokątnej, podobnie jak wzór z promieniem okręgu wpisanego i półobwodem K = rs. Przeciwprostokątna jest wymagana tylko w trybach kątowych i trybie wysokości." },
      { "question": "Jak wyznaczyć pole, znając jeden bok i kąt?", "answer": "Użyj postaci z kątem zawartym. Dla przyprostokątnej b, przeciwprostokątnej c i kąta A pole wynosi K = bc sin(A)/2. Dla przyprostokątnej a, przeciwprostokątnej c i kąta B wynosi K = ac sin(B)/2. Wprowadź kąt w stopniach i upewnij się, że jest to kąt ostry między dwoma znanymi bokami." },
      { "question": "Dlaczego wzór kątowy używa sinusa?", "answer": "Ogólny wzór na dwa boki i zawarty między nimi kąt to K = 1/2 xy sin(theta). Sinus wyodrębnia składową prostopadłą jednego boku względem drugiego, czyli efektywną wysokość. Dla kąta A zawartego między bokami b i c daje to K = bc sin(A)/2." },
      { "question": "Co to jest promień okręgu wpisanego w trójkąt prostokątny?", "answer": "Promień okręgu wpisanego to promień koła wpisanego w trójkąt, stykającego się ze wszystkimi trzema bokami. Dla trójkąta prostokątnego można go obliczyć jako r = (a + b - c)/2. To nie jest promień okręgu opisanego, który sięga wierzchołków i w trójkącie prostokątnym wynosi c/2." },
      { "question": "Jaka jest różnica między obwodem a półobwodem?", "answer": "Obwód to całkowita długość granicy, a + b + c. Półobwód to jej połowa, s = (a + b + c)/2. Wzór na pole K = rs używa półobwodu; użycie pełnego obwodu podwoiłoby odpowiedź." },
      { "question": "Jak obliczyć pole z przeciwprostokątnej i wysokości?", "answer": "Użyj K = ch/2, gdzie c to przeciwprostokątna, a h to wysokość prostopadła z wierzchołka kąta prostego do przeciwprostokątnej. Wysokość musi spotykać przeciwprostokątną pod kątem 90 stopni; nie jest jedną z przyprostokątnych. Jeśli znane są tylko przyprostokątne, najpierw wyznacz wysokość ze wzoru h = ab/c." },
      { "question": "Dlaczego wszystkie pięć metod pola daje ten sam wynik?", "answer": "Ponieważ są różnymi algebraicznymi opisami tej samej wielkości geometrycznej. Wzór z przyprostokątnymi, postaci z sinusem, iloczyn promienia okręgu wpisanego i półobwodu oraz postać z przeciwprostokątną i wysokością są dowodliwie równe dla spójnego trójkąta prostokątnego. Zgodność dwóch metod to najlepsza weryfikacja poprawności danych wejściowych i trybu." },
      { "question": "Jakich jednostek używać dla pola?", "answer": "Jednostek kwadratowych pasujących do długości wejściowych: metry dają metry kwadratowe, centymetry dają centymetry kwadratowe. Przed obliczeniem przelicz wszystkie dane wejściowe na jedną jednostkę i podawaj wynik z jednostką kwadratową, nigdy z jednostką liniową." },
      { "question": "Czy mogę obliczyć pole, znając tylko przeciwprostokątną?", "answer": "Nie. Sama przeciwprostokątna nie wyznacza jednoznacznie trójkąta prostokątnego, więc pole nie jest ustalone. Potrzebujesz co najmniej jednego dodatkowego niezależnego pomiaru: przyprostokątnej, kąta ostrego, wysokości albo promienia okręgu wpisanego wraz z półobwodem." },
      { "question": "Jak mogę sprawdzić, czy moje obliczenie pola jest poprawne?", "answer": "Uruchom drugą metodę na tym samym trójkącie i porównaj. Dla trójkąta 3-4-5 wzór z przyprostokątnymi daje (3 x 4)/2 = 6, a metoda z półobwodem daje 1 x 6 = 6. Zweryfikuj też, czy boki spełniają twierdzenie Pitagorasa, potwierdź sparowanie kąta z bokami i sprawdź, czy wysokość jest prostopadła do przeciwprostokątnej." }
    ],
    "faqHeading": "Częste pytania",
    "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator pola trójkąta prostokątnego z przyprostokątnych",
      "Kalkulator pola trójkąta prostokątnego z kąta",
      "Kalkulator pola trójkąta prostokątnego z półobwodu",
      "Kalkulator pola trójkąta prostokątnego z wysokości",
      "Kalkulator obwodu i półobwodu trójkąta prostokątnego",
      "Kalkulator promienia okręgu wpisanego i opisanego trójkąta prostokątnego",
      "Kalkulator boków trójkąta prostokątnego"
    ]
  }
};
