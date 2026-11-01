export const SINE_TRANSLATIONS_BATCH3 = {
  "id": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Apa Itu Kalkulator Rasio Sinus?",
      "sec-triangle": "Memahami Sisi Depan dan Hipotenusa",
      "sec-whatis": "Memahami Rasio Sinus",
      "sec-formula": "Cara Kerja Rumus Sinus",
      "sec-howto": "Cara Menggunakan Kalkulator Rasio Sinus",
      "sec-examples": "Contoh Langkah demi Langkah Menghitung Sinus",
      "sec-applications": "Contoh Nyata Penggunaan Rasio Sinus",
      "sec-angle": "Memahami Hubungan antara Sinus dan Besar Sudut",
      "sec-hypotenuse": "Cara Mencari Sisi Depan Menggunakan Sinus",
      "sec-recover": "Cara Mencari Sudut dari Rasio Sinus",
      "sec-mistakes": "Kesalahan Umum dalam Menghitung Sinus",
      "sec-verify": "Cara Memeriksa Keabsahan Hasil Sinus Anda",
      "sec-vs": "Sinus vs. Kosinus, Tangen, dan Kosekan",
      "sec-related": "Jelajahi Kalkulator Trigonometri Terkait",
      "sec-faq": "Pertanyaan yang Sering Diajukan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Apa Itu Kalkulator Rasio Sinus?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator rasio sinus menjawab satu pertanyaan: untuk sudut lancip dalam segitiga siku-siku, bagaimana sisi yang berhadapan dengan sudut tersebut dibandingkan dengan sisi terpanjang? Masukkan sisi depan dan hipotenusa, lalu alat membagi sisi depan dengan hipotenusa, dan menghasilkan [[\\sin(A)=a/c]]. Segitiga siku-siku memiliki sisi depan 3 cm dan hipotenusa 5 cm, sehingga [[\\sin(A)=3/5=0.6]]. Angka 0.6 itu adalah rasio sinus: artinya sisi depan adalah 60 persen dari hipotenusa. Itu bukan sudut, jadi jangan pernah membacanya sebagai [[0.6^\\circ]]. Sisi samping tidak pernah masuk dalam perhitungan ini; sisi depan dan hipotenusa sudah cukup. Sinus adalah salah satu rasio trigonometri dasar, dan kekuatannya adalah membandingkan dua panjang sedemikian rupa sehingga hanya bergantung pada sudut, bukan pada ukuran segitiga. Jika yang Anda butuhkan adalah sudut dalam derajat, sinus invers mengubah rasio menjadi derajat."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Memahami Sisi Depan dan Hipotenusa",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apa Itu Segitiga Siku-Siku?"
          },
          {
            "kind": "p",
            "text": "Segitiga siku-siku memiliki satu sudut tepat [[90^\\circ]], sudut antara dua garis yang saling tegak lurus, seperti dinding bertemu lantai yang datar. Hipotenusa terletak di seberang sudut siku-siku itu dan selalu menjadi sisi terpanjang, karena harus membentang penuh secara diagonal melintasi sudut. Dua sudut lainnya berbagi sisa 90 derajat, sehingga keduanya lancip. Dua kaki bertemu di sudut siku-siku, tegak lurus satu sama lain, dan hubungannya dengan hipotenusa itulah yang membuat trigonometri segitiga siku-siku menjadi mungkin."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Depan?"
          },
          {
            "kind": "p",
            "text": "Sisi depan [[a]] adalah sisi yang tepat berhadapan dengan sudut acuan [[A]], satu sisi yang tidak pernah menyentuh titik sudutnya. Dalam soal praktis, ia sering berperan sebagai ketinggian vertikal, selisih tinggi, atau komponen tegak lurus: tinggi dinding yang dicapai tangga, ketinggian vertikal sebuah tanjakan, atau selisih elevasi dalam survei. Sisi mana yang dihitung sebagai sisi depan bergantung pada sudut acuan yang dipilih, sehingga beralih dari sudut [[A]] ke sudut [[C]] menukar label sisi depan dan sisi samping. Ia muncul sebagai pembilang dalam rumus sinus karena sinus mengukur seberapa besar sisi di seberang sudut itu relatif terhadap hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Hipotenusa?"
          },
          {
            "kind": "p",
            "text": "Hipotenusa [[c]] adalah sisi di seberang sudut siku-siku: dalam setiap diagram ia menghadap kotak kecil yang menandai sudut [[90^\\circ]], dan ia selalu lebih panjang dari kedua kaki. Dalam soal praktis, ia sering berperan sebagai panjang miring: tangga, permukaan tanjakan, kasau, kabel, penopang diagonal, atau lintasan lurus. Ia muncul sebagai penyebut dalam rumus sinus, itulah sebabnya setiap nilai sinus berada antara 0 dan 1: pembilangnya selalu kaki yang sesungguhnya, lebih pendek dari penyebut."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Samping?"
          },
          {
            "kind": "p",
            "text": "Sisi samping [[b]] adalah kaki yang menyentuh sudut acuan [[A]] tanpa menjadi hipotenusa. Ia tidak berperan dalam perhitungan sinus utama, itulah sebabnya kalkulator tidak pernah memintanya. Ia menjadi berguna saat menghitung kosinus, tangen, atau sisi yang hilang, dan saat teorema Pythagoras digunakan untuk memverifikasi bahwa dua panjang yang diketahui membentuk segitiga siku-siku yang sesungguhnya."
          }
        ],
        "imgAlt": "Segitiga siku-siku dengan sudut A di kiri bawah, sisi depan a berwarna emas, hipotenusa c berwarna biru",
        "figcaption": "Sudut A berada di kiri bawah; sinus menggunakan sisi depan a yang berwarna emas dan hipotenusa c yang berwarna biru, bukan sisi samping b."
      },
      "sec-whatis": {
        "h2": "Memahami Rasio Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus dari sudut lancip membandingkan sisi yang tepat berhadapan dengan sudut itu dengan sisi terpanjang segitiga:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Bacalah [[\\sin(A)]] sebagai \"sinus dari sudut A\". Pembilang [[a]] adalah sisi depan; penyebut [[c]] adalah hipotenusa. Pecahan menjawab satu pertanyaan konkret: berapa bagian dari hipotenusa yang ditempati sisi depan? Karena kedua masukan adalah panjang yang diukur dalam satuan yang sama, hasilnya adalah angka biasa, dan angka itu hanya bergantung pada sudut, tidak pernah pada ukuran segitiga."
          },
          {
            "kind": "h3",
            "text": "Memahami SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "Siswa mengingat tiga rasio utama dengan mnemonik SOH-CAH-TOA:"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> Sinus = Depan / Hipotenusa. <strong>CAH:</strong> Kosinus = Samping / Hipotenusa. <strong>TOA:</strong> Tangen = Depan / Samping."
          },
          {
            "kind": "p",
            "text": "SOH bersesuaian langsung dengan rumus sinus [[\\sin(A)=a/c]]. Mnemonik ini bekerja karena memasangkan setiap nama rasio dengan dua sisi yang dibutuhkannya, dalam urutan yang benar: untuk sinus, sisi depan berada di atas dan hipotenusa di bawah. Setelah kedua sisi dinamai dengan benar, mnemonik mengubah \"sisi mana di mana\" dari soal hafalan menjadi soal pencarian."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sinus Adalah Rasio"
          },
          {
            "kind": "p",
            "text": "Membagi dua panjang menghasilkan angka tak berdimensi karena satuannya saling menghilangkan:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "Satuan meter saling menghilangkan, menyisakan 0.6. Menggunakan 300 cm dan 500 cm memberikan hasil yang identik, karena kedua panjang berskala bersama. Satu-satunya syarat adalah satuan yang kompatibel: kedua pengukuran harus menggunakan satuan yang sama, atau salah satunya harus dikonversi sebelum dibagi. Rasio ini karenanya adalah sifat sudut, bukan sifat penggaris tertentu yang digunakan untuk mengukur segitiga."
          },
          {
            "kind": "h3",
            "text": "Apa Arti Nilai Sinus 0.6?"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] berarti sisi depan adalah 60 persen dari hipotenusa. Segitiga 3-4-5 adalah acuan klasik: [[\\sin(A)=3/5=0.6]]. Angka ini mengungkapkan bentuk segitiga sekilas: sinus mendekati 1 berarti sisi depan hampir menyamai hipotenusa dan sudutnya curam; sinus mendekati 0 berarti sisi depan pendek relatif terhadap hipotenusa dan sudutnya landai. Semua ini tidak menyiratkan bahwa 0.6 adalah sudut; ia adalah proporsi, dan hanya sinus invers yang mengubahnya menjadi derajat."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sinus Berada antara 0 dan 1"
          },
          {
            "kind": "p",
            "text": "Hipotenusa lebih panjang dari sisi depan, sehingga [[0 \\lt a \\lt c]], dan karenanya:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Segitiga siku-siku yang valid dan tidak degenerate tidak dapat memiliki rasio sinus tepat 0 atau tepat 1 untuk sudut lancipnya. Nilai mendekati 0 saat sudut mendekati [[0^\\circ]], karena sisi depan menyusut menuju nol; ia mendekati 1 saat sudut mendekati [[90^\\circ]], karena sisi depan tumbuh hingga hampir menyamai hipotenusa. Kedua nilai batas itu tidak pernah dicapai oleh sudut lancip segitiga nyata."
          },
          {
            "kind": "h3",
            "text": "Sinus Versus Kosinus"
          },
          {
            "kind": "p",
            "text": "Kedua rasio berbagi hipotenusa yang sama tetapi menggunakan pembilang yang berbeda:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] dan [[\\cos(A)=b/c]]."
          },
          {
            "kind": "p",
            "text": "Sinus menggunakan sisi depan, kaki yang berhadapan dengan sudut; kosinus menggunakan sisi samping, kaki di samping sudut. Hasil di atas 1 berarti pecahan terbalik atau hipotenusa diletakkan sebagai pembilang. Sinus bukanlah kebalikan dari kosinus: kebalikan dari sinus adalah kosekan."
          }
        ],
        "imgAlt": "Tiga langkah: beri label a=3, b=4, c=5 pada segitiga, terapkan sin(A)=a/c, dapatkan 0.6",
        "figcaption": "Identifikasi sisi-sisinya, terapkan rumusnya, dan hitung: sisi depan adalah 60 persen dari hipotenusa."
      },
      "sec-formula": {
        "h2": "Cara Kerja Rumus Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Rumus ini mengikuti urutan yang logis. Mulailah dengan definisi dalam kata-kata:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "Kemudian gunakan notasi halaman yang ada, dengan [[a]] untuk sisi depan dan [[c]] untuk hipotenusa:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Sisi depan berada di pembilang karena sinus mengukur ukuran sisi itu relatif terhadap hipotenusa; hipotenusa berada di penyebut karena ia adalah panjang acuan yang menjadi pembanding setiap sisi lainnya. Susunannya tetap: pembilang bertanya \"seberapa besar kaki ini?\", penyebut menjawab \"dibandingkan dengan apa?\"."
          },
          {
            "kind": "h3",
            "text": "Contoh yang Dikerjakan Penuh: Segitiga Siku-Siku 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]], dan [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 1:</strong> Tulis rumusnya. [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 2:</strong> Substitusikan nilai yang diketahui. [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 3:</strong> Bagi. [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 4:</strong> Tafsirkan hasilnya. Sisi depan adalah 60 persen dari hipotenusa."
          },
          {
            "kind": "p",
            "text": "<strong>Langkah 5:</strong> Verifikasi segitiganya. [[3^2+4^2=5^2]], dan [[9+16=25]]. Pemeriksaan Pythagoras memastikan panjang sisi ini membentuk segitiga siku-siku, sehingga hasil sinus dapat dipercaya."
          },
          {
            "kind": "h3",
            "text": "Klarifikasi Penting"
          },
          {
            "kind": "p",
            "text": "Jika pembaca menginginkan sudutnya, bukan rasio sinusnya, diperlukan sinus invers: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Sinus invers juga disebut arcsinus dan merupakan operasi terpisah dari menghitung rasio sinus. Kalkulator rasio sinus yang ada menghitung rasio dari dua panjang sisi; ia tidak langsung menghasilkan sudut."
          }
        ]
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Rasio Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator mencerminkan rumus secara tepat: dua masukan, satu tombol, satu rasio. Ikuti antarmukanya secara berurutan."
          }
        ],
        "steps": [
          "<strong>Identifikasi sudut acuan [[A]].</strong> Setiap perhitungan sinus berjangkar pada satu sudut lancip; sisi depan didefinisikan relatif terhadapnya.",
          "<strong>Temukan sisi depan [[a]], tepat berhadapan dengan sudut [[A]].</strong> Ia adalah kaki yang tidak pernah menyentuh titik sudut itu.",
          "<strong>Temukan hipotenusa [[c]], berhadapan dengan sudut siku-siku dan sisi terpanjang.</strong> Ia menghadap kotak kecil yang menandai sudut [[90^\\circ]].",
          "<strong>Peroleh atau ukur kedua panjang sisi.</strong> Gunakan pita ukur, dimensi pada denah, atau nilai dari pernyataan soal.",
          "<strong>Masukkan panjang sisi depan pada kolom masukan pertama.</strong> Ini menjadi pembilang [[a]].",
          "<strong>Masukkan panjang hipotenusa pada kolom masukan kedua.</strong> Ini menjadi penyebut [[c]].",
          "<strong>Pilih satuan pengukuran yang kompatibel menggunakan pemilih satuan yang tersedia.</strong> Meter dengan meter, sentimeter dengan sentimeter; satuan campuran menghasilkan rasio yang tidak bermakna.",
          "<strong>Pastikan kedua pengukuran positif.</strong> Panjang nol atau negatif tidak dapat membentuk segitiga.",
          "<strong>Periksa bahwa hipotenusa lebih panjang dari sisi depan.</strong> Jika [[a \\ge c]], masukan tertukar atau segitiganya mustahil.",
          "<strong>Klik Calculate sin(A).</strong> Alat membagi sisi depan dengan hipotenusa.",
          "<strong>Baca rasio sinus yang dihasilkan.</strong> Ia adalah desimal biasa, bukan sudut dan bukan panjang.",
          "<strong>Pastikan hasilnya lebih besar dari 0 dan kurang dari 1.</strong> Untuk segitiga siku-siku yang valid dan tidak degenerate dengan sudut acuan lancip, itulah satu-satunya rentang yang sah.",
          "<strong>Gunakan Reset saat Anda ingin menghapus masukan dan memulai perhitungan lain.</strong>"
        ],
        "closingParagraphs": [
          "Kalkulator tidak membutuhkan sisi samping atau masukan sudut. Ia melakukan pembagian dan tidak lebih: tanpa riwayat tersimpan, tanpa grafik, tanpa mode tersembunyi."
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Menghitung Sinus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Contoh 1: Segitiga Siku-Siku 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]], dan [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Sisi depan adalah 60 persen dari hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Segitiga Siku-Siku 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a=5\\,\\text{m}]], [[b=12\\,\\text{m}]], dan [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Sisi depan adalah kira-kira 38.46 persen dari hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segitiga 30-60-90"
          },
          {
            "kind": "p",
            "text": "Untuk sudut acuan [[A=30^\\circ]], sisi depan adalah setengah hipotenusa. Gunakan [[a=1\\,\\text{cm}]], [[b=\\sqrt{3}\\,\\text{cm}]], dan [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "Ini adalah hasil sudut istimewa yang berguna: pada 30 derajat sisi depan tepat setengah hipotenusa, itulah sebabnya segitiga ini sering muncul dalam soal buku teks."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Segitiga 45-45-90"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a=1\\,\\text{cm}]], [[b=1\\,\\text{cm}]], dan [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "Kaki yang sama menghasilkan nilai sinus dan kosinus yang sama untuk kedua sudut lancip: pada 45 derajat setiap sudut lancip menghadap kaki 1 dan hipotenusa [[\\sqrt{2}]], sehingga sinus dan kosinus berimpit."
          }
        ]
      },
      "sec-applications": {
        "h2": "Contoh Nyata Penggunaan Rasio Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh menyatakan situasinya, mengidentifikasi sisi depan dan hipotenusa, mensubstitusikannya ke dalam rumus, dan menafsirkan hasilnya dalam bahasa sederhana."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Menghitung Rasio Sinus Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga panjangnya 5 m dan mencapai 4 m ke atas dinding vertikal. Sudut acuan [[A]] berada antara tangga dan tanah horizontal. Tangga adalah hipotenusa, [[c=5\\,\\text{m}]], dan tinggi vertikal adalah sisi depan, [[a=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Tinggi vertikal adalah 80 persen dari panjang tangga. Rasio ini menggambarkan geometri tangga dan tidak menetapkan apakah tangga terpasang dengan aman."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Menghitung Rasio Sinus Kasau Atap"
          },
          {
            "kind": "p",
            "text": "Sebuah kasau atap memiliki panjang miring 6.5 m dan ketinggian vertikal 2.5 m. Kasau adalah hipotenusa, [[c=6.5\\,\\text{m}]], dan ketinggian vertikal adalah sisi depan, [[a=2.5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Ketinggian vertikal adalah kira-kira 38.46 persen dari panjang kasau. Rasio ini tidak menetapkan kesesuaian struktural atau kepatuhan desain atap."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Mengevaluasi Rasio Sinus Tanjakan"
          },
          {
            "kind": "p",
            "text": "Sebuah tanjakan sederhana memiliki panjang miring 9.5 m dan ketinggian vertikal 0.75 m. Bidang miring adalah hipotenusa, [[c=9.5\\,\\text{m}]], dan ketinggian vertikal adalah sisi depan, [[a=0.75\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "Ketinggian vertikal adalah kira-kira 7.89 persen dari panjang miring, tanjakan yang landai. Rasio ini saja tidak menetapkan aksesibilitas atau kepatuhan kode bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Pengukuran Survei"
          },
          {
            "kind": "p",
            "text": "Segitiga survei sederhana memiliki jarak garis lurus 50 m dan selisih elevasi vertikal 30 m. Garis lurus adalah hipotenusa, [[c=50\\,\\text{m}]], dan selisih vertikal adalah sisi depan, [[a=30\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Selisih vertikal adalah 60 persen dari jarak garis lurus. Survei nyata mungkin memerlukan koreksi tambahan, penyesuaian tinggi instrumen, dan pengukuran yang lebih rinci."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Kawat Penahan yang Menopang Tiang"
          },
          {
            "kind": "p",
            "text": "Sebuah kawat penahan panjangnya 13 m, dan titik pemasangannya 5 m di atas permukaan tanah jangkar. Kawat adalah hipotenusa, [[c=13\\,\\text{m}]], dan jarak vertikal adalah sisi depan, [[a=5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Jarak vertikal adalah kira-kira 38.46 persen dari panjang kawat. Rasio ini tidak menetapkan tegangan kawat, kekuatan jangkar, atau keamanan struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Menghitung Rasio Sinus Balok Tangga"
          },
          {
            "kind": "p",
            "text": "Balok tangga sederhana panjangnya 5 m dan membentang setinggi 3 m secara vertikal. Balok adalah hipotenusa, [[c=5\\,\\text{m}]], dan ketinggian vertikal adalah sisi depan, [[a=3\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Ketinggian vertikal adalah 60 persen dari panjang balok diagonal. Perhitungan ini tidak memverifikasi dimensi tangga atau kepatuhan kode bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Memahami Komponen Vertikal Boom Derek"
          },
          {
            "kind": "p",
            "text": "Boom derek sederhana memiliki panjang 10 m dan komponen vertikal 8 m. Boom adalah hipotenusa, [[c=10\\,\\text{m}]], dan komponen vertikal adalah sisi depan, [[a=8\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Komponen vertikal adalah 80 persen dari panjang boom. Rasio ini tidak menetapkan kapasitas derek atau keamanan operasi."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Segmen Penerbangan Lurus Pesawat"
          },
          {
            "kind": "p",
            "text": "Untuk segmen penerbangan sederhana, pesawat menempuh 5 km sepanjang lintasan lurus sambil menambah ketinggian 1.5 km. Lintasan adalah hipotenusa, [[c=5\\,\\text{km}]], dan penambahan vertikal adalah sisi depan, [[a=1.5\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "Penambahan vertikal adalah 30 persen dari panjang lintasan lurus. Ini adalah contoh geometris ideal, bukan perhitungan navigasi penerbangan yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Penopang Mekanis Diagonal"
          },
          {
            "kind": "p",
            "text": "Sebuah penopang diagonal panjangnya 2 m dan memiliki komponen vertikal 1.6 m. Penopang adalah hipotenusa, [[c=2\\,\\text{m}]], dan komponen vertikal adalah sisi depan, [[a=1.6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Komponen vertikal adalah 80 persen dari panjang penopang. Rasio ini tidak menentukan kekuatan atau kesesuaian penopang."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Rasio Sinus Rute Pendakian"
          },
          {
            "kind": "p",
            "text": "Bagian pendakian lurus sederhana memiliki panjang jalur 100 m dan penambahan elevasi vertikal 25 m. Jalur adalah hipotenusa, [[c=100\\,\\text{m}]], dan penambahan elevasi adalah sisi depan, [[a=25\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "Penambahan elevasi adalah 25 persen dari panjang jalur lurus. Jalur pendakian sebenarnya mungkin memiliki tikungan dan kemiringan yang berubah."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Penyangga Kanopi"
          },
          {
            "kind": "p",
            "text": "Sebuah penyangga kanopi panjangnya 3 m dan memiliki komponen vertikal 1.2 m. Penyangga adalah hipotenusa, [[c=3\\,\\text{m}]], dan komponen vertikal adalah sisi depan, [[a=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "Komponen vertikal adalah 40 persen dari panjang penyangga. Perhitungan ini tidak menetapkan kesesuaian struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Garis Pandang ke Puncak Pohon"
          },
          {
            "kind": "p",
            "text": "Garis pandang sederhana ke puncak pohon berukuran 20 m. Selisih vertikal antara tinggi mata pengamat dan puncak pohon adalah 12 m. Garis pandang adalah hipotenusa, [[c=20\\,\\text{m}]], dan selisih vertikal adalah sisi depan, [[a=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Selisih vertikal adalah 60 persen dari jarak garis pandang. Hasil ini tidak memberikan total tinggi pohon di atas tanah kecuali tinggi mata pengamat dan informasi lain yang diperlukan diperhitungkan."
          }
        ],
        "closingParagraphs": [
          "Sinus adalah rasio matematis, bukan besaran fisika yang memiliki satuan. Nilai praktisnya berasal dari membandingkan komponen vertikal atau tegak lurus dengan jarak miring, menghitung komponen saat sudut diketahui, dan memverifikasi hubungan geometris. Jangan perlakukan sinus saja sebagai sertifikat keamanan struktural, kapasitas beban, aksesibilitas, atau kepatuhan rekayasa."
        ],
        "tables": [
          {
            "headers": [
              "Situasi",
              "Sisi depan [[a]]",
              "Hipotenusa [[c]]",
              "Rumus",
              "Rasio",
              "Arti"
            ],
            "rows": [
              ["Tangga", "4 m", "5 m", "4/5", "0.8", "Tinggi adalah 80% dari panjang tangga"],
              ["Kasau atap", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "Ketinggian adalah 38.46% dari panjang kasau"],
              ["Tanjakan", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "Tanjakan landai, ketinggian 7.89%"],
              ["Survei", "30 m", "50 m", "30/50", "0.6", "Elevasi adalah 60% dari jarak garis"],
              ["Kawat penahan", "5 m", "13 m", "5/13", "0.3846", "Tinggi adalah 38.46% dari panjang kawat"],
              ["Balok tangga", "3 m", "5 m", "3/5", "0.6", "Ketinggian adalah 60% dari panjang balok"],
              ["Boom derek", "8 m", "10 m", "8/10", "0.8", "Jangkauan vertikal adalah 80% dari boom"],
              ["Segmen penerbangan", "1.5 km", "5 km", "1.5/5", "0.3", "Kenaikan adalah 30% dari lintasan penerbangan"],
              ["Penopang diagonal", "1.6 m", "2 m", "1.6/2", "0.8", "Vertikal adalah 80% dari panjang penopang"],
              ["Rute pendakian", "25 m", "100 m", "25/100", "0.25", "Kenaikan adalah 25% dari panjang jalur"],
              ["Penyangga kanopi", "1.2 m", "3 m", "1.2/3", "0.4", "Vertikal adalah 40% dari penyangga"],
              ["Garis pandang", "12 m", "20 m", "12/20", "0.6", "Selisih tinggi adalah 60% dari garis pandang"]
            ]
          }
        ],
        "imgAlt": "Empat panel: rasio tangga 0.8, tanjakan 0.07895, survei 0.6, boom derek 0.8, dengan segitiga berlabel",
        "figcaption": "Empat perhitungan praktis: tangga, tanjakan, survei, dan boom derek, masing-masing dengan segitiga, rumus, dan rasionya."
      },
      "sec-angle": {
        "h2": "Memahami Hubungan antara Sinus dan Besar Sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus bertambah seiring bertambahnya sudut acuan. Geometrinya menjelaskan mengapa: saat sudut [[A]] kecil, sisi depan pendek relatif terhadap hipotenusa, sehingga rasionya mendekati 0. Saat sudut melebar, sisi depan menjadi bagian yang lebih besar dari hipotenusa, dan rasio naik menuju 1. Pada [[30^\\circ]] sinus tepat 0.5; pada [[45^\\circ]] kira-kira 0.7071; pada [[60^\\circ]] kira-kira 0.8660; dan saat sudut mendekati [[90^\\circ]], sinus mendekati 1."
          }
        ],
        "tables": [
          {
            "headers": [
              "Sudut [[A]]",
              "Rasio sinus",
              "Tafsiran"
            ],
            "rows": [
              ["[[30^\\circ]]", "0.5", "Sisi depan adalah setengah hipotenusa"],
              ["[[45^\\circ]]", "Kira-kira 0.7071", "Sisi depan adalah kira-kira 70.71% dari hipotenusa"],
              ["[[60^\\circ]]", "Kira-kira 0.8660", "Sisi depan adalah kira-kira 86.60% dari hipotenusa"],
              ["[[80^\\circ]]", "Kira-kira 0.9848", "Sisi depan adalah kira-kira 98.48% dari hipotenusa"]
            ]
          }
        ],
        "closingParagraphs": [
          "Polanya sederhana dan monoton: setiap kenaikan sudut menaikkan sinus, dan rasio tetap antara 0 dan 1 untuk setiap sudut lancip. Sinus menggambarkan bentuk segitiga, bukan ukuran mutlaknya: dua segitiga dengan sudut lancip yang sama memiliki rasio sinus yang sama meskipun panjang sisinya berbeda. Masukan [[90^\\circ]] adalah nilai acuan batas, bukan sudut lancip dalam segitiga siku-siku yang tidak degenerate."
        ],
        "imgAlt": "Tiga segitiga pada 30, 45, 60 derajat dengan nilai sinus 0.5, 0.7071, 0.8660; sinus naik saat sudut bertambah",
        "figcaption": "Saat sudut A bertambah, sisi depan menjadi bagian yang lebih besar dari hipotenusa, sehingga sin(A) naik."
      },
      "sec-hypotenuse": {
        "h2": "Cara Mencari Sisi Depan Menggunakan Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Rumus sinus dapat disusun ulang untuk mencari sisi depan saat hipotenusa dan sudut diketahui. Mulailah dengan [[\\sin(A)=a/c]] dan kalikan kedua ruas dengan [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Sisi depan sama dengan hipotenusa dikali sinus sudut. Diberi hipotenusa [[c=10\\,\\text{m}]] dan sudut [[A=30^\\circ]], dan diketahui [[\\sin(30^\\circ)=0.5]]:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "Sisi depan adalah setengah hipotenusa untuk sudut [[30^\\circ]], yang sesuai dengan geometri 30-60-90: sisi di seberang 30 derajat tepat setengah hipotenusa."
          },
          {
            "kind": "p",
            "text": "Hipotenusa dapat dicari dengan cara yang sama dengan menyusun ulang lagi:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan sisi depan [[a=6\\,\\text{m}]] dan [[A=30^\\circ]]: [[c=6/0.5]], sehingga [[\\boxed{c=12\\,\\text{m}}]]. Ini adalah penyusunan ulang matematis dari rumus yang sama. Kalkulator di halaman ini menghasilkan rasio sinus dari panjang sisi; ia tidak langsung menghitung sisi yang hilang."
          }
        ]
      },
      "sec-recover": {
        "h2": "Cara Mencari Sudut dari Rasio Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Rasio sinus dan sudut adalah besaran yang berbeda: yang satu adalah perbandingan sisi tak berdimensi, yang lain diukur dalam derajat. Saat rasio sinus diketahui dan sudut diperlukan, sinus invers dapat digunakan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Sinus invers juga disebut arcsinus. Diberi [[\\sin(A)=0.6]]:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "Sudutnya kira-kira [[36.87^\\circ]] saat kalkulator diatur ke derajat. Ini adalah perhitungan sudut yang terpisah, bukan sesuatu yang dilakukan kalkulator rasio sinus secara langsung. Sinus invers dapat memiliki beberapa solusi sudut dalam trigonometri yang lebih luas, tetapi batasan sudut lancip pada segitiga siku-siku memilih solusi lancip yang sesuai."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum dalam Menghitung Sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Sebagian besar kesalahan sinus berasal dari pecahan terbalik, sisi yang salah label, atau selip satuan. Jalani daftar ini sebelum mempercayai hasil."
          }
        ],
        "steps": [
          "<strong>Menggunakan sisi samping, bukan sisi depan.</strong> Membagi [[b/c]] menghitung kosinus. Dengan [[a=3]], [[b=4]], dan [[c=5]], kaki yang salah memberikan 0.8; kaki yang benar memberikan 0.6.",
          "<strong>Membalik rumus dan menghitung [[c/a]], bukan [[a/c]].</strong> Ini menghasilkan kosekan, bukan sinus. Dengan [[a=3]] dan [[c=5]], pecahan terbalik memberikan 1.6667, selalu di atas 1, tanda peringatan yang jelas.",
          "<strong>Tertukar antara sinus dan kosinus.</strong> Sinus menggunakan sisi depan; kosinus menggunakan sisi samping. Jika kaki yang salah berada di pembilang, jawabannya adalah kosinus, bukan sinus.",
          "<strong>Tertukar antara sinus dan kosekan.</strong> Kosekan adalah kebalikannya, hipotenusa dibagi sisi depan. Nama yang mirip menyebabkan kesalahan nyata, tetapi urutan pecahannya persis terbalik.",
          "<strong>Memasukkan sisi depan yang lebih panjang dari hipotenusa.</strong> Hipotenusa selalu sisi terpanjang. Jika [[a \\ge c]], masukan tertukar atau segitiganya mustahil.",
          "<strong>Memasukkan panjang sisi nol atau negatif.</strong> Segitiga tidak dapat memiliki sisi nol atau negatif, sehingga masukan ini menandakan kesalahan entri data atau pengukuran yang hilang, bukan kasus tepi yang valid.",
          "<strong>Mencampur satuan pengukuran.</strong> Sisi depan 3 m dengan hipotenusa 50 cm menghasilkan 6, angka yang tidak bermakna. Konversi ke satu satuan terlebih dahulu: 3 m dan 5 m memberikan 0.6 yang benar.",
          "<strong>Melaporkan rasio sinus sebagai sudut dalam derajat.</strong> Hasil 0.6 adalah rasio, bukan [[0.6^\\circ]]. Memperlakukannya sebagai derajat memasukkan omong kosong ke dalam perhitungan lanjutan.",
          "<strong>Menganggap sinus memiliki satuan fisika.</strong> Satuan saling menghilangkan dalam pembagian, sehingga \"0.6 m\" salah. Tulis angka biasa dan simpan satuan pada pengukuran masukan di tempatnya.",
          "<strong>Tertukar antara sudut acuan dan sudut siku-siku.</strong> Sinus selalu menggunakan sudut lancip. Sudut [[90^\\circ]] tidak pernah menjadi sudut acuan [[A]] dalam perhitungan ini.",
          "<strong>Membulatkan terlalu dini.</strong> Membulatkan pembagian perantara ke dua desimal lalu melanjutkan perhitungan memperbesar kesalahan. Jaga presisi penuh di setiap langkah dan bulatkan hanya jawaban akhirnya.",
          "<strong>Menganggap sinus sama untuk setiap sudut.</strong> Setiap sudut memiliki nilai sinusnya sendiri. Hasil 0.6 milik satu sudut tertentu (kira-kira 36.87 derajat), bukan milik setiap segitiga siku-siku.",
          "<strong>Menganggap nilai sinus 0.6 berarti sudutnya [[0.6^\\circ]].</strong> Rasio bukanlah ukuran derajat. Konversi dengan sinus invers jika sudutnya sendiri yang dibutuhkan.",
          "<strong>Tertukar antara sinus kebalikan dan sinus invers.</strong> [[1/\\sin(A)]] adalah kosekan, sebuah rasio; [[\\sin^{-1}]] adalah sinus invers, yang menghasilkan sudut. Nama yang mirip menyebabkan kesalahan nyata, jadi baca notasinya dengan cermat.",
          "<strong>Menganggap rasio sinus menentukan ukuran mutlak segitiga.</strong> Sinus menggambarkan bentuk, bukan ukuran: segitiga yang tak terhingga banyaknya berbagi sinus 0.6, dari sisi depan 3 cm hingga 3 km. Rasio menetapkan proporsi; panjang sebenarnya membutuhkan setidaknya satu pengukuran sisi."
        ],
        "closingParagraphs": [
          "<strong>Salah Versus Benar: Perbandingan yang Dikerjakan</strong>",
          "Diberi sisi depan [[a=3]] dan hipotenusa [[c=5]]:",
          "<strong>Salah:</strong> [[5/3\\approx1.6667]]. Ini adalah rasio kosekan, bukan rasio sinus. Pembilang dan penyebut terbalik.",
          "<strong>Benar:</strong> [[\\sin(A)=3/5=0.6]].",
          "<strong>Verifikasi:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]. Pemeriksaan kebalikan memastikan hasilnya, dan jawabannya berada antara 0 dan 1, seperti yang harus dimiliki setiap sinus yang valid."
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Keabsahan Hasil Sinus Anda",
        "blocks": [
          {
            "kind": "p",
            "text": "Segitiga siku-siku yang valid dan tidak degenerate membutuhkan sisi positif dengan hipotenusa yang selalu terpanjang, [[0 \\lt a \\lt c]], sehingga hasil sinus harus berada antara 0 dan 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Kedua pengukuran harus menggunakan satuan yang kompatibel. Hasil kurang dari atau sama dengan 0 atau lebih besar dari atau sama dengan 1 biasanya menunjukkan masukan tidak valid, sisi terbalik, atau model segitiga yang salah."
          },
          {
            "kind": "h3",
            "text": "Metode 1: Periksa Rasionya"
          },
          {
            "kind": "p",
            "text": "Verifikasi ulang [[\\sin(A)=a/c]] secara langsung. Dengan [[a=3]] dan [[c=5]]: [[\\sin(A)=3/5=0.6]]. Jika perhitungan tangan kedua tidak setuju, sebuah sisi salah dilabeli atau sebuah satuan tercampur."
          },
          {
            "kind": "h3",
            "text": "Metode 2: Periksa Teorema Pythagoras"
          },
          {
            "kind": "p",
            "text": "Jika sisi samping dibutuhkan, hitung [[b=\\sqrt{c^2-a^2}]]. Untuk [[a=3]] dan [[c=5]]: [[b=\\sqrt{25-9}=4]], dan [[3^2+4^2=5^2]]. Ini memastikan dimensi segitiga siku-siku 3-4-5. Sisi samping adalah nilai verifikasi di sini, bukan bagian dari rumus sinus utama."
          },
          {
            "kind": "h3",
            "text": "Metode 3: Periksa Menggunakan Sinus Invers"
          },
          {
            "kind": "p",
            "text": "Untuk rasio sinus 0.6: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Karena sinus berada sedikit di atas 0.5, sudutnya seharusnya sedikit di atas [[30^\\circ]]; jika tidak, label sisinya mungkin tertukar. Perbedaan kecil bisa muncul dari pembulatan."
          }
        ]
      },
      "sec-vs": {
        "h2": "Sinus vs. Kosinus, Tangen, dan Kosekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap rasio membandingkan pasangan sisi yang berbeda, menggunakan sudut acuan dan label sisi yang sama:"
          }
        ],
        "tables": [
          {
            "headers": [
              "Rasio",
              "Rumus",
              "Apa yang dibandingkan"
            ],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Sisi depan terhadap hipotenusa"],
              ["Kosinus", "cos(A) = b/c", "Sisi samping terhadap hipotenusa"],
              ["Tangen", "tan(A) = a/b", "Sisi depan terhadap sisi samping"],
              ["Kosekan", "csc(A) = c/a", "Hipotenusa terhadap sisi depan"],
              ["Sekan", "sec(A) = c/b", "Hipotenusa terhadap sisi samping"],
              ["Kotangen", "cot(A) = b/a", "Sisi samping terhadap sisi depan"]
            ]
          }
        ],
        "closingParagraphs": [
          "Sinus dan kosekan adalah pasangan kebalikan: [[\\csc(A)=1/\\sin(A)]]. Jika [[\\sin(A)=0.6]], maka [[\\csc(A)\\approx1.6667]]. Pilih sinus saat sisi depan diketahui terhadap hipotenusa, saat komponen vertikal harus dibandingkan dengan panjang miring, atau saat SOH adalah mnemonik yang cocok; pilih kosinus untuk sisi samping terhadap hipotenusa, tangen saat kedua kaki diketahui, dan kosekan saat hipotenusa dibandingkan dengan sisi depan.",
          "Untuk rasio tetangganya, lihat <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kosinus</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Tangen</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kosekan</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Sekan</a>, dan <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kotangen</a>."
        ]
      },
      "sec-related": {
        "h2": "Jelajahi Kalkulator Trigonometri Terkait",
        "related": [
          { "name": "Kalkulator Rasio Kosinus" },
          { "name": "Kalkulator Rasio Tangen" },
          { "name": "Kalkulator Rasio Kosekan" },
          { "name": "Kalkulator Rasio Sekan" },
          { "name": "Kalkulator Rasio Kotangen" },
          { "name": "Kalkulator Sudut Segitiga Siku-Siku" }
        ]
      },
      "sec-conclusion": {
        "h2": "Gunakan Rasio Sinus dengan Percaya Diri",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus adalah yang pertama dari tiga rasio utama: bagi sisi depan dengan hipotenusa dan Anda telah menggambarkan berapa bagian dari sisi terpanjang yang berada di seberang sudut. Rumus [[\\sin(A)=a/c]] hanya membutuhkan dua pengukuran, jawabannya selalu angka tak berdimensi antara 0 dan 1, dan ia bertambah seiring bertambahnya sudut acuan. Saat sisi yang hilang dibutuhkan, [[a=c\\sin(A)]] memulihkan sisi depan; saat sudut dibutuhkan, [[A=\\sin^{-1}(a/c)]] memulihkannya. Tangga, kasau, tanjakan, atau 3-4-5 dari buku teks, metodenya tidak pernah berubah: identifikasi sisi depan, identifikasi hipotenusa, bagi, dan verifikasi dengan rentang 0 hingga 1."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Apa rumus sinus untuk segitiga siku-siku?",
        "answer": "sin(A) = a / c: bagi sisi depan a dengan hipotenusa c. Dengan sisi depan 3 cm dan hipotenusa 5 cm, hasilnya adalah 3/5 = 0.6. Desimal itu adalah jawaban lengkap, rasio tak berdimensi, bukan sudut."
      },
      {
        "question": "Bagaimana cara menghitung sinus dari dua panjang sisi?",
        "answer": "Identifikasi sudut acuan A, ukur sisi depan a dan hipotenusa c dalam satuan yang sama, pastikan keduanya positif dan c lebih panjang dari a, lalu bagi: sin(A) = a / c. Di halaman ini, masukkan sisi depan di kolom pertama dan hipotenusa di kolom kedua, lalu klik Calculate sin(A)."
      },
      {
        "question": "Apa perbedaan antara sinus dan kosinus?",
        "answer": "Sinus membagi sisi depan dengan hipotenusa (a/c); kosinus membagi sisi samping dengan hipotenusa (b/c). Keduanya menggunakan hipotenusa yang sama, tetapi pembilangnya berbeda. Hasil di atas 1 berarti pecahan terbalik atau sebuah kaki salah dilabeli."
      },
      {
        "question": "Mengapa sinus kurang dari 1 untuk sudut lancip dalam segitiga siku-siku?",
        "answer": "Dalam segitiga siku-siku yang valid dan tidak degenerate, hipotenusa selalu lebih panjang dari kedua kaki, sehingga 0 < a < c. Membagi panjang yang lebih kecil dengan yang lebih besar selalu memberikan hasil di bawah 1: 0 < a/c < 1 untuk setiap sudut acuan lancip."
      },
      {
        "question": "Bisakah sinus sama dengan 1 untuk sudut lancip dalam segitiga siku-siku yang valid?",
        "answer": "Tidak. Sinus tepat 1 akan mensyaratkan sisi depan sama dengan hipotenusa, yang meruntuhkan segitiga menjadi garis vertikal tanpa lebar. Nilai 1 adalah nilai batas yang didekati saat sudut A mendekati 90 derajat, bukan nilai yang dihasilkan segitiga sesungguhnya."
      },
      {
        "question": "Apa arti nilai sinus 0.6?",
        "answer": "Sisi depan adalah 60 persen dari hipotenusa. Dalam segitiga 3-4-5, sisi di seberang sudut A adalah 3 satuan sedangkan hipotenusanya 5 satuan, sehingga sin(A) = 3/5 = 0.6. Ia menggambarkan bentuk segitiga dan bukan sudut 0.6 derajat."
      },
      {
        "question": "Apakah rasio sinus memiliki satuan pengukuran?",
        "answer": "Tidak. Kedua masukan adalah panjang yang diukur dalam satuan yang sama, sehingga satuannya saling menghilangkan: 3 m / 5 m = 0.6, persis seperti 300 cm / 500 cm = 0.6. Laporkan sinus sebagai angka biasa, jangan pernah dengan derajat, meter, atau kaki."
      },
      {
        "question": "Bagaimana cara mencari sudut dari rasio sinus?",
        "answer": "Terapkan sinus invers pada rasio: A = sin^-1(a/c). Untuk sin(A) = 0.6, A = sin^-1(0.6), kira-kira 36.87 derajat. Atur kalkulator ilmiah Anda ke mode derajat terlebih dahulu. Kalkulator di halaman ini menghasilkan rasio, bukan sudut."
      },
      {
        "question": "Bagaimana cara mencari sisi depan menggunakan sinus?",
        "answer": "Susun ulang rumusnya menjadi a = c * sin(A). Jika hipotenusanya 10 m dan sudut A 30 derajat, sin(30 deg) = 0.5, sehingga a = 10 * 0.5 = 5 m. Ini adalah penyusunan ulang manual; kalkulator di halaman ini menghasilkan rasio dari panjang sisi, bukan sisi yang hilang."
      },
      {
        "question": "Apa perbedaan antara sinus dan kosekan?",
        "answer": "Sinus membagi sisi depan dengan hipotenusa (a/c); kosekan adalah kebalikannya, hipotenusa dibagi sisi depan (c/a). Jika sin(A) = 0.6, maka csc(A) = 1/0.6, kira-kira 1.6667. Keduanya adalah kebalikan, bukan rumus yang dapat dipertukarkan."
      },
      {
        "question": "Bisakah saya menghitung sinus tanpa mengetahui sisi samping?",
        "answer": "Ya. Rumus sinus utama hanya menggunakan sisi depan dan hipotenusa, sehingga sisi samping tidak pernah masuk perhitungan. Sisi samping menjadi berguna hanya saat teorema Pythagoras digunakan untuk memverifikasi segitiga atau saat kosinus, tangen, atau sekan masuk ke dalam pekerjaan."
      },
      {
        "question": "Bagaimana sinus digunakan dalam pengukuran praktis?",
        "answer": "Sinus membandingkan komponen vertikal atau tegak lurus dengan panjang miring: tangga terhadap tinggi dindingnya, kasau atap terhadap ketinggian vertikalnya, tanjakan terhadap ketinggiannya, atau garis survei terhadap selisih elevasinya. Rasio memberi tahu Anda berapa bagian dari jarak miring yang vertikal, yang berguna untuk tinggi, jarak bebas, dan perhitungan komponen."
      }
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "relatedHeading": "Jelajahi Kalkulator Trigonometri Terkait"
  }
  ,
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "sec-intro": "ما هي حاسبة نسبة الجيب؟",
      "sec-triangle": "فهم الضلع المقابل والوتر",
      "sec-whatis": "فهم نسبة الجيب",
      "sec-formula": "كيف تعمل صيغة الجيب",
      "sec-howto": "كيفية استخدام حاسبة نسبة الجيب",
      "sec-examples": "أمثلة خطوة بخطوة لحساب الجيب",
      "sec-applications": "أمثلة واقعية لاستخدام نسبة الجيب",
      "sec-angle": "فهم العلاقة بين الجيب وحجم الزاوية",
      "sec-hypotenuse": "كيفية إيجاد الضلع المقابل باستخدام الجيب",
      "sec-recover": "كيفية إيجاد زاوية من نسبة جيب",
      "sec-mistakes": "أخطاء شائعة عند حساب الجيب",
      "sec-verify": "كيفية التحقق من صحة نتيجة الجيب",
      "sec-vs": "الجيب مقابل جيب التمام والظل وقاطع التمام",
      "sec-related": "استكشف الحاسبات المثلثية ذات الصلة",
      "sec-faq": "الأسئلة الشائعة"
    },
    "sections": {
      "sec-intro": {
        "h2": "ما هي حاسبة نسبة الجيب؟",
        "blocks": [
          {
            "kind": "p",
            "text": "تجيب حاسبة نسبة الجيب عن سؤال واحد: بالنسبة لزاوية حادة في مثلث قائم الزاوية، كيف يقارن الضلع المقابل للزاوية بأطول ضلع؟ أدخل الضلع المقابل والوتر، فتقسم الأداة الضلع المقابل على الوتر، وتعيد [[\\sin(A)=a/c]]. مثلث قائم الزاوية له ضلع مقابل 3 سم ووتر 5 سم، إذن [[\\sin(A)=3/5=0.6]]. هذا العدد 0.6 هو نسبة الجيب: يخبرك أن الضلع المقابل يساوي 60 بالمئة من الوتر. إنه ليس زاوية، فلا تقرأه أبدا على أنه [[0.6^\\circ]]. الضلع المجاور لا يدخل في هذا الحساب أبدا؛ الضلع المقابل والوتر كافيان وحدهما. الجيب من النسب المثلثية الأساسية، وقوته أنه يقارن طولين بطريقة تعتمد على الزاوية فقط، لا على حجم المثلث. وإذا كنت تحتاج الزاوية بالدرجات، فالجيب العكسي يحول النسبة إلى درجات."
          }
        ]
      },
      "sec-triangle": {
        "h2": "فهم الضلع المقابل والوتر",
        "blocks": [
          {
            "kind": "h3",
            "text": "ما هو المثلث القائم الزاوية؟"
          },
          {
            "kind": "p",
            "text": "المثلث القائم الزاوية له زاوية واحدة تساوي بالضبط [[90^\\circ]]، وهي الزاوية بين خطين متعامدين، مثل جدار يلتقي بأرضية مستوية. الوتر يقع مقابل تلك الزاوية القائمة وهو دائما أطول ضلع، لأنه يجب أن يمتد قطريا عبر الزاوية بكاملها. الزاويتان الأخريان تتقاسمان التسعين درجة المتبقية، فكلتاهما حادة. الضلعان يلتقيان عند الزاوية القائمة، متعامدين، وعلاقتهما بالوتر هي ما يجعل حساب المثلثات القائم ممكنا."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المقابل؟"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل [[a]] هو الضلع الذي يقع مباشرة مقابل الزاوية المرجعية [[A]]، وهو الضلع الوحيد الذي لا يلامس رأسها أبدا. في المسائل العملية يلعب غالبا دور الارتفاع العمودي أو فرق الارتفاع أو المركبة العمودية: ارتفاع الجدار الذي تبلغه السلم، أو الارتفاع العمودي لمنحدر، أو فرق الارتفاع في المساحة. أي ضلع يعد مقابلا يعتمد على الزاوية المرجعية المختارة، فالانتقال من الزاوية [[A]] إلى الزاوية [[C]] يبدل تسميتي المقابل والمجاور. وهو يظهر في بسط صيغة الجيب لأن الجيب يقيس حجم ذلك الضلع عبر الزاوية بالنسبة إلى الوتر."
          },
          {
            "kind": "h3",
            "text": "ما هو الوتر؟"
          },
          {
            "kind": "p",
            "text": "الوتر [[c]] هو الضلع المقابل للزاوية القائمة: في أي رسم يقابل المربع الصغير الذي يعلّم زاوية [[90^\\circ]]، وهو أطول من أي من الضلعين. في المسائل العملية يلعب غالبا دور الطول المائل: سلم، أو سطح منحدر، أو عارضة سقف، أو كبل، أو دعامة قطرية، أو مسار مستقيم. وهو يظهر في مقام صيغة الجيب، ولهذا تأتي كل قيمة جيب بين 0 و1: البسط دائما ضلع حقيقي أقصر من المقام."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المجاور؟"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور [[b]] هو الضلع الذي يلامس الزاوية المرجعية [[A]] دون أن يكون الوتر. لا دور له في الحساب الأساسي للجيب، ولهذا لا تطلبه الحاسبة أبدا. ويصبح مفيدا عند حساب جيب التمام أو الظل أو ضلع مفقود، وعند استخدام نظرية فيثاغورس للتحقق من أن الطولين المعروفين يشكلان مثلثا قائما حقيقيا."
          }
        ],
        "imgAlt": "مثلث قائم الزاوية بزاوية A أسفل اليسار، الضلع المقابل الذهبي a، والوتر الأزرق c، sin(A)=a/c",
        "figcaption": "تقع الزاوية A أسفل اليسار؛ يستخدم الجيب الضلع المقابل الذهبي a والوتر الأزرق c، لا الضلع المجاور b."
      },
      "sec-whatis": {
        "h2": "فهم نسبة الجيب",
        "blocks": [
          {
            "kind": "p",
            "text": "جيب الزاوية الحادة يقارن الضلع الواقع مباشرة مقابل تلك الزاوية بأطول ضلع في المثلث:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "اقرأ [[\\sin(A)]] هكذا: جيب الزاوية A. البسط [[a]] هو الضلع المقابل؛ والمقام [[c]] هو الوتر. يجيب الكسر عن سؤال واحد ملموس: ما مقدار ما يشكله الضلع المقابل من الوتر؟ وبما أن المدخلين طولان مقاسان بالوحدة نفسها، فالناتج عدد مجرد، وهذا العدد يعتمد على الزاوية فقط، ولا يعتمد أبدا على حجم المثلث."
          },
          {
            "kind": "h3",
            "text": "فهم SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "يتذكر الطلاب النسب الرئيسية الثلاث بالوسيلة التذكيرية SOH-CAH-TOA:"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> الجيب = المقابل / الوتر. <strong>CAH:</strong> جيب التمام = المجاور / الوتر. <strong>TOA:</strong> الظل = المقابل / المجاور."
          },
          {
            "kind": "p",
            "text": "تتوافق SOH مباشرة مع صيغة الجيب [[\\sin(A)=a/c]]. تنجح الوسيلة التذكيرية لأنها تربط كل اسم نسبة بالضلعين اللذين تحتاجهما، بالترتيب الصحيح: بالنسبة للجيب، يذهب الضلع المقابل إلى الأعلى ويذهب الوتر إلى الأسفل. وبعد تسمية الضلعين تسمية صحيحة، تحول الوسيلة التذكيرية سؤال أي ضلع يذهب أين من مسألة حفظ إلى مسألة بحث."
          },
          {
            "kind": "h3",
            "text": "لماذا الجيب نسبة؟"
          },
          {
            "kind": "p",
            "text": "قسمة طولين تنتج عددا بلا أبعاد لأن الوحدات تلغي بعضها:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "تلغي الأمتار بعضها وتبقى 0.6. واستخدام 300 سم و500 سم يعطي الناتج نفسه تماما، لأن الطولين يتدرجان معا. الشرط الوحيد هو وحدات متوافقة: يجب أن يستخدم القياسان الوحدة نفسها، أو يجب تحويل أحدهما قبل القسمة. النسبة إذن خاصية للزاوية، لا لمسطرة معينة استخدمت لقياس المثلث."
          },
          {
            "kind": "h3",
            "text": "ماذا تعني قيمة جيب 0.6؟"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] تعني أن الضلع المقابل يساوي 60 بالمئة من الوتر. المثلث 3-4-5 هو المرجع الكلاسيكي: [[\\sin(A)=3/5=0.6]]. يكشف العدد شكل المثلث بنظرة: جيب قريب من 1 يعني أن الضلع المقابل يكاد يساوي الوتر والزاوية شديدة الانحدار؛ وجيب قريب من 0 يعني أن الضلع المقابل قصير بالنسبة إلى الوتر والزاوية ضحلة. لا شيء من هذا يوحي بأن 0.6 زاوية؛ إنها نسبة، والجيب العكسي وحده يحولها إلى درجات."
          },
          {
            "kind": "h3",
            "text": "لماذا يقع الجيب بين 0 و1"
          },
          {
            "kind": "p",
            "text": "الوتر أطول من الضلع المقابل، إذن [[0 \\lt a \\lt c]]، وبالتالي:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "المثلث القائم الزاوية الصحيح وغير المنهار لا يمكن أن تكون نسبة جيبه تساوي بالضبط 0 أو بالضبط 1 لزاويته الحادة. تقترب القيمة من 0 كلما اقتربت الزاوية من [[0^\\circ]]، لأن الضلع المقابل يتقلص نحو العدم؛ وتقترب من 1 كلما اقتربت الزاوية من [[90^\\circ]]، لأن الضلع المقابل يكبر حتى يكاد يساوي الوتر. لا تتحقق أي من القيمتين الحدّيتين لزاوية حادة في مثلث حقيقي."
          },
          {
            "kind": "h3",
            "text": "الجيب مقابل جيب التمام"
          },
          {
            "kind": "p",
            "text": "تشترك النسبتان في الوتر نفسه لكنهما تستخدمان بسطين مختلفين:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] و [[\\cos(A)=b/c]]."
          },
          {
            "kind": "p",
            "text": "يستخدم الجيب الضلع المقابل، أي الضلع عبر الزاوية؛ ويستخدم جيب التمام الضلع المجاور، أي الضلع بجانب الزاوية. ناتج فوق 1 يعني أن الكسر انقلب أو أن الوتر وضع في البسط. الجيب ليس مقلوب جيب التمام: مقلوب الجيب هو قاطع التمام."
          }
        ],
        "imgAlt": "ثلاث خطوات: سم a=3 وb=4 وc=5 على مثلث، وطبق sin(A)=a/c، واحصل على 0.6 أي 60 بالمئة",
        "figcaption": "حدد الأضلاع، وطبق الصيغة، واحسب: الضلع المقابل يساوي 60 بالمئة من الوتر."
      },
      "sec-formula": {
        "h2": "كيف تعمل صيغة الجيب",
        "blocks": [
          {
            "kind": "p",
            "text": "تتبع الصيغة تسلسلا منطقيا. ابدأ بالتعريف بالكلمات:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "ثم استخدم ترميز الصفحة الحالي، مع [[a]] للضلع المقابل و [[c]] للوتر:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل في البسط لأن الجيب يقيس حجم ذلك الضلع بالنسبة إلى الوتر؛ والوتر في المقام لأنه الطول المرجعي الذي يقاس عليه كل ضلع آخر. الترتيب ثابت: البسط يسأل كم حجم هذا الضلع؟ والمقام يجيب: بالنسبة إلى ماذا؟"
          },
          {
            "kind": "h3",
            "text": "مثال محلول بالكامل: مثلث قائم الزاوية 3-4-5"
          },
          {
            "kind": "p",
            "text": "المعطى [[a=3\\,\\text{cm}]]، و [[b=4\\,\\text{cm}]]، و [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "<strong>الخطوة 1:</strong> اكتب الصيغة. [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>الخطوة 2:</strong> عوّض القيم المعروفة. [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>الخطوة 3:</strong> اقسم. [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>الخطوة 4:</strong> فسّر الناتج. الضلع المقابل يساوي 60 بالمئة من الوتر."
          },
          {
            "kind": "p",
            "text": "<strong>الخطوة 5:</strong> تحقق من المثلث. [[3^2+4^2=5^2]]، و [[9+16=25]]. يؤكد فحص فيثاغورس أن أطوال الأضلاع هذه تشكل مثلثا قائما، فنتيجة الجيب جديرة بالثقة."
          },
          {
            "kind": "h3",
            "text": "توضيح مهم"
          },
          {
            "kind": "p",
            "text": "إذا كان القارئ يريد الزاوية لا نسبة جيبها، فالجيب العكسي لازم: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. يسمى الجيب العكسي أيضا قوس الجيب، وهو عملية منفصلة عن حساب نسبة الجيب. حاسبة نسبة الجيب الحالية تحسب النسبة من طولي ضلعين؛ ولا تعيد الزاوية مباشرة."
          }
        ]
      },
      "sec-howto": {
        "h2": "كيفية استخدام حاسبة نسبة الجيب",
        "blocks": [
          {
            "kind": "p",
            "text": "تعكس الحاسبة الصيغة تماما: مدخلان، وزر واحد، ونسبة واحدة. امش في الواجهة بالترتيب."
          }
        ],
        "steps": [
          "<strong>حدد الزاوية المرجعية [[A]].</strong> كل حساب جيب مرتكز على زاوية حادة واحدة؛ والضلع المقابل معرف بالنسبة إليها.",
          "<strong>حدد الضلع المقابل [[a]]، الواقع مباشرة مقابل الزاوية [[A]].</strong> إنه الضلع الذي لا يلامس رأس الزاوية أبدا.",
          "<strong>حدد الوتر [[c]]، المقابل للزاوية القائمة وأطول ضلع.</strong> إنه يقابل المربع الصغير الذي يعلّم زاوية [[90^\\circ]].",
          "<strong>احصل على طولي الضلعين أو قسهما.</strong> استخدم شريط قياس، أو بعدا من مخطط، أو قيما من نص المسألة.",
          "<strong>أدخل طول الضلع المقابل في حقل الإدخال الأول.</strong> هذا يصبح البسط [[a]].",
          "<strong>أدخل طول الوتر في حقل الإدخال الثاني.</strong> هذا يصبح المقام [[c]].",
          "<strong>اختر وحدات قياس متوافقة باستخدام محددات الوحدات المتاحة.</strong> أمتار مع أمتار، وسنتيمترات مع سنتيمترات؛ فالوحدات المختلطة تعطي نسبة بلا معنى.",
          "<strong>تأكد أن القياسين موجبان.</strong> الأطوال الصفرية أو السالبة لا يمكن أن تشكل مثلثا.",
          "<strong>تحقق أن الوتر أطول من الضلع المقابل.</strong> إذا كان [[a \\ge c]]، فالمدخلات متبادلة أو المثلث مستحيل.",
          "<strong>انقر Calculate sin(A).</strong> تقسم الأداة الضلع المقابل على الوتر.",
          "<strong>اقرأ نسبة الجيب الناتجة.</strong> إنها عدد عشري مجرد، لا زاوية ولا طول.",
          "<strong>تأكد أن الناتج أكبر من 0 وأقل من 1.</strong> بالنسبة لمثلث قائم صحيح وغير منهار بزاوية مرجعية حادة، هذا هو النطاق القانوني الوحيد.",
          "<strong>استخدم Reset عندما تريد مسح المدخلات وبدء حساب آخر.</strong>"
        ],
        "closingParagraphs": [
          "لا تحتاج الحاسبة الضلع المجاور ولا مدخل زاوية. إنها تجري القسمة ولا شيء غيرها: لا سجل محفوظ، ولا رسوم بيانية، ولا أوضاع خفية."
        ]
      },
      "sec-examples": {
        "h2": "أمثلة خطوة بخطوة لحساب الجيب",
        "blocks": [
          {
            "kind": "h3",
            "text": "المثال 1: مثلث قائم الزاوية 3-4-5"
          },
          {
            "kind": "p",
            "text": "المعطى [[a=3\\,\\text{cm}]]، و [[b=4\\,\\text{cm}]]، و [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل يساوي 60 بالمئة من الوتر."
          },
          {
            "kind": "h3",
            "text": "المثال 2: مثلث قائم الزاوية 5-12-13"
          },
          {
            "kind": "p",
            "text": "المعطى [[a=5\\,\\text{m}]]، و [[b=12\\,\\text{m}]]، و [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل يساوي نحو 38.46 بالمئة من الوتر."
          },
          {
            "kind": "h3",
            "text": "المثال 3: مثلث 30-60-90"
          },
          {
            "kind": "p",
            "text": "لزاوية مرجعية [[A=30^\\circ]]، الضلع المقابل يساوي نصف الوتر. استخدم [[a=1\\,\\text{cm}]]، و [[b=\\sqrt{3}\\,\\text{cm}]]، و [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "هذه نتيجة زاوية خاصة مفيدة: عند 30 درجة يكون الضلع المقابل نصف الوتر تماما، ولهذا يظهر هذا المثلث في كثير من مسائل الكتب المدرسية."
          },
          {
            "kind": "h3",
            "text": "المثال 4: مثلث 45-45-90"
          },
          {
            "kind": "p",
            "text": "المعطى [[a=1\\,\\text{cm}]]، و [[b=1\\,\\text{cm}]]، و [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "الضلعان المتساويان ينتجان قيمتي جيب وجيب تمام متساويتين للزاويتين الحادتين: عند 45 درجة تواجه كل زاوية حادة ضلعا يساوي 1 ووترا يساوي [[\\sqrt{2}]]، فيتطابق الجيب وجيب التمام."
          }
        ]
      },
      "sec-applications": {
        "h2": "أمثلة واقعية لاستخدام نسبة الجيب",
        "blocks": [
          {
            "kind": "p",
            "text": "يذكر كل مثال الموقف، ويحدد الضلع المقابل والوتر، ويعوض بهما في الصيغة، ويفسر الناتج بلغة بسيطة."
          },
          {
            "kind": "h3",
            "text": "المثال 5: حساب نسبة جيب سلم"
          },
          {
            "kind": "p",
            "text": "سلم طوله 5 م يبلغ 4 م أعلى جدار عمودي. الزاوية المرجعية [[A]] بين السلم والأرض الأفقية. السلم هو الوتر، [[c=5\\,\\text{m}]]، والارتفاع العمودي هو الضلع المقابل، [[a=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "الارتفاع العمودي يساوي 80 بالمئة من طول السلم. تصف النسبة هندسة السلم ولا تثبت ما إذا كان السلم موضوعا بأمان."
          },
          {
            "kind": "h3",
            "text": "المثال 6: حساب نسبة جيب عارضة سقف"
          },
          {
            "kind": "p",
            "text": "عارضة سقف طولها المائل 6.5 م وارتفاعها العمودي 2.5 م. العارضة هي الوتر، [[c=6.5\\,\\text{m}]]، والارتفاع العمودي هو الضلع المقابل، [[a=2.5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "الارتفاع العمودي يساوي نحو 38.46 بالمئة من طول العارضة. لا تثبت النسبة الملاءمة الإنشائية ولا مطابقة تصميم السقف."
          },
          {
            "kind": "h3",
            "text": "المثال 7: تقييم نسبة جيب منحدر"
          },
          {
            "kind": "p",
            "text": "منحدر مبسط طوله المائل 9.5 م وارتفاعه العمودي 0.75 م. المنحدر هو الوتر، [[c=9.5\\,\\text{m}]]، والارتفاع العمودي هو الضلع المقابل، [[a=0.75\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "الارتفاع العمودي يساوي نحو 7.89 بالمئة من الطول المائل، وهو منحدر لطيف. هذه النسبة وحدها لا تثبت إمكانية الوصول ولا مطابقة كود البناء."
          },
          {
            "kind": "h3",
            "text": "المثال 8: قياس مساحي"
          },
          {
            "kind": "p",
            "text": "مثلث مساحي مبسط له مسافة خط مستقيم 50 م وفرق ارتفاع عمودي 30 م. الخط المستقيم هو الوتر، [[c=50\\,\\text{m}]]، والفرق العمودي هو الضلع المقابل، [[a=30\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "الفرق العمودي يساوي 60 بالمئة من مسافة الخط المستقيم. قد تتطلب المساحة الحقيقية تصحيحات إضافية، وتعديلات لارتفاع الجهاز، وقياسات أكثر تفصيلا."
          },
          {
            "kind": "h3",
            "text": "المثال 9: سلك شد يدعم عمودا"
          },
          {
            "kind": "p",
            "text": "سلك شد طوله 13 م، ونقطة تثبيته أعلى بمقدار 5 م من مستوى مرساة الأرض. السلك هو الوتر، [[c=13\\,\\text{m}]]، والفصل العمودي هو الضلع المقابل، [[a=5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "الفصل العمودي يساوي نحو 38.46 بالمئة من طول السلك. لا تثبت النسبة شد السلك ولا قوة المرساة ولا السلامة الإنشائية."
          },
          {
            "kind": "h3",
            "text": "المثال 10: حساب نسبة جيب دعامة درج"
          },
          {
            "kind": "p",
            "text": "دعامة درج مبسطة طولها 5 م وتمتد بارتفاع عمودي 3 م. الدعامة هي الوتر، [[c=5\\,\\text{m}]]، والارتفاع العمودي هو الضلع المقابل، [[a=3\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "الارتفاع العمودي يساوي 60 بالمئة من طول الدعامة القطرية. لا يتحقق الحساب من أبعاد الدرج ولا من مطابقة كود البناء."
          },
          {
            "kind": "h3",
            "text": "المثال 11: فهم المركبة العمودية لذراع رافعة"
          },
          {
            "kind": "p",
            "text": "ذراع رافعة مبسط طوله 10 م ومركبته العمودية 8 م. الذراع هو الوتر، [[c=10\\,\\text{m}]]، والمركبة العمودية هي الضلع المقابل، [[a=8\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "المركبة العمودية تساوي 80 بالمئة من طول الذراع. لا تثبت النسبة قدرة الرافعة ولا سلامة التشغيل."
          },
          {
            "kind": "h3",
            "text": "المثال 12: مقطع طيران مستقيم لطائرة"
          },
          {
            "kind": "p",
            "text": "لمقطع طيران مبسط، تقطع طائرة 5 كم على مسار مستقيم بينما تكسب 1.5 كم في الارتفاع. المسار هو الوتر، [[c=5\\,\\text{km}]]، والكسب العمودي هو الضلع المقابل، [[a=1.5\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "الكسب العمودي يساوي 30 بالمئة من طول المسار المستقيم. هذا مثال هندسي مثالي، لا حساب ملاحة طيران كامل."
          },
          {
            "kind": "h3",
            "text": "المثال 13: دعامة ميكانيكية قطرية"
          },
          {
            "kind": "p",
            "text": "دعامة قطرية طولها 2 م ومركبتها العمودية 1.6 م. الدعامة هي الوتر، [[c=2\\,\\text{m}]]، والمركبة العمودية هي الضلع المقابل، [[a=1.6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "المركبة العمودية تساوي 80 بالمئة من طول الدعامة. لا تحدد النسبة قوة الدعامة ولا ملاءمتها."
          },
          {
            "kind": "h3",
            "text": "المثال 14: نسبة جيب مسار مشي"
          },
          {
            "kind": "p",
            "text": "مقطع مشي مستقيم مبسط طول مساره 100 م وكسب ارتفاعه العمودي 25 م. المسار هو الوتر، [[c=100\\,\\text{m}]]، وكسب الارتفاع هو الضلع المقابل، [[a=25\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "كسب الارتفاع يساوي 25 بالمئة من طول المسار المستقيم. قد تحتوي مسارات المشي الفعلية على منحنيات وتدرجات متغيرة."
          },
          {
            "kind": "h3",
            "text": "المثال 15: دعامة مظلة"
          },
          {
            "kind": "p",
            "text": "دعامة مظلة طولها 3 م ومركبتها العمودية 1.2 م. الدعامة هي الوتر، [[c=3\\,\\text{m}]]، والمركبة العمودية هي الضلع المقابل، [[a=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "المركبة العمودية تساوي 40 بالمئة من طول الدعامة. لا يثبت الحساب الملاءمة الإنشائية."
          },
          {
            "kind": "h3",
            "text": "المثال 16: خط نظر إلى قمة شجرة"
          },
          {
            "kind": "p",
            "text": "خط نظر مبسط إلى قمة شجرة يبلغ 20 م. الفرق العمودي بين مستوى عين المراقب وقمة الشجرة 12 م. خط النظر هو الوتر، [[c=20\\,\\text{m}]]، والفرق العمودي هو الضلع المقابل، [[a=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "الفرق العمودي يساوي 60 بالمئة من مسافة خط النظر. لا يعطي الناتج الارتفاع الكلي للشجرة فوق الأرض ما لم يؤخذ ارتفاع عين المراقب والمعلومات الضرورية الأخرى في الحسبان."
          }
        ],
        "closingParagraphs": [
          "الجيب نسبة رياضية، لا كمية فيزيائية لها وحدات. تأتي قيمته العملية من مقارنة مركبة عمودية أو متعامدة بمسافة مائلة، وحساب المركبات عند معرفة الزاوية، والتحقق من العلاقات الهندسية. لا تعامل الجيب وحده شهادة على السلامة الإنشائية أو قدرة التحميل أو إمكانية الوصول أو المطابقة الهندسية."
        ],
        "tables": [
          {
            "headers": [
              "الموقف",
              "المقابل [[a]]",
              "الوتر [[c]]",
              "الصيغة",
              "النسبة",
              "المعنى"
            ],
            "rows": [
              ["سلم", "4 m", "5 m", "4/5", "0.8", "الارتفاع 80% من طول السلم"],
              ["عارضة سقف", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "الارتفاع 38.46% من طول العارضة"],
              ["منحدر", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "منحدر لطيف، ارتفاع 7.89%"],
              ["مساحة", "30 m", "50 m", "30/50", "0.6", "الارتفاع 60% من مسافة الخط"],
              ["سلك شد", "5 m", "13 m", "5/13", "0.3846", "الارتفاع 38.46% من طول السلك"],
              ["دعامة درج", "3 m", "5 m", "3/5", "0.6", "الارتفاع 60% من طول الدعامة"],
              ["ذراع رافعة", "8 m", "10 m", "8/10", "0.8", "المدى العمودي 80% من الذراع"],
              ["مقطع طيران", "1.5 km", "5 km", "1.5/5", "0.3", "الكسب 30% من مسار الطيران"],
              ["دعامة قطرية", "1.6 m", "2 m", "1.6/2", "0.8", "العمودي 80% من طول الدعامة"],
              ["مسار مشي", "25 m", "100 m", "25/100", "0.25", "الكسب 25% من طول المسار"],
              ["دعامة مظلة", "1.2 m", "3 m", "1.2/3", "0.4", "العمودي 40% من الدعامة"],
              ["خط نظر", "12 m", "20 m", "12/20", "0.6", "فرق الارتفاع 60% من خط النظر"]
            ]
          }
        ],
        "imgAlt": "أربع لوحات: نسبة سلم 0.8، ومنحدر 0.07895، ومساحة 0.6، وذراع رافعة 0.8، مع مثلثات مسماة",
        "figcaption": "أربع حسابات عملية: سلم ومنحدر ومساحة وذراع رافعة، لكل منها مثلثه وصيغته ونسبته."
      },
      "sec-angle": {
        "h2": "فهم العلاقة بين الجيب وحجم الزاوية",
        "blocks": [
          {
            "kind": "p",
            "text": "يزداد الجيب كلما زادت الزاوية المرجعية. وتفسر الهندسة السبب: عندما تكون الزاوية [[A]] صغيرة، يكون الضلع المقابل قصيرا بالنسبة إلى الوتر، فتقع النسبة قرب 0. وكلما اتسعت الزاوية، أصبح الضلع المقابل حصة أكبر من الوتر، وتصعد النسبة نحو 1. عند [[30^\\circ]] يكون الجيب 0.5 تماما؛ وعند [[45^\\circ]] نحو 0.7071؛ وعند [[60^\\circ]] نحو 0.8660؛ وكلما اقتربت الزاوية من [[90^\\circ]]، اقترب الجيب من 1."
          }
        ],
        "tables": [
          {
            "headers": [
              "الزاوية [[A]]",
              "نسبة الجيب",
              "التفسير"
            ],
            "rows": [
              ["[[30^\\circ]]", "0.5", "الضلع المقابل يساوي نصف الوتر"],
              ["[[45^\\circ]]", "نحو 0.7071", "الضلع المقابل يساوي نحو 70.71% من الوتر"],
              ["[[60^\\circ]]", "نحو 0.8660", "الضلع المقابل يساوي نحو 86.60% من الوتر"],
              ["[[80^\\circ]]", "نحو 0.9848", "الضلع المقابل يساوي نحو 98.48% من الوتر"]
            ]
          }
        ],
        "closingParagraphs": [
          "النمط بسيط ورتيب: كل زيادة في الزاوية ترفع الجيب، وتبقى النسبة بين 0 و1 لكل زاوية حادة. يصف الجيب شكل المثلث لا حجمه المطلق: مثلثان لهما الزاوية الحادة نفسها لهما نسبة الجيب نفسها حتى لو اختلفت أطوال أضلاعهما. إدخال [[90^\\circ]] قيمة مرجعية حدّية، لا زاوية حادة في مثلث قائم غير منهار."
        ],
        "imgAlt": "ثلاثة مثلثات عند 30 و45 و60 درجة بقيم جيب 0.5 و0.7071 و0.8660؛ يرتفع الجيب مع نمو الزاوية",
        "figcaption": "كلما كبرت الزاوية A، أصبح الضلع المقابل حصة أكبر من الوتر، فيرتفع sin(A)."
      },
      "sec-hypotenuse": {
        "h2": "كيفية إيجاد الضلع المقابل باستخدام الجيب",
        "blocks": [
          {
            "kind": "p",
            "text": "يمكن إعادة ترتيب صيغة الجيب لإيجاد الضلع المقابل عندما يكون الوتر والزاوية معروفين. ابدأ بـ [[\\sin(A)=a/c]] واضرب الطرفين في [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل يساوي الوتر مضروبا في جيب الزاوية. بوتر [[c=10\\,\\text{m}]] وزاوية [[A=30^\\circ]]، ومعرفة أن [[\\sin(30^\\circ)=0.5]]:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل يساوي نصف الوتر لزاوية [[30^\\circ]]، وهو ما يطابق هندسة 30-60-90: الضلع المقابل لـ 30 درجة يساوي نصف الوتر تماما."
          },
          {
            "kind": "p",
            "text": "يمكن إيجاد الوتر بالطريقة نفسها بإعادة الترتيب مرة أخرى:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "بضلع مقابل [[a=6\\,\\text{m}]] و [[A=30^\\circ]]: [[c=6/0.5]]، إذن [[\\boxed{c=12\\,\\text{m}}]]. هذه إعادة ترتيبات رياضية للصيغة نفسها. حاسبة هذه الصفحة تعيد نسبة الجيب من أطوال الأضلاع؛ ولا تحسب الأضلاع المفقودة مباشرة."
          }
        ]
      },
      "sec-recover": {
        "h2": "كيفية إيجاد زاوية من نسبة جيب",
        "blocks": [
          {
            "kind": "p",
            "text": "نسبة الجيب والزاوية كميتان مختلفتان: إحداهما مقارنة أضلاع بلا أبعاد، والأخرى تقاس بالدرجات. عندما تكون نسبة الجيب معروفة والزاوية مطلوبة، يمكن استخدام الجيب العكسي:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "يسمى الجيب العكسي أيضا قوس الجيب. بمعرفة [[\\sin(A)=0.6]]:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "الزاوية نحو [[36.87^\\circ]] عندما تكون الحاسبة مضبوطة على الدرجات. هذا حساب زاوية منفصل، وليس شيئا تؤديه حاسبة نسبة الجيب مباشرة. قد يكون للجيب العكسي حلول زاوية متعددة في حساب المثلثات الأوسع، لكن قيد الزاوية الحادة في المثلث القائم يختار الحل الحاد المناسب."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "أخطاء شائعة عند حساب الجيب",
        "blocks": [
          {
            "kind": "p",
            "text": "معظم أخطاء الجيب تأتي من كسر مقلوب، أو ضلع مسمى خطأ، أو زلة وحدات. مر على هذه القائمة قبل الوثوق بالناتج."
          }
        ],
        "steps": [
          "<strong>استخدام الضلع المجاور بدلا من المقابل.</strong> قسمة [[b/c]] تحسب جيب التمام. مع [[a=3]]، و [[b=4]]، و [[c=5]]، يعطي الضلع الخطأ 0.8؛ والضلع الصحيح يعطي 0.6.",
          "<strong>عكس الصيغة وحساب [[c/a]] بدلا من [[a/c]].</strong> هذا يعيد قاطع التمام، لا الجيب. مع [[a=3]] و [[c=5]]، يعطي الكسر المقلوب 1.6667، وهو فوق 1 دائما، وهي علامة تحذير واضحة.",
          "<strong>الخلط بين الجيب وجيب التمام.</strong> يستخدم الجيب الضلع المقابل؛ ويستخدم جيب التمام الضلع المجاور. إذا كان الضلع الخطأ في البسط، فالجواب جيب تمام لا جيب.",
          "<strong>الخلط بين الجيب وقاطع التمام.</strong> قاطع التمام هو المقلوب، الوتر على الضلع المقابل. الأسماء المتشابهة تسبب أخطاء حقيقية، لكن ترتيب الكسر معكوس تماما.",
          "<strong>إدخال ضلع مقابل أطول من الوتر.</strong> الوتر دائما أطول ضلع. إذا كان [[a \\ge c]]، فالمدخلات متبادلة أو المثلث مستحيل.",
          "<strong>إدخال أطوال أضلاع صفرية أو سالبة.</strong> لا يمكن أن يكون للمثلث ضلع صفري أو سالب، فهذه المدخلات تشير إلى خطأ إدخال بيانات أو قياس مفقود، لا إلى حالة حدّية صالحة.",
          "<strong>خلط وحدات القياس.</strong> ضلع مقابل 3 م مع وتر 50 سم يعطي 6، وهو عدد بلا معنى. حوّل إلى وحدة واحدة أولا: 3 م و5 م يعطيان 0.6 الصحيحة.",
          "<strong>الإبلاغ عن نسبة الجيب كزاوية بالدرجات.</strong> الناتج 0.6 نسبة، لا [[0.6^\\circ]]. معاملته كدرجات يدخل هراء في أي حساب لاحق.",
          "<strong>افتراض أن للجيب وحدات فيزيائية.</strong> تلغي الوحدات بعضها في القسمة، فكتابة 0.6 م خطأ. اكتب العدد المجرد واحتفظ بالوحدات في قياسات المدخلات حيث تنتمي.",
          "<strong>الخلط بين الزاوية المرجعية والزاوية القائمة.</strong> يستخدم الجيب دائما زاوية حادة. زاوية [[90^\\circ]] ليست أبدا الزاوية المرجعية [[A]] في هذه الحسابات.",
          "<strong>التقريب مبكرا جدا.</strong> تقريب قسمة وسيطة إلى منزلتين عشريتين ثم متابعة الحساب يضاعف الخطأ. حافظ على الدقة الكاملة في كل خطوة وقرّب الجواب النهائي فقط.",
          "<strong>افتراض أن الجيب واحد لكل زاوية.</strong> لكل زاوية قيمة جيب خاصة بها. ناتج 0.6 ينتمي لزاوية معينة واحدة (نحو 36.87 درجة)، لا لكل مثلث قائم.",
          "<strong>افتراض أن قيمة جيب 0.6 تعني أن الزاوية [[0.6^\\circ]].</strong> النسبة ليست مقياس درجات. حوّل بالجيب العكسي إذا كانت الزاوية نفسها مطلوبة.",
          "<strong>الخلط بين الجيب المقلوب والجيب العكسي.</strong> [[1/\\sin(A)]] هو قاطع التمام، أي نسبة؛ و [[\\sin^{-1}]] هو الجيب العكسي، الذي يعيد زاوية. الأسماء المتشابهة تسبب أخطاء حقيقية، فاقرأ الترميز بعناية.",
          "<strong>افتراض أن نسبة الجيب تحدد الحجم المطلق للمثلث.</strong> يصف الجيب الشكل لا الحجم: مثلثات لا حصر لها تشترك في جيب 0.6، من ضلع مقابل 3 سم إلى ضلع 3 كم. تحدد النسبة التناسبات؛ وتحتاج الأطوال الفعلية إلى قياس ضلع واحد على الأقل."
        ],
        "closingParagraphs": [
          "<strong>خطأ مقابل صواب: مقارنة محلولة</strong>",
          "بضلع مقابل [[a=3]] ووتر [[c=5]]:",
          "<strong>خطأ:</strong> [[5/3\\approx1.6667]]. هذه نسبة قاطع التمام، لا نسبة الجيب. البسط والمقام معكوسان.",
          "<strong>صواب:</strong> [[\\sin(A)=3/5=0.6]].",
          "<strong>تحقق:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]. يؤكد فحص المقلوب الناتج، والجواب يقع بين 0 و1، كما يجب أن يقع كل جيب صحيح."
        ]
      },
      "sec-verify": {
        "h2": "كيفية التحقق من صحة نتيجة الجيب",
        "blocks": [
          {
            "kind": "p",
            "text": "يتطلب المثلث القائم الصحيح وغير المنهار أضلاعا موجبة يكون الوتر فيها الأطول دائما، [[0 \\lt a \\lt c]]، فيجب أن تقع نتيجة الجيب بين 0 و1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "يجب أن يستخدم القياسان وحدات متوافقة. الناتج الأقل من أو المساوي لـ 0 أو الأكبر من أو المساوي لـ 1 يشير عادة إلى مدخلات غير صالحة، أو أضلاع معكوسة، أو نموذج مثلث غير صحيح."
          },
          {
            "kind": "h3",
            "text": "الطريقة 1: تحقق من النسبة"
          },
          {
            "kind": "p",
            "text": "أعد التحقق من [[\\sin(A)=a/c]] مباشرة. مع [[a=3]] و [[c=5]]: [[\\sin(A)=3/5=0.6]]. إذا اختلف حساب يدوي ثان، فهناك ضلع مسمى خطأ أو وحدة مختلطة."
          },
          {
            "kind": "h3",
            "text": "الطريقة 2: تحقق من نظرية فيثاغورس"
          },
          {
            "kind": "p",
            "text": "إذا كان الضلع المجاور مطلوبا، فاحسب [[b=\\sqrt{c^2-a^2}]]. لـ [[a=3]] و [[c=5]]: [[b=\\sqrt{25-9}=4]]، و [[3^2+4^2=5^2]]. يؤكد هذا أبعاد المثلث القائم 3-4-5. الضلع المجاور قيمة تحقق هنا، لا جزء من صيغة الجيب الأساسية."
          },
          {
            "kind": "h3",
            "text": "الطريقة 3: تحقق باستخدام الجيب العكسي"
          },
          {
            "kind": "p",
            "text": "لنسبة جيب 0.6: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. وبما أن الجيب يقع فوق 0.5 بقليل، فيجب أن تقع الزاوية فوق [[30^\\circ]] بقليل؛ وإلا فتسميات الأضلاع متبادلة على الأرجح. قد تنشأ فروق صغيرة عن التقريب."
          }
        ]
      },
      "sec-vs": {
        "h2": "الجيب مقابل جيب التمام والظل وقاطع التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "تقارن كل نسبة زوجا مختلفا من الأضلاع، باستخدام الزاوية المرجعية وتسميات الأضلاع نفسها:"
          }
        ],
        "tables": [
          {
            "headers": [
              "النسبة",
              "الصيغة",
              "ماذا تقارن"
            ],
            "rows": [
              ["الجيب", "sin(A) = a/c", "الضلع المقابل بالوتر"],
              ["جيب التمام", "cos(A) = b/c", "الضلع المجاور بالوتر"],
              ["الظل", "tan(A) = a/b", "الضلع المقابل بالمجاور"],
              ["قاطع التمام", "csc(A) = c/a", "الوتر بالضلع المقابل"],
              ["القاطع", "sec(A) = c/b", "الوتر بالضلع المجاور"],
              ["ظل التمام", "cot(A) = b/a", "الضلع المجاور بالمقابل"]
            ]
          }
        ],
        "closingParagraphs": [
          "الجيب وقاطع التمام زوجا مقلوبين: [[\\csc(A)=1/\\sin(A)]]. إذا كان [[\\sin(A)=0.6]]، فإن [[\\csc(A)\\approx1.6667]]. اختر الجيب عندما يكون الضلع المقابل معروفا مقابل الوتر، أو عندما يجب مقارنة مركبة عمودية بطول مائل، أو عندما تكون SOH هي الوسيلة التذكيرية المطابقة؛ واختر جيب التمام للمجاور على الوتر، والظل عندما يكون الضلعان معروفين، وقاطع التمام عندما يقارن الوتر بالضلع المقابل.",
          "للنسب المجاورة، انظر <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة جيب التمام</a>، و <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة الظل</a>، و <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة قاطع التمام</a>، و <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة القاطع</a>، و <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة ظل التمام</a>."
        ]
      },
      "sec-related": {
        "h2": "استكشف الحاسبات المثلثية ذات الصلة",
        "related": [
          { "name": "حاسبة نسبة جيب التمام" },
          { "name": "حاسبة نسبة الظل" },
          { "name": "حاسبة نسبة قاطع التمام" },
          { "name": "حاسبة نسبة القاطع" },
          { "name": "حاسبة نسبة ظل التمام" },
          { "name": "حاسبة زاوية المثلث القائم" }
        ]
      },
      "sec-conclusion": {
        "h2": "استخدم نسبة الجيب بثقة",
        "blocks": [
          {
            "kind": "p",
            "text": "الجيب أولى النسب الرئيسية الثلاث: اقسم الضلع المقابل على الوتر وستكون قد وصفت مقدار ما يقع عبر الزاوية من أطول ضلع. تحتاج الصيغة [[\\sin(A)=a/c]] إلى قياسين فقط، والجواب دائما عدد بلا أبعاد بين 0 و1، ويكبر كلما كبرت الزاوية المرجعية. وعند الحاجة إلى ضلع مفقود، تستعيد [[a=c\\sin(A)]] الضلع المقابل؛ وعند الحاجة إلى الزاوية، تستعيدها [[A=\\sin^{-1}(a/c)]]. سلم أو عارضة أو منحدر أو 3-4-5 الكتاب المدرسي، لا تتغير الطريقة أبدا: حدد الضلع المقابل، وحدد الوتر، واقسم، وتحقق بنطاق 0 إلى 1."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "ما هي صيغة الجيب للمثلث القائم الزاوية؟",
        "answer": "sin(A) = a / c: اقسم الضلع المقابل a على الوتر c. بضلع مقابل 3 سم ووتر 5 سم، يكون الناتج 3/5 = 0.6. هذا العشري هو الجواب الكامل، نسبة بلا أبعاد، لا زاوية."
      },
      {
        "question": "كيف تحسب الجيب من طولي ضلعين؟",
        "answer": "حدد الزاوية المرجعية A، وقس الضلع المقابل a والوتر c بالوحدة نفسها، وتأكد أن كليهما موجب وأن c أطول من a، ثم اقسم: sin(A) = a / c. في هذه الصفحة، أدخل الضلع المقابل في الحقل الأول والوتر في الثاني، ثم انقر Calculate sin(A)."
      },
      {
        "question": "ما الفرق بين الجيب وجيب التمام؟",
        "answer": "يقسم الجيب الضلع المقابل على الوتر (a/c)؛ ويقسم جيب التمام الضلع المجاور على الوتر (b/c). يستخدم كلاهما الوتر نفسه، لكن البسط يختلف. الناتج فوق 1 يعني أن الكسر انقلب أو أن ضلعا سمّي خطأ."
      },
      {
        "question": "لماذا يكون الجيب أقل من 1 لزاوية حادة في مثلث قائم؟",
        "answer": "في المثلث القائم الصحيح وغير المنهار يكون الوتر أطول من أي من الضلعين، إذن 0 < a < c. وقسمة طول أصغر على طول أكبر تعطي دائما ناتجا دون 1: 0 < a/c < 1 لكل زاوية مرجعية حادة."
      },
      {
        "question": "هل يمكن أن يساوي الجيب 1 لزاوية حادة في مثلث قائم صحيح؟",
        "answer": "لا. جيب يساوي 1 بالضبط يتطلب أن يساوي الضلع المقابل الوتر، مما ينهار بالمثلث إلى خط عمودي بلا عرض. القيمة 1 قيمة حدّية تقترب كلما اقتربت الزاوية A من 90 درجة، وليست قيمة ينتجها مثلث حقيقي أبدا."
      },
      {
        "question": "ماذا تعني قيمة جيب 0.6؟",
        "answer": "الضلع المقابل يساوي 60 بالمئة من الوتر. في المثلث 3-4-5، الضلع عبر الزاوية A يساوي 3 وحدات بينما الوتر 5 وحدات، إذن sin(A) = 3/5 = 0.6. إنه يصف شكل المثلث وليس زاوية 0.6 درجة."
      },
      {
        "question": "هل لنسبة الجيب وحدات قياس؟",
        "answer": "لا. المدخلان طولان مقاسان بالوحدة نفسها، فتلغي الوحدات بعضها: 3 م / 5 م = 0.6، تماما مثل 300 سم / 500 سم = 0.6. أبلغ عن الجيب كعدد مجرد، ولا ترفق به درجات أو أمتارا أو أقداما أبدا."
      },
      {
        "question": "كيف أجد زاوية من نسبة جيب؟",
        "answer": "طبق الجيب العكسي على النسبة: A = sin^-1(a/c). لـ sin(A) = 0.6، تكون A = sin^-1(0.6)، أي نحو 36.87 درجة. اضبط حاسبتك العلمية على وضع الدرجات أولا. حاسبة هذه الصفحة تعيد النسبة لا الزاوية."
      },
      {
        "question": "كيف أجد الضلع المقابل باستخدام الجيب؟",
        "answer": "أعد ترتيب الصيغة إلى a = c * sin(A). إذا كان الوتر 10 م والزاوية A تساوي 30 درجة، فإن sin(30 deg) = 0.5، إذن a = 10 * 0.5 = 5 م. هذه إعادة ترتيب يدوية؛ حاسبة هذه الصفحة تعيد النسبة من أطوال الأضلاع، لا الأضلاع المفقودة."
      },
      {
        "question": "ما الفرق بين الجيب وقاطع التمام؟",
        "answer": "يقسم الجيب الضلع المقابل على الوتر (a/c)؛ وقاطع التمام هو مقلوبه، الوتر على الضلع المقابل (c/a). إذا كان sin(A) = 0.6، فإن csc(A) = 1/0.6، أي نحو 1.6667. الاثنان مقلوبان، وليستا صيغتين قابلتين للتبادل أبدا."
      },
      {
        "question": "هل يمكنني حساب الجيب دون معرفة الضلع المجاور؟",
        "answer": "نعم. تستخدم صيغة الجيب الأساسية الضلع المقابل والوتر فقط، فلا يدخل الضلع المجاور الحساب أبدا. ويصبح الضلع المجاور مفيدا فقط عند استخدام نظرية فيثاغورس للتحقق من المثلث أو عندما يدخل جيب التمام أو الظل أو القاطع في العمل."
      },
      {
        "question": "كيف يستخدم الجيب في القياسات العملية؟",
        "answer": "يقارن الجيب مركبة عمودية أو متعامدة بطول مائل: سلم مقابل ارتفاع جداره، أو عارضة سقف مقابل ارتفاعها العمودي، أو منحدر مقابل ارتفاعه، أو خط مساحة مقابل فرق ارتفاعه. تخبرك النسبة أي جزء من المسافة المائلة عمودي، وهو ما يفيد في الارتفاعات والخلوصات وحسابات المركبات."
      }
    ],
    "faqHeading": "الأسئلة الشائعة",
    "relatedHeading": "استكشف الحاسبات المثلثية ذات الصلة"
  }
  ,
  "bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
      "sec-intro": "Какво е калкулатор на синусово отношение?",
      "sec-triangle": "Разбиране на срещулежащия катет и хипотенузата",
      "sec-whatis": "Разбиране на синусовото отношение",
      "sec-formula": "Как работи формулата за синус",
      "sec-howto": "Как да използвате калкулатора на синусово отношение",
      "sec-examples": "Примери стъпка по стъпка за изчисляване на синус",
      "sec-applications": "Примери от реалния живот за използване на синусовото отношение",
      "sec-angle": "Разбиране на връзката между синуса и големината на ъгъла",
      "sec-hypotenuse": "Как да намерите срещулежащия катет чрез синус",
      "sec-recover": "Как да намерите ъгъл от синусово отношение",
      "sec-mistakes": "Често срещани грешки при изчисляване на синус",
      "sec-verify": "Как да проверите дали резултатът ви за синус е валиден",
      "sec-vs": "Синус срещу косинус, тангенс и косеканс",
      "sec-related": "Разгледайте свързаните тригонометрични калкулатори",
      "sec-faq": "Често задавани въпроси"
    },
    "sections": {
      "sec-intro": {
        "h2": "Какво е калкулатор на синусово отношение?",
        "blocks": [
          {
            "kind": "p",
            "text": "Калкулаторът на синусово отношение отговаря на един въпрос: при остър ъгъл в правоъгълен триъгълник, как се сравнява страната срещу ъгъла с най-дългата страна? Въведете срещулежащия катет и хипотенузата, и инструментът дели срещулежащия катет на хипотенузата, като връща [[\\sin(A)=a/c]]. Правоъгълен триъгълник има срещулежащ катет 3 см и хипотенуза 5 см, затова [[\\sin(A)=3/5=0.6]]. Това 0.6 е синусовото отношение: то ви казва, че срещулежащият катет е 60 процента от хипотенузата. То не е ъгъл, така че никога не го четете като [[0.6^\\circ]]. Прилежащият катет никога не влиза в това изчисление; срещулежащият катет и хипотенузата са достатъчни сами по себе си. Синусът е едно от основните тригонометрични отношения, а силата му е, че сравнява две дължини по начин, който зависи само от ъгъла, а не от размера на триъгълника. Ако ви трябва ъгълът в градуси, обратният синус превръща отношението в градуси."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Разбиране на срещулежащия катет и хипотенузата",
        "blocks": [
          {
            "kind": "h3",
            "text": "Какво е правоъгълен триъгълник?"
          },
          {
            "kind": "p",
            "text": "Правоъгълният триъгълник има един ъгъл от точно [[90^\\circ]], ъгъла между две перпендикулярни прави, като стена, срещаща равен под. Хипотенузата лежи срещу този прав ъгъл и винаги е най-дългата страна, защото трябва да обхване пълния диагонал през ъгъла. Другите два ъгъла си поделят останалите 90 градуса, затова и двата са остри. Двата катета се срещат при правия ъгъл, перпендикулярни един на друг, и именно връзката им с хипотенузата прави тригонометрията на правоъгълния триъгълник възможна."
          },
          {
            "kind": "h3",
            "text": "Какво е срещулежащ катет?"
          },
          {
            "kind": "p",
            "text": "Срещулежащият катет [[a]] е страната точно срещу референтния ъгъл [[A]], единствената страна, която никога не докосва неговия връх. В практически задачи той често играе ролята на вертикално издигане, разлика във височината или перпендикулярен компонент: височината на стена, достигната от стълба, вертикалното издигане на рампа или разликата във височината при геодезическо измерване. Коя страна се брои за срещулежаща зависи от избрания референтен ъгъл, така че преминаването от ъгъл [[A]] към ъгъл [[C]] разменя означенията на срещулежащ и прилежащ. Той стои в числителя на формулата за синус, защото синусът измерва колко голяма е тази страна през ъгъла спрямо хипотенузата."
          },
          {
            "kind": "h3",
            "text": "Какво е хипотенуза?"
          },
          {
            "kind": "p",
            "text": "Хипотенузата [[c]] е страната срещу правия ъгъл: във всяка диаграма тя е срещу малкото квадратче, отбелязващо ъгъла от [[90^\\circ]], и е строго по-дълга от всеки от катетите. В практически задачи тя често играе ролята на наклонена дължина: стълба, повърхност на рампа, гредоред, кабел, диагонална скоба или прав път. Тя стои в знаменателя на формулата за синус, затова всяка стойност на синуса излиза между 0 и 1: числителят винаги е истински катет, по-къс от знаменателя."
          },
          {
            "kind": "h3",
            "text": "Какво е прилежащ катет?"
          },
          {
            "kind": "p",
            "text": "Прилежащият катет [[b]] е катетът, който докосва референтния ъгъл [[A]], без да е хипотенуза. Той няма роля в основното изчисление на синуса, затова калкулаторът никога не го иска. Става полезен при изчисляване на косинус, тангенс или липсваща страна, както и когато Питагоровата теорема се използва за проверка, че двете известни дължини образуват истински правоъгълен триъгълник."
          }
        ],
        "imgAlt": "Правоъгълен триъгълник с ъгъл A долу вляво, златен срещулежащ катет a, синя хипотенуза c",
        "figcaption": "Ъгъл A е долу вляво; синусът използва златния срещулежащ катет a и синята хипотенуза c, а не прилежащия катет b."
      },
      "sec-whatis": {
        "h2": "Разбиране на синусовото отношение",
        "blocks": [
          {
            "kind": "p",
            "text": "Синусът на остър ъгъл сравнява страната точно срещу този ъгъл с най-дългата страна на триъгълника:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Четете [[\\sin(A)]] като \"синус от ъгъл A\". Числителят [[a]] е срещулежащият катет; знаменателят [[c]] е хипотенузата. Дробта отговаря на един конкретен въпрос: каква част от хипотенузата заема срещулежащият катет? Тъй като и двете входни стойности са дължини, измерени в една и съща единица, резултатът е обикновено число, а това число зависи само от ъгъла, никога от размера на триъгълника."
          },
          {
            "kind": "h3",
            "text": "Разбиране на SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "Учениците запомнят трите основни отношения с мнемоничното правило SOH-CAH-TOA:"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> Синус = срещулежащ / хипотенуза. <strong>CAH:</strong> Косинус = прилежащ / хипотенуза. <strong>TOA:</strong> Тангенс = срещулежащ / прилежащ."
          },
          {
            "kind": "p",
            "text": "SOH съответства пряко на формулата за синус [[\\sin(A)=a/c]]. Мнемоничното правило работи, защото свързва всяко име на отношение с двете страни, от които се нуждае, в правилния ред: при синуса срещулежащият катет отива отгоре, а хипотенузата отдолу. След като двете страни са назовани правилно, правилото превръща \"коя страна къде отива\" от задача за запаметяване в задача за търсене."
          },
          {
            "kind": "h3",
            "text": "Защо синусът е отношение"
          },
          {
            "kind": "p",
            "text": "Деленето на две дължини дава безразмерно число, защото мерните единици се съкращават:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "Метрите се съкращават и остава 0.6. Използването на 300 см и 500 см дава същия резултат, тъй като и двете дължини се мащабират заедно. Единственото изискване е съвместими единици: и двете измервания трябва да използват една и съща единица, или едното трябва да се преобразува преди делението. Отношението следователно е свойство на ъгъла, а не на конкретната линийка, използвана за измерване на триъгълника."
          },
          {
            "kind": "h3",
            "text": "Какво означава стойност на синус 0.6?"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] означава, че срещулежащият катет е 60 процента от хипотенузата. Триъгълникът 3-4-5 е класическият ориентир: [[\\sin(A)=3/5=0.6]]. Числото разкрива формата на триъгълника с един поглед: синус близо до 1 означава, че срещулежащият катет почти съвпада с хипотенузата и ъгълът е стръмен; синус близо до 0 означава, че срещулежащият катет е къс спрямо хипотенузата и ъгълът е полегат. Нищо от това не подсказва, че 0.6 е ъгъл; това е пропорция и само обратният синус я превръща в градуси."
          },
          {
            "kind": "h3",
            "text": "Защо синусът е между 0 и 1"
          },
          {
            "kind": "p",
            "text": "Хипотенузата е по-дълга от срещулежащия катет, затова [[0 \\lt a \\lt c]], и следователно:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Валиден, неизроден правоъгълен триъгълник не може да има синусово отношение точно 0 или точно 1 за своя остър ъгъл. Стойността се приближава до 0, когато ъгълът се приближи до [[0^\\circ]], защото срещулежащият катет се свива към нищо; тя се приближава до 1, когато ъгълът се приближи до [[90^\\circ]], защото срещулежащият катет нараства до почти съвпадение с хипотенузата. Нито една от граничните стойности не се достига от острия ъгъл на истински триъгълник."
          },
          {
            "kind": "h3",
            "text": "Синус срещу косинус"
          },
          {
            "kind": "p",
            "text": "Двете отношения споделят една и съща хипотенуза, но използват различни числители:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] и [[\\cos(A)=b/c]]."
          },
          {
            "kind": "p",
            "text": "Синусът използва срещулежащия катет, катета през ъгъла; косинусът използва прилежащия катет, катета до ъгъла. Резултат над 1 означава, че дробта е обърната или хипотенузата е поставена в числителя. Синусът не е реципрочната стойност на косинуса: реципрочната стойност на синуса е косекансът."
          }
        ],
        "imgAlt": "Три стъпки: означете a=3, b=4, c=5 върху триъгълник, приложете sin(A)=a/c, получете 0.6",
        "figcaption": "Идентифицирайте страните, приложете формулата и изчислете: срещулежащият катет е 60 процента от хипотенузата."
      },
      "sec-formula": {
        "h2": "Как работи формулата за синус",
        "blocks": [
          {
            "kind": "p",
            "text": "Формулата следва логична последователност. Започнете с дефиницията с думи:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "След това използвайте съществуващата нотация на страницата, с [[a]] за срещулежащия катет и [[c]] за хипотенузата:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Срещулежащият катет е в числителя, защото синусът измерва размера на тази страна спрямо хипотенузата; хипотенузата е в знаменателя, защото е референтната дължина, с която се сравнява всяка друга страна. Подредбата е фиксирана: числителят пита \"колко голям е този катет?\", знаменателят отговаря \"спрямо какво?\"."
          },
          {
            "kind": "h3",
            "text": "Напълно разработен пример: правоъгълен триъгълник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Дадени [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] и [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "<strong>Стъпка 1:</strong> Запишете формулата. [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>Стъпка 2:</strong> Заместете известните стойности. [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>Стъпка 3:</strong> Разделете. [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>Стъпка 4:</strong> Тълкувайте резултата. Срещулежащият катет е 60 процента от хипотенузата."
          },
          {
            "kind": "p",
            "text": "<strong>Стъпка 5:</strong> Проверете триъгълника. [[3^2+4^2=5^2]], и [[9+16=25]]. Питагоровата проверка потвърждава, че тези дължини на страните образуват правоъгълен триъгълник, така че резултатът за синуса е надежден."
          },
          {
            "kind": "h3",
            "text": "Важно уточнение"
          },
          {
            "kind": "p",
            "text": "Ако читателят иска ъгъла, а не неговото синусово отношение, е нужен обратен синус: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Обратният синус се нарича още арксинус и е отделна операция от изчисляването на синусовото отношение. Съществуващият калкулатор на синусово отношение изчислява отношението от две дължини на страни; той не връща директно ъгъла."
          }
        ]
      },
      "sec-howto": {
        "h2": "Как да използвате калкулатора на синусово отношение",
        "blocks": [
          {
            "kind": "p",
            "text": "Калкулаторът отразява формулата точно: два входа, един бутон, едно отношение. Преминете през интерфейса по ред."
          }
        ],
        "steps": [
          "<strong>Идентифицирайте референтния ъгъл [[A]].</strong> Всяко изчисление на синус е закотвено за един остър ъгъл; срещулежащият катет е дефиниран спрямо него.",
          "<strong>Намерете срещулежащия катет [[a]], точно срещу ъгъл [[A]].</strong> Това е катетът, който никога не докосва върха на ъгъла.",
          "<strong>Намерете хипотенузата [[c]], срещу правия ъгъл и най-дългата страна.</strong> Тя е срещу малкото квадратче, отбелязващо ъгъла от [[90^\\circ]].",
          "<strong>Получете или измерете и двете дължини на страните.</strong> Използвайте рулетка, размер от план или стойности от условието на задачата.",
          "<strong>Въведете дължината на срещулежащия катет в първото поле за въвеждане.</strong> Това става числителят [[a]].",
          "<strong>Въведете дължината на хипотенузата във второто поле за въвеждане.</strong> Това става знаменателят [[c]].",
          "<strong>Изберете съвместими мерни единици с наличните селектори за единици.</strong> Метри с метри, сантиметри със сантиметри; смесените единици дават безсмислено отношение.",
          "<strong>Потвърдете, че и двете измервания са положителни.</strong> Нулеви или отрицателни дължини не могат да образуват триъгълник.",
          "<strong>Проверете дали хипотенузата е по-дълга от срещулежащия катет.</strong> Ако [[a \\ge c]], входовете са разменени или триъгълникът е невъзможен.",
          "<strong>Щракнете върху Calculate sin(A).</strong> Инструментът дели срещулежащия катет на хипотенузата.",
          "<strong>Прочетете полученото синусово отношение.</strong> То е обикновено десетично число, не ъгъл и не дължина.",
          "<strong>Потвърдете, че резултатът е по-голям от 0 и по-малък от 1.</strong> За валиден, неизроден правоъгълен триъгълник с остър референтен ъгъл това е единственият допустим диапазон.",
          "<strong>Използвайте Reset, когато искате да изчистите входовете и да започнете друго изчисление.</strong>"
        ],
        "closingParagraphs": [
          "Калкулаторът не изисква прилежащия катет или вход за ъгъл. Той извършва делението и нищо друго: без запазена история, без графики, без скрити режими."
        ]
      },
      "sec-examples": {
        "h2": "Примери стъпка по стъпка за изчисляване на синус",
        "blocks": [
          {
            "kind": "h3",
            "text": "Пример 1: правоъгълен триъгълник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Дадени [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] и [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Срещулежащият катет е 60 процента от хипотенузата."
          },
          {
            "kind": "h3",
            "text": "Пример 2: правоъгълен триъгълник 5-12-13"
          },
          {
            "kind": "p",
            "text": "Дадени [[a=5\\,\\text{m}]], [[b=12\\,\\text{m}]] и [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Срещулежащият катет е приблизително 38.46 процента от хипотенузата."
          },
          {
            "kind": "h3",
            "text": "Пример 3: триъгълник 30-60-90"
          },
          {
            "kind": "p",
            "text": "При референтен ъгъл [[A=30^\\circ]] срещулежащият катет е половината от хипотенузата. Използвайте [[a=1\\,\\text{cm}]], [[b=\\sqrt{3}\\,\\text{cm}]] и [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "Това е полезен резултат за специален ъгъл: при 30 градуса срещулежащият катет е точно половината от хипотенузата, затова този триъгълник се появява в толкова много учебни задачи."
          },
          {
            "kind": "h3",
            "text": "Пример 4: триъгълник 45-45-90"
          },
          {
            "kind": "p",
            "text": "Дадени [[a=1\\,\\text{cm}]], [[b=1\\,\\text{cm}]] и [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "Равните катети дават равни стойности на синус и косинус за двата остри ъгъла: при 45 градуса всеки остър ъгъл е срещу катет 1 и хипотенуза [[\\sqrt{2}]], така че синусът и косинусът съвпадат."
          }
        ]
      },
      "sec-applications": {
        "h2": "Примери от реалния живот за използване на синусовото отношение",
        "blocks": [
          {
            "kind": "p",
            "text": "Всеки пример описва ситуацията, идентифицира срещулежащия катет и хипотенузата, замества ги във формулата и тълкува резултата на разбираем език."
          },
          {
            "kind": "h3",
            "text": "Пример 5: изчисляване на синусовото отношение на стълба"
          },
          {
            "kind": "p",
            "text": "Стълба е дълга 5 м и достига 4 м нагоре по вертикална стена. Референтният ъгъл [[A]] е между стълбата и хоризонталната земя. Стълбата е хипотенузата, [[c=5\\,\\text{m}]], а вертикалната височина е срещулежащият катет, [[a=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалната височина е 80 процента от дължината на стълбата. Отношението описва геометрията на стълбата и не установява дали стълбата е поставена безопасно."
          },
          {
            "kind": "h3",
            "text": "Пример 6: изчисляване на синусовото отношение на покривна греда"
          },
          {
            "kind": "p",
            "text": "Покривна греда има наклонена дължина 6.5 м и вертикално издигане 2.5 м. Гредата е хипотенузата, [[c=6.5\\,\\text{m}]], а вертикалното издигане е срещулежащият катет, [[a=2.5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалното издигане е приблизително 38.46 процента от дължината на гредата. Отношението не установява структурна пригодност или съответствие на покривния проект."
          },
          {
            "kind": "h3",
            "text": "Пример 7: оценка на синусовото отношение на рампа"
          },
          {
            "kind": "p",
            "text": "Опростена рампа има наклонена дължина 9.5 м и вертикално издигане 0.75 м. Наклонът е хипотенузата, [[c=9.5\\,\\text{m}]], а вертикалното издигане е срещулежащият катет, [[a=0.75\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалното издигане е приблизително 7.89 процента от наклонената дължина, полегат наклон. Това отношение само по себе си не установява достъпност или съответствие със строителните норми."
          },
          {
            "kind": "h3",
            "text": "Пример 8: геодезическо измерване"
          },
          {
            "kind": "p",
            "text": "Опростен геодезически триъгълник има разстояние по права линия 50 м и вертикална разлика във височината 30 м. Правата линия е хипотенузата, [[c=50\\,\\text{m}]], а вертикалната разлика е срещулежащият катет, [[a=30\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалната разлика е 60 процента от разстоянието по права линия. Истинската геодезия може да изисква допълнителни корекции, корекции за височината на инструмента и по-подробни измервания."
          },
          {
            "kind": "h3",
            "text": "Пример 9: опъващо въже, поддържащо стълб"
          },
          {
            "kind": "p",
            "text": "Опъващо въже е дълго 13 м, а точката му на закрепване е на 5 м над нивото на земната котва. Въжето е хипотенузата, [[c=13\\,\\text{m}]], а вертикалното разстояние е срещулежащият катет, [[a=5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалното разстояние е приблизително 38.46 процента от дължината на въжето. Отношението не установява опъна на въжето, здравината на котвата или структурната безопасност."
          },
          {
            "kind": "h3",
            "text": "Пример 10: изчисляване на синусовото отношение на стълбищна греда"
          },
          {
            "kind": "p",
            "text": "Опростена стълбищна греда е дълга 5 м и обхваща вертикално издигане 3 м. Гредата е хипотенузата, [[c=5\\,\\text{m}]], а вертикалното издигане е срещулежащият катет, [[a=3\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалното издигане е 60 процента от дължината на диагоналната греда. Изчислението не проверява размерите на стълбището или съответствието със строителните норми."
          },
          {
            "kind": "h3",
            "text": "Пример 11: разбиране на вертикалния компонент на стрела на кран"
          },
          {
            "kind": "p",
            "text": "Опростена стрела на кран има дължина 10 м и вертикален компонент 8 м. Стрелата е хипотенузата, [[c=10\\,\\text{m}]], а вертикалният компонент е срещулежащият катет, [[a=8\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалният компонент е 80 процента от дължината на стрелата. Отношението не установява товароносимостта на крана или безопасността на работа."
          },
          {
            "kind": "h3",
            "text": "Пример 12: прав полетен участък на самолет"
          },
          {
            "kind": "p",
            "text": "При опростен полетен участък самолет изминава 5 км по прав път, като набира 1.5 км височина. Пътят е хипотенузата, [[c=5\\,\\text{km}]], а вертикалното набиране е срещулежащият катет, [[a=1.5\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалното набиране е 30 процента от дължината на правия път. Това е идеализиран геометричен пример, а не пълно летателно-навигационно изчисление."
          },
          {
            "kind": "h3",
            "text": "Пример 13: диагонална механична скоба"
          },
          {
            "kind": "p",
            "text": "Диагонална скоба е дълга 2 м и има вертикален компонент 1.6 м. Скобата е хипотенузата, [[c=2\\,\\text{m}]], а вертикалният компонент е срещулежащият катет, [[a=1.6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалният компонент е 80 процента от дължината на скобата. Отношението не определя здравината или пригодността на скобата."
          },
          {
            "kind": "h3",
            "text": "Пример 14: синусово отношение на туристически маршрут"
          },
          {
            "kind": "p",
            "text": "Опростен прав участък от туристически маршрут има дължина на пътеката 100 м и вертикално набиране на височина 25 м. Пътеката е хипотенузата, [[c=100\\,\\text{m}]], а набирането на височина е срещулежащият катет, [[a=25\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "Набирането на височина е 25 процента от дължината на правия път. Истинските туристически пътеки могат да съдържат завои и променливи наклони."
          },
          {
            "kind": "h3",
            "text": "Пример 15: опора на тента"
          },
          {
            "kind": "p",
            "text": "Опора на тента е дълга 3 м и има вертикален компонент 1.2 м. Опората е хипотенузата, [[c=3\\,\\text{m}]], а вертикалният компонент е срещулежащият катет, [[a=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалният компонент е 40 процента от дължината на опората. Изчислението не установява структурна пригодност."
          },
          {
            "kind": "h3",
            "text": "Пример 16: линия на видимост към върха на дърво"
          },
          {
            "kind": "p",
            "text": "Опростена линия на видимост към върха на дърво измерва 20 м. Вертикалната разлика между нивото на очите на наблюдателя и върха на дървото е 12 м. Линията на видимост е хипотенузата, [[c=20\\,\\text{m}]], а вертикалната разлика е срещулежащият катет, [[a=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Вертикалната разлика е 60 процента от разстоянието по линията на видимост. Резултатът не дава общата височина на дървото над земята, освен ако височината на очите на наблюдателя и другата необходима информация не бъдат отчетени."
          }
        ],
        "closingParagraphs": [
          "Синусът е математическо отношение, а не физическа величина с единици. Практическата му стойност идва от сравняването на вертикален или перпендикулярен компонент с наклонено разстояние, изчисляването на компоненти, когато ъгълът е известен, и проверката на геометрични връзки. Не третирайте синуса сам по себе си като удостоверение за структурна безопасност, товароносимост, достъпност или инженерно съответствие."
        ],
        "tables": [
          {
            "headers": [
              "Ситуация",
              "Срещулежащ [[a]]",
              "Хипотенуза [[c]]",
              "Формула",
              "Отношение",
              "Значение"
            ],
            "rows": [
              ["Стълба", "4 m", "5 m", "4/5", "0.8", "Височината е 80% от дължината на стълбата"],
              ["Покривна греда", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "Издигането е 38.46% от дължината на гредата"],
              ["Рампа", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "Полегат наклон, издигане 7.89%"],
              ["Геодезия", "30 m", "50 m", "30/50", "0.6", "Височината е 60% от разстоянието по линията"],
              ["Опъващо въже", "5 m", "13 m", "5/13", "0.3846", "Височината е 38.46% от дължината на въжето"],
              ["Стълбищна греда", "3 m", "5 m", "3/5", "0.6", "Издигането е 60% от дължината на гредата"],
              ["Стрела на кран", "8 m", "10 m", "8/10", "0.8", "Вертикалният обхват е 80% от стрелата"],
              ["Полетен участък", "1.5 km", "5 km", "1.5/5", "0.3", "Набирането е 30% от полетния път"],
              ["Диагонална скоба", "1.6 m", "2 m", "1.6/2", "0.8", "Вертикалът е 80% от дължината на скобата"],
              ["Туристически маршрут", "25 m", "100 m", "25/100", "0.25", "Набирането е 25% от дължината на пътя"],
              ["Опора на тента", "1.2 m", "3 m", "1.2/3", "0.4", "Вертикалът е 40% от опората"],
              ["Линия на видимост", "12 m", "20 m", "12/20", "0.6", "Разликата във височината е 60% от линията на видимост"]
            ]
          }
        ],
        "imgAlt": "Четири панела: отношение на стълба 0.8, рампа 0.07895, геодезия 0.6, стрела на кран 0.8",
        "figcaption": "Четири практически изчисления: стълба, рампа, геодезия и стрела на кран, всяко със свой триъгълник, формула и отношение."
      },
      "sec-angle": {
        "h2": "Разбиране на връзката между синуса и големината на ъгъла",
        "blocks": [
          {
            "kind": "p",
            "text": "Синусът нараства с нарастването на референтния ъгъл. Геометрията обяснява защо: когато ъгъл [[A]] е малък, срещулежащият катет е къс спрямо хипотенузата, така че отношението е близо до 0. Когато ъгълът се разшири, срещулежащият катет става по-голям дял от хипотенузата и отношението се изкачва към 1. При [[30^\\circ]] синусът е точно 0.5; при [[45^\\circ]] е около 0.7071; при [[60^\\circ]] около 0.8660; а когато ъгълът се приближи до [[90^\\circ]], синусът се приближава до 1."
          }
        ],
        "tables": [
          {
            "headers": [
              "Ъгъл [[A]]",
              "Синусово отношение",
              "Тълкуване"
            ],
            "rows": [
              ["[[30^\\circ]]", "0.5", "Срещулежащият катет е половината от хипотенузата"],
              ["[[45^\\circ]]", "Приблизително 0.7071", "Срещулежащият катет е около 70.71% от хипотенузата"],
              ["[[60^\\circ]]", "Приблизително 0.8660", "Срещулежащият катет е около 86.60% от хипотенузата"],
              ["[[80^\\circ]]", "Приблизително 0.9848", "Срещулежащият катет е около 98.48% от хипотенузата"]
            ]
          }
        ],
        "closingParagraphs": [
          "Моделът е прост и монотонен: всяко увеличение на ъгъла повишава синуса, а отношението остава между 0 и 1 за всеки остър ъгъл. Синусът описва формата на триъгълника, а не абсолютния му размер: два триъгълника с един и същ остър ъгъл имат едно и също синусово отношение, дори когато дължините на страните им се различават. Вход [[90^\\circ]] е гранична референтна стойност, а не остър ъгъл в неизроден правоъгълен триъгълник."
        ],
        "imgAlt": "Три триъгълника при 30, 45, 60 градуса със стойности на синус 0.5, 0.7071, 0.8660",
        "figcaption": "Когато ъгъл A нараства, срещулежащият катет става по-голям дял от хипотенузата, затова sin(A) нараства."
      },
      "sec-hypotenuse": {
        "h2": "Как да намерите срещулежащия катет чрез синус",
        "blocks": [
          {
            "kind": "p",
            "text": "Формулата за синус може да се преподреди, за да се намери срещулежащият катет, когато хипотенузата и ъгълът са известни. Започнете с [[\\sin(A)=a/c]] и умножете двете страни по [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Срещулежащият катет е равен на хипотенузата, умножена по синуса на ъгъла. При хипотенуза [[c=10\\,\\text{m}]] и ъгъл [[A=30^\\circ]], и като знаем, че [[\\sin(30^\\circ)=0.5]]:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "Срещулежащият катет е половината от хипотенузата при ъгъл [[30^\\circ]], което съответства на геометрията 30-60-90: страната срещу 30 градуса е точно половината от хипотенузата."
          },
          {
            "kind": "p",
            "text": "Хипотенузата може да се намери по същия начин, като се преподреди отново:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "При срещулежащ катет [[a=6\\,\\text{m}]] и [[A=30^\\circ]]: [[c=6/0.5]], затова [[\\boxed{c=12\\,\\text{m}}]]. Това са математически преподредби на същата формула. Калкулаторът на тази страница връща синусовото отношение от дължини на страни; той не изчислява директно липсващи страни."
          }
        ]
      },
      "sec-recover": {
        "h2": "Как да намерите ъгъл от синусово отношение",
        "blocks": [
          {
            "kind": "p",
            "text": "Синусовото отношение и ъгълът са различни величини: едната е безразмерно сравнение на страни, другата се измерва в градуси. Когато синусовото отношение е известно и ъгълът е необходим, може да се използва обратен синус:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Обратният синус се нарича още арксинус. При [[\\sin(A)=0.6]]:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "Ъгълът е приблизително [[36.87^\\circ]], когато калкулаторът е настроен на градуси. Това е отделно изчисление на ъгъл, а не нещо, което калкулаторът на синусово отношение извършва директно. Обратният синус може да има множество ъглови решения в по-широката тригонометрия, но ограничението за остър ъгъл в правоъгълния триъгълник избира подходящото остро решение."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Често срещани грешки при изчисляване на синус",
        "blocks": [
          {
            "kind": "p",
            "text": "Повечето грешки при синуса идват от обърната дроб, неправилно означена страна или пропуск в единиците. Преминете през този списък, преди да се доверите на резултат."
          }
        ],
        "steps": [
          "<strong>Използване на прилежащия катет вместо срещулежащия.</strong> Деленето [[b/c]] изчислява косинус. При [[a=3]], [[b=4]] и [[c=5]] грешният катет дава 0.8; правилният дава 0.6.",
          "<strong>Обръщане на формулата и изчисляване на [[c/a]] вместо [[a/c]].</strong> Това връща косеканс, а не синус. При [[a=3]] и [[c=5]] обърнатата дроб дава 1.6667, винаги над 1, ясен предупредителен знак.",
          "<strong>Объркване на синус с косинус.</strong> Синусът използва срещулежащия катет; косинусът използва прилежащия катет. Ако грешният катет е в числителя, отговорът е косинус, а не синус.",
          "<strong>Объркване на синус с косеканс.</strong> Косекансът е реципрочната стойност, хипотенуза върху срещулежащ катет. Подобните имена причиняват реални грешки, но редът на дробта е точно обратен.",
          "<strong>Въвеждане на срещулежащ катет, по-дълъг от хипотенузата.</strong> Хипотенузата винаги е най-дългата страна. Ако [[a \\ge c]], входовете са разменени или триъгълникът е невъзможен.",
          "<strong>Въвеждане на нулеви или отрицателни дължини на страни.</strong> Триъгълникът не може да има нулева или отрицателна страна, затова тези входове сигнализират грешка при въвеждане на данни или липсващо измерване, а не валиден граничен случай.",
          "<strong>Смесване на мерни единици.</strong> Срещулежащ катет 3 м с хипотенуза 50 см дава 6, безсмислено число. Преобразувайте първо в една единица: 3 м и 5 м дават правилното 0.6.",
          "<strong>Отчитане на синусовото отношение като ъгъл в градуси.</strong> Резултат 0.6 е отношение, а не [[0.6^\\circ]]. Третирането му като градуси вкарва безсмислици във всяко следващо изчисление.",
          "<strong>Предполагане, че синусът има физически единици.</strong> Единиците се съкращават при делението, затова \"0.6 m\" е грешно. Запишете обикновеното число и дръжте единиците във входните измервания, където им е мястото.",
          "<strong>Объркване на референтния ъгъл с правия ъгъл.</strong> Синусът винаги използва остър ъгъл. Ъгълът от [[90^\\circ]] никога не е референтният ъгъл [[A]] в тези изчисления.",
          "<strong>Закръгляне твърде рано.</strong> Закръглянето на междинно деление до два знака и продължаването на изчислението натрупва грешката. Пазете пълна точност през всяка стъпка и закръглете само крайния отговор.",
          "<strong>Предполагане, че синусът е еднакъв за всеки ъгъл.</strong> Всеки ъгъл има собствена стойност на синус. Резултат 0.6 принадлежи на един конкретен ъгъл (около 36.87 градуса), а не на всеки правоъгълен триъгълник.",
          "<strong>Предполагане, че стойност на синус 0.6 означава, че ъгълът е [[0.6^\\circ]].</strong> Отношението не е мярка в градуси. Преобразувайте с обратен синус, ако е нужен самият ъгъл.",
          "<strong>Объркване на реципрочния синус с обратния синус.</strong> [[1/\\sin(A)]] е косеканс, отношение; [[\\sin^{-1}]] е обратен синус, който връща ъгъл. Подобните имена причиняват реални грешки, затова четете нотацията внимателно.",
          "<strong>Предполагане, че синусовото отношение определя абсолютния размер на триъгълника.</strong> Синусът описва формата, а не размера: безброй много триъгълници споделят синус 0.6, от срещулежащ катет 3 см до такъв от 3 км. Отношението фиксира пропорциите; действителните дължини се нуждаят от поне едно измерване на страна."
        ],
        "closingParagraphs": [
          "<strong>Грешно срещу правилно: разработено сравнение</strong>",
          "При срещулежащ катет [[a=3]] и хипотенуза [[c=5]]:",
          "<strong>Грешно:</strong> [[5/3\\approx1.6667]]. Това е косекансовото отношение, а не синусовото. Числителят и знаменателят са разменени.",
          "<strong>Правилно:</strong> [[\\sin(A)=3/5=0.6]].",
          "<strong>Проверете:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]. Реципрочната проверка потвърждава резултата, а отговорът е между 0 и 1, както трябва да бъде всеки валиден синус."
        ]
      },
      "sec-verify": {
        "h2": "Как да проверите дали резултатът ви за синус е валиден",
        "blocks": [
          {
            "kind": "p",
            "text": "Валиден, неизроден правоъгълен триъгълник изисква положителни страни, като хипотенузата е строго най-дълга, [[0 \\lt a \\lt c]], затова резултатът за синуса трябва да попада между 0 и 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "И двете измервания трябва да използват съвместими единици. Резултат, по-малък от или равен на 0, или по-голям от или равен на 1, обикновено показва невалидни входове, разменени страни или неправилен модел на триъгълника."
          },
          {
            "kind": "h3",
            "text": "Метод 1: проверете отношението"
          },
          {
            "kind": "p",
            "text": "Проверете отново директно [[\\sin(A)=a/c]]. При [[a=3]] и [[c=5]]: [[\\sin(A)=3/5=0.6]]. Ако второ ръчно изчисление не съвпадне, някоя страна е неправилно означена или някоя единица е смесена."
          },
          {
            "kind": "h3",
            "text": "Метод 2: проверете Питагоровата теорема"
          },
          {
            "kind": "p",
            "text": "Ако прилежащият катет е необходим, изчислете [[b=\\sqrt{c^2-a^2}]]. За [[a=3]] и [[c=5]]: [[b=\\sqrt{25-9}=4]], и [[3^2+4^2=5^2]]. Това потвърждава размерите на правоъгълния триъгълник 3-4-5. Прилежащият катет е проверъчна стойност тук, а не част от основната формула за синус."
          },
          {
            "kind": "h3",
            "text": "Метод 3: проверете с обратен синус"
          },
          {
            "kind": "p",
            "text": "При синусово отношение 0.6: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Тъй като синусът е малко над 0.5, ъгълът трябва да попадне малко над [[30^\\circ]]; ако не стане така, означенията на страните вероятно са разменени. Малки разлики могат да възникнат от закръгляне."
          }
        ]
      },
      "sec-vs": {
        "h2": "Синус срещу косинус, тангенс и косеканс",
        "blocks": [
          {
            "kind": "p",
            "text": "Всяко отношение сравнява различна двойка страни, като използва същия референтен ъгъл и означения на страните:"
          }
        ],
        "tables": [
          {
            "headers": [
              "Отношение",
              "Формула",
              "Какво сравнява"
            ],
            "rows": [
              ["Синус", "sin(A) = a/c", "Срещулежащ катет към хипотенуза"],
              ["Косинус", "cos(A) = b/c", "Прилежащ катет към хипотенуза"],
              ["Тангенс", "tan(A) = a/b", "Срещулежащ катет към прилежащ катет"],
              ["Косеканс", "csc(A) = c/a", "Хипотенуза към срещулежащ катет"],
              ["Секанс", "sec(A) = c/b", "Хипотенуза към прилежащ катет"],
              ["Котангенс", "cot(A) = b/a", "Прилежащ катет към срещулежащ катет"]
            ]
          }
        ],
        "closingParagraphs": [
          "Синусът и косекансът са реципрочна двойка: [[\\csc(A)=1/\\sin(A)]]. Ако [[\\sin(A)=0.6]], тогава [[\\csc(A)\\approx1.6667]]. Посегнете към синуса, когато срещулежащият катет е известен срещу хипотенузата, когато вертикален компонент трябва да се сравни с наклонена дължина, или когато SOH е подходящото мнемонично правило; посегнете към косинуса за прилежащ върху хипотенуза, тангенса, когато двата катета са известни, и косеканса, когато хипотенузата се сравнява със срещулежащия катет.",
          "За съседните отношения вижте <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Калкулатор на косинусово отношение</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Калкулатор на тангенсово отношение</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Калкулатор на косекансово отношение</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Калкулатор на секансово отношение</a> и <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Калкулатор на котангенсово отношение</a>."
        ]
      },
      "sec-related": {
        "h2": "Разгледайте свързаните тригонометрични калкулатори",
        "related": [
          { "name": "Калкулатор на косинусово отношение" },
          { "name": "Калкулатор на тангенсово отношение" },
          { "name": "Калкулатор на косекансово отношение" },
          { "name": "Калкулатор на секансово отношение" },
          { "name": "Калкулатор на котангенсово отношение" },
          { "name": "Калкулатор на ъгъл в правоъгълен триъгълник" }
        ]
      },
      "sec-conclusion": {
        "h2": "Използвайте синусовото отношение с увереност",
        "blocks": [
          {
            "kind": "p",
            "text": "Синусът е първото от трите основни отношения: разделете срещулежащия катет на хипотенузата и сте описали каква част от най-дългата страна лежи срещу ъгъла. Формулата [[\\sin(A)=a/c]] се нуждае само от две измервания, отговорът винаги е безразмерно число между 0 и 1 и нараства с нарастването на референтния ъгъл. Когато е нужна липсваща страна, [[a=c\\sin(A)]] възстановява срещулежащия катет; когато е нужен ъгълът, [[A=\\sin^{-1}(a/c)]] го възстановява. Стълба, греда, рампа или учебен 3-4-5, методът никога не се променя: идентифицирайте срещулежащия катет, идентифицирайте хипотенузата, разделете и проверете с диапазона от 0 до 1."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Каква е формулата за синус в правоъгълен триъгълник?",
        "answer": "sin(A) = a / c: разделете срещулежащия катет a на хипотенузата c. При срещулежащ катет 3 см и хипотенуза 5 см резултатът е 3/5 = 0.6. Това десетично число е пълният отговор, безразмерно отношение, а не ъгъл."
      },
      {
        "question": "Как се изчислява синус от две дължини на страни?",
        "answer": "Идентифицирайте референтния ъгъл A, измерете срещулежащия катет a и хипотенузата c в една и съща единица, потвърдете, че и двете са положителни и че c е по-дълга от a, след което разделете: sin(A) = a / c. На тази страница въведете срещулежащия катет в първото поле и хипотенузата във второто, след което щракнете върху Calculate sin(A)."
      },
      {
        "question": "Каква е разликата между синус и косинус?",
        "answer": "Синусът дели срещулежащия катет на хипотенузата (a/c); косинусът дели прилежащия катет на хипотенузата (b/c). И двата използват една и съща хипотенуза, но числителят се различава. Резултат над 1 означава, че дробта е обърната или катет е неправилно означен."
      },
      {
        "question": "Защо синусът е по-малък от 1 за остър ъгъл в правоъгълен триъгълник?",
        "answer": "Във валиден, неизроден правоъгълен триъгълник хипотенузата е строго по-дълга от всеки от катетите, затова 0 < a < c. Деленето на по-малка дължина на по-голяма винаги дава резултат под 1: 0 < a/c < 1 за всеки остър референтен ъгъл."
      },
      {
        "question": "Може ли синусът да е равен на 1 за остър ъгъл във валиден правоъгълен триъгълник?",
        "answer": "Не. Синус точно 1 би изисквал срещулежащият катет да е равен на хипотенузата, което свива триъгълника до вертикална линия без ширина. Стойността 1 е гранична стойност, към която се приближаваме, когато ъгъл A доближи 90 градуса, никога стойност, която истински триъгълник произвежда."
      },
      {
        "question": "Какво означава стойност на синус 0.6?",
        "answer": "Срещулежащият катет е 60 процента от хипотенузата. В триъгълник 3-4-5 страната срещу ъгъл A е 3 единици, докато хипотенузата е 5 единици, затова sin(A) = 3/5 = 0.6. То описва формата на триъгълника и не е ъгъл от 0.6 градуса."
      },
      {
        "question": "Има ли синусовото отношение мерни единици?",
        "answer": "Не. И двата входа са дължини, измерени в една и съща единица, затова единиците се съкращават: 3 m / 5 m = 0.6, точно както 300 cm / 500 cm = 0.6. Отчитайте синуса като обикновено число, никога с градуси, метри или футове."
      },
      {
        "question": "Как да намеря ъгъл от синусово отношение?",
        "answer": "Приложете обратен синус към отношението: A = sin^-1(a/c). При sin(A) = 0.6, A = sin^-1(0.6), около 36.87 градуса. Първо настройте научния си калкулатор в режим на градуси. Калкулаторът на тази страница връща отношението, а не ъгъла."
      },
      {
        "question": "Как да намеря срещулежащия катет чрез синус?",
        "answer": "Преподредете формулата до a = c * sin(A). Ако хипотенузата е 10 м и ъгъл A е 30 градуса, sin(30 deg) = 0.5, затова a = 10 * 0.5 = 5 м. Това е ръчно преподреждане; калкулаторът на тази страница връща отношението от дължини на страни, а не липсващи страни."
      },
      {
        "question": "Каква е разликата между синус и косеканс?",
        "answer": "Синусът дели срещулежащия катет на хипотенузата (a/c); косекансът е неговата реципрочна стойност, хипотенуза върху срещулежащ катет (c/a). Ако sin(A) = 0.6, тогава csc(A) = 1/0.6, около 1.6667. Двете са реципрочни, никога взаимозаменяеми формули."
      },
      {
        "question": "Мога ли да изчисля синус, без да знам прилежащия катет?",
        "answer": "Да. Основната формула за синус използва само срещулежащия катет и хипотенузата, затова прилежащият катет никога не влиза в изчислението. Прилежащият катет става полезен само когато Питагоровата теорема се използва за проверка на триъгълника или когато косинусът, тангенсът или секансът влязат в работата."
      },
      {
        "question": "Как се използва синусът в практически измервания?",
        "answer": "Синусът сравнява вертикален или перпендикулярен компонент с наклонена дължина: стълба спрямо височината на стената ѝ, покривна греда спрямо вертикалното ѝ издигане, рампа спрямо издигането ѝ или геодезическа линия спрямо разликата ѝ във височината. Отношението ви казва каква част от наклоненото разстояние е вертикална, което е полезно за височини, просвети и изчисления на компоненти."
      }
    ],
    "faqHeading": "Често задавани въпроси",
    "relatedHeading": "Разгледайте свързаните тригонометрични калкулатори"
  }
  ,
  "tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "sec-intro": "Sinüs Oranı Hesaplayıcı Nedir?",
      "sec-triangle": "Karşı Kenar ve Hipotenüsü Anlama",
      "sec-whatis": "Sinüs Oranını Anlama",
      "sec-formula": "Sinüs Formülü Nasıl Çalışır",
      "sec-howto": "Sinüs Oranı Hesaplayıcı Nasıl Kullanılır",
      "sec-examples": "Sinüs Hesaplamaya Adım Adım Örnekler",
      "sec-applications": "Sinüs Oranının Gerçek Hayattaki Kullanım Örnekleri",
      "sec-angle": "Sinüs ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
      "sec-hypotenuse": "Sinüs ile Karşı Kenar Nasıl Bulunur",
      "sec-recover": "Sinüs Oranından Açı Nasıl Bulunur",
      "sec-mistakes": "Sinüs Hesaplarken Yapılan Yaygın Hatalar",
      "sec-verify": "Sinüs Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
      "sec-vs": "Sinüs ile Kosinüs, Tanjant ve Kosekant Karşılaştırması",
      "sec-related": "İlgili Trigonometri Hesaplayıcılarını Keşfedin",
      "sec-faq": "Sıkça Sorulan Sorular"
    },
    "sections": {
      "sec-intro": {
        "h2": "Sinüs Oranı Hesaplayıcı Nedir?",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinüs oranı hesaplayıcı tek bir soruyu yanıtlar: bir dik üçgende dar bir açı için, açının karşısındaki kenar en uzun kenarla nasıl karşılaştırılır? Karşı kenarı ve hipotenüsü girin; araç karşı kenarı hipotenüse böler ve [[\\sin(A)=a/c]] sonucunu verir. Bir dik üçgenin karşı kenarı 3 cm ve hipotenüsü 5 cm ise, [[\\sin(A)=3/5=0.6]] olur. Bu 0.6, sinüs oranıdır: karşı kenarın hipotenüsün yüzde 60'ı olduğunu söyler. Bu bir açı değildir, bu yüzden asla [[0.6^\\circ]] olarak okumayın. Komşu kenar bu hesaba asla girmez; karşı kenar ve hipotenüs tek başına yeterlidir. Sinüs, temel trigonometrik oranlardan biridir ve gücü, iki uzunluğu yalnızca açıya bağlı, üçgenin boyutuna bağlı olmayan bir şekilde karşılaştırmasıdır. Derece cinsinden açıya ihtiyacınız varsa, ters sinüs oranı dereceye dönüştürür."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Karşı Kenar ve Hipotenüsü Anlama",
        "blocks": [
          {
            "kind": "h3",
            "text": "Dik Üçgen Nedir?"
          },
          {
            "kind": "p",
            "text": "Dik üçgenin bir açısı tam olarak [[90^\\circ]] olur; bu, birbirine dik iki doğru arasındaki açıdır, tıpkı düz bir zemine değen duvar gibi. Hipotenüs bu dik açının karşısında yer alır ve her zaman en uzun kenardır, çünkü köşeyi boydan boya kat eden tam köşegeni kapsamalıdır. Diğer iki açı kalan 90 dereceyi paylaşır, bu yüzden ikisi de dardır. İki dik kenar dik açıda, birbirine dik olarak buluşur ve hipotenüsle olan ilişkileri, dik üçgen trigonometrisini mümkün kılan şeydir."
          },
          {
            "kind": "h3",
            "text": "Karşı Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Karşı kenar [[a]], referans açı [[A]]'nın tam karşısındaki kenardır; köşesine asla değmeyen tek kenardır. Pratik problemlerde genellikle dikey bir yükselti, bir yükseklik farkı veya dik bir bileşen rolünü oynar: bir merdivenin ulaştığı duvar yüksekliği, bir rampanın dikey yükseltisi veya bir ölçümdeki yükselti farkı. Hangi kenarın karşı sayılacağı, seçilen referans açıya bağlıdır; bu yüzden [[A]] açısından [[C]] açısına geçmek, karşı ve komşu etiketlerini değiştirir. Sinüs formülünün paydasında değil payında yer alır, çünkü sinüs o açının karşısındaki kenarın hipotenüse göre ne kadar büyük olduğunu ölçer."
          },
          {
            "kind": "h3",
            "text": "Hipotenüs Nedir?"
          },
          {
            "kind": "p",
            "text": "Hipotenüs [[c]], dik açının karşısındaki kenardır: her diyagramda [[90^\\circ]] köşesini işaretleyen küçük kareye bakar ve her iki dik kenardan da kesinlikle uzundur. Pratik problemlerde genellikle eğik bir uzunluk rolünü oynar: merdiven, rampa yüzeyi, kiriş, kablo, çapraz destek veya düz bir yol. Sinüs formülünün paydasında yer alır; bu yüzden her sinüs değeri 0 ile 1 arasında çıkar: pay her zaman paydadan kısa, gerçek bir dik kenardır."
          },
          {
            "kind": "h3",
            "text": "Komşu Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Komşu kenar [[b]], hipotenüs olmadan referans açı [[A]]'ya değen dik kenardır. Birincil sinüs hesabında rolü yoktur; bu yüzden hesaplayıcı onu asla istemez. Kosinüs, tanjant veya kayıp bir kenar hesaplanırken ve bilinen iki uzunluğun gerçek bir dik üçgen oluşturduğunu doğrulamak için Pisagor teoremi kullanıldığında işe yarar."
          }
        ],
        "imgAlt": "Sol altta A açısı olan dik üçgen, altın karşı kenar a, mavi hipotenüs c, sin(A)=a/c",
        "figcaption": "A açısı sol altta yer alır; sinüs, komşu kenar b yerine altın karşı kenar a ile mavi hipotenüs c'yi kullanır."
      },
      "sec-whatis": {
        "h2": "Sinüs Oranını Anlama",
        "blocks": [
          {
            "kind": "p",
            "text": "Dar bir açının sinüsü, o açının tam karşısındaki kenarı üçgenin en uzun kenarıyla karşılaştırır:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)]] ifadesini \"A açısının sinüsü\" olarak okuyun. Pay [[a]] karşı kenardır; payda [[c]] hipotenüstür. Kesir tek ve somut bir soruyu yanıtlar: karşı kenar, hipotenüsün ne kadarını oluşturur? İki girdi de aynı birimle ölçülen uzunluklar olduğundan sonuç sade bir sayıdır ve bu sayı yalnızca açıya bağlıdır, asla üçgenin boyutuna değil."
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA'yı Anlama"
          },
          {
            "kind": "p",
            "text": "Öğrenciler üç ana oranı SOH-CAH-TOA kısaltmasıyla hatırlar:"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> Sinüs = Karşı / Hipotenüs. <strong>CAH:</strong> Kosinüs = Komşu / Hipotenüs. <strong>TOA:</strong> Tanjant = Karşı / Komşu."
          },
          {
            "kind": "p",
            "text": "SOH, doğrudan sinüs formülü [[\\sin(A)=a/c]] ile örtüşür. Kısaltma işe yarar çünkü her oran adını, ihtiyaç duyduğu iki kenarla doğru sırada eşleştirir: sinüs için karşı kenar üste, hipotenüs alta gider. İki kenar doğru adlandırıldıktan sonra kısaltma, \"hangi kenar nereye gider\" sorusunu bir ezber probleminden bir arama problemine dönüştürür."
          },
          {
            "kind": "h3",
            "text": "Sinüs Neden Bir Orandır"
          },
          {
            "kind": "p",
            "text": "İki uzunluğu bölmek, birimler sadeleştiği için boyutsuz bir sayı üretir:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "Metreler sadeleşir ve 0.6 kalır. 300 cm ve 500 cm kullanmak da aynı sonucu verir, çünkü iki uzunluk birlikte ölçeklenir. Tek şart uyumlu birimlerdir: iki ölçüm de aynı birimi kullanmalı veya bölmeden önce biri dönüştürülmelidir. Oran bu yüzden açının bir özelliğidir, üçgeni ölçmek için kullanılan belirli bir cetvelin değil."
          },
          {
            "kind": "h3",
            "text": "0.6 Sinüs Değeri Ne Anlama Gelir?"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]], karşı kenarın hipotenüsün yüzde 60'ı olduğu anlamına gelir. 3-4-5 üçgeni klasik referanstır: [[\\sin(A)=3/5=0.6]]. Sayı, üçgenin şeklini bir bakışta ortaya koyar: 1'e yakın bir sinüs, karşı kenarın neredeyse hipotenüse eşit olduğu ve açının dik olduğu anlamına gelir; 0'a yakın bir sinüs, karşı kenarın hipotenüse göre kısa ve açının yatık olduğu anlamına gelir. Bunların hiçbiri 0.6'nın bir açı olduğunu düşündürmez; bu bir orandır ve onu dereceye yalnızca ters sinüs dönüştürür."
          },
          {
            "kind": "h3",
            "text": "Sinüs Neden 0 ile 1 Arasındadır"
          },
          {
            "kind": "p",
            "text": "Hipotenüs karşı kenardan uzundur, bu yüzden [[0 \\lt a \\lt c]] ve dolayısıyla:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Geçerli, yozlaşmamış bir dik üçgenin dar açısı için sinüs oranı tam olarak 0 veya tam olarak 1 olamaz. Açı [[0^\\circ]]'ye yaklaştıkça değer 0'a yaklaşır, çünkü karşı kenar hiçe doğru küçülür; açı [[90^\\circ]]'ye yaklaştıkça 1'e yaklaşır, çünkü karşı kenar büyüyerek neredeyse hipotenüse eşit olur. Bu sınır değerlerin hiçbiri gerçek bir üçgenin dar açısı tarafından elde edilemez."
          },
          {
            "kind": "h3",
            "text": "Sinüs ve Kosinüs Karşılaştırması"
          },
          {
            "kind": "p",
            "text": "İki oran aynı hipotenüsü paylaşır ama farklı paylar kullanır:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] ve [[\\cos(A)=b/c]]."
          },
          {
            "kind": "p",
            "text": "Sinüs karşı kenarı, yani açının karşısındaki dik kenarı kullanır; kosinüs komşu kenarı, yani açının yanındaki dik kenarı kullanır. 1'in üzerinde bir sonuç, kesrin ters çevrildiği veya hipotenüsün paya konduğu anlamına gelir. Sinüs, kosinüsün tersi değildir: sinüsün çarpmaya göre tersi kosekanttır."
          }
        ],
        "imgAlt": "Üç adım: üçgene a=3, b=4, c=5 etiketleri koyun, sin(A)=a/c uygulayın, 0.6 elde edin",
        "figcaption": "Kenarları belirleyin, formülü uygulayın ve hesaplayın: karşı kenar hipotenüsün yüzde 60'ıdır."
      },
      "sec-formula": {
        "h2": "Sinüs Formülü Nasıl Çalışır",
        "blocks": [
          {
            "kind": "p",
            "text": "Formül mantıklı bir sırayı izler. Sözcüklerle tanımla başlayın:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "Ardından sayfanın mevcut gösterimini kullanın: karşı kenar için [[a]], hipotenüs için [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Karşı kenar paydadır çünkü sinüs o kenarın hipotenüse göre büyüklüğünü ölçer; hipotenüs paydadır çünkü diğer her kenarın karşılaştırıldığı referans uzunluktur. Düzen sabittir: pay \"bu dik kenar ne kadar büyük?\" diye sorar, payda \"neye göre?\" diye yanıtlar."
          },
          {
            "kind": "h3",
            "text": "Tam Çözümlü Örnek: 3-4-5 Dik Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilenler: [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] ve [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "<strong>Adım 1:</strong> Formülü yazın. [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>Adım 2:</strong> Bilinen değerleri yerine koyun. [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>Adım 3:</strong> Bölün. [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>Adım 4:</strong> Sonucu yorumlayın. Karşı kenar hipotenüsün yüzde 60'ıdır."
          },
          {
            "kind": "p",
            "text": "<strong>Adım 5:</strong> Üçgeni doğrulayın. [[3^2+4^2=5^2]] ve [[9+16=25]]. Pisagor kontrolü, bu kenar uzunluklarının bir dik üçgen oluşturduğunu doğrular, bu yüzden sinüs sonucu güvenilirdir."
          },
          {
            "kind": "h3",
            "text": "Önemli Açıklama"
          },
          {
            "kind": "p",
            "text": "Okuyucu sinüs oranını değil açının kendisini istiyorsa ters sinüs gerekir: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Ters sinüs, arksinüs olarak da adlandırılır ve sinüs oranını hesaplamaktan ayrı bir işlemdir. Mevcut sinüs oranı hesaplayıcı, iki kenar uzunluğundan oranı hesaplar; açıyı doğrudan vermez."
          }
        ]
      },
      "sec-howto": {
        "h2": "Sinüs Oranı Hesaplayıcı Nasıl Kullanılır",
        "blocks": [
          {
            "kind": "p",
            "text": "Hesaplayıcı formülü birebir yansıtır: iki girdi, bir düğme, bir oran. Arayüzü sırayla izleyin."
          }
        ],
        "steps": [
          "<strong>Referans açı [[A]]'yı belirleyin.</strong> Her sinüs hesabı tek bir dar açıya bağlıdır; karşı kenar ona göre tanımlanır.",
          "<strong>[[A]] açısının tam karşısındaki karşı kenar [[a]]'yı bulun.</strong> Bu, açının köşesine asla değmeyen dik kenardır.",
          "<strong>Dik açının karşısındaki ve en uzun kenar olan hipotenüs [[c]]'yi bulun.</strong> [[90^\\circ]] köşesini işaretleyen küçük kareye bakar.",
          "<strong>İki kenar uzunluğunu edinin veya ölçün.</strong> Bir şerit metre, bir plan ölçüsü veya problem metnindeki değerleri kullanın.",
          "<strong>Karşı kenar uzunluğunu ilk giriş alanına girin.</strong> Bu, pay [[a]] olur.",
          "<strong>Hipotenüs uzunluğunu ikinci giriş alanına girin.</strong> Bu, payda [[c]] olur.",
          "<strong>Mevcut birim seçicileri kullanarak uyumlu ölçü birimleri seçin.</strong> Metre ile metre, santimetre ile santimetre; karışık birimler anlamsız bir oran verir.",
          "<strong>İki ölçümün de pozitif olduğunu doğrulayın.</strong> Sıfır veya negatif uzunluklar üçgen oluşturamaz.",
          "<strong>Hipotenüsün karşı kenardan uzun olduğunu kontrol edin.</strong> [[a \\ge c]] ise girdiler yer değiştirmiştir veya üçgen imkansızdır.",
          "<strong>Calculate sin(A) düğmesine tıklayın.</strong> Araç karşı kenarı hipotenüse böler.",
          "<strong>Elde edilen sinüs oranını okuyun.</strong> Bu sade bir ondalıktır; açı veya uzunluk değildir.",
          "<strong>Sonucun 0'dan büyük ve 1'den küçük olduğunu doğrulayın.</strong> Dar referans açılı, geçerli ve yozlaşmamış bir dik üçgen için tek yasal aralık budur.",
          "<strong>Girdileri temizleyip başka bir hesaba başlamak istediğinizde Reset kullanın.</strong>"
        ],
        "closingParagraphs": [
          "Hesaplayıcının komşu kenara veya açı girdisine ihtiyacı yoktur. Yalnızca bölme işlemini yapar, başka bir şey yapmaz: kayıtlı geçmiş yok, grafik yok, gizli mod yok."
        ]
      },
      "sec-examples": {
        "h2": "Sinüs Hesaplamaya Adım Adım Örnekler",
        "blocks": [
          {
            "kind": "h3",
            "text": "Örnek 1: 3-4-5 Dik Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilenler: [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] ve [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Karşı kenar hipotenüsün yüzde 60'ıdır."
          },
          {
            "kind": "h3",
            "text": "Örnek 2: 5-12-13 Dik Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilenler: [[a=5\\,\\text{m}]], [[b=12\\,\\text{m}]] ve [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Karşı kenar hipotenüsün yaklaşık yüzde 38.46'sıdır."
          },
          {
            "kind": "h3",
            "text": "Örnek 3: 30-60-90 Üçgeni"
          },
          {
            "kind": "p",
            "text": "[[A=30^\\circ]] referans açısı için karşı kenar hipotenüsün yarısıdır. Şunları kullanın: [[a=1\\,\\text{cm}]], [[b=\\sqrt{3}\\,\\text{cm}]] ve [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "Bu kullanışlı bir özel açı sonucudur: 30 derecede karşı kenar tam olarak hipotenüsün yarısıdır; bu üçgenin ders kitabı problemlerinde bu kadar sık görülmesinin nedeni budur."
          },
          {
            "kind": "h3",
            "text": "Örnek 4: 45-45-90 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilenler: [[a=1\\,\\text{cm}]], [[b=1\\,\\text{cm}]] ve [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "Eşit dik kenarlar, iki dar açı için eşit sinüs ve kosinüs değerleri üretir: 45 derecede her dar açı 1'lik bir kenara ve [[\\sqrt{2}]]'lik bir hipotenüse bakar, bu yüzden sinüs ve kosinüs çakışır."
          }
        ]
      },
      "sec-applications": {
        "h2": "Sinüs Oranının Gerçek Hayattaki Kullanım Örnekleri",
        "blocks": [
          {
            "kind": "p",
            "text": "Her örnek durumu belirtir, karşı kenarı ve hipotenüsü tanımlar, bunları formülde yerine koyar ve sonucu sade bir dille yorumlar."
          },
          {
            "kind": "h3",
            "text": "Örnek 5: Bir Merdivenin Sinüs Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Bir merdiven 5 m uzunluğundadır ve dikey bir duvarda 4 m yüksekliğe ulaşır. Referans açı [[A]], merdiven ile yatay zemin arasındadır. Merdiven hipotenüstür, [[c=5\\,\\text{m}]]; dikey yükseklik karşı kenardır, [[a=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Dikey yükseklik, merdiven uzunluğunun yüzde 80'idir. Oran, merdivenin geometrisini tanımlar ve merdivenin güvenli konumlandırılıp konumlandırılmadığını belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 6: Bir Çatı Kirişinin Sinüs Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Bir çatı kirişinin eğik uzunluğu 6.5 m, dikey yükseltisi 2.5 m'dir. Kiriş hipotenüstür, [[c=6.5\\,\\text{m}]]; dikey yükselti karşı kenardır, [[a=2.5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Dikey yükselti, kiriş uzunluğunun yaklaşık yüzde 38.46'sıdır. Oran, yapısal uygunluğu veya çatı tasarımına uygunluğu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 7: Bir Rampanın Sinüs Oranını Değerlendirme"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir rampanın eğik uzunluğu 9.5 m, dikey yükseltisi 0.75 m'dir. Eğim hipotenüstür, [[c=9.5\\,\\text{m}]]; dikey yükselti karşı kenardır, [[a=0.75\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "Dikey yükselti, eğik uzunluğun yaklaşık yüzde 7.89'udur; yatık bir eğimdir. Bu oran tek başına erişilebilirliği veya yapı yönetmeliğine uygunluğu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 8: Bir Ölçüm Çalışması"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir ölçüm üçgeninin düz çizgi mesafesi 50 m, dikey yükselti farkı 30 m'dir. Düz çizgi hipotenüstür, [[c=50\\,\\text{m}]]; dikey fark karşı kenardır, [[a=30\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Dikey fark, düz çizgi mesafesinin yüzde 60'ıdır. Gerçek ölçüm çalışmaları ek düzeltmeler, alet yüksekliği ayarlamaları ve daha ayrıntılı ölçümler gerektirebilir."
          },
          {
            "kind": "h3",
            "text": "Örnek 9: Bir Direği Destekleyen Gergi Teli"
          },
          {
            "kind": "p",
            "text": "Bir gergi teli 13 m uzunluğundadır ve bağlantı noktası, yer ankrajı seviyesinin 5 m üzerindedir. Tel hipotenüstür, [[c=13\\,\\text{m}]]; dikey ayrım karşı kenardır, [[a=5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Dikey ayrım, tel uzunluğunun yaklaşık yüzde 38.46'sıdır. Oran, tel gerilimini, ankraj dayanımını veya yapısal güvenliği belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 10: Bir Merdiven Kirişinin Sinüs Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir merdiven kirişi 5 m uzunluğundadır ve 3 m dikey yükseltiyi kapsar. Kiriş hipotenüstür, [[c=5\\,\\text{m}]]; dikey yükselti karşı kenardır, [[a=3\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Dikey yükselti, köşegen kiriş uzunluğunun yüzde 60'ıdır. Hesaplama, merdiven ölçülerini veya yapı yönetmeliğine uygunluğu doğrulamaz."
          },
          {
            "kind": "h3",
            "text": "Örnek 11: Bir Vinç Bomunun Dikey Bileşenini Anlama"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir vinç bomunun uzunluğu 10 m, dikey bileşeni 8 m'dir. Bom hipotenüstür, [[c=10\\,\\text{m}]]; dikey bileşen karşı kenardır, [[a=8\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Dikey bileşen, bom uzunluğunun yüzde 80'idir. Oran, vinç kapasitesini veya işletme güvenliğini belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 12: Düz Bir Uçak Uçuş Kesimi"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir uçuş kesimi için uçak, düz bir yol boyunca 5 km giderken 1.5 km irtifa kazanır. Yol hipotenüstür, [[c=5\\,\\text{km}]]; dikey kazanç karşı kenardır, [[a=1.5\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "Dikey kazanç, düz yol uzunluğunun yüzde 30'udur. Bu, idealleştirilmiş bir geometri örneğidir; tam bir uçuş seyrüsefer hesabı değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 13: Çapraz Bir Mekanik Destek"
          },
          {
            "kind": "p",
            "text": "Çapraz bir desteğin uzunluğu 2 m, dikey bileşeni 1.6 m'dir. Destek hipotenüstür, [[c=2\\,\\text{m}]]; dikey bileşen karşı kenardır, [[a=1.6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Dikey bileşen, destek uzunluğunun yüzde 80'idir. Oran, desteğin dayanımını veya uygunluğunu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 14: Bir Yürüyüş Rotasının Sinüs Oranı"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş düz bir yürüyüş bölümünün yol uzunluğu 100 m, dikey yükselti kazancı 25 m'dir. Yol hipotenüstür, [[c=100\\,\\text{m}]]; yükselti kazancı karşı kenardır, [[a=25\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "Yükselti kazancı, düz yol uzunluğunun yüzde 25'idir. Gerçek yürüyüş parkurları virajlar ve değişen eğimler içerebilir."
          },
          {
            "kind": "h3",
            "text": "Örnek 15: Bir Tente Desteği"
          },
          {
            "kind": "p",
            "text": "Bir tente desteğinin uzunluğu 3 m, dikey bileşeni 1.2 m'dir. Destek hipotenüstür, [[c=3\\,\\text{m}]]; dikey bileşen karşı kenardır, [[a=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "Dikey bileşen, destek uzunluğunun yüzde 40'ıdır. Hesaplama yapısal uygunluğu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 16: Bir Ağacın Tepesine Görüş Çizgisi"
          },
          {
            "kind": "p",
            "text": "Bir ağacın tepesine basitleştirilmiş bir görüş çizgisi 20 m ölçer. Gözlemcinin göz seviyesi ile ağacın tepesi arasındaki dikey fark 12 m'dir. Görüş çizgisi hipotenüstür, [[c=20\\,\\text{m}]]; dikey fark karşı kenardır, [[a=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Dikey fark, görüş çizgisi mesafesinin yüzde 60'ıdır. Sonuç, gözlemcinin göz yüksekliği ve diğer gerekli bilgiler hesaba katılmadıkça ağacın yerden toplam yüksekliğini vermez."
          }
        ],
        "closingParagraphs": [
          "Sinüs, birimi olan fiziksel bir büyüklük değil, matematiksel bir orandır. Pratik değeri, dikey veya dik bir bileşeni eğik bir mesafeyle karşılaştırmaktan, açı bilindiğinde bileşenleri hesaplamaktan ve geometrik ilişkileri doğrulamaktan gelir. Sinüsü tek başına yapısal güvenlik, yük kapasitesi, erişilebilirlik veya mühendislik uygunluğunun bir belgesi olarak görmeyin."
        ],
        "tables": [
          {
            "headers": [
              "Durum",
              "Karşı [[a]]",
              "Hipotenüs [[c]]",
              "Formül",
              "Oran",
              "Anlam"
            ],
            "rows": [
              ["Merdiven", "4 m", "5 m", "4/5", "0.8", "Yükseklik, merdiven uzunluğunun %80'i"],
              ["Çatı kirişi", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "Yükselti, kiriş uzunluğunun %38.46'sı"],
              ["Rampa", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "Yatık eğim, %7.89 yükselti"],
              ["Ölçüm", "30 m", "50 m", "30/50", "0.6", "Yükselti, çizgi mesafesinin %60'ı"],
              ["Gergi teli", "5 m", "13 m", "5/13", "0.3846", "Yükseklik, tel uzunluğunun %38.46'sı"],
              ["Merdiven kirişi", "3 m", "5 m", "3/5", "0.6", "Yükselti, kiriş uzunluğunun %60'ı"],
              ["Vinç bomu", "8 m", "10 m", "8/10", "0.8", "Dikey erişim, bomun %80'i"],
              ["Uçuş kesimi", "1.5 km", "5 km", "1.5/5", "0.3", "Kazanç, uçuş yolunun %30'u"],
              ["Çapraz destek", "1.6 m", "2 m", "1.6/2", "0.8", "Dikey, destek uzunluğunun %80'i"],
              ["Yürüyüş rotası", "25 m", "100 m", "25/100", "0.25", "Kazanç, yol uzunluğunun %25'i"],
              ["Tente desteği", "1.2 m", "3 m", "1.2/3", "0.4", "Dikey, desteğin %40'ı"],
              ["Görüş çizgisi", "12 m", "20 m", "12/20", "0.6", "Yükseklik farkı, görüş çizgisinin %60'ı"]
            ]
          }
        ],
        "imgAlt": "Dört panel: merdiven oranı 0.8, rampa 0.07895, ölçüm 0.6, vinç bomu 0.8, etiketli üçgenlerle",
        "figcaption": "Dört pratik hesaplama: merdiven, rampa, ölçüm ve vinç bomu; her birinde üçgeni, formülü ve oranı."
      },
      "sec-angle": {
        "h2": "Sinüs ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
        "blocks": [
          {
            "kind": "p",
            "text": "Referans açı büyüdükçe sinüs artar. Geometri nedenini açıklar: [[A]] açısı küçükken karşı kenar hipotenüse göre kısadır, bu yüzden oran 0'a yakındır. Açı genişledikçe karşı kenar hipotenüsün daha büyük bir payı olur ve oran 1'e doğru yükselir. [[30^\\circ]]'de sinüs tam olarak 0.5'tir; [[45^\\circ]]'de yaklaşık 0.7071; [[60^\\circ]]'de yaklaşık 0.8660; açı [[90^\\circ]]'ye yaklaştıkça sinüs 1'e yaklaşır."
          }
        ],
        "tables": [
          {
            "headers": [
              "Açı [[A]]",
              "Sinüs oranı",
              "Yorum"
            ],
            "rows": [
              ["[[30^\\circ]]", "0.5", "Karşı kenar hipotenüsün yarısıdır"],
              ["[[45^\\circ]]", "Yaklaşık 0.7071", "Karşı kenar hipotenüsün yaklaşık %70.71'idir"],
              ["[[60^\\circ]]", "Yaklaşık 0.8660", "Karşı kenar hipotenüsün yaklaşık %86.60'ıdır"],
              ["[[80^\\circ]]", "Yaklaşık 0.9848", "Karşı kenar hipotenüsün yaklaşık %98.48'idir"]
            ]
          }
        ],
        "closingParagraphs": [
          "Örüntü basit ve monotondur: açıdaki her artış sinüsü yükseltir ve oran her dar açı için 0 ile 1 arasında kalır. Sinüs, üçgenin mutlak boyutunu değil şeklini tanımlar: aynı dar açıya sahip iki üçgen, kenar uzunlukları farklı olsa da aynı sinüs oranına sahiptir. [[90^\\circ]] girdisi sınırlayıcı bir referans değerdir; yozlaşmamış bir dik üçgende dar açı değildir."
        ],
        "imgAlt": "30, 45, 60 derecede üç üçgen; sinüs değerleri 0.5, 0.7071, 0.8660; açı büyüdükçe sinüs artar",
        "figcaption": "A açısı büyüdükçe karşı kenar hipotenüsün daha büyük bir payı olur, bu yüzden sin(A) artar."
      },
      "sec-hypotenuse": {
        "h2": "Sinüs ile Karşı Kenar Nasıl Bulunur",
        "blocks": [
          {
            "kind": "p",
            "text": "Hipotenüs ve açı bilindiğinde karşı kenarı bulmak için sinüs formülü yeniden düzenlenebilir. [[\\sin(A)=a/c]] ile başlayın ve iki tarafı da [[c]] ile çarpın:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Karşı kenar, hipotenüs ile açının sinüsünün çarpımına eşittir. Hipotenüs [[c=10\\,\\text{m}]] ve açı [[A=30^\\circ]] verildiğinde ve [[\\sin(30^\\circ)=0.5]] bilindiğinde:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "Karşı kenar, [[30^\\circ]]'lik bir açı için hipotenüsün yarısıdır; bu, 30-60-90 geometrisiyle uyuşur: 30 derecenin karşısındaki kenar tam olarak hipotenüsün yarısıdır."
          },
          {
            "kind": "p",
            "text": "Hipotenüs de aynı şekilde, yeniden düzenlenerek bulunabilir:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Karşı kenar [[a=6\\,\\text{m}]] ve [[A=30^\\circ]] ile: [[c=6/0.5]], yani [[\\boxed{c=12\\,\\text{m}}]]. Bunlar aynı formülün matematiksel yeniden düzenlemeleridir. Bu sayfadaki hesaplayıcı, kenar uzunluklarından sinüs oranını verir; kayıp kenarları doğrudan hesaplamaz."
          }
        ]
      },
      "sec-recover": {
        "h2": "Sinüs Oranından Açı Nasıl Bulunur",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinüs oranı ile açı farklı büyüklüklerdir: biri boyutsuz bir kenar karşılaştırmasıdır, diğeri dereceyle ölçülür. Sinüs oranı biliniyorken açı gerektiğinde ters sinüs kullanılabilir:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Ters sinüs, arksinüs olarak da adlandırılır. [[\\sin(A)=0.6]] verildiğinde:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "Hesaplayıcı dereceye ayarlıyken açı yaklaşık [[36.87^\\circ]] olur. Bu, sinüs oranı hesaplayıcının doğrudan yaptığı bir şey değil, ayrı bir açı hesabıdır. Daha geniş trigonometride ters sinüsün birden çok açı çözümü olabilir, ancak dik üçgenin dar açı kısıtı uygun dar çözümü seçer."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Sinüs Hesaplarken Yapılan Yaygın Hatalar",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinüs hatalarının çoğu ters çevrilmiş bir kesirden, yanlış etiketlenmiş bir kenardan veya birim kaymasından gelir. Sonuca güvenmeden önce bu listeyi gözden geçirin."
          }
        ],
        "steps": [
          "<strong>Karşı kenar yerine komşu kenarı kullanma.</strong> [[b/c]] bölümü kosinüsü hesaplar. [[a=3]], [[b=4]] ve [[c=5]] ile yanlış kenar 0.8 verir; doğru kenar 0.6 verir.",
          "<strong>Formülü ters çevirip [[a/c]] yerine [[c/a]] hesaplama.</strong> Bu, sinüs yerine kosekantı verir. [[a=3]] ve [[c=5]] ile ters kesir 1.6667 verir; her zaman 1'in üzerindedir ve açık bir uyarı işaretidir.",
          "<strong>Sinüs ile kosinüsü karıştırma.</strong> Sinüs karşı kenarı kullanır; kosinüs komşu kenarı kullanır. Payda yanlış kenar varsa cevap kosinüstür, sinüs değil.",
          "<strong>Sinüs ile kosekantı karıştırma.</strong> Kosekant tersidir: hipotenüs bölü karşı kenar. Benzer adlar gerçek hatalara yol açar ama kesir sırası tam tersidir.",
          "<strong>Hipotenüsten uzun bir karşı kenar girme.</strong> Hipotenüs her zaman en uzun kenardır. [[a \\ge c]] ise girdiler yer değiştirmiştir veya üçgen imkansızdır.",
          "<strong>Sıfır veya negatif kenar uzunlukları girme.</strong> Bir üçgenin sıfır veya negatif kenarı olamaz; bu girdiler geçerli bir uç durum değil, veri giriş hatası veya eksik ölçüm işaretidir.",
          "<strong>Ölçü birimlerini karıştırma.</strong> 3 m karşı kenar ile 50 cm hipotenüs 6 verir; anlamsız bir sayıdır. Önce tek birime dönüştürün: 3 m ve 5 m doğru 0.6'yı verir.",
          "<strong>Sinüs oranını derece cinsinden bir açı olarak raporlama.</strong> 0.6 sonucu bir orandır, [[0.6^\\circ]] değildir. Onu derece gibi ele almak, sonraki her hesaba saçmalık sokar.",
          "<strong>Sinüsün fiziksel birimi olduğunu varsayma.</strong> Birimler bölmede sadeleşir, bu yüzden \"0.6 m\" yanlıştır. Sade sayıyı yazın ve birimleri ait oldukları yerde, girdi ölçümlerinde tutun.",
          "<strong>Referans açıyı dik açıyla karıştırma.</strong> Sinüs her zaman dar bir açı kullanır. [[90^\\circ]] açısı bu hesaplarda asla referans açı [[A]] değildir.",
          "<strong>Çok erken yuvarlama.</strong> Ara bir bölmeyi iki ondalığa yuvarlayıp hesaba devam etmek hatayı büyütür. Her adımda tam duyarlılığı koruyun ve yalnızca nihai yanıtı yuvarlayın.",
          "<strong>Sinüsün her açı için aynı olduğunu varsayma.</strong> Her açının kendi sinüs değeri vardır. 0.6 sonucu tek bir belirli açıya (yaklaşık 36.87 derece) aittir, her dik üçgene değil.",
          "<strong>0.6 sinüs değerinin açının [[0.6^\\circ]] olduğu anlamına geldiğini varsayma.</strong> Oran, bir derece ölçüsü değildir. Açının kendisi gerekiyorsa ters sinüsle dönüştürün.",
          "<strong>Çarpmaya göre ters sinüs ile ters fonksiyon sinüsü karıştırma.</strong> [[1/\\sin(A)]] kosekanttır, bir orandır; [[\\sin^{-1}]] ters sinüstür ve bir açı verir. Benzer adlar gerçek hatalara yol açar, bu yüzden gösterimi dikkatle okuyun.",
          "<strong>Sinüs oranının üçgenin mutlak boyutunu belirlediğini varsayma.</strong> Sinüs şekli tanımlar, boyutu değil: 3 cm karşı kenardan 3 km karşı kenara, sayısız üçgen 0.6 sinüsünü paylaşır. Oran oranları sabitler; gerçek uzunluklar en az bir kenar ölçümü gerektirir."
        ],
        "closingParagraphs": [
          "<strong>Yanlışa Karşı Doğru: Çözümlü Bir Karşılaştırma</strong>",
          "Karşı kenar [[a=3]] ve hipotenüs [[c=5]] verildiğinde:",
          "<strong>Yanlış:</strong> [[5/3\\approx1.6667]]. Bu, sinüs oranı değil kosekant oranıdır. Pay ve payda ters çevrilmiştir.",
          "<strong>Doğru:</strong> [[\\sin(A)=3/5=0.6]].",
          "<strong>Doğrulayın:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]. Ters kontrol sonucu doğrular ve yanıt 0 ile 1 arasındadır; geçerli her sinüsün olması gerektiği gibi."
        ]
      },
      "sec-verify": {
        "h2": "Sinüs Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
        "blocks": [
          {
            "kind": "p",
            "text": "Geçerli, yozlaşmamış bir dik üçgen, hipotenüsün kesinlikle en uzun olduğu pozitif kenarlar gerektirir, [[0 \\lt a \\lt c]]; bu yüzden sinüs sonucu 0 ile 1 arasında olmalıdır:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "İki ölçüm de uyumlu birimler kullanmalıdır. 0'a eşit veya küçük, ya da 1'e eşit veya büyük bir sonuç genellikle geçersiz girdileri, ters çevrilmiş kenarları veya yanlış bir üçgen modelini gösterir."
          },
          {
            "kind": "h3",
            "text": "Yöntem 1: Oranı Kontrol Edin"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] ifadesini doğrudan yeniden doğrulayın. [[a=3]] ve [[c=5]] ile: [[\\sin(A)=3/5=0.6]]. İkinci bir el hesabı uyuşmazsa bir kenar yanlış etiketlenmiş veya bir birim karışmıştır."
          },
          {
            "kind": "h3",
            "text": "Yöntem 2: Pisagor Teoremini Kontrol Edin"
          },
          {
            "kind": "p",
            "text": "Komşu kenar gerekiyorsa [[b=\\sqrt{c^2-a^2}]] hesaplayın. [[a=3]] ve [[c=5]] için: [[b=\\sqrt{25-9}=4]] ve [[3^2+4^2=5^2]]. Bu, 3-4-5 dik üçgeninin ölçülerini doğrular. Komşu kenar burada bir doğrulama değeridir, birincil sinüs formülünün parçası değildir."
          },
          {
            "kind": "h3",
            "text": "Yöntem 3: Ters Sinüsle Kontrol Edin"
          },
          {
            "kind": "p",
            "text": "0.6 sinüs oranı için: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Sinüs 0.5'in biraz üzerinde olduğundan açı [[30^\\circ]]'nin biraz üzerinde olmalıdır; değilse kenar etiketleri büyük olasılıkla yer değiştirmiştir. Yuvarlamadan küçük farklar doğabilir."
          }
        ]
      },
      "sec-vs": {
        "h2": "Sinüs ile Kosinüs, Tanjant ve Kosekant Karşılaştırması",
        "blocks": [
          {
            "kind": "p",
            "text": "Her oran farklı bir kenar çiftini karşılaştırır; aynı referans açı ve kenar etiketleri kullanılır:"
          }
        ],
        "tables": [
          {
            "headers": [
              "Oran",
              "Formül",
              "Neyi karşılaştırır"
            ],
            "rows": [
              ["Sinüs", "sin(A) = a/c", "Karşı kenarın hipotenüse oranı"],
              ["Kosinüs", "cos(A) = b/c", "Komşu kenarın hipotenüse oranı"],
              ["Tanjant", "tan(A) = a/b", "Karşı kenarın komşu kenara oranı"],
              ["Kosekant", "csc(A) = c/a", "Hipotenüsün karşı kenara oranı"],
              ["Sekant", "sec(A) = c/b", "Hipotenüsün komşu kenara oranı"],
              ["Kotanjant", "cot(A) = b/a", "Komşu kenarın karşı kenara oranı"]
            ]
          }
        ],
        "closingParagraphs": [
          "Sinüs ve kosekant karşılıklı ters çifttir: [[\\csc(A)=1/\\sin(A)]]. [[\\sin(A)=0.6]] ise [[\\csc(A)\\approx1.6667]] olur. Karşı kenar hipotenüse karşı bilindiğinde, dikey bir bileşen eğik bir uzunlukla karşılaştırılacağında veya uyan kısaltma SOH olduğunda sinüse başvurun; hipotenüse komşu için kosinüse, iki dik kenar bilindiğinde tanjanta ve hipotenüs karşı kenarla karşılaştırıldığında kosekanta başvurun.",
          "Komşu oranlar için <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kosinüs Oranı Hesaplayıcı</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Tanjant Oranı Hesaplayıcı</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kosekant Oranı Hesaplayıcı</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Sekant Oranı Hesaplayıcı</a> ve <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kotanjant Oranı Hesaplayıcı</a> sayfalarına bakın."
        ]
      },
      "sec-related": {
        "h2": "İlgili Trigonometri Hesaplayıcılarını Keşfedin",
        "related": [
          { "name": "Kosinüs Oranı Hesaplayıcı" },
          { "name": "Tanjant Oranı Hesaplayıcı" },
          { "name": "Kosekant Oranı Hesaplayıcı" },
          { "name": "Sekant Oranı Hesaplayıcı" },
          { "name": "Kotanjant Oranı Hesaplayıcı" },
          { "name": "Dik Üçgen Açı Hesaplayıcı" }
        ]
      },
      "sec-conclusion": {
        "h2": "Sinüs Oranını Güvenle Kullanın",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinüs, üç ana oranın ilkidir: karşı kenarı hipotenüse bölün ve açının karşısında en uzun kenarın ne kadarının yer aldığını tanımlamış olursunuz. [[\\sin(A)=a/c]] formülü yalnızca iki ölçüm ister, yanıt her zaman 0 ile 1 arasında boyutsuz bir sayıdır ve referans açı büyüdükçe büyür. Kayıp bir kenar gerektiğinde [[a=c\\sin(A)]] karşı kenarı geri kazandırır; açı gerektiğinde [[A=\\sin^{-1}(a/c)]] onu geri kazandırır. Merdiven, kiriş, rampa veya ders kitabının 3-4-5'i olsun, yöntem asla değişmez: karşı kenarı belirleyin, hipotenüsü belirleyin, bölün ve 0 ile 1 aralığıyla doğrulayın."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Dik üçgen için sinüs formülü nedir?",
        "answer": "sin(A) = a / c: karşı kenar a'yı hipotenüs c'ye bölün. 3 cm karşı kenar ve 5 cm hipotenüs ile sonuç 3/5 = 0.6 olur. Bu ondalık tam yanıttır; boyutsuz bir orandır, açı değildir."
      },
      {
        "question": "İki kenar uzunluğundan sinüs nasıl hesaplanır?",
        "answer": "Referans açı A'yı belirleyin, karşı kenar a ile hipotenüs c'yi aynı birimle ölçün, ikisinin de pozitif ve c'nin a'dan uzun olduğunu doğrulayın, sonra bölün: sin(A) = a / c. Bu sayfada karşı kenarı ilk alana, hipotenüsü ikinci alana girin ve Calculate sin(A) düğmesine tıklayın."
      },
      {
        "question": "Sinüs ile kosinüs arasındaki fark nedir?",
        "answer": "Sinüs karşı kenarı hipotenüse böler (a/c); kosinüs komşu kenarı hipotenüse böler (b/c). İkisi de aynı hipotenüsü kullanır ama pay farklıdır. 1'in üzerinde bir sonuç, kesrin ters çevrildiği veya bir kenarın yanlış etiketlendiği anlamına gelir."
      },
      {
        "question": "Dik üçgende dar bir açı için sinüs neden 1'den küçüktür?",
        "answer": "Geçerli, yozlaşmamış bir dik üçgende hipotenüs her iki dik kenardan da kesinlikle uzundur, bu yüzden 0 < a < c olur. Daha küçük bir uzunluğu daha büyüğüne bölmek her zaman 1'in altında sonuç verir: her dar referans açı için 0 < a/c < 1."
      },
      {
        "question": "Geçerli bir dik üçgende dar bir açı için sinüs 1'e eşit olabilir mi?",
        "answer": "Hayır. Tam olarak 1 olan bir sinüs, karşı kenarın hipotenüse eşit olmasını gerektirir; bu da üçgeni genişliği olmayan dikey bir çizgiye çökertir. 1 değeri, A açısı 90 dereceye yaklaştıkça yaklaşılan bir sınır değerdir; gerçek bir üçgenin ürettiği bir değer asla değildir."
      },
      {
        "question": "0.6 sinüs değeri ne anlama gelir?",
        "answer": "Karşı kenar hipotenüsün yüzde 60'ıdır. 3-4-5 üçgeninde A açısının karşısındaki kenar 3 birim, hipotenüs 5 birimdir; bu yüzden sin(A) = 3/5 = 0.6. Üçgenin şeklini tanımlar; 0.6 derecelik bir açı değildir."
      },
      {
        "question": "Sinüs oranının ölçü birimi var mıdır?",
        "answer": "Hayır. İki girdi de aynı birimle ölçülen uzunluklardır, bu yüzden birimler sadeleşir: 3 m / 5 m = 0.6, tıpkı 300 cm / 500 cm = 0.6 gibi. Sinüsü sade bir sayı olarak raporlayın; asla derece, metre veya fit eklemeyin."
      },
      {
        "question": "Sinüs oranından açı nasıl bulunur?",
        "answer": "Orana ters sinüs uygulayın: A = sin^-1(a/c). sin(A) = 0.6 için A = sin^-1(0.6), yaklaşık 36.87 derece olur. Önce bilimsel hesaplayıcınızı derece moduna alın. Bu sayfadaki hesaplayıcı oranı verir, açıyı değil."
      },
      {
        "question": "Sinüs kullanarak karşı kenar nasıl bulunur?",
        "answer": "Formülü a = c * sin(A) olacak şekilde yeniden düzenleyin. Hipotenüs 10 m ve A açısı 30 derece ise sin(30 deg) = 0.5 olur; bu yüzden a = 10 * 0.5 = 5 m. Bu el ile yapılan bir yeniden düzenlemedir; bu sayfadaki hesaplayıcı kenar uzunluklarından oranı verir, kayıp kenarları değil."
      },
      {
        "question": "Sinüs ile kosekant arasındaki fark nedir?",
        "answer": "Sinüs karşı kenarı hipotenüse böler (a/c); kosekant onun tersidir: hipotenüs bölü karşı kenar (c/a). sin(A) = 0.6 ise csc(A) = 1/0.6, yaklaşık 1.6667 olur. İkisi birbirinin tersidir; asla birbirinin yerine kullanılabilen formüller değildir."
      },
      {
        "question": "Komşu kenarı bilmeden sinüs hesaplayabilir miyim?",
        "answer": "Evet. Birincil sinüs formülü yalnızca karşı kenarı ve hipotenüsü kullanır, bu yüzden komşu kenar hesaba asla girmez. Komşu kenar ancak üçgeni doğrulamak için Pisagor teoremi kullanıldığında veya işe kosinüs, tanjant ya da sekant girdiğinde işe yarar."
      },
      {
        "question": "Sinüs pratik ölçümlerde nasıl kullanılır?",
        "answer": "Sinüs, dikey veya dik bir bileşeni eğik bir uzunlukla karşılaştırır: duvar yüksekliğine karşı merdiven, dikey yükseltisine karşı çatı kirişi, yükseltisine karşı rampa veya yükselti farkına karşı bir ölçüm çizgisi. Oran, eğik mesafenin ne kadarının dikey olduğunu söyler; bu da yükseklikler, boşluklar ve bileşen hesapları için kullanışlıdır."
      }
    ],
    "faqHeading": "Sıkça Sorulan Sorular",
    "relatedHeading": "İlgili Trigonometri Hesaplayıcılarını Keşfedin"
  }
  ,
  "sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "sec-intro": "Vad är en sinusförhållandekalkylator?",
      "sec-triangle": "Förstå den motstående kateten och hypotenusan",
      "sec-whatis": "Förstå sinusförhållandet",
      "sec-formula": "Hur sinusformeln fungerar",
      "sec-howto": "Så använder du sinusförhållandekalkylatorn",
      "sec-examples": "Steg-för-steg-exempel på sinusberäkningar",
      "sec-applications": "Verkliga exempel på användning av sinusförhållandet",
      "sec-angle": "Förstå sambandet mellan sinus och vinkelstorlek",
      "sec-hypotenuse": "Så hittar du den motstående kateten med sinus",
      "sec-recover": "Så hittar du en vinkel ur ett sinusförhållande",
      "sec-mistakes": "Vanliga misstag vid sinusberäkningar",
      "sec-verify": "Så kontrollerar du att ditt sinusresultat är giltigt",
      "sec-vs": "Sinus mot cosinus, tangens och cosekant",
      "sec-related": "Utforska relaterade trigonometrikalkylatorer",
      "sec-faq": "Vanliga frågor"
    },
    "sections": {
      "sec-intro": {
        "h2": "Vad är en sinusförhållandekalkylator?",
        "blocks": [
          {
            "kind": "p",
            "text": "En sinusförhållandekalkylator svarar på en fråga: för en spetsig vinkel i en rätvinklig triangel, hur förhåller sig sidan mitt emot vinkeln till den längsta sidan? Ange den motstående kateten och hypotenusan, så dividerar verktyget den motstående kateten med hypotenusan och returnerar [[\\sin(A)=a/c]]. En rätvinklig triangel har en motstående katet på 3 cm och en hypotenusa på 5 cm, så [[\\sin(A)=3/5=0.6]]. Detta 0,6 är sinusförhållandet: det säger att den motstående kateten är 60 procent av hypotenusan. Det är inte en vinkel, så läs det aldrig som [[0.6^\\circ]]. Den närliggande kateten ingår aldrig i denna beräkning; den motstående kateten och hypotenusan räcker på egen hand. Sinus är ett av de grundläggande trigonometriska förhållandena, och dess styrka är att det jämför två längder på ett sätt som bara beror på vinkeln, inte på triangelns storlek. Om det är vinkeln i grader du behöver omvandlar invers sinus förhållandet till grader."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Förstå den motstående kateten och hypotenusan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Vad är en rätvinklig triangel?"
          },
          {
            "kind": "p",
            "text": "En rätvinklig triangel har en vinkel på exakt [[90^\\circ]], vinkeln mellan två vinkelräta linjer, som en vägg som möter ett plant golv. Hypotenusan ligger mitt emot den räta vinkeln och är alltid den längsta sidan, eftersom den måste spänna över hela diagonalen genom hörnet. De andra två vinklarna delar på de återstående 90 graderna, så båda är spetsiga. De två katetrarna möts i den räta vinkeln, vinkelräta mot varandra, och det är deras relation till hypotenusan som gör rätvinklig trigonometri möjlig."
          },
          {
            "kind": "h3",
            "text": "Vad är den motstående kateten?"
          },
          {
            "kind": "p",
            "text": "Den motstående kateten [[a]] är sidan direkt mitt emot referensvinkeln [[A]], den enda sidan som aldrig vidrör dess hörn. I praktiska problem spelar den ofta rollen som en vertikal stigning, en höjdskillnad eller en vinkelrät komponent: vägghöjden som en stege når, den vertikala stigningen hos en ramp eller höjdskillnaden i en mätning. Vilken sida som räknas som motstående beror på den valda referensvinkeln, så ett byte från vinkel [[A]] till vinkel [[C]] växlar etiketterna motstående och närliggande. Den står i täljaren i sinusformeln eftersom sinus mäter hur stor den sidan över vinkeln är i förhållande till hypotenusan."
          },
          {
            "kind": "h3",
            "text": "Vad är hypotenusan?"
          },
          {
            "kind": "p",
            "text": "Hypotenusan [[c]] är sidan mitt emot den räta vinkeln: i varje diagram vetter den mot den lilla kvadraten som markerar [[90^\\circ]]-hörnet, och den är strikt längre än vardera kateten. I praktiska problem spelar den ofta rollen som en lutande längd: en stege, en rampyta, en takstol, en kabel, ett diagonalt stag eller en rak väg. Den står i nämnaren i sinusformeln, vilket är anledningen till att varje sinusvärde hamnar mellan 0 och 1: täljaren är alltid en äkta katet, kortare än nämnaren."
          },
          {
            "kind": "h3",
            "text": "Vad är den närliggande kateten?"
          },
          {
            "kind": "p",
            "text": "Den närliggande kateten [[b]] är kateten som vidrör referensvinkeln [[A]] utan att vara hypotenusan. Den spelar ingen roll i den primära sinusberäkningen, vilket är anledningen till att kalkylatorn aldrig frågar efter den. Den blir användbar vid beräkning av cosinus, tangens eller en saknad sida, och när Pythagoras sats används för att verifiera att de två kända längderna bildar en äkta rätvinklig triangel."
          }
        ],
        "imgAlt": "Rätvinklig triangel med vinkel A nere till vänster, gyllene motstående katet a, blå hypotenusa c",
        "figcaption": "Vinkel A sitter nere till vänster; sinus använder den gyllene motstående kateten a och den blå hypotenusan c, inte den närliggande kateten b."
      },
      "sec-whatis": {
        "h2": "Förstå sinusförhållandet",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus för en spetsig vinkel jämför sidan direkt mitt emot den vinkeln med triangelns längsta sida:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Läs [[\\sin(A)]] som \"sinus för vinkel A\". Täljaren [[a]] är den motstående kateten; nämnaren [[c]] är hypotenusan. Bråket svarar på en enda konkret fråga: hur stor del av hypotenusan utgör den motstående kateten? Eftersom båda inmatningarna är längder mätta i samma enhet är resultatet ett vanligt tal, och det talet beror bara på vinkeln, aldrig på triangelns storlek."
          },
          {
            "kind": "h3",
            "text": "Förstå SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "Elever kommer ihåg de tre huvudförhållandena med minnesregeln SOH-CAH-TOA:"
          },
          {
            "kind": "p",
            "text": "<strong>SOH:</strong> Sinus = Motstående / Hypotenusa. <strong>CAH:</strong> Cosinus = Närliggande / Hypotenusa. <strong>TOA:</strong> Tangens = Motstående / Närliggande."
          },
          {
            "kind": "p",
            "text": "SOH motsvarar direkt sinusformeln [[\\sin(A)=a/c]]. Minnesregeln fungerar eftersom den parar varje förhållandenamn med de två sidor det behöver, i rätt ordning: för sinus hamnar den motstående kateten överst och hypotenusan underst. När de två sidorna väl är korrekt namngivna förvandlar minnesregeln \"vilken sida hamnar var\" från ett minnesproblem till ett uppslagsproblem."
          },
          {
            "kind": "h3",
            "text": "Varför sinus är ett förhållande"
          },
          {
            "kind": "p",
            "text": "Att dividera två längder ger ett dimensionslöst tal eftersom enheterna tar ut varandra:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "Metrarna tar ut varandra och 0,6 återstår. Att använda 300 cm och 500 cm ger exakt samma resultat, eftersom båda längderna skalas tillsammans. Det enda kravet är kompatibla enheter: båda mätningarna måste använda samma enhet, eller en av dem måste konverteras före divisionen. Förhållandet är därför en egenskap hos vinkeln, inte hos den särskilda linjal som användes för att mäta triangeln."
          },
          {
            "kind": "h3",
            "text": "Vad betyder ett sinusvärde på 0,6?"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] betyder att den motstående kateten är 60 procent av hypotenusan. 3-4-5-triangeln är den klassiska referensen: [[\\sin(A)=3/5=0.6]]. Talet avslöjar triangelns form med en blick: ett sinus nära 1 betyder att den motstående kateten nästan matchar hypotenusan och att vinkeln är brant; ett sinus nära 0 betyder att den motstående kateten är kort i förhållande till hypotenusan och att vinkeln är flack. Inget av detta antyder att 0,6 är en vinkel; det är en proportion, och endast invers sinus gör den till grader."
          },
          {
            "kind": "h3",
            "text": "Varför sinus ligger mellan 0 och 1"
          },
          {
            "kind": "p",
            "text": "Hypotenusan är längre än den motstående kateten, så [[0 \\lt a \\lt c]], och därför:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "En giltig, icke-degenererad rätvinklig triangel kan inte ha ett sinusförhållande på exakt 0 eller exakt 1 för sin spetsiga vinkel. Värdet närmar sig 0 när vinkeln närmar sig [[0^\\circ]], eftersom den motstående kateten krymper mot ingenting; det närmar sig 1 när vinkeln närmar sig [[90^\\circ]], eftersom den motstående kateten växer tills den nästan matchar hypotenusan. Inget av gränsvärdena uppnås av den spetsiga vinkeln i en verklig triangel."
          },
          {
            "kind": "h3",
            "text": "Sinus mot cosinus"
          },
          {
            "kind": "p",
            "text": "De två förhållandena delar samma hypotenusa men använder olika täljare:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] och [[\\cos(A)=b/c]]."
          },
          {
            "kind": "p",
            "text": "Sinus använder den motstående kateten, kateten över vinkeln; cosinus använder den närliggande kateten, kateten bredvid vinkeln. Ett resultat över 1 betyder att bråket vänts eller att hypotenusan placerats i täljaren. Sinus är inte det reciproka värdet av cosinus: det reciproka värdet av sinus är cosekant."
          }
        ],
        "imgAlt": "Tre steg: märk a=3, b=4, c=5 på en triangel, tillämpa sin(A)=a/c, få 0.6, alltså 60 procent",
        "figcaption": "Identifiera sidorna, tillämpa formeln och beräkna: den motstående kateten är 60 procent av hypotenusan."
      },
      "sec-formula": {
        "h2": "Hur sinusformeln fungerar",
        "blocks": [
          {
            "kind": "p",
            "text": "Formeln följer en logisk sekvens. Börja med definitionen i ord:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "Använd sedan sidans befintliga notation, med [[a]] för den motstående kateten och [[c]] för hypotenusan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Den motstående kateten hör hemma i täljaren eftersom sinus mäter den sidans storlek i förhållande till hypotenusan; hypotenusan hör hemma i nämnaren eftersom den är referenslängden som varje annan sida jämförs mot. Arrangemanget är fast: täljaren frågar \"hur stor är denna katet?\", nämnaren svarar \"jämfört med vad?\"."
          },
          {
            "kind": "h3",
            "text": "Fullständigt genomarbetat exempel: en rätvinklig 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] och [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "<strong>Steg 1:</strong> Skriv formeln. [[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>Steg 2:</strong> Sätt in de kända värdena. [[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>Steg 3:</strong> Dividera. [[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>Steg 4:</strong> Tolka resultatet. Den motstående kateten är 60 procent av hypotenusan."
          },
          {
            "kind": "p",
            "text": "<strong>Steg 5:</strong> Verifiera triangeln. [[3^2+4^2=5^2]], och [[9+16=25]]. Pythagoras-kontrollen bekräftar att dessa sidlängder bildar en rätvinklig triangel, så sinusresultatet är pålitligt."
          },
          {
            "kind": "h3",
            "text": "Viktigt förtydligande"
          },
          {
            "kind": "p",
            "text": "Om läsaren vill ha vinkeln snarare än dess sinusförhållande krävs invers sinus: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Invers sinus kallas också arcsinus och är en separat operation från att beräkna sinusförhållandet. Den befintliga sinusförhållandekalkylatorn beräknar förhållandet ur två sidlängder; den returnerar inte vinkeln direkt."
          }
        ]
      },
      "sec-howto": {
        "h2": "Så använder du sinusförhållandekalkylatorn",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkylatorn speglar formeln exakt: två inmatningar, en knapp, ett förhållande. Gå igenom gränssnittet i ordning."
          }
        ],
        "steps": [
          "<strong>Identifiera referensvinkeln [[A]].</strong> Varje sinusberäkning är förankrad i en spetsig vinkel; den motstående kateten definieras i förhållande till den.",
          "<strong>Lokalisera den motstående kateten [[a]], direkt mitt emot vinkel [[A]].</strong> Det är kateten som aldrig vidrör vinkelns hörn.",
          "<strong>Lokalisera hypotenusan [[c]], mitt emot den räta vinkeln och den längsta sidan.</strong> Den vetter mot den lilla kvadraten som markerar [[90^\\circ]]-hörnet.",
          "<strong>Skaffa eller mät båda sidlängderna.</strong> Använd ett måttband, ett planmått eller värden från uppgiftstexten.",
          "<strong>Ange den motstående katetens längd i det första inmatningsfältet.</strong> Detta blir täljaren [[a]].",
          "<strong>Ange hypotenusans längd i det andra inmatningsfältet.</strong> Detta blir nämnaren [[c]].",
          "<strong>Välj kompatibla mätenheter med de tillgängliga enhetsväljarna.</strong> Meter med meter, centimeter med centimeter; blandade enheter ger ett meningslöst förhållande.",
          "<strong>Bekräfta att båda mätningarna är positiva.</strong> Noll- eller negativa längder kan inte bilda en triangel.",
          "<strong>Kontrollera att hypotenusan är längre än den motstående kateten.</strong> Om [[a \\ge c]] är inmatningarna omkastade eller triangeln omöjlig.",
          "<strong>Klicka på Calculate sin(A).</strong> Verktyget dividerar den motstående kateten med hypotenusan.",
          "<strong>Läs av det resulterande sinusförhållandet.</strong> Det är ett vanligt decimaltal, inte en vinkel och inte en längd.",
          "<strong>Bekräfta att resultatet är större än 0 och mindre än 1.</strong> För en giltig, icke-degenererad rätvinklig triangel med en spetsig referensvinkel är det det enda lagliga intervallet.",
          "<strong>Använd Reset när du vill rensa inmatningarna och påbörja en ny beräkning.</strong>"
        ],
        "closingParagraphs": [
          "Kalkylatorn kräver inte den närliggande kateten eller någon vinkelinmatning. Den utför divisionen och inget annat: ingen sparad historik, inga grafer, inga dolda lägen."
        ]
      },
      "sec-examples": {
        "h2": "Steg-för-steg-exempel på sinusberäkningar",
        "blocks": [
          {
            "kind": "h3",
            "text": "Exempel 1: en rätvinklig 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] och [[c=5\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Den motstående kateten är 60 procent av hypotenusan."
          },
          {
            "kind": "h3",
            "text": "Exempel 2: en rätvinklig 5-12-13-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=5\\,\\text{m}]], [[b=12\\,\\text{m}]] och [[c=13\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Den motstående kateten är cirka 38,46 procent av hypotenusan."
          },
          {
            "kind": "h3",
            "text": "Exempel 3: en 30-60-90-triangel"
          },
          {
            "kind": "p",
            "text": "För en referensvinkel på [[A=30^\\circ]] är den motstående kateten hälften av hypotenusan. Använd [[a=1\\,\\text{cm}]], [[b=\\sqrt{3}\\,\\text{cm}]] och [[c=2\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "Detta är ett användbart specialvinkelsresultat: vid 30 grader är den motstående kateten exakt hälften av hypotenusan, vilket är anledningen till att denna triangel dyker upp i så många läroboksuppgifter."
          },
          {
            "kind": "h3",
            "text": "Exempel 4: en 45-45-90-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=1\\,\\text{cm}]], [[b=1\\,\\text{cm}]] och [[c=\\sqrt{2}\\,\\text{cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "Lika kateter ger lika sinus- och cosinusvärden för de två spetsiga vinklarna: vid 45 grader vetter varje spetsig vinkel mot en katet på 1 och en hypotenusa på [[\\sqrt{2}]], så sinus och cosinus sammanfaller."
          }
        ]
      },
      "sec-applications": {
        "h2": "Verkliga exempel på användning av sinusförhållandet",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje exempel anger situationen, identifierar den motstående kateten och hypotenusan, sätter in dem i formeln och tolkar resultatet på enkel svenska."
          },
          {
            "kind": "h3",
            "text": "Exempel 5: beräkna en steges sinusförhållande"
          },
          {
            "kind": "p",
            "text": "En stege är 5 m lång och når 4 m upp längs en vertikal vägg. Referensvinkeln [[A]] ligger mellan stegen och den horisontella marken. Stegen är hypotenusan, [[c=5\\,\\text{m}]], och den vertikala höjden är den motstående kateten, [[a=4\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala höjden är 80 procent av stegens längd. Förhållandet beskriver stegens geometri och fastställer inte om stegen står säkert."
          },
          {
            "kind": "h3",
            "text": "Exempel 6: beräkna en takstols sinusförhållande"
          },
          {
            "kind": "p",
            "text": "En takstol har en lutande längd på 6,5 m och en vertikal stigning på 2,5 m. Takstolen är hypotenusan, [[c=6.5\\,\\text{m}]], och den vertikala stigningen är den motstående kateten, [[a=2.5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala stigningen är cirka 38,46 procent av takstolens längd. Förhållandet fastställer inte strukturell lämplighet eller takdesignens överensstämmelse."
          },
          {
            "kind": "h3",
            "text": "Exempel 7: utvärdera en ramps sinusförhållande"
          },
          {
            "kind": "p",
            "text": "En förenklad ramp har en lutande längd på 9,5 m och en vertikal stigning på 0,75 m. Lutningen är hypotenusan, [[c=9.5\\,\\text{m}]], och den vertikala stigningen är den motstående kateten, [[a=0.75\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala stigningen är cirka 7,89 procent av den lutande längden, en flack lutning. Detta förhållande ensamt fastställer inte tillgänglighet eller byggnormsöverensstämmelse."
          },
          {
            "kind": "h3",
            "text": "Exempel 8: en mätning i fält"
          },
          {
            "kind": "p",
            "text": "En förenklad mätningstriangel har ett rakt avstånd på 50 m och en vertikal höjdskillnad på 30 m. Den raka linjen är hypotenusan, [[c=50\\,\\text{m}]], och den vertikala skillnaden är den motstående kateten, [[a=30\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala skillnaden är 60 procent av det raka avståndet. Verkliga mätningar kan kräva ytterligare korrigeringar, justeringar för instrumenthöjd och mer detaljerade mätningar."
          },
          {
            "kind": "h3",
            "text": "Exempel 9: en staglina som stöttar en stolpe"
          },
          {
            "kind": "p",
            "text": "En staglina är 13 m lång, och dess fästpunkt är 5 m över markankarets nivå. Linan är hypotenusan, [[c=13\\,\\text{m}]], och den vertikala separationen är den motstående kateten, [[a=5\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala separationen är cirka 38,46 procent av linans längd. Förhållandet fastställer inte linspänning, ankarhållfasthet eller strukturell säkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 10: beräkna en trappbalks sinusförhållande"
          },
          {
            "kind": "p",
            "text": "En förenklad trappbalk är 5 m lång och spänner över en vertikal stigning på 3 m. Balken är hypotenusan, [[c=5\\,\\text{m}]], och den vertikala stigningen är den motstående kateten, [[a=3\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala stigningen är 60 procent av den diagonala balkens längd. Beräkningen verifierar inte trappans mått eller byggnormsöverensstämmelse."
          },
          {
            "kind": "h3",
            "text": "Exempel 11: förstå en kranboms vertikala komponent"
          },
          {
            "kind": "p",
            "text": "En förenklad kranbom har en längd på 10 m och en vertikal komponent på 8 m. Bommen är hypotenusan, [[c=10\\,\\text{m}]], och den vertikala komponenten är den motstående kateten, [[a=8\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala komponenten är 80 procent av bommens längd. Förhållandet fastställer inte krankapacitet eller driftsäkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 12: ett rakt flygsegment"
          },
          {
            "kind": "p",
            "text": "För ett förenklat flygsegment färdas ett flygplan 5 km längs en rak bana medan det stiger 1,5 km i höjd. Banan är hypotenusan, [[c=5\\,\\text{km}]], och den vertikala stigningen är den motstående kateten, [[a=1.5\\,\\text{km}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala stigningen är 30 procent av den raka banans längd. Detta är ett idealiserat geometriexempel, inte en fullständig flygnavigeringsberäkning."
          },
          {
            "kind": "h3",
            "text": "Exempel 13: ett diagonalt mekaniskt stag"
          },
          {
            "kind": "p",
            "text": "Ett diagonalt stag är 2 m långt och har en vertikal komponent på 1,6 m. Staget är hypotenusan, [[c=2\\,\\text{m}]], och den vertikala komponenten är den motstående kateten, [[a=1.6\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala komponenten är 80 procent av stagets längd. Förhållandet avgör inte stagets hållfasthet eller lämplighet."
          },
          {
            "kind": "h3",
            "text": "Exempel 14: en vandringsleds sinusförhållande"
          },
          {
            "kind": "p",
            "text": "En förenklad rak vandringssträcka har en väglängd på 100 m och en vertikal höjdstigning på 25 m. Vägen är hypotenusan, [[c=100\\,\\text{m}]], och höjdstigningen är den motstående kateten, [[a=25\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "Höjdstigningen är 25 procent av den raka vägens längd. Verkliga vandringsleder kan innehålla kurvor och växlande lutningar."
          },
          {
            "kind": "h3",
            "text": "Exempel 15: ett markisstöd"
          },
          {
            "kind": "p",
            "text": "Ett markisstöd är 3 m långt och har en vertikal komponent på 1,2 m. Stödet är hypotenusan, [[c=3\\,\\text{m}]], och den vertikala komponenten är den motstående kateten, [[a=1.2\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala komponenten är 40 procent av stödets längd. Beräkningen fastställer inte strukturell lämplighet."
          },
          {
            "kind": "h3",
            "text": "Exempel 16: en siktlinje till ett träds topp"
          },
          {
            "kind": "p",
            "text": "En förenklad siktlinje till ett träds topp mäter 20 m. Den vertikala skillnaden mellan observatörens ögonhöjd och trädets topp är 12 m. Siktlinjen är hypotenusan, [[c=20\\,\\text{m}]], och den vertikala skillnaden är den motstående kateten, [[a=12\\,\\text{m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "Den vertikala skillnaden är 60 procent av siktlinjens avstånd. Resultatet ger inte trädets totala höjd över marken om inte observatörens ögonhöjd och annan nödvändig information beaktas."
          }
        ],
        "closingParagraphs": [
          "Sinus är ett matematiskt förhållande, inte en fysikalisk storhet med enheter. Dess praktiska värde kommer från att jämföra en vertikal eller vinkelrät komponent med ett lutande avstånd, beräkna komponenter när vinkeln är känd och verifiera geometriska samband. Behandla inte sinus ensamt som ett intyg om strukturell säkerhet, lastkapacitet, tillgänglighet eller ingenjörsmässig överensstämmelse."
        ],
        "tables": [
          {
            "headers": [
              "Situation",
              "Motstående [[a]]",
              "Hypotenusa [[c]]",
              "Formel",
              "Förhållande",
              "Betydelse"
            ],
            "rows": [
              ["Stege", "4 m", "5 m", "4/5", "0.8", "Höjden är 80 % av stegens längd"],
              ["Takstol", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "Stigningen är 38,46 % av takstolens längd"],
              ["Ramp", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "Flack lutning, 7,89 % stigning"],
              ["Fältmätning", "30 m", "50 m", "30/50", "0.6", "Höjden är 60 % av linjeavståndet"],
              ["Staglina", "5 m", "13 m", "5/13", "0.3846", "Höjden är 38,46 % av linans längd"],
              ["Trappbalk", "3 m", "5 m", "3/5", "0.6", "Stigningen är 60 % av balkens längd"],
              ["Kranbom", "8 m", "10 m", "8/10", "0.8", "Vertikal räckvidd är 80 % av bommen"],
              ["Flygsegment", "1.5 km", "5 km", "1.5/5", "0.3", "Stigningen är 30 % av flygbanan"],
              ["Diagonalt stag", "1.6 m", "2 m", "1.6/2", "0.8", "Vertikalen är 80 % av stagets längd"],
              ["Vandringsled", "25 m", "100 m", "25/100", "0.25", "Stigningen är 25 % av väglängden"],
              ["Markisstöd", "1.2 m", "3 m", "1.2/3", "0.4", "Vertikalen är 40 % av stödet"],
              ["Siktlinje", "12 m", "20 m", "12/20", "0.6", "Höjdskillnaden är 60 % av siktlinjen"]
            ]
          }
        ],
        "imgAlt": "Fyra paneler: stegförhållande 0.8, ramp 0.07895, fältmätning 0.6, kranbom 0.8, med märkta trianglar",
        "figcaption": "Fyra praktiska beräkningar: stege, ramp, fältmätning och kranbom, var och en med sin triangel, formel och sitt förhållande."
      },
      "sec-angle": {
        "h2": "Förstå sambandet mellan sinus och vinkelstorlek",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus ökar när referensvinkeln ökar. Geometrin förklarar varför: när vinkel [[A]] är liten är den motstående kateten kort i förhållande till hypotenusan, så förhållandet ligger nära 0. När vinkeln vidgas blir den motstående kateten en större andel av hypotenusan, och förhållandet klättrar mot 1. Vid [[30^\\circ]] är sinus exakt 0,5; vid [[45^\\circ]] cirka 0,7071; vid [[60^\\circ]] cirka 0,8660; och när vinkeln närmar sig [[90^\\circ]] närmar sig sinus 1."
          }
        ],
        "tables": [
          {
            "headers": [
              "Vinkel [[A]]",
              "Sinusförhållande",
              "Tolkning"
            ],
            "rows": [
              ["[[30^\\circ]]", "0.5", "Den motstående kateten är hälften av hypotenusan"],
              ["[[45^\\circ]]", "Cirka 0.7071", "Den motstående kateten är cirka 70,71 % av hypotenusan"],
              ["[[60^\\circ]]", "Cirka 0.8660", "Den motstående kateten är cirka 86,60 % av hypotenusan"],
              ["[[80^\\circ]]", "Cirka 0.9848", "Den motstående kateten är cirka 98,48 % av hypotenusan"]
            ]
          }
        ],
        "closingParagraphs": [
          "Mönstret är enkelt och monotont: varje ökning av vinkeln höjer sinus, och förhållandet stannar mellan 0 och 1 för varje spetsig vinkel. Sinus beskriver triangelns form snarare än dess absoluta storlek: två trianglar med samma spetsiga vinkel har samma sinusförhållande även när deras sidlängder skiljer sig. En [[90^\\circ]]-inmatning är ett begränsande referensvärde, inte en spetsig vinkel i en icke-degenererad rätvinklig triangel."
        ],
        "imgAlt": "Tre trianglar vid 30, 45, 60 grader med sinusvärdena 0.5, 0.7071, 0.8660; sinus stiger när vinkeln växer",
        "figcaption": "När vinkel A växer blir den motstående kateten en större andel av hypotenusan, så sin(A) stiger."
      },
      "sec-hypotenuse": {
        "h2": "Så hittar du den motstående kateten med sinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinusformeln kan ställas om för att hitta den motstående kateten när hypotenusan och vinkeln är kända. Börja med [[\\sin(A)=a/c]] och multiplicera båda sidor med [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Den motstående kateten är lika med hypotenusan multiplicerad med vinkelns sinus. Med en hypotenusa på [[c=10\\,\\text{m}]] och en vinkel på [[A=30^\\circ]], och med vetskapen att [[\\sin(30^\\circ)=0.5]]:"
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "Den motstående kateten är hälften av hypotenusan för en [[30^\\circ]]-vinkel, vilket matchar 30-60-90-geometrin: sidan mitt emot 30 grader är exakt hälften av hypotenusan."
          },
          {
            "kind": "p",
            "text": "Hypotenusan kan hittas på samma sätt genom att ställa om igen:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Med en motstående katet på [[a=6\\,\\text{m}]] och [[A=30^\\circ]]: [[c=6/0.5]], så [[\\boxed{c=12\\,\\text{m}}]]. Detta är matematiska omställningar av samma formel. Kalkylatorn på denna sida returnerar sinusförhållandet ur sidlängder; den beräknar inte saknade sidor direkt."
          }
        ]
      },
      "sec-recover": {
        "h2": "Så hittar du en vinkel ur ett sinusförhållande",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinusförhållandet och vinkeln är olika storheter: det ena är en dimensionslös jämförelse av sidor, det andra mäts i grader. När sinusförhållandet är känt och vinkeln krävs kan invers sinus användas:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Invers sinus kallas också arcsinus. Givet [[\\sin(A)=0.6]]:"
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "Vinkeln är cirka [[36.87^\\circ]] när kalkylatorn är inställd på grader. Detta är en separat vinkelberäkning, inte något som sinusförhållandekalkylatorn gör direkt. Invers sinus kan ha flera vinkellösningar i bredare trigonometri, men spetsvinkelbegränsningen i en rätvinklig triangel väljer den lämpliga spetsiga lösningen."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag vid sinusberäkningar",
        "blocks": [
          {
            "kind": "p",
            "text": "De flesta sinusfel kommer från ett vänt bråk, en felmärkt sida eller en enhetstabbe. Gå igenom den här listan innan du litar på ett resultat."
          }
        ],
        "steps": [
          "<strong>Använda den närliggande kateten i stället för den motstående.</strong> Att dividera [[b/c]] beräknar cosinus. Med [[a=3]], [[b=4]] och [[c=5]] ger fel katet 0,8; den rätta ger 0,6.",
          "<strong>Vända formeln och beräkna [[c/a]] i stället för [[a/c]].</strong> Detta returnerar cosekant, inte sinus. Med [[a=3]] och [[c=5]] ger det vända bråket 1,6667, alltid över 1, ett tydligt varningstecken.",
          "<strong>Blanda ihop sinus och cosinus.</strong> Sinus använder den motstående kateten; cosinus använder den närliggande kateten. Om fel katet står i täljaren är svaret cosinus, inte sinus.",
          "<strong>Blanda ihop sinus och cosekant.</strong> Cosekant är det reciproka värdet, hypotenusan över den motstående kateten. De liknande namnen orsakar verkliga fel, men bråkordningen är exakt omvänd.",
          "<strong>Mata in en motstående katet som är längre än hypotenusan.</strong> Hypotenusan är alltid den längsta sidan. Om [[a \\ge c]] är inmatningarna omkastade eller triangeln omöjlig.",
          "<strong>Mata in noll- eller negativa sidlängder.</strong> En triangel kan inte ha en noll- eller negativ sida, så dessa inmatningar signalerar ett datainmatningsfel eller en saknad mätning, inte ett giltigt gränsfall.",
          "<strong>Blanda mätenheter.</strong> En motstående katet på 3 m med en hypotenusa på 50 cm ger 6, ett meningslöst tal. Konvertera först till en enhet: 3 m och 5 m ger korrekta 0,6.",
          "<strong>Rapportera sinusförhållandet som en vinkel i grader.</strong> Ett resultat på 0,6 är ett förhållande, inte [[0.6^\\circ]]. Att behandla det som grader matar nonsens i varje uppföljande beräkning.",
          "<strong>Anta att sinus har fysikaliska enheter.</strong> Enheterna tar ut varandra i divisionen, så \"0.6 m\" är fel. Skriv det vanliga talet och behåll enheterna i inmatningsmätningarna där de hör hemma.",
          "<strong>Blanda ihop referensvinkeln med den räta vinkeln.</strong> Sinus använder alltid en spetsig vinkel. [[90^\\circ]]-vinkeln är aldrig referensvinkeln [[A]] i dessa beräkningar.",
          "<strong>Avrunda för tidigt.</strong> Att avrunda en mellanliggande division till två decimaler och sedan fortsätta beräkningen förstärker felet. Behåll full precision genom varje steg och avrunda bara det slutliga svaret.",
          "<strong>Anta att sinus är densamma för varje vinkel.</strong> Varje vinkel har sitt eget sinusvärde. Ett 0,6-resultat tillhör en specifik vinkel (cirka 36,87 grader), inte varje rätvinklig triangel.",
          "<strong>Anta att ett sinusvärde på 0,6 betyder att vinkeln är [[0.6^\\circ]].</strong> Ett förhållande är inte ett gradmått. Konvertera med invers sinus om själva vinkeln behövs.",
          "<strong>Blanda ihop reciprok sinus med invers sinus.</strong> [[1/\\sin(A)]] är cosekant, ett förhållande; [[\\sin^{-1}]] är invers sinus, som returnerar en vinkel. De liknande namnen orsakar verkliga fel, så läs notationen noga.",
          "<strong>Anta att sinusförhållandet bestämmer en triangels absoluta storlek.</strong> Sinus beskriver form, inte storlek: oändligt många trianglar delar ett sinus på 0,6, från en motstående katet på 3 cm till en på 3 km. Förhållandet fixerar proportionerna; verkliga längder behöver minst en sidmätning."
        ],
        "closingParagraphs": [
          "<strong>Fel mot rätt: en genomarbetad jämförelse</strong>",
          "Givet en motstående katet på [[a=3]] och en hypotenusa på [[c=5]]:",
          "<strong>Fel:</strong> [[5/3\\approx1.6667]]. Detta är cosekantförhållandet, inte sinusförhållandet. Täljare och nämnare är omvända.",
          "<strong>Rätt:</strong> [[\\sin(A)=3/5=0.6]].",
          "<strong>Verifiera:</strong> [[\\csc(A)=1/0.6\\approx1.6667]]. Den reciproka kontrollen bekräftar resultatet, och svaret ligger mellan 0 och 1, som varje giltigt sinus måste."
        ]
      },
      "sec-verify": {
        "h2": "Så kontrollerar du att ditt sinusresultat är giltigt",
        "blocks": [
          {
            "kind": "p",
            "text": "En giltig, icke-degenererad rätvinklig triangel kräver positiva sidor med hypotenusan strikt längst, [[0 \\lt a \\lt c]], så sinusresultatet måste falla mellan 0 och 1:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "Båda mätningarna måste använda kompatibla enheter. Ett resultat mindre än eller lika med 0 eller större än eller lika med 1 indikerar vanligtvis ogiltiga inmatningar, omvända sidor eller en felaktig triangelmodell."
          },
          {
            "kind": "h3",
            "text": "Metod 1: kontrollera förhållandet"
          },
          {
            "kind": "p",
            "text": "Verifiera [[\\sin(A)=a/c]] direkt igen. Med [[a=3]] och [[c=5]]: [[\\sin(A)=3/5=0.6]]. Om en andra handräkning inte stämmer var en sida felmärkt eller en enhet blandad."
          },
          {
            "kind": "h3",
            "text": "Metod 2: kontrollera Pythagoras sats"
          },
          {
            "kind": "p",
            "text": "Om den närliggande kateten behövs, beräkna [[b=\\sqrt{c^2-a^2}]]. För [[a=3]] och [[c=5]]: [[b=\\sqrt{25-9}=4]], och [[3^2+4^2=5^2]]. Detta bekräftar måtten hos den rätvinkliga 3-4-5-triangeln. Den närliggande kateten är ett verifieringsvärde här, inte en del av den primära sinusformeln."
          },
          {
            "kind": "h3",
            "text": "Metod 3: kontrollera med invers sinus"
          },
          {
            "kind": "p",
            "text": "För ett sinusförhållande på 0,6: [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]. Eftersom sinus ligger blygsamt över 0,5 bör vinkeln landa lite över [[30^\\circ]]; om den inte gör det är sidetiketterna troligen omkastade. Små skillnader kan uppstå genom avrundning."
          }
        ]
      },
      "sec-vs": {
        "h2": "Sinus mot cosinus, tangens och cosekant",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje förhållande jämför ett annat sidpar, med samma referensvinkel och sidetiketter:"
          }
        ],
        "tables": [
          {
            "headers": [
              "Förhållande",
              "Formel",
              "Vad det jämför"
            ],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Motstående katet mot hypotenusa"],
              ["Cosinus", "cos(A) = b/c", "Närliggande katet mot hypotenusa"],
              ["Tangens", "tan(A) = a/b", "Motstående katet mot närliggande katet"],
              ["Cosekant", "csc(A) = c/a", "Hypotenusa mot motstående katet"],
              ["Sekant", "sec(A) = c/b", "Hypotenusa mot närliggande katet"],
              ["Cotangens", "cot(A) = b/a", "Närliggande katet mot motstående katet"]
            ]
          }
        ],
        "closingParagraphs": [
          "Sinus och cosekant är det reciproka paret: [[\\csc(A)=1/\\sin(A)]]. Om [[\\sin(A)=0.6]] är [[\\csc(A)\\approx1.6667]]. Vänd dig till sinus när den motstående kateten är känd mot hypotenusan, när en vertikal komponent måste jämföras med en lutande längd, eller när SOH är den matchande minnesregeln; vänd dig till cosinus för närliggande över hypotenusa, tangens när de två katetrarna är kända, och cosekant när hypotenusan jämförs med den motstående kateten.",
          "För de angränsande förhållandena, se <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Cosinusförhållandekalkylator</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Tangensförhållandekalkylator</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Cosekantförhållandekalkylator</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Sekantförhållandekalkylator</a> och <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Cotangensförhållandekalkylator</a>."
        ]
      },
      "sec-related": {
        "h2": "Utforska relaterade trigonometrikalkylatorer",
        "related": [
          { "name": "Cosinusförhållandekalkylator" },
          { "name": "Tangensförhållandekalkylator" },
          { "name": "Cosekantförhållandekalkylator" },
          { "name": "Sekantförhållandekalkylator" },
          { "name": "Cotangensförhållandekalkylator" },
          { "name": "Rätvinklig triangelvinkelkalkylator" }
        ]
      },
      "sec-conclusion": {
        "h2": "Använd sinusförhållandet med tillförsikt",
        "blocks": [
          {
            "kind": "p",
            "text": "Sinus är det första av de tre huvudförhållandena: dividera den motstående kateten med hypotenusan så har du beskrivit vilken del av den längsta sidan som ligger över vinkeln. Formeln [[\\sin(A)=a/c]] behöver bara två mätningar, svaret är alltid ett dimensionslöst tal mellan 0 och 1, och det växer när referensvinkeln växer. När en saknad sida behövs återvinner [[a=c\\sin(A)]] den motstående kateten; när vinkeln behövs återvinner [[A=\\sin^{-1}(a/c)]] den. Stege, takstol, ramp eller lärobokens 3-4-5: metoden ändras aldrig. Identifiera den motstående kateten, identifiera hypotenusan, dividera och verifiera med intervallet 0 till 1."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Vad är sinusformeln för en rätvinklig triangel?",
        "answer": "sin(A) = a / c: dividera den motstående kateten a med hypotenusan c. Med en motstående katet på 3 cm och en hypotenusa på 5 cm blir resultatet 3/5 = 0,6. Det decimaltalet är det fullständiga svaret, ett dimensionslöst förhållande, inte en vinkel."
      },
      {
        "question": "Hur beräknar man sinus ur två sidlängder?",
        "answer": "Identifiera referensvinkeln A, mät den motstående kateten a och hypotenusan c i samma enhet, bekräfta att båda är positiva och att c är längre än a, dividera sedan: sin(A) = a / c. På denna sida anger du den motstående kateten i det första fältet och hypotenusan i det andra och klickar sedan på Calculate sin(A)."
      },
      {
        "question": "Vad är skillnaden mellan sinus och cosinus?",
        "answer": "Sinus dividerar den motstående kateten med hypotenusan (a/c); cosinus dividerar den närliggande kateten med hypotenusan (b/c). Båda använder samma hypotenusa, men täljaren skiljer sig. Ett resultat över 1 betyder att bråket vänts eller att en katet märkts fel."
      },
      {
        "question": "Varför är sinus mindre än 1 för en spetsig vinkel i en rätvinklig triangel?",
        "answer": "I en giltig, icke-degenererad rätvinklig triangel är hypotenusan strikt längre än vardera kateten, så 0 < a < c. Att dividera en mindre längd med en större ger alltid ett resultat under 1: 0 < a/c < 1 för varje spetsig referensvinkel."
      },
      {
        "question": "Kan sinus vara lika med 1 för en spetsig vinkel i en giltig rätvinklig triangel?",
        "answer": "Nej. Ett sinus på exakt 1 skulle kräva att den motstående kateten är lika med hypotenusan, vilket kollapsar triangeln till en vertikal linje utan bredd. Värdet 1 är ett gränsvärde som närmas när vinkel A närmar sig 90 grader, aldrig ett värde som en äkta triangel producerar."
      },
      {
        "question": "Vad betyder ett sinusvärde på 0,6?",
        "answer": "Den motstående kateten är 60 procent av hypotenusan. I en 3-4-5-triangel är sidan mitt emot vinkel A 3 enheter medan hypotenusan är 5 enheter, så sin(A) = 3/5 = 0,6. Det beskriver triangelns form och är inte en vinkel på 0,6 grader."
      },
      {
        "question": "Har sinusförhållandet några mätenheter?",
        "answer": "Nej. Båda inmatningarna är längder mätta i samma enhet, så enheterna tar ut varandra: 3 m / 5 m = 0,6, exakt som 300 cm / 500 cm = 0,6. Rapportera sinus som ett vanligt tal, aldrig med grader, meter eller fot."
      },
      {
        "question": "Hur hittar man en vinkel ur ett sinusförhållande?",
        "answer": "Tillämpa invers sinus på förhållandet: A = sin^-1(a/c). För sin(A) = 0,6 är A = sin^-1(0,6), cirka 36,87 grader. Ställ först in din vetenskapliga kalkylator på gradläge. Denna sidas kalkylator returnerar förhållandet, inte vinkeln."
      },
      {
        "question": "Hur hittar man den motstående kateten med sinus?",
        "answer": "Ställ om formeln till a = c * sin(A). Om hypotenusan är 10 m och vinkel A är 30 grader är sin(30 deg) = 0,5, så a = 10 * 0,5 = 5 m. Detta är en manuell omställning; denna sidas kalkylator returnerar förhållandet ur sidlängder, inte saknade sidor."
      },
      {
        "question": "Vad är skillnaden mellan sinus och cosekant?",
        "answer": "Sinus dividerar den motstående kateten med hypotenusan (a/c); cosekant är dess reciproka värde, hypotenusan dividerad med den motstående kateten (c/a). Om sin(A) = 0,6 är csc(A) = 1/0,6, cirka 1,6667. De två är reciproka, aldrig utbytbara formler."
      },
      {
        "question": "Kan jag beräkna sinus utan att känna den närliggande kateten?",
        "answer": "Ja. Den primära sinusformeln använder bara den motstående kateten och hypotenusan, så den närliggande kateten ingår aldrig i beräkningen. Den närliggande kateten blir användbar endast när Pythagoras sats används för att verifiera triangeln eller när cosinus, tangens eller sekant kommer in i arbetet."
      },
      {
        "question": "Hur används sinus i praktiska mätningar?",
        "answer": "Sinus jämför en vertikal eller vinkelrät komponent med en lutande längd: en stege mot sin vägghöjd, en takstol mot sin vertikala stigning, en ramp mot sin stigning, eller en mätlinje mot sin höjdskillnad. Förhållandet säger hur stor del av det lutande avståndet som är vertikalt, vilket är användbart för höjder, frigångar och komponentberäkningar."
      }
    ],
    "faqHeading": "Vanliga frågor",
    "relatedHeading": "Utforska relaterade trigonometrikalkylatorer"
  }
  ,
  "zh": {
    "tocHeading": "本指南目录",
    "tocItems": {
      "sec-intro": "什么是正弦比计算器？",
      "sec-triangle": "理解对边与斜边",
      "sec-whatis": "理解正弦比",
      "sec-formula": "正弦公式如何运作",
      "sec-howto": "如何使用正弦比计算器",
      "sec-examples": "计算正弦的分步示例",
      "sec-applications": "正弦比在现实生活中的使用示例",
      "sec-angle": "理解正弦与角大小之间的关系",
      "sec-hypotenuse": "如何用正弦求对边",
      "sec-recover": "如何从正弦比求角度",
      "sec-mistakes": "计算正弦时的常见错误",
      "sec-verify": "如何检验正弦结果是否有效",
      "sec-vs": "正弦与余弦、正切、余割的对比",
      "sec-related": "探索相关的三角函数计算器",
      "sec-faq": "常见问题解答"
    },
    "sections": {
      "sec-intro": {
        "h2": "什么是正弦比计算器？",
        "blocks": [
          {
            "kind": "p",
            "text": "正弦比计算器回答一个问题：对于直角三角形中的一个锐角，角的对边与最长边相比如何？输入对边和斜边，工具将对边除以斜边，返回 [[\\sin(A)=a/c]]。一个直角三角形的对边为 3 厘米，斜边为 5 厘米，因此 [[\\sin(A)=3/5=0.6]]。这个 0.6 就是正弦比：它告诉你对边是斜边的 60%。它不是角度，所以绝不要把它读成 [[0.6^\\circ]]。邻边从不参与这个计算；对边和斜边本身就足够了。正弦是最基本的三角比之一，它的强大之处在于它以只依赖于角度、而不依赖于三角形大小的方式比较两个长度。如果你需要的是以度为单位的角度，反正弦可以将比值转换为度数。"
          }
        ]
      },
      "sec-triangle": {
        "h2": "理解对边与斜边",
        "blocks": [
          {
            "kind": "h3",
            "text": "什么是直角三角形？"
          },
          {
            "kind": "p",
            "text": "直角三角形有一个角恰好为 [[90^\\circ]]，即两条互相垂直的直线之间的角，就像墙与水平地板相交一样。斜边位于该直角的对面，始终是最长的边，因为它必须横跨角的整条对角线。另外两个角平分剩余的 90 度，所以都是锐角。两条直角边在直角处相交，互相垂直，而它们与斜边的关系使直角三角形的三角学成为可能。"
          },
          {
            "kind": "h3",
            "text": "什么是对边？"
          },
          {
            "kind": "p",
            "text": "对边 [[a]] 是正对参考角 [[A]] 的边，是唯一一条从不接触其顶点的边。在实际问题中，它常常扮演垂直高度、高差或垂直分量的角色：梯子到达的墙高、坡道的垂直升高或测量中的高程差。哪条边算作对边取决于所选的参考角，因此从角 [[A]] 切换到角 [[C]] 会互换对边和邻边的标记。它出现在正弦公式的分子中，因为正弦衡量的是角对面这条边相对于斜边的大小。"
          },
          {
            "kind": "h3",
            "text": "什么是斜边？"
          },
          {
            "kind": "p",
            "text": "斜边 [[c]] 是直角的对边：在任何图中，它正对标记 [[90^\\circ]] 角的小正方形，并且严格长于任一条直角边。在实际问题中，它常常扮演斜长的角色：梯子、坡面、椽条、缆索、斜撑或直线路径。它出现在正弦公式的分母中，这就是为什么每个正弦值都落在 0 和 1 之间：分子始终是一条真正的直角边，比分母短。"
          },
          {
            "kind": "h3",
            "text": "什么是邻边？"
          },
          {
            "kind": "p",
            "text": "邻边 [[b]] 是接触参考角 [[A]] 但不是斜边的那条直角边。它在主要的正弦计算中不起作用，这就是计算器从不要求输入它的原因。当计算余弦、正切或缺失的边时，以及用勾股定理验证两个已知长度构成真正的直角三角形时，它会变得有用。"
          }
        ],
        "imgAlt": "左下角为角 A 的直角三角形，金色对边 a，蓝色斜边 c，sin(A)=a/c",
        "figcaption": "角 A 位于左下角；正弦使用金色对边 a 和蓝色斜边 c，而不是邻边 b。"
      },
      "sec-whatis": {
        "h2": "理解正弦比",
        "blocks": [
          {
            "kind": "p",
            "text": "锐角的正弦将正对该角的边与三角形的最长边进行比较："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "将 [[\\sin(A)]] 读作“角 A 的正弦”。分子 [[a]] 是对边；分母 [[c]] 是斜边。这个分数回答一个具体问题：对边占斜边的几分之几？由于两个输入都是用同一单位测量的长度，结果是一个普通数字，而这个数字只取决于角度，从不取决于三角形的大小。"
          },
          {
            "kind": "h3",
            "text": "理解 SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "学生用记忆口诀 SOH-CAH-TOA 记住三个主要的比："
          },
          {
            "kind": "p",
            "text": "<strong>SOH：</strong>正弦 = 对边 / 斜边。<strong>CAH：</strong>余弦 = 邻边 / 斜边。<strong>TOA：</strong>正切 = 对边 / 邻边。"
          },
          {
            "kind": "p",
            "text": "SOH 直接对应正弦公式 [[\\sin(A)=a/c]]。这个口诀之所以有效，是因为它把每个比的名称与其所需的两条边按正确顺序配对：对于正弦，对边在上，斜边在下。一旦两条边命名正确，口诀就把“哪条边放哪里”从记忆问题变成了查找问题。"
          },
          {
            "kind": "h3",
            "text": "为什么正弦是一个比"
          },
          {
            "kind": "p",
            "text": "两个长度相除得到无量纲的数字，因为单位相互抵消："
          },
          {
            "kind": "p",
            "text": "[[[\\frac{3\\,\\text{m}}{5\\,\\text{m}}=0.6]]]"
          },
          {
            "kind": "p",
            "text": "米相互抵消，剩下 0.6。用 300 厘米和 500 厘米得到完全相同的结果，因为两个长度一起缩放。唯一的要求是单位兼容：两个测量必须使用同一单位，或者在相除前将其中一个转换。比值因此是角的属性，而不是测量三角形所用的某把尺子的属性。"
          },
          {
            "kind": "h3",
            "text": "正弦值 0.6 意味着什么？"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=0.6]] 意味着对边是斜边的 60%。3-4-5 三角形是经典参照：[[\\sin(A)=3/5=0.6]]。这个数字一眼就能揭示三角形的形状：接近 1 的正弦意味着对边几乎与斜边相等，角很陡；接近 0 的正弦意味着对边相对于斜边很短，角很缓。这些都不意味着 0.6 是一个角；它是一个比例，只有反正弦才能把它变成度数。"
          },
          {
            "kind": "h3",
            "text": "为什么正弦在 0 和 1 之间"
          },
          {
            "kind": "p",
            "text": "斜边比对边长，因此 [[0 \\lt a \\lt c]]，于是："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "有效的非退化直角三角形，其锐角的正弦比不可能恰好为 0 或恰好为 1。当角接近 [[0^\\circ]] 时，值接近 0，因为对边缩小趋向于零；当角接近 [[90^\\circ]] 时，值接近 1，因为对边增长到几乎与斜边相等。真实三角形的锐角永远达不到这两个极限值。"
          },
          {
            "kind": "h3",
            "text": "正弦与余弦的对比"
          },
          {
            "kind": "p",
            "text": "两个比共用同一条斜边，但使用不同的分子："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] 和 [[\\cos(A)=b/c]]。"
          },
          {
            "kind": "p",
            "text": "正弦使用对边，即角对面的直角边；余弦使用邻边，即角旁边的直角边。大于 1 的结果意味着分数被颠倒了，或者斜边被放在了分子中。正弦不是余弦的倒数：正弦的倒数是余割。"
          }
        ],
        "imgAlt": "三个步骤：在三角形上标出 a=3、b=4、c=5，应用 sin(A)=a/c，得到 0.6，即 60%",
        "figcaption": "确定各边，应用公式并计算：对边是斜边的 60%。"
      },
      "sec-formula": {
        "h2": "正弦公式如何运作",
        "blocks": [
          {
            "kind": "p",
            "text": "公式遵循一个合乎逻辑的顺序。先从文字定义开始："
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}]]]"
          },
          {
            "kind": "p",
            "text": "然后使用页面现有的记号，对边用 [[a]]，斜边用 [[c]]："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "对边在分子中，因为正弦衡量这条边相对于斜边的大小；斜边在分母中，因为它是其他每条边都要与之比较的参考长度。排列是固定的：分子问“这条直角边有多大？”，分母答“与什么相比？”"
          },
          {
            "kind": "h3",
            "text": "完整解题示例：3-4-5 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3\\,\\text{cm}]]、[[b=4\\,\\text{cm}]] 和 [[c=5\\,\\text{cm}]]："
          },
          {
            "kind": "p",
            "text": "<strong>步骤 1：</strong>写出公式。[[\\sin(A)=a/c]]"
          },
          {
            "kind": "p",
            "text": "<strong>步骤 2：</strong>代入已知值。[[\\sin(A)=3/5]]"
          },
          {
            "kind": "p",
            "text": "<strong>步骤 3：</strong>相除。[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "<strong>步骤 4：</strong>解释结果。对边是斜边的 60%。"
          },
          {
            "kind": "p",
            "text": "<strong>步骤 5：</strong>验证三角形。[[3^2+4^2=5^2]]，且 [[9+16=25]]。勾股检验确认这些边长构成直角三角形，因此正弦结果可信。"
          },
          {
            "kind": "h3",
            "text": "重要说明"
          },
          {
            "kind": "p",
            "text": "如果读者想要的是角本身而不是它的正弦比，就需要反正弦：[[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]。反正弦也叫 arcsine，是与计算正弦比不同的运算。现有的正弦比计算器根据两个边长计算比值；它不直接返回角度。"
          }
        ]
      },
      "sec-howto": {
        "h2": "如何使用正弦比计算器",
        "blocks": [
          {
            "kind": "p",
            "text": "计算器精确地对应公式：两个输入，一个按钮，一个比值。按顺序走一遍界面。"
          }
        ],
        "steps": [
          "<strong>确定参考角 [[A]]。</strong>每次正弦计算都锚定在一个锐角上；对边是相对于它定义的。",
          "<strong>找到正对角 [[A]] 的对边 [[a]]。</strong>它是那条从不接触角顶点的直角边。",
          "<strong>找到正对直角且最长的边，即斜边 [[c]]。</strong>它正对标记 [[90^\\circ]] 角的小正方形。",
          "<strong>获取或测量两个边长。</strong>使用卷尺、图纸尺寸或题目给出的数值。",
          "<strong>在第一个输入框中输入对边长度。</strong>这成为分子 [[a]]。",
          "<strong>在第二个输入框中输入斜边长度。</strong>这成为分母 [[c]]。",
          "<strong>使用可用的单位选择器选择兼容的测量单位。</strong>米配米，厘米配厘米；混合单位会得到无意义的比值。",
          "<strong>确认两个测量值都为正数。</strong>零或负的长度无法构成三角形。",
          "<strong>检查斜边比对边长。</strong>如果 [[a \\ge c]]，则输入颠倒了，或者三角形不可能存在。",
          "<strong>点击 Calculate sin(A)。</strong>工具将对边除以斜边。",
          "<strong>读取得到的正弦比。</strong>它是一个普通小数，不是角度也不是长度。",
          "<strong>确认结果大于 0 且小于 1。</strong>对于参考角为锐角的有效非退化直角三角形，这是唯一的合法范围。",
          "<strong>当你想清除输入并开始另一次计算时，使用 Reset。</strong>"
        ],
        "closingParagraphs": [
          "计算器不需要邻边或角度输入。它只做除法，别无其他：没有保存的历史记录，没有图表，没有隐藏模式。"
        ]
      },
      "sec-examples": {
        "h2": "计算正弦的分步示例",
        "blocks": [
          {
            "kind": "h3",
            "text": "示例 1：3-4-5 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3\\,\\text{cm}]]、[[b=4\\,\\text{cm}]] 和 [[c=5\\,\\text{cm}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "对边是斜边的 60%。"
          },
          {
            "kind": "h3",
            "text": "示例 2：5-12-13 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=5\\,\\text{m}]]、[[b=12\\,\\text{m}]] 和 [[c=13\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "对边约为斜边的 38.46%。"
          },
          {
            "kind": "h3",
            "text": "示例 3：30-60-90 三角形"
          },
          {
            "kind": "p",
            "text": "对于参考角 [[A=30^\\circ]]，对边是斜边的一半。使用 [[a=1\\,\\text{cm}]]、[[b=\\sqrt{3}\\,\\text{cm}]] 和 [[c=2\\,\\text{cm}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(30^\\circ)=\\frac{1}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(30^\\circ)=0.5}]]"
          },
          {
            "kind": "p",
            "text": "这是一个有用的特殊角结果：在 30 度时对边恰好是斜边的一半，这就是这个三角形在许多教科书题目中出现的原因。"
          },
          {
            "kind": "h3",
            "text": "示例 4：45-45-90 三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=1\\,\\text{cm}]]、[[b=1\\,\\text{cm}]] 和 [[c=\\sqrt{2}\\,\\text{cm}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(45^\\circ)=\\frac{1}{\\sqrt{2}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(45^\\circ)\\approx0.7071}]]"
          },
          {
            "kind": "p",
            "text": "相等的直角边使两个锐角的正弦值和余弦值相等：在 45 度时，每个锐角正对一条为 1 的直角边和一条为 [[\\sqrt{2}]] 的斜边，因此正弦和余弦重合。"
          }
        ]
      },
      "sec-applications": {
        "h2": "正弦比在现实生活中的使用示例",
        "blocks": [
          {
            "kind": "p",
            "text": "每个示例都说明情境，确定对边和斜边，将它们代入公式，并用通俗的语言解释结果。"
          },
          {
            "kind": "h3",
            "text": "示例 5：计算梯子的正弦比"
          },
          {
            "kind": "p",
            "text": "一把梯子长 5 米，沿垂直墙面达到 4 米高。参考角 [[A]] 在梯子与水平地面之间。梯子是斜边，[[c=5\\,\\text{m}]]；垂直高度是对边，[[a=4\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{4}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "垂直高度是梯子长度的 80%。比值描述了梯子的几何形状，并不能证明梯子放置得是否安全。"
          },
          {
            "kind": "h3",
            "text": "示例 6：计算屋顶椽条的正弦比"
          },
          {
            "kind": "p",
            "text": "一根屋顶椽条的斜长为 6.5 米，垂直升高为 2.5 米。椽条是斜边，[[c=6.5\\,\\text{m}]]；垂直升高是对边，[[a=2.5\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{2.5}{6.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "垂直升高约为椽条长度的 38.46%。比值不能证明结构适用性或屋顶设计的合规性。"
          },
          {
            "kind": "h3",
            "text": "示例 7：评估坡道的正弦比"
          },
          {
            "kind": "p",
            "text": "一个简化的坡道斜长为 9.5 米，垂直升高为 0.75 米。坡面是斜边，[[c=9.5\\,\\text{m}]]；垂直升高是对边，[[a=0.75\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{0.75}{9.5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.07895}]]"
          },
          {
            "kind": "p",
            "text": "垂直升高约为斜长的 7.89%，是一个平缓的坡度。仅凭这个比值不能证明无障碍性或建筑规范的合规性。"
          },
          {
            "kind": "h3",
            "text": "示例 8：一次测量工作"
          },
          {
            "kind": "p",
            "text": "一个简化的测量三角形直线距离为 50 米，垂直高差为 30 米。直线是斜边，[[c=50\\,\\text{m}]]；垂直高差是对边，[[a=30\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{30}{50}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "垂直高差是直线距离的 60%。实际测量可能需要额外的改正、仪器高调整和更详细的测量。"
          },
          {
            "kind": "h3",
            "text": "示例 9：支撑电杆的拉线"
          },
          {
            "kind": "p",
            "text": "一根拉线长 13 米，其固定点高于地面锚的水平面 5 米。拉线是斜边，[[c=13\\,\\text{m}]]；垂直间距是对边，[[a=5\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{5}{13}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)\\approx0.3846}]]"
          },
          {
            "kind": "p",
            "text": "垂直间距约为拉线长度的 38.46%。比值不能证明拉线张力、锚固强度或结构安全。"
          },
          {
            "kind": "h3",
            "text": "示例 10：计算楼梯斜梁的正弦比"
          },
          {
            "kind": "p",
            "text": "一个简化的楼梯斜梁长 5 米，垂直升高 3 米。斜梁是斜边，[[c=5\\,\\text{m}]]；垂直升高是对边，[[a=3\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{3}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "垂直升高是对角斜梁长度的 60%。该计算不验证楼梯尺寸或建筑规范的合规性。"
          },
          {
            "kind": "h3",
            "text": "示例 11：理解起重机吊臂的垂直分量"
          },
          {
            "kind": "p",
            "text": "一个简化的起重机吊臂长 10 米，垂直分量为 8 米。吊臂是斜边，[[c=10\\,\\text{m}]]；垂直分量是对边，[[a=8\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{8}{10}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "垂直分量是吊臂长度的 80%。比值不能证明起重机的起重能力或作业安全。"
          },
          {
            "kind": "h3",
            "text": "示例 12：一段直线飞行航段"
          },
          {
            "kind": "p",
            "text": "对于一个简化的飞行航段，飞机沿直线路径飞行 5 公里，同时爬升 1.5 公里。路径是斜边，[[c=5\\,\\text{km}]]；垂直爬升是对边，[[a=1.5\\,\\text{km}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.5}{5}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.3}]]"
          },
          {
            "kind": "p",
            "text": "垂直爬升是直线路径长度的 30%。这是一个理想化的几何示例，不是完整的飞行导航计算。"
          },
          {
            "kind": "h3",
            "text": "示例 13：对角机械支撑"
          },
          {
            "kind": "p",
            "text": "一个对角支撑长 2 米，垂直分量为 1.6 米。支撑是斜边，[[c=2\\,\\text{m}]]；垂直分量是对边，[[a=1.6\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.6}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "垂直分量是支撑长度的 80%。比值不能确定支撑的强度或适用性。"
          },
          {
            "kind": "h3",
            "text": "示例 14：一条徒步路线的正弦比"
          },
          {
            "kind": "p",
            "text": "一段简化的直线徒步路段路径长 100 米，垂直爬升 25 米。路径是斜边，[[c=100\\,\\text{m}]]；高程增加是对边，[[a=25\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{25}{100}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.25}]]"
          },
          {
            "kind": "p",
            "text": "高程增加是直线路径长度的 25%。实际的徒步路线可能包含弯道和变化的坡度。"
          },
          {
            "kind": "h3",
            "text": "示例 15：遮阳篷支架"
          },
          {
            "kind": "p",
            "text": "一个遮阳篷支架长 3 米，垂直分量为 1.2 米。支架是斜边，[[c=3\\,\\text{m}]]；垂直分量是对边，[[a=1.2\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{1.2}{3}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.4}]]"
          },
          {
            "kind": "p",
            "text": "垂直分量是支架长度的 40%。该计算不能证明结构适用性。"
          },
          {
            "kind": "h3",
            "text": "示例 16：看向树顶的视线"
          },
          {
            "kind": "p",
            "text": "一条看向树顶的简化视线长 20 米。观察者眼睛高度与树顶之间的垂直差为 12 米。视线是斜边，[[c=20\\,\\text{m}]]；垂直差是对边，[[a=12\\,\\text{m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=\\frac{12}{20}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\sin(A)=0.6}]]"
          },
          {
            "kind": "p",
            "text": "垂直差是视线距离的 60%。除非计入观察者的眼睛高度和其他必要信息，否则该结果不能给出树在地面以上的总高度。"
          }
        ],
        "closingParagraphs": [
          "正弦是一个数学比值，不是有单位的物理量。它的实用价值来自于比较垂直或正交分量与斜向距离、在已知角度时计算分量以及验证几何关系。不要把正弦单独当作结构安全、承载能力、无障碍性或工程合规的证明。"
        ],
        "tables": [
          {
            "headers": [
              "情境",
              "对边 [[a]]",
              "斜边 [[c]]",
              "公式",
              "比值",
              "含义"
            ],
            "rows": [
              ["梯子", "4 m", "5 m", "4/5", "0.8", "高度是梯子长度的 80%"],
              ["屋顶椽条", "2.5 m", "6.5 m", "2.5/6.5", "0.3846", "升高是椽条长度的 38.46%"],
              ["坡道", "0.75 m", "9.5 m", "0.75/9.5", "0.07895", "平缓坡度，升高 7.89%"],
              ["测量", "30 m", "50 m", "30/50", "0.6", "高程是直线距离的 60%"],
              ["拉线", "5 m", "13 m", "5/13", "0.3846", "高度是拉线长度的 38.46%"],
              ["楼梯斜梁", "3 m", "5 m", "3/5", "0.6", "升高是斜梁长度的 60%"],
              ["起重机吊臂", "8 m", "10 m", "8/10", "0.8", "垂直范围是吊臂的 80%"],
              ["飞行航段", "1.5 km", "5 km", "1.5/5", "0.3", "爬升是飞行路径的 30%"],
              ["对角支撑", "1.6 m", "2 m", "1.6/2", "0.8", "垂直分量是支撑长度的 80%"],
              ["徒步路线", "25 m", "100 m", "25/100", "0.25", "爬升是路径长度的 25%"],
              ["遮阳篷支架", "1.2 m", "3 m", "1.2/3", "0.4", "垂直分量是支架的 40%"],
              ["视线", "12 m", "20 m", "12/20", "0.6", "高差是视线的 60%"]
            ]
          }
        ],
        "imgAlt": "四个面板：梯子比值 0.8、坡道 0.07895、测量 0.6、起重机吊臂 0.8，均带标注的直角三角形",
        "figcaption": "四个实际计算：梯子、坡道、测量和起重机吊臂，每个都有三角形、公式和比值。"
      },
      "sec-angle": {
        "h2": "理解正弦与角大小之间的关系",
        "blocks": [
          {
            "kind": "p",
            "text": "正弦随参考角的增大而增大。几何解释了原因：当角 [[A]] 很小时，对边相对于斜边很短，因此比值接近 0。随着角变大，对边占斜边的份额越来越大，比值向 1 爬升。在 [[30^\\circ]] 时正弦恰好为 0.5；在 [[45^\\circ]] 时约为 0.7071；在 [[60^\\circ]] 时约为 0.8660；当角接近 [[90^\\circ]] 时，正弦接近 1。"
          }
        ],
        "tables": [
          {
            "headers": [
              "角 [[A]]",
              "正弦比",
              "解释"
            ],
            "rows": [
              ["[[30^\\circ]]", "0.5", "对边是斜边的一半"],
              ["[[45^\\circ]]", "约 0.7071", "对边约为斜边的 70.71%"],
              ["[[60^\\circ]]", "约 0.8660", "对边约为斜边的 86.60%"],
              ["[[80^\\circ]]", "约 0.9848", "对边约为斜边的 98.48%"]
            ]
          }
        ],
        "closingParagraphs": [
          "规律简单而单调：角的每次增大都会提高正弦，而对于每个锐角，比值都保持在 0 和 1 之间。正弦描述的是三角形的形状而不是它的绝对大小：两个具有相同锐角的三角形即使边长不同，也具有相同的正弦比。[[90^\\circ]] 输入是一个极限参考值，而不是非退化直角三角形中的锐角。"
        ],
        "imgAlt": "30、45、60 度下的三个三角形，正弦值分别为 0.5、0.7071、0.8660；角增大时正弦上升",
        "figcaption": "随着角 A 增大，对边占斜边的份额越来越大，因此 sin(A) 上升。"
      },
      "sec-hypotenuse": {
        "h2": "如何用正弦求对边",
        "blocks": [
          {
            "kind": "p",
            "text": "当斜边和角已知时，可以重新排列正弦公式来求对边。从 [[\\sin(A)=a/c]] 开始，两边同乘以 [[c]]："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=c\\sin(A)}]]]"
          },
          {
            "kind": "p",
            "text": "对边等于斜边乘以角的正弦。已知斜边 [[c=10\\,\\text{m}]]、角 [[A=30^\\circ]]，且已知 [[\\sin(30^\\circ)=0.5]]："
          },
          {
            "kind": "p",
            "text": "[[a=10\\times0.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=5\\,\\text{m}}]]"
          },
          {
            "kind": "p",
            "text": "对于 [[30^\\circ]] 角，对边是斜边的一半，这与 30-60-90 几何一致：30 度对面的边恰好是斜边的一半。"
          },
          {
            "kind": "p",
            "text": "用同样的方法再次重新排列，可以求出斜边："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{a}{\\sin(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "已知对边 [[a=6\\,\\text{m}]]、[[A=30^\\circ]]：[[c=6/0.5]]，因此 [[\\boxed{c=12\\,\\text{m}}]]。这些都是同一公式的数学重新排列。本页的计算器根据边长返回正弦比；它不直接计算缺失的边。"
          }
        ]
      },
      "sec-recover": {
        "h2": "如何从正弦比求角度",
        "blocks": [
          {
            "kind": "p",
            "text": "正弦比和角度是不同的量：一个是无量纲的边比较，另一个以度为单位。当正弦比已知而需要角度时，可以使用反正弦："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\sin^{-1}\\left(\\frac{a}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "反正弦也叫 arcsine。已知 [[\\sin(A)=0.6]]："
          },
          {
            "kind": "p",
            "text": "[[A=\\sin^{-1}(0.6)]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
          },
          {
            "kind": "p",
            "text": "当计算器设置为度模式时，角度约为 [[36.87^\\circ]]。这是单独的角度计算，不是正弦比计算器直接执行的操作。在更广泛的三角学中，反正弦可能有多个角度解，但直角三角形的锐角限制选择了合适的锐角解。"
          }
        ]
      },
      "sec-mistakes": {
        "h2": "计算正弦时的常见错误",
        "blocks": [
          {
            "kind": "p",
            "text": "大多数正弦错误来自颠倒的分数、标错的边或单位失误。在相信结果之前，先过一遍这份清单。"
          }
        ],
        "steps": [
          "<strong>用了邻边而不是对边。</strong>计算 [[b/c]] 得到的是余弦。当 [[a=3]]、[[b=4]]、[[c=5]] 时，错误的边给出 0.8；正确的边给出 0.6。",
          "<strong>颠倒公式，计算 [[c/a]] 而不是 [[a/c]]。</strong>这返回的是余割，而不是正弦。当 [[a=3]]、[[c=5]] 时，颠倒的分数给出 1.6667，始终大于 1，是一个明显的警告信号。",
          "<strong>混淆正弦与余弦。</strong>正弦用对边；余弦用邻边。如果分子中是错误的边，答案是余弦而不是正弦。",
          "<strong>混淆正弦与余割。</strong>余割是倒数，即斜边除以对边。相似的名称会造成实际错误，但分数的顺序恰好相反。",
          "<strong>输入了比斜边还长的对边。</strong>斜边始终是最长的边。如果 [[a \\ge c]]，则输入颠倒了，或者三角形不可能存在。",
          "<strong>输入了零或负的边长。</strong>三角形不可能有零或负的边，因此这些输入表明数据录入错误或测量缺失，而不是有效的边界情况。",
          "<strong>混用了测量单位。</strong>对边 3 米配斜边 50 厘米得到 6，是一个无意义的数字。先转换到同一单位：3 米和 5 米给出正确的 0.6。",
          "<strong>把正弦比报告为以度为单位的角度。</strong>结果 0.6 是一个比值，不是 [[0.6^\\circ]]。把它当作度数会给后续的任何计算输入垃圾。",
          "<strong>以为正弦有物理单位。</strong>单位在除法中抵消了，因此“0.6 米”是错的。写出普通数字，把单位留在它们所属的输入测量中。",
          "<strong>混淆参考角与直角。</strong>正弦始终使用锐角。在这些计算中，[[90^\\circ]] 角从不是参考角 [[A]]。",
          "<strong>过早四舍五入。</strong>把中间除法四舍五入到两位小数再继续计算会累积误差。每一步都保持完整精度，只对最终答案四舍五入。",
          "<strong>以为每个角的正弦都一样。</strong>每个角都有自己的正弦值。0.6 的结果属于某一个特定的角（约 36.87 度），而不是每个直角三角形。",
          "<strong>以为正弦值 0.6 意味着角是 [[0.6^\\circ]]。</strong>比值不是度数度量。如果需要的是角本身，用反正弦转换。",
          "<strong>混淆倒数正弦与反正弦。</strong>[[1/\\sin(A)]] 是余割，是一个比值；[[\\sin^{-1}]] 是反正弦，返回一个角度。相似的名称会造成实际错误，因此要仔细读记号。",
          "<strong>以为正弦比决定三角形的绝对大小。</strong>正弦描述形状而不是大小：从对边 3 厘米到对边 3 千米，无数个三角形共享 0.6 的正弦。比值固定了比例；实际长度至少需要一条边的测量。"
        ],
        "closingParagraphs": [
          "<strong>错误与正确：一个解题对比</strong>",
          "已知对边 [[a=3]]、斜边 [[c=5]]：",
          "<strong>错误：</strong>[[5/3\\approx1.6667]]。这是余割比，不是正弦比。分子和分母颠倒了。",
          "<strong>正确：</strong>[[\\sin(A)=3/5=0.6]]。",
          "<strong>验证：</strong>[[\\csc(A)=1/0.6\\approx1.6667]]。倒数检验确认了结果，答案在 0 和 1 之间，正如每个有效的正弦都应如此。"
        ]
      },
      "sec-verify": {
        "h2": "如何检验正弦结果是否有效",
        "blocks": [
          {
            "kind": "p",
            "text": "有效的非退化直角三角形要求边为正数且斜边严格最长，[[0 \\lt a \\lt c]]，因此正弦结果必须落在 0 和 1 之间："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{0 \\lt \\frac{a}{c} \\lt 1}]]]"
          },
          {
            "kind": "p",
            "text": "两个测量必须使用兼容的单位。小于或等于 0、或大于或等于 1 的结果通常表明输入无效、边颠倒或三角形模型错误。"
          },
          {
            "kind": "h3",
            "text": "方法 1：检验比值"
          },
          {
            "kind": "p",
            "text": "直接重新验证 [[\\sin(A)=a/c]]。当 [[a=3]]、[[c=5]] 时：[[\\sin(A)=3/5=0.6]]。如果第二次手算不一致，说明某条边标错了或某个单位混用了。"
          },
          {
            "kind": "h3",
            "text": "方法 2：检验勾股定理"
          },
          {
            "kind": "p",
            "text": "如果需要邻边，计算 [[b=\\sqrt{c^2-a^2}]]。对于 [[a=3]]、[[c=5]]：[[b=\\sqrt{25-9}=4]]，且 [[3^2+4^2=5^2]]。这确认了 3-4-5 直角三角形的尺寸。邻边在这里是验证值，不是主要正弦公式的一部分。"
          },
          {
            "kind": "h3",
            "text": "方法 3：用反正弦检验"
          },
          {
            "kind": "p",
            "text": "对于正弦比 0.6：[[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]。由于正弦略高于 0.5，角度应略高于 [[30^\\circ]]；如果不是，边标记很可能颠倒了。四舍五入可能带来微小差异。"
          }
        ]
      },
      "sec-vs": {
        "h2": "正弦与余弦、正切、余割的对比",
        "blocks": [
          {
            "kind": "p",
            "text": "每个比比较不同的边对，使用相同的参考角和边标记："
          }
        ],
        "tables": [
          {
            "headers": [
              "比",
              "公式",
              "比较什么"
            ],
            "rows": [
              ["正弦", "sin(A) = a/c", "对边与斜边"],
              ["余弦", "cos(A) = b/c", "邻边与斜边"],
              ["正切", "tan(A) = a/b", "对边与邻边"],
              ["余割", "csc(A) = c/a", "斜边与对边"],
              ["正割", "sec(A) = c/b", "斜边与邻边"],
              ["余切", "cot(A) = b/a", "邻边与对边"]
            ]
          }
        ],
        "closingParagraphs": [
          "正弦和余割是倒数对：[[\\csc(A)=1/\\sin(A)]]。如果 [[\\sin(A)=0.6]]，则 [[\\csc(A)\\approx1.6667]]。当对边相对于斜边已知、当垂直分量必须与斜长比较，或当 SOH 是匹配的口诀时，用正弦；邻边比斜边时用余弦；两条直角边都已知时用正切；斜边与对边比较时用余割。",
          "关于相邻的比，请参阅 <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">余弦比计算器</a>、<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">正切比计算器</a>、<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">余割比计算器</a>、<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">正割比计算器</a> 和 <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">余切比计算器</a>。"
        ]
      },
      "sec-related": {
        "h2": "探索相关的三角函数计算器",
        "related": [
          { "name": "余弦比计算器" },
          { "name": "正切比计算器" },
          { "name": "余割比计算器" },
          { "name": "正割比计算器" },
          { "name": "余切比计算器" },
          { "name": "直角三角形角度计算器" }
        ]
      },
      "sec-conclusion": {
        "h2": "自信地使用正弦比",
        "blocks": [
          {
            "kind": "p",
            "text": "正弦是三个主要比中的第一个：用对边除以斜边，你就描述了最长边中有多少位于角的对面。公式 [[\\sin(A)=a/c]] 只需要两个测量值，答案始终是 0 和 1 之间的无量纲数，并且随参考角的增大而增大。当需要缺失的边时，[[a=c\\sin(A)]] 恢复对边；当需要角度时，[[A=\\sin^{-1}(a/c)]] 恢复它。梯子、椽条、坡道或教科书的 3-4-5，方法从不变：确定对边，确定斜边，相除，并用 0 到 1 的范围验证。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "直角三角形的正弦公式是什么？",
        "answer": "sin(A) = a / c：用对边 a 除以斜边 c。对边为 3 厘米、斜边为 5 厘米时，结果为 3/5 = 0.6。这个小数就是完整答案，是一个无量纲的比值，不是角度。"
      },
      {
        "question": "如何根据两个边长计算正弦？",
        "answer": "确定参考角 A，用同一单位测量对边 a 和斜边 c，确认两者都为正数且 c 比 a 长，然后相除：sin(A) = a / c。在本页，在第一个输入框中输入对边，在第二个输入框中输入斜边，然后点击 Calculate sin(A)。"
      },
      {
        "question": "正弦和余弦有什么区别？",
        "answer": "正弦用对边除以斜边 (a/c)；余弦用邻边除以斜边 (b/c)。两者使用同一条斜边，但分子不同。大于 1 的结果意味着分数颠倒了或某条边标错了。"
      },
      {
        "question": "为什么直角三角形中锐角的正弦小于 1？",
        "answer": "在有效的非退化直角三角形中，斜边严格长于任一条直角边，因此 0 < a < c。用较小的长度除以较大的长度，结果总是小于 1：对于每个锐角参考角，0 < a/c < 1。"
      },
      {
        "question": "有效直角三角形中锐角的正弦能等于 1 吗？",
        "answer": "不能。正弦恰好为 1 要求对边等于斜边，这会把三角形压成一条没有宽度的垂直线。值 1 是一个极限值，当角 A 接近 90 度时趋近于它，真实三角形永远产生不了这个值。"
      },
      {
        "question": "正弦值 0.6 意味着什么？",
        "answer": "对边是斜边的 60%。在 3-4-5 三角形中，角 A 对面的边为 3 个单位，而斜边为 5 个单位，因此 sin(A) = 3/5 = 0.6。它描述三角形的形状，不是 0.6 度的角。"
      },
      {
        "question": "正弦比有测量单位吗？",
        "answer": "没有。两个输入都是用同一单位测量的长度，单位相互抵消：3 米 / 5 米 = 0.6，就像 300 厘米 / 500 厘米 = 0.6 一样。把正弦报告为普通数字，绝不要附带度数、米或英尺。"
      },
      {
        "question": "如何从正弦比求角度？",
        "answer": "对比值应用反正弦：A = sin^-1(a/c)。对于 sin(A) = 0.6，A = sin^-1(0.6)，约为 36.87 度。先把科学计算器设置为度模式。本页的计算器返回的是比值，不是角度。"
      },
      {
        "question": "如何用正弦求对边？",
        "answer": "把公式重新排列为 a = c * sin(A)。如果斜边为 10 米，角 A 为 30 度，sin(30 deg) = 0.5，因此 a = 10 * 0.5 = 5 米。这是手动的重新排列；本页的计算器根据边长返回比值，而不是缺失的边。"
      },
      {
        "question": "正弦和余割有什么区别？",
        "answer": "正弦用对边除以斜边 (a/c)；余割是它的倒数，即斜边除以对边 (c/a)。如果 sin(A) = 0.6，则 csc(A) = 1/0.6，约为 1.6667。两者互为倒数，绝不是可互换的公式。"
      },
      {
        "question": "不知道邻边也能计算正弦吗？",
        "answer": "可以。主要正弦公式只用对边和斜边，因此邻边从不参与计算。邻边只有在用勾股定理验证三角形，或当余弦、正切、正割参与计算时才有用。"
      },
      {
        "question": "正弦在实际测量中如何使用？",
        "answer": "正弦比较垂直或正交分量与斜向长度：梯子与其墙高、屋顶椽条与其垂直升高、坡道与其升高，或测量线与其高程差。比值告诉你斜向距离中有多少是垂直的，这对高度、净空和分量计算很有用。"
      }
    ],
    "faqHeading": "常见问题解答",
    "relatedHeading": "探索相关的三角函数计算器"
  }
};