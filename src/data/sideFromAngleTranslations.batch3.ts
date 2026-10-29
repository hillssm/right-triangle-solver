/**
 * sideFromAngleTranslations.batch3.ts
 * Translations of the Right Triangle Side From Angle Calculator guide (SideFromAngleGuide.astro)
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese Simplified (zh).
 *
 * Structure per language:
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (13 entries: angle-intro, angle-anatomy, angle-trig, angle-modes,
 *   angle-examples, angle-effect, angle-degrees, angle-howto, angle-mistakes,
 *   angle-validation, angle-verify, angle-other, angle-conclusion)
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedIntro, relatedItems (6 calculator names)
 *
 * Formulas, KaTeX markup, variable names, numbers, URLs, and HTML IDs are preserved
 * exactly as in the English source (verified at runtime-string level: single-backslash
 * LaTeX, e.g. [[\\sin(A) = \\frac{a}{c}]]).
 *
 * NOTE (source quirk, preserved byte-identical): the angle-verify display block in the
 * English source opens with [[[ but closes with only ]] (unbalanced). All 6 languages
 * reproduce it exactly as in the source. If the renderer expects balanced [[[...]]]
 * markers, fix the source .astro and this file together.

export const SIDE_FROM_ANGLE_TRANSLATIONS_BATCH3 = {
  "id": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "angle-intro": "Cara Mencari Sisi Menggunakan Sudut",
      "angle-anatomy": "Memahami Sisi dan Sudut",
      "angle-trig": "Sinus, Kosinus, dan Tangen",
      "angle-modes": "Empat Mode Kalkulator",
      "angle-examples": "Contoh dalam Kehidupan Nyata",
      "angle-effect": "Bagaimana Sudut Mengubah Panjang Sisi",
      "angle-degrees": "Derajat dan Pengaturan Kalkulator",
      "angle-howto": "Menggunakan Kalkulator",
      "angle-mistakes": "Kesalahan Umum",
      "angle-validation": "Validasi Input",
      "angle-verify": "Memverifikasi Jawaban Anda",
      "angle-other": "Kapan Menggunakan Kalkulator Lain",
      "angle-related": "Kalkulator Terkait",
      "angle-faq": "Pertanyaan Umum"
    },
    "sections": {
      "angle-intro": {
        "h2": "Cara Mencari Sisi Segitiga Siku-Siku Menggunakan Sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Bayangkan sebuah tangga yang bersandar pada dinding. Anda tahu tangga itu panjangnya 5 meter dan membentuk sudut 65 derajat dengan tanah, tetapi seberapa tinggi tangga itu mencapai dinding? Kalkulator sisi segitiga siku-siku dari sudut menjawab tepat pertanyaan semacam ini: kalkulator ini mencari sisi yang hilang ketika Anda mengetahui satu sudut lancip dan satu panjang sisi. Satu sisi ditambah satu sudut sudah cukup karena trigonometri menentukan bentuk segitiga sepenuhnya. Ketiga perbandingan, sinus, kosinus, dan tangen, masing-masing menghubungkan sudut ke pasangan sisi yang berbeda. Sinus menghubungkan sisi depan dengan hipotenusa, kosinus menghubungkan sisi samping dengan hipotenusa, dan tangen menghubungkan kedua kaki secara langsung. Halaman ini menjelaskan perbandingan mana yang sesuai dengan situasi Anda, mengapa cara itu berhasil, dan cara menggunakan kalkulator di atas. Berbeda dengan kalkulator teorema Pythagoras yang membutuhkan dua sisi yang diketahui, alat ini bekerja hanya dari satu sisi dan satu sudut."
          }
        ]
      },
      "angle-anatomy": {
        "h2": "Memahami Sisi dan Sudut Segitiga Siku-Siku",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apa Itu Segitiga Siku-Siku?"
          },
          {
            "kind": "p",
            "text": "Segitiga siku-siku memiliki satu sudut yang tepat 90 derajat, sudut yang sama seperti yang Anda lihat pada selembar kertas. Dua sudut lainnya adalah sudut lancip, masing-masing lebih kecil dari 90 derajat, dan keduanya selalu berjumlah 90 derajat karena ketiga sudut segitiga berjumlah 180. Trigonometri dalam panduan ini hanya berlaku untuk segitiga siku-siku: perbandingan sinus, kosinus, dan tangen didefinisikan melalui sudut siku-siku, sehingga menggunakannya pada segitiga tanpa sudut 90 derajat akan menghasilkan jawaban yang salah."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Hipotenusa?"
          },
          {
            "kind": "p",
            "text": "Hipotenusa terletak berhadapan dengan sudut siku-siku dan selalu menjadi sisi terpanjang dari ketiga sisi. Menurut kesepakatan, hipotenusa diberi label [[c]]. Untuk menemukannya pada diagram yang diputar, carilah sisi yang tidak menyentuh tanda sudut siku-siku. Bagaimanapun segitiga diputar, hipotenusa tetap berhadapan dengan sudut siku-siku."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Depan dan Sisi Samping?"
          },
          {
            "kind": "p",
            "text": "Pilih satu sudut lancip dan sebut [[A]]. Kaki yang terletak di seberang [[A]] adalah sisi depan, diberi label [[a]]. Kaki yang membentuk [[A]] bersama hipotenusa adalah sisi samping, diberi label [[b]]. Inilah bagian yang sering membingungkan pemula: label bergantung pada sudut yang Anda pilih. Kaki yang sama yang menjadi sisi depan untuk sudut [[A]] menjadi sisi samping ketika acuan Anda berpindah ke sudut [[B]]. Hipotenusa tidak pernah berubah perannya. Di seluruh panduan ini, [[a]] berhadapan dengan [[A]], [[b]] bersebelahan dengan [[A]], dan [[c]] adalah hipotenusa."
          }
        ],
        "imgAlt": "Segitiga siku-siku dengan sudut A di kiri bawah, kaki a berhadapan dan kaki b bersebelahan dengan A, hipotenusa c",
        "figcaption": "Anatomi relatif terhadap sudut A: sisi a berhadapan dengan A, sisi b bersebelahan dengan A, dan c adalah hipotenusa. A + B = 90°."
      },
      "angle-trig": {
        "h2": "Bagaimana Sinus, Kosinus, dan Tangen Membantu Mencari Sisi yang Hilang",
        "blocks": [
          {
            "kind": "p",
            "text": "Perbandingan trigonometri adalah hubungan tetap antara dua sisi segitiga siku-siku untuk sudut tertentu. Ubah sudutnya dan perbandingannya berubah; pertahankan sudut yang sama dan setiap segitiga dengan sudut itu memiliki perbandingan yang sama, berapa pun ukurannya. Itulah mengapa satu sudut ditambah satu sisi menentukan segalanya. Masing-masing dari ketiga perbandingan memasangkan sudut dengan kombinasi sisi yang berbeda, sehingga sisi yang Anda ketahui menentukan perbandingan mana yang harus digunakan."
          },
          {
            "kind": "h3",
            "text": "Memahami Sinus"
          },
          {
            "kind": "p",
            "text": "Sinus membandingkan sisi depan dengan hipotenusa: [[\\sin(A) = \\frac{a}{c}]]. Untuk mencari sisi yang hilang, kalikan kedua ruas dengan [[c]]. [[c]] di ruas kanan saling menghilangkan, sehingga tersisa [[a = c\\sin(A)]]. Dengan kata-kata: kaki depan sama dengan hipotenusa yang dikalikan dengan sinus sudut. Sudut yang lebih besar menghasilkan nilai sinus yang lebih besar, sehingga sisi depan membesar seiring sudut yang terbuka."
          },
          {
            "kind": "h3",
            "text": "Memahami Kosinus"
          },
          {
            "kind": "p",
            "text": "Kosinus membandingkan sisi samping dengan hipotenusa: [[\\cos(A) = \\frac{b}{c}]]. Kalikan kedua ruas dengan [[c]] dan Anda mendapatkan [[b = c\\cos(A)]]. Kaki samping sama dengan hipotenusa yang dikalikan dengan kosinus sudut. Saat sudut [[A]] membesar mendekati 90 derajat, sisi samping menyusut mendekati nol, sesuai dengan geometrinya: sudut itu menekan kaki samping hingga rata."
          },
          {
            "kind": "h3",
            "text": "Memahami Tangen"
          },
          {
            "kind": "p",
            "text": "Tangen membandingkan kedua kaki secara langsung: [[\\tan(A) = \\frac{a}{b}]]. Dibalik ke kedua arah, tangen menghasilkan [[a = b\\tan(A)]] dan [[b = \\frac{a}{\\tan(A)}]]. Gunakan perkalian ketika kaki yang diketahui adalah sisi samping dan Anda menginginkan sisi depan: memperbesar sisi samping dengan tangen meregangkannya menjadi sisi depan. Gunakan pembagian ketika kaki yang diketahui adalah sisi depan dan Anda menginginkan sisi samping: Anda menanyakan berapa potongan seukuran tangen yang muat di dalam sisi depan. Kedua bentuk tersebut adalah hubungan yang sama yang dibaca dari arah berlawanan."
          },
          {
            "kind": "h3",
            "text": "Apa Arti SOH-CAH-TOA?"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA adalah alat bantu ingatan, bukan pengganti untuk mengidentifikasi sisi dengan benar. SOH: Sinus = Depan / Miring. CAH: Kosinus = Samping / Miring. TOA: Tangen = Depan / Samping. Alat ini membantu Anda memilih perbandingan setelah Anda memberi label sisi depan, sisi samping, dan hipotenusa relatif terhadap sudut Anda. Selalu beri label pada sisi-sisinya terlebih dahulu; singkatan itu hanya memberi tahu pecahan mana yang harus ditulis setelahnya."
          }
        ],
        "imgAlt": "Tiga panel yang menunjukkan perbandingan sinus, kosinus, dan tangen pada segitiga siku-siku yang sama",
        "figcaption": "SOH-CAH-TOA pada satu segitiga: sinus menggunakan sisi depan dan hipotenusa, kosinus menggunakan sisi samping dan hipotenusa, tangen menggunakan kedua kaki."
      },
      "angle-modes": {
        "h2": "Cara Memilih Mode Kalkulator yang Tepat",
        "blocks": [
          {
            "kind": "p",
            "text": "Mode yang benar bergantung pada dua fakta: panjang sisi mana yang sudah Anda ketahui, dan sisi mana yang hilang. Temukan situasi Anda pada tabel, lalu baca contoh pengerjaan yang sesuai di bawah."
          }
        ],
        "table": {
          "headers": [
            "Sisi Diketahui",
            "Sudut Diketahui",
            "Sisi Hilang",
            "Rumus",
            "Mode Kalkulator",
            "Kapan Digunakan"
          ],
          "rows": [
            [
              "Hipotenusa c",
              "A",
              "Kaki a",
              "a = c × sin(A)",
              "Kaki a dari Sinus",
              "Panjang miring diketahui, perlu sisi di seberang sudut"
            ],
            [
              "Hipotenusa c",
              "A",
              "Kaki b",
              "b = c × cos(A)",
              "Kaki b dari Kosinus",
              "Panjang miring diketahui, perlu sisi di samping sudut"
            ],
            [
              "Kaki b",
              "A",
              "Kaki a",
              "a = b × tan(A)",
              "Kaki a dari Tangen",
              "Jarak horizontal diketahui, perlu tinggi vertikal"
            ],
            [
              "Kaki a",
              "A",
              "Kaki b",
              "b = a / tan(A)",
              "Kaki b dari Tangen",
              "Tinggi vertikal diketahui, perlu jarak horizontal"
            ]
          ]
        },
        "modeSections": [
          {
            "h3": "Mode 1: Mencari Kaki a Menggunakan Sinus",
            "blocks": [
              {
                "kind": "p",
                "text": "Pilih mode ini ketika Anda mengetahui hipotenusa dan membutuhkan sisi di seberang sudut. Pastikan sisi yang diketahui adalah sisi yang terletak di seberang sudut siku-siku, dan sudut Anda adalah sudut lancip yang dihadapi sisi depan. Sinus adalah perbandingan yang tepat karena secara langsung menghubungkan sisi depan dan hipotenusa. Masukkan panjang hipotenusa dan sudut dalam derajat. Hasilnya adalah kaki depan."
              },
              {
                "kind": "p",
                "text": "<strong>Contoh pengerjaan:</strong> Diketahui [[c = 10\\text{ m}]] dan [[A = 30^\\circ]], cari kaki [[a]]."
              },
              {
                "kind": "display",
                "text": "[[[a = 10\\sin(30^\\circ) = 10(0.5) = 5\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Jawabannya masuk akal: pada 30 derajat, sisi depan tepat setengah dari hipotenusa, pemeriksaan praktis yang bisa Anda lakukan dalam kepala."
              }
            ]
          },
          {
            "h3": "Mode 2: Mencari Kaki b Menggunakan Kosinus",
            "blocks": [
              {
                "kind": "p",
                "text": "Pilih mode ini ketika Anda mengetahui hipotenusa dan membutuhkan sisi di samping sudut. Kosinus menghubungkan sisi samping dan hipotenusa, sehingga mengubah panjang miring menjadi kaki yang berjalan di samping sudut. Sisi samping selalu lebih pendek dari hipotenusa, karena kosinus sudut lancip selalu kurang dari 1."
              },
              {
                "kind": "p",
                "text": "<strong>Contoh pengerjaan:</strong> Diketahui [[c = 12\\text{ ft}]] dan [[A = 60^\\circ]], cari kaki [[b]]."
              },
              {
                "kind": "display",
                "text": "[[[b = 12\\cos(60^\\circ) = 12(0.5) = 6\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "Pada 60 derajat, sisi samping adalah setengah dari hipotenusa, mencerminkan kasus sinus 30 derajat. Kedua sudut lancip bertukar peran: sisi yang bersebelahan dengan 60° berhadapan dengan 30°."
              }
            ]
          },
          {
            "h3": "Mode 3: Mencari Kaki a Menggunakan Tangen",
            "blocks": [
              {
                "kind": "p",
                "text": "Pilih mode ini ketika Anda mengetahui kaki samping dan membutuhkan kaki depan. Ini adalah situasi klasik \"jarak dan sudut elevasi\": Anda berdiri pada jarak horizontal yang diketahui dan ingin mengetahui ketinggiannya. Tangen memperbesar kaki samping (atau memperkecilnya) menjadi kaki depan. Sudut mengendalikan perbandingannya, sehingga sudut yang lebih curam berarti sisi depan yang lebih tinggi untuk alas yang sama."
              },
              {
                "kind": "p",
                "text": "<strong>Contoh pengerjaan:</strong> Diketahui [[b = 8\\text{ m}]] dan [[A = 35^\\circ]], cari kaki [[a]]."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\tan(35^\\circ) \\approx 8(0.7002) \\approx 5.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Karena 35° di bawah 45°, sisi depan keluar lebih pendek dari kaki samping, sesuai dengan geometrinya."
              }
            ]
          },
          {
            "h3": "Mode 4: Mencari Kaki b Menggunakan Tangen",
            "blocks": [
              {
                "kind": "p",
                "text": "Pilih mode ini ketika Anda mengetahui kaki depan dan membutuhkan kaki samping. Mode ini menjawab pertanyaan seperti \"tingginya sudah tetap, seberapa jauh alas harus diperpanjang?\" Pembagian dengan tangen membalikkan perbesaran Mode 3: alih-alih meregangkan alas menjadi tinggi, Anda menekan tinggi kembali menjadi alas."
              },
              {
                "kind": "p",
                "text": "<strong>Contoh pengerjaan:</strong> Diketahui [[a = 4\\text{ m}]] dan [[A = 40^\\circ]], cari kaki [[b]]."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{4}{\\tan(40^\\circ)} \\approx \\frac{4}{0.8391} \\approx 4.77\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Pada 40°, sedikit di bawah 45°, sisi samping sedikit lebih panjang dari sisi depan. Perbedaan kecil itulah yang ditangkap oleh pembagian tersebut."
              }
            ]
          }
        ],
        "imgAlt": "Empat panel yang membandingkan mode kalkulator sinus, kosinus, dan dua mode tangen dengan nilai pengerjaan",
        "figcaption": "Keempat mode berdampingan: sinus dan kosinus berangkat dari hipotenusa, mode tangen mengubah antara kedua kaki."
      },
      "angle-examples": {
        "h2": "Contoh Nyata Mencari Sisi Segitiga Siku-Siku Menggunakan Sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh di bawah mengikuti alur yang sama: kenali segitiga siku-sikunya, sebutkan sisi dan sudut yang diketahui, pilih perbandingan yang menghubungkannya ke sisi yang hilang, substitusikan, hitung, dan baca jawabannya kembali dalam konteks. Perhatikan bagaimana pilihan sinus, kosinus, atau tangen selalu keluar dari geometrinya."
          }
        ],
        "examples": [
          {
            "h3": "Contoh 1: Mencari Ketinggian yang Dicapai Tangga",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah tangga sepanjang 5 m bersandar pada dinding vertikal, membentuk sudut 65 derajat dengan tanah yang datar. Dinding, tanah, dan tangga membentuk segitiga siku-siku dengan tangga sebagai hipotenusa. Diketahui: [[c = 5\\text{ m}]], [[A = 65^\\circ]]. Ketinggian yang hilang berhadapan dengan sudut 65°, sehingga sinus cocok: perbandingan itu menghubungkan sisi depan dan hipotenusa."
              },
              {
                "kind": "display",
                "text": "[[[a = 5\\sin(65^\\circ) \\approx 5(0.9063) \\approx 4.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Tangga mencapai sekitar 4.53 m ke atas dinding. Jarak horizontal dari dinding berasal dari kosinus, karena kaki itu bersebelahan dengan sudut:"
              },
              {
                "kind": "display",
                "text": "[[[b = 5\\cos(65^\\circ) \\approx 5(0.4226) \\approx 2.11\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Satu hipotenusa dan satu sudut menghasilkan kedua kaki. Perhatikan ini hanyalah perhitungan geometri; ini tidak mengatakan apa-apa tentang apakah penempatan tangga itu aman, jadi ikuti panduan pabrikan untuk penggunaan nyata."
              }
            ]
          },
          {
            "h3": "Contoh 2: Menghitung Kenaikan Landai",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah landai sederhana membentang 12 m secara horizontal dan naik dengan sudut 5 derajat di atas horizontal. Lajur dan kenaikannya adalah kaki-kaki segitiga siku-siku, dengan lajur bersebelahan dengan sudut 5°. Diketahui: [[b = 12\\text{ m}]], [[A = 5^\\circ]]. Kenaikan yang hilang adalah kaki depan, dan tangen menghubungkan sisi depan dengan sisi samping."
              },
              {
                "kind": "display",
                "text": "[[[a = 12\\tan(5^\\circ) \\approx 12(0.0875) \\approx 1.05\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Landai naik sekitar 1.05 m sepanjang 12 m lajurnya. Bedakan lajur horizontal dengan permukaan miring: lerengnya sendiri sedikit lebih panjang dari 12 m. Hasil ini tidak mensertifikasi landai terhadap aturan aksesibilitas atau bangunan."
              }
            ]
          },
          {
            "h3": "Contoh 3: Mencari Kenaikan Vertikal Atap",
            "blocks": [
              {
                "kind": "p",
                "text": "Penampang atap memiliki lajur horizontal 4.5 m dengan permukaan atap miring 30 derajat di atas horizontal. Lajur bersebelahan dengan sudut dan kenaikannya berhadapan, sehingga tangen adalah pilihan alami."
              },
              {
                "kind": "display",
                "text": "[[[a = 4.5\\tan(30^\\circ) \\approx 4.5(0.5774) \\approx 2.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Atap naik sekitar 2.60 m. Kemiringan yang lebih curam akan menaikkan nilai tangen dan bersamanya kenaikannya, itulah mengapa sudut atap sangat menentukan tinggi loteng. Sketsa sederhana ini tidak mencakup lisplang, balok bubungan, dan kelonggaran rangka yang dibutuhkan konstruksi nyata."
              }
            ]
          },
          {
            "h3": "Contoh 4: Mengukur Jangkauan Vertikal Kabel",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah kabel sepanjang 20 m membentang dari tanah ke puncak tiang, membentuk sudut 55 derajat dengan horizontal. Kabel adalah hipotenusa. Sinus memberikan jangkauan vertikal (berhadapan dengan sudut) dan kosinus memberikan jangkauan horizontal (bersebelahan dengannya), sehingga satu susunan menghasilkan kedua kaki."
              },
              {
                "kind": "display",
                "text": "[[[a = 20\\sin(55^\\circ) \\approx 20(0.8192) \\approx 16.38\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 20\\cos(55^\\circ) \\approx 20(0.5736) \\approx 11.47\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Kabel mencapai sekitar 16.38 m secara vertikal sambil membentang 11.47 m secara horizontal. Memasangkan sinus dan kosinus seperti ini adalah cara standar untuk memecah panjang miring apa pun menjadi bagian vertikal dan horizontal."
              }
            ]
          },
          {
            "h3": "Contoh 5: Memperkirakan Ketinggian dari Garis Pandang",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah garis pandang sederhana sepanjang 150 m miring 12 derajat di atas acuan horizontal. Dengan memperlakukan garis pandang sebagai hipotenusa segitiga siku-siku, sinus mengekstrak perbedaan vertikal dan kosinus jarak horizontal."
              },
              {
                "kind": "display",
                "text": "[[[a = 150\\sin(12^\\circ) \\approx 150(0.2079) \\approx 31.19\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 150\\cos(12^\\circ) \\approx 150(0.9781) \\approx 146.72\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Titik jauh berada sekitar 31.19 m di atas level acuan dan 146.72 m jauhnya secara horizontal. Survei nyata akan menambahkan koreksi untuk medan, tinggi instrumen, dan efek atmosfer; ini adalah geometri mentah di bawahnya."
              }
            ]
          },
          {
            "h3": "Contoh 6: Memperkirakan Tinggi Pohon",
            "blocks": [
              {
                "kind": "p",
                "text": "Anda berdiri 25 m secara horizontal dari batang pohon di tanah yang datar, dan sudut elevasi ke puncak pohon adalah 38 derajat. Jarak horizontal adalah kaki samping dan tinggi pohon di atas acuan mata Anda adalah kaki depan, sehingga tangen menjembatani keduanya."
              },
              {
                "kind": "display",
                "text": "[[[a = 25\\tan(38^\\circ) \\approx 25(0.7813) \\approx 19.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Puncak pohon berada sekitar 19.53 m di atas level pengamatan. Jika Anda mengukur dari tinggi mata dan bukan dari permukaan tanah, tambahkan tinggi mata Anda untuk mendapatkan tinggi pohon penuh. Metode ini mengasumsikan tanah datar antara Anda dan batang pohon."
              }
            ]
          },
          {
            "h3": "Contoh 7: Menghitung Offset Penyangga Mekanis",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah rancangan penyangga membutuhkan kaki horizontal 600 mm yang bertemu dengan vertikal pada sudut 25 derajat dari horizontal. Batang horizontal bersebelahan dengan sudut; offset vertikal yang Anda butuhkan berhadapan dengannya."
              },
              {
                "kind": "display",
                "text": "[[[a = 600\\tan(25^\\circ) \\approx 600(0.4663) \\approx 279.78\\text{ mm}]]]"
              },
              {
                "kind": "p",
                "text": "Offset vertikalnya sekitar 279.78 mm. Panjang horizontal yang sama menghasilkan offset yang lebih tinggi seiring sudut membesar, itulah mengapa perubahan sudut kecil penting dalam rakitan mekanis yang rapat. Dimensi ini saja tidak membuktikan penyangga cukup kuat secara struktural."
              }
            ]
          },
          {
            "h3": "Contoh 8: Mencari Sisi Depan dari Hipotenusa",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah segitiga siku-siku memiliki hipotenusa 8 m dengan sudut lancip 42 derajat. Sisi di seberang sudut tidak diketahui. Karena hipotenusa dan kaki depan adalah pasangan sinus, satu perkalian menyelesaikannya."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\sin(42^\\circ) \\approx 8(0.6691) \\approx 5.35\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Sisi depannya sekitar 5.35 m. Sinus selalu mengubah pengukuran hipotenusa menjadi kaki yang menghadap sudut, tanpa perlu dibalik-balik."
              }
            ]
          },
          {
            "h3": "Contoh 9: Mencari Jarak Horizontal dari Pengukuran Vertikal",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah segitiga siku-siku memiliki kaki depan 3.2 m dan sudutnya 28 derajat. Kaki samping tidak diketahui. Tangen sama dengan sisi depan dibagi sisi samping, sehingga mencari kaki samping berarti membagi kaki depan yang diketahui dengan tangen."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{3.2}{\\tan(28^\\circ)} \\approx \\frac{3.2}{0.5317} \\approx 6.02\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Jarak horizontalnya sekitar 6.02 m. Setiap kali sisi yang diketahui berada di pembilang perbandingan, pembagian adalah cara mengisolasi sisi yang tidak diketahui."
              }
            ]
          },
          {
            "h3": "Contoh 10: Memperkirakan Offset Vertikal Bangunan",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah garis pengamatan sederhana sepanjang 80 ft miring 25 derajat di atas horizontal. Garis itu adalah hipotenusa dan komponen vertikalnya berhadapan dengan sudut, sehingga sinus yang dibutuhkan."
              },
              {
                "kind": "display",
                "text": "[[[a = 80\\sin(25^\\circ) \\approx 80(0.4226) \\approx 33.81\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "Komponen vertikalnya sekitar 33.81 ft. Sudut yang lebih besar akan mendorong lebih banyak dari 80 ft ke bagian vertikal dan lebih sedikit ke bagian horizontal. Perlakukan ini sebagai perkiraan geometris kasar, bukan pengganti survei bangunan yang layak."
              }
            ]
          },
          {
            "h3": "Contoh 11: Menghitung Kenaikan Jalan Miring",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah jalan membentang 6 m secara horizontal dengan kemiringan 8 derajat. Lajur bersebelahan dengan sudut dan kenaikannya berhadapan, sehingga tangen berlaku langsung."
              },
              {
                "kind": "display",
                "text": "[[[a = 6\\tan(8^\\circ) \\approx 6(0.1405) \\approx 0.84\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Jalan naik sekitar 0.84 m. Kenaikannya berskala dengan lajur maupun tangen sudut, sehingga menggandakan lajur menggandakan kenaikan pada sudut tetap. Periksa peraturan setempat secara terpisah untuk kepatuhan kemiringan."
              }
            ]
          },
          {
            "h3": "Contoh 12: Mencari Offset Horizontal dari Kenaikan yang Diketahui",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah struktur memiliki offset vertikal 2 m, dan diagonalnya membentuk sudut 35 derajat dengan horizontal. Kaki vertikal berhadapan dengan sudut dan offset horizontalnya bersebelahan, sehingga tangen harus dibagi keluar."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{2}{\\tan(35^\\circ)} \\approx \\frac{2}{0.7002} \\approx 2.86\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Offset horizontalnya sekitar 2.86 m. Mengetahui kenaikan dan sudut menentukan alas sepenuhnya, begitulah jarak mundur diturunkan dari batasan tinggi."
              }
            ]
          }
        ],
        "summaryTable": {
          "headers": [
            "Skenario",
            "Sisi Diketahui",
            "Sudut Diketahui",
            "Perbandingan",
            "Sisi Terhitung"
          ],
          "rows": [
            [
              "Tinggi tangga",
              "c = 5 m",
              "65°",
              "Sinus",
              "a ≈ 4.53 m"
            ],
            [
              "Kenaikan landai",
              "b = 12 m",
              "5°",
              "Tangen",
              "a ≈ 1.05 m"
            ],
            [
              "Kenaikan atap",
              "b = 4.5 m",
              "30°",
              "Tangen",
              "a ≈ 2.60 m"
            ],
            [
              "Jangkauan kabel",
              "c = 20 m",
              "55°",
              "Sinus / Kosinus",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "Garis pandang",
              "c = 150 m",
              "12°",
              "Sinus / Kosinus",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "Tinggi pohon",
              "b = 25 m",
              "38°",
              "Tangen",
              "a ≈ 19.53 m"
            ],
            [
              "Offset penyangga",
              "b = 600 mm",
              "25°",
              "Tangen",
              "a ≈ 279.78 mm"
            ],
            [
              "Sisi depan dari hipotenusa",
              "c = 8 m",
              "42°",
              "Sinus",
              "a ≈ 5.35 m"
            ],
            [
              "Sisi samping dari sisi depan",
              "a = 3.2 m",
              "28°",
              "Tangen",
              "b ≈ 6.02 m"
            ],
            [
              "Offset bangunan",
              "c = 80 ft",
              "25°",
              "Sinus",
              "a ≈ 33.81 ft"
            ],
            [
              "Kenaikan jalan",
              "b = 6 m",
              "8°",
              "Tangen",
              "a ≈ 0.84 m"
            ],
            [
              "Horizontal dari kenaikan",
              "a = 2 m",
              "35°",
              "Tangen",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "Empat panel: tinggi tangga, kenaikan landai, kenaikan atap, dan tinggi pohon diselesaikan dengan trigonometri",
        "figcaption": "Trigonometri bekerja: tinggi tangga (4.53 m), landai (1.05 m), atap (2.60 m), dan pohon (19.53 m) dari satu sisi dan satu sudut."
      },
      "angle-effect": {
        "h2": "Bagaimana Sudut Memengaruhi Sisi yang Hilang",
        "blocks": [
          {
            "kind": "p",
            "text": "Tetapkan hipotenusa dan biarkan sudut membesar: sisi depan meregang sementara sisi samping menyusut. Sudut bertindak seperti tombol yang membagi hipotenusa di antara kedua kaki. Pada 0 derajat, sisi depan lenyap dan kaki samping sama dengan seluruh hipotenusa; pada 90 derajat, yang terjadi sebaliknya. Tangen berperilaku lebih dramatis karena tidak memiliki hipotenusa sebagai jangkar: saat sudut mendekati 90 derajat, kaki depan menjulang di atas kaki samping yang menyusut dan tangen memanjat tanpa batas."
          },
          {
            "kind": "p",
            "text": "Dua segitiga dapat berbagi sudut lancip yang sama namun berbeda sepenuhnya dalam ukuran. Sudut menentukan bentuknya, artinya semua perbandingan sisi yang bersesuaian cocok, sementara hipotenusa menentukan skalanya. Segitiga semacam itu sebangun: tangga 5 m pada 65° dan tangga 10 m pada 65° mencapai ketinggian dalam proporsi tepat 1:2. Tabel di bawah menunjukkan efek tombol ini untuk hipotenusa 10 satuan."
          }
        ],
        "table": {
          "headers": [
            "Sudut A",
            "Sisi depan a = 10 × sin(A)",
            "Sisi samping b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        },
        "blocksAfter": [
          {
            "kind": "p",
            "text": "Pada 45° kedua kaki seimbang tepat dan tangen sama dengan 1. Perhatikan simetrinya: baris 30° mencerminkan baris 60° dengan kaki yang tertukar, karena sisi yang berhadapan dengan 30° bersebelahan dengan 60°."
          }
        ]
      },
      "angle-degrees": {
        "h2": "Mengapa Pengaturan Sudut yang Benar Itu Penting",
        "blocks": [
          {
            "kind": "p",
            "text": "Sudut dapat diukur dalam derajat atau radian, dan kedua skala itu sama sekali tidak sepakat tentang arti sebuah angka. Lingkaran penuh adalah 360 derajat tetapi hanya sekitar 6.283 radian. Kalkulator ini mengharapkan derajat: memasukkan 30 berarti 30°, dan [[\\sin(30^\\circ) = 0.5]]. Jika angka 30 yang sama dibaca sebagai radian, sinusnya akan sekitar −0.988, jawaban yang sangat berbeda tanpa peringatan."
          },
          {
            "kind": "p",
            "text": "Jebakan ini berlaku sebaliknya juga. Misalkan sudut Anda berasal dari perhitungan yang menghasilkan radian, katakanlah 0.5 rad (sekitar 28.65°). Mengetik 0.5 ke kalkulator mode derajat menghitung sin(0.5°) ≈ 0.0087 alih-alih sin(0.5 rad) ≈ 0.479. Selalu pastikan satuan sudut Anda sebelum memasukkannya. Membulatkan sudut terlalu dini juga mengorbankan akurasi: pada sudut curam, sepersepuluh derajat menggerakkan tangen secara nyata, jadi pertahankan presisi sudut penuh hingga langkah terakhir."
          }
        ]
      },
      "angle-howto": {
        "h2": "Panduan Langkah demi Langkah Menggunakan Kalkulator",
        "steps": [
          "<strong>Pastikan segitiga siku-siku.</strong> Temukan sudut 90 derajat dalam sketsa atau situasi Anda; tanpanya, rumus-rumus ini tidak berlaku.",
          "<strong>Kenali sudut A.</strong> Pilih sudut lancip yang menjadi acuan pengukuran Anda. Sudut lancip lainnya adalah 90° dikurangi sudut ini.",
          "<strong>Beri label pada sisi-sisinya.</strong> Tandai hipotenusa c, lalu beri label a sebagai kaki di seberang A dan b sebagai kaki di samping A.",
          "<strong>Catat sisi mana yang Anda ketahui.</strong> Apakah itu hipotenusa atau salah satu kaki? Fakta tunggal ini menyempitkan pilihan menjadi dua mode.",
          "<strong>Pilih mode yang sesuai.</strong> Hipotenusa diketahui dan kaki a hilang: Kaki a dari Sinus. Hipotenusa diketahui dan kaki b hilang: Kaki b dari Kosinus. Kaki b diketahui dan kaki a hilang: Kaki a dari Tangen. Kaki a diketahui dan kaki b hilang: Kaki b dari Tangen.",
          "<strong>Masukkan panjang sisi dan satuannya.</strong> Gunakan keluarga satuan yang sama dengan satuan jawaban yang akan Anda laporkan.",
          "<strong>Masukkan sudut A dalam derajat.</strong> Periksa ulang bahwa sudutnya lancip, tepat di antara 0° dan 90°.",
          "<strong>Hitung.</strong> Sisi yang hilang muncul beserta langkah penyelesaian yang menunjukkan substitusinya.",
          "<strong>Baca langkah-langkahnya.</strong> Pastikan kalkulator menggunakan perbandingan yang Anda maksud dan angkanya cocok dengan input Anda.",
          "<strong>Periksa kewarasan hasil.</strong> Sebuah kaki harus lebih pendek dari hipotenusa. Jika Anda menyelesaikan dari hipotenusa, kedua kaki dari sinus dan kosinus harus memenuhi a² + b² = c²."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Jika antarmuka menawarkan kontrol reset, gunakan untuk mengosongkan kolom sebelum memulai perhitungan baru agar tidak ada nilai lama yang bocor ke hasil berikutnya."
          }
        ]
      },
      "angle-mistakes": {
        "h2": "Kesalahan Umum Saat Mencari Sisi Segitiga dari Sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>1. Tertukar antara sisi depan dan sisi samping.</strong> Pemberian label relatif terhadap sudut A, dan menukar kedua kaki berarti menukar sinus dengan kosinus. Perbaikan: tulis \"depan\" dan \"samping\" pada sketsa Anda sebelum menyentuh kalkulator."
          },
          {
            "kind": "p",
            "text": "<strong>2. Memilih sinus padahal yang dibutuhkan tangen.</strong> Dengan kaki yang diketahui dan tidak ada hipotenusa terlihat, sinus tidak punya pegangan. Jika sisi yang Anda ketahui adalah kaki, jawabannya melibatkan tangen. Contoh: b = 8 m, A = 35° membutuhkan a = 8·tan(35°), bukan 8·sin(35°)."
          },
          {
            "kind": "p",
            "text": "<strong>3. Menggunakan rumus tangen yang salah.</strong> Mencari kaki depan dikalikan dengan tangen; mencari kaki samping dibagi dengan tangen. Hafalkan arahnya: a = b·tan(A) menumbuhkan alas menjadi tinggi, b = a/tan(A) menyusutkan tinggi kembali menjadi alas."
          },
          {
            "kind": "p",
            "text": "<strong>4. Memasukkan sudut dalam satuan yang salah.</strong> Nilai radian yang diketik sebagai derajat (atau sebaliknya) diam-diam menghasilkan sampah. Pastikan derajat terlebih dahulu; kalkulator ini bekerja dalam derajat."
          },
          {
            "kind": "p",
            "text": "<strong>5. Memperlakukan hipotenusa sebagai kaki biasa.</strong> Hipotenusa hanya berpasangan dengan sinus dan kosinus, tidak pernah dengan tangen. Jika rumus Anda memiliki tan dan hipotenusa, ada yang salah label."
          },
          {
            "kind": "p",
            "text": "<strong>6. Menggunakan sudut acuan yang salah.</strong> Angka 65° dalam contoh tangga diukur dari tanah. Mengukur dari dinding akan menjadikannya 25°, dan setiap perbandingan akan berubah. Selalu periksa dari sisi mana sudut terbuka."
          },
          {
            "kind": "p",
            "text": "<strong>7. Mencampur meter, kaki, atau satuan lain.</strong> Hipotenusa dalam kaki dengan jawaban yang diharapkan dalam meter perlu dikonversi sebelum atau sesudah, tidak boleh dilewati. Pertahankan satu satuan di seluruh perhitungan."
          },
          {
            "kind": "p",
            "text": "<strong>8. Membulatkan nilai antara terlalu dini.</strong> Membulatkan tan(35°) menjadi 0.7 sebelum mengalikannya dengan 8 menghasilkan 5.6 secara kebetulan di sini, tetapi pembulatan yang lebih kasar di tempat lain menggeser jawaban. Pertahankan presisi penuh hingga hasil akhir."
          },
          {
            "kind": "p",
            "text": "<strong>9. Menganggap sisi di seberang sudut selalu yang terpanjang.</strong> Sisi depan hanya yang terpanjang ketika sudutnya melebihi 45°. Pada 30°, kaki depan adalah sisi terpendek segitiga."
          },
          {
            "kind": "p",
            "text": "<strong>10. Menggunakan trigonometri pada segitiga non-siku-siku.</strong> Tanpa sudut 90°, sinus, kosinus, dan tangen sebagaimana didefinisikan di sini tidak berlaku. Segitiga tumpul dan segitiga lancip membutuhkan Aturan Sinus dan Kosinus."
          },
          {
            "kind": "p",
            "text": "<strong>11. Memasukkan sudut di luar rentang lancip.</strong> Sudut 0°, 90°, atau lebih meruntuhkan segitiga atau menggambarkan bentuk yang berbeda. Kalkulator membutuhkan sudut tepat di antara 0° dan 90°."
          },
          {
            "kind": "p",
            "text": "<strong>12. Tidak mempercayai output kecil yang sebenarnya benar.</strong> Landai 5° sepanjang 12 m memang hanya naik sekitar 1.05 m. Sudut kecil menghasilkan sisi depan kecil; itulah geometrinya, bukan kesalahan."
          }
        ]
      },
      "angle-validation": {
        "h2": "Memeriksa Apakah Hasil Anda Valid Secara Matematis",
        "blocks": [
          {
            "kind": "p",
            "text": "Panjang sisi harus berupa angka positif; panjang nol atau negatif tidak menggambarkan segitiga sama sekali. Setiap kaki yang Anda hitung harus keluar lebih pendek dari hipotenusa yang Anda masukkan. Sudut acuan harus lancip, tepat di antara 0° dan 90°, dan setiap panjang dalam soal harus berbagi satu satuan."
          },
          {
            "kind": "p",
            "text": "Tangen layak mendapat perhatian ekstra di dekat tepi rentangnya. Saat sudut mendekati 90°, tangen memanjat curam, sehingga goyangan kecil pada sudut mengayunkan hasil secara dramatis. Di dekat 0°, tangen sangat kecil, dan membaginya (mode b = a/tan(A)) memperbesar derau pengukuran dengan cara yang sama. Ketika sudut Anda berada dalam beberapa derajat dari salah satu ekstrem, perlakukan input sebagai perkiraan dan output sebagai sensitif, bukan tepat."
          }
        ]
      },
      "angle-verify": {
        "h2": "Cara Memeriksa Jawaban Anda",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>Metode 1: Substitusi kembali ke perbandingan.</strong> Bagi jawaban Anda dengan sisi yang diketahui dan pastikan perbandingannya cocok dengan nilai trigonometri. Jika Anda menemukan a = 5 dari c = 10 pada 30°, periksa bahwa 5/10 = 0.5 = sin(30°)."
          },
          {
            "kind": "p",
            "text": "<strong>Metode 2: Gunakan teorema Pythagoras.</strong> Ketika Anda mengetahui dua sisi setelah perhitungan, verifikasi bahwa a² + b² = c². Ini memeriksa silang trigonometri terhadap geometri murni."
          },
          {
            "kind": "p",
            "text": "<strong>Metode 3: Periksa ukuran relatif.</strong> Setiap kaki harus lebih pendek dari hipotenusa. Kaki yang berhadapan dengan sudut lancip yang lebih besar harus menjadi kaki yang lebih panjang. Pada 30°, harapkan kaki depan menjadi yang lebih pendek."
          },
          {
            "kind": "p",
            "text": "<strong>Verifikasi pengerjaan:</strong> dari c = 10 m dan A = 30°, kalkulator memberikan a = 5 m. Cari kaki lainnya: b = 10·cos(30°) ≈ 8.66 m. Sekarang periksa Pythagoras dengan nilai tanpa pembulatan:"
          },
          {
            "kind": "display",
            "text": "[[[5^2 + (10\\cos 30^\\circ)^2 = 25 + 75 = 100 = 10^2]]"
          },
          {
            "kind": "p",
            "text": "Kesamaannya berlaku, hipotenusa yang terpanjang, dan 5 &lt; 8.66 cocok dengan geometri 30°. Ketidakcocokan kecil apa pun berasal dari pembulatan 8.66, jadi verifikasi dengan nilai tanpa pembulatan ketika presisi penting."
          }
        ]
      },
      "angle-other": {
        "h2": "Memilih Kalkulator Segitiga Siku-Siku yang Tepat",
        "blocks": [
          {
            "kind": "p",
            "text": "Halaman ini cocok untuk soal dengan satu sisi diketahui dan satu sudut lancip diketahui. Situasi lain membutuhkan alat yang berbeda."
          },
          {
            "kind": "p",
            "text": "<strong>Dua sisi diketahui, tanpa sudut:</strong> <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Kalkulator Sisi Segitiga Siku-Siku</a> menerapkan teorema Pythagoras secara langsung."
          },
          {
            "kind": "p",
            "text": "<strong>Sudut hilang, sisi-sisi diketahui:</strong> <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Kalkulator Sudut Segitiga Siku-Siku</a> menggunakan sinus, kosinus, atau tangen invers."
          },
          {
            "kind": "p",
            "text": "<strong>Butuh luas:</strong> <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Kalkulator Luas Segitiga Siku-Siku</a> menghitungnya dari kaki atau input lain."
          },
          {
            "kind": "p",
            "text": "<strong>Segitiga 30-60-90 atau 45-45-90:</strong> <a href=\"/special-right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator Segitiga Siku-Siku Khusus</a> memanfaatkan perbandingan tepatnya."
          },
          {
            "kind": "p",
            "text": "<strong>Hanya nilai perbandingannya:</strong> <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">Kalkulator Perbandingan Trigonometri</a> mengevaluasi sin, cos, dan tan tanpa menyelesaikan sisi."
          },
          {
            "kind": "p",
            "text": "<strong>Semuanya sekaligus:</strong> <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator Segitiga Siku-Siku</a> menyelesaikan segitiga penuh, sudut, luas, dan sifat turunannya dari dua input valid apa pun."
          }
        ]
      },
      "angle-conclusion": {
        "h2": "Temukan Sisi yang Hilang dengan Rumus yang Tepat",
        "blocks": [
          {
            "kind": "p",
            "text": "Mulailah dengan memberi label: sisi depan, sisi samping, dan hipotenusa relatif terhadap sudut Anda. Biarkan sisi yang diketahui memilih perbandingan: hipotenusa di tangan berarti sinus atau kosinus, kaki di tangan berarti tangen. Masukkan sudut dalam derajat, pertahankan presisi penuh hingga akhir, dan verifikasi dengan Pythagoras atau pemeriksaan ukuran cepat. Coba kalkulator di atas dengan angka Anda sendiri."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Bagaimana cara mencari sisi yang hilang menggunakan sudut?",
        "answer": "Beri label pada sisi-sisi relatif terhadap sudut: depan, samping, hipotenusa. Pilih perbandingan yang memuat sisi yang diketahui dan sisi yang hilang. Dengan hipotenusa dan sudut, gunakan a = c·sin(A) atau b = c·cos(A). Dengan satu kaki dan sudut, gunakan a = b·tan(A) atau b = a/tan(A). Substitusikan dan hitung."
      },
      {
        "question": "Rumus mana yang harus saya gunakan untuk sisi depan?",
        "answer": "Tergantung apa yang Anda ketahui. Dengan hipotenusa, gunakan a = c·sin(A). Dengan kaki samping, gunakan a = b·tan(A). Keduanya menghasilkan sisi di seberang sudut A; sisi yang diketahui menentukan bentuk mana yang berlaku."
      },
      {
        "question": "Bagaimana cara mencari sisi samping menggunakan sudut?",
        "answer": "Dengan hipotenusa diketahui, gunakan b = c·cos(A). Dengan kaki depan diketahui, gunakan b = a/tan(A). Kaki samping selalu berjalan di samping sudut A, jadi pastikan pelabelan Anda sebelum memilih."
      },
      {
        "question": "Apa perbedaan sinus, kosinus, dan tangen?",
        "answer": "Sinus menghubungkan sisi depan dengan hipotenusa, kosinus menghubungkan sisi samping dengan hipotenusa, dan tangen menghubungkan sisi depan dengan sisi samping. Sinus dan kosinus memecah panjang miring menjadi bagian-bagiannya; tangen mengubah langsung antara kedua kaki. Ketiganya menggambarkan sudut yang sama dari sisi yang berbeda."
      },
      {
        "question": "Apa arti SOH-CAH-TOA?",
        "answer": "Alat bantu ingatan: Sinus = Depan/Hipotenusa, Kosinus = Samping/Hipotenusa, Tangen = Depan/Samping. Alat ini mengingatkan pecahan mana yang cocok dengan setiap perbandingan setelah Anda memberi label pada sisi-sisinya. Alat ini tidak menggantikan langkah pelabelan."
      },
      {
        "question": "Bisakah saya mencari sisi jika saya mengetahui hipotenusa dan satu sudut?",
        "answer": "Ya, ini kasus paling sederhana. Kalikan hipotenusa dengan sin(A) untuk kaki depan atau dengan cos(A) untuk kaki samping. Satu sudut ditambah hipotenusa menentukan seluruh segitiga."
      },
      {
        "question": "Bisakah saya mencari sisi jika saya mengetahui satu kaki dan satu sudut?",
        "answer": "Ya, dengan tangen. Jika kaki yang diketahui bersebelahan, kalikan dengan tan(A) untuk mendapatkan kaki depan. Jika kaki yang diketahui berhadapan, bagi dengan tan(A) untuk mendapatkan kaki samping. Tidak diperlukan hipotenusa."
      },
      {
        "question": "Haruskah saya memasukkan sudut dalam derajat atau radian?",
        "answer": "Masukkan derajat. Kalkulator ini menafsirkan input sudut sebagai derajat, sehingga 30 berarti 30°. Nilai radian yang dimasukkan sebagai derajat menghasilkan jawaban salah tanpa peringatan. Ubah radian ke derajat terlebih dahulu dengan mengalikan 180/π."
      },
      {
        "question": "Mengapa rumus tangen menggunakan pembagian dalam satu mode?",
        "answer": "Karena tangen sama dengan sisi depan dibagi sisi samping. Menyelesaikan tan(A) = a/b untuk kaki depan menghasilkan perkalian, a = b·tan(A). Menyelesaikan persamaan yang sama untuk kaki samping menghasilkan pembagian, b = a/tan(A). Satu hubungan, dibaca dua arah."
      },
      {
        "question": "Bisakah dua segitiga berbeda memiliki sudut yang sama?",
        "answer": "Ya. Sudut menentukan bentuk tetapi bukan ukurannya, sehingga segitiga kecil dan besar dapat berbagi setiap sudut. Perbandingan sisi-sisinya cocok persis; hanya skalanya yang berbeda. Ini adalah segitiga sebangun."
      },
      {
        "question": "Bagaimana cara memverifikasi sisi yang dihitung?",
        "answer": "Substitusikan kembali ke perbandingan, misalnya periksa bahwa a/c sama dengan sin(A). Atau gunakan Pythagoras: dengan dua sisi diketahui, pastikan a² + b² = c². Periksa juga bahwa setiap kaki lebih pendek dari hipotenusa dan ukurannya masuk akal untuk sudutnya."
      },
      {
        "question": "Mengapa hasil berbasis tangen bisa menjadi sensitif di dekat 90 derajat?",
        "answer": "Tangen tumbuh tanpa batas saat sudut mendekati 90°, sehingga perubahan kecil pada sudut menghasilkan perubahan besar pada hasil. Di dekat 0° masalah sebaliknya muncul saat membagi dengan tangen yang sangat kecil. Pertahankan presisi ekstra pada sudut untuk input di dekat salah satu ekstrem."
      }
    ],
    "relatedHeading": "Kalkulator Segitiga Siku-Siku Lain yang Mungkin Berguna",
    "relatedIntro": "Setelah menemukan sisi yang hilang, lanjutkan dengan kalkulator terkait ini untuk melengkapi analisis segitiga Anda.",
    "relatedItems": [
      "Kalkulator Segitiga Siku-Siku",
      "Kalkulator Sisi Segitiga Siku-Siku",
      "Kalkulator Sudut Segitiga Siku-Siku",
      "Kalkulator Perbandingan Trigonometri",
      "Kalkulator Luas Segitiga Siku-Siku",
      "Kalkulator Segitiga Siku-Siku Khusus"
    ]
  },
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "angle-intro": "كيفية إيجاد ضلع باستخدام زاوية",
      "angle-anatomy": "فهم الأضلاع والزوايا",
      "angle-trig": "الجيب وجيب التمام والظل",
      "angle-modes": "أوضاع الحاسبة الأربعة",
      "angle-examples": "أمثلة من الحياة الواقعية",
      "angle-effect": "كيف تغير الزوايا أطوال الأضلاع",
      "angle-degrees": "الدرجات وإعدادات الحاسبة",
      "angle-howto": "استخدام الحاسبة",
      "angle-mistakes": "أخطاء شائعة",
      "angle-validation": "التحقق من صحة المدخلات",
      "angle-verify": "التحقق من إجابتك",
      "angle-other": "متى تستخدم حاسبة أخرى",
      "angle-related": "حاسبات ذات صلة",
      "angle-faq": "الأسئلة الشائعة"
    },
    "sections": {
      "angle-intro": {
        "h2": "كيفية إيجاد ضلع مثلث قائم الزاوية باستخدام زاوية",
        "blocks": [
          {
            "kind": "p",
            "text": "تخيل سلماً يستند إلى جدار. أنت تعرف أن طول السلم 5 أمتار وأنه يلتقي بالأرض بزاوية 65 درجة، لكن إلى أي ارتفاع يصل؟ حاسبة الضلع من الزاوية للمثلث قائم الزاوية تجيب عن هذا النوع من الأسئلة بالضبط: فهي تجد الضلع المفقود عندما تعرف زاوية حادة واحدة وطول ضلع واحد. ضلع واحد زائد زاوية واحدة يكفي لأن علم المثلثات يحدد شكل المثلث تماماً. النسب الثلاث، الجيب وجيب التمام والظل، تربط كل منها الزاوية بزوج مختلف من الأضلاع. الجيب يربط الضلع المقابل بالوتر، وجيب التمام يربط الضلع المجاور بالوتر، والظل يربط الضلعين مباشرة. تشرح هذه الصفحة أي نسبة تناسب حالتك، ولماذا تنجح، وكيفية استخدام الحاسبة أعلاه. وعلى عكس حاسبة نظرية فيثاغورس التي تحتاج إلى ضلعين معلومين، تعمل هذه الأداة من ضلع واحد وزاوية واحدة."
          }
        ]
      },
      "angle-anatomy": {
        "h2": "فهم أضلاع وزوايا المثلث قائم الزاوية",
        "blocks": [
          {
            "kind": "h3",
            "text": "ما هو المثلث قائم الزاوية؟"
          },
          {
            "kind": "p",
            "text": "يحتوي المثلث قائم الزاوية على زاوية واحدة قياسها 90 درجة بالضبط، وهي الزاوية نفسها التي تراها في زاوية ورقة. الزاويتان الأخريان حادتان، كل منهما أصغر من 90 درجة، ومجموعهما دائماً 90 درجة لأن مجموع زوايا أي مثلث 180. علم المثلثات في هذا الدليل ينطبق على المثلثات قائمة الزاوية فقط: فنسب الجيب وجيب التمام والظل تُعرَّف عبر الزاوية القائمة، لذا فإن استخدامها على مثلث بلا زاوية 90 درجة يعطي إجابات خاطئة."
          },
          {
            "kind": "h3",
            "text": "ما هو الوتر؟"
          },
          {
            "kind": "p",
            "text": "يقع الوتر مقابل الزاوية القائمة وهو دائماً أطول الأضلاع الثلاثة. ويحمل التسمية [[c]] اصطلاحاً. وللعثور عليه في رسم مدوَّر، ابحث عن الضلع الذي لا يلمس علامة الزاوية القائمة. ومهما دار المثلث، يبقى الوتر مقابل الزاوية المربعة."
          },
          {
            "kind": "h3",
            "text": "ما هما الضلع المقابل والضلع المجاور؟"
          },
          {
            "kind": "p",
            "text": "اختر زاوية حادة واحدة وسمِّها [[A]]. الضلع الواقع عبر [[A]] هو الضلع المقابل، ويُسمَّى [[a]]. والضلع الذي يشكِّل [[A]] مع الوتر هو الضلع المجاور، ويُسمَّى [[b]]. وهنا الجزء الذي يُربك المبتدئين: التسميات تعتمد على الزاوية التي تختارها. فالضلع نفسه الذي يكون مقابلاً للزاوية [[A]] يصبح مجاوراً عندما تنتقل مرجعيتك إلى الزاوية [[B]]. أما الوتر فلا يغير دوره أبداً. وفي هذا الدليل كله، [[a]] مقابل [[A]]، و[[b]] مجاور لـ[[A]]، و[[c]] هو الوتر."
          }
        ],
        "imgAlt": "مثلث قائم الزاوية مع الزاوية A في أسفل اليسار، والضلع a مقابل والضلع b مجاور لـA، والوتر c",
        "figcaption": "تشريح المثلث بالنسبة للزاوية A: الضلع a مقابل A، والضلع b مجاور لـA، وc هو الوتر. A + B = 90°."
      },
      "angle-trig": {
        "h2": "كيف يساعد الجيب وجيب التمام والظل في إيجاد الأضلاع المفقودة",
        "blocks": [
          {
            "kind": "p",
            "text": "النسبة المثلثية هي علاقة ثابتة بين ضلعين من أضلاع المثلث قائم الزاوية لزاوية معطاة. غيّر الزاوية فتتغير النسبة؛ وأبقِ الزاوية نفسها فيشترك كل مثلث يحمل تلك الزاوية في النسب نفسها مهما كان حجمه. ولهذا تحدد زاوية واحدة زائد ضلع واحد كل شيء آخر. كل نسبة من النسب الثلاث تُقرن الزاوية بتركيبة مختلفة من الأضلاع، لذا فإن الضلع الذي تعرفه يحدد أي نسبة تختار."
          },
          {
            "kind": "h3",
            "text": "فهم الجيب"
          },
          {
            "kind": "p",
            "text": "يقارن الجيب الضلع المقابل بالوتر: [[\\sin(A) = \\frac{a}{c}]]. لحل الضلع المفقود، اضرب الطرفين في [[c]]. يُلغى [[c]] في الطرف الأيمن، فيبقى [[a = c\\sin(A)]]. وبكلمات: الضلع المقابل يساوي الوتر مضروباً في جيب الزاوية. الزاوية الأكبر تعطي قيمة جيب أكبر، فينمو الضلع المقابل كلما انفتحت الزاوية."
          },
          {
            "kind": "h3",
            "text": "فهم جيب التمام"
          },
          {
            "kind": "p",
            "text": "يقارن جيب التمام الضلع المجاور بالوتر: [[\\cos(A) = \\frac{b}{c}]]. اضرب الطرفين في [[c]] فتحصل على [[b = c\\cos(A)]]. الضلع المجاور يساوي الوتر مضروباً في جيب تمام الزاوية. وكلما نمت الزاوية [[A]] نحو 90 درجة، انكمش الضلع المجاور نحو الصفر، وهذا يطابق الهندسة: فالزاوية تسحق الضلع المجاور."
          },
          {
            "kind": "h3",
            "text": "فهم الظل"
          },
          {
            "kind": "p",
            "text": "يقارن الظل الضلعين مباشرة: [[\\tan(A) = \\frac{a}{b}]]. وبقلبه في الاتجاهين يعطي [[a = b\\tan(A)]] و[[b = \\frac{a}{\\tan(A)}]]. استخدم الضرب عندما يكون الضلع المعلوم هو المجاور وتريد الضلع المقابل: فتكبير الضلع المجاور بالظل يمدده إلى الضلع المقابل. واستخدم القسمة عندما يكون الضلع المعلوم هو المقابل وتريد المجاور: فأنت تسأل كم قطعة بحجم الظل تتسع في الضلع المقابل. الصيغتان هما العلاقة نفسها مقروءة في اتجاهين متعاكسين."
          },
          {
            "kind": "h3",
            "text": "ماذا يعني SOH-CAH-TOA؟"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA وسيلة مساعدة للذاكرة، وليست بديلاً عن تحديد الأضلاع بشكل صحيح. SOH: الجيب = المقابل / الوتر. CAH: جيب التمام = المجاور / الوتر. TOA: الظل = المقابل / المجاور. تساعدك على اختيار النسبة بعد تسمية المقابل والمجاور والوتر بالنسبة لزاويتك. سمِّ الأضلاع أولاً دائماً؛ فالعبارة التذكارية تخبرك فقط أي كسر تكتب بعد ذلك."
          }
        ],
        "imgAlt": "ثلاث لوحات تعرض نسب الجيب وجيب التمام والظل على المثلث قائم الزاوية نفسه",
        "figcaption": "SOH-CAH-TOA على مثلث واحد: الجيب يستخدم المقابل والوتر، وجيب التمام يستخدم المجاور والوتر، والظل يستخدم الضلعين."
      },
      "angle-modes": {
        "h2": "كيفية اختيار وضع الحاسبة الصحيح",
        "blocks": [
          {
            "kind": "p",
            "text": "يعتمد الوضع الصحيح على حقيقتين: أي طول ضلع تعرفه بالفعل، وأي ضلع مفقود. جد حالتك في الجدول، ثم اقرأ المثال المحلول المطابق أدناه."
          }
        ],
        "table": {
          "headers": [
            "الضلع المعلوم",
            "الزاوية المعلومة",
            "الضلع المفقود",
            "الصيغة",
            "وضع الحاسبة",
            "متى تستخدمه"
          ],
          "rows": [
            [
              "الوتر c",
              "A",
              "الضلع a",
              "a = c × sin(A)",
              "الضلع a من الجيب",
              "الطول المائل معلوم، وتحتاج الضلع عبر الزاوية"
            ],
            [
              "الوتر c",
              "A",
              "الضلع b",
              "b = c × cos(A)",
              "الضلع b من جيب التمام",
              "الطول المائل معلوم، وتحتاج الضلع بجانب الزاوية"
            ],
            [
              "الضلع b",
              "A",
              "الضلع a",
              "a = b × tan(A)",
              "الضلع a من الظل",
              "المسافة الأفقية معلومة، وتحتاج الارتفاع العمودي"
            ],
            [
              "الضلع a",
              "A",
              "الضلع b",
              "b = a / tan(A)",
              "الضلع b من الظل",
              "الارتفاع العمودي معلوم، وتحتاج المسافة الأفقية"
            ]
          ]
        },
        "modeSections": [
          {
            "h3": "الوضع 1: إيجاد الضلع a باستخدام الجيب",
            "blocks": [
              {
                "kind": "p",
                "text": "اختر هذا الوضع عندما تعرف الوتر وتحتاج الضلع المقابل للزاوية. تأكد أن الضلع المعلوم هو الواقع عبر الزاوية القائمة، وأن زاويتك هي الزاوية الحادة التي يواجهها الضلع المقابل. الجيب هو النسبة الصحيحة لأنه يربط المقابل والوتر مباشرة. أدخل طول الوتر والزاوية بالدرجات. والنتيجة هي الضلع المقابل."
              },
              {
                "kind": "p",
                "text": "<strong>مثال محلول:</strong> بمعرفة [[c = 10\\text{ m}]] و[[A = 30^\\circ]]، أوجد الضلع [[a]]."
              },
              {
                "kind": "display",
                "text": "[[[a = 10\\sin(30^\\circ) = 10(0.5) = 5\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "الإجابة معقولة: عند 30 درجة يكون الضلع المقابل نصف الوتر تماماً، وهو فحص عملي يمكنك إجراؤه ذهنياً."
              }
            ]
          },
          {
            "h3": "الوضع 2: إيجاد الضلع b باستخدام جيب التمام",
            "blocks": [
              {
                "kind": "p",
                "text": "اختر هذا الوضع عندما تعرف الوتر وتحتاج الضلع المجاور للزاوية. يربط جيب التمام المجاور بالوتر، فيحوِّل الطول المائل إلى الضلع الممتد بجانب الزاوية. الضلع المجاور أقصر من الوتر دائماً، لأن جيب تمام الزاوية الحادة أقل من 1 دائماً."
              },
              {
                "kind": "p",
                "text": "<strong>مثال محلول:</strong> بمعرفة [[c = 12\\text{ ft}]] و[[A = 60^\\circ]]، أوجد الضلع [[b]]."
              },
              {
                "kind": "display",
                "text": "[[[b = 12\\cos(60^\\circ) = 12(0.5) = 6\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "عند 60 درجة يكون الضلع المجاور نصف الوتر، عاكساً حالة جيب 30 درجة. الزاويتان الحادتان تتبادلان الأدوار: فالضلع المجاور لـ60° هو المقابل لـ30°."
              }
            ]
          },
          {
            "h3": "الوضع 3: إيجاد الضلع a باستخدام الظل",
            "blocks": [
              {
                "kind": "p",
                "text": "اختر هذا الوضع عندما تعرف الضلع المجاور وتحتاج الضلع المقابل. هذه هي حالة \"المسافة وزاوية الارتفاع\" الكلاسيكية: تقف على مسافة أفقية معلومة وتريد الارتفاع. الظل يكبِّر الضلع المجاور (أو يصغِّره) إلى الضلع المقابل. الزاوية تتحكم في النسبة، فالزاوية الأكثر انحداراً تعني ضلعاً مقابلاً أطول للقاعدة نفسها."
              },
              {
                "kind": "p",
                "text": "<strong>مثال محلول:</strong> بمعرفة [[b = 8\\text{ m}]] و[[A = 35^\\circ]]، أوجد الضلع [[a]]."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\tan(35^\\circ) \\approx 8(0.7002) \\approx 5.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "ولأن 35° أقل من 45°، خرج الضلع المقابل أقصر من الضلع المجاور، وهذا يطابق الهندسة."
              }
            ]
          },
          {
            "h3": "الوضع 4: إيجاد الضلع b باستخدام الظل",
            "blocks": [
              {
                "kind": "p",
                "text": "اختر هذا الوضع عندما تعرف الضلع المقابل وتحتاج الضلع المجاور. يجيب عن أسئلة مثل \"الارتفاع ثابت، فكم يجب أن تمتد القاعدة؟\" القسمة على الظل تعكس تكبير الوضع 3: فبدلاً من تمديد القاعدة إلى الارتفاع، تضغط الارتفاع عائداً إلى القاعدة."
              },
              {
                "kind": "p",
                "text": "<strong>مثال محلول:</strong> بمعرفة [[a = 4\\text{ m}]] و[[A = 40^\\circ]]، أوجد الضلع [[b]]."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{4}{\\tan(40^\\circ)} \\approx \\frac{4}{0.8391} \\approx 4.77\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "عند 40°، أي أقل بقليل من 45°، يكون الضلع المجاور أطول قليلاً من الضلع المقابل. وهذا الفرق الصغير هو بالضبط ما تلتقطه القسمة."
              }
            ]
          }
        ],
        "imgAlt": "أربع لوحات تقارن أوضاع الحاسبة للجيب وجيب التمام ووضعي الظل مع قيم محلولة",
        "figcaption": "الأوضاع الأربعة جنباً إلى جنب: الجيب وجيب التمام يبدآن من الوتر، ووضعا الظل يحوِّلان بين الضلعين."
      },
      "angle-examples": {
        "h2": "أمثلة واقعية لإيجاد أضلاع المثلث قائم الزاوية باستخدام الزوايا",
        "blocks": [
          {
            "kind": "p",
            "text": "يتبع كل مثال أدناه المسار نفسه: حدد المثلث قائم الزاوية، وسمِّ الضلع والزاوية المعلومين، واختر النسبة التي تربطهما بالضلع المفقود، وعوِّض، واحسب، واقرأ الإجابة في سياقها. لاحظ كيف ينبثق اختيار الجيب أو جيب التمام أو الظل من الهندسة في كل مرة."
          }
        ],
        "examples": [
          {
            "h3": "المثال 1: إيجاد الارتفاع الذي يبلغه السلم",
            "blocks": [
              {
                "kind": "p",
                "text": "يستند سلم طوله 5 m إلى جدار عمودي، صانعاً زاوية 65 درجة مع الأرض المستوية. يشكِّل الجدار والأرض والسلم مثلثاً قائم الزاوية يكون السلم فيه هو الوتر. المعلوم: [[c = 5\\text{ m}]]، [[A = 65^\\circ]]. الارتفاع المفقود مقابل للزاوية 65°، لذا يناسب الجيب: فالنسبة تربط المقابل بالوتر."
              },
              {
                "kind": "display",
                "text": "[[[a = 5\\sin(65^\\circ) \\approx 5(0.9063) \\approx 4.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "يبلغ السلم نحو 4.53 m صعوداً على الجدار. والمسافة الأفقية من الجدار تأتي من جيب التمام، لأن ذلك الضلع مجاور للزاوية:"
              },
              {
                "kind": "display",
                "text": "[[[b = 5\\cos(65^\\circ) \\approx 5(0.4226) \\approx 2.11\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "وتر واحد وزاوية واحدة أعطيا الضلعين. لاحظ أن هذا حساب هندسي فقط؛ فهو لا يقول شيئاً عن سلامة وضع السلم، لذا اتبع إرشادات المصنِّع في الاستخدام الحقيقي."
              }
            ]
          },
          {
            "h3": "المثال 2: حساب ارتفاع منحدر",
            "blocks": [
              {
                "kind": "p",
                "text": "يمتد منحدر مبسَّط 12 m أفقياً ويرتفع بزاوية 5 درجات فوق الأفقي. الامتداد والارتفاع هما ضلعا مثلث قائم الزاوية، والامتداد مجاور للزاوية 5°. المعلوم: [[b = 12\\text{ m}]]، [[A = 5^\\circ]]. الارتفاع المفقود هو الضلع المقابل، والظل يربط المقابل بالمجاور."
              },
              {
                "kind": "display",
                "text": "[[[a = 12\\tan(5^\\circ) \\approx 12(0.0875) \\approx 1.05\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "يرتفع المنحدر نحو 1.05 m على امتداده البالغ 12 m. ميِّز بين الامتداد الأفقي والسطح المائل: فالميل نفسه أطول قليلاً من 12 m. وهذه النتيجة لا تعتمد المنحدر وفق قواعد الوصول أو البناء."
              }
            ]
          },
          {
            "h3": "المثال 3: إيجاد الارتفاع العمودي للسقف",
            "blocks": [
              {
                "kind": "p",
                "text": "لمقطع سقف امتداد أفقي 4.5 m مع سطح سقف مائل بزاوية 30 درجة فوق الأفقي. الامتداد مجاور للزاوية والارتفاع مقابل لها، لذا فالظل هو الخيار الطبيعي."
              },
              {
                "kind": "display",
                "text": "[[[a = 4.5\\tan(30^\\circ) \\approx 4.5(0.5774) \\approx 2.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "يرتفع السقف نحو 2.60 m. الميل الأكثر انحداراً يرفع قيمة الظل ومعه الارتفاع، ولهذا تقود زاوية السقف ارتفاع العلية مباشرة. هذا الرسم المبسَّط يستبعد النتوءات وألواح الذروة وبدلات الهيكل التي يحتاجها البناء الحقيقي."
              }
            ]
          },
          {
            "h3": "المثال 4: قياس الوصول العمودي لكابل",
            "blocks": [
              {
                "kind": "p",
                "text": "يمتد كابل طوله 20 m من الأرض إلى قمة عمود، صانعاً زاوية 55 درجة مع الأفقي. الكابل هو الوتر. يعطي الجيب الوصول العمودي (المقابل للزاوية) ويعطي جيب التمام الوصول الأفقي (المجاور لها)، فينتج إعداد واحد الضلعين معاً."
              },
              {
                "kind": "display",
                "text": "[[[a = 20\\sin(55^\\circ) \\approx 20(0.8192) \\approx 16.38\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 20\\cos(55^\\circ) \\approx 20(0.5736) \\approx 11.47\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "يبلغ الكابل نحو 16.38 m عمودياً بينما يمتد 11.47 m أفقياً. إقران الجيب وجيب التمام هكذا هو الطريقة القياسية لتقسيم أي طول مائل إلى جزأين عمودي وأفقي."
              }
            ]
          },
          {
            "h3": "المثال 5: تقدير الارتفاع من خط النظر",
            "blocks": [
              {
                "kind": "p",
                "text": "يميل خط نظر مبسَّط طوله 150 m بزاوية 12 درجة فوق مرجع أفقي. وبمعاملة خط النظر كوتر لمثلث قائم الزاوية، يستخرج الجيب الفرق العمودي وجيب التمام المسافة الأفقية."
              },
              {
                "kind": "display",
                "text": "[[[a = 150\\sin(12^\\circ) \\approx 150(0.2079) \\approx 31.19\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 150\\cos(12^\\circ) \\approx 150(0.9781) \\approx 146.72\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "تقع النقطة البعيدة نحو 31.19 m فوق مستوى المرجع و146.72 m بعيداً أفقياً. المسح الحقيقي يضيف تصحيحات للتضاريس وارتفاع الجهاز والتأثيرات الجوية؛ وهذه هي الهندسة الخام تحتها."
              }
            ]
          },
          {
            "h3": "المثال 6: تقدير ارتفاع شجرة",
            "blocks": [
              {
                "kind": "p",
                "text": "تقف على بعد 25 m أفقياً من جذع شجرة على أرض مستوية، وزاوية الارتفاع إلى قمة الشجرة 38 درجة. المسافة الأفقية هي الضلع المجاور وارتفاع الشجرة فوق مرجع عينك هو الضلع المقابل، فيجسر الظل بينهما."
              },
              {
                "kind": "display",
                "text": "[[[a = 25\\tan(38^\\circ) \\approx 25(0.7813) \\approx 19.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "قمة الشجرة نحو 19.53 m فوق مستوى الرصد. وإذا قست من ارتفاع العين لا من سطح الأرض، فأضف ارتفاع عينك للحصول على ارتفاع الشجرة الكامل. تفترض الطريقة أرضاً مستوية بينك وبين الجذع."
              }
            ]
          },
          {
            "h3": "المثال 7: حساب إزاحة دعامة ميكانيكية",
            "blocks": [
              {
                "kind": "p",
                "text": "يتطلب تصميم دعامة ضلعاً أفقياً 600 mm يلتقي بالعمودي بزاوية 25 درجة عن الأفقي. العضو الأفقي مجاور للزاوية؛ والإزاحة العمودية التي تحتاجها مقابلة لها."
              },
              {
                "kind": "display",
                "text": "[[[a = 600\\tan(25^\\circ) \\approx 600(0.4663) \\approx 279.78\\text{ mm}]]]"
              },
              {
                "kind": "p",
                "text": "الإزاحة العمودية نحو 279.78 mm. الطول الأفقي نفسه ينتج إزاحة أطول كلما نمت الزاوية، ولهذا تهم تغيرات الزاوية الصغيرة في التركيبات الميكانيكية الضيقة. هذا البعد وحده لا يثبت كفاية الدعامة إنشائياً."
              }
            ]
          },
          {
            "h3": "المثال 8: إيجاد الضلع المقابل من الوتر",
            "blocks": [
              {
                "kind": "p",
                "text": "لمثلث قائم الزاوية وتره 8 m وزاويته الحادة 42 درجة. الضلع عبر الزاوية مجهول. وبما أن الوتر والضلع المقابل هما ثنائي الجيب، فعملية ضرب واحدة تنهي الأمر."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\sin(42^\\circ) \\approx 8(0.6691) \\approx 5.35\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "الضلع المقابل نحو 5.35 m. الجيب يحوِّل دائماً قياس الوتر إلى الضلع المواجه للزاوية، دون حاجة لإعادة ترتيب."
              }
            ]
          },
          {
            "h3": "المثال 9: إيجاد مسافة أفقية من قياس عمودي",
            "blocks": [
              {
                "kind": "p",
                "text": "لمثلث قائم الزاوية ضلع مقابل 3.2 m والزاوية 28 درجة. الضلع المجاور مجهول. الظل يساوي المقابل على المجاور، لذا فإن حل الضلع المجاور يعني قسمة الضلع المقابل المعلوم على الظل."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{3.2}{\\tan(28^\\circ)} \\approx \\frac{3.2}{0.5317} \\approx 6.02\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "المسافة الأفقية نحو 6.02 m. وكلما كان الضلع المعلوم في بسط النسبة، كانت القسمة هي طريقة عزل الضلع المجهول."
              }
            ]
          },
          {
            "h3": "المثال 10: تقدير الإزاحة العمودية لمبنى",
            "blocks": [
              {
                "kind": "p",
                "text": "يميل خط رصد مبسَّط طوله 80 ft بزاوية 25 درجة فوق الأفقي. الخط هو الوتر والمركبة العمودية مقابلة للزاوية، فيستدعي الجيب."
              },
              {
                "kind": "display",
                "text": "[[[a = 80\\sin(25^\\circ) \\approx 80(0.4226) \\approx 33.81\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "المركبة العمودية نحو 33.81 ft. الزاوية الأكبر تدفع مزيداً من الـ80 ft إلى الجزء العمودي وأقل إلى الجزء الأفقي. تعامل مع هذا كتقدير هندسي تقريبي، لا بديلاً عن مسح مبنى سليم."
              }
            ]
          },
          {
            "h3": "المثال 11: حساب ارتفاع ممر مائل",
            "blocks": [
              {
                "kind": "p",
                "text": "يمتد ممر 6 m أفقياً بميل 8 درجات. الامتداد مجاور للزاوية والارتفاع مقابل لها، فينطبق الظل مباشرة."
              },
              {
                "kind": "display",
                "text": "[[[a = 6\\tan(8^\\circ) \\approx 6(0.1405) \\approx 0.84\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "يرتفع الممر نحو 0.84 m. الارتفاع يتناسب مع الامتداد وظل الزاوية معاً، فمضاعفة الامتداد تضاعف الارتفاع عند زاوية ثابتة. تحقق من القوانين المحلية بشكل منفصل للامتثال للميل."
              }
            ]
          },
          {
            "h3": "المثال 12: إيجاد إزاحة أفقية من ارتفاع معلوم",
            "blocks": [
              {
                "kind": "p",
                "text": "لمنشأة إزاحة عمودية 2 m، وقطرها يصنع زاوية 35 درجة مع الأفقي. الضلع العمودي مقابل للزاوية والإزاحة الأفقية مجاورة لها، لذا يجب قسمة الظل."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{2}{\\tan(35^\\circ)} \\approx \\frac{2}{0.7002} \\approx 2.86\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "الإزاحة الأفقية نحو 2.86 m. معرفة الارتفاع والزاوية تحدد القاعدة تماماً، وهكذا تُشتق مسافات الارتداد من قيود الارتفاع."
              }
            ]
          }
        ],
        "summaryTable": {
          "headers": [
            "السيناريو",
            "الضلع المعلوم",
            "الزاوية المعلومة",
            "النسبة",
            "الضلع المحسوب"
          ],
          "rows": [
            [
              "ارتفاع السلم",
              "c = 5 m",
              "65°",
              "الجيب",
              "a ≈ 4.53 m"
            ],
            [
              "ارتفاع المنحدر",
              "b = 12 m",
              "5°",
              "الظل",
              "a ≈ 1.05 m"
            ],
            [
              "ارتفاع السقف",
              "b = 4.5 m",
              "30°",
              "الظل",
              "a ≈ 2.60 m"
            ],
            [
              "وصول الكابل",
              "c = 20 m",
              "55°",
              "الجيب / جيب التمام",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "خط النظر",
              "c = 150 m",
              "12°",
              "الجيب / جيب التمام",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "ارتفاع الشجرة",
              "b = 25 m",
              "38°",
              "الظل",
              "a ≈ 19.53 m"
            ],
            [
              "إزاحة الدعامة",
              "b = 600 mm",
              "25°",
              "الظل",
              "a ≈ 279.78 mm"
            ],
            [
              "المقابل من الوتر",
              "c = 8 m",
              "42°",
              "الجيب",
              "a ≈ 5.35 m"
            ],
            [
              "المجاور من المقابل",
              "a = 3.2 m",
              "28°",
              "الظل",
              "b ≈ 6.02 m"
            ],
            [
              "إزاحة المبنى",
              "c = 80 ft",
              "25°",
              "الجيب",
              "a ≈ 33.81 ft"
            ],
            [
              "ارتفاع الممر",
              "b = 6 m",
              "8°",
              "الظل",
              "a ≈ 0.84 m"
            ],
            [
              "الأفقي من الارتفاع",
              "a = 2 m",
              "35°",
              "الظل",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "أربع لوحات: ارتفاع السلم وارتفاع المنحدر وارتفاع السقف وارتفاع الشجرة محلولة بعلم المثلثات",
        "figcaption": "علم المثلثات في العمل: ارتفاعات السلم (4.53 m) والمنحدر (1.05 m) والسقف (2.60 m) والشجرة (19.53 m) من ضلع واحد وزاوية واحدة."
      },
      "angle-effect": {
        "h2": "كيف تؤثر الزاوية في الضلع المفقود",
        "blocks": [
          {
            "kind": "p",
            "text": "ثبِّت الوتر ودع الزاوية تنمو: يتمدد الضلع المقابل بينما ينكمش الضلع المجاور. تعمل الزاوية كقرص يقسِّم الوتر بين الضلعين. عند 0 درجة يتلاشى الضلع المقابل ويساوي الضلع المجاور الوتر كله؛ وعند 90 درجة يحدث العكس. يتصرف الظل بدرامية أكبر لأنه بلا وتر يثبته: فكلما اقتربت الزاوية من 90 درجة، شاهق الضلع المقابل فوق ضلع مجاور منكمش وتسلَّق الظل بلا حد."
          },
          {
            "kind": "p",
            "text": "يمكن لمثلثين أن يشتركا في الزاوية الحادة نفسها ويختلفا تماماً في الحجم. الزاوية تثبِّت الشكل، أي أن كل نسب الأضلاع المتناظرة تتطابق، بينما يحدد الوتر المقياس. مثل هذه المثلثات متشابهة: سلم 5 m عند 65° وسلم 10 m عند 65° يبلغان ارتفاعين بنسبة 1:2 بالضبط. يوضح الجدول أدناه تأثير هذا القرص لوتر من 10 وحدات."
          }
        ],
        "table": {
          "headers": [
            "الزاوية A",
            "المقابل a = 10 × sin(A)",
            "المجاور b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        },
        "blocksAfter": [
          {
            "kind": "p",
            "text": "عند 45° يتوازن الضلعان تماماً ويساوي الظل 1. لاحظ التماثل: صف 30° يعكس صف 60° مع تبادل الضلعين، لأن الضلع المقابل لـ30° مجاور لـ60°."
          }
        ]
      },
      "angle-degrees": {
        "h2": "لماذا يهم إعداد الزاوية الصحيح",
        "blocks": [
          {
            "kind": "p",
            "text": "يمكن قياس الزوايا بالدرجات أو بالراديان، والمقياسان يختلفان تماماً في ما يعنيه الرقم. الدائرة الكاملة 360 درجة لكنها نحو 6.283 راديان فقط. تتوقع هذه الحاسبة الدرجات: إدخال 30 يعني 30°، و[[\\sin(30^\\circ) = 0.5]]. ولو قُرئت الـ30 نفسها كراديان، لكان الجيب نحو −0.988، إجابة مختلفة جذرياً دون تحذير."
          },
          {
            "kind": "p",
            "text": "يعمل الفخ بالعكس أيضاً. لنفترض أن زاويتك جاءت من حساب أنتج راديان، مثل 0.5 rad (نحو 28.65°). كتابة 0.5 في حاسبة وضع الدرجات تحسب sin(0.5°) ≈ 0.0087 بدل sin(0.5 rad) ≈ 0.479. تأكد دائماً من وحدة زاويتك قبل إدخالها. وتقريب الزاوية مبكراً يكلف الدقة أيضاً: فعند الزوايا الشديدة يحرِّك عُشر الدرجة الظل بشكل ملحوظ، لذا احتفظ بدقة الزاوية الكاملة حتى الخطوة الأخيرة."
          }
        ]
      },
      "angle-howto": {
        "h2": "دليل خطوة بخطوة لاستخدام الحاسبة",
        "steps": [
          "<strong>تأكد من المثلث قائم الزاوية.</strong> جد زاوية الـ90 درجة في رسمك أو حالتك؛ فبدونها لا تنطبق هذه الصيغ.",
          "<strong>حدد الزاوية A.</strong> اختر الزاوية الحادة التي تشير إليها قياساتك. الزاوية الحادة الأخرى هي 90° ناقص هذه.",
          "<strong>سمِّ الأضلاع.</strong> علِّم الوتر c، ثم سمِّ a الضلع المقابل لـA وb الضلع المجاور لـA.",
          "<strong>لاحظ أي ضلع تعرفه.</strong> هل هو الوتر أم أحد الضلعين؟ هذه الحقيقة الواحدة تضيِّق الخيار إلى وضعين.",
          "<strong>اختر الوضع المطابق.</strong> الوتر معلوم والضلع a مفقود: الضلع a من الجيب. الوتر معلوم والضلع b مفقود: الضلع b من جيب التمام. الضلع b معلوم والضلع a مفقود: الضلع a من الظل. الضلع a معلوم والضلع b مفقود: الضلع b من الظل.",
          "<strong>أدخل طول الضلع ووحدته.</strong> استخدم عائلة الوحدات نفسها التي ستُبلِّغ بها الإجابة.",
          "<strong>أدخل الزاوية A بالدرجات.</strong> تحقق مجدداً أنها حادة، أي بين 0° و90° حصراً.",
          "<strong>احسب.</strong> يظهر الضلع المفقود مع خطوات الحل التي تعرض التعويض.",
          "<strong>اقرأ الخطوات.</strong> تأكد أن الحاسبة استخدمت النسبة التي قصدتها وأن الأرقام تطابق مدخلاتك.",
          "<strong>افحص منطقية النتيجة.</strong> يجب أن يكون الضلع أقصر من الوتر. وإذا حللت من الوتر، فيجب أن يحقق الضلعان من الجيب وجيب التمام a² + b² = c²."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "إذا وفرت الواجهة عنصر إعادة ضبط، فاستخدمه لمسح الحقول قبل بدء حساب جديد حتى لا يتسرب أي قيمة قديمة إلى النتيجة التالية."
          }
        ]
      },
      "angle-mistakes": {
        "h2": "أخطاء شائعة عند إيجاد أضلاع المثلث من الزوايا",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>1. الخلط بين الضلع المقابل والمجاور.</strong> التسمية نسبية للزاوية A، وتبديل الضلعين يبدِّل الجيب مع جيب التمام. الحل: اكتب \"مقابل\" و\"مجاور\" على رسمك قبل لمس الحاسبة."
          },
          {
            "kind": "p",
            "text": "<strong>2. اختيار الجيب بينما المطلوب الظل.</strong> مع ضلع معلوم ولا وتر في الأفق، لا يجد الجيب ما يتمسك به. وإذا كان ضلعك المعلوم ضلعاً، فالإجابة تتضمن الظل. مثال: b = 8 m وA = 35° يحتاج a = 8·tan(35°) لا 8·sin(35°)."
          },
          {
            "kind": "p",
            "text": "<strong>3. استخدام صيغة الظل الخاطئة.</strong> إيجاد الضلع المقابل يضرب في الظل؛ وإيجاد الضلع المجاور يقسم عليه. احفظ الاتجاه: a = b·tan(A) ينمّي القاعدة إلى الارتفاع، وb = a/tan(A) يقلِّص الارتفاع عائداً إلى القاعدة."
          },
          {
            "kind": "p",
            "text": "<strong>4. إدخال الزاوية بالوحدة الخاطئة.</strong> قيمة راديان تُكتب كدرجات (أو العكس) تنتج قمامة بصمت. تأكد من الدرجات أولاً؛ فهذه الحاسبة تعمل بالدرجات."
          },
          {
            "kind": "p",
            "text": "<strong>5. معاملة الوتر كضلع عادي.</strong> الوتر يُقرن بالجيب وجيب التمام فقط، أبداً بالظل. وإذا كانت صيغتك فيها tan ووتر، فهناك تسمية خاطئة."
          },
          {
            "kind": "p",
            "text": "<strong>6. استخدام الزاوية المرجعية الخاطئة.</strong> الـ65° في مثال السلم مقيسة من الأرض. وقياسها من الجدار يجعلها 25°، وتتغير كل نسبة. تحقق دائماً من أي جهة تنفتح الزاوية."
          },
          {
            "kind": "p",
            "text": "<strong>7. خلط الأمتار والأقدام أو وحدات أخرى.</strong> وتر بالأقدام مع إجابة متوقعة بالأمتار يحتاج تحويلاً قبل أو بعد، ولا يُتجاوز أبداً. حافظ على وحدة واحدة طوال الحساب."
          },
          {
            "kind": "p",
            "text": "<strong>8. تقريب القيم الوسيطة مبكراً جداً.</strong> تقريب tan(35°) إلى 0.7 قبل الضرب في 8 يعطي 5.6 مصادفة هنا، لكن التقريب الأخشن في مواضع أخرى يزيح الإجابة. احتفظ بالدقة الكاملة حتى النتيجة النهائية."
          },
          {
            "kind": "p",
            "text": "<strong>9. افتراض أن الضلع المقابل للزاوية هو الأطول دائماً.</strong> الضلع المقابل هو الأطول فقط عندما تتجاوز الزاوية 45°. وعند 30°، يكون الضلع المقابل أقصر أضلاع المثلث."
          },
          {
            "kind": "p",
            "text": "<strong>10. استخدام علم المثلثات على مثلث غير قائم الزاوية.</strong> بلا زاوية 90°، لا ينطبق الجيب وجيب التمام والظل كما عُرِّفت هنا. المثلثات المنفرجة والحادة تحتاج قانوني الجيب وجيب التمام بدلاً من ذلك."
          },
          {
            "kind": "p",
            "text": "<strong>11. إدخال زاوية خارج النطاق الحاد.</strong> زوايا 0° أو 90° أو أكثر تنهار المثلث أو تصف شكلاً مختلفاً. تحتاج الحاسبة زاوية بين 0° و90° حصراً."
          },
          {
            "kind": "p",
            "text": "<strong>12. عدم الثقة في ناتج صغير لكنه صحيح.</strong> منحدر 5° على 12 m يرتفع حقاً نحو 1.05 m فقط. الزوايا الصغيرة تنتج أضلاعاً مقابلة صغيرة؛ تلك هي الهندسة، لا خطأ."
          }
        ]
      },
      "angle-validation": {
        "h2": "التحقق مما إذا كانت نتيجتك صحيحة رياضياً",
        "blocks": [
          {
            "kind": "p",
            "text": "يجب أن تكون أطوال الأضلاع أرقاماً موجبة؛ فالطول الصفري أو السالب لا يصف أي مثلث. وأي ضلع تحسبه يجب أن يخرج أقصر من الوتر الذي أدخلته. ويجب أن تكون الزاوية المرجعية حادة، أي بين 0° و90° حصراً، ويجب أن تشترك كل الأطوال في المسألة في وحدة واحدة."
          },
          {
            "kind": "p",
            "text": "يستحق الظل احتراماً إضافياً قرب حافتي مداه. فكلما اقتربت الزاوية من 90°، تسلَّق الظل بشدة، فيؤرجح أي تذبذب ضئيل في الزاوية النتيجة بشكل كبير. وقرب 0° يكون الظل ضئيلاً، والقسمة عليه (وضع b = a/tan(A)) تكبِّر ضجيج القياس بالطريقة نفسها. وعندما تقع زاويتك ضمن درجات قليلة من أي من الطرفين، تعامل مع المدخلات كتقريبية والمخرجات كحساسة لا دقيقة."
          }
        ]
      },
      "angle-verify": {
        "h2": "كيفية التحقق من إجابتك",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>الطريقة 1: عوِّض مجدداً في النسبة.</strong> اقسم إجابتك على الضلع المعلوم وتأكد أن النسبة تطابق القيمة المثلثية. وإذا وجدت a = 5 من c = 10 عند 30°، فتحقق أن 5/10 = 0.5 = sin(30°)."
          },
          {
            "kind": "p",
            "text": "<strong>الطريقة 2: استخدم نظرية فيثاغورس.</strong> عندما تعرف ضلعين بعد الحساب، تحقق أن a² + b² = c². هذا يفحص علم المثلثات مقابل الهندسة الخالصة."
          },
          {
            "kind": "p",
            "text": "<strong>الطريقة 3: افحص الأحجام النسبية.</strong> يجب أن يكون كل ضلع أقصر من الوتر. والضلع المقابل للزاوية الحادة الأكبر يجب أن يكون الضلع الأطول. وعند 30°، توقع أن يكون الضلع المقابل هو الأقصر."
          },
          {
            "kind": "p",
            "text": "<strong>تحقق محلول:</strong> من c = 10 m وA = 30°، تعطي الحاسبة a = 5 m. أوجد الضلع الآخر: b = 10·cos(30°) ≈ 8.66 m. والآن تحقق من فيثاغورس بقيم غير مقرَّبة:"
          },
          {
            "kind": "display",
            "text": "[[[5^2 + (10\\cos 30^\\circ)^2 = 25 + 75 = 100 = 10^2]]"
          },
          {
            "kind": "p",
            "text": "المساواة تتحقق، والوتر هو الأطول، و5 &lt; 8.66 يطابق هندسة 30°. وأي اختلاف ضئيل يأتي من تقريب 8.66، فتحقق بقيم غير مقرَّبة عندما تهم الدقة."
          }
        ]
      },
      "angle-other": {
        "h2": "اختيار حاسبة المثلث قائم الزاوية المناسبة",
        "blocks": [
          {
            "kind": "p",
            "text": "تناسب هذه الصفحة المسائل ذات ضلع معلوم واحد وزاوية حادة معلومة واحدة. الحالات الأخرى تستدعي أدوات مختلفة."
          },
          {
            "kind": "p",
            "text": "<strong>ضلعان معلومان، بلا زاوية:</strong> <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">حاسبة أضلاع المثلث قائم الزاوية</a> تطبق نظرية فيثاغورس مباشرة."
          },
          {
            "kind": "p",
            "text": "<strong>زاوية مفقودة، والأضلاع معلومة:</strong> <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">حاسبة زوايا المثلث قائم الزاوية</a> تستخدم الجيب وجيب التمام والظل العكسية."
          },
          {
            "kind": "p",
            "text": "<strong>تحتاج المساحة:</strong> <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">حاسبة مساحة المثلث قائم الزاوية</a> تحسبها من الأضلاع أو مدخلات أخرى."
          },
          {
            "kind": "p",
            "text": "<strong>مثلثات 30-60-90 أو 45-45-90:</strong> <a href=\"/special-right-triangle-calculator/\" class=\"text-primary hover:underline\">حاسبة المثلثات قائمة الزاوية الخاصة</a> تستغل نسبها الدقيقة."
          },
          {
            "kind": "p",
            "text": "<strong>قيم النسب فقط:</strong> <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">حاسبة النسب المثلثية</a> تحسب sin وcos وtan دون حل الأضلاع."
          },
          {
            "kind": "p",
            "text": "<strong>كل شيء دفعة واحدة:</strong> <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">حاسبة المثلث قائم الزاوية</a> تحل المثلث كاملاً: الزوايا والمساحة والخصائص المشتقة من أي مدخلين صالحين."
          }
        ]
      },
      "angle-conclusion": {
        "h2": "أوجد الضلع المفقود بالصيغة الصحيحة",
        "blocks": [
          {
            "kind": "p",
            "text": "ابدأ بالتسمية: المقابل والمجاور والوتر بالنسبة لزاويتك. ودع الضلع المعلوم يختار النسبة: الوتر في اليد يعني الجيب أو جيب التمام، والضلع في اليد يعني الظل. أدخل الزاوية بالدرجات، واحتفظ بالدقة الكاملة حتى النهاية، وتحقق بفيثاغورس أو بفحص سريع للحجم. جرِّب الحاسبة أعلاه بأرقامك."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "كيف أجد ضلعاً مفقوداً باستخدام زاوية؟",
        "answer": "سمِّ الأضلاع بالنسبة للزاوية: المقابل والمجاور والوتر. اختر النسبة التي تحتوي الضلع المعلوم والضلع المفقود. ومع الوتر والزاوية، استخدم a = c·sin(A) أو b = c·cos(A). ومع ضلع واحد وزاوية، استخدم a = b·tan(A) أو b = a/tan(A). عوِّض واحسب."
      },
      {
        "question": "أي صيغة أستخدم للضلع المقابل؟",
        "answer": "يعتمد على ما تعرفه. ومع الوتر، استخدم a = c·sin(A). ومع الضلع المجاور، استخدم a = b·tan(A). كلتاهما تعطي الضلع عبر الزاوية A؛ والضلع المعلوم يحدد أي صيغة تنطبق."
      },
      {
        "question": "كيف أجد الضلع المجاور باستخدام زاوية؟",
        "answer": "ومع الوتر معلوماً، استخدم b = c·cos(A). ومع الضلع المقابل معلوماً، استخدم b = a/tan(A). الضلع المجاور يمتد دائماً بجانب الزاوية A، فتأكد من تسميتك قبل الاختيار."
      },
      {
        "question": "ما الفرق بين الجيب وجيب التمام والظل؟",
        "answer": "الجيب يربط المقابل بالوتر، وجيب التمام يربط المجاور بالوتر، والظل يربط المقابل بالمجاور. الجيب وجيب التمام يقسِّمان الطول المائل إلى أجزاء؛ والظل يحوِّل مباشرة بين الضلعين. والثلاثة تصف الزاوية نفسها من جهات مختلفة."
      },
      {
        "question": "ماذا يعني SOH-CAH-TOA؟",
        "answer": "وسيلة مساعدة للذاكرة: الجيب = المقابل/الوتر، وجيب التمام = المجاور/الوتر، والظل = المقابل/المجاور. تذكِّرك أي كسر يطابق كل نسبة بعد تسمية الأضلاع. وهي لا تحل محل خطوة التسمية."
      },
      {
        "question": "هل يمكنني إيجاد ضلع إذا عرفت الوتر وزاوية واحدة؟",
        "answer": "نعم، هذه أبسط حالة. اضرب الوتر في sin(A) للضلع المقابل أو في cos(A) للضلع المجاور. زاوية واحدة زائد الوتر تحدد المثلث كله."
      },
      {
        "question": "هل يمكنني إيجاد ضلع إذا عرفت ضلعاً واحداً وزاوية واحدة؟",
        "answer": "نعم، بالظل. وإذا كان الضلع المعلوم مجاوراً، فاضرب في tan(A) للحصول على الضلع المقابل. وإذا كان الضلع المعلوم مقابلاً، فاقسم على tan(A) للحصول على الضلع المجاور. لا حاجة للوتر."
      },
      {
        "question": "هل أدخل الزوايا بالدرجات أم بالراديان؟",
        "answer": "أدخل الدرجات. تفسِّر هذه الحاسبة مدخلات الزوايا كدرجات، فالـ30 تعني 30°. وقيمة راديان تُدخل كدرجات تعطي نتيجة خاطئة دون تحذير. حوِّل الراديان إلى درجات أولاً بالضرب في 180/π."
      },
      {
        "question": "لماذا تستخدم صيغة الظل القسمة في وضع واحد؟",
        "answer": "لأن الظل يساوي المقابل مقسوماً على المجاور. حل tan(A) = a/b للضلع المقابل يعطي الضرب، a = b·tan(A). وحل المعادلة نفسها للضلع المجاور يعطي القسمة، b = a/tan(A). علاقة واحدة، مقروءة بطريقتين."
      },
      {
        "question": "هل يمكن لمثلثين مختلفين أن يشتركا في الزاوية نفسها؟",
        "answer": "نعم. الزاوية تثبِّت الشكل لا الحجم، فيمكن لمثلث صغير وكبير أن يشتركا في كل زاوية. نسب أضلاعهما تتطابق تماماً؛ ويختلف المقياس فقط. هذه مثلثات متشابهة."
      },
      {
        "question": "كيف أتحقق من الضلع المحسوب؟",
        "answer": "عوِّض مجدداً في النسبة، فتحقق مثلاً أن a/c يساوي sin(A). أو استخدم فيثاغورس: ومع ضلعين معلومين، تأكد أن a² + b² = c². وتأكد أيضاً أن كل ضلع أقصر من الوتر وأن حجمه معقول للزاوية."
      },
      {
        "question": "لماذا تصبح النتائج المعتمدة على الظل حساسة قرب 90 درجة؟",
        "answer": "ينمو الظل بلا حد كلما اقتربت الزاوية من 90°، فينتج تغير ضئيل في الزاوية تغيراً كبيراً في النتيجة. وقرب 0° تظهر المشكلة العكسية عند القسمة على ظل ضئيل. احتفظ بدقة إضافية في الزاوية للمدخلات قرب أي من الطرفين."
      }
    ],
    "relatedHeading": "حاسبات أخرى للمثلث قائم الزاوية قد تجدها مفيدة",
    "relatedIntro": "بعد إيجاد ضلعك المفقود، تابع مع هذه الحاسبات ذات الصلة لاستكمال تحليل مثلثك.",
    "relatedItems": [
      "حاسبة المثلث قائم الزاوية",
      "حاسبة أضلاع المثلث قائم الزاوية",
      "حاسبة زوايا المثلث قائم الزاوية",
      "حاسبة النسب المثلثية",
      "حاسبة مساحة المثلث قائم الزاوية",
      "حاسبة المثلثات قائمة الزاوية الخاصة"
    ]
  },
  "bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
      "angle-intro": "Как да намерим страна по ъгъл",
      "angle-anatomy": "Страни и ъгли на правоъгълен триъгълник",
      "angle-trig": "Синус, косинус и тангенс",
      "angle-modes": "Четирите режима на калкулатора",
      "angle-examples": "Примери от реалния живот",
      "angle-effect": "Как ъгълът променя дължината на страната",
      "angle-degrees": "Градуси и настройки на калкулатора",
      "angle-howto": "Как се използва калкулаторът",
      "angle-mistakes": "Често срещани грешки",
      "angle-validation": "Проверка на входа",
      "angle-verify": "Проверка на отговора",
      "angle-other": "Кога да използвате друг калкулатор",
      "angle-related": "Свързани калкулатори",
      "angle-faq": "Често задавани въпроси"
    },
    "sections": {
      "angle-intro": {
        "h2": "Как да намерим страна на правоъгълен триъгълник с помощта на ъгъл",
        "blocks": [
          {
            "kind": "p",
            "text": "Представете си стълба, опряна на стена. Знаете, че стълбата е дълга 5 метра и сключва ъгъл от 65 градуса със земята, но колко високо достига? Калкулаторът за страна на правоъгълен триъгълник по ъгъл отговаря точно на такива въпроси: той намира липсващата страна, когато знаете един остър ъгъл и една дължина на страна. Една страна плюс един ъгъл са достатъчни, защото тригонометрията определя напълно формата на триъгълника. Трите отношения, синус, косинус и тангенс, свързват ъгъла с различна двойка страни. Синусът свързва срещулежащата страна с хипотенузата, косинусът свързва прилежащата страна с хипотенузата, а тангенсът свързва двата катета директно. Тази страница обяснява кое отношение подхожда на вашата ситуация, защо работи и как да използвате калкулатора по-горе. За разлика от калкулатора за теоремата на Питагор, който се нуждае от две известни страни, този инструмент работи с една-единствена страна и един-единствен ъгъл."
          }
        ]
      },
      "angle-anatomy": {
        "h2": "Страните и ъглите на правоъгълния триъгълник",
        "blocks": [
          {
            "kind": "h3",
            "text": "Какво е правоъгълен триъгълник?"
          },
          {
            "kind": "p",
            "text": "Правоъгълният триъгълник съдържа един ъгъл от точно 90 градуса, същия ъгъл, който виждате на лист хартия. Другите два ъгъла са остри, всеки по-малък от 90 градуса, и винаги се събират до 90 градуса, защото сборът на трите ъгъла на всеки триъгълник е 180. Тригонометрията в това ръководство се прилага само за правоъгълни триъгълници: отношенията синус, косинус и тангенс са определени чрез правия ъгъл, така че използването им върху триъгълник без ъгъл от 90 градуса дава грешни отговори."
          },
          {
            "kind": "h3",
            "text": "Какво е хипотенуза?"
          },
          {
            "kind": "p",
            "text": "Хипотенузата се намира срещу правия ъгъл и винаги е най-дългата от трите страни. По споразумение получава означението [[c]]. За да я откриете в завъртяна диаграма, намерете страната, която не докосва маркера за прав ъгъл. Независимо как е обърнат триъгълникът, хипотенузата остава срещу квадратния ъгъл."
          },
          {
            "kind": "h3",
            "text": "Кои са срещулежащата и прилежащата страна?"
          },
          {
            "kind": "p",
            "text": "Изберете един остър ъгъл и го наречете [[A]]. Катетът срещу [[A]] е срещулежащата страна, означена с [[a]]. Катетът, който образува [[A]] заедно с хипотенузата, е прилежащата страна, означена с [[b]]. Ето частта, която обърква начинаещите: означенията зависят от това кой ъгъл избирате. Същият катет, който е срещулежащ на ъгъл [[A]], става прилежащ, когато смените референтния ъгъл на ъгъл [[B]]. Хипотенузата никога не сменя ролята си. В цялото това ръководство [[a]] е срещулежаща на [[A]], [[b]] е прилежаща на [[A]], а [[c]] е хипотенузата."
          }
        ],
        "imgAlt": "Правоъгълен триъгълник с ъгъл A долу вляво, катет a срещулежащ на A и катет b прилежащ на A, хипотенуза c",
        "figcaption": "Анатомия спрямо ъгъл A: страна a е срещулежаща на A, страна b е прилежаща на A, а c е хипотенузата. A + B = 90°."
      },
      "angle-trig": {
        "h2": "Как синусът, косинусът и тангенсът помагат за намирането на липсващи страни",
        "blocks": [
          {
            "kind": "p",
            "text": "Тригонометричното отношение е фиксирана връзка между две страни на правоъгълен триъгълник при даден ъгъл. Променете ъгъла и отношението се променя; запазете същия ъгъл и всеки триъгълник с този ъгъл споделя същите отношения, независимо от размера си. Ето защо един ъгъл плюс една страна определят всичко останало. Всяко от трите отношения съчетава ъгъла с различна комбинация от страни, така че страната, която знаете, определя към кое отношение да посегнете."
          },
          {
            "kind": "h3",
            "text": "Синусът"
          },
          {
            "kind": "p",
            "text": "Синусът сравнява срещулежащата страна с хипотенузата: [[\\sin(A) = \\frac{a}{c}]]. За да решите за липсващата страна, умножете двете страни по [[c]]. [[c]] отдясно се съкращава, оставайки [[a = c\\sin(A)]]. С думи: срещулежащият катет е равен на хипотенузата, мащабирана със синуса на ъгъла. По-голям ъгъл дава по-голяма стойност на синуса, така че срещулежащата страна расте с отварянето на ъгъла."
          },
          {
            "kind": "h3",
            "text": "Косинусът"
          },
          {
            "kind": "p",
            "text": "Косинусът сравнява прилежащата страна с хипотенузата: [[\\cos(A) = \\frac{b}{c}]]. Умножете двете страни по [[c]] и получавате [[b = c\\cos(A)]]. Прилежащият катет е равен на хипотенузата, мащабирана с косинуса на ъгъла. Когато ъгъл [[A]] расте към 90 градуса, прилежащата страна се свива към нула, което съответства на геометрията: ъгълът сплесква прилежащия катет."
          },
          {
            "kind": "h3",
            "text": "Тангенсът"
          },
          {
            "kind": "p",
            "text": "Тангенсът сравнява двата катета директно: [[\\tan(A) = \\frac{a}{b}]]. Преобразувано и в двете посоки дава [[a = b\\tan(A)]] и [[b = \\frac{a}{\\tan(A)}]]. Използвайте умножение, когато известният катет е прилежащ и искате срещулежащия катет: мащабирането на прилежащата страна с тангенса я разтяга в срещулежащата страна. Използвайте деление, когато известният катет е срещулежащ и искате прилежащия: питате колко парчета с размер на тангенса се събират в срещулежащия катет. Двете форми са една и съща връзка, прочетена в противоположни посоки."
          },
          {
            "kind": "h3",
            "text": "Какво означава SOH-CAH-TOA?"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA е помощ за запомняне, а не заместител на правилното идентифициране на страните. SOH: синус = срещулежаща / хипотенуза. CAH: косинус = прилежаща / хипотенуза. TOA: тангенс = срещулежаща / прилежаща. Помага ви да изберете отношението, след като сте означили срещулежащата, прилежащата страна и хипотенузата спрямо вашия ъгъл. Винаги първо означете страните; мнемониката само ви казва коя дроб да напишете след това."
          }
        ],
        "imgAlt": "Три панела, показващи отношенията синус, косинус и тангенс върху един и същ правоъгълен триъгълник",
        "figcaption": "SOH-CAH-TOA върху един триъгълник: синусът използва срещулежащия катет и хипотенузата, косинусът използва прилежащия катет и хипотенузата, тангенсът използва двата катета."
      },
      "angle-modes": {
        "h2": "Как да изберете правилния режим на калкулатора",
        "blocks": [
          {
            "kind": "p",
            "text": "Правилният режим зависи от два факта: коя дължина на страна вече знаете и коя страна липсва. Намерете вашата ситуация в таблицата, след което прочетете съответния решен пример по-долу."
          }
        ],
        "table": {
          "headers": [
            "Известна страна",
            "Известен ъгъл",
            "Търсена страна",
            "Формула",
            "Режим на калкулатора",
            "Кога да се използва"
          ],
          "rows": [
            [
              "Хипотенуза c",
              "A",
              "Катет a",
              "a = c × sin(A)",
              "Катет a от синус",
              "Известна е наклонената дължина, търси се страната срещу ъгъла"
            ],
            [
              "Хипотенуза c",
              "A",
              "Катет b",
              "b = c × cos(A)",
              "Катет b от косинус",
              "Известна е наклонената дължина, търси се страната до ъгъла"
            ],
            [
              "Катет b",
              "A",
              "Катет a",
              "a = b × tan(A)",
              "Катет a от тангенс",
              "Известно е хоризонталното разстояние, търси се вертикалното изкачване"
            ],
            [
              "Катет a",
              "A",
              "Катет b",
              "b = a / tan(A)",
              "Катет b от тангенс",
              "Известно е вертикалното изкачване, търси се хоризонталното разстояние"
            ]
          ]
        },
        "modeSections": [
          {
            "h3": "Режим 1: Намиране на катет a чрез синус",
            "blocks": [
              {
                "kind": "p",
                "text": "Изберете този режим, когато знаете хипотенузата и търсите страната срещу ъгъла. Уверете се, че известната страна е тази срещу правия ъгъл, и че вашият ъгъл е острият ъгъл, срещу който е обърната срещулежащата страна. Синусът е правилното отношение, защото свързва директно срещулежащата страна и хипотенузата. Въведете дължината на хипотенузата и ъгъла в градуси. Резултатът е срещулежащият катет."
              },
              {
                "kind": "p",
                "text": "<strong>Решен пример:</strong> Дадено [[c = 10\\text{ m}]] и [[A = 30^\\circ]], намерете катет [[a]]."
              },
              {
                "kind": "display",
                "text": "[[[a = 10\\sin(30^\\circ) = 10(0.5) = 5\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Отговорът е разумен: при 30 градуса срещулежащата страна е точно половината от хипотенузата, удобна проверка, която можете да направите наум."
              }
            ]
          },
          {
            "h3": "Режим 2: Намиране на катет b чрез косинус",
            "blocks": [
              {
                "kind": "p",
                "text": "Изберете този режим, когато знаете хипотенузата и търсите страната, прилежаща на ъгъла. Косинусът свързва прилежащата страна и хипотенузата, така че превръща наклонената дължина в катета, минаващ покрай ъгъла. Прилежащата страна винаги е по-къса от хипотенузата, тъй като косинусът на остър ъгъл винаги е по-малък от 1."
              },
              {
                "kind": "p",
                "text": "<strong>Решен пример:</strong> Дадено [[c = 12\\text{ ft}]] и [[A = 60^\\circ]], намерете катет [[b]]."
              },
              {
                "kind": "display",
                "text": "[[[b = 12\\cos(60^\\circ) = 12(0.5) = 6\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "При 60 градуса прилежащата страна е половината от хипотенузата, огледално на синусовия случай при 30 градуса. Двата остри ъгъла разменят ролите си: страната, прилежаща на 60°, е срещулежаща на 30°."
              }
            ]
          },
          {
            "h3": "Режим 3: Намиране на катет a чрез тангенс",
            "blocks": [
              {
                "kind": "p",
                "text": "Изберете този режим, когато знаете прилежащия катет и търсите срещулежащия катет. Това е класическата ситуация „разстояние и ъгъл на изкачване“: стоите на известно хоризонтално разстояние и искате височината. Тангенсът мащабира прилежащия катет нагоре (или надолу) в срещулежащия катет. Ъгълът контролира отношението, така че по-стръмен ъгъл означава по-висока срещулежаща страна при същата основа."
              },
              {
                "kind": "p",
                "text": "<strong>Решен пример:</strong> Дадено [[b = 8\\text{ m}]] и [[A = 35^\\circ]], намерете катет [[a]]."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\tan(35^\\circ) \\approx 8(0.7002) \\approx 5.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Тъй като 35° е под 45°, срещулежащата страна се оказва по-къса от прилежащия катет, което съответства на геометрията."
              }
            ]
          },
          {
            "h3": "Режим 4: Намиране на катет b чрез тангенс",
            "blocks": [
              {
                "kind": "p",
                "text": "Изберете този режим, когато знаете срещулежащия катет и търсите прилежащия катет. Той отговаря на въпроси като „изкачването е фиксирано, колко назад трябва да се простира основата?“. Делението на тангенса обръща мащабирането от Режим 3: вместо да разтягате основата във височината, свивате височината обратно в основата."
              },
              {
                "kind": "p",
                "text": "<strong>Решен пример:</strong> Дадено [[a = 4\\text{ m}]] и [[A = 40^\\circ]], намерете катет [[b]]."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{4}{\\tan(40^\\circ)} \\approx \\frac{4}{0.8391} \\approx 4.77\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "При 40°, точно под 45°, прилежащата страна е малко по-дълга от срещулежащата страна. Тази малка разлика е точно това, което делението улавя."
              }
            ]
          }
        ],
        "imgAlt": "Четири панела, сравняващи режимите със синус, косинус и двата режима с тангенс, с изчислени стойности",
        "figcaption": "Четирите режима един до друг: синусът и косинусът започват от хипотенузата, а режимите с тангенс преобразуват между двата катета."
      },
      "angle-examples": {
        "h2": "Примери от реалния живот за намиране на страни на правоъгълен триъгълник с помощта на ъгли",
        "blocks": [
          {
            "kind": "p",
            "text": "Всеки пример по-долу следва един и същ път: открийте правоъгълния триъгълник, назовете известната страна и ъгъла, изберете отношението, което ги свързва с липсващата страна, заместете, изчислете и прочетете отговора в контекста му. Наблюдавайте как изборът на синус, косинус или тангенс произтича от геометрията всеки път."
          }
        ],
        "examples": [
          {
            "h3": "Пример 1: Намиране на височината, до която достига стълбата",
            "blocks": [
              {
                "kind": "p",
                "text": "Стълба от 5 m е опряна на вертикална стена, сключвайки ъгъл от 65 градуса с равната земя. Стената, земята и стълбата образуват правоъгълен триъгълник, в който стълбата е хипотенузата. Известно: [[c = 5\\text{ m}]], [[A = 65^\\circ]]. Липсващата височина е срещу ъгъла от 65°, така че синусът подхожда: отношението свързва срещулежащата страна и хипотенузата."
              },
              {
                "kind": "display",
                "text": "[[[a = 5\\sin(65^\\circ) \\approx 5(0.9063) \\approx 4.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Стълбата достига около 4.53 m нагоре по стената. Хоризонталното разстояние от стената идва от косинуса, тъй като този катет е прилежащ на ъгъла:"
              },
              {
                "kind": "display",
                "text": "[[[b = 5\\cos(65^\\circ) \\approx 5(0.4226) \\approx 2.11\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Една хипотенуза и един ъгъл дадоха и двата катета. Обърнете внимание, че това е само геометрично изчисление; то не казва нищо за това дали разполагането на стълбата е безопасно, така че при реална употреба следвайте указанията на производителя."
              }
            ]
          },
          {
            "h3": "Пример 2: Изчисляване на изкачването на рампа",
            "blocks": [
              {
                "kind": "p",
                "text": "Опростена рампа минава 12 m хоризонтално и се изкачва под 5 градуса над хоризонталата. Хоризонталният участък и изкачването са катетите на правоъгълен триъгълник, като участъкът е прилежащ на ъгъла от 5°. Известно: [[b = 12\\text{ m}]], [[A = 5^\\circ]]. Липсващото изкачване е срещулежащият катет, а тангенсът свързва срещулежащата и прилежащата страна."
              },
              {
                "kind": "display",
                "text": "[[[a = 12\\tan(5^\\circ) \\approx 12(0.0875) \\approx 1.05\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Рампата се изкачва с около 1.05 m върху своите 12 m хоризонтален участък. Различавайте хоризонталния участък от наклонената повърхност: самата наклонена повърхност е малко по-дълга от 12 m. Този резултат не удостоверява рампата спрямо правилата за достъпност или строителните норми."
              }
            ]
          },
          {
            "h3": "Пример 3: Намиране на вертикалното изкачване на покрив",
            "blocks": [
              {
                "kind": "p",
                "text": "Напречното сечение на покрив има хоризонтален участък от 4.5 m, като покривната повърхност е наклонена под 30 градуса над хоризонталата. Участъкът е прилежащ на ъгъла, а изкачването е срещулежащо, така че тангенсът е естественият избор."
              },
              {
                "kind": "display",
                "text": "[[[a = 4.5\\tan(30^\\circ) \\approx 4.5(0.5774) \\approx 2.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Покривът се изкачва с около 2.60 m. По-стръмният наклон би увеличил стойността на тангенса и с нея изкачването, затова ъгълът на покрива определя толкова директно височината на тавана. Тази опростена скица пропуска надвесите, билата и строителните допуски, които реалното строителство изисква."
              }
            ]
          },
          {
            "h3": "Пример 4: Измерване на вертикалния достиг на кабел",
            "blocks": [
              {
                "kind": "p",
                "text": "Кабел от 20 m се простира от земята до върха на стълб, образувайки ъгъл от 55 градуса с хоризонталата. Кабелът е хипотенузата. Синусът дава вертикалния достиг (срещу ъгъла), а косинусът дава хоризонталния достиг (прилежащ на него), така че една настройка дава и двата катета."
              },
              {
                "kind": "display",
                "text": "[[[a = 20\\sin(55^\\circ) \\approx 20(0.8192) \\approx 16.38\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 20\\cos(55^\\circ) \\approx 20(0.5736) \\approx 11.47\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Кабелът достига около 16.38 m вертикално, като се простира 11.47 m хоризонтално. Сдвояването на синус и косинус по този начин е стандартният начин за разделяне на всяка наклонена дължина на вертикална и хоризонтална част."
              }
            ]
          },
          {
            "h3": "Пример 5: Оценка на височина от линия на видимост",
            "blocks": [
              {
                "kind": "p",
                "text": "Опростена линия на видимост от 150 m се накланя под 12 градуса над хоризонтална референтна линия. Третирайки линията на видимост като хипотенуза на правоъгълен триъгълник, синусът извлича вертикалната разлика, а косинусът извлича хоризонталното разстояние."
              },
              {
                "kind": "display",
                "text": "[[[a = 150\\sin(12^\\circ) \\approx 150(0.2079) \\approx 31.19\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 150\\cos(12^\\circ) \\approx 150(0.9781) \\approx 146.72\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Отдалечената точка се намира на около 31.19 m над референтното ниво и на 146.72 m хоризонтално. Реалното геодезическо измерване би добавило корекции за терена, височината на инструмента и атмосферните ефекти; това е суровата геометрия отдолу."
              }
            ]
          },
          {
            "h3": "Пример 6: Оценка на височината на дърво",
            "blocks": [
              {
                "kind": "p",
                "text": "Стоите на 25 m хоризонтално от ствола на дърво върху равна земя, а ъгълът на изкачване към върха на дървото е 38 градуса. Хоризонталното разстояние е прилежащият катет, а височината на дървото над вашето ниво на наблюдение е срещулежащият катет, така че тангенсът ги свързва."
              },
              {
                "kind": "display",
                "text": "[[[a = 25\\tan(38^\\circ) \\approx 25(0.7813) \\approx 19.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Върхът на дървото е на около 19.53 m над нивото на наблюдение. Ако сте мерили от височината на очите си, а не от нивото на земята, добавете височината на очите си, за да получите пълната височина на дървото. Методът предполага равна земя между вас и ствола."
              }
            ]
          },
          {
            "h3": "Пример 7: Изчисляване на отместването на механична подпора",
            "blocks": [
              {
                "kind": "p",
                "text": "Проект на подпора изисква хоризонтален катет от 600 mm, сключващ ъгъл от 25 градуса с хоризонталата. Хоризонталният елемент е прилежащ на ъгъла; вертикалното отместване, от което се нуждаете, е срещулежащо на него."
              },
              {
                "kind": "display",
                "text": "[[[a = 600\\tan(25^\\circ) \\approx 600(0.4663) \\approx 279.78\\text{ mm}]]]"
              },
              {
                "kind": "p",
                "text": "Вертикалното отместване е около 279.78 mm. Същата хоризонтална дължина дава по-високо отместване с нарастването на ъгъла, затова малките промени в ъгъла имат значение при стегнатите механични сглобки. Само този размер не доказва, че подпората е конструктивно адекватна."
              }
            ]
          },
          {
            "h3": "Пример 8: Намиране на срещулежащата страна от хипотенуза",
            "blocks": [
              {
                "kind": "p",
                "text": "Правоъгълен триъгълник има хипотенуза от 8 m с остър ъгъл от 42 градуса. Страната срещу ъгъла е неизвестна. Тъй като хипотенузата и срещулежащият катет са синусовата двойка, едно умножение приключва задачата."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\sin(42^\\circ) \\approx 8(0.6691) \\approx 5.35\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Срещулежащата страна е около 5.35 m. Синусът винаги превръща измерването на хипотенуза в катета, обърнат към ъгъла, без нужда от преобразуване."
              }
            ]
          },
          {
            "h3": "Пример 9: Намиране на хоризонтално разстояние от вертикално измерване",
            "blocks": [
              {
                "kind": "p",
                "text": "Правоъгълен триъгълник има срещулежащ катет от 3.2 m, а ъгълът е 28 градуса. Прилежащият катет е неизвестен. Тангенсът е равен на срещулежащия, делен на прилежащия, така че решаването за прилежащия катет означава деление на известния срещулежащ катет на тангенса."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{3.2}{\\tan(28^\\circ)} \\approx \\frac{3.2}{0.5317} \\approx 6.02\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Хоризонталното разстояние е около 6.02 m. Когато известната страна стои в числителя на отношението, делението е начинът да изолирате неизвестната страна."
              }
            ]
          },
          {
            "h3": "Пример 10: Оценка на вертикалното отместване на сграда",
            "blocks": [
              {
                "kind": "p",
                "text": "Опростена линия на наблюдение от 80 ft се накланя под 25 градуса над хоризонталата. Линията е хипотенузата, а вертикалният компонент е срещу ъгъла, което изисква синус."
              },
              {
                "kind": "display",
                "text": "[[[a = 80\\sin(25^\\circ) \\approx 80(0.4226) \\approx 33.81\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "Вертикалният компонент е около 33.81 ft. По-голям ъгъл би изтласкал повече от 80 ft във вертикалната част и по-малко в хоризонталната част. Третирайте това като груба геометрична оценка, а не като заместител на надлежно строително измерване."
              }
            ]
          },
          {
            "h3": "Пример 11: Изчисляване на изкачването на наклонена алея",
            "blocks": [
              {
                "kind": "p",
                "text": "Алея минава 6 m хоризонтално при наклон от 8 градуса. Участъкът е прилежащ на ъгъла, а изкачването е срещулежащо, така че тангенсът се прилага директно."
              },
              {
                "kind": "display",
                "text": "[[[a = 6\\tan(8^\\circ) \\approx 6(0.1405) \\approx 0.84\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Алеята се изкачва с около 0.84 m. Изкачването се мащабира както с участъка, така и с тангенса на ъгъла, така че удвояването на участъка удвоява изкачването при фиксиран ъгъл. Проверете отделно местните норми за съответствие на наклона."
              }
            ]
          },
          {
            "h3": "Пример 12: Намиране на хоризонтално отместване от известно изкачване",
            "blocks": [
              {
                "kind": "p",
                "text": "Съоръжение има вертикално отместване от 2 m, а неговият диагонал сключва ъгъл от 35 градуса с хоризонталата. Вертикалният катет е срещу ъгъла, а хоризонталното отместване е прилежащо, така че тангенсът трябва да бъде разделен."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{2}{\\tan(35^\\circ)} \\approx \\frac{2}{0.7002} \\approx 2.86\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Хоризонталното отместване е около 2.86 m. Познаването на изкачването и ъгъла определя напълно основата, ето как се извеждат отстоянията от ограниченията във височината."
              }
            ]
          }
        ],
        "summaryTable": {
          "headers": [
            "Сценарий",
            "Известна страна",
            "Известен ъгъл",
            "Отношение",
            "Изчислена страна"
          ],
          "rows": [
            [
              "Височина на стълба",
              "c = 5 m",
              "65°",
              "Синус",
              "a ≈ 4.53 m"
            ],
            [
              "Изкачване на рампа",
              "b = 12 m",
              "5°",
              "Тангенс",
              "a ≈ 1.05 m"
            ],
            [
              "Изкачване на покрив",
              "b = 4.5 m",
              "30°",
              "Тангенс",
              "a ≈ 2.60 m"
            ],
            [
              "Достиг на кабел",
              "c = 20 m",
              "55°",
              "Синус / Косинус",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "Линия на видимост",
              "c = 150 m",
              "12°",
              "Синус / Косинус",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "Височина на дърво",
              "b = 25 m",
              "38°",
              "Тангенс",
              "a ≈ 19.53 m"
            ],
            [
              "Отместване на подпора",
              "b = 600 mm",
              "25°",
              "Тангенс",
              "a ≈ 279.78 mm"
            ],
            [
              "Срещулежаща от хипотенуза",
              "c = 8 m",
              "42°",
              "Синус",
              "a ≈ 5.35 m"
            ],
            [
              "Прилежаща от срещулежаща",
              "a = 3.2 m",
              "28°",
              "Тангенс",
              "b ≈ 6.02 m"
            ],
            [
              "Отместване на сграда",
              "c = 80 ft",
              "25°",
              "Синус",
              "a ≈ 33.81 ft"
            ],
            [
              "Изкачване на алея",
              "b = 6 m",
              "8°",
              "Тангенс",
              "a ≈ 0.84 m"
            ],
            [
              "Хоризонтално от изкачване",
              "a = 2 m",
              "35°",
              "Тангенс",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "Четири панела: височина на стълба, изкачване на рампа, изкачване на покрив и височина на дърво, решени с тригонометрия",
        "figcaption": "Тригонометрия в действие: височини на стълба (4.53 m), рампа (1.05 m), покрив (2.60 m) и дърво (19.53 m) от една страна и един ъгъл."
      },
      "angle-effect": {
        "h2": "Как ъгълът влияе върху липсващата страна",
        "blocks": [
          {
            "kind": "p",
            "text": "Фиксирайте хипотенузата и оставете ъгъла да расте: срещулежащата страна се разтяга, докато прилежащата страна се свива. Ъгълът действа като регулатор, разпределящ хипотенузата между двата катета. При 0 градуса срещулежащата страна изчезва, а прилежащият катет е равен на цялата хипотенуза; при 90 градуса се случва обратното. Тангенсът се държи по-драматично, защото няма хипотенуза, която да го закотви: когато ъгълът се приближи до 90 градуса, срещулежащият катет се извисява над свиващия се прилежащ катет и тангенсът расте без граница."
          },
          {
            "kind": "p",
            "text": "Два триъгълника могат да споделят един и същ остър ъгъл, но да се различават напълно по размер. Ъгълът фиксира формата, което означава, че всички съответстващи отношения на страни съвпадат, докато хипотенузата задава мащаба. Такива триъгълници са подобни: стълба от 5 m при 65° и стълба от 10 m при 65° достигат височини в точно съотношение 1:2. Таблицата по-долу показва този ефект на регулатора за хипотенуза от 10 единици."
          }
        ],
        "table": {
          "headers": [
            "Ъгъл A",
            "Срещулежаща a = 10 × sin(A)",
            "Прилежаща b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        },
        "blocksAfter": [
          {
            "kind": "p",
            "text": "При 45° катетите са в точно равновесие и тангенсът е равен на 1. Забележете симетрията: редът за 30° отразява реда за 60° с разменени катети, защото страната, срещулежаща на 30°, е прилежаща на 60°."
          }
        ]
      },
      "angle-degrees": {
        "h2": "Защо правилната настройка на ъгъла е важна",
        "blocks": [
          {
            "kind": "p",
            "text": "Ъглите могат да се измерват в градуси или в радиани, а двете скали напълно се разминават в това какво означава едно число. Пълният кръг е 360 градуса, но само около 6.283 радиана. Този калкулатор очаква градуси: въвеждането на 30 означава 30°, а [[\\sin(30^\\circ) = 0.5]]. Ако същото 30 се прочете като радиани, синусът би бил около −0.988, диво различен отговор без предупреждение."
          },
          {
            "kind": "p",
            "text": "Капанът работи и в обратната посока. Да предположим, че вашият ъгъл идва от изчисление, което е дало радиани, например 0.5 rad (около 28.65°). Въвеждането на 0.5 в калкулатор в градусен режим изчислява sin(0.5°) ≈ 0.0087 вместо sin(0.5 rad) ≈ 0.479. Винаги потвърждавайте в каква единица е вашият ъгъл, преди да го въведете. Ранното закръгляне на ъгъла също струва точност: при стръмни ъгли десета от градуса движи тангенса забележимо, затова пазете пълната точност на ъгъла до последната стъпка."
          }
        ]
      },
      "angle-howto": {
        "h2": "Ръководство стъпка по стъпка за използване на калкулатора",
        "steps": [
          "<strong>Потвърдете правоъгълния триъгълник.</strong> Намерете ъгъла от 90 градуса във вашата скица или ситуация; без него тези формули не се прилагат.",
          "<strong>Определете ъгъл A.</strong> Изберете острия ъгъл, към който се отнасят вашите измервания. Другият остър ъгъл е 90° минус този.",
          "<strong>Означете страните.</strong> Маркирайте хипотенузата c, след това означете a като катета срещу A и b като катета, прилежащ на A.",
          "<strong>Отбележете коя страна знаете.</strong> Хипотенузата ли е или един от катетите? Този единствен факт стеснява избора до два режима.",
          "<strong>Изберете съответния режим.</strong> Хипотенузата е известна, а катет a липсва: Катет a от синус. Хипотенузата е известна, а катет b липсва: Катет b от косинус. Катет b е известен, а катет a липсва: Катет a от тангенс. Катет a е известен, а катет b липсва: Катет b от тангенс.",
          "<strong>Въведете дължината на страната и нейната единица.</strong> Използвайте същото семейство единици, в което ще отчетете отговора.",
          "<strong>Въведете ъгъл A в градуси.</strong> Проверете дали е остър, строго между 0° и 90°.",
          "<strong>Изчислете.</strong> Липсващата страна се появява със стъпки на решението, показващи заместването.",
          "<strong>Прочетете стъпките.</strong> Потвърдете, че калкулаторът е използвал отношението, което сте възнамерявали, и че числата съответстват на вашите входни данни.",
          "<strong>Проверете резултата за разумност.</strong> Катетът трябва да е по-къс от хипотенузата. Ако сте решили от хипотенузата, и двата катета от синус и косинус трябва да удовлетворяват a² + b² = c²."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Ако интерфейсът предлага бутон за нулиране, използвайте го, за да изчистите полетата, преди да започнете ново изчисление, така че остаряла стойност да не се промъкне в следващия резултат."
          }
        ]
      },
      "angle-mistakes": {
        "h2": "Често срещани грешки при намиране на страни на триъгълник от ъгли",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>1. Объркване на срещулежащата и прилежащата страна.</strong> Означението е спрямо ъгъл A, а размяната на двата катета разменя синуса с косинуса. Поправка: напишете „срещу“ и „прилеж“ върху скицата си, преди да докоснете калкулатора."
          },
          {
            "kind": "p",
            "text": "<strong>2. Избор на синус, когато се изисква тангенс.</strong> С известен катет и без хипотенуза в полезрението, синусът няма за какво да се захване. Ако известната ви страна е катет, отговорът включва тангенс. Пример: b = 8 m, A = 35° изисква a = 8·tan(35°), а не 8·sin(35°)."
          },
          {
            "kind": "p",
            "text": "<strong>3. Използване на грешната формула с тангенс.</strong> Намирането на срещулежащия катет умножава по тангенса; намирането на прилежащия катет дели на него. Запомнете посоката: a = b·tan(A) разраства основата във височината, b = a/tan(A) свива височината обратно в основата."
          },
          {
            "kind": "p",
            "text": "<strong>4. Въвеждане на ъгъла в грешна единица.</strong> Стойност в радиани, въведена като градуси (или обратно), тихо дава боклук. Първо потвърдете градусите; този калкулатор работи в градуси."
          },
          {
            "kind": "p",
            "text": "<strong>5. Третиране на хипотенузата като обикновен катет.</strong> Хипотенузата се съчетава само със синус и косинус, никога с тангенс. Ако формулата ви има tan и хипотенуза, нещо е означено грешно."
          },
          {
            "kind": "p",
            "text": "<strong>6. Използване на грешен референтен ъгъл.</strong> 65° в примера със стълбата се измерват от земята. Измерването от стената вместо това би ги направило 25°, а всяко отношение би се променило. Винаги проверявайте от коя страна се отваря ъгълът."
          },
          {
            "kind": "p",
            "text": "<strong>7. Смесване на метри, футове или други единици.</strong> Хипотенуза във футове с отговор, очакван в метри, се нуждае от преобразуване преди или след, никога пропуснато. Пазете една единица през цялото изчисление."
          },
          {
            "kind": "p",
            "text": "<strong>8. Твърде ранно закръгляне на междинните стойности.</strong> Закръглянето на tan(35°) до 0.7 преди умножението по 8 дава 5.6 случайно тук, но по-грубото закръгляне другаде отклонява отговора. Пазете пълната точност до крайния резултат."
          },
          {
            "kind": "p",
            "text": "<strong>9. Предположение, че страната срещу ъгъла винаги е най-дългата.</strong> Срещулежащата страна е най-дълга само когато ъгълът надвишава 45°. При 30° срещулежащият катет е най-късата страна на триъгълника."
          },
          {
            "kind": "p",
            "text": "<strong>10. Използване на тригонометрия върху неправ правоъгълен триъгълник.</strong> Без ъгъл от 90° синусът, косинусът и тангенсът, както са определени тук, не се прилагат. Тъпоъгълните и остроъгълните триъгълници се нуждаят вместо това от синусовата и косинусовата теорема."
          },
          {
            "kind": "p",
            "text": "<strong>11. Въвеждане на ъгъл извън острия диапазон.</strong> Ъгли от 0°, 90° или повече свиват триъгълника или описват различна фигура. Калкулаторът се нуждае от ъгъл строго между 0° и 90°."
          },
          {
            "kind": "p",
            "text": "<strong>12. Недоверие към малък, но правилен резултат.</strong> Рампа от 5° върху 12 m наистина се изкачва само с около 1.05 m. Малките ъгли дават малки срещулежащи страни; това е геометрията, а не грешка."
          }
        ]
      },
      "angle-validation": {
        "h2": "Проверка дали резултатът ви е математически валиден",
        "blocks": [
          {
            "kind": "p",
            "text": "Дължините на страните трябва да са положителни числа; нулева или отрицателна дължина не описва никакъв триъгълник. Всеки катет, който изчислите, трябва да се окаже по-къс от въведената хипотенуза. Референтният ъгъл трябва да е остър, строго между 0° и 90°, а всяка дължина в задачата трябва да споделя една единица."
          },
          {
            "kind": "p",
            "text": "Тангенсът заслужава допълнително уважение близо до краищата на своя диапазон. Когато ъгълът се приближи до 90°, тангенсът се изкачва стръмно, така че малка колебания в ъгъла люлеят резултата драматично. Близо до 0° тангенсът е мъничък, а делението на него (режимът b = a/tan(A)) увеличава шума от измерванията по същия начин. Когато вашият ъгъл е в рамките на няколко градуса от която и да е крайност, третирайте входните данни като приблизителни, а изхода като чувствителен, а не точен."
          }
        ]
      },
      "angle-verify": {
        "h2": "Как да проверите отговора си",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>Метод 1: Заместете обратно в отношението.</strong> Разделете отговора си на известната страна и потвърдете, че отношението съвпада с тригонометричната стойност. Ако сте намерили a = 5 от c = 10 при 30°, проверете дали 5/10 = 0.5 = sin(30°)."
          },
          {
            "kind": "p",
            "text": "<strong>Метод 2: Използвайте питагоровата теорема.</strong> Когато знаете две страни след изчислението, проверете дали a² + b² = c². Това кръстосано проверява тригонометрията спрямо чистата геометрия."
          },
          {
            "kind": "p",
            "text": "<strong>Метод 3: Проверете относителните размери.</strong> Всеки катет трябва да е по-къс от хипотенузата. Катетът срещу по-големия остър ъгъл трябва да е по-дългият катет. При 30° очаквайте срещулежащият катет да е по-късият."
          },
          {
            "kind": "p",
            "text": "<strong>Решена проверка:</strong> от c = 10 m и A = 30° калкулаторът дава a = 5 m. Намерете другия катет: b = 10·cos(30°) ≈ 8.66 m. Сега проверете Питагор с незакръглени стойности:"
          },
          {
            "kind": "display",
            "text": "[[[5^2 + (10\\cos 30^\\circ)^2 = 25 + 75 = 100 = 10^2]]"
          },
          {
            "kind": "p",
            "text": "Равенството е изпълнено, хипотенузата е най-дългата, а 5 &lt; 8.66 съвпада с геометрията при 30°. Всяко мъничко несъответствие идва от закръглянето на 8.66, така че проверявайте с незакръглени стойности, когато точността е важна."
          }
        ]
      },
      "angle-other": {
        "h2": "Избор на подходящ калкулатор за правоъгълен триъгълник",
        "blocks": [
          {
            "kind": "p",
            "text": "Тази страница подхожда на задачи с една известна страна и един известен остър ъгъл. Други ситуации изискват различни инструменти."
          },
          {
            "kind": "p",
            "text": "<strong>Известни са две страни, без ъгъл:</strong> <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Калкулатор за страни на правоъгълен триъгълник</a> прилага питагоровата теорема директно."
          },
          {
            "kind": "p",
            "text": "<strong>Липсващ ъгъл, известни страни:</strong> <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Калкулатор за ъгли на правоъгълен триъгълник</a> използва обратен синус, косинус или тангенс."
          },
          {
            "kind": "p",
            "text": "<strong>Необходимо е лице:</strong> <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Калкулатор за лице на правоъгълен триъгълник</a> го изчислява от катетите или други входни данни."
          },
          {
            "kind": "p",
            "text": "<strong>Триъгълници 30-60-90 или 45-45-90:</strong> <a href=\"/special-right-triangle-calculator/\" class=\"text-primary hover:underline\">Калкулатор за специални правоъгълни триъгълници</a> използва техните точни отношения."
          },
          {
            "kind": "p",
            "text": "<strong>Само стойностите на отношенията:</strong> <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">Калкулатор за тригонометрични отношения</a> изчислява sin, cos и tan без да решава страни."
          },
          {
            "kind": "p",
            "text": "<strong>Всичко наведнъж:</strong> <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Калкулатор за правоъгълен триъгълник</a> решава целия триъгълник, ъглите, лицето и производните свойства от всякакви две валидни входни данни."
          }
        ]
      },
      "angle-conclusion": {
        "h2": "Намерете липсващата страна с правилната формула",
        "blocks": [
          {
            "kind": "p",
            "text": "Започнете с означаване: срещулежаща, прилежаща страна и хипотенуза спрямо вашия ъгъл. Оставете известната страна да избере отношението: хипотенуза в ръка означава синус или косинус, катет в ръка означава тангенс. Въведете ъгъла в градуси, пазете пълната точност до края и проверете с Питагор или бърза проверка на размера. Опитайте калкулатора по-горе със собствените си числа."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Как се намира липсваща страна с помощта на ъгъл?",
        "answer": "Означете страните спрямо ъгъла: срещулежаща, прилежаща, хипотенуза. Изберете отношението, съдържащо известната страна и липсващата страна. С хипотенуза и ъгъл използвайте a = c·sin(A) или b = c·cos(A). С един катет и ъгъл използвайте a = b·tan(A) или b = a/tan(A). Заместете и изчислете."
      },
      {
        "question": "Коя формула да използвам за срещулежащата страна?",
        "answer": "Зависи от това какво знаете. С хипотенуза използвайте a = c·sin(A). С прилежащия катет използвайте a = b·tan(A). И двете дават страната срещу ъгъл A; известната страна решава коя форма се прилага."
      },
      {
        "question": "Как се намира прилежащата страна с помощта на ъгъл?",
        "answer": "С известна хипотенуза използвайте b = c·cos(A). С известен срещулежащ катет използвайте b = a/tan(A). Прилежащият катет винаги минава покрай ъгъл A, затова потвърдете означението си, преди да изберете."
      },
      {
        "question": "Каква е разликата между синус, косинус и тангенс?",
        "answer": "Синусът свързва срещулежащата страна с хипотенузата, косинусът свързва прилежащата страна с хипотенузата, а тангенсът свързва срещулежащата с прилежащата. Синусът и косинусът разделят наклонена дължина на части; тангенсът преобразува директно между двата катета. И трите описват същия ъгъл от различни страни."
      },
      {
        "question": "Какво означава SOH-CAH-TOA?",
        "answer": "Помощ за запомняне: синус = срещулежаща/хипотенуза, косинус = прилежаща/хипотенуза, тангенс = срещулежаща/прилежаща. Напомня ви коя дроб съответства на всяко отношение, след като сте означили страните. Не замества стъпката на означаване."
      },
      {
        "question": "Мога ли да намеря страна, ако знам хипотенузата и един ъгъл?",
        "answer": "Да, това е най-простият случай. Умножете хипотенузата по sin(A) за срещулежащия катет или по cos(A) за прилежащия катет. Един ъгъл плюс хипотенузата определят целия триъгълник."
      },
      {
        "question": "Мога ли да намеря страна, ако знам един катет и един ъгъл?",
        "answer": "Да, с тангенс. Ако известният катет е прилежащ, умножете по tan(A), за да получите срещулежащия катет. Ако известният катет е срещулежащ, разделете на tan(A), за да получите прилежащия катет. Не е нужна хипотенуза."
      },
      {
        "question": "Ъглите да въвеждам ли в градуси или в радиани?",
        "answer": "Въвеждайте градуси. Този калкулатор тълкува входните ъгли като градуси, така че 30 означава 30°. Стойност в радиани, въведена като градуси, дава грешен резултат без предупреждение. Първо преобразувайте радианите в градуси, като умножите по 180/π."
      },
      {
        "question": "Защо формулата с тангенс използва деление в единия режим?",
        "answer": "Защото тангенсът е равен на срещулежащия, делен на прилежащия. Решаването на tan(A) = a/b за срещулежащия катет дава умножение, a = b·tan(A). Решаването на същото уравнение за прилежащия катет дава деление, b = a/tan(A). Една връзка, прочетена по два начина."
      },
      {
        "question": "Могат ли два различни триъгълника да имат един и същ ъгъл?",
        "answer": "Да. Ъгълът фиксира формата, но не и размера, така че малък и голям триъгълник могат да споделят всеки ъгъл. Техните отношения на страни съвпадат точно; различава се само мащабът. Това са подобни триъгълници."
      },
      {
        "question": "Как да проверя изчислената страна?",
        "answer": "Заместете обратно в отношението, например проверете дали a/c е равно на sin(A). Или използвайте Питагор: с две известни страни потвърдете a² + b² = c². Също така проверете дали всеки катет е по-къс от хипотенузата и е разумно оразмерен за ъгъла."
      },
      {
        "question": "Защо резултатите на основата на тангенса стават чувствителни близо до 90 градуса?",
        "answer": "Тангенсът расте без граница, когато ъгълът се приближи до 90°, така че малка промяна в ъгъла предизвиква голяма промяна в резултата. Близо до 0° се появява обратният проблем при деление на мъничък тангенс. Пазете допълнителна точност в ъгъла при входни данни близо до която и да е крайност."
      }
    ],
    "relatedHeading": "Други калкулатори за правоъгълен триъгълник, които може да ви бъдат полезни",
    "relatedIntro": "След като намерите липсващата си страна, продължете с тези свързани калкулатори, за да завършите анализа на триъгълника си.",
    "relatedItems": [
      "Калкулатор за правоъгълен триъгълник",
      "Калкулатор за страни на правоъгълен триъгълник",
      "Калкулатор за ъгли на правоъгълен триъгълник",
      "Калкулатор за тригонометрични отношения",
      "Калкулатор за лице на правоъгълен триъгълник",
      "Калкулатор за специални правоъгълни триъгълници"
    ]
  },
  "tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "angle-intro": "Bir Açıyla Kenar Nasıl Bulunur",
      "angle-anatomy": "Kenarları ve Açıları Anlamak",
      "angle-trig": "Sinüs, Kosinüs ve Tanjant",
      "angle-modes": "Dört Hesaplayıcı Modu",
      "angle-examples": "Gerçek Hayat Örnekleri",
      "angle-effect": "Açılar Kenar Uzunluklarını Nasıl Değiştirir",
      "angle-degrees": "Dereceler ve Hesaplayıcı Ayarları",
      "angle-howto": "Hesaplayıcıyı Kullanma",
      "angle-mistakes": "Yaygın Hatalar",
      "angle-validation": "Girdi Doğrulama",
      "angle-verify": "Cevabınızı Doğrulama",
      "angle-other": "Başka Bir Hesaplayıcı Ne Zaman Kullanılmalı",
      "angle-related": "İlgili Hesaplayıcılar",
      "angle-faq": "SSS"
    },
    "sections": {
      "angle-intro": {
        "h2": "Bir Açıyla Dik Üçgen Kenarı Nasıl Bulunur",
        "blocks": [
          {
            "kind": "p",
            "text": "Duvara dayalı bir merdiven hayal edin. Merdivenin 5 metre uzunluğunda olduğunu ve zeminle 65 derecelik bir açı yaptığını biliyorsunuz, peki ne kadar yükseğe ulaşıyor? Açıyla dik üçgen kenarı bulma hesaplayıcısı tam da bu tür soruları yanıtlar: bir dar açı ve bir kenar uzunluğu bilindiğinde eksik kenarı bulur. Bir kenar artı bir açı yeterlidir, çünkü trigonometri üçgenin şeklini tamamen belirler. Üç oran, sinüs, kosinüs ve tanjant, her biri açıyı farklı bir kenar çiftine bağlar. Sinüs karşı kenarı hipotenüse bağlar, kosinüs komşu kenarı hipotenüse bağlar, tanjant ise iki dik kenarı doğrudan bağlar. Bu sayfada durumunuza hangi oranın uyduğu, neden işe yaradığı ve yukarıdaki hesaplayıcının nasıl kullanılacağı açıklanmaktadır. İki bilinen kenar gerektiren Pisagor teoremi hesaplayıcısının aksine, bu araç tek bir kenar ve tek bir açıyla çalışır."
          }
        ]
      },
      "angle-anatomy": {
        "h2": "Dik Üçgenin Kenarlarını ve Açılarını Anlamak",
        "blocks": [
          {
            "kind": "h3",
            "text": "Dik Üçgen Nedir?"
          },
          {
            "kind": "p",
            "text": "Dik üçgen, bir kâğıt yaprağında gördüğünüz köşenin aynısı olan tam 90 derecelik bir açı içerir. Diğer iki açı dar açıdır, her biri 90 dereceden küçüktür ve herhangi bir üçgenin üç açısının toplamı 180 olduğundan her zaman 90 dereceye tamamlanır. Bu kılavuzdaki trigonometri yalnızca dik üçgenler için geçerlidir: sinüs, kosinüs ve tanjant oranları dik açı üzerinden tanımlanır, bu yüzden bunları 90 derecelik köşesi olmayan bir üçgende kullanmak yanlış sonuçlar verir."
          },
          {
            "kind": "h3",
            "text": "Hipotenüs Nedir?"
          },
          {
            "kind": "p",
            "text": "Hipotenüs dik açının karşısındadır ve her zaman üç kenarın en uzunudur. Kural gereği [[c]] adını alır. Döndürülmüş bir şekilde bulmak için dik açı işaretine değmeyen kenarı bulun. Üçgen nasıl döndürülürse döndürülsün, hipotenüs kare köşenin karşısında kalır."
          },
          {
            "kind": "h3",
            "text": "Karşı ve Komşu Kenarlar Nelerdir?"
          },
          {
            "kind": "p",
            "text": "Bir dar açıyı seçin ve ona [[A]] deyin. [[A]]'nın karşısındaki dik kenar karşı kenardır ve [[a]] ile gösterilir. [[A]]'yı hipotenüsle birlikte oluşturan dik kenar komşu kenardır ve [[b]] ile gösterilir. İşte yeni başlayanları şaşırtan nokta: bu adlandırmalar hangi açıyı seçtiğinize bağlıdır. [[A]] açısının karşısındaki kenar, referansı [[B]] açısına çevirdiğinizde komşu kenar olur. Hipotenüsün rolü asla değişmez. Bu kılavuzun tamamında [[a]], [[A]]'nın karşısındadır, [[b]] [[A]]'ya komşudur ve [[c]] hipotenüstür."
          }
        ],
        "imgAlt": "Alt solda A açısı olan dik üçgen; A'nın karşısındaki a kenarı, A'ya komşu b kenarı ve c hipotenüsü",
        "figcaption": "A açısına göre anatomisi: a kenarı A'nın karşısında, b kenarı A'ya komşu ve c hipotenüstür. A + B = 90°."
      },
      "angle-trig": {
        "h2": "Sinüs, Kosinüs ve Tanjant Eksik Kenarları Bulmaya Nasıl Yardımcı Olur",
        "blocks": [
          {
            "kind": "p",
            "text": "Trigonometrik oran, belirli bir açı için dik üçgenin iki kenarı arasındaki sabit ilişkidir. Açıyı değiştirin, oran değişir; açıyı aynı tutun, o açıya sahip her üçgen boyutu ne olursa olsun aynı oranları paylaşır. Bu yüzden bir açı artı bir kenar geri kalan her şeyi belirler. Üç oranın her biri açıyı farklı bir kenar birleşimiyle eşleştirir, bu yüzden bildiğiniz kenar hangi orana başvuracağınızı belirler."
          },
          {
            "kind": "h3",
            "text": "Sinüsü Anlamak"
          },
          {
            "kind": "p",
            "text": "Sinüs karşı kenarı hipotenüsle karşılaştırır: [[\\sin(A) = \\frac{a}{c}]]. Eksik kenarı bulmak için iki tarafı da [[c]] ile çarpın. Sağdaki [[c]] sadeleşir ve [[a = c\\sin(A)]] kalır. Sözle ifade edersek: karşı dik kenar, hipotenüsün açının sinüsüyle ölçeklenmiş halidir. Daha büyük bir açı daha büyük bir sinüs değeri verir, bu yüzden açı açıldıkça karşı kenar büyür."
          },
          {
            "kind": "h3",
            "text": "Kosinüsü Anlamak"
          },
          {
            "kind": "p",
            "text": "Kosinüs komşu kenarı hipotenüsle karşılaştırır: [[\\cos(A) = \\frac{b}{c}]]. İki tarafı da [[c]] ile çarpınca [[b = c\\cos(A)]] elde edersiniz. Komşu dik kenar, hipotenüsün açının kosinüsüyle ölçeklenmiş halidir. [[A]] açısı 90 dereceye doğru büyüdükçe komşu kenar sıfıra doğru küçülür ve bu geometriyle uyumludur: açı komşu kenarı düzleştirir."
          },
          {
            "kind": "h3",
            "text": "Tanjantı Anlamak"
          },
          {
            "kind": "p",
            "text": "Tanjant iki dik kenarı doğrudan karşılaştırır: [[\\tan(A) = \\frac{a}{b}]]. İki yöne de düzenlenince [[a = b\\tan(A)]] ve [[b = \\frac{a}{\\tan(A)}]] verir. Bilinen kenar komşu kenarsa ve karşı kenarı istiyorsanız çarpma kullanın: komşu kenarı tanjantla ölçeklemek onu karşı kenara dönüştürür. Bilinen kenar karşı kenarsa ve komşu kenarı istiyorsanız bölme kullanın: karşı kenara kaç tane tanjant büyüklüğünde parça sığdığını soruyorsunuz demektir. İki biçim, aynı ilişkinin zıt yönlerden okunmasıdır."
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA Ne Anlama Gelir?"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA bir ezber yardımcısıdır, kenarları doğru belirlemenin yerine geçmez. SOH: Sinüs = Karşı / Hipotenüs. CAH: Kosinüs = Komşu / Hipotenüs. TOA: Tanjant = Karşı / Komşu. Kenarları açınıza göre karşı, komşu ve hipotenüs olarak adlandırdıktan sonra hangi oranı seçeceğinize yardımcı olur. Önce kenarları her zaman adlandırın; ezber yalnızca bundan sonra hangi kesri yazacağınızı söyler."
          }
        ],
        "imgAlt": "Aynı dik üçgende sinüs, kosinüs ve tanjant oranlarını gösteren üç panel",
        "figcaption": "Tek üçgende SOH-CAH-TOA: sinüs karşı kenar ile hipotenüsü kullanır, kosinüs komşu kenar ile hipotenüsü kullanır, tanjant iki dik kenarı kullanır."
      },
      "angle-modes": {
        "h2": "Doğru Hesaplayıcı Modu Nasıl Seçilir",
        "blocks": [
          {
            "kind": "p",
            "text": "Doğru mod iki gerçeğe bağlıdır: hangi kenar uzunluğunu zaten bildiğiniz ve hangi kenarın eksik olduğu. Durumunuzu tabloda bulun, ardından aşağıdaki eşleşen çözümlü örneği okuyun."
          }
        ],
        "table": {
          "headers": [
            "Bilinen Kenar",
            "Bilinen Açı",
            "Bulunacak Kenar",
            "Formül",
            "Hesaplayıcı Modu",
            "Ne Zaman Kullanılır"
          ],
          "rows": [
            [
              "Hipotenüs c",
              "A",
              "a kenarı",
              "a = c × sin(A)",
              "Sinüsten a Kenarı",
              "Eğimli uzunluk biliniyor, açının karşısındaki kenar gerekli"
            ],
            [
              "Hipotenüs c",
              "A",
              "b kenarı",
              "b = c × cos(A)",
              "Kosinüsten b Kenarı",
              "Eğimli uzunluk biliniyor, açının yanındaki kenar gerekli"
            ],
            [
              "b kenarı",
              "A",
              "a kenarı",
              "a = b × tan(A)",
              "Tanjanttan a Kenarı",
              "Yatay uzaklık biliniyor, dikey yükselme gerekli"
            ],
            [
              "a kenarı",
              "A",
              "b kenarı",
              "b = a / tan(A)",
              "Tanjanttan b Kenarı",
              "Dikey yükselme biliniyor, yatay uzaklık gerekli"
            ]
          ]
        },
        "modeSections": [
          {
            "h3": "Mod 1: Sinüsle a Kenarını Bulma",
            "blocks": [
              {
                "kind": "p",
                "text": "Hipotenüsü bildiğinizde ve açının karşısındaki kenarı bulmak istediğinizde bu modu seçin. Bilinen kenarın dik açının karşısındaki kenar olduğunu ve açınızın karşı kenarın baktığı dar açı olduğunu doğrulayın. Sinüs, karşı kenar ile hipotenüsü doğrudan ilişkilendirdiği için doğru orandır. Hipotenüs uzunluğunu ve açıyı derece olarak girin. Sonuç karşı dik kenardır."
              },
              {
                "kind": "p",
                "text": "<strong>Çözümlü örnek:</strong> [[c = 10\\text{ m}]] ve [[A = 30^\\circ]] verildiğinde [[a]] kenarını bulun."
              },
              {
                "kind": "display",
                "text": "[[[a = 10\\sin(30^\\circ) = 10(0.5) = 5\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Cevap mantıklıdır: 30 derecede karşı kenar hipotenüsün tam yarısıdır; bu, zihinden yapabileceğiniz pratik bir kontrol yöntemidir."
              }
            ]
          },
          {
            "h3": "Mod 2: Kosinüsle b Kenarını Bulma",
            "blocks": [
              {
                "kind": "p",
                "text": "Hipotenüsü bildiğinizde ve açıya komşu kenarı bulmak istediğinizde bu modu seçin. Kosinüs komşu kenar ile hipotenüsü ilişkilendirir, böylece eğimli uzunluğu açının yanındaki kenara dönüştürür. Komşu kenar her zaman hipotenüsten kısadır, çünkü bir dar açının kosinüsü her zaman 1'den küçüktür."
              },
              {
                "kind": "p",
                "text": "<strong>Çözümlü örnek:</strong> [[c = 12\\text{ ft}]] ve [[A = 60^\\circ]] verildiğinde [[b]] kenarını bulun."
              },
              {
                "kind": "display",
                "text": "[[[b = 12\\cos(60^\\circ) = 12(0.5) = 6\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "60 derecede komşu kenar hipotenüsün yarısıdır; bu, 30 derecelik sinüs durumunun aynasıdır. İki dar açı rol değiştirir: 60°'ye komşu olan kenar, 30°'nin karşısındadır."
              }
            ]
          },
          {
            "h3": "Mod 3: Tanjantla a Kenarını Bulma",
            "blocks": [
              {
                "kind": "p",
                "text": "Komşu dik kenarı bildiğinizde ve karşı dik kenarı bulmak istediğinizde bu modu seçin. Bu, klasik 'uzaklık ve yükselme açısı' durumudur: bilinen bir yatay uzaklıkta durur ve yüksekliği istersiniz. Tanjant komşu kenarı yukarı (veya aşağı) ölçekleyerek karşı kenara dönüştürür. Açı oranı kontrol eder, bu yüzden daha dik bir açı aynı tabanda daha uzun bir karşı kenar anlamına gelir."
              },
              {
                "kind": "p",
                "text": "<strong>Çözümlü örnek:</strong> [[b = 8\\text{ m}]] ve [[A = 35^\\circ]] verildiğinde [[a]] kenarını bulun."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\tan(35^\\circ) \\approx 8(0.7002) \\approx 5.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "35° 45°'nin altında olduğu için karşı kenar komşu kenardan kısa çıkar ve bu geometriyle uyumludur."
              }
            ]
          },
          {
            "h3": "Mod 4: Tanjantla b Kenarını Bulma",
            "blocks": [
              {
                "kind": "p",
                "text": "Karşı dik kenarı bildiğinizde ve komşu dik kenarı bulmak istediğinizde bu modu seçin. 'Yükselme sabit, taban ne kadar geriye uzanmalı?' gibi soruları yanıtlar. Tanjantla bölme, Mod 3 ölçeklemesini tersine çevirir: tabanı yüksekliğe germek yerine yüksekliği tabana geri sıkıştırırsınız."
              },
              {
                "kind": "p",
                "text": "<strong>Çözümlü örnek:</strong> [[a = 4\\text{ m}]] ve [[A = 40^\\circ]] verildiğinde [[b]] kenarını bulun."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{4}{\\tan(40^\\circ)} \\approx \\frac{4}{0.8391} \\approx 4.77\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "40°'de, 45°'nin hemen altında, komşu kenar karşı kenardan biraz daha uzundur. Bu küçük fark, bölmenin tam olarak yakaladığı şeydir."
              }
            ]
          }
        ],
        "imgAlt": "Sinüs, kosinüs ve iki tanjant hesaplayıcı modunu hesaplanmış değerlerle karşılaştıran dört panel",
        "figcaption": "Dört mod yan yana: sinüs ve kosinüs hipotenüsten başlar, tanjant modları iki dik kenar arasında dönüşüm yapar."
      },
      "angle-examples": {
        "h2": "Açılarla Dik Üçgen Kenarı Bulmanın Gerçek Hayat Örnekleri",
        "blocks": [
          {
            "kind": "p",
            "text": "Aşağıdaki her örnek aynı yolu izler: dik üçgeni tespit edin, bilinen kenarı ve açıyı adlandırın, onları eksik kenara bağlayan oranı seçin, yerine koyun, hesaplayın ve cevabı bağlamında okuyun. Sinüs, kosinüs veya tanjant seçiminin her seferinde geometriden nasıl doğal olarak çıktığını izleyin."
          }
        ],
        "examples": [
          {
            "h3": "Örnek 1: Merdivenin Ulaştığı Yüksekliği Bulma",
            "blocks": [
              {
                "kind": "p",
                "text": "5 m'lik bir merdiven dikey bir duvara dayanmış, düz zeminle 65 derecelik bir açı yapıyor. Duvar, zemin ve merdiven hipotenüsü merdiven olan bir dik üçgen oluşturur. Bilinenler: [[c = 5\\text{ m}]], [[A = 65^\\circ]]. Eksik yükseklik 65°'lik açının karşısındadır, bu yüzden sinüs uygundur: oran karşı kenarı hipotenüse bağlar."
              },
              {
                "kind": "display",
                "text": "[[[a = 5\\sin(65^\\circ) \\approx 5(0.9063) \\approx 4.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Merdiven duvarda yaklaşık 4.53 m yukarı ulaşır. Duvardan olan yatay uzaklık kosinüsten gelir, çünkü bu kenar açıya komşudur:"
              },
              {
                "kind": "display",
                "text": "[[[b = 5\\cos(65^\\circ) \\approx 5(0.4226) \\approx 2.11\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Tek bir hipotenüs ve tek bir açı iki kenarı da verdi. Bunun yalnızca bir geometri hesabı olduğunu unutmayın; merdiven kurulumunun güvenli olup olmadığı hakkında hiçbir şey söylemez, bu yüzden gerçek kullanımda üretici talimatlarına uyun."
              }
            ]
          },
          {
            "h3": "Örnek 2: Rampanın Yükselmesini Hesaplama",
            "blocks": [
              {
                "kind": "p",
                "text": "Basitleştirilmiş bir rampa yatayda 12 m uzanır ve yatayın 5 derece üstüne yükselir. Yatay bölüm ve yükselme bir dik üçgenin dik kenarlarıdır; yatay bölüm 5°'lik açıya komşudur. Bilinenler: [[b = 12\\text{ m}]], [[A = 5^\\circ]]. Eksik yükselme karşı dik kenardır ve tanjant karşı kenarı komşu kenara bağlar."
              },
              {
                "kind": "display",
                "text": "[[[a = 12\\tan(5^\\circ) \\approx 12(0.0875) \\approx 1.05\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Rampa 12 m'lik yatay bölümde yaklaşık 1.05 m yükselir. Yatay bölümü eğimli yüzeyden ayırt edin: eğimin kendisi 12 m'den biraz daha uzundur. Bu sonuç rampayı erişilebilirlik veya yapı kurallarına göre onaylamaz."
              }
            ]
          },
          {
            "h3": "Örnek 3: Çatının Dikey Yükselmesini Bulma",
            "blocks": [
              {
                "kind": "p",
                "text": "Bir çatı kesitinin yatay açıklığı 4.5 m'dir ve çatı yüzeyi yatayın 30 derece üstünde eğimlidir. Açıklık açıya komşudur, yükselme karşıdadır, bu yüzden tanjant doğal seçimdir."
              },
              {
                "kind": "display",
                "text": "[[[a = 4.5\\tan(30^\\circ) \\approx 4.5(0.5774) \\approx 2.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Çatı yaklaşık 2.60 m yükselir. Daha dik bir eğim tanjant değerini ve onunla birlikte yükselmeyi artırır; bu yüzden çatı açısı tavan yüksekliğini bu kadar doğrudan belirler. Bu basitleştirilmiş çizim, gerçek inşaatın gerektirdiği çıkmaları, mahya tahtalarını ve yapım paylarını dışarıda bırakır."
              }
            ]
          },
          {
            "h3": "Örnek 4: Kablonun Dikey Erişimini Ölçme",
            "blocks": [
              {
                "kind": "p",
                "text": "20 m'lik bir kablo yerden bir direğin tepesine uzanır ve yatayla 55 derecelik bir açı oluşturur. Kablo hipotenüstür. Sinüs dikey erişimi (açının karşısı), kosinüs yatay erişimi (açıya komşu) verir, böylece tek kurulum iki kenarı da verir."
              },
              {
                "kind": "display",
                "text": "[[[a = 20\\sin(55^\\circ) \\approx 20(0.8192) \\approx 16.38\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 20\\cos(55^\\circ) \\approx 20(0.5736) \\approx 11.47\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Kablo yatayda 11.47 m uzanırken dikeyde yaklaşık 16.38 m'ye ulaşır. Sinüs ve kosinüsü böyle eşleştirmek, herhangi bir eğimli uzunluğu dikey ve yatay bileşenlerine ayırmanın standart yoludur."
              }
            ]
          },
          {
            "h3": "Örnek 5: Görüş Çizgisinden Yükseklik Tahmini",
            "blocks": [
              {
                "kind": "p",
                "text": "150 m'lik basitleştirilmiş bir görüş çizgisi yatay bir referansın 12 derece üstüne eğilir. Görüş çizgisini bir dik üçgenin hipotenüsü olarak ele alırsak sinüs dikey farkı, kosinüs yatay uzaklığı verir."
              },
              {
                "kind": "display",
                "text": "[[[a = 150\\sin(12^\\circ) \\approx 150(0.2079) \\approx 31.19\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 150\\cos(12^\\circ) \\approx 150(0.9781) \\approx 146.72\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Uzak nokta referans seviyesinin yaklaşık 31.19 m üstünde ve yatayda 146.72 m uzaktadır. Gerçek ölçüm, araziye, alet yüksekliğine ve atmosferik etkilere göre düzeltmeler eklerdi; bu, alttaki ham geometridir."
              }
            ]
          },
          {
            "h3": "Örnek 6: Ağaç Yüksekliğini Tahmin Etme",
            "blocks": [
              {
                "kind": "p",
                "text": "Düz zeminde ağaç gövdesinden yatayda 25 m uzakta duruyorsunuz ve ağaç tepesine yükselme açısı 38 derecedir. Yatay uzaklık komşu dik kenar, ağaç yüksekliği gözlem seviyenizin üstünde kalan karşı dik kenardır, bu yüzden tanjant aralarında köprü kurar."
              },
              {
                "kind": "display",
                "text": "[[[a = 25\\tan(38^\\circ) \\approx 25(0.7813) \\approx 19.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Ağaç tepesi gözlem seviyesinin yaklaşık 19.53 m üstündedir. Yerden değil göz hizanızdan ölçtüyseniz tam ağaç yüksekliğini bulmak için göz yüksekliğinizi ekleyin. Yöntem, sizinle gövde arasında düz bir zemin olduğunu varsayar."
              }
            ]
          },
          {
            "h3": "Örnek 7: Mekanik Desteğin Ofsetini Hesaplama",
            "blocks": [
              {
                "kind": "p",
                "text": "Bir destek tasarımı, yatayla 25 derecelik açı yapan 600 mm'lik bir yatay kenar gerektiriyor. Yatay eleman açıya komşudur; ihtiyacınız olan dikey ofset onun karşısındadır."
              },
              {
                "kind": "display",
                "text": "[[[a = 600\\tan(25^\\circ) \\approx 600(0.4663) \\approx 279.78\\text{ mm}]]]"
              },
              {
                "kind": "p",
                "text": "Dikey ofset yaklaşık 279.78 mm'dir. Aynı yatay uzunluk, açı büyüdükçe daha yüksek bir ofset üretir; bu yüzden dar mekanik bağlantılarda küçük açı değişimleri önemlidir. Bu ölçü tek başına desteğin yapısal olarak yeterli olduğunu kanıtlamaz."
              }
            ]
          },
          {
            "h3": "Örnek 8: Hipotenüsten Karşı Kenarı Bulma",
            "blocks": [
              {
                "kind": "p",
                "text": "Bir dik üçgenin hipotenüsü 8 m ve dar açısı 42 derecedir. Açının karşısındaki kenar bilinmiyor. Hipotenüs ile karşı dik kenar sinüs ikilisi olduğundan tek çarpma işi bitirir."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\sin(42^\\circ) \\approx 8(0.6691) \\approx 5.35\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Karşı kenar yaklaşık 5.35 m'dir. Sinüs, hipotenüs ölçümünü her zaman yeniden düzenleme gerektirmeden açıya bakan kenara dönüştürür."
              }
            ]
          },
          {
            "h3": "Örnek 9: Dikey Ölçümden Yatay Uzaklığı Bulma",
            "blocks": [
              {
                "kind": "p",
                "text": "Bir dik üçgenin karşı dik kenarı 3.2 m ve açısı 28 derecedir. Komşu dik kenar bilinmiyor. Tanjant, karşı kenarın komşu kenara bölümüne eşit olduğundan, komşu kenarı bulmak bilinen karşı kenarı tanjanta bölmek anlamına gelir."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{3.2}{\\tan(28^\\circ)} \\approx \\frac{3.2}{0.5317} \\approx 6.02\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Yatay uzaklık yaklaşık 6.02 m'dir. Bilinen kenar oranın payında olduğunda, bilinmeyen kenarı yalnız bırakmanın yolu bölmedir."
              }
            ]
          },
          {
            "h3": "Örnek 10: Binanın Dikey Ofsetini Tahmin Etme",
            "blocks": [
              {
                "kind": "p",
                "text": "80 ft'lik basitleştirilmiş bir gözlem çizgisi yatayın 25 derece üstüne eğilir. Çizgi hipotenüstür ve dikey bileşen açının karşısındadır; bu sinüsü gerektirir."
              },
              {
                "kind": "display",
                "text": "[[[a = 80\\sin(25^\\circ) \\approx 80(0.4226) \\approx 33.81\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "Dikey bileşen yaklaşık 33.81 ft'tir. Daha büyük bir açı 80 ft'nin daha çoğunu dikey bileşene, daha azını yatay bileşene iter. Bunu düzgün bir yapı ölçümünün yerine geçecek bir şey değil, kaba bir geometri tahmini olarak ele alın."
              }
            ]
          },
          {
            "h3": "Örnek 11: Eğimli Yürüyüş Yolunun Yükselmesini Hesaplama",
            "blocks": [
              {
                "kind": "p",
                "text": "Bir yürüyüş yolu yatayda 6 m uzanır ve 8 derecelik bir eğime sahiptir. Yol açıya komşudur, yükselme karşıdadır, bu yüzden tanjant doğrudan uygulanır."
              },
              {
                "kind": "display",
                "text": "[[[a = 6\\tan(8^\\circ) \\approx 6(0.1405) \\approx 0.84\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Yürüyüş yolu yaklaşık 0.84 m yükselir. Yükselme hem yolla hem de açının tanjantıyla ölçeklenir, bu yüzden sabit bir açıda yolu ikiye katlamak yükselmeyi de ikiye katlar. Eğim uygunluğunu ayrıca yerel yönetmeliklere göre kontrol edin."
              }
            ]
          },
          {
            "h3": "Örnek 12: Bilinen Yükselmeden Yatay Ofseti Bulma",
            "blocks": [
              {
                "kind": "p",
                "text": "Bir yapının dikey ofseti 2 m'dir ve köşegeni yatayla 35 derecelik bir açı yapar. Dikey kenar açının karşısındadır, yatay ofset komşudur, bu yüzden tanjant bölünerek çıkarılmalıdır."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{2}{\\tan(35^\\circ)} \\approx \\frac{2}{0.7002} \\approx 2.86\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Yatay ofset yaklaşık 2.86 m'dir. Yükselmeyi ve açıyı bilmek tabanı tamamen belirler; yükseklik kısıtlamalarından geri çekilme mesafeleri böyle türetilir."
              }
            ]
          }
        ],
        "summaryTable": {
          "headers": [
            "Senaryo",
            "Bilinen Kenar",
            "Bilinen Açı",
            "Oran",
            "Hesaplanan Kenar"
          ],
          "rows": [
            [
              "Merdiven yüksekliği",
              "c = 5 m",
              "65°",
              "Sinüs",
              "a ≈ 4.53 m"
            ],
            [
              "Rampa yükselmesi",
              "b = 12 m",
              "5°",
              "Tanjant",
              "a ≈ 1.05 m"
            ],
            [
              "Çatı yükselmesi",
              "b = 4.5 m",
              "30°",
              "Tanjant",
              "a ≈ 2.60 m"
            ],
            [
              "Kablo erişimi",
              "c = 20 m",
              "55°",
              "Sinüs / Kosinüs",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "Görüş çizgisi",
              "c = 150 m",
              "12°",
              "Sinüs / Kosinüs",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "Ağaç yüksekliği",
              "b = 25 m",
              "38°",
              "Tanjant",
              "a ≈ 19.53 m"
            ],
            [
              "Destek ofseti",
              "b = 600 mm",
              "25°",
              "Tanjant",
              "a ≈ 279.78 mm"
            ],
            [
              "Hipotenüsten karşı kenar",
              "c = 8 m",
              "42°",
              "Sinüs",
              "a ≈ 5.35 m"
            ],
            [
              "Karşıdan komşu kenar",
              "a = 3.2 m",
              "28°",
              "Tanjant",
              "b ≈ 6.02 m"
            ],
            [
              "Bina ofseti",
              "c = 80 ft",
              "25°",
              "Sinüs",
              "a ≈ 33.81 ft"
            ],
            [
              "Yürüyüş yolu yükselmesi",
              "b = 6 m",
              "8°",
              "Tanjant",
              "a ≈ 0.84 m"
            ],
            [
              "Yükselmeden yatay uzaklık",
              "a = 2 m",
              "35°",
              "Tanjant",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "Dört panel: trigonometriyle çözülmüş merdiven yüksekliği, rampa yükselmesi, çatı yükselmesi ve ağaç yüksekliği",
        "figcaption": "Trigonometri iş başında: tek kenar ve tek açıdan merdiven (4.53 m), rampa (1.05 m), çatı (2.60 m) ve ağaç (19.53 m) yükseklikleri."
      },
      "angle-effect": {
        "h2": "Açı Eksik Kenarı Nasıl Etkiler",
        "blocks": [
          {
            "kind": "p",
            "text": "Hipotenüsü sabit tutun ve açının büyümesine izin verin: karşı kenar uzarken komşu kenar küçülür. Açı, hipotenüsü iki dik kenar arasında paylaştıran bir kadran gibi davranır. 0 derecede karşı kenar kaybolur ve komşu kenar tüm hipotenüse eşit olur; 90 derecede tersi olur. Tanjant daha dramatik davranır, çünkü onu sabitleyecek bir hipotenüsü yoktur: açı 90 dereceye yaklaştıkça karşı kenar küçülen komşu kenarın üzerine yükselir ve tanjant sınırsızca tırmanır."
          },
          {
            "kind": "p",
            "text": "İki üçgen aynı dar açıyı paylaşabilir, ancak boyutta tamamen farklı olabilir. Açı şekli belirler, yani tüm karşılık gelen kenar oranları eşleşir, hipotenüs ise ölçeği belirler. Bu tür üçgenler benzerdir: 65°'de 5 m'lik bir merdiven ile 65°'de 10 m'lik bir merdiven tam 1:2 oranında yüksekliklere ulaşır. Aşağıdaki tablo bu kadran etkisini 10 birimlik bir hipotenüs için gösterir."
          }
        ],
        "table": {
          "headers": [
            "A Açısı",
            "Karşı kenar a = 10 × sin(A)",
            "Komşu kenar b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        },
        "blocksAfter": [
          {
            "kind": "p",
            "text": "45°'de kenarlar tam dengededir ve tanjant 1'e eşittir. Simetriye dikkat edin: 30° satırı, kenarlar yer değiştirmiş olarak 60° satırını yansıtır, çünkü 30°'nin karşısındaki kenar 60°'ye komşudur."
          }
        ]
      },
      "angle-degrees": {
        "h2": "Doğru Açı Ayarı Neden Önemlidir",
        "blocks": [
          {
            "kind": "p",
            "text": "Açılar derece veya radyan ile ölçülebilir ve iki ölçek bir sayının ne anlama geldiği konusunda tamamen anlaşmaz. Tam bir daire 360 derecedir, ancak yalnızca yaklaşık 6.283 radyandır. Bu hesaplayıcı derece bekler: 30 girmek 30° anlamına gelir ve [[\\sin(30^\\circ) = 0.5]]. Aynı 30 radyan olarak okunsaydı sinüs yaklaşık −0.988 olurdu, uyarı vermeyen çok farklı bir cevap."
          },
          {
            "kind": "p",
            "text": "Tuzak diğer yönde de çalışır. Açınızın radyan üreten bir hesaplamadan geldiğini varsayalım, örneğin 0.5 rad (yaklaşık 28.65°). Derece modundaki bir hesaplayıcıya 0.5 yazmak sin(0.5 rad) ≈ 0.479 yerine sin(0.5°) ≈ 0.0087 hesaplar. Girmeden önce açınızın hangi birimde olduğunu her zaman doğrulayın. Açıyı erken yuvarlamak da doğruluktan kaybettirir: dik açılarda derecenin onda biri tanjantı belirgin şekilde kaydırır, bu yüzden tam açı hassasiyetini son adıma kadar koruyun."
          }
        ]
      },
      "angle-howto": {
        "h2": "Hesaplayıcıyı Kullanmak İçin Adım Adım Kılavuz",
        "steps": [
          "<strong>Dik üçgeni doğrulayın.</strong> Çiziminizde veya durumunuzda 90 derecelik köşeyi bulun; onsuz bu formüller uygulanmaz.",
          "<strong>A açısını belirleyin.</strong> Ölçümlerinizin referans aldığı dar açıyı seçin. Diğer dar açı, 90° eksi bu açıdır.",
          "<strong>Kenarları adlandırın.</strong> Hipotenüsü c olarak işaretleyin, ardından a'yı A'nın karşısındaki kenar, b'yi A'ya komşu kenar olarak adlandırın.",
          "<strong>Hangi kenarı bildiğinizi not edin.</strong> Hipotenüs mü, dik kenarlardan biri mi? Bu tek gerçek seçimi iki moda indirger.",
          "<strong>Eşleşen modu seçin.</strong> Hipotenüs biliniyor ve a kenarı eksik: Sinüsten a Kenarı. Hipotenüs biliniyor ve b kenarı eksik: Kosinüsten b Kenarı. b kenarı biliniyor ve a kenarı eksik: Tanjanttan a Kenarı. a kenarı biliniyor ve b kenarı eksik: Tanjanttan b Kenarı.",
          "<strong>Kenar uzunluğunu ve birimini girin.</strong> Cevabı vereceğiniz birim ailesini kullanın.",
          "<strong>A açısını derece olarak girin.</strong> Dar açı olduğunu, kesinlikle 0° ile 90° arasında olduğunu iki kez kontrol edin.",
          "<strong>Hesaplayın.</strong> Eksik kenar, yerine koymayı gösteren çözüm adımlarıyla birlikte görünür.",
          "<strong>Adımları okuyun.</strong> Hesaplayıcının amaçladığınız oranı kullandığını ve sayıların girdilerinizle eşleştiğini doğrulayın.",
          "<strong>Sonucu mantık kontrolünden geçirin.</strong> Bir dik kenar hipotenüsten kısa olmalıdır. Hipotenüsten çözdüyseniz, sinüs ve kosinüsten gelen iki kenar da a² + b² = c² koşulunu sağlamalıdır."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Arayüz bir sıfırlama denetimi sunuyorsa, yeni bir hesaplamaya başlamadan önce alanları temizlemek için kullanın, böylece eski bir değer sonraki sonuca sızmaz."
          }
        ]
      },
      "angle-mistakes": {
        "h2": "Açılardan Üçgen Kenarı Bulurken Yapılan Yaygın Hatalar",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>1. Karşı ve komşu kenarları karıştırmak.</strong> Adlandırma A açısına göredir ve iki kenarı değiştirmek sinüs ile kosinüsü değiştirir. Düzeltme: hesaplayıcıya dokunmadan önce çiziminize 'karşı' ve 'komşu' yazın."
          },
          {
            "kind": "p",
            "text": "<strong>2. Tanjant gerekirken sinüs seçmek.</strong> Bilinen bir kenar ve ortada hipotenüs yokken sinüsün tutunacağı bir şey yoktur. Bilinen kenarınız bir dik kenarsa cevap tanjantı içerir. Örnek: b = 8 m, A = 35° için a = 8·tan(35°) gerekir, 8·sin(35°) değil."
          },
          {
            "kind": "p",
            "text": "<strong>3. Yanlış tanjant formülünü kullanmak.</strong> Karşı kenarı bulmak tanjantla çarpar; komşu kenarı bulmak ona böler. Yönü ezberleyin: a = b·tan(A) tabanı yüksekliğe büyütür, b = a/tan(A) yüksekliği tabana geri küçültür."
          },
          {
            "kind": "p",
            "text": "<strong>4. Açıyı yanlış birimde girmek.</strong> Derece olarak yazılan bir radyan değeri (veya tersi) sessizce çöp üretir. Önce dereceyi doğrulayın; bu hesaplayıcı dereceyle çalışır."
          },
          {
            "kind": "p",
            "text": "<strong>5. Hipotenüsü sıradan bir dik kenar gibi ele almak.</strong> Hipotenüs yalnızca sinüs ve kosinüsle eşleşir, tanjantla asla. Formülünüzde tan ve hipotenüs varsa bir şey yanlış adlandırılmıştır."
          },
          {
            "kind": "p",
            "text": "<strong>6. Yanlış referans açısını kullanmak.</strong> Merdiven örneğindeki 65° zeminden ölçülür. Bunun yerine duvardan ölçülseydi 25° olurdu ve her oran değişirdi. Açının hangi yandan açıldığını her zaman kontrol edin."
          },
          {
            "kind": "p",
            "text": "<strong>7. Metre, fit veya diğer birimleri karıştırmak.</strong> Fitle verilen bir hipotenüs ile metre beklenen bir cevap, atlanmamak üzere önce veya sonra dönüştürme gerektirir. Tüm hesap boyunca tek birim kullanın."
          },
          {
            "kind": "p",
            "text": "<strong>8. Ara değerleri çok erken yuvarlamak.</strong> tan(35°)'yi 8 ile çarpmadan önce 0.7'ye yuvarlamak burada şans eseri 5.6 verir, ancak başka yerlerde daha kaba yuvarlama cevabı kaydırır. Sonuca kadar tam hassasiyeti koruyun."
          },
          {
            "kind": "p",
            "text": "<strong>9. Açının karşısındaki kenarın her zaman en uzun olduğunu varsaymak.</strong> Karşı kenar yalnızca açı 45°'yi aştığında en uzundur. 30°'de karşı dik kenar üçgenin en kısa kenarıdır."
          },
          {
            "kind": "p",
            "text": "<strong>10. Dik olmayan bir üçgende trigonometri kullanmak.</strong> 90°'lik açı olmadan burada tanımlandığı şekliyle sinüs, kosinüs ve tanjant uygulanmaz. Geniş açılı ve dar açılı üçgenler bunun yerine Sinüs ve Kosinüs Kanunlarına ihtiyaç duyar."
          },
          {
            "kind": "p",
            "text": "<strong>11. Dar açı aralığının dışında bir açı girmek.</strong> 0°, 90° veya daha büyük açılar üçgeni çökertir veya farklı bir şekli tanımlar. Hesaplayıcının kesinlikle 0° ile 90° arasında bir açıya ihtiyacı vardır."
          },
          {
            "kind": "p",
            "text": "<strong>12. Küçük ama doğru bir çıktıyı şüpheyle karşılamak.</strong> 12 m üzerinde 5°'lik bir rampa gerçekten yalnızca yaklaşık 1.05 m yükselir. Küçük açılar küçük karşı kenarlar üretir; bu geometridir, hata değil."
          }
        ]
      },
      "angle-validation": {
        "h2": "Sonucunuzun Matematiksel Olarak Geçerli Olup Olmadığını Kontrol Etme",
        "blocks": [
          {
            "kind": "p",
            "text": "Kenar uzunlukları pozitif sayılar olmalıdır; sıfır veya negatif bir uzunluk hiçbir üçgeni tanımlamaz. Hesapladığınız her dik kenar, girdiğiniz hipotenüsten kısa çıkmalıdır. Referans açı dar açı olmalı, kesinlikle 0° ile 90° arasında olmalı ve problemdeki her uzunluk tek birimi paylaşmalıdır."
          },
          {
            "kind": "p",
            "text": "Tanjant, aralığının uçlarına yakın ekstra saygıyı hak eder. Açı 90°'ye yaklaştıkça tanjant dik bir şekilde tırmanır, bu yüzden açıdaki küçük bir dalgalanma sonucu dramatik şekilde sallar. 0°'ye yakın tanjant miniciktir ve ona bölmek (b = a/tan(A) modu) ölçüm gürültüsünü aynı şekilde büyütür. Açınız iki uçtan birinin birkaç derece yakınındaysa girdileri yaklaşık, çıktıyı ise kesin değil hassas olarak ele alın."
          }
        ]
      },
      "angle-verify": {
        "h2": "Cevabınızı Nasıl Kontrol Edersiniz",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>Yöntem 1: Orana geri yerine koyun.</strong> Cevabınızı bilinen kenara bölün ve oranın trigonometrik değerle eşleştiğini doğrulayın. 30°'de c = 10 iken a = 5 bulduysanız, 5/10 = 0.5 = sin(30°) olduğunu kontrol edin."
          },
          {
            "kind": "p",
            "text": "<strong>Yöntem 2: Pisagor teoremini kullanın.</strong> Hesaplamadan sonra iki kenarı bildiğinizde a² + b² = c² koşulunu doğrulayın. Bu, trigonometriyi saf geometriyle çapraz kontrol eder."
          },
          {
            "kind": "p",
            "text": "<strong>Yöntem 3: Göreli boyutları kontrol edin.</strong> Her dik kenar hipotenüsten kısa olmalıdır. Daha büyük dar açının karşısındaki kenar daha uzun kenar olmalıdır. 30°'de karşı kenarın daha kısa olmasını bekleyin."
          },
          {
            "kind": "p",
            "text": "<strong>Çözümlü doğrulama:</strong> c = 10 m ve A = 30°'den hesaplayıcı a = 5 m verir. Diğer kenarı bulun: b = 10·cos(30°) ≈ 8.66 m. Şimdi yuvarlanmamış değerlerle Pisagor'u kontrol edin:"
          },
          {
            "kind": "display",
            "text": "[[[5^2 + (10\\cos 30^\\circ)^2 = 25 + 75 = 100 = 10^2]]"
          },
          {
            "kind": "p",
            "text": "Eşitlik sağlanır, hipotenüs en uzundur ve 5 &lt; 8.66, 30° geometrisiyle uyumludur. Herhangi bir küçük tutarsızlık 8.66'nın yuvarlanmasından gelir, bu yüzden hassasiyet önemli olduğunda yuvarlanmamış değerlerle doğrulayın."
          }
        ]
      },
      "angle-other": {
        "h2": "Doğru Dik Üçgen Hesaplayıcısını Seçme",
        "blocks": [
          {
            "kind": "p",
            "text": "Bu sayfa, bilinen tek kenarı ve bilinen tek dar açısı olan problemlere uyar. Diğer durumlar farklı araçlar gerektirir."
          },
          {
            "kind": "p",
            "text": "<strong>İki kenar biliniyor, açı yok:</strong> <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Dik Üçgen Kenar Hesaplayıcı</a> Pisagor teoremini doğrudan uygular."
          },
          {
            "kind": "p",
            "text": "<strong>Eksik açı, bilinen kenarlar:</strong> <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Dik Üçgen Açı Hesaplayıcı</a> ters sinüs, kosinüs veya tanjant kullanır."
          },
          {
            "kind": "p",
            "text": "<strong>Alan gerekli:</strong> <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Dik Üçgen Alan Hesaplayıcı</a> onu dik kenarlardan veya diğer girdilerden hesaplar."
          },
          {
            "kind": "p",
            "text": "<strong>30-60-90 veya 45-45-90 üçgenleri:</strong> <a href=\"/special-right-triangle-calculator/\" class=\"text-primary hover:underline\">Özel Dik Üçgen Hesaplayıcı</a> bunların kesin oranlarından yararlanır."
          },
          {
            "kind": "p",
            "text": "<strong>Sadece oran değerleri:</strong> <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">Trigonometrik Oran Hesaplayıcı</a> kenarları çözmeden sin, cos ve tan'ı değerlendirir."
          },
          {
            "kind": "p",
            "text": "<strong>Her şey bir arada:</strong> <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Dik Üçgen Hesaplayıcı</a> herhangi iki geçerli girdiden tüm üçgeni, açıları, alanı ve türetilmiş özellikleri çözer."
          }
        ]
      },
      "angle-conclusion": {
        "h2": "Eksik Kenarı Doğru Formülle Bulun",
        "blocks": [
          {
            "kind": "p",
            "text": "Adlandırmayla başlayın: açınıza göre karşı, komşu ve hipotenüs. Bilinen kenarın oranı seçmesine izin verin: eldeki hipotenüs sinüs veya kosinüs, eldeki dik kenar tanjant demektir. Açıyı derece olarak girin, sona kadar tam hassasiyeti koruyun ve Pisagor veya hızlı bir boyut kontrolüyle doğrulayın. Yukarıdaki hesaplayıcıyı kendi sayılarınızla deneyin."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Bir açıyla eksik kenar nasıl bulunur?",
        "answer": "Kenarları açıya göre adlandırın: karşı, komşu, hipotenüs. Bilinen kenarı ve eksik kenarı içeren oranı seçin. Hipotenüs ve açıyla a = c·sin(A) veya b = c·cos(A) kullanın. Bir dik kenar ve açıyla a = b·tan(A) veya b = a/tan(A) kullanın. Yerine koyun ve hesaplayın."
      },
      {
        "question": "Karşı kenar için hangi formülü kullanmalıyım?",
        "answer": "Neyi bildiğinize bağlıdır. Hipotenüsle a = c·sin(A) kullanın. Komşu dik kenarla a = b·tan(A) kullanın. İkisi de A açısının karşısındaki kenarı verir; hangi biçimin uygulanacağını bilinen kenar belirler."
      },
      {
        "question": "Bir açıyla komşu kenar nasıl bulunur?",
        "answer": "Hipotenüs biliniyorsa b = c·cos(A) kullanın. Karşı dik kenar biliniyorsa b = a/tan(A) kullanın. Komşu kenar her zaman A açısının yanından geçer, bu yüzden seçim yapmadan önce adlandırmayı doğrulayın."
      },
      {
        "question": "Sinüs, kosinüs ve tanjant arasındaki fark nedir?",
        "answer": "Sinüs karşıyı hipotenüse, kosinüs komşuyu hipotenüse, tanjant karşıyı komşuya bağlar. Sinüs ve kosinüs eğimli bir uzunluğu parçalara böler; tanjant iki dik kenar arasında doğrudan dönüşüm yapar. Üçü de aynı açıyı farklı taraflardan anlatır."
      },
      {
        "question": "SOH-CAH-TOA ne anlama gelir?",
        "answer": "Bir ezber yardımcısıdır: Sinüs = Karşı/Hipotenüs, Kosinüs = Komşu/Hipotenüs, Tanjant = Karşı/Komşu. Kenarları adlandırdıktan sonra her orana hangi kesrin uyduğunu hatırlatır. Adlandırma adımının yerine geçmez."
      },
      {
        "question": "Hipotenüsü ve bir açıyı biliyorsam kenar bulabilir miyim?",
        "answer": "Evet, bu en basit durumdur. Karşı dik kenar için hipotenüsü sin(A) ile, komşu dik kenar için cos(A) ile çarpın. Tek açı artı hipotenüs tüm üçgeni belirler."
      },
      {
        "question": "Bir dik kenarı ve bir açıyı biliyorsam kenar bulabilir miyim?",
        "answer": "Evet, tanjantla. Bilinen kenar komşuysa karşı kenarı bulmak için tan(A) ile çarpın. Bilinen kenar karşıyaysa komşu kenarı bulmak için tan(A)'ya bölün. Hipotenüs gerekmez."
      },
      {
        "question": "Açıları derece mi yoksa radyan mı girmeliyim?",
        "answer": "Derece girin. Bu hesaplayıcı açı girdilerini derece olarak yorumlar, bu yüzden 30, 30° demektir. Derece olarak girilen bir radyan değeri uyarı vermeden yanlış sonuç verir. Önce radyanı 180/π ile çarparak dereceye dönüştürün."
      },
      {
        "question": "Tanjant formülü neden bir modda bölme kullanıyor?",
        "answer": "Çünkü tanjant, karşının komşuya bölümüne eşittir. Karşı kenar için tan(A) = a/b'yi çözmek çarpma verir: a = b·tan(A). Aynı denklemi komşu kenar için çözmek bölme verir: b = a/tan(A). Tek ilişki, iki yönden okunur."
      },
      {
        "question": "İki farklı üçgen aynı açıya sahip olabilir mi?",
        "answer": "Evet. Açı şekli belirler ama boyutu belirlemez, bu yüzden küçük ve büyük bir üçgen her açıyı paylaşabilir. Kenar oranları tam olarak eşleşir; yalnızca ölçek farklıdır. Bunlar benzer üçgenlerdir."
      },
      {
        "question": "Hesaplanan kenarı nasıl doğrularım?",
        "answer": "Orana geri yerine koyun, örneğin a/c'nin sin(A)'ya eşit olduğunu kontrol edin. Veya Pisagor'u kullanın: iki kenar biliniyorsa a² + b² = c² koşulunu doğrulayın. Ayrıca her dik kenarın hipotenüsten kısa olduğunu ve açı için makul boyutta olduğunu kontrol edin."
      },
      {
        "question": "Tanjant tabanlı sonuçlar 90 dereceye yakın neden hassaslaşır?",
        "answer": "Tanjant açı 90°'ye yaklaştıkça sınırsızca büyür, bu yüzden açıdaki küçük bir değişim sonuçta büyük bir değişim üretir. 0°'ye yakın, minicik bir tanjanta bölünürken tersi sorun ortaya çıkar. İki uçtan birine yakın girdiler için açıda ekstra hassasiyet kullanın."
      }
    ],
    "relatedHeading": "Faydalı Bulabileceğiniz Diğer Dik Üçgen Hesaplayıcıları",
    "relatedIntro": "Eksik kenarınızı bulduktan sonra üçgen analizinizi tamamlamak için bu ilgili hesaplayıcılarla devam edin.",
    "relatedItems": [
      "Dik Üçgen Hesaplayıcı",
      "Dik Üçgen Kenar Hesaplayıcı",
      "Dik Üçgen Açı Hesaplayıcı",
      "Trigonometrik Oran Hesaplayıcı",
      "Dik Üçgen Alan Hesaplayıcı",
      "Özel Dik Üçgen Hesaplayıcı"
    ]
  },
  "sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "angle-intro": "Så hittar du en sida med hjälp av en vinkel",
      "angle-anatomy": "Förstå sidor och vinklar",
      "angle-trig": "Sinus, cosinus och tangens",
      "angle-modes": "De fyra räknarlägena",
      "angle-examples": "Verkliga exempel",
      "angle-effect": "Så påverkar vinklar sidlängder",
      "angle-degrees": "Grader och räknarinställningar",
      "angle-howto": "Använda räknaren",
      "angle-mistakes": "Vanliga misstag",
      "angle-validation": "Indatavalidering",
      "angle-verify": "Kontrollera ditt svar",
      "angle-other": "När du ska använda en annan räknare",
      "angle-related": "Relaterade räknare",
      "angle-faq": "Vanliga frågor"
    },
    "sections": {
      "angle-intro": {
        "h2": "Så hittar du en sida i en rätvinklig triangel med hjälp av en vinkel",
        "blocks": [
          {
            "kind": "p",
            "text": "Föreställ dig en stege som lutar mot en vägg. Du vet att stegen är 5 meter lång och möter marken i 65 grader, men hur högt når den? En räknare för sidor i rätvinkliga trianglar utifrån vinkel svarar på exakt den typen av frågor: den hittar en saknad sida när du känner till en spetsig vinkel och en sidlängd. En sida plus en vinkel räcker, eftersom trigonometrin fastställer triangelns form fullständigt. De tre kvoterna, sinus, cosinus och tangens, kopplar var och en vinkeln till ett annat sidpar. Sinus kopplar den motstående sidan till hypotenusan, cosinus kopplar den närliggande sidan till hypotenusan och tangens kopplar de två kateterna direkt. Den här sidan förklarar vilken kvot som passar din situation, varför den fungerar och hur du använder räknaren ovan. Till skillnad från en räknare för Pythagoras sats, som kräver två kända sidor, fungerar det här verktyget utifrån en enda sida och en enda vinkel."
          }
        ]
      },
      "angle-anatomy": {
        "h2": "Förstå sidorna och vinklarna i en rätvinklig triangel",
        "blocks": [
          {
            "kind": "h3",
            "text": "Vad är en rätvinklig triangel?"
          },
          {
            "kind": "p",
            "text": "En rätvinklig triangel innehåller en vinkel på exakt 90 grader, samma hörn som du ser på ett pappersark. De andra två vinklarna är spetsiga, var och en mindre än 90 grader, och de blir alltid tillsammans 90 grader eftersom de tre vinklarna i varje triangel summerar till 180. Trigonometrin i den här guiden gäller endast rätvinkliga trianglar: kvoterna sinus, cosinus och tangens definieras utifrån den räta vinkeln, så att använda dem på en triangel utan ett 90-gradershörn ger fel svar."
          },
          {
            "kind": "h3",
            "text": "Vad är hypotenusan?"
          },
          {
            "kind": "p",
            "text": "Hypotenusan ligger mittemot den räta vinkeln och är alltid den längsta av de tre sidorna. Den får beteckningen [[c]] enligt konvention. För att hitta den i en roterad figur, leta efter den sida som inte vidrör markeringen för den räta vinkeln. Oavsett hur triangeln är vänd ligger hypotenusan alltid mittemot det fyrkantiga hörnet."
          },
          {
            "kind": "h3",
            "text": "Vad är den motstående och den närliggande sidan?"
          },
          {
            "kind": "p",
            "text": "Välj en spetsig vinkel och kalla den [[A]]. Kateten mittemot [[A]] är den motstående sidan, betecknad [[a]]. Kateten som bildar [[A]] tillsammans med hypotenusan är den närliggande sidan, betecknad [[b]]. Här är det som lurar nybörjare: beteckningarna beror på vilken vinkel du väljer. Samma katet som är motstående vinkel [[A]] blir närliggande när du byter referens till vinkel [[B]]. Hypotenusan byter aldrig roll. Genomgående i den här guiden är [[a]] motstående [[A]], [[b]] är närliggande [[A]] och [[c]] är hypotenusan."
          }
        ],
        "imgAlt": "Rätvinklig triangel med vinkel A nere till vänster, kateterna a motstående och b närliggande A, hypotenusan c",
        "figcaption": "Anatomi relativt vinkel A: sida a är motstående A, sida b är närliggande A och c är hypotenusan. A + B = 90°."
      },
      "angle-trig": {
        "h2": "Hur sinus, cosinus och tangens hjälper till att hitta saknade sidor",
        "blocks": [
          {
            "kind": "p",
            "text": "En trigonometrisk kvot är ett fast förhållande mellan två sidor i en rätvinklig triangel för en given vinkel. Ändra vinkeln så ändras kvoten; behåll samma vinkel så delar varje triangel med den vinkeln samma kvoter, oavsett storlek. Därför bestämmer en vinkel plus en sida allt annat. Var och en av de tre kvoterna parar vinkeln med en annan kombination av sidor, så den sida du känner till avgör vilken kvot du ska använda."
          },
          {
            "kind": "h3",
            "text": "Förstå sinus"
          },
          {
            "kind": "p",
            "text": "Sinus jämför den motstående sidan med hypotenusan: [[\\sin(A) = \\frac{a}{c}]]. För att lösa ut den saknade sidan, multiplicera båda sidor med [[c]]. [[c]] på höger sida förkortas bort och kvar blir [[a = c\\sin(A)]]. Med ord: den motstående kateten är lika med hypotenusan skalad med vinkelns sinus. En större vinkel ger ett större sinusvärde, så den motstående sidan växer när vinkeln öppnas."
          },
          {
            "kind": "h3",
            "text": "Förstå cosinus"
          },
          {
            "kind": "p",
            "text": "Cosinus jämför den närliggande sidan med hypotenusan: [[\\cos(A) = \\frac{b}{c}]]. Multiplicera båda sidor med [[c]] så får du [[b = c\\cos(A)]]. Den närliggande kateten är lika med hypotenusan skalad med vinkelns cosinus. När vinkel [[A]] växer mot 90 grader krymper den närliggande sidan mot noll, vilket stämmer med geometrin: vinkeln pressar den närliggande kateten platt."
          },
          {
            "kind": "h3",
            "text": "Förstå tangens"
          },
          {
            "kind": "p",
            "text": "Tangens jämför de två kateterna direkt: [[\\tan(A) = \\frac{a}{b}]]. Omskriven åt båda hållen ger den [[a = b\\tan(A)]] och [[b = \\frac{a}{\\tan(A)}]]. Använd multiplikation när den kända kateten är närliggande och du vill ha den motstående kateten: att skala den närliggande sidan med tangens sträcker ut den till den motstående sidan. Använd division när den kända kateten är motstående och du vill ha den närliggande: du frågar hur många tangensstora bitar som får plats i den motstående kateten. De två formerna är samma samband läst i motsatta riktningar."
          },
          {
            "kind": "h3",
            "text": "Vad betyder SOH-CAH-TOA?"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA är en minnesregel, inte en ersättning för att identifiera sidorna korrekt. SOH: Sinus = Motstående / Hypotenusa. CAH: Cosinus = Närliggande / Hypotenusa. TOA: Tangens = Motstående / Närliggande. Den hjälper dig att välja kvot när du har betecknat motstående, närliggande och hypotenusa relativt din vinkel. Beteckna alltid sidorna först; minnesregeln säger bara vilken bråk du ska skriva efter det."
          }
        ],
        "imgAlt": "Tre paneler som visar kvoterna sinus, cosinus och tangens på samma rätvinkliga triangel",
        "figcaption": "SOH-CAH-TOA på en triangel: sinus använder motstående och hypotenusa, cosinus använder närliggande och hypotenusa, tangens använder de två kateterna."
      },
      "angle-modes": {
        "h2": "Så väljer du rätt räknarläge",
        "blocks": [
          {
            "kind": "p",
            "text": "Rätt läge beror på två fakta: vilken sidlängd du redan känner till och vilken sida som saknas. Hitta din situation i tabellen och läs sedan det matchande räkneexemplet nedan."
          }
        ],
        "table": {
          "headers": [
            "Känd sida",
            "Känd vinkel",
            "Saknad sida",
            "Formel",
            "Räknarläge",
            "När du ska använda det"
          ],
          "rows": [
            [
              "Hypotenusan c",
              "A",
              "Katet a",
              "a = c × sin(A)",
              "Katet a med sinus",
              "Lutande längd känd, behöver sidan mittemot vinkeln"
            ],
            [
              "Hypotenusan c",
              "A",
              "Katet b",
              "b = c × cos(A)",
              "Katet b med cosinus",
              "Lutande längd känd, behöver sidan vid sidan av vinkeln"
            ],
            [
              "Katet b",
              "A",
              "Katet a",
              "a = b × tan(A)",
              "Katet a med tangens",
              "Horisontellt avstånd känt, behöver den vertikala stigningen"
            ],
            [
              "Katet a",
              "A",
              "Katet b",
              "b = a / tan(A)",
              "Katet b med tangens",
              "Vertikal stigning känd, behöver det horisontella avståndet"
            ]
          ]
        },
        "modeSections": [
          {
            "h3": "Läge 1: Hitta katet a med sinus",
            "blocks": [
              {
                "kind": "p",
                "text": "Välj det här läget när du känner till hypotenusan och behöver sidan mittemot vinkeln. Bekräfta att den kända sidan är den mittemot den räta vinkeln och att din vinkel är den spetsiga vinkel som den motstående sidan vetter mot. Sinus är rätt kvot eftersom den direkt relaterar motstående och hypotenusa. Ange hypotenusans längd och vinkeln i grader. Resultatet är den motstående kateten."
              },
              {
                "kind": "p",
                "text": "<strong>Räkneexempel:</strong> Givet [[c = 10\\text{ m}]] och [[A = 30^\\circ]], hitta katet [[a]]."
              },
              {
                "kind": "display",
                "text": "[[[a = 10\\sin(30^\\circ) = 10(0.5) = 5\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Svaret är rimligt: vid 30 grader är den motstående sidan exakt hälften av hypotenusan, en praktisk kontroll du kan göra i huvudet."
              }
            ]
          },
          {
            "h3": "Läge 2: Hitta katet b med cosinus",
            "blocks": [
              {
                "kind": "p",
                "text": "Välj det här läget när du känner till hypotenusan och behöver sidan närliggande vinkeln. Cosinus relaterar närliggande och hypotenusa, så den omvandlar den lutande längden till kateten som löper längs med vinkeln. Den närliggande sidan är alltid kortare än hypotenusan, eftersom cosinus för en spetsig vinkel alltid är mindre än 1."
              },
              {
                "kind": "p",
                "text": "<strong>Räkneexempel:</strong> Givet [[c = 12\\text{ ft}]] och [[A = 60^\\circ]], hitta katet [[b]]."
              },
              {
                "kind": "display",
                "text": "[[[b = 12\\cos(60^\\circ) = 12(0.5) = 6\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "Vid 60 grader är den närliggande sidan hälften av hypotenusan, vilket speglar sinusfallet vid 30 grader. De två spetsiga vinklarna byter roller: sidan närliggande 60° är motstående 30°."
              }
            ]
          },
          {
            "h3": "Läge 3: Hitta katet a med tangens",
            "blocks": [
              {
                "kind": "p",
                "text": "Välj det här läget när du känner till den närliggande kateten och behöver den motstående kateten. Detta är den klassiska situationen med avstånd och elevationsvinkel: du står på ett känt horisontellt avstånd och vill veta höjden. Tangens skalar upp (eller ned) den närliggande kateten till den motstående kateten. Vinkeln styr kvoten, så en brantare vinkel ger en högre motstående sida för samma bas."
              },
              {
                "kind": "p",
                "text": "<strong>Räkneexempel:</strong> Givet [[b = 8\\text{ m}]] och [[A = 35^\\circ]], hitta katet [[a]]."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\tan(35^\\circ) \\approx 8(0.7002) \\approx 5.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Eftersom 35° är under 45° blir den motstående sidan kortare än den närliggande kateten, vilket stämmer med geometrin."
              }
            ]
          },
          {
            "h3": "Läge 4: Hitta katet b med tangens",
            "blocks": [
              {
                "kind": "p",
                "text": "Välj det här läget när du känner till den motstående kateten och behöver den närliggande kateten. Det svarar på frågor som: stigningen är fast, hur långt bak måste basen sträcka sig? Division med tangens vänder skalningen i läge 3: i stället för att sträcka basen till höjden trycker du tillbaka höjden till basen."
              },
              {
                "kind": "p",
                "text": "<strong>Räkneexempel:</strong> Givet [[a = 4\\text{ m}]] och [[A = 40^\\circ]], hitta katet [[b]]."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{4}{\\tan(40^\\circ)} \\approx \\frac{4}{0.8391} \\approx 4.77\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Vid 40°, strax under 45°, är den närliggande sidan något längre än den motstående sidan. Den lilla skillnaden är exakt vad divisionen fångar."
              }
            ]
          }
        ],
        "imgAlt": "Fyra paneler som jämför räknarlägena för sinus, cosinus och de två tangenslägena med uträknade värden",
        "figcaption": "De fyra lägena sida vid sida: sinus och cosinus utgår från hypotenusan, tangenslägena omvandlar mellan de två kateterna."
      },
      "angle-examples": {
        "h2": "Verkliga exempel på att hitta sidor i rätvinkliga trianglar med hjälp av vinklar",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje exempel nedan följer samma väg: hitta den rätvinkliga triangeln, namnge den kända sidan och vinkeln, välj den kvot som kopplar dem till den saknade sidan, sätt in, beräkna och läs svaret tillbaka i sitt sammanhang. Lägg märke till hur valet av sinus, cosinus eller tangens faller ut ur geometrin varje gång."
          }
        ],
        "examples": [
          {
            "h3": "Exempel 1: Hitta höjden som en stege når",
            "blocks": [
              {
                "kind": "p",
                "text": "En 5 m lång stege vilar mot en vertikal vägg och bildar en vinkel på 65 grader med det plana underlaget. Väggen, marken och stegen bildar en rätvinklig triangel med stegen som hypotenusa. Känt: [[c = 5\\text{ m}]], [[A = 65^\\circ]]. Den saknade höjden är motstående 65°-vinkeln, så sinus passar: kvoten kopplar motstående och hypotenusa."
              },
              {
                "kind": "display",
                "text": "[[[a = 5\\sin(65^\\circ) \\approx 5(0.9063) \\approx 4.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Stegen når ungefär 4.53 m upp på väggen. Det horisontella avståndet från väggen kommer från cosinus, eftersom den kateten är närliggande vinkeln:"
              },
              {
                "kind": "display",
                "text": "[[[b = 5\\cos(65^\\circ) \\approx 5(0.4226) \\approx 2.11\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "En hypotenusa och en vinkel gav båda kateterna. Observera att detta bara är en geometrisk beräkning; den säger inget om huruvida steguppställningen är säker, så följ tillverkarens anvisningar vid verklig användning."
              }
            ]
          },
          {
            "h3": "Exempel 2: Beräkna en ramps stigning",
            "blocks": [
              {
                "kind": "p",
                "text": "En förenklad ramp löper 12 m horisontellt och stiger i 5 grader över horisontalplanet. Löpningen och stigningen är kateterna i en rätvinklig triangel, med löpningen närliggande 5°-vinkeln. Känt: [[b = 12\\text{ m}]], [[A = 5^\\circ]]. Den saknade stigningen är den motstående kateten, och tangens kopplar motstående till närliggande."
              },
              {
                "kind": "display",
                "text": "[[[a = 12\\tan(5^\\circ) \\approx 12(0.0875) \\approx 1.05\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Rampen stiger ungefär 1.05 m över sin 12 m långa löpning. Håll den horisontella löpningen och den lutande ytan isär: själva lutningen är något längre än 12 m. Detta resultat intygar inte att rampen uppfyller tillgänglighets- eller byggregler."
              }
            ]
          },
          {
            "h3": "Exempel 3: Hitta ett taks vertikala stigning",
            "blocks": [
              {
                "kind": "p",
                "text": "Ett taktvärsnitt har en horisontell löpning på 4.5 m med takytan vinklad 30 grader över horisontalplanet. Löpningen är närliggande vinkeln och stigningen är motstående, så tangens är det naturliga valet."
              },
              {
                "kind": "display",
                "text": "[[[a = 4.5\\tan(30^\\circ) \\approx 4.5(0.5774) \\approx 2.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Taket stiger ungefär 2.60 m. En brantare lutning skulle höja tangensvärdet och därmed stigningen, vilket är anledningen till att takvinkeln driver vindshöjden så direkt. Denna förenklade skiss utelämnar takutsprång, nockbrädor och stommens tillägg som verkligt byggande kräver."
              }
            ]
          },
          {
            "h3": "Exempel 4: Mäta en vajers vertikala räckvidd",
            "blocks": [
              {
                "kind": "p",
                "text": "En 20 m lång vajer sträcker sig från marken till toppen av en stolpe och bildar en vinkel på 55 grader med horisontalplanet. Vajern är hypotenusan. Sinus ger den vertikala räckvidden (motstående vinkeln) och cosinus ger den horisontella räckvidden (närliggande den), så en uppställning ger båda kateterna."
              },
              {
                "kind": "display",
                "text": "[[[a = 20\\sin(55^\\circ) \\approx 20(0.8192) \\approx 16.38\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 20\\cos(55^\\circ) \\approx 20(0.5736) \\approx 11.47\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Vajern når ungefär 16.38 m vertikalt medan den spänner över 11.47 m horisontellt. Att para ihop sinus och cosinus så här är standardsättet att dela upp varje lutande längd i vertikala och horisontella delar."
              }
            ]
          },
          {
            "h3": "Exempel 5: Uppskatta höjd utifrån en siktlinje",
            "blocks": [
              {
                "kind": "p",
                "text": "En förenklad siktlinje på 150 m lutar 12 grader över ett horisontellt referensplan. Om siktlinjen behandlas som hypotenusan i en rätvinklig triangel utvinner sinus den vertikala skillnaden och cosinus det horisontella avståndet."
              },
              {
                "kind": "display",
                "text": "[[[a = 150\\sin(12^\\circ) \\approx 150(0.2079) \\approx 31.19\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 150\\cos(12^\\circ) \\approx 150(0.9781) \\approx 146.72\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Den avlägsna punkten ligger ungefär 31.19 m över referensnivån och 146.72 m bort horisontellt. Verklig mätning skulle lägga på korrigeringar för terräng, instrumenthöjd och atmosfäriska effekter; detta är den råa geometrin undertill."
              }
            ]
          },
          {
            "h3": "Exempel 6: Uppskatta ett träds höjd",
            "blocks": [
              {
                "kind": "p",
                "text": "Du står 25 m horisontellt från en trädstam på plan mark, och elevationsvinkeln till trädtoppen är 38 grader. Det horisontella avståndet är den närliggande kateten och trädhöjden över din ögonreferens är den motstående kateten, så tangens överbryggar dem."
              },
              {
                "kind": "display",
                "text": "[[[a = 25\\tan(38^\\circ) \\approx 25(0.7813) \\approx 19.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Trädtoppen är ungefär 19.53 m över observationsnivån. Om du mätte från ögonhöjd snarare än marknivå, lägg till din ögonhöjd för att få trädets fulla höjd. Metoden förutsätter plan mark mellan dig och stammen."
              }
            ]
          },
          {
            "h3": "Exempel 7: Beräkna en stagförskjutning i en mekanism",
            "blocks": [
              {
                "kind": "p",
                "text": "En stagkonstruktion kräver en horisontell katet på 600 mm som möter vertikalen i 25 grader från horisontalplanet. Det horisontella elementet är närliggande vinkeln; den vertikala förskjutning du behöver är motstående den."
              },
              {
                "kind": "display",
                "text": "[[[a = 600\\tan(25^\\circ) \\approx 600(0.4663) \\approx 279.78\\text{ mm}]]]"
              },
              {
                "kind": "p",
                "text": "Den vertikala förskjutningen är ungefär 279.78 mm. Samma horisontella längd ger en högre förskjutning när vinkeln växer, vilket är anledningen till att små vinkelförändringar spelar roll i trånga mekaniska passningar. Denna dimension ensam bevisar inte att staget är strukturellt tillräckligt."
              }
            ]
          },
          {
            "h3": "Exempel 8: Hitta den motstående sidan utifrån en hypotenusa",
            "blocks": [
              {
                "kind": "p",
                "text": "En rätvinklig triangel har en hypotenusa på 8 m med en spetsig vinkel på 42 grader. Sidan mittemot vinkeln är okänd. Eftersom hypotenusa och motstående katet är sinusparet räcker en multiplikation."
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\sin(42^\\circ) \\approx 8(0.6691) \\approx 5.35\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Den motstående sidan är ungefär 5.35 m. Sinus omvandlar alltid en hypotenusamätning till kateten som vetter mot vinkeln, utan omskrivning."
              }
            ]
          },
          {
            "h3": "Exempel 9: Hitta ett horisontellt avstånd utifrån en vertikal mätning",
            "blocks": [
              {
                "kind": "p",
                "text": "En rätvinklig triangel har en motstående katet på 3.2 m och vinkeln är 28 grader. Den närliggande kateten är okänd. Tangens är lika med motstående över närliggande, så att lösa ut den närliggande kateten innebär att dividera den kända motstående kateten med tangens."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{3.2}{\\tan(28^\\circ)} \\approx \\frac{3.2}{0.5317} \\approx 6.02\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Det horisontella avståndet är ungefär 6.02 m. Närhelst den kända sidan sitter i täljaren av kvoten är division sättet att isolera den okända sidan."
              }
            ]
          },
          {
            "h3": "Exempel 10: Uppskatta en byggnads vertikala förskjutning",
            "blocks": [
              {
                "kind": "p",
                "text": "En förenklad observationslinje på 80 ft lutar 25 grader över horisontalplanet. Linjen är hypotenusan och den vertikala komponenten är motstående vinkeln, vilket kräver sinus."
              },
              {
                "kind": "display",
                "text": "[[[a = 80\\sin(25^\\circ) \\approx 80(0.4226) \\approx 33.81\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "Den vertikala komponenten är ungefär 33.81 ft. En större vinkel skulle trycka mer av de 80 ft till den vertikala delen och mindre till den horisontella delen. Betrakta detta som en grov geometrisk uppskattning, inte en ersättning för en ordentlig byggnadsmätning."
              }
            ]
          },
          {
            "h3": "Exempel 11: Beräkna en lutande gångvägs stigning",
            "blocks": [
              {
                "kind": "p",
                "text": "En gångväg löper 6 m horisontellt med en lutning på 8 grader. Löpningen är närliggande vinkeln och stigningen är motstående, så tangens gäller direkt."
              },
              {
                "kind": "display",
                "text": "[[[a = 6\\tan(8^\\circ) \\approx 6(0.1405) \\approx 0.84\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Gångvägen stiger ungefär 0.84 m. Stigningen skalas med både löpningen och vinkelns tangens, så att fördubbla löpningen fördubblar stigningen vid fast vinkel. Kontrollera lokala regler separat för lutningskrav."
              }
            ]
          },
          {
            "h3": "Exempel 12: Hitta en horisontell förskjutning utifrån en känd stigning",
            "blocks": [
              {
                "kind": "p",
                "text": "En konstruktion har en vertikal förskjutning på 2 m, och dess diagonal bildar en vinkel på 35 grader med horisontalplanet. Den vertikala kateten är motstående vinkeln och den horisontella förskjutningen är närliggande, så tangens måste divideras bort."
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{2}{\\tan(35^\\circ)} \\approx \\frac{2}{0.7002} \\approx 2.86\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "Den horisontella förskjutningen är ungefär 2.86 m. Att känna till stigningen och vinkeln fastställer basen fullständigt, vilket är hur avstånd tillbakadragna från höjdbegränsningar härleds."
              }
            ]
          }
        ],
        "summaryTable": {
          "headers": [
            "Scenario",
            "Känd sida",
            "Känd vinkel",
            "Kvot",
            "Beräknad sida"
          ],
          "rows": [
            [
              "Stegens höjd",
              "c = 5 m",
              "65°",
              "Sinus",
              "a ≈ 4.53 m"
            ],
            [
              "Rampens stigning",
              "b = 12 m",
              "5°",
              "Tangens",
              "a ≈ 1.05 m"
            ],
            [
              "Takets stigning",
              "b = 4.5 m",
              "30°",
              "Tangens",
              "a ≈ 2.60 m"
            ],
            [
              "Vajerns räckvidd",
              "c = 20 m",
              "55°",
              "Sinus / Cosinus",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "Siktlinje",
              "c = 150 m",
              "12°",
              "Sinus / Cosinus",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "Trädets höjd",
              "b = 25 m",
              "38°",
              "Tangens",
              "a ≈ 19.53 m"
            ],
            [
              "Stagförskjutning",
              "b = 600 mm",
              "25°",
              "Tangens",
              "a ≈ 279.78 mm"
            ],
            [
              "Motstående från hypotenusa",
              "c = 8 m",
              "42°",
              "Sinus",
              "a ≈ 5.35 m"
            ],
            [
              "Närliggande från motstående",
              "a = 3.2 m",
              "28°",
              "Tangens",
              "b ≈ 6.02 m"
            ],
            [
              "Byggnadsförskjutning",
              "c = 80 ft",
              "25°",
              "Sinus",
              "a ≈ 33.81 ft"
            ],
            [
              "Gångvägens stigning",
              "b = 6 m",
              "8°",
              "Tangens",
              "a ≈ 0.84 m"
            ],
            [
              "Horisontell från stigning",
              "a = 2 m",
              "35°",
              "Tangens",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "Fyra paneler: stegens höjd, rampens stigning, takets stigning och trädets höjd lösta med trigonometri",
        "figcaption": "Trigonometri i arbete: stege (4.53 m), ramp (1.05 m), tak (2.60 m) och träd (19.53 m) i höjd från en sida och en vinkel."
      },
      "angle-effect": {
        "h2": "Hur vinkeln påverkar den saknade sidan",
        "blocks": [
          {
            "kind": "p",
            "text": "Fäst hypotenusan och låt vinkeln växa: den motstående sidan sträcks ut medan den närliggande sidan krymper. Vinkeln fungerar som en ratt som delar hypotenusan mellan de två kateterna. Vid 0 grader försvinner den motstående sidan och den närliggande kateten är lika med hela hypotenusan; vid 90 grader sker det omvända. Tangens beter sig mer dramatiskt eftersom den inte har någon hypotenusa att förankra sig i: när vinkeln närmar sig 90 grader tornar den motstående kateten upp sig över en krympande närliggande katet och tangens klättrar utan gräns."
          },
          {
            "kind": "p",
            "text": "Två trianglar kan dela samma spetsiga vinkel men ändå skilja sig helt i storlek. Vinkeln fastställer formen, vilket betyder att alla motsvarande sidkvoter stämmer, medan hypotenusan sätter skalan. Sådana trianglar är likformiga: en 5 m lång stege vid 65° och en 10 m lång stege vid 65° når höjder i exakt 1:2-proportion. Tabellen nedan visar denna ratteffekt för en hypotenusa på 10 enheter."
          }
        ],
        "table": {
          "headers": [
            "Vinkel A",
            "Motstående a = 10 × sin(A)",
            "Närliggande b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        },
        "blocksAfter": [
          {
            "kind": "p",
            "text": "Vid 45° balanserar kateterna exakt och tangens är lika med 1. Lägg märke till symmetrin: 30°-raden speglar 60°-raden med kateterna utbytta, eftersom sidan motstående 30° är närliggande 60°."
          }
        ]
      },
      "angle-degrees": {
        "h2": "Varför rätt vinkelinställning spelar roll",
        "blocks": [
          {
            "kind": "p",
            "text": "Vinklar kan mätas i grader eller radianer, och de två skalorna är helt oense om vad ett tal betyder. Ett helt varv är 360 grader men bara ungefär 6.283 radianer. Den här räknaren förväntar sig grader: att ange 30 betyder 30°, och [[\\sin(30^\\circ) = 0.5]]. Om samma 30 lästes som radianer skulle sinus bli ungefär −0.988, ett vilt annorlunda svar utan varning."
          },
          {
            "kind": "p",
            "text": "Fällan fungerar åt andra hållet också. Anta att din vinkel kommer från en beräkning som gav radianer, säg 0.5 rad (ungefär 28.65°). Att skriva 0.5 i en räknare i gradläge beräknar sin(0.5°) ≈ 0.0087 i stället för sin(0.5 rad) ≈ 0.479. Bekräfta alltid vilken enhet din vinkel är i innan du anger den. Att avrunda vinkeln tidigt kostar också noggrannhet: vid branta vinklar flyttar en tiondels grad tangens märkbart, så behåll vinkelns fulla precision till det sista steget."
          }
        ]
      },
      "angle-howto": {
        "h2": "Steg-för-steg-guide för att använda räknaren",
        "steps": [
          "<strong>Bekräfta den rätvinkliga triangeln.</strong> Hitta 90-gradershörnet i din skiss eller situation; utan det gäller inte dessa formler.",
          "<strong>Identifiera vinkel A.</strong> Välj den spetsiga vinkel som dina mätningar refererar till. Den andra spetsiga vinkeln är 90° minus denna.",
          "<strong>Beteckna sidorna.</strong> Markera hypotenusan c, beteckna sedan a som kateten motstående A och b som kateten närliggande A.",
          "<strong>Notera vilken sida du känner till.</strong> Är det hypotenusan eller en av kateterna? Detta enda faktum smalnar av valet till två lägen.",
          "<strong>Välj det matchande läget.</strong> Hypotenusa känd och katet a saknas: Katet a med sinus. Hypotenusa känd och katet b saknas: Katet b med cosinus. Katet b känd och katet a saknas: Katet a med tangens. Katet a känd och katet b saknas: Katet b med tangens.",
          "<strong>Ange sidlängden och dess enhet.</strong> Använd samma enhetsfamilj som du ska rapportera svaret i.",
          "<strong>Ange vinkel A i grader.</strong> Dubbelkolla att den är spetsig, strikt mellan 0° och 90°.",
          "<strong>Beräkna.</strong> Den saknade sidan visas med lösningssteg som visar insättningen.",
          "<strong>Läs stegen.</strong> Bekräfta att räknaren använde den kvot du avsåg och att talen stämmer med dina indata.",
          "<strong>Rimlighetskontrollera resultatet.</strong> En katet måste vara kortare än hypotenusan. Om du löste utifrån hypotenusan bör båda kateterna från sinus och cosinus uppfylla a² + b² = c²."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Om gränssnittet erbjuder en återställningskontroll, använd den för att rensa fälten innan du startar en ny beräkning så att inget gammalt värde läcker in i nästa resultat."
          }
        ]
      },
      "angle-mistakes": {
        "h2": "Vanliga misstag när man hittar triangelsidor utifrån vinklar",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>1. Att förväxla den motstående och den närliggande sidan.</strong> Beteckningen är relativ till vinkel A, och att byta plats på de två kateterna byter sinus mot cosinus. Åtgärd: skriv ”motst” och ”närl” på din skiss innan du rör räknaren."
          },
          {
            "kind": "p",
            "text": "<strong>2. Att välja sinus när tangens krävs.</strong> Med en känd katet och ingen hypotenusa i sikte har sinus inget att greppa. Om din kända sida är en katet involverar svaret tangens. Exempel: b = 8 m, A = 35° kräver a = 8·tan(35°), inte 8·sin(35°)."
          },
          {
            "kind": "p",
            "text": "<strong>3. Att använda fel tangensformel.</strong> Att hitta den motstående kateten multiplicerar med tangens; att hitta den närliggande kateten dividerar med den. Memorera riktningen: a = b·tan(A) växer basen till höjden, b = a/tan(A) krymper tillbaka höjden till basen."
          },
          {
            "kind": "p",
            "text": "<strong>4. Att ange vinkeln i fel enhet.</strong> Ett radianvärde inskrivet som grader (eller tvärtom) ger tyst skräp. Bekräfta grader först; den här räknaren arbetar i grader."
          },
          {
            "kind": "p",
            "text": "<strong>5. Att behandla hypotenusan som en vanlig katet.</strong> Hypotenusan paras bara med sinus och cosinus, aldrig med tangens. Om din formel har tan och en hypotenusa är något felbetecknat."
          },
          {
            "kind": "p",
            "text": "<strong>6. Att använda fel referensvinkel.</strong> 65° i stegexemplet mäts från marken. Att mäta från väggen i stället skulle ge 25°, och varje kvot skulle ändras. Kontrollera alltid från vilken sida vinkeln öppnar sig."
          },
          {
            "kind": "p",
            "text": "<strong>7. Att blanda meter, fot eller andra enheter.</strong> En hypotenusa i fot med ett svar som förväntas i meter kräver omvandling före eller efter, aldrig överhoppad. Håll en enhet genom hela beräkningen."
          },
          {
            "kind": "p",
            "text": "<strong>8. Att avrunda mellanvärden för tidigt.</strong> Att avrunda tan(35°) till 0.7 innan multiplikation med 8 ger 5.6 av tur här, men grövre avrundning på andra ställen driver iväg svaret. Behåll full precision till det slutliga resultatet."
          },
          {
            "kind": "p",
            "text": "<strong>9. Att anta att sidan mittemot en vinkel alltid är den längsta.</strong> Den motstående sidan är bara längst när vinkeln överstiger 45°. Vid 30° är den motstående kateten triangelns kortaste sida."
          },
          {
            "kind": "p",
            "text": "<strong>10. Att använda trigonometri på en icke-rätvinklig triangel.</strong> Utan en 90°-vinkel gäller inte sinus, cosinus och tangens som de definieras här. Trubbiga och spetsiga trianglar behöver i stället sinussatsen och cosinussatsen."
          },
          {
            "kind": "p",
            "text": "<strong>11. Att ange en vinkel utanför det spetsiga intervallet.</strong> Vinklar på 0°, 90° eller mer kollapsar triangeln eller beskriver en annan form. Räknaren behöver en vinkel strikt mellan 0° och 90°."
          },
          {
            "kind": "p",
            "text": "<strong>12. Att misstro ett litet men korrekt resultat.</strong> En 5°-ramp över 12 m stiger verkligen bara ungefär 1.05 m. Små vinklar ger små motstående sidor; det är geometrin, inte ett fel."
          }
        ]
      },
      "angle-validation": {
        "h2": "Kontrollera om ditt resultat är matematiskt giltigt",
        "blocks": [
          {
            "kind": "p",
            "text": "Sidlängder måste vara positiva tal; en noll- eller negativ längd beskriver ingen triangel alls. Varje katet du beräknar måste bli kortare än hypotenusan du angav. Referensvinkeln måste vara spetsig, strikt mellan 0° och 90°, och varje längd i problemet måste dela en enhet."
          },
          {
            "kind": "p",
            "text": "Tangens förtjänar extra respekt nära gränserna av sitt intervall. När vinkeln närmar sig 90° klättrar tangens brant, så en liten svajning i vinkeln svänger resultatet dramatiskt. Nära 0° är tangens liten, och att dividera med den (läget b = a/tan(A)) förstorar varje mätbrus på samma sätt. När din vinkel ligger inom några grader från endera ytterligheten, behandla indata som ungefärliga och resultatet som känsligt snarare än exakt."
          }
        ]
      },
      "angle-verify": {
        "h2": "Så kontrollerar du ditt svar",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>Metod 1: Sätt tillbaka i kvoten.</strong> Dividera ditt svar med den kända sidan och bekräfta att kvoten matchar det trigonometriska värdet. Om du fann a = 5 från c = 10 vid 30°, kontrollera att 5/10 = 0.5 = sin(30°)."
          },
          {
            "kind": "p",
            "text": "<strong>Metod 2: Använd Pythagoras sats.</strong> När du känner till två sidor efter beräkningen, verifiera att a² + b² = c². Detta korskontrollerar trigonometrin mot ren geometri."
          },
          {
            "kind": "p",
            "text": "<strong>Metod 3: Kontrollera relativa storlekar.</strong> Varje katet måste vara kortare än hypotenusan. Kateten motstående den större spetsiga vinkeln måste vara den längre kateten. Vid 30°, förvänta dig att den motstående kateten är den kortare."
          },
          {
            "kind": "p",
            "text": "<strong>Utarbetad kontroll:</strong> från c = 10 m och A = 30° ger räknaren a = 5 m. Hitta den andra kateten: b = 10·cos(30°) ≈ 8.66 m. Kontrollera nu Pythagoras med oavrundade värden:"
          },
          {
            "kind": "display",
            "text": "[[[5^2 + (10\\cos 30^\\circ)^2 = 25 + 75 = 100 = 10^2]]"
          },
          {
            "kind": "p",
            "text": "Likheten håller, hypotenusan är längst och 5 &lt; 8.66 matchar 30°-geometrin. Varje liten avvikelse kommer från avrundningen av 8.66, så verifiera med oavrundade värden när precision spelar roll."
          }
        ]
      },
      "angle-other": {
        "h2": "Välja rätt räknare för rätvinkliga trianglar",
        "blocks": [
          {
            "kind": "p",
            "text": "Den här sidan passar problem med en känd sida och en känd spetsig vinkel. Andra situationer kräver andra verktyg."
          },
          {
            "kind": "p",
            "text": "<strong>Två sidor kända, ingen vinkel:</strong> <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Räknare för sidor i rätvinkliga trianglar</a> tillämpar Pythagoras sats direkt."
          },
          {
            "kind": "p",
            "text": "<strong>Saknad vinkel, sidor kända:</strong> <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Vinkelräknare för rätvinkliga trianglar</a> använder invers sinus, cosinus eller tangens."
          },
          {
            "kind": "p",
            "text": "<strong>Area behövs:</strong> <a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">Arearäknare för rätvinkliga trianglar</a> beräknar den utifrån kateter eller andra indata."
          },
          {
            "kind": "p",
            "text": "<strong>30-60-90- eller 45-45-90-trianglar:</strong> <a href=\"/special-right-triangle-calculator/\" class=\"text-primary hover:underline\">Räknare för speciella rätvinkliga trianglar</a> utnyttjar deras exakta kvoter."
          },
          {
            "kind": "p",
            "text": "<strong>Bara kvotvärdena:</strong> <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">Räknare för trigonometriska kvoter</a> utvärderar sin, cos och tan utan att lösa sidor."
          },
          {
            "kind": "p",
            "text": "<strong>Allt på en gång:</strong> <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Räknare för rätvinkliga trianglar</a> löser hela triangeln, vinklar, area och härledda egenskaper från två giltiga indata."
          }
        ]
      },
      "angle-conclusion": {
        "h2": "Hitta den saknade sidan med rätt formel",
        "blocks": [
          {
            "kind": "p",
            "text": "Börja med att beteckna: motstående, närliggande och hypotenusa relativt din vinkel. Låt den kända sidan välja kvoten: hypotenusa i handen betyder sinus eller cosinus, en katet i handen betyder tangens. Ange vinkeln i grader, behåll full precision till slutet och verifiera med Pythagoras eller en snabb storlekskontroll. Prova räknaren ovan med dina egna tal."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Hur hittar du en saknad sida med hjälp av en vinkel?",
        "answer": "Beteckna sidorna relativt vinkeln: motstående, närliggande, hypotenusa. Välj den kvot som innehåller den kända sidan och den saknade sidan. Med hypotenusa och vinkel, använd a = c·sin(A) eller b = c·cos(A). Med en katet och vinkel, använd a = b·tan(A) eller b = a/tan(A). Sätt in och beräkna."
      },
      {
        "question": "Vilken formel ska jag använda för den motstående sidan?",
        "answer": "Det beror på vad du känner till. Med hypotenusan, använd a = c·sin(A). Med den närliggande kateten, använd a = b·tan(A). Båda ger sidan mittemot vinkel A; den kända sidan avgör vilken form som gäller."
      },
      {
        "question": "Hur hittar du den närliggande sidan med hjälp av en vinkel?",
        "answer": "Med hypotenusan känd, använd b = c·cos(A). Med den motstående kateten känd, använd b = a/tan(A). Den närliggande kateten löper alltid längs med vinkel A, så bekräfta din beteckning innan du väljer."
      },
      {
        "question": "Vad är skillnaden mellan sinus, cosinus och tangens?",
        "answer": "Sinus relaterar motstående till hypotenusa, cosinus relaterar närliggande till hypotenusa och tangens relaterar motstående till närliggande. Sinus och cosinus delar upp en lutande längd i delar; tangens omvandlar direkt mellan de två kateterna. Alla tre beskriver samma vinkel från olika sidor."
      },
      {
        "question": "Vad betyder SOH-CAH-TOA?",
        "answer": "En minnesregel: Sinus = Motstående/Hypotenusa, Cosinus = Närliggande/Hypotenusa, Tangens = Motstående/Närliggande. Den påminner dig om vilken bråk som matchar varje kvot efter att du har betecknat sidorna. Den ersätter inte beteckningssteget."
      },
      {
        "question": "Kan jag hitta en sida om jag känner till hypotenusan och en vinkel?",
        "answer": "Ja, detta är det enklaste fallet. Multiplicera hypotenusan med sin(A) för den motstående kateten eller med cos(A) för den närliggande kateten. En vinkel plus hypotenusan bestämmer hela triangeln."
      },
      {
        "question": "Kan jag hitta en sida om jag känner till en katet och en vinkel?",
        "answer": "Ja, med tangens. Om den kända kateten är närliggande, multiplicera med tan(A) för att få den motstående kateten. Om den kända kateten är motstående, dividera med tan(A) för att få den närliggande kateten. Ingen hypotenusa behövs."
      },
      {
        "question": "Ska jag ange vinklar i grader eller radianer?",
        "answer": "Ange grader. Den här räknaren tolkar vinkelindata som grader, så 30 betyder 30°. Ett radianvärde inskrivet som grader ger ett felaktigt resultat utan varning. Omvandla radianer till grader först genom att multiplicera med 180/π."
      },
      {
        "question": "Varför använder tangensformeln division i ett läge?",
        "answer": "Eftersom tangens är lika med motstående dividerat med närliggande. Att lösa tan(A) = a/b för den motstående kateten ger multiplikation, a = b·tan(A). Att lösa samma ekvation för den närliggande kateten ger division, b = a/tan(A). Ett samband, läst på två sätt."
      },
      {
        "question": "Kan två olika trianglar ha samma vinkel?",
        "answer": "Ja. Vinkeln fastställer formen men inte storleken, så en liten och en stor triangel kan dela varje vinkel. Deras sidkvoter stämmer exakt; bara skalan skiljer. Dessa är likformiga trianglar."
      },
      {
        "question": "Hur verifierar jag den beräknade sidan?",
        "answer": "Sätt tillbaka i kvoten, kontrollera till exempel att a/c är lika med sin(A). Eller använd Pythagoras: med två sidor kända, bekräfta a² + b² = c². Kontrollera också att varje katet är kortare än hypotenusan och rimligt stor för vinkeln."
      },
      {
        "question": "Varför kan tangensbaserade resultat bli känsliga nära 90 grader?",
        "answer": "Tangens växer utan gräns när vinkeln närmar sig 90°, så en liten förändring i vinkeln ger en stor förändring i resultatet. Nära 0° uppstår det omvända problemet vid division med en liten tangens. Behåll extra precision i vinkeln för indata nära endera ytterligheten."
      }
    ],
    "relatedHeading": "Andra räknare för rätvinkliga trianglar som du kan ha nytta av",
    "relatedIntro": "Efter att ha hittat din saknade sida, fortsätt med dessa relaterade räknare för att slutföra din triangelanalys.",
    "relatedItems": [
      "Räknare för rätvinkliga trianglar",
      "Räknare för sidor i rätvinkliga trianglar",
      "Vinkelräknare för rätvinkliga trianglar",
      "Räknare för trigonometriska kvoter",
      "Arearäknare för rätvinkliga trianglar",
      "Räknare för speciella rätvinkliga trianglar"
    ]
  },
  "zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
      "angle-intro": "如何利用角度求边",
      "angle-anatomy": "理解边与角",
      "angle-trig": "正弦、余弦与正切",
      "angle-modes": "计算器的四种模式",
      "angle-examples": "实际应用示例",
      "angle-effect": "角度如何影响边长",
      "angle-degrees": "角度单位与计算器设置",
      "angle-howto": "使用计算器",
      "angle-mistakes": "常见错误",
      "angle-validation": "输入验证",
      "angle-verify": "验证答案",
      "angle-other": "何时使用其他计算器",
      "angle-related": "相关计算器",
      "angle-faq": "常见问题"
    },
    "sections": {
      "angle-intro": {
        "h2": "如何利用角度求直角三角形的边",
        "blocks": [
          {
            "kind": "p",
            "text": "想象一架梯子靠在墙上。你知道梯子长 5 米，与地面成 65 度角，但它能达到多高？直角三角形已知角度求边计算器正好回答这类问题：当你知道一个锐角和一条边长时，它能求出缺失的边。一条边加一个角就足够了，因为三角学完全确定了三角形的形状。三个比值，正弦、余弦和正切，分别把角度与不同的边对联系起来。正弦把对边与斜边联系起来，余弦把邻边与斜边联系起来，正切则直接联系两条直角边。本页将说明哪种比值适合你的情况、为什么它成立，以及如何使用上面的计算器。与需要两条已知边的勾股定理计算器不同，这个工具只需一条边和一个角就能工作。"
          }
        ]
      },
      "angle-anatomy": {
        "h2": "理解直角三角形的边与角",
        "blocks": [
          {
            "kind": "h3",
            "text": "什么是直角三角形？"
          },
          {
            "kind": "p",
            "text": "直角三角形含有一个恰好 90 度的角，就是你在一张纸上看到的那种角。另外两个角是锐角，每个都小于 90 度，并且它们总是加起来等于 90 度，因为任何三角形的三个角总和为 180。本指南中的三角学只适用于直角三角形：正弦、余弦和正切比值是通过直角定义的，所以在没有 90 度角的三角形上使用它们会得到错误答案。"
          },
          {
            "kind": "h3",
            "text": "什么是斜边？"
          },
          {
            "kind": "p",
            "text": "斜边位于直角的对面，始终是三条边中最长的一条。按照惯例记作 [[c]]。要在旋转后的图形中找到它，就找那条不接触直角标记的边。无论三角形如何转动，斜边始终位于直角标记的对面。"
          },
          {
            "kind": "h3",
            "text": "什么是对边和邻边？"
          },
          {
            "kind": "p",
            "text": "选定一个锐角并称之为 [[A]]。[[A]] 对面的直角边是对边，记作 [[a]]。与斜边一起构成 [[A]] 的那条直角边是邻边，记作 [[b]]。初学者最容易在这里出错：边的命名取决于你选择哪个角。同一条在角 [[A]] 看来是对边的直角边，当你把参考角换成 [[B]] 时就变成了邻边。斜边的角色永远不变。在本指南中，[[a]] 是 [[A]] 的对边，[[b]] 是 [[A]] 的邻边，[[c]] 是斜边。"
          }
        ],
        "imgAlt": "直角三角形，角 A 在左下角，直角边 a 是 A 的对边，b 是 A 的邻边，c 是斜边",
        "figcaption": "相对于角 A 的结构：边 a 是 A 的对边，边 b 是 A 的邻边，c 是斜边。A + B = 90°。"
      },
      "angle-trig": {
        "h2": "正弦、余弦和正切如何帮助求出缺失的边",
        "blocks": [
          {
            "kind": "p",
            "text": "三角比是给定角度下直角三角形两条边之间固定的关系。改变角度，比值就改变；保持角度不变，所有具有该角度的三角形都具有相同的比值，无论大小。这就是为什么一个角加一条边就能确定其他一切。三个比值分别把角度与不同的边组合配对，所以你已知哪条边就决定了该用哪个比值。"
          },
          {
            "kind": "h3",
            "text": "理解正弦"
          },
          {
            "kind": "p",
            "text": "正弦比较对边与斜边：[[\\sin(A) = \\frac{a}{c}]]。要求出缺失的边，把等式两边同乘以 [[c]]。右边的 [[c]] 被约掉，剩下 [[a = c\\sin(A)]]。用文字说：对边等于斜边乘以该角的正弦值。角度越大，正弦值越大，所以随着角度张开，对边也变长。"
          },
          {
            "kind": "h3",
            "text": "理解余弦"
          },
          {
            "kind": "p",
            "text": "余弦比较邻边与斜边：[[\\cos(A) = \\frac{b}{c}]]。两边同乘以 [[c]] 就得到 [[b = c\\cos(A)]]。邻边等于斜边乘以该角的余弦值。当角 [[A]] 增大趋近 90 度时，邻边缩小趋近于零，这与几何直觉一致：角度把邻边压扁了。"
          },
          {
            "kind": "h3",
            "text": "理解正切"
          },
          {
            "kind": "p",
            "text": "正切直接比较两条直角边：[[\\tan(A) = \\frac{a}{b}]]。向两个方向变形，得到 [[a = b\\tan(A)]] 和 [[b = \\frac{a}{\\tan(A)}]]。当已知边是邻边、要求对边时用乘法：把邻边乘以正切，就把它拉伸成了对边。当已知边是对边、要求邻边时用除法：你是在问对边里能装下多少个正切大小的片段。两种形式是同一关系从相反方向的解读。"
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA 是什么意思？"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA 是一个记忆口诀，不能代替正确识别各边。SOH：正弦 = 对边 / 斜边。CAH：余弦 = 邻边 / 斜边。TOA：正切 = 对边 / 邻边。当你已经相对于角度标出对边、邻边和斜边后，它能帮你选出比值。一定要先标边；口诀只告诉你之后该写哪个分式。"
          }
        ],
        "imgAlt": "三个面板，在同一个直角三角形上展示正弦、余弦和正切比值",
        "figcaption": "一个三角形上的 SOH-CAH-TOA：正弦用对边和斜边，余弦用邻边和斜边，正切用两条直角边。"
      },
      "angle-modes": {
        "h2": "如何选择正确的计算器模式",
        "blocks": [
          {
            "kind": "p",
            "text": "正确的模式取决于两个事实：你已知哪条边的长度，以及哪条边缺失。在表格中找到你的情况，然后阅读下面对应的计算示例。"
          }
        ],
        "table": {
          "headers": [
            "已知边",
            "已知角",
            "缺失边",
            "公式",
            "计算器模式",
            "适用情形"
          ],
          "rows": [
            [
              "斜边 c",
              "A",
              "直角边 a",
              "a = c × sin(A)",
              "用正弦求直角边 a",
              "已知斜向长度，需要求角所对的边"
            ],
            [
              "斜边 c",
              "A",
              "直角边 b",
              "b = c × cos(A)",
              "用余弦求直角边 b",
              "已知斜向长度，需要求角旁边的边"
            ],
            [
              "直角边 b",
              "A",
              "直角边 a",
              "a = b × tan(A)",
              "用正切求直角边 a",
              "已知水平距离，需要求垂直高度"
            ],
            [
              "直角边 a",
              "A",
              "直角边 b",
              "b = a / tan(A)",
              "用正切求直角边 b",
              "已知垂直高度，需要求水平距离"
            ]
          ]
        },
        "modeSections": [
          {
            "h3": "模式 1：用正弦求直角边 a",
            "blocks": [
              {
                "kind": "p",
                "text": "当你已知斜边、需要求角所对的边时选择此模式。确认已知边是直角对面的那条边，并且你的角是该对边所对的锐角。正弦是正确的比值，因为它直接联系对边和斜边。输入斜边长度和以度为单位的角度，结果就是对边。"
              },
              {
                "kind": "p",
                "text": "<strong>计算示例：</strong>已知 [[c = 10\\text{ m}]] 和 [[A = 30^\\circ]]，求直角边 [[a]]。"
              },
              {
                "kind": "display",
                "text": "[[[a = 10\\sin(30^\\circ) = 10(0.5) = 5\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "答案是合理的：在 30 度时，对边恰好是斜边的一半，这个心算检查很方便。"
              }
            ]
          },
          {
            "h3": "模式 2：用余弦求直角边 b",
            "blocks": [
              {
                "kind": "p",
                "text": "当你已知斜边、需要求角相邻的边时选择此模式。余弦联系邻边和斜边，所以它把斜向长度转换为沿着角度的那条直角边。邻边总是短于斜边，因为锐角的余弦值总是小于 1。"
              },
              {
                "kind": "p",
                "text": "<strong>计算示例：</strong>已知 [[c = 12\\text{ ft}]] 和 [[A = 60^\\circ]]，求直角边 [[b]]。"
              },
              {
                "kind": "display",
                "text": "[[[b = 12\\cos(60^\\circ) = 12(0.5) = 6\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "在 60 度时，邻边是斜边的一半，与 30 度正弦的情况对称。两个锐角互换角色：60° 的邻边就是 30° 的对边。"
              }
            ]
          },
          {
            "h3": "模式 3：用正切求直角边 a",
            "blocks": [
              {
                "kind": "p",
                "text": "当你已知邻边、需要求对边时选择此模式。这是经典的“距离加仰角”情形：你站在已知的水平距离处，想知道高度。正切把邻边放大（或缩小）成对边。角度控制着比值，所以角度越陡，相同底边对应的对边就越高。"
              },
              {
                "kind": "p",
                "text": "<strong>计算示例：</strong>已知 [[b = 8\\text{ m}]] 和 [[A = 35^\\circ]]，求直角边 [[a]]。"
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\tan(35^\\circ) \\approx 8(0.7002) \\approx 5.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "因为 35° 小于 45°，对边比邻边短，这与几何一致。"
              }
            ]
          },
          {
            "h3": "模式 4：用正切求直角边 b",
            "blocks": [
              {
                "kind": "p",
                "text": "当你已知对边、需要求邻边时选择此模式。它回答这类问题：“高度固定，底边要延伸多远？”除以正切相当于把模式 3 的缩放反过来：不是把底边拉伸成高度，而是把高度压缩回底边。"
              },
              {
                "kind": "p",
                "text": "<strong>计算示例：</strong>已知 [[a = 4\\text{ m}]] 和 [[A = 40^\\circ]]，求直角边 [[b]]。"
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{4}{\\tan(40^\\circ)} \\approx \\frac{4}{0.8391} \\approx 4.77\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "在 40°（略低于 45°）时，邻边略长于对边。除法恰好捕捉到了这个微小差异。"
              }
            ]
          }
        ],
        "imgAlt": "四个面板，比较正弦、余弦和两种正切计算器模式及其计算值",
        "figcaption": "四种模式并排比较：正弦和余弦从斜边出发，两种正切模式在两条直角边之间转换。"
      },
      "angle-examples": {
        "h2": "利用角度求直角三角形边的实际示例",
        "blocks": [
          {
            "kind": "p",
            "text": "下面的每个示例都遵循相同的路径：找出直角三角形，标出已知边和已知角，选出把它们与缺失边联系起来的比值，代入、计算，再把答案放回实际情境中解读。注意正弦、余弦或正切的选择每次都是从几何中自然得出的。"
          }
        ],
        "examples": [
          {
            "h3": "示例 1：求梯子达到的高度",
            "blocks": [
              {
                "kind": "p",
                "text": "一架 5 米长的梯子靠在垂直的墙上，与水平地面成 65 度角。墙、地面和梯子构成一个直角三角形，梯子是斜边。已知：[[c = 5\\text{ m}]]，[[A = 65^\\circ]]。缺失的高度是 65° 角的对边，所以正弦合适：这个比值联系对边和斜边。"
              },
              {
                "kind": "display",
                "text": "[[[a = 5\\sin(65^\\circ) \\approx 5(0.9063) \\approx 4.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "梯子大约达到墙上 4.53 米处。梯子底部离墙的水平距离用余弦求，因为那条直角边是角的邻边："
              },
              {
                "kind": "display",
                "text": "[[[b = 5\\cos(65^\\circ) \\approx 5(0.4226) \\approx 2.11\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "一条斜边和一个角就求出了两条直角边。注意这只是几何计算，它没有说明梯子的搭设是否安全，实际使用时请遵循制造商的指导。"
              }
            ]
          },
          {
            "h3": "示例 2：计算坡道的升高",
            "blocks": [
              {
                "kind": "p",
                "text": "一条简化的坡道水平延伸 12 米，高出水平面 5 度。水平段和升高段是直角三角形的两条直角边，水平段是 5° 角的邻边。已知：[[b = 12\\text{ m}]]，[[A = 5^\\circ]]。缺失的升高是对边，正切联系对边与邻边。"
              },
              {
                "kind": "display",
                "text": "[[[a = 12\\tan(5^\\circ) \\approx 12(0.0875) \\approx 1.05\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "坡道在 12 米的水平距离上升高约 1.05 米。不要把水平段和倾斜面混淆：斜面本身比 12 米略长。这个结果不能证明坡道符合无障碍或建筑规范。"
              }
            ]
          },
          {
            "h3": "示例 3：求屋顶的垂直升高",
            "blocks": [
              {
                "kind": "p",
                "text": "一处屋顶截面的水平跨度为 4.5 米，屋面高出水平面 30 度。水平段是角的邻边，升高是对边，所以正切是自然的选择。"
              },
              {
                "kind": "display",
                "text": "[[[a = 4.5\\tan(30^\\circ) \\approx 4.5(0.5774) \\approx 2.60\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "屋顶升高约 2.60 米。坡度越陡，正切值越大，升高也越大，这就是屋顶角度直接决定阁楼高度的原因。这个简化示意图省略了屋檐、脊板和实际施工需要的框架余量。"
              }
            ]
          },
          {
            "h3": "示例 4：测量缆绳的垂直高度",
            "blocks": [
              {
                "kind": "p",
                "text": "一条 20 米长的缆绳从地面拉到电线杆顶部，与水平面成 55 度角。缆绳是斜边。正弦给出垂直高度（角的对边），余弦给出水平跨度（角的邻边），所以一次设定就求出了两条直角边。"
              },
              {
                "kind": "display",
                "text": "[[[a = 20\\sin(55^\\circ) \\approx 20(0.8192) \\approx 16.38\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 20\\cos(55^\\circ) \\approx 20(0.5736) \\approx 11.47\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "缆绳的垂直高度约为 16.38 米，水平跨度为 11.47 米。像这样把正弦和余弦配对使用，是把任意斜向长度分解为垂直和水平分量的标准方法。"
              }
            ]
          },
          {
            "h3": "示例 5：根据视线估计高度",
            "blocks": [
              {
                "kind": "p",
                "text": "一条简化的 150 米视线高出水平基准面 12 度。把视线看作直角三角形的斜边，正弦提取垂直差，余弦提取水平距离。"
              },
              {
                "kind": "display",
                "text": "[[[a = 150\\sin(12^\\circ) \\approx 150(0.2079) \\approx 31.19\\text{ m}]]]"
              },
              {
                "kind": "display",
                "text": "[[[b = 150\\cos(12^\\circ) \\approx 150(0.9781) \\approx 146.72\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "远处的点大约高出基准面 31.19 米，水平距离为 146.72 米。实际测量还会叠加地形、仪器高度和大气效应的修正；这里是底层的原始几何。"
              }
            ]
          },
          {
            "h3": "示例 6：估计树的高度",
            "blocks": [
              {
                "kind": "p",
                "text": "你在平地上站在离树干水平距离 25 米处，仰望树梢的仰角为 38 度。水平距离是邻边，树梢高出你眼睛参考点的高度是对边，所以正切把它们联系起来。"
              },
              {
                "kind": "display",
                "text": "[[[a = 25\\tan(38^\\circ) \\approx 25(0.7813) \\approx 19.53\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "树梢大约高出观测点 19.53 米。如果是从眼睛高度而不是地面开始测量的，加上你的眼睛高度就是树的完整高度。该方法假设你与树干之间的地面是平的。"
              }
            ]
          },
          {
            "h3": "示例 7：计算机械支撑的偏移量",
            "blocks": [
              {
                "kind": "p",
                "text": "一个支撑设计要求一条 600 毫米的水平直角边，与竖直方向成 25 度（从水平面算起）。水平构件是角的邻边；你需要的垂直偏移是它的对边。"
              },
              {
                "kind": "display",
                "text": "[[[a = 600\\tan(25^\\circ) \\approx 600(0.4663) \\approx 279.78\\text{ mm}]]]"
              },
              {
                "kind": "p",
                "text": "垂直偏移约为 279.78 毫米。相同的水平长度，角度越大，偏移越高，这就是小角度变化在紧凑的机械配合中很重要的原因。仅凭这个尺寸不能证明支撑在结构上足够。"
              }
            ]
          },
          {
            "h3": "示例 8：由斜边求对边",
            "blocks": [
              {
                "kind": "p",
                "text": "一个直角三角形的斜边为 8 米，一个锐角为 42 度。角对面的边未知。由于斜边和对边是正弦配对，一次乘法就完成了。"
              },
              {
                "kind": "display",
                "text": "[[[a = 8\\sin(42^\\circ) \\approx 8(0.6691) \\approx 5.35\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "对边约为 5.35 米。正弦总是把斜边测量值转换为正对该角的直角边，无需变形。"
              }
            ]
          },
          {
            "h3": "示例 9：由垂直测量值求水平距离",
            "blocks": [
              {
                "kind": "p",
                "text": "一个直角三角形的对边为 3.2 米，角度为 28 度。邻边未知。正切等于对边除以邻边，所以求邻边意味着把已知的对边除以正切。"
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{3.2}{\\tan(28^\\circ)} \\approx \\frac{3.2}{0.5317} \\approx 6.02\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "水平距离约为 6.02 米。每当已知边位于比值的分子时，除法就是分离未知边的方法。"
              }
            ]
          },
          {
            "h3": "示例 10：估计建筑的垂直偏移",
            "blocks": [
              {
                "kind": "p",
                "text": "一条简化的 80 英尺观测线高出水平面 25 度。该线是斜边，垂直分量是角的对边，需要用正弦。"
              },
              {
                "kind": "display",
                "text": "[[[a = 80\\sin(25^\\circ) \\approx 80(0.4226) \\approx 33.81\\text{ ft}]]]"
              },
              {
                "kind": "p",
                "text": "垂直分量约为 33.81 英尺。角度越大，80 英尺中进入垂直分量的越多，进入水平分量的越少。请把它当作粗略的几何估计，而不是正规建筑测量的替代品。"
              }
            ]
          },
          {
            "h3": "示例 11：计算倾斜步道的升高",
            "blocks": [
              {
                "kind": "p",
                "text": "一条步道水平延伸 6 米，坡度为 8 度。水平段是角的邻边，升高是对边，所以直接用正切。"
              },
              {
                "kind": "display",
                "text": "[[[a = 6\\tan(8^\\circ) \\approx 6(0.1405) \\approx 0.84\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "步道升高约 0.84 米。升高随水平段和角度正切值的增大而增大，所以在固定角度下，水平段加倍，升高也加倍。坡度合规性请另行查阅当地规范。"
              }
            ]
          },
          {
            "h3": "示例 12：由已知升高求水平偏移",
            "blocks": [
              {
                "kind": "p",
                "text": "一个结构有 2 米的垂直偏移，其对角线与水平面成 35 度角。垂直直角边是角的对边，水平偏移是邻边，所以要把正切除掉。"
              },
              {
                "kind": "display",
                "text": "[[[b = \\frac{2}{\\tan(35^\\circ)} \\approx \\frac{2}{0.7002} \\approx 2.86\\text{ m}]]]"
              },
              {
                "kind": "p",
                "text": "水平偏移约为 2.86 米。知道升高和角度，底边就完全确定了，这正是根据高度限制推导退让距离的方法。"
              }
            ]
          }
        ],
        "summaryTable": {
          "headers": [
            "场景",
            "已知边",
            "已知角",
            "比值",
            "计算出的边"
          ],
          "rows": [
            [
              "梯子高度",
              "c = 5 m",
              "65°",
              "正弦",
              "a ≈ 4.53 m"
            ],
            [
              "坡道升高",
              "b = 12 m",
              "5°",
              "正切",
              "a ≈ 1.05 m"
            ],
            [
              "屋顶升高",
              "b = 4.5 m",
              "30°",
              "正切",
              "a ≈ 2.60 m"
            ],
            [
              "缆绳跨度",
              "c = 20 m",
              "55°",
              "正弦 / 余弦",
              "a ≈ 16.38 m, b ≈ 11.47 m"
            ],
            [
              "视线",
              "c = 150 m",
              "12°",
              "正弦 / 余弦",
              "a ≈ 31.19 m, b ≈ 146.72 m"
            ],
            [
              "树的高度",
              "b = 25 m",
              "38°",
              "正切",
              "a ≈ 19.53 m"
            ],
            [
              "支撑偏移",
              "b = 600 mm",
              "25°",
              "正切",
              "a ≈ 279.78 mm"
            ],
            [
              "由斜边求对边",
              "c = 8 m",
              "42°",
              "正弦",
              "a ≈ 5.35 m"
            ],
            [
              "由对边求邻边",
              "a = 3.2 m",
              "28°",
              "正切",
              "b ≈ 6.02 m"
            ],
            [
              "建筑偏移",
              "c = 80 ft",
              "25°",
              "正弦",
              "a ≈ 33.81 ft"
            ],
            [
              "步道升高",
              "b = 6 m",
              "8°",
              "正切",
              "a ≈ 0.84 m"
            ],
            [
              "由升高求水平",
              "a = 2 m",
              "35°",
              "正切",
              "b ≈ 2.86 m"
            ]
          ]
        },
        "imgAlt": "四个面板：用三角学求解梯子高度、坡道升高、屋顶升高和树的高度",
        "figcaption": "三角学的应用：仅用一条边和一个角求出梯子（4.53 米）、坡道（1.05 米）、屋顶（2.60 米）和树（19.53 米）的高度。"
      },
      "angle-effect": {
        "h2": "角度如何影响缺失的边",
        "blocks": [
          {
            "kind": "p",
            "text": "固定斜边，让角度增大：对边伸长，邻边缩短。角度就像一个旋钮，把斜边分配给两条直角边。在 0 度时，对边消失，邻边等于整个斜边；在 90 度时则相反。正切的表现更剧烈，因为它没有斜边作为锚：当角度接近 90 度时，对边在缩小的邻边之上高高耸起，正切值无限制地攀升。"
          },
          {
            "kind": "p",
            "text": "两个三角形可以有相同的锐角，但大小完全不同。角度决定形状，意味着所有对应的边比值都一致，而斜边决定缩放比例。这样的三角形是相似三角形：一架 5 米的梯子在 65° 下和一架 10 米的梯子在 65° 下，达到的高度恰好是 1:2 的比例。下表展示了 10 个单位斜边下的这种旋钮效应。"
          }
        ],
        "table": {
          "headers": [
            "角 A",
            "对边 a = 10 × sin(A)",
            "邻边 b = 10 × cos(A)",
            "tan(A) = a / b"
          ],
          "rows": [
            [
              "30°",
              "≈ 5.00",
              "≈ 8.66",
              "≈ 0.577"
            ],
            [
              "45°",
              "≈ 7.07",
              "≈ 7.07",
              "≈ 1.000"
            ],
            [
              "60°",
              "≈ 8.66",
              "≈ 5.00",
              "≈ 1.732"
            ]
          ]
        },
        "blocksAfter": [
          {
            "kind": "p",
            "text": "在 45° 时，两条直角边完全平衡，正切等于 1。注意对称性：30° 那一行与 60° 那一行互为镜像，只是两条边交换了位置，因为 30° 的对边正是 60° 的邻边。"
          }
        ]
      },
      "angle-degrees": {
        "h2": "为什么正确的角度设置很重要",
        "blocks": [
          {
            "kind": "p",
            "text": "角度可以用度或弧度来度量，两种刻度对同一个数字的含义完全不同。一整圈是 360 度，但只有约 6.283 弧度。本计算器使用度：输入 30 就是 30°，且 [[\\sin(30^\\circ) = 0.5]]。如果同一个 30 被当作弧度读取，正弦值约为 −0.988，答案天差地别，还没有任何警告。"
          },
          {
            "kind": "p",
            "text": "这个陷阱反过来也成立。假设你的角度来自某次计算，得到的是弧度，比如 0.5 弧度（约 28.65°）。在角度模式的计算器里输入 0.5，算出的是 sin(0.5°) ≈ 0.0087，而不是 sin(0.5 弧度) ≈ 0.479。输入前一定要确认角度用的是哪种单位。过早对角度取整也会损失精度：在陡峭的角度下，十分之一度就会让正切明显移动，所以要把角度的完整精度保留到最后一步。"
          }
        ]
      },
      "angle-howto": {
        "h2": "使用计算器的分步指南",
        "steps": [
          "<strong>确认是直角三角形。</strong>在你的草图或情境中找到 90 度的角；没有它，这些公式不适用。",
          "<strong>确定角 A。</strong>选择你的测量所参照的那个锐角。另一个锐角是 90° 减去这个角。",
          "<strong>标注各边。</strong>标出斜边 c，然后把 a 标为 A 的对边，b 标为 A 的邻边。",
          "<strong>记下已知的是哪条边。</strong>是斜边还是一条直角边？这一个事实就把选择范围缩小到两种模式。",
          "<strong>选择匹配的模式。</strong>已知斜边、缺失直角边 a：用正弦求直角边 a。已知斜边、缺失直角边 b：用余弦求直角边 b。已知直角边 b、缺失直角边 a：用正切求直角边 a。已知直角边 a、缺失直角边 b：用正切求直角边 b。",
          "<strong>输入边长及其单位。</strong>使用你将要报告答案的同一单位体系。",
          "<strong>输入以度为单位的角 A。</strong>再次确认它是锐角，严格介于 0° 和 90° 之间。",
          "<strong>计算。</strong>缺失的边会连同展示代入过程的解题步骤一起出现。",
          "<strong>阅读步骤。</strong>确认计算器用了你预期的比值，数字与你的输入一致。",
          "<strong>对结果做合理性检查。</strong>直角边必须短于斜边。如果是从斜边出发求解，正弦和余弦求出的两条直角边应满足 a² + b² = c²。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "如果界面提供重置控件，在开始新的计算前用它清空各字段，以免旧值混入下一次结果。"
          }
        ]
      },
      "angle-mistakes": {
        "h2": "利用角度求三角形边时的常见错误",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>1. 混淆对边和邻边。</strong>边的命名是相对于角 A 的，把两条直角边弄反就等于把正弦和余弦弄反。对策：在碰计算器之前，先在草图上写下“对”和“邻”。"
          },
          {
            "kind": "p",
            "text": "<strong>2. 该用正切时用了正弦。</strong>已知边是一条直角边、视野里没有斜边时，正弦无处着力。如果已知边是直角边，答案就涉及正切。例如：b = 8 m，A = 35° 需要 a = 8·tan(35°)，而不是 8·sin(35°)。"
          },
          {
            "kind": "p",
            "text": "<strong>3. 用错了正切公式。</strong>求对边时乘以正切；求邻边时除以正切。记住方向：a = b·tan(A) 把底边放大成高度，b = a/tan(A) 把高度压缩回底边。"
          },
          {
            "kind": "p",
            "text": "<strong>4. 角度用了错误的单位。</strong>把弧度值当作度输入（或反过来）会悄无声息地产生垃圾结果。先确认是度；本计算器使用度。"
          },
          {
            "kind": "p",
            "text": "<strong>5. 把斜边当成普通的直角边。</strong>斜边只与正弦和余弦配对，从不与正切配对。如果你的公式里既有 tan 又有斜边，说明某条边标错了。"
          },
          {
            "kind": "p",
            "text": "<strong>6. 用错了参考角。</strong>梯子示例中的 65° 是从地面量起的。如果改从墙面量，就会是 25°，每个比值都会改变。一定要检查角度是从哪条边张开的。"
          },
          {
            "kind": "p",
            "text": "<strong>7. 混用了米、英尺或其他单位。</strong>斜边用英尺、答案却要求米时，必须在计算前或计算后换算，绝不能跳过。整个计算过程只用一种单位。"
          },
          {
            "kind": "p",
            "text": "<strong>8. 过早对中间值取整。</strong>把 tan(35°) 取整为 0.7 再乘以 8，这次碰巧得到 5.6，但在别处更粗的取整会让答案漂移。把完整精度保留到最终结果。"
          },
          {
            "kind": "p",
            "text": "<strong>9. 以为角所对的边总是最长的。</strong>只有当角度超过 45° 时，对边才最长。在 30° 时，对边是三角形最短的边。"
          },
          {
            "kind": "p",
            "text": "<strong>10. 在非直角三角形上使用三角学。</strong>没有 90° 角，这里定义的正弦、余弦和正切都不适用。钝角三角形和锐角三角形需要用正弦定理和余弦定理。"
          },
          {
            "kind": "p",
            "text": "<strong>11. 输入了超出锐角范围的角度。</strong>0°、90° 或更大的角度会让三角形坍缩或描述另一种形状。计算器需要严格介于 0° 和 90° 之间的角度。"
          },
          {
            "kind": "p",
            "text": "<strong>12. 不相信虽小但正确的输出。</strong>12 米长的 5° 坡道确实只升高约 1.05 米。小角度产生小对边，这是几何规律，不是错误。"
          }
        ]
      },
      "angle-validation": {
        "h2": "检查结果在数学上是否有效",
        "blocks": [
          {
            "kind": "p",
            "text": "边长必须是正数；零或负的长度根本描述不出三角形。算出的每条直角边都必须短于你输入的斜边。参考角必须是锐角，严格介于 0° 和 90° 之间，题目中所有长度必须使用同一单位。"
          },
          {
            "kind": "p",
            "text": "正切在定义域边缘附近值得格外小心。当角度接近 90° 时，正切急剧攀升，角度的微小抖动会让结果剧烈摆动。接近 0° 时，正切很小，而除以它（b = a/tan(A) 模式）会同样放大测量噪声。当你的角度落在任一极端附近几度之内时，把输入当作近似值，把输出当作敏感值而非精确值。"
          }
        ]
      },
      "angle-verify": {
        "h2": "如何检查答案",
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>方法 1：代回比值验证。</strong>用答案除以已知边，确认比值与三角函数值一致。如果由 c = 10、30° 求得 a = 5，检查 5/10 = 0.5 = sin(30°)。"
          },
          {
            "kind": "p",
            "text": "<strong>方法 2：用勾股定理。</strong>计算后已知两条边时，验证 a² + b² = c²。这是用纯几何交叉检验三角学。"
          },
          {
            "kind": "p",
            "text": "<strong>方法 3：检查相对大小。</strong>每条直角边都必须短于斜边。较大锐角所对的直角边必须是较长的那条。在 30° 时，对边应该是较短的那条。"
          },
          {
            "kind": "p",
            "text": "<strong>验证示例：</strong>由 c = 10 米、A = 30°，计算器给出 a = 5 米。求另一条直角边：b = 10·cos(30°) ≈ 8.66 米。现在用未取整的值验证勾股定理："
          },
          {
            "kind": "display",
            "text": "[[[5^2 + (10\\cos 30^\\circ)^2 = 25 + 75 = 100 = 10^2]]"
          },
          {
            "kind": "p",
            "text": "等式成立，斜边最长，5 &lt; 8.66 符合 30° 的几何。任何微小的不吻合都来自 8.66 的取整，所以当精度重要时，请用未取整的值验证。"
          }
        ]
      },
      "angle-other": {
        "h2": "选择合适的直角三角形计算器",
        "blocks": [
          {
            "kind": "p",
            "text": "本页适合已知一条边和一个锐角的问题。其他情形需要不同的工具。"
          },
          {
            "kind": "p",
            "text": "<strong>已知两条边、未知角：</strong><a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">直角三角形边计算器</a>直接应用勾股定理。"
          },
          {
            "kind": "p",
            "text": "<strong>缺失角、已知边：</strong><a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">直角三角形角度计算器</a>使用反正弦、反余弦或反正切。"
          },
          {
            "kind": "p",
            "text": "<strong>需要面积：</strong><a href=\"/right-triangle-area-calculator/\" class=\"text-primary hover:underline\">直角三角形面积计算器</a>根据直角边或其他输入计算面积。"
          },
          {
            "kind": "p",
            "text": "<strong>30-60-90 或 45-45-90 三角形：</strong><a href=\"/special-right-triangle-calculator/\" class=\"text-primary hover:underline\">特殊直角三角形计算器</a>利用它们的精确比值。"
          },
          {
            "kind": "p",
            "text": "<strong>只需要比值：</strong><a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">三角比计算器</a>求 sin、cos 和 tan 的值，不解边长。"
          },
          {
            "kind": "p",
            "text": "<strong>一次求全：</strong><a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">直角三角形计算器</a>根据任意两个有效输入求解整个三角形、角度、面积和派生属性。"
          }
        ]
      },
      "angle-conclusion": {
        "h2": "用正确的公式求出缺失的边",
        "blocks": [
          {
            "kind": "p",
            "text": "先标注：相对于你的角标出对边、邻边和斜边。让已知边选择比值：手里有斜边就用正弦或余弦，手里有直角边就用正切。以度为单位输入角度，把完整精度保留到最后，再用勾股定理或快速的大小检查来验证。用你自己的数字试试上面的计算器。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "如何利用角度求出缺失的边？",
        "answer": "相对于角度标注各边：对边、邻边、斜边。选出同时包含已知边和缺失边的比值。已知斜边和角度时，用 a = c·sin(A) 或 b = c·cos(A)。已知一条直角边和角度时，用 a = b·tan(A) 或 b = a/tan(A)。代入并计算。"
      },
      {
        "question": "求对边应该用哪个公式？",
        "answer": "取决于你已知什么。已知斜边时，用 a = c·sin(A)。已知邻边时，用 a = b·tan(A)。两者都给出角 A 所对的边；已知边决定用哪种形式。"
      },
      {
        "question": "如何利用角度求邻边？",
        "answer": "已知斜边时，用 b = c·cos(A)。已知对边时，用 b = a/tan(A)。邻边总是沿着角 A 的那条边，所以选择前先确认标注。"
      },
      {
        "question": "正弦、余弦和正切有什么区别？",
        "answer": "正弦联系对边与斜边，余弦联系邻边与斜边，正切联系对边与邻边。正弦和余弦把斜向长度分解为分量；正切在两条直角边之间直接转换。三者从不同侧面描述同一个角。"
      },
      {
        "question": "SOH-CAH-TOA 是什么意思？",
        "answer": "一个记忆口诀：正弦 = 对边/斜边，余弦 = 邻边/斜边，正切 = 对边/邻边。它提醒你在标好边之后，每个比值对应哪个分式。它不能代替标注这一步。"
      },
      {
        "question": "已知斜边和一个角，能求出边吗？",
        "answer": "可以，这是最简单的情况。斜边乘以 sin(A) 得到对边，乘以 cos(A) 得到邻边。一个角加斜边就确定了整个三角形。"
      },
      {
        "question": "已知一条直角边和一个角，能求出边吗？",
        "answer": "可以，用正切。如果已知边是邻边，乘以 tan(A) 得到对边。如果已知边是对边，除以 tan(A) 得到邻边。不需要斜边。"
      },
      {
        "question": "角度应该输入度还是弧度？",
        "answer": "输入度。本计算器把角度输入理解为度，所以 30 就是 30°。把弧度值当作度输入会悄无声息地得到错误结果。先把弧度乘以 180/π 换算成度。"
      },
      {
        "question": "为什么正切公式在一种模式里用除法？",
        "answer": "因为正切等于对边除以邻边。解 tan(A) = a/b 求对边得到乘法 a = b·tan(A)。解同一个方程求邻边得到除法 b = a/tan(A)。一个关系，两种读法。"
      },
      {
        "question": "两个不同的三角形可以有相同的角吗？",
        "answer": "可以。角度决定形状但不决定大小，所以一大一小两个三角形可以拥有完全相同的角。它们的边比值完全一致，只是缩放比例不同。这就是相似三角形。"
      },
      {
        "question": "如何验证算出的边？",
        "answer": "代回比值验证，例如检查 a/c 是否等于 sin(A)。或者用勾股定理：已知两条边时，确认 a² + b² = c²。还要检查每条直角边都短于斜边，且大小与角度相称。"
      },
      {
        "question": "为什么接近 90 度时，基于正切的结果会变得敏感？",
        "answer": "当角度接近 90° 时，正切无限制地增大，所以角度的微小变化会引起结果的大幅变化。接近 0° 时，除以很小的正切会出现反向的问题。角度输入接近任一极端时，请在角度上保留更多精度。"
      }
    ],
    "relatedHeading": "你可能会用到的其他直角三角形计算器",
    "relatedIntro": "求出缺失的边之后，继续使用这些相关计算器，完成你的三角形分析。",
    "relatedItems": [
      "直角三角形计算器",
      "直角三角形边计算器",
      "直角三角形角度计算器",
      "三角比计算器",
      "直角三角形面积计算器",
      "特殊直角三角形计算器"
    ]
  }
};
