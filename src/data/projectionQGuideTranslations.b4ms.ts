// projectionQGuideTranslations.bms.ts: Right Triangle Projection Q
// Guide (Page 36 of 45) translation.
export const PROJQ_B4_MS = {
  "ms": {
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "answer": "Formulanya ialah [[q = \\frac{b^2}{c}]], dengan b ialah kaki yang berkaitan dengan q dan c ialah hipotenus lengkap. Kuasa duakan kaki b dahulu, kemudian bahagikan dengan c. Sebagai contoh, [[b = 8]] cm dan [[c = 10]] cm memberikan [[q = 6.4]] cm.",
          "question": "Apakah formula untuk unjuran q?",
        },
        {
          "answer": "Unjuran q ialah segmen hipotenus yang terletak bersebelahan bucu B, yang terbentuk apabila altitud dari sudut tegak bertemu hipotenus pada titik D. Dalam segi tiga ABC, [[q = DB]], iaitu bahagian hipotenus yang berkaitan dengan kaki b.",
          "question": "Apakah yang diwakili oleh unjuran q?",
        },
        {
          "answer": "Kuasa dua itu datang daripada segi tiga serupa: segi tiga CBD adalah serupa dengan segi tiga ABC, memberikan [[\\frac{q}{b} = \\frac{b}{c}]], dan kaki b muncul dalam kedua-dua nisbah. Pendaraban silang memberikan [[b^2 = c \\times q]], jadi kuasa dua itu memang terbina dalam geometri.",
          "question": "Mengapakah kaki b dikuasa duakan?",
        },
        {
          "answer": "Pembahagian mengasingkan q. Teorem unjuran menyatakan [[b^2 = c \\times q]], dengan q didarab dengan c, jadi membahagikan kedua-dua belah dengan c akan meninggalkan q sahaja. Pembahagian juga menukar panjang kuasa dua itu menjadi panjang biasa.",
          "question": "Mengapakah kita membahagi dengan hipotenus?",
        },
        {
          "answer": "Tidak. Kaki b ialah sisi BC, salah satu sisi yang membentuk sudut tegak, manakala unjuran q ialah segmen DB di sepanjang hipotenus. Dalam segi tiga 6-8-10, kaki b ialah 8 cm dan unjuran q hanya 6.4 cm.",
          "question": "Adakah unjuran q sama dengan kaki b?",
        },
        {
          "answer": "Unjuran q terletak bersebelahan bucu B dan berpasangan dengan kaki b, manakala unjuran p terletak bersebelahan bucu A dan berpasangan dengan kaki a. Kedua-duanya ialah segmen yang dihasilkan oleh altitud pada hipotenus: [[p + q = c]].",
          "question": "Mengapakah q dikaitkan dengan kaki b dan bukan kaki a?",
        },
        {
          "answer": "Unjuran p terletak bersebelahan bucu A dan berpasangan dengan kaki a, manakala unjuran q terletak bersebelahan bucu B dan berpasangan dengan kaki b. Kedua-duanya ialah segmen yang dihasilkan oleh altitud pada hipotenus: [[p + q = c]]. Dalam segi tiga 6-8-10, p ialah 3.6 cm dan q ialah 6.4 cm, jadi q ialah segmen yang lebih panjang.",
          "question": "Apakah perbezaan antara unjuran p dan unjuran q?",
        },
        {
          "answer": "Ya. Tolakkan q daripada hipotenus: [[p = c - q]]. Dengan [[c = 10]] cm dan [[q = 6.4]] cm, [[p = 3.6]] cm. Anda juga boleh mencari p terus daripada kaki a dengan [[p = \\frac{a^2}{c}]].",
          "question": "Bolehkah saya mengira unjuran p jika saya sudah tahu q?",
        },
        {
          "answer": "Tidak. Unjuran q hanyalah sebahagian daripada hipotenus, jadi ia mestilah lebih kecil daripada c. Jika q sama dengan c, p akan menjadi sifar dan segi tiga itu menjadi degenerat. Keputusan yang lebih besar daripada c sentiasa menandakan ralat input atau pelabelan.",
          "question": "Bolehkah unjuran q lebih besar daripada hipotenus?",
        },
        {
          "answer": "Anda juga memerlukan p atau c. Cari p dengan [[p = c - q]], kemudian gunakan [[h = \\sqrt{p \\times q}]]. Dengan [[q = 6.4]] cm dan [[c = 10]] cm, [[p = 3.6]] cm dan [[h = 4.8]] cm. Unjuran q sahaja tidak dapat menentukan altitud.",
          "question": "Bagaimanakah saya mencari altitud apabila q diketahui?",
        },
        {
          "answer": "Kira semula [[q = \\frac{b^2}{c}]], kemudian semak [[p + q = c]] selepas mencari p melalui penolakan, dan pastikan q adalah positif dan lebih kecil daripada c. Anda juga boleh mencari kaki a daripada p dan menyemak [[a^2 + b^2 = c^2]].",
          "question": "Bagaimanakah saya boleh mengesahkan pengiraan unjuran q?",
        },
        {
          "answer": "Altitud jatuh pada titik tengah hipotenus, dan kedua-dua kaki adalah sama, jadi segi tiga itu adalah sama kaki. Dengan [[c = 10]] cm dan [[p = q = 5]] cm, kedua-dua kaki sama dengan [[\\sqrt{50}]] cm, kira-kira 7.071 cm.",
          "question": "Apakah yang berlaku apabila p dan q adalah sama?",
        },
      ],
      "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "relatedIntro": "Setiap kalkulator di bawah mengendalikan satu tugasan segi tiga bersudut tegak yang khusus, jadi pilih alat yang sepadan dengan ukuran yang sudah anda ketahui.",
      "relatedItems": [
        "Kalkulator Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Unjuran P Segi Tiga Bersudut Tegak",
        "Kalkulator Kaki B daripada Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Hipotenus daripada Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Altitud daripada Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Sisi Segi Tiga Bersudut Tegak",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kegunaan paling langsung ialah kerja rumah geometri dan kerja bilik darjah, di mana masalah unjuran menguji sama ada pelajar dapat melabel rajah dan menggunakan [[q = \\frac{b^2}{c}]] dan bukannya terus menggunakan teorem Pythagoras kerana kebiasaan. Latihan segi tiga serupa menggunakan persediaan yang sama, kerana buktinya sendiri merupakan latihan dalam memadankan sisi yang sepadan.",
            },
            {
              "kind": "p",
              "text": "Lukisan teknikal menggunakan teorem ini apabila segi tiga bersudut tegak mesti dibina semula daripada ukuran separa: jika lukisan memberikan hipotenus dan tapak altitud, unjuran yang hilang dapat diperoleh tanpa mengukur semula bentuk itu. Guru juga menggunakan persediaan ini sebagai pelajaran penghubung antara penambahan segmen dan keserupaan.",
            },
            {
              "kind": "p",
              "text": "Satu syarat mengehadkan setiap aplikasi: geometri segi tiga bersudut tegak yang diperlukan mestilah benar-benar wujud. Teorem ini menghuraikan hubungan geometri yang tepat, bukan ukuran lapangan yang anggaran, jadi ia tidak sekali-kali menggantikan ukur tanah yang teliti atau ukuran kejuruteraan profesional.",
            },
          ],
          "h2": "Aplikasi Praktikal Pengiraan Unjuran Segi Tiga Bersudut Tegak",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mempunyai dua medan input. Medan pertama menerima kaki b, iaitu sisi tegak yang berkaitan dengan unjuran q. Medan kedua menerima hipotenus c, iaitu sisi lengkap yang bertentangan dengan sudut tegak. Kedua-dua panjang mesti menggunakan unit yang sama, jadi tukarkan dahulu jika satu ukuran dalam sentimeter dan satu lagi dalam meter.",
            },
            {
              "kind": "p",
              "text": "Hipotenus mestilah lebih panjang daripada kaki b, kerana kaki ialah satu sisi sudut tegak manakala hipotenus merentangi seluruh segi tiga. Jika nilai b anda lebih besar daripada c, anda mungkin telah memasukkan unjuran, altitud, atau sisi yang salah.",
            },
            {
              "kind": "p",
              "text": "Klik Kira Unjuran q untuk melihat keputusan, dan gunakan Set Semula untuk mengosongkan kedua-dua medan sebelum masalah baharu. Keputusan ialah panjang dalam unit yang anda masukkan, jadi kaki 8 cm dan hipotenus 10 cm memberikan 6.4 cm. Keputusan itu ialah panjang segmen di sepanjang hipotenus.",
            },
          ],
          "h2": "Kira Unjuran Q Segi Tiga Bersudut Tegak",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rajah utama menunjukkan segi tiga ABC dengan sudut tegak di C. Sisi AC ialah kaki a, sisi BC ialah kaki b, dan sisi AB ialah hipotenus c. Altitud CD turun dari C secara tegak lurus ke AB dan menyentuhnya di D.",
            },
            {
              "kind": "p",
              "text": "Titik D membahagikan hipotenus kepada dua bahagian: segmen AD ialah unjuran p dan segmen DB ialah unjuran q. Kaki b dan unjuran q ditonjolkan kerana kedua-duanya ialah pasangan yang dibincangkan pada halaman ini. Ikuti label mengikut urutan ini: mulakan di B, susuri kaki b ke C, kemudian susuri kaki a ke A, kemudian kembali di sepanjang hipotenus dari A ke B, berhenti di D untuk melihat pembahagian kepada p dan q.",
            },
            {
              "kind": "p",
              "text": "Padanan b dengan q menjadi jelas dalam segi tiga kecil CBD, di mana kaki b ialah hipotenus dan q ialah sisi yang terletak di sepanjang hipotenus besar. Oleh sebab segi tiga CBD adalah serupa dengan segi tiga ABC, nisbah q kepada b dalam segi tiga kecil sama dengan nisbah b kepada c dalam segi tiga besar.",
            },
          ],
          "h2": "Rajah Unjuran Q Segi Tiga Bersudut Tegak Diterangkan",
          "image": {
            "alt": "Segi tiga bersudut tegak ABC dengan sudut tegak di C, altitud CD ke hipotenus AB, kaki b dan unjuran q ditonjolkan, dengan kaki a dan b, hipotenus c, unjuran p dan q, serta altitud h dilabelkan",
            "caption": "Altitud CD membahagikan hipotenus AB kepada unjuran p (AD) dan unjuran q (DB), dengan kaki b (BC) ditonjolkan.",
            "src": "projection-q-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap contoh menyatakan nilai yang diberikan, penggantian, dan jawapan akhir, dan setiap contoh mengekalkan unitnya secara konsisten dari awal hingga akhir.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = 8]] cm dan [[c = 10]] cm, formula memberikan [[q = \\frac{8^2}{10} = \\frac{64}{10}]], jadi [[q = 6.4]] cm. Kaki kuasa dua 64 ialah nilai perantaraan, dan pembahagian dengan hipotenus menukarkannya semula menjadi panjang. Kaki lain segi tiga ini ialah 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Pembahagian Kuasa Dua Sempurna",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = 12]] cm dan [[c = 24]] cm, [[q = \\frac{12^2}{24} = \\frac{144}{24} = 6]] cm. Kaki kuasa dua membahagi dengan tepat, jadi jawapannya adalah tepat. Unjuran lain di sini ialah 18 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Keputusan Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = 7]] cm dan [[c = 14]] cm, [[q = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Keputusan perpuluhan adalah biasa: unjuran tidak semestinya nombor bulat walaupun kedua-dua input adalah bulat. Unjuran lain ialah 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Ukuran Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = 15]] m dan [[c = 25]] m, [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] m. Nombor yang lebih besar tidak mengubah kaedah: kuasa duakan, kemudian bahagikan. Unjuran lain ialah 16 m, yang berpasangan dengan kaki 20 m.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran Kecil",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = 30]] mm dan [[c = 50]] mm, [[q = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Ukuran kecil berfungsi dengan cara yang sama, dan mengekalkan unit dalam milimeter sepanjang pengiraan mengelakkan sebarang penukaran. Unjuran lain ialah 32 mm, yang berpasangan dengan kaki 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = \\frac{3}{4}]] ft dan [[c = \\frac{3}{2}]] ft, kuasa duakan kaki dahulu: [[b^2 = \\frac{9}{16}]] kaki persegi. Kemudian [[q = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Membahagi dengan pecahan bermaksud mendarab dengan songsangannya, dan langkah inilah yang paling kerap terlepas oleh pelajar apabila menggunakan ukuran pecahan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Unit Berbeza",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = 80]] cm dan [[c = 1]] m, tukarkan dahulu: 1 m bersamaan 100 cm. Kemudian [[q = \\frac{80^2}{100} = \\frac{6400}{100} = 64]] cm. Menggunakan 1 dan bukan 100 akan memberikan 6400 cm, iaitu unjuran yang jauh lebih panjang daripada hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Nilai Perpuluhan Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = 4.5]] m dan [[c = 7.5]] m, [[q = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Input perpuluhan memerlukan ketelitian yang sama seperti nombor bulat: kuasa duakan perpuluhan penuh, kemudian bahagikan. Unjuran lain ialah 4.8 m, yang berpasangan dengan kaki 6 m.",
            },
          ],
          "h2": "Contoh Kerja Mengira Unjuran Q",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem unjuran menyatakan bahawa kuasa dua kaki b sama dengan hipotenus didarab dengan unjurannya:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Membahagikan kedua-dua belah dengan c akan mengasingkan q dan memberikan formula kerja untuk halaman ini:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Pengiraan berjalan dalam dua peringkat. Peringkat 1 mengkuasa duakan kaki b, iaitu mendarabkannya dengan dirinya sendiri. Peringkat 2 membahagikan panjang kuasa dua itu dengan hipotenus lengkap c, dan hasilnya ialah panjang biasa, bukan panjang kuasa dua.",
            },
            {
              "kind": "p",
              "text": "Unit memerlukan ketelitian pada kedua-dua peringkat. Jika b dan c kedua-duanya dalam sentimeter, maka [[b^2]] adalah dalam sentimeter persegi, dan pembahagian dengan sentimeter memberikan sentimeter semula. Mencampurkan unit, seperti meter untuk b dan sentimeter untuk c, memberikan hasil bahagi yang tidak bermakna, jadi tukarkan kepada satu unit sebelum mengira.",
            },
            {
              "kind": "p",
              "text": "Dengan [[b = 8]] cm dan [[c = 10]] cm, peringkat 1 memberikan [[8^2 = 64]], dan peringkat 2 memberikan [[q = \\frac{64}{10} = 6.4]] cm. Nombor 64 itu sendiri tidak menjawab sebarang soalan: hanya selepas pembahagian barulah ia menjadi panjang unjuran.",
            },
          ],
          "h2": "Formula Unjuran Q Segi Tiga Bersudut Tegak",
          "image": {
            "alt": "Segi tiga bersudut tegak ABC dengan altitud CD, menunjukkan unjuran q sama dengan kaki b kuasa dua dibahagi dengan hipotenus c",
            "caption": "Formula unjuran: q sama dengan b kuasa dua dibahagi dengan c, dengan tapak altitud D membahagikan hipotenus.",
            "src": "projection-q-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sebelas langkah pendek membawa anda dari rajah berlabel kepada jawapan yang disemak.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenal pasti segi tiga bersudut tegak dalam masalah anda dan pastikan ia mempunyai sudut tegak.",
                "Cari bucu sudut tegak dan altitud daripadanya ke hipotenus.",
                "Kenal pasti kaki tegak yang berkaitan dengan unjuran q, iaitu kaki yang menyentuh bucu B.",
                "Kenal pasti hipotenus lengkap c, iaitu sisi yang bertentangan dengan sudut tegak.",
                "Pastikan c lebih besar daripada b. Jika tidak, label semula rajah sebelum meneruskan.",
                "Pilih unit yang serasi dan tukarkan jika ukuran menggunakan unit yang berbeza.",
                "Masukkan kaki b dalam medan Kaki b.",
                "Masukkan hipotenus c dalam medan Hipotenus c.",
                "Klik Kira Unjuran q dan baca keputusannya.",
                "Semak keputusan: q mestilah positif dan lebih kecil daripada c.",
                "Gunakan Set Semula apabila memulakan pengiraan baharu.",
              ],
            },
            {
              "kind": "p",
              "text": "Memasukkan kaki a dan bukan kaki b akan menghasilkan unjuran yang berbeza. Kaki a berpasangan dengan p, jadi kalkulator akan memberikan segmen yang bersebelahan bucu A, bukan segmen yang bersebelahan B. Semakan label dalam langkah 3 adalah yang paling penting.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Unjuran Q Segi Tiga Bersudut Tegak",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mencari unjuran q bagi segi tiga bersudut tegak apabila anda tahu kaki b dan hipotenus lengkap c. Unjuran q ialah segmen hipotenus yang terletak bersebelahan kaki b, yang terbentuk apabila altitud dari sudut tegak bertemu hipotenus. Formulanya ialah [[q = \\frac{b^2}{c}]], dengan b ialah kaki tegak dan c ialah hipotenus penuh.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, dengan [[b = 8]] cm dan [[c = 10]] cm, pengiraannya ialah [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Nilai 6.4 cm ialah bahagian hipotenus yang berkaitan dengan kaki b, bukan kaki itu sendiri dan bukan keseluruhan hipotenus.",
            },
            {
              "kind": "p",
              "text": "Kalkulator terletak di bahagian atas halaman ini, diikuti formula, rajah berlabel, bukti, contoh kerja, dan semakan yang boleh anda jalankan pada sebarang jawapan.",
            },
          ],
          "h2": "Kalkulator Unjuran Q Segi Tiga Bersudut Tegak",
        },
        "sec-leg-b-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai dua sisi tegak, yang dipanggil kaki, dan satu sisi terpanjang, yang dipanggil hipotenus. Kedua-dua kaki bertemu pada sudut tegak, dan hipotenus terletak bertentangan dengan sudut itu. Di sini segi tiga itu ialah ABC dengan sudut tegak di C: kaki a ialah AC, kaki b ialah BC, dan hipotenus c ialah AB.",
            },
            {
              "kind": "p",
              "text": "Kaki b ialah salah satu daripada dua sisi yang membentuk sudut tegak, jadi ia merupakan sisi sebenar segi tiga, bukan segmen yang dilukis di dalamnya. Unjuran q terletak rata di sepanjang hipotenus, manakala kaki b berjalan dari bucu B ke bucu sudut tegak C.",
            },
            {
              "kind": "p",
              "text": "Hipotenus sentiasa merupakan sisi terpanjang dalam segi tiga bersudut tegak yang tidak degenerat, kerana ia terletak bertentangan dengan sudut terbesar, iaitu sudut tegak. Itulah sebabnya formula memerlukan [[0 < b < c]] dan kalkulator mengharapkan hipotenus yang lebih panjang daripada kaki.",
            },
            {
              "kind": "p",
              "text": "Kedudukan kaki b menentukan segmen yang dipanggil q: kaki b menyentuh bucu B, jadi segmen yang bersebelahan B ialah q. Sentiasa semak label pada rajah anda sendiri sebelum memilih kaki yang hendak dimasukkan.",
            },
          ],
          "h2": "Memahami Kaki B dan Hipotenus",
          "table": {
            "headers": [
              "Simbol",
              "Maksud",
            ],
            "rows": [
              [
                "a",
                "Kaki tegak yang satu lagi",
              ],
              [
                "b",
                "Kaki yang berkaitan dengan q",
              ],
              [
                "c",
                "Hipotenus lengkap",
              ],
              [
                "p",
                "Unjuran yang berkaitan dengan a",
              ],
              [
                "q",
                "Unjuran yang berkaitan dengan b",
              ],
              [
                "h",
                "Altitud ke hipotenus",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap kesilapan di bawah diikuti pembetulannya. Kebanyakannya berpunca daripada pelabelan, bukan aritmetik.",
            },
            {
              "kind": "steps",
              "steps": [
                "Menggunakan kaki a dan bukan kaki b: memasukkan a memberikan p. Dengan a = 6 dan c = 10, keputusan 3.6 cm ialah p, bukan q.",
                "Lupa mengkuasa duakan kaki b: membahagikan b dengan c dan bukan b kuasa dua dengan c memberikan 0.8 cm dan bukan 6.4 cm.",
                "Membahagikan c dengan b kuasa dua dan bukan b kuasa dua dengan c: hasil bahagi mestilah [[b^2/c]], bukan [[c/b^2]]. Dengan b = 8 dan c = 10, susunan yang salah memberikan kira-kira 0.156, yang tidak mempunyai unit yang sah.",
                "Mengelirukan unjuran p dengan unjuran q: q terletak bersebelahan bucu B dan p bersebelahan bucu A. Label kedua-dua segmen sebelum mengira.",
                "Menganggap q sebagai kaki tegak sebenar: q ialah segmen hipotenus, bukan sisi BC. Dalam segi tiga 6-8-10, kaki b ialah 8 cm manakala q hanya 6.4 cm.",
                "Memasukkan nilai kaki yang lebih besar daripada atau sama dengan c: tiada segi tiga sedemikian wujud, kerana hipotenus ialah sisi terpanjang.",
                "Mencampurkan sentimeter dan meter: tukarkan dahulu, seperti dalam Contoh 7, di mana 1 m menjadi 100 cm.",
                "Lupa bahawa c mewakili hipotenus lengkap: menggunakan unjuran atau kaki sebagai penyebut akan memesongkan keputusan.",
                "Membundarkan pengiraan perantaraan terlalu awal: membundarkan kaki kuasa dua sebelum membahagi akan mengubah jawapan.",
                "Mengelirukan b dengan b kuasa dua: 64 dalam contoh 6-8-10 ialah panjang kuasa dua, manakala 6.4 cm ialah unjuran.",
                "Menggunakan formula pada segi tiga yang bukan bersudut tegak: teorem unjuran memerlukan altitud dari sudut tegak.",
                "Menganggap q sebagai keseluruhan hipotenus: q ditambah p sama dengan c, jadi keputusan c atau lebih menandakan ralat.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika jawapan kelihatan salah, berhenti dan label semula rajah sebelum mengira semula. Kebanyakan ralat di atas hilang sebaik sahaja p dan q ditandakan dengan jelas pada hipotenus.",
            },
          ],
          "h2": "Kesilapan Biasa Apabila Mengira Unjuran Q",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cuba keenam-enam soalan di atas kertas sebelum membaca jawapannya. Tiada satu pun nilai yang mengulangi contoh kerja.",
            },
            {
              "kind": "h3",
              "text": "Soalan 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai kaki [[b = 9]] cm dan hipotenus [[c = 15]] cm. Cari unjuran q.",
            },
            {
              "kind": "h3",
              "text": "Soalan 2: Nilai Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = 1.5]] m dan [[c = 2.5]] m, cari unjuran q.",
            },
            {
              "kind": "h3",
              "text": "Soalan 3: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diberi [[b = \\frac{5}{6}]] ft dan [[c = \\frac{5}{3}]] ft, cari q sebagai pecahan.",
            },
            {
              "kind": "h3",
              "text": "Soalan 4: Penukaran Unit",
            },
            {
              "kind": "p",
              "text": "Kaki berukuran [[b = 80]] cm dan hipotenus berukuran [[c = 2]] m. Cari q dalam sentimeter.",
            },
            {
              "kind": "h3",
              "text": "Soalan 5: Cari p Selepas Mengira q",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak mempunyai hipotenus [[c = 25]] cm dan kaki [[b = 15]] cm. Cari q, kemudian p.",
            },
            {
              "kind": "h3",
              "text": "Soalan 6: Berbilang Langkah dengan Unjuran q dan Altitud h",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 25]] cm dan [[b = 15]] cm, cari q, kemudian p, kemudian altitud h.",
            },
            {
              "kind": "h3",
              "text": "Jawapan Soalan Latihan",
            },
            {
              "kind": "p",
              "text": "Jawapan 1: [[q = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 2: [[q = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Jawapan 3: [[b^2 = \\frac{25}{36}]], jadi [[q = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Jawapan 4: Tukarkan 2 m kepada 200 cm, kemudian [[q = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 5: [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, kemudian [[p = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 6: [[q = 9]] cm dan [[p = 16]] cm, jadi [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Soalan Latihan Berserta Jawapan",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti ini bersandarkan segi tiga serupa. Melukis altitud CD membahagikan segi tiga ABC kepada dua segi tiga bersudut tegak yang lebih kecil, ACD dan CBD, dan kedua-duanya adalah serupa dengan segi tiga asal. Salah satu nisbah sisinya memberikan teorem unjuran secara langsung.",
            },
            {
              "kind": "p",
              "text": "Tumpukan pada segi tiga CBD dan keseluruhan segi tiga ABC. Kedua-duanya mengandungi sudut di B, dan kedua-duanya mengandungi sudut tegak, jadi sudut ketiga masing-masing juga mesti sepadan. Memadankan sisi yang terletak pada kedudukan yang sama memberikan kadaran:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang gantikan dengan simbol piawai: [[DB = q]], [[BC = b]], dan [[AB = c]]. Kadaran itu menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Pendaraban silang menghapuskan pecahan. Pengangka kiri didarab penyebut kanan sama dengan pengangka kanan didarab penyebut kiri, jadi [[q \\times c = b \\times b]], iaitu:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Membahagikan kedua-dua belah dengan c melengkapkan bukti, memberikan [[q = \\frac{b^2}{c}]]. Hujah yang sama digunakan pada segi tiga kecil yang satu lagi, ACD, memberikan [[a^2 = c \\times p]].",
            },
          ],
          "h2": "Mengapakah Formula Unjuran Q Berfungsi?",
          "image": {
            "alt": "Segi tiga bersudut tegak asal ABC di samping segi tiga serupa yang lebih kecil ACD dan CBD, menunjukkan kadaran q per b sama dengan b per c",
            "caption": "Bukti segi tiga serupa: q per b sama dengan b per c, jadi pendaraban silang memberikan b kuasa dua sama dengan c darab q.",
            "src": "projection-q-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sembilan sifat berikut terbit secara langsung daripada [[q = \\frac{b^2}{c}]]. Setiap satunya juga berfungsi sebagai semakan kewajaran untuk jawapan baharu.",
            },
            {
              "items": [
                "Unjuran q sentiasa lebih pendek daripada hipotenus lengkap dalam segi tiga yang tidak degenerat, kerana q hanyalah sebahagian daripada c.",
                "Menambah kaki b sambil mengekalkan c akan menambah q, kerana kaki kuasa dua dalam pengangka bertambah.",
                "Menambah c sambil mengekalkan b akan mengurangkan q, kerana penyebut bertambah.",
                "Jika b dan c kedua-duanya didarab dengan faktor positif yang sama, q berskala mengikut faktor itu.",
                "Jika p sama dengan q, kedua-dua kaki tegak adalah sama, dan segi tiga itu ialah segi tiga bersudut tegak sama kaki.",
                "Unjuran q sentiasa positif dalam segi tiga sah yang tidak degenerat. Nilai sifar atau negatif tidak menghuraikan sebarang segi tiga sebenar.",
                "Unjuran q ialah panjang, bukan luas. Kaki kuasa dua hanyalah langkah perantaraan, dan pembahagian dengan c mengembalikan unit panjang biasa.",
                "Unjuran q dikaitkan secara khusus dengan kaki b. Menggunakannya dengan kaki a menjawab soalan yang berbeza sama sekali.",
                "Menukar p dengan q mengubah kaki yang dikaitkan dengan setiap unjuran, jadi label mesti kekal sepadan dengan bucunya.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Apabila altitud jatuh pada titik tengah hipotenus, kedua-dua kaki mestilah sepadan, seperti yang ditunjukkan oleh rajah di bawah.",
            },
          ],
          "h2": "Sifat Penting Unjuran Q",
          "image": {
            "alt": "Dua segi tiga bersudut tegak bersebelahan, satu dengan unjuran p dan q yang sama iaitu 5 dan satu lagi dengan unjuran p sama dengan 3.6 dan q sama dengan 6.4 yang tidak sama",
            "caption": "Unjuran sama (p = q = 5) memberikan kaki yang sama, manakala unjuran tidak sama (p = 3.6, q = 6.4) memberikan kaki yang tidak sama.",
            "src": "projection-q-equal-vs-unequal.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sesetengah masalah meminta unjuran yang satu lagi. Formula yang sepadan ialah cerminan formula untuk q, dengan kaki a menggantikan kaki b:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 6]] cm dan [[c = 10]] cm. Kemudian [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Ini sepadan dengan unjuran lain bagi segi tiga 6-8-10 daripada contoh-contoh sebelum ini, di mana q ialah 6.4 cm dan kedua-dua unjuran berjumlah 10 cm.",
            },
            {
              "kind": "p",
              "text": "Formula ini menggunakan a dan bukan b kerana setiap kaki berpasangan dengan unjuran yang bersebelahan bucunya sendiri. Kaki a menyentuh bucu A, dan p ialah segmen yang bersebelahan A. Memasukkan b dalam formula ini akan memberikan q, bukan p. Kalkulator pada halaman ini hanya menerima b dan c, jadi gunakan <a href=\"/right-triangle-projection-p-calculator/\">kalkulator unjuran p</a> apabila anda perlu mencari p daripada a dan c.",
            },
          ],
          "h2": "Cara Mengira Unjuran P daripada Kaki yang Satu Lagi",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem unjuran dan teorem Pythagoras bersetuju dengan tepat, dan algebra menunjukkan sebabnya. Mulakan daripada dua formula unjuran, [[a^2 = c \\times p]] dan [[b^2 = c \\times q]], dan tambahkannya:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Memfaktorkan c daripada belah kanan memberikan [[a^2 + b^2 = c(p + q)]]. Oleh sebab [[p + q = c]], penggantian menghasilkan keputusan yang biasa:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Semakan berangka dengan segi tiga 6-8-10 mengesahkannya: [[a^2 + b^2 = 36 + 64 = 100]] dan [[c^2 = 10^2 = 100]]. Teorem unjuran membahagikan hubungan Pythagoras kepada satu bahagian bagi setiap kaki, dan menambah bahagian-bahagian itu membina semula hubungan tersebut.",
            },
            {
              "kind": "p",
              "text": "Pembahagian itulah yang menjadikan formula unjuran berguna: teorem Pythagoras sahaja tidak dapat mencari unjuran daripada kaki dan hipotenus, kerana ia membincangkan kaki secara bersama.",
            },
          ],
          "h2": "Hubungan antara Unjuran Q dengan Teorem Pythagoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Unjuran q juga berhubung dengan altitud melalui hubungan min geometri yang kedua. Altitud h ialah min geometri bagi kedua-dua unjuran:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Oleh sebab [[p = c - q]], altitud juga boleh ditulis dengan hanya menggunakan q dan c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{q(c - q)}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[q = 6.4]] cm dan [[c = 10]] cm. Cari p dahulu: [[p = 10 - 6.4 = 3.6]] cm. Kemudian [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Altitud lebih pendek daripada mana-mana kaki, seperti yang sepatutnya.",
            },
            {
              "kind": "p",
              "text": "Unjuran q sahaja tidak menentukan altitud: dua segi tiga berbeza boleh berkongsi q yang sama dengan hipotenus yang berbeza. Hipotenus lengkap, atau unjuran yang satu lagi, sentiasa diperlukan juga. <a href=\"/right-triangle-altitude-from-projections-calculator/\">Kalkulator altitud daripada unjuran</a> mengendalikan pengiraan itu apabila kedua-dua unjuran diketahui.",
            },
          ],
          "h2": "Hubungan antara Unjuran Q dengan Altitud",
        },
        "sec-relationship-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Formula unjuran boleh disusun semula untuk mencari kaki b dan bukan q. Bermula daripada [[b^2 = c \\times q]], ambil punca kuasa dua positif bagi kedua-dua belah:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Semak dengan nombor yang biasa: [[b = 8]] cm, [[c = 10]] cm, dan [[q = 6.4]] cm. Hasil darab di dalam punca ialah [[c \\times q = 10 \\times 6.4 = 64]], dan [[\\sqrt{64} = 8]] cm, iaitu kaki yang kita mulakan.",
            },
            {
              "kind": "p",
              "text": "Hubungan ini ialah hubungan min geometri: kaki b ialah min geometri bagi hipotenus dan unjurannya. Itulah sebabnya kaki muncul kuasa dua dalam teorem dan sebabnya punca kuasa dua muncul apabila menyelesaikan untuk kaki. Bagi masalah yang bermula daripada q dan c, <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator kaki b daripada unjuran</a> menjalankan formula susunan semula ini secara langsung.",
            },
          ],
          "h2": "Hubungan antara Unjuran Q dengan Kaki B",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua-dua unjuran ialah dua bahagian bagi satu sisi lurus, jadi kedua-duanya berjumlah hipotenus penuh:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Menyusun semula memberikan [[p = c - q]]. Dengan [[c = 10]] cm dan [[q = 6.4]] cm, penolakannya ialah [[p = 10 - 6.4 = 3.6]] cm. Penolakan yang sama berfungsi sebaliknya: [[q = c - p]]. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Kalkulator hipotenus daripada unjuran</a> membina semula c daripada p dan q apabila hipotenus itu sendiri tidak diketahui.",
            },
            {
              "kind": "p",
              "text": "Membandingkan p dan q memberitahu anda tentang bentuk segi tiga. Apabila q sama dengan p, altitud jatuh pada titik tengah hipotenus dan kedua-dua kaki adalah sama, jadi segi tiga itu adalah sama kaki. Apabila q lebih besar daripada p, kaki b lebih panjang daripada kaki a, dan apabila p lebih besar, kaki a lebih panjang. Unjuran yang lebih panjang sentiasa dimiliki oleh kaki yang lebih panjang.",
            },
            {
              "kind": "p",
              "text": "Dalam segi tiga 6-8-10, q ialah 6.4 cm dan p ialah 3.6 cm, jadi q lebih besar, dan kaki b pada 8 cm memang lebih panjang daripada kaki a pada 6 cm.",
            },
          ],
          "h2": "Hubungan antara Unjuran P dengan Unjuran Q",
          "image": {
            "alt": "Segi tiga bersudut tegak yang membandingkan unjuran q yang berpasangan dengan kaki b dengan unjuran p yang berpasangan dengan kaki a, dengan c sama dengan 10, q sama dengan 6.4, dan p sama dengan 3.6",
            "caption": "q menggunakan b (64 dibahagi 10 = 6.4) dan p menggunakan a (36 dibahagi 10 = 3.6).",
            "src": "projection-q-vs-p.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[b = 8]] cm dan [[c = 10]] cm. Empat langkah di bawah menunjukkan kerja penuh, tanpa apa-apa yang dilangkau.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis formula: [[q = \\frac{b^2}{c}]].",
                "Gantikan nilai: [[q = \\frac{8^2}{10}]].",
                "Kuasa duakan kaki: [[q = \\frac{64}{10}]].",
                "Bahagikan: [[q = 6.4]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawapan 6.4 cm ialah segmen hipotenus yang bersebelahan kaki b, bukan sisi tegak dan bukan luas. Semakan pendek menutup gelung: [[b^2 = 8^2 = 64]] dan [[c \\times q = 10 \\times 6.4 = 64]], jadi kedua-dua belah teorem bersetuju.",
            },
            {
              "kind": "p",
              "text": "Sebagai rujukan, unjuran lain ialah [[p = 10 - 6.4 = 3.6]] cm, kaki a ialah [[a = \\sqrt{10 \\times 3.6} = 6]] cm, dan altitud ialah [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, mengesahkan segi tiga bersudut tegak 6-8-10 yang biasa.",
            },
          ],
          "h2": "Contoh Langkah demi Langkah Mencari Unjuran Q",
          "image": {
            "alt": "Segi tiga bersudut tegak dengan kaki b 8 cm dan hipotenus 10 cm, dikira untuk memberikan unjuran q sama dengan 6.4 cm",
            "caption": "Contoh kerja: b = 8 cm dan c = 10 cm memberikan q = 64 dibahagi 10 = 6.4 cm.",
            "src": "projection-q-example-b8-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Empat semakan bebas menangkap hampir setiap ralat. Jalankan sekurang-kurangnya satu pada setiap jawapan, dan keempat-empatnya apabila masalah itu penting. Contoh di bawah menggunakan [[b = 8]] cm, [[c = 10]] cm, dan [[q = 6.4]] cm sepanjang pengiraan.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 1: Semakan Teorem Unjuran",
            },
            {
              "kind": "p",
              "text": "Sahkan [[q = \\frac{b^2}{c}]] secara langsung. Di sini [[\\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm, yang sepadan dengan jawapan. Jika pengiraan semula berbeza, sama ada pengkuasa duaan atau pembahagian telah silap.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 2: Penambahan Segmen",
            },
            {
              "kind": "p",
              "text": "Cari p melalui penolakan: [[p = 10 - 6.4 = 3.6]] cm. Kemudian semak [[p + q = 3.6 + 6.4 = 10]] cm, yang sama dengan c. Jumlah yang tidak sama dengan c menunjukkan kesilapan penolakan.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 3: Semakan Teorem Pythagoras",
            },
            {
              "kind": "p",
              "text": "Kira kaki a daripada p: [[a = \\sqrt{10 \\times 3.6} = 6]] cm. Kemudian semak [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Semakan ini menguji seluruh segi tiga, jadi ia menangkap ralat pelabelan yang mungkin terlepas oleh semakan pertama. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Kalkulator kaki a daripada unjuran</a> menjalankan langkah a secara langsung.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 4: Kewajaran Geometri",
            },
            {
              "kind": "p",
              "text": "Pastikan q adalah positif, lebih kecil daripada c, dalam unit yang betul, dan merupakan segmen hipotenus dan bukan sisi tegak. Di sini 6.4 cm adalah positif, lebih kecil daripada 10 cm, dalam sentimeter, dan lebih pendek daripada kaki b pada 8 cm.",
            },
          ],
          "h2": "Cara Mengesahkan Pengiraan Unjuran Q Anda",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Lukis altitud dari bucu sudut tegak C secara tegak lurus ke hipotenus AB. Ia bertemu hipotenus pada titik yang dipanggil tapak, dilabelkan D, dan membahagikannya kepada dua segmen bersebelahan: AD ialah unjuran p, dan DB ialah unjuran q.",
            },
            {
              "kind": "p",
              "text": "Unjuran q dimiliki oleh kaki b kerana ia terletak bersebelahan bucu B, bucu yang sama di mana kaki b bermula. Dalam segi tiga kecil CBD, kaki b ialah hipotenus dan q ialah salah satu kakinya, dan inilah kaitan geometri yang menjadikan teorem unjuran berfungsi. Unjuran p, dengan alasan yang sama, dimiliki oleh kaki a, yang menyentuh bucu A.",
            },
            {
              "kind": "p",
              "text": "Unjuran ialah panjang di sepanjang hipotenus, diukur dalam unit yang sama seperti sisi yang lain. Ia tidak berserenjang dengan apa-apa, dan ia bukan sisi segi tiga asal. <a href=\"/right-triangle-projection-calculator/\">Kalkulator unjuran segi tiga bersudut tegak</a> mencari kedua-dua unjuran apabila kaki dan hipotenus diketahui.",
            },
            {
              "kind": "p",
              "text": "Oleh sebab p dan q ialah dua bahagian bagi satu sisi lurus, kedua-duanya berjumlah hipotenus penuh:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Dengan [[c = 10]] cm dan [[q = 6.4]] cm, unjuran yang satu lagi ialah [[p = 10 - 6.4 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Unjuran q tidak sama dengan kaki b. Kaki b ialah sisi BC, salah satu sisi yang membentuk sudut tegak, manakala q ialah segmen DB di sepanjang hipotenus. Dalam segi tiga 6-8-10, kaki b ialah 8 cm dan unjuran q hanya 6.4 cm.",
            },
          ],
          "h2": "Apakah Unjuran Q dalam Segi Tiga Bersudut Tegak?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kuasa dua itu ada kerana teorem unjuran ialah pernyataan tentang kaki kuasa dua: ia menyatakan bahawa kuasa dua kaki b sama dengan hasil darab c dengan q, [[b^2 = c \\times q]], dan formula untuk q ialah apa yang anda peroleh dengan membahagikan kedua-dua belah dengan c.",
            },
            {
              "kind": "p",
              "text": "Sebabnya berpunca daripada segi tiga serupa. Dalam segi tiga CBD, kaki b memainkan peranan hipotenus, manakala q ialah salah satu kakinya. Membandingkan segi tiga kecil dengan keseluruhan segi tiga memberikan kadaran [[\\frac{q}{b} = \\frac{b}{c}]], dan kaki b muncul dua kali, sekali dalam setiap nisbah. Pendaraban silang meletakkan b pada kedua-dua belah, dan inilah tepatnya sebab kuasa dua itu muncul.",
            },
            {
              "kind": "p",
              "text": "Hubungan min geometri menyatakan perkara yang sama dengan kata yang berbeza: kaki b ialah min geometri bagi hipotenus c dan unjurannya q, bermaksud [[b = \\sqrt{c \\times q}]]. Mengkuasa duakan kedua-dua belah memberikan [[b^2 = c \\times q]], dan membahagi dengan c akan mengasingkan q.",
            },
            {
              "kind": "p",
              "text": "Pembahagian ialah langkah yang mengasingkan q. Pendaraban dalam teorem mengikat q kepada c, dan pembahagian dengan c membatalkan ikatan itu. Tanpa kuasa dua, formula akan mencampurkan panjang dengan luas, dan unitnya tidak akan menjadi betul.",
            },
          ],
          "h2": "Mengapakah Kaki B Dikuasa Duakan dalam Formula Unjuran?",
        },
      },
      "tocHeading": "Kandungan Panduan",
      "tocItems": {
        "sec-applications": "Aplikasi Praktikal Pengiraan Unjuran Segi Tiga Bersudut Tegak",
        "sec-calculate": "Kira Unjuran Q Segi Tiga Bersudut Tegak",
        "sec-diagram": "Rajah Unjuran Q Segi Tiga Bersudut Tegak Diterangkan",
        "sec-examples": "Contoh Kerja Mengira Unjuran Q",
        "sec-faq": "Soalan Lazim",
        "sec-formula": "Formula Unjuran Q Segi Tiga Bersudut Tegak",
        "sec-how-to-use": "Cara Menggunakan Kalkulator Unjuran Q Segi Tiga Bersudut Tegak",
        "sec-intro": "Kalkulator Unjuran Q Segi Tiga Bersudut Tegak",
        "sec-leg-b-hypotenuse": "Memahami Kaki B dan Hipotenus",
        "sec-mistakes": "Kesilapan Biasa Apabila Mengira Unjuran Q",
        "sec-practice": "Soalan Latihan Berserta Jawapan",
        "sec-projection-p": "Cara Mengira Unjuran P daripada Kaki yang Satu Lagi",
        "sec-proof": "Mengapakah Formula Unjuran Q Berfungsi?",
        "sec-properties": "Sifat Penting Unjuran Q",
        "sec-pythagoras": "Hubungan antara Unjuran Q dengan Teorem Pythagoras",
        "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
        "sec-relationship-altitude": "Hubungan antara Unjuran Q dengan Altitud",
        "sec-relationship-leg-b": "Hubungan antara Unjuran Q dengan Kaki B",
        "sec-relationship-pq": "Hubungan antara Unjuran P dengan Unjuran Q",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Unjuran Q",
        "sec-verify": "Cara Mengesahkan Pengiraan Unjuran Q Anda",
        "sec-what-projection-q": "Apakah Unjuran Q dalam Segi Tiga Bersudut Tegak?",
        "sec-why-squared": "Mengapakah Kaki B Dikuasa Duakan dalam Formula Unjuran?",
      },
    },
};
