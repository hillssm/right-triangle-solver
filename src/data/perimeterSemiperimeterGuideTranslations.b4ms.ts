export const B4_MS = {
  "ms": {
    "tocHeading": "Dalam panduan ini",
    "tocItems": {
      "sec-intro": "Cara Mengira Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
      "sec-right-triangle": "Apakah Segi Tiga Bersudut Tegak?",
      "sec-perimeter": "Apakah Perimeter Segi Tiga Bersudut Tegak?",
      "sec-semiperimeter": "Apakah Semiperimeter Segi Tiga Bersudut Tegak?",
      "sec-difference": "Perimeter vs. Semiperimeter: Apakah Perbezaannya?",
      "sec-modes": "Memahami Dua Mod Kalkulator",
      "sec-howto": "Cara Menggunakan Kalkulator Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
      "sec-examples": "Contoh Langkah demi Langkah Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
      "sec-practical": "Aplikasi Sebenar Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
      "sec-missing-side": "Cara Mengira Perimeter Apabila Satu Sisi Tiada",
      "sec-pythagoras": "Bagaimanakah Teorem Pythagoras Berkaitan dengan Perimeter Segi Tiga Bersudut Tegak?",
      "sec-advanced": "Bagaimanakah Semiperimeter Digunakan dalam Formula Segi Tiga Lain?",
      "sec-perimeter-area": "Apakah Perbezaan antara Perimeter dan Luas?",
      "sec-units": "Memahami Unit Ukuran dalam Pengiraan Perimeter dan Semiperimeter",
      "sec-scaling": "Bagaimanakah Perubahan Panjang Sisi Mempengaruhi Perimeter dan Semiperimeter?",
      "sec-applications": "Aplikasi Praktikal Perimeter Segi Tiga Bersudut Tegak",
      "sec-mistakes": "Kesilapan Biasa Apabila Mengira Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
      "sec-verify": "Cara Menyemak Sama Ada Perimeter Segi Tiga Bersudut Tegak Anda Betul",
      "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "sec-faq": "Soalan Lazim",
      "sec-conclusion": "Satu Sempadan, Dua Ukuran Berguna"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Mengira Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Ambil [[a=3]], [[b=4]], [[c=5]]. Perimeternya ialah [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]] Semiperimeternya ialah [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]] Inilah tepat yang dikembalikan oleh Kalkulator Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak untuk ketiga-tiga input ini." },
          { "kind": "p", "text": "Perimeter menerangkan sempadan lengkap segi tiga: jumlah panjang yang akan anda jejaki jika anda berjalan mengelilingi ketiga-tiga sisi dan kembali ke titik permulaan. Semiperimeter ialah separuh daripada jumlah berangka itu. Kedua-duanya ialah panjang, diukur dalam unit seperti meter, sentimeter, kaki, atau inci. Tiada satu pun daripadanya ialah luas, dan tiada satu pun daripadanya dilaporkan dalam unit persegi." },
          { "kind": "p", "text": "Tiga ukuran sisi diperlukan kerana sempadan mempunyai tiga tepi, dan hipotenus mesti disertakan: ia merupakan salah satu daripada tiga tepi walaupun ia tidak pernah menyentuh sudut tegak. Semiperimeter ialah separuh perimeter kerana beberapa formula lanjutan, termasuk formula Heron dan hubungan jejari dalam, dibina mengelilingi separuh sempadan bukannya keseluruhan. Kedua-dua pengiraan ini berguna apabila garis luar segi tiga perlu diukur: mengeping taman, menghias tepi bingkai, atau memasukkan satu panjang ke dalam formula seterusnya dalam masalah yang lebih panjang." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Apakah Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "p", "text": "Sebelum sebarang penambahan bermula, ketiga-tiga sisi mesti dilabel tanpa kesilapan. Simbol-simbol di bawah kekal tetap sepanjang panduan ini, dan kalkulator menggunakan nama yang sama." },
          { "kind": "h3", "text": "Definisi Segi Tiga Bersudut Tegak" },
          { "kind": "p", "text": "Segi tiga bersudut tegak ialah poligon tiga sisi yang mengandungi tepat satu sudut pedalaman 90 darjah. Ia mempunyai tiga bucu, tiga sisi, dua sudut tirus, dan satu sudut tegak yang biasanya ditanda dengan petak kecil. Dua sisi yang membentuk sudut tegak ialah kaki; sisi yang bertentangan ialah hipotenus. Memandangkan sudut-sudut mana-mana segi tiga berjumlah 180 darjah, [[A+B+C=180^\\circ]], dan dengan [[C=90^\\circ]] maka [[[\\boxed{A+B=90^\\circ}]]]: kedua-dua sudut tirus adalah pelengkap, jadi mengetahui satu akan menentukan satu lagi." },
          { "kind": "h3", "text": "Apakah Dua Kaki Itu?" },
          { "kind": "p", "text": "Kaki [[a]] terletak bertentangan dengan sudut [[A]]; kaki [[b]] terletak bertentangan dengan sudut [[B]]. Kedua-dua kaki bertemu di bucu sudut tegak dan berserenjang antara satu sama lain: setiap satu berdiri pada 90 darjah terhadap satu lagi. Ia membentuk penjuru petak segi tiga, jenis tepi yang akan anda ukur sepanjang penjuru dinding atau tepi meja. Untuk kerja perimeter, peranan mereka mudah: kedua-duanya ialah tepi sempadan, jadi kedua-duanya menyertai jumlah." },
          { "kind": "h3", "text": "Apakah Hipotenus?" },
          { "kind": "p", "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tegak, sentiasa sisi terpanjang segi tiga. Ia tidak pernah membentuk sudut tegak; ia merentanginya, menghubungkan hujung-hujung jauh kedua-dua kaki. Ia berbeza daripada kaki dari segi kedudukan dan panjang: kaki bertemu pada 90 darjah, manakala hipotenus bertemu setiap kaki pada sudut tirus. Ia mesti disertakan apabila mengira perimeter lengkap, kerana sempadan tidak lengkap sehingga ketiga-tiga tepi dikira. Jika kedua-dua kaki diketahui, teorem Pythagoras mendapatkannya semula melalui [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Mengapakah Sudut Tegak Penting?" },
          { "kind": "p", "text": "Sudut tegak itulah yang menjadikan segi tiga itu segi tiga bersudut tegak, dan segala-galanya berpunca daripadanya. Ia mengenal pasti bentuk dalam lukisan atau di tapak: cari penjuru petak dan pelabelan sisi akan jatuh ke tempatnya. Ia adalah syarat yang diperlukan oleh teorem Pythagoras sebelum ia boleh digunakan. Dalam ukuran pembinaan dan lukisan kejuruteraan, sudut tegak ialah rujukan yang segala-galanya disekukan: dinding, bingkai, dan pendakap disemak dengannya. Untuk pengesahan, sudut tegak ialah janji yang mesti ditepati oleh ketiga-tiga panjang sisi melalui [[a^2+b^2=c^2]]." },
          { "kind": "h3", "text": "Bagaimanakah Anda Boleh Mengenal Pasti Label Sisi yang Betul?" },
          { "kind": "p", "text": "[[a]] dan [[b]] ialah kaki, [[c]] ialah hipotenus, dan dalam segi tiga bersudut tegak tak merosot [[c]] ialah sisi terpanjang. Sudut tegak terletak bertentangan dengan [[c]], jadi bucu yang membawa penanda petak memberitahu anda sisi mana ialah [[c]]: ia ialah sisi yang tidak menyentuh bucu itu. Semakan susunan pantas membantu: susun ketiga-tiga nombor, dan yang terbesar mesti memainkan peranan [[c]]. Jika sisi terbesar tidak bertentangan dengan penjuru petak, label-label itu salah, dan setiap pengiraan yang dibina di atasnya juga salah." }
        ],
        "imgAlt": "Segi tiga bersudut tegak ABC dengan kaki a dan b, hipotenus c, penanda sudut tegak, dan formula P = a+b+c, s = (a+b+c)/2",
        "figcaption": "Segi tiga ABC dengan kaki a dan b, hipotenus c, dan dua formula sempadan."
      },
      "sec-perimeter": {
        "h2": "Apakah Perimeter Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "p", "text": "Perimeter ialah jumlah jarak mengelilingi sempadan luar bentuk dua dimensi. Untuk segi tiga, ia ialah hasil tambah ketiga-tiga panjang sisinya, [[[\\boxed{P=a+b+c}]]], dan setiap sisi mesti disertakan kerana setiap sisi ialah sebahagian daripada sempadan. Tinggalkan satu dan hasilnya bukan perimeter; ia ialah laluan separa." },
          { "kind": "h3", "text": "Mengapakah Hipotenus Dikira dalam Perimeter?" },
          { "kind": "p", "text": "Perimeter mengukur sempadan luar yang lengkap, bukan sekadar dua sisi berserenjang. Walaupun hipotenus terletak bertentangan dengan sudut tegak, ia kekal salah satu daripada tiga tepi sempadan: berjalan mengelilingi segi tiga bermakna anda juga berjalan di atas hipotenus. Meninggalkannya bermakna mengukur dua sisi laluan yang putus, bukan garis luar segi tiga yang tertutup. Formula ini mempunyai tiga sebutan kerana bentuk ini mempunyai tiga tepi; tiada tepi yang pilihan, walau bagaimana pun segi tiga itu diorientasikan pada halaman atau di atas tanah." },
          { "kind": "h3", "text": "Cara Mengira Perimeter Langkah demi Langkah" },
          { "kind": "p", "text": "Gunakan [[a=3]], [[b=4]], [[c=5]]. Gantikan ke dalam formula: [[P=3+4+5]]. Tambahkan dua panjang pertama: [[P=7+5]]. Hasil akhir: [[[\\boxed{P=12\\text{ units}}]]] Secara fizikal, 12 unit ialah panjang pita yang diletakkan sepanjang ketiga-tiga tepi dari hujung ke hujung: garis luar lengkap segi tiga yang dinyatakan sebagai satu panjang yang berterusan." },
          { "kind": "h3", "text": "Apakah yang Diberitahu Perimeter dalam Kerja Praktikal?" },
          { "kind": "p", "text": "Ia menjawab satu soalan dalam banyak pertukangan: berapa banyak bahan yang dimakan oleh garis luar? Ini merangkumi bahan sempadan, kemasan tingkap, tepi pagar, jalur pelindung, bingkai hiasan, laluan kabel, tepi kain, dan profil tepi logam. Dalam setiap kes, perimeter ialah nombor yang dibawa kepada pembekal. Ia menerangkan panjang garis luar lengkap segi tiga, bukan jumlah permukaan di dalamnya: 12 meter kemasan tidak memberitahu apa-apa tentang luas yang diliputi tingkap, dan memang tidak pernah dimaksudkan begitu." }
        ]
      },
      "sec-semiperimeter": {
        "h2": "Apakah Semiperimeter Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "p", "text": "Semiperimeter ialah tepat separuh perimeter penuh segi tiga: [[[\\boxed{s=\\frac{P}{2}}]]] Memandangkan [[P=a+b+c]], maka [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Penambahan datang sebelum pembahagian kerana semiperimeter membelah dua seluruh sempadan, bukan setiap sisi secara berasingan. Membahagi setiap sisi dahulu kemudian menambah akan memberikan nombor yang sama di sini, tetapi formula ini menyatakan susunan idea yang betul: jumlahkan sempadan, kemudian belah dua." },
          { "kind": "h3", "text": "Cara Mengira Semiperimeter Langkah demi Langkah" },
          { "kind": "p", "text": "Gunakan [[a=3]], [[b=4]], [[c=5]]. Tambahkan ketiga-tiga sisi: [[s=\\frac{3+4+5}{2}]]. Permudahkan jumlah: [[s=\\frac{12}{2}]]. Hasil akhir: [[[\\boxed{s=6\\text{ units}}]]] Semiperimeter ialah ukuran geometri terbitan yang digunakan dalam beberapa formula segi tiga penting; ia jarang menerangkan sesuatu yang akan anda ukur terus dengan pita, sebab itulah kalkulator mengiranya untuk anda." },
          { "kind": "h3", "text": "Mengapakah Semiperimeter Digunakan dalam Geometri?" },
          { "kind": "p", "text": "Ia ialah pemboleh ubah semula jadi formula Heron, hubungan jejari dalam [[K=rs]], dan geometri bulatan dalam secara umum. Formula luas segi tiga terus menghasilkan separuh-separuh, dan semiperimeter menyerap semuanya serentak, sebab itulah bukti dan formula lanjutan lebih menyukainya berbanding perimeter penuh. Apabila formula meminta [[s]], memasukkan [[P]] sebaliknya akan menggandakan atau memesongkan hasil dengan cara lain, jadi perbezaan ini wajar dikekalkan tajam sejak awal." },
          { "kind": "h3", "text": "Adakah Semiperimeter Separuh Sempadan Secara Fizikal?" },
          { "kind": "p", "text": "Tidak semestinya. Semiperimeter ialah separuh perimeter berangka: 6 unit apabila perimeter ialah 12. Ia tidak semestinya menerangkan laluan fizikal berterusan yang meliputi separuh sempadan segi tiga. Tiada satu laluan tunggal sepanjang tepi yang merupakan semiperimeter seperti mana perimeter ialah laluan penuh: separuh itu ialah nombor, bukan laluan. Menganggap [[s]] sebagai gelung separuh fizikal membawa kepada kekeliruan; anggap ia sebagai separuh jumlah, nilai yang diperlukan oleh formula." },
          { "kind": "h3", "text": "Bolehkah Semiperimeter Lebih Kecil daripada Sisi Terpanjang?" },
          { "kind": "p", "text": "Tidak. Ketaksamaan segi tiga memerlukan [[a+b>c]]: dua sisi yang lebih pendek bersama-sama mesti melebihi sisi terpanjang, atau segi tiga tidak dapat ditutup. Menambah [[c]] kepada kedua-dua belah memberikan [[a+b+c>2c]], dan membelah dua memberikan [[[\\boxed{s>c}]]] Untuk segi tiga tak merosot yang sah, semiperimeter lebih besar daripada sisi terpanjang. Ini ialah semakan matematik yang berguna: jika semiperimeter yang dilaporkan lebih kecil daripada hipotenus, ukuran-ukuran itu tidak dapat membentuk segi tiga sebenar." }
        ]
      },
      "sec-difference": {
        "h2": "Perimeter vs. Semiperimeter: Apakah Perbezaannya?",
        "blocks": [
          { "kind": "p", "text": "Perimeter: jumlah panjang mengelilingi segi tiga, [[P=a+b+c]]. Semiperimeter: separuh jumlah perimeter, [[s=\\frac{a+b+c}{2}]]. Tiga sisi yang sama, kuantiti geometri berbeza: satu ialah keseluruhan, satu lagi ialah separuh. Ia berkaitan melalui [[s=\\frac{P}{2}]] dan [[P=2s]], dan kalkulator tidak pernah menggunakan dua simbol itu secara bergantian." },
          { "kind": "h3", "text": "Perbandingan Berangka" },
          { "kind": "p", "text": "Gunakan segi tiga bersudut tegak 6-8-10. Perimeter: [[P=6+8+10]], [[[\\boxed{P=24}]]] Semiperimeter: [[s=\\frac{24}{2}]], [[[\\boxed{s=12}]]] Kedua-dua nombor berbeza dengan faktor dua, sentiasa: [[s=\\frac{P}{2}]] dan [[P=2s]]. Perbezaannya bukan bentuk yang berbeza atau segi tiga yang berbeza; ia ialah sempadan yang sama dikira sekali berbanding dikira sebagai separuh." },
          { "kind": "h3", "text": "Ukuran Mana yang Patut Anda Gunakan?" },
          { "kind": "p", "text": "Gunakan perimeter untuk mengeping, membingkai, menghias tepi, memagar, dan anggaran bahan mengelilingi objek: sebarang kerja yang soalannya ialah berapa banyak bahan yang dimakan oleh garis luar. Gunakan semiperimeter untuk formula Heron, hubungan jejari dalam, pengiraan bulatan dalam, dan masalah geometri yang melibatkan panjang sisi segi tiga: sebarang kerja yang formulanya meminta separuh sempadan sebagai input. Pilihan didorong oleh tugas, bukan oleh keutamaan: anggaran kemasan mahukan [[P]], bukti luas mahukan [[s]]." },
          { "kind": "h3", "text": "Adakah Semiperimeter Mengukur Separuh Luas Segi Tiga?" },
          { "kind": "p", "text": "Tidak. Kedua-dua perimeter dan semiperimeter ialah ukuran linear: panjang, dilaporkan dalam meter atau kaki, tidak pernah meter persegi. Luas mengukur permukaan dua dimensi yang dikelilingi oleh segi tiga dan menggunakan unit persegi. Membelah dua satu panjang masih memberikan satu panjang. Amaran ini wajar diulang kerana namanya kedengaran berkaitan: semiperimeter ialah separuh perimeter, bukan separuh luas, dan tiada pembahagian sempadan yang dapat menghasilkan permukaan." }
        ],
        "imgAlt": "Segi tiga 6-8-10: palang perimeter 24 unit dibelah dua menjadi palang semiperimeter 12 unit",
        "figcaption": "P = 24 dibelah dua menjadi s = 12: sempadan penuh, kemudian separuhnya."
      },
      "sec-modes": {
        "h2": "Memahami Dua Mod Kalkulator",
        "blocks": [
          { "kind": "p", "text": "Kalkulator mengekalkan dua pengiraan dalam dua mod berasingan kerana ia menjawab soalan berbeza daripada tiga input yang sama. Memilih mod ialah memilih soalan mana yang ditanya." },
          { "kind": "h3", "text": "Mod Kalkulator Perimeter" },
          { "kind": "p", "text": "Mod ini mengira jumlah panjang sempadan. Input: kaki [[a]], kaki [[b]], hipotenus [[c]]. Formula: [[P=a+b+c]]. Output: perimeter [[P]]. Hasilnya berguna untuk menganggarkan jumlah panjang bahan yang diperlukan mengelilingi garis luar segi tiga: nombor yang anda bawa kepada pembekal apabila kerjanya ialah pengepingan, kemasan, atau pembingkaian." },
          { "kind": "h3", "text": "Mod Kalkulator Semiperimeter" },
          { "kind": "p", "text": "Mod ini mengira separuh jumlah perimeter. Input: kaki [[a]], kaki [[b]], hipotenus [[c]]. Formula: [[s=\\frac{a+b+c}{2}]]. Output: semiperimeter [[s]]. Hasilnya berguna sebagai nilai perantaraan dalam pengiraan segi tiga lanjutan: nombor yang anda suapkan ke dalam formula Heron atau hubungan jejari dalam apabila masalah berterusan melepasi sempadan." },
          { "kind": "h3", "text": "Mengapakah Terdapat Dua Mod Berasingan?" },
          { "kind": "p", "text": "Kedua-dua pengiraan menggunakan tiga ukuran sisi yang sama tetapi mengembalikan kuantiti geometri berbeza, dan mencampuradukkannya ialah salah satu kesilapan paling biasa dalam topik ini. Dua mod berlabel mengekalkan niat secara eksplisit: butang itu berkata Calculate Perimeter atau Calculate Semiperimeter, dan hasilnya dilabel [[P]] atau [[s]]. Dua mod itu menyelamatkan pengguna daripada melakukan pengiraan manual sambil mengekalkan dua jawapan mustahil dikelirukan. Jangan gambarkan mod semiperimeter sebagai kalkulator luas: outputnya ialah panjang, dan ia kekal sebagai panjang." }
        ]
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Langkah-langkah di bawah mengikut susun atur pada skrin untuk setiap mod, daripada mengenal pasti ukuran hingga hasil yang disemak. Dua mod berkongsi tiga input yang sama dan berbeza hanya pada pengiraan akhir." },
          { "kind": "h3", "text": "Mod Perimeter" },
          { "kind": "steps", "steps": [
            "<strong>Pilih mod Perimeter.</strong> Ini memberitahu kalkulator bahawa matlamatnya ialah jumlah panjang sempadan.",
            "<strong>Kenal pasti kaki a.</strong> Ini ialah salah satu daripada dua sisi yang membentuk sudut tegak.",
            "<strong>Kenal pasti kaki b.</strong> Ini ialah sisi lain yang membentuk sudut tegak.",
            "<strong>Kenal pasti hipotenus c.</strong> Ini ialah sisi terpanjang, bertentangan dengan sudut tegak.",
            "<strong>Masukkan kaki a.</strong> Taipkan panjang yang diukur ke dalam medan pertama.",
            "<strong>Masukkan kaki b.</strong> Taipkan panjang yang diukur ke dalam medan kedua.",
            "<strong>Masukkan hipotenus c.</strong> Taipkan panjang yang diukur ke dalam medan ketiga.",
            "<strong>Pilih unit yang sesuai.</strong> Ketiga-tiga sisi mesti berkongsi satu unit sebelum penambahan bermakna.",
            "<strong>Klik Calculate Perimeter.</strong> Kalkulator menambah ketiga-tiga sisi.",
            "<strong>Semak hasil.</strong> Sahkan bahawa perimeter melebihi sisi terpanjang.",
            "<strong>Semak langkah penyelesaian yang dipaparkan.</strong> Ia menunjukkan [[P=a+b+c]] dengan nilai yang dimasukkan diisi.",
            "<strong>Sahkan bahawa output menggunakan unit ukuran linear.</strong> Meter, sentimeter, kaki, atau inci: tidak pernah unit persegi."
          ] },
          { "kind": "h3", "text": "Mod Semiperimeter" },
          { "kind": "steps", "steps": [
            "<strong>Pilih mod Semiperimeter.</strong> Ini memberitahu kalkulator bahawa matlamatnya ialah separuh sempadan.",
            "<strong>Masukkan kaki a.</strong> Pengenalpastian yang sama seperti dalam mod perimeter.",
            "<strong>Masukkan kaki b.</strong> Sisi kedua yang membentuk sudut tegak.",
            "<strong>Masukkan hipotenus c.</strong> Sisi terpanjang, bertentangan dengan sudut tegak.",
            "<strong>Pilih unit ukuran yang serasi.</strong> Satu unit untuk ketiga-tiga sisi.",
            "<strong>Klik Calculate Semiperimeter.</strong> Kalkulator menambah ketiga-tiga sisi dan membelah dua jumlahnya.",
            "<strong>Semak hasil.</strong> Ia sepatutnya jelas lebih kecil daripada perimeter.",
            "<strong>Sahkan bahawa hasil ialah tepat separuh perimeter.</strong> Semak [[s=\\frac{P}{2}]] terhadap output mod perimeter.",
            "<strong>Semak langkah penyelesaian dan visualisasi langsung.</strong> Langkah-langkah menunjukkan penambahan dan pembelahan dua; lukisan menunjukkan segi tiga yang menjadi punca nombor-nombor itu.",
            "<strong>Gunakan Reset apabila memulakan pengiraan baharu.</strong> Ia mengosongkan ketiga-tiga medan untuk permulaan yang bersih."
          ] },
          { "kind": "p", "text": "Visualisasi langsung melukis segi tiga daripada sisi yang dimasukkan, yang membantu mengesan hipotenus yang tersalah label sebelum nombor-nombor itu dipercayai. Gambar rajah formula menunjukkan di mana setiap sisi terletak dalam [[P=a+b+c]] atau [[s=\\frac{a+b+c}{2}]]. Tiada mod yang menerima dua sisi: kalkulator memerlukan ketiga-tiga panjang sempadan, jadi sisi yang tiada mesti dicari dahulu, seperti yang dijelaskan oleh bahagian sisi tiada." }
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Empat gandaan tiga Pythagoras yang terkenal menunjukkan pengiraan penuh untuk kedua-dua ukuran. Setiap satu menambah ketiga-tiga sisi untuk perimeter, kemudian membelah dua jumlah untuk semiperimeter. Aritmetiknya sengaja ditunjukkan penuh supaya polanya tidak dapat disalah erti." },
          { "kind": "h3", "text": "Contoh 1: Segi Tiga Bersudut Tegak 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]], [[c=5]]. Kira perimeter: [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]] Kira semiperimeter: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]] Kedua-dua hasil betul kerana perimeter mengira setiap tepi sempadan sekali, dan semiperimeter ialah tepat separuh kiraan itu." },
          { "kind": "h3", "text": "Contoh 2: Segi Tiga Bersudut Tegak 6-8-10" },
          { "kind": "p", "text": "Diberi [[a=6]], [[b=8]], [[c=10]]. Perimeter: [[P=6+8+10]], [[[\\boxed{P=24\\text{ units}}]]] Semiperimeter: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ units}}]]] Menggandakan ketiga-tiga sisi menggandakan kedua-dua ukuran: 24 ialah dua kali 12, dan 12 ialah dua kali 6. Menskalakan segi tiga menskalakan ukuran sempadannya dengan faktor yang sama." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga Bersudut Tegak 5-12-13" },
          { "kind": "p", "text": "Diberi [[a=5]], [[b=12]], [[c=13]]. Perimeter: [[P=5+12+13]], [[[\\boxed{P=30\\text{ units}}]]] Semiperimeter: [[s=\\frac{30}{2}]], [[[\\boxed{s=15\\text{ units}}]]] Perhatikan bahawa 15 melebihi hipotenus 13, seperti yang diperlukan oleh semakan ketaksamaan segi tiga." },
          { "kind": "h3", "text": "Contoh 4: Segi Tiga Bersudut Tegak 8-15-17" },
          { "kind": "p", "text": "Diberi [[a=8]], [[b=15]], [[c=17]]. Perimeter: [[P=8+15+17]], [[[\\boxed{P=40\\text{ units}}]]] Semiperimeter: [[s=\\frac{40}{2}]], [[[\\boxed{s=20\\text{ units}}]]] Sekali lagi semiperimeter melepasi sisi terpanjang: 20 berbanding 17." },
          { "kind": "h3", "text": "Perbandingan Contoh Asas" },
          { "kind": "p", "text": "Apabila dimensi segi tiga meningkat, kedua-dua [[P]] dan [[s]] bertumbuh seiring dengan sisi. Jadual menunjukkan dua pola serentak: perimeter setiap baris ialah hasil tambah biasa ketiga-tiga sisinya, dan perimeter setiap baris ialah tepat dua kali ganda semiperimeternya. Baris 3-4-5 dan 6-8-10 juga menunjukkan penskalaan secara langsung: setiap sisi digandakan, kedua-dua ukuran sempadan digandakan." }
        ],
        "table": {
          "headers": ["Segi Tiga", "Kaki a", "Kaki b", "Hipotenus c", "Perimeter P", "Semiperimeter s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["6-8-10", "6", "8", "10", "24", "12"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Aplikasi Sebenar Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi yang diselesaikan membawa dua formula halaman ini ke bengkel dan tapak. Setiap satu menamakan objek atau model segi tiga bersudut tegak yang dipermudahkan, mengerjakan perimeter dan semiperimeter melalui formula, dan menyatakan bacaan praktikal hasilnya. Ini ialah model yang dipermudahkan: bukan setiap tingkap, bumbung, taman, kanopi, panel, atau struktur sokongan sebenar membentuk segi tiga bersudut tegak yang tepat, dan objek tidak sekata mesti dibahagikan kepada bentuk yang lebih ringkas sebelum formula digunakan. Elaun bahan mungkin diperlukan, sisa potongan tidak disertakan, sempadan melengkung memerlukan pengiraan berbeza, kekuatan struktur tidak dapat ditentukan daripada perimeter sahaja, dan ukuran pembinaan sebenar harus disahkan sebelum membeli bahan." },
          { "kind": "h3", "text": "Contoh 1: Bingkai Tingkap Kaca Segi Tiga" },
          { "kind": "p", "text": "Tingkap segi tiga bersudut tegak mempunyai [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Perimeter: [[P=3+4+5]], [[[\\boxed{P=12\\text{ m}}]]] Semiperimeter: [[s=\\frac{12}{2}]], [[[\\boxed{s=6\\text{ m}}]]] Dua belas meter ialah jumlah panjang mengelilingi garis luar segi tiga tingkap: stok bingkai yang perlu ditempah sebelum elaun sudut dan sisa." },
          { "kind": "h3", "text": "Contoh 2: Kemasan Tepi Bumbung" },
          { "kind": "p", "text": "Bahagian hujung bumbung segi tiga mempunyai [[a=6\\text{ ft}]], [[b=8\\text{ ft}]], [[c=10\\text{ ft}]]. Perimeter: [[P=6+8+10]], [[[\\boxed{P=24\\text{ ft}}]]] Semiperimeter: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ ft}}]]] Perimeter menganggarkan panjang kemasan mengelilingi garis luar segi tiga hujung bumbung." },
          { "kind": "h3", "text": "Contoh 3: Tepi Taman" },
          { "kind": "p", "text": "Bahagian taman segi tiga bersudut tegak mempunyai [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Perimeter: [[P=5+12+13]], [[[\\boxed{P=30\\text{ m}}]]] Semiperimeter: [[s=15\\text{ m}]]. Perimeter menganggarkan panjang penuh pengepingan taman mengelilingi bahagian itu." },
          { "kind": "h3", "text": "Contoh 4: Pendakap Sokongan Keluli" },
          { "kind": "p", "text": "Pendakap logam segi tiga mempunyai [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Perimeter: [[P=8+15+17]], [[[\\boxed{P=40\\text{ cm}}]]] Semiperimeter: [[[\\boxed{s=20\\text{ cm}}]]] Perimeter menerangkan tepi luar pendakap, berguna apabila menentukan kemasan tepi." },
          { "kind": "h3", "text": "Contoh 5: Panel Kain Segi Tiga" },
          { "kind": "p", "text": "Panel kain segi tiga bersudut tegak mempunyai [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Perimeter: [[P=9+12+15]], [[[\\boxed{P=36\\text{ ft}}]]] Semiperimeter: [[[\\boxed{s=18\\text{ ft}}]]] Perimeter menganggarkan panjang tepi sebelum elaun jahitan ditambah." },
          { "kind": "h3", "text": "Contoh 6: Bingkai Papan Tanda Segi Tiga" },
          { "kind": "p", "text": "Papan tanda mempunyai bentuk segi tiga bersudut tegak dengan [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Perimeter: [[P=12+16+20]], [[[\\boxed{P=48\\text{ cm}}]]] Semiperimeter: [[[\\boxed{s=24\\text{ cm}}]]] Jumlah perimeter menganggarkan bahan bingkai untuk papan tanda." },
          { "kind": "h3", "text": "Contoh 7: Sempadan Landskap" },
          { "kind": "p", "text": "Bahagian landskap segi tiga bersudut tegak mempunyai [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Perimeter: [[P=7+24+25]], [[[\\boxed{P=56\\text{ m}}]]] Semiperimeter: [[[\\boxed{s=28\\text{ m}}]]] Perimeter menganggarkan bahan sempadan mengelilingi bahagian itu." },
          { "kind": "h3", "text": "Contoh 8: Sokongan Panel Solar Segi Tiga" },
          { "kind": "p", "text": "Rangka sokongan segi tiga yang dipermudahkan mempunyai [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Perimeter: [[P=9+40+41]], [[[\\boxed{P=90\\text{ m}}]]] Semiperimeter: [[[\\boxed{s=45\\text{ m}}]]] Ini ialah panjang ketiga-tiga sisi rangka segi tiga yang dimodelkan, titik permulaan untuk pensaisan anggota." },
          { "kind": "h3", "text": "Contoh 9: Tepi Kanopi Segi Tiga" },
          { "kind": "p", "text": "Bahagian kanopi segi tiga bersudut tegak mempunyai [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Perimeter: [[P=15+20+25]], [[[\\boxed{P=60\\text{ ft}}]]] Semiperimeter: [[[\\boxed{s=30\\text{ ft}}]]] Perimeter menganggarkan bahan sempadan untuk tepi kanopi." },
          { "kind": "h3", "text": "Contoh 10: Rangka Hujung Bumbung Gudang" },
          { "kind": "p", "text": "Rangka hujung bumbung segi tiga bersudut tegak yang dipermudahkan mempunyai [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Perimeter: [[P=11+60+61]], [[[\\boxed{P=132\\text{ m}}]]] Semiperimeter: [[[\\boxed{s=66\\text{ m}}]]] Hasilnya mewakili garis luar penuh bahagian segi tiga." },
          { "kind": "h3", "text": "Contoh 11: Panel Fabrikasi Segi Tiga" },
          { "kind": "p", "text": "Panel industri segi tiga bersudut tegak mempunyai [[a=13\\text{ cm}]], [[b=84\\text{ cm}]], [[c=85\\text{ cm}]]. Perimeter: [[P=13+84+85]], [[[\\boxed{P=182\\text{ cm}}]]] Semiperimeter: [[[\\boxed{s=91\\text{ cm}}]]] Perimeter menganggarkan profil tepi pelindung untuk panel." },
          { "kind": "h3", "text": "Contoh 12: Struktur Sokongan Segi Tiga Besar" },
          { "kind": "p", "text": "Struktur sokongan segi tiga bersudut tegak mempunyai [[a=28\\text{ m}]], [[b=45\\text{ m}]], [[c=53\\text{ m}]]. Perimeter: [[P=28+45+53]], [[[\\boxed{P=126\\text{ m}}]]] Semiperimeter: [[[\\boxed{s=63\\text{ m}}]]] Ukuran-ukuran ini berfungsi sebagai input geometri untuk pengiraan kejuruteraan kemudian." },
          { "kind": "h3", "text": "Perbandingan Contoh Praktikal" }
        ],
        "table": {
          "headers": ["Aplikasi praktikal", "Kaki a", "Kaki b", "Hipotenus c", "Perimeter P", "Semiperimeter s", "Unit ukuran"],
          "rows": [
            ["Bingkai tingkap kaca segi tiga", "3", "4", "5", "12", "6", "m"],
            ["Kemasan tepi bumbung", "6", "8", "10", "24", "12", "ft"],
            ["Tepi taman", "5", "12", "13", "30", "15", "m"],
            ["Pendakap keluli", "8", "15", "17", "40", "20", "cm"],
            ["Panel kain", "9", "12", "15", "36", "18", "ft"],
            ["Bingkai papan tanda", "12", "16", "20", "48", "24", "cm"],
            ["Sempadan landskap", "7", "24", "25", "56", "28", "m"],
            ["Sokongan panel solar", "9", "40", "41", "90", "45", "m"],
            ["Tepi kanopi", "15", "20", "25", "60", "30", "ft"],
            ["Hujung bumbung gudang", "11", "60", "61", "132", "66", "m"],
            ["Panel fabrikasi", "13", "84", "85", "182", "91", "cm"],
            ["Struktur sokongan", "28", "45", "53", "126", "63", "m"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Cara Mengira Perimeter Apabila Satu Sisi Tiada",
        "blocks": [
          { "kind": "p", "text": "Kalkulator halaman ini memerlukan ketiga-tiga panjang sisi. Jika satu sisi tidak diketahui, kira dahulu dengan teorem Pythagoras. Perimeter tidak dapat dilengkapkan daripada dua sisi: dua panjang menerangkan penjuru yang terbuka, bukan sempadan yang tertutup." },
          { "kind": "h3", "text": "Mencari Hipotenus Apabila Kedua-dua Kaki Diketahui" },
          { "kind": "p", "text": "Gunakan teorem Pythagoras dalam bentuk hipotenusnya: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Contoh: [[a=6]], [[b=8]]. Maka [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[c=\\sqrt{100}]], [[[\\boxed{c=10}]]] Kini perimeter boleh dikira: [[P=6+8+10]], [[[\\boxed{P=24}]]], dengan [[s=12]] terbit daripada pembelahan dua." },
          { "kind": "h3", "text": "Mencari Kaki yang Tiada Apabila Hipotenus Diketahui" },
          { "kind": "p", "text": "Susun semula [[a^2+b^2=c^2]] untuk mengasingkan kaki yang tidak diketahui: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Contoh: [[c=13]], [[b=12]]. Maka [[a=\\sqrt{13^2-12^2}]], [[a=\\sqrt{169-144}]], [[a=\\sqrt{25}]], [[[\\boxed{a=5}]]] Perimeter menyusul: [[P=5+12+13=30]], [[s=15]]. Penolakan dalam punca ialah tandatangan kaki yang tiada; hipotenus yang tiada sentiasa menambah." },
          { "kind": "h3", "text": "Mengapakah Sisi yang Tiada Mesti Dikira Dahulu?" },
          { "kind": "p", "text": "Perimeter memerlukan ketiga-tiga panjang sempadan. Sisi yang tiada tidak boleh diabaikan begitu sahaja atau dianggarkan tanpa justifikasi: dua sisi tidak mengehadkan segi tiga, dan sisi ketiga yang diagak menjadikan jumlah itu rekaan. Jika hanya dua sisi diketahui, <a href=\"/missing-leg-from-c-and-a-calculator/\" class=\"text-primary underline\">kalkulator sisi segi tiga bersudut tegak</a> mencari yang ketiga sebelum kalkulator halaman ini mengambil alih. Perhatikan bahawa ini ialah kaedah pendidikan, bukan mod input tambahan dalam kalkulator sedia ada: mod perimeter dan semiperimeter masih menerima tiga sisi setiap satu." }
        ],
        "imgAlt": "Segi tiga bersudut tegak dengan kaki 6 dan 8, hipotenus yang tidak diketahui diselesaikan sebagai 10, memberikan perimeter 24",
        "figcaption": "Kaki 6 dan 8 memberikan c = 10, jadi P = 24 dan s = 12."
      },
      "sec-pythagoras": {
        "h2": "Bagaimanakah Teorem Pythagoras Berkaitan dengan Perimeter Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "p", "text": "Teorem itu menyatakan [[[\\boxed{a^2+b^2=c^2}]]] Ia menetapkan hubungan antara dua kaki dan hipotenus: penjuru petak memaksa ketiga-tiga panjang kepada keseimbangan tepat ini. Dalam kerja perimeter, teorem ialah jambatan antara set ukuran yang tidak lengkap dan sempadan yang lengkap." },
          { "kind": "h3", "text": "Mengapakah Ia Penting untuk Perimeter?" },
          { "kind": "p", "text": "Jika kedua-dua kaki diketahui, hipotenus boleh dikira sebelum mencari perimeter lengkap. Tanpa teorem, sisi yang tiada akan menyekat pengiraan sepenuhnya; dengannya, dua sisi yang diketahui cukup untuk mendapatkan semula yang ketiga dan melengkapkan jumlah. Teorem juga berfungsi ke arah lain: hipotenus yang diketahui dan satu kaki yang diketahui mendapatkan semula kaki yang satu lagi. Walau bagaimana pun, ia mengubah masalah dua sisi menjadi perimeter tiga sisi." },
          { "kind": "h3", "text": "Contoh yang Diselesaikan" },
          { "kind": "p", "text": "Diberi [[a=5]], [[b=12]]. Cari [[c]]: [[c=\\sqrt{5^2+12^2}]], [[c=\\sqrt{25+144}]], [[c=\\sqrt{169}]], [[[\\boxed{c=13}]]] Kira perimeter: [[P=5+12+13]], [[[\\boxed{P=30}]]] Kira semiperimeter: [[s=\\frac{30}{2}]], [[[\\boxed{s=15}]]] Satu teorem, satu penambahan, satu pembelahan dua: rantaian lengkap daripada dua kaki kepada kedua-dua ukuran sempadan." },
          { "kind": "h3", "text": "Bagaimanakah Menyemak Segi Tiga Bersudut Tegak?" },
          { "kind": "p", "text": "Tiga ukuran mesti memenuhi [[a^2+b^2=c^2]], dengan hipotenus sebagai sisi terpanjang. Semak juga ketaksamaan segi tiga: untuk mana-mana segi tiga yang sah, [[a+b>c]], [[a+c>b]] dan [[b+c>a]]. Syarat-syarat ini penting apabila menyemak ukuran: semakan Pythagoras yang gagal bermakna segi tiga itu bukan bersudut tegak, atau satu sisi tersalah label; ketaksamaan segi tiga yang gagal bermakna tiga panjang itu tidak dapat membentuk sebarang segi tiga. Jalankan kedua-dua semakan sebelum mempercayai perimeter yang dibina daripada ukuran lapangan." }
        ]
      },
      "sec-advanced": {
        "h2": "Bagaimanakah Semiperimeter Digunakan dalam Formula Segi Tiga Lain?",
        "blocks": [
          { "kind": "p", "text": "Bahagian ini memberikan semiperimeter kedalaman matematiknya tanpa mengubah halaman ini menjadi tutorial kalkulator lain. Semiperimeter lebih daripada separuh perimeter: ia ialah kuantiti yang menghubungkan panjang sisi kepada luas dan geometri bulatan, dan formula di bawah ialah tempat ia menunjukkan nilainya." },
          { "kind": "h3", "text": "Hubungan antara Semiperimeter dan Jejari Dalam" },
          { "kind": "p", "text": "Luas mana-mana segi tiga tak merosot sama dengan jejari dalamnya didarab semiperimeternya: [[[\\boxed{K=rs}]]], dengan [[K]] ialah luas, [[r]] jejari dalam dan [[s]] semiperimeter. Hubungan ini berfungsi untuk semua segi tiga tak merosot, bukan sekadar yang bersudut tegak. Untuk segi tiga bersudut tegak, jejari dalam juga boleh dikira daripada sisi menggunakan [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Ambil segi tiga 3-4-5: [[s=6]], [[r=\\frac{3+4-5}{2}=1]], jadi [[K=1\\times6]], [[[\\boxed{K=6}]]] Semiperimeter ialah ukuran perantaraan penting dalam pengiraan ini: ia membawa maklumat sempadan manakala jejari dalam membawa maklumat bulatan." },
          { "kind": "h3", "text": "Hubungan dengan Formula Heron" },
          { "kind": "p", "text": "Formula Heron mengira luas daripada tiga sisi dan semiperimeter: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Ia menggunakan tiga panjang sisi, menggunakan semiperimeter, mengira luas segi tiga dan berfungsi untuk mana-mana segi tiga yang sah. Gunakan segi tiga 3-4-5 dengan [[s=6]]: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[K=\\sqrt{36}]], [[[\\boxed{K=6}]]] Semiperimeter muncul empat kali dalam punca, yang menunjukkan betapa sentralnya ia: formula Heron tidak dapat ditulis tanpanya." },
          { "kind": "h3", "text": "Mengapakah Semiperimeter Ukuran yang Asas?" },
          { "kind": "p", "text": "Ia lebih daripada separuh perimeter. Ia ialah kuantiti matematik berguna yang menghubungkan panjang sisi kepada luas dan geometri bulatan: hubungan jejari dalam menganggapnya sebagai pasangan semula jadi [[r]], dan formula Heron membina seluruh luas di atasnya. Apabila formula memerlukan sempadan yang disulingkan menjadi satu nombor yang mudah, [[s]] ialah nombor itu. Halaman ini tidak berubah menjadi tutorial lengkap formula Heron atau jejari dalam; ia mencatat hubungannya supaya output mod semiperimeter mempunyai ke mana untuk pergi seterusnya." }
        ]
      },
      "sec-perimeter-area": {
        "h2": "Apakah Perbezaan antara Perimeter dan Luas?",
        "blocks": [
          { "kind": "p", "text": "Salah satu kekeliruan paling berterusan dalam geometri ialah mencampurkan garis luar dengan permukaan. Perimeter dan luas berkongsi segi tiga yang sama, tetapi mengukur perkara berbeza, dalam unit berbeza, menjawab soalan berbeza." },
          { "kind": "h3", "text": "Perimeter Mengukur Sempadan" },
          { "kind": "p", "text": "[[P=a+b+c]]. Ia mengukur jumlah panjang mengelilingi segi tiga: pengepingan, kemasan, garisan pagar. Unitnya ialah linear: meter, sentimeter, kaki, inci. Ia satu dimensi, satu panjang dan tidak lebih." },
          { "kind": "h3", "text": "Luas Mengukur Permukaan yang Dikelilingi" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ab}{2}}]]] Ia mengukur rantau satah dua dimensi dalam segi tiga bersudut tegak: kaca dalam tingkap, rumput dalam bahagian taman. Unitnya ialah persegi: meter persegi, sentimeter persegi, kaki persegi, inci persegi. Ia dua dimensi, kiraan permukaan dan tidak lebih." },
          { "kind": "h3", "text": "Bolehkah Dua Segi Tiga Mempunyai Perimeter Sama tetapi Luas Berbeza?" },
          { "kind": "p", "text": "Ya. Segi tiga 1: [[a=5]], [[b=12]], [[c=13]]. Maka [[P=5+12+13=30]] dan [[K=\\frac{5\\times12}{2}=30]]. Segi tiga 2: [[a=7.5]], [[b=10]], [[c=12.5]]. Semak sudut tegak: [[7.5^2+10^2=56.25+100=156.25=12.5^2]], jadi ia ialah segi tiga bersudut tegak tulen. Perimeternya ialah [[P=7.5+10+12.5=30]], 30 yang sama, tetapi luasnya ialah [[K=\\frac{7.5\\times10}{2}=37.5]], jelas berbeza. Perimeter yang sama tidak bermakna luas yang sama secara automatik: panjang garis luar menetapkan jumlah pengepingan, tetapi bentuk segi tiga menentukan berapa banyak permukaan yang dikelilingi oleh pengepingan itu." },
          { "kind": "h3", "text": "Mengapakah Anda Tidak Patut Menyatakan Perimeter dalam Unit Persegi?" },
          { "kind": "p", "text": "Perimeter ialah panjang satu dimensi; unit persegi menerangkan permukaan dua dimensi. Melaporkan 12 m² untuk perimeter menegaskan permukaan di mana hanya garis luar diukur, dan sesiapa yang membaca nombor itu akan membayangkan perkara yang salah. Kekalkan unit yang jujur: panjang dalam m, cm, ft, in; luas dalam m², cm², ft², in². Unit ialah sebahagian daripada jawapan, dan unit yang salah mengubah jawapan yang betul menjadi salah." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Unit Ukuran dalam Pengiraan Perimeter dan Semiperimeter",
        "blocks": [
          { "kind": "p", "text": "Meter, sentimeter, milimeter, kilometer, kaki, inci, ela, batu: unit panjang datang dalam banyak saiz, dan formula perimeter menerima mana-mana daripadanya. Satu-satunya peraturan ialah persetujuan: ketiga-tiga sisi mesti bercakap dalam unit yang sama sebelum dijumlahkan." },
          { "kind": "h3", "text": "Mengapakah Ketiga-tiga Panjang Sisi Mesti Menggunakan Unit yang Serasi?" },
          { "kind": "p", "text": "Perimeter ialah hasil tambah panjang. Menambah 3 kaki kepada 48 inci tanpa menukar mencampurkan dua skala, dan jumlahnya tidak mempunyai makna yang bersih: 56 apa? Sebelum menambah ukuran, tukarkannya kepada unit yang sama. Pemilih unit kalkulator wujud tepat untuk langkah ini, dan contoh yang diselesaikan di bawah menunjukkan penukaran itu melakukan kerjanya yang senyap dan penting." },
          { "kind": "h3", "text": "Contoh Penukaran Unit yang Diselesaikan" },
          { "kind": "p", "text": "Diberi [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Tukarkan sisi tengah: [[48\\text{ inches}=4\\text{ ft}]]. Maka [[P=3+4+5]], [[[\\boxed{P=12\\text{ ft}}]]] Semiperimeter: [[[\\boxed{s=6\\text{ ft}}]]] Perhatikan bahawa gandaan tiga yang ditukar ialah 3-4-5 yang biasa, yang mengesahkan penukaran secara bebas: jika inci telah ditambah mentah, perimeternya ialah 56 yang tidak koheren." },
          { "kind": "h3", "text": "Mengira dengan Ukuran Sisi Perpuluhan" },
          { "kind": "p", "text": "Gunakan [[a=2.5]], [[b=6]], [[c=6.5]]. Pertama sahkan sudut tegak: [[2.5^2+6^2=6.25+36=42.25=6.5^2]]. Kira perimeter: [[P=2.5+6+6.5]], [[[\\boxed{P=15\\text{ units}}]]] Kemudian semiperimeter: [[s=\\frac{15}{2}]], [[[\\boxed{s=7.5\\text{ units}}]]] Perpuluhan mengalir melalui penambahan dan pembelahan dua yang sama seperti nombor bulat; formula tidak pernah memerlukan integer, dan ukuran bengkel jarang bulat." },
          { "kind": "h3", "text": "Mengapakah Anda Patut Mengelak Pembundaran Terlalu Awal?" },
          { "kind": "p", "text": "Pengiraan ukuran boleh mengandungi nilai perpuluhan, dan setiap pembundaran perantaraan menyuntik ralat yang tidak dapat dibuang oleh langkah kemudian. Kekalkan ketepatan yang mencukupi dalam langkah perantaraan dan bundarkan hanya jawapan akhir mengikut ketepatan ukuran yang diperlukan. Membundarkan 2.5 kepada 3 di tengah-tengah pengiraan akan merosakkan kedua-dua [[P]] dan [[s]]; kalkulator mengekalkan ketepatan penuh hingga akhir, dan pengiraan tangan harus melakukan perkara yang sama." }
        ]
      },
      "sec-scaling": {
        "h2": "Bagaimanakah Perubahan Panjang Sisi Mempengaruhi Perimeter dan Semiperimeter?",
        "blocks": [
          { "kind": "p", "text": "Perimeter ialah ukuran linear, jadi ia berskala secara linear dengan segi tiga: regangkan setiap sisi dengan sesuatu faktor dan sempadan meregang dengan tepat faktor itu. Semiperimeter mengikutinya, memandangkan ia sentiasa separuh perimeter." },
          { "kind": "h3", "text": "Apakah yang Berlaku Apabila Setiap Sisi Digandakan?" },
          { "kind": "p", "text": "Mulakan daripada [[P=a+b+c]]. Jika setiap sisi digandakan, perimeter baharu ialah [[P_2=2a+2b+2c]], yang difaktorkan menjadi [[P_2=2(a+b+c)]]. Oleh itu [[[\\boxed{P_2=2P}]]] Semiperimeter juga berganda, memandangkan membelah dua jumlah yang digandakan masih menggandakan separuhnya. Pasangan 3-4-5 kepada 6-8-10 menunjukkan ini dalam nombor: 12 menjadi 24, dan 6 menjadi 12." },
          { "kind": "h3", "text": "Apakah yang Berlaku Apabila Setiap Sisi Menjadi Tiga Kali Ganda?" },
          { "kind": "p", "text": "Algebra yang sama dengan faktor tiga memberikan [[[\\boxed{P_2=3P}]]] dan [[[\\boxed{s_2=3s}]]] Hubungan penskalaan linear sah untuk sebarang faktor skala [[k]]: darabkan setiap sisi dengan [[k]] dan kedua-dua ukuran sempadan didarab dengan [[k]]. Sebab itulah lukisan berskala berkelakuan begitu baik: ukur lukisan, darabkan dengan faktor skala, dan perimeter sebenar sudah siap." },
          { "kind": "h3", "text": "Apakah yang Berlaku Apabila Hanya Satu Sisi Berubah?" },
          { "kind": "p", "text": "Menambah satu sisi sambil mengekalkan dua lagi tetap mengubah perimeter dengan jumlah yang sama: tambah 2 unit kepada satu sisi dan [[P]] bertumbuh tepat 2, kerana perimeter ialah hasil tambah ringkas. Tetapi dalam segi tiga bersudut tegak, panjang sisi diikat oleh teorem Pythagoras, jadi perubahan sisi sewenang-wenang mungkin tidak mengekalkan syarat sudut tegak. Memanjangkan satu kaki tanpa melaraskan hipotenus memecahkan [[a^2+b^2=c^2]], dan bentuk itu berhenti menjadi bersudut tegak: formula perimeter masih menambah tiga nombor, tetapi ia tidak lagi menerangkan segi tiga bersudut tegak." },
          { "kind": "h3", "text": "Membandingkan Dua Segi Tiga Bersudut Tegak" },
          { "kind": "p", "text": "Letakkan 3-4-5 bersebelahan dengan 6-8-10. Panjang sisi: setiap sisi digandakan, faktor skala 2. Perimeter: 12 berbanding 24. Semiperimeter: 6 berbanding 12. Menggandakan semua panjang sisi menggandakan kedua-dua ukuran sempadan, tepat seperti yang diramalkan algebra. Perbandingan juga berjalan ke arah lain: jika perimeter dua segi tiga berada dalam nisbah 2:1 dan kedua-duanya bersudut tegak, sisi-sisinya berada dalam nisbah itu juga." }
        ]
      },
      "sec-applications": {
        "h2": "Aplikasi Praktikal Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Pola dua langkah yang sama, menambah kemudian membelah dua, muncul di mana-mana garis luar segi tiga perlu diukur dan formula memerlukan separuhnya. Tukang kaca menjumlahkan bingkai tingkap daripada panjang tepinya; tukang bumbung menjumlahkan kemasan mengelilingi hujung bumbung; tukang landskap menjumlahkan pengepingan mengelilingi batas; pengilang menjumlahkan profil tepi mengelilingi panel. Daripada tiga sisi datang perimeter untuk pesanan bahan dan semiperimeter untuk sebarang geometri kemudian. Empat panel di bawah menunjukkan pola dalam skala berbeza: bingkai tingkap (12 m), kemasan tepi bumbung (24 ft), tepi taman (56 m) dan struktur keluli sokongan (40 cm), setiap satu dilabel dengan perimeter dan semiperimeternya." }
        ],
        "imgAlt": "Empat panel: bingkai tingkap 12 m, kemasan bumbung 24 ft, tepi taman 56 m, struktur keluli 40 cm perimeter",
        "figcaption": "Empat kegunaan sebenar: bingkai tingkap, kemasan tepi bumbung, tepi taman dan struktur keluli."
      },
      "sec-mistakes": {
        "h2": "Kesilapan Biasa Apabila Mengira Perimeter dan Semiperimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Hampir setiap jawapan yang salah dalam topik ini berpunca daripada sisi yang dilangkau atau label yang dikelirukan, bukan aritmetik yang buruk. Enam belas kesilapan di bawah ialah yang muncul berulang kali, setiap satu dengan punca dan pembetulannya." },
          { "kind": "h3", "text": "1. Lupa Menyertakan Hipotenus" },
          { "kind": "p", "text": "Menggunakan [[P=a+b]] pada segi tiga 3-4-5 memberikan 7, bukan 12. Kesilapan berlaku kerana hipotenus tidak pernah menyentuh sudut tegak, jadi ia kelihatan terpisah daripada segi tiga itu sendiri. Pembetulan: sempadan mempunyai tiga tepi; kira ketiganya, [[P=a+b+c]]." },
          { "kind": "h3", "text": "2. Mengelirukan Perimeter dengan Semiperimeter" },
          { "kind": "p", "text": "Memasukkan 6 di mana 12 sepatutnya, atau sebaliknya, membelah dua atau menggandakan anggaran bahan. Kesilapan datang daripada dua nilai berkongsi tiga sisi yang sama. Pembetulan: labelkan setiap hasil [[P]] atau [[s]], dan semak [[s=\\frac{P}{2}]] sebelum meneruskan." },
          { "kind": "h3", "text": "3. Membahagi Perimeter dengan Dua Apabila Mengira Perimeter" },
          { "kind": "p", "text": "Mengira [[\\frac{3+4+5}{2}=6]] dan memanggilnya perimeter meremehkan sempadan sebanyak separuh. Kesilapannya ialah melaksanakan formula semiperimeter kerana kebiasaan. Pembetulan: [[P=a+b+c]] tidak mempunyai pembahagian; pembelahan dua hanya milik [[s]]." },
          { "kind": "h3", "text": "4. Lupa Membahagi dengan Dua Apabila Mengira Semiperimeter" },
          { "kind": "p", "text": "Melaporkan [[s=12]] untuk segi tiga 3-4-5 menyuapkan formula Heron dengan [[s]] yang digandakan dan merosakkan luas. Pembetulan: [[s=\\frac{a+b+c}{2}]] sentiasa berakhir dengan pembelahan dua; tanpanya, nombor itu ialah perimeter." },
          { "kind": "h3", "text": "5. Menggunakan Sisi yang Salah sebagai Hipotenus" },
          { "kind": "p", "text": "Menganggap kaki sebagai [[c]], contohnya memasukkan a=5, b=4, c=3, mengacau setiap formula kemudian. Kesilapan biasanya datang daripada membaca sisi dalam susunan yang salah. Pembetulan: [[c]] ialah sisi terpanjang, bertentangan dengan sudut tegak; susun ketiga-tiga nombor dan berikan [[c]] kepada yang terbesar." },
          { "kind": "h3", "text": "6. Memasukkan Ukuran yang Tidak Membentuk Segi Tiga Bersudut Tegak" },
          { "kind": "p", "text": "Sisi 2, 3, 4 memberikan [[P=9]] secara aritmetik, tetapi [[2^2+3^2=13\\neq16]], jadi tiada sudut tegak wujud dan formula halaman ini bertumpu pada premis yang salah. Pembetulan: sahkan [[a^2+b^2=c^2]] sebelum mengira." },
          { "kind": "h3", "text": "7. Mencampurkan Sentimeter dan Meter" },
          { "kind": "p", "text": "Menambah 3 m, 40 cm dan 5 m sebagai [[3+40+5=48]] menghasilkan 48 yang tidak bermakna. Pembetulan: tukar kepada satu unit dahulu: [[40\\text{ cm}=0.4\\text{ m}]], kemudian [[P=8.4\\text{ m}]]." },
          { "kind": "h3", "text": "8. Mencampurkan Kaki dan Inci" },
          { "kind": "p", "text": "Menambah 3 ft, 48 in dan 5 ft sebagai 56 mengulangi kesilapan skala yang sama dalam unit imperial. Pembetulan: [[48\\text{ in}=4\\text{ ft}]], kemudian [[P=12\\text{ ft}]]." },
          { "kind": "h3", "text": "9. Melaporkan Perimeter dalam Unit Persegi" },
          { "kind": "p", "text": "Menulis [[P=12\\text{ m}^2]]. Kesilapan biasanya datang daripada menyalin unit luas kerana kebiasaan selepas menyelesaikan masalah luas. Pembetulan: perimeter ialah panjang, jadi [[P=12\\text{ m}]]." },
          { "kind": "h3", "text": "10. Melaporkan Semiperimeter sebagai Luas" },
          { "kind": "p", "text": "Menganggap [[s=6]] sebagai 6 unit persegi. Semiperimeter ialah panjang, separuh sempadan, bukan permukaan. Pembetulan: [[s=6]] unit panjang, noktah." },
          { "kind": "h3", "text": "11. Membundarkan Terlalu Awal" },
          { "kind": "p", "text": "Membundarkan 2.5 kepada 3 sebelum menambah memberikan [[3+6+6.5=15.5]] bukannya 15 yang sebenar. Kesilapan kelihatan tidak berbahaya kerana pembundaran kelihatan kecil. Pembetulan: kekalkan ketepatan penuh semasa pengiraan dan bundarkan hanya jawapan akhir." },
          { "kind": "h3", "text": "12. Menggunakan Hanya Dua Sisi dalam Kalkulator Sedia Ada" },
          { "kind": "p", "text": "Memasukkan [[a=3]], [[b=4]] dan tiada [[c]] meninggalkan sempadan terbuka. Kalkulator memerlukan ketiga-tiga panjang kerana perimeter ialah jumlah yang tertutup. Pembetulan: cari dahulu sisi yang tiada dengan teorem Pythagoras, kemudian kira." },
          { "kind": "h3", "text": "13. Mengabaikan Ketaksamaan Segi Tiga" },
          { "kind": "p", "text": "Sisi 2, 3, 10 memberikan [[P=15]] secara aritmetik, tetapi [[2+3<10]], jadi tiada segi tiga wujud. Pembetulan: semak [[a+b>c]] sebelum mempercayai sebarang hasil yang dibina daripada tiga nombor." },
          { "kind": "h3", "text": "14. Menganggap Semiperimeter Ialah Laluan Fizikal Separuh Sempadan" },
          { "kind": "p", "text": "Mencari laluan 6 unit sepanjang tepi 3-4-5. Tiada satu laluan berterusan yang setara dengan [[s]] secara umum; [[s]] ialah separuh jumlah berangka. Pembetulan: anggap [[s]] sebagai nombor untuk formula, bukan laluan untuk dilalui." },
          { "kind": "h3", "text": "15. Mengelirukan Perimeter dengan Hasil Tambah Kaki-kaki Berserenjang Sahaja" },
          { "kind": "p", "text": "Mengira [[a+b=7]] dan berhenti, seolah-olah hipotenus ialah hiasan dalaman. Pembetulan: hipotenus ialah tepi sempadan; [[P=a+b+c]], tiga sebutan, setiap kali." },
          { "kind": "h3", "text": "16. Menganggap Perimeter Sahaja Menentukan Luas Segi Tiga" },
          { "kind": "p", "text": "Percaya bahawa [[P=30]] menetapkan [[K]]. Segi tiga 5-12-13 ([[K=30]]) dan segi tiga 7.5-10-12.5 ([[K=37.5]]) berkongsi [[P=30]] dengan luas berbeza. Pembetulan: luas memerlukan lebih daripada jumlah sempadan; gunakan kaki atau formula Heron." },
          { "kind": "h3", "text": "Salah lawan Betul: Satu Contoh Konkrit" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]], [[c=5]]. Perimeter betul: [[P=3+4+5=12]]. Tersalah mengabaikan hipotenus: [[3+4=7]]. Tujuh bukan perimeter lengkap kerana tepi sempadan ketiga tidak pernah dikira. Semiperimeter betul: [[s=\\frac{12}{2}=6]]. Enam bukan jumlah panjang sempadan: ia separuhnya, nilai yang diperlukan oleh formula seperti formula Heron. Aritmetiknya kelihatan yakin dalam ketiga-tiga kes; hanya geometri yang membezakannya." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Menyemak Sama Ada Perimeter Segi Tiga Bersudut Tegak Anda Betul",
        "blocks": [
          { "kind": "p", "text": "Tujuh semakan bebas, semuanya ditunjukkan pada segi tiga 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[P=12]], [[s=6]]). Persetujuan antara laluan berbeza ialah bukti paling kukuh bahawa jawapan betul, dalam kerja rumah mahupun ukuran praktikal." },
          { "kind": "h3", "text": "Kaedah 1: Tambahkan Ketiga-tiga Sisi Sekali Lagi" },
          { "kind": "p", "text": "Jalankan [[P=a+b+c]] dari awal: [[P=3+4+5=12]]. Laluan kedua dengan nombor yang ditaip semula menangkap kesilapan taip dan digit tertukar yang disembunyikan oleh laluan tunggal." },
          { "kind": "h3", "text": "Kaedah 2: Bahagikan Perimeter dengan Dua" },
          { "kind": "p", "text": "Kira [[s=\\frac{P}{2}]]: [[s=\\frac{12}{2}=6]]. Jika pembelahan dua tidak sepadan dengan output mod semiperimeter, salah satu daripada dua pengiraan itu tersalah dan kedua-duanya wajar dilihat sekali lagi." },
          { "kind": "h3", "text": "Kaedah 3: Gandakan Semiperimeter" },
          { "kind": "p", "text": "Semak [[[\\boxed{P=2s}]]]: [[P=2\\times6=12]]. Ini ialah songsangan Kaedah 2 dan menangkap kelas kesilapan yang sama dari arah lain: [[s]] yang salah gagal di sini walaupun penambahan asal kelihatan baik." },
          { "kind": "h3", "text": "Kaedah 4: Semak Hubungan Pythagoras" },
          { "kind": "p", "text": "Sahkan [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Ini menyemak pengenalan sisi di sebalik setiap pengiraan lain; hipotenus yang salah bermakna satu sisi tersalah label, dan [[P]] dan [[s]] perlu dibina semula." },
          { "kind": "h3", "text": "Kaedah 5: Semak Ketaksamaan Segi Tiga" },
          { "kind": "p", "text": "Sahkan [[a+b>c]]: [[3+4=7>5]]. Tiga panjang perlu mampu membentuk segi tiga sebelum semakan sudut tegak bermakna apa-apa. Kegagalan di sini menghantar anda kembali kepada ukuran, bukan kepada aritmetik." },
          { "kind": "h3", "text": "Kaedah 6: Semak Unit Ukuran" },
          { "kind": "p", "text": "Sahkan bahawa ketiga-tiga sisi menggunakan unit yang serasi. Unit bercampur ialah kesilapan paling senyap dalam topik ini: aritmetiknya kelihatan bersih manakala skalanya salah. Baca semula pemilih unit setiap input sebelum mempercayai jumlah." },
          { "kind": "h3", "text": "Kaedah 7: Bandingkan dengan Visualisasi Langsung" },
          { "kind": "p", "text": "Kalkulator melukis segi tiga daripada sisi yang dimasukkan. Jika lukisan tidak kelihatan seperti objek yang diukur, satu sisi telah ditetapkan dengan salah: sisi input terpanjang harus terletak bertentangan dengan penjuru petak. Rajah itu ialah saksi bebas, dan wajar dilihat sebelum nombor dimasukkan ke dalam pesanan atau laporan." }
        ]
      },
      "sec-related": {
        "h2": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
        "blocks": [
          { "kind": "p", "text": "Ukuran berbeza memerlukan kalkulator berbeza." }
        ]
      },
      "sec-faq": {
        "h2": "Soalan Lazim",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Satu Sempadan, Dua Ukuran Berguna",
        "blocks": [
          { "kind": "p", "text": "Perimeter menjumlahkan sempadan; semiperimeter membelah dua jumlah itu untuk formula yang memerlukannya. Segi tiga 3-4-5 membawa seluruh cerita dalam bentuk miniatur: [[P=12]] unit garis luar untuk pesanan bahan, [[s=6]] unit sedia untuk formula Heron atau hubungan jejari dalam. Satu penambahan dan satu pembelahan dua meliputi kedua-dua kerja." },
          { "kind": "p", "text": "Tabiat kerja mudah: labelkan hipotenus dengan betul, sertakan ketiga-tiga sisi, samakan unit, kekalkan perpuluhan tanpa membundar hingga akhir, dan sahkan melalui kaedah kedua. Dengan tabiat ini, [[P=a+b+c]] dan [[s=\\frac{a+b+c}{2}]] ialah dua ukuran paling boleh dipercayai dalam geometri." }
        ]
      }
    },
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
    "relatedIntro": "Ukuran berbeza memerlukan kalkulator berbeza.",
    "relatedItems": [
      { "href": "/right-triangle-perimeter-calculator/", "label": "Kalkulator perimeter segi tiga bersudut tegak" },
      { "href": "/right-triangle-semiperimeter-calculator/", "label": "Kalkulator semiperimeter segi tiga bersudut tegak" },
      { "href": "/right-triangle-area-from-semiperimeter-calculator/", "label": "Kalkulator luas segi tiga bersudut tegak daripada semiperimeter" },
      { "href": "/right-triangle-area-from-legs-calculator/", "label": "Kalkulator luas segi tiga bersudut tegak daripada kaki" },
      { "href": "/pythagorean-theorem-calculator/", "label": "Kalkulator teorem Pythagoras" },
      { "href": "/missing-leg-from-c-and-a-calculator/", "label": "Kalkulator kaki hilang segi tiga bersudut tegak" }
    ],
    "faqHeading": "Soalan Lazim",
    "faqs": [
      {
        "question": "Apakah formula perimeter segi tiga bersudut tegak?",
        "answer": "P = a + b + c, dengan a dan b ialah dua kaki dan c ialah hipotenus. Tambahkan ketiga-tiga panjang sisi; jumlahnya ialah panjang lengkap sempadan dalam unit linear. Untuk segi tiga 3-4-5, P = 3 + 4 + 5 = 12 unit. Setiap sisi mesti disertakan, termasuk hipotenus, kerana ia ialah salah satu daripada tiga tepi sempadan."
      },
      {
        "question": "Apakah formula semiperimeter segi tiga bersudut tegak?",
        "answer": "s = (a + b + c) / 2, tepat separuh perimeter, bersamaan dengan s = P / 2. Tambahkan ketiga-tiga sisi dahulu, kemudian bahagi sekali. Untuk segi tiga 3-4-5, s = (3 + 4 + 5) / 2 = 6 unit. Ia ialah panjang, bukan luas, dan ia ialah input yang dijangkakan oleh formula seperti formula Heron."
      },
      {
        "question": "Apakah perbezaan antara perimeter dan semiperimeter?",
        "answer": "Perimeter ialah seluruh sempadan, P = a + b + c; semiperimeter ialah separuhnya, s = P / 2. Untuk segi tiga 6-8-10, P = 24 dan s = 12. Gunakan P untuk anggaran bahan mengelilingi garis luar dan s sebagai input formula geometri lanjutan. Kedua-duanya berbeza dengan tepat faktor dua, sentiasa."
      },
      {
        "question": "Mengapakah hipotenus disertakan dalam perimeter?",
        "answer": "Kerana perimeter mengukur sempadan luar yang lengkap, dan hipotenus ialah salah satu daripada tiga tepinya. Berjalan mengelilingi segi tiga bermakna berjalan di atas hipotenus juga. Mengabaikannya mengukur laluan yang terbuka, bukan garis luar yang tertutup. Untuk 3-4-5, meninggalkan 5 memberikan 7, yang bukan perimeter mana-mana segi tiga dengan sisi-sisi ini."
      },
      {
        "question": "Bolehkah saya mengira perimeter jika satu sisi tiada?",
        "answer": "Tidak secara langsung: formula memerlukan ketiga-tiga panjang sempadan. Cari dahulu sisi yang tiada dengan teorem Pythagoras: c = sqrt(a^2 + b^2) untuk hipotenus yang tiada, atau a = sqrt(c^2 - b^2) untuk kaki yang tiada. Dengan a = 6 dan b = 8, c = 10, jadi P = 6 + 8 + 10 = 24. Kalkulator halaman ini memerlukan ketiga-tiga sisi."
      },
      {
        "question": "Bagaimanakah saya mencari hipotenus sebelum mengira perimeter?",
        "answer": "Gunakan c = sqrt(a^2 + b^2) dengan dua kaki yang diketahui. Untuk a = 5 dan b = 12: c = sqrt(25 + 144) = sqrt(169) = 13. Kemudian tambahkan ketiga-tiga sisi: P = 5 + 12 + 13 = 30. Sahkan bahawa hasilnya ialah sisi terpanjang; jika tidak, kaki-kakinya tersalah label."
      },
      {
        "question": "Mengapakah semiperimeter berguna dalam geometri?",
        "answer": "Ia ialah pemboleh ubah semula jadi formula Heron, K = sqrt(s(s - a)(s - b)(s - c)), dan hubungan jejari dalam K = r x s. Formula luas terus menghasilkan separuh-separuh, dan semiperimeter menyerapnya menjadi satu nombor yang mudah. Untuk 3-4-5, s = 6 menyuapkan kedua-dua formula dan kedua-duanya mengembalikan K = 6. Ia menghubungkan panjang sisi kepada luas dan geometri bulatan."
      },
      {
        "question": "Adakah semiperimeter separuh luas segi tiga?",
        "answer": "Tidak. Semiperimeter ialah separuh perimeter, panjang yang diukur dalam unit seperti meter atau kaki. Luas ialah permukaan dua dimensi yang diukur dalam unit persegi. Untuk segi tiga 3-4-5, s = 6 unit manakala luas ialah 6 unit persegi; nombor yang bertepatan ialah kebetulan segi tiga tertentu ini, bukan peraturan."
      },
      {
        "question": "Unit apakah yang patut saya gunakan untuk perimeter?",
        "answer": "Mana-mana unit linear, selagi ketiga-tiga sisi berkongsinya: meter, sentimeter, milimeter, kilometer, kaki, inci, ela atau batu. Tukar sebelum menambah: 3 ft, 48 in, 5 ft menjadi 3 ft, 4 ft, 5 ft, memberikan P = 12 ft. Jangan laporkan perimeter dalam unit persegi; ia ialah panjang, bukan permukaan."
      },
      {
        "question": "Bolehkah saya mengira perimeter menggunakan ukuran perpuluhan?",
        "answer": "Ya. Formula melayan perpuluhan tepat seperti nombor bulat. Dengan a = 2.5, b = 6, c = 6.5: P = 2.5 + 6 + 6.5 = 15 unit dan s = 15 / 2 = 7.5 unit. Kekalkan ketepatan penuh semasa penambahan dan bundarkan hanya jawapan akhir kepada ketepatan yang diwajarkan oleh ukuran."
      },
      {
        "question": "Bagaimanakah saya menyemak sama ada tiga sisi membentuk segi tiga bersudut tegak yang sah?",
        "answer": "Sahkan hubungan Pythagoras a^2 + b^2 = c^2 dengan c sebagai sisi terpanjang, dan sahkan ketaksamaan segi tiga a + b > c. Untuk 3, 4, 5: 9 + 16 = 25 dan 3 + 4 > 5, jadi segi tiga itu sah dan bersudut tegak. Gagal mana-mana ujian bermakna ukuran perlu disemak semula sebelum sebarang perimeter dipercayai."
      },
      {
        "question": "Apakah hubungan antara semiperimeter, jejari dalam dan formula Heron?",
        "answer": "Semiperimeter menyuapkan kedua-duanya: K = r x s menghubungkannya dengan jejari dalam, dan K = sqrt(s(s - a)(s - b)(s - c)) ialah formula Heron yang dibina di atasnya. Untuk segi tiga bersudut tegak, jejari dalam juga terbit daripada sisi sebagai r = (a + b - c) / 2. Dengan 3-4-5, s = 6 dan r = 1, jadi K = 1 x 6 = 6, menyamai hasil Heron."
      }
    ]
  }
};
