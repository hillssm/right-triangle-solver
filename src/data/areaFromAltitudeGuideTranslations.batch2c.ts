// areaFromAltitudeGuideTranslations.batch2c.ts - Area From Altitude Guide (Page 17) translations for ms and pl.
// Schema: AREA_FROM_ALTITUDE_TRANSLATION_SCHEMA.md. KaTeX math kept byte-identical to EN; only prose translated.
export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2C = {
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Mengira Luas Segi Tiga Bersudut Tepat dari Altitud",
      "sec-understand": "Memahami Hipotenus dan Altitud",
      "sec-formula": "Formula Luas Segi Tiga Bersudut Tepat dari Altitud",
      "sec-steps": "Contoh Pengiraan Langkah Demi Langkah",
      "sec-howto": "Cara Menggunakan Kalkulator Luas dari Altitud",
      "sec-examples": "Contoh Terperinci: Hipotenus dan Altitud",
      "sec-applications": "Aplikasi Kehidupan Sebenar",
      "sec-equal": "Mengapakah Kedua-dua Formula Luas Sepadan",
      "sec-geomean": "Bagaimana Altitud Membahagi Segi Tiga Bersudut Tepat",
      "sec-max": "Altitud Maksimum yang Mungkin",
      "sec-find-altitude": "Mencari Altitud Apabila Tidak Diketahui",
      "sec-units": "Unit Persegi dan Penukaran",
      "sec-mistakes": "Kesilapan Lazim",
      "sec-verify": "Cara Mengesahkan Jawapan Anda",
      "sec-compare": "Luas dari Altitud berbanding Luas dari Dua Kaki",
      "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
      "sec-faq": "Soalan Lazim",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Mengira Luas Segi Tiga Bersudut Tepat dari Altitud",
        "blocks": [
          { "kind": "p", "text": "Andaikan sebuah segi tiga bersudut tepat mempunyai hipotenus 10 m, dan jarak berserenjang dari bucu sudut tepat ke hipotenus itu berukuran 4.8 m. Luasnya mengikut secara langsung: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Segi tiga itu menempati 24 meter persegi permukaan rata." },
          { "kind": "p", "text": "Kalkulator ini wujud untuk situasi seperti itu. Apabila anda mengetahui sisi terpanjang segi tiga bersudut tepat, iaitu hipotenus [[c]], dan altitud berserenjang dari bucu sudut tepat ke sisi itu, iaitu [[h]], kedua-dua kaki tidak diperlukan. Hipotenus menjadi tapak, altitud ialah tinggi berserenjang yang sepadan, dan luas setiap segi tiga ialah separuh hasil darab tapak dengan tingginya yang sepadan: [[K=ch/2]]." },
          { "kind": "p", "text": "Altitud mesti bertemu hipotenus pada sudut tepat; segmen condong yang tidak berserenjang memberi tinggi yang salah dan luas yang salah. Masukkan kedua-dua ukuran dalam unit panjang yang sepadan, dan kalkulator mengembalikan luas dalam unit persegi yang sepadan, dengan setiap langkah penggantian ditunjukkan." }
        ]
      },
      "sec-understand": {
        "h2": "Memahami Hipotenus dan Altitud Segi Tiga Bersudut Tepat",
        "blocks": [
          { "kind": "p", "text": "Panduan ini menggunakan satu tatatanda yang konsisten: [[A]] dan [[B]] ialah dua sudut tirus, [[C=90^\\circ]] ialah sudut tepat, sisi [[a]] terletak bertentangan dengan sudut [[A]], sisi [[b]] terletak bertentangan dengan sudut [[B]], sisi [[c]] ialah hipotenus yang bertentangan dengan sudut [[C]], [[h]] ialah altitud berserenjang dari bucu [[C]] ke hipotenus yang bertemu di titik [[D]], [[p]] dan [[q]] ialah segmen hipotenus [[AD]] dan [[DB]], dan [[K]] ialah luas." },
          { "kind": "h3", "text": "Apakah Segi Tiga Bersudut Tepat?" },
          { "kind": "p", "text": "Segi tiga bersudut tepat mengandungi tepat satu sudut 90 darjah. Kedua-dua kakinya bertemu pada sudut tepat, dan hipotenus terletak bertentangan dengannya. Hipotenus sentiasa merupakan sisi terpanjang. Dua sudut yang lain ialah sudut tirus, dan kerana jumlah ketiga-tiga sudut ialah 180 darjah, [[A+B=90^\\circ]]. Fakta-fakta ini penting kerana kaedah altitud bersandar padanya: tapak mestilah hipotenus, dan tinggi mesti jatuh dari bucu sudut tepat." },
          { "kind": "h3", "text": "Apakah Hipotenus?" },
          { "kind": "p", "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tepat, dilabel [[c]] dalam kalkulator. Untuk mengenalinya dalam sebarang orientasi, cari sisi yang tidak menyentuh penanda bucu persegi: sisi itu ialah hipotenus. Dalam formula altitud ia memainkan peranan sebagai tapak, jadi mengenalinya dengan betul ialah kemahiran pertama yang diajar oleh halaman ini." },
          { "kind": "h3", "text": "Apakah Altitud?" },
          { "kind": "p", "text": "Altitud ialah segmen berserenjang dari bucu segi tiga ke garis yang mengandungi sisi bertentangan. Di sini altitud [[h]] bergerak dari bucu sudut tepat [[C]] ke hipotenus [[AB]] dan bertemu di titik [[D]], jadi [[CD\\perp AB]]. Ia ialah jarak berserenjang, bukan sekadar sebarang garis yang dilukis di dalam segi tiga: hanya segmen yang bertemu hipotenus pada 90 darjah yang layak." },
          { "kind": "h3", "text": "Adakah Altitud Sama dengan Kaki?" },
          { "kind": "p", "text": "Tidak. Kaki [[a]] dan [[b]] bertemu pada sudut tepat asal, manakala altitud ialah segmen berasingan dari bucu yang sama ke sisi bertentangan. Ambil segi tiga 6-8-10: [[a=6]], [[b=8]], [[c=10]]. Altitudnya ialah [[h=(6\\times8)/10=4.8]]. Tiada kaki berukuran 4.8, namun altitud ke hipotenus tepat 4.8. Mengelirukan kaki dengan altitud ialah salah satu kesilapan paling lazim di halaman ini." },
          { "kind": "h3", "text": "Mengapakah Altitud Jatuh di Dalam Segi Tiga" },
          { "kind": "p", "text": "Untuk segi tiga bersudut tepat yang tidak degenerat, garis berserenjang dari bucu sudut tepat mendarat pada hipotenus di antara hujungnya, tidak pernah di luar. Ia membelah segi tiga asal kepada dua segi tiga bersudut tepat yang lebih kecil. Kedua-dua segi tiga itu berkongsi ukuran sudut tirus segi tiga asal, yang menjadikan ketiga-tiga segi tiga serupa antara satu sama lain. Keserupaan itulah sebabnya altitud memenuhi hubungan yang begitu kemas, yang dibincangkan dalam bahagian min geometri di bawah." }
        ],
        "imgAlt": "Segi tiga bersudut tepat ABC: kaki a dan b, hipotenus c, altitud h dari bucu C ke titik D, formula K = ch/2",
        "figcaption": "Anatomi kaedah altitud: hipotenus c ialah tapak, altitud h bertemu padanya pada 90 darjah di titik D, dan luasnya ialah K = ch/2."
      },
      "sec-formula": {
        "h2": "Formula Luas Segi Tiga Bersudut Tepat dari Altitud",
        "blocks": [
          { "kind": "p", "text": "Formula luas altitud ialah [[[\\boxed{K=\\frac{ch}{2}}]]]. Di sini [[K]] ialah luas, [[c]] ialah hipotenus yang menjadi tapak, dan [[h]] ialah altitud berserenjang ke hipotenus. Tiga simbol, satu pendaraban, satu pembahagian dua." },
          { "kind": "h3", "text": "Mengapakah Kita Mendarabkan Hipotenus dengan Altitud?" },
          { "kind": "p", "text": "Formula luas segi tiga yang umum ialah [[K=\\frac{\\text{base}\\times\\text{height}}{2}]], dan tapak serta tinggi mestilah berserenjang antara satu sama lain. Memilih hipotenus sebagai tapak memaksa tinggi menjadi jarak berserenjang kepadanya, iaitu tepat altitud: [[\\text{base}=c]] dan [[\\text{height}=h]], oleh itu [[K=ch/2]]. Ini berlaku walau bagaimana segi tiga diputar atau dilukis: keserenjangan ialah hubungan geometri, bukan arah skrin, jadi hipotenus condong berfungsi sebagai tapak sama baiknya dengan yang mendatar." },
          { "kind": "h3", "text": "Mengapakah Hasil Dibahagi dengan Dua?" },
          { "kind": "p", "text": "Segi tiga menempati separuh daripada segi empat selari yang dibina pada tapak yang sama dengan tinggi berserenjang yang sama. Dengan [[c=10]] dan [[h=4.8]], hasil darab [[c\\times h=48]] ialah luas segi empat selari itu. Segi tiga ialah separuh daripadanya, jadi [[K=48/2=24]]. Melaporkan 48 akan menjawab soalan yang berbeza: luas segi empat selari penuh, bukan segi tiga di dalamnya." },
          { "kind": "h3", "text": "Adakah Formula Ini Berfungsi untuk Setiap Segi Tiga?" },
          { "kind": "p", "text": "Peraturan tapak-tinggi berfungsi untuk setiap segi tiga, dengan syarat tingginya berserenjang dengan tapak yang dipilih. Yang istimewa di sini ialah pilihan tapak: hipotenus segi tiga bersudut tepat, dengan altitud yang dijatuhkan dari bucu sudut tepat. Pilihan itu membawa kekangan geometri tambahan, seperti altitud tidak boleh melebihi separuh hipotenus, yang tidak terpakai pada segi tiga umum." },
          { "kind": "h3", "text": "Mengapakah Formula Tidak Memerlukan Kedua-dua Kaki" },
          { "kind": "p", "text": "Luas memerlukan satu sisi dan tinggi berserenjang yang sepadan, tidak lebih. Apabila [[c]] dan [[h]] sudah diketahui, kaki tidak menambah maklumat baharu tentang luas. Formula kaki [[K=ab/2]] hanyalah laluan input yang berbeza kepada kuantiti yang sama, berguna apabila data yang diukur ialah dua sisi berserenjang." }
        ],
        "imgAlt": "Mengapa luas segi tiga ialah separuh tapak darab tinggi: c = 10, h = 4.8, 10 x 4.8 = 48, dibahagi 2 memberi 24 unit persegi",
        "figcaption": "Hasil darab c darab h ialah segi empat tepat penuh; segi tiga mengisi tepat separuh daripadanya, itulah sebabnya formula membahagi dengan dua."
      },
      "sec-steps": {
        "h2": "Contoh Langkah Demi Langkah Mengira Luas dari Altitud",
        "blocks": [
          { "kind": "p", "text": "Satu pengiraan lengkap, dari ukuran kepada jawapan yang disahkan, menggunakan [[c=10\\text{ m}]] dan [[h=4.8\\text{ m}]]." }
        ],
        "steps": [
          "<strong>Kenal pasti ukuran yang diberi.</strong> Hipotenus ialah [[c=10\\text{ m}]] dan altitud berserenjang kepadanya ialah [[h=4.8\\text{ m}]]. Sahkan bahawa altitud bertemu hipotenus pada sudut tepat.",
          "<strong>Tulis formula.</strong> [[K=ch/2]].",
          "<strong>Gantikan ukuran.</strong> [[K=(10\\times4.8)/2]].",
          "<strong>Darabkan.</strong> [[10\\times4.8=48]], jadi [[K=48/2]].",
          "<strong>Bahagikan dengan dua.</strong> [[[\\boxed{K=24\\text{ m}^2}]]].",
          "<strong>Tafsirkan jawapan.</strong> Segi tiga itu menempati 24 meter persegi luas rata.",
          "<strong>Semak kebolehlaksanaan.</strong> Segi tiga bersudut tepat yang sah memerlukan [[h\\leq c/2]]; di sini [[4.8\\leq5]], jadi ukuran itu boleh menggambarkan segi tiga bersudut tepat yang sebenar.",
          "<strong>Sahkan menggunakan kaki.</strong> Segi tiga 6-8-10 mempunyai hipotenus dan altitud yang sama, dan [[K=(6\\times8)/2=24]]. Kedua-dua laluan sepadan."
        ]
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segi Tiga Bersudut Tepat dari Altitud",
        "blocks": [
          { "kind": "p", "text": "Kalkulator di halaman ini memerlukan tepat dua input. Panduan di bawah mengikut susunan pada skrin, supaya pengguna kali pertama boleh pergi dari segi tiga yang dilukis atau diukur kepada luas yang disahkan." }
        ],
        "steps": [
          "<strong>Kenal pasti segi tiga bersudut tepat.</strong> Sahkan bahawa satu sudut ialah 90 darjah; kaedah ini hanya terpakai pada segi tiga bersudut tepat.",
          "<strong>Carikan hipotenus [[c]].</strong> Ia ialah sisi yang bertentangan dengan sudut tepat dan sisi terpanjang.",
          "<strong>Kenal pasti altitud berserenjang [[h]].</strong> Ia bergerak dari bucu sudut tepat ke hipotenus dan bertemu padanya pada 90 darjah.",
          "<strong>Ukur atau peroleh kedua-dua nilai.</strong> Ukur secara langsung, atau kirakan altitud terlebih dahulu dengan [[h=ab/c]] apabila kaki diketahui.",
          "<strong>Masukkan hipotenus ke dalam medan Hipotenus c.</strong>",
          "<strong>Masukkan altitud ke dalam medan Altitud h.</strong>",
          "<strong>Pilih unit panjang yang serasi.</strong> Kedua-dua input mesti menggunakan unit yang sama sebelum formula digunakan.",
          "<strong>Sahkan bahawa kedua-dua nilai positif.</strong> Panjang sifar atau negatif tidak menggambarkan sebarang segi tiga.",
          "<strong>Semak bahawa [[h]] tidak melebihi separuh hipotenus.</strong> Untuk [[c=10]], sebarang altitud melebihi 5 tidak boleh dimiliki oleh segi tiga bersudut tepat dengan hipotenus itu.",
          "<strong>Klik Kira Luas.</strong>",
          "<strong>Semak hasil luas.</strong> Ia muncul dalam unit persegi yang sepadan dengan unit input.",
          "<strong>Baca langkah penyelesaian yang dipaparkan.</strong> Ia menunjukkan formula, penggantian, dan aritmetik.",
          "<strong>Periksa visualisasi langsung.</strong> Sahkan bahawa hipotenus dan altitud rajah sepadan dengan ukuran yang dimaksudkan.",
          "<strong>Gunakan Tetapkan Semula untuk pengiraan baharu.</strong> Ia mengosongkan kedua-dua medan supaya pengiraan seterusnya bermula dengan bersih."
        ],
        "closingParagraphs": [
          "Kalkulator tidak meminta kedua-dua kaki atau sudut, kerana kaedah altitud memang tidak memerlukannya."
        ]
      },
      "sec-examples": {
        "h2": "Contoh Terperinci Luas Segi Tiga Bersudut Tepat dari Hipotenus dan Altitud",
        "blocks": [
          { "kind": "p", "text": "Empat contoh terperinci membina kaedah dari segi tiga yang biasa ke atas. Setiap satu mengira altitud dari kaki di mana perlu, menggunakan [[K=ch/2]], dan menyemak silang dengan formula kaki." },
          { "kind": "h3", "text": "Contoh 1: Segi Tiga Bersudut Tepat 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]], [[c=5]]. Altitud ialah [[h=ab/c]], jadi [[h=(3\\times4)/5=2.4]]. Luasnya ialah [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ square units}}]]]. Menyemak dengan kaki, [[K=(3\\times4)/2=6]]. Kedua-dua formula menggambarkan segi tiga yang sama, jadi ia mesti sepadan, dan ia memang sepadan." },
          { "kind": "h3", "text": "Contoh 2: Segi Tiga Bersudut Tepat 5-12-13" },
          { "kind": "p", "text": "Diberi [[a=5]], [[b=12]], [[c=13]]. Altitud ialah [[h=(5\\times12)/13=60/13\\approx4.61538]]. Mengekalkan pecahan tepat, [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ square units}}]]]. Mengekalkan [[60/13]] bukannya perpuluhan yang dibundarkan mengelakkan ralat pembundaran awal: 13 terhapus tepat, meninggalkan 30 yang bersih." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga Bersudut Tepat 6-8-10" },
          { "kind": "p", "text": "Diberi [[c=10]] dan [[h=4.8]] secara langsung. Maka [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]. Dengan kaki 6 dan 8, [[K=(6\\times8)/2=24]], yang mengesahkan laluan altitud." },
          { "kind": "h3", "text": "Contoh 4: Segi Tiga Bersudut Tepat Sama Kaki" },
          { "kind": "p", "text": "Diberi [[c=10]] dan [[h=5]]. Maka [[K=(10\\times5)/2]], [[[\\boxed{K=25\\text{ square units}}]]]. Ini ialah luas terbesar yang boleh dimiliki oleh sebarang segi tiga bersudut tepat dengan hipotenus 10. Altitud sama dengan separuh hipotenus hanya apabila kaki adalah sama, menjadikan setiap sudut tirus [[45^\\circ]], dan tiada segi tiga bersudut tepat yang sah dengan hipotenus ini boleh melebihi 25 unit persegi." }
        ]
      },
      "sec-applications": {
        "h2": "Aplikasi Kehidupan Sebenar Luas Segi Tiga Bersudut Tepat dari Altitud",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi terperinci menunjukkan formula pada skala dan unit yang berbeza. Setiap satu menamakan segi tiga dalam pemandangan, dua ukuran, penggantian, luas, dan andaian di sebalik model." },
          { "kind": "h3", "text": "Contoh 1: Seksyen Taman Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Seksyen taman berbentuk segi tiga bersudut tepat mempunyai sempadan terpanjang 10 m, dan jarak berserenjang dari bucu sudut tepat ke sempadan itu ialah 4.8 m. Jadi [[c=10\\text{ m}]] dan [[h=4.8\\text{ m}]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Seksyen itu menempati 24 meter persegi. Ini mengandaikan sempadan itu lurus dan bucu itu benar-benar sudut tepat." },
          { "kind": "h3", "text": "Contoh 2: Panel Papan Lapis Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Panel papan lapis berbentuk segi tiga bersudut tepat mempunyai hipotenus 1 m dan altitud berserenjang 0.48 m: [[K=(1\\times0.48)/2]], [[[\\boxed{K=0.24\\text{ m}^2}]]]. Itu ialah permukaan rata satu muka, berguna untuk anggaran liputan. Sisa potongan dan elaun bahan adalah pertimbangan berasingan." },
          { "kind": "h3", "text": "Contoh 3: Tingkap Kaca Berbentuk Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Panel kaca berbentuk segi tiga bersudut tepat mempunyai hipotenus 1.3 m dan altitud 0.6 m yang berserenjang dengan sisi itu: [[K=(1.3\\times0.6)/2]], [[[\\boxed{K=0.39\\text{ m}^2}]]]. Ini ialah luas kaca geometri sebelum liputan bingkai atau elaun pemasangan diambil kira." },
          { "kind": "h3", "text": "Contoh 4: Mengukur Seksyen Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Lukisan tinjauan mengandungi segi tiga bersudut tepat dengan hipotenus 13 m dan altitud [[60/13]] m. Mengekalkan pecahan: [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Lukisan itu mewakili seksyen 30 meter persegi. Kerja lapangan sebenar mungkin masih memerlukan pembetulan instrumen di luar pelan." },
          { "kind": "h3", "text": "Contoh 5: Mengukur Jubin Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Jubin berbentuk segi tiga bersudut tepat mempunyai hipotenus 25 cm dan altitud berserenjang 6.72 cm: [[K=(25\\times6.72)/2]], [[[\\boxed{K=84\\text{ cm}^2}]]]. Satu jubin meliputi 84 sentimeter persegi, yang membantu menganggar bilangan jubin yang diperlukan oleh permukaan. Celah grout dan kehilangan potongan dikira berasingan." },
          { "kind": "h3", "text": "Contoh 6: Panel Sokongan Keluli" },
          { "kind": "p", "text": "Panel sokongan rata berbentuk segi tiga bersudut tepat mempunyai hipotenus 1.7 m dengan kaki 0.8 m dan 1.5 m. Altitudnya ialah [[h=(0.8\\times1.5)/1.7=12/17]] m. Maka [[K=(1.7\\times(12/17))/2]], [[[\\boxed{K=0.6\\text{ m}^2}]]]. Itu ialah luas panel geometri, bukan kapasiti menanggung bebannya." },
          { "kind": "h3", "text": "Contoh 7: Panel Sisi Tanjakan Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Panel sisi tanjakan yang dipermudah membentuk segi tiga bersudut tepat dengan hipotenus 5 m dan altitud berserenjang 2.4 m ke hipotenus itu: [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Ini ialah luas rata seksyen sisi berbentuk segi tiga, bukan permukaan tanjakan yang condong, dan pengiraan tidak menetapkan pematuhan kebolehcapaian." },
          { "kind": "h3", "text": "Contoh 8: Seksyen Gabel Bumbung" },
          { "kind": "p", "text": "Seksyen gabel bumbung berbentuk segi tiga bersudut tepat mempunyai hipotenus 6.5 m dan altitud berserenjang [[30/13]] m: [[K=(6.5\\times(30/13))/2]], [[[\\boxed{K=7.5\\text{ m}^2}]]]. Hasilnya menggambarkan satah segi tiga yang diberikan oleh ukuran. Jumlah luas permukaan bumbung sebenar ialah masalah ukuran tiga dimensi yang berasingan." },
          { "kind": "h3", "text": "Contoh 9: Plot Tanah Berbentuk Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Seksyen tanah berbentuk segi tiga bersudut tepat mempunyai hipotenus 50 m dan altitud berserenjang 24 m: [[K=(50\\times24)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]. Sempadan yang diukur menempati 600 meter persegi. Angka luas rasmi mungkin masih memerlukan pengesahan tinjauan." },
          { "kind": "h3", "text": "Contoh 10: Plot Tinjauan Berbentuk Segi Tiga yang Besar" },
          { "kind": "p", "text": "Seksyen berbentuk segi tiga bersudut tepat yang ditinjau mempunyai hipotenus 100 m dan altitud berserenjang 48 m: [[K=(100\\times48)/2]], [[[\\boxed{K=2400\\text{ m}^2}]]]. Itu ialah luas satah seksyen segi tiga itu. Ia mewakili keseluruhan harta hanya apabila harta itu terdiri semata-mata daripada segi tiga itu." },
          { "kind": "h3", "text": "Contoh 11: Seksyen Layar Berbentuk Segi Tiga" },
          { "kind": "p", "text": "Reka bentuk layar rata berbentuk segi tiga bersudut tepat mempunyai hipotenus 15 kaki dan altitud berserenjang 7.2 kaki: [[K=(15\\times7.2)/2]], [[[\\boxed{K=54\\text{ ft}^2}]]]. Ini ialah luas satah layar yang diidealkan. Kain melengkung, jahitan, dan elaun tepi memerlukan pertimbangan berasingan." },
          { "kind": "h3", "text": "Contoh 12: Braket Mekanikal Kecil" },
          { "kind": "p", "text": "Braket rata berbentuk segi tiga bersudut tepat mempunyai hipotenus 250 mm dan altitud berserenjang 120 mm: [[K=(250\\times120)/2]], [[[\\boxed{K=15000\\text{ mm}^2}]]]. Jawapan dalam milimeter persegi kerana input dalam milimeter. Oleh kerana [[1\\text{ cm}^2=100\\text{ mm}^2]], ini sama dengan [[[\\boxed{150\\text{ cm}^2}]]]. Menukarkan unit linear dan menukarkan unit persegi ialah operasi yang berbeza, seperti yang dijelaskan oleh bahagian unit." },
          { "kind": "h3", "text": "Perbandingan Contoh Praktikal" }
        ],
        "table": {
          "headers": ["Situasi", "Hipotenus c", "Altitud h", "Formula", "Luas yang dikira", "Tafsiran praktikal"],
          "rows": [
            ["Seksyen taman", "10 m", "4.8 m", "[[K=ch/2]]", "24 m²", "Permukaan tanaman"],
            ["Panel papan lapis", "1 m", "0.48 m", "[[K=ch/2]]", "0.24 m²", "Liputan bahan, tiada sisa"],
            ["Tingkap kaca", "1.3 m", "0.6 m", "[[K=ch/2]]", "0.39 m²", "Luas kaca sebelum bingkai"],
            ["Lukisan tinjauan", "13 m", "60/13 m", "[[K=ch/2]]", "30 m²", "Luas pelan seksyen"],
            ["Jubin", "25 cm", "6.72 cm", "[[K=ch/2]]", "84 cm²", "Permukaan satu jubin"],
            ["Panel keluli", "1.7 m", "12/17 m", "[[K=ch/2]]", "0.6 m²", "Geometri, bukan kapasiti beban"],
            ["Panel sisi tanjakan", "5 m", "2.4 m", "[[K=ch/2]]", "6 m²", "Seksyen sisi, bukan permukaan tanjakan"],
            ["Gabel bumbung", "6.5 m", "30/13 m", "[[K=ch/2]]", "7.5 m²", "Keratan rentas segi tiga"],
            ["Plot tanah", "50 m", "24 m", "[[K=ch/2]]", "600 m²", "Luas tertutup, sahkan melalui tinjauan"],
            ["Plot tinjauan", "100 m", "48 m", "[[K=ch/2]]", "2400 m²", "Seksyen, bukan keseluruhan harta"],
            ["Seksyen layar", "15 kaki", "7.2 kaki", "[[K=ch/2]]", "54 ft²", "Layar rata yang diidealkan"],
            ["Braket", "250 mm", "120 mm", "[[K=ch/2]]", "15000 mm²", "Sama dengan 150 cm²"]
          ]
        },
        "imgAlt": "Empat contoh: taman, panel kaca, plot tanah, braket, masing-masing dengan hipotenus c, altitud h, dan luasnya",
        "figcaption": "Formula yang sama pada empat skala: taman, panel kaca, plot tanah, dan braket mesin."
      },
      "sec-equal": {
        "h2": "Mengapakah Kedua-dua Formula Luas Segi Tiga Bersudut Tepat Memberi Jawapan yang Sama",
        "blocks": [
          { "kind": "p", "text": "Segi tiga bersudut tepat boleh diukur melalui dua kaki berserenjangnya atau melalui hipotenus dan altitudnya. Formula kaki ialah [[K=ab/2]] dan formula altitud ialah [[K=ch/2]]. Oleh kerana kedua-duanya menggambarkan luas segi tiga yang sama, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Darabkan kedua-dua sisi dengan dua: [[ab=ch]]. Selesaikan untuk [[h]]: [[[\\boxed{h=\\frac{ab}{c}}]]]. Altitud ialah hasil darab kaki dibahagi dengan hipotenus, itulah sebabnya kedua-dua formula tidak boleh berselisih pada segi tiga yang konsisten." },
          { "kind": "p", "text": "Pengesahan berangka: untuk [[a=6]], [[b=8]], [[c=10]], altitud ialah [[h=(6\\times8)/10=4.8]]. Dengan kaki: [[K=(6\\times8)/2=24]]. Dengan altitud: [[K=(10\\times4.8)/2=24]]. Segi tiga yang sama, luas yang sama, dua laluan." },
          { "kind": "p", "text": "Apabila hanya hipotenus dan altitud diketahui, luas sudah tetap: tidak perlu membina semula kaki terlebih dahulu. Panjang kaki masih boleh diperoleh daripada [[c]] dan [[h]] yang sah melalui hubungan segmen di bawah, tetapi itu pengiraan berasingan daripada mencari luas. Apabila kaki ialah data yang diketahui, <a href=\"/right-triangle-area-from-legs-calculator/\">Kalkulator Luas Segi Tiga Bersudut Tepat dari Kaki</a> mengambilnya secara langsung." }
        ]
      },
      "sec-geomean": {
        "h2": "Bagaimana Altitud Membahagi Segi Tiga Bersudut Tepat",
        "blocks": [
          { "kind": "p", "text": "Altitud bertemu hipotenus di [[D]], membelahnya kepada segmen [[AD=p]] dan [[DB=q]], jadi [[p+q=c]]. Pembelahan itu mencipta dua segi tiga bersudut tepat yang lebih kecil yang tersarang di dalam yang asal, dan kadaran mereka sangat kemas." },
          { "kind": "h3", "text": "Dua Segi Tiga Bersudut Tepat yang Lebih Kecil yang Serupa" },
          { "kind": "p", "text": "Altitud membahagikan segi tiga asal kepada dua segi tiga bersudut tepat yang lebih kecil, setiap satu berkongsi satu sudut tirus dengan yang asal dan setiap satu mengandungi sudut tepat. Berkongsi dua ukuran sudut menjadikan ketiga-tiga segi tiga serupa. Keserupaan inilah yang memaksa hubungan kadaran yang bersih antara altitud, segmen, dan kaki." },
          { "kind": "h3", "text": "Teorem Min Geometri Altitud" },
          { "kind": "p", "text": "Keserupaan memberi [[[\\boxed{h^2=pq}]]], atau setara [[[\\boxed{h=\\sqrt{pq}}]]]. Altitud ialah min geometri dua segmen hipotenus: kuasa duanya sama dengan hasil darab mereka. Contoh terperinci: dengan [[p=6.4]] dan [[q=3.6]], [[c=p+q=10]], dan [[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]], [[[\\boxed{h=4.8}]]]. Luas mengikut: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]. Teorem segmen mengesahkan altitud yang diukur atau dikira dengan cara lain." },
          { "kind": "h3", "text": "Hubungan antara Segmen dan Kaki" },
          { "kind": "p", "text": "Keserupaan yang sama menghasilkan [[b^2=cp]] dan [[a^2=cq]]. Dengan [[c=10]], [[p=6.4]], [[q=3.6]]: [[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]] dan [[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]. Segi tiga 6-8-10 asal diperoleh semula tepat, yang menunjukkan betapa rapat segmen, altitud, dan kaki terikat bersama." }
        ]
      },
      "sec-max": {
        "h2": "Seberapa Besar Altitud Segi Tiga Bersudut Tepat Boleh Jadi?",
        "blocks": [
          { "kind": "p", "text": "Tidak setiap pasangan nombor positif boleh menjadi hipotenus dan altitud. Untuk segi tiga bersudut tepat yang sah dan tidak degenerat, [[[\\boxed{0<h\\leq\\frac{c}{2}}]]]. Altitud mestilah positif dan tidak boleh melebihi separuh hipotenus." },
          { "kind": "h3", "text": "Mengapakah Altitud Tidak Boleh Melebihi Separuh Hipotenus" },
          { "kind": "p", "text": "Dari [[h^2=pq]] dengan [[p+q=c]], hasil darab [[pq]] adalah terbesar apabila kedua-dua segmen sama, [[p=q=c/2]]. Oleh itu [[h^2\\leq c^2/4]], dan untuk panjang positif [[h\\leq c/2]]. Dalam istilah mudah: altitud paling tinggi apabila ia membelah hipotenus kepada dua separuh yang sama, dan walaupun begitu ia hanya mencapai separuh hipotenus." },
          { "kind": "h3", "text": "Luas Maksimum untuk Hipotenus Tetap" },
          { "kind": "p", "text": "Oleh kerana [[K=ch/2]] dan [[h\\leq c/2]], luas terbesar yang mungkin ialah [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]. Maksimum ini milik segi tiga bersudut tepat sama kaki, dengan kedua-dua kaki sama. Dengan [[c=10]], altitud sah tertinggi ialah [[h_{\\max}=5]], memberi [[K_{\\max}=(10\\times5)/2=25]]. Altitud 6 dengan hipotenus 10 adalah mustahil untuk segi tiga bersudut tepat." },
          { "kind": "h3", "text": "Apakah yang Berlaku Jika Altitud Terlalu Besar?" },
          { "kind": "p", "text": "Ambil [[c=10]] dan [[h=6]]: [[6>5]], jadi tiada segi tiga bersudut tepat mempunyai ukuran ini. Aritmetik [[(10\\times6)/2=30]] ialah luas yang sah untuk sesetengah segi tiga dalam tetapan yang lebih umum, tetapi ia tidak menjadikan [[c=10]], [[h=6]] input segi tiga bersudut tepat yang sah. Halaman ini tidak mendakwa kalkulator menolak input sedemikian secara automatik; semakan itu milik anda untuk dijalankan." },
          { "kind": "h3", "text": "Bolehkah Altitud Sama dengan Separuh Hipotenus?" },
          { "kind": "p", "text": "Ya. Kesamaan memberi segi tiga bersudut tepat sama kaki dengan dua kaki yang sama, segi tiga yang sah dan tidak degenerat. Ia ialah kes sempadan, bukan yang rosak." }
        ],
        "imgAlt": "Segi tiga 6-8-10: altitud membahagi hipotenus kepada p = 6.4 dan q = 3.6; segi tiga sama kaki pada altitud maksimum c/2",
        "figcaption": "Kiri: altitud ialah min geometri segmen hipotenus. Kanan: altitud paling tinggi yang mungkin ialah separuh hipotenus, memberi luas maksimum."
      },
      "sec-find-altitude": {
        "h2": "Cara Mengira Altitud Apabila Ia Tidak Diketahui",
        "blocks": [
          { "kind": "p", "text": "Kalkulator ini mengambil [[h]] sebagai input, jadi altitud yang tidak diketahui mesti ditemui atau diukur terlebih dahulu. Tiga laluan piawai merangkumi kes lazim. Apabila sisi diketahui dan altitud ialah bahagian yang hilang, <a href=\"/right-triangle-altitude-from-sides-calculator/\">Kalkulator Altitud Segi Tiga Bersudut Tepat dari Sisi</a> mengiranya secara langsung." },
          { "kind": "h3", "text": "Kaedah 1: Menggunakan Kedua-dua Kaki dan Hipotenus" },
          { "kind": "p", "text": "[[[\\boxed{h=\\frac{ab}{c}}]]]. Dengan [[a=6]], [[b=8]], [[c=10]]: [[h=(6\\times8)/10=4.8]]." },
          { "kind": "h3", "text": "Kaedah 2: Menggunakan Segmen Hipotenus" },
          { "kind": "p", "text": "[[[\\boxed{h=\\sqrt{pq}}]]]. Dengan [[p=6.4]] dan [[q=3.6]]: [[h=\\sqrt{23.04}=4.8]]." },
          { "kind": "h3", "text": "Kaedah 3: Menggunakan Luas dan Hipotenus yang Diketahui" },
          { "kind": "p", "text": "Menyusun semula [[K=ch/2]] memberi [[[\\boxed{h=\\frac{2K}{c}}]]]. Dengan [[K=24]] dan [[c=10]]: [[h=(2\\times24)/10=4.8]]." },
          { "kind": "p", "text": "Ini ialah penyusunan semula matematik, bukan mod kalkulator tambahan: kalkulator luas-dari-altitud itu sendiri masih menjangkakan altitud sebagai input." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Unit Persegi dalam Pengiraan Luas Segi Tiga Bersudut Tepat",
        "blocks": [
          { "kind": "p", "text": "Luas ialah dua dimensi. Mendarabkan dua panjang mendarabkan unitnya juga: [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Unit luas sentiasa kuasa dua unit panjang." },
          { "kind": "h3", "text": "Meter Persegi" },
          { "kind": "p", "text": "Dengan [[c=10\\text{ m}]] dan [[h=4.8\\text{ m}]], [[K=24\\text{ m}^2]]. Bacalah sebagai 24 meter persegi permukaan." },
          { "kind": "h3", "text": "Sentimeter Persegi" },
          { "kind": "p", "text": "Dengan [[c=25\\text{ cm}]] dan [[h=6.72\\text{ cm}]], [[K=84\\text{ cm}^2]]." },
          { "kind": "h3", "text": "Milimeter Persegi" },
          { "kind": "p", "text": "Dengan [[c=250\\text{ mm}]] dan [[h=120\\text{ mm}]], [[K=15000\\text{ mm}^2]]." },
          { "kind": "h3", "text": "Menukarkan Unit Luas" },
          { "kind": "p", "text": "[[1\\text{ m}^2=10000\\text{ cm}^2]] dan [[1\\text{ cm}^2=100\\text{ mm}^2]]. Penukaran linear mendarab dengan 10, 100, atau 1000, tetapi penukaran luas mengkuadratkan faktor itu: 100 cm dalam satu meter menjadi [[100^2=10000]] sentimeter persegi dalam satu meter persegi. Menukarkan panjang dan menukarkan luas ialah operasi yang berbeza." },
          { "kind": "h3", "text": "Bagaimana Jika Input Menggunakan Unit yang Berbeza?" },
          { "kind": "p", "text": "Tukarkan dahulu, kira kemudian. Hipotenus dalam meter dan altitud dalam sentimeter mesti dibawa kepada satu unit, contohnya 2 m dan 150 cm menjadi 2 m dan 1.5 m, sebelum formula digunakan. Unit bercampur dalam formula menghasilkan nombor yang tidak bermakna tanpa unit yang kemas." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Lazim Apabila Menggunakan Formula Luas Altitud",
        "blocks": [
          { "kind": "p", "text": "Kebanyakan jawapan salah di halaman ini datang daripada input yang tersalah label, bukan aritmetik yang buruk. Lapan belas kesilapan di bawah merangkumi hampir setiap satunya." },
          { "kind": "h3", "text": "1. Menggunakan Kaki Bukannya Altitud" },
          { "kind": "p", "text": "Altitud [[h]] jatuh dari bucu sudut tepat ke hipotenus; kaki berjalan di sepanjang tepi segi tiga. Dalam segi tiga 6-8-10, memasukkan kaki 6 sebagai altitud memberi [[(10\\times6)/2=30]] bukannya 24. Pembetulan: altitud mesti mendarat di hipotenus dengan penanda sudut tepat." },
          { "kind": "h3", "text": "2. Mengelirukan Altitud dengan Hipotenus" },
          { "kind": "p", "text": "Menukar [[c]] dan [[h]] mengubah maksud hasil darab. Dengan [[c=10]] dan [[h=4.8]], nombor berulang-alik dalam pendaraban, tetapi semakan kebolehlaksanaan [[h\\leq c/2]] rosak: kemasukan yang ditukar mendakwa altitud 10 pada hipotenus 4.8, yang mustahil. Pembetulan: hipotenus sentiasa sisi terpanjang." },
          { "kind": "h3", "text": "3. Melukis Altitud dari Bucu yang Salah" },
          { "kind": "p", "text": "Hanya altitud dari bucu sudut tepat [[C]] berpasangan dengan hipotenus sebagai tapaknya. Garis berserenjang dari bucu tirus mendarat di kaki, bukan hipotenus, dan tidak tergolong dalam formula ini. Pembetulan: mulakan di bucu persegi." },
          { "kind": "h3", "text": "4. Mengukur Altitud pada Sudut yang Tidak Berserenjang" },
          { "kind": "p", "text": "Sebarang segmen tidak berserenjang dari [[C]] ke hipotenus lebih panjang daripada altitud sebenar, jadi luas keluar terlalu besar. Pembetulan: sahkan pertemuan 90 darjah, melalui pembinaan atau dengan [[h=ab/c]]." },
          { "kind": "h3", "text": "5. Menggunakan Tinggi yang Sepadan dengan Tapak yang Berbeza" },
          { "kind": "p", "text": "Altitud ke hipotenus berpasangan hanya dengan hipotenus. Memasangkannya dengan kaki, seperti dalam [[(8\\times4.8)/2=19.2]], mencampurkan dua pasangan tapak-tinggi yang berbeza. Pembetulan: setiap tinggi tergolong tepat pada satu tapak." },
          { "kind": "h3", "text": "6. Lupa Membahagi dengan Dua" },
          { "kind": "p", "text": "[[10\\times4.8=48]] ialah luas segi empat selari, bukan luas segi tiga. Pembetulan: akhiri setiap pengiraan tapak-tinggi dengan pembahagian dua." },
          { "kind": "h3", "text": "7. Mendarabkan Panjang dengan Unit yang Tidak Serasi" },
          { "kind": "p", "text": "Hipotenus 2 m dengan altitud 150 cm bukanlah [[(2\\times150)/2=150]] bagi apa-apa yang bermakna. Pembetulan: tukarkan kepada satu unit dahulu, di sini 2 m dan 1.5 m, memberi 1.5 m²." },
          { "kind": "h3", "text": "8. Melaporkan Jawapan dalam Unit Linear" },
          { "kind": "p", "text": "Luas 24 m² bukanlah 24 m. Pembetulan: sentiasa tulis unit persegi bersama nombor." },
          { "kind": "h3", "text": "9. Memasukkan Panjang Sifar atau Negatif" },
          { "kind": "p", "text": "[[c>0]] dan [[h>0]] diperlukan; input sifar atau negatif tidak menggambarkan sebarang segi tiga. Pembetulan: ukur semula." },
          { "kind": "h3", "text": "10. Memasukkan Altitud Melebihi Separuh Hipotenus" },
          { "kind": "p", "text": "[[c=10]], [[h=6]] melanggar [[h\\leq c/2]]. Pembetulan: semak semula segmen mana yang diukur; ia bukan altitud berserenjang." },
          { "kind": "h3", "text": "11. Menganggap Setiap Pasangan Positif Membentuk Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Positiviti tidak mencukupi; had altitud juga mesti dipenuhi. Pembetulan: jalankan semakan [[h\\leq c/2]] pada setiap pasangan baharu." },
          { "kind": "h3", "text": "12. Mengelirukan Altitud dengan Kaki Menegak" },
          { "kind": "p", "text": "Dalam rajah altitud mungkin kelihatan menegak manakala kaki kelihatan condong, atau sebaliknya selepas putaran. Menegak pada skrin tidak bermakna apa-apa. Pembetulan: kenal pasti sisi mengikut peranan geometrinya, bukan arah skrinnya." },
          { "kind": "h3", "text": "13. Membundarkan Altitud Terlalu Awal" },
          { "kind": "p", "text": "Menggunakan 4.6 untuk [[60/13\\approx4.61538]] dan kemudian mengira memberi luas yang sedikit salah, manakala pecahan tepat terhapus kemas kepada 30. Pembetulan: kekalkan ketepatan penuh sehingga jawapan akhir." },
          { "kind": "h3", "text": "14. Menganggap Hipotenus Mesti Mendatar" },
          { "kind": "p", "text": "Hipotenus boleh berada pada sebarang sudut; formula menggunakan panjang, bukan orientasi. Pembetulan: percayakan ukuran, bukan putaran lukisan." },
          { "kind": "h3", "text": "15. Mengelirukan Teorem Altitud dengan Teorem Pythagoras" },
          { "kind": "p", "text": "[[h^2=pq]] mengaitkan altitud dengan segmen hipotenus; [[a^2+b^2=c^2]] mengaitkan tiga sisi. Ia menjawab soalan yang berbeza. Pembetulan: padankan teorem dengan kuantiti yang anda miliki." },
          { "kind": "h3", "text": "16. Menggunakan Altitud yang Diukur dari Segi Tiga yang Berbeza" },
          { "kind": "p", "text": "Altitud tergolong pada satu segi tiga tertentu. Meminjam 4.8 dari segi tiga 6-8-10 untuk hipotenus yang berbeza memberi luas yang salah. Pembetulan: setiap pengiraan menggunakan ukuran segi tiganya sendiri." },
          { "kind": "h3", "text": "17. Menganggap Luas Menentukan Setiap Panjang Sisi" },
          { "kind": "p", "text": "Banyak segi tiga bersudut tepat yang berbeza berkongsi satu luas. Mengetahui [[K=24]] tidak menetapkan [[c]] atau [[h]] secara individu. Pembetulan: anggap luas sebagai satu persamaan, bukan huraian penuh." },
          { "kind": "h3", "text": "18. Menganggap Luas Geometri sebagai Bahan Tepat untuk Dibeli" },
          { "kind": "p", "text": "Formula memberi luas geometri yang ideal. Projek sebenar memerlukan sisa, tindihan, dan elaun pemotongan di atasnya. Pembetulan: tambahkan margin projek selepas geometri selesai." },
          { "kind": "h3", "text": "Salah Lawan Betul: Contoh Konkrit" },
          { "kind": "p", "text": "Diberi [[c=10]] dan [[h=4.8]], pengiraan yang salah melangkau pembahagian dua: [[K=10\\times4.8=48]]. Itu ialah luas segi empat selari yang sepadan. Pengiraan yang betul ialah [[K=(10\\times4.8)/2]], [[[\\boxed{K=24}]]]. Ilustrasi kedua: menggantikan kaki 8 untuk altitud memberi [[(10\\times8)/2=40]], salah kerana 8 tidak berserenjang dengan hipotenus. Altitud, dan hanya altitud, berpasangan dengan [[c]]." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Sama Ada Pengiraan Luas Anda Betul",
        "blocks": [
          { "kind": "p", "text": "Tujuh semakan menangkap sebahagian besar hasil yang buruk sebelum ia meninggalkan halaman." },
          { "kind": "h3", "text": "Semakan 1: Input Positif" },
          { "kind": "p", "text": "Untuk segi tiga bersudut tepat yang sah, [[c>0]] dan [[h>0]]. Panjang sifar atau negatif tidak menggambarkan sebarang segi tiga." },
          { "kind": "h3", "text": "Semakan 2: Had Altitud" },
          { "kind": "p", "text": "Sahkan [[h\\leq c/2]]. Ketaksamaan tunggal ini menyingkirkan input mustahil yang paling lazim, seperti [[c=10]] dengan [[h=6]]." },
          { "kind": "h3", "text": "Semakan 3: Sahkan Sudut Tepat" },
          { "kind": "p", "text": "Altitud mestilah berserenjang dengan hipotenus. Jika lukisan atau ukuran tidak dapat mengesahkan pertemuan 90 darjah, input itu bukan altitud." },
          { "kind": "h3", "text": "Semakan 4: Unit Persegi" },
          { "kind": "p", "text": "Input meter memberi meter persegi, input sentimeter memberi sentimeter persegi. Unit jawapan ialah kuasa dua unit input, bukan unit input itu sendiri." },
          { "kind": "h3", "text": "Semakan 5: Semakan Silang dengan Formula Kaki" },
          { "kind": "p", "text": "Untuk segi tiga 6-8-10, [[(6\\times8)/2=24]] dan [[(10\\times4.8)/2=24]]. Dua kaedah, satu segi tiga, satu jawapan: persetujuan ialah pengesahan terkuat yang tersedia." },
          { "kind": "h3", "text": "Semakan 6: Hubungan Min Geometri" },
          { "kind": "p", "text": "Apabila segmen hipotenus diketahui, sahkan [[h^2=pq]]: [[4.8^2=6.4\\times3.6]], [[23.04=23.04]]. Ketidakpadanan bermaksud altitud, segmen, atau pengenalan segi tiga adalah salah." },
          { "kind": "h3", "text": "Semakan 7: Bandingkan dengan Luas Maksimum yang Mungkin" },
          { "kind": "p", "text": "Untuk hipotenus tetap, [[K\\leq c^2/4]]. Dengan [[c=10]], sebarang tuntutan luas segi tiga bersudut tepat melebihi 25 unit persegi adalah mustahil. Halaman ini tidak membuat sebarang tuntutan tentang kelakuan pengesahan kalkulator sendiri; semakan itu milik anda untuk dijalankan." }
        ]
      },
      "sec-compare": {
        "h2": "Luas dari Altitud berbanding Luas dari Dua Kaki",
        "blocks": [
          { "kind": "p", "text": "Dua formula, satu luas. [[K=ab/2]] memerlukan dua kaki berserenjang; [[K=ch/2]] memerlukan hipotenus dan altitudnya. Tiada yang lebih betul; ia adalah kuantiti yang sama yang dicapai dari ukuran yang berbeza." },
          { "kind": "p", "text": "Luas segi tiga bersudut tepat yang sama tidak berubah apabila kaedah lain yang sah digunakan. Pilih baris yang sepadan dengan nombor yang telah ada di tangan; apabila dua baris tersedia, persetujuan mereka ialah semakan ketepatan percuma." }
        ],
        "table": {
          "headers": ["Kaedah", "Ukuran yang diperlukan", "Kelebihan utama"],
          "rows": [
            ["Luas dari kaki", "[[a]], [[b]]", "Paling mudah apabila kedua-dua kaki diketahui"],
            ["Luas dari altitud", "[[c]], [[h]]", "Langsung apabila hipotenus dan altitud berserenjang diketahui"],
            ["Luas dari sudut", "Sisi yang sesuai dan sudut yang diapit", "Berguna apabila sudut tirus diketahui"],
            ["Luas dari jejari dalam", "[[r]], [[s]]", "Berguna dalam masalah bulatan terterap dan separuh perimeter"]
          ]
        }
      },
      "sec-conclusion": {
        "h2": "Hipotenus dan Altitudnya Ialah Semua yang Anda Perlukan",
        "blocks": [
          { "kind": "p", "text": "Kaedah altitud ialah peraturan tapak-tinggi yang dihalakan ke sisi terpanjang. Setelah hipotenus dikenal pasti dan altitud berserenjang berada di tangan, luas hanyalah satu pendaraban dan satu pembahagian dua, tanpa perlu mendapatkan semula kaki terlebih dahulu." },
          { "kind": "p", "text": "Kekuatan sebenarnya ialah disiplin: keserenjangan, had altitud, dan hubungan min geometri menukarkan lakaran segi tiga yang kabur kepada nombor yang boleh disemak. Jalankan semakan, bandingkan dengan formula kaki apabila kaki tersedia, dan jawapan itu memperoleh kepercayaannya." },
          { "kind": "p", "text": "Simpan kalkulator halaman ini untuk kes di mana hipotenus dan altitud ialah data yang diukur, dan capai kalkulator kaki, sudut, atau separuh perimeter apabila ukuran menunjuk ke tempat lain." }
        ]
      }
    },
    "faqs": [
      { "question": "Apakah formula untuk luas segi tiga bersudut tepat menggunakan altitud?", "answer": "Formulanya ialah K = ch/2, dengan c ialah hipotenus dan h ialah altitud berserenjang dari bucu sudut tepat ke hipotenus. Darabkan kedua-dua panjang dan bahagikan dengan dua. Hasilnya dalam unit persegi yang sepadan dengan input, jadi input meter memberi meter persegi. Altitud mesti bertemu hipotenus pada 90 darjah agar formula ini terpakai." },
      { "question": "Apakah maksud altitud h dalam segi tiga bersudut tepat?", "answer": "Altitud h ialah segmen berserenjang dari bucu sudut tepat C ke hipotenus, yang bertemu di titik D. Ia ialah jarak terpendek dari bucu itu ke hipotenus dan tinggi yang berpasangan dengan hipotenus sebagai tapak. Ia bukan kaki, dan bukan sekadar sebarang garis yang dilukis di dalam segi tiga." },
      { "question": "Adakah altitud sama dengan salah satu kaki?", "answer": "Tidak. Kaki a dan b membentuk sudut tepat, manakala altitud ialah segmen berasingan dari bucu itu ke sisi bertentangan. Dalam segi tiga 6-8-10, altitud ialah 4.8, yang tidak sama dengan mana-mana kaki. Memasukkan kaki di tempat yang sepatutnya altitud ialah salah satu kesilapan paling lazim dengan formula ini." },
      { "question": "Mengapakah hipotenus boleh digunakan sebagai tapak?", "answer": "Mana-mana sisi segi tiga boleh dijadikan tapak apabila tinggi berserenjang yang sepadan dengannya diketahui. Untuk hipotenus, tinggi itu ialah altitud dari bucu sudut tepat. Oleh kerana kedua-duanya berserenjang, peraturan umum separuh tapak darab tinggi terpakai secara langsung, memberi K = ch/2." },
      { "question": "Mengapakah kita membahagi hasil darab hipotenus-altitud dengan dua?", "answer": "Hasil darab c darab h ialah luas segi empat selari yang dibina pada tapak yang sama dengan tinggi yang sama. Segi tiga mengisi tepat separuh daripada segi empat selari itu, jadi hasil darab mesti dibahagi dua. Melangkau pembahagian menjawab soalan yang berbeza: dengan c = 10 dan h = 4.8, 48 ialah segi empat selari manakala 24 ialah segi tiga." },
      { "question": "Bagaimanakah anda mencari altitud jika kedua-dua kaki diketahui?", "answer": "Gunakan h = ab/c. Darabkan kedua-dua kaki dan bahagikan dengan hipotenus, yang boleh diperoleh daripada teorem Pythagoras apabila diperlukan. Untuk kaki 6 dan 8 dengan hipotenus 10, h = 48/10 = 4.8. Kalkulator altitud-dari-sisi di laman ini melakukan pengiraan yang sama apabila sisi diketahui." },
      { "question": "Apakah teorem min geometri untuk altitud segi tiga bersudut tepat?", "answer": "Ia menyatakan bahawa h kuasa dua sama dengan p darab q, dengan p dan q ialah dua segmen yang dipotong altitud dari hipotenus. Altitud oleh itu ialah min geometri segmen-segmen itu. Untuk p = 6.4 dan q = 3.6, h = punca kuasa dua 23.04 = 4.8, yang juga mengesahkan altitud yang ditemui dengan cara lain." },
      { "question": "Bolehkah altitud lebih panjang daripada separuh hipotenus?", "answer": "Tidak. Untuk segi tiga bersudut tepat yang sah, h mesti memenuhi 0 < h <= c/2. Altitud paling tinggi apabila ia membelah hipotenus kepada separuh yang sama, mencapai tepat c/2 dalam kes sama kaki. Nilai yang lebih besar, seperti h = 6 dengan c = 10, tidak boleh dimiliki oleh segi tiga bersudut tepat dengan hipotenus itu." },
      { "question": "Bagaimanakah anda mengira luas apabila hanya hipotenus dan altitud diketahui?", "answer": "Gunakan K = ch/2 secara langsung. Tiada pembinaan semula kaki diperlukan kerana luas sudah ditentukan oleh satu sisi dan tingginya yang sepadan. Sebagai contoh, c = 10 dan h = 4.8 memberi K = 24 unit persegi. Hanya sahkan bahawa altitud itu berserenjang dan tidak lebih besar daripada separuh hipotenus terlebih dahulu." },
      { "question": "Mengapakah formula berasaskan altitud memberi hasil yang sama dengan formula kaki?", "answer": "Kedua-duanya mengira luas segi tiga yang sama. Menyamakan ab/2 dengan ch/2 dan mendarab dengan dua memberi ab = ch, jadi h = ab/c. Kedua-dua formula adalah setara secara algebra untuk sebarang segi tiga bersudut tepat yang konsisten, yang merupakan sebab mengira kedua-duanya ialah semakan yang begitu kukuh: persetujuan mengesahkan input." },
      { "question": "Unit apakah yang patut digunakan oleh hasil luas?", "answer": "Unit persegi yang sepadan dengan panjang input: meter memberi meter persegi, sentimeter memberi sentimeter persegi, milimeter memberi milimeter persegi. Tukarkan semua input kepada satu unit sebelum mengira. Ingat bahawa penukaran luas mengkuadratkan faktor linear, jadi satu meter persegi sama dengan 10,000 sentimeter persegi." },
      { "question": "Bolehkah formula berasaskan altitud digunakan untuk segi tiga lain?", "answer": "Peraturan tapak-tinggi separuh tapak darab tinggi berfungsi untuk setiap segi tiga dengan pasangan berserenjang yang sepadan. Yang istimewa di sini ialah kekangan segi tiga bersudut tepat: altitud mesti jatuh dari bucu sudut tepat, dan h tidak boleh melebihi c/2. Had itu tidak terpakai pada segi tiga tirus atau cakah." }
    ],
    "faqHeading": "Soalan Lazim",
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
    "relatedItems": [
      "Kalkulator Luas Segi Tiga Bersudut Tepat",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Kaki",
      "Kalkulator Altitud Segi Tiga Bersudut Tepat dari Sisi",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Separuh Perimeter",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Sudut",
      "Kalkulator Perimeter Segi Tiga Bersudut Tepat",
      "Kalkulator Sisi Segi Tiga Bersudut Tepat"
    ]
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Jak obliczyć pole trójkąta prostokątnego z wysokości",
      "sec-understand": "Przeciwprostokątna i wysokość",
      "sec-formula": "Wzór na pole trójkąta prostokątnego z wysokości",
      "sec-steps": "Rozwiązany przykład krok po kroku",
      "sec-howto": "Jak korzystać z kalkulatora pola z wysokości",
      "sec-examples": "Rozwiązane przykłady: przeciwprostokątna i wysokość",
      "sec-applications": "Zastosowania w życiu codziennym",
      "sec-equal": "Dlaczego oba wzory na pole są zgodne",
      "sec-geomean": "Jak wysokość dzieli trójkąt prostokątny",
      "sec-max": "Maksymalna możliwa wysokość",
      "sec-find-altitude": "Wyznaczanie wysokości, gdy jest nieznana",
      "sec-units": "Jednostki kwadratowe i przeliczenia",
      "sec-mistakes": "Typowe błędy",
      "sec-verify": "Jak sprawdzić swoją odpowiedź",
      "sec-compare": "Pole z wysokości a pole z dwóch przyprostokątnych",
      "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "sec-faq": "Częste pytania",
      "sec-conclusion": "Podsumowanie"
    },
    "sections": {
      "sec-intro": {
        "h2": "Jak obliczyć pole trójkąta prostokątnego z wysokości",
        "blocks": [
          { "kind": "p", "text": "Załóżmy, że trójkąt prostokątny ma przeciwprostokątną 10 m, a prostopadła odległość od wierzchołka kąta prostego do tej przeciwprostokątnej wynosi 4.8 m. Jego pole wynika bezpośrednio: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Trójkąt zamyka 24 metry kwadratowe płaskiej powierzchni." },
          { "kind": "p", "text": "Ten kalkulator istnieje dokładnie na taką sytuację. Gdy znasz najdłuższy bok trójkąta prostokątnego, przeciwprostokątną [[c]], i wysokość prostopadłą poprowadzoną z wierzchołka kąta prostego do tego boku, [[h]], dwie przyprostokątne nie są potrzebne. Przeciwprostokątna służy jako podstawa, wysokość jest jej odpowiadającą prostopadłą wysokością, a pole każdego trójkąta to połowa iloczynu podstawy i jej odpowiadającej wysokości: [[K=ch/2]]." },
          { "kind": "p", "text": "Wysokość musi spotykać przeciwprostokątną pod kątem prostym; nachylony odcinek, który nie jest prostopadły, daje złą wysokość i złe pole. Wprowadź oba pomiary w zgodnych jednostkach długości, a kalkulator zwróci pole w odpowiadających jednostkach kwadratowych, pokazując każdy krok podstawienia." }
        ]
      },
      "sec-understand": {
        "h2": "Przeciwprostokątna i wysokość trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Ten przewodnik stosuje jedną spójną notację: [[A]] i [[B]] to dwa kąty ostre, [[C=90^\\circ]] to kąt prosty, bok [[a]] leży naprzeciw kąta [[A]], bok [[b]] leży naprzeciw kąta [[B]], bok [[c]] to przeciwprostokątna naprzeciw kąta [[C]], [[h]] to wysokość prostopadła poprowadzona z wierzchołka [[C]] do przeciwprostokątnej, spotykająca ją w punkcie [[D]], [[p]] i [[q]] to odcinki przeciwprostokątnej [[AD]] i [[DB]], a [[K]] to pole." },
          { "kind": "h3", "text": "Co to jest trójkąt prostokątny?" },
          { "kind": "p", "text": "Trójkąt prostokątny zawiera dokładnie jeden kąt 90 stopni. Jego dwie przyprostokątne spotykają się przy kącie prostym, a przeciwprostokątna leży naprzeciw niego. Przeciwprostokątna jest zawsze najdłuższym bokiem. Pozostałe dwa kąty są ostre, a ponieważ suma trzech kątów wynosi 180 stopni, [[A+B=90^\\circ]]. Te fakty są ważne, ponieważ metoda z wysokością na nich polega: podstawą musi być przeciwprostokątna, a wysokość musi być opuszczona z wierzchołka kąta prostego." },
          { "kind": "h3", "text": "Co to jest przeciwprostokątna?" },
          { "kind": "p", "text": "Przeciwprostokątna to bok naprzeciw kąta prostego, oznaczony w kalkulatorze jako [[c]]. Aby ją zidentyfikować w dowolnej orientacji, znajdź bok, który nie styka się ze znacznikiem kwadratowego rogu: ten bok to przeciwprostokątna. We wzorze z wysokością pełni rolę podstawy, więc poprawne jej rozpoznanie jest pierwszą umiejętnością, której uczy ta strona." },
          { "kind": "h3", "text": "Co to jest wysokość?" },
          { "kind": "p", "text": "Wysokość to odcinek prostopadły poprowadzony z wierzchołka trójkąta do prostej zawierającej przeciwległy bok. Tutaj wysokość [[h]] biegnie z wierzchołka kąta prostego [[C]] do przeciwprostokątnej [[AB]] i spotyka ją w punkcie [[D]], więc [[CD\\perp AB]]. Jest to odległość prostopadła, a nie po prostu dowolna linia narysowana wewnątrz trójkąta: kwalifikuje się tylko odcinek spotykający przeciwprostokątną pod kątem 90 stopni." },
          { "kind": "h3", "text": "Czy wysokość jest tym samym co przyprostokątna?" },
          { "kind": "p", "text": "Nie. Przyprostokątne [[a]] i [[b]] spotykają się przy pierwotnym kącie prostym, podczas gdy wysokość to osobny odcinek od tego samego wierzchołka do przeciwległego boku. Weź trójkąt 6-8-10: [[a=6]], [[b=8]], [[c=10]]. Jego wysokość to [[h=(6\\times8)/10=4.8]]. Żadna przyprostokątna nie mierzy 4.8, a jednak wysokość opuszczona na przeciwprostokątną wynosi dokładnie 4.8. Mylenie przyprostokątnej z wysokością to jeden z najczęstszych błędów na tej stronie." },
          { "kind": "h3", "text": "Dlaczego wysokość pada wewnątrz trójkąta" },
          { "kind": "p", "text": "Dla niezdegenerowanego trójkąta prostokątnego prostopadła z wierzchołka kąta prostego pada na przeciwprostokątną między jej końcami, nigdy na zewnątrz. Dzieli pierwotny trójkąt na dwa mniejsze trójkąty prostokątne. Te dwa trójkąty mają te same miary kątów ostrych co pierwotny, co sprawia, że wszystkie trzy trójkąty są do siebie podobne. To podobieństwo jest powodem, dla którego wysokość spełnia tak schludne zależności, zbadane w sekcji o średniej geometrycznej poniżej." }
        ],
        "imgAlt": "Trójkąt prostokątny ABC: przyprostokątne a i b, przeciwprostokątna c, wysokość h z wierzchołka C do punktu D, wzór K = ch/2",
        "figcaption": "Anatomia metody z wysokością: przeciwprostokątna c jest podstawą, wysokość h spotyka ją pod kątem 90 stopni w punkcie D, a pole to K = ch/2."
      },
      "sec-formula": {
        "h2": "Wzór na pole trójkąta prostokątnego z wysokości",
        "blocks": [
          { "kind": "p", "text": "Wzór na pole z wysokości to [[[\\boxed{K=\\frac{ch}{2}}]]]. Tutaj [[K]] to pole, [[c]] to przeciwprostokątna służąca jako podstawa, a [[h]] to wysokość prostopadła do przeciwprostokątnej. Trzy symbole, jedno mnożenie, jedno dzielenie przez dwa." },
          { "kind": "h3", "text": "Dlaczego mnożymy przeciwprostokątną przez wysokość?" },
          { "kind": "p", "text": "Ogólny wzór na pole trójkąta to [[K=\\frac{\\text{base}\\times\\text{height}}{2}]], a podstawa i wysokość muszą być do siebie prostopadłe. Wybór przeciwprostokątnej jako podstawy wymusza, aby wysokością była prostopadła odległość do niej, czyli dokładnie wysokość: [[\\text{base}=c]] i [[\\text{height}=h]], stąd [[K=ch/2]]. Zachodzi to niezależnie od tego, jak trójkąt jest obrócony lub narysowany: prostopadłość to zależność geometryczna, a nie kierunek na ekranie, więc nachylona przeciwprostokątna działa jako podstawa równie dobrze jak pozioma." },
          { "kind": "h3", "text": "Dlaczego wynik dzieli się przez dwa?" },
          { "kind": "p", "text": "Trójkąt zajmuje połowę równoległoboku zbudowanego na tej samej podstawie przy tej samej prostopadłej wysokości. Przy [[c=10]] i [[h=4.8]] iloczyn [[c\\times h=48]] to pole tego równoległoboku. Trójkąt jest jego połową, więc [[K=48/2=24]]. Podanie 48 odpowiedziałoby na inne pytanie: pole całego równoległoboku, a nie trójkąta w jego wnętrzu." },
          { "kind": "h3", "text": "Czy ten wzór działa dla każdego trójkąta?" },
          { "kind": "p", "text": "Reguła podstawa-wysokość działa dla każdego trójkąta, pod warunkiem że wysokość jest prostopadła do wybranej podstawy. Szczególny jest tu wybór podstawy: przeciwprostokątna trójkąta prostokątnego, z wysokością opuszczoną z wierzchołka kąta prostego. Ten wybór niesie dodatkowe ograniczenia geometryczne, takie jak wysokość nigdy nieprzekraczająca połowy przeciwprostokątnej, które nie dotyczą ogólnych trójkątów." },
          { "kind": "h3", "text": "Dlaczego wzór nie potrzebuje obu przyprostokątnych" },
          { "kind": "p", "text": "Pole potrzebuje jednego boku i jego odpowiadającej prostopadłej wysokości, niczego więcej. Gdy [[c]] i [[h]] są już znane, przyprostokątne nie dodają żadnej nowej informacji o polu. Wzór z przyprostokątnymi [[K=ab/2]] to po prostu inna droga wejściowa do tej samej wielkości, przydatna, gdy zmierzonymi danymi są dwa prostopadłe boki." }
        ],
        "imgAlt": "Pole trójkąta to połowa iloczynu podstawy i wysokości: c = 10, h = 4.8, 10 x 4.8 = 48, podzielone przez 2 daje 24",
        "figcaption": "Iloczyn c razy h to cały prostokąt; trójkąt wypełnia dokładnie jego połowę, dlatego wzór dzieli przez dwa."
      },
      "sec-steps": {
        "h2": "Przykład obliczania pola z wysokości krok po kroku",
        "blocks": [
          { "kind": "p", "text": "Jedno pełne obliczenie, od pomiarów do zweryfikowanej odpowiedzi, przy [[c=10\\text{ m}]] i [[h=4.8\\text{ m}]]." }
        ],
        "steps": [
          "<strong>Zidentyfikuj podane pomiary.</strong> Przeciwprostokątna to [[c=10\\text{ m}]], a wysokość prostopadła do niej to [[h=4.8\\text{ m}]]. Potwierdź, że wysokość spotyka przeciwprostokątną pod kątem prostym.",
          "<strong>Zapisz wzór.</strong> [[K=ch/2]].",
          "<strong>Podstaw pomiary.</strong> [[K=(10\\times4.8)/2]].",
          "<strong>Pomnóż.</strong> [[10\\times4.8=48]], więc [[K=48/2]].",
          "<strong>Podziel przez dwa.</strong> [[[\\boxed{K=24\\text{ m}^2}]]].",
          "<strong>Zinterpretuj odpowiedź.</strong> Trójkąt zamyka 24 metry kwadratowe płaskiej powierzchni.",
          "<strong>Sprawdź wykonalność.</strong> Prawidłowy trójkąt prostokątny potrzebuje [[h\\leq c/2]]; tutaj [[4.8\\leq5]], więc pomiary mogą opisywać prawdziwy trójkąt prostokątny.",
          "<strong>Zweryfikuj przy użyciu przyprostokątnych.</strong> Trójkąt 6-8-10 ma tę samą przeciwprostokątną i wysokość, a [[K=(6\\times8)/2=24]]. Obie drogi są zgodne."
        ]
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora pola trójkąta prostokątnego z wysokości",
        "blocks": [
          { "kind": "p", "text": "Kalkulator na tej stronie potrzebuje dokładnie dwóch danych wejściowych. Poniższy przewodnik podąża za kolejnością na ekranie, aby użytkownik korzystający po raz pierwszy mógł przejść od narysowanego lub zmierzonego trójkąta do zweryfikowanego pola." }
        ],
        "steps": [
          "<strong>Zidentyfikuj trójkąt prostokątny.</strong> Potwierdź, że jeden kąt to 90 stopni; metoda ma zastosowanie tylko do trójkątów prostokątnych.",
          "<strong>Znajdź jego przeciwprostokątną [[c]].</strong> Jest to bok naprzeciw kąta prostego i najdłuższy bok.",
          "<strong>Zidentyfikuj wysokość prostopadłą [[h]].</strong> Biegnie ona z wierzchołka kąta prostego do przeciwprostokątnej i spotyka ją pod kątem 90 stopni.",
          "<strong>Zmierz lub uzyskaj obie wartości.</strong> Zmierz bezpośrednio albo najpierw oblicz wysokość ze wzoru [[h=ab/c]], gdy znane są przyprostokątne.",
          "<strong>Wprowadź przeciwprostokątną do pola Hypotenuse c.</strong>",
          "<strong>Wprowadź wysokość do pola Altitude h.</strong>",
          "<strong>Wybierz zgodne jednostki długości.</strong> Oba wejścia muszą używać tej samej jednostki, zanim zostanie zastosowany wzór.",
          "<strong>Potwierdź, że obie wartości są dodatnie.</strong> Zerowe lub ujemne długości nie opisują żadnego trójkąta.",
          "<strong>Sprawdź, czy [[h]] nie jest większe niż połowa przeciwprostokątnej.</strong> Dla [[c=10]] każda wysokość powyżej 5 nie może należeć do trójkąta prostokątnego o takiej przeciwprostokątnej.",
          "<strong>Kliknij Oblicz Area.</strong>",
          "<strong>Przejrzyj wynik pola.</strong> Pojawia się w jednostkach kwadratowych zgodnych z jednostką wejściową.",
          "<strong>Przeczytaj wyświetlane kroki rozwiązania.</strong> Pokazują wzór, podstawienie i arytmetykę.",
          "<strong>Sprawdź wizualizację na żywo.</strong> Potwierdź, że przeciwprostokątna i wysokość na diagramie odpowiadają zamierzonym pomiarom.",
          "<strong>Użyj przycisku Resetuj do nowego obliczenia.</strong> Czyści oba pola, aby kolejne obliczenie zaczynało się od czystego arkusza."
        ],
        "closingParagraphs": [
          "Kalkulator nie pyta o dwie przyprostokątne ani kąt, ponieważ metoda z wysokością rzeczywiście ich nie potrzebuje."
        ]
      },
      "sec-examples": {
        "h2": "Rozwiązane przykłady pola trójkąta prostokątnego z przeciwprostokątnej i wysokości",
        "blocks": [
          { "kind": "p", "text": "Cztery rozwiązane przykłady budują metodę od znajomych trójkątów w górę. Każdy oblicza wysokość z przyprostokątnych, gdy jest to potrzebne, stosuje [[K=ch/2]] i sprawdza krzyżowo ze wzorem z przyprostokątnymi." },
          { "kind": "h3", "text": "Przykład 1: trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dane: [[a=3]], [[b=4]], [[c=5]]. Wysokość to [[h=ab/c]], więc [[h=(3\\times4)/5=2.4]]. Pole to [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ square units}}]]]. Sprawdzając z przyprostokątnymi, [[K=(3\\times4)/2=6]]. Oba wzory opisują ten sam trójkąt, więc muszą być zgodne, i rzeczywiście są." },
          { "kind": "h3", "text": "Przykład 2: trójkąt prostokątny 5-12-13" },
          { "kind": "p", "text": "Dane: [[a=5]], [[b=12]], [[c=13]]. Wysokość to [[h=(5\\times12)/13=60/13\\approx4.61538]]. Zachowując dokładny ułamek, [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ square units}}]]]. Zachowanie [[60/13]] zamiast zaokrąglonej liczby dziesiętnej zapobiega wczesnemu błędowi zaokrąglenia: 13 skraca się dokładnie, zostawiając czyste 30." },
          { "kind": "h3", "text": "Przykład 3: trójkąt prostokątny 6-8-10" },
          { "kind": "p", "text": "Dane bezpośrednio: [[c=10]] i [[h=4.8]]. Wtedy [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]. Dla przyprostokątnych 6 i 8, [[K=(6\\times8)/2=24]], co potwierdza drogę z wysokością." },
          { "kind": "h3", "text": "Przykład 4: trójkąt prostokątny równoramienny" },
          { "kind": "p", "text": "Dane: [[c=10]] i [[h=5]]. Wtedy [[K=(10\\times5)/2]], [[[\\boxed{K=25\\text{ square units}}]]]. Jest to największe pole, jakie może mieć dowolny trójkąt prostokątny o przeciwprostokątnej 10. Wysokość równa połowie przeciwprostokątnej występuje tylko wtedy, gdy przyprostokątne są równe, czyniąc każdy kąt ostry [[45^\\circ]], a żaden prawidłowy trójkąt prostokątny o tej przeciwprostokątnej nie może przekroczyć 25 jednostek kwadratowych." }
        ]
      },
      "sec-applications": {
        "h2": "Zastosowania pola trójkąta prostokątnego z wysokości w życiu codziennym",
        "blocks": [
          { "kind": "p", "text": "Dwanaście rozwiązanych sytuacji pokazuje wzór w różnych skalach i różnych jednostkach. Każda nazywa trójkąt w scenie, dwa pomiary, podstawienie, pole i założenie leżące u podstaw modelu." },
          { "kind": "h3", "text": "Przykład 1: trójkątna grządka ogrodowa" },
          { "kind": "p", "text": "Trójkątna, prostokątna grządka ogrodowa ma najdłuższą granicę 10 m, a prostopadła odległość od rogu z kątem prostym do tej granicy wynosi 4.8 m. Zatem [[c=10\\text{ m}]] i [[h=4.8\\text{ m}]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Grządka zajmuje 24 metry kwadratowe. Zakłada to prostą granicę i róg będący prawdziwym kątem prostym." },
          { "kind": "h3", "text": "Przykład 2: trójkątny panel ze sklejki" },
          { "kind": "p", "text": "Trójkątny, prostokątny panel ze sklejki ma przeciwprostokątną 1 m i wysokość prostopadłą 0.48 m: [[K=(1\\times0.48)/2]], [[[\\boxed{K=0.24\\text{ m}^2}]]]. To płaska powierzchnia jednej ściany, przydatna do szacowania pokrycia. Odpady z cięcia i dodatki materiałowe to osobne zagadnienia." },
          { "kind": "h3", "text": "Przykład 3: trójkątne okno ze szkła" },
          { "kind": "p", "text": "Trójkątny, prostokątny panel szklany ma przeciwprostokątną 1.3 m i wysokość 0.6 m prostopadłą do tego boku: [[K=(1.3\\times0.6)/2]], [[[\\boxed{K=0.39\\text{ m}^2}]]]. Jest to geometryczna powierzchnia szkła, zanim uwzględni się pokrycie ramą lub dodatki montażowe." },
          { "kind": "h3", "text": "Przykład 4: pomiar geodezyjny trójkątnej sekcji" },
          { "kind": "p", "text": "Rysunek geodezyjny zawiera trójkąt prostokątny o przeciwprostokątnej 13 m i wysokości [[60/13]] m. Zachowując ułamek: [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Rysunek reprezentuje sekcję 30 metrów kwadratowych. Rzeczywiste prace terenowe mogą wciąż wymagać korekt instrumentów wykraczających poza plan." },
          { "kind": "h3", "text": "Przykład 5: pomiar trójkątnej płytki" },
          { "kind": "p", "text": "Trójkątna, prostokątna płytka ma przeciwprostokątną 25 cm i wysokość prostopadłą 6.72 cm: [[K=(25\\times6.72)/2]], [[[\\boxed{K=84\\text{ cm}^2}]]]. Jedna płytka pokrywa 84 centymetry kwadratowe, co pomaga oszacować, ile płytek potrzebuje powierzchnia. Szczeliny fugowe i straty z cięcia liczy się osobno." },
          { "kind": "h3", "text": "Przykład 6: stalowy panel wspornikowy" },
          { "kind": "p", "text": "Płaski trójkątny, prostokątny panel wspornikowy ma przeciwprostokątną 1.7 m przy przyprostokątnych 0.8 m i 1.5 m. Jego wysokość to [[h=(0.8\\times1.5)/1.7=12/17]] m. Wtedy [[K=(1.7\\times(12/17))/2]], [[[\\boxed{K=0.6\\text{ m}^2}]]]. To geometryczne pole panelu, a nie jego nośność." },
          { "kind": "h3", "text": "Przykład 7: boczny panel trójkątnej rampy" },
          { "kind": "p", "text": "Uproszczony boczny panel rampy tworzy trójkąt prostokątny o przeciwprostokątnej 5 m i wysokości prostopadłej 2.4 m do tej przeciwprostokątnej: [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Jest to płaskie pole trójkątnej sekcji bocznej, a nie nachylonej powierzchni rampy, a obliczenie nie ustala zgodności z dostępnością." },
          { "kind": "h3", "text": "Przykład 8: trójkątny szczyt dachu" },
          { "kind": "p", "text": "Trójkątny, prostokątny przekrój szczytu dachu ma przeciwprostokątną 6.5 m i wysokość prostopadłą [[30/13]] m: [[K=(6.5\\times(30/13))/2]], [[[\\boxed{K=7.5\\text{ m}^2}]]]. Wynik opisuje trójkątną płaszczyznę daną pomiarami. Całkowita powierzchnia prawdziwego dachu to osobny problem pomiaru trójwymiarowego." },
          { "kind": "h3", "text": "Przykład 9: trójkątna działka gruntu" },
          { "kind": "p", "text": "Trójkątny, prostokątny fragment gruntu ma przeciwprostokątną 50 m i wysokość prostopadłą 24 m: [[K=(50\\times24)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]. Zmierzone granice zamykają 600 metrów kwadratowych. Oficjalna wartość pola może wciąż wymagać weryfikacji geodezyjnej." },
          { "kind": "h3", "text": "Przykład 10: duża trójkątna działka pomiarowa" },
          { "kind": "p", "text": "Pomierzona trójkątna, prostokątna sekcja ma przeciwprostokątną 100 m i wysokość prostopadłą 48 m: [[K=(100\\times48)/2]], [[[\\boxed{K=2400\\text{ m}^2}]]]. Jest to planarne pole trójkątnej sekcji. Reprezentuje całą nieruchomość tylko wtedy, gdy nieruchomość składa się wyłącznie z tego trójkąta." },
          { "kind": "h3", "text": "Przykład 11: trójkątna sekcja żagla" },
          { "kind": "p", "text": "Płaski projekt trójkątnego, prostokątnego żagla ma przeciwprostokątną 15 ft i wysokość prostopadłą 7.2 ft: [[K=(15\\times7.2)/2]], [[[\\boxed{K=54\\text{ ft}^2}]]]. Jest to planarne pole wyidealizowanego żagla. Zakrzywiona tkanina, szwy i dodatki krawędziowe wymagają osobnego uwzględnienia." },
          { "kind": "h3", "text": "Przykład 12: mały wspornik mechaniczny" },
          { "kind": "p", "text": "Płaski trójkątny, prostokątny wspornik ma przeciwprostokątną 250 mm i wysokość prostopadłą 120 mm: [[K=(250\\times120)/2]], [[[\\boxed{K=15000\\text{ mm}^2}]]]. Odpowiedź jest w milimetrach kwadratowych, ponieważ dane wejściowe są w milimetrach. Ponieważ [[1\\text{ cm}^2=100\\text{ mm}^2]], równa się to [[[\\boxed{150\\text{ cm}^2}]]]. Przeliczenie jednostki liniowej i przeliczenie jednostki kwadratowej to różne operacje, jak wyjaśnia sekcja o jednostkach." },
          { "kind": "h3", "text": "Porównanie przykładów praktycznych" }
        ],
        "table": {
          "headers": ["Sytuacja", "Przeciwprostokątna c", "Wysokość h", "Wzór", "Obliczone pole", "Interpretacja praktyczna"],
          "rows": [
            ["Grządka ogrodowa", "10 m", "4.8 m", "[[K=ch/2]]", "24 m²", "Powierzchnia sadzenia"],
            ["Panel ze sklejki", "1 m", "0.48 m", "[[K=ch/2]]", "0.24 m²", "Pokrycie materiału, bez odpadów"],
            ["Okno szklane", "1.3 m", "0.6 m", "[[K=ch/2]]", "0.39 m²", "Powierzchnia szkła przed ramą"],
            ["Rysunek geodezyjny", "13 m", "60/13 m", "[[K=ch/2]]", "30 m²", "Pole sekcji na planie"],
            ["Płytka", "25 cm", "6.72 cm", "[[K=ch/2]]", "84 cm²", "Powierzchnia jednej płytki"],
            ["Panel stalowy", "1.7 m", "12/17 m", "[[K=ch/2]]", "0.6 m²", "Geometria, nie nośność"],
            ["Boczny panel rampy", "5 m", "2.4 m", "[[K=ch/2]]", "6 m²", "Sekcja boczna, nie powierzchnia rampy"],
            ["Szczyt dachu", "6.5 m", "30/13 m", "[[K=ch/2]]", "7.5 m²", "Trójkątny przekrój poprzeczny"],
            ["Działka gruntu", "50 m", "24 m", "[[K=ch/2]]", "600 m²", "Zamknięte pole, zweryfikuj geodezyjnie"],
            ["Działka pomiarowa", "100 m", "48 m", "[[K=ch/2]]", "2400 m²", "Sekcja, nie cała nieruchomość"],
            ["Sekcja żagla", "15 ft", "7.2 ft", "[[K=ch/2]]", "54 ft²", "Wyidealizowany płaski żagiel"],
            ["Wspornik", "250 mm", "120 mm", "[[K=ch/2]]", "15000 mm²", "Równa się 150 cm²"]
          ]
        },
        "imgAlt": "Cztery przykłady: ogród, panel szklany, działka i wspornik, każdy z przeciwprostokątną c, wysokością h i obliczonym polem",
        "figcaption": "Ten sam wzór w czterech skalach: ogród, panel szklany, działka i wspornik maszynowy."
      },
      "sec-equal": {
        "h2": "Dlaczego oba wzory na pole trójkąta prostokątnego dają tę samą odpowiedź",
        "blocks": [
          { "kind": "p", "text": "Trójkąt prostokątny można zmierzyć przez jego dwie prostopadłe przyprostokątne lub przez przeciwprostokątną i wysokość. Wzór z przyprostokątnymi to [[K=ab/2]], a wzór z wysokością to [[K=ch/2]]. Ponieważ oba opisują pole tego samego trójkąta, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Pomnóż obie strony przez dwa: [[ab=ch]]. Rozwiąż dla [[h]]: [[[\\boxed{h=\\frac{ab}{c}}]]]. Wysokość to iloczyn przyprostokątnych podzielony przez przeciwprostokątną, dlatego oba wzory nigdy nie mogą być niezgodne dla spójnego trójkąta." },
          { "kind": "p", "text": "Weryfikacja numeryczna: dla [[a=6]], [[b=8]], [[c=10]] wysokość to [[h=(6\\times8)/10=4.8]]. Z przyprostokątnych: [[K=(6\\times8)/2=24]]. Z wysokości: [[K=(10\\times4.8)/2=24]]. Ten sam trójkąt, to samo pole, dwie drogi." },
          { "kind": "p", "text": "Gdy znane są tylko przeciwprostokątna i wysokość, pole jest już ustalone: nie ma potrzeby najpierw odtwarzać przyprostokątnych. Długości przyprostokątnych można wciąż odzyskać z prawidłowych [[c]] i [[h]] przez zależności odcinkowe poniżej, ale to osobne obliczenie od wyznaczania pola. Gdy znanymi danymi są przyprostokątne, <a href=\"/right-triangle-area-from-legs-calculator/\">Kalkulator pola trójkąta prostokątnego z przyprostokątnych</a> przyjmuje je bezpośrednio." }
        ]
      },
      "sec-geomean": {
        "h2": "Jak wysokość dzieli trójkąt prostokątny",
        "blocks": [
          { "kind": "p", "text": "Wysokość spotyka przeciwprostokątną w [[D]], dzieląc ją na odcinki [[AD=p]] i [[DB=q]], więc [[p+q=c]]. Ten podział tworzy dwa mniejsze trójkąty prostokątne zagnieżdżone wewnątrz pierwotnego, a ich proporcje są niezwykle schludne." },
          { "kind": "h3", "text": "Dwa mniejsze podobne trójkąty prostokątne" },
          { "kind": "p", "text": "Wysokość dzieli pierwotny trójkąt na dwa mniejsze trójkąty prostokątne, każdy mający jeden wspólny kąt ostry z pierwotnym i każdy zawierający kąt prosty. Współdzielenie dwóch miar kątów sprawia, że wszystkie trzy trójkąty są podobne. Podobieństwo wymusza czyste zależności proporcjonalne między wysokością, odcinkami i przyprostokątnymi." },
          { "kind": "h3", "text": "Twierdzenie o średniej geometrycznej wysokości" },
          { "kind": "p", "text": "Podobieństwo daje [[[\\boxed{h^2=pq}]]], lub równoważnie [[[\\boxed{h=\\sqrt{pq}}]]]. Wysokość jest średnią geometryczną dwóch odcinków przeciwprostokątnej: jej kwadrat równa się ich iloczynowi. Rozwiązany przykład: przy [[p=6.4]] i [[q=3.6]], [[c=p+q=10]] oraz [[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]], [[[\\boxed{h=4.8}]]]. Pole wynika: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]. Twierdzenie odcinkowe weryfikuje wysokość zmierzoną lub obliczoną inną drogą." },
          { "kind": "h3", "text": "Zależność między odcinkami a przyprostokątnymi" },
          { "kind": "p", "text": "To samo podobieństwo daje [[b^2=cp]] i [[a^2=cq]]. Przy [[c=10]], [[p=6.4]], [[q=3.6]]: [[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]] i [[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]. Pierwotny trójkąt 6-8-10 jest odtworzony dokładnie, co pokazuje, jak ściśle odcinki, wysokość i przyprostokątne są ze sobą związane." }
        ]
      },
      "sec-max": {
        "h2": "Jak duża może być wysokość trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "Nie każda para dodatnich liczb może być przeciwprostokątną i wysokością. Dla prawidłowego, niezdegenerowanego trójkąta prostokątnego [[[\\boxed{0<h\\leq\\frac{c}{2}}]]]. Wysokość musi być dodatnia i nigdy nie może przekroczyć połowy przeciwprostokątnej." },
          { "kind": "h3", "text": "Dlaczego wysokość nie może przekroczyć połowy przeciwprostokątnej" },
          { "kind": "p", "text": "Z [[h^2=pq]] przy [[p+q=c]] iloczyn [[pq]] jest największy, gdy oba odcinki są równe, [[p=q=c/2]]. Zatem [[h^2\\leq c^2/4]], a dla dodatnich długości [[h\\leq c/2]]. Mówiąc wprost: wysokość jest najwyższa, gdy dzieli przeciwprostokątną na dwie równe połowy, i nawet wtedy osiąga tylko połowę przeciwprostokątnej." },
          { "kind": "h3", "text": "Maksymalne pole dla ustalonej przeciwprostokątnej" },
          { "kind": "p", "text": "Ponieważ [[K=ch/2]] i [[h\\leq c/2]], największe możliwe pole to [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]. To maksimum należy do trójkąta prostokątnego równoramiennego, w którym obie przyprostokątne są równe. Przy [[c=10]] najwyższą prawidłową wysokością jest [[h_{\\max}=5]], dając [[K_{\\max}=(10\\times5)/2=25]]. Wysokość 6 przy przeciwprostokątnej 10 jest niemożliwa dla trójkąta prostokątnego." },
          { "kind": "h3", "text": "Co się dzieje, gdy wysokość jest zbyt duża?" },
          { "kind": "p", "text": "Weź [[c=10]] i [[h=6]]: [[6>5]], więc żaden trójkąt prostokątny nie ma tych pomiarów. Arytmetyka [[(10\\times6)/2=30]] jest prawidłowym polem dla jakiegoś trójkąta w ogólniejszym ujęciu, ale nie czyni [[c=10]], [[h=6]] prawidłowym wejściem trójkąta prostokątnego. Ta strona nie twierdzi, że kalkulator automatycznie odrzuca takie wejście; kontrola należy do Ciebie." },
          { "kind": "h3", "text": "Czy wysokość może równać się połowie przeciwprostokątnej?" },
          { "kind": "p", "text": "Tak. Równość daje trójkąt prostokątny równoramienny o dwóch równych przyprostokątnych, prawidłowy niezdegenerowany trójkąt. Jest to przypadek graniczny, a nie zepsuty." }
        ],
        "imgAlt": "Trójkąt 6-8-10: wysokość dzieli przeciwprostokątną na p = 6.4 i q = 3.6; trójkąt równoramienny przy maksymalnej wysokości c/2",
        "figcaption": "Po lewej: wysokość jest średnią geometryczną odcinków przeciwprostokątnej. Po prawej: najwyższa możliwa wysokość to połowa przeciwprostokątnej, dająca maksymalne pole."
      },
      "sec-find-altitude": {
        "h2": "Jak obliczyć wysokość, gdy jest nieznana",
        "blocks": [
          { "kind": "p", "text": "Ten kalkulator przyjmuje [[h]] jako dane wejściowe, więc nieznaną wysokość trzeba najpierw wyznaczyć lub zmierzyć. Trzy standardowe drogi obejmują typowe przypadki. Gdy boki są znane, a wysokość jest brakującym elementem, <a href=\"/right-triangle-altitude-from-sides-calculator/\">Kalkulator wysokości trójkąta prostokątnego z boków</a> oblicza ją bezpośrednio." },
          { "kind": "h3", "text": "Metoda 1: użycie obu przyprostokątnych i przeciwprostokątnej" },
          { "kind": "p", "text": "[[[\\boxed{h=\\frac{ab}{c}}]]]. Przy [[a=6]], [[b=8]], [[c=10]]: [[h=(6\\times8)/10=4.8]]." },
          { "kind": "h3", "text": "Metoda 2: użycie odcinków przeciwprostokątnej" },
          { "kind": "p", "text": "[[[\\boxed{h=\\sqrt{pq}}]]]. Przy [[p=6.4]] i [[q=3.6]]: [[h=\\sqrt{23.04}=4.8]]." },
          { "kind": "h3", "text": "Metoda 3: użycie znanego pola i przeciwprostokątnej" },
          { "kind": "p", "text": "Przekształcenie [[K=ch/2]] daje [[[\\boxed{h=\\frac{2K}{c}}]]]. Przy [[K=24]] i [[c=10]]: [[h=(2\\times24)/10=4.8]]." },
          { "kind": "p", "text": "To matematyczne przekształcenia, a nie dodatkowe tryby kalkulatora: sam kalkulator pola z wysokości wciąż oczekuje wysokości jako danych wejściowych." }
        ]
      },
      "sec-units": {
        "h2": "Jednostki kwadratowe w obliczeniach pola trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Pole jest dwuwymiarowe. Mnożenie dwóch długości mnoży też ich jednostki: [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Jednostka pola jest zawsze kwadratem jednostki długości." },
          { "kind": "h3", "text": "Metry kwadratowe" },
          { "kind": "p", "text": "Przy [[c=10\\text{ m}]] i [[h=4.8\\text{ m}]], [[K=24\\text{ m}^2]]. Czytaj jako 24 metry kwadratowe powierzchni." },
          { "kind": "h3", "text": "Centymetry kwadratowe" },
          { "kind": "p", "text": "Przy [[c=25\\text{ cm}]] i [[h=6.72\\text{ cm}]], [[K=84\\text{ cm}^2]]." },
          { "kind": "h3", "text": "Milimetry kwadratowe" },
          { "kind": "p", "text": "Przy [[c=250\\text{ mm}]] i [[h=120\\text{ mm}]], [[K=15000\\text{ mm}^2]]." },
          { "kind": "h3", "text": "Przeliczanie jednostek pola" },
          { "kind": "p", "text": "[[1\\text{ m}^2=10000\\text{ cm}^2]] i [[1\\text{ cm}^2=100\\text{ mm}^2]]. Przeliczenie liniowe mnoży przez 10, 100 lub 1000, ale przeliczenie pola kwadratuje ten współczynnik: 100 cm w metrze staje się [[100^2=10000]] centymetrów kwadratowych w metrze kwadratowym. Przeliczanie długości i przeliczanie pola to różne operacje." },
          { "kind": "h3", "text": "Co jeśli dane wejściowe używają różnych jednostek?" },
          { "kind": "p", "text": "Najpierw przelicz, potem obliczaj. Przeciwprostokątna w metrach i wysokość w centymetrach muszą zostać sprowadzone do jednej jednostki, na przykład 2 m i 150 cm stają się 2 m i 1.5 m, zanim zostanie zastosowany wzór. Mieszane jednostki we wzorze dają bezsensowną liczbę bez czystej jednostki." }
        ]
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy stosowaniu wzoru na pole z wysokością",
        "blocks": [
          { "kind": "p", "text": "Większość błędnych odpowiedzi na tej stronie pochodzi z błędnie oznaczonych danych wejściowych, a nie ze złej arytmetyki. Osiemnaście poniższych błędów obejmuje niemal wszystkie." },
          { "kind": "h3", "text": "1. Użycie przyprostokątnej zamiast wysokości" },
          { "kind": "p", "text": "Wysokość [[h]] opada z wierzchołka kąta prostego na przeciwprostokątną; przyprostokątna biegnie wzdłuż krawędzi trójkąta. W trójkącie 6-8-10 wprowadzenie przyprostokątnej 6 jako wysokości daje [[(10\\times6)/2=30]] zamiast 24. Poprawka: wysokość musi lądować na przeciwprostokątnej ze znacznikiem kąta prostego." },
          { "kind": "h3", "text": "2. Mylenie wysokości z przeciwprostokątną" },
          { "kind": "p", "text": "Zamiana [[c]] i [[h]] zmienia znaczenie iloczynu. Przy [[c=10]] i [[h=4.8]] liczby przemieszczają się w mnożeniu, ale kontrola wykonalności [[h\\leq c/2]] psuje się: zamienione wejście twierdzi wysokość 10 przy przeciwprostokątnej 4.8, co jest niemożliwe. Poprawka: przeciwprostokątna jest zawsze najdłuższym bokiem." },
          { "kind": "h3", "text": "3. Prowadzenie wysokości z niewłaściwego wierzchołka" },
          { "kind": "p", "text": "Tylko wysokość poprowadzona z wierzchołka kąta prostego [[C]] pasuje do przeciwprostokątnej jako swojej podstawy. Prostopadła z wierzchołka ostrego pada na przyprostokątną, nie na przeciwprostokątną, i nie należy do tego wzoru. Poprawka: zacznij od kwadratowego rogu." },
          { "kind": "h3", "text": "4. Mierzenie wysokości pod kątem nieprostopadłym" },
          { "kind": "p", "text": "Każdy nieprostopadły odcinek od [[C]] do przeciwprostokątnej jest dłuższy niż prawdziwa wysokość, więc pole wychodzi za duże. Poprawka: zweryfikuj spotkanie pod 90 stopni, konstrukcyjnie lub kontrolą [[h=ab/c]]." },
          { "kind": "h3", "text": "5. Użycie wysokości pasującej do innej podstawy" },
          { "kind": "p", "text": "Wysokość opuszczona na przeciwprostokątną pasuje tylko do przeciwprostokątnej. Sparowanie jej z przyprostokątną, jak w [[(8\\times4.8)/2=19.2]], miesza dwie różne pary podstawa-wysokość. Poprawka: każda wysokość należy do dokładnie jednej podstawy." },
          { "kind": "h3", "text": "6. Zapomnienie o podzieleniu przez dwa" },
          { "kind": "p", "text": "[[10\\times4.8=48]] to pole równoległoboku, a nie trójkąta. Poprawka: każde obliczenie podstawa-wysokość kończ dzieleniem przez dwa." },
          { "kind": "h3", "text": "7. Mnożenie długości w niezgodnych jednostkach" },
          { "kind": "p", "text": "Przeciwprostokątna 2 m z wysokością 150 cm to nie [[(2\\times150)/2=150]] czegokolwiek sensownego. Poprawka: najpierw przelicz na jedną jednostkę, tutaj 2 m i 1.5 m, co daje 1.5 m²." },
          { "kind": "h3", "text": "8. Podawanie odpowiedzi w jednostkach liniowych" },
          { "kind": "p", "text": "Pole 24 m² to nie 24 m. Poprawka: zawsze zapisuj jednostkę kwadratową wraz z liczbą." },
          { "kind": "h3", "text": "9. Wprowadzanie zerowych lub ujemnych długości" },
          { "kind": "p", "text": "[[c>0]] i [[h>0]] są wymagane; zerowe lub ujemne dane wejściowe nie opisują żadnego trójkąta. Poprawka: zmierz ponownie." },
          { "kind": "h3", "text": "10. Wprowadzanie wysokości większej niż połowa przeciwprostokątnej" },
          { "kind": "p", "text": "[[c=10]], [[h=6]] narusza [[h\\leq c/2]]. Poprawka: sprawdź ponownie, który odcinek zmierzono; nie była to wysokość prostopadła." },
          { "kind": "h3", "text": "11. Zakładanie, że każda dodatnia para tworzy trójkąt prostokątny" },
          { "kind": "p", "text": "Dodatniość nie wystarcza; musi też zachodzić limit wysokości. Poprawka: dla każdej nowej pary uruchom kontrolę [[h\\leq c/2]]." },
          { "kind": "h3", "text": "12. Mylenie wysokości z pionową przyprostokątną" },
          { "kind": "p", "text": "Na diagramie wysokość może wyglądać na pionową, podczas gdy przyprostokątna wygląda na nachyloną, albo odwrotnie po obrocie. Pionowość na ekranie nic nie znaczy. Poprawka: identyfikuj boki po ich roli geometrycznej, a nie po kierunku na ekranie." },
          { "kind": "h3", "text": "13. Zaokrąglanie wysokości zbyt wcześnie" },
          { "kind": "p", "text": "Użycie 4.6 dla [[60/13\\approx4.61538]] i dalsze obliczanie daje nieco błędne pole, podczas gdy dokładny ułamek skraca się czysto do 30. Poprawka: zachowaj pełną precyzję do końcowej odpowiedzi." },
          { "kind": "h3", "text": "14. Zakładanie, że przeciwprostokątna musi być pozioma" },
          { "kind": "p", "text": "Przeciwprostokątna może leżeć pod dowolnym kątem; wzór używa długości, a nie orientacji. Poprawka: ufaj pomiarom, a nie obrotowi rysunku." },
          { "kind": "h3", "text": "15. Mylenie twierdzenia o wysokości z twierdzeniem Pitagorasa" },
          { "kind": "p", "text": "[[h^2=pq]] wiąże wysokość z odcinkami przeciwprostokątnej; [[a^2+b^2=c^2]] wiąże trzy boki. Odpowiadają na różne pytania. Poprawka: dopasuj twierdzenie do wielkości, które posiadasz." },
          { "kind": "h3", "text": "16. Użycie wysokości zmierzonej z innego trójkąta" },
          { "kind": "p", "text": "Wysokość należy do jednego konkretnego trójkąta. Pożyczenie 4.8 z trójkąta 6-8-10 dla innej przeciwprostokątnej daje błędne pole. Poprawka: każde obliczenie używa pomiarów własnego trójkąta." },
          { "kind": "h3", "text": "17. Zakładanie, że pole wyznacza każdą długość boku" },
          { "kind": "p", "text": "Wiele różnych trójkątów prostokątnych dzieli jedno pole. Znajomość [[K=24]] nie ustala [[c]] ani [[h]] z osobna. Poprawka: traktuj pole jako jedno równanie, a nie pełny opis." },
          { "kind": "h3", "text": "18. Traktowanie pola geometrycznego jako dokładnego materiału do zakupu" },
          { "kind": "p", "text": "Wzór daje idealne pole geometryczne. Prawdziwe projekty potrzebują na to zapasu na odpady, zakładki i dodatki na cięcie. Poprawka: dodaj margines projektu po zakończeniu geometrii." },
          { "kind": "h3", "text": "Błędnie a poprawnie: konkretny przykład" },
          { "kind": "p", "text": "Przy [[c=10]] i [[h=4.8]] błędne obliczenie pomija dzielenie przez dwa: [[K=10\\times4.8=48]]. To pole odpowiadającego równoległoboku. Poprawne obliczenie to [[K=(10\\times4.8)/2]], [[[\\boxed{K=24}]]]. Druga ilustracja: podstawienie przyprostokątnej 8 za wysokość daje [[(10\\times8)/2=40]], błędnie, ponieważ 8 nie jest prostopadłe do przeciwprostokątnej. Do [[c]] pasuje wysokość, i tylko wysokość." }
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy obliczenie pola jest poprawne",
        "blocks": [
          { "kind": "p", "text": "Siedem kontroli wyłapuje zdecydowaną większość złych wyników, zanim opuszczą stronę." },
          { "kind": "h3", "text": "Kontrola 1: dodatnie dane wejściowe" },
          { "kind": "p", "text": "Dla prawidłowego trójkąta prostokątnego [[c>0]] i [[h>0]]. Zerowe lub ujemne długości nie opisują żadnego trójkąta." },
          { "kind": "h3", "text": "Kontrola 2: limit wysokości" },
          { "kind": "p", "text": "Potwierdź [[h\\leq c/2]]. Ta pojedyncza nierówność eliminuje najczęstsze niemożliwe wejście, takie jak [[c=10]] przy [[h=6]]." },
          { "kind": "h3", "text": "Kontrola 3: potwierdzenie kąta prostego" },
          { "kind": "p", "text": "Wysokość musi być prostopadła do przeciwprostokątnej. Jeśli rysunek ani pomiar nie potrafią potwierdzić spotkania pod 90 stopni, wejście nie jest wysokością." },
          { "kind": "h3", "text": "Kontrola 4: jednostki kwadratowe" },
          { "kind": "p", "text": "Wejścia w metrach dają metry kwadratowe, wejścia w centymetrach dają centymetry kwadratowe. Jednostka odpowiedzi to kwadrat jednostki wejściowej, nigdy sama jednostka wejściowa." },
          { "kind": "h3", "text": "Kontrola 5: kontrola krzyżowa ze wzorem z przyprostokątnymi" },
          { "kind": "p", "text": "Dla trójkąta 6-8-10, [[(6\\times8)/2=24]] i [[(10\\times4.8)/2=24]]. Dwie metody, jeden trójkąt, jedna odpowiedź: zgodność to najsilniejsza dostępna weryfikacja." },
          { "kind": "h3", "text": "Kontrola 6: zależność średniej geometrycznej" },
          { "kind": "p", "text": "Gdy znane są odcinki przeciwprostokątnej, zweryfikuj [[h^2=pq]]: [[4.8^2=6.4\\times3.6]], [[23.04=23.04]]. Niezgodność oznacza, że wysokość, odcinki lub identyfikacja trójkąta jest błędna." },
          { "kind": "h3", "text": "Kontrola 7: porównanie z maksymalnym możliwym polem" },
          { "kind": "p", "text": "Dla ustalonej przeciwprostokątnej [[K\\leq c^2/4]]. Przy [[c=10]] każde deklarowane pole trójkąta prostokątnego powyżej 25 jednostek kwadratowych jest niemożliwe. Ta strona nie składa żadnych oświadczeń o własnym zachowaniu walidacyjnym kalkulatora; kontrola należy do Ciebie." }
        ]
      },
      "sec-compare": {
        "h2": "Pole z wysokości a pole z dwóch przyprostokątnych",
        "blocks": [
          { "kind": "p", "text": "Dwa wzory, jedno pole. [[K=ab/2]] potrzebuje dwóch prostopadłych przyprostokątnych; [[K=ch/2]] potrzebuje przeciwprostokątnej i jej wysokości. Żaden nie jest bardziej poprawny; to ta sama wielkość osiągnięta z różnych pomiarów." },
          { "kind": "p", "text": "Pole tego samego trójkąta prostokątnego nie zmienia się, gdy zastosowana zostanie inna prawidłowa metoda. Wybierz wiersz pasujący do liczb, które już masz w ręku; gdy dostępne są dwa wiersze, ich zgodność jest darmową kontrolą poprawności." }
        ],
        "table": {
          "headers": ["Metoda", "Wymagane pomiary", "Główna zaleta"],
          "rows": [
            ["Pole z przyprostokątnych", "[[a]], [[b]]", "Najprostsze, gdy znane są obie przyprostokątne"],
            ["Pole z wysokości", "[[c]], [[h]]", "Bezpośrednie, gdy znane są przeciwprostokątna i wysokość prostopadła"],
            ["Pole z kąta", "Odpowiednie boki i zawarty kąt", "Przydatne, gdy znany jest kąt ostry"],
            ["Pole z promienia okręgu wpisanego", "[[r]], [[s]]", "Przydatne w zadaniach z okręgiem wpisanym i półobwodem"]
          ]
        }
      },
      "sec-conclusion": {
        "h2": "Przeciwprostokątna i jej wysokość to wszystko, czego potrzebujesz",
        "blocks": [
          { "kind": "p", "text": "Metoda z wysokością to reguła podstawa-wysokość skierowana na najdłuższy bok. Gdy przeciwprostokątna zostanie zidentyfikowana, a wysokość prostopadła jest w ręku, pole jest oddalone o jedno mnożenie i jedno dzielenie przez dwa, bez potrzeby wcześniejszego odtwarzania przyprostokątnych." },
          { "kind": "p", "text": "Jej prawdziwą siłą jest dyscyplina: prostopadłość, limit wysokości i zależności średniej geometrycznej zamieniają niejasne szkice trójkątów w sprawdzalne liczby. Uruchom kontrole, porównaj ze wzorem z przyprostokątnymi, gdy przyprostokątne są dostępne, a odpowiedź zasłuży na zaufanie." },
          { "kind": "p", "text": "Zachowaj kalkulator tej strony na przypadki, w których przeciwprostokątna i wysokość są zmierzonymi danymi, i sięgaj po kalkulatory przyprostokątnych, kąta lub półobwodu, gdy pomiary wskazują gdzie indziej." }
        ]
      }
    },
    "faqs": [
      { "question": "Jaki jest wzór na pole trójkąta prostokątnego z wysokości?", "answer": "Wzór to K = ch/2, gdzie c to przeciwprostokątna, a h to wysokość prostopadła poprowadzona z wierzchołka kąta prostego do przeciwprostokątnej. Pomnóż obie długości i podziel przez dwa. Wynik jest w jednostkach kwadratowych zgodnych z danymi wejściowymi, więc dane w metrach dają metry kwadratowe. Wysokość musi spotykać przeciwprostokątną pod kątem 90 stopni, aby wzór miał zastosowanie." },
      { "question": "Co oznacza wysokość h w trójkącie prostokątnym?", "answer": "Wysokość h to odcinek prostopadły poprowadzony z wierzchołka kąta prostego C do przeciwprostokątnej, spotykający ją w punkcie D. Jest to najkrótsza odległość od tego wierzchołka do przeciwprostokątnej i wysokość pasująca do przeciwprostokątnej jako podstawy. Nie jest przyprostokątną ani dowolną linią narysowaną wewnątrz trójkąta." },
      { "question": "Czy wysokość jest tym samym co jedna z przyprostokątnych?", "answer": "Nie. Przyprostokątne a i b tworzą kąt prosty, podczas gdy wysokość to osobny odcinek poprowadzony z tego wierzchołka do przeciwległego boku. W trójkącie 6-8-10 wysokość wynosi 4.8, co nie odpowiada żadnej przyprostokątnej. Wprowadzenie przyprostokątnej tam, gdzie należy wysokość, jest jednym z najczęstszych błędów przy tym wzorze." },
      { "question": "Dlaczego przeciwprostokątną można użyć jako podstawy?", "answer": "Każdy bok trójkąta może służyć jako podstawa, gdy znana jest jego odpowiadająca wysokość prostopadła. Dla przeciwprostokątnej tą wysokością jest wysokość poprowadzona z wierzchołka kąta prostego. Ponieważ obie są prostopadłe, ogólna reguła połowy iloczynu podstawy i wysokości stosuje się bezpośrednio, dając K = ch/2." },
      { "question": "Dlaczego iloczyn przeciwprostokątnej i wysokości dzielimy przez dwa?", "answer": "Iloczyn c razy h to pole równoległoboku zbudowanego na tej samej podstawie przy tej samej wysokości. Trójkąt wypełnia dokładnie połowę tego równoległoboku, więc iloczyn trzeba podzielić przez dwa. Pominięcie dzielenia odpowiada na inne pytanie: przy c = 10 i h = 4.8 liczba 48 to równoległobok, a 24 to trójkąt." },
      { "question": "Jak wyznaczyć wysokość, gdy znane są obie przyprostokątne?", "answer": "Użyj h = ab/c. Pomnóż obie przyprostokątne i podziel przez przeciwprostokątną, którą w razie potrzeby otrzymasz z twierdzenia Pitagorasa. Dla przyprostokątnych 6 i 8 przy przeciwprostokątnej 10, h = 48/10 = 4.8. Kalkulator wysokości z boków na tej stronie wykonuje dokładnie to obliczenie, gdy boki są znane." },
      { "question": "Na czym polega twierdzenie o średniej geometrycznej dla wysokości trójkąta prostokątnego?", "answer": "Stwierdza ono, że kwadrat h równa się p razy q, gdzie p i q to dwa odcinki, na które wysokość dzieli przeciwprostokątną. Wysokość jest więc średnią geometryczną tych odcinków. Dla p = 6.4 i q = 3.6, h to pierwiastek kwadratowy z 23.04, czyli 4.8, co weryfikuje również wysokość wyznaczoną inną drogą." },
      { "question": "Czy wysokość może być dłuższa niż połowa przeciwprostokątnej?", "answer": "Nie. Dla prawidłowego trójkąta prostokątnego h musi spełniać 0 < h <= c/2. Wysokość jest najwyższa, gdy dzieli przeciwprostokątną na równe połowy, osiągając dokładnie c/2 w przypadku równoramiennym. Większa wartość, na przykład h = 6 przy c = 10, nie może należeć do trójkąta prostokątnego o takiej przeciwprostokątnej." },
      { "question": "Jak obliczyć pole, gdy znane są tylko przeciwprostokątna i wysokość?", "answer": "Zastosuj bezpośrednio K = ch/2. Odtwarzanie przyprostokątnych nie jest potrzebne, ponieważ pole jest już wyznaczone przez jeden bok i jego odpowiadającą wysokość. Na przykład c = 10 i h = 4.8 dają K = 24 jednostki kwadratowe. Najpierw tylko potwierdź, że wysokość jest prostopadła i nie większa niż połowa przeciwprostokątnej." },
      { "question": "Dlaczego wzór oparty na wysokości daje ten sam wynik co wzór z przyprostokątnymi?", "answer": "Oba obliczają pole tego samego trójkąta. Przyrównanie ab/2 do ch/2 i pomnożenie przez dwa daje ab = ch, więc h = ab/c. Oba wzory są algebraicznie równoważne dla każdego spójnego trójkąta prostokątnego, dlatego obliczanie obu jest tak silną kontrolą: zgodność potwierdza dane wejściowe." },
      { "question": "Jakich jednostek powinno używać wynikowe pole?", "answer": "Jednostek kwadratowych zgodnych z długościami wejściowymi: metry dają metry kwadratowe, centymetry dają centymetry kwadratowe, milimetry dają milimetry kwadratowe. Przed obliczeniem przelicz wszystkie dane wejściowe na jedną jednostkę. Pamiętaj, że przeliczenie pola kwadratuje współczynnik liniowy, więc jeden metr kwadratowy to 10 000 centymetrów kwadratowych." },
      { "question": "Czy wzór oparty na wysokości można stosować do innych trójkątów?", "answer": "Reguła podstawa-wysokość, czyli połowa iloczynu podstawy i wysokości, działa dla każdego trójkąta z pasującą parą prostopadłą. Specjalne są tu ograniczenia trójkąta prostokątnego: wysokość musi być opuszczona z wierzchołka kąta prostego, a h nigdy nie może przekroczyć c/2. Te ograniczenia nie dotyczą trójkątów ostrokątnych ani rozwartokątnych." }
    ],
    "faqHeading": "Częste pytania",
    "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator pola trójkąta prostokątnego",
      "Kalkulator pola trójkąta prostokątnego z przyprostokątnych",
      "Kalkulator wysokości trójkąta prostokątnego z boków",
      "Kalkulator pola trójkąta prostokątnego z półobwodu",
      "Kalkulator pola trójkąta prostokątnego z kąta",
      "Kalkulator obwodu trójkąta prostokątnego",
      "Kalkulator boków trójkąta prostokątnego"
    ]
  }
};
