/**
 * arctanGuideTranslations.batch3.ts
 * Translations of the Right Triangle Angle From Tangent Calculator guide (ArctanGuide.astro)
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese Simplified (zh).
 *
 * Built from the user's actual master prompt (Page 7 of 45). Follows the locked
 * translation prompt (TRANSLATION_PROMPT.md, 2026-10-30).
 *
 * Structure per language:
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (13 entries: arctan-intro, arctan-sides, arctan-what, arctan-formula,
 *   arctan-howto, arctan-examples, arctan-applications, arctan-ratio, arctan-units,
 *   arctan-mistakes, arctan-verify, arctan-choose, arctan-conclusion)
 *   Each section: h2 + blocks (ordered {kind: 'p'|'h3', text}). Optional: steps (howto),
 *   listItems (mistakes, choose), closingParagraphs (howto, ratio, choose),
 *   table {headers, rows} (applications, ratio), imgAlt, figcaption (sides, what,
 *   applications, ratio).
 * - faqs (12 question/answer pairs, top-level)
 * - relatedHeading, relatedIntro, relatedItems (8 calculator names)
 *
 * Formulas, KaTeX [[...]]/[[[...]]] markup, variable names, numbers, units, URLs,
 * and HTML tags are preserved exactly as in the English source. No em dashes.
 * Arabic (ar) content is RTL-appropriate; math markup stays LTR.
 */

