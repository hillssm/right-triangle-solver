// semiperimeterGuideTranslations.b4ms.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for Malay (ms).
export const B4_MS = {
  "ms": {
    "tocHeading": "Navigasi Bahagian",
    "tocItems": {
      "sec-calculator": "Cara Menggunakan Kalkulator Separa Perimeter Segi Tiga Bersudut Tegak",
      "sec-conclusion": "Separuh Sempadan, Pemahaman Penuh",
      "sec-examples": "Contoh Langkah demi Langkah Separa Perimeter Segi Tiga Bersudut Tegak",
      "sec-faq": "Soalan Lazim",
      "sec-formula": "Rumus Separa Perimeter Segi Tiga Bersudut Tegak",
      "sec-geometry": "Apakah Segi Tiga Bersudut Tegak?",
      "sec-heron": "Bagaimanakah Separa Perimeter Digunakan dalam Rumus Heron?",
      "sec-inradius": "Bagaimanakah Separa Perimeter Berkait dengan Jejari Dalam Segi Tiga Bersudut Tegak?",
      "sec-intro": "Cara Mengira Separa Perimeter Segi Tiga Bersudut Tegak",
      "sec-meaning": "Apakah Separa Perimeter Segi Tiga Bersudut Tegak?",
      "sec-missing-side": "Cara Mengira Separa Perimeter Apabila Satu Sisi Tiada",
      "sec-mistakes": "Kesilapan Lazim Semasa Mengira Separa Perimeter Segi Tiga Bersudut Tegak",
      "sec-practical": "Aplikasi Kehidupan Sebenar Separa Perimeter Segi Tiga Bersudut Tegak",
      "sec-properties": "Sifat Penting Separa Perimeter Segi Tiga Bersudut Tegak",
      "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak yang Berkaitan",
      "sec-units": "Memahami Unit Ukuran dalam Pengiraan Separa Perimeter",
      "sec-verify": "Cara Menyemak Sama Ada Jawapan Separa Perimeter Anda Betul",
      "sec-vs-perimeter": "Apakah Perbezaan antara Perimeter dengan Separa Perimeter?"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Mengira Separa Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Tambahkan ketiga-tiga sisi sebuah segi tiga bersudut tegak, kemudian bahagikan jumlahnya dengan dua." },
          { "kind": "p", "text": "Itulah keseluruhan pengiraannya, dan kalkulator ini melaksanakannya untuk mana-mana segi tiga bersudut tegak sebaik sahaja anda memasukkan dua kaki dan hipotenus. Tiga ukuran sisi diperlukan kerana segi tiga mempunyai tiga tepi, dan hipotenus mesti disertakan: ia adalah salah satu daripada tiga tepi itu walaupun ia tidak pernah menyentuh sudut tegak. Jumlahnya dibahagikan dengan dua kerana separa perimeter ditakrifkan sebagai tepat separuh daripada perimeter penuh, satu kuantiti yang muncul berulang kali dalam geometri segi tiga." },
          { "kind": "p", "text": "Contoh ringkas menunjukkan ideanya. Diberi [[a=3]], [[b=4]], dan [[c=5]]:" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "Perimeter penuh ialah 12 unit, jadi separa perimeternya ialah 6 unit. Perhatikan bahawa separa perimeter ialah ukuran linear, bukan ukuran luas: ia adalah panjang, dilaporkan dalam meter, kaki, atau unit biasa, tidak sekali-kali dalam unit persegi. Ia menjadi berguna apabila sesuatu rumus meminta separuh perimeter, seperti yang berlaku dalam rumus Heron untuk luas, dalam hubungan jejari dalam, dan dalam beberapa bukti geometri yang mana perimeter penuh hanya akan menghalang." }
        ]
      },
      "sec-geometry": {
        "h2": "Apakah Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "p", "text": "Sebelum sebarang pembahagian dengan dua berlaku, ketiga-tiga sisi mesti dilabelkan dengan betul. Simbol-simbol di bawah kekal tetap sepanjang panduan ini, dan kalkulator menggunakan nama yang sama." },
          { "kind": "h3", "text": "Takrif Segi Tiga Bersudut Tegak" },
          { "kind": "p", "text": "Segi tiga bersudut tegak ialah segi tiga yang mengandungi satu sudut pedalaman berukuran tepat 90 darjah. Ia mempunyai tiga bucu, tiga sisi, dua sudut tirus, dan satu sudut tegak, biasanya ditandakan dengan segi empat kecil. Dua sisi yang membentuk sudut tegak ialah kaki; sisi yang bertentangan dengan sudut tegak ialah hipotenus. Oleh kerana sudut-sudut mana-mana segi tiga berjumlah 180 darjah, [[A+B+C=180^\\circ]], dan dengan [[C=90^\\circ]] maka terhasil [[[\\boxed{A+B=90^\\circ}]]]: dua sudut tirus itu saling melengkapi, jadi mengetahui satu menentukan yang satu lagi. Gambaran yang betul ini penting kerana rumus separa perimeter menganggap setiap sisi sebagai tepi sempadan, dan sisi yang tersalah label merosakkan jumlah sebelum pembahagian bermula." },
          { "kind": "h3", "text": "Apakah Dua Kaki Itu?" },
          { "kind": "p", "text": "Kaki [[a]] dan kaki [[b]] ialah dua sisi yang bertemu di bucu sudut tegak, berserenjang antara satu sama lain. Mana-mana satu boleh dilukis mendatar atau menegak bergantung pada orientasi segi tiga; yang mentakrifkannya ialah sudut 90 darjah yang dibentuknya, bukan arahnya pada halaman. Kedua-duanya berbeza daripada hipotenus dari segi kedudukan dan panjang: setiap kaki menyentuh sudut tegak, dan setiap kaki lebih pendek daripada hipotenus. Dalam kerja separa perimeter, peranannya mudah: kedua-duanya ialah tepi sempadan, jadi kedua-duanya masuk ke dalam jumlah yang dibahagi dua." },
          { "kind": "h3", "text": "Apakah Hipotenus Itu?" },
          { "kind": "p", "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tegak, sentiasa sisi terpanjang segi tiga. Ia tidak pernah membentuk sudut tegak; ia merentasi dari sudut itu, menyambungkan hujung jauh kedua-dua kaki. Ia berbeza daripada kaki dari segi kedudukan dan panjang: kaki bertemu pada 90 darjah, manakala hipotenus bertemu setiap kaki pada sudut tirus. Ia melengkapkan sempadan segi tiga, itulah sebabnya ia mesti disertakan dalam pengiraan separa perimeter. Apabila kedua-dua kaki diketahui, teorem Pythagoras mendapatkannya semula: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Cara Mengenal Pasti Label Sisi yang Betul" },
          { "kind": "p", "text": "[[a]] dan [[b]] ialah dua sisi yang bertemu pada 90 darjah, dan [[c]] bertentangan dengan sudut tegak. Dalam segi tiga bersudut tegak yang tidak merosot, [[c]] ialah sisi terpanjang. Penanda sudut tegak memberitahu anda sisi yang mana [[c]]: ia adalah sisi yang tidak menyentuh bucu itu. Semakan susunan yang pantas membantu: susun ketiga-tiga nombor, dan yang terbesar mesti memainkan peranan [[c]]. Jika sisi terbesar tidak terletak bertentangan dengan sudut segi empat itu, labelnya salah, dan separa perimeter yang dibina daripadanya juga akan salah." },
          { "kind": "h3", "text": "Mengapakah Separa Perimeter Bergantung pada Ketiga-tiga Sisi?" },
          { "kind": "p", "text": "Separa perimeter diperoleh daripada perimeter lengkap, dan perimeter lengkap mengira setiap tepi sempadan. Walaupun [[a]] dan [[b]] berserenjang, hipotenus kekal sebagai sebahagian daripada sempadan luar segi tiga: ia adalah tepi yang menutup bentuk itu. Mengecualikan [[c]] tidak memberikan separa perimeter yang lebih pendek; ia memberikan kuantiti yang berbeza dan salah. Untuk [[a=3]], [[b=4]], [[c=5]], meninggalkan hipotenus menghasilkan [[(3+4)/2=3.5]], manakala separa perimeter yang sebenar ialah [[(3+4+5)/2=6]]. Baki 2.5 unit ialah bahagian hipotenus, dan tiada rumus yang betul boleh melangkauinya." }
        ],
        "imgAlt": "Segi tiga bersudut tegak ABC dengan kaki a dan b, hipotenus c, sudut tegak di C, menunjukkan P = a+b+c dan s = (a+b+c)/2",
        "figcaption": "Segi tiga ABC: kaki a dan b bertemu di sudut tegak C, hipotenus c menutup sempadan, dan s = (a + b + c) / 2 ialah separuh perimeter."
      },
      "sec-meaning": {
        "h2": "Apakah Separa Perimeter Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "h3", "text": "Takrif Separa Perimeter" },
          { "kind": "p", "text": "Separa perimeter ialah tepat separuh daripada perimeter penuh sebuah segi tiga. Jika [[P]] ialah jarak lengkap mengelilingi segi tiga, maka separa perimeter [[s]] ialah [[[\\boxed{s=\\frac{P}{2}}]]] Untuk segi tiga bersudut tegak, perimeter penuh ialah [[P=a+b+c]], jadi takrifnya menjadi [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Ketiga-tiga panjang sisi ditambah sebelum pembahagian: jumlah itu mengumpulkan keseluruhan sempadan, dan pembahagian dengan dua membelahnya. Tiada yang tertinggal dan tiada yang dikira dua kali." },
          { "kind": "h3", "text": "Mengapakah Ia Dipanggil Separa Perimeter?" },
          { "kind": "p", "text": "Namanya menjelaskan dirinya sendiri apabila dipecahkan. <em>Semi</em> bermaksud separuh, dan <em>perimeter</em> bermaksud panjang sempadan yang lengkap. Digabungkan, separa perimeter bermaksud separuh perimeter. Huruf [[s]] ialah simbol matematik piawai, dan ia muncul dalam banyak rumus segi tiga tepat kerana panjang sempadan yang dibelah dua muncul begitu kerap. Apabila sesuatu rumus meminta [[s]], ia meminta satu nombor ini: separuh daripada [[a+b+c]]." },
          { "kind": "h3", "text": "Adakah Separa Perimeter Mewakili Laluan Sempadan Fizikal yang Dibelah Dua?" },
          { "kind": "p", "text": "Ini perkara halus yang wajar difahami dengan betul. Separa perimeter ialah separuh daripada jumlah berangka ketiga-tiga panjang sisi, tetapi ia tidak semestinya menggambarkan laluan fizikal berterusan yang meliputi separuh sempadan segi tiga. Berjalan 6 unit di sepanjang tepi segi tiga 3-4-5, sebagai contoh, boleh bermaksud berjalan di kedua-dua kaki (3 + 4 = 7 sudah terlalu jauh) atau satu kaki ditambah sebahagian hipotenus; tiada satu laluan semula jadi yang tepat separuh. Separa perimeter pada asasnya ialah ukuran geometri terbitan, nilai perantaraan yang mudah digunakan oleh rumus, dan bukannya jarak yang anda akan ukur langkah demi langkah di atas tanah." },
          { "kind": "h3", "text": "Adakah Separa Perimeter Panjang atau Luas?" },
          { "kind": "p", "text": "Separa perimeter ialah ukuran satu dimensi: panjang. Jika panjang sisi dalam meter, [[s]] dalam meter; dalam sentimeter, dalam sentimeter; dalam kaki, dalam kaki; dalam inci, dalam inci. Ia tidak sekali-kali boleh dinyatakan dalam unit persegi. Pembahagian dengan dua mengubah saiz nombor, bukan dimensinya: membelah dua panjang tetap meninggalkan panjang. Mengelirukan [[s]] dengan luas ialah antara kesilapan pemula yang paling lazim, dan menjaga unit dengan betul ialah cara paling mudah untuk mengelakkannya." },
          { "kind": "h3", "text": "Adakah Separa Perimeter Sentiasa Lebih Besar daripada Sisi Terpanjang?" },
          { "kind": "p", "text": "Ya, untuk setiap segi tiga yang sah dan tidak merosot, dan ketaksamaan segi tiga menunjukkan sebabnya. Setiap segi tiga memenuhi [[a+b>c]]: dua sisi yang lebih pendek bersama-sama melebihi yang terpanjang. Tambah [[c]] pada kedua-dua belah dan [[a+b+c>2c]] terhasil; bahagikan dengan dua dan hasilnya ialah [[[\\boxed{s>c}]]] Untuk segi tiga bersudut tegak ini bermakna separa perimeter sentiasa lebih besar daripada hipotenus. Untuk 3-4-5, [[s=6]] melebihi [[c=5]]. Ini menjadi semakan akal yang berguna: jika separa perimeter yang anda kira lebih kecil daripada hipotenus, label sisi atau aritmetiknya salah." }
        ]
      },
      "sec-formula": {
        "h2": "Rumus Separa Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Dua bentuk rumus yang sama digunakan, bergantung pada apa yang diketahui. Bentuk ringkas bermula daripada perimeter penuh:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Bentuk yang dikembangkan bermula daripada ketiga-tiga sisi:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Memahami Setiap Pemboleh Ubah" },
          { "kind": "p", "text": "[[s]] ialah separa perimeter, jawapan yang sedang dikira. [[P]] ialah perimeter penuh, panjang sempadan yang lengkap. [[a]] ialah kaki pertama dan [[b]] kaki kedua, dua sisi yang berserenjang. [[c]] ialah hipotenus, sisi terpanjang, bertentangan dengan sudut tegak. Jangan sekali-kali menukar ganti [[P]] dengan [[s]]: satu ialah keseluruhan sempadan, satu lagi ialah separuh daripadanya." },
          { "kind": "h3", "text": "Mengapakah Kita Bahagi dengan Dua?" },
          { "kind": "p", "text": "Pembahagian itulah yang menjadikan kuantiti itu <em>separa</em>perimeter dan bukannya perimeter. Ambil [[a=3]], [[b=4]], [[c=5]]. Mula-mula kira perimeter yang lengkap: [[P=3+4+5]], jadi [[P=12]]. Kemudian bahagikan dengan dua: [[s=12/2]], memberikan [[[\\boxed{s=6}]]] Secara matematik, pembahagian itu menskalakan semula jumlah sempadan kepada nilai separuh yang dijangka oleh rumus seperti rumus Heron. Melangkauinya menjawab soalan yang berbeza: perimeter penuh, bukan separa perimeter." },
          { "kind": "h3", "text": "Mengapakah Kita Tidak Boleh Menggunakan Hanya Dua Kaki?" },
          { "kind": "p", "text": "Kerana kaki sahaja bukan keseluruhan sempadan. Pendekatan yang salah [[s=(3+4)/2]] memberikan 3.5, nombor yang tiada makna geometri untuk segi tiga ini: ia mengabaikan hipotenus, yang merupakan tepi sebenar bentuk itu. Pendekatan yang betul menambah ketiga-tiga sisi dahulu: [[s=(3+4+5)/2]], memberikan [[[\\boxed{s=6}]]] Jalan pintas yang menggoda ialah membahagikan setiap sisi dahulu kemudian menambah, [[1.5+2+2.5=6]]: aritmetiknya kebetulan betul di sini kerana pembahagian mengagih ke atas penambahan, tetapi ia mengaburkan struktur rumus dan mengundang kesilapan. Tambah dahulu, kemudian bahagi sekali." },
          { "kind": "h3", "text": "Bagaimanakah Perimeter dengan Separa Perimeter Berkaitan?" },
          { "kind": "p", "text": "Kedua-duanya ialah ukuran yang sama pada dua skala. Menggandakan separa perimeter mendapatkan semula perimeter, dan membahagikan perimeter mendapatkan semula separa perimeter:" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Mana-mana nilai boleh diperoleh semula apabila yang satu lagi diketahui. Jika soalan menyatakan perimeter ialah 30, separa perimeter serta-merta ialah 15; jika pengiraan menghasilkan [[s=20]], perimeter penuh ialah 40. Hubungan dua hala ini juga alat pengesahan: selepas mengira [[s]] daripada sisi-sisi, menggandakannya mesti menghasilkan semula jumlah sisi." }
        ]
      },
      "sec-calculator": {
        "h2": "Cara Menggunakan Kalkulator Separa Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Kalkulator di halaman ini mempunyai satu tugas: ia mengambil tiga panjang sisi sebuah segi tiga bersudut tegak dan mengembalikan separa perimeter, sambil menunjukkan setiap langkah kerja. Langkah-langkah di bawah sepadan tepat dengan antara muka sedia ada." },
          { "kind": "p", "text": "<strong>Langkah 1: Cari Kalkulator Separa Perimeter.</strong> Ia terletak berhampiran bahagian atas halaman, di bawah tajuk H1, dengan tiga input berlabel." },
          { "kind": "p", "text": "<strong>Langkah 2: Kenal pasti kaki a.</strong> Pilih salah satu daripada dua sisi yang membentuk sudut tegak. Mana-mana sisi berserenjang boleh menjadi [[a]]." },
          { "kind": "p", "text": "<strong>Langkah 3: Kenal pasti kaki b.</strong> Sisi berserenjang yang satu lagi menjadi [[b]]." },
          { "kind": "p", "text": "<strong>Langkah 4: Kenal pasti hipotenus c.</strong> Sisi terpanjang, bertentangan dengan sudut tegak, ialah [[c]]. Menyusun ketiga-tiga ukuran dan meletakkan yang terbesar dalam medan ini mengelakkan kesilapan input yang paling lazim." },
          { "kind": "p", "text": "<strong>Langkah 5: Masukkan kaki pertama.</strong> Taipkan nilai [[a]] ke dalam medan Kaki a." },
          { "kind": "p", "text": "<strong>Langkah 6: Masukkan kaki kedua.</strong> Taipkan nilai [[b]] ke dalam medan Kaki b." },
          { "kind": "p", "text": "<strong>Langkah 7: Masukkan hipotenus.</strong> Taipkan nilai [[c]] ke dalam medan Hipotenus c." },
          { "kind": "p", "text": "<strong>Langkah 8: Pilih unit ukuran yang sesuai.</strong> Setiap input mempunyai pemilih unitnya sendiri. Ketiga-tiga sisi mesti menggunakan unit yang serasi sebelum ditambah; mencampurkan meter dengan sentimeter merosakkan jumlah." },
          { "kind": "p", "text": "<strong>Langkah 9: Klik Kira Separa Perimeter.</strong> Alat ini menambah ketiga-tiga sisi dan membahagikan jumlahnya dengan dua." },
          { "kind": "p", "text": "<strong>Langkah 10: Semak separa perimeter yang dipaparkan.</strong> Hasilnya muncul bersama unitnya, contohnya [[[\\boxed{s=6\\text{ units}}]]] untuk segi tiga 3-4-5." },
          { "kind": "p", "text": "<strong>Langkah 11: Semak langkah penyelesaian.</strong> Kalkulator menunjukkan penggantian dan pembahagian, supaya anda boleh mengikuti aritmetik baris demi baris." },
          { "kind": "p", "text": "<strong>Langkah 12: Sahkan bahawa output ialah separuh perimeter penuh.</strong> Gandakan hasilnya: untuk 3-4-5, [[2\\times6=12]], yang sepadan dengan [[3+4+5]]." },
          { "kind": "p", "text": "<strong>Langkah 13: Gunakan Set Semula apabila memulakan pengiraan baharu.</strong> Butang Set Semula mengosongkan ketiga-tiga input supaya segi tiga seterusnya bermula dari keadaan bersih." },
          { "kind": "h3", "text": "Apakah yang Diwakili Setiap Input?" },
          { "kind": "p", "text": "Ketiga-tiga input sepadan dengan tiga tepi sempadan. Kaki a dan Kaki b menerima dua sisi yang berserenjang; Hipotenus c menerima sisi terpanjang. Kalkulator menambah tepat apa yang anda masukkan dan membelah dua jumlahnya, jadi peranan setiap medan adalah tetap: menukar nilai kaki ke dalam medan hipotenus mengubah jumlah dan menghasilkan separa perimeter yang salah." },
          { "kind": "h3", "text": "Mengapakah Unit Ukuran Penting?" },
          { "kind": "p", "text": "Separa perimeter dikira dengan menambah tiga panjang, dan penambahan memerlukan unit yang serasi. Menambah 3 meter kepada 40 sentimeter tanpa penukaran memberikan jumlah yang tidak bermakna. Pemilih unit setiap input membolehkan anda mengisytiharkan unit yang anda taip; pilih pemilih yang menggambarkan ukuran sebenar supaya penambahan menggabungkan yang sejenis dengan sejenis." },
          { "kind": "h3", "text": "Memahami Paparan Hasil" },
          { "kind": "p", "text": "Paparan hasil menunjukkan separa perimeter dengan unit linearnya. Di sebaliknya, kalkulator melaksanakan tepat dua operasi: ia menambah ketiga-tiga sisi, kemudian membahagikan jumlahnya dengan dua. Tiada pengiraan lain yang terlibat, dan alat ini tidak mengira luas atau jejari dalam dengan sendirinya; rumus-rumus itu ialah penjelasan sokongan dalam panduan ini, bukan output tambahan kalkulator." },
          { "kind": "h3", "text": "Memahami Langkah Penyelesaian" },
          { "kind": "p", "text": "Panel langkah penyelesaian memainkan semula pengiraan: nilai sisi yang dimasukkan, jumlahnya, pembahagian dengan dua, dan hasil akhir. Kerja yang kelihatan ini ialah cara terpantas untuk menangkap kesilapan taip: jika sesuatu langkah menunjukkan 4 sedangkan anda maksudkan 40, kesilapannya jelas sebelum jawapan digunakan di tempat lain." }
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Separa Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Empat contoh di bawah mengekalkan kes-kes kerja sedia ada dan mengembangkan penjelasannya. Setiap satu menggantikan ketiga-tiga sisi, menambahnya, membahagikan dengan dua, dan kemudian mengesahkan jawapannya." },
          { "kind": "h3", "text": "Contoh 1: Segi Tiga Bersudut Tegak 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3,\\;b=4,\\;c=5]], rumusnya ialah [[s=\\frac{a+b+c}{2}]]. Gantikan: [[s=\\frac{3+4+5}{2}]]. Tambah: [[s=\\frac{12}{2}]]. Hasil akhirnya ialah [[[\\boxed{s=6\\text{ units}}]]] Pengesahan: [[P=2s=12]], yang sepadan dengan jumlah terus [[3+4+5]]. Hasilnya betul kerana setiap tepi sempadan dikira tepat sekali sebelum pembahagian." },
          { "kind": "h3", "text": "Contoh 2: Segi Tiga Bersudut Tegak 5-12-13" },
          { "kind": "p", "text": "Diberi [[a=5,\\;b=12,\\;c=13]]: [[s=\\frac{5+12+13}{2}]], jadi [[s=\\frac{30}{2}]], memberikan [[[\\boxed{s=15\\text{ units}}]]] Perimeter penuh ialah 30, dan separuh daripada 30 ialah 15. Sebagai semakan, [[5^2+12^2=13^2]] mengesahkan sudut tegak, jadi label sisi boleh dipercayai." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga Bersudut Tegak 8-15-17" },
          { "kind": "p", "text": "Diberi [[a=8,\\;b=15,\\;c=17]]: [[s=\\frac{8+15+17}{2}]], jadi [[s=\\frac{40}{2}]], memberikan [[[\\boxed{s=20\\text{ units}}]]] Perhatikan corak merentas contoh-contoh: apabila segi tiga membesar, separa perimeter membesar seiring dengan sisi, sentiasa tepat separuh perimeter." },
          { "kind": "h3", "text": "Contoh 4: Ukuran Sisi Perpuluhan" },
          { "kind": "p", "text": "Diberi [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], jadi [[s=\\frac{15}{2}]], memberikan [[[\\boxed{s=7.5\\text{ units}}]]] Nilai perpuluhan tidak mengubah rumus: urutan tambah-kemudian-bahagi yang sama diguna pakai. Semakan Pythagoras [[2.5^2+6^2=6.5^2]] mengesahkan sisi-sisi ini benar-benar membentuk segi tiga bersudut tegak." }
        ],
        "table": {
          "headers": ["Segi tiga", "Kaki a", "Kaki b", "Hipotenus c", "Perimeter penuh P", "Separa perimeter s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["Jadual menunjukkan coraknya dengan jelas: apabila ketiga-tiga dimensi bertambah, separa perimeter bertambah secara berkadaran, sentiasa menjejaki tepat separuh perimeter penuh. Membandingkan baris juga mendedahkan bahawa segi tiga serupa berskala bersama; gandakan setiap sisi dan separa perimeter turut berganda."],
        "imgAlt": "Segi tiga 3-4-5 dengan langkah pengiraan: tambah sisi untuk dapat 12, bahagi dengan 2, separa perimeter s sama dengan 6",
        "figcaption": "Tambahkan ketiga-tiga sisi untuk mendapat P = 12, kemudian bahagikan dengan 2: separa perimeter s = 6."
      },
      "sec-practical": {
        "h2": "Aplikasi Kehidupan Sebenar Separa Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Satu peringatan sebelum contoh-contoh: separa perimeter lazimnya bukan kuantiti yang digunakan untuk membeli separuh bahan tepi atau pagar di sekeliling objek segi tiga. Peranan sebenarnya ialah sebagai ukuran perantaraan geometri, batu loncatan kepada jejari dalam, semakan luas, dan pengiraan reka bentuk. Setiap contoh di bawah ialah model geometri segi tiga bersudut tegak yang dipermudah, dan setiap satu mengira separa perimeter bersama perimeter penuh, luas, dan jejari dalam supaya hubungannya kekal kelihatan." },
          { "kind": "h3", "text": "Contoh 1: Tetingkap Segi Tiga dengan Sisipan Hiasan Bulat" },
          { "kind": "p", "text": "Model tingkap segi tiga mempunyai [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Separa perimeter: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]; perimeter penuh [[P=12\\text{ m}]]. Luas [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] dan jejari dalam [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. Separa perimeterlah yang menjadikan jejari dalam boleh dikira: ia menukar tiga panjang sisi kepada satu nombor yang menghubungkan luas dengan jejari bulatan yang menyentuh ketiga-tiga sisi model segi tiga yang diidealkan." },
          { "kind": "h3", "text": "Contoh 2: Pendakap Sokongan Logam dengan Ruang Bulat" },
          { "kind": "p", "text": "Pendakap segi tiga bersudut tegak mempunyai [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]. Kemudian [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] dan [[P=30\\text{ cm}]]. Luas [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] memberikan jejari dalam [[r=\\frac{30}{15}=2\\text{ cm}]]. Nilai ini menggambarkan jejari bulatan terterap dalam segi tiga yang diidealkan dan boleh memandu kajian ruang geometri untuk potongan bulat. Ia tidak, dengan sendirinya, menentukan keselamatan struktur." },
          { "kind": "h3", "text": "Contoh 3: Gable Bumbung dengan Reka Bentuk Lubang Angin Bulat" },
          { "kind": "p", "text": "Model hujung bumbung segi tiga bersudut tegak yang dipermudah mempunyai [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Separa perimeter [[s=\\frac{6+8+10}{2}=12\\text{ ft}]]; perimeter [[P=24\\text{ ft}]]. Luas [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] dan jejari dalam [[r=\\frac{24}{12}=2\\text{ ft}]]. Separa perimeter menukar tiga panjang tepi gable kepada jejari bulatan terterap model yang dipermudah. Pemasangan lubang angin sebenar memerlukan ukuran binaan dan ruang yang berasingan di luar geometri ini." },
          { "kind": "h3", "text": "Contoh 4: Reka Bentuk Taman Segi Tiga" },
          { "kind": "p", "text": "Model taman segi tiga bersudut tegak mempunyai [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Kemudian [[s=\\frac{7+24+25}{2}=28\\text{ m}]] dan [[P=56\\text{ m}]]. Luas [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] menghasilkan jejari dalam [[r=\\frac{84}{28}=3\\text{ m}]]. Bulatan terterap ialah bulatan terbesar yang muat di dalam segi tiga yang diidealkan sambil menyentuh ketiga-tiga sisi, berguna untuk meletakkan batas atau air pancut bulat pada peringkat reka bentuk." },
          { "kind": "h3", "text": "Contoh 5: Panel Fabrikasi Segi Tiga CNC" },
          { "kind": "p", "text": "Panel segi tiga mempunyai [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Separa perimeter [[s=\\frac{8+15+17}{2}=20\\text{ cm}]]; perimeter [[P=40\\text{ cm}]]. Luas [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] dan jejari dalam [[r=\\frac{60}{20}=3\\text{ cm}]]. Separa perimeter dan jejari dalam berfungsi di sini sebagai nilai rujukan geometri dalam pemodelan CAD, contohnya apabila meletakkan ciri bulat relatif kepada tepi panel." },
          { "kind": "h3", "text": "Contoh 6: Papan Tanda Segi Tiga dengan Lambang Bulat" },
          { "kind": "p", "text": "Panel papan tanda mempunyai [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]. Kemudian [[s=\\frac{9+12+15}{2}=18\\text{ in}]] dan [[P=36\\text{ in}]]. Luas [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] memberikan jejari dalam [[r=\\frac{54}{18}=3\\text{ in}]]. Jejari dalam memberikan rujukan matematik untuk lambang bulat terterap yang terbesar, tertakluk kepada margin sebenar dan kekangan pemasangan papan tanda yang sebenar." },
          { "kind": "h3", "text": "Contoh 7: Plat Segi Tiga Industri" },
          { "kind": "p", "text": "Plat segi tiga bersudut tegak mempunyai [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Separa perimeter [[s=\\frac{9+40+41}{2}=45\\text{ cm}]]; perimeter [[P=90\\text{ cm}]]. Luas [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] dan jejari dalam [[r=\\frac{180}{45}=4\\text{ cm}]]. Separa perimeter menyokong pengiraan geometri untuk panel industri yang diidealkan, seperti menentukan saiz bos bulat yang mesti kekal jauh daripada ketiga-tiga tepi." },
          { "kind": "h3", "text": "Contoh 8: Reka Bentuk Kaca Berwarna Segi Tiga" },
          { "kind": "p", "text": "Bahagian kaca segi tiga bersudut tegak mempunyai [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Kemudian [[s=\\frac{12+16+20}{2}=24\\text{ in}]] dan [[P=48\\text{ in}]]. Luas [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] menghasilkan jejari dalam [[r=\\frac{96}{24}=4\\text{ in}]]. Hubungannya terus: separa perimeter membelah dua sempadan, dan membahagikan luas dengan separuh sempadan itu memberikan jejari bulatan terterap untuk susun atur reka bentuk." },
          { "kind": "h3", "text": "Contoh 9: Bahagian Tanah Segi Tiga yang Diukur" },
          { "kind": "p", "text": "Model lot segi tiga bersudut tegak yang dipermudah mempunyai [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]. Separa perimeter [[s=\\frac{20+21+29}{2}=35\\text{ m}]]; perimeter [[P=70\\text{ m}]]. Luas [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] dan jejari dalam [[r=\\frac{210}{35}=6\\text{ m}]]. Dalam model ukur tanah yang dipermudah, separa perimeter berfungsi sebagai input ringkas kepada semakan luas dan jejari dalam, contohnya apabila mengesahkan luas lot yang dikira terhadap rumus Heron." },
          { "kind": "h3", "text": "Contoh 10: Bingkai Segi Tiga Seni Bina" },
          { "kind": "p", "text": "Bingkai seni bina segi tiga bersudut tegak mempunyai [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]. Kemudian [[s=\\frac{12+35+37}{2}=42\\text{ m}]] dan [[P=84\\text{ m}]]. Luas [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] memberikan jejari dalam [[r=\\frac{210}{42}=5\\text{ m}]]. Nilai ini boleh menyokong pemodelan matematik ciri bulat di dalam bingkai segi tiga, seperti tingkap bulat yang berpusat pada pusat bulatan terterap." },
          { "kind": "h3", "text": "Contoh 11: Reka Bentuk Lantai Segi Tiga Besar" },
          { "kind": "p", "text": "Bahagian lantai segi tiga bersudut tegak mempunyai [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]. Separa perimeter [[s=\\frac{28+45+53}{2}=63\\text{ m}]]; perimeter [[P=126\\text{ m}]]. Luas [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] dan jejari dalam [[r=\\frac{630}{63}=10\\text{ m}]]. Di sini separa perimeter menghubungkan ukuran sisi dengan geometri bulatan terterap model: satu nombor merapatkan sempadan dengan bulatan terbesar yang boleh dimuatkan." },
          { "kind": "h3", "text": "Contoh 12: Plat Sokongan Segi Tiga Industri" },
          { "kind": "p", "text": "Plat segi tiga bersudut tegak yang besar mempunyai [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]. Kemudian [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] dan [[P=154\\text{ cm}]]. Luas [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] menghasilkan jejari dalam [[r=\\frac{924}{77}=12\\text{ cm}]]. Ukuran-ukuran ini menyuap model geometri untuk pemasangan bulat atau ciri reka bentuk dalaman, dengan separa perimeter sebagai nilai perantaraan yang membuka jejari dalam." }
        ],
        "table": {
          "headers": ["Aplikasi praktikal", "Kaki a", "Kaki b", "Hipotenus c", "Perimeter P", "Separa perimeter s", "Luas K", "Jejari dalam r", "Unit"],
          "rows": [
            ["Tetingkap segi tiga", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Pendakap logam", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Lubang angin gable bumbung", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Reka bentuk taman", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["Panel CNC", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Lambang papan tanda", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Plat industri", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Kaca berwarna", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Lot tanah yang diukur", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Bingkai seni bina", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Reka bentuk lantai", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Plat sokongan", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Beberapa peringatan terpakai untuk setiap baris di atas. Setiap aplikasi ialah model geometri yang dipermudah, bukan spesifikasi pembinaan: dimensi sebenar memerlukan pengesahan berasingan, kekuatan struktur tidak boleh dibaca daripada separa perimeter, dan bukaan bulat sebenar mungkin memerlukan ruang pembuatan tambahan. Separa perimeter ialah nilai perantaraan matematik, jejari dalam ialah jejari bulatan terterap, dan bulatan terterap menyentuh ketiga-tiga sisi."]
      },
      "sec-inradius": {
        "h2": "Bagaimanakah Separa Perimeter Berkait dengan Jejari Dalam Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "p", "text": "Ini ialah antara bahagian terpenting rencana ini, kerana jejari dalam ialah sebab utama separa perimeter wujud sebagai kuantiti bernama. Bulatan terterap ialah bulatan terbesar yang muat di dalam segi tiga sambil menyentuh ketiga-tiga sisi, dan jejarinya dipanggil jejari dalam, diwakili oleh [[r]]." },
          { "kind": "h3", "text": "Hubungan Luas dengan Separa Perimeter" },
          { "kind": "p", "text": "Untuk mana-mana segi tiga, luas, jejari dalam, dan separa perimeter dihubungkan oleh satu rumus ringkas:" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "dengan [[K]] ialah luas segi tiga, [[r]] ialah jejari dalam, dan [[s]] ialah separa perimeter. Disusun semula, ia menyelesaikan jejari dalam:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Mengetahui separa perimeter dan luas oleh itu membolehkan anda mengira jejari dalam secara terus: bahagikan luas dengan separa perimeter. Inilah hasil praktikal separa perimeter. Ia memampatkan tiga panjang sisi kepada satu nombor yang, bersama luas, mendedahkan bulatan terterap." },
          { "kind": "h3", "text": "Rumus Jejari Dalam Khas untuk Segi Tiga Bersudut Tegak" },
          { "kind": "p", "text": "Untuk segi tiga bersudut tegak, luasnya ialah [[K=\\frac{ab}{2}]] dan separa perimeternya ialah [[s=\\frac{a+b+c}{2}]]. Menggantikan kedua-duanya ke dalam [[r=\\frac{K}{s}]] memberikan:" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "Dipermudahkan:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "Ada juga rumus segi tiga bersudut tegak yang setara yang mengelakkan luas sepenuhnya:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Kedua-dua ungkapan ini setara untuk segi tiga bersudut tegak kerana hubungan Pythagoras: algebra meruntuh apabila [[a^2+b^2=c^2]] digunakan. Mana-mana bentuk memberikan jejari dalam yang sama; yang kedua lazimnya lebih pantas dikira dengan tangan." },
          { "kind": "h3", "text": "Contoh 3-4-5 yang Dikerjakan Sepenuhnya" },
          { "kind": "p", "text": "Diberi [[a=3,\\;b=4,\\;c=5]]: separa perimeter [[s=\\frac{3+4+5}{2}=6]], luas [[K=\\frac{3\\times4}{2}=6]], jejari dalam [[r=\\frac{6}{6}]], jadi [[[\\boxed{r=1}]]] Sahkan dengan jalan pintas: [[r=\\frac{3+4-5}{2}]], memberikan [[[\\boxed{r=1}]]] Kedua-dua kaedah menghasilkan jawapan yang sama kerana kedua-duanya ialah matematik yang sama ditulis dua cara: satu melalui luas, satu lagi menghapuskannya secara algebra." },
          { "kind": "h3", "text": "Mengapakah Separa Perimeter Penting untuk Pengiraan Bulatan Terterap?" },
          { "kind": "p", "text": "Separa perimeter ialah jambatan antara sempadan segi tiga dengan bulatan terterapnya. Pereka bentuk menggunakannya apabila menentukan saiz ruang bulat di dalam bahagian segi tiga, apabila meletakkan ciri bulat terterap dalam reka bentuk geometri, apabila mendimensikan rajah kejuruteraan, dan apabila menyelesaikan bukti matematik yang menghubungkan luas dengan jejari. Jejari dalam juga berhubung semula dengan pengesahan luas: jika [[K]], [[r]], dan [[s]] tidak memenuhi [[K=rs]], sesuatu dalam rantaian itu salah. Kalkulator ini tidak mengira jejari dalam secara automatik; ia membekalkan separa perimeter, dan rumus-rumus di atas mengambil alih dari situ." }
        ],
        "imgAlt": "Segi tiga bersudut tegak 3-4-5 dengan bulatan terterap berjejari 1; separa perimeter s = 6, luas K = 6, r = K/s",
        "figcaption": "Bulatan terterap menyentuh ketiga-tiga sisi; dengan s = 6 dan K = 6, jejari dalam r = K / s = 1."
      },
      "sec-heron": {
        "h2": "Bagaimanakah Separa Perimeter Digunakan dalam Rumus Heron?",
        "blocks": [
          { "kind": "p", "text": "Rumus Heron mengira luas segi tiga daripada tiga panjang sisinya, tanpa memerlukan tinggi yang dibekalkan berasingan. Separa perimeter ialah bahan utamanya: rumus itu ditulis dari segi [[s]] dan perbezaan antara [[s]] dengan setiap sisi." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Di sini [[K]] ialah luas segi tiga, [[s]] ialah separa perimeter, dan [[a]], [[b]], [[c]] ialah tiga panjang sisi." },
          { "kind": "h3", "text": "Mengapakah Rumus Heron Menggunakan Separa Perimeter?" },
          { "kind": "p", "text": "Separa perimeter dikira dahulu kerana ia memusatkan ungkapan: setiap faktor [[s-a]], [[s-b]], [[s-c]] mengukur berapa banyak separuh perimeter melebihi satu sisi. Mendarabkan tiga lebihan itu dengan [[s]] sendiri dan mengambil punca kuasa dua menukar maklumat sempadan kepada luas. Rumus ini berfungsi untuk mana-mana segi tiga yang sah, bukan sahaja segi tiga bersudut tegak, itulah sebabnya separa perimeter berguna sebagai alat geometri umum dan bukannya sekadar keingintahuan segi tiga bersudut tegak." },
          { "kind": "h3", "text": "Contoh 3-4-5 yang Dikerjakan Sepenuhnya" },
          { "kind": "p", "text": "Diberi [[a=3,\\;b=4,\\;c=5]], kira dahulu separa perimeter: [[s=\\frac{3+4+5}{2}=6]]. Gantikan ke dalam rumus Heron: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Permudahkan: [[K=\\sqrt{6\\times3\\times2\\times1}]], kemudian [[K=\\sqrt{36}]], memberikan [[[\\boxed{K=6\\text{ square units}}]]]" },
          { "kind": "h3", "text": "Sahkan Hasilnya Menggunakan Rumus Luas Segi Tiga Bersudut Tegak" },
          { "kind": "p", "text": "Rumus luas segi tiga bersudut tegak yang terus ialah [[K=\\frac{ab}{2}]]. Menggantikan: [[K=\\frac{3\\times4}{2}]], memberikan [[[\\boxed{K=6\\text{ square units}}]]] Kedua-dua rumus menghasilkan luas yang sama, dan itulah tepat maksudnya: rumus Heron, yang dibina atas separa perimeter, mengesahkan pengiraan yang lebih mudah itu secara bebas." },
          { "kind": "h3", "text": "Mengapakah Ini Berguna?" },
          { "kind": "p", "text": "Segi tiga bersudut tegak mempunyai rumus luas terus yang lebih mudah, jadi rumus Heron jarang menjadi laluan terpantas kepada luas. Nilainya terletak pada menyemak pengiraan luas, pada memahami bagaimana panjang sisi sahaja menentukan luas, pada menyelesaikan masalah berasaskan panjang sisi yang mana tiada tinggi diberi, dan pada mengesahkan penyelesaian matematik melalui laluan bebas. Apabila dua rumus yang tidak berkaitan bersetuju tentang luas, keyakinan terhadap jawapan meningkat dengan mendadak." }
        ],
        "imgAlt": "Rumus Heron digunakan pada segi tiga 3-4-5: separa perimeter 6 memberikan luas 6, disahkan oleh K = ab/2",
        "figcaption": "Lima langkah: sisi, separa perimeter s = 6, penggantian Heron, luas K = 6, semak dengan K = ab / 2."
      },
      "sec-vs-perimeter": {
        "h2": "Apakah Perbezaan antara Perimeter dengan Separa Perimeter?",
        "blocks": [
          { "kind": "p", "text": "Kedua-dua kuantiti menggambarkan sempadan yang sama pada skala yang berbeza, dan mencampuradukkannya ialah antara kesilapan paling kerap dalam kerja segi tiga. Bahagian ini menarik garisnya dengan jelas." },
          { "kind": "h3", "text": "Perimeter Mengukur Sempadan Penuh" },
          { "kind": "p", "text": "Perimeter ialah jumlah panjang mengelilingi segi tiga:" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Ia mewakili perjalanan lengkap mengelilingi ketiga-tiga tepi. Untuk segi tiga 3-4-5, [[P=12]] unit." },
          { "kind": "h3", "text": "Separa Perimeter Ialah Separuh Jumlah" },
          { "kind": "p", "text": "Separa perimeter ialah separuh perimeter berangka:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "Untuk segi tiga 3-4-5 yang sama, [[s=6]] unit. Segi tiga yang sama, sempadan yang sama, tetapi nombornya dibelah dua kerana rumus-rumus yang menggunakannya, rumus Heron dan hubungan jejari dalam, ditulis untuk nilai separuh." },
          { "kind": "h3", "text": "Perbandingan Berangka" },
          { "kind": "p", "text": "Gunakan segi tiga bersudut tegak 6-8-10. Perimeter: [[P=6+8+10]], jadi [[[\\boxed{P=24}]]] Separa perimeter: [[s=\\frac{24}{2}]], jadi [[[\\boxed{s=12}]]] Perimeter menjawab \"berapa panjang keseluruhan sempadan?\"; separa perimeter menjawab \"apakah nilai separuh sempadan yang diperlukan rumus saya?\"" },
          { "kind": "h3", "text": "Bilakah Anda Harus Menggunakan Setiap Ukuran?" },
          { "kind": "p", "text": "Gunakan perimeter apabila kerja melibatkan panjang sempadan penuh: membingkai bentuk segi tiga, memagar plot segi tiga, menganggar bahan sempadan, atau mengukur hiasan tepi. Gunakan separa perimeter apabila kerja bersifat matematik: rumus Heron, pengiraan jejari dalam, hubungan luas-jejari, bukti geometri lanjutan, atau pengesahan bebas hasil luas. Panduan amnya mudah: kerja sempadan fizikal mengambil [[P]]; kerja rumus mengambil [[s]]." },
          { "kind": "h3", "text": "Adakah Separa Perimeter Separuh Luas?" },
          { "kind": "p", "text": "Tidak, dan kekeliruan ini memerlukan pembetulan yang tegas. Separa perimeter ialah ukuran linear: untuk 3-4-5 ia ialah 6 unit. Luas ialah ukuran dua dimensi: untuk 3-4-5 ia ialah 6 unit persegi. Nombor-nombor itu bertepatan di sini secara kebetulan, tetapi kuantitinya berbeza jenis. Membelah dua panjang tidak sekali-kali menghasilkan luas, sama seperti membelah dua perimeter tidak sekali-kali menghasilkan permukaan." }
        ],
        "table": {
          "headers": ["Ukuran", "Simbol", "Rumus", "Maksud", "Unit", "Aplikasi lazim"],
          "rows": [
            ["Perimeter", "[[P]]", "[[P=a+b+c]]", "Panjang sempadan penuh", "Linear (m, ft, in)", "Pagar, bingkai, hiasan"],
            ["Separa perimeter", "[[s]]", "[[s=(a+b+c)/2]]", "Separuh panjang sempadan", "Linear (m, ft, in)", "Rumus Heron, jejari dalam"],
            ["Luas", "[[K]]", "[[K=ab/2]]", "Permukaan tertutup", "Persegi (m², ft², in²)", "Liputan permukaan, bahan"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Cara Mengira Separa Perimeter Apabila Satu Sisi Tiada",
        "blocks": [
          { "kind": "p", "text": "Kalkulator di halaman ini memerlukan ketiga-tiga panjang sisi: ia tidak boleh membelah dua jumlah yang tidak boleh ditambahnya. Jika satu sisi tidak diketahui, kira dahulu dengan teorem Pythagoras, kemudian teruskan dengan separa perimeter seperti biasa." },
          { "kind": "h3", "text": "Mencari Hipotenus" },
          { "kind": "p", "text": "Apabila kedua-dua kaki diketahui, gunakan [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Contoh: [[a=6]], [[b=8]]. Kemudian [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], memberikan [[[\\boxed{c=10}]]] Kini separa perimeter menyusul: [[s=\\frac{6+8+10}{2}]], jadi [[[\\boxed{s=12}]]]" },
          { "kind": "h3", "text": "Mencari Kaki yang Tiada" },
          { "kind": "p", "text": "Apabila hipotenus dan satu kaki diketahui, gunakan [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Contoh: [[c=13]], [[b=12]]. Kemudian [[a=\\sqrt{169-144}]], memberikan [[[\\boxed{a=5}]]] Kemudian [[s=\\frac{5+12+13}{2}]], jadi [[[\\boxed{s=15}]]]" },
          { "kind": "h3", "text": "Mengapakah Sisi yang Tiada Mesti Dicari Dahulu?" },
          { "kind": "p", "text": "Separa perimeter memerlukan jumlah lengkap ketiga-tiga sisi, dan sisi yang tidak diketahui tidak boleh diabaikan begitu sahaja atau dianggap sifar. Bentuk hipotenus Pythagoras menambah kuasa dua; bentuk kaki menolaknya; menggunakan yang salah mencipta sisi yang tidak wujud. Setelah sisi yang tiada diperoleh semula, <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Kalkulator Sisi Segi Tiga Bersudut Tegak</a> boleh menyemak semula nilainya, dan pengiraan separa perimeter berjalan di atas landasan yang kukuh. Langkah-langkah sisi yang tiada ini ialah kaedah sokongan pendidikan, bukan input tambahan dalam kalkulator sedia ada." }
        ]
      },
      "sec-properties": {
        "h2": "Sifat Penting Separa Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Separa perimeter berkelakuan boleh diramal. Sifat-sifat ini berfungsi ganda sebagai semakan mental pantas dan sebagai alat dalam penaakulan geometri." },
          { "kind": "h3", "text": "Separa Perimeter Lebih Besar daripada Hipotenus" },
          { "kind": "p", "text": "Untuk setiap segi tiga yang sah, [[a+b>c]]. Menambah [[c]] pada kedua-dua belah memberikan [[a+b+c>2c]], dan membahagikan dengan dua menghasilkan [[[\\boxed{s>c}]]] Separa perimeter sentiasa melebihi sisi terpanjang. Jika pengiraan mengembalikan [[s]] yang lebih kecil daripada [[c]], label atau aritmetiknya salah." },
          { "kind": "h3", "text": "Separa Perimeter Kurang daripada Jumlah Kaki" },
          { "kind": "p", "text": "Ketaksamaan segi tiga juga memberikan [[c<a+b]]. Menambah [[a+b]] pada kedua-dua belah menghasilkan [[a+b+c<2(a+b)]], dan membelah dua memberikan [[[\\boxed{s<a+b}]]] Jadi separa perimeter terletak ketat antara hipotenus dengan jumlah kaki: [[c<s<a+b]]. Untuk 3-4-5: [[5<6<7]]. Apit ini ialah semakan kebolehpercayaan pantas untuk mana-mana jawapan." },
          { "kind": "h3", "text": "Menggandakan Setiap Sisi Menggandakan Separa Perimeter" },
          { "kind": "p", "text": "Skalakan segi tiga 3-4-5 dengan dua: [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] memberikan sisi 6, 8, 10. Kemudian [[s_2=\\frac{2a+2b+2c}{2}]], jadi [[[\\boxed{s_2=2s}]]] Secara berangka, [[s_2=12=2\\times6]]. Separa perimeter ialah ukuran linear, jadi penskalaan seragam menskalakannya dengan faktor yang sama." },
          { "kind": "h3", "text": "Menggandakan Tiga Setiap Sisi Menggandakan Tiga Separa Perimeter" },
          { "kind": "p", "text": "Kelinearan yang sama terpakai untuk mana-mana faktor skala. Gandakan tiga setiap sisi dan jumlahnya berganda tiga; membelah dua jumlah yang digandakan tiga itu memberikan tiga kali separa perimeter asal: [[[\\boxed{s_2=3s}]]] Secara umum, menskalakan semua sisi dengan [[k]] menskalakan [[s]] dengan [[k]]. Inilah sebabnya segi tiga serupa mempunyai separa perimeter yang berkadaran." },
          { "kind": "h3", "text": "Apakah yang Berlaku Apabila Hanya Satu Sisi Berubah?" },
          { "kind": "p", "text": "Mengubah satu sisi sambil mengekalkan dua yang lain mengubah separa perimeter berangka sebanyak separuh perubahan panjang sisi, kerana hanya satu sebutan jumlah yang bergerak. Tetapi ada syaratnya: ukuran yang terhasil mesti masih menggambarkan segi tiga yang sah, dan untuk halaman ini, segi tiga bersudut tegak. Memanjangkan hipotenus segi tiga 3-4-5 kepada 6, contohnya, melanggar [[a^2+b^2=c^2]], jadi nombor-nombor baharu tidak lagi menggambarkan segi tiga bersudut tegak sama sekali. Laraskan satu sisi segi tiga bersudut tegak dan yang lain mesti dilaraskan untuk mengekalkan sudut tegak." },
          { "kind": "h3", "text": "Separa Perimeter Segi Tiga 45-45-90" },
          { "kind": "p", "text": "Biar kedua-dua kaki sama dengan [[k]]. Hipotenusnya ialah [[c=k\\sqrt{2}]], jadi separa perimeter ialah [[s=\\frac{k+k+k\\sqrt{2}}{2}]], yang dipermudah kepada [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]] Kaki yang sama menyumbang secara simetri, dan hipotenus tidak nisbah meninggalkan tandanya pada hasil: untuk [[k=1]], [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "Separa Perimeter Segi Tiga 30-60-90" },
          { "kind": "p", "text": "Jika kaki yang lebih pendek ialah [[k]], sisi-sisinya ialah [[k]], [[k\\sqrt{3}]], dan [[2k]]. Oleh itu [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], memberikan [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]] Secara berangka, dengan [[k=2]] sisi-sisinya ialah 2, [[2\\sqrt{3}\\approx3.464]], dan 4, jadi [[s\\approx4.732]]. Bentuk radikal tepat lebih diutamakan di sini: ia mengekalkan ketepatan penuh untuk sebarang pengiraan Heron atau jejari dalam kemudian." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Unit Ukuran dalam Pengiraan Separa Perimeter",
        "blocks": [
          { "kind": "p", "text": "Separa perimeter berfungsi dalam mana-mana unit panjang, meter, sentimeter, milimeter, kilometer, kaki, inci, ela, atau batu, kerana ia hanyalah jumlah panjang, dibelah dua. Unit jawapan sentiasa sepadan dengan unit input. Satu-satunya peraturan ketat ialah konsistensi: setiap sisi mesti dinyatakan dalam unit yang sama sebelum penambahan." },
          { "kind": "h3", "text": "Mengapakah Ketiga-tiga Ukuran Sisi Mesti Menggunakan Unit yang Serasi?" },
          { "kind": "p", "text": "Separa perimeter dikira dengan menambah tiga panjang, dan panjang dalam unit berbeza tidak menambah secara terus. Menambah 3 meter kepada 40 sentimeter seolah-olah kedua-duanya nombor biasa memberikan 43 yang tidak bermakna. Jumlah hanya sah apabila setiap sebutan berkongsi satu unit, jadi penukaran datang sebelum penambahan, tidak sekali-kali selepas." },
          { "kind": "h3", "text": "Contoh Penukaran Unit yang Dikerjakan" },
          { "kind": "p", "text": "Diberi [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Tukarkan inci kepada kaki dahulu: [[48\\text{ inches}=4\\text{ ft}]]. Kini ketiga-tiga sisi dalam kaki: [[s=\\frac{3+4+5}{2}]], memberikan [[[\\boxed{s=6\\text{ ft}}]]] Ukuran mesti ditukar sebelum penambahan kerana rumus menambah nombor mentah; ia tidak boleh tahu bahawa 48 bermaksud inci melainkan anda menukarkannya." },
          { "kind": "h3", "text": "Bagaimanakah Pemilih Unit Kalkulator Membantu?" },
          { "kind": "p", "text": "Setiap input di halaman ini mempunyai pemilih unit ukurannya sendiri, yang membolehkan anda mengisytiharkan unit nombor yang anda taip. Tetapkan setiap pemilih agar sepadan dengan unit sebenar inputnya supaya alat menggabungkan nilai-nilai itu atas asas yang konsisten. Jangan andaikan ciri penukaran di luar apa yang ditunjukkan antara muka: pemilih menggambarkan input anda, dan separa perimeter dikira daripada nilai seperti yang dimasukkan." },
          { "kind": "h3", "text": "Bekerja dengan Ukuran Sisi Perpuluhan" },
          { "kind": "p", "text": "Perpuluhan mengikut rumus yang sama. Dengan [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], jadi [[s=\\frac{15}{2}]], memberikan [[[\\boxed{s=7.5\\text{ units}}]]] Kekalkan ketepatan perpuluhan penuh melalui penambahan dan pembahagian; bundarkan hanya jawapan akhir yang dipaparkan, dan hanya jika soalan memerlukannya." },
          { "kind": "h3", "text": "Bekerja dengan Panjang Sisi Tidak Nisbah" },
          { "kind": "p", "text": "Sesetengah segi tiga bersudut tegak mempunyai sisi tidak nisbah, dan rumus menanganinya dengan cara yang sama. Ambil segi tiga 45-45-90 dengan [[a=1,\\;b=1,\\;c=\\sqrt{2}]]: [[s=\\frac{1+1+\\sqrt{2}}{2}]], memberikan bentuk tepat [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]], kira-kira [[s\\approx1.7071]]. Tatatanda radikal tepat berharga dalam matematik kerana ia mengekalkan ketepatan penuh: sebarang penggunaan [[s]] kemudian dalam rumus Heron atau pengiraan jejari dalam bermula daripada nilai sebenar, bukan yang dibundarkan." },
          { "kind": "h3", "text": "Mengapakah Anda Harus Mengelakkan Pembundaran Terlalu Awal?" },
          { "kind": "p", "text": "Pembundaran pramatang menyuntik ralat ke dalam setiap pengiraan kemudian, dan separa perimeter lazimnya nilai perantaraan, bukan jawapan akhir. Membundarkan [[s]] kepada dua perpuluhan sebelum menyuapkannya ke dalam rumus Heron, yang mana ia muncul empat kali, menggandakan ralat dengan ketara. Kekalkan ketepatan yang mencukupi semasa langkah perantaraan: bawa perpuluhan penuh atau radikal tepat, dan bundarkan sekali, pada akhirnya, kepada ketepatan yang diperlukan soalan." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Lazim Semasa Mengira Separa Perimeter Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Enam belas kesilapan merangkumi hampir setiap separa perimeter yang salah. Setiap satu dijelaskan dengan apa yang rosak, mengapa ia berlaku, dan pendekatan yang betul." },
          { "kind": "p", "text": "<strong>1. Lupa membahagikan jumlah dengan dua.</strong> Menambah 3 + 4 + 5 = 12 dan berhenti memberikan perimeter, bukan separa perimeter. Sentiasa selesaikan dengan pembahagian: [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Membahagikan setiap sisi sebelum memahami rumus.</strong> Membelah dua sisi satu demi satu kemudian menambah betul dari segi aritmetik tetapi menyembunyikan struktur rumus. Tambah dahulu, bahagi sekali: [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Lupa menyertakan hipotenus.</strong> Hipotenus ialah tepi sempadan. Meninggalkannya daripada segi tiga 3-4-5 memberikan [[(3+4)/2=3.5]] bukannya 6." },
          { "kind": "p", "text": "<strong>4. Menggunakan hanya dua kaki yang berserenjang.</strong> Kesilapan yang sama seperti di atas dalam pakaian berbeza. Kaki sahaja bukan keseluruhan sempadan; hipotenus menutup bentuk dan mesti dikira." },
          { "kind": "p", "text": "<strong>5. Mengelirukan separa perimeter dengan perimeter penuh.</strong> Melaporkan 12 untuk segi tiga 3-4-5 menjawab \"apakah P?\" sedangkan soalan meminta s. Ingat: [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Mengelirukan separa perimeter dengan luas.</strong> Untuk 3-4-5 kedua-duanya sama dengan 6 dari segi berangka, yang mengundang kekeliruan. Kedua-duanya berbeza jenis: 6 unit panjang berbanding 6 unit persegi permukaan." },
          { "kind": "p", "text": "<strong>7. Melaporkan hasil dalam unit persegi.</strong> Separa perimeter 6 cm persegi ialah kesilapan kategori. Membelah dua panjang meninggalkan panjang: 6 cm, bukan 6 cm²." },
          { "kind": "p", "text": "<strong>8. Menggunakan hipotenus yang salah.</strong> Jika nilai hipotenus salah, jumlah salah dan separa perimeter pun salah. Sahkan [[c=\\sqrt{a^2+b^2}]] apabila hipotenus dikira dan bukannya diukur." },
          { "kind": "p", "text": "<strong>9. Memasukkan ukuran yang tidak membentuk segi tiga bersudut tegak.</strong> Uji [[a^2+b^2=c^2]] sebelum mempercayai label \"segi tiga bersudut tegak\". Penambahan masih berfungsi, tetapi makna geometrinya berubah." },
          { "kind": "p", "text": "<strong>10. Mencampurkan sentimeter dengan meter.</strong> Menambah 3 m kepada 40 cm tidak memberikan 43 apa-apa. Tukarkan kepada satu unit dahulu." },
          { "kind": "p", "text": "<strong>11. Mencampurkan kaki dengan inci.</strong> Perangkap imperial klasik. Tukarkan inci kepada kaki (bahagi dengan 12) sebelum menambah, atau tetapkan pemilih unit agar sepadan." },
          { "kind": "p", "text": "<strong>12. Membundar terlalu awal.</strong> Membundarkan [[\\sqrt{2}]] kepada 1.4 sebelum menambah mengumpul ralat. Bundarkan hanya jawapan akhir." },
          { "kind": "p", "text": "<strong>13. Menggunakan sisi yang tiada tanpa mengiranya.</strong> Dua sisi yang diketahui bukan separa perimeter. Dapatkan semula yang ketiga dengan teorem Pythagoras dahulu, kemudian tambah dan belah dua." },
          { "kind": "p", "text": "<strong>14. Menggunakan rumus Heron dengan salah.</strong> Faktor-faktornya ialah [[s-a]], [[s-b]], dan [[s-c]]: setiap sisi ditolak daripada separa perimeter, bukan daripada sisi lain. Mencampuradukkan penolakan merosakkan luas." },
          { "kind": "p", "text": "<strong>15. Mengelirukan jejari dalam dengan jejari luar.</strong> Jejari dalam [[r=K/s]] menyentuh ketiga-tiga sisi dari dalam; jejari luar melalui bucu-bucu dan sama dengan [[c/2]] untuk segi tiga bersudut tegak. Bulatan berbeza, rumus berbeza." },
          { "kind": "p", "text": "<strong>16. Mengandaikan separa perimeter menggambarkan laluan separuh sempadan fizikal.</strong> Ia ialah separuh jumlah berangka, bukan laluan separuh yang ditanda mengelilingi segi tiga. Anggaplah ia sebagai nilai perantaraan terbitan yang sebenarnya." },
          { "kind": "p", "text": "<strong>Salah lawan betul, bersebelahan.</strong> Diberi [[a=3,\\;b=4,\\;c=5]]: yang salah ialah [[s=3+4+5=12]], yang melangkau pembahagian dan melaporkan perimeter penuh. Juga salah ialah [[s=(3+4)/2=3.5]], yang meninggalkan hipotenus. Yang betul ialah [[s=\\frac{3+4+5}{2}]], memberikan [[[\\boxed{s=6}]]]" }
        ]
      },
      "sec-verify": {
        "h2": "Cara Menyemak Sama Ada Jawapan Separa Perimeter Anda Betul",
        "blocks": [
          { "kind": "p", "text": "Lapan semakan bebas menangkap hampir setiap kesilapan. Segi tiga 3-4-5 menunjukkan setiap satu. Semakan bebas penting kerana ia gagal dengan cara yang berbeza: apabila kaedah yang tidak berkaitan bersetuju, jawapan itu telah memperoleh kepercayaannya." },
          { "kind": "p", "text": "<strong>Kaedah 1: Gandakan separa perimeter.</strong> [[[\\boxed{P=2s}]]] mesti sama dengan perimeter penuh: [[2\\times6=12=3+4+5]]. Jika penggandaan tidak menghasilkan semula jumlah sisi, pembahagian atau penambahan yang rosak." },
          { "kind": "p", "text": "<strong>Kaedah 2: Kira semula daripada ketiga-tiga sisi.</strong> Kira semula [[s=\\frac{a+b+c}{2}]] dari awal: [[(3+4+5)/2=6]]. Laluan kedua menangkap kesilapan ketukan kekunci dan aritmetik." },
          { "kind": "p", "text": "<strong>Kaedah 3: Sahkan hubungan Pythagoras.</strong> Semak [[a^2+b^2=c^2]]: [[9+16=25]]. Ini mengesahkan sisi-sisi membentuk segi tiga bersudut tegak, yang mengesahkan label sisi yang bergantung pada separa perimeter." },
          { "kind": "p", "text": "<strong>Kaedah 4: Semak hipotenus.</strong> Sahkan [[c>a]] dan [[c>b]]: 5 lebih besar daripada 3 dan lebih besar daripada 4. Jika hipotenus yang disangka bukan sisi terpanjang, labelnya salah." },
          { "kind": "p", "text": "<strong>Kaedah 5: Semak ketaksamaan segi tiga.</strong> Sahkan [[a+b>c]]: [[3+4=7>5]]. Jumlah kaki mesti melebihi hipotenus, atau tiada segi tiga wujud." },
          { "kind": "p", "text": "<strong>Kaedah 6: Sahkan batas separa perimeter.</strong> [[[\\boxed{s>c}]]] mesti terpakai: [[6>5]]. Ketaksamaan tunggal ini menangkap bilangan kesilapan label yang mengejutkan." },
          { "kind": "p", "text": "<strong>Kaedah 7: Semak unit.</strong> Sahkan bahawa ketiga-tiga panjang sisi menggunakan unit yang serasi dan bahawa output ialah ukuran linear. Unit bercampur membatalkan jumlah walaupun aritmetiknya sempurna." },
          { "kind": "p", "text": "<strong>Kaedah 8: Bandingkan dengan langkah penyelesaian kalkulator.</strong> Hasil yang dipaparkan dan langkah pengiraan membantu mengenal pasti kesilapan: jika sesuatu langkah menunjukkan sisi yang tersalah taip atau pembahagian yang dilangkau, kesilapannya kelihatan sebelum jawapan digunakan." }
        ]
      },
      "sec-conclusion": {
        "h2": "Separuh Sempadan, Pemahaman Penuh",
        "blocks": [
          { "kind": "p", "text": "Separa perimeter segi tiga bersudut tegak ialah idea kecil yang berjangkauan jauh. Satu penambahan dan satu pembahagian menghasilkan nombor yang membuka jejari dalam, menggerakkan rumus Heron, dan mempertajam pengesahan luas. Rumus meminta tiga sisi kerana sempadan mempunyai tiga tepi, dan hipotenus memperoleh tempatnya dalam jumlah sebagai tepi yang menutup bentuk. Segala-galanya dalam panduan ini, contoh yang dikerjakan, dua belas aplikasi, sifat-sifat, penukaran unit, enam belas kesilapan, lapan semakan pengesahan, wujud untuk melindungi satu jumlah yang dibelah dua itu daripada kesilapan label dan unit kecil yang menghasilkan jawapan salah yang kelihatan munasabah." },
          { "kind": "p", "text": "Gunakan kalkulator halaman ini apabila ketiga-tiga sisi diukur, dapatkan semula sisi yang tiada melalui teorem Pythagoras apabila tidak, dan semak hasilnya terhadap batas c < s < a + b sebelum nombor itu masuk ke dalam lukisan atau model. Apabila soalan beralih kepada permukaan di dalam sempadan, rumus Heron dan kalkulator luas menanti; apabila beralih kepada bulatan di dalam segi tiga, jejari dalam hanya satu pembahagian jauhnya." }
        ]
      }
    },
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak yang Berkaitan",
    "relatedIntro": "Setiap alat ini melanjutkan pengiraan separa perimeter ke satu arah: sempadan penuh, permukaan, laluan luas-daripada-separa-perimeter, bulatan terterap, atau sisi-sisi yang tiada di sebalik semuanya.",
    "relatedItems": [
      "Kalkulator Perimeter Segi Tiga Bersudut Tegak",
      "Kalkulator Luas Segi Tiga Bersudut Tegak",
      "Kalkulator Luas Segi Tiga Bersudut Tegak daripada Separa Perimeter",
      "Kalkulator Jejari Dalam Segi Tiga Bersudut Tegak",
      "Kalkulator Sisi Segi Tiga Bersudut Tegak"
    ],
    "faqHeading": "Soalan Lazim",
    "faqs": [
      {
        "question": "Apakah rumus untuk separa perimeter segi tiga bersudut tegak?",
        "answer": "Rumusnya ialah s = (a + b + c) / 2, dengan a dan b ialah dua kaki yang membentuk sudut 90 darjah dan c ialah hipotenus, sisi terpanjang. Tambahkan ketiga-tiga panjang sisi, kemudian bahagikan jumlahnya dengan dua. Setaraf dengannya, s = P / 2, dengan P ialah perimeter penuh."
      },
      {
        "question": "Apakah maksud separa perimeter?",
        "answer": "Separa perimeter bermaksud separuh perimeter. Semi bermaksud separuh dan perimeter bermaksud panjang sempadan yang lengkap, jadi separa perimeter ialah tepat separuh daripada jumlah jarak mengelilingi segi tiga. Ia ialah ukuran geometri terbitan yang digunakan sebagai nilai perantaraan dalam banyak rumus segi tiga."
      },
      {
        "question": "Mengapakah separa perimeter separuh perimeter?",
        "answer": "Itulah takrifnya: separa perimeter dibina dengan mengambil perimeter penuh dan membahagikannya dengan dua. Nilai separuh itu ternyata kuantiti yang ditulis untuk rumus seperti rumus Heron dan hubungan jejari dalam K = rs, itulah sebabnya ia memperoleh nama dan simbolnya sendiri, s."
      },
      {
        "question": "Adakah saya memerlukan ketiga-tiga sisi untuk mengira separa perimeter?",
        "answer": "Ya. Separa perimeter ialah separuh jumlah ketiga-tiga panjang sisi, jadi setiap sisi mesti diketahui, termasuk hipotenus. Jika satu sisi tiada, dapatkan semula dahulu dengan teorem Pythagoras: c = √(a² + b²) untuk hipotenus yang tiada, atau a = √(c² − b²) untuk kaki yang tiada."
      },
      {
        "question": "Apakah perbezaan antara perimeter dengan separa perimeter?",
        "answer": "Perimeter P = a + b + c ialah panjang sempadan penuh, manakala separa perimeter s = (a + b + c) / 2 ialah separuh daripadanya. Gunakan perimeter untuk kerja sempadan fizikal seperti memagar atau membingkai, dan separa perimeter untuk kerja rumus seperti rumus Heron, pengiraan jejari dalam, dan bukti geometri. Untuk segi tiga 3-4-5, P = 12 dan s = 6."
      },
      {
        "question": "Adakah separa perimeter diukur dalam unit persegi?",
        "answer": "Tidak. Separa perimeter ialah ukuran panjang satu dimensi, jadi ia mengambil unit linear: meter, sentimeter, kaki, atau inci, sepadan dengan panjang sisi. Unit persegi milik luas. Melaporkan separa perimeter 6 cm² ialah kesilapan kategori; unit yang betul ialah 6 cm."
      },
      {
        "question": "Apakah separa perimeter segi tiga bersudut tegak 3-4-5?",
        "answer": "Tambahkan sisi-sisi: 3 + 4 + 5 = 12, kemudian bahagikan dengan dua: s = 6 unit. Perimeter penuh ialah 12 unit. Sisi-sisi memenuhi 3² + 4² = 5², mengesahkan sudut tegak, dan separa perimeter 6 melebihi hipotenus 5, seperti yang mesti berlaku untuk mana-mana segi tiga yang sah."
      },
      {
        "question": "Mengapakah separa perimeter digunakan dalam rumus Heron?",
        "answer": "Rumus Heron, K = √(s(s − a)(s − b)(s − c)), mengira luas daripada panjang sisi sahaja, dan ia ditulis dari segi separa perimeter s dan perbezaan s − a, s − b, s − c. Mengira s dahulu memusatkan ungkapan dan mengekalkannya ringkas. Untuk 3-4-5, s = 6 memberikan K = √(6 × 3 × 2 × 1) = 6 unit persegi."
      },
      {
        "question": "Bagaimanakah separa perimeter berkait dengan jejari dalam?",
        "answer": "Luas, jejari dalam, dan separa perimeter memenuhi K = rs, jadi r = K / s. Untuk segi tiga bersudut tegak ini dipermudah kepada r = (a + b − c) / 2. Untuk 3-4-5: s = 6, K = 6, jadi r = 1. Separa perimeter ialah jambatan yang menukar tiga panjang sisi kepada jejari bulatan terterap."
      },
      {
        "question": "Bolehkah saya mengira separa perimeter jika satu sisi tiada?",
        "answer": "Ya, tetapi cari sisi yang tiada dahulu. Dengan kaki 6 dan 8, hipotenusnya ialah √(36 + 64) = 10, jadi s = (6 + 8 + 10) / 2 = 12. Dengan hipotenus 13 dan kaki 12, kaki yang tiada ialah √(169 − 144) = 5, jadi s = (5 + 12 + 13) / 2 = 15. Kalkulator di halaman ini memerlukan ketiga-tiga sisi dimasukkan."
      },
      {
        "question": "Bagaimanakah saya boleh mengesahkan jawapan separa perimeter saya?",
        "answer": "Gandakannya: 2s mesti sama dengan perimeter penuh a + b + c. Semak bahawa s melebihi hipotenus (s > c) dan terletak di bawah jumlah kaki (s < a + b). Sahkan hubungan Pythagoras a² + b² = c², sahkan ketiga-tiga sisi berkongsi satu unit, dan bandingkan dengan langkah penyelesaian kalkulator."
      },
      {
        "question": "Bolehkah separa perimeter digunakan untuk mengira luas segi tiga?",
        "answer": "Ya, melalui rumus Heron: K = √(s(s − a)(s − b)(s − c)). Ia ialah semakan bebas ke atas rumus segi tiga bersudut tegak yang terus K = ab / 2. Untuk 3-4-5 kedua-duanya memberikan 6 unit persegi. Rumus Heron paling berharga apabila tiada tinggi diketahui atau apabila anda mahukan pengiraan kedua yang tidak berkaitan mengesahkan luas."
      }
    ]
  }
};
