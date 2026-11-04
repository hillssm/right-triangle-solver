// perimeterGuideTranslations.b4ms.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for Malay (ms).
export const B4_MS = {
  "ms": {
    "tocHeading": "Dalam panduan ini",
    "tocItems": {
      "sec-intro": "Cara Mengira Perimeter Segi Tiga Bersudut Tegak",
      "sec-geometry": "Apakah Segi Tiga Bersudut Tegak?",
      "sec-definition": "Apakah Perimeter Segi Tiga Bersudut Tegak?",
      "sec-howto": "Cara Mencari Perimeter Segi Tiga Bersudut Tegak",
      "sec-examples": "Contoh Langkah demi Langkah Perimeter Segi Tiga Bersudut Tegak",
      "sec-missing": "Cara Mengira Perimeter Segi Tiga Bersudut Tegak dengan Satu Sisi yang Tiada",
      "sec-applications": "Aplikasi Kehidupan Sebenar Perimeter Segi Tiga Bersudut Tegak",
      "sec-properties": "Sifat Khas Perimeter Segi Tiga Bersudut Tegak",
      "sec-vs-area": "Apakah Perbezaan antara Perimeter dan Luas?",
      "sec-semiperimeter": "Apakah Hubungan antara Perimeter dan Semiperimeter?",
      "sec-units": "Memahami Unit Ukuran dalam Pengiraan Perimeter Segi Tiga Bersudut Tegak",
      "sec-mistakes": "Kesilapan Biasa Ketika Mengira Perimeter Segi Tiga Bersudut Tegak",
      "sec-verify": "Cara Menyemak Sama Ada Perimeter Segi Tiga Bersudut Tegak Anda Betul",
      "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "sec-faq": "Soalan Lazim",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Mengira Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Ambil sebuah segi tiga bersudut tegak dengan sisi [[a=3]], [[b=4]], dan [[c=5]]. Perimeternya ialah [[P=3+4+5]], atau [[[\\boxed{P=12\\text{ units}}]]]. Angka 12 memberitahu anda jarak lengkap mengelilingi sempadan segi tiga itu: berjalanlah sepanjang ketiga-tiga tepinya dan anda telah menempuh 12 unit." },
          { "kind": "p", "text": "Kalkulator ini melakukan penambahan yang sama untuk mana-mana segi tiga bersudut tegak. Anda memasukkan dua kaki dan hipotenus, dan ia mengembalikan jumlah panjang sempadan dengan kerja langkah demi langkah serta rajah langsung. Tiga panjang sisi diperlukan kerana sempadan mempunyai tiga tepi, dan hipotenus mesti disertakan: ia merupakan salah satu daripada tiga tepi itu walaupun ia tidak pernah menyentuh sudut tegak. Kedua-dua kaki membentuk penjuru petak, dan hipotenus merentanginya untuk menutup bentuk itu." },
          { "kind": "p", "text": "Perimeter ialah ukuran linear, bukan ukuran luas. Ia menjawab persoalan berapa banyak tepi yang saya perlukan, bukannya berapa banyak permukaan di dalamnya. Perbezaan itu menjadikannya nombor yang tepat setiap kali anda menganggar pengepingan, kemasan, bingkai, wayar, tali, atau sempadan kain di sekeliling bentuk segi tiga bersudut tegak." }
        ]
      },
      "sec-geometry": {
        "h2": "Apakah Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "p", "text": "Sebelum sebarang penambahan bermula, ketiga-tiga sisi mesti dilabel dengan betul. Simbol-simbol di bawah kekal tetap sepanjang panduan ini, dan kalkulator menggunakan nama yang sama." },
          { "kind": "h3", "text": "Definisi Segi Tiga Bersudut Tegak" },
          { "kind": "p", "text": "Segi tiga bersudut tegak ialah segi tiga yang mengandungi satu sudut pedalaman berukuran tepat 90 darjah. Ia mempunyai tiga bucu, tiga sisi, dua sudut tirus, dan satu sudut tegak yang biasanya ditanda dengan petak kecil. Dua sisi yang membentuk sudut tegak ialah kaki; sisi yang bertentangan dengan sudut tegak ialah hipotenus. Memandangkan sudut-sudut mana-mana segi tiga berjumlah 180 darjah, [[A+B+C=180^\\circ]], dan dengan [[C=90^\\circ]] maka [[[\\boxed{A+B=90^\\circ}]]]: kedua-dua sudut tirus adalah pelengkap, jadi mengetahui satu akan menentukan satu lagi. Jumlah sudut penting ketika mengenal pasti segi tiga bersudut tegak kerana ia ialah ujian yang mesti dilalui oleh panjang sisi: hanya penjuru 90 darjah yang tulen menghasilkan hubungan sisi yang menjadi sandaran keseluruhan panduan ini." },
          { "kind": "h3", "text": "Apakah Dua Kaki Itu?" },
          { "kind": "p", "text": "Kaki [[a]] dan kaki [[b]] ialah dua sisi yang bertemu di bucu sudut tegak, berserenjang antara satu sama lain. Sama ada satu boleh dilukis melintang atau menegak bergantung pada orientasi segi tiga; yang mentakrifkannya ialah penjuru 90 darjah yang dibentuknya, bukan arahnya di atas halaman. Ia berbeza daripada hipotenus dari segi kedudukan dan panjang: setiap kaki menyentuh sudut tegak, dan setiap kaki lebih pendek daripada hipotenus. Dalam kerja perimeter, peranannya mudah: kedua-duanya ialah tepi sempadan, jadi kedua-duanya masuk ke dalam jumlah." },
          { "kind": "h3", "text": "Apakah Hipotenus?" },
          { "kind": "p", "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tegak, sentiasa sisi terpanjang segi tiga. Ia tidak pernah membentuk sudut tegak; ia merentanginya, menghubungkan hujung-hujung jauh kedua-dua kaki. Ia berbeza daripada kaki dari segi kedudukan dan panjang: kaki bertemu pada 90 darjah, manakala hipotenus bertemu setiap kaki pada sudut tirus. Ia melengkapkan sempadan segi tiga, itulah sebabnya ia mesti disertakan dalam pengiraan perimeter. Apabila kedua-dua kaki diketahui, teorem Pythagoras mendapatkannya semula: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Cara Mengenal Pasti Label Sisi yang Betul" },
          { "kind": "p", "text": "[[a]] dan [[b]] ialah dua sisi yang bertemu pada 90 darjah, dan [[c]] bertentangan dengan sudut tegak. Dalam segi tiga bersudut tegak yang tak merosot, [[c]] ialah sisi terpanjang. Penanda sudut tegak memberitahu anda sisi mana ialah [[c]]: ia ialah sisi yang tidak menyentuh bucu itu. Semakan susunan pantas membantu: susun ketiga-tiga nombor, dan yang terbesar mesti memainkan peranan [[c]]. Jika sisi terbesar tidak terletak bertentangan dengan penjuru petak, label-label itu salah, dan setiap pengiraan yang dibina di atasnya juga salah." },
          { "kind": "h3", "text": "Adakah Formula Perimeter Hanya Berfungsi untuk Segi Tiga Bersudut Tegak?" },
          { "kind": "p", "text": "Terdapat perbezaan matematik yang penting di sini. Formula [[P=a+b+c]] berfungsi untuk setiap segi tiga, bersudut tegak atau tidak: mana-mana sempadan tiga sisi dijumlahkan dengan cara yang sama. Apa yang ditambah oleh syarat sudut tegak ialah hubungan khas [[a^2+b^2=c^2]], yang berguna untuk mencari sisi yang tiada dan untuk menyemak sama ada ukuran itu benar-benar menghuraikan segi tiga bersudut tegak. Formula perimeter adalah sejagat; hubungan Pythagoras ialah bonus segi tiga bersudut tegak." }
        ],
        "imgAlt": "Segi tiga bersudut tegak ABC dengan kaki a dan b, hipotenus c, sudut tegak di C, dan sempadan perimeter yang ditonjolkan",
        "figcaption": "Segi tiga ABC: kaki a dan b bertemu pada sudut tegak C, hipotenus c menutup sempadan, dan P = a + b + c menjejaki ketiga-tiga tepi."
      },
      "sec-definition": {
        "h2": "Apakah Perimeter Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "h3", "text": "Definisi Perimeter" },
          { "kind": "p", "text": "Perimeter ialah jumlah jarak mengelilingi sempadan luar bentuk dua dimensi. Untuk segi tiga, ia ialah hasil tambah ketiga-tiga panjang sisinya: [[[\\boxed{P=a+b+c}]]]. Ketiga-tiga sisi mesti disertakan kerana sempadan tidak lengkap sehingga setiap tepi telah dikira. Meninggalkan satu bukan memberikan perimeter yang lebih pendek; ia memberikan kuantiti yang berbeza dan salah." },
          { "kind": "h3", "text": "Mengapakah Hipotenus Dikira dalam Perimeter?" },
          { "kind": "p", "text": "Perimeter mengukur sempadan luar yang lengkap, dan hipotenus bukan ukuran pilihan atau ukuran dalaman. Ia ialah salah satu daripada tiga tepi luar. Ambil [[a=3]], [[b=4]], [[c=5]]. Pengiraan yang salah [[3+4=7]] hanya mengira dua kaki, iaitu sisi-sisi penjuru petak. Pengiraan yang betul [[3+4+5=12]] berjalan mengelilingi segi tiga penuh dan kembali ke titik permulaan. Nilai 7 ialah jumlah panjang kedua-dua kaki, bukan perimeter penuh, kerana laluan dari hujung kaki [[b]] kembali ke permulaan kaki [[a]] berjalan di sepanjang hipotenus." },
          { "kind": "h3", "text": "Bagaimanakah Formula Perimeter Berfungsi?" },
          { "kind": "p", "text": "Formula ini terbahagi kepada tiga bahagian. Sisi pertama: [[a]]. Sisi kedua: [[b]]. Sisi ketiga: [[c]]. Digabungkan: [[P=a+b+c]]. Penambahan sudah mencukupi kerana perimeter ialah jumlah panjang, dan panjang di sepanjang satu laluan hanya perlu ditambah. Tiada pembahagian diperlukan, tiada pengkuadratan, tiada trigonometri: formula ini ialah penggunaan paling mudah bagi takrif sempadan." },
          { "kind": "h3", "text": "Apakah Maksud Perimeter dalam Kehidupan Sebenar?" },
          { "kind": "p", "text": "Perimeter ialah jumlah panjang sempadan: bahan yang diperlukan untuk mengelilingi objek sekali. Itu menjadikannya nombor di sebalik ukuran tepi, dimensi bingkai, panjang sempadan, keperluan pengepingan, kemasan dan acuan, serta panjang tali dan wayar. Mengukur sempadan luar ialah kerja yang berbeza daripada mengukur permukaan yang tertutup di dalam segi tiga. Mengeping taman segi tiga memerlukan perimeter; menutup taman yang sama dengan rumput memerlukan luas. Mengelirukan kedua-duanya membeli bahan yang salah." }
        ]
      },
      "sec-howto": {
        "h2": "Cara Mencari Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Pengiraan ini mengikut urutan yang jelas. Setiap langkah mempunyai tujuan: mengenal pasti, menyemak, menggantikan, menambah, dan mengesahkan. Segi tiga 3-4-5 menunjukkan setiap langkah." },
          { "kind": "p", "text": "<strong>Langkah 1: Kenal pasti ketiga-tiga sisi.</strong> Kumpulkan ukuran [[a=3]], [[b=4]], [[c=5]]. Langkah ini mengumpulkan data mentah sebelum sebarang aritmetik." },
          { "kind": "p", "text": "<strong>Langkah 2: Kenal pasti dua kaki yang berserenjang.</strong> Sahkan bahawa 3 dan 4 ialah kaki, iaitu sisi-sisi yang membentuk penjuru 90 darjah. Ini memberikan [[a]] dan [[b]] peranan yang betul." },
          { "kind": "p", "text": "<strong>Langkah 3: Kenal pasti hipotenus yang bertentangan dengan sudut tegak.</strong> Sahkan bahawa 5 ialah hipotenus: ia ialah sisi terpanjang dan terletak bertentangan dengan penjuru petak. Ini mengelakkan kesilapan pelabelan yang paling biasa." },
          { "kind": "p", "text": "<strong>Langkah 4: Sahkan bahawa ketiga-tiga ukuran menggunakan unit yang serasi.</strong> Ketiga-tiganya ialah unit biasa di sini, jadi tiada penukaran diperlukan. Langkah ini melindungi daripada menambah meter kepada kaki." },
          { "kind": "p", "text": "<strong>Langkah 5: Tulis formula.</strong> [[P=a+b+c]]. Menuliskannya mengekalkan struktur yang kelihatan semasa menggantikan." },
          { "kind": "p", "text": "<strong>Langkah 6: Gantikan ukuran yang diketahui.</strong> [[P=3+4+5]]. Setiap simbol digantikan dengan nombornya." },
          { "kind": "p", "text": "<strong>Langkah 7: Tambahkan ketiga-tiga nilai.</strong> [[P=12]]. Satu penambahan ialah keseluruhan aritmetik." },
          { "kind": "p", "text": "<strong>Langkah 8: Lampirkan unit ukuran linear yang betul.</strong> [[[\\boxed{P=12\\text{ units}}]]]. Perimeter ialah panjang, jadi ia mengambil unit linear, bukan unit persegi." },
          { "kind": "p", "text": "<strong>Langkah 9: Sahkan keputusan.</strong> Semak [[3^2+4^2=5^2]]: [[9+16=25]]. Sisi-sisi itu memenuhi teorem Pythagoras, jadi segi tiga itu benar-benar bersudut tegak dan perimeternya boleh dipercayai." },
          { "kind": "h3", "text": "Mengapakah Penting untuk Mengenal Pasti Sisi dengan Betul?" },
          { "kind": "p", "text": "Pelabelan yang salah menjejaskan segala-galanya selepas itu. Pengesahan matematik gagal apabila hipotenus dilabel salah, kerana semakan Pythagoras menjangkakan [[c]] ialah sisi terpanjang. Pengiraan sisi yang tiada menggunakan formula berbeza untuk kaki yang tiada berbanding hipotenus yang tiada, jadi label yang tertukar menggunakan formula yang salah. Input kalkulator dikuncikan kepada [[a]], [[b]], dan [[c]], jadi nilai yang tertukar menghasilkan jawapan yang kelihatan munasabah tetapi salah. Visualisasi segi tiga langsung juga akan kelihatan herot apabila nilai kaki duduk di slot hipotenus. Mendapatkan label yang betul sekali melindungi setiap langkah kemudian." },
          { "kind": "h3", "text": "Bolehkah Saya Mengira Perimeter Tanpa Mengetahui Hipotenus?" },
          { "kind": "p", "text": "Ya, dengan satu langkah tambahan dahulu. Jika kedua-dua kaki diketahui, hipotenus boleh dicari menggunakan teorem Pythagoras: [[c=\\sqrt{a^2+b^2}]]. Setelah [[c]] diketahui, perimeter menyusul dengan penambahan biasa. Ini tidak bermakna kalkulator perimeter sedia ada hanya menerima dua sisi: kalkulator memerlukan ketiga-tiga input, jadi sisi yang tiada mesti dikira dengan tangan (atau dengan kalkulator sisi) sebelum memasukkan nilai." }
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Empat contoh di bawah mengekalkan kes-kes yang telah dikerjakan dan mengembangkan penjelasannya. Setiap satu menggantikan, menambah, dan kemudian mengesahkan melalui teorem Pythagoras." },
          { "kind": "h3", "text": "Contoh 1: Segi Tiga Bersudut Tegak 3-4-5" },
          { "kind": "p", "text": "Diberi: [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Formula: [[P=a+b+c]]" },
          { "kind": "p", "text": "Gantikan: [[P=3+4+5]]" },
          { "kind": "p", "text": "Tambah: [[P=12]]" },
          { "kind": "p", "text": "Jawapan akhir: [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Sahkan: [[3^2+4^2=5^2]], iaitu [[9+16=25]]. Ukuran itu memenuhi teorem Pythagoras, jadi ia membentuk segi tiga bersudut tegak: dua petak kecil yang dibina di atas kaki tepat mengisi petak yang dibina di atas hipotenus." },
          { "kind": "h3", "text": "Contoh 2: Segi Tiga Bersudut Tegak 5-12-13" },
          { "kind": "p", "text": "Diberi: [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Gantikan: [[P=5+12+13]]" },
          { "kind": "p", "text": "Jawapan akhir: [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "p", "text": "Sahkan: [[5^2+12^2=13^2]], iaitu [[25+144=169]]. Kesamaan ini mengesahkan segi tiga bersudut tegak yang sah." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga Bersudut Tegak 8-15-17" },
          { "kind": "p", "text": "Diberi: [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Gantikan: [[P=8+15+17]]" },
          { "kind": "p", "text": "Jawapan akhir: [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "p", "text": "Sahkan: [[8^2+15^2=17^2]], iaitu [[64+225=289]]. Sekali lagi petak-petak itu seimbang, mengesahkan sudut tegak." },
          { "kind": "h3", "text": "Contoh 4: Panjang Sisi Perpuluhan" },
          { "kind": "p", "text": "Diberi: [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Gantikan: [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Jawapan akhir: [[[\\boxed{P=15\\text{ units}}]]]" },
          { "kind": "p", "text": "Sahkan: [[2.5^2+6^2=6.5^2]], iaitu [[6.25+36=42.25]]. Nilai perpuluhan tidak mengubah formula: penambahan berfungsi sama untuk nombor bulat dan perpuluhan, dan aritmetik pengesahannya serupa." }
        ],
        "table": {
          "headers": ["Segi Tiga", "Kaki a", "Kaki b", "Hipotenus c", "Perimeter P", "Pengesahan"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["Jadual menunjukkan bagaimana panjang sisi yang berbeza menghasilkan ukuran sempadan yang berbeza manakala rentak dua langkah yang sama, tambah kemudian sahkan, kekal tidak berubah."]
      },
      "sec-missing": {
        "h2": "Cara Mengira Perimeter Segi Tiga Bersudut Tegak dengan Satu Sisi yang Tiada",
        "blocks": [
          { "kind": "p", "text": "Kalkulator perimeter sedia ada memerlukan ketiga-tiga panjang sisi. Jika satu sisi tidak diketahui, kira dahulu dengan teorem Pythagoras, kemudian tambah. Tiga kes di bawah merangkumi setiap kemungkinan." },
          { "kind": "h3", "text": "Kes 1: Mencari Hipotenus yang Tiada" },
          { "kind": "p", "text": "Apabila kedua-dua kaki diketahui: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "p", "text": "Contoh: [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Sekarang kira: [[P=6+8+10]], jadi [[[\\boxed{P=24\\text{ units}}]]]." },
          { "kind": "h3", "text": "Kes 2: Mencari Kaki yang Tiada" },
          { "kind": "p", "text": "Apabila hipotenus [[c]] dan kaki [[a]] diketahui: [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]" },
          { "kind": "p", "text": "Contoh: [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Sekarang kira: [[P=5+12+13]], jadi [[[\\boxed{P=30\\text{ units}}]]]." },
          { "kind": "h3", "text": "Kes 3: Mencari Kaki Lain yang Tiada" },
          { "kind": "p", "text": "Apabila hipotenus [[c]] dan kaki [[b]] diketahui: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]" },
          { "kind": "p", "text": "Contoh: [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Sekarang kira: [[P=8+15+17]], jadi [[[\\boxed{P=40\\text{ units}}]]]." },
          { "kind": "h3", "text": "Mengapakah Anda Mesti Mencari Sisi yang Tiada Dahulu?" },
          { "kind": "p", "text": "Perimeter mewakili sempadan yang lengkap. Mengabaikan sisi yang tidak diketahui menghasilkan keputusan yang tidak lengkap: dua sisi yang diketahui memberikan laluan separa, bukan perimeter. Pengiraan sisi yang tiada ini ialah kaedah matematik sokongan, bukan mod tambahan dalam kalkulator perimeter sedia ada. Apabila anda hanya mengetahui dua sisi, Kalkulator Sisi Segi Tiga Bersudut Tegak mendapatkan semula sisi ketiga, dan kemudian kalkulator perimeter menyelesaikan tugas itu." }
        ],
        "imgAlt": "Segi tiga bersudut tegak dengan kaki 6 dan 8, hipotenus 10 ditemui melalui Pythagoras, kemudian perimeter 24",
        "figcaption": "Kaki 6 dan 8 memberikan c = 10 melalui teorem Pythagoras, kemudian P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Aplikasi Kehidupan Sebenar Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Dua belas contoh realistik yang dikerjakan sepenuhnya menyusul. Setiap satu menamakan satu situasi, memberikan tiga ukuran sisi, menunjukkan penambahan, dan menjelaskan apa yang dibantu anggarkan oleh keputusan itu. Anggap setiap satu sebagai model geometri segi tiga bersudut tegak yang dipermudahkan: objek sebenar jarang merupakan segi tiga yang sempurna, jadi elaun bahan, sisa potongan, dan pengesahan pembinaan terletak di luar nombor perimeter itu sendiri." },
          { "kind": "h3", "text": "Contoh 1: Bingkai Tingkap Kaca Segi Tiga" },
          { "kind": "p", "text": "Bingkai tingkap segi tiga mempunyai [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Kemudian [[P=3+4+5]], jadi [[[\\boxed{P=12\\text{ m}}]]]. 12 meter itu mewakili jumlah panjang mengelilingi garis luar segi tiga tingkap, panjang stok bingkai yang perlu dipotong. Sambungan bingkai dan elaun potongan mungkin memerlukan bahan tambahan melebihi 12 meter itu." },
          { "kind": "h3", "text": "Contoh 2: Kemasan Tepi Bumbung" },
          { "kind": "p", "text": "Bahagian bumbung segi tiga bersudut tegak mempunyai [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Kemudian [[P=6+8+10]], jadi [[[\\boxed{P=24\\text{ ft}}]]]. Perimeter menganggarkan kemasan mengelilingi garis luar segi tiga hujung bumbung. Penjuru dan pertindihan di cucur atap menambah kepada panjang belian." },
          { "kind": "h3", "text": "Contoh 3: Pagar Taman Segi Tiga" },
          { "kind": "p", "text": "Bahagian taman segi tiga mempunyai [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]]. Kemudian [[P=5+12+13]], jadi [[[\\boxed{P=30\\text{ m}}]]]. Jumlah panjang sempadan menganggarkan pengepingan yang diperlukan mengelilingi taman. Pintu pagar, tiang, pertindihan, dan elaun pemasangan dikira berasingan daripada 30 meter garis pagar itu." },
          { "kind": "h3", "text": "Contoh 4: Pendakap Sokongan Keluli" },
          { "kind": "p", "text": "Pendakap logam segi tiga bersudut tegak mempunyai [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Kemudian [[P=8+15+17]], jadi [[[\\boxed{P=40\\text{ cm}}]]]. Perimeter menerangkan tepi luar pendakap dan membantu menganggar bahan tepi pelindung. Ia tidak menentukan kekuatan struktur, yang bergantung pada ketebalan, aloi, dan laluan beban bukannya panjang tepi." },
          { "kind": "h3", "text": "Contoh 5: Sepanduk Kain Segi Tiga" },
          { "kind": "p", "text": "Sepanduk kain mempunyai [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]]. Kemudian [[P=9+12+15]], jadi [[[\\boxed{P=36\\text{ ft}}]]]. Perimeter menganggarkan jumlah panjang tepi yang memerlukan kelim atau penjilidan. Kain tambahan untuk jahitan dan lipatan dikecualikan daripada 36 kaki itu." },
          { "kind": "h3", "text": "Contoh 6: Bingkai Papan Tanda Segi Tiga" },
          { "kind": "p", "text": "Panel papan tanda segi tiga bersudut tegak mempunyai [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Kemudian [[P=12+16+20]], jadi [[[\\boxed{P=48\\text{ in}}]]]. Perimeter menganggarkan bingkai atau sempadan hiasan mengelilingi panel." },
          { "kind": "h3", "text": "Contoh 7: Sempadan Landskap" },
          { "kind": "p", "text": "Bahagian landskap segi tiga bersudut tegak mempunyai [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Kemudian [[P=7+24+25]], jadi [[[\\boxed{P=56\\text{ m}}]]]. Keputusan ini menganggarkan panjang penuh tepi landskap untuk bahagian itu, sebelum sisa dan pertindihan sambungan." },
          { "kind": "h3", "text": "Contoh 8: Bingkai Sokongan Panel Solar" },
          { "kind": "p", "text": "Bingkai sokongan segi tiga bersudut tegak yang kecil mempunyai [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Kemudian [[P=9+40+41]], jadi [[[\\boxed{P=90\\text{ cm}}]]]. Perimeter menerangkan garis luar segi tiga lengkap bingkai itu." },
          { "kind": "h3", "text": "Contoh 9: Sempadan Kanopi Segi Tiga" },
          { "kind": "p", "text": "Bahagian kanopi segi tiga bersudut tegak mempunyai [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]]. Kemudian [[P=15+20+25]], jadi [[[\\boxed{P=60\\text{ ft}}]]]. Perimeter menganggarkan bahan sempadan yang diperlukan mengelilingi kain, tidak termasuk perkakasan pemasangan." },
          { "kind": "h3", "text": "Contoh 10: Kemasan Hujung Bumbung Gudang" },
          { "kind": "p", "text": "Bahagian hujung bumbung gudang yang dipermudahkan mempunyai [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]]. Kemudian [[P=11+60+61]], jadi [[[\\boxed{P=132\\text{ ft}}]]]. Jumlah perimeter mewakili tiga tepi luar bahagian segi tiga yang dimodelkan itu." },
          { "kind": "h3", "text": "Contoh 11: Panel Fabrikasi Industri" },
          { "kind": "p", "text": "Panel fabrikasi segi tiga bersudut tegak mempunyai [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]]. Kemudian [[P=13+84+85]], jadi [[[\\boxed{P=182\\text{ cm}}]]]. Keputusan ini membantu menganggar profil tepi pelindung atau bahan sempadan untuk panel itu." },
          { "kind": "h3", "text": "Contoh 12: Goset Sokongan Papan Lapis" },
          { "kind": "p", "text": "Plat sokongan papan lapis segi tiga bersudut tegak mempunyai [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]]. Kemudian [[P=28+45+53]], jadi [[[\\boxed{P=126\\text{ cm}}]]]. Perimeter mewakili tepi luar lengkap plat papan lapis itu." }
        ],
        "table": {
          "headers": ["Aplikasi praktikal", "Kaki a", "Kaki b", "Hipotenus c", "Perimeter P", "Unit"],
          "rows": [
            ["Bingkai tingkap kaca segi tiga", "3", "4", "5", "12", "m"],
            ["Kemasan tepi bumbung", "6", "8", "10", "24", "ft"],
            ["Pagar taman segi tiga", "5", "12", "13", "30", "m"],
            ["Pendakap sokongan keluli", "8", "15", "17", "40", "cm"],
            ["Sepanduk kain segi tiga", "9", "12", "15", "36", "ft"],
            ["Bingkai papan tanda segi tiga", "12", "16", "20", "48", "in"],
            ["Sempadan landskap", "7", "24", "25", "56", "m"],
            ["Bingkai sokongan panel solar", "9", "40", "41", "90", "cm"],
            ["Sempadan kanopi segi tiga", "15", "20", "25", "60", "ft"],
            ["Kemasan hujung bumbung gudang", "11", "60", "61", "132", "ft"],
            ["Panel fabrikasi industri", "13", "84", "85", "182", "cm"],
            ["Goset sokongan papan lapis", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["Ingat had praktikal: elaun bahan mungkin diperlukan, sisa potongan tidak disertakan, sambungan bingkai mungkin menambah keperluan bahan, pintu pagar dan bukaan menjejaskan kuantiti pengepingan, ukuran pembinaan sebenar harus disahkan, dan perimeter sahaja tidak menentukan kekuatan struktur atau kapasiti beban."],
        "imgAlt": "Empat contoh perimeter dunia sebenar: bingkai tingkap, kemasan bumbung, sempadan taman, pendakap keluli",
        "figcaption": "Tingkap, bumbung, taman, dan pendakap: setiap panel menjejaki sempadan segi tiga dan perimeternya."
      },
      "sec-properties": {
        "h2": "Sifat Khas Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Selain penambahan mudah, perimeter segi tiga bersudut tegak mematuhi beberapa ketaksamaan tajam. Ia juga berfungsi sebagai semakan kewarasan pantas ke atas mana-mana keputusan yang dikira." },
          { "kind": "h3", "text": "Perimeter Lebih Besar daripada Dua Kali Ganda Hipotenus" },
          { "kind": "p", "text": "Untuk setiap segi tiga yang sah, ketaksamaan segi tiga memberikan [[a+b>c]]. Tambah [[c]] kepada kedua-dua belah: [[a+b+c>2c]]. Oleh itu [[[\\boxed{P>2c}]]]. Dalam bahasa mudah: kedua-dua kaki bersama sentiasa lebih panjang daripada hipotenus, jadi menambah hipotenus kepada kedua-dua belah mengekalkan arah ketaksamaan. Untuk segi tiga 3-4-5, [[P=12]] dan [[2c=10]], dan 12 memang lebih besar daripada 10." },
          { "kind": "h3", "text": "Perimeter Kurang daripada Tiga Kali Ganda Hipotenus" },
          { "kind": "p", "text": "Memandangkan hipotenus lebih panjang daripada mana-mana kaki, [[a<c]] dan [[b<c]]. Oleh itu [[a+b<2c]]. Menambah [[c]] memberikan [[[\\boxed{P<3c}]]]. Ini ialah semakan pantas yang berguna: mana-mana perimeter yang didakwa sama dengan atau melebihi tiga kali ganda hipotenus tidak mungkin milik segi tiga bersudut tegak yang sah. Untuk segi tiga 3-4-5, [[3c=15]], dan 12 berada selesa di bawahnya." },
          { "kind": "h3", "text": "Perimeter Segi Tiga 45-45-90" },
          { "kind": "p", "text": "Dalam segi tiga 45-45-90 kedua-dua kaki mempunyai panjang yang sama. Biar setiap kaki sama dengan [[k]]. Hipotenusnya ialah [[c=k\\sqrt{2}]]. Oleh itu [[P=k+k+k\\sqrt{2}]], atau [[[\\boxed{P=k(2+\\sqrt{2})}]]]. Dengan [[k=5]], perimeternya ialah [[5(2+\\sqrt{2})\\approx17.07]]: dua kaki berukuran 5 ditambah hipotenus kira-kira 7.07." },
          { "kind": "h3", "text": "Perimeter Segi Tiga 30-60-90" },
          { "kind": "p", "text": "Jika kaki terpendek ialah [[k]], maka kaki yang lebih panjang ialah [[k\\sqrt{3}]] dan hipotenusnya ialah [[2k]]. Oleh itu [[P=k+k\\sqrt{3}+2k]], atau [[[\\boxed{P=k(3+\\sqrt{3})}]]]. Dengan [[k=4]], sisi-sisinya ialah 4, kira-kira 6.93, dan 8, memberikan perimeter kira-kira 18.93." },
          { "kind": "h3", "text": "Segi Tiga Bersudut Tegak Manakah yang Mempunyai Perimeter Terbesar untuk Hipotenus Tetap?" },
          { "kind": "p", "text": "Secara intuitif, apabila hipotenus kekal tetap, perimeter bertambah apabila kedua-dua kaki bertambah bersama, dan ia terbesar apabila tiada kaki yang dikurangkan: apabila kedua-dua kaki sama. Itulah segi tiga 45-45-90. Pernyataan tepatnya menggunakan ketaksamaan [[a+b\\leq\\sqrt{2(a^2+b^2)}]]. Memandangkan [[a^2+b^2=c^2]], maka [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]], dengan kesamaan tepat apabila [[a=b]]. Jadi dalam kalangan semua segi tiga bersudut tegak yang berkongsi satu hipotenus, segi tiga bersudut tegak sama kaki memenangi pertandingan perimeter." }
        ]
      },
      "sec-vs-area": {
        "h2": "Apakah Perbezaan antara Perimeter dan Luas?",
        "blocks": [
          { "kind": "p", "text": "Perimeter dan luas kedua-duanya menghuraikan segi tiga, tetapi ia menjawab persoalan yang berbeza. Bahagian ini menarik garisnya dengan teliti." },
          { "kind": "h3", "text": "Perimeter Mengukur Sempadan Luar" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] mengukur jumlah jarak mengelilingi segi tiga. Unitnya ialah linear: meter, sentimeter, milimeter, kaki, inci. Ia memberitahu anda berapa banyak bahan yang menjejaki tepi." },
          { "kind": "h3", "text": "Luas Mengukur Permukaan yang Tertutup" },
          { "kind": "p", "text": "Untuk segi tiga bersudut tegak, [[[\\boxed{K=\\frac{ab}{2}}]]]. Dua kaki yang berserenjang berfungsi sebagai tapak dan tinggi, jadi tiada hipotenus muncul dalam formula. Luas menggunakan unit persegi: meter persegi, sentimeter persegi, kaki persegi, inci persegi. Ia memberitahu anda berapa banyak permukaan terletak di dalam sempadan." },
          { "kind": "h3", "text": "Perbandingan Dikerjakan Menggunakan Segi Tiga 3-4-5" },
          { "kind": "p", "text": "Perimeter: [[P=3+4+5]], jadi [[[\\boxed{P=12\\text{ units}}]]]." },
          { "kind": "p", "text": "Luas: [[K=\\frac{3\\times4}{2}]], jadi [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "p", "text": "Nombor 12 dan 6 menghuraikan sifat yang sama sekali berbeza bagi segi tiga yang sama: satu ialah perjalanan mengelilinginya, satu lagi ialah tanah yang diliputinya." },
          { "kind": "h3", "text": "Bolehkah Dua Segi Tiga Bersudut Tegak Mempunyai Perimeter yang Sama tetapi Luas yang Berbeza?" },
          { "kind": "p", "text": "Ya. Perimeter sahaja tidak menentukan luas secara unik; bentuk dan kadar segi tiga mempengaruhi luas tertutupnya. Segi tiga 3-4-5 mempunyai perimeter 12 dan luas 6. Segi tiga 45-45-90 juga boleh mempunyai perimeter 12: daripada [[P=k(2+\\sqrt{2})=12]], kakinya ialah [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]], dan luasnya ialah [[K=\\frac{k^2}{2}\\approx6.18]] unit persegi, sedikit lebih besar daripada 6. Panjang sempadan yang sama, dalaman yang berbeza: bentuk sama kaki melingkungi sedikit lebih banyak." }
        ],
        "imgAlt": "Segi tiga 3-4-5 dengan sempadan ditonjolkan P bersamaan 12 dan kawasan dalaman berlorek K bersamaan 6",
        "figcaption": "Tepi yang ditonjolkan ialah perimeter; bahagian dalam yang berlorek ialah luas. Dua ukuran yang berbeza."
      },
      "sec-semiperimeter": {
        "h2": "Apakah Hubungan antara Perimeter dan Semiperimeter?",
        "blocks": [
          { "kind": "p", "text": "Semiperimeter ialah separuh perimeter penuh: [[[\\boxed{s=\\frac{P}{2}}]]]. Untuk segi tiga bersudut tegak iaitu [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Ia kekal sebagai ukuran sokongan di halaman ini, bukan subjek utama kedua." },
          { "kind": "h3", "text": "Contoh Berangka" },
          { "kind": "p", "text": "Gunakan [[a=3,\\;b=4,\\;c=5]]. Perimeternya ialah [[P=12]], jadi semiperimeternya ialah [[s=\\frac{12}{2}=6]]. Kedua-duanya ialah ukuran linear dalam unit yang sama; satu hanyalah separuh daripada satu lagi." },
          { "kind": "h3", "text": "Mengapakah Semiperimeter Berguna?" },
          { "kind": "p", "text": "Semiperimeter ialah ukuran perantaraan yang penting dalam geometri segi tiga. Ia muncul dalam formula Heron untuk luas, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], dan dalam hubungan jejari dalam [[K=rs]], dan ia memudahkan beberapa bukti geometri lanjutan. Setiap kali formula meminta [[s]], kira perimeter dahulu dan bahagikannya separuh. Untuk alat khusus, gunakan Kalkulator Semiperimeter Segi Tiga Bersudut Tegak." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Unit Ukuran dalam Pengiraan Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Perimeter berfungsi dalam mana-mana unit panjang: meter, sentimeter, milimeter, kilometer, kaki, inci, ela, atau batu. Nombor berubah mengikut unit, tetapi segi tiga tidak." },
          { "kind": "h3", "text": "Mengapakah Ketiga-tiga Ukuran Sisi Mesti Menggunakan Unit yang Serasi?" },
          { "kind": "p", "text": "Perimeter dikira melalui penambahan, dan penambahan hanya bermakna antara kuantiti yang sejenis. Menambah 3 kaki kepada 48 inci tanpa penukaran mencampurkan dua skala dan menghasilkan jumlah yang tidak bermakna. Tukar setiap sisi kepada satu unit sepunya dahulu, kemudian tambah." },
          { "kind": "h3", "text": "Contoh Penukaran Unit yang Dikerjakan" },
          { "kind": "p", "text": "Diberi [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Tukar inci kepada kaki: [[48\\text{ inches}=4\\text{ ft}]]. Sekarang ketiga-tiga sisi dalam kaki, jadi [[P=3+4+5]] dan [[[\\boxed{P=12\\text{ ft}}]]]. Penukaran mesti berlaku sebelum penambahan, bukan selepas." },
          { "kind": "h3", "text": "Bagaimanakah Pemilih Unit Kalkulator Membantu" },
          { "kind": "p", "text": "Setiap satu daripada tiga input di halaman ini membawa pemilih unitnya sendiri. Apabila anda memilih unit berbeza untuk sisi berbeza, kalkulator menukar setiap input kepada unit sepunya secara automatik sebelum menambah: ia membaca unit yang dipilih untuk sisi pertama dan menskalakan dua lagi agar sepadan, menggunakan nisbah panjang tepat (1 inci = 0.0254 m, 1 kaki = 0.3048 m, dan seterusnya). Keputusan dilaporkan dalam unit sepunya itu. Anda masih boleh menukar dengan tangan seperti yang ditunjukkan di atas, tetapi pemilih itu menghapuskan aritmetiknya." },
          { "kind": "h3", "text": "Bekerja dengan Ukuran Perpuluhan" },
          { "kind": "p", "text": "Gunakan [[a=2.5,\\;b=6,\\;c=6.5]]. Kemudian [[P=2.5+6+6.5]], jadi [[[\\boxed{P=15\\text{ units}}]]]. Nilai perpuluhan ditambah dengan cara yang sama tepat seperti nombor bulat; titik perpuluhan hanya berbaris dalam jumlah itu." },
          { "kind": "h3", "text": "Bekerja dengan Panjang Sisi Tidak Nisbah" },
          { "kind": "p", "text": "Ambil segi tiga dengan [[a=1,\\;b=1,\\;c=\\sqrt{2}]]. Kemudian [[P=1+1+\\sqrt{2}]], jadi [[[\\boxed{P=2+\\sqrt{2}}]]], kira-kira [[P\\approx3.4142]]. Mengekalkan bentuk radikal tepat berguna dalam masalah matematik kerana ia mengekalkan ketepatan penuh; penghampiran perpuluhan adalah untuk pelaporan akhir." },
          { "kind": "h3", "text": "Mengapakah Anda Patut Mengelak Pembundaran Terlalu Awal?" },
          { "kind": "p", "text": "Pembundaran pramatang menyuntik ralat kecil yang kemudian dikekalkan oleh penambahan akhir. Jika satu sisi tidak nisbah, seperti [[\\sqrt{2}]], membundarkannya kepada 1.41 sebelum menambah mengurangkan sebahagian daripada panjang sebenar, dan dengan beberapa sisi sedemikian ralat terkumpul. Kekalkan ketepatan penuh semasa pengiraan perantaraan dan bundarkan hanya keputusan akhir kepada ketepatan yang diperlukan oleh masalah." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Biasa Ketika Mengira Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Enam belas kesilapan menyebabkan hampir setiap perimeter yang salah. Setiap satu dijelaskan dengan puncanya dan pendekatan yang betul." },
          { "kind": "p", "text": "<strong>1. Lupa menyertakan hipotenus.</strong> Kesilapan paling biasa: menambah dua kaki dan berhenti. Dengan 3-4-5 ini memberikan 7 bukannya 12. Sentiasa tambah ketiga-tiga sisi." },
          { "kind": "p", "text": "<strong>2. Menggunakan hanya dua kaki.</strong> Punca yang sama seperti di atas, selalunya daripada salah membaca soalan. Sempadan mempunyai tiga tepi; kira tiga." },
          { "kind": "p", "text": "<strong>3. Mengelirukan perimeter dengan luas.</strong> Perimeter ialah [[a+b+c]] dalam unit linear; luas ialah [[ab/2]] dalam unit persegi. Baca soalan: mengelilingi bermaksud perimeter, di dalam bermaksud luas." },
          { "kind": "p", "text": "<strong>4. Memasukkan hipotenus sebagai kaki.</strong> Meletakkan nilai terpanjang dalam medan kaki merosakkan geometri. Slot hipotenus mesti memegang sisi terpanjang." },
          { "kind": "p", "text": "<strong>5. Memilih sisi yang salah sebagai hipotenus.</strong> Jika 4 dimasukkan sebagai [[c]] manakala 5 duduk dalam medan kaki, setiap semakan gagal. Susun nilai dahulu: yang terbesar ialah [[c]]." },
          { "kind": "p", "text": "<strong>6. Menggunakan ukuran yang tidak membentuk segi tiga bersudut tegak.</strong> Uji [[a^2+b^2=c^2]] sebelum mempercayai label segi tiga bersudut tegak. Jika ia gagal, formula perimeter masih menambah, tetapi segi tiga itu bukan bersudut tegak." },
          { "kind": "p", "text": "<strong>7. Mencampur sentimeter dan meter.</strong> Menambah 3 m kepada 40 cm tidak memberikan 43 bagi apa-apa pun. Tukar kepada satu unit dahulu." },
          { "kind": "p", "text": "<strong>8. Mencampur kaki dan inci.</strong> Perangkap imperial klasik. Tukar inci kepada kaki (bahagi dengan 12) sebelum menambah, atau biarkan pemilih unit melakukannya." },
          { "kind": "p", "text": "<strong>9. Melaporkan perimeter dalam unit persegi.</strong> Perimeter 12 cm persegi ialah kesilapan kategori: perjalanan mengelilingi segi tiga ialah panjang, diukur dalam cm, m, ft, atau in." },
          { "kind": "p", "text": "<strong>10. Membundarkan ukuran terlalu awal.</strong> Membundarkan [[\\sqrt{2}]] kepada 1.4 sebelum menambah mengumpul ralat. Bundarkan hanya jawapan akhir." },
          { "kind": "p", "text": "<strong>11. Lupa mengira sisi yang tiada.</strong> Dua sisi yang diketahui bukan perimeter. Dapatkan semula sisi ketiga dengan teorem Pythagoras dahulu, kemudian tambah." },
          { "kind": "p", "text": "<strong>12. Menggunakan teorem Pythagoras dengan salah.</strong> Bentuk hipotenus menambah kuasa dua ([[c=\\sqrt{a^2+b^2}]]); bentuk kaki menolak ([[b=\\sqrt{c^2-a^2}]]). Menukarnya mencipta sisi yang tidak wujud." },
          { "kind": "p", "text": "<strong>13. Memasukkan panjang sisi negatif atau sifar.</strong> Panjang adalah positif. Input sifar atau negatif tidak menghuraikan sebarang segi tiga, dan kalkulator dengan betul menolaknya." },
          { "kind": "p", "text": "<strong>14. Mengabaikan ketaksamaan segi tiga.</strong> Jika [[a+b\\leq c]], ketiga-tiga panjang itu tidak boleh membentuk segi tiga langsung. Semak sebelum mengira." },
          { "kind": "p", "text": "<strong>15. Menganggap semiperimeter ialah perimeter penuh.</strong> Membahagikan jumlah dengan 2 memberikan [[s]], bukan [[P]]. Untuk 3-4-5, [[(3+4+5)/2=6]] ialah semiperimeter; perimeternya ialah 12." },
          { "kind": "p", "text": "<strong>16. Menganggap perimeter sahaja menentukan luas segi tiga.</strong> Seperti yang ditunjukkan oleh perbandingan 3-4-5 berbanding 45-45-90, perimeter yang sama boleh menyembunyikan luas yang berbeza. Perimeter menetapkan sempadan, bukan dalaman." },
          { "kind": "p", "text": "<strong>Salah berbanding betul, sebelah menyebelah.</strong> Diberi [[a=3,\\;b=4,\\;c=5]]: yang salah ialah [[P=3+4=7]], yang mengabaikan hipotenus dan hanya mengukur dua kaki. Yang betul ialah [[P=3+4+5=12]]. Dan [[(3+4+5)/2=6]] ialah semiperimeter, kuantiti berbeza dengan kegunaannya sendiri, bukan perimeter penuh." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Menyemak Sama Ada Perimeter Segi Tiga Bersudut Tegak Anda Betul",
        "blocks": [
          { "kind": "p", "text": "Tujuh semakan bebas menangkap hampir setiap kesilapan. Segi tiga 3-4-5 menunjukkan setiap satu. Semakan bebas penting kerana ia gagal dengan cara yang berbeza: apabila dua kaedah yang tidak berkaitan bersetuju, jawapan itu telah memperoleh kepercayaannya, sama ada ia masuk ke dalam kerja rumah, lukisan teknikal, atau perancangan bahan." },
          { "kind": "p", "text": "<strong>Kaedah 1: Tambah ketiga-tiga sisi sekali lagi.</strong> Kira semula [[P=a+b+c]] dari awal: [[3+4+5=12]]. Laluan kedua menangkap kesilapan ketukan kekunci dan aritmetik." },
          { "kind": "p", "text": "<strong>Kaedah 2: Sahkan hubungan Pythagoras.</strong> Semak [[a^2+b^2=c^2]]: [[9+16=25]]. Ini mengesahkan sisi-sisi itu membentuk segi tiga bersudut tegak, yang mengesahkan label sisi yang menjadi sandaran perimeter." },
          { "kind": "p", "text": "<strong>Kaedah 3: Semak hipotenus.</strong> Sahkan [[c>a]] dan [[c>b]]: 5 lebih besar daripada 3 dan lebih besar daripada 4. Jika hipotenus yang disangka bukan sisi terpanjang, label-label itu salah." },
          { "kind": "p", "text": "<strong>Kaedah 4: Semak ketaksamaan segi tiga.</strong> Sahkan [[a+b>c]]: [[3+4=7>5]]. Hasil tambah mana-mana dua sisi mesti melebihi sisi ketiga, atau tiada segi tiga wujud." },
          { "kind": "p", "text": "<strong>Kaedah 5: Semak batas perimeter.</strong> Sahkan [[2c<P<3c]]: [[10<12<15]]. Batas-batas ini ialah semakan mental pantas untuk mana-mana segi tiga bersudut tegak yang sah." },
          { "kind": "p", "text": "<strong>Kaedah 6: Semak unit ukuran.</strong> Sahkan ketiga-tiga input berkongsi satu unit. Unit bercampur membatalkan jumlah walaupun aritmetiknya sempurna." },
          { "kind": "p", "text": "<strong>Kaedah 7: Bandingkan keputusan dengan visualisasi langsung.</strong> Rajah sedia ada di halaman ini melukis semula segi tiga daripada input anda. Jika satu sisi dilabel salah atau nilai ditaip salah, gambar kelihatan salah: hipotenus lebih pendek daripada kaki, atau bentuk yang tidak tertutup. Percayai gambar apabila ia tidak bersetuju dengan nombor, kemudian cari ralat input." }
        ]
      },
      "sec-conclusion": {
        "h2": "Tiga Sisi, Satu Sempadan, Tiada Jalan Pintas",
        "blocks": [
          { "kind": "p", "text": "Perimeter segi tiga bersudut tegak ialah idea paling mudah di halaman ini dan paling mudah disalahkan melalui peninggalan. Formula meminta tiga nombor kerana sempadan mempunyai tiga tepi, dan hipotenus memperoleh tempatnya dalam jumlah sebagai tepi yang menutup bentuk itu. Segala-galanya yang lain, kaedah langkah demi langkah, pengembalian sisi yang tiada, ketaksamaan, semakan pengesahan, wujud untuk melindungi satu penambahan itu daripada kesilapan pelabelan dan unit kecil yang menghasilkan jawapan salah yang kelihatan munasabah." },
          { "kind": "p", "text": "Gunakan kalkulator halaman ini setiap kali ketiga-tiga sisi diukur, dapatkan semula sisi yang tiada melalui teorem Pythagoras apabila tidak, dan semak keputusan terhadap batas 2c < P < 3c sebelum nombor itu masuk ke dalam pesanan bahan. Apabila persoalan beralih kepada permukaan di dalam sempadan, kalkulator luas menunggu; apabila ia beralih kepada separuh sempadan untuk formula yang lebih mendalam, kalkulator semiperimeter mengambil alih." }
        ]
      }
    },
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
    "relatedIntro": "Setiap satu daripada alat ini melanjutkan pengiraan perimeter ke satu arah: sisi yang tiada, separuh perimeter, permukaan, ukuran gabungan, atau teorem di sebalik semuanya.",
    "relatedItems": [
      "Kalkulator Ukuran Segi Tiga Bersudut Tegak",
      "Kalkulator Semiperimeter Segi Tiga Bersudut Tegak",
      "Kalkulator Sisi Segi Tiga Bersudut Tegak",
      "Kalkulator Luas Segi Tiga Bersudut Tegak",
      "Kalkulator Teorem Pythagoras"
    ],
    "faqHeading": "Soalan Lazim",
    "faqs": [
      {
        "question": "Apakah formula perimeter segi tiga bersudut tegak?",
        "answer": "Formulanya ialah P = a + b + c, dengan a dan b ialah dua kaki yang membentuk sudut 90 darjah dan c ialah hipotenus, sisi terpanjang. Tambahkan ketiga-tiga panjang sisi; hasilnya ialah jumlah panjang sempadan dalam unit linear."
      },
      {
        "question": "Bagaimanakah saya mengira perimeter segi tiga bersudut tegak?",
        "answer": "Kenal pasti dua kaki dan hipotenus, sahkan ketiga-tiganya menggunakan unit yang sama, gantikan ke dalam P = a + b + c, dan tambah. Untuk segi tiga 3-4-5: P = 3 + 4 + 5 = 12 unit. Kalkulator di halaman ini melakukan langkah yang sama dan menunjukkan kerjanya."
      },
      {
        "question": "Mengapakah saya mesti menyertakan hipotenus?",
        "answer": "Hipotenus ialah salah satu daripada tiga tepi luar segi tiga, jadi sempadan tidak lengkap tanpanya. Menambah hanya dua kaki segi tiga 3-4-5 memberikan 7, iaitu jumlah panjang kaki, bukan perimeter. Perjalanan penuh mengelilingi segi tiga ialah 3 + 4 + 5 = 12."
      },
      {
        "question": "Bolehkah saya mengira perimeter jika satu sisi tiada?",
        "answer": "Ya, tetapi dapatkan semula sisi yang tiada dahulu dengan teorem Pythagoras. Dengan kaki 6 dan 8, hipotenusnya ialah sqrt(36 + 64) = 10, jadi perimeternya ialah 6 + 8 + 10 = 24. Dengan hipotenus 13 dan kaki 5, kaki yang tiada ialah sqrt(169 - 25) = 12, jadi perimeternya ialah 30."
      },
      {
        "question": "Bagaimanakah saya mencari hipotenus sebelum mengira perimeter?",
        "answer": "Gunakan c = sqrt(a^2 + b^2) apabila kedua-dua kaki diketahui. Untuk kaki 6 dan 8: c = sqrt(36 + 64) = sqrt(100) = 10. Setelah hipotenus diketahui, tambah ketiga-tiga sisi untuk mendapatkan perimeter."
      },
      {
        "question": "Adakah formula perimeter berbeza untuk segi tiga bersudut tegak?",
        "answer": "Tidak. P = a + b + c berfungsi untuk setiap segi tiga. Apa yang istimewa tentang segi tiga bersudut tegak ialah hubungan Pythagoras a^2 + b^2 = c^2, yang membolehkan anda mencari sisi yang tiada atau mengesahkan bahawa ukuran itu benar-benar membentuk segi tiga bersudut tegak."
      },
      {
        "question": "Berapakah perimeter segi tiga bersudut tegak 3-4-5?",
        "answer": "Perimeternya ialah 3 + 4 + 5 = 12 unit. Sisi-sisi itu memenuhi 9 + 16 = 25, mengesahkan sudut tegak. Versi berskala seperti 6-8-10 atau 9-12-15 mengekalkan bentuk yang sama dengan perimeter yang lebih besar secara berkadaran."
      },
      {
        "question": "Bagaimanakah saya mengesahkan bahawa tiga sisi membentuk segi tiga bersudut tegak?",
        "answer": "Semak bahawa a^2 + b^2 = c^2 dengan c sebagai sisi terpanjang. Untuk 3, 4, 5: 9 + 16 = 25, jadi segi tiga itu bersudut tegak. Jika kesamaan itu gagal, formula perimeter masih menambah, tetapi segi tiga itu bukan segi tiga bersudut tegak."
      },
      {
        "question": "Apakah perbezaan antara perimeter dan luas?",
        "answer": "Perimeter (P = a + b + c) mengukur jumlah jarak mengelilingi segi tiga dalam unit linear seperti meter atau kaki. Luas (K = ab/2) mengukur permukaan di dalam segi tiga dalam unit persegi seperti meter persegi. Untuk segi tiga 3-4-5, perimeternya ialah 12 unit dan luasnya ialah 6 unit persegi."
      },
      {
        "question": "Adakah kalkulator perimeter menyokong nilai perpuluhan?",
        "answer": "Ya. Panjang sisi perpuluhan berfungsi tepat seperti nombor bulat: untuk a = 2.5, b = 6, c = 6.5, perimeternya ialah 2.5 + 6 + 6.5 = 15 unit. Kekalkan ketepatan penuh semasa pengiraan dan bundarkan hanya jawapan akhir."
      },
      {
        "question": "Unit apakah yang patut saya gunakan untuk perimeter?",
        "answer": "Mana-mana unit panjang berfungsi: meter, sentimeter, milimeter, kaki, inci, ela, atau batu. Ketiga-tiga sisi mesti berkongsi unit yang sama sebelum menambah. Kalkulator menukar setiap input kepada unit sepunya secara automatik melalui pemilih unit setiap input."
      },
      {
        "question": "Apakah hubungan antara perimeter dan semiperimeter?",
        "answer": "Semiperimeter ialah tepat separuh perimeter: s = P/2. Untuk segi tiga 3-4-5, P = 12 dan s = 6. Semiperimeter muncul dalam formula lanjutan seperti formula Heron untuk luas dan hubungan jejari dalam K = rs."
      }
    ]
  }
};