export const ARCTAN_TRANSLATIONS_BATCH3 = {
  "id": {
    "sections": {
      "arctan-applications": {
        "blocks": [
          {
            "kind": "p",
            "text": "Dua belas contoh praktis yang dikerjakan tuntas. Untuk setiap contoh, situasinya dideskripsikan, segitiganya diidentifikasi, ukurannya dinyatakan, sisi yang benar diberi nama, rumusnya ditulis dan dihitung, lalu hasilnya ditafsirkan beserta batas praktisnya."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Menghitung Sudut Kemiringan Atap"
          },
          {
            "kind": "p",
            "text": "Atap naik 4 ft secara vertikal di atas jarak horizontal 12 ft. Cari sudut antara lereng atap dan garis horizontal."
          },
          {
            "kind": "p",
            "text": "Diketahui: kenaikan berhadapan [[a = 4]] ft, jarak mendatar bersebelahan [[b = 12]] ft. Invers tangen cocok karena kedua ukuran yang tegak lurus diketahui dan panjang lereng tidak diperlukan."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Atap naik sekitar 18,43 derajat di atas garis horizontal. Perhatikan bahwa kemiringan atap yang dinyatakan sebagai 4:12 adalah rasio, bukan sudut 4 derajat. Hasil geometris ini bukanlah penilaian struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Mencari Sudut Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga mencapai 4,5 m ke atas dinding, dan dasarnya berjarak 2 m dari dinding. Cari sudut antara tangga dan tanah."
          },
          {
            "kind": "p",
            "text": "Diketahui: tinggi berhadapan [[a = 4.5]] m, jarak tanah bersebelahan [[b = 2]] m."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Tinggi dinding berhadapan dengan sudut di tanah dan jarak tanah bersebelahan. Sudut yang dihitung saja tidak menunjukkan apakah tangga terpasang dengan aman."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Menghitung Sudut Kemiringan Jalan Landai"
          },
          {
            "kind": "p",
            "text": "Sebuah jalan landai naik 0,75 m di atas jarak horizontal 9 m. Cari sudut kemiringannya."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Kenaikan vertikal dan jarak horizontal adalah masukan tangen yang benar. Sudut ini sendiri tidak memastikan aksesibilitas atau kepatuhan terhadap peraturan bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Memperkirakan Sudut Elevasi ke Pohon"
          },
          {
            "kind": "p",
            "text": "Seseorang berdiri 20 m dari sebuah pohon. Puncak pohon 12 m di atas titik pengamatan. Hitung sudut elevasinya."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Selisih tinggi vertikal adalah sisi berhadapan dan jarak horizontal adalah sisi bersebelahan. Hasilnya adalah sudut di atas garis horizontal dari titik pengamatan, bukan tinggi total pohon."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Pengukuran Elevasi Survei"
          },
          {
            "kind": "p",
            "text": "Sketsa survei yang disederhanakan mencatat selisih vertikal 7 m dan jarak horizontal 12 m. Hitung sudut elevasinya."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Selisih elevasi dan jarak horizontal membentuk sisi berhadapan dan sisi bersebelahan. Survei sebenarnya mungkin memerlukan koreksi tinggi alat dan penyesuaian medan di luar model sederhana ini."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Mencari Sudut Penyangga Mekanis"
          },
          {
            "kind": "p",
            "text": "Sebuah penyangga mekanis memiliki kenaikan vertikal 1,2 m dan jarak horizontal 3,5 m. Hitung sudutnya terhadap garis horizontal."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Invers tangen mengubah dua ukuran tegak lurus menjadi sudut tanpa memerlukan panjang diagonal. Perhitungan ini tidak menunjukkan kekuatan atau kesesuaian penyangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Menghitung Kemiringan Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga sederhana naik 2,8 m di atas jarak horizontal 4 m. Hitung sudut kemiringan keseluruhan."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Kenaikan vertikal total dan jarak horizontal menentukan sudut keseluruhan. Perhitungan sederhana ini tidak memverifikasi kepatuhan terhadap peraturan bangunan atau dimensi tiap anak tangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Mencari Sudut Kawat Penegang"
          },
          {
            "kind": "p",
            "text": "Sebuah kawat penegang menghubungkan dua titik dengan selisih vertikal 10 m dan selisih horizontal 15 m. Cari sudut antara kawat dan garis horizontal."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Selisih vertikal berhadapan dengan sudut dan proyeksi horizontal bersebelahan. Perhitungan sudut tidak menentukan tegangan kawat, kekuatan jangkar, atau keamanan struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Menghitung Sudut Kemiringan Jalan"
          },
          {
            "kind": "p",
            "text": "Sebuah jalan naik 5 m di atas jarak horizontal 100 m. Cari sudut kemiringan jalan."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Kemiringan persennya adalah [[(5/100) \\times 100 = 5\\%]]. Kemiringan 5 persen bukanlah sudut 5 derajat; sudutnya adalah arctan dari rasio, sekitar 2,86 derajat."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Mencari Sudut Lengan Derek"
          },
          {
            "kind": "p",
            "text": "Sebuah lengan derek sederhana memiliki kenaikan vertikal 8 m dan proyeksi horizontal 6 m. Cari sudutnya terhadap garis horizontal."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Proyeksi vertikal berhadapan dan proyeksi horizontal bersebelahan. Hasil ini tidak menentukan kapasitas derek atau keamanan operasional."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Menghitung Kemiringan Jalur Pendakian"
          },
          {
            "kind": "p",
            "text": "Sebuah bagian lurus jalur pendakian naik 80 m di atas jarak horizontal 150 m. Cari sudut kemiringannya."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Perhitungan memakai kenaikan elevasi vertikal sebagai sisi berhadapan dan jarak horizontal sebagai sisi bersebelahan. Jalur sebenarnya berubah-ubah kemiringannya, bukan membentuk satu lereng lurus."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Mencari Sudut Penyangga Kanopi"
          },
          {
            "kind": "p",
            "text": "Sebuah penyangga kanopi memiliki kenaikan vertikal 1,2 m dan jarak horizontal 2,4 m. Hitung sudutnya terhadap garis horizontal."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Rasio menentukan sudut tanpa memerlukan panjang diagonal penyangga. Hasilnya tidak menunjukkan kesesuaian struktural penyangga."
          },
          {
            "kind": "h3",
            "text": "Perbandingan Contoh-Contoh Praktis"
          }
        ],
        "figcaption": "Empat perhitungan praktis: atap 18.43&deg;, tangga 66.04&deg;, jalan landai 4.76&deg;, elevasi pohon 30.96&deg;.",
        "h2": "Contoh Nyata Menghitung Sudut Menggunakan Tangen",
        "imgAlt": "Empat contoh arctan praktis: kemiringan atap, tangga, jalan landai, dan sudut elevasi pohon",
        "table": {
          "headers": [
            "Situasi",
            "Sisi berhadapan",
            "Sisi bersebelahan",
            "Rumus",
            "Sudut",
            "Tafsiran"
          ],
          "rows": [
            [
              "Kemiringan atap",
              "4 ft",
              "12 ft",
              "arctan(4/12)",
              "18.43&deg;",
              "Kemiringan atap sedang"
            ],
            [
              "Tangga",
              "4.5 m",
              "2 m",
              "arctan(4.5/2)",
              "66.04&deg;",
              "Posisi tangga curam"
            ],
            [
              "Jalan landai",
              "0.75 m",
              "9 m",
              "arctan(0.75/9)",
              "4.76&deg;",
              "Kemiringan landai"
            ],
            [
              "Elevasi pohon",
              "12 m",
              "20 m",
              "arctan(12/20)",
              "30.96&deg;",
              "Sudut pandang ke puncak pohon"
            ],
            [
              "Survei",
              "7 m",
              "12 m",
              "arctan(7/12)",
              "30.26&deg;",
              "Sudut elevasi"
            ],
            [
              "Penopang",
              "1.2 m",
              "3.5 m",
              "arctan(1.2/3.5)",
              "18.92&deg;",
              "Sudut penopang landai"
            ],
            [
              "Tangga",
              "2.8 m",
              "4 m",
              "arctan(2.8/4)",
              "34.99&deg;",
              "Kemiringan tangga tipikal"
            ],
            [
              "Kawat penegang",
              "10 m",
              "15 m",
              "arctan(10/15)",
              "33.69&deg;",
              "Sudut kawat terhadap horizontal"
            ],
            [
              "Kemiringan jalan",
              "5 m",
              "100 m",
              "arctan(5/100)",
              "2.86&deg;",
              "Jalan kemiringan 5%"
            ],
            [
              "Lengan derek",
              "8 m",
              "6 m",
              "arctan(8/6)",
              "53.13&deg;",
              "Posisi lengan terangkat"
            ],
            [
              "Jalur pendakian",
              "80 m",
              "150 m",
              "arctan(80/150)",
              "28.07&deg;",
              "Bagian jalur curam"
            ],
            [
              "Penopang kanopi",
              "1.2 m",
              "2.4 m",
              "arctan(1.2/2.4)",
              "26.57&deg;",
              "Sudut diagonal penyangga"
            ]
          ]
        }
      },
      "arctan-choose": {
        "blocks": [
          {
            "kind": "p",
            "text": "Sesuaikan alatnya dengan ukuran yang benar-benar Anda miliki:"
          }
        ],
        "closingParagraphs": [
          "Ketiga fungsi invers sepakat pada segitiga yang sama: untuk segitiga 3-4-5, arctan(3/4), arcsin(3/5), dan arccos(4/5) semuanya menghasilkan 36,87 derajat. Jika dua metode tidak sepakat, ada sisi yang salah diberi label."
        ],
        "h2": "Memilih Kalkulator Segitiga Siku-Siku yang Tepat",
        "listItems": [
          "<strong>Kalkulator Sudut dari Tangen</strong> (halaman ini): sisi berhadapan [[a]] dan sisi bersebelahan [[b]] diketahui, mencari sudut [[A]]. Terbaik ketika kedua kaki diukur secara langsung.",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sudut dari Sinus</strong></a>: sisi berhadapan dan hipotenusa diketahui. Terbaik untuk soal tinggi ketika panjang miringnya sudah diukur.",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sudut dari Kosinus</strong></a>: sisi bersebelahan dan hipotenusa diketahui. Terbaik ketika hipotenusa diukur langsung sepanjang lereng.",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sudut</strong></a>: membantu Anda memilih metode yang tepat ketika ragu sisi mana yang Anda miliki.",
          "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sudut yang Hilang</strong></a>: mencari sudut komplementer ketika satu sudut lancip sudah diketahui.",
          "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\"><strong>Kalkulator Sisi</strong></a>: mencari panjang sisi yang hilang, bukan sudut."
        ]
      },
      "arctan-conclusion": {
        "blocks": [
          {
            "kind": "p",
            "text": "Rumus invers tangen mengubah dua ukuran kaki yang sederhana menjadi sudut yang tepat. Ukur sisi berhadapan dan sisi bersebelahan, bagi, terapkan arctan, lalu verifikasi dengan sudut komplementer atau teorema Pythagoras. Baik tugasnya kemiringan atap, kemiringan jalan landai, maupun posisi tangga, metodenya sama: padankan rasio dengan sudutnya, dan biarkan geometri bekerja."
          }
        ],
        "h2": "Temukan Sudut Apa Pun dari Tangen dengan Percaya Diri"
      },
      "arctan-examples": {
        "blocks": [
          {
            "kind": "p",
            "text": "Keempat contoh ini membangun keterampilan inti sebelum aplikasi dunia nyata. Setiap contoh mengikuti pola yang sama: tulis rumus, masukkan nilai, bagi, terapkan arctan."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: Segitiga Siku-Siku 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diketahui sisi berhadapan [[a = 3]] cm dan sisi bersebelahan [[b = 4]] cm, cari sudut [[A]]."
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tuliskan rumusnya. [[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Masukkan nilainya. [[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Hitung. [[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "Jawaban akhir: [[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Hipotenusa tidak diperlukan meskipun ini segitiga 3-4-5. Kedua kaki saja sudah menentukan sudut, dan itulah mengapa arctan adalah pilihan yang efisien di sini."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Sisi Berhadapan dan Bersebelahan Sama Panjang"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a = 5]] m dan [[b = 5]] m:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Kaki yang sama panjang menghasilkan segitiga siku-siku sama kaki, sehingga kedua sudut lancipnya tepat 45 derajat."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Sudut di Bawah 45 Derajat"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a = 3]] m dan [[b = 6]] m:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Sudutnya kurang dari 45 derajat karena sisi berhadapan lebih pendek dari sisi bersebelahan. Kenaikan pendek di atas jarak mendatar panjang menghasilkan sudut yang landai."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Sudut di Atas 45 Derajat"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a = 8]] ft dan [[b = 4]] ft:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Sudutnya lebih dari 45 derajat karena sisi berhadapan lebih panjang dari sisi bersebelahan. Kenaikan tinggi di atas jarak mendatar pendek menghasilkan sudut yang curam."
          }
        ],
        "h2": "Contoh Langkah Demi Langkah Mencari Sudut Menggunakan Tangen"
      },
      "arctan-formula": {
        "blocks": [
          {
            "kind": "p",
            "text": "Mulailah dari definisi tangen:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Panjang sisi yang diketahui memungkinkan Anda menghitung rasio di ruas kanan. Untuk memulihkan sudutnya, terapkan invers tangen pada kedua ruas:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]"
          },
          {
            "kind": "p",
            "text": "Invers tangen diterapkan pada seluruh rasio karena rasio itu secara keseluruhan adalah tangen dari sudut. Anda tidak dapat membagi operasinya ke pembilang dan penyebut."
          },
          {
            "kind": "h3",
            "text": "Contoh Pengerjaan: Sisi Berhadapan 3 dan Sisi Bersebelahan 4"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a = 3]] cm dan [[b = 4]] cm:"
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tuliskan rumusnya. [[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Masukkan nilainya. [[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Hitung rasionya. [[3/4 = 0.75]]"
          },
          {
            "kind": "p",
            "text": "Langkah 4: Terapkan invers tangen. [[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "Jawaban akhir: [[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Sudutnya kira-kira 36,87 derajat. Dua tempat desimal mencerminkan pembulatan biasa dari hasil yang irasional, bukan bentuk tertutup yang eksak."
          }
        ],
        "h2": "Cara Kerja Rumus Invers Tangen"
      },
      "arctan-howto": {
        "blocks": [
          {
            "kind": "p",
            "text": "Ikuti langkah-langkah ini agar sesuai dengan tampilan langsung:"
          }
        ],
        "closingParagraphs": [
          "Setiap langkah penting karena salah memberi label sisi adalah sumber jawaban salah yang paling umum. Meluangkan waktu sejenak untuk memastikan kaki mana yang berhadapan dan mana yang bersebelahan mencegah kesalahan yang paling sering terjadi."
        ],
        "h2": "Cara Menggunakan Kalkulator Sudut Segitiga Siku-Siku dari Tangen",
        "steps": [
          "<strong>Tentukan sudut siku-sikunya.</strong> Pastikan segitiga memiliki sudut 90 derajat sebelum menggunakan rasio trigonometri apa pun.",
          "<strong>Tentukan sudut acuan A</strong> yang ingin Anda hitung.",
          "<strong>Cari sisi berhadapan a</strong>, yaitu kaki segitiga yang tepat di seberang sudut A.",
          "<strong>Cari sisi bersebelahan b</strong>, yaitu kaki yang menyentuh sudut A dan bukan hipotenusa.",
          "<strong>Ukur atau peroleh panjang kedua sisi</strong> dengan satuan yang sama.",
          "<strong>Masukkan panjang sisi berhadapan</strong> ke kolom yang sesuai.",
          "<strong>Masukkan panjang sisi bersebelahan</strong> ke kolomnya.",
          "<strong>Pilih satuan yang sesuai</strong> dengan pemilih satuan yang disediakan kalkulator.",
          "<strong>Periksa bahwa kedua panjang sisi positif</strong> dan lebih dari nol.",
          "<strong>Tekan Hitung Sudut A</strong> untuk menjalankan perhitungan.",
          "<strong>Baca sudut yang dihitung</strong> dalam derajat.",
          "<strong>Periksa apakah hasilnya masuk akal</strong> untuk segitiga tersebut: rasio mendekati 1 seharusnya menghasilkan sudut mendekati 45 derajat.",
          "<strong>Gunakan Atur Ulang</strong> untuk menghapus masukan dan memulai perhitungan baru."
        ]
      },
      "arctan-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator sudut segitiga siku-siku dari tangen mencari sudut lancip ketika Anda mengetahui kedua kaki segitiga: sisi berhadapan dan sisi bersebelahan. Kalkulator membagi sisi berhadapan dengan sisi bersebelahan, lalu menerapkan invers tangen pada rasio tersebut. Hasilnya adalah sudut dalam derajat."
          },
          {
            "kind": "p",
            "text": "Bayangkan sebuah jalan landai kursi roda. Anda dapat mengukur tinggi kenaikan dan jarak horizontal yang ditempuhnya, tetapi permukaan miring itu sendiri mungkin sulit diukur. Kedua ukuran tersebut, yaitu kenaikan vertikal dan jarak horizontal, adalah sisi berhadapan dan sisi bersebelahan. Rasio keduanya saja sudah cukup. Invers tangen mengubah rasio itu langsung menjadi sudut kemiringan, tanpa perlu mengukur panjang lereng sama sekali."
          },
          {
            "kind": "p",
            "text": "Di sini [[A]] adalah sudut yang Anda cari, [[a]] adalah sisi berhadapan, dan [[b]] adalah sisi bersebelahan. Tangen menghubungkan ketiganya sebagai [[\\tan(A) = a/b]], dan invers tangen membalik hubungan itu: [[A = \\arctan(a/b)]]. Karena hipotenusa tidak pernah masuk ke dalam rumus, metode ini adalah cara yang paling alami setiap kali kedua kaki segitiga adalah ukuran yang memang Anda miliki."
          }
        ],
        "h2": "Cara Mencari Sudut Menggunakan Tangen"
      },
      "arctan-mistakes": {
        "h2": "Kesalahan Umum Saat Menghitung Sudut Menggunakan Tangen",
        "listItems": [
          "<strong>Menggunakan hipotenusa alih-alih sisi bersebelahan.</strong> Rumus membutuhkan kaki yang menyentuh sudut A, bukan sisi terpanjang. Periksa: apakah penyebut Anda salah satu dari dua kaki?",
          "<strong>Menukar sisi berhadapan dan sisi bersebelahan.</strong> Ini menghitung sudut komplementernya. Jika Anda mengharapkan sekitar 37 derajat tetapi mendapatkan sekitar 53, kakinya tertukar.",
          "<strong>Membalik rasio menjadi b/a.</strong> [[\\arctan(b/a)]] menghasilkan [[B]], bukan [[A]]. Untuk segitiga 3-4, arctan(4/3) adalah 53,13 derajat, yaitu sudut lancip yang satunya lagi.",
          "<strong>Menggunakan tangen biasa alih-alih invers tangen.</strong> Mengetik tan(0,75) alih-alih arctan(0,75) menjawab pertanyaan yang sama sekali berbeda.",
          "<strong>Mengira invers tangen sama dengan kebalikan tangen.</strong> [[\\tan^{-1}(x)]] bukanlah [[1/\\tan(x)]]. Kebalikannya adalah kotangen.",
          "<strong>Menganggap rasio tangen harus di antara 0 dan 1.</strong> Rasio bisa lebih dari 1 dengan bebas. Rasio 2 dengan sudut 63,43 derajat sepenuhnya sah.",
          "<strong>Memasukkan panjang sisi nol atau negatif.</strong> Panjang sisi harus positif. Masukan nol atau negatif tidak memiliki makna geometris di sini.",
          "<strong>Mencampur satuan ukur yang tidak sesuai.</strong> Meter untuk satu kaki dan kaki (ft) untuk kaki yang lain merusak rasio. Ubah dulu satuannya.",
          "<strong>Membulatkan rasio terlalu dini.</strong> Membulatkan 0,6667 menjadi 0,67 sebelum menerapkan arctan menggeser jawabannya. Jaga ketelitian penuh sampai langkah terakhir.",
          "<strong>Melaporkan radian padahal yang diharapkan derajat.</strong> Arctan(1) adalah 45 derajat tetapi 0,785 radian. Periksa mode kalkulator Anda.",
          "<strong>Mengira sudut A sama dengan sudut komplementernya B.</strong> Ingat [[A + B = 90^\\circ]]. Jika jawabannya tampak seperti sudut \"yang lain\", rasionya terbalik.",
          "<strong>Menganggap kemiringan persen sebagai sudut dalam derajat.</strong> Kemiringan 5% adalah arctan(0,05), sekitar 2,86 derajat, bukan 5 derajat.",
          "<strong>Mengira kenaikan vertikal sama dengan jarak lereng.</strong> Sisi berhadapan adalah komponen vertikal murni, bukan panjang sepanjang lereng.",
          "<strong>Menganggap sudut yang dihitung membuktikan sebuah struktur aman.</strong> Geometri hanya menggambarkan bentuk. Keamanan tangga, beban atap, dan kepatuhan jalan landai membutuhkan pemeriksaan teknik terpisah."
        ]
      },
      "arctan-ratio": {
        "blocks": [
          {
            "kind": "p",
            "text": "Rasio [[a/b]] menentukan sudut [[A]]. Rasio kecil menghasilkan sudut lancip kecil, sisi yang sama panjang menghasilkan tepat 45 derajat, dan sisi berhadapan yang lebih panjang dari sisi bersebelahan menghasilkan sudut lebih dari 45 derajat. Rasio lebih dari 1 sepenuhnya sah untuk tangen, dan inilah yang membedakannya dari sinus dan kosinus. Segitiga yang sebangun memiliki sudut yang sama, dan mengalikan kedua kaki dengan faktor positif yang sama tidak mengubah sudut. Ketika rasionya menjadi sangat besar, sudutnya mendekati 90 derajat tanpa pernah mencapainya untuk panjang sisi positif yang terbatas."
          }
        ],
        "figcaption": "Rasio 0,25 menghasilkan 14.04&deg;, 0,5 menghasilkan 26.57&deg;, 1 menghasilkan 45&deg;, 2 menghasilkan 63.43&deg;, 4 menghasilkan 75.96&deg;.",
        "h2": "Pengaruh Rasio Berhadapan-terhadap-Bersebelahan terhadap Sudut",
        "imgAlt": "Lima segitiga yang menunjukkan bagaimana rasio tangen mengubah sudut dari 14 menjadi 76 derajat",
        "table": {
          "headers": [
            "Sisi berhadapan a",
            "Sisi bersebelahan b",
            "Rasio a/b",
            "Sudut A"
          ],
          "rows": [
            [
              "1",
              "4",
              "0.25",
              "Kira-kira 14.04&deg;"
            ],
            [
              "1",
              "2",
              "0.5",
              "Kira-kira 26.57&deg;"
            ],
            [
              "1",
              "1",
              "1",
              "45&deg;"
            ],
            [
              "2",
              "1",
              "2",
              "Kira-kira 63.43&deg;"
            ],
            [
              "4",
              "1",
              "4",
              "Kira-kira 75.96&deg;"
            ]
          ]
        },
        "closingParagraphs": [
          "Polanya jelas: rasio sisi menentukan bentuk segitiga, bukan ukuran keseluruhannya. Gandakan kedua kaki dan sudutnya tetap persis sama."
        ]
      },
      "arctan-sides": {
        "blocks": [
          {
            "kind": "h3",
            "text": "Apa Itu Segitiga Siku-Siku?"
          },
          {
            "kind": "p",
            "text": "Segitiga siku-siku memiliki satu sudut yang tepat 90 derajat. Dua sudut lainnya adalah sudut lancip, artinya masing-masing kurang dari 90 derajat, dan jumlah keduanya selalu 90 derajat. Syarat sudut siku-siku inilah yang membuat rasio trigonometri bekerja: sinus, kosinus, dan tangen didefinisikan berdasarkan hubungan tetap antar sisi segitiga siku-siku. Tanpa sudut siku-siku, rasio [[a/b]] tidak akan menunjukkan satu sudut yang konsisten."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Berhadapan?"
          },
          {
            "kind": "p",
            "text": "Sisi berhadapan adalah kaki segitiga yang terletak tepat di seberang sudut [[A]]. Sisi ini tidak pernah menyentuh sudut itu sendiri. Dalam penggunaan sehari-hari, sisi ini sering berarti kenaikan vertikal: tinggi yang dicapai tangga pada dinding, ketinggian yang diperoleh atap, atau komponen vertikal dari lengan derek. Sebutan \"berhadapan\" bergantung pada sudut mana yang Anda pilih sebagai acuan. Jika Anda mengganti acuan dari [[A]] ke [[B]], sisi yang tadinya berhadapan menjadi sisi bersebelahan."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Bersebelahan?"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan adalah kaki segitiga yang menyentuh sudut [[A]] tetapi bukan hipotenusa. Sisi ini membentuk salah satu tepi sudut. Dalam pengukuran lapangan, sisi ini sering berarti jarak horizontal: jarak tanah dari dinding ke dasar tangga, bentangan horizontal atap, atau jarak mendatar sebuah jalan landai. Sisi ini adalah salah satu dari dua kaki yang tegak lurus, dan jangan sampai tertukar dengan hipotenusa, yaitu sisi yang berhadapan dengan sudut siku-siku."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Hipotenusa?"
          },
          {
            "kind": "p",
            "text": "Hipotenusa, yang diberi label [[c]], adalah sisi yang berhadapan dengan sudut 90 derajat dan selalu menjadi sisi terpanjang segitiga. Kalkulator tangen tidak membutuhkan panjangnya. Jika suatu saat Anda membutuhkannya, teorema Pythagoras menghitungnya dari kedua kaki: [[c = \\sqrt{a^2 + b^2}]]. Namun untuk mencari sudutnya sendiri, hipotenusa adalah informasi tambahan yang bisa Anda lewati begitu saja."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sudut Acuan Itu Penting"
          },
          {
            "kind": "p",
            "text": "Sisi berhadapan dan sisi bersebelahan didefinisikan relatif terhadap sudut yang dipilih. Pada segitiga yang sama, mengganti acuan dari [[A]] ke [[B]] akan menukar peran kedua kaki: sisi yang tadinya berhadapan menjadi sisi bersebelahan, begitu juga sebaliknya. Membalik rasio dari [[a/b]] menjadi [[b/a]] karena itu menghasilkan sudut komplementer [[B = 90^\\circ - A]], bukan [[A]]. Menjaga sudut acuan tetap sama selama perhitungan menghindari kekeliruan ini."
          }
        ],
        "figcaption": "Anatomi untuk arctan: a adalah sisi berhadapan di seberang sudut A, b adalah sisi bersebelahan yang menyentuh sudut A, c adalah hipotenusa.",
        "h2": "Memahami Sisi Berhadapan dan Sisi Bersebelahan",
        "imgAlt": "Anatomi segitiga siku-siku yang menunjukkan sisi berhadapan a, sisi bersebelahan b, dan hipotenusa c untuk rumus arctan"
      },
      "arctan-units": {
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator menghasilkan derajat. Satu derajat adalah 1/360 putaran penuh. Radian adalah satuan sudut alternatif, yang didefinisikan sehingga satu putaran penuh sama dengan [[2\\pi]] radian. Invers tangen dapat menghasilkan salah satu satuan tergantung kalkulatornya, tetapi alat ini melaporkan derajat."
          },
          {
            "kind": "p",
            "text": "Rasio [[a/b]] sendiri tidak bersatuan, dan kedua sisi harus menggunakan satuan yang sesuai. Mengubah kedua ukuran dari meter ke sentimeter mengalikan pembilang dan penyebut dengan 100, sehingga rasionya tidak berubah."
          },
          {
            "kind": "p",
            "text": "Untuk mengubah radian ke derajat: [[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]"
          },
          {
            "kind": "h3",
            "text": "Contoh: Apakah Satuan Ukur Mengubah Sudutnya?"
          },
          {
            "kind": "p",
            "text": "Ambil [[a = 3]] m dan [[b = 4]] m. Setara dalam sentimeter adalah [[a = 300]] cm dan [[b = 400]] cm. Keduanya menghasilkan rasio 0,75 dan sudut yang sama sebesar 36,87 derajat. Jaga ketelitian yang cukup pada langkah-langkah antara dan bulatkan sudut akhir sesuai ketelitian pengukuran aslinya."
          }
        ],
        "h2": "Memahami Satuan Sudut dan Ketelitian Pengukuran"
      },
      "arctan-verify": {
        "blocks": [
          {
            "kind": "p",
            "text": "Masukan yang sah untuk segitiga siku-siku tak-degenerasi: sisi berhadapan harus positif, sisi bersebelahan harus positif, keduanya tidak boleh nol, keduanya harus memakai satuan yang sesuai, dan sudut yang dihasilkan harus benar-benar berada di antara 0 dan 90 derajat. Berbeda dengan sinus dan kosinus, rasio tangen tidak dibatasi di bawah 1, sehingga sisi berhadapan yang lebih panjang dari sisi bersebelahan tidak masalah."
          },
          {
            "kind": "h3",
            "text": "Metode 1: Periksa Rasio Tangennya"
          },
          {
            "kind": "p",
            "text": "Verifikasi [[\\tan(A) \\approx a/b]] menggunakan sudut yang belum dibulatkan bila memungkinkan. Jika tangen dari jawaban Anda menghasilkan kembali rasio masukan, jawabannya konsisten."
          },
          {
            "kind": "h3",
            "text": "Metode 2: Periksa Sudut Komplementernya"
          },
          {
            "kind": "p",
            "text": "Hitung [[B = 90^\\circ - A]]. Kedua sudut lancip segitiga siku-siku harus berjumlah 90 derajat, sehingga ini adalah pemeriksaan cepat untuk setiap hasil."
          },
          {
            "kind": "h3",
            "text": "Metode 3: Gunakan Teorema Pythagoras"
          },
          {
            "kind": "p",
            "text": "Hitung hipotenusanya [[c = \\sqrt{a^2 + b^2}]], lalu pastikan [[a^2 + b^2 = c^2]]."
          },
          {
            "kind": "p",
            "text": "Pemeriksaan penuh dengan [[a = 3]] dan [[b = 4]]: [[c = \\sqrt{9 + 16} = 5]]. Sudut [[A = \\arctan(3/4) \\approx 36.87^\\circ]] dan komplemennya [[B \\approx 53.13^\\circ]] berjumlah 90 derajat. Perbedaan kecil berasal dari pembulatan sudut yang ditampilkan."
          }
        ],
        "h2": "Cara Memeriksa Apakah Sudut yang Dihitung Sudah Benar"
      },
      "arctan-what": {
        "blocks": [
          {
            "kind": "p",
            "text": "Tangen membandingkan kedua kaki segitiga siku-siku. Untuk sudut [[A]], tangen adalah sisi berhadapan dibagi sisi bersebelahan:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Di sini [[\\tan(A)]] adalah tangen dari sudut [[A]], [[a]] adalah sisi berhadapan, dan [[b]] adalah sisi bersebelahan. Tangen menggambarkan seberapa curam segitiga itu: tangen adalah rasio kaki vertikal terhadap kaki horizontal ketika segitiga diletakkan dengan sisi bersebelahan sebagai alasnya."
          },
          {
            "kind": "p",
            "text": "Sebagai contoh, ketika [[a = 3]] dan [[b = 4]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]"
          },
          {
            "kind": "p",
            "text": "Rasio ini tidak memiliki satuan fisik. Meter dibagi meter saling menghapuskan, jadi tidak masalah Anda mengukur dalam meter, kaki, atau sentimeter, rasio 0,75 tetaplah angka murni yang sama."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Invers Tangen?"
          },
          {
            "kind": "p",
            "text": "Tangen biasa berangkat dari sudut dan menghasilkan rasio. Invers tangen berangkat dari rasio dan menghasilkan sudut. Jika [[\\tan(A) = 0.75]], maka [[A = \\arctan(0.75) \\approx 36.87^\\circ]]. Invers tangen membalik hubungan tangen, memulihkan sudut asal dari rasio sisi."
          },
          {
            "kind": "h3",
            "text": "Apakah Arctangent Sama dengan Invers Tangen?"
          },
          {
            "kind": "p",
            "text": "Ya. [[\\arctan(x)]] dan [[\\tan^{-1}(x)]] adalah dua notasi untuk fungsi yang sama. Pangkat [[-1]] bukan berarti kebalikan [[1/\\tan(x)]]. Kebalikan dari tangen adalah kotangen, fungsi yang berbeda."
          },
          {
            "kind": "h3",
            "text": "Memahami SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA adalah jembatan keledai standar: Sinus = Berhadapan / Hipotenusa, Kosinus = Bersebelahan / Hipotenusa, Tangen = Berhadapan / Bersebelahan. Bagian TOA menunjukkan rasio yang tepat untuk kalkulator ini, karena ukuran yang diketahui adalah sisi berhadapan dan sisi bersebelahan."
          },
          {
            "kind": "h3",
            "text": "Mengapa Tangen Tidak Membutuhkan Hipotenusa"
          },
          {
            "kind": "p",
            "text": "Tangen menggunakan kedua kaki yang saling tegak lurus secara langsung, sehingga panjang diagonal tidak relevan untuk perhitungan. Mengetahui kenaikan dan jarak mendatar saja sudah cukup untuk menentukan sudut kemiringan. Mengalikan kedua kaki dengan faktor positif yang sama tidak mengubah rasio, dan karena itu sudutnya juga tidak berubah: segitiga 3-4 dan segitiga 6-8 memiliki sudut 36,87 derajat yang sama."
          }
        ],
        "figcaption": "Cara kerja arctan: bagi sisi berhadapan dengan sisi bersebelahan, lalu terapkan invers tangen untuk memulihkan sudut.",
        "h2": "Apa Itu Tangen dalam Segitiga Siku-Siku?",
        "imgAlt": "Diagram yang menunjukkan langkah-langkah invers tangen: bagi a dengan b, lalu terapkan arctan untuk mendapatkan sudut A"
      }
    },
    "tocHeading": "Isi Panduan Ini",
    "tocItems": {
      "arctan-applications": "Contoh dalam Kehidupan Nyata",
      "arctan-choose": "Memilih Kalkulator yang Tepat",
      "arctan-examples": "Contoh Langkah Demi Langkah",
      "arctan-faq": "Tanya Jawab",
      "arctan-formula": "Cara Kerja Rumus Invers Tangen",
      "arctan-howto": "Cara Menggunakan Kalkulator",
      "arctan-intro": "Cara Mencari Sudut Menggunakan Tangen",
      "arctan-mistakes": "Kesalahan Umum",
      "arctan-ratio": "Pengaruh Rasio terhadap Sudut",
      "arctan-related": "Kalkulator Terkait",
      "arctan-sides": "Memahami Sisi Berhadapan dan Sisi Bersebelahan",
      "arctan-units": "Satuan Sudut dan Ketelitian",
      "arctan-verify": "Memeriksa Jawaban Anda",
      "arctan-what": "Apa Itu Tangen dalam Segitiga Siku-Siku?"
    },
    "faqs": [
      {
        "answer": "Rumus ini menghitung sudut lancip A dari segitiga siku-siku berdasarkan panjang kedua kakinya. Anda membagi sisi berhadapan a dengan sisi bersebelahan b, lalu menerapkan invers tangen pada rasio tersebut. Hasilnya adalah sudut dalam derajat yang tangennya sama dengan a / b.",
        "question": "Apa yang dihitung oleh rumus A = arctan(a / b)?"
      },
      {
        "answer": "Ukur sisi berhadapan dan sisi bersebelahan relatif terhadap sudut target, bagi sisi berhadapan dengan sisi bersebelahan untuk mendapatkan rasio tangen, lalu terapkan arctan. Misalnya, arctan(3 / 4) kira-kira 36,87 derajat.",
        "question": "Bagaimana cara mencari sudut menggunakan invers tangen?"
      },
      {
        "answer": "Tangen didefinisikan sebagai berhadapan dibagi bersebelahan, jadi kedua sisi inilah yang persis dibutuhkan rumus. Keduanya adalah dua kaki segitiga siku-siku, dan bersama-sama keduanya menentukan bentuknya sepenuhnya, dan karena itu menentukan sudutnya.",
        "question": "Mengapa saya membutuhkan sisi berhadapan dan sisi bersebelahan?"
      },
      {
        "answer": "Bisa. Itulah keunggulan utama metode ini. Hipotenusa tidak pernah muncul dalam rumus tangen, sehingga Anda dapat melewatkan pengukuran sisi terpanjang sama sekali dan tetap mendapatkan sudut yang tepat.",
        "question": "Bisakah saya menghitung sudut tanpa mengetahui hipotenusa?"
      },
      {
        "answer": "Tangen berangkat dari sudut dan menghasilkan rasio, misalnya tan(45 derajat) = 1. Invers tangen membaliknya: berangkat dari rasio dan menghasilkan sudut, misalnya arctan(1) = 45 derajat. Kedua fungsi saling membatalkan.",
        "question": "Apa bedanya tangen dan invers tangen?"
      },
      {
        "answer": "Ya. Arctan(x) dan tangen invers(x) adalah dua nama untuk fungsi yang sama. Keduanya bukan berarti kebalikan 1 / tan(x); kebalikan dari tangen adalah kotangen, fungsi yang berbeda.",
        "question": "Apakah arctangent sama dengan tangen invers?"
      },
      {
        "answer": "Bisa, dan ini wajar. Ketika sisi berhadapan lebih panjang dari sisi bersebelahan, rasionya melebihi 1 dan sudutnya lebih dari 45 derajat. Berbeda dengan rasio sinus dan kosinus, tangen tidak memiliki batas atas.",
        "question": "Bisakah rasio tangen lebih dari 1?"
      },
      {
        "answer": "Rasionya 1, dan arctan(1) tepat 45 derajat. Kaki yang sama panjang membentuk segitiga siku-siku sama kaki, sehingga kedua sudut lancipnya sama-sama 45 derajat.",
        "question": "Apa yang terjadi ketika sisi berhadapan dan bersebelahan sama panjang?"
      },
      {
        "answer": "Rasio berhadapan-terhadap-bersebelahan yang lebih besar berarti sudut yang lebih besar. Rasio 0,25 menghasilkan sekitar 14,04 derajat, rasio 1 menghasilkan 45 derajat, dan rasio 4 menghasilkan sekitar 75,96 derajat. Sudut bertambah seiring bertambahnya sisi berhadapan relatif terhadap sisi bersebelahan.",
        "question": "Bagaimana rasio sisi memengaruhi sudut?"
      },
      {
        "answer": "Tiga pemeriksaan bekerja dengan baik. Hitung tan(A) dan pastikan hasilnya sama dengan a / b. Pastikan sudut komplementer B = 90 dikurangi A masuk akal. Atau hitung hipotenusa dengan teorema Pythagoras dan pastikan a kuadrat ditambah b kuadrat sama dengan c kuadrat.",
        "question": "Bagaimana cara memverifikasi sudut yang saya hitung?"
      },
      {
        "answer": "Bisa, ini adalah kasus penggunaan klasik. Kenaikan atap dibagi jarak horizontalnya, kenaikan jalan landai dibagi jarak mendatarnya, atau tinggi tangga dibagi jarak dasarnya semuanya langsung memberikan sisi berhadapan dan sisi bersebelahan, yang persis dibutuhkan kalkulator ini.",
        "question": "Bisakah saya menggunakan kalkulator ini untuk kemiringan atap, kemiringan jalan landai, atau sudut tangga?"
      },
      {
        "answer": "Kemiringan persen adalah 100 kali rasio kenaikan-dibagi-jarak, sedangkan sudutnya adalah arctan dari rasio tersebut. Kemiringan 5 persen berarti rasio 0,05, yaitu sudut sekitar 2,86 derajat, bukan 5 derajat.",
        "question": "Apa bedanya kemiringan persen dengan sudut dalam derajat?"
      }
    ],
    "relatedHeading": "Jelajahi Kalkulator Segitiga Terkait",
    "relatedIntro": "Alat-alat ini mencakup perhitungan yang berdekatan:",
    "relatedItems": [
      "Kalkulator Sudut Segitiga Siku-Siku",
      "Kalkulator Sudut Segitiga Siku-Siku dari Sinus",
      "Kalkulator Sudut Segitiga Siku-Siku dari Kosinus",
      "Kalkulator Sudut Segitiga Siku-Siku yang Hilang",
      "Kalkulator Rasio Tangen",
      "Kalkulator Sisi Segitiga Siku-Siku dari Tangen",
      "Kalkulator Sisi Segitiga Siku-Siku",
      "Kalkulator Segitiga Siku-Siku Khusus"
    ]
  },
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "arctan-intro": "كيفية إيجاد زاوية باستخدام الظل",
      "arctan-sides": "فهم الضلعين المقابل والمجاور",
      "arctan-what": "ما هو الظل في المثلث القائم الزاوية؟",
      "arctan-formula": "كيف تعمل صيغة معكوس الظل",
      "arctan-howto": "كيفية استخدام الحاسبة",
      "arctan-examples": "أمثلة محلولة خطوة بخطوة",
      "arctan-applications": "أمثلة من الحياة الواقعية",
      "arctan-ratio": "كيف تؤثر النسبة في الزاوية",
      "arctan-units": "وحدات الزوايا والدقة",
      "arctan-mistakes": "الأخطاء الشائعة",
      "arctan-verify": "التحقق من إجابتك",
      "arctan-choose": "اختيار الحاسبة المناسبة",
      "arctan-faq": "الأسئلة الشائعة",
      "arctan-related": "حاسبات ذات صلة"
    },
    "sections": {
      "arctan-intro": {
        "h2": "كيفية إيجاد زاوية باستخدام الظل",
        "blocks": [
          {
            "kind": "p",
            "text": "تحسب حاسبة زاوية المثلث القائم الزاوية من الظل زاوية حادة عندما تعرف ضلعي المثلث: الضلع المقابل والضلع المجاور. تقسم الضلع المقابل على الضلع المجاور، ثم تطبق معكوس الظل على تلك النسبة. والنتيجة هي الزاوية بالدرجات."
          },
          {
            "kind": "p",
            "text": "تخيل منحدرًا لكرسي متحرك. يمكنك قياس ارتفاعه ومسافته الأفقية، لكن سطح المنحدر المائل نفسه قد يصعب قياسه. هذان القياسان، الارتفاع العمودي والمسافة الأفقية، هما الضلع المقابل والضلع المجاور. نسبتهما هي كل ما تحتاجه. يحوّل معكوس الظل تلك النسبة مباشرة إلى زاوية الميل، دون الحاجة إلى قياس طول المنحدر على الإطلاق."
          },
          {
            "kind": "p",
            "text": "هنا [[A]] هي الزاوية المطلوبة، و[[a]] هو الضلع المقابل، و[[b]] هو الضلع المجاور. يربط الظل بينهما بالعلاقة [[\\tan(A) = a/b]]، ومعكوس الظل يعكس هذه العلاقة: [[A = \\arctan(a/b)]]. وبما أن الوتر لا يدخل في الصيغة أبدًا، فهذه هي الطريقة الطبيعية كلما كان القياسان المتاحان لديك هما الضلعان."
          }
        ]
      },
      "arctan-sides": {
        "h2": "فهم الضلعين المقابل والمجاور",
        "blocks": [
          {
            "kind": "h3",
            "text": "ما هو المثلث القائم الزاوية؟"
          },
          {
            "kind": "p",
            "text": "المثلث القائم الزاوية له زاوية قياسها 90 درجة بالضبط. أما الزاويتان الأخريان فحادتان، أي أن كلًا منهما أقل من 90 درجة، ومجموعهما دائمًا 90 درجة. شرط الزاوية القائمة هو ما يجعل النسب المثلثية تعمل: فالجيب وجيب التمام والظل معرفة بعلاقات ثابتة بين أضلاع المثلث القائم الزاوية. وبدون الزاوية القائمة، لن تتوافق النسبة [[a/b]] مع زاوية واحدة ثابتة."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المقابل؟"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل هو الضلع الذي يقع مباشرة أمام الزاوية [[A]]. وهو لا يلامس الزاوية أبدًا. عمليًا، يمثل غالبًا ارتفاعًا عموديًا: الارتفاع الذي يصل إليه السلم على الحائط، أو الارتفاع الذي يكتسبه السقف، أو المكوّن العمودي لذراع رافعة. وتسمية «مقابل» تعتمد على الزاوية التي اخترتها مرجعًا. فإذا بدّلت المرجع من [[A]] إلى [[B]]، أصبح الضلع الذي كان مقابلًا مجاورًا."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المجاور؟"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور هو الضلع الذي يلامس الزاوية [[A]] لكنه ليس الوتر. وهو يشكل أحد ضلعي الزاوية. وفي القياسات الميدانية يمثل غالبًا مسافة أفقية: المسافة الأرضية من الحائط إلى قاعدة السلم، أو الامتداد الأفقي للسقف، أو مسافة المنحدر. وهو أحد الضلعين المتعامدين، ويجب ألا يُخلط بالوتر، وهو الضلع المقابل للزاوية القائمة."
          },
          {
            "kind": "h3",
            "text": "ما هو الوتر؟"
          },
          {
            "kind": "p",
            "text": "الوتر، ويُرمز له بـ[[c]]، هو الضلع المقابل لزاوية الـ90 درجة، وهو دائمًا أطول أضلاع المثلث. وحاسبة الظل لا تتطلب طوله. وإذا احتجته يومًا، فإن نظرية فيثاغورس تعطيه من الضلعين: [[c = \\sqrt{a^2 + b^2}]]. لكن لإيجاد الزاوية نفسها، فالوتر معلومة إضافية يمكنك تجاهلها ببساطة."
          },
          {
            "kind": "h3",
            "text": "لماذا تُعد الزاوية المرجعية مهمة؟"
          },
          {
            "kind": "p",
            "text": "يُعرَّف المقابل والمجاور بالنسبة إلى الزاوية المختارة. ففي المثلث نفسه، يؤدي تبديل المرجع من [[A]] إلى [[B]] إلى تبادل دوري الضلعين: الضلع الذي كان مقابلًا يصبح مجاورًا والعكس. وعكس النسبة من [[a/b]] إلى [[b/a]] يحسب بالتالي الزاوية المتممة [[B = 90^\\circ - A]] بدلًا من [[A]]. وتثبيت الزاوية المرجعية طوال الحساب يجنّبك هذا الخلط."
          }
        ],
        "imgAlt": "تشريح المثلث القائم الزاوية يوضح الضلع المقابل a والضلع المجاور b والوتر c لصيغة معكوس الظل",
        "figcaption": "تشريح معكوس الظل: a هو الضلع المقابل أمام الزاوية A، وb هو الضلع المجاور الملامس للزاوية A، وc هو الوتر."
      },
      "arctan-what": {
        "h2": "ما هو الظل في المثلث القائم الزاوية؟",
        "blocks": [
          {
            "kind": "p",
            "text": "يقارن الظل بين ضلعي المثلث القائم الزاوية. فبالنسبة إلى الزاوية [[A]]، هو الضلع المقابل مقسومًا على الضلع المجاور:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "هنا [[\\tan(A)]] هو ظل الزاوية [[A]]، و[[a]] هو الضلع المقابل، و[[b]] هو الضلع المجاور. يصف الظل مدى انحدار المثلث: فهو نسبة الضلع العمودي إلى الضلع الأفقي عندما يجلس المثلث والضلع المجاور قاعدة له."
          },
          {
            "kind": "p",
            "text": "على سبيل المثال، عندما تكون [[a = 3]] و[[b = 4]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]"
          },
          {
            "kind": "p",
            "text": "النسبة لا وحدة فيزيائية لها. فالأمتار مقسومة على الأمتار تتلاشى، لذا سواء قست بالأمتار أو الأقدام أو السنتيمترات، تبقى النسبة 0.75 رقمًا مجردًا نفسه."
          },
          {
            "kind": "h3",
            "text": "ما هو معكوس الظل؟"
          },
          {
            "kind": "p",
            "text": "الظل العادي يبدأ من زاوية وينتج نسبة. أما معكوس الظل فيبدأ من نسبة ويعيد الزاوية. فإذا كان [[\\tan(A) = 0.75]]، فإن [[A = \\arctan(0.75) \\approx 36.87^\\circ]]. يعكس معكوس الظل علاقة الظل، فيستعيد الزاوية الأصلية من نسبة الأضلاع."
          },
          {
            "kind": "h3",
            "text": "هل الأركتانجنت هو نفسه معكوس الظل؟"
          },
          {
            "kind": "p",
            "text": "نعم. [[\\arctan(x)]] و[[\\tan^{-1}(x)]] رمزان لدالة واحدة. الأس [[-1]] لا يعني المقلوب [[1/\\tan(x)]]. مقلوب الظل هو ظل التمام، وهي دالة مختلفة."
          },
          {
            "kind": "h3",
            "text": "فهم SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA هي أداة الحفظ القياسية: الجيب = المقابل / الوتر، وجيب التمام = المجاور / الوتر، والظل = المقابل / المجاور. يحدد الجزء TOA النسبة الصحيحة لهذه الحاسبة، لأن القياسات المعروفة هي الضلعان المقابل والمجاور."
          },
          {
            "kind": "h3",
            "text": "لماذا لا يتطلب الظل الوتر؟"
          },
          {
            "kind": "p",
            "text": "يستخدم الظل الضلعين المتعامدين مباشرة، لذا لا صلة للطول القطري بالحساب. معرفة الارتفاع والمسافة الأفقية تكفي لتحديد زاوية الميل. وضرب الضلعين في العامل الموجب نفسه يترك النسبة، وبالتالي الزاوية، دون تغيير: فمثلث 3-4 ومثلث 6-8 لهما الزاوية نفسها 36.87 درجة."
          }
        ],
        "imgAlt": "مخطط يوضح خطوات معكوس الظل: اقسم a على b ثم طبق معكوس الظل للحصول على الزاوية A",
        "figcaption": "كيف يعمل معكوس الظل: اقسم الضلع المقابل على الضلع المجاور، ثم طبق معكوس الظل لاستعادة الزاوية."
      },
      "arctan-formula": {
        "h2": "كيف تعمل صيغة معكوس الظل",
        "blocks": [
          {
            "kind": "p",
            "text": "نبدأ من تعريف الظل:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "تتيح لك أطوال الأضلاع المعروفة حساب النسبة في الطرف الأيمن. ولاستعادة الزاوية، طبق معكوس الظل على الطرفين:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]"
          },
          {
            "kind": "p",
            "text": "يُطبَّق معكوس الظل على النسبة كاملة لأن النسبة ككل هي ظل الزاوية. ولا يمكنك توزيعه على البسط والمقام."
          },
          {
            "kind": "h3",
            "text": "مثال محلول: الضلع المقابل 3 والضلع المجاور 4"
          },
          {
            "kind": "p",
            "text": "بفرض [[a = 3]] سنتيمترات و[[b = 4]] سنتيمترات:"
          },
          {
            "kind": "p",
            "text": "الخطوة 1: اكتب الصيغة. [[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 2: عوّض القيم. [[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 3: احسب النسبة. [[3/4 = 0.75]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 4: طبق معكوس الظل. [[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "الإجابة النهائية: [[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "الزاوية تساوي تقريبًا 36.87 درجة. وتعكس الخانتان العشريتان التقريب المعتاد لنتيجة غير نسبية، وليست صيغة مغلقة دقيقة."
          }
        ]
      },
      "arctan-howto": {
        "h2": "كيفية استخدام حاسبة زاوية المثلث القائم الزاوية من الظل",
        "blocks": [
          {
            "kind": "p",
            "text": "اتبع هذه الخطوات لمطابقة الواجهة المباشرة:"
          }
        ],
        "steps": [
          "<strong>حدد الزاوية القائمة.</strong> تأكد من أن المثلث له ركن قياسه 90 درجة قبل استخدام أي نسبة مثلثية.",
          "<strong>حدد الزاوية المرجعية A</strong> التي تريد حسابها.",
          "<strong>حدد الضلع المقابل a</strong>، أي الضلع الذي يقع مباشرة أمام الزاوية A.",
          "<strong>حدد الضلع المجاور b</strong>، أي الضلع الذي يلامس الزاوية A وليس الوتر.",
          "<strong>قس طولي الضلعين أو احصل عليهما</strong> باستخدام الوحدة نفسها.",
          "<strong>أدخل طول الضلع المقابل</strong> في الحقل المخصص.",
          "<strong>أدخل طول الضلع المجاور</strong> في حقله.",
          "<strong>اختر وحدات متوافقة</strong> باستخدام منتقيات الوحدات التي توفرها الحاسبة.",
          "<strong>تحقق من أن طولي الضلعين موجبان</strong> وأكبر من الصفر.",
          "<strong>اضغط «احسب الزاوية A»</strong> لتنفيذ الحساب.",
          "<strong>اقرأ الزاوية المحسوبة</strong> بالدرجات.",
          "<strong>تحقق مما إذا كانت النتيجة منطقية</strong> للمثلث: فالنسبة القريبة من 1 ينبغي أن تعطي زاوية قريبة من 45 درجة.",
          "<strong>استخدم «إعادة الضبط»</strong> لمسح المدخلات وبدء حساب جديد."
        ],
        "closingParagraphs": [
          "كل خطوة مهمة لأن التسمية الخاطئة للضلع هي المصدر الأكثر شيوعًا للإجابة الخاطئة. إن تخصيص لحظة للتأكد من أي ضلع هو المقابل وأي ضلع هو المجاور يمنع الخطأ الأكثر تكرارًا."
        ]
      },
      "arctan-examples": {
        "h2": "أمثلة محلولة خطوة بخطوة لإيجاد زاوية باستخدام الظل",
        "blocks": [
          {
            "kind": "p",
            "text": "تبني هذه الأمثلة الأربعة المهارة الأساسية قبل التطبيقات الواقعية. ويتبع كل منها النمط نفسه: اكتب الصيغة، وعوّض، واقسم، وطبق معكوس الظل."
          },
          {
            "kind": "h3",
            "text": "مثال 1: مثلث قائم الزاوية 3-4-5"
          },
          {
            "kind": "p",
            "text": "بفرض الضلع المقابل [[a = 3]] سنتيمترات والضلع المجاور [[b = 4]] سنتيمترات، جد الزاوية [[A]]."
          },
          {
            "kind": "p",
            "text": "الخطوة 1: اكتب الصيغة. [[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 2: عوّض. [[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 3: احسب. [[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "الإجابة النهائية: [[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "الوتر غير مطلوب رغم أن هذا مثلث 3-4-5. فالضلعان وحدهما يحددان الزاوية، ولهذا فإن معكوس الظل هو الخيار الأكفأ هنا."
          },
          {
            "kind": "h3",
            "text": "مثال 2: تساوي الضلعين المقابل والمجاور"
          },
          {
            "kind": "p",
            "text": "بفرض [[a = 5]] أمتار و[[b = 5]] أمتار:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "الضلعان المتساويان ينتجان مثلثًا قائم الزاوية متساوي الساقين، لذا تكون الزاويتان الحادتان 45 درجة بالضبط."
          },
          {
            "kind": "h3",
            "text": "مثال 3: زاوية أقل من 45 درجة"
          },
          {
            "kind": "p",
            "text": "بفرض [[a = 3]] أمتار و[[b = 6]] أمتار:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "الزاوية أقل من 45 درجة لأن الضلع المقابل أقصر من الضلع المجاور. فارتفاع قصير على مسافة طويلة يصنع زاوية ضحلة."
          },
          {
            "kind": "h3",
            "text": "مثال 4: زاوية أكبر من 45 درجة"
          },
          {
            "kind": "p",
            "text": "بفرض [[a = 8]] أقدام و[[b = 4]] أقدام:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "الزاوية تتجاوز 45 درجة لأن الضلع المقابل أطول من الضلع المجاور. فارتفاع شاهق على مسافة قصيرة يصنع زاوية حادة الميل."
          }
        ]
      },
      "arctan-applications": {
        "h2": "أمثلة واقعية لحساب الزوايا باستخدام الظل",
        "blocks": [
          {
            "kind": "p",
            "text": "اثنا عشر مثالًا عمليًا محلولًا بالكامل. في كل منها يُوصف الموقف، ويُحدَّد المثلث، وتُذكر القياسات، وتُسمَّى الأضلاع الصحيحة، وتُكتب الصيغة وتُحسب، ثم تُفسَّر النتيجة مع حدودها العملية."
          },
          {
            "kind": "h3",
            "text": "مثال 5: حساب زاوية ميل السقف"
          },
          {
            "kind": "p",
            "text": "يرتفع سقف 4 أقدام عموديًا على امتداد أفقي قدره 12 قدمًا. جد الزاوية بين ميل السقف والأفقي."
          },
          {
            "kind": "p",
            "text": "المعروف: الارتفاع المقابل [[a = 4]] أقدام، والمسافة المجاورة [[b = 12]] قدمًا. معكوس الظل مناسب لأن القياسين المتعامدين معروفان ولا حاجة لطول الميل."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "يرتفع السقف بنحو 18.43 درجة فوق الأفقي. لاحظ أن ميل السقف المعبر عنه بـ4:12 هو نسبة، وليس زاوية قدرها 4 درجات. وهذه النتيجة الهندسية ليست تقييمًا إنشائيًا."
          },
          {
            "kind": "h3",
            "text": "مثال 6: إيجاد زاوية السلم"
          },
          {
            "kind": "p",
            "text": "يصل سلم إلى ارتفاع 4.5 أمتار على حائط، وقاعدته تبعد مترين عن الحائط. جد الزاوية بين السلم والأرض."
          },
          {
            "kind": "p",
            "text": "المعروف: الارتفاع المقابل [[a = 4.5]] أمتار، والمسافة الأرضية المجاورة [[b = 2]] متر."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "ارتفاع الحائط مقابل للزاوية الأرضية والمسافة الأرضية مجاورة لها. والزاوية المحسوبة وحدها لا تثبت أن وضع السلم آمن."
          },
          {
            "kind": "h3",
            "text": "مثال 7: حساب زاوية ميل منحدر"
          },
          {
            "kind": "p",
            "text": "يرتفع منحدر 0.75 متر على مسافة أفقية قدرها 9 أمتار. جد زاوية الميل."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "الارتفاع العمودي والمسافة الأفقية هما مدخلا الظل الصحيحان. وهذه الزاوية وحدها لا تؤكد سهولة الوصول أو الامتثال لقوانين البناء."
          },
          {
            "kind": "h3",
            "text": "مثال 8: تقدير زاوية الارتفاع إلى شجرة"
          },
          {
            "kind": "p",
            "text": "يقف شخص على بعد 20 مترًا من شجرة. وقمة الشجرة ترتفع 12 مترًا فوق مستوى الرصد. احسب زاوية الارتفاع."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "فرق الارتفاع العمودي هو الضلع المقابل والمسافة الأفقية هي الضلع المجاور. والنتيجة هي الزاوية فوق الأفقي من نقطة الرصد، وليست الارتفاع الكلي للشجرة."
          },
          {
            "kind": "h3",
            "text": "مثال 9: قياس مساحي للارتفاع"
          },
          {
            "kind": "p",
            "text": "يسجل مخطط مساحي مبسط فرقًا عموديًا قدره 7 أمتار ومسافة أفقية قدرها 12 مترًا. احسب زاوية الارتفاع."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "فرق الارتفاع والمسافة الأفقية يشكلان الضلعين المقابل والمجاور. وقد يتطلب المسح الحقيقي تصحيحات لارتفاع الجهاز وتعديلات للتضاريس تتجاوز هذا النموذج المبسط."
          },
          {
            "kind": "h3",
            "text": "مثال 10: إيجاد زاوية دعامة ميكانيكية"
          },
          {
            "kind": "p",
            "text": "لدعامة ميكانيكية ارتفاع عمودي قدره 1.2 متر وامتداد أفقي قدره 3.5 أمتار. احسب الزاوية بالنسبة إلى الأفقي."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "يحوّل معكوس الظل القياسين المتعامدين إلى زاوية دون الحاجة إلى الطول القطري. ولا يثبت الحساب قوة الدعامة أو ملاءمتها."
          },
          {
            "kind": "h3",
            "text": "مثال 11: حساب ميل درج"
          },
          {
            "kind": "p",
            "text": "يرتفع درج مبسط 2.8 متر على امتداد أفقي قدره 4 أمتار. احسب زاوية الميل الإجمالية."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "الارتفاع العمودي الكلي والمسافة الأفقية يحددان الزاوية الإجمالية. وهذا الحساب المبسط لا يتحقق من الامتثال لقوانين البناء أو أبعاد الدرجات الفردية."
          },
          {
            "kind": "h3",
            "text": "مثال 12: إيجاد زاوية سلك شد"
          },
          {
            "kind": "p",
            "text": "يربط سلك شد نقطتين بفصل عمودي قدره 10 أمتار وفصل أفقي قدره 15 مترًا. جد الزاوية بين السلك والأفقي."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "الفصل العمودي مقابل للزاوية والإسقاط الأفقي مجاور لها. ولا يحدد حساب الزاوية شد السلك أو قوة المرساة أو السلامة الإنشائية."
          },
          {
            "kind": "h3",
            "text": "مثال 13: حساب زاوية انحدار طريق"
          },
          {
            "kind": "p",
            "text": "يرتفع طريق 5 أمتار على مسافة أفقية قدرها 100 متر. جد زاوية ميل الطريق."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "نسبة الانحدار المئوية هي [[(5/100) \\times 100 = 5\\%]]. فانحدار 5 بالمئة ليس زاوية 5 درجات؛ فالزاوية هي معكوس ظل النسبة، أي نحو 2.86 درجة."
          },
          {
            "kind": "h3",
            "text": "مثال 14: إيجاد زاوية ذراع رافعة"
          },
          {
            "kind": "p",
            "text": "لذراع رافعة مبسطة ارتفاع عمودي قدره 8 أمتار وإسقاط أفقي قدره 6 أمتار. جد الزاوية بالنسبة إلى الأفقي."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "الإسقاط العمودي مقابل والإسقاط الأفقي مجاور. وهذا لا يحدد سعة الرافعة أو سلامة التشغيل."
          },
          {
            "kind": "h3",
            "text": "مثال 15: حساب ميل مسار مشي جبلي"
          },
          {
            "kind": "p",
            "text": "يرتفع مقطع مستقيم من مسار مشي 80 مترًا على مسافة أفقية قدرها 150 مترًا. جد زاوية الميل."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "يستخدم الحساب الكسب العمودي في الارتفاع ضلعًا مقابلًا والمسافة الأفقية ضلعًا مجاورًا. أما المسارات الحقيقية فيتغير انحدارها بدلًا من أن تشكل ميلًا مستقيمًا واحدًا."
          },
          {
            "kind": "h3",
            "text": "مثال 16: إيجاد زاوية دعامة مظلة"
          },
          {
            "kind": "p",
            "text": "لدعامة مظلة ارتفاع عمودي قدره 1.2 متر وامتداد أفقي قدره 2.4 متر. احسب الزاوية بالنسبة إلى الأفقي."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "تحدد النسبة الزاوية دون الحاجة إلى الطول القطري للدعامة. ولا تثبت النتيجة الملاءمة الإنشائية للدعامة."
          },
          {
            "kind": "h3",
            "text": "مقارنة الأمثلة العملية"
          }
        ],
        "table": {
          "headers": [
            "الموقف",
            "المقابل",
            "المجاور",
            "الصيغة",
            "الزاوية",
            "التفسير"
          ],
          "rows": [
            [
              "ميل السقف",
              "4 أقدام",
              "12 قدمًا",
              "arctan(4/12)",
              "18.43&deg;",
              "ميل سقف معتدل"
            ],
            [
              "السلم",
              "4.5 أمتار",
              "2 متر",
              "arctan(4.5/2)",
              "66.04&deg;",
              "وضع سلم شديد الانحدار"
            ],
            [
              "المنحدر",
              "0.75 متر",
              "9 أمتار",
              "arctan(0.75/9)",
              "4.76&deg;",
              "ميل لطيف"
            ],
            [
              "الارتفاع إلى الشجرة",
              "12 مترًا",
              "20 مترًا",
              "arctan(12/20)",
              "30.96&deg;",
              "زاوية النظر إلى قمة الشجرة"
            ],
            [
              "المسح",
              "7 أمتار",
              "12 مترًا",
              "arctan(7/12)",
              "30.26&deg;",
              "زاوية الارتفاع"
            ],
            [
              "دعامة التقوية",
              "1.2 متر",
              "3.5 أمتار",
              "arctan(1.2/3.5)",
              "18.92&deg;",
              "زاوية دعامة ضحلة"
            ],
            [
              "الدرج",
              "2.8 متر",
              "4 أمتار",
              "arctan(2.8/4)",
              "34.99&deg;",
              "ميل درج نموذجي"
            ],
            [
              "سلك الشد",
              "10 أمتار",
              "15 مترًا",
              "arctan(10/15)",
              "33.69&deg;",
              "زاوية السلك مع الأفقي"
            ],
            [
              "انحدار الطريق",
              "5 أمتار",
              "100 متر",
              "arctan(5/100)",
              "2.86&deg;",
              "طريق بانحدار 5 بالمئة"
            ],
            [
              "ذراع الرافعة",
              "8 أمتار",
              "6 أمتار",
              "arctan(8/6)",
              "53.13&deg;",
              "وضع ذراع مرفوعة"
            ],
            [
              "مسار المشي",
              "80 مترًا",
              "150 مترًا",
              "arctan(80/150)",
              "28.07&deg;",
              "مقطع مسار شديد الانحدار"
            ],
            [
              "دعامة المظلة",
              "1.2 متر",
              "2.4 متر",
              "arctan(1.2/2.4)",
              "26.57&deg;",
              "زاوية قطر الدعامة"
            ]
          ]
        },
        "imgAlt": "أربعة أمثلة عملية لمعكوس الظل: زوايا ميل السقف والسلم والمنحدر والارتفاع إلى الشجرة",
        "figcaption": "أربعة حسابات عملية: سقف 18.43&deg;، سلم 66.04&deg;، منحدر 4.76&deg;، ارتفاع الشجرة 30.96&deg;."
      },
      "arctan-ratio": {
        "h2": "كيف تؤثر نسبة المقابل إلى المجاور في الزاوية",
        "blocks": [
          {
            "kind": "p",
            "text": "تحدد النسبة [[a/b]] الزاوية [[A]]. فالنسبة الصغيرة تنتج زاوية حادة صغيرة، والأضلاع المتساوية تنتج 45 درجة بالضبط، والضلع المقابل الأطول من المجاور ينتج زاوية أكبر من 45 درجة. والنسبة الأكبر من 1 صحيحة تمامًا للظل، وهذا ما يميزه عن الجيب وجيب التمام. والمثلثات المتناسبة تشترك في الزوايا نفسها، وضرب الضلعين في العامل الموجب نفسه يترك الزاوية دون تغيير. وعندما تكبر النسبة كثيرًا، تقترب الزاوية من 90 درجة دون أن تبلغها لأطوال أضلاع موجبة محدودة."
          }
        ],
        "table": {
          "headers": [
            "الضلع المقابل a",
            "الضلع المجاور b",
            "النسبة a/b",
            "الزاوية A"
          ],
          "rows": [
            [
              "1",
              "4",
              "0.25",
              "نحو 14.04&deg;"
            ],
            [
              "1",
              "2",
              "0.5",
              "نحو 26.57&deg;"
            ],
            [
              "1",
              "1",
              "1",
              "45&deg;"
            ],
            [
              "2",
              "1",
              "2",
              "نحو 63.43&deg;"
            ],
            [
              "4",
              "1",
              "4",
              "نحو 75.96&deg;"
            ]
          ]
        },
        "closingParagraph": "النمط واضح: نسبة الأضلاع تحدد شكل المثلث، لا حجمه الإجمالي. ضاعف الضلعين معًا وتبقى الزاوية كما هي بالضبط.",
        "imgAlt": "خمسة مثلثات توضح كيف تغير نسبة الظل الزاوية من 14 إلى 76 درجة",
        "figcaption": "النسبة 0.25 تعطي 14.04&deg;، و0.5 تعطي 26.57&deg;، و1 تعطي 45&deg;، و2 تعطي 63.43&deg;، و4 تعطي 75.96&deg;."
      },
      "arctan-units": {
        "h2": "فهم وحدات الزوايا ودقة القياس",
        "blocks": [
          {
            "kind": "p",
            "text": "تعيد الحاسبة الدرجات. والدرجة هي 1/360 من الدورة الكاملة. أما الراديان فهو وحدة الزاوية البديلة، المعرفة بحيث تساوي الدورة الكاملة [[2\\pi]] راديان. ويمكن لمعكوس الظل أن يعيد أيًا من الوحدتين حسب الحاسبة، لكن هذه الأداة تعرض الدرجات."
          },
          {
            "kind": "p",
            "text": "النسبة [[a/b]] نفسها لا وحدة لها، ويجب أن يستخدم الضلعان وحدات متوافقة. فتحويل القياسين من الأمتار إلى السنتيمترات يضرب البسط والمقام في 100، فتبقى النسبة دون تغيير."
          },
          {
            "kind": "p",
            "text": "لتحويل الراديان إلى درجات: [[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]"
          },
          {
            "kind": "h3",
            "text": "مثال: هل تغير وحدة القياس الزاوية؟"
          },
          {
            "kind": "p",
            "text": "خذ [[a = 3]] أمتار و[[b = 4]] أمتار. والمكافئ بالسنتيمترات هو [[a = 300]] سنتيمترًا و[[b = 400]] سنتيمترًا. وكلاهما يعطي النسبة 0.75 والزاوية نفسها 36.87 درجة. حافظ على دقة كافية في الخطوات الوسيطة وقرّب الزاوية النهائية بما يطابق دقة القياسات الأصلية."
          }
        ]
      },
      "arctan-mistakes": {
        "h2": "الأخطاء الشائعة عند حساب زاوية باستخدام الظل",
        "listItems": [
          "<strong>استخدام الوتر بدلًا من الضلع المجاور.</strong> الصيغة تحتاج الضلع الملامس للزاوية A، لا أطول ضلع. تحقق: هل مقامك أحد الضلعين؟",
          "<strong>تبديل الضلعين المقابل والمجاور.</strong> هذا يحسب الزاوية المتممة بدلًا منها. فإذا توقعت نحو 37 درجة وحصلت على نحو 53، فالضلعان متبادلان.",
          "<strong>عكس النسبة إلى b/a.</strong> [[\\arctan(b/a)]] تعطي [[B]] لا [[A]]. ففي مثلث 3-4، معكوس ظل (4/3) يساوي 53.13 درجة، وهي الزاوية الحادة الأخرى.",
          "<strong>استخدام الظل العادي بدلًا من معكوس الظل.</strong> كتابة tan(0.75) بدلًا من arctan(0.75) تجيب عن سؤال مختلف تمامًا.",
          "<strong>الخلط بين معكوس الظل ومقلوب الظل.</strong> [[\\tan^{-1}(x)]] ليست [[1/\\tan(x)]]. المقلوب هو ظل التمام.",
          "<strong>افتراض أن نسبة الظل يجب أن تكون بين 0 و1.</strong> يمكنها أن تتجاوز 1 بحرية. فنسبة 2 مع زاوية 63.43 درجة صحيحة تمامًا.",
          "<strong>إدخال أطوال أضلاع صفرية أو سالبة.</strong> يجب أن تكون أطوال الأضلاع موجبة. فالمدخلات الصفرية أو السالبة لا معنى هندسيًا لها هنا.",
          "<strong>خلط وحدات قياس غير متوافقة.</strong> الأمتار لضلع والأقدام للآخر تفسد النسبة. حوّل أولًا.",
          "<strong>التقريب المبكر للنسبة.</strong> تقريب 0.6667 إلى 0.67 قبل تطبيق معكوس الظل يزيح الإجابة. حافظ على الدقة الكاملة حتى الخطوة النهائية.",
          "<strong>عرض الراديان بينما الدرجات هي المتوقعة.</strong> معكوس ظل (1) يساوي 45 درجة لكنه 0.785 راديان. تحقق من وضع حاسبتك.",
          "<strong>الخلط بين الزاوية A وزاويتها المتممة B.</strong> تذكر [[A + B = 90^\\circ]]. فإذا بدت الإجابة كأنها الزاوية «الأخرى»، فالنسبة كانت معكوسة.",
          "<strong>التعامل مع نسبة الانحدار المئوية كزاوية بالدرجات.</strong> انحدار 5 بالمئة هو معكوس ظل (0.05)، أي نحو 2.86 درجة، وليس 5 درجات.",
          "<strong>الخلط بين الارتفاع العمودي والمسافة المائلة.</strong> الضلع المقابل هو المكوّن العمودي الصرف، لا الطول على امتداد الميل.",
          "<strong>افتراض أن الزاوية المحسوبة تثبت أن المنشأة آمنة.</strong> الهندسة تصف الشكل فقط. فسلامة السلم وأحمال السقف وامتثال المنحدرات تحتاج فحوصًا هندسية منفصلة."
        ]
      },
      "arctan-verify": {
        "h2": "كيفية التحقق من صحة الزاوية المحسوبة",
        "blocks": [
          {
            "kind": "p",
            "text": "المدخلات الصالحة لمثلث قائم الزاوية غير منحل: يجب أن يكون الضلع المقابل موجبًا، والضلع المجاور موجبًا، ولا يمكن لأي منهما أن يكون صفرًا، ويجب أن يستخدما وحدات متوافقة، وأن تقع الزاوية الناتجة بين 0 و90 درجة حصرًا. وبخلاف الجيب وجيب التمام، لا تُقيَّد نسبة الظل بقيم دون 1، فالضلع المقابل الأطول من المجاور مقبول تمامًا."
          },
          {
            "kind": "h3",
            "text": "الطريقة 1: تحقق من نسبة الظل"
          },
          {
            "kind": "p",
            "text": "تحقق من [[\\tan(A) \\approx a/b]] باستخدام الزاوية غير المقربة متى أمكن. فإذا أعاد ظل إجابتك نسبة المدخلات، فالإجابة متسقة."
          },
          {
            "kind": "h3",
            "text": "الطريقة 2: تحقق من الزاوية المتممة"
          },
          {
            "kind": "p",
            "text": "احسب [[B = 90^\\circ - A]]. يجب أن يكون مجموع الزاويتين الحادتين في المثلث القائم الزاوية 90 درجة، وهذا فحص سريع لكل نتيجة."
          },
          {
            "kind": "h3",
            "text": "الطريقة 3: استخدم نظرية فيثاغورس"
          },
          {
            "kind": "p",
            "text": "احسب الوتر [[c = \\sqrt{a^2 + b^2}]]، ثم تأكد من [[a^2 + b^2 = c^2]]."
          },
          {
            "kind": "p",
            "text": "فحص كامل مع [[a = 3]] و[[b = 4]]: [[c = \\sqrt{9 + 16} = 5]]. والزاوية [[A = \\arctan(3/4) \\approx 36.87^\\circ]] ومتممتها [[B \\approx 53.13^\\circ]] مجموعهما 90 درجة. والفروق الصغيرة ناتجة عن تقريب الزاوية المعروضة."
          }
        ]
      },
      "arctan-choose": {
        "h2": "اختيار حاسبة المثلث القائم الزاوية المناسبة",
        "blocks": [
          {
            "kind": "p",
            "text": "طابق الأداة مع القياسات المتاحة لديك فعلًا:"
          }
        ],
        "listItems": [
          "<strong>حاسبة الزاوية من الظل</strong> (هذه الصفحة): الضلع المقابل [[a]] والضلع المجاور [[b]] معروفان، وتجد الزاوية [[A]]. الأفضل عندما قست الضلعين مباشرة.",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>حاسبة الزاوية من الجيب</strong></a>: الضلع المقابل والوتر معروفان. الأفضل لمسائل الارتفاع التي قيس فيها الطول المائل.",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>حاسبة الزاوية من جيب التمام</strong></a>: الضلع المجاور والوتر معروفان. الأفضل عندما قيس الوتر مباشرة على امتداد ميل.",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\"><strong>حاسبة الزوايا</strong></a>: تساعدك على اختيار الطريقة الصحيحة عندما لا تتأكد من الأضلاع التي لديك.",
          "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\"><strong>حاسبة الزاوية الناقصة</strong></a>: تجد الزاوية المتممة عندما تكون إحدى الزاويتين الحادتين معروفة.",
          "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\"><strong>حاسبة الأضلاع</strong></a>: تجد أطوال الأضلاع الناقصة بدلًا من الزوايا."
        ],
        "closingParagraphs": [
          "تتفق الدوال العكسية الثلاث على المثلث نفسه: ففي مثلث 3-4-5، يعطي كل من arctan(3/4) وarcsin(3/5) وarccos(4/5) النتيجة 36.87 درجة. وإذا اختلفت طريقتان، فأحد الأضلاع مسمّى خطأ."
        ]
      },
      "arctan-conclusion": {
        "h2": "جد أي زاوية من الظل بثقة",
        "blocks": [
          {
            "kind": "p",
            "text": "تحوّل صيغة معكوس الظل قياسين بسيطين للضلعين إلى زاوية دقيقة. قس الضلع المقابل والضلع المجاور، واقسم، وطبق معكوس الظل، وتحقق بالزاوية المتممة أو نظرية فيثاغورس. وسواء كانت المهمة ميل سقف أو انحدار منحدر أو وضع سلم، فالطريقة واحدة: طابق النسبة مع الزاوية، ودع الهندسة تقوم بالباقي."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "ما الذي تحسبه الصيغة A = arctan(a / b)؟",
        "answer": "تحسب الزاوية الحادة A في مثلث قائم الزاوية من طولي الضلعين. اقسم الضلع المقابل a على الضلع المجاور b، ثم طبق معكوس الظل على تلك النسبة. والنتيجة هي الزاوية بالدرجات التي يساوي ظلها a / b."
      },
      {
        "question": "كيف تجد زاوية باستخدام معكوس الظل؟",
        "answer": "قس الضلع المقابل والضلع المجاور بالنسبة إلى زاويتك المستهدفة، واقسم المقابل على المجاور للحصول على نسبة الظل، ثم طبق معكوس الظل. فمثلًا، معكوس ظل (3 / 4) يساوي تقريبًا 36.87 درجة."
      },
      {
        "question": "لماذا أحتاج الضلعين المقابل والمجاور؟",
        "answer": "الظل معرف بأنه المقابل على المجاور، لذا هذان الضلعان هما بالضبط ما تحتاجه الصيغة. وهما ضلعا المثلث القائم الزاوية، ويحددان معًا الشكل بالكامل، وبالتالي الزاوية."
      },
      {
        "question": "هل يمكنني حساب الزاوية دون معرفة الوتر؟",
        "answer": "نعم. وهذه هي الميزة الرئيسية لهذه الطريقة. فالوتر لا يظهر أبدًا في صيغة الظل، لذا يمكنك تخطي قياس أطول ضلع تمامًا ومع ذلك تحصل على الزاوية الدقيقة."
      },
      {
        "question": "ما الفرق بين الظل ومعكوس الظل؟",
        "answer": "الظل يأخذ زاوية ويعيد نسبة، فمثلًا tan(45 درجة) = 1. أما معكوس الظل فيعكس ذلك: يأخذ نسبة ويعيد الزاوية، فمثلًا arctan(1) = 45 درجة. والدالتان تعكسان إحداهما الأخرى."
      },
      {
        "question": "هل الأركتانجنت هو نفسه الظل العكسي؟",
        "answer": "نعم. Arctan(x) والظل العكسي (tan inverse) اسمان للدالة نفسها. ولا يعني أي منهما المقلوب 1 / tan(x)؛ فمقلوب الظل هو ظل التمام، وهي دالة مختلفة."
      },
      {
        "question": "هل يمكن أن تكون نسبة الظل أكبر من 1؟",
        "answer": "نعم، وهذا طبيعي. فعندما يكون الضلع المقابل أطول من المجاور، تتجاوز النسبة 1 وتكون الزاوية أكبر من 45 درجة. وبخلاف نسبتي الجيب وجيب التمام، لا حد أعلى للظل."
      },
      {
        "question": "ماذا يحدث عندما يتساوى الضلعان المقابل والمجاور؟",
        "answer": "تكون النسبة 1، ومعكوس ظل (1) يساوي 45 درجة بالضبط. فالأضلاع المتساوية تشكل مثلثًا قائم الزاوية متساوي الساقين، لذا تكون الزاويتان الحادتان 45 درجة معًا."
      },
      {
        "question": "كيف تؤثر نسبة الأضلاع في الزاوية؟",
        "answer": "النسبة الأكبر للمقابل إلى المجاور تعني زاوية أكبر. فنسبة 0.25 تعطي نحو 14.04 درجة، ونسبة 1 تعطي 45 درجة، ونسبة 4 تعطي نحو 75.96 درجة. وتكبر الزاوية كلما كبر الضلع المقابل بالنسبة إلى المجاور."
      },
      {
        "question": "كيف يمكنني التحقق من الزاوية المحسوبة؟",
        "answer": "ثلاثة فحوص تنفع جيدًا. احسب tan(A) وتأكد من أنه يساوي a / b. تأكد من أن الزاوية المتممة B = 90 ناقص A منطقية. أو احسب الوتر بنظرية فيثاغورس وتأكد من أن a تربيع زائد b تربيع يساوي c تربيع."
      },
      {
        "question": "هل يمكنني استخدام هذه الحاسبة لميل السقف أو انحدار المنحدر أو زوايا السلم؟",
        "answer": "نعم، فهذه استخدامات كلاسيكية. فارتفاع السقف على امتداده الأفقي، أو ارتفاع المنحدر على مسافته، أو ارتفاع السلم على مسافة قاعدته، كلها تعطيك الضلعين المقابل والمجاور مباشرة، وهو بالضبط ما تحتاجه هذه الحاسبة."
      },
      {
        "question": "ما الفرق بين نسبة الانحدار المئوية والزاوية بالدرجات؟",
        "answer": "نسبة الانحدار المئوية هي 100 ضعف نسبة الارتفاع إلى المسافة، بينما الزاوية هي معكوس ظل تلك النسبة. فانحدار 5 بالمئة يعني نسبة 0.05، وهي زاوية نحو 2.86 درجة، وليست 5 درجات."
      }
    ],
    "relatedHeading": "استكشف حاسبات المثلثات ذات الصلة",
    "relatedIntro": "تغطي هذه الأدوات الحسابات المجاورة:",
    "relatedItems": [
      "حاسبة زاوية المثلث القائم الزاوية",
      "حاسبة زاوية المثلث القائم الزاوية من الجيب",
      "حاسبة زاوية المثلث القائم الزاوية من جيب التمام",
      "حاسبة الزاوية الناقصة في المثلث القائم الزاوية",
      "حاسبة نسبة الظل",
      "حاسبة ضلع المثلث القائم الزاوية من الظل",
      "حاسبة أضلاع المثلث القائم الزاوية",
      "حاسبة المثلث القائم الزاوية الخاصة"
    ]
  },
  "bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
      "arctan-intro": "Как да намерим ъгъл с помощта на тангенс",
      "arctan-sides": "Разбиране на срещулежащия и прилежащия катет",
      "arctan-what": "Какво е тангенс в правоъгълен триъгълник?",
      "arctan-formula": "Как работи формулата за обратен тангенс",
      "arctan-howto": "Как да използвате калкулатора",
      "arctan-examples": "Примери стъпка по стъпка",
      "arctan-applications": "Примери от реалния живот",
      "arctan-ratio": "Как отношението влияе на ъгъла",
      "arctan-units": "Единици за ъгли и точност",
      "arctan-mistakes": "Чести грешки",
      "arctan-verify": "Проверка на отговора",
      "arctan-choose": "Избор на подходящ калкулатор",
      "arctan-faq": "Често задавани въпроси",
      "arctan-related": "Свързани калкулатори"
    },
    "sections": {
      "arctan-intro": {
        "h2": "Как да намерим ъгъл с помощта на тангенс",
        "blocks": [
          {
            "kind": "p",
            "text": "Калкулаторът за ъгъл от тангенс в правоъгълен триъгълник намира остър ъгъл, когато са известни двата катета на триъгълника: срещулежащият и прилежащият катет. Той дели срещулежащия катет на прилежащия, след което прилага обратен тангенс върху полученото отношение. Резултатът е ъгълът в градуси."
          },
          {
            "kind": "p",
            "text": "Представете си рампа за инвалидни колички. Можете да измерите колко се издига тя и колко далеч се простира хоризонтално, но самата наклонена повърхност може да е неудобна за измерване. Тези две измервания, вертикалното издигане и хоризонталното разстояние, са срещулежащият и прилежащият катет. Отношението им е всичко, от което се нуждаете. Обратният тангенс превръща това отношение директно в ъгъла на наклона, без изобщо да се налага да измервате дължината на склона."
          },
          {
            "kind": "p",
            "text": "Тук [[A]] е ъгълът, който търсим, [[a]] е срещулежащият катет, а [[b]] е прилежащият катет. Тангенсът ги свързва чрез [[\\tan(A) = a/b]], а обратният тангенс обръща връзката: [[A = \\arctan(a/b)]]. Тъй като хипотенузата изобщо не влиза във формулата, това е естественият метод винаги, когато двата катета са измерванията, с които разполагате."
          }
        ]
      },
      "arctan-sides": {
        "h2": "Разбиране на срещулежащия и прилежащия катет",
        "blocks": [
          {
            "kind": "h3",
            "text": "Какво е правоъгълен триъгълник?"
          },
          {
            "kind": "p",
            "text": "Правоъгълният триъгълник има един ъгъл от точно 90 градуса. Другите два ъгъла са остри, което означава, че всеки е по-малък от 90 градуса, и заедно винаги дават сбор 90 градуса. Условието за прав ъгъл е това, което кара тригонометричните отношения да работят: синус, косинус и тангенс са определени от фиксираните връзки между страните на правоъгълен триъгълник. Без правия ъгъл отношението [[a/b]] не би съответствало на един постоянен ъгъл."
          },
          {
            "kind": "h3",
            "text": "Какво е срещулежащ катет?"
          },
          {
            "kind": "p",
            "text": "Срещулежащият катет е катетът, който лежи точно срещу ъгъл [[A]]. Той никога не докосва самия ъгъл. В практически термини той често представлява вертикално издигане: височината, на която стълба достига по стена, издигането, което набира покрив, или вертикалната съставна на стрела на кран. Означението „срещулежащ“ зависи от това кой ъгъл сте избрали за референтен. Ако смените референтния ъгъл от [[A]] на [[B]], страната, която е била срещулежаща, става прилежаща."
          },
          {
            "kind": "h3",
            "text": "Какво е прилежащ катет?"
          },
          {
            "kind": "p",
            "text": "Прилежащият катет е катетът, който докосва ъгъл [[A]], но не е хипотенузата. Той образува единия край на ъгъла. При измервания на терен той често представлява хоризонтално разстояние: разстоянието по земята от стена до основата на стълба, хоризонталния обхват на покрив или дължината на рампа. Той е единият от двата взаимно перпендикулярни катета и не бива да се бърка с хипотенузата, която е страната срещу правия ъгъл."
          },
          {
            "kind": "h3",
            "text": "Какво е хипотенуза?"
          },
          {
            "kind": "p",
            "text": "Хипотенузата, означена с [[c]], е страната срещу ъгъла от 90 градуса и винаги е най-дългата страна на триъгълника. Калкулаторът за тангенс не изисква нейната дължина. Ако някога ви потрябва, Питагоровата теорема я дава от двата катета: [[c = \\sqrt{a^2 + b^2}]]. Но за самото намиране на ъгъла хипотенузата е излишна информация, която можете просто да пропуснете."
          },
          {
            "kind": "h3",
            "text": "Защо референтният ъгъл има значение"
          },
          {
            "kind": "p",
            "text": "Срещулежащ и прилежащ се определят спрямо избрания ъгъл. В същия триъгълник замяната на референтния ъгъл от [[A]] с [[B]] разменя ролите на двата катета: страната, която е била срещулежаща, става прилежаща и обратно. Обръщането на отношението от [[a/b]] на [[b/a]] следователно изчислява допълващия ъгъл [[B = 90^\\circ - A]], а не [[A]]. Поддържането на един и същ референтен ъгъл през цялото изчисление избягва това объркване."
          }
        ],
        "imgAlt": "Анатомия на правоъгълен триъгълник, показваща срещулежащия катет a, прилежащия катет b и хипотенузата c за формулата с арктангенс",
        "figcaption": "Анатомия за арктангенс: a е срещулежащият катет срещу ъгъл A, b е прилежащият катет, който докосва ъгъл A, c е хипотенузата."
      },
      "arctan-what": {
        "h2": "Какво е тангенс в правоъгълен триъгълник?",
        "blocks": [
          {
            "kind": "p",
            "text": "Тангенсът сравнява двата катета на правоъгълен триъгълник. За ъгъл [[A]] той е срещулежащият катет, разделен на прилежащия катет:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Тук [[\\tan(A)]] е тангенсът на ъгъл [[A]], [[a]] е срещулежащият катет, а [[b]] е прилежащият катет. Тангенсът описва колко стръмен е триъгълникът: това е отношението на вертикалния катет към хоризонталния катет, когато триъгълникът е поставен с прилежащия катет като основа."
          },
          {
            "kind": "p",
            "text": "Например, когато [[a = 3]] и [[b = 4]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]"
          },
          {
            "kind": "p",
            "text": "Отношението няма физическа мерна единица. Метри, разделени на метри, се съкращават, така че независимо дали сте мерили в метри, футове или сантиметри, отношението 0.75 е едно и също чисто число."
          },
          {
            "kind": "h3",
            "text": "Какво е обратен тангенс?"
          },
          {
            "kind": "p",
            "text": "Обикновеният тангенс започва с ъгъл и дава отношение. Обратният тангенс започва с отношение и връща ъгъла. Ако [[\\tan(A) = 0.75]], то [[A = \\arctan(0.75) \\approx 36.87^\\circ]]. Обратният тангенс обръща връзката на тангенса, възстановявайки първоначалния ъгъл от отношението на страните."
          },
          {
            "kind": "h3",
            "text": "Арктангенсът същото ли е като обратния тангенс?"
          },
          {
            "kind": "p",
            "text": "Да. [[\\arctan(x)]] и [[\\tan^{-1}(x)]] са две означения за една и съща функция. Горният индекс [[-1]] не означава реципрочната стойност [[1/\\tan(x)]]. Реципрочната стойност на тангенса е котангенсът, отделна функция."
          },
          {
            "kind": "h3",
            "text": "Разбиране на SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA е стандартната помощ за запомняне: синус = срещулежащ катет / хипотенуза, косинус = прилежащ катет / хипотенуза, тангенс = срещулежащ катет / прилежащ катет. Частта TOA определя правилното отношение за този калкулатор, тъй като известните измервания са срещулежащият и прилежащият катет."
          },
          {
            "kind": "h3",
            "text": "Защо тангенсът не изисква хипотенузата"
          },
          {
            "kind": "p",
            "text": "Тангенсът използва двата взаимно перпендикулярни катета директно, така че дължината на диагонала е без значение за изчислението. Познаването на издигането и разстоянието е достатъчно, за да се определи ъгълът на наклона. Умножаването на двата катета с един и същ положителен множител оставя отношението, а следователно и ъгъла, непроменени: триъгълник 3-4 и триъгълник 6-8 имат един и същ ъгъл от 36.87 градуса."
          }
        ],
        "imgAlt": "Диаграма, показваща стъпките на обратния тангенс: разделете a на b, след това приложете арктангенс, за да получите ъгъл A",
        "figcaption": "Как работи арктангенсът: разделете срещулежащия катет на прилежащия, след това приложете обратен тангенс, за да възстановите ъгъла."
      },
      "arctan-formula": {
        "h2": "Как работи формулата за обратен тангенс",
        "blocks": [
          {
            "kind": "p",
            "text": "Започнете с определението за тангенс:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Известните дължини на страните ви позволяват да изчислите отношението вдясно. За да възстановите ъгъла, приложете обратен тангенс към двете страни:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]"
          },
          {
            "kind": "p",
            "text": "Обратният тангенс се прилага върху цялото отношение, защото отношението като цяло е тангенсът на ъгъла. Не можете да го разделите между числителя и знаменателя."
          },
          {
            "kind": "h3",
            "text": "Пример с решение: срещулежащ катет 3 и прилежащ катет 4"
          },
          {
            "kind": "p",
            "text": "Дадено [[a = 3]] cm и [[b = 4]] cm:"
          },
          {
            "kind": "p",
            "text": "Стъпка 1: Запишете формулата. [[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 2: Заместете стойностите. [[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 3: Изчислете отношението. [[3/4 = 0.75]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 4: Приложете обратен тангенс. [[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "Краен отговор: [[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Ъгълът е приблизително 36.87 градуса. Двата знака след десетичната запетая отразяват обичайното закръгляне на ирационален резултат, а не точна затворена форма."
          }
        ]
      },
      "arctan-howto": {
        "h2": "Как да използвате калкулатора за ъгъл от тангенс в правоъгълен триъгълник",
        "blocks": [
          {
            "kind": "p",
            "text": "Следвайте тези стъпки, за да съответстват на живия интерфейс:"
          }
        ],
        "steps": [
          "<strong>Определете правия ъгъл.</strong> Убедете се, че триъгълникът има ъгъл от 90 градуса, преди да използвате каквото и да е тригонометрично отношение.",
          "<strong>Определете референтния ъгъл A</strong>, който искате да изчислите.",
          "<strong>Намерете срещулежащия катет a</strong>, катета точно срещу ъгъл A.",
          "<strong>Намерете прилежащия катет b</strong>, катета, който докосва ъгъл A и не е хипотенузата.",
          "<strong>Измерете или вземете дължините и на двата катета</strong>, като използвате една и съща мерна единица.",
          "<strong>Въведете дължината на срещулежащия катет</strong> в съответното поле.",
          "<strong>Въведете дължината на прилежащия катет</strong> в неговото поле.",
          "<strong>Изберете съвместими мерни единици</strong> чрез селекторите за единици, които калкулаторът предоставя.",
          "<strong>Проверете дали дължините на двата катета са положителни</strong> и по-големи от нула.",
          "<strong>Натиснете „Изчисли ъгъл A“</strong>, за да стартирате изчислението.",
          "<strong>Прочетете изчисления ъгъл</strong> в градуси.",
          "<strong>Проверете дали резултатът има смисъл</strong> за триъгълника: отношение близо до 1 трябва да даде ъгъл близо до 45 градуса.",
          "<strong>Използвайте „Нулиране“</strong>, за да изчистите въведеното и да започнете ново изчисление."
        ],
        "closingParagraphs": [
          "Всяка стъпка е важна, защото погрешно означеният катет е най-честата причина за грешен отговор. Моментът, в който се убедите кой катет е срещулежащ и кой е прилежащ, предотвратява най-честата грешка."
        ]
      },
      "arctan-examples": {
        "h2": "Примери стъпка по стъпка за намиране на ъгъл с помощта на тангенс",
        "blocks": [
          {
            "kind": "p",
            "text": "Тези четири примера изграждат основното умение преди практическите приложения. Всеки следва един и същ модел: запишете формулата, заместете, разделете, приложете арктангенс."
          },
          {
            "kind": "h3",
            "text": "Пример 1: Правоъгълен триъгълник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Даден срещулежащ катет [[a = 3]] cm и прилежащ катет [[b = 4]] cm, намерете ъгъл [[A]]."
          },
          {
            "kind": "p",
            "text": "Стъпка 1: Запишете формулата. [[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 2: Заместете. [[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 3: Изчислете. [[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "Краен отговор: [[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Хипотенузата не е необходима, въпреки че това е триъгълник 3-4-5. Двата катета сами определят ъгъла и именно затова арктангенсът е ефективният избор тук."
          },
          {
            "kind": "h3",
            "text": "Пример 2: Равни срещулежащ и прилежащ катет"
          },
          {
            "kind": "p",
            "text": "Дадено [[a = 5]] m и [[b = 5]] m:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Равните катети образуват равнобедрен правоъгълен триъгълник, така че двата остри ъгъла са точно по 45 градуса."
          },
          {
            "kind": "h3",
            "text": "Пример 3: Ъгъл под 45 градуса"
          },
          {
            "kind": "p",
            "text": "Дадено [[a = 3]] m и [[b = 6]] m:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Ъгълът е по-малък от 45 градуса, защото срещулежащият катет е по-къс от прилежащия. Късо издигане върху дълго разстояние дава полегат ъгъл."
          },
          {
            "kind": "h3",
            "text": "Пример 4: Ъгъл над 45 градуса"
          },
          {
            "kind": "p",
            "text": "Дадено [[a = 8]] ft и [[b = 4]] ft:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Ъгълът надвишава 45 градуса, защото срещулежащият катет е по-дълъг от прилежащия. Високо издигане върху късо разстояние дава стръмен ъгъл."
          }
        ]
      },
      "arctan-applications": {
        "h2": "Примери от реалния живот за изчисляване на ъгли с помощта на тангенс",
        "blocks": [
          {
            "kind": "p",
            "text": "Дванадесет напълно решени практически примера. За всеки един ситуацията е описана, триъгълникът е идентифициран, измерванията са посочени, правилните катети са назовани, формулата е записана и изчислена, а резултатът е тълкуван заедно с практическите му ограничения."
          },
          {
            "kind": "h3",
            "text": "Пример 5: Изчисляване на ъгъл на наклон на покрив"
          },
          {
            "kind": "p",
            "text": "Покрив се издига 4 ft вертикално върху хоризонтално разстояние от 12 ft. Намерете ъгъла между наклона на покрива и хоризонталата."
          },
          {
            "kind": "p",
            "text": "Известно: срещулежащо издигане [[a = 4]] ft, прилежащо разстояние [[b = 12]] ft. Обратният тангенс е подходящ, защото двете взаимно перпендикулярни измервания са известни, а дължината на склона не е необходима."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Покривът се издига на около 18.43 градуса над хоризонталата. Обърнете внимание, че наклон на покрива, изразен като 4:12, е отношение, а не ъгъл от 4 градуса. Този геометричен резултат не е конструктивна оценка."
          },
          {
            "kind": "h3",
            "text": "Пример 6: Намиране на ъгъла на стълба"
          },
          {
            "kind": "p",
            "text": "Стълба достига 4.5 m нагоре по стена, а основата ѝ е на 2 m от стената. Намерете ъгъла между стълбата и земята."
          },
          {
            "kind": "p",
            "text": "Известно: срещулежаща височина [[a = 4.5]] m, прилежащо разстояние по земята [[b = 2]] m."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Височината на стената е срещулежаща на ъгъла със земята, а разстоянието по земята е прилежащо. Изчисленият ъгъл сам по себе си не установява дали стълбата е поставена безопасно."
          },
          {
            "kind": "h3",
            "text": "Пример 7: Изчисляване на ъгъл на наклон на рампа"
          },
          {
            "kind": "p",
            "text": "Рампа се издига 0.75 m върху хоризонтално разстояние от 9 m. Намерете ъгъла на наклона."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Вертикалното издигане и хоризонталното разстояние са правилните входни данни за тангенса. Този ъгъл сам по себе си не потвърждава достъпност или съответствие със строителните норми."
          },
          {
            "kind": "h3",
            "text": "Пример 8: Оценка на ъгъла на височина към дърво"
          },
          {
            "kind": "p",
            "text": "Човек стои на 20 m от дърво. Върхът на дървото е на 12 m над нивото на наблюдение. Изчислете ъгъла на височина."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Разликата във вертикалната височина е срещулежащият катет, а хоризонталното разстояние е прилежащият. Резултатът е ъгълът над хоризонталата от точката на наблюдение, а не общата височина на дървото."
          },
          {
            "kind": "h3",
            "text": "Пример 9: Геодезическо измерване на височина"
          },
          {
            "kind": "p",
            "text": "Опростена геодезическа скица отчита разлика във височината от 7 m и хоризонтално разстояние от 12 m. Изчислете ъгъла на височина."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Разликата във височината и хоризонталното разстояние образуват срещулежащия и прилежащия катет. Реалните геодезически измервания може да изискват корекции за височината на инструмента и корекции за терена отвъд този опростен модел."
          },
          {
            "kind": "h3",
            "text": "Пример 10: Намиране на ъгъл на механична опора"
          },
          {
            "kind": "p",
            "text": "Механична опора има вертикално издигане от 1.2 m и хоризонтално разстояние от 3.5 m. Изчислете ъгъла спрямо хоризонталата."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Обратният тангенс превръща двете взаимно перпендикулярни измервания в ъгъл, без да е необходима дължината по диагонала. Изчислението не установява якостта или пригодността на опората."
          },
          {
            "kind": "h3",
            "text": "Пример 11: Изчисляване на наклон на стълбище"
          },
          {
            "kind": "p",
            "text": "Опростено стълбище се издига 2.8 m върху хоризонтално разстояние от 4 m. Изчислете общия ъгъл на наклона."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Общото вертикално издигане и хоризонталното разстояние определят общия ъгъл. Това опростено изчисление не проверява съответствието със строителните норми или размерите на отделните стъпала."
          },
          {
            "kind": "h3",
            "text": "Пример 12: Намиране на ъгъл на опъващо въже"
          },
          {
            "kind": "p",
            "text": "Опъващо въже свързва две точки с вертикално разстояние 10 m и хоризонтално разстояние 15 m. Намерете ъгъла между въжето и хоризонталата."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Вертикалното разстояние е срещулежащо на ъгъла, а хоризонталната проекция е прилежаща. Изчислението на ъгъла не определя опъна на въжето, якостта на котвата или конструктивната безопасност."
          },
          {
            "kind": "h3",
            "text": "Пример 13: Изчисляване на ъгъл на пътен наклон"
          },
          {
            "kind": "p",
            "text": "Път се издига 5 m върху хоризонтално разстояние от 100 m. Намерете ъгъла на наклона на пътя."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Процентният наклон е [[(5/100) \\times 100 = 5\\%]]. Наклон от 5 процента не е ъгъл от 5 градуса; ъгълът е арктангенсът на отношението, около 2.86 градуса."
          },
          {
            "kind": "h3",
            "text": "Пример 14: Намиране на ъгъл на стрела на кран"
          },
          {
            "kind": "p",
            "text": "Опростена стрела има вертикално издигане от 8 m и хоризонтална проекция от 6 m. Намерете ъгъла спрямо хоризонталата."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Вертикалната проекция е срещулежаща, а хоризонталната проекция е прилежаща. Това не определя товароподемността на крана или безопасността на работа."
          },
          {
            "kind": "h3",
            "text": "Пример 15: Изчисляване на наклон на туристическа пътека"
          },
          {
            "kind": "p",
            "text": "Прав участък от туристическа пътека се издига 80 m върху хоризонтално разстояние от 150 m. Намерете ъгъла на наклона."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Изчислението използва вертикалното издигане като срещулежащ катет, а хоризонталното разстояние като прилежащ. Реалните пътеки променят градиента си, вместо да образуват един прав наклон."
          },
          {
            "kind": "h3",
            "text": "Пример 16: Намиране на ъгъл на опора на тента"
          },
          {
            "kind": "p",
            "text": "Опора на тента има вертикално издигане от 1.2 m и хоризонтално разстояние от 2.4 m. Изчислете ъгъла спрямо хоризонталата."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Отношението определя ъгъла, без да е необходима дължината на диагоналната опора. Резултатът не установява конструктивната пригодност на опората."
          },
          {
            "kind": "h3",
            "text": "Сравнение на практическите примери"
          }
        ],
        "table": {
          "headers": [
            "Ситуация",
            "Срещулежащ катет",
            "Прилежащ катет",
            "Формула",
            "Ъгъл",
            "Тълкуване"
          ],
          "rows": [
            [
              "Наклон на покрив",
              "4 ft",
              "12 ft",
              "arctan(4/12)",
              "18.43°",
              "Умерен наклон на покрива"
            ],
            [
              "Стълба",
              "4.5 m",
              "2 m",
              "arctan(4.5/2)",
              "66.04°",
              "Стръмно поставена стълба"
            ],
            [
              "Рампа",
              "0.75 m",
              "9 m",
              "arctan(0.75/9)",
              "4.76°",
              "Полегат наклон"
            ],
            [
              "Височина към дърво",
              "12 m",
              "20 m",
              "arctan(12/20)",
              "30.96°",
              "Ъгъл на гледане към върха на дървото"
            ],
            [
              "Геодезия",
              "7 m",
              "12 m",
              "arctan(7/12)",
              "30.26°",
              "Ъгъл на височина"
            ],
            [
              "Подпорна греда",
              "1.2 m",
              "3.5 m",
              "arctan(1.2/3.5)",
              "18.92°",
              "Полегат ъгъл на гредата"
            ],
            [
              "Стълбище",
              "2.8 m",
              "4 m",
              "arctan(2.8/4)",
              "34.99°",
              "Типичен наклон на стълбище"
            ],
            [
              "Опъващо въже",
              "10 m",
              "15 m",
              "arctan(10/15)",
              "33.69°",
              "Ъгъл на въжето спрямо хоризонталата"
            ],
            [
              "Пътен наклон",
              "5 m",
              "100 m",
              "arctan(5/100)",
              "2.86°",
              "Път с 5% наклон"
            ],
            [
              "Стрела на кран",
              "8 m",
              "6 m",
              "arctan(8/6)",
              "53.13°",
              "Вдигната позиция на стрелата"
            ],
            [
              "Туристическа пътека",
              "80 m",
              "150 m",
              "arctan(80/150)",
              "28.07°",
              "Стръмен участък на пътеката"
            ],
            [
              "Опора на тента",
              "1.2 m",
              "2.4 m",
              "arctan(1.2/2.4)",
              "26.57°",
              "Ъгъл на диагоналната опора"
            ]
          ]
        },
        "imgAlt": "Четири практически примера с арктангенс: ъгли на наклон на покрив, стълба, рампа и височина към дърво",
        "figcaption": "Четири практически изчисления: покрив 18.43°, стълба 66.04°, рампа 4.76°, височина към дърво 30.96°."
      },
      "arctan-ratio": {
        "h2": "Как отношението срещулежащ към прилежащ влияе на ъгъла",
        "blocks": [
          {
            "kind": "p",
            "text": "Отношението [[a/b]] определя ъгъл [[A]]. Малко отношение дава малък остър ъгъл, равните катети дават точно 45 градуса, а срещулежащ катет, по-дълъг от прилежащия, дава ъгъл, по-голям от 45 градуса. Отношение, по-голямо от 1, е напълно валидно за тангенса, което го отличава от синуса и косинуса. Пропорционалните триъгълници имат едни и същи ъгли, а умножаването на двата катета с един и същ положителен множител оставя ъгъла непроменен. Когато отношението нараства изключително много, ъгълът се приближава до 90 градуса, без да ги достига при крайни положителни дължини на катетите."
          },
          {
            "kind": "p",
            "text": "Моделът е ясен: отношението на страните определя формата на триъгълника, а не общия му размер. Удвоете двата катета и ъгълът остава точно същият."
          }
        ],
        "table": {
          "headers": [
            "Срещулежащ a",
            "Прилежащ b",
            "Отношение a/b",
            "Ъгъл A"
          ],
          "rows": [
            [
              "1",
              "4",
              "0.25",
              "Приблизително 14.04°"
            ],
            [
              "1",
              "2",
              "0.5",
              "Приблизително 26.57°"
            ],
            [
              "1",
              "1",
              "1",
              "45°"
            ],
            [
              "2",
              "1",
              "2",
              "Приблизително 63.43°"
            ],
            [
              "4",
              "1",
              "4",
              "Приблизително 75.96°"
            ]
          ]
        },
        "imgAlt": "Пет триъгълника, показващи как отношението на тангенса променя ъгъла от 14 до 76 градуса",
        "figcaption": "Отношение 0.25 дава 14.04°, 0.5 дава 26.57°, 1 дава 45°, 2 дава 63.43°, 4 дава 75.96°."
      },
      "arctan-units": {
        "h2": "Единици за измерване на ъгли и точност",
        "blocks": [
          {
            "kind": "p",
            "text": "Калкулаторът връща градуси. Градусът е 1/360 от пълен оборот. Радианът е алтернативната ъглова единица, определена така, че пълният оборот е равен на [[2\\pi]] радиана. Обратният тангенс може да върне и двете единици в зависимост от калкулатора, но този инструмент отчита градуси."
          },
          {
            "kind": "p",
            "text": "Отношението [[a/b]] само по себе си няма мерна единица, а двата катета трябва да използват съвместими мерни единици. Преобразуването на двете измервания от метри в сантиметри умножава числителя и знаменателя по 100, оставяйки отношението непроменено."
          },
          {
            "kind": "p",
            "text": "За да преобразувате радиани в градуси: [[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]"
          },
          {
            "kind": "h3",
            "text": "Пример: Променя ли мерната единица ъгъла?"
          },
          {
            "kind": "p",
            "text": "Вземете [[a = 3]] m и [[b = 4]] m. Еквивалентът в сантиметри е [[a = 300]] cm и [[b = 400]] cm. И в двата случая се получава отношение 0.75 и един и същ ъгъл от 36.87 градуса. Поддържайте достатъчна точност в междинните стъпки и закръглете крайния ъгъл в съответствие с точността на първоначалните измервания."
          }
        ]
      },
      "arctan-mistakes": {
        "h2": "Чести грешки при изчисляване на ъгъл с помощта на тангенс",
        "listItems": [
          "<strong>Използване на хипотенузата вместо прилежащия катет.</strong> Формулата изисква катета, който докосва ъгъл A, а не най-дългата страна. Проверете: вашият знаменател един от двата катета ли е?",
          "<strong>Размяна на срещулежащия и прилежащия катет.</strong> Това изчислява допълващия ъгъл вместо търсения. Ако сте очаквали около 37 градуса, а сте получили около 53, катетите са разменени.",
          "<strong>Обръщане на отношението в b/a.</strong> [[\\arctan(b/a)]] дава [[B]], а не [[A]]. За триъгълник 3-4 arctan(4/3) е 53.13 градуса, другият остър ъгъл.",
          "<strong>Използване на обикновен тангенс вместо обратен тангенс.</strong> Въвеждането на tan(0.75) вместо arctan(0.75) отговаря на съвсем различен въпрос.",
          "<strong>Бъркане на обратния тангенс с реципрочния тангенс.</strong> [[\\tan^{-1}(x)]] не е [[1/\\tan(x)]]. Реципрочната стойност е котангенсът.",
          "<strong>Предполагане, че отношението на тангенса трябва да е между 0 и 1.</strong> То може свободно да надвишава 1. Отношение 2 с ъгъл 63.43 градуса е напълно валидно.",
          "<strong>Въвеждане на нулеви или отрицателни дължини на катети.</strong> Дължините на страните трябва да са положителни. Нулевите или отрицателните входни данни нямат геометричен смисъл тук.",
          "<strong>Смесване на несъвместими мерни единици.</strong> Метри за единия катет и футове за другия повреждат отношението. Преобразувайте първо.",
          "<strong>Твърде ранно закръгляне на отношението.</strong> Закръглянето на 0.6667 до 0.67 преди прилагането на арктангенс измества отговора. Поддържайте пълна точност до последната стъпка.",
          "<strong>Отчитане в радиани, когато се очакват градуси.</strong> Arctan(1) е 45 градуса, но 0.785 радиана. Проверете режима на калкулатора си.",
          "<strong>Бъркане на ъгъл A с неговия допълващ ъгъл B.</strong> Помнете [[A + B = 90^\\circ]]. Ако отговорът изглежда като „другия“ ъгъл, отношението е било обърнато.",
          "<strong>Третиране на процентния наклон като ъгъл в градуси.</strong> Наклон от 5% е arctan(0.05), около 2.86 градуса, а не 5 градуса.",
          "<strong>Бъркане на вертикалното издигане с разстоянието по склона.</strong> Срещулежащият катет е чистата вертикална съставна, а не дължината по склона.",
          "<strong>Предполагане, че изчисленият ъгъл доказва, че конструкцията е безопасна.</strong> Геометрията описва само формата. Безопасността на стълбата, натоварванията на покрива и съответствието на рампата изискват отделни инженерни проверки."
        ]
      },
      "arctan-verify": {
        "h2": "Как да проверите дали изчисленият ъгъл е правилен",
        "blocks": [
          {
            "kind": "p",
            "text": "Валидни входни данни за неизроден правоъгълен триъгълник: срещулежащият катет трябва да е положителен, прилежащият катет трябва да е положителен, никой от тях не може да е нула, и двата трябва да използват съвместими мерни единици, а полученият ъгъл трябва да е строго между 0 и 90 градуса. За разлика от синуса и косинуса, отношението на тангенса не е ограничено до стойности под 1, така че срещулежащ катет, по-дълъг от прилежащия, е напълно приемлив."
          },
          {
            "kind": "h3",
            "text": "Метод 1: Проверете отношението на тангенса"
          },
          {
            "kind": "p",
            "text": "Проверете [[\\tan(A) \\approx a/b]], като по възможност използвате незакръгления ъгъл. Ако тангенсът на вашия отговор възпроизведе входното отношение, отговорът е съгласуван."
          },
          {
            "kind": "h3",
            "text": "Метод 2: Проверете допълващия ъгъл"
          },
          {
            "kind": "p",
            "text": "Изчислете [[B = 90^\\circ - A]]. Двата остри ъгъла на правоъгълен триъгълник трябва да дават сбор 90 градуса, така че това е бърза проверка за здравия разум при всеки резултат."
          },
          {
            "kind": "h3",
            "text": "Метод 3: Използвайте Питагоровата теорема"
          },
          {
            "kind": "p",
            "text": "Изчислете хипотенузата [[c = \\sqrt{a^2 + b^2}]], след което потвърдете [[a^2 + b^2 = c^2]]."
          },
          {
            "kind": "p",
            "text": "Пълна проверка с [[a = 3]] и [[b = 4]]: [[c = \\sqrt{9 + 16} = 5]]. Ъгълът [[A = \\arctan(3/4) \\approx 36.87^\\circ]] и неговото допълнение [[B \\approx 53.13^\\circ]] дават сбор 90 градуса. Малките разлики идват от закръглянето на показания ъгъл."
          }
        ]
      },
      "arctan-choose": {
        "h2": "Избор на подходящ калкулатор за правоъгълен триъгълник",
        "blocks": [
          {
            "kind": "p",
            "text": "Съобразете инструмента с измерванията, с които действително разполагате:"
          }
        ],
        "listItems": [
          "<strong>Калкулатор за ъгъл от тангенс</strong> (тази страница): известни са срещулежащият катет [[a]] и прилежащият катет [[b]], намира се ъгъл [[A]]. Най-добър, когато и двата катета са измерени директно.",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Калкулатор за ъгъл от синус</strong></a>: известни са срещулежащият катет и хипотенузата. Най-добър за задачи с височина, при които е измерена наклонената дължина.",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Калкулатор за ъгъл от косинус</strong></a>: известни са прилежащият катет и хипотенузата. Най-добър, когато хипотенузата е измерена директно по склона.",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Калкулатор за ъгли</strong></a>: помага ви да изберете правилния метод, когато не сте сигурни с кои страни разполагате.",
          "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Калкулатор за липсващ ъгъл</strong></a>: намира допълващия ъгъл, когато единият остър ъгъл вече е известен.",
          "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\"><strong>Калкулатор за страни</strong></a>: намира липсващите дължини на страните, а не ъглите."
        ],
        "closingParagraphs": [
          "И трите обратни функции дават съгласие за един и същ триъгълник: за триъгълник 3-4-5 arctan(3/4), arcsin(3/5) и arccos(4/5) дават 36.87 градуса. Ако два метода се разминават, някой катет е погрешно означен."
        ]
      },
      "arctan-conclusion": {
        "h2": "Намерете всеки ъгъл от тангенс с увереност",
        "blocks": [
          {
            "kind": "p",
            "text": "Формулата за обратен тангенс превръща две прости измервания на катети в точен ъгъл. Измерете срещулежащия и прилежащия катет, разделете, приложете арктангенс и проверете с допълващия ъгъл или с Питагоровата теорема. Независимо дали задачата е наклон на покрив, наклон на рампа или поставяне на стълба, методът е един и същ: съобразете отношението с ъгъла и оставете геометрията да свърши останалото."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Какво изчислява формулата A = arctan(a / b)?",
        "answer": "Тя изчислява острия ъгъл A на правоъгълен триъгълник от дължините на двата катета. Делите срещулежащия катет a на прилежащия катет b, след което прилагате обратен тангенс върху това отношение. Резултатът е ъгълът в градуси, чийто тангенс е равен на a / b."
      },
      {
        "question": "Как се намира ъгъл с помощта на обратен тангенс?",
        "answer": "Измерете срещулежащия и прилежащия катет спрямо целевия ъгъл, разделете срещулежащия на прилежащия, за да получите отношението на тангенса, след което приложете арктангенс. Например arctan(3 / 4) е приблизително 36.87 градуса."
      },
      {
        "question": "Защо са ми нужни срещулежащият и прилежащият катет?",
        "answer": "Тангенсът е определен като срещулежащ върху прилежащ, така че тези два катета са точно това, от което се нуждае формулата. Те са двата катета на правоъгълния триъгълник и заедно напълно определят формата му, а следователно и ъгъла."
      },
      {
        "question": "Мога ли да изчисля ъгъла, без да знам хипотенузата?",
        "answer": "Да. Това е основното предимство на този метод. Хипотенузата изобщо не се появява във формулата за тангенс, така че можете изцяло да пропуснете измерването на най-дългата страна и пак да получите точния ъгъл."
      },
      {
        "question": "Каква е разликата между тангенс и обратен тангенс?",
        "answer": "Тангенсът взема ъгъл и връща отношение, например tan(45 градуса) = 1. Обратният тангенс обръща това: той взема отношение и връща ъгъла, например arctan(1) = 45 градуса. Двете функции се неутрализират взаимно."
      },
      {
        "question": "Арктангенсът същото ли е като обратния тангенс?",
        "answer": "Да. Arctan(x) и обратен tan(x) са две имена на една и съща функция. Нито едното не означава реципрочната стойност 1 / tan(x); реципрочната стойност на тангенса е котангенсът, различна функция."
      },
      {
        "question": "Може ли отношението на тангенса да е по-голямо от 1?",
        "answer": "Да, и това е нормално. Когато срещулежащият катет е по-дълъг от прилежащия, отношението надвишава 1, а ъгълът е по-голям от 45 градуса. За разлика от отношенията на синус и косинус, тангенсът няма горна граница."
      },
      {
        "question": "Какво се случва, когато срещулежащият и прилежащият катет са равни?",
        "answer": "Отношението е 1, а arctan(1) е точно 45 градуса. Равните катети образуват равнобедрен правоъгълен триъгълник, така че двата остри ъгъла са по 45 градуса."
      },
      {
        "question": "Как отношението на катетите влияе на ъгъла?",
        "answer": "По-голямо отношение на срещулежащия към прилежащия означава по-голям ъгъл. Отношение 0.25 дава около 14.04 градуса, отношение 1 дава 45 градуса, а отношение 4 дава около 75.96 градуса. Ъгълът нараства, когато срещулежащият катет нараства спрямо прилежащия."
      },
      {
        "question": "Как мога да проверя изчисления си ъгъл?",
        "answer": "Три проверки работят добре. Изчислете tan(A) и потвърдете, че е равен на a / b. Убедете се, че допълващият ъгъл B = 90 минус A има смисъл. Или изчислете хипотенузата с Питагоровата теорема и потвърдете, че a на квадрат плюс b на квадрат е равно на c на квадрат."
      },
      {
        "question": "Мога ли да използвам този калкулатор за наклон на покрив, наклон на рампа или ъгли на стълба?",
        "answer": "Да, това са класически приложения. Издигането на покрив върху хоризонталното му разстояние, издигането на рампа върху нейното разстояние или височината на стълба върху разстоянието на основата ѝ дават директно срещулежащия и прилежащия катет, което е точно това, от което се нуждае този калкулатор."
      },
      {
        "question": "Каква е разликата между процентен наклон и ъгъл в градуси?",
        "answer": "Процентният наклон е 100 пъти отношението издигане върху разстояние, докато ъгълът е арктангенсът на това отношение. Наклон от 5 процента означава отношение 0.05, което е ъгъл от около 2.86 градуса, а не 5 градуса."
      }
    ],
    "relatedHeading": "Разгледайте свързаните калкулатори за триъгълници",
    "relatedIntro": "Тези инструменти обхващат съседните изчисления:",
    "relatedItems": [
      "Калкулатор за ъгли на правоъгълен триъгълник",
      "Калкулатор за ъгъл от синус в правоъгълен триъгълник",
      "Калкулатор за ъгъл от косинус в правоъгълен триъгълник",
      "Калкулатор за липсващ ъгъл в правоъгълен триъгълник",
      "Калкулатор за отношение на тангенс",
      "Калкулатор за катет от тангенс в правоъгълен триъгълник",
      "Калкулатор за страни на правоъгълен триъгълник",
      "Калкулатор за специални правоъгълни триъгълници"
    ]
  },
  "tr": {
    "tocHeading": "Bu Rehberde",
    "tocItems": {
      "arctan-intro": "Tanjant ile Açı Nasıl Bulunur",
      "arctan-sides": "Karşı ve Komşu Kenarları Anlama",
      "arctan-what": "Dik Üçgende Tanjant Nedir?",
      "arctan-formula": "Ters Tanjant Formülü Nasıl Çalışır",
      "arctan-howto": "Hesap Makinesi Nasıl Kullanılır",
      "arctan-examples": "Adım Adım Örnekler",
      "arctan-applications": "Gerçek Hayat Örnekleri",
      "arctan-ratio": "Oranın Açıyı Nasıl Etkilediği",
      "arctan-units": "Açı Birimleri ve Hassasiyet",
      "arctan-mistakes": "Sık Yapılan Hatalar",
      "arctan-verify": "Cevabınızı Kontrol Etme",
      "arctan-choose": "Doğru Hesap Makinesini Seçme",
      "arctan-faq": "SSS",
      "arctan-related": "İlgili Hesaplayıcılar"
    },
    "sections": {
      "arctan-intro": {
        "h2": "Tanjant ile Açı Nasıl Bulunur",
        "blocks": [
          {
            "kind": "p",
            "text": "Tanjant ile açı bulan bir dik üçgen hesaplayıcısı, üçgenin iki dik kenarı, yani karşı kenar ile komşu kenar bilindiğinde bir dar açıyı bulur. Karşı kenarı komşu kenara böler, ardından bu orana ters tanjant uygular. Sonuç, derece cinsinden açıdır."
          },
          {
            "kind": "p",
            "text": "Bir tekerlekli sandalye rampası düşünün. Rampanın ne kadar yükseldiğini ve yatayda ne kadar ilerlediğini ölçebilirsiniz, ancak eğimli yüzeyin kendisini ölçmek zor olabilir. Bu iki ölçü, dikey yükselme ile yatay uzunluk, karşı ve komşu kenarlardır. İhtiyacınız olan tek şey bunların oranıdır. Ters tanjant, eğim uzunluğunu hiç ölçmeden bu oranı doğrudan eğim açısına çevirir."
          },
          {
            "kind": "p",
            "text": "Burada [[A]] bulmak istediğiniz açı, [[a]] karşı kenar, [[b]] ise komşu kenardır. Tanjant bunları [[\\\\tan(A) = a/b]] şeklinde ilişkilendirir; ters tanjant ise ilişkiyi tersine çevirir: [[A = \\\\arctan(a/b)]]. Hipotenüs formüle hiç girmediği için, elinizdeki ölçüler iki dik kenar olduğunda bu yöntem doğal seçimdir."
          }
        ]
      },
      "arctan-sides": {
        "h2": "Karşı ve Komşu Kenarları Anlama",
        "blocks": [
          {
            "kind": "h3",
            "text": "Dik Üçgen Nedir?"
          },
          {
            "kind": "p",
            "text": "Bir dik üçgenin bir açısı tam 90 derecedir. Diğer iki açı dar açıdır, yani her biri 90 dereceden küçüktür ve toplamları her zaman 90 derecedir. 90 derecelik açı, trigonometrik oranların çalışmasını sağlayan koşuldur: sinüs, kosinüs ve tanjant, bir dik üçgenin kenarları arasındaki sabit ilişkilerle tanımlanır. Dik açı olmadan [[a/b]] oranı tek bir tutarlı açıya karşılık gelmez."
          },
          {
            "kind": "h3",
            "text": "Karşı Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Karşı kenar, [[A]] açısının tam karşısında kalan dik kenardır. Açıya hiç değmez. Pratikte genellikle dikey yükselmeyi temsil eder: bir merdivenin duvara ulaştığı yükseklik, bir çatının kazandığı yükselme veya bir vinç kolunun dikey bileşeni. “Karşı” etiketi, referans olarak hangi açıyı seçtiğinize bağlıdır. Referansı [[A]] açısından [[B]] açısına değiştirirseniz karşı olan kenar komşu kenar olur."
          },
          {
            "kind": "h3",
            "text": "Komşu Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Komşu kenar, [[A]] açısına değen ancak hipotenüs olmayan dik kenardır. Açının bir kenarını oluşturur. Arazi ölçümlerinde genellikle yatay uzunluğu temsil eder: duvardan merdiven tabanına olan zemin mesafesi, bir çatının yatay açıklığı veya bir rampanın yatay uzunluğu. İki dik kenardan biridir ve dik açının karşısındaki kenar olan hipotenüsle karıştırılmamalıdır."
          },
          {
            "kind": "h3",
            "text": "Hipotenüs Nedir?"
          },
          {
            "kind": "p",
            "text": "Hipotenüs, [[c]] olarak etiketlenir, 90 derecelik açının karşısındaki kenardır ve her zaman üçgenin en uzun kenarıdır. Tanjant hesaplayıcısı onun uzunluğunu istemez. Ona hiç ihtiyacınız olursa Pisagor teoremi onu iki dik kenardan verir: [[c = \\\\sqrt{a^2 + b^2}]]. Ancak açının kendisini bulmak için hipotenüs, gönül rahatlığıyla atlayabileceğiniz fazladan bir bilgidir."
          },
          {
            "kind": "h3",
            "text": "Referans Açısı Neden Önemli?"
          },
          {
            "kind": "p",
            "text": "Karşı ve komşu kenarlar, seçilen açıya göre tanımlanır. Aynı üçgende referansı [[A]] açısından [[B]] açısına çevirmek, iki dik kenarın rollerini değiştirir: karşı olan kenar komşu olur, komşu olan kenar karşı olur. Oranı [[a/b]] oranından [[b/a]] oranına ters çevirmek bu nedenle [[A]] açısı yerine tümler açı olan [[B = 90^\\\\circ - A]] açısını hesaplar. Hesap boyunca referans açıyı sabit tutmak bu karışıklığı önler."
          }
        ],
        "imgAlt": "Arktanjant formülü için dik üçgen anatomisini gösteren diyagram: karşı kenar a, komşu kenar b ve hipotenüs c",
        "figcaption": "Arktanjant için anatomi: a, A açısının karşısındaki karşı kenardır; b, A açısına değen komşu kenardır; c hipotenüstür."
      },
      "arctan-what": {
        "h2": "Dik Üçgende Tanjant Nedir?",
        "blocks": [
          {
            "kind": "p",
            "text": "Tanjant, bir dik üçgenin iki dik kenarını karşılaştırır. [[A]] açısı için bu, karşı kenarın komşu kenara bölünmesidir:"
          },
          {
            "kind": "p",
            "text": "[[[\\\\tan(A) = \\\\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Burada [[\\\\tan(A)]] A açısının tanjantıdır, [[a]] karşı kenar, [[b]] ise komşu kenardır. Tanjant, üçgenin ne kadar dik olduğunu anlatır: üçgen komşu kenar tabanda olacak şekilde oturduğunda dikey kenarın yatay kenara oranıdır."
          },
          {
            "kind": "p",
            "text": "Örneğin [[a = 3]] ve [[b = 4]] olduğunda:"
          },
          {
            "kind": "p",
            "text": "[[[\\\\tan(A) = \\\\frac{3}{4} = 0.75]]]"
          },
          {
            "kind": "p",
            "text": "Oranın fiziksel bir birimi yoktur. Metre bölü metre sadeleşir; ölçümü metreyle, fit ile veya santimetreyle yapmış olun, 0.75 oranı aynı saf sayıdır."
          },
          {
            "kind": "h3",
            "text": "Ters Tanjant Nedir?"
          },
          {
            "kind": "p",
            "text": "Sıradan tanjant bir açıdan başlar ve bir oran üretir. Ters tanjant bir orandan başlar ve açıyı döndürür. Eğer [[\\\\tan(A) = 0.75]] ise [[A = \\\\arctan(0.75) \\\\approx 36.87^\\\\circ]] olur. Ters tanjant, tanjant ilişkisini tersine çevirerek kenar oranından orijinal açıyı geri kazanır."
          },
          {
            "kind": "h3",
            "text": "Arktanjant ile Ters Tanjant Aynı Şey mi?"
          },
          {
            "kind": "p",
            "text": "Evet. [[\\\\arctan(x)]] ve [[\\\\tan^{-1}(x)]] aynı fonksiyonun iki yazılışıdır. [[-1]] üst simgesi, [[1/\\\\tan(x)]] tersi (resiprok) anlamına gelmez. Tanjantın tersi (resiproku) kotanjanttır, bu ayrı bir fonksiyondur."
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA’yı Anlamak"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA standart bir ezber yardımcısıdır: Sinüs = Karşı / Hipotenüs, Kosinüs = Komşu / Hipotenüs, Tanjant = Karşı / Komşu. TOA bölümü, bilinen ölçüler karşı ve komşu kenarlar olduğundan bu hesaplayıcı için doğru oranı gösterir."
          },
          {
            "kind": "h3",
            "text": "Tanjant Neden Hipotenüs Gerektirmez?"
          },
          {
            "kind": "p",
            "text": "Tanjant iki dik kenarı doğrudan kullanır, bu yüzden köşegen uzunluğu hesapla ilgisizdir. Eğim açısını belirlemek için yükselme ve yatay uzunluğu bilmek yeterlidir. Her iki kenarı aynı pozitif sayıyla büyütmek oranı, dolayısıyla açıyı değiştirmez: 3-4 üçgeni ile 6-8 üçgeninin açısı aynıdır, 36.87 derecedir."
          }
        ],
        "imgAlt": "Ters tanjant adımlarını gösteren diyagram: a’yı b’ye bölün, ardından A açısını bulmak için arktanjant uygulayın",
        "figcaption": "Arktanjant nasıl çalışır: karşı kenarı komşu kenara bölün, ardından açıyı geri kazanmak için ters tanjant uygulayın."
      },
      "arctan-formula": {
        "h2": "Ters Tanjant Formülü Nasıl Çalışır",
        "blocks": [
          {
            "kind": "p",
            "text": "Tanjantın tanımıyla başlayın:"
          },
          {
            "kind": "p",
            "text": "[[[\\\\tan(A) = \\\\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Bilinen kenar uzunlukları, sağdaki oranı hesaplamanızı sağlar. Açıyı geri kazanmak için her iki tarafa ters tanjant uygulayın:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{a}{b}\\\\right)]]]"
          },
          {
            "kind": "p",
            "text": "Ters tanjant tüm orana uygulanır, çünkü oran bir bütün olarak açının tanjantıdır. Onu pay ve paydaya bölerek ayıramazsınız."
          },
          {
            "kind": "h3",
            "text": "Çözümlü Örnek: Karşı Kenar 3 ve Komşu Kenar 4"
          },
          {
            "kind": "p",
            "text": "Verilenler: [[a = 3]] cm ve [[b = 4]] cm:"
          },
          {
            "kind": "p",
            "text": "Adım 1: Formülü yazın. [[A = \\\\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "Adım 2: Değerleri yerine koyun. [[A = \\\\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "Adım 3: Oranı hesaplayın. [[3/4 = 0.75]]"
          },
          {
            "kind": "p",
            "text": "Adım 4: Ters tanjant uygulayın. [[A = \\\\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "Son cevap: [[A \\\\approx 36.87^\\\\circ]]"
          },
          {
            "kind": "p",
            "text": "Açı yaklaşık 36.87 derecedir. İki ondalık basamak, kapalı biçimde tam bir ifade değil, irrasyonel bir sonucun olağan yuvarlanmasını yansıtır."
          }
        ]
      },
      "arctan-howto": {
        "h2": "Tanjant ile Dik Üçgen Açısı Hesaplayıcısı Nasıl Kullanılır",
        "blocks": [
          {
            "kind": "p",
            "text": "Canlı arayüzle birebir eşleşmek için bu adımları izleyin:"
          }
        ],
        "steps": [
          "<strong>Dik açıyı belirleyin.</strong> Herhangi bir trigonometrik oran kullanmadan önce üçgenin 90 derecelik bir köşesi olduğunu doğrulayın.",
          "<strong>Referans açıyı, A açısını</strong> belirleyin.",
          "<strong>Karşı kenarı, a kenarını</strong> bulun; bu, A açısının tam karşısındaki dik kenardır.",
          "<strong>Komşu kenarı, b kenarını</strong> bulun; bu, A açısına değen ve hipotenüs olmayan dik kenardır.",
          "<strong>Her iki kenar uzunluğunu ölçün veya edinin</strong>; aynı birimi kullanın.",
          "<strong>Karşı kenar uzunluğunu</strong> ilgili alana girin.",
          "<strong>Komşu kenar uzunluğunu</strong> kendi alanına girin.",
          "<strong>Uyumlu birimleri seçin</strong>; hesaplayıcının sunduğu birim seçicileri kullanın.",
          "<strong>Her iki kenar uzunluğunun da pozitif</strong> ve sıfırdan büyük olduğunu kontrol edin.",
          "<strong>A Açısını Hesapla düğmesine basın</strong>.",
          "<strong>Hesaplanan açıyı</strong> derece cinsinden okuyun.",
          "<strong>Sonucun üçgen için mantıklı olup olmadığını kontrol edin</strong>: 1’e yakın bir oran, 45 dereceye yakın bir açı vermelidir.",
          "<strong>Sıfırla</strong> düğmesiyle girişleri temizleyip yeni bir hesaba başlayın."
        ],
        "closingParagraphs": [
          "Her adım önemlidir, çünkü yanlış etiketlenen bir kenar, hatalı cevabın en yaygın kaynağıdır. Hangi dik kenarın karşı, hangisinin komşu olduğunu doğrulamak için bir an ayırmak en sık yapılan hatayı önler."
        ]
      },
      "arctan-examples": {
        "h2": "Tanjant ile Açı Bulmanın Adım Adım Örnekleri",
        "blocks": [
          {
            "kind": "p",
            "text": "Bu dört örnek, gerçek dünya uygulamalarından önce temel beceriyi geliştirir. Hepsi aynı kalıbı izler: formülü yaz, yerine koy, böl, arktanjant uygula."
          },
          {
            "kind": "h3",
            "text": "Örnek 1: 3-4-5 Dik Üçgeni"
          },
          {
            "kind": "p",
            "text": "Karşı kenar [[a = 3]] cm ve komşu kenar [[b = 4]] cm verildiğinde [[A]] açısını bulun."
          },
          {
            "kind": "p",
            "text": "Adım 1: Formülü yazın. [[A = \\\\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "Adım 2: Yerine koyun. [[A = \\\\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "Adım 3: Hesaplayın. [[A = \\\\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "Son cevap: [[A \\\\approx 36.87^\\\\circ]]"
          },
          {
            "kind": "p",
            "text": "Bu bir 3-4-5 üçgeni olmasına rağmen hipotenüse gerek yoktur. İki dik kenar tek başına açıyı belirler; arktanjantın burada verimli seçim olmasının nedeni budur."
          },
          {
            "kind": "h3",
            "text": "Örnek 2: Eşit Karşı ve Komşu Kenarlar"
          },
          {
            "kind": "p",
            "text": "[[a = 5]] m ve [[b = 5]] m verildiğinde:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{5}{5}\\\\right) = \\\\arctan(1) = 45^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Eşit dik kenarlar ikizkenar bir dik üçgen oluşturur, bu yüzden iki dar açı da tam 45 derecedir."
          },
          {
            "kind": "h3",
            "text": "Örnek 3: 45 Dereceden Küçük Bir Açı"
          },
          {
            "kind": "p",
            "text": "[[a = 3]] m ve [[b = 6]] m verildiğinde:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{3}{6}\\\\right) \\\\approx 26.57^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Açı 45 dereceden küçüktür, çünkü karşı kenar komşu kenardan kısadır. Uzun bir yatay uzunluk üzerindeki kısa bir yükselme, sığ bir açı yapar."
          },
          {
            "kind": "h3",
            "text": "Örnek 4: 45 Dereceden Büyük Bir Açı"
          },
          {
            "kind": "p",
            "text": "[[a = 8]] ft ve [[b = 4]] ft verildiğinde:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{8}{4}\\\\right) \\\\approx 63.43^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Açı 45 dereceyi aşar, çünkü karşı kenar komşu kenardan uzundur. Kısa bir yatay uzunluk üzerindeki yüksek bir yükselme, dik bir açı yapar."
          }
        ]
      },
      "arctan-applications": {
        "h2": "Tanjant ile Açı Hesaplamanın Gerçek Hayat Örnekleri",
        "blocks": [
          {
            "kind": "p",
            "text": "Tamamı çözümlü on iki pratik örnek. Her birinde durum anlatılır, üçgen belirlenir, ölçüler verilir, doğru kenarlar adlandırılır, formül yazılır ve değerlendirilir; sonuç, pratik sınırlarıyla birlikte yorumlanır."
          },
          {
            "kind": "h3",
            "text": "Örnek 5: Çatı Eğimi Açısını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Bir çatı, 12 ft yatay uzunluk üzerinde dikeyde 4 ft yükseliyor. Çatı eğimi ile yatay arasındaki açıyı bulun."
          },
          {
            "kind": "p",
            "text": "Bilinenler: karşı yükselme [[a = 4]] ft, komşu yatay uzunluk [[b = 12]] ft. İki dik ölçüm bilindiği ve eğim uzunluğuna gerek olmadığı için ters tanjant uygundur."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{4}{12}\\\\right) \\\\approx 18.43^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Çatı yatayın yaklaşık 18.43 derece üzerinde yükselir. 4:12 olarak ifade edilen bir çatı eğiminin bir oran olduğunu, 4 derecelik bir açı olmadığını unutmayın. Bu geometrik sonuç bir yapısal değerlendirme değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 6: Merdiven Açısını Bulma"
          },
          {
            "kind": "p",
            "text": "Bir merdiven duvara 4.5 m yükseliyor ve tabanı duvardan 2 m uzakta. Merdiven ile zemin arasındaki açıyı bulun."
          },
          {
            "kind": "p",
            "text": "Bilinenler: karşı yükseklik [[a = 4.5]] m, komşu zemin mesafesi [[b = 2]] m."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{4.5}{2}\\\\right) \\\\approx 66.04^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Duvar yüksekliği zemin açısının karşısındadır, zemin mesafesi ise komşudur. Hesaplanan açı tek başına merdivenin güvenli konumlanıp konumlanmadığını göstermez."
          },
          {
            "kind": "h3",
            "text": "Örnek 7: Rampa Eğimi Açısını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Bir rampa, 9 m yatay uzunluk üzerinde 0.75 m yükseliyor. Eğim açısını bulun."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{0.75}{9}\\\\right) \\\\approx 4.76^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Dikey yükselme ve yatay uzunluk, tanjantın doğru girdileridir. Bu açı tek başına erişilebilirliği veya yapı yönetmeliğine uygunluğu doğrulamaz."
          },
          {
            "kind": "h3",
            "text": "Örnek 8: Ağaca Yükselme Açısını Tahmin Etme"
          },
          {
            "kind": "p",
            "text": "Bir kişi ağaçtan 20 m uzakta duruyor. Ağacın tepesi gözlem seviyesinin 12 m üzerinde. Yükselme açısını hesaplayın."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{12}{20}\\\\right) \\\\approx 30.96^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Dikey yükseklik farkı karşı kenar, yatay mesafe komşu kenardır. Sonuç, gözlem noktasından yatayın üzerindeki açıdır; ağacın toplam yüksekliği değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 9: Bir Arazi Ölçümü Yükselme Ölçümü"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir arazi ölçümü krokisi, 7 m dikey fark ve 12 m yatay mesafe kaydediyor. Yükselme açısını hesaplayın."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{7}{12}\\\\right) \\\\approx 30.26^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Yükselti farkı ve yatay mesafe karşı ve komşu kenarları oluşturur. Gerçek arazi ölçümlerinde bu basitleştirilmiş modelin ötesinde alet yüksekliği düzeltmeleri ve arazi ayarlamaları gerekebilir."
          },
          {
            "kind": "h3",
            "text": "Örnek 10: Mekanik Destek Açısını Bulma"
          },
          {
            "kind": "p",
            "text": "Bir mekanik desteğin dikey yükselmesi 1.2 m, yatay uzunluğu 3.5 m. Yataya göre açıyı hesaplayın."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{1.2}{3.5}\\\\right) \\\\approx 18.92^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Ters tanjant, köşegen uzunluğuna gerek duymadan iki dik ölçümü açıya çevirir. Hesap, desteğin dayanımını veya uygunluğunu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 11: Merdiven Eğimini Hesaplama"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir merdiven, 4 m yatay uzunluk üzerinde 2.8 m yükseliyor. Toplam eğim açısını hesaplayın."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{2.8}{4}\\\\right) \\\\approx 34.99^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Toplam dikey yükselme ve yatay uzunluk toplam açıyı belirler. Bu basitleştirilmiş hesap, yapı yönetmeliğine uygunluğu veya tekil basamak ölçülerini doğrulamaz."
          },
          {
            "kind": "h3",
            "text": "Örnek 12: Gergi Teli Açısını Bulma"
          },
          {
            "kind": "p",
            "text": "Bir gergi teli, 10 m dikey ayrımı ve 15 m yatay ayrımı olan iki noktayı bağlıyor. Tel ile yatay arasındaki açıyı bulun."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{10}{15}\\\\right) \\\\approx 33.69^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Dikey ayrım açının karşısındadır, yatay izdüşüm ise komşudur. Açı hesabı tel gerilimini, ankraj dayanımını veya yapısal güvenliği belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 13: Yol Eğimi Açısını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Bir yol, 100 m yatay mesafede 5 m yükseliyor. Yolun eğim açısını bulun."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{5}{100}\\\\right) \\\\approx 2.86^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Yüzde eğim [[(5/100) \\\\times 100 = 5\\\\%]] olur. %5 eğim 5 derecelik bir açı değildir; açı, oranın arktanjantıdır, yaklaşık 2.86 derecedir."
          },
          {
            "kind": "h3",
            "text": "Örnek 14: Vinç Kolu Açısını Bulma"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir kolun dikey yükselmesi 8 m, yatay izdüşümü 6 m. Yataya göre açıyı bulun."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{8}{6}\\\\right) \\\\approx 53.13^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Dikey izdüşüm karşı, yatay izdüşüm komşudur. Bu, vinç kapasitesini veya işletme güvenliğini belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 15: Yürüyüş Parkuru Eğimini Hesaplama"
          },
          {
            "kind": "p",
            "text": "Bir yürüyüş parkurunun düz bir bölümü, 150 m yatay uzunlukta 80 m yükseliyor. Eğim açısını bulun."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{80}{150}\\\\right) \\\\approx 28.07^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Hesap, dikey yükselti kazancını karşı kenar, yatay mesafeyi komşu kenar olarak kullanır. Gerçek parkurlar tek bir düz eğim oluşturmak yerine değişken eğimlidir."
          },
          {
            "kind": "h3",
            "text": "Örnek 16: Tente Destek Açısını Bulma"
          },
          {
            "kind": "p",
            "text": "Bir tente desteğinin dikey yükselmesi 1.2 m, yatay uzunluğu 2.4 m. Yataya göre açıyı hesaplayın."
          },
          {
            "kind": "p",
            "text": "[[[A = \\\\arctan\\\\left(\\\\frac{1.2}{2.4}\\\\right) \\\\approx 26.57^\\\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Oran, çapraz destek uzunluğuna gerek duymadan açıyı belirler. Sonuç, desteğin yapısal uygunluğunu göstermez."
          },
          {
            "kind": "h3",
            "text": "Pratik Örneklerin Karşılaştırması"
          }
        ],
        "table": {
          "headers": [
            "Durum",
            "Karşı",
            "Komşu",
            "Formül",
            "Açı",
            "Yorum"
          ],
          "rows": [
            [
              "Çatı eğimi",
              "4 ft",
              "12 ft",
              "arctan(4/12)",
              "18.43°",
              "Orta derecede çatı eğimi"
            ],
            [
              "Merdiven",
              "4.5 m",
              "2 m",
              "arctan(4.5/2)",
              "66.04°",
              "Dik merdiven konumu"
            ],
            [
              "Rampa",
              "0.75 m",
              "9 m",
              "arctan(0.75/9)",
              "4.76°",
              "Hafif eğim"
            ],
            [
              "Ağaca yükselme",
              "12 m",
              "20 m",
              "arctan(12/20)",
              "30.96°",
              "Ağaç tepesine bakış açısı"
            ],
            [
              "Arazi ölçümü",
              "7 m",
              "12 m",
              "arctan(7/12)",
              "30.26°",
              "Yükselme açısı"
            ],
            [
              "Destek ayağı",
              "1.2 m",
              "3.5 m",
              "arctan(1.2/3.5)",
              "18.92°",
              "Yatık destek açısı"
            ],
            [
              "Merdiven",
              "2.8 m",
              "4 m",
              "arctan(2.8/4)",
              "34.99°",
              "Tipik merdiven eğimi"
            ],
            [
              "Gergi teli",
              "10 m",
              "15 m",
              "arctan(10/15)",
              "33.69°",
              "Telin yatayla yaptığı açı"
            ],
            [
              "Yol eğimi",
              "5 m",
              "100 m",
              "arctan(5/100)",
              "2.86°",
              "%5 eğimli yol"
            ],
            [
              "Vinç kolu",
              "8 m",
              "6 m",
              "arctan(8/6)",
              "53.13°",
              "Yukarı kaldırılmış kol konumu"
            ],
            [
              "Yürüyüş parkuru",
              "80 m",
              "150 m",
              "arctan(80/150)",
              "28.07°",
              "Dik parkur bölümü"
            ],
            [
              "Tente desteği",
              "1.2 m",
              "2.4 m",
              "arctan(1.2/2.4)",
              "26.57°",
              "Destek çaprazının açısı"
            ]
          ]
        },
        "imgAlt": "Dört pratik arktanjant örneğini gösteren diyagram: çatı eğimi, merdiven, rampa ve ağaca yükselme açıları",
        "figcaption": "Dört pratik hesap: çatı 18.43°, merdiven 66.04°, rampa 4.76°, ağaca yükselme 30.96°."
      },
      "arctan-ratio": {
        "h2": "Karşı-Komşu Oranı Açıyı Nasıl Etkiler",
        "blocks": [
          {
            "kind": "p",
            "text": "[[a/b]] oranı [[A]] açısını belirler. Küçük bir oran küçük bir dar açı üretir, eşit kenarlar tam 45 derece üretir, komşu kenardan uzun bir karşı kenar ise 45 dereceden büyük bir açı üretir. 1’den büyük bir oran tanjant için tamamen geçerlidir; bu onu sinüs ve kosinüsten ayırır. Orantılı üçgenler aynı açıları paylaşır ve her iki dik kenarı aynı pozitif sayıyla büyütmek açıyı değiştirmez. Oran aşırı büyüdükçe açı, sonlu pozitif kenar uzunluklarında ona ulaşmadan 90 dereceye yaklaşır."
          }
        ],
        "table": {
          "headers": [
            "Karşı a",
            "Komşu b",
            "Oran a/b",
            "A Açısı"
          ],
          "rows": [
            [
              "1",
              "4",
              "0.25",
              "Yaklaşık 14.04°"
            ],
            [
              "1",
              "2",
              "0.5",
              "Yaklaşık 26.57°"
            ],
            [
              "1",
              "1",
              "1",
              "45°"
            ],
            [
              "2",
              "1",
              "2",
              "Yaklaşık 63.43°"
            ],
            [
              "4",
              "1",
              "4",
              "Yaklaşık 75.96°"
            ]
          ]
        },
        "closingParagraphs": [
          "Kalıp açıktır: kenar oranı üçgenin şeklini belirler, toplam boyutunu değil. Her iki dik kenarı iki katına çıkarın, açı tam olarak aynı kalır."
        ],
        "imgAlt": "Tanjant oranının açıyı 14 dereceden 76 dereceye nasıl değiştirdiğini gösteren beş üçgen",
        "figcaption": "0.25 oranı 14.04°, 0.5 oranı 26.57°, 1 oranı 45°, 2 oranı 63.43°, 4 oranı 75.96° verir."
      },
      "arctan-units": {
        "h2": "Açı Birimlerini ve Ölçüm Hassasiyetini Anlama",
        "blocks": [
          {
            "kind": "p",
            "text": "Hesaplayıcı derece döndürür. Bir derece, tam dönüşün 1/360’ıdır. Radyan alternatif açı birimidir; tam dönüş [[2\\\\pi]] radyan olacak şekilde tanımlanır. Ters tanjant, hesaplayıcıya bağlı olarak iki birimden birini döndürebilir, ancak bu araç derece bildirir."
          },
          {
            "kind": "p",
            "text": "[[a/b]] oranının kendisinin birimi yoktur ve iki kenar uyumlu birimler kullanmalıdır. Her iki ölçümü de metreden santimetreye çevirmek payı ve paydayı 100 ile çarpar, oranı değiştirmeden bırakır."
          },
          {
            "kind": "p",
            "text": "Radyanı dereceye çevirmek için: [[\\\\text{Degrees} = \\\\text{Radians} \\\\times 180^\\\\circ / \\\\pi]]"
          },
          {
            "kind": "h3",
            "text": "Örnek: Ölçüm Birimi Açıyı Değiştirir mi?"
          },
          {
            "kind": "p",
            "text": "[[a = 3]] m ve [[b = 4]] m alın. Santimetre karşılığı [[a = 300]] cm ve [[b = 400]] cm olur. İkisi de 0.75 oranını ve 36.87 derecelik aynı açıyı verir. Ara adımlarda yeterli hassasiyeti koruyun ve son açıyı orijinal ölçümlerin doğruluğuna uyacak şekilde yuvarlayın."
          }
        ]
      },
      "arctan-mistakes": {
        "h2": "Tanjant ile Açı Hesaplarken Sık Yapılan Hatalar",
        "listItems": [
          "<strong>Komşu kenar yerine hipotenüsü kullanma.</strong> Formül, en uzun kenarı değil, A açısına değen dik kenarı ister. Kontrol edin: paydanız iki dik kenardan biri mi?",
          "<strong>Karşı ve komşu kenarları karıştırma.</strong> Bu, tümler açıyı hesaplar. Yaklaşık 37 derece beklerken yaklaşık 53 bulduysanız dik kenarlar karışmıştır.",
          "<strong>Oranı b/a şeklinde ters çevirme.</strong> [[\\\\arctan(b/a)]] ifadesi [[A]] değil [[B]] açısını verir. 3-4 üçgeninde arctan(4/3), 53.13 derecedir; bu diğer dar açıdır.",
          "<strong>Ters tanjant yerine sıradan tanjant kullanma.</strong> arctan(0.75) yerine tan(0.75) yazmak bambaşka bir soruyu yanıtlar.",
          "<strong>Ters tanjantı tanjantın tersiyle (resiprok) karıştırma.</strong> [[\\\\tan^{-1}(x)]] ifadesi [[1/\\\\tan(x)]] değildir. Tersi (resiprok) kotanjanttır.",
          "<strong>Tanjant oranının 0 ile 1 arasında olması gerektiğini sanma.</strong> Serbestçe 1’i aşabilir. 63.43 derecelik açıyla 2 oranı tamamen geçerlidir.",
          "<strong>Sıfır veya negatif kenar uzunlukları girme.</strong> Kenar uzunlukları pozitif olmalıdır. Sıfır veya negatif girdilerin burada geometrik bir anlamı yoktur.",
          "<strong>Uyumsuz ölçüm birimlerini karıştırma.</strong> Bir dik kenar için metre, diğeri için fit kullanmak oranı bozar. Önce dönüştürün.",
          "<strong>Oranı çok erken yuvarlama.</strong> Arktanjant uygulamadan önce 0.6667’yi 0.67’ye yuvarlamak cevabı kaydırır. Son adıma kadar tam hassasiyeti koruyun.",
          "<strong>Derece beklenirken radyan bildirme.</strong> Arctan(1) 45 derecedir ama 0.785 radyandır. Hesaplayıcı modunuzu kontrol edin.",
          "<strong>A açısını tümler açı B ile karıştırma.</strong> [[A + B = 90^\\\\circ]] olduğunu unutmayın. Cevap “diğer” açıya benziyorsa oran ters çevrilmiştir.",
          "<strong>Yüzde eğimi derece cinsinden açı sanma.</strong> %5 eğim arctan(0.05)’tir, yaklaşık 2.86 derecedir; 5 derece değildir.",
          "<strong>Dikey yükselmeyi eğik mesafeyle karıştırma.</strong> Karşı kenar saf dikey bileşendir, eğim boyunca uzunluk değildir.",
          "<strong>Hesaplanan açının bir yapının güvenli olduğunu kanıtladığını sanma.</strong> Geometri yalnızca şekli anlatır. Merdiven güvenliği, çatı yükleri ve rampa uygunluğu ayrı mühendislik kontrolleri ister."
        ]
      },
      "arctan-verify": {
        "h2": "Hesapladığınız Açının Geçerli Olduğunu Nasıl Kontrol Edersiniz",
        "blocks": [
          {
            "kind": "p",
            "text": "Dejenere olmayan bir dik üçgen için geçerli girdiler: karşı kenar pozitif olmalı, komşu kenar pozitif olmalı, hiçbiri sıfır olamaz, ikisi de uyumlu birimler kullanmalı ve elde edilen açı kesinlikle 0 ile 90 derece arasında olmalıdır. Sinüs ve kosinüsten farklı olarak tanjant oranı 1’in altındaki değerlerle sınırlı değildir, bu yüzden komşu kenardan uzun bir karşı kenar sorun değildir."
          },
          {
            "kind": "h3",
            "text": "Yöntem 1: Tanjant Oranını Kontrol Edin"
          },
          {
            "kind": "p",
            "text": "Mümkün olduğunda yuvarlanmamış açıyı kullanarak [[\\\\tan(A) \\\\approx a/b]] eşitliğini doğrulayın. Cevabınızın tanjantı girdi oranını yeniden üretiyorsa cevap tutarlıdır."
          },
          {
            "kind": "h3",
            "text": "Yöntem 2: Tümler Açıyı Kontrol Edin"
          },
          {
            "kind": "p",
            "text": "[[B = 90^\\\\circ - A]] değerini hesaplayın. Bir dik üçgenin iki dar açısının toplamı 90 derece olmalıdır, bu yüzden bu her sonuç için hızlı bir sağduyu kontrolüdür."
          },
          {
            "kind": "h3",
            "text": "Yöntem 3: Pisagor Teoremini Kullanın"
          },
          {
            "kind": "p",
            "text": "Hipotenüsü [[c = \\\\sqrt{a^2 + b^2}]] ile hesaplayın, ardından [[a^2 + b^2 = c^2]] eşitliğini doğrulayın."
          },
          {
            "kind": "p",
            "text": "[[a = 3]] ve [[b = 4]] ile tam kontrol: [[c = \\\\sqrt{9 + 16} = 5]]. [[A = \\\\arctan(3/4) \\\\approx 36.87^\\\\circ]] açısı ile tümleri [[B \\\\approx 53.13^\\\\circ]] toplamı 90 derecedir. Küçük farklar, görüntülenen açının yuvarlanmasından kaynaklanır."
          }
        ]
      },
      "arctan-choose": {
        "h2": "Doğru Dik Üçgen Hesaplayıcısını Seçme",
        "blocks": [
          {
            "kind": "p",
            "text": "Aracı gerçekten sahip olduğunuz ölçülere uydurun:"
          }
        ],
        "listItems": [
          "<strong>Tanjant ile Açı Hesaplayıcı</strong> (bu sayfa): karşı kenar [[a]] ve komşu kenar [[b]] biliniyor, [[A]] açısını bulur. Her iki dik kenar doğrudan ölçüldüğünde en iyisidir.",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Sinüs ile Açı Hesaplayıcı</strong></a>: karşı kenar ve hipotenüs biliniyor. Eğik uzunluğun ölçüldüğü yükseklik problemleri için en iyisidir.",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Kosinüs ile Açı Hesaplayıcı</strong></a>: komşu kenar ve hipotenüs biliniyor. Hipotenüsün eğim boyunca doğrudan ölçüldüğü durumlar için en iyisidir.",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Açı Hesaplayıcı</strong></a>: hangi kenarlara sahip olduğunuzdan emin değilseniz doğru yöntemi seçmenize yardımcı olur.",
          "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Eksik Açı Hesaplayıcı</strong></a>: bir dar açı zaten biliniyorsa tümler açıyı bulur.",
          "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\"><strong>Kenar Hesaplayıcı</strong></a>: açılar yerine eksik kenar uzunluklarını bulur."
        ],
        "closingParagraphs": [
          "Üç ters fonksiyon da aynı üçgende aynı sonucu verir: 3-4-5 üçgeninde arctan(3/4), arcsin(3/5) ve arccos(4/5) hepsi 36.87 derece verir. İki yöntem anlaşamazsa bir kenar yanlış etiketlenmiştir."
        ]
      },
      "arctan-conclusion": {
        "h2": "Tanjant ile Her Açıyı Güvenle Bulun",
        "blocks": [
          {
            "kind": "p",
            "text": "Ters tanjant formülü, iki basit dik kenar ölçümünü hassas bir açıya dönüştürür. Karşı kenarı ve komşu kenarı ölçün, bölün, arktanjant uygulayın ve tümler açıyla veya Pisagor teoremiyle doğrulayın. Görev bir çatı eğimi, bir rampa eğimi veya bir merdiven konumu olsun, yöntem aynıdır: oranı açıyla eşleştirin ve geometrinin gerisini yapmasına izin verin."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "A = arctan(a / b) formülü neyi hesaplar?",
        "answer": "Bir dik üçgenin iki dik kenarından dar açı A’yı hesaplar. Karşı kenar a’yı komşu kenar b’ye bölersiniz, ardından bu orana ters tanjant uygularsınız. Sonuç, tanjantı a / b’ye eşit olan derece cinsinden açıdır."
      },
      {
        "question": "Ters tanjant kullanarak bir açı nasıl bulunur?",
        "answer": "Hedef açınıza göre karşı kenarı ve komşu kenarı ölçün, tanjant oranını bulmak için karşıyı komşuya bölün, ardından arktanjant uygulayın. Örneğin arctan(3 / 4) yaklaşık 36.87 derecedir."
      },
      {
        "question": "Karşı ve komşu kenarlara neden ihtiyacım var?",
        "answer": "Tanjant, karşı bölü komşu olarak tanımlanır, bu yüzden bu iki kenar formülün tam olarak ihtiyaç duyduğu şeydir. Bunlar dik üçgenin iki dik kenarıdır ve birlikte şekli, dolayısıyla açıyı tam olarak belirler."
      },
      {
        "question": "Hipotenüsü bilmeden açıyı hesaplayabilir miyim?",
        "answer": "Evet. Bu yöntemin başlıca avantajı budur. Hipotenüs tanjant formülünde hiç geçmez, bu yüzden en uzun kenarı ölçmeyi tamamen atlayıp yine de tam açıyı elde edebilirsiniz."
      },
      {
        "question": "Tanjant ile ters tanjant arasındaki fark nedir?",
        "answer": "Tanjant bir açı alır ve bir oran döndürür; örneğin tan(45 derece) = 1. Ters tanjant bunu tersine çevirir: bir oran alır ve açıyı döndürür; örneğin arctan(1) = 45 derece. İki fonksiyon birbirini geri alır."
      },
      {
        "question": "Arktanjant ile ters tanjant aynı şey mi?",
        "answer": "Evet. Arctan(x) ve ters tanjant (tan inverse) aynı fonksiyonun iki adıdır. İkisi de 1 / tan(x) tersi (resiproku) anlamına gelmez; tanjantın tersi (resiproku) kotanjanttır, bu farklı bir fonksiyondur."
      },
      {
        "question": "Tanjant oranı 1’den büyük olabilir mi?",
        "answer": "Evet ve bu normaldir. Karşı kenar komşu kenardan uzun olduğunda oran 1’i aşar ve açı 45 dereceden büyük olur. Sinüs ve kosinüs oranlarından farklı olarak tanjantın üst sınırı yoktur."
      },
      {
        "question": "Karşı ve komşu kenarlar eşit olduğunda ne olur?",
        "answer": "Oran 1 olur ve arctan(1) tam 45 derecedir. Eşit dik kenarlar ikizkenar bir dik üçgen oluşturur, bu yüzden iki dar açı da 45 derecedir."
      },
      {
        "question": "Kenar oranı açıyı nasıl etkiler?",
        "answer": "Karşının komşuya oranı büyüdükçe açı da büyür. 0.25 oranı yaklaşık 14.04 derece, 1 oranı 45 derece, 4 oranı ise yaklaşık 75.96 derece verir. Karşı kenar komşu kenara göre büyüdükçe açı artar."
      },
      {
        "question": "Hesapladığım açıyı nasıl doğrulayabilirim?",
        "answer": "Üç kontrol iyi çalışır. tan(A) değerini hesaplayıp a / b’ye eşit olduğunu doğrulayın. Tümler açı B = 90 eksi A’nın mantıklı olduğunu doğrulayın. Ya da hipotenüsü Pisagor teoremiyle hesaplayıp a kare artı b kare eşittir c kare olduğunu doğrulayın."
      },
      {
        "question": "Bu hesaplayıcıyı çatı eğimi, rampa eğimi veya merdiven açıları için kullanabilir miyim?",
        "answer": "Evet, bunlar klasik kullanım durumlarıdır. Bir çatının yatay uzunluğa göre yükselmesi, bir rampanın yatay uzunluğa göre yükselmesi veya bir merdivenin taban mesafesine göre yüksekliği size karşı ve komşu kenarları doğrudan verir; bu hesaplayıcının tam olarak ihtiyaç duyduğu şey budur."
      },
      {
        "question": "Yüzde eğim ile derece cinsinden açı arasındaki fark nedir?",
        "answer": "Yüzde eğim, yükselmenin yatay uzunluğa oranının 100 katıdır; açı ise bu oranın arktanjantıdır. %5 eğim 0.05 oran anlamına gelir; bu yaklaşık 2.86 derecelik bir açıdır, 5 derece değil."
      }
    ],
    "relatedHeading": "İlgili Üçgen Hesaplayıcılarını Keşfedin",
    "relatedIntro": "Bu araçlar komşu hesaplamaları kapsar:",
    "relatedItems": [
      "Dik Üçgen Açı Hesaplayıcı",
      "Dik Üçgen Sinüs ile Açı Hesaplayıcı",
      "Dik Üçgen Kosinüs ile Açı Hesaplayıcı",
      "Dik Üçgen Eksik Açı Hesaplayıcı",
      "Tanjant Oranı Hesaplayıcı",
      "Dik Üçgen Tanjant ile Kenar Hesaplayıcı",
      "Dik Üçgen Kenar Hesaplayıcı",
      "Özel Dik Üçgen Hesaplayıcı"
    ]
  },
  "sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "arctan-intro": "Hur man hittar en vinkel med tangens",
      "arctan-sides": "Förstå den motstående och den närliggande sidan",
      "arctan-what": "Vad är tangens i en rätvinklig triangel?",
      "arctan-formula": "Hur formeln för invers tangens fungerar",
      "arctan-howto": "Hur man använder räknaren",
      "arctan-examples": "Steg-för-steg-exempel",
      "arctan-applications": "Exempel från verkligheten",
      "arctan-ratio": "Hur förhållandet påverkar vinkeln",
      "arctan-units": "Vinkelenheter och precision",
      "arctan-mistakes": "Vanliga misstag",
      "arctan-verify": "Kontrollera ditt svar",
      "arctan-choose": "Välja rätt räknare",
      "arctan-faq": "Vanliga frågor",
      "arctan-related": "Relaterade räknare"
    },
    "sections": {
      "arctan-intro": {
        "h2": "Hur man hittar en vinkel med tangens",
        "blocks": [
          {
            "kind": "p",
            "text": "En räknare för vinkeln i en rätvinklig triangel från tangens hittar en spetsig vinkel när du känner till triangelns två ben: den motstående sidan och den närliggande sidan. Den dividerar den motstående sidan med den närliggande sidan och tillämpar sedan invers tangens på förhållandet. Resultatet är vinkeln i grader."
          },
          {
            "kind": "p",
            "text": "Föreställ dig en rullstolsramp. Du kan mäta hur högt den stiger och hur långt den sträcker sig horisontellt, men själva lutningsytan kan vara besvärlig att mäta. Dessa två mått, den vertikala höjden och den horisontella sträckan, är den motstående och den närliggande sidan. Deras förhållande är allt du behöver. Invers tangens omvandlar förhållandet direkt till lutningsvinkeln, utan att du behöver mäta lutningens längd över huvud taget."
          },
          {
            "kind": "p",
            "text": "Här är [[A]] vinkeln du söker, [[a]] är den motstående sidan och [[b]] är den närliggande sidan. Tangens kopplar dem som [[\\tan(A) = a/b]], och invers tangens vänder på sambandet: [[A = \\arctan(a/b)]]. Eftersom hypotenusan aldrig förekommer i formeln är detta den naturliga metoden när de två benen är de mått du faktiskt har."
          }
        ]
      },
      "arctan-sides": {
        "h2": "Förstå den motstående och den närliggande sidan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Vad är en rätvinklig triangel?"
          },
          {
            "kind": "p",
            "text": "En rätvinklig triangel har en vinkel på exakt 90 grader. De andra två vinklarna är spetsiga, vilket betyder att var och en är mindre än 90 grader, och tillsammans blir de alltid 90 grader. Villkoret med 90 grader är det som gör att de trigonometriska förhållandena fungerar: sinus, cosinus och tangens definieras av de fasta sambanden mellan sidorna i en rätvinklig triangel. Utan den räta vinkeln skulle förhållandet [[a/b]] inte motsvara en enda entydig vinkel."
          },
          {
            "kind": "h3",
            "text": "Vad är den motstående sidan?"
          },
          {
            "kind": "p",
            "text": "Den motstående sidan är det ben som ligger direkt mitt emot vinkel [[A]]. Det vidrör aldrig själva vinkeln. I praktiken representerar det ofta en vertikal höjd: den höjd en stege når upp längs en vägg, den höjd ett tak stiger, eller den vertikala komponenten av en kranarm. Benämningen motstående beror på vilken vinkel du valt som referens. Om du byter referens från [[A]] till [[B]] blir den sida som var motstående i stället närliggande."
          },
          {
            "kind": "h3",
            "text": "Vad är den närliggande sidan?"
          },
          {
            "kind": "p",
            "text": "Den närliggande sidan är det ben som vidrör vinkel [[A]] men som inte är hypotenusan. Den bildar ena kanten av vinkeln. Vid fältmätningar representerar den ofta en horisontell sträcka: markavståndet från en vägg till en stegfot, ett taks horisontella spännvidd eller en ramps löpsträcka. Det är ett av de två vinkelräta benen, och det får inte förväxlas med hypotenusan, som är sidan mitt emot den räta vinkeln."
          },
          {
            "kind": "h3",
            "text": "Vad är hypotenusan?"
          },
          {
            "kind": "p",
            "text": "Hypotenusan, betecknad [[c]], är sidan mitt emot 90-gradersvinkeln och alltid triangelns längsta sida. Tangensräknaren kräver inte dess längd. Om du någon gång behöver den ger Pythagoras sats den från de två benen: [[c = \\sqrt{a^2 + b^2}]]. Men för att hitta själva vinkeln är hypotenusan överflödig information som du enkelt kan hoppa över."
          },
          {
            "kind": "h3",
            "text": "Varför referensvinkeln spelar roll"
          },
          {
            "kind": "p",
            "text": "Motstående och närliggande definieras i förhållande till den valda vinkeln. I samma triangel byter benen roller om du byter referens från [[A]] till [[B]]: den sida som var motstående blir närliggande och tvärtom. Att vända förhållandet från [[a/b]] till [[b/a]] beräknar därför komplementvinkeln [[B = 90^\\circ - A]] snarare än [[A]]. Att hålla referensvinkeln fast genom hela beräkningen undviker denna förväxling."
          }
        ],
        "imgAlt": "Rätvinklig triangels anatomi som visar motstående sida a, närliggande sida b och hypotenusa c för arcustangensformeln",
        "figcaption": "Anatomi för arcustangens: a är den motstående sidan mitt emot vinkel A, b är den närliggande sidan som vidrör vinkel A, c är hypotenusan."
      },
      "arctan-what": {
        "h2": "Vad är tangens i en rätvinklig triangel?",
        "blocks": [
          {
            "kind": "p",
            "text": "Tangens jämför en rätvinklig triangels två ben. För vinkel [[A]] är det den motstående sidan dividerad med den närliggande sidan:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "Här är [[\\tan(A)]] tangens för vinkel [[A]], [[a]] är den motstående sidan och [[b]] är den närliggande sidan. Tangens beskriver hur brant triangeln är: det är förhållandet mellan det vertikala benet och det horisontella benet när triangeln står med den närliggande sidan som bas."
          },
          {
            "kind": "p",
            "text": "Till exempel, när [[a = 3]] och [[b = 4]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]"
          },
          {
            "kind": "p",
            "text": "Förhållandet har ingen fysikalisk enhet. Meter dividerat med meter tar ut varandra, så oavsett om du mätte i meter, fot eller centimeter är förhållandet 0.75 samma rena tal."
          },
          {
            "kind": "h3",
            "text": "Vad är invers tangens?"
          },
          {
            "kind": "p",
            "text": "Vanlig tangens börjar med en vinkel och ger ett förhållande. Invers tangens börjar med ett förhållande och ger vinkeln. Om [[\\tan(A) = 0.75]] är [[A = \\arctan(0.75) \\approx 36.87^\\circ]]. Invers tangens vänder på tangenssambandet och återställer den ursprungliga vinkeln från sidförhållandet."
          },
          {
            "kind": "h3",
            "text": "Är arcustangens samma sak som invers tangens?"
          },
          {
            "kind": "p",
            "text": "Ja. [[\\arctan(x)]] och [[\\tan^{-1}(x)]] är två beteckningar för samma funktion. Upphöjt [[-1]] betyder inte reciprokvärdet [[1/\\tan(x)]]. Reciprokvärdet av tangens är cotangens, en separat funktion."
          },
          {
            "kind": "h3",
            "text": "Förstå SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA är standardminnesregeln: Sinus = Motstående / Hypotenusa, Cosinus = Närliggande / Hypotenusa, Tangens = Motstående / Närliggande. TOA-delen identifierar rätt förhållande för denna räknare, eftersom de kända måtten är den motstående och den närliggande sidan."
          },
          {
            "kind": "h3",
            "text": "Varför tangens inte kräver hypotenusan"
          },
          {
            "kind": "p",
            "text": "Tangens använder de två vinkelräta benen direkt, så diagonallängden är irrelevant för beräkningen. Att känna till höjd och löpsträcka räcker för att fastställa lutningsvinkeln. Att skala båda benen med samma positiva faktor lämnar förhållandet, och därmed vinkeln, oförändrat: en 3-4-triangel och en 6-8-triangel har samma vinkel på 36.87 grader."
          }
        ],
        "imgAlt": "Diagram som visar stegen för invers tangens: dividera a med b och tillämpa sedan arcustangens för att få vinkel A",
        "figcaption": "Så fungerar arcustangens: dividera den motstående sidan med den närliggande sidan och tillämpa sedan invers tangens för att återställa vinkeln."
      },
      "arctan-formula": {
        "h2": "Hur formeln för invers tangens fungerar",
        "blocks": [
          {
            "kind": "p",
            "text": "Börja med definitionen av tangens:"
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "De kända sidlängderna låter dig beräkna förhållandet på höger sida. För att återställa vinkeln tillämpar du invers tangens på båda sidor:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]"
          },
          {
            "kind": "p",
            "text": "Invers tangens tillämpas på hela förhållandet eftersom förhållandet som helhet är vinkelns tangens. Du kan inte dela upp det över täljaren och nämnaren."
          },
          {
            "kind": "h3",
            "text": "Räknat exempel: Motstående sida 3 och närliggande sida 4"
          },
          {
            "kind": "p",
            "text": "Givet [[a = 3]] cm och [[b = 4]] cm:"
          },
          {
            "kind": "p",
            "text": "Steg 1: Skriv formeln. [[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "Steg 2: Sätt in värdena. [[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "Steg 3: Beräkna förhållandet. [[3/4 = 0.75]]"
          },
          {
            "kind": "p",
            "text": "Steg 4: Tillämpa invers tangens. [[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "Slutsvar: [[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Vinkeln är cirka 36.87 grader. De två decimalerna speglar vanlig avrundning av ett irrationellt resultat, inte en exakt sluten form."
          }
        ]
      },
      "arctan-howto": {
        "h2": "Så här använder du räknaren för rätvinklig triangels vinkel från tangens",
        "blocks": [
          {
            "kind": "p",
            "text": "Följ dessa steg för att matcha det aktiva gränssnittet:"
          }
        ],
        "steps": [
          "<strong>Identifiera den räta vinkeln.</strong> Bekräfta att triangeln har ett 90-graders hörn innan du använder något trigonometriskt förhållande.",
          "<strong>Identifiera referensvinkeln A</strong> som du vill beräkna.",
          "<strong>Lokalisera den motstående sidan a</strong>, benet som ligger direkt mitt emot vinkel A.",
          "<strong>Lokalisera den närliggande sidan b</strong>, benet som vidrör vinkel A och inte är hypotenusan.",
          "<strong>Mät eller ta fram båda sidlängderna</strong> med samma enhet.",
          "<strong>Mata in längden på den motstående sidan</strong> i motsvarande fält.",
          "<strong>Mata in längden på den närliggande sidan</strong> i dess fält.",
          "<strong>Välj kompatibla enheter</strong> med räknarens enhetsväljare.",
          "<strong>Kontrollera att båda sidlängderna är positiva</strong> och större än noll.",
          "<strong>Tryck på Beräkna vinkel A</strong> för att köra beräkningen.",
          "<strong>Läs av den beräknade vinkeln</strong> i grader.",
          "<strong>Kontrollera att resultatet är rimligt</strong> för triangeln: ett förhållande nära 1 bör ge en vinkel nära 45 grader.",
          "<strong>Använd Återställ</strong> för att rensa inmatningarna och starta en ny beräkning."
        ],
        "closingParagraphs": [
          "Varje steg spelar roll eftersom en felaktigt benämnd sida är den vanligaste källan till ett felaktigt svar. Att ta en stund för att bekräfta vilket ben som är motstående och vilket som är närliggande förhindrar det vanligaste felet."
        ]
      },
      "arctan-examples": {
        "h2": "Steg-för-steg-exempel på att hitta en vinkel med tangens",
        "blocks": [
          {
            "kind": "p",
            "text": "Dessa fyra exempel bygger upp grundfärdigheten före tillämpningarna från verkligheten. Varje exempel följer samma mönster: skriv formeln, sätt in, dividera, tillämpa arcustangens."
          },
          {
            "kind": "h3",
            "text": "Exempel 1: En 3-4-5 rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Givet motstående sida [[a = 3]] cm och närliggande sida [[b = 4]] cm, hitta vinkel [[A]]."
          },
          {
            "kind": "p",
            "text": "Steg 1: Skriv formeln. [[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "Steg 2: Sätt in. [[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "Steg 3: Beräkna. [[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "Slutsvar: [[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "Hypotenusan behövs inte trots att detta är en 3-4-5-triangel. De två benen ensamma bestämmer vinkeln, vilket är varför arcustangens är det effektiva valet här."
          },
          {
            "kind": "h3",
            "text": "Exempel 2: Lika motstående och närliggande sidor"
          },
          {
            "kind": "p",
            "text": "Givet [[a = 5]] m och [[b = 5]] m:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Lika ben ger en likbent rätvinklig triangel, så de två spetsiga vinklarna är båda exakt 45 grader."
          },
          {
            "kind": "h3",
            "text": "Exempel 3: En vinkel under 45 grader"
          },
          {
            "kind": "p",
            "text": "Givet [[a = 3]] m och [[b = 6]] m:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Vinkeln är mindre än 45 grader eftersom den motstående sidan är kortare än den närliggande sidan. En kort höjd över en lång löpsträcka ger en flack vinkel."
          },
          {
            "kind": "h3",
            "text": "Exempel 4: En vinkel över 45 grader"
          },
          {
            "kind": "p",
            "text": "Givet [[a = 8]] ft och [[b = 4]] ft:"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Vinkeln överstiger 45 grader eftersom den motstående sidan är längre än den närliggande sidan. En hög höjd över en kort löpsträcka ger en brant vinkel."
          }
        ]
      },
      "arctan-applications": {
        "h2": "Exempel från verkligheten på att beräkna vinklar med tangens",
        "blocks": [
          {
            "kind": "p",
            "text": "Tolv fullständigt uträknade praktiska exempel. För varje exempel beskrivs situationen, triangeln identifieras, måtten anges, rätt sidor benämns, formeln skrivs och utvärderas, och resultatet tolkas med sina praktiska begränsningar."
          },
          {
            "kind": "h3",
            "text": "Exempel 5: Beräkna en taklutningsvinkel"
          },
          {
            "kind": "p",
            "text": "Ett tak stiger 4 ft vertikalt över en horisontell löpsträcka på 12 ft. Hitta vinkeln mellan taklutningen och horisontalplanet."
          },
          {
            "kind": "p",
            "text": "Känt: motstående höjd [[a = 4]] ft, närliggande löpsträcka [[b = 12]] ft. Invers tangens är lämpligt eftersom de två vinkelräta måtten är kända och lutningslängden inte behövs."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Taket stiger med cirka 18.43 grader över horisontalplanet. Observera att en taklutning uttryckt som 4:12 är ett förhållande, inte en vinkel på 4 grader. Detta geometriska resultat är inte en strukturell bedömning."
          },
          {
            "kind": "h3",
            "text": "Exempel 6: Hitta en steges vinkel"
          },
          {
            "kind": "p",
            "text": "En stege når 4.5 m upp längs en vägg, och dess fot står 2 m från väggen. Hitta vinkeln mellan stegen och marken."
          },
          {
            "kind": "p",
            "text": "Känt: motstående höjd [[a = 4.5]] m, närliggande markavstånd [[b = 2]] m."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Vägghöjden är motstående markvinkeln och markavståndet är närliggande. Den beräknade vinkeln ensam fastställer inte om stegen är säkert placerad."
          },
          {
            "kind": "h3",
            "text": "Exempel 7: Beräkna en ramps lutningsvinkel"
          },
          {
            "kind": "p",
            "text": "En ramp stiger 0.75 m över en horisontell löpsträcka på 9 m. Hitta lutningsvinkeln."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala höjden och den horisontella löpsträckan är rätt tangensingångar. Denna vinkel bekräftar inte i sig tillgänglighet eller byggkravsuppfyllelse."
          },
          {
            "kind": "h3",
            "text": "Exempel 8: Uppskatta höjdvinkeln till ett träd"
          },
          {
            "kind": "p",
            "text": "En person står 20 m från ett träd. Trädets topp är 12 m över observationsnivån. Beräkna höjdvinkeln."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala höjdskillnaden är den motstående sidan och det horisontella avståndet är den närliggande sidan. Resultatet är vinkeln över horisontalplanet från observationspunkten, inte trädets totala höjd."
          },
          {
            "kind": "h3",
            "text": "Exempel 9: En lantmäterimätning av höjd"
          },
          {
            "kind": "p",
            "text": "En förenklad lantmäteriskiss visar en vertikal skillnad på 7 m och ett horisontellt avstånd på 12 m. Beräkna höjdvinkeln."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Höjdskillnaden och det horisontella avståndet bildar den motstående och den närliggande sidan. Verklig lantmätning kan kräva korrigeringar för instrumenthöjd och terrängjusteringar utöver denna förenklade modell."
          },
          {
            "kind": "h3",
            "text": "Exempel 10: Hitta en mekanisk stödbens vinkel"
          },
          {
            "kind": "p",
            "text": "Ett mekaniskt stödben har en vertikal höjd på 1.2 m och en horisontell löpsträcka på 3.5 m. Beräkna vinkeln i förhållande till horisontalplanet."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Invers tangens omvandlar de två vinkelräta måtten till en vinkel utan att behöva diagonallängden. Beräkningen fastställer inte stödbenets styrka eller lämplighet."
          },
          {
            "kind": "h3",
            "text": "Exempel 11: Beräkna en trappas lutning"
          },
          {
            "kind": "p",
            "text": "En förenklad trappa stiger 2.8 m över en horisontell löpsträcka på 4 m. Beräkna den totala lutningsvinkeln."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Den totala vertikala höjden och den horisontella löpsträckan bestämmer den totala vinkeln. Denna förenklade beräkning verifierar inte byggkravsuppfyllelse eller enskilda trappstegs mått."
          },
          {
            "kind": "h3",
            "text": "Exempel 12: Hitta en staglinas vinkel"
          },
          {
            "kind": "p",
            "text": "En staglina förbinder två punkter med en vertikal separation på 10 m och en horisontell separation på 15 m. Hitta vinkeln mellan linan och horisontalplanet."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala separationen är motstående vinkeln och den horisontella projektionen är närliggande. Vinkelberäkningen bestämmer inte linspänning, förankringsstyrka eller strukturell säkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 13: Beräkna en väglutnings vinkel"
          },
          {
            "kind": "p",
            "text": "En väg stiger 5 m över ett horisontellt avstånd på 100 m. Hitta vägens lutningsvinkel."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Den procentuella lutningen är [[(5/100) \\times 100 = 5\\%]]. En lutning på 5 procent är inte en vinkel på 5 grader; vinkeln är arcustangens för förhållandet, cirka 2.86 grader."
          },
          {
            "kind": "h3",
            "text": "Exempel 14: Hitta en kranarms vinkel"
          },
          {
            "kind": "p",
            "text": "En förenklad kranarm har en vertikal höjd på 8 m och en horisontell projektion på 6 m. Hitta vinkeln i förhållande till horisontalplanet."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala projektionen är motstående och den horisontella projektionen är närliggande. Detta bestämmer inte krankapacitet eller driftsäkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 15: Beräkna en vandringsleds lutning"
          },
          {
            "kind": "p",
            "text": "En rak sträcka av en vandringsled stiger 80 m över en horisontell löpsträcka på 150 m. Hitta lutningsvinkeln."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Beräkningen använder vertikal höjdökning som motstående sida och horisontellt avstånd som närliggande sida. Verkliga leder varierar i lutning snarare än att bilda en enda rak lutning."
          },
          {
            "kind": "h3",
            "text": "Exempel 16: Hitta en markisstöds vinkel"
          },
          {
            "kind": "p",
            "text": "Ett markisstöd har en vertikal höjd på 1.2 m och en horisontell löpsträcka på 2.4 m. Beräkna vinkeln i förhållande till horisontalplanet."
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "Förhållandet bestämmer vinkeln utan att behöva den diagonala stödlängden. Resultatet fastställer inte stödets strukturella lämplighet."
          },
          {
            "kind": "h3",
            "text": "Praktiska exempel jämförda"
          }
        ],
        "table": {
          "headers": [
            "Situation",
            "Motstående",
            "Närliggande",
            "Formel",
            "Vinkel",
            "Tolkning"
          ],
          "rows": [
            [
              "Taklutning",
              "4 ft",
              "12 ft",
              "arctan(4/12)",
              "18.43&deg;",
              "Måttlig taklutning"
            ],
            [
              "Stege",
              "4.5 m",
              "2 m",
              "arctan(4.5/2)",
              "66.04&deg;",
              "Brant stegplacering"
            ],
            [
              "Ramp",
              "0.75 m",
              "9 m",
              "arctan(0.75/9)",
              "4.76&deg;",
              "Flack lutning"
            ],
            [
              "Trädhöjd",
              "12 m",
              "20 m",
              "arctan(12/20)",
              "30.96&deg;",
              "Betraktningsvinkel till trädtoppen"
            ],
            [
              "Lantmätning",
              "7 m",
              "12 m",
              "arctan(7/12)",
              "30.26&deg;",
              "Höjdvinkel"
            ],
            [
              "Stödben",
              "1.2 m",
              "3.5 m",
              "arctan(1.2/3.5)",
              "18.92&deg;",
              "Flack stödvinkel"
            ],
            [
              "Trappa",
              "2.8 m",
              "4 m",
              "arctan(2.8/4)",
              "34.99&deg;",
              "Typisk trapplutning"
            ],
            [
              "Staglina",
              "10 m",
              "15 m",
              "arctan(10/15)",
              "33.69&deg;",
              "Linans vinkel mot horisontalplanet"
            ],
            [
              "Väglutning",
              "5 m",
              "100 m",
              "arctan(5/100)",
              "2.86&deg;",
              "Väg med 5 % lutning"
            ],
            [
              "Kranarm",
              "8 m",
              "6 m",
              "arctan(8/6)",
              "53.13&deg;",
              "Upphöjd armposition"
            ],
            [
              "Vandringsled",
              "80 m",
              "150 m",
              "arctan(80/150)",
              "28.07&deg;",
              "Brant ledsträcka"
            ],
            [
              "Markisstöd",
              "1.2 m",
              "2.4 m",
              "arctan(1.2/2.4)",
              "26.57&deg;",
              "Stödets diagonalvinkel"
            ]
          ]
        },
        "imgAlt": "Fyra praktiska arcustangensexempel: taklutning, stege, ramp och trädets höjdvinkel",
        "figcaption": "Fyra praktiska beräkningar: tak 18.43&deg;, stege 66.04&deg;, ramp 4.76&deg;, trädets höjdvinkel 30.96&deg;."
      },
      "arctan-ratio": {
        "h2": "Hur förhållandet mellan motstående och närliggande sida påverkar vinkeln",
        "blocks": [
          {
            "kind": "p",
            "text": "Förhållandet [[a/b]] bestämmer vinkel [[A]]. Ett litet förhållande ger en liten spetsig vinkel, lika sidor ger exakt 45 grader, och en motstående sida som är längre än den närliggande sidan ger en vinkel större än 45 grader. Ett förhållande större än 1 är fullt giltigt för tangens, vilket skiljer den från sinus och cosinus. Proportionella trianglar delar samma vinklar, och att skala båda benen med samma positiva faktor lämnar vinkeln oförändrad. När förhållandet växer extremt stort närmar sig vinkeln 90 grader utan att nå det för ändliga positiva sidlängder."
          }
        ],
        "table": {
          "headers": [
            "Motstående a",
            "Närliggande b",
            "Förhållande a/b",
            "Vinkel A"
          ],
          "rows": [
            [
              "1",
              "4",
              "0.25",
              "Cirka 14.04&deg;"
            ],
            [
              "1",
              "2",
              "0.5",
              "Cirka 26.57&deg;"
            ],
            [
              "1",
              "1",
              "1",
              "45&deg;"
            ],
            [
              "2",
              "1",
              "2",
              "Cirka 63.43&deg;"
            ],
            [
              "4",
              "1",
              "4",
              "Cirka 75.96&deg;"
            ]
          ]
        },
        "closingParagraphs": [
          "Mönstret är tydligt: sidförhållandet bestämmer triangelns form, inte dess totala storlek. Dubblera båda benen och vinkeln förblir exakt densamma."
        ],
        "imgAlt": "Fem trianglar som visar hur tangensförhållandet ändrar vinkeln från 14 till 76 grader",
        "figcaption": "Förhållande 0.25 ger 14.04&deg;, 0.5 ger 26.57&deg;, 1 ger 45&deg;, 2 ger 63.43&deg;, 4 ger 75.96&deg;."
      },
      "arctan-units": {
        "h2": "Förstå vinkelenheter och mätprecision",
        "blocks": [
          {
            "kind": "p",
            "text": "Räknaren returnerar grader. En grad är 1/360 av ett helt varv. En radian är den alternativa vinkelenheten, definierad så att ett helt varv motsvarar [[2\\pi]] radianer. Invers tangens kan returnera endera enheten beroende på räknare, men detta verktyg rapporterar grader."
          },
          {
            "kind": "p",
            "text": "Förhållandet [[a/b]] har i sig ingen enhet, och de två sidorna måste använda kompatibla enheter. Att konvertera båda måtten från meter till centimeter multiplicerar täljare och nämnare med 100, vilket lämnar förhållandet oförändrat."
          },
          {
            "kind": "p",
            "text": "För att konvertera radianer till grader: [[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]"
          },
          {
            "kind": "h3",
            "text": "Exempel: Ändrar måttenheten vinkeln?"
          },
          {
            "kind": "p",
            "text": "Ta [[a = 3]] m och [[b = 4]] m. Motsvarigheten i centimeter är [[a = 300]] cm och [[b = 400]] cm. Båda ger förhållandet 0.75 och samma vinkel på 36.87 grader. Behåll tillräcklig precision i mellanstegen och avrunda den slutliga vinkeln så att den matchar de ursprungliga mätningarnas noggrannhet."
          }
        ]
      },
      "arctan-mistakes": {
        "h2": "Vanliga misstag vid beräkning av en vinkel med tangens",
        "listItems": [
          "<strong>Använder hypotenusan i stället för den närliggande sidan.</strong> Formeln behöver benet som vidrör vinkel A, inte den längsta sidan. Kontrollera: är din nämnare ett av de två benen?",
          "<strong>Byter plats på den motstående och den närliggande sidan.</strong> Då beräknas i stället den komplementära vinkeln. Om du väntade dig cirka 37 grader och fick cirka 53 är benen omkastade.",
          "<strong>Vänder förhållandet till b/a.</strong> [[\\arctan(b/a)]] ger [[B]], inte [[A]]. För en 3-4-triangel är arctan(4/3) 53.13 grader, den andra spetsiga vinkeln.",
          "<strong>Använder vanlig tangens i stället för invers tangens.</strong> Att slå in tan(0.75) i stället för arctan(0.75) besvarar en helt annan fråga.",
          "<strong>Blandar ihop invers tangens med reciprokvärdet av tangens.</strong> [[\\tan^{-1}(x)]] är inte [[1/\\tan(x)]]. Reciprokvärdet är cotangens.",
          "<strong>Antar att tangensförhållandet måste ligga mellan 0 och 1.</strong> Det får gärna överstiga 1. Ett förhållande på 2 med vinkeln 63.43 grader är helt giltigt.",
          "<strong>Matar in noll eller negativa sidlängder.</strong> Sidlängder måste vara positiva. Noll eller negativa inmatningar saknar geometrisk mening här.",
          "<strong>Blandar inkompatibla måttenheter.</strong> Meter för det ena benet och fot för det andra förstör förhållandet. Konvertera först.",
          "<strong>Avrundar förhållandet för tidigt.</strong> Att avrunda 0.6667 till 0.67 innan arcustangens tillämpas förskjuter svaret. Behåll full precision till sista steget.",
          "<strong>Rapporterar radianer när grader förväntas.</strong> Arctan(1) är 45 grader men 0.785 radianer. Kontrollera räknarens läge.",
          "<strong>Blandar ihop vinkel A med dess komplementvinkel B.</strong> Kom ihåg [[A + B = 90^\\circ]]. Om svaret ser ut som den andra vinkeln var förhållandet inverterat.",
          "<strong>Behandlar en procentuell lutning som en vinkel i grader.</strong> En lutning på 5 % är arctan(0.05), cirka 2.86 grader, inte 5 grader.",
          "<strong>Blandar ihop vertikal höjd med lutande sträcka.</strong> Den motstående sidan är den rena vertikala komponenten, inte längden längs lutningen.",
          "<strong>Antar att den beräknade vinkeln bevisar att en konstruktion är säker.</strong> Geometri beskriver bara form. Stegens säkerhet, taklaster och rampers tillgänglighetskrav kräver separata tekniska kontroller."
        ]
      },
      "arctan-verify": {
        "h2": "Så här kontrollerar du att din beräknade vinkel är giltig",
        "blocks": [
          {
            "kind": "p",
            "text": "Giltiga inmatningar för en icke-degenererad rätvinklig triangel: den motstående sidan måste vara positiv, den närliggande sidan måste vara positiv, ingen får vara noll, båda måste använda kompatibla enheter, och den resulterande vinkeln måste ligga strikt mellan 0 och 90 grader. Till skillnad från sinus och cosinus är tangensförhållandet inte begränsat till värden under 1, så en motstående sida längre än den närliggande sidan är helt okej."
          },
          {
            "kind": "h3",
            "text": "Metod 1: Kontrollera tangensförhållandet"
          },
          {
            "kind": "p",
            "text": "Verifiera [[\\tan(A) \\approx a/b]] med den oavrundade vinkeln när det är möjligt. Om tangens för ditt svar återskapar ingångsförhållandet är svaret konsekvent."
          },
          {
            "kind": "h3",
            "text": "Metod 2: Kontrollera komplementvinkeln"
          },
          {
            "kind": "p",
            "text": "Beräkna [[B = 90^\\circ - A]]. De två spetsiga vinklarna i en rätvinklig triangel måste summera till 90 grader, så detta är en snabb rimlighetskontroll av varje resultat."
          },
          {
            "kind": "h3",
            "text": "Metod 3: Använd Pythagoras sats"
          },
          {
            "kind": "p",
            "text": "Beräkna hypotenusan [[c = \\sqrt{a^2 + b^2}]] och bekräfta sedan [[a^2 + b^2 = c^2]]."
          },
          {
            "kind": "p",
            "text": "Full kontroll med [[a = 3]] och [[b = 4]]: [[c = \\sqrt{9 + 16} = 5]]. Vinkeln [[A = \\arctan(3/4) \\approx 36.87^\\circ]] och dess komplement [[B \\approx 53.13^\\circ]] summerar till 90 grader. Små skillnader kommer från avrundning av den visade vinkeln."
          }
        ]
      },
      "arctan-choose": {
        "h2": "Välja rätt räknare för rätvinkliga trianglar",
        "blocks": [
          {
            "kind": "p",
            "text": "Matcha verktyget med de mått du faktiskt har:"
          }
        ],
        "listItems": [
          "<strong>Vinkel från tangens-räknare</strong> (denna sida): motstående sida [[a]] och närliggande sida [[b]] kända, hittar vinkel [[A]]. Bäst när båda benen mättes direkt.",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>Vinkel från sinus-räknare</strong></a>: motstående sida och hypotenusa kända. Bäst för höjdproblem där den lutande längden mättes.",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>Vinkel från cosinus-räknare</strong></a>: närliggande sida och hypotenusa kända. Bäst när hypotenusan mättes direkt längs en lutning.",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Vinkelräknare</strong></a>: hjälper dig välja rätt metod när du är osäker på vilka sidor du har.",
          "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\"><strong>Räknare för saknad vinkel</strong></a>: hittar komplementvinkeln när en spetsig vinkel redan är känd.",
          "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\"><strong>Sidräknare</strong></a>: hittar saknade sidlängder snarare än vinklar."
        ],
        "closingParagraphs": [
          "Alla tre inversfunktioner är överens om samma triangel: för en 3-4-5-triangel ger arctan(3/4), arcsin(3/5) och arccos(4/5) alla 36.87 grader. Om två metoder inte är överens är en sida felaktigt benämnd."
        ]
      },
      "arctan-conclusion": {
        "h2": "Hitta vilken vinkel som helst från tangens med självsäkerhet",
        "blocks": [
          {
            "kind": "p",
            "text": "Formeln för invers tangens förvandlar två enkla benmått till en precis vinkel. Mät den motstående sidan och den närliggande sidan, dividera, tillämpa arcustangens och verifiera med komplementvinkeln eller Pythagoras sats. Oavsett om uppgiften är en taklutning, en ramplutning eller en stegplacering är metoden densamma: matcha förhållandet med vinkeln, och låt geometrin göra resten."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Vad beräknar formeln A = arctan(a / b)?",
        "answer": "Den beräknar den spetsiga vinkeln A i en rätvinklig triangel från längderna på de två benen. Du dividerar den motstående sidan a med den närliggande sidan b och tillämpar sedan invers tangens på förhållandet. Resultatet är vinkeln i grader vars tangens är lika med a / b."
      },
      {
        "question": "Hur hittar man en vinkel med invers tangens?",
        "answer": "Mät den motstående sidan och den närliggande sidan i förhållande till din målvinkel, dividera den motstående med den närliggande för att få tangensförhållandet, och tillämpa sedan arcustangens. Till exempel är arctan(3 / 4) cirka 36.87 grader."
      },
      {
        "question": "Varför behöver jag den motstående och den närliggande sidan?",
        "answer": "Tangens definieras som motstående dividerat med närliggande, så dessa två sidor är exakt vad formeln behöver. De är den rätvinkliga triangelns två ben, och tillsammans bestämmer de formen fullständigt, och därmed vinkeln."
      },
      {
        "question": "Kan jag beräkna vinkeln utan att känna till hypotenusan?",
        "answer": "Ja. Det är den största fördelen med denna metod. Hypotenusan förekommer aldrig i tangensformeln, så du kan helt hoppa över att mäta den längsta sidan och ändå få den exakta vinkeln."
      },
      {
        "question": "Vad är skillnaden mellan tangens och invers tangens?",
        "answer": "Tangens tar en vinkel och returnerar ett förhållande, till exempel tan(45 grader) = 1. Invers tangens vänder på detta: den tar ett förhållande och returnerar vinkeln, till exempel arctan(1) = 45 grader. De två funktionerna upphäver varandra."
      },
      {
        "question": "Är arcustangens samma sak som invers tangens?",
        "answer": "Ja. Arctan(x) och invers tangens(x) är två namn på samma funktion. Inget av dem betyder reciprokvärdet 1 / tan(x); reciprokvärdet av tangens är cotangens, en annan funktion."
      },
      {
        "question": "Kan tangensförhållandet vara större än 1?",
        "answer": "Ja, och det är normalt. När den motstående sidan är längre än den närliggande sidan överstiger förhållandet 1 och vinkeln är större än 45 grader. Till skillnad från sinus- och cosinusförhållanden har tangens ingen övre gräns."
      },
      {
        "question": "Vad händer när den motstående och den närliggande sidan är lika?",
        "answer": "Förhållandet är 1, och arctan(1) är exakt 45 grader. Lika ben bildar en likbent rätvinklig triangel, så de två spetsiga vinklarna är båda 45 grader."
      },
      {
        "question": "Hur påverkar sidförhållandet vinkeln?",
        "answer": "Ett större förhållande mellan motstående och närliggande sida ger en större vinkel. Ett förhållande på 0.25 ger cirka 14.04 grader, ett förhållande på 1 ger 45 grader, och ett förhållande på 4 ger cirka 75.96 grader. Vinkeln växer när den motstående sidan växer i förhållande till den närliggande sidan."
      },
      {
        "question": "Hur kan jag verifiera min beräknade vinkel?",
        "answer": "Tre kontroller fungerar bra. Beräkna tan(A) och bekräfta att det är lika med a / b. Bekräfta att komplementvinkeln B = 90 minus A är rimlig. Eller beräkna hypotenusan med Pythagoras sats och bekräfta att a i kvadrat plus b i kvadrat är lika med c i kvadrat."
      },
      {
        "question": "Kan jag använda denna räknare för taklutning, ramplutning eller stegevinklar?",
        "answer": "Ja, dessa är klassiska användningsområden. Ett taks höjd över dess horisontella löpsträcka, en ramps höjd över dess löpsträcka, eller en steges höjd över dess basavstånd ger alla den motstående och den närliggande sidan direkt, vilket är exakt vad denna räknare behöver."
      },
      {
        "question": "Vad är skillnaden mellan en procentuell lutning och en vinkel i grader?",
        "answer": "En procentuell lutning är 100 gånger förhållandet mellan höjd och löpsträcka, medan vinkeln är arcustangens för det förhållandet. En lutning på 5 procent betyder ett förhållande på 0.05, vilket är en vinkel på cirka 2.86 grader, inte 5 grader."
      }
    ],
    "relatedHeading": "Utforska relaterade triangelsräknare",
    "relatedIntro": "Dessa verktyg täcker de närliggande beräkningarna:",
    "relatedItems": [
      "Vinkelräknare för rätvinklig triangel",
      "Räknare för rätvinklig triangels vinkel från sinus",
      "Räknare för rätvinklig triangels vinkel från cosinus",
      "Räknare för saknad vinkel i rätvinklig triangel",
      "Tangensförhållanderäknare",
      "Räknare för rätvinklig triangels sida från tangens",
      "Sidräknare för rätvinklig triangel",
      "Räknare för speciella rätvinkliga trianglar"
    ]
  },
  "zh": {
    "tocHeading": "本指南目录",
    "tocItems": {
      "arctan-intro": "如何用正切求角度",
      "arctan-sides": "理解对边与邻边",
      "arctan-what": "直角三角形中的正切是什么？",
      "arctan-formula": "反正切公式的工作原理",
      "arctan-howto": "如何使用计算器",
      "arctan-examples": "分步示例",
      "arctan-applications": "实际生活中的例子",
      "arctan-ratio": "边长比如何影响角度",
      "arctan-units": "角度单位与精度",
      "arctan-mistakes": "常见错误",
      "arctan-verify": "检验答案",
      "arctan-choose": "选择合适的计算器",
      "arctan-faq": "常见问题",
      "arctan-related": "相关计算器"
    },
    "sections": {
      "arctan-intro": {
        "h2": "如何用正切求直角三角形的角度",
        "blocks": [
          {
            "kind": "p",
            "text": "直角三角形反正切角度计算器可以在已知三角形两条直角边（对边和邻边）时求出锐角。它的计算方法是：先用对边除以邻边，再对得到的比值求反正切。结果即为以度为单位的角度。"
          },
          {
            "kind": "p",
            "text": "想象一条轮椅坡道。你可以测量它的垂直高度和水平长度，但坡面本身的斜长可能难以测量。这两个测量值，即垂直上升高度和水平延伸长度，就是对边和邻边。只需要它们的比值就够了。反正切可以直接把这个比值换算成坡道的倾斜角，完全不需要测量坡面长度。"
          },
          {
            "kind": "p",
            "text": "其中 [[A]] 是要求得的角，[[a]] 是对边，[[b]] 是邻边。正切将它们联系起来：[[\\tan(A) = a/b]]，而反正切则反转这一关系：[[A = \\arctan(a/b)]]。由于公式中根本不出现斜边，只要你实际测得的数据正是这两条直角边，这就是最自然的方法。"
          }
        ]
      },
      "arctan-sides": {
        "h2": "理解对边与邻边",
        "blocks": [
          {
            "kind": "h3",
            "text": "什么是直角三角形？"
          },
          {
            "kind": "p",
            "text": "直角三角形有一个角恰好为 90 度。另外两个角都是锐角，即每个都小于 90 度，且它们的和恒为 90 度。正是因为这个 90 度的条件，三角函数比值才成立：正弦、余弦和正切都由直角三角形各边之间固定的比例关系定义。如果没有直角，比值 [[a/b]] 就无法对应一个确定的角度。"
          },
          {
            "kind": "h3",
            "text": "什么是对边？"
          },
          {
            "kind": "p",
            "text": "对边是正对着角 [[A]] 的那条直角边，它不与角 [[A]] 本身相接。用实际场景来说，它常常表示垂直高度：梯子靠墙时达到的高度、屋顶升起的高度，或起重机吊臂的垂直分量。\"对边\"这个名称取决于你选择的参考角。如果你把参考角从 [[A]] 换成 [[B]]，原来是对边的那条边就变成了邻边。"
          },
          {
            "kind": "h3",
            "text": "什么是邻边？"
          },
          {
            "kind": "p",
            "text": "邻边是与角 [[A]] 相接但不是斜边的那条直角边，它构成这个角的一条边。在实地测量中，它常常表示水平距离：梯子底端到墙的地面距离、屋顶的水平跨度，或坡道的水平长度。它是两条互相垂直的直角边之一，不要把它和斜边混淆，斜边是直角的对边。"
          },
          {
            "kind": "h3",
            "text": "什么是斜边？"
          },
          {
            "kind": "p",
            "text": "斜边记为 [[c]]，是 90 度角的对边，恒为三角形中最长的边。正切计算器不需要它的长度。如果你确实需要它，可以用勾股定理从两条直角边求出：[[c = \\sqrt{a^2 + b^2}]]。但在求角度本身时，斜边是多余的信息，可以直接略过。"
          },
          {
            "kind": "h3",
            "text": "为什么参考角很重要"
          },
          {
            "kind": "p",
            "text": "对边和邻边是相对于所选角度定义的。在同一个三角形中，把参考角从 [[A]] 换成 [[B]] 会交换两条直角边的角色：原来是对边的变成邻边，反之亦然。因此，把比值从 [[a/b]] 颠倒为 [[b/a]]，算出的是余角 [[B = 90^\\circ - A]] 而不是 [[A]]。在整个计算过程中固定参考角，就能避免这种混淆。"
          }
        ],
        "imgAlt": "反正切公式所需的直角三角形结构图，标注对边 a、邻边 b 和斜边 c",
        "figcaption": "反正切公式的结构：a 是角 A 的对边（正对着角 A），b 是角 A 的邻边（与角 A 相接），c 是斜边。"
      },
      "arctan-what": {
        "h2": "直角三角形中的正切是什么？",
        "blocks": [
          {
            "kind": "p",
            "text": "正切比较的是直角三角形的两条直角边。对于角 [[A]]，正切等于对边除以邻边："
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "其中 [[\\tan(A)]] 是角 [[A]] 的正切，[[a]] 是对边，[[b]] 是邻边。正切描述了三角形的陡峭程度：当三角形以邻边为底边放置时，正切就是垂直边与水平边的比值。"
          },
          {
            "kind": "p",
            "text": "例如，当 [[a = 3]] 且 [[b = 4]] 时："
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{3}{4} = 0.75]]]"
          },
          {
            "kind": "p",
            "text": "这个比值没有物理单位。米除以米相互抵消，所以无论你用米、英尺还是厘米测量，比值 0.75 都是同一个纯数字。"
          },
          {
            "kind": "h3",
            "text": "什么是反正切？"
          },
          {
            "kind": "p",
            "text": "普通正切从角度出发得到比值；反正切从比值出发得到角度。如果 [[\\tan(A) = 0.75]]，那么 [[A = \\arctan(0.75) \\approx 36.87^\\circ]]。反正切反转了正切的关系，从边长比还原出原来的角度。"
          },
          {
            "kind": "h3",
            "text": "反正切和正切的逆函数是同一个概念吗？"
          },
          {
            "kind": "p",
            "text": "是的。[[\\arctan(x)]] 和 [[\\tan^{-1}(x)]] 是同一个函数的两种记法。上标 [[-1]] 不表示倒数 [[1/\\tan(x)]]。正切的倒数是余切，是另一个函数。"
          },
          {
            "kind": "h3",
            "text": "理解 SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA 是标准的记忆口诀：正弦（Sine）= 对边 / 斜边，余弦（Cosine）= 邻边 / 斜边，正切（Tangent）= 对边 / 邻边。其中的 TOA 部分指出了本计算器适用的比值，因为已知量正是 对边和邻边。"
          },
          {
            "kind": "h3",
            "text": "为什么正切不需要斜边"
          },
          {
            "kind": "p",
            "text": "正切直接使用两条互相垂直的直角边，斜边的长度与计算无关。只要知道上升高度和水平距离，就足以确定倾斜角。把两条直角边同时乘以同一个正数，比值不变，角度也不变：3-4 三角形和 6-8 三角形的角度都是 36.87 度。"
          }
        ],
        "imgAlt": "展示反正切计算步骤的示意图：先用 a 除以 b，再求反正切得到角 A",
        "figcaption": "反正切的工作原理：先用对边除以邻边，再对结果求反正切，还原出角度。"
      },
      "arctan-formula": {
        "h2": "反正切公式的工作原理",
        "blocks": [
          {
            "kind": "p",
            "text": "从正切的定义出发："
          },
          {
            "kind": "p",
            "text": "[[[\\tan(A) = \\frac{a}{b}]]]"
          },
          {
            "kind": "p",
            "text": "已知的边长可以算出右侧的比值。要还原出角度，对等式两边同时求反正切："
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{a}{b}\\right)]]]"
          },
          {
            "kind": "p",
            "text": "反正切作用于整个比值，因为这个比值整体才是该角度的正切。不能把它拆开，分别作用于分子和分母。"
          },
          {
            "kind": "h3",
            "text": "例题：对边为 3、邻边为 4"
          },
          {
            "kind": "p",
            "text": "已知 [[a = 3]] cm，[[b = 4]] cm："
          },
          {
            "kind": "p",
            "text": "步骤 1：写出公式。[[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "步骤 2：代入数值。[[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "步骤 3：计算比值。[[3/4 = 0.75]]"
          },
          {
            "kind": "p",
            "text": "步骤 4：求反正切。[[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "最终答案：[[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "角度约为 36.87 度。保留两位小数只是对无理数结果的常规四舍五入，并非精确的封闭形式。"
          }
        ]
      },
      "arctan-howto": {
        "h2": "如何使用直角三角形反正切角度计算器",
        "blocks": [
          {
            "kind": "p",
            "text": "按以下步骤操作，与页面上的实时界面对应："
          }
        ],
        "steps": [
          "<strong>确认直角。</strong>在使用任何三角函数比值之前，先确认三角形有一个 90 度的角。",
          "<strong>确定要求得的参考角 A。</strong>",
          "<strong>找到对边 a</strong>，即正对着角 A 的那条直角边。",
          "<strong>找到邻边 b</strong>，即与角 A 相接且不是斜边的那条直角边。",
          "<strong>测量或获取两条边的长度</strong>，使用相同的单位。",
          "<strong>把对边的长度输入</strong>到对应的输入框中。",
          "<strong>把邻边的长度输入</strong>到对应的输入框中。",
          "<strong>用计算器提供的单位选择器选择兼容的单位。</strong>",
          "<strong>确认两条边长都是正数</strong>，大于零。",
          "<strong>点击\"计算角 A\"</strong>开始计算。",
          "<strong>读取计算出的角度</strong>（单位为度）。",
          "<strong>检查结果是否合理</strong>：比值接近 1 时，角度应接近 45 度。",
          "<strong>使用\"重置\"</strong>清空输入，开始新的计算。"
        ],
        "closingParagraphs": [
          "每一步都很重要，因为标错边是得出错误答案最常见的原因。花一点时间确认哪条是 对边、哪条是邻边，就能避免最常见的错误。"
        ]
      },
      "arctan-examples": {
        "h2": "用正切求角度的分步示例",
        "blocks": [
          {
            "kind": "p",
            "text": "下面四个例子先建立核心技能，再进入实际应用。每个例子都遵循相同的模式：写出公式、代入数值、相除、求反正切。"
          },
          {
            "kind": "h3",
            "text": "例 1：3-4-5 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知对边 [[a = 3]] cm，邻边 [[b = 4]] cm，求角 [[A]]。"
          },
          {
            "kind": "p",
            "text": "步骤 1：写出公式。[[A = \\arctan(a/b)]]"
          },
          {
            "kind": "p",
            "text": "步骤 2：代入。[[A = \\arctan(3/4)]]"
          },
          {
            "kind": "p",
            "text": "步骤 3：计算。[[A = \\arctan(0.75)]]"
          },
          {
            "kind": "p",
            "text": "最终答案：[[A \\approx 36.87^\\circ]]"
          },
          {
            "kind": "p",
            "text": "即使这是 3-4-5 三角形，也不需要斜边。仅凭两条直角边就能确定角度，这正是反正切在这里最高效的原因。"
          },
          {
            "kind": "h3",
            "text": "例 2：对边与邻边相等"
          },
          {
            "kind": "p",
            "text": "已知 [[a = 5]] m，[[b = 5]] m："
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{5}\\right) = \\arctan(1) = 45^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "两条直角边相等，构成等腰直角三角形，所以两个锐角都恰好是 45 度。"
          },
          {
            "kind": "h3",
            "text": "例 3：小于 45 度的角"
          },
          {
            "kind": "p",
            "text": "已知 [[a = 3]] m，[[b = 6]] m："
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{3}{6}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "角度小于 45 度，因为对边比邻边短。上升高度小而水平距离长，形成一个平缓的角。"
          },
          {
            "kind": "h3",
            "text": "例 4：大于 45 度的角"
          },
          {
            "kind": "p",
            "text": "已知 [[a = 8]] ft，[[b = 4]] ft："
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{4}\\right) \\approx 63.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "角度超过 45 度，因为对边比邻边长。上升高度大而水平距离短，形成一个陡峭的角。"
          }
        ]
      },
      "arctan-applications": {
        "h2": "用正切计算角度的实际生活例子",
        "blocks": [
          {
            "kind": "p",
            "text": "下面是十二个完整的实际例子。每个例子都描述情境、指出三角形、给出测量值、正确命名各边、写出公式并求值，最后结合实际限制解读结果。"
          },
          {
            "kind": "h3",
            "text": "例 5：计算屋顶坡度角"
          },
          {
            "kind": "p",
            "text": "一座屋顶在水平方向延伸 12 英尺的同时垂直上升 4 英尺。求屋顶坡面与水平面之间的夹角。"
          },
          {
            "kind": "p",
            "text": "已知：对边（上升高度）[[a = 4]] ft，邻边（水平距离）[[b = 12]] ft。反正切适用，因为已知的是两个互相垂直的测量值，不需要坡面长度。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4}{12}\\right) \\approx 18.43^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "屋顶与水平面约成 18.43 度角。注意，4:12 表示的屋顶坡度是一个比值，不是一个 4 度的角。这个几何结果不是结构安全性评估。"
          },
          {
            "kind": "h3",
            "text": "例 6：求梯子的倾斜角"
          },
          {
            "kind": "p",
            "text": "一架梯子靠墙达到 4.5 米高度，梯子底端距离墙 2 米。求梯子与地面之间的夹角。"
          },
          {
            "kind": "p",
            "text": "已知：对边（高度）[[a = 4.5]] m，邻边（地面距离）[[b = 2]] m。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{4.5}{2}\\right) \\approx 66.04^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "墙的高度是地面夹角的对边，地面距离是邻边。仅凭计算出的角度不能判断梯子放置是否安全。"
          },
          {
            "kind": "h3",
            "text": "例 7：计算坡道的倾斜角"
          },
          {
            "kind": "p",
            "text": "一条坡道在水平方向延伸 9 米的同时上升 0.75 米。求坡道的倾斜角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{0.75}{9}\\right) \\approx 4.76^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "垂直上升高度和水平长度正是正切所需的输入。仅凭这个角度不能确认坡道是否符合无障碍或建筑规范要求。"
          },
          {
            "kind": "h3",
            "text": "例 8：估算看向树顶的仰角"
          },
          {
            "kind": "p",
            "text": "一人站在距离一棵树 20 米处。树顶在观测点水平面上方 12 米。求仰角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{12}{20}\\right) \\approx 30.96^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "垂直高度差是对边，水平距离是邻边。结果是从观测点看向树顶、相对于水平面的仰角，而不是树的总高度。"
          },
          {
            "kind": "h3",
            "text": "例 9：测量中的仰角"
          },
          {
            "kind": "p",
            "text": "一份简化的测量草图记录垂直高差为 7 米，水平距离为 12 米。求仰角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{7}{12}\\right) \\approx 30.26^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "高差和水平距离构成对边和邻边。实际测量可能还需要仪器高度修正和地形调整，超出这个简化模型。"
          },
          {
            "kind": "h3",
            "text": "例 10：求机械支架的角度"
          },
          {
            "kind": "p",
            "text": "一个机械支架的垂直高度为 1.2 米，水平长度为 3.5 米。求它与水平面的夹角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{3.5}\\right) \\approx 18.92^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "反正切把两个互相垂直的测量值直接换算成角度，不需要斜边长度。这个计算不能证明支架的强度或适用性。"
          },
          {
            "kind": "h3",
            "text": "例 11：计算楼梯的倾斜角"
          },
          {
            "kind": "p",
            "text": "简化的楼梯在水平方向延伸 4 米的同时上升 2.8 米。求整体倾斜角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{2.8}{4}\\right) \\approx 34.99^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "总垂直高度和总水平长度决定了整体角度。这个简化计算不能验证建筑规范合规性，也不能验证单个台阶的尺寸。"
          },
          {
            "kind": "h3",
            "text": "例 12：求拉线的角度"
          },
          {
            "kind": "p",
            "text": "一根拉线连接两个点，垂直距离为 10 米，水平距离为 15 米。求拉线与水平面的夹角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{10}{15}\\right) \\approx 33.69^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "垂直距离是夹角的对边，水平投影是邻边。这个角度计算不能确定拉线张力、锚固强度或结构安全。"
          },
          {
            "kind": "h3",
            "text": "例 13：计算道路坡度角"
          },
          {
            "kind": "p",
            "text": "一条公路在水平方向延伸 100 米的同时上升 5 米。求公路的坡角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{5}{100}\\right) \\approx 2.86^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "坡度百分比为 [[(5/100) \\times 100 = 5\\%]]。5% 的坡度不是 5 度的角；角度是比值的反正切，约为 2.86 度。"
          },
          {
            "kind": "h3",
            "text": "例 14：求起重机吊臂的角度"
          },
          {
            "kind": "p",
            "text": "简化的吊臂垂直上升 8 米，水平投影为 6 米。求它与水平面的夹角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{8}{6}\\right) \\approx 53.13^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "垂直投影是对边，水平投影是邻边。这个结果不能确定起重机的承载能力或作业安全。"
          },
          {
            "kind": "h3",
            "text": "例 15：计算徒步小径的坡度"
          },
          {
            "kind": "p",
            "text": "一条徒步小径的一段直线路段在水平方向延伸 150 米的同时上升 80 米。求倾斜角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{80}{150}\\right) \\approx 28.07^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "计算中把垂直爬升高度作为对边，水平距离作为邻边。真实小径的坡度是变化的，并非一条直线坡道。"
          },
          {
            "kind": "h3",
            "text": "例 16：求遮阳篷支架的角度"
          },
          {
            "kind": "p",
            "text": "一个遮阳篷支架的垂直高度为 1.2 米，水平长度为 2.4 米。求它与水平面的夹角。"
          },
          {
            "kind": "p",
            "text": "[[[A = \\arctan\\left(\\frac{1.2}{2.4}\\right) \\approx 26.57^\\circ]]]"
          },
          {
            "kind": "p",
            "text": "比值决定了角度，不需要斜撑的斜长。这个结果不能证明支架的结构适用性。"
          },
          {
            "kind": "h3",
            "text": "实际例子对比"
          }
        ],
        "table": {
          "headers": [
            "情境",
            "对边",
            "邻边",
            "公式",
            "角度",
            "解读"
          ],
          "rows": [
            [
              "屋顶坡度",
              "4 英尺",
              "12 英尺",
              "反正切(4/12)",
              "18.43°",
              "适中的屋顶坡度"
            ],
            [
              "梯子",
              "4.5 米",
              "2 米",
              "反正切(4.5/2)",
              "66.04°",
              "较陡的梯子放置角度"
            ],
            [
              "坡道",
              "0.75 米",
              "9 米",
              "反正切(0.75/9)",
              "4.76°",
              "平缓的坡度"
            ],
            [
              "树木仰角",
              "12 米",
              "20 米",
              "反正切(12/20)",
              "30.96°",
              "看向树顶的视角"
            ],
            [
              "测量",
              "7 米",
              "12 米",
              "反正切(7/12)",
              "30.26°",
              "仰角"
            ],
            [
              "支撑斜杆",
              "1.2 米",
              "3.5 米",
              "反正切(1.2/3.5)",
              "18.92°",
              "较小的支撑角度"
            ],
            [
              "楼梯",
              "2.8 米",
              "4 米",
              "反正切(2.8/4)",
              "34.99°",
              "典型的楼梯倾斜角"
            ],
            [
              "拉线",
              "10 米",
              "15 米",
              "反正切(10/15)",
              "33.69°",
              "拉线与水平面的夹角"
            ],
            [
              "道路坡度",
              "5 米",
              "100 米",
              "反正切(5/100)",
              "2.86°",
              "5% 坡度的道路"
            ],
            [
              "起重机吊臂",
              "8 米",
              "6 米",
              "反正切(8/6)",
              "53.13°",
              "吊臂抬起的位置"
            ],
            [
              "徒步小径",
              "80 米",
              "150 米",
              "反正切(80/150)",
              "28.07°",
              "较陡的小径路段"
            ],
            [
              "遮阳篷支架",
              "1.2 米",
              "2.4 米",
              "反正切(1.2/2.4)",
              "26.57°",
              "支架斜杆的角度"
            ]
          ]
        },
        "imgAlt": "四个实际反正切例子：屋顶坡度、梯子、坡道和树木仰角",
        "figcaption": "四个实际计算：屋顶 18.43°、梯子 66.04°、坡道 4.76°、树木仰角 30.96°。"
      },
      "arctan-ratio": {
        "h2": "对边与邻边的比值如何影响角度",
        "blocks": [
          {
            "kind": "p",
            "text": "比值 [[a/b]] 决定了角 [[A]] 的大小。比值小，锐角就小；两边相等时恰好 45 度；对边长于邻边时，角度大于 45 度。比值大于 1 对正切来说完全正常，这正是正切与正弦、余弦的不同之处。成比例的三角形角度相同：把两条直角边同时乘以同一个正数，角度不变。当比值变得极大时，角度趋近于 90 度，但对有限的正边长来说永远达不到 90 度。"
          },
          {
            "kind": "p",
            "text": "规律很明显：边长比决定的是三角形的形状，而不是整体大小。把两条边都翻倍，角度保持不变。"
          }
        ],
        "table": {
          "headers": [
            "对边 a",
            "邻边 b",
            "比值 a/b",
            "角 A"
          ],
          "rows": [
            [
              "1",
              "4",
              "0.25",
              "约 14.04°"
            ],
            [
              "1",
              "2",
              "0.5",
              "约 26.57°"
            ],
            [
              "1",
              "1",
              "1",
              "45°"
            ],
            [
              "2",
              "1",
              "2",
              "约 63.43°"
            ],
            [
              "4",
              "1",
              "4",
              "约 75.96°"
            ]
          ]
        },
        "imgAlt": "五个三角形，展示正切比值如何把角度从 14 度变化到 76 度",
        "figcaption": "比值 0.25 对应 14.04°，0.5 对应 26.57°，1 对应 45°，2 对应 63.43°，4 对应 75.96°。"
      },
      "arctan-units": {
        "h2": "角度单位与测量精度",
        "blocks": [
          {
            "kind": "p",
            "text": "计算器返回的是度数。度是完整一圈的 1/360。弧度是另一种角度单位，定义为完整一圈等于 [[2\\pi]] 弧度。反正切可以返回两种单位中的任意一种，具体取决于计算器，但本工具报告的是度数。"
          },
          {
            "kind": "p",
            "text": "比值 [[a/b]] 本身没有单位，两条边必须使用兼容的单位。把两个测量值都从米换算成厘米，分子和分母都乘以 100，比值不变。"
          },
          {
            "kind": "p",
            "text": "弧度换算成度：[[\\text{Degrees} = \\text{Radians} \\times 180^\\circ / \\pi]]"
          },
          {
            "kind": "h3",
            "text": "示例：测量单位会改变角度吗？"
          },
          {
            "kind": "p",
            "text": "取 [[a = 3]] m，[[b = 4]] m。换算成厘米就是 [[a = 300]] cm，[[b = 400]] cm。两者都得到比值 0.75，角度同样是 36.87 度。中间步骤保留足够的精度，最后按原始测量的准确度对角度取整。"
          }
        ]
      },
      "arctan-mistakes": {
        "h2": "用正切求角度时的常见错误",
        "blocks": [],
        "listItems": [
          "<strong>用斜边代替邻边。</strong>公式需要的是与角 A 相接的直角边，而不是最长的边。检查一下：你的分母是两条直角边之一吗？",
          "<strong>把对边和邻边弄反。</strong>这样算出的是余角。如果你预期约 37 度却得到了约 53 度，说明两条边标反了。",
          "<strong>把比值颠倒成 b/a。</strong>[[\\arctan(b/a)]] 得到的是 [[B]] 而不是 [[A]]。对 3-4 三角形，arctan(4/3) 是 53.13 度，即另一个锐角。",
          "<strong>用普通正切代替反正切。</strong>输入 tan(0.75) 而不是 arctan(0.75)，回答的是完全不同的问题。",
          "<strong>把反正切和正切的倒数混淆。</strong>[[\\tan^{-1}(x)]] 不是 [[1/\\tan(x)]]。正切的倒数是余切。",
          "<strong>以为正切比值必须在 0 到 1 之间。</strong>它可以自由地超过 1。比值为 2、角度为 63.43 度完全正常。",
          "<strong>输入零或负的边长。</strong>边长必须为正数。零或负的输入在这里没有几何意义。",
          "<strong>混用不兼容的测量单位。</strong>一条边用米、另一条边用英尺会破坏比值。先统一换算。",
          "<strong>过早对比值取整。</strong>在求反正切之前把 0.6667 舍入为 0.67 会改变答案。最后一步之前保留完整精度。",
          "<strong>需要度数却报告了弧度。</strong>arctan(1) 是 45 度，但用弧度表示是 0.785。检查计算器的模式。",
          "<strong>把角 A 和它的余角 B 混淆。</strong>记住 [[A + B = 90^\\circ]]。如果答案看起来像\"另一个\"角，说明比值被颠倒了。",
          "<strong>把坡度百分比当作度数。</strong>5% 的坡度是 arctan(0.05)，约 2.86 度，不是 5 度。",
          "<strong>把垂直上升高度和坡面距离混淆。</strong>对边是纯粹的垂直分量，不是沿坡面的长度。",
          "<strong>以为算出的角度能证明结构安全。</strong>几何只描述形状。梯子安全、屋顶荷载、坡道合规都需要单独的工程检查。"
        ]
      },
      "arctan-verify": {
        "h2": "如何检验计算出的角度是否正确",
        "blocks": [
          {
            "kind": "p",
            "text": "非退化直角三角形的有效输入：对边必须为正数，邻边必须为正数，两者都不能为零，都必须使用兼容的单位，结果角度必须严格介于 0 度与 90 度之间。与正弦、余弦不同，正切比值不受小于 1 的限制，所以对边长于邻边没有问题。"
          },
          {
            "kind": "h3",
            "text": "方法一：检验正切比值"
          },
          {
            "kind": "p",
            "text": "在可能的情况下用未取整的角度验证 [[\\tan(A) \\approx a/b]]。如果答案的正切还原出了输入的比值，答案就是自洽的。"
          },
          {
            "kind": "h3",
            "text": "方法二：检验余角"
          },
          {
            "kind": "p",
            "text": "计算 [[B = 90^\\circ - A]]。直角三角形的两个锐角之和必须为 90 度，所以这是对每个结果的快速合理性检查。"
          },
          {
            "kind": "h3",
            "text": "方法三：用勾股定理"
          },
          {
            "kind": "p",
            "text": "先算出斜边 [[c = \\sqrt{a^2 + b^2}]]，再确认 [[a^2 + b^2 = c^2]]。"
          },
          {
            "kind": "p",
            "text": "用 [[a = 3]] 和 [[b = 4]] 做完整检验：[[c = \\sqrt{9 + 16} = 5]]。角 [[A = \\arctan(3/4) \\approx 36.87^\\circ]] 与其余角 [[B \\approx 53.13^\\circ]] 相加为 90 度。微小的差异来自显示角度的取整。"
          }
        ]
      },
      "arctan-choose": {
        "h2": "选择合适的直角三角形计算器",
        "blocks": [
          {
            "kind": "p",
            "text": "根据你实际拥有的测量数据选择工具："
          }
        ],
        "listItems": [
          "<strong>反正切角度计算器</strong>（本页面）：已知对边 [[a]] 和邻边 [[b]]，求角 [[A]]。两条直角边都是直接测得时最适用。",
          "<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\"><strong>正弦角度计算器</strong></a>：已知对边和斜边。适用于测得了斜坡长度的高度问题。",
          "<a href=\"/right-triangle-angle-from-cosine-calculator/\" class=\"text-primary hover:underline\"><strong>余弦角度计算器</strong></a>：已知邻边和斜边。适用于沿斜坡直接测得斜边的情况。",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\"><strong>角度计算器</strong></a>：不确定自己拥有哪几条边时，帮你选对方法。",
          "<a href=\"/right-triangle-missing-angle-calculator/\" class=\"text-primary hover:underline\"><strong>缺角计算器</strong></a>：已知一个锐角时，求另一个余角。",
          "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\"><strong>边长计算器</strong></a>：求缺失的边长，而不是角度。"
        ],
        "closingParagraphs": [
          "三个反函数在同一个三角形上结果一致：对 3-4-5 三角形，反正切(3/4)、反正弦(3/5)、反余弦(4/5) 都给出 36.87 度。如果两种方法结果不一致，说明某条边标错了。"
        ]
      },
      "arctan-conclusion": {
        "h2": "有信心地用正切求出任意角度",
        "blocks": [
          {
            "kind": "p",
            "text": "反正切公式把两次简单的边长测量变成精确的角度。量出对边和邻边，相除，求反正切，再用余角或勾股定理验证。无论是屋顶坡度、坡道倾斜还是梯子放置，方法都一样：把比值对应到角度，剩下的交给几何。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "公式 A = arctan(a / b) 计算的是什么？",
        "answer": "它根据直角三角形两条直角边的长度计算锐角 A。先用对边 a 除以邻边 b，再对这个比值求反正切。结果就是以度为单位的角度，它的正切等于 a / b。"
      },
      {
        "question": "如何用反正切求角度？",
        "answer": "相对于目标角量出对边和邻边，用对边除以邻边得到正切比值，再求反正切。例如，arctan(3 / 4) 约为 36.87 度。"
      },
      {
        "question": "为什么需要对边和邻边？",
        "answer": "正切的定义就是对边比邻边，所以这两条边正是公式需要的。它们是直角三角形的两条直角边，共同完全决定了三角形的形状，也就决定了角度。"
      },
      {
        "question": "不知道斜边能算出角度吗？",
        "answer": "能，这正是这个方法的主要优点。斜边从不出现在正切公式中，所以可以跳过最长边的测量，仍然得到精确的角度。"
      },
      {
        "question": "正切和反正切有什么区别？",
        "answer": "正切从角度得到比值，例如 tan(45 度) = 1。反正切反过来：从比值得到角度，例如 arctan(1) = 45 度。两个函数互为逆运算。"
      },
      {
        "question": "反正切和正切的逆函数是同一个东西吗？",
        "answer": "是的。Arctan(x) 和正切的逆函数 tan inverse(x) 是同一个函数的两种叫法。它们都不表示倒数 1 / tan(x)；正切的倒数是余切，是另一个函数。"
      },
      {
        "question": "正切比值可以大于 1 吗？",
        "answer": "可以，这是正常现象。当对边长于邻边时，比值超过 1，角度大于 45 度。与正弦、余弦比值不同，正切没有上限。"
      },
      {
        "question": "对边和邻边相等时会怎样？",
        "answer": "比值为 1，arctan(1) 恰好是 45 度。相等的两条直角边构成等腰直角三角形，所以两个锐角都是 45 度。"
      },
      {
        "question": "边长比如何影响角度？",
        "answer": "对边与邻边的比值越大，角度越大。比值 0.25 对应约 14.04 度，比值 1 对应 45 度，比值 4 对应约 75.96 度。角度随对边相对于邻边的增长而增大。"
      },
      {
        "question": "如何验证算出的角度？",
        "answer": "三种检查都很有效。计算 tan(A) 并确认它等于 a / b；确认余角 B = 90 减 A 是否合理；或用勾股定理算出斜边，确认 a 的平方加 b 的平方等于 c 的平方。"
      },
      {
        "question": "这个计算器能用于屋顶坡度、坡道倾斜或梯子角度吗？",
        "answer": "能，这些都是经典应用。屋顶的上升高度除以水平跨度、坡道的上升高度除以水平长度、梯子高度除以底端距离，都直接给出对边和邻边，这正是本计算器需要的。"
      },
      {
        "question": "坡度百分比和度数表示的角度有什么区别？",
        "answer": "坡度百分比是上升高度与水平距离比值的 100 倍，而角度是该比值的反正切。5% 的坡度表示比值为 0.05，对应的角度约为 2.86 度，而不是 5 度。"
      }
    ],
    "relatedHeading": "探索相关的三角形计算器",
    "relatedIntro": "这些工具涵盖相邻的计算：",
    "relatedItems": [
      "直角三角形角度计算器",
      "直角三角形正弦求角计算器",
      "直角三角形余弦求角计算器",
      "直角三角形缺角计算器",
      "正切比值计算器",
      "直角三角形正切求边计算器",
      "直角三角形边长计算器",
      "特殊直角三角形计算器"
    ]
  }
};
