// pythagoreanTriplesGuideTranslations.bid.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B5_ID = {
  "id": {
      "meta": {
        "title": "Kalkulator Tripel Pythagoras - Periksa dan Hasilkan Tripel",
        "description": "Periksa apakah tiga bilangan bulat membentuk tripel Pythagoras dan hasilkan tripel dengan rumus Euclid. Pelajari tripel primitif, penskalaan, dan contoh soal yang dikerjakan.",
        "primaryKeyword": "Kalkulator Tripel Pythagoras",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Navigasi Bagian",
      "tocItems": {
        "sec-intro": "Kalkulator Tripel Pythagoras",
        "sec-calculate": "Memeriksa atau Menghasilkan Tripel Pythagoras dengan Kalkulator",
        "sec-what": "Apa Itu Tripel Pythagoras?",
        "sec-pythagorean": "Memahami Teorema Pythagoras",
        "sec-check": "Cara Memeriksa Apakah Tiga Bilangan Membentuk Tripel Pythagoras",
        "sec-euclid": "Cara Menghasilkan Tripel Pythagoras Menggunakan Rumus Euclid",
        "sec-proof": "Pembuktian Matematis Rumus Euclid",
        "sec-primitive": "Apa Itu Tripel Pythagoras Primitif?",
        "sec-nonprimitive": "Apa Itu Tripel Pythagoras Non-Primitif?",
        "sec-conditions": "Syarat untuk Menghasilkan Tripel Pythagoras Primitif",
        "sec-difference": "Perbedaan antara Tripel Primitif dan Non-Primitif",
        "sec-scaling": "Cara Menghasilkan Lebih Banyak Tripel dengan Penskalaan",
        "sec-examples": "Contoh Tripel Pythagoras yang Umum",
        "sec-worked": "Contoh Soal Langkah demi Langkah Menggunakan Kalkulator",
        "sec-infinite": "Mengapa Tripel Pythagoras Tak Terhingga Banyaknya?",
        "sec-recognize": "Cara Mengenali Tripel Pythagoras Tanpa Menebak",
        "sec-ordinary": "Tripel Pythagoras dan Segitiga Siku-Siku Biasa",
        "sec-mistakes": "Kesalahan Umum Saat Menggunakan Kalkulator Tripel Pythagoras",
        "sec-practice": "Soal Latihan Beserta Jawaban",
        "sec-related": "Kalkulator Segitiga Siku-Siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Tripel Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Periksa tripel bilangan bulat dan hasilkan tripel baru dengan rumus Euclid.",
            },
            {
              "kind": "p",
              "text": "Tripel Pythagoras adalah sekumpulan tiga bilangan bulat positif yang dapat menjadi sisi-sisi segitiga siku-siku. Dua bilangan yang lebih pendek adalah kaki-kaki segitiga, bilangan terbesar adalah hipotenusa, dan ketiga nilai tersebut memenuhi teorema Pythagoras.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Kalkulator Tripel Pythagoras mengerjakan dua tugas. Dalam mode periksa, Anda memasukkan tiga bilangan bulat dan kalkulator menguji apakah ketiganya membentuk tripel yang valid. Dalam mode hasilkan, Anda memasukkan dua bilangan bulat, [[m]] dan [[n]], dan kalkulator membangun tripel baru dengan rumus Euclid. Memeriksa dan menghasilkan adalah dua tugas yang berbeda, dan halaman ini menjelaskan keduanya, langkah demi langkah.",
            },
            {
              "kind": "p",
              "text": "Contoh yang paling dikenal adalah [[3]], [[4]], dan [[5]]. Mengkuadratkan dan menjumlahkan kaki-kakinya menghasilkan [[3^2+4^2=9+16=25]], yang sama dengan [[5^2]]. Karena kedua sisi sama persis, [[(3, 4, 5)]] adalah tripel yang valid. Tripel primitif adalah tripel yang ketiga bilangannya tidak memiliki faktor persekutuan lebih besar dari [[1]]; [[3]], [[4]], dan [[5]] tidak memiliki kesamaan, jadi [[(3, 4, 5)]] adalah primitif. Bagian-bagian di bawah ini menunjukkan cara memeriksa tiga bilangan apa pun, cara menghasilkan tripel sebesar apa pun, dan cara membedakan tripel primitif dari salinan yang diskalakan.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Memeriksa atau Menghasilkan Tripel Pythagoras dengan Kalkulator",
          "blocks": [
            {
              "kind": "p",
              "text": "Dua mode, satu halaman: periksa sekumpulan bilangan, atau bangun tripel baru.",
            },
            {
              "kind": "h3",
              "text": "Mode 1: Memeriksa Tripel Pythagoras",
            },
            {
              "kind": "p",
              "text": "Masukkan ketiga panjang sisi sebagai [[a]], [[b]], dan [[c]], dengan [[c]] sebagai nilai terbesar. Kalkulator mengkuadratkan [[a]] dan [[b]], menjumlahkan hasilnya, mengkuadratkan [[c]], dan membandingkan kedua sisi persamaan.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Jika kedua sisi sama, ketiga bilangan tersebut membentuk tripel Pythagoras yang valid, dan hasilnya menyatakan demikian. Jika berbeda, bilangan-bilangan tersebut tidak membentuk tripel, dan hasilnya menunjukkan kedua total yang tidak sama sehingga Anda dapat melihat seberapa jauh selisihnya. Ketiga masukan harus bilangan bulat positif, dan ketiganya harus menggunakan satuan yang sama.",
            },
            {
              "kind": "h3",
              "text": "Mode 2: Menghasilkan Tripel Pythagoras",
            },
            {
              "kind": "p",
              "text": "Masukkan dua bilangan bulat positif, [[m]] dan [[n]], dengan [[m]] lebih besar dari [[n]]. Kalkulator menerapkan rumus Euclid untuk menghasilkan tiga panjang sisi bilangan bulat.",
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
              "text": "Hasilnya selalu tripel yang valid, karena rumus Euclid memang dirancang untuk memenuhi teorema Pythagoras. Kedua kaki dapat muncul dalam urutan mana pun, tetapi [[c]] selalu hipotenusa. Untuk menggunakan kalkulator, pilih mode, masukkan bilangan yang valid, klik Hitung, dan baca hasilnya beserta langkah-langkah pengerjaannya. Klik Atur Ulang untuk mengosongkan kolom dan memulai lagi.",
            },
          ],
        },
        "sec-what": {
          "h2": "Apa Itu Tripel Pythagoras?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tiga bilangan bulat positif yang memenuhi teorema Pythagoras secara tepat.",
            },
            {
              "kind": "p",
              "text": "Tripel Pythagoras adalah sekumpulan tiga bilangan bulat positif, ditulis [[(a, b, c)]], yang memenuhi persamaan [[a^2+b^2=c^2]]. Di sini [[a]] dan [[b]] adalah kaki-kaki, dua sisi yang bertemu pada sudut siku-siku, dan [[c]] adalah hipotenusa, sisi di seberang sudut siku-siku dan selalu yang terpanjang dari ketiganya.",
            },
            {
              "kind": "p",
              "text": "Persamaan harus berlaku secara tepat. Hampir benar saja bukan tripel: jika jumlah kuadrat kaki-kaki berbeda dari kuadrat hipotenusa walau hanya satu satuan, ketiga bilangan itu gagal dalam pengujian. Kesamaan yang ketat inilah yang membuat tripel berguna dalam pembangunan dan pertukangan, di mana pemeriksaan [[3]]-[[4]]-[[5]] menandai sudut yang siku-siku tanpa kesalahan pengukuran.",
            },
            {
              "kind": "p",
              "text": "Ketiga bilangan harus bulat dan positif. Segitiga siku-siku dengan panjang sisi desimal, seperti kaki [[1.5]] dan [[2]] dengan hipotenusa [[2.5]], memenuhi teorema Pythagoras tetapi bukan tripel Pythagoras, karena definisinya mensyaratkan bilangan bulat. Demikian pula, segitiga dengan sisi irasional, seperti kaki [[1]] dan [[1]] dengan hipotenusa [[\\sqrt{2}]], adalah segitiga siku-siku tetapi bukan tripel. Istilah tripel hanya digunakan untuk solusi bilangan bulat positif.",
            },
            {
              "kind": "p",
              "text": "Tripel [[(3, 4, 5)]] adalah contoh pertama yang wajar. Kaki-kakinya adalah [[3]] dan [[4]], hipotenusanya [[5]], dan [[9+16=25]] mengonfirmasi persamaan tersebut. Urutan kaki tidak penting: [[(4, 3, 5)]] menggambarkan segitiga yang sama. Yang penting adalah dua bilangan yang lebih kecil adalah kaki-kaki dan bilangan terbesar adalah hipotenusa.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Persegi-persegi yang digambar pada sisi 3, 4, dan 5 dengan luas 9, 16, dan 25, menunjukkan 9 ditambah 16 sama dengan 25",
            "caption": "Persegi pada sisi 3, 4, dan 5 memiliki luas 9, 16, dan 25. Karena 9 + 16 = 25, bilangan 3, 4, dan 5 membentuk tripel Pythagoras.",
          },
        },
        "sec-pythagorean": {
          "h2": "Memahami Teorema Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema di balik setiap tripel: kuadrat kaki-kaki dijumlahkan sama dengan kuadrat hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Teorema Pythagoras menyatakan bahwa pada segitiga siku-siku apa pun, kuadrat hipotenusa sama dengan jumlah kuadrat kedua sisi lainnya. Dengan kaki [[a]] dan [[b]] serta hipotenusa [[c]], teorema tersebut berbunyi sebagai berikut.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Salah satu cara yang jelas untuk memahaminya adalah melalui luas. Gambarlah sebuah persegi pada setiap sisi segitiga. Persegi pada kaki [[a]] memiliki luas [[a^2]], persegi pada kaki [[b]] memiliki luas [[b^2]], dan persegi pada hipotenusa memiliki luas [[c^2]]. Teorema menyatakan bahwa dua luas pertama dijumlahkan sama dengan luas ketiga. Untuk segitiga [[3]]-[[4]]-[[5]], persegi-persegi tersebut memiliki luas [[9]], [[16]], dan [[25]], dan [[9+16=25]] menunjukkan keseimbangan itu secara langsung.",
            },
            {
              "kind": "p",
              "text": "Gambaran luas itu juga menjelaskan mengapa [[3]]-[[4]]-[[5]] adalah segitiga siku-siku yang valid. Panjang sisinya memenuhi keseimbangan luas secara tepat, sehingga sudut antara kedua kakinya pasti sudut siku-siku. Setiap tripel Pythagoras memenuhi teorema ini, karena tripel didefinisikan oleh persamaan tersebut. Sebaliknya tidak berlaku: banyak segitiga siku-siku memiliki panjang sisi yang bukan bilangan bulat, sehingga memenuhi teorema tanpa menjadi tripel. Gunakan <a href=\"/pythagorean-theorem-calculator/\">kalkulator teorema Pythagoras</a> ketika segitiga memiliki sisi desimal atau sisi yang tidak diketahui, bukan tripel bilangan bulat.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "Segitiga siku-siku ABC dengan kaki a sama dengan 3 dan b sama dengan 4, hipotenusa c sama dengan 5, penanda sudut siku-siku, dan rumus a kuadrat ditambah b kuadrat sama dengan c kuadrat",
            "caption": "Segitiga siku-siku ABC dengan kaki a = 3 dan b = 4 serta hipotenusa c = 5. Penanda sudut siku-siku terletak di C, dan 3 kuadrat ditambah 4 kuadrat sama dengan 5 kuadrat.",
          },
        },
        "sec-check": {
          "h2": "Cara Memeriksa Apakah Tiga Bilangan Membentuk Tripel Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Delapan langkah singkat mengubah tiga bilangan bulat apa pun menjadi jawaban ya atau tidak yang jelas.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tentukan nilai terbesar dari ketiga nilai tersebut.",
                "Tetapkan nilai terbesar sebagai [[c]], hipotenusa.",
                "Tetapkan dua nilai lainnya sebagai [[a]] dan [[b]], kaki-kaki segitiga.",
                "Kuadratkan [[a]].",
                "Kuadratkan [[b]].",
                "Jumlahkan kedua kuadrat tersebut.",
                "Kuadratkan [[c]].",
                "Bandingkan kedua hasil: sama berarti tripel yang valid, tidak sama berarti bukan tripel.",
              ],
            },
            {
              "kind": "p",
              "text": "Berikut contoh yang valid. Periksa [[7]], [[24]], dan [[25]]: nilai terbesar adalah [[25]], jadi itulah hipotenusanya. Kuadratkan kaki-kakinya dan jumlahkan.",
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
              "text": "Karena [[625=625]], kedua sisi sama, jadi [[(7, 24, 25)]] adalah tripel Pythagoras yang valid. Tripel ini juga primitif, karena [[7]], [[24]], dan [[25]] tidak memiliki faktor persekutuan lebih besar dari [[1]].",
            },
            {
              "kind": "p",
              "text": "Sekarang contoh yang tidak valid. Periksa [[4]], [[5]], dan [[6]]: nilai terbesar adalah [[6]], jadi itulah hipotenusanya.",
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
              "text": "Karena [[41]] tidak sama dengan [[36]], nilai-nilai tersebut tidak membentuk tripel Pythagoras. Delapan langkah yang sama berlaku untuk masukan bilangan bulat positif apa pun, besar maupun kecil, sehingga verifikasi yang tepat tidak pernah bergantung pada hafalan atau tebakan.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "Alur langkah demi langkah untuk memeriksa 7, 24, 25: kuadratkan kaki-kaki menjadi 49 dan 576, jumlahkan menjadi 625, kuadratkan hipotenusa menjadi 625, dan konfirmasikan kesamaannya",
            "caption": "Memeriksa 7, 24, 25 langkah demi langkah: 49 + 576 = 625 dan 25 kuadrat = 625, jadi kedua sisi sama dan tripel tersebut valid.",
          },
        },
        "sec-euclid": {
          "h2": "Cara Menghasilkan Tripel Pythagoras Menggunakan Rumus Euclid",
          "blocks": [
            {
              "kind": "p",
              "text": "Dua bilangan bulat kecil masuk, satu tripel lengkap keluar: itulah rumus Euclid.",
            },
            {
              "kind": "p",
              "text": "Rumus Euclid membangun tripel Pythagoras dari dua bilangan bulat positif, [[m]] dan [[n]], dengan [[m]] lebih besar dari [[n]]. Parameter [[m]] adalah bilangan bulat yang lebih besar dan [[n]] adalah yang lebih kecil, dan keduanya harus bilangan bulat. Ketiga rumus tersebut menghasilkan dua kaki dan hipotenusa.",
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
              "text": "Syarat [[m>n>0]] itu penting. Jika [[m]] sama dengan [[n]], kaki pertama menjadi nol, yang bukan sisi segitiga. Jika [[m]] lebih kecil dari [[n]], kaki pertama menjadi negatif, yang juga mustahil. Nilai desimal untuk [[m]] dan [[n]] juga tidak valid di sini, karena rumus ini dirancang untuk parameter bilangan bulat yang menghasilkan sisi bilangan bulat.",
            },
            {
              "kind": "p",
              "text": "Coba [[m=2]] dan [[n=1]]. Kaki pertama adalah [[a=2^2-1^2=4-1=3]], kaki kedua adalah [[b=2(2)(1)=4]], dan hipotenusanya adalah [[c=2^2+1^2=4+1=5]]. Hasilnya adalah tripel [[(3, 4, 5)]]. Perhatikan bahwa kaki-kaki yang dihasilkan dapat muncul dalam urutan mana pun: rumus dapat menghasilkan kaki yang lebih besar terlebih dahulu atau belakangan, tetapi [[c]] selalu hipotenusa. Bagian berikutnya membuktikan mengapa rumus-rumus ini selalu memenuhi teorema Pythagoras.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "Diagram alur rumus Euclid dengan m sama dengan 3 dan n sama dengan 2 menghasilkan 5, 12, dan 13",
            "caption": "Rumus Euclid dengan m = 3 dan n = 2: m kuadrat dikurangi n kuadrat adalah 5, 2mn adalah 12, dan m kuadrat ditambah n kuadrat adalah 13, menghasilkan tripel 5, 12, 13.",
          },
        },
        "sec-proof": {
          "h2": "Pembuktian Matematis Rumus Euclid",
          "blocks": [
            {
              "kind": "p",
              "text": "Pembuktian aljabar singkat menunjukkan mengapa rumus Euclid tidak pernah gagal.",
            },
            {
              "kind": "p",
              "text": "Mulailah dengan kedua rumus kaki, [[a=m^2-n^2]] dan [[b=2mn]], dan ujilah apakah [[a^2+b^2]] sama dengan [[c^2]] ketika [[c=m^2+n^2]]. Substitusikan rumus-rumus tersebut ke sisi kiri persamaan Pythagoras.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Jabarkan kedua kuadrat tersebut. Kuadrat pertama dijabarkan menjadi [[m^4-2m^2n^2+n^4]] dan yang kedua menjadi [[4m^2n^2]], sehingga jumlahnya menjadi pernyataan berikut.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Gabungkan suku-suku tengahnya: [[-2m^2n^2+4m^2n^2]] adalah [[+2m^2n^2]]. Pernyataan itu kini merupakan kuadrat sempurna yang tersamar.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Faktorkan. Hasilnya adalah kuadrat dari [[m^2+n^2]], yang tepat sama dengan [[c]].",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "Karena [[c=m^2+n^2]], sisi kanan adalah [[c^2]], dan pembuktiannya selesai.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Langkah kuncinya adalah suku-suku tengah yang saling menghilangkan sebagian: [[-2m^2n^2]] dari kuadrat pertama dan [[+4m^2n^2]] dari kuadrat kedua menyisakan tepat [[+2m^2n^2]] yang diperlukan untuk melengkapi kuadrat. Karena cara ini berlaku untuk bilangan bulat [[m]] dan [[n]] apa pun dengan [[m>n>0]], setiap pasangan menghasilkan tripel Pythagoras yang sesungguhnya. Pembuktian ini tidak mengatakan apa-apa tentang keprimitifan: apakah hasilnya primitif bergantung pada syarat tambahan pada bagian-bagian di bawah ini.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "Apa Itu Tripel Pythagoras Primitif?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tripel primitif adalah tripel dalam bentuk paling sederhana, tanpa faktor persekutuan.",
            },
            {
              "kind": "p",
              "text": "Tripel Pythagoras primitif adalah tripel yang ketiga panjang sisinya tidak memiliki faktor bilangan bulat positif persekutuan lebih besar dari [[1]]. Dalam simbol, faktor persekutuan terbesar dari ketiga sisi adalah [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "Tripel [[(3, 4, 5)]] adalah primitif karena [[\\gcd(3,4,5)=1]]: tidak ada bilangan bulat lebih besar dari [[1]] yang membagi ketiga bilangan tersebut. Hal yang sama berlaku untuk [[(5, 12, 13)]], [[(8, 15, 17)]], dan [[(7, 24, 25)]]. Masing-masing adalah tripel dasar yang tidak dapat direduksi menjadi tripel bilangan bulat yang lebih kecil dengan pembagian.",
            },
            {
              "kind": "p",
              "text": "Primitif tidak berarti tripel tersebut adalah yang terkecil dalam segala hal. Artinya hanya bahwa ketiga nilai tidak memiliki faktor persekutuan selain [[1]]. Tripel primitif yang besar seperti [[(20, 21, 29)]] tetap primitif, karena [[20]], [[21]], dan [[29]] tidak memiliki pembagi persekutuan. Tabel di bawah ini membandingkan pembagi-pembagi tripel primitif dan salinan yang diskalakan.",
            },
          ],
          "table": {
            "headers": [
              "Tripel",
              "Pembagi persekutuan",
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
            "alt": "Dua segitiga siku-siku, 3-4-5 dan 6-8-10, menunjukkan yang kedua dua kali lipat dari yang pertama dan hanya yang pertama yang primitif",
            "caption": "Segitiga 3-4-5 adalah primitif, sedangkan 6-8-10 dua kali lebih besar di setiap sisinya: gcd(3, 4, 5) = 1, tetapi gcd(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "Apa Itu Tripel Pythagoras Non-Primitif?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tripel non-primitif adalah salinan tripel primitif yang diskalakan.",
            },
            {
              "kind": "p",
              "text": "Tripel Pythagoras non-primitif adalah tripel yang ketiga nilainya memiliki faktor bilangan bulat persekutuan lebih besar dari [[1]]. Tripel ini tetap tripel yang valid, karena memenuhi [[a^2+b^2=c^2]] secara tepat. Tripel ini hanya tidak dalam bentuk paling sederhana.",
            },
            {
              "kind": "p",
              "text": "Mulailah dengan tripel primitif [[(3, 4, 5)]] dan kalikan setiap sisi dengan [[2]]. Hasilnya adalah [[(6, 8, 10)]], dan pemeriksaannya tetap berlaku: [[36+64=100]]. Kalikan dengan [[3]] sebagai gantinya dan hasilnya adalah [[(9, 12, 15)]], dengan [[81+144=225]]. Kedua tripel yang diskalakan itu valid, dan tidak satu pun yang primitif, karena yang pertama memiliki faktor persekutuan [[2]] dan yang kedua memiliki faktor persekutuan [[3]].",
            },
            {
              "kind": "p",
              "text": "Menemukan faktor persekutuannya mudah: ambil faktor persekutuan terbesar dari ketiga sisi. Untuk [[(6, 8, 10)]] nilainya [[2]]; untuk [[(9, 12, 15)]] nilainya [[3]]. Membagi setiap sisi dengan faktor itu akan mengembalikan tripel primitif di bawahnya. Jadi [[(6, 8, 10)]] dibagi [[2]] menghasilkan [[(3, 4, 5)]], dan [[(9, 12, 15)]] dibagi [[3]] juga menghasilkan [[(3, 4, 5)]]. Setiap tripel non-primitif dapat direduksi menjadi tepat satu tripel primitif dengan cara ini.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "Syarat untuk Menghasilkan Tripel Pythagoras Primitif",
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus Euclid hanya menghasilkan tripel primitif bila kedua syarat parameter terpenuhi.",
            },
            {
              "kind": "p",
              "text": "Dua syarat pada [[m]] dan [[n]] menentukan apakah rumus Euclid menghasilkan tripel primitif. Keduanya harus berlaku pada saat yang sama, dan masing-masing saja tidak cukup.",
            },
            {
              "kind": "h3",
              "text": "Syarat 1: Parameter yang koprima",
            },
            {
              "kind": "p",
              "text": "Parameter-parameter tersebut harus koprima, artinya tidak memiliki faktor persekutuan lebih besar dari [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "Ketika [[m]] dan [[n]] memiliki faktor persekutuan, faktor itu merembes ke ketiga sisi yang dihasilkan. Misalnya, [[m=4]] dan [[n=2]] memiliki faktor persekutuan [[2]], dan rumusnya menghasilkan [[(12, 16, 20)]], yang semua sisinya memiliki faktor persekutuan [[4]]. Hasilnya non-primitif.",
            },
            {
              "kind": "h3",
              "text": "Syarat 2: Paritas berlawanan",
            },
            {
              "kind": "p",
              "text": "Satu parameter harus genap dan yang lainnya ganjil. Ketika kedua parameter ganjil, kaki-kaki dan hipotenusa yang dihasilkan semuanya genap, sehingga tripel tersebut memiliki faktor persekutuan [[2]] dan tidak dapat menjadi primitif. Misalnya, [[m=3]] dan [[n=1]] koprima tetapi keduanya ganjil, dan rumusnya menghasilkan [[(8, 6, 10)]], yaitu tripel non-primitif [[(6, 8, 10)]] dengan kaki-kaki dalam urutan berbeda.",
            },
            {
              "kind": "p",
              "text": "Tiga pasangan parameter menunjukkan bagaimana syarat-syarat itu bekerja bersama. Pasangan [[(2, 1)]] koprima dengan paritas berlawanan dan menghasilkan tripel primitif [[(3, 4, 5)]]. Pasangan [[(3, 2)]] koprima dengan paritas berlawanan dan menghasilkan tripel primitif [[(5, 12, 13)]]. Pasangan [[(3, 1)]] koprima tetapi keduanya ganjil, sehingga menghasilkan tripel non-primitif [[(6, 8, 10)]]. Kekoprimaan tanpa paritas berlawanan tidak cukup, dan paritas berlawanan tanpa kekoprimaan juga tidak cukup.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "Dua contoh parameter: m sama dengan 3 dan n sama dengan 2 menghasilkan 5-12-13 yang primitif, sedangkan m sama dengan 3 dan n sama dengan 1 menghasilkan 6-8-10 yang non-primitif",
            "caption": "Parameter m = 3, n = 2 koprima dengan paritas berlawanan dan menghasilkan 5-12-13 yang primitif. Parameter m = 3, n = 1 keduanya ganjil dan menghasilkan 6-8-10 yang non-primitif.",
          },
        },
        "sec-difference": {
          "h2": "Perbedaan antara Tripel Primitif dan Non-Primitif",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema yang sama, bentuk yang berbeda: satu tabel merangkum seluruh perbedaan itu.",
            },
            {
              "kind": "p",
              "text": "Kedua jenis tripel memenuhi teorema Pythagoras secara tepat, sehingga keduanya menggambarkan segitiga siku-siku yang sesungguhnya. Perbedaannya hanya soal faktor persekutuan dan cara tripel itu dihasilkan. Tripel primitif adalah pola dasar; tripel non-primitif biasanya kelipatan dari pola dasar itu.",
            },
          ],
          "table": {
            "headers": [
              "Fitur",
              "Primitif",
              "Non-primitif",
            ],
            "rows": [
              [
                "Pembagi persekutuan",
                "Hanya [[1]]",
                "Lebih besar dari [[1]]",
              ],
              [
                "Panjang sisi",
                "Tidak dapat direduksi menjadi tripel bilangan bulat yang lebih kecil",
                "Dapat dibagi dengan faktor persekutuan",
              ],
              [
                "Contoh",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Pembentukan",
                "[[m]], [[n]] koprima dengan paritas berlawanan",
                "Kombinasi parameter lain atau kelipatan bilangan bulat",
              ],
              [
                "Hubungan",
                "Tripel bilangan bulat dasar",
                "Sering kali kelipatan dari tripel primitif",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "Cara Menghasilkan Lebih Banyak Tripel dengan Penskalaan",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalikan setiap sisi dengan bilangan bulat yang sama dan tripel tetap valid.",
            },
            {
              "kind": "p",
              "text": "Untuk bilangan bulat positif [[k]] apa pun, mengalikan setiap sisi tripel Pythagoras [[(a, b, c)]] dengan [[k]] menghasilkan tripel Pythagoras lain, [[(ka, kb, kc)]].",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "Alasannya adalah aljabar sederhana. Mengkuadratkan kaki-kaki yang diskalakan menghasilkan [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]], dan mengeluarkan faktor [[k^2]] menghasilkan [[k^2(a^2+b^2)]]. Karena tripel aslinya memenuhi [[a^2+b^2=c^2]], jumlah yang diskalakan sama dengan [[k^2c^2]], yaitu [[(kc)^2]]. Tripel yang diskalakan karena itu memenuhi teorema secara tepat.",
            },
            {
              "kind": "p",
              "text": "Menskala [[(3, 4, 5)]] dengan [[2]] menghasilkan [[(6, 8, 10)]], dan menskala dengan [[3]] menghasilkan [[(9, 12, 15)]]. Menskala [[(5, 12, 13)]] dengan [[2]] menghasilkan [[(10, 24, 26)]], dan menskala [[(8, 15, 17)]] dengan [[3]] menghasilkan [[(24, 45, 51)]]. Setiap hasilnya adalah tripel yang valid, dan masing-masing non-primitif, karena pengalinya menjadi faktor persekutuan ketiga sisinya.",
            },
            {
              "kind": "p",
              "text": "Pengali bilangan bulat mempertahankan panjang sisi bilangan bulat, itulah sebabnya penskalaan adalah cara yang andal untuk membangun tripel baru. Pengali real sembarang, seperti [[1.5]], membuat segitiga tetap menjadi segitiga siku-siku dengan bentuk yang sama, tetapi sisi-sisinya dapat berhenti menjadi bilangan bulat: [[(3, 4, 5)]] yang diskalakan dengan [[1.5]] menghasilkan [[(4.5, 6, 7.5)]], yang merupakan segitiga siku-siku tetapi bukan tripel Pythagoras. Perhatikan bahwa kalkulator itu sendiri tidak memiliki kolom pengali terpisah; penskalaan adalah perhitungan manual yang Anda lakukan dengan tripel yang diperiksa atau dihasilkan kalkulator.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "Tripel 3-4-5 dikalikan dengan 2, 3, dan 4 menghasilkan 6-8-10, 9-12-15, dan 12-16-20",
            "caption": "Menskala 3-4-5 dengan 2, 3, dan 4 menghasilkan 6-8-10, 9-12-15, dan 12-16-20. Setiap himpunan yang diskalakan tetap merupakan tripel Pythagoras yang valid.",
          },
        },
        "sec-examples": {
          "h2": "Contoh Tripel Pythagoras yang Umum",
          "blocks": [
            {
              "kind": "p",
              "text": "Sepuluh tripel yang layak dihafal, masing-masing sudah diverifikasi.",
            },
            {
              "kind": "p",
              "text": "Tabel di bawah ini mencantumkan sepuluh tripel Pythagoras yang terkenal. Setiap baris telah diperiksa terhadap teorema Pythagoras, dan setiap baris bersifat primitif kecuali jika kelipatan yang diskalakan dicatat. Kaki-kaki pada setiap baris dapat dicantumkan dalam urutan mana pun: [[(4, 3, 5)]] adalah segitiga yang sama dengan [[(3, 4, 5)]].",
            },
          ],
          "table": {
            "headers": [
              "Kaki pertama",
              "Kaki kedua",
              "Hipotenusa",
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
            "alt": "Tiga segitiga siku-siku yang digambar sesuai skala: 3-4-5, 5-12-13, dan 8-15-17, menunjukkan bentuk yang berbeda",
            "caption": "Tiga tripel primitif yang digambar sesuai skala: 3-4-5, 5-12-13, dan 8-15-17. Masing-masing memiliki bentuk dan sudut lancip yang berbeda.",
          },
        },
        "sec-worked": {
          "h2": "Contoh Soal Langkah demi Langkah Menggunakan Kalkulator",
          "blocks": [
            {
              "kind": "p",
              "text": "Delapan contoh yang mencakup kedua mode: empat pemeriksaan dan empat pembentukan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Periksa 3, 4, 5",
            },
            {
              "kind": "p",
              "text": "Masukkan [[a=3]], [[b=4]], dan [[c=5]] dalam mode periksa. Kuadratkan kaki-kakinya dan jumlahkan: [[3^2+4^2=9+16=25]]. Kuadratkan hipotenusa: [[5^2=25]]. Karena [[25=25]], hasilnya adalah tripel yang valid. Tripel ini primitif, karena [[3]], [[4]], dan [[5]] tidak memiliki faktor persekutuan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Periksa 5, 12, 13",
            },
            {
              "kind": "p",
              "text": "Masukkan [[a=5]], [[b=12]], dan [[c=13]]. Kaki-kakinya menghasilkan [[5^2+12^2=25+144=169]], dan hipotenusanya menghasilkan [[13^2=169]]. Karena [[169=169]], hasilnya adalah tripel yang valid. Tripel ini primitif, karena [[\\gcd(5,12,13)=1]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Periksa 6, 8, 10",
            },
            {
              "kind": "p",
              "text": "Masukkan [[a=6]], [[b=8]], dan [[c=10]]. Kaki-kakinya menghasilkan [[6^2+8^2=36+64=100]], dan hipotenusanya menghasilkan [[10^2=100]]. Karena [[100=100]], hasilnya adalah tripel yang valid. Tripel ini non-primitif, karena ketiga sisinya memiliki faktor persekutuan [[2]]; membagi dengan [[2]] menghasilkan kembali tripel primitif [[(3, 4, 5)]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Periksa 7, 24, 25",
            },
            {
              "kind": "p",
              "text": "Masukkan [[a=7]], [[b=24]], dan [[c=25]]. Kaki-kakinya menghasilkan [[7^2+24^2=49+576=625]], dan hipotenusanya menghasilkan [[25^2=625]]. Karena [[625=625]], hasilnya adalah tripel yang valid. Tripel ini primitif, karena [[7]], [[24]], dan [[25]] tidak memiliki faktor persekutuan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Hasilkan dengan m = 2, n = 1",
            },
            {
              "kind": "p",
              "text": "Masukkan [[m=2]] dan [[n=1]] dalam mode hasilkan. Kaki pertama adalah [[a=2^2-1^2=3]], kaki kedua adalah [[b=2(2)(1)=4]], dan hipotenusanya adalah [[c=2^2+1^2=5]]. Hasilnya adalah [[(3, 4, 5)]], tripel primitif.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Hasilkan dengan m = 3, n = 2",
            },
            {
              "kind": "p",
              "text": "Masukkan [[m=3]] dan [[n=2]]. Kaki pertama adalah [[a=3^2-2^2=9-4=5]], kaki kedua adalah [[b=2(3)(2)=12]], dan hipotenusanya adalah [[c=3^2+2^2=13]]. Hasilnya adalah [[(5, 12, 13)]], tripel primitif, karena [[3]] dan [[2]] koprima dengan paritas berlawanan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Hasilkan dengan m = 4, n = 1",
            },
            {
              "kind": "p",
              "text": "Masukkan [[m=4]] dan [[n=1]]. Rumus-rumus tersebut menghasilkan [[a=4^2-1^2=15]], [[b=2(4)(1)=8]], dan [[c=4^2+1^2=17]]. Dengan kaki-kaki diurutkan menaik, hasilnya adalah [[(8, 15, 17)]]. Tripel ini primitif, karena [[4]] dan [[1]] koprima dengan paritas berlawanan.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Hasilkan dengan m = 3, n = 1",
            },
            {
              "kind": "p",
              "text": "Masukkan [[m=3]] dan [[n=1]]. Rumus-rumus tersebut menghasilkan [[a=3^2-1^2=8]], [[b=2(3)(1)=6]], dan [[c=3^2+1^2=10]]. Dengan kaki-kaki diurutkan menaik, hasilnya adalah [[(6, 8, 10)]]. Tripel ini non-primitif: [[3]] dan [[1]] koprima, tetapi keduanya ganjil, sehingga syarat paritas berlawanan gagal dan setiap sisi menjadi genap. Membagi dengan [[2]] menghasilkan kembali tripel primitif [[(3, 4, 5)]].",
            },
          ],
        },
        "sec-infinite": {
          "h2": "Mengapa Tripel Pythagoras Tak Terhingga Banyaknya?",
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus Euclid tidak pernah kehabisan masukan, sehingga tidak pernah kehabisan tripel.",
            },
            {
              "kind": "p",
              "text": "Rumus Euclid menerima pasangan bilangan bulat positif [[m]] dan [[n]] apa pun dengan [[m]] lebih besar dari [[n]], dan pasangan semacam itu jumlahnya tak terhingga. Setiap pasangan baru menghasilkan sebuah tripel, dan pasangan yang berbeda umumnya menghasilkan tripel yang berbeda. Pasangan [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]], dan [[(5, 2)]] menghasilkan [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]], dan [[(20, 21, 29)]] berturut-turut, dan daftarnya terus berlanjut: [[(5, 4)]] menghasilkan [[(9, 40, 41)]], dan [[(6, 1)]] menghasilkan [[(12, 35, 37)]]. Nilai [[m]] yang lebih besar terus menghasilkan tripel yang lebih besar tanpa akhir.",
            },
            {
              "kind": "p",
              "text": "Kelipatan bilangan bulat menambah lebih banyak lagi. Setiap tripel primitif menghasilkan satu keluarga lengkap salinan yang diskalakan: [[(3, 4, 5)]] saja menghasilkan [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]], dan seterusnya tanpa henti. Di antara pasangan parameter yang tak berujung dan kelipatan yang tak berujung, persediaan tripel Pythagoras tidak terbatas. Perhatikan rumusan yang cermat: tidak setiap pasangan parameter menghasilkan tripel primitif, tetapi setiap pasangan menghasilkan tripel yang valid, dan tripel-tripel primitif pun tak terhingga banyaknya.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "Cara Mengenali Tripel Pythagoras Tanpa Menebak",
          "blocks": [
            {
              "kind": "p",
              "text": "Beberapa kebiasaan membuat tripel yang familier langsung terlihat sebelum Anda menghitung.",
            },
            {
              "kind": "p",
              "text": "Mulailah dengan memperlakukan nilai terbesar sebagai hipotenusa dan membandingkan nilai-nilai yang dikuadratkan, persis seperti yang dijelaskan langkah-langkah pemeriksaan. Dengan latihan, tripel-tripel umum menjadi familier: [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]], dan [[7]]-[[24]]-[[25]] begitu sering muncul dalam buku teks dan ujian sehingga mengenalinya menghemat waktu yang nyata.",
            },
            {
              "kind": "p",
              "text": "Selanjutnya, carilah faktor persekutuan. Jika ketiga bilangan genap, bagilah dengan [[2]] dan lihat apa yang tersisa. Himpunan [[6]]-[[8]]-[[10]] langsung dikenali sebagai dua kali [[3]]-[[4]]-[[5]] begitu faktor [[2]] terlihat. Mereduksi tripel non-primitif ke bentuk primitifnya sering kali mengungkapkan pola familier yang tersembunyi di balik bilangan yang lebih besar.",
            },
            {
              "kind": "p",
              "text": "Ketika Anda membutuhkan tripel baru dan bukan pemeriksaan, rumus Euclid adalah jalan yang andal: pilih nilai [[m]] dan [[n]] yang kecil dan hasilkan tripelnya. Pengenalan adalah jalan pintas yang membantu, tetapi verifikasi yang tepat selalu menjadi kata akhir. Tripel yang tampak familier tetap layak menjalani uji kuadrat dan banding sebelum Anda mengandalkannya.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Tripel Pythagoras dan Segitiga Siku-Siku Biasa",
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap tripel adalah segitiga siku-siku, tetapi kebanyakan segitiga siku-siku bukan tripel.",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku dapat memiliki panjang sisi bilangan bulat, panjang sisi desimal, atau panjang sisi irasional. Hanya kategori pertama yang dapat membentuk tripel Pythagoras. Tripel [[(3, 4, 5)]] adalah segitiga siku-siku bilangan bulat, dan tripel itu memenuhi syarat. Segitiga dengan kaki [[1]] dan [[1]] serta hipotenusa [[\\sqrt{2}]] adalah segitiga siku-siku yang sesungguhnya, karena [[1+1=2]], tetapi hipotenusanya irasional, sehingga bukan tripel. Segitiga dengan sisi [[3]], [[4]], dan [[5.1]] gagal memenuhi persamaan, karena [[9+16=25]] dan [[5.1^2=26.01]], sehingga segitiga itu bahkan bukan segitiga siku-siku.",
            },
            {
              "kind": "p",
              "text": "Perbedaan ini penting dalam praktik. Para pembangun menggunakan [[3]]-[[4]]-[[5]] karena bilangan bulat mudah diukur dengan meteran. Segitiga dengan sisi [[3]], [[4]], dan [[5.1]] tampak hampir siku-siku tetapi meleset dengan sudut yang terlihat, dan tidak ada pemeriksaan bilangan bulat yang akan meloloskannya. Teorema Pythagoras berlaku untuk semua segitiga siku-siku, berapa pun panjang sisinya. Istilah tripel Pythagoras hanya merujuk pada solusi bilangan bulat positif, dan makna yang sempit itulah yang membuat tripel istimewa.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Kesalahan Umum Saat Menggunakan Kalkulator Tripel Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Lima belas kesalahan, masing-masing dengan perbaikannya di samping.",
            },
            {
              "kind": "list",
              "items": [
                "Memasukkan [[c]] sebagai sisi yang lebih kecil: hipotenusa harus nilai terbesar, jadi selalu tetapkan bilangan terbesar sebagai [[c]] sebelum memeriksa.",
                "Lupa mengkuadratkan nilai-nilai: teorema membandingkan kuadrat, bukan panjang sisinya sendiri, jadi kuadratkan [[a]], [[b]], dan [[c]] terlebih dahulu.",
                "Menjumlahkan sisi-sisinya, bukan kuadratnya: [[a+b]] adalah jumlah yang salah; pemeriksaan membutuhkan [[a^2+b^2]] dibandingkan dengan [[c^2]].",
                "Menggunakan [[a+b=c]] alih-alih [[a^2+b^2=c^2]]: jumlah biasa dari dua sisi tidak pernah sama dengan hipotenusa pada segitiga siku-siku.",
                "Mengacaukan hipotenusa dengan kaki: hipotenusa terletak di seberang sudut siku-siku dan selalu sisi terpanjang.",
                "Menggunakan nilai desimal dan mengharapkan tripel bilangan bulat: desimal dapat membentuk segitiga siku-siku, tetapi hanya bilangan bulat positif yang membentuk tripel Pythagoras.",
                "Memasukkan panjang sisi nol atau negatif: panjang sisi harus positif, dan masukan nol atau negatif ditolak.",
                "Menggunakan [[m]] sama dengan [[n]]: kaki pertama menjadi [[m^2-n^2=0]], yang bukan sisi segitiga.",
                "Menggunakan [[m]] lebih kecil dari [[n]]: kaki pertama menjadi negatif, yang mustahil untuk panjang sisi.",
                "Memasukkan nilai [[m]] dan [[n]] desimal: rumus Euclid membutuhkan parameter bilangan bulat positif untuk menghasilkan sisi bilangan bulat.",
                "Menganggap setiap tripel yang dihasilkan adalah primitif: pembentukan hanya menjamin tripel yang valid, dan keprimitifan membutuhkan parameter koprima dengan paritas berlawanan.",
                "Menganggap semua tripel primitif adalah kelipatan [[3]]-[[4]]-[[5]]: [[5]]-[[12]]-[[13]] dan [[8]]-[[15]]-[[17]] adalah tripel primitif yang berdiri sendiri, bukan kelipatan [[3]]-[[4]]-[[5]].",
                "Melupakan syarat paritas berlawanan: dua parameter ganjil menghasilkan tripel genap yang non-primitif, seperti ditunjukkan [[m=3]], [[n=1]].",
                "Lupa memeriksa faktor persekutuan: tripel seperti [[(12, 16, 20)]] tampak baru sampai faktor persekutuan [[4]] mengungkapkan bahwa itu adalah [[(3, 4, 5)]] yang diskalakan.",
                "Mengacaukan segitiga siku-siku yang valid dengan tripel Pythagoras bilangan bulat: segitiga dengan sisi irasional atau desimal dapat memenuhi teorema tanpa menjadi tripel.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Soal Latihan Beserta Jawaban",
          "blocks": [
            {
              "kind": "p",
              "text": "Delapan soal, empat pemeriksaan dan empat pembentukan, dengan solusi lengkap.",
            },
            {
              "kind": "list",
              "items": [
                "Periksa apakah [[8]], [[15]], dan [[17]] membentuk tripel. Jawaban: ya, primitif. [[8^2+15^2=64+225=289=17^2]], dan ketiga bilangan tidak memiliki faktor persekutuan.",
                "Periksa apakah [[6]], [[8]], dan [[11]] membentuk tripel. Jawaban: tidak. [[6^2+8^2=36+64=100]], tetapi [[11^2=121]], sehingga kedua sisi berbeda.",
                "Tentukan apakah [[9]], [[12]], dan [[15]] primitif. Jawaban: non-primitif. Bilangan-bilangan tersebut memiliki faktor persekutuan [[3]], dan membagi dengan [[3]] menghasilkan tripel primitif [[(3, 4, 5)]].",
                "Hasilkan tripel menggunakan [[m=2]] dan [[n=1]]. Jawaban: [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "Hasilkan tripel menggunakan [[m=3]] dan [[n=2]]. Jawaban: [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "Hasilkan tripel menggunakan [[m=4]] dan [[n=1]]. Jawaban: [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]], dengan kaki-kaki diurutkan menaik.",
                "Tentukan apakah [[m=3]] dan [[n=1]] menghasilkan tripel primitif. Jawaban: tidak. Parameter-parameter tersebut koprima tetapi keduanya ganjil, sehingga hasilnya adalah tripel non-primitif [[(6, 8, 10)]].",
                "Temukan pengali persekutuan antara [[3]]-[[4]]-[[5]] dan [[15]]-[[20]]-[[25]]. Jawaban: [[5]]. Setiap sisi [[(3, 4, 5)]] dikalikan [[5]] menghasilkan [[(15, 20, 25)]].",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Setiap kalkulator di bawah ini menangani tugas segitiga siku-siku yang berbeda, jadi pilihlah alat yang sesuai dengan pengukuran yang Anda butuhkan.",
      "relatedItems": [
        "Kalkulator Segitiga Siku-Siku",
        "Kalkulator Teorema Pythagoras",
        "Kalkulator Segitiga 3-4-5",
        "Kalkulator Segitiga 5-12-13",
        "Kalkulator Sisi Segitiga Siku-Siku",
        "Kalkulator Segitiga Siku-Siku Istimewa",
      ],
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Apa itu tripel Pythagoras?",
          "answer": "Tripel Pythagoras adalah sekumpulan tiga bilangan bulat positif, ditulis [[(a, b, c)]], yang memenuhi persamaan [[a^2+b^2=c^2]]. Dua bilangan yang lebih kecil adalah kaki-kaki segitiga siku-siku dan yang terbesar adalah hipotenusanya. Contoh yang paling dikenal adalah [[(3, 4, 5)]], karena [[9+16=25]].",
        },
        {
          "question": "Bagaimana cara kerja Kalkulator Tripel Pythagoras?",
          "answer": "Kalkulator ini memiliki dua mode. Mode periksa menerima tiga bilangan bulat dan menguji apakah [[a^2+b^2=c^2]] berlaku. Mode hasilkan menerima dua bilangan bulat, [[m]] dan [[n]], dan menerapkan rumus Euclid untuk membangun tripel baru. Kedua mode menampilkan langkah-langkah pengerjaan beserta hasilnya.",
        },
        {
          "question": "Bagaimana cara memeriksa apakah tiga bilangan membentuk tripel Pythagoras?",
          "answer": "Ambil nilai terbesar sebagai hipotenusa [[c]] dan dua lainnya sebagai kaki [[a]] dan [[b]]. Kuadratkan ketiganya, jumlahkan [[a^2+b^2]], dan bandingkan dengan [[c^2]]. Total yang sama berarti tripel yang valid; total yang tidak sama berarti bilangan-bilangan itu tidak membentuk tripel.",
        },
        {
          "question": "Apa itu rumus Euclid?",
          "answer": "Rumus Euclid menghasilkan tripel Pythagoras dari dua bilangan bulat positif, [[m]] dan [[n]], dengan [[m]] lebih besar dari [[n]]. Rumus-rumusnya adalah [[a=m^2-n^2]], [[b=2mn]], dan [[c=m^2+n^2]]. Setiap pasangan menghasilkan tripel yang valid, seperti yang ditunjukkan pembuktian aljabar pada halaman ini.",
        },
        {
          "question": "Apa itu m dan n dalam rumus tripel Pythagoras?",
          "answer": "Nilai [[m]] dan [[n]] adalah parameter bilangan bulat positif dalam rumus Euclid. Nilai [[m]] adalah bilangan bulat yang lebih besar dan [[n]] adalah yang lebih kecil, dengan [[m>n>0]]. Nilai [[m]] yang lebih besar menghasilkan tripel yang lebih besar, dan pasangan yang berbeda menghasilkan tripel yang berbeda.",
        },
        {
          "question": "Apa itu tripel Pythagoras primitif?",
          "answer": "Tripel primitif adalah tripel yang ketiga panjang sisinya tidak memiliki faktor persekutuan lebih besar dari [[1]], sehingga [[\\gcd(a,b,c)=1]]. Contohnya meliputi [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], dan [[(7, 24, 25)]]. Tripel primitif tidak dapat direduksi menjadi tripel bilangan bulat yang lebih kecil.",
        },
        {
          "question": "Apa itu tripel Pythagoras non-primitif?",
          "answer": "Tripel non-primitif adalah tripel yang valid yang ketiga sisinya memiliki faktor persekutuan lebih besar dari [[1]]. Misalnya, [[(6, 8, 10)]] adalah dua kali [[(3, 4, 5)]] dan [[(9, 12, 15)]] adalah tiga kali [[(3, 4, 5)]]. Membagi dengan faktor persekutuan akan mengembalikan tripel primitif di bawahnya.",
        },
        {
          "question": "Bagaimana saya tahu apakah tripel yang dihasilkan itu primitif?",
          "answer": "Periksa dua syarat parameter: [[m]] dan [[n]] harus koprima, sehingga [[\\gcd(m,n)=1]], dan keduanya harus memiliki paritas berlawanan, sehingga satu genap dan yang lainnya ganjil. Jika kedua syarat terpenuhi, tripel yang dihasilkan adalah primitif. Jika salah satu gagal, tripel itu non-primitif.",
        },
        {
          "question": "Apakah bilangan desimal dapat membentuk tripel Pythagoras?",
          "answer": "Tidak. Tripel Pythagoras didefinisikan sebagai tiga bilangan bulat positif, sehingga panjang sisi desimal tidak pernah memenuhi syarat. Desimal tetap dapat membentuk segitiga siku-siku yang memenuhi [[a^2+b^2=c^2]], seperti kaki [[1.5]] dan [[2]] dengan hipotenusa [[2.5]], tetapi segitiga itu bukan tripel Pythagoras.",
        },
        {
          "question": "Apakah tripel Pythagoras tak terhingga banyaknya?",
          "answer": "Ya. Rumus Euclid menerima pasangan bilangan bulat [[(m, n)]] yang jumlahnya tak terhingga, dan setiap pasangan menghasilkan sebuah tripel. Kelipatan bilangan bulat menambah lebih banyak lagi: setiap tripel primitif menghasilkan keluarga salinan yang diskalakan tanpa akhir. Persediaan tripel tidak pernah habis.",
        },
        {
          "question": "Dapatkah setiap tripel Pythagoras dihasilkan menggunakan rumus Euclid?",
          "answer": "Ya, setiap tripel primitif berasal dari rumus Euclid dengan parameter koprima berparitas berlawanan yang sesuai, dan setiap tripel non-primitif adalah kelipatan dari tripel primitif. Jadi setiap tripel Pythagoras dapat dicapai melalui rumus Euclid ditambah penskalaan dengan bilangan bulat positif.",
        },
        {
          "question": "Apa tripel Pythagoras yang paling umum?",
          "answer": "Tripel [[(3, 4, 5)]] adalah yang paling umum dan paling dikenal. Tripel ini adalah tripel primitif terkecil, mudah diingat, dan para pembangun serta tukang kayu telah menggunakannya selama berabad-abad untuk memeriksa sudut yang siku-siku. Tripel berikutnya yang paling familier adalah [[(5, 12, 13)]] dan [[(8, 15, 17)]].",
        },
      ],
    },
};
