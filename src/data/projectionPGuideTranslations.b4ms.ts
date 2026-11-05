// projectionPGuideTranslations.bms.ts: Right Triangle Projection P
// Guide (Page 34 of 45) translation.
export const PROJP_B4_MS = {
  "ms": {
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "answer": "Formulanya ialah [[p = \\frac{a^2}{c}]], dengan a ialah sisi yang berkaitan dengan p dan c ialah hipotenus penuh. Kuasa duakan sisi a dahulu, kemudian bahagikan dengan c. Sebagai contoh, [[a = 6]] cm dan [[c = 10]] cm memberikan [[p = 3.6]] cm.",
          "question": "Apakah formula untuk unjuran p?",
        },
        {
          "answer": "Unjuran p ialah segmen hipotenus yang bersebelahan dengan bucu A, yang terbentuk apabila altitud dari sudut tegak bertemu dengan hipotenus di titik D. Dalam segi tiga ABC, [[p = AD]], iaitu bahagian hipotenus yang berkaitan dengan sisi a.",
          "question": "Apakah yang diwakili oleh unjuran p?",
        },
        {
          "answer": "Kuasa dua itu datang daripada segi tiga serupa: segi tiga ACD serupa dengan segi tiga ABC, yang memberikan [[\\frac{p}{a} = \\frac{a}{c}]], dan sisi a muncul dalam kedua-dua nisbah. Pendaraban silang memberikan [[a^2 = c \\times p]], jadi kuasa dua itu memang terbina dalam geometri.",
          "question": "Mengapakah sisi a dikuasakan dua?",
        },
        {
          "answer": "Pembahagian mengasingkan p. Teorem unjuran menyatakan [[a^2 = c \\times p]], dengan p didarab dengan c, jadi membahagikan kedua-dua belah dengan c akan meninggalkan p sahaja. Pembahagian juga menukar panjang kuasa dua menjadi panjang biasa.",
          "question": "Mengapakah kita membahagi dengan hipotenus?",
        },
        {
          "answer": "Tidak. Sisi a ialah sisi AC, salah satu sisi yang membentuk sudut tegak, manakala unjuran p ialah segmen AD di sepanjang hipotenus. Dalam segi tiga 6-8-10, sisi a ialah 6 cm dan unjuran p hanya 3.6 cm.",
          "question": "Adakah unjuran p sama dengan sisi a?",
        },
        {
          "answer": "Tidak. Unjuran p hanya sebahagian daripada hipotenus, jadi ia mesti lebih kecil daripada c. Jika p sama dengan c, q akan menjadi sifar dan segi tiga itu akan menjadi merosot. Hasil yang lebih besar daripada c sentiasa menandakan kesilapan input atau pelabelan.",
          "question": "Bolehkah unjuran p lebih besar daripada hipotenus?",
        },
        {
          "answer": "Unjuran p terletak bersebelahan dengan bucu A dan berpasangan dengan sisi a, manakala unjuran q terletak bersebelahan dengan bucu B dan berpasangan dengan sisi b. Kedua-duanya ialah segmen yang dihasilkan oleh altitud pada hipotenus: [[p + q = c]].",
          "question": "Apakah perbezaan antara unjuran p dan q?",
        },
        {
          "answer": "Tidak. Sisi a hanya berpasangan dengan unjuran p. Untuk mencari q, anda memerlukan sisi b, menggunakan [[q = \\frac{b^2}{c}]], atau menolak: [[q = c - p]] setelah p diketahui. <a href=\"/right-triangle-projection-q-calculator/\">kalkulator unjuran q</a> mencari q daripada b dan c.",
          "question": "Bolehkah saya mengira unjuran q menggunakan sisi a?",
        },
        {
          "answer": "Anda juga memerlukan q atau c. Cari q dengan [[q = c - p]], kemudian gunakan [[h = \\sqrt{p \\times q}]]. Dengan [[p = 3.6]] cm dan [[c = 10]] cm, [[q = 6.4]] cm dan [[h = 4.8]] cm. Unjuran p sahaja tidak dapat menentukan altitud.",
          "question": "Bagaimanakah saya mencari altitud apabila unjuran p diketahui?",
        },
        {
          "answer": "Kira semula [[p = \\frac{a^2}{c}]], kemudian semak [[p + q = c]] setelah mencari q melalui penolakan, dan pastikan p positif dan lebih kecil daripada c. Anda juga boleh mencari sisi b daripada q dan menyemak [[a^2 + b^2 = c^2]].",
          "question": "Bagaimanakah saya boleh mengesahkan unjuran p?",
        },
        {
          "answer": "Altitud jatuh di titik tengah hipotenus, dan kedua-dua sisi adalah sama, jadi segi tiga itu adalah sama kaki. Dengan [[c = 10]] cm dan [[p = q = 5]] cm, kedua-dua sisi sama dengan [[\\sqrt{50}]] cm, kira-kira 7.071 cm.",
          "question": "Apakah yang berlaku apabila p dan q sama?",
        },
        {
          "answer": "Hipotenus terletak bertentangan dengan sudut tegak, sudut terbesar dalam segi tiga, dan sisi yang bertentangan dengan sudut terbesar sentiasa merupakan sisi terpanjang. Jika a sama dengan atau melebihi c, tiada segi tiga bersudut tegak seperti itu boleh wujud.",
          "question": "Mengapakah hipotenus mesti lebih panjang daripada sisi a?",
        },
      ],
      "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "relatedIntro": "Setiap kalkulator di bawah mengendalikan satu tugas segi tiga bersudut tegak yang khusus, jadi pilih alat yang sepadan dengan ukuran yang sudah anda ketahui.",
      "relatedItems": [
        "Kalkulator Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Unjuran Q Segi Tiga Bersudut Tegak",
        "Kalkulator Sisi A daripada Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Sisi B daripada Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Hipotenus daripada Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Altitud daripada Unjuran Segi Tiga Bersudut Tegak",
        "Kalkulator Sisi Segi Tiga Bersudut Tegak",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kegunaan paling langsung ialah kerja rumah geometri dan kerja bilik darjah, dengan masalah unjuran menguji sama ada pelajar dapat melabel gambar rajah dan menggunakan [[p = \\frac{a^2}{c}]] dan bukannya terus menggunakan teorem Pythagoras kerana kebiasaan. Latihan segi tiga serupa menggunakan persediaan yang sama, kerana buktinya sendiri ialah latihan memadankan sisi yang sepadan.",
            },
            {
              "kind": "p",
              "text": "Lukisan teknikal menggunakan teorem ini apabila segi tiga bersudut tegak mesti dibina semula daripada ukuran separa: jika lukisan memberikan hipotenus dan tapak altitud, unjuran yang hilang boleh diperoleh tanpa mengukur semula bentuk itu. Guru juga menggunakan persediaan ini sebagai pelajaran penghubung antara penambahan segmen dan keserupaan.",
            },
            {
              "kind": "p",
              "text": "Satu syarat menghadkan setiap aplikasi: geometri segi tiga bersudut tegak yang diperlukan mesti benar-benar wujud. Teorem ini menerangkan hubungan geometri yang tepat, bukan ukuran lapangan yang anggaran, jadi ia tidak pernah menggantikan ukur tanah yang teliti atau ukuran kejuruteraan profesional.",
            },
          ],
          "h2": "Aplikasi Praktikal Pengiraan Unjuran Segi Tiga Bersudut Tegak",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mempunyai dua medan input. Medan pertama menerima sisi a, iaitu sisi tegak yang berkaitan dengan unjuran p. Medan kedua menerima hipotenus c, iaitu sisi penuh yang bertentangan dengan sudut tegak. Kedua-dua panjang mesti menggunakan unit yang sama, jadi tukarkan dahulu jika satu ukuran dalam sentimeter dan satu lagi dalam meter.",
            },
            {
              "kind": "p",
              "text": "Hipotenus mesti lebih panjang daripada sisi a, kerana sisi ialah satu sisi sudut tegak manakala hipotenus merentasi keseluruhan segi tiga. Jika nilai a anda lebih besar daripada c, anda mungkin telah memasukkan unjuran, altitud, atau sisi yang salah.",
            },
            {
              "kind": "p",
              "text": "Klik Kira Unjuran p untuk melihat hasilnya, dan gunakan Tetapkan Semula untuk mengosongkan kedua-dua medan sebelum masalah baharu. Hasilnya ialah panjang dalam unit yang anda masukkan, jadi sisi 6 cm dan hipotenus 10 cm memberikan 3.6 cm. Hasilnya ialah panjang segmen di sepanjang hipotenus.",
            },
          ],
          "h2": "Kira Unjuran P Segi Tiga Bersudut Tegak",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gambar rajah utama menunjukkan segi tiga ABC dengan sudut tegak di C. Sisi AC ialah sisi a, sisi BC ialah sisi b, dan sisi AB ialah hipotenus c. Altitud CD turun dari C secara tegak ke AB dan menyentuhnya di D.",
            },
            {
              "kind": "p",
              "text": "Titik D membahagikan hipotenus kepada dua bahagian: segmen AD ialah unjuran p dan segmen DB ialah unjuran q. Sisi a dan unjuran p ditonjolkan kerana kedua-duanya ialah pasangan yang dibincangkan di halaman ini. Ikuti label mengikut urutan ini: bermula di A, susuri sisi a ke C, kemudian sepanjang sisi b ke B, kemudian kembali sepanjang hipotenus dari B ke A, sambil berhenti di D untuk melihat pembahagian kepada p dan q.",
            },
            {
              "kind": "p",
              "text": "Pasangan a dengan p menjadi jelas dalam segi tiga kecil ACD, dengan sisi a sebagai hipotenus dan p sebagai sisi yang terletak di sepanjang hipotenus besar. Oleh kerana segi tiga ACD serupa dengan segi tiga ABC, nisbah p kepada a dalam segi tiga kecil sama dengan nisbah a kepada c dalam segi tiga besar.",
            },
          ],
          "h2": "Gambar Rajah Unjuran P Segi Tiga Bersudut Tegak Diterangkan",
          "image": {
            "alt": "Segi tiga bersudut tegak ABC dengan sudut tegak di C, altitud CD ke hipotenus AB, sisi a dan unjuran p ditonjolkan, dengan sisi a dan b, hipotenus c, unjuran p dan q, serta altitud h dilabelkan",
            "caption": "Altitud CD membahagikan hipotenus AB kepada unjuran p (AD) dan unjuran q (DB), dengan sisi a (AC) ditonjolkan.",
            "src": "projection-p-main-triangle.svg",
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
              "text": "Diberi [[a = 6]] cm dan [[c = 10]] cm, formula memberikan [[p = \\frac{6^2}{10} = \\frac{36}{10}]], jadi [[p = 3.6]] cm. Sisi kuasa dua 36 ialah nilai perantaraan, dan membahagikannya dengan hipotenus menukarkannya kembali menjadi panjang. Sisi yang satu lagi bagi segi tiga ini ialah 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Pembahagian Kuasa Dua Sempurna",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 8]] cm dan [[c = 16]] cm, [[p = \\frac{8^2}{16} = \\frac{64}{16} = 4]] cm. Sisi kuasa dua itu membahagi dengan sekata, jadi jawapannya tepat. Unjuran yang satu lagi di sini ialah 12 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Hasil Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 7]] cm dan [[c = 14]] cm, [[p = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Hasil perpuluhan adalah biasa: unjuran tidak semestinya nombor bulat walaupun kedua-dua input adalah nombor bulat. Unjuran yang satu lagi ialah 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Ukuran yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 12]] m dan [[c = 20]] m, [[p = \\frac{12^2}{20} = \\frac{144}{20} = 7.2]] m. Nombor yang lebih besar tidak mengubah apa-apa tentang kaedahnya: kuasa duakan, kemudian bahagi. Unjuran yang satu lagi ialah 12.8 m, yang berpasangan dengan sisi 16 m.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran Kecil",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 30]] mm dan [[c = 50]] mm, [[p = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Ukuran kecil berfungsi dengan cara yang sama, dan mengekalkan unit dalam milimeter sepanjang masa mengelakkan sebarang penukaran. Unjuran yang satu lagi ialah 32 mm, yang berpasangan dengan sisi 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = \\frac{3}{4}]] kaki dan [[c = \\frac{3}{2}]] kaki, kuasa duakan sisi dahulu: [[a^2 = \\frac{9}{16}]] kaki persegi. Kemudian [[p = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] kaki. Membahagi dengan pecahan bermaksud mendarab dengan songsangannya, dan inilah langkah yang paling kerap pelajar terlepas dengan ukuran pecahan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Unit Berbeza",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 60]] cm dan [[c = 1]] m, tukarkan dahulu: 1 m bersamaan dengan 100 cm. Kemudian [[p = \\frac{60^2}{100} = \\frac{3600}{100} = 36]] cm. Menggunakan 1 dan bukannya 100 akan memberikan 3600 cm, unjuran yang jauh lebih panjang daripada hipotenus.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Nilai Perpuluhan yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 4.5]] m dan [[c = 7.5]] m, [[p = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Input perpuluhan memerlukan ketelitian yang sama seperti nombor bulat: kuasa duakan perpuluhan penuh, kemudian bahagi. Unjuran yang satu lagi ialah 4.8 m, yang berpasangan dengan sisi 6 m.",
            },
          ],
          "h2": "Contoh Kerja Mengira Unjuran P",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem unjuran menyatakan bahawa kuasa dua sisi a sama dengan hipotenus didarab dengan unjurannya:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Membahagikan kedua-dua belah dengan c mengasingkan p dan memberikan formula kerja untuk halaman ini:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Pengiraan ini berjalan dalam dua peringkat. Peringkat 1 mengkuasakan dua sisi a, iaitu mendarabnya dengan dirinya sendiri. Peringkat 2 membahagikan panjang kuasa dua itu dengan hipotenus penuh c, dan hasilnya ialah panjang biasa, bukan panjang kuasa dua.",
            },
            {
              "kind": "p",
              "text": "Unit memerlukan perhatian pada kedua-dua peringkat. Jika a dan c kedua-duanya dalam sentimeter, maka [[a^2]] adalah dalam sentimeter persegi, dan membahagikannya dengan sentimeter akan mengembalikan sentimeter. Mencampurkan unit, seperti meter untuk a dan sentimeter untuk c, memberikan hasil bahagi yang tidak bermakna, jadi tukarkan kepada satu unit sebelum mengira.",
            },
            {
              "kind": "p",
              "text": "Dengan [[a = 6]] cm dan [[c = 10]] cm, peringkat 1 memberikan [[6^2 = 36]], dan peringkat 2 memberikan [[p = \\frac{36}{10} = 3.6]] cm. Nombor 36 itu sendiri tidak menjawab sebarang soalan: hanya selepas pembahagian barulah ia menjadi panjang unjuran.",
            },
          ],
          "h2": "Formula Unjuran P Segi Tiga Bersudut Tegak",
          "image": {
            "alt": "Segi tiga bersudut tegak ABC dengan altitud CD, menunjukkan unjuran p sama dengan sisi a kuasa dua dibahagi dengan hipotenus c",
            "caption": "Formula unjuran: p sama dengan a kuasa dua dibahagi dengan c, dengan tapak altitud D membahagikan hipotenus.",
            "src": "projection-p-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sebelas langkah ringkas membawa anda dari gambar rajah berlabel ke jawapan yang telah disemak.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenal pasti segi tiga bersudut tegak dalam masalah anda dan pastikan ia mempunyai sudut tegak.",
                "Cari bucu sudut tegak dan altitud daripadanya ke hipotenus.",
                "Kenal pasti sisi tegak yang berkaitan dengan unjuran p, iaitu sisi yang menyentuh bucu A.",
                "Kenal pasti hipotenus penuh c, iaitu sisi yang bertentangan dengan sudut tegak.",
                "Pastikan c lebih besar daripada a. Jika tidak, labelkan semula gambar rajah sebelum meneruskan.",
                "Pilih unit yang serasi dan tukarkan jika ukuran menggunakan unit yang berbeza.",
                "Masukkan sisi a dalam medan Sisi a.",
                "Masukkan hipotenus c dalam medan Hipotenus c.",
                "Klik Kira Unjuran p dan baca hasilnya.",
                "Semak hasilnya: p mesti positif dan lebih kecil daripada c.",
                "Gunakan Tetapkan Semula apabila memulakan pengiraan baharu.",
              ],
            },
            {
              "kind": "p",
              "text": "Memasukkan sisi b dan bukannya sisi a menghasilkan unjuran yang berbeza. Sisi b berpasangan dengan q, jadi kalkulator akan mengembalikan segmen yang bersebelahan dengan bucu B, bukan yang bersebelahan dengan A. Semakan label dalam langkah 3 paling penting.",
            },
          ],
          "h2": "Cara Menggunakan Kalkulator Unjuran P Segi Tiga Bersudut Tegak",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ini mencari unjuran p bagi sebuah segi tiga bersudut tegak apabila anda mengetahui sisi a dan hipotenus penuh c. Unjuran p ialah segmen hipotenus yang terletak bersebelahan dengan sisi a, yang terbentuk apabila altitud dari sudut tegak bertemu dengan hipotenus. Formulanya ialah [[p = \\frac{a^2}{c}]], dengan a ialah sisi tegak dan c ialah hipotenus penuh.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, dengan [[a = 6]] cm dan [[c = 10]] cm, pengiraannya ialah [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Nilai 3.6 cm ialah bahagian hipotenus yang berkaitan dengan sisi a, bukan sisi itu sendiri dan bukan keseluruhan hipotenus.",
            },
            {
              "kind": "p",
              "text": "Kalkulator ini terletak di bahagian atas halaman ini, diikuti oleh formula, gambar rajah berlabel, bukti, contoh kerja, dan semakan yang boleh anda jalankan ke atas sebarang jawapan.",
            },
          ],
          "h2": "Kalkulator Unjuran P Segi Tiga Bersudut Tegak",
        },
        "sec-leg-a-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sebuah segi tiga bersudut tegak mempunyai dua sisi berserenjang, yang dipanggil sisi, dan satu sisi terpanjang, yang dipanggil hipotenus. Kedua-dua sisi bertemu di sudut tegak, dan hipotenus terletak bertentangan dengan sudut itu. Di sini segi tiganya ialah ABC dengan sudut tegak di C: sisi a ialah AC, sisi b ialah BC, dan hipotenus c ialah AB.",
            },
            {
              "kind": "p",
              "text": "Sisi a ialah salah satu daripada dua sisi yang membentuk sudut tegak, jadi ia merupakan sisi sebenar segi tiga itu, bukan segmen yang dilukis di dalamnya. Unjuran p terletak rata di sepanjang hipotenus, manakala sisi a berjalan dari bucu A ke bucu sudut tegak C.",
            },
            {
              "kind": "p",
              "text": "Hipotenus sentiasa merupakan sisi terpanjang dalam segi tiga bersudut tegak yang tidak merosot, kerana ia terletak bertentangan dengan sudut terbesar, iaitu sudut tegak. Itulah sebabnya formula memerlukan [[0 < a < c]] dan kalkulator menjangkakan hipotenus yang lebih panjang daripada sisi.",
            },
            {
              "kind": "p",
              "text": "Kedudukan sisi a menentukan segmen mana yang dipanggil p: sisi a menyentuh bucu A, jadi segmen yang bersebelahan dengan A ialah p. Sentiasa semak label pada gambar rajah anda sendiri sebelum memilih sisi mana yang hendak dimasukkan.",
            },
          ],
          "h2": "Memahami Sisi A dan Hipotenus",
          "table": {
            "headers": [
              "Simbol",
              "Maksud",
            ],
            "rows": [
              [
                "a",
                "Sisi tegak yang berkaitan dengan p",
              ],
              [
                "b",
                "Sisi tegak yang satu lagi",
              ],
              [
                "c",
                "Hipotenus penuh",
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
              "text": "Setiap kesilapan di bawah diikuti oleh pembetulannya. Kebanyakannya berpunca daripada pelabelan, bukan aritmetik.",
            },
            {
              "kind": "steps",
              "steps": [
                "Lupa mengkuasakan dua sisi a: membahagikan a dengan c dan bukannya a kuasa dua dengan c memberikan 0.6 cm dan bukannya 3.6 cm.",
                "Membahagikan c dengan a kuasa dua dan bukannya a kuasa dua dengan c: hasil bahaginya mestilah [[a^2/c]], bukan [[c/a^2]]. Dengan a = 6 dan c = 10, susunan yang salah memberikan kira-kira 0.278, yang tiada unit yang sah.",
                "Menggunakan sisi b dan bukannya sisi a: memasukkan b mengembalikan q. Dengan b = 8 dan c = 10, hasilnya 6.4 cm ialah q, bukan p.",
                "Mengelirukan unjuran p dengan unjuran q: p terletak bersebelahan dengan bucu A dan q bersebelahan dengan bucu B. Labelkan kedua-dua segmen sebelum mengira.",
                "Menganggap p sebagai sisi tegak yang sebenar: p ialah segmen hipotenus, bukan sisi AC. Dalam segi tiga 6-8-10, sisi a ialah 6 cm manakala p hanya 3.6 cm.",
                "Memasukkan nilai a yang lebih besar daripada atau sama dengan c: tiada segi tiga seperti itu wujud, kerana hipotenus ialah sisi terpanjang.",
                "Mencampurkan unit ukuran: tukarkan dahulu, seperti dalam Contoh 7, dengan 1 m menjadi 100 cm.",
                "Lupa bahawa hipotenus penuh ialah c: menggunakan unjuran atau sisi sebagai penyebut memesongkan hasilnya.",
                "Membundarkan pengiraan perantaraan terlalu awal: membundarkan sisi kuasa dua sebelum membahagi mengubah jawapannya.",
                "Mengelirukan panjang kuasa dua dengan panjang biasa: 36 dalam contoh 6-8-10 ialah panjang kuasa dua, manakala 3.6 cm ialah unjuran.",
                "Menggunakan formula pada segi tiga yang bukan bersudut tegak: teorem unjuran memerlukan altitud dari sudut tegak.",
                "Lupa bahawa p hanya satu segmen hipotenus: p tambah q sama dengan c, jadi hasil c atau lebih menandakan kesilapan.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika jawapan kelihatan salah, berhenti dan labelkan semula gambar rajah sebelum mengira semula. Kebanyakan kesilapan di atas hilang sebaik sahaja p dan q ditandakan dengan jelas pada hipotenus.",
            },
          ],
          "h2": "Kesilapan Biasa Ketika Mengira Unjuran P",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cuba keenam-enam masalah di atas kertas sebelum membaca jawapannya. Tiada satu pun nilainya mengulangi contoh kerja.",
            },
            {
              "kind": "h3",
              "text": "Masalah 1: Nombor Bulat Asas",
            },
            {
              "kind": "p",
              "text": "Sebuah segi tiga bersudut tegak mempunyai sisi [[a = 9]] cm dan hipotenus [[c = 15]] cm. Cari unjuran p.",
            },
            {
              "kind": "h3",
              "text": "Masalah 2: Nilai Perpuluhan",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = 1.5]] m dan [[c = 2.5]] m, cari unjuran p.",
            },
            {
              "kind": "h3",
              "text": "Masalah 3: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diberi [[a = \\frac{5}{6}]] kaki dan [[c = \\frac{5}{3}]] kaki, cari p sebagai pecahan.",
            },
            {
              "kind": "h3",
              "text": "Masalah 4: Penukaran Unit",
            },
            {
              "kind": "p",
              "text": "Sebuah sisi berukuran [[a = 80]] cm dan hipotenus berukuran [[c = 2]] m. Cari p dalam sentimeter.",
            },
            {
              "kind": "h3",
              "text": "Masalah 5: Cari q Selepas Mengira p",
            },
            {
              "kind": "p",
              "text": "Sebuah segi tiga bersudut tegak mempunyai hipotenus [[c = 25]] cm dan sisi [[a = 15]] cm. Cari p, kemudian q.",
            },
            {
              "kind": "h3",
              "text": "Masalah 6: Berbilang Langkah dengan Unjuran p dan Altitud h",
            },
            {
              "kind": "p",
              "text": "Diberi [[c = 25]] cm dan [[a = 15]] cm, cari p, kemudian q, kemudian altitud h.",
            },
            {
              "kind": "h3",
              "text": "Jawapan Soalan Latihan",
            },
            {
              "kind": "p",
              "text": "Jawapan 1: [[p = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 2: [[p = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Jawapan 3: [[a^2 = \\frac{25}{36}]], jadi [[p = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] kaki.",
            },
            {
              "kind": "p",
              "text": "Jawapan 4: Tukar 2 m kepada 200 cm, kemudian [[p = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 5: [[p = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, kemudian [[q = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawapan 6: [[p = 9]] cm dan [[q = 16]] cm, jadi [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Soalan Latihan dengan Jawapan",
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sesetengah masalah meminta unjuran yang satu lagi. Formula yang sepadan ialah gambaran cermin bagi formula untuk p, dengan sisi b menggantikan sisi a:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[b = 8]] cm dan [[c = 10]] cm. Kemudian [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Itu sepadan dengan unjuran yang satu lagi bagi segi tiga 6-8-10 daripada contoh-contoh sebelum ini, dengan p ialah 3.6 cm dan kedua-dua unjuran menambah kepada 10 cm.",
            },
            {
              "kind": "p",
              "text": "Formula ini menggunakan b dan bukannya a kerana setiap sisi berpasangan dengan unjuran yang bersebelahan dengan bucunya sendiri. Sisi b menyentuh bucu B, dan q ialah segmen yang bersebelahan dengan B. Memasukkan a dalam formula ini akan mengembalikan p, bukan q. Kalkulator di halaman ini hanya menerima a dan c, jadi gunakan <a href=\"/right-triangle-projection-q-calculator/\">kalkulator unjuran q</a> apabila anda perlu mencari q daripada b dan c.",
            },
          ],
          "h2": "Cara Mengira Unjuran Q daripada Sisi yang Satu Lagi",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti ini bersandarkan segi tiga serupa. Melukis altitud CD membahagikan segi tiga ABC kepada dua segi tiga bersudut tegak yang lebih kecil, ACD dan CBD, dan kedua-duanya serupa dengan segi tiga asal. Salah satu nisbah sisinya memberikan teorem unjuran secara langsung.",
            },
            {
              "kind": "p",
              "text": "Fokus pada segi tiga ACD dan keseluruhan segi tiga ABC. Kedua-duanya mengandungi sudut di A, dan kedua-duanya mengandungi sudut tegak, jadi sudut ketiga masing-masing juga mesti sepadan. Memadankan sisi-sisi yang terletak pada kedudukan yang sama memberikan perkadaran:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Sekarang gantikan dengan simbol piawai: [[AD = p]], [[AC = a]], dan [[AB = c]]. Perkadaran itu menjadi:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Pendaraban silang menghapuskan pecahan. Pengangka kiri didarab dengan penyebut kanan sama dengan pengangka kanan didarab dengan penyebut kiri, jadi [[p \\times c = a \\times a]], iaitu:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Membahagikan kedua-dua belah dengan c melengkapkan bukti, memberikan [[p = \\frac{a^2}{c}]]. Hujah yang sama yang digunakan pada segi tiga kecil yang satu lagi, CBD, memberikan [[b^2 = c \\times q]].",
            },
          ],
          "h2": "Mengapakah Formula Unjuran P Berfungsi?",
          "image": {
            "alt": "Segi tiga bersudut tegak asal ABC di samping segi tiga serupa yang lebih kecil ACD dan CBD, menunjukkan perkadaran p per a sama dengan a per c",
            "caption": "Bukti segi tiga serupa: p per a sama dengan a per c, jadi pendaraban silang memberikan a kuasa dua sama dengan c darab p.",
            "src": "projection-p-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Lapan sifat berikut terbit secara langsung daripada [[p = \\frac{a^2}{c}]]. Setiap satunya juga berfungsi sebagai semakan kewajaran ke atas jawapan baharu.",
            },
            {
              "items": [
                "Unjuran p sentiasa lebih pendek daripada hipotenus penuh dalam segi tiga yang tidak merosot, kerana p hanya sebahagian daripada c.",
                "Menambah sisi a sambil mengekalkan c akan menambah p, kerana sisi kuasa dua dalam pengangka bertambah.",
                "Menambah c sambil mengekalkan a akan mengurangkan p, kerana penyebut bertambah.",
                "Jika a dan c kedua-duanya didarab dengan faktor positif yang sama, p berskala mengikut faktor itu.",
                "Jika p sama dengan q, kedua-dua sisi adalah sama, dan segi tiga itu ialah segi tiga bersudut tegak sama kaki.",
                "Unjuran p sentiasa positif dalam segi tiga sah yang tidak merosot. Nilai sifar atau negatif tidak menggambarkan sebarang segi tiga sebenar.",
                "Unjuran p ialah panjang, bukan luas. Sisi kuasa dua hanya langkah perantaraan, dan membahagikannya dengan c mengembalikan unit panjang biasa.",
                "Unjuran p dikaitkan secara khusus dengan sisi a. Menggunakannya dengan sisi b menjawab soalan yang berbeza sama sekali.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Apabila altitud jatuh di titik tengah hipotenus, kedua-dua sisi mesti sepadan, seperti yang ditunjukkan oleh gambar rajah di bawah.",
            },
          ],
          "h2": "Sifat Penting Unjuran P",
          "image": {
            "alt": "Dua segi tiga bersudut tegak bersebelahan, satu dengan unjuran p dan q yang sama iaitu 5 dan satu lagi dengan unjuran p sama dengan 3.6 dan q sama dengan 6.4 yang tidak sama",
            "caption": "Unjuran yang sama (p = q = 5) memberikan sisi yang sama, manakala unjuran yang tidak sama (p = 3.6, q = 6.4) memberikan sisi yang tidak sama.",
            "src": "projection-p-equal-vs-unequal.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem unjuran dan teorem Pythagoras sepadan dengan tepat, dan algebra menunjukkan sebabnya. Bermula daripada dua formula unjuran, [[a^2 = c \\times p]] dan [[b^2 = c \\times q]], dan tambahkan kedua-duanya:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Memfaktorkan c daripada bahagian kanan memberikan [[a^2 + b^2 = c(p + q)]]. Oleh kerana [[p + q = c]], penggantian menghasilkan keputusan yang biasa:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Semakan berangka dengan segi tiga 6-8-10 mengesahkannya: [[a^2 + b^2 = 36 + 64 = 100]] dan [[c^2 = 10^2 = 100]]. Teorem unjuran membahagikan hubungan Pythagoras kepada satu bahagian bagi setiap sisi, dan menambah bahagian-bahagian itu membina semula hubungan tersebut.",
            },
            {
              "kind": "p",
              "text": "Pembahagian itulah yang menjadikan formula unjuran berguna: teorem Pythagoras sahaja tidak dapat mencari unjuran daripada sisi dan hipotenus, kerana ia bercakap tentang sisi-sisi itu bersama-sama.",
            },
          ],
          "h2": "Hubungan antara Unjuran P dan Teorem Pythagoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Unjuran p juga berkaitan dengan altitud melalui hubungan min geometri kedua. Altitud h ialah min geometri bagi kedua-dua unjuran:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Oleh kerana [[q = c - p]], altitud juga boleh ditulis dengan hanya menggunakan p dan c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p(c - p)}]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan [[p = 3.6]] cm dan [[c = 10]] cm. Cari q dahulu: [[q = 10 - 3.6 = 6.4]] cm. Kemudian [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Altitud lebih pendek daripada mana-mana sisi, seperti yang sepatutnya.",
            },
            {
              "kind": "p",
              "text": "Unjuran p sahaja tidak menentukan altitud: dua segi tiga yang berbeza boleh berkongsi p yang sama dengan hipotenus yang berbeza. Hipotenus penuh, atau unjuran yang satu lagi, sentiasa diperlukan juga. <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator altitud daripada unjuran</a> mengendalikan pengiraan itu apabila kedua-dua unjuran diketahui.",
            },
          ],
          "h2": "Hubungan antara Unjuran P dan Altitud",
        },
        "sec-relationship-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Formula unjuran boleh disusun semula untuk mencari sisi a dan bukannya p. Bermula daripada [[a^2 = c \\times p]], ambil punca kuasa dua positif bagi kedua-dua belah:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Semak dengan nombor yang biasa: [[a = 6]] cm, [[c = 10]] cm, dan [[p = 3.6]] cm. Hasil darab di dalam punca ialah [[c \\times p = 10 \\times 3.6 = 36]], dan [[\\sqrt{36} = 6]] cm, iaitu sisi yang kita mulakan.",
            },
            {
              "kind": "p",
              "text": "Hubungannya ialah hubungan min geometri: sisi a ialah min geometri bagi hipotenus dan unjurannya. Itulah sebabnya sisi itu muncul dalam bentuk kuasa dua dalam teorem dan sebabnya punca kuasa dua muncul apabila menyelesaikan untuk sisi itu. Bagi masalah yang bermula daripada p dan c, <a href=\"/right-triangle-leg-a-from-projection-calculator/\">kalkulator sisi a daripada unjuran</a> menjalankan formula susunan semula ini secara langsung.",
            },
          ],
          "h2": "Hubungan antara Unjuran P dan Sisi A",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua-dua unjuran ialah dua bahagian daripada satu sisi lurus, jadi kedua-duanya menambah kepada keseluruhan hipotenus:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Menyusun semula memberikan [[q = c - p]]. Dengan [[c = 10]] cm dan [[p = 3.6]] cm, penolakannya ialah [[q = 10 - 3.6 = 6.4]] cm. Penolakan yang sama berfungsi sebaliknya: [[p = c - q]]. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">kalkulator hipotenus daripada unjuran</a> membina semula c daripada p dan q apabila hipotenus itu sendiri tidak diketahui.",
            },
            {
              "kind": "p",
              "text": "Membandingkan p dan q memberitahu anda tentang bentuk segi tiga itu. Apabila p sama dengan q, altitud jatuh di titik tengah hipotenus dan kedua-dua sisi adalah sama, jadi segi tiga itu adalah sama kaki. Apabila p lebih besar daripada q, sisi a lebih panjang daripada sisi b, dan apabila q lebih besar, sisi b lebih panjang. Unjuran yang lebih panjang sentiasa tergolong dalam sisi yang lebih panjang.",
            },
            {
              "kind": "p",
              "text": "Dalam segi tiga 6-8-10, q ialah 6.4 cm dan p ialah 3.6 cm, jadi q lebih besar, dan sisi b pada 8 cm memang lebih panjang daripada sisi a pada 6 cm.",
            },
          ],
          "h2": "Hubungan antara Unjuran P dan Unjuran Q",
          "image": {
            "alt": "Segi tiga bersudut tegak yang membandingkan unjuran p yang berpasangan dengan sisi a dengan unjuran q yang berpasangan dengan sisi b, dengan c sama dengan 10, p sama dengan 3.6, dan q sama dengan 6.4",
            "caption": "p menggunakan a (36 dibahagi 10 = 3.6) dan q menggunakan b (64 dibahagi 10 = 6.4).",
            "src": "projection-p-vs-q.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[a = 6]] cm dan [[c = 10]] cm. Empat langkah di bawah menunjukkan kerja penuh, tanpa apa-apa yang dilangkau.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tulis formula: [[p = \\frac{a^2}{c}]].",
                "Gantikan nilai: [[p = \\frac{6^2}{10}]].",
                "Kuasa duakan sisi: [[p = \\frac{36}{10}]].",
                "Bahagi: [[p = 3.6]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawapan 3.6 cm ialah segmen hipotenus yang bersebelahan dengan sisi a, bukan sisi berserenjang dan bukan luas. Satu pengesahan ringkas melengkapkan kitaran: [[a^2 = 6^2 = 36]] dan [[c \\times p = 10 \\times 3.6 = 36]], jadi kedua-dua belah teorem itu sepadan.",
            },
            {
              "kind": "p",
              "text": "Sebagai rujukan, unjuran yang satu lagi ialah [[q = 10 - 3.6 = 6.4]] cm, sisi b ialah [[b = \\sqrt{10 \\times 6.4} = 8]] cm, dan altitud ialah [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, yang mengesahkan segi tiga bersudut tegak 6-8-10 yang biasa.",
            },
          ],
          "h2": "Contoh Langkah demi Langkah Mencari Unjuran P",
          "image": {
            "alt": "Segi tiga bersudut tegak dengan sisi a 6 cm dan hipotenus 10 cm, dikira sehingga memberikan unjuran p sama dengan 3.6 cm",
            "caption": "Contoh kerja: a = 6 cm dan c = 10 cm memberikan p = 36 dibahagi 10 = 3.6 cm.",
            "src": "projection-p-example-a6-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Empat semakan bebas menangkap hampir setiap kesilapan. Jalankan sekurang-kurangnya satu ke atas setiap jawapan, dan keempat-empatnya apabila masalah itu penting. Contoh di bawah menggunakan [[a = 6]] cm, [[c = 10]] cm, dan [[p = 3.6]] cm sepanjang masa.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 1: Semakan Teorem Unjuran",
            },
            {
              "kind": "p",
              "text": "Sahkan [[p = \\frac{a^2}{c}]] secara langsung. Di sini [[\\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm, yang sepadan dengan jawapannya. Jika pengiraan semula berbeza, sama ada pengkuasaan dua atau pembahagian yang salah.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 2: Penambahan Segmen",
            },
            {
              "kind": "p",
              "text": "Cari q melalui penolakan: [[q = 10 - 3.6 = 6.4]] cm. Kemudian semak [[p + q = 3.6 + 6.4 = 10]] cm, yang sama dengan c. Jumlah yang tidak sama dengan c menunjukkan kesilapan penolakan.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 3: Semakan Teorem Pythagoras",
            },
            {
              "kind": "p",
              "text": "Kira sisi b daripada q: [[b = \\sqrt{10 \\times 6.4} = 8]] cm. Kemudian semak [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Semakan ini menguji keseluruhan segi tiga, jadi ia menangkap kesilapan pelabelan yang semakan pertama boleh terlepas. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator sisi b daripada unjuran</a> menjalankan langkah b secara langsung.",
            },
            {
              "kind": "h3",
              "text": "Kaedah 4: Kewajaran Geometri",
            },
            {
              "kind": "p",
              "text": "Pastikan p positif, lebih kecil daripada c, dalam unit yang betul, dan merupakan segmen hipotenus dan bukannya sisi tegak. Di sini 3.6 cm adalah positif, lebih kecil daripada 10 cm, dalam sentimeter, dan jauh lebih pendek daripada sisi a pada 6 cm.",
            },
          ],
          "h2": "Cara Mengesahkan Pengiraan Unjuran P Anda",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Lukis altitud dari bucu sudut tegak C secara tegak ke hipotenus AB. Ia bertemu dengan hipotenus di satu titik yang dipanggil tapak, dilabelkan D, dan membahagikannya kepada dua segmen bersebelahan: AD ialah unjuran p, dan DB ialah unjuran q.",
            },
            {
              "kind": "p",
              "text": "Unjuran p tergolong dalam sisi a kerana ia terletak bersebelahan dengan bucu A, bucu yang sama tempat sisi a bermula. Dalam segi tiga kecil ACD, sisi a ialah hipotenus dan p ialah salah satu sisinya, dan inilah kaitan geometri yang menjadikan teorem unjuran berfungsi. Unjuran q, dengan alasan yang sama, tergolong dalam sisi b, yang menyentuh bucu B.",
            },
            {
              "kind": "p",
              "text": "Unjuran ialah panjang di sepanjang hipotenus, diukur dalam unit yang sama seperti sisi-sisi lain. Unjuran tidak berserenjang dengan apa-apa, dan bukan sisi segi tiga asal. <a href=\"/right-triangle-projection-calculator/\">kalkulator unjuran segi tiga bersudut tegak</a> mencari kedua-dua unjuran apabila sisi dan hipotenus diketahui.",
            },
            {
              "kind": "p",
              "text": "Oleh kerana p dan q ialah dua bahagian daripada satu sisi lurus, kedua-duanya menambah kepada keseluruhan hipotenus:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Dengan [[c = 10]] cm dan [[p = 3.6]] cm, unjuran yang satu lagi ialah [[q = 10 - 3.6 = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Unjuran p tidak sama dengan sisi a. Sisi a ialah sisi AC, salah satu sisi yang membentuk sudut tegak, manakala p ialah segmen AD di sepanjang hipotenus. Dalam segi tiga 6-8-10, sisi a ialah 6 cm dan unjuran p hanya 3.6 cm.",
            },
          ],
          "h2": "Apakah Unjuran P dalam Segi Tiga Bersudut Tegak?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kuasa dua itu wujud kerana teorem unjuran ialah pernyataan tentang sisi a yang dikuasakan dua: ia menyatakan bahawa kuasa dua sisi a sama dengan hasil darab c dan p, [[a^2 = c \\times p]], dan formula untuk p ialah apa yang anda peroleh dengan membahagikan kedua-dua belah dengan c.",
            },
            {
              "kind": "p",
              "text": "Sebabnya berpunca daripada segi tiga serupa. Dalam segi tiga ACD, sisi a memainkan peranan sebagai hipotenus, manakala p ialah salah satu sisinya. Membandingkan segi tiga kecil dengan segi tiga keseluruhan memberikan perkadaran [[\\frac{p}{a} = \\frac{a}{c}]], dan sisi a muncul dua kali, sekali dalam setiap nisbah. Pendaraban silang meletakkan a pada kedua-dua belah, dan inilah sebabnya kuasa dua itu muncul.",
            },
            {
              "kind": "p",
              "text": "Hubungan min geometri menyatakan perkara yang sama dengan kata-kata berbeza: sisi a ialah min geometri bagi hipotenus c dan unjurannya p, bermaksud [[a = \\sqrt{c \\times p}]]. Mengkuasakan dua kedua-dua belah memberikan [[a^2 = c \\times p]], dan membahagikan dengan c mengasingkan p.",
            },
            {
              "kind": "p",
              "text": "Pembahagian ialah langkah yang mengasingkan p. Pendaraban dalam teorem mengikat p kepada c, dan membahagikan dengan c membatalkan ikatan itu. Tanpa kuasa dua, formula itu akan mencampurkan panjang dengan luas, dan unitnya tidak akan sepadan.",
            },
          ],
          "h2": "Mengapakah Sisi A Dikuasakan Dua dalam Formula Unjuran?",
        },
      },
      "tocHeading": "Kandungan Panduan",
      "tocItems": {
        "sec-applications": "Aplikasi Praktikal Pengiraan Unjuran Segi Tiga Bersudut Tegak",
        "sec-calculate": "Kira Unjuran P Segi Tiga Bersudut Tegak",
        "sec-diagram": "Gambar Rajah Unjuran P Segi Tiga Bersudut Tegak Diterangkan",
        "sec-examples": "Contoh Kerja Mengira Unjuran P",
        "sec-faq": "Soalan Lazim",
        "sec-formula": "Formula Unjuran P Segi Tiga Bersudut Tegak",
        "sec-how-to-use": "Cara Menggunakan Kalkulator Unjuran P Segi Tiga Bersudut Tegak",
        "sec-intro": "Kalkulator Unjuran P Segi Tiga Bersudut Tegak",
        "sec-leg-a-hypotenuse": "Memahami Sisi A dan Hipotenus",
        "sec-mistakes": "Kesilapan Biasa Ketika Mengira Unjuran P",
        "sec-practice": "Soalan Latihan dengan Jawapan",
        "sec-projection-q": "Cara Mengira Unjuran Q daripada Sisi yang Satu Lagi",
        "sec-proof": "Mengapakah Formula Unjuran P Berfungsi?",
        "sec-properties": "Sifat Penting Unjuran P",
        "sec-pythagoras": "Hubungan antara Unjuran P dan Teorem Pythagoras",
        "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
        "sec-relationship-altitude": "Hubungan antara Unjuran P dan Altitud",
        "sec-relationship-leg-a": "Hubungan antara Unjuran P dan Sisi A",
        "sec-relationship-pq": "Hubungan antara Unjuran P dan Unjuran Q",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Unjuran P",
        "sec-verify": "Cara Mengesahkan Pengiraan Unjuran P Anda",
        "sec-what-projection-p": "Apakah Unjuran P dalam Segi Tiga Bersudut Tegak?",
        "sec-why-squared": "Mengapakah Sisi A Dikuasakan Dua dalam Formula Unjuran?",
      },
    },
};
