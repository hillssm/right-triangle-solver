// pythagoreanTriplesGuideTranslations.bms.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B4_MS = {
  "ms": {
      "meta": {
        "title": "Kalkulator Tigaan Pythagoras - Semak dan Jana Tigaan",
        "description": "Semak sama ada tiga nombor bulat membentuk tigaan Pythagoras dan jana tigaan dengan formula Euclid. Pelajari tigaan primitif, penskalaan, dan contoh kerja.",
        "primaryKeyword": "Kalkulator Tigaan Pythagoras",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Navigasi Bahagian",
      "tocItems": {
        "sec-intro": "Kalkulator Tigaan Pythagoras",
        "sec-calculate": "Semak atau Jana Tigaan Pythagoras dengan Kalkulator",
        "sec-what": "Apakah Tigaan Pythagoras?",
        "sec-pythagorean": "Memahami Teorem Pythagoras",
        "sec-check": "Cara Menyemak Sama Ada Tiga Nombor Membentuk Tigaan Pythagoras",
        "sec-euclid": "Cara Menjana Tigaan Pythagoras Menggunakan Formula Euclid",
        "sec-proof": "Bukti Matematik bagi Formula Euclid",
        "sec-primitive": "Apakah Tigaan Pythagoras Primitif?",
        "sec-nonprimitive": "Apakah Tigaan Pythagoras Bukan Primitif?",
        "sec-conditions": "Syarat untuk Menjana Tigaan Pythagoras Primitif",
        "sec-difference": "Perbezaan Antara Tigaan Primitif dengan Tigaan Bukan Primitif",
        "sec-scaling": "Cara Menjana Lebih Banyak Tigaan dengan Menskalakan Tigaan Sedia Ada",
        "sec-examples": "Contoh Tigaan Pythagoras yang Lazim",
        "sec-worked": "Contoh Kerja Langkah demi Langkah Menggunakan Kalkulator",
        "sec-infinite": "Mengapakah Terdapat Tigaan Pythagoras yang Tidak Terhingga Banyaknya?",
        "sec-recognize": "Cara Mengenal Tigaan Pythagoras Tanpa Meneka",
        "sec-ordinary": "Tigaan Pythagoras dan Segi Tiga Bersudut Tegak Biasa",
        "sec-mistakes": "Kesilapan Lazim Ketika Menggunakan Kalkulator Tigaan Pythagoras",
        "sec-practice": "Soalan Latihan Berserta Jawapan",
        "sec-related": "Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
        "sec-faq": "Soalan Lazim",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Tigaan Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Semak tigaan nombor bulat dan jana tigaan baharu dengan formula Euclid.",
            },
            {
              "kind": "p",
              "text": "Tigaan Pythagoras ialah satu set tiga nombor bulat positif yang boleh menjadi sisi sebuah segi tiga bersudut tegak. Dua nombor yang lebih pendek ialah sisi tegak, nombor yang terbesar ialah hipotenus, dan ketiga-tiga nilai itu memenuhi teorem Pythagoras.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Kalkulator Tigaan Pythagoras menjalankan dua tugas. Dalam mod semak, anda memasukkan tiga nombor bulat dan kalkulator menguji sama ada nombor-nombor itu membentuk tigaan yang sah. Dalam mod jana, anda memasukkan dua integer, [[m]] dan [[n]], dan kalkulator membina tigaan baharu dengan formula Euclid. Menyemak dan menjana ialah dua tugas yang berbeza, dan halaman ini menerangkan kedua-duanya, langkah demi langkah.",
            },
            {
              "kind": "p",
              "text": "Contoh yang paling terkenal ialah [[3]], [[4]], dan [[5]]. Mengkuasa duakan dan menambah sisi tegak memberikan [[3^2+4^2=9+16=25]], yang sama dengan [[5^2]]. Oleh sebab kedua-dua belah sama tepat, [[(3, 4, 5)]] ialah tigaan yang sah. Tigaan primitif ialah tigaan yang ketiga-tiga nombornya tidak mempunyai faktor sepunya yang lebih besar daripada [[1]]; [[3]], [[4]], dan [[5]] tidak mempunyai apa-apa yang sama, jadi [[(3, 4, 5)]] ialah primitif. Bahagian di bawah menunjukkan cara menyemak mana-mana tiga nombor, cara menjana tigaan sebesar mana pun, dan cara membezakan tigaan primitif daripada salinan yang diskalakan.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Semak atau Jana Tigaan Pythagoras dengan Kalkulator",
          "blocks": [
            {
              "kind": "p",
              "text": "Dua mod, satu halaman: semak satu set nombor, atau bina tigaan baharu.",
            },
            {
              "kind": "h3",
              "text": "Mod 1: Semak Tigaan Pythagoras",
            },
            {
              "kind": "p",
              "text": "Masukkan tiga panjang sisi sebagai [[a]], [[b]], dan [[c]], dengan [[c]] sebagai nilai yang terbesar. Kalkulator mengkuasa duakan [[a]] dan [[b]], menambah hasilnya, mengkuasa duakan [[c]], dan membandingkan kedua-dua belah persamaan.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Apabila kedua-dua belah sama, ketiga-tiga nombor itu membentuk tigaan Pythagoras yang sah, dan keputusannya menyatakan sedemikian. Apabila kedua-duanya berbeza, nombor-nombor itu tidak membentuk tigaan, dan keputusan menunjukkan dua jumlah yang tidak sama supaya anda dapat melihat sejauh mana bezanya. Ketiga-tiga input mestilah nombor bulat positif, dan ketiga-tiganya mesti menggunakan unit yang sama.",
            },
            {
              "kind": "h3",
              "text": "Mod 2: Jana Tigaan Pythagoras",
            },
            {
              "kind": "p",
              "text": "Masukkan dua integer positif, [[m]] dan [[n]], dengan [[m]] lebih besar daripada [[n]]. Kalkulator menggunakan formula Euclid untuk menghasilkan tiga panjang sisi nombor bulat.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "Hasilnya sentiasa tigaan yang sah, kerana formula Euclid dibina untuk memenuhi teorem Pythagoras. Kedua-dua sisi tegak boleh muncul dalam mana-mana susunan, tetapi [[c]] sentiasa hipotenus. Untuk menggunakan kalkulator, pilih mod, masukkan nombor yang sah, klik Kira, dan baca keputusan berserta langkah kerjanya. Klik Set Semula untuk mengosongkan medan dan bermula semula.",
            },
          ],
        },
        "sec-what": {
          "h2": "Apakah Tigaan Pythagoras?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga nombor bulat positif yang memenuhi teorem Pythagoras dengan tepat.",
            },
            {
              "kind": "p",
              "text": "Tigaan Pythagoras ialah satu set tiga integer positif, ditulis [[(a, b, c)]], yang memenuhi persamaan [[a^2+b^2=c^2]]. Di sini [[a]] dan [[b]] ialah sisi tegak, iaitu dua sisi yang bertemu pada sudut tegak, dan [[c]] ialah hipotenus, iaitu sisi yang bertentangan dengan sudut tegak dan sentiasa yang paling panjang antara ketiganya.",
            },
            {
              "kind": "p",
              "text": "Persamaan itu mesti dipenuhi dengan tepat. Hampir tepat tidak dikira sebagai tigaan: jika hasil tambah kuasa dua sisi tegak berbeza daripada kuasa dua hipotenus walaupun sebanyak satu unit, ketiga-tiga nombor itu gagal dalam ujian. Kesamaan yang ketat inilah yang menjadikan tigaan berguna dalam pembinaan dan pertukangan, di mana semakan [[3]]-[[4]]-[[5]] menandakan sudut tepat tanpa ralat pengukuran.",
            },
            {
              "kind": "p",
              "text": "Ketiga-tiga nombor mestilah bulat dan positif. Segi tiga bersudut tegak dengan panjang sisi perpuluhan, seperti sisi tegak [[1.5]] dan [[2]] dengan hipotenus [[2.5]], memenuhi teorem Pythagoras tetapi bukan tigaan Pythagoras, kerana takrifnya memerlukan integer. Begitu juga, segi tiga dengan sisi tidak nisbah, seperti sisi tegak [[1]] dan [[1]] dengan hipotenus [[\\sqrt{2}]], ialah segi tiga bersudut tegak tetapi bukan tigaan. Perkataan tigaan dikhaskan untuk penyelesaian integer positif sahaja.",
            },
            {
              "kind": "p",
              "text": "Tigaan [[(3, 4, 5)]] ialah contoh pertama yang semula jadi. Sisi tegaknya ialah [[3]] dan [[4]], hipotenusnya ialah [[5]], dan [[9+16=25]] mengesahkan persamaan itu. Susunan sisi tegak tidak penting: [[(4, 3, 5)]] menggambarkan segi tiga yang sama. Yang penting ialah dua nombor yang lebih kecil ialah sisi tegak dan yang terbesar ialah hipotenus.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Segi empat sama yang dilukis pada sisi 3, 4, dan 5 dengan luas 9, 16, dan 25, menunjukkan 9 tambah 16 bersamaan 25",
            "caption": "Segi empat sama pada sisi 3, 4, dan 5 mempunyai luas 9, 16, dan 25. Oleh sebab 9 + 16 = 25, nombor 3, 4, dan 5 membentuk tigaan Pythagoras.",
          },
        },
        "sec-pythagorean": {
          "h2": "Memahami Teorem Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem di sebalik setiap tigaan: kuasa dua sisi tegak ditambah menjadi kuasa dua hipotenus.",
            },
            {
              "kind": "p",
              "text": "Teorem Pythagoras menyatakan bahawa dalam mana-mana segi tiga bersudut tegak, kuasa dua hipotenus sama dengan hasil tambah kuasa dua dua sisi yang lain. Dengan sisi tegak [[a]] dan [[b]] serta hipotenus [[c]], teorem itu berbunyi seperti berikut.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Satu cara yang jelas untuk melihatnya ialah melalui luas. Lukis sebuah segi empat sama pada setiap sisi segi tiga itu. Segi empat sama pada sisi tegak [[a]] mempunyai luas [[a^2]], segi empat sama pada sisi tegak [[b]] mempunyai luas [[b^2]], dan segi empat sama pada hipotenus mempunyai luas [[c^2]]. Teorem itu menyatakan bahawa dua luas yang pertama ditambah menjadi luas yang ketiga. Bagi segi tiga [[3]]-[[4]]-[[5]], segi empat sama itu mempunyai luas [[9]], [[16]], dan [[25]], dan [[9+16=25]] menunjukkan keseimbangan itu secara langsung.",
            },
            {
              "kind": "p",
              "text": "Gambaran luas itu juga menjelaskan mengapakah [[3]]-[[4]]-[[5]] ialah segi tiga bersudut tegak yang sah. Panjang sisinya memenuhi keseimbangan luas dengan tepat, jadi sudut antara sisi tegak mestilah sudut tegak. Setiap tigaan Pythagoras memenuhi teorem itu, kerana tigaan ditakrifkan oleh persamaan tersebut. Sebaliknya tidak benar: banyak segi tiga bersudut tegak mempunyai panjang sisi yang bukan nombor bulat, jadi ia memenuhi teorem itu tanpa menjadi tigaan. Gunakan <a href=\"/pythagorean-theorem-calculator/\">kalkulator teorem Pythagoras</a> apabila segi tiga mempunyai sisi perpuluhan atau sisi yang tidak diketahui dan bukannya tigaan nombor bulat.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "Segi tiga bersudut tegak ABC dengan sisi tegak a sama dengan 3 dan b sama dengan 4, hipotenus c sama dengan 5, penanda sudut tegak, dan formula a kuasa dua tambah b kuasa dua sama dengan c kuasa dua",
            "caption": "Segi tiga bersudut tegak ABC dengan sisi tegak a = 3 dan b = 4 serta hipotenus c = 5. Penanda sudut tegak terletak di C, dan 3 kuasa dua tambah 4 kuasa dua sama dengan 5 kuasa dua.",
          },
        },
        "sec-check": {
          "h2": "Cara Menyemak Sama Ada Tiga Nombor Membentuk Tigaan Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Lapan langkah ringkas mengubah mana-mana tiga nombor bulat menjadi jawapan ya atau tidak yang jelas.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenal pasti nilai yang terbesar antara ketiga-tiga nilai itu.",
                "Tetapkan nilai yang terbesar sebagai [[c]], iaitu hipotenus.",
                "Tetapkan dua nilai yang lain sebagai [[a]] dan [[b]], iaitu sisi tegak.",
                "Kuasa duakan [[a]].",
                "Kuasa duakan [[b]].",
                "Tambahkan kedua-dua kuasa dua itu.",
                "Kuasa duakan [[c]].",
                "Bandingkan kedua-dua keputusan: sama bermaksud tigaan yang sah, tidak sama bermaksud bukan tigaan.",
              ],
            },
            {
              "kind": "p",
              "text": "Berikut ialah contoh yang sah. Semak [[7]], [[24]], dan [[25]]: nilai yang terbesar ialah [[25]], jadi ia ialah hipotenus. Kuasa duakan sisi tegak dan tambahkan.",
            },
            {
              "kind": "p",
              "text": "[[[7^2+24^2=25^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[49+576=625]]]",
            },
            {
              "kind": "p",
              "text": "Oleh sebab [[625=625]], kedua-dua belah sama, jadi [[(7, 24, 25)]] ialah tigaan Pythagoras yang sah. Ia juga primitif, kerana [[7]], [[24]], dan [[25]] tidak mempunyai faktor sepunya yang lebih besar daripada [[1]].",
            },
            {
              "kind": "p",
              "text": "Sekarang contoh yang tidak sah. Semak [[4]], [[5]], dan [[6]]: nilai yang terbesar ialah [[6]], jadi ia ialah hipotenus.",
            },
            {
              "kind": "p",
              "text": "[[[4^2+5^2 \\neq 6^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[16+25=41]]]",
            },
            {
              "kind": "p",
              "text": "[[[6^2=36]]]",
            },
            {
              "kind": "p",
              "text": "Oleh sebab [[41]] tidak sama dengan [[36]], nilai-nilai itu tidak membentuk tigaan Pythagoras. Lapan langkah yang sama berfungsi untuk mana-mana input integer positif, besar atau kecil, jadi pengesahan yang tepat tidak pernah bergantung pada ingatan atau tekaan.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "Aliran langkah demi langkah untuk menyemak 7, 24, 25: kuasa duakan sisi tegak menjadi 49 dan 576, tambahkan menjadi 625, kuasa duakan hipotenus menjadi 625, dan sahkan kesamaan",
            "caption": "Menyemak 7, 24, 25 langkah demi langkah: 49 + 576 = 625 dan 25 kuasa dua = 625, jadi kedua-dua belah sama dan tigaan itu sah.",
          },
        },
        "sec-euclid": {
          "h2": "Cara Menjana Tigaan Pythagoras Menggunakan Formula Euclid",
          "blocks": [
            {
              "kind": "p",
              "text": "Dua integer kecil masuk, satu tigaan penuh keluar: itulah formula Euclid.",
            },
            {
              "kind": "p",
              "text": "Formula Euclid membina tigaan Pythagoras daripada dua integer positif, [[m]] dan [[n]], dengan [[m]] lebih besar daripada [[n]]. Parameter [[m]] ialah integer yang lebih besar dan [[n]] ialah yang lebih kecil, dan kedua-duanya mestilah nombor bulat. Ketiga-tiga formula itu menghasilkan dua sisi tegak dan hipotenus.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "Syarat [[m>n>0]] adalah penting. Jika [[m]] sama dengan [[n]], sisi tegak yang pertama menjadi sifar, yang bukan sisi segi tiga. Jika [[m]] lebih kecil daripada [[n]], sisi tegak yang pertama menjadi negatif, yang juga mustahil. Nilai perpuluhan bagi [[m]] dan [[n]] juga tidak sah di sini, kerana formula ini direka untuk parameter integer yang menghasilkan sisi integer.",
            },
            {
              "kind": "p",
              "text": "Cuba [[m=2]] dan [[n=1]]. Sisi tegak yang pertama ialah [[a=2^2-1^2=4-1=3]], sisi tegak yang kedua ialah [[b=2(2)(1)=4]], dan hipotenus ialah [[c=2^2+1^2=4+1=5]]. Hasilnya ialah tigaan [[(3, 4, 5)]]. Perhatikan bahawa sisi tegak yang dijana boleh muncul dalam mana-mana susunan: formula mungkin mengembalikan sisi tegak yang lebih besar dahulu atau kemudian, tetapi [[c]] sentiasa hipotenus. Bahagian seterusnya membuktikan mengapakah formula ini sentiasa memenuhi teorem Pythagoras.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "Carta alir formula Euclid dengan m sama dengan 3 dan n sama dengan 2 menghasilkan 5, 12, dan 13",
            "caption": "Formula Euclid dengan m = 3 dan n = 2: m kuasa dua tolak n kuasa dua ialah 5, 2mn ialah 12, dan m kuasa dua tambah n kuasa dua ialah 13, memberikan tigaan 5, 12, 13.",
          },
        },
        "sec-proof": {
          "h2": "Bukti Matematik bagi Formula Euclid",
          "blocks": [
            {
              "kind": "p",
              "text": "Bukti algebra yang ringkas menunjukkan mengapakah formula Euclid tidak mungkin gagal.",
            },
            {
              "kind": "p",
              "text": "Mulakan dengan dua formula sisi tegak, [[a=m^2-n^2]] dan [[b=2mn]], dan uji sama ada [[a^2+b^2]] sama dengan [[c^2]] apabila [[c=m^2+n^2]]. Gantikan formula itu ke dalam sebelah kiri persamaan Pythagoras.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Kembangkan kedua-dua kuasa dua itu. Kuasa dua yang pertama berkembang menjadi [[m^4-2m^2n^2+n^4]] dan yang kedua menjadi [[4m^2n^2]], jadi hasil tambahnya menjadi ungkapan berikut.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Gabungkan sebutan tengah: [[-2m^2n^2+4m^2n^2]] ialah [[+2m^2n^2]]. Ungkapan itu kini merupakan kuasa dua sempurna yang tersembunyi.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Faktorkannya. Hasilnya ialah kuasa dua bagi [[m^2+n^2]], yang tepat-tepat [[c]].",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "Oleh sebab [[c=m^2+n^2]], sebelah kanan ialah [[c^2]], dan bukti itu lengkap.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Langkah utama ialah sebutan tengah yang sebahagiannya saling membatalkan: [[-2m^2n^2]] daripada kuasa dua yang pertama dan [[+4m^2n^2]] daripada kuasa dua yang kedua meninggalkan tepat-tepat [[+2m^2n^2]] yang diperlukan untuk melengkapkan kuasa dua itu. Oleh sebab ini berfungsi untuk mana-mana integer [[m]] dan [[n]] dengan [[m>n>0]], setiap pasangan menjana tigaan Pythagoras yang tulen. Bukti ini tidak mengatakan apa-apa tentang keprimitifan: sama ada hasilnya primitif bergantung pada syarat tambahan dalam bahagian di bawah.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "Apakah Tigaan Pythagoras Primitif?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tigaan primitif ialah tigaan dalam bentuk yang paling ringkas, tanpa faktor sepunya.",
            },
            {
              "kind": "p",
              "text": "Tigaan Pythagoras primitif ialah tigaan yang ketiga-tiga panjang sisinya tidak mempunyai faktor integer positif sepunya yang lebih besar daripada [[1]]. Dalam simbol, pembahagi sepunya terbesar bagi ketiga-tiga sisi ialah [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "Tigaan [[(3, 4, 5)]] ialah primitif kerana [[\\gcd(3,4,5)=1]]: tiada integer yang lebih besar daripada [[1]] membahagi ketiga-tiga nombor itu. Hal yang sama berlaku bagi [[(5, 12, 13)]], [[(8, 15, 17)]], dan [[(7, 24, 25)]]. Setiap satunya ialah tigaan asas yang tidak boleh dikurangkan kepada tigaan nombor bulat yang lebih kecil melalui pembahagian.",
            },
            {
              "kind": "p",
              "text": "Primitif tidak bermaksud tigaan itu yang paling kecil dalam semua segi. Ia hanya bermaksud ketiga-tiga nilai itu tidak mempunyai faktor sepunya selain [[1]]. Tigaan primitif yang besar seperti [[(20, 21, 29)]] tetap primitif, kerana [[20]], [[21]], dan [[29]] tidak mempunyai pembahagi sepunya. Jadual di bawah membandingkan pembahagi bagi tigaan primitif dan salinan yang diskalakan.",
            },
          ],
          "table": {
            "headers": [
              "Tigaan",
              "Pembahagi sepunya",
              "Primitif?",
            ],
            "rows": [
              [
                "[[(3, 4, 5)]]",
                "[[1]]",
                "Ya",
              ],
              [
                "[[(5, 12, 13)]]",
                "[[1]]",
                "Ya",
              ],
              [
                "[[(8, 15, 17)]]",
                "[[1]]",
                "Ya",
              ],
              [
                "[[(6, 8, 10)]]",
                "[[1, 2]]",
                "Tidak",
              ],
              [
                "[[(9, 12, 15)]]",
                "[[1, 3]]",
                "Tidak",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-primitive-vs-scaled.svg",
            "alt": "Dua segi tiga bersudut tegak, 3-4-5 dan 6-8-10, menunjukkan yang kedua adalah dua kali ganda yang pertama dan hanya yang pertama primitif",
            "caption": "Segi tiga 3-4-5 ialah primitif, manakala 6-8-10 adalah dua kali ganda dalam setiap sisi: gcd(3, 4, 5) = 1, tetapi gcd(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "Apakah Tigaan Pythagoras Bukan Primitif?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tigaan bukan primitif ialah salinan yang diskalakan daripada tigaan primitif.",
            },
            {
              "kind": "p",
              "text": "Tigaan Pythagoras bukan primitif ialah tigaan yang ketiga-tiga nilainya mempunyai faktor integer sepunya yang lebih besar daripada [[1]]. Ia tetap tigaan yang sah, kerana ia memenuhi [[a^2+b^2=c^2]] dengan tepat. Ia cuma tidak dalam bentuk yang paling ringkas.",
            },
            {
              "kind": "p",
              "text": "Mulakan dengan tigaan primitif [[(3, 4, 5)]] dan darabkan setiap sisi dengan [[2]]. Hasilnya ialah [[(6, 8, 10)]], dan semakannya masih berfungsi: [[36+64=100]]. Darabkan dengan [[3]] pula dan hasilnya ialah [[(9, 12, 15)]], dengan [[81+144=225]]. Kedua-dua tigaan yang diskalakan itu sah, dan kedua-duanya bukan primitif, kerana yang pertama mempunyai faktor sepunya [[2]] dan yang kedua mempunyai faktor sepunya [[3]].",
            },
            {
              "kind": "p",
              "text": "Mencari faktor sepunya adalah mudah: ambil pembahagi sepunya terbesar bagi ketiga-tiga sisi. Bagi [[(6, 8, 10)]] ia ialah [[2]]; bagi [[(9, 12, 15)]] ia ialah [[3]]. Membahagikan setiap sisi dengan faktor itu memulihkan tigaan primitif di bawahnya. Jadi [[(6, 8, 10)]] dibahagi dengan [[2]] mengembalikan [[(3, 4, 5)]], dan [[(9, 12, 15)]] dibahagi dengan [[3]] juga mengembalikan [[(3, 4, 5)]]. Setiap tigaan bukan primitif berkurang kepada tepat satu tigaan primitif dengan cara ini.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "Syarat untuk Menjana Tigaan Pythagoras Primitif",
          "blocks": [
            {
              "kind": "p",
              "text": "Formula Euclid menghasilkan tigaan primitif hanya apabila kedua-dua syarat parameter dipenuhi.",
            },
            {
              "kind": "p",
              "text": "Dua syarat ke atas [[m]] dan [[n]] menentukan sama ada formula Euclid menghasilkan tigaan primitif. Kedua-duanya mesti dipenuhi pada masa yang sama, dan satu sahaja tidak mencukupi.",
            },
            {
              "kind": "h3",
              "text": "Syarat 1: Parameter koprima",
            },
            {
              "kind": "p",
              "text": "Parameter itu mestilah koprima, bermaksud ia tidak mempunyai faktor sepunya yang lebih besar daripada [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "Apabila [[m]] dan [[n]] mempunyai faktor sepunya, faktor itu meresap ke dalam ketiga-tiga sisi yang dijana. Sebagai contoh, [[m=4]] dan [[n=2]] mempunyai faktor sepunya [[2]], dan formula itu menghasilkan [[(12, 16, 20)]], yang sisinya semuanya mempunyai faktor sepunya [[4]]. Hasilnya bukan primitif.",
            },
            {
              "kind": "h3",
              "text": "Syarat 2: Pariti berlawanan",
            },
            {
              "kind": "p",
              "text": "Satu parameter mestilah genap dan satu lagi ganjil. Apabila kedua-dua parameter ganjil, sisi tegak dan hipotenus yang dijana semuanya genap, jadi tigaan itu mempunyai faktor sepunya [[2]] dan tidak boleh menjadi primitif. Sebagai contoh, [[m=3]] dan [[n=1]] adalah koprima tetapi kedua-duanya ganjil, dan formula itu menghasilkan [[(8, 6, 10)]], iaitu tigaan bukan primitif [[(6, 8, 10)]] dengan sisi tegak dalam susunan yang berbeza.",
            },
            {
              "kind": "p",
              "text": "Tiga pasangan parameter menunjukkan cara syarat-syarat itu berfungsi bersama. Pasangan [[(2, 1)]] adalah koprima dengan pariti berlawanan dan memberikan tigaan primitif [[(3, 4, 5)]]. Pasangan [[(3, 2)]] adalah koprima dengan pariti berlawanan dan memberikan tigaan primitif [[(5, 12, 13)]]. Pasangan [[(3, 1)]] adalah koprima tetapi kedua-duanya ganjil, jadi ia memberikan tigaan bukan primitif [[(6, 8, 10)]]. Kekoprimaan tanpa pariti berlawanan tidak mencukupi, dan pariti berlawanan tanpa kekoprimaan juga tidak mencukupi.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "Dua contoh parameter: m sama dengan 3 dan n sama dengan 2 memberikan 5-12-13 yang primitif, manakala m sama dengan 3 dan n sama dengan 1 memberikan 6-8-10 yang bukan primitif",
            "caption": "Parameter m = 3, n = 2 adalah koprima dengan pariti berlawanan dan memberikan 5-12-13 yang primitif. Parameter m = 3, n = 1 kedua-duanya ganjil dan memberikan 6-8-10 yang bukan primitif.",
          },
        },
        "sec-difference": {
          "h2": "Perbezaan Antara Tigaan Primitif dengan Tigaan Bukan Primitif",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorem yang sama, bentuk yang berbeza: satu jadual merumuskan keseluruhan perbezaan itu.",
            },
            {
              "kind": "p",
              "text": "Kedua-dua jenis tigaan memenuhi teorem Pythagoras dengan tepat, jadi kedua-duanya menggambarkan segi tiga bersudut tegak yang tulen. Perbezaannya hanya tentang faktor sepunya dan cara tigaan itu dihasilkan. Tigaan primitif ialah pola asas; tigaan bukan primitif biasanya gandaan bagi satu tigaan primitif.",
            },
          ],
          "table": {
            "headers": [
              "Ciri",
              "Primitif",
              "Bukan Primitif",
            ],
            "rows": [
              [
                "Pembahagi sepunya",
                "Hanya [[1]]",
                "Lebih besar daripada [[1]]",
              ],
              [
                "Panjang sisi",
                "Tidak boleh dikurangkan kepada tigaan integer yang lebih kecil",
                "Boleh dibahagi dengan faktor sepunya",
              ],
              [
                "Contoh",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Penjanaan",
                "[[m]], [[n]] koprima dengan pariti berlawanan",
                "Gabungan parameter lain atau gandaan integer",
              ],
              [
                "Hubungan",
                "Tigaan integer asas",
                "Selalunya gandaan bagi tigaan primitif",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "Cara Menjana Lebih Banyak Tigaan dengan Menskalakan Tigaan Sedia Ada",
          "blocks": [
            {
              "kind": "p",
              "text": "Darabkan setiap sisi dengan nombor bulat yang sama dan tigaan itu kekal sah.",
            },
            {
              "kind": "p",
              "text": "Bagi mana-mana integer positif [[k]], mendarabkan setiap sisi tigaan Pythagoras [[(a, b, c)]] dengan [[k]] memberikan satu lagi tigaan Pythagoras, [[(ka, kb, kc)]].",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "Sebabnya ialah algebra yang mudah. Mengkuasa duakan sisi tegak yang diskalakan memberikan [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]], dan memfaktorkan [[k^2]] memberikan [[k^2(a^2+b^2)]]. Oleh sebab tigaan asal memenuhi [[a^2+b^2=c^2]], hasil tambah yang diskalakan sama dengan [[k^2c^2]], iaitu [[(kc)^2]]. Tigaan yang diskalakan itu dengan itu memenuhi teorem dengan tepat.",
            },
            {
              "kind": "p",
              "text": "Menskalakan [[(3, 4, 5)]] dengan [[2]] memberikan [[(6, 8, 10)]], dan menskalakan dengan [[3]] memberikan [[(9, 12, 15)]]. Menskalakan [[(5, 12, 13)]] dengan [[2]] memberikan [[(10, 24, 26)]], dan menskalakan [[(8, 15, 17)]] dengan [[3]] memberikan [[(24, 45, 51)]]. Setiap hasilnya ialah tigaan yang sah, dan setiap satunya bukan primitif, kerana pengganda menjadi faktor sepunya bagi ketiga-tiga sisi.",
            },
            {
              "kind": "p",
              "text": "Pengganda integer mengekalkan panjang sisi nombor bulat, itulah sebabnya penskalaan ialah cara yang boleh dipercayai untuk membina tigaan baharu. Pengganda nyata sewenang-wenangnya, seperti [[1.5]], mengekalkan segi tiga itu sebagai segi tiga bersudut tegak dengan bentuk yang sama, tetapi sisinya mungkin berhenti menjadi nombor bulat: [[(3, 4, 5)]] yang diskalakan dengan [[1.5]] memberikan [[(4.5, 6, 7.5)]], iaitu segi tiga bersudut tegak tetapi bukan tigaan Pythagoras. Perhatikan bahawa kalkulator itu sendiri tidak mempunyai medan pengganda yang berasingan; penskalaan ialah pengiraan manual yang anda lakukan dengan tigaan yang disemak atau dijana olehnya.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "Tigaan 3-4-5 didarab dengan 2, 3, dan 4 untuk memberikan 6-8-10, 9-12-15, dan 12-16-20",
            "caption": "Menskalakan 3-4-5 dengan 2, 3, dan 4 memberikan 6-8-10, 9-12-15, dan 12-16-20. Setiap set yang diskalakan masih merupakan tigaan Pythagoras yang sah.",
          },
        },
        "sec-examples": {
          "h2": "Contoh Tigaan Pythagoras yang Lazim",
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh tigaan yang wajar dihafal, setiap satunya disahkan.",
            },
            {
              "kind": "p",
              "text": "Jadual di bawah menyenaraikan sepuluh tigaan Pythagoras yang terkenal. Setiap baris telah disemak dengan teorem Pythagoras, dan setiap baris adalah primitif kecuali jika gandaan yang diskalakan dinyatakan. Sisi tegak dalam setiap baris boleh disenaraikan dalam mana-mana susunan: [[(4, 3, 5)]] ialah segi tiga yang sama dengan [[(3, 4, 5)]].",
            },
          ],
          "table": {
            "headers": [
              "Sisi tegak pertama",
              "Sisi tegak kedua",
              "Hipotenus",
            ],
            "rows": [
              [
                "[[3]]",
                "[[4]]",
                "[[5]]",
              ],
              [
                "[[5]]",
                "[[12]]",
                "[[13]]",
              ],
              [
                "[[8]]",
                "[[15]]",
                "[[17]]",
              ],
              [
                "[[7]]",
                "[[24]]",
                "[[25]]",
              ],
              [
                "[[20]]",
                "[[21]]",
                "[[29]]",
              ],
              [
                "[[12]]",
                "[[35]]",
                "[[37]]",
              ],
              [
                "[[9]]",
                "[[40]]",
                "[[41]]",
              ],
              [
                "[[28]]",
                "[[45]]",
                "[[53]]",
              ],
              [
                "[[11]]",
                "[[60]]",
                "[[61]]",
              ],
              [
                "[[16]]",
                "[[63]]",
                "[[65]]",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-compare.svg",
            "alt": "Tiga segi tiga bersudut tegak yang dilukis mengikut skala: 3-4-5, 5-12-13, dan 8-15-17, menunjukkan bentuk yang berbeza",
            "caption": "Tiga tigaan primitif yang dilukis mengikut skala: 3-4-5, 5-12-13, dan 8-15-17. Setiap satunya mempunyai bentuk dan sudut tirus yang berbeza.",
          },
        },
        "sec-worked": {
          "h2": "Contoh Kerja Langkah demi Langkah Menggunakan Kalkulator",
          "blocks": [
            {
              "kind": "p",
              "text": "Lapan contoh yang meliputi kedua-dua mod: empat semakan dan empat penjanaan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Semak 3, 4, 5",
            },
            {
              "kind": "p",
              "text": "Masukkan [[a=3]], [[b=4]], dan [[c=5]] dalam mod semak. Kuasa duakan sisi tegak dan tambahkan: [[3^2+4^2=9+16=25]]. Kuasa duakan hipotenus: [[5^2=25]]. Oleh sebab [[25=25]], hasilnya ialah tigaan yang sah. Ia primitif, kerana [[3]], [[4]], dan [[5]] tidak mempunyai faktor sepunya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Semak 5, 12, 13",
            },
            {
              "kind": "p",
              "text": "Masukkan [[a=5]], [[b=12]], dan [[c=13]]. Sisi tegak memberikan [[5^2+12^2=25+144=169]], dan hipotenus memberikan [[13^2=169]]. Oleh sebab [[169=169]], hasilnya ialah tigaan yang sah. Ia primitif, kerana [[\\gcd(5,12,13)=1]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Semak 6, 8, 10",
            },
            {
              "kind": "p",
              "text": "Masukkan [[a=6]], [[b=8]], dan [[c=10]]. Sisi tegak memberikan [[6^2+8^2=36+64=100]], dan hipotenus memberikan [[10^2=100]]. Oleh sebab [[100=100]], hasilnya ialah tigaan yang sah. Ia bukan primitif, kerana ketiga-tiga sisi mempunyai faktor sepunya [[2]]; membahagi dengan [[2]] mengembalikan tigaan primitif [[(3, 4, 5)]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Semak 7, 24, 25",
            },
            {
              "kind": "p",
              "text": "Masukkan [[a=7]], [[b=24]], dan [[c=25]]. Sisi tegak memberikan [[7^2+24^2=49+576=625]], dan hipotenus memberikan [[25^2=625]]. Oleh sebab [[625=625]], hasilnya ialah tigaan yang sah. Ia primitif, kerana [[7]], [[24]], dan [[25]] tidak mempunyai faktor sepunya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Jana menggunakan m = 2, n = 1",
            },
            {
              "kind": "p",
              "text": "Masukkan [[m=2]] dan [[n=1]] dalam mod jana. Sisi tegak yang pertama ialah [[a=2^2-1^2=3]], sisi tegak yang kedua ialah [[b=2(2)(1)=4]], dan hipotenus ialah [[c=2^2+1^2=5]]. Hasilnya ialah [[(3, 4, 5)]], tigaan primitif.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Jana menggunakan m = 3, n = 2",
            },
            {
              "kind": "p",
              "text": "Masukkan [[m=3]] dan [[n=2]]. Sisi tegak yang pertama ialah [[a=3^2-2^2=9-4=5]], sisi tegak yang kedua ialah [[b=2(3)(2)=12]], dan hipotenus ialah [[c=3^2+2^2=13]]. Hasilnya ialah [[(5, 12, 13)]], tigaan primitif, kerana [[3]] dan [[2]] adalah koprima dengan pariti berlawanan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Jana menggunakan m = 4, n = 1",
            },
            {
              "kind": "p",
              "text": "Masukkan [[m=4]] dan [[n=1]]. Formula itu memberikan [[a=4^2-1^2=15]], [[b=2(4)(1)=8]], dan [[c=4^2+1^2=17]]. Disenaraikan dengan sisi tegak dalam susunan menaik, hasilnya ialah [[(8, 15, 17)]]. Ia primitif, kerana [[4]] dan [[1]] adalah koprima dengan pariti berlawanan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Jana menggunakan m = 3, n = 1",
            },
            {
              "kind": "p",
              "text": "Masukkan [[m=3]] dan [[n=1]]. Formula itu memberikan [[a=3^2-1^2=8]], [[b=2(3)(1)=6]], dan [[c=3^2+1^2=10]]. Disenaraikan dengan sisi tegak dalam susunan menaik, hasilnya ialah [[(6, 8, 10)]]. Tigaan ini bukan primitif: [[3]] dan [[1]] adalah koprima, tetapi kedua-duanya ganjil, jadi syarat pariti berlawanan gagal dan setiap sisi menjadi genap. Membahagi dengan [[2]] mengembalikan tigaan primitif [[(3, 4, 5)]].",
            },
          ],
        },
        "sec-infinite": {
          "h2": "Mengapakah Terdapat Tigaan Pythagoras yang Tidak Terhingga Banyaknya?",
          "blocks": [
            {
              "kind": "p",
              "text": "Formula Euclid tidak pernah kehabisan input, jadi ia tidak pernah kehabisan tigaan.",
            },
            {
              "kind": "p",
              "text": "Formula Euclid menerima mana-mana pasangan integer positif [[m]] dan [[n]] dengan [[m]] lebih besar daripada [[n]], dan terdapat pasangan sedemikian yang tidak terhingga banyaknya. Setiap pasangan baharu menghasilkan tigaan, dan pasangan yang berbeza biasanya menghasilkan tigaan yang berbeza. Pasangan [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]], dan [[(5, 2)]] memberikan [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]], dan [[(20, 21, 29)]] masing-masing, dan senarai itu berterusan: [[(5, 4)]] memberikan [[(9, 40, 41)]], dan [[(6, 1)]] memberikan [[(12, 35, 37)]]. Nilai [[m]] yang lebih besar terus menghasilkan tigaan yang lebih besar tanpa henti.",
            },
            {
              "kind": "p",
              "text": "Gandaan integer menambah lebih banyak lagi. Setiap tigaan primitif menjana seluruh keluarga salinan yang diskalakan: [[(3, 4, 5)]] sahaja memberikan [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]], dan seterusnya selama-lamanya. Antara pasangan parameter yang tidak berkesudahan dan gandaan yang tidak berkesudahan, bekalan tigaan Pythagoras adalah tidak terhingga. Perhatikan perkataan yang teliti: bukan setiap pasangan parameter menghasilkan tigaan primitif, tetapi setiap pasangan menghasilkan tigaan yang sah, dan tigaan primitif juga tidak terhingga banyaknya.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "Cara Mengenal Tigaan Pythagoras Tanpa Meneka",
          "blocks": [
            {
              "kind": "p",
              "text": "Beberapa tabiat menjadikan tigaan yang biasa mudah dikenali sebelum anda mengira.",
            },
            {
              "kind": "p",
              "text": "Mulakan dengan menganggap nilai yang terbesar sebagai hipotenus dan membandingkan nilai kuasa dua, tepat seperti yang diterangkan dalam langkah penyemakan. Dengan latihan, tigaan yang biasa menjadi mudah dikenali: [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]], dan [[7]]-[[24]]-[[25]] muncul begitu kerap dalam buku teks dan peperiksaan sehingga mengenalinya menjimatkan masa sebenar.",
            },
            {
              "kind": "p",
              "text": "Cari faktor sepunya seterusnya. Jika ketiga-tiga nombor genap, bahagikan dengan [[2]] dan lihat apa yang tinggal. Set [[6]]-[[8]]-[[10]] serta-merta dikenali sebagai dua kali ganda [[3]]-[[4]]-[[5]] apabila faktor [[2]] dikesan. Mengurangkan tigaan bukan primitif kepada bentuk primitifnya sering mendedahkan pola biasa yang tersembunyi di sebalik nombor yang lebih besar.",
            },
            {
              "kind": "p",
              "text": "Apabila anda memerlukan tigaan baharu dan bukannya semakan, formula Euclid ialah laluan yang boleh dipercayai: pilih nilai kecil bagi [[m]] dan [[n]] dan jana. Pengecaman ialah jalan pintas yang membantu, tetapi pengesahan yang tepat sentiasa menjadi kata putus. Tigaan yang kelihatan biasa masih wajar menjalani ujian kuasa dua dan banding sebelum anda bergantung padanya.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Tigaan Pythagoras dan Segi Tiga Bersudut Tegak Biasa",
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap tigaan ialah segi tiga bersudut tegak, tetapi kebanyakan segi tiga bersudut tegak bukan tigaan.",
            },
            {
              "kind": "p",
              "text": "Segi tiga bersudut tegak boleh mempunyai panjang sisi integer, panjang sisi perpuluhan, atau panjang sisi tidak nisbah. Hanya kategori pertama boleh membentuk tigaan Pythagoras. Tigaan [[(3, 4, 5)]] ialah segi tiga bersudut tegak integer, dan ia layak. Segi tiga dengan sisi tegak [[1]] dan [[1]] serta hipotenus [[\\sqrt{2}]] ialah segi tiga bersudut tegak yang tulen, kerana [[1+1=2]], tetapi hipotenusnya tidak nisbah, jadi ia bukan tigaan. Segi tiga dengan sisi [[3]], [[4]], dan [[5.1]] gagal memenuhi persamaan itu, kerana [[9+16=25]] dan [[5.1^2=26.01]], jadi ia bukan segi tiga bersudut tegak pun.",
            },
            {
              "kind": "p",
              "text": "Perbezaan ini penting dalam amalan. Pembina menggunakan [[3]]-[[4]]-[[5]] kerana nombor bulat mudah diukur dengan pita pengukur. Segi tiga dengan sisi [[3]], [[4]], dan [[5.1]] kelihatan hampir tepat tetapi tersasar dengan sudut yang ketara, dan tiada semakan nombor bulat akan meluluskannya. Teorem Pythagoras terpakai kepada semua segi tiga bersudut tegak, apa pun panjang sisinya. Istilah tigaan Pythagoras merujuk hanya kepada penyelesaian integer positif, dan makna yang sempit itulah yang menjadikan tigaan istimewa.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Kesilapan Lazim Ketika Menggunakan Kalkulator Tigaan Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Lima belas kesilapan, setiap satunya berserta pembetulannya.",
            },
            {
              "kind": "list",
              "items": [
                "Memasukkan [[c]] sebagai sisi yang lebih kecil: hipotenus mestilah nilai yang terbesar, jadi sentiasa tetapkan nombor yang terbesar sebagai [[c]] sebelum menyemak.",
                "Lupa mengkuasa duakan nilai: teorem itu membandingkan kuasa dua, bukan panjang sisi itu sendiri, jadi kuasa duakan [[a]], [[b]], dan [[c]] dahulu.",
                "Menambah sisi dan bukannya kuasa duanya: [[a+b]] ialah hasil tambah yang salah; semakan itu memerlukan [[a^2+b^2]] berbanding [[c^2]].",
                "Menggunakan [[a+b=c]] dan bukannya [[a^2+b^2=c^2]]: hasil tambah biasa dua sisi tidak pernah sama dengan hipotenus dalam segi tiga bersudut tegak.",
                "Mengelirukan hipotenus dengan sisi tegak: hipotenus terletak bertentangan dengan sudut tegak dan sentiasa sisi yang paling panjang.",
                "Menggunakan nilai perpuluhan dan mengharapkan tigaan integer: perpuluhan boleh membentuk segi tiga bersudut tegak, tetapi hanya integer positif membentuk tigaan Pythagoras.",
                "Memasukkan panjang sisi sifar atau negatif: panjang sisi mestilah positif, dan input sifar atau negatif ditolak.",
                "Menggunakan [[m]] sama dengan [[n]]: sisi tegak yang pertama menjadi [[m^2-n^2=0]], yang bukan sisi segi tiga.",
                "Menggunakan [[m]] lebih kecil daripada [[n]]: sisi tegak yang pertama menjadi negatif, yang mustahil bagi panjang sisi.",
                "Memasukkan nilai [[m]] dan [[n]] yang perpuluhan: formula Euclid memerlukan parameter integer positif untuk menghasilkan sisi integer.",
                "Menganggap setiap tigaan yang dijana adalah primitif: penjanaan hanya menjamin tigaan yang sah, dan keprimitifan memerlukan parameter koprima dengan pariti berlawanan.",
                "Menganggap semua tigaan primitif adalah gandaan bagi [[3]]-[[4]]-[[5]]: [[5]]-[[12]]-[[13]] dan [[8]]-[[15]]-[[17]] ialah tigaan primitif yang bebas, bukan gandaan bagi [[3]]-[[4]]-[[5]].",
                "Lupa syarat pariti berlawanan: dua parameter ganjil menghasilkan tigaan genap yang bukan primitif, seperti yang ditunjukkan oleh [[m=3]], [[n=1]].",
                "Lupa menyemak faktor sepunya: tigaan seperti [[(12, 16, 20)]] kelihatan baharu sehingga faktor sepunya [[4]] mendedahkannya sebagai [[(3, 4, 5)]] yang diskalakan.",
                "Mengelirukan segi tiga bersudut tegak yang sah dengan tigaan Pythagoras integer: segi tiga dengan sisi tidak nisbah atau perpuluhan boleh memenuhi teorem itu tanpa menjadi tigaan.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Soalan Latihan Berserta Jawapan",
          "blocks": [
            {
              "kind": "p",
              "text": "Lapan soalan, empat semakan dan empat penjanaan, berserta penyelesaian penuh.",
            },
            {
              "kind": "list",
              "items": [
                "Semak sama ada [[8]], [[15]], dan [[17]] membentuk tigaan. Jawapan: ya, primitif. [[8^2+15^2=64+225=289=17^2]], dan ketiga-tiga nombor itu tidak mempunyai faktor sepunya.",
                "Semak sama ada [[6]], [[8]], dan [[11]] membentuk tigaan. Jawapan: tidak. [[6^2+8^2=36+64=100]], tetapi [[11^2=121]], jadi kedua-dua belah berbeza.",
                "Kenal pasti sama ada [[9]], [[12]], dan [[15]] adalah primitif. Jawapan: bukan primitif. Nombor-nombor itu mempunyai faktor sepunya [[3]], dan membahagi dengan [[3]] memberikan tigaan primitif [[(3, 4, 5)]].",
                "Jana tigaan menggunakan [[m=2]] dan [[n=1]]. Jawapan: [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "Jana tigaan menggunakan [[m=3]] dan [[n=2]]. Jawapan: [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "Jana tigaan menggunakan [[m=4]] dan [[n=1]]. Jawapan: [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]], dengan sisi tegak disusun menaik.",
                "Kenal pasti sama ada [[m=3]] dan [[n=1]] menghasilkan tigaan primitif. Jawapan: tidak. Parameter itu koprima tetapi kedua-duanya ganjil, jadi hasilnya ialah tigaan bukan primitif [[(6, 8, 10)]].",
                "Cari pengganda sepunya antara [[3]]-[[4]]-[[5]] dan [[15]]-[[20]]-[[25]]. Jawapan: [[5]]. Setiap sisi [[(3, 4, 5)]] didarab dengan [[5]] memberikan [[(15, 20, 25)]].",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "relatedIntro": "Setiap kalkulator di bawah mengendalikan tugas segi tiga bersudut tegak yang berbeza, jadi pilih alat yang sepadan dengan ukuran yang anda perlukan.",
      "relatedItems": [
        "Kalkulator Segi Tiga Bersudut Tegak",
        "Kalkulator Teorem Pythagoras",
        "Kalkulator Segi Tiga 3-4-5",
        "Kalkulator Segi Tiga 5-12-13",
        "Kalkulator Sisi Segi Tiga Bersudut Tegak",
        "Kalkulator Segi Tiga Bersudut Tegak Khas",
      ],
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "question": "Apakah tigaan Pythagoras?",
          "answer": "Tigaan Pythagoras ialah satu set tiga nombor bulat positif, ditulis [[(a, b, c)]], yang memenuhi persamaan [[a^2+b^2=c^2]]. Dua nombor yang lebih kecil ialah sisi tegak bagi segi tiga bersudut tegak dan yang terbesar ialah hipotenus. Contoh yang paling terkenal ialah [[(3, 4, 5)]], kerana [[9+16=25]].",
        },
        {
          "question": "Bagaimanakah Kalkulator Tigaan Pythagoras berfungsi?",
          "answer": "Ia mempunyai dua mod. Mod semak mengambil tiga nombor bulat dan menguji sama ada [[a^2+b^2=c^2]] dipenuhi. Mod jana mengambil dua integer, [[m]] dan [[n]], dan menggunakan formula Euclid untuk membina tigaan baharu. Kedua-dua mod menunjukkan langkah kerja berserta keputusan.",
        },
        {
          "question": "Bagaimanakah saya boleh menyemak sama ada tiga nombor membentuk tigaan Pythagoras?",
          "answer": "Ambil nilai yang terbesar sebagai hipotenus [[c]] dan dua yang lain sebagai sisi tegak [[a]] dan [[b]]. Kuasa duakan ketiga-tiganya, tambahkan [[a^2+b^2]], dan bandingkan dengan [[c^2]]. Jumlah yang sama bermaksud tigaan yang sah; jumlah yang tidak sama bermaksud nombor-nombor itu tidak membentuk tigaan.",
        },
        {
          "question": "Apakah formula Euclid?",
          "answer": "Formula Euclid menjana tigaan Pythagoras daripada dua integer positif, [[m]] dan [[n]], dengan [[m]] lebih besar daripada [[n]]. Formulanya ialah [[a=m^2-n^2]], [[b=2mn]], dan [[c=m^2+n^2]]. Setiap pasangan menghasilkan tigaan yang sah, seperti yang ditunjukkan oleh bukti algebra di halaman ini.",
        },
        {
          "question": "Apakah m dan n dalam formula tigaan Pythagoras?",
          "answer": "Nilai [[m]] dan [[n]] ialah parameter integer positif dalam formula Euclid. Nilai [[m]] ialah integer yang lebih besar dan [[n]] ialah yang lebih kecil, dengan [[m>n>0]]. Nilai [[m]] yang lebih besar menghasilkan tigaan yang lebih besar, dan pasangan yang berbeza menghasilkan tigaan yang berbeza.",
        },
        {
          "question": "Apakah tigaan Pythagoras primitif?",
          "answer": "Tigaan primitif ialah tigaan yang ketiga-tiga panjang sisinya tidak mempunyai faktor sepunya yang lebih besar daripada [[1]], jadi [[\\gcd(a,b,c)=1]]. Contohnya termasuk [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], dan [[(7, 24, 25)]]. Tigaan primitif tidak boleh dikurangkan kepada tigaan nombor bulat yang lebih kecil.",
        },
        {
          "question": "Apakah tigaan Pythagoras bukan primitif?",
          "answer": "Tigaan bukan primitif ialah tigaan yang sah yang ketiga-tiga sisinya mempunyai faktor sepunya yang lebih besar daripada [[1]]. Sebagai contoh, [[(6, 8, 10)]] ialah dua kali ganda [[(3, 4, 5)]] dan [[(9, 12, 15)]] ialah tiga kali ganda [[(3, 4, 5)]]. Membahagi dengan faktor sepunya mengembalikan tigaan primitif di bawahnya.",
        },
        {
          "question": "Bagaimanakah saya tahu sama ada tigaan yang dijana adalah primitif?",
          "answer": "Semak dua syarat parameter: [[m]] dan [[n]] mestilah koprima, jadi [[\\gcd(m,n)=1]], dan ia mestilah mempunyai pariti berlawanan, jadi satu genap dan satu lagi ganjil. Jika kedua-dua syarat dipenuhi, tigaan yang dijana adalah primitif. Jika salah satu gagal, ia bukan primitif.",
        },
        {
          "question": "Bolehkah nombor perpuluhan membentuk tigaan Pythagoras?",
          "answer": "Tidak. Tigaan Pythagoras ditakrifkan sebagai tiga integer positif, jadi panjang sisi perpuluhan tidak pernah layak. Perpuluhan masih boleh membentuk segi tiga bersudut tegak yang memenuhi [[a^2+b^2=c^2]], seperti sisi tegak [[1.5]] dan [[2]] dengan hipotenus [[2.5]], tetapi segi tiga itu bukan tigaan Pythagoras.",
        },
        {
          "question": "Adakah terdapat tigaan Pythagoras yang tidak terhingga banyaknya?",
          "answer": "Ya. Formula Euclid menerima pasangan integer [[(m, n)]] yang tidak terhingga banyaknya, dan setiap pasangan menghasilkan tigaan. Gandaan integer menambah lebih banyak lagi: setiap tigaan primitif menjana keluarga salinan yang diskalakan yang tidak berkesudahan. Bekalan tigaan tidak pernah habis.",
        },
        {
          "question": "Bolehkah setiap tigaan Pythagoras dijana menggunakan formula Euclid?",
          "answer": "Ya, setiap tigaan primitif berasal daripada formula Euclid dengan parameter koprima yang sesuai dengan pariti berlawanan, dan setiap tigaan bukan primitif ialah gandaan bagi tigaan primitif. Jadi setiap tigaan Pythagoras boleh dicapai melalui formula Euclid ditambah penskalaan dengan integer positif.",
        },
        {
          "question": "Apakah tigaan Pythagoras yang paling lazim?",
          "answer": "Tigaan [[(3, 4, 5)]] ialah yang paling lazim dan paling terkenal. Ia ialah tigaan primitif yang paling kecil, ia mudah diingat, dan pembina serta tukang kayu telah menggunakannya selama berabad-abad untuk menyemak sudut tepat. Yang seterusnya paling dikenali ialah [[(5, 12, 13)]] dan [[(8, 15, 17)]].",
        },
      ],
    },
};
